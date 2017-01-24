import initVkDownloader from "./vk-downloader";

function initMusicDownloader() {
    initVkDownloader();
}

window.initMusicDownloader = initMusicDownloader;

// run plugin
(function () {
    initMusicDownloader();
})();
