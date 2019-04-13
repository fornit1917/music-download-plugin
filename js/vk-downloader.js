import axios from "axios";
import { CLASS_PROCESSED, GLOBAL_INIT_FLAG, DOWNLOAD_BUTTON_CLASS, ICON_BLUE_DOWNLOAD_BUTTON, DOWNLOAD_PROGRESS_CLASS } from "./constants";
import insertButtonBefore from "./download-button";
import { addStylesheet }  from "./utils";
import vkUnmaskUrl from "./vk-unmask-url";

const URL_LOAD_LINKS = "/al_audio.php";
const CHUNK_MAX_SIZE = 10;


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
        window[GLOBAL_INIT_FLAG] = true;
    }
}

function initAutoUpdate() {
    var autoUpdateTimeoutId = 0;
    var prevUrl = location.toString();
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
        const hashes = data[13].split("/");
        const track = {
            artist: data[4],
            title: data[3],
            node: rowNode,
            idWithHash: `${rowNode.dataset.fullId}_${hashes[2]}_${hashes[5]}`,
            id: rowNode.dataset.fullId,
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
    params.append("ids", Object.keys(tracksRegistry).map(id => tracksRegistry[id].idWithHash).join(","));
    return axios.post(URL_LOAD_LINKS, params);
}

function parseResponse(responseText) {
    const lines = responseText.split("<!>");
    const jsonStr = lines.find(line => line.startsWith("<!json>"));
    if (!jsonStr) {
        return [];
    }
    return JSON.parse(jsonStr.substr(7).trim()).reduce((urlsRegistry, item) => {
        const url = vkUnmaskUrl(item[2]);
        const urlParts = url.split("/");
        console.log(url);
        console.log(urlParts);
        const mp3Url = urlParts.length === 7 
            ? `https://${urlParts[2]}/${urlParts[3]}/${urlParts[5]}.mp3?${urlParts[6].split("?", 2)[1]}`
            : `https://${urlParts[2]}/${urlParts[3]}/${urlParts[4]}/${urlParts[6]}/${urlParts[7]}.mp3?${urlParts[8].split("?", 2)[1]}`

        urlsRegistry[`${item[1]}_${item[0]}`] = mp3Url;
        return urlsRegistry
    }, {});
}

function addDownloadButtons(tracksRegistry, urlsRegistry) {
    for (var id in tracksRegistry) {
        const track = tracksRegistry[id];
        insertButtonBefore({
            node: track.node.querySelector(".audio_row__performer_title"),
            url: urlsRegistry[id],
            fileName: `${track.artist} - ${track.title}.mp3`,
            artist: track.artist,
            title: track.title,
        });
    }
}

function addStyleForVkButton() {
    addStylesheet(`
        .${DOWNLOAD_BUTTON_CLASS} {
            display: block;
            float: left;
            width: 24px;
            height: 24px;
            margin: 8px 8px 0 0;
            background: url("${ICON_BLUE_DOWNLOAD_BUTTON}") no-repeat;
            font-size: 11px;
        }
        
        .${DOWNLOAD_BUTTON_CLASS}.${DOWNLOAD_PROGRESS_CLASS} {
            padding-top: 7px;
            height: 17px;
        }
        
        .${CLASS_PROCESSED} .audio_inline_player .audio_inline_player_left {
            padding: 0 45px;
        }`
    );
}
