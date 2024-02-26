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
  const t = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    e = (e) => {
      const i = t(e);
      return i && document.querySelector(i) ? i : null;
    },
    i = (e) => {
      const i = t(e);
      return i ? document.querySelector(i) : null;
    },
    n = (t) => {
      t.dispatchEvent(new Event("transitionend"));
    },
    s = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    o = (t) =>
      s(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    r = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const o = i[n],
          r = e[n],
          a =
            r && s(r)
              ? "element"
              : null == (l = r)
              ? `${l}`
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(o).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${o}".`
          );
      });
    },
    a = (t) =>
      !(!s(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    l = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    c = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? c(t.parentNode)
        : null;
    },
    h = () => {},
    d = (t) => {
      t.offsetHeight;
    },
    u = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    f = [],
    p = () => "rtl" === document.documentElement.dir,
    m = (t) => {
      var e;
      (e = () => {
        const e = u();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (f.length ||
              document.addEventListener("DOMContentLoaded", () => {
                f.forEach((t) => t());
              }),
            f.push(e))
          : e();
    },
    g = (t) => {
      "function" == typeof t && t();
    },
    _ = (t, e, i = !0) => {
      if (!i) return void g(t);
      const s =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let o = !1;
      const r = ({ target: i }) => {
        i === e && ((o = !0), e.removeEventListener("transitionend", r), g(t));
      };
      e.addEventListener("transitionend", r),
        setTimeout(() => {
          o || n(e);
        }, s);
    },
    b = (t, e, i, n) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!i && n ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    E = {};
  let A = 1;
  const T = { mouseenter: "mouseover", mouseleave: "mouseout" },
    O = /^(mouseenter|mouseleave)/i,
    C = new Set([
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
  function k(t, e) {
    return (e && `${e}::${A++}`) || t.uidEvent || A++;
  }
  function L(t) {
    const e = k(t);
    return (t.uidEvent = e), (E[e] = E[e] || {}), E[e];
  }
  function x(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function D(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), O.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = D(e, i, n),
      l = L(t),
      c = l[a] || (l[a] = {}),
      h = x(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = k(r, e.replace(v, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function N(t, e, i, n, s) {
    const o = x(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t) {
    return (t = t.replace(y, "")), T[t] || t;
  }
  const P = {
      on(t, e, i, n) {
        S(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        S(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = D(e, i, n),
          a = r !== e,
          l = L(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void N(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  N(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const n = i.replace(w, "");
          if (!a || e.includes(n)) {
            const e = h[i];
            N(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = u(),
          s = I(e),
          o = e !== s,
          r = C.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    j = new Map(),
    M = {
      set(t, e, i) {
        j.has(t) || j.set(t, new Map());
        const n = j.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (j.has(t) && j.get(t).get(e)) || null,
      remove(t, e) {
        if (!j.has(t)) return;
        const i = j.get(t);
        i.delete(e), 0 === i.size && j.delete(t);
      },
    };
  class H {
    constructor(t) {
      (t = o(t)) &&
        ((this._element = t),
        M.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      M.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      _(t, e, i);
    }
    static getInstance(t) {
      return M.get(o(t), this.DATA_KEY);
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
  const B = (t, e = "hide") => {
    const n = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    P.on(document, n, `[data-bs-dismiss="${s}"]`, function (n) {
      if ((["A", "AREA"].includes(this.tagName) && n.preventDefault(), l(this)))
        return;
      const o = i(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(o)[e]();
    });
  };
  class $ extends H {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        P.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = $.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  B($, "close"), m($);
  class R extends H {
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
        const e = R.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function W(t) {
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
  function z(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  P.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      R.getOrCreateInstance(e).toggle();
    }
  ),
    m(R);
  const q = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${z(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${z(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                (e[n] = W(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => W(t.getAttribute(`data-bs-${z(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    F = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
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
        return this.find(e, t).filter((t) => !l(t) && a(t));
      },
    },
    U = ".bs.carousel",
    V = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    K = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    X = "next",
    Y = "prev",
    Q = "left",
    G = "right",
    Z = { ArrowLeft: G, ArrowRight: Q },
    J = `slide${U}`,
    tt = `slid${U}`,
    et = `keydown${U}`,
    it = `mouseenter${U}`,
    nt = `mouseleave${U}`,
    st = `touchstart${U}`,
    ot = `touchmove${U}`,
    rt = `touchend${U}`,
    at = `pointerdown${U}`,
    lt = `pointerup${U}`,
    ct = `dragstart${U}`,
    ht = `load${U}.data-api`,
    dt = `click${U}.data-api`;
  class ut extends H {
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
        (this._indicatorsElement = F.findOne(
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
      return V;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(X);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(Y);
    }
    pause(t) {
      t || (this._isPaused = !0),
        F.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (n(this._element), this.cycle(!0)),
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
      this._activeElement = F.findOne(".active.carousel-item", this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, tt, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? X : Y;
      this._slide(i, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...V,
          ...q.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        r("carousel", t, K),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? G : Q);
    }
    _addEventListeners() {
      this._config.keyboard && P.on(this._element, et, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, it, (t) => this.pause(t)),
          P.on(this._element, nt, (t) => this.cycle(t))),
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
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        n = (e) => {
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
      F.find(".carousel-item img", this._element).forEach((t) => {
        P.on(t, ct, (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, at, (t) => e(t)),
            P.on(this._element, lt, (t) => n(t)),
            this._element.classList.add("pointer-event"))
          : (P.on(this._element, st, (t) => e(t)),
            P.on(this._element, ot, (t) => i(t)),
            P.on(this._element, rt, (t) => n(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = Z[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? F.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === X;
      return b(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        n = this._getItemIndex(
          F.findOne(".active.carousel-item", this._element)
        );
      return P.trigger(this._element, J, {
        relatedTarget: t,
        direction: e,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = F.findOne(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");
        const i = F.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < i.length; e++)
          if (
            Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[e].classList.add("active"),
              i[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t =
        this._activeElement ||
        F.findOne(".active.carousel-item", this._element);
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
      const i = this._directionToOrder(t),
        n = F.findOne(".active.carousel-item", this._element),
        s = this._getItemIndex(n),
        o = e || this._getItemByOrder(i, n),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        l = i === X,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        u = this._orderToDirection(i);
      if (o && o.classList.contains("active"))
        return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, u).defaultPrevented) return;
      if (!n || !o) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(o),
        (this._activeElement = o);
      const f = () => {
        P.trigger(this._element, tt, {
          relatedTarget: o,
          direction: u,
          from: s,
          to: r,
        });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(h), d(o), n.classList.add(c), o.classList.add(c);
        const t = () => {
          o.classList.remove(c, h),
            o.classList.add("active"),
            n.classList.remove("active", h, c),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(t, n, !0);
      } else n.classList.remove("active"), o.classList.add("active"), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [G, Q].includes(t)
        ? p()
          ? t === Q
            ? Y
            : X
          : t === Q
          ? X
          : Y
        : t;
    }
    _orderToDirection(t) {
      return [X, Y].includes(t)
        ? p()
          ? t === Y
            ? Q
            : G
          : t === Y
          ? G
          : Q
        : t;
    }
    static carouselInterface(t, e) {
      const i = ut.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = { ...n, ...e });
      const s = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        ut.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = i(this);
      if (!e || !e.classList.contains("carousel")) return;
      const n = { ...q.getDataAttributes(e), ...q.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s && (n.interval = !1),
        ut.carouselInterface(e, n),
        s && ut.getInstance(e).to(s),
        t.preventDefault();
    }
  }
  P.on(
    document,
    dt,
    "[data-bs-slide], [data-bs-slide-to]",
    ut.dataApiClickHandler
  ),
    P.on(window, ht, () => {
      const t = F.find('[data-bs-ride="carousel"]');
      for (let e = 0, i = t.length; e < i; e++)
        ut.carouselInterface(t[e], ut.getInstance(t[e]));
    }),
    m(ut);
  const ft = { toggle: !0, parent: null },
    pt = { toggle: "boolean", parent: "(null|element)" };
  class mt extends H {
    constructor(t, i) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(i)),
        (this._triggerArray = []);
      const n = F.find('[data-bs-toggle="collapse"]');
      for (let t = 0, i = n.length; t < i; t++) {
        const i = n[t],
          s = e(i),
          o = F.find(s).filter((t) => t === this._element);
        null !== s &&
          o.length &&
          ((this._selector = s), this._triggerArray.push(i));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ft;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = F.find(":scope .collapse .collapse", this._config.parent);
        e = F.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !t.includes(e));
      }
      const i = F.findOne(this._selector);
      if (e.length) {
        const n = e.find((t) => i !== t);
        if (((t = n ? mt.getInstance(n) : null), t && t._isTransitioning))
          return;
      }
      if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e.forEach((e) => {
        i !== e && mt.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || M.set(e, "bs.collapse", null);
      });
      const n = this._getDimension();
      this._element.classList.remove("collapse"),
        this._element.classList.add("collapsing"),
        (this._element.style[n] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove("collapsing"),
            this._element.classList.add("collapse", "show"),
            (this._element.style[n] = ""),
            P.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[n] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        d(this._element),
        this._element.classList.add("collapsing"),
        this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          n = i(e);
        n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1);
      }
      this._isTransitioning = !0;
      (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse"),
              P.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains("show");
    }
    _getConfig(t) {
      return (
        ((t = { ...ft, ...q.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = o(t.parent)),
        r("collapse", t, pt),
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
      const t = F.find(":scope .collapse .collapse", this._config.parent);
      F.find('[data-bs-toggle="collapse"]', this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = i(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = mt.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.collapse.data-api",
    '[data-bs-toggle="collapse"]',
    function (t) {
      ("A" === t.target.tagName ||
        (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
        t.preventDefault();
      const i = e(this);
      F.find(i).forEach((t) => {
        mt.getOrCreateInstance(t, { toggle: !1 }).toggle();
      });
    }
  ),
    m(mt);
  var gt = "top",
    _t = "bottom",
    bt = "right",
    vt = "left",
    yt = "auto",
    wt = [gt, _t, bt, vt],
    Et = "start",
    At = "end",
    Tt = "clippingParents",
    Ot = "viewport",
    Ct = "popper",
    kt = "reference",
    Lt = wt.reduce(function (t, e) {
      return t.concat([e + "-" + Et, e + "-" + At]);
    }, []),
    xt = [].concat(wt, [yt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + Et, e + "-" + At]);
    }, []),
    Dt = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function St(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Nt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function It(t) {
    return t instanceof Nt(t).Element || t instanceof Element;
  }
  function Pt(t) {
    return t instanceof Nt(t).HTMLElement || t instanceof HTMLElement;
  }
  function jt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof Nt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Mt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        Pt(s) &&
          St(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
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
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            Pt(n) &&
              St(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function Ht(t) {
    return t.split("-")[0];
  }
  function Bt(t, e) {
    var i = t.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function $t(t) {
    var e = Bt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function Rt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && jt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function Wt(t) {
    return Nt(t).getComputedStyle(t);
  }
  function zt(t) {
    return ["table", "td", "th"].indexOf(St(t)) >= 0;
  }
  function qt(t) {
    return (
      (It(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function Ft(t) {
    return "html" === St(t)
      ? t
      : t.assignedSlot || t.parentNode || (jt(t) ? t.host : null) || qt(t);
  }
  function Ut(t) {
    return Pt(t) && "fixed" !== Wt(t).position ? t.offsetParent : null;
  }
  function Vt(t) {
    for (var e = Nt(t), i = Ut(t); i && zt(i) && "static" === Wt(i).position; )
      i = Ut(i);
    return i &&
      ("html" === St(i) || ("body" === St(i) && "static" === Wt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              Pt(t) &&
              "fixed" === Wt(t).position
            )
              return null;
            for (
              var i = Ft(t);
              Pt(i) && ["html", "body"].indexOf(St(i)) < 0;

            ) {
              var n = Wt(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Kt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var Xt = Math.max,
    Yt = Math.min,
    Qt = Math.round;
  function Gt(t, e, i) {
    return Xt(t, Yt(e, i));
  }
  function Zt(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function Jt(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const te = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Ht(i.placement),
        l = Kt(a),
        c = [vt, bt].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return Zt(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : Jt(t, wt)
            );
          })(s.padding, i),
          d = $t(o),
          u = "y" === l ? gt : vt,
          f = "y" === l ? _t : bt,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = Vt(o),
          _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          E = Gt(v, w, y),
          A = l;
        i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Rt(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function ee(t) {
    return t.split("-")[1];
  }
  var ie = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function ne(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: Qt(Qt(e * n) / n) || 0, y: Qt(Qt(i * n) / n) || 0 };
            })(r)
          : "function" == typeof h
          ? h(r)
          : r,
      u = d.x,
      f = void 0 === u ? 0 : u,
      p = d.y,
      m = void 0 === p ? 0 : p,
      g = r.hasOwnProperty("x"),
      _ = r.hasOwnProperty("y"),
      b = vt,
      v = gt,
      y = window;
    if (c) {
      var w = Vt(i),
        E = "clientHeight",
        A = "clientWidth";
      w === Nt(i) &&
        "static" !== Wt((w = qt(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (A = "scrollWidth")),
        (s !== gt && ((s !== vt && s !== bt) || o !== At)) ||
          ((v = _t), (m -= w[E] - n.height), (m *= l ? 1 : -1)),
        (s !== vt && ((s !== gt && s !== _t) || o !== At)) ||
          ((b = bt), (f -= w[A] - n.width), (f *= l ? 1 : -1));
    }
    var T,
      O = Object.assign({ position: a }, c && ie);
    return l
      ? Object.assign(
          {},
          O,
          (((T = {})[v] = _ ? "0" : ""),
          (T[b] = g ? "0" : ""),
          (T.transform =
            (y.devicePixelRatio || 1) <= 1
              ? "translate(" + f + "px, " + m + "px)"
              : "translate3d(" + f + "px, " + m + "px, 0)"),
          T)
        )
      : Object.assign(
          {},
          O,
          (((e = {})[v] = _ ? m + "px" : ""),
          (e[b] = g ? f + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  const se = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Ht(e.placement),
          variation: ee(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          ne(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            ne(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var oe = { passive: !0 };
  const re = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Nt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, oe);
          }),
        a && l.addEventListener("resize", i.update, oe),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, oe);
            }),
            a && l.removeEventListener("resize", i.update, oe);
        }
      );
    },
    data: {},
  };
  var ae = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function le(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return ae[t];
    });
  }
  var ce = { start: "end", end: "start" };
  function he(t) {
    return t.replace(/start|end/g, function (t) {
      return ce[t];
    });
  }
  function de(t) {
    var e = Nt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ue(t) {
    return Bt(qt(t)).left + de(t).scrollLeft;
  }
  function fe(t) {
    var e = Wt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function pe(t) {
    return ["html", "body", "#document"].indexOf(St(t)) >= 0
      ? t.ownerDocument.body
      : Pt(t) && fe(t)
      ? t
      : pe(Ft(t));
  }
  function me(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = pe(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Nt(n),
      r = s ? [o].concat(o.visualViewport || [], fe(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(me(Ft(r)));
  }
  function ge(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function _e(t, e) {
    return e === Ot
      ? ge(
          (function (t) {
            var e = Nt(t),
              i = qt(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return (
              n &&
                ((s = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = n.offsetLeft), (a = n.offsetTop))),
              { width: s, height: o, x: r + ue(t), y: a }
            );
          })(t)
        )
      : Pt(e)
      ? (function (t) {
          var e = Bt(t);
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
      : ge(
          (function (t) {
            var e,
              i = qt(t),
              n = de(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Xt(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Xt(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + ue(t),
              l = -n.scrollTop;
            return (
              "rtl" === Wt(s || i).direction &&
                (a += Xt(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(qt(t))
        );
  }
  function be(t, e, i) {
    var n =
        "clippingParents" === e
          ? (function (t) {
              var e = me(Ft(t)),
                i =
                  ["absolute", "fixed"].indexOf(Wt(t).position) >= 0 && Pt(t)
                    ? Vt(t)
                    : t;
              return It(i)
                ? e.filter(function (t) {
                    return It(t) && Rt(t, i) && "body" !== St(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      s = [].concat(n, [i]),
      o = s[0],
      r = s.reduce(function (e, i) {
        var n = _e(t, i);
        return (
          (e.top = Xt(n.top, e.top)),
          (e.right = Yt(n.right, e.right)),
          (e.bottom = Yt(n.bottom, e.bottom)),
          (e.left = Xt(n.left, e.left)),
          e
        );
      }, _e(t, o));
    return (
      (r.width = r.right - r.left),
      (r.height = r.bottom - r.top),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function ve(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Ht(s) : null,
      r = s ? ee(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case gt:
        e = { x: a, y: i.y - n.height };
        break;
      case _t:
        e = { x: a, y: i.y + i.height };
        break;
      case bt:
        e = { x: i.x + i.width, y: l };
        break;
      case vt:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? Kt(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case Et:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case At:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function ye(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? Tt : o,
      a = i.rootBoundary,
      l = void 0 === a ? Ot : a,
      c = i.elementContext,
      h = void 0 === c ? Ct : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      m = Zt("number" != typeof p ? p : Jt(p, wt)),
      g = h === Ct ? kt : Ct,
      _ = t.rects.popper,
      b = t.elements[u ? g : h],
      v = be(It(b) ? b : b.contextElement || qt(t.elements.popper), r, l),
      y = Bt(t.elements.reference),
      w = ve({ reference: y, element: _, strategy: "absolute", placement: s }),
      E = ge(Object.assign({}, _, w)),
      A = h === Ct ? E : y,
      T = {
        top: v.top - A.top + m.top,
        bottom: A.bottom - v.bottom + m.bottom,
        left: v.left - A.left + m.left,
        right: A.right - v.right + m.right,
      },
      O = t.modifiersData.offset;
    if (h === Ct && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [bt, _t].indexOf(t) >= 0 ? 1 : -1,
          i = [gt, _t].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }
    return T;
  }
  function we(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? xt : l,
      h = ee(n),
      d = h
        ? a
          ? Lt
          : Lt.filter(function (t) {
              return ee(t) === h;
            })
        : wt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = ye(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[Ht(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const Ee = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = Ht(g),
            b =
              l ||
              (_ === g || !p
                ? [le(g)]
                : (function (t) {
                    if (Ht(t) === yt) return [];
                    var e = le(t);
                    return [he(t), e, he(e)];
                  })(g)),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                Ht(i) === yt
                  ? we(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            T = v[0],
            O = 0;
          O < v.length;
          O++
        ) {
          var C = v[O],
            k = Ht(C),
            L = ee(C) === Et,
            x = [gt, _t].indexOf(k) >= 0,
            D = x ? "width" : "height",
            S = ye(e, {
              placement: C,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            N = x ? (L ? bt : vt) : L ? _t : gt;
          y[D] > w[D] && (N = le(N));
          var I = le(N),
            P = [];
          if (
            (o && P.push(S[k] <= 0),
            a && P.push(S[N] <= 0, S[I] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (A = !1);
            break;
          }
          E.set(C, P);
        }
        if (A)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              M = p ? 3 : 1;
            M > 0;
            M--
          ) {
            if ("break" === j(M)) break;
          }
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Ae(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Te(t) {
    return [gt, bt, _t, vt].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Oe = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state,
        i = t.name,
        n = e.rects.reference,
        s = e.rects.popper,
        o = e.modifiersData.preventOverflow,
        r = ye(e, { elementContext: "reference" }),
        a = ye(e, { altBoundary: !0 }),
        l = Ae(r, n),
        c = Ae(a, s, o),
        h = Te(l),
        d = Te(c);
      (e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d,
      }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d,
        }));
    },
  };
  const Ce = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.offset,
        o = void 0 === s ? [0, 0] : s,
        r = xt.reduce(function (t, i) {
          return (
            (t[i] = (function (t, e, i) {
              var n = Ht(t),
                s = [vt, gt].indexOf(n) >= 0 ? -1 : 1,
                o =
                  "function" == typeof i
                    ? i(Object.assign({}, e, { placement: t }))
                    : i,
                r = o[0],
                a = o[1];
              return (
                (r = r || 0),
                (a = (a || 0) * s),
                [vt, bt].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
              );
            })(i, e.rects, o)),
            t
          );
        }, {}),
        a = r[e.placement],
        l = a.x,
        c = a.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += l),
        (e.modifiersData.popperOffsets.y += c)),
        (e.modifiersData[n] = r);
    },
  };
  const ke = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (t) {
      var e = t.state,
        i = t.name;
      e.modifiersData[i] = ve({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
      });
    },
    data: {},
  };
  const Le = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.mainAxis,
        o = void 0 === s || s,
        r = i.altAxis,
        a = void 0 !== r && r,
        l = i.boundary,
        c = i.rootBoundary,
        h = i.altBoundary,
        d = i.padding,
        u = i.tether,
        f = void 0 === u || u,
        p = i.tetherOffset,
        m = void 0 === p ? 0 : p,
        g = ye(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
        _ = Ht(e.placement),
        b = ee(e.placement),
        v = !b,
        y = Kt(_),
        w = "x" === y ? "y" : "x",
        E = e.modifiersData.popperOffsets,
        A = e.rects.reference,
        T = e.rects.popper,
        O =
          "function" == typeof m
            ? m(Object.assign({}, e.rects, { placement: e.placement }))
            : m,
        C = { x: 0, y: 0 };
      if (E) {
        if (o || a) {
          var k = "y" === y ? gt : vt,
            L = "y" === y ? _t : bt,
            x = "y" === y ? "height" : "width",
            D = E[y],
            S = E[y] + g[k],
            N = E[y] - g[L],
            I = f ? -T[x] / 2 : 0,
            P = b === Et ? A[x] : T[x],
            j = b === Et ? -T[x] : -A[x],
            M = e.elements.arrow,
            H = f && M ? $t(M) : { width: 0, height: 0 },
            B = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            $ = B[k],
            R = B[L],
            W = Gt(0, A[x], H[x]),
            z = v ? A[x] / 2 - I - W - $ - O : P - W - $ - O,
            q = v ? -A[x] / 2 + I + W + R + O : j + W + R + O,
            F = e.elements.arrow && Vt(e.elements.arrow),
            U = F ? ("y" === y ? F.clientTop || 0 : F.clientLeft || 0) : 0,
            V = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement][y]
              : 0,
            K = E[y] + z - V - U,
            X = E[y] + q - V;
          if (o) {
            var Y = Gt(f ? Yt(S, K) : S, D, f ? Xt(N, X) : N);
            (E[y] = Y), (C[y] = Y - D);
          }
          if (a) {
            var Q = "x" === y ? gt : vt,
              G = "x" === y ? _t : bt,
              Z = E[w],
              J = Z + g[Q],
              tt = Z - g[G],
              et = Gt(f ? Yt(J, K) : J, Z, f ? Xt(tt, X) : tt);
            (E[w] = et), (C[w] = et - Z);
          }
        }
        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"],
  };
  function xe(t, e, i) {
    void 0 === i && (i = !1);
    var n = Pt(e);
    Pt(e) &&
      (function (t) {
        var e = t.getBoundingClientRect(),
          i = e.width / t.offsetWidth || 1,
          n = e.height / t.offsetHeight || 1;
      })(e);
    var s,
      o,
      r = qt(e),
      a = Bt(t),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (n || (!n && !i)) &&
        (("body" !== St(e) || fe(r)) &&
          (l =
            (s = e) !== Nt(s) && Pt(s)
              ? { scrollLeft: (o = s).scrollLeft, scrollTop: o.scrollTop }
              : de(s)),
        Pt(e)
          ? (((c = Bt(e)).x += e.clientLeft), (c.y += e.clientTop))
          : r && (c.x = ue(r))),
      {
        x: a.left + l.scrollLeft - c.x,
        y: a.top + l.scrollTop - c.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function De(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Se = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Ne() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function Ie(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Se : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Se, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: It(t)
                  ? me(t)
                  : t.contextElement
                  ? me(t.contextElement)
                  : [],
                popper: me(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = De(t);
                return Dt.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n }),
                    r = function () {};
                  l.push(o || r);
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Ne(e, i)) {
                (a.rects = {
                  reference: xe(e, Vt(i), "fixed" === a.options.strategy),
                  popper: $t(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Ne(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var Pe = Ie(),
    je = Ie({ defaultModifiers: [re, ke, se, Mt] }),
    Me = Ie({ defaultModifiers: [re, ke, se, Mt, Ce, Ee, Le, te, Oe] });
  const He = Object.freeze({
      __proto__: null,
      popperGenerator: Ie,
      detectOverflow: ye,
      createPopperBase: Pe,
      createPopper: Me,
      createPopperLite: je,
      top: gt,
      bottom: _t,
      right: bt,
      left: vt,
      auto: yt,
      basePlacements: wt,
      start: Et,
      end: At,
      clippingParents: Tt,
      viewport: Ot,
      popper: Ct,
      reference: kt,
      variationPlacements: Lt,
      placements: xt,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: Dt,
      applyStyles: Mt,
      arrow: te,
      computeStyles: se,
      eventListeners: re,
      flip: Ee,
      hide: Oe,
      offset: Ce,
      popperOffsets: ke,
      preventOverflow: Le,
    }),
    Be = new RegExp("ArrowUp|ArrowDown|Escape"),
    $e = p() ? "top-end" : "top-start",
    Re = p() ? "top-start" : "top-end",
    We = p() ? "bottom-end" : "bottom-start",
    ze = p() ? "bottom-start" : "bottom-end",
    qe = p() ? "left-start" : "right-start",
    Fe = p() ? "right-start" : "left-start",
    Ue = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    Ve = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class Ke extends H {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return Ue;
    }
    static get DefaultType() {
      return Ve;
    }
    static get NAME() {
      return "dropdown";
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if (P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
        return;
      const e = Ke.getParentFromElement(this._element);
      this._inNavbar
        ? q.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(e),
        "ontouchstart" in document.documentElement &&
          !e.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.on(t, "mouseover", h)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add("show"),
        this._element.classList.add("show"),
        P.trigger(this._element, "shown.bs.dropdown", t);
    }
    hide() {
      if (l(this._element) || !this._isShown(this._menu)) return;
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
      P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", h)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove("show"),
        this._element.classList.remove("show"),
        this._element.setAttribute("aria-expanded", "false"),
        q.removeDataAttribute(this._menu, "popper"),
        P.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...q.getDataAttributes(this._element),
          ...t,
        }),
        r("dropdown", t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !s(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${"dropdown".toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === He)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : s(this._config.reference)
        ? (e = o(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const i = this._getPopperConfig(),
        n = i.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = Me(e, this._menu, i)),
        n && q.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains("show");
    }
    _getMenuElement() {
      return F.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return qe;
      if (t.classList.contains("dropstart")) return Fe;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? Re : $e) : e ? ze : We;
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
      const i = F.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(a);
      i.length && b(i, e, "ArrowDown" === t, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ke.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = F.find('[data-bs-toggle="dropdown"]');
      for (let i = 0, n = e.length; i < n; i++) {
        const n = Ke.getInstance(e[i]);
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._isShown()) continue;
        const s = { relatedTarget: n._element };
        if (t) {
          const e = t.composedPath(),
            i = e.includes(n._menu);
          if (
            e.includes(n._element) ||
            ("inside" === n._config.autoClose && !i) ||
            ("outside" === n._config.autoClose && i)
          )
            continue;
          if (
            n._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (s.clickEvent = t);
        }
        n._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return i(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? "Space" === t.key ||
            ("Escape" !== t.key &&
              (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                t.target.closest(".dropdown-menu")))
          : !Be.test(t.key)
      )
        return;
      const e = this.classList.contains("show");
      if (!e && "Escape" === t.key) return;
      if ((t.preventDefault(), t.stopPropagation(), l(this))) return;
      const i = this.matches('[data-bs-toggle="dropdown"]')
          ? this
          : F.prev(this, '[data-bs-toggle="dropdown"]')[0],
        n = Ke.getOrCreateInstance(i);
      if ("Escape" !== t.key)
        return "ArrowUp" === t.key || "ArrowDown" === t.key
          ? (e || n.show(), void n._selectMenuItem(t))
          : void ((e && "Space" !== t.key) || Ke.clearMenus());
      n.hide();
    }
  }
  P.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-bs-toggle="dropdown"]',
    Ke.dataApiKeydownHandler
  ),
    P.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ke.dataApiKeydownHandler
    ),
    P.on(document, "click.bs.dropdown.data-api", Ke.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", Ke.clearMenus),
    P.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      function (t) {
        t.preventDefault(), Ke.getOrCreateInstance(this).toggle();
      }
    ),
    m(Ke);
  class Xe {
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
        this._setElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight",
          (e) => e + t
        ),
        this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight"
        ),
        this._resetElementAttributes(".sticky-top", "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && q.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = q.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (q.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(t, e) {
      s(t) ? e(t) : F.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Ye = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    Qe = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    };
  class Ge {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && d(this._getElement()),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            g(t);
          }))
        : g(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), g(t);
          }))
        : g(t);
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
        ((t = { ...Ye, ...("object" == typeof t ? t : {}) }).rootElement = o(
          t.rootElement
        )),
        r("backdrop", t, Qe),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        P.on(this._getElement(), "mousedown.bs.backdrop", () => {
          g(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, "mousedown.bs.backdrop"),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Ze = { trapElement: null, autofocus: !0 },
    Je = { trapElement: "element", autofocus: "boolean" };
  class ti {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        P.off(document, ".bs.focustrap"),
        P.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        P.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive &&
        ((this._isActive = !1), P.off(document, ".bs.focustrap"));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const n = F.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : "backward" === this._lastTabNavDirection
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? "backward" : "forward");
    }
    _getConfig(t) {
      return (
        (t = { ...Ze, ...("object" == typeof t ? t : {}) }),
        r("focustrap", t, Je),
        t
      );
    }
  }
  const ei = { backdrop: !0, keyboard: !0, focus: !0 },
    ii = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    };
  class ni extends H {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = F.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Xe());
    }
    static get Default() {
      return ei;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      P.trigger(this._element, "show.bs.modal", { relatedTarget: t })
        .defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add("modal-open"),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove("show"),
        P.off(this._element, "click.dismiss.bs.modal"),
        P.off(this._dialog, "mousedown.dismiss.bs.modal"),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((t) => P.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ge({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new ti({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...ei,
          ...q.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        r("modal", t, ii),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = F.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        e && d(this._element),
        this._element.classList.add("show");
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            P.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
        },
        this._dialog,
        e
      );
    }
    _setEscapeEvent() {
      this._isShown
        ? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== t.key ||
                this._triggerBackdropTransition();
          })
        : P.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown
        ? P.on(window, "resize.bs.modal", () => this._adjustDialog())
        : P.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, "hidden.bs.modal");
        });
    }
    _showBackdrop(t) {
      P.on(this._element, "click.dismiss.bs.modal", (t) => {
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
      if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        n = e > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        t.contains("modal-static") ||
        (n || (i.overflowY = "hidden"),
        t.add("modal-static"),
        this._queueCallback(() => {
          t.remove("modal-static"),
            n ||
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
        i = e > 0;
      ((!i && t && !p()) || (i && !t && p())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((i && !t && !p()) || (!i && t && p())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = ni.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = i(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        P.one(e, "show.bs.modal", (t) => {
          t.defaultPrevented ||
            P.one(e, "hidden.bs.modal", () => {
              a(this) && this.focus();
            });
        });
      const n = F.findOne(".modal.show");
      n && ni.getInstance(n).hide();
      ni.getOrCreateInstance(e).toggle(this);
    }
  ),
    B(ni),
    m(ni);
  const si = { backdrop: !0, keyboard: !0, scroll: !1 },
    oi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class ri extends H {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return "offcanvas";
    }
    static get Default() {
      return si;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      if (
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented
      )
        return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new Xe().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show");
      this._queueCallback(
        () => {
          this._config.scroll || this._focustrap.activate(),
            P.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: t,
            });
        },
        this._element,
        !0
      );
    }
    hide() {
      if (!this._isShown) return;
      if (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
        return;
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
            this._config.scroll || new Xe().reset(),
            P.trigger(this._element, "hidden.bs.offcanvas");
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
          ...si,
          ...q.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        r("offcanvas", t, oi),
        t
      );
    }
    _initializeBackDrop() {
      return new Ge({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new ti({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ri.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = i(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)))
        return;
      P.one(e, "hidden.bs.offcanvas", () => {
        a(this) && this.focus();
      });
      const n = F.findOne(".offcanvas.show");
      n && n !== e && ri.getInstance(n).hide();
      ri.getOrCreateInstance(e).toggle(this);
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () =>
      F.find(".offcanvas.show").forEach((t) => ri.getOrCreateInstance(t).show())
    ),
    B(ri),
    m(ri);
  const ai = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    li = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    ci =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    hi = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !ai.has(i) || Boolean(li.test(t.nodeValue) || ci.test(t.nodeValue))
        );
      const n = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1;
    },
    di = {
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
  function ui(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = new window.DOMParser().parseFromString(t, "text/html"),
      s = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = s.length; t < i; t++) {
      const i = s[t],
        n = i.nodeName.toLowerCase();
      if (!Object.keys(e).includes(n)) {
        i.remove();
        continue;
      }
      const o = [].concat(...i.attributes),
        r = [].concat(e["*"] || [], e[n] || []);
      o.forEach((t) => {
        hi(t, r) || i.removeAttribute(t.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const fi = new Set(["sanitize", "allowList", "sanitizeFn"]),
    pi = {
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
    mi = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left",
    },
    gi = {
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
      allowList: di,
      popperConfig: null,
    },
    _i = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    };
  class bi extends H {
    constructor(t, e) {
      if (void 0 === He)
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
      return gi;
    }
    static get NAME() {
      return "tooltip";
    }
    static get Event() {
      return _i;
    }
    static get DefaultType() {
      return pi;
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
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.Event.SHOW),
        e = c(this._element),
        i =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !==
          this.tip.querySelector(".tooltip-inner").innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const n = this.getTipElement(),
        s = ((t) => {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        })(this.constructor.NAME);
      n.setAttribute("id", s),
        this._element.setAttribute("aria-describedby", s),
        this._config.animation && n.classList.add("fade");
      const o =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, n, this._element)
            : this._config.placement,
        r = this._getAttachment(o);
      this._addAttachmentClass(r);
      const { container: a } = this._config;
      M.set(n, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (a.append(n),
          P.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = Me(this._element, n, this._getPopperConfig(r))),
        n.classList.add("show");
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && n.classList.add(...l.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            P.on(t, "mouseover", h);
          });
      const d = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            P.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === t && this._leave(null, this);
        },
        this.tip,
        d
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove("show"),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", h)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            ("show" !== this._hoverState && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            P.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        e
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
        this.setContent(e),
        e.classList.remove("fade", "show"),
        (this.tip = e),
        this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".tooltip-inner");
    }
    _sanitizeAndSetContent(t, e, i) {
      const n = F.findOne(i, t);
      e || !n ? this.setElementContent(n, e) : n.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return s(e)
          ? ((e = o(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = ui(e, this._config.allowList, this._config.sanitizeFn)),
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
      return mi[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          P.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              "hover" === t
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              "hover" === t
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          P.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            P.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        P.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
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
        t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
        e.getTipElement().classList.contains("show") || "show" === e._hoverState
          ? (e._hoverState = "show")
          : (clearTimeout(e._timeout),
            (e._hoverState = "show"),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  "show" === e._hoverState && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
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
      const e = q.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          fi.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : o(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        r("tooltip", t, this.constructor.DefaultType),
        t.sanitize && (t.template = ui(t.template, t.allowList, t.sanitizeFn)),
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
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
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
        const e = bi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(bi);
  const vi = {
      ...bi.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    yi = { ...bi.DefaultType, content: "(string|element|function)" },
    wi = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class Ei extends bi {
    static get Default() {
      return vi;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return wi;
    }
    static get DefaultType() {
      return yi;
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
        const e = Ei.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(Ei);
  const Ai = { offset: 10, method: "auto", target: "" },
    Ti = { offset: "number", method: "string", target: "(string|element)" },
    Oi = ".nav-link, .list-group-item, .dropdown-item";
  class Ci extends H {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Ai;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window
            ? "offset"
            : "position",
        i = "auto" === this._config.method ? t : this._config.method,
        n = "position" === i ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight());
      F.find(Oi, this._config.target)
        .map((t) => {
          const s = e(t),
            o = s ? F.findOne(s) : null;
          if (o) {
            const t = o.getBoundingClientRect();
            if (t.width || t.height) return [q[i](o).top + n, s];
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
      P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ...Ai,
          ...q.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = o(t.target) || document.documentElement),
        r("scrollspy", t, Ti),
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
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
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
      const e = Oi.split(",").map(
          (e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
        ),
        i = F.findOne(e.join(","), this._config.target);
      i.classList.add("active"),
        i.classList.contains("dropdown-item")
          ? F.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              "active"
            )
          : F.parents(i, ".nav, .list-group").forEach((t) => {
              F.prev(t, ".nav-link, .list-group-item").forEach((t) =>
                t.classList.add("active")
              ),
                F.prev(t, ".nav-item").forEach((t) => {
                  F.children(t, ".nav-link").forEach((t) =>
                    t.classList.add("active")
                  );
                });
            }),
        P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      F.find(Oi, this._config.target)
        .filter((t) => t.classList.contains("active"))
        .forEach((t) => t.classList.remove("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ci.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    F.find('[data-bs-spy="scroll"]').forEach((t) => new Ci(t));
  }),
    m(Ci);
  class ki extends H {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains("active")
      )
        return;
      let t;
      const e = i(this._element),
        n = this._element.closest(".nav, .list-group");
      if (n) {
        const e =
          "UL" === n.nodeName || "OL" === n.nodeName
            ? ":scope > li > .active"
            : ".active";
        (t = F.find(e, n)), (t = t[t.length - 1]);
      }
      const s = t
        ? P.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        P.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, n);
      const o = () => {
        P.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          P.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, i) {
      const n = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? F.children(e, ".active")
            : F.find(":scope > li > .active", e)
        )[0],
        s = i && n && n.classList.contains("fade"),
        o = () => this._transitionComplete(t, n, i);
      n && s
        ? (n.classList.remove("show"), this._queueCallback(o, t, !0))
        : o();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove("active");
        const t = F.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        d(t),
        t.classList.contains("fade") && t.classList.add("show");
      let n = t.parentNode;
      if (
        (n && "LI" === n.nodeName && (n = n.parentNode),
        n && n.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e &&
          F.find(".dropdown-toggle", e).forEach((t) =>
            t.classList.add("active")
          ),
          t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ki.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)))
        return;
      ki.getOrCreateInstance(this).show();
    }
  ),
    m(ki);
  const Li = { animation: "boolean", autohide: "boolean", delay: "number" },
    xi = { animation: !0, autohide: !0, delay: 5e3 };
  class Di extends H {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Li;
    }
    static get Default() {
      return xi;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      if (P.trigger(this._element, "show.bs.toast").defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      this._element.classList.remove("hide"),
        d(this._element),
        this._element.classList.add("show"),
        this._element.classList.add("showing"),
        this._queueCallback(
          () => {
            this._element.classList.remove("showing"),
              P.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        );
    }
    hide() {
      if (!this._element.classList.contains("show")) return;
      if (P.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
      this._element.classList.add("showing"),
        this._queueCallback(
          () => {
            this._element.classList.add("hide"),
              this._element.classList.remove("showing"),
              this._element.classList.remove("show"),
              P.trigger(this._element, "hidden.bs.toast");
          },
          this._element,
          this._config.animation
        );
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") &&
          this._element.classList.remove("show"),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...xi,
          ...q.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        r("toast", t, this.constructor.DefaultType),
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
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        P.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        P.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Di.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  B(Di), m(Di);
  return {
    Alert: $,
    Button: R,
    Carousel: ut,
    Collapse: mt,
    Dropdown: Ke,
    Modal: ni,
    Offcanvas: ri,
    Popover: Ei,
    ScrollSpy: Ci,
    Tab: ki,
    Toast: Di,
    Tooltip: bi,
  };
});
