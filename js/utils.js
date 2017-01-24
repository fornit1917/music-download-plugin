export function addGlobalAjaxOnCompleteHook(cb) {
    if (XMLHttpRequest.callbacks) {
        XMLHttpRequest.callbacks.push(cb);
    } else {
        const originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.callbacks = [cb];
        XMLHttpRequest.prototype.send = function () {
            const originalCallback = this.onreadystatechange;
            this.onreadystatechange = () => {
                if (typeof originalCallback == "function") {
                    originalCallback(this);
                }
                if ((this.responseType === "" || this.responseType === "text") && this.readyState == 4) {
                    XMLHttpRequest.callbacks.forEach(cb => { cb(this); });
                }
            }
            originalSend.apply(this, arguments);
        }
    }
}
