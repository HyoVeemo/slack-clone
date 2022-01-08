/*! For license information please see app.js.LICENSE.txt */
(() => {
  var e,
    t,
    n = {
      2122: (e, t, n) => {
        'use strict';
        function r() {
          return (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        n.d(t, { Z: () => r });
      },
      3552: (e, t, n) => {
        'use strict';
        function r(e, t) {
          return (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function a(e, t) {
          (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
        }
        n.d(t, { Z: () => a });
      },
      9756: (e, t, n) => {
        'use strict';
        function r(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        }
        n.d(t, { Z: () => r });
      },
      2168: (e, t, n) => {
        'use strict';
        n.d(t, { ZP: () => S });
        var r = n(7294),
          a = n(9756),
          o = n(2122);
        var l = n(3552),
          i = n(9864),
          u = n(8679),
          c = n.n(u);
        var s = r.createContext(),
          f = {},
          d = 'PENDING',
          p = 'REJECTED',
          h = function (e) {
            return e;
          };
        function m(e) {
          var t = e.defaultResolveComponent,
            n = void 0 === t ? h : t,
            u = e.render,
            m = e.onLoad;
          function v(e, t) {
            void 0 === t && (t = {});
            var h = (function (e) {
                return 'function' == typeof e
                  ? { requireAsync: e, resolve: function () {}, chunkName: function () {} }
                  : e;
              })(e),
              v = {};
            function y(e) {
              return t.cacheKey ? t.cacheKey(e) : h.resolve ? h.resolve(e) : 'static';
            }
            function g(e, r, a) {
              var o = t.resolveComponent ? t.resolveComponent(e, r) : n(e);
              if (t.resolveComponent && !(0, i.isValidElementType)(o))
                throw new Error('resolveComponent returned something that is not a React component!');
              return c()(a, o, { preload: !0 }), o;
            }
            var b,
              w,
              k = (function (e) {
                function n(n) {
                  var r;
                  return (
                    ((r = e.call(this, n) || this).state = { result: null, error: null, loading: !0, cacheKey: y(n) }),
                    (function (e, t) {
                      if (!e) {
                        var n = new Error('loadable: ' + t);
                        throw ((n.framesToPop = 1), (n.name = 'Invariant Violation'), n);
                      }
                    })(
                      !n.__chunkExtractor || h.requireSync,
                      'SSR requires `@loadable/babel-plugin`, please install it',
                    ),
                    n.__chunkExtractor
                      ? (!1 === t.ssr ||
                          (h.requireAsync(n).catch(function () {
                            return null;
                          }),
                          r.loadSync(),
                          n.__chunkExtractor.addChunk(h.chunkName(n))),
                        (function (e) {
                          if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return e;
                        })(r))
                      : (!1 !== t.ssr &&
                          ((h.isReady && h.isReady(n)) || (h.chunkName && f[h.chunkName(n)])) &&
                          r.loadSync(),
                        r)
                  );
                }
                (0, l.Z)(n, e),
                  (n.getDerivedStateFromProps = function (e, t) {
                    var n = y(e);
                    return (0, o.Z)({}, t, { cacheKey: n, loading: t.loading || t.cacheKey !== n });
                  });
                var r = n.prototype;
                return (
                  (r.componentDidMount = function () {
                    this.mounted = !0;
                    var e = this.getCache();
                    e && e.status === p && this.setCache(), this.state.loading && this.loadAsync();
                  }),
                  (r.componentDidUpdate = function (e, t) {
                    t.cacheKey !== this.state.cacheKey && this.loadAsync();
                  }),
                  (r.componentWillUnmount = function () {
                    this.mounted = !1;
                  }),
                  (r.safeSetState = function (e, t) {
                    this.mounted && this.setState(e, t);
                  }),
                  (r.getCacheKey = function () {
                    return y(this.props);
                  }),
                  (r.getCache = function () {
                    return v[this.getCacheKey()];
                  }),
                  (r.setCache = function (e) {
                    void 0 === e && (e = void 0), (v[this.getCacheKey()] = e);
                  }),
                  (r.triggerOnLoad = function () {
                    var e = this;
                    m &&
                      setTimeout(function () {
                        m(e.state.result, e.props);
                      });
                  }),
                  (r.loadSync = function () {
                    if (this.state.loading)
                      try {
                        var e = g(h.requireSync(this.props), this.props, S);
                        (this.state.result = e), (this.state.loading = !1);
                      } catch (e) {
                        console.error(
                          'loadable-components: failed to synchronously load component, which expected to be available',
                          {
                            fileName: h.resolve(this.props),
                            chunkName: h.chunkName(this.props),
                            error: e ? e.message : e,
                          },
                        ),
                          (this.state.error = e);
                      }
                  }),
                  (r.loadAsync = function () {
                    var e = this,
                      t = this.resolveAsync();
                    return (
                      t
                        .then(function (t) {
                          var n = g(t, e.props, { Loadable: S });
                          e.safeSetState({ result: n, loading: !1 }, function () {
                            return e.triggerOnLoad();
                          });
                        })
                        .catch(function (t) {
                          return e.safeSetState({ error: t, loading: !1 });
                        }),
                      t
                    );
                  }),
                  (r.resolveAsync = function () {
                    var e = this,
                      t = this.props,
                      n = (t.__chunkExtractor, t.forwardedRef, (0, a.Z)(t, ['__chunkExtractor', 'forwardedRef'])),
                      r = this.getCache();
                    return (
                      r ||
                        (((r = h.requireAsync(n)).status = d),
                        this.setCache(r),
                        r.then(
                          function () {
                            r.status = 'RESOLVED';
                          },
                          function (t) {
                            console.error('loadable-components: failed to asynchronously load component', {
                              fileName: h.resolve(e.props),
                              chunkName: h.chunkName(e.props),
                              error: t ? t.message : t,
                            }),
                              (r.status = p);
                          },
                        )),
                      r
                    );
                  }),
                  (r.render = function () {
                    var e = this.props,
                      n = e.forwardedRef,
                      r = e.fallback,
                      l = (e.__chunkExtractor, (0, a.Z)(e, ['forwardedRef', 'fallback', '__chunkExtractor'])),
                      i = this.state,
                      c = i.error,
                      s = i.loading,
                      f = i.result;
                    if (t.suspense && (this.getCache() || this.loadAsync()).status === d) throw this.loadAsync();
                    if (c) throw c;
                    var p = r || t.fallback || null;
                    return s ? p : u({ fallback: p, result: f, options: t, props: (0, o.Z)({}, l, { ref: n }) });
                  }),
                  n
                );
              })(r.Component),
              E =
                ((w = function (e) {
                  return r.createElement(s.Consumer, null, function (t) {
                    return r.createElement(b, Object.assign({ __chunkExtractor: t }, e));
                  });
                }),
                (b = k).displayName && (w.displayName = b.displayName + 'WithChunkExtractor'),
                w),
              S = r.forwardRef(function (e, t) {
                return r.createElement(E, Object.assign({ forwardedRef: t }, e));
              });
            return (
              (S.displayName = 'Loadable'),
              (S.preload = function (e) {
                h.requireAsync(e);
              }),
              (S.load = function (e) {
                return h.requireAsync(e);
              }),
              S
            );
          }
          return {
            loadable: v,
            lazy: function (e, t) {
              return v(e, (0, o.Z)({}, t, { suspense: !0 }));
            },
          };
        }
        var v = m({
            defaultResolveComponent: function (e) {
              return e.__esModule ? e.default : e.default || e;
            },
            render: function (e) {
              var t = e.result,
                n = e.props;
              return r.createElement(t, n);
            },
          }),
          y = v.loadable,
          g = v.lazy,
          b = m({
            onLoad: function (e, t) {
              e &&
                t.forwardedRef &&
                ('function' == typeof t.forwardedRef ? t.forwardedRef(e) : (t.forwardedRef.current = e));
            },
            render: function (e) {
              var t = e.result,
                n = e.props;
              return n.children ? n.children(t) : null;
            },
          }),
          w = b.loadable,
          k = b.lazy,
          E = y;
        (E.lib = w), (g.lib = k);
        const S = E;
      },
      71: (e, t, n) => {
        'use strict';
        n.d(t, { lX: () => E, q_: () => T, ob: () => h, PP: () => N, Ep: () => p, Hp: () => m });
        var r = n(2122);
        function a(e) {
          return '/' === e.charAt(0);
        }
        function o(e, t) {
          for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1) e[n] = e[r];
          e.pop();
        }
        function l(e) {
          return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
        }
        const i = function e(t, n) {
          if (t === n) return !0;
          if (null == t || null == n) return !1;
          if (Array.isArray(t))
            return (
              Array.isArray(n) &&
              t.length === n.length &&
              t.every(function (t, r) {
                return e(t, n[r]);
              })
            );
          if ('object' == typeof t || 'object' == typeof n) {
            var r = l(t),
              a = l(n);
            return r !== t || a !== n
              ? e(r, a)
              : Object.keys(Object.assign({}, t, n)).every(function (r) {
                  return e(t[r], n[r]);
                });
          }
          return !1;
        };
        var u = n(2177);
        function c(e) {
          return '/' === e.charAt(0) ? e : '/' + e;
        }
        function s(e) {
          return '/' === e.charAt(0) ? e.substr(1) : e;
        }
        function f(e, t) {
          return (function (e, t) {
            return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
          })(e, t)
            ? e.substr(t.length)
            : e;
        }
        function d(e) {
          return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
        }
        function p(e) {
          var t = e.pathname,
            n = e.search,
            r = e.hash,
            a = t || '/';
          return (
            n && '?' !== n && (a += '?' === n.charAt(0) ? n : '?' + n),
            r && '#' !== r && (a += '#' === r.charAt(0) ? r : '#' + r),
            a
          );
        }
        function h(e, t, n, l) {
          var i;
          'string' == typeof e
            ? ((i = (function (e) {
                var t = e || '/',
                  n = '',
                  r = '',
                  a = t.indexOf('#');
                -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
                var o = t.indexOf('?');
                return (
                  -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
                  { pathname: t, search: '?' === n ? '' : n, hash: '#' === r ? '' : r }
                );
              })(e)).state = t)
            : (void 0 === (i = (0, r.Z)({}, e)).pathname && (i.pathname = ''),
              i.search ? '?' !== i.search.charAt(0) && (i.search = '?' + i.search) : (i.search = ''),
              i.hash ? '#' !== i.hash.charAt(0) && (i.hash = '#' + i.hash) : (i.hash = ''),
              void 0 !== t && void 0 === i.state && (i.state = t));
          try {
            i.pathname = decodeURI(i.pathname);
          } catch (e) {
            throw e instanceof URIError
              ? new URIError(
                  'Pathname "' +
                    i.pathname +
                    '" could not be decoded. This is likely caused by an invalid percent-encoding.',
                )
              : e;
          }
          return (
            n && (i.key = n),
            l
              ? i.pathname
                ? '/' !== i.pathname.charAt(0) &&
                  (i.pathname = (function (e, t) {
                    void 0 === t && (t = '');
                    var n,
                      r = (e && e.split('/')) || [],
                      l = (t && t.split('/')) || [],
                      i = e && a(e),
                      u = t && a(t),
                      c = i || u;
                    if ((e && a(e) ? (l = r) : r.length && (l.pop(), (l = l.concat(r))), !l.length)) return '/';
                    if (l.length) {
                      var s = l[l.length - 1];
                      n = '.' === s || '..' === s || '' === s;
                    } else n = !1;
                    for (var f = 0, d = l.length; d >= 0; d--) {
                      var p = l[d];
                      '.' === p ? o(l, d) : '..' === p ? (o(l, d), f++) : f && (o(l, d), f--);
                    }
                    if (!c) for (; f--; f) l.unshift('..');
                    !c || '' === l[0] || (l[0] && a(l[0])) || l.unshift('');
                    var h = l.join('/');
                    return n && '/' !== h.substr(-1) && (h += '/'), h;
                  })(i.pathname, l.pathname))
                : (i.pathname = l.pathname)
              : i.pathname || (i.pathname = '/'),
            i
          );
        }
        function m(e, t) {
          return (
            e.pathname === t.pathname &&
            e.search === t.search &&
            e.hash === t.hash &&
            e.key === t.key &&
            i(e.state, t.state)
          );
        }
        function v() {
          var e = null,
            t = [];
          return {
            setPrompt: function (t) {
              return (
                (e = t),
                function () {
                  e === t && (e = null);
                }
              );
            },
            confirmTransitionTo: function (t, n, r, a) {
              if (null != e) {
                var o = 'function' == typeof e ? e(t, n) : e;
                'string' == typeof o ? ('function' == typeof r ? r(o, a) : a(!0)) : a(!1 !== o);
              } else a(!0);
            },
            appendListener: function (e) {
              var n = !0;
              function r() {
                n && e.apply(void 0, arguments);
              }
              return (
                t.push(r),
                function () {
                  (n = !1),
                    (t = t.filter(function (e) {
                      return e !== r;
                    }));
                }
              );
            },
            notifyListeners: function () {
              for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              t.forEach(function (e) {
                return e.apply(void 0, n);
              });
            },
          };
        }
        var y = !('undefined' == typeof window || !window.document || !window.document.createElement);
        function g(e, t) {
          t(window.confirm(e));
        }
        var b = 'popstate',
          w = 'hashchange';
        function k() {
          try {
            return window.history.state || {};
          } catch (e) {
            return {};
          }
        }
        function E(e) {
          void 0 === e && (e = {}), y || (0, u.Z)(!1);
          var t,
            n = window.history,
            a =
              ((-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0')) ||
                -1 === t.indexOf('Mobile Safari') ||
                -1 !== t.indexOf('Chrome') ||
                -1 !== t.indexOf('Windows Phone')) &&
              window.history &&
              'pushState' in window.history,
            o = !(-1 === window.navigator.userAgent.indexOf('Trident')),
            l = e,
            i = l.forceRefresh,
            s = void 0 !== i && i,
            m = l.getUserConfirmation,
            E = void 0 === m ? g : m,
            S = l.keyLength,
            x = void 0 === S ? 6 : S,
            C = e.basename ? d(c(e.basename)) : '';
          function _(e) {
            var t = e || {},
              n = t.key,
              r = t.state,
              a = window.location,
              o = a.pathname + a.search + a.hash;
            return C && (o = f(o, C)), h(o, r, n);
          }
          function P() {
            return Math.random().toString(36).substr(2, x);
          }
          var T = v();
          function O(e) {
            (0, r.Z)($, e), ($.length = n.length), T.notifyListeners($.location, $.action);
          }
          function N(e) {
            (function (e) {
              return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
            })(e) || z(_(e.state));
          }
          function L() {
            z(_(k()));
          }
          var R = !1;
          function z(e) {
            R
              ? ((R = !1), O())
              : T.confirmTransitionTo(e, 'POP', E, function (t) {
                  t
                    ? O({ action: 'POP', location: e })
                    : (function (e) {
                        var t = $.location,
                          n = A.indexOf(t.key);
                        -1 === n && (n = 0);
                        var r = A.indexOf(e.key);
                        -1 === r && (r = 0);
                        var a = n - r;
                        a && ((R = !0), D(a));
                      })(e);
                });
          }
          var M = _(k()),
            A = [M.key];
          function F(e) {
            return C + p(e);
          }
          function D(e) {
            n.go(e);
          }
          var I = 0;
          function U(e) {
            1 === (I += e) && 1 === e
              ? (window.addEventListener(b, N), o && window.addEventListener(w, L))
              : 0 === I && (window.removeEventListener(b, N), o && window.removeEventListener(w, L));
          }
          var j = !1,
            $ = {
              length: n.length,
              action: 'POP',
              location: M,
              createHref: F,
              push: function (e, t) {
                var r = 'PUSH',
                  o = h(e, t, P(), $.location);
                T.confirmTransitionTo(o, r, E, function (e) {
                  if (e) {
                    var t = F(o),
                      l = o.key,
                      i = o.state;
                    if (a)
                      if ((n.pushState({ key: l, state: i }, null, t), s)) window.location.href = t;
                      else {
                        var u = A.indexOf($.location.key),
                          c = A.slice(0, u + 1);
                        c.push(o.key), (A = c), O({ action: r, location: o });
                      }
                    else window.location.href = t;
                  }
                });
              },
              replace: function (e, t) {
                var r = 'REPLACE',
                  o = h(e, t, P(), $.location);
                T.confirmTransitionTo(o, r, E, function (e) {
                  if (e) {
                    var t = F(o),
                      l = o.key,
                      i = o.state;
                    if (a)
                      if ((n.replaceState({ key: l, state: i }, null, t), s)) window.location.replace(t);
                      else {
                        var u = A.indexOf($.location.key);
                        -1 !== u && (A[u] = o.key), O({ action: r, location: o });
                      }
                    else window.location.replace(t);
                  }
                });
              },
              go: D,
              goBack: function () {
                D(-1);
              },
              goForward: function () {
                D(1);
              },
              block: function (e) {
                void 0 === e && (e = !1);
                var t = T.setPrompt(e);
                return (
                  j || (U(1), (j = !0)),
                  function () {
                    return j && ((j = !1), U(-1)), t();
                  }
                );
              },
              listen: function (e) {
                var t = T.appendListener(e);
                return (
                  U(1),
                  function () {
                    U(-1), t();
                  }
                );
              },
            };
          return $;
        }
        var S = 'hashchange',
          x = {
            hashbang: {
              encodePath: function (e) {
                return '!' === e.charAt(0) ? e : '!/' + s(e);
              },
              decodePath: function (e) {
                return '!' === e.charAt(0) ? e.substr(1) : e;
              },
            },
            noslash: { encodePath: s, decodePath: c },
            slash: { encodePath: c, decodePath: c },
          };
        function C(e) {
          var t = e.indexOf('#');
          return -1 === t ? e : e.slice(0, t);
        }
        function _() {
          var e = window.location.href,
            t = e.indexOf('#');
          return -1 === t ? '' : e.substring(t + 1);
        }
        function P(e) {
          window.location.replace(C(window.location.href) + '#' + e);
        }
        function T(e) {
          void 0 === e && (e = {}), y || (0, u.Z)(!1);
          var t = window.history,
            n = (window.navigator.userAgent.indexOf('Firefox'), e),
            a = n.getUserConfirmation,
            o = void 0 === a ? g : a,
            l = n.hashType,
            i = void 0 === l ? 'slash' : l,
            s = e.basename ? d(c(e.basename)) : '',
            m = x[i],
            b = m.encodePath,
            w = m.decodePath;
          function k() {
            var e = w(_());
            return s && (e = f(e, s)), h(e);
          }
          var E = v();
          function T(e) {
            (0, r.Z)(j, e), (j.length = t.length), E.notifyListeners(j.location, j.action);
          }
          var O = !1,
            N = null;
          function L() {
            var e,
              t,
              n = _(),
              r = b(n);
            if (n !== r) P(r);
            else {
              var a = k(),
                l = j.location;
              if (!O && ((t = a), (e = l).pathname === t.pathname && e.search === t.search && e.hash === t.hash))
                return;
              if (N === p(a)) return;
              (N = null),
                (function (e) {
                  if (O) (O = !1), T();
                  else {
                    E.confirmTransitionTo(e, 'POP', o, function (t) {
                      t
                        ? T({ action: 'POP', location: e })
                        : (function (e) {
                            var t = j.location,
                              n = A.lastIndexOf(p(t));
                            -1 === n && (n = 0);
                            var r = A.lastIndexOf(p(e));
                            -1 === r && (r = 0);
                            var a = n - r;
                            a && ((O = !0), F(a));
                          })(e);
                    });
                  }
                })(a);
            }
          }
          var R = _(),
            z = b(R);
          R !== z && P(z);
          var M = k(),
            A = [p(M)];
          function F(e) {
            t.go(e);
          }
          var D = 0;
          function I(e) {
            1 === (D += e) && 1 === e ? window.addEventListener(S, L) : 0 === D && window.removeEventListener(S, L);
          }
          var U = !1,
            j = {
              length: t.length,
              action: 'POP',
              location: M,
              createHref: function (e) {
                var t = document.querySelector('base'),
                  n = '';
                return t && t.getAttribute('href') && (n = C(window.location.href)), n + '#' + b(s + p(e));
              },
              push: function (e, t) {
                var n = 'PUSH',
                  r = h(e, void 0, void 0, j.location);
                E.confirmTransitionTo(r, n, o, function (e) {
                  if (e) {
                    var t = p(r),
                      a = b(s + t);
                    if (_() !== a) {
                      (N = t),
                        (function (e) {
                          window.location.hash = e;
                        })(a);
                      var o = A.lastIndexOf(p(j.location)),
                        l = A.slice(0, o + 1);
                      l.push(t), (A = l), T({ action: n, location: r });
                    } else T();
                  }
                });
              },
              replace: function (e, t) {
                var n = 'REPLACE',
                  r = h(e, void 0, void 0, j.location);
                E.confirmTransitionTo(r, n, o, function (e) {
                  if (e) {
                    var t = p(r),
                      a = b(s + t);
                    _() !== a && ((N = t), P(a));
                    var o = A.indexOf(p(j.location));
                    -1 !== o && (A[o] = t), T({ action: n, location: r });
                  }
                });
              },
              go: F,
              goBack: function () {
                F(-1);
              },
              goForward: function () {
                F(1);
              },
              block: function (e) {
                void 0 === e && (e = !1);
                var t = E.setPrompt(e);
                return (
                  U || (I(1), (U = !0)),
                  function () {
                    return U && ((U = !1), I(-1)), t();
                  }
                );
              },
              listen: function (e) {
                var t = E.appendListener(e);
                return (
                  I(1),
                  function () {
                    I(-1), t();
                  }
                );
              },
            };
          return j;
        }
        function O(e, t, n) {
          return Math.min(Math.max(e, t), n);
        }
        function N(e) {
          void 0 === e && (e = {});
          var t = e,
            n = t.getUserConfirmation,
            a = t.initialEntries,
            o = void 0 === a ? ['/'] : a,
            l = t.initialIndex,
            i = void 0 === l ? 0 : l,
            u = t.keyLength,
            c = void 0 === u ? 6 : u,
            s = v();
          function f(e) {
            (0, r.Z)(w, e), (w.length = w.entries.length), s.notifyListeners(w.location, w.action);
          }
          function d() {
            return Math.random().toString(36).substr(2, c);
          }
          var m = O(i, 0, o.length - 1),
            y = o.map(function (e) {
              return h(e, void 0, 'string' == typeof e ? d() : e.key || d());
            }),
            g = p;
          function b(e) {
            var t = O(w.index + e, 0, w.entries.length - 1),
              r = w.entries[t];
            s.confirmTransitionTo(r, 'POP', n, function (e) {
              e ? f({ action: 'POP', location: r, index: t }) : f();
            });
          }
          var w = {
            length: y.length,
            action: 'POP',
            location: y[m],
            index: m,
            entries: y,
            createHref: g,
            push: function (e, t) {
              var r = 'PUSH',
                a = h(e, t, d(), w.location);
              s.confirmTransitionTo(a, r, n, function (e) {
                if (e) {
                  var t = w.index + 1,
                    n = w.entries.slice(0);
                  n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                    f({ action: r, location: a, index: t, entries: n });
                }
              });
            },
            replace: function (e, t) {
              var r = 'REPLACE',
                a = h(e, t, d(), w.location);
              s.confirmTransitionTo(a, r, n, function (e) {
                e && ((w.entries[w.index] = a), f({ action: r, location: a }));
              });
            },
            go: b,
            goBack: function () {
              b(-1);
            },
            goForward: function () {
              b(1);
            },
            canGo: function (e) {
              var t = w.index + e;
              return t >= 0 && t < w.entries.length;
            },
            block: function (e) {
              return void 0 === e && (e = !1), s.setPrompt(e);
            },
            listen: function (e) {
              return s.appendListener(e);
            },
          };
          return w;
        }
      },
      8679: (e, t, n) => {
        'use strict';
        var r = n(9864),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
          l = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
          i = {};
        function u(e) {
          return r.isMemo(e) ? l : i[e.$$typeof] || a;
        }
        (i[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
          (i[r.Memo] = l);
        var c = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ('string' != typeof n) {
            if (h) {
              var a = p(n);
              a && a !== h && e(t, a, r);
            }
            var l = s(n);
            f && (l = l.concat(f(n)));
            for (var i = u(t), m = u(n), v = 0; v < l.length; ++v) {
              var y = l[v];
              if (!(o[y] || (r && r[y]) || (m && m[y]) || (i && i[y]))) {
                var g = d(n, y);
                try {
                  c(t, y, g);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      5826: (e) => {
        e.exports =
          Array.isArray ||
          function (e) {
            return '[object Array]' == Object.prototype.toString.call(e);
          };
      },
      7418: (e) => {
        'use strict';
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function a(e) {
          if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined');
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String('abc');
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
            for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
            if (
              '0123456789' !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join('')
            )
              return !1;
            var r = {};
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                r[e] = e;
              }),
              'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (var l, i, u = a(e), c = 1; c < arguments.length; c++) {
                for (var s in (l = Object(arguments[c]))) n.call(l, s) && (u[s] = l[s]);
                if (t) {
                  i = t(l);
                  for (var f = 0; f < i.length; f++) r.call(l, i[f]) && (u[i[f]] = l[i[f]]);
                }
              }
              return u;
            };
      },
      4779: (e, t, n) => {
        var r = n(5826);
        (e.exports = function e(t, n, a) {
          return (
            r(n) || ((a = n || a), (n = [])),
            (a = a || {}),
            t instanceof RegExp
              ? (function (e, t) {
                  var n = e.source.match(/\((?!\?)/g);
                  if (n)
                    for (var r = 0; r < n.length; r++)
                      t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null,
                      });
                  return s(e, t);
                })(t, n)
              : r(t)
              ? (function (t, n, r) {
                  for (var a = [], o = 0; o < t.length; o++) a.push(e(t[o], n, r).source);
                  return s(new RegExp('(?:' + a.join('|') + ')', f(r)), n);
                })(t, n, a)
              : (function (e, t, n) {
                  return d(o(e, n), t, n);
                })(t, n, a)
          );
        }),
          (e.exports.parse = o),
          (e.exports.compile = function (e, t) {
            return i(o(e, t), t);
          }),
          (e.exports.tokensToFunction = i),
          (e.exports.tokensToRegExp = d);
        var a = new RegExp(
          [
            '(\\\\.)',
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
          ].join('|'),
          'g',
        );
        function o(e, t) {
          for (var n, r = [], o = 0, l = 0, i = '', s = (t && t.delimiter) || '/'; null != (n = a.exec(e)); ) {
            var f = n[0],
              d = n[1],
              p = n.index;
            if (((i += e.slice(l, p)), (l = p + f.length), d)) i += d[1];
            else {
              var h = e[l],
                m = n[2],
                v = n[3],
                y = n[4],
                g = n[5],
                b = n[6],
                w = n[7];
              i && (r.push(i), (i = ''));
              var k = null != m && null != h && h !== m,
                E = '+' === b || '*' === b,
                S = '?' === b || '*' === b,
                x = n[2] || s,
                C = y || g;
              r.push({
                name: v || o++,
                prefix: m || '',
                delimiter: x,
                optional: S,
                repeat: E,
                partial: k,
                asterisk: !!w,
                pattern: C ? c(C) : w ? '.*' : '[^' + u(x) + ']+?',
              });
            }
          }
          return l < e.length && (i += e.substr(l)), i && r.push(i), r;
        }
        function l(e) {
          return encodeURI(e).replace(/[\/?#]/g, function (e) {
            return '%' + e.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        function i(e, t) {
          for (var n = new Array(e.length), a = 0; a < e.length; a++)
            'object' == typeof e[a] && (n[a] = new RegExp('^(?:' + e[a].pattern + ')$', f(t)));
          return function (t, a) {
            for (var o = '', i = t || {}, u = (a || {}).pretty ? l : encodeURIComponent, c = 0; c < e.length; c++) {
              var s = e[c];
              if ('string' != typeof s) {
                var f,
                  d = i[s.name];
                if (null == d) {
                  if (s.optional) {
                    s.partial && (o += s.prefix);
                    continue;
                  }
                  throw new TypeError('Expected "' + s.name + '" to be defined');
                }
                if (r(d)) {
                  if (!s.repeat)
                    throw new TypeError(
                      'Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(d) + '`',
                    );
                  if (0 === d.length) {
                    if (s.optional) continue;
                    throw new TypeError('Expected "' + s.name + '" to not be empty');
                  }
                  for (var p = 0; p < d.length; p++) {
                    if (((f = u(d[p])), !n[c].test(f)))
                      throw new TypeError(
                        'Expected all "' +
                          s.name +
                          '" to match "' +
                          s.pattern +
                          '", but received `' +
                          JSON.stringify(f) +
                          '`',
                      );
                    o += (0 === p ? s.prefix : s.delimiter) + f;
                  }
                } else {
                  if (
                    ((f = s.asterisk
                      ? encodeURI(d).replace(/[?#]/g, function (e) {
                          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                        })
                      : u(d)),
                    !n[c].test(f))
                  )
                    throw new TypeError(
                      'Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + f + '"',
                    );
                  o += s.prefix + f;
                }
              } else o += s;
            }
            return o;
          };
        }
        function u(e) {
          return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
        }
        function c(e) {
          return e.replace(/([=!:$\/()])/g, '\\$1');
        }
        function s(e, t) {
          return (e.keys = t), e;
        }
        function f(e) {
          return e && e.sensitive ? '' : 'i';
        }
        function d(e, t, n) {
          r(t) || ((n = t || n), (t = []));
          for (var a = (n = n || {}).strict, o = !1 !== n.end, l = '', i = 0; i < e.length; i++) {
            var c = e[i];
            if ('string' == typeof c) l += u(c);
            else {
              var d = u(c.prefix),
                p = '(?:' + c.pattern + ')';
              t.push(c),
                c.repeat && (p += '(?:' + d + p + ')*'),
                (l += p =
                  c.optional ? (c.partial ? d + '(' + p + ')?' : '(?:' + d + '(' + p + '))?') : d + '(' + p + ')');
            }
          }
          var h = u(n.delimiter || '/'),
            m = l.slice(-h.length) === h;
          return (
            a || (l = (m ? l.slice(0, -h.length) : l) + '(?:' + h + '(?=$))?'),
            (l += o ? '$' : a && m ? '' : '(?=' + h + '|$)'),
            s(new RegExp('^' + l, f(n)), t)
          );
        }
      },
      2703: (e, t, n) => {
        'use strict';
        var r = n(414);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, l) {
              if (l !== r) {
                var i = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((i.name = 'Invariant Violation'), i);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      5697: (e, t, n) => {
        e.exports = n(2703)();
      },
      414: (e) => {
        'use strict';
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
      4448: (e, t, n) => {
        'use strict';
        var r = n(7294),
          a = n(7418),
          o = n(3840);
        function l(e) {
          for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        if (!r) throw Error(l(227));
        var i = new Set(),
          u = {};
        function c(e, t) {
          s(e, t), s(e + 'Capture', t);
        }
        function s(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var f = !(
            'undefined' == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          m = {};
        function v(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var y = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            y[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
            y[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            y[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            y[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            y[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var a = y.hasOwnProperty(t) ? y[t] : null;
          (null !== a
            ? 0 === a.type
            : !r && 2 < t.length && ('o' === t[0] || 'O' === t[0]) && ('n' === t[1] || 'N' === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return !!p.call(m, e) || (!p.call(h, e) && (d.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)));
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, b);
            y[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
            var t = e.replace(g, b);
            y[t] = new v(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
          }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, b);
            y[t] = new v(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new v('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          E = 60103,
          S = 60106,
          x = 60107,
          C = 60108,
          _ = 60114,
          P = 60109,
          T = 60110,
          O = 60112,
          N = 60113,
          L = 60120,
          R = 60115,
          z = 60116,
          M = 60121,
          A = 60128,
          F = 60129,
          D = 60130,
          I = 60131;
        if ('function' == typeof Symbol && Symbol.for) {
          var U = Symbol.for;
          (E = U('react.element')),
            (S = U('react.portal')),
            (x = U('react.fragment')),
            (C = U('react.strict_mode')),
            (_ = U('react.profiler')),
            (P = U('react.provider')),
            (T = U('react.context')),
            (O = U('react.forward_ref')),
            (N = U('react.suspense')),
            (L = U('react.suspense_list')),
            (R = U('react.memo')),
            (z = U('react.lazy')),
            (M = U('react.block')),
            U('react.scope'),
            (A = U('react.opaque.id')),
            (F = U('react.debug_trace_mode')),
            (D = U('react.offscreen')),
            (I = U('react.legacy_hidden'));
        }
        var j,
          $ = 'function' == typeof Symbol && Symbol.iterator;
        function V(e) {
          return null === e || 'object' != typeof e
            ? null
            : 'function' == typeof (e = ($ && e[$]) || e['@@iterator'])
            ? e
            : null;
        }
        function B(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || '';
            }
          return '\n' + j + e;
        }
        var W = !1;
        function H(e, t) {
          if (!e || W) return '';
          W = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && 'string' == typeof e.stack) {
              for (
                var a = e.stack.split('\n'), o = r.stack.split('\n'), l = a.length - 1, i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) return '\n' + a[l].replace(' at new ', ' at ');
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (W = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? B(e) : '';
        }
        function Q(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B('Lazy');
            case 13:
              return B('Suspense');
            case 19:
              return B('SuspenseList');
            case 0:
            case 2:
            case 15:
              return H(e.type, !1);
            case 11:
              return H(e.type.render, !1);
            case 22:
              return H(e.type._render, !1);
            case 1:
              return H(e.type, !0);
            default:
              return '';
          }
        }
        function q(e) {
          if (null == e) return null;
          if ('function' == typeof e) return e.displayName || e.name || null;
          if ('string' == typeof e) return e;
          switch (e) {
            case x:
              return 'Fragment';
            case S:
              return 'Portal';
            case _:
              return 'Profiler';
            case C:
              return 'StrictMode';
            case N:
              return 'Suspense';
            case L:
              return 'SuspenseList';
          }
          if ('object' == typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || 'Context') + '.Consumer';
              case P:
                return (e._context.displayName || 'Context') + '.Provider';
              case O:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ''),
                  e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
                );
              case R:
                return q(e.type);
              case M:
                return q(e._render);
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (e) {}
            }
          return null;
        }
        function Z(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'object':
            case 'string':
            case 'undefined':
              return e;
            default:
              return '';
          }
        }
        function K(e) {
          var t = e.type;
          return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return e && (r = K(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
        }
        function G(e) {
          if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Z(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, 'checked', t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Z(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ae(e, t.type, n)
            : t.hasOwnProperty('defaultValue') && ae(e, t.type, Z(t.defaultValue)),
            null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
            (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ae(e, t, n) {
          ('number' === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        function oe(e, t) {
          return (
            (e = a({ children: void 0 }, t)),
            (t = (function (e) {
              var t = '';
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function le(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + Z(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ie(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return a({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: Z(n) };
        }
        function ce(e, t) {
          var n = Z(t.value),
            r = Z(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        var fe = 'http://www.w3.org/1999/xhtml';
        function de(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function pe(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? de(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var he,
          me,
          ve =
            ((me = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
              else {
                for (
                  (he = he || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = he.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return me(e, t);
                  });
                }
              : me);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var ge = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          be = ['Webkit', 'ms', 'Moz', 'O'];
        function we(e, t, n) {
          return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : n || 'number' != typeof t || 0 === t || (ge.hasOwnProperty(e) && ge[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ke(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = we(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(ge).forEach(function (e) {
          be.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ge[t] = ge[e]);
          });
        });
        var Ee = a(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function Se(e, t) {
          if (t) {
            if (Ee[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(l(61));
            }
            if (null != t.style && 'object' != typeof t.style) throw Error(l(62));
          }
        }
        function xe(e, t) {
          if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        function Ce(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          Pe = null,
          Te = null;
        function Oe(e) {
          if ((e = Gr(e))) {
            if ('function' != typeof _e) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = ea(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Pe ? (Te ? Te.push(e) : (Te = [e])) : (Pe = e);
        }
        function Le() {
          if (Pe) {
            var e = Pe,
              t = Te;
            if (((Te = Pe = null), Oe(e), t)) for (e = 0; e < t.length; e++) Oe(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function ze(e, t, n, r, a) {
          return e(t, n, r, a);
        }
        function Me() {}
        var Ae = Re,
          Fe = !1,
          De = !1;
        function Ie() {
          (null === Pe && null === Te) || (Me(), Le());
        }
        function Ue(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ea(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' != typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (f)
          try {
            var $e = {};
            Object.defineProperty($e, 'passive', {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener('test', $e, $e),
              window.removeEventListener('test', $e, $e);
          } catch (me) {
            je = !1;
          }
        function Ve(e, t, n, r, a, o, l, i, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var Be = !1,
          We = null,
          He = !1,
          Qe = null,
          qe = {
            onError: function (e) {
              (Be = !0), (We = e);
            },
          };
        function Ze(e, t, n, r, a, o, l, i, u) {
          (Be = !1), (We = null), Ve.apply(qe, arguments);
        }
        function Ke(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ye(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
          }
          return null;
        }
        function Xe(e) {
          if (Ke(e) !== e) throw Error(l(188));
        }
        function Ge(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var Je,
          et,
          tt,
          nt,
          rt = !1,
          at = [],
          ot = null,
          lt = null,
          it = null,
          ut = new Map(),
          ct = new Map(),
          st = [],
          ft =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function dt(e, t, n, r, a) {
          return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: a, targetContainers: [r] };
        }
        function pt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              ot = null;
              break;
            case 'dragenter':
            case 'dragleave':
              lt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              it = null;
              break;
            case 'pointerover':
            case 'pointerout':
              ut.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              ct.delete(t.pointerId);
          }
        }
        function ht(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = dt(t, n, r, a, o)), null !== t && null !== (t = Gr(t)) && et(t), e)
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
        }
        function mt(e) {
          var t = Xr(e.target);
          if (null !== t) {
            var n = Ke(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ye(n)))
                  return (
                    (e.blockedOn = t),
                    void nt(e.lanePriority, function () {
                      o.unstable_runWithPriority(e.priority, function () {
                        tt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function vt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = Gr(n)) && et(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function yt(e, t, n) {
          vt(e) && n.delete(t);
        }
        function gt() {
          for (rt = !1; 0 < at.length; ) {
            var e = at[0];
            if (null !== e.blockedOn) {
              null !== (e = Gr(e.blockedOn)) && Je(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && at.shift();
          }
          null !== ot && vt(ot) && (ot = null),
            null !== lt && vt(lt) && (lt = null),
            null !== it && vt(it) && (it = null),
            ut.forEach(yt),
            ct.forEach(yt);
        }
        function bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null), rt || ((rt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, gt)));
        }
        function wt(e) {
          function t(t) {
            return bt(t, e);
          }
          if (0 < at.length) {
            bt(at[0], e);
            for (var n = 1; n < at.length; n++) {
              var r = at[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== ot && bt(ot, e),
              null !== lt && bt(lt, e),
              null !== it && bt(it, e),
              ut.forEach(t),
              ct.forEach(t),
              n = 0;
            n < st.length;
            n++
          )
            (r = st[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < st.length && null === (n = st[0]).blockedOn; ) mt(n), null === n.blockedOn && st.shift();
        }
        function kt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
          );
        }
        var Et = {
            animationend: kt('Animation', 'AnimationEnd'),
            animationiteration: kt('Animation', 'AnimationIteration'),
            animationstart: kt('Animation', 'AnimationStart'),
            transitionend: kt('Transition', 'TransitionEnd'),
          },
          St = {},
          xt = {};
        function Ct(e) {
          if (St[e]) return St[e];
          if (!Et[e]) return e;
          var t,
            n = Et[e];
          for (t in n) if (n.hasOwnProperty(t) && t in xt) return (St[e] = n[t]);
          return e;
        }
        f &&
          ((xt = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Et.animationend.animation,
            delete Et.animationiteration.animation,
            delete Et.animationstart.animation),
          'TransitionEvent' in window || delete Et.transitionend.transition);
        var _t = Ct('animationend'),
          Pt = Ct('animationiteration'),
          Tt = Ct('animationstart'),
          Ot = Ct('transitionend'),
          Nt = new Map(),
          Lt = new Map(),
          Rt = [
            'abort',
            'abort',
            _t,
            'animationEnd',
            Pt,
            'animationIteration',
            Tt,
            'animationStart',
            'canplay',
            'canPlay',
            'canplaythrough',
            'canPlayThrough',
            'durationchange',
            'durationChange',
            'emptied',
            'emptied',
            'encrypted',
            'encrypted',
            'ended',
            'ended',
            'error',
            'error',
            'gotpointercapture',
            'gotPointerCapture',
            'load',
            'load',
            'loadeddata',
            'loadedData',
            'loadedmetadata',
            'loadedMetadata',
            'loadstart',
            'loadStart',
            'lostpointercapture',
            'lostPointerCapture',
            'playing',
            'playing',
            'progress',
            'progress',
            'seeking',
            'seeking',
            'stalled',
            'stalled',
            'suspend',
            'suspend',
            'timeupdate',
            'timeUpdate',
            Ot,
            'transitionEnd',
            'waiting',
            'waiting',
          ];
        function zt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              a = e[n + 1];
            (a = 'on' + (a[0].toUpperCase() + a.slice(1))), Lt.set(r, t), Nt.set(r, a), c(a, [r]);
          }
        }
        (0, o.unstable_now)();
        var Mt = 8;
        function At(e) {
          if (0 != (1 & e)) return (Mt = 15), 1;
          if (0 != (2 & e)) return (Mt = 14), 2;
          if (0 != (4 & e)) return (Mt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Mt = 12), t)
            : 0 != (32 & e)
            ? ((Mt = 11), 32)
            : 0 != (t = 192 & e)
            ? ((Mt = 10), t)
            : 0 != (256 & e)
            ? ((Mt = 9), 256)
            : 0 != (t = 3584 & e)
            ? ((Mt = 8), t)
            : 0 != (4096 & e)
            ? ((Mt = 7), 4096)
            : 0 != (t = 4186112 & e)
            ? ((Mt = 6), t)
            : 0 != (t = 62914560 & e)
            ? ((Mt = 5), t)
            : 67108864 & e
            ? ((Mt = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((Mt = 3), 134217728)
            : 0 != (t = 805306368 & e)
            ? ((Mt = 2), t)
            : 0 != (1073741824 & e)
            ? ((Mt = 1), 1073741824)
            : ((Mt = 8), e);
        }
        function Ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Mt = 0);
          var r = 0,
            a = 0,
            o = e.expiredLanes,
            l = e.suspendedLanes,
            i = e.pingedLanes;
          if (0 !== o) (r = o), (a = Mt = 15);
          else if (0 != (o = 134217727 & n)) {
            var u = o & ~l;
            0 !== u ? ((r = At(u)), (a = Mt)) : 0 != (i &= o) && ((r = At(i)), (a = Mt));
          } else 0 != (o = n & ~l) ? ((r = At(o)), (a = Mt)) : 0 !== i && ((r = At(i)), (a = Mt));
          if (0 === r) return 0;
          if (((r = n & (((0 > (r = 31 - Vt(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 == (t & l))) {
            if ((At(t), a <= Mt)) return t;
            Mt = a;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - Vt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function Dt(e) {
          return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function It(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? It(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? It(8, t) : e;
            case 8:
              return 0 === (e = Ut(3584 & ~t)) && 0 === (e = Ut(4186112 & ~t)) && (e = 512), e;
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(l(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function jt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function $t(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Vt(t))] = n);
        }
        var Vt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Bt(e) / Wt) | 0)) | 0;
              },
          Bt = Math.log,
          Wt = Math.LN2,
          Ht = o.unstable_UserBlockingPriority,
          Qt = o.unstable_runWithPriority,
          qt = !0;
        function Zt(e, t, n, r) {
          Fe || Me();
          var a = Yt,
            o = Fe;
          Fe = !0;
          try {
            ze(a, e, t, n, r);
          } finally {
            (Fe = o) || Ie();
          }
        }
        function Kt(e, t, n, r) {
          Qt(Ht, Yt.bind(null, e, t, n, r));
        }
        function Yt(e, t, n, r) {
          var a;
          if (qt)
            if ((a = 0 == (4 & t)) && 0 < at.length && -1 < ft.indexOf(e)) (e = dt(null, e, t, n, r)), at.push(e);
            else {
              var o = Xt(e, t, n, r);
              if (null === o) a && pt(e, r);
              else {
                if (a) {
                  if (-1 < ft.indexOf(e)) return (e = dt(o, e, t, n, r)), void at.push(e);
                  if (
                    (function (e, t, n, r, a) {
                      switch (t) {
                        case 'focusin':
                          return (ot = ht(ot, e, t, n, r, a)), !0;
                        case 'dragenter':
                          return (lt = ht(lt, e, t, n, r, a)), !0;
                        case 'mouseover':
                          return (it = ht(it, e, t, n, r, a)), !0;
                        case 'pointerover':
                          var o = a.pointerId;
                          return ut.set(o, ht(ut.get(o) || null, e, t, n, r, a)), !0;
                        case 'gotpointercapture':
                          return (o = a.pointerId), ct.set(o, ht(ct.get(o) || null, e, t, n, r, a)), !0;
                      }
                      return !1;
                    })(o, e, t, n, r)
                  )
                    return;
                  pt(e, r);
                }
                Nr(e, t, r, null, n);
              }
            }
        }
        function Xt(e, t, n, r) {
          var a = Ce(r);
          if (null !== (a = Xr(a))) {
            var o = Ke(a);
            if (null === o) a = null;
            else {
              var l = o.tag;
              if (13 === l) {
                if (null !== (a = Ye(o))) return a;
                a = null;
              } else if (3 === l) {
                if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                a = null;
              } else o !== a && (a = null);
            }
          }
          return Nr(e, t, r, a, n), null;
        }
        var Gt = null,
          Jt = null,
          en = null;
        function tn() {
          if (en) return en;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = 'value' in Gt ? Gt.value : Gt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (en = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function nn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rn() {
          return !0;
        }
        function an() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
                ? rn
                : an),
              (this.isPropagationStopped = an),
              this
            );
          }
          return (
            a(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = rn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = rn));
              },
              persist: function () {},
              isPersistent: rn,
            }),
            t
          );
        }
        var ln,
          un,
          cn,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          fn = on(sn),
          dn = a({}, sn, { view: 0, detail: 0 }),
          pn = on(dn),
          hn = a({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== cn &&
                    (cn && 'mousemove' === e.type
                      ? ((ln = e.screenX - cn.screenX), (un = e.screenY - cn.screenY))
                      : (un = ln = 0),
                    (cn = e)),
                  ln);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : un;
            },
          }),
          mn = on(hn),
          vn = on(a({}, hn, { dataTransfer: 0 })),
          yn = on(a({}, dn, { relatedTarget: 0 })),
          gn = on(a({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          bn = on(
            a({}, sn, {
              clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
              },
            }),
          ),
          wn = on(a({}, sn, { data: 0 })),
          kn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          En = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Sn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return xn;
        }
        var _n = on(
            a({}, dn, {
              key: function (e) {
                if (e.key) {
                  var t = kn[e.key] || e.key;
                  if ('Unidentified' !== t) return t;
                }
                return 'keypress' === e.type
                  ? 13 === (e = nn(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                  : 'keydown' === e.type || 'keyup' === e.type
                  ? En[e.keyCode] || 'Unidentified'
                  : '';
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: Cn,
              charCode: function (e) {
                return 'keypress' === e.type ? nn(e) : 0;
              },
              keyCode: function (e) {
                return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
              },
              which: function (e) {
                return 'keypress' === e.type ? nn(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
              },
            }),
          ),
          Pn = on(
            a({}, hn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Tn = on(
            a({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          On = on(a({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Nn = on(
            a({}, hn, {
              deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
              },
              deltaY: function (e) {
                return 'deltaY' in e
                  ? e.deltaY
                  : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          Ln = [9, 13, 27, 32],
          Rn = f && 'CompositionEvent' in window,
          zn = null;
        f && 'documentMode' in document && (zn = document.documentMode);
        var Mn = f && 'TextEvent' in window && !zn,
          An = f && (!Rn || (zn && 8 < zn && 11 >= zn)),
          Fn = String.fromCharCode(32),
          Dn = !1;
        function In(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Ln.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var jn = !1,
          $n = {
            color: !0,
            date: !0,
            datetime: !0,
            'datetime-local': !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!$n[e.type] : 'textarea' === t;
        }
        function Bn(e, t, n, r) {
          Ne(r),
            0 < (t = Rr(t, 'onChange')).length &&
              ((n = new fn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          Hn = null;
        function Qn(e) {
          xr(e, 0);
        }
        function qn(e) {
          if (X(Jr(e))) return e;
        }
        function Zn(e, t) {
          if ('change' === e) return t;
        }
        var Kn = !1;
        if (f) {
          var Yn;
          if (f) {
            var Xn = 'oninput' in document;
            if (!Xn) {
              var Gn = document.createElement('div');
              Gn.setAttribute('oninput', 'return;'), (Xn = 'function' == typeof Gn.oninput);
            }
            Yn = Xn;
          } else Yn = !1;
          Kn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function Jn() {
          Wn && (Wn.detachEvent('onpropertychange', er), (Hn = Wn = null));
        }
        function er(e) {
          if ('value' === e.propertyName && qn(Hn)) {
            var t = [];
            if ((Bn(t, Hn, e, Ce(e)), (e = Qn), Fe)) e(t);
            else {
              Fe = !0;
              try {
                Re(e, t);
              } finally {
                (Fe = !1), Ie();
              }
            }
          }
        }
        function tr(e, t, n) {
          'focusin' === e ? (Jn(), (Hn = n), (Wn = t).attachEvent('onpropertychange', er)) : 'focusout' === e && Jn();
        }
        function nr(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return qn(Hn);
        }
        function rr(e, t) {
          if ('click' === e) return qn(t);
        }
        function ar(e, t) {
          if ('input' === e || 'change' === e) return qn(t);
        }
        var or =
            'function' == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                },
          lr = Object.prototype.hasOwnProperty;
        function ir(e, t) {
          if (or(e, t)) return !0;
          if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) if (!lr.call(t, n[r]) || !or(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function sr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? sr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function dr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        var pr = f && 'documentMode' in document && 11 >= document.documentMode,
          hr = null,
          mr = null,
          vr = null,
          yr = !1;
        function gr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          yr ||
            null == hr ||
            hr !== G(r) ||
            ((r =
              'selectionStart' in (r = hr) && dr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (vr && ir(vr, r)) ||
              ((vr = r),
              0 < (r = Rr(mr, 'onSelect')).length &&
                ((t = new fn('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = hr))));
        }
        zt(
          'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
            ' ',
          ),
          0,
        ),
          zt(
            'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
              ' ',
            ),
            1,
          ),
          zt(Rt, 2);
        for (
          var br = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '),
            wr = 0;
          wr < br.length;
          wr++
        )
          Lt.set(br[wr], 0);
        s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          c('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
          c(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
          ),
          c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          c('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
          c('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
          c('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
        var kr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Er = new Set('cancel close invalid load scroll toggle'.split(' ').concat(kr));
        function Sr(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, c) {
              if ((Ze.apply(this, arguments), Be)) {
                if (!Be) throw Error(l(198));
                var s = We;
                (Be = !1), (We = null), He || ((He = !0), (Qe = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function xr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped())) break e;
                  Sr(a, i, c), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Sr(a, i, c), (o = u);
                }
            }
          }
          if (He) throw ((e = Qe), (He = !1), (Qe = null), e);
        }
        function Cr(e, t) {
          var n = ta(t),
            r = e + '__bubble';
          n.has(r) || (Or(t, e, 2, !1), n.add(r));
        }
        var _r = '_reactListening' + Math.random().toString(36).slice(2);
        function Pr(e) {
          e[_r] ||
            ((e[_r] = !0),
            i.forEach(function (t) {
              Er.has(t) || Tr(t, !1, e, null), Tr(t, !0, e, null);
            }));
        }
        function Tr(e, t, n, r) {
          var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
            o = n;
          if (('selectionchange' === e && 9 !== n.nodeType && (o = n.ownerDocument), null !== r && !t && Er.has(e))) {
            if ('scroll' !== e) return;
            (a |= 2), (o = r);
          }
          var l = ta(o),
            i = e + '__' + (t ? 'capture' : 'bubble');
          l.has(i) || (t && (a |= 4), Or(o, e, a, t), l.add(i));
        }
        function Or(e, t, n, r) {
          var a = Lt.get(t);
          switch (void 0 === a ? 2 : a) {
            case 0:
              a = Zt;
              break;
            case 1:
              a = Kt;
              break;
            default:
              a = Yt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !je || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Nr(e, t, n, r, a) {
          var o = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a || (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = Xr(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (De) return e();
            De = !0;
            try {
              Ae(e, t, n);
            } finally {
              (De = !1), Ie();
            }
          })(function () {
            var r = o,
              a = Ce(n),
              l = [];
            e: {
              var i = Nt.get(e);
              if (void 0 !== i) {
                var u = fn,
                  c = e;
                switch (e) {
                  case 'keypress':
                    if (0 === nn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    u = _n;
                    break;
                  case 'focusin':
                    (c = 'focus'), (u = yn);
                    break;
                  case 'focusout':
                    (c = 'blur'), (u = yn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    u = yn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = mn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = vn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = Tn;
                    break;
                  case _t:
                  case Pt:
                  case Tt:
                    u = gn;
                    break;
                  case Ot:
                    u = On;
                    break;
                  case 'scroll':
                    u = pn;
                    break;
                  case 'wheel':
                    u = Nn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = Pn;
                }
                var s = 0 != (4 & t),
                  f = !s && 'scroll' === e,
                  d = s ? (null !== i ? i + 'Capture' : null) : i;
                s = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== d && null != (m = Ue(h, d)) && s.push(Lr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < s.length && ((i = new u(i, c, null, n, a)), l.push({ event: i, listeners: s }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  0 != (16 & t) ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!Xr(c) && !c[Kr])) &&
                  (u || i) &&
                  ((i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window),
                  u
                    ? ((u = r),
                      null !== (c = (c = n.relatedTarget || n.toElement) ? Xr(c) : null) &&
                        (c !== (f = Ke(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = mn),
                  (m = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((s = Pn), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                  (f = null == u ? i : Jr(u)),
                  (p = null == c ? i : Jr(c)),
                  ((i = new s(m, h + 'leave', u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  Xr(a) === r && (((s = new s(d, h + 'enter', c, n, a)).target = p), (s.relatedTarget = f), (m = s)),
                  (f = m),
                  u && c)
                )
                  e: {
                    for (d = c, h = 0, p = s = u; p; p = zr(p)) h++;
                    for (p = 0, m = d; m; m = zr(m)) p++;
                    for (; 0 < h - p; ) (s = zr(s)), h--;
                    for (; 0 < p - h; ) (d = zr(d)), p--;
                    for (; h--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = zr(s)), (d = zr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Mr(l, i, u, s, !1), null !== c && null !== f && Mr(l, f, c, s, !0);
              }
              if (
                'select' === (u = (i = r ? Jr(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
              )
                var v = Zn;
              else if (Vn(i))
                if (Kn) v = ar;
                else {
                  v = nr;
                  var y = tr;
                }
              else
                (u = i.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (v = rr);
              switch (
                (v && (v = v(e, r))
                  ? Bn(l, v, n, a)
                  : (y && y(e, i, r),
                    'focusout' === e &&
                      (y = i._wrapperState) &&
                      y.controlled &&
                      'number' === i.type &&
                      ae(i, 'number', i.value)),
                (y = r ? Jr(r) : window),
                e)
              ) {
                case 'focusin':
                  (Vn(y) || 'true' === y.contentEditable) && ((hr = y), (mr = r), (vr = null));
                  break;
                case 'focusout':
                  vr = mr = hr = null;
                  break;
                case 'mousedown':
                  yr = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (yr = !1), gr(l, n, a);
                  break;
                case 'selectionchange':
                  if (pr) break;
                case 'keydown':
                case 'keyup':
                  gr(l, n, a);
              }
              var g;
              if (Rn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                jn
                  ? In(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (An &&
                  'ko' !== n.locale &&
                  (jn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && jn && (g = tn())
                    : ((Jt = 'value' in (Gt = a) ? Gt.value : Gt.textContent), (jn = !0))),
                0 < (y = Rr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: y }),
                  (g || null !== (g = Un(n))) && (b.data = g))),
                (g = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Un(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Dn = !0), Fn);
                        case 'textInput':
                          return (e = t.data) === Fn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (jn)
                        return 'compositionend' === e || (!Rn && In(e, t))
                          ? ((e = tn()), (en = Jt = Gt = null), (jn = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return An && 'ko' !== t.locale ? null : t.data;
                        default:
                          return null;
                      }
                    })(e, n)) &&
                  0 < (r = Rr(r, 'onBeforeInput')).length &&
                  ((a = new wn('onBeforeInput', 'beforeinput', null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            xr(l, t);
          });
        }
        function Lr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Rr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ue(e, n)) && r.unshift(Lr(e, o, a)),
              null != (o = Ue(e, t)) && r.push(Lr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function zr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Mr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              c = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              a
                ? null != (u = Ue(n, o)) && l.unshift(Lr(n, u, i))
                : a || (null != (u = Ue(n, o)) && l.push(Lr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        function Ar() {}
        var Fr = null,
          Dr = null;
        function Ir(e, t) {
          switch (e) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              return !!t.autoFocus;
          }
          return !1;
        }
        function Ur(e, t) {
          return (
            'textarea' === e ||
            'option' === e ||
            'noscript' === e ||
            'string' == typeof t.children ||
            'number' == typeof t.children ||
            ('object' == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var jr = 'function' == typeof setTimeout ? setTimeout : void 0,
          $r = 'function' == typeof clearTimeout ? clearTimeout : void 0;
        function Vr(e) {
          (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) && (e.textContent = '');
        }
        function Br(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Wr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Hr = 0,
          Qr = Math.random().toString(36).slice(2),
          qr = '__reactFiber$' + Qr,
          Zr = '__reactProps$' + Qr,
          Kr = '__reactContainer$' + Qr,
          Yr = '__reactEvents$' + Qr;
        function Xr(e) {
          var t = e[qr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Kr] || n[qr])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Wr(e); null !== e; ) {
                  if ((n = e[qr])) return n;
                  e = Wr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Gr(e) {
          return !(e = e[qr] || e[Kr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
        }
        function Jr(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function ea(e) {
          return e[Zr] || null;
        }
        function ta(e) {
          var t = e[Yr];
          return void 0 === t && (t = e[Yr] = new Set()), t;
        }
        var na = [],
          ra = -1;
        function aa(e) {
          return { current: e };
        }
        function oa(e) {
          0 > ra || ((e.current = na[ra]), (na[ra] = null), ra--);
        }
        function la(e, t) {
          ra++, (na[ra] = e.current), (e.current = t);
        }
        var ia = {},
          ua = aa(ia),
          ca = aa(!1),
          sa = ia;
        function fa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return ia;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function da(e) {
          return null != e.childContextTypes;
        }
        function pa() {
          oa(ca), oa(ua);
        }
        function ha(e, t, n) {
          if (ua.current !== ia) throw Error(l(168));
          la(ua, t), la(ca, n);
        }
        function ma(e, t, n) {
          var r = e.stateNode;
          if (((e = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
          for (var o in (r = r.getChildContext())) if (!(o in e)) throw Error(l(108, q(t) || 'Unknown', o));
          return a({}, n, r);
        }
        function va(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ia),
            (sa = ua.current),
            la(ua, e),
            la(ca, ca.current),
            !0
          );
        }
        function ya(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = ma(e, t, sa)), (r.__reactInternalMemoizedMergedChildContext = e), oa(ca), oa(ua), la(ua, e))
            : oa(ca),
            la(ca, n);
        }
        var ga = null,
          ba = null,
          wa = o.unstable_runWithPriority,
          ka = o.unstable_scheduleCallback,
          Ea = o.unstable_cancelCallback,
          Sa = o.unstable_shouldYield,
          xa = o.unstable_requestPaint,
          Ca = o.unstable_now,
          _a = o.unstable_getCurrentPriorityLevel,
          Pa = o.unstable_ImmediatePriority,
          Ta = o.unstable_UserBlockingPriority,
          Oa = o.unstable_NormalPriority,
          Na = o.unstable_LowPriority,
          La = o.unstable_IdlePriority,
          Ra = {},
          za = void 0 !== xa ? xa : function () {},
          Ma = null,
          Aa = null,
          Fa = !1,
          Da = Ca(),
          Ia =
            1e4 > Da
              ? Ca
              : function () {
                  return Ca() - Da;
                };
        function Ua() {
          switch (_a()) {
            case Pa:
              return 99;
            case Ta:
              return 98;
            case Oa:
              return 97;
            case Na:
              return 96;
            case La:
              return 95;
            default:
              throw Error(l(332));
          }
        }
        function ja(e) {
          switch (e) {
            case 99:
              return Pa;
            case 98:
              return Ta;
            case 97:
              return Oa;
            case 96:
              return Na;
            case 95:
              return La;
            default:
              throw Error(l(332));
          }
        }
        function $a(e, t) {
          return (e = ja(e)), wa(e, t);
        }
        function Va(e, t, n) {
          return (e = ja(e)), ka(e, t, n);
        }
        function Ba() {
          if (null !== Aa) {
            var e = Aa;
            (Aa = null), Ea(e);
          }
          Wa();
        }
        function Wa() {
          if (!Fa && null !== Ma) {
            Fa = !0;
            var e = 0;
            try {
              var t = Ma;
              $a(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Ma = null);
            } catch (t) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), ka(Pa, Ba), t);
            } finally {
              Fa = !1;
            }
          }
        }
        var Ha = k.ReactCurrentBatchConfig;
        function Qa(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = a({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var qa = aa(null),
          Za = null,
          Ka = null,
          Ya = null;
        function Xa() {
          Ya = Ka = Za = null;
        }
        function Ga(e) {
          var t = qa.current;
          oa(qa), (e.type._context._currentValue = t);
        }
        function Ja(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function eo(e, t) {
          (Za = e),
            (Ya = Ka = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Rl = !0), (e.firstContext = null));
        }
        function to(e, t) {
          if (Ya !== e && !1 !== t && 0 !== t)
            if (
              (('number' == typeof t && 1073741823 !== t) || ((Ya = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Ka)
            ) {
              if (null === Za) throw Error(l(308));
              (Ka = t), (Za.dependencies = { lanes: 0, firstContext: t, responders: null });
            } else Ka = Ka.next = t;
          return e._currentValue;
        }
        var no = !1;
        function ro(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function ao(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function oo(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function lo(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
          }
        }
        function io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
        }
        function uo(e, t, n, r) {
          var o = e.updateQueue;
          no = !1;
          var l = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            u = o.shared.pending;
          if (null !== u) {
            o.shared.pending = null;
            var c = u,
              s = c.next;
            (c.next = null), null === i ? (l = s) : (i.next = s), (i = c);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== i && (null === d ? (f.firstBaseUpdate = s) : (d.next = s), (f.lastBaseUpdate = c));
            }
          }
          if (null !== l) {
            for (d = o.baseState, i = 0, f = s = c = null; ; ) {
              u = l.lane;
              var p = l.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next =
                    { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                  var h = e,
                    m = l;
                  switch (((u = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' == typeof (h = m.payload)) {
                        d = h.call(p, d, u);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (null == (u = 'function' == typeof (h = m.payload) ? h.call(p, d, u) : h)) break e;
                      d = a({}, d, u);
                      break e;
                    case 2:
                      no = !0;
                  }
                }
                null !== l.callback && ((e.flags |= 32), null === (u = o.effects) ? (o.effects = [l]) : u.push(l));
              } else
                (p = { eventTime: p, lane: u, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                  null === f ? ((s = f = p), (c = d)) : (f = f.next = p),
                  (i |= u);
              if (null === (l = l.next)) {
                if (null === (u = o.shared.pending)) break;
                (l = u.next), (u.next = null), (o.lastBaseUpdate = u), (o.shared.pending = null);
              }
            }
            null === f && (c = d),
              (o.baseState = c),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = f),
              (Mi |= i),
              (e.lanes = i),
              (e.memoizedState = d);
          }
        }
        function co(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var so = new r.Component().refs;
        function fo(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var po = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ke(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ou(),
              a = lu(e),
              o = oo(r, a);
            (o.payload = t), null != n && (o.callback = n), lo(e, o), iu(e, a, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ou(),
              a = lu(e),
              o = oo(r, a);
            (o.tag = 1), (o.payload = t), null != n && (o.callback = n), lo(e, o), iu(e, a, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ou(),
              r = lu(e),
              a = oo(n, r);
            (a.tag = 2), null != t && (a.callback = t), lo(e, a), iu(e, r, n);
          },
        };
        function ho(e, t, n, r, a, o, l) {
          return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !(t.prototype && t.prototype.isPureReactComponent && ir(n, r) && ir(a, o));
        }
        function mo(e, t, n) {
          var r = !1,
            a = ia,
            o = t.contextType;
          return (
            'object' == typeof o && null !== o
              ? (o = to(o))
              : ((a = da(t) ? sa : ua.current), (o = (r = null != (r = t.contextTypes)) ? fa(e, a) : ia)),
            (t = new t(n, o)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = po),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function vo(e, t, n, r) {
          (e = t.state),
            'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && po.enqueueReplaceState(t, t.state, null);
        }
        function yo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = so), ro(e);
          var o = t.contextType;
          'object' == typeof o && null !== o
            ? (a.context = to(o))
            : ((o = da(t) ? sa : ua.current), (a.context = fa(e, o))),
            uo(e, n, a, r),
            (a.state = e.memoizedState),
            'function' == typeof (o = t.getDerivedStateFromProps) && (fo(e, t, o, n), (a.state = e.memoizedState)),
            'function' == typeof t.getDerivedStateFromProps ||
              'function' == typeof a.getSnapshotBeforeUpdate ||
              ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
              ((t = a.state),
              'function' == typeof a.componentWillMount && a.componentWillMount(),
              'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              t !== a.state && po.enqueueReplaceState(a, a.state, null),
              uo(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' == typeof a.componentDidMount && (e.flags |= 4);
        }
        var go = Array.isArray;
        function bo(e, t, n) {
          if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = '' + e;
              return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === a
                ? t.ref
                : (((t = function (e) {
                    var t = r.refs;
                    t === so && (t = r.refs = {}), null === e ? delete t[a] : (t[a] = e);
                  })._stringRef = a),
                  t);
            }
            if ('string' != typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function wo(e, t) {
          if ('textarea' !== e.type)
            throw Error(
              l(
                31,
                '[object Object]' === Object.prototype.toString.call(t)
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : t,
              ),
            );
        }
        function ko(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = $u(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = a(t, n.props)).ref = bo(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = bo(e, t, n)), (r.return = e), r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Uu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ('string' == typeof t || 'number' == typeof t) return ((t = $u('' + t, e.mode, n)).return = e), t;
            if ('object' == typeof t && null !== t) {
              switch (t.$$typeof) {
                case E:
                  return ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = bo(e, null, t)), (n.return = e), n;
                case S:
                  return ((t = Vu(t, e.mode, n)).return = e), t;
              }
              if (go(t) || V(t)) return ((t = Uu(t, e.mode, n, null)).return = e), t;
              wo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ('string' == typeof n || 'number' == typeof n) return null !== a ? null : u(e, t, '' + n, r);
            if ('object' == typeof n && null !== n) {
              switch (n.$$typeof) {
                case E:
                  return n.key === a ? (n.type === x ? f(e, t, n.props.children, r, a) : c(e, t, n, r)) : null;
                case S:
                  return n.key === a ? s(e, t, n, r) : null;
              }
              if (go(n) || V(n)) return null !== a ? null : f(e, t, n, r, null);
              wo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if ('string' == typeof r || 'number' == typeof r) return u(t, (e = e.get(n) || null), '' + r, a);
            if ('object' == typeof r && null !== r) {
              switch (r.$$typeof) {
                case E:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === x ? f(t, e, r.props.children, a, r.key) : c(t, e, r, a)
                  );
                case S:
                  return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
              }
              if (go(r) || V(r)) return f(t, (e = e.get(n) || null), r, a, null);
              wo(t, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (var c = null, s = null, f = l, m = (l = 0), v = null; null !== f && m < i.length; m++) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var y = p(a, f, i[m], u);
              if (null === y) {
                null === f && (f = v);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (l = o(y, l, m)),
                null === s ? (c = y) : (s.sibling = y),
                (s = y),
                (f = v);
            }
            if (m === i.length) return n(a, f), c;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) && ((l = o(f, l, m)), null === s ? (c = f) : (s.sibling = f), (s = f));
              return c;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
                (l = o(v, l, m)),
                null === s ? (c = v) : (s.sibling = v),
                (s = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              c
            );
          }
          function v(a, i, u, c) {
            var s = V(u);
            if ('function' != typeof s) throw Error(l(150));
            if (null == (u = s.call(u))) throw Error(l(151));
            for (
              var f = (s = null), m = i, v = (i = 0), y = null, g = u.next();
              null !== m && !g.done;
              v++, g = u.next()
            ) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(a, m, g.value, c);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, v)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (m = y);
            }
            if (g.done) return n(a, m), s;
            if (null === m) {
              for (; !g.done; v++, g = u.next())
                null !== (g = d(a, g.value, c)) && ((i = o(g, i, v)), null === f ? (s = g) : (f.sibling = g), (f = g));
              return s;
            }
            for (m = r(a, m); !g.done; v++, g = u.next())
              null !== (g = h(m, a, v, g.value, c)) &&
                (e && null !== g.alternate && m.delete(null === g.key ? v : g.key),
                (i = o(g, i, v)),
                null === f ? (s = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              s
            );
          }
          return function (e, r, o, u) {
            var c = 'object' == typeof o && null !== o && o.type === x && null === o.key;
            c && (o = o.props.children);
            var s = 'object' == typeof o && null !== o;
            if (s)
              switch (o.$$typeof) {
                case E:
                  e: {
                    for (s = o.key, c = r; null !== c; ) {
                      if (c.key === s) {
                        switch (c.tag) {
                          case 7:
                            if (o.type === x) {
                              n(e, c.sibling), ((r = a(c, o.props.children)).return = e), (e = r);
                              break e;
                            }
                            break;
                          default:
                            if (c.elementType === o.type) {
                              n(e, c.sibling), ((r = a(c, o.props)).ref = bo(e, c, o)), (r.return = e), (e = r);
                              break e;
                            }
                        }
                        n(e, c);
                        break;
                      }
                      t(e, c), (c = c.sibling);
                    }
                    o.type === x
                      ? (((r = Uu(o.props.children, e.mode, u, o.key)).return = e), (e = r))
                      : (((u = Iu(o.type, o.key, o.props, null, e.mode, u)).ref = bo(e, r, o)),
                        (u.return = e),
                        (e = u));
                  }
                  return i(e);
                case S:
                  e: {
                    for (c = o.key; null !== r; ) {
                      if (r.key === c) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === o.containerInfo &&
                          r.stateNode.implementation === o.implementation
                        ) {
                          n(e, r.sibling), ((r = a(r, o.children || [])).return = e), (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Vu(o, e.mode, u)).return = e), (e = r);
                  }
                  return i(e);
              }
            if ('string' == typeof o || 'number' == typeof o)
              return (
                (o = '' + o),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
                  : (n(e, r), ((r = $u(o, e.mode, u)).return = e), (e = r)),
                i(e)
              );
            if (go(o)) return m(e, r, o, u);
            if (V(o)) return v(e, r, o, u);
            if ((s && wo(e, o), void 0 === o && !c))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(l(152, q(e.type) || 'Component'));
              }
            return n(e, r);
          };
        }
        var Eo = ko(!0),
          So = ko(!1),
          xo = {},
          Co = aa(xo),
          _o = aa(xo),
          Po = aa(xo);
        function To(e) {
          if (e === xo) throw Error(l(174));
          return e;
        }
        function Oo(e, t) {
          switch ((la(Po, t), la(_o, e), la(Co, xo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : pe(null, '');
              break;
            default:
              t = pe((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          oa(Co), la(Co, t);
        }
        function No() {
          oa(Co), oa(_o), oa(Po);
        }
        function Lo(e) {
          To(Po.current);
          var t = To(Co.current),
            n = pe(t, e.type);
          t !== n && (la(_o, e), la(Co, n));
        }
        function Ro(e) {
          _o.current === e && (oa(Co), oa(_o));
        }
        var zo = aa(0);
        function Mo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Ao = null,
          Fo = null,
          Do = !1;
        function Io(e, t) {
          var n = Au(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.type = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Uo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), !0)
              );
            case 6:
              return null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
            case 13:
            default:
              return !1;
          }
        }
        function jo(e) {
          if (Do) {
            var t = Fo;
            if (t) {
              var n = t;
              if (!Uo(e, t)) {
                if (!(t = Br(n.nextSibling)) || !Uo(e, t))
                  return (e.flags = (-1025 & e.flags) | 2), (Do = !1), void (Ao = e);
                Io(Ao, n);
              }
              (Ao = e), (Fo = Br(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Do = !1), (Ao = e);
          }
        }
        function $o(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
          Ao = e;
        }
        function Vo(e) {
          if (e !== Ao) return !1;
          if (!Do) return $o(e), (Do = !0), !1;
          var t = e.type;
          if (5 !== e.tag || ('head' !== t && 'body' !== t && !Ur(t, e.memoizedProps)))
            for (t = Fo; t; ) Io(e, t), (t = Br(t.nextSibling));
          if (($o(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      Fo = Br(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              Fo = null;
            }
          } else Fo = Ao ? Br(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Bo() {
          (Fo = Ao = null), (Do = !1);
        }
        var Wo = [];
        function Ho() {
          for (var e = 0; e < Wo.length; e++) Wo[e]._workInProgressVersionPrimary = null;
          Wo.length = 0;
        }
        var Qo = k.ReactCurrentDispatcher,
          qo = k.ReactCurrentBatchConfig,
          Zo = 0,
          Ko = null,
          Yo = null,
          Xo = null,
          Go = !1,
          Jo = !1;
        function el() {
          throw Error(l(321));
        }
        function tl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function nl(e, t, n, r, a, o) {
          if (
            ((Zo = o),
            (Ko = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Qo.current = null === e || null === e.memoizedState ? Tl : Ol),
            (e = n(r, a)),
            Jo)
          ) {
            o = 0;
            do {
              if (((Jo = !1), !(25 > o))) throw Error(l(301));
              (o += 1), (Xo = Yo = null), (t.updateQueue = null), (Qo.current = Nl), (e = n(r, a));
            } while (Jo);
          }
          if (((Qo.current = Pl), (t = null !== Yo && null !== Yo.next), (Zo = 0), (Xo = Yo = Ko = null), (Go = !1), t))
            throw Error(l(300));
          return e;
        }
        function rl() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === Xo ? (Ko.memoizedState = Xo = e) : (Xo = Xo.next = e), Xo;
        }
        function al() {
          if (null === Yo) {
            var e = Ko.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Yo.next;
          var t = null === Xo ? Ko.memoizedState : Xo.next;
          if (null !== t) (Xo = t), (Yo = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (Yo = e).memoizedState,
              baseState: Yo.baseState,
              baseQueue: Yo.baseQueue,
              queue: Yo.queue,
              next: null,
            }),
              null === Xo ? (Ko.memoizedState = Xo = e) : (Xo = Xo.next = e);
          }
          return Xo;
        }
        function ol(e, t) {
          return 'function' == typeof t ? t(e) : t;
        }
        function ll(e) {
          var t = al(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = Yo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (a = a.next), (r = r.baseState);
            var u = (i = o = null),
              c = a;
            do {
              var s = c.lane;
              if ((Zo & s) === s)
                null !== u &&
                  (u = u.next =
                    { lane: 0, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null }),
                  (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: s,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((i = u = f), (o = r)) : (u = u.next = f), (Ko.lanes |= s), (Mi |= s);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === u ? (o = r) : (u.next = i),
              or(r, t.memoizedState) || (Rl = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function il(e) {
          var t = al(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            or(o, t.memoizedState) || (Rl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function ul(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var a = t._workInProgressVersionPrimary;
          if (
            (null !== a
              ? (e = a === r)
              : ((e = e.mutableReadLanes), (e = (Zo & e) === e) && ((t._workInProgressVersionPrimary = r), Wo.push(t))),
            e)
          )
            return n(t._source);
          throw (Wo.push(t), Error(l(350)));
        }
        function cl(e, t, n, r) {
          var a = _i;
          if (null === a) throw Error(l(349));
          var o = t._getVersion,
            i = o(t._source),
            u = Qo.current,
            c = u.useState(function () {
              return ul(a, t, n);
            }),
            s = c[1],
            f = c[0];
          c = Xo;
          var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            m = d.source;
          d = d.subscribe;
          var v = Ko;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = s);
                var e = o(t._source);
                if (!or(i, e)) {
                  (e = n(t._source)),
                    or(f, e) || (s(e), (e = lu(v)), (a.mutableReadLanes |= e & a.pendingLanes)),
                    (e = a.mutableReadLanes),
                    (a.entangledLanes |= e);
                  for (var r = a.entanglements, l = e; 0 < l; ) {
                    var u = 31 - Vt(l),
                      c = 1 << u;
                    (r[u] |= e), (l &= ~c);
                  }
                }
              },
              [n, t, r],
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = lu(v);
                    a.mutableReadLanes |= r & a.pendingLanes;
                  } catch (e) {
                    n(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, r],
            ),
            (or(h, n) && or(m, t) && or(d, r)) ||
              (((e = { pending: null, dispatch: null, lastRenderedReducer: ol, lastRenderedState: f }).dispatch = s =
                _l.bind(null, Ko, e)),
              (c.queue = e),
              (c.baseQueue = null),
              (f = ul(a, t, n)),
              (c.memoizedState = c.baseState = f)),
            f
          );
        }
        function sl(e, t, n) {
          return cl(al(), e, t, n);
        }
        function fl(e) {
          var t = rl();
          return (
            'function' == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              { pending: null, dispatch: null, lastRenderedReducer: ol, lastRenderedState: e }).dispatch =
              _l.bind(null, Ko, e)),
            [t.memoizedState, e]
          );
        }
        function dl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Ko.updateQueue)
              ? ((t = { lastEffect: null }), (Ko.updateQueue = t), (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function pl(e) {
          return (e = { current: e }), (rl().memoizedState = e);
        }
        function hl() {
          return al().memoizedState;
        }
        function ml(e, t, n, r) {
          var a = rl();
          (Ko.flags |= e), (a.memoizedState = dl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function vl(e, t, n, r) {
          var a = al();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== Yo) {
            var l = Yo.memoizedState;
            if (((o = l.destroy), null !== r && tl(r, l.deps))) return void dl(t, n, o, r);
          }
          (Ko.flags |= e), (a.memoizedState = dl(1 | t, n, o, r));
        }
        function yl(e, t) {
          return ml(516, 4, e, t);
        }
        function gl(e, t) {
          return vl(516, 4, e, t);
        }
        function bl(e, t) {
          return vl(4, 2, e, t);
        }
        function wl(e, t) {
          return 'function' == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function kl(e, t, n) {
          return (n = null != n ? n.concat([e]) : null), vl(4, 2, wl.bind(null, t, e), n);
        }
        function El() {}
        function Sl(e, t) {
          var n = al();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && tl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function xl(e, t) {
          var n = al();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && tl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Cl(e, t) {
          var n = Ua();
          $a(98 > n ? 98 : n, function () {
            e(!0);
          }),
            $a(97 < n ? 97 : n, function () {
              var n = qo.transition;
              qo.transition = 1;
              try {
                e(!1), t();
              } finally {
                qo.transition = n;
              }
            });
        }
        function _l(e, t, n) {
          var r = ou(),
            a = lu(e),
            o = { lane: a, action: n, eagerReducer: null, eagerState: null, next: null },
            l = t.pending;
          if (
            (null === l ? (o.next = o) : ((o.next = l.next), (l.next = o)),
            (t.pending = o),
            (l = e.alternate),
            e === Ko || (null !== l && l === Ko))
          )
            Jo = Go = !0;
          else {
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
              try {
                var i = t.lastRenderedState,
                  u = l(i, n);
                if (((o.eagerReducer = l), (o.eagerState = u), or(u, i))) return;
              } catch (e) {}
            iu(e, a, r);
          }
        }
        var Pl = {
            readContext: to,
            useCallback: el,
            useContext: el,
            useEffect: el,
            useImperativeHandle: el,
            useLayoutEffect: el,
            useMemo: el,
            useReducer: el,
            useRef: el,
            useState: el,
            useDebugValue: el,
            useDeferredValue: el,
            useTransition: el,
            useMutableSource: el,
            useOpaqueIdentifier: el,
            unstable_isNewReconciler: !1,
          },
          Tl = {
            readContext: to,
            useCallback: function (e, t) {
              return (rl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: to,
            useEffect: yl,
            useImperativeHandle: function (e, t, n) {
              return (n = null != n ? n.concat([e]) : null), ml(4, 2, wl.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return ml(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = rl();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = rl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch =
                  _l.bind(null, Ko, e)),
                [r.memoizedState, e]
              );
            },
            useRef: pl,
            useState: fl,
            useDebugValue: El,
            useDeferredValue: function (e) {
              var t = fl(e),
                n = t[0],
                r = t[1];
              return (
                yl(
                  function () {
                    var t = qo.transition;
                    qo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      qo.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = fl(!1),
                t = e[0];
              return pl((e = Cl.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = rl();
              return (
                (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }),
                cl(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Do) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: A, toString: e, valueOf: e };
                  })(function () {
                    throw (e || ((e = !0), n('r:' + (Hr++).toString(36))), Error(l(355)));
                  }),
                  n = fl(t)[1];
                return (
                  0 == (2 & Ko.mode) &&
                    ((Ko.flags |= 516),
                    dl(
                      5,
                      function () {
                        n('r:' + (Hr++).toString(36));
                      },
                      void 0,
                      null,
                    )),
                  t
                );
              }
              return fl((t = 'r:' + (Hr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Ol = {
            readContext: to,
            useCallback: Sl,
            useContext: to,
            useEffect: gl,
            useImperativeHandle: kl,
            useLayoutEffect: bl,
            useMemo: xl,
            useReducer: ll,
            useRef: hl,
            useState: function () {
              return ll(ol);
            },
            useDebugValue: El,
            useDeferredValue: function (e) {
              var t = ll(ol),
                n = t[0],
                r = t[1];
              return (
                gl(
                  function () {
                    var t = qo.transition;
                    qo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      qo.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = ll(ol)[0];
              return [hl().current, e];
            },
            useMutableSource: sl,
            useOpaqueIdentifier: function () {
              return ll(ol)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Nl = {
            readContext: to,
            useCallback: Sl,
            useContext: to,
            useEffect: gl,
            useImperativeHandle: kl,
            useLayoutEffect: bl,
            useMemo: xl,
            useReducer: il,
            useRef: hl,
            useState: function () {
              return il(ol);
            },
            useDebugValue: El,
            useDeferredValue: function (e) {
              var t = il(ol),
                n = t[0],
                r = t[1];
              return (
                gl(
                  function () {
                    var t = qo.transition;
                    qo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      qo.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = il(ol)[0];
              return [hl().current, e];
            },
            useMutableSource: sl,
            useOpaqueIdentifier: function () {
              return il(ol)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ll = k.ReactCurrentOwner,
          Rl = !1;
        function zl(e, t, n, r) {
          t.child = null === e ? So(t, null, n, r) : Eo(t, e.child, n, r);
        }
        function Ml(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            eo(t, a),
            (r = nl(e, t, n, r, o, a)),
            null === e || Rl
              ? ((t.flags |= 1), zl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~a), Gl(e, t, a))
          );
        }
        function Al(e, t, n, r, a, o) {
          if (null === e) {
            var l = n.type;
            return 'function' != typeof l ||
              Fu(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = l), Fl(e, t, l, r, a, o));
          }
          return (
            (l = e.child),
            0 == (a & o) && ((a = l.memoizedProps), (n = null !== (n = n.compare) ? n : ir)(a, r) && e.ref === t.ref)
              ? Gl(e, t, o)
              : ((t.flags |= 1), ((e = Du(l, r)).ref = t.ref), (e.return = t), (t.child = e))
          );
        }
        function Fl(e, t, n, r, a, o) {
          if (null !== e && ir(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Rl = !1), 0 == (o & a))) return (t.lanes = e.lanes), Gl(e, t, o);
            0 != (16384 & e.flags) && (Rl = !0);
          }
          return Ul(e, t, n, r, o);
        }
        function Dl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
            if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), pu(0, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  pu(0, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }), pu(0, null !== o ? o.baseLanes : n);
            }
          else null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), pu(0, r);
          return zl(e, t, a, n), t.child;
        }
        function Il(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
        }
        function Ul(e, t, n, r, a) {
          var o = da(n) ? sa : ua.current;
          return (
            (o = fa(t, o)),
            eo(t, a),
            (n = nl(e, t, n, r, o, a)),
            null === e || Rl
              ? ((t.flags |= 1), zl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~a), Gl(e, t, a))
          );
        }
        function jl(e, t, n, r, a) {
          if (da(n)) {
            var o = !0;
            va(t);
          } else o = !1;
          if ((eo(t, a), null === t.stateNode))
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              mo(t, n, r),
              yo(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              c = n.contextType;
            c = 'object' == typeof c && null !== c ? to(c) : fa(t, (c = da(n) ? sa : ua.current));
            var s = n.getDerivedStateFromProps,
              f = 'function' == typeof s || 'function' == typeof l.getSnapshotBeforeUpdate;
            f ||
              ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
                'function' != typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== c) && vo(t, l, r, c)),
              (no = !1);
            var d = t.memoizedState;
            (l.state = d),
              uo(t, r, l, a),
              (u = t.memoizedState),
              i !== r || d !== u || ca.current || no
                ? ('function' == typeof s && (fo(t, n, s, r), (u = t.memoizedState)),
                  (i = no || ho(t, n, i, r, d, u, c))
                    ? (f ||
                        ('function' != typeof l.UNSAFE_componentWillMount &&
                          'function' != typeof l.componentWillMount) ||
                        ('function' == typeof l.componentWillMount && l.componentWillMount(),
                        'function' == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()),
                      'function' == typeof l.componentDidMount && (t.flags |= 4))
                    : ('function' == typeof l.componentDidMount && (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = c),
                  (r = i))
                : ('function' == typeof l.componentDidMount && (t.flags |= 4), (r = !1));
          } else {
            (l = t.stateNode),
              ao(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : Qa(t.type, i)),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              (u = 'object' == typeof (u = n.contextType) && null !== u ? to(u) : fa(t, (u = da(n) ? sa : ua.current)));
            var p = n.getDerivedStateFromProps;
            (s = 'function' == typeof p || 'function' == typeof l.getSnapshotBeforeUpdate) ||
              ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
                'function' != typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && vo(t, l, r, u)),
              (no = !1),
              (d = t.memoizedState),
              (l.state = d),
              uo(t, r, l, a);
            var h = t.memoizedState;
            i !== f || d !== h || ca.current || no
              ? ('function' == typeof p && (fo(t, n, p, r), (h = t.memoizedState)),
                (c = no || ho(t, n, c, r, d, h, u))
                  ? (s ||
                      ('function' != typeof l.UNSAFE_componentWillUpdate &&
                        'function' != typeof l.componentWillUpdate) ||
                      ('function' == typeof l.componentWillUpdate && l.componentWillUpdate(r, h, u),
                      'function' == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' == typeof l.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof l.getSnapshotBeforeUpdate && (t.flags |= 256))
                  : ('function' != typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' != typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = u),
                (r = c))
              : ('function' != typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' != typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return $l(e, t, n, r, o, a);
        }
        function $l(e, t, n, r, a, o) {
          Il(e, t);
          var l = 0 != (64 & t.flags);
          if (!r && !l) return a && ya(t, n, !1), Gl(e, t, o);
          (r = t.stateNode), (Ll.current = t);
          var i = l && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && l ? ((t.child = Eo(t, e.child, null, o)), (t.child = Eo(t, null, i, o))) : zl(e, t, i, o),
            (t.memoizedState = r.state),
            a && ya(t, n, !0),
            t.child
          );
        }
        function Vl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ha(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ha(0, t.context, !1),
            Oo(e, t.containerInfo);
        }
        var Bl,
          Wl,
          Hl,
          Ql = { dehydrated: null, retryLane: 0 };
        function ql(e, t, n) {
          var r,
            a = t.pendingProps,
            o = zo.current,
            l = !1;
          return (
            (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
            r
              ? ((l = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === a.fallback ||
                !0 === a.unstable_avoidThisFallback ||
                (o |= 1),
            la(zo, 1 & o),
            null === e
              ? (void 0 !== a.fallback && jo(t),
                (e = a.children),
                (o = a.fallback),
                l
                  ? ((e = Zl(t, e, o, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Ql), e)
                  : 'number' == typeof a.unstable_expectedLoadTime
                  ? ((e = Zl(t, e, o, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ql),
                    (t.lanes = 33554432),
                    e)
                  : (((n = ju({ mode: 'visible', children: e }, t.mode, n, null)).return = t), (t.child = n)))
              : (e.memoizedState,
                l
                  ? ((a = (function (e, t, n, r, a) {
                      var o = t.mode,
                        l = e.child;
                      e = l.sibling;
                      var i = { mode: 'hidden', children: n };
                      return (
                        0 == (2 & o) && t.child !== l
                          ? (((n = t.child).childLanes = 0),
                            (n.pendingProps = i),
                            null !== (l = n.lastEffect)
                              ? ((t.firstEffect = n.firstEffect), (t.lastEffect = l), (l.nextEffect = null))
                              : (t.firstEffect = t.lastEffect = null))
                          : (n = Du(l, i)),
                        null !== e ? (r = Du(e, r)) : ((r = Uu(r, o, a, null)).flags |= 2),
                        (r.return = t),
                        (n.return = t),
                        (n.sibling = r),
                        (t.child = n),
                        r
                      );
                    })(e, t, a.children, a.fallback, n)),
                    (l = t.child),
                    (o = e.child.memoizedState),
                    (l.memoizedState = null === o ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
                    (l.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Ql),
                    a)
                  : ((n = (function (e, t, n, r) {
                      var a = e.child;
                      return (
                        (e = a.sibling),
                        (n = Du(a, { mode: 'visible', children: n })),
                        0 == (2 & t.mode) && (n.lanes = r),
                        (n.return = t),
                        (n.sibling = null),
                        null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
                        (t.child = n)
                      );
                    })(e, t, a.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Zl(e, t, n, r) {
          var a = e.mode,
            o = e.child;
          return (
            (t = { mode: 'hidden', children: t }),
            0 == (2 & a) && null !== o ? ((o.childLanes = 0), (o.pendingProps = t)) : (o = ju(t, a, 0, null)),
            (n = Uu(n, a, r, null)),
            (o.return = e),
            (n.return = e),
            (o.sibling = n),
            (e.child = o),
            n
          );
        }
        function Kl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), Ja(e.return, t);
        }
        function Yl(e, t, n, r, a, o) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
                lastEffect: o,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a),
              (l.lastEffect = o));
        }
        function Xl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((zl(e, t, r.children, n), 0 != (2 & (r = zo.current)))) (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Kl(e, n);
                else if (19 === e.tag) Kl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((la(zo, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === Mo(e) && (a = n), (n = n.sibling);
                null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                  Yl(t, !1, a, n, o, t.lastEffect);
                break;
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === Mo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Yl(t, !0, n, null, o, t.lastEffect);
                break;
              case 'together':
                Yl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Gl(e, t, n) {
          if ((null !== e && (t.dependencies = e.dependencies), (Mi |= t.lanes), 0 != (n & t.childLanes))) {
            if (null !== e && t.child !== e.child) throw Error(l(153));
            if (null !== t.child) {
              for (n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
                (e = e.sibling), ((n = n.sibling = Du(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function Jl(e, t) {
          if (!Do)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
            }
        }
        function ei(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
              return da(t.type) && pa(), null;
            case 3:
              return (
                No(),
                oa(ca),
                oa(ua),
                Ho(),
                (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) || (Vo(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ro(t);
              var o = To(Po.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Wl(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return null;
                }
                if (((e = To(Co.current)), Vo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (((r[qr] = t), (r[Zr] = i), n)) {
                    case 'dialog':
                      Cr('cancel', r), Cr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Cr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (e = 0; e < kr.length; e++) Cr(kr[e], r);
                      break;
                    case 'source':
                      Cr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Cr('error', r), Cr('load', r);
                      break;
                    case 'details':
                      Cr('toggle', r);
                      break;
                    case 'input':
                      ee(r, i), Cr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!i.multiple }), Cr('invalid', r);
                      break;
                    case 'textarea':
                      ue(r, i), Cr('invalid', r);
                  }
                  for (var c in (Se(n, i), (e = null), i))
                    i.hasOwnProperty(c) &&
                      ((o = i[c]),
                      'children' === c
                        ? 'string' == typeof o
                          ? r.textContent !== o && (e = ['children', o])
                          : 'number' == typeof o && r.textContent !== '' + o && (e = ['children', '' + o])
                        : u.hasOwnProperty(c) && null != o && 'onScroll' === c && Cr('scroll', r));
                  switch (n) {
                    case 'input':
                      Y(r), re(r, i, !0);
                      break;
                    case 'textarea':
                      Y(r), se(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' == typeof i.onClick && (r.onclick = Ar);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((c = 9 === o.nodeType ? o : o.ownerDocument),
                    e === fe && (e = de(n)),
                    e === fe
                      ? 'script' === n
                        ? (((e = c.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' == typeof r.is
                        ? (e = c.createElement(n, { is: r.is }))
                        : ((e = c.createElement(n)),
                          'select' === n && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                      : (e = c.createElementNS(e, n)),
                    (e[qr] = t),
                    (e[Zr] = r),
                    Bl(e, t),
                    (t.stateNode = e),
                    (c = xe(n, r)),
                    n)
                  ) {
                    case 'dialog':
                      Cr('cancel', e), Cr('close', e), (o = r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Cr('load', e), (o = r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < kr.length; o++) Cr(kr[o], e);
                      o = r;
                      break;
                    case 'source':
                      Cr('error', e), (o = r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Cr('error', e), Cr('load', e), (o = r);
                      break;
                    case 'details':
                      Cr('toggle', e), (o = r);
                      break;
                    case 'input':
                      ee(e, r), (o = J(e, r)), Cr('invalid', e);
                      break;
                    case 'option':
                      o = oe(e, r);
                      break;
                    case 'select':
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (o = a({}, r, { value: void 0 })),
                        Cr('invalid', e);
                      break;
                    case 'textarea':
                      ue(e, r), (o = ie(e, r)), Cr('invalid', e);
                      break;
                    default:
                      o = r;
                  }
                  Se(n, o);
                  var s = o;
                  for (i in s)
                    if (s.hasOwnProperty(i)) {
                      var f = s[i];
                      'style' === i
                        ? ke(e, f)
                        : 'dangerouslySetInnerHTML' === i
                        ? null != (f = f ? f.__html : void 0) && ve(e, f)
                        : 'children' === i
                        ? 'string' == typeof f
                          ? ('textarea' !== n || '' !== f) && ye(e, f)
                          : 'number' == typeof f && ye(e, '' + f)
                        : 'suppressContentEditableWarning' !== i &&
                          'suppressHydrationWarning' !== i &&
                          'autoFocus' !== i &&
                          (u.hasOwnProperty(i)
                            ? null != f && 'onScroll' === i && Cr('scroll', e)
                            : null != f && w(e, i, f, c));
                    }
                  switch (n) {
                    case 'input':
                      Y(e), re(e, r, !1);
                      break;
                    case 'textarea':
                      Y(e), se(e);
                      break;
                    case 'option':
                      null != r.value && e.setAttribute('value', '' + Z(r.value));
                      break;
                    case 'select':
                      (e.multiple = !!r.multiple),
                        null != (i = r.value)
                          ? le(e, !!r.multiple, i, !1)
                          : null != r.defaultValue && le(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      'function' == typeof o.onClick && (e.onclick = Ar);
                  }
                  Ir(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Hl(0, t, e.memoizedProps, r);
              else {
                if ('string' != typeof r && null === t.stateNode) throw Error(l(166));
                (n = To(Po.current)),
                  To(Co.current),
                  Vo(t)
                    ? ((r = t.stateNode), (n = t.memoizedProps), (r[qr] = t), r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[qr] = t), (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                oa(zo),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? void 0 !== t.memoizedProps.fallback && Vo(t) : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & zo.current)
                        ? 0 === Li && (Li = 3)
                        : ((0 !== Li && 3 !== Li) || (Li = 4),
                          null === _i || (0 == (134217727 & Mi) && 0 == (134217727 & Ai)) || fu(_i, Ti))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return No(), null === e && Pr(t.stateNode.containerInfo), null;
            case 10:
              return Ga(t), null;
            case 17:
              return da(t.type) && pa(), null;
            case 19:
              if ((oa(zo), null === (r = t.memoizedState))) return null;
              if (((i = 0 != (64 & t.flags)), null === (c = r.rendering)))
                if (i) Jl(r, !1);
                else {
                  if (0 !== Li || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = Mo(e))) {
                        for (
                          t.flags |= 64,
                            Jl(r, !1),
                            null !== (i = c.updateQueue) && ((t.updateQueue = i), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 2),
                            (i.nextEffect = null),
                            (i.firstEffect = null),
                            (i.lastEffect = null),
                            null === (c = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = c.childLanes),
                                (i.lanes = c.lanes),
                                (i.child = c.child),
                                (i.memoizedProps = c.memoizedProps),
                                (i.memoizedState = c.memoizedState),
                                (i.updateQueue = c.updateQueue),
                                (i.type = c.type),
                                (e = c.dependencies),
                                (i.dependencies =
                                  null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return la(zo, (1 & zo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail && Ia() > Ui && ((t.flags |= 64), (i = !0), Jl(r, !1), (t.lanes = 33554432));
                }
              else {
                if (!i)
                  if (null !== (e = Mo(c))) {
                    if (
                      ((t.flags |= 64),
                      (i = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      Jl(r, !0),
                      null === r.tail && 'hidden' === r.tailMode && !c.alternate && !Do)
                    )
                      return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                  } else
                    2 * Ia() - r.renderingStartTime > Ui &&
                      1073741824 !== n &&
                      ((t.flags |= 64), (i = !0), Jl(r, !1), (t.lanes = 33554432));
                r.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c), (r.last = c));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ia()),
                  (n.sibling = null),
                  (t = zo.current),
                  la(zo, i ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                hu(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  'unstable-defer-without-hiding' !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(l(156, t.tag));
        }
        function ti(e) {
          switch (e.tag) {
            case 1:
              da(e.type) && pa();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((No(), oa(ca), oa(ua), Ho(), 0 != (64 & (t = e.flags)))) throw Error(l(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ro(e), null;
            case 13:
              return oa(zo), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 19:
              return oa(zo), null;
            case 4:
              return No(), null;
            case 10:
              return Ga(e), null;
            case 23:
            case 24:
              return hu(), null;
            default:
              return null;
          }
        }
        function ni(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += Q(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (e) {
            a = '\nError generating stack: ' + e.message + '\n' + e.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function ri(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        (Bl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Wl = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), To(Co.current);
              var l,
                i = null;
              switch (n) {
                case 'input':
                  (o = J(e, o)), (r = J(e, r)), (i = []);
                  break;
                case 'option':
                  (o = oe(e, o)), (r = oe(e, r)), (i = []);
                  break;
                case 'select':
                  (o = a({}, o, { value: void 0 })), (r = a({}, r, { value: void 0 })), (i = []);
                  break;
                case 'textarea':
                  (o = ie(e, o)), (r = ie(e, r)), (i = []);
                  break;
                default:
                  'function' != typeof o.onClick && 'function' == typeof r.onClick && (e.onclick = Ar);
              }
              for (f in (Se(n, r), (n = null), o))
                if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && null != o[f])
                  if ('style' === f) {
                    var c = o[f];
                    for (l in c) c.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== f &&
                      'children' !== f &&
                      'suppressContentEditableWarning' !== f &&
                      'suppressHydrationWarning' !== f &&
                      'autoFocus' !== f &&
                      (u.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
              for (f in r) {
                var s = r[f];
                if (((c = null != o ? o[f] : void 0), r.hasOwnProperty(f) && s !== c && (null != s || null != c)))
                  if ('style' === f)
                    if (c) {
                      for (l in c) !c.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
                      for (l in s) s.hasOwnProperty(l) && c[l] !== s[l] && (n || (n = {}), (n[l] = s[l]));
                    } else n || (i || (i = []), i.push(f, n)), (n = s);
                  else
                    'dangerouslySetInnerHTML' === f
                      ? ((s = s ? s.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != s && c !== s && (i = i || []).push(f, s))
                      : 'children' === f
                      ? ('string' != typeof s && 'number' != typeof s) || (i = i || []).push(f, '' + s)
                      : 'suppressContentEditableWarning' !== f &&
                        'suppressHydrationWarning' !== f &&
                        (u.hasOwnProperty(f)
                          ? (null != s && 'onScroll' === f && Cr('scroll', e), i || c === s || (i = []))
                          : 'object' == typeof s && null !== s && s.$$typeof === A
                          ? s.toString()
                          : (i = i || []).push(f, s));
              }
              n && (i = i || []).push('style', n);
              var f = i;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Hl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var ai = 'function' == typeof WeakMap ? WeakMap : Map;
        function oi(e, t, n) {
          ((n = oo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Bi || ((Bi = !0), (Wi = r)), ri(0, t);
            }),
            n
          );
        }
        function li(e, t, n) {
          (n = oo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' == typeof r) {
            var a = t.value;
            n.payload = function () {
              return ri(0, t), r(a);
            };
          }
          var o = e.stateNode;
          return (
            null !== o &&
              'function' == typeof o.componentDidCatch &&
              (n.callback = function () {
                'function' != typeof r && (null === Hi ? (Hi = new Set([this])) : Hi.add(this), ri(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        var ii = 'function' == typeof WeakSet ? WeakSet : Set;
        function ui(e) {
          var t = e.ref;
          if (null !== t)
            if ('function' == typeof t)
              try {
                t(null);
              } catch (t) {
                Lu(e, t);
              }
            else t.current = null;
        }
        function ci(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Qa(t.type, n), r)),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Vr(t.stateNode.containerInfo));
            case 5:
            case 6:
            case 4:
            case 17:
              return;
          }
          throw Error(l(163));
        }
        function si(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  var a = e;
                  (r = a.next), 0 != (4 & (a = a.tag)) && 0 != (1 & a) && (Tu(n, e), Pu(n, e)), (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r = n.elementType === n.type ? t.memoizedProps : Qa(n.type, t.memoizedProps)),
                      e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                void (null !== (t = n.updateQueue) && co(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                      e = n.child.stateNode;
                      break;
                    case 1:
                      e = n.child.stateNode;
                  }
                co(n, t, e);
              }
              return;
            case 5:
              return (e = n.stateNode), void (null === t && 4 & n.flags && Ir(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && wt(n))))
              );
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
          }
          throw Error(l(163));
        }
        function fi(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                'function' == typeof (r = r.style).setProperty
                  ? r.setProperty('display', 'none', 'important')
                  : (r.display = 'none');
              else {
                r = n.stateNode;
                var a = n.memoizedProps.style;
                (a = null != a && a.hasOwnProperty('display') ? a.display : null), (r.style.display = we('display', a));
              }
            } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
            else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function di(e, t) {
          if (ba && 'function' == typeof ba.onCommitFiberUnmount)
            try {
              ba.onCommitFiberUnmount(ga, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    a = r.destroy;
                  if (((r = r.tag), void 0 !== a))
                    if (0 != (4 & r)) Tu(t, n);
                    else {
                      r = t;
                      try {
                        a();
                      } catch (e) {
                        Lu(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if ((ui(t), 'function' == typeof (e = t.stateNode).componentWillUnmount))
                try {
                  (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
                } catch (e) {
                  Lu(t, e);
                }
              break;
            case 5:
              ui(t);
              break;
            case 4:
              gi(e, t);
          }
        }
        function pi(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function hi(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function mi(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (hi(t)) break e;
              t = t.return;
            }
            throw Error(l(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(l(161));
          }
          16 & n.flags && (ye(t, ''), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || hi(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? vi(e, n, t) : yi(e, n, t);
        }
        function vi(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ar));
          else if (4 !== r && null !== (e = e.child))
            for (vi(e, t, n), e = e.sibling; null !== e; ) vi(e, t, n), (e = e.sibling);
        }
        function yi(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a) (e = a ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (yi(e, t, n), e = e.sibling; null !== e; ) yi(e, t, n), (e = e.sibling);
        }
        function gi(e, t) {
          for (var n, r, a = t, o = !1; ; ) {
            if (!o) {
              o = a.return;
              e: for (;;) {
                if (null === o) throw Error(l(160));
                switch (((n = o.stateNode), o.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                o = o.return;
              }
              o = !0;
            }
            if (5 === a.tag || 6 === a.tag) {
              e: for (var i = e, u = a, c = u; ; )
                if ((di(i, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
                else {
                  if (c === u) break e;
                  for (; null === c.sibling; ) {
                    if (null === c.return || c.return === u) break e;
                    c = c.return;
                  }
                  (c.sibling.return = c.return), (c = c.sibling);
                }
              r
                ? ((i = n), (u = a.stateNode), 8 === i.nodeType ? i.parentNode.removeChild(u) : i.removeChild(u))
                : n.removeChild(a.stateNode);
            } else if (4 === a.tag) {
              if (null !== a.child) {
                (n = a.stateNode.containerInfo), (r = !0), (a.child.return = a), (a = a.child);
                continue;
              }
            } else if ((di(e, a), null !== a.child)) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return;
              4 === (a = a.return).tag && (o = !1);
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        }
        function bi(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var a = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    n[Zr] = r,
                      'input' === e && 'radio' === r.type && null != r.name && te(n, r),
                      xe(e, a),
                      t = xe(e, r),
                      a = 0;
                    a < o.length;
                    a += 2
                  ) {
                    var i = o[a],
                      u = o[a + 1];
                    'style' === i
                      ? ke(n, u)
                      : 'dangerouslySetInnerHTML' === i
                      ? ve(n, u)
                      : 'children' === i
                      ? ye(n, u)
                      : w(n, i, u, t);
                  }
                  switch (e) {
                    case 'input':
                      ne(n, r);
                      break;
                    case 'textarea':
                      ce(n, r);
                      break;
                    case 'select':
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (o = r.value)
                          ? le(n, !!r.multiple, o, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? le(n, !!r.multiple, r.defaultValue, !0)
                              : le(n, !!r.multiple, r.multiple ? [] : '', !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(l(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), wt(n.containerInfo)));
            case 12:
              return;
            case 13:
              return null !== t.memoizedState && ((Ii = Ia()), fi(t.child, !0)), void wi(t);
            case 19:
              return void wi(t);
            case 17:
              return;
            case 23:
            case 24:
              return void fi(t, null !== t.memoizedState);
          }
          throw Error(l(163));
        }
        function wi(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new ii()),
              t.forEach(function (t) {
                var r = zu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ki(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Ei = Math.ceil,
          Si = k.ReactCurrentDispatcher,
          xi = k.ReactCurrentOwner,
          Ci = 0,
          _i = null,
          Pi = null,
          Ti = 0,
          Oi = 0,
          Ni = aa(0),
          Li = 0,
          Ri = null,
          zi = 0,
          Mi = 0,
          Ai = 0,
          Fi = 0,
          Di = null,
          Ii = 0,
          Ui = 1 / 0;
        function ji() {
          Ui = Ia() + 500;
        }
        var $i,
          Vi = null,
          Bi = !1,
          Wi = null,
          Hi = null,
          Qi = !1,
          qi = null,
          Zi = 90,
          Ki = [],
          Yi = [],
          Xi = null,
          Gi = 0,
          Ji = null,
          eu = -1,
          tu = 0,
          nu = 0,
          ru = null,
          au = !1;
        function ou() {
          return 0 != (48 & Ci) ? Ia() : -1 !== eu ? eu : (eu = Ia());
        }
        function lu(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Ua() ? 1 : 2;
          if ((0 === tu && (tu = zi), 0 !== Ha.transition)) {
            0 !== nu && (nu = null !== Di ? Di.pendingLanes : 0), (e = tu);
            var t = 4186112 & ~nu;
            return 0 == (t &= -t) && 0 == (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
          }
          return (
            (e = Ua()),
            (e = It(
              0 != (4 & Ci) && 98 === e
                ? 12
                : (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
              tu,
            ))
          );
        }
        function iu(e, t, n) {
          if (50 < Gi) throw ((Gi = 0), (Ji = null), Error(l(185)));
          if (null === (e = uu(e, t))) return null;
          $t(e, t, n), e === _i && ((Ai |= t), 4 === Li && fu(e, Ti));
          var r = Ua();
          1 === t
            ? 0 != (8 & Ci) && 0 == (48 & Ci)
              ? du(e)
              : (cu(e, n), 0 === Ci && (ji(), Ba()))
            : (0 == (4 & Ci) || (98 !== r && 99 !== r) || (null === Xi ? (Xi = new Set([e])) : Xi.add(e)), cu(e, n)),
            (Di = e);
        }
        function uu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function cu(e, t) {
          for (
            var n = e.callbackNode, r = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
            0 < i;

          ) {
            var u = 31 - Vt(i),
              c = 1 << u,
              s = o[u];
            if (-1 === s) {
              if (0 == (c & r) || 0 != (c & a)) {
                (s = t), At(c);
                var f = Mt;
                o[u] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
              }
            } else s <= t && (e.expiredLanes |= c);
            i &= ~c;
          }
          if (((r = Ft(e, e === _i ? Ti : 0)), (t = Mt), 0 === r))
            null !== n && (n !== Ra && Ea(n), (e.callbackNode = null), (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Ra && Ea(n);
            }
            15 === t
              ? ((n = du.bind(null, e)), null === Ma ? ((Ma = [n]), (Aa = ka(Pa, Wa))) : Ma.push(n), (n = Ra))
              : (n =
                  14 === t
                    ? Va(99, du.bind(null, e))
                    : Va(
                        (n = (function (e) {
                          switch (e) {
                            case 15:
                            case 14:
                              return 99;
                            case 13:
                            case 12:
                            case 11:
                            case 10:
                              return 98;
                            case 9:
                            case 8:
                            case 7:
                            case 6:
                            case 4:
                            case 5:
                              return 97;
                            case 3:
                            case 2:
                            case 1:
                              return 95;
                            case 0:
                              return 90;
                            default:
                              throw Error(l(358, e));
                          }
                        })(t)),
                        su.bind(null, e),
                      )),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function su(e) {
          if (((eu = -1), (nu = tu = 0), 0 != (48 & Ci))) throw Error(l(327));
          var t = e.callbackNode;
          if (_u() && e.callbackNode !== t) return null;
          var n = Ft(e, e === _i ? Ti : 0);
          if (0 === n) return null;
          var r = n,
            a = Ci;
          Ci |= 16;
          var o = yu();
          for ((_i === e && Ti === r) || (ji(), mu(e, r)); ; )
            try {
              wu();
              break;
            } catch (t) {
              vu(e, t);
            }
          if (
            (Xa(),
            (Si.current = o),
            (Ci = a),
            null !== Pi ? (r = 0) : ((_i = null), (Ti = 0), (r = Li)),
            0 != (zi & Ai))
          )
            mu(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Ci |= 64), e.hydrate && ((e.hydrate = !1), Vr(e.containerInfo)), 0 !== (n = Dt(e)) && (r = gu(e, n))),
              1 === r)
            )
              throw ((t = Ri), mu(e, 0), fu(e, n), cu(e, Ia()), t);
            switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
              case 0:
              case 1:
                throw Error(l(345));
              case 2:
                Su(e);
                break;
              case 3:
                if ((fu(e, n), (62914560 & n) === n && 10 < (r = Ii + 500 - Ia()))) {
                  if (0 !== Ft(e, 0)) break;
                  if (((a = e.suspendedLanes) & n) !== n) {
                    ou(), (e.pingedLanes |= e.suspendedLanes & a);
                    break;
                  }
                  e.timeoutHandle = jr(Su.bind(null, e), r);
                  break;
                }
                Su(e);
                break;
              case 4:
                if ((fu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, a = -1; 0 < n; ) {
                  var i = 31 - Vt(n);
                  (o = 1 << i), (i = r[i]) > a && (a = i), (n &= ~o);
                }
                if (
                  ((n = a),
                  10 <
                    (n =
                      (120 > (n = Ia() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Ei(n / 1960)) - n))
                ) {
                  e.timeoutHandle = jr(Su.bind(null, e), n);
                  break;
                }
                Su(e);
                break;
              case 5:
                Su(e);
                break;
              default:
                throw Error(l(329));
            }
          }
          return cu(e, Ia()), e.callbackNode === t ? su.bind(null, e) : null;
        }
        function fu(e, t) {
          for (t &= ~Fi, t &= ~Ai, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Vt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function du(e) {
          if (0 != (48 & Ci)) throw Error(l(327));
          if ((_u(), e === _i && 0 != (e.expiredLanes & Ti))) {
            var t = Ti,
              n = gu(e, t);
            0 != (zi & Ai) && (n = gu(e, (t = Ft(e, t))));
          } else n = gu(e, (t = Ft(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Ci |= 64), e.hydrate && ((e.hydrate = !1), Vr(e.containerInfo)), 0 !== (t = Dt(e)) && (n = gu(e, t))),
            1 === n)
          )
            throw ((n = Ri), mu(e, 0), fu(e, t), cu(e, Ia()), n);
          return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Su(e), cu(e, Ia()), null;
        }
        function pu(e, t) {
          la(Ni, Oi), (Oi |= t), (zi |= t);
        }
        function hu() {
          (Oi = Ni.current), oa(Ni);
        }
        function mu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), $r(n)), null !== Pi))
            for (n = Pi.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && pa();
                  break;
                case 3:
                  No(), oa(ca), oa(ua), Ho();
                  break;
                case 5:
                  Ro(r);
                  break;
                case 4:
                  No();
                  break;
                case 13:
                case 19:
                  oa(zo);
                  break;
                case 10:
                  Ga(r);
                  break;
                case 23:
                case 24:
                  hu();
              }
              n = n.return;
            }
          (_i = e), (Pi = Du(e.current, null)), (Ti = Oi = zi = t), (Li = 0), (Ri = null), (Fi = Ai = Mi = 0);
        }
        function vu(e, t) {
          for (;;) {
            var n = Pi;
            try {
              if ((Xa(), (Qo.current = Pl), Go)) {
                for (var r = Ko.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                Go = !1;
              }
              if (((Zo = 0), (Xo = Yo = Ko = null), (Jo = !1), (xi.current = null), null === n || null === n.return)) {
                (Li = 1), (Ri = t), (Pi = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  i = n,
                  u = t;
                if (
                  ((t = Ti),
                  (i.flags |= 2048),
                  (i.firstEffect = i.lastEffect = null),
                  null !== u && 'object' == typeof u && 'function' == typeof u.then)
                ) {
                  var c = u;
                  if (0 == (2 & i.mode)) {
                    var s = i.alternate;
                    s
                      ? ((i.updateQueue = s.updateQueue), (i.memoizedState = s.memoizedState), (i.lanes = s.lanes))
                      : ((i.updateQueue = null), (i.memoizedState = null));
                  }
                  var f = 0 != (1 & zo.current),
                    d = l;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var h = d.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var m = d.memoizedProps;
                        p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var v = d.updateQueue;
                      if (null === v) {
                        var y = new Set();
                        y.add(c), (d.updateQueue = y);
                      } else v.add(c);
                      if (0 == (2 & d.mode)) {
                        if (((d.flags |= 64), (i.flags |= 16384), (i.flags &= -2981), 1 === i.tag))
                          if (null === i.alternate) i.tag = 17;
                          else {
                            var g = oo(-1, 1);
                            (g.tag = 2), lo(i, g);
                          }
                        i.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (i = t);
                      var b = o.pingCache;
                      if (
                        (null === b
                          ? ((b = o.pingCache = new ai()), (u = new Set()), b.set(c, u))
                          : void 0 === (u = b.get(c)) && ((u = new Set()), b.set(c, u)),
                        !u.has(i))
                      ) {
                        u.add(i);
                        var w = Ru.bind(null, o, c, i);
                        c.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (q(i.type) || 'A React component') +
                      ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
                  );
                }
                5 !== Li && (Li = 2), (u = ni(u, i)), (d = l);
                do {
                  switch (d.tag) {
                    case 3:
                      (o = u), (d.flags |= 4096), (t &= -t), (d.lanes |= t), io(d, oi(0, o, t));
                      break e;
                    case 1:
                      o = u;
                      var k = d.type,
                        E = d.stateNode;
                      if (
                        0 == (64 & d.flags) &&
                        ('function' == typeof k.getDerivedStateFromError ||
                          (null !== E && 'function' == typeof E.componentDidCatch && (null === Hi || !Hi.has(E))))
                      ) {
                        (d.flags |= 4096), (t &= -t), (d.lanes |= t), io(d, li(d, o, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Eu(n);
            } catch (e) {
              (t = e), Pi === n && null !== n && (Pi = n = n.return);
              continue;
            }
            break;
          }
        }
        function yu() {
          var e = Si.current;
          return (Si.current = Pl), null === e ? Pl : e;
        }
        function gu(e, t) {
          var n = Ci;
          Ci |= 16;
          var r = yu();
          for ((_i === e && Ti === t) || mu(e, t); ; )
            try {
              bu();
              break;
            } catch (t) {
              vu(e, t);
            }
          if ((Xa(), (Ci = n), (Si.current = r), null !== Pi)) throw Error(l(261));
          return (_i = null), (Ti = 0), Li;
        }
        function bu() {
          for (; null !== Pi; ) ku(Pi);
        }
        function wu() {
          for (; null !== Pi && !Sa(); ) ku(Pi);
        }
        function ku(e) {
          var t = $i(e.alternate, e, Oi);
          (e.memoizedProps = e.pendingProps), null === t ? Eu(e) : (Pi = t), (xi.current = null);
        }
        function Eu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = ei(n, t, Oi))) return void (Pi = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & Oi) ||
                0 == (4 & n.mode)
              ) {
                for (var r = 0, a = n.child; null !== a; ) (r |= a.lanes | a.childLanes), (a = a.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
            } else {
              if (null !== (n = ti(t))) return (n.flags &= 2047), void (Pi = n);
              null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Pi = t);
            Pi = t = e;
          } while (null !== t);
          0 === Li && (Li = 5);
        }
        function Su(e) {
          var t = Ua();
          return $a(99, xu.bind(null, e, t)), null;
        }
        function xu(e, t) {
          do {
            _u();
          } while (null !== qi);
          if (0 != (48 & Ci)) throw Error(l(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(l(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            a = r,
            o = e.pendingLanes & ~a;
          (e.pendingLanes = a),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= a),
            (e.mutableReadLanes &= a),
            (e.entangledLanes &= a),
            (a = e.entanglements);
          for (var i = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
            var c = 31 - Vt(o),
              s = 1 << c;
            (a[c] = 0), (i[c] = -1), (u[c] = -1), (o &= ~s);
          }
          if (
            (null !== Xi && 0 == (24 & r) && Xi.has(e) && Xi.delete(e),
            e === _i && ((Pi = _i = null), (Ti = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (((a = Ci), (Ci |= 32), (xi.current = null), (Fr = qt), dr((i = fr())))) {
              if ('selectionStart' in i) u = { start: i.selectionStart, end: i.selectionEnd };
              else
                e: if (
                  ((u = ((u = i.ownerDocument) && u.defaultView) || window),
                  (s = u.getSelection && u.getSelection()) && 0 !== s.rangeCount)
                ) {
                  (u = s.anchorNode), (o = s.anchorOffset), (c = s.focusNode), (s = s.focusOffset);
                  try {
                    u.nodeType, c.nodeType;
                  } catch (e) {
                    u = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    h = 0,
                    m = 0,
                    v = i,
                    y = null;
                  t: for (;;) {
                    for (
                      var g;
                      v !== u || (0 !== o && 3 !== v.nodeType) || (d = f + o),
                        v !== c || (0 !== s && 3 !== v.nodeType) || (p = f + s),
                        3 === v.nodeType && (f += v.nodeValue.length),
                        null !== (g = v.firstChild);

                    )
                      (y = v), (v = g);
                    for (;;) {
                      if (v === i) break t;
                      if (
                        (y === u && ++h === o && (d = f), y === c && ++m === s && (p = f), null !== (g = v.nextSibling))
                      )
                        break;
                      y = (v = y).parentNode;
                    }
                    v = g;
                  }
                  u = -1 === d || -1 === p ? null : { start: d, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Dr = { focusedElem: i, selectionRange: u }), (qt = !1), (ru = null), (au = !1), (Vi = r);
            do {
              try {
                Cu();
              } catch (e) {
                if (null === Vi) throw Error(l(330));
                Lu(Vi, e), (Vi = Vi.nextEffect);
              }
            } while (null !== Vi);
            (ru = null), (Vi = r);
            do {
              try {
                for (i = e; null !== Vi; ) {
                  var b = Vi.flags;
                  if ((16 & b && ye(Vi.stateNode, ''), 128 & b)) {
                    var w = Vi.alternate;
                    if (null !== w) {
                      var k = w.ref;
                      null !== k && ('function' == typeof k ? k(null) : (k.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      mi(Vi), (Vi.flags &= -3);
                      break;
                    case 6:
                      mi(Vi), (Vi.flags &= -3), bi(Vi.alternate, Vi);
                      break;
                    case 1024:
                      Vi.flags &= -1025;
                      break;
                    case 1028:
                      (Vi.flags &= -1025), bi(Vi.alternate, Vi);
                      break;
                    case 4:
                      bi(Vi.alternate, Vi);
                      break;
                    case 8:
                      gi(i, (u = Vi));
                      var E = u.alternate;
                      pi(u), null !== E && pi(E);
                  }
                  Vi = Vi.nextEffect;
                }
              } catch (e) {
                if (null === Vi) throw Error(l(330));
                Lu(Vi, e), (Vi = Vi.nextEffect);
              }
            } while (null !== Vi);
            if (
              ((k = Dr),
              (w = fr()),
              (b = k.focusedElem),
              (i = k.selectionRange),
              w !== b && b && b.ownerDocument && sr(b.ownerDocument.documentElement, b))
            ) {
              null !== i &&
                dr(b) &&
                ((w = i.start),
                void 0 === (k = i.end) && (k = w),
                'selectionStart' in b
                  ? ((b.selectionStart = w), (b.selectionEnd = Math.min(k, b.value.length)))
                  : (k = ((w = b.ownerDocument || document) && w.defaultView) || window).getSelection &&
                    ((k = k.getSelection()),
                    (u = b.textContent.length),
                    (E = Math.min(i.start, u)),
                    (i = void 0 === i.end ? E : Math.min(i.end, u)),
                    !k.extend && E > i && ((u = i), (i = E), (E = u)),
                    (u = cr(b, E)),
                    (o = cr(b, i)),
                    u &&
                      o &&
                      (1 !== k.rangeCount ||
                        k.anchorNode !== u.node ||
                        k.anchorOffset !== u.offset ||
                        k.focusNode !== o.node ||
                        k.focusOffset !== o.offset) &&
                      ((w = w.createRange()).setStart(u.node, u.offset),
                      k.removeAllRanges(),
                      E > i
                        ? (k.addRange(w), k.extend(o.node, o.offset))
                        : (w.setEnd(o.node, o.offset), k.addRange(w))))),
                (w = []);
              for (k = b; (k = k.parentNode); )
                1 === k.nodeType && w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
              for ('function' == typeof b.focus && b.focus(), b = 0; b < w.length; b++)
                ((k = w[b]).element.scrollLeft = k.left), (k.element.scrollTop = k.top);
            }
            (qt = !!Fr), (Dr = Fr = null), (e.current = n), (Vi = r);
            do {
              try {
                for (b = e; null !== Vi; ) {
                  var S = Vi.flags;
                  if ((36 & S && si(b, Vi.alternate, Vi), 128 & S)) {
                    w = void 0;
                    var x = Vi.ref;
                    if (null !== x) {
                      var C = Vi.stateNode;
                      switch (Vi.tag) {
                        case 5:
                          w = C;
                          break;
                        default:
                          w = C;
                      }
                      'function' == typeof x ? x(w) : (x.current = w);
                    }
                  }
                  Vi = Vi.nextEffect;
                }
              } catch (e) {
                if (null === Vi) throw Error(l(330));
                Lu(Vi, e), (Vi = Vi.nextEffect);
              }
            } while (null !== Vi);
            (Vi = null), za(), (Ci = a);
          } else e.current = n;
          if (Qi) (Qi = !1), (qi = e), (Zi = t);
          else
            for (Vi = r; null !== Vi; )
              (t = Vi.nextEffect),
                (Vi.nextEffect = null),
                8 & Vi.flags && (((S = Vi).sibling = null), (S.stateNode = null)),
                (Vi = t);
          if (
            (0 === (r = e.pendingLanes) && (Hi = null),
            1 === r ? (e === Ji ? Gi++ : ((Gi = 0), (Ji = e))) : (Gi = 0),
            (n = n.stateNode),
            ba && 'function' == typeof ba.onCommitFiberRoot)
          )
            try {
              ba.onCommitFiberRoot(ga, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((cu(e, Ia()), Bi)) throw ((Bi = !1), (e = Wi), (Wi = null), e);
          return 0 != (8 & Ci) || Ba(), null;
        }
        function Cu() {
          for (; null !== Vi; ) {
            var e = Vi.alternate;
            au ||
              null === ru ||
              (0 != (8 & Vi.flags) ? Ge(Vi, ru) && (au = !0) : 13 === Vi.tag && ki(e, Vi) && Ge(Vi, ru) && (au = !0));
            var t = Vi.flags;
            0 != (256 & t) && ci(e, Vi),
              0 == (512 & t) ||
                Qi ||
                ((Qi = !0),
                Va(97, function () {
                  return _u(), null;
                })),
              (Vi = Vi.nextEffect);
          }
        }
        function _u() {
          if (90 !== Zi) {
            var e = 97 < Zi ? 97 : Zi;
            return (Zi = 90), $a(e, Ou);
          }
          return !1;
        }
        function Pu(e, t) {
          Ki.push(t, e),
            Qi ||
              ((Qi = !0),
              Va(97, function () {
                return _u(), null;
              }));
        }
        function Tu(e, t) {
          Yi.push(t, e),
            Qi ||
              ((Qi = !0),
              Va(97, function () {
                return _u(), null;
              }));
        }
        function Ou() {
          if (null === qi) return !1;
          var e = qi;
          if (((qi = null), 0 != (48 & Ci))) throw Error(l(331));
          var t = Ci;
          Ci |= 32;
          var n = Yi;
          Yi = [];
          for (var r = 0; r < n.length; r += 2) {
            var a = n[r],
              o = n[r + 1],
              i = a.destroy;
            if (((a.destroy = void 0), 'function' == typeof i))
              try {
                i();
              } catch (e) {
                if (null === o) throw Error(l(330));
                Lu(o, e);
              }
          }
          for (n = Ki, Ki = [], r = 0; r < n.length; r += 2) {
            (a = n[r]), (o = n[r + 1]);
            try {
              var u = a.create;
              a.destroy = u();
            } catch (e) {
              if (null === o) throw Error(l(330));
              Lu(o, e);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Ci = t), Ba(), !0;
        }
        function Nu(e, t, n) {
          lo(e, (t = oi(0, (t = ni(n, t)), 1))), (t = ou()), null !== (e = uu(e, 1)) && ($t(e, 1, t), cu(e, t));
        }
        function Lu(e, t) {
          if (3 === e.tag) Nu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Nu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  'function' == typeof n.type.getDerivedStateFromError ||
                  ('function' == typeof r.componentDidCatch && (null === Hi || !Hi.has(r)))
                ) {
                  var a = li(n, (e = ni(t, e)), 1);
                  if ((lo(n, a), (a = ou()), null !== (n = uu(n, 1)))) $t(n, 1, a), cu(n, a);
                  else if ('function' == typeof r.componentDidCatch && (null === Hi || !Hi.has(r)))
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Ru(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ou()),
            (e.pingedLanes |= e.suspendedLanes & n),
            _i === e &&
              (Ti & n) === n &&
              (4 === Li || (3 === Li && (62914560 & Ti) === Ti && 500 > Ia() - Ii) ? mu(e, 0) : (Fi |= n)),
            cu(e, t);
        }
        function zu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 == (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Ua() ? 1 : 2)
                : (0 === tu && (tu = zi), 0 === (t = Ut(62914560 & ~tu)) && (t = 4194304))),
            (n = ou()),
            null !== (e = uu(e, t)) && ($t(e, t, n), cu(e, n));
        }
        function Mu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Au(e, t, n, r) {
          return new Mu(e, t, n, r);
        }
        function Fu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Du(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Au(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), 'function' == typeof e)) Fu(e) && (i = 1);
          else if ('string' == typeof e) i = 5;
          else
            e: switch (e) {
              case x:
                return Uu(n.children, a, o, t);
              case F:
                (i = 8), (a |= 16);
                break;
              case C:
                (i = 8), (a |= 1);
                break;
              case _:
                return ((e = Au(12, n, t, 8 | a)).elementType = _), (e.type = _), (e.lanes = o), e;
              case N:
                return ((e = Au(13, n, t, a)).type = N), (e.elementType = N), (e.lanes = o), e;
              case L:
                return ((e = Au(19, n, t, a)).elementType = L), (e.lanes = o), e;
              case D:
                return ju(n, a, o, t);
              case I:
                return ((e = Au(24, n, t, a)).elementType = I), (e.lanes = o), e;
              default:
                if ('object' == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      i = 10;
                      break e;
                    case T:
                      i = 9;
                      break e;
                    case O:
                      i = 11;
                      break e;
                    case R:
                      i = 14;
                      break e;
                    case z:
                      (i = 16), (r = null);
                      break e;
                    case M:
                      i = 22;
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ''));
            }
          return ((t = Au(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t;
        }
        function Uu(e, t, n, r) {
          return ((e = Au(7, e, r, t)).lanes = n), e;
        }
        function ju(e, t, n, r) {
          return ((e = Au(23, e, r, t)).elementType = D), (e.lanes = n), e;
        }
        function $u(e, t, n) {
          return ((e = Au(6, e, null, t)).lanes = n), e;
        }
        function Vu(e, t, n) {
          return (
            ((t = Au(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
          );
        }
        function Bu(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = jt(0)),
            (this.expirationTimes = jt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = jt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            o = ou(),
            i = lu(a);
          e: if (n) {
            t: {
              if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(l(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (da(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(l(171));
            }
            if (1 === n.tag) {
              var c = n.type;
              if (da(c)) {
                n = ma(n, c, u);
                break e;
              }
            }
            n = u;
          } else n = ia;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = oo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            lo(a, t),
            iu(a, i, o),
            i
          );
        }
        function Hu(e) {
          if (!(e = e.current).child) return null;
          switch (e.child.tag) {
            case 5:
            default:
              return e.child.stateNode;
          }
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        function Zu(e, t, n) {
          var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
          if (
            ((n = new Bu(e, t, null != n && !0 === n.hydrate)),
            (t = Au(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ro(t),
            (e[Kr] = n.current),
            Pr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var a = (t = r[e])._getVersion;
              (a = a(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, a])
                  : n.mutableSourceEagerHydrationData.push(t, a);
            }
          this._internalRoot = n;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Yu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o._internalRoot;
            if ('function' == typeof a) {
              var i = a;
              a = function () {
                var e = Hu(l);
                i.call(e);
              };
            }
            Wu(t, l, e, a);
          } else {
            if (
              ((o = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute('data-reactroot')
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new Zu(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (l = o._internalRoot),
              'function' == typeof a)
            ) {
              var u = a;
              a = function () {
                var e = Hu(l);
                u.call(e);
              };
            }
            !(function (e, t) {
              var n = Ci;
              (Ci &= -2), (Ci |= 8);
              try {
                e(t);
              } finally {
                0 === (Ci = n) && (ji(), Ba());
              }
            })(function () {
              Wu(t, l, e, a);
            });
          }
          return Hu(l);
        }
        ($i = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ca.current) Rl = !0;
            else {
              if (0 == (n & r)) {
                switch (((Rl = !1), t.tag)) {
                  case 3:
                    Vl(t), Bo();
                    break;
                  case 5:
                    Lo(t);
                    break;
                  case 1:
                    da(t.type) && va(t);
                    break;
                  case 4:
                    Oo(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var a = t.type._context;
                    la(qa, a._currentValue), (a._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? ql(e, t, n)
                        : (la(zo, 1 & zo.current), null !== (t = Gl(e, t, n)) ? t.sibling : null);
                    la(zo, 1 & zo.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return Xl(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (a = t.memoizedState) && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                      la(zo, zo.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Dl(e, t, n);
                }
                return Gl(e, t, n);
              }
              Rl = 0 != (16384 & e.flags);
            }
          else Rl = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = fa(t, ua.current)),
                eo(t, n),
                (a = nl(null, t, r, e, a, n)),
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof)
              ) {
                if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), da(r))) {
                  var o = !0;
                  va(t);
                } else o = !1;
                (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null), ro(t);
                var i = r.getDerivedStateFromProps;
                'function' == typeof i && fo(t, r, i, e),
                  (a.updater = po),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  yo(t, r, e, n),
                  (t = $l(null, t, r, !0, o, n));
              } else (t.tag = 0), zl(null, t, a, n), (t = t.child);
              return t;
            case 16:
              a = t.elementType;
              e: {
                switch (
                  (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                  (e = t.pendingProps),
                  (a = (o = a._init)(a._payload)),
                  (t.type = a),
                  (o = t.tag =
                    (function (e) {
                      if ('function' == typeof e) return Fu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = Qa(a, e)),
                  o)
                ) {
                  case 0:
                    t = Ul(null, t, a, e, n);
                    break e;
                  case 1:
                    t = jl(null, t, a, e, n);
                    break e;
                  case 11:
                    t = Ml(null, t, a, e, n);
                    break e;
                  case 14:
                    t = Al(null, t, a, Qa(a.type, e), r, n);
                    break e;
                }
                throw Error(l(306, a, ''));
              }
              return t;
            case 0:
              return (r = t.type), (a = t.pendingProps), Ul(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n);
            case 1:
              return (r = t.type), (a = t.pendingProps), jl(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n);
            case 3:
              if ((Vl(t), (r = t.updateQueue), null === e || null === r)) throw Error(l(282));
              if (
                ((r = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                ao(e, t),
                uo(t, r, null, n),
                (r = t.memoizedState.element) === a)
              )
                Bo(), (t = Gl(e, t, n));
              else {
                if (
                  ((o = (a = t.stateNode).hydrate) &&
                    ((Fo = Br(t.stateNode.containerInfo.firstChild)), (Ao = t), (o = Do = !0)),
                  o)
                ) {
                  if (null != (e = a.mutableSourceEagerHydrationData))
                    for (a = 0; a < e.length; a += 2) ((o = e[a])._workInProgressVersionPrimary = e[a + 1]), Wo.push(o);
                  for (n = So(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else zl(e, t, r, n), Bo();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Lo(t),
                null === e && jo(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                Ur(r, a) ? (i = null) : null !== o && Ur(r, o) && (t.flags |= 16),
                Il(e, t),
                zl(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && jo(t), null;
            case 13:
              return ql(e, t, n);
            case 4:
              return (
                Oo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Eo(t, null, r, n)) : zl(e, t, r, n),
                t.child
              );
            case 11:
              return (r = t.type), (a = t.pendingProps), Ml(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n);
            case 7:
              return zl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return zl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context), (a = t.pendingProps), (i = t.memoizedProps), (o = a.value);
                var u = t.type._context;
                if ((la(qa, u._currentValue), (u._currentValue = o), null !== i))
                  if (
                    ((u = i.value),
                    0 ==
                      (o = or(u, o)
                        ? 0
                        : 0 |
                          ('function' == typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823)))
                  ) {
                    if (i.children === a.children && !ca.current) {
                      t = Gl(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                      var c = u.dependencies;
                      if (null !== c) {
                        i = u.child;
                        for (var s = c.firstContext; null !== s; ) {
                          if (s.context === r && 0 != (s.observedBits & o)) {
                            1 === u.tag && (((s = oo(-1, n & -n)).tag = 2), lo(u, s)),
                              (u.lanes |= n),
                              null !== (s = u.alternate) && (s.lanes |= n),
                              Ja(u.return, n),
                              (c.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else i = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== i) i.return = u;
                      else
                        for (i = u; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (u = i.sibling)) {
                            (u.return = i.return), (i = u);
                            break;
                          }
                          i = i.return;
                        }
                      u = i;
                    }
                zl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = (o = t.pendingProps).children),
                eo(t, n),
                (r = r((a = to(a, o.unstable_observedBits)))),
                (t.flags |= 1),
                zl(e, t, r, n),
                t.child
              );
            case 14:
              return (o = Qa((a = t.type), t.pendingProps)), Al(e, t, a, (o = Qa(a.type, o)), r, n);
            case 15:
              return Fl(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Qa(r, a)),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                da(r) ? ((e = !0), va(t)) : (e = !1),
                eo(t, n),
                mo(t, r, a),
                yo(t, r, a, n),
                $l(null, t, r, !0, e, n)
              );
            case 19:
              return Xl(e, t, n);
            case 23:
            case 24:
              return Dl(e, t, n);
          }
          throw Error(l(156, t.tag));
        }),
          (Zu.prototype.render = function (e) {
            Wu(e, this._internalRoot, null, null);
          }),
          (Zu.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Wu(null, e, null, function () {
              t[Kr] = null;
            });
          }),
          (Je = function (e) {
            13 === e.tag && (iu(e, 4, ou()), qu(e, 4));
          }),
          (et = function (e) {
            13 === e.tag && (iu(e, 67108864, ou()), qu(e, 67108864));
          }),
          (tt = function (e) {
            if (13 === e.tag) {
              var t = ou(),
                n = lu(e);
              iu(e, n, t), qu(e, n);
            }
          }),
          (nt = function (e, t) {
            return t();
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((ne(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ea(r);
                      if (!a) throw Error(l(90));
                      X(r), ne(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                ce(e, n);
                break;
              case 'select':
                null != (t = n.value) && le(e, !!n.multiple, t, !1);
            }
          }),
          (Re = function (e, t) {
            var n = Ci;
            Ci |= 1;
            try {
              return e(t);
            } finally {
              0 === (Ci = n) && (ji(), Ba());
            }
          }),
          (ze = function (e, t, n, r, a) {
            var o = Ci;
            Ci |= 4;
            try {
              return $a(98, e.bind(null, t, n, r, a));
            } finally {
              0 === (Ci = o) && (ji(), Ba());
            }
          }),
          (Me = function () {
            0 == (49 & Ci) &&
              ((function () {
                if (null !== Xi) {
                  var e = Xi;
                  (Xi = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), cu(e, Ia());
                    });
                }
                Ba();
              })(),
              _u());
          }),
          (Ae = function (e, t) {
            var n = Ci;
            Ci |= 2;
            try {
              return e(t);
            } finally {
              0 === (Ci = n) && (ji(), Ba());
            }
          });
        var Xu = { findFiberByHostInstance: Xr, bundleType: 0, version: '17.0.2', rendererPackageName: 'react-dom' },
          Gu = {
            bundleType: Xu.bundleType,
            version: Xu.version,
            rendererPackageName: Xu.rendererPackageName,
            rendererConfig: Xu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null ===
                (e = (function (e) {
                  if (
                    !(e = (function (e) {
                      var t = e.alternate;
                      if (!t) {
                        if (null === (t = Ke(e))) throw Error(l(188));
                        return t !== e ? null : e;
                      }
                      for (var n = e, r = t; ; ) {
                        var a = n.return;
                        if (null === a) break;
                        var o = a.alternate;
                        if (null === o) {
                          if (null !== (r = a.return)) {
                            n = r;
                            continue;
                          }
                          break;
                        }
                        if (a.child === o.child) {
                          for (o = a.child; o; ) {
                            if (o === n) return Xe(a), e;
                            if (o === r) return Xe(a), t;
                            o = o.sibling;
                          }
                          throw Error(l(188));
                        }
                        if (n.return !== r.return) (n = a), (r = o);
                        else {
                          for (var i = !1, u = a.child; u; ) {
                            if (u === n) {
                              (i = !0), (n = a), (r = o);
                              break;
                            }
                            if (u === r) {
                              (i = !0), (r = a), (n = o);
                              break;
                            }
                            u = u.sibling;
                          }
                          if (!i) {
                            for (u = o.child; u; ) {
                              if (u === n) {
                                (i = !0), (n = o), (r = a);
                                break;
                              }
                              if (u === r) {
                                (i = !0), (r = o), (n = a);
                                break;
                              }
                              u = u.sibling;
                            }
                            if (!i) throw Error(l(189));
                          }
                        }
                        if (n.alternate !== r) throw Error(l(190));
                      }
                      if (3 !== n.tag) throw Error(l(188));
                      return n.stateNode.current === n ? e : t;
                    })(e))
                  )
                    return null;
                  for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) (t.child.return = t), (t = t.child);
                    else {
                      if (t === e) break;
                      for (; !t.sibling; ) {
                        if (!t.return || t.return === e) return null;
                        t = t.return;
                      }
                      (t.sibling.return = t.return), (t = t.sibling);
                    }
                  }
                  return null;
                })(e))
                ? null
                : e.stateNode;
            },
            findFiberByHostInstance:
              Xu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Ju.isDisabled && Ju.supportsFiber)
            try {
              (ga = Ju.inject(Gu)), (ba = Ju);
            } catch (me) {}
        }
        t.render = function (e, t, n) {
          if (!Ku(t)) throw Error(l(200));
          return Yu(null, e, t, !1, n);
        };
      },
      3935: (e, t, n) => {
        'use strict';
        !(function e() {
          if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(4448));
      },
      9921: (e, t) => {
        'use strict';
        var n = 'function' == typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          a = n ? Symbol.for('react.portal') : 60106,
          o = n ? Symbol.for('react.fragment') : 60107,
          l = n ? Symbol.for('react.strict_mode') : 60108,
          i = n ? Symbol.for('react.profiler') : 60114,
          u = n ? Symbol.for('react.provider') : 60109,
          c = n ? Symbol.for('react.context') : 60110,
          s = n ? Symbol.for('react.async_mode') : 60111,
          f = n ? Symbol.for('react.concurrent_mode') : 60111,
          d = n ? Symbol.for('react.forward_ref') : 60112,
          p = n ? Symbol.for('react.suspense') : 60113,
          h = n ? Symbol.for('react.suspense_list') : 60120,
          m = n ? Symbol.for('react.memo') : 60115,
          v = n ? Symbol.for('react.lazy') : 60116,
          y = n ? Symbol.for('react.block') : 60121,
          g = n ? Symbol.for('react.fundamental') : 60117,
          b = n ? Symbol.for('react.responder') : 60118,
          w = n ? Symbol.for('react.scope') : 60119;
        function k(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case s:
                  case f:
                  case o:
                  case i:
                  case l:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case d:
                      case v:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function E(e) {
          return k(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = c),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = o),
          (t.Lazy = v),
          (t.Memo = m),
          (t.Portal = a),
          (t.Profiler = i),
          (t.StrictMode = l),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return E(e) || k(e) === s;
          }),
          (t.isConcurrentMode = E),
          (t.isContextConsumer = function (e) {
            return k(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return k(e) === u;
          }),
          (t.isElement = function (e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return k(e) === d;
          }),
          (t.isFragment = function (e) {
            return k(e) === o;
          }),
          (t.isLazy = function (e) {
            return k(e) === v;
          }),
          (t.isMemo = function (e) {
            return k(e) === m;
          }),
          (t.isPortal = function (e) {
            return k(e) === a;
          }),
          (t.isProfiler = function (e) {
            return k(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return k(e) === l;
          }),
          (t.isSuspense = function (e) {
            return k(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === o ||
              e === f ||
              e === i ||
              e === l ||
              e === p ||
              e === h ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === m ||
                  e.$$typeof === u ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === g ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = k);
      },
      9864: (e, t, n) => {
        'use strict';
        e.exports = n(9921);
      },
      3727: (e, t, n) => {
        'use strict';
        n.d(t, { VK: () => s, rU: () => v, OL: () => b });
        var r = n(5977),
          a = n(3552),
          o = n(7294),
          l = n(71),
          i = (n(5697), n(2122)),
          u = n(9756),
          c = n(2177),
          s = (function (e) {
            function t() {
              for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
              return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, l.lX)(t.props)), t;
            }
            return (
              (0, a.Z)(t, e),
              (t.prototype.render = function () {
                return o.createElement(r.F0, { history: this.history, children: this.props.children });
              }),
              t
            );
          })(o.Component);
        o.Component;
        var f = function (e, t) {
            return 'function' == typeof e ? e(t) : e;
          },
          d = function (e, t) {
            return 'string' == typeof e ? (0, l.ob)(e, null, null, t) : e;
          },
          p = function (e) {
            return e;
          },
          h = o.forwardRef;
        void 0 === h && (h = p);
        var m = h(function (e, t) {
            var n = e.innerRef,
              r = e.navigate,
              a = e.onClick,
              l = (0, u.Z)(e, ['innerRef', 'navigate', 'onClick']),
              c = l.target,
              s = (0, i.Z)({}, l, {
                onClick: function (e) {
                  try {
                    a && a(e);
                  } catch (t) {
                    throw (e.preventDefault(), t);
                  }
                  e.defaultPrevented ||
                    0 !== e.button ||
                    (c && '_self' !== c) ||
                    (function (e) {
                      return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                    })(e) ||
                    (e.preventDefault(), r());
                },
              });
            return (s.ref = (p !== h && t) || n), o.createElement('a', s);
          }),
          v = h(function (e, t) {
            var n = e.component,
              a = void 0 === n ? m : n,
              l = e.replace,
              s = e.to,
              v = e.innerRef,
              y = (0, u.Z)(e, ['component', 'replace', 'to', 'innerRef']);
            return o.createElement(r.s6.Consumer, null, function (e) {
              e || (0, c.Z)(!1);
              var n = e.history,
                r = d(f(s, e.location), e.location),
                u = r ? n.createHref(r) : '',
                m = (0, i.Z)({}, y, {
                  href: u,
                  navigate: function () {
                    var t = f(s, e.location);
                    (l ? n.replace : n.push)(t);
                  },
                });
              return p !== h ? (m.ref = t || v) : (m.innerRef = v), o.createElement(a, m);
            });
          }),
          y = function (e) {
            return e;
          },
          g = o.forwardRef;
        void 0 === g && (g = y);
        var b = g(function (e, t) {
          var n = e['aria-current'],
            a = void 0 === n ? 'page' : n,
            l = e.activeClassName,
            s = void 0 === l ? 'active' : l,
            p = e.activeStyle,
            h = e.className,
            m = e.exact,
            b = e.isActive,
            w = e.location,
            k = e.sensitive,
            E = e.strict,
            S = e.style,
            x = e.to,
            C = e.innerRef,
            _ = (0, u.Z)(e, [
              'aria-current',
              'activeClassName',
              'activeStyle',
              'className',
              'exact',
              'isActive',
              'location',
              'sensitive',
              'strict',
              'style',
              'to',
              'innerRef',
            ]);
          return o.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = w || e.location,
              l = d(f(x, n), n),
              u = l.pathname,
              P = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
              T = P ? (0, r.LX)(n.pathname, { path: P, exact: m, sensitive: k, strict: E }) : null,
              O = !!(b ? b(T, n) : T),
              N = O
                ? (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t
                      .filter(function (e) {
                        return e;
                      })
                      .join(' ');
                  })(h, s)
                : h,
              L = O ? (0, i.Z)({}, S, {}, p) : S,
              R = (0, i.Z)({ 'aria-current': (O && a) || null, className: N, style: L, to: l }, _);
            return y !== g ? (R.ref = t || C) : (R.innerRef = C), o.createElement(v, R);
          });
        });
      },
      5977: (e, t, n) => {
        'use strict';
        n.d(t, {
          l_: () => S,
          AW: () => P,
          F0: () => g,
          rs: () => T,
          s6: () => y,
          LX: () => _,
          TH: () => N,
          UO: () => L,
        });
        var r = n(3552),
          a = n(7294),
          o = n(5697),
          l = n.n(o),
          i = n(71),
          u = 1073741823,
          c =
            'undefined' != typeof globalThis
              ? globalThis
              : 'undefined' != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : {};
        function s(e) {
          var t = [];
          return {
            on: function (e) {
              t.push(e);
            },
            off: function (e) {
              t = t.filter(function (t) {
                return t !== e;
              });
            },
            get: function () {
              return e;
            },
            set: function (n, r) {
              (e = n),
                t.forEach(function (t) {
                  return t(e, r);
                });
            },
          };
        }
        const f =
          a.createContext ||
          function (e, t) {
            var n,
              o,
              i,
              f = '__create-react-context-' + ((c[(i = '__global_unique_id__')] = (c[i] || 0) + 1) + '__'),
              d = (function (e) {
                function n() {
                  var t;
                  return ((t = e.apply(this, arguments) || this).emitter = s(t.props.value)), t;
                }
                (0, r.Z)(n, e);
                var a = n.prototype;
                return (
                  (a.getChildContext = function () {
                    var e;
                    return ((e = {})[f] = this.emitter), e;
                  }),
                  (a.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        a = e.value;
                      ((o = r) === (l = a) ? 0 !== o || 1 / o == 1 / l : o != o && l != l)
                        ? (n = 0)
                        : ((n = 'function' == typeof t ? t(r, a) : u), 0 != (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var o, l;
                  }),
                  (a.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(a.Component);
            d.childContextTypes = (((n = {})[f] = l().object.isRequired), n);
            var p = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.apply(this, arguments) || this).state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    0 != ((0 | e.observedBits) & n) && e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, r.Z)(n, t);
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? u : t;
                }),
                (a.componentDidMount = function () {
                  this.context[f] && this.context[f].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? u : e;
                }),
                (a.componentWillUnmount = function () {
                  this.context[f] && this.context[f].off(this.onUpdate);
                }),
                (a.getValue = function () {
                  return this.context[f] ? this.context[f].get() : e;
                }),
                (a.render = function () {
                  return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(a.Component);
            return (p.contextTypes = (((o = {})[f] = l().object), o)), { Provider: d, Consumer: p };
          };
        var d = n(2177),
          p = n(2122),
          h = n(4779),
          m = n.n(h),
          v =
            (n(9864),
            n(9756),
            n(8679),
            (function (e) {
              var t = f();
              return (t.displayName = 'Router-History'), t;
            })()),
          y = (function (e) {
            var t = f();
            return (t.displayName = 'Router'), t;
          })(),
          g = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = { location: t.history.location }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                t.staticContext ||
                  (n.unlisten = t.history.listen(function (e) {
                    n._isMounted ? n.setState({ location: e }) : (n._pendingLocation = e);
                  })),
                n
              );
            }
            (0, r.Z)(t, e),
              (t.computeRootMatch = function (e) {
                return { path: '/', url: '/', params: {}, isExact: '/' === e };
              });
            var n = t.prototype;
            return (
              (n.componentDidMount = function () {
                (this._isMounted = !0), this._pendingLocation && this.setState({ location: this._pendingLocation });
              }),
              (n.componentWillUnmount = function () {
                this.unlisten && this.unlisten();
              }),
              (n.render = function () {
                return a.createElement(
                  y.Provider,
                  {
                    value: {
                      history: this.props.history,
                      location: this.state.location,
                      match: t.computeRootMatch(this.state.location.pathname),
                      staticContext: this.props.staticContext,
                    },
                  },
                  a.createElement(v.Provider, { children: this.props.children || null, value: this.props.history }),
                );
              }),
              t
            );
          })(a.Component);
        a.Component;
        var b = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            (0, r.Z)(t, e);
            var n = t.prototype;
            return (
              (n.componentDidMount = function () {
                this.props.onMount && this.props.onMount.call(this, this);
              }),
              (n.componentDidUpdate = function (e) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, e);
              }),
              (n.componentWillUnmount = function () {
                this.props.onUnmount && this.props.onUnmount.call(this, this);
              }),
              (n.render = function () {
                return null;
              }),
              t
            );
          })(a.Component),
          w = {},
          k = 0;
        function E(e, t) {
          return (
            void 0 === e && (e = '/'),
            void 0 === t && (t = {}),
            '/' === e
              ? e
              : (function (e) {
                  if (w[e]) return w[e];
                  var t = m().compile(e);
                  return k < 1e4 && ((w[e] = t), k++), t;
                })(e)(t, { pretty: !0 })
          );
        }
        function S(e) {
          var t = e.computedMatch,
            n = e.to,
            r = e.push,
            o = void 0 !== r && r;
          return a.createElement(y.Consumer, null, function (e) {
            e || (0, d.Z)(!1);
            var r = e.history,
              l = e.staticContext,
              u = o ? r.push : r.replace,
              c = (0, i.ob)(
                t
                  ? 'string' == typeof n
                    ? E(n, t.params)
                    : (0, p.Z)({}, n, { pathname: E(n.pathname, t.params) })
                  : n,
              );
            return l
              ? (u(c), null)
              : a.createElement(b, {
                  onMount: function () {
                    u(c);
                  },
                  onUpdate: function (e, t) {
                    var n = (0, i.ob)(t.to);
                    (0, i.Hp)(n, (0, p.Z)({}, c, { key: n.key })) || u(c);
                  },
                  to: n,
                });
          });
        }
        var x = {},
          C = 0;
        function _(e, t) {
          void 0 === t && (t = {}), ('string' == typeof t || Array.isArray(t)) && (t = { path: t });
          var n = t,
            r = n.path,
            a = n.exact,
            o = void 0 !== a && a,
            l = n.strict,
            i = void 0 !== l && l,
            u = n.sensitive,
            c = void 0 !== u && u;
          return [].concat(r).reduce(function (t, n) {
            if (!n && '' !== n) return null;
            if (t) return t;
            var r = (function (e, t) {
                var n = '' + t.end + t.strict + t.sensitive,
                  r = x[n] || (x[n] = {});
                if (r[e]) return r[e];
                var a = [],
                  o = { regexp: m()(e, a, t), keys: a };
                return C < 1e4 && ((r[e] = o), C++), o;
              })(n, { end: o, strict: i, sensitive: c }),
              a = r.regexp,
              l = r.keys,
              u = a.exec(e);
            if (!u) return null;
            var s = u[0],
              f = u.slice(1),
              d = e === s;
            return o && !d
              ? null
              : {
                  path: n,
                  url: '/' === n && '' === s ? '/' : s,
                  isExact: d,
                  params: l.reduce(function (e, t, n) {
                    return (e[t.name] = f[n]), e;
                  }, {}),
                };
          }, null);
        }
        var P = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, r.Z)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return a.createElement(y.Consumer, null, function (t) {
                t || (0, d.Z)(!1);
                var n = e.props.location || t.location,
                  r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? _(n.pathname, e.props) : t.match,
                  o = (0, p.Z)({}, t, { location: n, match: r }),
                  l = e.props,
                  i = l.children,
                  u = l.component,
                  c = l.render;
                return (
                  Array.isArray(i) && 0 === i.length && (i = null),
                  a.createElement(
                    y.Provider,
                    { value: o },
                    o.match
                      ? i
                        ? 'function' == typeof i
                          ? i(o)
                          : i
                        : u
                        ? a.createElement(u, o)
                        : c
                        ? c(o)
                        : null
                      : 'function' == typeof i
                      ? i(o)
                      : null,
                  )
                );
              });
            }),
            t
          );
        })(a.Component);
        a.Component;
        var T = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              (0, r.Z)(t, e),
              (t.prototype.render = function () {
                var e = this;
                return a.createElement(y.Consumer, null, function (t) {
                  t || (0, d.Z)(!1);
                  var n,
                    r,
                    o = e.props.location || t.location;
                  return (
                    a.Children.forEach(e.props.children, function (e) {
                      if (null == r && a.isValidElement(e)) {
                        n = e;
                        var l = e.props.path || e.props.from;
                        r = l ? _(o.pathname, (0, p.Z)({}, e.props, { path: l })) : t.match;
                      }
                    }),
                    r ? a.cloneElement(n, { location: o, computedMatch: r }) : null
                  );
                });
              }),
              t
            );
          })(a.Component),
          O = a.useContext;
        function N() {
          return O(y).location;
        }
        function L() {
          var e = O(y).match;
          return e ? e.params : {};
        }
      },
      2408: (e, t, n) => {
        'use strict';
        var r = n(7418),
          a = 60103,
          o = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var l = 60109,
          i = 60110,
          u = 60112;
        t.Suspense = 60113;
        var c = 60115,
          s = 60116;
        if ('function' == typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (a = f('react.element')),
            (o = f('react.portal')),
            (t.Fragment = f('react.fragment')),
            (t.StrictMode = f('react.strict_mode')),
            (t.Profiler = f('react.profiler')),
            (l = f('react.provider')),
            (i = f('react.context')),
            (u = f('react.forward_ref')),
            (t.Suspense = f('react.suspense')),
            (c = f('react.memo')),
            (s = f('react.lazy'));
        }
        var d = 'function' == typeof Symbol && Symbol.iterator;
        function p(e) {
          for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = {};
        function v(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
        }
        function y() {}
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' != typeof e && 'function' != typeof e && null != e) throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = v.prototype);
        var b = (g.prototype = new y());
        (b.constructor = g), r(b, v.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          k = Object.prototype.hasOwnProperty,
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, n) {
          var r,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = '' + t.key), t))
              k.call(t, r) && !E.hasOwnProperty(r) && (o[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) o.children = n;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c;
          }
          if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
          return { $$typeof: a, type: e, key: l, ref: i, props: o, _owner: w.current };
        }
        function x(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === a;
        }
        var C = /\/+/g;
        function _(e, t) {
          return 'object' == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function P(e, t, n, r, l) {
          var i = typeof e;
          ('undefined' !== i && 'boolean' !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case 'string':
              case 'number':
                u = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case a:
                  case o:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = '' === r ? '.' + _(u, 0) : r),
              Array.isArray(l)
                ? ((n = ''),
                  null != e && (n = e.replace(C, '$&/') + '/'),
                  P(l, t, n, '', function (e) {
                    return e;
                  }))
                : null != l &&
                  (x(l) &&
                    (l = (function (e, t) {
                      return { $$typeof: a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                    })(l, n + (!l.key || (u && u.key === l.key) ? '' : ('' + l.key).replace(C, '$&/') + '/') + e)),
                  t.push(l)),
              1
            );
          if (((u = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
            for (var c = 0; c < e.length; c++) {
              var s = r + _((i = e[c]), c);
              u += P(i, t, n, s, l);
            }
          else if (
            'function' ==
            typeof (s = (function (e) {
              return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (d && e[d]) || e['@@iterator'])
                ? e
                : null;
            })(e))
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; ) u += P((i = i.value), t, n, (s = r + _(i, c++)), l);
          else if ('object' === i)
            throw (
              ((t = '' + e),
              Error(p(31, '[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
            );
          return u;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                },
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var N = { current: null };
        function L() {
          var e = N.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var R = {
          ReactCurrentDispatcher: N,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!x(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = v),
          (t.PureComponent = g),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(p(267, e));
            var o = r({}, e.props),
              l = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = w.current)),
                void 0 !== t.key && (l = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                k.call(t, s) && !E.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = n;
            else if (1 < s) {
              c = Array(s);
              for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
              o.children = c;
            }
            return { $$typeof: a, type: e.type, key: l, ref: i, props: o, _owner: u };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: i,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = x),
          (t.lazy = function (e) {
            return { $$typeof: s, _payload: { _status: -1, _result: e }, _init: O };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return L().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return L().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return L().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L().useRef(e);
          }),
          (t.useState = function (e) {
            return L().useState(e);
          }),
          (t.version = '17.0.2');
      },
      7294: (e, t, n) => {
        'use strict';
        e.exports = n(2408);
      },
      53: (e, t) => {
        'use strict';
        var n, r, a, o;
        if ('object' == typeof performance && 'function' == typeof performance.now) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
          var c = null,
            s = null,
            f = function () {
              if (null !== c)
                try {
                  var e = t.unstable_now();
                  c(!0, e), (c = null);
                } catch (e) {
                  throw (setTimeout(f, 0), e);
                }
            };
          (n = function (e) {
            null !== c ? setTimeout(n, 0, e) : ((c = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              s = setTimeout(e, t);
            }),
            (a = function () {
              clearTimeout(s);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (o = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ('undefined' != typeof console) {
            var h = window.cancelAnimationFrame;
            'function' != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
              ),
              'function' != typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
                );
          }
          var m = !1,
            v = null,
            y = -1,
            g = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (o = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (g = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            k = w.port2;
          (w.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              b = e + g;
              try {
                v(!0, e) ? k.postMessage(null) : ((m = !1), (v = null));
              } catch (e) {
                throw (k.postMessage(null), e);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (v = e), m || ((m = !0), k.postMessage(null));
            }),
            (r = function (e, n) {
              y = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (a = function () {
              p(y), (y = -1);
            });
        }
        function E(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(void 0 !== a && 0 < C(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function S(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function x(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, a = e.length; r < a; ) {
                var o = 2 * (r + 1) - 1,
                  l = e[o],
                  i = o + 1,
                  u = e[i];
                if (void 0 !== l && 0 > C(l, n))
                  void 0 !== u && 0 > C(u, l) ? ((e[r] = u), (e[i] = n), (r = i)) : ((e[r] = l), (e[o] = n), (r = o));
                else {
                  if (!(void 0 !== u && 0 > C(u, n))) break e;
                  (e[r] = u), (e[i] = n), (r = i);
                }
              }
            }
            return t;
          }
          return null;
        }
        function C(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var _ = [],
          P = [],
          T = 1,
          O = null,
          N = 3,
          L = !1,
          R = !1,
          z = !1;
        function M(e) {
          for (var t = S(P); null !== t; ) {
            if (null === t.callback) x(P);
            else {
              if (!(t.startTime <= e)) break;
              x(P), (t.sortIndex = t.expirationTime), E(_, t);
            }
            t = S(P);
          }
        }
        function A(e) {
          if (((z = !1), M(e), !R))
            if (null !== S(_)) (R = !0), n(F);
            else {
              var t = S(P);
              null !== t && r(A, t.startTime - e);
            }
        }
        function F(e, n) {
          (R = !1), z && ((z = !1), a()), (L = !0);
          var o = N;
          try {
            for (M(n), O = S(_); null !== O && (!(O.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
              var l = O.callback;
              if ('function' == typeof l) {
                (O.callback = null), (N = O.priorityLevel);
                var i = l(O.expirationTime <= n);
                (n = t.unstable_now()), 'function' == typeof i ? (O.callback = i) : O === S(_) && x(_), M(n);
              } else x(_);
              O = S(_);
            }
            if (null !== O) var u = !0;
            else {
              var c = S(P);
              null !== c && r(A, c.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (O = null), (N = o), (L = !1);
          }
        }
        var D = o;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            R || L || ((R = !0), n(F));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return S(_);
          }),
          (t.unstable_next = function (e) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = N;
            }
            var n = N;
            N = t;
            try {
              return e();
            } finally {
              N = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = D),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = N;
            N = e;
            try {
              return t();
            } finally {
              N = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, l) {
            var i = t.unstable_now();
            switch (
              ((l = 'object' == typeof l && null !== l && 'number' == typeof (l = l.delay) && 0 < l ? i + l : i), e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: T++,
                callback: o,
                priorityLevel: e,
                startTime: l,
                expirationTime: (u = l + u),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l), E(P, e), null === S(_) && e === S(P) && (z ? a() : (z = !0), r(A, l - i)))
                : ((e.sortIndex = u), E(_, e), R || L || ((R = !0), n(F))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = N;
            return function () {
              var n = N;
              N = t;
              try {
                return e.apply(this, arguments);
              } finally {
                N = n;
              }
            };
          });
      },
      3840: (e, t, n) => {
        'use strict';
        e.exports = n(53);
      },
      2177: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => r });
        const r = function (e, t) {
          if (!e) throw new Error('Invariant failed');
        };
      },
    },
    r = {};
  function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = { exports: {} });
    return n[e].call(o.exports, o, o.exports, a), o.exports;
  }
  (a.m = n),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) => Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) => e + '.js'),
    (a.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = 'sleact-ts-front:'),
    (a.l = (n, r, o, l) => {
      if (e[n]) e[n].push(r);
      else {
        var i, u;
        if (void 0 !== o)
          for (var c = document.getElementsByTagName('script'), s = 0; s < c.length; s++) {
            var f = c[s];
            if (f.getAttribute('src') == n || f.getAttribute('data-webpack') == t + o) {
              i = f;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement('script')).charset = 'utf-8'),
          (i.timeout = 120),
          a.nc && i.setAttribute('nonce', a.nc),
          i.setAttribute('data-webpack', t + o),
          (i.src = n)),
          (e[n] = [r]);
        var d = (t, r) => {
            (i.onerror = i.onload = null), clearTimeout(p);
            var a = e[n];
            if ((delete e[n], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e) => e(r)), t)) return t(r);
          },
          p = setTimeout(d.bind(null, void 0, { type: 'timeout', target: i }), 12e4);
        (i.onerror = d.bind(null, i.onerror)), (i.onload = d.bind(null, i.onload)), u && document.head.appendChild(i);
      }
    }),
    (a.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.p = '/dist/'),
    (() => {
      var e = { 143: 0 };
      a.f.j = (t, n) => {
        var r = a.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise((n, a) => (r = e[t] = [n, a]));
            n.push((r[2] = o));
            var l = a.p + a.u(t),
              i = new Error();
            a.l(
              l,
              (n) => {
                if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ('load' === n.type ? 'missing' : n.type),
                    l = n && n.target && n.target.src;
                  (i.message = 'Loading chunk ' + t + ' failed.\n(' + o + ': ' + l + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = o),
                    (i.request = l),
                    r[1](i);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      };
      var t = (t, n) => {
          var r,
            o,
            [l, i, u] = n,
            c = 0;
          for (r in i) a.o(i, r) && (a.m[r] = i[r]);
          for (u && u(a), t && t(n); c < l.length; c++) (o = l[c]), a.o(e, o) && e[o] && e[o][0](), (e[l[c]] = 0);
        },
        n = (self.webpackChunksleact_ts_front = self.webpackChunksleact_ts_front || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      'use strict';
      var e = a(7294),
        t = a(3935),
        n = a(2168),
        r = a(5977);
      const o = (0, n.ZP)(() => Promise.all([a.e(515), a.e(947), a.e(817)]).then(a.bind(a, 6817))),
        l = (0, n.ZP)(() => Promise.all([a.e(515), a.e(947), a.e(319)]).then(a.bind(a, 6319))),
        i = (0, n.ZP)(() => Promise.all([a.e(515), a.e(875), a.e(947), a.e(321)]).then(a.bind(a, 8321))),
        u = () =>
          e.createElement(
            r.rs,
            null,
            e.createElement(r.l_, { exact: !0, path: '/', to: '/login' }),
            e.createElement(r.AW, { path: '/login', component: o }),
            e.createElement(r.AW, { path: '/signup', component: l }),
            e.createElement(r.AW, { path: '/workspace/:workspace', component: i }),
          );
      var c = a(3727);
      (0, t.render)(e.createElement(c.VK, null, e.createElement(u, null)), document.querySelector('#app'));
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvQGxvYWRhYmxlL2NvbXBvbmVudC9kaXN0L2xvYWRhYmxlLmVzbS5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2VzbS9yZXNvbHZlLXBhdGhuYW1lLmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9lc20vdmFsdWUtZXF1YWwuanMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvZXNtL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9taW5pLWNyZWF0ZS1yZWFjdC1jb250ZXh0L2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXNtL3JlYWN0LXJvdXRlci5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ub2RlX21vZHVsZXMvdGlueS1pbnZhcmlhbnQvZGlzdC90aW55LWludmFyaWFudC5lc20uanMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9sYXlvdXRzL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY2xpZW50LnRzeCJdLCJuYW1lcyI6WyJpblByb2dyZXNzIiwiZGF0YVdlYnBhY2tQcmVmaXgiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInRoaXMiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwia2V5cyIsImluZGV4T2YiLCJDb250ZXh0IiwiTE9BREFCTEVfU0hBUkVEIiwiU1RBVFVTX1BFTkRJTkciLCJTVEFUVVNfUkVKRUNURUQiLCJpZGVudGl0eSIsInYiLCJjcmVhdGVMb2FkYWJsZSIsIl9yZWYiLCJfcmVmJGRlZmF1bHRSZXNvbHZlQ28iLCJkZWZhdWx0UmVzb2x2ZUNvbXBvbmVudCIsIl9yZW5kZXIiLCJyZW5kZXIiLCJvbkxvYWQiLCJsb2FkYWJsZSIsImxvYWRhYmxlQ29uc3RydWN0b3IiLCJvcHRpb25zIiwiY3RvciIsInJlcXVpcmVBc3luYyIsInJlc29sdmUiLCJjaHVua05hbWUiLCJyZXNvbHZlQ29uc3RydWN0b3IiLCJjYWNoZSIsIl9nZXRDYWNoZUtleSIsInByb3BzIiwiY2FjaGVLZXkiLCJtb2R1bGUiLCJMb2FkYWJsZSIsIkNvbXBvbmVudCIsInJlc29sdmVDb21wb25lbnQiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJFcnJvciIsInByZWxvYWQiLCJMb2FkYWJsZVdpdGhDaHVua0V4dHJhY3RvciIsIklubmVyTG9hZGFibGUiLCJfUmVhY3QkQ29tcG9uZW50IiwiX3RoaXMiLCJzdGF0ZSIsInJlc3VsdCIsImVycm9yIiwibG9hZGluZyIsImNvbmRpdGlvbiIsIm1lc3NhZ2UiLCJmcmFtZXNUb1BvcCIsIm5hbWUiLCJpbnZhcmlhbnQiLCJfX2NodW5rRXh0cmFjdG9yIiwicmVxdWlyZVN5bmMiLCJzc3IiLCJsb2FkU3luYyIsImFkZENodW5rIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImlzUmVhZHkiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJfcHJvdG8iLCJjb21wb25lbnREaWRNb3VudCIsIm1vdW50ZWQiLCJjYWNoZWRQcm9taXNlIiwiZ2V0Q2FjaGUiLCJzdGF0dXMiLCJzZXRDYWNoZSIsImxvYWRBc3luYyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic2FmZVNldFN0YXRlIiwibmV4dFN0YXRlIiwiY2FsbGJhY2siLCJzZXRTdGF0ZSIsImdldENhY2hlS2V5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyT25Mb2FkIiwiX3RoaXMyIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJmaWxlTmFtZSIsIl90aGlzMyIsInByb21pc2UiLCJyZXNvbHZlQXN5bmMiLCJ0aGVuIiwibG9hZGVkTW9kdWxlIiwiX3RoaXM0IiwiX3RoaXMkcHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJfdGhpcyRwcm9wczIiLCJwcm9wRmFsbGJhY2siLCJmYWxsYmFjayIsIl90aGlzJHN0YXRlIiwic3VzcGVuc2UiLCJyZWYiLCJFbmhhbmNlZElubmVyTG9hZGFibGUiLCJDb25zdW1lciIsImV4dHJhY3RvciIsImRpc3BsYXlOYW1lIiwibG9hZCIsImxhenkiLCJfY3JlYXRlTG9hZGFibGUiLCJfX2VzTW9kdWxlIiwiX2NyZWF0ZUxvYWRhYmxlJDEiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJsb2FkYWJsZSQxIiwibGF6eSQxIiwibG9hZGFibGUkMiIsImxpYiIsImlzQWJzb2x1dGUiLCJwYXRobmFtZSIsImNoYXJBdCIsInNwbGljZU9uZSIsImxpc3QiLCJpbmRleCIsImsiLCJuIiwicG9wIiwib2JqIiwidmFsdWVPZiIsInZhbHVlRXF1YWwiLCJhIiwiYiIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5IiwiaXRlbSIsImFWYWx1ZSIsImJWYWx1ZSIsImFkZExlYWRpbmdTbGFzaCIsInBhdGgiLCJzdHJpcExlYWRpbmdTbGFzaCIsInN1YnN0ciIsInN0cmlwQmFzZW5hbWUiLCJwcmVmaXgiLCJ0b0xvd2VyQ2FzZSIsImhhc0Jhc2VuYW1lIiwic3RyaXBUcmFpbGluZ1NsYXNoIiwic2xpY2UiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXNoIiwiY3JlYXRlTG9jYXRpb24iLCJjdXJyZW50TG9jYXRpb24iLCJoYXNoSW5kZXgiLCJzZWFyY2hJbmRleCIsInBhcnNlUGF0aCIsImRlY29kZVVSSSIsImUiLCJVUklFcnJvciIsInRvIiwiZnJvbSIsImhhc1RyYWlsaW5nU2xhc2giLCJ0b1BhcnRzIiwic3BsaXQiLCJmcm9tUGFydHMiLCJpc1RvQWJzIiwiaXNGcm9tQWJzIiwibXVzdEVuZEFicyIsImNvbmNhdCIsImxhc3QiLCJ1cCIsInBhcnQiLCJ1bnNoaWZ0Iiwiam9pbiIsImxvY2F0aW9uc0FyZUVxdWFsIiwiY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJwcm9tcHQiLCJsaXN0ZW5lcnMiLCJzZXRQcm9tcHQiLCJuZXh0UHJvbXB0IiwiY29uZmlybVRyYW5zaXRpb25UbyIsImFjdGlvbiIsImdldFVzZXJDb25maXJtYXRpb24iLCJhcHBlbmRMaXN0ZW5lciIsImZuIiwiaXNBY3RpdmUiLCJsaXN0ZW5lciIsInB1c2giLCJmaWx0ZXIiLCJub3RpZnlMaXN0ZW5lcnMiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJmb3JFYWNoIiwiY2FuVXNlRE9NIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29uZmlybWF0aW9uIiwiY29uZmlybSIsIlBvcFN0YXRlRXZlbnQiLCJIYXNoQ2hhbmdlRXZlbnQiLCJnZXRIaXN0b3J5U3RhdGUiLCJoaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJ1YSIsImdsb2JhbEhpc3RvcnkiLCJjYW5Vc2VIaXN0b3J5IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIiLCJfcHJvcHMiLCJfcHJvcHMkZm9yY2VSZWZyZXNoIiwiZm9yY2VSZWZyZXNoIiwiX3Byb3BzJGdldFVzZXJDb25maXJtIiwiX3Byb3BzJGtleUxlbmd0aCIsImtleUxlbmd0aCIsImJhc2VuYW1lIiwiZ2V0RE9NTG9jYXRpb24iLCJoaXN0b3J5U3RhdGUiLCJfd2luZG93JGxvY2F0aW9uIiwiY3JlYXRlS2V5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwidHJhbnNpdGlvbk1hbmFnZXIiLCJoYW5kbGVQb3BTdGF0ZSIsImV2ZW50IiwiaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCIsImhhbmRsZVBvcCIsImhhbmRsZUhhc2hDaGFuZ2UiLCJmb3JjZU5leHRQb3AiLCJvayIsImZyb21Mb2NhdGlvbiIsInRvTG9jYXRpb24iLCJ0b0luZGV4IiwiYWxsS2V5cyIsImZyb21JbmRleCIsImRlbHRhIiwiZ28iLCJyZXZlcnRQb3AiLCJpbml0aWFsTG9jYXRpb24iLCJjcmVhdGVIcmVmIiwibGlzdGVuZXJDb3VudCIsImNoZWNrRE9NTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0Jsb2NrZWQiLCJocmVmIiwicHVzaFN0YXRlIiwicHJldkluZGV4IiwibmV4dEtleXMiLCJyZXBsYWNlIiwicmVwbGFjZVN0YXRlIiwiZ29CYWNrIiwiZ29Gb3J3YXJkIiwiYmxvY2siLCJ1bmJsb2NrIiwibGlzdGVuIiwidW5saXN0ZW4iLCJIYXNoQ2hhbmdlRXZlbnQkMSIsIkhhc2hQYXRoQ29kZXJzIiwiaGFzaGJhbmciLCJlbmNvZGVQYXRoIiwiZGVjb2RlUGF0aCIsIm5vc2xhc2giLCJzbGFzaCIsInN0cmlwSGFzaCIsInVybCIsImdldEhhc2hQYXRoIiwic3Vic3RyaW5nIiwicmVwbGFjZUhhc2hQYXRoIiwiY3JlYXRlSGFzaEhpc3RvcnkiLCJfcHJvcHMkaGFzaFR5cGUiLCJoYXNoVHlwZSIsIl9IYXNoUGF0aENvZGVycyRoYXNoVCIsImlnbm9yZVBhdGgiLCJlbmNvZGVkUGF0aCIsInByZXZMb2NhdGlvbiIsImFsbFBhdGhzIiwibGFzdEluZGV4T2YiLCJiYXNlVGFnIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInB1c2hIYXNoUGF0aCIsIm5leHRQYXRocyIsImNsYW1wIiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJtaW4iLCJtYXgiLCJjcmVhdGVNZW1vcnlIaXN0b3J5IiwiX3Byb3BzJGluaXRpYWxFbnRyaWVzIiwiaW5pdGlhbEVudHJpZXMiLCJfcHJvcHMkaW5pdGlhbEluZGV4IiwiaW5pdGlhbEluZGV4IiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwibmV4dEluZGV4IiwibmV4dEVudHJpZXMiLCJzcGxpY2UiLCJjYW5HbyIsInJlYWN0SXMiLCJSRUFDVF9TVEFUSUNTIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb250ZXh0VHlwZSIsImNvbnRleHRUeXBlcyIsImRlZmF1bHRQcm9wcyIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsIm1peGlucyIsInByb3BUeXBlcyIsInR5cGUiLCJLTk9XTl9TVEFUSUNTIiwiY2FsbGVyIiwiY2FsbGVlIiwiYXJpdHkiLCJNRU1PX1NUQVRJQ1MiLCJjb21wYXJlIiwiVFlQRV9TVEFUSUNTIiwiZ2V0U3RhdGljcyIsImNvbXBvbmVudCIsImlzTWVtbyIsIkZvcndhcmRSZWYiLCJNZW1vIiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmplY3RQcm90b3R5cGUiLCJleHBvcnRzIiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJ0YXJnZXRDb21wb25lbnQiLCJzb3VyY2VDb21wb25lbnQiLCJibGFja2xpc3QiLCJpbmhlcml0ZWRDb21wb25lbnQiLCJ0YXJnZXRTdGF0aWNzIiwic291cmNlU3RhdGljcyIsImRlc2NyaXB0b3IiLCJhcnIiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInRlc3QxIiwiU3RyaW5nIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJ0ZXN0MyIsImxldHRlciIsImVyciIsInNob3VsZFVzZU5hdGl2ZSIsInN5bWJvbHMiLCJzIiwiaXNhcnJheSIsInBhdGhUb1JlZ2V4cCIsIlJlZ0V4cCIsImdyb3VwcyIsIm1hdGNoIiwiZGVsaW1pdGVyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJwYXJ0aWFsIiwiYXN0ZXJpc2siLCJwYXR0ZXJuIiwiYXR0YWNoS2V5cyIsInJlZ2V4cFRvUmVnZXhwIiwicGFydHMiLCJmbGFncyIsImFycmF5VG9SZWdleHAiLCJ0b2tlbnNUb1JlZ0V4cCIsInBhcnNlIiwic3RyaW5nVG9SZWdleHAiLCJjb21waWxlIiwic3RyIiwidG9rZW5zVG9GdW5jdGlvbiIsIlBBVEhfUkVHRVhQIiwicmVzIiwidG9rZW5zIiwiZGVmYXVsdERlbGltaXRlciIsImV4ZWMiLCJtIiwiZXNjYXBlZCIsIm9mZnNldCIsIm5leHQiLCJjYXB0dXJlIiwiZ3JvdXAiLCJtb2RpZmllciIsImVzY2FwZUdyb3VwIiwiZXNjYXBlU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IiwiZW5jb2RlVVJJIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoZXMiLCJvcHRzIiwiZGF0YSIsImVuY29kZSIsInByZXR0eSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRva2VuIiwic2VnbWVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqIiwidGVzdCIsInJlIiwic2Vuc2l0aXZlIiwic3RyaWN0IiwiZW5kIiwicm91dGUiLCJlbmRzV2l0aERlbGltaXRlciIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiZW1wdHlGdW5jdGlvbiIsImVtcHR5RnVuY3Rpb25XaXRoUmVzZXQiLCJyZXNldFdhcm5pbmdDYWNoZSIsInNoaW0iLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJnZXRTaGltIiwiaXNSZXF1aXJlZCIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJib29sIiwiZnVuYyIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsInN5bWJvbCIsImFueSIsImFycmF5T2YiLCJlbGVtZW50IiwiZWxlbWVudFR5cGUiLCJpbnN0YW5jZU9mIiwibm9kZSIsIm9iamVjdE9mIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSIsImV4YWN0IiwiY2hlY2tQcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhYSIsInIiLCJ5IiwiYmEiLCJTZXQiLCJjYSIsImRhIiwiZWEiLCJhZGQiLCJmYSIsImhhIiwiaWEiLCJqYSIsImthIiwiQiIsImQiLCJmIiwiZyIsImFjY2VwdHNCb29sZWFucyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVOYW1lc3BhY2UiLCJtdXN0VXNlUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJzYW5pdGl6ZVVSTCIsInJlbW92ZUVtcHR5U3RyaW5nIiwiRCIsIm9hIiwicGEiLCJxYSIsIm1hIiwiaXNOYU4iLCJuYSIsImxhIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlTlMiLCJ4bGlua0hyZWYiLCJyYSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwic2EiLCJ0YSIsIndhIiwieGEiLCJ5YSIsInphIiwiQWEiLCJCYSIsIkNhIiwiRGEiLCJFYSIsIkZhIiwiR2EiLCJIYSIsIklhIiwiSmEiLCJTeW1ib2wiLCJmb3IiLCJFIiwiTWEiLCJLYSIsIml0ZXJhdG9yIiwiTGEiLCJOYSIsInN0YWNrIiwidHJpbSIsIk9hIiwiUGEiLCJwcmVwYXJlU3RhY2tUcmFjZSIsInNldCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJoIiwiUWEiLCJ0YWciLCJSYSIsIiQkdHlwZW9mIiwiX2NvbnRleHQiLCJfcGF5bG9hZCIsIl9pbml0IiwiU2EiLCJUYSIsIm5vZGVOYW1lIiwiVmEiLCJfdmFsdWVUcmFja2VyIiwiZ2V0IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJzdG9wVHJhY2tpbmciLCJVYSIsIldhIiwiY2hlY2tlZCIsIlhhIiwiYWN0aXZlRWxlbWVudCIsImJvZHkiLCJZYSIsImRlZmF1bHRDaGVja2VkIiwiZGVmYXVsdFZhbHVlIiwiX3dyYXBwZXJTdGF0ZSIsImluaXRpYWxDaGVja2VkIiwiWmEiLCJpbml0aWFsVmFsdWUiLCJjb250cm9sbGVkIiwiJGEiLCJhYiIsImJiIiwiY2IiLCJvd25lckRvY3VtZW50IiwiZWIiLCJDaGlsZHJlbiIsImRiIiwiZmIiLCJzZWxlY3RlZCIsImRlZmF1bHRTZWxlY3RlZCIsImRpc2FibGVkIiwiZ2IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImhiIiwiaWIiLCJqYiIsInRleHRDb250ZW50Iiwia2IiLCJsYiIsIm1iIiwibmIiLCJvYiIsIm5hbWVzcGFjZVVSSSIsImlubmVySFRNTCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiTVNBcHAiLCJleGVjVW5zYWZlTG9jYWxGdW5jdGlvbiIsInBiIiwibGFzdENoaWxkIiwibm9kZVR5cGUiLCJub2RlVmFsdWUiLCJxYiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYm9yZGVySW1hZ2VPdXRzZXQiLCJib3JkZXJJbWFnZVNsaWNlIiwiYm9yZGVySW1hZ2VXaWR0aCIsImJveEZsZXgiLCJib3hGbGV4R3JvdXAiLCJib3hPcmRpbmFsR3JvdXAiLCJjb2x1bW5Db3VudCIsImNvbHVtbnMiLCJmbGV4IiwiZmxleEdyb3ciLCJmbGV4UG9zaXRpdmUiLCJmbGV4U2hyaW5rIiwiZmxleE5lZ2F0aXZlIiwiZmxleE9yZGVyIiwiZ3JpZEFyZWEiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTcGFuIiwiZ3JpZFJvd1N0YXJ0IiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3BhbiIsImdyaWRDb2x1bW5TdGFydCIsImZvbnRXZWlnaHQiLCJsaW5lQ2xhbXAiLCJsaW5lSGVpZ2h0Iiwib3BhY2l0eSIsIm9yZGVyIiwib3JwaGFucyIsInRhYlNpemUiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwiZmlsbE9wYWNpdHkiLCJmbG9vZE9wYWNpdHkiLCJzdG9wT3BhY2l0eSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdpZHRoIiwicmIiLCJzYiIsInRiIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInViIiwibWVudWl0ZW0iLCJhcmVhIiwiYmFzZSIsImJyIiwiY29sIiwiZW1iZWQiLCJociIsImltZyIsImlucHV0Iiwia2V5Z2VuIiwibGluayIsIm1ldGEiLCJwYXJhbSIsInRyYWNrIiwid2JyIiwidmIiLCJ3YiIsImlzIiwieGIiLCJzcmNFbGVtZW50IiwiY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwieWIiLCJ6YiIsIkFiIiwiQmIiLCJDYiIsInN0YXRlTm9kZSIsIkRiIiwiRWIiLCJGYiIsIkdiIiwiSGIiLCJJYiIsIkpiIiwiS2IiLCJMYiIsIk1iIiwiT2IiLCJQYiIsIlFiIiwiUmIiLCJsIiwib25FcnJvciIsIlNiIiwiVGIiLCJVYiIsIlZiIiwiV2IiLCJYYiIsIlpiIiwiYWx0ZXJuYXRlIiwicmV0dXJuIiwiJGIiLCJtZW1vaXplZFN0YXRlIiwiZGVoeWRyYXRlZCIsImFjIiwiZGMiLCJlYyIsImZjIiwiZ2MiLCJoYyIsImljIiwiamMiLCJrYyIsImxjIiwibWMiLCJuYyIsIk1hcCIsIm9jIiwicGMiLCJxYyIsInJjIiwiYmxvY2tlZE9uIiwiZG9tRXZlbnROYW1lIiwiZXZlbnRTeXN0ZW1GbGFncyIsIm5hdGl2ZUV2ZW50IiwidGFyZ2V0Q29udGFpbmVycyIsInNjIiwiZGVsZXRlIiwicG9pbnRlcklkIiwidGMiLCJ2YyIsIndjIiwibGFuZVByaW9yaXR5IiwidW5zdGFibGVfcnVuV2l0aFByaW9yaXR5IiwicHJpb3JpdHkiLCJoeWRyYXRlIiwiY29udGFpbmVySW5mbyIsInhjIiwieWMiLCJzaGlmdCIsInpjIiwiQWMiLCJCYyIsInVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2siLCJ1bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSIsIkNjIiwiRGMiLCJFYyIsImFuaW1hdGlvbmVuZCIsImFuaW1hdGlvbml0ZXJhdGlvbiIsImFuaW1hdGlvbnN0YXJ0IiwidHJhbnNpdGlvbmVuZCIsIkZjIiwiR2MiLCJIYyIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJJYyIsIkpjIiwiS2MiLCJMYyIsIk1jIiwiTmMiLCJPYyIsIlBjIiwiUWMiLCJ1bnN0YWJsZV9ub3ciLCJGIiwiUmMiLCJVYyIsInBlbmRpbmdMYW5lcyIsImV4cGlyZWRMYW5lcyIsInN1c3BlbmRlZExhbmVzIiwicGluZ2VkTGFuZXMiLCJWYyIsImVudGFuZ2xlZExhbmVzIiwiZW50YW5nbGVtZW50cyIsIldjIiwiWGMiLCJZYyIsIlpjIiwiJGMiLCJldmVudFRpbWVzIiwiY2x6MzIiLCJiZCIsImNkIiwibG9nIiwiTE4yIiwiZGQiLCJ1bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSIsImVkIiwiZmQiLCJnZCIsImhkIiwiaWQiLCJiaW5kIiwidWMiLCJqZCIsImtkIiwibGQiLCJtZCIsIm5kIiwib2QiLCJrZXlDb2RlIiwiY2hhckNvZGUiLCJwZCIsInFkIiwicmQiLCJfcmVhY3ROYW1lIiwiX3RhcmdldEluc3QiLCJjdXJyZW50VGFyZ2V0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJldHVyblZhbHVlIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsInBlcnNpc3QiLCJpc1BlcnNpc3RlbnQiLCJ3ZCIsInhkIiwieWQiLCJzZCIsImV2ZW50UGhhc2UiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsInRpbWVTdGFtcCIsIkRhdGUiLCJub3ciLCJpc1RydXN0ZWQiLCJ0ZCIsInVkIiwidmlldyIsImRldGFpbCIsInZkIiwiQWQiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwicGFnZVgiLCJwYWdlWSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm1ldGFLZXkiLCJnZXRNb2RpZmllclN0YXRlIiwiemQiLCJidXR0b24iLCJidXR0b25zIiwicmVsYXRlZFRhcmdldCIsImZyb21FbGVtZW50IiwidG9FbGVtZW50IiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiQmQiLCJEZCIsImRhdGFUcmFuc2ZlciIsIkZkIiwiSGQiLCJhbmltYXRpb25OYW1lIiwiZWxhcHNlZFRpbWUiLCJwc2V1ZG9FbGVtZW50IiwiSmQiLCJjbGlwYm9hcmREYXRhIiwiTGQiLCJNZCIsIkVzYyIsIlNwYWNlYmFyIiwiTGVmdCIsIlVwIiwiUmlnaHQiLCJEb3duIiwiRGVsIiwiV2luIiwiTWVudSIsIkFwcHMiLCJTY3JvbGwiLCJNb3pQcmludGFibGVLZXkiLCJOZCIsIjgiLCI5IiwiMTIiLCIxMyIsIjE2IiwiMTciLCIxOCIsIjE5IiwiMjAiLCIyNyIsIjMyIiwiMzMiLCIzNCIsIjM1IiwiMzYiLCIzNyIsIjM4IiwiMzkiLCI0MCIsIjQ1IiwiNDYiLCIxMTIiLCIxMTMiLCIxMTQiLCIxMTUiLCIxMTYiLCIxMTciLCIxMTgiLCIxMTkiLCIxMjAiLCIxMjEiLCIxMjIiLCIxMjMiLCIxNDQiLCIxNDUiLCIyMjQiLCJPZCIsIkFsdCIsIkNvbnRyb2wiLCJNZXRhIiwiU2hpZnQiLCJQZCIsIlJkIiwiY29kZSIsImxvY2FsZSIsIndoaWNoIiwiVGQiLCJ3aWR0aCIsImhlaWdodCIsInByZXNzdXJlIiwidGFuZ2VudGlhbFByZXNzdXJlIiwidGlsdFgiLCJ0aWx0WSIsInR3aXN0IiwicG9pbnRlclR5cGUiLCJpc1ByaW1hcnkiLCJWZCIsInRvdWNoZXMiLCJ0YXJnZXRUb3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJYZCIsIlpkIiwiZGVsdGFYIiwid2hlZWxEZWx0YVgiLCJkZWx0YVkiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGEiLCJkZWx0YVoiLCJkZWx0YU1vZGUiLCIkZCIsImFlIiwiYmUiLCJkb2N1bWVudE1vZGUiLCJjZSIsImRlIiwiZWUiLCJmZSIsImdlIiwiaGUiLCJpZSIsImxlIiwiY29sb3IiLCJkYXRlIiwiZGF0ZXRpbWUiLCJlbWFpbCIsIm1vbnRoIiwicGFzc3dvcmQiLCJyYW5nZSIsInRlbCIsInRleHQiLCJ0aW1lIiwid2VlayIsIm1lIiwibmUiLCJvZSIsInBlIiwicWUiLCJzZSIsInRlIiwidWUiLCJ2ZSIsIndlIiwieGUiLCJ5ZSIsInplIiwib25pbnB1dCIsIkFlIiwiZGV0YWNoRXZlbnQiLCJCZSIsIkNlIiwiYXR0YWNoRXZlbnQiLCJEZSIsIkVlIiwiRmUiLCJIZSIsIkllIiwiSmUiLCJLZSIsIkxlIiwibmV4dFNpYmxpbmciLCJNZSIsImNvbnRhaW5zIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJOZSIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudFdpbmRvdyIsIk9lIiwiY29udGVudEVkaXRhYmxlIiwiUGUiLCJRZSIsIlJlIiwiU2UiLCJUZSIsIlVlIiwic3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsImFuY2hvck5vZGUiLCJkZWZhdWx0VmlldyIsImdldFNlbGVjdGlvbiIsImFuY2hvck9mZnNldCIsImZvY3VzTm9kZSIsImZvY3VzT2Zmc2V0IiwiVmUiLCJXZSIsIlhlIiwiWWUiLCJaZSIsIlliIiwiaW5zdGFuY2UiLCJHIiwiJGUiLCJoYXMiLCJhZiIsImJmIiwiY2YiLCJkZiIsInBhc3NpdmUiLCJOYiIsIngiLCJ3IiwieiIsInUiLCJxIiwidCIsImVmIiwiZmYiLCJwYXJlbnRXaW5kb3ciLCJnZiIsImhmIiwiSiIsIksiLCJRIiwiTCIsImplIiwiY2hhciIsImtlIiwiamYiLCJrZiIsImxmIiwibWYiLCJhdXRvRm9jdXMiLCJuZiIsIl9faHRtbCIsIm9mIiwicGYiLCJjbGVhclRpbWVvdXQiLCJxZiIsInJmIiwic2YiLCJwcmV2aW91c1NpYmxpbmciLCJ0ZiIsInZmIiwid2YiLCJ4ZiIsInlmIiwiY2hpbGQiLCJ6ZiIsIkFmIiwiQmYiLCJIIiwiSSIsIkNmIiwiTSIsIk4iLCJEZiIsIkVmIiwiX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dCIsIl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0IiwiRmYiLCJHZiIsIkhmIiwiSWYiLCJnZXRDaGlsZENvbnRleHQiLCJKZiIsIl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0IiwiS2YiLCJMZiIsIk1mIiwiTmYiLCJPZiIsIlBmIiwidW5zdGFibGVfY2FuY2VsQ2FsbGJhY2siLCJRZiIsInVuc3RhYmxlX3Nob3VsZFlpZWxkIiwiUmYiLCJ1bnN0YWJsZV9yZXF1ZXN0UGFpbnQiLCJTZiIsIlRmIiwidW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwiLCJVZiIsInVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5IiwiVmYiLCJXZiIsIlhmIiwidW5zdGFibGVfTG93UHJpb3JpdHkiLCJZZiIsInVuc3RhYmxlX0lkbGVQcmlvcml0eSIsIlpmIiwiJGYiLCJhZyIsImJnIiwiY2ciLCJkZyIsIk8iLCJlZyIsImZnIiwiZ2ciLCJoZyIsImlnIiwiamciLCJrZyIsIlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnIiwibGciLCJtZyIsIm5nIiwib2ciLCJwZyIsInFnIiwicmciLCJfY3VycmVudFZhbHVlIiwic2ciLCJjaGlsZExhbmVzIiwidGciLCJkZXBlbmRlbmNpZXMiLCJmaXJzdENvbnRleHQiLCJsYW5lcyIsInVnIiwidmciLCJjb250ZXh0Iiwib2JzZXJ2ZWRCaXRzIiwicmVzcG9uZGVycyIsIndnIiwieGciLCJ1cGRhdGVRdWV1ZSIsImJhc2VTdGF0ZSIsImZpcnN0QmFzZVVwZGF0ZSIsImxhc3RCYXNlVXBkYXRlIiwic2hhcmVkIiwicGVuZGluZyIsImVmZmVjdHMiLCJ5ZyIsInpnIiwiZXZlbnRUaW1lIiwibGFuZSIsInBheWxvYWQiLCJBZyIsIkJnIiwiQ2ciLCJBIiwiQyIsIkRnIiwiRWciLCJGZyIsInJlZnMiLCJHZyIsIktnIiwiaXNNb3VudGVkIiwiX3JlYWN0SW50ZXJuYWxzIiwiZW5xdWV1ZVNldFN0YXRlIiwiSGciLCJJZyIsIkpnIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsImVucXVldWVGb3JjZVVwZGF0ZSIsIkxnIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJNZyIsInVwZGF0ZXIiLCJOZyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIk9nIiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiUGciLCJRZyIsIl9vd25lciIsIl9zdHJpbmdSZWYiLCJSZyIsIlNnIiwibGFzdEVmZmVjdCIsIm5leHRFZmZlY3QiLCJmaXJzdEVmZmVjdCIsInNpYmxpbmciLCJUZyIsIlVnIiwibW9kZSIsIlZnIiwiaW1wbGVtZW50YXRpb24iLCJXZyIsIlhnIiwiZG9uZSIsIllnIiwiWmciLCIkZyIsImFoIiwiYmgiLCJjaCIsImRoIiwiZWgiLCJkb2N1bWVudEVsZW1lbnQiLCJ0YWdOYW1lIiwiZmgiLCJnaCIsImhoIiwiUCIsImloIiwibWVtb2l6ZWRQcm9wcyIsInJldmVhbE9yZGVyIiwiamgiLCJraCIsImxoIiwibWgiLCJuaCIsIm9oIiwicGVuZGluZ1Byb3BzIiwicGgiLCJxaCIsInJoIiwic2giLCJ0aCIsInVoIiwiX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnkiLCJ2aCIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJ3aCIsInhoIiwiUiIsIlMiLCJUIiwieWgiLCJ6aCIsIkFoIiwiQmgiLCJDaCIsIkRoIiwiRWgiLCJGaCIsIkdoIiwiSGgiLCJiYXNlUXVldWUiLCJxdWV1ZSIsIkloIiwiSmgiLCJLaCIsImxhc3RSZW5kZXJlZFJlZHVjZXIiLCJlYWdlclJlZHVjZXIiLCJlYWdlclN0YXRlIiwibGFzdFJlbmRlcmVkU3RhdGUiLCJkaXNwYXRjaCIsIkxoIiwiTWgiLCJfZ2V0VmVyc2lvbiIsIl9zb3VyY2UiLCJtdXRhYmxlUmVhZExhbmVzIiwiTmgiLCJVIiwidXNlU3RhdGUiLCJnZXRTbmFwc2hvdCIsInN1YnNjcmliZSIsInVzZUVmZmVjdCIsInNldFNuYXBzaG90IiwiT2giLCJQaCIsIlFoIiwiUmgiLCJkZXN0cm95IiwiZGVwcyIsIlNoIiwiVGgiLCJVaCIsIlZoIiwiV2giLCJYaCIsIlloIiwiWmgiLCIkaCIsImFpIiwiYmkiLCJjaSIsImRpIiwicmVhZENvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJ1c2VSZWYiLCJ1c2VEZWJ1Z1ZhbHVlIiwidXNlRGVmZXJyZWRWYWx1ZSIsInVzZVRyYW5zaXRpb24iLCJ1c2VNdXRhYmxlU291cmNlIiwidXNlT3BhcXVlSWRlbnRpZmllciIsInVuc3RhYmxlX2lzTmV3UmVjb25jaWxlciIsInVmIiwiZWkiLCJSZWFjdEN1cnJlbnRPd25lciIsImZpIiwiZ2kiLCJoaSIsImlpIiwiamkiLCJraSIsImxpIiwibWkiLCJiYXNlTGFuZXMiLCJuaSIsIm9pIiwicGkiLCJVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJxaSIsInJpIiwicGVuZGluZ0NvbnRleHQiLCJCaSIsIkRpIiwiRWkiLCJzaSIsInJldHJ5TGFuZSIsInRpIiwidW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2siLCJ1aSIsInVuc3RhYmxlX2V4cGVjdGVkTG9hZFRpbWUiLCJ2aSIsIndpIiwieGkiLCJ5aSIsInppIiwiaXNCYWNrd2FyZHMiLCJyZW5kZXJpbmciLCJyZW5kZXJpbmdTdGFydFRpbWUiLCJ0YWlsIiwidGFpbE1vZGUiLCJBaSIsIkZpIiwiR2kiLCJ3YXNNdWx0aXBsZSIsIm11bHRpcGxlIiwib25DbGljayIsIm9uY2xpY2siLCJzaXplIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlVGV4dE5vZGUiLCJWIiwiSGkiLCJJaSIsIlciLCJKaSIsIktpIiwiTGkiLCJNaSIsIk5pIiwiT2kiLCJXZWFrTWFwIiwiUGkiLCJRaSIsIlJpIiwiU2kiLCJjb21wb25lbnREaWRDYXRjaCIsIlRpIiwiY29tcG9uZW50U3RhY2siLCJVaSIsIldlYWtTZXQiLCJWaSIsIldpIiwiWGkiLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsIllpIiwiWmkiLCIkaSIsImZvY3VzIiwiYWoiLCJkaXNwbGF5IiwiYmoiLCJvbkNvbW1pdEZpYmVyVW5tb3VudCIsImNqIiwiZGoiLCJlaiIsImZqIiwiZ2oiLCJoaiIsImluc2VydEJlZm9yZSIsIl9yZWFjdFJvb3RDb250YWluZXIiLCJpaiIsImpqIiwia2oiLCJsaiIsIm1qIiwibmoiLCJjZWlsIiwib2oiLCJwaiIsIlgiLCJZIiwicWoiLCJyaiIsInNqIiwidGoiLCJ1aiIsInZqIiwiSW5maW5pdHkiLCJ3aiIsImNrIiwiWiIsInhqIiwieWoiLCJ6aiIsIkFqIiwiQmoiLCJDaiIsIkRqIiwiRWoiLCJGaiIsIkdqIiwiSGoiLCJJaiIsIkpqIiwiU2MiLCJLaiIsIkxqIiwiTWoiLCJjYWxsYmFja05vZGUiLCJleHBpcmF0aW9uVGltZXMiLCJjYWxsYmFja1ByaW9yaXR5IiwiVGMiLCJOaiIsIk9qIiwiUGoiLCJRaiIsIlJqIiwiU2oiLCJUaiIsImZpbmlzaGVkV29yayIsImZpbmlzaGVkTGFuZXMiLCJVaiIsInRpbWVvdXRIYW5kbGUiLCJwaW5nQ2FjaGUiLCJZaiIsIlpqIiwidmEiLCJhayIsImJrIiwiZGsiLCJyYW5nZUNvdW50IiwiZm9jdXNlZEVsZW0iLCJzZWxlY3Rpb25SYW5nZSIsImVrIiwiZXh0ZW5kIiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2V0RW5kIiwibGVmdCIsInNjcm9sbExlZnQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJvbkNvbW1pdEZpYmVyUm9vdCIsImZrIiwiZ2siLCJpayIsImlzUmVhY3RDb21wb25lbnQiLCJwZW5kaW5nQ2hpbGRyZW4iLCJqayIsIm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEiLCJsayIsIm1rIiwibmsiLCJxayIsImh5ZHJhdGlvbk9wdGlvbnMiLCJtdXRhYmxlU291cmNlcyIsIl9pbnRlcm5hbFJvb3QiLCJyayIsInRrIiwiaGFzQXR0cmlidXRlIiwic2siLCJYaiIsImhrIiwiX2NhbGN1bGF0ZUNoYW5nZWRCaXRzIiwidW5zdGFibGVfb2JzZXJ2ZWRCaXRzIiwidW5tb3VudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JtIiwiVmoiLCJ3ayIsImZpbmRGaWJlckJ5SG9zdEluc3RhbmNlIiwiYnVuZGxlVHlwZSIsInZlcnNpb24iLCJyZW5kZXJlclBhY2thZ2VOYW1lIiwieGsiLCJyZW5kZXJlckNvbmZpZyIsIm92ZXJyaWRlSG9va1N0YXRlIiwib3ZlcnJpZGVIb29rU3RhdGVEZWxldGVQYXRoIiwib3ZlcnJpZGVIb29rU3RhdGVSZW5hbWVQYXRoIiwib3ZlcnJpZGVQcm9wcyIsIm92ZXJyaWRlUHJvcHNEZWxldGVQYXRoIiwib3ZlcnJpZGVQcm9wc1JlbmFtZVBhdGgiLCJzZXRTdXNwZW5zZUhhbmRsZXIiLCJzY2hlZHVsZVVwZGF0ZSIsImN1cnJlbnREaXNwYXRjaGVyUmVmIiwiZmluZEhvc3RJbnN0YW5jZUJ5RmliZXIiLCJiYyIsImNjIiwiZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoIiwic2NoZWR1bGVSZWZyZXNoIiwic2NoZWR1bGVSb290Iiwic2V0UmVmcmVzaEhhbmRsZXIiLCJnZXRDdXJyZW50RmliZXIiLCJfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJ5ayIsImlzRGlzYWJsZWQiLCJzdXBwb3J0c0ZpYmVyIiwiaW5qZWN0IiwiY2hlY2tEQ0UiLCJBc3luY01vZGUiLCJDb25jdXJyZW50TW9kZSIsIkNvbnRleHRDb25zdW1lciIsIkNvbnRleHRQcm92aWRlciIsIkVsZW1lbnQiLCJGcmFnbWVudCIsIkxhenkiLCJQb3J0YWwiLCJQcm9maWxlciIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImlzQXN5bmNNb2RlIiwiaXNDb25jdXJyZW50TW9kZSIsImlzQ29udGV4dENvbnN1bWVyIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJpc0VsZW1lbnQiLCJpc0ZvcndhcmRSZWYiLCJpc0ZyYWdtZW50IiwiaXNMYXp5IiwiaXNQb3J0YWwiLCJpc1Byb2ZpbGVyIiwiaXNTdHJpY3RNb2RlIiwiaXNTdXNwZW5zZSIsInR5cGVPZiIsIkJyb3dzZXJSb3V0ZXIiLCJyZXNvbHZlVG9Mb2NhdGlvbiIsIm5vcm1hbGl6ZVRvTG9jYXRpb24iLCJmb3J3YXJkUmVmU2hpbSIsImZvcndhcmRSZWYiLCJMaW5rQW5jaG9yIiwiaW5uZXJSZWYiLCJuYXZpZ2F0ZSIsIl9vbkNsaWNrIiwicmVzdCIsImV4IiwiaXNNb2RpZmllZEV2ZW50IiwiTGluayIsIl9yZWYyIiwiX3JlZjIkY29tcG9uZW50IiwiZm9yd2FyZFJlZlNoaW0kMSIsImZvcndhcmRSZWYkMSIsIk5hdkxpbmsiLCJfcmVmJGFyaWFDdXJyZW50IiwiYXJpYUN1cnJlbnQiLCJfcmVmJGFjdGl2ZUNsYXNzTmFtZSIsImFjdGl2ZUNsYXNzTmFtZSIsImFjdGl2ZVN0eWxlIiwiY2xhc3NOYW1lUHJvcCIsImNsYXNzTmFtZSIsImlzQWN0aXZlUHJvcCIsImxvY2F0aW9uUHJvcCIsInN0eWxlUHJvcCIsImVzY2FwZWRQYXRoIiwiY2xhc3NuYW1lcyIsImpvaW5DbGFzc25hbWVzIiwiTUFYX1NJR05FRF8zMV9CSVRfSU5UIiwiY29tbW9uanNHbG9iYWwiLCJnbG9iYWxUaGlzIiwiY3JlYXRlRXZlbnRFbWl0dGVyIiwiaGFuZGxlcnMiLCJvbiIsImhhbmRsZXIiLCJvZmYiLCJuZXdWYWx1ZSIsImNoYW5nZWRCaXRzIiwiY2FsY3VsYXRlQ2hhbmdlZEJpdHMiLCJfUHJvdmlkZXIkY2hpbGRDb250ZXgiLCJfQ29uc3VtZXIkY29udGV4dFR5cGUiLCJjb250ZXh0UHJvcCIsIlByb3ZpZGVyIiwiX0NvbXBvbmVudCIsImVtaXR0ZXIiLCJuZXh0UHJvcHMiLCJvbGRWYWx1ZSIsIl9Db21wb25lbnQyIiwib25VcGRhdGUiLCJfcHJvdG8yIiwiaGlzdG9yeUNvbnRleHQiLCJjcmVhdGVOYW1lZENvbnRleHQiLCJjcmVhdGVOYW1lZENvbnRleHQkMSIsIlJvdXRlciIsIl9pc01vdW50ZWQiLCJfcGVuZGluZ0xvY2F0aW9uIiwic3RhdGljQ29udGV4dCIsImNvbXB1dGVSb290TWF0Y2giLCJwYXJhbXMiLCJpc0V4YWN0IiwiTGlmZWN5Y2xlIiwib25Nb3VudCIsIm9uVW5tb3VudCIsImNhY2hlQ291bnQiLCJnZW5lcmF0ZVBhdGgiLCJnZW5lcmF0b3IiLCJjb21waWxlUGF0aCIsIlJlZGlyZWN0IiwiY29tcHV0ZWRNYXRjaCIsIl9yZWYkcHVzaCIsIm1ldGhvZCIsImNhY2hlJDEiLCJjYWNoZUNvdW50JDEiLCJtYXRjaFBhdGgiLCJfb3B0aW9ucyIsIl9vcHRpb25zJGV4YWN0IiwiX29wdGlvbnMkc3RyaWN0IiwiX29wdGlvbnMkc2Vuc2l0aXZlIiwicmVkdWNlIiwibWF0Y2hlZCIsIl9jb21waWxlUGF0aCIsInBhdGhDYWNoZSIsInJlZ2V4cCIsImNvbXBpbGVQYXRoJDEiLCJ2YWx1ZXMiLCJtZW1vIiwiUm91dGUiLCJjb250ZXh0JDEiLCJTd2l0Y2giLCJ1c2VMb2NhdGlvbiIsInVzZVBhcmFtcyIsImZvcmNlVXBkYXRlIiwiX19zZWxmIiwiX19zb3VyY2UiLCJlc2NhcGUiLCJfc3RhdHVzIiwiX3Jlc3VsdCIsImRlZmF1bHQiLCJJc1NvbWVSZW5kZXJlckFjdGluZyIsImNvdW50IiwidG9BcnJheSIsIm9ubHkiLCJQdXJlQ29tcG9uZW50IiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29udGV4dCIsIl9jdXJyZW50VmFsdWUyIiwiX3RocmVhZENvdW50IiwiY3JlYXRlRmFjdG9yeSIsImNyZWF0ZVJlZiIsImlzVmFsaWRFbGVtZW50IiwicGVyZm9ybWFuY2UiLCJNZXNzYWdlQ2hhbm5lbCIsInVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmbG9vciIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsInNvcnRJbmRleCIsInN0YXJ0VGltZSIsImV4cGlyYXRpb25UaW1lIiwicHJpb3JpdHlMZXZlbCIsInVuc3RhYmxlX1Byb2ZpbGluZyIsInVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uIiwidW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUiLCJ1bnN0YWJsZV9uZXh0IiwidW5zdGFibGVfcGF1c2VFeGVjdXRpb24iLCJkZWxheSIsInVuc3RhYmxlX3dyYXBDYWxsYmFjayIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJnZXR0ZXIiLCJkZWZpbml0aW9uIiwiY2h1bmtJZCIsIlByb21pc2UiLCJhbGwiLCJwcm9taXNlcyIsIkZ1bmN0aW9uIiwicHJvcCIsInNjcmlwdCIsIm5lZWRBdHRhY2giLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjaGFyc2V0IiwidGltZW91dCIsInNyYyIsIm9uU2NyaXB0Q29tcGxldGUiLCJwcmV2Iiwib25lcnJvciIsIm9ubG9hZCIsImRvbmVGbnMiLCJoZWFkIiwidG9TdHJpbmdUYWciLCJpbnN0YWxsZWRDaHVua3MiLCIxNDMiLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJyZWplY3QiLCJlcnJvclR5cGUiLCJyZWFsU3JjIiwicmVxdWVzdCIsIndlYnBhY2tKc29ucENhbGxiYWNrIiwicGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24iLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwicnVudGltZSIsImNodW5rTG9hZGluZ0dsb2JhbCIsIkxvZ2luIiwiU2lnblVwIiwiV29ya1NwYWNlIiwiQXBwIl0sIm1hcHBpbmdzIjoiO1VBQUlBLEVBQ0FDLEUsK0JDRFcsU0FBU0MsSUFldEIsT0FkQUEsRUFBV0MsT0FBT0MsUUFBVSxTQUFVQyxHQUNwQyxJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSUMsVUFBVUMsT0FBUUYsSUFBSyxDQUN6QyxJQUFJRyxFQUFTRixVQUFVRCxHQUV2QixJQUFLLElBQUlJLEtBQU9ELEVBQ1ZOLE9BQU9RLFVBQVVDLGVBQWVDLEtBQUtKLEVBQVFDLEtBQy9DTCxFQUFPSyxHQUFPRCxFQUFPQyxJQUszQixPQUFPTCxJQUdPUyxNQUFN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LEtBQ3JDRCxFQUFvQnJ4QyxFQUFFc3hDLEdBQVltQyxFQUFZbkMsSUFLaEQsSUFGR29DLEdBQXNCQSxFQUFRckMsR0FDOUJrQyxHQUE0QkEsRUFBMkJ2eUMsR0FDckRoYSxFQUFJd3NELEVBQVN0c0QsT0FBUUYsSUFDekIycUQsRUFBVTZCLEVBQVN4c0QsR0FDaEJxcUQsRUFBb0IxcEQsRUFBRW9yRCxFQUFpQnBCLElBQVlvQixFQUFnQnBCLElBQ3JFb0IsRUFBZ0JwQixHQUFTLEtBRTFCb0IsRUFBZ0JTLEVBQVN4c0QsSUFBTSxHQUs3QjJzRCxFQUFxQmhvRCxLQUFrQyw0QkFBSUEsS0FBa0MsNkJBQUssR0FDdEdnb0QsRUFBbUIxL0MsUUFBUXEvQyxFQUFxQng2QixLQUFLLEtBQU0sSUFDM0Q2NkIsRUFBbUJoZ0QsS0FBTzIvQyxFQUFxQng2QixLQUFLLEtBQU02NkIsRUFBbUJoZ0QsS0FBS21sQixLQUFLNjZCLEssa0VDL0V2RixNQUFNQyxHQUFRdHFELFNBQVMsSUFBTSxpRUFDdkJ1cUQsR0FBU3ZxRCxTQUFTLElBQU0saUVBQ3hCd3FELEdBQVl4cUQsU0FBUyxJQUFNLDBFQWNqQyxFQVhrQixJQUVkLGdCQUFDLEtBQUQsS0FDRSxnQkFBQyxLQUFELENBQVV1YSxPQUFLLEVBQUNuVCxLQUFLLElBQUlxQixHQUFHLFdBQzVCLGdCQUFDLEtBQUQsQ0FBT3JCLEtBQUssU0FBU3dMLFVBQVcwM0MsSUFDaEMsZ0JBQUMsS0FBRCxDQUFPbGpELEtBQUssVUFBVXdMLFVBQVcyM0MsSUFDakMsZ0JBQUMsS0FBRCxDQUFPbmpELEtBQUssd0JBQXdCd0wsVUFBVzQzQyxLLGVDVnJEMXFELFlBQ0ksZ0JBQUMsS0FBRCxLQUNBLGdCQUFDMnFELEVBQUQsT0FFRTMvQyxTQUFTc0YsY0FBYyxVIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInNsZWFjdC10cy1mcm9udDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKGNvbmRpdGlvbikgcmV0dXJuO1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJsb2FkYWJsZTogXCIgKyBtZXNzYWdlKTtcbiAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxO1xuICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICB0aHJvdyBlcnJvcjtcbn1cbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJsb2FkYWJsZTogXCIgKyBtZXNzYWdlKTtcbn1cblxudmFyIENvbnRleHQgPSAvKiNfX1BVUkVfXyovXG5SZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbnZhciBMT0FEQUJMRV9SRVFVSVJFRF9DSFVOS1NfS0VZID0gJ19fTE9BREFCTEVfUkVRVUlSRURfQ0hVTktTX18nO1xuZnVuY3Rpb24gZ2V0UmVxdWlyZWRDaHVua0tleShuYW1lc3BhY2UpIHtcbiAgcmV0dXJuIFwiXCIgKyBuYW1lc3BhY2UgKyBMT0FEQUJMRV9SRVFVSVJFRF9DSFVOS1NfS0VZO1xufVxuXG52YXIgc2hhcmVkSW50ZXJuYWxzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFJlcXVpcmVkQ2h1bmtLZXk6IGdldFJlcXVpcmVkQ2h1bmtLZXksXG4gIGludmFyaWFudDogaW52YXJpYW50LFxuICBDb250ZXh0OiBDb250ZXh0XG59KTtcblxudmFyIExPQURBQkxFX1NIQVJFRCA9IHtcbiAgaW5pdGlhbENodW5rczoge31cbn07XG5cbnZhciBTVEFUVVNfUEVORElORyA9ICdQRU5ESU5HJztcbnZhciBTVEFUVVNfUkVTT0xWRUQgPSAnUkVTT0xWRUQnO1xudmFyIFNUQVRVU19SRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG5cbmZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3RvcihjdG9yKSB7XG4gIGlmICh0eXBlb2YgY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlQXN5bmM6IGN0b3IsXG4gICAgICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGNodW5rTmFtZTogZnVuY3Rpb24gY2h1bmtOYW1lKCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY3Rvcjtcbn1cblxudmFyIHdpdGhDaHVua0V4dHJhY3RvciA9IGZ1bmN0aW9uIHdpdGhDaHVua0V4dHJhY3RvcihDb21wb25lbnQpIHtcbiAgdmFyIExvYWRhYmxlV2l0aENodW5rRXh0cmFjdG9yID0gZnVuY3Rpb24gTG9hZGFibGVXaXRoQ2h1bmtFeHRyYWN0b3IocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoZXh0cmFjdG9yKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBfX2NodW5rRXh0cmFjdG9yOiBleHRyYWN0b3JcbiAgICAgIH0sIHByb3BzKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKENvbXBvbmVudC5kaXNwbGF5TmFtZSkge1xuICAgIExvYWRhYmxlV2l0aENodW5rRXh0cmFjdG9yLmRpc3BsYXlOYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lICsgXCJXaXRoQ2h1bmtFeHRyYWN0b3JcIjtcbiAgfVxuXG4gIHJldHVybiBMb2FkYWJsZVdpdGhDaHVua0V4dHJhY3Rvcjtcbn07XG5cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIGlkZW50aXR5KHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZShfcmVmKSB7XG4gIHZhciBfcmVmJGRlZmF1bHRSZXNvbHZlQ28gPSBfcmVmLmRlZmF1bHRSZXNvbHZlQ29tcG9uZW50LFxuICAgICAgZGVmYXVsdFJlc29sdmVDb21wb25lbnQgPSBfcmVmJGRlZmF1bHRSZXNvbHZlQ28gPT09IHZvaWQgMCA/IGlkZW50aXR5IDogX3JlZiRkZWZhdWx0UmVzb2x2ZUNvLFxuICAgICAgX3JlbmRlciA9IF9yZWYucmVuZGVyLFxuICAgICAgb25Mb2FkID0gX3JlZi5vbkxvYWQ7XG5cbiAgZnVuY3Rpb24gbG9hZGFibGUobG9hZGFibGVDb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgY3RvciA9IHJlc29sdmVDb25zdHJ1Y3Rvcihsb2FkYWJsZUNvbnN0cnVjdG9yKTtcbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICAvKipcbiAgICAgKiBDYWNoZWtleSByZXByZXNlbnRzIHRoZSBjb21wb25lbnQgdG8gYmUgbG9hZGVkXG4gICAgICogaWYga2V5IGNoYW5nZXMgLSBjb21wb25lbnQgaGFzIHRvIGJlIHJlbG9hZGVkXG4gICAgICogQHBhcmFtIHByb3BzXG4gICAgICogQHJldHVybnMge251bGx8Q29tcG9uZW50fVxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gX2dldENhY2hlS2V5KHByb3BzKSB7XG4gICAgICBpZiAob3B0aW9ucy5jYWNoZUtleSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jYWNoZUtleShwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdG9yLnJlc29sdmUpIHtcbiAgICAgICAgcmV0dXJuIGN0b3IucmVzb2x2ZShwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnc3RhdGljJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgbG9hZGVkIGBtb2R1bGVgIHRvIGEgc3BlY2lmaWMgYENvbXBvbmVudFxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gcHJvcHNcbiAgICAgKiBAcGFyYW0gTG9hZGFibGVcbiAgICAgKiBAcmV0dXJucyBDb21wb25lbnRcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZShtb2R1bGUsIHByb3BzLCBMb2FkYWJsZSkge1xuICAgICAgdmFyIENvbXBvbmVudCA9IG9wdGlvbnMucmVzb2x2ZUNvbXBvbmVudCA/IG9wdGlvbnMucmVzb2x2ZUNvbXBvbmVudChtb2R1bGUsIHByb3BzKSA6IGRlZmF1bHRSZXNvbHZlQ29tcG9uZW50KG1vZHVsZSk7XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc29sdmVDb21wb25lbnQgJiYgIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc29sdmVDb21wb25lbnQgcmV0dXJuZWQgc29tZXRoaW5nIHRoYXQgaXMgbm90IGEgUmVhY3QgY29tcG9uZW50IVwiKTtcbiAgICAgIH1cblxuICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoTG9hZGFibGUsIENvbXBvbmVudCwge1xuICAgICAgICBwcmVsb2FkOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgdmFyIElubmVyTG9hZGFibGUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoSW5uZXJMb2FkYWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgIElubmVyTG9hZGFibGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICB2YXIgY2FjaGVLZXkgPSBfZ2V0Q2FjaGVLZXkocHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjYWNoZUtleTogY2FjaGVLZXksXG4gICAgICAgICAgLy8gY2hhbmdlIG9mIGEga2V5IHRyaWdnZXJzIGxvYWRpbmcgc3RhdGUgYXV0b21hdGljYWxseVxuICAgICAgICAgIGxvYWRpbmc6IHN0YXRlLmxvYWRpbmcgfHwgc3RhdGUuY2FjaGVLZXkgIT09IGNhY2hlS2V5XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gSW5uZXJMb2FkYWJsZShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHJlc3VsdDogbnVsbCxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIGNhY2hlS2V5OiBfZ2V0Q2FjaGVLZXkocHJvcHMpXG4gICAgICAgIH07XG4gICAgICAgIGludmFyaWFudCghcHJvcHMuX19jaHVua0V4dHJhY3RvciB8fCBjdG9yLnJlcXVpcmVTeW5jLCAnU1NSIHJlcXVpcmVzIGBAbG9hZGFibGUvYmFiZWwtcGx1Z2luYCwgcGxlYXNlIGluc3RhbGwgaXQnKTsgLy8gU2VydmVyLXNpZGVcblxuICAgICAgICBpZiAocHJvcHMuX19jaHVua0V4dHJhY3Rvcikge1xuICAgICAgICAgIC8vIFRoaXMgbW9kdWxlIGhhcyBiZWVuIG1hcmtlZCB3aXRoIG5vIFNTUlxuICAgICAgICAgIGlmIChvcHRpb25zLnNzciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICAgICAgICB9IC8vIFdlIHJ1biBsb2FkIGZ1bmN0aW9uLCB3ZSBhc3N1bWUgdGhhdCBpdCB3b24ndCBmYWlsIGFuZCB0aGF0IGl0XG4gICAgICAgICAgLy8gdHJpZ2dlcnMgYSBzeW5jaHJvbm91cyBsb2FkaW5nIG9mIHRoZSBtb2R1bGVcblxuXG4gICAgICAgICAgY3Rvci5yZXF1aXJlQXN5bmMocHJvcHMpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSk7IC8vIFNvIHdlIGNhbiByZXF1aXJlIG5vdyB0aGUgbW9kdWxlIHN5bmNocm9ub3VzbHlcblxuICAgICAgICAgIF90aGlzLmxvYWRTeW5jKCk7XG5cbiAgICAgICAgICBwcm9wcy5fX2NodW5rRXh0cmFjdG9yLmFkZENodW5rKGN0b3IuY2h1bmtOYW1lKHByb3BzKSk7XG5cbiAgICAgICAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgICAgIH0gLy8gQ2xpZW50LXNpZGUgd2l0aCBgaXNSZWFkeWAgbWV0aG9kIHByZXNlbnQgKFNTUiBwcm9iYWJseSlcbiAgICAgICAgLy8gSWYgbW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLCB3ZSB1c2UgYSBzeW5jaHJvbm91cyBsb2FkaW5nXG4gICAgICAgIC8vIE9ubHkgcGVyZm9ybSB0aGlzIHN5bmNocm9ub3VzIGxvYWRpbmcgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90XG4gICAgICAgIC8vIGJlZW4gbWFya2VkIHdpdGggbm8gU1NSLCBlbHNlIHdlIHJpc2sgaHlkcmF0aW9uIG1pc21hdGNoZXNcblxuXG4gICAgICAgIGlmIChvcHRpb25zLnNzciAhPT0gZmFsc2UgJiYgKCAvLyBpcyByZWFkeSAtIHdhcyBsb2FkZWQgaW4gdGhpcyBzZXNzaW9uXG4gICAgICAgIGN0b3IuaXNSZWFkeSAmJiBjdG9yLmlzUmVhZHkocHJvcHMpIHx8IC8vIGlzIHJlYWR5IC0gd2FzIGxvYWRlZCBkdXJpbmcgU1NSIHByb2Nlc3NcbiAgICAgICAgY3Rvci5jaHVua05hbWUgJiYgTE9BREFCTEVfU0hBUkVELmluaXRpYWxDaHVua3NbY3Rvci5jaHVua05hbWUocHJvcHMpXSkpIHtcbiAgICAgICAgICBfdGhpcy5sb2FkU3luYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gSW5uZXJMb2FkYWJsZS5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSB0cnVlOyAvLyByZXRyaWV2ZSBsb2FkaW5nIHByb21pc2UgZnJvbSBhIGdsb2JhbCBjYWNoZVxuXG4gICAgICAgIHZhciBjYWNoZWRQcm9taXNlID0gdGhpcy5nZXRDYWNoZSgpOyAvLyBpZiBwcm9taXNlIGV4aXN0cywgYnV0IHJlamVjdGVkIC0gY2xlYXIgY2FjaGVcblxuICAgICAgICBpZiAoY2FjaGVkUHJvbWlzZSAmJiBjYWNoZWRQcm9taXNlLnN0YXR1cyA9PT0gU1RBVFVTX1JFSkVDVEVEKSB7XG4gICAgICAgICAgdGhpcy5zZXRDYWNoZSgpO1xuICAgICAgICB9IC8vIGNvbXBvbmVudCBtaWdodCBiZSByZXNvbHZlZCBzeW5jaHJvbm91c2x5IGluIHRoZSBjb25zdHJ1Y3RvclxuXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgIHRoaXMubG9hZEFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgLy8gQ29tcG9uZW50IGhhcyB0byBiZSByZWxvYWRlZCBvbiBjYWNoZUtleSBjaGFuZ2VcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5jYWNoZUtleSAhPT0gdGhpcy5zdGF0ZS5jYWNoZUtleSkge1xuICAgICAgICAgIHRoaXMubG9hZEFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiByZXR1cm5zIGEgY2FjaGUga2V5IGZvciB0aGUgY3VycmVudCBwcm9wc1xuICAgICAgICogQHJldHVybnMge0NvbXBvbmVudHxzdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIDtcblxuICAgICAgX3Byb3RvLmdldENhY2hlS2V5ID0gZnVuY3Rpb24gZ2V0Q2FjaGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Q2FjaGVLZXkodGhpcy5wcm9wcyk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIGFjY2VzcyB0aGUgcGVyc2lzdGVudCBjYWNoZVxuICAgICAgICovXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5nZXRDYWNoZSA9IGZ1bmN0aW9uIGdldENhY2hlKCkge1xuICAgICAgICByZXR1cm4gY2FjaGVbdGhpcy5nZXRDYWNoZUtleSgpXTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogc2V0cyB0aGUgY2FjaGUgdmFsdWUuIElmIGNhbGxlZCB3aXRob3V0IHZhbHVlIHNldHMgaXQgYXMgdW5kZWZpbmVkXG4gICAgICAgKi9cbiAgICAgIDtcblxuICAgICAgX3Byb3RvLnNldENhY2hlID0gZnVuY3Rpb24gc2V0Q2FjaGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhY2hlW3RoaXMuZ2V0Q2FjaGVLZXkoKV0gPSB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by50cmlnZ2VyT25Mb2FkID0gZnVuY3Rpb24gdHJpZ2dlck9uTG9hZCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb25Mb2FkKF90aGlzMi5zdGF0ZS5yZXN1bHQsIF90aGlzMi5wcm9wcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogU3luY2hyb25vdXNseSBsb2FkcyBjb21wb25lbnRcbiAgICAgICAqIHRhcmdldCBtb2R1bGUgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1vZHVsZSBjYWNoZVxuICAgICAgICogb3IgYmUgY2FwYWJsZSB0byByZXNvbHZlIHN5bmNocm9ub3VzbHkgKHdlYnBhY2sgdGFyZ2V0PW5vZGUpXG4gICAgICAgKi9cbiAgICAgIDtcblxuICAgICAgX3Byb3RvLmxvYWRTeW5jID0gZnVuY3Rpb24gbG9hZFN5bmMoKSB7XG4gICAgICAgIC8vIGxvYWQgc3luYyBpcyBleHBlY3RpbmcgY29tcG9uZW50IHRvIGJlIGluIHRoZSBcImxvYWRpbmdcIiBzdGF0ZSBhbHJlYWR5XG4gICAgICAgIC8vIHNvdW5kcyB3ZWlyZCwgYnV0IGxvYWRpbmc9dHJ1ZSBpcyB0aGUgaW5pdGlhbCBzdGF0ZSBvZiBJbm5lckxvYWRhYmxlXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkaW5nKSByZXR1cm47XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgbG9hZGVkTW9kdWxlID0gY3Rvci5yZXF1aXJlU3luYyh0aGlzLnByb3BzKTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzb2x2ZShsb2FkZWRNb2R1bGUsIHRoaXMucHJvcHMsIExvYWRhYmxlKTtcbiAgICAgICAgICB0aGlzLnN0YXRlLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdsb2FkYWJsZS1jb21wb25lbnRzOiBmYWlsZWQgdG8gc3luY2hyb25vdXNseSBsb2FkIGNvbXBvbmVudCwgd2hpY2ggZXhwZWN0ZWQgdG8gYmUgYXZhaWxhYmxlJywge1xuICAgICAgICAgICAgZmlsZU5hbWU6IGN0b3IucmVzb2x2ZSh0aGlzLnByb3BzKSxcbiAgICAgICAgICAgIGNodW5rTmFtZTogY3Rvci5jaHVua05hbWUodGhpcy5wcm9wcyksXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgPyBlcnJvci5tZXNzYWdlIDogZXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQXN5bmNocm9ub3VzbHkgbG9hZHMgYSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIDtcblxuICAgICAgX3Byb3RvLmxvYWRBc3luYyA9IGZ1bmN0aW9uIGxvYWRBc3luYygpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnJlc29sdmVBc3luYygpO1xuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGxvYWRlZE1vZHVsZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSByZXNvbHZlKGxvYWRlZE1vZHVsZSwgX3RoaXMzLnByb3BzLCB7XG4gICAgICAgICAgICBMb2FkYWJsZTogTG9hZGFibGVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMudHJpZ2dlck9uTG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQXN5bmNocm9ub3VzbHkgcmVzb2x2ZXMobm90IGxvYWRzKSBhIGNvbXBvbmVudC5cbiAgICAgICAqIE5vdGUgLSB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90IGNoYW5nZSB0aGUgc3RhdGVcbiAgICAgICAqL1xuICAgICAgO1xuXG4gICAgICBfcHJvdG8ucmVzb2x2ZUFzeW5jID0gZnVuY3Rpb24gcmVzb2x2ZUFzeW5jKCkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgX19jaHVua0V4dHJhY3RvciA9IF90aGlzJHByb3BzLl9fY2h1bmtFeHRyYWN0b3IsXG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYgPSBfdGhpcyRwcm9wcy5mb3J3YXJkZWRSZWYsXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJfX2NodW5rRXh0cmFjdG9yXCIsIFwiZm9yd2FyZGVkUmVmXCJdKTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuZ2V0Q2FjaGUoKTtcblxuICAgICAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgICBwcm9taXNlID0gY3Rvci5yZXF1aXJlQXN5bmMocHJvcHMpO1xuICAgICAgICAgIHByb21pc2Uuc3RhdHVzID0gU1RBVFVTX1BFTkRJTkc7XG4gICAgICAgICAgdGhpcy5zZXRDYWNoZShwcm9taXNlKTtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvbWlzZS5zdGF0dXMgPSBTVEFUVVNfUkVTT0xWRUQ7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsb2FkYWJsZS1jb21wb25lbnRzOiBmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgbG9hZCBjb21wb25lbnQnLCB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBjdG9yLnJlc29sdmUoX3RoaXM0LnByb3BzKSxcbiAgICAgICAgICAgICAgY2h1bmtOYW1lOiBjdG9yLmNodW5rTmFtZShfdGhpczQucHJvcHMpLFxuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IgPyBlcnJvci5tZXNzYWdlIDogZXJyb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvbWlzZS5zdGF0dXMgPSBTVEFUVVNfUkVKRUNURUQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZm9yd2FyZGVkUmVmID0gX3RoaXMkcHJvcHMyLmZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHByb3BGYWxsYmFjayA9IF90aGlzJHByb3BzMi5mYWxsYmFjayxcbiAgICAgICAgICAgIF9fY2h1bmtFeHRyYWN0b3IgPSBfdGhpcyRwcm9wczIuX19jaHVua0V4dHJhY3RvcixcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJmb3J3YXJkZWRSZWZcIiwgXCJmYWxsYmFja1wiLCBcIl9fY2h1bmtFeHRyYWN0b3JcIl0pO1xuXG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBlcnJvciA9IF90aGlzJHN0YXRlLmVycm9yLFxuICAgICAgICAgICAgbG9hZGluZyA9IF90aGlzJHN0YXRlLmxvYWRpbmcsXG4gICAgICAgICAgICByZXN1bHQgPSBfdGhpcyRzdGF0ZS5yZXN1bHQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICB2YXIgY2FjaGVkUHJvbWlzZSA9IHRoaXMuZ2V0Q2FjaGUoKSB8fCB0aGlzLmxvYWRBc3luYygpO1xuXG4gICAgICAgICAgaWYgKGNhY2hlZFByb21pc2Uuc3RhdHVzID09PSBTVEFUVVNfUEVORElORykge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5sb2FkQXN5bmMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmYWxsYmFjayA9IHByb3BGYWxsYmFjayB8fCBvcHRpb25zLmZhbGxiYWNrIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlbmRlcih7XG4gICAgICAgICAgZmFsbGJhY2s6IGZhbGxiYWNrLFxuICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgcHJvcHM6IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWZcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBJbm5lckxvYWRhYmxlO1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgIHZhciBFbmhhbmNlZElubmVyTG9hZGFibGUgPSB3aXRoQ2h1bmtFeHRyYWN0b3IoSW5uZXJMb2FkYWJsZSk7XG4gICAgdmFyIExvYWRhYmxlID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW5oYW5jZWRJbm5lckxvYWRhYmxlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZm9yd2FyZGVkUmVmOiByZWZcbiAgICAgIH0sIHByb3BzKSk7XG4gICAgfSk7XG4gICAgTG9hZGFibGUuZGlzcGxheU5hbWUgPSAnTG9hZGFibGUnOyAvLyBJbiBmdXR1cmUsIHByZWxvYWQgY291bGQgdXNlIGA8bGluayByZWw9XCJwcmVsb2FkXCI+YFxuXG4gICAgTG9hZGFibGUucHJlbG9hZCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgY3Rvci5yZXF1aXJlQXN5bmMocHJvcHMpO1xuICAgIH07XG5cbiAgICBMb2FkYWJsZS5sb2FkID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICByZXR1cm4gY3Rvci5yZXF1aXJlQXN5bmMocHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTG9hZGFibGU7XG4gIH1cblxuICBmdW5jdGlvbiBsYXp5KGN0b3IsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbG9hZGFibGUoY3RvciwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHN1c3BlbnNlOiB0cnVlXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkYWJsZTogbG9hZGFibGUsXG4gICAgbGF6eTogbGF6eVxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UmVzb2x2ZUNvbXBvbmVudChsb2FkZWRNb2R1bGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gIHJldHVybiBsb2FkZWRNb2R1bGUuX19lc01vZHVsZSA/IGxvYWRlZE1vZHVsZVtcImRlZmF1bHRcIl0gOiBsb2FkZWRNb2R1bGVbXCJkZWZhdWx0XCJdIHx8IGxvYWRlZE1vZHVsZTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cblxudmFyIF9jcmVhdGVMb2FkYWJsZSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVMb2FkYWJsZSh7XG4gIGRlZmF1bHRSZXNvbHZlQ29tcG9uZW50OiBkZWZhdWx0UmVzb2x2ZUNvbXBvbmVudCxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgIHZhciBDb21wb25lbnQgPSBfcmVmLnJlc3VsdCxcbiAgICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMpO1xuICB9XG59KSxcbiAgICBsb2FkYWJsZSA9IF9jcmVhdGVMb2FkYWJsZS5sb2FkYWJsZSxcbiAgICBsYXp5ID0gX2NyZWF0ZUxvYWRhYmxlLmxhenk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCByZWFjdC9uby1tdWx0aS1jb21wICovXG5cbnZhciBfY3JlYXRlTG9hZGFibGUkMSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVMb2FkYWJsZSh7XG4gIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKHJlc3VsdCwgcHJvcHMpIHtcbiAgICBpZiAocmVzdWx0ICYmIHByb3BzLmZvcndhcmRlZFJlZikge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcy5mb3J3YXJkZWRSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcHMuZm9yd2FyZGVkUmVmKHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5mb3J3YXJkZWRSZWYuY3VycmVudCA9IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3JlZi5yZXN1bHQsXG4gICAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIGlmIChwcm9wcy5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pLFxuICAgIGxvYWRhYmxlJDEgPSBfY3JlYXRlTG9hZGFibGUkMS5sb2FkYWJsZSxcbiAgICBsYXp5JDEgPSBfY3JlYXRlTG9hZGFibGUkMS5sYXp5O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgY2FtZWxjYXNlICovXG52YXIgQlJPV1NFUiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbG9hZGFibGVSZWFkeShkb25lLCBfdGVtcCkge1xuICBpZiAoZG9uZSA9PT0gdm9pZCAwKSB7XG4gICAgZG9uZSA9IGZ1bmN0aW9uIGRvbmUoKSB7fTtcbiAgfVxuXG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJG5hbWVzcGFjZSA9IF9yZWYubmFtZXNwYWNlLFxuICAgICAgbmFtZXNwYWNlID0gX3JlZiRuYW1lc3BhY2UgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRuYW1lc3BhY2UsXG4gICAgICBfcmVmJGNodW5rTG9hZGluZ0dsb2IgPSBfcmVmLmNodW5rTG9hZGluZ0dsb2JhbCxcbiAgICAgIGNodW5rTG9hZGluZ0dsb2JhbCA9IF9yZWYkY2h1bmtMb2FkaW5nR2xvYiA9PT0gdm9pZCAwID8gJ19fTE9BREFCTEVfTE9BREVEX0NIVU5LU19fJyA6IF9yZWYkY2h1bmtMb2FkaW5nR2xvYjtcblxuICBpZiAoIUJST1dTRVIpIHtcbiAgICB3YXJuKCdgbG9hZGFibGVSZWFkeSgpYCBtdXN0IGJlIGNhbGxlZCBpbiBicm93c2VyIG9ubHknKTtcbiAgICBkb25lKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgdmFyIHJlcXVpcmVkQ2h1bmtzID0gbnVsbDtcblxuICBpZiAoQlJPV1NFUikge1xuICAgIHZhciBpZCA9IGdldFJlcXVpcmVkQ2h1bmtLZXkobmFtZXNwYWNlKTtcbiAgICB2YXIgZGF0YUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICBpZiAoZGF0YUVsZW1lbnQpIHtcbiAgICAgIHJlcXVpcmVkQ2h1bmtzID0gSlNPTi5wYXJzZShkYXRhRWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICB2YXIgZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJfZXh0XCIpO1xuXG4gICAgICBpZiAoZXh0RWxlbWVudCkge1xuICAgICAgICB2YXIgX0pTT04kcGFyc2UgPSBKU09OLnBhcnNlKGV4dEVsZW1lbnQudGV4dENvbnRlbnQpLFxuICAgICAgICAgICAgbmFtZWRDaHVua3MgPSBfSlNPTiRwYXJzZS5uYW1lZENodW5rcztcblxuICAgICAgICBuYW1lZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua05hbWUpIHtcbiAgICAgICAgICBMT0FEQUJMRV9TSEFSRUQuaW5pdGlhbENodW5rc1tjaHVua05hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2ZXJzaW9uIG1pc21hdGNoXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9hZGFibGUtY29tcG9uZW50OiBAbG9hZGFibGUvc2VydmVyIGRvZXMgbm90IG1hdGNoIEBsb2FkYWJsZS9jb21wb25lbnQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXJlcXVpcmVkQ2h1bmtzKSB7XG4gICAgd2FybignYGxvYWRhYmxlUmVhZHkoKWAgcmVxdWlyZXMgc3RhdGUsIHBsZWFzZSB1c2UgYGdldFNjcmlwdFRhZ3NgIG9yIGBnZXRTY3JpcHRFbGVtZW50c2Agc2VydmVyLXNpZGUnKTtcbiAgICBkb25lKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHdpbmRvd1tjaHVua0xvYWRpbmdHbG9iYWxdID0gd2luZG93W2NodW5rTG9hZGluZ0dsb2JhbF0gfHwgW107XG4gICAgdmFyIGxvYWRlZENodW5rcyA9IHdpbmRvd1tjaHVua0xvYWRpbmdHbG9iYWxdO1xuICAgIHZhciBvcmlnaW5hbFB1c2ggPSBsb2FkZWRDaHVua3MucHVzaC5iaW5kKGxvYWRlZENodW5rcyk7XG5cbiAgICBmdW5jdGlvbiBjaGVja1JlYWR5U3RhdGUoKSB7XG4gICAgICBpZiAocmVxdWlyZWRDaHVua3MuZXZlcnkoZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgIHJldHVybiBsb2FkZWRDaHVua3Muc29tZShmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgY2h1bmtzID0gX3JlZjJbMF07XG4gICAgICAgICAgcmV0dXJuIGNodW5rcy5pbmRleE9mKGNodW5rKSA+IC0xO1xuICAgICAgICB9KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9hZGVkQ2h1bmtzLnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvcmlnaW5hbFB1c2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgY2hlY2tSZWFkeVN0YXRlKCk7XG4gICAgfTtcblxuICAgIGNoZWNrUmVhZHlTdGF0ZSgpO1xuICB9KS50aGVuKGRvbmUpO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xudmFyIGxvYWRhYmxlJDIgPSBsb2FkYWJsZTtcbmxvYWRhYmxlJDIubGliID0gbG9hZGFibGUkMTtcbnZhciBsYXp5JDIgPSBsYXp5O1xubGF6eSQyLmxpYiA9IGxhenkkMTtcbnZhciBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IHNoYXJlZEludGVybmFscztcblxuZXhwb3J0IGRlZmF1bHQgbG9hZGFibGUkMjtcbmV4cG9ydCB7IF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELCBsYXp5JDIgYXMgbGF6eSwgbG9hZGFibGVSZWFkeSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvLCBmcm9tKSB7XG4gIGlmIChmcm9tID09PSB1bmRlZmluZWQpIGZyb20gPSAnJztcblxuICB2YXIgdG9QYXJ0cyA9ICh0byAmJiB0by5zcGxpdCgnLycpKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IChmcm9tICYmIGZyb20uc3BsaXQoJy8nKSkgfHwgW107XG5cbiAgdmFyIGlzVG9BYnMgPSB0byAmJiBpc0Fic29sdXRlKHRvKTtcbiAgdmFyIGlzRnJvbUFicyA9IGZyb20gJiYgaXNBYnNvbHV0ZShmcm9tKTtcbiAgdmFyIG11c3RFbmRBYnMgPSBpc1RvQWJzIHx8IGlzRnJvbUFicztcblxuICBpZiAodG8gJiYgaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAvLyB0byBpcyBhYnNvbHV0ZVxuICAgIGZyb21QYXJ0cyA9IHRvUGFydHM7XG4gIH0gZWxzZSBpZiAodG9QYXJ0cy5sZW5ndGgpIHtcbiAgICAvLyB0byBpcyByZWxhdGl2ZSwgZHJvcCB0aGUgZmlsZW5hbWVcbiAgICBmcm9tUGFydHMucG9wKCk7XG4gICAgZnJvbVBhcnRzID0gZnJvbVBhcnRzLmNvbmNhdCh0b1BhcnRzKTtcbiAgfVxuXG4gIGlmICghZnJvbVBhcnRzLmxlbmd0aCkgcmV0dXJuICcvJztcblxuICB2YXIgaGFzVHJhaWxpbmdTbGFzaDtcbiAgaWYgKGZyb21QYXJ0cy5sZW5ndGgpIHtcbiAgICB2YXIgbGFzdCA9IGZyb21QYXJ0c1tmcm9tUGFydHMubGVuZ3RoIC0gMV07XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nIHx8IGxhc3QgPT09ICcnO1xuICB9IGVsc2Uge1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBmcm9tUGFydHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBwYXJ0ID0gZnJvbVBhcnRzW2ldO1xuXG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbXVzdEVuZEFicykgZm9yICg7IHVwLS07IHVwKSBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcblxuICBpZiAoXG4gICAgbXVzdEVuZEFicyAmJlxuICAgIGZyb21QYXJ0c1swXSAhPT0gJycgJiZcbiAgICAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKVxuICApXG4gICAgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuIiwiZnVuY3Rpb24gdmFsdWVPZihvYmopIHtcbiAgcmV0dXJuIG9iai52YWx1ZU9mID8gb2JqLnZhbHVlT2YoKSA6IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZi5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWwoYSwgYikge1xuICAvLyBUZXN0IGZvciBzdHJpY3QgZXF1YWxpdHkgZmlyc3QuXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBPdGhlcndpc2UsIGlmIGVpdGhlciBvZiB0aGVtID09IG51bGwgdGhleSBhcmUgbm90IGVxdWFsLlxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJlxuICAgICAgYS5ldmVyeShmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gdmFsdWVFcXVhbChpdGVtLCBiW2luZGV4XSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBhVmFsdWUgPSB2YWx1ZU9mKGEpO1xuICAgIHZhciBiVmFsdWUgPSB2YWx1ZU9mKGIpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCBhLCBiKSkuZXZlcnkoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdmFsdWVFcXVhbChhW2tleV0sIGJba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbHVlRXF1YWw7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgcmVzb2x2ZVBhdGhuYW1lIGZyb20gJ3Jlc29sdmUtcGF0aG5hbWUnO1xuaW1wb3J0IHZhbHVlRXF1YWwgZnJvbSAndmFsdWUtZXF1YWwnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoO1xufVxuZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gcGF0aC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocHJlZml4LnRvTG93ZXJDYXNlKCkpID09PSAwICYmICcvPyMnLmluZGV4T2YocGF0aC5jaGFyQXQocHJlZml4Lmxlbmd0aCkpICE9PSAtMTtcbn1cbmZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xufVxuZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IHBhdGggfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG5cbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcblxuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCA9PT0gJz8nID8gJycgOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCA9PT0gJyMnID8gJycgOiBoYXNoXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLFxuICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gIHZhciBwYXRoID0gcGF0aG5hbWUgfHwgJy8nO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gJz8nKSBwYXRoICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09ICc/JyA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuICBpZiAoaGFzaCAmJiBoYXNoICE9PSAnIycpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09ICcjJyA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4gIHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uO1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUd28tYXJnIGZvcm06IHB1c2gocGF0aCwgc3RhdGUpXG4gICAgbG9jYXRpb24gPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPbmUtYXJnIGZvcm06IHB1c2gobG9jYXRpb24pXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGF0aCk7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnBhdGhuYW1lID0gJyc7XG5cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBsb2NhdGlvbi5zZWFyY2ggPSAnPycgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLnNlYXJjaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgbG9jYXRpb24uaGFzaCA9ICcjJyArIGxvY2F0aW9uLmhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGRlY29kZVVSSShsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVSSUVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVVJJRXJyb3IoJ1BhdGhuYW1lIFwiJyArIGxvY2F0aW9uLnBhdGhuYW1lICsgJ1wiIGNvdWxkIG5vdCBiZSBkZWNvZGVkLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBhbiBpbnZhbGlkIHBlcmNlbnQtZW5jb2RpbmcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSkgbG9jYXRpb24ua2V5ID0ga2V5O1xuXG4gIGlmIChjdXJyZW50TG9jYXRpb24pIHtcbiAgICAvLyBSZXNvbHZlIGluY29tcGxldGUvcmVsYXRpdmUgcGF0aG5hbWUgcmVsYXRpdmUgdG8gY3VycmVudCBsb2NhdGlvbi5cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IHJlc29sdmVQYXRobmFtZShsb2NhdGlvbi5wYXRobmFtZSwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoID09PSBiLmhhc2ggJiYgYS5rZXkgPT09IGIua2V5ICYmIHZhbHVlRXF1YWwoYS5zdGF0ZSwgYi5zdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCkge1xuICB2YXIgcHJvbXB0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBzZXRQcm9tcHQobmV4dFByb21wdCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcocHJvbXB0ID09IG51bGwsICdBIGhpc3Rvcnkgc3VwcG9ydHMgb25seSBvbmUgcHJvbXB0IGF0IGEgdGltZScpIDogdm9pZCAwO1xuICAgIHByb21wdCA9IG5leHRQcm9tcHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKSA6IHZvaWQgMDtcbiAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGZyb20gYSB0cmFuc2l0aW9uIGhvb2sgdG8gY2FuY2VsIHRoZSB0cmFuc2l0aW9uLlxuICAgICAgICBjYWxsYmFjayhyZXN1bHQgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQcm9tcHQ6IHNldFByb21wdCxcbiAgICBjb25maXJtVHJhbnNpdGlvblRvOiBjb25maXJtVHJhbnNpdGlvblRvLFxuICAgIGFwcGVuZExpc3RlbmVyOiBhcHBlbmRMaXN0ZW5lcixcbiAgICBub3RpZnlMaXN0ZW5lcnM6IG5vdGlmeUxpc3RlbmVyc1xuICB9O1xufVxuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGdldENvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYWxlcnRcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGJyb3dzZXIgZmlyZXMgcG9wc3RhdGUgb24gaGFzaCBjaGFuZ2UuXG4gKiBJRTEwIGFuZCBJRTExIGRvIG5vdC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID09PSAtMTtcbn1cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gcG9wc3RhdGUgZXZlbnQgaXMgYW4gZXh0cmFuZW91cyBXZWJLaXQgZXZlbnQuXG4gKiBBY2NvdW50cyBmb3IgdGhlIGZhY3QgdGhhdCBDaHJvbWUgb24gaU9TIGZpcmVzIHJlYWwgcG9wc3RhdGUgZXZlbnRzXG4gKiBjb250YWluaW5nIHVuZGVmaW5lZCBzdGF0ZSB3aGVuIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbi5cbiAqL1xuXG5mdW5jdGlvbiBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbmZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gICFjYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Vc2VIaXN0b3J5ID0gc3VwcG9ydHNIaXN0b3J5KCk7XG4gIHZhciBuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciA9ICFzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCk7XG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIF9wcm9wcyRmb3JjZVJlZnJlc2ggPSBfcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB2b2lkIDAgPyBnZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gX3Byb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHZvaWQgMCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/IHN0cmlwVHJhaWxpbmdTbGFzaChhZGRMZWFkaW5nU2xhc2gocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHBhdGggPSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghYmFzZW5hbWUgfHwgaGFzQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKSA6IHZvaWQgMDtcbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSBzdHJpcEJhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuICAgIGlmIChpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSkgcmV0dXJuO1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpKTtcbiAgfVxuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjsgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBrZXlzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIGtleXMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsS2V5cy5pbmRleE9mKHRvTG9jYXRpb24ua2V5KTtcbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuICAgIHZhciBmcm9tSW5kZXggPSBhbGxLZXlzLmluZGV4T2YoZnJvbUxvY2F0aW9uLmtleSk7XG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpO1xuICB2YXIgYWxsS2V5cyA9IFtpbml0aWFsTG9jYXRpb24ua2V5XTsgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggKyAxKTtcbiAgICAgICAgICBuZXh0S2V5cy5wdXNoKGxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgYWxsS2V5cyA9IG5leHRLZXlzO1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKSA6IHZvaWQgMDtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpIDogdm9pZCAwO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSAmJiBkZWx0YSA9PT0gMSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxudmFyIEhhc2hDaGFuZ2VFdmVudCQxID0gJ2hhc2hjaGFuZ2UnO1xudmFyIEhhc2hQYXRoQ29kZXJzID0ge1xuICBoYXNoYmFuZzoge1xuICAgIGVuY29kZVBhdGg6IGZ1bmN0aW9uIGVuY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoIDogJyEvJyArIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpO1xuICAgIH0sXG4gICAgZGVjb2RlUGF0aDogZnVuY3Rpb24gZGVjb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbiAgICB9XG4gIH0sXG4gIG5vc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBzdHJpcExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2hcbiAgfSxcbiAgc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogYWRkTGVhZGluZ1NsYXNoXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0cmlwSGFzaCh1cmwpIHtcbiAgdmFyIGhhc2hJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBoYXNoSW5kZXggPT09IC0xID8gdXJsIDogdXJsLnNsaWNlKDAsIGhhc2hJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBoYXNoSW5kZXggPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGhhc2hJbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc3Vic3RyaW5nKGhhc2hJbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHN0cmlwSGFzaCh3aW5kb3cubG9jYXRpb24uaHJlZikgKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgIWNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhbkdvV2l0aG91dFJlbG9hZCA9IHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCk7XG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdm9pZCAwID8gZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGhhc2hUeXBlID0gX3Byb3BzLmhhc2hUeXBlLFxuICAgICAgaGFzaFR5cGUgPSBfcHJvcHMkaGFzaFR5cGUgPT09IHZvaWQgMCA/ICdzbGFzaCcgOiBfcHJvcHMkaGFzaFR5cGU7XG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG4gIHZhciBfSGFzaFBhdGhDb2RlcnMkaGFzaFQgPSBIYXNoUGF0aENvZGVyc1toYXNoVHlwZV0sXG4gICAgICBlbmNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmVuY29kZVBhdGgsXG4gICAgICBkZWNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmRlY29kZVBhdGg7XG5cbiAgZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBkZWNvZGVQYXRoKGdldEhhc2hQYXRoKCkpO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIWJhc2VuYW1lIHx8IGhhc0Jhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJykgOiB2b2lkIDA7XG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gc3RyaXBCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKHBhdGgpO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICB2YXIgaWdub3JlUGF0aCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwkJDEoYSwgYikge1xuICAgIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG5cbiAgICBpZiAocGF0aCAhPT0gZW5jb2RlZFBhdGgpIHtcbiAgICAgIC8vIEVuc3VyZSB3ZSBhbHdheXMgaGF2ZSBhIHByb3Blcmx5LWVuY29kZWQgaGFzaC5cbiAgICAgIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gICAgICB2YXIgcHJldkxvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcbiAgICAgIGlmICghZm9yY2VOZXh0UG9wICYmIGxvY2F0aW9uc0FyZUVxdWFsJCQxKHByZXZMb2NhdGlvbiwgbG9jYXRpb24pKSByZXR1cm47IC8vIEEgaGFzaGNoYW5nZSBkb2Vzbid0IGFsd2F5cyA9PSBsb2NhdGlvbiBjaGFuZ2UuXG5cbiAgICAgIGlmIChpZ25vcmVQYXRoID09PSBjcmVhdGVQYXRoKGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBJZ25vcmUgdGhpcyBjaGFuZ2U7IHdlIGFscmVhZHkgc2V0U3RhdGUgaW4gcHVzaC9yZXBsYWNlLlxuXG4gICAgICBpZ25vcmVQYXRoID0gbnVsbDtcbiAgICAgIGhhbmRsZVBvcChsb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247IC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2YgcGF0aHMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3IgcGF0aHMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoY3JlYXRlUGF0aCh0b0xvY2F0aW9uKSk7XG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoY3JlYXRlUGF0aChmcm9tTG9jYXRpb24pKTtcbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfSAvLyBFbnN1cmUgdGhlIGhhc2ggaXMgZW5jb2RlZCBwcm9wZXJseSBiZWZvcmUgZG9pbmcgYW55dGhpbmcgZWxzZS5cblxuXG4gIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChwYXRoKTtcbiAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oKTtcbiAgdmFyIGFsbFBhdGhzID0gW2NyZWF0ZVBhdGgoaW5pdGlhbExvY2F0aW9uKV07IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJyk7XG4gICAgdmFyIGhyZWYgPSAnJztcblxuICAgIGlmIChiYXNlVGFnICYmIGJhc2VUYWcuZ2V0QXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgIGhyZWYgPSBzdHJpcEhhc2god2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIH1cblxuICAgIHJldHVybiBocmVmICsgJyMnICsgZW5jb2RlUGF0aChiYXNlbmFtZSArIGNyZWF0ZVBhdGgobG9jYXRpb24pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBQVVNILCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICBwdXNoSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoY3JlYXRlUGF0aChoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICAgIHZhciBuZXh0UGF0aHMgPSBhbGxQYXRocy5zbGljZSgwLCBwcmV2SW5kZXggKyAxKTtcbiAgICAgICAgbmV4dFBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgIGFsbFBhdGhzID0gbmV4dFBhdGhzO1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgUFVTSCB0aGUgc2FtZSBwYXRoOyBhIG5ldyBlbnRyeSB3aWxsIG5vdCBiZSBhZGRlZCB0byB0aGUgaGlzdG9yeSBzdGFjaycpIDogdm9pZCAwO1xuICAgICAgICBzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChiYXNlbmFtZSArIHBhdGgpO1xuICAgICAgdmFyIGhhc2hDaGFuZ2VkID0gZ2V0SGFzaFBhdGgoKSAhPT0gZW5jb2RlZFBhdGg7XG5cbiAgICAgIGlmIChoYXNoQ2hhbmdlZCkge1xuICAgICAgICAvLyBXZSBjYW5ub3QgdGVsbCBpZiBhIGhhc2hjaGFuZ2Ugd2FzIGNhdXNlZCBieSBhIFJFUExBQ0UsIHNvIHdlJ2RcbiAgICAgICAgLy8gcmF0aGVyIHNldFN0YXRlIGhlcmUgYW5kIGlnbm9yZSB0aGUgaGFzaGNoYW5nZS4gVGhlIGNhdmVhdCBoZXJlXG4gICAgICAgIC8vIGlzIHRoYXQgb3RoZXIgaGFzaCBoaXN0b3JpZXMgaW4gdGhlIHBhZ2Ugd2lsbCBjb25zaWRlciBpdCBhIFBPUC5cbiAgICAgICAgaWdub3JlUGF0aCA9IHBhdGg7XG4gICAgICAgIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5pbmRleE9mKGNyZWF0ZVBhdGgoaGlzdG9yeS5sb2NhdGlvbikpO1xuICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbFBhdGhzW3ByZXZJbmRleF0gPSBwYXRoO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGNhbkdvV2l0aG91dFJlbG9hZCwgJ0hhc2ggaGlzdG9yeSBnbyhuKSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkIGluIHRoaXMgYnJvd3NlcicpIDogdm9pZCAwO1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxICYmIGRlbHRhID09PSAxKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQkMSwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQkMSwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGJsb2NrKHByb21wdCkge1xuICAgIGlmIChwcm9tcHQgPT09IHZvaWQgMCkge1xuICAgICAgcHJvbXB0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5mdW5jdGlvbiBjbGFtcChuLCBsb3dlckJvdW5kLCB1cHBlckJvdW5kKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBsb3dlckJvdW5kKSwgdXBwZXJCb3VuZCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHN0b3JlcyBsb2NhdGlvbnMgaW4gbWVtb3J5LlxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShwcm9wcykge1xuICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHByb3BzID0ge307XG4gIH1cblxuICB2YXIgX3Byb3BzID0gcHJvcHMsXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBfcHJvcHMkaW5pdGlhbEVudHJpZXMgPSBfcHJvcHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsRW50cmllcyA9IF9wcm9wcyRpbml0aWFsRW50cmllcyA9PT0gdm9pZCAwID8gWycvJ10gOiBfcHJvcHMkaW5pdGlhbEVudHJpZXMsXG4gICAgICBfcHJvcHMkaW5pdGlhbEluZGV4ID0gX3Byb3BzLmluaXRpYWxJbmRleCxcbiAgICAgIGluaXRpYWxJbmRleCA9IF9wcm9wcyRpbml0aWFsSW5kZXggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkaW5pdGlhbEluZGV4LFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IF9wcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB2b2lkIDAgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBoaXN0b3J5LmVudHJpZXMubGVuZ3RoO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9XG5cbiAgdmFyIGluZGV4ID0gY2xhbXAoaW5pdGlhbEluZGV4LCAwLCBpbml0aWFsRW50cmllcy5sZW5ndGggLSAxKTtcbiAgdmFyIGVudHJpZXMgPSBpbml0aWFsRW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycgPyBjcmVhdGVMb2NhdGlvbihlbnRyeSwgdW5kZWZpbmVkLCBjcmVhdGVLZXkoKSkgOiBjcmVhdGVMb2NhdGlvbihlbnRyeSwgdW5kZWZpbmVkLCBlbnRyeS5rZXkgfHwgY3JlYXRlS2V5KCkpO1xuICB9KTsgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gY3JlYXRlUGF0aDtcblxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHByZXZJbmRleCA9IGhpc3RvcnkuaW5kZXg7XG4gICAgICB2YXIgbmV4dEluZGV4ID0gcHJldkluZGV4ICsgMTtcbiAgICAgIHZhciBuZXh0RW50cmllcyA9IGhpc3RvcnkuZW50cmllcy5zbGljZSgwKTtcblxuICAgICAgaWYgKG5leHRFbnRyaWVzLmxlbmd0aCA+IG5leHRJbmRleCkge1xuICAgICAgICBuZXh0RW50cmllcy5zcGxpY2UobmV4dEluZGV4LCBuZXh0RW50cmllcy5sZW5ndGggLSBuZXh0SW5kZXgsIGxvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRFbnRyaWVzLnB1c2gobG9jYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgIGluZGV4OiBuZXh0SW5kZXgsXG4gICAgICAgIGVudHJpZXM6IG5leHRFbnRyaWVzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICBoaXN0b3J5LmVudHJpZXNbaGlzdG9yeS5pbmRleF0gPSBsb2NhdGlvbjtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhuKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IGNsYW1wKGhpc3RvcnkuaW5kZXggKyBuLCAwLCBoaXN0b3J5LmVudHJpZXMubGVuZ3RoIC0gMSk7XG4gICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgIHZhciBsb2NhdGlvbiA9IGhpc3RvcnkuZW50cmllc1tuZXh0SW5kZXhdO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAob2spIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBpbmRleDogbmV4dEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWltaWMgdGhlIGJlaGF2aW9yIG9mIERPTSBoaXN0b3JpZXMgYnlcbiAgICAgICAgLy8gY2F1c2luZyBhIHJlbmRlciBhZnRlciBhIGNhbmNlbGxlZCBQT1AuXG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuR28obikge1xuICAgIHZhciBuZXh0SW5kZXggPSBoaXN0b3J5LmluZGV4ICsgbjtcbiAgICByZXR1cm4gbmV4dEluZGV4ID49IDAgJiYgbmV4dEluZGV4IDwgaGlzdG9yeS5lbnRyaWVzLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsb2NrKHByb21wdCkge1xuICAgIGlmIChwcm9tcHQgPT09IHZvaWQgMCkge1xuICAgICAgcHJvbXB0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZW50cmllcy5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogZW50cmllc1tpbmRleF0sXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGNhbkdvOiBjYW5HbyxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgY3JlYXRlTG9jYXRpb24sIGxvY2F0aW9uc0FyZUVxdWFsLCBwYXJzZVBhdGgsIGNyZWF0ZVBhdGggfTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsInZhciBpc2FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhUb1JlZ2V4cFxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGVcbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJywgZmxhZ3Mob3B0aW9ucykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge31cbiAgICB2YXIgZW5jb2RlID0gb3B0aW9ucy5wcmV0dHkgPyBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgOiBlbmNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICdgJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSlcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzXG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLG09cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscj1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIHkoYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9aWYoIWFhKXRocm93IEVycm9yKHkoMjI3KSk7dmFyIGJhPW5ldyBTZXQsY2E9e307ZnVuY3Rpb24gZGEoYSxiKXtlYShhLGIpO2VhKGErXCJDYXB0dXJlXCIsYil9XG5mdW5jdGlvbiBlYShhLGIpe2NhW2FdPWI7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyliYS5hZGQoYlthXSl9XG52YXIgZmE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpLGhhPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxpYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuamE9e30sa2E9e307ZnVuY3Rpb24gbGEoYSl7aWYoaWEuY2FsbChrYSxhKSlyZXR1cm4hMDtpZihpYS5jYWxsKGphLGEpKXJldHVybiExO2lmKGhhLnRlc3QoYSkpcmV0dXJuIGthW2FdPSEwO2phW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIG1hKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gbmEoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8bWEoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBCKGEsYixjLGQsZSxmLGcpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWI7dGhpcy5zYW5pdGl6ZVVSTD1mO3RoaXMucmVtb3ZlRW1wdHlTdHJpbmc9Z312YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDAsITEsYSxudWxsLCExLCExKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBCKGIsMSwhMSxhWzFdLG51bGwsITEsITEpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYSxudWxsLCExLCExKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGRpc2FibGVSZW1vdGVQbGF5YmFjayBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCEwLGEsbnVsbCwhMSwhMSl9KTtbXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw0LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDYsITEsYSxudWxsLCExLCExKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7dmFyIG9hPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EsXG5wYSk7RFtiXT1uZXcgQihiLDEsITEsYSxudWxsLCExLCExKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCExLCExKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsITEsITEpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5ELnhsaW5rSHJlZj1uZXcgQihcInhsaW5rSHJlZlwiLDEsITEsXCJ4bGluazpocmVmXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITAsITEpO1tcInNyY1wiLFwiaHJlZlwiLFwiYWN0aW9uXCIsXCJmb3JtQWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITAsITApfSk7XG5mdW5jdGlvbiBxYShhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChuYShiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/bGEoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbnZhciByYT1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxzYT02MDEwMyx0YT02MDEwNix1YT02MDEwNyx3YT02MDEwOCx4YT02MDExNCx5YT02MDEwOSx6YT02MDExMCxBYT02MDExMixCYT02MDExMyxDYT02MDEyMCxEYT02MDExNSxFYT02MDExNixGYT02MDEyMSxHYT02MDEyOCxIYT02MDEyOSxJYT02MDEzMCxKYT02MDEzMTtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciBFPVN5bWJvbC5mb3I7c2E9RShcInJlYWN0LmVsZW1lbnRcIik7dGE9RShcInJlYWN0LnBvcnRhbFwiKTt1YT1FKFwicmVhY3QuZnJhZ21lbnRcIik7d2E9RShcInJlYWN0LnN0cmljdF9tb2RlXCIpO3hhPUUoXCJyZWFjdC5wcm9maWxlclwiKTt5YT1FKFwicmVhY3QucHJvdmlkZXJcIik7emE9RShcInJlYWN0LmNvbnRleHRcIik7QWE9RShcInJlYWN0LmZvcndhcmRfcmVmXCIpO0JhPUUoXCJyZWFjdC5zdXNwZW5zZVwiKTtDYT1FKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtEYT1FKFwicmVhY3QubWVtb1wiKTtFYT1FKFwicmVhY3QubGF6eVwiKTtGYT1FKFwicmVhY3QuYmxvY2tcIik7RShcInJlYWN0LnNjb3BlXCIpO0dhPUUoXCJyZWFjdC5vcGFxdWUuaWRcIik7SGE9RShcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7SWE9RShcInJlYWN0Lm9mZnNjcmVlblwiKTtKYT1FKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKX1cbnZhciBLYT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gTGEoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUthJiZhW0thXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBNYTtmdW5jdGlvbiBOYShhKXtpZih2b2lkIDA9PT1NYSl0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goYyl7dmFyIGI9Yy5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtNYT1iJiZiWzFdfHxcIlwifXJldHVyblwiXFxuXCIrTWErYX12YXIgT2E9ITE7XG5mdW5jdGlvbiBQYShhLGIpe2lmKCFhfHxPYSlyZXR1cm5cIlwiO09hPSEwO3ZhciBjPUVycm9yLnByZXBhcmVTdGFja1RyYWNlO0Vycm9yLnByZXBhcmVTdGFja1RyYWNlPXZvaWQgMDt0cnl7aWYoYilpZihiPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcInByb3BzXCIse3NldDpmdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fX0pLFwib2JqZWN0XCI9PT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5jb25zdHJ1Y3Qpe3RyeXtSZWZsZWN0LmNvbnN0cnVjdChiLFtdKX1jYXRjaChrKXt2YXIgZD1rfVJlZmxlY3QuY29uc3RydWN0KGEsW10sYil9ZWxzZXt0cnl7Yi5jYWxsKCl9Y2F0Y2goayl7ZD1rfWEuY2FsbChiLnByb3RvdHlwZSl9ZWxzZXt0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goayl7ZD1rfWEoKX19Y2F0Y2goayl7aWYoayYmZCYmXCJzdHJpbmdcIj09PXR5cGVvZiBrLnN0YWNrKXtmb3IodmFyIGU9ay5zdGFjay5zcGxpdChcIlxcblwiKSxcbmY9ZC5zdGFjay5zcGxpdChcIlxcblwiKSxnPWUubGVuZ3RoLTEsaD1mLmxlbmd0aC0xOzE8PWcmJjA8PWgmJmVbZ10hPT1mW2hdOyloLS07Zm9yKDsxPD1nJiYwPD1oO2ctLSxoLS0paWYoZVtnXSE9PWZbaF0pe2lmKDEhPT1nfHwxIT09aCl7ZG8gaWYoZy0tLGgtLSwwPmh8fGVbZ10hPT1mW2hdKXJldHVyblwiXFxuXCIrZVtnXS5yZXBsYWNlKFwiIGF0IG5ldyBcIixcIiBhdCBcIik7d2hpbGUoMTw9ZyYmMDw9aCl9YnJlYWt9fX1maW5hbGx5e09hPSExLEVycm9yLnByZXBhcmVTdGFja1RyYWNlPWN9cmV0dXJuKGE9YT9hLmRpc3BsYXlOYW1lfHxhLm5hbWU6XCJcIik/TmEoYSk6XCJcIn1cbmZ1bmN0aW9uIFFhKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnJldHVybiBOYShhLnR5cGUpO2Nhc2UgMTY6cmV0dXJuIE5hKFwiTGF6eVwiKTtjYXNlIDEzOnJldHVybiBOYShcIlN1c3BlbnNlXCIpO2Nhc2UgMTk6cmV0dXJuIE5hKFwiU3VzcGVuc2VMaXN0XCIpO2Nhc2UgMDpjYXNlIDI6Y2FzZSAxNTpyZXR1cm4gYT1QYShhLnR5cGUsITEpLGE7Y2FzZSAxMTpyZXR1cm4gYT1QYShhLnR5cGUucmVuZGVyLCExKSxhO2Nhc2UgMjI6cmV0dXJuIGE9UGEoYS50eXBlLl9yZW5kZXIsITEpLGE7Y2FzZSAxOnJldHVybiBhPVBhKGEudHlwZSwhMCksYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gUmEoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSB0YTpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgeGE6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2Ugd2E6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBCYTpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSBDYTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB6YTpyZXR1cm4oYS5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLkNvbnN1bWVyXCI7Y2FzZSB5YTpyZXR1cm4oYS5fY29udGV4dC5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLlByb3ZpZGVyXCI7Y2FzZSBBYTp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtcbnJldHVybiBhLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWI/XCJGb3J3YXJkUmVmKFwiK2IrXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgRGE6cmV0dXJuIFJhKGEudHlwZSk7Y2FzZSBGYTpyZXR1cm4gUmEoYS5fcmVuZGVyKTtjYXNlIEVhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBSYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfWZ1bmN0aW9uIFNhKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiBUYShhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gVWEoYSl7dmFyIGI9VGEoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFZhKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1VYShhKSl9ZnVuY3Rpb24gV2EoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVRhKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9ZnVuY3Rpb24gWGEoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fVxuZnVuY3Rpb24gWWEoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG0oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfWZ1bmN0aW9uIFphKGEsYil7dmFyIGM9bnVsbD09Yi5kZWZhdWx0VmFsdWU/XCJcIjpiLmRlZmF1bHRWYWx1ZSxkPW51bGwhPWIuY2hlY2tlZD9iLmNoZWNrZWQ6Yi5kZWZhdWx0Q2hlY2tlZDtjPVNhKG51bGwhPWIudmFsdWU/Yi52YWx1ZTpjKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxDaGVja2VkOmQsaW5pdGlhbFZhbHVlOmMsY29udHJvbGxlZDpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9udWxsIT1iLmNoZWNrZWQ6bnVsbCE9Yi52YWx1ZX19ZnVuY3Rpb24gJGEoYSxiKXtiPWIuY2hlY2tlZDtudWxsIT1iJiZxYShhLFwiY2hlY2tlZFwiLGIsITEpfVxuZnVuY3Rpb24gYWIoYSxiKXskYShhLGIpO3ZhciBjPVNhKGIudmFsdWUpLGQ9Yi50eXBlO2lmKG51bGwhPWMpaWYoXCJudW1iZXJcIj09PWQpe2lmKDA9PT1jJiZcIlwiPT09YS52YWx1ZXx8YS52YWx1ZSE9YylhLnZhbHVlPVwiXCIrY31lbHNlIGEudmFsdWUhPT1cIlwiK2MmJihhLnZhbHVlPVwiXCIrYyk7ZWxzZSBpZihcInN1Ym1pdFwiPT09ZHx8XCJyZXNldFwiPT09ZCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm59Yi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpP2JiKGEsYi50eXBlLGMpOmIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikmJmJiKGEsYi50eXBlLFNhKGIuZGVmYXVsdFZhbHVlKSk7bnVsbD09Yi5jaGVja2VkJiZudWxsIT1iLmRlZmF1bHRDaGVja2VkJiYoYS5kZWZhdWx0Q2hlY2tlZD0hIWIuZGVmYXVsdENoZWNrZWQpfVxuZnVuY3Rpb24gY2IoYSxiLGMpe2lmKGIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKXx8Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSl7dmFyIGQ9Yi50eXBlO2lmKCEoXCJzdWJtaXRcIiE9PWQmJlwicmVzZXRcIiE9PWR8fHZvaWQgMCE9PWIudmFsdWUmJm51bGwhPT1iLnZhbHVlKSlyZXR1cm47Yj1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7Y3x8Yj09PWEudmFsdWV8fChhLnZhbHVlPWIpO2EuZGVmYXVsdFZhbHVlPWJ9Yz1hLm5hbWU7XCJcIiE9PWMmJihhLm5hbWU9XCJcIik7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIGJiKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8WGEoYS5vd25lckRvY3VtZW50KSE9PWEpbnVsbD09Yz9hLmRlZmF1bHRWYWx1ZT1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU6YS5kZWZhdWx0VmFsdWUhPT1cIlwiK2MmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2MpfWZ1bmN0aW9uIGRiKGEpe3ZhciBiPVwiXCI7YWEuQ2hpbGRyZW4uZm9yRWFjaChhLGZ1bmN0aW9uKGEpe251bGwhPWEmJihiKz1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGViKGEsYil7YT1tKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9ZGIoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfVxuZnVuY3Rpb24gZmIoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK1NhKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBnYihhLGIpe2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpdGhyb3cgRXJyb3IoeSg5MSkpO3JldHVybiBtKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGhiKGEsYil7dmFyIGM9Yi52YWx1ZTtpZihudWxsPT1jKXtjPWIuY2hpbGRyZW47Yj1iLmRlZmF1bHRWYWx1ZTtpZihudWxsIT1jKXtpZihudWxsIT1iKXRocm93IEVycm9yKHkoOTIpKTtpZihBcnJheS5pc0FycmF5KGMpKXtpZighKDE+PWMubGVuZ3RoKSl0aHJvdyBFcnJvcih5KDkzKSk7Yz1jWzBdfWI9Y31udWxsPT1iJiYoYj1cIlwiKTtjPWJ9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6U2EoYyl9fVxuZnVuY3Rpb24gaWIoYSxiKXt2YXIgYz1TYShiLnZhbHVlKSxkPVNhKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gamIoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmXCJcIiE9PWImJm51bGwhPT1iJiYoYS52YWx1ZT1iKX12YXIga2I9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gbGIoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBtYihhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/bGIoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgbmIsb2I9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09a2Iuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7bmI9bmJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bmIuaW5uZXJIVE1MPVwiPHN2Zz5cIitiLnZhbHVlT2YoKS50b1N0cmluZygpK1wiPC9zdmc+XCI7Zm9yKGI9bmIuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gcGIoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBxYj17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxyYj1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMocWIpLmZvckVhY2goZnVuY3Rpb24oYSl7cmIuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtxYltiXT1xYlthXX0pfSk7ZnVuY3Rpb24gc2IoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fHFiLmhhc093blByb3BlcnR5KGEpJiZxYlthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiB0YihhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1zYihjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciB1Yj1tKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gdmIoYSxiKXtpZihiKXtpZih1YlthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoMTM3LGEpKTtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtpZihudWxsIT1iLmNoaWxkcmVuKXRocm93IEVycm9yKHkoNjApKTtpZighKFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmXCJfX2h0bWxcImluIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoNjEpKTt9aWYobnVsbCE9Yi5zdHlsZSYmXCJvYmplY3RcIiE9PXR5cGVvZiBiLnN0eWxlKXRocm93IEVycm9yKHkoNjIpKTt9fVxuZnVuY3Rpb24gd2IoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fWZ1bmN0aW9uIHhiKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX12YXIgeWI9bnVsbCx6Yj1udWxsLEFiPW51bGw7XG5mdW5jdGlvbiBCYihhKXtpZihhPUNiKGEpKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgeWIpdGhyb3cgRXJyb3IoeSgyODApKTt2YXIgYj1hLnN0YXRlTm9kZTtiJiYoYj1EYihiKSx5YihhLnN0YXRlTm9kZSxhLnR5cGUsYikpfX1mdW5jdGlvbiBFYihhKXt6Yj9BYj9BYi5wdXNoKGEpOkFiPVthXTp6Yj1hfWZ1bmN0aW9uIEZiKCl7aWYoemIpe3ZhciBhPXpiLGI9QWI7QWI9emI9bnVsbDtCYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspQmIoYlthXSl9fWZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoYSxiLGMsZCxlKXtyZXR1cm4gYShiLGMsZCxlKX1mdW5jdGlvbiBJYigpe312YXIgSmI9R2IsS2I9ITEsTGI9ITE7ZnVuY3Rpb24gTWIoKXtpZihudWxsIT09emJ8fG51bGwhPT1BYilJYigpLEZiKCl9XG5mdW5jdGlvbiBOYihhLGIsYyl7aWYoTGIpcmV0dXJuIGEoYixjKTtMYj0hMDt0cnl7cmV0dXJuIEpiKGEsYixjKX1maW5hbGx5e0xiPSExLE1iKCl9fVxuZnVuY3Rpb24gT2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcih5KDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIFBiPSExO2lmKGZhKXRyeXt2YXIgUWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFFiLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtQYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpfWNhdGNoKGEpe1BiPSExfWZ1bmN0aW9uIFJiKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChuKXt0aGlzLm9uRXJyb3Iobil9fXZhciBTYj0hMSxUYj1udWxsLFViPSExLFZiPW51bGwsV2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7U2I9ITA7VGI9YX19O2Z1bmN0aW9uIFhiKGEsYixjLGQsZSxmLGcsaCxrKXtTYj0hMTtUYj1udWxsO1JiLmFwcGx5KFdiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBZYihhLGIsYyxkLGUsZixnLGgsayl7WGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKFNiKXtpZihTYil7dmFyIGw9VGI7U2I9ITE7VGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHkoMTk4KSk7VWJ8fChVYj0hMCxWYj1sKX19ZnVuY3Rpb24gWmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjEwMjYpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiAkYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIGFjKGEpe2lmKFpiKGEpIT09YSl0aHJvdyBFcnJvcih5KDE4OCkpO31cbmZ1bmN0aW9uIGJjKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVpiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIGFjKGUpLGE7aWYoZj09PWQpcmV0dXJuIGFjKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IoeSgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcih5KDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHkoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gY2MoYSl7YT1iYyhhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRjKGEsYil7Zm9yKHZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1iOyl7aWYoYj09PWF8fGI9PT1jKXJldHVybiEwO2I9Yi5yZXR1cm59cmV0dXJuITF9dmFyIGVjLGZjLGdjLGhjLGljPSExLGpjPVtdLGtjPW51bGwsbGM9bnVsbCxtYz1udWxsLG5jPW5ldyBNYXAsb2M9bmV3IE1hcCxwYz1bXSxxYz1cIm1vdXNlZG93biBtb3VzZXVwIHRvdWNoY2FuY2VsIHRvdWNoZW5kIHRvdWNoc3RhcnQgYXV4Y2xpY2sgZGJsY2xpY2sgcG9pbnRlcmNhbmNlbCBwb2ludGVyZG93biBwb2ludGVydXAgZHJhZ2VuZCBkcmFnc3RhcnQgZHJvcCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgaW5wdXQgdGV4dElucHV0IGNvcHkgY3V0IHBhc3RlIGNsaWNrIGNoYW5nZSBjb250ZXh0bWVudSByZXNldCBzdWJtaXRcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiByYyhhLGIsYyxkLGUpe3JldHVybntibG9ja2VkT246YSxkb21FdmVudE5hbWU6YixldmVudFN5c3RlbUZsYWdzOmN8MTYsbmF0aXZlRXZlbnQ6ZSx0YXJnZXRDb250YWluZXJzOltkXX19ZnVuY3Rpb24gc2MoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjprYz1udWxsO2JyZWFrO2Nhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6bGM9bnVsbDticmVhaztjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcIm1vdXNlb3V0XCI6bWM9bnVsbDticmVhaztjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcm91dFwiOm5jLmRlbGV0ZShiLnBvaW50ZXJJZCk7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOm9jLmRlbGV0ZShiLnBvaW50ZXJJZCl9fVxuZnVuY3Rpb24gdGMoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hfHxhLm5hdGl2ZUV2ZW50IT09ZilyZXR1cm4gYT1yYyhiLGMsZCxlLGYpLG51bGwhPT1iJiYoYj1DYihiKSxudWxsIT09YiYmZmMoYikpLGE7YS5ldmVudFN5c3RlbUZsYWdzfD1kO2I9YS50YXJnZXRDb250YWluZXJzO251bGwhPT1lJiYtMT09PWIuaW5kZXhPZihlKSYmYi5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gdWMoYSxiLGMsZCxlKXtzd2l0Y2goYil7Y2FzZSBcImZvY3VzaW5cIjpyZXR1cm4ga2M9dGMoa2MsYSxiLGMsZCxlKSwhMDtjYXNlIFwiZHJhZ2VudGVyXCI6cmV0dXJuIGxjPXRjKGxjLGEsYixjLGQsZSksITA7Y2FzZSBcIm1vdXNlb3ZlclwiOnJldHVybiBtYz10YyhtYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJwb2ludGVyb3ZlclwiOnZhciBmPWUucG9pbnRlcklkO25jLnNldChmLHRjKG5jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKTtyZXR1cm4hMDtjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpyZXR1cm4gZj1lLnBvaW50ZXJJZCxvYy5zZXQoZix0YyhvYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSksITB9cmV0dXJuITF9XG5mdW5jdGlvbiB2YyhhKXt2YXIgYj13YyhhLnRhcmdldCk7aWYobnVsbCE9PWIpe3ZhciBjPVpiKGIpO2lmKG51bGwhPT1jKWlmKGI9Yy50YWcsMTM9PT1iKXtpZihiPSRiKGMpLG51bGwhPT1iKXthLmJsb2NrZWRPbj1iO2hjKGEubGFuZVByaW9yaXR5LGZ1bmN0aW9uKCl7ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoYS5wcmlvcml0eSxmdW5jdGlvbigpe2djKGMpfSl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmh5ZHJhdGUpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24geGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXJldHVybiBiPUNiKGMpLG51bGwhPT1iJiZmYyhiKSxhLmJsb2NrZWRPbj1jLCExO2Iuc2hpZnQoKX1yZXR1cm4hMH1mdW5jdGlvbiB6YyhhLGIsYyl7eGMoYSkmJmMuZGVsZXRlKGIpfVxuZnVuY3Rpb24gQWMoKXtmb3IoaWM9ITE7MDxqYy5sZW5ndGg7KXt2YXIgYT1qY1swXTtpZihudWxsIT09YS5ibG9ja2VkT24pe2E9Q2IoYS5ibG9ja2VkT24pO251bGwhPT1hJiZlYyhhKTticmVha31mb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09Yyl7YS5ibG9ja2VkT249YzticmVha31iLnNoaWZ0KCl9bnVsbD09PWEuYmxvY2tlZE9uJiZqYy5zaGlmdCgpfW51bGwhPT1rYyYmeGMoa2MpJiYoa2M9bnVsbCk7bnVsbCE9PWxjJiZ4YyhsYykmJihsYz1udWxsKTtudWxsIT09bWMmJnhjKG1jKSYmKG1jPW51bGwpO25jLmZvckVhY2goemMpO29jLmZvckVhY2goemMpfVxuZnVuY3Rpb24gQmMoYSxiKXthLmJsb2NrZWRPbj09PWImJihhLmJsb2NrZWRPbj1udWxsLGljfHwoaWM9ITAsci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksQWMpKSl9XG5mdW5jdGlvbiBDYyhhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBCYyhiLGEpfWlmKDA8amMubGVuZ3RoKXtCYyhqY1swXSxhKTtmb3IodmFyIGM9MTtjPGpjLmxlbmd0aDtjKyspe3ZhciBkPWpjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09a2MmJkJjKGtjLGEpO251bGwhPT1sYyYmQmMobGMsYSk7bnVsbCE9PW1jJiZCYyhtYyxhKTtuYy5mb3JFYWNoKGIpO29jLmZvckVhY2goYik7Zm9yKGM9MDtjPHBjLmxlbmd0aDtjKyspZD1wY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8cGMubGVuZ3RoJiYoYz1wY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOyl2YyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJnBjLnNoaWZ0KCl9XG5mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBFYz17YW5pbWF0aW9uZW5kOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6RGMoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxGYz17fSxHYz17fTtcbmZhJiYoR2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgRWMuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgRWMudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBIYyhhKXtpZihGY1thXSlyZXR1cm4gRmNbYV07aWYoIUVjW2FdKXJldHVybiBhO3ZhciBiPUVjW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIEdjKXJldHVybiBGY1thXT1iW2NdO3JldHVybiBhfVxudmFyIEljPUhjKFwiYW5pbWF0aW9uZW5kXCIpLEpjPUhjKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLEtjPUhjKFwiYW5pbWF0aW9uc3RhcnRcIiksTGM9SGMoXCJ0cmFuc2l0aW9uZW5kXCIpLE1jPW5ldyBNYXAsTmM9bmV3IE1hcCxPYz1bXCJhYm9ydFwiLFwiYWJvcnRcIixJYyxcImFuaW1hdGlvbkVuZFwiLEpjLFwiYW5pbWF0aW9uSXRlcmF0aW9uXCIsS2MsXCJhbmltYXRpb25TdGFydFwiLFwiY2FucGxheVwiLFwiY2FuUGxheVwiLFwiY2FucGxheXRocm91Z2hcIixcImNhblBsYXlUaHJvdWdoXCIsXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIixcImVtcHRpZWRcIixcImVtcHRpZWRcIixcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmRlZFwiLFwiZW5kZWRcIixcImVycm9yXCIsXCJlcnJvclwiLFwiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCIsXCJsb2FkXCIsXCJsb2FkXCIsXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCIsXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIixcImxvYWRzdGFydFwiLFwibG9hZFN0YXJ0XCIsXG5cImxvc3Rwb2ludGVyY2FwdHVyZVwiLFwibG9zdFBvaW50ZXJDYXB0dXJlXCIsXCJwbGF5aW5nXCIsXCJwbGF5aW5nXCIsXCJwcm9ncmVzc1wiLFwicHJvZ3Jlc3NcIixcInNlZWtpbmdcIixcInNlZWtpbmdcIixcInN0YWxsZWRcIixcInN0YWxsZWRcIixcInN1c3BlbmRcIixcInN1c3BlbmRcIixcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIixMYyxcInRyYW5zaXRpb25FbmRcIixcIndhaXRpbmdcIixcIndhaXRpbmdcIl07ZnVuY3Rpb24gUGMoYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrPTIpe3ZhciBkPWFbY10sZT1hW2MrMV07ZT1cIm9uXCIrKGVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpKTtOYy5zZXQoZCxiKTtNYy5zZXQoZCxlKTtkYShlLFtkXSl9fXZhciBRYz1yLnVuc3RhYmxlX25vdztRYygpO3ZhciBGPTg7XG5mdW5jdGlvbiBSYyhhKXtpZigwIT09KDEmYSkpcmV0dXJuIEY9MTUsMTtpZigwIT09KDImYSkpcmV0dXJuIEY9MTQsMjtpZigwIT09KDQmYSkpcmV0dXJuIEY9MTMsNDt2YXIgYj0yNCZhO2lmKDAhPT1iKXJldHVybiBGPTEyLGI7aWYoMCE9PShhJjMyKSlyZXR1cm4gRj0xMSwzMjtiPTE5MiZhO2lmKDAhPT1iKXJldHVybiBGPTEwLGI7aWYoMCE9PShhJjI1NikpcmV0dXJuIEY9OSwyNTY7Yj0zNTg0JmE7aWYoMCE9PWIpcmV0dXJuIEY9OCxiO2lmKDAhPT0oYSY0MDk2KSlyZXR1cm4gRj03LDQwOTY7Yj00MTg2MTEyJmE7aWYoMCE9PWIpcmV0dXJuIEY9NixiO2I9NjI5MTQ1NjAmYTtpZigwIT09YilyZXR1cm4gRj01LGI7aWYoYSY2NzEwODg2NClyZXR1cm4gRj00LDY3MTA4ODY0O2lmKDAhPT0oYSYxMzQyMTc3MjgpKXJldHVybiBGPTMsMTM0MjE3NzI4O2I9ODA1MzA2MzY4JmE7aWYoMCE9PWIpcmV0dXJuIEY9MixiO2lmKDAhPT0oMTA3Mzc0MTgyNCZhKSlyZXR1cm4gRj0xLDEwNzM3NDE4MjQ7XG5GPTg7cmV0dXJuIGF9ZnVuY3Rpb24gU2MoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIDE1O2Nhc2UgOTg6cmV0dXJuIDEwO2Nhc2UgOTc6Y2FzZSA5NjpyZXR1cm4gODtjYXNlIDk1OnJldHVybiAyO2RlZmF1bHQ6cmV0dXJuIDB9fWZ1bmN0aW9uIFRjKGEpe3N3aXRjaChhKXtjYXNlIDE1OmNhc2UgMTQ6cmV0dXJuIDk5O2Nhc2UgMTM6Y2FzZSAxMjpjYXNlIDExOmNhc2UgMTA6cmV0dXJuIDk4O2Nhc2UgOTpjYXNlIDg6Y2FzZSA3OmNhc2UgNjpjYXNlIDQ6Y2FzZSA1OnJldHVybiA5NztjYXNlIDM6Y2FzZSAyOmNhc2UgMTpyZXR1cm4gOTU7Y2FzZSAwOnJldHVybiA5MDtkZWZhdWx0OnRocm93IEVycm9yKHkoMzU4LGEpKTt9fVxuZnVuY3Rpb24gVWMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcztpZigwPT09YylyZXR1cm4gRj0wO3ZhciBkPTAsZT0wLGY9YS5leHBpcmVkTGFuZXMsZz1hLnN1c3BlbmRlZExhbmVzLGg9YS5waW5nZWRMYW5lcztpZigwIT09ZilkPWYsZT1GPTE1O2Vsc2UgaWYoZj1jJjEzNDIxNzcyNywwIT09Zil7dmFyIGs9ZiZ+ZzswIT09az8oZD1SYyhrKSxlPUYpOihoJj1mLDAhPT1oJiYoZD1SYyhoKSxlPUYpKX1lbHNlIGY9YyZ+ZywwIT09Zj8oZD1SYyhmKSxlPUYpOjAhPT1oJiYoZD1SYyhoKSxlPUYpO2lmKDA9PT1kKXJldHVybiAwO2Q9MzEtVmMoZCk7ZD1jJigoMD5kPzA6MTw8ZCk8PDEpLTE7aWYoMCE9PWImJmIhPT1kJiYwPT09KGImZykpe1JjKGIpO2lmKGU8PUYpcmV0dXJuIGI7Rj1lfWI9YS5lbnRhbmdsZWRMYW5lcztpZigwIT09Yilmb3IoYT1hLmVudGFuZ2xlbWVudHMsYiY9ZDswPGI7KWM9MzEtVmMoYiksZT0xPDxjLGR8PWFbY10sYiY9fmU7cmV0dXJuIGR9XG5mdW5jdGlvbiBXYyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24gWGMoYSxiKXtzd2l0Y2goYSl7Y2FzZSAxNTpyZXR1cm4gMTtjYXNlIDE0OnJldHVybiAyO2Nhc2UgMTI6cmV0dXJuIGE9WWMoMjQmfmIpLDA9PT1hP1hjKDEwLGIpOmE7Y2FzZSAxMDpyZXR1cm4gYT1ZYygxOTImfmIpLDA9PT1hP1hjKDgsYik6YTtjYXNlIDg6cmV0dXJuIGE9WWMoMzU4NCZ+YiksMD09PWEmJihhPVljKDQxODYxMTImfmIpLDA9PT1hJiYoYT01MTIpKSxhO2Nhc2UgMjpyZXR1cm4gYj1ZYyg4MDUzMDYzNjgmfmIpLDA9PT1iJiYoYj0yNjg0MzU0NTYpLGJ9dGhyb3cgRXJyb3IoeSgzNTgsYSkpO31mdW5jdGlvbiBZYyhhKXtyZXR1cm4gYSYtYX1mdW5jdGlvbiBaYyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uICRjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjt2YXIgZD1iLTE7YS5zdXNwZW5kZWRMYW5lcyY9ZDthLnBpbmdlZExhbmVzJj1kO2E9YS5ldmVudFRpbWVzO2I9MzEtVmMoYik7YVtiXT1jfXZhciBWYz1NYXRoLmNsejMyP01hdGguY2x6MzI6YWQsYmQ9TWF0aC5sb2csY2Q9TWF0aC5MTjI7ZnVuY3Rpb24gYWQoYSl7cmV0dXJuIDA9PT1hPzMyOjMxLShiZChhKS9jZHwwKXwwfXZhciBkZD1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGVkPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LGZkPSEwO2Z1bmN0aW9uIGdkKGEsYixjLGQpe0tifHxJYigpO3ZhciBlPWhkLGY9S2I7S2I9ITA7dHJ5e0hiKGUsYSxiLGMsZCl9ZmluYWxseXsoS2I9Zil8fE1iKCl9fWZ1bmN0aW9uIGlkKGEsYixjLGQpe2VkKGRkLGhkLmJpbmQobnVsbCxhLGIsYyxkKSl9XG5mdW5jdGlvbiBoZChhLGIsYyxkKXtpZihmZCl7dmFyIGU7aWYoKGU9MD09PShiJjQpKSYmMDxqYy5sZW5ndGgmJi0xPHFjLmluZGV4T2YoYSkpYT1yYyhudWxsLGEsYixjLGQpLGpjLnB1c2goYSk7ZWxzZXt2YXIgZj15YyhhLGIsYyxkKTtpZihudWxsPT09ZillJiZzYyhhLGQpO2Vsc2V7aWYoZSl7aWYoLTE8cWMuaW5kZXhPZihhKSl7YT1yYyhmLGEsYixjLGQpO2pjLnB1c2goYSk7cmV0dXJufWlmKHVjKGYsYSxiLGMsZCkpcmV0dXJuO3NjKGEsZCl9amQoYSxiLGQsbnVsbCxjKX19fX1cbmZ1bmN0aW9uIHljKGEsYixjLGQpe3ZhciBlPXhiKGQpO2U9d2MoZSk7aWYobnVsbCE9PWUpe3ZhciBmPVpiKGUpO2lmKG51bGw9PT1mKWU9bnVsbDtlbHNle3ZhciBnPWYudGFnO2lmKDEzPT09Zyl7ZT0kYihmKTtpZihudWxsIT09ZSlyZXR1cm4gZTtlPW51bGx9ZWxzZSBpZigzPT09Zyl7aWYoZi5zdGF0ZU5vZGUuaHlkcmF0ZSlyZXR1cm4gMz09PWYudGFnP2Yuc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtlPW51bGx9ZWxzZSBmIT09ZSYmKGU9bnVsbCl9fWpkKGEsYixkLGUsYyk7cmV0dXJuIG51bGx9dmFyIGtkPW51bGwsbGQ9bnVsbCxtZD1udWxsO1xuZnVuY3Rpb24gbmQoKXtpZihtZClyZXR1cm4gbWQ7dmFyIGEsYj1sZCxjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBtZD1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIG9kKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfWZ1bmN0aW9uIHBkKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWQoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHJkKGEpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt0aGlzLl9yZWFjdE5hbWU9Yjt0aGlzLl90YXJnZXRJbnN0PWU7dGhpcy50eXBlPWQ7dGhpcy5uYXRpdmVFdmVudD1mO3RoaXMudGFyZ2V0PWc7dGhpcy5jdXJyZW50VGFyZ2V0PW51bGw7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGI9YVtjXSx0aGlzW2NdPWI/YihmKTpmW2NdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Zi5kZWZhdWx0UHJldmVudGVkP2YuZGVmYXVsdFByZXZlbnRlZDohMT09PWYucmV0dXJuVmFsdWUpP3BkOnFkO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cWQ7cmV0dXJuIHRoaXN9bShiLnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmXG4oYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cGQpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cGQpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7fSxpc1BlcnNpc3RlbnQ6cGR9KTtyZXR1cm4gYn1cbnZhciBzZD17ZXZlbnRQaGFzZTowLGJ1YmJsZXM6MCxjYW5jZWxhYmxlOjAsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDowLGlzVHJ1c3RlZDowfSx0ZD1yZChzZCksdWQ9bSh7fSxzZCx7dmlldzowLGRldGFpbDowfSksdmQ9cmQodWQpLHdkLHhkLHlkLEFkPW0oe30sdWQse3NjcmVlblg6MCxzY3JlZW5ZOjAsY2xpZW50WDowLGNsaWVudFk6MCxwYWdlWDowLHBhZ2VZOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLGdldE1vZGlmaWVyU3RhdGU6emQsYnV0dG9uOjAsYnV0dG9uczowLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWEucmVsYXRlZFRhcmdldD9hLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQ6YS5yZWxhdGVkVGFyZ2V0fSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluXG5hKXJldHVybiBhLm1vdmVtZW50WDthIT09eWQmJih5ZCYmXCJtb3VzZW1vdmVcIj09PWEudHlwZT8od2Q9YS5zY3JlZW5YLXlkLnNjcmVlblgseGQ9YS5zY3JlZW5ZLXlkLnNjcmVlblkpOnhkPXdkPTAseWQ9YSk7cmV0dXJuIHdkfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJtb3ZlbWVudFlcImluIGE/YS5tb3ZlbWVudFk6eGR9fSksQmQ9cmQoQWQpLENkPW0oe30sQWQse2RhdGFUcmFuc2ZlcjowfSksRGQ9cmQoQ2QpLEVkPW0oe30sdWQse3JlbGF0ZWRUYXJnZXQ6MH0pLEZkPXJkKEVkKSxHZD1tKHt9LHNkLHthbmltYXRpb25OYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxIZD1yZChHZCksSWQ9bSh7fSxzZCx7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLEpkPXJkKElkKSxLZD1tKHt9LHNkLHtkYXRhOjB9KSxMZD1yZChLZCksTWQ9e0VzYzpcIkVzY2FwZVwiLFxuU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sTmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsXG4xMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LE9kPXtBbHQ6XCJhbHRLZXlcIixDb250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBQZChhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPU9kW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gemQoKXtyZXR1cm4gUGR9XG52YXIgUWQ9bSh7fSx1ZCx7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1NZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1vZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/TmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxjb2RlOjAsbG9jYXRpb246MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAscmVwZWF0OjAsbG9jYWxlOjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/b2QoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9vZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLFJkPXJkKFFkKSxTZD1tKHt9LEFkLHtwb2ludGVySWQ6MCx3aWR0aDowLGhlaWdodDowLHByZXNzdXJlOjAsdGFuZ2VudGlhbFByZXNzdXJlOjAsdGlsdFg6MCx0aWx0WTowLHR3aXN0OjAscG9pbnRlclR5cGU6MCxpc1ByaW1hcnk6MH0pLFRkPXJkKFNkKSxVZD1tKHt9LHVkLHt0b3VjaGVzOjAsdGFyZ2V0VG91Y2hlczowLGNoYW5nZWRUb3VjaGVzOjAsYWx0S2V5OjAsbWV0YUtleTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGdldE1vZGlmaWVyU3RhdGU6emR9KSxWZD1yZChVZCksV2Q9bSh7fSxzZCx7cHJvcGVydHlOYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxYZD1yZChXZCksWWQ9bSh7fSxBZCx7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluIGE/LWEud2hlZWxEZWx0YVg6MH0sXG5kZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6MCxkZWx0YU1vZGU6MH0pLFpkPXJkKFlkKSwkZD1bOSwxMywyNywzMl0sYWU9ZmEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LGJlPW51bGw7ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKGJlPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7dmFyIGNlPWZhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhYmUsZGU9ZmEmJighYWV8fGJlJiY4PGJlJiYxMT49YmUpLGVlPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLGZlPSExO1xuZnVuY3Rpb24gZ2UoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT0kZC5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiZm9jdXNvdXRcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBoZShhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciBpZT0hMTtmdW5jdGlvbiBqZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gaGUoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO2ZlPSEwO3JldHVybiBlZTtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1lZSYmZmU/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24ga2UoYSxiKXtpZihpZSlyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhYWUmJmdlKGEsYik/KGE9bmQoKSxtZD1sZD1rZD1udWxsLGllPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBkZSYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgbGU9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gbWUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFsZVthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9ZnVuY3Rpb24gbmUoYSxiLGMsZCl7RWIoZCk7Yj1vZShiLFwib25DaGFuZ2VcIik7MDxiLmxlbmd0aCYmKGM9bmV3IHRkKFwib25DaGFuZ2VcIixcImNoYW5nZVwiLG51bGwsYyxkKSxhLnB1c2goe2V2ZW50OmMsbGlzdGVuZXJzOmJ9KSl9dmFyIHBlPW51bGwscWU9bnVsbDtmdW5jdGlvbiByZShhKXtzZShhLDApfWZ1bmN0aW9uIHRlKGEpe3ZhciBiPXVlKGEpO2lmKFdhKGIpKXJldHVybiBhfVxuZnVuY3Rpb24gdmUoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgd2U9ITE7aWYoZmEpe3ZhciB4ZTtpZihmYSl7dmFyIHllPVwib25pbnB1dFwiaW4gZG9jdW1lbnQ7aWYoIXllKXt2YXIgemU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt6ZS5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsXCJyZXR1cm47XCIpO3llPVwiZnVuY3Rpb25cIj09PXR5cGVvZiB6ZS5vbmlucHV0fXhlPXllfWVsc2UgeGU9ITE7d2U9eGUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PGRvY3VtZW50LmRvY3VtZW50TW9kZSl9ZnVuY3Rpb24gQWUoKXtwZSYmKHBlLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSxxZT1wZT1udWxsKX1mdW5jdGlvbiBCZShhKXtpZihcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmdGUocWUpKXt2YXIgYj1bXTtuZShiLHFlLGEseGIoYSkpO2E9cmU7aWYoS2IpYShiKTtlbHNle0tiPSEwO3RyeXtHYihhLGIpfWZpbmFsbHl7S2I9ITEsTWIoKX19fX1cbmZ1bmN0aW9uIENlKGEsYixjKXtcImZvY3VzaW5cIj09PWE/KEFlKCkscGU9YixxZT1jLHBlLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSk6XCJmb2N1c291dFwiPT09YSYmQWUoKX1mdW5jdGlvbiBEZShhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiB0ZShxZSl9ZnVuY3Rpb24gRWUoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBGZShhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBHZShhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIEhlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOkdlLEllPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBKZShhLGIpe2lmKEhlKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylpZighSWUuY2FsbChiLGNbZF0pfHwhSGUoYVtjW2RdXSxiW2NbZF1dKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBLZShhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBMZShhLGIpe3ZhciBjPUtlKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPUtlKGMpfX1mdW5jdGlvbiBNZShhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlP01lKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIE5lKCl7Zm9yKHZhciBhPXdpbmRvdyxiPVhhKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPVhhKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIE9lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG52YXIgUGU9ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxRZT1udWxsLFJlPW51bGwsU2U9bnVsbCxUZT0hMTtcbmZ1bmN0aW9uIFVlKGEsYixjKXt2YXIgZD1jLndpbmRvdz09PWM/Yy5kb2N1bWVudDo5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudDtUZXx8bnVsbD09UWV8fFFlIT09WGEoZCl8fChkPVFlLFwic2VsZWN0aW9uU3RhcnRcImluIGQmJk9lKGQpP2Q9e3N0YXJ0OmQuc2VsZWN0aW9uU3RhcnQsZW5kOmQuc2VsZWN0aW9uRW5kfTooZD0oZC5vd25lckRvY3VtZW50JiZkLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksZD17YW5jaG9yTm9kZTpkLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmQuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpkLmZvY3VzTm9kZSxmb2N1c09mZnNldDpkLmZvY3VzT2Zmc2V0fSksU2UmJkplKFNlLGQpfHwoU2U9ZCxkPW9lKFJlLFwib25TZWxlY3RcIiksMDxkLmxlbmd0aCYmKGI9bmV3IHRkKFwib25TZWxlY3RcIixcInNlbGVjdFwiLG51bGwsYixjKSxhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmR9KSxiLnRhcmdldD1RZSkpKX1cblBjKFwiY2FuY2VsIGNhbmNlbCBjbGljayBjbGljayBjbG9zZSBjbG9zZSBjb250ZXh0bWVudSBjb250ZXh0TWVudSBjb3B5IGNvcHkgY3V0IGN1dCBhdXhjbGljayBhdXhDbGljayBkYmxjbGljayBkb3VibGVDbGljayBkcmFnZW5kIGRyYWdFbmQgZHJhZ3N0YXJ0IGRyYWdTdGFydCBkcm9wIGRyb3AgZm9jdXNpbiBmb2N1cyBmb2N1c291dCBibHVyIGlucHV0IGlucHV0IGludmFsaWQgaW52YWxpZCBrZXlkb3duIGtleURvd24ga2V5cHJlc3Mga2V5UHJlc3Mga2V5dXAga2V5VXAgbW91c2Vkb3duIG1vdXNlRG93biBtb3VzZXVwIG1vdXNlVXAgcGFzdGUgcGFzdGUgcGF1c2UgcGF1c2UgcGxheSBwbGF5IHBvaW50ZXJjYW5jZWwgcG9pbnRlckNhbmNlbCBwb2ludGVyZG93biBwb2ludGVyRG93biBwb2ludGVydXAgcG9pbnRlclVwIHJhdGVjaGFuZ2UgcmF0ZUNoYW5nZSByZXNldCByZXNldCBzZWVrZWQgc2Vla2VkIHN1Ym1pdCBzdWJtaXQgdG91Y2hjYW5jZWwgdG91Y2hDYW5jZWwgdG91Y2hlbmQgdG91Y2hFbmQgdG91Y2hzdGFydCB0b3VjaFN0YXJ0IHZvbHVtZWNoYW5nZSB2b2x1bWVDaGFuZ2VcIi5zcGxpdChcIiBcIiksXG4wKTtQYyhcImRyYWcgZHJhZyBkcmFnZW50ZXIgZHJhZ0VudGVyIGRyYWdleGl0IGRyYWdFeGl0IGRyYWdsZWF2ZSBkcmFnTGVhdmUgZHJhZ292ZXIgZHJhZ092ZXIgbW91c2Vtb3ZlIG1vdXNlTW92ZSBtb3VzZW91dCBtb3VzZU91dCBtb3VzZW92ZXIgbW91c2VPdmVyIHBvaW50ZXJtb3ZlIHBvaW50ZXJNb3ZlIHBvaW50ZXJvdXQgcG9pbnRlck91dCBwb2ludGVyb3ZlciBwb2ludGVyT3ZlciBzY3JvbGwgc2Nyb2xsIHRvZ2dsZSB0b2dnbGUgdG91Y2htb3ZlIHRvdWNoTW92ZSB3aGVlbCB3aGVlbFwiLnNwbGl0KFwiIFwiKSwxKTtQYyhPYywyKTtmb3IodmFyIFZlPVwiY2hhbmdlIHNlbGVjdGlvbmNoYW5nZSB0ZXh0SW5wdXQgY29tcG9zaXRpb25zdGFydCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnVwZGF0ZVwiLnNwbGl0KFwiIFwiKSxXZT0wO1dlPFZlLmxlbmd0aDtXZSsrKU5jLnNldChWZVtXZV0sMCk7ZWEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtcbmVhKFwib25Nb3VzZUxlYXZlXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJFbnRlclwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtlYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2RhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZGEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7XG5kYShcIm9uQ29tcG9zaXRpb25TdGFydFwiLFwiY29tcG9zaXRpb25zdGFydCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIFhlPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxZZT1uZXcgU2V0KFwiY2FuY2VsIGNsb3NlIGludmFsaWQgbG9hZCBzY3JvbGwgdG9nZ2xlXCIuc3BsaXQoXCIgXCIpLmNvbmNhdChYZSkpO1xuZnVuY3Rpb24gWmUoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PWM7WWIoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1cbmZ1bmN0aW9uIHNlKGEsYil7Yj0wIT09KGImNCk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10sZT1kLmV2ZW50O2Q9ZC5saXN0ZW5lcnM7YTp7dmFyIGY9dm9pZCAwO2lmKGIpZm9yKHZhciBnPWQubGVuZ3RoLTE7MDw9ZztnLS0pe3ZhciBoPWRbZ10saz1oLmluc3RhbmNlLGw9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a31lbHNlIGZvcihnPTA7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXTtrPWguaW5zdGFuY2U7bD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfX19aWYoVWIpdGhyb3cgYT1WYixVYj0hMSxWYj1udWxsLGE7fVxuZnVuY3Rpb24gRyhhLGIpe3ZhciBjPSRlKGIpLGQ9YStcIl9fYnViYmxlXCI7Yy5oYXMoZCl8fChhZihiLGEsMiwhMSksYy5hZGQoZCkpfXZhciBiZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIGNmKGEpe2FbYmZdfHwoYVtiZl09ITAsYmEuZm9yRWFjaChmdW5jdGlvbihiKXtZZS5oYXMoYil8fGRmKGIsITEsYSxudWxsKTtkZihiLCEwLGEsbnVsbCl9KSl9XG5mdW5jdGlvbiBkZihhLGIsYyxkKXt2YXIgZT00PGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCxmPWM7XCJzZWxlY3Rpb25jaGFuZ2VcIj09PWEmJjkhPT1jLm5vZGVUeXBlJiYoZj1jLm93bmVyRG9jdW1lbnQpO2lmKG51bGwhPT1kJiYhYiYmWWUuaGFzKGEpKXtpZihcInNjcm9sbFwiIT09YSlyZXR1cm47ZXw9MjtmPWR9dmFyIGc9JGUoZiksaD1hK1wiX19cIisoYj9cImNhcHR1cmVcIjpcImJ1YmJsZVwiKTtnLmhhcyhoKXx8KGImJihlfD00KSxhZihmLGEsZSxiKSxnLmFkZChoKSl9XG5mdW5jdGlvbiBhZihhLGIsYyxkKXt2YXIgZT1OYy5nZXQoYik7c3dpdGNoKHZvaWQgMD09PWU/MjplKXtjYXNlIDA6ZT1nZDticmVhaztjYXNlIDE6ZT1pZDticmVhaztkZWZhdWx0OmU9aGR9Yz1lLmJpbmQobnVsbCxiLGMsYSk7ZT12b2lkIDA7IVBifHxcInRvdWNoc3RhcnRcIiE9PWImJlwidG91Y2htb3ZlXCIhPT1iJiZcIndoZWVsXCIhPT1ifHwoZT0hMCk7ZD92b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse2NhcHR1cmU6ITAscGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMCk6dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX1cbmZ1bmN0aW9uIGpkKGEsYixjLGQsZSl7dmFyIGY9ZDtpZigwPT09KGImMSkmJjA9PT0oYiYyKSYmbnVsbCE9PWQpYTpmb3IoOzspe2lmKG51bGw9PT1kKXJldHVybjt2YXIgZz1kLnRhZztpZigzPT09Z3x8ND09PWcpe3ZhciBoPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoaD09PWV8fDg9PT1oLm5vZGVUeXBlJiZoLnBhcmVudE5vZGU9PT1lKWJyZWFrO2lmKDQ9PT1nKWZvcihnPWQucmV0dXJuO251bGwhPT1nOyl7dmFyIGs9Zy50YWc7aWYoMz09PWt8fDQ9PT1rKWlmKGs9Zy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxrPT09ZXx8OD09PWsubm9kZVR5cGUmJmsucGFyZW50Tm9kZT09PWUpcmV0dXJuO2c9Zy5yZXR1cm59Zm9yKDtudWxsIT09aDspe2c9d2MoaCk7aWYobnVsbD09PWcpcmV0dXJuO2s9Zy50YWc7aWYoNT09PWt8fDY9PT1rKXtkPWY9Zztjb250aW51ZSBhfWg9aC5wYXJlbnROb2RlfX1kPWQucmV0dXJufU5iKGZ1bmN0aW9uKCl7dmFyIGQ9ZixlPXhiKGMpLGc9W107XG5hOnt2YXIgaD1NYy5nZXQoYSk7aWYodm9pZCAwIT09aCl7dmFyIGs9dGQseD1hO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09b2QoYykpYnJlYWsgYTtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOms9UmQ7YnJlYWs7Y2FzZSBcImZvY3VzaW5cIjp4PVwiZm9jdXNcIjtrPUZkO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOng9XCJibHVyXCI7az1GZDticmVhaztjYXNlIFwiYmVmb3JlYmx1clwiOmNhc2UgXCJhZnRlcmJsdXJcIjprPUZkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilicmVhayBhO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6az1CZDticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjprPVxuRGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6az1WZDticmVhaztjYXNlIEljOmNhc2UgSmM6Y2FzZSBLYzprPUhkO2JyZWFrO2Nhc2UgTGM6az1YZDticmVhaztjYXNlIFwic2Nyb2xsXCI6az12ZDticmVhaztjYXNlIFwid2hlZWxcIjprPVpkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOms9SmQ7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6az1UZH12YXIgdz0wIT09KGImNCksej0hdyYmXCJzY3JvbGxcIj09PWEsdT13P251bGwhPT1oP2grXCJDYXB0dXJlXCI6bnVsbDpoO3c9W107Zm9yKHZhciB0PWQscTtudWxsIT09XG50Oyl7cT10O3ZhciB2PXEuc3RhdGVOb2RlOzU9PT1xLnRhZyYmbnVsbCE9PXYmJihxPXYsbnVsbCE9PXUmJih2PU9iKHQsdSksbnVsbCE9diYmdy5wdXNoKGVmKHQsdixxKSkpKTtpZih6KWJyZWFrO3Q9dC5yZXR1cm59MDx3Lmxlbmd0aCYmKGg9bmV3IGsoaCx4LG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmgsbGlzdGVuZXJzOnd9KSl9fWlmKDA9PT0oYiY3KSl7YTp7aD1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YTtrPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihoJiYwPT09KGImMTYpJiYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMuZnJvbUVsZW1lbnQpJiYod2MoeCl8fHhbZmZdKSlicmVhayBhO2lmKGt8fGgpe2g9ZS53aW5kb3c9PT1lP2U6KGg9ZS5vd25lckRvY3VtZW50KT9oLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvdzp3aW5kb3c7aWYoayl7aWYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMudG9FbGVtZW50LGs9ZCx4PXg/d2MoeCk6bnVsbCxudWxsIT09XG54JiYoej1aYih4KSx4IT09enx8NSE9PXgudGFnJiY2IT09eC50YWcpKXg9bnVsbH1lbHNlIGs9bnVsbCx4PWQ7aWYoayE9PXgpe3c9QmQ7dj1cIm9uTW91c2VMZWF2ZVwiO3U9XCJvbk1vdXNlRW50ZXJcIjt0PVwibW91c2VcIjtpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpdz1UZCx2PVwib25Qb2ludGVyTGVhdmVcIix1PVwib25Qb2ludGVyRW50ZXJcIix0PVwicG9pbnRlclwiO3o9bnVsbD09az9oOnVlKGspO3E9bnVsbD09eD9oOnVlKHgpO2g9bmV3IHcodix0K1wibGVhdmVcIixrLGMsZSk7aC50YXJnZXQ9ejtoLnJlbGF0ZWRUYXJnZXQ9cTt2PW51bGw7d2MoZSk9PT1kJiYodz1uZXcgdyh1LHQrXCJlbnRlclwiLHgsYyxlKSx3LnRhcmdldD1xLHcucmVsYXRlZFRhcmdldD16LHY9dyk7ej12O2lmKGsmJngpYjp7dz1rO3U9eDt0PTA7Zm9yKHE9dztxO3E9Z2YocSkpdCsrO3E9MDtmb3Iodj11O3Y7dj1nZih2KSlxKys7Zm9yKDswPHQtcTspdz1nZih3KSx0LS07Zm9yKDswPHEtdDspdT1cbmdmKHUpLHEtLTtmb3IoO3QtLTspe2lmKHc9PT11fHxudWxsIT09dSYmdz09PXUuYWx0ZXJuYXRlKWJyZWFrIGI7dz1nZih3KTt1PWdmKHUpfXc9bnVsbH1lbHNlIHc9bnVsbDtudWxsIT09ayYmaGYoZyxoLGssdywhMSk7bnVsbCE9PXgmJm51bGwhPT16JiZoZihnLHoseCx3LCEwKX19fWE6e2g9ZD91ZShkKTp3aW5kb3c7az1oLm5vZGVOYW1lJiZoLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJzZWxlY3RcIj09PWt8fFwiaW5wdXRcIj09PWsmJlwiZmlsZVwiPT09aC50eXBlKXZhciBKPXZlO2Vsc2UgaWYobWUoaCkpaWYod2UpSj1GZTtlbHNle0o9RGU7dmFyIEs9Q2V9ZWxzZShrPWgubm9kZU5hbWUpJiZcImlucHV0XCI9PT1rLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1oLnR5cGV8fFwicmFkaW9cIj09PWgudHlwZSkmJihKPUVlKTtpZihKJiYoSj1KKGEsZCkpKXtuZShnLEosYyxlKTticmVhayBhfUsmJksoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJihLPWguX3dyYXBwZXJTdGF0ZSkmJlxuSy5jb250cm9sbGVkJiZcIm51bWJlclwiPT09aC50eXBlJiZiYihoLFwibnVtYmVyXCIsaC52YWx1ZSl9Sz1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZShLKXx8XCJ0cnVlXCI9PT1LLmNvbnRlbnRFZGl0YWJsZSlRZT1LLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgUTtpZihhZSliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjp2YXIgTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6TD1cIm9uQ29tcG9zaXRpb25FbmRcIjticmVhayBiO1xuY2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6TD1cIm9uQ29tcG9zaXRpb25VcGRhdGVcIjticmVhayBifUw9dm9pZCAwfWVsc2UgaWU/Z2UoYSxjKSYmKEw9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiKTtMJiYoZGUmJlwia29cIiE9PWMubG9jYWxlJiYoaWV8fFwib25Db21wb3NpdGlvblN0YXJ0XCIhPT1MP1wib25Db21wb3NpdGlvbkVuZFwiPT09TCYmaWUmJihRPW5kKCkpOihrZD1lLGxkPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGllPSEwKSksSz1vZShkLEwpLDA8Sy5sZW5ndGgmJihMPW5ldyBMZChMLGEsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6TCxsaXN0ZW5lcnM6S30pLFE/TC5kYXRhPVE6KFE9aGUoYyksbnVsbCE9PVEmJihMLmRhdGE9USkpKSk7aWYoUT1jZT9qZShhLGMpOmtlKGEsYykpZD1vZShkLFwib25CZWZvcmVJbnB1dFwiKSwwPGQubGVuZ3RoJiYoZT1uZXcgTGQoXCJvbkJlZm9yZUlucHV0XCIsXG5cImJlZm9yZWlucHV0XCIsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6ZSxsaXN0ZW5lcnM6ZH0pLGUuZGF0YT1RKX1zZShnLGIpfSl9ZnVuY3Rpb24gZWYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPU9iKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KGVmKGEsZixlKSksZj1PYihhLGIpLG51bGwhPWYmJmQucHVzaChlZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIGdmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiBoZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPU9iKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KGVmKGMsayxoKSkpOmV8fChrPU9iKGMsZiksbnVsbCE9ayYmZy5wdXNoKGVmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9ZnVuY3Rpb24gamYoKXt9dmFyIGtmPW51bGwsbGY9bnVsbDtmdW5jdGlvbiBtZihhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9XG5mdW5jdGlvbiBuZihhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9dmFyIG9mPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHBmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMDtmdW5jdGlvbiBxZihhKXsxPT09YS5ub2RlVHlwZT9hLnRleHRDb250ZW50PVwiXCI6OT09PWEubm9kZVR5cGUmJihhPWEuYm9keSxudWxsIT1hJiYoYS50ZXh0Q29udGVudD1cIlwiKSl9XG5mdW5jdGlvbiByZihhKXtmb3IoO251bGwhPWE7YT1hLm5leHRTaWJsaW5nKXt2YXIgYj1hLm5vZGVUeXBlO2lmKDE9PT1ifHwzPT09YilicmVha31yZXR1cm4gYX1mdW5jdGlvbiBzZihhKXthPWEucHJldmlvdXNTaWJsaW5nO2Zvcih2YXIgYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiJFwiPT09Y3x8XCIkIVwiPT09Y3x8XCIkP1wiPT09Yyl7aWYoMD09PWIpcmV0dXJuIGE7Yi0tfWVsc2VcIi8kXCI9PT1jJiZiKyt9YT1hLnByZXZpb3VzU2libGluZ31yZXR1cm4gbnVsbH12YXIgdGY9MDtmdW5jdGlvbiB1ZihhKXtyZXR1cm57JCR0eXBlb2Y6R2EsdG9TdHJpbmc6YSx2YWx1ZU9mOmF9fXZhciB2Zj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSx3Zj1cIl9fcmVhY3RGaWJlciRcIit2Zix4Zj1cIl9fcmVhY3RQcm9wcyRcIit2ZixmZj1cIl9fcmVhY3RDb250YWluZXIkXCIrdmYseWY9XCJfX3JlYWN0RXZlbnRzJFwiK3ZmO1xuZnVuY3Rpb24gd2MoYSl7dmFyIGI9YVt3Zl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbZmZdfHxjW3dmXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPXNmKGEpO251bGwhPT1hOyl7aWYoYz1hW3dmXSlyZXR1cm4gYzthPXNmKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbd2ZdfHxhW2ZmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHkoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbeGZdfHxudWxsfVxuZnVuY3Rpb24gJGUoYSl7dmFyIGI9YVt5Zl07dm9pZCAwPT09YiYmKGI9YVt5Zl09bmV3IFNldCk7cmV0dXJuIGJ9dmFyIHpmPVtdLEFmPS0xO2Z1bmN0aW9uIEJmKGEpe3JldHVybntjdXJyZW50OmF9fWZ1bmN0aW9uIEgoYSl7MD5BZnx8KGEuY3VycmVudD16ZltBZl0semZbQWZdPW51bGwsQWYtLSl9ZnVuY3Rpb24gSShhLGIpe0FmKys7emZbQWZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgQ2Y9e30sTT1CZihDZiksTj1CZighMSksRGY9Q2Y7XG5mdW5jdGlvbiBFZihhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIENmO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfWZ1bmN0aW9uIEZmKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gR2YoKXtIKE4pO0goTSl9ZnVuY3Rpb24gSGYoYSxiLGMpe2lmKE0uY3VycmVudCE9PUNmKXRocm93IEVycm9yKHkoMTY4KSk7SShNLGIpO0koTixjKX1cbmZ1bmN0aW9uIElmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYSkpdGhyb3cgRXJyb3IoeSgxMDgsUmEoYil8fFwiVW5rbm93blwiLGUpKTtyZXR1cm4gbSh7fSxjLGQpfWZ1bmN0aW9uIEpmKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxDZjtEZj1NLmN1cnJlbnQ7SShNLGEpO0koTixOLmN1cnJlbnQpO3JldHVybiEwfWZ1bmN0aW9uIEtmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtpZighZCl0aHJvdyBFcnJvcih5KDE2OSkpO2M/KGE9SWYoYSxiLERmKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWEsSChOKSxIKE0pLEkoTSxhKSk6SChOKTtJKE4sYyl9XG52YXIgTGY9bnVsbCxNZj1udWxsLE5mPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LE9mPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxQZj1yLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLFFmPXIudW5zdGFibGVfc2hvdWxkWWllbGQsUmY9ci51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsU2Y9ci51bnN0YWJsZV9ub3csVGY9ci51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCxVZj1yLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LFZmPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksV2Y9ci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxYZj1yLnVuc3RhYmxlX0xvd1ByaW9yaXR5LFlmPXIudW5zdGFibGVfSWRsZVByaW9yaXR5LFpmPXt9LCRmPXZvaWQgMCE9PVJmP1JmOmZ1bmN0aW9uKCl7fSxhZz1udWxsLGJnPW51bGwsY2c9ITEsZGc9U2YoKSxPPTFFND5kZz9TZjpmdW5jdGlvbigpe3JldHVybiBTZigpLWRnfTtcbmZ1bmN0aW9uIGVnKCl7c3dpdGNoKFRmKCkpe2Nhc2UgVWY6cmV0dXJuIDk5O2Nhc2UgVmY6cmV0dXJuIDk4O2Nhc2UgV2Y6cmV0dXJuIDk3O2Nhc2UgWGY6cmV0dXJuIDk2O2Nhc2UgWWY6cmV0dXJuIDk1O2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGZnKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiBVZjtjYXNlIDk4OnJldHVybiBWZjtjYXNlIDk3OnJldHVybiBXZjtjYXNlIDk2OnJldHVybiBYZjtjYXNlIDk1OnJldHVybiBZZjtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBnZyhhLGIpe2E9ZmcoYSk7cmV0dXJuIE5mKGEsYil9ZnVuY3Rpb24gaGcoYSxiLGMpe2E9ZmcoYSk7cmV0dXJuIE9mKGEsYixjKX1mdW5jdGlvbiBpZygpe2lmKG51bGwhPT1iZyl7dmFyIGE9Ymc7Ymc9bnVsbDtQZihhKX1qZygpfVxuZnVuY3Rpb24gamcoKXtpZighY2cmJm51bGwhPT1hZyl7Y2c9ITA7dmFyIGE9MDt0cnl7dmFyIGI9YWc7Z2coOTksZnVuY3Rpb24oKXtmb3IoO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1iW2FdO2RvIGM9YyghMCk7d2hpbGUobnVsbCE9PWMpfX0pO2FnPW51bGx9Y2F0Y2goYyl7dGhyb3cgbnVsbCE9PWFnJiYoYWc9YWcuc2xpY2UoYSsxKSksT2YoVWYsaWcpLGM7fWZpbmFsbHl7Y2c9ITF9fX12YXIga2c9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWc7ZnVuY3Rpb24gbGcoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1tKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGJ9dmFyIG1nPUJmKG51bGwpLG5nPW51bGwsb2c9bnVsbCxwZz1udWxsO2Z1bmN0aW9uIHFnKCl7cGc9b2c9bmc9bnVsbH1cbmZ1bmN0aW9uIHJnKGEpe3ZhciBiPW1nLmN1cnJlbnQ7SChtZyk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBzZyhhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmFsdGVybmF0ZTtpZigoYS5jaGlsZExhbmVzJmIpPT09YilpZihudWxsPT09Y3x8KGMuY2hpbGRMYW5lcyZiKT09PWIpYnJlYWs7ZWxzZSBjLmNoaWxkTGFuZXN8PWI7ZWxzZSBhLmNoaWxkTGFuZXN8PWIsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpO2E9YS5yZXR1cm59fWZ1bmN0aW9uIHRnKGEsYil7bmc9YTtwZz1vZz1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKDAhPT0oYS5sYW5lcyZiKSYmKHVnPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1cbmZ1bmN0aW9uIHZnKGEsYil7aWYocGchPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKXBnPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O2lmKG51bGw9PT1vZyl7aWYobnVsbD09PW5nKXRocm93IEVycm9yKHkoMzA4KSk7b2c9YjtuZy5kZXBlbmRlbmNpZXM9e2xhbmVzOjAsZmlyc3RDb250ZXh0OmIscmVzcG9uZGVyczpudWxsfX1lbHNlIG9nPW9nLm5leHQ9Yn1yZXR1cm4gYS5fY3VycmVudFZhbHVlfXZhciB3Zz0hMTtmdW5jdGlvbiB4ZyhhKXthLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5tZW1vaXplZFN0YXRlLGZpcnN0QmFzZVVwZGF0ZTpudWxsLGxhc3RCYXNlVXBkYXRlOm51bGwsc2hhcmVkOntwZW5kaW5nOm51bGx9LGVmZmVjdHM6bnVsbH19XG5mdW5jdGlvbiB5ZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPT09YSYmKGIudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6YS5maXJzdEJhc2VVcGRhdGUsbGFzdEJhc2VVcGRhdGU6YS5sYXN0QmFzZVVwZGF0ZSxzaGFyZWQ6YS5zaGFyZWQsZWZmZWN0czphLmVmZmVjdHN9KX1mdW5jdGlvbiB6ZyhhLGIpe3JldHVybntldmVudFRpbWU6YSxsYW5lOmIsdGFnOjAscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsfX1mdW5jdGlvbiBBZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09YSl7YT1hLnNoYXJlZDt2YXIgYz1hLnBlbmRpbmc7bnVsbD09PWM/Yi5uZXh0PWI6KGIubmV4dD1jLm5leHQsYy5uZXh0PWIpO2EucGVuZGluZz1ifX1cbmZ1bmN0aW9uIEJnKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZSxkPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1kJiYoZD1kLnVwZGF0ZVF1ZXVlLGM9PT1kKSl7dmFyIGU9bnVsbCxmPW51bGw7Yz1jLmZpcnN0QmFzZVVwZGF0ZTtpZihudWxsIT09Yyl7ZG97dmFyIGc9e2V2ZW50VGltZTpjLmV2ZW50VGltZSxsYW5lOmMubGFuZSx0YWc6Yy50YWcscGF5bG9hZDpjLnBheWxvYWQsY2FsbGJhY2s6Yy5jYWxsYmFjayxuZXh0Om51bGx9O251bGw9PT1mP2U9Zj1nOmY9Zi5uZXh0PWc7Yz1jLm5leHR9d2hpbGUobnVsbCE9PWMpO251bGw9PT1mP2U9Zj1iOmY9Zi5uZXh0PWJ9ZWxzZSBlPWY9YjtjPXtiYXNlU3RhdGU6ZC5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmUsbGFzdEJhc2VVcGRhdGU6ZixzaGFyZWQ6ZC5zaGFyZWQsZWZmZWN0czpkLmVmZmVjdHN9O2EudXBkYXRlUXVldWU9YztyZXR1cm59YT1jLmxhc3RCYXNlVXBkYXRlO251bGw9PT1hP2MuZmlyc3RCYXNlVXBkYXRlPWI6YS5uZXh0PVxuYjtjLmxhc3RCYXNlVXBkYXRlPWJ9XG5mdW5jdGlvbiBDZyhhLGIsYyxkKXt2YXIgZT1hLnVwZGF0ZVF1ZXVlO3dnPSExO3ZhciBmPWUuZmlyc3RCYXNlVXBkYXRlLGc9ZS5sYXN0QmFzZVVwZGF0ZSxoPWUuc2hhcmVkLnBlbmRpbmc7aWYobnVsbCE9PWgpe2Uuc2hhcmVkLnBlbmRpbmc9bnVsbDt2YXIgaz1oLGw9ay5uZXh0O2submV4dD1udWxsO251bGw9PT1nP2Y9bDpnLm5leHQ9bDtnPWs7dmFyIG49YS5hbHRlcm5hdGU7aWYobnVsbCE9PW4pe249bi51cGRhdGVRdWV1ZTt2YXIgQT1uLmxhc3RCYXNlVXBkYXRlO0EhPT1nJiYobnVsbD09PUE/bi5maXJzdEJhc2VVcGRhdGU9bDpBLm5leHQ9bCxuLmxhc3RCYXNlVXBkYXRlPWspfX1pZihudWxsIT09Zil7QT1lLmJhc2VTdGF0ZTtnPTA7bj1sPWs9bnVsbDtkb3toPWYubGFuZTt2YXIgcD1mLmV2ZW50VGltZTtpZigoZCZoKT09PWgpe251bGwhPT1uJiYobj1uLm5leHQ9e2V2ZW50VGltZTpwLGxhbmU6MCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxcbm5leHQ6bnVsbH0pO2E6e3ZhciBDPWEseD1mO2g9YjtwPWM7c3dpdGNoKHgudGFnKXtjYXNlIDE6Qz14LnBheWxvYWQ7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEMpe0E9Qy5jYWxsKHAsQSxoKTticmVhayBhfUE9QzticmVhayBhO2Nhc2UgMzpDLmZsYWdzPUMuZmxhZ3MmLTQwOTd8NjQ7Y2FzZSAwOkM9eC5wYXlsb2FkO2g9XCJmdW5jdGlvblwiPT09dHlwZW9mIEM/Qy5jYWxsKHAsQSxoKTpDO2lmKG51bGw9PT1ofHx2b2lkIDA9PT1oKWJyZWFrIGE7QT1tKHt9LEEsaCk7YnJlYWsgYTtjYXNlIDI6d2c9ITB9fW51bGwhPT1mLmNhbGxiYWNrJiYoYS5mbGFnc3w9MzIsaD1lLmVmZmVjdHMsbnVsbD09PWg/ZS5lZmZlY3RzPVtmXTpoLnB1c2goZikpfWVsc2UgcD17ZXZlbnRUaW1lOnAsbGFuZTpoLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLG5leHQ6bnVsbH0sbnVsbD09PW4/KGw9bj1wLGs9QSk6bj1uLm5leHQ9cCxnfD1oO2Y9Zi5uZXh0O2lmKG51bGw9PT1cbmYpaWYoaD1lLnNoYXJlZC5wZW5kaW5nLG51bGw9PT1oKWJyZWFrO2Vsc2UgZj1oLm5leHQsaC5uZXh0PW51bGwsZS5sYXN0QmFzZVVwZGF0ZT1oLGUuc2hhcmVkLnBlbmRpbmc9bnVsbH13aGlsZSgxKTtudWxsPT09biYmKGs9QSk7ZS5iYXNlU3RhdGU9aztlLmZpcnN0QmFzZVVwZGF0ZT1sO2UubGFzdEJhc2VVcGRhdGU9bjtEZ3w9ZzthLmxhbmVzPWc7YS5tZW1vaXplZFN0YXRlPUF9fWZ1bmN0aW9uIEVnKGEsYixjKXthPWIuZWZmZWN0cztiLmVmZmVjdHM9bnVsbDtpZihudWxsIT09YSlmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9ZC5jYWxsYmFjaztpZihudWxsIT09ZSl7ZC5jYWxsYmFjaz1udWxsO2Q9YztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZSl0aHJvdyBFcnJvcih5KDE5MSxlKSk7ZS5jYWxsKGQpfX19dmFyIEZnPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24gR2coYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm0oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YzswPT09YS5sYW5lcyYmKGEudXBkYXRlUXVldWUuYmFzZVN0YXRlPWMpfVxudmFyIEtnPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbHMpP1piKGEpPT09YTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi50YWc9MTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGM9SGcoKSxkPUlnKGEpLGU9emcoYyxkKTtlLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZS5jYWxsYmFjaz1cbmIpO0FnKGEsZSk7SmcoYSxkLGMpfX07ZnVuY3Rpb24gTGcoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hSmUoYyxkKXx8IUplKGUsZik6ITB9XG5mdW5jdGlvbiBNZyhhLGIsYyl7dmFyIGQ9ITEsZT1DZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj12ZyhmKTooZT1GZihiKT9EZjpNLmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9FZihhLGUpOkNmKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9S2c7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFscz1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBOZyhhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBPZyhhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPUZnO3hnKGEpO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9dmcoZik6KGY9RmYoYik/RGY6TS5jdXJyZW50LGUuY29udGV4dD1FZihhLGYpKTtDZyhhLGMsZSxkKTtlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoR2coYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8XG4oYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCksQ2coYSxjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5mbGFnc3w9NCl9dmFyIFBnPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBRZyhhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7aWYoYyl7aWYoMSE9PWMudGFnKXRocm93IEVycm9yKHkoMzA5KSk7dmFyIGQ9Yy5zdGF0ZU5vZGV9aWYoIWQpdGhyb3cgRXJyb3IoeSgxNDcsYSkpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09RmcmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1pZihcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgRXJyb3IoeSgyODQpKTtpZighYy5fb3duZXIpdGhyb3cgRXJyb3IoeSgyOTAsYSkpO31yZXR1cm4gYX1cbmZ1bmN0aW9uIFJnKGEsYil7aWYoXCJ0ZXh0YXJlYVwiIT09YS50eXBlKXRocm93IEVycm9yKHkoMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7fVxuZnVuY3Rpb24gU2coYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIubGFzdEVmZmVjdDtudWxsIT09ZD8oZC5uZXh0RWZmZWN0PWMsYi5sYXN0RWZmZWN0PWMpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWM7Yy5uZXh0RWZmZWN0PW51bGw7Yy5mbGFncz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYil7YT1UZyhhLGIpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5mbGFncz0yLFxuYyk6ZDtiLmZsYWdzPTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmZsYWdzPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1VZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzKSxkLnJlZj1RZyhhLGIsYyksZC5yZXR1cm49YSxkO2Q9VmcoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9UWcoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PWMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9XG5XZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10pO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbihhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9WGcoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBBKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1VZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYz1WZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1RZyhhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgdGE6cmV0dXJuIGI9V2coYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKFBnKGIpfHxMYShiKSlyZXR1cm4gYj1YZyhiLFxuYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO1JnKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PXVhP24oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTprKGEsYixjLGQpOm51bGw7Y2FzZSB0YTpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbH1pZihQZyhjKXx8TGEoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bihhLGIsYyxkLG51bGwpO1JnKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQyhhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPWEuZ2V0KGMpfHxcbm51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT11YT9uKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmsoYixhLGQsZSk7Y2FzZSB0YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsbChiLGEsZCxlKX1pZihQZyhkKXx8TGEoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbihiLGEsZCxlLG51bGwpO1JnKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24geChlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCx0PW51bGwsdT1nLHo9Zz0wLHE9bnVsbDtudWxsIT09dSYmejxoLmxlbmd0aDt6Kyspe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIG49cChlLHUsaFt6XSxrKTtpZihudWxsPT09bil7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT1cbm4uYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKG4sZyx6KTtudWxsPT09dD9sPW46dC5zaWJsaW5nPW47dD1uO3U9cX1pZih6PT09aC5sZW5ndGgpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoO3o8aC5sZW5ndGg7eisrKXU9QShlLGhbel0sayksbnVsbCE9PXUmJihnPWYodSxnLHopLG51bGw9PT10P2w9dTp0LnNpYmxpbmc9dSx0PXUpO3JldHVybiBsfWZvcih1PWQoZSx1KTt6PGgubGVuZ3RoO3orKylxPUModSxlLHosaFt6XSxrKSxudWxsIT09cSYmKGEmJm51bGwhPT1xLmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PXEua2V5P3o6cS5rZXkpLGc9ZihxLGcseiksbnVsbD09PXQ/bD1xOnQuc2libGluZz1xLHQ9cSk7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiB3KGUsZyxoLGspe3ZhciBsPUxhKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHkoMTUwKSk7aD1sLmNhbGwoaCk7aWYobnVsbD09XG5oKXRocm93IEVycm9yKHkoMTUxKSk7Zm9yKHZhciB0PWw9bnVsbCx1PWcsej1nPTAscT1udWxsLG49aC5uZXh0KCk7bnVsbCE9PXUmJiFuLmRvbmU7eisrLG49aC5uZXh0KCkpe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIHc9cChlLHUsbi52YWx1ZSxrKTtpZihudWxsPT09dyl7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT13LmFsdGVybmF0ZSYmYihlLHUpO2c9Zih3LGcseik7bnVsbD09PXQ/bD13OnQuc2libGluZz13O3Q9dzt1PXF9aWYobi5kb25lKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDshbi5kb25lO3orKyxuPWgubmV4dCgpKW49QShlLG4udmFsdWUsayksbnVsbCE9PW4mJihnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO3JldHVybiBsfWZvcih1PWQoZSx1KTshbi5kb25lO3orKyxuPWgubmV4dCgpKW49Qyh1LGUseixuLnZhbHVlLGspLG51bGwhPT1uJiYoYSYmbnVsbCE9PW4uYWx0ZXJuYXRlJiZcbnUuZGVsZXRlKG51bGw9PT1uLmtleT96Om4ua2V5KSxnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9cmV0dXJuIGZ1bmN0aW9uKGEsZCxmLGgpe3ZhciBrPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PXVhJiZudWxsPT09Zi5rZXk7ayYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7dmFyIGw9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZjtpZihsKXN3aXRjaChmLiQkdHlwZW9mKXtjYXNlIHNhOmE6e2w9Zi5rZXk7Zm9yKGs9ZDtudWxsIT09azspe2lmKGsua2V5PT09bCl7c3dpdGNoKGsudGFnKXtjYXNlIDc6aWYoZi50eXBlPT09dWEpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYucHJvcHMuY2hpbGRyZW4pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YnJlYWs7ZGVmYXVsdDppZihrLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtcbmQ9ZShrLGYucHJvcHMpO2QucmVmPVFnKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfX1jKGEsayk7YnJlYWt9ZWxzZSBiKGEsayk7az1rLnNpYmxpbmd9Zi50eXBlPT09dWE/KGQ9WGcoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPVZnKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPVFnKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSB0YTphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09aylpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1cbldnKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpfWlmKFwic3RyaW5nXCI9PT10eXBlb2YgZnx8XCJudW1iZXJcIj09PXR5cGVvZiBmKXJldHVybiBmPVwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPVVnKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpO2lmKFBnKGYpKXJldHVybiB4KGEsZCxmLGgpO2lmKExhKGYpKXJldHVybiB3KGEsZCxmLGgpO2wmJlJnKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDIyOmNhc2UgMDpjYXNlIDExOmNhc2UgMTU6dGhyb3cgRXJyb3IoeSgxNTIsUmEoYS50eXBlKXx8XCJDb21wb25lbnRcIikpO31yZXR1cm4gYyhhLGQpfX12YXIgWWc9U2coITApLFpnPVNnKCExKSwkZz17fSxhaD1CZigkZyksYmg9QmYoJGcpLGNoPUJmKCRnKTtcbmZ1bmN0aW9uIGRoKGEpe2lmKGE9PT0kZyl0aHJvdyBFcnJvcih5KDE3NCkpO3JldHVybiBhfWZ1bmN0aW9uIGVoKGEsYil7SShjaCxiKTtJKGJoLGEpO0koYWgsJGcpO2E9Yi5ub2RlVHlwZTtzd2l0Y2goYSl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6bWIobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmE9OD09PWE/Yi5wYXJlbnROb2RlOmIsYj1hLm5hbWVzcGFjZVVSSXx8bnVsbCxhPWEudGFnTmFtZSxiPW1iKGIsYSl9SChhaCk7SShhaCxiKX1mdW5jdGlvbiBmaCgpe0goYWgpO0goYmgpO0goY2gpfWZ1bmN0aW9uIGdoKGEpe2RoKGNoLmN1cnJlbnQpO3ZhciBiPWRoKGFoLmN1cnJlbnQpO3ZhciBjPW1iKGIsYS50eXBlKTtiIT09YyYmKEkoYmgsYSksSShhaCxjKSl9ZnVuY3Rpb24gaGgoYSl7YmguY3VycmVudD09PWEmJihIKGFoKSxIKGJoKSl9dmFyIFA9QmYoMCk7XG5mdW5jdGlvbiBpaChhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe3ZhciBjPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGw9PT1jfHxcIiQ/XCI9PT1jLmRhdGF8fFwiJCFcIj09PWMuZGF0YSkpcmV0dXJuIGJ9ZWxzZSBpZigxOT09PWIudGFnJiZ2b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMucmV2ZWFsT3JkZXIpe2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGJ9ZWxzZSBpZihudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfXJldHVybiBudWxsfXZhciBqaD1udWxsLGtoPW51bGwsbGg9ITE7XG5mdW5jdGlvbiBtaChhLGIpe3ZhciBjPW5oKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmZsYWdzPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiBvaChhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcGgoYSl7aWYobGgpe3ZhciBiPWtoO2lmKGIpe3ZhciBjPWI7aWYoIW9oKGEsYikpe2I9cmYoYy5uZXh0U2libGluZyk7aWYoIWJ8fCFvaChhLGIpKXthLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MjtsaD0hMTtqaD1hO3JldHVybn1taChqaCxjKX1qaD1hO2toPXJmKGIuZmlyc3RDaGlsZCl9ZWxzZSBhLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MixsaD0hMSxqaD1hfX1mdW5jdGlvbiBxaChhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjEzIT09YS50YWc7KWE9YS5yZXR1cm47amg9YX1cbmZ1bmN0aW9uIHJoKGEpe2lmKGEhPT1qaClyZXR1cm4hMTtpZighbGgpcmV0dXJuIHFoKGEpLGxoPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhbmYoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPWtoO2I7KW1oKGEsYiksYj1yZihiLm5leHRTaWJsaW5nKTtxaChhKTtpZigxMz09PWEudGFnKXthPWEubWVtb2l6ZWRTdGF0ZTthPW51bGwhPT1hP2EuZGVoeWRyYXRlZDpudWxsO2lmKCFhKXRocm93IEVycm9yKHkoMzE3KSk7YTp7YT1hLm5leHRTaWJsaW5nO2ZvcihiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIvJFwiPT09Yyl7aWYoMD09PWIpe2toPXJmKGEubmV4dFNpYmxpbmcpO2JyZWFrIGF9Yi0tfWVsc2VcIiRcIiE9PWMmJlwiJCFcIiE9PWMmJlwiJD9cIiE9PWN8fGIrK31hPWEubmV4dFNpYmxpbmd9a2g9bnVsbH19ZWxzZSBraD1qaD9yZihhLnN0YXRlTm9kZS5uZXh0U2libGluZyk6bnVsbDtyZXR1cm4hMH1cbmZ1bmN0aW9uIHNoKCl7a2g9amg9bnVsbDtsaD0hMX12YXIgdGg9W107ZnVuY3Rpb24gdWgoKXtmb3IodmFyIGE9MDthPHRoLmxlbmd0aDthKyspdGhbYV0uX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9bnVsbDt0aC5sZW5ndGg9MH12YXIgdmg9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcix3aD1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyx4aD0wLFI9bnVsbCxTPW51bGwsVD1udWxsLHloPSExLHpoPSExO2Z1bmN0aW9uIEFoKCl7dGhyb3cgRXJyb3IoeSgzMjEpKTt9ZnVuY3Rpb24gQmgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighSGUoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIENoKGEsYixjLGQsZSxmKXt4aD1mO1I9YjtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7Yi5sYW5lcz0wO3ZoLmN1cnJlbnQ9bnVsbD09PWF8fG51bGw9PT1hLm1lbW9pemVkU3RhdGU/RGg6RWg7YT1jKGQsZSk7aWYoemgpe2Y9MDtkb3t6aD0hMTtpZighKDI1PmYpKXRocm93IEVycm9yKHkoMzAxKSk7Zis9MTtUPVM9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7dmguY3VycmVudD1GaDthPWMoZCxlKX13aGlsZSh6aCl9dmguY3VycmVudD1HaDtiPW51bGwhPT1TJiZudWxsIT09Uy5uZXh0O3hoPTA7VD1TPVI9bnVsbDt5aD0hMTtpZihiKXRocm93IEVycm9yKHkoMzAwKSk7cmV0dXJuIGF9ZnVuY3Rpb24gSGgoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLGJhc2VRdWV1ZTpudWxsLHF1ZXVlOm51bGwsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWE7cmV0dXJuIFR9XG5mdW5jdGlvbiBJaCgpe2lmKG51bGw9PT1TKXt2YXIgYT1SLmFsdGVybmF0ZTthPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsfWVsc2UgYT1TLm5leHQ7dmFyIGI9bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlOlQubmV4dDtpZihudWxsIT09YilUPWIsUz1hO2Vsc2V7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeSgzMTApKTtTPWE7YT17bWVtb2l6ZWRTdGF0ZTpTLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOlMuYmFzZVN0YXRlLGJhc2VRdWV1ZTpTLmJhc2VRdWV1ZSxxdWV1ZTpTLnF1ZXVlLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hfXJldHVybiBUfWZ1bmN0aW9uIEpoKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gS2goYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1TLGU9ZC5iYXNlUXVldWUsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe2lmKG51bGwhPT1lKXt2YXIgZz1lLm5leHQ7ZS5uZXh0PWYubmV4dDtmLm5leHQ9Z31kLmJhc2VRdWV1ZT1lPWY7Yy5wZW5kaW5nPW51bGx9aWYobnVsbCE9PWUpe2U9ZS5uZXh0O2Q9ZC5iYXNlU3RhdGU7dmFyIGg9Zz1mPW51bGwsaz1lO2Rve3ZhciBsPWsubGFuZTtpZigoeGgmbCk9PT1sKW51bGwhPT1oJiYoaD1oLm5leHQ9e2xhbmU6MCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLGVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH0pLGQ9ay5lYWdlclJlZHVjZXI9PT1hP2suZWFnZXJTdGF0ZTphKGQsay5hY3Rpb24pO2Vsc2V7dmFyIG49e2xhbmU6bCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLFxuZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfTtudWxsPT09aD8oZz1oPW4sZj1kKTpoPWgubmV4dD1uO1IubGFuZXN8PWw7RGd8PWx9az1rLm5leHR9d2hpbGUobnVsbCE9PWsmJmshPT1lKTtudWxsPT09aD9mPWQ6aC5uZXh0PWc7SGUoZCxiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1kO2IuYmFzZVN0YXRlPWY7Yi5iYXNlUXVldWU9aDtjLmxhc3RSZW5kZXJlZFN0YXRlPWR9cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIExoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9Yy5kaXNwYXRjaCxlPWMucGVuZGluZyxmPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSl7Yy5wZW5kaW5nPW51bGw7dmFyIGc9ZT1lLm5leHQ7ZG8gZj1hKGYsZy5hY3Rpb24pLGc9Zy5uZXh0O3doaWxlKGchPT1lKTtIZShmLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7bnVsbD09PWIuYmFzZVF1ZXVlJiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltmLGRdfVxuZnVuY3Rpb24gTWgoYSxiLGMpe3ZhciBkPWIuX2dldFZlcnNpb247ZD1kKGIuX3NvdXJjZSk7dmFyIGU9Yi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeTtpZihudWxsIT09ZSlhPWU9PT1kO2Vsc2UgaWYoYT1hLm11dGFibGVSZWFkTGFuZXMsYT0oeGgmYSk9PT1hKWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9ZCx0aC5wdXNoKGIpO2lmKGEpcmV0dXJuIGMoYi5fc291cmNlKTt0aC5wdXNoKGIpO3Rocm93IEVycm9yKHkoMzUwKSk7fVxuZnVuY3Rpb24gTmgoYSxiLGMsZCl7dmFyIGU9VTtpZihudWxsPT09ZSl0aHJvdyBFcnJvcih5KDM0OSkpO3ZhciBmPWIuX2dldFZlcnNpb24sZz1mKGIuX3NvdXJjZSksaD12aC5jdXJyZW50LGs9aC51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBNaChlLGIsYyl9KSxsPWtbMV0sbj1rWzBdO2s9VDt2YXIgQT1hLm1lbW9pemVkU3RhdGUscD1BLnJlZnMsQz1wLmdldFNuYXBzaG90LHg9QS5zb3VyY2U7QT1BLnN1YnNjcmliZTt2YXIgdz1SO2EubWVtb2l6ZWRTdGF0ZT17cmVmczpwLHNvdXJjZTpiLHN1YnNjcmliZTpkfTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3AuZ2V0U25hcHNob3Q9YztwLnNldFNuYXBzaG90PWw7dmFyIGE9ZihiLl9zb3VyY2UpO2lmKCFIZShnLGEpKXthPWMoYi5fc291cmNlKTtIZShuLGEpfHwobChhKSxhPUlnKHcpLGUubXV0YWJsZVJlYWRMYW5lc3w9YSZlLnBlbmRpbmdMYW5lcyk7YT1lLm11dGFibGVSZWFkTGFuZXM7ZS5lbnRhbmdsZWRMYW5lc3w9YTtmb3IodmFyIGQ9XG5lLmVudGFuZ2xlbWVudHMsaD1hOzA8aDspe3ZhciBrPTMxLVZjKGgpLHY9MTw8aztkW2tdfD1hO2gmPX52fX19LFtjLGIsZF0pO2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIGQoYi5fc291cmNlLGZ1bmN0aW9uKCl7dmFyIGE9cC5nZXRTbmFwc2hvdCxjPXAuc2V0U25hcHNob3Q7dHJ5e2MoYShiLl9zb3VyY2UpKTt2YXIgZD1JZyh3KTtlLm11dGFibGVSZWFkTGFuZXN8PWQmZS5wZW5kaW5nTGFuZXN9Y2F0Y2gocSl7YyhmdW5jdGlvbigpe3Rocm93IHE7fSl9fSl9LFtiLGRdKTtIZShDLGMpJiZIZSh4LGIpJiZIZShBLGQpfHwoYT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTpufSxhLmRpc3BhdGNoPWw9T2guYmluZChudWxsLFIsYSksay5xdWV1ZT1hLGsuYmFzZVF1ZXVlPW51bGwsbj1NaChlLGIsYyksay5tZW1vaXplZFN0YXRlPWsuYmFzZVN0YXRlPW4pO3JldHVybiBufVxuZnVuY3Rpb24gUGgoYSxiLGMpe3ZhciBkPUloKCk7cmV0dXJuIE5oKGQsYSxiLGMpfWZ1bmN0aW9uIFFoKGEpe3ZhciBiPUhoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT1iLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfVxuZnVuY3Rpb24gUmgoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O2I9Ui51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsfSxSLnVwZGF0ZVF1ZXVlPWIsYi5sYXN0RWZmZWN0PWEubmV4dD1hKTooYz1iLmxhc3RFZmZlY3QsbnVsbD09PWM/Yi5sYXN0RWZmZWN0PWEubmV4dD1hOihkPWMubmV4dCxjLm5leHQ9YSxhLm5leHQ9ZCxiLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIFNoKGEpe3ZhciBiPUhoKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9ZnVuY3Rpb24gVGgoKXtyZXR1cm4gSWgoKS5tZW1vaXplZFN0YXRlfWZ1bmN0aW9uIFVoKGEsYixjLGQpe3ZhciBlPUhoKCk7Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIFZoKGEsYixjLGQpe3ZhciBlPUloKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PVMpe3ZhciBnPVMubWVtb2l6ZWRTdGF0ZTtmPWcuZGVzdHJveTtpZihudWxsIT09ZCYmQmgoZCxnLmRlcHMpKXtSaChiLGMsZixkKTtyZXR1cm59fVIuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLGYsZCl9ZnVuY3Rpb24gV2goYSxiKXtyZXR1cm4gVWgoNTE2LDQsYSxiKX1mdW5jdGlvbiBYaChhLGIpe3JldHVybiBWaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFloKGEsYil7cmV0dXJuIFZoKDQsMixhLGIpfWZ1bmN0aW9uIFpoKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19XG5mdW5jdGlvbiAkaChhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFZoKDQsMixaaC5iaW5kKG51bGwsYixhKSxjKX1mdW5jdGlvbiBhaSgpe31mdW5jdGlvbiBiaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1mdW5jdGlvbiBjaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGRpKGEsYil7dmFyIGM9ZWcoKTtnZyg5OD5jPzk4OmMsZnVuY3Rpb24oKXthKCEwKX0pO2dnKDk3PGM/OTc6YyxmdW5jdGlvbigpe3ZhciBjPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXthKCExKSxiKCl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWN9fSl9XG5mdW5jdGlvbiBPaChhLGIsYyl7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9e2xhbmU6ZSxhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxnPWIucGVuZGluZztudWxsPT09Zz9mLm5leHQ9ZjooZi5uZXh0PWcubmV4dCxnLm5leHQ9Zik7Yi5wZW5kaW5nPWY7Zz1hLmFsdGVybmF0ZTtpZihhPT09Unx8bnVsbCE9PWcmJmc9PT1SKXpoPXloPSEwO2Vsc2V7aWYoMD09PWEubGFuZXMmJihudWxsPT09Z3x8MD09PWcubGFuZXMpJiYoZz1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWcpKXRyeXt2YXIgaD1iLmxhc3RSZW5kZXJlZFN0YXRlLGs9ZyhoLGMpO2YuZWFnZXJSZWR1Y2VyPWc7Zi5lYWdlclN0YXRlPWs7aWYoSGUoayxoKSlyZXR1cm59Y2F0Y2gobCl7fWZpbmFsbHl7fUpnKGEsZSxkKX19XG52YXIgR2g9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOkFoLHVzZUNvbnRleHQ6QWgsdXNlRWZmZWN0OkFoLHVzZUltcGVyYXRpdmVIYW5kbGU6QWgsdXNlTGF5b3V0RWZmZWN0OkFoLHVzZU1lbW86QWgsdXNlUmVkdWNlcjpBaCx1c2VSZWY6QWgsdXNlU3RhdGU6QWgsdXNlRGVidWdWYWx1ZTpBaCx1c2VEZWZlcnJlZFZhbHVlOkFoLHVzZVRyYW5zaXRpb246QWgsdXNlTXV0YWJsZVNvdXJjZTpBaCx1c2VPcGFxdWVJZGVudGlmaWVyOkFoLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRGg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7SGgoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6V2gsdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFVoKDQsMixaaC5iaW5kKG51bGwsXG5iLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVWgoNCwyLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1IaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpTaCx1c2VTdGF0ZTpRaCx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9UWgoYSksYz1iWzBdLGQ9YlsxXTtXaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247XG53aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9UWgoITEpLGI9YVswXTthPWRpLmJpbmQobnVsbCxhWzFdKTtTaChhKTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtkLm1lbW9pemVkU3RhdGU9e3JlZnM6e2dldFNuYXBzaG90OmIsc2V0U25hcHNob3Q6bnVsbH0sc291cmNlOmEsc3Vic2NyaWJlOmN9O3JldHVybiBOaChkLGEsYixjKX0sdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe2lmKGxoKXt2YXIgYT0hMSxiPXVmKGZ1bmN0aW9uKCl7YXx8KGE9ITAsYyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSkpO3Rocm93IEVycm9yKHkoMzU1KSk7fSksYz1RaChiKVsxXTswPT09KFIubW9kZSYyKSYmKFIuZmxhZ3N8PTUxNixSaCg1LGZ1bmN0aW9uKCl7YyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSl9LFxudm9pZCAwLG51bGwpKTtyZXR1cm4gYn1iPVwicjpcIisodGYrKykudG9TdHJpbmcoMzYpO1FoKGIpO3JldHVybiBifSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEVoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6S2gsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUtoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9S2goSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxGaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOkxoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBMaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1MaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUxoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBMaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sZWk9cmEuUmVhY3RDdXJyZW50T3duZXIsdWc9ITE7ZnVuY3Rpb24gZmkoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9aZyhiLG51bGwsYyxkKTpZZyhiLGEuY2hpbGQsYyxkKX1mdW5jdGlvbiBnaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7dGcoYixlKTtkPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGlpKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGc9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiYhamkoZykmJnZvaWQgMD09PWcuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWcsa2koYSxiLGcsZCxlLGYpO2E9VmcoYy50eXBlLG51bGwsZCxiLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zz1hLmNoaWxkO2lmKDA9PT0oZSZmKSYmKGU9Zy5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpKZSxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBoaShhLGIsZik7Yi5mbGFnc3w9MTthPVRnKGcsZCk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24ga2koYSxiLGMsZCxlLGYpe2lmKG51bGwhPT1hJiZKZShhLm1lbW9pemVkUHJvcHMsZCkmJmEucmVmPT09Yi5yZWYpaWYodWc9ITEsMCE9PShmJmUpKTAhPT0oYS5mbGFncyYxNjM4NCkmJih1Zz0hMCk7ZWxzZSByZXR1cm4gYi5sYW5lcz1hLmxhbmVzLGhpKGEsYixmKTtyZXR1cm4gbGkoYSxiLGMsZCxmKX1cbmZ1bmN0aW9uIG1pKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQuY2hpbGRyZW4sZj1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtpZihcImhpZGRlblwiPT09ZC5tb2RlfHxcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCI9PT1kLm1vZGUpaWYoMD09PShiLm1vZGUmNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixjKTtlbHNlIGlmKDAhPT0oYyYxMDczNzQxODI0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLG51bGwhPT1mP2YuYmFzZUxhbmVzOmMpO2Vsc2UgcmV0dXJuIGE9bnVsbCE9PWY/Zi5iYXNlTGFuZXN8YzpjLGIubGFuZXM9Yi5jaGlsZExhbmVzPTEwNzM3NDE4MjQsYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6YX0sbmkoYixhKSxudWxsO2Vsc2UgbnVsbCE9PWY/KGQ9Zi5iYXNlTGFuZXN8YyxiLm1lbW9pemVkU3RhdGU9bnVsbCk6ZD1jLG5pKGIsZCk7ZmkoYSxiLGUsYyk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBvaShhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmZsYWdzfD0xMjh9ZnVuY3Rpb24gbGkoYSxiLGMsZCxlKXt2YXIgZj1GZihjKT9EZjpNLmN1cnJlbnQ7Zj1FZihiLGYpO3RnKGIsZSk7Yz1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBwaShhLGIsYyxkLGUpe2lmKEZmKGMpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7dGcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksTWcoYixjLGQpLE9nKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBrPWcuY29udGV4dCxsPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPXZnKGwpOihsPUZmKGMpP0RmOk0uY3VycmVudCxsPUVmKGIsbCkpO3ZhciBuPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO0F8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8ayE9PWwpJiZOZyhiLGcsZCxsKTt3Zz0hMTt2YXIgcD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO2s9Yi5tZW1vaXplZFN0YXRlO2ghPT1kfHxwIT09a3x8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG4mJihHZyhiLGMsbixkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9d2d8fExnKGIsYyxoLGQscCxrLGwpKT8oQXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCkpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1rKSxnLnByb3BzPWQsZy5zdGF0ZT1rLGcuY29udGV4dD1sLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksZD0hMSl9ZWxzZXtnPWIuc3RhdGVOb2RlO3lnKGEsYik7aD1iLm1lbW9pemVkUHJvcHM7bD1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6bGcoYi50eXBlLGgpO2cucHJvcHM9bDtBPWIucGVuZGluZ1Byb3BzO3A9Zy5jb250ZXh0O2s9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9dmcoayk6KGs9RmYoYyk/RGY6TS5jdXJyZW50LGs9RWYoYixrKSk7dmFyIEM9Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7KG49XCJmdW5jdGlvblwiPT09dHlwZW9mIEN8fFxuXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1BfHxwIT09aykmJk5nKGIsZyxkLGspO3dnPSExO3A9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTt2YXIgeD1iLm1lbW9pemVkU3RhdGU7aCE9PUF8fHAhPT14fHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyYmKEdnKGIsYyxDLGQpLHg9Yi5tZW1vaXplZFN0YXRlKSwobD13Z3x8TGcoYixjLGwsZCxwLHgsaykpPyhufHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLFxueCxrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHgsaykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5mbGFnc3w9MjU2KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9eCksZy5wcm9wcz1kLGcuc3RhdGU9eCxnLmNvbnRleHQ9ayxkPWwpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fFxuaD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxkPSExKX1yZXR1cm4gcWkoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gcWkoYSxiLGMsZCxlLGYpe29pKGEsYik7dmFyIGc9MCE9PShiLmZsYWdzJjY0KTtpZighZCYmIWcpcmV0dXJuIGUmJktmKGIsYywhMSksaGkoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7ZWkuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5mbGFnc3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1ZZyhiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPVlnKGIsbnVsbCxoLGYpKTpmaShhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZLZihiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIHJpKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/SGYoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmSGYoYSxiLmNvbnRleHQsITEpO2VoKGEsYi5jb250YWluZXJJbmZvKX1cbnZhciBzaT17ZGVoeWRyYXRlZDpudWxsLHJldHJ5TGFuZTowfTtcbmZ1bmN0aW9uIHRpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPVAuY3VycmVudCxmPSExLGc7KGc9MCE9PShiLmZsYWdzJjY0KSl8fChnPW51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlPyExOjAhPT0oZSYyKSk7Zz8oZj0hMCxiLmZsYWdzJj0tNjUpOm51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlfHx2b2lkIDA9PT1kLmZhbGxiYWNrfHwhMD09PWQudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fChlfD0xKTtJKFAsZSYxKTtpZihudWxsPT09YSl7dm9pZCAwIT09ZC5mYWxsYmFjayYmcGgoYik7YT1kLmNoaWxkcmVuO2U9ZC5mYWxsYmFjaztpZihmKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LGIubWVtb2l6ZWRTdGF0ZT1zaSxhO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgZC51bnN0YWJsZV9leHBlY3RlZExvYWRUaW1lKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LFxuYi5tZW1vaXplZFN0YXRlPXNpLGIubGFuZXM9MzM1NTQ0MzIsYTtjPXZpKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmF9LGIubW9kZSxjLG51bGwpO2MucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9Y31pZihudWxsIT09YS5tZW1vaXplZFN0YXRlKXtpZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9OntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWlmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306XG57YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31mdW5jdGlvbiB1aShhLGIsYyxkKXt2YXIgZT1hLm1vZGUsZj1hLmNoaWxkO2I9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpifTswPT09KGUmMikmJm51bGwhPT1mPyhmLmNoaWxkTGFuZXM9MCxmLnBlbmRpbmdQcm9wcz1iKTpmPXZpKGIsZSwwLG51bGwpO2M9WGcoYyxlLGQsbnVsbCk7Zi5yZXR1cm49YTtjLnJldHVybj1hO2Yuc2libGluZz1jO2EuY2hpbGQ9ZjtyZXR1cm4gY31cbmZ1bmN0aW9uIHhpKGEsYixjLGQpe3ZhciBlPWEuY2hpbGQ7YT1lLnNpYmxpbmc7Yz1UZyhlLHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmN9KTswPT09KGIubW9kZSYyKSYmKGMubGFuZXM9ZCk7Yy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbDtudWxsIT09YSYmKGEubmV4dEVmZmVjdD1udWxsLGEuZmxhZ3M9OCxiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1hKTtyZXR1cm4gYi5jaGlsZD1jfVxuZnVuY3Rpb24gd2koYSxiLGMsZCxlKXt2YXIgZj1iLm1vZGUsZz1hLmNoaWxkO2E9Zy5zaWJsaW5nO3ZhciBoPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Y307MD09PShmJjIpJiZiLmNoaWxkIT09Zz8oYz1iLmNoaWxkLGMuY2hpbGRMYW5lcz0wLGMucGVuZGluZ1Byb3BzPWgsZz1jLmxhc3RFZmZlY3QsbnVsbCE9PWc/KGIuZmlyc3RFZmZlY3Q9Yy5maXJzdEVmZmVjdCxiLmxhc3RFZmZlY3Q9ZyxnLm5leHRFZmZlY3Q9bnVsbCk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbCk6Yz1UZyhnLGgpO251bGwhPT1hP2Q9VGcoYSxkKTooZD1YZyhkLGYsZSxudWxsKSxkLmZsYWdzfD0yKTtkLnJldHVybj1iO2MucmV0dXJuPWI7Yy5zaWJsaW5nPWQ7Yi5jaGlsZD1jO3JldHVybiBkfWZ1bmN0aW9uIHlpKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO3NnKGEucmV0dXJuLGIpfVxuZnVuY3Rpb24gemkoYSxiLGMsZCxlLGYpe3ZhciBnPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09Zz9hLm1lbW9pemVkU3RhdGU9e2lzQmFja3dhcmRzOmIscmVuZGVyaW5nOm51bGwscmVuZGVyaW5nU3RhcnRUaW1lOjAsbGFzdDpkLHRhaWw6Yyx0YWlsTW9kZTplLGxhc3RFZmZlY3Q6Zn06KGcuaXNCYWNrd2FyZHM9YixnLnJlbmRlcmluZz1udWxsLGcucmVuZGVyaW5nU3RhcnRUaW1lPTAsZy5sYXN0PWQsZy50YWlsPWMsZy50YWlsTW9kZT1lLGcubGFzdEVmZmVjdD1mKX1cbmZ1bmN0aW9uIEFpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7ZmkoYSxiLGQuY2hpbGRyZW4sYyk7ZD1QLmN1cnJlbnQ7aWYoMCE9PShkJjIpKWQ9ZCYxfDIsYi5mbGFnc3w9NjQ7ZWxzZXtpZihudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJnlpKGEsYyk7ZWxzZSBpZigxOT09PWEudGFnKXlpKGEsYyk7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUkoUCxkKTtpZigwPT09KGIubW9kZSYyKSliLm1lbW9pemVkU3RhdGU9XG5udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylhPWMuYWx0ZXJuYXRlLG51bGwhPT1hJiZudWxsPT09aWgoYSkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTt6aShiLCExLGUsYyxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2E9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWEmJm51bGw9PT1paChhKSl7Yi5jaGlsZD1lO2JyZWFrfWE9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWF9emkoYiwhMCxjLG51bGwsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJ0b2dldGhlclwiOnppKGIsITEsbnVsbCxudWxsLHZvaWQgMCxiLmxhc3RFZmZlY3QpO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBoaShhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7RGd8PWIubGFuZXM7aWYoMCE9PShjJmIuY2hpbGRMYW5lcykpe2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyBFcnJvcih5KDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1UZyhhLGEucGVuZGluZ1Byb3BzKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9VGcoYSxhLnBlbmRpbmdQcm9wcyksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1yZXR1cm4gbnVsbH12YXIgQmksQ2ksRGksRWk7XG5CaT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iLmNoaWxkO251bGwhPT1jOyl7aWYoNT09PWMudGFnfHw2PT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07Q2k9ZnVuY3Rpb24oKXt9O1xuRGk9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5tZW1vaXplZFByb3BzO2lmKGUhPT1kKXthPWIuc3RhdGVOb2RlO2RoKGFoLmN1cnJlbnQpO3ZhciBmPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmU9WWEoYSxlKTtkPVlhKGEsZCk7Zj1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGUpO2Q9ZWIoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplPW0oe30sZSx7dmFsdWU6dm9pZCAwfSk7ZD1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2Y9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZT1nYihhLGUpO2Q9Z2IoYSxkKTtmPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGUub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGEub25jbGljaz1qZil9dmIoYyxkKTt2YXIgZztjPW51bGw7Zm9yKGwgaW4gZSlpZighZC5oYXNPd25Qcm9wZXJ0eShsKSYmZS5oYXNPd25Qcm9wZXJ0eShsKSYmbnVsbCE9ZVtsXSlpZihcInN0eWxlXCI9PT1cbmwpe3ZhciBoPWVbbF07Zm9yKGcgaW4gaCloLmhhc093blByb3BlcnR5KGcpJiYoY3x8KGM9e30pLGNbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJlwiY2hpbGRyZW5cIiE9PWwmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT9mfHwoZj1bXSk6KGY9Znx8W10pLnB1c2gobCxudWxsKSk7Zm9yKGwgaW4gZCl7dmFyIGs9ZFtsXTtoPW51bGwhPWU/ZVtsXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShsKSYmayE9PWgmJihudWxsIT1rfHxudWxsIT1oKSlpZihcInN0eWxlXCI9PT1sKWlmKGgpe2ZvcihnIGluIGgpIWguaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChjfHwoYz17fSksY1tnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmhbZ10hPT1rW2ddJiYoY3x8XG4oYz17fSksY1tnXT1rW2ddKX1lbHNlIGN8fChmfHwoZj1bXSksZi5wdXNoKGwsYykpLGM9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8oaz1rP2suX19odG1sOnZvaWQgMCxoPWg/aC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmghPT1rJiYoZj1mfHxbXSkucHVzaChsLGspKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoZj1mfHxbXSkucHVzaChsLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/KG51bGwhPWsmJlwib25TY3JvbGxcIj09PWwmJkcoXCJzY3JvbGxcIixhKSxmfHxoPT09a3x8KGY9W10pKTpcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rJiZrLiQkdHlwZW9mPT09R2E/ay50b1N0cmluZygpOihmPWZ8fFtdKS5wdXNoKGwsaykpfWMmJihmPWZ8fFtdKS5wdXNoKFwic3R5bGVcIixcbmMpO3ZhciBsPWY7aWYoYi51cGRhdGVRdWV1ZT1sKWIuZmxhZ3N8PTR9fTtFaT1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYmKGIuZmxhZ3N8PTQpfTtmdW5jdGlvbiBGaShhLGIpe2lmKCFsaClzd2l0Y2goYS50YWlsTW9kZSl7Y2FzZSBcImhpZGRlblwiOmI9YS50YWlsO2Zvcih2YXIgYz1udWxsO251bGwhPT1iOyludWxsIT09Yi5hbHRlcm5hdGUmJihjPWIpLGI9Yi5zaWJsaW5nO251bGw9PT1jP2EudGFpbD1udWxsOmMuc2libGluZz1udWxsO2JyZWFrO2Nhc2UgXCJjb2xsYXBzZWRcIjpjPWEudGFpbDtmb3IodmFyIGQ9bnVsbDtudWxsIT09YzspbnVsbCE9PWMuYWx0ZXJuYXRlJiYoZD1jKSxjPWMuc2libGluZztudWxsPT09ZD9ifHxudWxsPT09YS50YWlsP2EudGFpbD1udWxsOmEudGFpbC5zaWJsaW5nPW51bGw6ZC5zaWJsaW5nPW51bGx9fVxuZnVuY3Rpb24gR2koYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMTY6Y2FzZSAxNTpjYXNlIDA6Y2FzZSAxMTpjYXNlIDc6Y2FzZSA4OmNhc2UgMTI6Y2FzZSA5OmNhc2UgMTQ6cmV0dXJuIG51bGw7Y2FzZSAxOnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7ZD1iLnN0YXRlTm9kZTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpcmgoYik/Yi5mbGFnc3w9NDpkLmh5ZHJhdGV8fChiLmZsYWdzfD0yNTYpO0NpKGIpO3JldHVybiBudWxsO2Nhc2UgNTpoaChiKTt2YXIgZT1kaChjaC5jdXJyZW50KTtjPWIudHlwZTtpZihudWxsIT09YSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRGkoYSxiLGMsZCxlKSxhLnJlZiE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KTtlbHNle2lmKCFkKXtpZihudWxsPT09XG5iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO3JldHVybiBudWxsfWE9ZGgoYWguY3VycmVudCk7aWYocmgoYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLnR5cGU7dmFyIGY9Yi5tZW1vaXplZFByb3BzO2Rbd2ZdPWI7ZFt4Zl09Zjtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixkKTtHKFwiY2xvc2VcIixkKTticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGE9MDthPFhlLmxlbmd0aDthKyspRyhYZVthXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsZCk7RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixkKTticmVhaztjYXNlIFwiaW5wdXRcIjpaYShkLGYpO0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmQuX3dyYXBwZXJTdGF0ZT1cbnt3YXNNdWx0aXBsZTohIWYubXVsdGlwbGV9O0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoZCxmKSxHKFwiaW52YWxpZFwiLGQpfXZiKGMsZik7YT1udWxsO2Zvcih2YXIgZyBpbiBmKWYuaGFzT3duUHJvcGVydHkoZykmJihlPWZbZ10sXCJjaGlsZHJlblwiPT09Zz9cInN0cmluZ1wiPT09dHlwZW9mIGU/ZC50ZXh0Q29udGVudCE9PWUmJihhPVtcImNoaWxkcmVuXCIsZV0pOlwibnVtYmVyXCI9PT10eXBlb2YgZSYmZC50ZXh0Q29udGVudCE9PVwiXCIrZSYmKGE9W1wiY2hpbGRyZW5cIixcIlwiK2VdKTpjYS5oYXNPd25Qcm9wZXJ0eShnKSYmbnVsbCE9ZSYmXCJvblNjcm9sbFwiPT09ZyYmRyhcInNjcm9sbFwiLGQpKTtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoZCk7Y2IoZCxmLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShkKTtqYihkKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGYub25DbGljayYmKGQub25jbGljaz1cbmpmKX1kPWE7Yi51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiYoYi5mbGFnc3w9NCl9ZWxzZXtnPTk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50O2E9PT1rYi5odG1sJiYoYT1sYihjKSk7YT09PWtiLmh0bWw/XCJzY3JpcHRcIj09PWM/KGE9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGEuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsYT1hLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2YgZC5pcz9hPWcuY3JlYXRlRWxlbWVudChjLHtpczpkLmlzfSk6KGE9Zy5jcmVhdGVFbGVtZW50KGMpLFwic2VsZWN0XCI9PT1jJiYoZz1hLGQubXVsdGlwbGU/Zy5tdWx0aXBsZT0hMDpkLnNpemUmJihnLnNpemU9ZC5zaXplKSkpOmE9Zy5jcmVhdGVFbGVtZW50TlMoYSxjKTthW3dmXT1iO2FbeGZdPWQ7QmkoYSxiLCExLCExKTtiLnN0YXRlTm9kZT1hO2c9d2IoYyxkKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixhKTtHKFwiY2xvc2VcIixhKTtcbmU9ZDticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxYZS5sZW5ndGg7ZSsrKUcoWGVbZV0sYSk7ZT1kO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsYSk7RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGEsZCk7ZT1ZYShhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWQubXVsdGlwbGV9O2U9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGEsZCk7ZT1cbmdiKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztkZWZhdWx0OmU9ZH12YihjLGUpO3ZhciBoPWU7Zm9yKGYgaW4gaClpZihoLmhhc093blByb3BlcnR5KGYpKXt2YXIgaz1oW2ZdO1wic3R5bGVcIj09PWY/dGIoYSxrKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1mPyhrPWs/ay5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJm9iKGEsaykpOlwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBrPyhcInRleHRhcmVhXCIhPT1jfHxcIlwiIT09aykmJnBiKGEsayk6XCJudW1iZXJcIj09PXR5cGVvZiBrJiZwYihhLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWYmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1mJiZcImF1dG9Gb2N1c1wiIT09ZiYmKGNhLmhhc093blByb3BlcnR5KGYpP251bGwhPWsmJlwib25TY3JvbGxcIj09PWYmJkcoXCJzY3JvbGxcIixhKTpudWxsIT1rJiZxYShhLGYsayxnKSl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGEpO2NiKGEsZCwhMSk7XG5icmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShhKTtqYihhKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9ZC52YWx1ZSYmYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIrU2EoZC52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLm11bHRpcGxlPSEhZC5tdWx0aXBsZTtmPWQudmFsdWU7bnVsbCE9Zj9mYihhLCEhZC5tdWx0aXBsZSxmLCExKTpudWxsIT1kLmRlZmF1bHRWYWx1ZSYmZmIoYSwhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGUub25DbGljayYmKGEub25jbGljaz1qZil9bWYoYyxkKSYmKGIuZmxhZ3N8PTQpfW51bGwhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCl9cmV0dXJuIG51bGw7Y2FzZSA2OmlmKGEmJm51bGwhPWIuc3RhdGVOb2RlKUVpKGEsYixhLm1lbW9pemVkUHJvcHMsZCk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO1xuYz1kaChjaC5jdXJyZW50KTtkaChhaC5jdXJyZW50KTtyaChiKT8oZD1iLnN0YXRlTm9kZSxjPWIubWVtb2l6ZWRQcm9wcyxkW3dmXT1iLGQubm9kZVZhbHVlIT09YyYmKGIuZmxhZ3N8PTQpKTooZD0oOT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGQpLGRbd2ZdPWIsYi5zdGF0ZU5vZGU9ZCl9cmV0dXJuIG51bGw7Y2FzZSAxMzpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGIubGFuZXM9YyxiO2Q9bnVsbCE9PWQ7Yz0hMTtudWxsPT09YT92b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMuZmFsbGJhY2smJnJoKGIpOmM9bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZTtpZihkJiYhYyYmMCE9PShiLm1vZGUmMikpaWYobnVsbD09PWEmJiEwIT09Yi5tZW1vaXplZFByb3BzLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwwIT09KFAuY3VycmVudCYxKSkwPT09ViYmKFY9Myk7ZWxzZXtpZigwPT09Vnx8Mz09PVYpVj1cbjQ7bnVsbD09PVV8fDA9PT0oRGcmMTM0MjE3NzI3KSYmMD09PShIaSYxMzQyMTc3MjcpfHxJaShVLFcpfWlmKGR8fGMpYi5mbGFnc3w9NDtyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksQ2koYiksbnVsbD09PWEmJmNmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYiksbnVsbDtjYXNlIDE3OnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAxOTpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2Y9MCE9PShiLmZsYWdzJjY0KTtnPWQucmVuZGVyaW5nO2lmKG51bGw9PT1nKWlmKGYpRmkoZCwhMSk7ZWxzZXtpZigwIT09Vnx8bnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpZm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2c9aWgoYSk7aWYobnVsbCE9PWcpe2IuZmxhZ3N8PTY0O0ZpKGQsITEpO2Y9Zy51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKGIudXBkYXRlUXVldWU9ZixiLmZsYWdzfD00KTtcbm51bGw9PT1kLmxhc3RFZmZlY3QmJihiLmZpcnN0RWZmZWN0PW51bGwpO2IubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3Q7ZD1jO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWY9YyxhPWQsZi5mbGFncyY9MixmLm5leHRFZmZlY3Q9bnVsbCxmLmZpcnN0RWZmZWN0PW51bGwsZi5sYXN0RWZmZWN0PW51bGwsZz1mLmFsdGVybmF0ZSxudWxsPT09Zz8oZi5jaGlsZExhbmVzPTAsZi5sYW5lcz1hLGYuY2hpbGQ9bnVsbCxmLm1lbW9pemVkUHJvcHM9bnVsbCxmLm1lbW9pemVkU3RhdGU9bnVsbCxmLnVwZGF0ZVF1ZXVlPW51bGwsZi5kZXBlbmRlbmNpZXM9bnVsbCxmLnN0YXRlTm9kZT1udWxsKTooZi5jaGlsZExhbmVzPWcuY2hpbGRMYW5lcyxmLmxhbmVzPWcubGFuZXMsZi5jaGlsZD1nLmNoaWxkLGYubWVtb2l6ZWRQcm9wcz1nLm1lbW9pemVkUHJvcHMsZi5tZW1vaXplZFN0YXRlPWcubWVtb2l6ZWRTdGF0ZSxmLnVwZGF0ZVF1ZXVlPWcudXBkYXRlUXVldWUsZi50eXBlPWcudHlwZSxhPWcuZGVwZW5kZW5jaWVzLFxuZi5kZXBlbmRlbmNpZXM9bnVsbD09PWE/bnVsbDp7bGFuZXM6YS5sYW5lcyxmaXJzdENvbnRleHQ6YS5maXJzdENvbnRleHR9KSxjPWMuc2libGluZztJKFAsUC5jdXJyZW50JjF8Mik7cmV0dXJuIGIuY2hpbGR9YT1hLnNpYmxpbmd9bnVsbCE9PWQudGFpbCYmTygpPkppJiYoYi5mbGFnc3w9NjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKX1lbHNle2lmKCFmKWlmKGE9aWgoZyksbnVsbCE9PWEpe2lmKGIuZmxhZ3N8PTY0LGY9ITAsYz1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZmxhZ3N8PTQpLEZpKGQsITApLG51bGw9PT1kLnRhaWwmJlwiaGlkZGVuXCI9PT1kLnRhaWxNb2RlJiYhZy5hbHRlcm5hdGUmJiFsaClyZXR1cm4gYj1iLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0LG51bGwhPT1iJiYoYi5uZXh0RWZmZWN0PW51bGwpLG51bGx9ZWxzZSAyKk8oKS1kLnJlbmRlcmluZ1N0YXJ0VGltZT5KaSYmMTA3Mzc0MTgyNCE9PWMmJihiLmZsYWdzfD1cbjY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMik7ZC5pc0JhY2t3YXJkcz8oZy5zaWJsaW5nPWIuY2hpbGQsYi5jaGlsZD1nKTooYz1kLmxhc3QsbnVsbCE9PWM/Yy5zaWJsaW5nPWc6Yi5jaGlsZD1nLGQubGFzdD1nKX1yZXR1cm4gbnVsbCE9PWQudGFpbD8oYz1kLnRhaWwsZC5yZW5kZXJpbmc9YyxkLnRhaWw9Yy5zaWJsaW5nLGQubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QsZC5yZW5kZXJpbmdTdGFydFRpbWU9TygpLGMuc2libGluZz1udWxsLGI9UC5jdXJyZW50LEkoUCxmP2ImMXwyOmImMSksYyk6bnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUhPT0obnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSkmJlwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIiE9PWQubW9kZSYmKGIuZmxhZ3N8PTQpLG51bGx9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTt9XG5mdW5jdGlvbiBMaShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpGZihhLnR5cGUpJiZHZigpO3ZhciBiPWEuZmxhZ3M7cmV0dXJuIGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7Yj1hLmZsYWdzO2lmKDAhPT0oYiY2NCkpdGhyb3cgRXJyb3IoeSgyODUpKTthLmZsYWdzPWImLTQwOTd8NjQ7cmV0dXJuIGE7Y2FzZSA1OnJldHVybiBoaChhKSxudWxsO2Nhc2UgMTM6cmV0dXJuIEgoUCksYj1hLmZsYWdzLGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAxOTpyZXR1cm4gSChQKSxudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGEpLG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBNaShhLGIpe3RyeXt2YXIgYz1cIlwiLGQ9YjtkbyBjKz1RYShkKSxkPWQucmV0dXJuO3doaWxlKGQpO3ZhciBlPWN9Y2F0Y2goZil7ZT1cIlxcbkVycm9yIGdlbmVyYXRpbmcgc3RhY2s6IFwiK2YubWVzc2FnZStcIlxcblwiK2Yuc3RhY2t9cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6ZX19ZnVuY3Rpb24gTmkoYSxiKXt0cnl7Y29uc29sZS5lcnJvcihiLnZhbHVlKX1jYXRjaChjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYzt9KX19dmFyIE9pPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIFBpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe1FpfHwoUWk9ITAsUmk9ZCk7TmkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBTaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7TmkoYSxiKTtyZXR1cm4gZChlKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PVRpP1RpPW5ldyBTZXQoW3RoaXNdKTpUaS5hZGQodGhpcyksTmkoYSxiKSk7dmFyIGM9Yi5zdGFjazt0aGlzLmNvbXBvbmVudERpZENhdGNoKGIudmFsdWUse2NvbXBvbmVudFN0YWNrOm51bGwhPT1jP2M6XCJcIn0pfSk7cmV0dXJuIGN9dmFyIFVpPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O1xuZnVuY3Rpb24gVmkoYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpdHJ5e2IobnVsbCl9Y2F0Y2goYyl7V2koYSxjKX1lbHNlIGIuY3VycmVudD1udWxsfWZ1bmN0aW9uIFhpKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6cmV0dXJuO2Nhc2UgMTppZihiLmZsYWdzJjI1NiYmbnVsbCE9PWEpe3ZhciBjPWEubWVtb2l6ZWRQcm9wcyxkPWEubWVtb2l6ZWRTdGF0ZTthPWIuc3RhdGVOb2RlO2I9YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP2M6bGcoYi50eXBlLGMpLGQpO2EuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9Yn1yZXR1cm47Y2FzZSAzOmIuZmxhZ3MmMjU2JiZxZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTtyZXR1cm47Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBZaShhLGIsYyl7c3dpdGNoKGMudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97aWYoMz09PShhLnRhZyYzKSl7dmFyIGQ9YS5jcmVhdGU7YS5kZXN0cm95PWQoKX1hPWEubmV4dH13aGlsZShhIT09Yil9Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97dmFyIGU9YTtkPWUubmV4dDtlPWUudGFnOzAhPT0oZSY0KSYmMCE9PShlJjEpJiYoWmkoYyxhKSwkaShjLGEpKTthPWR9d2hpbGUoYSE9PWIpfXJldHVybjtjYXNlIDE6YT1jLnN0YXRlTm9kZTtjLmZsYWdzJjQmJihudWxsPT09Yj9hLmNvbXBvbmVudERpZE1vdW50KCk6KGQ9Yy5lbGVtZW50VHlwZT09PWMudHlwZT9iLm1lbW9pemVkUHJvcHM6bGcoYy50eXBlLGIubWVtb2l6ZWRQcm9wcyksYS5jb21wb25lbnREaWRVcGRhdGUoZCxcbmIubWVtb2l6ZWRTdGF0ZSxhLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKSkpO2I9Yy51cGRhdGVRdWV1ZTtudWxsIT09YiYmRWcoYyxiLGEpO3JldHVybjtjYXNlIDM6Yj1jLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthPW51bGw7aWYobnVsbCE9PWMuY2hpbGQpc3dpdGNoKGMuY2hpbGQudGFnKXtjYXNlIDU6YT1jLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6YT1jLmNoaWxkLnN0YXRlTm9kZX1FZyhjLGIsYSl9cmV0dXJuO2Nhc2UgNTphPWMuc3RhdGVOb2RlO251bGw9PT1iJiZjLmZsYWdzJjQmJm1mKGMudHlwZSxjLm1lbW9pemVkUHJvcHMpJiZhLmZvY3VzKCk7cmV0dXJuO2Nhc2UgNjpyZXR1cm47Y2FzZSA0OnJldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGw9PT1jLm1lbW9pemVkU3RhdGUmJihjPWMuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYz1jLm1lbW9pemVkU3RhdGUsbnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsIT09YyYmQ2MoYykpKSk7XG5yZXR1cm47Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjA6Y2FzZSAyMTpjYXNlIDIzOmNhc2UgMjQ6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gYWooYSxiKXtmb3IodmFyIGM9YTs7KXtpZig1PT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKGIpZD1kLnN0eWxlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLnNldFByb3BlcnR5P2Quc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsXCJub25lXCIsXCJpbXBvcnRhbnRcIik6ZC5kaXNwbGF5PVwibm9uZVwiO2Vsc2V7ZD1jLnN0YXRlTm9kZTt2YXIgZT1jLm1lbW9pemVkUHJvcHMuc3R5bGU7ZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGw7ZC5zdHlsZS5kaXNwbGF5PXNiKFwiZGlzcGxheVwiLGUpfX1lbHNlIGlmKDY9PT1jLnRhZyljLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yj9cIlwiOmMubWVtb2l6ZWRQcm9wcztlbHNlIGlmKCgyMyE9PWMudGFnJiYyNCE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHxjPT09YSkmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09XG5hKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gYmooYSxiKXtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJVbm1vdW50KXRyeXtNZi5vbkNvbW1pdEZpYmVyVW5tb3VudChMZixiKX1jYXRjaChmKXt9c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjphPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWEmJihhPWEubGFzdEVmZmVjdCxudWxsIT09YSkpe3ZhciBjPWE9YS5uZXh0O2Rve3ZhciBkPWMsZT1kLmRlc3Ryb3k7ZD1kLnRhZztpZih2b2lkIDAhPT1lKWlmKDAhPT0oZCY0KSlaaShiLGMpO2Vsc2V7ZD1iO3RyeXtlKCl9Y2F0Y2goZil7V2koZCxmKX19Yz1jLm5leHR9d2hpbGUoYyE9PWEpfWJyZWFrO2Nhc2UgMTpWaShiKTthPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXthLnByb3BzPWIubWVtb2l6ZWRQcm9wcyxhLnN0YXRlPWIubWVtb2l6ZWRTdGF0ZSxhLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goZil7V2koYixcbmYpfWJyZWFrO2Nhc2UgNTpWaShiKTticmVhaztjYXNlIDQ6Y2ooYSxiKX19ZnVuY3Rpb24gZGooYSl7YS5hbHRlcm5hdGU9bnVsbDthLmNoaWxkPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLmZpcnN0RWZmZWN0PW51bGw7YS5sYXN0RWZmZWN0PW51bGw7YS5tZW1vaXplZFByb3BzPW51bGw7YS5tZW1vaXplZFN0YXRlPW51bGw7YS5wZW5kaW5nUHJvcHM9bnVsbDthLnJldHVybj1udWxsO2EudXBkYXRlUXVldWU9bnVsbH1mdW5jdGlvbiBlaihhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIGZqKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKGVqKGIpKWJyZWFrIGE7Yj1iLnJldHVybn10aHJvdyBFcnJvcih5KDE2MCkpO312YXIgYz1iO2I9Yy5zdGF0ZU5vZGU7c3dpdGNoKGMudGFnKXtjYXNlIDU6dmFyIGQ9ITE7YnJlYWs7Y2FzZSAzOmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA0OmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDE2MSkpO31jLmZsYWdzJjE2JiYocGIoYixcIlwiKSxjLmZsYWdzJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8ZWooYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5mbGFncyYyKWNvbnRpbnVlIGI7aWYobnVsbD09PVxuYy5jaGlsZHx8ND09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZmxhZ3MmMikpe2M9Yy5zdGF0ZU5vZGU7YnJlYWsgYX19ZD9naihhLGMsYik6aGooYSxjLGIpfVxuZnVuY3Rpb24gZ2ooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/OD09PWMubm9kZVR5cGU/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGIpOmMuaW5zZXJ0QmVmb3JlKGEsYik6KDg9PT1jLm5vZGVUeXBlPyhiPWMucGFyZW50Tm9kZSxiLmluc2VydEJlZm9yZShhLGMpKTooYj1jLGIuYXBwZW5kQ2hpbGQoYSkpLGM9Yy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1jJiZ2b2lkIDAhPT1jfHxudWxsIT09Yi5vbmNsaWNrfHwoYi5vbmNsaWNrPWpmKSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGdqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspZ2ooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gaGooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/Yy5pbnNlcnRCZWZvcmUoYSxiKTpjLmFwcGVuZENoaWxkKGEpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihoaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWhqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGNqKGEsYil7Zm9yKHZhciBjPWIsZD0hMSxlLGY7Oyl7aWYoIWQpe2Q9Yy5yZXR1cm47YTpmb3IoOzspe2lmKG51bGw9PT1kKXRocm93IEVycm9yKHkoMTYwKSk7ZT1kLnN0YXRlTm9kZTtzd2l0Y2goZC50YWcpe2Nhc2UgNTpmPSExO2JyZWFrIGE7Y2FzZSAzOmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYTtjYXNlIDQ6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhfWQ9ZC5yZXR1cm59ZD0hMH1pZig1PT09Yy50YWd8fDY9PT1jLnRhZyl7YTpmb3IodmFyIGc9YSxoPWMsaz1oOzspaWYoYmooZyxrKSxudWxsIT09ay5jaGlsZCYmNCE9PWsudGFnKWsuY2hpbGQucmV0dXJuPWssaz1rLmNoaWxkO2Vsc2V7aWYoaz09PWgpYnJlYWsgYTtmb3IoO251bGw9PT1rLnNpYmxpbmc7KXtpZihudWxsPT09ay5yZXR1cm58fGsucmV0dXJuPT09aClicmVhayBhO2s9ay5yZXR1cm59ay5zaWJsaW5nLnJldHVybj1rLnJldHVybjtrPWsuc2libGluZ31mPyhnPWUsaD1jLnN0YXRlTm9kZSxcbjg9PT1nLm5vZGVUeXBlP2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoKTpnLnJlbW92ZUNoaWxkKGgpKTplLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKX1lbHNlIGlmKDQ9PT1jLnRhZyl7aWYobnVsbCE9PWMuY2hpbGQpe2U9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztmPSEwO2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKGJqKGEsYyksbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJuOzQ9PT1jLnRhZyYmKGQ9ITEpfWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gaWooYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOnZhciBjPWIudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG8gMz09PShkLnRhZyYzKSYmKGE9ZC5kZXN0cm95LGQuZGVzdHJveT12b2lkIDAsdm9pZCAwIT09YSYmYSgpKSxkPWQubmV4dDt3aGlsZShkIT09Yyl9cmV0dXJuO2Nhc2UgMTpyZXR1cm47Y2FzZSA1OmM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7ZD1iLm1lbW9pemVkUHJvcHM7dmFyIGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbeGZdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJiRhKGMsZCk7d2IoYSxlKTtiPXdiKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPVxuMil7dmFyIGc9ZltlXSxoPWZbZSsxXTtcInN0eWxlXCI9PT1nP3RiKGMsaCk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zz9vYihjLGgpOlwiY2hpbGRyZW5cIj09PWc/cGIoYyxoKTpxYShjLGcsaCxiKX1zd2l0Y2goYSl7Y2FzZSBcImlucHV0XCI6YWIoYyxkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihjLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphPWMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxjLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGY9ZC52YWx1ZSxudWxsIT1mP2ZiKGMsISFkLm11bHRpcGxlLGYsITEpOmEhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9mYihjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6ZmIoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1yZXR1cm47Y2FzZSA2OmlmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2MikpO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1cbmIubWVtb2l6ZWRQcm9wcztyZXR1cm47Y2FzZSAzOmM9Yi5zdGF0ZU5vZGU7Yy5oeWRyYXRlJiYoYy5oeWRyYXRlPSExLENjKGMuY29udGFpbmVySW5mbykpO3JldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGwhPT1iLm1lbW9pemVkU3RhdGUmJihqaj1PKCksYWooYi5jaGlsZCwhMCkpO2tqKGIpO3JldHVybjtjYXNlIDE5OmtqKGIpO3JldHVybjtjYXNlIDE3OnJldHVybjtjYXNlIDIzOmNhc2UgMjQ6YWooYixudWxsIT09Yi5tZW1vaXplZFN0YXRlKTtyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9ZnVuY3Rpb24ga2ooYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgVWkpO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1sai5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX1cbmZ1bmN0aW9uIG1qKGEsYil7cmV0dXJuIG51bGwhPT1hJiYoYT1hLm1lbW9pemVkU3RhdGUsbnVsbD09PWF8fG51bGwhPT1hLmRlaHlkcmF0ZWQpPyhiPWIubWVtb2l6ZWRTdGF0ZSxudWxsIT09YiYmbnVsbD09PWIuZGVoeWRyYXRlZCk6ITF9dmFyIG5qPU1hdGguY2VpbCxvaj1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHBqPXJhLlJlYWN0Q3VycmVudE93bmVyLFg9MCxVPW51bGwsWT1udWxsLFc9MCxxaj0wLHJqPUJmKDApLFY9MCxzaj1udWxsLHRqPTAsRGc9MCxIaT0wLHVqPTAsdmo9bnVsbCxqaj0wLEppPUluZmluaXR5O2Z1bmN0aW9uIHdqKCl7Smk9TygpKzUwMH12YXIgWj1udWxsLFFpPSExLFJpPW51bGwsVGk9bnVsbCx4aj0hMSx5aj1udWxsLHpqPTkwLEFqPVtdLEJqPVtdLENqPW51bGwsRGo9MCxFaj1udWxsLEZqPS0xLEdqPTAsSGo9MCxJaj1udWxsLEpqPSExO2Z1bmN0aW9uIEhnKCl7cmV0dXJuIDAhPT0oWCY0OCk/TygpOi0xIT09Rmo/Rmo6Rmo9TygpfVxuZnVuY3Rpb24gSWcoYSl7YT1hLm1vZGU7aWYoMD09PShhJjIpKXJldHVybiAxO2lmKDA9PT0oYSY0KSlyZXR1cm4gOTk9PT1lZygpPzE6MjswPT09R2omJihHaj10aik7aWYoMCE9PWtnLnRyYW5zaXRpb24pezAhPT1IaiYmKEhqPW51bGwhPT12aj92ai5wZW5kaW5nTGFuZXM6MCk7YT1Hajt2YXIgYj00MTg2MTEyJn5IajtiJj0tYjswPT09YiYmKGE9NDE4NjExMiZ+YSxiPWEmLWEsMD09PWImJihiPTgxOTIpKTtyZXR1cm4gYn1hPWVnKCk7MCE9PShYJjQpJiY5OD09PWE/YT1YYygxMixHaik6KGE9U2MoYSksYT1YYyhhLEdqKSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBKZyhhLGIsYyl7aWYoNTA8RGopdGhyb3cgRGo9MCxFaj1udWxsLEVycm9yKHkoMTg1KSk7YT1LaihhLGIpO2lmKG51bGw9PT1hKXJldHVybiBudWxsOyRjKGEsYixjKTthPT09VSYmKEhpfD1iLDQ9PT1WJiZJaShhLFcpKTt2YXIgZD1lZygpOzE9PT1iPzAhPT0oWCY4KSYmMD09PShYJjQ4KT9MaihhKTooTWooYSxjKSwwPT09WCYmKHdqKCksaWcoKSkpOigwPT09KFgmNCl8fDk4IT09ZCYmOTkhPT1kfHwobnVsbD09PUNqP0NqPW5ldyBTZXQoW2FdKTpDai5hZGQoYSkpLE1qKGEsYykpO3ZqPWF9ZnVuY3Rpb24gS2ooYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7Yz1hO2ZvcihhPWEucmV0dXJuO251bGwhPT1hOylhLmNoaWxkTGFuZXN8PWIsYz1hLmFsdGVybmF0ZSxudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9YiksYz1hLGE9YS5yZXR1cm47cmV0dXJuIDM9PT1jLnRhZz9jLnN0YXRlTm9kZTpudWxsfVxuZnVuY3Rpb24gTWooYSxiKXtmb3IodmFyIGM9YS5jYWxsYmFja05vZGUsZD1hLnN1c3BlbmRlZExhbmVzLGU9YS5waW5nZWRMYW5lcyxmPWEuZXhwaXJhdGlvblRpbWVzLGc9YS5wZW5kaW5nTGFuZXM7MDxnOyl7dmFyIGg9MzEtVmMoZyksaz0xPDxoLGw9ZltoXTtpZigtMT09PWwpe2lmKDA9PT0oayZkKXx8MCE9PShrJmUpKXtsPWI7UmMoayk7dmFyIG49RjtmW2hdPTEwPD1uP2wrMjUwOjY8PW4/bCs1RTM6LTF9fWVsc2UgbDw9YiYmKGEuZXhwaXJlZExhbmVzfD1rKTtnJj1+a31kPVVjKGEsYT09PVU/VzowKTtiPUY7aWYoMD09PWQpbnVsbCE9PWMmJihjIT09WmYmJlBmKGMpLGEuY2FsbGJhY2tOb2RlPW51bGwsYS5jYWxsYmFja1ByaW9yaXR5PTApO2Vsc2V7aWYobnVsbCE9PWMpe2lmKGEuY2FsbGJhY2tQcmlvcml0eT09PWIpcmV0dXJuO2MhPT1aZiYmUGYoYyl9MTU9PT1iPyhjPUxqLmJpbmQobnVsbCxhKSxudWxsPT09YWc/KGFnPVtjXSxiZz1PZihVZixqZykpOmFnLnB1c2goYyksXG5jPVpmKToxND09PWI/Yz1oZyg5OSxMai5iaW5kKG51bGwsYSkpOihjPVRjKGIpLGM9aGcoYyxOai5iaW5kKG51bGwsYSkpKTthLmNhbGxiYWNrUHJpb3JpdHk9YjthLmNhbGxiYWNrTm9kZT1jfX1cbmZ1bmN0aW9uIE5qKGEpe0ZqPS0xO0hqPUdqPTA7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBiPWEuY2FsbGJhY2tOb2RlO2lmKE9qKCkmJmEuY2FsbGJhY2tOb2RlIT09YilyZXR1cm4gbnVsbDt2YXIgYz1VYyhhLGE9PT1VP1c6MCk7aWYoMD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9Yzt2YXIgZT1YO1h8PTE2O3ZhciBmPVBqKCk7aWYoVSE9PWF8fFchPT1kKXdqKCksUWooYSxkKTtkbyB0cnl7UmooKTticmVha31jYXRjaChoKXtTaihhLGgpfXdoaWxlKDEpO3FnKCk7b2ouY3VycmVudD1mO1g9ZTtudWxsIT09WT9kPTA6KFU9bnVsbCxXPTAsZD1WKTtpZigwIT09KHRqJkhpKSlRaihhLDApO2Vsc2UgaWYoMCE9PWQpezI9PT1kJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGM9V2MoYSksMCE9PWMmJihkPVRqKGEsYykpKTtpZigxPT09ZCl0aHJvdyBiPXNqLFFqKGEsMCksSWkoYSxjKSxNaihhLE8oKSksYjthLmZpbmlzaGVkV29yaz1cbmEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWM7c3dpdGNoKGQpe2Nhc2UgMDpjYXNlIDE6dGhyb3cgRXJyb3IoeSgzNDUpKTtjYXNlIDI6VWooYSk7YnJlYWs7Y2FzZSAzOklpKGEsYyk7aWYoKGMmNjI5MTQ1NjApPT09YyYmKGQ9amorNTAwLU8oKSwxMDxkKSl7aWYoMCE9PVVjKGEsMCkpYnJlYWs7ZT1hLnN1c3BlbmRlZExhbmVzO2lmKChlJmMpIT09Yyl7SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmU7YnJlYWt9YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxkKTticmVha31VaihhKTticmVhaztjYXNlIDQ6SWkoYSxjKTtpZigoYyY0MTg2MTEyKT09PWMpYnJlYWs7ZD1hLmV2ZW50VGltZXM7Zm9yKGU9LTE7MDxjOyl7dmFyIGc9MzEtVmMoYyk7Zj0xPDxnO2c9ZFtnXTtnPmUmJihlPWcpO2MmPX5mfWM9ZTtjPU8oKS1jO2M9KDEyMD5jPzEyMDo0ODA+Yz80ODA6MTA4MD5jPzEwODA6MTkyMD5jPzE5MjA6M0UzPmM/M0UzOjQzMjA+XG5jPzQzMjA6MTk2MCpuaihjLzE5NjApKS1jO2lmKDEwPGMpe2EudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksYyk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA1OlVqKGEpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMjkpKTt9fU1qKGEsTygpKTtyZXR1cm4gYS5jYWxsYmFja05vZGU9PT1iP05qLmJpbmQobnVsbCxhKTpudWxsfWZ1bmN0aW9uIElpKGEsYil7YiY9fnVqO2ImPX5IaTthLnN1c3BlbmRlZExhbmVzfD1iO2EucGluZ2VkTGFuZXMmPX5iO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yjspe3ZhciBjPTMxLVZjKGIpLGQ9MTw8YzthW2NdPS0xO2ImPX5kfX1cbmZ1bmN0aW9uIExqKGEpe2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTtPaigpO2lmKGE9PT1VJiYwIT09KGEuZXhwaXJlZExhbmVzJlcpKXt2YXIgYj1XO3ZhciBjPVRqKGEsYik7MCE9PSh0aiZIaSkmJihiPVVjKGEsYiksYz1UaihhLGIpKX1lbHNlIGI9VWMoYSwwKSxjPVRqKGEsYik7MCE9PWEudGFnJiYyPT09YyYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxiPVdjKGEpLDAhPT1iJiYoYz1UaihhLGIpKSk7aWYoMT09PWMpdGhyb3cgYz1zaixRaihhLDApLElpKGEsYiksTWooYSxPKCkpLGM7YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9YjtVaihhKTtNaihhLE8oKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBWaigpe2lmKG51bGwhPT1Dail7dmFyIGE9Q2o7Q2o9bnVsbDthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5leHBpcmVkTGFuZXN8PTI0JmEucGVuZGluZ0xhbmVzO01qKGEsTygpKX0pfWlnKCl9ZnVuY3Rpb24gV2ooYSxiKXt2YXIgYz1YO1h8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gWGooYSxiKXt2YXIgYz1YO1gmPS0yO1h8PTg7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gbmkoYSxiKXtJKHJqLHFqKTtxanw9Yjt0anw9Yn1mdW5jdGlvbiBLaSgpe3FqPXJqLmN1cnJlbnQ7SChyail9XG5mdW5jdGlvbiBRaihhLGIpe2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7dmFyIGM9YS50aW1lb3V0SGFuZGxlOy0xIT09YyYmKGEudGltZW91dEhhbmRsZT0tMSxwZihjKSk7aWYobnVsbCE9PVkpZm9yKGM9WS5yZXR1cm47bnVsbCE9PWM7KXt2YXIgZD1jO3N3aXRjaChkLnRhZyl7Y2FzZSAxOmQ9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1kJiZ2b2lkIDAhPT1kJiZHZigpO2JyZWFrO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2JyZWFrO2Nhc2UgNTpoaChkKTticmVhaztjYXNlIDQ6ZmgoKTticmVhaztjYXNlIDEzOkgoUCk7YnJlYWs7Y2FzZSAxOTpIKFApO2JyZWFrO2Nhc2UgMTA6cmcoZCk7YnJlYWs7Y2FzZSAyMzpjYXNlIDI0OktpKCl9Yz1jLnJldHVybn1VPWE7WT1UZyhhLmN1cnJlbnQsbnVsbCk7Vz1xaj10aj1iO1Y9MDtzaj1udWxsO3VqPUhpPURnPTB9XG5mdW5jdGlvbiBTaihhLGIpe2Rve3ZhciBjPVk7dHJ5e3FnKCk7dmguY3VycmVudD1HaDtpZih5aCl7Zm9yKHZhciBkPVIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZDspe3ZhciBlPWQucXVldWU7bnVsbCE9PWUmJihlLnBlbmRpbmc9bnVsbCk7ZD1kLm5leHR9eWg9ITF9eGg9MDtUPVM9Uj1udWxsO3poPSExO3BqLmN1cnJlbnQ9bnVsbDtpZihudWxsPT09Y3x8bnVsbD09PWMucmV0dXJuKXtWPTE7c2o9YjtZPW51bGw7YnJlYWt9YTp7dmFyIGY9YSxnPWMucmV0dXJuLGg9YyxrPWI7Yj1XO2guZmxhZ3N8PTIwNDg7aC5maXJzdEVmZmVjdD1oLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09ayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay50aGVuKXt2YXIgbD1rO2lmKDA9PT0oaC5tb2RlJjIpKXt2YXIgbj1oLmFsdGVybmF0ZTtuPyhoLnVwZGF0ZVF1ZXVlPW4udXBkYXRlUXVldWUsaC5tZW1vaXplZFN0YXRlPW4ubWVtb2l6ZWRTdGF0ZSxoLmxhbmVzPW4ubGFuZXMpOlxuKGgudXBkYXRlUXVldWU9bnVsbCxoLm1lbW9pemVkU3RhdGU9bnVsbCl9dmFyIEE9MCE9PShQLmN1cnJlbnQmMSkscD1nO2Rve3ZhciBDO2lmKEM9MTM9PT1wLnRhZyl7dmFyIHg9cC5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT14KUM9bnVsbCE9PXguZGVoeWRyYXRlZD8hMDohMTtlbHNle3ZhciB3PXAubWVtb2l6ZWRQcm9wcztDPXZvaWQgMD09PXcuZmFsbGJhY2s/ITE6ITAhPT13LnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrPyEwOkE/ITE6ITB9fWlmKEMpe3ZhciB6PXAudXBkYXRlUXVldWU7aWYobnVsbD09PXope3ZhciB1PW5ldyBTZXQ7dS5hZGQobCk7cC51cGRhdGVRdWV1ZT11fWVsc2Ugei5hZGQobCk7aWYoMD09PShwLm1vZGUmMikpe3AuZmxhZ3N8PTY0O2guZmxhZ3N8PTE2Mzg0O2guZmxhZ3MmPS0yOTgxO2lmKDE9PT1oLnRhZylpZihudWxsPT09aC5hbHRlcm5hdGUpaC50YWc9MTc7ZWxzZXt2YXIgdD16ZygtMSwxKTt0LnRhZz0yO0FnKGgsdCl9aC5sYW5lc3w9MTticmVhayBhfWs9XG52b2lkIDA7aD1iO3ZhciBxPWYucGluZ0NhY2hlO251bGw9PT1xPyhxPWYucGluZ0NhY2hlPW5ldyBPaSxrPW5ldyBTZXQscS5zZXQobCxrKSk6KGs9cS5nZXQobCksdm9pZCAwPT09ayYmKGs9bmV3IFNldCxxLnNldChsLGspKSk7aWYoIWsuaGFzKGgpKXtrLmFkZChoKTt2YXIgdj1Zai5iaW5kKG51bGwsZixsLGgpO2wudGhlbih2LHYpfXAuZmxhZ3N8PTQwOTY7cC5sYW5lcz1iO2JyZWFrIGF9cD1wLnJldHVybn13aGlsZShudWxsIT09cCk7az1FcnJvcigoUmEoaC50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiKX01IT09ViYmKFY9Mik7az1NaShrLGgpO3A9XG5nO2Rve3N3aXRjaChwLnRhZyl7Y2FzZSAzOmY9aztwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEo9UGkocCxmLGIpO0JnKHAsSik7YnJlYWsgYTtjYXNlIDE6Zj1rO3ZhciBLPXAudHlwZSxRPXAuc3RhdGVOb2RlO2lmKDA9PT0ocC5mbGFncyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgSy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1RJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgUS5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhRKSkpKXtwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEw9U2kocCxmLGIpO0JnKHAsTCk7YnJlYWsgYX19cD1wLnJldHVybn13aGlsZShudWxsIT09cCl9WmooYyl9Y2F0Y2godmEpe2I9dmE7WT09PWMmJm51bGwhPT1jJiYoWT1jPWMucmV0dXJuKTtjb250aW51ZX1icmVha313aGlsZSgxKX1cbmZ1bmN0aW9uIFBqKCl7dmFyIGE9b2ouY3VycmVudDtvai5jdXJyZW50PUdoO3JldHVybiBudWxsPT09YT9HaDphfWZ1bmN0aW9uIFRqKGEsYil7dmFyIGM9WDtYfD0xNjt2YXIgZD1QaigpO1U9PT1hJiZXPT09Ynx8UWooYSxiKTtkbyB0cnl7YWsoKTticmVha31jYXRjaChlKXtTaihhLGUpfXdoaWxlKDEpO3FnKCk7WD1jO29qLmN1cnJlbnQ9ZDtpZihudWxsIT09WSl0aHJvdyBFcnJvcih5KDI2MSkpO1U9bnVsbDtXPTA7cmV0dXJuIFZ9ZnVuY3Rpb24gYWsoKXtmb3IoO251bGwhPT1ZOyliayhZKX1mdW5jdGlvbiBSaigpe2Zvcig7bnVsbCE9PVkmJiFRZigpOyliayhZKX1mdW5jdGlvbiBiayhhKXt2YXIgYj1jayhhLmFsdGVybmF0ZSxhLHFqKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWI/WmooYSk6WT1iO3BqLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFpqKGEpe3ZhciBiPWE7ZG97dmFyIGM9Yi5hbHRlcm5hdGU7YT1iLnJldHVybjtpZigwPT09KGIuZmxhZ3MmMjA0OCkpe2M9R2koYyxiLHFqKTtpZihudWxsIT09Yyl7WT1jO3JldHVybn1jPWI7aWYoMjQhPT1jLnRhZyYmMjMhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8MCE9PShxaiYxMDczNzQxODI0KXx8MD09PShjLm1vZGUmNCkpe2Zvcih2YXIgZD0wLGU9Yy5jaGlsZDtudWxsIT09ZTspZHw9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZT1lLnNpYmxpbmc7Yy5jaGlsZExhbmVzPWR9bnVsbCE9PWEmJjA9PT0oYS5mbGFncyYyMDQ4KSYmKG51bGw9PT1hLmZpcnN0RWZmZWN0JiYoYS5maXJzdEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxudWxsIT09Yi5sYXN0RWZmZWN0JiYobnVsbCE9PWEubGFzdEVmZmVjdCYmKGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLGEubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QpLDE8Yi5mbGFncyYmKG51bGwhPT1cbmEubGFzdEVmZmVjdD9hLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iOmEuZmlyc3RFZmZlY3Q9YixhLmxhc3RFZmZlY3Q9YikpfWVsc2V7Yz1MaShiKTtpZihudWxsIT09Yyl7Yy5mbGFncyY9MjA0NztZPWM7cmV0dXJufW51bGwhPT1hJiYoYS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9bnVsbCxhLmZsYWdzfD0yMDQ4KX1iPWIuc2libGluZztpZihudWxsIT09Yil7WT1iO3JldHVybn1ZPWI9YX13aGlsZShudWxsIT09Yik7MD09PVYmJihWPTUpfWZ1bmN0aW9uIFVqKGEpe3ZhciBiPWVnKCk7Z2coOTksZGsuYmluZChudWxsLGEsYikpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZGsoYSxiKXtkbyBPaigpO3doaWxlKG51bGwhPT15aik7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBjPWEuZmluaXNoZWRXb3JrO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyBFcnJvcih5KDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7dmFyIGQ9Yy5sYW5lc3xjLmNoaWxkTGFuZXMsZT1kLGY9YS5wZW5kaW5nTGFuZXMmfmU7YS5wZW5kaW5nTGFuZXM9ZTthLnN1c3BlbmRlZExhbmVzPTA7YS5waW5nZWRMYW5lcz0wO2EuZXhwaXJlZExhbmVzJj1lO2EubXV0YWJsZVJlYWRMYW5lcyY9ZTthLmVudGFuZ2xlZExhbmVzJj1lO2U9YS5lbnRhbmdsZW1lbnRzO2Zvcih2YXIgZz1hLmV2ZW50VGltZXMsaD1hLmV4cGlyYXRpb25UaW1lczswPGY7KXt2YXIgaz0zMS1WYyhmKSxsPTE8PGs7ZVtrXT0wO2dba109LTE7aFtrXT0tMTtmJj1+bH1udWxsIT09XG5DaiYmMD09PShkJjI0KSYmQ2ouaGFzKGEpJiZDai5kZWxldGUoYSk7YT09PVUmJihZPVU9bnVsbCxXPTApOzE8Yy5mbGFncz9udWxsIT09Yy5sYXN0RWZmZWN0PyhjLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGQ9Yy5maXJzdEVmZmVjdCk6ZD1jOmQ9Yy5maXJzdEVmZmVjdDtpZihudWxsIT09ZCl7ZT1YO1h8PTMyO3BqLmN1cnJlbnQ9bnVsbDtrZj1mZDtnPU5lKCk7aWYoT2UoZykpe2lmKFwic2VsZWN0aW9uU3RhcnRcImluIGcpaD17c3RhcnQ6Zy5zZWxlY3Rpb25TdGFydCxlbmQ6Zy5zZWxlY3Rpb25FbmR9O2Vsc2UgYTppZihoPShoPWcub3duZXJEb2N1bWVudCkmJmguZGVmYXVsdFZpZXd8fHdpbmRvdywobD1oLmdldFNlbGVjdGlvbiYmaC5nZXRTZWxlY3Rpb24oKSkmJjAhPT1sLnJhbmdlQ291bnQpe2g9bC5hbmNob3JOb2RlO2Y9bC5hbmNob3JPZmZzZXQ7az1sLmZvY3VzTm9kZTtsPWwuZm9jdXNPZmZzZXQ7dHJ5e2gubm9kZVR5cGUsay5ub2RlVHlwZX1jYXRjaCh2YSl7aD1udWxsO1xuYnJlYWsgYX12YXIgbj0wLEE9LTEscD0tMSxDPTAseD0wLHc9Zyx6PW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdTs7KXt3IT09aHx8MCE9PWYmJjMhPT13Lm5vZGVUeXBlfHwoQT1uK2YpO3chPT1rfHwwIT09bCYmMyE9PXcubm9kZVR5cGV8fChwPW4rbCk7Mz09PXcubm9kZVR5cGUmJihuKz13Lm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0odT13LmZpcnN0Q2hpbGQpKWJyZWFrO3o9dzt3PXV9Zm9yKDs7KXtpZih3PT09ZylicmVhayBiO3o9PT1oJiYrK0M9PT1mJiYoQT1uKTt6PT09ayYmKyt4PT09bCYmKHA9bik7aWYobnVsbCE9PSh1PXcubmV4dFNpYmxpbmcpKWJyZWFrO3c9ejt6PXcucGFyZW50Tm9kZX13PXV9aD0tMT09PUF8fC0xPT09cD9udWxsOntzdGFydDpBLGVuZDpwfX1lbHNlIGg9bnVsbDtoPWh8fHtzdGFydDowLGVuZDowfX1lbHNlIGg9bnVsbDtsZj17Zm9jdXNlZEVsZW06ZyxzZWxlY3Rpb25SYW5nZTpofTtmZD0hMTtJaj1udWxsO0pqPSExO1o9ZDtkbyB0cnl7ZWsoKX1jYXRjaCh2YSl7aWYobnVsbD09PVxuWil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtJaj1udWxsO1o9ZDtkbyB0cnl7Zm9yKGc9YTtudWxsIT09Wjspe3ZhciB0PVouZmxhZ3M7dCYxNiYmcGIoWi5zdGF0ZU5vZGUsXCJcIik7aWYodCYxMjgpe3ZhciBxPVouYWx0ZXJuYXRlO2lmKG51bGwhPT1xKXt2YXIgdj1xLnJlZjtudWxsIT09diYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YobnVsbCk6di5jdXJyZW50PW51bGwpfX1zd2l0Y2godCYxMDM4KXtjYXNlIDI6ZmooWik7Wi5mbGFncyY9LTM7YnJlYWs7Y2FzZSA2OmZqKFopO1ouZmxhZ3MmPS0zO2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgMTAyNDpaLmZsYWdzJj0tMTAyNTticmVhaztjYXNlIDEwMjg6Wi5mbGFncyY9LTEwMjU7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA0OmlqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgODpoPVo7Y2ooZyxoKTt2YXIgSj1oLmFsdGVybmF0ZTtkaihoKTtudWxsIT09XG5KJiZkaihKKX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO3Y9bGY7cT1OZSgpO3Q9di5mb2N1c2VkRWxlbTtnPXYuc2VsZWN0aW9uUmFuZ2U7aWYocSE9PXQmJnQmJnQub3duZXJEb2N1bWVudCYmTWUodC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0KSl7bnVsbCE9PWcmJk9lKHQpJiYocT1nLnN0YXJ0LHY9Zy5lbmQsdm9pZCAwPT09diYmKHY9cSksXCJzZWxlY3Rpb25TdGFydFwiaW4gdD8odC5zZWxlY3Rpb25TdGFydD1xLHQuc2VsZWN0aW9uRW5kPU1hdGgubWluKHYsdC52YWx1ZS5sZW5ndGgpKToodj0ocT10Lm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmcS5kZWZhdWx0Vmlld3x8d2luZG93LHYuZ2V0U2VsZWN0aW9uJiYodj12LmdldFNlbGVjdGlvbigpLGg9dC50ZXh0Q29udGVudC5sZW5ndGgsSj1NYXRoLm1pbihnLnN0YXJ0LGgpLGc9dm9pZCAwPT09XG5nLmVuZD9KOk1hdGgubWluKGcuZW5kLGgpLCF2LmV4dGVuZCYmSj5nJiYoaD1nLGc9SixKPWgpLGg9TGUodCxKKSxmPUxlKHQsZyksaCYmZiYmKDEhPT12LnJhbmdlQ291bnR8fHYuYW5jaG9yTm9kZSE9PWgubm9kZXx8di5hbmNob3JPZmZzZXQhPT1oLm9mZnNldHx8di5mb2N1c05vZGUhPT1mLm5vZGV8fHYuZm9jdXNPZmZzZXQhPT1mLm9mZnNldCkmJihxPXEuY3JlYXRlUmFuZ2UoKSxxLnNldFN0YXJ0KGgubm9kZSxoLm9mZnNldCksdi5yZW1vdmVBbGxSYW5nZXMoKSxKPmc/KHYuYWRkUmFuZ2UocSksdi5leHRlbmQoZi5ub2RlLGYub2Zmc2V0KSk6KHEuc2V0RW5kKGYubm9kZSxmLm9mZnNldCksdi5hZGRSYW5nZShxKSkpKSkpO3E9W107Zm9yKHY9dDt2PXYucGFyZW50Tm9kZTspMT09PXYubm9kZVR5cGUmJnEucHVzaCh7ZWxlbWVudDp2LGxlZnQ6di5zY3JvbGxMZWZ0LHRvcDp2LnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0LmZvY3VzJiZ0LmZvY3VzKCk7Zm9yKHQ9XG4wO3Q8cS5sZW5ndGg7dCsrKXY9cVt0XSx2LmVsZW1lbnQuc2Nyb2xsTGVmdD12LmxlZnQsdi5lbGVtZW50LnNjcm9sbFRvcD12LnRvcH1mZD0hIWtmO2xmPWtmPW51bGw7YS5jdXJyZW50PWM7Wj1kO2RvIHRyeXtmb3IodD1hO251bGwhPT1aOyl7dmFyIEs9Wi5mbGFncztLJjM2JiZZaSh0LFouYWx0ZXJuYXRlLFopO2lmKEsmMTI4KXtxPXZvaWQgMDt2YXIgUT1aLnJlZjtpZihudWxsIT09USl7dmFyIEw9Wi5zdGF0ZU5vZGU7c3dpdGNoKFoudGFnKXtjYXNlIDU6cT1MO2JyZWFrO2RlZmF1bHQ6cT1MfVwiZnVuY3Rpb25cIj09PXR5cGVvZiBRP1EocSk6US5jdXJyZW50PXF9fVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7Wj1udWxsOyRmKCk7WD1lfWVsc2UgYS5jdXJyZW50PWM7aWYoeGopeGo9ITEseWo9YSx6aj1iO2Vsc2UgZm9yKFo9ZDtudWxsIT09WjspYj1cbloubmV4dEVmZmVjdCxaLm5leHRFZmZlY3Q9bnVsbCxaLmZsYWdzJjgmJihLPVosSy5zaWJsaW5nPW51bGwsSy5zdGF0ZU5vZGU9bnVsbCksWj1iO2Q9YS5wZW5kaW5nTGFuZXM7MD09PWQmJihUaT1udWxsKTsxPT09ZD9hPT09RWo/RGorKzooRGo9MCxFaj1hKTpEaj0wO2M9Yy5zdGF0ZU5vZGU7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyUm9vdCl0cnl7TWYub25Db21taXRGaWJlclJvb3QoTGYsYyx2b2lkIDAsNjQ9PT0oYy5jdXJyZW50LmZsYWdzJjY0KSl9Y2F0Y2godmEpe31NaihhLE8oKSk7aWYoUWkpdGhyb3cgUWk9ITEsYT1SaSxSaT1udWxsLGE7aWYoMCE9PShYJjgpKXJldHVybiBudWxsO2lnKCk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBlaygpe2Zvcig7bnVsbCE9PVo7KXt2YXIgYT1aLmFsdGVybmF0ZTtKanx8bnVsbD09PUlqfHwoMCE9PShaLmZsYWdzJjgpP2RjKFosSWopJiYoSmo9ITApOjEzPT09Wi50YWcmJm1qKGEsWikmJmRjKFosSWopJiYoSmo9ITApKTt2YXIgYj1aLmZsYWdzOzAhPT0oYiYyNTYpJiZYaShhLFopOzA9PT0oYiY1MTIpfHx4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKTtaPVoubmV4dEVmZmVjdH19ZnVuY3Rpb24gT2ooKXtpZig5MCE9PXpqKXt2YXIgYT05Nzx6aj85Nzp6ajt6aj05MDtyZXR1cm4gZ2coYSxmayl9cmV0dXJuITF9ZnVuY3Rpb24gJGkoYSxiKXtBai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9ZnVuY3Rpb24gWmkoYSxiKXtCai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9XG5mdW5jdGlvbiBmaygpe2lmKG51bGw9PT15ailyZXR1cm4hMTt2YXIgYT15ajt5aj1udWxsO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMzEpKTt2YXIgYj1YO1h8PTMyO3ZhciBjPUJqO0JqPVtdO2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7dmFyIGU9Y1tkXSxmPWNbZCsxXSxnPWUuZGVzdHJveTtlLmRlc3Ryb3k9dm9pZCAwO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnKXRyeXtnKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1jPUFqO0FqPVtdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKz0yKXtlPWNbZF07Zj1jW2QrMV07dHJ5e3ZhciBoPWUuY3JlYXRlO2UuZGVzdHJveT1oKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1mb3IoaD1hLmN1cnJlbnQuZmlyc3RFZmZlY3Q7bnVsbCE9PWg7KWE9aC5uZXh0RWZmZWN0LGgubmV4dEVmZmVjdD1udWxsLGguZmxhZ3MmOCYmKGguc2libGluZz1cbm51bGwsaC5zdGF0ZU5vZGU9bnVsbCksaD1hO1g9YjtpZygpO3JldHVybiEwfWZ1bmN0aW9uIGdrKGEsYixjKXtiPU1pKGMsYik7Yj1QaShhLGIsMSk7QWcoYSxiKTtiPUhnKCk7YT1LaihhLDEpO251bGwhPT1hJiYoJGMoYSwxLGIpLE1qKGEsYikpfVxuZnVuY3Rpb24gV2koYSxiKXtpZigzPT09YS50YWcpZ2soYSxhLGIpO2Vsc2UgZm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7aWYoMz09PWMudGFnKXtnayhjLGEsYik7YnJlYWt9ZWxzZSBpZigxPT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpe2E9TWkoYixhKTt2YXIgZT1TaShjLGEsMSk7QWcoYyxlKTtlPUhnKCk7Yz1LaihjLDEpO2lmKG51bGwhPT1jKSRjKGMsMSxlKSxNaihjLGUpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXRyeXtkLmNvbXBvbmVudERpZENhdGNoKGIsYSl9Y2F0Y2goZil7fWJyZWFrfX1jPWMucmV0dXJufX1cbmZ1bmN0aW9uIFlqKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Yj1IZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmYztVPT09YSYmKFcmYyk9PT1jJiYoND09PVZ8fDM9PT1WJiYoVyY2MjkxNDU2MCk9PT1XJiY1MDA+TygpLWpqP1FqKGEsMCk6dWp8PWMpO01qKGEsYil9ZnVuY3Rpb24gbGooYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yj0wOzA9PT1iJiYoYj1hLm1vZGUsMD09PShiJjIpP2I9MTowPT09KGImNCk/Yj05OT09PWVnKCk/MToyOigwPT09R2omJihHaj10aiksYj1ZYyg2MjkxNDU2MCZ+R2opLDA9PT1iJiYoYj00MTk0MzA0KSkpO2M9SGcoKTthPUtqKGEsYik7bnVsbCE9PWEmJigkYyhhLGIsYyksTWooYSxjKSl9dmFyIGNrO1xuY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWIubGFuZXM7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fE4uY3VycmVudCl1Zz0hMDtlbHNlIGlmKDAhPT0oYyZkKSl1Zz0wIT09KGEuZmxhZ3MmMTYzODQpPyEwOiExO2Vsc2V7dWc9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6cmkoYik7c2goKTticmVhaztjYXNlIDU6Z2goYik7YnJlYWs7Y2FzZSAxOkZmKGIudHlwZSkmJkpmKGIpO2JyZWFrO2Nhc2UgNDplaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6ZD1iLm1lbW9pemVkUHJvcHMudmFsdWU7dmFyIGU9Yi50eXBlLl9jb250ZXh0O0kobWcsZS5fY3VycmVudFZhbHVlKTtlLl9jdXJyZW50VmFsdWU9ZDticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2lmKDAhPT0oYyZiLmNoaWxkLmNoaWxkTGFuZXMpKXJldHVybiB0aShhLGIsYyk7SShQLFAuY3VycmVudCYxKTtiPWhpKGEsYixjKTtyZXR1cm4gbnVsbCE9PVxuYj9iLnNpYmxpbmc6bnVsbH1JKFAsUC5jdXJyZW50JjEpO2JyZWFrO2Nhc2UgMTk6ZD0wIT09KGMmYi5jaGlsZExhbmVzKTtpZigwIT09KGEuZmxhZ3MmNjQpKXtpZihkKXJldHVybiBBaShhLGIsYyk7Yi5mbGFnc3w9NjR9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsLGUubGFzdEVmZmVjdD1udWxsKTtJKFAsUC5jdXJyZW50KTtpZihkKWJyZWFrO2Vsc2UgcmV0dXJuIG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBiLmxhbmVzPTAsbWkoYSxiLGMpfXJldHVybiBoaShhLGIsYyl9ZWxzZSB1Zz0hMTtiLmxhbmVzPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1iLnR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7YT1iLnBlbmRpbmdQcm9wcztlPUVmKGIsTS5jdXJyZW50KTt0ZyhiLGMpO2U9Q2gobnVsbCxiLGQsYSxlLGMpO2IuZmxhZ3N8PTE7aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKEZmKGQpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt4ZyhiKTt2YXIgZz1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmR2coYixkLGcsYSk7ZS51cGRhdGVyPUtnO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbHM9YjtPZyhiLGQsYSxjKTtiPXFpKG51bGwsYixkLCEwLGYsYyl9ZWxzZSBiLnRhZz0wLGZpKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTthOntudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTtcbmE9Yi5wZW5kaW5nUHJvcHM7Zj1lLl9pbml0O2U9ZihlLl9wYXlsb2FkKTtiLnR5cGU9ZTtmPWIudGFnPWhrKGUpO2E9bGcoZSxhKTtzd2l0Y2goZil7Y2FzZSAwOmI9bGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTpiPXBpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDExOmI9Z2kobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTQ6Yj1paShudWxsLGIsZSxsZyhlLnR5cGUsYSksZCxjKTticmVhayBhfXRocm93IEVycm9yKHkoMzA2LGUsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbGkoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSkscGkoYSxiLGQsZSxjKTtjYXNlIDM6cmkoYik7ZD1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1hfHxudWxsPT09ZCl0aHJvdyBFcnJvcih5KDI4MikpO1xuZD1iLnBlbmRpbmdQcm9wcztlPWIubWVtb2l6ZWRTdGF0ZTtlPW51bGwhPT1lP2UuZWxlbWVudDpudWxsO3lnKGEsYik7Q2coYixkLG51bGwsYyk7ZD1iLm1lbW9pemVkU3RhdGUuZWxlbWVudDtpZihkPT09ZSlzaCgpLGI9aGkoYSxiLGMpO2Vsc2V7ZT1iLnN0YXRlTm9kZTtpZihmPWUuaHlkcmF0ZSlraD1yZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLGpoPWIsZj1saD0hMDtpZihmKXthPWUubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YTtpZihudWxsIT1hKWZvcihlPTA7ZTxhLmxlbmd0aDtlKz0yKWY9YVtlXSxmLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWFbZSsxXSx0aC5wdXNoKGYpO2M9WmcoYixudWxsLGQsYyk7Zm9yKGIuY2hpbGQ9YztjOyljLmZsYWdzPWMuZmxhZ3MmLTN8MTAyNCxjPWMuc2libGluZ31lbHNlIGZpKGEsYixkLGMpLHNoKCk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gZ2goYiksbnVsbD09PWEmJlxucGgoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGc9ZS5jaGlsZHJlbixuZihkLGUpP2c9bnVsbDpudWxsIT09ZiYmbmYoZCxmKSYmKGIuZmxhZ3N8PTE2KSxvaShhLGIpLGZpKGEsYixnLGMpLGIuY2hpbGQ7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmcGgoYiksbnVsbDtjYXNlIDEzOnJldHVybiB0aShhLGIsYyk7Y2FzZSA0OnJldHVybiBlaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1ZZyhiLG51bGwsZCxjKTpmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksZ2koYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zz1iLm1lbW9pemVkUHJvcHM7Zj1lLnZhbHVlO3ZhciBoPWIudHlwZS5fY29udGV4dDtJKG1nLGguX2N1cnJlbnRWYWx1ZSk7aC5fY3VycmVudFZhbHVlPWY7aWYobnVsbCE9PWcpaWYoaD1nLnZhbHVlLGY9SGUoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwLDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIU4uY3VycmVudCl7Yj1oaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgaz1oLmRlcGVuZGVuY2llcztpZihudWxsIT09ayl7Zz1oLmNoaWxkO2Zvcih2YXIgbD1cbmsuZmlyc3RDb250ZXh0O251bGwhPT1sOyl7aWYobC5jb250ZXh0PT09ZCYmMCE9PShsLm9ic2VydmVkQml0cyZmKSl7MT09PWgudGFnJiYobD16ZygtMSxjJi1jKSxsLnRhZz0yLEFnKGgsbCkpO2gubGFuZXN8PWM7bD1oLmFsdGVybmF0ZTtudWxsIT09bCYmKGwubGFuZXN8PWMpO3NnKGgucmV0dXJuLGMpO2subGFuZXN8PWM7YnJlYWt9bD1sLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9udWxsOmguY2hpbGQ6aC5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1oO2Vsc2UgZm9yKGc9aDtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9aD1nLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWcucmV0dXJuO2c9aDticmVha31nPWcucmV0dXJufWg9Z31maShhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbix0ZyhiLGMpLGU9dmcoZSxcbmYudW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSxkPWQoZSksYi5mbGFnc3w9MSxmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTQ6cmV0dXJuIGU9Yi50eXBlLGY9bGcoZSxiLnBlbmRpbmdQcm9wcyksZj1sZyhlLnR5cGUsZiksaWkoYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIGtpKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLGIudGFnPTEsRmYoZCk/KGE9ITAsSmYoYikpOmE9ITEsdGcoYixjKSxNZyhiLGQsZSksT2coYixkLGUsYykscWkobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiBBaShhLGIsYyk7Y2FzZSAyMzpyZXR1cm4gbWkoYSxiLGMpO2Nhc2UgMjQ6cmV0dXJuIG1pKGEsYixjKX10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO1xufTtmdW5jdGlvbiBpayhhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuZGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuZmxhZ3M9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkTGFuZXM9dGhpcy5sYW5lcz0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gbmgoYSxiLGMsZCl7cmV0dXJuIG5ldyBpayhhLGIsYyxkKX1mdW5jdGlvbiBqaShhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfVxuZnVuY3Rpb24gaGsoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGppKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1BYSlyZXR1cm4gMTE7aWYoYT09PURhKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFRnKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9bmgoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy50eXBlPWEudHlwZSxjLmZsYWdzPTAsYy5uZXh0RWZmZWN0PW51bGwsYy5maXJzdEVmZmVjdD1udWxsLGMubGFzdEVmZmVjdD1udWxsKTtjLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzO2MubGFuZXM9YS5sYW5lcztjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtiPWEuZGVwZW5kZW5jaWVzO2MuZGVwZW5kZW5jaWVzPW51bGw9PT1iP251bGw6e2xhbmVzOmIubGFuZXMsZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0fTtcbmMuc2libGluZz1hLnNpYmxpbmc7Yy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gVmcoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWppKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIHVhOnJldHVybiBYZyhjLmNoaWxkcmVuLGUsZixiKTtjYXNlIEhhOmc9ODtlfD0xNjticmVhaztjYXNlIHdhOmc9ODtlfD0xO2JyZWFrO2Nhc2UgeGE6cmV0dXJuIGE9bmgoMTIsYyxiLGV8OCksYS5lbGVtZW50VHlwZT14YSxhLnR5cGU9eGEsYS5sYW5lcz1mLGE7Y2FzZSBCYTpyZXR1cm4gYT1uaCgxMyxjLGIsZSksYS50eXBlPUJhLGEuZWxlbWVudFR5cGU9QmEsYS5sYW5lcz1mLGE7Y2FzZSBDYTpyZXR1cm4gYT1uaCgxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1DYSxhLmxhbmVzPWYsYTtjYXNlIElhOnJldHVybiB2aShjLGUsZixiKTtjYXNlIEphOnJldHVybiBhPW5oKDI0LGMsYixlKSxhLmVsZW1lbnRUeXBlPUphLGEubGFuZXM9ZixhO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHlhOmc9MTA7YnJlYWsgYTtjYXNlIHphOmc9OTticmVhayBhO2Nhc2UgQWE6Zz0xMTticmVhayBhO2Nhc2UgRGE6Zz0xNDticmVhayBhO2Nhc2UgRWE6Zz0xNjtkPW51bGw7YnJlYWsgYTtjYXNlIEZhOmc9MjI7YnJlYWsgYX10aHJvdyBFcnJvcih5KDEzMCxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIikpO31iPW5oKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmxhbmVzPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gWGcoYSxiLGMsZCl7YT1uaCg3LGEsZCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gdmkoYSxiLGMsZCl7YT1uaCgyMyxhLGQsYik7YS5lbGVtZW50VHlwZT1JYTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gVWcoYSxiLGMpe2E9bmgoNixhLG51bGwsYik7YS5sYW5lcz1jO3JldHVybiBhfVxuZnVuY3Rpb24gV2coYSxiLGMpe2I9bmgoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IubGFuZXM9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9XG5mdW5jdGlvbiBqayhhLGIsYyl7dGhpcy50YWc9Yjt0aGlzLmNvbnRhaW5lckluZm89YTt0aGlzLmZpbmlzaGVkV29yaz10aGlzLnBpbmdDYWNoZT10aGlzLmN1cnJlbnQ9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmh5ZHJhdGU9Yzt0aGlzLmNhbGxiYWNrTm9kZT1udWxsO3RoaXMuY2FsbGJhY2tQcmlvcml0eT0wO3RoaXMuZXZlbnRUaW1lcz1aYygwKTt0aGlzLmV4cGlyYXRpb25UaW1lcz1aYygtMSk7dGhpcy5lbnRhbmdsZWRMYW5lcz10aGlzLmZpbmlzaGVkTGFuZXM9dGhpcy5tdXRhYmxlUmVhZExhbmVzPXRoaXMuZXhwaXJlZExhbmVzPXRoaXMucGluZ2VkTGFuZXM9dGhpcy5zdXNwZW5kZWRMYW5lcz10aGlzLnBlbmRpbmdMYW5lcz0wO3RoaXMuZW50YW5nbGVtZW50cz1aYygwKTt0aGlzLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9bnVsbH1cbmZ1bmN0aW9uIGtrKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6dGEsa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5mdW5jdGlvbiBsayhhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1IZygpLGc9SWcoZSk7YTppZihjKXtjPWMuX3JlYWN0SW50ZXJuYWxzO2I6e2lmKFpiKGMpIT09Y3x8MSE9PWMudGFnKXRocm93IEVycm9yKHkoMTcwKSk7dmFyIGg9Yztkb3tzd2l0Y2goaC50YWcpe2Nhc2UgMzpoPWguc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoRmYoaC50eXBlKSl7aD1oLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBifX1oPWgucmV0dXJufXdoaWxlKG51bGwhPT1oKTt0aHJvdyBFcnJvcih5KDE3MSkpO31pZigxPT09Yy50YWcpe3ZhciBrPWMudHlwZTtpZihGZihrKSl7Yz1JZihjLGssaCk7YnJlYWsgYX19Yz1ofWVsc2UgYz1DZjtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPXpnKGYsZyk7Yi5wYXlsb2FkPXtlbGVtZW50OmF9O2Q9dm9pZCAwPT09ZD9udWxsOmQ7bnVsbCE9PVxuZCYmKGIuY2FsbGJhY2s9ZCk7QWcoZSxiKTtKZyhlLGcsZik7cmV0dXJuIGd9ZnVuY3Rpb24gbWsoYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBuayhhLGIpe2E9YS5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXt2YXIgYz1hLnJldHJ5TGFuZTthLnJldHJ5TGFuZT0wIT09YyYmYzxiP2M6Yn19ZnVuY3Rpb24gb2soYSxiKXtuayhhLGIpOyhhPWEuYWx0ZXJuYXRlKSYmbmsoYSxiKX1mdW5jdGlvbiBwaygpe3JldHVybiBudWxsfVxuZnVuY3Rpb24gcWsoYSxiLGMpe3ZhciBkPW51bGwhPWMmJm51bGwhPWMuaHlkcmF0aW9uT3B0aW9ucyYmYy5oeWRyYXRpb25PcHRpb25zLm11dGFibGVTb3VyY2VzfHxudWxsO2M9bmV3IGprKGEsYixudWxsIT1jJiYhMD09PWMuaHlkcmF0ZSk7Yj1uaCgzLG51bGwsbnVsbCwyPT09Yj83OjE9PT1iPzM6MCk7Yy5jdXJyZW50PWI7Yi5zdGF0ZU5vZGU9Yzt4ZyhiKTthW2ZmXT1jLmN1cnJlbnQ7Y2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyl7Yj1kW2FdO3ZhciBlPWIuX2dldFZlcnNpb247ZT1lKGIuX3NvdXJjZSk7bnVsbD09Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2MubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYixlXTpjLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChiLGUpfXRoaXMuX2ludGVybmFsUm9vdD1jfVxucWsucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXtsayhhLHRoaXMuX2ludGVybmFsUm9vdCxudWxsLG51bGwpfTtxay5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX2ludGVybmFsUm9vdCxiPWEuY29udGFpbmVySW5mbztsayhudWxsLGEsbnVsbCxmdW5jdGlvbigpe2JbZmZdPW51bGx9KX07ZnVuY3Rpb24gcmsoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfVxuZnVuY3Rpb24gc2soYSxiKXtifHwoYj1hPzk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEuZmlyc3RDaGlsZDpudWxsLGI9ISghYnx8MSE9PWIubm9kZVR5cGV8fCFiLmhhc0F0dHJpYnV0ZShcImRhdGEtcmVhY3Ryb290XCIpKSk7aWYoIWIpZm9yKHZhciBjO2M9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYyk7cmV0dXJuIG5ldyBxayhhLDAsYj97aHlkcmF0ZTohMH06dm9pZCAwKX1cbmZ1bmN0aW9uIHRrKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe3ZhciBnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7aC5jYWxsKGEpfX1sayhiLGcsYSxlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPXNrKGMsZCk7Zz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBrPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2suY2FsbChhKX19WGooZnVuY3Rpb24oKXtsayhiLGcsYSxlKX0pfXJldHVybiBtayhnKX1lYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNCxiKTtvayhhLDQpfX07ZmM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDY3MTA4ODY0LGIpO29rKGEsNjcxMDg4NjQpfX07XG5nYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpLGM9SWcoYSk7SmcoYSxjLGIpO29rKGEsYyl9fTtoYz1mdW5jdGlvbihhLGIpe3JldHVybiBiKCl9O1xueWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjphYihhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9RGIoZCk7aWYoIWUpdGhyb3cgRXJyb3IoeSg5MCkpO1dhKGQpO2FiKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZmIoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtHYj1XajtcbkhiPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9WDtYfD00O3RyeXtyZXR1cm4gZ2coOTgsYS5iaW5kKG51bGwsYixjLGQsZSkpfWZpbmFsbHl7WD1mLDA9PT1YJiYod2ooKSxpZygpKX19O0liPWZ1bmN0aW9uKCl7MD09PShYJjQ5KSYmKFZqKCksT2ooKSl9O0piPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtYfD0yO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fTtmdW5jdGlvbiB1ayhhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiBrayhhLGIsbnVsbCxjKX12YXIgdms9e0V2ZW50czpbQ2IsdWUsRGIsRWIsRmIsT2ose2N1cnJlbnQ6ITF9XX0sd2s9e2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndjLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTcuMC4yXCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifTtcbnZhciB4az17YnVuZGxlVHlwZTp3ay5idW5kbGVUeXBlLHZlcnNpb246d2sudmVyc2lvbixyZW5kZXJlclBhY2thZ2VOYW1lOndrLnJlbmRlcmVyUGFja2FnZU5hbWUscmVuZGVyZXJDb25maWc6d2sucmVuZGVyZXJDb25maWcsb3ZlcnJpZGVIb29rU3RhdGU6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZURlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZVJlbmFtZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzOm51bGwsb3ZlcnJpZGVQcm9wc0RlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzUmVuYW1lUGF0aDpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWNjKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3ay5maW5kRmliZXJCeUhvc3RJbnN0YW5jZXx8XG5wayxmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2g6bnVsbCxzY2hlZHVsZVJlZnJlc2g6bnVsbCxzY2hlZHVsZVJvb3Q6bnVsbCxzZXRSZWZyZXNoSGFuZGxlcjpudWxsLGdldEN1cnJlbnRGaWJlcjpudWxsfTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyl7dmFyIHlrPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZigheWsuaXNEaXNhYmxlZCYmeWsuc3VwcG9ydHNGaWJlcil0cnl7TGY9eWsuaW5qZWN0KHhrKSxNZj15a31jYXRjaChhKXt9fWV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9dms7ZXhwb3J0cy5jcmVhdGVQb3J0YWw9dWs7XG5leHBvcnRzLmZpbmRET01Ob2RlPWZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbHM7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IEVycm9yKHkoMTg4KSk7dGhyb3cgRXJyb3IoeSgyNjgsT2JqZWN0LmtleXMoYSkpKTt9YT1jYyhiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9O2V4cG9ydHMuZmx1c2hTeW5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtpZigwIT09KGMmNDgpKXJldHVybiBhKGIpO1h8PTE7dHJ5e2lmKGEpcmV0dXJuIGdnKDk5LGEuYmluZChudWxsLGIpKX1maW5hbGx5e1g9YyxpZygpfX07ZXhwb3J0cy5oeWRyYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITAsYyl9O1xuZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFyayhhKSl0aHJvdyBFcnJvcih5KDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oWGooZnVuY3Rpb24oKXt0ayhudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbZmZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1XajtleHBvcnRzLnVuc3RhYmxlX2NyZWF0ZVBvcnRhbD1mdW5jdGlvbihhLGIpe3JldHVybiB1ayhhLGIsMjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwpfTtcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIXJrKGMpKXRocm93IEVycm9yKHkoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IoeSgzOCkpO3JldHVybiB0ayhhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1xuU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6NjAxMjAscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNix2PWI/U3ltYm9sLmZvcihcInJlYWN0LmJsb2NrXCIpOjYwMTIxLHc9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik6NjAxMTcseD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik6NjAxMTgseT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTo2MDExOTtcbmZ1bmN0aW9uIHooYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIHQ6Y2FzZSByOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiBBKGEpe3JldHVybiB6KGEpPT09bX1leHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47ZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT10O2V4cG9ydHMuTWVtbz1yO2V4cG9ydHMuUG9ydGFsPWQ7XG5leHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIEEoYSl8fHooYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9QTtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09a307ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09dH07XG5leHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXJ9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWZ9O2V4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXB9O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxhPT09cXx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT10fHxhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bnx8YS4kJHR5cGVvZj09PXd8fGEuJCR0eXBlb2Y9PT14fHxhLiQkdHlwZW9mPT09eXx8YS4kJHR5cGVvZj09PXYpfTtleHBvcnRzLnR5cGVPZj16O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXIsIF9fUm91dGVyQ29udGV4dCwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgUHJvbXB0LCBSZWRpcmVjdCwgUm91dGUsIFJvdXRlciwgU3RhdGljUm91dGVyLCBTd2l0Y2gsIGdlbmVyYXRlUGF0aCwgbWF0Y2hQYXRoLCB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiwgdXNlUGFyYW1zLCB1c2VSb3V0ZU1hdGNoLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnJvd3NlclJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxudmFyIHJlc29sdmVUb0xvY2F0aW9uID0gZnVuY3Rpb24gcmVzb2x2ZVRvTG9jYXRpb24odG8sIGN1cnJlbnRMb2NhdGlvbikge1xuICByZXR1cm4gdHlwZW9mIHRvID09PSBcImZ1bmN0aW9uXCIgPyB0byhjdXJyZW50TG9jYXRpb24pIDogdG87XG59O1xudmFyIG5vcm1hbGl6ZVRvTG9jYXRpb24gPSBmdW5jdGlvbiBub3JtYWxpemVUb0xvY2F0aW9uKHRvLCBjdXJyZW50TG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjdXJyZW50TG9jYXRpb24pIDogdG87XG59O1xuXG52YXIgZm9yd2FyZFJlZlNoaW0gPSBmdW5jdGlvbiBmb3J3YXJkUmVmU2hpbShDKSB7XG4gIHJldHVybiBDO1xufTtcblxudmFyIGZvcndhcmRSZWYgPSBSZWFjdC5mb3J3YXJkUmVmO1xuXG5pZiAodHlwZW9mIGZvcndhcmRSZWYgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgZm9yd2FyZFJlZiA9IGZvcndhcmRSZWZTaGltO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG52YXIgTGlua0FuY2hvciA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIGZvcndhcmRlZFJlZikge1xuICB2YXIgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgbmF2aWdhdGUgPSBfcmVmLm5hdmlnYXRlLFxuICAgICAgX29uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiaW5uZXJSZWZcIiwgXCJuYXZpZ2F0ZVwiLCBcIm9uQ2xpY2tcIl0pO1xuXG4gIHZhciB0YXJnZXQgPSByZXN0LnRhcmdldDtcblxuICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfb25DbGljaykgX29uQ2xpY2soZXZlbnQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhyb3cgZXg7XG4gICAgICB9XG5cbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAgICF0YXJnZXQgfHwgdGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICAgKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBuYXZpZ2F0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICB9KTsgLy8gUmVhY3QgMTUgY29tcGF0XG5cblxuICBpZiAoZm9yd2FyZFJlZlNoaW0gIT09IGZvcndhcmRSZWYpIHtcbiAgICBwcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWYgfHwgaW5uZXJSZWY7XG4gIH0gZWxzZSB7XG4gICAgcHJvcHMucmVmID0gaW5uZXJSZWY7XG4gIH1cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudCAqL1xuXG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHByb3BzKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExpbmtBbmNob3IuZGlzcGxheU5hbWUgPSBcIkxpbmtBbmNob3JcIjtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cblxudmFyIExpbmsgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmMiwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmVmMiRjb21wb25lbnQgPSBfcmVmMi5jb21wb25lbnQsXG4gICAgICBjb21wb25lbnQgPSBfcmVmMiRjb21wb25lbnQgPT09IHZvaWQgMCA/IExpbmtBbmNob3IgOiBfcmVmMiRjb21wb25lbnQsXG4gICAgICByZXBsYWNlID0gX3JlZjIucmVwbGFjZSxcbiAgICAgIHRvID0gX3JlZjIudG8sXG4gICAgICBpbm5lclJlZiA9IF9yZWYyLmlubmVyUmVmLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJjb21wb25lbnRcIiwgXCJyZXBsYWNlXCIsIFwidG9cIiwgXCJpbm5lclJlZlwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX19Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgaGlzdG9yeSA9IGNvbnRleHQuaGlzdG9yeTtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVUb0xvY2F0aW9uKHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjb250ZXh0LmxvY2F0aW9uKSwgY29udGV4dC5sb2NhdGlvbik7XG4gICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICBuYXZpZ2F0ZTogZnVuY3Rpb24gbmF2aWdhdGUoKSB7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjb250ZXh0LmxvY2F0aW9uKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcGxhY2UgPyBoaXN0b3J5LnJlcGxhY2UgOiBoaXN0b3J5LnB1c2g7XG4gICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICB9XG4gICAgfSk7IC8vIFJlYWN0IDE1IGNvbXBhdFxuXG5cbiAgICBpZiAoZm9yd2FyZFJlZlNoaW0gIT09IGZvcndhcmRSZWYpIHtcbiAgICAgIHByb3BzLnJlZiA9IGZvcndhcmRlZFJlZiB8fCBpbm5lclJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuaW5uZXJSZWYgPSBpbm5lclJlZjtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKTtcbiAgfSk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgdG9UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKTtcbiAgdmFyIHJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsuZGlzcGxheU5hbWUgPSBcIkxpbmtcIjtcbiAgTGluay5wcm9wVHlwZXMgPSB7XG4gICAgaW5uZXJSZWY6IHJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG52YXIgZm9yd2FyZFJlZlNoaW0kMSA9IGZ1bmN0aW9uIGZvcndhcmRSZWZTaGltKEMpIHtcbiAgcmV0dXJuIEM7XG59O1xuXG52YXIgZm9yd2FyZFJlZiQxID0gUmVhY3QuZm9yd2FyZFJlZjtcblxuaWYgKHR5cGVvZiBmb3J3YXJkUmVmJDEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgZm9yd2FyZFJlZiQxID0gZm9yd2FyZFJlZlNoaW0kMTtcbn1cblxuZnVuY3Rpb24gam9pbkNsYXNzbmFtZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc25hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzbmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY2xhc3NuYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkuam9pbihcIiBcIik7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxudmFyIE5hdkxpbmsgPSBmb3J3YXJkUmVmJDEoZnVuY3Rpb24gKF9yZWYsIGZvcndhcmRlZFJlZikge1xuICB2YXIgX3JlZiRhcmlhQ3VycmVudCA9IF9yZWZbXCJhcmlhLWN1cnJlbnRcIl0sXG4gICAgICBhcmlhQ3VycmVudCA9IF9yZWYkYXJpYUN1cnJlbnQgPT09IHZvaWQgMCA/IFwicGFnZVwiIDogX3JlZiRhcmlhQ3VycmVudCxcbiAgICAgIF9yZWYkYWN0aXZlQ2xhc3NOYW1lID0gX3JlZi5hY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9PT0gdm9pZCAwID8gXCJhY3RpdmVcIiA6IF9yZWYkYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlU3R5bGUgPSBfcmVmLmFjdGl2ZVN0eWxlLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgZXhhY3QgPSBfcmVmLmV4YWN0LFxuICAgICAgaXNBY3RpdmVQcm9wID0gX3JlZi5pc0FjdGl2ZSxcbiAgICAgIGxvY2F0aW9uUHJvcCA9IF9yZWYubG9jYXRpb24sXG4gICAgICBzZW5zaXRpdmUgPSBfcmVmLnNlbnNpdGl2ZSxcbiAgICAgIHN0cmljdCA9IF9yZWYuc3RyaWN0LFxuICAgICAgc3R5bGVQcm9wID0gX3JlZi5zdHlsZSxcbiAgICAgIHRvID0gX3JlZi50byxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhcmlhLWN1cnJlbnRcIiwgXCJhY3RpdmVDbGFzc05hbWVcIiwgXCJhY3RpdmVTdHlsZVwiLCBcImNsYXNzTmFtZVwiLCBcImV4YWN0XCIsIFwiaXNBY3RpdmVcIiwgXCJsb2NhdGlvblwiLCBcInNlbnNpdGl2ZVwiLCBcInN0cmljdFwiLCBcInN0eWxlXCIsIFwidG9cIiwgXCJpbm5lclJlZlwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX19Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TmF2TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb25Qcm9wIHx8IGNvbnRleHQubG9jYXRpb247XG4gICAgdmFyIHRvTG9jYXRpb24gPSBub3JtYWxpemVUb0xvY2F0aW9uKHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjdXJyZW50TG9jYXRpb24pLCBjdXJyZW50TG9jYXRpb24pO1xuICAgIHZhciBwYXRoID0gdG9Mb2NhdGlvbi5wYXRobmFtZTsgLy8gUmVnZXggdGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwL2Jsb2IvbWFzdGVyL2luZGV4LmpzI0wyMDJcblxuICAgIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gICAgdmFyIG1hdGNoID0gZXNjYXBlZFBhdGggPyBtYXRjaFBhdGgoY3VycmVudExvY2F0aW9uLnBhdGhuYW1lLCB7XG4gICAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICAgIGV4YWN0OiBleGFjdCxcbiAgICAgIHNlbnNpdGl2ZTogc2Vuc2l0aXZlLFxuICAgICAgc3RyaWN0OiBzdHJpY3RcbiAgICB9KSA6IG51bGw7XG4gICAgdmFyIGlzQWN0aXZlID0gISEoaXNBY3RpdmVQcm9wID8gaXNBY3RpdmVQcm9wKG1hdGNoLCBjdXJyZW50TG9jYXRpb24pIDogbWF0Y2gpO1xuICAgIHZhciBjbGFzc05hbWUgPSBpc0FjdGl2ZSA/IGpvaW5DbGFzc25hbWVzKGNsYXNzTmFtZVByb3AsIGFjdGl2ZUNsYXNzTmFtZSkgOiBjbGFzc05hbWVQcm9wO1xuICAgIHZhciBzdHlsZSA9IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlUHJvcCwge30sIGFjdGl2ZVN0eWxlKSA6IHN0eWxlUHJvcDtcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGwsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRvOiB0b0xvY2F0aW9uXG4gICAgfSwgcmVzdCk7IC8vIFJlYWN0IDE1IGNvbXBhdFxuXG5cbiAgICBpZiAoZm9yd2FyZFJlZlNoaW0kMSAhPT0gZm9yd2FyZFJlZiQxKSB7XG4gICAgICBwcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWYgfHwgaW5uZXJSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLmlubmVyUmVmID0gaW5uZXJSZWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgcHJvcHMpO1xuICB9KTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbiAgdmFyIGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKTtcbiAgTmF2TGluay5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgTGluay5wcm9wVHlwZXMsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFR5cGUsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGFjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNlbnNpdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RyaWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluayB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3Qtcm91dGVyLWRvbS5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcblxudmFyIE1BWF9TSUdORURfMzFfQklUX0lOVCA9IDEwNzM3NDE4MjM7XG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG5mdW5jdGlvbiBnZXRVbmlxdWVJZCgpIHtcbiAgdmFyIGtleSA9ICdfX2dsb2JhbF91bmlxdWVfaWRfXyc7XG4gIHJldHVybiBjb21tb25qc0dsb2JhbFtrZXldID0gKGNvbW1vbmpzR2xvYmFsW2tleV0gfHwgMCkgKyAxO1xufVxuXG5mdW5jdGlvbiBvYmplY3RJcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKHZhbHVlKSB7XG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiBvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiBvZmYoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcih2YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlO1xuXG4gIHZhciBjb250ZXh0UHJvcCA9ICdfX2NyZWF0ZS1yZWFjdC1jb250ZXh0LScgKyBnZXRVbmlxdWVJZCgpICsgJ19fJztcblxuICB2YXIgUHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIF90aGlzLmVtaXR0ZXIgPSBjcmVhdGVFdmVudEVtaXR0ZXIoX3RoaXMucHJvcHMudmFsdWUpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbY29udGV4dFByb3BdID0gdGhpcy5lbWl0dGVyLCBfcmVmO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGNoYW5nZWRCaXRzO1xuXG4gICAgICAgIGlmIChvYmplY3RJcyhvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nID8gY2FsY3VsYXRlQ2hhbmdlZEJpdHMob2xkVmFsdWUsIG5ld1ZhbHVlKSA6IE1BWF9TSUdORURfMzFfQklUX0lOVDtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKChjaGFuZ2VkQml0cyAmIE1BWF9TSUdORURfMzFfQklUX0lOVCkgPT09IGNoYW5nZWRCaXRzLCAnY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IEV4cGVjdGVkIHRoZSByZXR1cm4gdmFsdWUgdG8gYmUgYSAnICsgJzMxLWJpdCBpbnRlZ2VyLiBJbnN0ZWFkIHJlY2VpdmVkOiAnICsgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoYW5nZWRCaXRzIHw9IDA7XG5cbiAgICAgICAgICBpZiAoY2hhbmdlZEJpdHMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5zZXQobmV4dFByb3BzLnZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3ZpZGVyO1xuICB9KENvbXBvbmVudCk7XG5cbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtjb250ZXh0UHJvcF0gPSBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG5cbiAgdmFyIENvbnN1bWVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0c0xvb3NlKENvbnN1bWVyLCBfQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBDb25zdW1lcigpIHtcbiAgICAgIHZhciBfdGhpczI7XG5cbiAgICAgIF90aGlzMiA9IF9Db21wb25lbnQyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpXG4gICAgICB9O1xuXG4gICAgICBfdGhpczIub25VcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBfdGhpczIub2JzZXJ2ZWRCaXRzIHwgMDtcblxuICAgICAgICBpZiAoKG9ic2VydmVkQml0cyAmIGNoYW5nZWRCaXRzKSAhPT0gMCkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvMiA9IENvbnN1bWVyLnByb3RvdHlwZTtcblxuICAgIF9wcm90bzIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gbmV4dFByb3BzLm9ic2VydmVkQml0cztcbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9uKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gdGhpcy5wcm9wcy5vYnNlcnZlZEJpdHM7XG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vZmYodGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90bzIuZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gb25seUNoaWxkKHRoaXMucHJvcHMuY2hpbGRyZW4pKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29uc3VtZXI7XG4gIH0oQ29tcG9uZW50KTtcblxuICBDb25zdW1lci5jb250ZXh0VHlwZXMgPSAoX0NvbnN1bWVyJGNvbnRleHRUeXBlID0ge30sIF9Db25zdW1lciRjb250ZXh0VHlwZVtjb250ZXh0UHJvcF0gPSBQcm9wVHlwZXMub2JqZWN0LCBfQ29uc3VtZXIkY29udGV4dFR5cGUpO1xuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29uc3VtZXJcbiAgfTtcbn1cblxudmFyIGluZGV4ID0gUmVhY3QuY3JlYXRlQ29udGV4dCB8fCBjcmVhdGVSZWFjdENvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiwgbG9jYXRpb25zQXJlRXF1YWwsIGNyZWF0ZVBhdGggfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgY3JlYXRlQ29udGV4dCBmcm9tICdtaW5pLWNyZWF0ZS1yZWFjdC1jb250ZXh0JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxuLy8gVE9ETzogUmVwbGFjZSB3aXRoIFJlYWN0LmNyZWF0ZUNvbnRleHQgb25jZSB3ZSBjYW4gYXNzdW1lIFJlYWN0IDE2K1xuXG52YXIgY3JlYXRlTmFtZWRDb250ZXh0ID0gZnVuY3Rpb24gY3JlYXRlTmFtZWRDb250ZXh0KG5hbWUpIHtcbiAgdmFyIGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG4gIGNvbnRleHQuZGlzcGxheU5hbWUgPSBuYW1lO1xuICByZXR1cm4gY29udGV4dDtcbn07XG5cbnZhciBoaXN0b3J5Q29udGV4dCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVOYW1lZENvbnRleHQoXCJSb3V0ZXItSGlzdG9yeVwiKTtcblxuLy8gVE9ETzogUmVwbGFjZSB3aXRoIFJlYWN0LmNyZWF0ZUNvbnRleHQgb25jZSB3ZSBjYW4gYXNzdW1lIFJlYWN0IDE2K1xuXG52YXIgY3JlYXRlTmFtZWRDb250ZXh0JDEgPSBmdW5jdGlvbiBjcmVhdGVOYW1lZENvbnRleHQobmFtZSkge1xuICB2YXIgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbiAgY29udGV4dC5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxudmFyIGNvbnRleHQgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlTmFtZWRDb250ZXh0JDEoXCJSb3V0ZXJcIik7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHB1dHRpbmcgaGlzdG9yeSBvbiBjb250ZXh0LlxuICovXG5cbnZhciBSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBSb3V0ZXIuY29tcHV0ZVJvb3RNYXRjaCA9IGZ1bmN0aW9uIGNvbXB1dGVSb290TWF0Y2gocGF0aG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIGlzRXhhY3Q6IHBhdGhuYW1lID09PSBcIi9cIlxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gUm91dGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBsb2NhdGlvbjogcHJvcHMuaGlzdG9yeS5sb2NhdGlvblxuICAgIH07IC8vIFRoaXMgaXMgYSBiaXQgb2YgYSBoYWNrLiBXZSBoYXZlIHRvIHN0YXJ0IGxpc3RlbmluZyBmb3IgbG9jYXRpb25cbiAgICAvLyBjaGFuZ2VzIGhlcmUgaW4gdGhlIGNvbnN0cnVjdG9yIGluIGNhc2UgdGhlcmUgYXJlIGFueSA8UmVkaXJlY3Q+c1xuICAgIC8vIG9uIHRoZSBpbml0aWFsIHJlbmRlci4gSWYgdGhlcmUgYXJlLCB0aGV5IHdpbGwgcmVwbGFjZS9wdXNoIHdoZW5cbiAgICAvLyB0aGV5IG1vdW50IGFuZCBzaW5jZSBjRE0gZmlyZXMgaW4gY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMsIHdlIG1heVxuICAgIC8vIGdldCBhIG5ldyBsb2NhdGlvbiBiZWZvcmUgdGhlIDxSb3V0ZXI+IGlzIG1vdW50ZWQuXG5cbiAgICBfdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgX3RoaXMuX3BlbmRpbmdMb2NhdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoIXByb3BzLnN0YXRpY0NvbnRleHQpIHtcbiAgICAgIF90aGlzLnVubGlzdGVuID0gcHJvcHMuaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICAgIGlmIChfdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuX3BlbmRpbmdMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdMb2NhdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLl9wZW5kaW5nTG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy51bmxpc3RlbikgdGhpcy51bmxpc3RlbigpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgICBsb2NhdGlvbjogdGhpcy5zdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbWF0Y2g6IFJvdXRlci5jb21wdXRlUm9vdE1hdGNoKHRoaXMuc3RhdGUubG9jYXRpb24ucGF0aG5hbWUpLFxuICAgICAgICBzdGF0aWNDb250ZXh0OiB0aGlzLnByb3BzLnN0YXRpY0NvbnRleHRcbiAgICAgIH1cbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KGhpc3RvcnlDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCBudWxsLFxuICAgICAgdmFsdWU6IHRoaXMucHJvcHMuaGlzdG9yeVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzdGF0aWNDb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwcmV2UHJvcHMuaGlzdG9yeSA9PT0gdGhpcy5wcm9wcy5oaXN0b3J5LCBcIllvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgaGlzdG9yeT5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgbG9jYXRpb24gaW4gbWVtb3J5LlxuICovXG5cbnZhciBNZW1vcnlSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWVtb3J5Um91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW1vcnlSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNZW1vcnlSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNZW1vcnlSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTWVtb3J5Um91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBpbml0aWFsRW50cmllczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGluaXRpYWxJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH07XG5cbiAgTWVtb3J5Um91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPE1lbW9yeVJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IE1lbW9yeVJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG52YXIgTGlmZWN5Y2xlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExpZmVjeWNsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlmZWN5Y2xlKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMaWZlY3ljbGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uTW91bnQpIHRoaXMucHJvcHMub25Nb3VudC5jYWxsKHRoaXMsIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGUpIHRoaXMucHJvcHMub25VcGRhdGUuY2FsbCh0aGlzLCB0aGlzLCBwcmV2UHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkgdGhpcy5wcm9wcy5vblVubW91bnQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBMaWZlY3ljbGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHByb21wdGluZyB0aGUgdXNlciBiZWZvcmUgbmF2aWdhdGluZyBhd2F5IGZyb20gYSBzY3JlZW4uXG4gKi9cblxuZnVuY3Rpb24gUHJvbXB0KF9yZWYpIHtcbiAgdmFyIG1lc3NhZ2UgPSBfcmVmLm1lc3NhZ2UsXG4gICAgICBfcmVmJHdoZW4gPSBfcmVmLndoZW4sXG4gICAgICB3aGVuID0gX3JlZiR3aGVuID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiR3aGVuO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8UHJvbXB0PiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGlmICghd2hlbiB8fCBjb250ZXh0LnN0YXRpY0NvbnRleHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtZXRob2QgPSBjb250ZXh0Lmhpc3RvcnkuYmxvY2s7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlmZWN5Y2xlLCB7XG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KHNlbGYpIHtcbiAgICAgICAgc2VsZi5yZWxlYXNlID0gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShzZWxmLCBwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5tZXNzYWdlICE9PSBtZXNzYWdlKSB7XG4gICAgICAgICAgc2VsZi5yZWxlYXNlKCk7XG4gICAgICAgICAgc2VsZi5yZWxlYXNlID0gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Vbm1vdW50OiBmdW5jdGlvbiBvblVubW91bnQoc2VsZikge1xuICAgICAgICBzZWxmLnJlbGVhc2UoKTtcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciBtZXNzYWdlVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSk7XG4gIFByb21wdC5wcm9wVHlwZXMgPSB7XG4gICAgd2hlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWVzc2FnZTogbWVzc2FnZVR5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG52YXIgY2FjaGUgPSB7fTtcbnZhciBjYWNoZUxpbWl0ID0gMTAwMDA7XG52YXIgY2FjaGVDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgpIHtcbiAgaWYgKGNhY2hlW3BhdGhdKSByZXR1cm4gY2FjaGVbcGF0aF07XG4gIHZhciBnZW5lcmF0b3IgPSBwYXRoVG9SZWdleHAuY29tcGlsZShwYXRoKTtcblxuICBpZiAoY2FjaGVDb3VudCA8IGNhY2hlTGltaXQpIHtcbiAgICBjYWNoZVtwYXRoXSA9IGdlbmVyYXRvcjtcbiAgICBjYWNoZUNvdW50Kys7XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdG9yO1xufVxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBnZW5lcmF0aW5nIGEgVVJMIHBhdGhuYW1lIGZyb20gYSBwYXRoIGFuZCBwYXJhbWV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKHBhdGgsIHBhcmFtcykge1xuICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0aCA9IFwiL1wiO1xuICB9XG5cbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gcGF0aCA9PT0gXCIvXCIgPyBwYXRoIDogY29tcGlsZVBhdGgocGF0aCkocGFyYW1zLCB7XG4gICAgcHJldHR5OiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBuYXZpZ2F0aW5nIHByb2dyYW1tYXRpY2FsbHkgd2l0aCBhIGNvbXBvbmVudC5cbiAqL1xuXG5mdW5jdGlvbiBSZWRpcmVjdChfcmVmKSB7XG4gIHZhciBjb21wdXRlZE1hdGNoID0gX3JlZi5jb21wdXRlZE1hdGNoLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgX3JlZiRwdXNoID0gX3JlZi5wdXNoLFxuICAgICAgcHVzaCA9IF9yZWYkcHVzaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHB1c2g7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxSZWRpcmVjdD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgaGlzdG9yeSA9IGNvbnRleHQuaGlzdG9yeSxcbiAgICAgICAgc3RhdGljQ29udGV4dCA9IGNvbnRleHQuc3RhdGljQ29udGV4dDtcbiAgICB2YXIgbWV0aG9kID0gcHVzaCA/IGhpc3RvcnkucHVzaCA6IGhpc3RvcnkucmVwbGFjZTtcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihjb21wdXRlZE1hdGNoID8gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gZ2VuZXJhdGVQYXRoKHRvLCBjb21wdXRlZE1hdGNoLnBhcmFtcykgOiBfZXh0ZW5kcyh7fSwgdG8sIHtcbiAgICAgIHBhdGhuYW1lOiBnZW5lcmF0ZVBhdGgodG8ucGF0aG5hbWUsIGNvbXB1dGVkTWF0Y2gucGFyYW1zKVxuICAgIH0pIDogdG8pOyAvLyBXaGVuIHJlbmRlcmluZyBpbiBhIHN0YXRpYyBjb250ZXh0LFxuICAgIC8vIHNldCB0aGUgbmV3IGxvY2F0aW9uIGltbWVkaWF0ZWx5LlxuXG4gICAgaWYgKHN0YXRpY0NvbnRleHQpIHtcbiAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaWZlY3ljbGUsIHtcbiAgICAgIG9uTW91bnQ6IGZ1bmN0aW9uIG9uTW91bnQoKSB7XG4gICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKHNlbGYsIHByZXZQcm9wcykge1xuICAgICAgICB2YXIgcHJldkxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocHJldlByb3BzLnRvKTtcblxuICAgICAgICBpZiAoIWxvY2F0aW9uc0FyZUVxdWFsKHByZXZMb2NhdGlvbiwgX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7XG4gICAgICAgICAga2V5OiBwcmV2TG9jYXRpb24ua2V5XG4gICAgICAgIH0pKSkge1xuICAgICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0bzogdG9cbiAgICB9KTtcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUmVkaXJlY3QucHJvcFR5cGVzID0ge1xuICAgIHB1c2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGZyb206IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG86IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkXG4gIH07XG59XG5cbnZhciBjYWNoZSQxID0ge307XG52YXIgY2FjaGVMaW1pdCQxID0gMTAwMDA7XG52YXIgY2FjaGVDb3VudCQxID0gMDtcblxuZnVuY3Rpb24gY29tcGlsZVBhdGgkMShwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBjYWNoZUtleSA9IFwiXCIgKyBvcHRpb25zLmVuZCArIG9wdGlvbnMuc3RyaWN0ICsgb3B0aW9ucy5zZW5zaXRpdmU7XG4gIHZhciBwYXRoQ2FjaGUgPSBjYWNoZSQxW2NhY2hlS2V5XSB8fCAoY2FjaGUkMVtjYWNoZUtleV0gPSB7fSk7XG4gIGlmIChwYXRoQ2FjaGVbcGF0aF0pIHJldHVybiBwYXRoQ2FjaGVbcGF0aF07XG4gIHZhciBrZXlzID0gW107XG4gIHZhciByZWdleHAgPSBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgcmVnZXhwOiByZWdleHAsXG4gICAga2V5czoga2V5c1xuICB9O1xuXG4gIGlmIChjYWNoZUNvdW50JDEgPCBjYWNoZUxpbWl0JDEpIHtcbiAgICBwYXRoQ2FjaGVbcGF0aF0gPSByZXN1bHQ7XG4gICAgY2FjaGVDb3VudCQxKys7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBtYXRjaGluZyBhIFVSTCBwYXRobmFtZSB0byBhIHBhdGguXG4gKi9cblxuXG5mdW5jdGlvbiBtYXRjaFBhdGgocGF0aG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IG9wdGlvbnNcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBhdGggPSBfb3B0aW9ucy5wYXRoLFxuICAgICAgX29wdGlvbnMkZXhhY3QgPSBfb3B0aW9ucy5leGFjdCxcbiAgICAgIGV4YWN0ID0gX29wdGlvbnMkZXhhY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZXhhY3QsXG4gICAgICBfb3B0aW9ucyRzdHJpY3QgPSBfb3B0aW9ucy5zdHJpY3QsXG4gICAgICBzdHJpY3QgPSBfb3B0aW9ucyRzdHJpY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkc3RyaWN0LFxuICAgICAgX29wdGlvbnMkc2Vuc2l0aXZlID0gX29wdGlvbnMuc2Vuc2l0aXZlLFxuICAgICAgc2Vuc2l0aXZlID0gX29wdGlvbnMkc2Vuc2l0aXZlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJHNlbnNpdGl2ZTtcbiAgdmFyIHBhdGhzID0gW10uY29uY2F0KHBhdGgpO1xuICByZXR1cm4gcGF0aHMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVkLCBwYXRoKSB7XG4gICAgaWYgKCFwYXRoICYmIHBhdGggIT09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGlmIChtYXRjaGVkKSByZXR1cm4gbWF0Y2hlZDtcblxuICAgIHZhciBfY29tcGlsZVBhdGggPSBjb21waWxlUGF0aCQxKHBhdGgsIHtcbiAgICAgIGVuZDogZXhhY3QsXG4gICAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICAgIHNlbnNpdGl2ZTogc2Vuc2l0aXZlXG4gICAgfSksXG4gICAgICAgIHJlZ2V4cCA9IF9jb21waWxlUGF0aC5yZWdleHAsXG4gICAgICAgIGtleXMgPSBfY29tcGlsZVBhdGgua2V5cztcblxuICAgIHZhciBtYXRjaCA9IHJlZ2V4cC5leGVjKHBhdGhuYW1lKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdXJsID0gbWF0Y2hbMF0sXG4gICAgICAgIHZhbHVlcyA9IG1hdGNoLnNsaWNlKDEpO1xuICAgIHZhciBpc0V4YWN0ID0gcGF0aG5hbWUgPT09IHVybDtcbiAgICBpZiAoZXhhY3QgJiYgIWlzRXhhY3QpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgLy8gdGhlIHBhdGggdXNlZCB0byBtYXRjaFxuICAgICAgdXJsOiBwYXRoID09PSBcIi9cIiAmJiB1cmwgPT09IFwiXCIgPyBcIi9cIiA6IHVybCxcbiAgICAgIC8vIHRoZSBtYXRjaGVkIHBvcnRpb24gb2YgdGhlIFVSTFxuICAgICAgaXNFeGFjdDogaXNFeGFjdCxcbiAgICAgIC8vIHdoZXRoZXIgb3Igbm90IHdlIG1hdGNoZWQgZXhhY3RseVxuICAgICAgcGFyYW1zOiBrZXlzLnJlZHVjZShmdW5jdGlvbiAobWVtbywga2V5LCBpbmRleCkge1xuICAgICAgICBtZW1vW2tleS5uYW1lXSA9IHZhbHVlc1tpbmRleF07XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwge30pXG4gICAgfTtcbiAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAwO1xufVxuXG5mdW5jdGlvbiBldmFsQ2hpbGRyZW5EZXYoY2hpbGRyZW4sIHByb3BzLCBwYXRoKSB7XG4gIHZhciB2YWx1ZSA9IGNoaWxkcmVuKHByb3BzKTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyh2YWx1ZSAhPT0gdW5kZWZpbmVkLCBcIllvdSByZXR1cm5lZCBgdW5kZWZpbmVkYCBmcm9tIHRoZSBgY2hpbGRyZW5gIGZ1bmN0aW9uIG9mIFwiICsgKFwiPFJvdXRlXCIgKyAocGF0aCA/IFwiIHBhdGg9XFxcIlwiICsgcGF0aCArIFwiXFxcIlwiIDogXCJcIikgKyBcIj4sIGJ1dCB5b3UgXCIpICsgXCJzaG91bGQgaGF2ZSByZXR1cm5lZCBhIFJlYWN0IGVsZW1lbnQgb3IgYG51bGxgXCIpIDogdm9pZCAwO1xuICByZXR1cm4gdmFsdWUgfHwgbnVsbDtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIG1hdGNoaW5nIGEgc2luZ2xlIHBhdGggYW5kIHJlbmRlcmluZy5cbiAqL1xuXG5cbnZhciBSb3V0ZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSb3V0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm91dGUoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJvdXRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCQxKSB7XG4gICAgICAhY29udGV4dCQxID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGU+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCBjb250ZXh0JDEubG9jYXRpb247XG4gICAgICB2YXIgbWF0Y2ggPSBfdGhpcy5wcm9wcy5jb21wdXRlZE1hdGNoID8gX3RoaXMucHJvcHMuY29tcHV0ZWRNYXRjaCAvLyA8U3dpdGNoPiBhbHJlYWR5IGNvbXB1dGVkIHRoZSBtYXRjaCBmb3IgdXNcbiAgICAgIDogX3RoaXMucHJvcHMucGF0aCA/IG1hdGNoUGF0aChsb2NhdGlvbi5wYXRobmFtZSwgX3RoaXMucHJvcHMpIDogY29udGV4dCQxLm1hdGNoO1xuXG4gICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgY29udGV4dCQxLCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2g6IG1hdGNoXG4gICAgICB9KTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMucmVuZGVyOyAvLyBQcmVhY3QgdXNlcyBhbiBlbXB0eSBhcnJheSBhcyBjaGlsZHJlbiBieVxuICAgICAgLy8gZGVmYXVsdCwgc28gdXNlIG51bGwgaWYgdGhhdCdzIHRoZSBjYXNlLlxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvcHNcbiAgICAgIH0sIHByb3BzLm1hdGNoID8gY2hpbGRyZW4gPyB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGV2YWxDaGlsZHJlbkRldihjaGlsZHJlbiwgcHJvcHMsIF90aGlzLnByb3BzLnBhdGgpIDogY2hpbGRyZW4ocHJvcHMpIDogY2hpbGRyZW4gOiBjb21wb25lbnQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogcmVuZGVyID8gcmVuZGVyKHByb3BzKSA6IG51bGwgOiB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGV2YWxDaGlsZHJlbkRldihjaGlsZHJlbiwgcHJvcHMsIF90aGlzLnByb3BzLnBhdGgpIDogY2hpbGRyZW4ocHJvcHMpIDogbnVsbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gICAgY29tcG9uZW50OiBmdW5jdGlvbiBjb21wb25lbnQocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdICYmICFpc1ZhbGlkRWxlbWVudFR5cGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wICdjb21wb25lbnQnIHN1cHBsaWVkIHRvICdSb3V0ZSc6IHRoZSBwcm9wIGlzIG5vdCBhIHZhbGlkIFJlYWN0IGNvbXBvbmVudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4YWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYXRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKV0pLFxuICAgIHJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2Vuc2l0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHJpY3Q6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikgJiYgdGhpcy5wcm9wcy5jb21wb25lbnQpLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgY29tcG9uZW50PiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikgJiYgdGhpcy5wcm9wcy5yZW5kZXIpLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgcmVuZGVyPiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNvbXBvbmVudCAmJiB0aGlzLnByb3BzLnJlbmRlciksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgcmVuZGVyPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHRoaXMucHJvcHMubG9jYXRpb24gJiYgIXByZXZQcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgaW5pdGlhbGx5IHVzZWQgbm8gXCJsb2NhdGlvblwiIHByb3AgYW5kIHRoZW4gcHJvdmlkZWQgb25lIG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJykgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKCF0aGlzLnByb3BzLmxvY2F0aW9uICYmIHByZXZQcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgcHJvdmlkZWQgYSBcImxvY2F0aW9uXCIgcHJvcCBpbml0aWFsbHkgYnV0IG9taXR0ZWQgaXQgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSBcIi9cIiA/IHBhdGggOiBcIi9cIiArIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICBwYXRobmFtZTogYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKSArIGxvY2F0aW9uLnBhdGhuYW1lXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG4gIHZhciBiYXNlID0gYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKTtcbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoYmFzZSkgIT09IDApIHJldHVybiBsb2NhdGlvbjtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoYmFzZS5sZW5ndGgpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVUkwobG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IGxvY2F0aW9uIDogY3JlYXRlUGF0aChsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHN0YXRpY0hhbmRsZXIobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCAlcyB3aXRoIDxTdGF0aWNSb3V0ZXI+XCIsIG1ldGhvZE5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBUaGUgcHVibGljIHRvcC1sZXZlbCBBUEkgZm9yIGEgXCJzdGF0aWNcIiA8Um91dGVyPiwgc28tY2FsbGVkIGJlY2F1c2UgaXRcbiAqIGNhbid0IGFjdHVhbGx5IGNoYW5nZSB0aGUgY3VycmVudCBsb2NhdGlvbi4gSW5zdGVhZCwgaXQganVzdCByZWNvcmRzXG4gKiBsb2NhdGlvbiBjaGFuZ2VzIGluIGEgY29udGV4dCBvYmplY3QuIFVzZWZ1bCBtYWlubHkgaW4gdGVzdGluZyBhbmRcbiAqIHNlcnZlci1yZW5kZXJpbmcgc2NlbmFyaW9zLlxuICovXG5cblxudmFyIFN0YXRpY1JvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTdGF0aWNSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0YXRpY1JvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZVB1c2ggPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBfdGhpcy5uYXZpZ2F0ZVRvKGxvY2F0aW9uLCBcIlBVU0hcIik7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVJlcGxhY2UgPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBfdGhpcy5uYXZpZ2F0ZVRvKGxvY2F0aW9uLCBcIlJFUExBQ0VcIik7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVCbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3RhdGljUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubmF2aWdhdGVUbyA9IGZ1bmN0aW9uIG5hdmlnYXRlVG8obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIF90aGlzJHByb3BzJGJhc2VuYW1lID0gX3RoaXMkcHJvcHMuYmFzZW5hbWUsXG4gICAgICAgIGJhc2VuYW1lID0gX3RoaXMkcHJvcHMkYmFzZW5hbWUgPT09IHZvaWQgMCA/IFwiXCIgOiBfdGhpcyRwcm9wcyRiYXNlbmFtZSxcbiAgICAgICAgX3RoaXMkcHJvcHMkY29udGV4dCA9IF90aGlzJHByb3BzLmNvbnRleHQsXG4gICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wcyRjb250ZXh0ID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJGNvbnRleHQ7XG4gICAgY29udGV4dC5hY3Rpb24gPSBhY3Rpb247XG4gICAgY29udGV4dC5sb2NhdGlvbiA9IGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpO1xuICAgIGNvbnRleHQudXJsID0gY3JlYXRlVVJMKGNvbnRleHQubG9jYXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIF90aGlzJHByb3BzMiRiYXNlbmFtZSA9IF90aGlzJHByb3BzMi5iYXNlbmFtZSxcbiAgICAgICAgYmFzZW5hbWUgPSBfdGhpcyRwcm9wczIkYmFzZW5hbWUgPT09IHZvaWQgMCA/IFwiXCIgOiBfdGhpcyRwcm9wczIkYmFzZW5hbWUsXG4gICAgICAgIF90aGlzJHByb3BzMiRjb250ZXh0ID0gX3RoaXMkcHJvcHMyLmNvbnRleHQsXG4gICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wczIkY29udGV4dCA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wczIkY29udGV4dCxcbiAgICAgICAgX3RoaXMkcHJvcHMyJGxvY2F0aW9uID0gX3RoaXMkcHJvcHMyLmxvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvbiA9IF90aGlzJHByb3BzMiRsb2NhdGlvbiA9PT0gdm9pZCAwID8gXCIvXCIgOiBfdGhpcyRwcm9wczIkbG9jYXRpb24sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImJhc2VuYW1lXCIsIFwiY29udGV4dFwiLCBcImxvY2F0aW9uXCJdKTtcblxuICAgIHZhciBoaXN0b3J5ID0ge1xuICAgICAgY3JlYXRlSHJlZjogZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRoKSB7XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUgKyBjcmVhdGVVUkwocGF0aCkpO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbjogXCJQT1BcIixcbiAgICAgIGxvY2F0aW9uOiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpLFxuICAgICAgcHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgcmVwbGFjZTogdGhpcy5oYW5kbGVSZXBsYWNlLFxuICAgICAgZ286IHN0YXRpY0hhbmRsZXIoXCJnb1wiKSxcbiAgICAgIGdvQmFjazogc3RhdGljSGFuZGxlcihcImdvQmFja1wiKSxcbiAgICAgIGdvRm9yd2FyZDogc3RhdGljSGFuZGxlcihcImdvRm9yd2FyZFwiKSxcbiAgICAgIGxpc3RlbjogdGhpcy5oYW5kbGVMaXN0ZW4sXG4gICAgICBibG9jazogdGhpcy5oYW5kbGVCbG9ja1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaGlzdG9yeTogaGlzdG9yeSxcbiAgICAgIHN0YXRpY0NvbnRleHQ6IGNvbnRleHRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0YXRpY1JvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTdGF0aWNSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKVxuICB9O1xuXG4gIFN0YXRpY1JvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxTdGF0aWNSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBTdGF0aWNSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIHRoZSBmaXJzdCA8Um91dGU+IHRoYXQgbWF0Y2hlcy5cbiAqL1xuXG52YXIgU3dpdGNoID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFN3aXRjaCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3dpdGNoKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTd2l0Y2gucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFN3aXRjaD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF90aGlzLnByb3BzLmxvY2F0aW9uIHx8IGNvbnRleHQubG9jYXRpb247XG4gICAgICB2YXIgZWxlbWVudCwgbWF0Y2g7IC8vIFdlIHVzZSBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoIGluc3RlYWQgb2YgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSgpLmZpbmQoKVxuICAgICAgLy8gaGVyZSBiZWNhdXNlIHRvQXJyYXkgYWRkcyBrZXlzIHRvIGFsbCBjaGlsZCBlbGVtZW50cyBhbmQgd2UgZG8gbm90IHdhbnRcbiAgICAgIC8vIHRvIHRyaWdnZXIgYW4gdW5tb3VudC9yZW1vdW50IGZvciB0d28gPFJvdXRlPnMgdGhhdCByZW5kZXIgdGhlIHNhbWVcbiAgICAgIC8vIGNvbXBvbmVudCBhdCBkaWZmZXJlbnQgVVJMcy5cblxuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChfdGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIGVsZW1lbnQgPSBjaGlsZDtcbiAgICAgICAgICB2YXIgcGF0aCA9IGNoaWxkLnByb3BzLnBhdGggfHwgY2hpbGQucHJvcHMuZnJvbTtcbiAgICAgICAgICBtYXRjaCA9IHBhdGggPyBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIF9leHRlbmRzKHt9LCBjaGlsZC5wcm9wcywge1xuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pKSA6IGNvbnRleHQubWF0Y2g7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBjb21wdXRlZE1hdGNoOiBtYXRjaFxuICAgICAgfSkgOiBudWxsO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTd2l0Y2g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBTd2l0Y2gucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodGhpcy5wcm9wcy5sb2NhdGlvbiAmJiAhcHJldlByb3BzLmxvY2F0aW9uKSwgJzxTd2l0Y2g+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgaW5pdGlhbGx5IHVzZWQgbm8gXCJsb2NhdGlvblwiIHByb3AgYW5kIHRoZW4gcHJvdmlkZWQgb25lIG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJykgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKCF0aGlzLnByb3BzLmxvY2F0aW9uICYmIHByZXZQcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJykgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogQSBwdWJsaWMgaGlnaGVyLW9yZGVyIGNvbXBvbmVudCB0byBhY2Nlc3MgdGhlIGltcGVyYXRpdmUgQVBJXG4gKi9cblxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb25lbnQpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gXCJ3aXRoUm91dGVyKFwiICsgKENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSkgKyBcIilcIjtcblxuICB2YXIgQyA9IGZ1bmN0aW9uIEMocHJvcHMpIHtcbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudFJlZiA9IHByb3BzLndyYXBwZWRDb21wb25lbnRSZWYsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcIndyYXBwZWRDb21wb25lbnRSZWZcIl0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8XCIgKyBkaXNwbGF5TmFtZSArIFwiIC8+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCByZW1haW5pbmdQcm9wcywgY29udGV4dCwge1xuICAgICAgICByZWY6IHdyYXBwZWRDb21wb25lbnRSZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBDLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIEMuV3JhcHBlZENvbXBvbmVudCA9IENvbXBvbmVudDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgQy5wcm9wVHlwZXMgPSB7XG4gICAgICB3cmFwcGVkQ29tcG9uZW50UmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2lzdFN0YXRpY3MoQywgQ29tcG9uZW50KTtcbn1cblxudmFyIHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0O1xuZnVuY3Rpb24gdXNlSGlzdG9yeSgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICEodHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZUhpc3RvcnkoKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gdXNlQ29udGV4dChoaXN0b3J5Q29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICEodHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZUxvY2F0aW9uKClcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB9XG5cbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCkubG9jYXRpb247XG59XG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAhKHR5cGVvZiB1c2VDb250ZXh0ID09PSBcImZ1bmN0aW9uXCIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBtdXN0IHVzZSBSZWFjdCA+PSAxNi44IGluIG9yZGVyIHRvIHVzZSB1c2VQYXJhbXMoKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICB2YXIgbWF0Y2ggPSB1c2VDb250ZXh0KGNvbnRleHQpLm1hdGNoO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaC5wYXJhbXMgOiB7fTtcbn1cbmZ1bmN0aW9uIHVzZVJvdXRlTWF0Y2gocGF0aCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgISh0eXBlb2YgdXNlQ29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgbXVzdCB1c2UgUmVhY3QgPj0gMTYuOCBpbiBvcmRlciB0byB1c2UgdXNlUm91dGVNYXRjaCgpXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHZhciBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIHZhciBtYXRjaCA9IHVzZUNvbnRleHQoY29udGV4dCkubWF0Y2g7XG4gIHJldHVybiBwYXRoID8gbWF0Y2hQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLCBwYXRoKSA6IG1hdGNoO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIGdsb2JhbCA9IHdpbmRvdztcbiAgICB2YXIga2V5ID0gXCJfX3JlYWN0X3JvdXRlcl9idWlsZF9fXCI7XG4gICAgdmFyIGJ1aWxkTmFtZXMgPSB7XG4gICAgICBjanM6IFwiQ29tbW9uSlNcIixcbiAgICAgIGVzbTogXCJFUyBtb2R1bGVzXCIsXG4gICAgICB1bWQ6IFwiVU1EXCJcbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbFtrZXldICYmIGdsb2JhbFtrZXldICE9PSBcImVzbVwiKSB7XG4gICAgICB2YXIgaW5pdGlhbEJ1aWxkTmFtZSA9IGJ1aWxkTmFtZXNbZ2xvYmFsW2tleV1dO1xuICAgICAgdmFyIHNlY29uZGFyeUJ1aWxkTmFtZSA9IGJ1aWxkTmFtZXNbXCJlc21cIl07IC8vIFRPRE86IEFkZCBsaW5rIHRvIGFydGljbGUgdGhhdCBleHBsYWlucyBpbiBkZXRhaWwgaG93IHRvIGF2b2lkXG4gICAgICAvLyBsb2FkaW5nIDIgZGlmZmVyZW50IGJ1aWxkcy5cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBsb2FkaW5nIHRoZSBcIiArIHNlY29uZGFyeUJ1aWxkTmFtZSArIFwiIGJ1aWxkIG9mIFJlYWN0IFJvdXRlciBcIiArIChcIm9uIGEgcGFnZSB0aGF0IGlzIGFscmVhZHkgcnVubmluZyB0aGUgXCIgKyBpbml0aWFsQnVpbGROYW1lICsgXCIgXCIpICsgXCJidWlsZCwgc28gdGhpbmdzIHdvbid0IHdvcmsgcmlnaHQuXCIpO1xuICAgIH1cblxuICAgIGdsb2JhbFtrZXldID0gXCJlc21cIjtcbiAgfVxufVxuXG5leHBvcnQgeyBNZW1vcnlSb3V0ZXIsIFByb21wdCwgUmVkaXJlY3QsIFJvdXRlLCBSb3V0ZXIsIFN0YXRpY1JvdXRlciwgU3dpdGNoLCBoaXN0b3J5Q29udGV4dCBhcyBfX0hpc3RvcnlDb250ZXh0LCBjb250ZXh0IGFzIF9fUm91dGVyQ29udGV4dCwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uLCB1c2VQYXJhbXMsIHVzZVJvdXRlTWF0Y2gsIHdpdGhSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJvdXRlci5qcy5tYXBcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj02MDEwMyxwPTYwMTA2O2V4cG9ydHMuRnJhZ21lbnQ9NjAxMDc7ZXhwb3J0cy5TdHJpY3RNb2RlPTYwMTA4O2V4cG9ydHMuUHJvZmlsZXI9NjAxMTQ7dmFyIHE9NjAxMDkscj02MDExMCx0PTYwMTEyO2V4cG9ydHMuU3VzcGVuc2U9NjAxMTM7dmFyIHU9NjAxMTUsdj02MDExNjtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciB3PVN5bWJvbC5mb3I7bj13KFwicmVhY3QuZWxlbWVudFwiKTtwPXcoXCJyZWFjdC5wb3J0YWxcIik7ZXhwb3J0cy5GcmFnbWVudD13KFwicmVhY3QuZnJhZ21lbnRcIik7ZXhwb3J0cy5TdHJpY3RNb2RlPXcoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtleHBvcnRzLlByb2ZpbGVyPXcoXCJyZWFjdC5wcm9maWxlclwiKTtxPXcoXCJyZWFjdC5wcm92aWRlclwiKTtyPXcoXCJyZWFjdC5jb250ZXh0XCIpO3Q9dyhcInJlYWN0LmZvcndhcmRfcmVmXCIpO2V4cG9ydHMuU3VzcGVuc2U9dyhcInJlYWN0LnN1c3BlbnNlXCIpO3U9dyhcInJlYWN0Lm1lbW9cIik7dj13KFwicmVhY3QubGF6eVwiKX12YXIgeD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiB5KGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT14JiZhW3hdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9ZnVuY3Rpb24geihhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBBPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxCPXt9O2Z1bmN0aW9uIEMoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX1DLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0MucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcih6KDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtDLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEQoKXt9RC5wcm90b3R5cGU9Qy5wcm90b3R5cGU7ZnVuY3Rpb24gRShhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfXZhciBGPUUucHJvdG90eXBlPW5ldyBEO0YuY29uc3RydWN0b3I9RTtsKEYsQy5wcm90b3R5cGUpO0YuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEc9e2N1cnJlbnQ6bnVsbH0sSD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEk9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIEooYSxiLGMpe3ZhciBlLGQ9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSC5jYWxsKGIsZSkmJiFJLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWRbZV0mJihkW2VdPWdbZV0pO3JldHVybnskJHR5cGVvZjpuLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpkLF9vd25lcjpHLmN1cnJlbnR9fVxuZnVuY3Rpb24gSyhhLGIpe3JldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTChhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bn1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE09L1xcLysvZztmdW5jdGlvbiBOKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gTyhhLGIsYyxlLGQpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBuOmNhc2UgcDpoPSEwfX1pZihoKXJldHVybiBoPWEsZD1kKGgpLGE9XCJcIj09PWU/XCIuXCIrTihoLDApOmUsQXJyYXkuaXNBcnJheShkKT8oYz1cIlwiLG51bGwhPWEmJihjPWEucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSxPKGQsYixjLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9ZCYmKEwoZCkmJihkPUsoZCxjKyghZC5rZXl8fGgmJmgua2V5PT09ZC5rZXk/XCJcIjooXCJcIitkLmtleSkucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGQpKSwxO2g9MDtlPVwiXCI9PT1lP1wiLlwiOmUrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGc9XG4wO2c8YS5sZW5ndGg7ZysrKXtrPWFbZ107dmFyIGY9ZStOKGssZyk7aCs9TyhrLGIsYyxmLGQpfWVsc2UgaWYoZj15KGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1lK04oayxnKyspLGgrPU8oayxiLGMsZixkKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9XCJcIithLEVycm9yKHooMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO3JldHVybiBofWZ1bmN0aW9uIFAoYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W10sZD0wO08oYSxlLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGMsYSxkKyspfSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBRKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7YS5fc3RhdHVzPTA7YS5fcmVzdWx0PWI7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQ7dGhyb3cgYS5fcmVzdWx0O312YXIgUj17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBTKCl7dmFyIGE9Ui5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKHooMzIxKSk7cmV0dXJuIGF9dmFyIFQ9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6UixSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7dHJhbnNpdGlvbjowfSxSZWFjdEN1cnJlbnRPd25lcjpHLElzU29tZVJlbmRlcmVyQWN0aW5nOntjdXJyZW50OiExfSxhc3NpZ246bH07XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6UCxmb3JFYWNoOmZ1bmN0aW9uKGEsYixjKXtQKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYyl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UChhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTChhKSl0aHJvdyBFcnJvcih6KDE0MykpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9QztleHBvcnRzLlB1cmVDb21wb25lbnQ9RTtleHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVQ7XG5leHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsYyl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoeigyNjcsYSkpO3ZhciBlPWwoe30sYS5wcm9wcyksZD1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Ry5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGQ9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilILmNhbGwoYixmKSYmIUkuaGFzT3duUHJvcGVydHkoZikmJihlW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO2Zvcih2YXIgbT0wO208ZjttKyspZ1ttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWd9cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsXG5rZXk6ZCxyZWY6ayxwcm9wczplLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6cixfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6YixfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnEsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PUo7ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPUouYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtleHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnQscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PUw7XG5leHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYsX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpRfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnUsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMjAuMlxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgZixnLGgsaztpZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19XG5pZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgdD1udWxsLHU9bnVsbCx3PWZ1bmN0aW9uKCl7aWYobnVsbCE9PXQpdHJ5e3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dCghMCxhKTt0PW51bGx9Y2F0Y2goYil7dGhyb3cgc2V0VGltZW91dCh3LDApLGI7fX07Zj1mdW5jdGlvbihhKXtudWxsIT09dD9zZXRUaW1lb3V0KGYsMCxhKToodD1hLHNldFRpbWVvdXQodywwKSl9O2c9ZnVuY3Rpb24oYSxiKXt1PXNldFRpbWVvdXQoYSxiKX07aD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KX07ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiExfTtrPWV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oKXt9fWVsc2V7dmFyIHg9d2luZG93LnNldFRpbWVvdXQseT13aW5kb3cuY2xlYXJUaW1lb3V0O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSl7dmFyIHo9XG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgeiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIil9dmFyIEE9ITEsQj1udWxsLEM9LTEsRD01LEU9MDtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCk+PVxuRX07az1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6RD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07dmFyIEY9bmV3IE1lc3NhZ2VDaGFubmVsLEc9Ri5wb3J0MjtGLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKG51bGwhPT1CKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO0U9YStEO3RyeXtCKCEwLGEpP0cucG9zdE1lc3NhZ2UobnVsbCk6KEE9ITEsQj1udWxsKX1jYXRjaChiKXt0aHJvdyBHLnBvc3RNZXNzYWdlKG51bGwpLGI7fX1lbHNlIEE9ITF9O2Y9ZnVuY3Rpb24oYSl7Qj1hO0F8fChBPSEwLEcucG9zdE1lc3NhZ2UobnVsbCkpfTtnPWZ1bmN0aW9uKGEsYil7Qz1cbngoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX07aD1mdW5jdGlvbigpe3koQyk7Qz0tMX19ZnVuY3Rpb24gSChhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7Oyl7dmFyIGQ9Yy0xPj4+MSxlPWFbZF07aWYodm9pZCAwIT09ZSYmMDxJKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBKKGEpe2E9YVswXTtyZXR1cm4gdm9pZCAwPT09YT9udWxsOmF9XG5mdW5jdGlvbiBLKGEpe3ZhciBiPWFbMF07aWYodm9pZCAwIT09Yil7dmFyIGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7KXt2YXIgbT0yKihkKzEpLTEsbj1hW21dLHY9bSsxLHI9YVt2XTtpZih2b2lkIDAhPT1uJiYwPkkobixjKSl2b2lkIDAhPT1yJiYwPkkocixuKT8oYVtkXT1yLGFbdl09YyxkPXYpOihhW2RdPW4sYVttXT1jLGQ9bSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYwPkkocixjKSlhW2RdPXIsYVt2XT1jLGQ9djtlbHNlIGJyZWFrIGF9fXJldHVybiBifXJldHVybiBudWxsfWZ1bmN0aW9uIEkoYSxiKXt2YXIgYz1hLnNvcnRJbmRleC1iLnNvcnRJbmRleDtyZXR1cm4gMCE9PWM/YzphLmlkLWIuaWR9dmFyIEw9W10sTT1bXSxOPTEsTz1udWxsLFA9MyxRPSExLFI9ITEsUz0hMTtcbmZ1bmN0aW9uIFQoYSl7Zm9yKHZhciBiPUooTSk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylLKE0pO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpSyhNKSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLEgoTCxiKTtlbHNlIGJyZWFrO2I9SihNKX19ZnVuY3Rpb24gVShhKXtTPSExO1QoYSk7aWYoIVIpaWYobnVsbCE9PUooTCkpUj0hMCxmKFYpO2Vsc2V7dmFyIGI9SihNKTtudWxsIT09YiYmZyhVLGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIFYoYSxiKXtSPSExO1MmJihTPSExLGgoKSk7UT0hMDt2YXIgYz1QO3RyeXtUKGIpO2ZvcihPPUooTCk7bnVsbCE9PU8mJighKE8uZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkKCkpOyl7dmFyIGQ9Ty5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7Ty5jYWxsYmFjaz1udWxsO1A9Ty5wcmlvcml0eUxldmVsO3ZhciBlPWQoTy5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP08uY2FsbGJhY2s9ZTpPPT09SihMKSYmSyhMKTtUKGIpfWVsc2UgSyhMKTtPPUooTCl9aWYobnVsbCE9PU8pdmFyIG09ITA7ZWxzZXt2YXIgbj1KKE0pO251bGwhPT1uJiZnKFUsbi5zdGFydFRpbWUtYik7bT0hMX1yZXR1cm4gbX1maW5hbGx5e089bnVsbCxQPWMsUT0hMX19dmFyIFc9aztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O1xuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXthLmNhbGxiYWNrPW51bGx9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtSfHxRfHwoUj0hMCxmKFYpKX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBQfTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIEooTCl9O1xuZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChQKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1QfXZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7UD1jfX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9VztleHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPVA7UD1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7UD1jfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yz8oYz1jLmRlbGF5LGM9XCJudW1iZXJcIj09PXR5cGVvZiBjJiYwPGM/ZCtjOmQpOmM9ZDtzd2l0Y2goYSl7Y2FzZSAxOnZhciBlPS0xO2JyZWFrO2Nhc2UgMjplPTI1MDticmVhaztjYXNlIDU6ZT0xMDczNzQxODIzO2JyZWFrO2Nhc2UgNDplPTFFNDticmVhaztkZWZhdWx0OmU9NUUzfWU9YytlO2E9e2lkOk4rKyxjYWxsYmFjazpiLHByaW9yaXR5TGV2ZWw6YSxzdGFydFRpbWU6YyxleHBpcmF0aW9uVGltZTplLHNvcnRJbmRleDotMX07Yz5kPyhhLnNvcnRJbmRleD1jLEgoTSxhKSxudWxsPT09SihMKSYmYT09PUooTSkmJihTP2goKTpTPSEwLGcoVSxjLWQpKSk6KGEuc29ydEluZGV4PWUsSChMLGEpLFJ8fFF8fChSPSEwLGYoVikpKTtyZXR1cm4gYX07XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1QO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtQPWN9fX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG52YXIgcHJlZml4ID0gJ0ludmFyaWFudCBmYWlsZWQnO1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4ICsgXCI6IFwiICsgKG1lc3NhZ2UgfHwgJycpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW52YXJpYW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNDM6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3NsZWFjdF90c19mcm9udFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzbGVhY3RfdHNfZnJvbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IExvZ2luID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCdAcGFnZXMvTG9naW4nKSk7XG5jb25zdCBTaWduVXAgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJ0BwYWdlcy9TaWduVXAnKSk7XG5jb25zdCBXb3JrU3BhY2UgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJ0BsYXlvdXRzL1dvcmtzcGFjZScpKTtcblxuXG5jb25zdCBJbmRleDogRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN3aXRjaD5cbiAgICAgIDxSZWRpcmVjdCBleGFjdCBwYXRoPVwiL1wiIHRvPVwiL2xvZ2luXCI+PC9SZWRpcmVjdD5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0+PC9Sb3V0ZT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3NpZ251cFwiIGNvbXBvbmVudD17U2lnblVwfT48L1JvdXRlPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvd29ya3NwYWNlLzp3b3Jrc3BhY2VcIiBjb21wb25lbnQ9e1dvcmtTcGFjZX0+PC9Sb3V0ZT5cbiAgICA8L1N3aXRjaD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJ0BsYXlvdXRzL0FwcCc7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbnJlbmRlcihcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICA8QXBwLz5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpO1xuXG4vLyBwYWdlcyAgLSByZWFjdCDripQgc2luZ2xlIHBhZ2Ug7Ja07ZSM66as7LyA7J207IWY7J207KeA66eMIOqysOq1rSDtjpjsnbTsp4DqsIAg7J6I64ukLiAt7ISc67mE7IqkXG4vLyBjb21wb25lbnRzIC0g7Kec7J6YIOy7tO2PrOuEjO2KuFxuLy8gbGF5b3V0cyAtIOqzte2GtSDroIjsnbTslYTsm4MiXSwic291cmNlUm9vdCI6IiJ9
