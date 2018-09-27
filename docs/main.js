!(function(e) {
    function t(t) {
        for (var n, l, a = t[0], i = t[1], f = t[2], s = 0, p = []; s < a.length; s++)
            (l = a[s]), o[l] && p.push(o[l][0]), (o[l] = 0)
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        for (c && c(t); p.length; ) p.shift()()
        return u.push.apply(u, f || []), r()
    }
    function r() {
        for (var e, t = 0; t < u.length; t++) {
            for (var r = u[t], n = !0, a = 1; a < r.length; a++) {
                var i = r[a]
                0 !== o[i] && (n = !1)
            }
            n && (u.splice(t--, 1), (e = l((l.s = r[0]))))
        }
        return e
    }
    var n = {},
        o = { 0: 0 },
        u = []
    function l(t) {
        if (n[t]) return n[t].exports
        var r = (n[t] = { i: t, l: !1, exports: {} })
        return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports
    }
    ;(l.m = e),
        (l.c = n),
        (l.d = function(e, t, r) {
            l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }),
        (l.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (l.t = function(e, t) {
            if ((1 & t && (e = l(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var r = Object.create(null)
            if (
                (l.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var n in e)
                    l.d(
                        r,
                        n,
                        function(t) {
                            return e[t]
                        }.bind(null, n)
                    )
            return r
        }),
        (l.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default
                      }
                    : function() {
                          return e
                      }
            return l.d(t, 'a', t), t
        }),
        (l.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (l.p = './')
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        i = a.push.bind(a)
    ;(a.push = t), (a = a.slice())
    for (var f = 0; f < a.length; f++) t(a[f])
    var c = i
    u.push([466, 1]), r()
})({
    1149: function(e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = (function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r]
                        ;(n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            })(),
            o = l(r(221)),
            u = l(r(1150))
        function l(e) {
            return e && e.__esModule ? e : { default: e }
        }
        var a = (function(e) {
            function t() {
                !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                })(this, t)
                var e = (function(e, t) {
                    if (!e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        )
                    return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { key: 'breakout' }))
                return e.bricks, e.paddle, e.ball, e
            }
            return (
                (function(e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function, not ' + typeof t
                        )
                    ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                    })),
                        t &&
                            (Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, t)
                                : (e.__proto__ = t))
                })(t, o.default.Scene),
                n(t, [
                    {
                        key: 'preload',
                        value: function() {
                            console.log('preloading'),
                                this.load.atlas(
                                    'assets',
                                    'assets/breakout.png',
                                    'assets/breakout.json'
                                )
                        }
                    },
                    {
                        key: 'create',
                        value: function() {
                            console.log('creating'),
                                this.physics.world.setBoundsCollision(!0, !0, !0, !1)
                            var e = [
                                u.default.blue1,
                                u.default.red1,
                                u.default.green1,
                                u.default.yellow1,
                                u.default.silver1,
                                u.default.purple1
                            ]
                            this.bricks = this.physics.add.staticGroup({
                                key: 'assets',
                                frame: e,
                                frameQuantity: 10,
                                gridAlign: {
                                    width: 10,
                                    height: 6,
                                    cellWidth: 64,
                                    cellHeight: 32,
                                    x: 112,
                                    y: 100
                                }
                            })
                        }
                    }
                ]),
                t
            )
        })()
        t.default = a
    },
    1150: function(e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = {
                blue1: 'blue1',
                red1: 'red1',
                green1: 'green1',
                yellow1: 'yellow1',
                silver1: 'silver1',
                purple1: 'purple1'
            })
    },
    466: function(e, t, r) {
        e.exports = r(467)
    },
    467: function(e, t, r) {
        'use strict'
        var n = o(r(221))
        function o(e) {
            return e && e.__esModule ? e : { default: e }
        }
        var u = {
            width: 800,
            height: 600,
            parent: 'content',
            physics: { default: 'arcade' },
            scene: [o(r(1149)).default]
        }
        new n.default.Game(u)
    }
})
//# sourceMappingURL=main.js.map
