import axios from "axios";
import { CLASS_PROCESSED, GLOBAL_INIT_FLAG, PREFIX } from "./constants";
import insertButtonBefore from "./download-button";
import { addGlobalAjaxOnCompleteHook, addStylesheet }  from "./utils";

const URL_LOAD_LINKS = "/al_audio.php";
const CHUNK_MAX_SIZE = 10;
const VK_DOWNLOAD_BUTTON_CLASS = `${PREFIX}-vk-download-button`;

const ICON_VK_DOWNLOAD_BUTTON = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyODYuMDU0IDI4Ni4wNTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4Ni4wNTQgMjg2LjA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHN0eWxlPSJmaWxsOiM1MDcyOTk7IiBkPSJNMTQzLjAyNywwQzY0LjA0LDAsMCw2NC4wNCwwLDE0My4wMjdjMCw3OC45OTYsNjQuMDQsMTQzLjAyNywxNDMuMDI3LDE0My4wMjdzMTQzLjAyNy02NC4wMzEsMTQzLjAyNy0xNDMuMDI3QzI4Ni4wNTQsNjQuMDQ5LDIyMi4wMTQsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOXM1Mi4wMjYtMTE2LjIsMTE2LjIwOS0xMTYuMnMxMTYuMjA5LDUyLjAxNywxMTYuMjA5LDExNi4yUzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE5NC43MDQsMTM0LjA4OGgtMjQuODZWODkuMzkyYzAtNC45MzQtMy45OTYtOC45MzktOC45MzktOC45MzloLTM1Ljc1N2MtNC45MzQsMC04LjkzOSw0LjAwNS04LjkzOSw4LjkzOXY0NC42OTZIOTEuMzQxYy05LjY5OSwwLTEzLjY2OCw2LjQ2My04LjgyMywxNC4zMzhsNTEuNjg2LDUxLjA5NmM0Ljg0NSw3Ljg4NCwxMi43ODMsNy44ODQsMTcuNjM3LDBsNTEuNjc3LTUxLjA5NkMyMDguMzgxLDE0MC41NTEsMjA0LjQxMiwxMzQuMDg4LDE5NC43MDQsMTM0LjA4OHoiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+";

export default function initVkDownloader() {
    const chunks = getTracksChunks();
    chunks.forEach(tracksRegistry => {
        loadURLs(tracksRegistry).then(
            (resp) => {
                const urlsRegistry = parseResponse(resp.data);
                addDownloadButtons(tracksRegistry, urlsRegistry);
            },
            (err) => {
                console.log(err);
            }
        );
    });

    if (!window[GLOBAL_INIT_FLAG]) {
        addStyleForVkButton();
        initAutoUpdate();
    }    

    window[GLOBAL_INIT_FLAG] = true;
}

function initAutoUpdate() {
    var autoUpdateTimeoutId = 0;
    var prevUrl = location.toString();
    addGlobalAjaxOnCompleteHook(xhr => {
        if (xhr.responseText.indexOf('audio_row') !== -1 || xhr.responseText.indexOf('.mp3?extra=') !== -1) {
             clearTimeout(autoUpdateTimeoutId);
             autoUpdateTimeoutId = setTimeout(initVkDownloader, 500);
        }
    });
    window.addEventListener("scroll", () => {
        clearTimeout(autoUpdateTimeoutId);
        autoUpdateTimeoutId = setTimeout(initVkDownloader, 100);        
    });
    setInterval(() => {
        const url = location.toString();
        if (url !== prevUrl) {
            prevUrl = url;
            initVkDownloader();
        }
    }, 1000);
}

function getTracksChunks() {
    var chunks = [{}];
    var chunkNum = 0;
    var chunkSize = 0;

    Array.from(document.querySelectorAll(`.audio_row:not(.${CLASS_PROCESSED})`)).forEach(rowNode => {
        if (chunkSize == CHUNK_MAX_SIZE) {
            chunkNum++;
            chunks[chunkNum] = {};
            chunkSize = 0;
        }
        const data = JSON.parse(rowNode.dataset.audio);
        const track = {
            artist: data[4],
            title: data[3],
            node: rowNode,
            id: rowNode.id.substr(6)
        };
        rowNode.className += ` ${CLASS_PROCESSED}`;
        chunks[chunkNum][track.id] = track;
        chunkSize++;
    });

    return chunks;
}

function loadURLs(tracksRegistry) {
    const params = new URLSearchParams();
    params.append("act", "reload_audio");
    params.append("al", "1");
    params.append("ids", Object.keys(tracksRegistry).join(","));
    return axios.post(URL_LOAD_LINKS, params);
}

function parseResponse(responseText) {
    const lines = responseText.split("<!>");
    const jsonStr = lines.find(line => line.startsWith("<!json>"));
    if (!jsonStr) {
        return [];
    }
    return JSON.parse(jsonStr.substr(7).trim()).reduce((urlsRegistry, item) => {
        urlsRegistry[`${item[1]}_${item[0]}`] = item[2];
        return urlsRegistry
    }, {});
}

function addDownloadButtons(tracksRegistry, urlsRegistry) {
    for (var id in tracksRegistry) {
        const track = tracksRegistry[id];
        insertButtonBefore({
            node: track.node.querySelector(".audio_info"),
            url: urlsRegistry[id],
            fileName: `${track.artist} - ${track.title}.mp3`,
            className: VK_DOWNLOAD_BUTTON_CLASS,
        });
    }
}

function addStyleForVkButton() {
    addStylesheet(`
        .${VK_DOWNLOAD_BUTTON_CLASS} {
            display: block;
            float: left;
            width: 24px;
            height: 18px;
            padding-top: 6px;
            margin: 0px 5px 0px 10px;
            background-image: url("${ICON_VK_DOWNLOAD_BUTTON}");
            font-size: 11px;
        }
        
        .${CLASS_PROCESSED} .audio_inline_player .audio_inline_player_left {
            padding: 0 45px;
        }`
    );
}
