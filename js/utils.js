export function addStylesheet(cssCode) {
    const stylesheet = document.createElement("style");
    stylesheet.type = "text/css";
    stylesheet.innerHTML = cssCode;
    document.getElementsByTagName("head")[0].appendChild(stylesheet);
}

//some polyfills
(function(e){
    e.closest = e.closest || function(css){
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        }
})(Element.prototype);

(function () {
    if (!String.prototype.includes) {
        String.prototype.includes = function() {
            'use strict';
            return String.prototype.indexOf.apply(this, arguments) !== -1;
        };
    }
})();