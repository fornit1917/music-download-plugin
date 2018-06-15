import axios from "axios";
import {
    CLASS_PROCESSED, GLOBAL_INIT_FLAG, DOWNLOAD_BUTTON_CLASS, ICON_BLUE_DOWNLOAD_BUTTON, DOWNLOAD_PROGRESS_CLASS
} from "./constants";
import insertButtonBefore, { downloadByUrl, disableDownloadButton, enableDownloadButton } from "./download-button";
import { addStylesheet }  from "./utils";
import md5 from "blueimp-md5";

const SALT = "XGRlBW9FXlekgbPrRHuSiA";

export default function initYandexDownloader() {
    if (!window[GLOBAL_INIT_FLAG]) {
        addStyleForYandexButton();
        initAutoUpdate();
        window[GLOBAL_INIT_FLAG] = true;
    }

    const tracks = document.querySelectorAll(`.track__actions:not(.${CLASS_PROCESSED})`);
    tracks.forEach(trackNode => {
        const linkNode = trackNode.querySelector(".share");
        if (!linkNode) {
            return;
        }

        const parts = linkNode.href.split("/");
        const id = parts[parts.length - 1];
        const title = trackNode.parentNode.querySelector(".track__title").innerText;
        const artist = getArtistByTrackActionsNode(trackNode);

        trackNode.className += ` ${CLASS_PROCESSED}`;

        insertButtonBefore({
            node: trackNode.querySelector(".like"),
            url: "#",
            fileName: artist ? `${artist} - ${title}.mp3` : `${title}.mp3`,
            onDownloadClick,
            attributes: {
                "data-id": id,
            },
            title,
            artist,
        });
    })
};

function getArtistByTrackActionsNode(trackNode) {
    let artistsNode = trackNode.parentNode.querySelector(".track__artists"); // common tracklist with artists
    if (!artistsNode) {
        // if sidebar playlist
        if (trackNode.closest(".sidebar-playlist")) {
            const artistsNodes = trackNode.parentNode.querySelectorAll(".track__name-wrap .link.link_mute");
            return Array.from(artistsNodes).map(x => x.innerText).join(" & ");
        }
    }

    if (!artistsNode) {
        // album page or album sidebar
        let playlistNode = trackNode.closest(".page-album") || trackNode.closest(".sidebar-album");
        if (playlistNode) {
            artistsNode = playlistNode.querySelector(".album-summary__pregroup a");
        } else {
            // artist page
            playlistNode = trackNode.closest(".page-artist");
            if (playlistNode) {
                artistsNode = playlistNode.querySelector(".page-artist__info .page-artist__title");
            } else {
                // artist sidebar
                playlistNode = trackNode.closest(".sidebar-artist");
                artistsNode = playlistNode ? playlistNode.querySelector(".sidebar-artist__title") : null;
            }
        }
    }

    return artistsNode ? artistsNode.innerText : null;
}

function initAutoUpdate() {
    var autoUpdateTimeoutId = 0;
    var prevUrl = location.toString();

    document.addEventListener("click", function (e) {
        var node = e.target;
        if (node.parentNode.className.includes("album_selectable")
            || node.className.includes("album_selectable")
            || node.className.includes("d-hover__overlap")
            || node.parentNode.className.includes("artist__")
            || node.className.includes("playlist")) {

            clearTimeout(autoUpdateTimeoutId);
            autoUpdateTimeoutId = setTimeout(initYandexDownloader, 500);
        }
    });

    window.addEventListener("scroll", () => {
        clearTimeout(autoUpdateTimeoutId);
        autoUpdateTimeoutId = setTimeout(initYandexDownloader, 100);
    });

    setInterval(() => {
        const url = location.toString();
        if (url !== prevUrl) {
            prevUrl = url;
            initYandexDownloader();
        }
    }, 1000);
}

function addStyleForYandexButton() {
    addStylesheet(`
        .${DOWNLOAD_BUTTON_CLASS} {
            display: inline-block;
            vertical-align: top;
            width: 24px;
            height: 24px;
            margin: 3px 10px;
            background-image: url("${ICON_BLUE_DOWNLOAD_BUTTON}");
        }

        .${DOWNLOAD_BUTTON_CLASS}.${DOWNLOAD_PROGRESS_CLASS} {
            vertical-align: baseline;
            margin: 0px 10px;
            color: #507299;
            text-decoration: none;
        }`
    );
}

function onDownloadClick (e) {
    const btn = e.target;
    if (btn.dataset.hasUrl) {
        return downloadByUrl(e);
    }

    e.preventDefault();
    e.stopPropagation();

    const id = e.target.dataset.id;
    const trackInfoUrl =`https://music.yandex.ru/api/v2.1/handlers/track/${id}/track/download/m?hq=1`;
    disableDownloadButton(btn);
    axios.request({
        url: trackInfoUrl,
        headers: {
            "X-Retpath-Y": encodeURIComponent('https://music.yandex.ru/'),
        }
    }).then(
        resp => {
            return axios.get(`${resp.data.src}&format=json`);
        },
        error => { onDownloadError(error, btn); }

    ).then(
        resp => {
            const hash = md5(SALT + resp.data.path.substr(1) + resp.data.s);
            btn.href = `https://${resp.data.host}/get-mp3/${hash}/${resp.data.ts + resp.data.path}`;
            btn.dataset.hasUrl = "1";
            enableDownloadButton(btn);
            downloadByUrl(e);
        },
        error => { onDownloadError(error, btn); }
    );
}

function onDownloadError(error, btn) {
    enableDownloadButton(btn);
    console.log(error);
    alert("Error. Cannot download track");
}