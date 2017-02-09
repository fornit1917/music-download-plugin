import axios from "axios";
import { CLASS_PROCESSED, GLOBAL_INIT_FLAG, DOWNLOAD_BUTTON_CLASS, ICON_BLUE_DOWNLOAD_BUTTON } from "./constants";
import insertButtonBefore from "./download-button";
import { addGlobalAjaxOnCompleteHook, addStylesheet }  from "./utils";

export default function initYandexDownloader() {
    if (!window[GLOBAL_INIT_FLAG]) {
        addStyleForYandexButton();
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

function addStyleForYandexButton() {
    addStylesheet(`
        .${DOWNLOAD_BUTTON_CLASS} {
            display: inline-block;
            vertical-align: top;
            width: 24px;
            height: 24px;
            margin: 6px 10px;
            background-image: url("${ICON_BLUE_DOWNLOAD_BUTTON}");
            font-size: 11px;
        }
        
        .track_type_full .${DOWNLOAD_BUTTON_CLASS} {
            margin: 18.5px 10px;        
        }`
    );
}
