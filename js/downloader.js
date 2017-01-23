import initVkDownloader from "./vk-downloader";

function initMusicDownloader() {
    initVkDownloader();
}

window.initMusicDownloader = initVkDownloader;

// run plugin
(function () {
    initMusicDownloader();
})();
