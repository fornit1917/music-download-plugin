import { saveAs } from "file-saver";
import ID3Writer from "browser-id3-writer";
import axios from "axios";
import { DOWNLOAD_BUTTON_CLASS, DOWNLOAD_PROGRESS_CLASS } from "./constants";

const decoder = document.createElement("textarea");

export default function insertButtonBefore({ node, url, fileName, onDownloadClick, attributes, artist, title }) {
    const btn = document.createElement("a");
    btn.setAttribute("download", fileName);
    btn.href = url;
    btn.className = `${DOWNLOAD_BUTTON_CLASS}`;
    btn.dataset.artist = artist;
    btn.dataset.title = title;
    btn.addEventListener("click", onDownloadClick ? onDownloadClick : downloadByUrl);

    if (attributes) {
        for (var key in attributes) {
            btn.setAttribute(key, attributes[key]);
        }
    }

    node.parentNode.insertBefore(btn, node);
}

export function downloadByUrl(e) {
    const btn =e.target;
    e.stopPropagation();
    if (btn.dataset.noUseAjax) {
        return true;
    }

    e.preventDefault();
    if (e.target.hasAttribute("disabled")) {
        return false;
    }

    const url = e.target.href;
    const name = btn.getAttribute("download");

    disableDownloadButton(btn);
    axios.request({
        url,
        responseType: "arraybuffer",
        onDownloadProgress: progressEvent => {
            if (progressEvent.lengthComputable) {
                if (btn.style.backgroundImage != "none") {
                    btn.style.backgroundImage = "none";
                    btn.className += ` ${DOWNLOAD_PROGRESS_CLASS}`;
                }
                const percent = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                e.target.innerHTML = `${percent}%`;
            }
        },
    }).then(
        resp => {
            const id3Writer = new ID3Writer(resp.data);
            id3Writer
                .setFrame('TPE1', [btn.dataset.artist])
                .setFrame('TIT2', btn.dataset.title);
            id3Writer.addTag();

            saveAs(id3Writer.getBlob(), htmlDecode(name));
            enableDownloadButton(e.target);
        },

        error => {
            enableDownloadButton(btn);
            btn.dataset.noUseAjax = "1";
            btn.click();
        }

    );

    return false;
}

export function disableDownloadButton(btn) {
    btn.style.opacity = "0.5";
    btn.setAttribute("disabled", "");
};

export function enableDownloadButton(btn) {
    btn.style.opacity = "1";
    btn.innerHTML = "";
    btn.style.backgroundImage = "";
    btn.removeAttribute("disabled");
    btn.className = btn.className.replace(` ${DOWNLOAD_PROGRESS_CLASS}`, '');
}

function htmlDecode(text) {
    decoder.innerHTML = text;
    return decoder.value;
}
