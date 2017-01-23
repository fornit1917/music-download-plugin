(function(){
    if (typeof initMusicDownloader === 'function') {
        initMusicDownloader();
    } else {
        document.body.appendChild(document.createElement('script')).src='http://localhost:8080/dist/downloader.js';
    }
})();