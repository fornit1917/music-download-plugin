import { saveAs } from "file-saver";
import axios from "axios";

const ICON_DOWNLOAD = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyODYuMDU0IDI4Ni4wNTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4Ni4wNTQgMjg2LjA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHN0eWxlPSJmaWxsOiM1MDcyOTk7IiBkPSJNMTQzLjAyNywwQzY0LjA0LDAsMCw2NC4wNCwwLDE0My4wMjdjMCw3OC45OTYsNjQuMDQsMTQzLjAyNywxNDMuMDI3LDE0My4wMjdzMTQzLjAyNy02NC4wMzEsMTQzLjAyNy0xNDMuMDI3QzI4Ni4wNTQsNjQuMDQ5LDIyMi4wMTQsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOXM1Mi4wMjYtMTE2LjIsMTE2LjIwOS0xMTYuMnMxMTYuMjA5LDUyLjAxNywxMTYuMjA5LDExNi4yUzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE5NC43MDQsMTM0LjA4OGgtMjQuODZWODkuMzkyYzAtNC45MzQtMy45OTYtOC45MzktOC45MzktOC45MzloLTM1Ljc1N2MtNC45MzQsMC04LjkzOSw0LjAwNS04LjkzOSw4LjkzOXY0NC42OTZIOTEuMzQxYy05LjY5OSwwLTEzLjY2OCw2LjQ2My04LjgyMywxNC4zMzhsNTEuNjg2LDUxLjA5NmM0Ljg0NSw3Ljg4NCwxMi43ODMsNy44ODQsMTcuNjM3LDBsNTEuNjc3LTUxLjA5NkMyMDguMzgxLDE0MC41NTEsMjA0LjQxMiwxMzQuMDg4LDE5NC43MDQsMTM0LjA4OHoiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+";
const BG_STYLE = `url(${ICON_DOWNLOAD})`;

const decoder = document.createElement("textarea");

export default function insertButtonDefore({ node, url, fileName, style }) {
    const btn = document.createElement("a");
    btn.setAttribute("download", fileName);
    btn.href = url;
    btn.addEventListener("click", download);

    btn.style.backgroundImage = BG_STYLE;
    btn.style.color = "#507299";
    Object.keys(style).forEach(key => { btn.style[key] = style[key] });

    node.parentNode.insertBefore(btn, node);
}

function download (e) {
    const btn =e.target;
    if (btn.dataset.noUseAjax) {
        return true;
    }

    e.stopPropagation();
    e.preventDefault();
    if (e.target.hasAttribute("disabled")) {
        return false;
    }

    const url = e.target.href;
    const name = btn.getAttribute("download");

    disableDownloadButton(btn);
    axios.request({
        url,
        responseType: "blob",
        onDownloadProgress: progressEvent => {
            if (progressEvent.lengthComputable) {
                if (btn.style.backgroundImage !== "") {
                    btn.style.backgroundImage = "";
                }
                const percent = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                e.target.innerHTML = `${percent}%`;
            }
        },
    }).then(
        resp => {
            enableDownloadButton(e.target);
            saveAs(resp.data, htmlDecode(name));
        },

        error => {
            enableDownloadButton(btn);
            btn.dataset.noUseAjax = "1";
            btn.click();
        }

    );

    return false;
}

function disableDownloadButton(btn) {
    btn.style.opacity = "0.5";
    btn.setAttribute("disabled", "");
};

function enableDownloadButton(btn) {
    btn.style.opacity = "1";
    btn.innerHTML = "";
    btn.style.backgroundImage = BG_STYLE;
    btn.removeAttribute("disabled");
}

function htmlDecode(text) {
    decoder.innerHTML = text;
    return decoder.value;
}
