# music-download-plugin

It's bookmarklet for download music from vk.com, m.vk.com and music.yandex.ru.

Just create bookmark with next url:

```
javascript:(function(){if (typeof initMusicDownloader === 'function') {initMusicDownloader();} else {document.body.appendChild(document.createElement('script')).src='https://fornit1917.github.io/music-download-plugin/dist/downloader.js';}})();
```

and click on this bookmark when you on site vk.com, m.vk.com or music.yandex.ru. Any track will has new button for download.
