!(function(e) {
    function n(n) {
        for (var r, l, a = n[0], c = n[1], i = n[2], p = 0, s = []; p < a.length; p++)
            (l = a[p]), o[l] && s.push(o[l][0]), (o[l] = 0)
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r])
        for (f && f(n); s.length; ) s.shift()()
        return u.push.apply(u, i || []), t()
    }
    function t() {
        for (var e, n = 0; n < u.length; n++) {
            for (var t = u[n], r = !0, a = 1; a < t.length; a++) {
                var c = t[a]
                0 !== o[c] && (r = !1)
            }
            r && (u.splice(n--, 1), (e = l((l.s = t[0]))))
        }
        return e
    }
    var r = {},
        o = { 0: 0 },
        u = []
    function l(n) {
        if (r[n]) return r[n].exports
        var t = (r[n] = { i: n, l: !1, exports: {} })
        return e[n].call(t.exports, t, t.exports, l), (t.l = !0), t.exports
    }
    ;(l.m = e),
        (l.c = r),
        (l.d = function(e, n, t) {
            l.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t })
        }),
        (l.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (l.t = function(e, n) {
            if ((1 & n && (e = l(e)), 8 & n)) return e
            if (4 & n && 'object' == typeof e && e && e.__esModule) return e
            var t = Object.create(null)
            if (
                (l.r(t),
                Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
                2 & n && 'string' != typeof e)
            )
                for (var r in e)
                    l.d(
                        t,
                        r,
                        function(n) {
                            return e[n]
                        }.bind(null, r)
                    )
            return t
        }),
        (l.n = function(e) {
            var n =
                e && e.__esModule
                    ? function() {
                          return e.default
                      }
                    : function() {
                          return e
                      }
            return l.d(n, 'a', n), n
        }),
        (l.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }),
        (l.p = '')
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        c = a.push.bind(a)
    ;(a.push = n), (a = a.slice())
    for (var i = 0; i < a.length; i++) n(a[i])
    var f = c
    u.push([465, 1]), t()
})({
    465: function(e, n, t) {
        e.exports = t(466)
    },
    466: function(e, n, t) {
        'use strict'
        var r = (function(e) {
            return e && e.__esModule ? e : { default: e }
        })(t(467))
        var o = new r.default.Game(480, 320, r.default.AUTO, null, {
            preload: function() {
                ;(o.scale.scaleMode = r.default.ScaleManager.SHOW_ALL),
                    (o.scale.pageAlignHorizontally = !0),
                    (o.scale.pageAlignVertically = !0),
                    (o.stage.backgroundColor = '#eee'),
                    console.log(o)
            },
            create: function() {},
            update: function() {}
        })
    }
})
//# sourceMappingURL=main.js.map
