!(function(e) {
    function t(t) {
        for (var r, a, l = t[0], s = t[1], u = t[2], f = 0, d = []; f < l.length; f++)
            (a = l[f]), o[a] && d.push(o[a][0]), (o[a] = 0)
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
        for (c && c(t); d.length; ) d.shift()()
        return i.push.apply(i, u || []), n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, l = 1; l < n.length; l++) {
                var s = n[l]
                0 !== o[s] && (r = !1)
            }
            r && (i.splice(t--, 1), (e = a((a.s = n[0]))))
        }
        return e
    }
    var r = {},
        o = { 0: 0 },
        i = []
    function a(t) {
        if (r[t]) return r[t].exports
        var n = (r[t] = { i: t, l: !1, exports: {} })
        return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports
    }
    ;(a.m = e),
        (a.c = r),
        (a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
        }),
        (a.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (a.t = function(e, t) {
            if ((1 & t && (e = a(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var n = Object.create(null)
            if (
                (a.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    a.d(
                        n,
                        r,
                        function(t) {
                            return e[t]
                        }.bind(null, r)
                    )
            return n
        }),
        (a.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default
                      }
                    : function() {
                          return e
                      }
            return a.d(t, 'a', t), t
        }),
        (a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (a.p = '')
    var l = (window.webpackJsonp = window.webpackJsonp || []),
        s = l.push.bind(l)
    ;(l.push = t), (l = l.slice())
    for (var u = 0; u < l.length; u++) t(l[u])
    var c = s
    i.push([469, 1]), n()
})({
    1152: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Title = void 0)
        var r = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n]
                        ;(r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            })(),
            o = n(139),
            i = (function(e) {
                return e && e.__esModule ? e : { default: e }
            })(n(222))
        var a = (t.Title = (function(e) {
            function t() {
                return (
                    (function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function')
                    })(this, t),
                    (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            )
                        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            key: i.default.title
                        })
                    )
                )
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
                })(t, o.Scene),
                r(t, [
                    {
                        key: 'create',
                        value: function() {
                            var e = this
                            this.input.keyboard.once('keydown', function(t) {
                                e.scene.start(i.default.breakout)
                            })
                            var t = this.cameras.main.width,
                                n = this.cameras.main.height
                            this.make
                                .text({
                                    x: t / 2,
                                    y: n / 2 - 50,
                                    text: 'Breakout',
                                    style: { font: '20px monospace', fill: '#ffffff' }
                                })
                                .setOrigin(0.5, 0.5),
                                this.make
                                    .text({
                                        x: t / 2,
                                        y: n / 2,
                                        text: 'Press any key to play',
                                        style: { font: '20px monospace', fill: '#ffffff' }
                                    })
                                    .setOrigin(0.5, 0.5)
                        }
                    }
                ]),
                t
            )
        })())
        t.default = a
    },
    1153: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n]
                        ;(r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            })(),
            o = s(n(139)),
            i = s(n(467)),
            a = s(n(468)),
            l = s(n(222))
        function s(e) {
            return e && e.__esModule ? e : { default: e }
        }
        var u = (function(e) {
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
                })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                        key: l.default.breakout
                    })
                )
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
                r(t, [
                    {
                        key: 'preload',
                        value: function() {
                            this.load.atlas(
                                a.default.assets,
                                'assets/breakout.png',
                                'assets/breakout.json'
                            )
                        }
                    },
                    {
                        key: 'create',
                        value: function() {
                            this.physics.world.setBoundsCollision(!0, !0, !0, !1),
                                this.setUpObjects(),
                                this.physics.add.collider(
                                    this.ball,
                                    this.bricks,
                                    this.hitBrick,
                                    null,
                                    this
                                ),
                                this.physics.add.collider(
                                    this.ball,
                                    this.paddle,
                                    this.hitPaddle,
                                    null,
                                    this
                                )
                        }
                    },
                    {
                        key: 'update',
                        value: function() {
                            this.ball.y > this.cameras.main.height && this.resetBall()
                        }
                    },
                    {
                        key: 'hitBrick',
                        value: function(e, t) {
                            t.disableBody(!0, !0),
                                0 === this.bricks.countActive() && this.resetLevel()
                        }
                    },
                    {
                        key: 'hitPaddle',
                        value: function(e, t) {
                            e.x < t.x
                                ? e.setVelocityX(-5 * (t.x - e.x))
                                : e.x > t.x
                                    ? e.setVelocityX(5 * (e.x - t.x))
                                    : e.setVelocityX(2 + 5 * Math.random())
                        }
                    },
                    {
                        key: 'resetBall',
                        value: function() {
                            this.ball.setVelocity(0),
                                this.ball.setPosition(this.paddle.x, 500),
                                this.ball.setData('onPaddle', !0)
                        }
                    },
                    {
                        key: 'resetLevel',
                        value: function() {
                            this.resetBall(),
                                this.bricks.children.entries.forEach(function(e) {
                                    e.enableBody(!1, 0, 0, !0, !0)
                                })
                        }
                    },
                    {
                        key: 'setUpObjects',
                        value: function() {
                            ;(this.bricks = this.physics.add.staticGroup({
                                key: a.default.assets,
                                frame: i.default.bricks,
                                frameQuantity: 10,
                                gridAlign: {
                                    width: 10,
                                    height: 6,
                                    cellWidth: 64,
                                    cellHeight: 32,
                                    x: 112,
                                    y: 100
                                }
                            })),
                                (this.ball = this.physics.add
                                    .image(400, 500, a.default.assets, i.default.ball)
                                    .setCollideWorldBounds(!0)
                                    .setBounce(1)),
                                this.ball.setData('onPaddle', !0),
                                (this.paddle = this.physics.add
                                    .image(400, 550, a.default.assets, i.default.paddle)
                                    .setImmovable()),
                                this.setUpInputEvents()
                        }
                    },
                    {
                        key: 'setUpInputEvents',
                        value: function() {
                            var e = this,
                                t = -75,
                                n = -300
                            this.input.on(
                                'pointermove',
                                function(t) {
                                    ;(e.paddle.x = o.default.Math.Clamp(t.x, 52, 748)),
                                        e.ball.getData('onPaddle') && (e.ball.x = e.paddle.x)
                                },
                                this
                            ),
                                this.input.on(
                                    'pointerup',
                                    function(r) {
                                        e.ball.getData('onPaddle') &&
                                            (e.ball.setVelocity(t, n),
                                            e.ball.setData('onPaddle', !1))
                                    },
                                    this
                                ),
                                this.input.keyboard.on('keydown_ESC', function(t) {
                                    e.scene.start(l.default.title)
                                })
                        }
                    }
                ]),
                t
            )
        })()
        t.default = u
    },
    1154: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = a(n(467)),
            o = a(n(468)),
            i = a(n(222))
        function a(e) {
            return e && e.__esModule ? e : { default: e }
        }
        t.default = { assets: r.default, keys: o.default, scenes: i.default }
    },
    222: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = { title: 'title', breakout: 'breakout' })
    },
    467: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = {
                bricks: ['blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1'],
                ball: 'ball1',
                paddle: 'paddle1'
            })
    },
    468: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = { assets: 'assets' })
    },
    469: function(e, t, n) {
        e.exports = n(470)
    },
    470: function(e, t, n) {
        'use strict'
        var r = a(n(139)),
            o = a(n(1152)),
            i = a(n(1153))
        n(1154)
        function a(e) {
            return e && e.__esModule ? e : { default: e }
        }
        var l = {
            type: r.default.AUTO,
            width: 800,
            height: 600,
            parent: 'content',
            physics: { default: 'arcade' },
            scene: [o.default, i.default]
        }
        new r.default.Game(l)
    }
})
//# sourceMappingURL=main.js.map
