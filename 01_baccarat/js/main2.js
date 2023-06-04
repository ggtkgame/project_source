//Function.prototype.__S = function (key) {
//  var r=/\{\s\[native\scode\]\s\}/;
//  var fn = this.toString();
//  if(r.test(fn)){
//    window.__printKey && console.log(key + '::NF' + ';');
//    return this;
//  }
//  this.__mCurrentKey = key;
//  return this;
//};
//Function.prototype.__G = function () {
//  return this.__mCurrentKey
//};
window.__m8 = 'a233,a294,a285,a70,a71,a222,a341,a107,';
// window.__m8 = 'a228,a225,a224,a227,a228,';
// window.__m8 = 'a384,a385,';
// window.__m8 = 'a382,a383,a225,a408,';
// window.__m8 = 'a239,a229,a224,';
// window.__m8 = 'a239,a224,a229,';
window.__m6 = '';
window.__superDebugger = 1;
window.__monitorEvent = false;
//window.__printKey = false;
window.__begin = true;
window.__evals = {all:''};
window.__E=false;
window.__Record = {};
window.__YY__ = {fns: {}, S: function (k, arguments) {
  var matchs = /([a-zA-Z]+)([0-9]+)/.exec(k);
  var C__A__R = arguments.callee.caller && arguments.callee.caller !== null && arguments.callee.caller
    , C__A__L = arguments.callee
    , R_N = C__A__R ? C__A__R._$name : 'globalContext'
    , L_N;
    var eventType;
  function isCorrectEvent(arguments){
      var arg, hasEvent, eventType;
      for(var name in arguments){
          arg = arguments[name];
          hasEvent = arg && arg.preventDefault && (eventType = arg.type || arg.event.type, eventType === __monitorEvent);
          if(hasEvent){
              return true;
          }
      }
  }
  //function printKey(callee){
  //var key = callee.__G();
  //  console.log(key + '::' + callee._$name + ';');
  //}
//  (C__A__L._$name || (C__A__L['_$name'] = k)) && (window.__YY__.fns.k || (window.__YY__.fns.k = C__A__L.toString()));
window.__YY__.fns[k] = C__A__L.toString();
  L_N = C__A__L._$name=k;
  //window.__printKey && printKey(C__A__L);
  if ((isCorrectEvent() || window.__m8.indexOf('A') !== -1 || window.__m8.indexOf(matchs[1] + '*,') !== -1 || window.__m8.indexOf(k + ',') !== -1) && (window.__m6.indexOf(matchs[1] + '*,') === -1 && window.__m6.indexOf(k + ',') === -1)) {
    switch (window.__superDebugger) {
      case 0:
      (window.__Record[k] = {
          fn: C__A__L.toString()
        });
        console.log(R_N + ':::' + L_N + ';');
        break;
      case 1:
      (window.__Record[k] = {
          fn: C__A__L.toString()
        });
        return true;
        break;
      case 2:
        (window.__Record[k] = C__A__L) && console.log('\n ' + R_N + ':::\n' + L_N, '(' + C__A__L.name + ')', C__A__L.toString(), Array.prototype.slice.call(arguments));
        break;
      case 3:
      (window.__Record[k] = {
          fn: C__A__L.toString()
        });
        void(0);
        break;
      case 4:
      (window.__Record[k] = {
          fn: C__A__L.toString()
        });
        console.log('%c'+L_N,'color:red');
        console.trace();
        break;
      case 5:
        (window.__Record[k] = {
          fn: C__A__L.toString(),
          arg: Array.prototype.slice.call(arguments)
        });
        break;
    }
  }
  return false;
},gE: function(key){
        return (__evals[key] || '') + ';window.__currentKey = "' + key + '";' + __evals.all;
    }};

var kkk = 0;

window["YY"] = {
  deepCopy: function(arr, depth = 0) {
  if (Array.isArray(arr)) {
    if (depth < 10) {
      const copy = [];
      for (let i = 0; i < arr.length; i++) {
        copy[i] = YY.deepCopy(arr[i], depth + 1);
      }
      return copy;
    } else {
      return arr;
    }
  } else if (arr && typeof arr === "object") {
    if (depth < 10) {
      const copy = {};
      for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
          copy[key] = YY.deepCopy(arr[key], depth + 1);
        }
      }
      return copy;
    } else {
      return arr;
    }
  } else {
    return arr;
  }
},
};

