# music-download-plugin

It's bookmarklet for download music from vk.com and m.vk.com.

Just create bookmark with next url:

```
javascript:(function(){if (typeof initMusicDownloader === 'function') {initMusicDownloader();} else {document.body.appendChild(document.createElement('script')).src='https://fornit1917.github.io/music-download-plugin/dist/downloader.js';}})();
```

and click on this bookmark when we on site vk.com / m.vk.com. Any track will has new button for download.
