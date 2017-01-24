import initVkDownloader from "./vk-downloader";

function initMusicDownloader() {
    if (location.hostname === "vk.com") {
        initVkDownloader();
    } else {
        alert(`${location.hostname} is unsupported site for Music Download Plugin`);
    }
}

window.initMusicDownloader = initMusicDownloader;

// run plugin
(function () {
    initMusicDownloader();
})();
