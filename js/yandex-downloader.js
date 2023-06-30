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

    const tracks = document.querySelectorAll(`.d-track:not(.${CLASS_PROCESSED})`);

    tracks.forEach(trackNode => {
        
        const id = trackNode.dataset.itemId;
        const title = trackNode.querySelector(".d-track__name").innerText;
        const artist = getArtist(trackNode);

        trackNode.className += ` ${CLASS_PROCESSED}`;

        // console.log({ id, title, artist })

        insertButtonBefore({
            node: trackNode.querySelector(".d-like"),
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

function getArtist(trackNode) {
    var artistNode = trackNode.querySelector(".d-track__artists");
    if (!artistNode || !artistNode.innerText) {
        artistNode = document.querySelector(".page-artist__title");
    }
    if (!artistNode || !artistNode.innerText) {
        artistNode = document.querySelector(".page-album__artists-short .d-artists");
    }
    return artistNode ? artistNode.innerText : "";    
}

function initAutoUpdate() {
    var autoUpdateTimeoutId = 0;
    var prevUrl = location.toString();

    window.addEventListener("scroll", () => {
        clearTimeout(autoUpdateTimeoutId);
        autoUpdateTimeoutId = setTimeout(initYandexDownloader, 500);
    });

    setInterval(() => {
        const url = location.toString();
        if (url !== prevUrl) {
            prevUrl = url;
            initYandexDownloader();
        }
    }, 2000);
}

function addStyleForYandexButton() {
    addStylesheet(`
        .${DOWNLOAD_BUTTON_CLASS} {
            display: inline-block;
            vertical-align: top;
            width: 24px;
            height: 24px;
            margin-right: 5px;
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