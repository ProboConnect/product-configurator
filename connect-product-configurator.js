/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bl(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) e[r] = 1;
  return (r) => r in e;
}
const Pe = {}, Wa = [], vr = () => {
}, Pm = () => !1, ji = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Fl = (t) => t.startsWith("onUpdate:"), Ue = Object.assign, Hl = (t, e) => {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}, jm = Object.prototype.hasOwnProperty, Le = (t, e) => jm.call(t, e), pe = Array.isArray, Ka = (t) => dn(t) === "[object Map]", co = (t) => dn(t) === "[object Set]", Dd = (t) => dn(t) === "[object Date]", _e = (t) => typeof t == "function", Ye = (t) => typeof t == "string", nr = (t) => typeof t == "symbol", Fe = (t) => t !== null && typeof t == "object", Xu = (t) => (Fe(t) || _e(t)) && _e(t.then) && _e(t.catch), Gu = Object.prototype.toString, dn = (t) => Gu.call(t), Vm = (t) => dn(t).slice(8, -1), Vi = (t) => dn(t) === "[object Object]", ql = (t) => Ye(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Oo = /* @__PURE__ */ Bl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ri = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => e[r] || (e[r] = t(r));
}, Rm = /-(\w)/g, ut = Ri(
  (t) => t.replace(Rm, (e, r) => r ? r.toUpperCase() : "")
), Dm = /\B([A-Z])/g, Ct = Ri(
  (t) => t.replace(Dm, "-$1").toLowerCase()
), Di = Ri((t) => t.charAt(0).toUpperCase() + t.slice(1)), cs = Ri(
  (t) => t ? `on${Di(t)}` : ""
), St = (t, e) => !Object.is(t, e), Bn = (t, ...e) => {
  for (let r = 0; r < t.length; r++)
    t[r](...e);
}, Zu = (t, e, r, a = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: r
  });
}, ei = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, Ks = (t) => {
  const e = Ye(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Ld;
const Li = () => Ld || (Ld = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jt(t) {
  if (pe(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const a = t[r], o = Ye(a) ? Hm(a) : Jt(a);
      if (o)
        for (const n in o)
          e[n] = o[n];
    }
    return e;
  } else if (Ye(t) || Fe(t))
    return t;
}
const Lm = /;(?![^(]*\))/g, Bm = /:([^]+)/, Fm = /\/\*[^]*?\*\//g;
function Hm(t) {
  const e = {};
  return t.replace(Fm, "").split(Lm).forEach((r) => {
    if (r) {
      const a = r.split(Bm);
      a.length > 1 && (e[a[0].trim()] = a[1].trim());
    }
  }), e;
}
function be(t) {
  let e = "";
  if (Ye(t))
    e = t;
  else if (pe(t))
    for (let r = 0; r < t.length; r++) {
      const a = be(t[r]);
      a && (e += a + " ");
    }
  else if (Fe(t))
    for (const r in t)
      t[r] && (e += r + " ");
  return e.trim();
}
function Ca(t) {
  if (!t) return null;
  let { class: e, style: r } = t;
  return e && !Ye(e) && (t.class = be(e)), r && (t.style = Jt(r)), t;
}
const qm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Um = /* @__PURE__ */ Bl(qm);
function Qu(t) {
  return !!t || t === "";
}
function Wm(t, e) {
  if (t.length !== e.length) return !1;
  let r = !0;
  for (let a = 0; r && a < t.length; a++)
    r = Oa(t[a], e[a]);
  return r;
}
function Oa(t, e) {
  if (t === e) return !0;
  let r = Dd(t), a = Dd(e);
  if (r || a)
    return r && a ? t.getTime() === e.getTime() : !1;
  if (r = nr(t), a = nr(e), r || a)
    return t === e;
  if (r = pe(t), a = pe(e), r || a)
    return r && a ? Wm(t, e) : !1;
  if (r = Fe(t), a = Fe(e), r || a) {
    if (!r || !a)
      return !1;
    const o = Object.keys(t).length, n = Object.keys(e).length;
    if (o !== n)
      return !1;
    for (const i in t) {
      const s = t.hasOwnProperty(i), l = e.hasOwnProperty(i);
      if (s && !l || !s && l || !Oa(t[i], e[i]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function Ul(t, e) {
  return t.findIndex((r) => Oa(r, e));
}
const ep = (t) => !!(t && t.__v_isRef === !0), J = (t) => Ye(t) ? t : t == null ? "" : pe(t) || Fe(t) && (t.toString === Gu || !_e(t.toString)) ? ep(t) ? J(t.value) : JSON.stringify(t, tp, 2) : String(t), tp = (t, e) => ep(e) ? tp(t, e.value) : Ka(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (r, [a, o], n) => (r[us(a, n) + " =>"] = o, r),
    {}
  )
} : co(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((r) => us(r))
} : nr(e) ? us(e) : Fe(e) && !pe(e) && !Vi(e) ? String(e) : e, us = (t, e = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nr(t) ? `Symbol(${(r = t.description) != null ? r : e})` : t
  );
};
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let wt;
class Km {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = wt, !e && wt && (this.index = (wt.scopes || (wt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, r;
      if (this.scopes)
        for (e = 0, r = this.scopes.length; e < r; e++)
          this.scopes[e].pause();
      for (e = 0, r = this.effects.length; e < r; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, r;
      if (this.scopes)
        for (e = 0, r = this.scopes.length; e < r; e++)
          this.scopes[e].resume();
      for (e = 0, r = this.effects.length; e < r; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const r = wt;
      try {
        return wt = this, e();
      } finally {
        wt = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    wt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    wt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let r, a;
      for (r = 0, a = this.effects.length; r < a; r++)
        this.effects[r].stop();
      for (r = 0, a = this.cleanups.length; r < a; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, a = this.scopes.length; r < a; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !e) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function rp() {
  return wt;
}
function Ym(t, e = !1) {
  wt && wt.cleanups.push(t);
}
let qe;
const ps = /* @__PURE__ */ new WeakSet();
class ap {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, wt && wt.active && wt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ps.has(this) && (ps.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || np(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bd(this), ip(this);
    const e = qe, r = ar;
    qe = this, ar = !0;
    try {
      return this.fn();
    } finally {
      sp(this), qe = e, ar = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Yl(e);
      this.deps = this.depsTail = void 0, Bd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ys(this) && this.run();
  }
  get dirty() {
    return Ys(this);
  }
}
let op = 0, Eo, Mo;
function np(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Mo, Mo = t;
    return;
  }
  t.next = Eo, Eo = t;
}
function Wl() {
  op++;
}
function Kl() {
  if (--op > 0)
    return;
  if (Mo) {
    let e = Mo;
    for (Mo = void 0; e; ) {
      const r = e.next;
      e.next = void 0, e.flags &= -9, e = r;
    }
  }
  let t;
  for (; Eo; ) {
    let e = Eo;
    for (Eo = void 0; e; ) {
      const r = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (a) {
          t || (t = a);
        }
      e = r;
    }
  }
  if (t) throw t;
}
function ip(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function sp(t) {
  let e, r = t.depsTail, a = r;
  for (; a; ) {
    const o = a.prevDep;
    a.version === -1 ? (a === r && (r = o), Yl(a), Jm(a)) : e = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = o;
  }
  t.deps = e, t.depsTail = r;
}
function Ys(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (lp(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function lp(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ho))
    return;
  t.globalVersion = Ho;
  const e = t.dep;
  if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !Ys(t)) {
    t.flags &= -3;
    return;
  }
  const r = qe, a = ar;
  qe = t, ar = !0;
  try {
    ip(t);
    const o = t.fn(t._value);
    (e.version === 0 || St(o, t._value)) && (t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    qe = r, ar = a, sp(t), t.flags &= -3;
  }
}
function Yl(t, e = !1) {
  const { dep: r, prevSub: a, nextSub: o } = t;
  if (a && (a.nextSub = o, t.prevSub = void 0), o && (o.prevSub = a, t.nextSub = void 0), r.subs === t && (r.subs = a, !a && r.computed)) {
    r.computed.flags &= -5;
    for (let n = r.computed.deps; n; n = n.nextDep)
      Yl(n, !0);
  }
  !e && !--r.sc && r.map && r.map.delete(r.key);
}
function Jm(t) {
  const { prevDep: e, nextDep: r } = t;
  e && (e.nextDep = r, t.prevDep = void 0), r && (r.prevDep = e, t.nextDep = void 0);
}
let ar = !0;
const dp = [];
function Kr() {
  dp.push(ar), ar = !1;
}
function Yr() {
  const t = dp.pop();
  ar = t === void 0 ? !0 : t;
}
function Bd(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const r = qe;
    qe = void 0;
    try {
      e();
    } finally {
      qe = r;
    }
  }
}
let Ho = 0;
class Xm {
  constructor(e, r) {
    this.sub = e, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bi {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e) {
    if (!qe || !ar || qe === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== qe)
      r = this.activeLink = new Xm(qe, this), qe.deps ? (r.prevDep = qe.depsTail, qe.depsTail.nextDep = r, qe.depsTail = r) : qe.deps = qe.depsTail = r, cp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const a = r.nextDep;
      a.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = a), r.prevDep = qe.depsTail, r.nextDep = void 0, qe.depsTail.nextDep = r, qe.depsTail = r, qe.deps === r && (qe.deps = a);
    }
    return r;
  }
  trigger(e) {
    this.version++, Ho++, this.notify(e);
  }
  notify(e) {
    Wl();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Kl();
    }
  }
}
function cp(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let a = e.deps; a; a = a.nextDep)
        cp(a);
    }
    const r = t.dep.subs;
    r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
  }
}
const ti = /* @__PURE__ */ new WeakMap(), ma = Symbol(
  ""
), Js = Symbol(
  ""
), qo = Symbol(
  ""
);
function lt(t, e, r) {
  if (ar && qe) {
    let a = ti.get(t);
    a || ti.set(t, a = /* @__PURE__ */ new Map());
    let o = a.get(r);
    o || (a.set(r, o = new Bi()), o.map = a, o.key = r), o.track();
  }
}
function _r(t, e, r, a, o, n) {
  const i = ti.get(t);
  if (!i) {
    Ho++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Wl(), e === "clear")
    i.forEach(s);
  else {
    const l = pe(t), d = l && ql(r);
    if (l && r === "length") {
      const c = Number(a);
      i.forEach((u, p) => {
        (p === "length" || p === qo || !nr(p) && p >= c) && s(u);
      });
    } else
      switch ((r !== void 0 || i.has(void 0)) && s(i.get(r)), d && s(i.get(qo)), e) {
        case "add":
          l ? d && s(i.get("length")) : (s(i.get(ma)), Ka(t) && s(i.get(Js)));
          break;
        case "delete":
          l || (s(i.get(ma)), Ka(t) && s(i.get(Js)));
          break;
        case "set":
          Ka(t) && s(i.get(ma));
          break;
      }
  }
  Kl();
}
function Gm(t, e) {
  const r = ti.get(t);
  return r && r.get(e);
}
function Ra(t) {
  const e = Ne(t);
  return e === t ? e : (lt(e, "iterate", qo), qt(t) ? e : e.map(dt));
}
function Fi(t) {
  return lt(t = Ne(t), "iterate", qo), t;
}
const Zm = {
  __proto__: null,
  [Symbol.iterator]() {
    return fs(this, Symbol.iterator, dt);
  },
  concat(...t) {
    return Ra(this).concat(
      ...t.map((e) => pe(e) ? Ra(e) : e)
    );
  },
  entries() {
    return fs(this, "entries", (t) => (t[1] = dt(t[1]), t));
  },
  every(t, e) {
    return kr(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return kr(this, "filter", t, e, (r) => r.map(dt), arguments);
  },
  find(t, e) {
    return kr(this, "find", t, e, dt, arguments);
  },
  findIndex(t, e) {
    return kr(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return kr(this, "findLast", t, e, dt, arguments);
  },
  findLastIndex(t, e) {
    return kr(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return kr(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return hs(this, "includes", t);
  },
  indexOf(...t) {
    return hs(this, "indexOf", t);
  },
  join(t) {
    return Ra(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return hs(this, "lastIndexOf", t);
  },
  map(t, e) {
    return kr(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return fo(this, "pop");
  },
  push(...t) {
    return fo(this, "push", t);
  },
  reduce(t, ...e) {
    return Fd(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Fd(this, "reduceRight", t, e);
  },
  shift() {
    return fo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return kr(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return fo(this, "splice", t);
  },
  toReversed() {
    return Ra(this).toReversed();
  },
  toSorted(t) {
    return Ra(this).toSorted(t);
  },
  toSpliced(...t) {
    return Ra(this).toSpliced(...t);
  },
  unshift(...t) {
    return fo(this, "unshift", t);
  },
  values() {
    return fs(this, "values", dt);
  }
};
function fs(t, e, r) {
  const a = Fi(t), o = a[e]();
  return a !== t && !qt(t) && (o._next = o.next, o.next = () => {
    const n = o._next();
    return n.value && (n.value = r(n.value)), n;
  }), o;
}
const Qm = Array.prototype;
function kr(t, e, r, a, o, n) {
  const i = Fi(t), s = i !== t && !qt(t), l = i[e];
  if (l !== Qm[e]) {
    const u = l.apply(t, n);
    return s ? dt(u) : u;
  }
  let d = r;
  i !== t && (s ? d = function(u, p) {
    return r.call(this, dt(u), p, t);
  } : r.length > 2 && (d = function(u, p) {
    return r.call(this, u, p, t);
  }));
  const c = l.call(i, d, a);
  return s && o ? o(c) : c;
}
function Fd(t, e, r, a) {
  const o = Fi(t);
  let n = r;
  return o !== t && (qt(t) ? r.length > 3 && (n = function(i, s, l) {
    return r.call(this, i, s, l, t);
  }) : n = function(i, s, l) {
    return r.call(this, i, dt(s), l, t);
  }), o[e](n, ...a);
}
function hs(t, e, r) {
  const a = Ne(t);
  lt(a, "iterate", qo);
  const o = a[e](...r);
  return (o === -1 || o === !1) && Gl(r[0]) ? (r[0] = Ne(r[0]), a[e](...r)) : o;
}
function fo(t, e, r = []) {
  Kr(), Wl();
  const a = Ne(t)[e].apply(t, r);
  return Kl(), Yr(), a;
}
const eg = /* @__PURE__ */ Bl("__proto__,__v_isRef,__isVue"), up = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(nr)
);
function tg(t) {
  nr(t) || (t = String(t));
  const e = Ne(this);
  return lt(e, "has", t), e.hasOwnProperty(t);
}
class pp {
  constructor(e = !1, r = !1) {
    this._isReadonly = e, this._isShallow = r;
  }
  get(e, r, a) {
    const o = this._isReadonly, n = this._isShallow;
    if (r === "__v_isReactive")
      return !o;
    if (r === "__v_isReadonly")
      return o;
    if (r === "__v_isShallow")
      return n;
    if (r === "__v_raw")
      return a === (o ? n ? ug : gp : n ? mp : hp).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(a) ? e : void 0;
    const i = pe(e);
    if (!o) {
      let l;
      if (i && (l = Zm[r]))
        return l;
      if (r === "hasOwnProperty")
        return tg;
    }
    const s = Reflect.get(
      e,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Xe(e) ? e : a
    );
    return (nr(r) ? up.has(r) : eg(r)) || (o || lt(e, "get", r), n) ? s : Xe(s) ? i && ql(r) ? s : s.value : Fe(s) ? o ? vp(s) : Qe(s) : s;
  }
}
class fp extends pp {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, a, o) {
    let n = e[r];
    if (!this._isShallow) {
      const l = Hr(n);
      if (!qt(a) && !Hr(a) && (n = Ne(n), a = Ne(a)), !pe(e) && Xe(n) && !Xe(a))
        return l ? !1 : (n.value = a, !0);
    }
    const i = pe(e) && ql(r) ? Number(r) < e.length : Le(e, r), s = Reflect.set(
      e,
      r,
      a,
      Xe(e) ? e : o
    );
    return e === Ne(o) && (i ? St(a, n) && _r(e, "set", r, a) : _r(e, "add", r, a)), s;
  }
  deleteProperty(e, r) {
    const a = Le(e, r);
    e[r];
    const o = Reflect.deleteProperty(e, r);
    return o && a && _r(e, "delete", r, void 0), o;
  }
  has(e, r) {
    const a = Reflect.has(e, r);
    return (!nr(r) || !up.has(r)) && lt(e, "has", r), a;
  }
  ownKeys(e) {
    return lt(
      e,
      "iterate",
      pe(e) ? "length" : ma
    ), Reflect.ownKeys(e);
  }
}
class rg extends pp {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, r) {
    return !0;
  }
  deleteProperty(e, r) {
    return !0;
  }
}
const ag = /* @__PURE__ */ new fp(), og = /* @__PURE__ */ new rg(), ng = /* @__PURE__ */ new fp(!0);
const Xs = (t) => t, Cn = (t) => Reflect.getPrototypeOf(t);
function ig(t, e, r) {
  return function(...a) {
    const o = this.__v_raw, n = Ne(o), i = Ka(n), s = t === "entries" || t === Symbol.iterator && i, l = t === "keys" && i, d = o[t](...a), c = r ? Xs : e ? Gs : dt;
    return !e && lt(
      n,
      "iterate",
      l ? Js : ma
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = d.next();
        return p ? { value: u, done: p } : {
          value: s ? [c(u[0]), c(u[1])] : c(u),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function On(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function sg(t, e) {
  const r = {
    get(o) {
      const n = this.__v_raw, i = Ne(n), s = Ne(o);
      t || (St(o, s) && lt(i, "get", o), lt(i, "get", s));
      const { has: l } = Cn(i), d = e ? Xs : t ? Gs : dt;
      if (l.call(i, o))
        return d(n.get(o));
      if (l.call(i, s))
        return d(n.get(s));
      n !== i && n.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && lt(Ne(o), "iterate", ma), Reflect.get(o, "size", o);
    },
    has(o) {
      const n = this.__v_raw, i = Ne(n), s = Ne(o);
      return t || (St(o, s) && lt(i, "has", o), lt(i, "has", s)), o === s ? n.has(o) : n.has(o) || n.has(s);
    },
    forEach(o, n) {
      const i = this, s = i.__v_raw, l = Ne(s), d = e ? Xs : t ? Gs : dt;
      return !t && lt(l, "iterate", ma), s.forEach((c, u) => o.call(n, d(c), d(u), i));
    }
  };
  return Ue(
    r,
    t ? {
      add: On("add"),
      set: On("set"),
      delete: On("delete"),
      clear: On("clear")
    } : {
      add(o) {
        !e && !qt(o) && !Hr(o) && (o = Ne(o));
        const n = Ne(this);
        return Cn(n).has.call(n, o) || (n.add(o), _r(n, "add", o, o)), this;
      },
      set(o, n) {
        !e && !qt(n) && !Hr(n) && (n = Ne(n));
        const i = Ne(this), { has: s, get: l } = Cn(i);
        let d = s.call(i, o);
        d || (o = Ne(o), d = s.call(i, o));
        const c = l.call(i, o);
        return i.set(o, n), d ? St(n, c) && _r(i, "set", o, n) : _r(i, "add", o, n), this;
      },
      delete(o) {
        const n = Ne(this), { has: i, get: s } = Cn(n);
        let l = i.call(n, o);
        l || (o = Ne(o), l = i.call(n, o)), s && s.call(n, o);
        const d = n.delete(o);
        return l && _r(n, "delete", o, void 0), d;
      },
      clear() {
        const o = Ne(this), n = o.size !== 0, i = o.clear();
        return n && _r(
          o,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    r[o] = ig(o, t, e);
  }), r;
}
function Jl(t, e) {
  const r = sg(t, e);
  return (a, o, n) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? a : Reflect.get(
    Le(r, o) && o in a ? r : a,
    o,
    n
  );
}
const lg = {
  get: /* @__PURE__ */ Jl(!1, !1)
}, dg = {
  get: /* @__PURE__ */ Jl(!1, !0)
}, cg = {
  get: /* @__PURE__ */ Jl(!0, !1)
};
const hp = /* @__PURE__ */ new WeakMap(), mp = /* @__PURE__ */ new WeakMap(), gp = /* @__PURE__ */ new WeakMap(), ug = /* @__PURE__ */ new WeakMap();
function pg(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function fg(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : pg(Vm(t));
}
function Qe(t) {
  return Hr(t) ? t : Xl(
    t,
    !1,
    ag,
    lg,
    hp
  );
}
function hg(t) {
  return Xl(
    t,
    !1,
    ng,
    dg,
    mp
  );
}
function vp(t) {
  return Xl(
    t,
    !0,
    og,
    cg,
    gp
  );
}
function Xl(t, e, r, a, o) {
  if (!Fe(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const n = o.get(t);
  if (n)
    return n;
  const i = fg(t);
  if (i === 0)
    return t;
  const s = new Proxy(
    t,
    i === 2 ? a : r
  );
  return o.set(t, s), s;
}
function ga(t) {
  return Hr(t) ? ga(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Hr(t) {
  return !!(t && t.__v_isReadonly);
}
function qt(t) {
  return !!(t && t.__v_isShallow);
}
function Gl(t) {
  return t ? !!t.__v_raw : !1;
}
function Ne(t) {
  const e = t && t.__v_raw;
  return e ? Ne(e) : t;
}
function mg(t) {
  return !Le(t, "__v_skip") && Object.isExtensible(t) && Zu(t, "__v_skip", !0), t;
}
const dt = (t) => Fe(t) ? Qe(t) : t, Gs = (t) => Fe(t) ? vp(t) : t;
function Xe(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function D(t) {
  return wp(t, !1);
}
function bp(t) {
  return wp(t, !0);
}
function wp(t, e) {
  return Xe(t) ? t : new gg(t, e);
}
class gg {
  constructor(e, r) {
    this.dep = new Bi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? e : Ne(e), this._value = r ? e : dt(e), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const r = this._rawValue, a = this.__v_isShallow || qt(e) || Hr(e);
    e = a ? e : Ne(e), St(e, r) && (this._rawValue = e, this._value = a ? e : dt(e), this.dep.trigger());
  }
}
function Hd(t) {
  t.dep && t.dep.trigger();
}
function A(t) {
  return Xe(t) ? t.value : t;
}
function Ut(t) {
  return _e(t) ? t() : A(t);
}
const vg = {
  get: (t, e, r) => e === "__v_raw" ? t : A(Reflect.get(t, e, r)),
  set: (t, e, r, a) => {
    const o = t[e];
    return Xe(o) && !Xe(r) ? (o.value = r, !0) : Reflect.set(t, e, r, a);
  }
};
function yp(t) {
  return ga(t) ? t : new Proxy(t, vg);
}
class bg {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    const r = this.dep = new Bi(), { get: a, set: o } = e(r.track.bind(r), r.trigger.bind(r));
    this._get = a, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function wg(t) {
  return new bg(t);
}
function yg(t) {
  const e = pe(t) ? new Array(t.length) : {};
  for (const r in t)
    e[r] = kg(t, r);
  return e;
}
class xg {
  constructor(e, r, a) {
    this._object = e, this._key = r, this._defaultValue = a, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const e = this._object[this._key];
    return this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Gm(Ne(this._object), this._key);
  }
}
function kg(t, e, r) {
  const a = t[e];
  return Xe(a) ? a : new xg(t, e, r);
}
class $g {
  constructor(e, r, a) {
    this.fn = e, this.setter = r, this._value = void 0, this.dep = new Bi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ho - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    qe !== this)
      return np(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return lp(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function _g(t, e, r = !1) {
  let a, o;
  return _e(t) ? a = t : (a = t.get, o = t.set), new $g(a, o, r);
}
const En = {}, ri = /* @__PURE__ */ new WeakMap();
let da;
function Sg(t, e = !1, r = da) {
  if (r) {
    let a = ri.get(r);
    a || ri.set(r, a = []), a.push(t);
  }
}
function Cg(t, e, r = Pe) {
  const { immediate: a, deep: o, once: n, scheduler: i, augmentJob: s, call: l } = r, d = (g) => o ? g : qt(g) || o === !1 || o === 0 ? Sr(g, 1) : Sr(g);
  let c, u, p, h, f = !1, m = !1;
  if (Xe(t) ? (u = () => t.value, f = qt(t)) : ga(t) ? (u = () => d(t), f = !0) : pe(t) ? (m = !0, f = t.some((g) => ga(g) || qt(g)), u = () => t.map((g) => {
    if (Xe(g))
      return g.value;
    if (ga(g))
      return d(g);
    if (_e(g))
      return l ? l(g, 2) : g();
  })) : _e(t) ? e ? u = l ? () => l(t, 2) : t : u = () => {
    if (p) {
      Kr();
      try {
        p();
      } finally {
        Yr();
      }
    }
    const g = da;
    da = c;
    try {
      return l ? l(t, 3, [h]) : t(h);
    } finally {
      da = g;
    }
  } : u = vr, e && o) {
    const g = u, w = o === !0 ? 1 / 0 : o;
    u = () => Sr(g(), w);
  }
  const v = rp(), b = () => {
    c.stop(), v && Hl(v.effects, c);
  };
  if (n && e) {
    const g = e;
    e = (...w) => {
      g(...w), b();
    };
  }
  let k = m ? new Array(t.length).fill(En) : En;
  const $ = (g) => {
    if (!(!(c.flags & 1) || !c.dirty && !g))
      if (e) {
        const w = c.run();
        if (o || f || (m ? w.some((x, S) => St(x, k[S])) : St(w, k))) {
          p && p();
          const x = da;
          da = c;
          try {
            const S = [
              w,
              // pass undefined as the old value when it's changed for the first time
              k === En ? void 0 : m && k[0] === En ? [] : k,
              h
            ];
            l ? l(e, 3, S) : (
              // @ts-expect-error
              e(...S)
            ), k = w;
          } finally {
            da = x;
          }
        }
      } else
        c.run();
  };
  return s && s($), c = new ap(u), c.scheduler = i ? () => i($, !1) : $, h = (g) => Sg(g, !1, c), p = c.onStop = () => {
    const g = ri.get(c);
    if (g) {
      if (l)
        l(g, 4);
      else
        for (const w of g) w();
      ri.delete(c);
    }
  }, e ? a ? $(!0) : k = c.run() : i ? i($.bind(null, !0), !0) : c.run(), b.pause = c.pause.bind(c), b.resume = c.resume.bind(c), b.stop = b, b;
}
function Sr(t, e = 1 / 0, r) {
  if (e <= 0 || !Fe(t) || t.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(t)))
    return t;
  if (r.add(t), e--, Xe(t))
    Sr(t.value, e, r);
  else if (pe(t))
    for (let a = 0; a < t.length; a++)
      Sr(t[a], e, r);
  else if (co(t) || Ka(t))
    t.forEach((a) => {
      Sr(a, e, r);
    });
  else if (Vi(t)) {
    for (const a in t)
      Sr(t[a], e, r);
    for (const a of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, a) && Sr(t[a], e, r);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function cn(t, e, r, a) {
  try {
    return a ? t(...a) : t();
  } catch (o) {
    Hi(o, e, r);
  }
}
function ir(t, e, r, a) {
  if (_e(t)) {
    const o = cn(t, e, r, a);
    return o && Xu(o) && o.catch((n) => {
      Hi(n, e, r);
    }), o;
  }
  if (pe(t)) {
    const o = [];
    for (let n = 0; n < t.length; n++)
      o.push(ir(t[n], e, r, a));
    return o;
  }
}
function Hi(t, e, r, a = !0) {
  const o = e ? e.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: i } = e && e.appContext.config || Pe;
  if (e) {
    let s = e.parent;
    const l = e.proxy, d = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](t, l, d) === !1)
            return;
      }
      s = s.parent;
    }
    if (n) {
      Kr(), cn(n, null, 10, [
        t,
        l,
        d
      ]), Yr();
      return;
    }
  }
  Og(t, r, o, a, i);
}
function Og(t, e, r, a = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const yt = [];
let cr = -1;
const Ya = [];
let jr = null, La = 0;
const xp = /* @__PURE__ */ Promise.resolve();
let ai = null;
function At(t) {
  const e = ai || xp;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Eg(t) {
  let e = cr + 1, r = yt.length;
  for (; e < r; ) {
    const a = e + r >>> 1, o = yt[a], n = Uo(o);
    n < t || n === t && o.flags & 2 ? e = a + 1 : r = a;
  }
  return e;
}
function Zl(t) {
  if (!(t.flags & 1)) {
    const e = Uo(t), r = yt[yt.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Uo(r) ? yt.push(t) : yt.splice(Eg(e), 0, t), t.flags |= 1, kp();
  }
}
function kp() {
  ai || (ai = xp.then(_p));
}
function Mg(t) {
  pe(t) ? Ya.push(...t) : jr && t.id === -1 ? jr.splice(La + 1, 0, t) : t.flags & 1 || (Ya.push(t), t.flags |= 1), kp();
}
function qd(t, e, r = cr + 1) {
  for (; r < yt.length; r++) {
    const a = yt[r];
    if (a && a.flags & 2) {
      if (t && a.id !== t.uid)
        continue;
      yt.splice(r, 1), r--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function $p(t) {
  if (Ya.length) {
    const e = [...new Set(Ya)].sort(
      (r, a) => Uo(r) - Uo(a)
    );
    if (Ya.length = 0, jr) {
      jr.push(...e);
      return;
    }
    for (jr = e, La = 0; La < jr.length; La++) {
      const r = jr[La];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    jr = null, La = 0;
  }
}
const Uo = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function _p(t) {
  try {
    for (cr = 0; cr < yt.length; cr++) {
      const e = yt[cr];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), cn(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; cr < yt.length; cr++) {
      const e = yt[cr];
      e && (e.flags &= -2);
    }
    cr = -1, yt.length = 0, $p(), ai = null, (yt.length || Ya.length) && _p();
  }
}
let et = null, Sp = null;
function oi(t) {
  const e = et;
  return et = t, Sp = t && t.type.__scopeId || null, e;
}
function G(t, e = et, r) {
  if (!e || t._n)
    return t;
  const a = (...o) => {
    a._d && Qd(-1);
    const n = oi(e);
    let i;
    try {
      i = t(...o);
    } finally {
      oi(n), a._d && Qd(1);
    }
    return i;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function qr(t, e) {
  if (et === null)
    return t;
  const r = Ji(et), a = t.dirs || (t.dirs = []);
  for (let o = 0; o < e.length; o++) {
    let [n, i, s, l = Pe] = e[o];
    n && (_e(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && Sr(i), a.push({
      dir: n,
      instance: r,
      value: i,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return t;
}
function na(t, e, r, a) {
  const o = t.dirs, n = e && e.dirs;
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    n && (s.oldValue = n[i].value);
    let l = s.dir[a];
    l && (Kr(), ir(l, r, 8, [
      t.el,
      s,
      t,
      e
    ]), Yr());
  }
}
const Tg = Symbol("_vte"), Cp = (t) => t.__isTeleport, Vr = Symbol("_leaveCb"), Mn = Symbol("_enterCb");
function Ag() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _t(() => {
    t.isMounted = !0;
  }), Jr(() => {
    t.isUnmounting = !0;
  }), t;
}
const Ft = [Function, Array], Op = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ft,
  onEnter: Ft,
  onAfterEnter: Ft,
  onEnterCancelled: Ft,
  // leave
  onBeforeLeave: Ft,
  onLeave: Ft,
  onAfterLeave: Ft,
  onLeaveCancelled: Ft,
  // appear
  onBeforeAppear: Ft,
  onAppear: Ft,
  onAfterAppear: Ft,
  onAppearCancelled: Ft
}, Ep = (t) => {
  const e = t.subTree;
  return e.component ? Ep(e.component) : e;
}, Ig = {
  name: "BaseTransition",
  props: Op,
  setup(t, { slots: e }) {
    const r = zr(), a = Ag();
    return () => {
      const o = e.default && Ap(e.default(), !0);
      if (!o || !o.length)
        return;
      const n = Mp(o), i = Ne(t), { mode: s } = i;
      if (a.isLeaving)
        return ms(n);
      const l = Ud(n);
      if (!l)
        return ms(n);
      let d = Zs(
        l,
        i,
        a,
        r,
        // #11061, ensure enterHooks is fresh after clone
        (p) => d = p
      );
      l.type !== xt && Wo(l, d);
      const c = r.subTree, u = c && Ud(c);
      if (u && u.type !== xt && !ua(l, u) && Ep(r).type !== xt) {
        const p = Zs(
          u,
          i,
          a,
          r
        );
        if (Wo(u, p), s === "out-in" && l.type !== xt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, r.job.flags & 8 || r.update(), delete p.afterLeave;
          }, ms(n);
        s === "in-out" && l.type !== xt && (p.delayLeave = (h, f, m) => {
          const v = Tp(
            a,
            u
          );
          v[String(u.key)] = u, h[Vr] = () => {
            f(), h[Vr] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = m;
        });
      }
      return n;
    };
  }
};
function Mp(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const r of t)
      if (r.type !== xt) {
        e = r;
        break;
      }
  }
  return e;
}
const zg = Ig;
function Tp(t, e) {
  const { leavingVNodes: r } = t;
  let a = r.get(e.type);
  return a || (a = /* @__PURE__ */ Object.create(null), r.set(e.type, a)), a;
}
function Zs(t, e, r, a, o) {
  const {
    appear: n,
    mode: i,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: f,
    onLeaveCancelled: m,
    onBeforeAppear: v,
    onAppear: b,
    onAfterAppear: k,
    onAppearCancelled: $
  } = e, g = String(t.key), w = Tp(r, t), x = (T, I) => {
    T && ir(
      T,
      a,
      9,
      I
    );
  }, S = (T, I) => {
    const L = I[1];
    x(T, I), pe(T) ? T.every((V) => V.length <= 1) && L() : T.length <= 1 && L();
  }, M = {
    mode: i,
    persisted: s,
    beforeEnter(T) {
      let I = l;
      if (!r.isMounted)
        if (n)
          I = v || l;
        else
          return;
      T[Vr] && T[Vr](
        !0
        /* cancelled */
      );
      const L = w[g];
      L && ua(t, L) && L.el[Vr] && L.el[Vr](), x(I, [T]);
    },
    enter(T) {
      let I = d, L = c, V = u;
      if (!r.isMounted)
        if (n)
          I = b || d, L = k || c, V = $ || u;
        else
          return;
      let ae = !1;
      const we = T[Mn] = (Ce) => {
        ae || (ae = !0, Ce ? x(V, [T]) : x(L, [T]), M.delayedLeave && M.delayedLeave(), T[Mn] = void 0);
      };
      I ? S(I, [T, we]) : we();
    },
    leave(T, I) {
      const L = String(t.key);
      if (T[Mn] && T[Mn](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return I();
      x(p, [T]);
      let V = !1;
      const ae = T[Vr] = (we) => {
        V || (V = !0, I(), we ? x(m, [T]) : x(f, [T]), T[Vr] = void 0, w[L] === t && delete w[L]);
      };
      w[L] = t, h ? S(h, [T, ae]) : ae();
    },
    clone(T) {
      const I = Zs(
        T,
        e,
        r,
        a,
        o
      );
      return o && o(I), I;
    }
  };
  return M;
}
function ms(t) {
  if (qi(t))
    return t = Ur(t), t.children = null, t;
}
function Ud(t) {
  if (!qi(t))
    return Cp(t.type) && t.children ? Mp(t.children) : t;
  const { shapeFlag: e, children: r } = t;
  if (r) {
    if (e & 16)
      return r[0];
    if (e & 32 && _e(r.default))
      return r.default();
  }
}
function Wo(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Wo(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ap(t, e = !1, r) {
  let a = [], o = 0;
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    const s = r == null ? i.key : String(r) + String(i.key != null ? i.key : n);
    i.type === ke ? (i.patchFlag & 128 && o++, a = a.concat(
      Ap(i.children, e, s)
    )) : (e || i.type !== xt) && a.push(s != null ? Ur(i, { key: s }) : i);
  }
  if (o > 1)
    for (let n = 0; n < a.length; n++)
      a[n].patchFlag = -2;
  return a;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ng(t, e) {
  return _e(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ue({ name: t.name }, e, { setup: t })
  ) : t;
}
function Ip(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function bo(t) {
  const e = zr(), r = bp(null);
  if (e) {
    const o = e.refs === Pe ? e.refs = {} : e.refs;
    Object.defineProperty(o, t, {
      enumerable: !0,
      get: () => r.value,
      set: (n) => r.value = n
    });
  }
  return r;
}
function Qs(t, e, r, a, o = !1) {
  if (pe(t)) {
    t.forEach(
      (f, m) => Qs(
        f,
        e && (pe(e) ? e[m] : e),
        r,
        a,
        o
      )
    );
    return;
  }
  if (Ja(a) && !o)
    return;
  const n = a.shapeFlag & 4 ? Ji(a.component) : a.el, i = o ? null : n, { i: s, r: l } = t, d = e && e.r, c = s.refs === Pe ? s.refs = {} : s.refs, u = s.setupState, p = Ne(u), h = u === Pe ? () => !1 : (f) => Le(p, f);
  if (d != null && d !== l && (Ye(d) ? (c[d] = null, h(d) && (u[d] = null)) : Xe(d) && (d.value = null)), _e(l))
    cn(l, s, 12, [i, c]);
  else {
    const f = Ye(l), m = Xe(l);
    if (f || m) {
      const v = () => {
        if (t.f) {
          const b = f ? h(l) ? u[l] : c[l] : l.value;
          o ? pe(b) && Hl(b, n) : pe(b) ? b.includes(n) || b.push(n) : f ? (c[l] = [n], h(l) && (u[l] = c[l])) : (l.value = [n], t.k && (c[t.k] = l.value));
        } else f ? (c[l] = i, h(l) && (u[l] = i)) : m && (l.value = i, t.k && (c[t.k] = i));
      };
      i ? (v.id = -1, zt(v, r)) : v();
    }
  }
}
Li().requestIdleCallback;
Li().cancelIdleCallback;
const Ja = (t) => !!t.type.__asyncLoader, qi = (t) => t.type.__isKeepAlive;
function Pg(t, e) {
  zp(t, "a", e);
}
function jg(t, e) {
  zp(t, "da", e);
}
function zp(t, e, r = ot) {
  const a = t.__wdc || (t.__wdc = () => {
    let o = r;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (Ui(e, a, r), r) {
    let o = r.parent;
    for (; o && o.parent; )
      qi(o.parent.vnode) && Vg(a, e, r, o), o = o.parent;
  }
}
function Vg(t, e, r, a) {
  const o = Ui(
    e,
    t,
    a,
    !0
    /* prepend */
  );
  un(() => {
    Hl(a[e], o);
  }, r);
}
function Ui(t, e, r = ot, a = !1) {
  if (r) {
    const o = r[t] || (r[t] = []), n = e.__weh || (e.__weh = (...i) => {
      Kr();
      const s = hn(r), l = ir(e, r, t, i);
      return s(), Yr(), l;
    });
    return a ? o.unshift(n) : o.push(n), n;
  }
}
const Ir = (t) => (e, r = ot) => {
  (!Jo || t === "sp") && Ui(t, (...a) => e(...a), r);
}, Ql = Ir("bm"), _t = Ir("m"), Rg = Ir(
  "bu"
), Dg = Ir("u"), Jr = Ir(
  "bum"
), un = Ir("um"), Lg = Ir(
  "sp"
), Bg = Ir("rtg"), Fg = Ir("rtc");
function Hg(t, e = ot) {
  Ui("ec", t, e);
}
const qg = "components", Np = Symbol.for("v-ndc");
function Ea(t) {
  return Ye(t) ? Ug(qg, t, !1) || t : t || Np;
}
function Ug(t, e, r = !0, a = !1) {
  const o = et || ot;
  if (o) {
    const n = o.type;
    {
      const s = Tv(
        n,
        !1
      );
      if (s && (s === e || s === ut(e) || s === Di(ut(e))))
        return n;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Wd(o[t] || n[t], e) || // global registration
      Wd(o.appContext[t], e)
    );
    return !i && a ? n : i;
  }
}
function Wd(t, e) {
  return t && (t[e] || t[ut(e)] || t[Di(ut(e))]);
}
function Ze(t, e, r, a) {
  let o;
  const n = r, i = pe(t);
  if (i || Ye(t)) {
    const s = i && ga(t);
    let l = !1;
    s && (l = !qt(t), t = Fi(t)), o = new Array(t.length);
    for (let d = 0, c = t.length; d < c; d++)
      o[d] = e(
        l ? dt(t[d]) : t[d],
        d,
        void 0,
        n
      );
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let s = 0; s < t; s++)
      o[s] = e(s + 1, s, void 0, n);
  } else if (Fe(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (s, l) => e(s, l, void 0, n)
      );
    else {
      const s = Object.keys(t);
      o = new Array(s.length);
      for (let l = 0, d = s.length; l < d; l++) {
        const c = s[l];
        o[l] = e(t[c], c, l, n);
      }
    }
  else
    o = [];
  return o;
}
function To(t, e) {
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (pe(a))
      for (let o = 0; o < a.length; o++)
        t[a[o].name] = a[o].fn;
    else a && (t[a.name] = a.key ? (...o) => {
      const n = a.fn(...o);
      return n && (n.key = a.key), n;
    } : a.fn);
  }
  return t;
}
function le(t, e, r = {}, a, o) {
  if (et.ce || et.parent && Ja(et.parent) && et.parent.ce)
    return e !== "default" && (r.name = e), y(), W(
      ke,
      null,
      [ee("slot", r, a && a())],
      64
    );
  let n = t[e];
  n && n._c && (n._d = !1), y();
  const i = n && Pp(n(r)), s = r.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = W(
    ke,
    {
      key: (s && !nr(s) ? s : `_${e}`) + // #7256 force differentiate fallback content from actual content
      (!i && a ? "_fb" : "")
    },
    i || (a ? a() : []),
    i && t._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), n && n._c && (n._d = !0), l;
}
function Pp(t) {
  return t.some((e) => Yo(e) ? !(e.type === xt || e.type === ke && !Pp(e.children)) : !0) ? t : null;
}
const el = (t) => t ? af(t) ? Ji(t) : el(t.parent) : null, Ao = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ue(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => el(t.parent),
    $root: (t) => el(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => ed(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Zl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = At.bind(t.proxy)),
    $watch: (t) => mv.bind(t)
  })
), gs = (t, e) => t !== Pe && !t.__isScriptSetup && Le(t, e), Wg = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: r, setupState: a, data: o, props: n, accessCache: i, type: s, appContext: l } = t;
    let d;
    if (e[0] !== "$") {
      const h = i[e];
      if (h !== void 0)
        switch (h) {
          case 1:
            return a[e];
          case 2:
            return o[e];
          case 4:
            return r[e];
          case 3:
            return n[e];
        }
      else {
        if (gs(a, e))
          return i[e] = 1, a[e];
        if (o !== Pe && Le(o, e))
          return i[e] = 2, o[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = t.propsOptions[0]) && Le(d, e)
        )
          return i[e] = 3, n[e];
        if (r !== Pe && Le(r, e))
          return i[e] = 4, r[e];
        tl && (i[e] = 0);
      }
    }
    const c = Ao[e];
    let u, p;
    if (c)
      return e === "$attrs" && lt(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[e])
    )
      return u;
    if (r !== Pe && Le(r, e))
      return i[e] = 4, r[e];
    if (
      // global properties
      p = l.config.globalProperties, Le(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, r) {
    const { data: a, setupState: o, ctx: n } = t;
    return gs(o, e) ? (o[e] = r, !0) : a !== Pe && Le(a, e) ? (a[e] = r, !0) : Le(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (n[e] = r, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: r, ctx: a, appContext: o, propsOptions: n }
  }, i) {
    let s;
    return !!r[i] || t !== Pe && Le(t, i) || gs(e, i) || (s = n[0]) && Le(s, i) || Le(a, i) || Le(Ao, i) || Le(o.config.globalProperties, i);
  },
  defineProperty(t, e, r) {
    return r.get != null ? t._.accessCache[e] = 0 : Le(r, "value") && this.set(t, e, r.value, null), Reflect.defineProperty(t, e, r);
  }
};
function jp() {
  return Kg().slots;
}
function Kg() {
  const t = zr();
  return t.setupContext || (t.setupContext = nf(t));
}
function ni(t) {
  return pe(t) ? t.reduce(
    (e, r) => (e[r] = null, e),
    {}
  ) : t;
}
function Mr(t, e) {
  return !t || !e ? t || e : pe(t) && pe(e) ? t.concat(e) : Ue({}, ni(t), ni(e));
}
let tl = !0;
function Yg(t) {
  const e = ed(t), r = t.proxy, a = t.ctx;
  tl = !1, e.beforeCreate && Kd(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: n,
    methods: i,
    watch: s,
    provide: l,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: p,
    beforeUpdate: h,
    updated: f,
    activated: m,
    deactivated: v,
    beforeDestroy: b,
    beforeUnmount: k,
    destroyed: $,
    unmounted: g,
    render: w,
    renderTracked: x,
    renderTriggered: S,
    errorCaptured: M,
    serverPrefetch: T,
    // public API
    expose: I,
    inheritAttrs: L,
    // assets
    components: V,
    directives: ae,
    filters: we
  } = e;
  if (d && Jg(d, a, null), i)
    for (const oe in i) {
      const ne = i[oe];
      _e(ne) && (a[oe] = ne.bind(r));
    }
  if (o) {
    const oe = o.call(r, r);
    Fe(oe) && (t.data = Qe(oe));
  }
  if (tl = !0, n)
    for (const oe in n) {
      const ne = n[oe], Se = _e(ne) ? ne.bind(r, r) : _e(ne.get) ? ne.get.bind(r, r) : vr, ye = !_e(ne) && _e(ne.set) ? ne.set.bind(r) : vr, ze = B({
        get: Se,
        set: ye
      });
      Object.defineProperty(a, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (Me) => ze.value = Me
      });
    }
  if (s)
    for (const oe in s)
      Vp(s[oe], a, r, oe);
  if (l) {
    const oe = _e(l) ? l.call(r) : l;
    Reflect.ownKeys(oe).forEach((ne) => {
      al(ne, oe[ne]);
    });
  }
  c && Kd(c, t, "c");
  function q(oe, ne) {
    pe(ne) ? ne.forEach((Se) => oe(Se.bind(r))) : ne && oe(ne.bind(r));
  }
  if (q(Ql, u), q(_t, p), q(Rg, h), q(Dg, f), q(Pg, m), q(jg, v), q(Hg, M), q(Fg, x), q(Bg, S), q(Jr, k), q(un, g), q(Lg, T), pe(I))
    if (I.length) {
      const oe = t.exposed || (t.exposed = {});
      I.forEach((ne) => {
        Object.defineProperty(oe, ne, {
          get: () => r[ne],
          set: (Se) => r[ne] = Se
        });
      });
    } else t.exposed || (t.exposed = {});
  w && t.render === vr && (t.render = w), L != null && (t.inheritAttrs = L), V && (t.components = V), ae && (t.directives = ae), T && Ip(t);
}
function Jg(t, e, r = vr) {
  pe(t) && (t = rl(t));
  for (const a in t) {
    const o = t[a];
    let n;
    Fe(o) ? "default" in o ? n = Er(
      o.from || a,
      o.default,
      !0
    ) : n = Er(o.from || a) : n = Er(o), Xe(n) ? Object.defineProperty(e, a, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    }) : e[a] = n;
  }
}
function Kd(t, e, r) {
  ir(
    pe(t) ? t.map((a) => a.bind(e.proxy)) : t.bind(e.proxy),
    e,
    r
  );
}
function Vp(t, e, r, a) {
  let o = a.includes(".") ? Gp(r, a) : () => r[a];
  if (Ye(t)) {
    const n = e[t];
    _e(n) && Ie(o, n);
  } else if (_e(t))
    Ie(o, t.bind(r));
  else if (Fe(t))
    if (pe(t))
      t.forEach((n) => Vp(n, e, r, a));
    else {
      const n = _e(t.handler) ? t.handler.bind(r) : e[t.handler];
      _e(n) && Ie(o, n, t);
    }
}
function ed(t) {
  const e = t.type, { mixins: r, extends: a } = e, {
    mixins: o,
    optionsCache: n,
    config: { optionMergeStrategies: i }
  } = t.appContext, s = n.get(e);
  let l;
  return s ? l = s : !o.length && !r && !a ? l = e : (l = {}, o.length && o.forEach(
    (d) => ii(l, d, i, !0)
  ), ii(l, e, i)), Fe(e) && n.set(e, l), l;
}
function ii(t, e, r, a = !1) {
  const { mixins: o, extends: n } = e;
  n && ii(t, n, r, !0), o && o.forEach(
    (i) => ii(t, i, r, !0)
  );
  for (const i in e)
    if (!(a && i === "expose")) {
      const s = Xg[i] || r && r[i];
      t[i] = s ? s(t[i], e[i]) : e[i];
    }
  return t;
}
const Xg = {
  data: Yd,
  props: Jd,
  emits: Jd,
  // objects
  methods: wo,
  computed: wo,
  // lifecycle
  beforeCreate: vt,
  created: vt,
  beforeMount: vt,
  mounted: vt,
  beforeUpdate: vt,
  updated: vt,
  beforeDestroy: vt,
  beforeUnmount: vt,
  destroyed: vt,
  unmounted: vt,
  activated: vt,
  deactivated: vt,
  errorCaptured: vt,
  serverPrefetch: vt,
  // assets
  components: wo,
  directives: wo,
  // watch
  watch: Zg,
  // provide / inject
  provide: Yd,
  inject: Gg
};
function Yd(t, e) {
  return e ? t ? function() {
    return Ue(
      _e(t) ? t.call(this, this) : t,
      _e(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Gg(t, e) {
  return wo(rl(t), rl(e));
}
function rl(t) {
  if (pe(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++)
      e[t[r]] = t[r];
    return e;
  }
  return t;
}
function vt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function wo(t, e) {
  return t ? Ue(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Jd(t, e) {
  return t ? pe(t) && pe(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ue(
    /* @__PURE__ */ Object.create(null),
    ni(t),
    ni(e ?? {})
  ) : e;
}
function Zg(t, e) {
  if (!t) return e;
  if (!e) return t;
  const r = Ue(/* @__PURE__ */ Object.create(null), t);
  for (const a in e)
    r[a] = vt(t[a], e[a]);
  return r;
}
function Rp() {
  return {
    app: null,
    config: {
      isNativeTag: Pm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Qg = 0;
function ev(t, e) {
  return function(a, o = null) {
    _e(a) || (a = Ue({}, a)), o != null && !Fe(o) && (o = null);
    const n = Rp(), i = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const d = n.app = {
      _uid: Qg++,
      _component: a,
      _props: o,
      _container: null,
      _context: n,
      _instance: null,
      version: zv,
      get config() {
        return n.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return i.has(c) || (c && _e(c.install) ? (i.add(c), c.install(d, ...u)) : _e(c) && (i.add(c), c(d, ...u))), d;
      },
      mixin(c) {
        return n.mixins.includes(c) || n.mixins.push(c), d;
      },
      component(c, u) {
        return u ? (n.components[c] = u, d) : n.components[c];
      },
      directive(c, u) {
        return u ? (n.directives[c] = u, d) : n.directives[c];
      },
      mount(c, u, p) {
        if (!l) {
          const h = d._ceVNode || ee(a, o);
          return h.appContext = n, p === !0 ? p = "svg" : p === !1 && (p = void 0), u && e ? e(h, c) : t(h, c, p), l = !0, d._container = c, c.__vue_app__ = d, Ji(h.component);
        }
      },
      onUnmount(c) {
        s.push(c);
      },
      unmount() {
        l && (ir(
          s,
          d._instance,
          16
        ), t(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, u) {
        return n.provides[c] = u, d;
      },
      runWithContext(c) {
        const u = va;
        va = d;
        try {
          return c();
        } finally {
          va = u;
        }
      }
    };
    return d;
  };
}
let va = null;
function al(t, e) {
  if (ot) {
    let r = ot.provides;
    const a = ot.parent && ot.parent.provides;
    a === r && (r = ot.provides = Object.create(a)), r[t] = e;
  }
}
function Er(t, e, r = !1) {
  const a = ot || et;
  if (a || va) {
    const o = va ? va._context.provides : a ? a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return r && _e(e) ? e.call(a && a.proxy) : e;
  }
}
function Dp() {
  return !!(ot || et || va);
}
const Lp = {}, Bp = () => Object.create(Lp), Fp = (t) => Object.getPrototypeOf(t) === Lp;
function tv(t, e, r, a = !1) {
  const o = {}, n = Bp();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Hp(t, e, o, n);
  for (const i in t.propsOptions[0])
    i in o || (o[i] = void 0);
  r ? t.props = a ? o : hg(o) : t.type.props ? t.props = o : t.props = n, t.attrs = n;
}
function rv(t, e, r, a) {
  const {
    props: o,
    attrs: n,
    vnode: { patchFlag: i }
  } = t, s = Ne(o), [l] = t.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = t.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let p = c[u];
        if (Ki(t.emitsOptions, p))
          continue;
        const h = e[p];
        if (l)
          if (Le(n, p))
            h !== n[p] && (n[p] = h, d = !0);
          else {
            const f = ut(p);
            o[f] = ol(
              l,
              s,
              f,
              h,
              t,
              !1
            );
          }
        else
          h !== n[p] && (n[p] = h, d = !0);
      }
    }
  } else {
    Hp(t, e, o, n) && (d = !0);
    let c;
    for (const u in s)
      (!e || // for camelCase
      !Le(e, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ct(u)) === u || !Le(e, c))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[c] !== void 0) && (o[u] = ol(
        l,
        s,
        u,
        void 0,
        t,
        !0
      )) : delete o[u]);
    if (n !== s)
      for (const u in n)
        (!e || !Le(e, u)) && (delete n[u], d = !0);
  }
  d && _r(t.attrs, "set", "");
}
function Hp(t, e, r, a) {
  const [o, n] = t.propsOptions;
  let i = !1, s;
  if (e)
    for (let l in e) {
      if (Oo(l))
        continue;
      const d = e[l];
      let c;
      o && Le(o, c = ut(l)) ? !n || !n.includes(c) ? r[c] = d : (s || (s = {}))[c] = d : Ki(t.emitsOptions, l) || (!(l in a) || d !== a[l]) && (a[l] = d, i = !0);
    }
  if (n) {
    const l = Ne(r), d = s || Pe;
    for (let c = 0; c < n.length; c++) {
      const u = n[c];
      r[u] = ol(
        o,
        l,
        u,
        d[u],
        t,
        !Le(d, u)
      );
    }
  }
  return i;
}
function ol(t, e, r, a, o, n) {
  const i = t[r];
  if (i != null) {
    const s = Le(i, "default");
    if (s && a === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && _e(l)) {
        const { propsDefaults: d } = o;
        if (r in d)
          a = d[r];
        else {
          const c = hn(o);
          a = d[r] = l.call(
            null,
            e
          ), c();
        }
      } else
        a = l;
      o.ce && o.ce._setProp(r, a);
    }
    i[
      0
      /* shouldCast */
    ] && (n && !s ? a = !1 : i[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Ct(r)) && (a = !0));
  }
  return a;
}
const av = /* @__PURE__ */ new WeakMap();
function qp(t, e, r = !1) {
  const a = r ? av : e.propsCache, o = a.get(t);
  if (o)
    return o;
  const n = t.props, i = {}, s = [];
  let l = !1;
  if (!_e(t)) {
    const c = (u) => {
      l = !0;
      const [p, h] = qp(u, e, !0);
      Ue(i, p), h && s.push(...h);
    };
    !r && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
  }
  if (!n && !l)
    return Fe(t) && a.set(t, Wa), Wa;
  if (pe(n))
    for (let c = 0; c < n.length; c++) {
      const u = ut(n[c]);
      Xd(u) && (i[u] = Pe);
    }
  else if (n)
    for (const c in n) {
      const u = ut(c);
      if (Xd(u)) {
        const p = n[c], h = i[u] = pe(p) || _e(p) ? { type: p } : Ue({}, p), f = h.type;
        let m = !1, v = !0;
        if (pe(f))
          for (let b = 0; b < f.length; ++b) {
            const k = f[b], $ = _e(k) && k.name;
            if ($ === "Boolean") {
              m = !0;
              break;
            } else $ === "String" && (v = !1);
          }
        else
          m = _e(f) && f.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = v, (m || Le(h, "default")) && s.push(u);
      }
    }
  const d = [i, s];
  return Fe(t) && a.set(t, d), d;
}
function Xd(t) {
  return t[0] !== "$" && !Oo(t);
}
const Up = (t) => t[0] === "_" || t === "$stable", td = (t) => pe(t) ? t.map(pr) : [pr(t)], ov = (t, e, r) => {
  if (e._n)
    return e;
  const a = G((...o) => td(e(...o)), r);
  return a._c = !1, a;
}, Wp = (t, e, r) => {
  const a = t._ctx;
  for (const o in t) {
    if (Up(o)) continue;
    const n = t[o];
    if (_e(n))
      e[o] = ov(o, n, a);
    else if (n != null) {
      const i = td(n);
      e[o] = () => i;
    }
  }
}, Kp = (t, e) => {
  const r = td(e);
  t.slots.default = () => r;
}, Yp = (t, e, r) => {
  for (const a in e)
    (r || a !== "_") && (t[a] = e[a]);
}, nv = (t, e, r) => {
  const a = t.slots = Bp();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (Yp(a, e, r), r && Zu(a, "_", o, !0)) : Wp(e, a);
  } else e && Kp(t, e);
}, iv = (t, e, r) => {
  const { vnode: a, slots: o } = t;
  let n = !0, i = Pe;
  if (a.shapeFlag & 32) {
    const s = e._;
    s ? r && s === 1 ? n = !1 : Yp(o, e, r) : (n = !e.$stable, Wp(e, o)), i = e;
  } else e && (Kp(t, e), i = { default: 1 });
  if (n)
    for (const s in o)
      !Up(s) && i[s] == null && delete o[s];
}, zt = xv;
function sv(t) {
  return lv(t);
}
function lv(t, e) {
  const r = Li();
  r.__VUE__ = !0;
  const {
    insert: a,
    remove: o,
    patchProp: n,
    createElement: i,
    createText: s,
    createComment: l,
    setText: d,
    setElementText: c,
    parentNode: u,
    nextSibling: p,
    setScopeId: h = vr,
    insertStaticContent: f
  } = t, m = (_, C, P, K = null, H = null, U = null, Q = void 0, Z = null, X = !!C.dynamicChildren) => {
    if (_ === C)
      return;
    _ && !ua(_, C) && (K = ue(_), Me(_, H, U, !0), _ = null), C.patchFlag === -2 && (X = !1, C.dynamicChildren = null);
    const { type: Y, ref: fe, shapeFlag: te } = C;
    switch (Y) {
      case Yi:
        v(_, C, P, K);
        break;
      case xt:
        b(_, C, P, K);
        break;
      case Fn:
        _ == null && k(C, P, K, Q);
        break;
      case ke:
        V(
          _,
          C,
          P,
          K,
          H,
          U,
          Q,
          Z,
          X
        );
        break;
      default:
        te & 1 ? w(
          _,
          C,
          P,
          K,
          H,
          U,
          Q,
          Z,
          X
        ) : te & 6 ? ae(
          _,
          C,
          P,
          K,
          H,
          U,
          Q,
          Z,
          X
        ) : (te & 64 || te & 128) && Y.process(
          _,
          C,
          P,
          K,
          H,
          U,
          Q,
          Z,
          X,
          Ge
        );
    }
    fe != null && H && Qs(fe, _ && _.ref, U, C || _, !C);
  }, v = (_, C, P, K) => {
    if (_ == null)
      a(
        C.el = s(C.children),
        P,
        K
      );
    else {
      const H = C.el = _.el;
      C.children !== _.children && d(H, C.children);
    }
  }, b = (_, C, P, K) => {
    _ == null ? a(
      C.el = l(C.children || ""),
      P,
      K
    ) : C.el = _.el;
  }, k = (_, C, P, K) => {
    [_.el, _.anchor] = f(
      _.children,
      C,
      P,
      K,
      _.el,
      _.anchor
    );
  }, $ = ({ el: _, anchor: C }, P, K) => {
    let H;
    for (; _ && _ !== C; )
      H = p(_), a(_, P, K), _ = H;
    a(C, P, K);
  }, g = ({ el: _, anchor: C }) => {
    let P;
    for (; _ && _ !== C; )
      P = p(_), o(_), _ = P;
    o(C);
  }, w = (_, C, P, K, H, U, Q, Z, X) => {
    C.type === "svg" ? Q = "svg" : C.type === "math" && (Q = "mathml"), _ == null ? x(
      C,
      P,
      K,
      H,
      U,
      Q,
      Z,
      X
    ) : T(
      _,
      C,
      H,
      U,
      Q,
      Z,
      X
    );
  }, x = (_, C, P, K, H, U, Q, Z) => {
    let X, Y;
    const { props: fe, shapeFlag: te, transition: de, dirs: ve } = _;
    if (X = _.el = i(
      _.type,
      U,
      fe && fe.is,
      fe
    ), te & 8 ? c(X, _.children) : te & 16 && M(
      _.children,
      X,
      null,
      K,
      H,
      vs(_, U),
      Q,
      Z
    ), ve && na(_, null, K, "created"), S(X, _, _.scopeId, Q, K), fe) {
      for (const Re in fe)
        Re !== "value" && !Oo(Re) && n(X, Re, null, fe[Re], U, K);
      "value" in fe && n(X, "value", null, fe.value, U), (Y = fe.onVnodeBeforeMount) && dr(Y, K, _);
    }
    ve && na(_, null, K, "beforeMount");
    const Ee = dv(H, de);
    Ee && de.beforeEnter(X), a(X, C, P), ((Y = fe && fe.onVnodeMounted) || Ee || ve) && zt(() => {
      Y && dr(Y, K, _), Ee && de.enter(X), ve && na(_, null, K, "mounted");
    }, H);
  }, S = (_, C, P, K, H) => {
    if (P && h(_, P), K)
      for (let U = 0; U < K.length; U++)
        h(_, K[U]);
    if (H) {
      let U = H.subTree;
      if (C === U || ef(U.type) && (U.ssContent === C || U.ssFallback === C)) {
        const Q = H.vnode;
        S(
          _,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          H.parent
        );
      }
    }
  }, M = (_, C, P, K, H, U, Q, Z, X = 0) => {
    for (let Y = X; Y < _.length; Y++) {
      const fe = _[Y] = Z ? Rr(_[Y]) : pr(_[Y]);
      m(
        null,
        fe,
        C,
        P,
        K,
        H,
        U,
        Q,
        Z
      );
    }
  }, T = (_, C, P, K, H, U, Q) => {
    const Z = C.el = _.el;
    let { patchFlag: X, dynamicChildren: Y, dirs: fe } = C;
    X |= _.patchFlag & 16;
    const te = _.props || Pe, de = C.props || Pe;
    let ve;
    if (P && ia(P, !1), (ve = de.onVnodeBeforeUpdate) && dr(ve, P, C, _), fe && na(C, _, P, "beforeUpdate"), P && ia(P, !0), (te.innerHTML && de.innerHTML == null || te.textContent && de.textContent == null) && c(Z, ""), Y ? I(
      _.dynamicChildren,
      Y,
      Z,
      P,
      K,
      vs(C, H),
      U
    ) : Q || ne(
      _,
      C,
      Z,
      null,
      P,
      K,
      vs(C, H),
      U,
      !1
    ), X > 0) {
      if (X & 16)
        L(Z, te, de, P, H);
      else if (X & 2 && te.class !== de.class && n(Z, "class", null, de.class, H), X & 4 && n(Z, "style", te.style, de.style, H), X & 8) {
        const Ee = C.dynamicProps;
        for (let Re = 0; Re < Ee.length; Re++) {
          const De = Ee[Re], ht = te[De], tt = de[De];
          (tt !== ht || De === "value") && n(Z, De, ht, tt, H, P);
        }
      }
      X & 1 && _.children !== C.children && c(Z, C.children);
    } else !Q && Y == null && L(Z, te, de, P, H);
    ((ve = de.onVnodeUpdated) || fe) && zt(() => {
      ve && dr(ve, P, C, _), fe && na(C, _, P, "updated");
    }, K);
  }, I = (_, C, P, K, H, U, Q) => {
    for (let Z = 0; Z < C.length; Z++) {
      const X = _[Z], Y = C[Z], fe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        X.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (X.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ua(X, Y) || // - In the case of a component, it could contain anything.
        X.shapeFlag & 70) ? u(X.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          P
        )
      );
      m(
        X,
        Y,
        fe,
        null,
        K,
        H,
        U,
        Q,
        !0
      );
    }
  }, L = (_, C, P, K, H) => {
    if (C !== P) {
      if (C !== Pe)
        for (const U in C)
          !Oo(U) && !(U in P) && n(
            _,
            U,
            C[U],
            null,
            H,
            K
          );
      for (const U in P) {
        if (Oo(U)) continue;
        const Q = P[U], Z = C[U];
        Q !== Z && U !== "value" && n(_, U, Z, Q, H, K);
      }
      "value" in P && n(_, "value", C.value, P.value, H);
    }
  }, V = (_, C, P, K, H, U, Q, Z, X) => {
    const Y = C.el = _ ? _.el : s(""), fe = C.anchor = _ ? _.anchor : s("");
    let { patchFlag: te, dynamicChildren: de, slotScopeIds: ve } = C;
    ve && (Z = Z ? Z.concat(ve) : ve), _ == null ? (a(Y, P, K), a(fe, P, K), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      P,
      fe,
      H,
      U,
      Q,
      Z,
      X
    )) : te > 0 && te & 64 && de && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (I(
      _.dynamicChildren,
      de,
      P,
      H,
      U,
      Q,
      Z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || H && C === H.subTree) && Jp(
      _,
      C,
      !0
      /* shallow */
    )) : ne(
      _,
      C,
      P,
      fe,
      H,
      U,
      Q,
      Z,
      X
    );
  }, ae = (_, C, P, K, H, U, Q, Z, X) => {
    C.slotScopeIds = Z, _ == null ? C.shapeFlag & 512 ? H.ctx.activate(
      C,
      P,
      K,
      Q,
      X
    ) : we(
      C,
      P,
      K,
      H,
      U,
      Q,
      X
    ) : Ce(_, C, X);
  }, we = (_, C, P, K, H, U, Q) => {
    const Z = _.component = Cv(
      _,
      K,
      H
    );
    if (qi(_) && (Z.ctx.renderer = Ge), Ov(Z, !1, Q), Z.asyncDep) {
      if (H && H.registerDep(Z, q, Q), !_.el) {
        const X = Z.subTree = ee(xt);
        b(null, X, C, P);
      }
    } else
      q(
        Z,
        _,
        C,
        P,
        H,
        U,
        Q
      );
  }, Ce = (_, C, P) => {
    const K = C.component = _.component;
    if (wv(_, C, P))
      if (K.asyncDep && !K.asyncResolved) {
        oe(K, C, P);
        return;
      } else
        K.next = C, K.update();
    else
      C.el = _.el, K.vnode = C;
  }, q = (_, C, P, K, H, U, Q) => {
    const Z = () => {
      if (_.isMounted) {
        let { next: te, bu: de, u: ve, parent: Ee, vnode: Re } = _;
        {
          const mt = Xp(_);
          if (mt) {
            te && (te.el = Re.el, oe(_, te, Q)), mt.asyncDep.then(() => {
              _.isUnmounted || Z();
            });
            return;
          }
        }
        let De = te, ht;
        ia(_, !1), te ? (te.el = Re.el, oe(_, te, Q)) : te = Re, de && Bn(de), (ht = te.props && te.props.onVnodeBeforeUpdate) && dr(ht, Ee, te, Re), ia(_, !0);
        const tt = bs(_), It = _.subTree;
        _.subTree = tt, m(
          It,
          tt,
          // parent may have changed if it's in a teleport
          u(It.el),
          // anchor may have changed if it's in a fragment
          ue(It),
          _,
          H,
          U
        ), te.el = tt.el, De === null && yv(_, tt.el), ve && zt(ve, H), (ht = te.props && te.props.onVnodeUpdated) && zt(
          () => dr(ht, Ee, te, Re),
          H
        );
      } else {
        let te;
        const { el: de, props: ve } = C, { bm: Ee, m: Re, parent: De, root: ht, type: tt } = _, It = Ja(C);
        if (ia(_, !1), Ee && Bn(Ee), !It && (te = ve && ve.onVnodeBeforeMount) && dr(te, De, C), ia(_, !0), de && aa) {
          const mt = () => {
            _.subTree = bs(_), aa(
              de,
              _.subTree,
              _,
              H,
              null
            );
          };
          It && tt.__asyncHydrate ? tt.__asyncHydrate(
            de,
            _,
            mt
          ) : mt();
        } else {
          ht.ce && ht.ce._injectChildStyle(tt);
          const mt = _.subTree = bs(_);
          m(
            null,
            mt,
            P,
            K,
            _,
            H,
            U
          ), C.el = mt.el;
        }
        if (Re && zt(Re, H), !It && (te = ve && ve.onVnodeMounted)) {
          const mt = C;
          zt(
            () => dr(te, De, mt),
            H
          );
        }
        (C.shapeFlag & 256 || De && Ja(De.vnode) && De.vnode.shapeFlag & 256) && _.a && zt(_.a, H), _.isMounted = !0, C = P = K = null;
      }
    };
    _.scope.on();
    const X = _.effect = new ap(Z);
    _.scope.off();
    const Y = _.update = X.run.bind(X), fe = _.job = X.runIfDirty.bind(X);
    fe.i = _, fe.id = _.uid, X.scheduler = () => Zl(fe), ia(_, !0), Y();
  }, oe = (_, C, P) => {
    C.component = _;
    const K = _.vnode.props;
    _.vnode = C, _.next = null, rv(_, C.props, K, P), iv(_, C.children, P), Kr(), qd(_), Yr();
  }, ne = (_, C, P, K, H, U, Q, Z, X = !1) => {
    const Y = _ && _.children, fe = _ ? _.shapeFlag : 0, te = C.children, { patchFlag: de, shapeFlag: ve } = C;
    if (de > 0) {
      if (de & 128) {
        ye(
          Y,
          te,
          P,
          K,
          H,
          U,
          Q,
          Z,
          X
        );
        return;
      } else if (de & 256) {
        Se(
          Y,
          te,
          P,
          K,
          H,
          U,
          Q,
          Z,
          X
        );
        return;
      }
    }
    ve & 8 ? (fe & 16 && he(Y, H, U), te !== Y && c(P, te)) : fe & 16 ? ve & 16 ? ye(
      Y,
      te,
      P,
      K,
      H,
      U,
      Q,
      Z,
      X
    ) : he(Y, H, U, !0) : (fe & 8 && c(P, ""), ve & 16 && M(
      te,
      P,
      K,
      H,
      U,
      Q,
      Z,
      X
    ));
  }, Se = (_, C, P, K, H, U, Q, Z, X) => {
    _ = _ || Wa, C = C || Wa;
    const Y = _.length, fe = C.length, te = Math.min(Y, fe);
    let de;
    for (de = 0; de < te; de++) {
      const ve = C[de] = X ? Rr(C[de]) : pr(C[de]);
      m(
        _[de],
        ve,
        P,
        null,
        H,
        U,
        Q,
        Z,
        X
      );
    }
    Y > fe ? he(
      _,
      H,
      U,
      !0,
      !1,
      te
    ) : M(
      C,
      P,
      K,
      H,
      U,
      Q,
      Z,
      X,
      te
    );
  }, ye = (_, C, P, K, H, U, Q, Z, X) => {
    let Y = 0;
    const fe = C.length;
    let te = _.length - 1, de = fe - 1;
    for (; Y <= te && Y <= de; ) {
      const ve = _[Y], Ee = C[Y] = X ? Rr(C[Y]) : pr(C[Y]);
      if (ua(ve, Ee))
        m(
          ve,
          Ee,
          P,
          null,
          H,
          U,
          Q,
          Z,
          X
        );
      else
        break;
      Y++;
    }
    for (; Y <= te && Y <= de; ) {
      const ve = _[te], Ee = C[de] = X ? Rr(C[de]) : pr(C[de]);
      if (ua(ve, Ee))
        m(
          ve,
          Ee,
          P,
          null,
          H,
          U,
          Q,
          Z,
          X
        );
      else
        break;
      te--, de--;
    }
    if (Y > te) {
      if (Y <= de) {
        const ve = de + 1, Ee = ve < fe ? C[ve].el : K;
        for (; Y <= de; )
          m(
            null,
            C[Y] = X ? Rr(C[Y]) : pr(C[Y]),
            P,
            Ee,
            H,
            U,
            Q,
            Z,
            X
          ), Y++;
      }
    } else if (Y > de)
      for (; Y <= te; )
        Me(_[Y], H, U, !0), Y++;
    else {
      const ve = Y, Ee = Y, Re = /* @__PURE__ */ new Map();
      for (Y = Ee; Y <= de; Y++) {
        const ce = C[Y] = X ? Rr(C[Y]) : pr(C[Y]);
        ce.key != null && Re.set(ce.key, Y);
      }
      let De, ht = 0;
      const tt = de - Ee + 1;
      let It = !1, mt = 0;
      const j = new Array(tt);
      for (Y = 0; Y < tt; Y++) j[Y] = 0;
      for (Y = ve; Y <= te; Y++) {
        const ce = _[Y];
        if (ht >= tt) {
          Me(ce, H, U, !0);
          continue;
        }
        let Oe;
        if (ce.key != null)
          Oe = Re.get(ce.key);
        else
          for (De = Ee; De <= de; De++)
            if (j[De - Ee] === 0 && ua(ce, C[De])) {
              Oe = De;
              break;
            }
        Oe === void 0 ? Me(ce, H, U, !0) : (j[Oe - Ee] = Y + 1, Oe >= mt ? mt = Oe : It = !0, m(
          ce,
          C[Oe],
          P,
          null,
          H,
          U,
          Q,
          Z,
          X
        ), ht++);
      }
      const se = It ? cv(j) : Wa;
      for (De = se.length - 1, Y = tt - 1; Y >= 0; Y--) {
        const ce = Ee + Y, Oe = C[ce], Te = ce + 1 < fe ? C[ce + 1].el : K;
        j[Y] === 0 ? m(
          null,
          Oe,
          P,
          Te,
          H,
          U,
          Q,
          Z,
          X
        ) : It && (De < 0 || Y !== se[De] ? ze(Oe, P, Te, 2) : De--);
      }
    }
  }, ze = (_, C, P, K, H = null) => {
    const { el: U, type: Q, transition: Z, children: X, shapeFlag: Y } = _;
    if (Y & 6) {
      ze(_.component.subTree, C, P, K);
      return;
    }
    if (Y & 128) {
      _.suspense.move(C, P, K);
      return;
    }
    if (Y & 64) {
      Q.move(_, C, P, Ge);
      return;
    }
    if (Q === ke) {
      a(U, C, P);
      for (let te = 0; te < X.length; te++)
        ze(X[te], C, P, K);
      a(_.anchor, C, P);
      return;
    }
    if (Q === Fn) {
      $(_, C, P);
      return;
    }
    if (K !== 2 && Y & 1 && Z)
      if (K === 0)
        Z.beforeEnter(U), a(U, C, P), zt(() => Z.enter(U), H);
      else {
        const { leave: te, delayLeave: de, afterLeave: ve } = Z, Ee = () => a(U, C, P), Re = () => {
          te(U, () => {
            Ee(), ve && ve();
          });
        };
        de ? de(U, Ee, Re) : Re();
      }
    else
      a(U, C, P);
  }, Me = (_, C, P, K = !1, H = !1) => {
    const {
      type: U,
      props: Q,
      ref: Z,
      children: X,
      dynamicChildren: Y,
      shapeFlag: fe,
      patchFlag: te,
      dirs: de,
      cacheIndex: ve
    } = _;
    if (te === -2 && (H = !1), Z != null && Qs(Z, null, P, _, !0), ve != null && (C.renderCache[ve] = void 0), fe & 256) {
      C.ctx.deactivate(_);
      return;
    }
    const Ee = fe & 1 && de, Re = !Ja(_);
    let De;
    if (Re && (De = Q && Q.onVnodeBeforeUnmount) && dr(De, C, _), fe & 6)
      N(_.component, P, K);
    else {
      if (fe & 128) {
        _.suspense.unmount(P, K);
        return;
      }
      Ee && na(_, null, C, "beforeUnmount"), fe & 64 ? _.type.remove(
        _,
        C,
        P,
        Ge,
        K
      ) : Y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== ke || te > 0 && te & 64) ? he(
        Y,
        C,
        P,
        !1,
        !0
      ) : (U === ke && te & 384 || !H && fe & 16) && he(X, C, P), K && O(_);
    }
    (Re && (De = Q && Q.onVnodeUnmounted) || Ee) && zt(() => {
      De && dr(De, C, _), Ee && na(_, null, C, "unmounted");
    }, P);
  }, O = (_) => {
    const { type: C, el: P, anchor: K, transition: H } = _;
    if (C === ke) {
      R(P, K);
      return;
    }
    if (C === Fn) {
      g(_);
      return;
    }
    const U = () => {
      o(P), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (_.shapeFlag & 1 && H && !H.persisted) {
      const { leave: Q, delayLeave: Z } = H, X = () => Q(P, U);
      Z ? Z(_.el, U, X) : X();
    } else
      U();
  }, R = (_, C) => {
    let P;
    for (; _ !== C; )
      P = p(_), o(_), _ = P;
    o(C);
  }, N = (_, C, P) => {
    const { bum: K, scope: H, job: U, subTree: Q, um: Z, m: X, a: Y } = _;
    Gd(X), Gd(Y), K && Bn(K), H.stop(), U && (U.flags |= 8, Me(Q, _, C, P)), Z && zt(Z, C), zt(() => {
      _.isUnmounted = !0;
    }, C), C && C.pendingBranch && !C.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve());
  }, he = (_, C, P, K = !1, H = !1, U = 0) => {
    for (let Q = U; Q < _.length; Q++)
      Me(_[Q], C, P, K, H);
  }, ue = (_) => {
    if (_.shapeFlag & 6)
      return ue(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const C = p(_.anchor || _.el), P = C && C[Tg];
    return P ? p(P) : C;
  };
  let He = !1;
  const Be = (_, C, P) => {
    _ == null ? C._vnode && Me(C._vnode, null, null, !0) : m(
      C._vnode || null,
      _,
      C,
      null,
      null,
      null,
      P
    ), C._vnode = _, He || (He = !0, qd(), $p(), He = !1);
  }, Ge = {
    p: m,
    um: Me,
    m: ze,
    r: O,
    mt: we,
    mc: M,
    pc: ne,
    pbc: I,
    n: ue,
    o: t
  };
  let Lt, aa;
  return {
    render: Be,
    hydrate: Lt,
    createApp: ev(Be, Lt)
  };
}
function vs({ type: t, props: e }, r) {
  return r === "svg" && t === "foreignObject" || r === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : r;
}
function ia({ effect: t, job: e }, r) {
  r ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function dv(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Jp(t, e, r = !1) {
  const a = t.children, o = e.children;
  if (pe(a) && pe(o))
    for (let n = 0; n < a.length; n++) {
      const i = a[n];
      let s = o[n];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = o[n] = Rr(o[n]), s.el = i.el), !r && s.patchFlag !== -2 && Jp(i, s)), s.type === Yi && (s.el = i.el);
    }
}
function cv(t) {
  const e = t.slice(), r = [0];
  let a, o, n, i, s;
  const l = t.length;
  for (a = 0; a < l; a++) {
    const d = t[a];
    if (d !== 0) {
      if (o = r[r.length - 1], t[o] < d) {
        e[a] = o, r.push(a);
        continue;
      }
      for (n = 0, i = r.length - 1; n < i; )
        s = n + i >> 1, t[r[s]] < d ? n = s + 1 : i = s;
      d < t[r[n]] && (n > 0 && (e[a] = r[n - 1]), r[n] = a);
    }
  }
  for (n = r.length, i = r[n - 1]; n-- > 0; )
    r[n] = i, i = e[i];
  return r;
}
function Xp(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Xp(e);
}
function Gd(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
const uv = Symbol.for("v-scx"), pv = () => Er(uv);
function Wi(t, e) {
  return pn(t, null, e);
}
function fv(t, e) {
  return pn(
    t,
    null,
    { flush: "post" }
  );
}
function hv(t, e) {
  return pn(
    t,
    null,
    { flush: "sync" }
  );
}
function Ie(t, e, r) {
  return pn(t, e, r);
}
function pn(t, e, r = Pe) {
  const { immediate: a, deep: o, flush: n, once: i } = r, s = Ue({}, r), l = e && a || !e && n !== "post";
  let d;
  if (Jo) {
    if (n === "sync") {
      const h = pv();
      d = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = vr, h.resume = vr, h.pause = vr, h;
    }
  }
  const c = ot;
  s.call = (h, f, m) => ir(h, c, f, m);
  let u = !1;
  n === "post" ? s.scheduler = (h) => {
    zt(h, c && c.suspense);
  } : n !== "sync" && (u = !0, s.scheduler = (h, f) => {
    f ? h() : Zl(h);
  }), s.augmentJob = (h) => {
    e && (h.flags |= 4), u && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const p = Cg(t, e, s);
  return Jo && (d ? d.push(p) : l && p()), p;
}
function mv(t, e, r) {
  const a = this.proxy, o = Ye(t) ? t.includes(".") ? Gp(a, t) : () => a[t] : t.bind(a, a);
  let n;
  _e(e) ? n = e : (n = e.handler, r = e);
  const i = hn(this), s = pn(o, n.bind(a), r);
  return i(), s;
}
function Gp(t, e) {
  const r = e.split(".");
  return () => {
    let a = t;
    for (let o = 0; o < r.length && a; o++)
      a = a[r[o]];
    return a;
  };
}
function Ma(t, e, r = Pe) {
  const a = zr(), o = ut(e), n = Ct(e), i = Zp(t, o), s = wg((l, d) => {
    let c, u = Pe, p;
    return hv(() => {
      const h = t[o];
      St(c, h) && (c = h, d());
    }), {
      get() {
        return l(), r.get ? r.get(c) : c;
      },
      set(h) {
        const f = r.set ? r.set(h) : h;
        if (!St(f, c) && !(u !== Pe && St(h, u)))
          return;
        const m = a.vnode.props;
        m && // check if parent has passed v-model
        (e in m || o in m || n in m) && (`onUpdate:${e}` in m || `onUpdate:${o}` in m || `onUpdate:${n}` in m) || (c = h, d()), a.emit(`update:${e}`, f), St(h, f) && St(h, u) && !St(f, p) && d(), u = h, p = f;
      }
    };
  });
  return s[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || Pe : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
const Zp = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${ut(e)}Modifiers`] || t[`${Ct(e)}Modifiers`];
function gv(t, e, ...r) {
  if (t.isUnmounted) return;
  const a = t.vnode.props || Pe;
  let o = r;
  const n = e.startsWith("update:"), i = n && Zp(a, e.slice(7));
  i && (i.trim && (o = r.map((c) => Ye(c) ? c.trim() : c)), i.number && (o = r.map(ei)));
  let s, l = a[s = cs(e)] || // also try camelCase event handler (#2249)
  a[s = cs(ut(e))];
  !l && n && (l = a[s = cs(Ct(e))]), l && ir(
    l,
    t,
    6,
    o
  );
  const d = a[s + "Once"];
  if (d) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[s])
      return;
    t.emitted[s] = !0, ir(
      d,
      t,
      6,
      o
    );
  }
}
function Qp(t, e, r = !1) {
  const a = e.emitsCache, o = a.get(t);
  if (o !== void 0)
    return o;
  const n = t.emits;
  let i = {}, s = !1;
  if (!_e(t)) {
    const l = (d) => {
      const c = Qp(d, e, !0);
      c && (s = !0, Ue(i, c));
    };
    !r && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !n && !s ? (Fe(t) && a.set(t, null), null) : (pe(n) ? n.forEach((l) => i[l] = null) : Ue(i, n), Fe(t) && a.set(t, i), i);
}
function Ki(t, e) {
  return !t || !ji(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Le(t, e[0].toLowerCase() + e.slice(1)) || Le(t, Ct(e)) || Le(t, e));
}
function bs(t) {
  const {
    type: e,
    vnode: r,
    proxy: a,
    withProxy: o,
    propsOptions: [n],
    slots: i,
    attrs: s,
    emit: l,
    render: d,
    renderCache: c,
    props: u,
    data: p,
    setupState: h,
    ctx: f,
    inheritAttrs: m
  } = t, v = oi(t);
  let b, k;
  try {
    if (r.shapeFlag & 4) {
      const g = o || a, w = g;
      b = pr(
        d.call(
          w,
          g,
          c,
          u,
          h,
          p,
          f
        )
      ), k = s;
    } else {
      const g = e;
      b = pr(
        g.length > 1 ? g(
          u,
          { attrs: s, slots: i, emit: l }
        ) : g(
          u,
          null
        )
      ), k = e.props ? s : vv(s);
    }
  } catch (g) {
    Io.length = 0, Hi(g, t, 1), b = ee(xt);
  }
  let $ = b;
  if (k && m !== !1) {
    const g = Object.keys(k), { shapeFlag: w } = $;
    g.length && w & 7 && (n && g.some(Fl) && (k = bv(
      k,
      n
    )), $ = Ur($, k, !1, !0));
  }
  return r.dirs && ($ = Ur($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(r.dirs) : r.dirs), r.transition && Wo($, r.transition), b = $, oi(v), b;
}
const vv = (t) => {
  let e;
  for (const r in t)
    (r === "class" || r === "style" || ji(r)) && ((e || (e = {}))[r] = t[r]);
  return e;
}, bv = (t, e) => {
  const r = {};
  for (const a in t)
    (!Fl(a) || !(a.slice(9) in e)) && (r[a] = t[a]);
  return r;
};
function wv(t, e, r) {
  const { props: a, children: o, component: n } = t, { props: i, children: s, patchFlag: l } = e, d = n.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return a ? Zd(a, i, d) : !!i;
    if (l & 8) {
      const c = e.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (i[p] !== a[p] && !Ki(d, p))
          return !0;
      }
    }
  } else
    return (o || s) && (!s || !s.$stable) ? !0 : a === i ? !1 : a ? i ? Zd(a, i, d) : !0 : !!i;
  return !1;
}
function Zd(t, e, r) {
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < a.length; o++) {
    const n = a[o];
    if (e[n] !== t[n] && !Ki(r, n))
      return !0;
  }
  return !1;
}
function yv({ vnode: t, parent: e }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.el = t.el), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
}
const ef = (t) => t.__isSuspense;
function xv(t, e) {
  e && e.pendingBranch ? pe(t) ? e.effects.push(...t) : e.effects.push(t) : Mg(t);
}
const ke = Symbol.for("v-fgt"), Yi = Symbol.for("v-txt"), xt = Symbol.for("v-cmt"), Fn = Symbol.for("v-stc"), Io = [];
let Vt = null;
function y(t = !1) {
  Io.push(Vt = t ? null : []);
}
function kv() {
  Io.pop(), Vt = Io[Io.length - 1] || null;
}
let Ko = 1;
function Qd(t) {
  Ko += t, t < 0 && Vt && (Vt.hasOnce = !0);
}
function tf(t) {
  return t.dynamicChildren = Ko > 0 ? Vt || Wa : null, kv(), Ko > 0 && Vt && Vt.push(t), t;
}
function E(t, e, r, a, o, n) {
  return tf(
    z(
      t,
      e,
      r,
      a,
      o,
      n,
      !0
    )
  );
}
function W(t, e, r, a, o) {
  return tf(
    ee(
      t,
      e,
      r,
      a,
      o,
      !0
    )
  );
}
function Yo(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ua(t, e) {
  return t.type === e.type && t.key === e.key;
}
const rf = ({ key: t }) => t ?? null, Hn = ({
  ref: t,
  ref_key: e,
  ref_for: r
}) => (typeof t == "number" && (t = "" + t), t != null ? Ye(t) || Xe(t) || _e(t) ? { i: et, r: t, k: e, f: !!r } : t : null);
function z(t, e = null, r = null, a = 0, o = null, n = t === ke ? 0 : 1, i = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && rf(e),
    ref: e && Hn(e),
    scopeId: Sp,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: n,
    patchFlag: a,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: et
  };
  return s ? (rd(l, r), n & 128 && t.normalize(l)) : r && (l.shapeFlag |= Ye(r) ? 8 : 16), Ko > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Vt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Vt.push(l), l;
}
const ee = $v;
function $v(t, e = null, r = null, a = 0, o = null, n = !1) {
  if ((!t || t === Np) && (t = xt), Yo(t)) {
    const s = Ur(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return r && rd(s, r), Ko > 0 && !n && Vt && (s.shapeFlag & 6 ? Vt[Vt.indexOf(t)] = s : Vt.push(s)), s.patchFlag = -2, s;
  }
  if (Av(t) && (t = t.__vccOpts), e) {
    e = fn(e);
    let { class: s, style: l } = e;
    s && !Ye(s) && (e.class = be(s)), Fe(l) && (Gl(l) && !pe(l) && (l = Ue({}, l)), e.style = Jt(l));
  }
  const i = Ye(t) ? 1 : ef(t) ? 128 : Cp(t) ? 64 : Fe(t) ? 4 : _e(t) ? 2 : 0;
  return z(
    t,
    e,
    r,
    a,
    o,
    i,
    n,
    !0
  );
}
function fn(t) {
  return t ? Gl(t) || Fp(t) ? Ue({}, t) : t : null;
}
function Ur(t, e, r = !1, a = !1) {
  const { props: o, ref: n, patchFlag: i, children: s, transition: l } = t, d = e ? We(o || {}, e) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: d,
    key: d && rf(d),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && n ? pe(n) ? n.concat(Hn(e)) : [n, Hn(e)] : Hn(e)
    ) : n,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: s,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== ke ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ur(t.ssContent),
    ssFallback: t.ssFallback && Ur(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && a && Wo(
    c,
    l.clone(c)
  ), c;
}
function je(t = " ", e = 0) {
  return ee(Yi, null, t, e);
}
function F(t = "", e = !1) {
  return e ? (y(), W(xt, null, t)) : ee(xt, null, t);
}
function pr(t) {
  return t == null || typeof t == "boolean" ? ee(xt) : pe(t) ? ee(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Yo(t) ? Rr(t) : ee(Yi, null, String(t));
}
function Rr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ur(t);
}
function rd(t, e) {
  let r = 0;
  const { shapeFlag: a } = t;
  if (e == null)
    e = null;
  else if (pe(e))
    r = 16;
  else if (typeof e == "object")
    if (a & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), rd(t, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = e._;
      !o && !Fp(e) ? e._ctx = et : o === 3 && et && (et.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else _e(e) ? (e = { default: e, _ctx: et }, r = 32) : (e = String(e), a & 64 ? (r = 16, e = [je(e)]) : r = 8);
  t.children = e, t.shapeFlag |= r;
}
function We(...t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    for (const o in a)
      if (o === "class")
        e.class !== a.class && (e.class = be([e.class, a.class]));
      else if (o === "style")
        e.style = Jt([e.style, a.style]);
      else if (ji(o)) {
        const n = e[o], i = a[o];
        i && n !== i && !(pe(n) && n.includes(i)) && (e[o] = n ? [].concat(n, i) : i);
      } else o !== "" && (e[o] = a[o]);
  }
  return e;
}
function dr(t, e, r, a = null) {
  ir(t, e, 7, [
    r,
    a
  ]);
}
const _v = Rp();
let Sv = 0;
function Cv(t, e, r) {
  const a = t.type, o = (e ? e.appContext : t.appContext) || _v, n = {
    uid: Sv++,
    vnode: t,
    type: a,
    parent: e,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Km(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(o.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: qp(a, o),
    emitsOptions: Qp(a, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pe,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: Pe,
    data: Pe,
    props: Pe,
    attrs: Pe,
    slots: Pe,
    refs: Pe,
    setupState: Pe,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return n.ctx = { _: n }, n.root = e ? e.root : n, n.emit = gv.bind(null, n), t.ce && t.ce(n), n;
}
let ot = null;
const zr = () => ot || et;
let si, nl;
{
  const t = Li(), e = (r, a) => {
    let o;
    return (o = t[r]) || (o = t[r] = []), o.push(a), (n) => {
      o.length > 1 ? o.forEach((i) => i(n)) : o[0](n);
    };
  };
  si = e(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ot = r
  ), nl = e(
    "__VUE_SSR_SETTERS__",
    (r) => Jo = r
  );
}
const hn = (t) => {
  const e = ot;
  return si(t), t.scope.on(), () => {
    t.scope.off(), si(e);
  };
}, ec = () => {
  ot && ot.scope.off(), si(null);
};
function af(t) {
  return t.vnode.shapeFlag & 4;
}
let Jo = !1;
function Ov(t, e = !1, r = !1) {
  e && nl(e);
  const { props: a, children: o } = t.vnode, n = af(t);
  tv(t, a, n, e), nv(t, o, r);
  const i = n ? Ev(t, e) : void 0;
  return e && nl(!1), i;
}
function Ev(t, e) {
  const r = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Wg);
  const { setup: a } = r;
  if (a) {
    Kr();
    const o = t.setupContext = a.length > 1 ? nf(t) : null, n = hn(t), i = cn(
      a,
      t,
      0,
      [
        t.props,
        o
      ]
    ), s = Xu(i);
    if (Yr(), n(), (s || t.sp) && !Ja(t) && Ip(t), s) {
      if (i.then(ec, ec), e)
        return i.then((l) => {
          tc(t, l, e);
        }).catch((l) => {
          Hi(l, t, 0);
        });
      t.asyncDep = i;
    } else
      tc(t, i, e);
  } else
    of(t, e);
}
function tc(t, e, r) {
  _e(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Fe(e) && (t.setupState = yp(e)), of(t, r);
}
let rc;
function of(t, e, r) {
  const a = t.type;
  if (!t.render) {
    if (!e && rc && !a.render) {
      const o = a.template || ed(t).template;
      if (o) {
        const { isCustomElement: n, compilerOptions: i } = t.appContext.config, { delimiters: s, compilerOptions: l } = a, d = Ue(
          Ue(
            {
              isCustomElement: n,
              delimiters: s
            },
            i
          ),
          l
        );
        a.render = rc(o, d);
      }
    }
    t.render = a.render || vr;
  }
  {
    const o = hn(t);
    Kr();
    try {
      Yg(t);
    } finally {
      Yr(), o();
    }
  }
}
const Mv = {
  get(t, e) {
    return lt(t, "get", ""), t[e];
  }
};
function nf(t) {
  const e = (r) => {
    t.exposed = r || {};
  };
  return {
    attrs: new Proxy(t.attrs, Mv),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Ji(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(yp(mg(t.exposed)), {
    get(e, r) {
      if (r in e)
        return e[r];
      if (r in Ao)
        return Ao[r](t);
    },
    has(e, r) {
      return r in e || r in Ao;
    }
  })) : t.proxy;
}
function Tv(t, e = !0) {
  return _e(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Av(t) {
  return _e(t) && "__vccOpts" in t;
}
const B = (t, e) => _g(t, e, Jo);
function Iv(t, e, r) {
  const a = arguments.length;
  return a === 2 ? Fe(e) && !pe(e) ? Yo(e) ? ee(t, null, [e]) : ee(t, e) : ee(t, null, e) : (a > 3 ? r = Array.prototype.slice.call(arguments, 2) : a === 3 && Yo(r) && (r = [r]), ee(t, e, r));
}
const zv = "3.5.12";
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let il;
const ac = typeof window < "u" && window.trustedTypes;
if (ac)
  try {
    il = /* @__PURE__ */ ac.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const sf = il ? (t) => il.createHTML(t) : (t) => t, Nv = "http://www.w3.org/2000/svg", Pv = "http://www.w3.org/1998/Math/MathML", $r = typeof document < "u" ? document : null, oc = $r && /* @__PURE__ */ $r.createElement("template"), jv = {
  insert: (t, e, r) => {
    e.insertBefore(t, r || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, r, a) => {
    const o = e === "svg" ? $r.createElementNS(Nv, t) : e === "mathml" ? $r.createElementNS(Pv, t) : r ? $r.createElement(t, { is: r }) : $r.createElement(t);
    return t === "select" && a && a.multiple != null && o.setAttribute("multiple", a.multiple), o;
  },
  createText: (t) => $r.createTextNode(t),
  createComment: (t) => $r.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => $r.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, r, a, o, n) {
    const i = r ? r.previousSibling : e.lastChild;
    if (o && (o === n || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), r), !(o === n || !(o = o.nextSibling)); )
        ;
    else {
      oc.innerHTML = sf(
        a === "svg" ? `<svg>${t}</svg>` : a === "mathml" ? `<math>${t}</math>` : t
      );
      const s = oc.content;
      if (a === "svg" || a === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      e.insertBefore(s, r);
    }
    return [
      // first
      i ? i.nextSibling : e.firstChild,
      // last
      r ? r.previousSibling : e.lastChild
    ];
  }
}, Nr = "transition", ho = "animation", Xo = Symbol("_vtc"), lf = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Vv = /* @__PURE__ */ Ue(
  {},
  Op,
  lf
), Rv = (t) => (t.displayName = "Transition", t.props = Vv, t), Go = /* @__PURE__ */ Rv(
  (t, { slots: e }) => Iv(zg, Dv(t), e)
), sa = (t, e = []) => {
  pe(t) ? t.forEach((r) => r(...e)) : t && t(...e);
}, nc = (t) => t ? pe(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function Dv(t) {
  const e = {};
  for (const V in t)
    V in lf || (e[V] = t[V]);
  if (t.css === !1)
    return e;
  const {
    name: r = "v",
    type: a,
    duration: o,
    enterFromClass: n = `${r}-enter-from`,
    enterActiveClass: i = `${r}-enter-active`,
    enterToClass: s = `${r}-enter-to`,
    appearFromClass: l = n,
    appearActiveClass: d = i,
    appearToClass: c = s,
    leaveFromClass: u = `${r}-leave-from`,
    leaveActiveClass: p = `${r}-leave-active`,
    leaveToClass: h = `${r}-leave-to`
  } = t, f = Lv(o), m = f && f[0], v = f && f[1], {
    onBeforeEnter: b,
    onEnter: k,
    onEnterCancelled: $,
    onLeave: g,
    onLeaveCancelled: w,
    onBeforeAppear: x = b,
    onAppear: S = k,
    onAppearCancelled: M = $
  } = e, T = (V, ae, we) => {
    la(V, ae ? c : s), la(V, ae ? d : i), we && we();
  }, I = (V, ae) => {
    V._isLeaving = !1, la(V, u), la(V, h), la(V, p), ae && ae();
  }, L = (V) => (ae, we) => {
    const Ce = V ? S : k, q = () => T(ae, V, we);
    sa(Ce, [ae, q]), ic(() => {
      la(ae, V ? l : n), Pr(ae, V ? c : s), nc(Ce) || sc(ae, a, m, q);
    });
  };
  return Ue(e, {
    onBeforeEnter(V) {
      sa(b, [V]), Pr(V, n), Pr(V, i);
    },
    onBeforeAppear(V) {
      sa(x, [V]), Pr(V, l), Pr(V, d);
    },
    onEnter: L(!1),
    onAppear: L(!0),
    onLeave(V, ae) {
      V._isLeaving = !0;
      const we = () => I(V, ae);
      Pr(V, u), Pr(V, p), Hv(), ic(() => {
        V._isLeaving && (la(V, u), Pr(V, h), nc(g) || sc(V, a, v, we));
      }), sa(g, [V, we]);
    },
    onEnterCancelled(V) {
      T(V, !1), sa($, [V]);
    },
    onAppearCancelled(V) {
      T(V, !0), sa(M, [V]);
    },
    onLeaveCancelled(V) {
      I(V), sa(w, [V]);
    }
  });
}
function Lv(t) {
  if (t == null)
    return null;
  if (Fe(t))
    return [ws(t.enter), ws(t.leave)];
  {
    const e = ws(t);
    return [e, e];
  }
}
function ws(t) {
  return Ks(t);
}
function Pr(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.add(r)), (t[Xo] || (t[Xo] = /* @__PURE__ */ new Set())).add(e);
}
function la(t, e) {
  e.split(/\s+/).forEach((a) => a && t.classList.remove(a));
  const r = t[Xo];
  r && (r.delete(e), r.size || (t[Xo] = void 0));
}
function ic(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Bv = 0;
function sc(t, e, r, a) {
  const o = t._endId = ++Bv, n = () => {
    o === t._endId && a();
  };
  if (r != null)
    return setTimeout(n, r);
  const { type: i, timeout: s, propCount: l } = Fv(t, e);
  if (!i)
    return a();
  const d = i + "end";
  let c = 0;
  const u = () => {
    t.removeEventListener(d, p), n();
  }, p = (h) => {
    h.target === t && ++c >= l && u();
  };
  setTimeout(() => {
    c < l && u();
  }, s + 1), t.addEventListener(d, p);
}
function Fv(t, e) {
  const r = window.getComputedStyle(t), a = (f) => (r[f] || "").split(", "), o = a(`${Nr}Delay`), n = a(`${Nr}Duration`), i = lc(o, n), s = a(`${ho}Delay`), l = a(`${ho}Duration`), d = lc(s, l);
  let c = null, u = 0, p = 0;
  e === Nr ? i > 0 && (c = Nr, u = i, p = n.length) : e === ho ? d > 0 && (c = ho, u = d, p = l.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? Nr : ho : null, p = c ? c === Nr ? n.length : l.length : 0);
  const h = c === Nr && /\b(transform|all)(,|$)/.test(
    a(`${Nr}Property`).toString()
  );
  return {
    type: c,
    timeout: u,
    propCount: p,
    hasTransform: h
  };
}
function lc(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((r, a) => dc(r) + dc(t[a])));
}
function dc(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function Hv() {
  return document.body.offsetHeight;
}
function qv(t, e, r) {
  const a = t[Xo];
  a && (e = (e ? [e, ...a] : [...a]).join(" ")), e == null ? t.removeAttribute("class") : r ? t.setAttribute("class", e) : t.className = e;
}
const li = Symbol("_vod"), df = Symbol("_vsh"), Xi = {
  beforeMount(t, { value: e }, { transition: r }) {
    t[li] = t.style.display === "none" ? "" : t.style.display, r && e ? r.beforeEnter(t) : mo(t, e);
  },
  mounted(t, { value: e }, { transition: r }) {
    r && e && r.enter(t);
  },
  updated(t, { value: e, oldValue: r }, { transition: a }) {
    !e != !r && (a ? e ? (a.beforeEnter(t), mo(t, !0), a.enter(t)) : a.leave(t, () => {
      mo(t, !1);
    }) : mo(t, e));
  },
  beforeUnmount(t, { value: e }) {
    mo(t, e);
  }
};
function mo(t, e) {
  t.style.display = e ? t[li] : "none", t[df] = !e;
}
const cf = Symbol("");
function uf(t) {
  const e = zr();
  if (!e)
    return;
  const r = e.ut = (o = t(e.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
    ).forEach((n) => di(n, o));
  }, a = () => {
    const o = t(e.proxy);
    e.ce ? di(e.ce, o) : sl(e.subTree, o), r(o);
  };
  Ql(() => {
    fv(a);
  }), _t(() => {
    const o = new MutationObserver(a);
    o.observe(e.subTree.el.parentNode, { childList: !0 }), un(() => o.disconnect());
  });
}
function sl(t, e) {
  if (t.shapeFlag & 128) {
    const r = t.suspense;
    t = r.activeBranch, r.pendingBranch && !r.isHydrating && r.effects.push(() => {
      sl(r.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    di(t.el, e);
  else if (t.type === ke)
    t.children.forEach((r) => sl(r, e));
  else if (t.type === Fn) {
    let { el: r, anchor: a } = t;
    for (; r && (di(r, e), r !== a); )
      r = r.nextSibling;
  }
}
function di(t, e) {
  if (t.nodeType === 1) {
    const r = t.style;
    let a = "";
    for (const o in e)
      r.setProperty(`--${o}`, e[o]), a += `--${o}: ${e[o]};`;
    r[cf] = a;
  }
}
const Uv = /(^|;)\s*display\s*:/;
function Wv(t, e, r) {
  const a = t.style, o = Ye(r);
  let n = !1;
  if (r && !o) {
    if (e)
      if (Ye(e))
        for (const i of e.split(";")) {
          const s = i.slice(0, i.indexOf(":")).trim();
          r[s] == null && qn(a, s, "");
        }
      else
        for (const i in e)
          r[i] == null && qn(a, i, "");
    for (const i in r)
      i === "display" && (n = !0), qn(a, i, r[i]);
  } else if (o) {
    if (e !== r) {
      const i = a[cf];
      i && (r += ";" + i), a.cssText = r, n = Uv.test(r);
    }
  } else e && t.removeAttribute("style");
  li in t && (t[li] = n ? a.display : "", t[df] && (a.display = "none"));
}
const cc = /\s*!important$/;
function qn(t, e, r) {
  if (pe(r))
    r.forEach((a) => qn(t, e, a));
  else if (r == null && (r = ""), e.startsWith("--"))
    t.setProperty(e, r);
  else {
    const a = Kv(t, e);
    cc.test(r) ? t.setProperty(
      Ct(a),
      r.replace(cc, ""),
      "important"
    ) : t[a] = r;
  }
}
const uc = ["Webkit", "Moz", "ms"], ys = {};
function Kv(t, e) {
  const r = ys[e];
  if (r)
    return r;
  let a = ut(e);
  if (a !== "filter" && a in t)
    return ys[e] = a;
  a = Di(a);
  for (let o = 0; o < uc.length; o++) {
    const n = uc[o] + a;
    if (n in t)
      return ys[e] = n;
  }
  return e;
}
const pc = "http://www.w3.org/1999/xlink";
function fc(t, e, r, a, o, n = Um(e)) {
  a && e.startsWith("xlink:") ? r == null ? t.removeAttributeNS(pc, e.slice(6, e.length)) : t.setAttributeNS(pc, e, r) : r == null || n && !Qu(r) ? t.removeAttribute(e) : t.setAttribute(
    e,
    n ? "" : nr(r) ? String(r) : r
  );
}
function hc(t, e, r, a, o) {
  if (e === "innerHTML" || e === "textContent") {
    r != null && (t[e] = e === "innerHTML" ? sf(r) : r);
    return;
  }
  const n = t.tagName;
  if (e === "value" && n !== "PROGRESS" && // custom elements may use _value internally
  !n.includes("-")) {
    const s = n === "OPTION" ? t.getAttribute("value") || "" : t.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(r);
    (s !== l || !("_value" in t)) && (t.value = l), r == null && t.removeAttribute(e), t._value = r;
    return;
  }
  let i = !1;
  if (r === "" || r == null) {
    const s = typeof t[e];
    s === "boolean" ? r = Qu(r) : r == null && s === "string" ? (r = "", i = !0) : s === "number" && (r = 0, i = !0);
  }
  try {
    t[e] = r;
  } catch {
  }
  i && t.removeAttribute(o || e);
}
function Cr(t, e, r, a) {
  t.addEventListener(e, r, a);
}
function Yv(t, e, r, a) {
  t.removeEventListener(e, r, a);
}
const mc = Symbol("_vei");
function Jv(t, e, r, a, o = null) {
  const n = t[mc] || (t[mc] = {}), i = n[e];
  if (a && i)
    i.value = a;
  else {
    const [s, l] = Xv(e);
    if (a) {
      const d = n[e] = Qv(
        a,
        o
      );
      Cr(t, s, d, l);
    } else i && (Yv(t, s, i, l), n[e] = void 0);
  }
}
const gc = /(?:Once|Passive|Capture)$/;
function Xv(t) {
  let e;
  if (gc.test(t)) {
    e = {};
    let a;
    for (; a = t.match(gc); )
      t = t.slice(0, t.length - a[0].length), e[a[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Ct(t.slice(2)), e];
}
let xs = 0;
const Gv = /* @__PURE__ */ Promise.resolve(), Zv = () => xs || (Gv.then(() => xs = 0), xs = Date.now());
function Qv(t, e) {
  const r = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= r.attached)
      return;
    ir(
      e0(a, r.value),
      e,
      5,
      [a]
    );
  };
  return r.value = t, r.attached = Zv(), r;
}
function e0(t, e) {
  if (pe(e)) {
    const r = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      r.call(t), t._stopped = !0;
    }, e.map(
      (a) => (o) => !o._stopped && a && a(o)
    );
  } else
    return e;
}
const vc = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, t0 = (t, e, r, a, o, n) => {
  const i = o === "svg";
  e === "class" ? qv(t, a, i) : e === "style" ? Wv(t, r, a) : ji(e) ? Fl(e) || Jv(t, e, r, a, n) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : r0(t, e, a, i)) ? (hc(t, e, a), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && fc(t, e, a, i, n, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(e) || !Ye(a)) ? hc(t, ut(e), a, n, e) : (e === "true-value" ? t._trueValue = a : e === "false-value" && (t._falseValue = a), fc(t, e, a, i));
};
function r0(t, e, r, a) {
  if (a)
    return !!(e === "innerHTML" || e === "textContent" || e in t && vc(e) && _e(r));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return vc(e) && Ye(r) ? !1 : e in t;
}
const bc = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function a0(t, e, r) {
  const a = /* @__PURE__ */ Ng(t, e);
  Vi(a) && Ue(a, e);
  class o extends ad {
    constructor(i) {
      super(a, i, r);
    }
  }
  return o.def = a, o;
}
const o0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ad extends o0 {
  constructor(e, r = {}, a = $c) {
    super(), this._def = e, this._props = r, this._createApp = a, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && a !== $c ? this._root = this.shadowRoot : e.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && (e.parentNode || e.host); )
      if (e instanceof ad) {
        this._parent = e;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._instance.provides = e._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, At(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let a = 0; a < this.attributes.length; a++)
      this._setAttr(this.attributes[a].name);
    this._ob = new MutationObserver((a) => {
      for (const o of a)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const e = (a, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: n, styles: i } = a;
      let s;
      if (n && !pe(n))
        for (const l in n) {
          const d = n[l];
          (d === Number || d && d.type === Number) && (l in this._props && (this._props[l] = Ks(this._props[l])), (s || (s = /* @__PURE__ */ Object.create(null)))[ut(l)] = !0);
        }
      this._numberProps = s, o && this._resolveProps(a), this.shadowRoot && this._applyStyles(i), this._mount(a);
    }, r = this._def.__asyncLoader;
    r ? this._pendingResolve = r().then(
      (a) => e(this._def = a, !0)
    ) : e(this._def);
  }
  _mount(e) {
    this._app = this._createApp(e), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const r = this._instance && this._instance.exposed;
    if (r)
      for (const a in r)
        Le(this, a) || Object.defineProperty(this, a, {
          // unwrap ref to be consistent with public instance behavior
          get: () => A(r[a])
        });
  }
  _resolveProps(e) {
    const { props: r } = e, a = pe(r) ? r : Object.keys(r || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && a.includes(o) && this._setProp(o, this[o]);
    for (const o of a.map(ut))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(n) {
          this._setProp(o, n, !0, !0);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const r = this.hasAttribute(e);
    let a = r ? this.getAttribute(e) : bc;
    const o = ut(e);
    r && this._numberProps && this._numberProps[o] && (a = Ks(a)), this._setProp(o, a, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, r, a = !0, o = !1) {
    r !== this._props[e] && (r === bc ? delete this._props[e] : (this._props[e] = r, e === "key" && this._app && (this._app._ceVNode.key = r)), o && this._instance && this._update(), a && (r === !0 ? this.setAttribute(Ct(e), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(Ct(e), r + "") : r || this.removeAttribute(Ct(e))));
  }
  _update() {
    h0(this._createVNode(), this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const r = ee(this._def, Ue(e, this._props));
    return this._instance || (r.ce = (a) => {
      this._instance = a, a.ce = this, a.isCE = !0;
      const o = (n, i) => {
        this.dispatchEvent(
          new CustomEvent(
            n,
            Vi(i[0]) ? Ue({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      a.emit = (n, ...i) => {
        o(n, i), Ct(n) !== n && o(Ct(n), i);
      }, this._setParent();
    }), r;
  }
  _applyStyles(e, r) {
    if (!e) return;
    if (r) {
      if (r === this._def || this._styleChildren.has(r))
        return;
      this._styleChildren.add(r);
    }
    const a = this._nonce;
    for (let o = e.length - 1; o >= 0; o--) {
      const n = document.createElement("style");
      a && n.setAttribute("nonce", a), n.textContent = e[o], this.shadowRoot.prepend(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let r;
    for (; r = this.firstChild; ) {
      const a = r.nodeType === 1 && r.getAttribute("slot") || "default";
      (e[a] || (e[a] = [])).push(r), this.removeChild(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = (this._teleportTarget || this).querySelectorAll("slot"), r = this._instance.type.__scopeId;
    for (let a = 0; a < e.length; a++) {
      const o = e[a], n = o.getAttribute("name") || "default", i = this._slots[n], s = o.parentNode;
      if (i)
        for (const l of i) {
          if (r && l.nodeType === 1) {
            const d = r + "-s", c = document.createTreeWalker(l, 1);
            l.setAttribute(d, "");
            let u;
            for (; u = c.nextNode(); )
              u.setAttribute(d, "");
          }
          s.insertBefore(l, o);
        }
      else
        for (; o.firstChild; ) s.insertBefore(o.firstChild, o);
      s.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(e) {
    this._applyStyles(e.styles, e);
  }
  /**
   * @internal
   */
  _removeChildStyle(e) {
  }
}
const Wr = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return pe(e) ? (r) => Bn(e, r) : e;
};
function n0(t) {
  t.target.composing = !0;
}
function wc(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Wt = Symbol("_assign"), ci = {
  created(t, { modifiers: { lazy: e, trim: r, number: a } }, o) {
    t[Wt] = Wr(o);
    const n = a || o.props && o.props.type === "number";
    Cr(t, e ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let s = t.value;
      r && (s = s.trim()), n && (s = ei(s)), t[Wt](s);
    }), r && Cr(t, "change", () => {
      t.value = t.value.trim();
    }), e || (Cr(t, "compositionstart", n0), Cr(t, "compositionend", wc), Cr(t, "change", wc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: r, modifiers: { lazy: a, trim: o, number: n } }, i) {
    if (t[Wt] = Wr(i), t.composing) return;
    const s = (n || t.type === "number") && !/^0\d/.test(t.value) ? ei(t.value) : t.value, l = e ?? "";
    s !== l && (document.activeElement === t && t.type !== "range" && (a && e === r || o && t.value.trim() === l) || (t.value = l));
  }
}, pf = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, r) {
    t[Wt] = Wr(r), Cr(t, "change", () => {
      const a = t._modelValue, o = eo(t), n = t.checked, i = t[Wt];
      if (pe(a)) {
        const s = Ul(a, o), l = s !== -1;
        if (n && !l)
          i(a.concat(o));
        else if (!n && l) {
          const d = [...a];
          d.splice(s, 1), i(d);
        }
      } else if (co(a)) {
        const s = new Set(a);
        n ? s.add(o) : s.delete(o), i(s);
      } else
        i(ff(t, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: yc,
  beforeUpdate(t, e, r) {
    t[Wt] = Wr(r), yc(t, e, r);
  }
};
function yc(t, { value: e, oldValue: r }, a) {
  t._modelValue = e;
  let o;
  if (pe(e))
    o = Ul(e, a.props.value) > -1;
  else if (co(e))
    o = e.has(a.props.value);
  else {
    if (e === r) return;
    o = Oa(e, ff(t, !0));
  }
  t.checked !== o && (t.checked = o);
}
const i0 = {
  created(t, { value: e }, r) {
    t.checked = Oa(e, r.props.value), t[Wt] = Wr(r), Cr(t, "change", () => {
      t[Wt](eo(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: r }, a) {
    t[Wt] = Wr(a), e !== r && (t.checked = Oa(e, a.props.value));
  }
}, s0 = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: r } }, a) {
    const o = co(e);
    Cr(t, "change", () => {
      const n = Array.prototype.filter.call(t.options, (i) => i.selected).map(
        (i) => r ? ei(eo(i)) : eo(i)
      );
      t[Wt](
        t.multiple ? o ? new Set(n) : n : n[0]
      ), t._assigning = !0, At(() => {
        t._assigning = !1;
      });
    }), t[Wt] = Wr(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e }) {
    xc(t, e);
  },
  beforeUpdate(t, e, r) {
    t[Wt] = Wr(r);
  },
  updated(t, { value: e }) {
    t._assigning || xc(t, e);
  }
};
function xc(t, e) {
  const r = t.multiple, a = pe(e);
  if (!(r && !a && !co(e))) {
    for (let o = 0, n = t.options.length; o < n; o++) {
      const i = t.options[o], s = eo(i);
      if (r)
        if (a) {
          const l = typeof s;
          l === "string" || l === "number" ? i.selected = e.some((d) => String(d) === String(s)) : i.selected = Ul(e, s) > -1;
        } else
          i.selected = e.has(s);
      else if (Oa(eo(i), e)) {
        t.selectedIndex !== o && (t.selectedIndex = o);
        return;
      }
    }
    !r && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function eo(t) {
  return "_value" in t ? t._value : t.value;
}
function ff(t, e) {
  const r = e ? "_trueValue" : "_falseValue";
  return r in t ? t[r] : e;
}
const l0 = {
  created(t, e, r) {
    Tn(t, e, r, null, "created");
  },
  mounted(t, e, r) {
    Tn(t, e, r, null, "mounted");
  },
  beforeUpdate(t, e, r, a) {
    Tn(t, e, r, a, "beforeUpdate");
  },
  updated(t, e, r, a) {
    Tn(t, e, r, a, "updated");
  }
};
function d0(t, e) {
  switch (t) {
    case "SELECT":
      return s0;
    case "TEXTAREA":
      return ci;
    default:
      switch (e) {
        case "checkbox":
          return pf;
        case "radio":
          return i0;
        default:
          return ci;
      }
  }
}
function Tn(t, e, r, a, o) {
  const i = d0(
    t.tagName,
    r.props && r.props.type
  )[o];
  i && i(t, e, r, a);
}
const c0 = ["ctrl", "shift", "alt", "meta"], u0 = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => c0.some((r) => t[`${r}Key`] && !e.includes(r))
}, Kt = (t, e) => {
  const r = t._withMods || (t._withMods = {}), a = e.join(".");
  return r[a] || (r[a] = (o, ...n) => {
    for (let i = 0; i < e.length; i++) {
      const s = u0[e[i]];
      if (s && s(o, e)) return;
    }
    return t(o, ...n);
  });
}, p0 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Et = (t, e) => {
  const r = t._withKeys || (t._withKeys = {}), a = e.join(".");
  return r[a] || (r[a] = (o) => {
    if (!("key" in o))
      return;
    const n = Ct(o.key);
    if (e.some(
      (i) => i === n || p0[i] === n
    ))
      return t(o);
  });
}, f0 = /* @__PURE__ */ Ue({ patchProp: t0 }, jv);
let kc;
function hf() {
  return kc || (kc = sv(f0));
}
const h0 = (...t) => {
  hf().render(...t);
}, $c = (...t) => {
  const e = hf().createApp(...t), { mount: r } = e;
  return e.mount = (a) => {
    const o = g0(a);
    if (!o) return;
    const n = e._component;
    !_e(n) && !n.render && !n.template && (n.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = r(o, !1, m0(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, e;
};
function m0(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function g0(t) {
  return Ye(t) ? document.querySelector(t) : t;
}
function v0(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
const ge = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [a, o] of e)
    r[a] = o;
  return r;
}, b0 = { class: "icon" }, w0 = {
  __name: "PIcon",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(t) {
    return (e, r) => (y(), E("i", b0, [
      (y(), W(Ea(t.icon)))
    ]));
  }
}, Xt = /* @__PURE__ */ ge(w0, [["__scopeId", "data-v-cb714ba6"]]);
function od(t) {
  return rp() ? (Ym(t), !0) : !1;
}
const ks = /* @__PURE__ */ new WeakMap(), y0 = (...t) => {
  var e;
  const r = t[0], a = (e = zr()) == null ? void 0 : e.proxy;
  if (a == null && !Dp())
    throw new Error("injectLocal must be called in setup");
  return a && ks.has(a) && r in ks.get(a) ? ks.get(a)[r] : Er(...t);
}, mf = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const x0 = (t) => t != null, k0 = Object.prototype.toString, $0 = (t) => k0.call(t) === "[object Object]", zo = () => {
}, _0 = /* @__PURE__ */ S0();
function S0() {
  var t, e;
  return mf && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function _c(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function C0(t) {
  return zr();
}
function Un(t) {
  return Array.isArray(t) ? t : [t];
}
function O0(t, e = !0, r) {
  C0() ? _t(t, r) : e ? t() : At(t);
}
function E0(t, e, r) {
  return Ie(
    t,
    e,
    {
      ...r,
      immediate: !0
    }
  );
}
const Xr = mf ? window : void 0;
function fa(t) {
  var e;
  const r = Ut(t);
  return (e = r == null ? void 0 : r.$el) != null ? e : r;
}
function Ot(...t) {
  const e = [], r = () => {
    e.forEach((s) => s()), e.length = 0;
  }, a = (s, l, d, c) => (s.addEventListener(l, d, c), () => s.removeEventListener(l, d, c)), o = B(() => {
    const s = Un(Ut(t[0])).filter((l) => l != null);
    return s.every((l) => typeof l != "string") ? s : void 0;
  }), n = E0(
    () => {
      var s, l;
      return [
        (l = (s = o.value) == null ? void 0 : s.map((d) => fa(d))) != null ? l : [Xr].filter((d) => d != null),
        Un(Ut(o.value ? t[1] : t[0])),
        Un(A(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ut(o.value ? t[3] : t[2])
      ];
    },
    ([s, l, d, c]) => {
      if (r(), !(s != null && s.length) || !(l != null && l.length) || !(d != null && d.length))
        return;
      const u = $0(c) ? { ...c } : c;
      e.push(
        ...s.flatMap(
          (p) => l.flatMap(
            (h) => d.map((f) => a(p, h, f, u))
          )
        )
      );
    },
    { flush: "post" }
  ), i = () => {
    n(), r();
  };
  return od(r), i;
}
let Sc = !1;
function M0(t, e, r = {}) {
  const { window: a = Xr, ignore: o = [], capture: n = !0, detectIframe: i = !1 } = r;
  if (!a)
    return zo;
  if (_0 && !Sc) {
    Sc = !0;
    const f = { passive: !0 };
    Array.from(a.document.body.children).forEach((m) => Ot(m, "click", zo, f)), Ot(a.document.documentElement, "click", zo, f);
  }
  let s = !0;
  const l = (f) => Ut(o).some((m) => {
    if (typeof m == "string")
      return Array.from(a.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = fa(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  });
  function d(f) {
    const m = Ut(f);
    return m && m.$.subTree.shapeFlag === 16;
  }
  function c(f, m) {
    const v = Ut(f), b = v.$.subTree && v.$.subTree.children;
    return b == null || !Array.isArray(b) ? !1 : b.some((k) => k.el === m.target || m.composedPath().includes(k.el));
  }
  const u = (f) => {
    const m = fa(t);
    if (f.target != null && !(!(m instanceof Element) && d(t) && c(t, f)) && !(!m || m === f.target || f.composedPath().includes(m))) {
      if (f.detail === 0 && (s = !l(f)), !s) {
        s = !0;
        return;
      }
      e(f);
    }
  };
  let p = !1;
  const h = [
    Ot(a, "click", (f) => {
      p || (p = !0, setTimeout(() => {
        p = !1;
      }, 0), u(f));
    }, { passive: !0, capture: n }),
    Ot(a, "pointerdown", (f) => {
      const m = fa(t);
      s = !l(f) && !!(m && !f.composedPath().includes(m));
    }, { passive: !0 }),
    i && Ot(a, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = fa(t);
        ((m = a.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(a.document.activeElement)) && e(f);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean);
  return () => h.forEach((f) => f());
}
function T0() {
  const t = D(!1), e = zr();
  return e && _t(() => {
    t.value = !0;
  }, e), t;
}
function gf(t) {
  const e = T0();
  return B(() => (e.value, !!t()));
}
function A0(t, e, r = {}) {
  const { window: a = Xr, ...o } = r;
  let n;
  const i = gf(() => a && "MutationObserver" in a), s = () => {
    n && (n.disconnect(), n = void 0);
  }, l = B(() => {
    const p = Ut(t), h = Un(p).map(fa).filter(x0);
    return new Set(h);
  }), d = Ie(
    () => l.value,
    (p) => {
      s(), i.value && p.size && (n = new MutationObserver(e), p.forEach((h) => n.observe(h, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => n == null ? void 0 : n.takeRecords(), u = () => {
    d(), s();
  };
  return od(u), {
    isSupported: i,
    stop: u,
    takeRecords: c
  };
}
function I0(t, e, r = {}) {
  const {
    window: a = Xr,
    document: o = a == null ? void 0 : a.document,
    flush: n = "sync"
  } = r;
  if (!a || !o)
    return zo;
  let i;
  const s = (c) => {
    i == null || i(), i = c;
  }, l = Wi(() => {
    const c = fa(t);
    if (c) {
      const { stop: u } = A0(
        o,
        (p) => {
          p.map((h) => [...h.removedNodes]).flat().some((h) => h === c || h.contains(c)) && e(p);
        },
        {
          window: a,
          childList: !0,
          subtree: !0
        }
      );
      s(u);
    }
  }, { flush: n }), d = () => {
    l(), s();
  };
  return od(d), d;
}
function z0(t = {}) {
  var e;
  const {
    window: r = Xr,
    deep: a = !0,
    triggerOnRemoval: o = !1
  } = t, n = (e = t.document) != null ? e : r == null ? void 0 : r.document, i = () => {
    var d;
    let c = n == null ? void 0 : n.activeElement;
    if (a)
      for (; c != null && c.shadowRoot; )
        c = (d = c == null ? void 0 : c.shadowRoot) == null ? void 0 : d.activeElement;
    return c;
  }, s = D(), l = () => {
    s.value = i();
  };
  if (r) {
    const d = {
      capture: !0,
      passive: !0
    };
    Ot(
      r,
      "blur",
      (c) => {
        c.relatedTarget === null && l();
      },
      d
    ), Ot(
      r,
      "focus",
      l,
      d
    );
  }
  return o && I0(s, l, { document: n }), l(), s;
}
const N0 = Symbol("vueuse-ssr-width");
function P0() {
  const t = Dp() ? y0(N0, null) : null;
  return typeof t == "number" ? t : void 0;
}
function j0(t, e = {}) {
  const { window: r = Xr, ssrWidth: a = P0() } = e, o = gf(() => r && "matchMedia" in r && typeof r.matchMedia == "function"), n = D(typeof a == "number"), i = bp(), s = D(!1), l = (d) => {
    s.value = d.matches;
  };
  return Wi(() => {
    if (n.value) {
      n.value = !o.value;
      const d = Ut(t).split(",");
      s.value = d.some((c) => {
        const u = c.includes("not all"), p = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let f = !!(p || h);
        return p && f && (f = a >= _c(p[1])), h && f && (f = a <= _c(h[1])), u ? !f : f;
      });
      return;
    }
    o.value && (i.value = r.matchMedia(Ut(t)), s.value = i.value.matches);
  }), Ot(i, "change", l, { passive: !0 }), B(() => s.value);
}
const V0 = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function nd(t = {}) {
  const {
    reactive: e = !1,
    target: r = Xr,
    aliasMap: a = V0,
    passive: o = !0,
    onEventFired: n = zo
  } = t, i = Qe(/* @__PURE__ */ new Set()), s = {
    toJSON() {
      return {};
    },
    current: i
  }, l = e ? Qe(s) : s, d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  function u(m, v) {
    m in l && (e ? l[m] = v : l[m].value = v);
  }
  function p() {
    i.clear();
    for (const m of c)
      u(m, !1);
  }
  function h(m, v) {
    var b, k;
    const $ = (b = m.key) == null ? void 0 : b.toLowerCase(), g = [(k = m.code) == null ? void 0 : k.toLowerCase(), $].filter(Boolean);
    $ && (v ? i.add($) : i.delete($));
    for (const w of g)
      c.add(w), u(w, v);
    $ === "meta" && !v ? (d.forEach((w) => {
      i.delete(w), u(w, !1);
    }), d.clear()) : typeof m.getModifierState == "function" && m.getModifierState("Meta") && v && [...i, ...g].forEach((w) => d.add(w));
  }
  Ot(r, "keydown", (m) => (h(m, !0), n(m)), { passive: o }), Ot(r, "keyup", (m) => (h(m, !1), n(m)), { passive: o }), Ot("blur", p, { passive: o }), Ot("focus", p, { passive: o });
  const f = new Proxy(
    l,
    {
      get(m, v, b) {
        if (typeof v != "string")
          return Reflect.get(m, v, b);
        if (v = v.toLowerCase(), v in a && (v = a[v]), !(v in l))
          if (/[+_-]/.test(v)) {
            const $ = v.split(/[+_-]/g).map((g) => g.trim());
            l[v] = B(() => $.map((g) => Ut(f[g])).every(Boolean));
          } else
            l[v] = D(!1);
        const k = Reflect.get(m, v, b);
        return e ? Ut(k) : k;
      }
    }
  );
  return f;
}
function R0(t = {}) {
  const {
    window: e = Xr,
    initialWidth: r = Number.POSITIVE_INFINITY,
    initialHeight: a = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: n = !0,
    type: i = "inner"
  } = t, s = D(r), l = D(a), d = () => {
    if (e)
      if (i === "outer")
        s.value = e.outerWidth, l.value = e.outerHeight;
      else if (i === "visual" && e.visualViewport) {
        const { width: u, height: p, scale: h } = e.visualViewport;
        s.value = Math.round(u * h), l.value = Math.round(p * h);
      } else n ? (s.value = e.innerWidth, l.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, l.value = e.document.documentElement.clientHeight);
  };
  d(), O0(d);
  const c = { passive: !0 };
  if (Ot("resize", d, c), e && i === "visual" && e.visualViewport && Ot(e.visualViewport, "resize", d, c), o) {
    const u = j0("(orientation: portrait)");
    Ie(u, () => d());
  }
  return { width: s, height: l };
}
const D0 = { class: "mini-icon" }, L0 = {
  __name: "PIconMini",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(t) {
    return (e, r) => (y(), E("i", D0, [
      (y(), W(Ea(t.icon)))
    ]));
  }
}, ba = /* @__PURE__ */ ge(L0, [["__scopeId", "data-v-0cdb5710"]]), { width: tr, height: B0 } = R0();
function F0() {
  return {
    /** < 640px */
    isXs: B(() => tr.value < 640),
    /** 640px - 768px */
    isSm: B(() => tr.value >= 640 && tr.value < 768),
    /** 768px - 1024px */
    isMd: B(() => tr.value >= 768 && tr.value < 1024),
    /** 1024px - 1280px */
    isLg: B(() => tr.value >= 1024 && tr.value <= 1280),
    /** 1280px - 1536px */
    isXl: B(() => tr.value > 1280 && tr.value <= 1536),
    /** > 1536px */
    is2Xl: B(() => tr.value > 1536),
    width: B(() => tr.value),
    height: B(() => B0.value)
  };
}
const H0 = {
  __name: "PHotkey",
  props: {
    hotkey: {
      type: String,
      required: !0
    },
    variant: {
      type: String,
      default: "primary"
    },
    disabled: Boolean
  },
  setup(t) {
    const { isXs: e, isSm: r, isMd: a } = F0();
    return (o, n) => !A(e) && !A(r) && !A(a) ? (y(), E("div", {
      key: 0,
      class: be(["hotkey", [`${t.disabled ? "secondary" : t.variant}-hotkey`, { disabled: t.disabled }]])
    }, J(t.hotkey), 3)) : F("", !0);
  }
}, id = /* @__PURE__ */ ge(H0, [["__scopeId", "data-v-4516e1bf"]]), q0 = {
  __name: "PLoader",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  setup(t) {
    return (e, r) => (y(), E("div", {
      class: be(["loader", `${t.color}-loader ${t.size}-loader`])
    }, null, 2));
  }
}, mn = /* @__PURE__ */ ge(q0, [["__scopeId", "data-v-77423a82"]]), U0 = ["tabindex"], W0 = {
  __name: "PButton",
  props: {
    /** primary | secondary | tertiary */
    variant: {
      type: String,
      default: "primary"
    },
    /** small | default | medium | large */
    size: {
      type: String,
      default: "default"
    },
    /** Inline icons, values are the same as the icon component */
    icon: {
      type: [Function, Object],
      default: null
    },
    /** Shortcut, only shown > md */
    hotkey: {
      type: Object,
      default: () => ({
        key: "",
        callback: () => {
        }
      })
    },
    color: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = jp(), a = nd()[e.hotkey.key], o = B(() => e.variant === "secondary" || e.variant === "tertiary" ? e.variant : e.variant === "text" ? "secondary" : "primary");
    return Ie(a, (n) => {
      var i;
      n && (i = e.hotkey) != null && i.key && !e.loading && !e.disabled && e.hotkey.callback();
    }), (n, i) => (y(), E("button", {
      class: be(["button", [t.variant, t.size, t.color, A(r).default ? "" : "has-icon", t.loading ? "pointer-events-none" : ""]]),
      tabindex: t.loading ? -1 : 0
    }, [
      t.loading ? (y(), W(mn, {
        key: 0,
        color: ["danger", "success", "primary"].includes(t.variant) ? "secondary" : "primary",
        size: t.size
      }, null, 8, ["color", "size"])) : t.icon ? (y(), W(ba, {
        key: 1,
        icon: t.icon
      }, null, 8, ["icon"])) : F("", !0),
      le(n.$slots, "default", {}, void 0, !0),
      t.hotkey.key ? (y(), W(id, {
        key: 2,
        hotkey: t.hotkey.label,
        variant: o.value,
        disabled: n.disabled
      }, null, 8, ["hotkey", "variant", "disabled"])) : F("", !0)
    ], 10, U0));
  }
}, Je = /* @__PURE__ */ ge(W0, [["__scopeId", "data-v-9d769800"]]);
function sd(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
const K0 = { class: "micro-icon" }, Y0 = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(t) {
    return (e, r) => (y(), E("i", K0, [
      (y(), W(Ea(t.icon)))
    ]));
  }
}, Gi = /* @__PURE__ */ ge(Y0, [["__scopeId", "data-v-c54501b9"]]), J0 = {
  __name: "_ClickBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    floatingContainerEl: {
      type: HTMLElement,
      default: null
    },
    activatorEl: {
      type: HTMLElement,
      default: null
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D(null), n = D(!1);
    function i(d) {
      n.value || (a("set:activator", d), n.value = !0);
    }
    function s(d) {
      i(d.currentTarget), a(r.modelValue ? "close" : "open");
    }
    function l(d) {
      i(d.currentTarget);
    }
    return Ie(
      () => r.modelValue,
      (d) => {
        var c;
        d ? requestAnimationFrame(() => {
          o.value = M0(
            r.floatingContainerEl,
            () => {
              r.modelValue && a("close");
            },
            { ignore: [r.activatorEl] }
          );
        }) : ((c = o.value) == null || c.call(o), o.value = null);
      }
    ), (d, c) => le(d.$slots, "default", {
      slotProps: { onClick: s, onFocus: l }
    });
  }
}, X0 = {
  __name: "_FocusBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    isFocused: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(t, { emit: e }) {
    const r = t, a = e;
    function o(s) {
      a("set:activator", s.currentTarget), a("open");
    }
    function n() {
      r.modelValue || a("open");
    }
    function i() {
      r.modelValue || a("open");
    }
    return Ie(
      () => r.isFocused,
      (s) => {
        s || a("close");
      }
    ), (s, l) => le(s.$slots, "default", {
      slotProps: { onFocus: o, onInput: n, onClick: i }
    });
  }
}, G0 = {
  __name: "_HoverBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    floatingContainerEl: {
      type: HTMLElement,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D(!1), n = D(!1), i = D(!1), s = D(null);
    function l() {
      i.value = !0;
    }
    function d() {
      i.value = !1, c();
    }
    function c() {
      o.value || (n.value = !1, clearTimeout(s.value), s.value = setTimeout(() => {
        var f, m;
        n.value || i.value || ((f = r.floatingContainerEl) == null || f.removeEventListener("mouseover", l), (m = r.floatingContainerEl) == null || m.removeEventListener("mouseleave", d), a("close"));
      }, 200));
    }
    function u(f) {
      clearTimeout(s.value), n.value = !0, !r.modelValue && (a("set:activator", f.currentTarget), a("open"), s.value = setTimeout(() => {
        At(() => {
          r.floatingContainerEl.addEventListener("mouseover", l), r.floatingContainerEl.addEventListener("mouseleave", d);
        });
      }, r.delay));
    }
    function p(f) {
      f.target.matches(":focus-visible") && (o.value = !0, a("set:activator", f.currentTarget), a("open"));
    }
    function h() {
      o.value = !1, a("close");
    }
    return Ie(
      () => r.modelValue,
      () => {
        r.modelValue || (o.value = !1);
      }
    ), (f, m) => le(f.$slots, "default", {
      slotProps: { onMouseover: u, onMouseleave: c, onFocus: p, onBlur: h }
    });
  }
}, Z0 = {
  __name: "_ManualBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(t, { emit: e }) {
    const r = t, a = e;
    function o(l) {
      a("set:activator", l);
    }
    function n() {
      a("open");
    }
    function i() {
      a("close");
    }
    function s() {
      if (r.modelValue) {
        i();
        return;
      }
      n();
    }
    return (l, d) => le(l.$slots, "default", {
      slotProps: { setActivator: o, toggle: s }
    });
  }
}, Q0 = {};
function eb(t, e) {
  return y(), W(Go, { name: "NO_TRANSITION" }, {
    default: G(() => [
      le(t.$slots, "default")
    ]),
    _: 3
  });
}
const Cc = /* @__PURE__ */ ge(Q0, [["render", eb]]), tb = {};
function rb(t, e) {
  return y(), W(Go, null, {
    default: G(() => [
      le(t.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const ab = /* @__PURE__ */ ge(tb, [["render", rb], ["__scopeId", "data-v-ed45de91"]]), ob = {
  __name: "_ExpandTransition",
  props: {
    placement: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, r) => (y(), W(Go, {
      name: `expand-${t.placement}`
    }, {
      default: G(() => [
        le(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, nb = /* @__PURE__ */ ge(ob, [["__scopeId", "data-v-c3a8c779"]]), ib = {
  __name: "_StaticBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    floatingContainerEl: {
      type: HTMLElement,
      default: null
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(t, { emit: e }) {
    const r = e;
    return r("open"), Jr(() => {
      r("close");
    }), (a, o) => le(a.$slots, "default");
  }
};
function Xa(t, e = !1) {
  if (!t)
    return [];
  const r = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${e ? "" : ':not([tabindex="-1"])'}:not([disabled])`).join(", ");
  return [...t.querySelectorAll(r)];
}
const sb = {
  top: ["bottom", "right", "left"],
  right: ["left", "top", "bottom"],
  left: ["right", "top", "bottom"],
  bottom: ["top", "right", "left"]
}, Oc = {
  top: {
    center: ["left", "right"],
    left: ["right", "center"],
    right: ["left", "center"]
  },
  right: {
    center: ["top", "bottom"],
    top: ["bottom", "center"],
    bottom: ["top", "center"]
  },
  left: {
    center: ["top", "bottom"],
    top: ["bottom", "center"],
    bottom: ["top", "center"]
  },
  bottom: {
    center: ["left", "right"],
    left: ["right", "center"],
    right: ["left", "center"]
  }
};
async function lb(t, e, r, a, o, n, i = null) {
  await At();
  const { offsetWidth: s, offsetHeight: l } = t;
  let d = e;
  o && (d = o instanceof HTMLElement ? o : document.querySelector(o));
  const c = i ? 0 : d.offsetHeight, u = i ? 0 : d.offsetWidth, p = i ? {
    left: i.clientX,
    top: i.clientY
  } : d.getBoundingClientRect();
  let h = 0;
  i || (h = a ? s : Math.max(p.width, s));
  function f(I) {
    switch (I) {
      case "left":
        return p.left;
      case "right":
        return p.left + u - s;
      default:
        return p.left + (u - h) / 2;
    }
  }
  function m(I) {
    let L = window.scrollY + p.top;
    switch (I) {
      case "top":
        break;
      case "bottom":
        L -= l - c;
        break;
      default:
        l > c ? L -= (l - c) / 2 : L += (c - l) / 2;
    }
    return L;
  }
  function v(I) {
    const L = window.scrollY + p.top + c + n, V = f(I);
    return { top: L, left: V };
  }
  function b(I) {
    const L = window.scrollY + p.top - l - n, V = f(I);
    return { top: L, left: V };
  }
  function k(I) {
    const L = m(I), V = p.left + u + n;
    return { top: L, left: V };
  }
  function $(I) {
    const L = m(I), V = p.left - h - n;
    return { top: L, left: V };
  }
  function g(I, L) {
    let V;
    switch (I) {
      case "top":
        V = b(L);
        break;
      case "right":
        V = k(L);
        break;
      case "left":
        V = $(L);
        break;
      default:
        V = v(L);
        break;
    }
    return V;
  }
  const [w, x] = r.replaceAll(" ", "").split(",");
  let S = g(w, x || "center");
  function M(I, L) {
    const { scrollTop: V } = document.documentElement, { scrollLeft: ae } = document.documentElement;
    return I >= V && L >= ae && L + h <= ae + (window.innerWidth || document.documentElement.clientWidth) && I + l <= V + (window.innerHeight || document.documentElement.clientHeight);
  }
  let T = M(S.top, S.left);
  if (T)
    return { placement: w, alignment: x, ...S };
  for (const I of Oc[w][x || "center"])
    if (S = g(w, I), T = M(S.top, S.left), T)
      return { placement: w, alignment: I, ...S };
  for (const I of sb[w]) {
    if (S = g(I, x || "center"), T = M(S.top, S.left), T)
      return { placement: I, alignment: x, ...S };
    for (const L of Object.keys(Oc[I]))
      if (S = g(I, L), T = M(S.top, S.left), T)
        return { placement: I, alignment: L, ...S };
  }
  return S = g(w, x), { placement: w, alignment: x, ...S };
}
function db(t, e, r, a, o) {
  return {
    calculatePosition: (n, i = null) => lb(n, t, e, r, a, o, i)
  };
}
const cb = {
  key: 1,
  class: "floating-container-overlay-container"
}, ub = { class: "floating-container-overlay" }, pb = {
  __name: "PFloatingContainer",
  props: {
    /** Behavior of the menu activator; whether it opens on `click`, `focus`, `static` or `hover` */
    behavior: {
      type: String,
      default: "click"
    },
    /**
     *  Specifies the anchor point of the component; can be `left`, `right`, `top` or `bottom` (default)
     *  With the "," separator you can also configure the alignment of the menu, e.g. `top,left` or `top,right`
     */
    location: {
      type: String,
      default: "bottom"
    },
    /**
     * Whether the width is determined by the content in it, defaults to false (in this case the
     * minimal width equals the width of the activator)
     * */
    fitContent: {
      type: Boolean,
      default: !1
    },
    /** Whether the floating menu closes on click, defaults to true */
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    /** HTML element where the menu attaches itself to */
    attach: {
      type: [String, HTMLElement],
      default: null
    },
    /** Distance between floating menu and activator, defaults to 0 */
    offset: {
      type: Number,
      default: 0
    },
    /** Name of the transition */
    transition: {
      type: String,
      default: "fade"
    },
    delay: {
      type: Number,
      default: 0
    },
    attachToCursor: Boolean
  },
  emits: ["update:isOpen", "update:focus", "update:location"],
  setup(t, { expose: e, emit: r }) {
    const a = t, o = r, n = z0(), i = D(!1), s = D(!1), l = D(!1), d = D(null), c = D(null), u = D(null), p = D(null), h = D(null), f = D(""), m = B(() => {
      var q, oe;
      return n.value === c.value || n.value === u.value || ((q = c.value) == null ? void 0 : q.contains(n.value)) || ((oe = u.value) == null ? void 0 : oe.contains(n.value)) || !1;
    }), v = B(() => {
      switch (a.behavior) {
        case "focus":
          return { component: X0, props: { isFocused: m.value } };
        case "hover":
          return {
            component: G0,
            props: { floatingContainerEl: u.value, delay: a.delay }
          };
        case "manual":
          return { component: Z0 };
        case "static":
          return { component: ib };
        default:
          return {
            component: J0,
            props: {
              floatingContainerEl: u.value,
              activatorEl: c.value
            }
          };
      }
    });
    function b(q) {
      c.value = q;
    }
    function k(q) {
      f.value = q.placement, o("update:location", `${q.placement},${q.alignment}`);
    }
    async function $(q = null) {
      const oe = await d.value.calculatePosition(u.value, q);
      if (k(oe), u.value.style.top = `${oe.top}px`, u.value.style.left = `${oe.left}px`, ["top", "bottom"].includes(f.value) && !a.fitContent) {
        let ne = c.value;
        a.attach && (ne = a.attach instanceof HTMLElement ? a.attach : document.querySelector(a.attach));
        const Se = ne.getBoundingClientRect();
        u.value.style.minWidth = `${Se.width}px`;
      }
    }
    const g = () => $(), w = (q) => $(q);
    async function x(q) {
      k(q), s.value = !1, l.value = !0, requestAnimationFrame(() => {
        if (["top", "bottom"].includes(f.value) && !a.fitContent) {
          let oe = c.value;
          a.attach && (oe = a.attach instanceof HTMLElement ? a.attach : document.querySelector(a.attach));
          const ne = oe.getBoundingClientRect();
          u.value.style.minWidth = `${ne.width}px`;
        }
        u.value.style.top = `${q.top}px`, u.value.style.left = `${q.left}px`, u.value.showPopover(), s.value = !0;
      });
    }
    function S(q) {
      if (!u.value) {
        h.value = q;
        return;
      }
      w(q);
    }
    function M() {
      clearTimeout(p.value), !i.value && (a.attachToCursor && c.value.addEventListener("mousemove", S), p.value = setTimeout(() => {
        l.value = !1, s.value = !0, i.value = !0, At(async () => {
          if (!u.value)
            return;
          u.value.showPopover(), d.value = db(
            c.value,
            a.location,
            a.fitContent,
            a.attach,
            a.offset
          );
          const q = await d.value.calculatePosition(
            u.value,
            h.value
          );
          await x(q), k(q), s.value = !1, l.value = !0, h.value = null, requestAnimationFrame(() => {
            if (["top", "bottom"].includes(f.value) && !a.fitContent) {
              let oe = c.value;
              a.attach && (oe = a.attach instanceof HTMLElement ? a.attach : document.querySelector(a.attach));
              const ne = oe.getBoundingClientRect();
              u.value.style.minWidth = `${ne.width}px`;
            }
            u.value.style.top = `${q.top}px`, u.value.style.left = `${q.left}px`, u.value.showPopover(), window.addEventListener(
              "scroll",
              a.attachToCursor ? w : g,
              !0
            ), window.addEventListener(
              "resize",
              a.attachToCursor ? w : g
            ), s.value = !0, o("update:isOpen", !0);
          });
        });
      }, a.delay));
    }
    function T() {
      var q;
      window.removeEventListener(
        "scroll",
        a.attachToCursor ? w : g,
        !0
      ), window.removeEventListener(
        "resize",
        a.attachToCursor ? w : g
      ), (q = c.value) == null || q.removeEventListener("mousemove", S);
    }
    function I() {
      clearTimeout(p.value), p.value = null, T(), i.value && (s.value = !1);
    }
    function L() {
      i.value = !1, o("update:isOpen", !1);
    }
    function V() {
      var q;
      a.closeOnClick && i.value && ((q = c.value) == null || q.focus(), I());
    }
    function ae(q) {
      if (q.key === "Tab") {
        const oe = Xa(u.value, !0), ne = oe.indexOf(document.activeElement), Se = q.shiftKey ? ne - 1 : ne + 1;
        oe[Se] ? (q.preventDefault(), oe[Se].focus()) : (q.preventDefault(), Se <= 0 && c.value.focus());
      } else q.key === "Escape" ? (c.value.focus(), I()) : q.key === "Enter" && (q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation(), a.closeOnClick && (c.value.focus(), I()));
    }
    async function we(q) {
      var oe, ne;
      if (q.key === "Escape") {
        I();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(q.key))
        return;
      u.value || (M(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const Se = Xa(u.value);
      if (Se.length === 0)
        return;
      q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation();
      const ye = Se.indexOf(document.activeElement);
      ye === -1 ? Xa(u.value)[0].focus() : q.key === "ArrowDown" ? (oe = Se[ye + 1]) == null || oe.focus() : q.key === "ArrowUp" && ((ne = Se[ye - 1]) == null || ne.focus());
    }
    Ie(
      () => m.value,
      () => {
        o("update:focus", m.value);
      }
    ), Jr(() => {
      T();
    });
    const Ce = B(() => {
      if (!l.value)
        return Cc;
      switch (a.transition) {
        case "fade":
          return ab;
        case "expand":
          return nb;
        default:
          return Cc;
      }
    });
    return e({
      close: I
    }), (q, oe) => (y(), E(ke, null, [
      v.value ? (y(), W(Ea(v.value.component), We({ key: 0 }, v.value.props, {
        "model-value": i.value,
        onOpen: M,
        onClose: I,
        "onSet:activator": b
      }), {
        default: G(({ slotProps: ne }) => [
          le(q.$slots, "activator", Ca(fn({
            ...ne,
            onKeydown: we
          })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : F("", !0),
      i.value ? (y(), E("div", cb, [
        z("div", ub, [
          (y(), W(Ea(Ce.value), {
            placement: f.value,
            onAfterLeave: L
          }, {
            default: G(() => [
              qr(z("div", {
                ref: (ne) => u.value = ne,
                class: "floating-container-content",
                "data-testid": "menu",
                popover: "manual",
                tabindex: "-1",
                onKeydown: ae,
                onClick: V
              }, [
                le(q.$slots, "default", {}, void 0, !0)
              ], 544), [
                [Xi, s.value]
              ])
            ]),
            _: 3
          }, 40, ["placement"]))
        ])
      ])) : F("", !0)
    ], 64));
  }
}, ld = /* @__PURE__ */ ge(pb, [["__scopeId", "data-v-870bfd15"]]), fb = {
  __name: "PTooltip",
  props: /* @__PURE__ */ Mr({
    /** Distance between tooltip and activator, defaults to 2 */
    offset: {
      type: Number,
      default: 2
    },
    /** Behavior of the tooltip, possible values: hover, click, static */
    behavior: {
      type: String,
      default: "hover"
    },
    /** Text to be shown in the tooltip */
    text: {
      type: String,
      default: ""
    },
    /** Whether the tooltip is inverted (black background with white text) */
    inverted: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "fit-content"
    },
    /** HTML element where the tooltip attaches itself to */
    attach: {
      type: [String, HTMLElement],
      default: null
    }
  }, {
    location: {
      type: String,
      default: "bottom"
    },
    locationModifiers: {}
  }),
  emits: ["update:location"],
  setup(t) {
    const e = Ma(t, "location"), r = bo("tooltip-wrapper"), a = B(() => {
      var o;
      return (o = r.value) == null ? void 0 : o.children[0];
    });
    return (o, n) => (y(), W(ld, {
      offset: t.offset,
      behavior: t.behavior,
      location: e.value,
      "fit-content": t.width === "fit-content",
      attach: t.attach || a.value,
      delay: 150,
      "close-on-click": !1,
      "onUpdate:location": n[0] || (n[0] = (i) => e.value = i)
    }, {
      activator: G((i) => [
        z("div", We({
          ref: "tooltip-wrapper",
          class: "tooltip-wrapper"
        }, i), [
          le(o.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      default: G(() => [
        t.text || o.$slots.content ? (y(), E("div", {
          key: 0,
          class: be(["tooltip", [e.value.replace(/,/g, " "), { inverted: t.inverted }]]),
          style: Jt({ width: t.width })
        }, [
          le(o.$slots, "content", {}, () => [
            je(J(t.text), 1)
          ], !0)
        ], 6)) : F("", !0)
      ]),
      _: 3
    }, 8, ["offset", "behavior", "location", "fit-content", "attach"]));
  }
}, hb = /* @__PURE__ */ ge(fb, [["__scopeId", "data-v-716fecfb"]]), mb = {
  "copy-button.copy": "Kopieer",
  "copy-button.copied": "Gekopieerd!",
  "delivery.delivery_options": "Beschikbare leverdatums",
  "delivery.no_extra_cost": "Geen toeslag",
  "delivery.make_your_choice_next_step": "Maak je keuze in de volgende stap",
  "delivery.see_more": "Bekijk alle datums",
  "delivery.see_less": "Bekijk minder datums",
  "delivery.tomorrow": "Morgen",
  "delivery.fastest": "Snelste",
  "delivery.cheapest": "Voordeligst",
  "option.continue": "Doorgaan",
  "option.days": "1 dag | {n} dagen",
  "option.per_unit": "st",
  "option.amount": "Aantal",
  "option.product_photo": "productafbeelding",
  "option.attention": "Maak een nieuwe keuze",
  "option.unavailable": "Niet beschikbaar",
  "option.custom_value": "Aangepaste waarde",
  "product-config-modal.reference": "Referentie",
  "product-config-modal.add_to_cart": "Toevoegen aan winkelwagen",
  "product-config-modal.add": "Toevoegen",
  "product-config-modal.price_excluding": "excl. verpakking & verzending",
  "product-config-modal.specifications": "Aanleverspecificaties",
  "product-config-modal.shipping_costs": "Verzendkosten (vanaf)",
  "product-config-modal.packaging_costs": "Verpakkingskosten",
  "product-config-modal.total": "Totaal",
  "step.min_value": "Waarde kan niet kleiner zijn dan {minValue}",
  "step.max_value": "Waarde kan niet groter zijn dan {maxValue}",
  "step.required": "Waarde is verplicht",
  "step.total": "Totaal",
  "expandable-card.show_more": "Toon meer",
  "expandable-card.show_less": "Toon minder",
  "confirm-modal.confirm": "Bevestigen",
  "confirm-modal.confirm_message": "Deze actie kan niet ongedaan gemaakt worden.",
  "confirm-modal.delete": "Verwijderen",
  "confirm-modal.cancel": "Annuleren",
  "modal.close": "Sluiten",
  "modal.minimize": "Minimaliseren",
  "modal.open": "Openen",
  "modal.save": "Opslaan",
  "modal.cancel": "Annuleren",
  "filter.apply": "Filter toepassen",
  "filter.select_all": "Selecteer alles",
  "filter.deselect_all": "Deselecteer alles",
  "filter.to": "Tot",
  "filter.today": "Vandaag",
  "filter.tomorrow": "Morgen",
  "filter.overmorrow": "Overmorgen",
  "filter.coming_week": "Komende week",
  "filter.filters": "Filter",
  "filter.clear": "Wis alle filters",
  "filter.from_date": "Vanaf datum",
  "filter.to_date": "Tot datum",
  "filter.clear_filter": "Filter wissen",
  "column-configuration.columns": "Kolommen",
  "column-configuration.active_columns": "Actieve kolommen",
  "column-configuration.available_columns": "Beschikbare kolommen",
  "column-configuration.no_columns_available": "Geen kolommen beschikbaar",
  "column-configuration.drag_column": "Sleep kolom",
  "column-configuration.column_position": "Huidige positie: {position} van {amount}",
  "column-configuration.current_column": "Huidige kolom",
  "data-table.no_results": "Geen resultaten",
  "data-table.no_results_available": "Er zijn geen gegevens beschikbaar.",
  "data-table.no_results_found": "We konden niets vinden. Pas je zoekopdracht aan en probeer het nog eens.",
  "data-table.results": "resultaten",
  "data-table.per_page": "per pagina",
  "data-table.undo_selection": "Selectie ongedaan maken",
  "data-table.delete": "Verwijderen",
  "data-table.selected": "{amount} geselecteerd",
  "data-table.select_all": "Selecteer alles",
  "data-table.deselect_all": "Deselecteer alles",
  "data-table.select_row": "Selecteer rij",
  "data-table.deselect_row": "Deselecteer rij",
  "address.type": "Type adres",
  "address.street": "Straatnaam",
  "address.number": "Nummer",
  "address.addition": "Toevoeging",
  "address.addition_abbr": "Toev.",
  "address.city": "Plaats",
  "address.postal_code": "Postcode",
  "address.country": "Land",
  "address.company_name": "Bedrijfsnaam",
  "address.first_name": "Voornaam",
  "address.last_name": "Achternaam",
  "address.fill_in_manually": "Adres handmatig invullen",
  "address.activate_validation": "Adresvalidatie activeren",
  "address.caution": "Let op: we controleren je adres niet automatisch. Dubbelcheck het even!",
  "address.postal_code_invalid": "Ongeldige postcode",
  "address.lookup_address": "Adres zoeken",
  "address.lookup_address_info": "Vul een deel van het adres, bijvoorbeeld:",
  "address.company": "Bedrijf",
  "address.private": "Particulier",
  "amount-input.plus_one": "Plus een",
  "amount-input.minus_one": "Min een",
  "checkbox.required": "Vink aan om door te gaan",
  "email.invalid": "Ongeldig e-mailadres",
  "email.required": "Er is geen e-mailadres ingevuld.",
  "input.select": "Selecteren",
  "input.no_results": "Geen resultaten",
  "input.clear": "Legen",
  "input.cancel": "Annuleren",
  "input.product_reference": "Productreferentie (optioneel)",
  "input.search_country": "Zoek land",
  "input.no_countries_found": "Geen landen gevonden",
  "input.required": "Dit veld is verplicht",
  "input.min_date": "Minimum datum: {date}",
  "input.max_date": "Maximale datum: {date}",
  "input.required_with_label": "Er is geen {label} ingevuld.",
  "input.optional": "Optioneel",
  "input.toggle": "Toggle dropdown-menu",
  "input.bold": "Vet",
  "input.italic": "Cursief",
  "input.underline": "Onderstrepen",
  "input.search": "Zoeken",
  "input.choose_filter": "Kies filter",
  "password.invalid": "Wachtwoord is ongeldig",
  "password.required": "Er is geen wachtwoord ingevuld.",
  "drawer.close": "Sluit zijbalk",
  "header.back_to_home": "Terug naar home",
  "page-header.scroll_top": "Scroll naar boven",
  "sidebar.title": "Navigatie zijbalk",
  "navigation-drawer.open_menu": "Menu openen",
  "pagination.previous": "Vorige",
  "pagination.next": "Volgende",
  "toast.confirm": "Bevestigen",
  "toast.dismiss": "Annuleren",
  "toast.close": "Sluit bericht"
}, gb = {
  "copy-button.copy": "Copy",
  "copy-button.copied": "Copied!",
  "delivery.delivery_options": "Available delivery dates",
  "delivery.no_extra_cost": "No extra cost",
  "delivery.make_your_choice_next_step": "Make your choice in the next step",
  "delivery.see_more": "See all dates",
  "delivery.see_less": "See less dates",
  "delivery.tomorrow": "Tomorrow",
  "delivery.fastest": "Fastest",
  "delivery.cheapest": "Cheapest",
  "option.continue": "Continue",
  "option.days": "1 day | {n} days",
  "option.per_unit": "pc",
  "option.amount": "Amount",
  "option.product_photo": "product photo",
  "option.attention": "Make a new choice",
  "option.unavailable": "Not available",
  "option.custom_value": "Custom value",
  "product-config-modal.reference": "Reference",
  "product-config-modal.add_to_cart": "Add to cart",
  "product-config-modal.add": "Add",
  "product-config-modal.price_excluding": "excl. packaging & shipping",
  "product-config-modal.specifications": "Specifications",
  "product-config-modal.shipping_costs": "Shipping costs (from)",
  "product-config-modal.packaging_costs": "Packaging costs",
  "product-config-modal.total": "Total",
  "step.min_value": "Value cannot be less than {minValue}",
  "step.max_value": "Value cannot be more than {maxValue}",
  "step.required": "Value is required",
  "step.total": "Total",
  "expandable-card.show_more": "Show more",
  "expandable-card.show_less": "Show less",
  "confirm-modal.confirm": "Confirm",
  "confirm-modal.confirm_message": "This action can not be undone.",
  "confirm-modal.delete": "Delete",
  "confirm-modal.cancel": "Cancel",
  "modal.close": "Close",
  "modal.minimize": "Minimize",
  "modal.open": "Open",
  "modal.save": "Save",
  "modal.cancel": "Cancel",
  "filter.apply": "Apply filter",
  "filter.select_all": "Select all",
  "filter.deselect_all": "Deselect all",
  "filter.to": "To",
  "filter.today": "Today",
  "filter.tomorrow": "Tommorrow",
  "filter.overmorrow": "Day after tomorrow",
  "filter.coming_week": "Coming week",
  "filter.filters": "Filter",
  "filter.clear": "Clear all filters",
  "filter.from_date": "From date",
  "filter.to_date": "To date",
  "filter.clear_filter": "Clear filter",
  "column-configuration.columns": "Columns",
  "column-configuration.active_columns": "Active columns",
  "column-configuration.available_columns": "Available columns",
  "column-configuration.no_columns_available": "No columns available",
  "column-configuration.drag_column": "Drag column",
  "column-configuration.column_position": "Current position: {position} of {amount}",
  "column-configuration.current_column": "Current column",
  "data-table.no_results": "No results",
  "data-table.no_results_available": "No data available.",
  "data-table.no_results_found": "We couldn't find anything. Please adjust your search and try again.",
  "data-table.to": "to",
  "data-table.of": "of",
  "data-table.results": "results",
  "data-table.per_page": "per page",
  "data-table.undo_selection": "Undo selection",
  "data-table.delete": "Delete",
  "data-table.selected": "{amount} selected",
  "data-table.select_all": "Select all",
  "data-table.deselect_all": "Deselect all",
  "data-table.select_row": "Select row",
  "data-table.deselect_row": "Deselect row",
  "address.type": "Address type",
  "address.street": "Street",
  "address.number": "Number",
  "address.addition": "Addition",
  "address.addition_abbr": "Suff.",
  "address.city": "City",
  "address.postal_code": "Postal code",
  "address.country": "Country",
  "address.company_name": "Company name",
  "address.first_name": "First name",
  "address.last_name": "Last name",
  "address.fill_in_manually": "Fill in manually",
  "address.activate_validation": "Activate validation",
  "address.caution": "Warning: we won't check your address automatically. Double check the address!",
  "address.postal_code_invalid": "Invalid postal code",
  "address.lookup_address": "Search address",
  "address.lookup_address_info": "Enter a part of the address, for example:",
  "address.company": "Company",
  "address.private": "Private",
  "amount-input.plus_one": "Plus one",
  "amount-input.minus_one": "Minus one",
  "checkbox.required": "Check to continue",
  "email.invalid": "Invalid email",
  "email.required": "No email address has been entered.",
  "input.select": "Select",
  "input.no_results": "No results",
  "input.clear": "Clear",
  "input.cancel": "Cancel",
  "input.product_reference": "Product reference (optional)",
  "input.search_country": "Search country",
  "input.no_countries_found": "No countries found",
  "input.required": "This field is required",
  "input.min_date": "Minimum date: {date}",
  "input.max_date": "Maximum date: {date}",
  "input.required_with_label": "No {label} has been entered.",
  "input.optional": "Optional",
  "input.toggle": "Toggle dropdown",
  "input.bold": "Bold",
  "input.italic": "Italic",
  "input.underline": "Underline",
  "input.search": "Search",
  "input.choose_filter": "Choose filter",
  "password.invalid": "Password is invalid",
  "password.required": "No password has been entered.",
  "drawer.close": "Close drawer",
  "header.back_to_home": "Back to home",
  "page-header.scroll_top": "Scroll to top",
  "sidebar.title": "Navigation sidebar",
  "navigation-drawer.open_menu": "Open menu",
  "pagination.previous": "Previous",
  "pagination.next": "Next",
  "toast.confirm": "Confirm",
  "toast.dismiss": "Dismiss",
  "toast.close": "Close message"
}, vb = {
  "copy-button.copy": "Kopie",
  "copy-button.copied": "Kopiert!",
  "delivery.delivery_options": "Verfälgbare Lieferdaten",
  "delivery.no_extra_cost": "Keine Zusatzkosten",
  "delivery.make_your_choice_next_step": "Wählen Sie Ihre Wahl in der nächsten Schritt",
  "delivery.see_more": "Alle Daten anzeigen",
  "delivery.see_less": "Weniger Daten anzeigen",
  "delivery.tomorrow": "Morgen",
  "delivery.fastest": "Schnellste",
  "delivery.cheapest": "Aam billigsten",
  "option.continue": "Weiter",
  "option.days": "1 Tag | {n} Tage",
  "option.per_unit": "ei",
  "option.amount": "Anzahl",
  "option.product_photo": "produktbild",
  "option.attention": "Weitere Option waehlen",
  "option.unavailable": "Nicht verfügbar",
  "option.custom_value": "Zusatzwert",
  "product-config-modal.reference": "Referenz",
  "product-config-modal.add_to_cart": "Zum Warenkorb hinzufügen",
  "product-config-modal.add": "Hinzufügen",
  "product-config-modal.price_excluding": "exkl. Verpackung & Versand",
  "product-config-modal.specifications": "Spezifikationen",
  "product-config-modal.shipping_costs": "Versandkosten (von)",
  "product-config-modal.packaging_costs": "Verpackungskosten",
  "product-config-modal.total": "Gesamt",
  "step.min_value": "Wert kann nicht weniger als {minValue} sein",
  "step.max_value": "Wert kann nicht mehr als {maxValue} sein",
  "step.required": "Wert erforderlich",
  "step.total": "Gesamt",
  "expandable-card.show_more": "Mehr anzeigen",
  "expandable-card.show_less": "Weniger anzeigen",
  "confirm-modal.confirm": "Bestätigen",
  "confirm-modal.confirm_message": "Diese Aktion kann nicht ruiniert werden.",
  "confirm-modal.delete": "Löschen",
  "confirm-modal.cancel": "Abbrechen",
  "modal.close": "Schließen",
  "modal.minimize": "Minimalisieren",
  "modal.open": "Öffnen",
  "modal.save": "Speichern",
  "modal.cancel": "Abbrechen",
  "filter.apply": "Filter anwenden",
  "filter.select_all": "Alles auswählen",
  "filter.deselect_all": "Alles abwhlen",
  "filter.to": "Bis",
  "filter.today": "Heute",
  "filter.tomorrow": "Morgen",
  "filter.overmorrow": "Übermorgen",
  "filter.coming_week": "Kommende Woche",
  "filter.filters": "Filter",
  "filter.clear": "Alle Filter löschen",
  "filter.from_date": "Von Datum",
  "filter.to_date": "Bis Datum",
  "filter.clear_filter": "Filter löschen",
  "column-configuration.columns": "Spalten",
  "column-configuration.active_columns": "Aktive Spalten",
  "column-configuration.available_columns": "Verfügbare Spalten",
  "column-configuration.no_columns_available": "Keine Spalten verfügbar",
  "column-configuration.drag_column": "Ziehe Spalte",
  "column-configuration.column_position": "Aktuelle Position: {position} von {amount}",
  "column-configuration.current_column": "Aktuelle Spalte",
  "data-table.no_results": "Keine Ergebnisse",
  "data-table.no_results_available": "Keine Daten verfügbar.",
  "data-table.no_results_found": "Wir konnten nichts finden. Bitte passen Sie Ihre Suche an und versuchen Sie es erneut.",
  "data-table.results": "Ergebnissen",
  "data-table.undo_selection": "Auswahl aufheben",
  "data-table.delete": "Löschen",
  "data-table.selected": "{amount} ausgewhlen",
  "data-table.per_page": "pro Seite",
  "data-table.select_all": "Alles auswählen",
  "data-table.deselect_all": "Alles abwhlen",
  "data-table.select_row": "Zeile auswhlen",
  "data-table.deselect_row": "Zeile abwhlen",
  "address.type": "Adressentyp",
  "address.street": "Straße",
  "address.number": "Nummer",
  "address.addition": "Addition",
  "address.addition_abbr": "Suff.",
  "address.city": "Stadt",
  "address.postal_code": "Postleitzahl",
  "address.country": "Land",
  "address.company_name": "Firmenname",
  "address.first_name": "Vorname",
  "address.last_name": "Nachname",
  "address.fill_in_manually": "Manuell eintragen",
  "address.activate_validation": "Validierung aktivieren",
  "address.caution": "Bitte beachten Sie: Wir prüfen Ihre Adresse nicht automatisch. Überprüfen Sie es noch einmal!",
  "address.postal_code_invalid": "Ungültige Postleitzahl",
  "address.lookup_address": "Adresse suchen",
  "address.lookup_address_info": "Geben Sie einen Teil der Adresse ein, zum Beispiel:",
  "address.company": "Firma",
  "address.private": "Privat",
  "amount-input.plus_one": "Plus eins",
  "amount-input.minus_one": "Minus eins",
  "checkbox.required": "Klicken Sie, um fortzufahren",
  "email.invalid": "Ungültiger E-Mail-Adresse",
  "email.required": "Es wurde keine E-Mail-Adresse eingegeben.",
  "input.select": "Auswählen",
  "input.no_results": "Keine Ergebnisse",
  "input.clear": "Leeren",
  "input.cancel": "Abbrechen",
  "input.product_reference": "Produktreferenz (optional)",
  "input.search_country": "Land suchen",
  "input.no_countries_found": "Keine Länder gefunden",
  "input.required": "Dieses Feld ist erforderlich",
  "input.min_date": "Mindestes Datum: {date}",
  "input.max_date": "Maximales Datum: {date}",
  "input.required_with_label": "Es wurde kein {label} eingegeben.",
  "input.optional": "Optional",
  "input.toggle": "Dropdown-Menü ein-/ausblenden",
  "input.bold": "Fett",
  "input.italic": "Kursiv",
  "input.underline": "Unterstrichen",
  "input.search": "Suchen",
  "input.choose_filter": "Filter auswhlen",
  "password.invalid": "Passwort ist ungültig",
  "password.required": "Es wurde kein Passwort eingegeben.",
  "drawer.close": "Schließ die Leiste",
  "header.back_to_home": "Zurück zu home",
  "page-header.scroll_top": "Nach oben scrollen",
  "sidebar.title": "Navigationsleiste",
  "navigation-drawer.open_menu": "Menu oeffnen",
  "pagination.previous": "Vorherige",
  "pagination.next": "Weiter",
  "toast.confirm": "Bestätigen",
  "toast.dismiss": "Abbrechen",
  "toast.close": "Schließen der Nachricht"
}, ll = { nl: mb, en: gb, de: vb };
function bb() {
  return document.documentElement.lang || "nl";
}
const vf = Qe({
  language: bb()
});
function bf(t, e = {}) {
  return t.replace(/{(\w+)}/g, (r, a) => e[a] || `{${a}}`);
}
function wf(t) {
  const [e] = t.split("."), r = t.substring(t.indexOf(".") + 1);
  return ll[vf.language][`${e}.${r}`] || t;
}
function wb(t, e) {
  return t.replace(/{(\d+)}/g, (r, a) => e[a] || `{${a}}`);
}
function yb(t, e, r = {}) {
  const a = t.split("|").map((n) => n.trim());
  let o;
  return a.length === 1 ? [o] = a : a.length === 2 ? e === 1 ? [o] = a : [, o] = a : e === 0 ? [o] = a : e === 1 ? [, o] = a : o = a[Math.min(e, a.length - 1)], bf(o, { ...r, count: e, n: e });
}
function dl(t) {
  if (t) {
    if (!Object.keys(ll).includes(t)) {
      console.error(
        `Language "${t}" is not supported, supported languages are: ${Object.keys(ll).join(", ")}`
      );
      return;
    }
    vf.language = t;
  }
}
function ie(t, e = null) {
  const r = wf(t);
  return Array.isArray(e) ? wb(r) : bf(r, e);
}
function xb(t, e, r = null) {
  return yb(wf(t), e, r);
}
function kb() {
  dl(document.documentElement.lang);
  const t = new MutationObserver((e) => {
    var r;
    ((r = e[0]) == null ? void 0 : r.attributeName) === "lang" && dl(document.documentElement.lang);
  });
  t.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", () => {
    t.disconnect();
  });
}
kb();
function $b(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
const _b = ["aria-disabled"], Sb = ["id", "aria-controls", "disabled"], Cb = { class: "title" }, Ob = ["id", "aria-hidden"], Eb = {
  __name: "PAccordionItem",
  props: {
    /** Accordion state, true for open, false for closed */
    modelValue: Boolean,
    /** Title in the accordion header */
    title: {
      type: [String, Number],
      default: ""
    },
    /** Accessible title for screen readers */
    ariaTitle: {
      type: String,
      default: ""
    },
    /** Hide toggle icon */
    hideToggle: Boolean,
    /** Disable accordion item */
    disabled: Boolean,
    /** Scrolls the item into view when opened */
    scrollIntoView: Boolean
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D(null);
    return Ie(
      () => r.modelValue,
      (n) => {
        n && r.scrollIntoView && setTimeout(() => o.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (n, i) => (y(), E("div", {
      class: be(["accordion-item", { disabled: t.disabled }]),
      "aria-disabled": t.disabled
    }, [
      z("button", {
        id: "accordion-header-" + t.ariaTitle,
        ref_key: "accordionHeader",
        ref: o,
        class: "header",
        "data-testid": "accordion-trigger",
        "aria-controls": "accordion-content-" + t.ariaTitle,
        disabled: t.disabled,
        onClick: i[0] || (i[0] = (s) => a("update:modelValue", !t.modelValue))
      }, [
        le(n.$slots, "header", {}, () => [
          z("h3", Cb, J(t.title), 1)
        ]),
        t.hideToggle ? F("", !0) : (y(), E("div", {
          key: 0,
          class: be(["state-indicator", { open: t.modelValue }])
        }, [
          ee(Xt, {
            part: "state-indicator-icon",
            icon: A($b)
          }, null, 8, ["icon"])
        ], 2))
      ], 8, Sb),
      ee(Go, { name: "grow" }, {
        default: G(() => [
          qr(z("div", {
            id: "accordion-content-" + t.ariaTitle,
            "aria-hidden": !t.modelValue,
            class: "content"
          }, [
            ee(Go, { name: "fade" }, {
              default: G(() => [
                t.modelValue ? le(n.$slots, "default", { key: 0 }) : F("", !0)
              ]),
              _: 3
            })
          ], 8, Ob), [
            [Xi, t.modelValue]
          ])
        ]),
        _: 3
      })
    ], 10, _b));
  }
}, yf = /* @__PURE__ */ ge(Eb, [["__scopeId", "data-v-a8ed619d"]]), Mb = {
  class: "accordion",
  "data-testid": "accordion"
}, Tb = {
  __name: "PAccordion",
  props: {
    /** Accordion state, true for open, false for closed */
    modelValue: {
      type: Array,
      default: () => [!0]
    },
    /** Array of items in the accordion */
    items: {
      type: Array,
      default: () => []
    },
    /** Title in the accordion header, a key of the item object */
    title: {
      type: String,
      default: ""
    },
    /** Multiple items can be selected */
    multiple: Boolean,
    /** Disable accordion and all it's items */
    disabled: Boolean,
    /** Scrolls open items into view */
    scrollIntoView: Boolean
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = B(() => [...r.modelValue]);
    function n(i, s) {
      r.multiple ? (o.value[s] = i, a("update:modelValue", o.value)) : (o.value.forEach((l, d) => {
        d !== s && (o.value[d] = !1);
      }), a("update:modelValue", o.value));
    }
    return (i, s) => (y(), E("div", Mb, [
      (y(!0), E(ke, null, Ze(t.items, (l, d) => le(i.$slots, "default", We({
        key: d,
        ref_for: !0
      }, { item: l, index: d, open: o.value[d] }), () => [
        ee(yf, {
          modelValue: o.value[d],
          "onUpdate:modelValue": [(c) => o.value[d] = c, (c) => n(c, d)],
          title: l[t.title],
          "aria-title": l.ariaTitle,
          disabled: t.disabled || l.disabled,
          "hide-toggle": t.disabled,
          "scroll-into-view": t.scrollIntoView
        }, {
          default: G(() => [
            le(i.$slots, "content", We({ ref_for: !0 }, l), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "aria-title", "disabled", "hide-toggle", "scroll-into-view"])
      ], !0)), 128))
    ]));
  }
}, Ab = /* @__PURE__ */ ge(Tb, [["__scopeId", "data-v-83cfa0c5"]]);
function Ec(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Dr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ec(Object(r), !0).forEach(function(a) {
      Ib(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ec(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function Ib(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Mc(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(t).reduce((r, a) => (e.includes(a) || (r[a] = A(t[a])), r), {});
}
function ui(t) {
  return typeof t == "function";
}
function zb(t) {
  return ga(t) || Hr(t);
}
function xf(t, e, r) {
  let a = t;
  const o = e.split(".");
  for (let n = 0; n < o.length; n++) {
    if (!a[o[n]]) return r;
    a = a[o[n]];
  }
  return a;
}
function $s(t, e, r) {
  return B(() => t.some((a) => xf(e, a, {
    [r]: !1
  })[r]));
}
function Tc(t, e, r) {
  return B(() => t.reduce((a, o) => {
    const n = xf(e, o, {
      [r]: !1
    })[r] || [];
    return a.concat(n);
  }, []));
}
function kf(t, e, r, a) {
  return t.call(a, A(e), A(r), a);
}
function $f(t) {
  return t.$valid !== void 0 ? !t.$valid : !t;
}
function Nb(t, e, r, a, o, n, i) {
  let {
    $lazy: s,
    $rewardEarly: l
  } = o, d = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], c = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, p = arguments.length > 10 ? arguments[10] : void 0;
  const h = D(!!a.value), f = D(0);
  r.value = !1;
  const m = Ie([e, a].concat(d, p), () => {
    if (s && !a.value || l && !u.value && !r.value)
      return;
    let v;
    try {
      v = kf(t, e, c, i);
    } catch (b) {
      v = Promise.reject(b);
    }
    f.value++, r.value = !!f.value, h.value = !1, Promise.resolve(v).then((b) => {
      f.value--, r.value = !!f.value, n.value = b, h.value = $f(b);
    }).catch((b) => {
      f.value--, r.value = !!f.value, n.value = b, h.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof e == "object"
  });
  return {
    $invalid: h,
    $unwatch: m
  };
}
function Pb(t, e, r, a, o, n, i, s) {
  let {
    $lazy: l,
    $rewardEarly: d
  } = a;
  const c = () => ({}), u = B(() => {
    if (l && !r.value || d && !s.value)
      return !1;
    let p = !0;
    try {
      const h = kf(t, e, i, n);
      o.value = h, p = $f(h);
    } catch (h) {
      o.value = h;
    }
    return p;
  });
  return {
    $unwatch: c,
    $invalid: u
  };
}
function jb(t, e, r, a, o, n, i, s, l, d, c) {
  const u = D(!1), p = t.$params || {}, h = D(null);
  let f, m;
  t.$async ? {
    $invalid: f,
    $unwatch: m
  } = Nb(t.$validator, e, u, r, a, h, o, t.$watchTargets, l, d, c) : {
    $invalid: f,
    $unwatch: m
  } = Pb(t.$validator, e, r, a, h, o, l, d);
  const v = t.$message;
  return {
    $message: ui(v) ? B(() => v(Mc({
      $pending: u,
      $invalid: f,
      $params: Mc(p),
      $model: e,
      $response: h,
      $validator: n,
      $propertyPath: s,
      $property: i
    }))) : v || "",
    $params: p,
    $pending: u,
    $invalid: f,
    $response: h,
    $unwatch: m
  };
}
function Vb() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const e = A(t), r = Object.keys(e), a = {}, o = {}, n = {};
  let i = null;
  return r.forEach((s) => {
    const l = e[s];
    switch (!0) {
      case ui(l.$validator):
        a[s] = l;
        break;
      case ui(l):
        a[s] = {
          $validator: l
        };
        break;
      case s === "$validationGroups":
        i = l;
        break;
      case s.startsWith("$"):
        n[s] = l;
        break;
      default:
        o[s] = l;
    }
  }), {
    rules: a,
    nestedValidators: o,
    config: n,
    validationGroups: i
  };
}
const Rb = "__root";
function Db(t, e, r, a, o, n, i, s, l) {
  const d = Object.keys(t), c = a.get(o, t), u = D(!1), p = D(!1), h = D(0);
  if (c) {
    if (!c.$partial) return c;
    c.$unwatch(), u.value = c.$dirty.value;
  }
  const f = {
    $dirty: u,
    $path: o,
    $touch: () => {
      u.value || (u.value = !0);
    },
    $reset: () => {
      u.value && (u.value = !1);
    },
    $commit: () => {
    }
  };
  return d.length ? (d.forEach((m) => {
    f[m] = jb(t[m], e, f.$dirty, n, i, m, r, o, l, p, h);
  }), f.$externalResults = B(() => s.value ? [].concat(s.value).map((m, v) => ({
    $propertyPath: o,
    $property: r,
    $validator: "$externalResults",
    $uid: `${o}-externalResult-${v}`,
    $message: m,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), f.$invalid = B(() => {
    const m = d.some((v) => A(f[v].$invalid));
    return p.value = m, !!f.$externalResults.value.length || m;
  }), f.$pending = B(() => d.some((m) => A(f[m].$pending))), f.$error = B(() => f.$dirty.value ? f.$pending.value || f.$invalid.value : !1), f.$silentErrors = B(() => d.filter((m) => A(f[m].$invalid)).map((m) => {
    const v = f[m];
    return Qe({
      $propertyPath: o,
      $property: r,
      $validator: m,
      $uid: `${o}-${m}`,
      $message: v.$message,
      $params: v.$params,
      $response: v.$response,
      $pending: v.$pending
    });
  }).concat(f.$externalResults.value)), f.$errors = B(() => f.$dirty.value ? f.$silentErrors.value : []), f.$unwatch = () => d.forEach((m) => {
    f[m].$unwatch();
  }), f.$commit = () => {
    p.value = !0, h.value = Date.now();
  }, a.set(o, t, f), f) : (c && a.set(o, t, f), f);
}
function Lb(t, e, r, a, o, n, i) {
  const s = Object.keys(t);
  return s.length ? s.reduce((l, d) => (l[d] = cl({
    validations: t[d],
    state: e,
    key: d,
    parentKey: r,
    resultsCache: a,
    globalConfig: o,
    instance: n,
    externalResults: i
  }), l), {}) : {};
}
function Bb(t, e, r) {
  const a = B(() => [e, r].filter((f) => f).reduce((f, m) => f.concat(Object.values(A(m))), [])), o = B({
    get() {
      return t.$dirty.value || (a.value.length ? a.value.every((f) => f.$dirty) : !1);
    },
    set(f) {
      t.$dirty.value = f;
    }
  }), n = B(() => {
    const f = A(t.$silentErrors) || [], m = a.value.filter((v) => (A(v).$silentErrors || []).length).reduce((v, b) => v.concat(...b.$silentErrors), []);
    return f.concat(m);
  }), i = B(() => {
    const f = A(t.$errors) || [], m = a.value.filter((v) => (A(v).$errors || []).length).reduce((v, b) => v.concat(...b.$errors), []);
    return f.concat(m);
  }), s = B(() => a.value.some((f) => f.$invalid) || A(t.$invalid) || !1), l = B(() => a.value.some((f) => A(f.$pending)) || A(t.$pending) || !1), d = B(() => a.value.some((f) => f.$dirty) || a.value.some((f) => f.$anyDirty) || o.value), c = B(() => o.value ? l.value || s.value : !1), u = () => {
    t.$touch(), a.value.forEach((f) => {
      f.$touch();
    });
  }, p = () => {
    t.$commit(), a.value.forEach((f) => {
      f.$commit();
    });
  }, h = () => {
    t.$reset(), a.value.forEach((f) => {
      f.$reset();
    });
  };
  return a.value.length && a.value.every((f) => f.$dirty) && u(), {
    $dirty: o,
    $errors: i,
    $invalid: s,
    $anyDirty: d,
    $error: c,
    $pending: l,
    $touch: u,
    $reset: h,
    $silentErrors: n,
    $commit: p
  };
}
function cl(t) {
  let {
    validations: e,
    state: r,
    key: a,
    parentKey: o,
    childResults: n,
    resultsCache: i,
    globalConfig: s = {},
    instance: l,
    externalResults: d
  } = t;
  const c = o ? `${o}.${a}` : a, {
    rules: u,
    nestedValidators: p,
    config: h,
    validationGroups: f
  } = Vb(e), m = Dr(Dr({}, s), h), v = a ? B(() => {
    const ye = A(r);
    return ye ? A(ye[a]) : void 0;
  }) : r, b = Dr({}, A(d) || {}), k = B(() => {
    const ye = A(d);
    return a ? ye ? A(ye[a]) : void 0 : ye;
  }), $ = Db(u, v, a, i, c, m, l, k, r), g = Lb(p, v, c, i, m, l, k), w = {};
  f && Object.entries(f).forEach((ye) => {
    let [ze, Me] = ye;
    w[ze] = {
      $invalid: $s(Me, g, "$invalid"),
      $error: $s(Me, g, "$error"),
      $pending: $s(Me, g, "$pending"),
      $errors: Tc(Me, g, "$errors"),
      $silentErrors: Tc(Me, g, "$silentErrors")
    };
  });
  const {
    $dirty: x,
    $errors: S,
    $invalid: M,
    $anyDirty: T,
    $error: I,
    $pending: L,
    $touch: V,
    $reset: ae,
    $silentErrors: we,
    $commit: Ce
  } = Bb($, g, n), q = a ? B({
    get: () => A(v),
    set: (ye) => {
      x.value = !0;
      const ze = A(r), Me = A(d);
      Me && (Me[a] = b[a]), Xe(ze[a]) ? ze[a].value = ye : ze[a] = ye;
    }
  }) : null;
  a && m.$autoDirty && Ie(v, () => {
    x.value || V();
    const ye = A(d);
    ye && (ye[a] = b[a]);
  }, {
    flush: "sync"
  });
  async function oe() {
    return V(), m.$rewardEarly && (Ce(), await At()), await At(), new Promise((ye) => {
      if (!L.value) return ye(!M.value);
      const ze = Ie(L, () => {
        ye(!M.value), ze();
      });
    });
  }
  function ne(ye) {
    return (n.value || {})[ye];
  }
  function Se() {
    Xe(d) ? d.value = b : Object.keys(b).length === 0 ? Object.keys(d).forEach((ye) => {
      delete d[ye];
    }) : Object.assign(d, b);
  }
  return Qe(Dr(Dr(Dr({}, $), {}, {
    $model: q,
    $dirty: x,
    $error: I,
    $errors: S,
    $invalid: M,
    $anyDirty: T,
    $pending: L,
    $touch: V,
    $reset: ae,
    $path: c || Rb,
    $silentErrors: we,
    $validate: oe,
    $commit: Ce
  }, n && {
    $getResultsForChild: ne,
    $clearExternalResults: Se,
    $validationGroups: w
  }), g));
}
class Fb {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(e, r, a) {
    this.storage.set(e, {
      rules: r,
      result: a
    });
  }
  checkRulesValidity(e, r, a) {
    const o = Object.keys(a), n = Object.keys(r);
    return n.length !== o.length || !n.every((i) => o.includes(i)) ? !1 : n.every((i) => r[i].$params ? Object.keys(r[i].$params).every((s) => A(a[i].$params[s]) === A(r[i].$params[s])) : !0);
  }
  get(e, r) {
    const a = this.storage.get(e);
    if (!a) return;
    const {
      rules: o,
      result: n
    } = a, i = this.checkRulesValidity(e, r, o), s = n.$unwatch ? n.$unwatch : () => ({});
    return i ? n : {
      $dirty: n.$dirty,
      $partial: !0,
      $unwatch: s
    };
  }
}
const Wn = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, Ac = Symbol("vuelidate#injectChildResults"), Ic = Symbol("vuelidate#removeChildResults");
function Hb(t) {
  let {
    $scope: e,
    instance: r
  } = t;
  const a = {}, o = D([]), n = B(() => o.value.reduce((c, u) => (c[u] = A(a[u]), c), {}));
  function i(c, u) {
    let {
      $registerAs: p,
      $scope: h,
      $stopPropagation: f
    } = u;
    f || e === Wn.COLLECT_NONE || h === Wn.COLLECT_NONE || e !== Wn.COLLECT_ALL && e !== h || (a[p] = c, o.value.push(p));
  }
  r.__vuelidateInjectInstances = [].concat(r.__vuelidateInjectInstances || [], i);
  function s(c) {
    o.value = o.value.filter((u) => u !== c), delete a[c];
  }
  r.__vuelidateRemoveInstances = [].concat(r.__vuelidateRemoveInstances || [], s);
  const l = Er(Ac, []);
  al(Ac, r.__vuelidateInjectInstances);
  const d = Er(Ic, []);
  return al(Ic, r.__vuelidateRemoveInstances), {
    childResults: n,
    sendValidationResultsToParent: l,
    removeValidationResultsFromParent: d
  };
}
function _f(t) {
  return new Proxy(t, {
    get(e, r) {
      return typeof e[r] == "object" ? _f(e[r]) : B(() => e[r]);
    }
  });
}
let zc = 0;
function Zi(t, e) {
  var r;
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (a = t, t = void 0, e = void 0);
  let {
    $registerAs: o,
    $scope: n = Wn.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: s,
    currentVueInstance: l
  } = a;
  const d = l || ((r = zr()) === null || r === void 0 ? void 0 : r.proxy), c = d ? d.$options : {};
  o || (zc += 1, o = `_vuelidate_${zc}`);
  const u = D({}), p = new Fb(), {
    childResults: h,
    sendValidationResultsToParent: f,
    removeValidationResultsFromParent: m
  } = d ? Hb({
    $scope: n,
    instance: d
  }) : {
    childResults: D({})
  };
  if (!t && c.validations) {
    const v = c.validations;
    e = D({}), Ql(() => {
      e.value = d, Ie(() => ui(v) ? v.call(e.value, new _f(e.value)) : v, (b) => {
        u.value = cl({
          validations: b,
          state: e,
          childResults: h,
          resultsCache: p,
          globalConfig: a,
          instance: d,
          externalResults: s || d.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), a = c.validationsConfig || a;
  } else {
    const v = Xe(t) || zb(t) ? t : Qe(t || {});
    Ie(v, (b) => {
      u.value = cl({
        validations: b,
        state: e,
        childResults: h,
        resultsCache: p,
        globalConfig: a,
        instance: d ?? {},
        externalResults: s
      });
    }, {
      immediate: !0
    });
  }
  return d && (f.forEach((v) => v(u, {
    $registerAs: o,
    $scope: n,
    $stopPropagation: i
  })), Jr(() => m.forEach((v) => v(o)))), B(() => Dr(Dr({}, A(u.value)), h.value));
}
function Nc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Zo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Nc(Object(r), !0).forEach(function(a) {
      qb(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Nc(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function qb(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function pi(t) {
  return typeof t == "function";
}
function ul(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function Qi(t) {
  return pi(t.$validator) ? Zo({}, t) : {
    $validator: t
  };
}
function Sf(t) {
  return typeof t == "object" ? t.$valid : t;
}
function Cf(t) {
  return t.$validator || t;
}
function Ub(t, e) {
  if (!ul(t)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof t}`);
  if (!ul(e) && !pi(e)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const r = Qi(e);
  return r.$params = Zo(Zo({}, r.$params || {}), t), r;
}
function Wb(t, e) {
  if (!pi(t) && typeof A(t) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof t}`);
  if (!ul(e) && !pi(e)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const r = Qi(e);
  return r.$message = t, r;
}
function Kb(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const r = Qi(t);
  return Zo(Zo({}, r), {}, {
    $async: !0,
    $watchTargets: e
  });
}
function Yb(t) {
  return {
    $validator(e) {
      for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        a[o - 1] = arguments[o];
      return A(e).reduce((n, i, s) => {
        const l = Object.entries(i).reduce((d, c) => {
          let [u, p] = c;
          const h = t[u] || {}, f = Object.entries(h).reduce((m, v) => {
            let [b, k] = v;
            const $ = Cf(k).call(this, p, i, s, ...a), g = Sf($);
            if (m.$data[b] = $, m.$data.$invalid = !g || !!m.$data.$invalid, m.$data.$error = m.$data.$invalid, !g) {
              let w = k.$message || "";
              const x = k.$params || {};
              typeof w == "function" && (w = w({
                $pending: !1,
                $invalid: !g,
                $params: x,
                $model: p,
                $response: $
              })), m.$errors.push({
                $property: u,
                $message: w,
                $params: x,
                $response: $,
                $model: p,
                $pending: !1,
                $validator: b
              });
            }
            return {
              $valid: m.$valid && g,
              $data: m.$data,
              $errors: m.$errors
            };
          }, {
            $valid: !0,
            $data: {},
            $errors: []
          });
          return d.$data[u] = f.$data, d.$errors[u] = f.$errors, {
            $valid: d.$valid && f.$valid,
            $data: d.$data,
            $errors: d.$errors
          };
        }, {
          $valid: !0,
          $data: {},
          $errors: {}
        });
        return {
          $valid: n.$valid && l.$valid,
          $data: n.$data.concat(l.$data),
          $errors: n.$errors.concat(l.$errors)
        };
      }, {
        $valid: !0,
        $data: [],
        $errors: []
      });
    },
    $message: (e) => {
      let {
        $response: r
      } = e;
      return r ? r.$errors.map((a) => Object.values(a).map((o) => o.map((n) => n.$message)).reduce((o, n) => o.concat(n), [])) : [];
    }
  };
}
const gn = (t) => {
  if (t = A(t), Array.isArray(t)) return !!t.length;
  if (t == null)
    return !1;
  if (t === !1)
    return !0;
  if (t instanceof Date)
    return !isNaN(t.getTime());
  if (typeof t == "object") {
    for (let e in t) return !0;
    return !1;
  }
  return !!String(t).length;
}, Jb = (t) => (t = A(t), Array.isArray(t) ? t.length : typeof t == "object" ? Object.keys(t).length : String(t).length);
function Gr() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return (a) => (a = A(a), !gn(a) || e.every((o) => (o.lastIndex = 0, o.test(a))));
}
var fr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: Yb,
  len: Jb,
  normalizeValidatorObject: Qi,
  regex: Gr,
  req: gn,
  unwrap: A,
  unwrapNormalizedValidator: Cf,
  unwrapValidatorResponse: Sf,
  withAsync: Kb,
  withMessage: Wb,
  withParams: Ub
});
Gr(/^[a-zA-Z]*$/);
Gr(/^[a-zA-Z0-9]*$/);
Gr(/^\d*(\.\d+)?$/);
const Xb = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
Gr(Xb);
function Gb(t) {
  return typeof t == "string" && (t = t.trim()), gn(t);
}
var fi = {
  $validator: Gb,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function Zb(t) {
  return (e) => A(e) === A(t);
}
function Qb(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: Zb(t),
    $message: (r) => `The value must be equal to the ${e} value`,
    $params: {
      equalTo: t,
      otherName: e,
      type: "sameAs"
    }
  };
}
const ew = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
Gr(ew);
function tw(t) {
  return (e) => !gn(e) || (!/\s/.test(e) || e instanceof Date) && +e >= +A(t);
}
function Pc(t) {
  return {
    $validator: tw(t),
    $message: (e) => {
      let {
        $params: r
      } = e;
      return `The minimum value allowed is ${r.min}`;
    },
    $params: {
      min: t,
      type: "minValue"
    }
  };
}
function rw(t) {
  return (e) => !gn(e) || (!/\s/.test(e) || e instanceof Date) && +e <= +A(t);
}
var jc = (t) => ({
  $validator: rw(t),
  $message: (e) => {
    let {
      $params: r
    } = e;
    return `The maximum value allowed is ${r.max}`;
  },
  $params: {
    max: t,
    type: "maxValue"
  }
});
Gr(/(^[0-9]*$)|(^-[0-9]+$)/);
Gr(/^[-]?\d*(\.\d+)?$/);
function aw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
function ow(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function nw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" })
  ]);
}
const iw = { class: "amount-input-container" }, sw = ["disabled", "aria-label"], lw = ["id", "disabled", "aria-invalid", "aria-describedby"], dw = ["disabled", "aria-label"], cw = ["id"], uw = {
  __name: "PAmountInput",
  props: {
    /** Input ID */
    id: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Number,
      default: 1
    },
    /** Disabled state */
    disabled: {
      type: Boolean
    },
    /** Error message */
    error: {
      type: String,
      default: ""
    },
    /** Maximum value */
    max: {
      type: Number,
      default: 1e4
    },
    small: Boolean
  },
  emits: ["update:model-value"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = B({
      get() {
        return r.modelValue;
      },
      set(p) {
        d(p);
      }
    }), n = B(() => o.value === 1), i = B(() => o.value >= r.max), s = B(() => !!r.error), l = B(() => `${r.id}-error`);
    function d(p) {
      p < 0 || Number.isNaN(p) || typeof p != "number" || !p ? (Hd(o), a("update:model-value", 1)) : p > r.max ? (Hd(o), a("update:model-value", r.max)) : a("update:model-value", p);
    }
    function c() {
      d(o.value -= 1);
    }
    function u() {
      d(o.value += 1);
    }
    return (p, h) => (y(), E("div", iw, [
      z("div", {
        class: be(["amount-input", { small: t.small }])
      }, [
        z("button", {
          disabled: t.disabled || n.value,
          class: "minus",
          "aria-label": A(ie)("amount-input.minus_one"),
          onClick: Kt(c, ["stop"])
        }, [
          t.small ? (y(), W(ba, {
            key: 1,
            icon: A(ow)
          }, null, 8, ["icon"])) : (y(), W(Xt, {
            key: 0,
            icon: A(aw)
          }, null, 8, ["icon"]))
        ], 8, sw),
        qr(z("input", {
          id: t.id,
          "onUpdate:modelValue": h[0] || (h[0] = (f) => o.value = f),
          class: be([{ "has-error": t.error }, "input"]),
          disabled: t.disabled,
          "aria-label": "Amount input",
          "aria-invalid": s.value,
          "aria-describedby": s.value ? l.value : null,
          type: "number"
        }, null, 10, lw), [
          [ci, o.value]
        ]),
        z("button", {
          disabled: t.disabled || i.value,
          class: "plus",
          "aria-label": A(ie)("amount-input.plus_one"),
          onClick: Kt(u, ["stop"])
        }, [
          t.small ? (y(), W(ba, {
            key: 1,
            icon: A(nw)
          }, null, 8, ["icon"])) : (y(), W(Xt, {
            key: 0,
            icon: A(v0)
          }, null, 8, ["icon"]))
        ], 8, dw)
      ], 2),
      t.error ? (y(), E("span", {
        key: 0,
        id: l.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, J(t.error), 9, cw)) : F("", !0)
    ]));
  }
}, Of = /* @__PURE__ */ ge(uw, [["__scopeId", "data-v-4ee7c329"]]);
function pw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })
  ]);
}
function fw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const hw = ["for"], mw = { class: "label-text" }, gw = {
  variant: "text",
  size: "small"
}, vw = {
  key: 0,
  class: "optional"
}, bw = { class: "container-inner" }, ww = {
  key: 0,
  class: "inline-container-prepended"
}, yw = ["id", "placeholder", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "rows", "autofocus"], xw = ["id", "placeholder", "type", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "autofocus"], kw = { class: "inline-container-appended" }, $w = {
  key: 1,
  class: "text"
}, _w = ["id"], Sw = {
  __name: "PInput",
  props: {
    id: {
      type: String,
      required: !0
    },
    /** The input value */
    modelValue: {
      type: [String, Number, Date],
      default: ""
    },
    /** Placeholder text in input */
    placeholder: {
      type: String,
      default: ""
    },
    /** Text */
    type: {
      type: String,
      default: "text"
    },
    /** Error message */
    error: {
      type: String,
      default: ""
    },
    /** Input value is valid */
    valid: {
      type: Boolean
    },
    /** Icon to display at the start of an input */
    prependIcon: {
      type: [Function, Object],
      default: null
    },
    /** Icon to display at the end of an input */
    icon: {
      type: [Function, Object],
      default: null
    },
    /** Disabled state */
    disabled: {
      type: Boolean
    },
    /** Whether the input is readonly */
    readonly: {
      type: Boolean,
      default: !1
    },
    /** Label to display above the input */
    label: {
      type: String,
      default: ""
    },
    /** Input is required */
    required: {
      type: Boolean
    },
    /** Optional text, hidden when input is required */
    optional: {
      type: String,
      default: ""
    },
    /** Inline value, hidden when icon is used */
    inline: {
      type: String,
      default: ""
    },
    /** Textarea */
    expand: {
      type: Boolean
    },
    /** Expanded input height */
    rows: {
      type: Number,
      default: 3
    },
    /** Medium input */
    medium: Boolean,
    /** Larger input */
    large: Boolean,
    /** Whether the input should be autofocused */
    autofocus: Boolean,
    ariaLabel: {
      type: String,
      default: ""
    },
    /**
     * Custom rules for the input, consists of a validator function and an optional message
     *
     * [
     *   {
     *     validator: (value) => boolean,
     *     message: string
     *   }
     * ]
     */
    rules: {
      type: Array,
      default: () => []
    },
    hotkey: {
      type: Object,
      default: () => ({
        key: "",
        label: ""
      })
    },
    requiredMessage: {
      type: String,
      default: ""
    },
    /** Info text displayed by tooltip after the label */
    info: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(t, { expose: e, emit: r }) {
    const a = t, o = jp(), n = r, i = Er("showError", !0), s = nd()[a.hotkey.key], l = D(null), d = B(() => a.error ? pw : a.icon), c = B(() => a.optional !== "" ? a.optional : ie("input.optional")), u = B({
      get() {
        return a.modelValue;
      },
      set($) {
        n("update:modelValue", $);
      }
    }), p = B(() => a.requiredMessage ? a.requiredMessage : a.label ? ie("input.required_with_label", { label: a.label.toLowerCase() }) : ie("input.required")), h = B(() => {
      const $ = a.required ? { value: { required: fr.withMessage(() => p.value, fi) } } : { value: {} };
      return a.rules.forEach((g, w) => {
        $.value[w] = fr.withMessage(() => g.message || "", g.validator);
      }), $;
    }), f = Zi(h.value, { value: u }), m = B(() => {
      var $;
      return !a.required || a.required && !(($ = f.value) != null && $.$errors[0]);
    }), v = B(() => {
      var $, g;
      return !!a.error || ((g = ($ = f.value) == null ? void 0 : $.$errors) == null ? void 0 : g.length) > 0 || !m.value;
    }), b = B(() => `${a.id}-error`);
    function k($) {
      var g;
      n("blur", $), (g = f.value) == null || g.$touch($);
    }
    return Ie(s, ($) => {
      $ && a.hotkey && setTimeout(() => {
        l.value.focus();
      }, 100);
    }), e({
      input: l
    }), ($, g) => {
      var w, x;
      return y(), E("div", {
        class: be(["input-container", { "has-error": v.value, "is-large": t.large }]),
        tabindex: "-1",
        onFocus: g[4] || (g[4] = (S) => $.$refs.input.focus())
      }, [
        t.label ? (y(), E("label", {
          key: 0,
          class: "input-label",
          for: t.id
        }, [
          z("span", mw, [
            je(J(t.label) + " ", 1),
            t.info || A(o).info ? (y(), W(hb, {
              key: 0,
              location: "right",
              inverted: ""
            }, {
              content: G(() => [
                le($.$slots, "info", {}, () => [
                  je(J(t.info), 1)
                ], !0)
              ]),
              default: G(() => [
                z("span", gw, [
                  ee(Gi, {
                    class: "info-icon",
                    icon: A(fw)
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 3
            })) : F("", !0)
          ]),
          t.required ? F("", !0) : (y(), E("span", vw, J(c.value), 1))
        ], 8, hw)) : F("", !0),
        z("div", bw, [
          t.prependIcon ? (y(), E("div", ww, [
            ee(Xt, { icon: t.prependIcon }, null, 8, ["icon"])
          ])) : F("", !0),
          t.expand ? qr((y(), E("textarea", We({
            key: 1,
            id: t.id,
            ref_key: "input",
            ref: l,
            "onUpdate:modelValue": g[0] || (g[0] = (S) => u.value = S),
            autocomplete: "off",
            class: ["input", {
              "has-error": v.value,
              "is-valid": t.valid,
              "has-icon-prepended": t.prependIcon,
              "has-icon-appended": t.icon
            }],
            placeholder: t.placeholder,
            disabled: t.disabled,
            readonly: t.readonly,
            "aria-label": t.ariaLabel,
            "aria-invalid": v.value,
            "aria-describedby": v.value ? b.value : null,
            rows: t.rows,
            autofocus: t.autofocus
          }, $.$attrs, {
            onFocus: g[1] || (g[1] = (S) => n("focus", S)),
            onBlur: k
          }), null, 16, yw)), [
            [ci, u.value]
          ]) : qr((y(), E("input", We({
            key: 2,
            id: t.id,
            ref_key: "input",
            ref: l,
            "onUpdate:modelValue": g[2] || (g[2] = (S) => u.value = S),
            autocomplete: "off",
            class: ["input", {
              "has-error": v.value,
              "is-valid": t.valid,
              medium: t.medium,
              large: t.large,
              "has-icon-prepended": t.prependIcon,
              "has-icon-appended": t.icon,
              "has-inline-text": t.inline
            }],
            placeholder: t.placeholder,
            type: t.type,
            disabled: t.disabled,
            readonly: t.readonly,
            "aria-label": t.ariaLabel,
            "aria-invalid": v.value,
            "aria-describedby": v.value ? b.value : null,
            autofocus: t.autofocus
          }, $.$attrs, {
            onFocus: g[3] || (g[3] = (S) => n("focus", S)),
            onBlur: k
          }), null, 16, xw)), [
            [l0, u.value]
          ]),
          z("div", kw, [
            le($.$slots, "inline", {}, () => [
              t.icon ? (y(), W(Xt, {
                key: 0,
                icon: d.value,
                class: be({ "has-error": v.value })
              }, null, 8, ["icon", "class"])) : F("", !0),
              t.inline ? (y(), E("span", $w, J(t.inline), 1)) : F("", !0),
              t.hotkey.label ? (y(), W(id, {
                key: 2,
                hotkey: t.hotkey.label,
                variant: "secondary"
              }, null, 8, ["hotkey"])) : F("", !0)
            ], !0)
          ])
        ]),
        v.value && A(i) ? (y(), E("span", {
          key: 1,
          id: b.value,
          class: "error",
          "aria-live": "assertive",
          role: "alert"
        }, J((x = (w = A(f).value) == null ? void 0 : w.$errors[0]) != null && x.$message ? A(f).value.$errors[0].$message : t.error), 9, _w)) : F("", !0)
      ], 34);
    };
  }
}, to = /* @__PURE__ */ ge(Sw, [["__scopeId", "data-v-4e9957d5"]]);
function Cw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
const Ow = {
  __name: "PStepStatus",
  props: {
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    }
  },
  setup(t) {
    const e = t, r = B(() => {
      switch (e.status) {
        case "done":
          return sd;
        case "attention":
          return Cw;
        default:
          return null;
      }
    });
    return (a, o) => (y(), E("div", {
      class: be(["status", t.status])
    }, [
      ee(Gi, { icon: r.value }, null, 8, ["icon"])
    ], 2));
  }
}, Ef = /* @__PURE__ */ ge(Ow, [["__scopeId", "data-v-d67354bd"]]);
function Ew(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Mw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Tw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Aw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Iw = ["data-testid"], zw = { class: "icon" }, Nw = { class: "content" }, Pw = { class: "title" }, jw = {
  key: 0,
  class: "description"
}, Vw = {
  __name: "PAlert",
  props: {
    /** error | warning | success | info */
    type: {
      type: String,
      required: !0
    },
    /** Icon displayed next to title */
    icon: {
      type: Function,
      default: null
    },
    /** The alert title */
    title: {
      type: String,
      required: !0
    },
    /** Alert description */
    description: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, r = B(() => e.icon ? e.icon : e.type === "error" ? Mw : e.type === "warning" ? Tw : e.type === "success" ? Ew : e.type === "info" ? Aw : null);
    return (a, o) => (y(), E("div", {
      class: be(["alert", t.type]),
      "data-testid": `alert-${t.type}`
    }, [
      le(a.$slots, "default", {}, () => [
        z("div", zw, [
          ee(ba, { icon: r.value }, null, 8, ["icon"])
        ]),
        z("div", Nw, [
          z("span", Pw, J(t.title), 1),
          t.description ? (y(), E("span", jw, J(t.description), 1)) : F("", !0)
        ])
      ], !0)
    ], 10, Iw));
  }
}, hi = /* @__PURE__ */ ge(Vw, [["__scopeId", "data-v-d4c64a42"]]), Rw = ["id"], Dw = { class: "header" }, Lw = {
  class: "title",
  part: "step-title"
}, Bw = {
  key: 1,
  class: "separator"
}, Fw = {
  key: 0,
  class: "subtitle status-text",
  part: "step-subtitle"
}, Hw = {
  key: 1,
  class: "total",
  part: "step-subtitle"
}, qw = {
  key: 0,
  class: "content"
}, Uw = {
  __name: "PSimpleStep",
  props: {
    /** Title in the step header */
    title: {
      type: [String, Number],
      default: ""
    },
    /** Accessible title for screen readers */
    ariaTitle: {
      type: String,
      default: ""
    },
    /** Disable accordion item */
    disabled: Boolean,
    /** Configurator step code */
    code: {
      type: String,
      default: ""
    },
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    },
    /** Prefix text for the total */
    totalPrefix: {
      type: String,
      default: ""
    },
    /** Text for when there are issues with the step */
    attentionText: {
      type: String,
      default: ""
    },
    /** For displaying extra info that needs te attention of the user */
    alert: {
      type: Object,
      default: () => {
      }
    },
    modelValue: {
      type: Object,
      default: () => {
      }
    },
    /** Options, controls to use in the step */
    /** ex for amount / measurement */
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "update:focus"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D({}), n = Qe({
      width: null,
      height: null
    }), i = D(null), s = B(() => {
      const v = r.options.find((w) => w.code === "width"), b = r.options.find((w) => w.code === "height"), k = v && v.reversible && b && b.reversible, $ = v == null ? void 0 : v.min, g = b == null ? void 0 : b.min;
      return k ? Math.min($, g) : { width: $, height: g };
    }), l = B(() => {
      const v = r.options.find((w) => w.code === "width"), b = r.options.find((w) => w.code === "height"), k = v && v.reversible && b && b.reversible, $ = v == null ? void 0 : v.max, g = b == null ? void 0 : b.max;
      return k ? Math.max($, g) : { width: $, height: g };
    }), d = {
      width: {
        minValue: fr.withMessage(
          ie("step.min_value", {
            minValue: typeof s.value == "number" ? s.value : s.value.width
          }),
          Pc(typeof s.value == "number" ? s.value : s.value.width)
        ),
        required: fr.withMessage(ie("step.required"), fi),
        maxValue: fr.withMessage(
          ie("step.max_value", {
            maxValue: typeof l.value == "number" ? l.value : l.value.width
          }),
          jc(typeof l.value == "number" ? l.value : l.value.width)
        )
      },
      height: {
        minValue: fr.withMessage(
          ie("step.min_value", {
            minValue: typeof s.value == "number" ? s.value : s.value.height
          }),
          Pc(typeof s.value == "number" ? s.value : s.value.height)
        ),
        required: fr.withMessage(ie("step.required"), fi),
        maxValue: fr.withMessage(
          ie("step.max_value", {
            maxValue: typeof l.value == "number" ? l.value : l.value.height
          }),
          jc(typeof l.value == "number" ? l.value : l.value.height)
        )
      }
    }, c = Zi(d, n), u = D(null);
    function p(v, b) {
      if (v && b && (!c.$errors || c.$errors.length === 0)) {
        const k = v * b / 1e4;
        i.value = Number(k.toFixed(2)), o.value = [
          { code: "width", value: v },
          { code: "height", value: b }
        ];
      }
    }
    function h() {
      n.width && n.height && (!r.modelValue || r.modelValue[0].value !== n.width || r.modelValue[1].value !== n.height) && (!c.value.$errors || c.value.$errors.length === 0) && a("update:modelValue", o.value);
    }
    function f() {
      var v, b;
      const k = (v = u.value) == null ? void 0 : v.getElementsByClassName("input");
      (b = k == null ? void 0 : k[0]) == null || b.focus();
    }
    function m(v) {
      setTimeout(() => {
        a("update:focus", v);
      }, 200);
    }
    return Ie(
      () => ({ ...o.value }),
      (v, b) => {
        var k;
        const $ = v;
        $.code = r.code, b.value !== v.value && (v.value !== ((k = r.modelValue) == null ? void 0 : k.value) || !r.modelValue) && a("update:modelValue", $);
      }
    ), _t(() => {
      var v, b, k, $;
      f(), (v = r.modelValue) != null && v.length ? (n.width = (b = r.modelValue.find((g) => g.code === "width")) == null ? void 0 : b.value, n.height = (k = r.modelValue.find((g) => g.code === "height")) == null ? void 0 : k.value) : r.modelValue && r.modelValue.code === r.code && (o.value.value = (($ = r.modelValue) == null ? void 0 : $.value) || 1);
    }), Ie(
      () => r.modelValue,
      (v) => {
        var b, k;
        v != null && v.length ? (n.width = (b = v.find(($) => $.code === "width")) == null ? void 0 : b.value, n.height = (k = v.find(($) => $.code === "height")) == null ? void 0 : k.value, c.value.$touch()) : r.modelValue && r.modelValue.code === r.code && (o.value.value = (v == null ? void 0 : v.value) || 1);
      },
      { immediate: !0 }
    ), (v, b) => (y(), E("div", {
      id: "accordion-header-" + t.ariaTitle,
      class: be(["configurator-step simple", { disabled: t.disabled }]),
      part: "step"
    }, [
      z("div", Dw, [
        ee(Ef, { status: t.status }, null, 8, ["status"]),
        z("div", {
          ref_key: "inner",
          ref: u,
          class: "inner"
        }, [
          z("h3", Lw, J(t.title), 1),
          z("div", {
            class: be(["measurement-inputs", { "has-errors": A(c).$errors && A(c).$errors.length }])
          }, [
            (y(!0), E(ke, null, Ze(t.options, (k, $) => {
              var g;
              return y(), E(ke, { key: $ }, [
                k.code === "width" || k.code === "height" ? (y(), W(to, {
                  key: 0,
                  id: `measurement-input-${k.code}`,
                  modelValue: n[k.code],
                  "onUpdate:modelValue": [
                    (w) => n[k.code] = w,
                    b[0] || (b[0] = (w) => p(n.width, n.height))
                  ],
                  required: "",
                  type: "number",
                  "aria-label": k.code,
                  class: "measurement-input",
                  inline: k.unit,
                  min: k.min,
                  max: k.max,
                  placeholder: "",
                  error: A(c)[k.code].$errors ? (g = A(c)[k.code].$errors[0]) == null ? void 0 : g.$message : "",
                  onBlur: (w) => {
                    A(c)[k.code].$touch(w), h(), m(!1);
                  },
                  onKeyup: Et((w) => {
                    A(c)[k.code].$touch(w), h();
                  }, ["enter"]),
                  onFocus: b[1] || (b[1] = (w) => m(!0))
                }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "error", "onBlur", "onKeyup"])) : F("", !0),
                k.code === "width" ? (y(), E("span", Bw, " x ")) : k.code === "amount" ? (y(), W(Of, {
                  key: 2,
                  modelValue: o.value.value,
                  "onUpdate:modelValue": b[2] || (b[2] = (w) => o.value.value = w),
                  min: k.min,
                  max: k.max || void 0,
                  onKeyup: b[3] || (b[3] = Et((w) => !t.modelValue || Number(w.target.value) !== t.modelValue.value ? a("update:modelValue", { value: Number(w.target.value), code: "amount" }) : "", ["enter"])),
                  onBlur: b[4] || (b[4] = (w) => m(!1)),
                  onFocus: b[5] || (b[5] = (w) => m(!0))
                }, null, 8, ["modelValue", "min", "max"])) : F("", !0)
              ], 64);
            }), 128))
          ], 2)
        ], 512),
        t.status === "attention" ? (y(), E("span", Fw, J(t.attentionText), 1)) : F("", !0),
        i.value ? (y(), E("span", Hw, J(t.totalPrefix || A(ie)("step.total")) + ": " + J(i.value) + " m² ", 1)) : F("", !0)
      ]),
      t.alert ? (y(), E("div", qw, [
        ee(hi, Ca(fn(t.alert)), null, 16)
      ])) : F("", !0)
    ], 10, Rw));
  }
}, Ww = /* @__PURE__ */ ge(Uw, [["__scopeId", "data-v-10575098"]]);
function Kw(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
    })
  ]);
}
const Yw = {
  __name: "PLabel",
  props: {
    /** Small version */
    small: Boolean,
    /** Color of background and text */
    color: {
      type: String,
      default: "red"
    },
    /** Rounded alternative version, with border and a lighter background */
    alt: Boolean
  },
  setup(t) {
    return (e, r) => (y(), E("span", {
      class: be(["label", [{ small: t.small }, { alt: t.alt }, t.color]])
    }, [
      le(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, dd = /* @__PURE__ */ ge(Yw, [["__scopeId", "data-v-05b4dc0c"]]), Jw = ["srcset"], Xw = ["srcset"], Gw = ["src", "alt", "height", "width"], Zw = {
  __name: "PImage",
  props: {
    /** Base image, desktop */
    image: {
      type: String,
      required: !0
    },
    /** Image to be shown on tablets */
    tablet: {
      type: String,
      default: ""
    },
    /** Image to be shown on mobile */
    mobile: {
      type: String,
      default: ""
    },
    /** The image alt, describes the image for screen readers */
    alt: {
      type: String,
      required: !0
    },
    /** Rounded corners, accepted values: 4 | 8 | 16 (px) | 100 (%) */
    rounded: {
      type: [Number],
      default: null
    },
    /** The image width, needed for skeleton and lazy loading */
    width: {
      type: [String, Number],
      default: ""
    },
    /** The image height, needed for skeleton and lazy loading */
    height: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["error"],
  setup(t, { emit: e }) {
    const r = e, a = t, o = D(!1);
    function n(s) {
      o.value = !0, r("error", s);
    }
    const i = B(() => a.image);
    return Ie(i, () => {
      o.value = !1;
    }), (s, l) => (y(), E("picture", {
      class: "image-wrapper",
      style: Jt({ width: `${t.width}px`, height: `${t.height}px` })
    }, [
      z("source", {
        media: "(max-width: 640px)",
        srcset: t.mobile
      }, null, 8, Jw),
      z("source", {
        media: "(max-width: 1024px)",
        srcset: t.tablet
      }, null, 8, Xw),
      t.image && !o.value ? (y(), E("img", {
        key: 0,
        loading: "lazy",
        class: be(["image", t.rounded ? `rounded-${t.rounded}` : ""]),
        src: t.image,
        alt: t.alt,
        height: t.height,
        width: t.width,
        onError: n
      }, null, 42, Gw)) : (y(), E("div", {
        key: 1,
        class: be(["skeleton", t.rounded ? `rounded-${t.rounded}` : ""])
      }, null, 2))
    ], 4));
  }
}, Mf = /* @__PURE__ */ ge(Zw, [["__scopeId", "data-v-ef69e0e6"]]), Qw = {
  key: 0,
  class: "amount"
}, e1 = {
  key: 1,
  class: "labels"
}, t1 = {
  __name: "POptionCardHeader",
  props: {
    selected: Boolean,
    /** The product image */
    image: {
      type: String,
      default: ""
    },
    /** Amount to display in the amount input */
    amount: {
      type: Number,
      default: 0
    },
    /** The label above the amount input */
    amountLabel: {
      type: String,
      default: ""
    },
    editAmount: Boolean,
    /** Label(s) displayed on top of image */
    labels: {
      type: Array,
      default: () => []
    },
    /** Title for alt image */
    title: {
      type: String,
      default: ""
    }
  },
  emits: ["update:amount"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = B({
      get: () => r.amount,
      set: (n) => {
        a("update:amount", n);
      }
    });
    return (n, i) => (y(), E(ke, null, [
      t.selected && t.editAmount ? (y(), E("div", Qw, [
        z("span", null, J(t.amountLabel), 1),
        ee(Of, {
          modelValue: o.value,
          "onUpdate:modelValue": i[0] || (i[0] = (s) => o.value = s),
          onClick: i[1] || (i[1] = Kt(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : F("", !0),
      t.labels.length && !t.editAmount ? (y(), E("div", e1, [
        (y(!0), E(ke, null, Ze(t.labels, (s, l) => (y(), E(ke, { key: l }, [
          s.text ? (y(), W(dd, {
            key: 0,
            color: s.color,
            small: ""
          }, {
            default: G(() => [
              je(J(s.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : F("", !0)
        ], 64))), 128))
      ])) : F("", !0),
      t.image && !t.editAmount ? (y(), W(Mf, {
        key: 2,
        image: t.image,
        alt: `${t.title} ${A(ie)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : F("", !0)
    ], 64));
  }
}, r1 = /* @__PURE__ */ ge(t1, [["__scopeId", "data-v-a1b01f53"]]);
function a1(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function o1(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
const n1 = {
  key: 0,
  class: "not-available"
}, i1 = {
  key: 1,
  class: "custom-value"
}, s1 = {
  key: 2,
  class: "information"
}, l1 = {
  key: 0,
  class: "delivery"
}, d1 = { class: "delivery-time" }, c1 = {
  key: 1,
  class: "price"
}, u1 = {
  key: 0,
  class: "price-per"
}, p1 = {
  __name: "POptionCardFooter",
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    /** price per m2 / unit, unit translation key: (global.perUnit) */
    pricePer: {
      type: String,
      default: "m2"
    },
    deliveryTime: {
      type: Number,
      default: 0
    },
    /** Default translation key: global.days */
    deliveryTimeText: {
      type: String,
      default: ""
    },
    /** Input for when a custom measurements need to be set */
    customInput: {
      type: Object,
      default: () => ({ unit: "", value: 0, buttonText: "" })
    },
    disabled: Boolean,
    /** Text to be displayed if the card is disabled/ item is unavailable */
    notAvailableMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:customValue"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D(r.customInput.value), n = B({
      get: () => r.customInput.value,
      set: (s) => {
        o.value = Number(s);
      }
    });
    function i() {
      o.value && o.value > 0 && a("update:customValue", o.value);
    }
    return (s, l) => t.disabled && t.notAvailableMessage ? (y(), E("div", n1, [
      ee(Gi, { icon: A(a1) }, null, 8, ["icon"]),
      z("span", null, J(t.notAvailableMessage), 1)
    ])) : t.customInput.value && t.customInput.unit && !t.disabled && !t.notAvailableMessage ? (y(), E("div", i1, [
      ee(to, {
        id: "custom-value",
        modelValue: n.value,
        "onUpdate:modelValue": l[0] || (l[0] = (d) => n.value = d),
        inline: t.customInput.unit,
        required: "",
        "data-testid": "custom-value-input",
        "aria-label": A(ie)("option.custom_value")
      }, null, 8, ["modelValue", "inline", "aria-label"]),
      ee(Je, {
        variant: "primary",
        "data-testid": "custom-value-submit",
        onClick: Kt(i, ["stop"])
      }, {
        default: G(() => [
          je(J(t.customInput.buttonText || A(ie)("option.continue")), 1)
        ]),
        _: 1
      })
    ])) : (y(), E("div", s1, [
      t.deliveryTime ? (y(), E("span", l1, [
        ee(Xt, { icon: A(o1) }, null, 8, ["icon"]),
        z("span", d1, J(t.deliveryTimeText), 1)
      ])) : F("", !0),
      t.price ? (y(), E("span", c1, [
        je(" € " + J(t.price) + " ", 1),
        t.pricePer ? (y(), E("span", u1, " / " + J(t.pricePer), 1)) : F("", !0)
      ])) : F("", !0)
    ]));
  }
}, f1 = /* @__PURE__ */ ge(p1, [["__scopeId", "data-v-0c62bb25"]]), h1 = ["tabindex", "aria-current", "part", "aria-disabled"], m1 = {
  key: 0,
  class: "no-option"
}, g1 = {
  key: 1,
  class: "inner"
}, v1 = { class: "header" }, b1 = { class: "content" }, w1 = {
  key: 0,
  class: "title",
  part: "option-title"
}, y1 = {
  class: "description",
  part: "option-description"
}, x1 = { class: "footer" }, k1 = {
  __name: "POptionCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Displayed in days bottom left */
    deliveryTime: {
      type: Number,
      default: 0
    },
    /** Displayed bottom right */
    price: {
      type: [Number, String],
      default: 0
    },
    /** price per m2 | meter | unit, unit translation key: (global.perUnit) */
    pricePer: {
      type: String,
      default: "m2"
    },
    /** Days, weeks, etc */
    deliveryTimeText: {
      type: String,
      default: ""
    },
    /** Label(s) displayed on top of image.
    Expects array with objects containing text and color */
    labels: {
      type: Array,
      default: () => []
    },
    /** Selected state */
    modelValue: {
      type: Boolean
    },
    /** The product image */
    image: {
      type: String,
      default: ""
    },
    disabled: Boolean,
    /** Product amount, must be > 0 to be editable */
    amount: {
      type: Number,
      default: 0
    },
    /** The label above the input */
    amountLabel: {
      type: String,
      default: ""
    },
    /** Input for when a custom measurements need to be set */
    customInput: {
      type: Object,
      default: () => ({ unit: "", value: 0 })
    },
    /** Empty option, when something needs to be selected to continue */
    noOption: Boolean,
    /** Text to be displayed in empty option */
    noOptionText: {
      type: String,
      default: ""
    },
    /** Text to be displayed if the card is disabled/ item is unavailable */
    notAvailableMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "update:amount", "update:customValue"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D(!1), n = B(() => r.deliveryTimeText !== "" ? `${r.deliveryTime} ${r.deliveryTimeText}` : xb("option.days", r.deliveryTime)), i = B(() => {
      switch (r.pricePer) {
        case "unit":
          return ie("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), s = B({
      get: () => r.modelValue,
      set: (f) => {
        r.customInput.value || a("update:modelValue", f);
      }
    }), l = B({
      get: () => r.amount,
      set: (f) => {
        a("update:amount", f);
      }
    }), d = B(() => r.amountLabel ? r.amountLabel : ie("option.amount")), c = B(() => typeof l.value == "number" && l.value > 0);
    function u(f) {
      r.disabled || (s.value = r.customInput.value && !f || !s.value, o.value = c.value ? !o.value : !1, f && a("update:customValue", f));
    }
    function p(f, m) {
      let v = null;
      m === "left" && f ? v = f.previousElementSibling : m === "right" && f && (v = f.nextElementSibling);
      const b = v == null ? void 0 : v.querySelector(".header");
      if (v && !b.disabled) {
        b.click();
        let k = null;
        const $ = v.querySelector("input");
        setTimeout(() => {
          k = v.querySelector(".option-card"), k && !k.classList.contains("disabled") ? k.focus() : $ && $.focus();
        }, 50);
      } else v && p(v, m);
    }
    function h(f, m) {
      var v, b, k, $;
      const g = f.currentTarget.parentElement;
      if (m === "left") {
        const w = (v = g.previousElementSibling) == null ? void 0 : v.querySelector(".option-card"), x = (b = g.previousElementSibling) == null ? void 0 : b.querySelector(".overlay");
        w ? w.classList.contains("disabled") ? h({ currentTarget: w }, "left") : x ? x.click() : w.focus() : p(g.closest(".accordion-item"), "left");
      } else if (m === "right") {
        const w = (k = g.nextElementSibling) == null ? void 0 : k.querySelector(".option-card"), x = ($ = g.nextElementSibling) == null ? void 0 : $.querySelector(".overlay");
        w ? w.classList.contains("disabled") ? h({ currentTarget: w }, "right") : x ? x.click() : w.focus() : p(g.closest(".accordion-item"), "right");
      }
    }
    return _t(() => {
      r.amount > 0 && r.modelValue && (o.value = !0);
    }), Ie(
      () => r.amount,
      (f, m) => {
        !m && f && (o.value = !0);
      }
    ), Ie(
      () => r.modelValue,
      () => {
        r.amount && (o.value = !!r.modelValue);
      }
    ), (f, m) => (y(), E("article", {
      class: be(["option-card", { selected: s.value, disabled: t.disabled }]),
      tabindex: t.disabled ? -1 : 0,
      "aria-current": s.value,
      "data-testid": "option",
      part: `option ${s.value ? "option-selected" : ""}`,
      "aria-disabled": t.disabled,
      onClick: m[2] || (m[2] = (v) => t.customInput.value ? null : u()),
      onKeyup: [
        m[3] || (m[3] = Et((v) => t.customInput.value ? null : u(), ["enter"])),
        m[4] || (m[4] = Et((v) => h(v, "left"), ["arrow-left"])),
        m[5] || (m[5] = Et((v) => h(v, "right"), ["arrow-right"])),
        m[6] || (m[6] = Et((v) => h(v, "up"), ["arrow-up"]))
      ]
    }, [
      t.noOption ? (y(), E("div", m1, [
        ee(Xt, { icon: A(Kw) }, null, 8, ["icon"]),
        z("h3", null, J(t.noOptionText), 1)
      ])) : (y(), E("div", g1, [
        z("header", v1, [
          le(f.$slots, "header", {}, () => [
            ee(r1, {
              selected: s.value,
              "amount-label": d.value,
              image: t.image,
              "edit-amount": o.value,
              amount: l.value,
              labels: t.labels,
              title: t.title,
              "onUpdate:amount": m[0] || (m[0] = (v) => a("update:amount", v))
            }, null, 8, ["selected", "amount-label", "image", "edit-amount", "amount", "labels", "title"])
          ], !0)
        ]),
        z("div", b1, [
          le(f.$slots, "content", {}, () => [
            t.title ? (y(), E("h3", w1, J(t.title), 1)) : F("", !0),
            z("p", y1, J(t.description), 1)
          ], !0)
        ]),
        z("footer", x1, [
          le(f.$slots, "footer", {}, () => [
            ee(f1, {
              "delivery-time": t.deliveryTime,
              price: t.price,
              "price-per": i.value,
              "delivery-time-text": n.value,
              "custom-input": t.customInput,
              disabled: t.disabled,
              "not-available-message": t.notAvailableMessage,
              "onUpdate:customValue": m[1] || (m[1] = (v) => u(v))
            }, null, 8, ["delivery-time", "price", "price-per", "delivery-time-text", "custom-input", "disabled", "not-available-message"])
          ], !0)
        ])
      ]))
    ], 42, h1));
  }
}, $1 = /* @__PURE__ */ ge(k1, [["__scopeId", "data-v-ba1132f5"]]), _1 = {
  __name: "POverlay",
  props: {
    /** 0 - 100, see https://tailwindcss.com/docs/opacity */
    opacity: {
      type: Number,
      default: 50
    },
    /** rgb color (0,0,0) */
    color: {
      type: String,
      default: "10,10,10"
    },
    /** Whether the overlay is fixed positioned */
    fixed: Boolean
  },
  setup(t) {
    const e = t;
    return _t(() => {
      e.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), un(() => {
      e.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (r, a) => (y(), E("div", {
      class: be(["overlay", { fixed: t.fixed }]),
      style: Jt({ background: `rgba(${t.color}, ${t.opacity / 100})` })
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, S1 = /* @__PURE__ */ ge(_1, [["__scopeId", "data-v-f7fd00c0"]]), C1 = {
  class: "title",
  part: "step-title"
}, O1 = {
  key: 0,
  class: "subtitle",
  part: "step-subtitle"
}, E1 = {
  key: 1,
  class: "subtitle",
  part: "step-subtitle"
}, M1 = {
  __name: "POptionStep",
  props: {
    /** Title in the step header */
    title: {
      type: [String, Number],
      default: ""
    },
    /** Subtitle, next to title */
    subtitle: {
      type: [String, Number],
      default: ""
    },
    /** Accessible title for screen readers */
    ariaTitle: {
      type: String,
      default: ""
    },
    /** Disable accordion item */
    disabled: Boolean,
    /** Step status: editing | done | attention */
    status: {
      type: String,
      default: "editing"
    },
    /** Options to choose from in step */
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => {
      }
    },
    open: Boolean,
    /** Text displayed when a step needs the users attention */
    attentionText: {
      type: String,
      default: ""
    },
    /** Option for selecting multiple options */
    multiple: Boolean,
    /** If code is accessories, amounts can be set on options */
    code: {
      type: String,
      default: ""
    },
    /** For displaying extra info that needs te attention of the user */
    alert: {
      type: Object,
      default: () => {
      }
    },
    /** Unavailable options */
    unvailableText: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "update:accordionState"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D(!1), n = D([]), i = D([]), s = D([]), l = B({
      get: () => r.open,
      set: (v) => {
        a("update:accordionState", v);
      }
    }), d = B(() => i.value.map((v, b) => {
      if (!v)
        return null;
      if (r.options[b] && r.options[b].noOption)
        return r.options[b].noOptionText;
      let k = "";
      return s.value[b] && (k += `${s.value[b]}x `), k += r.options[b].title, k;
    }).filter((v) => !!v).join(", ")), c = D(null);
    function u(v) {
      r.multiple || (n.value = []), (n.value.length === 0 || n.value.some((k) => k.code === r.options[v].code) === !1) && n.value.push({ code: r.options[v].code, value: s.value[v] }), i.value[v] = !i.value[v];
      const b = n.value.findIndex((k) => k.code === "no-option");
      if (b > -1 && r.options[v].noOption)
        i.value.forEach((k, $) => {
          $ !== v && (i.value[$] = !1);
        }), n.value = n.value.filter((k) => k.code === "no-option");
      else if (!r.options[v].noOption) {
        const k = r.options.findIndex(($) => $.noOption);
        k > -1 && (i.value[k] = !1), b > -1 ? n.value.splice(b, 1) : i.value[v] === !1 && n.value.some(($) => $.code === r.options[v].code) && (n.value = n.value.filter(($) => $.code !== r.options[v].code));
      }
      a("update:modelValue", n.value);
    }
    function p() {
      r.options.forEach((v) => {
        var b;
        !v.noOption && v.code === ((b = r.modelValue) == null ? void 0 : b.code) || Array.isArray(r.modelValue) && r.modelValue.some((k) => k.code === v.code) ? i.value.push(!0) : i.value.push(!1);
      }), r.code === "accessories" && r.options.forEach((v) => {
        if (Array.isArray(r.modelValue)) {
          const b = r.modelValue.find((k) => k.code === v.code);
          b ? s.value.push(b.value || v.amount || 1) : s.value.push(v.amount || 1), b && s.value.length > 3 && (o.value = !0);
        } else
          s.value.push(v.amount || 1);
      });
    }
    function h(v) {
      return r.code === "accessories" && v > 3 && !o.value;
    }
    function f(v, b) {
      s.value[v] = b;
      const k = n.value.filter((g) => g.code !== r.options[v].code), $ = { code: r.options[v].code, value: b };
      n.value = [...k, $], a("update:modelValue", n.value);
    }
    function m() {
      setTimeout(() => {
        var v;
        (v = c.value) != null && v.length && c.value[0].$el.focus();
      }, 500);
    }
    return p(), Ie(
      () => r.modelValue,
      () => {
        m(), i.value = [], s.value = [], p();
      }
    ), Ie(
      () => r.open,
      () => {
        r.open && m();
      },
      { immediate: !0 }
    ), (v, b) => (y(), W(yf, {
      modelValue: l.value,
      "onUpdate:modelValue": b[2] || (b[2] = (k) => l.value = k),
      class: "configurator-step options",
      "aria-title": t.ariaTitle,
      "scroll-into-view": "",
      part: "step",
      exportparts: "state-indicator-icon"
    }, {
      header: G(() => [
        ee(Ef, { status: t.status }, null, 8, ["status"]),
        z("h3", C1, J(t.title), 1),
        t.status === "attention" ? (y(), E("span", O1, J(t.attentionText || A(ie)("option.attention")), 1)) : F("", !0),
        d.value ? (y(), E("span", E1, J(d.value), 1)) : F("", !0)
      ]),
      default: G(() => [
        z("div", null, [
          z("div", {
            class: be(["option-container", {
              "show-all": t.code === "accessories" && o.value || t.code !== "accessories"
            }])
          }, [
            (y(!0), E(ke, null, Ze(t.options, (k, $) => (y(), E("div", {
              key: $,
              class: be(["option", { hide: h($) }])
            }, [
              $ === 3 && !o.value && t.code === "accessories" ? (y(), W(S1, {
                key: 0,
                tabindex: "0",
                onClick: b[0] || (b[0] = Kt((g) => o.value = !0, ["stop"])),
                onKeyup: b[1] || (b[1] = Et(Kt((g) => o.value = !0, ["stop"]), ["enter"]))
              }, {
                default: G(() => [
                  je(" +" + J(t.options.length - 3), 1)
                ]),
                _: 1
              })) : F("", !0),
              ee($1, We({
                ref_for: !0,
                ref_key: "optionCards",
                ref: c
              }, k, {
                disabled: k.available === !1 || t.disabled,
                "not-available-message": k.available === !1 ? t.unvailableText || A(ie)("option.unavailable") : "",
                "model-value": i.value[$],
                amount: t.code === "accessories" && !k.noOption ? s.value[$] : void 0,
                exportparts: "option option-title option-description",
                "onUpdate:amount": (g) => f($, g),
                "onUpdate:customValue": (g) => f($, g),
                "onUpdate:modelValue": (g) => u($)
              }), null, 16, ["disabled", "not-available-message", "model-value", "amount", "onUpdate:amount", "onUpdate:customValue", "onUpdate:modelValue"])
            ], 2))), 128))
          ], 2),
          t.alert ? (y(), W(hi, Ca(We({ key: 0 }, t.alert)), null, 16)) : F("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "aria-title"]));
  }
}, T1 = /* @__PURE__ */ ge(M1, [["__scopeId", "data-v-0f1bc03e"]]), A1 = {
  class: "delivery-options",
  part: "delivery-step"
}, I1 = { class: "header" }, z1 = {
  class: "title",
  part: "delivery-step-title"
}, N1 = {
  class: "hint",
  part: "delivery-step-subtitle"
}, P1 = { class: "content" }, j1 = {
  class: "day",
  part: "delivery-option-day"
}, V1 = {
  class: "date",
  part: "delivery-option-date"
}, R1 = {
  key: 0,
  class: "cost",
  part: "delivery-option-cost"
}, D1 = {
  key: 1,
  class: "no-cost",
  part: "delivery-option-no-cost"
}, L1 = {
  __name: "PDeliveryOptions",
  props: {
    /** List of delivery options */
    items: {
      type: Array,
      default: () => []
    },
    /** Title text */
    title: {
      type: String,
      default: ""
    },
    /** No cost text */
    noCostText: {
      type: String,
      default: ""
    },
    /** Make your choice text */
    makeYourChoice: {
      type: String,
      default: ""
    },
    /** See all dates button */
    buttonTextShow: {
      type: String,
      default: ""
    },
    /** See less dates button */
    buttonTextHide: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, r = D(!1), a = B(() => e.title ? e.title : ie("delivery.delivery_options")), o = B(() => e.noCost ? e.noCost : ie("delivery.no_extra_cost")), n = B(
      () => e.makeYourChoice ? e.makeYourChoice : ie("delivery.make_your_choice_next_step")
    ), i = B(() => e.buttonTextShow ? e.buttonTextShow : ie("delivery.see_more")), s = B(() => e.buttonTextHide ? e.buttonTextHide : ie("delivery.see_less"));
    function l() {
      window.innerWidth >= 768 ? r.value = !0 : window.innerWidth < 768 && (r.value = !1);
    }
    return At(() => {
      window.addEventListener("resize", l);
    }), Jr(() => {
      window.removeEventListener("resize", l);
    }), l(), (d, c) => (y(), E("div", A1, [
      z("div", I1, [
        z("h2", z1, J(a.value), 1),
        z("span", N1, [
          c[1] || (c[1] = z("span", { class: "align-sub" }, "*", -1)),
          je(" " + J(n.value), 1)
        ])
      ]),
      z("div", P1, [
        (y(!0), E(ke, null, Ze(t.items, (u, p) => (y(), E("div", {
          key: p,
          class: be(["option", {
            hide: p > 0 && !r.value && !u.cheapest,
            last: p === 1 && !r.value || p === t.items.length - 1 || p > 1 && u.cheapest && !r.value
          }]),
          part: "delivery-option"
        }, [
          z("span", j1, [
            je(J(u.day) + " ", 1),
            u.label ? (y(), W(dd, {
              key: 0,
              color: u.label.color,
              small: ""
            }, {
              default: G(() => [
                je(J(u.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : F("", !0)
          ]),
          z("span", V1, J(u.date), 1),
          u.cost ? (y(), E("span", R1, " + € " + J(u.cost), 1)) : (y(), E("span", D1, J(o.value), 1))
        ], 2))), 128)),
        ee(Je, {
          variant: "tertiary",
          onClick: c[0] || (c[0] = (u) => r.value = !r.value)
        }, {
          default: G(() => [
            je(J(r.value ? s.value : i.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}, B1 = /* @__PURE__ */ ge(L1, [["__scopeId", "data-v-5e507fbf"]]), F1 = {
  class: "configurator",
  "data-testid": "product-configurator",
  part: "configurator"
}, H1 = {
  __name: "PConfigurator",
  props: {
    /** List of steps in the configurator */
    template: {
      type: Array,
      default: () => []
    },
    /** List of delivery options */
    deliveryOptions: {
      type: Array,
      default: () => []
    },
    accordionState: {
      type: Array,
      default: () => []
    },
    productCode: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Object,
      default() {
        return { options: [] };
      }
    },
    loading: Boolean
  },
  emits: ["update:modelValue", "update:accordionState"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = D(!1), n = B(() => r.modelValue), i = B({
      get: () => r.accordionState,
      set: (d) => {
        a("update:accordionState", d);
      }
    });
    function s(d, c) {
      i.value[c] = d, i.value.forEach((u, p) => {
        p !== c && (i.value[p] = !1);
      });
    }
    function l(d, c) {
      n.value.options[c] = d, a("update:modelValue", { code: r.productCode, ...n.value });
    }
    return (d, c) => (y(), E("div", F1, [
      ee(Ab, {
        modelValue: i.value,
        "onUpdate:modelValue": c[1] || (c[1] = (u) => i.value = u),
        items: t.template
      }, {
        default: G(({ item: u, index: p, open: h }) => [
          u.type === "simple" ? (y(), W(Ww, We({
            key: 0,
            modelValue: n.value.options[p],
            "onUpdate:modelValue": (f) => n.value.options[p] = f
          }, { ...u }, {
            "aria-title": u.title.toLowerCase().replace(" ", "-"),
            exportparts: "step step-title step-subtitle",
            "onUpdate:modelValue": (f) => l(f, p),
            "onUpdate:focus": c[0] || (c[0] = (f) => o.value = f)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "aria-title"])) : u.type === "options" || u.type === "options-multiple" ? (y(), W(T1, We({
            key: 1,
            modelValue: n.value.options[p],
            "onUpdate:modelValue": (f) => n.value.options[p] = f
          }, { ...u }, {
            open: h,
            multiple: u.type === "options-multiple",
            "aria-title": u.title.toLowerCase().replace(" ", "-"),
            disabled: o.value || t.loading,
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onUpdate:modelValue": l,
            "onUpdate:accordionState": (f) => s(f, p)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "open", "multiple", "aria-title", "disabled", "onUpdate:accordionState"])) : F("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      t.deliveryOptions.length ? (y(), W(B1, {
        key: 0,
        items: t.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : F("", !0),
      t.loading ? (y(), W(mn, { key: 1 })) : F("", !0)
    ]));
  }
}, Vc = /* @__PURE__ */ ge(H1, [["__scopeId", "data-v-10a8b8e6"]]);
function q1(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function U1(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
const W1 = {
  __name: "PReferenceInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:model-value"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = B({
      get: () => r.value,
      set: (i) => {
        a("update:model-value", i);
      }
    }), n = B(() => r.placeholder ? r.placeholder : ie("input.product_reference"));
    return (i, s) => (y(), W(to, We({
      id: "reference-input",
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l),
      class: "reference-input",
      "data-testid": "reference-input",
      type: "text",
      icon: A(U1),
      large: ""
    }, r, { placeholder: n.value }), null, 16, ["modelValue", "icon", "placeholder"]));
  }
}, Rc = /* @__PURE__ */ ge(W1, [["__scopeId", "data-v-7c5ddc12"]]);
function _s(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const K1 = {
  __name: "PHeading",
  props: {
    level: {
      type: String,
      default: "h1"
    }
  },
  setup(t) {
    return (e, r) => (y(), W(Ea(t.level), null, {
      default: G(() => [
        le(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, Y1 = /* @__PURE__ */ ge(K1, [["__scopeId", "data-v-a8012362"]]), J1 = {}, X1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function G1(t, e) {
  return y(), E("svg", X1, e[0] || (e[0] = [
    z("path", {
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M13.609 20.087h6.217c.648 0 1.174-.526 1.174-1.174V5.173C21 4.527 20.474 4 19.826 4H4.087c-.648 0-1.174.526-1.174 1.174v6.217M2.91 14.09h7.714v6H2.91Zm13.981-2.46h-2.934c-.323-.003-.583-.225-.587-.5v-2.5m.172 2.828L17.87 7.13"
    }, null, -1)
  ]));
}
const Z1 = /* @__PURE__ */ ge(J1, [["render", G1]]), Q1 = {}, ey = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function ty(t, e) {
  return y(), E("svg", ey, e[0] || (e[0] = [
    z("path", {
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M13.609 20.087h6.217c.648 0 1.174-.526 1.174-1.174V5.173C21 4.527 20.474 4 19.826 4H4.087c-.648 0-1.174.526-1.174 1.174v6.217M2.91 14.09h7.714v6H2.91Zm11.438-6.96h2.935c.322.004.582.226.587.5v2.5m-.173-2.827L13.37 11.63"
    }, null, -1)
  ]));
}
const ry = /* @__PURE__ */ ge(Q1, [["render", ty]]), ay = ["data-testid"], oy = {
  key: 0,
  class: "actions"
}, ny = {
  class: "inner",
  tabindex: "-1",
  autofocus: ""
}, iy = {
  key: 0,
  class: "minimized-actions"
}, sy = {
  __name: "PModal",
  props: /* @__PURE__ */ Mr({
    /** Modal title */
    title: {
      type: String,
      default: ""
    },
    fullscreen: Boolean,
    primaryButtonText: {
      type: String,
      default: ""
    },
    secondaryButtonText: {
      type: String,
      default: ""
    },
    hideHeader: Boolean,
    hideFooter: Boolean,
    hideCloseButton: Boolean,
    showMinimize: {
      type: Boolean,
      default: !0
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    dataTestid: {
      type: String,
      default: "modal"
    },
    loading: Boolean,
    width: {
      type: String,
      default: ""
    }
  }, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Mr(["minimize", "update:modelValue", "click:primary", "click:secondary", "close"], ["update:modelValue"]),
  setup(t, { expose: e, emit: r }) {
    const a = t, o = r, n = Ma(t, "modelValue"), i = bo("modal"), s = bo("modal-content"), l = bo("footer"), d = bo("header"), c = D(!1), u = D(!1), p = D(!1), h = D(!1), f = D(null), m = D(null);
    function v() {
      p.value = s.value.scrollTop > 0;
      const w = s.value.scrollHeight - s.value.clientHeight;
      h.value = s.value.scrollTop < w;
    }
    function b(w) {
      if (clearTimeout(f.value), n.value = w, w) {
        if (i.value.showModal(), v(), a.loading)
          return;
        setTimeout(() => {
          var x;
          (x = Xa(s.value)[0]) == null || x.focus();
        }, 500);
      } else
        f.value = setTimeout(() => {
          i.value.close();
        }, 500);
    }
    function k(w) {
      o("minimize", w), c.value = w, u.value = !w;
    }
    function $(w) {
      if (a.persistent || a.fullscreen || w.target !== w.currentTarget) {
        a.persistent && w.target.isEqualNode(w.currentTarget) && (m.value && clearTimeout(m.value), i.value.classList.add("persistent-animation"), m.value = setTimeout(() => {
          i.value.classList.remove("persistent-animation");
        }, 300));
        return;
      }
      b(!1);
    }
    function g(w) {
      a.persistent && w.preventDefault();
    }
    return Ie(n, (w, x) => {
      w !== x && b(w);
    }), Ie(
      () => a.loading,
      (w) => {
        w === !1 && n.value && At(() => {
          var x;
          (x = Xa(s.value)[0]) == null || x.focus();
        });
      }
    ), _t(() => {
      b(n.value), i.value.addEventListener("cancel", g);
    }), un(() => {
      var w;
      (w = i.value) == null || w.removeEventListener("cancel", g);
    }), e({
      showModal: () => b(!0),
      close: () => b(!1)
    }), (w, x) => {
      var S, M;
      return y(), E("dialog", {
        ref: "modal",
        class: be(["modal", [
          n.value ? "open" : "closed",
          {
            fullscreen: t.fullscreen,
            minimized: c.value,
            maximized: u.value,
            persistent: t.persistent
          }
        ]]),
        "data-testid": t.dataTestid,
        style: Jt({ "max-width": t.width }),
        onClose: x[7] || (x[7] = (T) => b(!1)),
        onClick: $
      }, [
        t.fullscreen && !c.value ? (y(), E("div", oy, [
          t.showMinimize ? (y(), W(Je, {
            key: 0,
            variant: "text",
            icon: Z1,
            class: "minimize",
            onClick: x[0] || (x[0] = (T) => k(!0))
          }, {
            default: G(() => [
              je(J(A(ie)("modal.minimize")), 1)
            ]),
            _: 1
          })) : F("", !0),
          t.hideCloseButton ? F("", !0) : (y(), W(Je, {
            key: 1,
            variant: "text",
            icon: A(_s),
            class: "close",
            onClick: x[1] || (x[1] = (T) => {
              b(!1), o("close");
            })
          }, {
            default: G(() => [
              je(J(A(ie)("modal.close")), 1)
            ]),
            _: 1
          }, 8, ["icon"]))
        ])) : F("", !0),
        z("div", ny, [
          t.hideHeader ? F("", !0) : (y(), E("header", {
            key: 0,
            ref: "header",
            class: be(["header", { "header-shadow": p.value }]),
            "data-testid": "modal-header"
          }, [
            le(w.$slots, "header", Ca(fn({ minimize: c.value })), () => [
              t.title ? (y(), W(Y1, {
                key: 0,
                class: "title",
                level: "h2"
              }, {
                default: G(() => [
                  je(J(t.title), 1)
                ]),
                _: 1
              })) : F("", !0),
              !t.fullscreen && !t.hideCloseButton ? (y(), W(Je, {
                key: 1,
                icon: A(_s),
                variant: "text",
                class: "close",
                "aria-label": A(ie)("modal.close"),
                onClick: x[2] || (x[2] = (T) => b(!1))
              }, null, 8, ["icon", "aria-label"])) : F("", !0)
            ]),
            c.value && t.fullscreen ? (y(), E("div", iy, [
              ee(Je, {
                icon: ry,
                onClick: x[3] || (x[3] = (T) => k(!1))
              }, {
                default: G(() => [
                  je(J(A(ie)("modal.open")), 1)
                ]),
                _: 1
              }),
              ee(Je, {
                icon: A(_s),
                variant: "secondary",
                onClick: x[4] || (x[4] = (T) => b(!1))
              }, {
                default: G(() => [
                  je(J(A(ie)("modal.close")), 1)
                ]),
                _: 1
              }, 8, ["icon"])
            ])) : F("", !0)
          ], 2)),
          c.value ? F("", !0) : (y(), E("div", {
            key: 1,
            ref: "modal-content",
            class: be(["content", { "!pt-8": t.hideHeader }]),
            style: Jt(
              t.fullscreen ? null : `max-height: calc(100vh - ${((S = A(d)) == null ? void 0 : S.clientHeight) + ((M = A(l)) == null ? void 0 : M.clientHeight)}px - 64px); `
            ),
            onScroll: v
          }, [
            t.loading ? (y(), E(ke, { key: 0 }, [
              w.$slots.loading ? le(w.$slots, "loading", { key: 0 }) : (y(), W(mn, { key: 1 }))
            ], 64)) : le(w.$slots, "default", { key: 1 })
          ], 38)),
          !t.fullscreen && !t.hideFooter || !c.value && t.fullscreen && w.$slots.footer ? (y(), E("footer", {
            key: 2,
            ref: "footer",
            class: be(["footer", { "footer-shadow": !t.fullscreen && h.value }])
          }, [
            le(w.$slots, "footer", {}, () => [
              t.fullscreen ? F("", !0) : (y(), E(ke, { key: 0 }, [
                ee(Je, {
                  type: "button",
                  variant: "secondary",
                  "data-testid": "secondary-button",
                  onClick: x[5] || (x[5] = (T) => o("click:secondary"))
                }, {
                  default: G(() => [
                    je(J(t.secondaryButtonText ? t.secondaryButtonText : A(ie)("modal.cancel")), 1)
                  ]),
                  _: 1
                }),
                ee(Je, {
                  type: "button",
                  "data-testid": "primary-button",
                  onClick: x[6] || (x[6] = (T) => o("click:primary"))
                }, {
                  default: G(() => [
                    je(J(t.primaryButtonText ? t.primaryButtonText : A(ie)("modal.save")), 1)
                  ]),
                  _: 1
                })
              ], 64))
            ])
          ], 2)) : F("", !0)
        ])
      ], 46, ay);
    };
  }
}, Tf = /* @__PURE__ */ ge(sy, [["__scopeId", "data-v-a677b84c"]]);
function Ss(t, e = "nl-NL", r = "EUR") {
  let a = t;
  return typeof a != "number" && (a = parseFloat(t.replace(",", "."))), new Intl.NumberFormat(e, { style: "currency", currency: r }).format(a);
}
const ly = { class: "inner" }, dy = { class: "title" }, cy = {
  key: 0,
  class: "subtitle"
}, uy = {
  key: 2,
  class: "reference"
}, py = { class: "value" }, fy = { class: "footer-wrapper" }, hy = { class: "right" }, my = {
  key: 0,
  class: "sub-total"
}, gy = {
  key: 0,
  class: "label"
}, vy = { class: "decimal" }, by = { class: "sub-price" }, wy = { class: "label" }, yy = { class: "shipping" }, xy = { class: "sub-price" }, ky = { class: "label" }, $y = { class: "packaging" }, _y = {
  key: 1,
  class: "excluded-from-price"
}, Sy = { class: "desktop" }, Cy = { class: "mobile" }, Oy = {
  __name: "PProductConfigModal",
  props: {
    /** Product, title / image, imageTablet, imageMobile / price are shown */
    product: {
      type: Object,
      required: !0
    },
    subTitle: {
      type: String,
      default: ""
    },
    /** Icon in the subtitle */
    subTitleIcon: {
      type: Function,
      default: sd
    },
    /** Text in the submit button */
    submit: {
      type: String,
      default: ""
    },
    /** Icon in the submit button */
    submitIcon: {
      type: Function,
      default: q1
    },
    /** Text in footer below price */
    priceSubtext: {
      type: String,
      default: "excl. packaging & shipping"
    },
    /** Show specifications button */
    specs: {
      type: Boolean,
      default: !0
    },
    /** Loading state */
    loading: {
      type: Boolean,
      default: !1
    },
    /** Show minimize button */
    showMinimize: {
      type: Boolean,
      default: !0
    },
    /** Show packaging and shipping prices */
    extendedPricing: Boolean,
    /** Show reference field */
    showReferenceField: Boolean,
    /** Enable ordering when configuration is valid */
    canOrder: Boolean,
    currency: {
      type: String,
      default: "EUR"
    },
    lang: {
      type: String,
      default: "nl-NL"
    }
  },
  emits: ["close", "update:reference", "submit:product-config"],
  setup(t, { expose: e, emit: r }) {
    const a = t, o = r, n = D(!1), i = D(null), s = D(null), l = B(() => a.submit ? a.submit : ie("product-config-modal.add_to_cart")), d = B(() => a.submit ? a.submit : ie("product-config-modal.add")), c = B(() => a.priceSubtext ? a.priceSubtext : ie("product-config-modal.price_excluding")), u = B(() => {
      if (a.product && a.product.price) {
        let [f, m] = Ss(a.product.price, a.lang, a.currency).toString().split(",");
        return m && (f = `${f},`), {
          whole: f,
          decimal: m
        };
      }
      return null;
    });
    function p() {
      s.value.showModal();
    }
    function h() {
      s.value.close();
    }
    return e({
      showModal: p,
      close: h
    }), (f, m) => (y(), W(Tf, {
      ref_key: "modal",
      ref: s,
      class: "product-config-modal",
      fullscreen: "",
      "show-minimize": t.showMinimize,
      "data-testid": "product-config-modal",
      onMinimize: m[5] || (m[5] = (v) => n.value = v),
      onClose: m[6] || (m[6] = (v) => o("close"))
    }, {
      header: G(() => [
        t.product.image ? (y(), W(Mf, {
          key: 0,
          class: "product-image",
          mobile: t.product.imageMobile,
          tablet: t.product.imageTablet,
          image: t.product.image,
          width: n.value ? 88 : 136,
          rounded: 8,
          alt: `${t.product.title} image`
        }, null, 8, ["mobile", "tablet", "image", "width", "alt"])) : F("", !0),
        z("div", ly, [
          z("h2", dy, J(t.product.name), 1),
          !n.value && t.subTitle ? (y(), E("span", cy, [
            ee(Xt, { icon: t.subTitleIcon }, null, 8, ["icon"]),
            je(" " + J(t.subTitle), 1)
          ])) : F("", !0),
          !n.value && t.showReferenceField ? (y(), W(Rc, {
            key: 1,
            id: "reference",
            modelValue: i.value,
            "onUpdate:modelValue": [
              m[0] || (m[0] = (v) => i.value = v),
              m[1] || (m[1] = (v) => o("update:reference", v))
            ]
          }, null, 8, ["modelValue"])) : n.value && i.value ? (y(), E("span", uy, [
            je(J(f.referenceLabel) + ": ", 1),
            z("span", py, J(i.value), 1)
          ])) : F("", !0)
        ]),
        !n.value && t.showReferenceField ? (y(), W(Rc, {
          key: 1,
          id: "reference",
          modelValue: i.value,
          "onUpdate:modelValue": [
            m[2] || (m[2] = (v) => i.value = v),
            m[3] || (m[3] = (v) => o("update:reference", v))
          ]
        }, null, 8, ["modelValue"])) : F("", !0)
      ]),
      footer: G(() => [
        z("div", fy, [
          t.specs ? (y(), W(Je, {
            key: 0,
            size: "large",
            variant: "secondary",
            class: "specifications"
          }, {
            default: G(() => [
              je(J(A(ie)("product-config-modal.specifications")), 1)
            ]),
            _: 1
          })) : F("", !0),
          z("div", hy, [
            u.value ? (y(), E("div", my, [
              z("span", {
                class: be(["price", { small: t.extendedPricing }])
              }, [
                t.extendedPricing ? (y(), E("span", gy, J(A(ie)("product-config-modal.total")), 1)) : F("", !0),
                z("span", null, J(u.value.whole), 1),
                z("span", vy, J(u.value.decimal), 1)
              ], 2),
              t.extendedPricing ? (y(), E(ke, { key: 0 }, [
                z("span", by, [
                  z("span", wy, J(A(ie)("product-config-modal.shipping_costs")), 1),
                  z("span", yy, J(A(Ss)(t.product.shipping, t.lang, t.currency)), 1)
                ]),
                z("span", xy, [
                  z("span", ky, J(A(ie)("product-config-modal.packaging_costs")), 1),
                  z("span", $y, J(A(Ss)(t.product.packaging, t.lang, t.currency)), 1)
                ])
              ], 64)) : (y(), E("span", _y, J(c.value), 1))
            ])) : F("", !0),
            ee(Je, {
              disabled: !t.canOrder,
              class: "add-to-cart",
              size: "large",
              icon: t.submitIcon,
              onClick: m[4] || (m[4] = (v) => o("submit:product-config"))
            }, {
              default: G(() => [
                z("span", Sy, J(l.value), 1),
                z("span", Cy, J(d.value), 1)
              ]),
              _: 1
            }, 8, ["disabled", "icon"])
          ])
        ])
      ]),
      default: G(() => [
        le(f.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["show-minimize"]));
  }
}, Ey = /* @__PURE__ */ ge(Oy, [["__scopeId", "data-v-86900a3e"]]);
function My(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ty = {
  __name: "PList",
  props: {
    gapRow: {
      type: String,
      default: "1rem"
    },
    gapColumn: {
      type: String,
      default: "1rem"
    },
    /** Item gets exposed in the slot */
    items: {
      type: Array,
      default: () => []
    },
    grid: Boolean
  },
  setup(t) {
    const e = D(null);
    function r(a) {
      var o, n;
      if (!["ArrowUp", "ArrowDown"].includes(a.key))
        return;
      const i = Xa(e.value), s = i.indexOf(a.target);
      a.key === "ArrowDown" ? (o = i[s + 1]) == null || o.focus() : a.key === "ArrowUp" && ((n = i[s - 1]) == null || n.focus());
    }
    return (a, o) => (y(), E("div", {
      ref_key: "list",
      ref: e,
      class: be(["list", { grid: t.grid }]),
      style: Jt(`column-gap: ${t.gapRow}; row-gap: ${t.gapColumn};`),
      "data-testid": "list",
      onKeydown: r
    }, [
      (y(!0), E(ke, null, Ze(t.items, (n, i) => le(a.$slots, "default", {
        key: i,
        index: i,
        item: n
      }, void 0, !0)), 128))
    ], 38));
  }
}, Ay = /* @__PURE__ */ ge(Ty, [["__scopeId", "data-v-9f29914a"]]), Iy = ["data-testid", "tabindex", "aria-disabled"], zy = {
  key: 0,
  class: "prepend"
}, Ny = { class: "content" }, Py = {
  key: 0,
  class: "title"
}, jy = {
  key: 1,
  class: "subtitle"
}, Vy = { class: "text" }, Ry = {
  __name: "PListItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    text: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    return (e, r) => (y(), E("div", {
      class: be(["list-item", { clickable: t.clickable, active: t.active }]),
      "data-testid": t.clickable ? "clickable" : "list-item",
      tabindex: t.disabled ? -1 : 0,
      "aria-disabled": t.disabled
    }, [
      e.$slots.prepend ? (y(), E("div", zy, [
        le(e.$slots, "prepend", {}, void 0, !0)
      ])) : F("", !0),
      z("div", Ny, [
        le(e.$slots, "content", {}, () => [
          t.title ? (y(), E("span", Py, J(t.title), 1)) : F("", !0),
          t.subtitle ? (y(), E("span", jy, J(t.subtitle), 1)) : F("", !0),
          z("span", Vy, J(t.text), 1)
        ], !0)
      ])
    ], 10, Iy));
  }
}, Cs = /* @__PURE__ */ ge(Ry, [["__scopeId", "data-v-04e69d1e"]]);
function Af(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const An = {
  short: (t, e = "nl-NL") => new Intl.DateTimeFormat(e, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(t)),
  long: (t, e = "nl-NL") => new Intl.DateTimeFormat(e, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric"
  }).format(new Date(t))
}, Dy = {
  __name: "PDatePicker",
  props: {
    ...to.props,
    /* Date string, yyyy-mm-dd */
    modelValue: {
      type: String,
      default: null
    },
    /** Date string, yyyy-mm-dd */
    minDate: {
      type: String,
      default: void 0
    },
    /** Date string, yyyy-mm-dd */
    maxDate: {
      type: String,
      default: void 0
    },
    time: Boolean
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = B({
      get: () => r.modelValue,
      set: (i) => a("update:modelValue", i)
    }), n = B(() => {
      const i = r.rules;
      return r.minDate && i.push({
        validator: (s) => new Date(s) >= new Date(r.minDate),
        message: ie("input.min_date", {
          date: r.time ? An.long(r.minDate) : An.short(r.minDate)
        })
      }), r.maxDate && i.push({
        validator: (s) => new Date(s) <= new Date(r.maxDate),
        message: ie("input.max_date", {
          date: r.time ? An.long(r.maxDate) : An.short(r.maxDate)
        })
      }), i;
    });
    return (i, s) => (y(), W(to, We({
      modelValue: o.value,
      "onUpdate:modelValue": s[1] || (s[1] = (l) => o.value = l)
    }, { ...i.$attrs, ...r }, {
      min: t.minDate,
      max: t.maxDate,
      type: t.time ? "datetime-local" : "date",
      rules: n.value
    }), {
      inline: G(() => [
        o.value && !i.disabled ? (y(), W(Je, {
          key: 0,
          disabled: i.disabled,
          variant: "text",
          size: "small",
          icon: A(Af),
          "aria-label": A(ie)("input.clear"),
          onClick: s[0] || (s[0] = (l) => o.value = "")
        }, null, 8, ["disabled", "icon", "aria-label"])) : F("", !0)
      ]),
      _: 1
    }, 16, ["modelValue", "min", "max", "type", "rules"]));
  }
}, Ly = /* @__PURE__ */ ge(Dy, [["__scopeId", "data-v-b3d4c407"]]), By = {
  __name: "PDivider",
  props: {
    thickness: {
      type: String,
      default: "1px"
    },
    vertical: Boolean,
    /** container uses flexbox, make the divider stretch */
    flex: Boolean
  },
  setup(t) {
    return uf((e) => ({
      "0705668d": t.thickness
    })), (e, r) => (y(), E("hr", {
      class: be(["divider", { vertical: t.vertical, flex: t.flex }])
    }, null, 2));
  }
}, If = /* @__PURE__ */ ge(By, [["__scopeId", "data-v-7f654821"]]);
function zf(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
const Fy = { class: "label" }, Hy = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], qy = {
  key: 0,
  class: "append"
}, Uy = ["id"], Wy = {
  __name: "PCheckbox",
  props: /* @__PURE__ */ Mr({
    id: {
      type: String,
      required: !0
    },
    value: {
      type: [String, Number, Boolean],
      default: ""
    },
    disabled: Boolean,
    indeterminate: Boolean,
    required: Boolean,
    large: Boolean,
    label: {
      type: String,
      default: ""
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: !0
    }
  }, {
    modelValue: { type: [String, Number, Boolean, Array] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = t, r = Ma(t, "modelValue"), a = e.required ? { checked: { required: fr.withMessage(ie("checkbox.required"), Qb(!0)) } } : null, o = Zi(a, { checked: r }), n = B(() => `${e.id}-error`);
    return (i, s) => {
      var l, d, c, u;
      return y(), E("div", {
        class: be(["checkbox-container", { error: (d = (l = A(o).checked) == null ? void 0 : l.$errors[0]) == null ? void 0 : d.$message, large: t.large }])
      }, [
        z("label", Fy, [
          qr(z("input", We(i.$attrs, {
            id: t.id,
            "onUpdate:modelValue": s[0] || (s[0] = (p) => r.value = p),
            class: "checkbox",
            type: "checkbox",
            "data-testid": "checkbox",
            value: t.value,
            disabled: t.disabled,
            required: t.required,
            tabindex: i.$attrs.tabindex,
            indeterminate: t.indeterminate,
            "true-value": t.trueValue,
            "false-value": t.falseValue,
            onBlur: s[1] || (s[1] = (p) => {
              var h;
              return (h = A(o).checked) == null ? void 0 : h.$touch(p);
            })
          }), null, 16, Hy), [
            [pf, r.value]
          ]),
          le(i.$slots, "label", {}, () => [
            je(J(t.label), 1)
          ], !0),
          i.$slots.append ? (y(), E("span", qy, [
            le(i.$slots, "append", {}, void 0, !0)
          ])) : F("", !0)
        ]),
        (u = (c = A(o).checked) == null ? void 0 : c.$errors[0]) != null && u.$message ? (y(), E("span", {
          key: 0,
          id: n.value,
          role: "alert",
          "aria-live": "assertive",
          class: "error-message"
        }, J(A(o).checked.$errors[0].$message), 9, Uy)) : F("", !0)
      ], 2);
    };
  }
}, wa = /* @__PURE__ */ ge(Wy, [["__scopeId", "data-v-5fadac35"]]);
function Ky(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    })
  ]);
}
function Yy(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
    })
  ]);
}
function Jy(t, e) {
  const r = D(null), a = D(0);
  function o(s) {
    var l, d;
    r.value = s.touches[0].clientX, a.value = parseFloat((d = (l = t.value.style.transform) == null ? void 0 : l.match(/translateX\((-?\d*\.?\d+)px\)/)) == null ? void 0 : d[1]) || 0;
  }
  function n(s) {
    const l = s.touches[0].clientX - r.value;
    a.value + l > 0 ? t.value.style.transform = "translateX(0)" : t.value.style.transform = `translateX(${a.value + l}px)`, e();
  }
  function i() {
    r.value = null, a.value = 0;
  }
  return {
    onTouchstart: o,
    onTouchmove: n,
    onTouchend: i
  };
}
function Xy(t, e, r) {
  function a(o) {
    var n;
    if (!o.shiftKey)
      return;
    o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation();
    const i = (n = t.value.style.transform) == null ? void 0 : n.match(/translateX\((-?\d*\.?\d+)px\)/);
    if (!i) {
      t.value.style.transform = "translateX(-100px)", r();
      return;
    }
    let s;
    const l = o.deltaY || o.deltaX;
    if (l < 0)
      s = parseFloat(i[1]) + 100, s > 0 && (s = 0), t.value.style.transform = `translateX(${s}px)`;
    else if (l > 0) {
      const d = t.value.offsetWidth - e.value.clientWidth;
      s = Math.abs(parseFloat(i[1]) - 100), s > d && (s = d), t.value.style.transform = `translateX(-${s}px)`;
    }
    r();
  }
  return { onWheel: a };
}
const Gy = {
  "data-testid": "sticky-container",
  class: "sticky-container"
}, Zy = {
  __name: "PTable",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:scrollLeft", "update:scrollRight", "update:width"],
  setup(t, { emit: e }) {
    const r = e, a = D(null), o = D(null), n = D(null), i = D(null), s = D(null), l = D(0), d = D(!1);
    function c() {
      const x = o.value.clientWidth - s.value.offsetWidth;
      let S = s.value.getBoundingClientRect().left - i.value.getBoundingClientRect().left;
      return S = Math.max(0, Math.min(x, S)), s.value.style.transform = `translateX(${S}px)`, { thumbPosition: S, maxThumbPosition: x };
    }
    function u() {
      const { thumbPosition: x, maxThumbPosition: S } = c(), M = n.value.offsetWidth - o.value.clientWidth;
      let T = 0;
      n.value.style.transform && (T = x / S * M || 0, n.value.style.transform = `translateX(-${T}px)`), r("update:scrollLeft", T), r("update:scrollRight", M - T);
    }
    function p() {
      var x;
      const S = (x = n.value.style.transform) == null ? void 0 : x.match(/translateX\((-?\d*\.?\d+)px\)/);
      if (!S)
        s.value.style.transform = "translateX(0)";
      else {
        const M = n.value.offsetWidth, T = o.value.clientWidth, I = s.value.clientWidth, L = M - T, V = Math.abs(parseFloat(S[1])) / L * (T - I);
        s.value.style.transform = `translateX(${V}px)`;
      }
      u();
    }
    function h() {
      const x = n.value.offsetWidth, S = o.value.clientWidth, M = S / x * o.value.clientWidth;
      d.value = M !== S, s.value.style.width = `${M}px`;
    }
    function f() {
      r("update:width", o.value.clientWidth), h(), u();
    }
    function m(x) {
      x.preventDefault();
      const S = o.value.clientWidth - s.value.offsetWidth;
      let M = x.clientX - l.value - i.value.getBoundingClientRect().left;
      M = Math.max(0, Math.min(S, M)), s.value.style.transform = `translateX(${M}px)`;
      const T = n.value.offsetWidth - o.value.clientWidth, I = M / S * T;
      n.value.style.transform = `translateX(-${I}px)`, r("update:scrollLeft", I), r("update:scrollRight", T - I);
    }
    function v() {
      document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", v);
    }
    function b(x) {
      x.preventDefault(), l.value = x.offsetX, document.addEventListener("mousemove", m), document.addEventListener("mouseup", v);
    }
    _t(() => {
      a.value = new ResizeObserver(f), a.value.observe(o.value), a.value.observe(n.value);
    }), Jr(() => {
      var x;
      (x = a.value) == null || x.disconnect();
    });
    const { onTouchstart: k, onTouchmove: $, onTouchend: g } = Jy(n, p), { onWheel: w } = Xy(n, o, p);
    return (x, S) => (y(), E("div", {
      ref_key: "tableWrapper",
      ref: o,
      class: "table-wrapper",
      onTouchstart: S[0] || (S[0] = (...M) => A(k) && A(k)(...M)),
      onTouchmove: S[1] || (S[1] = (...M) => A($) && A($)(...M)),
      onTouchend: S[2] || (S[2] = (...M) => A(g) && A(g)(...M)),
      onWheel: S[3] || (S[3] = (...M) => A(w) && A(w)(...M))
    }, [
      z("table", {
        ref_key: "table",
        ref: n,
        "data-testid": "table"
      }, [
        le(x.$slots, "default", {}, void 0, !0)
      ], 512),
      z("div", Gy, [
        qr(z("div", {
          ref_key: "scrollbar",
          ref: i,
          class: "scrollbar"
        }, [
          z("div", {
            ref_key: "scrollThumb",
            ref: s,
            class: "scroll-thumb",
            onMousedown: b
          }, null, 544)
        ], 512), [
          [Xi, d.value && !t.disabled]
        ]),
        le(x.$slots, "append-table", {}, void 0, !0)
      ])
    ], 544));
  }
}, Qy = /* @__PURE__ */ ge(Zy, [["__scopeId", "data-v-06467889"]]), ex = {}, tx = { "data-testid": "table-header" };
function rx(t, e) {
  return y(), E("thead", tx, [
    le(t.$slots, "default", {}, void 0, !0)
  ]);
}
const ax = /* @__PURE__ */ ge(ex, [["render", rx], ["__scopeId", "data-v-83c8869d"]]), ox = {};
function nx(t, e) {
  return y(), E("tbody", null, [
    le(t.$slots, "default", {}, void 0, !0)
  ]);
}
const Dc = /* @__PURE__ */ ge(ox, [["render", nx], ["__scopeId", "data-v-efa3a81b"]]), ix = {
  __name: "PTableColumn",
  props: {
    colspan: {
      type: String,
      default: null
    },
    rowspan: {
      type: String,
      default: null
    }
  },
  setup(t) {
    const e = t;
    return (r, a) => (y(), E("td", Ca(fn(e)), [
      le(r.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}, rt = /* @__PURE__ */ ge(ix, [["__scopeId", "data-v-d11a71a3"]]), sx = {}, lx = { "data-testid": "table-row" };
function dx(t, e) {
  return y(), E("tr", lx, [
    le(t.$slots, "default", {}, void 0, !0)
  ]);
}
const In = /* @__PURE__ */ ge(sx, [["render", dx], ["__scopeId", "data-v-15e10af8"]]), cx = { class: "no-results-row" }, ux = { colspan: "999" }, px = { class: "wrapper" }, fx = {
  __name: "_NoResultsTableOverlay",
  props: {
    rows: {
      type: Array,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (e, r) => (y(), E("tr", cx, [
      z("td", ux, [
        z("div", px, [
          ee(Xt, {
            icon: A(zf),
            "aria-hidden": !0
          }, null, 8, ["icon"]),
          z("h2", null, J(t.title || A(ie)("data-table.no_results")), 1),
          z("span", null, J(t.text || A(ie)(t.rows.length === 0 ? "data-table.no_results_available" : "data-table.no_results_found")), 1)
        ])
      ])
    ]));
  }
}, hx = /* @__PURE__ */ ge(fx, [["__scopeId", "data-v-66a85a78"]]);
function mx(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function gx(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
const vx = { class: "button-text" }, bx = {
  key: 1,
  class: "dotdotdot",
  "data-testid": "dotdotdot"
}, wx = {
  key: 3,
  class: "dotdotdot",
  "data-testid": "dotdotdot"
}, yx = { class: "button-text" }, xx = {
  __name: "PPagination",
  props: {
    /** The current page */
    page: {
      type: Number,
      required: !0
    },
    /** The total number of pages */
    pages: {
      type: Number,
      required: !0
    },
    /** Only shows the next and previous buttons, for cursor pagination */
    simple: Boolean,
    /** Whether the next button can be clicked, used with cursor pagination */
    nextCanNavigate: {
      type: [String, Boolean],
      default: ""
    },
    /** Whether the previous button can be clicked, used with cursor pagination */
    prevCanNavigate: {
      type: [String, Boolean],
      default: ""
    }
  },
  emits: ["update:page", "click:next", "click:prev"],
  setup(t, { emit: e }) {
    const r = t, a = e, o = B(() => {
      const n = r.page, i = r.pages;
      if (r.range <= 2)
        return [];
      if (i <= 6)
        return Array.from({ length: i - 2 }, (s, l) => l + 2);
      if (n <= 3)
        return [2, 3, 4];
      if (i - n < 3) {
        const s = i - 3;
        return Array.from({ length: 3 }, (l, d) => s + d);
      }
      return [n - 1, n, n + 1];
    });
    return Ie(
      () => r.pages,
      () => {
        a("update:page", 1);
      }
    ), (n, i) => (y(), E("div", {
      class: be(["pagination", { simple: t.simple }]),
      "data-testid": "pagination"
    }, [
      ee(Je, {
        variant: "secondary",
        icon: A(mx),
        "data-testid": "previous-button",
        disabled: t.page === 1 && !t.simple || t.simple && !t.prevCanNavigate,
        onClick: i[0] || (i[0] = (s) => {
          a("update:page", t.page - 1), a("click:prev");
        })
      }, {
        default: G(() => [
          z("span", vx, J(A(ie)("pagination.previous")), 1)
        ]),
        _: 1
      }, 8, ["icon", "disabled"]),
      t.simple ? F("", !0) : (y(), W(Je, {
        key: 0,
        "data-testid": "page-number-button",
        class: be({ current: t.page === 1 }),
        variant: t.page === 1 ? "tertiary" : "secondary",
        onClick: i[1] || (i[1] = (s) => a("update:page", 1))
      }, {
        default: G(() => i[4] || (i[4] = [
          je(" 1 ")
        ])),
        _: 1
      }, 8, ["class", "variant"])),
      t.page > 3 && o.value.length + 2 !== t.pages && !t.simple ? (y(), E("span", bx, " ... ")) : F("", !0),
      t.simple ? F("", !0) : (y(!0), E(ke, { key: 2 }, Ze(o.value, (s) => (y(), W(Je, {
        key: s,
        "data-testid": "page-number-button",
        class: be({ current: s === t.page }),
        variant: s === t.page ? "tertiary" : "secondary",
        onClick: (l) => a("update:page", s)
      }, {
        default: G(() => [
          je(J(s), 1)
        ]),
        _: 2
      }, 1032, ["class", "variant", "onClick"]))), 128)),
      t.pages - t.page > 2 && o.value.length + 2 !== t.pages && !t.simple ? (y(), E("span", wx, " ... ")) : F("", !0),
      t.pages > 1 && !t.simple ? (y(), W(Je, {
        key: 4,
        "data-testid": "page-number-button",
        class: be({ current: t.pages === t.page }),
        variant: t.pages === t.page ? "tertiary" : "secondary",
        onClick: i[2] || (i[2] = (s) => a("update:page", t.pages))
      }, {
        default: G(() => [
          je(J(t.pages), 1)
        ]),
        _: 1
      }, 8, ["class", "variant"])) : F("", !0),
      ee(Je, {
        variant: "secondary",
        "data-testid": "next-button",
        disabled: t.page === t.pages && !t.simple || t.simple && !t.nextCanNavigate,
        onClick: i[3] || (i[3] = (s) => {
          a("update:page", t.page + 1), a("click:next");
        })
      }, {
        default: G(() => [
          z("span", yx, J(A(ie)("pagination.next")), 1),
          ee(Xt, { icon: A(gx) }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["disabled"])
    ], 2));
  }
}, kx = /* @__PURE__ */ ge(xx, [["__scopeId", "data-v-dcf7fbae"]]), $x = {
  __name: "PSkeleton",
  props: {
    variant: {
      type: String,
      default: "text"
    },
    height: {
      type: [String, Number],
      default: null
    },
    width: {
      type: [String, Number],
      default: null
    }
  },
  setup(t) {
    const e = t, r = B(() => {
      const a = {};
      return ["string", "number"].includes(typeof e.height) && (a.height = typeof e.height == "string" ? e.height : `${e.height}px`), ["string", "number"].includes(typeof e.width) && (a.width = typeof e.width == "string" ? e.width : `${e.width}px`), a;
    });
    return (a, o) => (y(), E("span", {
      class: be([[t.variant, { "has-content": !!a.$slots.default }], "skeleton"]),
      style: Jt(r.value)
    }, [
      le(a.$slots, "default")
    ], 6));
  }
}, go = /* @__PURE__ */ ge($x, [["__scopeId", "data-v-b9fa218d"]]);
function _x(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" })
  ]);
}
function yo(t, e) {
  return e.split(".").reduce((r, a) => r[a] ? r[a] : r, t);
}
const cd = {
  /** The input value */
  modelValue: {
    type: [String, Number, Array, Object],
    default: ""
  },
  /** Option items, can be an array of strings or an array of objects */
  items: {
    type: Array,
    default: () => []
  },
  /** If item is an object display a specific value as the option text */
  itemText: {
    type: [String, Number, Function],
    default: ""
  },
  /** If item is an object sue a specific value as value */
  itemValue: {
    type: [String, Number],
    default: ""
  },
  /** Input label */
  label: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  /** Input ID attribute */
  id: {
    type: String,
    required: !0
  },
  /** Multi-select */
  multiple: {
    type: Boolean
  },
  /** Shows when there are no results */
  noItemsLabel: {
    type: String,
    default: ""
  },
  /** Value can be unset */
  clearable: {
    type: Boolean
  },
  /** Grouped items, top level items are considered titles and contain children to selectable */
  grouped: Boolean,
  /** The element to display as title */
  groupText: {
    type: String,
    default: "title"
  },
  /** Items in the group */
  groupItems: {
    type: String,
    default: "items"
  },
  /** Icon to display at the end of an input */
  prependIcon: {
    type: [Function, Object],
    default: null
  },
  /** Select is required */
  required: {
    type: Boolean
  },
  /** Whether searching / fetching is done from outside the select */
  serverside: {
    type: Boolean,
    default: !1
  },
  /** Larger input */
  large: Boolean,
  /** Whether to show a divider between the search input and the dropdown content */
  showDivider: Boolean,
  returnObject: Boolean,
  /** Error message */
  error: {
    type: String,
    default: ""
  },
  /** Class list of the activator */
  class: {
    type: [String, Object, Array],
    default: null
  },
  /** Whether the select is disabled */
  disabled: {
    type: Boolean,
    default: !1
  },
  /** Whether the search input should be hidden */
  hideInput: {
    type: Boolean,
    default: !1
  },
  /** Whether the chevron should be hidden */
  hideChevron: {
    type: Boolean,
    default: !1
  },
  /** Offset the dropdown content container */
  offset: {
    type: Number,
    default: null
  },
  /** Data test id of the activator */
  dataTestid: {
    type: String,
    default: "select"
  },
  /** Overwrites the default require message text */
  requiredMessage: {
    type: String,
    default: ""
  }
}, Sx = ["data-testid", "tabindex"], Cx = ["for"], Ox = ["aria-invalid", "aria-describedby"], Ex = { class: "flex items-center gap-1" }, Mx = ["onClick"], Tx = {
  key: 2,
  class: "selected-item"
}, Ax = ["id", "placeholder", "disabled", "readonly", "value", "aria-invalid", "aria-describedby"], Ix = { class: "action-buttons" }, zx = ["aria-label", "disabled"], Nx = ["aria-label", "disabled"], Px = ["id"], jx = {
  key: 0,
  class: "content-divider"
}, Vx = {
  key: 1,
  class: "no-results"
}, Rx = {
  __name: "_BaseSelect",
  props: {
    ...cd,
    behavior: {
      type: String,
      required: !0
    },
    inputValue: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    hideNoItemsLabel: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update:inputValue", "update:isOpen", "update:focus"],
  setup(t, { expose: e, emit: r }) {
    const a = r, o = t, n = Er("showError", !0), i = D(!1), s = D(!1), l = D(!1), d = D(null), c = D(null), u = D(null), p = D(null), h = D(null), f = D(() => {
    }), m = D(() => {
    }), v = D(() => {
    }), b = B({
      get() {
        return o.multiple && !Array.isArray(o.modelValue) ? [] : o.modelValue;
      },
      set(O) {
        if (o.multiple) {
          a("update:modelValue", O);
          return;
        }
        a("update:modelValue", o.returnObject || !o.itemValue ? O : O == null ? void 0 : O[o.itemValue]);
      }
    }), k = B(() => o.requiredMessage ? o.requiredMessage : o.label ? ie("input.required_with_label", { label: o.label.toLowerCase() }) : ie("input.required")), $ = B(() => o.required ? { value: { required: fr.withMessage(() => k.value, fi) } } : { value: {} }), g = Zi($.value, { value: b }), w = B(() => {
      var O;
      return !o.required || o.required && !((O = g.value) != null && O.$errors[0]);
    }), x = B(() => {
      var O, R;
      return !!o.error || ((R = (O = g.value) == null ? void 0 : O.$errors) == null ? void 0 : R.length) > 0 || !w.value;
    }), S = B(() => Array.isArray(b.value) && b.value.length > 0), M = B(() => `${o.id}-error`);
    function T(O) {
      return o.itemValue ? O[o.itemValue] : O;
    }
    function I(O) {
      var R;
      return o.multiple ? ((R = o.modelValue) == null ? void 0 : R.includes(T(O))) || !1 : b.value === T(O);
    }
    function L(O) {
      return O ? typeof o.itemText == "function" ? o.itemText(O) : yo(O, o.itemText) : "";
    }
    function V(O) {
      if (!O)
        return "";
      if (o.grouped) {
        const R = o.items.find(
          (N) => N[o.groupItems].find((he) => T(he) === O)
        )[o.groupItems].find((N) => T(N) === O);
        return L(R);
      }
      return !o.returnObject && o.itemValue ? L(o.items.find((R) => T(R) === O)) : L(O);
    }
    function ae(O) {
      b.value.splice(b.value.indexOf(O), 1), a("update:modelValue", b.value);
    }
    function we(O) {
      if (!o.multiple) {
        b.value = O;
        return;
      }
      if (b.value.includes(T(O))) {
        b.value = b.value.filter((R, N) => N !== b.value.indexOf(T(O)));
        return;
      }
      b.value = [...b.value, T(O)];
    }
    function Ce(O) {
      const R = o.returnObject || !o.itemValue ? O[o.groupItems] : O[o.groupItems].map((ue) => ue[o.itemValue]);
      let N = !1, he = !0;
      return R.forEach((ue) => {
        b.value.includes(ue) ? N = !0 : he = !1;
      }), he ? !0 : N ? "indeterminate" : !1;
    }
    function q(O) {
      const R = o.returnObject || !o.itemValue ? O[o.groupItems] : O[o.groupItems].map((N) => N[o.itemValue]);
      if (Ce(O) === !0) {
        R.forEach((N) => {
          ae(N);
        });
        return;
      }
      a("update:modelValue", Array.from(/* @__PURE__ */ new Set([...b.value, ...R])));
    }
    function oe(O) {
      i.value = O, a("update:isOpen", O);
    }
    function ne(O) {
      l.value = O, a("update:focus", O), !O && a("update:inputValue", null);
    }
    function Se() {
      o.behavior === "manual" && m.value(), o.behavior === "focus" && !i.value && requestAnimationFrame(() => {
        p.value.focus();
      });
    }
    function ye(O, R) {
      p.value = O, o.behavior === "manual" && (f.value = R.setActivator, m.value = R.toggle, v.value = R.onKeydown);
    }
    async function ze() {
      return u;
    }
    const Me = B(() => o.inputValue !== null ? o.inputValue : o.multiple ? null : V(b.value));
    return Ie(
      () => [l.value, s.value],
      () => {
        !l.value && !s.value && g.value.$touch();
      }
    ), e({
      getSelectContent: ze,
      getItemText: L,
      setActivator: f,
      toggle: m,
      onKeydown: v,
      input: p
    }), (O, R) => (y(), W(ld, {
      ref_key: "floatingContainer",
      ref: h,
      transition: "expand",
      offset: o.offset !== null ? o.offset : 1,
      attach: d.value,
      behavior: t.behavior,
      "close-on-click": !o.multiple,
      "onUpdate:isOpen": oe,
      "onUpdate:focus": ne
    }, {
      activator: G((N) => {
        var he, ue, He;
        return [
          z("div", We(t.behavior === "click" ? { ...O.$attrs, ...N } : null, {
            "data-testid": o.dataTestid,
            class: ["base-select", [o.class, t.behavior, { "is-open": i.value, disabled: o.disabled }]],
            tabindex: t.behavior === "click" && !O.disabled ? 0 : null,
            onFocus: R[5] || (R[5] = (Be) => s.value = !0),
            onBlur: R[6] || (R[6] = (Be) => s.value = !1)
          }), [
            O.label ? (y(), E("label", {
              key: 0,
              class: "input-label",
              for: O.id
            }, [
              z("span", null, J(O.label), 1)
            ], 8, Cx)) : F("", !0),
            z("div", {
              ref_key: "selectWrapper",
              ref: d,
              class: be(["wrapper", { focus: l.value || s.value, "has-error": x.value }]),
              "aria-invalid": x.value,
              "aria-describedby": x.value ? M.value : null
            }, [
              O.prependIcon ? (y(), W(ba, {
                key: 0,
                class: "prepend-icon",
                icon: O.prependIcon
              }, null, 8, ["icon"])) : F("", !0),
              S.value ? (y(), E("div", {
                key: 1,
                ref_key: "selectedItems",
                ref: c,
                class: "selected-items"
              }, [
                (y(!0), E(ke, null, Ze(b.value, (Be, Ge) => (y(), W(dd, {
                  key: Ge,
                  ref_for: !0,
                  ref: "label",
                  color: "gray",
                  class: "inline-block"
                }, {
                  default: G(() => [
                    z("div", Ex, [
                      je(J(V(Be)) + " ", 1),
                      z("button", {
                        class: "h-4 w-4",
                        type: "button",
                        tabindex: "-1",
                        onClick: Kt((Lt) => ae(Be), ["stop", "prevent"])
                      }, [
                        ee(Gi, { icon: A(_x) }, null, 8, ["icon"])
                      ], 8, Mx)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ], 512)) : !O.multiple && t.behavior === "click" && b.value ? (y(), E("div", Tx, J(V(b.value)), 1)) : F("", !0),
              t.behavior === "click" ? qr((y(), E("div", {
                key: 3,
                class: "placeholder"
              }, J(o.placeholder), 513)), [
                [Xi, !b.value || b.value.length === 0]
              ]) : (y(), E("input", We({ key: 4 }, t.behavior === "focus" ? { ...O.$attrs, ...N } : O.$attrs, {
                id: o.id,
                ref: (Be) => ye(Be, N),
                placeholder: o.placeholder,
                disabled: o.disabled,
                readonly: o.readonly,
                value: Me.value,
                autocomplete: "off",
                "aria-invalid": x.value,
                "aria-describedby": x.value ? M.value : null,
                class: "ml-2",
                onInput: R[0] || (R[0] = (Be) => O.$emit("update:inputValue", Be.target.value)),
                onBlur: R[1] || (R[1] = (Be) => s.value = !1),
                onFocus: R[2] || (R[2] = (Be) => s.value = !0)
              }), null, 16, Ax)),
              z("div", Ix, [
                o.clearable && (!o.multiple && b.value || o.multiple && ((he = b.value) == null ? void 0 : he.length) > 0) ? (y(), E("button", {
                  key: 0,
                  "aria-label": A(ie)("input.clear"),
                  class: "clear-button",
                  tabindex: "-1",
                  type: "button",
                  disabled: o.disabled,
                  onClick: [
                    R[3] || (R[3] = (Be) => b.value = o.multiple ? [] : null),
                    R[4] || (R[4] = Kt(() => {
                    }, ["stop"]))
                  ]
                }, [
                  ee(ba, {
                    icon: A(Af),
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])
                ], 8, zx)) : F("", !0),
                le(O.$slots, "inline", {}, () => [
                  O.hideChevron ? F("", !0) : (y(), E("button", {
                    key: 0,
                    "aria-label": A(ie)("input.toggle"),
                    tabindex: "-1",
                    type: "button",
                    "data-testid": "toggle-chevron",
                    disabled: o.disabled,
                    onMousedown: Se
                  }, [
                    ee(ba, {
                      class: be(["state-indicator", { "is-open": i.value }]),
                      icon: A(My)
                    }, null, 8, ["icon", "class"])
                  ], 40, Nx))
                ], !0)
              ])
            ], 10, Ox),
            x.value && A(n) ? (y(), E("div", {
              key: 1,
              id: M.value,
              role: "alert",
              "aria-live": "assertive",
              class: "error"
            }, J((He = (ue = A(g).value) == null ? void 0 : ue.$errors[0]) != null && He.$message ? A(g).value.$errors[0].$message : o.error), 9, Px)) : F("", !0)
          ], 16, Sx)
        ];
      }),
      default: G(() => [
        O.showDivider ? (y(), E("hr", jx)) : F("", !0),
        z("div", {
          ref_key: "selectContent",
          ref: u,
          class: be(["select-content", { "!rounded-t-none": O.showDivider, shadow: !O.showDivider }])
        }, [
          le(O.$slots, "prepend-list", {}, void 0, !0),
          o.items.length > 0 ? (y(), W(Ay, {
            key: 0,
            "gap-column": "0",
            "gap-row": "0",
            items: o.items,
            onKeydown: R[7] || (R[7] = Kt(() => {
            }, ["prevent"]))
          }, {
            default: G(({ item: N }) => [
              o.grouped ? (y(), E(ke, { key: 0 }, [
                o.items.indexOf(N) !== 0 ? (y(), W(If, { key: 0 })) : F("", !0),
                o.grouped ? (y(), W(Cs, {
                  key: 1,
                  title: N[o.groupText],
                  clickable: o.multiple,
                  disabled: !o.multiple,
                  onClick: (he) => o.multiple && q(N),
                  onKeydown: Et((he) => o.multiple && q(N), ["enter"])
                }, To({ _: 2 }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: G(() => [
                      ee(wa, {
                        id: `group-${o.items.indexOf(N)}-checkbox`,
                        "model-value": typeof Ce(N) == "boolean" ? Ce(N) : !1,
                        indeterminate: Ce(N) === "indeterminate",
                        tabindex: "-1",
                        class: "mr-4"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : F("", !0),
                (y(!0), E(ke, null, Ze(N[o.groupItems], (he, ue) => (y(), W(Cs, {
                  key: ue,
                  clickable: "",
                  active: I(he),
                  text: L(he),
                  onClick: (He) => we(he),
                  onKeydown: Et((He) => we(he), ["enter"])
                }, To({
                  content: G(() => [
                    le(O.$slots, "option", {
                      selected: I(he),
                      option: he
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: G(() => [
                      ee(wa, {
                        id: `item-${N[o.groupItems].indexOf(he)}-checkbox`,
                        "model-value": I(he),
                        tabindex: "-1",
                        class: "mr-4"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : L(N) ? (y(), W(Cs, {
                key: 1,
                clickable: "",
                active: I(N),
                text: L(N),
                onClick: (he) => we(N),
                onKeydown: Et((he) => we(N), ["enter"])
              }, To({
                content: G(() => [
                  le(O.$slots, "option", {
                    selected: I(N),
                    option: N
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                o.multiple ? {
                  name: "prepend",
                  fn: G(() => [
                    ee(wa, {
                      id: `item-${o.items.indexOf(N)}-checkbox`,
                      "model-value": I(N),
                      tabindex: "-1",
                      class: "mr-4"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"])) : F("", !0)
            ]),
            _: 3
          }, 8, ["items"])) : o.hideNoItemsLabel ? F("", !0) : (y(), E("div", Vx, J(o.noItemsLabel || A(ie)("input.no_results")), 1)),
          le(O.$slots, "append-list", {}, void 0, !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["offset", "attach", "behavior", "close-on-click"]));
  }
}, Nf = /* @__PURE__ */ ge(Rx, [["__scopeId", "data-v-faeda570"]]), Lc = {
  __name: "PSelect",
  props: cd,
  emits: ["update:modelValue"],
  setup(t) {
    const e = t, r = B(
      () => Array.isArray(e.modelValue) && e.modelValue.length > 0 || typeof e.modelValue < "u" && e.modelValue !== null
    );
    return (a, o) => (y(), W(Nf, We(e, {
      behavior: "click",
      readonly: "",
      placeholder: e.placeholder || A(ie)("input.select"),
      "hide-input": r.value,
      "onUpdate:modelValue": o[0] || (o[0] = (n) => a.$emit("update:modelValue", n))
    }), null, 16, ["placeholder", "hide-input"]));
  }
}, pl = {
  __name: "PCombobox",
  props: {
    ...cd,
    /** Whether the combobox is loading new items in the dropdown */
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "intersect"],
  setup(t, { expose: e, emit: r }) {
    const a = t, o = r, n = B(() => {
      const { loading: $, ...g } = a;
      return g;
    }), i = B({
      get() {
        return a.multiple && !Array.isArray(a.modelValue) ? [a.modelValue] : a.modelValue;
      },
      set($) {
        o("update:modelValue", $);
      }
    }), s = D(null), l = D(null), d = D(null), c = D(null), u = D(null), p = D(!1), h = D(!1);
    function f() {
      l.value = null, i.value = null, s.value.blur();
    }
    const m = B(() => !l.value || a.serverside ? a.items : a.itemText ? a.grouped ? a.items.filter(
      ($) => $[a.groupItems].some(
        (g) => s.value.getItemText(g).toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map(($) => {
      const g = $[a.groupItems].filter(
        (w) => s.value.getItemText(w).toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
      );
      return g.length ? {
        ...$,
        [a.groupItems]: g
      } : null;
    }) : a.items.filter(
      ($) => s.value.getItemText($).toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
    ) : a.items.filter(
      ($) => $.toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
    ));
    async function v() {
      const $ = (await s.value.getSelectContent()).value;
      $ == null || $.scrollTo(0, $.scrollHeight);
    }
    function b($) {
      var g;
      if (p.value = $, $) {
        At(async () => {
          c.value = new IntersectionObserver(
            (w) => {
              w[0].isIntersecting && !h.value && !a.loading && (o("intersect"), v());
            },
            {
              root: (await s.value.getSelectContent()).value,
              threshold: 0
            }
          ), c.value.observe(d.value);
        });
        return;
      }
      (g = c.value) == null || g.disconnect(), c.value = null;
    }
    function k($) {
      if (!a.serverside) {
        o("search", $);
        return;
      }
      $ !== null && (h.value = !0, clearTimeout(u.value), u.value = setTimeout(() => {
        p.value && o("search", $), h.value = !1;
      }, 500));
    }
    return e({
      reset: f,
      select: s,
      scrollToBottom: v
    }), ($, g) => (y(), W(Nf, We({
      id: $.id,
      ref_key: "select",
      ref: s,
      "input-value": l.value,
      "onUpdate:inputValue": g[1] || (g[1] = (w) => l.value = w)
    }, n.value, {
      behavior: "focus",
      "hide-no-items-label": t.loading || h.value,
      items: h.value ? [] : m.value,
      "onUpdate:inputValue": g[2] || (g[2] = (w) => k(w)),
      "onUpdate:focus": g[3] || (g[3] = (w) => w && o("search", "")),
      "onUpdate:isOpen": g[4] || (g[4] = (w) => b(w)),
      "onUpdate:modelValue": g[5] || (g[5] = (w) => i.value = w)
    }), {
      inline: G(() => [
        le($.$slots, "inline")
      ]),
      option: G(({ option: w, selected: x }) => [
        le($.$slots, "option", {
          selected: x,
          option: w
        })
      ]),
      "append-list": G(() => [
        z("div", {
          ref_key: "intersect",
          ref: d,
          class: "flex justify-center"
        }, [
          t.loading || h.value ? (y(), W(mn, {
            key: 0,
            class: "mt-2",
            onClick: g[0] || (g[0] = Kt(() => {
            }, ["prevent"]))
          })) : F("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
};
function Bc(t) {
  return Array.isArray(t) ? t.length > 0 : t != null && t !== "";
}
function fl(t) {
  return typeof t == "string" || t instanceof String;
}
function Dx(t) {
  return typeof t == "number" || t instanceof Number;
}
const Lx = { class: "table-selection" }, Bx = { class: "amount" }, Fx = { class: "actions" }, Hx = {
  __name: "_TableSelectionFooter",
  props: {
    amount: {
      type: Number,
      default: 0
    }
  },
  emits: ["clear:selection", "delete:selection"],
  setup(t, { emit: e }) {
    const r = e;
    return (a, o) => (y(), E("footer", Lx, [
      z("p", Bx, J(A(ie)("data-table.selected", { amount: t.amount })), 1),
      le(a.$slots, "default", {}, void 0, !0),
      z("div", Fx, [
        le(a.$slots, "actions", {}, () => [
          ee(Je, {
            variant: "text",
            onClick: o[0] || (o[0] = (n) => r("clear:selection"))
          }, {
            default: G(() => [
              je(J(A(ie)("data-table.undo_selection")), 1)
            ]),
            _: 1
          }),
          ee(Je, {
            variant: "danger",
            onClick: o[1] || (o[1] = (n) => r("delete:selection"))
          }, {
            default: G(() => [
              je(J(A(ie)("data-table.delete")), 1)
            ]),
            _: 1
          })
        ], !0)
      ])
    ]));
  }
}, qx = /* @__PURE__ */ ge(Hx, [["__scopeId", "data-v-737e1c4b"]]);
function Ux(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Wx(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
    }),
    z("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
const Kx = { class: "list" }, Yx = {
  id: "column-configuration-live-region",
  role: "region",
  "aria-live": "assertive",
  "aria-atomic": "true",
  class: "sr-only"
}, Jx = { class: "title" }, Xx = ["data-value"], Gx = ["for"], Zx = ["aria-label"], Qx = { class: "available-columns" }, e5 = { class: "title" }, t5 = ["for"], r5 = {
  key: 1,
  class: "text-disabled-text text-sm"
}, a5 = {
  __name: "PColumnConfiguration",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Mr(["update:model-value"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const r = Ma(t, "modelValue"), a = e, o = D([]), n = D([]), i = D(0), s = D(0), l = D(null), d = D(null);
    function c(w, x) {
      const S = !x || x.previousElementSibling === w.nextElementSibling;
      return { columnToMove: S ? (x == null ? void 0 : x.previousElementSibling) || w.nextElementSibling : w.previousElementSibling, moveDirection: S };
    }
    function u(w) {
      At(() => {
        w.parentNode.querySelectorAll(".column").forEach((x, S) => {
          const M = o.value.find((T) => T.property === x.dataset.value);
          M.sortIndex = S;
        });
      });
    }
    function p(w, x) {
      const { columnToMove: S } = c(w, x);
      S.classList.contains("column") && (w.parentNode.insertBefore(w, x), w.querySelector(".drag-handle").focus());
    }
    function h(w, x) {
      const { moveDirection: S, columnToMove: M } = c(w, x);
      M.classList.contains("column") && (M.style.transform = `translateY(${S ? "-100%" : "100%"})`, M.style.transition = "transform .2s", M.ontransitionend = () => {
        M.style.transition = "", M.style.transform = "", p(w, x);
      });
    }
    function f(w) {
      const x = w.target.closest(".column"), S = x.getBoundingClientRect(), M = w.clientX - S.left, T = w.clientY - S.top;
      w.dataTransfer.setDragImage(x, M, T);
    }
    function m(w) {
      var x;
      const S = w.target.closest(".column");
      S.classList.add("dragging");
      let M = ((x = document.elementFromPoint(i.value, s.value)) == null ? void 0 : x.closest(".column")) || S;
      S.parentNode === M.parentNode && (M = M !== S.nextElementSibling ? M : M.nextElementSibling, S !== M && h(S, M));
    }
    function v(w) {
      const x = w.target.closest(".column");
      x.classList.remove("dragging"), w.preventDefault(), setTimeout(() => {
        u(x);
      }, 200);
    }
    function b(w, x) {
      if (w.preventDefault(), w.stopPropagation(), w.stopImmediatePropagation(), x.isActive) {
        const S = x.sortIndex;
        x.sortIndex = null, x.isActive = !1, o.value.filter((M) => M.sortIndex > S).forEach((M) => {
          M.sortIndex -= 1;
        }), n.value.push(x), o.value.splice(o.value.indexOf(x), 1);
      } else
        x.sortIndex = o.value.length, x.isActive = !0, o.value.push(x), n.value.splice(n.value.indexOf(x), 1);
    }
    function k(w) {
      i.value = w.clientX, s.value = w.clientY;
    }
    function $(w) {
      w.preventDefault();
      const x = w.target.closest(".column");
      let S = null;
      w.key === "ArrowDown" ? (S = x.nextElementSibling, S && (p(x, S.nextElementSibling), u(x))) : w.key === "ArrowUp" && (S = x.previousElementSibling, S && (p(x, S), u(x)));
    }
    function g(w) {
      w.target.closest(".column").parentNode.querySelectorAll(".column").forEach((x, S) => {
        x.dataset.value === w.target.closest(".column").dataset.value && (d.value = x.dataset.value, l.value = S);
      });
    }
    return Ie(
      [o, n],
      () => {
        o.value.forEach(({ value: w, sortIndex: x }) => {
          const S = r.value.find((M) => M.property === w);
          S && (S.isActive = !0, S.sortIndex = x);
        }), n.value.forEach(({ value: w }) => {
          const x = r.value.find((S) => S.property === w);
          x && (x.isActive = !1, x.sortIndex = null);
        }), a("update:model-value", r.value);
      },
      {
        deep: !0
      }
    ), _t(() => {
      o.value = [...r.value.filter((w) => w.isActive)].sort((w, x) => w.sortIndex - x.sortIndex), n.value = [...r.value.filter((w) => !w.isActive)], document.addEventListener("mousemove", k), document.addEventListener("dragover", k);
    }), Jr(() => {
      document.removeEventListener("mousemove", k), document.removeEventListener("dragover", k), l.value = null;
    }), (w, x) => (y(), W(ld, {
      location: "bottom,right",
      "close-on-click": !1,
      offset: 8,
      "onUpdate:isOpen": x[3] || (x[3] = (S) => l.value = null)
    }, {
      activator: G((S) => [
        ee(Je, We({ variant: "text" }, S, {
          class: "column-configurator",
          icon: A(Wx),
          "aria-label": A(ie)("column-configuration.columns"),
          size: "small"
        }), null, 16, ["icon", "aria-label"])
      ]),
      default: G(() => [
        z("div", Kx, [
          z("span", Yx, J(A(ie)("column-configuration.current_column")) + " " + J(d.value) + ". " + J(A(ie)("column-configuration.column_position", {
            position: l.value + 1,
            amount: o.value.length
          })), 1),
          z("ul", {
            class: "active-columns",
            onDragover: x[2] || (x[2] = (S) => S.preventDefault())
          }, [
            z("li", Jx, J(A(ie)("column-configuration.active_columns")), 1),
            (y(!0), E(ke, null, Ze(o.value, (S, M) => (y(), E("li", {
              key: M,
              class: "column",
              "data-value": S.property
            }, [
              ee(wa, {
                id: `active-column-checkbox-${M}`,
                disabled: o.value.length === 1,
                "model-value": !0,
                onClick: (T) => o.value.length > 1 && b(T, S)
              }, null, 8, ["id", "disabled", "onClick"]),
              z("label", {
                class: "label",
                for: `active-column-checkbox-${M}`
              }, J(S.name), 9, Gx),
              z("button", {
                ref_for: !0,
                ref: "drag-handle",
                class: "drag-handle",
                draggable: "true",
                "aria-label": A(ie)("column-configuration.drag_column"),
                "aria-describedby": "column-configuration-live-region",
                onDrag: m,
                onDragstart: f,
                onDragend: v,
                onKeydown: [
                  x[0] || (x[0] = Et((T) => T.preventDefault(), ["up"])),
                  x[1] || (x[1] = Et((T) => T.preventDefault(), ["down"]))
                ],
                onKeyup: [
                  Et($, ["down"]),
                  Et($, ["up"])
                ],
                onFocus: g
              }, [
                ee(Xt, { icon: A(Ux) }, null, 8, ["icon"])
              ], 40, Zx)
            ], 8, Xx))), 128))
          ], 32),
          ee(If, { flex: "" }),
          z("ul", Qx, [
            z("li", e5, J(A(ie)("column-configuration.available_columns")), 1),
            n.value.length > 0 ? (y(!0), E(ke, { key: 0 }, Ze(n.value, (S, M) => (y(), E("li", {
              key: M,
              class: "column"
            }, [
              ee(wa, {
                id: `available-column-checkbox-${M}`,
                "model-value": !1,
                onClick: (T) => b(T, S)
              }, null, 8, ["id", "onClick"]),
              z("label", {
                class: "label",
                for: `available-column-checkbox-${M}`
              }, J(S.name), 9, t5)
            ]))), 128)) : (y(), E("li", r5, J(A(ie)("column-configuration.no_columns_available")), 1))
          ])
        ])
      ]),
      _: 1
    }));
  }
}, o5 = /* @__PURE__ */ ge(a5, [["__scopeId", "data-v-1b51365f"]]);
function n5(t) {
  const e = Qe(/* @__PURE__ */ new Map());
  function r(d) {
    const c = window.location.href.split("?")[0];
    window.history.replaceState({}, "", `${c}?${d.toString()}`);
  }
  function a() {
    const d = new URLSearchParams(window.location.search);
    d.keys().filter((c) => c.startsWith(`${t}.`)).forEach((c) => {
      e.has(c) || d.delete(c);
    }), Array.from(e.keys()).forEach((c) => {
      if (Array.isArray(e.get(c))) {
        d.set(`${c}[]`, e.get(c));
        return;
      }
      d.set(c, e.get(c));
    }), r(d);
  }
  function o() {
    e.clear();
    const d = new URLSearchParams(window.location.search).entries();
    Array.from(d).filter(([c]) => c.startsWith(`${t}.`)).forEach(([c, u]) => {
      c.endsWith("[]") || c.endsWith("[0]") ? e.set(c.replace(/\[\d*]/g, ""), u.split(",")) : e.set(c, u);
    });
  }
  function n(d) {
    return e.get(`${t}.${d}`);
  }
  function i(d) {
    e.delete(`${t}.${d}`), a();
  }
  function s(d, c) {
    Array.isArray(c) && c.length === 0 ? i(d) : e.set(`${t}.${d}`, c), a();
  }
  function l() {
    e.clear(), a();
  }
  return o(), {
    getFilter: n,
    setFilter: s,
    deleteFilter: i,
    clearFilters: l,
    filters: new Map(Array.from(e, ([d, c]) => [d.replace(`${t}.`, ""), c]))
  };
}
const i5 = { key: 0 }, s5 = { key: 1 }, l5 = { key: 2 }, d5 = ["onClick"], c5 = { class: "flex justify-end" }, u5 = { class: "flex justify-end" }, p5 = { class: "table-footer" }, f5 = {
  key: 0,
  class: "current-page-info"
}, h5 = {
  "data-testid": "total-results",
  class: "total-results"
}, m5 = { class: "page-selector" }, g5 = { class: "per-page" }, v5 = {
  __name: "PDataTable",
  props: /* @__PURE__ */ Mr({
    /** Rows to be shown in the table */
    rows: {
      type: Array,
      required: !0
    },
    /** Whether the rows can be selected */
    selectable: {
      type: Boolean,
      default: !1
    },
    /** Configuration for a serverside rendered table
     * {
     *   totalItems: number, // Count of the total items in the dataset
     *   selectedRowObject?: string | string[] // String or array which is being used and returned in the selectedRows array
     * }
     */
    serverside: {
      type: Object,
      default: null
    },
    /** The amount of items shown per page, defaults to 20 */
    itemsPerPage: {
      type: Number,
      default: 20
    },
    /** The offset of the sticky header, defaults to '0' */
    stickyTopOffset: {
      type: String,
      default: "0"
    },
    /** Whether the table is loading rows */
    loading: {
      type: Boolean,
      default: !1
    },
    /** Emits event on click row */
    rowClickable: {
      type: Boolean,
      default: !1
    },
    /** Cursor pagination works only with next and previous */
    cursorPagination: Boolean,
    /** Name used for internal / local storage use, the get the corresponding table settings */
    name: {
      type: String,
      default: ""
    },
    /** Make the columns configurable */
    configureColumns: Boolean,
    /** No results text for the no results overlay */
    noResultsTitle: {
      type: String,
      default: ""
    },
    /** No results text for the no results overlay */
    noResultsText: {
      type: String,
      default: ""
    },
    /** Parameter to use for the selection, defaults to 'id' */
    selectionParameter: {
      type: String,
      default: ""
    }
  }, {
    headers: {
      type: Array,
      default: () => []
    },
    headersModifiers: {},
    selectedRows: {
      type: Array,
      default: () => []
    },
    selectedRowsModifiers: {}
  }),
  emits: /* @__PURE__ */ Mr([
    "update:sort",
    "update:page",
    "click:row",
    "click:next",
    "click:prev",
    "update:items-per-page",
    "update:filters",
    "delete:selection",
    "update:selected-rows"
  ], ["update:headers", "update:selectedRows"]),
  setup(t, { emit: e }) {
    uf((O) => ({
      "2ea2e6ab": t.stickyTopOffset
    }));
    const r = t, a = e, o = Ma(t, "headers"), n = Ma(t, "selectedRows"), i = r.name ? n5(r.name) : null, s = D(null), l = D(null), d = D(null), c = D([]), u = D([]), p = D(1), h = D(1), f = D(r.itemsPerPage), m = B(() => (p.value - 1) * f.value + 1), v = B(() => p.value * f.value < (r.serverside ? r.serverside.totalItems : r.rows.length) ? p.value * f.value : r.serverside ? r.serverside.totalItems : r.rows.length), b = D(!1), k = D({}), $ = D(!1), g = B(() => Object.values(k.value).some((O) => Bc(O)));
    function w(O) {
      let R = O;
      return Object.keys(k.value).forEach((N) => {
        var he;
        const ue = k.value[N], He = (he = o.value.find((Be) => Be.property === N)) == null ? void 0 : he.filter;
        He && Bc(ue) && (R = R.filter((Be) => {
          var Ge;
          if (Be[N]) {
            if (fl(ue))
              return He.props.itemValue ? Be[N][He.props.itemValue].includes(ue) : (Ge = Be[N]) == null ? void 0 : Ge.toString().toLowerCase().includes(ue.toLowerCase());
            if (Dx(ue))
              return Be[N].toString().includes(ue.toString());
            if (Array.isArray(ue))
              return Be[N].some((Lt) => ue.includes(Lt));
          }
          return !1;
        }));
      }), h.value = Math.ceil(R.length / r.itemsPerPage), R;
    }
    const x = B(() => {
      if (r.serverside)
        return r.rows;
      let O = [...r.rows];
      if (s.value) {
        const R = o.value.find((N) => N.property === s.value);
        R.overrideSort ? O = R.overrideSort(O) : O.sort((N, he) => (typeof N[s.value] < "u" && N[s.value] !== null ? N[s.value].toString() : "").localeCompare(he[s.value])), l.value === "desc" && O.reverse();
      }
      return g.value && (O = w(O)), O.slice(m.value - 1, v.value);
    }), S = B(() => r.rows.length === 0 || x.value.length === 0), M = B(() => o.value.some((O) => O.filter ? Object.keys(O.filter).length : !1)), T = B(() => r.serverside ? r.serverside.totalItems : g.value ? w(r.rows).length : r.rows.length);
    function I(O) {
      if (typeof O == "object" && !r.selectionParameter) {
        const R = JSON.stringify(O);
        return JSON.stringify(n.value).includes(R);
      }
      return r.selectionParameter ? n.value.includes(O[r.selectionParameter]) : n.value.includes(O);
    }
    function L(O) {
      if (!O) {
        n.value.splice(0), a("update:selected-rows", n.value);
        return;
      }
      r.rows.forEach((R) => {
        I(R) || (r.selectionParameter ? n.value.push(R[r.selectionParameter]) : n.value.push(R));
      }), a("update:selected-rows", n.value);
    }
    function V(O) {
      var R;
      let N;
      if ((R = r.serverside) != null && R.selectedRowObject ? typeof r.serverside.selectedRowObject == "string" ? N = O[r.serverside.selectedRowObject] : N = Object.keys(O).reduce((he, ue) => (r.serverside.selectedRowObject.includes(ue) && (he[ue] = O[ue]), he), {}) : r.selectionParameter ? N = O[r.selectionParameter] : N = O, I(O)) {
        n.value.splice(n.value.indexOf(N), 1), n.value.length !== r.rows.length && b.value && (b.value = !1), a("update:selected-rows", n.value);
        return;
      }
      n.value.push(N), n.value.length === r.rows.length && (b.value = !0), a("update:selected-rows", n.value);
    }
    function ae(O) {
      if (!S.value) {
        if (s.value === O)
          switch (l.value) {
            case null:
              l.value = "asc";
              break;
            case "asc":
              l.value = "desc";
              break;
            default:
              l.value = null, s.value = null;
          }
        else
          l.value = "asc", s.value = O;
        a("update:sort", s.value, l.value);
      }
    }
    function we(O) {
      d.value && (d.value.$el.style.transform = `translateX(${O}px)`), c.value.filter((R) => !!R).forEach(({ $el: R }) => {
        R.style.transform = `translateX(${O}px)`, O ? R.classList.add("overlap") : R.classList.remove("overlap");
      });
    }
    function Ce(O) {
      u.value.filter((R) => !!R).forEach(({ $el: R }) => {
        R.style.transform = `translateX(-${O}px)`, O ? R.classList.add("overlap") : R.classList.remove("overlap");
      });
    }
    function q(O) {
      At(() => {
        if (!d.value)
          return;
        const R = d.value.$el.querySelector("td");
        R.style.width = `${O}px`;
      });
    }
    function oe(O) {
      f.value = O, a("update:items-per-page", O), p.value = 1;
    }
    function ne(O) {
      switch (O) {
        case "text":
        case "number":
          return to;
        case "combo":
          return pl;
        case "select":
          return Lc;
        case "date":
          return Ly;
        default:
          return null;
      }
    }
    function Se() {
      var O;
      h.value = Math.ceil((((O = r.serverside) == null ? void 0 : O.totalItems) || r.rows.length) / f.value);
    }
    function ye(O, R) {
      k.value[O] = R, i && (R ? i.setFilter(O, R) : i.deleteFilter(O));
    }
    function ze() {
      const O = JSON.parse(localStorage.getItem(`configured-columns-${r.name}`));
      O != null && O.length && o.value.forEach((R) => {
        R.isActive = O.includes(R.property), R.sortIndex = O.indexOf(R.property);
      });
    }
    function Me() {
      localStorage.setItem(
        `configured-columns-${r.name}`,
        JSON.stringify(
          o.value.sort((O, R) => O.sortIndex - R.sortIndex).filter((O) => O.isActive).map((O) => O.property)
        )
      );
    }
    return Wi(() => {
      Se();
    }), Ie(
      k,
      () => {
        g.value || Se(), p.value = 1, a("update:filters", k.value);
      },
      { deep: !0 }
    ), Ie(
      o,
      (O) => {
        M.value && O.forEach((R) => {
          R.filter && (k.value[R.property] = (i == null ? void 0 : i.getFilter(R.property)) || R.filter.value);
        }), o.value.sort((R, N) => R.sortIndex - N.sortIndex);
      },
      { deep: !0 }
    ), _t(() => {
      M.value && o.value.forEach((O) => {
        O.filter && (k.value[O.property] = O.filter.value);
      }), i == null || i.filters.forEach((O, R) => {
        k.value[R] = O;
      }), r.configureColumns && ze(), $.value = !0;
    }), (O, R) => (y(), W(Qy, {
      disabled: S.value,
      "onUpdate:scrollLeft": we,
      "onUpdate:scrollRight": Ce,
      "onUpdate:width": q
    }, To({
      default: G(() => [
        z("colgroup", null, [
          t.selectable ? (y(), E("col", i5)) : F("", !0),
          O.$slots["prepend-row"] ? (y(), E("col", s5)) : F("", !0),
          (y(!0), E(ke, null, Ze(o.value, (N) => (y(), E("col", {
            key: N.property,
            style: Jt(N.style)
          }, null, 4))), 128)),
          O.$slots.actions ? (y(), E("col", l5)) : F("", !0)
        ]),
        ee(ax, {
          class: be(["table-head", { selectable: t.selectable }])
        }, {
          default: G(() => [
            ee(In, null, {
              default: G(() => [
                t.selectable && !S.value ? (y(), W(rt, {
                  key: 0,
                  ref: (N) => c.value.push(N),
                  class: "select-column"
                }, {
                  default: G(() => [
                    ee(wa, {
                      id: "select-all",
                      modelValue: b.value,
                      "onUpdate:modelValue": [
                        R[0] || (R[0] = (N) => b.value = N),
                        L
                      ],
                      indeterminate: n.value.length > 0 && n.value.length < r.rows.length || n.value.length > 0 && t.rows.length === f.value && r.serverside.totalItems > f.value,
                      "aria-label": b.value ? A(ie)("data-table.deselect_all") : A(ie)("data-table.select_all")
                    }, null, 8, ["modelValue", "indeterminate", "aria-label"])
                  ]),
                  _: 1
                }, 512)) : F("", !0),
                O.$slots["prepend-row"] ? (y(), W(rt, {
                  key: 1,
                  class: "prepend-row-column"
                })) : F("", !0),
                (y(!0), E(ke, null, Ze(o.value, (N) => (y(), E(ke, {
                  key: N.property
                }, [
                  !t.configureColumns || N.isActive ? (y(), W(rt, {
                    key: 0,
                    class: "header-cell"
                  }, {
                    default: G(() => [
                      z("div", {
                        class: be(["header", [
                          N.align === "right" ? "ml-auto" : null,
                          {
                            "hover:!cursor-default": S.value || N.sortable === !1,
                            active: s.value === N.property
                          }
                        ]]),
                        onClick: (he) => N.sortable !== !1 && ae(N.property)
                      }, [
                        je(J(N.name) + " ", 1),
                        N.sortable !== !1 ? (y(), W(Xt, {
                          key: 0,
                          icon: s.value !== N.property || s.value === N.property && l.value === "asc" ? A(Ky) : A(Yy),
                          class: be(["sort-icon", {
                            left: !N.align || N.align === "left",
                            right: N.align === "right",
                            active: s.value === N.property,
                            "!hidden": S.value
                          }])
                        }, null, 8, ["icon", "class"])) : F("", !0)
                      ], 10, d5)
                    ]),
                    _: 2
                  }, 1024)) : F("", !0)
                ], 64))), 128)),
                ee(rt),
                O.$slots.actions && t.loading || O.$slots.actions && !S.value ? (y(), W(rt, {
                  key: 2,
                  ref: (N) => u.value.push(N),
                  class: "action-padding action-column"
                }, {
                  default: G(() => [
                    t.configureColumns && $.value ? (y(), W(o5, {
                      key: 0,
                      modelValue: o.value,
                      "onUpdate:modelValue": [
                        R[1] || (R[1] = (N) => o.value = N),
                        Me
                      ]
                    }, null, 8, ["modelValue"])) : F("", !0)
                  ]),
                  _: 1
                }, 512)) : F("", !0)
              ]),
              _: 1
            }),
            M.value ? (y(), W(In, {
              key: 0,
              class: "filters"
            }, {
              default: G(() => [
                t.selectable ? (y(), W(rt, { key: 0 })) : F("", !0),
                (y(!0), E(ke, null, Ze(o.value, (N, he) => (y(), E(ke, { key: he }, [
                  t.configureColumns && N.isActive || !t.configureColumns ? (y(), W(rt, { key: 0 }, {
                    default: G(() => {
                      var ue;
                      return [
                        (ue = N.filter) != null && ue.type ? (y(), W(Ea(ne(N.filter.type)), We({
                          key: 0,
                          "model-value": k.value[N.property],
                          ref_for: !0
                        }, N.filter.props, {
                          "onUpdate:modelValue": (He) => ye(N.property, He)
                        }), null, 16, ["model-value", "onUpdate:modelValue"])) : F("", !0)
                      ];
                    }),
                    _: 2
                  }, 1024)) : F("", !0)
                ], 64))), 128)),
                ee(rt),
                O.$slots.actions ? (y(), W(rt, {
                  key: 1,
                  ref: (N) => u.value.push(N),
                  class: "action-column"
                }, null, 512)) : F("", !0)
              ]),
              _: 1
            })) : F("", !0)
          ]),
          _: 1
        }, 8, ["class"]),
        t.loading ? (y(), W(Dc, {
          key: 0,
          class: "loading"
        }, {
          default: G(() => [
            (y(!0), E(ke, null, Ze(f.value, (N) => (y(), W(In, { key: N }, {
              default: G(() => [
                O.$slots["prepend-row"] ? (y(), W(rt, {
                  key: 0,
                  class: "prepend-row-column"
                }, {
                  default: G(() => [
                    ee(go, { width: "25px" })
                  ]),
                  _: 1
                })) : F("", !0),
                (y(!0), E(ke, null, Ze(o.value, (he) => (y(), E(ke, { key: he }, [
                  !t.configureColumns || he.isActive ? (y(), W(rt, { key: 0 }, {
                    default: G(() => [
                      ee(go)
                    ]),
                    _: 1
                  })) : F("", !0)
                ], 64))), 128)),
                ee(rt),
                O.$slots.actions ? (y(), W(rt, {
                  key: 1,
                  class: "action-column"
                }, {
                  default: G(() => [
                    z("div", c5, [
                      ee(go, { width: "40px" })
                    ])
                  ]),
                  _: 1
                })) : F("", !0)
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        })) : S.value ? (y(), W(hx, {
          key: 2,
          ref_key: "noResultsOverlay",
          ref: d,
          rows: t.rows,
          title: t.noResultsTitle,
          text: t.noResultsText
        }, null, 8, ["rows", "title", "text"])) : (y(), W(Dc, { key: 1 }, {
          default: G(() => [
            (y(!0), E(ke, null, Ze(x.value, (N, he) => (y(), W(In, {
              key: he,
              class: be({ clickable: r.rowClickable, selectable: t.selectable, selected: I(N) }),
              onClick: (ue) => r.rowClickable && a("click:row", N)
            }, {
              default: G(() => [
                t.selectable ? (y(), W(rt, {
                  key: 0,
                  ref_for: !0,
                  ref_key: "selectColumns",
                  ref: c,
                  class: "select-column"
                }, {
                  default: G(() => [
                    ee(wa, {
                      id: `select-row-${he}`,
                      "model-value": I(N),
                      "aria-label": I(N) ? A(ie)("data-table.deselect_row") : A(ie)("data-table.select_row"),
                      onClick: R[2] || (R[2] = Kt(() => {
                      }, ["stop"])),
                      "onUpdate:modelValue": (ue) => V(N)
                    }, null, 8, ["id", "model-value", "aria-label", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1536)) : F("", !0),
                O.$slots["prepend-row"] ? (y(), W(rt, {
                  key: 1,
                  class: "prepend-row-column"
                }, {
                  default: G(() => [
                    le(O.$slots, "prepend-row", { row: N }, void 0, !0)
                  ]),
                  _: 2
                }, 1024)) : F("", !0),
                (y(!0), E(ke, null, Ze(o.value, (ue) => {
                  var He, Be;
                  return y(), E(ke, {
                    key: `row-${he}-column-${ue.property}`
                  }, [
                    !t.configureColumns || ue.isActive ? (y(), W(rt, {
                      key: 0,
                      class: be([{ "max-w-[1px]": ((He = ue.style) == null ? void 0 : He.width) || ((Be = ue.style) == null ? void 0 : Be.maxWidth) }, "truncate"]),
                      title: O.$slots[`column:${ue.property}`] ? null : N[ue.property]
                    }, {
                      default: G(() => [
                        le(O.$slots, `column:${ue.property}`, {
                          value: N[ue.property],
                          row: N
                        }, () => [
                          z("span", {
                            class: be({ "float-right": ue.align === "right" })
                          }, J(typeof N[ue.property] < "u" && N[ue.property] !== null && N[ue.property] !== "" ? N[ue.property] : "-"), 3)
                        ], !0)
                      ]),
                      _: 2
                    }, 1032, ["class", "title"])) : F("", !0)
                  ], 64);
                }), 128)),
                ee(rt),
                O.$slots.actions ? (y(), W(rt, {
                  key: 2,
                  ref_for: !0,
                  ref_key: "actionColumns",
                  ref: u,
                  class: "action-column",
                  onClick: R[3] || (R[3] = Kt(() => {
                  }, ["stop"]))
                }, {
                  default: G(() => [
                    z("div", u5, [
                      le(O.$slots, "actions", { row: N }, void 0, !0)
                    ])
                  ]),
                  _: 2
                }, 1536)) : F("", !0)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 3
        })),
        n.value.length > 0 ? (y(), W(qx, {
          key: 3,
          amount: n.value.length || 0,
          "onClear:selection": R[8] || (R[8] = (N) => {
            L(), b.value = !1;
          }),
          "onDelete:selection": R[9] || (R[9] = (N) => a("delete:selection", n.value))
        }, {
          default: G(() => [
            le(O.$slots, "selection-footer", { selectedRows: n.value }, void 0, !0)
          ]),
          actions: G(() => [
            le(O.$slots, "selection-footer-actions", { selectedRows: n.value }, void 0, !0)
          ]),
          _: 3
        }, 8, ["amount"])) : F("", !0)
      ]),
      _: 2
    }, [
      !S.value || t.loading ? {
        name: "append-table",
        fn: G(() => [
          le(O.$slots, "append-table", {}, () => {
            var N, he;
            return [
              z("div", p5, [
                t.loading && t.rows.length === 0 ? (y(), E(ke, { key: 0 }, [
                  t.cursorPagination ? F("", !0) : (y(), W(go, {
                    key: 0,
                    width: "180px"
                  })),
                  t.loading && t.rows.length === 0 ? (y(), W(go, {
                    key: 1,
                    width: "350px",
                    height: "70px"
                  })) : F("", !0)
                ], 64)) : (y(), E(ke, { key: 1 }, [
                  t.cursorPagination ? F("", !0) : (y(), E("div", f5, [
                    z("span", h5, [
                      z("span", null, J(T.value), 1),
                      je(" " + J(A(ie)("data-table.results")), 1)
                    ]),
                    z("div", m5, [
                      ee(Lc, {
                        id: "items-per-page",
                        "model-value": f.value,
                        items: [10, 20, 50, 100],
                        "onUpdate:modelValue": oe
                      }, null, 8, ["model-value"]),
                      z("span", g5, J(A(ie)("data-table.per_page")), 1)
                    ])
                  ])),
                  ee(kx, {
                    page: p.value,
                    "onUpdate:page": [
                      R[4] || (R[4] = (ue) => p.value = ue),
                      R[5] || (R[5] = (ue) => t.cursorPagination ? null : a("update:page", ue))
                    ],
                    simple: t.cursorPagination,
                    "next-can-navigate": (N = t.serverside) == null ? void 0 : N.next,
                    "prev-can-navigate": (he = t.serverside) == null ? void 0 : he.prev,
                    pages: h.value,
                    "onClick:next": R[6] || (R[6] = (ue) => t.cursorPagination ? a("click:next", t.serverside.next) : null),
                    "onClick:prev": R[7] || (R[7] = (ue) => t.cursorPagination ? a("click:prev", t.serverside.prev) : null)
                  }, null, 8, ["page", "simple", "next-can-navigate", "prev-can-navigate", "pages"])
                ], 64))
              ])
            ];
          }, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
}, b5 = /* @__PURE__ */ ge(v5, [["__scopeId", "data-v-7c729165"]]), w5 = { class: "flex gap-2" };
Qe([]);
function it(t) {
  this.content = t;
}
it.prototype = {
  constructor: it,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, r) {
    var a = r && r != t ? this.remove(r) : this, o = a.find(t), n = a.content.slice();
    return o == -1 ? n.push(r || t, e) : (n[o + 1] = e, r && (n[o] = r)), new it(n);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var r = this.content.slice();
    return r.splice(e, 2), new it(r);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new it([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var r = this.remove(t).content.slice();
    return r.push(t, e), new it(r);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, r) {
    var a = this.remove(e), o = a.content.slice(), n = a.find(t);
    return o.splice(n == -1 ? o.length : n, 0, e, r), new it(o);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = it.from(t), t.size ? new it(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = it.from(t), t.size ? new it(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = it.from(t);
    for (var r = 0; r < t.content.length; r += 2)
      e = e.remove(t.content[r]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, r) {
      t[e] = r;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
it.from = function(t) {
  if (t instanceof it) return t;
  var e = [];
  if (t) for (var r in t) e.push(r, t[r]);
  return new it(e);
};
function Pf(t, e, r) {
  for (let a = 0; ; a++) {
    if (a == t.childCount || a == e.childCount)
      return t.childCount == e.childCount ? null : r;
    let o = t.child(a), n = e.child(a);
    if (o == n) {
      r += o.nodeSize;
      continue;
    }
    if (!o.sameMarkup(n))
      return r;
    if (o.isText && o.text != n.text) {
      for (let i = 0; o.text[i] == n.text[i]; i++)
        r++;
      return r;
    }
    if (o.content.size || n.content.size) {
      let i = Pf(o.content, n.content, r + 1);
      if (i != null)
        return i;
    }
    r += o.nodeSize;
  }
}
function jf(t, e, r, a) {
  for (let o = t.childCount, n = e.childCount; ; ) {
    if (o == 0 || n == 0)
      return o == n ? null : { a: r, b: a };
    let i = t.child(--o), s = e.child(--n), l = i.nodeSize;
    if (i == s) {
      r -= l, a -= l;
      continue;
    }
    if (!i.sameMarkup(s))
      return { a: r, b: a };
    if (i.isText && i.text != s.text) {
      let d = 0, c = Math.min(i.text.length, s.text.length);
      for (; d < c && i.text[i.text.length - d - 1] == s.text[s.text.length - d - 1]; )
        d++, r--, a--;
      return { a: r, b: a };
    }
    if (i.content.size || s.content.size) {
      let d = jf(i.content, s.content, r - 1, a - 1);
      if (d)
        return d;
    }
    r -= l, a -= l;
  }
}
class re {
  /**
  @internal
  */
  constructor(e, r) {
    if (this.content = e, this.size = r || 0, r == null)
      for (let a = 0; a < e.length; a++)
        this.size += e[a].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, r, a, o = 0, n) {
    for (let i = 0, s = 0; s < r; i++) {
      let l = this.content[i], d = s + l.nodeSize;
      if (d > e && a(l, o + s, n || null, i) !== !1 && l.content.size) {
        let c = s + 1;
        l.nodesBetween(Math.max(0, e - c), Math.min(l.content.size, r - c), a, o + c);
      }
      s = d;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, r, a, o) {
    let n = "", i = !0;
    return this.nodesBetween(e, r, (s, l) => {
      let d = s.isText ? s.text.slice(Math.max(e, l) - l, r - l) : s.isLeaf ? o ? typeof o == "function" ? o(s) : o : s.type.spec.leafText ? s.type.spec.leafText(s) : "" : "";
      s.isBlock && (s.isLeaf && d || s.isTextblock) && a && (i ? i = !1 : n += a), n += d;
    }, 0), n;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let r = this.lastChild, a = e.firstChild, o = this.content.slice(), n = 0;
    for (r.isText && r.sameMarkup(a) && (o[o.length - 1] = r.withText(r.text + a.text), n = 1); n < e.content.length; n++)
      o.push(e.content[n]);
    return new re(o, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, r = this.size) {
    if (e == 0 && r == this.size)
      return this;
    let a = [], o = 0;
    if (r > e)
      for (let n = 0, i = 0; i < r; n++) {
        let s = this.content[n], l = i + s.nodeSize;
        l > e && ((i < e || l > r) && (s.isText ? s = s.cut(Math.max(0, e - i), Math.min(s.text.length, r - i)) : s = s.cut(Math.max(0, e - i - 1), Math.min(s.content.size, r - i - 1))), a.push(s), o += s.nodeSize), i = l;
      }
    return new re(a, o);
  }
  /**
  @internal
  */
  cutByIndex(e, r) {
    return e == r ? re.empty : e == 0 && r == this.content.length ? this : new re(this.content.slice(e, r));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, r) {
    let a = this.content[e];
    if (a == r)
      return this;
    let o = this.content.slice(), n = this.size + r.nodeSize - a.nodeSize;
    return o[e] = r, new re(o, n);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new re([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new re(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let r = 0; r < this.content.length; r++)
      if (!this.content[r].eq(e.content[r]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let r = this.content[e];
    if (!r)
      throw new RangeError("Index " + e + " out of range for " + this);
    return r;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let r = 0, a = 0; r < this.content.length; r++) {
      let o = this.content[r];
      e(o, a, r), a += o.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, r = 0) {
    return Pf(this, e, r);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, r = this.size, a = e.size) {
    return jf(this, e, r, a);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, r = -1) {
    if (e == 0)
      return zn(0, e);
    if (e == this.size)
      return zn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let a = 0, o = 0; ; a++) {
      let n = this.child(a), i = o + n.nodeSize;
      if (i >= e)
        return i == e || r > 0 ? zn(a + 1, i) : zn(a, o);
      o = i;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, r) {
    if (!r)
      return re.empty;
    if (!Array.isArray(r))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new re(r.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return re.empty;
    let r, a = 0;
    for (let o = 0; o < e.length; o++) {
      let n = e[o];
      a += n.nodeSize, o && n.isText && e[o - 1].sameMarkup(n) ? (r || (r = e.slice(0, o)), r[r.length - 1] = n.withText(r[r.length - 1].text + n.text)) : r && r.push(n);
    }
    return new re(r || e, a);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return re.empty;
    if (e instanceof re)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new re([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
re.empty = new re([], 0);
const Os = { index: 0, offset: 0 };
function zn(t, e) {
  return Os.index = t, Os.offset = e, Os;
}
function mi(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let r = Array.isArray(t);
  if (Array.isArray(e) != r)
    return !1;
  if (r) {
    if (t.length != e.length)
      return !1;
    for (let a = 0; a < t.length; a++)
      if (!mi(t[a], e[a]))
        return !1;
  } else {
    for (let a in t)
      if (!(a in e) || !mi(t[a], e[a]))
        return !1;
    for (let a in e)
      if (!(a in t))
        return !1;
  }
  return !0;
}
let Ke = class hl {
  /**
  @internal
  */
  constructor(e, r) {
    this.type = e, this.attrs = r;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let r, a = !1;
    for (let o = 0; o < e.length; o++) {
      let n = e[o];
      if (this.eq(n))
        return e;
      if (this.type.excludes(n.type))
        r || (r = e.slice(0, o));
      else {
        if (n.type.excludes(this.type))
          return e;
        !a && n.type.rank > this.type.rank && (r || (r = e.slice(0, o)), r.push(this), a = !0), r && r.push(n);
      }
    }
    return r || (r = e.slice()), a || r.push(this), r;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let r = 0; r < e.length; r++)
      if (this.eq(e[r]))
        return e.slice(0, r).concat(e.slice(r + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let r = 0; r < e.length; r++)
      if (this.eq(e[r]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && mi(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let r in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, r) {
    if (!r)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let a = e.marks[r.type];
    if (!a)
      throw new RangeError(`There is no mark type ${r.type} in this schema`);
    let o = a.create(r.attrs);
    return a.checkAttrs(o.attrs), o;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, r) {
    if (e == r)
      return !0;
    if (e.length != r.length)
      return !1;
    for (let a = 0; a < e.length; a++)
      if (!e[a].eq(r[a]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return hl.none;
    if (e instanceof hl)
      return [e];
    let r = e.slice();
    return r.sort((a, o) => a.type.rank - o.type.rank), r;
  }
};
Ke.none = [];
class gi extends Error {
}
class me {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, r, a) {
    this.content = e, this.openStart = r, this.openEnd = a;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, r) {
    let a = Rf(this.content, e + this.openStart, r);
    return a && new me(a, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, r) {
    return new me(Vf(this.content, e + this.openStart, r + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, r) {
    if (!r)
      return me.empty;
    let a = r.openStart || 0, o = r.openEnd || 0;
    if (typeof a != "number" || typeof o != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new me(re.fromJSON(e, r.content), a, o);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, r = !0) {
    let a = 0, o = 0;
    for (let n = e.firstChild; n && !n.isLeaf && (r || !n.type.spec.isolating); n = n.firstChild)
      a++;
    for (let n = e.lastChild; n && !n.isLeaf && (r || !n.type.spec.isolating); n = n.lastChild)
      o++;
    return new me(e, a, o);
  }
}
me.empty = new me(re.empty, 0, 0);
function Vf(t, e, r) {
  let { index: a, offset: o } = t.findIndex(e), n = t.maybeChild(a), { index: i, offset: s } = t.findIndex(r);
  if (o == e || n.isText) {
    if (s != r && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(r));
  }
  if (a != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(a, n.copy(Vf(n.content, e - o - 1, r - o - 1)));
}
function Rf(t, e, r, a) {
  let { index: o, offset: n } = t.findIndex(e), i = t.maybeChild(o);
  if (n == e || i.isText)
    return t.cut(0, e).append(r).append(t.cut(e));
  let s = Rf(i.content, e - n - 1, r);
  return s && t.replaceChild(o, i.copy(s));
}
function y5(t, e, r) {
  if (r.openStart > t.depth)
    throw new gi("Inserted content deeper than insertion position");
  if (t.depth - r.openStart != e.depth - r.openEnd)
    throw new gi("Inconsistent open depths");
  return Df(t, e, r, 0);
}
function Df(t, e, r, a) {
  let o = t.index(a), n = t.node(a);
  if (o == e.index(a) && a < t.depth - r.openStart) {
    let i = Df(t, e, r, a + 1);
    return n.copy(n.content.replaceChild(o, i));
  } else if (r.content.size)
    if (!r.openStart && !r.openEnd && t.depth == a && e.depth == a) {
      let i = t.parent, s = i.content;
      return xa(i, s.cut(0, t.parentOffset).append(r.content).append(s.cut(e.parentOffset)));
    } else {
      let { start: i, end: s } = x5(r, t);
      return xa(n, Bf(t, i, s, e, a));
    }
  else return xa(n, vi(t, e, a));
}
function Lf(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new gi("Cannot join " + e.type.name + " onto " + t.type.name);
}
function ml(t, e, r) {
  let a = t.node(r);
  return Lf(a, e.node(r)), a;
}
function ya(t, e) {
  let r = e.length - 1;
  r >= 0 && t.isText && t.sameMarkup(e[r]) ? e[r] = t.withText(e[r].text + t.text) : e.push(t);
}
function No(t, e, r, a) {
  let o = (e || t).node(r), n = 0, i = e ? e.index(r) : o.childCount;
  t && (n = t.index(r), t.depth > r ? n++ : t.textOffset && (ya(t.nodeAfter, a), n++));
  for (let s = n; s < i; s++)
    ya(o.child(s), a);
  e && e.depth == r && e.textOffset && ya(e.nodeBefore, a);
}
function xa(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Bf(t, e, r, a, o) {
  let n = t.depth > o && ml(t, e, o + 1), i = a.depth > o && ml(r, a, o + 1), s = [];
  return No(null, t, o, s), n && i && e.index(o) == r.index(o) ? (Lf(n, i), ya(xa(n, Bf(t, e, r, a, o + 1)), s)) : (n && ya(xa(n, vi(t, e, o + 1)), s), No(e, r, o, s), i && ya(xa(i, vi(r, a, o + 1)), s)), No(a, null, o, s), new re(s);
}
function vi(t, e, r) {
  let a = [];
  if (No(null, t, r, a), t.depth > r) {
    let o = ml(t, e, r + 1);
    ya(xa(o, vi(t, e, r + 1)), a);
  }
  return No(e, null, r, a), new re(a);
}
function x5(t, e) {
  let r = e.depth - t.openStart, a = e.node(r).copy(t.content);
  for (let o = r - 1; o >= 0; o--)
    a = e.node(o).copy(re.from(a));
  return {
    start: a.resolveNoCache(t.openStart + r),
    end: a.resolveNoCache(a.content.size - t.openEnd - r)
  };
}
class Qo {
  /**
  @internal
  */
  constructor(e, r, a) {
    this.pos = e, this.path = r, this.parentOffset = a, this.depth = r.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, r = this.index(this.depth);
    if (r == e.childCount)
      return null;
    let a = this.pos - this.path[this.path.length - 1], o = e.child(r);
    return a ? e.child(r).cut(a) : o;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), r = this.pos - this.path[this.path.length - 1];
    return r ? this.parent.child(e).cut(0, r) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, r) {
    r = this.resolveDepth(r);
    let a = this.path[r * 3], o = r == 0 ? 0 : this.path[r * 3 - 1] + 1;
    for (let n = 0; n < e; n++)
      o += a.child(n).nodeSize;
    return o;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, r = this.index();
    if (e.content.size == 0)
      return Ke.none;
    if (this.textOffset)
      return e.child(r).marks;
    let a = e.maybeChild(r - 1), o = e.maybeChild(r);
    if (!a) {
      let s = a;
      a = o, o = s;
    }
    let n = a.marks;
    for (var i = 0; i < n.length; i++)
      n[i].type.spec.inclusive === !1 && (!o || !n[i].isInSet(o.marks)) && (n = n[i--].removeFromSet(n));
    return n;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let r = this.parent.maybeChild(this.index());
    if (!r || !r.isInline)
      return null;
    let a = r.marks, o = e.parent.maybeChild(e.index());
    for (var n = 0; n < a.length; n++)
      a[n].type.spec.inclusive === !1 && (!o || !a[n].isInSet(o.marks)) && (a = a[n--].removeFromSet(a));
    return a;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let r = this.depth; r > 0; r--)
      if (this.start(r) <= e && this.end(r) >= e)
        return r;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, r) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let a = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); a >= 0; a--)
      if (e.pos <= this.end(a) && (!r || r(this.node(a))))
        return new bi(this, e, a);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let r = 1; r <= this.depth; r++)
      e += (e ? "/" : "") + this.node(r).type.name + "_" + this.index(r - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, r) {
    if (!(r >= 0 && r <= e.content.size))
      throw new RangeError("Position " + r + " out of range");
    let a = [], o = 0, n = r;
    for (let i = e; ; ) {
      let { index: s, offset: l } = i.content.findIndex(n), d = n - l;
      if (a.push(i, s, o + l), !d || (i = i.child(s), i.isText))
        break;
      n = d - 1, o += l + 1;
    }
    return new Qo(r, a, n);
  }
  /**
  @internal
  */
  static resolveCached(e, r) {
    let a = Fc.get(e);
    if (a)
      for (let n = 0; n < a.elts.length; n++) {
        let i = a.elts[n];
        if (i.pos == r)
          return i;
      }
    else
      Fc.set(e, a = new k5());
    let o = a.elts[a.i] = Qo.resolve(e, r);
    return a.i = (a.i + 1) % $5, o;
  }
}
class k5 {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const $5 = 12, Fc = /* @__PURE__ */ new WeakMap();
class bi {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, r, a) {
    this.$from = e, this.$to = r, this.depth = a;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const _5 = /* @__PURE__ */ Object.create(null);
let Ga = class gl {
  /**
  @internal
  */
  constructor(e, r, a, o = Ke.none) {
    this.type = e, this.attrs = r, this.marks = o, this.content = a || re.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, r, a, o = 0) {
    this.content.nodesBetween(e, r, a, o, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, r, a, o) {
    return this.content.textBetween(e, r, a, o);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, r, a) {
    return this.type == e && mi(this.attrs, r || e.defaultAttrs || _5) && Ke.sameSet(this.marks, a || Ke.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new gl(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new gl(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, r = this.content.size) {
    return e == 0 && r == this.content.size ? this : this.copy(this.content.cut(e, r));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, r = this.content.size, a = !1) {
    if (e == r)
      return me.empty;
    let o = this.resolve(e), n = this.resolve(r), i = a ? 0 : o.sharedDepth(r), s = o.start(i), l = o.node(i).content.cut(o.pos - s, n.pos - s);
    return new me(l, o.depth - i, n.depth - i);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, r, a) {
    return y5(this.resolve(e), this.resolve(r), a);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let r = this; ; ) {
      let { index: a, offset: o } = r.content.findIndex(e);
      if (r = r.maybeChild(a), !r)
        return null;
      if (o == e || r.isText)
        return r;
      e -= o + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: r, offset: a } = this.content.findIndex(e);
    return { node: this.content.maybeChild(r), index: r, offset: a };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: r, offset: a } = this.content.findIndex(e);
    if (a < e)
      return { node: this.content.child(r), index: r, offset: a };
    let o = this.content.child(r - 1);
    return { node: o, index: r - 1, offset: a - o.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Qo.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Qo.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, r, a) {
    let o = !1;
    return r > e && this.nodesBetween(e, r, (n) => (a.isInSet(n.marks) && (o = !0), !o)), o;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Ff(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let r = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!r)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return r;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, r, a = re.empty, o = 0, n = a.childCount) {
    let i = this.contentMatchAt(e).matchFragment(a, o, n), s = i && i.matchFragment(this.content, r);
    if (!s || !s.validEnd)
      return !1;
    for (let l = o; l < n; l++)
      if (!this.type.allowsMarks(a.child(l).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, r, a, o) {
    if (o && !this.type.allowsMarks(o))
      return !1;
    let n = this.contentMatchAt(e).matchType(a), i = n && n.matchFragment(this.content, r);
    return i ? i.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = Ke.none;
    for (let r = 0; r < this.marks.length; r++) {
      let a = this.marks[r];
      a.type.checkAttrs(a.attrs), e = a.addToSet(e);
    }
    if (!Ke.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((r) => r.type.name)}`);
    this.content.forEach((r) => r.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let r in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((r) => r.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, r) {
    if (!r)
      throw new RangeError("Invalid input for Node.fromJSON");
    let a;
    if (r.marks) {
      if (!Array.isArray(r.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      a = r.marks.map(e.markFromJSON);
    }
    if (r.type == "text") {
      if (typeof r.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(r.text, a);
    }
    let o = re.fromJSON(e, r.content), n = e.nodeType(r.type).create(r.attrs, o, a);
    return n.type.checkAttrs(n.attrs), n;
  }
};
Ga.prototype.text = void 0;
class wi extends Ga {
  /**
  @internal
  */
  constructor(e, r, a, o) {
    if (super(e, r, null, o), !a)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = a;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ff(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, r) {
    return this.text.slice(e, r);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new wi(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new wi(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, r = this.text.length) {
    return e == 0 && r == this.text.length ? this : this.withText(this.text.slice(e, r));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Ff(t, e) {
  for (let r = t.length - 1; r >= 0; r--)
    e = t[r].type.name + "(" + e + ")";
  return e;
}
let en = class Hf {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, r) {
    let a = new S5(e, r);
    if (a.next == null)
      return Hf.empty;
    let o = qf(a);
    a.next && a.err("Unexpected trailing text");
    let n = I5(A5(o));
    return z5(n, a), n;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let r = 0; r < this.next.length; r++)
      if (this.next[r].type == e)
        return this.next[r].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, r = 0, a = e.childCount) {
    let o = this;
    for (let n = r; o && n < a; n++)
      o = o.matchType(e.child(n).type);
    return o;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: r } = this.next[e];
      if (!(r.isText || r.hasRequiredAttrs()))
        return r;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let r = 0; r < this.next.length; r++)
      for (let a = 0; a < e.next.length; a++)
        if (this.next[r].type == e.next[a].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, r = !1, a = 0) {
    let o = [this];
    function n(i, s) {
      let l = i.matchFragment(e, a);
      if (l && (!r || l.validEnd))
        return re.from(s.map((d) => d.createAndFill()));
      for (let d = 0; d < i.next.length; d++) {
        let { type: c, next: u } = i.next[d];
        if (!(c.isText || c.hasRequiredAttrs()) && o.indexOf(u) == -1) {
          o.push(u);
          let p = n(u, s.concat(c));
          if (p)
            return p;
        }
      }
      return null;
    }
    return n(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let a = 0; a < this.wrapCache.length; a += 2)
      if (this.wrapCache[a] == e)
        return this.wrapCache[a + 1];
    let r = this.computeWrapping(e);
    return this.wrapCache.push(e, r), r;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let r = /* @__PURE__ */ Object.create(null), a = [{ match: this, type: null, via: null }];
    for (; a.length; ) {
      let o = a.shift(), n = o.match;
      if (n.matchType(e)) {
        let i = [];
        for (let s = o; s.type; s = s.via)
          i.push(s.type);
        return i.reverse();
      }
      for (let i = 0; i < n.next.length; i++) {
        let { type: s, next: l } = n.next[i];
        !s.isLeaf && !s.hasRequiredAttrs() && !(s.name in r) && (!o.type || l.validEnd) && (a.push({ match: s.contentMatch, type: s, via: o }), r[s.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function r(a) {
      e.push(a);
      for (let o = 0; o < a.next.length; o++)
        e.indexOf(a.next[o].next) == -1 && r(a.next[o].next);
    }
    return r(this), e.map((a, o) => {
      let n = o + (a.validEnd ? "*" : " ") + " ";
      for (let i = 0; i < a.next.length; i++)
        n += (i ? ", " : "") + a.next[i].type.name + "->" + e.indexOf(a.next[i].next);
      return n;
    }).join(`
`);
  }
};
en.empty = new en(!0);
class S5 {
  constructor(e, r) {
    this.string = e, this.nodeTypes = r, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function qf(t) {
  let e = [];
  do
    e.push(C5(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function C5(t) {
  let e = [];
  do
    e.push(O5(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function O5(t) {
  let e = T5(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = E5(t, e);
    else
      break;
  return e;
}
function Hc(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function E5(t, e) {
  let r = Hc(t), a = r;
  return t.eat(",") && (t.next != "}" ? a = Hc(t) : a = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: r, max: a, expr: e };
}
function M5(t, e) {
  let r = t.nodeTypes, a = r[e];
  if (a)
    return [a];
  let o = [];
  for (let n in r) {
    let i = r[n];
    i.isInGroup(e) && o.push(i);
  }
  return o.length == 0 && t.err("No node type or group '" + e + "' found"), o;
}
function T5(t) {
  if (t.eat("(")) {
    let e = qf(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = M5(t, t.next).map((r) => (t.inline == null ? t.inline = r.isInline : t.inline != r.isInline && t.err("Mixing inline and block content"), { type: "name", value: r }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function A5(t) {
  let e = [[]];
  return o(n(t, 0), r()), e;
  function r() {
    return e.push([]) - 1;
  }
  function a(i, s, l) {
    let d = { term: l, to: s };
    return e[i].push(d), d;
  }
  function o(i, s) {
    i.forEach((l) => l.to = s);
  }
  function n(i, s) {
    if (i.type == "choice")
      return i.exprs.reduce((l, d) => l.concat(n(d, s)), []);
    if (i.type == "seq")
      for (let l = 0; ; l++) {
        let d = n(i.exprs[l], s);
        if (l == i.exprs.length - 1)
          return d;
        o(d, s = r());
      }
    else if (i.type == "star") {
      let l = r();
      return a(s, l), o(n(i.expr, l), l), [a(l)];
    } else if (i.type == "plus") {
      let l = r();
      return o(n(i.expr, s), l), o(n(i.expr, l), l), [a(l)];
    } else {
      if (i.type == "opt")
        return [a(s)].concat(n(i.expr, s));
      if (i.type == "range") {
        let l = s;
        for (let d = 0; d < i.min; d++) {
          let c = r();
          o(n(i.expr, l), c), l = c;
        }
        if (i.max == -1)
          o(n(i.expr, l), l);
        else
          for (let d = i.min; d < i.max; d++) {
            let c = r();
            a(l, c), o(n(i.expr, l), c), l = c;
          }
        return [a(l)];
      } else {
        if (i.type == "name")
          return [a(s, void 0, i.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Uf(t, e) {
  return e - t;
}
function qc(t, e) {
  let r = [];
  return a(e), r.sort(Uf);
  function a(o) {
    let n = t[o];
    if (n.length == 1 && !n[0].term)
      return a(n[0].to);
    r.push(o);
    for (let i = 0; i < n.length; i++) {
      let { term: s, to: l } = n[i];
      !s && r.indexOf(l) == -1 && a(l);
    }
  }
}
function I5(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return r(qc(t, 0));
  function r(a) {
    let o = [];
    a.forEach((i) => {
      t[i].forEach(({ term: s, to: l }) => {
        if (!s)
          return;
        let d;
        for (let c = 0; c < o.length; c++)
          o[c][0] == s && (d = o[c][1]);
        qc(t, l).forEach((c) => {
          d || o.push([s, d = []]), d.indexOf(c) == -1 && d.push(c);
        });
      });
    });
    let n = e[a.join(",")] = new en(a.indexOf(t.length - 1) > -1);
    for (let i = 0; i < o.length; i++) {
      let s = o[i][1].sort(Uf);
      n.next.push({ type: o[i][0], next: e[s.join(",")] || r(s) });
    }
    return n;
  }
}
function z5(t, e) {
  for (let r = 0, a = [t]; r < a.length; r++) {
    let o = a[r], n = !o.validEnd, i = [];
    for (let s = 0; s < o.next.length; s++) {
      let { type: l, next: d } = o.next[s];
      i.push(l.name), n && !(l.isText || l.hasRequiredAttrs()) && (n = !1), a.indexOf(d) == -1 && a.push(d);
    }
    n && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Wf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let a = t[r];
    if (!a.hasDefault)
      return null;
    e[r] = a.default;
  }
  return e;
}
function Kf(t, e) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let a in t) {
    let o = e && e[a];
    if (o === void 0) {
      let n = t[a];
      if (n.hasDefault)
        o = n.default;
      else
        throw new RangeError("No value supplied for attribute " + a);
    }
    r[a] = o;
  }
  return r;
}
function Yf(t, e, r, a) {
  for (let o in e)
    if (!(o in t))
      throw new RangeError(`Unsupported attribute ${o} for ${r} of type ${o}`);
  for (let o in t) {
    let n = t[o];
    n.validate && n.validate(e[o]);
  }
}
function Jf(t, e) {
  let r = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let a in e)
      r[a] = new P5(t, a, e[a]);
  return r;
}
let Uc = class Xf {
  /**
  @internal
  */
  constructor(e, r, a) {
    this.name = e, this.schema = r, this.spec = a, this.markSet = null, this.groups = a.group ? a.group.split(" ") : [], this.attrs = Jf(e, a.attrs), this.defaultAttrs = Wf(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(a.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == en.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Kf(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, r, a) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Ga(this, this.computeAttrs(e), re.from(r), Ke.setFrom(a));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, r, a) {
    return r = re.from(r), this.checkContent(r), new Ga(this, this.computeAttrs(e), r, Ke.setFrom(a));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, r, a) {
    if (e = this.computeAttrs(e), r = re.from(r), r.size) {
      let i = this.contentMatch.fillBefore(r);
      if (!i)
        return null;
      r = i.append(r);
    }
    let o = this.contentMatch.matchFragment(r), n = o && o.fillBefore(re.empty, !0);
    return n ? new Ga(this, e, r.append(n), Ke.setFrom(a)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let r = this.contentMatch.matchFragment(e);
    if (!r || !r.validEnd)
      return !1;
    for (let a = 0; a < e.childCount; a++)
      if (!this.allowsMarks(e.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Yf(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let r = 0; r < e.length; r++)
      if (!this.allowsMarkType(e[r].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let r;
    for (let a = 0; a < e.length; a++)
      this.allowsMarkType(e[a].type) ? r && r.push(e[a]) : r || (r = e.slice(0, a));
    return r ? r.length ? r : Ke.none : e;
  }
  /**
  @internal
  */
  static compile(e, r) {
    let a = /* @__PURE__ */ Object.create(null);
    e.forEach((n, i) => a[n] = new Xf(n, r, i));
    let o = r.spec.topNode || "doc";
    if (!a[o])
      throw new RangeError("Schema is missing its top node type ('" + o + "')");
    if (!a.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let n in a.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return a;
  }
};
function N5(t, e, r) {
  let a = r.split("|");
  return (o) => {
    let n = o === null ? "null" : typeof o;
    if (a.indexOf(n) < 0)
      throw new RangeError(`Expected value of type ${a} for attribute ${e} on type ${t}, got ${n}`);
  };
}
class P5 {
  constructor(e, r, a) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(a, "default"), this.default = a.default, this.validate = typeof a.validate == "string" ? N5(e, r, a.validate) : a.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class ud {
  /**
  @internal
  */
  constructor(e, r, a, o) {
    this.name = e, this.rank = r, this.schema = a, this.spec = o, this.attrs = Jf(e, o.attrs), this.excluded = null;
    let n = Wf(this.attrs);
    this.instance = n ? new Ke(this, n) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new Ke(this, Kf(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, r) {
    let a = /* @__PURE__ */ Object.create(null), o = 0;
    return e.forEach((n, i) => a[n] = new ud(n, o++, r, i)), a;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var r = 0; r < e.length; r++)
      e[r].type == this && (e = e.slice(0, r).concat(e.slice(r + 1)), r--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let r = 0; r < e.length; r++)
      if (e[r].type == this)
        return e[r];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Yf(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class j5 {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let r = this.spec = {};
    for (let o in e)
      r[o] = e[o];
    r.nodes = it.from(e.nodes), r.marks = it.from(e.marks || {}), this.nodes = Uc.compile(this.spec.nodes, this), this.marks = ud.compile(this.spec.marks, this);
    let a = /* @__PURE__ */ Object.create(null);
    for (let o in this.nodes) {
      if (o in this.marks)
        throw new RangeError(o + " can not be both a node and a mark");
      let n = this.nodes[o], i = n.spec.content || "", s = n.spec.marks;
      if (n.contentMatch = a[i] || (a[i] = en.parse(i, this.nodes)), n.inlineContent = n.contentMatch.inlineContent, n.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!n.isInline || !n.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = n;
      }
      n.markSet = s == "_" ? null : s ? Wc(this, s.split(" ")) : s == "" || !n.inlineContent ? [] : null;
    }
    for (let o in this.marks) {
      let n = this.marks[o], i = n.spec.excludes;
      n.excluded = i == null ? [n] : i == "" ? [] : Wc(this, i.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, r = null, a, o) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Uc) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(r, a, o);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, r) {
    let a = this.nodes.text;
    return new wi(a, a.defaultAttrs, e, Ke.setFrom(r));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, r) {
    return typeof e == "string" && (e = this.marks[e]), e.create(r);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Ga.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return Ke.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let r = this.nodes[e];
    if (!r)
      throw new RangeError("Unknown node type: " + e);
    return r;
  }
}
function Wc(t, e) {
  let r = [];
  for (let a = 0; a < e.length; a++) {
    let o = e[a], n = t.marks[o], i = n;
    if (n)
      r.push(n);
    else
      for (let s in t.marks) {
        let l = t.marks[s];
        (o == "_" || l.spec.group && l.spec.group.split(" ").indexOf(o) > -1) && r.push(i = l);
      }
    if (!i)
      throw new SyntaxError("Unknown mark type: '" + e[a] + "'");
  }
  return r;
}
function V5(t) {
  return t.tag != null;
}
function R5(t) {
  return t.style != null;
}
let Kn = class vl {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, r) {
    this.schema = e, this.rules = r, this.tags = [], this.styles = [];
    let a = this.matchedStyles = [];
    r.forEach((o) => {
      if (V5(o))
        this.tags.push(o);
      else if (R5(o)) {
        let n = /[^=]*/.exec(o.style)[0];
        a.indexOf(n) < 0 && a.push(n), this.styles.push(o);
      }
    }), this.normalizeLists = !this.tags.some((o) => {
      if (!/^(ul|ol)\b/.test(o.tag) || !o.node)
        return !1;
      let n = e.nodes[o.node];
      return n.contentMatch.matchType(n);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, r = {}) {
    let a = new Yc(this, r, !1);
    return a.addAll(e, Ke.none, r.from, r.to), a.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, r = {}) {
    let a = new Yc(this, r, !0);
    return a.addAll(e, Ke.none, r.from, r.to), me.maxOpen(a.finish());
  }
  /**
  @internal
  */
  matchTag(e, r, a) {
    for (let o = a ? this.tags.indexOf(a) + 1 : 0; o < this.tags.length; o++) {
      let n = this.tags[o];
      if (B5(e, n.tag) && (n.namespace === void 0 || e.namespaceURI == n.namespace) && (!n.context || r.matchesContext(n.context))) {
        if (n.getAttrs) {
          let i = n.getAttrs(e);
          if (i === !1)
            continue;
          n.attrs = i || void 0;
        }
        return n;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, r, a, o) {
    for (let n = o ? this.styles.indexOf(o) + 1 : 0; n < this.styles.length; n++) {
      let i = this.styles[n], s = i.style;
      if (!(s.indexOf(e) != 0 || i.context && !a.matchesContext(i.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      s.length > e.length && (s.charCodeAt(e.length) != 61 || s.slice(e.length + 1) != r))) {
        if (i.getAttrs) {
          let l = i.getAttrs(r);
          if (l === !1)
            continue;
          i.attrs = l || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let r = [];
    function a(o) {
      let n = o.priority == null ? 50 : o.priority, i = 0;
      for (; i < r.length; i++) {
        let s = r[i];
        if ((s.priority == null ? 50 : s.priority) < n)
          break;
      }
      r.splice(i, 0, o);
    }
    for (let o in e.marks) {
      let n = e.marks[o].spec.parseDOM;
      n && n.forEach((i) => {
        a(i = Jc(i)), i.mark || i.ignore || i.clearMark || (i.mark = o);
      });
    }
    for (let o in e.nodes) {
      let n = e.nodes[o].spec.parseDOM;
      n && n.forEach((i) => {
        a(i = Jc(i)), i.node || i.ignore || i.mark || (i.node = o);
      });
    }
    return r;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new vl(e, vl.schemaRules(e)));
  }
};
const Gf = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, D5 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Zf = { ol: !0, ul: !0 }, yi = 1, xi = 2, Po = 4;
function Kc(t, e, r) {
  return e != null ? (e ? yi : 0) | (e === "full" ? xi : 0) : t && t.whitespace == "pre" ? yi | xi : r & ~Po;
}
class Nn {
  constructor(e, r, a, o, n, i) {
    this.type = e, this.attrs = r, this.marks = a, this.solid = o, this.options = i, this.content = [], this.activeMarks = Ke.none, this.match = n || (i & Po ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let r = this.type.contentMatch.fillBefore(re.from(e));
      if (r)
        this.match = this.type.contentMatch.matchFragment(r);
      else {
        let a = this.type.contentMatch, o;
        return (o = a.findWrapping(e.type)) ? (this.match = a, o) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & yi)) {
      let a = this.content[this.content.length - 1], o;
      if (a && a.isText && (o = /[ \t\r\n\u000c]+$/.exec(a.text))) {
        let n = a;
        a.text.length == o[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - o[0].length));
      }
    }
    let r = re.from(this.content);
    return !e && this.match && (r = r.append(this.match.fillBefore(re.empty, !0))), this.type ? this.type.create(this.attrs, r, this.marks) : r;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Gf.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Yc {
  constructor(e, r, a) {
    this.parser = e, this.options = r, this.isOpen = a, this.open = 0;
    let o = r.topNode, n, i = Kc(null, r.preserveWhitespace, 0) | (a ? Po : 0);
    o ? n = new Nn(o.type, o.attrs, Ke.none, !0, r.topMatch || o.type.contentMatch, i) : a ? n = new Nn(null, null, Ke.none, !0, null, i) : n = new Nn(e.schema.topNodeType, null, Ke.none, !0, null, i), this.nodes = [n], this.find = r.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, r) {
    e.nodeType == 3 ? this.addTextNode(e, r) : e.nodeType == 1 && this.addElement(e, r);
  }
  addTextNode(e, r) {
    let a = e.nodeValue, o = this.top;
    if (o.options & xi || o.inlineContext(e) || /[^ \t\r\n\u000c]/.test(a)) {
      if (o.options & yi)
        o.options & xi ? a = a.replace(/\r\n?/g, `
`) : a = a.replace(/\r?\n|\r/g, " ");
      else if (a = a.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(a) && this.open == this.nodes.length - 1) {
        let n = o.content[o.content.length - 1], i = e.previousSibling;
        (!n || i && i.nodeName == "BR" || n.isText && /[ \t\r\n\u000c]$/.test(n.text)) && (a = a.slice(1));
      }
      a && this.insertNode(this.parser.schema.text(a), r), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, r, a) {
    let o = e.nodeName.toLowerCase(), n;
    Zf.hasOwnProperty(o) && this.parser.normalizeLists && L5(e);
    let i = this.options.ruleFromNode && this.options.ruleFromNode(e) || (n = this.parser.matchTag(e, this, a));
    if (i ? i.ignore : D5.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, r);
    else if (!i || i.skip || i.closeParent) {
      i && i.closeParent ? this.open = Math.max(0, this.open - 1) : i && i.skip.nodeType && (e = i.skip);
      let s, l = this.top, d = this.needsBlock;
      if (Gf.hasOwnProperty(o))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), s = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, r);
        return;
      }
      let c = i && i.skip ? r : this.readStyles(e, r);
      c && this.addAll(e, c), s && this.sync(l), this.needsBlock = d;
    } else {
      let s = this.readStyles(e, r);
      s && this.addElementByRule(e, i, s, i.consuming === !1 ? n : void 0);
    }
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, r) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), r);
  }
  // Called for ignored nodes
  ignoreFallback(e, r) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), r);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, r) {
    let a = e.style;
    if (a && a.length)
      for (let o = 0; o < this.parser.matchedStyles.length; o++) {
        let n = this.parser.matchedStyles[o], i = a.getPropertyValue(n);
        if (i)
          for (let s = void 0; ; ) {
            let l = this.parser.matchStyle(n, i, this, s);
            if (!l)
              break;
            if (l.ignore)
              return null;
            if (l.clearMark ? r = r.filter((d) => !l.clearMark(d)) : r = r.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === !1)
              s = l;
            else
              break;
          }
      }
    return r;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, r, a, o) {
    let n, i;
    if (r.node)
      if (i = this.parser.schema.nodes[r.node], i.isLeaf)
        this.insertNode(i.create(r.attrs), a) || this.leafFallback(e, a);
      else {
        let l = this.enter(i, r.attrs || null, a, r.preserveWhitespace);
        l && (n = !0, a = l);
      }
    else {
      let l = this.parser.schema.marks[r.mark];
      a = a.concat(l.create(r.attrs));
    }
    let s = this.top;
    if (i && i.isLeaf)
      this.findInside(e);
    else if (o)
      this.addElement(e, a, o);
    else if (r.getContent)
      this.findInside(e), r.getContent(e, this.parser.schema).forEach((l) => this.insertNode(l, a));
    else {
      let l = e;
      typeof r.contentElement == "string" ? l = e.querySelector(r.contentElement) : typeof r.contentElement == "function" ? l = r.contentElement(e) : r.contentElement && (l = r.contentElement), this.findAround(e, l, !0), this.addAll(l, a), this.findAround(e, l, !1);
    }
    n && this.sync(s) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, r, a, o) {
    let n = a || 0;
    for (let i = a ? e.childNodes[a] : e.firstChild, s = o == null ? null : e.childNodes[o]; i != s; i = i.nextSibling, ++n)
      this.findAtPoint(e, n), this.addDOM(i, r);
    this.findAtPoint(e, n);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, r) {
    let a, o;
    for (let n = this.open; n >= 0; n--) {
      let i = this.nodes[n], s = i.findWrapping(e);
      if (s && (!a || a.length > s.length) && (a = s, o = i, !s.length) || i.solid)
        break;
    }
    if (!a)
      return null;
    this.sync(o);
    for (let n = 0; n < a.length; n++)
      r = this.enterInner(a[n], null, r, !1);
    return r;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (r = this.enterInner(o, null, r));
    }
    let a = this.findPlace(e, r);
    if (a) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let n = Ke.none;
      for (let i of a.concat(e.marks))
        (o.type ? o.type.allowsMarkType(i.type) : Xc(i.type, e.type)) && (n = i.addToSet(n));
      return o.content.push(e.mark(n)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, r, a, o) {
    let n = this.findPlace(e.create(r), a);
    return n && (n = this.enterInner(e, r, a, !0, o)), n;
  }
  // Open a node of the given type
  enterInner(e, r, a, o = !1, n) {
    this.closeExtra();
    let i = this.top;
    i.match = i.match && i.match.matchType(e);
    let s = Kc(e, n, i.options);
    i.options & Po && i.content.length == 0 && (s |= Po);
    let l = Ke.none;
    return a = a.filter((d) => (i.type ? i.type.allowsMarkType(d.type) : Xc(d.type, e)) ? (l = d.addToSet(l), !1) : !0), this.nodes.push(new Nn(e, r, l, o, null, s)), this.open++, a;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let r = this.nodes.length - 1;
    if (r > this.open) {
      for (; r > this.open; r--)
        this.nodes[r - 1].content.push(this.nodes[r].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let r = this.open; r >= 0; r--)
      if (this.nodes[r] == e)
        return this.open = r, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let r = this.open; r >= 0; r--) {
      let a = this.nodes[r].content;
      for (let o = a.length - 1; o >= 0; o--)
        e += a[o].nodeSize;
      r && e++;
    }
    return e;
  }
  findAtPoint(e, r) {
    if (this.find)
      for (let a = 0; a < this.find.length; a++)
        this.find[a].node == e && this.find[a].offset == r && (this.find[a].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && (this.find[r].pos = this.currentPos);
  }
  findAround(e, r, a) {
    if (e != r && this.find)
      for (let o = 0; o < this.find.length; o++)
        this.find[o].pos == null && e.nodeType == 1 && e.contains(this.find[o].node) && r.compareDocumentPosition(this.find[o].node) & (a ? 2 : 4) && (this.find[o].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && (this.find[r].pos = this.currentPos - (e.nodeValue.length - this.find[r].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let r = e.split("/"), a = this.options.context, o = !this.isOpen && (!a || a.parent.type == this.nodes[0].type), n = -(a ? a.depth + 1 : 0) + (o ? 0 : 1), i = (s, l) => {
      for (; s >= 0; s--) {
        let d = r[s];
        if (d == "") {
          if (s == r.length - 1 || s == 0)
            continue;
          for (; l >= n; l--)
            if (i(s - 1, l))
              return !0;
          return !1;
        } else {
          let c = l > 0 || l == 0 && o ? this.nodes[l].type : a && l >= n ? a.node(l - n).type : null;
          if (!c || c.name != d && !c.isInGroup(d))
            return !1;
          l--;
        }
      }
      return !0;
    };
    return i(r.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let r = e.depth; r >= 0; r--) {
        let a = e.node(r).contentMatchAt(e.indexAfter(r)).defaultType;
        if (a && a.isTextblock && a.defaultAttrs)
          return a;
      }
    for (let r in this.parser.schema.nodes) {
      let a = this.parser.schema.nodes[r];
      if (a.isTextblock && a.defaultAttrs)
        return a;
    }
  }
}
function L5(t) {
  for (let e = t.firstChild, r = null; e; e = e.nextSibling) {
    let a = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    a && Zf.hasOwnProperty(a) && r ? (r.appendChild(e), e = r) : a == "li" ? r = e : a && (r = null);
  }
}
function B5(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Jc(t) {
  let e = {};
  for (let r in t)
    e[r] = t[r];
  return e;
}
function Xc(t, e) {
  let r = e.schema.nodes;
  for (let a in r) {
    let o = r[a];
    if (!o.allowsMarkType(t))
      continue;
    let n = [], i = (s) => {
      n.push(s);
      for (let l = 0; l < s.edgeCount; l++) {
        let { type: d, next: c } = s.edge(l);
        if (d == e || n.indexOf(c) < 0 && i(c))
          return !0;
      }
    };
    if (i(o.contentMatch))
      return !0;
  }
}
class es {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, r) {
    this.nodes = e, this.marks = r;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, r = {}, a) {
    a || (a = Es(r).createDocumentFragment());
    let o = a, n = [];
    return e.forEach((i) => {
      if (n.length || i.marks.length) {
        let s = 0, l = 0;
        for (; s < n.length && l < i.marks.length; ) {
          let d = i.marks[l];
          if (!this.marks[d.type.name]) {
            l++;
            continue;
          }
          if (!d.eq(n[s][0]) || d.type.spec.spanning === !1)
            break;
          s++, l++;
        }
        for (; s < n.length; )
          o = n.pop()[1];
        for (; l < i.marks.length; ) {
          let d = i.marks[l++], c = this.serializeMark(d, i.isInline, r);
          c && (n.push([d, o]), o.appendChild(c.dom), o = c.contentDOM || c.dom);
        }
      }
      o.appendChild(this.serializeNodeInner(i, r));
    }), a;
  }
  /**
  @internal
  */
  serializeNodeInner(e, r) {
    let { dom: a, contentDOM: o } = Yn(Es(r), this.nodes[e.type.name](e), null, e.attrs);
    if (o) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, r, o);
    }
    return a;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, r = {}) {
    let a = this.serializeNodeInner(e, r);
    for (let o = e.marks.length - 1; o >= 0; o--) {
      let n = this.serializeMark(e.marks[o], e.isInline, r);
      n && ((n.contentDOM || n.dom).appendChild(a), a = n.dom);
    }
    return a;
  }
  /**
  @internal
  */
  serializeMark(e, r, a = {}) {
    let o = this.marks[e.type.name];
    return o && Yn(Es(a), o(e, r), null, e.attrs);
  }
  static renderSpec(e, r, a = null, o) {
    return Yn(e, r, a, o);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new es(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let r = Gc(e.nodes);
    return r.text || (r.text = (a) => a.text), r;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Gc(e.marks);
  }
}
function Gc(t) {
  let e = {};
  for (let r in t) {
    let a = t[r].spec.toDOM;
    a && (e[r] = a);
  }
  return e;
}
function Es(t) {
  return t.document || window.document;
}
const Zc = /* @__PURE__ */ new WeakMap();
function F5(t) {
  let e = Zc.get(t);
  return e === void 0 && Zc.set(t, e = H5(t)), e;
}
function H5(t) {
  let e = null;
  function r(a) {
    if (a && typeof a == "object")
      if (Array.isArray(a))
        if (typeof a[0] == "string")
          e || (e = []), e.push(a);
        else
          for (let o = 0; o < a.length; o++)
            r(a[o]);
      else
        for (let o in a)
          r(a[o]);
  }
  return r(t), e;
}
function Yn(t, e, r, a) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let o = e[0], n;
  if (typeof o != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (a && (n = F5(a)) && n.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let i = o.indexOf(" ");
  i > 0 && (r = o.slice(0, i), o = o.slice(i + 1));
  let s, l = r ? t.createElementNS(r, o) : t.createElement(o), d = e[1], c = 1;
  if (d && typeof d == "object" && d.nodeType == null && !Array.isArray(d)) {
    c = 2;
    for (let u in d)
      if (d[u] != null) {
        let p = u.indexOf(" ");
        p > 0 ? l.setAttributeNS(u.slice(0, p), u.slice(p + 1), d[u]) : l.setAttribute(u, d[u]);
      }
  }
  for (let u = c; u < e.length; u++) {
    let p = e[u];
    if (p === 0) {
      if (u < e.length - 1 || u > c)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: l, contentDOM: l };
    } else {
      let { dom: h, contentDOM: f } = Yn(t, p, r, a);
      if (l.appendChild(h), f) {
        if (s)
          throw new RangeError("Multiple content holes");
        s = f;
      }
    }
  }
  return { dom: l, contentDOM: s };
}
const Qf = 65535, eh = Math.pow(2, 16);
function q5(t, e) {
  return t + e * eh;
}
function Qc(t) {
  return t & Qf;
}
function U5(t) {
  return (t - (t & Qf)) / eh;
}
const th = 1, rh = 2, Jn = 4, ah = 8;
class bl {
  /**
  @internal
  */
  constructor(e, r, a) {
    this.pos = e, this.delInfo = r, this.recover = a;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & ah) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (th | Jn)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (rh | Jn)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Jn) > 0;
  }
}
class jt {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, r = !1) {
    if (this.ranges = e, this.inverted = r, !e.length && jt.empty)
      return jt.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let r = 0, a = Qc(e);
    if (!this.inverted)
      for (let o = 0; o < a; o++)
        r += this.ranges[o * 3 + 2] - this.ranges[o * 3 + 1];
    return this.ranges[a * 3] + r + U5(e);
  }
  mapResult(e, r = 1) {
    return this._map(e, r, !1);
  }
  map(e, r = 1) {
    return this._map(e, r, !0);
  }
  /**
  @internal
  */
  _map(e, r, a) {
    let o = 0, n = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let s = 0; s < this.ranges.length; s += 3) {
      let l = this.ranges[s] - (this.inverted ? o : 0);
      if (l > e)
        break;
      let d = this.ranges[s + n], c = this.ranges[s + i], u = l + d;
      if (e <= u) {
        let p = d ? e == l ? -1 : e == u ? 1 : r : r, h = l + o + (p < 0 ? 0 : c);
        if (a)
          return h;
        let f = e == (r < 0 ? l : u) ? null : q5(s / 3, e - l), m = e == l ? rh : e == u ? th : Jn;
        return (r < 0 ? e != l : e != u) && (m |= ah), new bl(h, m, f);
      }
      o += c - d;
    }
    return a ? e + o : new bl(e + o, 0, null);
  }
  /**
  @internal
  */
  touches(e, r) {
    let a = 0, o = Qc(r), n = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let s = 0; s < this.ranges.length; s += 3) {
      let l = this.ranges[s] - (this.inverted ? a : 0);
      if (l > e)
        break;
      let d = this.ranges[s + n], c = l + d;
      if (e <= c && s == o * 3)
        return !0;
      a += this.ranges[s + i] - d;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let r = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
    for (let o = 0, n = 0; o < this.ranges.length; o += 3) {
      let i = this.ranges[o], s = i - (this.inverted ? n : 0), l = i + (this.inverted ? 0 : n), d = this.ranges[o + r], c = this.ranges[o + a];
      e(s, s + d, l, l + c), n += c - d;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new jt(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? jt.empty : new jt(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
jt.empty = new jt([]);
class jo {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], r, a = 0, o = e.length) {
    this.maps = e, this.mirror = r, this.from = a, this.to = o;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, r = this.maps.length) {
    return new jo(this.maps, this.mirror, e, r);
  }
  /**
  @internal
  */
  copy() {
    return new jo(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, r) {
    this.to = this.maps.push(e), r != null && this.setMirror(this.maps.length - 1, r);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let r = 0, a = this.maps.length; r < e.maps.length; r++) {
      let o = e.getMirror(r);
      this.appendMap(e.maps[r], o != null && o < r ? a + o : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let r = 0; r < this.mirror.length; r++)
        if (this.mirror[r] == e)
          return this.mirror[r + (r % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, r) {
    this.mirror || (this.mirror = []), this.mirror.push(e, r);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let r = e.maps.length - 1, a = this.maps.length + e.maps.length; r >= 0; r--) {
      let o = e.getMirror(r);
      this.appendMap(e.maps[r].invert(), o != null && o > r ? a - o - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new jo();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, r = 1) {
    if (this.mirror)
      return this._map(e, r, !0);
    for (let a = this.from; a < this.to; a++)
      e = this.maps[a].map(e, r);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, r = 1) {
    return this._map(e, r, !1);
  }
  /**
  @internal
  */
  _map(e, r, a) {
    let o = 0;
    for (let n = this.from; n < this.to; n++) {
      let i = this.maps[n], s = i.mapResult(e, r);
      if (s.recover != null) {
        let l = this.getMirror(n);
        if (l != null && l > n && l < this.to) {
          n = l, e = this.maps[l].recover(s.recover);
          continue;
        }
      }
      o |= s.delInfo, e = s.pos;
    }
    return a ? e : new bl(e, o, null);
  }
}
const Ms = /* @__PURE__ */ Object.create(null);
class ft {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return jt.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, r) {
    if (!r || !r.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let a = Ms[r.stepType];
    if (!a)
      throw new RangeError(`No step type ${r.stepType} defined`);
    return a.fromJSON(e, r);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, r) {
    if (e in Ms)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Ms[e] = r, r.prototype.jsonID = e, r;
  }
}
let kt = class xo {
  /**
  @internal
  */
  constructor(e, r) {
    this.doc = e, this.failed = r;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new xo(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new xo(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, r, a, o) {
    try {
      return xo.ok(e.replace(r, a, o));
    } catch (n) {
      if (n instanceof gi)
        return xo.fail(n.message);
      throw n;
    }
  }
};
function pd(t, e, r) {
  let a = [];
  for (let o = 0; o < t.childCount; o++) {
    let n = t.child(o);
    n.content.size && (n = n.copy(pd(n.content, e, n))), n.isInline && (n = e(n, r, o)), a.push(n);
  }
  return re.fromArray(a);
}
let oh = class ko extends ft {
  /**
  Create a mark step.
  */
  constructor(e, r, a) {
    super(), this.from = e, this.to = r, this.mark = a;
  }
  apply(e) {
    let r = e.slice(this.from, this.to), a = e.resolve(this.from), o = a.node(a.sharedDepth(this.to)), n = new me(pd(r.content, (i, s) => !i.isAtom || !s.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), o), r.openStart, r.openEnd);
    return kt.fromReplace(e, this.from, this.to, n);
  }
  invert() {
    return new ha(this.from, this.to, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.from, 1), a = e.mapResult(this.to, -1);
    return r.deleted && a.deleted || r.pos >= a.pos ? null : new ko(r.pos, a.pos, this.mark);
  }
  merge(e) {
    return e instanceof ko && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ko(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.from != "number" || typeof r.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new ko(r.from, r.to, e.markFromJSON(r.mark));
  }
};
ft.jsonID("addMark", oh);
class ha extends ft {
  /**
  Create a mark-removing step.
  */
  constructor(e, r, a) {
    super(), this.from = e, this.to = r, this.mark = a;
  }
  apply(e) {
    let r = e.slice(this.from, this.to), a = new me(pd(r.content, (o) => o.mark(this.mark.removeFromSet(o.marks)), e), r.openStart, r.openEnd);
    return kt.fromReplace(e, this.from, this.to, a);
  }
  invert() {
    return new oh(this.from, this.to, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.from, 1), a = e.mapResult(this.to, -1);
    return r.deleted && a.deleted || r.pos >= a.pos ? null : new ha(r.pos, a.pos, this.mark);
  }
  merge(e) {
    return e instanceof ha && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ha(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.from != "number" || typeof r.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new ha(r.from, r.to, e.markFromJSON(r.mark));
  }
}
ft.jsonID("removeMark", ha);
let nh = class $o extends ft {
  /**
  Create a node mark step.
  */
  constructor(e, r) {
    super(), this.pos = e, this.mark = r;
  }
  apply(e) {
    let r = e.nodeAt(this.pos);
    if (!r)
      return kt.fail("No node at mark step's position");
    let a = r.type.create(r.attrs, null, this.mark.addToSet(r.marks));
    return kt.fromReplace(e, this.pos, this.pos + 1, new me(re.from(a), 0, r.isLeaf ? 0 : 1));
  }
  invert(e) {
    let r = e.nodeAt(this.pos);
    if (r) {
      let a = this.mark.addToSet(r.marks);
      if (a.length == r.marks.length) {
        for (let o = 0; o < r.marks.length; o++)
          if (!r.marks[o].isInSet(a))
            return new $o(this.pos, r.marks[o]);
        return new $o(this.pos, this.mark);
      }
    }
    return new tn(this.pos, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.pos, 1);
    return r.deletedAfter ? null : new $o(r.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new $o(r.pos, e.markFromJSON(r.mark));
  }
};
ft.jsonID("addNodeMark", nh);
class tn extends ft {
  /**
  Create a mark-removing step.
  */
  constructor(e, r) {
    super(), this.pos = e, this.mark = r;
  }
  apply(e) {
    let r = e.nodeAt(this.pos);
    if (!r)
      return kt.fail("No node at mark step's position");
    let a = r.type.create(r.attrs, null, this.mark.removeFromSet(r.marks));
    return kt.fromReplace(e, this.pos, this.pos + 1, new me(re.from(a), 0, r.isLeaf ? 0 : 1));
  }
  invert(e) {
    let r = e.nodeAt(this.pos);
    return !r || !this.mark.isInSet(r.marks) ? this : new nh(this.pos, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.pos, 1);
    return r.deletedAfter ? null : new tn(r.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new tn(r.pos, e.markFromJSON(r.mark));
  }
}
ft.jsonID("removeNodeMark", tn);
class Nt extends ft {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, r, a, o = !1) {
    super(), this.from = e, this.to = r, this.slice = a, this.structure = o;
  }
  apply(e) {
    return this.structure && wl(e, this.from, this.to) ? kt.fail("Structure replace would overwrite content") : kt.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new jt([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Nt(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let r = e.mapResult(this.from, 1), a = e.mapResult(this.to, -1);
    return r.deletedAcross && a.deletedAcross ? null : new Nt(r.pos, Math.max(r.pos, a.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Nt) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let r = this.slice.size + e.slice.size == 0 ? me.empty : new me(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Nt(this.from, this.to + (e.to - e.from), r, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let r = this.slice.size + e.slice.size == 0 ? me.empty : new me(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Nt(e.from, this.to, r, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.from != "number" || typeof r.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Nt(r.from, r.to, me.fromJSON(e, r.slice), !!r.structure);
  }
}
ft.jsonID("replace", Nt);
let wr = class Xn extends ft {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, r, a, o, n, i, s = !1) {
    super(), this.from = e, this.to = r, this.gapFrom = a, this.gapTo = o, this.slice = n, this.insert = i, this.structure = s;
  }
  apply(e) {
    if (this.structure && (wl(e, this.from, this.gapFrom) || wl(e, this.gapTo, this.to)))
      return kt.fail("Structure gap-replace would overwrite content");
    let r = e.slice(this.gapFrom, this.gapTo);
    if (r.openStart || r.openEnd)
      return kt.fail("Gap is not a flat range");
    let a = this.slice.insertAt(this.insert, r.content);
    return a ? kt.fromReplace(e, this.from, this.to, a) : kt.fail("Content does not fit in gap");
  }
  getMap() {
    return new jt([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let r = this.gapTo - this.gapFrom;
    return new Xn(this.from, this.from + this.slice.size + r, this.from + this.insert, this.from + this.insert + r, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let r = e.mapResult(this.from, 1), a = e.mapResult(this.to, -1), o = this.from == this.gapFrom ? r.pos : e.map(this.gapFrom, -1), n = this.to == this.gapTo ? a.pos : e.map(this.gapTo, 1);
    return r.deletedAcross && a.deletedAcross || o < r.pos || n > a.pos ? null : new Xn(r.pos, a.pos, o, n, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.from != "number" || typeof r.to != "number" || typeof r.gapFrom != "number" || typeof r.gapTo != "number" || typeof r.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new Xn(r.from, r.to, r.gapFrom, r.gapTo, me.fromJSON(e, r.slice), r.insert, !!r.structure);
  }
};
ft.jsonID("replaceAround", wr);
function wl(t, e, r) {
  let a = t.resolve(e), o = r - e, n = a.depth;
  for (; o > 0 && n > 0 && a.indexAfter(n) == a.node(n).childCount; )
    n--, o--;
  if (o > 0) {
    let i = a.node(n).maybeChild(a.indexAfter(n));
    for (; o > 0; ) {
      if (!i || i.isLeaf)
        return !0;
      i = i.firstChild, o--;
    }
  }
  return !1;
}
function W5(t, e, r) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (r == t.childCount || t.canReplace(0, r));
}
function uo(t) {
  let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth; ; --r) {
    let a = t.$from.node(r), o = t.$from.index(r), n = t.$to.indexAfter(r);
    if (r < t.depth && a.canReplace(o, n, e))
      return r;
    if (r == 0 || a.type.spec.isolating || !W5(a, o, n))
      break;
  }
  return null;
}
function ih(t, e, r = null, a = t) {
  let o = K5(t, e), n = o && Y5(a, e);
  return n ? o.map(eu).concat({ type: e, attrs: r }).concat(n.map(eu)) : null;
}
function eu(t) {
  return { type: t, attrs: null };
}
function K5(t, e) {
  let { parent: r, startIndex: a, endIndex: o } = t, n = r.contentMatchAt(a).findWrapping(e);
  if (!n)
    return null;
  let i = n.length ? n[0] : e;
  return r.canReplaceWith(a, o, i) ? n : null;
}
function Y5(t, e) {
  let { parent: r, startIndex: a, endIndex: o } = t, n = r.child(a), i = e.contentMatch.findWrapping(n.type);
  if (!i)
    return null;
  let s = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let l = a; s && l < o; l++)
    s = s.matchType(r.child(l).type);
  return !s || !s.validEnd ? null : i;
}
function Za(t, e, r = 1, a) {
  let o = t.resolve(e), n = o.depth - r, i = a && a[a.length - 1] || o.parent;
  if (n < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !i.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount)))
    return !1;
  for (let d = o.depth - 1, c = r - 2; d > n; d--, c--) {
    let u = o.node(d), p = o.index(d);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(p, u.childCount), f = a && a[c + 1];
    f && (h = h.replaceChild(0, f.type.create(f.attrs)));
    let m = a && a[c] || u;
    if (!u.canReplace(p + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let s = o.indexAfter(n), l = a && a[0];
  return o.node(n).canReplaceWith(s, s, l ? l.type : o.node(n + 1).type);
}
function za(t, e) {
  let r = t.resolve(e), a = r.index();
  return sh(r.nodeBefore, r.nodeAfter) && r.parent.canReplace(a, a + 1);
}
function J5(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let r = t.contentMatchAt(t.childCount), { linebreakReplacement: a } = t.type.schema;
  for (let o = 0; o < e.childCount; o++) {
    let n = e.child(o), i = n.type == a ? t.type.schema.nodes.text : n.type;
    if (r = r.matchType(i), !r || !t.type.allowsMarks(n.marks))
      return !1;
  }
  return r.validEnd;
}
function sh(t, e) {
  return !!(t && e && !t.isLeaf && J5(t, e));
}
function ts(t, e, r = -1) {
  let a = t.resolve(e);
  for (let o = a.depth; ; o--) {
    let n, i, s = a.index(o);
    if (o == a.depth ? (n = a.nodeBefore, i = a.nodeAfter) : r > 0 ? (n = a.node(o + 1), s++, i = a.node(o).maybeChild(s)) : (n = a.node(o).maybeChild(s - 1), i = a.node(o + 1)), n && !n.isTextblock && sh(n, i) && a.node(o).canReplace(s, s + 1))
      return e;
    if (o == 0)
      break;
    e = r < 0 ? a.before(o) : a.after(o);
  }
}
function X5(t, e, r) {
  let a = t.resolve(e);
  if (!r.content.size)
    return e;
  let o = r.content;
  for (let n = 0; n < r.openStart; n++)
    o = o.firstChild.content;
  for (let n = 1; n <= (r.openStart == 0 && r.size ? 2 : 1); n++)
    for (let i = a.depth; i >= 0; i--) {
      let s = i == a.depth ? 0 : a.pos <= (a.start(i + 1) + a.end(i + 1)) / 2 ? -1 : 1, l = a.index(i) + (s > 0 ? 1 : 0), d = a.node(i), c = !1;
      if (n == 1)
        c = d.canReplace(l, l, o);
      else {
        let u = d.contentMatchAt(l).findWrapping(o.firstChild.type);
        c = u && d.canReplaceWith(l, l, u[0]);
      }
      if (c)
        return s == 0 ? a.pos : s < 0 ? a.before(i + 1) : a.after(i + 1);
    }
  return null;
}
function fd(t, e, r = e, a = me.empty) {
  if (e == r && !a.size)
    return null;
  let o = t.resolve(e), n = t.resolve(r);
  return G5(o, n, a) ? new Nt(e, r, a) : new Z5(o, n, a).fit();
}
function G5(t, e, r) {
  return !r.openStart && !r.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), r.content);
}
class Z5 {
  constructor(e, r, a) {
    this.$from = e, this.$to = r, this.unplaced = a, this.frontier = [], this.placed = re.empty;
    for (let o = 0; o <= e.depth; o++) {
      let n = e.node(o);
      this.frontier.push({
        type: n.type,
        match: n.contentMatchAt(e.indexAfter(o))
      });
    }
    for (let o = e.depth; o > 0; o--)
      this.placed = re.from(e.node(o).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let d = this.findFittable();
      d ? this.placeNodes(d) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), r = this.placed.size - this.depth - this.$from.depth, a = this.$from, o = this.close(e < 0 ? this.$to : a.doc.resolve(e));
    if (!o)
      return null;
    let n = this.placed, i = a.depth, s = o.depth;
    for (; i && s && n.childCount == 1; )
      n = n.firstChild.content, i--, s--;
    let l = new me(n, i, s);
    return e > -1 ? new wr(a.pos, e, this.$to.pos, this.$to.end(), l, r) : l.size || a.pos != this.$to.pos ? new Nt(a.pos, o.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let r = this.unplaced.content, a = 0, o = this.unplaced.openEnd; a < e; a++) {
      let n = r.firstChild;
      if (r.childCount > 1 && (o = 0), n.type.spec.isolating && o <= a) {
        e = a;
        break;
      }
      r = n.content;
    }
    for (let r = 1; r <= 2; r++)
      for (let a = r == 1 ? e : this.unplaced.openStart; a >= 0; a--) {
        let o, n = null;
        a ? (n = Ts(this.unplaced.content, a - 1).firstChild, o = n.content) : o = this.unplaced.content;
        let i = o.firstChild;
        for (let s = this.depth; s >= 0; s--) {
          let { type: l, match: d } = this.frontier[s], c, u = null;
          if (r == 1 && (i ? d.matchType(i.type) || (u = d.fillBefore(re.from(i), !1)) : n && l.compatibleContent(n.type)))
            return { sliceDepth: a, frontierDepth: s, parent: n, inject: u };
          if (r == 2 && i && (c = d.findWrapping(i.type)))
            return { sliceDepth: a, frontierDepth: s, parent: n, wrap: c };
          if (n && d.matchType(n.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: r, openEnd: a } = this.unplaced, o = Ts(e, r);
    return !o.childCount || o.firstChild.isLeaf ? !1 : (this.unplaced = new me(e, r + 1, Math.max(a, o.size + r >= e.size - a ? r + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: r, openEnd: a } = this.unplaced, o = Ts(e, r);
    if (o.childCount <= 1 && r > 0) {
      let n = e.size - r <= r + o.size;
      this.unplaced = new me(_o(e, r - 1, 1), r - 1, n ? r - 1 : a);
    } else
      this.unplaced = new me(_o(e, r, 1), r, a);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: r, parent: a, inject: o, wrap: n }) {
    for (; this.depth > r; )
      this.closeFrontierNode();
    if (n)
      for (let m = 0; m < n.length; m++)
        this.openFrontierNode(n[m]);
    let i = this.unplaced, s = a ? a.content : i.content, l = i.openStart - e, d = 0, c = [], { match: u, type: p } = this.frontier[r];
    if (o) {
      for (let m = 0; m < o.childCount; m++)
        c.push(o.child(m));
      u = u.matchFragment(o);
    }
    let h = s.size + e - (i.content.size - i.openEnd);
    for (; d < s.childCount; ) {
      let m = s.child(d), v = u.matchType(m.type);
      if (!v)
        break;
      d++, (d > 1 || l == 0 || m.content.size) && (u = v, c.push(lh(m.mark(p.allowedMarks(m.marks)), d == 1 ? l : 0, d == s.childCount ? h : -1)));
    }
    let f = d == s.childCount;
    f || (h = -1), this.placed = So(this.placed, r, re.from(c)), this.frontier[r].match = u, f && h < 0 && a && a.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, v = s; m < h; m++) {
      let b = v.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), v = b.content;
    }
    this.unplaced = f ? e == 0 ? me.empty : new me(_o(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new me(_o(i.content, e, d), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], r;
    if (!e.type.isTextblock || !As(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (r = this.findCloseLevel(this.$to)) && r.depth == this.depth)
      return -1;
    let { depth: a } = this.$to, o = this.$to.after(a);
    for (; a > 1 && o == this.$to.end(--a); )
      ++o;
    return o;
  }
  findCloseLevel(e) {
    e: for (let r = Math.min(this.depth, e.depth); r >= 0; r--) {
      let { match: a, type: o } = this.frontier[r], n = r < e.depth && e.end(r + 1) == e.pos + (e.depth - (r + 1)), i = As(e, r, o, a, n);
      if (i) {
        for (let s = r - 1; s >= 0; s--) {
          let { match: l, type: d } = this.frontier[s], c = As(e, s, d, l, !0);
          if (!c || c.childCount)
            continue e;
        }
        return { depth: r, fit: i, move: n ? e.doc.resolve(e.after(r + 1)) : e };
      }
    }
  }
  close(e) {
    let r = this.findCloseLevel(e);
    if (!r)
      return null;
    for (; this.depth > r.depth; )
      this.closeFrontierNode();
    r.fit.childCount && (this.placed = So(this.placed, r.depth, r.fit)), e = r.move;
    for (let a = r.depth + 1; a <= e.depth; a++) {
      let o = e.node(a), n = o.type.contentMatch.fillBefore(o.content, !0, e.index(a));
      this.openFrontierNode(o.type, o.attrs, n);
    }
    return e;
  }
  openFrontierNode(e, r = null, a) {
    let o = this.frontier[this.depth];
    o.match = o.match.matchType(e), this.placed = So(this.placed, this.depth, re.from(e.create(r, a))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let e = this.frontier.pop().match.fillBefore(re.empty, !0);
    e.childCount && (this.placed = So(this.placed, this.frontier.length, e));
  }
}
function _o(t, e, r) {
  return e == 0 ? t.cutByIndex(r, t.childCount) : t.replaceChild(0, t.firstChild.copy(_o(t.firstChild.content, e - 1, r)));
}
function So(t, e, r) {
  return e == 0 ? t.append(r) : t.replaceChild(t.childCount - 1, t.lastChild.copy(So(t.lastChild.content, e - 1, r)));
}
function Ts(t, e) {
  for (let r = 0; r < e; r++)
    t = t.firstChild.content;
  return t;
}
function lh(t, e, r) {
  if (e <= 0)
    return t;
  let a = t.content;
  return e > 1 && (a = a.replaceChild(0, lh(a.firstChild, e - 1, a.childCount == 1 ? r - 1 : 0))), e > 0 && (a = t.type.contentMatch.fillBefore(a).append(a), r <= 0 && (a = a.append(t.type.contentMatch.matchFragment(a).fillBefore(re.empty, !0)))), t.copy(a);
}
function As(t, e, r, a, o) {
  let n = t.node(e), i = o ? t.indexAfter(e) : t.index(e);
  if (i == n.childCount && !r.compatibleContent(n.type))
    return null;
  let s = a.fillBefore(n.content, !0, i);
  return s && !Q5(r, n.content, i) ? s : null;
}
function Q5(t, e, r) {
  for (let a = r; a < e.childCount; a++)
    if (!t.allowsMarks(e.child(a).marks))
      return !0;
  return !1;
}
class Vo extends ft {
  /**
  Construct an attribute step.
  */
  constructor(e, r, a) {
    super(), this.pos = e, this.attr = r, this.value = a;
  }
  apply(e) {
    let r = e.nodeAt(this.pos);
    if (!r)
      return kt.fail("No node at attribute step's position");
    let a = /* @__PURE__ */ Object.create(null);
    for (let n in r.attrs)
      a[n] = r.attrs[n];
    a[this.attr] = this.value;
    let o = r.type.create(a, null, r.marks);
    return kt.fromReplace(e, this.pos, this.pos + 1, new me(re.from(o), 0, r.isLeaf ? 0 : 1));
  }
  getMap() {
    return jt.empty;
  }
  invert(e) {
    return new Vo(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let r = e.mapResult(this.pos, 1);
    return r.deletedAfter ? null : new Vo(r.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, r) {
    if (typeof r.pos != "number" || typeof r.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Vo(r.pos, r.attr, r.value);
  }
}
ft.jsonID("attr", Vo);
class ki extends ft {
  /**
  Construct an attribute step.
  */
  constructor(e, r) {
    super(), this.attr = e, this.value = r;
  }
  apply(e) {
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in e.attrs)
      r[o] = e.attrs[o];
    r[this.attr] = this.value;
    let a = e.type.create(r, e.content, e.marks);
    return kt.ok(a);
  }
  getMap() {
    return jt.empty;
  }
  invert(e) {
    return new ki(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, r) {
    if (typeof r.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new ki(r.attr, r.value);
  }
}
ft.jsonID("docAttr", ki);
let rn = class extends Error {
};
rn = function t(e) {
  let r = Error.call(this, e);
  return r.__proto__ = t.prototype, r;
};
rn.prototype = Object.create(Error.prototype);
rn.prototype.constructor = rn;
rn.prototype.name = "TransformError";
const Is = /* @__PURE__ */ Object.create(null);
class Ve {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, r, a) {
    this.$anchor = e, this.$head = r, this.ranges = a || [new ek(e.min(r), e.max(r))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let r = 0; r < e.length; r++)
      if (e[r].$from.pos != e[r].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, r = me.empty) {
    let a = r.content.lastChild, o = null;
    for (let s = 0; s < r.openEnd; s++)
      o = a, a = a.lastChild;
    let n = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: l, $to: d } = i[s], c = e.mapping.slice(n);
      e.replaceRange(c.map(l.pos), c.map(d.pos), s ? me.empty : r), s == 0 && au(e, n, (a ? a.isInline : o && o.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, r) {
    let a = e.steps.length, o = this.ranges;
    for (let n = 0; n < o.length; n++) {
      let { $from: i, $to: s } = o[n], l = e.mapping.slice(a), d = l.map(i.pos), c = l.map(s.pos);
      n ? e.deleteRange(d, c) : (e.replaceRangeWith(d, c, r), au(e, a, r.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, r, a = !1) {
    let o = e.parent.inlineContent ? new Ae(e) : Ba(e.node(0), e.parent, e.pos, e.index(), r, a);
    if (o)
      return o;
    for (let n = e.depth - 1; n >= 0; n--) {
      let i = r < 0 ? Ba(e.node(0), e.node(n), e.before(n + 1), e.index(n), r, a) : Ba(e.node(0), e.node(n), e.after(n + 1), e.index(n) + 1, r, a);
      if (i)
        return i;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, r = 1) {
    return this.findFrom(e, r) || this.findFrom(e, -r) || new or(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Ba(e, e, 0, 0, 1) || new or(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Ba(e, e, e.content.size, e.childCount, -1) || new or(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, r) {
    if (!r || !r.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let a = Is[r.type];
    if (!a)
      throw new RangeError(`No selection type ${r.type} defined`);
    return a.fromJSON(e, r);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, r) {
    if (e in Is)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Is[e] = r, r.prototype.jsonID = e, r;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return Ae.between(this.$anchor, this.$head).getBookmark();
  }
}
Ve.prototype.visible = !0;
class ek {
  /**
  Create a range.
  */
  constructor(e, r) {
    this.$from = e, this.$to = r;
  }
}
let tu = !1;
function ru(t) {
  !tu && !t.parent.inlineContent && (tu = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class Ae extends Ve {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, r = e) {
    ru(e), ru(r), super(e, r);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, r) {
    let a = e.resolve(r.map(this.head));
    if (!a.parent.inlineContent)
      return Ve.near(a);
    let o = e.resolve(r.map(this.anchor));
    return new Ae(o.parent.inlineContent ? o : a, a);
  }
  replace(e, r = me.empty) {
    if (super.replace(e, r), r == me.empty) {
      let a = this.$from.marksAcross(this.$to);
      a && e.ensureMarks(a);
    }
  }
  eq(e) {
    return e instanceof Ae && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new rs(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.anchor != "number" || typeof r.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new Ae(e.resolve(r.anchor), e.resolve(r.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, r, a = r) {
    let o = e.resolve(r);
    return new this(o, a == r ? o : e.resolve(a));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, r, a) {
    let o = e.pos - r.pos;
    if ((!a || o) && (a = o >= 0 ? 1 : -1), !r.parent.inlineContent) {
      let n = Ve.findFrom(r, a, !0) || Ve.findFrom(r, -a, !0);
      if (n)
        r = n.$head;
      else
        return Ve.near(r, a);
    }
    return e.parent.inlineContent || (o == 0 ? e = r : (e = (Ve.findFrom(e, -a, !0) || Ve.findFrom(e, a, !0)).$anchor, e.pos < r.pos != o < 0 && (e = r))), new Ae(e, r);
  }
}
Ve.jsonID("text", Ae);
class rs {
  constructor(e, r) {
    this.anchor = e, this.head = r;
  }
  map(e) {
    return new rs(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return Ae.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class xe extends Ve {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let r = e.nodeAfter, a = e.node(0).resolve(e.pos + r.nodeSize);
    super(e, a), this.node = r;
  }
  map(e, r) {
    let { deleted: a, pos: o } = r.mapResult(this.anchor), n = e.resolve(o);
    return a ? Ve.near(n) : new xe(n);
  }
  content() {
    return new me(re.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof xe && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new hd(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new xe(e.resolve(r.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, r) {
    return new xe(e.resolve(r));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
xe.prototype.visible = !1;
Ve.jsonID("node", xe);
class hd {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: r, pos: a } = e.mapResult(this.anchor);
    return r ? new rs(a, a) : new hd(a);
  }
  resolve(e) {
    let r = e.resolve(this.anchor), a = r.nodeAfter;
    return a && xe.isSelectable(a) ? new xe(r) : Ve.near(r);
  }
}
class or extends Ve {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, r = me.empty) {
    if (r == me.empty) {
      e.delete(0, e.doc.content.size);
      let a = Ve.atStart(e.doc);
      a.eq(e.selection) || e.setSelection(a);
    } else
      super.replace(e, r);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new or(e);
  }
  map(e) {
    return new or(e);
  }
  eq(e) {
    return e instanceof or;
  }
  getBookmark() {
    return tk;
  }
}
Ve.jsonID("all", or);
const tk = {
  map() {
    return this;
  },
  resolve(t) {
    return new or(t);
  }
};
function Ba(t, e, r, a, o, n = !1) {
  if (e.inlineContent)
    return Ae.create(t, r);
  for (let i = a - (o > 0 ? 0 : 1); o > 0 ? i < e.childCount : i >= 0; i += o) {
    let s = e.child(i);
    if (s.isAtom) {
      if (!n && xe.isSelectable(s))
        return xe.create(t, r - (o < 0 ? s.nodeSize : 0));
    } else {
      let l = Ba(t, s, r + o, o < 0 ? s.childCount : 0, o, n);
      if (l)
        return l;
    }
    r += s.nodeSize * o;
  }
  return null;
}
function au(t, e, r) {
  let a = t.steps.length - 1;
  if (a < e)
    return;
  let o = t.steps[a];
  if (!(o instanceof Nt || o instanceof wr))
    return;
  let n = t.mapping.maps[a], i;
  n.forEach((s, l, d, c) => {
    i == null && (i = c);
  }), t.setSelection(Ve.near(t.doc.resolve(i), r));
}
function ou(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Pn {
  constructor(e, r, a) {
    this.name = e, this.init = ou(r.init, a), this.apply = ou(r.apply, a);
  }
}
new Pn("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new Pn("selection", {
  init(t, e) {
    return t.selection || Ve.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new Pn("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, r, a) {
    return a.selection.$cursor ? t.storedMarks : null;
  }
}), new Pn("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function dh(t, e, r) {
  for (let a in t) {
    let o = t[a];
    o instanceof Function ? o = o.bind(e) : a == "handleDOMEvents" && (o = dh(o, e, {})), r[a] = o;
  }
  return r;
}
let sr = class {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && dh(e.props, this, this.props), this.key = e.key ? e.key.key : ch("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
};
const zs = /* @__PURE__ */ Object.create(null);
function ch(t) {
  return t in zs ? t + "$" + ++zs[t] : (zs[t] = 0, t + "$");
}
class Qt {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = ch(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Na = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, uh = function(t, e, r, a) {
  return r && (nu(t, e, r, a, -1) || nu(t, e, r, a, 1));
}, rk = /^(img|br|input|textarea|hr)$/i;
function nu(t, e, r, a, o) {
  for (; ; ) {
    if (t == r && e == a)
      return !0;
    if (e == (o < 0 ? 0 : $i(t))) {
      let n = t.parentNode;
      if (!n || n.nodeType != 1 || md(t) || rk.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Na(t) + (o < 0 ? 0 : 1), t = n;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (o < 0 ? -1 : 0)], t.contentEditable == "false")
        return !1;
      e = o < 0 ? $i(t) : 0;
    } else
      return !1;
  }
}
function $i(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function ak(t, e, r) {
  for (let a = e == 0, o = e == $i(t); a || o; ) {
    if (t == r)
      return !0;
    let n = Na(t);
    if (t = t.parentNode, !t)
      return !1;
    a = a && n == 0, o = o && n == $i(t);
  }
}
function md(t) {
  let e;
  for (let r = t; r && !(e = r.pmViewDesc); r = r.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const ph = function(t) {
  return t.focusNode && uh(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function fh(t, e) {
  let r = document.createEvent("Event");
  return r.initEvent("keydown", !0, !0), r.keyCode = t, r.key = r.code = e, r;
}
const yr = typeof navigator < "u" ? navigator : null, iu = typeof document < "u" ? document : null, Zr = yr && yr.userAgent || "", yl = /Edge\/(\d+)/.exec(Zr), hh = /MSIE \d/.exec(Zr), xl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Zr), vn = !!(hh || xl || yl), mh = hh ? document.documentMode : xl ? +xl[1] : yl ? +yl[1] : 0, as = !vn && /gecko\/(\d+)/i.test(Zr);
as && +(/Firefox\/(\d+)/.exec(Zr) || [0, 0])[1];
const kl = !vn && /Chrome\/(\d+)/.exec(Zr), Qr = !!kl, gh = kl ? +kl[1] : 0, Pa = !vn && !!yr && /Apple Computer/.test(yr.vendor), gd = Pa && (/Mobile\/\w+/.test(Zr) || !!yr && yr.maxTouchPoints > 2), Ht = gd || (yr ? /Mac/.test(yr.platform) : !1), ok = yr ? /Win/.test(yr.platform) : !1, bn = /Android \d/.test(Zr), vd = !!iu && "webkitFontSmoothing" in iu.documentElement.style, nk = vd ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function ik(t, e = null) {
  let r = t.domSelectionRange(), a = t.state.doc;
  if (!r.focusNode)
    return null;
  let o = t.docView.nearestDesc(r.focusNode), n = o && o.size == 0, i = t.docView.posFromDOM(r.focusNode, r.focusOffset, 1);
  if (i < 0)
    return null;
  let s = a.resolve(i), l, d;
  if (ph(r)) {
    for (l = i; o && !o.node; )
      o = o.parent;
    let u = o.node;
    if (o && u.isAtom && xe.isSelectable(u) && o.parent && !(u.isInline && ak(r.focusNode, r.focusOffset, o.dom))) {
      let p = o.posBefore;
      d = new xe(i == p ? s : a.resolve(p));
    }
  } else {
    if (r instanceof t.dom.ownerDocument.defaultView.Selection && r.rangeCount > 1) {
      let u = i, p = i;
      for (let h = 0; h < r.rangeCount; h++) {
        let f = r.getRangeAt(h);
        u = Math.min(u, t.docView.posFromDOM(f.startContainer, f.startOffset, 1)), p = Math.max(p, t.docView.posFromDOM(f.endContainer, f.endOffset, -1));
      }
      if (u < 0)
        return null;
      [l, i] = p == t.state.selection.anchor ? [p, u] : [u, p], s = a.resolve(i);
    } else
      l = t.docView.posFromDOM(r.anchorNode, r.anchorOffset, 1);
    if (l < 0)
      return null;
  }
  let c = a.resolve(l);
  if (!d) {
    let u = e == "pointer" || t.state.selection.head < s.pos && !n ? 1 : -1;
    d = bh(t, c, s, u);
  }
  return d;
}
function vh(t) {
  return t.editable ? t.hasFocus() : ck(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function bd(t, e = !1) {
  let r = t.state.selection;
  if (dk(t, r), !!vh(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Qr) {
      let a = t.domSelectionRange(), o = t.domObserver.currentSelection;
      if (a.anchorNode && o.anchorNode && uh(a.anchorNode, a.anchorOffset, o.anchorNode, o.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      lk(t);
    else {
      let { anchor: a, head: o } = r, n, i;
      su && !(r instanceof Ae) && (r.$from.parent.inlineContent || (n = lu(t, r.from)), !r.empty && !r.$from.parent.inlineContent && (i = lu(t, r.to))), t.docView.setSelection(a, o, t, e), su && (n && du(n), i && du(i)), r.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && sk(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const su = Pa || Qr && gh < 63;
function lu(t, e) {
  let { node: r, offset: a } = t.docView.domFromPos(e, 0), o = a < r.childNodes.length ? r.childNodes[a] : null, n = a ? r.childNodes[a - 1] : null;
  if (Pa && o && o.contentEditable == "false")
    return Ns(o);
  if ((!o || o.contentEditable == "false") && (!n || n.contentEditable == "false")) {
    if (o)
      return Ns(o);
    if (n)
      return Ns(n);
  }
}
function Ns(t) {
  return t.contentEditable = "true", Pa && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function du(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function sk(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let r = t.domSelectionRange(), a = r.anchorNode, o = r.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (r.anchorNode != a || r.anchorOffset != o) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!vh(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function lk(t) {
  let e = t.domSelection(), r = document.createRange();
  if (!e)
    return;
  let a = t.cursorWrapper.dom, o = a.nodeName == "IMG";
  o ? r.setStart(a.parentNode, Na(a) + 1) : r.setStart(a, 0), r.collapse(!0), e.removeAllRanges(), e.addRange(r), !o && !t.state.selection.visible && vn && mh <= 11 && (a.disabled = !0, a.disabled = !1);
}
function dk(t, e) {
  if (e instanceof xe) {
    let r = t.docView.descAt(e.from);
    r != t.lastSelectedViewDesc && (cu(t), r && r.selectNode(), t.lastSelectedViewDesc = r);
  } else
    cu(t);
}
function cu(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function bh(t, e, r, a) {
  return t.someProp("createSelectionBetween", (o) => o(t, e, r)) || Ae.between(e, r, a);
}
function ck(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function $l(t, e) {
  let { $anchor: r, $head: a } = t.selection, o = e > 0 ? r.max(a) : r.min(a), n = o.parent.inlineContent ? o.depth ? t.doc.resolve(e > 0 ? o.after() : o.before()) : null : o;
  return n && Ve.findFrom(n, e);
}
function Lr(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function uu(t, e, r) {
  let a = t.state.selection;
  if (a instanceof Ae)
    if (r.indexOf("s") > -1) {
      let { $head: o } = a, n = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter;
      if (!n || n.isText || !n.isLeaf)
        return !1;
      let i = t.state.doc.resolve(o.pos + n.nodeSize * (e < 0 ? -1 : 1));
      return Lr(t, new Ae(a.$anchor, i));
    } else if (a.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let o = $l(t.state, e);
        return o && o instanceof xe ? Lr(t, o) : !1;
      } else if (!(Ht && r.indexOf("m") > -1)) {
        let o = a.$head, n = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter, i;
        if (!n || n.isText)
          return !1;
        let s = e < 0 ? o.pos - n.nodeSize : o.pos;
        return n.isAtom || (i = t.docView.descAt(s)) && !i.contentDOM ? xe.isSelectable(n) ? Lr(t, new xe(e < 0 ? t.state.doc.resolve(o.pos - n.nodeSize) : o)) : vd ? Lr(t, new Ae(t.state.doc.resolve(e < 0 ? s : s + n.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (a instanceof xe && a.node.isInline)
      return Lr(t, new Ae(e > 0 ? a.$to : a.$from));
    {
      let o = $l(t.state, e);
      return o ? Lr(t, o) : !1;
    }
  }
}
function _i(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Ro(t, e) {
  let r = t.pmViewDesc;
  return r && r.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Da(t, e) {
  return e < 0 ? uk(t) : pk(t);
}
function uk(t) {
  let e = t.domSelectionRange(), r = e.focusNode, a = e.focusOffset;
  if (!r)
    return;
  let o, n, i = !1;
  for (as && r.nodeType == 1 && a < _i(r) && Ro(r.childNodes[a], -1) && (i = !0); ; )
    if (a > 0) {
      if (r.nodeType != 1)
        break;
      {
        let s = r.childNodes[a - 1];
        if (Ro(s, -1))
          o = r, n = --a;
        else if (s.nodeType == 3)
          r = s, a = r.nodeValue.length;
        else
          break;
      }
    } else {
      if (wh(r))
        break;
      {
        let s = r.previousSibling;
        for (; s && Ro(s, -1); )
          o = r.parentNode, n = Na(s), s = s.previousSibling;
        if (s)
          r = s, a = _i(r);
        else {
          if (r = r.parentNode, r == t.dom)
            break;
          a = 0;
        }
      }
    }
  i ? _l(t, r, a) : o && _l(t, o, n);
}
function pk(t) {
  let e = t.domSelectionRange(), r = e.focusNode, a = e.focusOffset;
  if (!r)
    return;
  let o = _i(r), n, i;
  for (; ; )
    if (a < o) {
      if (r.nodeType != 1)
        break;
      let s = r.childNodes[a];
      if (Ro(s, 1))
        n = r, i = ++a;
      else
        break;
    } else {
      if (wh(r))
        break;
      {
        let s = r.nextSibling;
        for (; s && Ro(s, 1); )
          n = s.parentNode, i = Na(s) + 1, s = s.nextSibling;
        if (s)
          r = s, a = 0, o = _i(r);
        else {
          if (r = r.parentNode, r == t.dom)
            break;
          a = o = 0;
        }
      }
    }
  n && _l(t, n, i);
}
function wh(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function fk(t, e) {
  for (; t && e == t.childNodes.length && !md(t); )
    e = Na(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let r = t.childNodes[e];
    if (r.nodeType == 3)
      return r;
    if (r.nodeType == 1 && r.contentEditable == "false")
      break;
    t = r, e = 0;
  }
}
function hk(t, e) {
  for (; t && !e && !md(t); )
    e = Na(t), t = t.parentNode;
  for (; t && e; ) {
    let r = t.childNodes[e - 1];
    if (r.nodeType == 3)
      return r;
    if (r.nodeType == 1 && r.contentEditable == "false")
      break;
    t = r, e = t.childNodes.length;
  }
}
function _l(t, e, r) {
  if (e.nodeType != 3) {
    let n, i;
    (i = fk(e, r)) ? (e = i, r = 0) : (n = hk(e, r)) && (e = n, r = n.nodeValue.length);
  }
  let a = t.domSelection();
  if (!a)
    return;
  if (ph(a)) {
    let n = document.createRange();
    n.setEnd(e, r), n.setStart(e, r), a.removeAllRanges(), a.addRange(n);
  } else a.extend && a.extend(e, r);
  t.domObserver.setCurSelection();
  let { state: o } = t;
  setTimeout(() => {
    t.state == o && bd(t);
  }, 50);
}
function pu(t, e) {
  let r = t.state.doc.resolve(e);
  if (!(Qr || ok) && r.parent.inlineContent) {
    let a = t.coordsAtPos(e);
    if (e > r.start()) {
      let o = t.coordsAtPos(e - 1), n = (o.top + o.bottom) / 2;
      if (n > a.top && n < a.bottom && Math.abs(o.left - a.left) > 1)
        return o.left < a.left ? "ltr" : "rtl";
    }
    if (e < r.end()) {
      let o = t.coordsAtPos(e + 1), n = (o.top + o.bottom) / 2;
      if (n > a.top && n < a.bottom && Math.abs(o.left - a.left) > 1)
        return o.left > a.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function fu(t, e, r) {
  let a = t.state.selection;
  if (a instanceof Ae && !a.empty || r.indexOf("s") > -1 || Ht && r.indexOf("m") > -1)
    return !1;
  let { $from: o, $to: n } = a;
  if (!o.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = $l(t.state, e);
    if (i && i instanceof xe)
      return Lr(t, i);
  }
  if (!o.parent.inlineContent) {
    let i = e < 0 ? o : n, s = a instanceof or ? Ve.near(i, e) : Ve.findFrom(i, e);
    return s ? Lr(t, s) : !1;
  }
  return !1;
}
function hu(t, e) {
  if (!(t.state.selection instanceof Ae))
    return !0;
  let { $head: r, $anchor: a, empty: o } = t.state.selection;
  if (!r.sameParent(a))
    return !0;
  if (!o)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let n = !r.textOffset && (e < 0 ? r.nodeBefore : r.nodeAfter);
  if (n && !n.isText) {
    let i = t.state.tr;
    return e < 0 ? i.delete(r.pos - n.nodeSize, r.pos) : i.delete(r.pos, r.pos + n.nodeSize), t.dispatch(i), !0;
  }
  return !1;
}
function mu(t, e, r) {
  t.domObserver.stop(), e.contentEditable = r, t.domObserver.start();
}
function mk(t) {
  if (!Pa || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: r } = t.domSelectionRange();
  if (e && e.nodeType == 1 && r == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let a = e.firstChild;
    mu(t, a, "true"), setTimeout(() => mu(t, a, "false"), 20);
  }
  return !1;
}
function gk(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function vk(t, e) {
  let r = e.keyCode, a = gk(e);
  if (r == 8 || Ht && r == 72 && a == "c")
    return hu(t, -1) || Da(t, -1);
  if (r == 46 && !e.shiftKey || Ht && r == 68 && a == "c")
    return hu(t, 1) || Da(t, 1);
  if (r == 13 || r == 27)
    return !0;
  if (r == 37 || Ht && r == 66 && a == "c") {
    let o = r == 37 ? pu(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return uu(t, o, a) || Da(t, o);
  } else if (r == 39 || Ht && r == 70 && a == "c") {
    let o = r == 39 ? pu(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return uu(t, o, a) || Da(t, o);
  } else {
    if (r == 38 || Ht && r == 80 && a == "c")
      return fu(t, -1, a) || Da(t, -1);
    if (r == 40 || Ht && r == 78 && a == "c")
      return mk(t) || fu(t, 1, a) || Da(t, 1);
    if (a == (Ht ? "m" : "c") && (r == 66 || r == 73 || r == 89 || r == 90))
      return !0;
  }
  return !1;
}
function yh(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let r = [], { content: a, openStart: o, openEnd: n } = e;
  for (; o > 1 && n > 1 && a.childCount == 1 && a.firstChild.childCount == 1; ) {
    o--, n--;
    let h = a.firstChild;
    r.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), a = h.content;
  }
  let i = t.someProp("clipboardSerializer") || es.fromSchema(t.state.schema), s = Ch(), l = s.createElement("div");
  l.appendChild(i.serializeFragment(a, { document: s }));
  let d = l.firstChild, c, u = 0;
  for (; d && d.nodeType == 1 && (c = Sh[d.nodeName.toLowerCase()]); ) {
    for (let h = c.length - 1; h >= 0; h--) {
      let f = s.createElement(c[h]);
      for (; l.firstChild; )
        f.appendChild(l.firstChild);
      l.appendChild(f), u++;
    }
    d = l.firstChild;
  }
  d && d.nodeType == 1 && d.setAttribute("data-pm-slice", `${o} ${n}${u ? ` -${u}` : ""} ${JSON.stringify(r)}`);
  let p = t.someProp("clipboardTextSerializer", (h) => h(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: l, text: p, slice: e };
}
function xh(t, e, r, a, o) {
  let n = o.parent.type.spec.code, i, s;
  if (!r && !e)
    return null;
  let l = e && (a || n || !r);
  if (l) {
    if (t.someProp("transformPastedText", (p) => {
      e = p(e, n || a, t);
    }), n)
      return e ? new me(re.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : me.empty;
    let u = t.someProp("clipboardTextParser", (p) => p(e, o, a, t));
    if (u)
      s = u;
    else {
      let p = o.marks(), { schema: h } = t.state, f = es.fromSchema(h);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let v = i.appendChild(document.createElement("p"));
        m && v.appendChild(f.serializeNode(h.text(m, p)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (u) => {
      r = u(r, t);
    }), i = xk(r), vd && kk(i);
  let d = i && i.querySelector("[data-pm-slice]"), c = d && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(d.getAttribute("data-pm-slice") || "");
  if (c && c[3])
    for (let u = +c[3]; u > 0; u--) {
      let p = i.firstChild;
      for (; p && p.nodeType != 1; )
        p = p.nextSibling;
      if (!p)
        break;
      i = p;
    }
  if (s || (s = (t.someProp("clipboardParser") || t.someProp("domParser") || Kn.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(l || c),
    context: o,
    ruleFromNode(u) {
      return u.nodeName == "BR" && !u.nextSibling && u.parentNode && !bk.test(u.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), c)
    s = $k(gu(s, +c[1], +c[2]), c[4]);
  else if (s = me.maxOpen(wk(s.content, o), !0), s.openStart || s.openEnd) {
    let u = 0, p = 0;
    for (let h = s.content.firstChild; u < s.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = s.content.lastChild; p < s.openEnd && !h.type.spec.isolating; p++, h = h.lastChild)
      ;
    s = gu(s, u, p);
  }
  return t.someProp("transformPasted", (u) => {
    s = u(s, t);
  }), s;
}
const bk = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function wk(t, e) {
  if (t.childCount < 2)
    return t;
  for (let r = e.depth; r >= 0; r--) {
    let a = e.node(r).contentMatchAt(e.index(r)), o, n = [];
    if (t.forEach((i) => {
      if (!n)
        return;
      let s = a.findWrapping(i.type), l;
      if (!s)
        return n = null;
      if (l = n.length && o.length && $h(s, o, i, n[n.length - 1], 0))
        n[n.length - 1] = l;
      else {
        n.length && (n[n.length - 1] = _h(n[n.length - 1], o.length));
        let d = kh(i, s);
        n.push(d), a = a.matchType(d.type), o = s;
      }
    }), n)
      return re.from(n);
  }
  return t;
}
function kh(t, e, r = 0) {
  for (let a = e.length - 1; a >= r; a--)
    t = e[a].create(null, re.from(t));
  return t;
}
function $h(t, e, r, a, o) {
  if (o < t.length && o < e.length && t[o] == e[o]) {
    let n = $h(t, e, r, a.lastChild, o + 1);
    if (n)
      return a.copy(a.content.replaceChild(a.childCount - 1, n));
    if (a.contentMatchAt(a.childCount).matchType(o == t.length - 1 ? r.type : t[o + 1]))
      return a.copy(a.content.append(re.from(kh(r, t, o + 1))));
  }
}
function _h(t, e) {
  if (e == 0)
    return t;
  let r = t.content.replaceChild(t.childCount - 1, _h(t.lastChild, e - 1)), a = t.contentMatchAt(t.childCount).fillBefore(re.empty, !0);
  return t.copy(r.append(a));
}
function Sl(t, e, r, a, o, n) {
  let i = e < 0 ? t.firstChild : t.lastChild, s = i.content;
  return t.childCount > 1 && (n = 0), o < a - 1 && (s = Sl(s, e, r, a, o + 1, n)), o >= r && (s = e < 0 ? i.contentMatchAt(0).fillBefore(s, n <= o).append(s) : s.append(i.contentMatchAt(i.childCount).fillBefore(re.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(s));
}
function gu(t, e, r) {
  return e < t.openStart && (t = new me(Sl(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), r < t.openEnd && (t = new me(Sl(t.content, 1, r, t.openEnd, 0, 0), t.openStart, r)), t;
}
const Sh = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let vu = null;
function Ch() {
  return vu || (vu = document.implementation.createHTMLDocument("title"));
}
let Ps = null;
function yk(t) {
  let e = window.trustedTypes;
  return e ? (Ps || (Ps = e.createPolicy("ProseMirrorClipboard", { createHTML: (r) => r })), Ps.createHTML(t)) : t;
}
function xk(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let r = Ch().createElement("div"), a = /<([a-z][^>\s]+)/i.exec(t), o;
  if ((o = a && Sh[a[1].toLowerCase()]) && (t = o.map((n) => "<" + n + ">").join("") + t + o.map((n) => "</" + n + ">").reverse().join("")), r.innerHTML = yk(t), o)
    for (let n = 0; n < o.length; n++)
      r = r.querySelector(o[n]) || r;
  return r;
}
function kk(t) {
  let e = t.querySelectorAll(Qr ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let r = 0; r < e.length; r++) {
    let a = e[r];
    a.childNodes.length == 1 && a.textContent == " " && a.parentNode && a.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), a);
  }
}
function $k(t, e) {
  if (!t.size)
    return t;
  let r = t.content.firstChild.type.schema, a;
  try {
    a = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: o, openStart: n, openEnd: i } = t;
  for (let s = a.length - 2; s >= 0; s -= 2) {
    let l = r.nodes[a[s]];
    if (!l || l.hasRequiredAttrs())
      break;
    o = re.from(l.create(a[s + 1], o)), n++, i++;
  }
  return new me(o, n, i);
}
const lr = {}, Rt = {};
function Fr(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
Rt.keydown = (t, e) => {
  let r = e;
  if (t.input.shiftKey = r.keyCode == 16 || r.shiftKey, !Eh(t, r) && (t.input.lastKeyCode = r.keyCode, t.input.lastKeyCodeTime = Date.now(), !(bn && Qr && r.keyCode == 13)))
    if (r.keyCode != 229 && t.domObserver.forceFlush(), gd && r.keyCode == 13 && !r.ctrlKey && !r.altKey && !r.metaKey) {
      let a = Date.now();
      t.input.lastIOSEnter = a, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == a && (t.someProp("handleKeyDown", (o) => o(t, fh(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (a) => a(t, r)) || vk(t, r) ? r.preventDefault() : Fr(t, "key");
};
Rt.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Rt.keypress = (t, e) => {
  let r = e;
  if (Eh(t, r) || !r.charCode || r.ctrlKey && !r.altKey || Ht && r.metaKey)
    return;
  if (t.someProp("handleKeyPress", (o) => o(t, r))) {
    r.preventDefault();
    return;
  }
  let a = t.state.selection;
  if (!(a instanceof Ae) || !a.$from.sameParent(a.$to)) {
    let o = String.fromCharCode(r.charCode);
    !/[\r\n]/.test(o) && !t.someProp("handleTextInput", (n) => n(t, a.$from.pos, a.$to.pos, o)) && t.dispatch(t.state.tr.insertText(o).scrollIntoView()), r.preventDefault();
  }
};
function ns(t) {
  return { left: t.clientX, top: t.clientY };
}
function _k(t, e) {
  let r = e.x - t.clientX, a = e.y - t.clientY;
  return r * r + a * a < 100;
}
function wd(t, e, r, a, o) {
  if (a == -1)
    return !1;
  let n = t.state.doc.resolve(a);
  for (let i = n.depth + 1; i > 0; i--)
    if (t.someProp(e, (s) => i > n.depth ? s(t, r, n.nodeAfter, n.before(i), o, !0) : s(t, r, n.node(i), n.before(i), o, !1)))
      return !0;
  return !1;
}
function Qa(t, e, r) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let a = t.state.tr.setSelection(e);
  a.setMeta("pointer", !0), t.dispatch(a);
}
function Sk(t, e) {
  if (e == -1)
    return !1;
  let r = t.state.doc.resolve(e), a = r.nodeAfter;
  return a && a.isAtom && xe.isSelectable(a) ? (Qa(t, new xe(r)), !0) : !1;
}
function Ck(t, e) {
  if (e == -1)
    return !1;
  let r = t.state.selection, a, o;
  r instanceof xe && (a = r.node);
  let n = t.state.doc.resolve(e);
  for (let i = n.depth + 1; i > 0; i--) {
    let s = i > n.depth ? n.nodeAfter : n.node(i);
    if (xe.isSelectable(s)) {
      a && r.$from.depth > 0 && i >= r.$from.depth && n.before(r.$from.depth + 1) == r.$from.pos ? o = n.before(r.$from.depth) : o = n.before(i);
      break;
    }
  }
  return o != null ? (Qa(t, xe.create(t.state.doc, o)), !0) : !1;
}
function Ok(t, e, r, a, o) {
  return wd(t, "handleClickOn", e, r, a) || t.someProp("handleClick", (n) => n(t, e, a)) || (o ? Ck(t, r) : Sk(t, r));
}
function Ek(t, e, r, a) {
  return wd(t, "handleDoubleClickOn", e, r, a) || t.someProp("handleDoubleClick", (o) => o(t, e, a));
}
function Mk(t, e, r, a) {
  return wd(t, "handleTripleClickOn", e, r, a) || t.someProp("handleTripleClick", (o) => o(t, e, a)) || Tk(t, r, a);
}
function Tk(t, e, r) {
  if (r.button != 0)
    return !1;
  let a = t.state.doc;
  if (e == -1)
    return a.inlineContent ? (Qa(t, Ae.create(a, 0, a.content.size)), !0) : !1;
  let o = a.resolve(e);
  for (let n = o.depth + 1; n > 0; n--) {
    let i = n > o.depth ? o.nodeAfter : o.node(n), s = o.before(n);
    if (i.inlineContent)
      Qa(t, Ae.create(a, s + 1, s + 1 + i.content.size));
    else if (xe.isSelectable(i))
      Qa(t, xe.create(a, s));
    else
      continue;
    return !0;
  }
}
function yd(t) {
  return Si(t);
}
const Oh = Ht ? "metaKey" : "ctrlKey";
lr.mousedown = (t, e) => {
  let r = e;
  t.input.shiftKey = r.shiftKey;
  let a = yd(t), o = Date.now(), n = "singleClick";
  o - t.input.lastClick.time < 500 && _k(r, t.input.lastClick) && !r[Oh] && (t.input.lastClick.type == "singleClick" ? n = "doubleClick" : t.input.lastClick.type == "doubleClick" && (n = "tripleClick")), t.input.lastClick = { time: o, x: r.clientX, y: r.clientY, type: n };
  let i = t.posAtCoords(ns(r));
  i && (n == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Ak(t, i, r, !!a)) : (n == "doubleClick" ? Ek : Mk)(t, i.pos, i.inside, r) ? r.preventDefault() : Fr(t, "pointer"));
};
class Ak {
  constructor(e, r, a, o) {
    this.view = e, this.pos = r, this.event = a, this.flushed = o, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!a[Oh], this.allowDefault = a.shiftKey;
    let n, i;
    if (r.inside > -1)
      n = e.state.doc.nodeAt(r.inside), i = r.inside;
    else {
      let c = e.state.doc.resolve(r.pos);
      n = c.parent, i = c.depth ? c.before() : 0;
    }
    const s = o ? null : a.target, l = s ? e.docView.nearestDesc(s, !0) : null;
    this.target = l && l.dom.nodeType == 1 ? l.dom : null;
    let { selection: d } = e.state;
    (a.button == 0 && n.type.spec.draggable && n.type.spec.selectable !== !1 || d instanceof xe && d.from <= i && d.to > i) && (this.mightDrag = {
      node: n,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && as && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Fr(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => bd(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let r = this.pos;
    this.view.state.doc != this.startDoc && (r = this.view.posAtCoords(ns(e))), this.updateAllowDefault(e), this.allowDefault || !r ? Fr(this.view, "pointer") : Ok(this.view, r.pos, r.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Pa && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Qr && !this.view.state.selection.visible && Math.min(Math.abs(r.pos - this.view.state.selection.from), Math.abs(r.pos - this.view.state.selection.to)) <= 2) ? (Qa(this.view, Ve.near(this.view.state.doc.resolve(r.pos))), e.preventDefault()) : Fr(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Fr(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
lr.touchstart = (t) => {
  t.input.lastTouch = Date.now(), yd(t), Fr(t, "pointer");
};
lr.touchmove = (t) => {
  t.input.lastTouch = Date.now(), Fr(t, "pointer");
};
lr.contextmenu = (t) => yd(t);
function Eh(t, e) {
  return t.composing ? !0 : Pa && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const Ik = bn ? 5e3 : -1;
Rt.compositionstart = Rt.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, r = e.selection.$to;
    if (e.selection instanceof Ae && (e.storedMarks || !r.textOffset && r.parentOffset && r.nodeBefore.marks.some((a) => a.type.spec.inclusive === !1)))
      t.markCursor = t.state.storedMarks || r.marks(), Si(t, !0), t.markCursor = null;
    else if (Si(t, !e.selection.empty), as && e.selection.empty && r.parentOffset && !r.textOffset && r.nodeBefore.marks.length) {
      let a = t.domSelectionRange();
      for (let o = a.focusNode, n = a.focusOffset; o && o.nodeType == 1 && n != 0; ) {
        let i = n < 0 ? o.lastChild : o.childNodes[n - 1];
        if (!i)
          break;
        if (i.nodeType == 3) {
          let s = t.domSelection();
          s && s.collapse(i, i.nodeValue.length);
          break;
        } else
          o = i, n = -1;
      }
    }
    t.input.composing = !0;
  }
  Mh(t, Ik);
};
Rt.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, Mh(t, 20));
};
function Mh(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Si(t), e));
}
function zk(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Nk()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Nk() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Si(t, e = !1) {
  if (!(bn && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), zk(t), e || t.docView && t.docView.dirty) {
      let r = ik(t);
      return r && !r.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(r)) : (t.markCursor || e) && !t.state.selection.empty ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function Pk(t, e) {
  if (!t.dom.parentNode)
    return;
  let r = t.dom.parentNode.appendChild(document.createElement("div"));
  r.appendChild(e), r.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let a = getSelection(), o = document.createRange();
  o.selectNodeContents(e), t.dom.blur(), a.removeAllRanges(), a.addRange(o), setTimeout(() => {
    r.parentNode && r.parentNode.removeChild(r), t.focus();
  }, 50);
}
const an = vn && mh < 15 || gd && nk < 604;
lr.copy = Rt.cut = (t, e) => {
  let r = e, a = t.state.selection, o = r.type == "cut";
  if (a.empty)
    return;
  let n = an ? null : r.clipboardData, i = a.content(), { dom: s, text: l } = yh(t, i);
  n ? (r.preventDefault(), n.clearData(), n.setData("text/html", s.innerHTML), n.setData("text/plain", l)) : Pk(t, s), o && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function jk(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function Vk(t, e) {
  if (!t.dom.parentNode)
    return;
  let r = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, a = t.dom.parentNode.appendChild(document.createElement(r ? "textarea" : "div"));
  r || (a.contentEditable = "true"), a.style.cssText = "position: fixed; left: -10000px; top: 10px", a.focus();
  let o = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), a.parentNode && a.parentNode.removeChild(a), r ? Cl(t, a.value, null, o, e) : Cl(t, a.textContent, a.innerHTML, o, e);
  }, 50);
}
function Cl(t, e, r, a, o) {
  let n = xh(t, e, r, a, t.state.selection.$from);
  if (t.someProp("handlePaste", (l) => l(t, o, n || me.empty)))
    return !0;
  if (!n)
    return !1;
  let i = jk(n), s = i ? t.state.tr.replaceSelectionWith(i, a) : t.state.tr.replaceSelection(n);
  return t.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Th(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let r = t.getData("text/uri-list");
  return r ? r.replace(/\r?\n/g, " ") : "";
}
Rt.paste = (t, e) => {
  let r = e;
  if (t.composing && !bn)
    return;
  let a = an ? null : r.clipboardData, o = t.input.shiftKey && t.input.lastKeyCode != 45;
  a && Cl(t, Th(a), a.getData("text/html"), o, r) ? r.preventDefault() : Vk(t, r);
};
class Rk {
  constructor(e, r, a) {
    this.slice = e, this.move = r, this.node = a;
  }
}
const Ah = Ht ? "altKey" : "ctrlKey";
lr.dragstart = (t, e) => {
  let r = e, a = t.input.mouseDown;
  if (a && a.done(), !r.dataTransfer)
    return;
  let o = t.state.selection, n = o.empty ? null : t.posAtCoords(ns(r)), i;
  if (!(n && n.pos >= o.from && n.pos <= (o instanceof xe ? o.to - 1 : o.to))) {
    if (a && a.mightDrag)
      i = xe.create(t.state.doc, a.mightDrag.pos);
    else if (r.target && r.target.nodeType == 1) {
      let u = t.docView.nearestDesc(r.target, !0);
      u && u.node.type.spec.draggable && u != t.docView && (i = xe.create(t.state.doc, u.posBefore));
    }
  }
  let s = (i || t.state.selection).content(), { dom: l, text: d, slice: c } = yh(t, s);
  (!r.dataTransfer.files.length || !Qr || gh > 120) && r.dataTransfer.clearData(), r.dataTransfer.setData(an ? "Text" : "text/html", l.innerHTML), r.dataTransfer.effectAllowed = "copyMove", an || r.dataTransfer.setData("text/plain", d), t.dragging = new Rk(c, !r[Ah], i);
};
lr.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Rt.dragover = Rt.dragenter = (t, e) => e.preventDefault();
Rt.drop = (t, e) => {
  let r = e, a = t.dragging;
  if (t.dragging = null, !r.dataTransfer)
    return;
  let o = t.posAtCoords(ns(r));
  if (!o)
    return;
  let n = t.state.doc.resolve(o.pos), i = a && a.slice;
  i ? t.someProp("transformPasted", (f) => {
    i = f(i, t);
  }) : i = xh(t, Th(r.dataTransfer), an ? null : r.dataTransfer.getData("text/html"), !1, n);
  let s = !!(a && !r[Ah]);
  if (t.someProp("handleDrop", (f) => f(t, r, i || me.empty, s))) {
    r.preventDefault();
    return;
  }
  if (!i)
    return;
  r.preventDefault();
  let l = i ? X5(t.state.doc, n.pos, i) : n.pos;
  l == null && (l = n.pos);
  let d = t.state.tr;
  if (s) {
    let { node: f } = a;
    f ? f.replace(d) : d.deleteSelection();
  }
  let c = d.mapping.map(l), u = i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1, p = d.doc;
  if (u ? d.replaceRangeWith(c, c, i.content.firstChild) : d.replaceRange(c, c, i), d.doc.eq(p))
    return;
  let h = d.doc.resolve(c);
  if (u && xe.isSelectable(i.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(i.content.firstChild))
    d.setSelection(new xe(h));
  else {
    let f = d.mapping.map(l);
    d.mapping.maps[d.mapping.maps.length - 1].forEach((m, v, b, k) => f = k), d.setSelection(bh(t, h, d.doc.resolve(f)));
  }
  t.focus(), t.dispatch(d.setMeta("uiEvent", "drop"));
};
lr.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && bd(t);
  }, 20));
};
lr.blur = (t, e) => {
  let r = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), r.relatedTarget && t.dom.contains(r.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
lr.beforeinput = (t, e) => {
  if (Qr && bn && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, fh(8, "Backspace")))))
        return;
      let { $cursor: a } = t.state.selection;
      a && a.pos > 0 && t.dispatch(t.state.tr.delete(a.pos - 1, a.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Rt)
  lr[t] = Rt[t];
function on(t, e) {
  if (t == e)
    return !0;
  for (let r in t)
    if (t[r] !== e[r])
      return !1;
  for (let r in e)
    if (!(r in t))
      return !1;
  return !0;
}
class Ci {
  constructor(e, r) {
    this.toDOM = e, this.spec = r || ka, this.side = this.spec.side || 0;
  }
  map(e, r, a, o) {
    let { pos: n, deleted: i } = e.mapResult(r.from + o, this.side < 0 ? -1 : 1);
    return i ? null : new wn(n - a, n - a, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Ci && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && on(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
let Do = class Ol {
  constructor(e, r) {
    this.attrs = e, this.spec = r || ka;
  }
  map(e, r, a, o) {
    let n = e.map(r.from + o, this.spec.inclusiveStart ? -1 : 1) - a, i = e.map(r.to + o, this.spec.inclusiveEnd ? 1 : -1) - a;
    return n >= i ? null : new wn(n, i, this);
  }
  valid(e, r) {
    return r.from < r.to;
  }
  eq(e) {
    return this == e || e instanceof Ol && on(this.attrs, e.attrs) && on(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Ol;
  }
  destroy() {
  }
};
class xd {
  constructor(e, r) {
    this.attrs = e, this.spec = r || ka;
  }
  map(e, r, a, o) {
    let n = e.mapResult(r.from + o, 1);
    if (n.deleted)
      return null;
    let i = e.mapResult(r.to + o, -1);
    return i.deleted || i.pos <= n.pos ? null : new wn(n.pos - a, i.pos - a, this);
  }
  valid(e, r) {
    let { index: a, offset: o } = e.content.findIndex(r.from), n;
    return o == r.from && !(n = e.child(a)).isText && o + n.nodeSize == r.to;
  }
  eq(e) {
    return this == e || e instanceof xd && on(this.attrs, e.attrs) && on(this.spec, e.spec);
  }
  destroy() {
  }
}
let wn = class Co {
  /**
  @internal
  */
  constructor(e, r, a) {
    this.from = e, this.to = r, this.type = a;
  }
  /**
  @internal
  */
  copy(e, r) {
    return new Co(e, r, this.type);
  }
  /**
  @internal
  */
  eq(e, r = 0) {
    return this.type.eq(e.type) && this.from + r == e.from && this.to + r == e.to;
  }
  /**
  @internal
  */
  map(e, r, a) {
    return this.type.map(e, this, r, a);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, r, a) {
    return new Co(e, e, new Ci(r, a));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, r, a, o) {
    return new Co(e, r, new Do(a, o));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, r, a, o) {
    return new Co(e, r, new xd(a, o));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Do;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Ci;
  }
};
const Fa = [], ka = {};
class at {
  /**
  @internal
  */
  constructor(e, r) {
    this.local = e.length ? e : Fa, this.children = r.length ? r : Fa;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, r) {
    return r.length ? Oi(r, e, 0, ka) : bt;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, r, a) {
    let o = [];
    return this.findInner(e ?? 0, r ?? 1e9, o, 0, a), o;
  }
  findInner(e, r, a, o, n) {
    for (let i = 0; i < this.local.length; i++) {
      let s = this.local[i];
      s.from <= r && s.to >= e && (!n || n(s.spec)) && a.push(s.copy(s.from + o, s.to + o));
    }
    for (let i = 0; i < this.children.length; i += 3)
      if (this.children[i] < r && this.children[i + 1] > e) {
        let s = this.children[i] + 1;
        this.children[i + 2].findInner(e - s, r - s, a, o + s, n);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, r, a) {
    return this == bt || e.maps.length == 0 ? this : this.mapInner(e, r, 0, 0, a || ka);
  }
  /**
  @internal
  */
  mapInner(e, r, a, o, n) {
    let i;
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s].map(e, a, o);
      l && l.type.valid(r, l) ? (i || (i = [])).push(l) : n.onRemove && n.onRemove(this.local[s].spec);
    }
    return this.children.length ? Lk(this.children, i || [], e, r, a, o, n) : i ? new at(i.sort($a), Fa) : bt;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, r) {
    return r.length ? this == bt ? at.create(e, r) : this.addInner(e, r, 0) : this;
  }
  addInner(e, r, a) {
    let o, n = 0;
    e.forEach((s, l) => {
      let d = l + a, c;
      if (c = zh(r, s, d)) {
        for (o || (o = this.children.slice()); n < o.length && o[n] < l; )
          n += 3;
        o[n] == l ? o[n + 2] = o[n + 2].addInner(s, c, d + 1) : o.splice(n, 0, l, l + s.nodeSize, Oi(c, s, d + 1, ka)), n += 3;
      }
    });
    let i = Ih(n ? Nh(r) : r, -a);
    for (let s = 0; s < i.length; s++)
      i[s].type.valid(e, i[s]) || i.splice(s--, 1);
    return new at(i.length ? this.local.concat(i).sort($a) : this.local, o || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == bt ? this : this.removeInner(e, 0);
  }
  removeInner(e, r) {
    let a = this.children, o = this.local;
    for (let n = 0; n < a.length; n += 3) {
      let i, s = a[n] + r, l = a[n + 1] + r;
      for (let c = 0, u; c < e.length; c++)
        (u = e[c]) && u.from > s && u.to < l && (e[c] = null, (i || (i = [])).push(u));
      if (!i)
        continue;
      a == this.children && (a = this.children.slice());
      let d = a[n + 2].removeInner(i, s + 1);
      d != bt ? a[n + 2] = d : (a.splice(n, 3), n -= 3);
    }
    if (o.length) {
      for (let n = 0, i; n < e.length; n++)
        if (i = e[n])
          for (let s = 0; s < o.length; s++)
            o[s].eq(i, r) && (o == this.local && (o = this.local.slice()), o.splice(s--, 1));
    }
    return a == this.children && o == this.local ? this : o.length || a.length ? new at(o, a) : bt;
  }
  forChild(e, r) {
    if (this == bt)
      return this;
    if (r.isLeaf)
      return at.empty;
    let a, o;
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] >= e) {
        this.children[s] == e && (a = this.children[s + 2]);
        break;
      }
    let n = e + 1, i = n + r.content.size;
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      if (l.from < i && l.to > n && l.type instanceof Do) {
        let d = Math.max(n, l.from) - n, c = Math.min(i, l.to) - n;
        d < c && (o || (o = [])).push(l.copy(d, c));
      }
    }
    if (o) {
      let s = new at(o.sort($a), Fa);
      return a ? new Dk([s, a]) : s;
    }
    return a || bt;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof at) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let r = 0; r < this.local.length; r++)
      if (!this.local[r].eq(e.local[r]))
        return !1;
    for (let r = 0; r < this.children.length; r += 3)
      if (this.children[r] != e.children[r] || this.children[r + 1] != e.children[r + 1] || !this.children[r + 2].eq(e.children[r + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return kd(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == bt)
      return Fa;
    if (e.inlineContent || !this.local.some(Do.is))
      return this.local;
    let r = [];
    for (let a = 0; a < this.local.length; a++)
      this.local[a].type instanceof Do || r.push(this.local[a]);
    return r;
  }
  forEachSet(e) {
    e(this);
  }
}
at.empty = new at([], []);
at.removeOverlap = kd;
const bt = at.empty;
let Dk = class Ha {
  constructor(e) {
    this.members = e;
  }
  map(e, r) {
    const a = this.members.map((o) => o.map(e, r, ka));
    return Ha.from(a);
  }
  forChild(e, r) {
    if (r.isLeaf)
      return at.empty;
    let a = [];
    for (let o = 0; o < this.members.length; o++) {
      let n = this.members[o].forChild(e, r);
      n != bt && (n instanceof Ha ? a = a.concat(n.members) : a.push(n));
    }
    return Ha.from(a);
  }
  eq(e) {
    if (!(e instanceof Ha) || e.members.length != this.members.length)
      return !1;
    for (let r = 0; r < this.members.length; r++)
      if (!this.members[r].eq(e.members[r]))
        return !1;
    return !0;
  }
  locals(e) {
    let r, a = !0;
    for (let o = 0; o < this.members.length; o++) {
      let n = this.members[o].localsInner(e);
      if (n.length)
        if (!r)
          r = n;
        else {
          a && (r = r.slice(), a = !1);
          for (let i = 0; i < n.length; i++)
            r.push(n[i]);
        }
    }
    return r ? kd(a ? r : r.sort($a)) : Fa;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return bt;
      case 1:
        return e[0];
      default:
        return new Ha(e.every((r) => r instanceof at) ? e : e.reduce((r, a) => r.concat(a instanceof at ? a : a.members), []));
    }
  }
  forEachSet(e) {
    for (let r = 0; r < this.members.length; r++)
      this.members[r].forEachSet(e);
  }
};
function Lk(t, e, r, a, o, n, i) {
  let s = t.slice();
  for (let d = 0, c = n; d < r.maps.length; d++) {
    let u = 0;
    r.maps[d].forEach((p, h, f, m) => {
      let v = m - f - (h - p);
      for (let b = 0; b < s.length; b += 3) {
        let k = s[b + 1];
        if (k < 0 || p > k + c - u)
          continue;
        let $ = s[b] + c - u;
        h >= $ ? s[b + 1] = p <= $ ? -2 : -1 : p >= c && v && (s[b] += v, s[b + 1] += v);
      }
      u += v;
    }), c = r.maps[d].map(c, -1);
  }
  let l = !1;
  for (let d = 0; d < s.length; d += 3)
    if (s[d + 1] < 0) {
      if (s[d + 1] == -2) {
        l = !0, s[d + 1] = -1;
        continue;
      }
      let c = r.map(t[d] + n), u = c - o;
      if (u < 0 || u >= a.content.size) {
        l = !0;
        continue;
      }
      let p = r.map(t[d + 1] + n, -1), h = p - o, { index: f, offset: m } = a.content.findIndex(u), v = a.maybeChild(f);
      if (v && m == u && m + v.nodeSize == h) {
        let b = s[d + 2].mapInner(r, v, c + 1, t[d] + n + 1, i);
        b != bt ? (s[d] = u, s[d + 1] = h, s[d + 2] = b) : (s[d + 1] = -2, l = !0);
      } else
        l = !0;
    }
  if (l) {
    let d = Bk(s, t, e, r, o, n, i), c = Oi(d, a, 0, i);
    e = c.local;
    for (let u = 0; u < s.length; u += 3)
      s[u + 1] < 0 && (s.splice(u, 3), u -= 3);
    for (let u = 0, p = 0; u < c.children.length; u += 3) {
      let h = c.children[u];
      for (; p < s.length && s[p] < h; )
        p += 3;
      s.splice(p, 0, c.children[u], c.children[u + 1], c.children[u + 2]);
    }
  }
  return new at(e.sort($a), s);
}
function Ih(t, e) {
  if (!e || !t.length)
    return t;
  let r = [];
  for (let a = 0; a < t.length; a++) {
    let o = t[a];
    r.push(new wn(o.from + e, o.to + e, o.type));
  }
  return r;
}
function Bk(t, e, r, a, o, n, i) {
  function s(l, d) {
    for (let c = 0; c < l.local.length; c++) {
      let u = l.local[c].map(a, o, d);
      u ? r.push(u) : i.onRemove && i.onRemove(l.local[c].spec);
    }
    for (let c = 0; c < l.children.length; c += 3)
      s(l.children[c + 2], l.children[c] + d + 1);
  }
  for (let l = 0; l < t.length; l += 3)
    t[l + 1] == -1 && s(t[l + 2], e[l] + n + 1);
  return r;
}
function zh(t, e, r) {
  if (e.isLeaf)
    return null;
  let a = r + e.nodeSize, o = null;
  for (let n = 0, i; n < t.length; n++)
    (i = t[n]) && i.from > r && i.to < a && ((o || (o = [])).push(i), t[n] = null);
  return o;
}
function Nh(t) {
  let e = [];
  for (let r = 0; r < t.length; r++)
    t[r] != null && e.push(t[r]);
  return e;
}
function Oi(t, e, r, a) {
  let o = [], n = !1;
  e.forEach((s, l) => {
    let d = zh(t, s, l + r);
    if (d) {
      n = !0;
      let c = Oi(d, s, r + l + 1, a);
      c != bt && o.push(l, l + s.nodeSize, c);
    }
  });
  let i = Ih(n ? Nh(t) : t, -r).sort($a);
  for (let s = 0; s < i.length; s++)
    i[s].type.valid(e, i[s]) || (a.onRemove && a.onRemove(i[s].spec), i.splice(s--, 1));
  return i.length || o.length ? new at(i, o) : bt;
}
function $a(t, e) {
  return t.from - e.from || t.to - e.to;
}
function kd(t) {
  let e = t;
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r];
    if (a.from != a.to)
      for (let o = r + 1; o < e.length; o++) {
        let n = e[o];
        if (n.from == a.from) {
          n.to != a.to && (e == t && (e = t.slice()), e[o] = n.copy(n.from, a.to), bu(e, o + 1, n.copy(a.to, n.to)));
          continue;
        } else {
          n.from < a.to && (e == t && (e = t.slice()), e[r] = a.copy(a.from, n.from), bu(e, o, a.copy(n.from, a.to)));
          break;
        }
      }
  }
  return e;
}
function bu(t, e, r) {
  for (; e < t.length && $a(r, t[e]) > 0; )
    e++;
  t.splice(e, 0, r);
}
var ro = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, El = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
};
for (var st = 0; st < 10; st++) ro[48 + st] = ro[96 + st] = String(st);
for (var st = 1; st <= 24; st++) ro[st + 111] = "F" + st;
for (var st = 65; st <= 90; st++)
  ro[st] = String.fromCharCode(st + 32), El[st] = String.fromCharCode(st);
for (var js in ro) El.hasOwnProperty(js) || (El[js] = ro[js]);
const Fk = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function Ph(t, e) {
  let { $cursor: r } = t.selection;
  return !r || r.parentOffset > 0 ? null : r;
}
const Hk = (t, e, r) => {
  let a = Ph(t);
  if (!a)
    return !1;
  let o = $d(a);
  if (!o) {
    let i = a.blockRange(), s = i && uo(i);
    return s == null ? !1 : (e && e(t.tr.lift(i, s).scrollIntoView()), !0);
  }
  let n = o.nodeBefore;
  if (Dh(t, o, e, -1))
    return !0;
  if (a.parent.content.size == 0 && (ao(n, "end") || xe.isSelectable(n)))
    for (let i = a.depth; ; i--) {
      let s = fd(t.doc, a.before(i), a.after(i), me.empty);
      if (s && s.slice.size < s.to - s.from) {
        if (e) {
          let l = t.tr.step(s);
          l.setSelection(ao(n, "end") ? Ve.findFrom(l.doc.resolve(l.mapping.map(o.pos, -1)), -1) : xe.create(l.doc, o.pos - n.nodeSize)), e(l.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || a.node(i - 1).childCount > 1)
        break;
    }
  return n.isAtom && o.depth == a.depth - 1 ? (e && e(t.tr.delete(o.pos - n.nodeSize, o.pos).scrollIntoView()), !0) : !1;
}, qk = (t, e, r) => {
  let a = Ph(t);
  if (!a)
    return !1;
  let o = $d(a);
  return o ? jh(t, o, e) : !1;
}, Uk = (t, e, r) => {
  let a = Vh(t);
  if (!a)
    return !1;
  let o = _d(a);
  return o ? jh(t, o, e) : !1;
};
function jh(t, e, r) {
  let a = e.nodeBefore, o = a, n = e.pos - 1;
  for (; !o.isTextblock; n--) {
    if (o.type.spec.isolating)
      return !1;
    let c = o.lastChild;
    if (!c)
      return !1;
    o = c;
  }
  let i = e.nodeAfter, s = i, l = e.pos + 1;
  for (; !s.isTextblock; l++) {
    if (s.type.spec.isolating)
      return !1;
    let c = s.firstChild;
    if (!c)
      return !1;
    s = c;
  }
  let d = fd(t.doc, n, l, me.empty);
  if (!d || d.from != n || d instanceof Nt && d.slice.size >= l - n)
    return !1;
  if (r) {
    let c = t.tr.step(d);
    c.setSelection(Ae.create(c.doc, n)), r(c.scrollIntoView());
  }
  return !0;
}
function ao(t, e, r = !1) {
  for (let a = t; a; a = e == "start" ? a.firstChild : a.lastChild) {
    if (a.isTextblock)
      return !0;
    if (r && a.childCount != 1)
      return !1;
  }
  return !1;
}
const Wk = (t, e, r) => {
  let { $head: a, empty: o } = t.selection, n = a;
  if (!o)
    return !1;
  if (a.parent.isTextblock) {
    if (a.parentOffset > 0)
      return !1;
    n = $d(a);
  }
  let i = n && n.nodeBefore;
  return !i || !xe.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(xe.create(t.doc, n.pos - i.nodeSize)).scrollIntoView()), !0);
};
function $d(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Vh(t, e) {
  let { $cursor: r } = t.selection;
  return !r || r.parentOffset < r.parent.content.size ? null : r;
}
const Kk = (t, e, r) => {
  let a = Vh(t);
  if (!a)
    return !1;
  let o = _d(a);
  if (!o)
    return !1;
  let n = o.nodeAfter;
  if (Dh(t, o, e, 1))
    return !0;
  if (a.parent.content.size == 0 && (ao(n, "start") || xe.isSelectable(n))) {
    let i = fd(t.doc, a.before(), a.after(), me.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let s = t.tr.step(i);
        s.setSelection(ao(n, "start") ? Ve.findFrom(s.doc.resolve(s.mapping.map(o.pos)), 1) : xe.create(s.doc, s.mapping.map(o.pos))), e(s.scrollIntoView());
      }
      return !0;
    }
  }
  return n.isAtom && o.depth == a.depth - 1 ? (e && e(t.tr.delete(o.pos, o.pos + n.nodeSize).scrollIntoView()), !0) : !1;
}, Yk = (t, e, r) => {
  let { $head: a, empty: o } = t.selection, n = a;
  if (!o)
    return !1;
  if (a.parent.isTextblock) {
    if (a.parentOffset < a.parent.content.size)
      return !1;
    n = _d(a);
  }
  let i = n && n.nodeAfter;
  return !i || !xe.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(xe.create(t.doc, n.pos)).scrollIntoView()), !0);
};
function _d(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let r = t.node(e);
      if (t.index(e) + 1 < r.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (r.type.spec.isolating)
        break;
    }
  return null;
}
const Jk = (t, e) => {
  let r = t.selection, a = r instanceof xe, o;
  if (a) {
    if (r.node.isTextblock || !za(t.doc, r.from))
      return !1;
    o = r.from;
  } else if (o = ts(t.doc, r.from, -1), o == null)
    return !1;
  if (e) {
    let n = t.tr.join(o);
    a && n.setSelection(xe.create(n.doc, o - t.doc.resolve(o).nodeBefore.nodeSize)), e(n.scrollIntoView());
  }
  return !0;
}, Xk = (t, e) => {
  let r = t.selection, a;
  if (r instanceof xe) {
    if (r.node.isTextblock || !za(t.doc, r.to))
      return !1;
    a = r.to;
  } else if (a = ts(t.doc, r.to, 1), a == null)
    return !1;
  return e && e(t.tr.join(a).scrollIntoView()), !0;
}, Gk = (t, e) => {
  let { $from: r, $to: a } = t.selection, o = r.blockRange(a), n = o && uo(o);
  return n == null ? !1 : (e && e(t.tr.lift(o, n).scrollIntoView()), !0);
}, Zk = (t, e) => {
  let { $head: r, $anchor: a } = t.selection;
  return !r.parent.type.spec.code || !r.sameParent(a) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Rh(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: r } = t.edge(e);
    if (r.isTextblock && !r.hasRequiredAttrs())
      return r;
  }
  return null;
}
const Qk = (t, e) => {
  let { $head: r, $anchor: a } = t.selection;
  if (!r.parent.type.spec.code || !r.sameParent(a))
    return !1;
  let o = r.node(-1), n = r.indexAfter(-1), i = Rh(o.contentMatchAt(n));
  if (!i || !o.canReplaceWith(n, n, i))
    return !1;
  if (e) {
    let s = r.after(), l = t.tr.replaceWith(s, s, i.createAndFill());
    l.setSelection(Ve.near(l.doc.resolve(s), 1)), e(l.scrollIntoView());
  }
  return !0;
}, e2 = (t, e) => {
  let r = t.selection, { $from: a, $to: o } = r;
  if (r instanceof or || a.parent.inlineContent || o.parent.inlineContent)
    return !1;
  let n = Rh(o.parent.contentMatchAt(o.indexAfter()));
  if (!n || !n.isTextblock)
    return !1;
  if (e) {
    let i = (!a.parentOffset && o.index() < o.parent.childCount ? a : o).pos, s = t.tr.insert(i, n.createAndFill());
    s.setSelection(Ae.create(s.doc, i + 1)), e(s.scrollIntoView());
  }
  return !0;
}, t2 = (t, e) => {
  let { $cursor: r } = t.selection;
  if (!r || r.parent.content.size)
    return !1;
  if (r.depth > 1 && r.after() != r.end(-1)) {
    let n = r.before();
    if (Za(t.doc, n))
      return e && e(t.tr.split(n).scrollIntoView()), !0;
  }
  let a = r.blockRange(), o = a && uo(a);
  return o == null ? !1 : (e && e(t.tr.lift(a, o).scrollIntoView()), !0);
}, r2 = (t, e) => {
  let { $from: r, to: a } = t.selection, o, n = r.sharedDepth(a);
  return n == 0 ? !1 : (o = r.before(n), e && e(t.tr.setSelection(xe.create(t.doc, o))), !0);
};
function a2(t, e, r) {
  let a = e.nodeBefore, o = e.nodeAfter, n = e.index();
  return !a || !o || !a.type.compatibleContent(o.type) ? !1 : !a.content.size && e.parent.canReplace(n - 1, n) ? (r && r(t.tr.delete(e.pos - a.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(n, n + 1) || !(o.isTextblock || za(t.doc, e.pos)) ? !1 : (r && r(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Dh(t, e, r, a) {
  let o = e.nodeBefore, n = e.nodeAfter, i, s, l = o.type.spec.isolating || n.type.spec.isolating;
  if (!l && a2(t, e, r))
    return !0;
  let d = !l && e.parent.canReplace(e.index(), e.index() + 1);
  if (d && (i = (s = o.contentMatchAt(o.childCount)).findWrapping(n.type)) && s.matchType(i[0] || n.type).validEnd) {
    if (r) {
      let h = e.pos + n.nodeSize, f = re.empty;
      for (let b = i.length - 1; b >= 0; b--)
        f = re.from(i[b].create(null, f));
      f = re.from(o.copy(f));
      let m = t.tr.step(new wr(e.pos - 1, h, e.pos, h, new me(f, 1, 0), i.length, !0)), v = m.doc.resolve(h + 2 * i.length);
      v.nodeAfter && v.nodeAfter.type == o.type && za(m.doc, v.pos) && m.join(v.pos), r(m.scrollIntoView());
    }
    return !0;
  }
  let c = n.type.spec.isolating || a > 0 && l ? null : Ve.findFrom(e, 1), u = c && c.$from.blockRange(c.$to), p = u && uo(u);
  if (p != null && p >= e.depth)
    return r && r(t.tr.lift(u, p).scrollIntoView()), !0;
  if (d && ao(n, "start", !0) && ao(o, "end")) {
    let h = o, f = [];
    for (; f.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = n, v = 1;
    for (; !m.isTextblock; m = m.firstChild)
      v++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (r) {
        let b = re.empty;
        for (let $ = f.length - 1; $ >= 0; $--)
          b = re.from(f[$].copy(b));
        let k = t.tr.step(new wr(e.pos - f.length, e.pos + n.nodeSize, e.pos + v, e.pos + n.nodeSize - v, new me(b, f.length, 0), 0, !0));
        r(k.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Lh(t) {
  return function(e, r) {
    let a = e.selection, o = t < 0 ? a.$from : a.$to, n = o.depth;
    for (; o.node(n).isInline; ) {
      if (!n)
        return !1;
      n--;
    }
    return o.node(n).isTextblock ? (r && r(e.tr.setSelection(Ae.create(e.doc, t < 0 ? o.start(n) : o.end(n)))), !0) : !1;
  };
}
const o2 = Lh(-1), n2 = Lh(1);
function i2(t, e = null) {
  return function(r, a) {
    let { $from: o, $to: n } = r.selection, i = o.blockRange(n), s = i && ih(i, t, e);
    return s ? (a && a(r.tr.wrap(i, s).scrollIntoView()), !0) : !1;
  };
}
function wu(t, e = null) {
  return function(r, a) {
    let o = !1;
    for (let n = 0; n < r.selection.ranges.length && !o; n++) {
      let { $from: { pos: i }, $to: { pos: s } } = r.selection.ranges[n];
      r.doc.nodesBetween(i, s, (l, d) => {
        if (o)
          return !1;
        if (!(!l.isTextblock || l.hasMarkup(t, e)))
          if (l.type == t)
            o = !0;
          else {
            let c = r.doc.resolve(d), u = c.index();
            o = c.parent.canReplaceWith(u, u + 1, t);
          }
      });
    }
    if (!o)
      return !1;
    if (a) {
      let n = r.tr;
      for (let i = 0; i < r.selection.ranges.length; i++) {
        let { $from: { pos: s }, $to: { pos: l } } = r.selection.ranges[i];
        n.setBlockType(s, l, t, e);
      }
      a(n.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function s2(t, e = null) {
  return function(r, a) {
    let { $from: o, $to: n } = r.selection, i = o.blockRange(n), s = !1, l = i;
    if (!i)
      return !1;
    if (i.depth >= 2 && o.node(i.depth - 1).type.compatibleContent(t) && i.startIndex == 0) {
      if (o.index(i.depth - 1) == 0)
        return !1;
      let c = r.doc.resolve(i.start - 2);
      l = new bi(c, c, i.depth), i.endIndex < i.parent.childCount && (i = new bi(o, r.doc.resolve(n.end(i.depth)), i.depth)), s = !0;
    }
    let d = ih(l, t, e, i);
    return d ? (a && a(l2(r.tr, i, d, s, t).scrollIntoView()), !0) : !1;
  };
}
function l2(t, e, r, a, o) {
  let n = re.empty;
  for (let c = r.length - 1; c >= 0; c--)
    n = re.from(r[c].type.create(r[c].attrs, n));
  t.step(new wr(e.start - (a ? 2 : 0), e.end, e.start, e.end, new me(n, 0, 0), r.length, !0));
  let i = 0;
  for (let c = 0; c < r.length; c++)
    r[c].type == o && (i = c + 1);
  let s = r.length - i, l = e.start + r.length - (a ? 2 : 0), d = e.parent;
  for (let c = e.startIndex, u = e.endIndex, p = !0; c < u; c++, p = !1)
    !p && Za(t.doc, l, s) && (t.split(l, s), l += 2 * s), l += d.child(c).nodeSize;
  return t;
}
function d2(t) {
  return function(e, r) {
    let { $from: a, $to: o } = e.selection, n = a.blockRange(o, (i) => i.childCount > 0 && i.firstChild.type == t);
    return n ? r ? a.node(n.depth - 1).type == t ? c2(e, r, t, n) : u2(e, r, n) : !0 : !1;
  };
}
function c2(t, e, r, a) {
  let o = t.tr, n = a.end, i = a.$to.end(a.depth);
  n < i && (o.step(new wr(n - 1, i, n, i, new me(re.from(r.create(null, a.parent.copy())), 1, 0), 1, !0)), a = new bi(o.doc.resolve(a.$from.pos), o.doc.resolve(i), a.depth));
  const s = uo(a);
  if (s == null)
    return !1;
  o.lift(a, s);
  let l = o.mapping.map(n, -1) - 1;
  return za(o.doc, l) && o.join(l), e(o.scrollIntoView()), !0;
}
function u2(t, e, r) {
  let a = t.tr, o = r.parent;
  for (let h = r.end, f = r.endIndex - 1, m = r.startIndex; f > m; f--)
    h -= o.child(f).nodeSize, a.delete(h - 1, h + 1);
  let n = a.doc.resolve(r.start), i = n.nodeAfter;
  if (a.mapping.map(r.end) != r.start + n.nodeAfter.nodeSize)
    return !1;
  let s = r.startIndex == 0, l = r.endIndex == o.childCount, d = n.node(-1), c = n.index(-1);
  if (!d.canReplace(c + (s ? 0 : 1), c + 1, i.content.append(l ? re.empty : re.from(o))))
    return !1;
  let u = n.pos, p = u + i.nodeSize;
  return a.step(new wr(u - (s ? 1 : 0), p + (l ? 1 : 0), u + 1, p - 1, new me((s ? re.empty : re.from(o.copy(re.empty))).append(l ? re.empty : re.from(o.copy(re.empty))), s ? 0 : 1, l ? 0 : 1), s ? 0 : 1)), e(a.scrollIntoView()), !0;
}
function p2(t) {
  return function(e, r) {
    let { $from: a, $to: o } = e.selection, n = a.blockRange(o, (d) => d.childCount > 0 && d.firstChild.type == t);
    if (!n)
      return !1;
    let i = n.startIndex;
    if (i == 0)
      return !1;
    let s = n.parent, l = s.child(i - 1);
    if (l.type != t)
      return !1;
    if (r) {
      let d = l.lastChild && l.lastChild.type == s.type, c = re.from(d ? t.create() : null), u = new me(re.from(t.create(null, re.from(s.type.create(null, c)))), d ? 3 : 1, 0), p = n.start, h = n.end;
      r(e.tr.step(new wr(p - (d ? 3 : 1), h, p, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Bh(t) {
  const { state: e, transaction: r } = t;
  let { selection: a } = r, { doc: o } = r, { storedMarks: n } = r;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return n;
    },
    get selection() {
      return a;
    },
    get doc() {
      return o;
    },
    get tr() {
      return a = r.selection, o = r.doc, n = r.storedMarks, r;
    }
  };
}
class f2 {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: r, state: a } = this, { view: o } = r, { tr: n } = a, i = this.buildProps(n);
    return Object.fromEntries(Object.entries(e).map(([s, l]) => [s, (...d) => {
      const c = l(...d)(i);
      return !n.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(n), c;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, r = !0) {
    const { rawCommands: a, editor: o, state: n } = this, { view: i } = o, s = [], l = !!e, d = e || n.tr, c = () => (!l && r && !d.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(d), s.every((p) => p === !0)), u = {
      ...Object.fromEntries(Object.entries(a).map(([p, h]) => [p, (...f) => {
        const m = this.buildProps(d, r), v = h(...f)(m);
        return s.push(v), u;
      }])),
      run: c
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: r, state: a } = this, o = !1, n = e || a.tr, i = this.buildProps(n, o);
    return {
      ...Object.fromEntries(Object.entries(r).map(([s, l]) => [s, (...d) => l(...d)({ ...i, dispatch: void 0 })])),
      chain: () => this.createChain(n, o)
    };
  }
  buildProps(e, r = !0) {
    const { rawCommands: a, editor: o, state: n } = this, { view: i } = o, s = {
      tr: e,
      editor: o,
      view: i,
      state: Bh({
        state: n,
        transaction: e
      }),
      dispatch: r ? () => {
      } : void 0,
      chain: () => this.createChain(e, r),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(a).map(([l, d]) => [l, (...c) => d(...c)(s)]));
      }
    };
    return s;
  }
}
function $t(t, e, r) {
  return t.config[e] === void 0 && t.parent ? $t(t.parent, e, r) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...r,
    parent: t.parent ? $t(t.parent, e, r) : null
  }) : t.config[e];
}
function h2(t) {
  const e = t.filter((o) => o.type === "extension"), r = t.filter((o) => o.type === "node"), a = t.filter((o) => o.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: r,
    markExtensions: a
  };
}
function pt(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function yn(...t) {
  return t.filter((e) => !!e).reduce((e, r) => {
    const a = { ...e };
    return Object.entries(r).forEach(([o, n]) => {
      if (!a[o]) {
        a[o] = n;
        return;
      }
      if (o === "class") {
        const i = n ? n.split(" ") : [], s = a[o] ? a[o].split(" ") : [], l = i.filter((d) => !s.includes(d));
        a[o] = [...s, ...l].join(" ");
      } else if (o === "style") {
        const i = n ? n.split(";").map((d) => d.trim()).filter(Boolean) : [], s = a[o] ? a[o].split(";").map((d) => d.trim()).filter(Boolean) : [], l = /* @__PURE__ */ new Map();
        s.forEach((d) => {
          const [c, u] = d.split(":").map((p) => p.trim());
          l.set(c, u);
        }), i.forEach((d) => {
          const [c, u] = d.split(":").map((p) => p.trim());
          l.set(c, u);
        }), a[o] = Array.from(l.entries()).map(([d, c]) => `${d}: ${c}`).join("; ");
      } else
        a[o] = n;
    }), a;
  }, {});
}
function m2(t) {
  return typeof t == "function";
}
function ct(t, e = void 0, ...r) {
  return m2(t) ? e ? t.bind(e)(...r) : t(...r) : t;
}
function g2(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
class Fh {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
function v2(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function jn(t) {
  return v2(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function is(t, e) {
  const r = { ...t };
  return jn(t) && jn(e) && Object.keys(e).forEach((a) => {
    jn(e[a]) && jn(t[a]) ? r[a] = is(t[a], e[a]) : r[a] = e[a];
  }), r;
}
class oo {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ct($t(this, "addOptions", {
      name: this.name
    }))), this.storage = ct($t(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new oo(e);
  }
  configure(e = {}) {
    const r = this.extend({
      ...this.config,
      addOptions: () => is(this.options, e)
    });
    return r.name = this.name, r.parent = this.parent, r;
  }
  extend(e = {}) {
    const r = new oo(e);
    return r.parent = this, this.child = r, r.name = e.name ? e.name : r.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${r.name}".`), r.options = ct($t(r, "addOptions", {
      name: r.name
    })), r.storage = ct($t(r, "addStorage", {
      name: r.name,
      options: r.options
    })), r;
  }
  static handleExit({ editor: e, mark: r }) {
    const { tr: a } = e.state, o = e.state.selection.$from;
    if (o.pos === o.end()) {
      const n = o.marks();
      if (!n.find((s) => (s == null ? void 0 : s.type.name) === r.name))
        return !1;
      const i = n.find((s) => (s == null ? void 0 : s.type.name) === r.name);
      return i && a.removeStoredMark(i), a.insertText(" ", o.pos), e.view.dispatch(a), !0;
    }
    return !1;
  }
}
class b2 {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
let er = class Ml {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ct($t(this, "addOptions", {
      name: this.name
    }))), this.storage = ct($t(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ml(e);
  }
  configure(e = {}) {
    const r = this.extend({
      ...this.config,
      addOptions: () => is(this.options, e)
    });
    return r.name = this.name, r.parent = this.parent, r;
  }
  extend(e = {}) {
    const r = new Ml({ ...this.config, ...e });
    return r.parent = this, this.child = r, r.name = e.name ? e.name : r.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${r.name}".`), r.options = ct($t(r, "addOptions", {
      name: r.name
    })), r.storage = ct($t(r, "addStorage", {
      name: r.name,
      options: r.options
    })), r;
  }
};
function Hh(t, e, r) {
  const { from: a, to: o } = e, { blockSeparator: n = `

`, textSerializers: i = {} } = r || {};
  let s = "";
  return t.nodesBetween(a, o, (l, d, c, u) => {
    var p;
    l.isBlock && d > a && (s += n);
    const h = i == null ? void 0 : i[l.type.name];
    if (h)
      return c && (s += h({
        node: l,
        pos: d,
        parent: c,
        index: u,
        range: e
      })), !1;
    l.isText && (s += (p = l == null ? void 0 : l.text) === null || p === void 0 ? void 0 : p.slice(Math.max(a, d) - d, o - d));
  }), s;
}
function qh(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, r]) => [e, r.spec.toText]));
}
er.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new sr({
        key: new Qt("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: r } = t, { doc: a, selection: o } = e, { ranges: n } = o, i = Math.min(...n.map((d) => d.$from.pos)), s = Math.max(...n.map((d) => d.$to.pos)), l = qh(r);
            return Hh(a, { from: i, to: s }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: l
            });
          }
        }
      })
    ];
  }
});
const w2 = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var r;
  t.isDestroyed || (e.dom.blur(), (r = window == null ? void 0 : window.getSelection()) === null || r === void 0 || r.removeAllRanges());
}), !0), y2 = (t = !1) => ({ commands: e }) => e.setContent("", t), x2 = () => ({ state: t, tr: e, dispatch: r }) => {
  const { selection: a } = e, { ranges: o } = a;
  return r && o.forEach(({ $from: n, $to: i }) => {
    t.doc.nodesBetween(n.pos, i.pos, (s, l) => {
      if (s.type.isText)
        return;
      const { doc: d, mapping: c } = e, u = d.resolve(c.map(l)), p = d.resolve(c.map(l + s.nodeSize)), h = u.blockRange(p);
      if (!h)
        return;
      const f = uo(h);
      if (s.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, m);
      }
      (f || f === 0) && e.lift(h, f);
    });
  }), !0;
}, k2 = (t) => (e) => t(e), $2 = () => ({ state: t, dispatch: e }) => e2(t, e), _2 = (t, e) => ({ editor: r, tr: a }) => {
  const { state: o } = r, n = o.doc.slice(t.from, t.to);
  a.deleteRange(t.from, t.to);
  const i = a.mapping.map(e);
  return a.insert(i, n.content), a.setSelection(new Ae(a.doc.resolve(i - 1))), !0;
}, S2 = () => ({ tr: t, dispatch: e }) => {
  const { selection: r } = t, a = r.$anchor.node();
  if (a.content.size > 0)
    return !1;
  const o = t.selection.$anchor;
  for (let n = o.depth; n > 0; n -= 1)
    if (o.node(n).type === a.type) {
      if (e) {
        const i = o.before(n), s = o.after(n);
        t.delete(i, s).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, C2 = (t) => ({ tr: e, state: r, dispatch: a }) => {
  const o = pt(t, r.schema), n = e.selection.$anchor;
  for (let i = n.depth; i > 0; i -= 1)
    if (n.node(i).type === o) {
      if (a) {
        const s = n.before(i), l = n.after(i);
        e.delete(s, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, O2 = (t) => ({ tr: e, dispatch: r }) => {
  const { from: a, to: o } = t;
  return r && e.delete(a, o), !0;
}, E2 = () => ({ state: t, dispatch: e }) => Fk(t, e), M2 = () => ({ commands: t }) => t.keyboardShortcut("Enter"), T2 = () => ({ state: t, dispatch: e }) => Qk(t, e);
function Ei(t, e, r = { strict: !0 }) {
  const a = Object.keys(e);
  return a.length ? a.every((o) => r.strict ? e[o] === t[o] : g2(e[o]) ? e[o].test(t[o]) : e[o] === t[o]) : !0;
}
function Tl(t, e, r = {}) {
  return t.find((a) => a.type === e && Ei(a.attrs, r));
}
function A2(t, e, r = {}) {
  return !!Tl(t, e, r);
}
function Sd(t, e, r = {}) {
  if (!t || !e)
    return;
  let a = t.parent.childAfter(t.parentOffset);
  if (t.parentOffset === a.offset && a.offset !== 0 && (a = t.parent.childBefore(t.parentOffset)), !a.node)
    return;
  const o = Tl([...a.node.marks], e, r);
  if (!o)
    return;
  let n = a.index, i = t.start() + a.offset, s = n + 1, l = i + a.node.nodeSize;
  for (Tl([...a.node.marks], e, r); n > 0 && o.isInSet(t.parent.child(n - 1).marks); )
    n -= 1, i -= t.parent.child(n).nodeSize;
  for (; s < t.parent.childCount && A2([...t.parent.child(s).marks], e, r); )
    l += t.parent.child(s).nodeSize, s += 1;
  return {
    from: i,
    to: l
  };
}
function ea(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const I2 = (t, e = {}) => ({ tr: r, state: a, dispatch: o }) => {
  const n = ea(t, a.schema), { doc: i, selection: s } = r, { $from: l, from: d, to: c } = s;
  if (o) {
    const u = Sd(l, n, e);
    if (u && u.from <= d && u.to >= c) {
      const p = Ae.create(i, u.from, u.to);
      r.setSelection(p);
    }
  }
  return !0;
}, z2 = (t) => (e) => {
  const r = typeof t == "function" ? t(e) : t;
  for (let a = 0; a < r.length; a += 1)
    if (r[a](e))
      return !0;
  return !1;
};
function Cd(t) {
  return t instanceof Ae;
}
function Or(t = 0, e = 0, r = 0) {
  return Math.min(Math.max(t, e), r);
}
function N2(t, e = null) {
  if (!e)
    return null;
  const r = Ve.atStart(t), a = Ve.atEnd(t);
  if (e === "start" || e === !0)
    return r;
  if (e === "end")
    return a;
  const o = r.from, n = a.to;
  return e === "all" ? Ae.create(t, Or(0, o, n), Or(t.content.size, o, n)) : Ae.create(t, Or(e, o, n), Or(e, o, n));
}
function Od() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const P2 = (t = null, e = {}) => ({ editor: r, view: a, tr: o, dispatch: n }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    Od() && a.dom.focus(), requestAnimationFrame(() => {
      r.isDestroyed || (a.focus(), e != null && e.scrollIntoView && r.commands.scrollIntoView());
    });
  };
  if (a.hasFocus() && t === null || t === !1)
    return !0;
  if (n && t === null && !Cd(r.state.selection))
    return i(), !0;
  const s = N2(o.doc, t) || r.state.selection, l = r.state.selection.eq(s);
  return n && (l || o.setSelection(s), l && o.storedMarks && o.setStoredMarks(o.storedMarks), i()), !0;
}, j2 = (t, e) => (r) => t.every((a, o) => e(a, { ...r, index: o })), V2 = (t, e) => ({ tr: r, commands: a }) => a.insertContentAt({ from: r.selection.from, to: r.selection.to }, t, e), Uh = (t) => {
  const e = t.childNodes;
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const a = e[r];
    a.nodeType === 3 && a.nodeValue && /^(\n\s\s|\n)$/.test(a.nodeValue) ? t.removeChild(a) : a.nodeType === 1 && Uh(a);
  }
  return t;
};
function Vn(t) {
  const e = `<body>${t}</body>`, r = new window.DOMParser().parseFromString(e, "text/html").body;
  return Uh(r);
}
function Mi(t, e, r) {
  r = {
    slice: !0,
    parseOptions: {},
    ...r
  };
  const a = typeof t == "object" && t !== null, o = typeof t == "string";
  if (a)
    try {
      if (Array.isArray(t) && t.length > 0)
        return re.fromArray(t.map((i) => e.nodeFromJSON(i)));
      const n = e.nodeFromJSON(t);
      return r.errorOnInvalidContent && n.check(), n;
    } catch (n) {
      if (r.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: n });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", n), Mi("", e, r);
    }
  if (o) {
    if (r.errorOnInvalidContent) {
      let i = !1, s = "";
      const l = new j5({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (d) => (i = !0, s = typeof d == "string" ? d : d.outerHTML, null)
              }
            ]
          }
        })
      });
      if (r.slice ? Kn.fromSchema(l).parseSlice(Vn(t), r.parseOptions) : Kn.fromSchema(l).parse(Vn(t), r.parseOptions), r.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${s}`) });
    }
    const n = Kn.fromSchema(e);
    return r.slice ? n.parseSlice(Vn(t), r.parseOptions).content : n.parse(Vn(t), r.parseOptions);
  }
  return Mi("", e, r);
}
function R2(t, e, r) {
  const a = t.steps.length - 1;
  if (a < e)
    return;
  const o = t.steps[a];
  if (!(o instanceof Nt || o instanceof wr))
    return;
  const n = t.mapping.maps[a];
  let i = 0;
  n.forEach((s, l, d, c) => {
    i === 0 && (i = c);
  }), t.setSelection(Ve.near(t.doc.resolve(i), r));
}
const D2 = (t) => !("type" in t), L2 = (t, e, r) => ({ tr: a, dispatch: o, editor: n }) => {
  var i;
  if (o) {
    r = {
      parseOptions: {},
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...r
    };
    let s;
    try {
      s = Mi(e, n.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...r.parseOptions
        },
        errorOnInvalidContent: (i = r.errorOnInvalidContent) !== null && i !== void 0 ? i : n.options.enableContentCheck
      });
    } catch (h) {
      return n.emit("contentError", {
        editor: n,
        error: h,
        disableCollaboration: () => {
          console.error("[tiptap error]: Unable to disable collaboration at this point in time");
        }
      }), !1;
    }
    let { from: l, to: d } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, c = !0, u = !0;
    if ((D2(s) ? s : [s]).forEach((h) => {
      h.check(), c = c ? h.isText && h.marks.length === 0 : !1, u = u ? h.isBlock : !1;
    }), l === d && u) {
      const { parent: h } = a.doc.resolve(l);
      h.isTextblock && !h.type.spec.code && !h.childCount && (l -= 1, d += 1);
    }
    let p;
    c ? (Array.isArray(e) ? p = e.map((h) => h.text || "").join("") : typeof e == "object" && e && e.text ? p = e.text : p = e, a.insertText(p, l, d)) : (p = s, a.replaceWith(l, d, p)), r.updateSelection && R2(a, a.steps.length - 1, -1), r.applyInputRules && a.setMeta("applyInputRules", { from: l, text: p }), r.applyPasteRules && a.setMeta("applyPasteRules", { from: l, text: p });
  }
  return !0;
}, B2 = () => ({ state: t, dispatch: e }) => Jk(t, e), F2 = () => ({ state: t, dispatch: e }) => Xk(t, e), H2 = () => ({ state: t, dispatch: e }) => Hk(t, e), q2 = () => ({ state: t, dispatch: e }) => Kk(t, e), U2 = () => ({ state: t, dispatch: e, tr: r }) => {
  try {
    const a = ts(t.doc, t.selection.$from.pos, -1);
    return a == null ? !1 : (r.join(a, 2), e && e(r), !0);
  } catch {
    return !1;
  }
}, W2 = () => ({ state: t, dispatch: e, tr: r }) => {
  try {
    const a = ts(t.doc, t.selection.$from.pos, 1);
    return a == null ? !1 : (r.join(a, 2), e && e(r), !0);
  } catch {
    return !1;
  }
}, K2 = () => ({ state: t, dispatch: e }) => qk(t, e), Y2 = () => ({ state: t, dispatch: e }) => Uk(t, e);
function Wh() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function J2(t) {
  const e = t.split(/-(?!$)/);
  let r = e[e.length - 1];
  r === "Space" && (r = " ");
  let a, o, n, i;
  for (let s = 0; s < e.length - 1; s += 1) {
    const l = e[s];
    if (/^(cmd|meta|m)$/i.test(l))
      i = !0;
    else if (/^a(lt)?$/i.test(l))
      a = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      o = !0;
    else if (/^s(hift)?$/i.test(l))
      n = !0;
    else if (/^mod$/i.test(l))
      Od() || Wh() ? i = !0 : o = !0;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return a && (r = `Alt-${r}`), o && (r = `Ctrl-${r}`), i && (r = `Meta-${r}`), n && (r = `Shift-${r}`), r;
}
const X2 = (t) => ({ editor: e, view: r, tr: a, dispatch: o }) => {
  const n = J2(t).split(/-(?!$)/), i = n.find((d) => !["Alt", "Ctrl", "Meta", "Shift"].includes(d)), s = new KeyboardEvent("keydown", {
    key: i === "Space" ? " " : i,
    altKey: n.includes("Alt"),
    ctrlKey: n.includes("Ctrl"),
    metaKey: n.includes("Meta"),
    shiftKey: n.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), l = e.captureTransaction(() => {
    r.someProp("handleKeyDown", (d) => d(r, s));
  });
  return l == null || l.steps.forEach((d) => {
    const c = d.map(a.mapping);
    c && o && a.maybeStep(c);
  }), !0;
};
function Ed(t, e, r = {}) {
  const { from: a, to: o, empty: n } = t.selection, i = e ? pt(e, t.schema) : null, s = [];
  t.doc.nodesBetween(a, o, (c, u) => {
    if (c.isText)
      return;
    const p = Math.max(a, u), h = Math.min(o, u + c.nodeSize);
    s.push({
      node: c,
      from: p,
      to: h
    });
  });
  const l = o - a, d = s.filter((c) => i ? i.name === c.node.type.name : !0).filter((c) => Ei(c.node.attrs, r, { strict: !1 }));
  return n ? !!d.length : d.reduce((c, u) => c + u.to - u.from, 0) >= l;
}
const G2 = (t, e = {}) => ({ state: r, dispatch: a }) => {
  const o = pt(t, r.schema);
  return Ed(r, o, e) ? Gk(r, a) : !1;
}, Z2 = () => ({ state: t, dispatch: e }) => t2(t, e), Q2 = (t) => ({ state: e, dispatch: r }) => {
  const a = pt(t, e.schema);
  return d2(a)(e, r);
}, e6 = () => ({ state: t, dispatch: e }) => Zk(t, e);
function Kh(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function yu(t, e) {
  const r = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((a, o) => (r.includes(o) || (a[o] = t[o]), a), {});
}
const t6 = (t, e) => ({ tr: r, state: a, dispatch: o }) => {
  let n = null, i = null;
  const s = Kh(typeof t == "string" ? t : t.name, a.schema);
  return s ? (s === "node" && (n = pt(t, a.schema)), s === "mark" && (i = ea(t, a.schema)), o && r.selection.ranges.forEach((l) => {
    a.doc.nodesBetween(l.$from.pos, l.$to.pos, (d, c) => {
      n && n === d.type && r.setNodeMarkup(c, void 0, yu(d.attrs, e)), i && d.marks.length && d.marks.forEach((u) => {
        i === u.type && r.addMark(c, c + d.nodeSize, i.create(yu(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, r6 = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), a6 = () => ({ tr: t, commands: e }) => e.setTextSelection({
  from: 0,
  to: t.doc.content.size
}), o6 = () => ({ state: t, dispatch: e }) => Wk(t, e), n6 = () => ({ state: t, dispatch: e }) => Yk(t, e), i6 = () => ({ state: t, dispatch: e }) => r2(t, e), s6 = () => ({ state: t, dispatch: e }) => n2(t, e), l6 = () => ({ state: t, dispatch: e }) => o2(t, e);
function d6(t, e, r = {}, a = {}) {
  return Mi(t, e, {
    slice: !1,
    parseOptions: r,
    errorOnInvalidContent: a.errorOnInvalidContent
  });
}
const c6 = (t, e = !1, r = {}, a = {}) => ({ editor: o, tr: n, dispatch: i, commands: s }) => {
  var l, d;
  const { doc: c } = n;
  if (r.preserveWhitespace !== "full") {
    const u = d6(t, o.schema, r, {
      errorOnInvalidContent: (l = a.errorOnInvalidContent) !== null && l !== void 0 ? l : o.options.enableContentCheck
    });
    return i && n.replaceWith(0, c.content.size, u).setMeta("preventUpdate", !e), !0;
  }
  return i && n.setMeta("preventUpdate", !e), s.insertContentAt({ from: 0, to: c.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: (d = a.errorOnInvalidContent) !== null && d !== void 0 ? d : o.options.enableContentCheck
  });
};
function u6(t, e) {
  const r = ea(e, t.schema), { from: a, to: o, empty: n } = t.selection, i = [];
  n ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(a, o, (l) => {
    i.push(...l.marks);
  });
  const s = i.find((l) => l.type.name === r.name);
  return s ? { ...s.attrs } : {};
}
function p6(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: r } = t.edge(e);
    if (r.isTextblock && !r.hasRequiredAttrs())
      return r;
  }
  return null;
}
function f6(t, e) {
  for (let r = t.depth; r > 0; r -= 1) {
    const a = t.node(r);
    if (e(a))
      return {
        pos: r > 0 ? t.before(r) : 0,
        start: t.start(r),
        depth: r,
        node: a
      };
  }
}
function Md(t) {
  return (e) => f6(e.$from, t);
}
function h6(t, e) {
  const r = {
    from: 0,
    to: t.content.size
  };
  return Hh(t, r, e);
}
function Yh(t, e, r) {
  const a = [];
  return t === e ? r.resolve(t).marks().forEach((o) => {
    const n = r.resolve(t), i = Sd(n, o.type);
    i && a.push({
      mark: o,
      ...i
    });
  }) : r.nodesBetween(t, e, (o, n) => {
    !o || (o == null ? void 0 : o.nodeSize) === void 0 || a.push(...o.marks.map((i) => ({
      from: n,
      to: n + o.nodeSize,
      mark: i
    })));
  }), a;
}
function Gn(t, e, r) {
  return Object.fromEntries(Object.entries(r).filter(([a]) => {
    const o = t.find((n) => n.type === e && n.name === a);
    return o ? o.attribute.keepOnSplit : !1;
  }));
}
function m6(t, e, r = {}) {
  const { empty: a, ranges: o } = t.selection, n = e ? ea(e, t.schema) : null;
  if (a)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((c) => n ? n.name === c.type.name : !0).find((c) => Ei(c.attrs, r, { strict: !1 }));
  let i = 0;
  const s = [];
  if (o.forEach(({ $from: c, $to: u }) => {
    const p = c.pos, h = u.pos;
    t.doc.nodesBetween(p, h, (f, m) => {
      if (!f.isText && !f.marks.length)
        return;
      const v = Math.max(p, m), b = Math.min(h, m + f.nodeSize), k = b - v;
      i += k, s.push(...f.marks.map(($) => ({
        mark: $,
        from: v,
        to: b
      })));
    });
  }), i === 0)
    return !1;
  const l = s.filter((c) => n ? n.name === c.mark.type.name : !0).filter((c) => Ei(c.mark.attrs, r, { strict: !1 })).reduce((c, u) => c + u.to - u.from, 0), d = s.filter((c) => n ? c.mark.type !== n && c.mark.type.excludes(n) : !0).reduce((c, u) => c + u.to - u.from, 0);
  return (l > 0 ? l + d : l) >= i;
}
function xu(t, e) {
  const { nodeExtensions: r } = h2(e), a = r.find((i) => i.name === t);
  if (!a)
    return !1;
  const o = {
    name: a.name,
    options: a.options,
    storage: a.storage
  }, n = ct($t(a, "group", o));
  return typeof n != "string" ? !1 : n.split(" ").includes("list");
}
function Jh(t, { checkChildren: e = !0, ignoreWhitespace: r = !1 } = {}) {
  var a;
  if (r) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return /^\s*$/m.test((a = t.text) !== null && a !== void 0 ? a : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let o = !0;
    return t.content.forEach((n) => {
      o !== !1 && (Jh(n, { ignoreWhitespace: r, checkChildren: e }) || (o = !1));
    }), o;
  }
  return !1;
}
function g6(t) {
  return t instanceof xe;
}
function Xh(t, e, r) {
  const a = t.state.doc.content.size, o = Or(e, 0, a), n = Or(r, 0, a), i = t.coordsAtPos(o), s = t.coordsAtPos(n, -1), l = Math.min(i.top, s.top), d = Math.max(i.bottom, s.bottom), c = Math.min(i.left, s.left), u = Math.max(i.right, s.right), p = u - c, h = d - l, f = {
    top: l,
    bottom: d,
    left: c,
    right: u,
    width: p,
    height: h,
    x: c,
    y: l
  };
  return {
    ...f,
    toJSON: () => f
  };
}
function v6(t, e, r) {
  var a;
  const { selection: o } = e;
  let n = null;
  if (Cd(o) && (n = o.$cursor), n) {
    const s = (a = t.storedMarks) !== null && a !== void 0 ? a : n.marks();
    return !!r.isInSet(s) || !s.some((l) => l.type.excludes(r));
  }
  const { ranges: i } = o;
  return i.some(({ $from: s, $to: l }) => {
    let d = s.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(r) : !1;
    return t.doc.nodesBetween(s.pos, l.pos, (c, u, p) => {
      if (d)
        return !1;
      if (c.isInline) {
        const h = !p || p.type.allowsMarkType(r), f = !!r.isInSet(c.marks) || !c.marks.some((m) => m.type.excludes(r));
        d = h && f;
      }
      return !d;
    }), d;
  });
}
const b6 = (t, e = {}) => ({ tr: r, state: a, dispatch: o }) => {
  const { selection: n } = r, { empty: i, ranges: s } = n, l = ea(t, a.schema);
  if (o)
    if (i) {
      const d = u6(a, l);
      r.addStoredMark(l.create({
        ...d,
        ...e
      }));
    } else
      s.forEach((d) => {
        const c = d.$from.pos, u = d.$to.pos;
        a.doc.nodesBetween(c, u, (p, h) => {
          const f = Math.max(h, c), m = Math.min(h + p.nodeSize, u);
          p.marks.find((v) => v.type === l) ? p.marks.forEach((v) => {
            l === v.type && r.addMark(f, m, l.create({
              ...v.attrs,
              ...e
            }));
          }) : r.addMark(f, m, l.create(e));
        });
      });
  return v6(a, r, l);
}, w6 = (t, e) => ({ tr: r }) => (r.setMeta(t, e), !0), y6 = (t, e = {}) => ({ state: r, dispatch: a, chain: o }) => {
  const n = pt(t, r.schema);
  return n.isTextblock ? o().command(({ commands: i }) => wu(n, e)(r) ? !0 : i.clearNodes()).command(({ state: i }) => wu(n, e)(i, a)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, x6 = (t) => ({ tr: e, dispatch: r }) => {
  if (r) {
    const { doc: a } = e, o = Or(t, 0, a.content.size), n = xe.create(a, o);
    e.setSelection(n);
  }
  return !0;
}, k6 = (t) => ({ tr: e, dispatch: r }) => {
  if (r) {
    const { doc: a } = e, { from: o, to: n } = typeof t == "number" ? { from: t, to: t } : t, i = Ae.atStart(a).from, s = Ae.atEnd(a).to, l = Or(o, i, s), d = Or(n, i, s), c = Ae.create(a, l, d);
    e.setSelection(c);
  }
  return !0;
}, $6 = (t) => ({ state: e, dispatch: r }) => {
  const a = pt(t, e.schema);
  return p2(a)(e, r);
};
function ku(t, e) {
  const r = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (r) {
    const a = r.filter((o) => e == null ? void 0 : e.includes(o.type.name));
    t.tr.ensureMarks(a);
  }
}
const _6 = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: r, dispatch: a, editor: o }) => {
  const { selection: n, doc: i } = e, { $from: s, $to: l } = n, d = o.extensionManager.attributes, c = Gn(d, s.node().type.name, s.node().attrs);
  if (n instanceof xe && n.node.isBlock)
    return !s.parentOffset || !Za(i, s.pos) ? !1 : (a && (t && ku(r, o.extensionManager.splittableMarks), e.split(s.pos).scrollIntoView()), !0);
  if (!s.parent.isBlock)
    return !1;
  const u = l.parentOffset === l.parent.content.size, p = s.depth === 0 ? void 0 : p6(s.node(-1).contentMatchAt(s.indexAfter(-1)));
  let h = u && p ? [
    {
      type: p,
      attrs: c
    }
  ] : void 0, f = Za(e.doc, e.mapping.map(s.pos), 1, h);
  if (!h && !f && Za(e.doc, e.mapping.map(s.pos), 1, p ? [{ type: p }] : void 0) && (f = !0, h = p ? [
    {
      type: p,
      attrs: c
    }
  ] : void 0), a) {
    if (f && (n instanceof Ae && e.deleteSelection(), e.split(e.mapping.map(s.pos), 1, h), p && !u && !s.parentOffset && s.parent.type !== p)) {
      const m = e.mapping.map(s.before()), v = e.doc.resolve(m);
      s.node(-1).canReplaceWith(v.index(), v.index() + 1, p) && e.setNodeMarkup(e.mapping.map(s.before()), p);
    }
    t && ku(r, o.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return f;
}, S6 = (t, e = {}) => ({ tr: r, state: a, dispatch: o, editor: n }) => {
  var i;
  const s = pt(t, a.schema), { $from: l, $to: d } = a.selection, c = a.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(d))
    return !1;
  const u = l.node(-1);
  if (u.type !== s)
    return !1;
  const p = n.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== s || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (o) {
      let b = re.empty;
      const k = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let M = l.depth - k; M >= l.depth - 3; M -= 1)
        b = re.from(l.node(M).copy(b));
      const $ = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, g = {
        ...Gn(p, l.node().type.name, l.node().attrs),
        ...e
      }, w = ((i = s.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.createAndFill(g)) || void 0;
      b = b.append(re.from(s.createAndFill(null, w) || void 0));
      const x = l.before(l.depth - (k - 1));
      r.replace(x, l.after(-$), new me(b, 4 - k, 0));
      let S = -1;
      r.doc.nodesBetween(x, r.doc.content.size, (M, T) => {
        if (S > -1)
          return !1;
        M.isTextblock && M.content.size === 0 && (S = T + 1);
      }), S > -1 && r.setSelection(Ae.near(r.doc.resolve(S))), r.scrollIntoView();
    }
    return !0;
  }
  const h = d.pos === l.end() ? u.contentMatchAt(0).defaultType : null, f = {
    ...Gn(p, u.type.name, u.attrs),
    ...e
  }, m = {
    ...Gn(p, l.node().type.name, l.node().attrs),
    ...e
  };
  r.delete(l.pos, d.pos);
  const v = h ? [
    { type: s, attrs: f },
    { type: h, attrs: m }
  ] : [{ type: s, attrs: f }];
  if (!Za(r.doc, l.pos, 2))
    return !1;
  if (o) {
    const { selection: b, storedMarks: k } = a, { splittableMarks: $ } = n.extensionManager, g = k || b.$to.parentOffset && b.$from.marks();
    if (r.split(l.pos, 2, v).scrollIntoView(), !g || !o)
      return !0;
    const w = g.filter((x) => $.includes(x.type.name));
    r.ensureMarks(w);
  }
  return !0;
}, Vs = (t, e) => {
  const r = Md((n) => n.type === e)(t.selection);
  if (!r)
    return !0;
  const a = t.doc.resolve(Math.max(0, r.pos - 1)).before(r.depth);
  if (a === void 0)
    return !0;
  const o = t.doc.nodeAt(a);
  return r.node.type === (o == null ? void 0 : o.type) && za(t.doc, r.pos) && t.join(r.pos), !0;
}, Rs = (t, e) => {
  const r = Md((n) => n.type === e)(t.selection);
  if (!r)
    return !0;
  const a = t.doc.resolve(r.start).after(r.depth);
  if (a === void 0)
    return !0;
  const o = t.doc.nodeAt(a);
  return r.node.type === (o == null ? void 0 : o.type) && za(t.doc, a) && t.join(a), !0;
}, C6 = (t, e, r, a = {}) => ({ editor: o, tr: n, state: i, dispatch: s, chain: l, commands: d, can: c }) => {
  const { extensions: u, splittableMarks: p } = o.extensionManager, h = pt(t, i.schema), f = pt(e, i.schema), { selection: m, storedMarks: v } = i, { $from: b, $to: k } = m, $ = b.blockRange(k), g = v || m.$to.parentOffset && m.$from.marks();
  if (!$)
    return !1;
  const w = Md((x) => xu(x.type.name, u))(m);
  if ($.depth >= 1 && w && $.depth - w.depth <= 1) {
    if (w.node.type === h)
      return d.liftListItem(f);
    if (xu(w.node.type.name, u) && h.validContent(w.node.content) && s)
      return l().command(() => (n.setNodeMarkup(w.pos, h), !0)).command(() => Vs(n, h)).command(() => Rs(n, h)).run();
  }
  return !r || !g || !s ? l().command(() => c().wrapInList(h, a) ? !0 : d.clearNodes()).wrapInList(h, a).command(() => Vs(n, h)).command(() => Rs(n, h)).run() : l().command(() => {
    const x = c().wrapInList(h, a), S = g.filter((M) => p.includes(M.type.name));
    return n.ensureMarks(S), x ? !0 : d.clearNodes();
  }).wrapInList(h, a).command(() => Vs(n, h)).command(() => Rs(n, h)).run();
}, O6 = (t, e = {}, r = {}) => ({ state: a, commands: o }) => {
  const { extendEmptyMarkRange: n = !1 } = r, i = ea(t, a.schema);
  return m6(a, i, e) ? o.unsetMark(i, { extendEmptyMarkRange: n }) : o.setMark(i, e);
}, E6 = (t, e, r = {}) => ({ state: a, commands: o }) => {
  const n = pt(t, a.schema), i = pt(e, a.schema), s = Ed(a, n, r);
  let l;
  return a.selection.$anchor.sameParent(a.selection.$head) && (l = a.selection.$anchor.parent.attrs), s ? o.setNode(i, l) : o.setNode(n, { ...l, ...r });
}, M6 = (t, e = {}) => ({ state: r, commands: a }) => {
  const o = pt(t, r.schema);
  return Ed(r, o, e) ? a.lift(o) : a.wrapIn(o, e);
}, T6 = () => ({ state: t, dispatch: e }) => {
  const r = t.plugins;
  for (let a = 0; a < r.length; a += 1) {
    const o = r[a];
    let n;
    if (o.spec.isInputRules && (n = o.getState(t))) {
      if (e) {
        const i = t.tr, s = n.transform;
        for (let l = s.steps.length - 1; l >= 0; l -= 1)
          i.step(s.steps[l].invert(s.docs[l]));
        if (n.text) {
          const l = i.doc.resolve(n.from).marks();
          i.replaceWith(n.from, n.to, t.schema.text(n.text, l));
        } else
          i.delete(n.from, n.to);
      }
      return !0;
    }
  }
  return !1;
}, A6 = () => ({ tr: t, dispatch: e }) => {
  const { selection: r } = t, { empty: a, ranges: o } = r;
  return a || e && o.forEach((n) => {
    t.removeMark(n.$from.pos, n.$to.pos);
  }), !0;
}, I6 = (t, e = {}) => ({ tr: r, state: a, dispatch: o }) => {
  var n;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: s } = r, l = ea(t, a.schema), { $from: d, empty: c, ranges: u } = s;
  if (!o)
    return !0;
  if (c && i) {
    let { from: p, to: h } = s;
    const f = (n = d.marks().find((v) => v.type === l)) === null || n === void 0 ? void 0 : n.attrs, m = Sd(d, l, f);
    m && (p = m.from, h = m.to), r.removeMark(p, h, l);
  } else
    u.forEach((p) => {
      r.removeMark(p.$from.pos, p.$to.pos, l);
    });
  return r.removeStoredMark(l), !0;
}, z6 = (t, e = {}) => ({ tr: r, state: a, dispatch: o }) => {
  let n = null, i = null;
  const s = Kh(typeof t == "string" ? t : t.name, a.schema);
  return s ? (s === "node" && (n = pt(t, a.schema)), s === "mark" && (i = ea(t, a.schema)), o && r.selection.ranges.forEach((l) => {
    const d = l.$from.pos, c = l.$to.pos;
    a.doc.nodesBetween(d, c, (u, p) => {
      n && n === u.type && r.setNodeMarkup(p, void 0, {
        ...u.attrs,
        ...e
      }), i && u.marks.length && u.marks.forEach((h) => {
        if (i === h.type) {
          const f = Math.max(p, d), m = Math.min(p + u.nodeSize, c);
          r.addMark(f, m, i.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, N6 = (t, e = {}) => ({ state: r, dispatch: a }) => {
  const o = pt(t, r.schema);
  return i2(o, e)(r, a);
}, P6 = (t, e = {}) => ({ state: r, dispatch: a }) => {
  const o = pt(t, r.schema);
  return s2(o, e)(r, a);
};
var j6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: w2,
  clearContent: y2,
  clearNodes: x2,
  command: k2,
  createParagraphNear: $2,
  cut: _2,
  deleteCurrentNode: S2,
  deleteNode: C2,
  deleteRange: O2,
  deleteSelection: E2,
  enter: M2,
  exitCode: T2,
  extendMarkRange: I2,
  first: z2,
  focus: P2,
  forEach: j2,
  insertContent: V2,
  insertContentAt: L2,
  joinBackward: H2,
  joinDown: F2,
  joinForward: q2,
  joinItemBackward: U2,
  joinItemForward: W2,
  joinTextblockBackward: K2,
  joinTextblockForward: Y2,
  joinUp: B2,
  keyboardShortcut: X2,
  lift: G2,
  liftEmptyBlock: Z2,
  liftListItem: Q2,
  newlineInCode: e6,
  resetAttributes: t6,
  scrollIntoView: r6,
  selectAll: a6,
  selectNodeBackward: o6,
  selectNodeForward: n6,
  selectParentNode: i6,
  selectTextblockEnd: s6,
  selectTextblockStart: l6,
  setContent: c6,
  setMark: b6,
  setMeta: w6,
  setNode: y6,
  setNodeSelection: x6,
  setTextSelection: k6,
  sinkListItem: $6,
  splitBlock: _6,
  splitListItem: S6,
  toggleList: C6,
  toggleMark: O6,
  toggleNode: E6,
  toggleWrap: M6,
  undoInputRule: T6,
  unsetAllMarks: A6,
  unsetMark: I6,
  updateAttributes: z6,
  wrapIn: N6,
  wrapInList: P6
});
er.create({
  name: "commands",
  addCommands() {
    return {
      ...j6
    };
  }
});
er.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new sr({
        key: new Qt("tiptapDrop"),
        props: {
          handleDrop: (t, e, r, a) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: r,
              moved: a
            });
          }
        }
      })
    ];
  }
});
er.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new sr({
        key: new Qt("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
});
er.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new sr({
        key: new Qt("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, r) => {
              t.isFocused = !0;
              const a = t.state.tr.setMeta("focus", { event: r }).setMeta("addToHistory", !1);
              return e.dispatch(a), !1;
            },
            blur: (e, r) => {
              t.isFocused = !1;
              const a = t.state.tr.setMeta("blur", { event: r }).setMeta("addToHistory", !1);
              return e.dispatch(a), !1;
            }
          }
        }
      })
    ];
  }
});
er.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: n }) => [
      () => n.undoInputRule(),
      // maybe convert first text block node to default node
      () => n.command(({ tr: i }) => {
        const { selection: s, doc: l } = i, { empty: d, $anchor: c } = s, { pos: u, parent: p } = c, h = c.parent.isTextblock && u > 0 ? i.doc.resolve(u - 1) : c, f = h.parent.type.spec.isolating, m = c.pos - c.parentOffset, v = f && h.parent.childCount === 1 ? m === c.pos : Ve.atStart(l).from === u;
        return !d || !p.type.isTextblock || p.textContent.length || !v || v && c.parent.type.name === "paragraph" ? !1 : n.clearNodes();
      }),
      () => n.deleteSelection(),
      () => n.joinBackward(),
      () => n.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: n }) => [
      () => n.deleteSelection(),
      () => n.deleteCurrentNode(),
      () => n.joinForward(),
      () => n.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: n }) => [
        () => n.newlineInCode(),
        () => n.createParagraphNear(),
        () => n.liftEmptyBlock(),
        () => n.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, a = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Od() || Wh() ? o : a;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new sr({
        key: new Qt("clearDocument"),
        appendTransaction: (t, e, r) => {
          const a = t.some((h) => h.docChanged) && !e.doc.eq(r.doc), o = t.some((h) => h.getMeta("preventClearDocument"));
          if (!a || o)
            return;
          const { empty: n, from: i, to: s } = e.selection, l = Ve.atStart(e.doc).from, d = Ve.atEnd(e.doc).to;
          if (n || !(i === l && s === d) || !Jh(r.doc))
            return;
          const c = r.tr, u = Bh({
            state: r,
            transaction: c
          }), { commands: p } = new f2({
            editor: this.editor,
            state: u
          });
          if (p.clearNodes(), !!c.steps.length)
            return c;
        }
      })
    ];
  }
});
er.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new sr({
        key: new Qt("tiptapPaste"),
        props: {
          handlePaste: (t, e, r) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: r
            });
          }
        }
      })
    ];
  }
});
er.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new sr({
        key: new Qt("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
function Ti(t) {
  return new Fh({
    find: t.find,
    handler: ({ state: e, range: r, match: a }) => {
      const o = ct(t.getAttributes, void 0, a);
      if (o === !1 || o === null)
        return null;
      const { tr: n } = e, i = a[a.length - 1], s = a[0];
      if (i) {
        const l = s.search(/\S/), d = r.from + s.indexOf(i), c = d + i.length;
        if (Yh(r.from, r.to, e.doc).filter((p) => p.mark.type.excluded.find((h) => h === t.type && h !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        c < r.to && n.delete(c, r.to), d > r.from && n.delete(r.from + l, d);
        const u = r.from + l + i.length;
        n.addMark(r.from + l, u, t.type.create(o || {})), n.removeStoredMark(t.type);
      }
    }
  });
}
function V6(t) {
  return new Fh({
    find: t.find,
    handler: ({ state: e, range: r, match: a }) => {
      const o = e.doc.resolve(r.from), n = ct(t.getAttributes, void 0, a) || {};
      if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), t.type))
        return null;
      e.tr.delete(r.from, r.to).setBlockType(r.from, r.from, t.type, n);
    }
  });
}
class Ta {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ct($t(this, "addOptions", {
      name: this.name
    }))), this.storage = ct($t(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ta(e);
  }
  configure(e = {}) {
    const r = this.extend({
      ...this.config,
      addOptions: () => is(this.options, e)
    });
    return r.name = this.name, r.parent = this.parent, r;
  }
  extend(e = {}) {
    const r = new Ta(e);
    return r.parent = this, this.child = r, r.name = e.name ? e.name : r.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${r.name}".`), r.options = ct($t(r, "addOptions", {
      name: r.name
    })), r.storage = ct($t(r, "addStorage", {
      name: r.name,
      options: r.options
    })), r;
  }
}
function Ai(t) {
  return new b2({
    find: t.find,
    handler: ({ state: e, range: r, match: a, pasteEvent: o }) => {
      const n = ct(t.getAttributes, void 0, a, o);
      if (n === !1 || n === null)
        return null;
      const { tr: i } = e, s = a[a.length - 1], l = a[0];
      let d = r.to;
      if (s) {
        const c = l.search(/\S/), u = r.from + l.indexOf(s), p = u + s.length;
        if (Yh(r.from, r.to, e.doc).filter((h) => h.mark.type.excluded.find((f) => f === t.type && f !== h.mark.type)).filter((h) => h.to > u).length)
          return null;
        p < r.to && i.delete(p, r.to), u > r.from && i.delete(r.from + c, u), d = r.from + c + s.length, i.addMark(r.from + c, d, t.type.create(n || {})), i.removeStoredMark(t.type);
      }
    }
  });
}
function R6(t) {
  return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Mt = "top", Gt = "bottom", Zt = "right", Tt = "left", Td = "auto", xn = [Mt, Gt, Zt, Tt], no = "start", nn = "end", D6 = "clippingParents", Gh = "viewport", vo = "popper", L6 = "reference", $u = /* @__PURE__ */ xn.reduce(function(t, e) {
  return t.concat([e + "-" + no, e + "-" + nn]);
}, []), Zh = /* @__PURE__ */ [].concat(xn, [Td]).reduce(function(t, e) {
  return t.concat([e, e + "-" + no, e + "-" + nn]);
}, []), B6 = "beforeRead", F6 = "read", H6 = "afterRead", q6 = "beforeMain", U6 = "main", W6 = "afterMain", K6 = "beforeWrite", Y6 = "write", J6 = "afterWrite", X6 = [B6, F6, H6, q6, U6, W6, K6, Y6, J6];
function xr(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Dt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Aa(t) {
  var e = Dt(t).Element;
  return t instanceof e || t instanceof Element;
}
function Yt(t) {
  var e = Dt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Ad(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Dt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function G6(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var a = e.styles[r] || {}, o = e.attributes[r] || {}, n = e.elements[r];
    !Yt(n) || !xr(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? n.removeAttribute(i) : n.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Z6(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(a) {
      var o = e.elements[a], n = e.attributes[a] || {}, i = Object.keys(e.styles.hasOwnProperty(a) ? e.styles[a] : r[a]), s = i.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !Yt(o) || !xr(o) || (Object.assign(o.style, s), Object.keys(n).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Qh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: G6,
  effect: Z6,
  requires: ["computeStyles"]
};
function br(t) {
  return t.split("-")[0];
}
var _a = Math.max, Ii = Math.min, io = Math.round;
function Al() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function em() {
  return !/^((?!chrome|android).)*safari/i.test(Al());
}
function so(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var a = t.getBoundingClientRect(), o = 1, n = 1;
  e && Yt(t) && (o = t.offsetWidth > 0 && io(a.width) / t.offsetWidth || 1, n = t.offsetHeight > 0 && io(a.height) / t.offsetHeight || 1);
  var i = Aa(t) ? Dt(t) : window, s = i.visualViewport, l = !em() && r, d = (a.left + (l && s ? s.offsetLeft : 0)) / o, c = (a.top + (l && s ? s.offsetTop : 0)) / n, u = a.width / o, p = a.height / n;
  return {
    width: u,
    height: p,
    top: c,
    right: d + u,
    bottom: c + p,
    left: d,
    x: d,
    y: c
  };
}
function Id(t) {
  var e = so(t), r = t.offsetWidth, a = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - a) <= 1 && (a = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: a
  };
}
function tm(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Ad(r)) {
    var a = e;
    do {
      if (a && t.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Tr(t) {
  return Dt(t).getComputedStyle(t);
}
function Q6(t) {
  return ["table", "td", "th"].indexOf(xr(t)) >= 0;
}
function ta(t) {
  return ((Aa(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function ss(t) {
  return xr(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Ad(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ta(t)
  );
}
function _u(t) {
  return !Yt(t) || // https://github.com/popperjs/popper-core/issues/837
  Tr(t).position === "fixed" ? null : t.offsetParent;
}
function e7(t) {
  var e = /firefox/i.test(Al()), r = /Trident/i.test(Al());
  if (r && Yt(t)) {
    var a = Tr(t);
    if (a.position === "fixed")
      return null;
  }
  var o = ss(t);
  for (Ad(o) && (o = o.host); Yt(o) && ["html", "body"].indexOf(xr(o)) < 0; ) {
    var n = Tr(o);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || e && n.willChange === "filter" || e && n.filter && n.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function kn(t) {
  for (var e = Dt(t), r = _u(t); r && Q6(r) && Tr(r).position === "static"; )
    r = _u(r);
  return r && (xr(r) === "html" || xr(r) === "body" && Tr(r).position === "static") ? e : r || e7(t) || e;
}
function zd(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Lo(t, e, r) {
  return _a(t, Ii(e, r));
}
function t7(t, e, r) {
  var a = Lo(t, e, r);
  return a > r ? r : a;
}
function rm() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function am(t) {
  return Object.assign({}, rm(), t);
}
function om(t, e) {
  return e.reduce(function(r, a) {
    return r[a] = t, r;
  }, {});
}
var r7 = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, am(typeof t != "number" ? t : om(t, xn));
};
function a7(t) {
  var e, r = t.state, a = t.name, o = t.options, n = r.elements.arrow, i = r.modifiersData.popperOffsets, s = br(r.placement), l = zd(s), d = [Tt, Zt].indexOf(s) >= 0, c = d ? "height" : "width";
  if (!(!n || !i)) {
    var u = r7(o.padding, r), p = Id(n), h = l === "y" ? Mt : Tt, f = l === "y" ? Gt : Zt, m = r.rects.reference[c] + r.rects.reference[l] - i[l] - r.rects.popper[c], v = i[l] - r.rects.reference[l], b = kn(n), k = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, $ = m / 2 - v / 2, g = u[h], w = k - p[c] - u[f], x = k / 2 - p[c] / 2 + $, S = Lo(g, x, w), M = l;
    r.modifiersData[a] = (e = {}, e[M] = S, e.centerOffset = S - x, e);
  }
}
function o7(t) {
  var e = t.state, r = t.options, a = r.element, o = a === void 0 ? "[data-popper-arrow]" : a;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || tm(e.elements.popper, o) && (e.elements.arrow = o));
}
const n7 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: a7,
  effect: o7,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function lo(t) {
  return t.split("-")[1];
}
var i7 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function s7(t, e) {
  var r = t.x, a = t.y, o = e.devicePixelRatio || 1;
  return {
    x: io(r * o) / o || 0,
    y: io(a * o) / o || 0
  };
}
function Su(t) {
  var e, r = t.popper, a = t.popperRect, o = t.placement, n = t.variation, i = t.offsets, s = t.position, l = t.gpuAcceleration, d = t.adaptive, c = t.roundOffsets, u = t.isFixed, p = i.x, h = p === void 0 ? 0 : p, f = i.y, m = f === void 0 ? 0 : f, v = typeof c == "function" ? c({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = v.x, m = v.y;
  var b = i.hasOwnProperty("x"), k = i.hasOwnProperty("y"), $ = Tt, g = Mt, w = window;
  if (d) {
    var x = kn(r), S = "clientHeight", M = "clientWidth";
    if (x === Dt(r) && (x = ta(r), Tr(x).position !== "static" && s === "absolute" && (S = "scrollHeight", M = "scrollWidth")), x = x, o === Mt || (o === Tt || o === Zt) && n === nn) {
      g = Gt;
      var T = u && x === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[S]
      );
      m -= T - a.height, m *= l ? 1 : -1;
    }
    if (o === Tt || (o === Mt || o === Gt) && n === nn) {
      $ = Zt;
      var I = u && x === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[M]
      );
      h -= I - a.width, h *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, d && i7), V = c === !0 ? s7({
    x: h,
    y: m
  }, Dt(r)) : {
    x: h,
    y: m
  };
  if (h = V.x, m = V.y, l) {
    var ae;
    return Object.assign({}, L, (ae = {}, ae[g] = k ? "0" : "", ae[$] = b ? "0" : "", ae.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", ae));
  }
  return Object.assign({}, L, (e = {}, e[g] = k ? m + "px" : "", e[$] = b ? h + "px" : "", e.transform = "", e));
}
function l7(t) {
  var e = t.state, r = t.options, a = r.gpuAcceleration, o = a === void 0 ? !0 : a, n = r.adaptive, i = n === void 0 ? !0 : n, s = r.roundOffsets, l = s === void 0 ? !0 : s, d = {
    placement: br(e.placement),
    variation: lo(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Su(Object.assign({}, d, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Su(Object.assign({}, d, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const d7 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: l7,
  data: {}
};
var Rn = {
  passive: !0
};
function c7(t) {
  var e = t.state, r = t.instance, a = t.options, o = a.scroll, n = o === void 0 ? !0 : o, i = a.resize, s = i === void 0 ? !0 : i, l = Dt(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return n && d.forEach(function(c) {
    c.addEventListener("scroll", r.update, Rn);
  }), s && l.addEventListener("resize", r.update, Rn), function() {
    n && d.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Rn);
    }), s && l.removeEventListener("resize", r.update, Rn);
  };
}
const u7 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: c7,
  data: {}
};
var p7 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zn(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return p7[e];
  });
}
var f7 = {
  start: "end",
  end: "start"
};
function Cu(t) {
  return t.replace(/start|end/g, function(e) {
    return f7[e];
  });
}
function Nd(t) {
  var e = Dt(t), r = e.pageXOffset, a = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Pd(t) {
  return so(ta(t)).left + Nd(t).scrollLeft;
}
function h7(t, e) {
  var r = Dt(t), a = ta(t), o = r.visualViewport, n = a.clientWidth, i = a.clientHeight, s = 0, l = 0;
  if (o) {
    n = o.width, i = o.height;
    var d = em();
    (d || !d && e === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: n,
    height: i,
    x: s + Pd(t),
    y: l
  };
}
function m7(t) {
  var e, r = ta(t), a = Nd(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, n = _a(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = _a(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -a.scrollLeft + Pd(t), l = -a.scrollTop;
  return Tr(o || r).direction === "rtl" && (s += _a(r.clientWidth, o ? o.clientWidth : 0) - n), {
    width: n,
    height: i,
    x: s,
    y: l
  };
}
function jd(t) {
  var e = Tr(t), r = e.overflow, a = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + a);
}
function nm(t) {
  return ["html", "body", "#document"].indexOf(xr(t)) >= 0 ? t.ownerDocument.body : Yt(t) && jd(t) ? t : nm(ss(t));
}
function Bo(t, e) {
  var r;
  e === void 0 && (e = []);
  var a = nm(t), o = a === ((r = t.ownerDocument) == null ? void 0 : r.body), n = Dt(a), i = o ? [n].concat(n.visualViewport || [], jd(a) ? a : []) : a, s = e.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Bo(ss(i)))
  );
}
function Il(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function g7(t, e) {
  var r = so(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ou(t, e, r) {
  return e === Gh ? Il(h7(t, r)) : Aa(e) ? g7(e, r) : Il(m7(ta(t)));
}
function v7(t) {
  var e = Bo(ss(t)), r = ["absolute", "fixed"].indexOf(Tr(t).position) >= 0, a = r && Yt(t) ? kn(t) : t;
  return Aa(a) ? e.filter(function(o) {
    return Aa(o) && tm(o, a) && xr(o) !== "body";
  }) : [];
}
function b7(t, e, r, a) {
  var o = e === "clippingParents" ? v7(t) : [].concat(e), n = [].concat(o, [r]), i = n[0], s = n.reduce(function(l, d) {
    var c = Ou(t, d, a);
    return l.top = _a(c.top, l.top), l.right = Ii(c.right, l.right), l.bottom = Ii(c.bottom, l.bottom), l.left = _a(c.left, l.left), l;
  }, Ou(t, i, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function im(t) {
  var e = t.reference, r = t.element, a = t.placement, o = a ? br(a) : null, n = a ? lo(a) : null, i = e.x + e.width / 2 - r.width / 2, s = e.y + e.height / 2 - r.height / 2, l;
  switch (o) {
    case Mt:
      l = {
        x: i,
        y: e.y - r.height
      };
      break;
    case Gt:
      l = {
        x: i,
        y: e.y + e.height
      };
      break;
    case Zt:
      l = {
        x: e.x + e.width,
        y: s
      };
      break;
    case Tt:
      l = {
        x: e.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var d = o ? zd(o) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (n) {
      case no:
        l[d] = l[d] - (e[c] / 2 - r[c] / 2);
        break;
      case nn:
        l[d] = l[d] + (e[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function sn(t, e) {
  e === void 0 && (e = {});
  var r = e, a = r.placement, o = a === void 0 ? t.placement : a, n = r.strategy, i = n === void 0 ? t.strategy : n, s = r.boundary, l = s === void 0 ? D6 : s, d = r.rootBoundary, c = d === void 0 ? Gh : d, u = r.elementContext, p = u === void 0 ? vo : u, h = r.altBoundary, f = h === void 0 ? !1 : h, m = r.padding, v = m === void 0 ? 0 : m, b = am(typeof v != "number" ? v : om(v, xn)), k = p === vo ? L6 : vo, $ = t.rects.popper, g = t.elements[f ? k : p], w = b7(Aa(g) ? g : g.contextElement || ta(t.elements.popper), l, c, i), x = so(t.elements.reference), S = im({
    reference: x,
    element: $,
    strategy: "absolute",
    placement: o
  }), M = Il(Object.assign({}, $, S)), T = p === vo ? M : x, I = {
    top: w.top - T.top + b.top,
    bottom: T.bottom - w.bottom + b.bottom,
    left: w.left - T.left + b.left,
    right: T.right - w.right + b.right
  }, L = t.modifiersData.offset;
  if (p === vo && L) {
    var V = L[o];
    Object.keys(I).forEach(function(ae) {
      var we = [Zt, Gt].indexOf(ae) >= 0 ? 1 : -1, Ce = [Mt, Gt].indexOf(ae) >= 0 ? "y" : "x";
      I[ae] += V[Ce] * we;
    });
  }
  return I;
}
function w7(t, e) {
  e === void 0 && (e = {});
  var r = e, a = r.placement, o = r.boundary, n = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? Zh : l, c = lo(a), u = c ? s ? $u : $u.filter(function(f) {
    return lo(f) === c;
  }) : xn, p = u.filter(function(f) {
    return d.indexOf(f) >= 0;
  });
  p.length === 0 && (p = u);
  var h = p.reduce(function(f, m) {
    return f[m] = sn(t, {
      placement: m,
      boundary: o,
      rootBoundary: n,
      padding: i
    })[br(m)], f;
  }, {});
  return Object.keys(h).sort(function(f, m) {
    return h[f] - h[m];
  });
}
function y7(t) {
  if (br(t) === Td)
    return [];
  var e = Zn(t);
  return [Cu(t), e, Cu(e)];
}
function x7(t) {
  var e = t.state, r = t.options, a = t.name;
  if (!e.modifiersData[a]._skip) {
    for (var o = r.mainAxis, n = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, d = r.padding, c = r.boundary, u = r.rootBoundary, p = r.altBoundary, h = r.flipVariations, f = h === void 0 ? !0 : h, m = r.allowedAutoPlacements, v = e.options.placement, b = br(v), k = b === v, $ = l || (k || !f ? [Zn(v)] : y7(v)), g = [v].concat($).reduce(function(R, N) {
      return R.concat(br(N) === Td ? w7(e, {
        placement: N,
        boundary: c,
        rootBoundary: u,
        padding: d,
        flipVariations: f,
        allowedAutoPlacements: m
      }) : N);
    }, []), w = e.rects.reference, x = e.rects.popper, S = /* @__PURE__ */ new Map(), M = !0, T = g[0], I = 0; I < g.length; I++) {
      var L = g[I], V = br(L), ae = lo(L) === no, we = [Mt, Gt].indexOf(V) >= 0, Ce = we ? "width" : "height", q = sn(e, {
        placement: L,
        boundary: c,
        rootBoundary: u,
        altBoundary: p,
        padding: d
      }), oe = we ? ae ? Zt : Tt : ae ? Gt : Mt;
      w[Ce] > x[Ce] && (oe = Zn(oe));
      var ne = Zn(oe), Se = [];
      if (n && Se.push(q[V] <= 0), s && Se.push(q[oe] <= 0, q[ne] <= 0), Se.every(function(R) {
        return R;
      })) {
        T = L, M = !1;
        break;
      }
      S.set(L, Se);
    }
    if (M)
      for (var ye = f ? 3 : 1, ze = function(R) {
        var N = g.find(function(he) {
          var ue = S.get(he);
          if (ue)
            return ue.slice(0, R).every(function(He) {
              return He;
            });
        });
        if (N)
          return T = N, "break";
      }, Me = ye; Me > 0; Me--) {
        var O = ze(Me);
        if (O === "break") break;
      }
    e.placement !== T && (e.modifiersData[a]._skip = !0, e.placement = T, e.reset = !0);
  }
}
const k7 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: x7,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Eu(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function Mu(t) {
  return [Mt, Zt, Gt, Tt].some(function(e) {
    return t[e] >= 0;
  });
}
function $7(t) {
  var e = t.state, r = t.name, a = e.rects.reference, o = e.rects.popper, n = e.modifiersData.preventOverflow, i = sn(e, {
    elementContext: "reference"
  }), s = sn(e, {
    altBoundary: !0
  }), l = Eu(i, a), d = Eu(s, o, n), c = Mu(l), u = Mu(d);
  e.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": u
  });
}
const _7 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: $7
};
function S7(t, e, r) {
  var a = br(t), o = [Tt, Mt].indexOf(a) >= 0 ? -1 : 1, n = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, i = n[0], s = n[1];
  return i = i || 0, s = (s || 0) * o, [Tt, Zt].indexOf(a) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function C7(t) {
  var e = t.state, r = t.options, a = t.name, o = r.offset, n = o === void 0 ? [0, 0] : o, i = Zh.reduce(function(c, u) {
    return c[u] = S7(u, e.rects, n), c;
  }, {}), s = i[e.placement], l = s.x, d = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += d), e.modifiersData[a] = i;
}
const O7 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: C7
};
function E7(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = im({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const M7 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: E7,
  data: {}
};
function T7(t) {
  return t === "x" ? "y" : "x";
}
function A7(t) {
  var e = t.state, r = t.options, a = t.name, o = r.mainAxis, n = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, d = r.rootBoundary, c = r.altBoundary, u = r.padding, p = r.tether, h = p === void 0 ? !0 : p, f = r.tetherOffset, m = f === void 0 ? 0 : f, v = sn(e, {
    boundary: l,
    rootBoundary: d,
    padding: u,
    altBoundary: c
  }), b = br(e.placement), k = lo(e.placement), $ = !k, g = zd(b), w = T7(g), x = e.modifiersData.popperOffsets, S = e.rects.reference, M = e.rects.popper, T = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, I = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), L = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (x) {
    if (n) {
      var ae, we = g === "y" ? Mt : Tt, Ce = g === "y" ? Gt : Zt, q = g === "y" ? "height" : "width", oe = x[g], ne = oe + v[we], Se = oe - v[Ce], ye = h ? -M[q] / 2 : 0, ze = k === no ? S[q] : M[q], Me = k === no ? -M[q] : -S[q], O = e.elements.arrow, R = h && O ? Id(O) : {
        width: 0,
        height: 0
      }, N = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : rm(), he = N[we], ue = N[Ce], He = Lo(0, S[q], R[q]), Be = $ ? S[q] / 2 - ye - He - he - I.mainAxis : ze - He - he - I.mainAxis, Ge = $ ? -S[q] / 2 + ye + He + ue + I.mainAxis : Me + He + ue + I.mainAxis, Lt = e.elements.arrow && kn(e.elements.arrow), aa = Lt ? g === "y" ? Lt.clientTop || 0 : Lt.clientLeft || 0 : 0, _ = (ae = L == null ? void 0 : L[g]) != null ? ae : 0, C = oe + Be - _ - aa, P = oe + Ge - _, K = Lo(h ? Ii(ne, C) : ne, oe, h ? _a(Se, P) : Se);
      x[g] = K, V[g] = K - oe;
    }
    if (s) {
      var H, U = g === "x" ? Mt : Tt, Q = g === "x" ? Gt : Zt, Z = x[w], X = w === "y" ? "height" : "width", Y = Z + v[U], fe = Z - v[Q], te = [Mt, Tt].indexOf(b) !== -1, de = (H = L == null ? void 0 : L[w]) != null ? H : 0, ve = te ? Y : Z - S[X] - M[X] - de + I.altAxis, Ee = te ? Z + S[X] + M[X] - de - I.altAxis : fe, Re = h && te ? t7(ve, Z, Ee) : Lo(h ? ve : Y, Z, h ? Ee : fe);
      x[w] = Re, V[w] = Re - Z;
    }
    e.modifiersData[a] = V;
  }
}
const I7 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: A7,
  requiresIfExists: ["offset"]
};
function z7(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function N7(t) {
  return t === Dt(t) || !Yt(t) ? Nd(t) : z7(t);
}
function P7(t) {
  var e = t.getBoundingClientRect(), r = io(e.width) / t.offsetWidth || 1, a = io(e.height) / t.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function j7(t, e, r) {
  r === void 0 && (r = !1);
  var a = Yt(e), o = Yt(e) && P7(e), n = ta(e), i = so(t, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((xr(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  jd(n)) && (s = N7(e)), Yt(e) ? (l = so(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : n && (l.x = Pd(n))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function V7(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  t.forEach(function(n) {
    e.set(n.name, n);
  });
  function o(n) {
    r.add(n.name);
    var i = [].concat(n.requires || [], n.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = e.get(s);
        l && o(l);
      }
    }), a.push(n);
  }
  return t.forEach(function(n) {
    r.has(n.name) || o(n);
  }), a;
}
function R7(t) {
  var e = V7(t);
  return X6.reduce(function(r, a) {
    return r.concat(e.filter(function(o) {
      return o.phase === a;
    }));
  }, []);
}
function D7(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function L7(t) {
  var e = t.reduce(function(r, a) {
    var o = r[a.name];
    return r[a.name] = o ? Object.assign({}, o, a, {
      options: Object.assign({}, o.options, a.options),
      data: Object.assign({}, o.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var Tu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Au() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function B7(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, a = r === void 0 ? [] : r, o = e.defaultOptions, n = o === void 0 ? Tu : o;
  return function(i, s, l) {
    l === void 0 && (l = n);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Tu, n),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], u = !1, p = {
      state: d,
      setOptions: function(m) {
        var v = typeof m == "function" ? m(d.options) : m;
        f(), d.options = Object.assign({}, n, d.options, v), d.scrollParents = {
          reference: Aa(i) ? Bo(i) : i.contextElement ? Bo(i.contextElement) : [],
          popper: Bo(s)
        };
        var b = R7(L7([].concat(a, d.options.modifiers)));
        return d.orderedModifiers = b.filter(function(k) {
          return k.enabled;
        }), h(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!u) {
          var m = d.elements, v = m.reference, b = m.popper;
          if (Au(v, b)) {
            d.rects = {
              reference: j7(v, kn(b), d.options.strategy === "fixed"),
              popper: Id(b)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
              return d.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var k = 0; k < d.orderedModifiers.length; k++) {
              if (d.reset === !0) {
                d.reset = !1, k = -1;
                continue;
              }
              var $ = d.orderedModifiers[k], g = $.fn, w = $.options, x = w === void 0 ? {} : w, S = $.name;
              typeof g == "function" && (d = g({
                state: d,
                options: x,
                name: S,
                instance: p
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: D7(function() {
        return new Promise(function(m) {
          p.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        f(), u = !0;
      }
    };
    if (!Au(i, s))
      return p;
    p.setOptions(l).then(function(m) {
      !u && l.onFirstUpdate && l.onFirstUpdate(m);
    });
    function h() {
      d.orderedModifiers.forEach(function(m) {
        var v = m.name, b = m.options, k = b === void 0 ? {} : b, $ = m.effect;
        if (typeof $ == "function") {
          var g = $({
            state: d,
            name: v,
            instance: p,
            options: k
          }), w = function() {
          };
          c.push(g || w);
        }
      });
    }
    function f() {
      c.forEach(function(m) {
        return m();
      }), c = [];
    }
    return p;
  };
}
var F7 = [u7, M7, d7, Qh, O7, k7, I7, n7, _7], H7 = /* @__PURE__ */ B7({
  defaultModifiers: F7
}), q7 = "tippy-box", sm = "tippy-content", U7 = "tippy-backdrop", lm = "tippy-arrow", dm = "tippy-svg-arrow", ca = {
  passive: !0,
  capture: !0
}, cm = function() {
  return document.body;
};
function Ds(t, e, r) {
  if (Array.isArray(t)) {
    var a = t[e];
    return a ?? (Array.isArray(r) ? r[e] : r);
  }
  return t;
}
function Vd(t, e) {
  var r = {}.toString.call(t);
  return r.indexOf("[object") === 0 && r.indexOf(e + "]") > -1;
}
function um(t, e) {
  return typeof t == "function" ? t.apply(void 0, e) : t;
}
function Iu(t, e) {
  if (e === 0)
    return t;
  var r;
  return function(a) {
    clearTimeout(r), r = setTimeout(function() {
      t(a);
    }, e);
  };
}
function W7(t) {
  return t.split(/\s+/).filter(Boolean);
}
function qa(t) {
  return [].concat(t);
}
function zu(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function K7(t) {
  return t.filter(function(e, r) {
    return t.indexOf(e) === r;
  });
}
function Y7(t) {
  return t.split("-")[0];
}
function zi(t) {
  return [].slice.call(t);
}
function Nu(t) {
  return Object.keys(t).reduce(function(e, r) {
    return t[r] !== void 0 && (e[r] = t[r]), e;
  }, {});
}
function Fo() {
  return document.createElement("div");
}
function ls(t) {
  return ["Element", "Fragment"].some(function(e) {
    return Vd(t, e);
  });
}
function J7(t) {
  return Vd(t, "NodeList");
}
function X7(t) {
  return Vd(t, "MouseEvent");
}
function G7(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
function Z7(t) {
  return ls(t) ? [t] : J7(t) ? zi(t) : Array.isArray(t) ? t : zi(document.querySelectorAll(t));
}
function Ls(t, e) {
  t.forEach(function(r) {
    r && (r.style.transitionDuration = e + "ms");
  });
}
function Pu(t, e) {
  t.forEach(function(r) {
    r && r.setAttribute("data-state", e);
  });
}
function Q7(t) {
  var e, r = qa(t), a = r[0];
  return a != null && (e = a.ownerDocument) != null && e.body ? a.ownerDocument : document;
}
function e4(t, e) {
  var r = e.clientX, a = e.clientY;
  return t.every(function(o) {
    var n = o.popperRect, i = o.popperState, s = o.props, l = s.interactiveBorder, d = Y7(i.placement), c = i.modifiersData.offset;
    if (!c)
      return !0;
    var u = d === "bottom" ? c.top.y : 0, p = d === "top" ? c.bottom.y : 0, h = d === "right" ? c.left.x : 0, f = d === "left" ? c.right.x : 0, m = n.top - a + u > l, v = a - n.bottom - p > l, b = n.left - r + h > l, k = r - n.right - f > l;
    return m || v || b || k;
  });
}
function Bs(t, e, r) {
  var a = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    t[a](o, r);
  });
}
function ju(t, e) {
  for (var r = e; r; ) {
    var a;
    if (t.contains(r))
      return !0;
    r = r.getRootNode == null || (a = r.getRootNode()) == null ? void 0 : a.host;
  }
  return !1;
}
var hr = {
  isTouch: !1
}, Vu = 0;
function t4() {
  hr.isTouch || (hr.isTouch = !0, window.performance && document.addEventListener("mousemove", pm));
}
function pm() {
  var t = performance.now();
  t - Vu < 20 && (hr.isTouch = !1, document.removeEventListener("mousemove", pm)), Vu = t;
}
function r4() {
  var t = document.activeElement;
  if (G7(t)) {
    var e = t._tippy;
    t.blur && !e.state.isVisible && t.blur();
  }
}
function a4() {
  document.addEventListener("touchstart", t4, ca), window.addEventListener("blur", r4);
}
var o4 = typeof window < "u" && typeof document < "u", n4 = o4 ? (
  // @ts-ignore
  !!window.msCrypto
) : !1, i4 = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, s4 = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, rr = Object.assign({
  appendTo: cm,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, i4, s4), l4 = Object.keys(rr), d4 = function(t) {
  var e = Object.keys(t);
  e.forEach(function(r) {
    rr[r] = t[r];
  });
};
function fm(t) {
  var e = t.plugins || [], r = e.reduce(function(a, o) {
    var n = o.name, i = o.defaultValue;
    if (n) {
      var s;
      a[n] = t[n] !== void 0 ? t[n] : (s = rr[n]) != null ? s : i;
    }
    return a;
  }, {});
  return Object.assign({}, t, r);
}
function c4(t, e) {
  var r = e ? Object.keys(fm(Object.assign({}, rr, {
    plugins: e
  }))) : l4, a = r.reduce(function(o, n) {
    var i = (t.getAttribute("data-tippy-" + n) || "").trim();
    if (!i)
      return o;
    if (n === "content")
      o[n] = i;
    else
      try {
        o[n] = JSON.parse(i);
      } catch {
        o[n] = i;
      }
    return o;
  }, {});
  return a;
}
function Ru(t, e) {
  var r = Object.assign({}, e, {
    content: um(e.content, [t])
  }, e.ignoreAttributes ? {} : c4(t, e.plugins));
  return r.aria = Object.assign({}, rr.aria, r.aria), r.aria = {
    expanded: r.aria.expanded === "auto" ? e.interactive : r.aria.expanded,
    content: r.aria.content === "auto" ? e.interactive ? null : "describedby" : r.aria.content
  }, r;
}
var u4 = function() {
  return "innerHTML";
};
function zl(t, e) {
  t[u4()] = e;
}
function Du(t) {
  var e = Fo();
  return t === !0 ? e.className = lm : (e.className = dm, ls(t) ? e.appendChild(t) : zl(e, t)), e;
}
function Lu(t, e) {
  ls(e.content) ? (zl(t, ""), t.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? zl(t, e.content) : t.textContent = e.content);
}
function Nl(t) {
  var e = t.firstElementChild, r = zi(e.children);
  return {
    box: e,
    content: r.find(function(a) {
      return a.classList.contains(sm);
    }),
    arrow: r.find(function(a) {
      return a.classList.contains(lm) || a.classList.contains(dm);
    }),
    backdrop: r.find(function(a) {
      return a.classList.contains(U7);
    })
  };
}
function hm(t) {
  var e = Fo(), r = Fo();
  r.className = q7, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1");
  var a = Fo();
  a.className = sm, a.setAttribute("data-state", "hidden"), Lu(a, t.props), e.appendChild(r), r.appendChild(a), o(t.props, t.props);
  function o(n, i) {
    var s = Nl(e), l = s.box, d = s.content, c = s.arrow;
    i.theme ? l.setAttribute("data-theme", i.theme) : l.removeAttribute("data-theme"), typeof i.animation == "string" ? l.setAttribute("data-animation", i.animation) : l.removeAttribute("data-animation"), i.inertia ? l.setAttribute("data-inertia", "") : l.removeAttribute("data-inertia"), l.style.maxWidth = typeof i.maxWidth == "number" ? i.maxWidth + "px" : i.maxWidth, i.role ? l.setAttribute("role", i.role) : l.removeAttribute("role"), (n.content !== i.content || n.allowHTML !== i.allowHTML) && Lu(d, t.props), i.arrow ? c ? n.arrow !== i.arrow && (l.removeChild(c), l.appendChild(Du(i.arrow))) : l.appendChild(Du(i.arrow)) : c && l.removeChild(c);
  }
  return {
    popper: e,
    onUpdate: o
  };
}
hm.$$tippy = !0;
var p4 = 1, Dn = [], Fs = [];
function f4(t, e) {
  var r = Ru(t, Object.assign({}, rr, fm(Nu(e)))), a, o, n, i = !1, s = !1, l = !1, d = !1, c, u, p, h = [], f = Iu(C, r.interactiveDebounce), m, v = p4++, b = null, k = K7(r.plugins), $ = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, g = {
    // properties
    id: v,
    reference: t,
    popper: Fo(),
    popperInstance: b,
    props: r,
    state: $,
    plugins: k,
    // methods
    clearDelayTimeouts: ve,
    setProps: Ee,
    setContent: Re,
    show: De,
    hide: ht,
    hideWithInteractivity: tt,
    enable: te,
    disable: de,
    unmount: It,
    destroy: mt
  };
  if (!r.render)
    return g;
  var w = r.render(g), x = w.popper, S = w.onUpdate;
  x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + g.id, g.popper = x, t._tippy = g, x._tippy = g;
  var M = k.map(function(j) {
    return j.fn(g);
  }), T = t.hasAttribute("aria-expanded");
  return Lt(), ye(), oe(), ne("onCreate", [g]), r.showOnCreate && Y(), x.addEventListener("mouseenter", function() {
    g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
  }), x.addEventListener("mouseleave", function() {
    g.props.interactive && g.props.trigger.indexOf("mouseenter") >= 0 && we().addEventListener("mousemove", f);
  }), g;
  function I() {
    var j = g.props.touch;
    return Array.isArray(j) ? j : [j, 0];
  }
  function L() {
    return I()[0] === "hold";
  }
  function V() {
    var j;
    return !!((j = g.props.render) != null && j.$$tippy);
  }
  function ae() {
    return m || t;
  }
  function we() {
    var j = ae().parentNode;
    return j ? Q7(j) : document;
  }
  function Ce() {
    return Nl(x);
  }
  function q(j) {
    return g.state.isMounted && !g.state.isVisible || hr.isTouch || c && c.type === "focus" ? 0 : Ds(g.props.delay, j ? 0 : 1, rr.delay);
  }
  function oe(j) {
    j === void 0 && (j = !1), x.style.pointerEvents = g.props.interactive && !j ? "" : "none", x.style.zIndex = "" + g.props.zIndex;
  }
  function ne(j, se, ce) {
    if (ce === void 0 && (ce = !0), M.forEach(function(Te) {
      Te[j] && Te[j].apply(Te, se);
    }), ce) {
      var Oe;
      (Oe = g.props)[j].apply(Oe, se);
    }
  }
  function Se() {
    var j = g.props.aria;
    if (j.content) {
      var se = "aria-" + j.content, ce = x.id, Oe = qa(g.props.triggerTarget || t);
      Oe.forEach(function(Te) {
        var gt = Te.getAttribute(se);
        if (g.state.isVisible)
          Te.setAttribute(se, gt ? gt + " " + ce : ce);
        else {
          var Bt = gt && gt.replace(ce, "").trim();
          Bt ? Te.setAttribute(se, Bt) : Te.removeAttribute(se);
        }
      });
    }
  }
  function ye() {
    if (!(T || !g.props.aria.expanded)) {
      var j = qa(g.props.triggerTarget || t);
      j.forEach(function(se) {
        g.props.interactive ? se.setAttribute("aria-expanded", g.state.isVisible && se === ae() ? "true" : "false") : se.removeAttribute("aria-expanded");
      });
    }
  }
  function ze() {
    we().removeEventListener("mousemove", f), Dn = Dn.filter(function(j) {
      return j !== f;
    });
  }
  function Me(j) {
    if (!(hr.isTouch && (l || j.type === "mousedown"))) {
      var se = j.composedPath && j.composedPath()[0] || j.target;
      if (!(g.props.interactive && ju(x, se))) {
        if (qa(g.props.triggerTarget || t).some(function(ce) {
          return ju(ce, se);
        })) {
          if (hr.isTouch || g.state.isVisible && g.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ne("onClickOutside", [g, j]);
        g.props.hideOnClick === !0 && (g.clearDelayTimeouts(), g.hide(), s = !0, setTimeout(function() {
          s = !1;
        }), g.state.isMounted || he());
      }
    }
  }
  function O() {
    l = !0;
  }
  function R() {
    l = !1;
  }
  function N() {
    var j = we();
    j.addEventListener("mousedown", Me, !0), j.addEventListener("touchend", Me, ca), j.addEventListener("touchstart", R, ca), j.addEventListener("touchmove", O, ca);
  }
  function he() {
    var j = we();
    j.removeEventListener("mousedown", Me, !0), j.removeEventListener("touchend", Me, ca), j.removeEventListener("touchstart", R, ca), j.removeEventListener("touchmove", O, ca);
  }
  function ue(j, se) {
    Be(j, function() {
      !g.state.isVisible && x.parentNode && x.parentNode.contains(x) && se();
    });
  }
  function He(j, se) {
    Be(j, se);
  }
  function Be(j, se) {
    var ce = Ce().box;
    function Oe(Te) {
      Te.target === ce && (Bs(ce, "remove", Oe), se());
    }
    if (j === 0)
      return se();
    Bs(ce, "remove", u), Bs(ce, "add", Oe), u = Oe;
  }
  function Ge(j, se, ce) {
    ce === void 0 && (ce = !1);
    var Oe = qa(g.props.triggerTarget || t);
    Oe.forEach(function(Te) {
      Te.addEventListener(j, se, ce), h.push({
        node: Te,
        eventType: j,
        handler: se,
        options: ce
      });
    });
  }
  function Lt() {
    L() && (Ge("touchstart", _, {
      passive: !0
    }), Ge("touchend", P, {
      passive: !0
    })), W7(g.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (Ge(j, _), j) {
          case "mouseenter":
            Ge("mouseleave", P);
            break;
          case "focus":
            Ge(n4 ? "focusout" : "blur", K);
            break;
          case "focusin":
            Ge("focusout", K);
            break;
        }
    });
  }
  function aa() {
    h.forEach(function(j) {
      var se = j.node, ce = j.eventType, Oe = j.handler, Te = j.options;
      se.removeEventListener(ce, Oe, Te);
    }), h = [];
  }
  function _(j) {
    var se, ce = !1;
    if (!(!g.state.isEnabled || H(j) || s)) {
      var Oe = ((se = c) == null ? void 0 : se.type) === "focus";
      c = j, m = j.currentTarget, ye(), !g.state.isVisible && X7(j) && Dn.forEach(function(Te) {
        return Te(j);
      }), j.type === "click" && (g.props.trigger.indexOf("mouseenter") < 0 || i) && g.props.hideOnClick !== !1 && g.state.isVisible ? ce = !0 : Y(j), j.type === "click" && (i = !ce), ce && !Oe && fe(j);
    }
  }
  function C(j) {
    var se = j.target, ce = ae().contains(se) || x.contains(se);
    if (!(j.type === "mousemove" && ce)) {
      var Oe = X().concat(x).map(function(Te) {
        var gt, Bt = Te._tippy, ja = (gt = Bt.popperInstance) == null ? void 0 : gt.state;
        return ja ? {
          popperRect: Te.getBoundingClientRect(),
          popperState: ja,
          props: r
        } : null;
      }).filter(Boolean);
      e4(Oe, j) && (ze(), fe(j));
    }
  }
  function P(j) {
    var se = H(j) || g.props.trigger.indexOf("click") >= 0 && i;
    if (!se) {
      if (g.props.interactive) {
        g.hideWithInteractivity(j);
        return;
      }
      fe(j);
    }
  }
  function K(j) {
    g.props.trigger.indexOf("focusin") < 0 && j.target !== ae() || g.props.interactive && j.relatedTarget && x.contains(j.relatedTarget) || fe(j);
  }
  function H(j) {
    return hr.isTouch ? L() !== j.type.indexOf("touch") >= 0 : !1;
  }
  function U() {
    Q();
    var j = g.props, se = j.popperOptions, ce = j.placement, Oe = j.offset, Te = j.getReferenceClientRect, gt = j.moveTransition, Bt = V() ? Nl(x).arrow : null, ja = Te ? {
      getBoundingClientRect: Te,
      contextElement: Te.contextElement || ae()
    } : t, $n = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(_n) {
        var Va = _n.state;
        if (V()) {
          var Nm = Ce(), ds = Nm.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Sn) {
            Sn === "placement" ? ds.setAttribute("data-placement", Va.placement) : Va.attributes.popper["data-popper-" + Sn] ? ds.setAttribute("data-" + Sn, "") : ds.removeAttribute("data-" + Sn);
          }), Va.attributes.popper = {};
        }
      }
    }, oa = [{
      name: "offset",
      options: {
        offset: Oe
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !gt
      }
    }, $n];
    V() && Bt && oa.push({
      name: "arrow",
      options: {
        element: Bt,
        padding: 3
      }
    }), oa.push.apply(oa, (se == null ? void 0 : se.modifiers) || []), g.popperInstance = H7(ja, x, Object.assign({}, se, {
      placement: ce,
      onFirstUpdate: p,
      modifiers: oa
    }));
  }
  function Q() {
    g.popperInstance && (g.popperInstance.destroy(), g.popperInstance = null);
  }
  function Z() {
    var j = g.props.appendTo, se, ce = ae();
    g.props.interactive && j === cm || j === "parent" ? se = ce.parentNode : se = um(j, [ce]), se.contains(x) || se.appendChild(x), g.state.isMounted = !0, U();
  }
  function X() {
    return zi(x.querySelectorAll("[data-tippy-root]"));
  }
  function Y(j) {
    g.clearDelayTimeouts(), j && ne("onTrigger", [g, j]), N();
    var se = q(!0), ce = I(), Oe = ce[0], Te = ce[1];
    hr.isTouch && Oe === "hold" && Te && (se = Te), se ? a = setTimeout(function() {
      g.show();
    }, se) : g.show();
  }
  function fe(j) {
    if (g.clearDelayTimeouts(), ne("onUntrigger", [g, j]), !g.state.isVisible) {
      he();
      return;
    }
    if (!(g.props.trigger.indexOf("mouseenter") >= 0 && g.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(j.type) >= 0 && i)) {
      var se = q(!1);
      se ? o = setTimeout(function() {
        g.state.isVisible && g.hide();
      }, se) : n = requestAnimationFrame(function() {
        g.hide();
      });
    }
  }
  function te() {
    g.state.isEnabled = !0;
  }
  function de() {
    g.hide(), g.state.isEnabled = !1;
  }
  function ve() {
    clearTimeout(a), clearTimeout(o), cancelAnimationFrame(n);
  }
  function Ee(j) {
    if (!g.state.isDestroyed) {
      ne("onBeforeUpdate", [g, j]), aa();
      var se = g.props, ce = Ru(t, Object.assign({}, se, Nu(j), {
        ignoreAttributes: !0
      }));
      g.props = ce, Lt(), se.interactiveDebounce !== ce.interactiveDebounce && (ze(), f = Iu(C, ce.interactiveDebounce)), se.triggerTarget && !ce.triggerTarget ? qa(se.triggerTarget).forEach(function(Oe) {
        Oe.removeAttribute("aria-expanded");
      }) : ce.triggerTarget && t.removeAttribute("aria-expanded"), ye(), oe(), S && S(se, ce), g.popperInstance && (U(), X().forEach(function(Oe) {
        requestAnimationFrame(Oe._tippy.popperInstance.forceUpdate);
      })), ne("onAfterUpdate", [g, j]);
    }
  }
  function Re(j) {
    g.setProps({
      content: j
    });
  }
  function De() {
    var j = g.state.isVisible, se = g.state.isDestroyed, ce = !g.state.isEnabled, Oe = hr.isTouch && !g.props.touch, Te = Ds(g.props.duration, 0, rr.duration);
    if (!(j || se || ce || Oe) && !ae().hasAttribute("disabled") && (ne("onShow", [g], !1), g.props.onShow(g) !== !1)) {
      if (g.state.isVisible = !0, V() && (x.style.visibility = "visible"), oe(), N(), g.state.isMounted || (x.style.transition = "none"), V()) {
        var gt = Ce(), Bt = gt.box, ja = gt.content;
        Ls([Bt, ja], 0);
      }
      p = function() {
        var $n;
        if (!(!g.state.isVisible || d)) {
          if (d = !0, x.offsetHeight, x.style.transition = g.props.moveTransition, V() && g.props.animation) {
            var oa = Ce(), _n = oa.box, Va = oa.content;
            Ls([_n, Va], Te), Pu([_n, Va], "visible");
          }
          Se(), ye(), zu(Fs, g), ($n = g.popperInstance) == null || $n.forceUpdate(), ne("onMount", [g]), g.props.animation && V() && He(Te, function() {
            g.state.isShown = !0, ne("onShown", [g]);
          });
        }
      }, Z();
    }
  }
  function ht() {
    var j = !g.state.isVisible, se = g.state.isDestroyed, ce = !g.state.isEnabled, Oe = Ds(g.props.duration, 1, rr.duration);
    if (!(j || se || ce) && (ne("onHide", [g], !1), g.props.onHide(g) !== !1)) {
      if (g.state.isVisible = !1, g.state.isShown = !1, d = !1, i = !1, V() && (x.style.visibility = "hidden"), ze(), he(), oe(!0), V()) {
        var Te = Ce(), gt = Te.box, Bt = Te.content;
        g.props.animation && (Ls([gt, Bt], Oe), Pu([gt, Bt], "hidden"));
      }
      Se(), ye(), g.props.animation ? V() && ue(Oe, g.unmount) : g.unmount();
    }
  }
  function tt(j) {
    we().addEventListener("mousemove", f), zu(Dn, f), f(j);
  }
  function It() {
    g.state.isVisible && g.hide(), g.state.isMounted && (Q(), X().forEach(function(j) {
      j._tippy.unmount();
    }), x.parentNode && x.parentNode.removeChild(x), Fs = Fs.filter(function(j) {
      return j !== g;
    }), g.state.isMounted = !1, ne("onHidden", [g]));
  }
  function mt() {
    !g.state.isDestroyed && (g.clearDelayTimeouts(), g.unmount(), aa(), delete t._tippy, g.state.isDestroyed = !0, ne("onDestroy", [g]));
  }
}
function po(t, e) {
  e === void 0 && (e = {});
  var r = rr.plugins.concat(e.plugins || []);
  a4();
  var a = Object.assign({}, e, {
    plugins: r
  }), o = Z7(t), n = o.reduce(function(i, s) {
    var l = s && f4(s, a);
    return l && i.push(l), i;
  }, []);
  return ls(t) ? n[0] : n;
}
po.defaultProps = rr;
po.setDefaultProps = d4;
po.currentInput = hr;
Object.assign({}, Qh, {
  effect: function(t) {
    var e = t.state, r = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow);
  }
});
po.setDefaultProps({
  render: hm
});
class h4 {
  constructor({ editor: e, element: r, view: a, tippyOptions: o = {}, updateDelay: n = 250, shouldShow: i }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: l, from: d, to: c }) => {
      const { doc: u, selection: p } = l, { empty: h } = p, f = !u.textBetween(d, c).length && Cd(l.selection), m = this.element.contains(document.activeElement);
      return !(!(s.hasFocus() || m) || h || f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && !((l = this.element.parentNode) === null || l === void 0) && l.contains(s.relatedTarget) || (s == null ? void 0 : s.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.handleDebouncedUpdate = (s, l) => {
      const d = !(l != null && l.selection.eq(s.state.selection)), c = !(l != null && l.doc.eq(s.state.doc));
      !d && !c || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(s, d, c, l);
      }, this.updateDelay));
    }, this.updateHandler = (s, l, d, c) => {
      var u, p, h;
      const { state: f, composing: m } = s, { selection: v } = f;
      if (m || !l && !d)
        return;
      this.createTooltip();
      const { ranges: b } = v, k = Math.min(...b.map((g) => g.$from.pos)), $ = Math.max(...b.map((g) => g.$to.pos));
      if (!(!((u = this.shouldShow) === null || u === void 0) && u.call(this, {
        editor: this.editor,
        element: this.element,
        view: s,
        state: f,
        oldState: c,
        from: k,
        to: $
      }))) {
        this.hide();
        return;
      }
      (p = this.tippy) === null || p === void 0 || p.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (g6(f.selection)) {
            let g = s.nodeDOM(k);
            if (g) {
              const w = g.dataset.nodeViewWrapper ? g : g.querySelector("[data-node-view-wrapper]");
              if (w && (g = w.firstChild), g)
                return g.getBoundingClientRect();
            }
          }
          return Xh(s, k, $);
        })
      }), this.show();
    }, this.editor = e, this.element = r, this.view = a, this.updateDelay = n, i && (this.shouldShow = i), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = o, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, r = !!e.parentElement;
    this.tippy || !r || (this.tippy = po(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, r) {
    const { state: a } = e, o = a.selection.from !== a.selection.to;
    if (this.updateDelay > 0 && o) {
      this.handleDebouncedUpdate(e, r);
      return;
    }
    const n = !(r != null && r.selection.eq(e.state.selection)), i = !(r != null && r.doc.eq(e.state.doc));
    this.updateHandler(e, n, i, r);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, r;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (r = this.tippy) === null || r === void 0 || r.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const m4 = (t) => new sr({
  key: typeof t.pluginKey == "string" ? new Qt(t.pluginKey) : t.pluginKey,
  view: (e) => new h4({ view: e, ...t })
});
er.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      m4({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class g4 {
  getTextContent(e) {
    return h6(e, { textSerializers: qh(this.editor.schema) });
  }
  constructor({ editor: e, element: r, view: a, tippyOptions: o = {}, shouldShow: n }) {
    this.preventHide = !1, this.shouldShow = ({ view: i, state: s }) => {
      const { selection: l } = s, { $anchor: d, empty: c } = l, u = d.depth === 1, p = d.parent.isTextblock && !d.parent.type.spec.code && !d.parent.textContent && d.parent.childCount === 0 && !this.getTextContent(d.parent);
      return !(!i.hasFocus() || !c || !u || !p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: i }) => {
      var s;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      i != null && i.relatedTarget && !((s = this.element.parentNode) === null || s === void 0) && s.contains(i.relatedTarget) || (i == null ? void 0 : i.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (i) => {
      this.blurHandler({ event: i });
    }, this.editor = e, this.element = r, this.view = a, n && (this.shouldShow = n), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = o, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, r = !!e.parentElement;
    this.tippy || !r || (this.tippy = po(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, r) {
    var a, o, n;
    const { state: i } = e, { doc: s, selection: l } = i, { from: d, to: c } = l;
    if (!(r && r.doc.eq(s) && r.selection.eq(l))) {
      if (this.createTooltip(), !(!((a = this.shouldShow) === null || a === void 0) && a.call(this, {
        editor: this.editor,
        view: e,
        state: i,
        oldState: r
      }))) {
        this.hide();
        return;
      }
      (o = this.tippy) === null || o === void 0 || o.setProps({
        getReferenceClientRect: ((n = this.tippyOptions) === null || n === void 0 ? void 0 : n.getReferenceClientRect) || (() => Xh(e, d, c))
      }), this.show();
    }
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, r;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (r = this.tippy) === null || r === void 0 || r.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const v4 = (t) => new sr({
  key: typeof t.pluginKey == "string" ? new Qt(t.pluginKey) : t.pluginKey,
  view: (e) => new g4({ view: e, ...t })
});
er.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      v4({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
Ta.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
Ta.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, yn(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((t, e) => ({
      ...t,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((t) => V6({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
Ta.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", yn(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
Ta.create({
  name: "text",
  group: "inline"
});
const b4 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, w4 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, y4 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, x4 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
oo.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", yn(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Ti({
        find: b4,
        type: this.type
      }),
      Ti({
        find: y4,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ai({
        find: w4,
        type: this.type
      }),
      Ai({
        find: x4,
        type: this.type
      })
    ];
  }
});
const k4 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, $4 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, _4 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, S4 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
oo.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", yn(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Ti({
        find: k4,
        type: this.type
      }),
      Ti({
        find: _4,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ai({
        find: $4,
        type: this.type
      }),
      Ai({
        find: S4,
        type: this.type
      })
    ];
  }
});
oo.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["u", yn(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: t }) => t.setMark(this.name),
      toggleUnderline: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetUnderline: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
var Ni = 200, nt = function() {
};
nt.prototype.append = function(t) {
  return t.length ? (t = nt.from(t), !this.length && t || t.length < Ni && this.leafAppend(t) || this.length < Ni && t.leafPrepend(this) || this.appendInner(t)) : this;
};
nt.prototype.prepend = function(t) {
  return t.length ? nt.from(t).append(this) : this;
};
nt.prototype.appendInner = function(t) {
  return new C4(this, t);
};
nt.prototype.slice = function(t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = this.length), t >= e ? nt.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e));
};
nt.prototype.get = function(t) {
  if (!(t < 0 || t >= this.length))
    return this.getInner(t);
};
nt.prototype.forEach = function(t, e, r) {
  e === void 0 && (e = 0), r === void 0 && (r = this.length), e <= r ? this.forEachInner(t, e, r, 0) : this.forEachInvertedInner(t, e, r, 0);
};
nt.prototype.map = function(t, e, r) {
  e === void 0 && (e = 0), r === void 0 && (r = this.length);
  var a = [];
  return this.forEach(function(o, n) {
    return a.push(t(o, n));
  }, e, r), a;
};
nt.from = function(t) {
  return t instanceof nt ? t : t && t.length ? new mm(t) : nt.empty;
};
var mm = /* @__PURE__ */ function(t) {
  function e(a) {
    t.call(this), this.values = a;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var r = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(a, o) {
    return a == 0 && o == this.length ? this : new e(this.values.slice(a, o));
  }, e.prototype.getInner = function(a) {
    return this.values[a];
  }, e.prototype.forEachInner = function(a, o, n, i) {
    for (var s = o; s < n; s++)
      if (a(this.values[s], i + s) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(a, o, n, i) {
    for (var s = o - 1; s >= n; s--)
      if (a(this.values[s], i + s) === !1)
        return !1;
  }, e.prototype.leafAppend = function(a) {
    if (this.length + a.length <= Ni)
      return new e(this.values.concat(a.flatten()));
  }, e.prototype.leafPrepend = function(a) {
    if (this.length + a.length <= Ni)
      return new e(a.flatten().concat(this.values));
  }, r.length.get = function() {
    return this.values.length;
  }, r.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, r), e;
}(nt);
nt.empty = new mm([]);
var C4 = /* @__PURE__ */ function(t) {
  function e(r, a) {
    t.call(this), this.left = r, this.right = a, this.length = r.length + a.length, this.depth = Math.max(r.depth, a.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, a, o, n) {
    var i = this.left.length;
    if (a < i && this.left.forEachInner(r, a, Math.min(o, i), n) === !1 || o > i && this.right.forEachInner(r, Math.max(a - i, 0), Math.min(this.length, o) - i, n + i) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, a, o, n) {
    var i = this.left.length;
    if (a > i && this.right.forEachInvertedInner(r, a - i, Math.max(o, i) - i, n + i) === !1 || o < i && this.left.forEachInvertedInner(r, Math.min(a, i), o, n) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, a) {
    if (r == 0 && a == this.length)
      return this;
    var o = this.left.length;
    return a <= o ? this.left.slice(r, a) : r >= o ? this.right.slice(r - o, a - o) : this.left.slice(r, o).append(this.right.slice(0, a - o));
  }, e.prototype.leafAppend = function(r) {
    var a = this.right.leafAppend(r);
    if (a)
      return new e(this.left, a);
  }, e.prototype.leafPrepend = function(r) {
    var a = this.left.leafPrepend(r);
    if (a)
      return new e(a, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(nt);
const O4 = 500;
let ln = class Ua {
  constructor(e, r) {
    this.items = e, this.eventCount = r;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, r) {
    if (this.eventCount == 0)
      return null;
    let a = this.items.length;
    for (; ; a--)
      if (this.items.get(a - 1).selection) {
        --a;
        break;
      }
    let o, n;
    r && (o = this.remapping(a, this.items.length), n = o.maps.length);
    let i = e.tr, s, l, d = [], c = [];
    return this.items.forEach((u, p) => {
      if (!u.step) {
        o || (o = this.remapping(a, p + 1), n = o.maps.length), n--, c.push(u);
        return;
      }
      if (o) {
        c.push(new ur(u.map));
        let h = u.step.map(o.slice(n)), f;
        h && i.maybeStep(h).doc && (f = i.mapping.maps[i.mapping.maps.length - 1], d.push(new ur(f, void 0, void 0, d.length + c.length))), n--, f && o.appendMap(f, n);
      } else
        i.maybeStep(u.step);
      if (u.selection)
        return s = o ? u.selection.map(o.slice(n)) : u.selection, l = new Ua(this.items.slice(0, a).append(c.reverse().concat(d)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: l, transform: i, selection: s };
  }
  // Create a new branch with the given transform added.
  addTransform(e, r, a, o) {
    let n = [], i = this.eventCount, s = this.items, l = !o && s.length ? s.get(s.length - 1) : null;
    for (let c = 0; c < e.steps.length; c++) {
      let u = e.steps[c].invert(e.docs[c]), p = new ur(e.mapping.maps[c], u, r), h;
      (h = l && l.merge(p)) && (p = h, c ? n.pop() : s = s.slice(0, s.length - 1)), n.push(p), r && (i++, r = void 0), o || (l = p);
    }
    let d = i - a.depth;
    return d > M4 && (s = E4(s, d), i -= d), new Ua(s.append(n), i);
  }
  remapping(e, r) {
    let a = new jo();
    return this.items.forEach((o, n) => {
      let i = o.mirrorOffset != null && n - o.mirrorOffset >= e ? a.maps.length - o.mirrorOffset : void 0;
      a.appendMap(o.map, i);
    }, e, r), a;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ua(this.items.append(e.map((r) => new ur(r))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, r) {
    if (!this.eventCount)
      return this;
    let a = [], o = Math.max(0, this.items.length - r), n = e.mapping, i = e.steps.length, s = this.eventCount;
    this.items.forEach((p) => {
      p.selection && s--;
    }, o);
    let l = r;
    this.items.forEach((p) => {
      let h = n.getMirror(--l);
      if (h == null)
        return;
      i = Math.min(i, h);
      let f = n.maps[h];
      if (p.step) {
        let m = e.steps[h].invert(e.docs[h]), v = p.selection && p.selection.map(n.slice(l + 1, h));
        v && s++, a.push(new ur(f, m, v));
      } else
        a.push(new ur(f));
    }, o);
    let d = [];
    for (let p = r; p < i; p++)
      d.push(new ur(n.maps[p]));
    let c = this.items.slice(0, o).append(d).append(a), u = new Ua(c, s);
    return u.emptyItemCount() > O4 && (u = u.compress(this.items.length - a.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((r) => {
      r.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let r = this.remapping(0, e), a = r.maps.length, o = [], n = 0;
    return this.items.forEach((i, s) => {
      if (s >= e)
        o.push(i), i.selection && n++;
      else if (i.step) {
        let l = i.step.map(r.slice(a)), d = l && l.getMap();
        if (a--, d && r.appendMap(d, a), l) {
          let c = i.selection && i.selection.map(r.slice(a));
          c && n++;
          let u = new ur(d.invert(), l, c), p, h = o.length - 1;
          (p = o.length && o[h].merge(u)) ? o[h] = p : o.push(u);
        }
      } else i.map && a--;
    }, this.items.length, 0), new Ua(nt.from(o.reverse()), n);
  }
};
ln.empty = new ln(nt.empty, 0);
function E4(t, e) {
  let r;
  return t.forEach((a, o) => {
    if (a.selection && e-- == 0)
      return r = o, !1;
  }), t.slice(r);
}
class ur {
  constructor(e, r, a, o) {
    this.map = e, this.step = r, this.selection = a, this.mirrorOffset = o;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let r = e.step.merge(this.step);
      if (r)
        return new ur(r.getMap().invert(), r, this.selection);
    }
  }
}
let Br = class {
  constructor(e, r, a, o, n) {
    this.done = e, this.undone = r, this.prevRanges = a, this.prevTime = o, this.prevComposition = n;
  }
};
const M4 = 20;
function T4(t, e, r, a) {
  let o = r.getMeta(Sa), n;
  if (o)
    return o.historyState;
  r.getMeta(z4) && (t = new Br(t.done, t.undone, null, 0, -1));
  let i = r.getMeta("appendedTransaction");
  if (r.steps.length == 0)
    return t;
  if (i && i.getMeta(Sa))
    return i.getMeta(Sa).redo ? new Br(t.done.addTransform(r, void 0, a, Qn(e)), t.undone, Bu(r.mapping.maps), t.prevTime, t.prevComposition) : new Br(t.done, t.undone.addTransform(r, void 0, a, Qn(e)), null, t.prevTime, t.prevComposition);
  if (r.getMeta("addToHistory") !== !1 && !(i && i.getMeta("addToHistory") === !1)) {
    let s = r.getMeta("composition"), l = t.prevTime == 0 || !i && t.prevComposition != s && (t.prevTime < (r.time || 0) - a.newGroupDelay || !A4(r, t.prevRanges)), d = i ? Hs(t.prevRanges, r.mapping) : Bu(r.mapping.maps);
    return new Br(t.done.addTransform(r, l ? e.selection.getBookmark() : void 0, a, Qn(e)), ln.empty, d, r.time, s ?? t.prevComposition);
  } else return (n = r.getMeta("rebased")) ? new Br(t.done.rebased(r, n), t.undone.rebased(r, n), Hs(t.prevRanges, r.mapping), t.prevTime, t.prevComposition) : new Br(t.done.addMaps(r.mapping.maps), t.undone.addMaps(r.mapping.maps), Hs(t.prevRanges, r.mapping), t.prevTime, t.prevComposition);
}
function A4(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let r = !1;
  return t.mapping.maps[0].forEach((a, o) => {
    for (let n = 0; n < e.length; n += 2)
      a <= e[n + 1] && o >= e[n] && (r = !0);
  }), r;
}
function Bu(t) {
  let e = [];
  for (let r = t.length - 1; r >= 0 && e.length == 0; r--)
    t[r].forEach((a, o, n, i) => e.push(n, i));
  return e;
}
function Hs(t, e) {
  if (!t)
    return null;
  let r = [];
  for (let a = 0; a < t.length; a += 2) {
    let o = e.map(t[a], 1), n = e.map(t[a + 1], -1);
    o <= n && r.push(o, n);
  }
  return r;
}
function I4(t, e, r) {
  let a = Qn(e), o = Sa.get(e).spec.config, n = (r ? t.undone : t.done).popEvent(e, a);
  if (!n)
    return null;
  let i = n.selection.resolve(n.transform.doc), s = (r ? t.done : t.undone).addTransform(n.transform, e.selection.getBookmark(), o, a), l = new Br(r ? s : n.remaining, r ? n.remaining : s, null, 0, -1);
  return n.transform.setSelection(i).setMeta(Sa, { redo: r, historyState: l });
}
let qs = !1, Fu = null;
function Qn(t) {
  let e = t.plugins;
  if (Fu != e) {
    qs = !1, Fu = e;
    for (let r = 0; r < e.length; r++)
      if (e[r].spec.historyPreserveItems) {
        qs = !0;
        break;
      }
  }
  return qs;
}
const Sa = new Qt("history"), z4 = new Qt("closeHistory");
function N4(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new sr({
    key: Sa,
    state: {
      init() {
        return new Br(ln.empty, ln.empty, null, 0, -1);
      },
      apply(e, r, a) {
        return T4(r, a, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, r) {
          let a = r.inputType, o = a == "historyUndo" ? vm : a == "historyRedo" ? bm : null;
          return o ? (r.preventDefault(), o(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function gm(t, e) {
  return (r, a) => {
    let o = Sa.getState(r);
    if (!o || (t ? o.undone : o.done).eventCount == 0)
      return !1;
    if (a) {
      let n = I4(o, r, t);
      n && a(n.scrollIntoView());
    }
    return !0;
  };
}
const vm = gm(!1), bm = gm(!0);
er.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => vm(t, e),
      redo: () => ({ state: t, dispatch: e }) => bm(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      N4(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
});
function P4(t) {
  var e;
  const { char: r, allowSpaces: a, allowToIncludeChar: o, allowedPrefixes: n, startOfLine: i, $position: s } = t, l = a && !o, d = R6(r), c = new RegExp(`\\s${d}$`), u = i ? "^" : "", p = o ? "" : d, h = l ? new RegExp(`${u}${d}.*?(?=\\s${p}|$)`, "gm") : new RegExp(`${u}(?:^)?${d}[^\\s${p}]*`, "gm"), f = ((e = s.nodeBefore) === null || e === void 0 ? void 0 : e.isText) && s.nodeBefore.text;
  if (!f)
    return null;
  const m = s.pos - f.length, v = Array.from(f.matchAll(h)).pop();
  if (!v || v.input === void 0 || v.index === void 0)
    return null;
  const b = v.input.slice(Math.max(0, v.index - 1), v.index), k = new RegExp(`^[${n == null ? void 0 : n.join("")}\0]?$`).test(b);
  if (n !== null && !k)
    return null;
  const $ = m + v.index;
  let g = $ + v[0].length;
  return l && c.test(f.slice(g - 1, g + 1)) && (v[0] += " ", g += 1), $ < s.pos && g >= s.pos ? {
    range: {
      from: $,
      to: g
    },
    query: v[0].slice(r.length),
    text: v[0]
  } : null;
}
const j4 = new Qt("suggestion");
function V4({ pluginKey: t = j4, editor: e, char: r = "@", allowSpaces: a = !1, allowToIncludeChar: o = !1, allowedPrefixes: n = [" "], startOfLine: i = !1, decorationTag: s = "span", decorationClass: l = "suggestion", command: d = () => null, items: c = () => [], render: u = () => ({}), allow: p = () => !0, findSuggestionMatch: h = P4 }) {
  let f;
  const m = u == null ? void 0 : u(), v = new sr({
    key: t,
    view() {
      return {
        update: async (b, k) => {
          var $, g, w, x, S, M, T;
          const I = ($ = this.key) === null || $ === void 0 ? void 0 : $.getState(k), L = (g = this.key) === null || g === void 0 ? void 0 : g.getState(b.state), V = I.active && L.active && I.range.from !== L.range.from, ae = !I.active && L.active, we = I.active && !L.active, Ce = !ae && !we && I.query !== L.query, q = ae || V && Ce, oe = Ce || V, ne = we || V && Ce;
          if (!q && !oe && !ne)
            return;
          const Se = ne && !q ? I : L, ye = b.dom.querySelector(`[data-decoration-id="${Se.decorationId}"]`);
          f = {
            editor: e,
            range: Se.range,
            query: Se.query,
            text: Se.text,
            items: [],
            command: (ze) => d({
              editor: e,
              range: Se.range,
              props: ze
            }),
            decorationNode: ye,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: ye ? () => {
              var ze;
              const { decorationId: Me } = (ze = this.key) === null || ze === void 0 ? void 0 : ze.getState(e.state), O = b.dom.querySelector(`[data-decoration-id="${Me}"]`);
              return (O == null ? void 0 : O.getBoundingClientRect()) || null;
            } : null
          }, q && ((w = m == null ? void 0 : m.onBeforeStart) === null || w === void 0 || w.call(m, f)), oe && ((x = m == null ? void 0 : m.onBeforeUpdate) === null || x === void 0 || x.call(m, f)), (oe || q) && (f.items = await c({
            editor: e,
            query: Se.query
          })), ne && ((S = m == null ? void 0 : m.onExit) === null || S === void 0 || S.call(m, f)), oe && ((M = m == null ? void 0 : m.onUpdate) === null || M === void 0 || M.call(m, f)), q && ((T = m == null ? void 0 : m.onStart) === null || T === void 0 || T.call(m, f));
        },
        destroy: () => {
          var b;
          f && ((b = m == null ? void 0 : m.onExit) === null || b === void 0 || b.call(m, f));
        }
      };
    },
    state: {
      // Initialize the plugin's internal state.
      init() {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      // Apply changes to the plugin state from a view transaction.
      apply(b, k, $, g) {
        const { isEditable: w } = e, { composing: x } = e.view, { selection: S } = b, { empty: M, from: T } = S, I = { ...k };
        if (I.composing = x, w && (M || e.view.composing)) {
          (T < k.range.from || T > k.range.to) && !x && !k.composing && (I.active = !1);
          const L = h({
            char: r,
            allowSpaces: a,
            allowToIncludeChar: o,
            allowedPrefixes: n,
            startOfLine: i,
            $position: S.$from
          }), V = `id_${Math.floor(Math.random() * 4294967295)}`;
          L && p({
            editor: e,
            state: g,
            range: L.range,
            isActive: k.active
          }) ? (I.active = !0, I.decorationId = k.decorationId ? k.decorationId : V, I.range = L.range, I.query = L.query, I.text = L.text) : I.active = !1;
        } else
          I.active = !1;
        return I.active || (I.decorationId = null, I.range = { from: 0, to: 0 }, I.query = null, I.text = null), I;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(b, k) {
        var $;
        const { active: g, range: w } = v.getState(b.state);
        return g && (($ = m == null ? void 0 : m.onKeyDown) === null || $ === void 0 ? void 0 : $.call(m, { view: b, event: k, range: w })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(b) {
        const { active: k, range: $, decorationId: g } = v.getState(b);
        return k ? at.create(b.doc, [
          wn.inline($.from, $.to, {
            nodeName: s,
            class: l,
            "data-decoration-id": g
          })
        ]) : null;
      }
    }
  });
  return v;
}
er.create({
  name: "tags",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        command: ({ editor: t, range: e, props: r }) => {
          r.command({ editor: t, range: e });
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      V4({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
});
function Ar(t) {
  return Array.isArray ? Array.isArray(t) : xm(t) === "[object Array]";
}
const R4 = 1 / 0;
function D4(t) {
  if (typeof t == "string")
    return t;
  let e = t + "";
  return e == "0" && 1 / t == -R4 ? "-0" : e;
}
function L4(t) {
  return t == null ? "" : D4(t);
}
function gr(t) {
  return typeof t == "string";
}
function wm(t) {
  return typeof t == "number";
}
function B4(t) {
  return t === !0 || t === !1 || F4(t) && xm(t) == "[object Boolean]";
}
function ym(t) {
  return typeof t == "object";
}
function F4(t) {
  return ym(t) && t !== null;
}
function Pt(t) {
  return t != null;
}
function Us(t) {
  return !t.trim().length;
}
function xm(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const H4 = "Incorrect 'index' type", q4 = (t) => `Invalid value for key ${t}`, U4 = (t) => `Pattern length exceeds max of ${t}.`, W4 = (t) => `Missing ${t} property in key`, K4 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Hu = Object.prototype.hasOwnProperty;
class Y4 {
  constructor(e) {
    this._keys = [], this._keyMap = {};
    let r = 0;
    e.forEach((a) => {
      let o = km(a);
      this._keys.push(o), this._keyMap[o.id] = o, r += o.weight;
    }), this._keys.forEach((a) => {
      a.weight /= r;
    });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function km(t) {
  let e = null, r = null, a = null, o = 1, n = null;
  if (gr(t) || Ar(t))
    a = t, e = qu(t), r = Pl(t);
  else {
    if (!Hu.call(t, "name"))
      throw new Error(W4("name"));
    const i = t.name;
    if (a = i, Hu.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(K4(i));
    e = qu(i), r = Pl(i), n = t.getFn;
  }
  return { path: e, id: r, weight: o, src: a, getFn: n };
}
function qu(t) {
  return Ar(t) ? t : t.split(".");
}
function Pl(t) {
  return Ar(t) ? t.join(".") : t;
}
function J4(t, e) {
  let r = [], a = !1;
  const o = (n, i, s) => {
    if (Pt(n))
      if (!i[s])
        r.push(n);
      else {
        let l = i[s];
        const d = n[l];
        if (!Pt(d))
          return;
        if (s === i.length - 1 && (gr(d) || wm(d) || B4(d)))
          r.push(L4(d));
        else if (Ar(d)) {
          a = !0;
          for (let c = 0, u = d.length; c < u; c += 1)
            o(d[c], i, s + 1);
        } else i.length && o(d, i, s + 1);
      }
  };
  return o(t, gr(e) ? e.split(".") : e, 0), a ? r : r[0];
}
const X4 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, G4 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (t, e) => t.score === e.score ? t.idx < e.idx ? -1 : 1 : t.score < e.score ? -1 : 1
}, Z4 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, Q4 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: J4,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var $e = {
  ...G4,
  ...X4,
  ...Z4,
  ...Q4
};
const e3 = /[^ ]+/g;
function t3(t = 1, e = 3) {
  const r = /* @__PURE__ */ new Map(), a = Math.pow(10, e);
  return {
    get(o) {
      const n = o.match(e3).length;
      if (r.has(n))
        return r.get(n);
      const i = 1 / Math.pow(n, 0.5 * t), s = parseFloat(Math.round(i * a) / a);
      return r.set(n, s), s;
    },
    clear() {
      r.clear();
    }
  };
}
class Rd {
  constructor({
    getFn: e = $e.getFn,
    fieldNormWeight: r = $e.fieldNormWeight
  } = {}) {
    this.norm = t3(r, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e, this._keysMap = {}, e.forEach((r, a) => {
      this._keysMap[r.id] = a;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, gr(this.docs[0]) ? this.docs.forEach((e, r) => {
      this._addString(e, r);
    }) : this.docs.forEach((e, r) => {
      this._addObject(e, r);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(e) {
    const r = this.size();
    gr(e) ? this._addString(e, r) : this._addObject(e, r);
  }
  // Removes the doc at the specified index of the index
  removeAt(e) {
    this.records.splice(e, 1);
    for (let r = e, a = this.size(); r < a; r += 1)
      this.records[r].i -= 1;
  }
  getValueForItemAtKeyId(e, r) {
    return e[this._keysMap[r]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, r) {
    if (!Pt(e) || Us(e))
      return;
    let a = {
      v: e,
      i: r,
      n: this.norm.get(e)
    };
    this.records.push(a);
  }
  _addObject(e, r) {
    let a = { i: r, $: {} };
    this.keys.forEach((o, n) => {
      let i = o.getFn ? o.getFn(e) : this.getFn(e, o.path);
      if (Pt(i)) {
        if (Ar(i)) {
          let s = [];
          const l = [{ nestedArrIndex: -1, value: i }];
          for (; l.length; ) {
            const { nestedArrIndex: d, value: c } = l.pop();
            if (Pt(c))
              if (gr(c) && !Us(c)) {
                let u = {
                  v: c,
                  i: d,
                  n: this.norm.get(c)
                };
                s.push(u);
              } else Ar(c) && c.forEach((u, p) => {
                l.push({
                  nestedArrIndex: p,
                  value: u
                });
              });
          }
          a.$[n] = s;
        } else if (gr(i) && !Us(i)) {
          let s = {
            v: i,
            n: this.norm.get(i)
          };
          a.$[n] = s;
        }
      }
    }), this.records.push(a);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function $m(t, e, { getFn: r = $e.getFn, fieldNormWeight: a = $e.fieldNormWeight } = {}) {
  const o = new Rd({ getFn: r, fieldNormWeight: a });
  return o.setKeys(t.map(km)), o.setSources(e), o.create(), o;
}
function r3(t, { getFn: e = $e.getFn, fieldNormWeight: r = $e.fieldNormWeight } = {}) {
  const { keys: a, records: o } = t, n = new Rd({ getFn: e, fieldNormWeight: r });
  return n.setKeys(a), n.setIndexRecords(o), n;
}
function Ln(t, {
  errors: e = 0,
  currentLocation: r = 0,
  expectedLocation: a = 0,
  distance: o = $e.distance,
  ignoreLocation: n = $e.ignoreLocation
} = {}) {
  const i = e / t.length;
  if (n)
    return i;
  const s = Math.abs(a - r);
  return o ? i + s / o : s ? 1 : i;
}
function a3(t = [], e = $e.minMatchCharLength) {
  let r = [], a = -1, o = -1, n = 0;
  for (let i = t.length; n < i; n += 1) {
    let s = t[n];
    s && a === -1 ? a = n : !s && a !== -1 && (o = n - 1, o - a + 1 >= e && r.push([a, o]), a = -1);
  }
  return t[n - 1] && n - a >= e && r.push([a, n - 1]), r;
}
const pa = 32;
function o3(t, e, r, {
  location: a = $e.location,
  distance: o = $e.distance,
  threshold: n = $e.threshold,
  findAllMatches: i = $e.findAllMatches,
  minMatchCharLength: s = $e.minMatchCharLength,
  includeMatches: l = $e.includeMatches,
  ignoreLocation: d = $e.ignoreLocation
} = {}) {
  if (e.length > pa)
    throw new Error(U4(pa));
  const c = e.length, u = t.length, p = Math.max(0, Math.min(a, u));
  let h = n, f = p;
  const m = s > 1 || l, v = m ? Array(u) : [];
  let b;
  for (; (b = t.indexOf(e, f)) > -1; ) {
    let S = Ln(e, {
      currentLocation: b,
      expectedLocation: p,
      distance: o,
      ignoreLocation: d
    });
    if (h = Math.min(S, h), f = b + c, m) {
      let M = 0;
      for (; M < c; )
        v[b + M] = 1, M += 1;
    }
  }
  f = -1;
  let k = [], $ = 1, g = c + u;
  const w = 1 << c - 1;
  for (let S = 0; S < c; S += 1) {
    let M = 0, T = g;
    for (; M < T; )
      Ln(e, {
        errors: S,
        currentLocation: p + T,
        expectedLocation: p,
        distance: o,
        ignoreLocation: d
      }) <= h ? M = T : g = T, T = Math.floor((g - M) / 2 + M);
    g = T;
    let I = Math.max(1, p - T + 1), L = i ? u : Math.min(p + T, u) + c, V = Array(L + 2);
    V[L + 1] = (1 << S) - 1;
    for (let ae = L; ae >= I; ae -= 1) {
      let we = ae - 1, Ce = r[t.charAt(we)];
      if (m && (v[we] = +!!Ce), V[ae] = (V[ae + 1] << 1 | 1) & Ce, S && (V[ae] |= (k[ae + 1] | k[ae]) << 1 | 1 | k[ae + 1]), V[ae] & w && ($ = Ln(e, {
        errors: S,
        currentLocation: we,
        expectedLocation: p,
        distance: o,
        ignoreLocation: d
      }), $ <= h)) {
        if (h = $, f = we, f <= p)
          break;
        I = Math.max(1, 2 * p - f);
      }
    }
    if (Ln(e, {
      errors: S + 1,
      currentLocation: p,
      expectedLocation: p,
      distance: o,
      ignoreLocation: d
    }) > h)
      break;
    k = V;
  }
  const x = {
    isMatch: f >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, $)
  };
  if (m) {
    const S = a3(v, s);
    S.length ? l && (x.indices = S) : x.isMatch = !1;
  }
  return x;
}
function n3(t) {
  let e = {};
  for (let r = 0, a = t.length; r < a; r += 1) {
    const o = t.charAt(r);
    e[o] = (e[o] || 0) | 1 << a - r - 1;
  }
  return e;
}
class _m {
  constructor(e, {
    location: r = $e.location,
    threshold: a = $e.threshold,
    distance: o = $e.distance,
    includeMatches: n = $e.includeMatches,
    findAllMatches: i = $e.findAllMatches,
    minMatchCharLength: s = $e.minMatchCharLength,
    isCaseSensitive: l = $e.isCaseSensitive,
    ignoreLocation: d = $e.ignoreLocation
  } = {}) {
    if (this.options = {
      location: r,
      threshold: a,
      distance: o,
      includeMatches: n,
      findAllMatches: i,
      minMatchCharLength: s,
      isCaseSensitive: l,
      ignoreLocation: d
    }, this.pattern = l ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const c = (p, h) => {
      this.chunks.push({
        pattern: p,
        alphabet: n3(p),
        startIndex: h
      });
    }, u = this.pattern.length;
    if (u > pa) {
      let p = 0;
      const h = u % pa, f = u - h;
      for (; p < f; )
        c(this.pattern.substr(p, pa), p), p += pa;
      if (h) {
        const m = u - pa;
        c(this.pattern.substr(m), m);
      }
    } else
      c(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: r, includeMatches: a } = this.options;
    if (r || (e = e.toLowerCase()), this.pattern === e) {
      let f = {
        isMatch: !0,
        score: 0
      };
      return a && (f.indices = [[0, e.length - 1]]), f;
    }
    const {
      location: o,
      distance: n,
      threshold: i,
      findAllMatches: s,
      minMatchCharLength: l,
      ignoreLocation: d
    } = this.options;
    let c = [], u = 0, p = !1;
    this.chunks.forEach(({ pattern: f, alphabet: m, startIndex: v }) => {
      const { isMatch: b, score: k, indices: $ } = o3(e, f, m, {
        location: o + v,
        distance: n,
        threshold: i,
        findAllMatches: s,
        minMatchCharLength: l,
        includeMatches: a,
        ignoreLocation: d
      });
      b && (p = !0), u += k, b && $ && (c = [...c, ...$]);
    });
    let h = {
      isMatch: p,
      score: p ? u / this.chunks.length : 1
    };
    return p && a && (h.indices = c), h;
  }
}
class ra {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return Uu(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return Uu(e, this.singleRegex);
  }
  search() {
  }
}
function Uu(t, e) {
  const r = t.match(e);
  return r ? r[1] : null;
}
class i3 extends ra {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const r = e === this.pattern;
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class s3 extends ra {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const r = e.indexOf(this.pattern) === -1;
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class l3 extends ra {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const r = e.startsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class d3 extends ra {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const r = !e.startsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class c3 extends ra {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const r = e.endsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1]
    };
  }
}
class u3 extends ra {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const r = !e.endsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class Sm extends ra {
  constructor(e, {
    location: r = $e.location,
    threshold: a = $e.threshold,
    distance: o = $e.distance,
    includeMatches: n = $e.includeMatches,
    findAllMatches: i = $e.findAllMatches,
    minMatchCharLength: s = $e.minMatchCharLength,
    isCaseSensitive: l = $e.isCaseSensitive,
    ignoreLocation: d = $e.ignoreLocation
  } = {}) {
    super(e), this._bitapSearch = new _m(e, {
      location: r,
      threshold: a,
      distance: o,
      includeMatches: n,
      findAllMatches: i,
      minMatchCharLength: s,
      isCaseSensitive: l,
      ignoreLocation: d
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class Cm extends ra {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let r = 0, a;
    const o = [], n = this.pattern.length;
    for (; (a = e.indexOf(this.pattern, r)) > -1; )
      r = a + n, o.push([a, r - 1]);
    const i = !!o.length;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: o
    };
  }
}
const jl = [
  i3,
  Cm,
  l3,
  d3,
  u3,
  c3,
  s3,
  Sm
], Wu = jl.length, p3 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, f3 = "|";
function h3(t, e = {}) {
  return t.split(f3).map((r) => {
    let a = r.trim().split(p3).filter((n) => n && !!n.trim()), o = [];
    for (let n = 0, i = a.length; n < i; n += 1) {
      const s = a[n];
      let l = !1, d = -1;
      for (; !l && ++d < Wu; ) {
        const c = jl[d];
        let u = c.isMultiMatch(s);
        u && (o.push(new c(u, e)), l = !0);
      }
      if (!l)
        for (d = -1; ++d < Wu; ) {
          const c = jl[d];
          let u = c.isSingleMatch(s);
          if (u) {
            o.push(new c(u, e));
            break;
          }
        }
    }
    return o;
  });
}
const m3 = /* @__PURE__ */ new Set([Sm.type, Cm.type]);
class g3 {
  constructor(e, {
    isCaseSensitive: r = $e.isCaseSensitive,
    includeMatches: a = $e.includeMatches,
    minMatchCharLength: o = $e.minMatchCharLength,
    ignoreLocation: n = $e.ignoreLocation,
    findAllMatches: i = $e.findAllMatches,
    location: s = $e.location,
    threshold: l = $e.threshold,
    distance: d = $e.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: r,
      includeMatches: a,
      minMatchCharLength: o,
      findAllMatches: i,
      ignoreLocation: n,
      location: s,
      threshold: l,
      distance: d
    }, this.pattern = r ? e : e.toLowerCase(), this.query = h3(this.pattern, this.options);
  }
  static condition(e, r) {
    return r.useExtendedSearch;
  }
  searchIn(e) {
    const r = this.query;
    if (!r)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: a, isCaseSensitive: o } = this.options;
    e = o ? e : e.toLowerCase();
    let n = 0, i = [], s = 0;
    for (let l = 0, d = r.length; l < d; l += 1) {
      const c = r[l];
      i.length = 0, n = 0;
      for (let u = 0, p = c.length; u < p; u += 1) {
        const h = c[u], { isMatch: f, indices: m, score: v } = h.search(e);
        if (f) {
          if (n += 1, s += v, a) {
            const b = h.constructor.type;
            m3.has(b) ? i = [...i, ...m] : i.push(m);
          }
        } else {
          s = 0, n = 0, i.length = 0;
          break;
        }
      }
      if (n) {
        let u = {
          isMatch: !0,
          score: s / n
        };
        return a && (u.indices = i), u;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Vl = [];
function v3(...t) {
  Vl.push(...t);
}
function Rl(t, e) {
  for (let r = 0, a = Vl.length; r < a; r += 1) {
    let o = Vl[r];
    if (o.condition(t, e))
      return new o(t, e);
  }
  return new _m(t, e);
}
const Pi = {
  AND: "$and",
  OR: "$or"
}, Dl = {
  PATH: "$path",
  PATTERN: "$val"
}, Ll = (t) => !!(t[Pi.AND] || t[Pi.OR]), b3 = (t) => !!t[Dl.PATH], w3 = (t) => !Ar(t) && ym(t) && !Ll(t), Ku = (t) => ({
  [Pi.AND]: Object.keys(t).map((e) => ({
    [e]: t[e]
  }))
});
function Om(t, e, { auto: r = !0 } = {}) {
  const a = (o) => {
    let n = Object.keys(o);
    const i = b3(o);
    if (!i && n.length > 1 && !Ll(o))
      return a(Ku(o));
    if (w3(o)) {
      const l = i ? o[Dl.PATH] : n[0], d = i ? o[Dl.PATTERN] : o[l];
      if (!gr(d))
        throw new Error(q4(l));
      const c = {
        keyId: Pl(l),
        pattern: d
      };
      return r && (c.searcher = Rl(d, e)), c;
    }
    let s = {
      children: [],
      operator: n[0]
    };
    return n.forEach((l) => {
      const d = o[l];
      Ar(d) && d.forEach((c) => {
        s.children.push(a(c));
      });
    }), s;
  };
  return Ll(t) || (t = Ku(t)), a(t);
}
function y3(t, { ignoreFieldNorm: e = $e.ignoreFieldNorm }) {
  t.forEach((r) => {
    let a = 1;
    r.matches.forEach(({ key: o, norm: n, score: i }) => {
      const s = o ? o.weight : null;
      a *= Math.pow(
        i === 0 && s ? Number.EPSILON : i,
        (s || 1) * (e ? 1 : n)
      );
    }), r.score = a;
  });
}
function x3(t, e) {
  const r = t.matches;
  e.matches = [], Pt(r) && r.forEach((a) => {
    if (!Pt(a.indices) || !a.indices.length)
      return;
    const { indices: o, value: n } = a;
    let i = {
      indices: o,
      value: n
    };
    a.key && (i.key = a.key.src), a.idx > -1 && (i.refIndex = a.idx), e.matches.push(i);
  });
}
function k3(t, e) {
  e.score = t.score;
}
function $3(t, e, {
  includeMatches: r = $e.includeMatches,
  includeScore: a = $e.includeScore
} = {}) {
  const o = [];
  return r && o.push(x3), a && o.push(k3), t.map((n) => {
    const { idx: i } = n, s = {
      item: e[i],
      refIndex: i
    };
    return o.length && o.forEach((l) => {
      l(n, s);
    }), s;
  });
}
class Ia {
  constructor(e, r = {}, a) {
    this.options = { ...$e, ...r }, this.options.useExtendedSearch, this._keyStore = new Y4(this.options.keys), this.setCollection(e, a);
  }
  setCollection(e, r) {
    if (this._docs = e, r && !(r instanceof Rd))
      throw new Error(H4);
    this._myIndex = r || $m(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(e) {
    Pt(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const r = [];
    for (let a = 0, o = this._docs.length; a < o; a += 1) {
      const n = this._docs[a];
      e(n, a) && (this.removeAt(a), a -= 1, o -= 1, r.push(n));
    }
    return r;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: r = -1 } = {}) {
    const {
      includeMatches: a,
      includeScore: o,
      shouldSort: n,
      sortFn: i,
      ignoreFieldNorm: s
    } = this.options;
    let l = gr(e) ? gr(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    return y3(l, { ignoreFieldNorm: s }), n && l.sort(i), wm(r) && r > -1 && (l = l.slice(0, r)), $3(l, this._docs, {
      includeMatches: a,
      includeScore: o
    });
  }
  _searchStringList(e) {
    const r = Rl(e, this.options), { records: a } = this._myIndex, o = [];
    return a.forEach(({ v: n, i, n: s }) => {
      if (!Pt(n))
        return;
      const { isMatch: l, score: d, indices: c } = r.searchIn(n);
      l && o.push({
        item: n,
        idx: i,
        matches: [{ score: d, value: n, norm: s, indices: c }]
      });
    }), o;
  }
  _searchLogical(e) {
    const r = Om(e, this.options), a = (s, l, d) => {
      if (!s.children) {
        const { keyId: u, searcher: p } = s, h = this._findMatches({
          key: this._keyStore.get(u),
          value: this._myIndex.getValueForItemAtKeyId(l, u),
          searcher: p
        });
        return h && h.length ? [
          {
            idx: d,
            item: l,
            matches: h
          }
        ] : [];
      }
      const c = [];
      for (let u = 0, p = s.children.length; u < p; u += 1) {
        const h = s.children[u], f = a(h, l, d);
        if (f.length)
          c.push(...f);
        else if (s.operator === Pi.AND)
          return [];
      }
      return c;
    }, o = this._myIndex.records, n = {}, i = [];
    return o.forEach(({ $: s, i: l }) => {
      if (Pt(s)) {
        let d = a(r, s, l);
        d.length && (n[l] || (n[l] = { idx: l, item: s, matches: [] }, i.push(n[l])), d.forEach(({ matches: c }) => {
          n[l].matches.push(...c);
        }));
      }
    }), i;
  }
  _searchObjectList(e) {
    const r = Rl(e, this.options), { keys: a, records: o } = this._myIndex, n = [];
    return o.forEach(({ $: i, i: s }) => {
      if (!Pt(i))
        return;
      let l = [];
      a.forEach((d, c) => {
        l.push(
          ...this._findMatches({
            key: d,
            value: i[c],
            searcher: r
          })
        );
      }), l.length && n.push({
        idx: s,
        item: i,
        matches: l
      });
    }), n;
  }
  _findMatches({ key: e, value: r, searcher: a }) {
    if (!Pt(r))
      return [];
    let o = [];
    if (Ar(r))
      r.forEach(({ v: n, i, n: s }) => {
        if (!Pt(n))
          return;
        const { isMatch: l, score: d, indices: c } = a.searchIn(n);
        l && o.push({
          score: d,
          key: e,
          value: n,
          idx: i,
          norm: s,
          indices: c
        });
      });
    else {
      const { v: n, n: i } = r, { isMatch: s, score: l, indices: d } = a.searchIn(n);
      s && o.push({ score: l, key: e, value: n, norm: i, indices: d });
    }
    return o;
  }
}
Ia.version = "7.0.0";
Ia.createIndex = $m;
Ia.parseIndex = r3;
Ia.config = $e;
Ia.parseQuery = Om;
v3(g3);
const _3 = {
  class: "search-container",
  "data-testid": "search-input"
}, S3 = {
  __name: "PSearch",
  props: {
    /** Input ID attribute */
    id: {
      type: String,
      required: !0
    },
    /** The input value */
    modelValue: {
      type: [String, Number, Array, Object],
      default: ""
    },
    /** Placeholder text in input */
    placeholder: {
      type: String,
      default: ""
    },
    /** Option items, can be array of strings or array of objects */
    items: {
      type: Array,
      default: () => []
    },
    /** Object key string, dot notiation supported */
    searchKeys: {
      type: Array,
      default: () => []
    },
    /** Search options, see fuse.js docs */
    searchOptions: {
      type: Object,
      default: () => ({})
    },
    elevated: Boolean,
    /** If item is an object display a specific value as the option text */
    itemText: {
      type: [String, Number, Function],
      default: ""
    },
    /** If item is an object sue a specific value as value */
    itemValue: {
      type: [String, Number],
      default: ""
    },
    show: Boolean,
    /** Cancel button text */
    buttonText: {
      type: String,
      default: ""
    },
    large: Boolean,
    loading: Boolean,
    hotkey: {
      type: Object,
      default: () => ({
        key: "",
        label: ""
      })
    }
  },
  emits: ["update:modelValue", "close", "update:show"],
  setup(t, { expose: e, emit: r }) {
    const a = t, o = r, n = nd()[a.hotkey.key], i = D(null), { id: s, items: l, searchKeys: d, searchOptions: c, itemText: u, itemValue: p } = yg(a), h = Qe({
      ...c.value,
      keys: [...d.value]
    });
    let f = Qe(new Ia(l.value, h));
    function m(T) {
      if (T != null && T.item) {
        if (u.value.includes(".")) {
          const I = yo(T.item, u.value);
          return fl(I) ? I : "";
        }
        return u.value ? T.item[u.value] : T.item;
      }
      if (T) {
        if (u.value.includes(".")) {
          const I = yo(T, u.value);
          return fl(I) ? I : "";
        }
        return u.value ? T[u.value] : T;
      }
      return null;
    }
    function v(T) {
      return T != null && T.item ? p.value.includes(".") ? yo(T.item, p.value) : p.value ? T.item[p.value] : T.item : T ? p.value.includes(".") ? yo(T, p.value) : p.value ? T[p.value] : T : null;
    }
    const b = B({
      get() {
        return a.modelValue;
      },
      set(T) {
        o("update:modelValue", v(T));
      }
    }), k = D(null), $ = D(null);
    function g() {
      $.value.showModal();
    }
    function w() {
      $.value.close();
    }
    const x = B(() => k.value ? f.search(k.value) : a.items), S = Qe({
      id: s.value,
      serverside: !0,
      clearable: !0,
      itemValue: p.value,
      itemText: m,
      prependIcon: zf,
      placeholder: a.placeholder
    }), M = B({
      get() {
        return a.show;
      },
      set(T) {
        o("update:show", T), T || o("close");
      }
    });
    return Ie(n, (T) => {
      T && a.hotkey && setTimeout(() => {
        i.value.select.input.focus();
      }, 100);
    }), Wi(() => {
      f = Qe(new Ia(l.value, h));
    }), e({
      showModal: g,
      close: w
    }), (T, I) => (y(), E("div", _3, [
      t.elevated ? (y(), W(Tf, {
        key: 0,
        ref_key: "modal",
        ref: $,
        modelValue: M.value,
        "onUpdate:modelValue": I[3] || (I[3] = (L) => M.value = L),
        "hide-header": "",
        "hide-footer": "",
        class: be({ "loader-modal": t.loading })
      }, {
        default: G(() => [
          t.loading ? (y(), W(mn, { key: 0 })) : (y(), W(pl, We({
            key: 1,
            modelValue: b.value,
            "onUpdate:modelValue": I[1] || (I[1] = (L) => b.value = L),
            class: "search elevated"
          }, S, {
            items: x.value,
            large: "",
            clearable: "",
            "show-divider": "",
            offset: 0,
            onSearch: I[2] || (I[2] = (L) => k.value = L)
          }), {
            inline: G(() => [
              ee(Je, {
                variant: "text",
                class: "cancel",
                onClick: I[0] || (I[0] = (L) => {
                  M.value = !1, b.value = null, k.value = null;
                })
              }, {
                default: G(() => [
                  je(J(t.buttonText || A(ie)("input.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            option: G(({ option: L, selected: V }) => [
              le(T.$slots, "option", {
                option: L.item || L,
                selected: V
              }, void 0, !0)
            ]),
            _: 3
          }, 16, ["modelValue", "items"]))
        ]),
        _: 3
      }, 8, ["modelValue", "class"])) : (y(), W(pl, We({
        key: 1,
        ref_key: "search",
        ref: i,
        modelValue: b.value,
        "onUpdate:modelValue": I[4] || (I[4] = (L) => b.value = L),
        class: "search",
        "hide-chevron": ""
      }, S, {
        items: x.value,
        large: t.large,
        onSearch: I[5] || (I[5] = (L) => k.value = L)
      }), {
        inline: G(() => [
          !t.elevated && t.hotkey.label ? (y(), W(id, {
            key: 0,
            variant: "secondary",
            hotkey: t.hotkey.label
          }, null, 8, ["hotkey"])) : F("", !0)
        ]),
        _: 1
      }, 16, ["modelValue", "items", "large"]))
    ]));
  }
}, C3 = /* @__PURE__ */ ge(S3, [["__scopeId", "data-v-ddb25692"]]);
D([]);
class O3 {
  /**
   * Fetches data from the specified URL using the provided options.
   * @param {object} options - The options to be passed to the fetch function.
   * @param {string} proxy - The URL of the proxy.
   * @param {string} productId - The ID of an internal customer product.
   * @throws {Error} If there is an error while fetching the data.
   * @return {Promise} A promise that resolves to the fetched data in JSON format.
   */
  // eslint-disable-next-line class-methods-use-this
  async fetchData(e, r, a) {
    let o = null;
    if (!r)
      throw new Error("Proxy URL not set, add it in the init method");
    const n = new URLSearchParams({});
    e.method === "GET" && (n.set("url", JSON.parse(e.body).url), delete e.body), a && n.set("product_id", a);
    const i = {
      method: e.method,
      ...e,
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      o = await fetch(`${r}?${n}`, i);
    } catch (s) {
      throw new Error(`Failed to fetch data from ${e.body ? JSON.parse(e.body).url : n.get("url")}, ${s}`);
    }
    if (!o.ok)
      throw new Error(`Failed to fetch data from ${e.body ? JSON.parse(e.body).url : n.get("url")}`);
    return await o.json();
  }
}
class Em extends O3 {
  constructor({ proxy: e, apiVersion: r, productId: a }) {
    super(), this.proxy = e, this.apiVersion = r, this.productId = a;
  }
  /**
   * Asynchronously configures the product by fetching data from the 'products/configure' endpoint.
   *
   * @return {Promise<array>} The response from the API.
   */
  async configureProduct(e) {
    const r = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/configure`,
        data: {
          ...e
        }
      })
    };
    let a = {};
    try {
      a = await this.fetchData(r, this.proxy, this.productId);
    } catch (o) {
      throw new Error(o);
    }
    return a;
  }
  /**
   * Retrieves the price using the specified configuration options.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getPrice(e) {
    const r = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/price`,
        data: {
          ...e
        }
      })
    };
    return await this.fetchData(r, this.proxy, this.productId);
  }
  /**
   * Retrieve all products to be configured in the configurator.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getProducts(e) {
    const r = JSON.parse(sessionStorage.getItem("products"));
    if (r != null && r.length && e)
      return r;
    const a = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products?per_page=1000`
      })
    }, o = await this.fetchData(a, this.proxy, this.productId);
    return e && sessionStorage.setItem("products", JSON.stringify(o.data)), o.data;
  }
  async getProduct(e) {
    const r = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/product/${e}`
      })
    };
    return await this.fetchData(r, this.proxy, this.productId);
  }
  async storeConfiguration(e) {
    const r = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/apiproducts/product`,
        data: {
          ...e
        }
      })
    };
    return await this.fetchData(r, this.proxy, this.productId);
  }
  async updateConfiguration(e) {
    const r = {
      method: "PUT",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/apiproducts/product/${e.customer_code}`,
        data: {
          ...e
        }
      })
    };
    return await this.fetchData(r, this.proxy);
  }
  async getUploaderSession(e) {
    const r = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/uploader/create`,
        data: e
      })
    };
    return (await this.fetchData(r, this.proxy, this.productId)).uploaders;
  }
}
class Yu {
  constructor({ code: e, options: r }) {
    this.code = e, this.options = r || [];
  }
}
class Ju {
  constructor({ products: e, language: r }) {
    this.products = e, this.language = r;
  }
}
class Ws {
  constructor({
    companyName: e,
    firstName: r,
    lastName: a,
    street: o,
    houseNumber: n,
    addition: i,
    postalCode: s,
    city: l,
    country: d,
    phone: c,
    email: u
  }) {
    this.companyName = e, this.firstName = r, this.lastName = a, this.street = o, this.houseNumber = n, this.addition = i, this.postalCode = s, this.city = l, this.country = d, this.phone = c, this.email = u;
  }
}
class E3 {
  constructor({ address: e, products: r }) {
    this.address = e, this.products = r;
  }
  getPayload() {
    return {
      deliveries: [
        {
          address: {
            company_name: this.address.companyName,
            first_name: this.address.firstName,
            last_name: this.address.lastName,
            street: this.address.street,
            house_number: this.address.houseNumber,
            addition: this.address.addition,
            postal_code: this.address.postalCode,
            city: this.address.city,
            country: this.address.country,
            phone: this.address.phone,
            email: this.address.email
          }
        }
      ],
      products: this.products
    };
  }
}
function M3(t, e) {
  return e.split(".").reduce((r, a) => r[a] ? r[a] : r, t);
}
const T3 = {
  en: {
    fastest: "Fastest",
    cheapest: "Cheapest",
    tomorrow: "Tomorrow",
    no_accessoires: "No accessories",
    complete: "Complete",
    errors: {
      invalid_or_duplicate: "Invalid or duplicate option, adjust your configuration and try again",
      restrictions_not_met: "Restrictions were not met for one or more order lines",
      invalid: "One or more values are invalid",
      invalidConfig: "Configuration contains an invalid option, adjust your configuration and try again",
      general: "Something went wrong, check the configuration and try again"
    },
    global: {
      // should be adjusted in PDS
      labels: {
        continue: "Continue"
      }
    }
  },
  nl: {
    fastest: "Snelste",
    cheapest: "Voordeligst",
    tomorrow: "Morgen",
    no_accessoires: "Geen accessoires",
    complete: "Afronden",
    errors: {
      invalid_or_duplicate: "Ongeldige of dubbele optie, pas de samenstelling aan en probeer opnieuw",
      restrictions_not_met: "Er is niet voldaan aan de beperkingen voor een of meer orderregels",
      invalid: "Een of meer waarden zijn ongeldig",
      invalidConfig: "Configuratie bevat een ongeldige optie, pas de samenstelling aan en probeer opnieuw",
      general: "Er is iets misgegaan, controleer de samenstelling en probeer opnieuw"
    },
    global: {
      // should be adjusted in PDS
      labels: {
        continue: "Doorgaan"
      }
    }
  },
  de: {
    fastest: "Schnellste",
    cheapest: "Am billigsten",
    tomorrow: "Morgen",
    no_accessoires: "Keine Zubehör",
    complete: "Vollständigen",
    errors: {
      invalid_or_duplicate: "Ungültige oder doppelte Option. Passen Sie Ihre Konfiguration an und versuchen Sie es erneut",
      restrictions_not_met: "Einschränkungen wurden für eine oder mehrere Bestellpositionen nicht erfüllt",
      invalid: "Ein oder mehrere Werte sind ungültig",
      invalidConfig: "Konfiguration enthaelt eine ungültige Option. Passen Sie Ihre Konfiguration an und versuchen Sie es erneut",
      general: "Es ist ein Fehler aufgetreten. Ueberprüfen Sie die Konfiguration und versuchen Sie es erneut"
    },
    global: {
      // should be adjusted in PDS
      labels: {
        continue: "Weiter"
      }
    }
  }
}, Mm = Qe({
  language: "nl"
});
function A3(t) {
  return M3(T3[Mm.language], t) || t;
}
function I3(t, e = {}) {
  return t.replace(/{(\w+)}/g, (r, a) => e[a] || `{${a}}`);
}
function z3(t, e) {
  return t.replace(/{(\d+)}/g, (r, a) => e[a] || `{${a}}`);
}
function mr(t, e = null) {
  const r = A3(t);
  return Array.isArray(e) ? z3(r) : I3(r, e);
}
function N3(t) {
  Mm.language = t;
}
function Tm(t, e) {
  return e !== -1 ? t.slice(0, e + 1) : t.filter((r) => r.code !== void 0);
}
function P3(t, e) {
  const r = new Date(t), a = /* @__PURE__ */ new Date(), o = new Date(a);
  return o.setDate(a.getDate() + 1), r.toDateString() === o.toDateString() ? mr("tomorrow") : r.toLocaleDateString(`${e}-${e.toUpperCase()}`, {
    weekday: "long"
  });
}
function j3(t, e) {
  return new Date(t).toLocaleDateString(`${e}-${e.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function V3(t, e) {
  return t.length === 0 ? !0 : e.some((a) => a.code === "no-option") || e.some((a) => a.code === "amount" && (a.value === 0 || a.value === "")) ? !1 : !(e != null && e.includes(void 0));
}
function R3(t, e, r, a) {
  let o = "";
  r === "accessories-cross-sell" ? o = "unit" : (r === "material" || r === "materialType") && (o = "meter");
  const n = t.map((i) => {
    const s = a.find((d) => d.code === i.code);
    let l;
    return (i.type_code === "number" || i.type_code === "decimal") && (l = {
      value: i.default_value || parseFloat(i.min_value),
      unit: i.unit_code,
      min: i.min_value,
      max: i.max_value
    }), {
      code: i.code,
      title: (s == null ? void 0 : s.overwrites.title) || (i == null ? void 0 : i.name),
      description: (s == null ? void 0 : s.overwrites.description) || (i == null ? void 0 : i.description),
      image: s != null && s.overwrites.image || i.images.length ? i.images[0].url : void 0,
      price: i.price ? i.price[e] : void 0,
      pricePer: o,
      unit: i.unit_code,
      reversible: i.reversible,
      min: i.min_value,
      max: i.max_value,
      available: i == null ? void 0 : i.available,
      amount: i.default_value,
      customInput: l,
      labels: i.label ? [
        {
          text: i.label,
          color: "red"
        }
      ] : void 0
    };
  }).filter((i) => {
    const s = a.find((l) => l.code === i.code);
    return !(s != null && s.overwrites.hide);
  });
  return r === "accessories-cross-sell" && !n.some((i) => i.noOption) && n.unshift({
    code: "no-option",
    noOption: !0,
    noOptionText: mr("no_accessoires")
  }), n;
}
function D3(t, e, r, a, o, n) {
  const i = e.map((c) => {
    var b, k, $, g;
    const u = ["width", "height", "amount"];
    let p = (b = c.children) != null && b.find((w) => u.includes(w.type_code)) ? "simple" : "options";
    const h = (k = c.children) != null && k.find((w) => ["width", "height"].includes(w.code)) ? "measurement" : "amount", f = (g = ($ = o.find((w) => w.code === n)) == null ? void 0 : $.overwrites.steps.find((w) => w.code === c.code)) == null ? void 0 : g.overwrites, m = R3(c.children, a, c.code, o);
    let { code: v } = c;
    return v === "accessories-cross-sell" && (v = "accessories", p = "options-multiple"), {
      code: v,
      title: f && f.title ? f.title : c.name,
      type: p,
      control: h,
      options: m,
      hidden: f && f.hidden
    };
  }), s = t.find((c) => c.code === "size"), l = r !== -1 && s && s.type === "simple" ? r - 1 : r;
  return [...Tm(t, l), ...i];
}
function Am(t) {
  let e = 1 / 0, r;
  return t.forEach((a) => {
    const o = a.prices.purchase_rush_surcharge;
    o < e && (e = o, r = a);
  }), r;
}
function Im(t) {
  let e = null, r = 1 / 0;
  return t.forEach((a) => {
    const o = Am(a.deliveries), n = o.prices.purchase_rush_surcharge;
    n < r && (r = n, e = o);
  }), e;
}
function L3(t, e) {
  const r = Im(t);
  let a = 0;
  return t.map((o, n) => {
    let i;
    const s = Am(o.deliveries);
    return n === 0 && (i = { text: mr("fastest"), color: "red" }), r && s.shipping_method_api_code === r.shipping_method_api_code && a === 0 && (i || (i = { text: mr("cheapest"), color: "green" }), a += 1), {
      date: j3(o.delivery_date, e),
      day: P3(o.delivery_date, e),
      cost: s.prices.purchase_rush_surcharge,
      label: i
    };
  });
}
function B3(t, e) {
  const a = t[0][`products_${e}`].toString(), o = Im(t), n = o.prices.purchase_shipping_price, i = o.prices.purchase_packaging_price;
  return {
    price: a,
    shipping: n,
    packaging: i,
    fullPrice: {
      price: t[0],
      shipping: o
    }
  };
}
function zm(t) {
  return t.includes("Can not find unique id for option") ? mr("errors.invalid_or_duplicate") : t.includes("Restrictions are not met") ? mr("errors.restrictions_not_met") : t === "Validation Failed" ? mr("errors.invalid") : t.includes("Can not build valid path for tree") ? mr("errors.invalidConfig") : mr("errors.general");
}
class F3 {
  constructor({ proxy: e, version: r }) {
    this.initialized = !1, this.proxy = e, this.version = r || "", this.repository = new Em({ proxy: e }), this.product = new Yu({}), this.productInfo = {}, this.productConfig = new Ju({}), this.address = new Ws({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null;
  }
  /**
   * Set the code of the product and get the first step for the product.
   *
   * @param {string} code - The code of the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  async setProduct(e, r) {
    return this.product.code = e, r && (this.loading = !0, this.productInfo = await this.repository.getProduct(e), this.loading = !1), this.productConfig.products = [this.product], this.deliveryOptions = [], this;
  }
  /**
   * Sets the price type of the product.
   *
   * @param {string} type - the type of price to be set, either purchase_price, sales_price or base_price
   * @param {boolean} includeVat - whether to include vat in the price
   */
  setPriceType(e, r = !1) {
    return this.priceType = r ? `${e}_incl_vat` : e, this;
  }
  /**
   * Sets the options for the product.
   *
   * @param {Product} product - The product with options to set for the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  setOption(e) {
    let r = !1;
    this.lastChangedIndex = -1, e.options.forEach((i, s) => {
      Array.isArray(i) && i.length === 0 && (this.lastChangedIndex = s, r = !0);
    });
    const a = e.options.flat().map((i) => ({
      ...i,
      value: typeof i.value == "number" && !Number.isInteger(i.value) ? i.value.toFixed(1) : i.value
    }));
    if (a.length > 0 && !r) {
      for (let i = this.product.options.length - 1; i >= 0; i -= 1)
        if (this.product.options[i] && a[i] && (this.product.options[i].value && this.product.options[i].value !== a[i].value || this.product.options[i].code && this.product.options[i].code !== a[i].code)) {
          this.lastChangedIndex = this.product.options[i].code === "width" ? i + 1 : i;
          break;
        }
    }
    this.product.options = Tm(a, this.lastChangedIndex), this.product.options.some((i) => i.code === "no-option") && (this.setStatuses(!0), this.setOpenState(!0));
    const o = this.product.options[this.product.options.length - 1], n = (o == null ? void 0 : o.code) === "height" ? [this.product.options[this.product.options.length - 2], o] : o;
    if (n && (n.length || Object.keys(n).length > 0)) {
      const i = new CustomEvent("connectConfigurator:option-selected", { detail: JSON.parse(JSON.stringify(n)) });
      window.dispatchEvent(i);
    }
    return this;
  }
  /**
   * Asynchronously retrieves the next option.
   * @async
   * @return {Promise<void>} - Resolves when the next option has been retrieved.
   */
  async getNextOption() {
    var e, r, a, o;
    if (V3(this.options, this.product.options)) {
      this.loading = !0, this.productConfig.language || (this.productConfig.language = this.language);
      let n = {};
      try {
        this.payload = await this.repository.configureProduct(this.productConfig);
      } catch (i) {
        this.payload = i;
      }
      if (this.payload.status !== "ok" || typeof this.payload == "string")
        throw this.options[this.options.length - 1].status = "attention", this.options[this.options.length - 1].alert = {
          type: "error",
          title: zm(this.payload.message ? this.payload.message : this.payload)
        }, this.loading = !1, new Error(this.payload.message || this.payload);
      if ([n] = this.payload.products, typeof n == "object" && n) {
        this.alert = {}, (e = this.options[this.options.length - 1]) != null && e.alert && delete this.options[this.options.length - 1].alert;
        let i = n.available_options;
        if (((r = i[0]) == null ? void 0 : r.code) === "size" && i.length === 2 && (i = i.slice(0, 1)), this.options = D3(this.options, i, this.lastChangedIndex, this.priceType, this.overwrites, this.product.code), this.overwrites.length > 0) {
          const s = (o = (a = this.overwrites) == null ? void 0 : a.find((l) => l.code === this.product.code)) == null ? void 0 : o.overwrites.steps;
          s && this.options.forEach((l) => {
            s.forEach(async (d) => {
              if (l.code === d.code && this.product.options.some((c) => c.code === d.overwrites.selected) === !1 && d.overwrites.selected) {
                const c = this.getConfig();
                c.options.push({ code: d.overwrites.selected }), await (await this.setOption(c)).getNextOption();
              }
            });
          });
        }
        if (this.setOpenState(), this.setStatuses(), n.can_order) {
          this.canOrder = !0, n.upload === !0 && (this.upload = !0, this.uploaders = n.uploaders);
          const s = new Event("connectConfigurator:finished");
          window.dispatchEvent(s);
        } else n.can_order === !1 && this.canOrder && (this.canOrder = !1);
        if (n.can_order && this.product.options.length >= this.options.length && Object.keys(this.address).length && this.address.city) {
          const s = await this.getProductPrice();
          this.prices = B3(s, this.priceType), this.deliveryOptions = L3(s, this.language), this.setOpenState();
        } else n.can_order && !this.address.city && this.setOpenState(!0);
      }
      this.loading = !1;
    }
  }
  /**
   * Set the open state of the component to open if the next option is an option step.
   */
  setOpenState(e = !1) {
    this.openState = [], e ? this.options.forEach(() => {
      this.openState.push(!1);
    }) : (this.options.forEach(() => {
      this.openState.push(!1);
    }), this.openState[this.options.length - 1] = !0);
  }
  /**
   * Retrieves the product price from the repository.
   *
   * @return {Promise} The price of the product.
   */
  async getProductPrice() {
    const e = new E3({
      address: this.address,
      products: this.productConfig.products
    });
    this.loading = !0;
    const r = await this.repository.getPrice(e.getPayload());
    return this.calculationId = r.calculation_id, this.loading = !1, r.prices;
  }
  /**
   * Sets the delivery address.
   *
   * @param {object} address - The address to be set.
   * @param {string} address.companyName
   * @param {string} address.firstName
   * @param {string} address.lastName
   * @param {string} address.street
   * @param {string} address.houseNumber
   * @param {string} address.addition
   * @param {string} address.postalCode
   * @param {string} address.city
   * @param {string} address.country
   * @param {string} address.phone
   * @param {string} address.email
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  setAddress(e) {
    return this.address = new Ws(e), this;
  }
  /**
   * Set the language for the client.
   *
   * @param {string} language - the language to be set
   */
  setLanguage(e) {
    return this.language = e, N3(e), dl(e), this;
  }
  /**
   * Set the statuses of the options.
   *
   * @param {type} option - the option to set the status for
   * @param {type} index - the index of the option in the options array
   */
  setStatuses(e) {
    const r = this.options.find((o) => o.code === "size"), a = r && r.options && r.options.some((o) => o.code === "height" || o.code === "width") ? 1 : 0;
    e ? this.options.forEach((o) => {
      o.status = "done";
    }) : this.options.forEach((o, n) => {
      this.product.options.length - a > n && (o.status = "done");
    });
  }
  /**
   * Retrieves the configuration of the product mapped for the configurator. (internal use)
   *
   * @return {Object} The configuration of the product.
   */
  getConfig() {
    const e = { ...this.product };
    if (e.options.length > 0) {
      const r = e.options.find((i) => i.code === "height"), a = e.options.find((i) => i.code === "width"), o = [...e.options];
      r && a && o.splice(0, 2, [a, r]);
      const n = this.options.find((i) => i.code === "accessories");
      if (n) {
        const i = n.options;
        if (i) {
          const s = [];
          let l = null;
          o.forEach((d, c) => {
            d.code && i.some((u) => u.code === d.code) && (l || (l = c), s.push(d));
          }), s.length > 1 && o.splice(l, s.length, s);
        }
      }
      e.options = o;
    }
    return e;
  }
  /**
   * Retrieves the uploader data needed for the configuration.
   * @return {Array} The uploader data needed for the configuration.
   */
  getUploaderData() {
    return JSON.parse(JSON.stringify(this.uploaders));
  }
  /** Is there an upload needed */
  needsUpload() {
    return this.upload;
  }
  /** Get the raw, unmapped configuration payload */
  getRaw() {
    return JSON.parse(JSON.stringify(this.payload));
  }
  /**
   * Clear all the variables and reset the state of the object.
   */
  clear() {
    return this.product = new Yu({}), this.productConfig = new Ju({}), this.address = new Ws({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this;
  }
  /** Set overwrites for certain products, can only be called on init. */
  setOverwrites(e) {
    return this.options.length === 0 ? this.overwrites = e : console.error("Overwrites can only be set on init"), this;
  }
}
class H3 extends F3 {
  constructor({ proxy: e }) {
    super({ proxy: e }), this.products = [], this.searchBar = null, this.configuratorModal = null, this.selectedProduct = {}, this.updateExternal = !0, this.storeProductsLocally = !1, this.callbackUrl = null;
  }
  /**
   * Initializes the Connect client with the provided proxy, language, address, and price type.
   *
   * @param {string} proxy - the proxy to be initialized
   * @param {string} language - the language to be set
   * @param {object} address - the address to be set
   * @param {string} priceType - the price type to be set
   * @param {boolean} includeVat - whether to include vat in the price
   * @param {array} overwrites - the overwrites to be set
   * @param {boolean} storeProductsLocally - whether to store products in session storage
   * @param {string} callbackUrl - the callback url for uploaders
   *
   * @example
   * window.connectConfigurator.init({ proxy: '/api', language: 'nl', address: {}, priceType: 'purchase_price' })
   */
  init({ proxy: e = "/api", language: r = "nl", address: a, priceType: o, includeVat: n = !1, overwrites: i = [], storeProductsLocally: s = !1, callbackUrl: l, internalProductId: d }) {
    this.initialized = !0, this.proxy = e, this.repository = new Em({ proxy: e, productId: d }), this.setLanguage(r), this.callbackUrl = l, a && this.setAddress(a), o && this.setPriceType(o, n), i.length && this.setOverwrites(i), s && (this.storeProductsLocally = s);
    const c = new CustomEvent("connectConfigurator:ready", {
      detail: this
    });
    return window.dispatchEvent(c), this;
  }
  /** Get all products from endpoint */
  async getProducts() {
    if (this.overwrites.length) {
      const e = await this.repository.getProducts(this.storeProductsLocally, this.internalProductId);
      this.products = e.filter((r) => {
        const a = this.overwrites.find((o) => o.code === r.code);
        return !(a != null && a.overwrites.hide);
      });
    } else
      this.products = await this.repository.getProducts(this.storeProductsLocally);
  }
  /**
   * @returns {object} - The result of the configurator
   *
   * @example
   * const result = configurator.getResult()
   * console.log(result)
   */
  getResult() {
    return {
      excerpt: {
        ...this.getProductExcerpt()
      },
      configuration: this.getConfiguration()
    };
  }
  /**
   * A method to retrieve the configuration.
   *
   * @return {ProductConfig} The product configuration.
   */
  getConfiguration() {
    return JSON.parse(JSON.stringify(this.productConfig));
  }
  /**
   * Stores the current configuration for the given customer code
   *
   * @param {string} name - The customer code to store the configuration for
   * @param {object} [config] - The configuration to store, defaults to current product configuration
   */
  storeConfiguration(e, r = null) {
    const a = r || this.productConfig.products[0];
    a.customer_code = e;
    try {
      this.repository.storeConfiguration(a);
    } catch (o) {
      console.error(o);
    }
  }
  /**
   * Updates the stored configuration for the given customer code
   *
   * @param {string} name - The customer code to store the configuration for
   * @param {object} [config] - The configuration to update, defaults to current product configuration
   */
  updateConfiguration(e, r = null) {
    const a = r || this.productConfig.products[0];
    a.customer_code = e;
    try {
      this.repository.updateConfiguration(a);
    } catch (o) {
      console.error(o);
    }
  }
  /**
   * A function to generate a product excerpt based on selected options.
   *
   * @return {Object} The product excerpt including description and options.
   */
  getProductExcerpt() {
    var n, i, s, l, d, c, u;
    (n = this.prices.fullPrice) != null && n.deliveries && delete this.prices.fullPrice.deliveries, (i = this.prices.fullPrice) != null && i.products && delete this.prices.fullPrice.products;
    const e = this.product.options.find((p) => p.code === "amount").value, r = this.selectedProduct && this.selectedProduct.translations && this.selectedProduct.translations[this.language] ? (s = this.selectedProduct.translations[this.language]) == null ? void 0 : s.title : ((l = this.selectedProduct.translations) == null ? void 0 : l.nl.title) || this.product.code, a = (d = this.product.options.find((p) => p.code === "width")) == null ? void 0 : d.value, o = (c = this.product.options.find((p) => p.code === "height")) == null ? void 0 : c.value;
    return {
      product: {
        description: `${e}x ${r} ${a}x${o}`,
        description_options: this.product.options.map((p) => p.value ? `${p.code}: ${p.value}` : `${p.code}`).join(", ")
      },
      ...JSON.parse((u = this.prices) != null && u.fullPrice ? JSON.stringify(this.prices.fullPrice) : null)
    };
  }
  /**
   * Opens the configurator modal.
   */
  openConfigurator() {
    var e;
    return (e = this.configuratorModal) == null || e.showModal(), this;
  }
  /**
   * Closes the configurator modal.
   */
  closeConfigurator() {
    this.configuratorModal.close();
  }
  /**
   * Opens the search modal.
   */
  async openSearch() {
    this.searchBar && (this.searchBar.showModal(), this.products.length === 0 && (this.loading = !0, await this.getProducts(), this.loading = !1));
  }
  /**
   * Closes the search modal.
   */
  closeSearch() {
    return this.searchBar && this.searchBar.close(), this;
  }
  /**
   * A method that closes the configurator and reset the updateExternal property.
   */
  finish() {
    this.closeConfigurator(), this.updateExternal = !0;
  }
  /**
   * Set a configuration based on the given payload.
   *
   * @param {Price} payload - The payload containing the product to be set
   */
  async setFromPayload(e) {
    var s, l;
    if (this.updateExternal = !1, !e) {
      console.error("No payload provided");
      return;
    }
    const r = e.products[0], { options: a, code: o } = r, n = this;
    await this.setProduct(o, !0), e.deliveries && Object.keys((s = e.deliveries[0]) == null ? void 0 : s.address).length && this.setAddress((l = e.deliveries[0]) == null ? void 0 : l.address), this.openConfigurator();
    async function i(d) {
      if (!(d >= a.length + 1)) {
        try {
          await n.setOption(n.product).getNextOption();
        } catch (c) {
          n.options[n.options.length - 1].alert || (n.alert = {
            type: "error",
            title: zm(c.message ? c.message : c)
          }), n.loading = !1, n.updateExternal = !0;
          return;
        }
        if (a[d]) {
          let c = d + 1;
          a[d].code === "width" ? (n.product.options.push(a[d], a[d + 1]), c = d + 2) : ["width", "height"].includes(a[d].code) || n.product.options.push(a[d]), await i(c);
        } else
          n.updateExternal = !0;
      }
    }
    a ? await i(0) : console.error("No options found in payload");
  }
  /**
   * Get the uploader session to allow the user to upload a file.
   *
   * @param {string} [callbackUrl] - The callback URL to use. If not provided, the
   *   default callback URL will be used.
   * @returns {Array} uploaders
   * @throws {Error} If there is an error while fetching the uploader session.
   * @throws {Error} If there is no calculation id found.
   */
  async getUploaderSession(e = null) {
    const r = e || this.callbackUrl;
    if (!this.canOrder || !this.calculationId)
      throw new Error("Can not fetch uploader session, no calculation id found");
    try {
      return await this.repository.getUploaderSession({ callback_url: r, calculation_id: this.calculationId });
    } catch (a) {
      return console.error(a), a;
    }
  }
}
const q3 = { class: "relative h-full" }, U3 = { key: 0 }, W3 = { class: "font-medium text-[1.125rem] block" }, K3 = {
  key: 0,
  class: "text-gray-500 text-sm mt-1 block"
}, Y3 = { key: 1 }, J3 = { class: "font-medium text-[1.125rem] block" }, X3 = {
  key: 0,
  class: "text-gray-500 text-sm mt-1 block"
}, G3 = {
  __name: "PProductModal",
  setup(t) {
    const e = D(null), r = D(null), a = D(!1), o = D(!1), n = D({}), i = D(""), s = B(() => {
      var l, d, c, u, p, h;
      return {
        name: n.value.productInfo && Object.keys(n.value.productInfo).length && ((l = n.value.productInfo.translations[n.value.language]) != null && l.title) ? n.value.productInfo.translations[n.value.language].title : ((c = (d = n.value.productInfo) == null ? void 0 : d.translations) == null ? void 0 : c.nl.title) || ((u = n.value.productInfo) == null ? void 0 : u.code),
        image: (h = (p = n.value.productInfo) == null ? void 0 : p.images) == null ? void 0 : h[0].url,
        ...n.value.prices
      };
    });
    return Ie(i, async () => {
      i.value ? (n.value.selectedProduct = i.value, n.value.closeSearch(), n.value.openConfigurator(), await (await n.value.setProduct(i.value.code, !0)).getNextOption()) : i.value === "" && n.value.clear();
    }), _t(() => {
      window.addEventListener("connectConfigurator:ready", (l) => {
        const d = l.detail;
        d.searchBar = e.value, d.configuratorModal = r.value, n.value = d;
      });
    }), (l, d) => {
      var c, u, p, h, f;
      return y(), E("div", q3, [
        ee(A(C3), {
          id: "probo-product-search-bar",
          ref_key: "searchBar",
          ref: e,
          modelValue: i.value,
          "onUpdate:modelValue": d[0] || (d[0] = (m) => i.value = m),
          show: a.value,
          "onUpdate:show": d[1] || (d[1] = (m) => a.value = m),
          items: n.value.products,
          elevated: "",
          "search-keys": [
            "code",
            `translations.${n.value.language}.title`,
            `translations.${n.value.language}.description`
          ],
          "item-text": `translations.${n.value.language}.title`,
          loading: n.value.loading,
          "item-height": 80
        }, {
          option: G(({ option: m }) => [
            m && m.translations[n.value.language] ? (y(), E("span", U3, [
              z("span", W3, J(m.translations[n.value.language].title), 1),
              m.translations[n.value.language].description ? (y(), E("span", K3, J(m.translations[n.value.language].description), 1)) : F("", !0)
            ])) : m && m.translations.nl ? (y(), E("span", Y3, [
              z("span", J3, J(m.translations.nl.title), 1),
              m.translations.nl.description ? (y(), E("span", X3, J(m.translations.nl.description), 1)) : F("", !0)
            ])) : F("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "show", "items", "search-keys", "item-text", "loading"]),
        ee(A(Ey), {
          ref_key: "configuratorModal",
          ref: r,
          modelValue: o.value,
          "onUpdate:modelValue": d[2] || (d[2] = (m) => o.value = m),
          product: s.value,
          "sub-title": ((p = (u = (c = n.value.productInfo) == null ? void 0 : c.translations) == null ? void 0 : u[n.value.language]) == null ? void 0 : p.description) || ((f = (h = n.value.productInfo) == null ? void 0 : h.translations) == null ? void 0 : f.nl.description),
          specs: !1,
          "show-minimize": !1,
          "extended-pricing": "",
          submit: A(mr)("complete"),
          "submit-icon": A(sd),
          "can-order": n.value.canOrder,
          "onSubmit:productConfig": d[3] || (d[3] = (m) => n.value.finish()),
          onClose: d[4] || (d[4] = (m) => i.value = "")
        }, {
          default: G(() => [
            le(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["modelValue", "product", "sub-title", "submit", "submit-icon", "can-order"])
      ]);
    };
  }
}, Z3 = `@import"https://rsms.me/inter/inter.css";@import"https://fonts.cdnfonts.com/css/poppins";.icon[data-v-cb714ba6]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.icon[data-v-cb714ba6]:where(.dark,.dark *){color:var(--body-text)}.action-button[data-v-963b2e61]{position:relative;margin:0;display:inline-flex;height:3.5rem;width:3.5rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:center;border-radius:9999px;border-style:none;background-color:var(--primary);padding:0;outline:2px solid transparent;outline-offset:2px}.action-button[data-v-963b2e61]:hover{background-color:var(--primary-hover)}.action-button[data-v-963b2e61]:focus{background-color:var(--primary-light)}.action-button[data-v-963b2e61]:active{background-color:var(--primary-pressed)}.action-button[disabled][data-v-963b2e61]{pointer-events:none;background-color:var(--disabled)}.action-button[disabled] .icon[data-v-963b2e61]{color:var(--disabled-text)}.action-button.floating[data-v-963b2e61]{position:fixed;bottom:0;right:0;z-index:50;margin-bottom:1.5rem;margin-right:1.5rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.action-button .icon[data-v-963b2e61]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.mini-icon[data-v-0cdb5710]{display:flex;height:1.25rem;width:1.25rem;flex-shrink:0}.mini-icon[data-v-0cdb5710]:where(.dark,.dark *){color:var(--body-text)}.hotkey[data-v-4516e1bf]{display:flex;height:1.25rem;width:-moz-fit-content;width:fit-content;min-width:1.25rem;align-items:center;justify-content:center;border-radius:.25rem;border-width:1px;border-style:solid;padding-left:.25rem;padding-right:.25rem;font-size:.75rem;line-height:1rem;font-weight:500}.hotkey.disabled[data-v-4516e1bf]{color:var(--disabled-text)}.hotkey.primary-hotkey[data-v-4516e1bf]{border-color:#ffffff80;background-color:#ffffff26;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.hotkey.secondary-hotkey[data-v-4516e1bf]{border-color:#0a0a0a26;background-color:#0a0a0a08;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1))}.hotkey.secondary-hotkey[data-v-4516e1bf]:where(.dark,.dark *){border-color:#ffffff80;background-color:#ffffff26;color:var(--body-text)}.hotkey.tertiary-hotkey[data-v-4516e1bf]{border-color:#0062ff4d;background-color:#0062ff0f;color:var(--primary-light)}.hotkey.tertiary-hotkey[data-v-4516e1bf]:where(.dark,.dark *){border-color:var(--primary-mid)}.loader[data-v-77423a82]{height:1.5rem;width:1.5rem}@keyframes spin-77423a82{to{transform:rotate(360deg)}}.loader[data-v-77423a82]{animation:spin-77423a82 1s linear infinite;border-radius:9999px;border-width:.1875rem}.loader.primary-loader[data-v-77423a82]{border-color:rgb(219 234 254 / var(--tw-border-opacity, 1));--tw-border-opacity: 1;border-top-color:rgb(37 99 235 / var(--tw-border-opacity, 1))}.loader.secondary-loader[data-v-77423a82]{border-color:#fff6;border-top-color:#fff}.loader.small-loader[data-v-77423a82]{height:1.25rem;width:1.25rem}.loader.large-loader[data-v-77423a82]{height:1.75rem;width:1.75rem}.button[data-v-9d769800]{display:flex;height:2.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:center;gap:.5rem;border-radius:.5rem;padding-left:.75rem;padding-right:.75rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity, 1))}.button .default-loader[data-v-9d769800],.button .small-loader[data-v-9d769800]{height:1.3rem;width:1.3rem}.button .large-loader[data-v-9d769800]{height:1.5rem;width:1.5rem}.button[data-v-9d769800]:disabled{background-color:var(--disabled);color:var(--disabled-text)}.primary[data-v-9d769800]{background-color:var(--primary);--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.primary[data-v-9d769800]:not(:disabled):hover{background-color:var(--primary-hover)}.primary[data-v-9d769800]:not(:disabled):focus{background-color:var(--primary-pressed)}.secondary[data-v-9d769800]{border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity, 1));background-color:var(--secondary);--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity, 1))}.secondary[data-v-9d769800]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.secondary[data-v-9d769800]:not(:disabled):hover{border-color:var(--border-primary-hover);background-color:var(--secondary-hover)}.secondary[data-v-9d769800]:not(:disabled):focus{background-color:var(--secondary-pressed)}.secondary[data-v-9d769800]:disabled{border-color:var(--disabled)}.tertiary[data-v-9d769800]{background-color:var(--tertiary);color:var(--primary)}.tertiary[data-v-9d769800]:where(.dark,.dark *){color:var(--primary-light)}.tertiary[data-v-9d769800]:not(:disabled):hover{background-color:var(--tertiary-hover)}.tertiary[data-v-9d769800]:not(:disabled):focus{background-color:var(--tertiary-pressed)}.text[data-v-9d769800]:where(.dark,.dark *){color:var(--body-text)}.text[data-v-9d769800]:not(:disabled):hover{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1));--tw-bg-opacity: 4% }.text[data-v-9d769800]:not(:disabled):focus{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1));--tw-bg-opacity: 8% }.danger[data-v-9d769800]{background-color:var(--error-tertiary);--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.danger[data-v-9d769800]:not(:disabled):hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity, 1))}.danger[data-v-9d769800]:not(:disabled):focus{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity, 1))}.success[data-v-9d769800]{background-color:var(--success-tertiary);--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.success[data-v-9d769800]:not(:disabled):hover{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity, 1))}.success[data-v-9d769800]:not(:disabled):focus{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity, 1))}.url[data-v-9d769800]{height:1.25rem;gap:.25rem;background-color:transparent;padding:0;color:var(--primary)}.url[data-v-9d769800]:hover{text-decoration-line:underline}.default.has-icon[data-v-9d769800]{padding:.625rem}.default[data-v-9d769800] .mini-icon{height:1.25rem;width:1.25rem}.default[data-v-9d769800] .mini-icon svg{stroke-width:1.75}.small[data-v-9d769800]{height:2rem;padding-left:.75rem;padding-right:.75rem}.small.has-icon[data-v-9d769800]{width:2rem;border-radius:9999px}.small[data-v-9d769800] .mini-icon{height:1rem;width:1rem}.small[data-v-9d769800] .mini-icon svg{stroke-width:2}.medium[data-v-9d769800]{height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:1.5rem}.medium[data-v-9d769800] .mini-icon{height:1.5rem;width:1.5rem}.medium.has-icon[data-v-9d769800]{padding:.75rem}.large[data-v-9d769800]{height:3.5rem;padding-left:1.75rem;padding-right:1.75rem;font-size:1rem;line-height:1.5rem}.large[data-v-9d769800] .mini-icon{height:1.5rem;width:1.5rem}.large.has-icon[data-v-9d769800]{padding:1.25rem}[data-v-9d769800] .hotkey{margin-left:.25rem}.micro-icon[data-v-c54501b9]{display:flex;height:1rem;width:1rem;flex-shrink:0}.micro-icon[data-v-c54501b9]:where(.dark,.dark *){color:var(--body-text)}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}.expand-top-enter-active[data-v-c3a8c779],.expand-bottom-enter-active[data-v-c3a8c779],.expand-left-enter-active[data-v-c3a8c779],.expand-right-enter-active[data-v-c3a8c779],.expand-top-leave-active[data-v-c3a8c779],.expand-bottom-leave-active[data-v-c3a8c779],.expand-left-leave-active[data-v-c3a8c779],.expand-right-leave-active[data-v-c3a8c779]{transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.expand-top-enter-from[data-v-c3a8c779]{--tw-translate-y: 50%;--tw-scale-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.expand-top-enter-to[data-v-c3a8c779]{--tw-translate-y: 0px;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-top-leave-from[data-v-c3a8c779]{--tw-translate-y: 100%;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-top-leave-to[data-v-c3a8c779]{--tw-translate-y: 50%;--tw-scale-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.expand-bottom-enter-from[data-v-c3a8c779]{--tw-translate-y: -50%;--tw-scale-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.expand-bottom-enter-to[data-v-c3a8c779]{--tw-translate-y: 0px;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-bottom-leave-from[data-v-c3a8c779]{--tw-translate-y: -100%;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-bottom-leave-to[data-v-c3a8c779]{--tw-translate-y: -50%;--tw-scale-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.expand-left-enter-from[data-v-c3a8c779]{--tw-translate-x: 50%;--tw-scale-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.expand-left-enter-to[data-v-c3a8c779]{--tw-translate-x: 0px;--tw-scale-x: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-left-leave-from[data-v-c3a8c779]{--tw-translate-x: -100%;--tw-scale-x: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-left-leave-to[data-v-c3a8c779]{--tw-translate-x: 50%;--tw-scale-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.expand-right-enter-from[data-v-c3a8c779]{--tw-translate-x: -50%;--tw-scale-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.expand-right-enter-to[data-v-c3a8c779]{--tw-translate-x: 0px;--tw-scale-x: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-right-leave-from[data-v-c3a8c779]{--tw-translate-x: 100%;--tw-scale-x: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.expand-right-leave-to[data-v-c3a8c779]{--tw-translate-x: -50%;--tw-scale-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.floating-container-overlay-container[data-v-870bfd15]{pointer-events:none;position:absolute;left:0;top:0;display:contents;--tw-contain-layout: layout;contain:var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)}.floating-container-overlay-container .floating-container-overlay[data-v-870bfd15]{pointer-events:none;position:absolute;left:0;top:0;bottom:0;right:0;display:flex}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-870bfd15]{pointer-events:auto;position:absolute;margin:0;height:-moz-max-content;height:max-content;width:-moz-max-content;width:max-content;overflow:visible;background-color:transparent;padding:0}.tooltip-wrapper[data-v-716fecfb]{display:contents}.tooltip[data-v-716fecfb]{display:flex;justify-content:center;word-break:break-all;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));padding:.5rem 1rem;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1));--tw-drop-shadow: drop-shadow(0 2px 4px rgba(0,0,0,.24));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.tooltip[data-v-716fecfb]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity, 1))}.tooltip[data-v-716fecfb]:before{position:absolute;display:block;width:0px;border-width:8px;border-style:solid;border-color:transparent;--tw-content: "";content:var(--tw-content)}.tooltip.top[data-v-716fecfb]{margin-bottom:.5rem}.tooltip.top[data-v-716fecfb]:before{left:50%;bottom:0;--tw-translate-x: -50%;--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-width:0px;--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.tooltip.top[data-v-716fecfb]:where(.dark,.dark *):before{--tw-border-opacity: 1;border-top-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.tooltip.top.inverted[data-v-716fecfb]:before{--tw-border-opacity: 1;border-top-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.tooltip.top.inverted[data-v-716fecfb]:where(.dark,.dark *):before{border-top-color:var(--child-alt)}.tooltip.top.left[data-v-716fecfb]:before{left:20%}.tooltip.top.right[data-v-716fecfb]:before{left:80%}.tooltip.right[data-v-716fecfb]:not(.bottom):not(.top){margin-left:.5rem}.tooltip.right[data-v-716fecfb]:not(.bottom):not(.top):before{left:0;top:50%;--tw-translate-x: -100%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-left-width:0px;--tw-border-opacity: 1;border-right-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.tooltip.right[data-v-716fecfb]:not(.bottom):not(.top):where(.dark,.dark *):before{--tw-border-opacity: 1;border-right-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.tooltip.right:not(.bottom):not(.top).inverted[data-v-716fecfb]:before{--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.tooltip.right:not(.bottom):not(.top).inverted[data-v-716fecfb]:where(.dark,.dark *):before{border-right-color:var(--child-alt)}.tooltip.bottom[data-v-716fecfb]{margin-top:.5rem}.tooltip.bottom[data-v-716fecfb]:before{left:50%;top:0;--tw-translate-x: -50%;--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-top-width:0px;--tw-border-opacity: 1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.tooltip.bottom[data-v-716fecfb]:where(.dark,.dark *):before{--tw-border-opacity: 1;border-bottom-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.tooltip.bottom.inverted[data-v-716fecfb]:before{--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.tooltip.bottom.inverted[data-v-716fecfb]:where(.dark,.dark *):before{border-bottom-color:var(--child-alt)}.tooltip.bottom.left[data-v-716fecfb]:before{left:20%}.tooltip.bottom.right[data-v-716fecfb]:before{left:80%}.tooltip.left[data-v-716fecfb]:not(.bottom):not(.top){margin-right:.5rem}.tooltip.left[data-v-716fecfb]:not(.bottom):not(.top):before{right:0;top:50%;--tw-translate-x: 100%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-right-width:0px;--tw-border-opacity: 1;border-left-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.tooltip.left[data-v-716fecfb]:not(.bottom):not(.top):where(.dark,.dark *):before{--tw-border-opacity: 1;border-left-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.tooltip.left:not(.bottom):not(.top).inverted[data-v-716fecfb]:before{--tw-border-opacity: 1;border-left-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.tooltip.left:not(.bottom):not(.top).inverted[data-v-716fecfb]:where(.dark,.dark *):before{border-left-color:var(--child-alt)}.tooltip.inverted[data-v-716fecfb]{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.tooltip.inverted[data-v-716fecfb]:where(.dark,.dark *){background-color:var(--child-alt)}.copy-button[data-v-0f8bdcec]{display:inline-flex;flex-direction:row;align-items:center;gap:.5rem;border-radius:.5rem;background-color:var(--tertiary);padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem;font-weight:400;color:var(--body-text)}.copy-button[data-v-0f8bdcec]:hover{background-color:var(--tertiary-hover)}.copy-button[data-v-0f8bdcec]:active{background-color:var(--tertiary-pressed)}.copy-button .micro-icon[data-v-0f8bdcec] svg{stroke-width:2}.check-icon[data-v-0f8bdcec]{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.copy-icon-button[data-v-0f8bdcec]{width:-moz-fit-content;width:fit-content;border-radius:.5rem!important}.copy-icon-button.small[data-v-0f8bdcec]{height:2rem;padding-left:.5rem;padding-right:.5rem}.copy-icon-button.small .micro-icon[data-v-0f8bdcec] svg{stroke-width:2}.copy-icon-button.medium[data-v-0f8bdcec]{height:2.5rem;padding-left:.625rem;padding-right:.625rem}.copy-icon-button.medium .mini-icon[data-v-0f8bdcec]{height:1.25rem;width:1.25rem}.copy-icon-button.large[data-v-0f8bdcec]{height:3rem;padding-left:.75rem;padding-right:.75rem}.segmented-control.default[data-v-863eb33c]{position:relative;display:grid;grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;gap:.25rem;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1));padding:.25rem}.segmented-control.default[data-v-863eb33c]:where(.dark,.dark *){background-color:var(--parent-bg)}.segmented-control.default[data-v-863eb33c] .segment{z-index:10;overflow-wrap:break-word}@media screen and (max-width: 640px){.segmented-control.default[data-v-863eb33c] .segment{word-break:break-all}}.segmented-control.default[data-v-863eb33c] .active{color:var(--primary)}.segmented-control.default[data-v-863eb33c] .active:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity, 1))}.segmented-control.default[data-v-863eb33c] .active .mini-icon:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity, 1))}.segmented-control.default .highlight[data-v-863eb33c]{pointer-events:none;position:absolute;inset-inline-start:.25rem;top:.25rem;bottom:.25rem;margin-inline-start:0px!important;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-duration:.2s}.segmented-control.default .highlight[data-v-863eb33c]:where(.dark,.dark *){background-color:var(--child)}.segmented-control.buttons[data-v-863eb33c]{display:flex;flex-direction:row;gap:.5rem}.segmented-control.buttons[data-v-863eb33c] .segment{font-weight:400}.segmented-control.buttons[data-v-863eb33c] .active{border-width:2px;border-color:var(--primary);padding-left:.6875rem;padding-right:.6875rem}.switch[data-v-2fb52196]{position:relative;display:inline-flex;height:1.5rem;width:2.75rem;flex-shrink:0;cursor:pointer;border-radius:9999px;border-width:2px;border-color:transparent;--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity, 1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.switch[data-v-2fb52196]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-color: var(--primary);--tw-ring-offset-width: 2px }.switch[data-v-2fb52196]:where(.dark,.dark *){background-color:var(--input-bg);outline-style:solid;outline-width:2px;outline-color:#334155}.switch.enabled[data-v-2fb52196]{background-color:var(--primary-light)}.switch[data-v-2fb52196]:disabled{cursor:not-allowed;--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.switch:disabled .dot[data-v-2fb52196]{--tw-bg-opacity: 1;background-color:rgb(163 163 163 / var(--tw-bg-opacity, 1))}.switch .dot[data-v-2fb52196]{pointer-events:none;display:inline-block;height:1.25rem;width:1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.switch .dot[data-v-2fb52196]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity, 1))}.switch .dot.enabled[data-v-2fb52196]{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.accordion-item[data-v-a8ed619d]{width:100%;overflow:hidden;background-color:var(--child);--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.accordion-item[data-v-a8ed619d]{border-radius:1rem}}.accordion-item .header[data-v-a8ed619d]{display:flex;width:100%;align-items:center;border-style:none;background-color:inherit;padding:1rem}.accordion-item .header[data-v-a8ed619d]:focus{background-color:var(--secondary-hover)}@media (min-width: 640px){.accordion-item .header[data-v-a8ed619d]{min-height:4.5rem;padding-left:1.5rem;padding-right:1.5rem}}.header .state-indicator[data-v-a8ed619d]{margin-left:auto}.state-indicator .icon[data-v-a8ed619d]{color:var(--primary-light)}.header .title[data-v-a8ed619d],.header .title[data-v-a8ed619d-s]{text-align:left;font-weight:500;color:var(--body-text)}.accordion-item .content[data-v-a8ed619d]{padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;padding-top:0}@media (min-width: 640px){.accordion-item .content[data-v-a8ed619d]{padding-left:1.5rem;padding-right:1.5rem}}.state-indicator[data-v-a8ed619d]{padding-left:.5rem}.state-indicator .icon[data-v-a8ed619d]{transform:rotate(0);transition:transform .3s linear}.state-indicator.open .icon[data-v-a8ed619d]{transform:rotate(180deg);transition:transform .3s linear}.grow-enter-active[data-v-a8ed619d],.grow-leave-active[data-v-a8ed619d]{transition-property:all;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.fade-enter-active[data-v-a8ed619d],.fade-leave-active[data-v-a8ed619d]{transition-property:all;transition-duration:.1s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.grow-enter-from[data-v-a8ed619d],.grow-leave-to[data-v-a8ed619d]{height:0px!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-a8ed619d],.fade-leave-to[data-v-a8ed619d]{height:0px!important;opacity:0}.accordion[data-v-83cfa0c5]{display:flex;flex-direction:column;gap:.125rem}@media (min-width: 640px){.accordion[data-v-83cfa0c5]{gap:.5rem}}.amount-input-container[data-v-4ee7c329]{display:flex;flex-direction:column}.amount-input[data-v-4ee7c329]{display:flex;height:2.5rem;color:var(--body-text)}.amount-input.small[data-v-4ee7c329]{height:2rem}.amount-input.small .minus[data-v-4ee7c329],.amount-input.small .plus[data-v-4ee7c329]{width:2rem}.input[data-v-4ee7c329],.minus[data-v-4ee7c329],.plus[data-v-4ee7c329]{border-width:1px;border-style:solid;border-color:var(--border-primary)}.input[data-v-4ee7c329]:disabled,.minus[data-v-4ee7c329]:disabled,.plus[data-v-4ee7c329]:disabled{border-color:var(--input-disabled-border);background-color:var(--disabled)}.input[data-v-4ee7c329]:disabled{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.minus[data-v-4ee7c329]:disabled,.plus[data-v-4ee7c329]:disabled{color:var(--disabled-text)}.minus[data-v-4ee7c329]:hover:not(:disabled),.plus[data-v-4ee7c329]:hover:not(:disabled){z-index:20;border-color:var(--border-primary-hover);background-color:var(--secondary-hover)}.minus[data-v-4ee7c329]:focus:not(:disabled),.plus[data-v-4ee7c329]:focus:not(:disabled){z-index:20;border-color:var(--border-primary-hover);background-color:var(--secondary-pressed)}.input[data-v-4ee7c329]{z-index:10;margin-left:-1px;margin-right:-1px;width:3.5rem;background-color:var(--input-bg);text-align:center;font-weight:400}.input[data-v-4ee7c329]:hover:not(:disabled):not(.has-error){border-color:var(--border-primary-hover)}.input[data-v-4ee7c329]:focus:not(:disabled){border-width:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.input[data-v-4ee7c329]:focus-visible{outline:2px solid transparent;outline-offset:2px}.input[data-v-4ee7c329]:focus:not(:disabled):not(.has-error){border-color:var(--primary-light)}.input.has-error[data-v-4ee7c329],.input.has-error[data-v-4ee7c329]:focus{border-color:var(--error-tertiary)}.minus[data-v-4ee7c329],.plus[data-v-4ee7c329]{display:flex;width:2.5rem;align-items:center;justify-content:center;background-color:var(--input-bg)}.minus[data-v-4ee7c329]{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.plus[data-v-4ee7c329]{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.input[data-v-4ee7c329]::-webkit-outer-spin-button,.input[data-v-4ee7c329]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-4ee7c329]{-moz-appearance:textfield}.error[data-v-4ee7c329]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.input-container[data-v-4e9957d5]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-4e9957d5]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-4e9957d5]{stroke:var(--error-tertiary)}.input-container.has-error .icon.has-error[data-v-4e9957d5]{fill:var(--error-tertiary);stroke:#fff}.container-inner[data-v-4e9957d5]{position:relative;width:100%}.container-inner .inline-container-prepended[data-v-4e9957d5],.container-inner .inline-container-appended[data-v-4e9957d5]{position:absolute;top:50%;z-index:20;display:flex;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));justify-content:center}.container-inner .inline-container-prepended .icon[data-v-4e9957d5],.container-inner .inline-container-appended .icon[data-v-4e9957d5]{height:1.25rem;width:1.25rem}.container-inner .inline-container-prepended .text[data-v-4e9957d5],.container-inner .inline-container-appended .text[data-v-4e9957d5]{font-size:.875rem;line-height:1.25rem;color:var(--input-inline)}.container-inner .inline-container-prepended[data-v-4e9957d5]{left:1rem}.container-inner .inline-container-appended[data-v-4e9957d5]{right:1rem;transform:translateY(-50%)}.input-label[data-v-4e9957d5]{margin-bottom:.25rem;display:flex;font-size:.875rem;line-height:1.25rem}.input-label .label-text[data-v-4e9957d5]{display:flex;align-items:center;gap:.5625rem}.input-label .label-text .info-icon[data-v-4e9957d5]{height:.875rem;width:.875rem}.input-label .optional[data-v-4e9957d5]{margin-left:auto;padding-left:.25rem;font-weight:400;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.input-label .optional[data-v-4e9957d5]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.input[data-v-4e9957d5]{box-sizing:border-box;height:2.5rem;width:100%;border-radius:.5rem;border-width:1px;border-style:solid;border-color:var(--input-border);background-color:var(--input-bg);padding-left:1rem;padding-right:1rem;padding-top:0;padding-bottom:0;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity, 1));--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.input[data-v-4e9957d5]::-moz-placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity, 1))}.input[data-v-4e9957d5]::placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity, 1))}.input[data-v-4e9957d5]:hover{border-color:var(--border-primary-hover)}.input[data-v-4e9957d5]:focus{border-width:2px;border-color:var(--primary-light);padding-left:15px;padding-right:15px}.input[data-v-4e9957d5]:where(.dark,.dark *){color:var(--body-text)}.input.has-icon-prepended[data-v-4e9957d5]{padding-left:2.5rem}.input.has-icon-prepended[data-v-4e9957d5]:focus{padding-left:39px}.input.has-inline-text[data-v-4e9957d5]{padding-right:2.5rem}.input.has-error[data-v-4e9957d5]{border-color:var(--error-tertiary);color:var(--error-primary)}.input.has-error[data-v-4e9957d5]::-moz-placeholder{color:var(--error-primary)}.input.has-error[data-v-4e9957d5]::placeholder{color:var(--error-primary)}.input.is-valid[data-v-4e9957d5]{border-color:var(--success-tertiary);color:var(--success-primary)}.input.is-valid[data-v-4e9957d5]::-moz-placeholder{color:var(--success-primary)}.input.is-valid[data-v-4e9957d5]::placeholder{color:var(--success-primary)}.input[data-v-4e9957d5]:disabled{border-color:var(--input-disabled-border);background-color:var(--disabled);color:var(--disabled-text)}.input[data-v-4e9957d5]:disabled::-moz-placeholder{color:var(--disabled-text)}.input[data-v-4e9957d5]:disabled::placeholder{color:var(--disabled-text)}.error[data-v-4e9957d5]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.input.medium[data-v-4e9957d5]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-4e9957d5]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-4e9957d5]{height:3.5rem;font-size:1rem;line-height:1.5rem}.status[data-v-d67354bd]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.status[data-v-d67354bd]:where(.dark,.dark *){background-color:var(--input-bg)}.status.done[data-v-d67354bd]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.status.done[data-v-d67354bd]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity, 1))}.done .micro-icon[data-v-d67354bd]{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.done .micro-icon[data-v-d67354bd]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(220 252 231 / var(--tw-text-opacity, 1))}.status.attention[data-v-d67354bd]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.status.attention[data-v-d67354bd]:where(.dark,.dark *){background-color:var(--error-accent)}.attention .micro-icon[data-v-d67354bd]{color:var(--error-secondary)}.attention .micro-icon[data-v-d67354bd]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(254 226 226 / var(--tw-text-opacity, 1))}.alert[data-v-d4c64a42]{display:flex;border-radius:.5rem;padding:1rem}.alert.error[data-v-d4c64a42]{background-color:var(--error-accent)}.alert.warning[data-v-d4c64a42]{background-color:var(--warning-accent)}.alert.success[data-v-d4c64a42]{background-color:var(--success-accent)}.alert.info[data-v-d4c64a42]{background-color:var(--info-accent)}.alert .icon[data-v-d4c64a42]{margin-right:.75rem}.alert .content[data-v-d4c64a42]{display:flex;flex-direction:column;justify-content:center;gap:.25rem;font-size:.875rem;line-height:1.25rem}.alert .content .title[data-v-d4c64a42]{font-weight:500}.error .icon .mini-icon[data-v-d4c64a42]{color:var(--error-tertiary)}.error .content .title[data-v-d4c64a42]{color:var(--error-primary)}.error .content .description[data-v-d4c64a42]{color:var(--error-secondary)}.warning .icon .mini-icon[data-v-d4c64a42]{color:var(--warning-tertiary)}.warning .content .title[data-v-d4c64a42]{color:var(--warning-primary)}.warning .content .description[data-v-d4c64a42]{color:var(--warning-secondary)}.success .icon .mini-icon[data-v-d4c64a42]{color:var(--success-tertiary)}.success .content .title[data-v-d4c64a42]{color:var(--success-primary)}.success .content .description[data-v-d4c64a42]{color:var(--success-secondary)}.info .icon .mini-icon[data-v-d4c64a42]{color:var(--info-tertiary)}.info .content .title[data-v-d4c64a42]{color:var(--info-primary)}.info .content .description[data-v-d4c64a42]{color:var(--info-secondary)}.configurator-step.simple[data-v-10575098]{width:100%;overflow:hidden;background-color:var(--child);--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.configurator-step.simple[data-v-10575098]{border-radius:1rem}}.configurator-step.simple .content[data-v-10575098]{padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;padding-top:0}@media (min-width: 640px){.configurator-step.simple .content[data-v-10575098]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple[data-v-10575098] .header{display:flex;width:100%;align-items:flex-start;row-gap:1rem;border-style:none;background-color:inherit;padding:1rem}@media (min-width: 640px){.configurator-step.simple[data-v-10575098] .header{min-height:4.5rem;align-items:center;padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple[data-v-10575098] .header .title{text-align:left;font-weight:500;color:var(--body-text)}.configurator-step.simple .inner[data-v-10575098]{display:flex;flex-direction:column;row-gap:1rem}@media (min-width: 640px){.configurator-step.simple .inner[data-v-10575098]{flex-direction:row;align-items:center}}.configurator-step.simple .measurement-inputs[data-v-10575098]{display:flex;align-items:center;gap:.625rem}.measurement-inputs[data-v-10575098] .measurement-input{width:100%;max-width:7rem}.measurement-inputs.has-errors[data-v-10575098]{align-items:flex-start!important}.measurement-inputs.has-errors .separator[data-v-10575098]{margin-top:.5rem}.configurator-step.simple[data-v-10575098] .input::-webkit-outer-spin-button,.configurator-step.simple[data-v-10575098] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple[data-v-10575098] .input[type=number]{-moz-appearance:textfield}.configurator-step.simple .total[data-v-10575098]{margin-left:auto;width:29%;flex-grow:1;text-align:right;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.configurator-step.simple .total[data-v-10575098]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.configurator-step.simple .status-text[data-v-10575098]{width:100%;text-align:right;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}@media (min-width: 640px){.configurator-step.simple .status-text[data-v-10575098]{text-align:left}}.configurator-step.simple .status-text[data-v-10575098]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.label[data-v-05b4dc0c]{display:flex;height:1.5rem;width:-moz-fit-content;width:fit-content;align-items:center;border-radius:.25rem;padding-left:.625rem;padding-right:.625rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.label.small[data-v-05b4dc0c]{height:1.25rem;padding-left:.5rem;padding-right:.5rem;font-size:.75rem;line-height:1rem}.label.blue[data-v-05b4dc0c]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.label.blue[data-v-05b4dc0c]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(219 234 254 / var(--tw-text-opacity, 1))}.label.green[data-v-05b4dc0c]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.label.green[data-v-05b4dc0c]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(220 252 231 / var(--tw-text-opacity, 1))}.label.gray[data-v-05b4dc0c]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.label.gray[data-v-05b4dc0c]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity, 1))}.label.orange[data-v-05b4dc0c]{--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(194 65 12 / var(--tw-text-opacity, 1))}.label.orange[data-v-05b4dc0c]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 237 213 / var(--tw-text-opacity, 1))}.label.purple[data-v-05b4dc0c]{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity, 1))}.label.purple[data-v-05b4dc0c]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(126 34 206 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(243 232 255 / var(--tw-text-opacity, 1))}.label.red[data-v-05b4dc0c]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.label.red[data-v-05b4dc0c]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(254 226 226 / var(--tw-text-opacity, 1))}.label.yellow[data-v-05b4dc0c]{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity, 1))}.label.yellow[data-v-05b4dc0c]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(161 98 7 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(254 249 195 / var(--tw-text-opacity, 1))}.label.alt[data-v-05b4dc0c]{border-radius:.75rem;border-width:1px;font-size:.75rem;line-height:1rem}.label.alt.white[data-v-05b4dc0c]{--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(23 23 23 / var(--tw-text-opacity, 1))}.label.alt.gray[data-v-05b4dc0c]{border-color:#3741511a;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(23 23 23 / var(--tw-text-opacity, 1))}.label.alt.orange[data-v-05b4dc0c]{border-color:#c2730c1a;--tw-bg-opacity: 1;background-color:rgb(255 247 237 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(124 45 18 / var(--tw-text-opacity, 1))}.label.alt.blue[data-v-05b4dc0c]{border-color:#1d65d81a;--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.label.alt.green[data-v-05b4dc0c]{border-color:#16803a1a;--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(20 83 45 / var(--tw-text-opacity, 1))}.label.alt.red[data-v-05b4dc0c]{border-color:#b32c221a;--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.label.alt.purple[data-v-05b4dc0c]{border-color:#7522ce1a;--tw-bg-opacity: 1;background-color:rgb(250 245 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(88 28 135 / var(--tw-text-opacity, 1))}.label.alt.yellow[data-v-05b4dc0c]{border-color:#a162071a;--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.image-wrapper[data-v-ef69e0e6]{display:block;height:100%;width:100%}.image-wrapper[data-v-ef69e0e6]:where(.dark,.dark *){opacity:.8}.image.rounded-4[data-v-ef69e0e6],.skeleton.rounded-4[data-v-ef69e0e6]{border-radius:.25rem}.image.rounded-8[data-v-ef69e0e6],.skeleton.rounded-8[data-v-ef69e0e6]{border-radius:.5rem}.image.rounded-16[data-v-ef69e0e6],.skeleton.rounded-16[data-v-ef69e0e6]{border-radius:1rem}.image.rounded-100[data-v-ef69e0e6],.skeleton.rounded-100[data-v-ef69e0e6]{border-radius:9999px}.image-wrapper .skeleton[data-v-ef69e0e6]{height:100%;width:100%}@keyframes pulse-ef69e0e6{50%{opacity:.5}}.image-wrapper .skeleton[data-v-ef69e0e6]{animation:pulse-ef69e0e6 2s cubic-bezier(.4,0,.6,1) infinite;--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity, 1))}.image-wrapper .skeleton[data-v-ef69e0e6]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.labels[data-v-a1b01f53]{position:absolute;top:.75rem;right:.75rem;z-index:10;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}[data-v-a1b01f53] .image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.amount[data-v-a1b01f53]{margin-top:2.75rem;display:flex;flex-direction:column;align-items:center;row-gap:.5rem}.amount span[data-v-a1b01f53]{font-size:.875rem;line-height:1.25rem}.information[data-v-0c62bb25],.custom-value[data-v-0c62bb25]{display:flex;align-items:center;justify-content:space-between;font-size:.75rem;line-height:1rem}.custom-value[data-v-0c62bb25]{gap:1rem}.custom-value[data-v-0c62bb25] .input-container,.custom-value[data-v-0c62bb25] .button{width:100%;max-width:7.25rem}.information .delivery[data-v-0c62bb25]{display:flex;align-items:center;-moz-column-gap:.25rem;column-gap:.25rem;--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.information .delivery[data-v-0c62bb25]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity, 1))}.information .delivery .icon[data-v-0c62bb25]{height:1rem;width:1rem;--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.information .delivery .icon[data-v-0c62bb25]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity, 1))}.information .delivery .icon[data-v-0c62bb25] svg{stroke-width:2}.information .delivery .delivery-time[data-v-0c62bb25]{font-weight:500}.information .price[data-v-0c62bb25]{margin-left:auto;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.information .price[data-v-0c62bb25]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity, 1))}.price .price-per[data-v-0c62bb25]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.price .price-per[data-v-0c62bb25]:where(.dark,.dark *){color:var(--body-text)}.not-available[data-v-0c62bb25]{display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem;color:var(--error-secondary)}.not-available[data-v-0c62bb25]:where(.dark,.dark *){color:var(--error-tertiary)}.option-card[data-v-ba1132f5]{display:flex;min-height:16.5rem;width:17.5rem;cursor:pointer;justify-content:center;overflow:hidden;border-radius:.5rem;background-color:var(--child-alt);outline-style:solid;outline-width:1px;outline-color:#d1d5db}.option-card[data-v-ba1132f5]:where(.dark,.dark *){outline:2px solid transparent;outline-offset:2px}.option-card[data-v-ba1132f5]:hover:where(.dark,.dark *){background-color:var(--secondary)}.option-card[data-v-ba1132f5]:hover,.option-card[data-v-ba1132f5]:focus{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.option-card[data-v-ba1132f5]:focus:not(.selected):not(.disabled){outline-style:dotted;outline-width:.1875rem;outline-color:#3b82f6}.option-card.selected[data-v-ba1132f5]{outline-width:.1875rem;outline-color:#2563eb}.option-card.disabled[data-v-ba1132f5]{cursor:default;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1));background-color:var(--disabled)}.option-card.disabled[data-v-ba1132f5]:hover{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.option-card.disabled .content[data-v-ba1132f5] *{color:var(--disabled-text)!important}.option-card.disabled .header[data-v-ba1132f5],.option-card.disabled .content[data-v-ba1132f5]{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.option-card .inner[data-v-ba1132f5]{width:100%}.no-option[data-v-ba1132f5]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.no-option[data-v-ba1132f5] .icon{margin-bottom:1rem;height:3.5rem;width:3.5rem;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.no-option h3[data-v-ba1132f5]{font-size:.875rem;line-height:1.25rem}.header[data-v-ba1132f5]{position:relative;display:flex;height:10.25rem;width:100%;justify-content:center;border-top-left-radius:.25rem;border-top-right-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.header[data-v-ba1132f5]:where(.dark,.dark *){background-color:var(--child-alt)}.option-card .content[data-v-ba1132f5]{padding:1rem 1rem .75rem}.content .title[data-v-ba1132f5]{padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.content .title[data-v-ba1132f5]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity, 1))}.content .description[data-v-ba1132f5]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.content .description[data-v-ba1132f5]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.option-card .footer[data-v-ba1132f5]{padding:1rem;padding-top:0;font-size:.875rem;line-height:1.25rem}.overlay[data-v-f7fd00c0]{pointer-events:auto;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;height:100%;width:100%}.overlay.fixed[data-v-f7fd00c0]{position:fixed!important;z-index:1000}.configurator-step.options[data-v-0f1bc03e] .content{padding-right:0}@media (min-width: 640px){.configurator-step.options[data-v-0f1bc03e] .content{padding-right:1.5rem}}.configurator-step.options[data-v-0f1bc03e] .header .state-indicator{display:none}@media (min-width: 640px){.configurator-step.options[data-v-0f1bc03e] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-0f1bc03e]{display:flex;gap:1rem;overflow-x:scroll;padding:.25rem}@media (min-width: 640px){.configurator-step.options .option-container[data-v-0f1bc03e]{overflow:visible;padding-left:0;padding-right:0}.option-container.show-all[data-v-0f1bc03e]{flex-wrap:wrap}}.option-container .option[data-v-0f1bc03e]{position:relative;display:flex}@media (min-width: 640px){.option-container .option[data-v-0f1bc03e]{min-width:0px}}.option-container .option[data-v-0f1bc03e]:last-child{margin-right:1rem}@media (min-width: 640px){.option-container .option[data-v-0f1bc03e]:last-child{margin-right:0}}.option.hide[data-v-0f1bc03e]{display:flex}@media (min-width: 640px){.option.hide[data-v-0f1bc03e]{display:none}}.option .option-card[data-v-0f1bc03e]{flex-shrink:0}@media (min-width: 640px){.option .option-card[data-v-0f1bc03e]{flex-shrink:1}}.option-container .overlay[data-v-0f1bc03e]{right:0;bottom:0;display:none;height:100%;width:100%;cursor:pointer;align-items:center;justify-content:center;border-radius:.5rem;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 640px){.option-container .overlay[data-v-0f1bc03e]{display:flex}}.configurator-step.options .subtitle[data-v-0f1bc03e]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.configurator-step.options .subtitle[data-v-0f1bc03e]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.configurator-step.options .alert[data-v-0f1bc03e]{margin-top:1rem;margin-right:1rem}@media (min-width: 640px){.configurator-step.options .alert[data-v-0f1bc03e]{margin-right:0}}.delivery-options[data-v-5e507fbf]{margin-top:.125rem;width:100%;background-color:var(--child);padding:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.delivery-options[data-v-5e507fbf]{margin-top:.5rem;border-radius:1rem}}@media (min-width: 768px){.delivery-options[data-v-5e507fbf]{padding:1.5rem}}.header[data-v-5e507fbf]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-5e507fbf]{font-weight:500;color:var(--body-text)}.header .hint[data-v-5e507fbf]{display:none;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.header .hint[data-v-5e507fbf]{display:flex}}.header .hint[data-v-5e507fbf]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity, 1))}.content[data-v-5e507fbf]{display:flex;flex-direction:column;flex-wrap:wrap;gap:1rem}@media (min-width: 768px){.content[data-v-5e507fbf]{flex-direction:row;gap:1.5rem}}.content .option[data-v-5e507fbf]{position:relative;display:flex;flex-direction:column}.content .option[data-v-5e507fbf]:not(.last){border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));padding-bottom:1rem}@media (min-width: 768px){.content .option[data-v-5e507fbf]:not(.last){border-bottom-width:0px;padding-bottom:0}.content .option[data-v-5e507fbf]:not(:first-child){border-left-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));padding-left:1.0625rem}}.option.hide[data-v-5e507fbf]{display:none}.option .day[data-v-5e507fbf],.option .cost[data-v-5e507fbf],.option .no-cost[data-v-5e507fbf]{font-size:.875rem;line-height:1.25rem}.option .cost[data-v-5e507fbf],.option .no-cost[data-v-5e507fbf]{position:absolute;top:0;right:0}@media (min-width: 768px){.option .cost[data-v-5e507fbf],.option .no-cost[data-v-5e507fbf]{position:relative}}.option .day[data-v-5e507fbf]{margin-bottom:.25rem;display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:.5rem;column-gap:.5rem;row-gap:.25rem;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.option .day[data-v-5e507fbf]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity, 1))}.option .date[data-v-5e507fbf]{font-size:1.25rem;line-height:1.75rem;font-weight:500;color:var(--body-text)}@media (min-width: 768px){.option .date[data-v-5e507fbf]{margin-bottom:.75rem}}.option .cost[data-v-5e507fbf]{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.option .cost[data-v-5e507fbf]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity, 1))}.option .no-cost[data-v-5e507fbf]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.option .no-cost[data-v-5e507fbf]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(249 250 251 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.content .button[data-v-5e507fbf]{display:none}}.configurator[data-v-10a8b8e6] .configurator-step .header{overflow:hidden}.configurator[data-v-10a8b8e6] .configurator-step .header .title{margin-right:.5rem;width:100%;overflow:hidden;text-overflow:ellipsis}@media (min-width: 640px){.configurator[data-v-10a8b8e6] .configurator-step .header .title{width:16rem;max-width:16rem;white-space:nowrap}}.configurator[data-v-10a8b8e6] .configurator-step .status{margin-right:1rem}.configurator-step[data-v-10a8b8e6] .subtitle{margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}@media (min-width: 640px){.configurator-step[data-v-10a8b8e6] .subtitle{margin-left:0}}.loader[data-v-10a8b8e6]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-7c5ddc12] .icon{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}h1[data-v-a8012362]:where(.dark,.dark *),h2[data-v-a8012362]:where(.dark,.dark *),h3[data-v-a8012362]:where(.dark,.dark *),h4[data-v-a8012362]:where(.dark,.dark *),h5[data-v-a8012362]:where(.dark,.dark *),h6[data-v-a8012362]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}h1[data-v-a8012362],h2[data-v-a8012362]{font-family:Poppins,Segoe UI,Tahoma,Geneva,Verdana,sans-serif}h3[data-v-a8012362],h4[data-v-a8012362],h5[data-v-a8012362],h6[data-v-a8012362]{font-family:Inter,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h1[data-v-a8012362]{font-size:1.75rem;font-weight:600;line-height:2.25rem;letter-spacing:-.8px}h2[data-v-a8012362]{font-size:1.25rem;font-weight:600;line-height:1.75rem;letter-spacing:-.2px}h3[data-v-a8012362]{font-size:1rem;font-weight:600;line-height:1.5rem}h4[data-v-a8012362]{font-size:.875rem;font-weight:600;line-height:1.25rem}h5[data-v-a8012362]{font-size:.875rem;font-weight:500;line-height:1.25rem}h6[data-v-a8012362]{font-size:.75rem;font-weight:600;line-height:1rem}@keyframes minimizedAnimation-a677b84c{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-a677b84c{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-a677b84c{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.modal[data-v-a677b84c]{width:100%;max-width:48rem;--tw-translate-y: 2.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));overflow:hidden;border-radius:1.5rem;background-color:var(--parent-bg);opacity:0;--tw-shadow: 0 0 0 100vmax rgba(10, 10, 10, .5);--tw-shadow-colored: 0 0 0 100vmax var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.modal[data-v-a677b84c]:where(.dark,.dark *){color:var(--body-text)}@media (prefers-reduced-motion){.modal[data-v-a677b84c]{transition-property:none}}.modal[data-v-a677b84c]::backdrop{background-color:transparent}.modal.open[data-v-a677b84c]{display:block;--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.modal.minimized[data-v-a677b84c]{margin-bottom:1.25rem;width:100%;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));animation:1.3s 0s forwards minimizedAnimation-a677b84c}@media (prefers-reduced-motion){.modal.minimized[data-v-a677b84c]{animation:none}}.modal.minimized .inner[data-v-a677b84c]{overflow-y:hidden}.modal.minimized .inner .header[data-v-a677b84c]{overflow-y:hidden;padding:1rem!important}.modal.minimized .inner .header .title[data-v-a677b84c-s]{margin-top:1rem;font-size:1rem!important;line-height:1.5rem!important}.modal.maximized[data-v-a677b84c]{animation:1.3s 0s forwards maximizedAnimation-a677b84c}@media (prefers-reduced-motion){.modal.maximized[data-v-a677b84c]{animation:none}}.modal.fullscreen .inner[data-v-a677b84c]{height:100%;min-height:0px;overflow-y:auto}.modal.fullscreen .inner .header[data-v-a677b84c]{justify-content:flex-start!important;border-top-left-radius:1rem;border-top-right-radius:1rem;padding:2rem 1rem}.modal.fullscreen .inner .content[data-v-a677b84c]{padding:0;padding-bottom:.5rem}.modal.fullscreen .inner .footer[data-v-a677b84c]{margin-top:auto;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.modal.fullscreen .inner .footer[data-v-a677b84c]{margin-left:5.75rem;margin-right:5.75rem;margin-bottom:1.25rem;border-radius:1rem}}.modal.fullscreen[data-v-a677b84c]:not(.minimized){margin-top:3.5rem;height:calc(100vh - 3.5rem);max-width:100%;overflow:visible;border-bottom-right-radius:0;border-bottom-left-radius:0}@media (min-width: 640px){.modal.fullscreen:not(.minimized) .header[data-v-a677b84c],.modal.fullscreen:not(.minimized) .content[data-v-a677b84c]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen[data-v-a677b84c]:not(.minimized):modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-a677b84c]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-a677b84c]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-a677b84c]{width:100%;--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity, 1))}.modal:not(.fullscreen) .footer[data-v-a677b84c]:where(.dark,.dark *){background-color:var(--child)}.modal:not(.fullscreen) .footer.footer-shadow[data-v-a677b84c]{filter:drop-shadow(0 -1px 2px rgb(0 0 0 / .1)) drop-shadow(0 -1px 1px rgb(0 0 0 / .06))}.modal.persistent-animation[data-v-a677b84c]{animation:horizontal-shaking-a677b84c .3s ease-in-out}.modal .actions[data-v-a677b84c]{position:absolute;top:-3.5rem;display:flex;height:3.5rem;width:100%;align-items:center;justify-content:flex-end;padding-left:.5625rem;padding-right:.5625rem}.modal .actions .minimize[data-v-a677b84c],.modal .actions .close[data-v-a677b84c]{padding-left:.9375rem;padding-right:.9375rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.modal .inner[data-v-a677b84c]{display:flex;min-height:-moz-fit-content;min-height:fit-content;flex-direction:column}.modal .inner .header[data-v-a677b84c]{display:flex;align-items:center;background-color:var(--parent-bg)}.modal .inner .header.header-shadow[data-v-a677b84c]{filter:drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06))}.modal .inner .header>.close[data-v-a677b84c]{margin-left:auto}.modal .inner .header>.close[data-v-a677b84c]:focus-visible{background-color:var(--secondary-hover)}.modal .inner .header .minimized-actions[data-v-a677b84c]{margin-left:auto;display:flex;flex-direction:column;gap:.5rem}.modal .inner .title[data-v-a677b84c],.modal .inner .title[data-v-a677b84c-s]{font-size:1.25rem;line-height:1.75rem;font-weight:700}.modal .inner .content[data-v-a677b84c]{overflow-y:auto;padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem}.modal .inner .content .loader[data-v-a677b84c]{margin-left:auto;margin-right:auto;height:2.5rem!important;width:2.5rem!important}.modal .inner .footer[data-v-a677b84c]{z-index:10;display:flex;justify-content:center;gap:.5rem;padding:1.5rem 1rem}.modal .inner .footer[data-v-a677b84c]:where(.dark,.dark *){background-color:var(--child)}.product-config-modal[data-v-86900a3e]::backdrop{--tw-bg-opacity: .8 }[data-v-86900a3e] .header{display:flex;flex-wrap:wrap}@media (min-width: 640px){[data-v-86900a3e] .header{gap:1.5rem}}.header .product-image[data-v-86900a3e]{height:auto;width:4.75rem!important}@media (min-width: 640px){.header .product-image[data-v-86900a3e]{width:8.5rem!important}}.product-image .image[data-v-86900a3e]{height:4.75rem;width:4.75rem}@media (min-width: 640px){.product-image .image[data-v-86900a3e]{width:8.5rem!important}}.header .title[data-v-86900a3e]{margin-bottom:.5rem}.header .subtitle[data-v-86900a3e]{margin-bottom:1rem;display:flex;gap:.625rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.header .subtitle[data-v-86900a3e]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.subtitle .icon[data-v-86900a3e]{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity, 1))}.header .reference[data-v-86900a3e]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.header .reference .value[data-v-86900a3e]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.header .inner[data-v-86900a3e]{max-width:calc(100% - 4.75rem);flex-shrink:1}@media (min-width: 640px){.header .inner[data-v-86900a3e]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-86900a3e]{display:none;max-width:30rem}@media (min-width: 640px){.header .inner .reference-input[data-v-86900a3e]{display:flex}}.header>.reference-input[data-v-86900a3e]{width:100%}@media (min-width: 640px){.header>.reference-input[data-v-86900a3e]{display:none}}.footer-wrapper[data-v-86900a3e]{display:flex;width:100%;align-items:center;justify-content:space-between;gap:.5rem}@media (min-width: 640px){.footer-wrapper[data-v-86900a3e]{flex-wrap:wrap}}.footer-wrapper .specifications[data-v-86900a3e]{display:none}@media (min-width: 640px){.footer-wrapper .specifications[data-v-86900a3e]{display:flex;width:100%}}@media (min-width: 1024px){.footer-wrapper .specifications[data-v-86900a3e]{width:auto}}.footer-wrapper .right[data-v-86900a3e]{margin-left:auto;display:flex;width:100%;align-items:center;justify-content:space-between;gap:1.25rem}@media (min-width: 1024px){.footer-wrapper .right[data-v-86900a3e]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-86900a3e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-86900a3e]{display:none}@media (min-width: 768px){.footer-wrapper .right .add-to-cart .desktop[data-v-86900a3e]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-86900a3e]{display:flex}@media (min-width: 768px){.footer-wrapper .right .add-to-cart .mobile[data-v-86900a3e]{display:none}}.footer-wrapper .right .sub-total[data-v-86900a3e]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-86900a3e]{display:flex;width:100%;max-width:250px;flex-wrap:wrap;gap:.5rem;font-size:.75rem;line-height:1.2rem!important;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}@media (min-width: 640px){.footer-wrapper .right .sub-total .sub-price[data-v-86900a3e]{font-size:.875rem;line-height:1.25rem}}.footer-wrapper .right .sub-total .sub-price[data-v-86900a3e]:where(.dark,.dark *){color:var(--body-text)}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-86900a3e],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-86900a3e]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-86900a3e]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.footer-wrapper .right .sub-total .excluded-from-price[data-v-86900a3e]:where(.dark,.dark *){color:var(--body-text)}.footer-wrapper .right .sub-total .price[data-v-86900a3e]{display:flex;width:100%;font-size:1.875rem;line-height:2.25rem;font-weight:700;--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}@media (min-width: 1024px){.footer-wrapper .right .sub-total .price[data-v-86900a3e]{justify-content:flex-end}}.footer-wrapper .right .sub-total .price[data-v-86900a3e]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity, 1))}.footer-wrapper .right .sub-total .price .label[data-v-86900a3e]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-86900a3e]{vertical-align:super;font-size:1rem;line-height:1.5rem}.footer-wrapper .right .sub-total .price.small[data-v-86900a3e]{font-size:1rem;line-height:1.5rem}@media (min-width: 640px){.footer-wrapper .right .sub-total .price.small[data-v-86900a3e]{font-size:1.5rem;line-height:2rem}}.footer-wrapper .right .sub-total .price.small .decimal[data-v-86900a3e]{font-size:.75rem;line-height:1rem}.card[data-v-7edfeba9]{display:flex;width:17.625rem;cursor:pointer;flex-direction:column;overflow:auto;border-radius:.75rem;background-color:var(--child-alt)}.card[data-v-7edfeba9]:not(.passive):hover,.card[data-v-7edfeba9]:not(.passive):focus{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card[data-v-7edfeba9]:not(.flat){border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.card[data-v-7edfeba9]:not(.flat):where(.dark,.dark *){border-style:none}.card.passive[data-v-7edfeba9]{cursor:default}.card.disabled[data-v-7edfeba9]{cursor:default;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1));background-color:var(--disabled)}.card.disabled[data-v-7edfeba9]:hover{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card.disabled .content[data-v-7edfeba9],.card.disabled[data-v-7edfeba9] .image-wrapper{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.card.dense[data-v-7edfeba9]{width:100%;flex-direction:row;justify-content:flex-start}.card.dense[data-v-7edfeba9] .image-wrapper{height:unset;width:auto;flex-shrink:0}.card.dense .inner[data-v-7edfeba9]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-7edfeba9]{padding-bottom:.25rem}.card.flat[data-v-7edfeba9]:hover{background-color:var(--secondary-hover);--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card[data-v-7edfeba9] .image-wrapper{height:10.25rem}.card[data-v-7edfeba9] .image-wrapper .image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.card .inner[data-v-7edfeba9]{display:flex;width:100%;flex-direction:column;padding:1rem}.card .inner .header[data-v-7edfeba9]{position:relative;display:flex;width:100%;flex-direction:column;border-top-left-radius:.25rem;border-top-right-radius:.25rem;padding-bottom:.5rem}.card .inner .header .title[data-v-7edfeba9]{padding-bottom:.25rem;font-size:1.125rem;line-height:1.75rem}.card .inner .header .subtitle[data-v-7edfeba9]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.card .inner .header .subtitle[data-v-7edfeba9]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity, 1))}.card .inner .content[data-v-7edfeba9]{font-size:.875rem;line-height:1.25rem}.card .inner .footer[data-v-7edfeba9]{padding-top:1rem}[data-v-7bbd67e6]{will-change:height;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}.expand-enter-active[data-v-7bbd67e6],.expand-leave-active[data-v-7bbd67e6]{overflow:hidden;transition-property:height,opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:var(--8bc0d8ee)}.expand-enter-from[data-v-7bbd67e6],.expand-leave-to[data-v-7bbd67e6]{opacity:0}.expand-enter[data-v-7bbd67e6],.expand-leave-to[data-v-7bbd67e6]{height:var(--3ad1d278)}.card[data-v-c0fb4ec0]{width:100%}.card.expanded[data-v-c0fb4ec0]{max-height:var(--6f52f2e4)}.card[data-v-c0fb4ec0] .inner{padding:.25rem}.button[data-v-c0fb4ec0]{margin-top:.25rem;height:auto;width:100%;--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity, 1));padding-top:.625rem;padding-bottom:.625rem;color:var(--primary)}.button[data-v-c0fb4ec0]:where(.dark,.dark *){background-color:var(--child)}.button[data-v-c0fb4ec0]:hover{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.expand-enter-active[data-v-c0fb4ec0],.expand-leave-active[data-v-c0fb4ec0]{transition-property:opacity,height}.expand-enter[data-v-c0fb4ec0],.expand-leave-to[data-v-c0fb4ec0]{opacity:0}.radio-group[data-v-ccc357ce]{pointer-events:none;display:flex;flex-direction:column;gap:.25rem}.radio-group[data-v-ccc357ce] *{pointer-events:auto}.list[data-v-9f29914a]{display:flex;flex-direction:column}.list.grid[data-v-9f29914a]{flex-direction:row;flex-wrap:wrap}.list-item[data-v-04e69d1e]{display:flex;align-items:center;background-color:var(--child);padding:.5rem 1rem;color:var(--body-text);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.list-item.clickable[data-v-04e69d1e]:not([tabindex="-1"]){outline:2px solid transparent;outline-offset:2px}.list-item.clickable[data-v-04e69d1e]:not([tabindex="-1"]):hover{cursor:pointer;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.list-item.clickable[data-v-04e69d1e]:not([tabindex="-1"]):hover:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity, 1))}.list-item.clickable[data-v-04e69d1e]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-04e69d1e]{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.list-item.clickable[data-v-04e69d1e]:not([tabindex="-1"]):focus-visible:where(.dark,.dark *),.list-item.clickable:not([tabindex="-1"]).active[data-v-04e69d1e]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(71 85 105 / var(--tw-bg-opacity, 1))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-04e69d1e]{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-04e69d1e]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(51 65 85 / var(--tw-bg-opacity, 1))}.list-item .prepend[data-v-04e69d1e]{display:flex}.list-item .content[data-v-04e69d1e]{display:flex;flex-direction:column}.list-item .content .title[data-v-04e69d1e]{font-weight:700}.list-item .content .subtitle[data-v-04e69d1e]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.list-item .content .text[data-v-04e69d1e]{font-size:.875rem;line-height:1.25rem}.confirm-modal[data-v-3ea35c52]{max-width:32rem}.confirm-modal .indicator-icon[data-v-3ea35c52]{margin-left:auto;margin-right:auto;width:-moz-fit-content;width:fit-content;border-radius:9999px;padding:.75rem}.confirm-modal .indicator-icon.danger[data-v-3ea35c52]{background-color:var(--error-accent);color:var(--error-secondary)}.confirm-modal .indicator-icon.info[data-v-3ea35c52]{background-color:var(--info-accent);color:var(--info-tertiary)}.confirm-modal .indicator-icon .icon[data-v-3ea35c52]{height:2rem;width:2rem}.confirm-modal .title[data-v-3ea35c52]{margin-top:1rem;margin-bottom:.75rem!important;text-align:center}.confirm-modal .message[data-v-3ea35c52]{text-align:center}.confirm-modal[data-v-3ea35c52] .content{padding-left:2rem!important;padding-right:2rem!important}.virtual-scroll-container[data-v-bddf2f38]{height:100%;width:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-bddf2f38]{display:flex;flex-direction:column}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}.filter-bar-container[data-v-c799fdb7]{position:relative;width:-moz-fit-content;width:fit-content}.filter-bar-container .filter-bar[data-v-c799fdb7]:hover:has(.button:hover){background-color:var(--secondary)}.filter-bar-container .filter-bar .label-container[data-v-c799fdb7]{margin-left:.5625rem;margin-right:2rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-c799fdb7]{overflow:hidden;white-space:nowrap;outline-style:solid;outline-width:2px;outline-color:#fff}.filter-bar-container .filter-bar .label-container.concat .label[data-v-c799fdb7]:not(:first-child){margin-left:-.5rem}.filter-bar-container .filter-bar .label-container.concat .label[data-v-c799fdb7]:not(:last-child){max-width:2.5rem}.filter-bar-container .filter-bar .label-container .label[data-v-c799fdb7]{border-radius:.5rem}.filter-bar-container .clear[data-v-c799fdb7]{position:absolute;top:50%;right:.5rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.overlay[data-v-0696df72]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:60;height:100%;width:100%}.overlay.left .drawer[data-v-0696df72]{left:0}.overlay.right .drawer[data-v-0696df72]{right:0}.overlay.bottom .drawer[data-v-0696df72]{bottom:0;height:auto;width:100%;max-width:100%!important;border-top-left-radius:.75rem;border-top-right-radius:.75rem}.overlay.bottom .drawer .header[data-v-0696df72],.overlay.bottom .drawer .content[data-v-0696df72]{padding:1rem}.overlay.bottom .drawer .content[data-v-0696df72]{padding-top:0}.overlay .drawer[data-v-0696df72]{position:absolute;height:100%;width:-moz-fit-content;width:fit-content;max-width:80%;background-color:var(--parent-bg);--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.overlay .drawer.fullWidth[data-v-0696df72]{width:100%}.overlay .drawer .wrapper[data-v-0696df72]{position:relative;display:flex;height:100%;flex-direction:column;overflow:hidden}.overlay .drawer .header[data-v-0696df72]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1.25rem}.overlay .drawer .header .title[data-v-0696df72]{font-size:1.25rem;line-height:1.75rem}.overlay .drawer .header .close[data-v-0696df72]{--tw-translate-x: .625rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.overlay .drawer .content[data-v-0696df72]{flex-grow:1;overflow-y:auto;padding:1.25rem;padding-top:0}.slide-enter-active[data-v-0696df72],.slide-leave-active[data-v-0696df72],.slide-enter-to[data-v-0696df72]{transition:all .5s ease}.left .slide-enter-active[data-v-0696df72],.left .slide-leave-active[data-v-0696df72]{transform:translate(-100%)}.left .slide-enter-to[data-v-0696df72]{transform:translate(0)}.right .slide-enter-active[data-v-0696df72],.right .slide-leave-active[data-v-0696df72]{transform:translate(100%)}.right .slide-enter-to[data-v-0696df72]{transform:translate(0)}.bottom .slide-enter-active[data-v-0696df72],.bottom .slide-leave-active[data-v-0696df72]{transform:translateY(100%)}.bottom .slide-enter-to[data-v-0696df72]{transform:translateY(0)}.button[data-v-f6ab922e]{width:100%}.select-all[data-v-f6ab922e]{margin-top:1rem;margin-bottom:.5rem}.filter-dropdown[data-v-a9aee170]{margin-top:.5rem;max-height:33.625rem;min-width:16.5rem;border-radius:.75rem;background-color:var(--child);padding:1rem;--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter-dropdown[data-v-a9aee170] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup[data-v-a9aee170] .menu{background-color:inherit!important}.filter-popup[data-v-a9aee170] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.input-container[data-v-b3d4c407] .container-inner .inline-container-appended{margin-right:1.5rem}.input-container[data-v-b3d4c407] .container-inner .inline-container-appended .button{background-color:transparent}.badge[data-v-058eefcc]{position:relative;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:9999px;font-size:.75rem;line-height:1rem;font-weight:500;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.badge.small[data-v-058eefcc]{height:.5rem;width:.5rem}.badge.small.position[data-v-058eefcc]{top:-.125rem;right:-.125rem}.badge.blue[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.badge.blue .pulse[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity, 1))}.badge.green[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity, 1))}.badge.green .pulse[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.badge.gray[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity, 1))}.badge.gray .pulse[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.badge.orange[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity, 1))}.badge.orange .pulse[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(251 146 60 / var(--tw-bg-opacity, 1))}.badge.purple[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(147 51 234 / var(--tw-bg-opacity, 1))}.badge.purple .pulse[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(192 132 252 / var(--tw-bg-opacity, 1))}.badge.red[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity, 1))}.badge.red .pulse[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.badge.yellow[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(250 204 21 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.badge.yellow .pulse[data-v-058eefcc]{--tw-bg-opacity: 1;background-color:rgb(250 204 21 / var(--tw-bg-opacity, 1))}.badge.position[data-v-058eefcc]{position:absolute;top:-.5rem;right:-.75rem}.badge.pulsating .pulse[data-v-058eefcc]{position:absolute;height:100%;width:100%}@keyframes ping-058eefcc{75%,to{transform:scale(2);opacity:0}}.badge.pulsating .pulse[data-v-058eefcc]{animation:ping-058eefcc 1s cubic-bezier(0,0,.2,1) infinite;border-radius:9999px;opacity:.75}.badge.pulsating .content[data-v-058eefcc]{z-index:1}.menu-item[data-v-60085e46]{position:relative;height:100%;background-color:inherit;font-size:.875rem;line-height:1.25rem}.menu-item.title[data-v-60085e46]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.menu-item.title[data-v-60085e46]:where(.dark,.dark *){color:var(--body-text)}.menu-item.simple[data-v-60085e46]{color:var(--primary)}.menu-item.simple[data-v-60085e46]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity, 1))}.menu-item.simple[data-v-60085e46]:hover{text-decoration-line:underline}.menu-item.simple[data-v-60085e46]:not(.first):before{position:absolute;top:50%;margin-left:-1.5rem;display:flex;width:1.5rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));align-items:center;justify-content:center;--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1));--tw-content: "|";content:var(--tw-content)}@media (min-width: 768px){.menu-item.simple[data-v-60085e46]:not(.first):before{margin-left:-3rem;width:3rem}}.menu-item .menu-item-content[data-v-60085e46]{display:flex;height:100%;align-items:center;-moz-column-gap:.75rem;column-gap:.75rem;color:var(--3eaaf628)}.menu-item .menu-item-content .mini-icon[data-v-60085e46]{color:var(--3eaaf628)}.menu-item .menu-item-content .sub-menu-trigger[data-v-60085e46]{height:1rem;width:1rem}.menu-item .menu-item-content .sub-menu-trigger[data-v-60085e46],.menu-item .menu-item-content .append-icon[data-v-60085e46],.menu-item .menu-item-content .count[data-v-60085e46],.menu-item .menu-item-content .hotkey[data-v-60085e46]{margin-left:auto}.menu-item .menu-item-content .count[data-v-60085e46]{border-radius:9999px;border-width:1px;padding:.125rem .625rem;font-size:.75rem;line-height:1rem;font-weight:500}.menu-item .menu-item-content .count[data-v-60085e46]:where(.dark,.dark *){border-color:var(--parent-bg)}.menu-item .menu-item-content .current-item-icon[data-v-60085e46]{margin-left:auto;height:1.25rem;width:1.25rem;color:var(--primary)}.menu-item .menu-item-content .current-item-icon[data-v-60085e46]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity, 1))}.divider[data-v-7f654821]{width:100%;border-color:var(--border-primary)}.divider[data-v-7f654821]:not(.vertical){border-top-width:var(--0705668d)}.divider.vertical[data-v-7f654821]{height:100%;width:.0625rem}.divider.vertical.flex[data-v-7f654821]{height:auto;align-self:stretch}.divider.vertical[data-v-7f654821]{border-left-width:var(--0705668d)}.menu[data-v-476ff14e]{display:flex;align-items:center}.menu[data-v-476ff14e]:not(.vertical):not(.simple){height:100%;gap:1.5rem}.menu[data-v-476ff14e]:not(.vertical):not(.simple) .menu-item{border-bottom-width:.1875rem;border-color:transparent;background-color:transparent;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.menu[data-v-476ff14e]:not(.vertical):not(.simple) .menu-item:where(.dark,.dark *){color:var(--body-text)}.menu[data-v-476ff14e]:not(.vertical):not(.simple) .menu-item:not(.current):hover,.menu[data-v-476ff14e]:not(.vertical):not(.simple) .menu-item:not(.current):focus{border-color:var(--border-primary-hover)}.menu[data-v-476ff14e]:not(.vertical):not(.simple) .menu-item .menu-item-content{font-weight:600}.menu[data-v-476ff14e]:not(.vertical):not(.simple) .current{border-color:var(--primary)}.menu[data-v-476ff14e]:not(.vertical):not(.simple) .current:where(.dark,.dark *){--tw-border-opacity: 1;border-color:rgb(96 165 250 / var(--tw-border-opacity, 1));--tw-text-opacity: 1 !important;color:rgb(96 165 250 / var(--tw-text-opacity, 1))!important}.menu.vertical[data-v-476ff14e]{flex-direction:column;align-items:flex-start;gap:.25rem;background-color:var(--child)}.menu.vertical[data-v-476ff14e] .menu-item{width:100%;border-radius:.5rem;border-style:none;background-color:var(--child);padding:.5rem}.menu.vertical[data-v-476ff14e] .menu-item:where(.dark,.dark *){color:var(--body-text)}.menu.vertical[data-v-476ff14e] .menu-item:not(.current):not(.title):hover{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity, 1))}.menu.vertical[data-v-476ff14e] .menu-item:not(.current):not(.title):hover:where(.dark,.dark *){background-color:var(--child-alt)}.menu.vertical[data-v-476ff14e] .menu-item:not(.current):not(.title):focus{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.menu.vertical[data-v-476ff14e] .menu-item:not(.current):not(.title):focus:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(71 85 105 / var(--tw-bg-opacity, 1))}.menu.vertical[data-v-476ff14e] .menu-item .sub-menu-trigger{margin-right:.125rem;--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.menu.vertical[data-v-476ff14e] .divider{margin-top:.3125rem;margin-bottom:.3125rem}.menu.vertical[data-v-476ff14e] .current{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.menu.vertical[data-v-476ff14e] .current:where(.dark,.dark *){background-color:var(--tertiary)}.menu.simple[data-v-476ff14e]{flex-wrap:wrap;justify-content:center;gap:1.5rem}@media (min-width: 768px){.menu.simple[data-v-476ff14e]{gap:3rem}}.menu.mini[data-v-476ff14e] .count{display:none}.menu[data-v-476ff14e] .current{border-color:var(--primary);color:var(--primary)!important}.menu[data-v-476ff14e] .current .icon{color:var(--primary)}.sub-menu[data-v-476ff14e]{width:16.5rem;border-radius:.75rem;background-color:var(--child);padding:.75rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.inputs[data-v-d855f3f4]{margin-top:1rem;margin-bottom:1rem}.inputs .input-from[data-v-d855f3f4],.inputs .to[data-v-d855f3f4]{margin-bottom:.5rem}.inputs .to[data-v-d855f3f4]{display:block;text-align:center;font-size:.875rem;line-height:1.25rem;color:var(--body-text)}.checkbox-container[data-v-5fadac35]{display:flex;width:100%;flex-direction:column}.checkbox-container.large .label[data-v-5fadac35]{gap:.75rem}.checkbox-container.large .checkbox[data-v-5fadac35]{margin-top:0;height:1.25rem;width:1.25rem}.label[data-v-5fadac35]{display:flex;cursor:pointer;align-items:flex-start;gap:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:400;color:var(--body-text)}.checkbox[data-v-5fadac35]{margin-top:.125rem;border-radius:.25rem;border-width:1px;border-color:var(--input-border);background-color:var(--input-bg);color:var(--primary-light)}.checkbox[data-v-5fadac35]:not(:disabled):hover{border-color:var(--border-primary-hover)}.checkbox[data-v-5fadac35]:checked,.checkbox[data-v-5fadac35]:indeterminate{border-color:var(--primary-light);background-color:var(--primary-light)}.checkbox[data-v-5fadac35]:disabled{border-color:var(--border-primary);--tw-bg-opacity: 1 !important;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))!important}.checkbox[data-v-5fadac35]:not(:disabled):checked:hover,.checkbox[data-v-5fadac35]:not(:disabled):indeterminate:hover{border-color:var(--primary);color:var(--primary)}.checkbox[data-v-5fadac35]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-5fadac35]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(156, 163, 175)' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-5fadac35]{border-color:var(--error-secondary);outline-color:var(--error-secondary)}.error .error-message[data-v-5fadac35]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.append[data-v-5fadac35]{margin-left:auto;font-weight:400}.search[data-v-db944964]{margin-bottom:1rem}.list[data-v-db944964]{max-height:21.625rem;overflow-y:auto;overflow-x:visible;padding:.25rem;font-size:.875rem;line-height:1.25rem}.group-checkbox[data-v-db944964] .label{font-weight:700}.filter-group[data-v-7e9e04c1]{display:flex;flex-wrap:wrap;align-items:flex-start;gap:.5rem}.filter-group .title[data-v-7e9e04c1]{margin-right:.25rem;display:none;text-wrap:nowrap;font-size:.875rem;line-height:2.5rem;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.filter-group .title[data-v-7e9e04c1]{display:block}}.filter-group .title[data-v-7e9e04c1]:where(.dark,.dark *){color:var(--body-text)}.filter-group .base-filter[data-v-7e9e04c1]{text-wrap:nowrap}.filter-group .button[data-v-7e9e04c1]{margin-top:.25rem;text-wrap:nowrap;font-weight:400;color:var(--primary)}.table-wrapper[data-v-06467889]{position:relative;width:100%;overflow:clip;border-radius:.5rem}.table-wrapper table[data-v-06467889]{width:100%;background-color:var(--body);font-size:.875rem;line-height:1.25rem}.table-wrapper .sticky-container[data-v-06467889]{position:sticky;bottom:0;z-index:10}.table-wrapper .sticky-container .scrollbar[data-v-06467889]{display:flex;height:.75rem;align-items:center;background-color:var(--secondary-hover)}.table-wrapper .sticky-container .scrollbar[data-v-06467889]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(50 55 70 / var(--tw-bg-opacity, 1))}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-06467889]{position:absolute;height:.5rem;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-06467889]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(120 130 160 / var(--tw-bg-opacity, 1))}thead[data-v-83c8869d]{position:sticky;top:0;z-index:10;background-color:var(--body)}thead[data-v-83c8869d] tr td{font-weight:500;--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity, 1))}thead[data-v-83c8869d] tr td:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}thead[data-v-83c8869d] tr td input{font-weight:400}thead[data-v-83c8869d] tr td{--tw-shadow: inset 0 -1px 0 0 #e5e7eb;--tw-shadow-colored: inset 0 -1px 0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}thead[data-v-83c8869d] tr td:where(.dark,.dark *){--tw-shadow: inset 0 -1px 0 0 var(--table-row-border-color);--tw-shadow-colored: inset 0 -1px 0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}tbody[data-v-efa3a81b] tr:not(:last-child){border-bottom-width:1px;border-style:solid;border-color:var(--table-row-border-color)}td[data-v-d11a71a3]{padding-left:1rem;padding-right:1rem;vertical-align:middle;--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity, 1))}td[data-v-d11a71a3]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity, 1))}tr[data-v-15e10af8]{height:3.5rem;max-height:3rem;min-height:3.5rem}.no-results-row[data-v-66a85a78]{position:relative;height:16rem}.no-results-row td[data-v-66a85a78]{position:absolute;height:100%;width:100%;overflow:hidden;white-space:nowrap}.no-results-row td .wrapper[data-v-66a85a78]{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;text-wrap:wrap;padding:1rem}.no-results-row td .wrapper .icon[data-v-66a85a78]{height:3rem;width:3rem;stroke:#737373}.no-results-row td .wrapper h2[data-v-66a85a78]{font-size:1.25rem;line-height:1.75rem;font-weight:600}.no-results-row td .wrapper span[data-v-66a85a78]{text-align:center;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1))}.pagination[data-v-dcf7fbae]{display:flex;gap:.5rem}.pagination .button[data-v-dcf7fbae]{position:relative}.pagination .button[data-v-dcf7fbae]:not(:disabled){color:var(--primary)}.pagination .button[data-v-dcf7fbae]:not(:disabled):not(.current){color:var(--body-text)}.pagination .button[data-v-dcf7fbae]:not(:disabled) .icon{height:1.25rem;width:1.25rem}.pagination .button[data-v-dcf7fbae]:not(:first-child):not(:last-child){display:none;width:2.5rem}@media (min-width: 768px){.pagination .button[data-v-dcf7fbae]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-dcf7fbae]:not(:disabled):hover{border-color:var(--border-primary)}.pagination .button.current[data-v-dcf7fbae]{border-width:2px;border-color:var(--primary)}.pagination .button .button-text[data-v-dcf7fbae]{display:none}@media (min-width: 768px){.pagination .button .button-text[data-v-dcf7fbae]{display:block}}.pagination .dotdotdot[data-v-dcf7fbae]{display:none;align-self:center}@media (min-width: 768px){.pagination .dotdotdot[data-v-dcf7fbae]{display:inline-block}}.skeleton[data-v-b9fa218d]{display:block;height:1.25rem}@keyframes pulse-b9fa218d{50%{opacity:.5}}.skeleton[data-v-b9fa218d]{animation:pulse-b9fa218d 2s cubic-bezier(.4,0,.6,1) infinite;--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity, 1))}.skeleton[data-v-b9fa218d]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.skeleton.has-content[data-v-b9fa218d]{height:auto}.skeleton.circular[data-v-b9fa218d]{border-radius:50%}.skeleton.text[data-v-b9fa218d]{--tw-scale-y: .7;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:.25rem}.skeleton.text[data-v-b9fa218d]:not(.has-content){height:auto;color:inherit}.skeleton.text[data-v-b9fa218d]:not(.has-content):before{--tw-content: " ";content:var(--tw-content)}.skeleton [data-v-b9fa218d-s]{visibility:hidden}.base-select[data-v-faeda570]:focus{outline:2px solid transparent;outline-offset:2px}.base-select.disabled .wrapper[data-v-faeda570]{pointer-events:none;border-color:var(--input-disabled-border);background-color:var(--disabled)}.base-select.disabled .wrapper[data-v-faeda570]:hover{border-color:var(--border-primary)}.base-select.disabled .wrapper input[data-v-faeda570],.base-select.disabled .wrapper .placeholder[data-v-faeda570],.base-select.disabled .wrapper .selected-item[data-v-faeda570]{background-color:var(--disabled);color:var(--disabled-text)}.base-select.disabled .wrapper input[data-v-faeda570]::-moz-placeholder,.base-select.disabled .wrapper .placeholder[data-v-faeda570]::-moz-placeholder,.base-select.disabled .wrapper .selected-item[data-v-faeda570]::-moz-placeholder{color:var(--disabled-text)}.base-select.disabled .wrapper input[data-v-faeda570]::placeholder,.base-select.disabled .wrapper .placeholder[data-v-faeda570]::placeholder,.base-select.disabled .wrapper .selected-item[data-v-faeda570]::placeholder{color:var(--disabled-text)}.base-select.click[data-v-faeda570]{cursor:pointer}.base-select.click.disabled[data-v-faeda570]{pointer-events:none;cursor:default}.base-select .input-label[data-v-faeda570]{margin-bottom:.25rem;display:flex;font-size:.875rem;line-height:1.25rem;font-weight:500}.base-select .wrapper[data-v-faeda570]{display:flex;height:2.5rem;width:100%;align-items:center;border-radius:.5rem;border-width:1px;border-color:var(--input-border);background-color:var(--input-bg);padding-left:.5rem;padding-right:1rem}.base-select .wrapper[data-v-faeda570]:hover{border-color:var(--border-primary-hover)}.base-select .wrapper.focus[data-v-faeda570]{border-width:2px;border-color:var(--primary-light);padding-left:7px;padding-right:15px}.base-select .wrapper.has-error[data-v-faeda570]{border-color:var(--error-tertiary);color:var(--error-primary)}.base-select .wrapper.has-error[data-v-faeda570]::-moz-placeholder{color:var(--error-primary)}.base-select .wrapper.has-error[data-v-faeda570]::placeholder{color:var(--error-primary)}.base-select .wrapper .prepend-icon[data-v-faeda570]{margin-left:.5rem;color:var(--primary)}.base-select .wrapper .prepend-icon[data-v-faeda570]:where(.dark,.dark *){color:var(--primary-light)}.base-select .wrapper .selected-items[data-v-faeda570]{margin-left:.5rem;display:flex;width:auto;gap:.25rem;overflow:hidden;white-space:nowrap}.base-select .wrapper .selected-items .label[data-v-faeda570]{height:-moz-min-content;height:min-content;font-size:.75rem;line-height:1rem}.base-select .wrapper .placeholder[data-v-faeda570]{margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.base-select .wrapper .selected-item[data-v-faeda570]{margin-left:.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .action-buttons[data-v-faeda570]{margin-left:auto;display:flex;gap:.25rem}.base-select .wrapper input[data-v-faeda570]{margin-left:.5rem;min-width:0px;flex:1 0 5rem;border-radius:.5rem;border-style:none;background-color:var(--input-bg);padding-top:.5rem;padding-bottom:.5rem;padding-left:0;padding-right:0;font-size:.875rem;line-height:1.25rem}.base-select .wrapper input[data-v-faeda570]::-moz-placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.base-select .wrapper input[data-v-faeda570]::placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.base-select .wrapper input[data-v-faeda570]:where(.dark,.dark *)::-moz-placeholder{color:var(--body-text)}.base-select .wrapper input[data-v-faeda570]:where(.dark,.dark *)::placeholder{color:var(--body-text)}.base-select .wrapper input[data-v-faeda570]:focus{box-shadow:none}.base-select .error[data-v-faeda570]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.state-indicator[data-v-faeda570]{pointer-events:none;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.state-indicator.is-open[data-v-faeda570]{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.content-divider[data-v-faeda570]{margin-left:1.5rem;margin-right:1.5rem;border-color:var(--border-primary)}.select-content[data-v-faeda570]{max-height:300px;justify-content:space-between;overflow-y:auto;border-radius:.5rem;background-color:var(--child);padding-top:.5rem;padding-bottom:.5rem}.select-content .no-results[data-v-faeda570]{position:relative;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:.5rem 1rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.select-content .no-results[data-v-faeda570]:where(.dark,.dark *){color:var(--body-text)}.table-selection[data-v-737e1c4b]{position:fixed;bottom:6rem;left:.5rem;right:.5rem;z-index:20;display:flex;max-width:37.5rem;align-items:center;gap:.5rem;border-radius:1rem;--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1));padding:1.625rem 1.5rem}@media (min-width: 768px){.table-selection[data-v-737e1c4b]{left:50%;right:0;width:100%;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}.table-selection .amount[data-v-737e1c4b]{margin-right:auto;--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity, 1))}.table-selection .actions[data-v-737e1c4b]{display:flex;flex-direction:column;gap:.5rem}@media (min-width: 768px){.table-selection .actions[data-v-737e1c4b]{flex-direction:row}}.table-selection .actions .button.text[data-v-737e1c4b]{--tw-bg-opacity: 1;background-color:rgb(38 38 38 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.list[data-v-1b51365f]{display:flex;width:16rem;flex-direction:column;gap:.375rem;border-radius:.75rem;background-color:var(--child);padding-top:1rem;padding-bottom:.625rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.list .active-columns[data-v-1b51365f],.list .available-columns[data-v-1b51365f]{display:flex;flex-direction:column;padding-left:1rem;padding-right:1rem}.list .active-columns .title[data-v-1b51365f],.list .available-columns .title[data-v-1b51365f]{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:.75rem;line-height:1rem;font-weight:500;--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity, 1))}.list .active-columns .title[data-v-1b51365f]:where(.dark,.dark *),.list .available-columns .title[data-v-1b51365f]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.list .active-columns .column[data-v-1b51365f],.list .available-columns .column[data-v-1b51365f]{display:flex;height:2rem;flex-direction:row;align-items:center}.list .active-columns .column .checkbox-container[data-v-1b51365f],.list .available-columns .column .checkbox-container[data-v-1b51365f]{width:-moz-fit-content;width:fit-content;padding-right:.5rem}.list .active-columns .column .label[data-v-1b51365f],.list .available-columns .column .label[data-v-1b51365f]{-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem}.list .active-columns .column .label[data-v-1b51365f]:where(.dark,.dark *),.list .available-columns .column .label[data-v-1b51365f]:where(.dark,.dark *){color:var(--body-text)}.list .active-columns .column .drag-handle[data-v-1b51365f],.list .available-columns .column .drag-handle[data-v-1b51365f]{margin-left:auto;cursor:grab;padding-left:.5rem}.list .active-columns .column .drag-handle .icon[data-v-1b51365f],.list .available-columns .column .drag-handle .icon[data-v-1b51365f]{height:1.25rem;width:1.25rem}.list .active-columns .column .drag-handle .icon[data-v-1b51365f]:where(.dark,.dark *),.list .available-columns .column .drag-handle .icon[data-v-1b51365f]:where(.dark,.dark *){color:var(--body-text)}.list .active-columns .title[data-v-1b51365f]{padding-bottom:.375rem}.list .active-columns .column.dragging[data-v-1b51365f]{visibility:hidden}.list .available-columns .title[data-v-1b51365f]{padding-top:.375rem;padding-bottom:.375rem}.table-head[data-v-7c729165]{display:table-header-group;top:var(--2ea2e6ab)}.table-head .select-column[data-v-7c729165],.table-head .action-column[data-v-7c729165]{z-index:2}.table-head .header[data-v-7c729165]{position:relative;display:flex;width:-moz-fit-content;width:fit-content;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.table-head .header[data-v-7c729165]:hover{cursor:pointer}.table-head .header.active[data-v-7c729165]{--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity, 1))}.table-head .header.active[data-v-7c729165]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(250 250 250 / var(--tw-text-opacity, 1))}.table-head .header .sort-icon[data-v-7c729165]{position:absolute;display:none;height:1rem;width:1rem;cursor:pointer;stroke-width:.125rem}.table-head .header .sort-icon.left[data-v-7c729165],.table-head .header .sort-icon.right[data-v-7c729165]{top:50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.table-head .header .sort-icon.left[data-v-7c729165]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-7c729165]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-7c729165],.table-head .header .sort-icon.active[data-v-7c729165]{display:block}.table-head[data-v-7c729165] .column-configurator{margin-left:auto}.table-head .filters[data-v-7c729165]{height:4rem;--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity, 1))}.table-head .filters[data-v-7c729165]:where(.dark,.dark *){background-color:var(--parent-bg)}.table-head .filters .action-column[data-v-7c729165]{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity, 1))}.table-head .filters .action-column[data-v-7c729165]:where(.dark,.dark *){background-color:var(--parent-bg)}.table-head .filters td[data-v-7c729165]>div{min-width:6rem;max-width:18rem!important}.select-column[data-v-7c729165],.action-column[data-v-7c729165]{position:relative;z-index:1;width:3rem;background-color:var(--body)}.select-column.overlap[data-v-7c729165]:after,.action-column.overlap[data-v-7c729165]:before{position:absolute;top:0;height:100%;width:.625rem;--tw-bg-opacity: .05;--tw-gradient-from: #0000000D var(--tw-gradient-from-position);--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to: transparent var(--tw-gradient-to-position);--tw-content: "";content:var(--tw-content)}.select-column.overlap[data-v-7c729165]:after{right:-.625rem;background-image:linear-gradient(to right,var(--tw-gradient-stops))}.action-column.overlap[data-v-7c729165]:before{left:-.625rem;background-image:linear-gradient(to left,var(--tw-gradient-stops))}.prepend-row-column[data-v-7c729165]{width:1%;white-space:nowrap}tbody tr.clickable[data-v-7c729165]{cursor:pointer}tbody tr.clickable[data-v-7c729165]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20%,#fafafa 80%,#fff 95%)}tbody tr.clickable[data-v-7c729165]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20%,#32394c 80%,#0f172a 95%)}tbody tr.selected[data-v-7c729165]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20%,#f0f6ff 80%,#fff 95%)}tbody tr.selected[data-v-7c729165]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20%,#262c3e 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-7c729165]{font-weight:500}tbody tr.selectable td[data-v-7c729165]:nth-child(2):not(.prepend-row-column){font-weight:500}tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-7c729165]{font-weight:500}tbody tr:not(.selectable) td[data-v-7c729165]:first-child:not(.prepend-row-column){font-weight:500}.table-footer[data-v-7c729165]{position:sticky;bottom:0;z-index:10;display:flex;align-items:center;justify-content:space-between;gap:1rem;border-top-width:1px;border-color:var(--table-row-border-color);background-color:var(--body);padding:.25rem 1rem}.table-footer .current-page-info[data-v-7c729165]{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;row-gap:.5rem;--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity, 1))}.table-footer .current-page-info[data-v-7c729165]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(250 250 250 / var(--tw-text-opacity, 1))}.table-footer .current-page-info .total-results[data-v-7c729165]{margin-right:1.5rem;font-size:.875rem;line-height:1.25rem}.table-footer .current-page-info .total-results span[data-v-7c729165]{font-weight:700}.table-footer .current-page-info .page-selector[data-v-7c729165]{display:none;flex-grow:1;flex-wrap:wrap;align-items:center}@media (min-width: 768px){.table-footer .current-page-info .page-selector[data-v-7c729165]{display:flex}}.table-footer .current-page-info .page-selector[data-v-7c729165] .base-select{width:100%;max-width:6rem}.table-footer .current-page-info .page-selector .per-page[data-v-7c729165]{margin-left:.75rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1))}.table-footer .current-page-info .page-selector .per-page[data-v-7c729165]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.table-footer .pagination[data-v-7c729165]{margin-left:auto;padding-top:1rem;padding-bottom:1rem}tfoot[data-v-f1ce8590]{border-top-width:1px;border-style:solid;border-color:var(--table-row-border-color)}tfoot[data-v-f1ce8590] tr{max-height:initial;min-height:initial}.avatar[data-v-f6c3606c]{display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:9999px;background-color:var(--tertiary)}.avatar[data-v-f6c3606c]:where(.dark,.dark *){background-color:var(--primary)}.avatar .initials[data-v-f6c3606c]{font-size:.875rem;line-height:1.25rem;font-weight:500;line-height:1;color:var(--primary)}.avatar .initials[data-v-f6c3606c]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.avatar img[data-v-f6c3606c]{height:100%;width:100%;border-radius:9999px;-o-object-fit:cover;object-fit:cover}.avatar.small[data-v-f6c3606c]{height:1.5rem;width:1.5rem}.avatar.small .initials[data-v-f6c3606c]{font-size:.75rem;line-height:1rem}.avatar.medium[data-v-f6c3606c]{height:2rem;width:2rem}.avatar.large[data-v-f6c3606c]{height:3rem;width:3rem}.avatar.large .initials[data-v-f6c3606c]{font-size:1rem;line-height:1.5rem}.avatar.extra-large[data-v-f6c3606c]{height:3.5rem;width:3.5rem}.avatar.extra-large .initials[data-v-f6c3606c]{font-size:1.125rem;line-height:1.75rem}.full-image[data-v-9fb9eb14]{opacity:1}.thumbnail-stack[data-v-895b7594]{display:flex;flex-direction:row;align-items:center}.thumbnail-stack[data-v-895b7594]:where(.dark,.dark *){opacity:.8}.thumbnail-stack .image-preview[data-v-895b7594]{border-radius:.25rem;outline-style:solid;outline-width:2px;outline-color:var(--child)}.thumbnail-stack .image-preview[data-v-895b7594]:not(:first-child){margin-left:-1rem}.thumbnail-stack .image-preview[data-v-895b7594]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-895b7594]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-895b7594]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-895b7594]{display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;background-color:var(--disabled)}.thumbnail-stack .image-preview.invalid .icon[data-v-895b7594]{color:var(--disabled-text)}.thumbnail-stack .image-preview[data-v-895b7594] .image-wrapper:where(.dark,.dark *){opacity:1}.address-lookup-result[data-v-b6618c36]{display:flex;width:100%;flex-direction:column;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1));padding:.75rem 1rem;font-size:.875rem;line-height:1.25rem;font-style:normal;--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity, 1))}.error-summary[data-v-6a273587]{padding-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.postcodenl-autocomplete-menu{position:absolute;z-index:99;margin-top:.25rem;display:none;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{overflow-y:auto;overflow-x:hidden;padding:.25rem;font-size:.75rem;line-height:1rem}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:.5rem;padding:.75rem;line-height:1.25rem}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{background-color:transparent;padding:0;font-weight:700}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity, 1))}.postcodenl-autocomplete-item-label{margin-right:.4rem;display:block;width:100%;max-width:100%;font-size:.875rem;line-height:1.25rem}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{margin-right:.4rem;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1))}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:center right .25em;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{position:absolute;margin:-.0625rem;display:none;height:.0625rem;width:.0625rem;border-style:none;padding:0;clip:rect(0 0 0 0)}.country-icon[data-v-5516427e]{margin-right:.3125rem;height:1.25rem;width:1.25rem}.activator[data-v-5516427e]{display:flex;cursor:pointer;align-items:center;gap:.25rem;background-color:var(--input-bg)}.activator[data-v-5516427e]:not(.simple){border-radius:.5rem;border-width:1px;border-color:var(--border-primary);padding:.625rem 1rem;font-size:.875rem;line-height:1.25rem}.activator:not(.simple) .country-icon[data-v-5516427e]{margin-right:.5rem}.activator .state-indicator[data-v-5516427e]{margin-left:auto;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.activator .state-indicator.is-open[data-v-5516427e]{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.activator.disabled[data-v-5516427e]{pointer-events:none;cursor:not-allowed;background-color:var(--disabled);color:var(--disabled-text)}.activator.disabled[data-v-5516427e]::-moz-placeholder{color:var(--disabled-text)}.activator.disabled[data-v-5516427e]::placeholder{color:var(--disabled-text)}.activator.disabled[data-v-5516427e]:hover{border-color:var(--border-primary)}.activator.disabled[data-v-5516427e]:focus{outline:2px solid transparent;outline-offset:2px}.country-list[data-v-5516427e]{max-height:300px;overflow-y:auto;border-radius:.5rem;background-color:var(--child);padding-bottom:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--body-text);--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.country-list .search-container[data-v-5516427e]{position:sticky;top:0;z-index:1;background-color:var(--child-alt);padding:.5rem}.country-list .search-container[data-v-5516427e]:after{position:absolute;bottom:-.5rem;left:0;height:.5rem;width:100%;--tw-bg-opacity: .05;background-image:linear-gradient(to bottom,var(--tw-gradient-stops));--tw-gradient-from: #0000000D var(--tw-gradient-from-position);--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to: transparent var(--tw-gradient-to-position);--tw-content: "";content:var(--tw-content)}.country-list .search-container .search-input[data-v-5516427e]{width:100%;border-style:none;background-color:var(--child-alt);padding:0;font-size:.875rem;line-height:1.25rem}.country-list .search-container .search-input[data-v-5516427e]::-moz-placeholder{color:var(--body-text)}.country-list .search-container .search-input[data-v-5516427e]::placeholder{color:var(--body-text)}.country-list .search-container .search-input[data-v-5516427e]:focus{box-shadow:none}.country-list .countries[data-v-5516427e]{padding-top:.5rem}.country-list .countries .country[data-v-5516427e]{display:flex;align-items:center;gap:.5rem;padding:.125rem .5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.country-list .countries .country[data-v-5516427e]:hover{cursor:pointer;background-color:var(--secondary-hover);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.country-list .countries .country[data-v-5516427e]:hover:where(.dark,.dark *){background-color:var(--child-alt)}.country-list .countries .no-countries-found[data-v-5516427e]{pointer-events:none;padding-top:.25rem;text-align:center;font-weight:700}.address-input[data-v-fa7a62bf]{display:flex;width:100%;max-width:36rem;flex-direction:column;gap:1rem}.address-input .country[data-v-fa7a62bf] .activator{width:100%;max-width:15.75rem}.address-input .country .country-label-row[data-v-fa7a62bf]{display:flex;flex-direction:row;justify-content:space-between}.address-input .country .country-label-row .address-toggle[data-v-fa7a62bf]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1));text-decoration-line:underline}.address-input .input-label[data-v-fa7a62bf]{margin-bottom:.25rem;display:flex;font-size:.875rem;line-height:1.25rem}.address-input .grouped-inputs[data-v-fa7a62bf]{display:flex;width:100%;max-width:24rem;justify-content:space-between;gap:.75rem}.address-input .grouped-inputs .error-summary[data-v-fa7a62bf]{width:100%}.address-input .input-container[data-v-fa7a62bf],.address-input .address-lookup-result[data-v-fa7a62bf]{width:100%;max-width:24rem}.address-form[data-v-62f8b3dc]{display:flex;flex-wrap:wrap;justify-content:space-between}.address-form form[data-v-62f8b3dc]{display:flex;width:100%;max-width:36rem;flex-direction:column;gap:1rem}.address-form form .input-label[data-v-62f8b3dc]{margin-bottom:.25rem;display:flex;font-size:.875rem;line-height:1.25rem}.address-form form .grouped-inputs[data-v-62f8b3dc]{display:flex;justify-content:space-between;gap:.75rem}.address-form form .grouped-inputs .error-summary[data-v-62f8b3dc]{width:100%}.address-form form .input-container[data-v-62f8b3dc],.address-form form .grouped-inputs[data-v-62f8b3dc]{width:100%;max-width:24rem}.checkbox-group[data-v-cc5ef3e0]{display:flex;flex-direction:column;gap:.5rem}.checkbox-button[data-v-3441f7c6]{display:flex;flex-direction:column;border-radius:.75rem;border-width:1px;border-color:var(--input-border);padding:.25rem}.checkbox-button .checkbox-container[data-v-3441f7c6]{border-radius:.5rem}.checkbox-button .checkbox-container[data-v-3441f7c6]:hover{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.checkbox-button .checkbox-container[data-v-3441f7c6]:hover:where(.dark,.dark *){background-color:var(--child-alt)}.checkbox-button .checkbox-container[data-v-3441f7c6] .label{height:100%;align-items:flex-start;word-break:break-all;border-radius:.75rem;padding:.75rem;font-weight:500}.checkbox-button .checkbox-container .checkbox-button-label[data-v-3441f7c6]{display:flex;align-items:flex-start;gap:.5rem}.checkbox-button .checkbox-container .micro-icon[data-v-3441f7c6]{margin-top:.125rem;--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity, 1))}.checkbox-button .checked-content[data-v-3441f7c6]{padding-top:.25rem}.phone-input[data-v-a7d47a22]{display:flex;height:2.5rem;align-items:center;border-radius:.5rem;border-width:1px;border-color:var(--border-primary);background-color:var(--input-bg);padding-left:1rem;padding-right:1rem}.phone-input.focus[data-v-a7d47a22]:not(.disabled){border-color:var(--primary-light);outline-style:solid;outline-width:1px;outline-color:var(--primary-light)}.phone-input[data-v-a7d47a22]:hover:not(.disabled){border-color:var(--border-primary-hover)}.phone-input.disabled[data-v-a7d47a22]{border-color:var(--input-disabled-border);background-color:var(--disabled)}.phone-input.disabled .country-prefix[data-v-a7d47a22]{color:var(--disabled-text)}.phone-input.disabled input[data-v-a7d47a22]{background-color:var(--disabled);color:var(--disabled-text)}.phone-input select[data-v-a7d47a22],.phone-input input[data-v-a7d47a22]{border-style:none;padding:0}.phone-input select[data-v-a7d47a22]:focus,.phone-input input[data-v-a7d47a22]:focus{box-shadow:none}.phone-input select[data-v-a7d47a22]{padding-right:2rem}.phone-input input[data-v-a7d47a22]{width:100%;background-color:var(--input-bg);font-size:.875rem;line-height:1.25rem}.phone-input .country-prefix[data-v-a7d47a22]{margin-right:.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.radio[data-v-884f95b4]{border-color:var(--border-primary);background-color:var(--input-bg);color:var(--primary-light)}.radio[data-v-884f95b4]:focus{--tw-ring-color: var(--primary-light)}.radio.large[data-v-884f95b4]{height:1.25rem;width:1.25rem}.radio[data-v-884f95b4]:not(:disabled):hover{border-color:var(--border-primary-hover)}.radio[data-v-884f95b4]:checked{border-color:var(--primary-light);background-color:var(--primary)}.radio[data-v-884f95b4]:checked:where(.dark,.dark *){background-color:var(--primary-light)}.radio[data-v-884f95b4]:disabled{border-color:var(--border-primary);background-color:var(--disabled)}.radio[data-v-884f95b4]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-884f95b4]:checked:not(:disabled):hover{border-color:var(--primary);color:var(--primary)}.radio-button[data-v-b50ec186]{display:flex;align-items:center;gap:.75rem;word-break:break-all;border-radius:.5rem;padding:.75rem}.radio-button[data-v-b50ec186] *{pointer-events:none}.radio-button[data-v-b50ec186]:not(.disabled):hover{cursor:pointer;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.radio-button[data-v-b50ec186]:not(.disabled):hover:where(.dark,.dark *){background-color:var(--child-alt)}.radio-button:not(.disabled).active[data-v-b50ec186]{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.radio-button:not(.disabled).active[data-v-b50ec186]:hover{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1))}.radio-button:not(.disabled).active[data-v-b50ec186]:where(.dark,.dark *){background-color:var(--child)}.radio-button:not(.disabled).active[data-v-b50ec186]:hover:where(.dark,.dark *){background-color:var(--child-alt)}.radio-button.disabled[data-v-b50ec186]{color:var(--disabled-text);--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.radio-button.disabled[data-v-b50ec186]:before{position:absolute;top:0;left:0;z-index:10;height:100%;width:100%;cursor:not-allowed;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity, 1));opacity:.1;--tw-content: "";content:var(--tw-content)}.radio-button.large[data-v-b50ec186]{padding-top:.875rem;padding-bottom:.875rem}.radio-button label[data-v-b50ec186]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.radio-button .append[data-v-b50ec186]{margin-left:auto}.radio-button .prepend-wrapper[data-v-b50ec186]{display:flex;flex-direction:row;align-items:center;gap:.75rem}.radio-button .prepend-wrapper .title-wrapper[data-v-b50ec186]{display:flex;min-width:-moz-max-content;min-width:max-content;flex-direction:column}.radio-button .prepend-wrapper .title-wrapper .title[data-v-b50ec186]{display:flex;flex-direction:row;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-b50ec186]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1))}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-b50ec186]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.suggestion-list[data-v-e3a5df1f]{position:absolute;min-width:6.25rem;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));padding:.75rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.suggestion-list .menu[data-v-e3a5df1f]{row-gap:.25rem}.editor[data-v-03b66fc3] .tiptap{height:18.75rem;width:100%;overflow:auto;border-radius:.5rem;border-width:1px;border-color:var(--border-primary);padding:.625rem 1rem}.editor[data-v-03b66fc3] .tiptap h1,.editor[data-v-03b66fc3] .tiptap h2{margin-bottom:1rem}.editor[data-v-03b66fc3] .tiptap h1{font-size:1.5rem;line-height:2rem}.editor[data-v-03b66fc3] .tiptap h2{font-size:1.25rem;line-height:1.75rem}.editor[data-v-03b66fc3] .tiptap h3{font-size:1.125rem;line-height:1.75rem}.editor[data-v-03b66fc3] .tiptap h4,.editor[data-v-03b66fc3] .tiptap h5,.editor[data-v-03b66fc3] .tiptap h6{font-size:1rem;line-height:1.5rem}.editor[data-v-03b66fc3] .tiptap .tag{font-weight:700;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.editor .toolbar[data-v-03b66fc3]{margin-bottom:.5rem;display:flex;gap:.25rem}.editor .toolbar .button[data-v-03b66fc3]{width:2.5rem}.editor .toolbar[data-v-03b66fc3] .base-select{margin-left:auto}[data-v-ad753e3d] .input{min-width:10rem;border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right-width:0px!important}[data-v-ad753e3d] .search-options .wrapper{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-left-width:0px!important}.scoped-search[data-v-ad753e3d]{display:flex}.scoped-search .search:has(.input:hover)+.divider[data-v-ad753e3d]{border-color:var(--border-primary-hover)}.scoped-search .search:focus-within+.divider[data-v-ad753e3d]{border-left-width:2px;border-color:var(--primary-light)!important}.scoped-search .search[data-v-ad753e3d]:focus-within .input{border-width:2px;border-color:var(--primary-light)}.scoped-search .search[data-v-ad753e3d]:focus-within .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-ad753e3d]{border-color:var(--border-primary-hover)}.scoped-search:has(.search-options:focus) .divider[data-v-ad753e3d],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-ad753e3d]{border-left-width:2px;border-color:var(--primary-light)!important}.scoped-search[data-v-ad753e3d] .search{flex-grow:1}.modal.loader-modal[data-v-ddb25692] .inner{height:4.75rem;align-items:center;justify-content:center;border-radius:1rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.modal.loader-modal[data-v-ddb25692] .inner .content{overflow:visible;padding:0!important}.modal.loader-modal[data-v-ddb25692] .inner .loader{height:3.125rem!important;width:3.125rem!important}.search-container[data-v-ddb25692]{position:relative}.search-container[data-v-ddb25692] .modal{height:100%;max-height:25rem;background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.search-container[data-v-ddb25692] .modal .inner .content{padding:0}.search-container[data-v-ddb25692] .modal .inner .content .base-select .wrapper,.search-container[data-v-ddb25692] .modal .inner .content .base-select .wrapper input{background-color:var(--child)}.search-container[data-v-ddb25692] .modal .inner .content .floating-container-content{overflow:hidden;border-bottom-right-radius:1.5rem;border-bottom-left-radius:1.5rem;background-color:var(--child)}.search-container[data-v-ddb25692] .modal .inner .content .floating-container-content .select-content{border-radius:1.5rem;background-color:var(--child)}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-right-radius:0;border-bottom-left-radius:0}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .wrapper{height:4.75rem;border-radius:1rem;border-style:none;padding-left:1.5rem;padding-right:1.5rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .wrapper.focus{border-style:none;outline:2px solid transparent;outline-offset:2px}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .wrapper .prepend-icon{margin-left:0;margin-right:.25rem;height:1.5rem;width:1.5rem}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .options{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:1rem;border-bottom-left-radius:1rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .options .virtual-scroll-container>div>div:first-child{margin-top:1rem}.search-container[data-v-ddb25692] .modal .inner .content .search.elevated .options .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-ddb25692] .modal .inner .content .button{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.search-container[data-v-ddb25692] .modal .inner .content .button.cancel{border-radius:0;border-left-width:1px;padding-left:1rem;padding-right:.5rem;font-weight:400}.search-container[data-v-ddb25692] .modal .inner .content .button.cancel:where(.dark,.dark *){color:var(--body-text)}.arrow[data-v-18360e38]{position:relative}.arrow.vertical[data-v-18360e38]{height:100%;width:-moz-fit-content;width:fit-content;padding-left:.75rem;padding-right:.75rem}.arrow.vertical .text[data-v-18360e38]{top:50%;--tw-translate-y: -50%;--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));text-align:center}.arrow.vertical.has-text[data-v-18360e38]{margin-right:2rem}.arrow[data-v-18360e38]:not(.vertical){width:100%;padding-top:.75rem;padding-bottom:.75rem}.arrow:not(.vertical) .text[data-v-18360e38]{left:50%;margin-top:1.25rem;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));text-align:center}.arrow:not(.vertical).has-text[data-v-18360e38]{margin-bottom:2rem}.arrow .arrow-pointer[data-v-18360e38]{position:absolute;border-right-width:2px;border-bottom-width:2px;border-color:var(--border-primary);padding:.5rem}.arrow .arrow-pointer.up[data-v-18360e38],.arrow .arrow-pointer.down[data-v-18360e38]{margin-left:-.5rem}.arrow .arrow-pointer.up[data-v-18360e38]{top:0;margin-top:.125rem;--tw-rotate: -135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .arrow-pointer.down[data-v-18360e38]{bottom:0;margin-bottom:.125rem;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .arrow-pointer.left[data-v-18360e38],.arrow .arrow-pointer.right[data-v-18360e38]{top:1rem;margin-top:-.75rem}.arrow .arrow-pointer.left[data-v-18360e38]{left:0;margin-left:.125rem;--tw-rotate: 135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .arrow-pointer.right[data-v-18360e38]{right:0;margin-right:.125rem;--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .text[data-v-18360e38]{position:absolute;display:block;text-wrap:nowrap;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.arrow .text[data-v-18360e38]:where(.dark,.dark *){color:var(--body-text)}.footer[data-v-31ec1b73]{display:flex;min-height:8rem;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;overflow:hidden}.footer .copy[data-v-31ec1b73]{width:100%;text-align:center;font-size:.875rem;line-height:1.25rem;color:var(--body-text)}.dropdown[data-v-125447a1]{position:relative}.dropdown .menu[data-v-125447a1]{border-radius:.375rem;padding:.25rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.header[data-v-55ee6b8e]{position:relative;z-index:50;width:100%;height:var(--5f3207e3)}.header .wrapper[data-v-55ee6b8e]{position:fixed;display:flex;width:100%;justify-content:center;border-bottom-width:1px;background-color:var(--parent-bg)}.header .wrapper[data-v-55ee6b8e]:where(.dark,.dark *){border-style:none}.header .wrapper .inner[data-v-55ee6b8e]{margin-right:calc(-1*(100vw - 100%));display:grid;height:100%;width:100vw;align-items:center;gap:.5rem;overflow-x:clip}@media (min-width: 1024px){.header .wrapper .inner[data-v-55ee6b8e]{max-width:100.4375rem}}.header .wrapper .inner[data-v-55ee6b8e]{grid-template-areas:"return-info return-info return-info" "prepend logo append" "middle middle middle";grid-template-columns:1fr auto 1fr}.header .wrapper .inner .prepend[data-v-55ee6b8e]{margin-left:1.5rem;grid-area:prepend}.header .wrapper .inner .logo[data-v-55ee6b8e]{grid-area:logo}.header .wrapper .inner .logo a[data-v-55ee6b8e]{display:block;width:-moz-fit-content;width:fit-content}.header .wrapper .inner .return-info[data-v-55ee6b8e]{display:flex;justify-content:center;border-bottom-width:1px;padding-top:.5rem;padding-bottom:.5rem}@media (min-width: 1024px){.header .wrapper .inner .return-info[data-v-55ee6b8e]{justify-content:flex-start;border-bottom-width:0px;padding-top:0;padding-bottom:0}}.header .wrapper .inner .return-info[data-v-55ee6b8e]{grid-area:return-info}.header .wrapper .inner .return-info .icon[data-v-55ee6b8e]{height:1rem;width:1rem}@media (min-width: 1024px){.header .wrapper .inner .return-info .icon[data-v-55ee6b8e]{height:1.5rem;width:1.5rem;border-style:none}}.header .wrapper .inner .return-info a[data-v-55ee6b8e]{display:flex;align-items:center;gap:1rem}.header .wrapper .inner .return-info a .text[data-v-55ee6b8e]{display:flex;align-items:center;font-size:.75rem;line-height:1rem;font-weight:500}@media (min-width: 1024px){.header .wrapper .inner .return-info a .text[data-v-55ee6b8e]{font-size:.875rem;line-height:1.25rem}}.header .wrapper .inner .middle[data-v-55ee6b8e]{display:flex;height:100%;align-items:center;justify-content:center}@media (min-width: 1024px){.header .wrapper .inner .middle[data-v-55ee6b8e]{padding:0}}.header .wrapper .inner .middle[data-v-55ee6b8e]{grid-area:middle}.header .wrapper .inner .middle[data-v-55ee6b8e]>*{margin-left:.5rem;margin-right:.5rem;margin-bottom:.5rem}@media (min-width: 1024px){.header .wrapper .inner .middle[data-v-55ee6b8e]>*{margin:0}}.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container .input{border-radius:1rem;border-style:none;background-color:var(--disabled);padding-top:.4375rem;padding-bottom:.4375rem;padding-left:3.25rem;font-size:.875rem;line-height:1.25rem}.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container .input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container .input::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container .input:hover{border-style:none}.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container .input:focus{padding-top:.4375rem;padding-bottom:.4375rem;padding-right:1rem}@media (min-width: 1024px){.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container .input{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.header .wrapper .inner .middle[data-v-55ee6b8e] .search-container .input:focus{padding-top:.6875rem;padding-bottom:.6875rem}}.header .wrapper .inner .append[data-v-55ee6b8e]{display:flex;align-items:center;justify-content:flex-end;gap:1rem;grid-area:append}.header .wrapper .inner .append .icon[data-v-55ee6b8e]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.header .wrapper .inner .append .dropdown[data-v-55ee6b8e] .button{margin-right:1.5rem;background-color:transparent;padding:0}@media (min-width: 1024px){.header[data-v-55ee6b8e],.header .wrapper[data-v-55ee6b8e]{height:5rem}.header .wrapper .inner[data-v-55ee6b8e]{grid-template-areas:"logo middle append";grid-template-columns:2fr 3fr 2fr}.header .wrapper .inner.left[data-v-55ee6b8e]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-55ee6b8e]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-55ee6b8e]{justify-content:center}.header .wrapper .inner.right[data-v-55ee6b8e]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-55ee6b8e]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-55ee6b8e]{grid-template-areas:"logo return-info middle append";grid-template-columns:1fr 1fr 2fr 2fr}.header .wrapper .prepend[data-v-55ee6b8e]{display:none}.header .wrapper .logo a[data-v-55ee6b8e]{margin-left:1.5rem}}.tab[data-v-a938dea7]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(82 82 82 / var(--tw-text-opacity, 1))}.tab .tab-count[data-v-a938dea7]{margin-left:.5rem;display:none;border-radius:9999px;padding:.125rem .625rem;font-size:.75rem;line-height:1rem;font-weight:500}@media (min-width: 768px){.tab .tab-count[data-v-a938dea7]{display:inline-block}}.tab.active[data-v-a938dea7]{border-color:var(--primary-mid);color:var(--primary-mid)}.tab.disabled[data-v-a938dea7]{pointer-events:none;cursor:not-allowed;color:var(--disabled-text)}.tab.disabled.active[data-v-a938dea7]{border-color:var(--disabled-text)}.tabs[data-v-daff7416]{position:relative;display:flex}.tabs[data-v-daff7416]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}.tabs[data-v-daff7416]{background-color:inherit;--tw-shadow: inset 0 -1px 0 0 #e5e7eb;--tw-shadow-colored: inset 0 -1px 0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tabs[data-v-daff7416] .tab{cursor:pointer;white-space:nowrap;border-bottom-width:2px;padding:1rem .25rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.tabs[data-v-daff7416] .tab:not(.active){border-color:transparent;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.tabs[data-v-daff7416] .tab:not(.active):where(.dark,.dark *){color:var(--body-text)}.tabs[data-v-daff7416] .tab:hover:not(.active){--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.tabs[data-v-daff7416] .tab:hover:not(.active):hover{--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.tabs[data-v-daff7416] .tab:hover:not(.active):where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.tabs[data-v-daff7416] .tab .tab-count{border-width:1px}.page-header[data-v-907635f4]{position:relative;background-color:var(--body)}.page-header.header-sticky[data-v-907635f4]{position:sticky;z-index:21;top:var(--601ef778)}.page-header.header-sticky.overlap[data-v-907635f4]{border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity, 1));--tw-shadow: 0 12px 12px -16px rgba(0,0,0,.2);--tw-shadow-colored: 0 12px 12px -16px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);padding-top:var(--f25a73c0)}.page-header.header-sticky.overlap .heading[data-v-907635f4]{margin-bottom:.25rem}.page-header.header-sticky.overlap .heading h1[data-v-907635f4]{font-size:1.125rem;line-height:1.75rem}.page-header h1[data-v-907635f4]{font-size:1.5rem;line-height:2rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@media (min-width: 768px){.page-header h1[data-v-907635f4]{font-size:1.75rem}}.page-header .tabs[data-v-907635f4]{margin-bottom:2rem}.page-header .heading[data-v-907635f4]{margin-bottom:1rem;display:flex;align-items:center}@media (min-width: 768px){.page-header .heading[data-v-907635f4]{margin-bottom:1.25rem}}.page-header .heading .actions[data-v-907635f4]{margin-left:auto;display:flex;gap:.5rem}.page-header .heading .actions[data-v-907635f4] .button .mini-icon{color:var(--primary-light)}.page-header .filters[data-v-907635f4]{display:flex;gap:.5rem;overflow:auto;padding-bottom:.5rem}@media (min-width: 768px){.page-header .filters[data-v-907635f4]{flex-wrap:wrap}}.page-header .filters .search[data-v-907635f4]{min-width:12rem}@media (min-width: 1024px){.page-header .filters .search[data-v-907635f4]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-907635f4]{display:contents}.page-header .filters .filter-group[data-v-907635f4] .title{margin-left:1rem}.sidebar[data-v-2cee551a]{height:100%;width:100%;max-width:14.5rem;overflow:hidden;border-radius:.5rem}.sidebar.mini[data-v-2cee551a]{width:2.25rem}.sidebar.mini .menu[data-v-2cee551a]{width:-moz-fit-content;width:fit-content}.menu[data-v-2cee551a]{gap:.25rem;--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity, 1))}.summary[data-v-15250c0d]{width:var(--5436127c);max-width:100%}.summary-group[data-v-d2ad643f]{padding-top:.5rem;padding-bottom:.5rem}.summary-group .header[data-v-d2ad643f]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.summary-group .header.expandable[data-v-d2ad643f]{cursor:pointer}.summary-group .header .name[data-v-d2ad643f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;font-weight:500}.summary-group .header[data-v-d2ad643f] .icon{height:1.25rem;width:1.25rem}.summary-group .items[data-v-d2ad643f]{display:flex;flex-direction:column;gap:.5rem;border-left-width:4px;padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;animation:fadeIn-d2ad643f .3s}.grow-enter-active[data-v-d2ad643f],.grow-leave-active[data-v-d2ad643f]{transition-property:all;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.grow-enter-from[data-v-d2ad643f],.grow-leave-to[data-v-d2ad643f]{height:0px!important;padding-top:0!important;padding-bottom:0!important;opacity:0!important}@keyframes fadeIn-d2ad643f{0%{opacity:0}to{opacity:1}}.summary-item[data-v-a4a5bb69]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem}.summary-item a[href][data-v-a4a5bb69]:hover{text-decoration-line:underline}.hamburger-icon[data-v-f8b0882e]{cursor:pointer}.linear-progress[data-v-c11bf9e5]{display:flex;width:100%;align-items:center;gap:.5rem;font-size:.75rem;line-height:1rem}.linear-progress .wrapper[data-v-c11bf9e5]{display:flex;width:100%;flex-direction:column;gap:.25rem}.linear-progress .wrapper .progress-bar[data-v-c11bf9e5]{height:.375rem;width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-c11bf9e5]{height:100%;width:100%;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.5s;transition-timing-function:linear}.linear-progress .wrapper .progress-bar.blue[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.green[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.green .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.gray[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.orange[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(249 115 22 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.purple[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(168 85 247 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.red[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.red .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.yellow[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(234 179 8 / var(--tw-bg-opacity, 1))}.linear-progress .append[data-v-c11bf9e5]{min-width:2.25rem}[data-v-2f322e85] .progress{transition-duration:var(--c2ea86fc)!important}.toast[data-v-2f322e85]{position:relative;width:100%;max-width:24rem;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));background-color:var(--child-alt);--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.toast[data-v-2f322e85]:where(.dark,.dark *){border-style:none}.toast .wrapper[data-v-2f322e85]{display:flex;padding:1rem}.toast .linear-progress[data-v-2f322e85] .progress-bar{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.toast.is-absolute[data-v-2f322e85]{position:absolute;top:.25rem;right:.25rem}.toast .type-icon[data-v-2f322e85]{margin-right:.75rem;flex-shrink:0}.toast .content[data-v-2f322e85]{display:flex;flex-direction:column;padding-right:1.5rem;font-size:.875rem;line-height:1.25rem}.toast .content .title[data-v-2f322e85]{margin-bottom:.25rem;font-weight:500}.toast .content .description[data-v-2f322e85]{margin-bottom:1rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.toast .content .description[data-v-2f322e85]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.toast .content .actions[data-v-2f322e85]{display:flex;gap:.5rem}.toast .close[data-v-2f322e85]{position:absolute;top:.5rem;right:0}.toast .close[data-v-2f322e85] .mini-icon{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.close:hover .mini-icon[data-v-2f322e85]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.error .type-icon[data-v-2f322e85]{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.warning .type-icon[data-v-2f322e85]{--tw-text-opacity: 1;color:rgb(249 115 22 / var(--tw-text-opacity, 1))}.success .type-icon[data-v-2f322e85]{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity, 1))}.info .type-icon[data-v-2f322e85]{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.fade-enter-from[data-v-2f322e85],.fade-leave-to[data-v-2f322e85]{--tw-translate-x: 15rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.fade-enter-to[data-v-2f322e85],.fade-leave-from[data-v-2f322e85]{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.fade-enter-active[data-v-2f322e85],.fade-leave-active[data-v-2f322e85]{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.toast-group[data-v-bb52bfda]{position:fixed;top:0;right:0;z-index:100;display:flex;max-height:100vh;flex-direction:column;gap:1rem;overflow-y:auto;overflow-x:hidden;padding:1rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;scrollbar-width:none}.page-layout[data-v-80aa5761]{position:relative;display:flex;flex-direction:column;overflow-x:clip}.page-layout .wrap[data-v-80aa5761]{margin-right:calc(-1*(100vw - 100%));display:flex;height:100%;width:100vw;flex-direction:column;align-self:center}@media (min-width: 1024px){.page-layout .wrap[data-v-80aa5761]{max-width:100.4375rem;flex-direction:row;gap:1.25rem;padding-left:1.5rem;padding-right:1.5rem}}@media (min-width: 1536px){.page-layout .wrap[data-v-80aa5761]{gap:5rem}}.page-layout .wrap.has-sidebar .main[data-v-80aa5761]{padding-left:1.5rem;padding-right:1.5rem}.page-layout.layout-mirrored .main[data-v-80aa5761]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-80aa5761]{order:2}.page-layout .sidebar[data-v-80aa5761]{position:sticky;margin-bottom:1rem;height:100%}@media (min-width: 1024px){.page-layout .sidebar[data-v-80aa5761]{margin-top:2.5rem}}.page-layout .sidebar[data-v-80aa5761]{top:var(--a30f3792)}.page-layout .sidebar-left[data-v-80aa5761]{display:none}@media (min-width: 1024px){.page-layout .sidebar-left[data-v-80aa5761]{display:block}}@media (min-width: 1280px){.page-layout .sidebar-left[data-v-80aa5761]{width:-moz-fit-content;width:fit-content;max-width:10rem}}@media (min-width: 1536px){.page-layout .sidebar-left[data-v-80aa5761]{width:100%;max-width:14.5rem}}@media (min-width: 1280px){.page-layout .sidebar-left[data-v-80aa5761]:not(.mini) .menu-item-content{padding-right:1rem}}@media (min-width: 1536px){.page-layout .sidebar-left[data-v-80aa5761]:not(.mini) .menu-item-content{padding-right:0}}.page-layout .sidebar-right[data-v-80aa5761]{padding:1rem 1.5rem;padding-top:0}@media (min-width: 1024px){.page-layout .sidebar-right[data-v-80aa5761]{padding:0;padding-top:1rem}}.page-layout .main[data-v-80aa5761]{min-width:0px;flex-grow:1;padding-top:1rem;padding-bottom:1rem}@media (min-width: 1024px){.page-layout .main[data-v-80aa5761]{padding-top:2.5rem;padding-bottom:2.5rem}}.persistent .label .badge[data-v-afe260e5]{margin-right:.375rem}.persistent .label .micro-icon[data-v-afe260e5]{margin-left:.25rem}.persistent .label .micro-icon[data-v-afe260e5]:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity, 1))}.persistent[data-v-afe260e5] .menu .current{--tw-text-opacity: 1 !important;color:rgb(10 10 10 / var(--tw-text-opacity, 1))!important}.step-connector[data-v-ff4fac1d]:not(.absolute){flex:1 1 0%}.step-connector.absolute[data-v-ff4fac1d]{left:calc(-50% + 11px);right:calc(50% + 11px);top:9.1px}.step-connector .horizontal-line[data-v-ff4fac1d]{display:block;border-top-width:.4rem;--tw-border-opacity: 1;border-color:rgb(245 245 245 / var(--tw-border-opacity, 1))}.step-connector .horizontal-line[data-v-ff4fac1d]:where(.dark,.dark *){border-color:var(--input-border)}.step[data-v-86451e01]:not(.xs){position:relative;display:flex;flex:1 1 0%;flex-direction:column;align-items:center}.step .step-content[data-v-86451e01]{display:flex;flex-direction:column;align-items:center}.step .step-content .step-state[data-v-86451e01]{position:relative;z-index:1;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1));font-size:.875rem;line-height:1.25rem}.step .step-content .step-state[data-v-86451e01]:where(.dark,.dark *){background-color:var(--input-border)}.step .step-content .step-state.active[data-v-86451e01]:before{position:absolute;z-index:1;height:2.5rem;width:2.5rem;border-radius:9999px;opacity:.1;--tw-content: "";content:var(--tw-content)}.step .step-content .step-state .micro-icon[data-v-86451e01]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.step .step-content .label[data-v-86451e01]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.step .step-content .label.unfinished[data-v-86451e01]{--tw-text-opacity: 1;color:rgb(132 139 152 / var(--tw-text-opacity, 1))}.stepper[data-v-dd5654c8]{z-index:1}.stepper.xs .wrapper[data-v-dd5654c8]{align-items:center}.stepper.xs .wrapper[data-v-dd5654c8] .step-connector:first-child .horizontal-line{border-top-left-radius:9999px;border-bottom-left-radius:9999px}.stepper.xs .wrapper[data-v-dd5654c8] .step-connector:last-child .horizontal-line{border-top-right-radius:9999px;border-bottom-right-radius:9999px}.stepper[data-v-dd5654c8]:not(.xs){justify-content:space-between}.stepper.default[data-v-dd5654c8] .step-connector .active{border-color:var(--primary)}.stepper.default[data-v-dd5654c8] .step-state.finished,.stepper.default[data-v-dd5654c8] .step-state.active,.stepper.default[data-v-dd5654c8] .step-state.active:before{background-color:var(--primary)}.stepper.default[data-v-dd5654c8] .step-state .icon{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.stepper.error[data-v-dd5654c8] .step-connector .active{border-color:var(--error-tertiary)}.stepper.error[data-v-dd5654c8] .step-state.finished,.stepper.error[data-v-dd5654c8] .step-state.active,.stepper.error[data-v-dd5654c8] .step-state.active:before{background-color:var(--error-tertiary)}.stepper.error[data-v-dd5654c8] .step-state .icon{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.stepper.warning[data-v-dd5654c8] .step-connector .active{--tw-border-opacity: 1;border-color:rgb(251 191 36 / var(--tw-border-opacity, 1))}.stepper.warning[data-v-dd5654c8] .step-state.finished,.stepper.warning[data-v-dd5654c8] .step-state.active,.stepper.warning[data-v-dd5654c8] .step-state.active:before{--tw-bg-opacity: 1;background-color:rgb(251 191 36 / var(--tw-bg-opacity, 1))}.stepper.warning[data-v-dd5654c8] .step-state .icon{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.stepper.success[data-v-dd5654c8] .step-connector .active{border-color:var(--success-tertiary)}.stepper.success[data-v-dd5654c8] .step-state.finished,.stepper.success[data-v-dd5654c8] .step-state.active,.stepper.success[data-v-dd5654c8] .step-state.active:before{background-color:var(--success-tertiary)}.stepper.success[data-v-dd5654c8] .step-state .icon{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.stepper.disabled[data-v-dd5654c8] .step-connector .active{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity, 1))}.stepper.disabled[data-v-dd5654c8] .step-state.finished,.stepper.disabled[data-v-dd5654c8] .step-state.active,.stepper.disabled[data-v-dd5654c8] .step-state.active:before{--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity, 1))}.stepper.disabled[data-v-dd5654c8] .step-state.active:before{--tw-bg-opacity: 1;background-color:rgb(163 163 163 / var(--tw-bg-opacity, 1))}.stepper.disabled[data-v-dd5654c8] .step-state .icon{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.stepper .wrapper[data-v-dd5654c8]{position:relative;display:flex;flex-direction:row}.stepper .active-step[data-v-dd5654c8]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.filter-tabs[data-v-346140a8]{display:flex;justify-content:space-between;gap:.5625rem}.filter-tabs[data-v-346140a8] .tab{display:flex;height:2.5rem;flex-grow:1;align-items:center;justify-content:space-between;border-radius:.5rem;border-width:1px;padding-left:1rem;padding-right:.625rem}.filter-tabs[data-v-346140a8] .tab:not(.active){border-color:var(--border-primary)}.filter-tabs[data-v-346140a8] .tab .tab-count{border-width:1px}.filter-tabs[data-v-346140a8] .tab.active{border-width:2px;padding-left:.9375rem;padding-right:.5625rem}:root,:host{--body-text: #111827;--body: #fff;--parent-bg: #fff;--child: #fff;--child-alt: #fff;--primary-light: #3b82f6;--primary-mid: #2f6fe8;--primary: #2563eb;--primary-hover: #1d4ed8;--primary-pressed: #1e40af;--secondary: #fff;--secondary-hover: rgb(250, 250, 250);--secondary-pressed: rgb(229, 229, 229);--tertiary: #eff6ff;--tertiary-hover: #dbeafe;--tertiary-pressed: #bfdbfe;--error-primary: #7b2122;--error-secondary: #d52d2f;--error-tertiary: #e73c3e;--error-accent: #fef2f2;--warning-primary: #7c2d12;--warning-secondary: #c2410c;--warning-tertiary: #f97316;--warning-accent: #fff7ed;--success-primary: #14532d;--success-secondary: #15803d;--success-tertiary: #22c55e;--success-accent: #f0fdf4;--info-primary: #1e3a8a;--info-secondary: #1d4ed8;--info-tertiary: #3b82f6;--info-accent: #eff6ff;--disabled-light: #f9fafb;--disabled: #f3f4f6;--disabled-text: #9ca3af;--border-primary: #d1d5db;--border-primary-hover: #9ca3af;--input-bg: #fff;--input-border: var(--border-primary);--input-disabled-border: var(--border-primary);--table-row-border-color: rgb(229, 229, 229);--table-header-bg: #e5e7eb}:root.dark,:host.dark{--body-text: #d1d5db;--body: rgb(15 23 42);--parent-bg: #262c3e;--child: #2b334e;--child-alt: #434962;--primary-light: #60a5fa;--border-primary: #707481;--input-bg: rgb(30 41 59);--input-disabled-border: #4b5563;--input-inline: var(--body-text);--secondary: var(--parent-bg);--secondary-hover: #3e4354;--secondary-pressed: #75798d;--tertiary: rgba(191, 219, 254, .1);--tertiary-hover: rgba(191, 219, 254, .15);--tertiary-pressed: rgba(191, 219, 254, .175);--error-primary: #fef2f2;--error-secondary: #fef2f2;--error-tertiary: #e73c3e;--error-accent: #7b2122;--warning-primary: #fff7ed;--warning-secondary: #fff7ed;--warning-tertiary: #f97316;--warning-accent: #7c2d12;--success-primary: #f0fdf4;--success-secondary: #f0fdf4;--success-tertiary: #22c55e;--success-accent: #14532d;--info-primary: #eff6ff;--info-secondary: #eff6ff;--info-tertiary: #3b82f6;--info-accent: #1e3a8a;--disabled: #111827;--disabled-text: #9ca3af;--table-row-border-color: #4b5563}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,input:where(:not([type])):focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors: active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors: active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{border-color:transparent;background-color:currentColor}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}@media (forced-colors: active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.\\!fixed{position:fixed!important}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.\\!right-\\[15px\\]{right:15px!important}.-bottom-2{bottom:-.5rem}.-left-2{left:-.5rem}.-right-0{right:-0px}.-right-2{right:-.5rem}.-top-0\\.5{top:-.125rem}.-top-14{top:-3.5rem}.-top-2{top:-.5rem}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.bottom-24{bottom:6rem}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:.5rem}.left-\\[20\\%\\]{left:20%}.left-\\[80\\%\\]{left:80%}.left-\\[calc\\(-50\\%_\\+_11px\\)\\]{left:calc(-50% + 11px)}.right-0{right:0}.right-2{right:.5rem}.right-3{right:.75rem}.right-\\[calc\\(50\\%_\\+_11px\\)\\]{right:calc(50% + 11px)}.start-1{inset-inline-start:.25rem}.top-0{top:0}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-3{top:.75rem}.top-\\[\\.5rem\\]{top:.5rem}.top-\\[1rem\\]{top:1rem}.top-\\[9\\.1px\\]{top:9.1px}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.z-\\[1000\\]{z-index:1000}.z-\\[100\\]{z-index:100}.z-\\[1\\]{z-index:1}.z-\\[20\\]{z-index:20}.z-\\[21\\]{z-index:21}.z-\\[2\\]{z-index:2}.z-\\[60\\]{z-index:60}.z-\\[99\\]{z-index:99}.float-right{float:right}.-m-\\[\\.0625rem\\]{margin:-.0625rem}.m-0{margin:0}.-mx-\\[1px\\]{margin-left:-1px;margin-right:-1px}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-\\[\\.3125rem\\]{margin-top:.3125rem;margin-bottom:.3125rem}.\\!mb-3{margin-bottom:.75rem!important}.\\!ms-0{margin-inline-start:0px!important}.-ml-6{margin-left:-1.5rem}.-mt-3{margin-top:-.75rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-\\[\\.125rem\\]{margin-bottom:.125rem}.ml-0{margin-left:0}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-\\[\\.125rem\\]{margin-left:.125rem}.ml-\\[\\.5625rem\\]{margin-left:.5625rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-6{margin-right:1.5rem}.mr-\\[\\.125rem\\]{margin-right:.125rem}.mr-\\[\\.3125rem\\]{margin-right:.3125rem}.mr-\\[\\.375rem\\]{margin-right:.375rem}.mr-\\[0\\.4rem\\]{margin-right:.4rem}.mr-\\[calc\\(-1\\*\\(100vw-100\\%\\)\\)\\]{margin-right:calc(-1*(100vw - 100%))}.mt-0{margin-top:0}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-12{margin-top:3rem}.mt-14{margin-top:3.5rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-\\[\\.125rem\\]{margin-top:.125rem}.mt-\\[1000px\\]{margin-top:1000px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-row{display:table-row}.grid{display:grid}.contents{display:contents}.list-item{display:list-item}.\\!hidden{display:none!important}.hidden{display:none}.\\!h-0{height:0px!important}.\\!h-6{height:1.5rem!important}.\\!h-\\[3\\.125rem\\]{height:3.125rem!important}.h-1\\.5{height:.375rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-32{height:8rem}.h-36{height:9rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[\\.0625rem\\]{height:.0625rem}.h-\\[\\.875rem\\]{height:.875rem}.h-\\[1\\.25rem\\]{height:1.25rem}.h-\\[1\\.3rem\\]{height:1.3rem}.h-\\[10\\.25rem\\]{height:10.25rem}.h-\\[100vh\\]{height:100vh}.h-\\[18\\.75rem\\]{height:18.75rem}.h-\\[200px\\]{height:200px}.h-\\[3\\.5rem\\]{height:3.5rem}.h-\\[300px\\]{height:300px}.h-\\[4\\.75rem\\]{height:4.75rem}.h-\\[50px\\]{height:50px}.h-\\[90vh\\]{height:90vh}.h-\\[calc\\(100vh-3\\.5rem\\)\\]{height:calc(100vh - 3.5rem)}.h-\\[unset\\]{height:unset}.h-auto{height:auto}.h-full{height:100%}.h-max{height:-moz-max-content;height:max-content}.h-min{height:-moz-min-content;height:min-content}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[100vh\\]{max-height:100vh}.max-h-\\[21\\.625rem\\]{max-height:21.625rem}.max-h-\\[24\\.625rem\\]{max-height:24.625rem}.max-h-\\[25rem\\]{max-height:25rem}.max-h-\\[300px\\]{max-height:300px}.max-h-\\[33\\.625rem\\]{max-height:33.625rem}.max-h-\\[initial\\]{max-height:initial}.min-h-32{min-height:8rem}.min-h-\\[16\\.5rem\\]{min-height:16.5rem}.min-h-\\[3\\.5rem\\]{min-height:3.5rem}.min-h-\\[initial\\]{min-height:initial}.\\!w-10{width:2.5rem!important}.\\!w-\\[3\\.125rem\\]{width:3.125rem!important}.\\!w-\\[4\\.75rem\\]{width:4.75rem!important}.w-0{width:0px}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-2\\/3{width:66.666667%}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-64{width:16rem}.w-8{width:2rem}.w-80{width:20rem}.w-\\[\\.0625rem\\]{width:.0625rem}.w-\\[\\.875rem\\]{width:.875rem}.w-\\[1\\%\\]{width:1%}.w-\\[1\\.3rem\\]{width:1.3rem}.w-\\[16\\.5rem\\]{width:16.5rem}.w-\\[17\\.5rem\\]{width:17.5rem}.w-\\[17\\.625rem\\]{width:17.625rem}.w-\\[2\\.25rem\\]{width:2.25rem}.w-\\[29\\%\\]{width:29%}.w-\\[4\\.75rem\\]{width:4.75rem}.w-\\[900px\\]{width:900px}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-screen{width:100vw}.min-w-0{min-width:0px}.min-w-24{min-width:6rem}.min-w-40{min-width:10rem}.min-w-\\[1\\.25rem\\]{min-width:1.25rem}.min-w-\\[12rem\\]{min-width:12rem}.min-w-\\[16\\.5rem\\]{min-width:16.5rem}.min-w-\\[6\\.25rem\\]{min-width:6.25rem}.\\!max-w-full{max-width:100%!important}.max-w-24{max-width:6rem}.max-w-3xl{max-width:48rem}.max-w-\\[14\\.5rem\\]{max-width:14.5rem}.max-w-\\[15\\.75rem\\]{max-width:15.75rem}.max-w-\\[1px\\]{max-width:1px}.max-w-\\[24rem\\]{max-width:24rem}.max-w-\\[250px\\]{max-width:250px}.max-w-\\[30rem\\]{max-width:30rem}.max-w-\\[36rem\\]{max-width:36rem}.max-w-\\[37\\.5rem\\]{max-width:37.5rem}.max-w-\\[40rem\\]{max-width:40rem}.max-w-\\[7\\.25rem\\]{max-width:7.25rem}.max-w-\\[7rem\\]{max-width:7rem}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[calc\\(100\\%-4\\.75rem\\)\\]{max-width:calc(100% - 4.75rem)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-\\[1_0_5rem\\]{flex:1 0 5rem}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.origin-left-right{transform-origin:0% 50%}.-translate-x-1\\/2,.-translate-x-2\\/4{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2,.-translate-y-2\\/4{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-2{--tw-translate-x: .5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-10{--tw-translate-y: 2.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-90{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-135deg\\]{--tw-rotate: -135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-45deg\\]{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[135deg\\]{--tw-rotate: 135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[45deg\\]{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-x-0{--tw-scale-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-x-100{--tw-scale-x: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-y-0{--tw-scale-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-y-100{--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-y-\\[0\\.7\\]{--tw-scale-y: .7;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-gpu{transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.animate-\\[horizontal-shaking_0\\.3s_ease-in-out\\]{animation:horizontal-shaking .3s ease-in-out}@keyframes ping{75%,to{transform:scale(2);opacity:0}}.animate-ping{animation:ping 1s cubic-bezier(0,0,.2,1) infinite}@keyframes progress{0%{transform:translate(0) scaleX(0)}40%{transform:translate(0) scaleX(.4)}to{transform:translate(100%) scaleX(.5)}}.animate-progress{animation:progress 1s infinite linear}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.\\!cursor-default{cursor:default!important}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-all{-webkit-user-select:all;-moz-user-select:all;user-select:all}.resize{resize:both}.list-disc{list-style-type:disc}.auto-cols-fr{grid-auto-columns:minmax(0,1fr)}.grid-flow-col{grid-auto-flow:column}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-\\[\\.125rem\\]{gap:.125rem}.gap-\\[\\.5625rem\\]{gap:.5625rem}.gap-\\[\\.625rem\\]{gap:.625rem}.gap-x-1{-moz-column-gap:.25rem;column-gap:.25rem}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.gap-y-1{row-gap:.25rem}.gap-y-2{row-gap:.5rem}.gap-y-4{row-gap:1rem}.space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-clip{overflow:clip}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-x-clip{overflow-x:clip}.overflow-x-visible{overflow-x:visible}.overflow-x-scroll{overflow-x:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-wrap{text-wrap:wrap}.text-nowrap{text-wrap:nowrap}.break-all{word-break:break-all}.\\!rounded-lg{border-radius:.5rem!important}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-\\[50\\%\\]{border-radius:50%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-none{border-radius:0}.rounded-xl{border-radius:.75rem}.\\!rounded-l-none{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.\\!rounded-r-none{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.\\!rounded-t-none{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-b-2xl{border-bottom-right-radius:1rem;border-bottom-left-radius:1rem}.rounded-b-3xl{border-bottom-right-radius:1.5rem;border-bottom-left-radius:1.5rem}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-2xl{border-top-left-radius:1rem;border-top-right-radius:1rem}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-4{border-width:4px}.border-8{border-width:8px}.border-\\[\\.1875rem\\]{border-width:.1875rem}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-b-\\[\\.1875rem\\]{border-bottom-width:.1875rem}.border-l{border-left-width:1px}.border-l-0{border-left-width:0px}.border-l-4{border-left-width:4px}.border-r{border-right-width:1px}.border-r-2{border-right-width:2px}.border-t{border-top-width:1px}.border-t-0{border-top-width:0px}.border-t-\\[0\\.4rem\\]{border-top-width:.4rem}.border-solid{border-style:solid}.border-dotted{border-style:dotted}.border-none{border-style:none}.\\!border-primary-light{border-color:var(--primary-light)!important}.border-\\[rgba\\(0\\,98\\,255\\,0\\.3\\)\\]{border-color:#0062ff4d}.border-\\[rgba\\(10\\,10\\,10\\,0\\.15\\)\\]{border-color:#0a0a0a26}.border-\\[rgba\\(117\\,_34\\,_206\\,_0\\.1\\)\\]{border-color:#7522ce1a}.border-\\[rgba\\(161\\,_98\\,_7\\,_0\\.1\\)\\]{border-color:#a162071a}.border-\\[rgba\\(179\\,_44\\,_34\\,_0\\.1\\)\\]{border-color:#b32c221a}.border-\\[rgba\\(194\\,_115\\,_12\\,_0\\.1\\)\\]{border-color:#c2730c1a}.border-\\[rgba\\(22\\,128\\,58\\,_0\\.1\\)\\]{border-color:#16803a1a}.border-\\[rgba\\(255\\,255\\,255\\,0\\.5\\)\\]{border-color:#ffffff80}.border-\\[rgba\\(29\\,_101\\,_216\\,_0\\.1\\)\\]{border-color:#1d65d81a}.border-\\[rgba\\(55\\,_65\\,_81\\,_0\\.1\\)\\]{border-color:#3741511a}.border-blue-100{--tw-border-opacity: 1;border-color:rgb(219 234 254 / var(--tw-border-opacity, 1))}.border-border-primary{border-color:var(--border-primary)}.border-border-primary-hover{border-color:var(--border-primary-hover)}.border-error-secondary{border-color:var(--error-secondary)}.border-error-tertiary{border-color:var(--error-tertiary)}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-input-border{border-color:var(--input-border)}.border-input-disabled-border{border-color:var(--input-disabled-border)}.border-neutral-100{--tw-border-opacity: 1;border-color:rgb(245 245 245 / var(--tw-border-opacity, 1))}.border-neutral-200{--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.border-neutral-300{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity, 1))}.border-primary{border-color:var(--primary)}.border-primary-light{border-color:var(--primary-light)}.border-primary-mid{border-color:var(--primary-mid)}.border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity, 1))}.border-red-700{--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity, 1))}.border-success-tertiary{border-color:var(--success-tertiary)}.border-table-row-border-color{border-color:var(--table-row-border-color)}.border-transparent{border-color:transparent}.border-white\\/40{border-color:#fff6}.border-b-\\[black\\]{--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.border-b-\\[white\\]{--tw-border-opacity: 1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.border-l-\\[black\\]{--tw-border-opacity: 1;border-left-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.border-l-\\[white\\]{--tw-border-opacity: 1;border-left-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.border-r-\\[black\\]{--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.border-r-\\[white\\]{--tw-border-opacity: 1;border-right-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.border-r-table-row-border-color{border-right-color:var(--table-row-border-color)}.border-t-\\[black\\]{--tw-border-opacity: 1;border-top-color:rgb(0 0 0 / var(--tw-border-opacity, 1))}.border-t-\\[white\\]{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity, 1))}.\\!bg-gray-200{--tw-bg-opacity: 1 !important;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))!important}.\\!bg-transparent{background-color:transparent!important}.bg-\\[rgba\\(0\\,98\\,255\\,0\\.06\\)\\]{background-color:#0062ff0f}.bg-\\[rgba\\(10\\,10\\,10\\,0\\.03\\)\\]{background-color:#0a0a0a08}.bg-\\[rgba\\(255\\,255\\,255\\,0\\.15\\)\\]{background-color:#ffffff26}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-body{background-color:var(--body)}.bg-child{background-color:var(--child)}.bg-child-alt{background-color:var(--child-alt)}.bg-disabled{background-color:var(--disabled)}.bg-error-accent{background-color:var(--error-accent)}.bg-error-tertiary{background-color:var(--error-tertiary)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-300{--tw-bg-opacity: 1;background-color:rgb(134 239 172 / var(--tw-bg-opacity, 1))}.bg-green-50{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity, 1))}.bg-info-accent{background-color:var(--info-accent)}.bg-inherit{background-color:inherit}.bg-input-bg{background-color:var(--input-bg)}.bg-neutral-100{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.bg-neutral-200{--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity, 1))}.bg-neutral-300{--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity, 1))}.bg-neutral-50{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity, 1))}.bg-neutral-950{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1))}.bg-orange-100{--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity, 1))}.bg-orange-50{--tw-bg-opacity: 1;background-color:rgb(255 247 237 / var(--tw-bg-opacity, 1))}.bg-parent-bg{background-color:var(--parent-bg)}.bg-primary{background-color:var(--primary)}.bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity, 1))}.bg-purple-300{--tw-bg-opacity: 1;background-color:rgb(216 180 254 / var(--tw-bg-opacity, 1))}.bg-purple-50{--tw-bg-opacity: 1;background-color:rgb(250 245 255 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-secondary{background-color:var(--secondary)}.bg-secondary-hover{background-color:var(--secondary-hover)}.bg-secondary-pressed{background-color:var(--secondary-pressed)}.bg-success-tertiary{background-color:var(--success-tertiary)}.bg-tertiary{background-color:var(--tertiary)}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-300{--tw-bg-opacity: 1;background-color:rgb(253 224 71 / var(--tw-bg-opacity, 1))}.bg-yellow-400{--tw-bg-opacity: 1;background-color:rgb(250 204 21 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-\\[4\\%\\]{--tw-bg-opacity: 4%}.bg-opacity-\\[8\\%\\]{--tw-bg-opacity: 8%}.bg-\\[linear-gradient\\(270deg\\,\\#FFFFFF_5\\%\\,\\#F0F6FF_20\\%\\,\\#F0F6FF_80\\%\\,\\#FFFFFF_95\\%\\)\\]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20%,#f0f6ff 80%,#fff 95%)}.bg-\\[linear-gradient\\(270deg\\,\\#FFFFFF_5\\%\\,\\#FAFAFA_20\\%\\,\\#FAFAFA_80\\%\\,\\#FFFFFF_95\\%\\)\\]{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20%,#fafafa 80%,#fff 95%)}.bg-gradient-to-l{background-image:linear-gradient(to left,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-\\[\\#0000000D\\]{--tw-gradient-from: #0000000D var(--tw-gradient-from-position);--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.fill-error-tertiary{fill:var(--error-tertiary)}.stroke-\\[\\.125rem\\]{stroke-width:.125rem}.stroke-\\[1\\.75\\]{stroke-width:1.75}.object-cover{-o-object-fit:cover;object-fit:cover}.\\!p-0{padding:0!important}.\\!p-4{padding:1rem!important}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-\\[\\.875rem\\]{padding:.875rem}.\\!py-0{padding-top:0!important;padding-bottom:0!important}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-7{padding-left:1.75rem;padding-right:1.75rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[\\.5625rem\\]{padding-left:.5625rem;padding-right:.5625rem}.px-\\[\\.625rem\\]{padding-left:.625rem;padding-right:.625rem}.px-\\[\\.6875rem\\]{padding-left:.6875rem;padding-right:.6875rem}.px-\\[\\.75rem\\]{padding-left:.75rem;padding-right:.75rem}.px-\\[\\.9375rem\\]{padding-left:.9375rem;padding-right:.9375rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-\\[\\.625rem\\]{padding-top:.625rem;padding-bottom:.625rem}.py-\\[\\.6875rem\\]{padding-top:.6875rem;padding-bottom:.6875rem}.py-\\[\\.75rem\\]{padding-top:.75rem;padding-bottom:.75rem}.py-\\[0\\.4375rem\\]{padding-top:.4375rem;padding-bottom:.4375rem}.py-\\[1\\.625rem\\]{padding-top:1.625rem;padding-bottom:1.625rem}.\\!pt-8{padding-top:2rem!important}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.pb-2\\.5{padding-bottom:.625rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pb-8{padding-bottom:2rem}.pl-1{padding-left:.25rem}.pl-10{padding-left:2.5rem}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.pl-\\[\\.9375rem\\]{padding-left:.9375rem}.pl-\\[3\\.25rem\\]{padding-left:3.25rem}.pl-\\[7px\\]{padding-left:7px}.pr-0{padding-right:0}.pr-2{padding-right:.5rem}.pr-4{padding-right:1rem}.pr-\\[\\.5625rem\\]{padding-right:.5625rem}.pr-\\[\\.625rem\\]{padding-right:.625rem}.pr-\\[15px\\]{padding-right:15px}.pt-0{padding-top:0}.pt-1{padding-top:.25rem}.pt-4{padding-top:1rem}.pt-8{padding-top:2rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.align-sub{vertical-align:sub}.align-super{vertical-align:super}.\\!text-base{font-size:1rem!important;line-height:1.5rem!important}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\\[1\\.75rem\\]{font-size:1.75rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.not-italic{font-style:normal}.\\!leading-\\[1\\.2rem\\]{line-height:1.2rem!important}.leading-10{line-height:2.5rem}.leading-none{line-height:1}.tracking-\\[-0\\.2px\\]{letter-spacing:-.2px}.tracking-\\[-0\\.8px\\]{letter-spacing:-.8px}.\\!text-primary{color:var(--primary)!important}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-blue-900{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.text-body-text{color:var(--body-text)}.text-disabled-text{color:var(--disabled-text)}.text-error-secondary{color:var(--error-secondary)}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity, 1))}.text-green-900{--tw-text-opacity: 1;color:rgb(20 83 45 / var(--tw-text-opacity, 1))}.text-input-inline{color:var(--input-inline)}.text-neutral-200{--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.text-neutral-300{--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity, 1))}.text-neutral-500{--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity, 1))}.text-neutral-600{--tw-text-opacity: 1;color:rgb(82 82 82 / var(--tw-text-opacity, 1))}.text-neutral-700{--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity, 1))}.text-neutral-900{--tw-text-opacity: 1;color:rgb(23 23 23 / var(--tw-text-opacity, 1))}.text-neutral-950{--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity, 1))}.text-orange-700{--tw-text-opacity: 1;color:rgb(194 65 12 / var(--tw-text-opacity, 1))}.text-orange-900{--tw-text-opacity: 1;color:rgb(124 45 18 / var(--tw-text-opacity, 1))}.text-primary{color:var(--primary)}.text-primary-light{color:var(--primary-light)}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity, 1))}.text-purple-900{--tw-text-opacity: 1;color:rgb(88 28 135 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.text-red-900{--tw-text-opacity: 1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-900{--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity, 1))}.text-success-primary{color:var(--success-primary)}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity, 1))}.text-yellow-900{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-10{opacity:.1}.opacity-100{opacity:1}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_0_0_100vmax_rgba\\(10\\,_10\\,_10\\,_0\\.5\\)\\]{--tw-shadow: 0 0 0 100vmax rgba(10, 10, 10, .5);--tw-shadow-colored: 0 0 0 100vmax var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_12px_12px_-16px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\]{--tw-shadow: 0 12px 12px -16px rgba(0,0,0,.2);--tw-shadow-colored: 0 12px 12px -16px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[inset_0_-1px_0_0_theme\\(\\'colors\\.gray\\.200\\'\\)\\]{--tw-shadow: inset 0 -1px 0 0 #e5e7eb;--tw-shadow-colored: inset 0 -1px 0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-dotted{outline-style:dotted}.outline-1{outline-width:1px}.outline-2{outline-width:2px}.outline-\\[\\.1875rem\\]{outline-width:.1875rem}.outline-blue-500{outline-color:#3b82f6}.outline-blue-600{outline-color:#2563eb}.outline-child{outline-color:var(--child)}.outline-gray-300{outline-color:#d1d5db}.outline-white{outline-color:#fff}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-\\[0_2px_4px_rgba\\(0\\,0\\,0\\,0\\.24\\)\\]{--tw-drop-shadow: drop-shadow(0 2px 4px rgba(0,0,0,.24));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.grayscale{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[height\\,opacity\\]{transition-property:height,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-100{transition-duration:.1s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-\\[\\.3s\\]{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-linear{transition-timing-function:linear}.contain-layout{--tw-contain-layout: layout;contain:var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)}.content-\\[\\'\\'\\]{--tw-content: "";content:var(--tw-content)}.content-\\[\\'\\\\00a0\\'\\]{--tw-content: " ";content:var(--tw-content)}.content-\\[\\'\\|\\'\\]{--tw-content: "|";content:var(--tw-content)}.\\[filter\\:drop-shadow\\(0_-1px_2px_rgb\\(0_0_0_\\/_0\\.1\\)\\)_drop-shadow\\(0_-1px_1px_rgb\\(0_0_0_\\/_0\\.06\\)\\)\\]{filter:drop-shadow(0 -1px 2px rgb(0 0 0 / .1)) drop-shadow(0 -1px 1px rgb(0 0 0 / .06))}.\\[filter\\:drop-shadow\\(0_1px_2px_rgb\\(0_0_0_\\/_0\\.1\\)\\)_drop-shadow\\(0_1px_1px_rgb\\(0_0_0_\\/_0\\.06\\)\\)\\]{filter:drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06))}body{background-color:var(--body);color:var(--body-text)}.placeholder\\:text-disabled-text::-moz-placeholder{color:var(--disabled-text)}.placeholder\\:text-disabled-text::placeholder{color:var(--disabled-text)}.placeholder\\:text-error-primary::-moz-placeholder{color:var(--error-primary)}.placeholder\\:text-error-primary::placeholder{color:var(--error-primary)}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.placeholder\\:text-neutral-400::-moz-placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity, 1))}.placeholder\\:text-neutral-400::placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity, 1))}.placeholder\\:text-slate-400::-moz-placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.placeholder\\:text-slate-400::placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.hover\\:\\!cursor-default:hover{cursor:default!important}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:border-none:hover{border-style:none}.hover\\:border-border-primary:hover{border-color:var(--border-primary)}.hover\\:border-border-primary-hover:hover{border-color:var(--border-primary-hover)}.hover\\:bg-blue-100:hover{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1))}.hover\\:bg-primary-hover:hover{background-color:var(--primary-hover)}.hover\\:bg-tertiary-hover:hover{background-color:var(--tertiary-hover)}.focus\\:border-2:focus{border-width:2px}.focus\\:border-primary-light:focus{border-color:var(--primary-light)}.focus\\:px-\\[15px\\]:focus{padding-left:15px;padding-right:15px}.focus\\:py-2:focus{padding-top:.5rem;padding-bottom:.5rem}.focus\\:py-\\[\\.4375rem\\]:focus{padding-top:.4375rem;padding-bottom:.4375rem}.focus\\:pl-\\[39px\\]:focus{padding-left:39px}.focus\\:pr-4:focus{padding-right:1rem}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-primary:focus{--tw-ring-color: var(--primary)}.focus\\:ring-primary-light:focus{--tw-ring-color: var(--primary-light)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.active\\:bg-primary-pressed:active{background-color:var(--primary-pressed)}@media (min-width: 640px){.sm\\:mx-\\[5\\.75rem\\]{margin-left:5.75rem;margin-right:5.75rem}.sm\\:mb-5{margin-bottom:1.25rem}.sm\\:ml-0{margin-left:0}.sm\\:mt-2{margin-top:.5rem}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:min-h-\\[4\\.5rem\\]{min-height:4.5rem}.sm\\:\\!w-\\[8\\.5rem\\]{width:8.5rem!important}.sm\\:w-\\[16rem\\]{width:16rem}.sm\\:w-full{width:100%}.sm\\:max-w-\\[16rem\\]{max-width:16rem}.sm\\:max-w-\\[calc\\(100\\%-10rem\\)\\]{max-width:calc(100% - 10rem)}.sm\\:flex-row{flex-direction:row}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:items-center{align-items:center}.sm\\:gap-6{gap:1.5rem}.sm\\:overflow-visible{overflow:visible}.sm\\:rounded-2xl{border-radius:1rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width: 768px){.md\\:relative{position:relative}.md\\:left-1\\/2{left:50%}.md\\:right-0{right:0}.md\\:-ml-12{margin-left:-3rem}.md\\:mb-3{margin-bottom:.75rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-12{width:3rem}.md\\:w-full{width:100%}.md\\:-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.md\\:flex-row{flex-direction:row}.md\\:flex-wrap{flex-wrap:wrap}.md\\:gap-12{gap:3rem}.md\\:gap-6{gap:1.5rem}.md\\:border-b-0{border-bottom-width:0px}.md\\:border-l{border-left-width:1px}.md\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.md\\:p-6{padding:1.5rem}.md\\:pl-\\[1\\.0625rem\\]{padding-left:1.0625rem}.md\\:text-\\[1\\.75rem\\]{font-size:1.75rem}}@media (min-width: 1024px){.lg\\:mt-10{margin-top:2.5rem}.lg\\:block{display:block}.lg\\:h-6{height:1.5rem}.lg\\:w-6{width:1.5rem}.lg\\:w-auto{width:auto}.lg\\:min-w-\\[17\\.5rem\\]{min-width:17.5rem}.lg\\:max-w-\\[100\\.4375rem\\]{max-width:100.4375rem}.lg\\:flex-row{flex-direction:row}.lg\\:justify-normal{justify-content:normal}.lg\\:justify-start{justify-content:flex-start}.lg\\:gap-5{gap:1.25rem}.lg\\:border-b-0{border-bottom-width:0px}.lg\\:p-0{padding:0}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.lg\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem}.lg\\:py-\\[0\\.6875rem\\]{padding-top:.6875rem;padding-bottom:.6875rem}.lg\\:pt-4{padding-top:1rem}.lg\\:text-sm{font-size:.875rem;line-height:1.25rem}.lg\\:focus\\:py-\\[\\.6875rem\\]:focus{padding-top:.6875rem;padding-bottom:.6875rem}}@media (min-width: 1280px){.xl\\:w-fit{width:-moz-fit-content;width:fit-content}.xl\\:max-w-40{max-width:10rem}.xl\\:pr-4{padding-right:1rem}}@media (min-width: 1536px){.\\32xl\\:max-w-\\[14\\.5rem\\]{max-width:14.5rem}.\\32xl\\:gap-20{gap:5rem}}.dark\\:border-none:where(.dark,.dark *){border-style:none}.dark\\:border-\\[rgba\\(255\\,255\\,255\\,0\\.5\\)\\]:where(.dark,.dark *){border-color:#ffffff80}.dark\\:border-blue-400:where(.dark,.dark *){--tw-border-opacity: 1;border-color:rgb(96 165 250 / var(--tw-border-opacity, 1))}.dark\\:border-input-border:where(.dark,.dark *){border-color:var(--input-border)}.dark\\:border-l-neutral-200:where(.dark,.dark *){--tw-border-opacity: 1;border-left-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.dark\\:border-t-neutral-200:where(.dark,.dark *){--tw-border-opacity: 1;border-top-color:rgb(229 229 229 / var(--tw-border-opacity, 1))}.dark\\:bg-\\[rgb\\(120\\,130\\,160\\)\\]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(120 130 160 / var(--tw-bg-opacity, 1))}.dark\\:bg-\\[rgb\\(50\\,55\\,70\\)\\]:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(50 55 70 / var(--tw-bg-opacity, 1))}.dark\\:bg-\\[rgba\\(255\\,255\\,255\\,0\\.15\\)\\]:where(.dark,.dark *){background-color:#ffffff26}.dark\\:bg-blue-700:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity, 1))}.dark\\:bg-child:where(.dark,.dark *){background-color:var(--child)}.dark\\:bg-child-alt:where(.dark,.dark *){background-color:var(--child-alt)}.dark\\:bg-gray-700:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-green-700:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity, 1))}.dark\\:bg-input-bg:where(.dark,.dark *){background-color:var(--input-bg)}.dark\\:bg-input-border:where(.dark,.dark *){background-color:var(--input-border)}.dark\\:bg-neutral-200:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity, 1))}.dark\\:bg-orange-700:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity, 1))}.dark\\:bg-parent-bg:where(.dark,.dark *){background-color:var(--parent-bg)}.dark\\:bg-purple-700:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(126 34 206 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-700:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity, 1))}.dark\\:bg-yellow-700:where(.dark,.dark *){--tw-bg-opacity: 1;background-color:rgb(161 98 7 / var(--tw-bg-opacity, 1))}.dark\\:bg-\\[linear-gradient\\(270deg\\,\\#0f172a_5\\%\\,\\#262c3e_20\\%\\,\\#262c3e_80\\%\\,\\#0f172a_95\\%\\)\\]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20%,#262c3e 80%,#0f172a 95%)}.dark\\:bg-\\[linear-gradient\\(270deg\\,\\#0f172a_5\\%\\,\\#32394c_20\\%\\,\\#32394c_80\\%\\,\\#0f172a_95\\%\\)\\]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20%,#32394c 80%,#0f172a 95%)}.dark\\:text-blue-400:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity, 1))}.dark\\:text-body-text:where(.dark,.dark *){color:var(--body-text)}.dark\\:text-error-tertiary:where(.dark,.dark *){color:var(--error-tertiary)}.dark\\:text-green-500:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity, 1))}.dark\\:text-neutral-200:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity, 1))}.dark\\:text-primary-light:where(.dark,.dark *){color:var(--primary-light)}.dark\\:text-red-400:where(.dark,.dark *){--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity, 1))}.dark\\:shadow-\\[inset_0_-1px_0_0_theme\\(\\'colors\\.table-row-border-color\\'\\)\\]:where(.dark,.dark *){--tw-shadow: inset 0 -1px 0 0 var(--table-row-border-color);--tw-shadow-colored: inset 0 -1px 0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark\\:outline-none:where(.dark,.dark *){outline:2px solid transparent;outline-offset:2px}.dark\\:outline:where(.dark,.dark *){outline-style:solid}.dark\\:outline-2:where(.dark,.dark *){outline-width:2px}.dark\\:hover\\:bg-secondary:hover:where(.dark,.dark *){background-color:var(--secondary)}`, Q3 = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [a, o] of e)
    r[a] = o;
  return r;
}, e8 = { key: 1 }, t8 = {
  __name: "PProductConfigurator.ce",
  props: {
    proxy: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: "nl"
    },
    priceType: {
      type: String,
      default: ""
    },
    productCode: {
      type: String,
      default: ""
    },
    modal: {
      type: Boolean,
      default: !1
    },
    storeProductsLocally: {
      type: Boolean,
      default: !1
    },
    callbackUrl: {
      type: String,
      default: ""
    },
    internalProductId: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, r = Qe(new H3({ proxy: "" }));
    Ie(r, () => {
      r.language && r.setLanguage(r.language);
    });
    const a = B({
      get: () => r.getConfig(),
      set: (o) => r.updateExternal ? r.setOption(o).getNextOption() : null
    });
    return _t(async () => {
      window.connectConfigurator = r, e.proxy && (r.init({ proxy: e.proxy, language: e.language, priceType: e.priceType, storeProductsLocally: e.storeProductsLocally, callbackUrl: e.callbackUrl, internalProductId: e.internalProductId }), e.productCode && await (await r.setProduct(e.productCode)).getNextOption());
    }), (o, n) => t.modal ? (y(), W(G3, {
      key: 0,
      part: "modal"
    }, {
      default: G(() => [
        r.alert.title ? (y(), W(A(hi), Ca(We({ key: 0 }, r.alert)), null, 16)) : F("", !0),
        ee(A(Vc), {
          modelValue: a.value,
          "onUpdate:modelValue": n[0] || (n[0] = (i) => a.value = i),
          template: r.options,
          "accordion-state": r.openState,
          loading: r.loading,
          "delivery-options": r.deliveryOptions
        }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options"])
      ]),
      _: 1
    })) : (y(), E("div", e8, [
      r.alert.title ? (y(), W(A(hi), Ca(We({ key: 0 }, r.alert)), null, 16)) : F("", !0),
      ee(A(Vc), {
        modelValue: a.value,
        "onUpdate:modelValue": n[1] || (n[1] = (i) => a.value = i),
        template: r.options,
        "accordion-state": r.openState,
        loading: r.loading,
        "delivery-options": r.deliveryOptions
      }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options"])
    ]));
  }
}, r8 = /* @__PURE__ */ Q3(t8, [["styles", [Z3]]]), a8 = /* @__PURE__ */ a0(r8);
customElements.define("connect-product-configurator", a8);
