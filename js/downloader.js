import initVkDownloader from "./vk-downloader";
import initVkMobileDownloader from "./vk-mobile-downloader";

function initMusicDownloader() {
    switch (location.hostname) {
        case "vk.com":
            initVkDownloader();
            break;
        case "m.vk.com":
            initVkMobileDownloader();
            break;
        default:
            alert(`${location.hostname} is unsupported site for Music Download Plugin`);
            break;
    }
}

window.initMusicDownloader = initMusicDownloader;

// run plugin
(function () {
    initMusicDownloader();
})();