!function() {
    //a1<
    if (__begin&&__YY__.S("a1", arguments)) {if(__E){eval(__YY__.gE("a1"));}else{debugger;}}
        var a = "undefined" != typeof window && void 0 !== window.document ? window.document : {}
          , d = "undefined" != typeof module && module.exports
          , b = function() {
    //a2<
    if (__begin&&__YY__.S("a2", arguments)) {if(__E){eval(__YY__.gE("a2"));}else{debugger;}}
            for (var f, q = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], l = 0, n = q.length, t = {}; l < n; l++)
                if ((f = q[l]) && f[1]in a) {
                    for (l = 0; l < f.length; l++)
                        t[q[0][l]] = f[l];
                    return t
                }
            return !1
        }()
          , c = {
            change: b.fullscreenchange,
            error: b.fullscreenerror
        }
          , e = {
            request: function(f) {
    //a3<
    if (__begin&&__YY__.S("a3", arguments)) {if(__E){eval(__YY__.gE("a3"));}else{debugger;}}
                return new Promise(function(q, l) {
    //a4<
    if (__begin&&__YY__.S("a4", arguments)) {if(__E){eval(__YY__.gE("a4"));}else{debugger;}}
                    var n = function() {
    //a5<
    if (__begin&&__YY__.S("a5", arguments)) {if(__E){eval(__YY__.gE("a5"));}else{debugger;}}
                        this.off("change", n);
                        q()
                    }
                    .bind(this);
                    this.on("change", n);
                    f = f || a.documentElement;
                    Promise.resolve(f[b.requestFullscreen]())["catch"](l)
                }
                .bind(this))
            },
            exit: function() {
    //a6<
    if (__begin&&__YY__.S("a6", arguments)) {if(__E){eval(__YY__.gE("a6"));}else{debugger;}}
                return new Promise(function(f, q) {
    //a7<
    if (__begin&&__YY__.S("a7", arguments)) {if(__E){eval(__YY__.gE("a7"));}else{debugger;}}
                    if (this.isFullscreen) {
                        var l = function() {
    //a8<
    if (__begin&&__YY__.S("a8", arguments)) {if(__E){eval(__YY__.gE("a8"));}else{debugger;}}
                            this.off("change", l);
                            f()
                        }
                        .bind(this);
                        this.on("change", l);
                        Promise.resolve(a[b.exitFullscreen]())["catch"](q)
                    } else
                        f()
                }
                .bind(this))
            },
            toggle: function(f) {
    //a9<
    if (__begin&&__YY__.S("a9", arguments)) {if(__E){eval(__YY__.gE("a9"));}else{debugger;}}
                return this.isFullscreen ? this.exit() : this.request(f)
            },
            onchange: function(f) {
    //a10<
    if (__begin&&__YY__.S("a10", arguments)) {if(__E){eval(__YY__.gE("a10"));}else{debugger;}}
                this.on("change", f)
            },
            onerror: function(f) {
    //a11<
    if (__begin&&__YY__.S("a11", arguments)) {if(__E){eval(__YY__.gE("a11"));}else{debugger;}}
                this.on("error", f)
            },
            on: function(f, q) {
    //a12<
    if (__begin&&__YY__.S("a12", arguments)) {if(__E){eval(__YY__.gE("a12"));}else{debugger;}}
                var l = c[f];
                l && a.addEventListener(l, q, !1)
            },
            off: function(f, q) {
    //a13<
    if (__begin&&__YY__.S("a13", arguments)) {if(__E){eval(__YY__.gE("a13"));}else{debugger;}}
                var l = c[f];
                l && a.removeEventListener(l, q, !1)
            },
            raw: b
        };
        b ? (Object.defineProperties(e, {
            isFullscreen: {
                get: function() {
    //a14<
    if (__begin&&__YY__.S("a14", arguments)) {if(__E){eval(__YY__.gE("a14"));}else{debugger;}}
                    return !!a[b.fullscreenElement]
                }
            },
            element: {
                enumerable: !0,
                get: function() {
    //a15<
    if (__begin&&__YY__.S("a15", arguments)) {if(__E){eval(__YY__.gE("a15"));}else{debugger;}}
                    return a[b.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
    //a16<
    if (__begin&&__YY__.S("a16", arguments)) {if(__E){eval(__YY__.gE("a16"));}else{debugger;}}
                    return !!a[b.fullscreenEnabled]
                }
            }
        }),
        d ? module.exports = e : window.screenfull = e) : d ? module.exports = {
            isEnabled: !1
        } : window.screenfull = {
            isEnabled: !1
        }
    }();
    (function() {
    //a17<
    if (__begin&&__YY__.S("a17", arguments)) {if(__E){eval(__YY__.gE("a17"));}else{debugger;}}
        function a(p) {
    //a18<
    if (__begin&&__YY__.S("a18", arguments)) {if(__E){eval(__YY__.gE("a18"));}else{debugger;}}
            p = String(p);
            return p.charAt(0).toUpperCase() + p.slice(1)
        }
        function d(p, J) {
    //a19<
    if (__begin&&__YY__.S("a19", arguments)) {if(__E){eval(__YY__.gE("a19"));}else{debugger;}}
            var I = -1
              , F = p ? p.length : 0;
            if ("number" == typeof F && -1 < F && F <= u)
                for (; ++I < F; )
                    J(p[I], I, p);
            else
                c(p, J)
        }
        function b(p) {
    //a20<
    if (__begin&&__YY__.S("a20", arguments)) {if(__E){eval(__YY__.gE("a20"));}else{debugger;}}
            p = String(p).replace(/^ +| +$/g, "");
            return /^(?:webOS|i(?:OS|P))/.test(p) ? p : a(p)
        }
        function c(p, J) {
    //a21<
    if (__begin&&__YY__.S("a21", arguments)) {if(__E){eval(__YY__.gE("a21"));}else{debugger;}}
            for (var I in p)
                m.call(p, I) && J(p[I], I, p)
        }
        function e(p) {
    //a22<
    if (__begin&&__YY__.S("a22", arguments)) {if(__E){eval(__YY__.gE("a22"));}else{debugger;}}
            return null == p ? a(p) : z.call(p).slice(8, -1)
        }
        function f(p, J) {
    //a23<
    if (__begin&&__YY__.S("a23", arguments)) {if(__E){eval(__YY__.gE("a23"));}else{debugger;}}
            var I = null != p ? typeof p[J] : "number";
            return !/^(?:boolean|number|string|undefined)$/.test(I) && ("object" == I ? !!p[J] : !0)
        }
        function q(p) {
    //a24<
    if (__begin&&__YY__.S("a24", arguments)) {if(__E){eval(__YY__.gE("a24"));}else{debugger;}}
            return String(p).replace(/([ -])(?!$)/g, "$1?")
        }
        function l(p, J) {
    //a25<
    if (__begin&&__YY__.S("a25", arguments)) {if(__E){eval(__YY__.gE("a25"));}else{debugger;}}
            var I = null;
            d(p, function(F, G) {
    //a26<
    if (__begin&&__YY__.S("a26", arguments)) {if(__E){eval(__YY__.gE("a26"));}else{debugger;}}
                I = J(I, F, G, p)
            });
            return I
        }
        function n(p) {
    //a27<
    if (__begin&&__YY__.S("a27", arguments)) {if(__E){eval(__YY__.gE("a27"));}else{debugger;}}
            function J(R) {
    //a28<
    if (__begin&&__YY__.S("a28", arguments)) {if(__E){eval(__YY__.gE("a28"));}else{debugger;}}
                return l(R, function(O, N) {
    //a29<
    if (__begin&&__YY__.S("a29", arguments)) {if(__E){eval(__YY__.gE("a29"));}else{debugger;}}
                    var T = N.pattern || q(N);
                    !O && (O = RegExp("\\b" + T + " *\\d+[.\\w_]*", "i").exec(p) || RegExp("\\b" + T + " *\\w+-[\\w]*", "i").exec(p) || RegExp("\\b" + T + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(p)) && ((O = String(N.label && !RegExp(T, "i").test(N.label) ? N.label : O).split("/"))[1] && !/[\d.]+/.test(O[0]) && (O[0] += " " + O[1]),
                    N = N.label || N,
                    O = b(O[0].replace(RegExp(T, "i"), N).replace(RegExp("; *(?:" + N + "[_-])?", "i"), " ").replace(RegExp("(" + N + ")[-_.]?(\\w)", "i"), "$1 $2")));
                    return O
                })
            }
            function I(R) {
    //a30<
    if (__begin&&__YY__.S("a30", arguments)) {if(__E){eval(__YY__.gE("a30"));}else{debugger;}}
                return l(R, function(O, N) {
    //a31<
    if (__begin&&__YY__.S("a31", arguments)) {if(__E){eval(__YY__.gE("a31"));}else{debugger;}}
                    return O || (RegExp(N + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(p) || 0)[1] || null
                })
            }
            var F = v
              , G = p && "object" == typeof p && "String" != e(p);
            G && (F = p,
            p = null);
            var P = F.navigator || {}
              , y = P.userAgent || "";
            p || (p = y);
            var H = G ? !!P.likeChrome : /\bChrome\b/.test(p) && !/internal|\n/i.test(z.toString())
              , X = G ? "Object" : "ScriptBridgingProxyObject"
              , S = G ? "Object" : "Environment"
              , Q = G && F.java ? "JavaPackage" : e(F.java)
              , x = G ? "Object" : "RuntimeObject";
            S = (Q = /\bJava/.test(Q) && F.java) && e(F.environment) == S;
            var w = Q ? "a" : "\u03b1", A = Q ? "b" : "\u03b2", B = F.document || {}, K = F.operamini || F.opera, U = r.test(U = G && K ? K["[[Class]]"] : e(K)) ? U : K = null, k, Z = p;
            G = [];
            var aa = null
              , Y = p == y;
            y = Y && K && "function" == typeof K.version && K.version();
            var L = function(R) {
    //a32<
    if (__begin&&__YY__.S("a32", arguments)) {if(__E){eval(__YY__.gE("a32"));}else{debugger;}}
                return l(R, function(O, N) {
    //a33<
    if (__begin&&__YY__.S("a33", arguments)) {if(__E){eval(__YY__.gE("a33"));}else{debugger;}}
                    return O || RegExp("\\b" + (N.pattern || q(N)) + "\\b", "i").exec(p) && (N.label || N)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"])
              , C = function(R) {
    //a34<
    if (__begin&&__YY__.S("a34", arguments)) {if(__E){eval(__YY__.gE("a34"));}else{debugger;}}
                return l(R, function(O, N) {
    //a35<
    if (__begin&&__YY__.S("a35", arguments)) {if(__E){eval(__YY__.gE("a35"));}else{debugger;}}
                    return O || RegExp("\\b" + (N.pattern || q(N)) + "\\b", "i").exec(p) && (N.label || N)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                label: "Microsoft Edge",
                pattern: "Edge"
            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                label: "Samsung Internet",
                pattern: "SamsungBrowser"
            }, "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Sleipnir", "SlimBrowser", {
                label: "SRWare Iron",
                pattern: "Iron"
            }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                label: "Opera Mini",
                pattern: "OPiOS"
            }, "Opera", {
                label: "Opera",
                pattern: "OPR"
            }, "Chrome", {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
            }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
            }, {
                label: "Firefox for iOS",
                pattern: "FxiOS"
            }, {
                label: "IE",
                pattern: "IEMobile"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"])
              , M = J([{
                label: "BlackBerry",
                pattern: "BB10"
            }, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
            }, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
            }, {
                label: "Galaxy S4",
                pattern: "GT-I9500"
            }, {
                label: "Galaxy S5",
                pattern: "SM-G900"
            }, {
                label: "Galaxy S6",
                pattern: "SM-G920"
            }, {
                label: "Galaxy S6 Edge",
                pattern: "SM-G925"
            }, {
                label: "Galaxy S7",
                pattern: "SM-G930"
            }, {
                label: "Galaxy S7 Edge",
                pattern: "SM-G935"
            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
            }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
            }, "Xoom"])
              , V = function(R) {
    //a36<
    if (__begin&&__YY__.S("a36", arguments)) {if(__E){eval(__YY__.gE("a36"));}else{debugger;}}
                return l(R, function(O, N, T) {
    //a37<
    if (__begin&&__YY__.S("a37", arguments)) {if(__E){eval(__YY__.gE("a37"));}else{debugger;}}
                    return O || (N[M] || N[/^[a-z]+(?: +[a-z]+\b)*/i.exec(M)] || RegExp("\\b" + q(T) + "(?:\\b|\\w*\\d)", "i").exec(p)) && T
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            })
              , D = function(R) {
    //a38<
    if (__begin&&__YY__.S("a38", arguments)) {if(__E){eval(__YY__.gE("a38"));}else{debugger;}}
                return l(R, function(O, N) {
    //a39<
    if (__begin&&__YY__.S("a39", arguments)) {if(__E){eval(__YY__.gE("a39"));}else{debugger;}}
                    var T = N.pattern || q(N);
                    if (!O && (O = RegExp("\\b" + T + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(p))) {
                        var W = O
                          , ba = N.label || N
                          , ca = {
                            "10.0": "10",
                            "6.4": "10 Technical Preview",
                            "6.3": "8.1",
                            "6.2": "8",
                            "6.1": "Server 2008 R2 / 7",
                            "6.0": "Server 2008 / Vista",
                            "5.2": "Server 2003 / XP 64-bit",
                            "5.1": "XP",
                            "5.01": "2000 SP1",
                            "5.0": "2000",
                            "4.0": "NT",
                            "4.90": "ME"
                        };
                        T && ba && /^Win/i.test(W) && !/^Windows Phone /i.test(W) && (ca = ca[/[\d.]+$/.exec(W)]) && (W = "Windows " + ca);
                        W = String(W);
                        T && ba && (W = W.replace(RegExp(T, "i"), ba));
                        O = W = b(W.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return O
                })
            }(["Windows Phone", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
            L && (L = [L]);
            V && !M && (M = J([V]));
            if (k = /\bGoogle TV\b/.exec(M))
                M = k[0];
            /\bSimulator\b/i.test(p) && (M = (M ? M + " " : "") + "Simulator");
            "Opera Mini" == C && /\bOPiOS\b/.test(p) && G.push("running in Turbo/Uncompressed mode");
            "IE" == C && /\blike iPhone OS\b/.test(p) ? (k = n(p.replace(/like iPhone OS/, "")),
            V = k.manufacturer,
            M = k.product) : /^iP/.test(M) ? (C || (C = "Safari"),
            D = "iOS" + ((k = / OS ([\d_]+)/i.exec(p)) ? " " + k[1].replace(/_/g, ".") : "")) : "Konqueror" != C || /buntu/i.test(D) ? V && "Google" != V && (/Chrome/.test(C) && !/\bMobile Safari\b/i.test(p) || /\bVita\b/.test(M)) || /\bAndroid\b/.test(D) && /^Chrome/.test(C) && /\bVersion\//i.test(p) ? (C = "Android Browser",
            D = /\bAndroid\b/.test(D) ? D : "Android") : "Silk" == C ? (/\bMobi/i.test(p) || (D = "Android",
            G.unshift("desktop mode")),
            /Accelerated *= *true/i.test(p) && G.unshift("accelerated")) : "PaleMoon" == C && (k = /\bFirefox\/([\d.]+)\b/.exec(p)) ? G.push("identifying as Firefox " + k[1]) : "Firefox" == C && (k = /\b(Mobile|Tablet|TV)\b/i.exec(p)) ? (D || (D = "Firefox OS"),
            M || (M = k[1])) : !C || (k = !/\bMinefield\b/i.test(p) && /\b(?:Firefox|Safari)\b/.exec(C)) ? (C && !M && /[\/,]|^[^(]+?\)/.test(p.slice(p.indexOf(k + "/") + 8)) && (C = null),
            (k = M || V || D) && (M || V || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(D)) && (C = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(D) ? D : k) + " Browser")) : "Electron" == C && (k = (/\bChrome\/([\d.]+)\b/.exec(p) || 0)[1]) && G.push("Chromium " + k) : D = "Kubuntu";
            y || (y = I(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", q(C), "(?:Firefox|Minefield|NetFront)"]));
            if (k = "iCab" == L && 3 < parseFloat(y) && "WebKit" || /\bOpera\b/.test(C) && (/\bOPR\b/.test(p) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(p) && !/^(?:Trident|EdgeHTML)$/.test(L) && "WebKit" || !L && /\bMSIE\b/i.test(p) && ("Mac OS" == D ? "Tasman" : "Trident") || "WebKit" == L && /\bPlayStation\b(?! Vita\b)/i.test(C) && "NetFront")
                L = [k];
            "IE" == C && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(p) || 0)[1]) ? (C += " Mobile",
            D = "Windows Phone " + (/\+$/.test(k) ? k : k + ".x"),
            G.unshift("desktop mode")) : /\bWPDesktop\b/i.test(p) ? (C = "IE Mobile",
            D = "Windows Phone 8.x",
            G.unshift("desktop mode"),
            y || (y = (/\brv:([\d.]+)/.exec(p) || 0)[1])) : "IE" != C && "Trident" == L && (k = /\brv:([\d.]+)/.exec(p)) && (C && G.push("identifying as " + C + (y ? " " + y : "")),
            C = "IE",
            y = k[1]);
            if (Y) {
                if (f(F, "global"))
                    if (Q && (k = Q.lang.System,
                    Z = k.getProperty("os.arch"),
                    D = D || k.getProperty("os.name") + " " + k.getProperty("os.version")),
                    S) {
                        try {
                            y = F.require("ringo/engine").version.join("."),
                            C = "RingoJS"
                        } catch (R) {
                            (k = F.system) && k.global.system == F.system && (C = "Narwhal",
                            D || (D = k[0].os || null))
                        }
                        C || (C = "Rhino")
                    } else
                        "object" == typeof F.process && !F.process.browser && (k = F.process) && ("object" == typeof k.versions && ("string" == typeof k.versions.electron ? (G.push("Node " + k.versions.node),
                        C = "Electron",
                        y = k.versions.electron) : "string" == typeof k.versions.nw && (G.push("Chromium " + y, "Node " + k.versions.node),
                        C = "NW.js",
                        y = k.versions.nw)),
                        C || (C = "Node.js",
                        Z = k.arch,
                        D = k.platform,
                        y = (y = /[\d.]+/.exec(k.version)) ? y[0] : null));
                else
                    e(k = F.runtime) == X ? (C = "Adobe AIR",
                    D = k.flash.system.Capabilities.os) : e(k = F.phantom) == x ? (C = "PhantomJS",
                    y = (k = k.version || null) && k.major + "." + k.minor + "." + k.patch) : "number" == typeof B.documentMode && (k = /\bTrident\/(\d+)/i.exec(p)) ? (y = [y, B.documentMode],
                    (k = +k[1] + 4) != y[1] && (G.push("IE " + y[1] + " mode"),
                    L && (L[1] = ""),
                    y[1] = k),
                    y = "IE" == C ? String(y[1].toFixed(1)) : y[0]) : "number" == typeof B.documentMode && /^(?:Chrome|Firefox)\b/.test(C) && (G.push("masking as " + C + " " + y),
                    C = "IE",
                    y = "11.0",
                    L = ["Trident"],
                    D = "Windows");
                D = D && b(D)
            }
            y && (k = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(y) || /(?:alpha|beta)(?: ?\d)?/i.exec(p + ";" + (Y && P.appMinorVersion)) || /\bMinefield\b/i.test(p) && "a") && (aa = /b/i.test(k) ? "beta" : "alpha",
            y = y.replace(RegExp(k + "\\+?$"), "") + ("beta" == aa ? A : w) + (/\d+\+?/.exec(k) || ""));
            if ("Fennec" == C || "Firefox" == C && /\b(?:Android|Firefox OS)\b/.test(D))
                C = "Firefox Mobile";
            else if ("Maxthon" == C && y)
                y = y.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(M))
                "Xbox 360" == M && (D = null),
                "Xbox 360" == M && /\bIEMobile\b/.test(p) && G.unshift("mobile mode");
            else if (!/^(?:Chrome|IE|Opera)$/.test(C) && (!C || M || /Browser|Mobi/.test(C)) || "Windows CE" != D && !/Mobi/i.test(p))
                if ("IE" == C && Y)
                    try {
                        null === F.external && G.unshift("platform preview")
                    } catch (R) {
                        G.unshift("embedded")
                    }
                else
                    (/\bBlackBerry\b/.test(M) || /\bBB10\b/.test(p)) && (k = (RegExp(M.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(p) || 0)[1] || y) ? (k = [k, /BB10/.test(p)],
                    D = (k[1] ? (M = null,
                    V = "BlackBerry") : "Device Software") + " " + k[0],
                    y = null) : this != c && "Wii" != M && (Y && K || /Opera/.test(C) && /\b(?:MSIE|Firefox)\b/i.test(p) || "Firefox" == C && /\bOS X (?:\d+\.){2,}/.test(D) || "IE" == C && (D && !/^Win/.test(D) && 5.5 < y || /\bWindows XP\b/.test(D) && 8 < y || 8 == y && !/\bTrident\b/.test(p))) && !r.test(k = n.call(c, p.replace(r, "") + ";")) && k.name && (k = "ing as " + k.name + ((k = k.version) ? " " + k : ""),
                    r.test(C) ? (/\bIE\b/.test(k) && "Mac OS" == D && (D = null),
                    k = "identify" + k) : (k = "mask" + k,
                    C = U ? b(U.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
                    /\bIE\b/.test(k) && (D = null),
                    Y || (y = null)),
                    L = ["Presto"],
                    G.push(k));
            else
                C += " Mobile";
            if (k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(p) || 0)[1]) {
                k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k];
                if ("Safari" == C && "+" == k[1].slice(-1))
                    C = "WebKit Nightly",
                    aa = "alpha",
                    y = k[1].slice(0, -1);
                else if (y == k[1] || y == (k[2] = (/\bSafari\/([\d.]+\+?)/i.exec(p) || 0)[1]))
                    y = null;
                k[1] = (/\bChrome\/([\d.]+)/i.exec(p) || 0)[1];
                537.36 == k[0] && 537.36 == k[2] && 28 <= parseFloat(k[1]) && "WebKit" == L && (L = ["Blink"]);
                Y && (H || k[1]) ? (L && (L[1] = "like Chrome"),
                k = k[1] || (k = k[0],
                530 > k ? 1 : 532 > k ? 2 : 532.05 > k ? 3 : 533 > k ? 4 : 534.03 > k ? 5 : 534.07 > k ? 6 : 534.1 > k ? 7 : 534.13 > k ? 8 : 534.16 > k ? 9 : 534.24 > k ? 10 : 534.3 > k ? 11 : 535.01 > k ? 12 : 535.02 > k ? "13+" : 535.07 > k ? 15 : 535.11 > k ? 16 : 535.19 > k ? 17 : 536.05 > k ? 18 : 536.1 > k ? 19 : 537.01 > k ? 20 : 537.11 > k ? "21+" : 537.13 > k ? 23 : 537.18 > k ? 24 : 537.24 > k ? 25 : 537.36 > k ? 26 : "Blink" != L ? "27" : "28")) : (L && (L[1] = "like Safari"),
                k = (k = k[0],
                400 > k ? 1 : 500 > k ? 2 : 526 > k ? 3 : 533 > k ? 4 : 534 > k ? "4+" : 535 > k ? 5 : 537 > k ? 6 : 538 > k ? 7 : 601 > k ? 8 : "8"));
                L && (L[1] += " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+"));
                "Safari" == C && (!y || 45 < parseInt(y)) && (y = k)
            }
            "Opera" == C && (k = /\bzbov|zvav$/.exec(D)) ? (C += " ",
            G.unshift("desktop mode"),
            "zvav" == k ? (C += "Mini",
            y = null) : C += "Mobile",
            D = D.replace(RegExp(" *" + k + "$"), "")) : "Safari" == C && /\bChrome\b/.exec(L && L[1]) && (G.unshift("desktop mode"),
            C = "Chrome Mobile",
            y = null,
            /\bOS X\b/.test(D) ? (V = "Apple",
            D = "iOS 4.3+") : D = null);
            y && 0 == y.indexOf(k = /[\d.]+$/.exec(D)) && -1 < p.indexOf("/" + k + "-") && (D = String(D.replace(k, "")).replace(/^ +| +$/g, ""));
            L && !/\b(?:Avant|Nook)\b/.test(C) && (/Browser|Lunascape|Maxthon/.test(C) || "Safari" != C && /^iOS/.test(D) && /\bSafari\b/.test(L[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(C) && L[1]) && (k = L[L.length - 1]) && G.push(k);
            G.length && (G = ["(" + G.join("; ") + ")"]);
            V && M && 0 > M.indexOf(V) && G.push("on " + V);
            M && G.push((/^on /.test(G[G.length - 1]) ? "" : "on ") + M);
            if (D) {
                var da = (k = / ([\d.+]+)$/.exec(D)) && "/" == D.charAt(D.length - k[0].length - 1);
                D = {
                    architecture: 32,
                    family: k && !da ? D.replace(k[0], "") : D,
                    version: k ? k[1] : null,
                    toString: function() {
    //a40<
    if (__begin&&__YY__.S("a40", arguments)) {if(__E){eval(__YY__.gE("a40"));}else{debugger;}}
                        var R = this.version;
                        return this.family + (R && !da ? " " + R : "") + (64 == this.architecture ? " 64-bit" : "")
                    }
                }
            }
            (k = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Z)) && !/\bi686\b/i.test(Z) ? (D && (D.architecture = 64,
            D.family = D.family.replace(RegExp(" *" + k), "")),
            C && (/\bWOW64\b/i.test(p) || Y && /\w(?:86|32)$/.test(P.cpuClass || P.platform) && !/\bWin64; x64\b/i.test(p)) && G.unshift("32-bit")) : D && /^OS X/.test(D.family) && "Chrome" == C && 39 <= parseFloat(y) && (D.architecture = 64);
            p || (p = null);
            F = {};
            F.description = p;
            F.layout = L && L[0];
            F.manufacturer = V;
            F.name = C;
            F.prerelease = aa;
            F.product = M;
            F.ua = p;
            F.version = C && y;
            F.os = D || {
                architecture: null,
                family: null,
                version: null,
                toString: function() {
    //a41<
    if (__begin&&__YY__.S("a41", arguments)) {if(__E){eval(__YY__.gE("a41"));}else{debugger;}}
                    return "null"
                }
            };
            F.parse = n;
            F.toString = function() {
    //a42<
    if (__begin&&__YY__.S("a42", arguments)) {if(__E){eval(__YY__.gE("a42"));}else{debugger;}}
                return this.description || ""
            }
            ;
            F.version && G.unshift(y);
            F.name && G.unshift(C);
            D && C && (D != String(D).split(" ")[0] || D != C.split(" ")[0] && !M) && G.push(M ? "(" + D + ")" : "on " + D);
            G.length && (F.description = G.join(" "));
            return F
        }
        var t = {
            "function": !0,
            object: !0
        }
          , v = t[typeof window] && window || this
          , h = t[typeof exports] && exports;
        t = t[typeof module] && module && !module.nodeType && module;
        var g = h && t && "object" == typeof global && global;
        !g || g.global !== g && g.window !== g && g.self !== g || (v = g);
        var u = Math.pow(2, 53) - 1
          , r = /\bOpera/;
        g = Object.prototype;
        var m = g.hasOwnProperty
          , z = g.toString
          , E = n();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (v.platform = E,
        define(function() {
    //a43<
    if (__begin&&__YY__.S("a43", arguments)) {if(__E){eval(__YY__.gE("a43"));}else{debugger;}}
            return E
        })) : h && t ? c(E, function(p, J) {
    //a44<
    if (__begin&&__YY__.S("a44", arguments)) {if(__E){eval(__YY__.gE("a44"));}else{debugger;}}
            h[J] = p
        }) : v.platform = E
    }
    ).call(this);
    function buildIOSMeta() {
    //a45<
    if (__begin&&__YY__.S("a45", arguments)) {if(__E){eval(__YY__.gE("a45"));}else{debugger;}}
        for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], d = 0; d < a.length; d++) {
            var b = document.createElement("meta");
            b.name = a[d].name;
            b.content = a[d].content;
            var c = window.document.head.querySelector('meta[name="' + b.name + '"]');
            c && c.parentNode.removeChild(c);
            window.document.head.appendChild(b)
        }
    }
    function hideIOSFullscreenPanel() {
    //a46<
    if (__begin&&__YY__.S("a46", arguments)) {if(__E){eval(__YY__.gE("a46"));}else{debugger;}}
        jQuery(".xxx-ios-fullscreen-message").css("display", "none");
        jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
        jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
    }
    function buildIOSFullscreenPanel() {
    //a47<
    if (__begin&&__YY__.S("a47", arguments)) {if(__E){eval(__YY__.gE("a47"));}else{debugger;}}
        jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
    }
    function showIOSFullscreenPanel() {
    //a48<
    if (__begin&&__YY__.S("a48", arguments)) {if(__E){eval(__YY__.gE("a48"));}else{debugger;}}
        jQuery(".xxx-ios-fullscreen-message").css("display", "block");
        jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
    }
    function __iosResize() {
    //a49<
    if (__begin&&__YY__.S("a49", arguments)) {if(__E){eval(__YY__.gE("a49"));}else{debugger;}}
        window.scrollTo(0, 0);
        console.log(window.devicePixelRatio);
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        if ("iPhone" === platform.product)
            switch (window.devicePixelRatio) {
            case 2:
                switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
                }
                break;
            case 3:
                switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
                }
                break;
            default:
                hideIOSFullscreenPanel()
            }
    }
    function iosResize() {
    //a50<
    if (__begin&&__YY__.S("a50", arguments)) {if(__E){eval(__YY__.gE("a50"));}else{debugger;}}
        __iosResize();
        setTimeout(function() {
    //a51<
    if (__begin&&__YY__.S("a51", arguments)) {if(__E){eval(__YY__.gE("a51"));}else{debugger;}}
            __iosResize()
        }, 500)
    }
    function iosInIframe() {
    //a52<
    if (__begin&&__YY__.S("a52", arguments)) {if(__E){eval(__YY__.gE("a52"));}else{debugger;}}
        try {
            return window.self !== window.top
        } catch (a) {
            return !0
        }
    }
    $(document).ready(function() {
    //a53<
    if (__begin&&__YY__.S("a53", arguments)) {if(__E){eval(__YY__.gE("a53"));}else{debugger;}}
        platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && (buildIOSFullscreenPanel(),
        buildIOSMeta())
    });
    jQuery(window).resize(function() {
    //a54<
    if (__begin&&__YY__.S("a54", arguments)) {if(__E){eval(__YY__.gE("a54"));}else{debugger;}}
        platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && iosResize()
    });
    var s_iScaleFactor = 1, s_bIsIphone = !1, s_iOffsetX, s_iOffsetY, s_bFocus = !0;
    (function(a) {
    //a55<
    if (__begin&&__YY__.S("a55", arguments)) {if(__E){eval(__YY__.gE("a55"));}else{debugger;}}
        (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    }
    )(navigator.userAgent || navigator.vendor || window.opera);
    $(window).resize(function() {
    //a56<
    if (__begin&&__YY__.S("a56", arguments)) {if(__E){eval(__YY__.gE("a56"));}else{debugger;}}
        sizeHandler()
    });
    function trace(a) {
    //a57<
    if (__begin&&__YY__.S("a57", arguments)) {if(__E){eval(__YY__.gE("a57"));}else{debugger;}}
        console.log(a)
    }
    function getSize(a) {
    //a58<
    if (__begin&&__YY__.S("a58", arguments)) {if(__E){eval(__YY__.gE("a58"));}else{debugger;}}
        var d = a.toLowerCase()
          , b = window.document
          , c = b.documentElement;
        if (void 0 === window["inner" + a])
            a = c["client" + a];
        else if (window["inner" + a] != c["client" + a]) {
            var e = b.createElement("body");
            e.id = "vpw-test-b";
            e.style.cssText = "overflow:scroll";
            var f = b.createElement("div");
            f.id = "vpw-test-d";
            f.style.cssText = "position:absolute;top:-1000px";
            f.innerHTML = "<style>@media(" + d + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
            e.appendChild(f);
            c.insertBefore(e, b.head);
            a = 7 == f["offset" + a] ? c["client" + a] : window["inner" + a];
            c.removeChild(e)
        } else
            a = window["inner" + a];
        return a
    }
    window.addEventListener("orientationchange", onOrientationChange);
    function onOrientationChange() {
    //a59<
    if (__begin&&__YY__.S("a59", arguments)) {if(__E){eval(__YY__.gE("a59"));}else{debugger;}}
        window.matchMedia("(orientation: portrait)").matches && sizeHandler();
        window.matchMedia("(orientation: landscape)").matches && sizeHandler()
    }
    function isIpad() {
    //a60<
    if (__begin&&__YY__.S("a60", arguments)) {if(__E){eval(__YY__.gE("a60"));}else{debugger;}}
        var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
        return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
    }
    function isMobile() {
    //a61<
    if (__begin&&__YY__.S("a61", arguments)) {if(__E){eval(__YY__.gE("a61"));}else{debugger;}}
        return isIpad() ? !0 : jQuery.browser.mobile
    }
    function isChrome() {
    //a62<
    if (__begin&&__YY__.S("a62", arguments)) {if(__E){eval(__YY__.gE("a62"));}else{debugger;}}
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    }
    function isIOS() {
    //a63<
    if (__begin&&__YY__.S("a63", arguments)) {if(__E){eval(__YY__.gE("a63"));}else{debugger;}}
        var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
        for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length; )
            if (navigator.platform === a.pop())
                return !0;
        return s_bIsIphone = !1
    }
    function getIOSWindowHeight() {
    //a64<
    if (__begin&&__YY__.S("a64", arguments)) {if(__E){eval(__YY__.gE("a64"));}else{debugger;}}
        return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
    }
    function getHeightOfIOSToolbars() {
    //a65<
    if (__begin&&__YY__.S("a65", arguments)) {if(__E){eval(__YY__.gE("a65"));}else{debugger;}}
        var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
        return 1 < a ? a : 0
    }
    function sizeHandler() {
    //a66<
    if (__begin&&__YY__.S("a66", arguments)) {if(__E){eval(__YY__.gE("a66"));}else{debugger;}}
        window.scrollTo(0, 1);
        if ($("#canvas")) {
            var a = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
            var d = getSize("Width");
            s_bFocus && _checkOrientation(d, a);
            var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH)
              , c = Math.round(CANVAS_WIDTH * b);
            b = Math.round(CANVAS_HEIGHT * b);
            if (b < a) {
                var e = a - b;
                b += e;
                c += CANVAS_WIDTH / CANVAS_HEIGHT * e
            } else
                c < d && (e = d - c,
                c += e,
                b += CANVAS_HEIGHT / CANVAS_WIDTH * e);
            e = a / 2 - b / 2;
            var f = d / 2 - c / 2
              , q = CANVAS_WIDTH / c;
            if (f * q < -EDGEBOARD_X || e * q < -EDGEBOARD_Y)
                b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)),
                c = Math.round(CANVAS_WIDTH * b),
                b = Math.round(CANVAS_HEIGHT * b),
                e = (a - b) / 2,
                f = (d - c) / 2,
                q = CANVAS_WIDTH / c;
            s_iOffsetX = -1 * f * q;
            s_iOffsetY = -1 * e * q;
            0 <= e && (s_iOffsetY = 0);
            0 <= f && (s_iOffsetX = 0);
            null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
            null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
            s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT);
            s_bIsIphone ? (canvas = document.getElementById("canvas"),
            s_oStage.canvas.width = 2 * c,
            s_oStage.canvas.height = 2 * b,
            canvas.style.width = c + "px",
            canvas.style.height = b + "px",
            s_iScaleFactor = 2 * Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT),
            s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", c + "px"),
            $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c,
            s_oStage.canvas.height = b,
            s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
            0 > e || (e = (a - b) / 2);
            $("#canvas").css("top", e + "px");
            $("#canvas").css("left", f + "px");
            fullscreenHandler()
        }
    }
    function _checkOrientation(a, d) {
    //a67<
    if (__begin&&__YY__.S("a67", arguments)) {if(__E){eval(__YY__.gE("a67"));}else{debugger;}}
        s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"),
        s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"),
        s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
    }
    function createBitmap(a, d, b) {
    //a68<
    if (__begin&&__YY__.S("a68", arguments)) {if(__E){eval(__YY__.gE("a68"));}else{debugger;}}
        var c = new createjs.Bitmap(a)
          , e = new createjs.Shape;
        d && b ? e.graphics.beginFill("#fff").drawRect(0, 0, d, b) : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
        c.hitArea = e;
        return c
    }
    function createSprite(a, d, b, c, e, f) {
    //a69<
    if (__begin&&__YY__.S("a69", arguments)) {if(__E){eval(__YY__.gE("a69"));}else{debugger;}}
        a = null !== d ? new createjs.Sprite(a,d) : new createjs.Sprite(a);
        d = new createjs.Shape;
        d.graphics.beginFill("#000000").drawRect(-b, -c, e, f);
        a.hitArea = d;
        return a
    }
    function randomFloatBetween(a, d, b) {
    //a70<
    if (__begin&&__YY__.S("a70", arguments)) {if(__E){eval(__YY__.gE("a70"));}else{debugger;}}
        "undefined" === typeof b && (b = 2);
        return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
    }
    function shuffle(a) {
    //a71<
    if (__begin&&__YY__.S("a71", arguments)) {if(__E){eval(__YY__.gE("a71"));}else{debugger;}}
        for (var d = a.length, b, c; 0 !== d; )
            c = Math.floor(Math.random() * d),
            --d,
            b = a[d],
            a[d] = a[c],
            a[c] = b;
        return a
    }
    function formatTime(a) {
    //a72<
    if (__begin&&__YY__.S("a72", arguments)) {if(__E){eval(__YY__.gE("a72"));}else{debugger;}}
        a /= 1E3;
        var d = Math.floor(a / 60);
        a = parseFloat(a - 60 * d).toFixed(1);
        var b = "";
        b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
        return 10 > a ? b + ("0" + a) : b + a
    }
    function formatValue(a) {
    //a73<
    if (__begin&&__YY__.S("a73", arguments)) {if(__E){eval(__YY__.gE("a73"));}else{debugger;}}
        return TEXT_CURRENCY + a.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    Array.prototype.sortOn = function() {
    //a74<
    if (__begin&&__YY__.S("a74", arguments)) {if(__E){eval(__YY__.gE("a74"));}else{debugger;}}
        var a = this.slice();
        if (!arguments.length)
            return a.sort();
        var d = Array.prototype.slice.call(arguments);
        return a.sort(function(b, c) {
    //a75<
    if (__begin&&__YY__.S("a75", arguments)) {if(__E){eval(__YY__.gE("a75"));}else{debugger;}}
            for (var e = d.slice(), f = e.shift(); b[f] == c[f] && e.length; )
                f = e.shift();
            return b[f] == c[f] ? 0 : b[f] > c[f] ? 1 : -1
        })
    }
    ;
    function roundDecimal(a, d) {
    //a76<
    if (__begin&&__YY__.S("a76", arguments)) {if(__E){eval(__YY__.gE("a76"));}else{debugger;}}
        var b = Math.pow(10, d);
        return Math.round(b * a) / b
    }
    function tweenVectors(a, d, b, c) {
    //a77<
    if (__begin&&__YY__.S("a77", arguments)) {if(__E){eval(__YY__.gE("a77"));}else{debugger;}}
        c.set(a.getX() + b * (d.getX() - a.getX()), a.getY() + b * (d.getY() - a.getY()));
        return c
    }
    function NoClickDelay(a) {
    //a78<
    if (__begin&&__YY__.S("a78", arguments)) {if(__E){eval(__YY__.gE("a78"));}else{debugger;}}
        this.element = a;
        window.Touch && this.element.addEventListener("touchstart", this, !1)
    }
    NoClickDelay.prototype = {
        handleEvent: function(a) {
    //a79<
    if (__begin&&__YY__.S("a79", arguments)) {if(__E){eval(__YY__.gE("a79"));}else{debugger;}}
            switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
            }
        },
        onTouchStart: function(a) {
    //a80<
    if (__begin&&__YY__.S("a80", arguments)) {if(__E){eval(__YY__.gE("a80"));}else{debugger;}}
            a.preventDefault();
            this.moved = !1;
            this.element.addEventListener("touchmove", this, !1);
            this.element.addEventListener("touchend", this, !1)
        },
        onTouchMove: function(a) {
    //a81<
    if (__begin&&__YY__.S("a81", arguments)) {if(__E){eval(__YY__.gE("a81"));}else{debugger;}}
            this.moved = !0
        },
        onTouchEnd: function(a) {
    //a82<
    if (__begin&&__YY__.S("a82", arguments)) {if(__E){eval(__YY__.gE("a82"));}else{debugger;}}
            this.element.removeEventListener("touchmove", this, !1);
            this.element.removeEventListener("touchend", this, !1);
            if (!this.moved) {
                a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
                3 === a.nodeType && (a = a.parentNode);
                var d = document.createEvent("MouseEvents");
                d.initEvent("click", !0, !0);
                a.dispatchEvent(d)
            }
        }
    };
    (function() {
    //a83<
    if (__begin&&__YY__.S("a83", arguments)) {if(__E){eval(__YY__.gE("a83"));}else{debugger;}}
        function a(b) {
    //a84<
    if (__begin&&__YY__.S("a84", arguments)) {if(__E){eval(__YY__.gE("a84"));}else{debugger;}}
            var c = {
                focus: "visible",
                focusin: "visible",
                pageshow: "visible",
                blur: "hidden",
                focusout: "hidden",
                pagehide: "hidden"
            };
            b = b || window.event;
            b.type in c ? document.body.className = c[b.type] : (document.body.className = this[d] ? "hidden" : "visible",
            "hidden" === document.body.className ? (s_oMain.stopUpdate(),
            s_bFocus = !1) : (s_oMain.startUpdate(),
            s_bFocus = !0))
        }
        var d = "hidden";
        d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden")in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin"in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
    }
    )();
    function playSound(a, d, b) {
    //a85<
    if (__begin&&__YY__.S("a85", arguments)) {if(__E){eval(__YY__.gE("a85"));}else{debugger;}}
        return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(),
        s_aSounds[a].volume(d),
        s_aSounds[a].loop(b),
        s_aSounds[a]) : null
    }
    function stopSound(a) {
    //a86<
    if (__begin&&__YY__.S("a86", arguments)) {if(__E){eval(__YY__.gE("a86"));}else{debugger;}}
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
    }
    function setVolume(a, d) {
    //a87<
    if (__begin&&__YY__.S("a87", arguments)) {if(__E){eval(__YY__.gE("a87"));}else{debugger;}}
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(d)
    }
    function setMute(a, d) {
    //a88<
    if (__begin&&__YY__.S("a88", arguments)) {if(__E){eval(__YY__.gE("a88"));}else{debugger;}}
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(d)
    }
    function ctlArcadeResume() {
    //a89<
    if (__begin&&__YY__.S("a89", arguments)) {if(__E){eval(__YY__.gE("a89"));}else{debugger;}}
        null !== s_oMain && s_oMain.startUpdate()
    }
    function ctlArcadePause() {
    //a90<
    if (__begin&&__YY__.S("a90", arguments)) {if(__E){eval(__YY__.gE("a90"));}else{debugger;}}
        null !== s_oMain && s_oMain.stopUpdate()
    }
    function getParamValue(a) {
    //a91<
    if (__begin&&__YY__.S("a91", arguments)) {if(__E){eval(__YY__.gE("a91"));}else{debugger;}}
        for (var d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
            var c = d[b].split("=");
            if (c[0] == a)
                return c[1]
        }
    }
    function fullscreenHandler() {
    //a92<
    if (__begin&&__YY__.S("a92", arguments)) {if(__E){eval(__YY__.gE("a92"));}else{debugger;}}
        ENABLE_FULLSCREEN && !1 !== screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen,
        null !== s_oInterface && s_oInterface.resetFullscreenBut(),
        null !== s_oMenu && s_oMenu.resetFullscreenBut())
    }
    if (screenfull.isEnabled)
        screenfull.on("change", function() {
    //a93<
    if (__begin&&__YY__.S("a93", arguments)) {if(__E){eval(__YY__.gE("a93"));}else{debugger;}}
            s_bFullscreen = screenfull.isFullscreen;
            null !== s_oInterface && s_oInterface.resetFullscreenBut();
            null !== s_oMenu && s_oMenu.resetFullscreenBut()
        });
    function CSpriteLibrary() {
    //a94<
    if (__begin&&__YY__.S("a94", arguments)) {if(__E){eval(__YY__.gE("a94"));}else{debugger;}}
        var a = {}, d, b, c, e, f, q;
        this.init = function(l, n, t) {
    //a95<
    if (__begin&&__YY__.S("a95", arguments)) {if(__E){eval(__YY__.gE("a95"));}else{debugger;}}
            d = {};
            c = b = 0;
            e = l;
            f = n;
            q = t
        }
        ;
        this.addSprite = function(l, n) {
    //a96<
    if (__begin&&__YY__.S("a96", arguments)) {if(__E){eval(__YY__.gE("a96"));}else{debugger;}}
            if (a.hasOwnProperty(l))
                return !1;
            var t = new Image;
            a[l] = d[l] = {
                szPath: n,
                oSprite: t,
                bLoaded: !1
            };
            b++;
            return !0
        }
        ;
        this.getSprite = function(l) {
    //a97<
    if (__begin&&__YY__.S("a97", arguments)) {if(__E){eval(__YY__.gE("a97"));}else{debugger;}}
            return a.hasOwnProperty(l) ? a[l].oSprite : null
        }
        ;
        this._onSpritesLoaded = function() {
    //a98<
    if (__begin&&__YY__.S("a98", arguments)) {if(__E){eval(__YY__.gE("a98"));}else{debugger;}}
            b = 0;
            f.call(q)
        }
        ;
        this._onSpriteLoaded = function() {
    //a99<
    if (__begin&&__YY__.S("a99", arguments)) {if(__E){eval(__YY__.gE("a99"));}else{debugger;}}
            e.call(q);
            ++c === b && this._onSpritesLoaded()
        }
        ;
        this.loadSprites = function() {
    //a100<
    if (__begin&&__YY__.S("a100", arguments)) {if(__E){eval(__YY__.gE("a100"));}else{debugger;}}
            for (var l in d)
                d[l].oSprite.oSpriteLibrary = this,
                d[l].oSprite.szKey = l,
                d[l].oSprite.onload = function() {
    //a101<
    if (__begin&&__YY__.S("a101", arguments)) {if(__E){eval(__YY__.gE("a101"));}else{debugger;}}
                    this.oSpriteLibrary.setLoaded(this.szKey);
                    this.oSpriteLibrary._onSpriteLoaded(this.szKey)
                }
                ,
                d[l].oSprite.onerror = function(n) {
    //a102<
    if (__begin&&__YY__.S("a102", arguments)) {if(__E){eval(__YY__.gE("a102"));}else{debugger;}}
                    var t = n.currentTarget;
                    setTimeout(function() {
    //a103<
    if (__begin&&__YY__.S("a103", arguments)) {if(__E){eval(__YY__.gE("a103"));}else{debugger;}}
                        d[t.szKey].oSprite.src = d[t.szKey].szPath
                    }, 500)
                }
                ,
                d[l].oSprite.src = d[l].szPath
        }
        ;
        this.setLoaded = function(l) {
    //a104<
    if (__begin&&__YY__.S("a104", arguments)) {if(__E){eval(__YY__.gE("a104"));}else{debugger;}}
            a[l].bLoaded = !0
        }
        ;
        this.isLoaded = function(l) {
    //a105<
    if (__begin&&__YY__.S("a105", arguments)) {if(__E){eval(__YY__.gE("a105"));}else{debugger;}}
            return a[l].bLoaded
        }
        ;
        this.getNumSprites = function() {
    //a106<
    if (__begin&&__YY__.S("a106", arguments)) {if(__E){eval(__YY__.gE("a106"));}else{debugger;}}
            return b
        }
    }
    var CANVAS_WIDTH = 1700, CANVAS_HEIGHT = 768, EDGEBOARD_X = 338, EDGEBOARD_Y = 0, FPS = 30, FPS_TIME = 1E3 / FPS, DISABLE_SOUND_MOBILE = !1, FONT_GAME_1 = "arialbold", FONT_GAME_2 = "Digital-7", STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, STATE_GAME_WAITING_FOR_BET = 0, STATE_GAME_DEALING = 1, STATE_GAME_SHOW_WINNER = 2, STATE_CARD_DEALING = 0, STATE_CARD_REMOVING = 1, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, ASSIGN_FICHES = "ASSIGN_FICHES", END_HAND = "END_HAND", ON_CARD_SHOWN = "ON_CARD_SHOWN", ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING", ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE", NUM_FICHES = 6, CARD_WIDTH = 66, CARD_HEIGHT = 102, MIN_BET, MAX_BET, TOTAL_MONEY, FICHE_WIDTH, WIN_OCCURRENCE, BET_OCCURRENCE, FICHES_VALUE, TIME_FICHES_MOV = 600, TIME_CARD_DEALING = 250, TIME_CARD_REMOVE = 1E3, TIME_SHOW_FINAL_CARDS = 4E3, TIME_END_HAND, BET_TIME = 1E4, AD_SHOW_COUNTER, NUM_DECKS = 4, COLOR_FICHE_PER_VALUE = "#fff #000 #000 #fff #fff #fff".split(" "), BET_TIE = 0, BET_BANKER = 1, BET_PLAYER = 2, WIN_TIE = 0, WIN_DEALER = 1, WIN_PLAYER = 2, POS_BET = [], MULTIPLIERS = [], ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, TEXT_BET = ["TIE", "BANKER", "PLAYER"], TEXT_WIN = "WIN", TEXT_SHOW_WIN = ["TIE - PAYS 8 TO 1", TEXT_BET[1], TEXT_BET[2]], TEXT_NO_WIN = "NO WIN", TEXT_PUSH = "PUSH", TEXT_PLAY = "PLAY", TEXT_CLEAR = "CLEAR", TEXT_REBET = "REBET", TEXT_DEAL = "DEAL", TEXT_MIN_BET = "MIN BET", TEXT_MAX_BET = "MAX BET", TEXT_NO = "NO", TEXT_YES = "YES", TEXT_RECHARGE = "RECHARGE", TEXT_EXIT = "EXIT", TEXT_MONEY = "MONEY", TEXT_CURRENCY = "$", TEXT_CREDITS_DEVELOPED = "DEVELOPED BY", TEXT_PRELOADER_CONTINUE = "START", TEXT_OUTCOME = "OUTCOME: ", TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET", TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!", TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS", TEXT_DISPLAY_TIE = "THIS HAND IS A TIE!", TEXT_DISPLAY_MSG_DEALING = "DEALING...", TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!", TEXT_HAND_WON = "HAND WON BY", TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!", TEXT_SHARE_IMAGE = "200x200.jpg", TEXT_SHARE_TITLE = "Congratulations!", TEXT_SHARE_MSG1 = "You collected <strong>", TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!", TEXT_SHARE_SHARE1 = "My score is ", TEXT_SHARE_SHARE2 = " points! Can you do better?";
    function CPreloader() {
    //a107<
    if (__begin&&__YY__.S("a107", arguments)) {if(__E){eval(__YY__.gE("a107"));}else{debugger;}}
        var a, d, b, c, e, f, q, l, n;
        this._init = function() {
    //a108<
    if (__begin&&__YY__.S("a108", arguments)) {if(__E){eval(__YY__.gE("a108"));}else{debugger;}}
            s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
            s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
            s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
            s_oSpriteLibrary.loadSprites();
            n = new createjs.Container;
            s_oStage.addChild(n)
        }
        ;
        this.unload = function() {
    //a109<
    if (__begin&&__YY__.S("a109", arguments)) {if(__E){eval(__YY__.gE("a109"));}else{debugger;}}
            n.removeAllChildren()
        }
        ;
        this._onImagesLoaded = function() {
    //a110<
    if (__begin&&__YY__.S("a110", arguments)) {if(__E){eval(__YY__.gE("a110"));}else{debugger;}}}
        ;
        this._onAllImagesLoaded = function() {
    //a111<
    if (__begin&&__YY__.S("a111", arguments)) {if(__E){eval(__YY__.gE("a111"));}else{debugger;}}
            this.attachSprites();
            s_oMain.preloaderReady()
        }
        ;
        this.attachSprites = function() {
    //a112<
    if (__begin&&__YY__.S("a112", arguments)) {if(__E){eval(__YY__.gE("a112"));}else{debugger;}}
            var t = new createjs.Shape;
            t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            n.addChild(t);
            t = s_oSpriteLibrary.getSprite("200x200");
            q = createBitmap(t);
            q.regX = .5 * t.width;
            q.regY = .5 * t.height;
            q.x = CANVAS_WIDTH / 2;
            q.y = CANVAS_HEIGHT / 2 - 180;
            n.addChild(q);
            l = new createjs.Shape;
            l.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(q.x - 100, q.y - 100, 200, 200, 10);
            n.addChild(l);
            q.mask = l;
            t = s_oSpriteLibrary.getSprite("progress_bar");
            c = createBitmap(t);
            c.x = CANVAS_WIDTH / 2 - t.width / 2;
            c.y = CANVAS_HEIGHT / 2 + 50;
            n.addChild(c);
            a = t.width;
            d = t.height;
            e = new createjs.Shape;
            e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, d);
            n.addChild(e);
            c.mask = e;
            b = new createjs.Text("","30px " + FONT_GAME_1,"#fff");
            b.x = CANVAS_WIDTH / 2;
            b.y = CANVAS_HEIGHT / 2 + 100;
            b.textBaseline = "alphabetic";
            b.textAlign = "center";
            n.addChild(b);
            f = new createjs.Shape;
            f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            n.addChild(f);
            createjs.Tween.get(f).to({
                alpha: 0
            }, 500).call(function() {
    //a113<
    if (__begin&&__YY__.S("a113", arguments)) {if(__E){eval(__YY__.gE("a113"));}else{debugger;}}
                createjs.Tween.removeTweens(f);
                n.removeChild(f)
            })
        }
        ;
        this.refreshLoader = function(t) {
    //a114<
    if (__begin&&__YY__.S("a114", arguments)) {if(__E){eval(__YY__.gE("a114"));}else{debugger;}}
            b.text = t + "%";
            100 === t && (s_oMain._onRemovePreloader(),
            b.visible = !1,
            c.visible = !1);
            e.graphics.clear();
            t = Math.floor(t * a / 100);
            e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, t, d)
        }
        ;
        this._init()
    }
    function CMain(a) {
    //a115<
    if (__begin&&__YY__.S("a115", arguments)) {if(__E){eval(__YY__.gE("a115"));}else{debugger;}}
        var d, b = 0, c = 0, e = STATE_LOADING, f, q;
        this.initContainer = function() {
    //a116<
    if (__begin&&__YY__.S("a116", arguments)) {if(__E){eval(__YY__.gE("a116"));}else{debugger;}}
            var n = document.getElementById("canvas");
            s_oStage = new createjs.Stage(n);
            createjs.Touch.enable(s_oStage, !0);
            s_bMobile = isMobile();
            !1 === s_bMobile && s_oStage.enableMouseOver(20);
            s_iPrevTime = (new Date).getTime();
            createjs.Ticker.setFPS(FPS);
            createjs.Ticker.addEventListener("tick", this._update);
            navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
            s_oSpriteLibrary = new CSpriteLibrary;
            // seekAndDestroy() ?
            f = new CPreloader
            //  : window.location.href = "http://www.codethislab.com/contact-us.html";
            s_oGameSettings = new CGameSettings;
            d = !0
        }
        ;
        this.preloaderReady = function() {
    //a117<
    if (__begin&&__YY__.S("a117", arguments)) {if(__E){eval(__YY__.gE("a117"));}else{debugger;}}
            this._loadImages();
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds()
        }
        ;
        this.soundLoaded = function() {
    //a118<
    if (__begin&&__YY__.S("a118", arguments)) {if(__E){eval(__YY__.gE("a118"));}else{debugger;}}
            b++;
            f.refreshLoader(Math.floor(b / c * 100))
        }
        ;
        this._initSounds = function() {
    //a119<
    if (__begin&&__YY__.S("a119", arguments)) {if(__E){eval(__YY__.gE("a119"));}else{debugger;}}
            Howler.mute(!s_bAudioActive);
            s_aSoundsInfo = [];
            s_aSoundsInfo.push({
                path: "./sounds/",
                filename: "card",
                loop: !1,
                volume: 1,
                ingamename: "card"
            });
            s_aSoundsInfo.push({
                path: "./sounds/",
                filename: "chip",
                loop: !1,
                volume: 1,
                ingamename: "chip"
            });
            s_aSoundsInfo.push({
                path: "./sounds/",
                filename: "fiche_collect",
                loop: !1,
                volume: 1,
                ingamename: "fiche_collect"
            });
            s_aSoundsInfo.push({
                path: "./sounds/",
                filename: "press_but",
                loop: !1,
                volume: 1,
                ingamename: "press_but"
            });
            s_aSoundsInfo.push({
                path: "./sounds/",
                filename: "win",
                loop: !1,
                volume: 1,
                ingamename: "win"
            });
            s_aSoundsInfo.push({
                path: "./sounds/",
                filename: "lose",
                loop: !1,
                volume: 1,
                ingamename: "lose"
            });
            c += s_aSoundsInfo.length;
            s_aSounds = [];
            for (var n = 0; n < s_aSoundsInfo.length; n++)
                this.tryToLoadSound(s_aSoundsInfo[n], !1)
        }
        ;
        this.tryToLoadSound = function(n, t) {
    //a120<
    if (__begin&&__YY__.S("a120", arguments)) {if(__E){eval(__YY__.gE("a120"));}else{debugger;}}
            setTimeout(function() {
    //a121<
    if (__begin&&__YY__.S("a121", arguments)) {if(__E){eval(__YY__.gE("a121"));}else{debugger;}}
                s_aSounds[n.ingamename] = new Howl({
                    src: [n.path + n.filename + ".mp3"],
                    autoplay: !1,
                    preload: !0,
                    loop: n.loop,
                    volume: n.volume,
                    onload: s_oMain.soundLoaded,
                    onloaderror: function(v, h) {
    //a122<
    if (__begin&&__YY__.S("a122", arguments)) {if(__E){eval(__YY__.gE("a122"));}else{debugger;}}
                        for (var g = 0; g < s_aSoundsInfo.length; g++)
                            if (v === s_aSounds[s_aSoundsInfo[g].ingamename]._sounds[0]._id) {
                                s_oMain.tryToLoadSound(s_aSoundsInfo[g], !0);
                                break
                            }
                    },
                    onplayerror: function(v) {
    //a123<
    if (__begin&&__YY__.S("a123", arguments)) {if(__E){eval(__YY__.gE("a123"));}else{debugger;}}
                        for (var h = 0; h < s_aSoundsInfo.length; h++)
                            if (v === s_aSounds[s_aSoundsInfo[h].ingamename]._sounds[0]._id) {
                                s_aSounds[s_aSoundsInfo[h].ingamename].once("unlock", function() {
    //a124<
    if (__begin&&__YY__.S("a124", arguments)) {if(__E){eval(__YY__.gE("a124"));}else{debugger;}}
                                    s_aSounds[s_aSoundsInfo[h].ingamename].play()
                                });
                                break
                            }
                    }
                })
            }, t ? 200 : 0)
        }
        ;
        this._loadImages = function() {
    //a125<
    if (__begin&&__YY__.S("a125", arguments)) {if(__E){eval(__YY__.gE("a125"));}else{debugger;}}
            s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
            s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
            s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
            s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
            s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
            s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
            s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
            s_oSpriteLibrary.addSprite("card_spritesheet", "./sprites/card_spritesheet.png");
            s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
            s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
            s_oSpriteLibrary.addSprite("fiche_highlight", "./sprites/fiche_highlight.png");
            s_oSpriteLibrary.addSprite("bet_banker", "./sprites/bet_banker.png");
            s_oSpriteLibrary.addSprite("bet_tie", "./sprites/bet_tie.png");
            s_oSpriteLibrary.addSprite("bet_player", "./sprites/bet_player.png");
            s_oSpriteLibrary.addSprite("win_bg", "./sprites/win_bg.png");
            s_oSpriteLibrary.addSprite("history_cell", "./sprites/history_cell.png");
            s_oSpriteLibrary.addSprite("history_highlight", "./sprites/history_highlight.png");
            s_oSpriteLibrary.addSprite("history_bg", "./sprites/history_bg.png");
            s_oSpriteLibrary.addSprite("but_clear", "./sprites/but_clear.png");
            s_oSpriteLibrary.addSprite("but_deal", "./sprites/but_deal.png");
            s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
            s_oSpriteLibrary.addSprite("gui_bg", "./sprites/gui_bg.png");
            s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
            s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
            s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
            for (var n = 0; n < NUM_FICHES; n++)
                s_oSpriteLibrary.addSprite("fiche_" + n, "./sprites/fiche_" + n + ".png");
            c += s_oSpriteLibrary.getNumSprites();
            s_oSpriteLibrary.loadSprites()
        }
        ;
        this._onImagesLoaded = function() {
    //a126<
    if (__begin&&__YY__.S("a126", arguments)) {if(__E){eval(__YY__.gE("a126"));}else{debugger;}}
            b++;
            f.refreshLoader(Math.floor(b / c * 100))
        }
        ;
        this._onAllImagesLoaded = function() {
    //a127<
    if (__begin&&__YY__.S("a127", arguments)) {if(__E){eval(__YY__.gE("a127"));}else{debugger;}}}
        ;
        this._onRemovePreloader = function() {
    //a128<
    if (__begin&&__YY__.S("a128", arguments)) {if(__E){eval(__YY__.gE("a128"));}else{debugger;}}
            f.unload();
            this.gotoMenu()
        }
        ;
        this.gotoMenu = function() {
    //a129<
    if (__begin&&__YY__.S("a129", arguments)) {if(__E){eval(__YY__.gE("a129"));}else{debugger;}}
            new CMenu;
            e = STATE_MENU
        }
        ;
        this.gotoGame = function() {
    //a130<
    if (__begin&&__YY__.S("a130", arguments)) {if(__E){eval(__YY__.gE("a130"));}else{debugger;}}
            q = new CGame(l);
            e = STATE_GAME
        }
        ;
        this.gotoHelp = function() {
    //a131<
    if (__begin&&__YY__.S("a131", arguments)) {if(__E){eval(__YY__.gE("a131"));}else{debugger;}}
            new CHelp;
            e = STATE_HELP
        }
        ;
        this.stopUpdate = function() {
    //a132<
    if (__begin&&__YY__.S("a132", arguments)) {if(__E){eval(__YY__.gE("a132"));}else{debugger;}}
            d = !1;
            createjs.Ticker.paused = !0;
            $("#block_game").css("display", "block");
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
        }
        ;
        this.startUpdate = function() {
    //a133<
    if (__begin&&__YY__.S("a133", arguments)) {if(__E){eval(__YY__.gE("a133"));}else{debugger;}}
            s_iPrevTime = (new Date).getTime();
            d = !0;
            createjs.Ticker.paused = !1;
            $("#block_game").css("display", "none");
            (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
        }
        ;
        this._update = function(n) {
    //a134<
    // if (__begin&&__YY__.S("a134", arguments)) {if(__E){eval(__YY__.gE("a134"));}else{debugger;}}
            if (d) {
                var t = (new Date).getTime();
                s_iTimeElaps = t - s_iPrevTime;
                s_iCntTime += s_iTimeElaps;
                s_iCntFps++;
                s_iPrevTime = t;
                1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps,
                s_iCntTime -= 1E3,
                s_iCntFps = 0);
                e === STATE_GAME && q.update();
                s_oStage.update(n)
            }
        }
        ;
        s_oMain = this;
        var l = a;
        ENABLE_CHECK_ORIENTATION = l.check_orientation;
        ENABLE_FULLSCREEN = l.fullscreen;
        SHOW_CREDITS = a.show_credits;
        s_bAudioActive = a.audio_enable_on_startup;
        this.initContainer()
    }
    var s_bMobile, s_bAudioActive = !0, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings, s_bFullscreen = !1;
    function CTextButton(a, d, b, c, e, f, q, l) {
    //a135<
    if (__begin&&__YY__.S("a135", arguments)) {if(__E){eval(__YY__.gE("a135"));}else{debugger;}}
        var n, t, v, h, g, u, r, m, z, E;
        this._init = function(p, J, I, F, G, P, y) {
    //a136<
    if (__begin&&__YY__.S("a136", arguments)) {if(__E){eval(__YY__.gE("a136"));}else{debugger;}}
            n = !1;
            t = 1;
            v = [];
            h = [];
            E = createBitmap(I);
            m = new createjs.Container;
            m.x = p;
            m.y = J;
            m.regX = I.width / 2;
            m.regY = I.height / 2;
            s_bMobile || (m.cursor = "pointer");
            m.addChild(E, z);
            l.addChild(m);
            z = new CTLText(m,10,5,I.width - 20,I.height - 10,y,"center",P,G,1,0,0,F,!0,!0,!1,!1);
            this._initListener()
        }
        ;
        this.unload = function() {
    //a137<
    if (__begin&&__YY__.S("a137", arguments)) {if(__E){eval(__YY__.gE("a137"));}else{debugger;}}
            m.off("mousedown", g);
            m.off("pressup", u);
            l.removeChild(m)
        }
        ;
        this.setVisible = function(p) {
    //a138<
    if (__begin&&__YY__.S("a138", arguments)) {if(__E){eval(__YY__.gE("a138"));}else{debugger;}}
            m.visible = p
        }
        ;
        this.setAlign = function(p) {
    //a139<
    if (__begin&&__YY__.S("a139", arguments)) {if(__E){eval(__YY__.gE("a139"));}else{debugger;}}
            z.textAlign = p
        }
        ;
        this.setTextX = function(p) {
    //a140<
    if (__begin&&__YY__.S("a140", arguments)) {if(__E){eval(__YY__.gE("a140"));}else{debugger;}}
            z.x = p
        }
        ;
        this.setScale = function(p) {
    //a141<
    if (__begin&&__YY__.S("a141", arguments)) {if(__E){eval(__YY__.gE("a141"));}else{debugger;}}
            t = m.scaleX = m.scaleY = p
        }
        ;
        this.enable = function() {
    //a142<
    if (__begin&&__YY__.S("a142", arguments)) {if(__E){eval(__YY__.gE("a142"));}else{debugger;}}
            n = !1
        }
        ;
        this.disable = function() {
    //a143<
    if (__begin&&__YY__.S("a143", arguments)) {if(__E){eval(__YY__.gE("a143"));}else{debugger;}}
            n = !0
        }
        ;
        this._initListener = function() {
    //a144<
    if (__begin&&__YY__.S("a144", arguments)) {if(__E){eval(__YY__.gE("a144"));}else{debugger;}}
            g = m.on("mousedown", this.buttonDown);
            u = m.on("pressup", this.buttonRelease)
        }
        ;
        this.addEventListener = function(p, J, I) {
    //a145<
    if (__begin&&__YY__.S("a145", arguments)) {if(__E){eval(__YY__.gE("a145"));}else{debugger;}}
            v[p] = J;
            h[p] = I
        }
        ;
        this.addEventListenerWithParams = function(p, J, I, F) {
    //a146<
    if (__begin&&__YY__.S("a146", arguments)) {if(__E){eval(__YY__.gE("a146"));}else{debugger;}}
            v[p] = J;
            h[p] = I;
            r = F
        }
        ;
        this.buttonRelease = function() {
    //a147<
    if (__begin&&__YY__.S("a147", arguments)) {if(__E){eval(__YY__.gE("a147"));}else{debugger;}}
            n || (playSound("press_but", 1, !1),
            m.scaleX = t,
            m.scaleY = t,
            v[ON_MOUSE_UP] && v[ON_MOUSE_UP].call(h[ON_MOUSE_UP], r))
        }
        ;
        this.buttonDown = function() {
    //a148<
    if (__begin&&__YY__.S("a148", arguments)) {if(__E){eval(__YY__.gE("a148"));}else{debugger;}}
            n || (m.scaleX = .9 * t,
            m.scaleY = .9 * t,
            v[ON_MOUSE_DOWN] && v[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN]))
        }
        ;
        this.setPosition = function(p, J) {
    //a149<
    if (__begin&&__YY__.S("a149", arguments)) {if(__E){eval(__YY__.gE("a149"));}else{debugger;}}
            m.x = p;
            m.y = J
        }
        ;
        this.tweenPosition = function(p, J, I, F, G, P, y) {
    //a150<
    if (__begin&&__YY__.S("a150", arguments)) {if(__E){eval(__YY__.gE("a150"));}else{debugger;}}
            createjs.Tween.get(m).wait(F).to({
                x: p,
                y: J
            }, I, G).call(function() {
    //a151<
    if (__begin&&__YY__.S("a151", arguments)) {if(__E){eval(__YY__.gE("a151"));}else{debugger;}}
                void 0 !== P && P.call(y)
            })
        }
        ;
        this.changeText = function(p) {
    //a152<
    if (__begin&&__YY__.S("a152", arguments)) {if(__E){eval(__YY__.gE("a152"));}else{debugger;}}
            z.refreshText(p)
        }
        ;
        this.setX = function(p) {
    //a153<
    if (__begin&&__YY__.S("a153", arguments)) {if(__E){eval(__YY__.gE("a153"));}else{debugger;}}
            m.x = p
        }
        ;
        this.setY = function(p) {
    //a154<
    if (__begin&&__YY__.S("a154", arguments)) {if(__E){eval(__YY__.gE("a154"));}else{debugger;}}
            m.y = p
        }
        ;
        this.getButtonImage = function() {
    //a155<
    if (__begin&&__YY__.S("a155", arguments)) {if(__E){eval(__YY__.gE("a155"));}else{debugger;}}
            return m
        }
        ;
        this.getX = function() {
    //a156<
    if (__begin&&__YY__.S("a156", arguments)) {if(__E){eval(__YY__.gE("a156"));}else{debugger;}}
            return m.x
        }
        ;
        this.getY = function() {
    //a157<
    if (__begin&&__YY__.S("a157", arguments)) {if(__E){eval(__YY__.gE("a157"));}else{debugger;}}
            return m.y
        }
        ;
        this.getSprite = function() {
    //a158<
    if (__begin&&__YY__.S("a158", arguments)) {if(__E){eval(__YY__.gE("a158"));}else{debugger;}}
            return m
        }
        ;
        this.getScale = function() {
    //a159<
    if (__begin&&__YY__.S("a159", arguments)) {if(__E){eval(__YY__.gE("a159"));}else{debugger;}}
            return m.scaleX
        }
        ;
        this._init(a, d, b, c, e, f, q)
    }
    function CGfxButton(a, d, b, c) {
    //a160<
    if (__begin&&__YY__.S("a160", arguments)) {if(__E){eval(__YY__.gE("a160"));}else{debugger;}}
        var e, f, q, l, n, t = [], v, h, g;
        this._init = function(r, m, z) {
    //a161<
    if (__begin&&__YY__.S("a161", arguments)) {if(__E){eval(__YY__.gE("a161"));}else{debugger;}}
            e = !1;
            l = [];
            n = [];
            f = z.width;
            q = z.height;
            g = createBitmap(z);
            g.x = r;
            g.y = m;
            g.regX = z.width / 2;
            g.regY = z.height / 2;
            g.cursor = "pointer";
            u.addChild(g);
            this._initListener()
        }
        ;
        this.unload = function() {
    //a162<
    if (__begin&&__YY__.S("a162", arguments)) {if(__E){eval(__YY__.gE("a162"));}else{debugger;}}
            g.off("mousedown", v);
            g.off("pressup", h);
            u.removeChild(g)
        }
        ;
        this.setVisible = function(r) {
    //a163<
    if (__begin&&__YY__.S("a163", arguments)) {if(__E){eval(__YY__.gE("a163"));}else{debugger;}}
            g.visible = r
        }
        ;
        this._initListener = function() {
    //a164<
    if (__begin&&__YY__.S("a164", arguments)) {if(__E){eval(__YY__.gE("a164"));}else{debugger;}}
            v = g.on("mousedown", this.buttonDown);
            h = g.on("pressup", this.buttonRelease)
        }
        ;
        this.addEventListener = function(r, m, z) {
    //a165<
    if (__begin&&__YY__.S("a165", arguments)) {if(__E){eval(__YY__.gE("a165"));}else{debugger;}}
            l[r] = m;
            n[r] = z
        }
        ;
        this.addEventListenerWithParams = function(r, m, z, E) {
    //a166<
    if (__begin&&__YY__.S("a166", arguments)) {if(__E){eval(__YY__.gE("a166"));}else{debugger;}}
            l[r] = m;
            n[r] = z;
            t = E
        }
        ;
        this.buttonRelease = function(r) {
    //a167<
    if (__begin&&__YY__.S("a167", arguments)) {if(__E){eval(__YY__.gE("a167"));}else{debugger;}}
            r.stopPropagation();
            r.preventDefault();
            e || (playSound("press_but", 1, !1),
            l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(n[ON_MOUSE_UP], t))
        }
        ;
        this.buttonDown = function() {
    //a168<
    if (__begin&&__YY__.S("a168", arguments)) {if(__E){eval(__YY__.gE("a168"));}else{debugger;}}
            e || l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], t)
        }
        ;
        this.setPosition = function(r, m) {
    //a169<
    if (__begin&&__YY__.S("a169", arguments)) {if(__E){eval(__YY__.gE("a169"));}else{debugger;}}
            g.x = r;
            g.y = m
        }
        ;
        this.setX = function(r) {
    //a170<
    if (__begin&&__YY__.S("a170", arguments)) {if(__E){eval(__YY__.gE("a170"));}else{debugger;}}
            g.x = r
        }
        ;
        this.setY = function(r) {
    //a171<
    if (__begin&&__YY__.S("a171", arguments)) {if(__E){eval(__YY__.gE("a171"));}else{debugger;}}
            g.y = r
        }
        ;
        this.enable = function() {
    //a172<
    if (__begin&&__YY__.S("a172", arguments)) {if(__E){eval(__YY__.gE("a172"));}else{debugger;}}
            e = !1;
            g.filters = [];
            g.cache(0, 0, f, q)
        }
        ;
        this.disable = function() {
    //a173<
    if (__begin&&__YY__.S("a173", arguments)) {if(__E){eval(__YY__.gE("a173"));}else{debugger;}}
            e = !0;
            var r = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
            g.filters = [new createjs.ColorMatrixFilter(r)];
            g.cache(0, 0, f, q)
        }
        ;
        this.getButtonImage = function() {
    //a174<
    if (__begin&&__YY__.S("a174", arguments)) {if(__E){eval(__YY__.gE("a174"));}else{debugger;}}
            return g
        }
        ;
        this.getX = function() {
    //a175<
    if (__begin&&__YY__.S("a175", arguments)) {if(__E){eval(__YY__.gE("a175"));}else{debugger;}}
            return g.x
        }
        ;
        this.getY = function() {
    //a176<
    if (__begin&&__YY__.S("a176", arguments)) {if(__E){eval(__YY__.gE("a176"));}else{debugger;}}
            return g.y
        }
        ;
        var u = c;
        this._init(a, d, b);
        return this
    }
    function CGuiButton(a, d, b, c, e, f, q, l) {
    //a177<
    if (__begin&&__YY__.S("a177", arguments)) {if(__E){eval(__YY__.gE("a177"));}else{debugger;}}
        var n, t, v, h, g, u, r;
        this._init = function(m, z, E, p, J, I, F, G) {
    //a178<
    if (__begin&&__YY__.S("a178", arguments)) {if(__E){eval(__YY__.gE("a178"));}else{debugger;}}
            n = !1;
            t = [];
            v = [];
            r = G;
            h = new createjs.Container;
            h.x = m;
            h.y = z;
            h.regX = E.width / 2;
            h.regY = E.height / 2;
            r.addChild(h);
            g = createBitmap(E);
            h.addChild(g);
            u = new CTLText(h,10,E.height - F - 3,E.width / 2,F,F,"left",I,J,1,0,0,p,!0,!0,!1,!1);
            this._initListener()
        }
        ;
        this.unload = function() {
    //a179<
    if (__begin&&__YY__.S("a179", arguments)) {if(__E){eval(__YY__.gE("a179"));}else{debugger;}}
            h.off("mousedown");
            h.off("pressup");
            r.removeChild(h)
        }
        ;
        this.setVisible = function(m) {
    //a180<
    if (__begin&&__YY__.S("a180", arguments)) {if(__E){eval(__YY__.gE("a180"));}else{debugger;}}
            h.visible = m
        }
        ;
        this.enable = function() {
    //a181<
    if (__begin&&__YY__.S("a181", arguments)) {if(__E){eval(__YY__.gE("a181"));}else{debugger;}}
            n = !1;
            u.setColor("#fff")
        }
        ;
        this.disable = function() {
    //a182<
    if (__begin&&__YY__.S("a182", arguments)) {if(__E){eval(__YY__.gE("a182"));}else{debugger;}}
            n = !0;
            u.setColor("#a39b9d")
        }
        ;
        this._initListener = function() {
    //a183<
    if (__begin&&__YY__.S("a183", arguments)) {if(__E){eval(__YY__.gE("a183"));}else{debugger;}}
            h.on("mousedown", this.buttonDown);
            h.on("pressup", this.buttonRelease)
        }
        ;
        this.addEventListener = function(m, z, E) {
    //a184<
    if (__begin&&__YY__.S("a184", arguments)) {if(__E){eval(__YY__.gE("a184"));}else{debugger;}}
            t[m] = z;
            v[m] = E
        }
        ;
        this.buttonRelease = function() {
    //a185<
    // if (__begin&&__YY__.S("a185", arguments)) {if(__E){eval(__YY__.gE("a185"));}else{debugger;}}
            n || (playSound("press_but", 1, !1),
            h.scaleX = 1,
            h.scaleY = 1,
            t[ON_MOUSE_UP] && t[ON_MOUSE_UP].call(v[ON_MOUSE_UP]))
        }
        ;
        this.buttonDown = function() {
    //a186<
    // if (__begin&&__YY__.S("a186", arguments)) {if(__E){eval(__YY__.gE("a186"));}else{debugger;}}
            n || (h.scaleX = .9,
            h.scaleY = .9,
            t[ON_MOUSE_DOWN] && t[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN]))
        }
        ;
        this.setPosition = function(m, z) {
    //a187<
    // if (__begin&&__YY__.S("a187", arguments)) {if(__E){eval(__YY__.gE("a187"));}else{debugger;}}
            h.x = m;
            h.y = z
        }
        ;
        this.changeText = function(m) {
    //a188<
    if (__begin&&__YY__.S("a188", arguments)) {if(__E){eval(__YY__.gE("a188"));}else{debugger;}}
            u.refreshText(m)
        }
        ;
        this.setX = function(m) {
    //a189<
    if (__begin&&__YY__.S("a189", arguments)) {if(__E){eval(__YY__.gE("a189"));}else{debugger;}}
            h.x = m
        }
        ;
        this.setY = function(m) {
    //a190<
    if (__begin&&__YY__.S("a190", arguments)) {if(__E){eval(__YY__.gE("a190"));}else{debugger;}}
            h.y = m
        }
        ;
        this.getButtonImage = function() {
    //a191<
    if (__begin&&__YY__.S("a191", arguments)) {if(__E){eval(__YY__.gE("a191"));}else{debugger;}}
            return h
        }
        ;
        this.getX = function() {
    //a192<
    if (__begin&&__YY__.S("a192", arguments)) {if(__E){eval(__YY__.gE("a192"));}else{debugger;}}
            return h.x
        }
        ;
        this.getY = function() {
    //a193<
    if (__begin&&__YY__.S("a193", arguments)) {if(__E){eval(__YY__.gE("a193"));}else{debugger;}}
            return h.y
        }
        ;
        this._init(a, d, b, c, e, f, q, l);
        return this
    }
    function CToggle(a, d, b, c, e) {
    //a194<
    if (__begin&&__YY__.S("a194", arguments)) {if(__E){eval(__YY__.gE("a194"));}else{debugger;}}
        var f, q, l, n, t = [], v, h, g;
        this._init = function(u, r, m, z, E) {
    //a195<
    if (__begin&&__YY__.S("a195", arguments)) {if(__E){eval(__YY__.gE("a195"));}else{debugger;}}
            l = [];
            n = [];
            var p = new createjs.SpriteSheet({
                images: [m],
                frames: {
                    width: m.width / 2,
                    height: m.height,
                    regX: m.width / 2 / 2,
                    regY: m.height / 2
                },
                animations: {
                    state_true: [0],
                    state_false: [1]
                }
            });
            f = z;
            q = E;
            g = createSprite(p, "state_" + f, m.width / 2 / 2, m.height / 2, m.width / 2, m.height);
            g.x = u;
            g.y = r;
            g.cursor = "pointer";
            g.stop();
            s_oStage.addChild(g);
            this._initListener()
        }
        ;
        this.unload = function() {
    //a196<
    if (__begin&&__YY__.S("a196", arguments)) {if(__E){eval(__YY__.gE("a196"));}else{debugger;}}
            g.off("mousedown", v);
            g.off("pressup", h);
            s_oStage.removeChild(g)
        }
        ;
        this._initListener = function() {
    //a197<
    if (__begin&&__YY__.S("a197", arguments)) {if(__E){eval(__YY__.gE("a197"));}else{debugger;}}
            v = g.on("mousedown", this.buttonDown);
            h = g.on("pressup", this.buttonRelease)
        }
        ;
        this.addEventListener = function(u, r, m) {
    //a198<
    if (__begin&&__YY__.S("a198", arguments)) {if(__E){eval(__YY__.gE("a198"));}else{debugger;}}
            l[u] = r;
            n[u] = m
        }
        ;
        this.addEventListenerWithParams = function(u, r, m, z) {
    //a199<
    if (__begin&&__YY__.S("a199", arguments)) {if(__E){eval(__YY__.gE("a199"));}else{debugger;}}
            l[u] = r;
            n[u] = m;
            t = z
        }
        ;
        this.setActive = function(u) {
    //a200<
    if (__begin&&__YY__.S("a200", arguments)) {if(__E){eval(__YY__.gE("a200"));}else{debugger;}}
            f = u;
            g.gotoAndStop("state_" + f)
        }
        ;
        this.buttonRelease = function() {
    //a201<
    if (__begin&&__YY__.S("a201", arguments)) {if(__E){eval(__YY__.gE("a201"));}else{debugger;}}
            g.scaleX = 1;
            g.scaleY = 1;
            playSound("press_but", 1, !1);
            q && (f = !f,
            g.gotoAndStop("state_" + f));
            l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(n[ON_MOUSE_UP], t)
        }
        ;
        this.buttonDown = function() {
    //a202<
    if (__begin&&__YY__.S("a202", arguments)) {if(__E){eval(__YY__.gE("a202"));}else{debugger;}}
            g.scaleX = .9;
            g.scaleY = .9;
            l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], t)
        }
        ;
        this.setPosition = function(u, r) {
    //a203<
    if (__begin&&__YY__.S("a203", arguments)) {if(__E){eval(__YY__.gE("a203"));}else{debugger;}}
            g.x = u;
            g.y = r
        }
        ;
        this.setVisible = function(u) {
    //a204<
    if (__begin&&__YY__.S("a204", arguments)) {if(__E){eval(__YY__.gE("a204"));}else{debugger;}}
            g.visible = u
        }
        ;
        this.getY = function() {
    //a205<
    if (__begin&&__YY__.S("a205", arguments)) {if(__E){eval(__YY__.gE("a205"));}else{debugger;}}
            return g.y
        }
        ;
        this._init(a, d, b, c, e)
    }
    function CMenu() {
    //a206<
    if (__begin&&__YY__.S("a206", arguments)) {if(__E){eval(__YY__.gE("a206"));}else{debugger;}}
        var a, d, b, c, e, f, q, l = null, n = null, t, v, h, g, u;
        this._init = function() {
    //a207<
    if (__begin&&__YY__.S("a207", arguments)) {if(__E){eval(__YY__.gE("a207"));}else{debugger;}}
            v = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
            s_oStage.addChild(v);
            var r = s_oSpriteLibrary.getSprite("but_menu_bg");
            h = new CGfxButton(CANVAS_WIDTH / 2,CANVAS_HEIGHT - 164,r,s_oStage);
            h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
                r = s_oSpriteLibrary.getSprite("audio_icon"),
                e = CANVAS_WIDTH - r.width / 4 - 10,
                f = r.height / 2 + 10,
                g = new CToggle(e,f,r,s_bAudioActive,!0),
                g.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            SHOW_CREDITS ? (r = s_oSpriteLibrary.getSprite("but_credits"),
            a = 10 + r.width / 2,
            d = r.height / 2 + 10,
            t = new CGfxButton(a,d,r,s_oStage),
            t.addEventListener(ON_MOUSE_UP, this._onCredits, this),
            b = a + r.width + 10,
            c = d) : (r = s_oSpriteLibrary.getSprite("but_fullscreen"),
            b = 10 + r.width / 4,
            c = r.height / 2 + 10);
            r = window.document;
            var m = r.documentElement;
            l = m.requestFullscreen || m.mozRequestFullScreen || m.webkitRequestFullScreen || m.msRequestFullscreen;
            n = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen || r.msExitFullscreen;
            !1 === ENABLE_FULLSCREEN && (l = !1);
            l && screenfull.isEnabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"),
            q = new CToggle(b,c,r,s_bFullscreen,s_oStage),
            q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
            u = new createjs.Shape;
            u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            s_oStage.addChild(u);
            createjs.Tween.get(u).to({
                alpha: 0
            }, 400).call(function() {
    //a208<
    if (__begin&&__YY__.S("a208", arguments)) {if(__E){eval(__YY__.gE("a208"));}else{debugger;}}
                u.visible = !1
            });
            this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
        }
        ;
        this.refreshButtonPos = function(r, m) {
    //a209<
    if (__begin&&__YY__.S("a209", arguments)) {if(__E){eval(__YY__.gE("a209"));}else{debugger;}}
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || g.setPosition(e - r, m + f);
            l && screenfull.isEnabled && q.setPosition(b + r, c + m);
            SHOW_CREDITS && t.setPosition(a + r, d + m)
        }
        ;
        this.unload = function() {
    //a210<
    if (__begin&&__YY__.S("a210", arguments)) {if(__E){eval(__YY__.gE("a210"));}else{debugger;}}
            h.unload();
            h = null;
            SHOW_CREDITS && t.unload();
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
                g.unload(),
                g = null;
            l && screenfull.isEnabled && q.unload();
            s_oStage.removeAllChildren();
            s_oMenu = null
        }
        ;
        this._onButPlayRelease = function() {
    //a211<
    if (__begin&&__YY__.S("a211", arguments)) {if(__E){eval(__YY__.gE("a211"));}else{debugger;}}
            this.unload();
            s_oMain.gotoGame();
            $(s_oMain).trigger("start_session")
        }
        ;
        this._onCredits = function() {
    //a212<
    if (__begin&&__YY__.S("a212", arguments)) {if(__E){eval(__YY__.gE("a212"));}else{debugger;}}
            new CCreditsPanel
        }
        ;
        this._onAudioToggle = function() {
    //a213<
    if (__begin&&__YY__.S("a213", arguments)) {if(__E){eval(__YY__.gE("a213"));}else{debugger;}}
            Howler.mute(s_bAudioActive);
            s_bAudioActive = !s_bAudioActive
        }
        ;
        this.resetFullscreenBut = function() {
    //a214<
    if (__begin&&__YY__.S("a214", arguments)) {if(__E){eval(__YY__.gE("a214"));}else{debugger;}}
            l && screenfull.isEnabled && q.setActive(s_bFullscreen)
        }
        ;
        this._onFullscreenRelease = function() {
    //a215<
    if (__begin&&__YY__.S("a215", arguments)) {if(__E){eval(__YY__.gE("a215"));}else{debugger;}}
            s_bFullscreen ? n.call(window.document) : l.call(window.document.documentElement);
            sizeHandler()
        }
        ;
        s_oMenu = this;
        this._init()
    }
    var s_oMenu = null;
    function CGame(a) {
    //a216<
    if (__begin&&__YY__.S("a216", arguments)) {if(__E){eval(__YY__.gE("a216"));}else{debugger;}}
        var d = !1, b, c, e, f, q, l, n, t, v, h, g, u, r, m, z, E, p, J, I, F, G, P, y, H, X, S;
        this._init = function() {
    //a217<
    if (__begin&&__YY__.S("a217", arguments)) {if(__E){eval(__YY__.gE("a217"));}else{debugger;}}
            e = MAX_BET;
            f = -1;
            t = c = 0;
            m = [];
            for (var x = 0; x < BET_OCCURRENCE.length; x++)
                for (var w = 0; w < BET_OCCURRENCE[x]; w++)
                    m.push(x);
            s_oTweenController = new CTweenController;
            P = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
            s_oStage.addChild(P);
            x = s_oSpriteLibrary.getSprite("gui_bg");
            w = createBitmap(x);
            w.y = CANVAS_HEIGHT - x.height;
            s_oStage.addChild(w);
            G = new createjs.Container;
            s_oStage.addChild(G);
            y = new CInterface(TOTAL_MONEY);
            y.displayMsg(TEXT_DISPLAY_MSG_WAITING_BET, TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET);
            H = new CSeat;
            H.setCredit(TOTAL_MONEY);
            this.reset(!1);
            E = new CVector2;
            E.set(1214, 228);
            p = new CVector2;
            p.set(CANVAS_WIDTH / 2 + 100, 230);
            J = new CVector2;
            J.set(418, 820);
            I = new CVector2;
            I.set(0, -CANVAS_HEIGHT);
            F = new CVector2(454,230);
            r = [H.getCardOffset(), p];
            S = new CGameOver;
            H.getCredit() < FICHES_VALUE[0] ? (this._gameOver(),
            this.changeState(-1)) : d = !0;
            z = new CVector2(E.getX(),E.getY());
            X = new CMsgBox;
            this.changeState(STATE_GAME_WAITING_FOR_BET)
        }
        ;
        this.unload = function() {
    //a218<
    if (__begin&&__YY__.S("a218", arguments)) {if(__E){eval(__YY__.gE("a218"));}else{debugger;}}
            d = !1;
            for (var x = 0; x < v.length; x++)
                v[x].unload();
            y.unload();
            S.unload();
            X.unload();
            s_oStage.removeAllChildren()
        }
        ;
        this.reset = function(x) {
    //a219<
    if (__begin&&__YY__.S("a219", arguments)) {if(__E){eval(__YY__.gE("a219"));}else{debugger;}}
            b = !1;
            l = n = q = c = 0;
            H.reset();
            v = [];
            v.splice(0);
            y.reset();
            y.enableBetFiches(x);
            this.shuffleCard()
        }
        ;
        this.setMoney = function(x) {
    //a220<
    if (__begin&&__YY__.S("a220", arguments)) {if(__E){eval(__YY__.gE("a220"));}else{debugger;}}
            H.setCredit(x);
            y.refreshCredit(x);
            S.hide()
        }
        ;
        this.shuffleCard = function() {
    //a221<
    if (__begin&&__YY__.S("a221", arguments)) {if(__E){eval(__YY__.gE("a221"));}else{debugger;}}
            g = [];
            g = s_oGameSettings.getShuffledCardDeck()
        }
        ;
        this.changeState = function(x) {
    //a222<
    if (__begin&&__YY__.S("a222", arguments)) {if(__E){eval(__YY__.gE("a222"));}else{debugger;}}
            f = x;
            if (f === STATE_GAME_DEALING) {
                var w = Q < 2 * H.getTotBet() ? WIN_OCCURRENCE : 100 * Math.random();
                x = H.getBetArray();
                for (var A = 0, B = 0; B < x.length; B++)
                    0 < x[B] && A++;
                if (w < WIN_OCCURRENCE) {
                    if (1 === A) {
                        for (B = 0; B < x.length; B++) {
                            var K = 0;
                            if (0 !== x[B]) {
                                K = B;
                                break
                            }
                        }
                        B = K
                    } else {
                        do
                            B = m[Math.floor(Math.random() * m.length)];
                        while (0 === x[B])
                    }
                    do
                        6 > g.length && this.shuffleCard(),
                        x = [],
                        x.push(g.splice(0, 1)),
                        x.push(g.splice(0, 1)),
                        w = [],
                        w.push(g.splice(0, 1)),
                        w.push(g.splice(0, 1)),
                        K = this._simulateHand(x, w);
                    while (B !== K)
                } else {
                    if (3 === A)
                        w = Math.random(),
                        B = .5 < w ? BET_BANKER : BET_PLAYER;
                    else {
                        B = [];
                        for (w = 0; w < x.length; w++)
                            0 === x[w] && B.push(w);
                        w = Math.floor(Math.random() * B.length);
                        B = B[w]
                    }
                    do
                        6 > g.length && this.shuffleCard(),
                        x = [],
                        x.push(g.splice(0, 1)),
                        x.push(g.splice(0, 1)),
                        w = [],
                        w.push(g.splice(0, 1)),
                        w.push(g.splice(0, 1)),
                        K = this._simulateHand(x, w);
                    while (B !== K)
                }
                u = [];
                for (B = 0; B < x.length; B++)
                    u[B] = x[B];
                h = [];
                for (B = 0; B < w.length; B++)
                    h[B] = w[B];
                y.disableButtons();
                y.displayMsg(TEXT_DISPLAY_MSG_DEALING, "");
                this._dealing()
            }
        }
        ;
        this._simulateHand = function(x, w) {
    //a223<
    if (__begin&&__YY__.S("a223", arguments)) {if(__E){eval(__YY__.gE("a223"));}else{debugger;}}
            for (var A = 0, B = 0, K = 0; K < x.length; K++)
                A += s_oGameSettings.getCardValue(x[K]),
                B += s_oGameSettings.getCardValue(w[K]);
            A %= 10;
            B %= 10;
            if (7 < B)
                return A = B > A ? WIN_DEALER : B === A ? WIN_TIE : WIN_PLAYER;
            K = !1;
            if (7 < A)
                return WIN_PLAYER;
            if (6 > A) {
                var U = g.splice(0, 1)
                  , k = s_oGameSettings.getCardValue(U);
                x.push(U);
                A = (A + k) % 10;
                3 > B ? K = !0 : 3 === B && 8 !== k ? K = !0 : 4 === B && 1 < k && 8 > k ? K = !0 : 5 === B && 3 < k && 8 > k ? K = !0 : 6 !== B || 6 !== k && 7 !== k || (K = !1);
                K && (U = g.splice(0, 1),
                w.push(U),
                B += s_oGameSettings.getCardValue(U),
                B %= 10)
            } else
                6 > B && (U = g.splice(0, 1),
                w.push(U),
                B += s_oGameSettings.getCardValue(U),
                B %= 10);
            return B === A ? WIN_TIE : B > A ? WIN_DEALER : WIN_PLAYER
        }
        ;
        this.cardFromDealerArrived = function (x, w, A) {
//a224<
    if (__begin&&__YY__.S("a224", arguments)) {if(__E){eval(__YY__.gE("a224"));}else{debugger;}}
  if (!w) {
    l += x.getValue();
  } else {
    n += x.getValue();
  }
  if (A < 3) {
    s_oGame._dealing();
  } else {
    l %= 10;
    n %= 10;
    y.refreshCardValue(n, l);
    if (u.length === 1) {
      x = u.splice(0, 1)[0];
      //fixme//
      // u.splice(0, 1)[0];
      w = new CCard(E.getX(),E.getY(),G);
      w.setInfo(z, H.getAttachCardOffset(), x, s_oGameSettings.getCardValue(x), false, q);
      w.addEventListener(ON_CARD_ANIMATION_ENDING, s_oGame.cardFromDealerArrived);
      H.newCardDealed();
      q++;
      //fixme//
      debugger;
      v.push(w);
    } else if (h.length === 1) {
      q++;
      A = new CVector2(p.getX() + CARD_WIDTH / 2 * 2,p.getY());
      x = h.splice(0, 1);
      w = new CCard(E.getX(),E.getY(),G);
      w.setInfo(z, A, x, s_oGameSettings.getCardValue(x), true, q);
      w.addEventListener(ON_CARD_ANIMATION_ENDING, s_oGame.cardFromDealerArrived);
      //fixme//
      debugger;
      v.push(w);
    } else {
      s_oGame._showWin();
    }
  }
};
        this._showWin = function() {
    //a225<
    if (__begin&&__YY__.S("a225", arguments)) {if(__E){eval(__YY__.gE("a225"));}else{debugger;}}
            var x = n === l ? BET_TIE : n > l ? BET_BANKER : BET_PLAYER;
            // var w = H.getBetArray()
            //   , A = !1;
            // if (x === BET_TIE) {
            //     if (0 < w[BET_TIE]) {
            //         var B = H.getPotentialWin(BET_TIE);
            //         this._playerWin(B, x, !0);
            //         this._playerWin(w[BET_BANKER], BET_BANKER, !1);
            //         this._playerWin(w[BET_PLAYER], BET_PLAYER, !1);
            //         A = !0;
            //         y.showWin(BET_TIE, B, TEXT_WIN)
            //     } else
            //         B = w[BET_BANKER] + w[BET_PLAYER],
            //         H.increaseCredit(B),
            //         Q -= B;
            //     y.showWin(BET_BANKER, w[BET_BANKER], TEXT_PUSH);
            //     y.showWin(BET_PLAYER, w[BET_PLAYER], TEXT_PUSH)
            // } else
            //     for (var K = 0; K < w.length; K++)
            //         0 < w[K] && (B = 0,
            //         x === K ? (this._playerWin(H.getPotentialWin(K), x, !0),
            //         B = H.getPotentialWin(K),
            //         A = !0) : this._playerLose(K, !1),
            //         y.showWin(K, B, 0 < B ? TEXT_WIN : TEXT_NO_WIN));
            // A ? playSound("win", 1, !1) : (playSound("lose", 1, !1),
            // this._playerLose(x, !0));

            y.showWin(2,0,TEXT_WIN);

            setTimeout(function() {
                //fixme//
    //a226<
    if (__begin&&__YY__.S("a226", arguments)) {if(__E){eval(__YY__.gE("a226"));}else{debugger;}}
                s_oGame._onEndHand(x)
            }, TIME_END_HAND)

        }
        ;
        this._playerWin = function(x, w, A) {
    //a227<
    if (__begin&&__YY__.S("a227", arguments)) {if(__E){eval(__YY__.gE("a227"));}else{debugger;}}
            H.increaseCredit(x);
            Q -= x;
            A && y.displayMsg(TEXT_DISPLAY_MSG_PLAYER_WIN, TEXT_BET[w] === BET_TIE ? TEXT_DISPLAY_TIE : TEXT_OUTCOME + " " + TEXT_BET[w]);
            H.initMovement(w, J.getX(), J.getY())
        }
        ;
        this._playerLose = function(x, w) {
    //a228<
    if (__begin&&__YY__.S("a228", arguments)) {if(__E){eval(__YY__.gE("a228"));}else{debugger;}}
            w ? y.displayMsg(TEXT_DISPLAY_MSG_PLAYER_LOSE, TEXT_BET[x] === BET_TIE ? TEXT_DISPLAY_TIE : TEXT_OUTCOME + " " + TEXT_BET[x]) : H.initMovement(x, I.getX(), I.getY())
        }
        ;
        this._dealing = function() {
  if (__begin && __YY__.S("a229", arguments)) {
    if (__E) {
      eval(__YY__.gE("a229"));
    } else {
      debugger;
    }
  }
  console.log(q,2 * r.length)
  var __r = YY.deepCopy(r[0])
  r.push(__r)
  if (q < 2 * r.length) {
    var x = new CCard(E.getX(),E.getY(),G);
    var x = new CCard(E.getX(),E.getY(),G);

    if (1 === q % r.length) {
      var w = new CVector2(p.getX() + CARD_WIDTH / 2 * (1 < q ? 1 : 0),p.getY());
      var A = 1;
      // h.splice(0, 1)[0];
      x.setInfo(z, w, A, s_oGameSettings.getCardValue(A), true, q);
    } else {
      A = 1;
      // u.splice(0, 1)[0];
      x.setInfo(z, H.getAttachCardOffset(), A, s_oGameSettings.getCardValue(A), false, q);
      H.newCardDealed();
    }
    //fixme//
    debugger;
    v.push(x);
    var __q = q++
    console.log(__q);
    if(__q == 1){
        v.push(x)
    }
    x.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
    x.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
    playSound("card", 1, false);
  }
};
        this._onEndHand = function(x) {
    //a230<
    if (__begin&&__YY__.S("a230", arguments)) {if(__E){eval(__YY__.gE("a230"));}else{debugger;}}
            y.addHistoryRow(l, n, x);
            x = new CVector2(F.getX(),F.getY());
            for (var w = 0; w < v.length; w++)
                v[w].initRemoving(x),
                v[w].hideCard();
            y.clearCardValueText();
            c = 0;
            s_oGame.changeState(STATE_GAME_SHOW_WINNER);
            playSound("fiche_collect", 1, !1);
            t++;
            t === AD_SHOW_COUNTER && (t = 0,
            $(s_oMain).trigger("show_interlevel_ad"));
            $(s_oMain).trigger("save_score", [H.getCredit()])
        }
        ;
        this.setBet = function(x, w, A) {
    //a231<
    if (__begin&&__YY__.S("a231", arguments)) {if(__E){eval(__YY__.gE("a231"));}else{debugger;}}
            b && (b = !1,
            this.clearBets());
            var B = H.getTotBet();
            B + x <= e && x <= H.getCredit() && ((B + x).toFixed(2),
            H.decreaseCredit(x),
            Q += x,
            H.bet(x, A, w),
            y.enable(!0, !1, !1, !1, !1),
            y.refreshCredit(H.getCredit()))
        }
        ;
        this._gameOver = function() {
    //a232<
    if (__begin&&__YY__.S("a232", arguments)) {if(__E){eval(__YY__.gE("a232"));}else{debugger;}}
            S.show()
        }
        ;
        this.onDeal = function() {
    //a233<
    if (__begin&&__YY__.S("a233", arguments)) {if(__E){eval(__YY__.gE("a233"));}else{debugger;}}
            H.getTotBet() < MIN_BET ? (X.show(TEXT_ERROR_MIN_BET),
            y.enableBetFiches(!1),
            y.enable(!0)) : ($(s_oMain).trigger("bet_placed", H.getTotBet()),
            H.calculatePotentialWins(),
            this.changeState(STATE_GAME_DEALING))
        }
        ;
        this.clearBets = function() {
    //a234<
    if (__begin&&__YY__.S("a234", arguments)) {if(__E){eval(__YY__.gE("a234"));}else{debugger;}}
            var x = H.getStartingBet();
            if (0 < x) {
                H.clearBet();
                H.increaseCredit(x);
                Q -= x;
                y.refreshCredit(H.getCredit());
                var w = H.checkIfRebetIsPossible();
                y.enableBetFiches(w);
                $(s_oMain).trigger("clear_bet", x)
            }
        }
        ;
        this.rebet = function() {
    //a235<
    if (__begin&&__YY__.S("a235", arguments)) {if(__E){eval(__YY__.gE("a235"));}else{debugger;}}
            this.clearBets();
            var x = H.rebet();
            Q -= x;
            y.enable(!0, !1, !1, !1, !1);
            y.refreshCredit(H.getCredit());
            c = BET_TIME;
            b = !0
        }
        ;
        this._onRemoveCard = function(x) {
    //a236<
    if (__begin&&__YY__.S("a236", arguments)) {if(__E){eval(__YY__.gE("a236"));}else{debugger;}}
            x.unload();
            y.displayMsg(TEXT_DISPLAY_MSG_WAITING_BET, TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET)
        }
        ;
        this.onExit = function() {
    //a237<
    if (__begin&&__YY__.S("a237", arguments)) {if(__E){eval(__YY__.gE("a237"));}else{debugger;}}
            this.unload();
            $(s_oMain).trigger("end_session");
            $(s_oMain).trigger("share_event", H.getCredit());
            s_oMain.gotoMenu()
        }
        ;
        this.getState = function() {
    //a238<
    if (__begin&&__YY__.S("a238", arguments)) {if(__E){eval(__YY__.gE("a238"));}else{debugger;}}
            return f
        }
        ;
        this._updateDealing = function() {
    //a239<
    if (__begin&&__YY__.S("a239", arguments)) {if(__E){eval(__YY__.gE("a239"));}else{debugger;}}
            for (var x = 0; x < v.length; x++)
                v[x].update()
        }
        ;
        this._updateShowWinner = function() {
    //a240<
    if (__begin&&__YY__.S("a240", arguments)) {if(__E){eval(__YY__.gE("a240"));}else{debugger;}}
            H.updateFichesController(s_iTimeElaps);
            for (var x = 0; x < v.length; x++)
                v[x].update();
            c += s_iTimeElaps;
            c > TIME_END_HAND && (c = 0,
            x = H.checkIfRebetIsPossible(),
            this.reset(x),
            y.reset(),
            H.getCredit() < FICHES_VALUE[0] ? (this._gameOver(),
            this.changeState(-1)) : this.changeState(STATE_GAME_WAITING_FOR_BET),
            y.refreshCredit(H.getCredit()))
        }
        ;
        this.update = function() {
    //a241<
    // if (__begin&&__YY__.S("a241", arguments)) {if(__E){eval(__YY__.gE("a241"));}else{debugger;}}
            if (!1 !== d)
                switch (f) {
                case STATE_GAME_DEALING:
                    this._updateDealing();
                    break;
                case STATE_GAME_SHOW_WINNER:
                    this._updateShowWinner()
                }
        }
        ;
        s_oGame = this;
        TOTAL_MONEY = a.money;
        MIN_BET = a.min_bet;
        MAX_BET = a.max_bet;
        MULTIPLIERS = a.multiplier;
        BET_TIME = a.bet_time;
        BLACKJACK_PAYOUT = a.blackjack_payout;
        WIN_OCCURRENCE = a.win_occurrence;
        BET_OCCURRENCE = a.bet_occurrence;
        var Q = a.game_cash;
        TIME_END_HAND = a.time_show_hand;
        AD_SHOW_COUNTER = a.ad_show_counter;
        this._init()
    }
    var s_oGame, s_oTweenController;
    function CInterface(a) {
    //a242<
    if (__begin&&__YY__.S("a242", arguments)) {if(__E){eval(__YY__.gE("a242"));}else{debugger;}}
        var d, b, c, e, f, q, l, n, t, v, h, g, u, r, m, z, E = null, p, J, I, F, G, P, y, H, X, S, Q = null, x = null;
        this._init = function(w) {
    //a243<
    if (__begin&&__YY__.S("a243", arguments)) {if(__E){eval(__YY__.gE("a243"));}else{debugger;}}
            var A = s_oSpriteLibrary.getSprite("but_exit");
            f = CANVAS_WIDTH - A.width / 2 - 10;
            q = A.height / 2 + 10;
            u = new CGfxButton(f,q,A,s_oStage);
            u.addEventListener(ON_MOUSE_UP, this._onExit, this);
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
                l = u.getX() - A.width - 10,
                n = A.height / 2 + 10,
                E = new CToggle(l,n,s_oSpriteLibrary.getSprite("audio_icon"),s_bAudioActive,!0),
                E.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            A = window.document;
            var B = A.documentElement;
            Q = B.requestFullscreen || B.mozRequestFullScreen || B.webkitRequestFullScreen || B.msRequestFullscreen;
            x = A.exitFullscreen || A.mozCancelFullScreen || A.webkitExitFullscreen || A.msExitFullscreen;
            !1 === ENABLE_FULLSCREEN && (Q = !1);
            Q && screenfull.isEnabled && (A = s_oSpriteLibrary.getSprite("but_fullscreen"),
            null === E ? (d = u.getX() - A.width / 2 - 10,
            b = A.height / 2 + 10) : (d = l - A.width / 2 - 10,
            b = A.height / 2 + 10),
            S = new CToggle(d,b,A,s_bFullscreen,!0),
            S.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
            A = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
            A.x = 290;
            A.y = 6;
            s_oStage.addChild(A);
            H = new CGfxButton(CANVAS_WIDTH / 2,590,s_oSpriteLibrary.getSprite("bet_player"),s_oStage);
            H.addEventListener(ON_MOUSE_UP, this._onButPlayerRelease, this);
            y = new CGfxButton(CANVAS_WIDTH / 2,482,s_oSpriteLibrary.getSprite("bet_banker"),s_oStage);
            y.addEventListener(ON_MOUSE_UP, this._onButBankerRelease, this);
            P = new CGfxButton(CANVAS_WIDTH / 2,400,s_oSpriteLibrary.getSprite("bet_tie"),s_oStage);
            P.addEventListener(ON_MOUSE_UP, this._onButTieRelease, this);
            A = s_oSpriteLibrary.getSprite("but_clear");
            r = new CGuiButton(939,CANVAS_HEIGHT - 31,A,TEXT_CLEAR,FONT_GAME_1,"#ffffff",17,s_oStage);
            r.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
            A = s_oSpriteLibrary.getSprite("but_rebet");
            m = new CGuiButton(1112,CANVAS_HEIGHT - A.height / 2,A,TEXT_REBET,FONT_GAME_1,"#ffffff",17,s_oStage);
            m.disable();
            m.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
            F = new CTLText(s_oStage,412,12,190,50,24,"left","#ffde00",FONT_GAME_2,1,0,0," ",!0,!0,!0,!1);
            G = new CTLText(s_oStage,412,64,190,40,19,"left","#ffde00",FONT_GAME_2,1,0,0," ",!0,!0,!0,!1);
            J = new createjs.Text("","20px " + FONT_GAME_1,"#fff");
            J.shadow = new createjs.Shadow("#000000",2,2,1);
            J.x = 910;
            J.y = 180;
            J.textAlign = "right";
            s_oStage.addChild(J);
            I = new createjs.Text("","20px " + FONT_GAME_1,"#fff");
            I.shadow = new createjs.Shadow("#000000",2,2,1);
            I.x = 658;
            I.y = 180;
            I.textAlign = "right";
            s_oStage.addChild(I);
            new CTLText(s_oStage,350,CANVAS_HEIGHT - 90,110,40,30,"right","#ffde00",FONT_GAME_2,1,0,0,TEXT_MONEY + ":",!0,!0,!1,!1);
            p = new CTLText(s_oStage,470,CANVAS_HEIGHT - 90,190,40,30,"left","#ffde00",FONT_GAME_2,1,0,0,formatValue(w),!0,!0,!1,!1);
            A = s_oSpriteLibrary.getSprite("but_deal");
            z = new CGuiButton(1282,CANVAS_HEIGHT - A.height / 2,A,TEXT_DEAL,FONT_GAME_1,"#ffffff",26,s_oStage);
            z.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
            g = [];
            g[BET_TIE] = new CWinDisplay(CANVAS_WIDTH + 100,360,s_oStage);
            g[BET_BANKER] = new CWinDisplay(CANVAS_WIDTH + 100,460,s_oStage);
            g[BET_PLAYER] = new CWinDisplay(CANVAS_WIDTH + 100,580,s_oStage);
            POS_BET[BET_TIE] = {
                x: P.getX(),
                y: P.getY() + 15
            };
            POS_BET[BET_BANKER] = {
                x: y.getX(),
                y: y.getY() + 35
            };
            POS_BET[BET_PLAYER] = {
                x: H.getX(),
                y: H.getY() + 35
            };
            w = [{
                x: 387,
                y: CANVAS_HEIGHT - 24
            }, {
                x: 467,
                y: CANVAS_HEIGHT - 24
            }, {
                x: 547,
                y: CANVAS_HEIGHT - 24
            }, {
                x: 627,
                y: CANVAS_HEIGHT - 24
            }, {
                x: 707,
                y: CANVAS_HEIGHT - 24
            }, {
                x: 787,
                y: CANVAS_HEIGHT - 24
            }];
            h = [];
            for (B = 0; B < NUM_FICHES; B++)
                h[B] = new CFiche(w[B].x,w[B].y,B,FICHES_VALUE[B],1,!0,s_oStage),
                h[B].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, [FICHES_VALUE[B], B]);
            t = FICHES_VALUE[0];
            v = 0;
            FICHE_WIDTH = A.width;
            c = 10;
            e = 265;
            X = new CHistory(c,e,s_oStage);
            this.disableButtons();
            this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
        }
        ;
        this.unload = function() {
    //a244<
    if (__begin&&__YY__.S("a244", arguments)) {if(__E){eval(__YY__.gE("a244"));}else{debugger;}}
            u.unload();
            u = null;
            !1 === DISABLE_SOUND_MOBILE && (E.unload(),
            E = null);
            Q && screenfull.isEnabled && S.unload();
            r.unload();
            y.unload();
            H.unload();
            P.unload();
            z.unload();
            m.unload();
            s_oInterface = null
        }
        ;
        this.refreshButtonPos = function(w, A) {
    //a245<
    if (__begin&&__YY__.S("a245", arguments)) {if(__E){eval(__YY__.gE("a245"));}else{debugger;}}
            u.setPosition(f - w, A + q);
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || E.setPosition(l - w, A + n);
            Q && screenfull.isEnabled && S.setPosition(d - w, b + A);
            X.setPosition(c + w, e)
        }
        ;
        this.reset = function() {
    //a246<
    if (__begin&&__YY__.S("a246", arguments)) {if(__E){eval(__YY__.gE("a246"));}else{debugger;}}
            this.disableButtons()
        }
        ;
        this.enableBetFiches = function(w) {
    //a247<
    if (__begin&&__YY__.S("a247", arguments)) {if(__E){eval(__YY__.gE("a247"));}else{debugger;}}
            for (var A = 0; A < NUM_FICHES; A++)
                h[A].enable();
            r.enable();
            w && m.enable();
            P.enable();
            y.enable();
            H.enable()
        }
        ;
        this.disableBetFiches = function() {
    //a248<
    if (__begin&&__YY__.S("a248", arguments)) {if(__E){eval(__YY__.gE("a248"));}else{debugger;}}
            for (var w = 0; w < NUM_FICHES; w++)
                h[w].disable();
            r.disable();
            m.disable();
            P.disable();
            y.disable();
            H.disable()
        }
        ;
        this.disableButtons = function() {
    //a249<
    if (__begin&&__YY__.S("a249", arguments)) {if(__E){eval(__YY__.gE("a249"));}else{debugger;}}
            z.disable()
        }
        ;
        this.enable = function(w) {
    //a250<
    if (__begin&&__YY__.S("a250", arguments)) {if(__E){eval(__YY__.gE("a250"));}else{debugger;}}
            w ? z.enable() : z.disable()
        }
        ;
        this.refreshCredit = function(w) {
    //a251<
    if (__begin&&__YY__.S("a251", arguments)) {if(__E){eval(__YY__.gE("a251"));}else{debugger;}}
            p.refreshText(formatValue(w))
        }
        ;
        this.refreshCardValue = function(w, A) {
    //a252<
    if (__begin&&__YY__.S("a252", arguments)) {if(__E){eval(__YY__.gE("a252"));}else{debugger;}}
            J.text = "" + w;
            I.text = "" + A
        }
        ;
        this.displayMsg = function(w, A) {
    //a253<
    if (__begin&&__YY__.S("a253", arguments)) {if(__E){eval(__YY__.gE("a253"));}else{debugger;}}
            F.refreshText(w);
            G.refreshText(A)
        }
        ;
        this.clearCardValueText = function() {
    //a254<
    if (__begin&&__YY__.S("a254", arguments)) {if(__E){eval(__YY__.gE("a254"));}else{debugger;}}
            J.text = "";
            I.text = ""
        }
        ;
        this._onFicheClicked = function(w) {
    //a255<
    if (__begin&&__YY__.S("a255", arguments)) {if(__E){eval(__YY__.gE("a255"));}else{debugger;}}
            for (var A = 0; A < h.length; A++)
                h[A].select(!1);
            h[w[1]].select(!0);
            t = w[0];
            v = w[1]
        }
        ;
        this.showWin = function(w, A, B) {
    //a256<
    if (__begin&&__YY__.S("a256", arguments)) {if(__E){eval(__YY__.gE("a256"));}else{debugger;}}
            g[w].show(TEXT_SHOW_WIN[w], A, B)
        }
        ;
        this.hideAllWins = function() {
    //a257<
    if (__begin&&__YY__.S("a257", arguments)) {if(__E){eval(__YY__.gE("a257"));}else{debugger;}}
            for (var w = 0; w < g.length; w++)
                g[w].hide()
        }
        ;
        this.addHistoryRow = function(w, A, B) {
    //a258<
    if (__begin&&__YY__.S("a258", arguments)) {if(__E){eval(__YY__.gE("a258"));}else{debugger;}}
            X.addHistoryRow(w, A, B)
        }
        ;
        this._onButTieRelease = function() {
    //a259<
    if (__begin&&__YY__.S("a259", arguments)) {if(__E){eval(__YY__.gE("a259"));}else{debugger;}}
            this.hideAllWins();
            s_oGame.setBet(t, v, BET_TIE)
        }
        ;
        this._onButBankerRelease = function() {
    //a260<
    if (__begin&&__YY__.S("a260", arguments)) {if(__E){eval(__YY__.gE("a260"));}else{debugger;}}
            this.hideAllWins();
            s_oGame.setBet(t, v, BET_BANKER)
        }
        ;
        this._onButPlayerRelease = function() {
    //a261<
    if (__begin&&__YY__.S("a261", arguments)) {if(__E){eval(__YY__.gE("a261"));}else{debugger;}}
            this.hideAllWins();
            s_oGame.setBet(t, v, BET_PLAYER)
        }
        ;
        this._onButClearRelease = function() {
    //a262<
    if (__begin&&__YY__.S("a262", arguments)) {if(__E){eval(__YY__.gE("a262"));}else{debugger;}}
            s_oGame.clearBets()
        }
        ;
        this._onButRebetRelease = function() {
    //a263<
    if (__begin&&__YY__.S("a263", arguments)) {if(__E){eval(__YY__.gE("a263"));}else{debugger;}}
            this.hideAllWins();
            m.disable();
            s_oGame.rebet()
        }
        ;
        this._onButDealRelease = function() {
    //a264<
    if (__begin&&__YY__.S("a264", arguments)) {if(__E){eval(__YY__.gE("a264"));}else{debugger;}}
            this.disableBetFiches();
            this.disableButtons();
            s_oGame.onDeal()
        }
        ;
        this._onExit = function() {
    //a265<
    if (__begin&&__YY__.S("a265", arguments)) {if(__E){eval(__YY__.gE("a265"));}else{debugger;}}
            s_oGame.onExit()
        }
        ;
        this._onAudioToggle = function() {
    //a266<
    if (__begin&&__YY__.S("a266", arguments)) {if(__E){eval(__YY__.gE("a266"));}else{debugger;}}
            Howler.mute(s_bAudioActive);
            s_bAudioActive = !s_bAudioActive
        }
        ;
        this.resetFullscreenBut = function() {
    //a267<
    if (__begin&&__YY__.S("a267", arguments)) {if(__E){eval(__YY__.gE("a267"));}else{debugger;}}
            Q && screenfull.isEnabled && S.setActive(s_bFullscreen)
        }
        ;
        this._onFullscreenRelease = function() {
    //a268<
    if (__begin&&__YY__.S("a268", arguments)) {if(__E){eval(__YY__.gE("a268"));}else{debugger;}}
            s_bFullscreen ? x.call(window.document) : Q.call(window.document.documentElement);
            sizeHandler()
        }
        ;
        s_oInterface = this;
        this._init(a);
        return this
    }
    var s_oInterface = null;
    function CTweenController() {
    //a269<
    if (__begin&&__YY__.S("a269", arguments)) {if(__E){eval(__YY__.gE("a269"));}else{debugger;}}
        this.tweenValue = function(a, d, b) {
    //a270<
    if (__begin&&__YY__.S("a270", arguments)) {if(__E){eval(__YY__.gE("a270"));}else{debugger;}}
            return a + b * (d - a)
        }
        ;
        this.easeLinear = function(a, d, b, c) {
    //a271<
    if (__begin&&__YY__.S("a271", arguments)) {if(__E){eval(__YY__.gE("a271"));}else{debugger;}}
            return b * a / c + d
        }
        ;
        this.easeInCubic = function(a, d, b, c) {
    //a272<
    if (__begin&&__YY__.S("a272", arguments)) {if(__E){eval(__YY__.gE("a272"));}else{debugger;}}
            c = (a /= c) * a * a;
            return d + b * c
        }
        ;
        this.easeBackInQuart = function(a, d, b, c) {
    //a273<
    if (__begin&&__YY__.S("a273", arguments)) {if(__E){eval(__YY__.gE("a273"));}else{debugger;}}
            c = (a /= c) * a;
            return d + b * (2 * c * c + 2 * c * a + -3 * c)
        }
        ;
        this.easeInBack = function(a, d, b, c) {
    //a274<
    if (__begin&&__YY__.S("a274", arguments)) {if(__E){eval(__YY__.gE("a274"));}else{debugger;}}
            return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
        }
        ;
        this.easeOutCubic = function(a, d, b, c) {
    //a275<
    if (__begin&&__YY__.S("a275", arguments)) {if(__E){eval(__YY__.gE("a275"));}else{debugger;}}
            return b * ((a = a / c - 1) * a * a + 1) + d
        }
    }
    function CSeat() {
    //a276<
    if (__begin&&__YY__.S("a276", arguments)) {if(__E){eval(__YY__.gE("a276"));}else{debugger;}}
        var a, d, b, c, e, f, q, l, n, t, v;
        this._init = function() {
    //a277<
    if (__begin&&__YY__.S("a277", arguments)) {if(__E){eval(__YY__.gE("a277"));}else{debugger;}}
            n = new createjs.Container;
            n.x = CANVAS_WIDTH / 2 - 150;
            n.y = 230;
            s_oStage.addChild(n);
            v = [];
            for (var h = 0; 3 > h; h++)
                v[h] = new CFichesController;
            e = 0;
            this.reset();
            t = new CVector2;
            t.set(0, 0);
            l = new CVector2(t.getX(),t.getY())
        }
        ;
        this.unload = function() {
    //a278<
    if (__begin&&__YY__.S("a278", arguments)) {if(__E){eval(__YY__.gE("a278"));}else{debugger;}}
            s_oStage.removeChild(n)
        }
        ;
        this.addEventListener = function(h, g, u) {
    //a279<
    if (__begin&&__YY__.S("a279", arguments)) {if(__E){eval(__YY__.gE("a279"));}else{debugger;}}}
        ;
        this.reset = function() {
    //a280<
    if (__begin&&__YY__.S("a280", arguments)) {if(__E){eval(__YY__.gE("a280"));}else{debugger;}}
            for (var h = c = b = d = a = 0; h < v.length; h++)
                v[h].reset();
            f = [];
            for (h = 0; 3 > h; h++)
                f[h] = []
        }
        ;
        this.clearBet = function() {
    //a281<
    if (__begin&&__YY__.S("a281", arguments)) {if(__E){eval(__YY__.gE("a281"));}else{debugger;}}
            b = d = a = 0;
            f = [];
            for (var h = 0; 3 > h; h++)
                v[h].reset(),
                f[h] = []
        }
        ;
        this.setCredit = function(h) {
    //a282<
    if (__begin&&__YY__.S("a282", arguments)) {if(__E){eval(__YY__.gE("a282"));}else{debugger;}}
            e = h
        }
        ;
        this.increaseCredit = function(h) {
    //a283<
    if (__begin&&__YY__.S("a283", arguments)) {if(__E){eval(__YY__.gE("a283"));}else{debugger;}}
            e += h
        }
        ;
        this.bet = function(h, g, u) {
    //a284<
    if (__begin&&__YY__.S("a284", arguments)) {if(__E){eval(__YY__.gE("a284"));}else{debugger;}}
            u = 0;
            switch (g) {
            case BET_TIE:
                u = a += h;
                break;
            case BET_BANKER:
                u = d += h;
                break;
            case BET_PLAYER:
                u = b += h
            }
            v[g].createFichesPile(u.toFixed(1), POS_BET[g].x, POS_BET[g].y)
        }
        ;
        this.calculatePotentialWins = function() {
    //a285<
    if (__begin&&__YY__.S("a285", arguments)) {if(__E){eval(__YY__.gE("a285"));}else{debugger;}}
            q = [];
            q[BET_TIE] = a * MULTIPLIERS[BET_TIE];
            q[BET_BANKER] = d * MULTIPLIERS[BET_BANKER];
            q[BET_PLAYER] = b * MULTIPLIERS[BET_PLAYER];
            v[0].setPrevValue(a);
            v[1].setPrevValue(d);
            v[2].setPrevValue(b)
        }
        ;
        this.decreaseCredit = function(h) {
    //a286<
    if (__begin&&__YY__.S("a286", arguments)) {if(__E){eval(__YY__.gE("a286"));}else{debugger;}}
            e -= h
        }
        ;
        this.refreshFiches = function(h, g, u, r, m) {
    //a287<
    if (__begin&&__YY__.S("a287", arguments)) {if(__E){eval(__YY__.gE("a287"));}else{debugger;}}
            f[m].push({
                value: h,
                index: g
            });
            v[m].refreshFiches(f[m], u, r)
        }
        ;
        this.initMovement = function(h, g, u) {
    //a288<
    if (__begin&&__YY__.S("a288", arguments)) {if(__E){eval(__YY__.gE("a288"));}else{debugger;}}
            v[h].initMovement(g, u)
        }
        ;
        this.newCardDealed = function() {
    //a289<
    if (__begin&&__YY__.S("a289", arguments)) {if(__E){eval(__YY__.gE("a289"));}else{debugger;}}
            c++
        }
        ;
        this.rebet = function() {
    //a290<
    if (__begin&&__YY__.S("a290", arguments)) {if(__E){eval(__YY__.gE("a290"));}else{debugger;}}
            for (var h = 0, g = 0; g < v.length; g++) {
                var u = parseFloat(v[g].getPrevBet().toFixed(2));
                if (0 < u) {
                    h += u;
                    this.decreaseCredit(u);
                    switch (g) {
                    case BET_TIE:
                        a += u;
                        break;
                    case BET_BANKER:
                        d += u;
                        break;
                    case BET_PLAYER:
                        b += u
                    }
                    v[g].createFichesPile(u, POS_BET[g].x, POS_BET[g].y)
                }
            }
            return h
        }
        ;
        this.checkIfRebetIsPossible = function() {
    //a291<
    if (__begin&&__YY__.S("a291", arguments)) {if(__E){eval(__YY__.gE("a291"));}else{debugger;}}
            for (var h = 0, g = 0; g < v.length; g++) {
                var u = parseFloat(v[g].getPrevBet().toFixed(2));
                h += u
            }
            return h > e ? !1 : !0
        }
        ;
        this.updateFichesController = function(h) {
    //a292<
    if (__begin&&__YY__.S("a292", arguments)) {if(__E){eval(__YY__.gE("a292"));}else{debugger;}}
            for (var g = 0; g < v.length; g++)
                v[g].update(h)
        }
        ;
        this.getAttachCardOffset = function() {
    //a293<
    if (__begin&&__YY__.S("a293", arguments)) {if(__E){eval(__YY__.gE("a293"));}else{debugger;}}
            l.set(n.x + t.getX() + CARD_WIDTH / 2 * c, n.y + t.getY());
            return l
        }
        ;
        this.getTotBet = function() {
    //a294<
    if (__begin&&__YY__.S("a294", arguments)) {if(__E){eval(__YY__.gE("a294"));}else{debugger;}}
            return a + d + b
        }
        ;
        this.getBetArray = function() {
    //a295<
    if (__begin&&__YY__.S("a295", arguments)) {if(__E){eval(__YY__.gE("a295"));}else{debugger;}}
            return [a, d, b]
        }
        ;
        this.getCredit = function() {
    //a296<
    if (__begin&&__YY__.S("a296", arguments)) {if(__E){eval(__YY__.gE("a296"));}else{debugger;}}
            return e
        }
        ;
        this.getCardOffset = function() {
    //a297<
    if (__begin&&__YY__.S("a297", arguments)) {if(__E){eval(__YY__.gE("a297"));}else{debugger;}}
            return t
        }
        ;
        this.getPotentialWin = function(h) {
    //a298<
    if (__begin&&__YY__.S("a298", arguments)) {if(__E){eval(__YY__.gE("a298"));}else{debugger;}}
            return q[h]
        }
        ;
        this.getStartingBet = function() {
    //a299<
    if (__begin&&__YY__.S("a299", arguments)) {if(__E){eval(__YY__.gE("a299"));}else{debugger;}}
            for (var h = 0, g = 0; g < v.length; g++)
                h += v[g].getValue();
            return h
        }
        ;
        this._init()
    }
    function CFichesController() {
    //a300<
    if (__begin&&__YY__.S("a300", arguments)) {if(__E){eval(__YY__.gE("a300"));}else{debugger;}}
        var a, d, b, c, e, f, q, l, n, t, v;
        this._init = function() {
    //a301<
    if (__begin&&__YY__.S("a301", arguments)) {if(__E){eval(__YY__.gE("a301"));}else{debugger;}}
            l = new createjs.Container;
            s_oStage.addChild(l);
            e = new CVector2;
            e.set(l.x, l.y);
            n = new createjs.Container;
            s_oStage.addChild(n);
            v = new CTLText(n,0,0,150,28,28,"center","#000",FONT_GAME_1,1,0,0," ",!0,!0,!1,!1);
            t = new CTLText(n,0,0,150,28,28,"center","#fff",FONT_GAME_1,1,0,0," ",!0,!0,!1,!1);
            b = c = d = 0;
            a = !1
        }
        ;
        this.addEventListener = function(h, g, u) {
    //a302<
    if (__begin&&__YY__.S("a302", arguments)) {if(__E){eval(__YY__.gE("a302"));}else{debugger;}}}
        ;
        this.reset = function() {
    //a303<
    if (__begin&&__YY__.S("a303", arguments)) {if(__E){eval(__YY__.gE("a303"));}else{debugger;}}
            a = !1;
            b = 0;
            l.removeAllChildren();
            l.x = e.getX();
            l.y = e.getY();
            v.refreshText("");
            t.refreshText("")
        }
        ;
        this.setPrevValue = function(h) {
    //a304<
    if (__begin&&__YY__.S("a304", arguments)) {if(__E){eval(__YY__.gE("a304"));}else{debugger;}}
            c = h
        }
        ;
        this.refreshFiches = function(h, g, u) {
    //a305<
    if (__begin&&__YY__.S("a305", arguments)) {if(__E){eval(__YY__.gE("a305"));}else{debugger;}}
            h = h.sortOn("value", "index");
            for (var r = g, m = u, z = b = 0, E = 0; E < h.length; E++)
                new CFiche(r,m,h[E].index,FICHES_VALUE[h[E].index],.85,!1,l),
                m -= 5,
                z++,
                9 < z && (z = 0,
                r += FICHE_WIDTH,
                m = u),
                b += h[E].value;
            playSound("chip", 1, !1);
            t.setX(g);
            t.setY(u + 20);
            t.refreshText(formatValue(b));
            v.setX(g + 2);
            v.setY(u + 22);
            v.refreshText(formatValue(b))
        }
        ;
        this.createFichesPile = function(h, g, u) {
    //a306<
    if (__begin&&__YY__.S("a306", arguments)) {if(__E){eval(__YY__.gE("a306"));}else{debugger;}}
            this.reset();
            var r = [];
            do {
                for (var m = FICHES_VALUE[FICHES_VALUE.length - 1], z = FICHES_VALUE.length - 1; m > h; )
                    z--,
                    m = FICHES_VALUE[z];
                z = Math.floor(h / m);
                for (var E = 0; E < z; E++)
                    r.push({
                        value: m,
                        index: s_oGameSettings.getIndexForFiches(m)
                    });
                m = Math.floor(h / m) === h / m ? 0 : h % m;
                h = m.toFixed(2)
            } while (0 < m);
            this.refreshFiches(r, g, u)
        }
        ;
        this.initMovement = function(h, g) {
    //a307<
    if (__begin&&__YY__.S("a307", arguments)) {if(__E){eval(__YY__.gE("a307"));}else{debugger;}}
            c = b;
            f = new CVector2(l.x,l.y);
            q = new CVector2(h,g);
            t.refreshText("");
            v.refreshText("");
            a = !0
        }
        ;
        this.getValue = function() {
    //a308<
    if (__begin&&__YY__.S("a308", arguments)) {if(__E){eval(__YY__.gE("a308"));}else{debugger;}}
            return b
        }
        ;
        this.getPrevBet = function() {
    //a309<
    if (__begin&&__YY__.S("a309", arguments)) {if(__E){eval(__YY__.gE("a309"));}else{debugger;}}
            return c
        }
        ;
        this.update = function(h) {
    //a310<
    if (__begin&&__YY__.S("a310", arguments)) {if(__E){eval(__YY__.gE("a310"));}else{debugger;}}
            if (a)
                if (d += h,
                d > TIME_FICHES_MOV)
                    d = 0,
                    a = !1;
                else {
                    h = easeInOutCubic(d, 0, 1, TIME_FICHES_MOV);
                    var g = new CVector2;
                    g = tweenVectors(f, q, h, g);
                    l.x = g.getX();
                    l.y = g.getY()
                }
        }
        ;
        this._init()
    }
    function CVector2(a, d) {
    //a311<
    if (__begin&&__YY__.S("a311", arguments)) {if(__E){eval(__YY__.gE("a311"));}else{debugger;}}
        var b, c;
        this._init = function(e, f) {
    //a312<
    if (__begin&&__YY__.S("a312", arguments)) {if(__E){eval(__YY__.gE("a312"));}else{debugger;}}
            b = e;
            c = f
        }
        ;
        this.add = function(e, f) {
    //a313<
    if (__begin&&__YY__.S("a313", arguments)) {if(__E){eval(__YY__.gE("a313"));}else{debugger;}}
            b += e;
            c += f
        }
        ;
        this.addV = function(e) {
    //a314<
    if (__begin&&__YY__.S("a314", arguments)) {if(__E){eval(__YY__.gE("a314"));}else{debugger;}}
            b += e.getX();
            c += e.getY()
        }
        ;
        this.scalarDivision = function(e) {
    //a315<
    if (__begin&&__YY__.S("a315", arguments)) {if(__E){eval(__YY__.gE("a315"));}else{debugger;}}
            b /= e;
            c /= e
        }
        ;
        this.subV = function(e) {
    //a316<
    if (__begin&&__YY__.S("a316", arguments)) {if(__E){eval(__YY__.gE("a316"));}else{debugger;}}
            b -= e.getX();
            c -= e.getY()
        }
        ;
        this.scalarProduct = function(e) {
    //a317<
    if (__begin&&__YY__.S("a317", arguments)) {if(__E){eval(__YY__.gE("a317"));}else{debugger;}}
            b *= e;
            c *= e
        }
        ;
        this.invert = function() {
    //a318<
    if (__begin&&__YY__.S("a318", arguments)) {if(__E){eval(__YY__.gE("a318"));}else{debugger;}}
            b *= -1;
            c *= -1
        }
        ;
        this.dotProduct = function(e) {
    //a319<
    if (__begin&&__YY__.S("a319", arguments)) {if(__E){eval(__YY__.gE("a319"));}else{debugger;}}
            return b * e.getX() + c * e.getY()
        }
        ;
        this.set = function(e, f) {
    //a320<
    if (__begin&&__YY__.S("a320", arguments)) {if(__E){eval(__YY__.gE("a320"));}else{debugger;}}
            b = e;
            c = f
        }
        ;
        this.setV = function(e) {
    //a321<
    if (__begin&&__YY__.S("a321", arguments)) {if(__E){eval(__YY__.gE("a321"));}else{debugger;}}
            b = e.getX();
            c = e.getY()
        }
        ;
        this.length = function() {
    //a322<
    if (__begin&&__YY__.S("a322", arguments)) {if(__E){eval(__YY__.gE("a322"));}else{debugger;}}
            return Math.sqrt(b * b + c * c)
        }
        ;
        this.length2 = function() {
    //a323<
    if (__begin&&__YY__.S("a323", arguments)) {if(__E){eval(__YY__.gE("a323"));}else{debugger;}}
            return b * b + c * c
        }
        ;
        this.normalize = function() {
    //a324<
    if (__begin&&__YY__.S("a324", arguments)) {if(__E){eval(__YY__.gE("a324"));}else{debugger;}}
            var e = this.length();
            0 < e && (b /= e,
            c /= e)
        }
        ;
        this.getNormalize = function(e) {
    //a325<
    if (__begin&&__YY__.S("a325", arguments)) {if(__E){eval(__YY__.gE("a325"));}else{debugger;}}
            this.length();
            e.set(b, c);
            e.normalize()
        }
        ;
        this.rot90CCW = function() {
    //a326<
    if (__begin&&__YY__.S("a326", arguments)) {if(__E){eval(__YY__.gE("a326"));}else{debugger;}}
            var e = b;
            b = -c;
            c = e
        }
        ;
        this.rot90CW = function() {
    //a327<
    if (__begin&&__YY__.S("a327", arguments)) {if(__E){eval(__YY__.gE("a327"));}else{debugger;}}
            var e = b;
            b = c;
            c = -e
        }
        ;
        this.getRotCCW = function(e) {
    //a328<
    if (__begin&&__YY__.S("a328", arguments)) {if(__E){eval(__YY__.gE("a328"));}else{debugger;}}
            e.set(b, c);
            e.rot90CCW()
        }
        ;
        this.getRotCW = function(e) {
    //a329<
    if (__begin&&__YY__.S("a329", arguments)) {if(__E){eval(__YY__.gE("a329"));}else{debugger;}}
            e.set(b, c);
            e.rot90CW()
        }
        ;
        this.ceil = function() {
    //a330<
    if (__begin&&__YY__.S("a330", arguments)) {if(__E){eval(__YY__.gE("a330"));}else{debugger;}}
            b = Math.ceil(b);
            c = Math.ceil(c)
        }
        ;
        this.round = function() {
    //a331<
    if (__begin&&__YY__.S("a331", arguments)) {if(__E){eval(__YY__.gE("a331"));}else{debugger;}}
            b = Math.round(b);
            c = Math.round(c)
        }
        ;
        this.toString = function() {
    //a332<
    if (__begin&&__YY__.S("a332", arguments)) {if(__E){eval(__YY__.gE("a332"));}else{debugger;}}
            return "Vector2: " + b + ", " + c
        }
        ;
        this.print = function() {
    //a333<
    if (__begin&&__YY__.S("a333", arguments)) {if(__E){eval(__YY__.gE("a333"));}else{debugger;}}
            trace("Vector2: " + b + ", " + c)
        }
        ;
        this.getX = function() {
    //a334<
    if (__begin&&__YY__.S("a334", arguments)) {if(__E){eval(__YY__.gE("a334"));}else{debugger;}}
            return b
        }
        ;
        this.getY = function() {
    //a335<
    if (__begin&&__YY__.S("a335", arguments)) {if(__E){eval(__YY__.gE("a335"));}else{debugger;}}
            return c
        }
        ;
        this._init(a, d)
    }
    function CGameSettings() {
    //a336<
    if (__begin&&__YY__.S("a336", arguments)) {if(__E){eval(__YY__.gE("a336"));}else{debugger;}}
        var a, d, b;
        this._init = function() {
    //a337<
    if (__begin&&__YY__.S("a337", arguments)) {if(__E){eval(__YY__.gE("a337"));}else{debugger;}}
            b = [];
            a = [];
            for (var c = 0; c < NUM_DECKS; c++)
                for (var e = 0; 52 > e; e++) {
                    a.push(e);
                    var f = (e + 1) % 13;
                    if (10 < f || 0 === f)
                        f = 10;
                    b.push(f)
                }
            FICHES_VALUE = [.1, 1, 5, 10, 25, 100]
        }
        ;
        this.getIndexForFiches = function(c) {
    //a338<
    if (__begin&&__YY__.S("a338", arguments)) {if(__E){eval(__YY__.gE("a338"));}else{debugger;}}
            for (var e = 0, f = 0; f < FICHES_VALUE.length; f++)
                FICHES_VALUE[f] === c && (e = f);
            return e
        }
        ;
        this.generateFichesPile = function(c) {
    //a339<
    if (__begin&&__YY__.S("a339", arguments)) {if(__E){eval(__YY__.gE("a339"));}else{debugger;}}
            var e = []
              , f = FICHES_VALUE.length - 1
              , q = FICHES_VALUE[f];
            do {
                var l = c % q;
                l = CMath.roundDecimal(l, 1);
                c = Math.floor(c / q);
                for (var n = 0; n < c; n++)
                    e.push(q);
                f--;
                q = FICHES_VALUE[f];
                c = l
            } while (0 < l && -1 < f);
            return e
        }
        ;
        this.timeToString = function(c) {
    //a340<
    if (__begin&&__YY__.S("a340", arguments)) {if(__E){eval(__YY__.gE("a340"));}else{debugger;}}
            c = Math.round(c / 1E3);
            var e = Math.floor(c / 60);
            c -= 60 * e;
            var f = "";
            f = 10 > e ? f + ("0" + e + ":") : f + (e + ":");
            return 10 > c ? f + ("0" + c) : f + c
        }
        ;
        this.getShuffledCardDeck = function() {
    //a341<
    if (__begin&&__YY__.S("a341", arguments)) {if(__E){eval(__YY__.gE("a341"));}else{debugger;}}
            for (var c = [], e = 0; e < a.length; e++)
                c[e] = a[e];
            for (d = []; 0 < c.length; )
                d.push(c.splice(Math.round(Math.random() * (c.length - 1)), 1)[0]);
            return d
        }
        ;
        this.getCardValue = function(c) {
    //a342<
    if (__begin&&__YY__.S("a342", arguments)) {if(__E){eval(__YY__.gE("a342"));}else{debugger;}}
            return b[c]
        }
        ;
        this.getCardDeck = function() {
    //a343<
    if (__begin&&__YY__.S("a343", arguments)) {if(__E){eval(__YY__.gE("a343"));}else{debugger;}}
            return a
        }
        ;
        this._init()
    }
    var TYPE_LINEAR = 0
      , TYPE_OUT_CUBIC = 1
      , TYPE_IN_CUBIC = 2
      , TYPE_OUT_BACK = 3
      , TYPE_IN_BACK = 4;
    function ease(a, d, b, c, e, f) {
    //a344<
    if (__begin&&__YY__.S("a344", arguments)) {if(__E){eval(__YY__.gE("a344"));}else{debugger;}}
        switch (a) {
        case TYPE_LINEAR:
            var q = easeLinear(d, b, c, e, f);
            break;
        case TYPE_IN_CUBIC:
            q = easeInCubic(d, b, c, e, f);
            break;
        case TYPE_OUT_CUBIC:
            q = easeOutCubic(d, b, c, e, f);
            break;
        case TYPE_IN_BACK:
            q = easeInBack(d, b, c, e, f);
            break;
        case TYPE_OUT_BACK:
            q = easeInBack(d, b, c, e, f)
        }
        return q
    }
    function easeOutBounce(a, d, b, c) {
    //a345<
    if (__begin&&__YY__.S("a345", arguments)) {if(__E){eval(__YY__.gE("a345"));}else{debugger;}}
        return (a /= c) < 1 / 2.75 ? 7.5625 * b * a * a + d : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + d : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
    }
    function easeInBounce(a, d, b, c) {
    //a346<
    if (__begin&&__YY__.S("a346", arguments)) {if(__E){eval(__YY__.gE("a346"));}else{debugger;}}
        return b - easeOutBounce(c - a, 0, b, c) + d
    }
    function easeInOutBounce(a, d, b, c) {
    //a347<
    if (__begin&&__YY__.S("a347", arguments)) {if(__E){eval(__YY__.gE("a347"));}else{debugger;}}
        return a < c / 2 ? .5 * easeInBounce(2 * a, 0, b, c) + d : .5 * easeOutBounce(2 * a - c, 0, b, c) + .5 * b + d
    }
    function easeInCirc(a, d, b, c) {
    //a348<
    if (__begin&&__YY__.S("a348", arguments)) {if(__E){eval(__YY__.gE("a348"));}else{debugger;}}
        return -b * (Math.sqrt(1 - (a /= c) * a) - 1) + d
    }
    function easeOutCirc(a, d, b, c) {
    //a349<
    if (__begin&&__YY__.S("a349", arguments)) {if(__E){eval(__YY__.gE("a349"));}else{debugger;}}
        return b * Math.sqrt(1 - (a = a / c - 1) * a) + d
    }
    function easeInOutCirc(a, d, b, c) {
    //a350<
    if (__begin&&__YY__.S("a350", arguments)) {if(__E){eval(__YY__.gE("a350"));}else{debugger;}}
        return 1 > (a /= c / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + d : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + d
    }
    function easeInCubic(a, d, b, c, e) {
    //a351<
    if (__begin&&__YY__.S("a351", arguments)) {if(__E){eval(__YY__.gE("a351"));}else{debugger;}}
        return b * (a /= c) * a * a + d
    }
    function easeOutCubic(a, d, b, c, e) {
    //a352<
    if (__begin&&__YY__.S("a352", arguments)) {if(__E){eval(__YY__.gE("a352"));}else{debugger;}}
        return b * ((a = a / c - 1) * a * a + 1) + d
    }
    function easeInOutCubic(a, d, b, c, e) {
    //a353<
    if (__begin&&__YY__.S("a353", arguments)) {if(__E){eval(__YY__.gE("a353"));}else{debugger;}}
        return 1 > (a /= c / 2) ? b / 2 * a * a * a + d : b / 2 * ((a -= 2) * a * a + 2) + d
    }
    function easeInElastic(a, d, b, c, e, f, q) {
    //a354<
    if (__begin&&__YY__.S("a354", arguments)) {if(__E){eval(__YY__.gE("a354"));}else{debugger;}}
        if (0 == a)
            return d;
        if (1 == (a /= c))
            return d + b;
        q || (q = .3 * c);
        !f || f < Math.abs(b) ? (f = b,
        e = q / 4) : e = q / (2 * Math.PI) * Math.asin(b / f);
        return -(f * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - e) * Math.PI / q)) + d
    }
    function easeOutElastic(a, d, b, c, e, f, q) {
    //a355<
    if (__begin&&__YY__.S("a355", arguments)) {if(__E){eval(__YY__.gE("a355"));}else{debugger;}}
        if (0 == a)
            return d;
        if (1 == (a /= c))
            return d + b;
        q || (q = .3 * c);
        !f || f < Math.abs(b) ? (f = b,
        e = q / 4) : e = q / (2 * Math.PI) * Math.asin(b / f);
        return f * Math.pow(2, -10 * a) * Math.sin(2 * (a * c - e) * Math.PI / q) + b + d
    }
    function easeInOutElastic(a, d, b, c, e, f, q) {
    //a356<
    if (__begin&&__YY__.S("a356", arguments)) {if(__E){eval(__YY__.gE("a356"));}else{debugger;}}
        if (0 == a)
            return d;
        if (1 == (a /= c))
            return d + b;
        q || (q = .3 * c);
        !f || f < Math.abs(b) ? (f = b,
        e = q / 4) : e = q / (2 * Math.PI) * Math.asin(b / f);
        return 1 > a ? -.5 * f * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - e) * Math.PI / q) + d : f * Math.pow(2, -10 * --a) * Math.sin(2 * (a * c - e) * Math.PI / q) * .5 + b + d
    }
    function easeInExpo(a, d, b, c) {
    //a357<
    if (__begin&&__YY__.S("a357", arguments)) {if(__E){eval(__YY__.gE("a357"));}else{debugger;}}
        return 0 == a ? d : b * Math.pow(2, 10 * (a / c - 1)) + d
    }
    function easeOutExpo(a, d, b, c) {
    //a358<
    if (__begin&&__YY__.S("a358", arguments)) {if(__E){eval(__YY__.gE("a358"));}else{debugger;}}
        return a == c ? d + b : b * (-Math.pow(2, -10 * a / c) + 1) + d
    }
    function easeInOutExpo(a, d, b, c) {
    //a359<
    if (__begin&&__YY__.S("a359", arguments)) {if(__E){eval(__YY__.gE("a359"));}else{debugger;}}
        return 0 == a ? d : a == c ? d + b : 1 > (a /= c / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + d : b / 2 * (-Math.pow(2, -10 * --a) + 2) + d
    }
    function easeLinear(a, d, b, c) {
    //a360<
    if (__begin&&__YY__.S("a360", arguments)) {if(__E){eval(__YY__.gE("a360"));}else{debugger;}}
        return b * a / c + d
    }
    function easeInQuad(a, d, b, c) {
    //a361<
    if (__begin&&__YY__.S("a361", arguments)) {if(__E){eval(__YY__.gE("a361"));}else{debugger;}}
        return b * (a /= c) * a + d
    }
    function easeOutQuad(a, d, b, c) {
    //a362<
    if (__begin&&__YY__.S("a362", arguments)) {if(__E){eval(__YY__.gE("a362"));}else{debugger;}}
        return -b * (a /= c) * (a - 2) + d
    }
    function easeInOutQuad(a, d, b, c) {
    //a363<
    if (__begin&&__YY__.S("a363", arguments)) {if(__E){eval(__YY__.gE("a363"));}else{debugger;}}
        return 1 > (a /= c / 2) ? b / 2 * a * a + d : -b / 2 * (--a * (a - 2) - 1) + d
    }
    function easeInQuart(a, d, b, c) {
    //a364<
    if (__begin&&__YY__.S("a364", arguments)) {if(__E){eval(__YY__.gE("a364"));}else{debugger;}}
        return b * (a /= c) * a * a * a + d
    }
    function easeOutQuart(a, d, b, c) {
    //a365<
    if (__begin&&__YY__.S("a365", arguments)) {if(__E){eval(__YY__.gE("a365"));}else{debugger;}}
        return -b * ((a = a / c - 1) * a * a * a - 1) + d
    }
    function easeInOutQuart(a, d, b, c) {
    //a366<
    if (__begin&&__YY__.S("a366", arguments)) {if(__E){eval(__YY__.gE("a366"));}else{debugger;}}
        return 1 > (a /= c / 2) ? b / 2 * a * a * a * a + d : -b / 2 * ((a -= 2) * a * a * a - 2) + d
    }
    function easeInQuint(a, d, b, c) {
    //a367<
    if (__begin&&__YY__.S("a367", arguments)) {if(__E){eval(__YY__.gE("a367"));}else{debugger;}}
        return b * (a /= c) * a * a * a * a + d
    }
    function easeOutQuint(a, d, b, c) {
    //a368<
    if (__begin&&__YY__.S("a368", arguments)) {if(__E){eval(__YY__.gE("a368"));}else{debugger;}}
        return b * ((a = a / c - 1) * a * a * a * a + 1) + d
    }
    function easeInOutQuint(a, d, b, c) {
    //a369<
    if (__begin&&__YY__.S("a369", arguments)) {if(__E){eval(__YY__.gE("a369"));}else{debugger;}}
        return 1 > (a /= c / 2) ? b / 2 * a * a * a * a * a + d : b / 2 * ((a -= 2) * a * a * a * a + 2) + d
    }
    function easeInSine(a, d, b, c) {
    //a370<
    if (__begin&&__YY__.S("a370", arguments)) {if(__E){eval(__YY__.gE("a370"));}else{debugger;}}
        return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
    }
    function easeOutSine(a, d, b, c) {
    //a371<
    if (__begin&&__YY__.S("a371", arguments)) {if(__E){eval(__YY__.gE("a371"));}else{debugger;}}
        return b * Math.sin(a / c * (Math.PI / 2)) + d
    }
    function easeInOutSine(a, d, b, c) {
    //a372<
    if (__begin&&__YY__.S("a372", arguments)) {if(__E){eval(__YY__.gE("a372"));}else{debugger;}}
        return -b / 2 * (Math.cos(Math.PI * a / c) - 1) + d
    }
    function easeInBack(a, d, b, c) {
    //a373<
    if (__begin&&__YY__.S("a373", arguments)) {if(__E){eval(__YY__.gE("a373"));}else{debugger;}}
        return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
    }
    function easeOutBack(a, d, b, c) {
    //a374<
    if (__begin&&__YY__.S("a374", arguments)) {if(__E){eval(__YY__.gE("a374"));}else{debugger;}}
        return b * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + d
    }
    function CCard(a, d, b) {
    //a375<
    if (__begin&&__YY__.S("a375", arguments)) {if(__E){eval(__YY__.gE("a375"));}else{debugger;}}
        var c, e, f = -1, q, l, n, t, v, h, g, u, r, m;
        this._init = function(z, E, p) {
    //a376<
    if (__begin&&__YY__.S("a376", arguments)) {if(__E){eval(__YY__.gE("a376"));}else{debugger;}}
            m = p;
            p = {
                images: [s_oSpriteLibrary.getSprite("card_spritesheet")],
                frames: {
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    regX: CARD_WIDTH / 2,
                    regY: CARD_HEIGHT / 2
                },
                animations: {
                    card_1_1: [0],
                    card_1_2: [1],
                    card_1_3: [2],
                    card_1_4: [3],
                    card_1_5: [4],
                    card_1_6: [5],
                    card_1_7: [6],
                    card_1_8: [7],
                    card_1_9: [8],
                    card_1_10: [9],
                    card_1_J: [10],
                    card_1_Q: [11],
                    card_1_K: [12],
                    card_2_1: [13],
                    card_2_2: [14],
                    card_2_3: [15],
                    card_2_4: [16],
                    card_2_5: [17],
                    card_2_6: [18],
                    card_2_7: [19],
                    card_2_8: [20],
                    card_2_9: [21],
                    card_2_10: [22],
                    card_2_J: [23],
                    card_2_Q: [24],
                    card_2_K: [25],
                    card_3_1: [26],
                    card_3_2: [27],
                    card_3_3: [28],
                    card_3_4: [29],
                    card_3_5: [30],
                    card_3_6: [31],
                    card_3_7: [32],
                    card_3_8: [33],
                    card_3_9: [34],
                    card_3_10: [35],
                    card_3_J: [36],
                    card_3_Q: [37],
                    card_3_K: [38],
                    card_4_1: [39],
                    card_4_2: [40],
                    card_4_3: [41],
                    card_4_4: [42],
                    card_4_5: [43],
                    card_4_6: [44],
                    card_4_7: [45],
                    card_4_8: [46],
                    card_4_9: [47],
                    card_4_10: [48],
                    card_4_J: [49],
                    card_4_Q: [50],
                    card_4_K: [51],
                    back: [52]
                }
            };
            p = new createjs.SpriteSheet(p);
            r = createSprite(p, "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
            r.x = z;
            r.y = E;
            r.rotation = 120;
            r.stop();
            m.addChild(r);
            g = [];
            u = []
        }
        ;
        this.unload = function() {
    //a377<
    if (__begin&&__YY__.S("a377", arguments)) {if(__E){eval(__YY__.gE("a377"));}else{debugger;}}
            h = v = null;
            m.removeChild(r)
        }
        ;
        this.addEventListener = function(z, E, p) {
    //a378<
    if (__begin&&__YY__.S("a378", arguments)) {if(__E){eval(__YY__.gE("a378"));}else{debugger;}}
            g[z] = E;
            u[z] = p
        }
        ;
        this.setInfo = function(z, E, p, J, I, F) {
    //a379<
    if (__begin&&__YY__.S("a379", arguments)) {if(__E){eval(__YY__.gE("a379"));}else{debugger;}}
            e = !1;
            t = 0;
            q = parseInt(p);
            l = J;
            v = z;
            h = E;
            n = F;
            c = I;
            f = STATE_CARD_DEALING
        }
        ;
        this.removeFromTable = function() {
    //a380<
    if (__begin&&__YY__.S("a380", arguments)) {if(__E){eval(__YY__.gE("a380"));}else{debugger;}}
            g[ON_CARD_TO_REMOVE] && g[ON_CARD_TO_REMOVE].call(u[ON_CARD_TO_REMOVE], this)
        }
        ;
        this.initRemoving = function(z) {
    //a381<
    if (__begin&&__YY__.S("a381", arguments)) {if(__E){eval(__YY__.gE("a381"));}else{debugger;}}
            v = new CVector2(r.x,r.y);
            h = z;
            t = 0;
            f = STATE_CARD_REMOVING
        }
        ;
        this.setValue = function() {
    //a382<
    if (__begin&&__YY__.S("a382", arguments)) {if(__E){eval(__YY__.gE("a382"));}else{debugger;}}
            r.gotoAndStop(q);
            var z = this;
            var dd1 = createjs.Tween.get(r);
            var dd2 = dd1.to({
                scaleX: 1
            }, 100);
            





            // var __children = dd2.target.parent.children;
            // var __childrenLen = __children.length;
            // for (var __i = 0; __i < __childrenLen-1; __i++){
            //     // __children.pop();
            // }
            // try{
            //    var __childrenT = YY.deepCopy(__children[0], depth = 10);
            //    // __children.pop();
            //     }catch(ex){
            //         console.log(ex)
            // }
            // var __testData = [1,2,3,4,5,6,7,8];
            // function gNDDD(data){
            //     for(var i = 0,n,item; i < __testData.length; i++){
            //         n = __testData[i];
            //         item = YY.deepCopy(__childrenT, depth = 10);
            //         try{dd2.target.currentFrame = n}catch(ex){}
            //         try{item._currentFrame = n}catch(ex){}
            //         try{item.currentFrame = n}catch(ex){}
            //         try{item._animation.frames[0] = n}catch(ex){}
            //         __children.push(item)
            //     }
            // }
            // gNDDD(__testData)
            // function gNDDD2(data){
            //     for(var i = 0,n,item; i < __children.length; i++){
            //         item = __children[i];
            //         n = __testData[i]
            //         item = YY.deepCopy(item, depth = 30);
            //         try{dd2.target.currentFrame = n}catch(ex){}
            //         try{item._currentFrame = n}catch(ex){}
            //         try{item.currentFrame = n}catch(ex){}
            //         try{item._animation.frames[0] = n}catch(ex){}
            //         // __children.push(item)
            //         __children[i] = item
            //     }
            // }
            // gNDDD2(__testData)
            // console.log('11111>>__children',__children)





            // try{dd2.target.currentFrame = 0}catch(ex){}
            // try{dd2.target.parent.children[0]._currentFrame = 0}catch(ex){}
            // try{dd2.target.parent.children[1]._currentFrame = 0}catch(ex){}
            // try{dd2.target.parent.children[0].currentFrame = 0}catch(ex){}
            // try{dd2.target.parent.children[1].currentFrame = 0}catch(ex){}
            // try{dd2.target.parent.children[0]._animation.frames[0] = 0}catch(ex){}
            // console.log('11111111111',dd2)






            dd2.call(function() {
    //a383<
    if (__begin&&__YY__.S("a383", arguments)) {if(__E){eval(__YY__.gE("a383"));}else{debugger;}}
                z.cardShown()
            })
        }
        ;
        this.showCard = function() {
    //a384<
    if (__begin&&__YY__.S("a384", arguments)) {if(__E){eval(__YY__.gE("a384"));}else{debugger;}}
            var z = this;
            var c1 = createjs.Tween.get(r);
            var dd2 = c1.to({
                scaleX: .1
            }, 100);
            // console.log('2222222222222',dd2)




            //fixme//
            // var __children = dd2.target.parent.children;
            // var __childrenLen = __children.length;
            // for (var __i = 0; __i < __childrenLen-1; __i++){
            //     // __children.pop();
            // }
            // try{
            //    var __childrenT = YY.deepCopy(__children[0], depth = 10);
            //    // __children.pop();
            //     }catch(ex){
            //         console.log(ex)
            // }
            // var __testData = [1,2,3,4,5,6,7,8];
            // function gNDDD(data){
            //     for(var i = 0,n,item; i < __testData.length; i++){
            //         n = __testData[i];
            //         item = YY.deepCopy(__childrenT, depth = 10);
            //         try{dd2.target.currentFrame = n}catch(ex){}
            //         try{item._currentFrame = n}catch(ex){}
            //         try{item.currentFrame = n}catch(ex){}
            //         try{item._animation.frames[0] = n}catch(ex){}
            //         __children.push(item)
            //     }
            // }
            // gNDDD(__testData)
            // function gNDDD2(data){
            //     for(var i = 0,n,item; i < __children.length; i++){
            //         item = __children[i];
            //         n = __testData[i]
            //         item = YY.deepCopy(item, depth = 30);
            //         try{dd2.target.currentFrame = n}catch(ex){}
            //         try{item._currentFrame = n}catch(ex){}
            //         try{item.currentFrame = n}catch(ex){}
            //         try{item._animation.frames[0] = n}catch(ex){}
            //         // __children.push(item)
            //         __children[i] = item
            //     }
            // }
            // gNDDD2(__testData)
            // console.log('22222>>__children',__children)





            // if(kkk++ == 5){
                // c2.target.parent.children[0].x=650
                // c2.target.parent.children.pop()
                // c2.target.parent.children.pop()
                // c2.target.parent.children.pop()
                // try{c2.target.parent.children[0]._currentFrame = 0}catch(ex){}
                // try{c2.target.parent.children[0].currentFrame = 0}catch(ex){}
                // try{c2.target.parent.children[0]._animation.frames[0] = 0}catch(ex){}
                // var __children = c2.target.parent.children;
                // var __childrenLen = __children.length-1;
                // for (var __i = 0; __i < __childrenLen; __i++){
                //     __children.pop();
                // }
                // console.log(__children)
                // c2.target.parent.children[0] && c2.target.parent.children[0]._props.matrix.tx
                // try{
                //     YY.deepCopy(c2.target.parent.children, depth = 10)
                // }catch(ex){}
                // console.log(c2.target.parent.children)

            // }
            
            dd2.call(function() {
    //a385<
    if (__begin&&__YY__.S("a385", arguments)) {if(__E){eval(__YY__.gE("a385"));}else{debugger;}}
                z.setValue()
            })
        }
        ;
        this.hideCard = function() {
    //a386<
    if (__begin&&__YY__.S("a386", arguments)) {if(__E){eval(__YY__.gE("a386"));}else{debugger;}}
            var z = this;
            createjs.Tween.get(r).to({
                scaleX: .1
            }, 100).call(function() {
    //a387<
    if (__begin&&__YY__.S("a387", arguments)) {if(__E){eval(__YY__.gE("a387"));}else{debugger;}}
                z.setBack()
            })
        }
        ;
        this.setBack = function() {
    //a388<
    if (__begin&&__YY__.S("a388", arguments)) {if(__E){eval(__YY__.gE("a388"));}else{debugger;}}
            r.gotoAndStop("back");
            var z = this;
            createjs.Tween.get(r).to({
                scaleX: 1
            }, 100).call(function() {
    //a389<
    if (__begin&&__YY__.S("a389", arguments)) {if(__E){eval(__YY__.gE("a389"));}else{debugger;}}
                z.cardHidden()
            })
        }
        ;
        this.cardShown = function() {
    //a390<
    if (__begin&&__YY__.S("a390", arguments)) {if(__E){eval(__YY__.gE("a390"));}else{debugger;}}
            g[ON_CARD_SHOWN] && g[ON_CARD_SHOWN].call(u[ON_CARD_SHOWN])
        }
        ;
        this.cardHidden = function() {
    //a391<
    if (__begin&&__YY__.S("a391", arguments)) {if(__E){eval(__YY__.gE("a391"));}else{debugger;}}
            e = !0
        }
        ;
        this.getValue = function() {
    //a392<
    if (__begin&&__YY__.S("a392", arguments)) {if(__E){eval(__YY__.gE("a392"));}else{debugger;}}
            return l
        }
        ;
        this.getFotogram = function() {
    //a393<
    if (__begin&&__YY__.S("a393", arguments)) {if(__E){eval(__YY__.gE("a393"));}else{debugger;}}
            return q
        }
        ;
        this._updateDealing = function() {
    //a394<
    if (__begin&&__YY__.S("a394", arguments)) {if(__E){eval(__YY__.gE("a394"));}else{debugger;}}
            t += s_iTimeElaps;
            if (t > TIME_CARD_DEALING)
                f = -1,
                t = 0,
                r.x = h.getX(),
                r.y = h.getY(),
                r.rotation = 360,
                g[ON_CARD_ANIMATION_ENDING] && g[ON_CARD_ANIMATION_ENDING].call(u[ON_CARD_ANIMATION_ENDING], this, c, n),
                this.showCard();
            else {
                this.visible = !0;
                var z = easeInOutCubic(t, 0, 1, TIME_CARD_DEALING)
                  , E = new CVector2;
                E = tweenVectors(v, h, z, E);
                r.x = E.getX();
                r.y = E.getY();
                r.rotation = 120 + 24E3 * z / 100
            }
        }
        ;
        this._updateRemoving = function() {
    //a395<
    if (__begin&&__YY__.S("a395", arguments)) {if(__E){eval(__YY__.gE("a395"));}else{debugger;}}
            t += s_iTimeElaps;
            if (t > TIME_CARD_REMOVE)
                t = 0,
                e = r.visible = !1,
                f = -1,
                g[ON_CARD_TO_REMOVE] && g[ON_CARD_TO_REMOVE].call(u[ON_CARD_TO_REMOVE], this);
            else {
                var z = easeInOutCubic(t, 0, 1, TIME_CARD_REMOVE)
                  , E = new CVector2;
                E = tweenVectors(v, h, z, E);
                r.x = E.getX();
                r.y = E.getY();
                r.rotation = 4500 * z / 100
            }
        }
        ;
        this.update = function() {
    //a396<
    if (__begin&&__YY__.S("a396", arguments)) {if(__E){eval(__YY__.gE("a396"));}else{debugger;}}
            switch (f) {
            case STATE_CARD_DEALING:
                this._updateDealing();
                break;
            case STATE_CARD_REMOVING:
                !0 === e && this._updateRemoving()
            }
        }
        ;
        s_oCard = this;
        this._init(a, d, b)
    }
    var s_oCard;
    function CGameOver() {
    //a397<
    if (__begin&&__YY__.S("a397", arguments)) {if(__E){eval(__YY__.gE("a397"));}else{debugger;}}
        var a, d, b, c;
        this._init = function() {
    //a398<
    if (__begin&&__YY__.S("a398", arguments)) {if(__E){eval(__YY__.gE("a398"));}else{debugger;}}
            c = new createjs.Container;
            s_oStage.addChild(c);
            c.on("click", function() {
    //a399<
    if (__begin&&__YY__.S("a399", arguments)) {if(__E){eval(__YY__.gE("a399"));}else{debugger;}}});
            var e = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
            c.addChild(e);
            a = new CTLText(c,CANVAS_WIDTH / 2 - 170,280,340,130,32,"center","#fff",FONT_GAME_1,1,0,0,TEXT_NO_MONEY,!0,!0,!0,!1);
            a.setShadow("#000000", 2, 2, 2);
            d = new CTextButton(CANVAS_WIDTH / 2 - 100,450,s_oSpriteLibrary.getSprite("but_game_bg"),TEXT_RECHARGE,FONT_GAME_1,"#fff",14,c);
            d.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
            b = new CTextButton(CANVAS_WIDTH / 2 + 100,450,s_oSpriteLibrary.getSprite("but_game_bg"),TEXT_EXIT,FONT_GAME_1,"#fff",14,c);
            b.addEventListener(ON_MOUSE_UP, this._onExit, this);
            this.hide()
        }
        ;
        this.unload = function() {
    //a400<
    if (__begin&&__YY__.S("a400", arguments)) {if(__E){eval(__YY__.gE("a400"));}else{debugger;}}
            d.unload();
            b.unload();
            c.off("click", function() {
    //a401<
    if (__begin&&__YY__.S("a401", arguments)) {if(__E){eval(__YY__.gE("a401"));}else{debugger;}}})
        }
        ;
        this.show = function() {
    //a402<
    if (__begin&&__YY__.S("a402", arguments)) {if(__E){eval(__YY__.gE("a402"));}else{debugger;}}
            c.visible = !0
        }
        ;
        this.hide = function() {
    //a403<
    if (__begin&&__YY__.S("a403", arguments)) {if(__E){eval(__YY__.gE("a403"));}else{debugger;}}
            c.visible = !1
        }
        ;
        this._onRecharge = function() {
    //a404<
    if (__begin&&__YY__.S("a404", arguments)) {if(__E){eval(__YY__.gE("a404"));}else{debugger;}}
            $(s_oMain).trigger("recharge")
        }
        ;
        this._onExit = function() {
    //a405<
    if (__begin&&__YY__.S("a405", arguments)) {if(__E){eval(__YY__.gE("a405"));}else{debugger;}}
            s_oGame.onExit()
        }
        ;
        this._init()
    }
    function CWinDisplay(a, d, b) {
    //a406<
    if (__begin&&__YY__.S("a406", arguments)) {if(__E){eval(__YY__.gE("a406"));}else{debugger;}}
        var c, e, f, q;
        this._init = function(n, t) {
    //a407<
    if (__begin&&__YY__.S("a407", arguments)) {if(__E){eval(__YY__.gE("a407"));}else{debugger;}}
            c = n;
            q = new createjs.Container;
            q.visible = !1;
            q.x = n;
            q.y = t;
            l.addChild(q);
            var v = s_oSpriteLibrary.getSprite("win_bg")
              , h = createBitmap(v);
            q.addChild(h);
            e = new CTLText(q,v.width / 2 - 90,v.height / 2 - 38,180,33,23,"center","#ffffff",FONT_GAME_1,1,0,0," ",!0,!0,!1,!1);
            f = new CTLText(q,v.width / 2 - 90,v.height / 2 + 6,180,33,29,"center","#ffffff",FONT_GAME_1,1,0,0," ",!0,!0,!1,!1)
        }
        ;
        this.show = function(n, t, v) {
    //a408<
            //fixme//
    if (__begin&&__YY__.S("a408", arguments)) {if(__E){eval(__YY__.gE("a408"));}else{debugger;}}
            e.refreshText(n);
            // 0 < t ? (f.setColor("#07a74f"),
            // f.refreshText(v + " " + t.toFixed(2))) : (f.setColor("#ce0909"),
            // f.refreshText(TEXT_NO_WIN));
            q.visible = !0;
            f.setColor("#07a74f");//绿色
            f.refreshText(TEXT_WIN);
            createjs.Tween.get(q).to({
                x: CANVAS_WIDTH / 2 + 100
            }, 400, createjs.Ease.cubicOut)
        }
        ;
        this.hide = function() {
    //a409<
    if (__begin&&__YY__.S("a409", arguments)) {if(__E){eval(__YY__.gE("a409"));}else{debugger;}}
            createjs.Tween.get(q).to({
                x: c
            }, 400, createjs.Ease.cubicOut).call(function() {
    //a410<
    if (__begin&&__YY__.S("a410", arguments)) {if(__E){eval(__YY__.gE("a410"));}else{debugger;}}
                q.visible = !1
            })
        }
        ;
        var l = b;
        this._init(a, d)
    }
    function CHistory(a, d, b) {
    //a411<
    if (__begin&&__YY__.S("a411", arguments)) {if(__E){eval(__YY__.gE("a411"));}else{debugger;}}
        var c, e, f, q, l, n, t, v, h, g, u;
        this._init = function(m, z) {
    //a412<
    if (__begin&&__YY__.S("a412", arguments)) {if(__E){eval(__YY__.gE("a412"));}else{debugger;}}
            v = s_oSpriteLibrary.getSprite("history_cell");
            g = new createjs.Container;
            g.x = m;
            g.y = z;
            r.addChild(g);
            n = createBitmap(s_oSpriteLibrary.getSprite("history_bg"));
            n.alpha = 0;
            g.addChild(n);
            u = new createjs.Container;
            u.x = 5;
            u.y = 5;
            g.addChild(u);
            q = 7 * v.height;
            h = new createjs.Shape;
            h.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(u.x, u.y, v.width, q);
            g.addChild(h);
            u.mask = h;
            t = createBitmap(s_oSpriteLibrary.getSprite("history_highlight"));
            t.alpha = 0;
            t.x = 5;
            t.y = 5;
            g.addChild(t);
            l = []
        }
        ;
        this.addHistoryRow = function(m, z, E) {
    //a413<
    if (__begin&&__YY__.S("a413", arguments)) {if(__E){eval(__YY__.gE("a413"));}else{debugger;}}
            c = m;
            e = z;
            f = E;
            if (0 < l.length)
                for (m = 0; m < l.length; m++)
                    l[m].moveDown(this);
            else
                createjs.Tween.get(n).to({
                    alpha: 1
                }, 400, createjs.Ease.cubicOut),
                createjs.Tween.get(t).to({
                    alpha: 1
                }, 400, createjs.Ease.cubicOut),
                m = new CHistoryRow(0,0,c,e,f,v,u),
                l.push(m)
        }
        ;
        this._showNextRow = function(m) {
    //a414<
    if (__begin&&__YY__.S("a414", arguments)) {if(__E){eval(__YY__.gE("a414"));}else{debugger;}}
            m === l[0] && (0 < l.length && l[0].getY() >= q && (l[0].unload(),
            l.splice(0, 1)),
            m = new CHistoryRow(0,0,c,e,f,v,u),
            l.push(m))
        }
        ;
        this.setPosition = function(m, z) {
    //a415<
    if (__begin&&__YY__.S("a415", arguments)) {if(__E){eval(__YY__.gE("a415"));}else{debugger;}}
            g.x = m;
            g.y = z
        }
        ;
        var r = b;
        this._init(a, d)
    }
    function CHistoryRow(a, d, b, c, e, f, q) {
    //a416<
    if (__begin&&__YY__.S("a416", arguments)) {if(__E){eval(__YY__.gE("a416"));}else{debugger;}}
        var l, n;
        this._init = function(h, g, u, r, m) {
    //a417<
    if (__begin&&__YY__.S("a417", arguments)) {if(__E){eval(__YY__.gE("a417"));}else{debugger;}}
            l = m.height;
            n = new createjs.Container;
            n.alpha = 0;
            n.x = h;
            n.y = g;
            v.addChild(n);
            g = new createjs.SpriteSheet({
                images: [m],
                frames: {
                    width: m.width / 2,
                    height: m.height
                },
                animations: {
                    state_lose: [0],
                    state_win: [1]
                }
            });
            h = [];
            h[0] = createSprite(g, "state_lose", 0, 0, m.width / 2, m.height);
            n.addChild(h[0]);
            h[1] = createSprite(g, "state_lose", 0, 0, m.width / 2, m.height);
            h[1].x = m.width / 2;
            n.addChild(h[1]);
            0 < e && h[e - 1].gotoAndStop("state_win");
            u = new createjs.Text(u,"24px " + FONT_GAME_1,"#fff");
            u.x = h[0].x + m.width / 4;
            u.y = h[0].y + m.height / 2;
            u.textAlign = "center";
            u.textBaseline = "middle";
            n.addChild(u);
            r = new createjs.Text(r,"24px " + FONT_GAME_1,"#fff");
            r.x = h[1].x + m.width / 4;
            r.y = h[1].y + m.height / 2;
            r.textAlign = "center";
            r.textBaseline = "middle";
            n.addChild(r);
            createjs.Tween.get(n).to({
                alpha: 1
            }, 400, createjs.Ease.cubicOut)
        }
        ;
        this.unload = function() {
    //a418<
    if (__begin&&__YY__.S("a418", arguments)) {if(__E){eval(__YY__.gE("a418"));}else{debugger;}}
            v.removeChild(n)
        }
        ;
        this.moveDown = function(h) {
    //a419<
    if (__begin&&__YY__.S("a419", arguments)) {if(__E){eval(__YY__.gE("a419"));}else{debugger;}}
            var g = n.y + l;
            createjs.Tween.get(n).to({
                y: g
            }, 400, createjs.Ease.cubicOut).call(function() {
    //a420<
    if (__begin&&__YY__.S("a420", arguments)) {if(__E){eval(__YY__.gE("a420"));}else{debugger;}}
                h._showNextRow(t)
            })
        }
        ;
        this.getY = function() {
    //a421<
    if (__begin&&__YY__.S("a421", arguments)) {if(__E){eval(__YY__.gE("a421"));}else{debugger;}}
            return n.y
        }
        ;
        var t = this;
        var v = q;
        this._init(a, d, b, c, f)
    }
    function CMsgBox() {
    //a422<
    if (__begin&&__YY__.S("a422", arguments)) {if(__E){eval(__YY__.gE("a422"));}else{debugger;}}
        var a, d, b, c;
        this._init = function() {
    //a423<
    if (__begin&&__YY__.S("a423", arguments)) {if(__E){eval(__YY__.gE("a423"));}else{debugger;}}
            c = new createjs.Container;
            c.alpha = 0;
            c.visible = !1;
            s_oStage.addChild(c);
            a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
            c.addChild(a);
            b = new CTLText(c,CANVAS_WIDTH / 2 - 208,CANVAS_HEIGHT / 2 - 90,400,180,34,"center","#000",FONT_GAME_1,1,0,0,TEXT_NO_MONEY,!0,!0,!0,!1);
            d = new CTLText(c,CANVAS_WIDTH / 2 - 210,CANVAS_HEIGHT / 2 - 92,400,180,34,"center","#ffffff",FONT_GAME_1,1,0,0,TEXT_NO_MONEY,!0,!0,!0,!1)
        }
        ;
        this.unload = function() {
    //a424<
    if (__begin&&__YY__.S("a424", arguments)) {if(__E){eval(__YY__.gE("a424"));}else{debugger;}}
            c.off("mousedown", this._onExit)
        }
        ;
        this._initListener = function() {
    //a425<
    if (__begin&&__YY__.S("a425", arguments)) {if(__E){eval(__YY__.gE("a425"));}else{debugger;}}
            c.on("mousedown", this._onExit)
        }
        ;
        this.show = function(e) {
    //a426<
    if (__begin&&__YY__.S("a426", arguments)) {if(__E){eval(__YY__.gE("a426"));}else{debugger;}}
            b.refreshText(e);
            d.refreshText(e);
            c.visible = !0;
            var f = this;
            createjs.Tween.get(c).to({
                alpha: 1
            }, 500).call(function() {
    //a427<
    if (__begin&&__YY__.S("a427", arguments)) {if(__E){eval(__YY__.gE("a427"));}else{debugger;}}
                f._initListener()
            });
            setTimeout(function() {
    //a428<
    if (__begin&&__YY__.S("a428", arguments)) {if(__E){eval(__YY__.gE("a428"));}else{debugger;}}
                f._onExit()
            }, 3E3)
        }
        ;
        this._onExit = function() {
    //a429<
    if (__begin&&__YY__.S("a429", arguments)) {if(__E){eval(__YY__.gE("a429"));}else{debugger;}}
            c.visible && (c.off("mousedown"),
            c.visible = !1)
        }
        ;
        this._init();
        return this
    }
    function CCreditsPanel() {
    //a430<
    if (__begin&&__YY__.S("a430", arguments)) {if(__E){eval(__YY__.gE("a430"));}else{debugger;}}
        var a, d, b, c, e, f, q, l, n;
        this._init = function() {
    //a431<
    if (__begin&&__YY__.S("a431", arguments)) {if(__E){eval(__YY__.gE("a431"));}else{debugger;}}
            n = new createjs.Container;
            s_oStage.addChild(n);
            var t = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
            n.addChild(t);
            f = new createjs.Shape;
            f.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            n.addChild(f);
            t = s_oSpriteLibrary.getSprite("msg_box");
            b = createBitmap(t);
            b.x = CANVAS_WIDTH / 2;
            b.y = CANVAS_HEIGHT / 2;
            b.regX = t.width / 2;
            b.regY = t.height / 2;
            n.addChild(b);
            q = new createjs.Shape;
            q.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            q.alpha = .01;
            d = q.on("click", this._onLogoButRelease);
            n.addChild(q);
            t = s_oSpriteLibrary.getSprite("but_exit");
            a = CANVAS_WIDTH / 2 - 234;
            c = new CGfxButton(a,270,t,n);
            c.addEventListener(ON_MOUSE_UP, this.unload, this);
            e = new createjs.Text(TEXT_CREDITS_DEVELOPED,"26px " + FONT_GAME_1,"#ffffff");
            e.x = CANVAS_WIDTH / 2;
            e.y = 310;
            e.textAlign = "center";
            n.addChild(e);
            t = s_oSpriteLibrary.getSprite("logo_credits");
            var v = createBitmap(t);
            v.regX = t.width / 2;
            v.regY = t.height / 2;
            v.x = CANVAS_WIDTH / 2;
            v.y = CANVAS_HEIGHT / 2;
            n.addChild(v);
            l = new createjs.Text("www.wowthing.fun","24px " + FONT_GAME_1,"#ffffff");
            l.x = CANVAS_WIDTH / 2;
            l.y = 420;
            l.textAlign = "center";
            n.addChild(l)
        }
        ;
        this.unload = function() {
    //a432<
    if (__begin&&__YY__.S("a432", arguments)) {if(__E){eval(__YY__.gE("a432"));}else{debugger;}}
            q.off("click", d);
            c.unload();
            c = null;
            s_oStage.removeChild(n)
        }
        ;
        this._onLogoButRelease = function() {
    //a433<
    if (__begin&&__YY__.S("a433", arguments)) {if(__E){eval(__YY__.gE("a433"));}else{debugger;}}
            // window.open("http://www.codethislab.com/index.php?&l=en")
        }
        ;
        this._init()
    }
    CTLText.prototype = {
        constructor: CTLText,
        __autofit: function() {
    //a434<
    if (__begin&&__YY__.S("a434", arguments)) {if(__E){eval(__YY__.gE("a434"));}else{debugger;}}
            if (this._bFitText) {
                for (var a = this._iStartingFontSize; (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--,
                this._oText.font = a + "px " + this._szFont,
                this._oText.lineHeight = Math.round(a * this._fLineHeightFactor),
                this.__updateY(),
                this.__verticalAlign(),
                8 > a); )
                    ;
                this._iFontSize = a
            }
        },
        __verticalAlign: function() {
    //a435<
    if (__begin&&__YY__.S("a435", arguments)) {if(__E){eval(__YY__.gE("a435"));}else{debugger;}}
            if (this._bVerticalAlign) {
                var a = this._oText.getBounds().height;
                this._oText.y -= (a - this._iHeight) / 2 + this._iPaddingV
            }
        },
        __updateY: function() {
    //a436<
    if (__begin&&__YY__.S("a436", arguments)) {if(__E){eval(__YY__.gE("a436"));}else{debugger;}}
            this._oText.y = this._y + this._iPaddingV;
            switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
            }
        },
        __createText: function(a) {
    //a437<
    if (__begin&&__YY__.S("a437", arguments)) {if(__E){eval(__YY__.gE("a437"));}else{debugger;}}
            this._bDebug && (this._oDebugShape = new createjs.Shape,
            this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight),
            this._oContainer.addChild(this._oDebugShape));
            this._oText = new createjs.Text(a,this._iFontSize + "px " + this._szFont,this._szColor);
            this._oText.textBaseline = "middle";
            this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
            this._oText.textAlign = this._szAlign;
            this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
            switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
            }
            this._oContainer.addChild(this._oText);
            this.refreshText(a)
        },
        setX: function(a) {
    //a438<
    if (__begin&&__YY__.S("a438", arguments)) {if(__E){eval(__YY__.gE("a438"));}else{debugger;}}
            this._x = this._oText.x = a
        },
        setY: function(a) {
    //a439<
    if (__begin&&__YY__.S("a439", arguments)) {if(__E){eval(__YY__.gE("a439"));}else{debugger;}}
            this._y = this._oText.y = a
        },
        setVerticalAlign: function(a) {
    //a440<
    if (__begin&&__YY__.S("a440", arguments)) {if(__E){eval(__YY__.gE("a440"));}else{debugger;}}
            this._bVerticalAlign = a
        },
        setOutline: function(a) {
    //a441<
    if (__begin&&__YY__.S("a441", arguments)) {if(__E){eval(__YY__.gE("a441"));}else{debugger;}}
            null !== this._oText && (this._oText.outline = a)
        },
        setShadow: function(a, d, b, c) {
    //a442<
    if (__begin&&__YY__.S("a442", arguments)) {if(__E){eval(__YY__.gE("a442"));}else{debugger;}}
            null !== this._oText && (this._oText.shadow = new createjs.Shadow(a,d,b,c))
        },
        setColor: function(a) {
    //a443<
    if (__begin&&__YY__.S("a443", arguments)) {if(__E){eval(__YY__.gE("a443"));}else{debugger;}}
            this._oText.color = a
        },
        setAlpha: function(a) {
    //a444<
    if (__begin&&__YY__.S("a444", arguments)) {if(__E){eval(__YY__.gE("a444"));}else{debugger;}}
            this._oText.alpha = a
        },
        removeTweens: function() {
    //a445<
    if (__begin&&__YY__.S("a445", arguments)) {if(__E){eval(__YY__.gE("a445"));}else{debugger;}}
            createjs.Tween.removeTweens(this._oText)
        },
        getText: function() {
    //a446<
    if (__begin&&__YY__.S("a446", arguments)) {if(__E){eval(__YY__.gE("a446"));}else{debugger;}}
            return this._oText
        },
        getY: function() {
    //a447<
    if (__begin&&__YY__.S("a447", arguments)) {if(__E){eval(__YY__.gE("a447"));}else{debugger;}}
            return this._y
        },
        getFontSize: function() {
    //a448<
    if (__begin&&__YY__.S("a448", arguments)) {if(__E){eval(__YY__.gE("a448"));}else{debugger;}}
            return this._iFontSize
        },
        getBounds: function() {
    //a449<
    if (__begin&&__YY__.S("a449", arguments)) {if(__E){eval(__YY__.gE("a449"));}else{debugger;}}
            return this._oText.getBounds()
        },
        refreshText: function(a) {
    //a450<
    if (__begin&&__YY__.S("a450", arguments)) {if(__E){eval(__YY__.gE("a450"));}else{debugger;}}
            "" === a && (a = " ");
            null === this._oText && this.__createText(a);
            this._oText.text = a;
            this._oText.font = this._iStartingFontSize + "px " + this._szFont;
            this._oText.lineHeight = Math.round(this._iStartingFontSize * this._fLineHeightFactor);
            this.__autofit();
            this.__updateY();
            this.__verticalAlign()
        }
    };
    function CTLText(a, d, b, c, e, f, q, l, n, t, v, h, g, u, r, m, z) {
    //a451<
    if (__begin&&__YY__.S("a451", arguments)) {if(__E){eval(__YY__.gE("a451"));}else{debugger;}}
        this._oContainer = a;
        this._x = d;
        this._y = b;
        this._iWidth = c;
        this._iHeight = e;
        this._bMultiline = m;
        this._iFontSize = this._iStartingFontSize = f;
        this._szAlign = q;
        this._szColor = l;
        this._szFont = n;
        this._iPaddingH = v;
        this._iPaddingV = h;
        this._bVerticalAlign = r;
        this._bFitText = u;
        this._bDebug = z;
        this._oDebugShape = null;
        this._fLineHeightFactor = t;
        this._oText = null;
        g && this.__createText(g)
    }
    function CFiche(a, d, b, c, e, f, q) {
    //a452<
    if (__begin&&__YY__.S("a452", arguments)) {if(__E){eval(__YY__.gE("a452"));}else{debugger;}}
        var l, n, t, v, h, g, u;
        this._init = function(r, m, z, E, p) {
    //a453<
    if (__begin&&__YY__.S("a453", arguments)) {if(__E){eval(__YY__.gE("a453"));}else{debugger;}}
            u = new createjs.Container;
            u.x = r;
            u.y = m;
            u.scaleX = u.scaleY = e;
            q.addChild(u);
            r = s_oSpriteLibrary.getSprite("fiche_highlight");
            h = createBitmap(r);
            h.x = -9;
            h.y = -9;
            h.visible = !1;
            u.addChild(h);
            r = s_oSpriteLibrary.getSprite("fiche_" + z);
            g = createBitmap(r);
            u.addChild(g);
            new CTLText(u,8,8,r.width - 21,20,20,"center",COLOR_FICHE_PER_VALUE[z],FONT_GAME_1,1,0,0,E,!0,!0,!1,!1);
            p && (l = !1,
            n = [],
            t = [],
            u.on("mousedown", this.buttonDown),
            u.on("pressup", this.buttonRelease));
            u.regX = r.width / 2;
            u.regY = r.height / 2
        }
        ;
        this.addEventListener = function(r, m, z) {
    //a454<
    if (__begin&&__YY__.S("a454", arguments)) {if(__E){eval(__YY__.gE("a454"));}else{debugger;}}
            n[r] = m;
            t[r] = z
        }
        ;
        this.addEventListenerWithParams = function(r, m, z, E) {
    //a455<
    if (__begin&&__YY__.S("a455", arguments)) {if(__E){eval(__YY__.gE("a455"));}else{debugger;}}
            n[r] = m;
            t[r] = z;
            v = E
        }
        ;
        this.select = function(r) {
    //a456<
    if (__begin&&__YY__.S("a456", arguments)) {if(__E){eval(__YY__.gE("a456"));}else{debugger;}}
            h.visible = r
        }
        ;
        this.enable = function() {
    //a457<
    if (__begin&&__YY__.S("a457", arguments)) {if(__E){eval(__YY__.gE("a457"));}else{debugger;}}
            l = !1
        }
        ;
        this.disable = function() {
    //a458<
    if (__begin&&__YY__.S("a458", arguments)) {if(__E){eval(__YY__.gE("a458"));}else{debugger;}}
            l = !0
        }
        ;
        this.buttonRelease = function() {
    //a459<
    if (__begin&&__YY__.S("a459", arguments)) {if(__E){eval(__YY__.gE("a459"));}else{debugger;}}
            l || (u.scaleX = e,
            u.scaleY = e,
            n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(t[ON_MOUSE_UP], v))
        }
        ;
        this.buttonDown = function() {
    //a460<
    if (__begin&&__YY__.S("a460", arguments)) {if(__E){eval(__YY__.gE("a460"));}else{debugger;}}
            l || (u.scaleX = .9 * e,
            u.scaleY = .9 * e,
            n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN], v))
        }
        ;
        this.getX = function() {
    //a461<
    if (__begin&&__YY__.S("a461", arguments)) {if(__E){eval(__YY__.gE("a461"));}else{debugger;}}
            return u.x
        }
        ;
        this.getY = function() {
    //a462<
    if (__begin&&__YY__.S("a462", arguments)) {if(__E){eval(__YY__.gE("a462"));}else{debugger;}}
            return u.x
        }
        ;
        this._init(a, d, b, c, f)
    }
    function extractHostname(a) {
    //a463<
    if (__begin&&__YY__.S("a463", arguments)) {if(__E){eval(__YY__.gE("a463"));}else{debugger;}}
        a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
        a = a.split(":")[0];
        return a = a.split("?")[0]
    }
    function extractRootDomain(a) {
    //a464<
    if (__begin&&__YY__.S("a464", arguments)) {if(__E){eval(__YY__.gE("a464"));}else{debugger;}}
        a = extractHostname(a);
        var d = a.split(".")
          , b = d.length;
        2 < b && (a = d[b - 2] + "." + d[b - 1]);
        return a
    }
    var getClosestTop = function() {
    //a465<
    if (__begin&&__YY__.S("a465", arguments)) {if(__E){eval(__YY__.gE("a465"));}else{debugger;}}
        var a = window
          , d = !1;
        try {
            for (; a.parent.document !== a.document; )
                if (a.parent.document)
                    a = a.parent;
                else {
                    d = !0;
                    break
                }
        } catch (b) {
            d = !0
        }
        return {
            topFrame: a,
            err: d
        }
    }
      , getBestPageUrl = function(a) {
    //a466<
    if (__begin&&__YY__.S("a466", arguments)) {if(__E){eval(__YY__.gE("a466"));}else{debugger;}}
        var d = a.topFrame
          , b = "";
        if (a.err)
            try {
                try {
                    b = window.top.location.href
                } catch (e) {
                    var c = window.location.ancestorOrigins;
                    b = c[c.length - 1]
                }
            } catch (e) {
                b = d.document.referrer
            }
        else
            b = d.location.href;
        return b
    }
      , TOPFRAMEOBJ = getClosestTop()
      , PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
    function seekAndDestroy() {
    //a467<
    if (__begin&&__YY__.S("a467", arguments)) {if(__E){eval(__YY__.gE("a467"));}else{debugger;}}
        for (var a = extractRootDomain(PAGE_URL), d = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], b = 0; b < d.length; b++)
            if (d[b] === a)
                return !0;
        return !1
    }
    ;