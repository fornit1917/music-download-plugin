import { CLASS_PROCESSED, GLOBAL_INIT_FLAG, ICON_BLUE_DOWNLOAD_BUTTON, DOWNLOAD_BUTTON_CLASS } from "./constants";
import insertButtonBefore from "./download-button";
import { addGlobalAjaxOnCompleteHook, addStylesheet } from "./utils";
import vkUnmaskUrl from "./vk-unmask-url";

export default function initVkMobileDownloader() {
    if (!window[GLOBAL_INIT_FLAG]) {
        addStylesheetForMobileVkButton();
        initAutoUpdate();
        window[GLOBAL_INIT_FLAG] = true;
    }

    Array.from(document.querySelectorAll(`.audio_item.ai_has_btn:not(.${CLASS_PROCESSED})`)).forEach(node => {
        node.className += ` ${CLASS_PROCESSED}`;

        const artist = node.getElementsByClassName("ai_artist")[0].innerText;
        const title = node.getElementsByClassName("ai_title")[0].innerText;
        const fileName = `${artist} - ${title}.mp3`;
        const url = vkUnmaskUrl(node.getElementsByTagName("input")[0].value);
        let nodeForButton = node.getElementsByClassName("ai_del")[0];
        if (!nodeForButton) {
            nodeForButton = node.getElementsByClassName("ai_body")[0];
        }

        insertButtonBefore({
            fileName,
            url,
            node: nodeForButton
        });
    });
}

function addStylesheetForMobileVkButton() {
    addStylesheet(`
			.${DOWNLOAD_BUTTON_CLASS} {
				display: block;
				float: left;
				width: 24px;
				height: 18px;
				padding-top: 6px;
				margin: 0px 5px 0px 5px;
				background-image: url("${ICON_BLUE_DOWNLOAD_BUTTON}");
				font-size: 11px;
				text-align: center;
			}
			
			.wall_item .${DOWNLOAD_BUTTON_CLASS} {
				width: 40px;
				height: 30px;
				padding-top: 10px;
			}
			
			.wall_item .ai_current .${DOWNLOAD_BUTTON_CLASS},
			.wall_item .ai_playing .${DOWNLOAD_BUTTON_CLASS} {
				width: 24px !important;
				height: 18px !important;
				padding-top: 6px;
			}			
		`);
}

function initAutoUpdate() {
    var autoUpdateTimeoutId = 0;
    addGlobalAjaxOnCompleteHook(xhr => {
        if (xhr.responseText.indexOf('.mp3?extra=') !== -1) {
            clearTimeout(autoUpdateTimeoutId);
            autoUpdateTimeoutId = setTimeout(initVkMobileDownloader, 100);
        }
    });
    window.addEventListener("scroll", () => {
        clearTimeout(autoUpdateTimeoutId);
        autoUpdateTimeoutId = setTimeout(initVkMobileDownloader, 100);
    });
}