import { CLASS_PROCESSED, GLOBAL_INIT_FLAG, ICON_BLUE_DOWNLOAD_BUTTON, DOWNLOAD_BUTTON_CLASS, DOWNLOAD_PROGRESS_CLASS } from "./constants";
import insertButtonBefore from "./download-button";
import { addGlobalAjaxOnCompleteHook, addStylesheet } from "./utils";
import vkUnmaskUrl from "./vk-unmask-url";

const SELECTOR = `.audio_item.ai_has_btn:not(.${CLASS_PROCESSED})`;

export default function initVkMobileDownloader() {
    if (!window[GLOBAL_INIT_FLAG]) {
        addStylesheetForMobileVkButton();
        initAutoUpdate();
        window[GLOBAL_INIT_FLAG] = true;
    }

    Array.from(document.querySelectorAll(SELECTOR)).forEach(node => {
        node.className += ` ${CLASS_PROCESSED}`;

        const artist = node.getElementsByClassName("ai_artist")[0].innerText;
        const title = node.getElementsByClassName("ai_title")[0].innerText;
        const fileName = `${artist} - ${title}.mp3`;
        const url = vkUnmaskUrl(node.getElementsByTagName("input")[0].value);

        let nodeForButton = node.getElementsByClassName("ai_body")[0];

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
				width: 48px;
				height: 48px;
				margin: 0px 5px 0px 5px;
				background-image: url("${ICON_BLUE_DOWNLOAD_BUTTON}");
				font-size: 11px;
				text-align: center;
			}
			
            .${DOWNLOAD_BUTTON_CLASS}.${DOWNLOAD_PROGRESS_CLASS} {
                padding-top: 15px;
                height: auto;
			}
			
			.ai_current .${DOWNLOAD_BUTTON_CLASS},
			.ai_playing .${DOWNLOAD_BUTTON_CLASS} {
				width: 28px !important;
				height: 28px !important;
				position: absolute;
				right: 25px;
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