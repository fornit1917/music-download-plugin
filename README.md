# music-download-plugin

It's bookmarklet for download music from **vk.com**.

Sites m.vk.com and music.yandex.ru are temporary unsupported.

Just create bookmark with next url:

```
javascript:(function(){if (typeof initMusicDownloader === 'function') {initMusicDownloader();} else {document.body.appendChild(document.createElement('script')).src='https://mshelf.github.io/music-download-plugin/dist/downloader.js';}})();
```

and click on this bookmark when you on site vk.com. Any track will has new button for download.
