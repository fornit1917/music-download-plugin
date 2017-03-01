// this code was just copied from vk.com

export default function vkUnmaskUrl(url) {
    if (~url.indexOf("audio_api_unavailable")) {
        var i = url.split("?extra=")[1].split("#");
        var e = o(i[1]);

        if (i = o(i[0]), !e || !i) return url;

        e = e.split(String.fromCharCode(9));

        for (var a, r, l = e.length; l--; ) {
            if (r = e[l].split(String.fromCharCode(11)),
                    a = r.splice(0, 1, i)[0],
                    !s[a])
                return url;
            i = s[a].apply(null, r)
        }
        if (i && "http" === i.substr(0, 4)) {
            return i
        }
    }
    return url;
}

function o(t) {
    if (!t || t.length % 4 == 1)
        return !1;
    for (var i, e, o = 0, s = 0, r = ""; e = t.charAt(s++); )
        e = a.indexOf(e),
        ~e && (i = o % 4 ? 64 * i + e : e,
        o++ % 4) && (r += String.fromCharCode(255 & i >> (-2 * o & 6)));
    return r;
}

const s = {
    v: function(t) {
        return t.split("").reverse().join("")
    },
    r: function(t, i) {
        t = t.split("");
        for (var e, o = a + a, s = t.length; s--; )
            e = o.indexOf(t[s]),
            ~e && (t[s] = o.substr(e - i, 1));
        return t.join("")
    },
    x: function(t, i) {
        var e = [];
        return i = i.charCodeAt(0),
            each(t.split(""), function(t, o) {
                e.push(String.fromCharCode(o.charCodeAt(0) ^ i))
            }),
            e.join("")
    }
};

const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=";