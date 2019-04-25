# music-download-plugin

**Unfortunately, vk.com and music.yandex.ru restrict loading javascripts from external domain, and this plug-in does not work now :(.**

It's bookmarklet for download music from **vk.com**.

Just create bookmark with next url:

```
javascript:(function(){if (typeof initMusicDownloader === 'function') {initMusicDownloader();} else {document.body.appendChild(document.createElement('script')).src='https://fornit1917.github.io/music-download-plugin/dist/downloader.js';}})();
```

and click on this bookmark when you on site vk.com. Any track will has new button for download.
