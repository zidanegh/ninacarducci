/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const n = "transitionend",
    s = (e) => {
      do {
        e += Math.floor(1e6 * Math.random());
      } while (document.getElementById(e));
      return e;
    },
    o = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let n = t.getAttribute("href");
        if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
          (e = n && "#" !== n ? n.trim() : null);
      }
      return e;
    },
    r = (t) => {
      const e = o(t);
      return e && document.querySelector(e) ? e : null;
    },
    a = (t) => {
      const e = o(t);
      return e ? document.querySelector(e) : null;
    },
    c = (t) => {
      if (!t) return 0;
      let { transitionDuration: n, transitionDelay: i } =
        window.getComputedStyle(t);
      const s = Number.parseFloat(n),
        o = Number.parseFloat(i);
      return s || o
        ? ((n = n.split(",")[0]),
          (i = i.split(",")[0]),
          1e3 * (Number.parseFloat(n) + Number.parseFloat(i)))
        : 0;
    },
    l = (t) => {
      t.dispatchEvent(new Event(n));
    },
    f = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    u = (t) =>
      f(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    h = (t, e, n) => {
      Object.keys(n).forEach((s) => {
        const o = n[s],
          r = e[s],
          a =
            r && f(r)
              ? "element"
              : ((t) =>
                  null == t
                    ? `${t}`
                    : {}.toString
                        .call(t)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase())(r);
        if (!new RegExp(o).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${o}".`
          );
      });
    },
    d = (t) =>
      !(!f(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    p = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    g = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? g(t.parentNode)
        : null;
    },
    m = () => {},
    _ = (t) => {
      t.offsetHeight;
    },
    v = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    b = [],
    w = () => "rtl" === document.documentElement.dir,
    E = (t) => {
      ((t) => {
        "loading" === document.readyState
          ? (b.length ||
              document.addEventListener("DOMContentLoaded", () => {
                b.forEach((t) => t());
              }),
            b.push(t))
          : t();
      })(() => {
        const e = v();
        if (e) {
          const n = t.NAME,
            i = e.fn[n];
          (e.fn[n] = t.jQueryInterface),
            (e.fn[n].Constructor = t),
            (e.fn[n].noConflict = () => ((e.fn[n] = i), t.jQueryInterface));
        }
      });
    },
    A = (t) => {
      "function" == typeof t && t();
    },
    T = (t, e, i = !0) => {
      if (!i) return void A(t);
      const o = c(e) + 5;
      let r = !1;
      const a = ({ target: i }) => {
        i === e && ((r = !0), e.removeEventListener(n, a), A(t));
      };
      e.addEventListener(n, a),
        setTimeout(() => {
          r || l(e);
        }, o);
    },
    O = (t, e, n, i) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!n && i ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += n ? 1 : -1),
        i && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    C = /[^.]*(?=\..*)\.|.*/,
    k = /\..*/,
    $ = /::\d+$/,
    L = {};
  let x = 1;
  const D = { mouseenter: "mouseover", mouseleave: "mouseout" },
    S = /^(mouseenter|mouseleave)/i,
    N = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function I(t, e) {
    return (e && `${e}::${x++}`) || t.uidEvent || x++;
  }
  function P(t) {
    const e = I(t);
    return (t.uidEvent = e), (L[e] = L[e] || {}), L[e];
  }
  function H(t, e, n = null) {
    const i = Object.keys(t);
    for (let s = 0, o = i.length; s < o; s++) {
      const o = t[i[s]];
      if (o.originalHandler === e && o.delegationSelector === n) return o;
    }
    return null;
  }
  function B(t, e, n) {
    const i = "string" == typeof e,
      s = i ? n : e;
    let o = q(t);
    return N.has(o) || (o = t), [i, s, o];
  }
  function R(t, e, n, i, s) {
    if ("string" != typeof e || !t) return;
    if ((n || ((n = i), (i = null)), S.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      i ? (i = t(i)) : (n = t(n));
    }
    const [o, r, a] = B(e, n, i),
      c = P(t),
      l = c[a] || (c[a] = {}),
      f = H(l, r, o ? n : null);
    if (f) return void (f.oneOff = f.oneOff && s);
    const u = I(r, e.replace(C, "")),
      h = o
        ? (function (t, e, n) {
            return function i(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      i.oneOff && F.off(t, s.type, e, n),
                      n.apply(r, [s])
                    );
              return null;
            };
          })(t, n, i)
        : (function (t, e) {
            return function n(i) {
              return (
                (i.delegateTarget = t),
                n.oneOff && F.off(t, i.type, e),
                e.apply(t, [i])
              );
            };
          })(t, n);
    (h.delegationSelector = o ? n : null),
      (h.originalHandler = r),
      (h.oneOff = s),
      (h.uidEvent = u),
      (l[u] = h),
      t.addEventListener(a, h, o);
  }
  function W(t, e, n, i, s) {
    const o = H(e[n], i, s);
    o && (t.removeEventListener(n, o, Boolean(s)), delete e[n][o.uidEvent]);
  }
  function q(t) {
    return (t = t.replace(k, "")), D[t] || t;
  }
  const F = {
      on(t, e, n, i) {
        R(t, e, n, i, !1);
      },
      one(t, e, n, i) {
        R(t, e, n, i, !0);
      },
      off(t, e, n, i) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = B(e, n, i),
          a = r !== e,
          c = P(t),
          l = e.startsWith(".");
        if (void 0 !== o) {
          if (!c || !c[r]) return;
          return void W(t, c, r, o, s ? n : null);
        }
        l &&
          Object.keys(c).forEach((n) => {
            !(function (t, e, n, i) {
              const s = e[n] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(i)) {
                  const i = s[o];
                  W(t, e, n, i.originalHandler, i.delegationSelector);
                }
              });
            })(t, c, n, e.slice(1));
          });
        const f = c[r] || {};
        Object.keys(f).forEach((n) => {
          const i = n.replace($, "");
          if (!a || e.includes(i)) {
            const e = f[n];
            W(t, c, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, n) {
        if ("string" != typeof e || !t) return null;
        const i = v(),
          s = q(e),
          o = e !== s,
          r = N.has(s);
        let a,
          c = !0,
          l = !0,
          f = !1,
          u = null;
        return (
          o &&
            i &&
            ((a = i.Event(e, n)),
            i(t).trigger(a),
            (c = !a.isPropagationStopped()),
            (l = !a.isImmediatePropagationStopped()),
            (f = a.isDefaultPrevented())),
          r
            ? ((u = document.createEvent("HTMLEvents")), u.initEvent(s, c, !0))
            : (u = new CustomEvent(e, { bubbles: c, cancelable: !0 })),
          void 0 !== n &&
            Object.keys(n).forEach((t) => {
              Object.defineProperty(u, t, { get: () => n[t] });
            }),
          f && u.preventDefault(),
          l && t.dispatchEvent(u),
          u.defaultPrevented && void 0 !== a && a.preventDefault(),
          u
        );
      },
    },
    U = new Map(),
    V = {
      set(t, e, n) {
        U.has(t) || U.set(t, new Map());
        const i = U.get(t);
        i.has(e) || 0 === i.size
          ? i.set(e, n)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (t, e) => (U.has(t) && U.get(t).get(e)) || null,
      remove(t, e) {
        if (!U.has(t)) return;
        const n = U.get(t);
        n.delete(e), 0 === n.size && U.delete(t);
      },
    };
  class X {
    constructor(t) {
      (t = u(t)) &&
        ((this._element = t),
        V.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      V.remove(this._element, this.constructor.DATA_KEY),
        F.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, n = !0) {
      T(t, e, n);
    }
    static getInstance(t) {
      return V.get(u(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const Y = (t, e = "hide") => {
      const n = `click.dismiss${t.EVENT_KEY}`,
        i = t.NAME;
      F.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
        if (
          (["A", "AREA"].includes(this.tagName) && n.preventDefault(), p(this))
        )
          return;
        const s = a(this) || this.closest(`.${i}`);
        t.getOrCreateInstance(s)[e]();
      });
    },
    Z = ".bs.alert",
    J = `close${Z}`,
    tt = `closed${Z}`;
  class it extends X {
    static get NAME() {
      return "alert";
    }
    close() {
      if (F.trigger(this._element, J).defaultPrevented) return;
      this._element.classList.remove("show");
      const e = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(), F.trigger(this._element, tt), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = it.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  Y(it, "close"), E(it);
  const lt = '[data-bs-toggle="button"]';
  class ut extends X {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ut.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function ht(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function dt(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  F.on(document, "click.bs.button.data-api", lt, (t) => {
    t.preventDefault();
    const e = t.target.closest(lt);
    ut.getOrCreateInstance(e).toggle();
  }),
    E(ut);
  const pt = {
      setDataAttribute(t, e, n) {
        t.setAttribute(`data-bs-${dt(e)}`, n);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${dt(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((n) => {
              let i = n.replace(/^bs/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = ht(t.dataset[n]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => ht(t.getAttribute(`data-bs-${dt(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    mt = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const n = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(e) && n.push(i), (i = i.parentNode);
        return n;
      },
      prev(t, e) {
        let n = t.previousElementSibling;
        for (; n; ) {
          if (n.matches(e)) return [n];
          n = n.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let n = t.nextElementSibling;
        for (; n; ) {
          if (n.matches(e)) return [n];
          n = n.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter((t) => !p(t) && d(t));
      },
    },
    _t = "carousel",
    bt = ".bs.carousel",
    yt = ".data-api",
    Ot = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Ct = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    kt = "next",
    $t = "prev",
    Lt = "left",
    xt = "right",
    Dt = { ArrowLeft: xt, ArrowRight: Lt },
    St = `slide${bt}`,
    Nt = `slid${bt}`,
    It = `keydown${bt}`,
    Pt = `mouseenter${bt}`,
    jt = `mouseleave${bt}`,
    Mt = `touchstart${bt}`,
    Ht = `touchmove${bt}`,
    Bt = `touchend${bt}`,
    Rt = `pointerdown${bt}`,
    Wt = `pointerup${bt}`,
    zt = `dragstart${bt}`,
    qt = `load${bt}${yt}`,
    Ft = `click${bt}${yt}`,
    Vt = "active",
    te = ".active.carousel-item";
  class fe extends X {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = mt.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return Ot;
    }
    static get NAME() {
      return _t;
    }
    next() {
      this._slide(kt);
    }
    nextWhenVisible() {
      !document.hidden && d(this._element) && this.next();
    }
    prev() {
      this._slide($t);
    }
    pause(t) {
      t || (this._isPaused = !0),
        mt.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (l(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = mt.findOne(te, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void F.one(this._element, Nt, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const n = t > e ? kt : $t;
      this._slide(n, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...Ot,
          ...pt.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        h(_t, t, Ct),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? xt : Lt);
    }
    _addEventListeners() {
      this._config.keyboard && F.on(this._element, It, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (F.on(this._element, Pt, (t) => this.pause(t)),
          F.on(this._element, jt, (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) =>
          this._pointerEvent &&
          ("pen" === t.pointerType || "touch" === t.pointerType),
        e = (e) => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        n = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        i = (e) => {
          t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      mt.find(".carousel-item img", this._element).forEach((t) => {
        F.on(t, zt, (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (F.on(this._element, Rt, (t) => e(t)),
            F.on(this._element, Wt, (t) => i(t)),
            this._element.classList.add("pointer-event"))
          : (F.on(this._element, Mt, (t) => e(t)),
            F.on(this._element, Ht, (t) => n(t)),
            F.on(this._element, Bt, (t) => i(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = Dt[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? mt.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const n = t === kt;
      return O(this._items, e, n, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const n = this._getItemIndex(t),
        i = this._getItemIndex(mt.findOne(te, this._element));
      return F.trigger(this._element, St, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = mt.findOne(".active", this._indicatorsElement);
        e.classList.remove(Vt), e.removeAttribute("aria-current");
        const n = mt.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < n.length; e++)
          if (
            Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            n[e].classList.add(Vt), n[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || mt.findOne(te, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const n = this._directionToOrder(t),
        i = mt.findOne(te, this._element),
        s = this._getItemIndex(i),
        o = e || this._getItemByOrder(n, i),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        c = n === kt,
        l = c ? "carousel-item-start" : "carousel-item-end",
        f = c ? "carousel-item-next" : "carousel-item-prev",
        u = this._orderToDirection(n);
      if (o && o.classList.contains(Vt)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, u).defaultPrevented) return;
      if (!i || !o) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(o),
        (this._activeElement = o);
      const d = () => {
        F.trigger(this._element, Nt, {
          relatedTarget: o,
          direction: u,
          from: s,
          to: r,
        });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(f), _(o), i.classList.add(l), o.classList.add(l);
        const t = () => {
          o.classList.remove(l, f),
            o.classList.add(Vt),
            i.classList.remove(Vt, f, l),
            (this._isSliding = !1),
            setTimeout(d, 0);
        };
        this._queueCallback(t, i, !0);
      } else i.classList.remove(Vt), o.classList.add(Vt), (this._isSliding = !1), d();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [xt, Lt].includes(t)
        ? w()
          ? t === Lt
            ? $t
            : kt
          : t === Lt
          ? kt
          : $t
        : t;
    }
    _orderToDirection(t) {
      return [kt, $t].includes(t)
        ? w()
          ? t === $t
            ? Lt
            : xt
          : t === $t
          ? xt
          : Lt
        : t;
    }
    static carouselInterface(t, e) {
      const n = fe.getOrCreateInstance(t, e);
      let { _config: i } = n;
      "object" == typeof e && (i = { ...i, ...e });
      const s = "string" == typeof e ? e : i.slide;
      if ("number" == typeof e) n.to(e);
      else if ("string" == typeof s) {
        if (void 0 === n[s]) throw new TypeError(`No method named "${s}"`);
        n[s]();
      } else i.interval && i.ride && (n.pause(), n.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        fe.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = a(this);
      if (!e || !e.classList.contains("carousel")) return;
      const n = { ...pt.getDataAttributes(e), ...pt.getDataAttributes(this) },
        i = this.getAttribute("data-bs-slide-to");
      i && (n.interval = !1),
        fe.carouselInterface(e, n),
        i && fe.getInstance(e).to(i),
        t.preventDefault();
    }
  }
  F.on(
    document,
    Ft,
    "[data-bs-slide], [data-bs-slide-to]",
    fe.dataApiClickHandler
  ),
    F.on(window, qt, () => {
      const t = mt.find('[data-bs-ride="carousel"]');
      for (let e = 0, n = t.length; e < n; e++)
        fe.carouselInterface(t[e], fe.getInstance(t[e]));
    }),
    E(fe);
  const ue = "collapse",
    he = "bs.collapse",
    de = `.${he}`,
    ge = { toggle: !0, parent: null },
    me = { toggle: "boolean", parent: "(null|element)" },
    _e = `show${de}`,
    ve = `shown${de}`,
    be = `hide${de}`,
    ye = `hidden${de}`,
    we = `click${de}.data-api`,
    Ee = "show",
    Ae = "collapse",
    Te = "collapsing",
    Oe = "collapsed",
    Ce = `:scope .${Ae} .${Ae}`,
    De = '[data-bs-toggle="collapse"]';
  class Se extends X {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const n = mt.find(De);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t],
          i = r(e),
          s = mt.find(i).filter((t) => t === this._element);
        null !== i &&
          s.length &&
          ((this._selector = i), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ge;
    }
    static get NAME() {
      return ue;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e,
        t = [];
      if (this._config.parent) {
        const e = mt.find(Ce, this._config.parent);
        t = mt
          .find(".collapse.show, .collapse.collapsing", this._config.parent)
          .filter((t) => !e.includes(t));
      }
      const n = mt.findOne(this._selector);
      if (t.length) {
        const i = t.find((t) => n !== t);
        if (((e = i ? Se.getInstance(i) : null), e && e._isTransitioning))
          return;
      }
      if (F.trigger(this._element, _e).defaultPrevented) return;
      t.forEach((t) => {
        n !== t && Se.getOrCreateInstance(t, { toggle: !1 }).hide(),
          e || V.set(t, he, null);
      });
      const s = this._getDimension();
      this._element.classList.remove(Ae),
        this._element.classList.add(Te),
        (this._element.style[s] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const a = `scroll${s[0].toUpperCase() + s.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(Te),
            this._element.classList.add(Ae, Ee),
            (this._element.style[s] = ""),
            F.trigger(this._element, ve);
        },
        this._element,
        !0
      ),
        (this._element.style[s] = `${this._element[a]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (F.trigger(this._element, be).defaultPrevented) return;
      const e = this._getDimension();
      (this._element.style[e] = `${
        this._element.getBoundingClientRect()[e]
      }px`),
        _(this._element),
        this._element.classList.add(Te),
        this._element.classList.remove(Ae, Ee);
      const n = this._triggerArray.length;
      for (let t = 0; t < n; t++) {
        const e = this._triggerArray[t],
          n = a(e);
        n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1);
      }
      this._isTransitioning = !0;
      (this._element.style[e] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Te),
              this._element.classList.add(Ae),
              F.trigger(this._element, ye);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(Ee);
    }
    _getConfig(t) {
      return (
        ((t = { ...ge, ...pt.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = u(t.parent)),
        h(ue, t, me),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = mt.find(Ce, this._config.parent);
      mt.find(De, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = a(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove(Oe) : t.classList.add(Oe),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const n = Se.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t]();
        }
      });
    }
  }
  F.on(document, we, De, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = r(this);
    mt.find(e).forEach((t) => {
      Se.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    E(Se);
  var Ne = "top",
    Ie = "bottom",
    Pe = "right",
    je = "left",
    Me = "auto",
    He = [Ne, Ie, Pe, je],
    Be = "start",
    Re = "end",
    We = "clippingParents",
    ze = "viewport",
    qe = "popper",
    Fe = "reference",
    Ue = He.reduce(function (t, e) {
      return t.concat([e + "-" + Be, e + "-" + Re]);
    }, []),
    Ve = [].concat(He, [Me]).reduce(function (t, e) {
      return t.concat([e, e + "-" + Be, e + "-" + Re]);
    }, []),
    Ke = "beforeRead",
    Ye = "afterRead",
    Qe = "beforeMain",
    Ze = "afterMain",
    Je = "beforeWrite",
    en = "afterWrite",
    nn = [Ke, "read", Ye, Qe, "main", Ze, Je, "write", en];
  function sn(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function on(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function rn(t) {
    return t instanceof on(t).Element || t instanceof Element;
  }
  function an(t) {
    return t instanceof on(t).HTMLElement || t instanceof HTMLElement;
  }
  function cn(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof on(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const un = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var n = e.styles[t] || {},
          i = e.attributes[t] || {},
          s = e.elements[t];
        an(s) &&
          sn(s) &&
          (Object.assign(s.style, n),
          Object.keys(i).forEach(function (t) {
            var e = i[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        n = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, n.popper),
        (e.styles = n),
        e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var i = e.elements[t],
              s = e.attributes[t] || {},
              r = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            an(i) &&
              sn(i) &&
              (Object.assign(i.style, r),
              Object.keys(s).forEach(function (t) {
                i.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function hn(t) {
    return t.split("-")[0];
  }
  function dn(t, e) {
    var n = t.getBoundingClientRect();
    return {
      width: n.width / 1,
      height: n.height / 1,
      top: n.top / 1,
      right: n.right / 1,
      bottom: n.bottom / 1,
      left: n.left / 1,
      x: n.left / 1,
      y: n.top / 1,
    };
  }
  function pn(t) {
    var e = dn(t),
      n = t.offsetWidth,
      i = t.offsetHeight;
    return (
      Math.abs(e.width - n) <= 1 && (n = e.width),
      Math.abs(e.height - i) <= 1 && (i = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
    );
  }
  function gn(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && cn(n)) {
      var i = e;
      do {
        if (i && t.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function mn(t) {
    return on(t).getComputedStyle(t);
  }
  function _n(t) {
    return ["table", "td", "th"].indexOf(sn(t)) >= 0;
  }
  function vn(t) {
    return (
      (rn(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function bn(t) {
    return "html" === sn(t)
      ? t
      : t.assignedSlot || t.parentNode || (cn(t) ? t.host : null) || vn(t);
  }
  function yn(t) {
    return an(t) && "fixed" !== mn(t).position ? t.offsetParent : null;
  }
  function En(t) {
    for (var e = on(t), n = yn(t); n && _n(n) && "static" === mn(n).position; )
      n = yn(n);
    return n &&
      ("html" === sn(n) || ("body" === sn(n) && "static" === mn(n).position))
      ? e
      : n ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              an(t) &&
              "fixed" === mn(t).position
            )
              return null;
            for (
              var s = bn(t);
              an(s) && ["html", "body"].indexOf(sn(s)) < 0;

            ) {
              var o = mn(s);
              if (
                "none" !== o.transform ||
                "none" !== o.perspective ||
                "paint" === o.contain ||
                -1 !== ["transform", "perspective"].indexOf(o.willChange) ||
                (e && "filter" === o.willChange) ||
                (e && o.filter && "none" !== o.filter)
              )
                return s;
              s = s.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function An(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var Tn = Math.max,
    On = Math.min,
    Cn = Math.round;
  function kn(t, e, n) {
    return Tn(t, On(e, n));
  }
  function Ln(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function xn(t, e) {
    return e.reduce(function (e, n) {
      return (e[n] = t), e;
    }, {});
  }
  const In = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        n = t.state,
        i = t.name,
        s = t.options,
        o = n.elements.arrow,
        r = n.modifiersData.popperOffsets,
        a = hn(n.placement),
        c = An(a),
        f = [je, Pe].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var u = (function (e, n) {
            return Ln(
              "number" !=
                typeof (e =
                  "function" == typeof e
                    ? e(Object.assign({}, n.rects, { placement: n.placement }))
                    : e)
                ? e
                : xn(e, He)
            );
          })(s.padding, n),
          h = pn(o),
          d = "y" === c ? Ne : je,
          p = "y" === c ? Ie : Pe,
          g =
            n.rects.reference[f] +
            n.rects.reference[c] -
            r[c] -
            n.rects.popper[f],
          m = r[c] - n.rects.reference[c],
          _ = En(o),
          v = _ ? ("y" === c ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
          b = g / 2 - m / 2,
          y = u[d],
          w = v - h[f] - u[p],
          E = v / 2 - h[f] / 2 + b,
          A = kn(y, E, w),
          T = c;
        n.modifiersData[i] = (((e = {})[T] = A), (e.centerOffset = A - E), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        s = void 0 === i ? "[data-popper-arrow]" : i;
      null != s &&
        ("string" != typeof s || (s = e.elements.popper.querySelector(s))) &&
        gn(e.elements.popper, s) &&
        (e.elements.arrow = s);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Pn(t) {
    return t.split("-")[1];
  }
  var jn = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Hn(t) {
    var e,
      n = t.popper,
      i = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      c = t.gpuAcceleration,
      l = t.adaptive,
      f = t.roundOffsets,
      u =
        !0 === f
          ? (function (t) {
              var e = t.x,
                n = t.y,
                s = window.devicePixelRatio || 1;
              return { x: Cn(Cn(e * s) / s) || 0, y: Cn(Cn(n * s) / s) || 0 };
            })(r)
          : "function" == typeof f
          ? f(r)
          : r,
      h = u.x,
      d = void 0 === h ? 0 : h,
      p = u.y,
      g = void 0 === p ? 0 : p,
      m = r.hasOwnProperty("x"),
      _ = r.hasOwnProperty("y"),
      v = je,
      b = Ne,
      y = window;
    if (l) {
      var w = En(n),
        E = "clientHeight",
        A = "clientWidth";
      w === on(n) &&
        "static" !== mn((w = vn(n))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (A = "scrollWidth")),
        (s !== Ne && ((s !== je && s !== Pe) || o !== Re)) ||
          ((b = Ie), (g -= w[E] - i.height), (g *= c ? 1 : -1)),
        (s !== je && ((s !== Ne && s !== Ie) || o !== Re)) ||
          ((v = Pe), (d -= w[A] - i.width), (d *= c ? 1 : -1));
    }
    var O,
      T = Object.assign({ position: a }, l && jn);
    return c
      ? Object.assign(
          {},
          T,
          (((O = {})[b] = _ ? "0" : ""),
          (O[v] = m ? "0" : ""),
          (O.transform =
            (y.devicePixelRatio || 1) <= 1
              ? "translate(" + d + "px, " + g + "px)"
              : "translate3d(" + d + "px, " + g + "px, 0)"),
          O)
        )
      : Object.assign(
          {},
          T,
          (((e = {})[b] = _ ? g + "px" : ""),
          (e[v] = m ? d + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  const Rn = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = n.gpuAcceleration,
        s = void 0 === i || i,
        o = n.adaptive,
        r = void 0 === o || o,
        a = n.roundOffsets,
        c = void 0 === a || a,
        l = {
          placement: hn(e.placement),
          variation: Pn(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          Hn(
            Object.assign({}, l, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: c,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            Hn(
              Object.assign({}, l, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: c,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var Wn = { passive: !0 };
  const qn = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        n = t.instance,
        i = t.options,
        s = i.scroll,
        o = void 0 === s || s,
        r = i.resize,
        a = void 0 === r || r,
        c = on(e.elements.popper),
        l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          l.forEach(function (t) {
            t.addEventListener("scroll", n.update, Wn);
          }),
        a && c.addEventListener("resize", n.update, Wn),
        function () {
          o &&
            l.forEach(function (t) {
              t.removeEventListener("scroll", n.update, Wn);
            }),
            a && c.removeEventListener("resize", n.update, Wn);
        }
      );
    },
    data: {},
  };
  var Fn = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Un(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Fn[t];
    });
  }
  var Vn = { start: "end", end: "start" };
  function Kn(t) {
    return t.replace(/start|end/g, function (t) {
      return Vn[t];
    });
  }
  function Xn(t) {
    var e = on(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Yn(t) {
    return dn(vn(t)).left + Xn(t).scrollLeft;
  }
  function Zn(t) {
    var e = mn(t),
      n = e.overflow,
      i = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + i);
  }
  function Jn(t) {
    return ["html", "body", "#document"].indexOf(sn(t)) >= 0
      ? t.ownerDocument.body
      : an(t) && Zn(t)
      ? t
      : Jn(bn(t));
  }
  function ti(t, e) {
    var n;
    void 0 === e && (e = []);
    var i = Jn(t),
      s = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
      o = on(i),
      r = s ? [o].concat(o.visualViewport || [], Zn(i) ? i : []) : i,
      a = e.concat(r);
    return s ? a : a.concat(ti(bn(r)));
  }
  function ei(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function ii(t, e) {
    return e === ze
      ? ei(
          (function (t) {
            var e = on(t),
              n = vn(t),
              i = e.visualViewport,
              s = n.clientWidth,
              o = n.clientHeight,
              r = 0,
              a = 0;
            return (
              i &&
                ((s = i.width),
                (o = i.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = i.offsetLeft), (a = i.offsetTop))),
              { width: s, height: o, x: r + Yn(t), y: a }
            );
          })(t)
        )
      : an(e)
      ? (function (t) {
          var e = dn(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : ei(
          (function (t) {
            var e,
              n = vn(t),
              i = Xn(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Tn(
                n.scrollWidth,
                n.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Tn(
                n.scrollHeight,
                n.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -i.scrollLeft + Yn(t),
              c = -i.scrollTop;
            return (
              "rtl" === mn(s || n).direction &&
                (a += Tn(n.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: c }
            );
          })(vn(t))
        );
  }
  function oi(t, e, n) {
    var i =
        "clippingParents" === e
          ? (function (t) {
              var e = ti(bn(t)),
                i =
                  ["absolute", "fixed"].indexOf(mn(t).position) >= 0 && an(t)
                    ? En(t)
                    : t;
              return rn(i)
                ? e.filter(function (t) {
                    return rn(t) && gn(t, i) && "body" !== sn(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      s = [].concat(i, [n]),
      o = s[0],
      r = s.reduce(function (e, n) {
        var i = ii(t, n);
        return (
          (e.top = Tn(i.top, e.top)),
          (e.right = On(i.right, e.right)),
          (e.bottom = On(i.bottom, e.bottom)),
          (e.left = Tn(i.left, e.left)),
          e
        );
      }, ii(t, o));
    return (
      (r.width = r.right - r.left),
      (r.height = r.bottom - r.top),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function ri(t) {
    var c,
      e = t.reference,
      n = t.element,
      i = t.placement,
      s = i ? hn(i) : null,
      o = i ? Pn(i) : null,
      r = e.x + e.width / 2 - n.width / 2,
      a = e.y + e.height / 2 - n.height / 2;
    switch (s) {
      case Ne:
        c = { x: r, y: e.y - n.height };
        break;
      case Ie:
        c = { x: r, y: e.y + e.height };
        break;
      case Pe:
        c = { x: e.x + e.width, y: a };
        break;
      case je:
        c = { x: e.x - n.width, y: a };
        break;
      default:
        c = { x: e.x, y: e.y };
    }
    var l = s ? An(s) : null;
    if (null != l) {
      var f = "y" === l ? "height" : "width";
      switch (o) {
        case Be:
          c[l] = c[l] - (e[f] / 2 - n[f] / 2);
          break;
        case Re:
          c[l] = c[l] + (e[f] / 2 - n[f] / 2);
      }
    }
    return c;
  }
  function ai(t, e) {
    void 0 === e && (e = {});
    var n = e,
      i = n.placement,
      s = void 0 === i ? t.placement : i,
      o = n.boundary,
      r = void 0 === o ? We : o,
      a = n.rootBoundary,
      c = void 0 === a ? ze : a,
      l = n.elementContext,
      f = void 0 === l ? qe : l,
      u = n.altBoundary,
      h = void 0 !== u && u,
      d = n.padding,
      p = void 0 === d ? 0 : d,
      g = Ln("number" != typeof p ? p : xn(p, He)),
      m = f === qe ? Fe : qe,
      _ = t.rects.popper,
      v = t.elements[h ? m : f],
      b = oi(rn(v) ? v : v.contextElement || vn(t.elements.popper), r, c),
      y = dn(t.elements.reference),
      w = ri({ reference: y, element: _, strategy: "absolute", placement: s }),
      E = ei(Object.assign({}, _, w)),
      A = f === qe ? E : y,
      T = {
        top: b.top - A.top + g.top,
        bottom: A.bottom - b.bottom + g.bottom,
        left: b.left - A.left + g.left,
        right: A.right - b.right + g.right,
      },
      O = t.modifiersData.offset;
    if (f === qe && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [Pe, Ie].indexOf(t) >= 0 ? 1 : -1,
          n = [Ne, Ie].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[n] * e;
      });
    }
    return T;
  }
  const ui = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = t.name;
      if (!e.modifiersData[i]._skip) {
        for (
          var s = n.mainAxis,
            o = void 0 === s || s,
            r = n.altAxis,
            a = void 0 === r || r,
            c = n.fallbackPlacements,
            l = n.padding,
            f = n.boundary,
            u = n.rootBoundary,
            h = n.altBoundary,
            d = n.flipVariations,
            p = void 0 === d || d,
            g = n.allowedAutoPlacements,
            m = e.options.placement,
            _ = hn(m),
            b =
              c ||
              (_ === m || !p
                ? [Un(m)]
                : (function (t) {
                    if (hn(t) === Me) return [];
                    var e = Un(t);
                    return [Kn(t), e, Kn(e)];
                  })(m)),
            y = [m].concat(b).reduce(function (t, n) {
              return t.concat(
                hn(n) === Me
                  ? (function (t, e) {
                      void 0 === e && (e = {});
                      var n = e,
                        i = n.placement,
                        s = n.boundary,
                        o = n.rootBoundary,
                        r = n.padding,
                        a = n.flipVariations,
                        c = n.allowedAutoPlacements,
                        l = void 0 === c ? Ve : c,
                        f = Pn(i),
                        u = f
                          ? a
                            ? Ue
                            : Ue.filter(function (t) {
                                return Pn(t) === f;
                              })
                          : He,
                        h = u.filter(function (t) {
                          return l.indexOf(t) >= 0;
                        });
                      0 === h.length && (h = u);
                      var d = h.reduce(function (e, n) {
                        return (
                          (e[n] = ai(t, {
                            placement: n,
                            boundary: s,
                            rootBoundary: o,
                            padding: r,
                          })[hn(n)]),
                          e
                        );
                      }, {});
                      return Object.keys(d).sort(function (t, e) {
                        return d[t] - d[e];
                      });
                    })(e, {
                      placement: n,
                      boundary: f,
                      rootBoundary: u,
                      padding: l,
                      flipVariations: p,
                      allowedAutoPlacements: g,
                    })
                  : n
              );
            }, []),
            w = e.rects.reference,
            E = e.rects.popper,
            A = new Map(),
            T = !0,
            O = y[0],
            C = 0;
          C < y.length;
          C++
        ) {
          var k = y[C],
            $ = hn(k),
            L = Pn(k) === Be,
            x = [Ne, Ie].indexOf($) >= 0,
            D = x ? "width" : "height",
            S = ai(e, {
              placement: k,
              boundary: f,
              rootBoundary: u,
              altBoundary: h,
              padding: l,
            }),
            N = x ? (L ? Pe : je) : L ? Ie : Ne;
          w[D] > E[D] && (N = Un(N));
          var I = Un(N),
            P = [];
          if (
            (o && P.push(S[$] <= 0),
            a && P.push(S[N] <= 0, S[I] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (O = k), (T = !1);
            break;
          }
          A.set(k, P);
        }
        if (T)
          for (
            var M = function (e) {
                var n = y.find(function (t) {
                  var n = A.get(t);
                  if (n)
                    return n.slice(0, e).every(function (t) {
                      return t;
                    });
                });
                if (n) return (O = n), "break";
              },
              H = p ? 3 : 1;
            H > 0;
            H--
          ) {
            if ("break" === M(H)) break;
          }
        e.placement !== O &&
          ((e.modifiersData[i]._skip = !0), (e.placement = O), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function hi(t, e, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: t.top - e.height - n.y,
        right: t.right - e.width + n.x,
        bottom: t.bottom - e.height + n.y,
        left: t.left - e.width - n.x,
      }
    );
  }
  function di(t) {
    return [Ne, Pe, Ie, je].some(function (e) {
      return t[e] >= 0;
    });
  }
  const gi = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state,
        n = t.name,
        i = e.rects.reference,
        s = e.rects.popper,
        o = e.modifiersData.preventOverflow,
        r = ai(e, { elementContext: "reference" }),
        a = ai(e, { altBoundary: !0 }),
        c = hi(r, i),
        l = hi(a, s, o),
        f = di(c),
        u = di(l);
      (e.modifiersData[n] = {
        referenceClippingOffsets: c,
        popperEscapeOffsets: l,
        isReferenceHidden: f,
        hasPopperEscaped: u,
      }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": f,
          "data-popper-escaped": u,
        }));
    },
  };
  const vi = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = t.name,
        s = n.offset,
        o = void 0 === s ? [0, 0] : s,
        r = Ve.reduce(function (t, n) {
          return (
            (t[n] = (function (t, e, n) {
              var i = hn(t),
                s = [je, Ne].indexOf(i) >= 0 ? -1 : 1,
                o =
                  "function" == typeof n
                    ? n(Object.assign({}, e, { placement: t }))
                    : n,
                r = o[0],
                a = o[1];
              return (
                (r = r || 0),
                (a = (a || 0) * s),
                [je, Pe].indexOf(i) >= 0 ? { x: a, y: r } : { x: r, y: a }
              );
            })(n, e.rects, o)),
            t
          );
        }, {}),
        a = r[e.placement],
        c = a.x,
        l = a.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += c),
        (e.modifiersData.popperOffsets.y += l)),
        (e.modifiersData[i] = r);
    },
  };
  const yi = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (t) {
      var e = t.state,
        n = t.name;
      e.modifiersData[n] = ri({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
      });
    },
    data: {},
  };
  const Ai = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = t.name,
        s = n.mainAxis,
        o = void 0 === s || s,
        r = n.altAxis,
        a = void 0 !== r && r,
        c = n.boundary,
        l = n.rootBoundary,
        f = n.altBoundary,
        u = n.padding,
        h = n.tether,
        d = void 0 === h || h,
        p = n.tetherOffset,
        g = void 0 === p ? 0 : p,
        m = ai(e, { boundary: c, rootBoundary: l, padding: u, altBoundary: f }),
        _ = hn(e.placement),
        v = Pn(e.placement),
        b = !v,
        y = An(_),
        w = (function (t) {
          return "x" === t ? "y" : "x";
        })(y),
        E = e.modifiersData.popperOffsets,
        A = e.rects.reference,
        T = e.rects.popper,
        O =
          "function" == typeof g
            ? g(Object.assign({}, e.rects, { placement: e.placement }))
            : g,
        C = { x: 0, y: 0 };
      if (E) {
        if (o || a) {
          var k = "y" === y ? Ne : je,
            $ = "y" === y ? Ie : Pe,
            L = "y" === y ? "height" : "width",
            x = E[y],
            D = E[y] + m[k],
            S = E[y] - m[$],
            N = d ? -T[L] / 2 : 0,
            I = v === Be ? A[L] : T[L],
            P = v === Be ? -T[L] : -A[L],
            j = e.elements.arrow,
            M = d && j ? pn(j) : { width: 0, height: 0 },
            H = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            B = H[k],
            R = H[$],
            W = kn(0, A[L], M[L]),
            z = b ? A[L] / 2 - N - W - B - O : I - W - B - O,
            q = b ? -A[L] / 2 + N + W + R + O : P + W + R + O,
            F = e.elements.arrow && En(e.elements.arrow),
            U = F ? ("y" === y ? F.clientTop || 0 : F.clientLeft || 0) : 0,
            V = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement][y]
              : 0,
            K = E[y] + z - V - U,
            X = E[y] + q - V;
          if (o) {
            var Y = kn(d ? On(D, K) : D, x, d ? Tn(S, X) : S);
            (E[y] = Y), (C[y] = Y - x);
          }
          if (a) {
            var Q = "x" === y ? Ne : je,
              G = "x" === y ? Ie : Pe,
              Z = E[w],
              J = Z + m[Q],
              tt = Z - m[G],
              et = kn(d ? On(J, K) : J, Z, d ? Tn(tt, X) : tt);
            (E[w] = et), (C[w] = et - Z);
          }
        }
        e.modifiersData[i] = C;
      }
    },
    requiresIfExists: ["offset"],
  };
  function ki(t, e, n) {
    void 0 === n && (n = !1);
    var i = an(e);
    an(e) &&
      (function (t) {
        var e = t.getBoundingClientRect(),
          n = e.width / t.offsetWidth || 1,
          i = e.height / t.offsetHeight || 1;
      })(e);
    var s = vn(e),
      o = dn(t),
      r = { scrollLeft: 0, scrollTop: 0 },
      a = { x: 0, y: 0 };
    return (
      (i || (!i && !n)) &&
        (("body" !== sn(e) || Zn(s)) &&
          (r = (function (t) {
            return t !== on(t) && an(t)
              ? (function (t) {
                  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
                })(t)
              : Xn(t);
          })(e)),
        an(e)
          ? (((a = dn(e)).x += e.clientLeft), (a.y += e.clientTop))
          : s && (a.x = Yn(s))),
      {
        x: o.left + r.scrollLeft - a.x,
        y: o.top + r.scrollTop - a.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function $i(t) {
    var e = new Map(),
      n = new Set(),
      i = [];
    function s(t) {
      n.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!n.has(t)) {
              var i = e.get(t);
              i && s(i);
            }
          }),
        i.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        n.has(t.name) || s(t);
      }),
      i
    );
  }
  function xi(t) {
    var e;
    return function () {
      return (
        e ||
          (e = new Promise(function (n) {
            Promise.resolve().then(function () {
              (e = void 0), n(t());
            });
          })),
        e
      );
    };
  }
  var Si = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Ni() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function Ii(t) {
    void 0 === t && (t = {});
    var e = t,
      n = e.defaultModifiers,
      i = void 0 === n ? [] : n,
      s = e.defaultOptions,
      o = void 0 === s ? Si : s;
    return function (e, n, s) {
      void 0 === s && (s = o);
      var r = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Si, o),
          modifiersData: {},
          elements: { reference: e, popper: n },
          attributes: {},
          styles: {},
        },
        a = [],
        c = !1,
        l = {
          state: r,
          setOptions: function (s) {
            var a = "function" == typeof s ? s(r.options) : s;
            u(),
              (r.options = Object.assign({}, o, r.options, a)),
              (r.scrollParents = {
                reference: rn(e)
                  ? ti(e)
                  : e.contextElement
                  ? ti(e.contextElement)
                  : [],
                popper: ti(n),
              });
            var c = (function (t) {
              var e = $i(t);
              return nn.reduce(function (t, n) {
                return t.concat(
                  e.filter(function (t) {
                    return t.phase === n;
                  })
                );
              }, []);
            })(
              (function (t) {
                var e = t.reduce(function (t, e) {
                  var n = t[e.name];
                  return (
                    (t[e.name] = n
                      ? Object.assign({}, n, e, {
                          options: Object.assign({}, n.options, e.options),
                          data: Object.assign({}, n.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {});
                return Object.keys(e).map(function (t) {
                  return e[t];
                });
              })([].concat(i, r.options.modifiers))
            );
            return (
              (r.orderedModifiers = c.filter(function (t) {
                return t.enabled;
              })),
              f(),
              l.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var e = r.elements,
                n = e.reference,
                i = e.popper;
              if (Ni(n, i)) {
                (r.rects = {
                  reference: ki(n, En(i), "fixed" === r.options.strategy),
                  popper: pn(i),
                }),
                  (r.reset = !1),
                  (r.placement = r.options.placement),
                  r.orderedModifiers.forEach(function (t) {
                    return (r.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var s = 0; s < r.orderedModifiers.length; s++)
                  if (!0 !== r.reset) {
                    var o = r.orderedModifiers[s],
                      a = o.fn,
                      f = o.options,
                      u = void 0 === f ? {} : f,
                      h = o.name;
                    "function" == typeof a &&
                      (r =
                        a({ state: r, options: u, name: h, instance: l }) || r);
                  } else (r.reset = !1), (s = -1);
              }
            }
          },
          update: xi(function () {
            return new Promise(function (t) {
              l.forceUpdate(), t(r);
            });
          }),
          destroy: function () {
            u(), (c = !0);
          },
        };
      if (!Ni(e, n)) return l;
      function f() {
        r.orderedModifiers.forEach(function (t) {
          var e = t.name,
            n = t.options,
            i = void 0 === n ? {} : n,
            s = t.effect;
          if ("function" == typeof s) {
            var o = s({ state: r, name: e, instance: l, options: i });
            a.push(o || function () {});
          }
        });
      }
      function u() {
        a.forEach(function (t) {
          return t();
        }),
          (a = []);
      }
      return (
        l.setOptions(s).then(function (t) {
          !c && s.onFirstUpdate && s.onFirstUpdate(t);
        }),
        l
      );
    };
  }
  var Pi = Ii(),
    Mi = Ii({ defaultModifiers: [qn, yi, Rn, un] }),
    Bi = Ii({ defaultModifiers: [qn, yi, Rn, un, vi, ui, Ai, In, gi] });
  const Ri = Object.freeze({
      __proto__: null,
      popperGenerator: Ii,
      detectOverflow: ai,
      createPopperBase: Pi,
      createPopper: Bi,
      createPopperLite: Mi,
      top: Ne,
      bottom: Ie,
      right: Pe,
      left: je,
      auto: Me,
      basePlacements: He,
      start: Be,
      end: Re,
      clippingParents: We,
      viewport: ze,
      popper: qe,
      reference: Fe,
      variationPlacements: Ue,
      placements: Ve,
      beforeRead: Ke,
      read: "read",
      afterRead: Ye,
      beforeMain: Qe,
      main: "main",
      afterMain: Ze,
      beforeWrite: Je,
      write: "write",
      afterWrite: en,
      modifierPhases: nn,
      applyStyles: un,
      arrow: In,
      computeStyles: Rn,
      eventListeners: qn,
      flip: ui,
      hide: gi,
      offset: vi,
      popperOffsets: yi,
      preventOverflow: Ai,
    }),
    Wi = "dropdown",
    qi = ".bs.dropdown",
    Fi = ".data-api",
    Ui = "Escape",
    Xi = "ArrowUp",
    Yi = "ArrowDown",
    Gi = new RegExp(`${Xi}|${Yi}|${Ui}`),
    Zi = `hide${qi}`,
    Ji = `hidden${qi}`,
    ts = `show${qi}`,
    es = `shown${qi}`,
    ns = `click${qi}${Fi}`,
    is = `keydown${qi}${Fi}`,
    ss = `keyup${qi}${Fi}`,
    os = "show",
    fs = '[data-bs-toggle="dropdown"]',
    us = ".dropdown-menu",
    ps = w() ? "top-end" : "top-start",
    gs = w() ? "top-start" : "top-end",
    ms = w() ? "bottom-end" : "bottom-start",
    _s = w() ? "bottom-start" : "bottom-end",
    vs = w() ? "left-start" : "right-start",
    bs = w() ? "right-start" : "left-start",
    ys = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    ws = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class Es extends X {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return ys;
    }
    static get DefaultType() {
      return ws;
    }
    static get NAME() {
      return Wi;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (p(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if (F.trigger(this._element, ts, t).defaultPrevented) return;
      const n = Es.getParentFromElement(this._element);
      this._inNavbar
        ? pt.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(n),
        "ontouchstart" in document.documentElement &&
          !n.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => F.on(t, "mouseover", m)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(os),
        this._element.classList.add(os),
        F.trigger(this._element, es, t);
    }
    hide() {
      if (p(this._element) || !this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      F.trigger(this._element, Zi, t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => F.off(t, "mouseover", m)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(os),
        this._element.classList.remove(os),
        this._element.setAttribute("aria-expanded", "false"),
        pt.removeDataAttribute(this._menu, "popper"),
        F.trigger(this._element, Ji, t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...pt.getDataAttributes(this._element),
          ...t,
        }),
        h(Wi, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !f(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${Wi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === Ri)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : f(this._config.reference)
        ? (e = u(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const n = this._getPopperConfig(),
        i = n.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = Bi(e, this._menu, n)),
        i && pt.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(os);
    }
    _getMenuElement() {
      return mt.next(this._element, us)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return vs;
      if (t.classList.contains("dropstart")) return bs;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? gs : ps) : e ? _s : ms;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const n = mt
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter(d);
      n.length && O(n, e, t === Yi, !n.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Es.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = mt.find(fs);
      for (let n = 0, i = e.length; n < i; n++) {
        const i = Es.getInstance(e[n]);
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._isShown()) continue;
        const s = { relatedTarget: i._element };
        if (t) {
          const e = t.composedPath(),
            n = e.includes(i._menu);
          if (
            e.includes(i._element) ||
            ("inside" === i._config.autoClose && !n) ||
            ("outside" === i._config.autoClose && n)
          )
            continue;
          if (
            i._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (s.clickEvent = t);
        }
        i._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return a(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? "Space" === t.key ||
            (t.key !== Ui &&
              ((t.key !== Yi && t.key !== Xi) || t.target.closest(us)))
          : !Gi.test(t.key)
      )
        return;
      const e = this.classList.contains(os);
      if (!e && t.key === Ui) return;
      if ((t.preventDefault(), t.stopPropagation(), p(this))) return;
      const n = this.matches(fs) ? this : mt.prev(this, fs)[0],
        i = Es.getOrCreateInstance(n);
      if (t.key !== Ui)
        return t.key === Xi || t.key === Yi
          ? (e || i.show(), void i._selectMenuItem(t))
          : void ((e && "Space" !== t.key) || Es.clearMenus());
      i.hide();
    }
  }
  F.on(document, is, fs, Es.dataApiKeydownHandler),
    F.on(document, is, us, Es.dataApiKeydownHandler),
    F.on(document, ns, Es.clearMenus),
    F.on(document, ss, Es.clearMenus),
    F.on(document, ns, fs, function (t) {
      t.preventDefault(), Es.getOrCreateInstance(this).toggle();
    }),
    E(Es);
  const As = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Ts = ".sticky-top";
  class Os {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(As, "paddingRight", (e) => e + t),
        this._setElementAttributes(Ts, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, n) {
      const i = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + i)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = `${n(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(As, "paddingRight"),
        this._resetElementAttributes(Ts, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const n = t.style[e];
      n && pt.setDataAttribute(t, e, n);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const n = pt.getDataAttribute(t, e);
        void 0 === n
          ? t.style.removeProperty(e)
          : (pt.removeDataAttribute(t, e), (t.style[e] = n));
      });
    }
    _applyManipulationCallback(t, e) {
      f(t) ? e(t) : mt.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Cs = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    ks = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    $s = "backdrop",
    Ds = `mousedown.bs.${$s}`;
  class Ss {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && _(this._getElement()),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            A(t);
          }))
        : A(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), A(t);
          }))
        : A(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...Cs, ...("object" == typeof t ? t : {}) }).rootElement = u(
          t.rootElement
        )),
        h($s, t, ks),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        F.on(this._getElement(), Ds, () => {
          A(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (F.off(this._element, Ds),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      T(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Ns = { trapElement: null, autofocus: !0 },
    Is = { trapElement: "element", autofocus: "boolean" },
    Ms = ".bs.focustrap",
    Hs = `focusin${Ms}`,
    Bs = `keydown.tab${Ms}`,
    zs = "backward";
  class qs {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        F.off(document, Ms),
        F.on(document, Hs, (t) => this._handleFocusin(t)),
        F.on(document, Bs, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), F.off(document, Ms));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: n } = this._config;
      if (e === document || e === n || n.contains(e)) return;
      const i = mt.focusableChildren(n);
      0 === i.length
        ? n.focus()
        : this._lastTabNavDirection === zs
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? zs : "forward");
    }
    _getConfig(t) {
      return (
        (t = { ...Ns, ...("object" == typeof t ? t : {}) }),
        h("focustrap", t, Is),
        t
      );
    }
  }
  const Vs = ".bs.modal",
    Ys = { backdrop: !0, keyboard: !0, focus: !0 },
    Qs = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    Gs = `hide${Vs}`,
    Zs = `hidePrevented${Vs}`,
    Js = `hidden${Vs}`,
    to = `show${Vs}`,
    eo = `shown${Vs}`,
    no = `resize${Vs}`,
    io = `click.dismiss${Vs}`,
    so = `keydown.dismiss${Vs}`,
    oo = `mouseup.dismiss${Vs}`,
    ro = `mousedown.dismiss${Vs}`,
    ao = `click${Vs}.data-api`,
    co = "modal-open",
    uo = "modal-static";
  class _o extends X {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = mt.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Os());
    }
    static get Default() {
      return Ys;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      F.trigger(this._element, to, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(co),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        F.on(this._dialog, ro, () => {
          F.one(this._element, oo, (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (F.trigger(this._element, Gs).defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove("show"),
        F.off(this._element, io),
        F.off(this._dialog, ro),
        this._queueCallback(() => this._hideModal(), this._element, e);
    }
    dispose() {
      [window, this._dialog].forEach((t) => F.off(t, Vs)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ss({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new qs({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Ys,
          ...pt.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        h("modal", t, Qs),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        n = mt.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        n && (n.scrollTop = 0),
        e && _(this._element),
        this._element.classList.add("show");
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            F.trigger(this._element, eo, { relatedTarget: t });
        },
        this._dialog,
        e
      );
    }
    _setEscapeEvent() {
      this._isShown
        ? F.on(this._element, so, (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== t.key ||
                this._triggerBackdropTransition();
          })
        : F.off(this._element, so);
    }
    _setResizeEvent() {
      this._isShown
        ? F.on(window, no, () => this._adjustDialog())
        : F.off(window, no);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(co),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            F.trigger(this._element, Js);
        });
    }
    _showBackdrop(t) {
      F.on(this._element, io, (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (F.trigger(this._element, Zs).defaultPrevented) return;
      const { classList: e, scrollHeight: n, style: i } = this._element,
        s = n > document.documentElement.clientHeight;
      (!s && "hidden" === i.overflowY) ||
        e.contains(uo) ||
        (s || (i.overflowY = "hidden"),
        e.add(uo),
        this._queueCallback(() => {
          e.remove(uo),
            s ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        n = e > 0;
      ((!n && t && !w()) || (n && !t && w())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((n && !t && !w()) || (!n && t && w())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const n = _o.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t](e);
        }
      });
    }
  }
  F.on(document, ao, '[data-bs-toggle="modal"]', function (t) {
    const e = a(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      F.one(e, to, (t) => {
        t.defaultPrevented ||
          F.one(e, Js, () => {
            d(this) && this.focus();
          });
      });
    const n = mt.findOne(".modal.show");
    n && _o.getInstance(n).hide();
    _o.getOrCreateInstance(e).toggle(this);
  }),
    Y(_o),
    E(_o);
  const vo = "offcanvas",
    yo = ".bs.offcanvas",
    wo = ".data-api",
    Eo = `load${yo}${wo}`,
    To = { backdrop: !0, keyboard: !0, scroll: !1 },
    Oo = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    $o = ".offcanvas.show",
    Lo = `show${yo}`,
    xo = `shown${yo}`,
    Do = `hide${yo}`,
    So = `hidden${yo}`,
    No = `click${yo}${wo}`,
    Io = `keydown.dismiss${yo}`;
  class jo extends X {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return vo;
    }
    static get Default() {
      return To;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      if (F.trigger(this._element, Lo, { relatedTarget: t }).defaultPrevented)
        return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new Os().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show");
      this._queueCallback(
        () => {
          this._config.scroll || this._focustrap.activate(),
            F.trigger(this._element, xo, { relatedTarget: t });
        },
        this._element,
        !0
      );
    }
    hide() {
      if (!this._isShown) return;
      if (F.trigger(this._element, Do).defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove("show"),
        this._backdrop.hide();
      this._queueCallback(
        () => {
          this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._element.style.visibility = "hidden"),
            this._config.scroll || new Os().reset(),
            F.trigger(this._element, So);
        },
        this._element,
        !0
      );
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...To,
          ...pt.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        h(vo, t, Oo),
        t
      );
    }
    _initializeBackDrop() {
      return new Ss({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new qs({ trapElement: this._element });
    }
    _addEventListeners() {
      F.on(this._element, Io, (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = jo.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  F.on(document, No, '[data-bs-toggle="offcanvas"]', function (t) {
    const e = a(this);
    if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this)))
      return;
    F.one(e, So, () => {
      d(this) && this.focus();
    });
    const n = mt.findOne($o);
    n && n !== e && jo.getInstance(n).hide();
    jo.getOrCreateInstance(e).toggle(this);
  }),
    F.on(window, Eo, () =>
      mt.find($o).forEach((t) => jo.getOrCreateInstance(t).show())
    ),
    Y(jo),
    E(jo);
  const Mo = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Bo = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Ro =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Wo = (t, e) => {
      const n = t.nodeName.toLowerCase();
      if (e.includes(n))
        return (
          !Mo.has(n) || Boolean(Bo.test(t.nodeValue) || Ro.test(t.nodeValue))
        );
      const i = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = i.length; t < e; t++) if (i[t].test(n)) return !0;
      return !1;
    },
    zo = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    };
  function qo(t, e, n) {
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);
    const s = new window.DOMParser().parseFromString(t, "text/html"),
      o = [].concat(...s.body.querySelectorAll("*"));
    for (let t = 0, n = o.length; t < n; t++) {
      const n = o[t],
        i = n.nodeName.toLowerCase();
      if (!Object.keys(e).includes(i)) {
        n.remove();
        continue;
      }
      const s = [].concat(...n.attributes),
        r = [].concat(e["*"] || [], e[i] || []);
      s.forEach((t) => {
        Wo(t, r) || n.removeAttribute(t.nodeName);
      });
    }
    return s.body.innerHTML;
  }
  const Fo = "tooltip",
    Vo = ".bs.tooltip",
    Xo = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Yo = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    Qo = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: w() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: w() ? "right" : "left",
    },
    Go = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: zo,
      popperConfig: null,
    },
    Zo = {
      HIDE: `hide${Vo}`,
      HIDDEN: `hidden${Vo}`,
      SHOW: `show${Vo}`,
      SHOWN: `shown${Vo}`,
      INSERTED: `inserted${Vo}`,
      CLICK: `click${Vo}`,
      FOCUSIN: `focusin${Vo}`,
      FOCUSOUT: `focusout${Vo}`,
      MOUSEENTER: `mouseenter${Vo}`,
      MOUSELEAVE: `mouseleave${Vo}`,
    },
    Jo = "fade",
    er = "show",
    nr = "show",
    sr = ".tooltip-inner",
    rr = "hide.bs.modal",
    ar = "hover",
    cr = "focus";
  class ur extends X {
    constructor(t, e) {
      if (void 0 === Ri)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Go;
    }
    static get NAME() {
      return Fo;
    }
    static get Event() {
      return Zo;
    }
    static get DefaultType() {
      return Yo;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(er))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        F.off(this._element.closest(".modal"), rr, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = F.trigger(this._element, this.constructor.Event.SHOW),
        e = g(this._element),
        n =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !n) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(sr).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const i = this.getTipElement(),
        o = s(this.constructor.NAME);
      i.setAttribute("id", o),
        this._element.setAttribute("aria-describedby", o),
        this._config.animation && i.classList.add(Jo);
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, i, this._element)
            : this._config.placement,
        a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: c } = this._config;
      V.set(i, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (c.append(i),
          F.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = Bi(this._element, i, this._getPopperConfig(a))),
        i.classList.add(er);
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && i.classList.add(...l.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            F.on(t, "mouseover", m);
          });
      const u = this.tip.classList.contains(Jo);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            F.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === t && this._leave(null, this);
        },
        this.tip,
        u
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        F.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(er),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => F.off(t, "mouseover", m)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger[cr] = !1),
        (this._activeTrigger[ar] = !1);
      const i = this.tip.classList.contains(Jo);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== nr && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            F.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        i
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(Jo, er), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), sr);
    }
    _sanitizeAndSetContent(t, e, n) {
      const i = mt.findOne(n, t);
      e || !i ? this.setElementContent(i, e) : i.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return f(e)
          ? ((e = u(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = qo(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return Qo[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          F.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === ar
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            n =
              t === ar
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          F.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            F.on(this._element, n, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        F.on(this._element.closest(".modal"), rr, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? cr : ar] = !0),
        e.getTipElement().classList.contains(er) || e._hoverState === nr
          ? (e._hoverState = nr)
          : (clearTimeout(e._timeout),
            (e._hoverState = nr),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === nr && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? cr : ar] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = "out"),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = pt.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          Xo.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : u(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        h(Fo, t, this.constructor.DefaultType),
        t.sanitize && (t.template = qo(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        n = t.getAttribute("class").match(e);
      null !== n &&
        n.length > 0 &&
        n.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ur.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  E(ur);
  const pr = ".bs.popover",
    mr = {
      ...ur.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    _r = { ...ur.DefaultType, content: "(string|element|function)" },
    vr = {
      HIDE: `hide${pr}`,
      HIDDEN: `hidden${pr}`,
      SHOW: `show${pr}`,
      SHOWN: `shown${pr}`,
      INSERTED: `inserted${pr}`,
      CLICK: `click${pr}`,
      FOCUSIN: `focusin${pr}`,
      FOCUSOUT: `focusout${pr}`,
      MOUSEENTER: `mouseenter${pr}`,
      MOUSELEAVE: `mouseleave${pr}`,
    };
  class wr extends ur {
    static get Default() {
      return mr;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return vr;
    }
    static get DefaultType() {
      return _r;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = wr.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  E(wr);
  const Er = "scrollspy",
    Tr = ".bs.scrollspy",
    Cr = { offset: 10, method: "auto", target: "" },
    kr = { offset: "number", method: "string", target: "(string|element)" },
    $r = `activate${Tr}`,
    Lr = `scroll${Tr}`,
    xr = `load${Tr}.data-api`,
    Dr = "dropdown-item",
    Sr = "active",
    Pr = ".nav-link",
    Mr = ".list-group-item",
    Hr = `${Pr}, ${Mr}, .${Dr}`,
    zr = "position";
  class qr extends X {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        F.on(this._scrollElement, Lr, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Cr;
    }
    static get NAME() {
      return Er;
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window ? "offset" : zr,
        e = "auto" === this._config.method ? t : this._config.method,
        n = e === zr ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight());
      mt.find(Hr, this._config.target)
        .map((t) => {
          const i = r(t),
            s = i ? mt.findOne(i) : null;
          if (s) {
            const t = s.getBoundingClientRect();
            if (t.width || t.height) return [pt[e](s).top + n, i];
          }
          return null;
        })
        .filter((t) => t)
        .sort((t, e) => t[0] - e[0])
        .forEach((t) => {
          this._offsets.push(t[0]), this._targets.push(t[1]);
        });
    }
    dispose() {
      F.off(this._scrollElement, Tr), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ...Cr,
          ...pt.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = u(t.target) || document.documentElement),
        h(Er, t, kr),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        n = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; ) {
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
        }
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = Hr.split(",").map(
          (e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
        ),
        n = mt.findOne(e.join(","), this._config.target);
      n.classList.add(Sr),
        n.classList.contains(Dr)
          ? mt
              .findOne(".dropdown-toggle", n.closest(".dropdown"))
              .classList.add(Sr)
          : mt.parents(n, ".nav, .list-group").forEach((t) => {
              mt.prev(t, `${Pr}, ${Mr}`).forEach((t) => t.classList.add(Sr)),
                mt.prev(t, ".nav-item").forEach((t) => {
                  mt.children(t, Pr).forEach((t) => t.classList.add(Sr));
                });
            }),
        F.trigger(this._scrollElement, $r, { relatedTarget: t });
    }
    _clear() {
      mt.find(Hr, this._config.target)
        .filter((t) => t.classList.contains(Sr))
        .forEach((t) => t.classList.remove(Sr));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = qr.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  F.on(window, xr, () => {
    mt.find('[data-bs-spy="scroll"]').forEach((t) => new qr(t));
  }),
    E(qr);
  const Vr = ".bs.tab",
    Xr = `hide${Vr}`,
    Yr = `hidden${Vr}`,
    Qr = `show${Vr}`,
    Gr = `shown${Vr}`,
    Zr = `click${Vr}.data-api`,
    ta = "active",
    oa = ".active",
    ra = ":scope > li > .active";
  class fa extends X {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(ta)
      )
        return;
      let t;
      const e = a(this._element),
        n = this._element.closest(".nav, .list-group");
      if (n) {
        const e = "UL" === n.nodeName || "OL" === n.nodeName ? ra : oa;
        (t = mt.find(e, n)), (t = t[t.length - 1]);
      }
      const i = t ? F.trigger(t, Xr, { relatedTarget: this._element }) : null;
      if (
        F.trigger(this._element, Qr, { relatedTarget: t }).defaultPrevented ||
        (null !== i && i.defaultPrevented)
      )
        return;
      this._activate(this._element, n);
      const o = () => {
        F.trigger(t, Yr, { relatedTarget: this._element }),
          F.trigger(this._element, Gr, { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, n) {
      const s = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? mt.children(e, oa)
            : mt.find(ra, e)
        )[0],
        o = n && s && s.classList.contains("fade"),
        r = () => this._transitionComplete(t, s, n);
      s && o
        ? (s.classList.remove("show"), this._queueCallback(r, t, !0))
        : r();
    }
    _transitionComplete(t, e, n) {
      if (e) {
        e.classList.remove(ta);
        const t = mt.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(ta),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(ta),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        _(t),
        t.classList.contains("fade") && t.classList.add("show");
      let i = t.parentNode;
      if (
        (i && "LI" === i.nodeName && (i = i.parentNode),
        i && i.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e && mt.find(".dropdown-toggle", e).forEach((t) => t.classList.add(ta)),
          t.setAttribute("aria-expanded", !0);
      }
      n && n();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = fa.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  F.on(
    document,
    Zr,
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this)))
        return;
      fa.getOrCreateInstance(this).show();
    }
  ),
    E(fa);
  const da = ".bs.toast",
    pa = `mouseover${da}`,
    ga = `mouseout${da}`,
    ma = `focusin${da}`,
    _a = `focusout${da}`,
    va = `hide${da}`,
    ba = `hidden${da}`,
    ya = `show${da}`,
    wa = `shown${da}`,
    Ta = "show",
    Oa = "showing",
    Ca = { animation: "boolean", autohide: "boolean", delay: "number" },
    ka = { animation: !0, autohide: !0, delay: 5e3 };
  class $a extends X {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Ca;
    }
    static get Default() {
      return ka;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      if (F.trigger(this._element, ya).defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      this._element.classList.remove("hide"),
        _(this._element),
        this._element.classList.add(Ta),
        this._element.classList.add(Oa),
        this._queueCallback(
          () => {
            this._element.classList.remove(Oa),
              F.trigger(this._element, wa),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        );
    }
    hide() {
      if (!this._element.classList.contains(Ta)) return;
      if (F.trigger(this._element, va).defaultPrevented) return;
      this._element.classList.add(Oa),
        this._queueCallback(
          () => {
            this._element.classList.add("hide"),
              this._element.classList.remove(Oa),
              this._element.classList.remove(Ta),
              F.trigger(this._element, ba);
          },
          this._element,
          this._config.animation
        );
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(Ta) &&
          this._element.classList.remove(Ta),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...ka,
          ...pt.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        h("toast", t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const n = t.relatedTarget;
      this._element === n ||
        this._element.contains(n) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      F.on(this._element, pa, (t) => this._onInteraction(t, !0)),
        F.on(this._element, ga, (t) => this._onInteraction(t, !1)),
        F.on(this._element, ma, (t) => this._onInteraction(t, !0)),
        F.on(this._element, _a, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = $a.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  Y($a), E($a);
  return {
    Alert: it,
    Button: ut,
    Carousel: fe,
    Collapse: Se,
    Dropdown: Es,
    Modal: _o,
    Offcanvas: jo,
    Popover: wr,
    ScrollSpy: qr,
    Tab: fa,
    Toast: $a,
    Tooltip: ur,
  };
});
