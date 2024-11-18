/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jl(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) e[r] = 1;
  return (r) => r in e;
}
const Ve = {}, qo = [], pr = () => {
}, qm = () => !1, Ii = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Pl = (t) => t.startsWith("onUpdate:"), qe = Object.assign, Rl = (t, e) => {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}, Wm = Object.prototype.hasOwnProperty, Re = (t, e) => Wm.call(t, e), ce = Array.isArray, Wo = (t) => la(t) === "[object Map]", ln = (t) => la(t) === "[object Set]", Vc = (t) => la(t) === "[object Date]", $e = (t) => typeof t == "function", Ke = (t) => typeof t == "string", Xt = (t) => typeof t == "symbol", Fe = (t) => t !== null && typeof t == "object", Qu = (t) => (Fe(t) || $e(t)) && $e(t.then) && $e(t.catch), ep = Object.prototype.toString, la = (t) => ep.call(t), Um = (t) => la(t).slice(8, -1), Ni = (t) => la(t) === "[object Object]", Vl = (t) => Ke(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Sn = /* @__PURE__ */ jl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zi = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => e[r] || (e[r] = t(r));
}, Km = /-(\w)/g, dt = zi(
  (t) => t.replace(Km, (e, r) => r ? r.toUpperCase() : "")
), Jm = /\B([A-Z])/g, kt = zi(
  (t) => t.replace(Jm, "-$1").toLowerCase()
), ji = zi((t) => t.charAt(0).toUpperCase() + t.slice(1)), ns = zi(
  (t) => t ? `on${ji(t)}` : ""
), xt = (t, e) => !Object.is(t, e), Ra = (t, ...e) => {
  for (let r = 0; r < t.length; r++)
    t[r](...e);
}, tp = (t, e, r, o = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: r
  });
}, Ya = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, Fs = (t) => {
  const e = Ke(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Lc;
const Pi = () => Lc || (Lc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _o(t) {
  if (ce(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const o = t[r], n = Ke(o) ? Zm(o) : _o(o);
      if (n)
        for (const a in n)
          e[a] = n[a];
    }
    return e;
  } else if (Ke(t) || Fe(t))
    return t;
}
const Ym = /;(?![^(]*\))/g, Xm = /:([^]+)/, Gm = /\/\*[^]*?\*\//g;
function Zm(t) {
  const e = {};
  return t.replace(Gm, "").split(Ym).forEach((r) => {
    if (r) {
      const o = r.split(Xm);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function Ne(t) {
  let e = "";
  if (Ke(t))
    e = t;
  else if (ce(t))
    for (let r = 0; r < t.length; r++) {
      const o = Ne(t[r]);
      o && (e += o + " ");
    }
  else if (Fe(t))
    for (const r in t)
      t[r] && (e += r + " ");
  return e.trim();
}
function Zo(t) {
  if (!t) return null;
  let { class: e, style: r } = t;
  return e && !Ke(e) && (t.class = Ne(e)), r && (t.style = _o(r)), t;
}
const Qm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", eg = /* @__PURE__ */ jl(Qm);
function rp(t) {
  return !!t || t === "";
}
function tg(t, e) {
  if (t.length !== e.length) return !1;
  let r = !0;
  for (let o = 0; r && o < t.length; o++)
    r = wo(t[o], e[o]);
  return r;
}
function wo(t, e) {
  if (t === e) return !0;
  let r = Vc(t), o = Vc(e);
  if (r || o)
    return r && o ? t.getTime() === e.getTime() : !1;
  if (r = Xt(t), o = Xt(e), r || o)
    return t === e;
  if (r = ce(t), o = ce(e), r || o)
    return r && o ? tg(t, e) : !1;
  if (r = Fe(t), o = Fe(e), r || o) {
    if (!r || !o)
      return !1;
    const n = Object.keys(t).length, a = Object.keys(e).length;
    if (n !== a)
      return !1;
    for (const i in t) {
      const s = t.hasOwnProperty(i), l = e.hasOwnProperty(i);
      if (s && !l || !s && l || !wo(t[i], e[i]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function Ll(t, e) {
  return t.findIndex((r) => wo(r, e));
}
const op = (t) => !!(t && t.__v_isRef === !0), te = (t) => Ke(t) ? t : t == null ? "" : ce(t) || Fe(t) && (t.toString === ep || !$e(t.toString)) ? op(t) ? te(t.value) : JSON.stringify(t, np, 2) : String(t), np = (t, e) => op(e) ? np(t, e.value) : Wo(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (r, [o, n], a) => (r[as(o, a) + " =>"] = n, r),
    {}
  )
} : ln(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((r) => as(r))
} : Xt(e) ? as(e) : Fe(e) && !ce(e) && !Ni(e) ? String(e) : e, as = (t, e = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xt(t) ? `Symbol(${(r = t.description) != null ? r : e})` : t
  );
};
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let gt;
class rg {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = gt, !e && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(
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
      const r = gt;
      try {
        return gt = this, e();
      } finally {
        gt = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    gt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    gt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let r, o;
      for (r = 0, o = this.effects.length; r < o; r++)
        this.effects[r].stop();
      for (r = 0, o = this.cleanups.length; r < o; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, o = this.scopes.length; r < o; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ap() {
  return gt;
}
function og(t, e = !1) {
  gt && gt.cleanups.push(t);
}
let He;
const is = /* @__PURE__ */ new WeakSet();
class ip {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, gt && gt.active && gt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, is.has(this) && (is.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Dc(this), cp(this);
    const e = He, r = Jt;
    He = this, Jt = !0;
    try {
      return this.fn();
    } finally {
      dp(this), He = e, Jt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Fl(e);
      this.deps = this.depsTail = void 0, Dc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Hs(this) && this.run();
  }
  get dirty() {
    return Hs(this);
  }
}
let sp = 0, _n, Cn;
function lp(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Cn, Cn = t;
    return;
  }
  t.next = _n, _n = t;
}
function Dl() {
  sp++;
}
function Bl() {
  if (--sp > 0)
    return;
  if (Cn) {
    let e = Cn;
    for (Cn = void 0; e; ) {
      const r = e.next;
      e.next = void 0, e.flags &= -9, e = r;
    }
  }
  let t;
  for (; _n; ) {
    let e = _n;
    for (_n = void 0; e; ) {
      const r = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (o) {
          t || (t = o);
        }
      e = r;
    }
  }
  if (t) throw t;
}
function cp(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function dp(t) {
  let e, r = t.depsTail, o = r;
  for (; o; ) {
    const n = o.prevDep;
    o.version === -1 ? (o === r && (r = n), Fl(o), ng(o)) : e = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = n;
  }
  t.deps = e, t.depsTail = r;
}
function Hs(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (up(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function up(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ln))
    return;
  t.globalVersion = Ln;
  const e = t.dep;
  if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !Hs(t)) {
    t.flags &= -3;
    return;
  }
  const r = He, o = Jt;
  He = t, Jt = !0;
  try {
    cp(t);
    const n = t.fn(t._value);
    (e.version === 0 || xt(n, t._value)) && (t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    He = r, Jt = o, dp(t), t.flags &= -3;
  }
}
function Fl(t, e = !1) {
  const { dep: r, prevSub: o, nextSub: n } = t;
  if (o && (o.nextSub = n, t.prevSub = void 0), n && (n.prevSub = o, t.nextSub = void 0), r.subs === t && (r.subs = o, !o && r.computed)) {
    r.computed.flags &= -5;
    for (let a = r.computed.deps; a; a = a.nextDep)
      Fl(a, !0);
  }
  !e && !--r.sc && r.map && r.map.delete(r.key);
}
function ng(t) {
  const { prevDep: e, nextDep: r } = t;
  e && (e.nextDep = r, t.prevDep = void 0), r && (r.prevDep = e, t.nextDep = void 0);
}
let Jt = !0;
const pp = [];
function qr() {
  pp.push(Jt), Jt = !1;
}
function Wr() {
  const t = pp.pop();
  Jt = t === void 0 ? !0 : t;
}
function Dc(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const r = He;
    He = void 0;
    try {
      e();
    } finally {
      He = r;
    }
  }
}
let Ln = 0;
class ag {
  constructor(e, r) {
    this.sub = e, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ri {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e) {
    if (!He || !Jt || He === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== He)
      r = this.activeLink = new ag(He, this), He.deps ? (r.prevDep = He.depsTail, He.depsTail.nextDep = r, He.depsTail = r) : He.deps = He.depsTail = r, fp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const o = r.nextDep;
      o.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = o), r.prevDep = He.depsTail, r.nextDep = void 0, He.depsTail.nextDep = r, He.depsTail = r, He.deps === r && (He.deps = o);
    }
    return r;
  }
  trigger(e) {
    this.version++, Ln++, this.notify(e);
  }
  notify(e) {
    Dl();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Bl();
    }
  }
}
function fp(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let o = e.deps; o; o = o.nextDep)
        fp(o);
    }
    const r = t.dep.subs;
    r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
  }
}
const Xa = /* @__PURE__ */ new WeakMap(), co = Symbol(
  ""
), qs = Symbol(
  ""
), Dn = Symbol(
  ""
);
function it(t, e, r) {
  if (Jt && He) {
    let o = Xa.get(t);
    o || Xa.set(t, o = /* @__PURE__ */ new Map());
    let n = o.get(r);
    n || (o.set(r, n = new Ri()), n.map = o, n.key = r), n.track();
  }
}
function xr(t, e, r, o, n, a) {
  const i = Xa.get(t);
  if (!i) {
    Ln++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Dl(), e === "clear")
    i.forEach(s);
  else {
    const l = ce(t), c = l && Vl(r);
    if (l && r === "length") {
      const d = Number(o);
      i.forEach((u, p) => {
        (p === "length" || p === Dn || !Xt(p) && p >= d) && s(u);
      });
    } else
      switch ((r !== void 0 || i.has(void 0)) && s(i.get(r)), c && s(i.get(Dn)), e) {
        case "add":
          l ? c && s(i.get("length")) : (s(i.get(co)), Wo(t) && s(i.get(qs)));
          break;
        case "delete":
          l || (s(i.get(co)), Wo(t) && s(i.get(qs)));
          break;
        case "set":
          Wo(t) && s(i.get(co));
          break;
      }
  }
  Bl();
}
function ig(t, e) {
  const r = Xa.get(t);
  return r && r.get(e);
}
function zo(t) {
  const e = je(t);
  return e === t ? e : (it(e, "iterate", Dn), Pt(t) ? e : e.map(st));
}
function Vi(t) {
  return it(t = je(t), "iterate", Dn), t;
}
const sg = {
  __proto__: null,
  [Symbol.iterator]() {
    return ss(this, Symbol.iterator, st);
  },
  concat(...t) {
    return zo(this).concat(
      ...t.map((e) => ce(e) ? zo(e) : e)
    );
  },
  entries() {
    return ss(this, "entries", (t) => (t[1] = st(t[1]), t));
  },
  every(t, e) {
    return wr(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return wr(this, "filter", t, e, (r) => r.map(st), arguments);
  },
  find(t, e) {
    return wr(this, "find", t, e, st, arguments);
  },
  findIndex(t, e) {
    return wr(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return wr(this, "findLast", t, e, st, arguments);
  },
  findLastIndex(t, e) {
    return wr(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return wr(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return ls(this, "includes", t);
  },
  indexOf(...t) {
    return ls(this, "indexOf", t);
  },
  join(t) {
    return zo(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return ls(this, "lastIndexOf", t);
  },
  map(t, e) {
    return wr(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return pn(this, "pop");
  },
  push(...t) {
    return pn(this, "push", t);
  },
  reduce(t, ...e) {
    return Bc(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Bc(this, "reduceRight", t, e);
  },
  shift() {
    return pn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return wr(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return pn(this, "splice", t);
  },
  toReversed() {
    return zo(this).toReversed();
  },
  toSorted(t) {
    return zo(this).toSorted(t);
  },
  toSpliced(...t) {
    return zo(this).toSpliced(...t);
  },
  unshift(...t) {
    return pn(this, "unshift", t);
  },
  values() {
    return ss(this, "values", st);
  }
};
function ss(t, e, r) {
  const o = Vi(t), n = o[e]();
  return o !== t && !Pt(t) && (n._next = n.next, n.next = () => {
    const a = n._next();
    return a.value && (a.value = r(a.value)), a;
  }), n;
}
const lg = Array.prototype;
function wr(t, e, r, o, n, a) {
  const i = Vi(t), s = i !== t && !Pt(t), l = i[e];
  if (l !== lg[e]) {
    const u = l.apply(t, a);
    return s ? st(u) : u;
  }
  let c = r;
  i !== t && (s ? c = function(u, p) {
    return r.call(this, st(u), p, t);
  } : r.length > 2 && (c = function(u, p) {
    return r.call(this, u, p, t);
  }));
  const d = l.call(i, c, o);
  return s && n ? n(d) : d;
}
function Bc(t, e, r, o) {
  const n = Vi(t);
  let a = r;
  return n !== t && (Pt(t) ? r.length > 3 && (a = function(i, s, l) {
    return r.call(this, i, s, l, t);
  }) : a = function(i, s, l) {
    return r.call(this, i, st(s), l, t);
  }), n[e](a, ...o);
}
function ls(t, e, r) {
  const o = je(t);
  it(o, "iterate", Dn);
  const n = o[e](...r);
  return (n === -1 || n === !1) && Wl(r[0]) ? (r[0] = je(r[0]), o[e](...r)) : n;
}
function pn(t, e, r = []) {
  qr(), Dl();
  const o = je(t)[e].apply(t, r);
  return Bl(), Wr(), o;
}
const cg = /* @__PURE__ */ jl("__proto__,__v_isRef,__isVue"), hp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Xt)
);
function dg(t) {
  Xt(t) || (t = String(t));
  const e = je(this);
  return it(e, "has", t), e.hasOwnProperty(t);
}
class mp {
  constructor(e = !1, r = !1) {
    this._isReadonly = e, this._isShallow = r;
  }
  get(e, r, o) {
    const n = this._isReadonly, a = this._isShallow;
    if (r === "__v_isReactive")
      return !n;
    if (r === "__v_isReadonly")
      return n;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return o === (n ? a ? yg : wp : a ? bp : vp).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const i = ce(e);
    if (!n) {
      let l;
      if (i && (l = sg[r]))
        return l;
      if (r === "hasOwnProperty")
        return dg;
    }
    const s = Reflect.get(
      e,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ge(e) ? e : o
    );
    return (Xt(r) ? hp.has(r) : cg(r)) || (n || it(e, "get", r), a) ? s : Ge(s) ? i && Vl(r) ? s : s.value : Fe(s) ? n ? yp(s) : lt(s) : s;
  }
}
class gp extends mp {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, o, n) {
    let a = e[r];
    if (!this._isShallow) {
      const l = Lr(a);
      if (!Pt(o) && !Lr(o) && (a = je(a), o = je(o)), !ce(e) && Ge(a) && !Ge(o))
        return l ? !1 : (a.value = o, !0);
    }
    const i = ce(e) && Vl(r) ? Number(r) < e.length : Re(e, r), s = Reflect.set(
      e,
      r,
      o,
      Ge(e) ? e : n
    );
    return e === je(n) && (i ? xt(o, a) && xr(e, "set", r, o) : xr(e, "add", r, o)), s;
  }
  deleteProperty(e, r) {
    const o = Re(e, r);
    e[r];
    const n = Reflect.deleteProperty(e, r);
    return n && o && xr(e, "delete", r, void 0), n;
  }
  has(e, r) {
    const o = Reflect.has(e, r);
    return (!Xt(r) || !hp.has(r)) && it(e, "has", r), o;
  }
  ownKeys(e) {
    return it(
      e,
      "iterate",
      ce(e) ? "length" : co
    ), Reflect.ownKeys(e);
  }
}
class ug extends mp {
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
const pg = /* @__PURE__ */ new gp(), fg = /* @__PURE__ */ new ug(), hg = /* @__PURE__ */ new gp(!0);
const Ws = (t) => t, ka = (t) => Reflect.getPrototypeOf(t);
function mg(t, e, r) {
  return function(...o) {
    const n = this.__v_raw, a = je(n), i = Wo(a), s = t === "entries" || t === Symbol.iterator && i, l = t === "keys" && i, c = n[t](...o), d = r ? Ws : e ? Us : st;
    return !e && it(
      a,
      "iterate",
      l ? qs : co
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = c.next();
        return p ? { value: u, done: p } : {
          value: s ? [d(u[0]), d(u[1])] : d(u),
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
function $a(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function gg(t, e) {
  const r = {
    get(n) {
      const a = this.__v_raw, i = je(a), s = je(n);
      t || (xt(n, s) && it(i, "get", n), it(i, "get", s));
      const { has: l } = ka(i), c = e ? Ws : t ? Us : st;
      if (l.call(i, n))
        return c(a.get(n));
      if (l.call(i, s))
        return c(a.get(s));
      a !== i && a.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && it(je(n), "iterate", co), Reflect.get(n, "size", n);
    },
    has(n) {
      const a = this.__v_raw, i = je(a), s = je(n);
      return t || (xt(n, s) && it(i, "has", n), it(i, "has", s)), n === s ? a.has(n) : a.has(n) || a.has(s);
    },
    forEach(n, a) {
      const i = this, s = i.__v_raw, l = je(s), c = e ? Ws : t ? Us : st;
      return !t && it(l, "iterate", co), s.forEach((d, u) => n.call(a, c(d), c(u), i));
    }
  };
  return qe(
    r,
    t ? {
      add: $a("add"),
      set: $a("set"),
      delete: $a("delete"),
      clear: $a("clear")
    } : {
      add(n) {
        !e && !Pt(n) && !Lr(n) && (n = je(n));
        const a = je(this);
        return ka(a).has.call(a, n) || (a.add(n), xr(a, "add", n, n)), this;
      },
      set(n, a) {
        !e && !Pt(a) && !Lr(a) && (a = je(a));
        const i = je(this), { has: s, get: l } = ka(i);
        let c = s.call(i, n);
        c || (n = je(n), c = s.call(i, n));
        const d = l.call(i, n);
        return i.set(n, a), c ? xt(a, d) && xr(i, "set", n, a) : xr(i, "add", n, a), this;
      },
      delete(n) {
        const a = je(this), { has: i, get: s } = ka(a);
        let l = i.call(a, n);
        l || (n = je(n), l = i.call(a, n)), s && s.call(a, n);
        const c = a.delete(n);
        return l && xr(a, "delete", n, void 0), c;
      },
      clear() {
        const n = je(this), a = n.size !== 0, i = n.clear();
        return a && xr(
          n,
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
  ].forEach((n) => {
    r[n] = mg(n, t, e);
  }), r;
}
function Hl(t, e) {
  const r = gg(t, e);
  return (o, n, a) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? o : Reflect.get(
    Re(r, n) && n in o ? r : o,
    n,
    a
  );
}
const vg = {
  get: /* @__PURE__ */ Hl(!1, !1)
}, bg = {
  get: /* @__PURE__ */ Hl(!1, !0)
}, wg = {
  get: /* @__PURE__ */ Hl(!0, !1)
};
const vp = /* @__PURE__ */ new WeakMap(), bp = /* @__PURE__ */ new WeakMap(), wp = /* @__PURE__ */ new WeakMap(), yg = /* @__PURE__ */ new WeakMap();
function xg(t) {
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
function kg(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : xg(Um(t));
}
function lt(t) {
  return Lr(t) ? t : ql(
    t,
    !1,
    pg,
    vg,
    vp
  );
}
function $g(t) {
  return ql(
    t,
    !1,
    hg,
    bg,
    bp
  );
}
function yp(t) {
  return ql(
    t,
    !0,
    fg,
    wg,
    wp
  );
}
function ql(t, e, r, o, n) {
  if (!Fe(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const a = n.get(t);
  if (a)
    return a;
  const i = kg(t);
  if (i === 0)
    return t;
  const s = new Proxy(
    t,
    i === 2 ? o : r
  );
  return n.set(t, s), s;
}
function uo(t) {
  return Lr(t) ? uo(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Lr(t) {
  return !!(t && t.__v_isReadonly);
}
function Pt(t) {
  return !!(t && t.__v_isShallow);
}
function Wl(t) {
  return t ? !!t.__v_raw : !1;
}
function je(t) {
  const e = t && t.__v_raw;
  return e ? je(e) : t;
}
function Sg(t) {
  return !Re(t, "__v_skip") && Object.isExtensible(t) && tp(t, "__v_skip", !0), t;
}
const st = (t) => Fe(t) ? lt(t) : t, Us = (t) => Fe(t) ? yp(t) : t;
function Ge(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function X(t) {
  return _g(t, !1);
}
function _g(t, e) {
  return Ge(t) ? t : new Cg(t, e);
}
class Cg {
  constructor(e, r) {
    this.dep = new Ri(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? e : je(e), this._value = r ? e : st(e), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const r = this._rawValue, o = this.__v_isShallow || Pt(e) || Lr(e);
    e = o ? e : je(e), xt(e, r) && (this._rawValue = e, this._value = o ? e : st(e), this.dep.trigger());
  }
}
function Fc(t) {
  t.dep && t.dep.trigger();
}
function H(t) {
  return Ge(t) ? t.value : t;
}
const Og = {
  get: (t, e, r) => e === "__v_raw" ? t : H(Reflect.get(t, e, r)),
  set: (t, e, r, o) => {
    const n = t[e];
    return Ge(n) && !Ge(r) ? (n.value = r, !0) : Reflect.set(t, e, r, o);
  }
};
function xp(t) {
  return uo(t) ? t : new Proxy(t, Og);
}
class Eg {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    const r = this.dep = new Ri(), { get: o, set: n } = e(r.track.bind(r), r.trigger.bind(r));
    this._get = o, this._set = n;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function Mg(t) {
  return new Eg(t);
}
function Tg(t) {
  const e = ce(t) ? new Array(t.length) : {};
  for (const r in t)
    e[r] = Ig(t, r);
  return e;
}
class Ag {
  constructor(e, r, o) {
    this._object = e, this._key = r, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const e = this._object[this._key];
    return this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return ig(je(this._object), this._key);
  }
}
function Ig(t, e, r) {
  const o = t[e];
  return Ge(o) ? o : new Ag(t, e, r);
}
class Ng {
  constructor(e, r, o) {
    this.fn = e, this.setter = r, this._value = void 0, this.dep = new Ri(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ln - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    He !== this)
      return lp(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return up(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function zg(t, e, r = !1) {
  let o, n;
  return $e(t) ? o = t : (o = t.get, n = t.set), new Ng(o, n, r);
}
const Sa = {}, Ga = /* @__PURE__ */ new WeakMap();
let oo;
function jg(t, e = !1, r = oo) {
  if (r) {
    let o = Ga.get(r);
    o || Ga.set(r, o = []), o.push(t);
  }
}
function Pg(t, e, r = Ve) {
  const { immediate: o, deep: n, once: a, scheduler: i, augmentJob: s, call: l } = r, c = (v) => n ? v : Pt(v) || n === !1 || n === 0 ? kr(v, 1) : kr(v);
  let d, u, p, f, h = !1, m = !1;
  if (Ge(t) ? (u = () => t.value, h = Pt(t)) : uo(t) ? (u = () => c(t), h = !0) : ce(t) ? (m = !0, h = t.some((v) => uo(v) || Pt(v)), u = () => t.map((v) => {
    if (Ge(v))
      return v.value;
    if (uo(v))
      return c(v);
    if ($e(v))
      return l ? l(v, 2) : v();
  })) : $e(t) ? e ? u = l ? () => l(t, 2) : t : u = () => {
    if (p) {
      qr();
      try {
        p();
      } finally {
        Wr();
      }
    }
    const v = oo;
    oo = d;
    try {
      return l ? l(t, 3, [f]) : t(f);
    } finally {
      oo = v;
    }
  } : u = pr, e && n) {
    const v = u, S = n === !0 ? 1 / 0 : n;
    u = () => kr(v(), S);
  }
  const g = ap(), b = () => {
    d.stop(), g && Rl(g.effects, d);
  };
  if (a && e) {
    const v = e;
    e = (...S) => {
      v(...S), b();
    };
  }
  let y = m ? new Array(t.length).fill(Sa) : Sa;
  const x = (v) => {
    if (!(!(d.flags & 1) || !d.dirty && !v))
      if (e) {
        const S = d.run();
        if (n || h || (m ? S.some((M, q) => xt(M, y[q])) : xt(S, y))) {
          p && p();
          const M = oo;
          oo = d;
          try {
            const q = [
              S,
              // pass undefined as the old value when it's changed for the first time
              y === Sa ? void 0 : m && y[0] === Sa ? [] : y,
              f
            ];
            l ? l(e, 3, q) : (
              // @ts-expect-error
              e(...q)
            ), y = S;
          } finally {
            oo = M;
          }
        }
      } else
        d.run();
  };
  return s && s(x), d = new ip(u), d.scheduler = i ? () => i(x, !1) : x, f = (v) => jg(v, !1, d), p = d.onStop = () => {
    const v = Ga.get(d);
    if (v) {
      if (l)
        l(v, 4);
      else
        for (const S of v) S();
      Ga.delete(d);
    }
  }, e ? o ? x(!0) : y = d.run() : i ? i(x.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function kr(t, e = 1 / 0, r) {
  if (e <= 0 || !Fe(t) || t.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(t)))
    return t;
  if (r.add(t), e--, Ge(t))
    kr(t.value, e, r);
  else if (ce(t))
    for (let o = 0; o < t.length; o++)
      kr(t[o], e, r);
  else if (ln(t) || Wo(t))
    t.forEach((o) => {
      kr(o, e, r);
    });
  else if (Ni(t)) {
    for (const o in t)
      kr(t[o], e, r);
    for (const o of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, o) && kr(t[o], e, r);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ca(t, e, r, o) {
  try {
    return o ? t(...o) : t();
  } catch (n) {
    Li(n, e, r);
  }
}
function Gt(t, e, r, o) {
  if ($e(t)) {
    const n = ca(t, e, r, o);
    return n && Qu(n) && n.catch((a) => {
      Li(a, e, r);
    }), n;
  }
  if (ce(t)) {
    const n = [];
    for (let a = 0; a < t.length; a++)
      n.push(Gt(t[a], e, r, o));
    return n;
  }
}
function Li(t, e, r, o = !0) {
  const n = e ? e.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: i } = e && e.appContext.config || Ve;
  if (e) {
    let s = e.parent;
    const l = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](t, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    if (a) {
      qr(), ca(a, null, 10, [
        t,
        l,
        c
      ]), Wr();
      return;
    }
  }
  Rg(t, r, n, o, i);
}
function Rg(t, e, r, o = !0, n = !1) {
  if (n)
    throw t;
  console.error(t);
}
const vt = [];
let or = -1;
const Uo = [];
let Tr = null, Ro = 0;
const kp = /* @__PURE__ */ Promise.resolve();
let Za = null;
function Zt(t) {
  const e = Za || kp;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Vg(t) {
  let e = or + 1, r = vt.length;
  for (; e < r; ) {
    const o = e + r >>> 1, n = vt[o], a = Bn(n);
    a < t || a === t && n.flags & 2 ? e = o + 1 : r = o;
  }
  return e;
}
function Ul(t) {
  if (!(t.flags & 1)) {
    const e = Bn(t), r = vt[vt.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Bn(r) ? vt.push(t) : vt.splice(Vg(e), 0, t), t.flags |= 1, $p();
  }
}
function $p() {
  Za || (Za = kp.then(_p));
}
function Lg(t) {
  ce(t) ? Uo.push(...t) : Tr && t.id === -1 ? Tr.splice(Ro + 1, 0, t) : t.flags & 1 || (Uo.push(t), t.flags |= 1), $p();
}
function Hc(t, e, r = or + 1) {
  for (; r < vt.length; r++) {
    const o = vt[r];
    if (o && o.flags & 2) {
      if (t && o.id !== t.uid)
        continue;
      vt.splice(r, 1), r--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Sp(t) {
  if (Uo.length) {
    const e = [...new Set(Uo)].sort(
      (r, o) => Bn(r) - Bn(o)
    );
    if (Uo.length = 0, Tr) {
      Tr.push(...e);
      return;
    }
    for (Tr = e, Ro = 0; Ro < Tr.length; Ro++) {
      const r = Tr[Ro];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Tr = null, Ro = 0;
  }
}
const Bn = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function _p(t) {
  try {
    for (or = 0; or < vt.length; or++) {
      const e = vt[or];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), ca(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; or < vt.length; or++) {
      const e = vt[or];
      e && (e.flags &= -2);
    }
    or = -1, vt.length = 0, Sp(), Za = null, (vt.length || Uo.length) && _p();
  }
}
let Qe = null, Cp = null;
function Qa(t) {
  const e = Qe;
  return Qe = t, Cp = t && t.type.__scopeId || null, e;
}
function ve(t, e = Qe, r) {
  if (!e || t._n)
    return t;
  const o = (...n) => {
    o._d && Zc(-1);
    const a = Qa(e);
    let i;
    try {
      i = t(...n);
    } finally {
      Qa(a), o._d && Zc(1);
    }
    return i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function yo(t, e) {
  if (Qe === null)
    return t;
  const r = Wi(Qe), o = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [a, i, s, l = Ve] = e[n];
    a && ($e(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && kr(i), o.push({
      dir: a,
      instance: r,
      value: i,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return t;
}
function Qr(t, e, r, o) {
  const n = t.dirs, a = e && e.dirs;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    a && (s.oldValue = a[i].value);
    let l = s.dir[o];
    l && (qr(), Gt(l, r, 8, [
      t.el,
      s,
      t,
      e
    ]), Wr());
  }
}
const Dg = Symbol("_vte"), Op = (t) => t.__isTeleport, Ar = Symbol("_leaveCb"), _a = Symbol("_enterCb");
function Bg() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qt(() => {
    t.isMounted = !0;
  }), da(() => {
    t.isUnmounting = !0;
  }), t;
}
const zt = [Function, Array], Ep = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: zt,
  onEnter: zt,
  onAfterEnter: zt,
  onEnterCancelled: zt,
  // leave
  onBeforeLeave: zt,
  onLeave: zt,
  onAfterLeave: zt,
  onLeaveCancelled: zt,
  // appear
  onBeforeAppear: zt,
  onAppear: zt,
  onAfterAppear: zt,
  onAppearCancelled: zt
}, Mp = (t) => {
  const e = t.subTree;
  return e.component ? Mp(e.component) : e;
}, Fg = {
  name: "BaseTransition",
  props: Ep,
  setup(t, { slots: e }) {
    const r = Co(), o = Bg();
    return () => {
      const n = e.default && Ip(e.default(), !0);
      if (!n || !n.length)
        return;
      const a = Tp(n), i = je(t), { mode: s } = i;
      if (o.isLeaving)
        return cs(a);
      const l = qc(a);
      if (!l)
        return cs(a);
      let c = Ks(
        l,
        i,
        o,
        r,
        // #11061, ensure enterHooks is fresh after clone
        (p) => c = p
      );
      l.type !== bt && Fn(l, c);
      const d = r.subTree, u = d && qc(d);
      if (u && u.type !== bt && !io(l, u) && Mp(r).type !== bt) {
        const p = Ks(
          u,
          i,
          o,
          r
        );
        if (Fn(u, p), s === "out-in" && l.type !== bt)
          return o.isLeaving = !0, p.afterLeave = () => {
            o.isLeaving = !1, r.job.flags & 8 || r.update(), delete p.afterLeave;
          }, cs(a);
        s === "in-out" && l.type !== bt && (p.delayLeave = (f, h, m) => {
          const g = Ap(
            o,
            u
          );
          g[String(u.key)] = u, f[Ar] = () => {
            h(), f[Ar] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = m;
        });
      }
      return a;
    };
  }
};
function Tp(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const r of t)
      if (r.type !== bt) {
        e = r;
        break;
      }
  }
  return e;
}
const Hg = Fg;
function Ap(t, e) {
  const { leavingVNodes: r } = t;
  let o = r.get(e.type);
  return o || (o = /* @__PURE__ */ Object.create(null), r.set(e.type, o)), o;
}
function Ks(t, e, r, o, n) {
  const {
    appear: a,
    mode: i,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: f,
    onAfterLeave: h,
    onLeaveCancelled: m,
    onBeforeAppear: g,
    onAppear: b,
    onAfterAppear: y,
    onAppearCancelled: x
  } = e, v = String(t.key), S = Ap(r, t), M = (_, E) => {
    _ && Gt(
      _,
      o,
      9,
      E
    );
  }, q = (_, E) => {
    const U = E[1];
    M(_, E), ce(_) ? _.every((z) => z.length <= 1) && U() : _.length <= 1 && U();
  }, B = {
    mode: i,
    persisted: s,
    beforeEnter(_) {
      let E = l;
      if (!r.isMounted)
        if (a)
          E = g || l;
        else
          return;
      _[Ar] && _[Ar](
        !0
        /* cancelled */
      );
      const U = S[v];
      U && io(t, U) && U.el[Ar] && U.el[Ar](), M(E, [_]);
    },
    enter(_) {
      let E = c, U = d, z = u;
      if (!r.isMounted)
        if (a)
          E = b || c, U = y || d, z = x || u;
        else
          return;
      let Z = !1;
      const ge = _[_a] = (_e) => {
        Z || (Z = !0, _e ? M(z, [_]) : M(U, [_]), B.delayedLeave && B.delayedLeave(), _[_a] = void 0);
      };
      E ? q(E, [_, ge]) : ge();
    },
    leave(_, E) {
      const U = String(t.key);
      if (_[_a] && _[_a](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return E();
      M(p, [_]);
      let z = !1;
      const Z = _[Ar] = (ge) => {
        z || (z = !0, E(), ge ? M(m, [_]) : M(h, [_]), _[Ar] = void 0, S[U] === t && delete S[U]);
      };
      S[U] = t, f ? q(f, [_, Z]) : Z();
    },
    clone(_) {
      const E = Ks(
        _,
        e,
        r,
        o,
        n
      );
      return n && n(E), E;
    }
  };
  return B;
}
function cs(t) {
  if (Di(t))
    return t = Br(t), t.children = null, t;
}
function qc(t) {
  if (!Di(t))
    return Op(t.type) && t.children ? Tp(t.children) : t;
  const { shapeFlag: e, children: r } = t;
  if (r) {
    if (e & 16)
      return r[0];
    if (e & 32 && $e(r.default))
      return r.default();
  }
}
function Fn(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Fn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ip(t, e = !1, r) {
  let o = [], n = 0;
  for (let a = 0; a < t.length; a++) {
    let i = t[a];
    const s = r == null ? i.key : String(r) + String(i.key != null ? i.key : a);
    i.type === De ? (i.patchFlag & 128 && n++, o = o.concat(
      Ip(i.children, e, s)
    )) : (e || i.type !== bt) && o.push(s != null ? Br(i, { key: s }) : i);
  }
  if (n > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qg(t, e) {
  return $e(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    qe({ name: t.name }, e, { setup: t })
  ) : t;
}
function Np(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Js(t, e, r, o, n = !1) {
  if (ce(t)) {
    t.forEach(
      (h, m) => Js(
        h,
        e && (ce(e) ? e[m] : e),
        r,
        o,
        n
      )
    );
    return;
  }
  if (Ko(o) && !n)
    return;
  const a = o.shapeFlag & 4 ? Wi(o.component) : o.el, i = n ? null : a, { i: s, r: l } = t, c = e && e.r, d = s.refs === Ve ? s.refs = {} : s.refs, u = s.setupState, p = je(u), f = u === Ve ? () => !1 : (h) => Re(p, h);
  if (c != null && c !== l && (Ke(c) ? (d[c] = null, f(c) && (u[c] = null)) : Ge(c) && (c.value = null)), $e(l))
    ca(l, s, 12, [i, d]);
  else {
    const h = Ke(l), m = Ge(l);
    if (h || m) {
      const g = () => {
        if (t.f) {
          const b = h ? f(l) ? u[l] : d[l] : l.value;
          n ? ce(b) && Rl(b, a) : ce(b) ? b.includes(a) || b.push(a) : h ? (d[l] = [a], f(l) && (u[l] = d[l])) : (l.value = [a], t.k && (d[t.k] = l.value));
        } else h ? (d[l] = i, f(l) && (u[l] = i)) : m && (l.value = i, t.k && (d[t.k] = i));
      };
      i ? (g.id = -1, _t(g, r)) : g();
    }
  }
}
Pi().requestIdleCallback;
Pi().cancelIdleCallback;
const Ko = (t) => !!t.type.__asyncLoader, Di = (t) => t.type.__isKeepAlive;
function Wg(t, e) {
  zp(t, "a", e);
}
function Ug(t, e) {
  zp(t, "da", e);
}
function zp(t, e, r = at) {
  const o = t.__wdc || (t.__wdc = () => {
    let n = r;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return t();
  });
  if (Bi(e, o, r), r) {
    let n = r.parent;
    for (; n && n.parent; )
      Di(n.parent.vnode) && Kg(o, e, r, n), n = n.parent;
  }
}
function Kg(t, e, r, o) {
  const n = Bi(
    e,
    t,
    o,
    !0
    /* prepend */
  );
  Fi(() => {
    Rl(o[e], n);
  }, r);
}
function Bi(t, e, r = at, o = !1) {
  if (r) {
    const n = r[t] || (r[t] = []), a = e.__weh || (e.__weh = (...i) => {
      qr();
      const s = pa(r), l = Gt(e, r, t, i);
      return s(), Wr(), l;
    });
    return o ? n.unshift(a) : n.push(a), a;
  }
}
const Or = (t) => (e, r = at) => {
  (!Un || t === "sp") && Bi(t, (...o) => e(...o), r);
}, Kl = Or("bm"), Qt = Or("m"), Jg = Or(
  "bu"
), Yg = Or("u"), da = Or(
  "bum"
), Fi = Or("um"), Xg = Or(
  "sp"
), Gg = Or("rtg"), Zg = Or("rtc");
function Qg(t, e = at) {
  Bi("ec", t, e);
}
const ev = "components", jp = Symbol.for("v-ndc");
function Hn(t) {
  return Ke(t) ? tv(ev, t, !1) || t : t || jp;
}
function tv(t, e, r = !0, o = !1) {
  const n = Qe || at;
  if (n) {
    const a = n.type;
    {
      const s = Hv(
        a,
        !1
      );
      if (s && (s === e || s === dt(e) || s === ji(dt(e))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Wc(n[t] || a[t], e) || // global registration
      Wc(n.appContext[t], e)
    );
    return !i && o ? a : i;
  }
}
function Wc(t, e) {
  return t && (t[e] || t[dt(e)] || t[ji(dt(e))]);
}
function Dr(t, e, r, o) {
  let n;
  const a = r, i = ce(t);
  if (i || Ke(t)) {
    const s = i && uo(t);
    let l = !1;
    s && (l = !Pt(t), t = Vi(t)), n = new Array(t.length);
    for (let c = 0, d = t.length; c < d; c++)
      n[c] = e(
        l ? st(t[c]) : t[c],
        c,
        void 0,
        a
      );
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let s = 0; s < t; s++)
      n[s] = e(s + 1, s, void 0, a);
  } else if (Fe(t))
    if (t[Symbol.iterator])
      n = Array.from(
        t,
        (s, l) => e(s, l, void 0, a)
      );
    else {
      const s = Object.keys(t);
      n = new Array(s.length);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = s[l];
        n[l] = e(t[d], d, l, a);
      }
    }
  else
    n = [];
  return n;
}
function ds(t, e) {
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (ce(o))
      for (let n = 0; n < o.length; n++)
        t[o[n].name] = o[n].fn;
    else o && (t[o.name] = o.key ? (...n) => {
      const a = o.fn(...n);
      return a && (a.key = o.key), a;
    } : o.fn);
  }
  return t;
}
function Ee(t, e, r = {}, o, n) {
  if (Qe.ce || Qe.parent && Ko(Qe.parent) && Qe.parent.ce)
    return e !== "default" && (r.name = e), $(), de(
      De,
      null,
      [fe("slot", r, o && o())],
      64
    );
  let a = t[e];
  a && a._c && (a._d = !1), $();
  const i = a && Pp(a(r)), s = r.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = de(
    De,
    {
      key: (s && !Xt(s) ? s : `_${e}`) + // #7256 force differentiate fallback content from actual content
      (!i && o ? "_fb" : "")
    },
    i || (o ? o() : []),
    i && t._ === 1 ? 64 : -2
  );
  return !n && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), a && a._c && (a._d = !0), l;
}
function Pp(t) {
  return t.some((e) => Wn(e) ? !(e.type === bt || e.type === De && !Pp(e.children)) : !0) ? t : null;
}
const Ys = (t) => t ? of(t) ? Wi(t) : Ys(t.parent) : null, On = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ qe(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Ys(t.parent),
    $root: (t) => Ys(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Jl(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Ul(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Zt.bind(t.proxy)),
    $watch: (t) => Ov.bind(t)
  })
), us = (t, e) => t !== Ve && !t.__isScriptSetup && Re(t, e), rv = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: r, setupState: o, data: n, props: a, accessCache: i, type: s, appContext: l } = t;
    let c;
    if (e[0] !== "$") {
      const f = i[e];
      if (f !== void 0)
        switch (f) {
          case 1:
            return o[e];
          case 2:
            return n[e];
          case 4:
            return r[e];
          case 3:
            return a[e];
        }
      else {
        if (us(o, e))
          return i[e] = 1, o[e];
        if (n !== Ve && Re(n, e))
          return i[e] = 2, n[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && Re(c, e)
        )
          return i[e] = 3, a[e];
        if (r !== Ve && Re(r, e))
          return i[e] = 4, r[e];
        Xs && (i[e] = 0);
      }
    }
    const d = On[e];
    let u, p;
    if (d)
      return e === "$attrs" && it(t.attrs, "get", ""), d(t);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[e])
    )
      return u;
    if (r !== Ve && Re(r, e))
      return i[e] = 4, r[e];
    if (
      // global properties
      p = l.config.globalProperties, Re(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, r) {
    const { data: o, setupState: n, ctx: a } = t;
    return us(n, e) ? (n[e] = r, !0) : o !== Ve && Re(o, e) ? (o[e] = r, !0) : Re(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (a[e] = r, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: r, ctx: o, appContext: n, propsOptions: a }
  }, i) {
    let s;
    return !!r[i] || t !== Ve && Re(t, i) || us(e, i) || (s = a[0]) && Re(s, i) || Re(o, i) || Re(On, i) || Re(n.config.globalProperties, i);
  },
  defineProperty(t, e, r) {
    return r.get != null ? t._.accessCache[e] = 0 : Re(r, "value") && this.set(t, e, r.value, null), Reflect.defineProperty(t, e, r);
  }
};
function ov() {
  return nv().slots;
}
function nv() {
  const t = Co();
  return t.setupContext || (t.setupContext = af(t));
}
function ei(t) {
  return ce(t) ? t.reduce(
    (e, r) => (e[r] = null, e),
    {}
  ) : t;
}
function av(t, e) {
  return !t || !e ? t || e : ce(t) && ce(e) ? t.concat(e) : qe({}, ei(t), ei(e));
}
let Xs = !0;
function iv(t) {
  const e = Jl(t), r = t.proxy, o = t.ctx;
  Xs = !1, e.beforeCreate && Uc(e.beforeCreate, t, "bc");
  const {
    // state
    data: n,
    computed: a,
    methods: i,
    watch: s,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: p,
    beforeUpdate: f,
    updated: h,
    activated: m,
    deactivated: g,
    beforeDestroy: b,
    beforeUnmount: y,
    destroyed: x,
    unmounted: v,
    render: S,
    renderTracked: M,
    renderTriggered: q,
    errorCaptured: B,
    serverPrefetch: _,
    // public API
    expose: E,
    inheritAttrs: U,
    // assets
    components: z,
    directives: Z,
    filters: ge
  } = e;
  if (c && sv(c, o, null), i)
    for (const C in i) {
      const R = i[C];
      $e(R) && (o[C] = R.bind(r));
    }
  if (n) {
    const C = n.call(r, r);
    Fe(C) && (t.data = lt(C));
  }
  if (Xs = !0, a)
    for (const C in a) {
      const R = a[C], se = $e(R) ? R.bind(r, r) : $e(R.get) ? R.get.bind(r, r) : pr, re = !$e(R) && $e(R.set) ? R.set.bind(r) : pr, we = W({
        get: se,
        set: re
      });
      Object.defineProperty(o, C, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (j) => we.value = j
      });
    }
  if (s)
    for (const C in s)
      Rp(s[C], o, r, C);
  if (l) {
    const C = $e(l) ? l.call(r) : l;
    Reflect.ownKeys(C).forEach((R) => {
      Zs(R, C[R]);
    });
  }
  d && Uc(d, t, "c");
  function ye(C, R) {
    ce(R) ? R.forEach((se) => C(se.bind(r))) : R && C(R.bind(r));
  }
  if (ye(Kl, u), ye(Qt, p), ye(Jg, f), ye(Yg, h), ye(Wg, m), ye(Ug, g), ye(Qg, B), ye(Zg, M), ye(Gg, q), ye(da, y), ye(Fi, v), ye(Xg, _), ce(E))
    if (E.length) {
      const C = t.exposed || (t.exposed = {});
      E.forEach((R) => {
        Object.defineProperty(C, R, {
          get: () => r[R],
          set: (se) => r[R] = se
        });
      });
    } else t.exposed || (t.exposed = {});
  S && t.render === pr && (t.render = S), U != null && (t.inheritAttrs = U), z && (t.components = z), Z && (t.directives = Z), _ && Np(t);
}
function sv(t, e, r = pr) {
  ce(t) && (t = Gs(t));
  for (const o in t) {
    const n = t[o];
    let a;
    Fe(n) ? "default" in n ? a = Vr(
      n.from || o,
      n.default,
      !0
    ) : a = Vr(n.from || o) : a = Vr(n), Ge(a) ? Object.defineProperty(e, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : e[o] = a;
  }
}
function Uc(t, e, r) {
  Gt(
    ce(t) ? t.map((o) => o.bind(e.proxy)) : t.bind(e.proxy),
    e,
    r
  );
}
function Rp(t, e, r, o) {
  let n = o.includes(".") ? Gp(r, o) : () => r[o];
  if (Ke(t)) {
    const a = e[t];
    $e(a) && Le(n, a);
  } else if ($e(t))
    Le(n, t.bind(r));
  else if (Fe(t))
    if (ce(t))
      t.forEach((a) => Rp(a, e, r, o));
    else {
      const a = $e(t.handler) ? t.handler.bind(r) : e[t.handler];
      $e(a) && Le(n, a, t);
    }
}
function Jl(t) {
  const e = t.type, { mixins: r, extends: o } = e, {
    mixins: n,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = t.appContext, s = a.get(e);
  let l;
  return s ? l = s : !n.length && !r && !o ? l = e : (l = {}, n.length && n.forEach(
    (c) => ti(l, c, i, !0)
  ), ti(l, e, i)), Fe(e) && a.set(e, l), l;
}
function ti(t, e, r, o = !1) {
  const { mixins: n, extends: a } = e;
  a && ti(t, a, r, !0), n && n.forEach(
    (i) => ti(t, i, r, !0)
  );
  for (const i in e)
    if (!(o && i === "expose")) {
      const s = lv[i] || r && r[i];
      t[i] = s ? s(t[i], e[i]) : e[i];
    }
  return t;
}
const lv = {
  data: Kc,
  props: Jc,
  emits: Jc,
  // objects
  methods: gn,
  computed: gn,
  // lifecycle
  beforeCreate: ht,
  created: ht,
  beforeMount: ht,
  mounted: ht,
  beforeUpdate: ht,
  updated: ht,
  beforeDestroy: ht,
  beforeUnmount: ht,
  destroyed: ht,
  unmounted: ht,
  activated: ht,
  deactivated: ht,
  errorCaptured: ht,
  serverPrefetch: ht,
  // assets
  components: gn,
  directives: gn,
  // watch
  watch: dv,
  // provide / inject
  provide: Kc,
  inject: cv
};
function Kc(t, e) {
  return e ? t ? function() {
    return qe(
      $e(t) ? t.call(this, this) : t,
      $e(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function cv(t, e) {
  return gn(Gs(t), Gs(e));
}
function Gs(t) {
  if (ce(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++)
      e[t[r]] = t[r];
    return e;
  }
  return t;
}
function ht(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function gn(t, e) {
  return t ? qe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Jc(t, e) {
  return t ? ce(t) && ce(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : qe(
    /* @__PURE__ */ Object.create(null),
    ei(t),
    ei(e ?? {})
  ) : e;
}
function dv(t, e) {
  if (!t) return e;
  if (!e) return t;
  const r = qe(/* @__PURE__ */ Object.create(null), t);
  for (const o in e)
    r[o] = ht(t[o], e[o]);
  return r;
}
function Vp() {
  return {
    app: null,
    config: {
      isNativeTag: qm,
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
let uv = 0;
function pv(t, e) {
  return function(o, n = null) {
    $e(o) || (o = qe({}, o)), n != null && !Fe(n) && (n = null);
    const a = Vp(), i = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const c = a.app = {
      _uid: uv++,
      _component: o,
      _props: n,
      _container: null,
      _context: a,
      _instance: null,
      version: Uv,
      get config() {
        return a.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return i.has(d) || (d && $e(d.install) ? (i.add(d), d.install(c, ...u)) : $e(d) && (i.add(d), d(c, ...u))), c;
      },
      mixin(d) {
        return a.mixins.includes(d) || a.mixins.push(d), c;
      },
      component(d, u) {
        return u ? (a.components[d] = u, c) : a.components[d];
      },
      directive(d, u) {
        return u ? (a.directives[d] = u, c) : a.directives[d];
      },
      mount(d, u, p) {
        if (!l) {
          const f = c._ceVNode || fe(o, n);
          return f.appContext = a, p === !0 ? p = "svg" : p === !1 && (p = void 0), u && e ? e(f, d) : t(f, d, p), l = !0, c._container = d, d.__vue_app__ = c, Wi(f.component);
        }
      },
      onUnmount(d) {
        s.push(d);
      },
      unmount() {
        l && (Gt(
          s,
          c._instance,
          16
        ), t(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return a.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Jo;
        Jo = c;
        try {
          return d();
        } finally {
          Jo = u;
        }
      }
    };
    return c;
  };
}
let Jo = null;
function Zs(t, e) {
  if (at) {
    let r = at.provides;
    const o = at.parent && at.parent.provides;
    o === r && (r = at.provides = Object.create(o)), r[t] = e;
  }
}
function Vr(t, e, r = !1) {
  const o = at || Qe;
  if (o || Jo) {
    const n = Jo ? Jo._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return r && $e(e) ? e.call(o && o.proxy) : e;
  }
}
const Lp = {}, Dp = () => Object.create(Lp), Bp = (t) => Object.getPrototypeOf(t) === Lp;
function fv(t, e, r, o = !1) {
  const n = {}, a = Dp();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Fp(t, e, n, a);
  for (const i in t.propsOptions[0])
    i in n || (n[i] = void 0);
  r ? t.props = o ? n : $g(n) : t.type.props ? t.props = n : t.props = a, t.attrs = a;
}
function hv(t, e, r, o) {
  const {
    props: n,
    attrs: a,
    vnode: { patchFlag: i }
  } = t, s = je(n), [l] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = t.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let p = d[u];
        if (Hi(t.emitsOptions, p))
          continue;
        const f = e[p];
        if (l)
          if (Re(a, p))
            f !== a[p] && (a[p] = f, c = !0);
          else {
            const h = dt(p);
            n[h] = Qs(
              l,
              s,
              h,
              f,
              t,
              !1
            );
          }
        else
          f !== a[p] && (a[p] = f, c = !0);
      }
    }
  } else {
    Fp(t, e, n, a) && (c = !0);
    let d;
    for (const u in s)
      (!e || // for camelCase
      !Re(e, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = kt(u)) === u || !Re(e, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (n[u] = Qs(
        l,
        s,
        u,
        void 0,
        t,
        !0
      )) : delete n[u]);
    if (a !== s)
      for (const u in a)
        (!e || !Re(e, u)) && (delete a[u], c = !0);
  }
  c && xr(t.attrs, "set", "");
}
function Fp(t, e, r, o) {
  const [n, a] = t.propsOptions;
  let i = !1, s;
  if (e)
    for (let l in e) {
      if (Sn(l))
        continue;
      const c = e[l];
      let d;
      n && Re(n, d = dt(l)) ? !a || !a.includes(d) ? r[d] = c : (s || (s = {}))[d] = c : Hi(t.emitsOptions, l) || (!(l in o) || c !== o[l]) && (o[l] = c, i = !0);
    }
  if (a) {
    const l = je(r), c = s || Ve;
    for (let d = 0; d < a.length; d++) {
      const u = a[d];
      r[u] = Qs(
        n,
        l,
        u,
        c[u],
        t,
        !Re(c, u)
      );
    }
  }
  return i;
}
function Qs(t, e, r, o, n, a) {
  const i = t[r];
  if (i != null) {
    const s = Re(i, "default");
    if (s && o === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && $e(l)) {
        const { propsDefaults: c } = n;
        if (r in c)
          o = c[r];
        else {
          const d = pa(n);
          o = c[r] = l.call(
            null,
            e
          ), d();
        }
      } else
        o = l;
      n.ce && n.ce._setProp(r, o);
    }
    i[
      0
      /* shouldCast */
    ] && (a && !s ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === kt(r)) && (o = !0));
  }
  return o;
}
const mv = /* @__PURE__ */ new WeakMap();
function Hp(t, e, r = !1) {
  const o = r ? mv : e.propsCache, n = o.get(t);
  if (n)
    return n;
  const a = t.props, i = {}, s = [];
  let l = !1;
  if (!$e(t)) {
    const d = (u) => {
      l = !0;
      const [p, f] = Hp(u, e, !0);
      qe(i, p), f && s.push(...f);
    };
    !r && e.mixins.length && e.mixins.forEach(d), t.extends && d(t.extends), t.mixins && t.mixins.forEach(d);
  }
  if (!a && !l)
    return Fe(t) && o.set(t, qo), qo;
  if (ce(a))
    for (let d = 0; d < a.length; d++) {
      const u = dt(a[d]);
      Yc(u) && (i[u] = Ve);
    }
  else if (a)
    for (const d in a) {
      const u = dt(d);
      if (Yc(u)) {
        const p = a[d], f = i[u] = ce(p) || $e(p) ? { type: p } : qe({}, p), h = f.type;
        let m = !1, g = !0;
        if (ce(h))
          for (let b = 0; b < h.length; ++b) {
            const y = h[b], x = $e(y) && y.name;
            if (x === "Boolean") {
              m = !0;
              break;
            } else x === "String" && (g = !1);
          }
        else
          m = $e(h) && h.name === "Boolean";
        f[
          0
          /* shouldCast */
        ] = m, f[
          1
          /* shouldCastTrue */
        ] = g, (m || Re(f, "default")) && s.push(u);
      }
    }
  const c = [i, s];
  return Fe(t) && o.set(t, c), c;
}
function Yc(t) {
  return t[0] !== "$" && !Sn(t);
}
const qp = (t) => t[0] === "_" || t === "$stable", Yl = (t) => ce(t) ? t.map(ar) : [ar(t)], gv = (t, e, r) => {
  if (e._n)
    return e;
  const o = ve((...n) => Yl(e(...n)), r);
  return o._c = !1, o;
}, Wp = (t, e, r) => {
  const o = t._ctx;
  for (const n in t) {
    if (qp(n)) continue;
    const a = t[n];
    if ($e(a))
      e[n] = gv(n, a, o);
    else if (a != null) {
      const i = Yl(a);
      e[n] = () => i;
    }
  }
}, Up = (t, e) => {
  const r = Yl(e);
  t.slots.default = () => r;
}, Kp = (t, e, r) => {
  for (const o in e)
    (r || o !== "_") && (t[o] = e[o]);
}, vv = (t, e, r) => {
  const o = t.slots = Dp();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (Kp(o, e, r), r && tp(o, "_", n, !0)) : Wp(e, o);
  } else e && Up(t, e);
}, bv = (t, e, r) => {
  const { vnode: o, slots: n } = t;
  let a = !0, i = Ve;
  if (o.shapeFlag & 32) {
    const s = e._;
    s ? r && s === 1 ? a = !1 : Kp(n, e, r) : (a = !e.$stable, Wp(e, n)), i = e;
  } else e && (Up(t, e), i = { default: 1 });
  if (a)
    for (const s in n)
      !qp(s) && i[s] == null && delete n[s];
}, _t = zv;
function wv(t) {
  return yv(t);
}
function yv(t, e) {
  const r = Pi();
  r.__VUE__ = !0;
  const {
    insert: o,
    remove: n,
    patchProp: a,
    createElement: i,
    createText: s,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: p,
    setScopeId: f = pr,
    insertStaticContent: h
  } = t, m = (w, k, O, V = null, L = null, F = null, N = void 0, K = null, D = !!k.dynamicChildren) => {
    if (w === k)
      return;
    w && !io(w, k) && (V = Ye(w), j(w, L, F, !0), w = null), k.patchFlag === -2 && (D = !1, k.dynamicChildren = null);
    const { type: A, ref: ie, shapeFlag: G } = k;
    switch (A) {
      case qi:
        g(w, k, O, V);
        break;
      case bt:
        b(w, k, O, V);
        break;
      case Va:
        w == null && y(k, O, V, N);
        break;
      case De:
        z(
          w,
          k,
          O,
          V,
          L,
          F,
          N,
          K,
          D
        );
        break;
      default:
        G & 1 ? S(
          w,
          k,
          O,
          V,
          L,
          F,
          N,
          K,
          D
        ) : G & 6 ? Z(
          w,
          k,
          O,
          V,
          L,
          F,
          N,
          K,
          D
        ) : (G & 64 || G & 128) && A.process(
          w,
          k,
          O,
          V,
          L,
          F,
          N,
          K,
          D,
          tt
        );
    }
    ie != null && L && Js(ie, w && w.ref, F, k || w, !k);
  }, g = (w, k, O, V) => {
    if (w == null)
      o(
        k.el = s(k.children),
        O,
        V
      );
    else {
      const L = k.el = w.el;
      k.children !== w.children && c(L, k.children);
    }
  }, b = (w, k, O, V) => {
    w == null ? o(
      k.el = l(k.children || ""),
      O,
      V
    ) : k.el = w.el;
  }, y = (w, k, O, V) => {
    [w.el, w.anchor] = h(
      w.children,
      k,
      O,
      V,
      w.el,
      w.anchor
    );
  }, x = ({ el: w, anchor: k }, O, V) => {
    let L;
    for (; w && w !== k; )
      L = p(w), o(w, O, V), w = L;
    o(k, O, V);
  }, v = ({ el: w, anchor: k }) => {
    let O;
    for (; w && w !== k; )
      O = p(w), n(w), w = O;
    n(k);
  }, S = (w, k, O, V, L, F, N, K, D) => {
    k.type === "svg" ? N = "svg" : k.type === "math" && (N = "mathml"), w == null ? M(
      k,
      O,
      V,
      L,
      F,
      N,
      K,
      D
    ) : _(
      w,
      k,
      L,
      F,
      N,
      K,
      D
    );
  }, M = (w, k, O, V, L, F, N, K) => {
    let D, A;
    const { props: ie, shapeFlag: G, transition: ne, dirs: pe } = w;
    if (D = w.el = i(
      w.type,
      F,
      ie && ie.is,
      ie
    ), G & 8 ? d(D, w.children) : G & 16 && B(
      w.children,
      D,
      null,
      V,
      L,
      ps(w, F),
      N,
      K
    ), pe && Qr(w, null, V, "created"), q(D, w, w.scopeId, N, V), ie) {
      for (const Y in ie)
        Y !== "value" && !Sn(Y) && a(D, Y, null, ie[Y], F, V);
      "value" in ie && a(D, "value", null, ie.value, F), (A = ie.onVnodeBeforeMount) && rr(A, V, w);
    }
    pe && Qr(w, null, V, "beforeMount");
    const P = xv(L, ne);
    P && ne.beforeEnter(D), o(D, k, O), ((A = ie && ie.onVnodeMounted) || P || pe) && _t(() => {
      A && rr(A, V, w), P && ne.enter(D), pe && Qr(w, null, V, "mounted");
    }, L);
  }, q = (w, k, O, V, L) => {
    if (O && f(w, O), V)
      for (let F = 0; F < V.length; F++)
        f(w, V[F]);
    if (L) {
      let F = L.subTree;
      if (k === F || ef(F.type) && (F.ssContent === k || F.ssFallback === k)) {
        const N = L.vnode;
        q(
          w,
          N,
          N.scopeId,
          N.slotScopeIds,
          L.parent
        );
      }
    }
  }, B = (w, k, O, V, L, F, N, K, D = 0) => {
    for (let A = D; A < w.length; A++) {
      const ie = w[A] = K ? Ir(w[A]) : ar(w[A]);
      m(
        null,
        ie,
        k,
        O,
        V,
        L,
        F,
        N,
        K
      );
    }
  }, _ = (w, k, O, V, L, F, N) => {
    const K = k.el = w.el;
    let { patchFlag: D, dynamicChildren: A, dirs: ie } = k;
    D |= w.patchFlag & 16;
    const G = w.props || Ve, ne = k.props || Ve;
    let pe;
    if (O && eo(O, !1), (pe = ne.onVnodeBeforeUpdate) && rr(pe, O, k, w), ie && Qr(k, w, O, "beforeUpdate"), O && eo(O, !0), (G.innerHTML && ne.innerHTML == null || G.textContent && ne.textContent == null) && d(K, ""), A ? E(
      w.dynamicChildren,
      A,
      K,
      O,
      V,
      ps(k, L),
      F
    ) : N || R(
      w,
      k,
      K,
      null,
      O,
      V,
      ps(k, L),
      F,
      !1
    ), D > 0) {
      if (D & 16)
        U(K, G, ne, O, L);
      else if (D & 2 && G.class !== ne.class && a(K, "class", null, ne.class, L), D & 4 && a(K, "style", G.style, ne.style, L), D & 8) {
        const P = k.dynamicProps;
        for (let Y = 0; Y < P.length; Y++) {
          const oe = P[Y], ke = G[oe], Ae = ne[oe];
          (Ae !== ke || oe === "value") && a(K, oe, ke, Ae, L, O);
        }
      }
      D & 1 && w.children !== k.children && d(K, k.children);
    } else !N && A == null && U(K, G, ne, O, L);
    ((pe = ne.onVnodeUpdated) || ie) && _t(() => {
      pe && rr(pe, O, k, w), ie && Qr(k, w, O, "updated");
    }, V);
  }, E = (w, k, O, V, L, F, N) => {
    for (let K = 0; K < k.length; K++) {
      const D = w[K], A = k[K], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !io(D, A) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 70) ? u(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      m(
        D,
        A,
        ie,
        null,
        V,
        L,
        F,
        N,
        !0
      );
    }
  }, U = (w, k, O, V, L) => {
    if (k !== O) {
      if (k !== Ve)
        for (const F in k)
          !Sn(F) && !(F in O) && a(
            w,
            F,
            k[F],
            null,
            L,
            V
          );
      for (const F in O) {
        if (Sn(F)) continue;
        const N = O[F], K = k[F];
        N !== K && F !== "value" && a(w, F, K, N, L, V);
      }
      "value" in O && a(w, "value", k.value, O.value, L);
    }
  }, z = (w, k, O, V, L, F, N, K, D) => {
    const A = k.el = w ? w.el : s(""), ie = k.anchor = w ? w.anchor : s("");
    let { patchFlag: G, dynamicChildren: ne, slotScopeIds: pe } = k;
    pe && (K = K ? K.concat(pe) : pe), w == null ? (o(A, O, V), o(ie, O, V), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      O,
      ie,
      L,
      F,
      N,
      K,
      D
    )) : G > 0 && G & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (E(
      w.dynamicChildren,
      ne,
      O,
      L,
      F,
      N,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (k.key != null || L && k === L.subTree) && Jp(
      w,
      k,
      !0
      /* shallow */
    )) : R(
      w,
      k,
      O,
      ie,
      L,
      F,
      N,
      K,
      D
    );
  }, Z = (w, k, O, V, L, F, N, K, D) => {
    k.slotScopeIds = K, w == null ? k.shapeFlag & 512 ? L.ctx.activate(
      k,
      O,
      V,
      N,
      D
    ) : ge(
      k,
      O,
      V,
      L,
      F,
      N,
      D
    ) : _e(w, k, D);
  }, ge = (w, k, O, V, L, F, N) => {
    const K = w.component = Lv(
      w,
      V,
      L
    );
    if (Di(w) && (K.ctx.renderer = tt), Dv(K, !1, N), K.asyncDep) {
      if (L && L.registerDep(K, ye, N), !w.el) {
        const D = K.subTree = fe(bt);
        b(null, D, k, O);
      }
    } else
      ye(
        K,
        w,
        k,
        O,
        L,
        F,
        N
      );
  }, _e = (w, k, O) => {
    const V = k.component = w.component;
    if (Iv(w, k, O))
      if (V.asyncDep && !V.asyncResolved) {
        C(V, k, O);
        return;
      } else
        V.next = k, V.update();
    else
      k.el = w.el, V.vnode = k;
  }, ye = (w, k, O, V, L, F, N) => {
    const K = () => {
      if (w.isMounted) {
        let { next: G, bu: ne, u: pe, parent: P, vnode: Y } = w;
        {
          const rt = Yp(w);
          if (rt) {
            G && (G.el = Y.el, C(w, G, N)), rt.asyncDep.then(() => {
              w.isUnmounted || K();
            });
            return;
          }
        }
        let oe = G, ke;
        eo(w, !1), G ? (G.el = Y.el, C(w, G, N)) : G = Y, ne && Ra(ne), (ke = G.props && G.props.onVnodeBeforeUpdate) && rr(ke, P, G, Y), eo(w, !0);
        const Ae = fs(w), We = w.subTree;
        w.subTree = Ae, m(
          We,
          Ae,
          // parent may have changed if it's in a teleport
          u(We.el),
          // anchor may have changed if it's in a fragment
          Ye(We),
          w,
          L,
          F
        ), G.el = Ae.el, oe === null && Nv(w, Ae.el), pe && _t(pe, L), (ke = G.props && G.props.onVnodeUpdated) && _t(
          () => rr(ke, P, G, Y),
          L
        );
      } else {
        let G;
        const { el: ne, props: pe } = k, { bm: P, m: Y, parent: oe, root: ke, type: Ae } = w, We = Ko(k);
        if (eo(w, !1), P && Ra(P), !We && (G = pe && pe.onVnodeBeforeMount) && rr(G, oe, k), eo(w, !0), ne && br) {
          const rt = () => {
            w.subTree = fs(w), br(
              ne,
              w.subTree,
              w,
              L,
              null
            );
          };
          We && Ae.__asyncHydrate ? Ae.__asyncHydrate(
            ne,
            w,
            rt
          ) : rt();
        } else {
          ke.ce && ke.ce._injectChildStyle(Ae);
          const rt = w.subTree = fs(w);
          m(
            null,
            rt,
            O,
            V,
            w,
            L,
            F
          ), k.el = rt.el;
        }
        if (Y && _t(Y, L), !We && (G = pe && pe.onVnodeMounted)) {
          const rt = k;
          _t(
            () => rr(G, oe, rt),
            L
          );
        }
        (k.shapeFlag & 256 || oe && Ko(oe.vnode) && oe.vnode.shapeFlag & 256) && w.a && _t(w.a, L), w.isMounted = !0, k = O = V = null;
      }
    };
    w.scope.on();
    const D = w.effect = new ip(K);
    w.scope.off();
    const A = w.update = D.run.bind(D), ie = w.job = D.runIfDirty.bind(D);
    ie.i = w, ie.id = w.uid, D.scheduler = () => Ul(ie), eo(w, !0), A();
  }, C = (w, k, O) => {
    k.component = w;
    const V = w.vnode.props;
    w.vnode = k, w.next = null, hv(w, k.props, V, O), bv(w, k.children, O), qr(), Hc(w), Wr();
  }, R = (w, k, O, V, L, F, N, K, D = !1) => {
    const A = w && w.children, ie = w ? w.shapeFlag : 0, G = k.children, { patchFlag: ne, shapeFlag: pe } = k;
    if (ne > 0) {
      if (ne & 128) {
        re(
          A,
          G,
          O,
          V,
          L,
          F,
          N,
          K,
          D
        );
        return;
      } else if (ne & 256) {
        se(
          A,
          G,
          O,
          V,
          L,
          F,
          N,
          K,
          D
        );
        return;
      }
    }
    pe & 8 ? (ie & 16 && ze(A, L, F), G !== A && d(O, G)) : ie & 16 ? pe & 16 ? re(
      A,
      G,
      O,
      V,
      L,
      F,
      N,
      K,
      D
    ) : ze(A, L, F, !0) : (ie & 8 && d(O, ""), pe & 16 && B(
      G,
      O,
      V,
      L,
      F,
      N,
      K,
      D
    ));
  }, se = (w, k, O, V, L, F, N, K, D) => {
    w = w || qo, k = k || qo;
    const A = w.length, ie = k.length, G = Math.min(A, ie);
    let ne;
    for (ne = 0; ne < G; ne++) {
      const pe = k[ne] = D ? Ir(k[ne]) : ar(k[ne]);
      m(
        w[ne],
        pe,
        O,
        null,
        L,
        F,
        N,
        K,
        D
      );
    }
    A > ie ? ze(
      w,
      L,
      F,
      !0,
      !1,
      G
    ) : B(
      k,
      O,
      V,
      L,
      F,
      N,
      K,
      D,
      G
    );
  }, re = (w, k, O, V, L, F, N, K, D) => {
    let A = 0;
    const ie = k.length;
    let G = w.length - 1, ne = ie - 1;
    for (; A <= G && A <= ne; ) {
      const pe = w[A], P = k[A] = D ? Ir(k[A]) : ar(k[A]);
      if (io(pe, P))
        m(
          pe,
          P,
          O,
          null,
          L,
          F,
          N,
          K,
          D
        );
      else
        break;
      A++;
    }
    for (; A <= G && A <= ne; ) {
      const pe = w[G], P = k[ne] = D ? Ir(k[ne]) : ar(k[ne]);
      if (io(pe, P))
        m(
          pe,
          P,
          O,
          null,
          L,
          F,
          N,
          K,
          D
        );
      else
        break;
      G--, ne--;
    }
    if (A > G) {
      if (A <= ne) {
        const pe = ne + 1, P = pe < ie ? k[pe].el : V;
        for (; A <= ne; )
          m(
            null,
            k[A] = D ? Ir(k[A]) : ar(k[A]),
            O,
            P,
            L,
            F,
            N,
            K,
            D
          ), A++;
      }
    } else if (A > ne)
      for (; A <= G; )
        j(w[A], L, F, !0), A++;
    else {
      const pe = A, P = A, Y = /* @__PURE__ */ new Map();
      for (A = P; A <= ne; A++) {
        const le = k[A] = D ? Ir(k[A]) : ar(k[A]);
        le.key != null && Y.set(le.key, A);
      }
      let oe, ke = 0;
      const Ae = ne - P + 1;
      let We = !1, rt = 0;
      const T = new Array(Ae);
      for (A = 0; A < Ae; A++) T[A] = 0;
      for (A = pe; A <= G; A++) {
        const le = w[A];
        if (ke >= Ae) {
          j(le, L, F, !0);
          continue;
        }
        let Ce;
        if (le.key != null)
          Ce = Y.get(le.key);
        else
          for (oe = P; oe <= ne; oe++)
            if (T[oe - P] === 0 && io(le, k[oe])) {
              Ce = oe;
              break;
            }
        Ce === void 0 ? j(le, L, F, !0) : (T[Ce - P] = A + 1, Ce >= rt ? rt = Ce : We = !0, m(
          le,
          k[Ce],
          O,
          null,
          L,
          F,
          N,
          K,
          D
        ), ke++);
      }
      const ae = We ? kv(T) : qo;
      for (oe = ae.length - 1, A = Ae - 1; A >= 0; A--) {
        const le = P + A, Ce = k[le], Me = le + 1 < ie ? k[le + 1].el : V;
        T[A] === 0 ? m(
          null,
          Ce,
          O,
          Me,
          L,
          F,
          N,
          K,
          D
        ) : We && (oe < 0 || A !== ae[oe] ? we(Ce, O, Me, 2) : oe--);
      }
    }
  }, we = (w, k, O, V, L = null) => {
    const { el: F, type: N, transition: K, children: D, shapeFlag: A } = w;
    if (A & 6) {
      we(w.component.subTree, k, O, V);
      return;
    }
    if (A & 128) {
      w.suspense.move(k, O, V);
      return;
    }
    if (A & 64) {
      N.move(w, k, O, tt);
      return;
    }
    if (N === De) {
      o(F, k, O);
      for (let G = 0; G < D.length; G++)
        we(D[G], k, O, V);
      o(w.anchor, k, O);
      return;
    }
    if (N === Va) {
      x(w, k, O);
      return;
    }
    if (V !== 2 && A & 1 && K)
      if (V === 0)
        K.beforeEnter(F), o(F, k, O), _t(() => K.enter(F), L);
      else {
        const { leave: G, delayLeave: ne, afterLeave: pe } = K, P = () => o(F, k, O), Y = () => {
          G(F, () => {
            P(), pe && pe();
          });
        };
        ne ? ne(F, P, Y) : Y();
      }
    else
      o(F, k, O);
  }, j = (w, k, O, V = !1, L = !1) => {
    const {
      type: F,
      props: N,
      ref: K,
      children: D,
      dynamicChildren: A,
      shapeFlag: ie,
      patchFlag: G,
      dirs: ne,
      cacheIndex: pe
    } = w;
    if (G === -2 && (L = !1), K != null && Js(K, null, O, w, !0), pe != null && (k.renderCache[pe] = void 0), ie & 256) {
      k.ctx.deactivate(w);
      return;
    }
    const P = ie & 1 && ne, Y = !Ko(w);
    let oe;
    if (Y && (oe = N && N.onVnodeBeforeUnmount) && rr(oe, k, w), ie & 6)
      be(w.component, O, V);
    else {
      if (ie & 128) {
        w.suspense.unmount(O, V);
        return;
      }
      P && Qr(w, null, k, "beforeUnmount"), ie & 64 ? w.type.remove(
        w,
        k,
        O,
        tt,
        V
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== De || G > 0 && G & 64) ? ze(
        A,
        k,
        O,
        !1,
        !0
      ) : (F === De && G & 384 || !L && ie & 16) && ze(D, k, O), V && he(w);
    }
    (Y && (oe = N && N.onVnodeUnmounted) || P) && _t(() => {
      oe && rr(oe, k, w), P && Qr(w, null, k, "unmounted");
    }, O);
  }, he = (w) => {
    const { type: k, el: O, anchor: V, transition: L } = w;
    if (k === De) {
      me(O, V);
      return;
    }
    if (k === Va) {
      v(w);
      return;
    }
    const F = () => {
      n(O), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (w.shapeFlag & 1 && L && !L.persisted) {
      const { leave: N, delayLeave: K } = L, D = () => N(O, F);
      K ? K(w.el, F, D) : D();
    } else
      F();
  }, me = (w, k) => {
    let O;
    for (; w !== k; )
      O = p(w), n(w), w = O;
    n(k);
  }, be = (w, k, O) => {
    const { bum: V, scope: L, job: F, subTree: N, um: K, m: D, a: A } = w;
    Xc(D), Xc(A), V && Ra(V), L.stop(), F && (F.flags |= 8, j(N, w, k, O)), K && _t(K, k), _t(() => {
      w.isUnmounted = !0;
    }, k), k && k.pendingBranch && !k.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === k.pendingId && (k.deps--, k.deps === 0 && k.resolve());
  }, ze = (w, k, O, V = !1, L = !1, F = 0) => {
    for (let N = F; N < w.length; N++)
      j(w[N], k, O, V, L);
  }, Ye = (w) => {
    if (w.shapeFlag & 6)
      return Ye(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const k = p(w.anchor || w.el), O = k && k[Dg];
    return O ? p(O) : k;
  };
  let Be = !1;
  const It = (w, k, O) => {
    w == null ? k._vnode && j(k._vnode, null, null, !0) : m(
      k._vnode || null,
      w,
      k,
      null,
      null,
      null,
      O
    ), k._vnode = w, Be || (Be = !0, Hc(), Sp(), Be = !1);
  }, tt = {
    p: m,
    um: j,
    m: we,
    r: he,
    mt: ge,
    mc: B,
    pc: R,
    pbc: E,
    n: Ye,
    o: t
  };
  let Ht, br;
  return {
    render: It,
    hydrate: Ht,
    createApp: pv(It, Ht)
  };
}
function ps({ type: t, props: e }, r) {
  return r === "svg" && t === "foreignObject" || r === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : r;
}
function eo({ effect: t, job: e }, r) {
  r ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function xv(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Jp(t, e, r = !1) {
  const o = t.children, n = e.children;
  if (ce(o) && ce(n))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let s = n[a];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = n[a] = Ir(n[a]), s.el = i.el), !r && s.patchFlag !== -2 && Jp(i, s)), s.type === qi && (s.el = i.el);
    }
}
function kv(t) {
  const e = t.slice(), r = [0];
  let o, n, a, i, s;
  const l = t.length;
  for (o = 0; o < l; o++) {
    const c = t[o];
    if (c !== 0) {
      if (n = r[r.length - 1], t[n] < c) {
        e[o] = n, r.push(o);
        continue;
      }
      for (a = 0, i = r.length - 1; a < i; )
        s = a + i >> 1, t[r[s]] < c ? a = s + 1 : i = s;
      c < t[r[a]] && (a > 0 && (e[o] = r[a - 1]), r[a] = o);
    }
  }
  for (a = r.length, i = r[a - 1]; a-- > 0; )
    r[a] = i, i = e[i];
  return r;
}
function Yp(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Yp(e);
}
function Xc(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
const $v = Symbol.for("v-scx"), Sv = () => Vr($v);
function Xp(t, e) {
  return ua(t, null, e);
}
function _v(t, e) {
  return ua(
    t,
    null,
    { flush: "post" }
  );
}
function Cv(t, e) {
  return ua(
    t,
    null,
    { flush: "sync" }
  );
}
function Le(t, e, r) {
  return ua(t, e, r);
}
function ua(t, e, r = Ve) {
  const { immediate: o, deep: n, flush: a, once: i } = r, s = qe({}, r), l = e && o || !e && a !== "post";
  let c;
  if (Un) {
    if (a === "sync") {
      const f = Sv();
      c = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      const f = () => {
      };
      return f.stop = pr, f.resume = pr, f.pause = pr, f;
    }
  }
  const d = at;
  s.call = (f, h, m) => Gt(f, d, h, m);
  let u = !1;
  a === "post" ? s.scheduler = (f) => {
    _t(f, d && d.suspense);
  } : a !== "sync" && (u = !0, s.scheduler = (f, h) => {
    h ? f() : Ul(f);
  }), s.augmentJob = (f) => {
    e && (f.flags |= 4), u && (f.flags |= 2, d && (f.id = d.uid, f.i = d));
  };
  const p = Pg(t, e, s);
  return Un && (c ? c.push(p) : l && p()), p;
}
function Ov(t, e, r) {
  const o = this.proxy, n = Ke(t) ? t.includes(".") ? Gp(o, t) : () => o[t] : t.bind(o, o);
  let a;
  $e(e) ? a = e : (a = e.handler, r = e);
  const i = pa(this), s = ua(n, a.bind(o), r);
  return i(), s;
}
function Gp(t, e) {
  const r = e.split(".");
  return () => {
    let o = t;
    for (let n = 0; n < r.length && o; n++)
      o = o[r[n]];
    return o;
  };
}
function Ev(t, e, r = Ve) {
  const o = Co(), n = dt(e), a = kt(e), i = Zp(t, n), s = Mg((l, c) => {
    let d, u = Ve, p;
    return Cv(() => {
      const f = t[n];
      xt(d, f) && (d = f, c());
    }), {
      get() {
        return l(), r.get ? r.get(d) : d;
      },
      set(f) {
        const h = r.set ? r.set(f) : f;
        if (!xt(h, d) && !(u !== Ve && xt(f, u)))
          return;
        const m = o.vnode.props;
        m && // check if parent has passed v-model
        (e in m || n in m || a in m) && (`onUpdate:${e}` in m || `onUpdate:${n}` in m || `onUpdate:${a}` in m) || (d = f, c()), o.emit(`update:${e}`, h), xt(f, h) && xt(f, u) && !xt(h, p) && c(), u = f, p = h;
      }
    };
  });
  return s[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || Ve : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
const Zp = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${dt(e)}Modifiers`] || t[`${kt(e)}Modifiers`];
function Mv(t, e, ...r) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || Ve;
  let n = r;
  const a = e.startsWith("update:"), i = a && Zp(o, e.slice(7));
  i && (i.trim && (n = r.map((d) => Ke(d) ? d.trim() : d)), i.number && (n = r.map(Ya)));
  let s, l = o[s = ns(e)] || // also try camelCase event handler (#2249)
  o[s = ns(dt(e))];
  !l && a && (l = o[s = ns(kt(e))]), l && Gt(
    l,
    t,
    6,
    n
  );
  const c = o[s + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[s])
      return;
    t.emitted[s] = !0, Gt(
      c,
      t,
      6,
      n
    );
  }
}
function Qp(t, e, r = !1) {
  const o = e.emitsCache, n = o.get(t);
  if (n !== void 0)
    return n;
  const a = t.emits;
  let i = {}, s = !1;
  if (!$e(t)) {
    const l = (c) => {
      const d = Qp(c, e, !0);
      d && (s = !0, qe(i, d));
    };
    !r && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !a && !s ? (Fe(t) && o.set(t, null), null) : (ce(a) ? a.forEach((l) => i[l] = null) : qe(i, a), Fe(t) && o.set(t, i), i);
}
function Hi(t, e) {
  return !t || !Ii(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Re(t, e[0].toLowerCase() + e.slice(1)) || Re(t, kt(e)) || Re(t, e));
}
function fs(t) {
  const {
    type: e,
    vnode: r,
    proxy: o,
    withProxy: n,
    propsOptions: [a],
    slots: i,
    attrs: s,
    emit: l,
    render: c,
    renderCache: d,
    props: u,
    data: p,
    setupState: f,
    ctx: h,
    inheritAttrs: m
  } = t, g = Qa(t);
  let b, y;
  try {
    if (r.shapeFlag & 4) {
      const v = n || o, S = v;
      b = ar(
        c.call(
          S,
          v,
          d,
          u,
          f,
          p,
          h
        )
      ), y = s;
    } else {
      const v = e;
      b = ar(
        v.length > 1 ? v(
          u,
          { attrs: s, slots: i, emit: l }
        ) : v(
          u,
          null
        )
      ), y = e.props ? s : Tv(s);
    }
  } catch (v) {
    En.length = 0, Li(v, t, 1), b = fe(bt);
  }
  let x = b;
  if (y && m !== !1) {
    const v = Object.keys(y), { shapeFlag: S } = x;
    v.length && S & 7 && (a && v.some(Pl) && (y = Av(
      y,
      a
    )), x = Br(x, y, !1, !0));
  }
  return r.dirs && (x = Br(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(r.dirs) : r.dirs), r.transition && Fn(x, r.transition), b = x, Qa(g), b;
}
const Tv = (t) => {
  let e;
  for (const r in t)
    (r === "class" || r === "style" || Ii(r)) && ((e || (e = {}))[r] = t[r]);
  return e;
}, Av = (t, e) => {
  const r = {};
  for (const o in t)
    (!Pl(o) || !(o.slice(9) in e)) && (r[o] = t[o]);
  return r;
};
function Iv(t, e, r) {
  const { props: o, children: n, component: a } = t, { props: i, children: s, patchFlag: l } = e, c = a.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? Gc(o, i, c) : !!i;
    if (l & 8) {
      const d = e.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const p = d[u];
        if (i[p] !== o[p] && !Hi(c, p))
          return !0;
      }
    }
  } else
    return (n || s) && (!s || !s.$stable) ? !0 : o === i ? !1 : o ? i ? Gc(o, i, c) : !0 : !!i;
  return !1;
}
function Gc(t, e, r) {
  const o = Object.keys(e);
  if (o.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < o.length; n++) {
    const a = o[n];
    if (e[a] !== t[a] && !Hi(r, a))
      return !0;
  }
  return !1;
}
function Nv({ vnode: t, parent: e }, r) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.el = t.el), o === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
}
const ef = (t) => t.__isSuspense;
function zv(t, e) {
  e && e.pendingBranch ? ce(t) ? e.effects.push(...t) : e.effects.push(t) : Lg(t);
}
const De = Symbol.for("v-fgt"), qi = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), Va = Symbol.for("v-stc"), En = [];
let Mt = null;
function $(t = !1) {
  En.push(Mt = t ? null : []);
}
function jv() {
  En.pop(), Mt = En[En.length - 1] || null;
}
let qn = 1;
function Zc(t) {
  qn += t, t < 0 && Mt && (Mt.hasOnce = !0);
}
function tf(t) {
  return t.dynamicChildren = qn > 0 ? Mt || qo : null, jv(), qn > 0 && Mt && Mt.push(t), t;
}
function I(t, e, r, o, n, a) {
  return tf(
    J(
      t,
      e,
      r,
      o,
      n,
      a,
      !0
    )
  );
}
function de(t, e, r, o, n) {
  return tf(
    fe(
      t,
      e,
      r,
      o,
      n,
      !0
    )
  );
}
function Wn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function io(t, e) {
  return t.type === e.type && t.key === e.key;
}
const rf = ({ key: t }) => t ?? null, La = ({
  ref: t,
  ref_key: e,
  ref_for: r
}) => (typeof t == "number" && (t = "" + t), t != null ? Ke(t) || Ge(t) || $e(t) ? { i: Qe, r: t, k: e, f: !!r } : t : null);
function J(t, e = null, r = null, o = 0, n = null, a = t === De ? 0 : 1, i = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && rf(e),
    ref: e && La(e),
    scopeId: Cp,
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
    shapeFlag: a,
    patchFlag: o,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Qe
  };
  return s ? (Gl(l, r), a & 128 && t.normalize(l)) : r && (l.shapeFlag |= Ke(r) ? 8 : 16), qn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Mt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Mt.push(l), l;
}
const fe = Pv;
function Pv(t, e = null, r = null, o = 0, n = null, a = !1) {
  if ((!t || t === jp) && (t = bt), Wn(t)) {
    const s = Br(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return r && Gl(s, r), qn > 0 && !a && Mt && (s.shapeFlag & 6 ? Mt[Mt.indexOf(t)] = s : Mt.push(s)), s.patchFlag = -2, s;
  }
  if (qv(t) && (t = t.__vccOpts), e) {
    e = Xl(e);
    let { class: s, style: l } = e;
    s && !Ke(s) && (e.class = Ne(s)), Fe(l) && (Wl(l) && !ce(l) && (l = qe({}, l)), e.style = _o(l));
  }
  const i = Ke(t) ? 1 : ef(t) ? 128 : Op(t) ? 64 : Fe(t) ? 4 : $e(t) ? 2 : 0;
  return J(
    t,
    e,
    r,
    o,
    n,
    i,
    a,
    !0
  );
}
function Xl(t) {
  return t ? Wl(t) || Bp(t) ? qe({}, t) : t : null;
}
function Br(t, e, r = !1, o = !1) {
  const { props: n, ref: a, patchFlag: i, children: s, transition: l } = t, c = e ? Je(n || {}, e) : n, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && rf(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? ce(a) ? a.concat(La(e)) : [a, La(e)] : La(e)
    ) : a,
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
    patchFlag: e && t.type !== De ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: t.ssContent && Br(t.ssContent),
    ssFallback: t.ssFallback && Br(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && o && Fn(
    d,
    l.clone(d)
  ), d;
}
function Xe(t = " ", e = 0) {
  return fe(qi, null, t, e);
}
function Q(t = "", e = !1) {
  return e ? ($(), de(bt, null, t)) : fe(bt, null, t);
}
function ar(t) {
  return t == null || typeof t == "boolean" ? fe(bt) : ce(t) ? fe(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Wn(t) ? Ir(t) : fe(qi, null, String(t));
}
function Ir(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Br(t);
}
function Gl(t, e) {
  let r = 0;
  const { shapeFlag: o } = t;
  if (e == null)
    e = null;
  else if (ce(e))
    r = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Gl(t, n()), n._c && (n._d = !0));
      return;
    } else {
      r = 32;
      const n = e._;
      !n && !Bp(e) ? e._ctx = Qe : n === 3 && Qe && (Qe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else $e(e) ? (e = { default: e, _ctx: Qe }, r = 32) : (e = String(e), o & 64 ? (r = 16, e = [Xe(e)]) : r = 8);
  t.children = e, t.shapeFlag |= r;
}
function Je(...t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    for (const n in o)
      if (n === "class")
        e.class !== o.class && (e.class = Ne([e.class, o.class]));
      else if (n === "style")
        e.style = _o([e.style, o.style]);
      else if (Ii(n)) {
        const a = e[n], i = o[n];
        i && a !== i && !(ce(a) && a.includes(i)) && (e[n] = a ? [].concat(a, i) : i);
      } else n !== "" && (e[n] = o[n]);
  }
  return e;
}
function rr(t, e, r, o = null) {
  Gt(t, e, 7, [
    r,
    o
  ]);
}
const Rv = Vp();
let Vv = 0;
function Lv(t, e, r) {
  const o = t.type, n = (e ? e.appContext : t.appContext) || Rv, a = {
    uid: Vv++,
    vnode: t,
    type: o,
    parent: e,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new rg(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(n.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Hp(o, n),
    emitsOptions: Qp(o, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
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
  return a.ctx = { _: a }, a.root = e ? e.root : a, a.emit = Mv.bind(null, a), t.ce && t.ce(a), a;
}
let at = null;
const Co = () => at || Qe;
let ri, el;
{
  const t = Pi(), e = (r, o) => {
    let n;
    return (n = t[r]) || (n = t[r] = []), n.push(o), (a) => {
      n.length > 1 ? n.forEach((i) => i(a)) : n[0](a);
    };
  };
  ri = e(
    "__VUE_INSTANCE_SETTERS__",
    (r) => at = r
  ), el = e(
    "__VUE_SSR_SETTERS__",
    (r) => Un = r
  );
}
const pa = (t) => {
  const e = at;
  return ri(t), t.scope.on(), () => {
    t.scope.off(), ri(e);
  };
}, Qc = () => {
  at && at.scope.off(), ri(null);
};
function of(t) {
  return t.vnode.shapeFlag & 4;
}
let Un = !1;
function Dv(t, e = !1, r = !1) {
  e && el(e);
  const { props: o, children: n } = t.vnode, a = of(t);
  fv(t, o, a, e), vv(t, n, r);
  const i = a ? Bv(t, e) : void 0;
  return e && el(!1), i;
}
function Bv(t, e) {
  const r = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, rv);
  const { setup: o } = r;
  if (o) {
    qr();
    const n = t.setupContext = o.length > 1 ? af(t) : null, a = pa(t), i = ca(
      o,
      t,
      0,
      [
        t.props,
        n
      ]
    ), s = Qu(i);
    if (Wr(), a(), (s || t.sp) && !Ko(t) && Np(t), s) {
      if (i.then(Qc, Qc), e)
        return i.then((l) => {
          ed(t, l, e);
        }).catch((l) => {
          Li(l, t, 0);
        });
      t.asyncDep = i;
    } else
      ed(t, i, e);
  } else
    nf(t, e);
}
function ed(t, e, r) {
  $e(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Fe(e) && (t.setupState = xp(e)), nf(t, r);
}
let td;
function nf(t, e, r) {
  const o = t.type;
  if (!t.render) {
    if (!e && td && !o.render) {
      const n = o.template || Jl(t).template;
      if (n) {
        const { isCustomElement: a, compilerOptions: i } = t.appContext.config, { delimiters: s, compilerOptions: l } = o, c = qe(
          qe(
            {
              isCustomElement: a,
              delimiters: s
            },
            i
          ),
          l
        );
        o.render = td(n, c);
      }
    }
    t.render = o.render || pr;
  }
  {
    const n = pa(t);
    qr();
    try {
      iv(t);
    } finally {
      Wr(), n();
    }
  }
}
const Fv = {
  get(t, e) {
    return it(t, "get", ""), t[e];
  }
};
function af(t) {
  const e = (r) => {
    t.exposed = r || {};
  };
  return {
    attrs: new Proxy(t.attrs, Fv),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Wi(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(xp(Sg(t.exposed)), {
    get(e, r) {
      if (r in e)
        return e[r];
      if (r in On)
        return On[r](t);
    },
    has(e, r) {
      return r in e || r in On;
    }
  })) : t.proxy;
}
function Hv(t, e = !0) {
  return $e(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function qv(t) {
  return $e(t) && "__vccOpts" in t;
}
const W = (t, e) => zg(t, e, Un);
function Wv(t, e, r) {
  const o = arguments.length;
  return o === 2 ? Fe(e) && !ce(e) ? Wn(e) ? fe(t, null, [e]) : fe(t, e) : fe(t, null, e) : (o > 3 ? r = Array.prototype.slice.call(arguments, 2) : o === 3 && Wn(r) && (r = [r]), fe(t, e, r));
}
const Uv = "3.5.12";
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tl;
const rd = typeof window < "u" && window.trustedTypes;
if (rd)
  try {
    tl = /* @__PURE__ */ rd.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const sf = tl ? (t) => tl.createHTML(t) : (t) => t, Kv = "http://www.w3.org/2000/svg", Jv = "http://www.w3.org/1998/Math/MathML", yr = typeof document < "u" ? document : null, od = yr && /* @__PURE__ */ yr.createElement("template"), Yv = {
  insert: (t, e, r) => {
    e.insertBefore(t, r || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, r, o) => {
    const n = e === "svg" ? yr.createElementNS(Kv, t) : e === "mathml" ? yr.createElementNS(Jv, t) : r ? yr.createElement(t, { is: r }) : yr.createElement(t);
    return t === "select" && o && o.multiple != null && n.setAttribute("multiple", o.multiple), n;
  },
  createText: (t) => yr.createTextNode(t),
  createComment: (t) => yr.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => yr.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, r, o, n, a) {
    const i = r ? r.previousSibling : e.lastChild;
    if (n && (n === a || n.nextSibling))
      for (; e.insertBefore(n.cloneNode(!0), r), !(n === a || !(n = n.nextSibling)); )
        ;
    else {
      od.innerHTML = sf(
        o === "svg" ? `<svg>${t}</svg>` : o === "mathml" ? `<math>${t}</math>` : t
      );
      const s = od.content;
      if (o === "svg" || o === "mathml") {
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
}, Er = "transition", fn = "animation", Kn = Symbol("_vtc"), lf = {
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
}, Xv = /* @__PURE__ */ qe(
  {},
  Ep,
  lf
), Gv = (t) => (t.displayName = "Transition", t.props = Xv, t), Jn = /* @__PURE__ */ Gv(
  (t, { slots: e }) => Wv(Hg, Zv(t), e)
), to = (t, e = []) => {
  ce(t) ? t.forEach((r) => r(...e)) : t && t(...e);
}, nd = (t) => t ? ce(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function Zv(t) {
  const e = {};
  for (const z in t)
    z in lf || (e[z] = t[z]);
  if (t.css === !1)
    return e;
  const {
    name: r = "v",
    type: o,
    duration: n,
    enterFromClass: a = `${r}-enter-from`,
    enterActiveClass: i = `${r}-enter-active`,
    enterToClass: s = `${r}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: c = i,
    appearToClass: d = s,
    leaveFromClass: u = `${r}-leave-from`,
    leaveActiveClass: p = `${r}-leave-active`,
    leaveToClass: f = `${r}-leave-to`
  } = t, h = Qv(n), m = h && h[0], g = h && h[1], {
    onBeforeEnter: b,
    onEnter: y,
    onEnterCancelled: x,
    onLeave: v,
    onLeaveCancelled: S,
    onBeforeAppear: M = b,
    onAppear: q = y,
    onAppearCancelled: B = x
  } = e, _ = (z, Z, ge) => {
    ro(z, Z ? d : s), ro(z, Z ? c : i), ge && ge();
  }, E = (z, Z) => {
    z._isLeaving = !1, ro(z, u), ro(z, f), ro(z, p), Z && Z();
  }, U = (z) => (Z, ge) => {
    const _e = z ? q : y, ye = () => _(Z, z, ge);
    to(_e, [Z, ye]), ad(() => {
      ro(Z, z ? l : a), Mr(Z, z ? d : s), nd(_e) || id(Z, o, m, ye);
    });
  };
  return qe(e, {
    onBeforeEnter(z) {
      to(b, [z]), Mr(z, a), Mr(z, i);
    },
    onBeforeAppear(z) {
      to(M, [z]), Mr(z, l), Mr(z, c);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(z, Z) {
      z._isLeaving = !0;
      const ge = () => E(z, Z);
      Mr(z, u), Mr(z, p), rb(), ad(() => {
        z._isLeaving && (ro(z, u), Mr(z, f), nd(v) || id(z, o, g, ge));
      }), to(v, [z, ge]);
    },
    onEnterCancelled(z) {
      _(z, !1), to(x, [z]);
    },
    onAppearCancelled(z) {
      _(z, !0), to(B, [z]);
    },
    onLeaveCancelled(z) {
      E(z), to(S, [z]);
    }
  });
}
function Qv(t) {
  if (t == null)
    return null;
  if (Fe(t))
    return [hs(t.enter), hs(t.leave)];
  {
    const e = hs(t);
    return [e, e];
  }
}
function hs(t) {
  return Fs(t);
}
function Mr(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.add(r)), (t[Kn] || (t[Kn] = /* @__PURE__ */ new Set())).add(e);
}
function ro(t, e) {
  e.split(/\s+/).forEach((o) => o && t.classList.remove(o));
  const r = t[Kn];
  r && (r.delete(e), r.size || (t[Kn] = void 0));
}
function ad(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let eb = 0;
function id(t, e, r, o) {
  const n = t._endId = ++eb, a = () => {
    n === t._endId && o();
  };
  if (r != null)
    return setTimeout(a, r);
  const { type: i, timeout: s, propCount: l } = tb(t, e);
  if (!i)
    return o();
  const c = i + "end";
  let d = 0;
  const u = () => {
    t.removeEventListener(c, p), a();
  }, p = (f) => {
    f.target === t && ++d >= l && u();
  };
  setTimeout(() => {
    d < l && u();
  }, s + 1), t.addEventListener(c, p);
}
function tb(t, e) {
  const r = window.getComputedStyle(t), o = (h) => (r[h] || "").split(", "), n = o(`${Er}Delay`), a = o(`${Er}Duration`), i = sd(n, a), s = o(`${fn}Delay`), l = o(`${fn}Duration`), c = sd(s, l);
  let d = null, u = 0, p = 0;
  e === Er ? i > 0 && (d = Er, u = i, p = a.length) : e === fn ? c > 0 && (d = fn, u = c, p = l.length) : (u = Math.max(i, c), d = u > 0 ? i > c ? Er : fn : null, p = d ? d === Er ? a.length : l.length : 0);
  const f = d === Er && /\b(transform|all)(,|$)/.test(
    o(`${Er}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: p,
    hasTransform: f
  };
}
function sd(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((r, o) => ld(r) + ld(t[o])));
}
function ld(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function rb() {
  return document.body.offsetHeight;
}
function ob(t, e, r) {
  const o = t[Kn];
  o && (e = (e ? [e, ...o] : [...o]).join(" ")), e == null ? t.removeAttribute("class") : r ? t.setAttribute("class", e) : t.className = e;
}
const oi = Symbol("_vod"), cf = Symbol("_vsh"), Zl = {
  beforeMount(t, { value: e }, { transition: r }) {
    t[oi] = t.style.display === "none" ? "" : t.style.display, r && e ? r.beforeEnter(t) : hn(t, e);
  },
  mounted(t, { value: e }, { transition: r }) {
    r && e && r.enter(t);
  },
  updated(t, { value: e, oldValue: r }, { transition: o }) {
    !e != !r && (o ? e ? (o.beforeEnter(t), hn(t, !0), o.enter(t)) : o.leave(t, () => {
      hn(t, !1);
    }) : hn(t, e));
  },
  beforeUnmount(t, { value: e }) {
    hn(t, e);
  }
};
function hn(t, e) {
  t.style.display = e ? t[oi] : "none", t[cf] = !e;
}
const df = Symbol("");
function nb(t) {
  const e = Co();
  if (!e)
    return;
  const r = e.ut = (n = t(e.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
    ).forEach((a) => ni(a, n));
  }, o = () => {
    const n = t(e.proxy);
    e.ce ? ni(e.ce, n) : rl(e.subTree, n), r(n);
  };
  Kl(() => {
    _v(o);
  }), Qt(() => {
    const n = new MutationObserver(o);
    n.observe(e.subTree.el.parentNode, { childList: !0 }), Fi(() => n.disconnect());
  });
}
function rl(t, e) {
  if (t.shapeFlag & 128) {
    const r = t.suspense;
    t = r.activeBranch, r.pendingBranch && !r.isHydrating && r.effects.push(() => {
      rl(r.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    ni(t.el, e);
  else if (t.type === De)
    t.children.forEach((r) => rl(r, e));
  else if (t.type === Va) {
    let { el: r, anchor: o } = t;
    for (; r && (ni(r, e), r !== o); )
      r = r.nextSibling;
  }
}
function ni(t, e) {
  if (t.nodeType === 1) {
    const r = t.style;
    let o = "";
    for (const n in e)
      r.setProperty(`--${n}`, e[n]), o += `--${n}: ${e[n]};`;
    r[df] = o;
  }
}
const ab = /(^|;)\s*display\s*:/;
function ib(t, e, r) {
  const o = t.style, n = Ke(r);
  let a = !1;
  if (r && !n) {
    if (e)
      if (Ke(e))
        for (const i of e.split(";")) {
          const s = i.slice(0, i.indexOf(":")).trim();
          r[s] == null && Da(o, s, "");
        }
      else
        for (const i in e)
          r[i] == null && Da(o, i, "");
    for (const i in r)
      i === "display" && (a = !0), Da(o, i, r[i]);
  } else if (n) {
    if (e !== r) {
      const i = o[df];
      i && (r += ";" + i), o.cssText = r, a = ab.test(r);
    }
  } else e && t.removeAttribute("style");
  oi in t && (t[oi] = a ? o.display : "", t[cf] && (o.display = "none"));
}
const cd = /\s*!important$/;
function Da(t, e, r) {
  if (ce(r))
    r.forEach((o) => Da(t, e, o));
  else if (r == null && (r = ""), e.startsWith("--"))
    t.setProperty(e, r);
  else {
    const o = sb(t, e);
    cd.test(r) ? t.setProperty(
      kt(o),
      r.replace(cd, ""),
      "important"
    ) : t[o] = r;
  }
}
const dd = ["Webkit", "Moz", "ms"], ms = {};
function sb(t, e) {
  const r = ms[e];
  if (r)
    return r;
  let o = dt(e);
  if (o !== "filter" && o in t)
    return ms[e] = o;
  o = ji(o);
  for (let n = 0; n < dd.length; n++) {
    const a = dd[n] + o;
    if (a in t)
      return ms[e] = a;
  }
  return e;
}
const ud = "http://www.w3.org/1999/xlink";
function pd(t, e, r, o, n, a = eg(e)) {
  o && e.startsWith("xlink:") ? r == null ? t.removeAttributeNS(ud, e.slice(6, e.length)) : t.setAttributeNS(ud, e, r) : r == null || a && !rp(r) ? t.removeAttribute(e) : t.setAttribute(
    e,
    a ? "" : Xt(r) ? String(r) : r
  );
}
function fd(t, e, r, o, n) {
  if (e === "innerHTML" || e === "textContent") {
    r != null && (t[e] = e === "innerHTML" ? sf(r) : r);
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const s = a === "OPTION" ? t.getAttribute("value") || "" : t.value, l = r == null ? (
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
    s === "boolean" ? r = rp(r) : r == null && s === "string" ? (r = "", i = !0) : s === "number" && (r = 0, i = !0);
  }
  try {
    t[e] = r;
  } catch {
  }
  i && t.removeAttribute(n || e);
}
function $r(t, e, r, o) {
  t.addEventListener(e, r, o);
}
function lb(t, e, r, o) {
  t.removeEventListener(e, r, o);
}
const hd = Symbol("_vei");
function cb(t, e, r, o, n = null) {
  const a = t[hd] || (t[hd] = {}), i = a[e];
  if (o && i)
    i.value = o;
  else {
    const [s, l] = db(e);
    if (o) {
      const c = a[e] = fb(
        o,
        n
      );
      $r(t, s, c, l);
    } else i && (lb(t, s, i, l), a[e] = void 0);
  }
}
const md = /(?:Once|Passive|Capture)$/;
function db(t) {
  let e;
  if (md.test(t)) {
    e = {};
    let o;
    for (; o = t.match(md); )
      t = t.slice(0, t.length - o[0].length), e[o[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : kt(t.slice(2)), e];
}
let gs = 0;
const ub = /* @__PURE__ */ Promise.resolve(), pb = () => gs || (ub.then(() => gs = 0), gs = Date.now());
function fb(t, e) {
  const r = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= r.attached)
      return;
    Gt(
      hb(o, r.value),
      e,
      5,
      [o]
    );
  };
  return r.value = t, r.attached = pb(), r;
}
function hb(t, e) {
  if (ce(e)) {
    const r = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      r.call(t), t._stopped = !0;
    }, e.map(
      (o) => (n) => !n._stopped && o && o(n)
    );
  } else
    return e;
}
const gd = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, mb = (t, e, r, o, n, a) => {
  const i = n === "svg";
  e === "class" ? ob(t, o, i) : e === "style" ? ib(t, r, o) : Ii(e) ? Pl(e) || cb(t, e, r, o, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : gb(t, e, o, i)) ? (fd(t, e, o), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && pd(t, e, o, i, a, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(e) || !Ke(o)) ? fd(t, dt(e), o, a, e) : (e === "true-value" ? t._trueValue = o : e === "false-value" && (t._falseValue = o), pd(t, e, o, i));
};
function gb(t, e, r, o) {
  if (o)
    return !!(e === "innerHTML" || e === "textContent" || e in t && gd(e) && $e(r));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return gd(e) && Ke(r) ? !1 : e in t;
}
const vd = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vb(t, e, r) {
  const o = /* @__PURE__ */ qg(t, e);
  Ni(o) && qe(o, e);
  class n extends Ql {
    constructor(i) {
      super(o, i, r);
    }
  }
  return n.def = o, n;
}
const bb = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ql extends bb {
  constructor(e, r = {}, o = kd) {
    super(), this._def = e, this._props = r, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== kd ? this._root = this.shadowRoot : e.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && (e.parentNode || e.host); )
      if (e instanceof Ql) {
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
    this._connected = !1, Zt(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const n of o)
        this._setAttr(n.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const e = (o, n = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: a, styles: i } = o;
      let s;
      if (a && !ce(a))
        for (const l in a) {
          const c = a[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Fs(this._props[l])), (s || (s = /* @__PURE__ */ Object.create(null)))[dt(l)] = !0);
        }
      this._numberProps = s, n && this._resolveProps(o), this.shadowRoot && this._applyStyles(i), this._mount(o);
    }, r = this._def.__asyncLoader;
    r ? this._pendingResolve = r().then(
      (o) => e(this._def = o, !0)
    ) : e(this._def);
  }
  _mount(e) {
    this._app = this._createApp(e), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const r = this._instance && this._instance.exposed;
    if (r)
      for (const o in r)
        Re(this, o) || Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => H(r[o])
        });
  }
  _resolveProps(e) {
    const { props: r } = e, o = ce(r) ? r : Object.keys(r || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && o.includes(n) && this._setProp(n, this[n]);
    for (const n of o.map(dt))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(a) {
          this._setProp(n, a, !0, !0);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const r = this.hasAttribute(e);
    let o = r ? this.getAttribute(e) : vd;
    const n = dt(e);
    r && this._numberProps && this._numberProps[n] && (o = Fs(o)), this._setProp(n, o, !1, !0);
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
  _setProp(e, r, o = !0, n = !1) {
    r !== this._props[e] && (r === vd ? delete this._props[e] : (this._props[e] = r, e === "key" && this._app && (this._app._ceVNode.key = r)), n && this._instance && this._update(), o && (r === !0 ? this.setAttribute(kt(e), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(kt(e), r + "") : r || this.removeAttribute(kt(e))));
  }
  _update() {
    Eb(this._createVNode(), this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const r = fe(this._def, qe(e, this._props));
    return this._instance || (r.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0;
      const n = (a, i) => {
        this.dispatchEvent(
          new CustomEvent(
            a,
            Ni(i[0]) ? qe({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (a, ...i) => {
        n(a, i), kt(a) !== a && n(kt(a), i);
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
    const o = this._nonce;
    for (let n = e.length - 1; n >= 0; n--) {
      const a = document.createElement("style");
      o && a.setAttribute("nonce", o), a.textContent = e[n], this.shadowRoot.prepend(a);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let r;
    for (; r = this.firstChild; ) {
      const o = r.nodeType === 1 && r.getAttribute("slot") || "default";
      (e[o] || (e[o] = [])).push(r), this.removeChild(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = (this._teleportTarget || this).querySelectorAll("slot"), r = this._instance.type.__scopeId;
    for (let o = 0; o < e.length; o++) {
      const n = e[o], a = n.getAttribute("name") || "default", i = this._slots[a], s = n.parentNode;
      if (i)
        for (const l of i) {
          if (r && l.nodeType === 1) {
            const c = r + "-s", d = document.createTreeWalker(l, 1);
            l.setAttribute(c, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(c, "");
          }
          s.insertBefore(l, n);
        }
      else
        for (; n.firstChild; ) s.insertBefore(n.firstChild, n);
      s.removeChild(n);
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
const Fr = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return ce(e) ? (r) => Ra(e, r) : e;
};
function wb(t) {
  t.target.composing = !0;
}
function bd(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Rt = Symbol("_assign"), ai = {
  created(t, { modifiers: { lazy: e, trim: r, number: o } }, n) {
    t[Rt] = Fr(n);
    const a = o || n.props && n.props.type === "number";
    $r(t, e ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let s = t.value;
      r && (s = s.trim()), a && (s = Ya(s)), t[Rt](s);
    }), r && $r(t, "change", () => {
      t.value = t.value.trim();
    }), e || ($r(t, "compositionstart", wb), $r(t, "compositionend", bd), $r(t, "change", bd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: r, modifiers: { lazy: o, trim: n, number: a } }, i) {
    if (t[Rt] = Fr(i), t.composing) return;
    const s = (a || t.type === "number") && !/^0\d/.test(t.value) ? Ya(t.value) : t.value, l = e ?? "";
    s !== l && (document.activeElement === t && t.type !== "range" && (o && e === r || n && t.value.trim() === l) || (t.value = l));
  }
}, uf = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, r) {
    t[Rt] = Fr(r), $r(t, "change", () => {
      const o = t._modelValue, n = Qo(t), a = t.checked, i = t[Rt];
      if (ce(o)) {
        const s = Ll(o, n), l = s !== -1;
        if (a && !l)
          i(o.concat(n));
        else if (!a && l) {
          const c = [...o];
          c.splice(s, 1), i(c);
        }
      } else if (ln(o)) {
        const s = new Set(o);
        a ? s.add(n) : s.delete(n), i(s);
      } else
        i(pf(t, a));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: wd,
  beforeUpdate(t, e, r) {
    t[Rt] = Fr(r), wd(t, e, r);
  }
};
function wd(t, { value: e, oldValue: r }, o) {
  t._modelValue = e;
  let n;
  if (ce(e))
    n = Ll(e, o.props.value) > -1;
  else if (ln(e))
    n = e.has(o.props.value);
  else {
    if (e === r) return;
    n = wo(e, pf(t, !0));
  }
  t.checked !== n && (t.checked = n);
}
const yb = {
  created(t, { value: e }, r) {
    t.checked = wo(e, r.props.value), t[Rt] = Fr(r), $r(t, "change", () => {
      t[Rt](Qo(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: r }, o) {
    t[Rt] = Fr(o), e !== r && (t.checked = wo(e, o.props.value));
  }
}, xb = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: r } }, o) {
    const n = ln(e);
    $r(t, "change", () => {
      const a = Array.prototype.filter.call(t.options, (i) => i.selected).map(
        (i) => r ? Ya(Qo(i)) : Qo(i)
      );
      t[Rt](
        t.multiple ? n ? new Set(a) : a : a[0]
      ), t._assigning = !0, Zt(() => {
        t._assigning = !1;
      });
    }), t[Rt] = Fr(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e }) {
    yd(t, e);
  },
  beforeUpdate(t, e, r) {
    t[Rt] = Fr(r);
  },
  updated(t, { value: e }) {
    t._assigning || yd(t, e);
  }
};
function yd(t, e) {
  const r = t.multiple, o = ce(e);
  if (!(r && !o && !ln(e))) {
    for (let n = 0, a = t.options.length; n < a; n++) {
      const i = t.options[n], s = Qo(i);
      if (r)
        if (o) {
          const l = typeof s;
          l === "string" || l === "number" ? i.selected = e.some((c) => String(c) === String(s)) : i.selected = Ll(e, s) > -1;
        } else
          i.selected = e.has(s);
      else if (wo(Qo(i), e)) {
        t.selectedIndex !== n && (t.selectedIndex = n);
        return;
      }
    }
    !r && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Qo(t) {
  return "_value" in t ? t._value : t.value;
}
function pf(t, e) {
  const r = e ? "_trueValue" : "_falseValue";
  return r in t ? t[r] : e;
}
const kb = {
  created(t, e, r) {
    Ca(t, e, r, null, "created");
  },
  mounted(t, e, r) {
    Ca(t, e, r, null, "mounted");
  },
  beforeUpdate(t, e, r, o) {
    Ca(t, e, r, o, "beforeUpdate");
  },
  updated(t, e, r, o) {
    Ca(t, e, r, o, "updated");
  }
};
function $b(t, e) {
  switch (t) {
    case "SELECT":
      return xb;
    case "TEXTAREA":
      return ai;
    default:
      switch (e) {
        case "checkbox":
          return uf;
        case "radio":
          return yb;
        default:
          return ai;
      }
  }
}
function Ca(t, e, r, o, n) {
  const i = $b(
    t.tagName,
    r.props && r.props.type
  )[n];
  i && i(t, e, r, o);
}
const Sb = ["ctrl", "shift", "alt", "meta"], _b = {
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
  exact: (t, e) => Sb.some((r) => t[`${r}Key`] && !e.includes(r))
}, fr = (t, e) => {
  const r = t._withMods || (t._withMods = {}), o = e.join(".");
  return r[o] || (r[o] = (n, ...a) => {
    for (let i = 0; i < e.length; i++) {
      const s = _b[e[i]];
      if (s && s(n, e)) return;
    }
    return t(n, ...a);
  });
}, Cb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, lr = (t, e) => {
  const r = t._withKeys || (t._withKeys = {}), o = e.join(".");
  return r[o] || (r[o] = (n) => {
    if (!("key" in n))
      return;
    const a = kt(n.key);
    if (e.some(
      (i) => i === a || Cb[i] === a
    ))
      return t(n);
  });
}, Ob = /* @__PURE__ */ qe({ patchProp: mb }, Yv);
let xd;
function ff() {
  return xd || (xd = wv(Ob));
}
const Eb = (...t) => {
  ff().render(...t);
}, kd = (...t) => {
  const e = ff().createApp(...t), { mount: r } = e;
  return e.mount = (o) => {
    const n = Tb(o);
    if (!n) return;
    const a = e._component;
    !$e(a) && !a.render && !a.template && (a.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const i = r(n, !1, Mb(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), i;
  }, e;
};
function Mb(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Tb(t) {
  return Ke(t) ? document.querySelector(t) : t;
}
function Ab(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
const Te = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [o, n] of e)
    r[o] = n;
  return r;
}, Ib = { class: "icon" }, Nb = {
  __name: "PIcon",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(t) {
    return (e, r) => ($(), I("i", Ib, [
      ($(), de(Hn(t.icon)))
    ]));
  }
}, Hr = /* @__PURE__ */ Te(Nb, [["__scopeId", "data-v-aeca4267"]]);
function ec(t) {
  return ap() ? (og(t), !0) : !1;
}
function xo(t) {
  return typeof t == "function" ? t() : H(t);
}
const hf = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const zb = (t) => t != null, jb = Object.prototype.toString, Pb = (t) => jb.call(t) === "[object Object]", Mn = () => {
}, Rb = /* @__PURE__ */ Vb();
function Vb() {
  var t, e;
  return hf && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Lb(t) {
  return Co();
}
function Db(t, e = !0, r) {
  Lb() ? Qt(t, r) : e ? t() : Zt(t);
}
const Oo = hf ? window : void 0;
function Fo(t) {
  var e;
  const r = xo(t);
  return (e = r == null ? void 0 : r.$el) != null ? e : r;
}
function cr(...t) {
  let e, r, o, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([r, o, n] = t, e = Oo) : [e, r, o, n] = t, !e)
    return Mn;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const a = [], i = () => {
    a.forEach((d) => d()), a.length = 0;
  }, s = (d, u, p, f) => (d.addEventListener(u, p, f), () => d.removeEventListener(u, p, f)), l = Le(
    () => [Fo(e), xo(n)],
    ([d, u]) => {
      if (i(), !d)
        return;
      const p = Pb(u) ? { ...u } : u;
      a.push(
        ...r.flatMap((f) => o.map((h) => s(d, f, h, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), i();
  };
  return ec(c), c;
}
let $d = !1;
function Bb(t, e, r = {}) {
  const { window: o = Oo, ignore: n = [], capture: a = !0, detectIframe: i = !1 } = r;
  if (!o)
    return Mn;
  Rb && !$d && ($d = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", Mn)), o.document.documentElement.addEventListener("click", Mn));
  let s = !0;
  const l = (p) => xo(n).some((f) => {
    if (typeof f == "string")
      return Array.from(o.document.querySelectorAll(f)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Fo(f);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), c = (p) => {
    const f = Fo(t);
    if (!(!f || f === p.target || p.composedPath().includes(f))) {
      if (p.detail === 0 && (s = !l(p)), !s) {
        s = !0;
        return;
      }
      e(p);
    }
  };
  let d = !1;
  const u = [
    cr(o, "click", (p) => {
      d || (d = !0, setTimeout(() => {
        d = !1;
      }, 0), c(p));
    }, { passive: !0, capture: a }),
    cr(o, "pointerdown", (p) => {
      const f = Fo(t);
      s = !l(p) && !!(f && !p.composedPath().includes(f));
    }, { passive: !0 }),
    i && cr(o, "blur", (p) => {
      setTimeout(() => {
        var f;
        const h = Fo(t);
        ((f = o.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && e(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((p) => p());
}
function Fb() {
  const t = X(!1), e = Co();
  return e && Qt(() => {
    t.value = !0;
  }, e), t;
}
function mf(t) {
  const e = Fb();
  return W(() => (e.value, !!t()));
}
function Hb(t, e, r = {}) {
  const { window: o = Oo, ...n } = r;
  let a;
  const i = mf(() => o && "MutationObserver" in o), s = () => {
    a && (a.disconnect(), a = void 0);
  }, l = W(() => {
    const p = xo(t), f = (Array.isArray(p) ? p : [p]).map(Fo).filter(zb);
    return new Set(f);
  }), c = Le(
    () => l.value,
    (p) => {
      s(), i.value && p.size && (a = new MutationObserver(e), p.forEach((f) => a.observe(f, n)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => a == null ? void 0 : a.takeRecords(), u = () => {
    c(), s();
  };
  return ec(u), {
    isSupported: i,
    stop: u,
    takeRecords: d
  };
}
function qb(t = {}) {
  var e;
  const {
    window: r = Oo,
    deep: o = !0,
    triggerOnRemoval: n = !1
  } = t, a = (e = t.document) != null ? e : r == null ? void 0 : r.document, i = () => {
    var c;
    let d = a == null ? void 0 : a.activeElement;
    if (o)
      for (; d != null && d.shadowRoot; )
        d = (c = d == null ? void 0 : d.shadowRoot) == null ? void 0 : c.activeElement;
    return d;
  }, s = X(), l = () => {
    s.value = i();
  };
  return r && (cr(r, "blur", (c) => {
    c.relatedTarget === null && l();
  }, !0), cr(r, "focus", l, !0)), n && Hb(a, (c) => {
    c.filter((d) => d.removedNodes.length).map((d) => Array.from(d.removedNodes)).flat().forEach((d) => {
      d === s.value && l();
    });
  }, {
    childList: !0,
    subtree: !0
  }), l(), s;
}
function Wb(t, e = {}) {
  const { window: r = Oo } = e, o = mf(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let n;
  const a = X(!1), i = (c) => {
    a.value = c.matches;
  }, s = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", i) : n.removeListener(i));
  }, l = Xp(() => {
    o.value && (s(), n = r.matchMedia(xo(t)), "addEventListener" in n ? n.addEventListener("change", i) : n.addListener(i), a.value = n.matches);
  });
  return ec(() => {
    l(), s(), n = void 0;
  }), a;
}
const Ub = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function tc(t = {}) {
  const {
    reactive: e = !1,
    target: r = Oo,
    aliasMap: o = Ub,
    passive: n = !0,
    onEventFired: a = Mn
  } = t, i = lt(/* @__PURE__ */ new Set()), s = {
    toJSON() {
      return {};
    },
    current: i
  }, l = e ? lt(s) : s, c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  function u(m, g) {
    m in l && (e ? l[m] = g : l[m].value = g);
  }
  function p() {
    i.clear();
    for (const m of d)
      u(m, !1);
  }
  function f(m, g) {
    var b, y;
    const x = (b = m.key) == null ? void 0 : b.toLowerCase(), v = [(y = m.code) == null ? void 0 : y.toLowerCase(), x].filter(Boolean);
    x && (g ? i.add(x) : i.delete(x));
    for (const S of v)
      d.add(S), u(S, g);
    x === "meta" && !g ? (c.forEach((S) => {
      i.delete(S), u(S, !1);
    }), c.clear()) : typeof m.getModifierState == "function" && m.getModifierState("Meta") && g && [...i, ...v].forEach((S) => c.add(S));
  }
  cr(r, "keydown", (m) => (f(m, !0), a(m)), { passive: n }), cr(r, "keyup", (m) => (f(m, !1), a(m)), { passive: n }), cr("blur", p, { passive: !0 }), cr("focus", p, { passive: !0 });
  const h = new Proxy(
    l,
    {
      get(m, g, b) {
        if (typeof g != "string")
          return Reflect.get(m, g, b);
        if (g = g.toLowerCase(), g in o && (g = o[g]), !(g in l))
          if (/[+_-]/.test(g)) {
            const x = g.split(/[+_-]/g).map((v) => v.trim());
            l[g] = W(() => x.every((v) => xo(h[v])));
          } else
            l[g] = X(!1);
        const y = Reflect.get(m, g, b);
        return e ? xo(y) : y;
      }
    }
  );
  return h;
}
function Kb(t = {}) {
  const {
    window: e = Oo,
    initialWidth: r = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: a = !0,
    type: i = "inner"
  } = t, s = X(r), l = X(o), c = () => {
    e && (i === "outer" ? (s.value = e.outerWidth, l.value = e.outerHeight) : a ? (s.value = e.innerWidth, l.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, l.value = e.document.documentElement.clientHeight));
  };
  if (c(), Db(c), cr("resize", c, { passive: !0 }), n) {
    const d = Wb("(orientation: portrait)");
    Le(d, () => c());
  }
  return { width: s, height: l };
}
const Jb = { class: "mini-icon" }, Yb = {
  __name: "PIconMini",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(t) {
    return (e, r) => ($(), I("i", Jb, [
      ($(), de(Hn(t.icon)))
    ]));
  }
}, Ho = /* @__PURE__ */ Te(Yb, [["__scopeId", "data-v-17d3891e"]]), { width: qt, height: Xb } = Kb();
function Gb() {
  return {
    /** < 640px */
    isXs: W(() => qt.value < 640),
    /** 640px - 768px */
    isSm: W(() => qt.value >= 640 && qt.value < 768),
    /** 768px - 1024px */
    isMd: W(() => qt.value >= 768 && qt.value < 1024),
    /** 1024px - 1280px */
    isLg: W(() => qt.value >= 1024 && qt.value <= 1280),
    /** 1280px - 1536px */
    isXl: W(() => qt.value > 1280 && qt.value <= 1536),
    /** > 1536px */
    is2Xl: W(() => qt.value > 1536),
    width: W(() => qt.value),
    height: W(() => Xb.value)
  };
}
const Zb = {
  key: 0,
  class: "hotkey"
}, Qb = {
  __name: "PHotkey",
  props: {
    hotkey: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const { isXs: e, isSm: r, isMd: o } = Gb();
    return (n, a) => !H(e) && !H(r) && !H(o) ? ($(), I("div", Zb, te(t.hotkey), 1)) : Q("", !0);
  }
}, rc = /* @__PURE__ */ Te(Qb, [["__scopeId", "data-v-37295413"]]), e0 = {
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
    /** Shortcut,  */
    hotkey: {
      type: Object,
      default: () => ({
        key: "",
        callback: () => {
        }
      })
    }
  },
  setup(t) {
    const e = t, r = ov(), o = tc()[e.hotkey.key];
    return Le(o, (n) => {
      var a;
      n && (a = e.hotkey) != null && a.key && e.hotkey.callback();
    }), (n, a) => ($(), I("button", {
      class: Ne(["button", [t.variant, t.size, H(r).default ? "" : "has-icon"]])
    }, [
      t.icon ? ($(), de(Ho, {
        key: 0,
        icon: t.icon
      }, null, 8, ["icon"])) : Q("", !0),
      Ee(n.$slots, "default", {}, void 0, !0),
      t.hotkey.key ? ($(), de(rc, {
        key: 1,
        hotkey: t.hotkey.label
      }, null, 8, ["hotkey"])) : Q("", !0)
    ], 2));
  }
}, Ct = /* @__PURE__ */ Te(e0, [["__scopeId", "data-v-0b882800"]]);
function oc(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
const t0 = { class: "micro-icon" }, r0 = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(t) {
    return (e, r) => ($(), I("i", t0, [
      ($(), de(Hn(t.icon)))
    ]));
  }
}, gf = /* @__PURE__ */ Te(r0, [["__scopeId", "data-v-b4a331ed"]]), o0 = {
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
    const r = t, o = e, n = X(null), a = X(!1);
    function i(c) {
      a.value || (o("set:activator", c), a.value = !0);
    }
    function s(c) {
      i(c.currentTarget), o(r.modelValue ? "close" : "open");
    }
    function l(c) {
      i(c.currentTarget);
    }
    return Le(
      () => r.modelValue,
      (c) => {
        var d;
        c ? requestAnimationFrame(() => {
          n.value = Bb(
            r.floatingContainerEl,
            () => {
              r.modelValue && o("close");
            },
            { ignore: [r.activatorEl] }
          );
        }) : ((d = n.value) == null || d.call(n), n.value = null);
      }
    ), (c, d) => Ee(c.$slots, "default", {
      slotProps: { onClick: s, onFocus: l }
    });
  }
}, n0 = {
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
    const r = t, o = e;
    function n(s) {
      o("set:activator", s.currentTarget), o("open");
    }
    function a() {
      r.modelValue || o("open");
    }
    function i() {
      r.modelValue || o("open");
    }
    return Le(
      () => r.isFocused,
      (s) => {
        s || o("close");
      }
    ), (s, l) => Ee(s.$slots, "default", {
      slotProps: { onFocus: n, onInput: a, onClick: i }
    });
  }
}, a0 = {
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
    const r = t, o = e, n = X(!1), a = X(!1), i = X(!1), s = X(null);
    function l() {
      i.value = !0;
    }
    function c() {
      i.value = !1, d();
    }
    function d() {
      n.value || (a.value = !1, clearTimeout(s.value), s.value = setTimeout(() => {
        var h, m;
        a.value || i.value || ((h = r.floatingContainerEl) == null || h.removeEventListener("mouseover", l), (m = r.floatingContainerEl) == null || m.removeEventListener("mouseleave", c), o("close"));
      }, 200));
    }
    function u(h) {
      clearTimeout(s.value), a.value = !0, !r.modelValue && (s.value = setTimeout(() => {
        o("set:activator", h.currentTarget), o("open"), Zt(() => {
          r.floatingContainerEl.addEventListener("mouseover", l), r.floatingContainerEl.addEventListener("mouseleave", c);
        });
      }, r.delay));
    }
    function p(h) {
      h.target.matches(":focus-visible") && (n.value = !0, o("set:activator", h.currentTarget), o("open"));
    }
    function f() {
      n.value = !1, o("close");
    }
    return Le(
      () => r.modelValue,
      () => {
        r.modelValue || (n.value = !1);
      }
    ), (h, m) => Ee(h.$slots, "default", {
      slotProps: { onMouseover: u, onMouseleave: d, onFocus: p, onBlur: f }
    });
  }
}, i0 = {
  __name: "_ManualBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(t, { emit: e }) {
    const r = t, o = e;
    function n(l) {
      o("set:activator", l);
    }
    function a() {
      o("open");
    }
    function i() {
      o("close");
    }
    function s() {
      if (r.modelValue) {
        i();
        return;
      }
      a();
    }
    return (l, c) => Ee(l.$slots, "default", {
      slotProps: { setActivator: n, toggle: s }
    });
  }
}, s0 = {};
function l0(t, e) {
  return $(), de(Jn, { name: "NO_TRANSITION" }, {
    default: ve(() => [
      Ee(t.$slots, "default")
    ]),
    _: 3
  });
}
const Sd = /* @__PURE__ */ Te(s0, [["render", l0]]), c0 = {};
function d0(t, e) {
  return $(), de(Jn, null, {
    default: ve(() => [
      Ee(t.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const u0 = /* @__PURE__ */ Te(c0, [["render", d0], ["__scopeId", "data-v-ed45de91"]]), p0 = {
  __name: "_ExpandTransition",
  props: {
    placement: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const e = t, r = W(() => {
      switch (e.placement) {
        case "top":
          return "translate-y-1/2 scale-y-0 opacity-0";
        case "bottom":
          return "-translate-y-1/2 scale-y-0 opacity-0";
        case "left":
          return "translate-x-1/2 scale-x-0 opacity-0";
        case "right":
          return "-translate-x-1/2 scale-x-0 opacity-0";
        default:
          return "-translate-y-1/2 scale-y-0 opacity-0";
      }
    }), o = W(() => {
      switch (e.placement) {
        case "top":
        case "bottom":
          return "translate-y-0 scale-y-100 opacity-100";
        case "left":
        case "right":
          return "translate-x-0 scale-x-100 opacity-100";
        default:
          return "translate-y-0 scale-y-100 opacity-100";
      }
    }), n = W(() => {
      switch (e.placement) {
        case "top":
          return "translate-y-100 scale-y-100 opacity-100";
        case "bottom":
          return "-translate-y-100 scale-y-100 opacity-100";
        case "left":
          return "-translate-x-100 scale-x-100 opacity-100";
        case "right":
          return "translate-x-100 scale-x-100 opacity-100";
        default:
          return "translate-y-0 scale-y-100 opacity-100";
      }
    }), a = W(() => {
      switch (e.placement) {
        case "top":
          return "translate-y-1/2 scale-y-0 opacity-0";
        case "bottom":
          return "-translate-y-1/2 scale-y-0 opacity-0";
        case "left":
          return "translate-x-1/2 scale-x-0 opacity-0";
        case "right":
          return "-translate-x-1/2 scale-x-0 opacity-0";
        default:
          return "-translate-y-1/2 scale-y-0 opacity-0";
      }
    });
    return (i, s) => ($(), de(Jn, {
      "enter-active-class": "transform-gpu transition duration-150",
      "enter-from-class": r.value,
      "enter-to-class": o.value,
      "leave-active-class": "transform-gpu transition duration-150",
      "leave-from-class": n.value,
      "leave-to-class": a.value
    }, {
      default: ve(() => [
        Ee(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-from-class", "enter-to-class", "leave-from-class", "leave-to-class"]));
  }
}, f0 = {
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
    return r("open"), da(() => {
      r("close");
    }), (o, n) => Ee(o.$slots, "default");
  }
}, h0 = {
  top: ["bottom", "right", "left"],
  right: ["left", "top", "bottom"],
  left: ["right", "top", "bottom"],
  bottom: ["top", "right", "left"]
}, _d = {
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
async function m0(t, e, r, o, n, a) {
  await Zt();
  const { offsetWidth: i, offsetHeight: s } = t;
  let l = e;
  n && (l = n instanceof HTMLElement ? n : document.querySelector(n));
  const c = l.getBoundingClientRect(), d = o ? i : Math.max(c.width, i);
  function u(q) {
    switch (q) {
      case "left":
        return c.left;
      case "right":
        return c.left + l.offsetWidth - i;
      default:
        return c.left + (l.offsetWidth - d) / 2;
    }
  }
  function p(q) {
    let B = window.scrollY + c.top;
    switch (q) {
      case "top":
        break;
      case "bottom":
        B -= s - l.offsetHeight;
        break;
      default:
        s > l.offsetHeight ? B -= (s - l.offsetHeight) / 2 : B += (l.offsetHeight - s) / 2;
    }
    return B;
  }
  function f(q) {
    const B = window.scrollY + c.top + l.offsetHeight + a, _ = u(q);
    return { top: B, left: _ };
  }
  function h(q) {
    const B = window.scrollY + c.top - s - a, _ = u(q);
    return { top: B, left: _ };
  }
  function m(q) {
    const B = p(q), _ = c.left + l.offsetWidth + a;
    return { top: B, left: _ };
  }
  function g(q) {
    const B = p(q), _ = c.left - d - a;
    return { top: B, left: _ };
  }
  function b(q, B) {
    let _;
    switch (q) {
      case "top":
        _ = h(B);
        break;
      case "right":
        _ = m(B);
        break;
      case "left":
        _ = g(B);
        break;
      default:
        _ = f(B);
        break;
    }
    return _;
  }
  const [y, x] = r.replaceAll(" ", "").split(",");
  let v = b(y, x || "center");
  function S(q, B) {
    const { scrollTop: _ } = document.documentElement, { scrollLeft: E } = document.documentElement;
    return q >= _ && B >= E && B + d <= E + (window.innerWidth || document.documentElement.clientWidth) && q + s <= _ + (window.innerHeight || document.documentElement.clientHeight);
  }
  let M = S(v.top, v.left);
  if (M)
    return { placement: y, alignment: x, ...v };
  for (const q of _d[y][x || "center"])
    if (v = b(y, q), M = S(v.top, v.left), M)
      return { placement: y, alignment: x, ...v };
  for (const q of h0[y]) {
    if (v = b(q, x || "center"), M = S(v.top, v.left), M)
      return { placement: q, alignment: x, ...v };
    for (const B of _d[q][x || "center"])
      if (v = b(q, B), M = S(v.top, v.left), M)
        return { placement: q, alignment: x, ...v };
  }
  return v = b(y, x), { placement: y, alignment: x, ...v };
}
function g0(t, e, r, o, n) {
  return {
    calculatePosition: (a) => m0(a, t, e, r, o, n)
  };
}
const v0 = {
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
    /** Class definitions for floating menu content element (only works with Tailwind classes) */
    class: {
      type: [String, Array, Object],
      default: null
    },
    /** Name of the transition */
    transition: {
      type: String,
      default: "fade"
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:isOpen", "update:focus", "update:location"],
  setup(t, { expose: e, emit: r }) {
    const o = t, n = r, a = qb(), i = X(!1), s = X(!1), l = X(!1), c = X(null), d = X(null), u = X(null), p = X(""), f = X(""), h = W(() => {
      var E, U;
      return a.value === d.value || a.value === u.value || ((E = d.value) == null ? void 0 : E.contains(a.value)) || ((U = u.value) == null ? void 0 : U.contains(a.value)) || !1;
    }), m = W(() => {
      switch (o.behavior) {
        case "focus":
          return { component: n0, props: { isFocused: h.value } };
        case "hover":
          return {
            component: a0,
            props: { floatingContainerEl: u.value, delay: o.delay }
          };
        case "manual":
          return { component: i0 };
        case "static":
          return { component: f0 };
        default:
          return {
            component: o0,
            props: {
              floatingContainerEl: u.value,
              activatorEl: d.value
            }
          };
      }
    });
    function g(E, U = !1) {
      const z = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((Z) => `${Z}${U ? "" : ':not([tabindex="-1"])'}:not([disabled])`).join(", ");
      return [...E.querySelectorAll(z)];
    }
    function b(E) {
      d.value = E;
    }
    async function y() {
      const E = await c.value.calculatePosition(u.value);
      if (p.value = E.placement, f.value = E.alignment, u.value.style.top = `${E.top}px`, u.value.style.left = `${E.left}px`, ["top", "bottom"].includes(p.value) && !o.fitContent) {
        let U = d.value;
        o.attach && (U = o.attach instanceof HTMLElement ? o.attach : document.querySelector(o.attach));
        const z = U.getBoundingClientRect();
        u.value.style.minWidth = `${z.width}px`;
      }
    }
    function x() {
      i.value || (l.value = !1, s.value = !0, i.value = !0, Zt(async () => {
        u.value.showPopover(), c.value = g0(
          d.value,
          o.location,
          o.fitContent,
          o.attach,
          o.offset
        );
        const E = await c.value.calculatePosition(u.value);
        p.value = E.placement, s.value = !1, l.value = !0, requestAnimationFrame(() => {
          if (["top", "bottom"].includes(p.value) && !o.fitContent) {
            let U = d.value;
            o.attach && (U = o.attach instanceof HTMLElement ? o.attach : document.querySelector(o.attach));
            const z = U.getBoundingClientRect();
            u.value.style.minWidth = `${z.width}px`;
          }
          u.value.style.top = `${E.top}px`, u.value.style.left = `${E.left}px`, u.value.showPopover(), window.addEventListener("scroll", y, !0), window.addEventListener("resize", y), s.value = !0, n("update:isOpen", !0);
        });
      }));
    }
    function v() {
      i.value && (window.removeEventListener("scroll", y, !0), window.removeEventListener("resize", y), s.value = !1);
    }
    function S() {
      i.value = !1, n("update:isOpen", !1);
    }
    function M() {
      var E;
      o.closeOnClick && i.value && ((E = d.value) == null || E.focus(), v());
    }
    function q(E) {
      if (E.key === "Tab") {
        const U = g(u.value, !0), z = U.indexOf(document.activeElement), Z = E.shiftKey ? z - 1 : z + 1;
        U[Z] ? (E.preventDefault(), U[Z].focus()) : (E.preventDefault(), Z <= 0 && d.value.focus());
      } else E.key === "Escape" ? (d.value.focus(), v()) : E.key === "Enter" && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), o.closeOnClick && (d.value.focus(), v()));
    }
    async function B(E) {
      var U, z;
      if (E.key === "Escape") {
        v();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(E.key))
        return;
      u.value || (x(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const Z = g(u.value);
      if (Z.length === 0)
        return;
      E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation();
      const ge = Z.indexOf(document.activeElement);
      ge === -1 ? g(u.value)[0].focus() : E.key === "ArrowDown" ? (U = Z[ge + 1]) == null || U.focus() : E.key === "ArrowUp" && ((z = Z[ge - 1]) == null || z.focus());
    }
    Le(
      () => h.value,
      () => {
        n("update:focus", h.value);
      }
    ), Le(p, () => {
      n("update:location", `${p.value},${f.value}`);
    });
    const _ = W(() => {
      if (!l.value)
        return Sd;
      switch (o.transition) {
        case "fade":
          return u0;
        case "expand":
          return p0;
        default:
          return Sd;
      }
    });
    return e({
      close: v
    }), (E, U) => ($(), I(De, null, [
      m.value ? ($(), de(Hn(m.value.component), Je({ key: 0 }, m.value.props, {
        "model-value": i.value,
        onOpen: x,
        onClose: v,
        "onSet:activator": b
      }), {
        default: ve(({ slotProps: z }) => [
          Ee(E.$slots, "activator", Zo(Xl({
            ...z,
            onKeydown: B
          })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : Q("", !0),
      i.value ? ($(), de(Hn(_.value), {
        key: 1,
        placement: p.value,
        onAfterLeave: S
      }, {
        default: ve(() => [
          yo(J("div", {
            ref: (z) => u.value = z,
            class: Ne(["floating-container-content", o.class]),
            "data-testid": "menu",
            popover: "manual",
            onKeydown: q,
            onClick: M
          }, [
            Ee(E.$slots, "default", {}, void 0, !0)
          ], 34), [
            [Zl, s.value]
          ])
        ]),
        _: 3
      }, 40, ["placement"])) : Q("", !0)
    ], 64));
  }
}, b0 = /* @__PURE__ */ Te(v0, [["__scopeId", "data-v-bd654d59"]]), w0 = {
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
  "confirm-modal.confirm": "Bevestigen",
  "confirm-modal.confirm_message": "Deze actie kan niet ongedaan gemaakt worden.",
  "confirm-modal.delete": "Verwijderen",
  "confirm-modal.cancel": "Annuleren",
  "filter.apply": "Filter toepassen",
  "filter.select_all": "Selecteer alles",
  "filter.to": "Tot",
  "filter.today": "Vandaag",
  "filter.tomorrow": "Morgen",
  "filter.overmorrow": "Overmorgen",
  "filter.coming_week": "Komende week",
  "filter.filters": "Filter",
  "filter.clear": "Wis alle filters",
  "column-configuration.columns": "Kolommen",
  "column-configuration.active_columns": "Actieve kolommen",
  "column-configuration.available_columns": "Beschikbare kolommen",
  "column-configuration.no_columns_available": "Geen kolommen beschikbaar",
  "data-table.no_results": "Geen resultaten",
  "data-table.no_results_available": "Er zijn geen gegevens beschikbaar.",
  "data-table.no_results_found": "We konden niets vinden. Pas je zoekopdracht aan en probeer het nog eens.",
  "data-table.results": "resultaten",
  "data-table.per_page": "per pagina",
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
  "password.invalid": "Wachtwoord is ongeldig",
  "password.required": "Er is geen wachtwoord ingevuld.",
  "pagination.previous": "Vorige",
  "pagination.next": "Volgende",
  "modal.close": "Sluiten",
  "modal.minimize": "Minimaliseren",
  "modal.open": "Openen",
  "toast.confirm": "Bevestigen",
  "toast.dismiss": "Annuleren"
}, y0 = {
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
  "confirm-modal.confirm": "Confirm",
  "confirm-modal.confirm_message": "This action can not be undone.",
  "confirm-modal.delete": "Delete",
  "confirm-modal.cancel": "Cancel",
  "filter.apply": "Apply filter",
  "filter.select_all": "Select all",
  "filter.to": "To",
  "filter.today": "Today",
  "filter.tomorrow": "Tommorrow",
  "filter.overmorrow": "Day after tomorrow",
  "filter.coming_week": "Coming week",
  "filter.filters": "Filter",
  "filter.clear": "Clear all filters",
  "column-configuration.columns": "Columns",
  "column-configuration.active_columns": "Active columns",
  "column-configuration.available_columns": "Available columns",
  "column-configuration.no_columns_available": "No columns available",
  "data-table.no_results": "No results",
  "data-table.no_results_available": "No data available.",
  "data-table.no_results_found": "We couldn't find anything. Please adjust your search and try again.",
  "data-table.to": "to",
  "data-table.of": "of",
  "data-table.results": "results",
  "data-table.per_page": "per page",
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
  "password.invalid": "Password is invalid",
  "password.required": "No password has been entered.",
  "pagination.previous": "Previous",
  "pagination.next": "Next",
  "modal.close": "Close",
  "modal.minimize": "Minimize",
  "modal.open": "Open",
  "toast.confirm": "Confirm",
  "toast.dismiss": "Dismiss"
}, x0 = {
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
  "confirm-modal.confirm": "Bestätigen",
  "confirm-modal.confirm_message": "Diese Aktion kann nicht ruiniert werden.",
  "confirm-modal.delete": "Löschen",
  "confirm-modal.cancel": "Abbrechen",
  "filter.apply": "Filter anwenden",
  "filter.select_all": "Alles auswählen",
  "filter.to": "Bis",
  "filter.today": "Heute",
  "filter.tomorrow": "Morgen",
  "filter.overmorrow": "Übermorgen",
  "filter.coming_week": "Kommende Woche",
  "filter.filters": "Filter",
  "filter.clear": "Alle Filter löschen",
  "column-configuration.columns": "Spalten",
  "column-configuration.active_columns": "Aktive Spalten",
  "column-configuration.available_columns": "Verfügbare Spalten",
  "column-configuration.no_columns_available": "Keine Spalten verfügbar",
  "data-table.no_results": "Keine Ergebnisse",
  "data-table.no_results_available": "Keine Daten verfügbar.",
  "data-table.no_results_found": "Wir konnten nichts finden. Bitte passen Sie Ihre Suche an und versuchen Sie es erneut.",
  "data-table.results": "Ergebnissen",
  "data-table.per_page": "pro Seite",
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
  "password.invalid": "Passwort ist ungültig",
  "password.required": "Es wurde kein Passwort eingegeben.",
  "pagination.previous": "Vorherige",
  "pagination.next": "Weiter",
  "modal.close": "Schließen",
  "modal.minimize": "Minimalisieren",
  "modal.open": "Öffnen",
  "toast.confirm": "Bestätigen",
  "toast.dismiss": "Abbrechen"
}, ol = { nl: w0, en: y0, de: x0 };
function k0() {
  return document.documentElement.lang || "nl";
}
const vf = lt({
  language: k0()
});
function bf(t, e = {}) {
  return t.replace(/{(\w+)}/g, (r, o) => e[o] || `{${o}}`);
}
function wf(t) {
  const [e] = t.split("."), r = t.substring(t.indexOf(".") + 1);
  return ol[vf.language][`${e}.${r}`] || t;
}
function $0(t, e) {
  return t.replace(/{(\d+)}/g, (r, o) => e[o] || `{${o}}`);
}
function S0(t, e, r = {}) {
  const o = t.split("|").map((a) => a.trim());
  let n;
  return o.length === 1 ? [n] = o : o.length === 2 ? e === 1 ? [n] = o : [, n] = o : e === 0 ? [n] = o : e === 1 ? [, n] = o : n = o[Math.min(e, o.length - 1)], bf(n, { ...r, count: e, n: e });
}
function nl(t) {
  if (t) {
    if (!Object.keys(ol).includes(t)) {
      console.error(
        `Language "${t}" is not supported, supported languages are: ${Object.keys(ol).join(", ")}`
      );
      return;
    }
    vf.language = t;
  }
}
function Oe(t, e = null) {
  const r = wf(t);
  return Array.isArray(e) ? $0(r) : bf(r, e);
}
function _0(t, e, r = null) {
  return S0(wf(t), e, r);
}
function C0() {
  nl(document.documentElement.lang);
  const t = new MutationObserver((e) => {
    var r;
    ((r = e[0]) == null ? void 0 : r.attributeName) === "lang" && nl(document.documentElement.lang);
  });
  t.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", () => {
    t.disconnect();
  });
}
C0();
function O0(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
const E0 = ["id", "aria-controls", "disabled"], M0 = { class: "title" }, T0 = ["id", "aria-hidden"], A0 = {
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
    const r = t, o = e, n = X(null);
    return Le(
      () => r.modelValue,
      (a) => {
        a && r.scrollIntoView && setTimeout(() => n.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (a, i) => ($(), I("div", {
      class: Ne(["accordion-item", { disabled: t.disabled }])
    }, [
      J("button", {
        id: "accordion-header-" + t.ariaTitle,
        ref_key: "accordionHeader",
        ref: n,
        class: "header",
        "data-testid": "accordion-trigger",
        "aria-controls": "accordion-content-" + t.ariaTitle,
        disabled: t.disabled,
        onClick: i[0] || (i[0] = (s) => o("update:modelValue", !t.modelValue))
      }, [
        Ee(a.$slots, "header", {}, () => [
          J("h3", M0, te(t.title), 1)
        ]),
        t.hideToggle ? Q("", !0) : ($(), I("div", {
          key: 0,
          class: Ne(["state-indicator", { open: t.modelValue }])
        }, [
          fe(Hr, {
            part: "state-indicator-icon",
            icon: H(O0)
          }, null, 8, ["icon"])
        ], 2))
      ], 8, E0),
      fe(Jn, { name: "grow" }, {
        default: ve(() => [
          yo(J("div", {
            id: "accordion-content-" + t.ariaTitle,
            "aria-hidden": !t.modelValue,
            class: "content"
          }, [
            fe(Jn, { name: "fade" }, {
              default: ve(() => [
                t.modelValue ? Ee(a.$slots, "default", { key: 0 }) : Q("", !0)
              ]),
              _: 3
            })
          ], 8, T0), [
            [Zl, t.modelValue]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}, nc = /* @__PURE__ */ Te(A0, [["__scopeId", "data-v-dae8d08d"]]), I0 = {
  class: "accordion",
  "data-testid": "accordion"
}, N0 = {
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
    const r = t, o = e, n = W(() => [...r.modelValue]);
    function a(i, s) {
      r.multiple ? (n.value[s] = i, o("update:modelValue", n.value)) : (n.value.forEach((l, c) => {
        c !== s && (n.value[c] = !1);
      }), o("update:modelValue", n.value));
    }
    return (i, s) => ($(), I("div", I0, [
      ($(!0), I(De, null, Dr(t.items, (l, c) => Ee(i.$slots, "default", Je({
        key: c,
        ref_for: !0
      }, { item: l, index: c, open: n.value[c] }), () => [
        fe(nc, {
          modelValue: n.value[c],
          "onUpdate:modelValue": [(d) => n.value[c] = d, (d) => a(d, c)],
          title: l[t.title],
          "aria-title": l.ariaTitle,
          disabled: t.disabled || l.disabled,
          "hide-toggle": t.disabled,
          "scroll-into-view": t.scrollIntoView
        }, {
          default: ve(() => [
            Ee(i.$slots, "content", Je({ ref_for: !0 }, l), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "aria-title", "disabled", "hide-toggle", "scroll-into-view"])
      ], !0)), 128))
    ]));
  }
}, z0 = /* @__PURE__ */ Te(N0, [["__scopeId", "data-v-83cfa0c5"]]);
function Cd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function Nr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Cd(Object(r), !0).forEach(function(o) {
      j0(t, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Cd(Object(r)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return t;
}
function j0(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Od(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(t).reduce((r, o) => (e.includes(o) || (r[o] = H(t[o])), r), {});
}
function ii(t) {
  return typeof t == "function";
}
function P0(t) {
  return uo(t) || Lr(t);
}
function yf(t, e, r) {
  let o = t;
  const n = e.split(".");
  for (let a = 0; a < n.length; a++) {
    if (!o[n[a]]) return r;
    o = o[n[a]];
  }
  return o;
}
function vs(t, e, r) {
  return W(() => t.some((o) => yf(e, o, {
    [r]: !1
  })[r]));
}
function Ed(t, e, r) {
  return W(() => t.reduce((o, n) => {
    const a = yf(e, n, {
      [r]: !1
    })[r] || [];
    return o.concat(a);
  }, []));
}
function xf(t, e, r, o) {
  return t.call(o, H(e), H(r), o);
}
function kf(t) {
  return t.$valid !== void 0 ? !t.$valid : !t;
}
function R0(t, e, r, o, n, a, i) {
  let {
    $lazy: s,
    $rewardEarly: l
  } = n, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], d = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, p = arguments.length > 10 ? arguments[10] : void 0;
  const f = X(!!o.value), h = X(0);
  r.value = !1;
  const m = Le([e, o].concat(c, p), () => {
    if (s && !o.value || l && !u.value && !r.value)
      return;
    let g;
    try {
      g = xf(t, e, d, i);
    } catch (b) {
      g = Promise.reject(b);
    }
    h.value++, r.value = !!h.value, f.value = !1, Promise.resolve(g).then((b) => {
      h.value--, r.value = !!h.value, a.value = b, f.value = kf(b);
    }).catch((b) => {
      h.value--, r.value = !!h.value, a.value = b, f.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof e == "object"
  });
  return {
    $invalid: f,
    $unwatch: m
  };
}
function V0(t, e, r, o, n, a, i, s) {
  let {
    $lazy: l,
    $rewardEarly: c
  } = o;
  const d = () => ({}), u = W(() => {
    if (l && !r.value || c && !s.value)
      return !1;
    let p = !0;
    try {
      const f = xf(t, e, i, a);
      n.value = f, p = kf(f);
    } catch (f) {
      n.value = f;
    }
    return p;
  });
  return {
    $unwatch: d,
    $invalid: u
  };
}
function L0(t, e, r, o, n, a, i, s, l, c, d) {
  const u = X(!1), p = t.$params || {}, f = X(null);
  let h, m;
  t.$async ? {
    $invalid: h,
    $unwatch: m
  } = R0(t.$validator, e, u, r, o, f, n, t.$watchTargets, l, c, d) : {
    $invalid: h,
    $unwatch: m
  } = V0(t.$validator, e, r, o, f, n, l, c);
  const g = t.$message;
  return {
    $message: ii(g) ? W(() => g(Od({
      $pending: u,
      $invalid: h,
      $params: Od(p),
      $model: e,
      $response: f,
      $validator: a,
      $propertyPath: s,
      $property: i
    }))) : g || "",
    $params: p,
    $pending: u,
    $invalid: h,
    $response: f,
    $unwatch: m
  };
}
function D0() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const e = H(t), r = Object.keys(e), o = {}, n = {}, a = {};
  let i = null;
  return r.forEach((s) => {
    const l = e[s];
    switch (!0) {
      case ii(l.$validator):
        o[s] = l;
        break;
      case ii(l):
        o[s] = {
          $validator: l
        };
        break;
      case s === "$validationGroups":
        i = l;
        break;
      case s.startsWith("$"):
        a[s] = l;
        break;
      default:
        n[s] = l;
    }
  }), {
    rules: o,
    nestedValidators: n,
    config: a,
    validationGroups: i
  };
}
const B0 = "__root";
function F0(t, e, r, o, n, a, i, s, l) {
  const c = Object.keys(t), d = o.get(n, t), u = X(!1), p = X(!1), f = X(0);
  if (d) {
    if (!d.$partial) return d;
    d.$unwatch(), u.value = d.$dirty.value;
  }
  const h = {
    $dirty: u,
    $path: n,
    $touch: () => {
      u.value || (u.value = !0);
    },
    $reset: () => {
      u.value && (u.value = !1);
    },
    $commit: () => {
    }
  };
  return c.length ? (c.forEach((m) => {
    h[m] = L0(t[m], e, h.$dirty, a, i, m, r, n, l, p, f);
  }), h.$externalResults = W(() => s.value ? [].concat(s.value).map((m, g) => ({
    $propertyPath: n,
    $property: r,
    $validator: "$externalResults",
    $uid: `${n}-externalResult-${g}`,
    $message: m,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), h.$invalid = W(() => {
    const m = c.some((g) => H(h[g].$invalid));
    return p.value = m, !!h.$externalResults.value.length || m;
  }), h.$pending = W(() => c.some((m) => H(h[m].$pending))), h.$error = W(() => h.$dirty.value ? h.$pending.value || h.$invalid.value : !1), h.$silentErrors = W(() => c.filter((m) => H(h[m].$invalid)).map((m) => {
    const g = h[m];
    return lt({
      $propertyPath: n,
      $property: r,
      $validator: m,
      $uid: `${n}-${m}`,
      $message: g.$message,
      $params: g.$params,
      $response: g.$response,
      $pending: g.$pending
    });
  }).concat(h.$externalResults.value)), h.$errors = W(() => h.$dirty.value ? h.$silentErrors.value : []), h.$unwatch = () => c.forEach((m) => {
    h[m].$unwatch();
  }), h.$commit = () => {
    p.value = !0, f.value = Date.now();
  }, o.set(n, t, h), h) : (d && o.set(n, t, h), h);
}
function H0(t, e, r, o, n, a, i) {
  const s = Object.keys(t);
  return s.length ? s.reduce((l, c) => (l[c] = al({
    validations: t[c],
    state: e,
    key: c,
    parentKey: r,
    resultsCache: o,
    globalConfig: n,
    instance: a,
    externalResults: i
  }), l), {}) : {};
}
function q0(t, e, r) {
  const o = W(() => [e, r].filter((h) => h).reduce((h, m) => h.concat(Object.values(H(m))), [])), n = W({
    get() {
      return t.$dirty.value || (o.value.length ? o.value.every((h) => h.$dirty) : !1);
    },
    set(h) {
      t.$dirty.value = h;
    }
  }), a = W(() => {
    const h = H(t.$silentErrors) || [], m = o.value.filter((g) => (H(g).$silentErrors || []).length).reduce((g, b) => g.concat(...b.$silentErrors), []);
    return h.concat(m);
  }), i = W(() => {
    const h = H(t.$errors) || [], m = o.value.filter((g) => (H(g).$errors || []).length).reduce((g, b) => g.concat(...b.$errors), []);
    return h.concat(m);
  }), s = W(() => o.value.some((h) => h.$invalid) || H(t.$invalid) || !1), l = W(() => o.value.some((h) => H(h.$pending)) || H(t.$pending) || !1), c = W(() => o.value.some((h) => h.$dirty) || o.value.some((h) => h.$anyDirty) || n.value), d = W(() => n.value ? l.value || s.value : !1), u = () => {
    t.$touch(), o.value.forEach((h) => {
      h.$touch();
    });
  }, p = () => {
    t.$commit(), o.value.forEach((h) => {
      h.$commit();
    });
  }, f = () => {
    t.$reset(), o.value.forEach((h) => {
      h.$reset();
    });
  };
  return o.value.length && o.value.every((h) => h.$dirty) && u(), {
    $dirty: n,
    $errors: i,
    $invalid: s,
    $anyDirty: c,
    $error: d,
    $pending: l,
    $touch: u,
    $reset: f,
    $silentErrors: a,
    $commit: p
  };
}
function al(t) {
  let {
    validations: e,
    state: r,
    key: o,
    parentKey: n,
    childResults: a,
    resultsCache: i,
    globalConfig: s = {},
    instance: l,
    externalResults: c
  } = t;
  const d = n ? `${n}.${o}` : o, {
    rules: u,
    nestedValidators: p,
    config: f,
    validationGroups: h
  } = D0(e), m = Nr(Nr({}, s), f), g = o ? W(() => {
    const re = H(r);
    return re ? H(re[o]) : void 0;
  }) : r, b = Nr({}, H(c) || {}), y = W(() => {
    const re = H(c);
    return o ? re ? H(re[o]) : void 0 : re;
  }), x = F0(u, g, o, i, d, m, l, y, r), v = H0(p, g, d, i, m, l, y), S = {};
  h && Object.entries(h).forEach((re) => {
    let [we, j] = re;
    S[we] = {
      $invalid: vs(j, v, "$invalid"),
      $error: vs(j, v, "$error"),
      $pending: vs(j, v, "$pending"),
      $errors: Ed(j, v, "$errors"),
      $silentErrors: Ed(j, v, "$silentErrors")
    };
  });
  const {
    $dirty: M,
    $errors: q,
    $invalid: B,
    $anyDirty: _,
    $error: E,
    $pending: U,
    $touch: z,
    $reset: Z,
    $silentErrors: ge,
    $commit: _e
  } = q0(x, v, a), ye = o ? W({
    get: () => H(g),
    set: (re) => {
      M.value = !0;
      const we = H(r), j = H(c);
      j && (j[o] = b[o]), Ge(we[o]) ? we[o].value = re : we[o] = re;
    }
  }) : null;
  o && m.$autoDirty && Le(g, () => {
    M.value || z();
    const re = H(c);
    re && (re[o] = b[o]);
  }, {
    flush: "sync"
  });
  async function C() {
    return z(), m.$rewardEarly && (_e(), await Zt()), await Zt(), new Promise((re) => {
      if (!U.value) return re(!B.value);
      const we = Le(U, () => {
        re(!B.value), we();
      });
    });
  }
  function R(re) {
    return (a.value || {})[re];
  }
  function se() {
    Ge(c) ? c.value = b : Object.keys(b).length === 0 ? Object.keys(c).forEach((re) => {
      delete c[re];
    }) : Object.assign(c, b);
  }
  return lt(Nr(Nr(Nr({}, x), {}, {
    $model: ye,
    $dirty: M,
    $error: E,
    $errors: q,
    $invalid: B,
    $anyDirty: _,
    $pending: U,
    $touch: z,
    $reset: Z,
    $path: d || B0,
    $silentErrors: ge,
    $validate: C,
    $commit: _e
  }, a && {
    $getResultsForChild: R,
    $clearExternalResults: se,
    $validationGroups: S
  }), v));
}
let W0 = class {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(e, r, o) {
    this.storage.set(e, {
      rules: r,
      result: o
    });
  }
  checkRulesValidity(e, r, o) {
    const n = Object.keys(o), a = Object.keys(r);
    return a.length !== n.length || !a.every((i) => n.includes(i)) ? !1 : a.every((i) => r[i].$params ? Object.keys(r[i].$params).every((s) => H(o[i].$params[s]) === H(r[i].$params[s])) : !0);
  }
  get(e, r) {
    const o = this.storage.get(e);
    if (!o) return;
    const {
      rules: n,
      result: a
    } = o, i = this.checkRulesValidity(e, r, n), s = a.$unwatch ? a.$unwatch : () => ({});
    return i ? a : {
      $dirty: a.$dirty,
      $partial: !0,
      $unwatch: s
    };
  }
};
const Ba = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, Md = Symbol("vuelidate#injectChildResults"), Td = Symbol("vuelidate#removeChildResults");
function U0(t) {
  let {
    $scope: e,
    instance: r
  } = t;
  const o = {}, n = X([]), a = W(() => n.value.reduce((d, u) => (d[u] = H(o[u]), d), {}));
  function i(d, u) {
    let {
      $registerAs: p,
      $scope: f,
      $stopPropagation: h
    } = u;
    h || e === Ba.COLLECT_NONE || f === Ba.COLLECT_NONE || e !== Ba.COLLECT_ALL && e !== f || (o[p] = d, n.value.push(p));
  }
  r.__vuelidateInjectInstances = [].concat(r.__vuelidateInjectInstances || [], i);
  function s(d) {
    n.value = n.value.filter((u) => u !== d), delete o[d];
  }
  r.__vuelidateRemoveInstances = [].concat(r.__vuelidateRemoveInstances || [], s);
  const l = Vr(Md, []);
  Zs(Md, r.__vuelidateInjectInstances);
  const c = Vr(Td, []);
  return Zs(Td, r.__vuelidateRemoveInstances), {
    childResults: a,
    sendValidationResultsToParent: l,
    removeValidationResultsFromParent: c
  };
}
function $f(t) {
  return new Proxy(t, {
    get(e, r) {
      return typeof e[r] == "object" ? $f(e[r]) : W(() => e[r]);
    }
  });
}
let Ad = 0;
function Ui(t, e) {
  var r;
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (o = t, t = void 0, e = void 0);
  let {
    $registerAs: n,
    $scope: a = Ba.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: s,
    currentVueInstance: l
  } = o;
  const c = l || ((r = Co()) === null || r === void 0 ? void 0 : r.proxy), d = c ? c.$options : {};
  n || (Ad += 1, n = `_vuelidate_${Ad}`);
  const u = X({}), p = new W0(), {
    childResults: f,
    sendValidationResultsToParent: h,
    removeValidationResultsFromParent: m
  } = c ? U0({
    $scope: a,
    instance: c
  }) : {
    childResults: X({})
  };
  if (!t && d.validations) {
    const g = d.validations;
    e = X({}), Kl(() => {
      e.value = c, Le(() => ii(g) ? g.call(e.value, new $f(e.value)) : g, (b) => {
        u.value = al({
          validations: b,
          state: e,
          childResults: f,
          resultsCache: p,
          globalConfig: o,
          instance: c,
          externalResults: s || c.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), o = d.validationsConfig || o;
  } else {
    const g = Ge(t) || P0(t) ? t : lt(t || {});
    Le(g, (b) => {
      u.value = al({
        validations: b,
        state: e,
        childResults: f,
        resultsCache: p,
        globalConfig: o,
        instance: c ?? {},
        externalResults: s
      });
    }, {
      immediate: !0
    });
  }
  return c && (h.forEach((g) => g(u, {
    $registerAs: n,
    $scope: a,
    $stopPropagation: i
  })), da(() => m.forEach((g) => g(n)))), W(() => Nr(Nr({}, H(u.value)), f.value));
}
function Id(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function Yn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Id(Object(r), !0).forEach(function(o) {
      K0(t, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Id(Object(r)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return t;
}
function K0(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function si(t) {
  return typeof t == "function";
}
function il(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function Ki(t) {
  return si(t.$validator) ? Yn({}, t) : {
    $validator: t
  };
}
function Sf(t) {
  return typeof t == "object" ? t.$valid : t;
}
function _f(t) {
  return t.$validator || t;
}
function J0(t, e) {
  if (!il(t)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof t}`);
  if (!il(e) && !si(e)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const r = Ki(e);
  return r.$params = Yn(Yn({}, r.$params || {}), t), r;
}
function Y0(t, e) {
  if (!si(t) && typeof H(t) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof t}`);
  if (!il(e) && !si(e)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const r = Ki(e);
  return r.$message = t, r;
}
function X0(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const r = Ki(t);
  return Yn(Yn({}, r), {}, {
    $async: !0,
    $watchTargets: e
  });
}
function G0(t) {
  return {
    $validator(e) {
      for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        o[n - 1] = arguments[n];
      return H(e).reduce((a, i, s) => {
        const l = Object.entries(i).reduce((c, d) => {
          let [u, p] = d;
          const f = t[u] || {}, h = Object.entries(f).reduce((m, g) => {
            let [b, y] = g;
            const x = _f(y).call(this, p, i, s, ...o), v = Sf(x);
            if (m.$data[b] = x, m.$data.$invalid = !v || !!m.$data.$invalid, m.$data.$error = m.$data.$invalid, !v) {
              let S = y.$message || "";
              const M = y.$params || {};
              typeof S == "function" && (S = S({
                $pending: !1,
                $invalid: !v,
                $params: M,
                $model: p,
                $response: x
              })), m.$errors.push({
                $property: u,
                $message: S,
                $params: M,
                $response: x,
                $model: p,
                $pending: !1,
                $validator: b
              });
            }
            return {
              $valid: m.$valid && v,
              $data: m.$data,
              $errors: m.$errors
            };
          }, {
            $valid: !0,
            $data: {},
            $errors: []
          });
          return c.$data[u] = h.$data, c.$errors[u] = h.$errors, {
            $valid: c.$valid && h.$valid,
            $data: c.$data,
            $errors: c.$errors
          };
        }, {
          $valid: !0,
          $data: {},
          $errors: {}
        });
        return {
          $valid: a.$valid && l.$valid,
          $data: a.$data.concat(l.$data),
          $errors: a.$errors.concat(l.$errors)
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
      return r ? r.$errors.map((o) => Object.values(o).map((n) => n.map((a) => a.$message)).reduce((n, a) => n.concat(a), [])) : [];
    }
  };
}
const fa = (t) => {
  if (t = H(t), Array.isArray(t)) return !!t.length;
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
}, Z0 = (t) => (t = H(t), Array.isArray(t) ? t.length : typeof t == "object" ? Object.keys(t).length : String(t).length);
function Ur() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return (o) => (o = H(o), !fa(o) || e.every((n) => (n.lastIndex = 0, n.test(o))));
}
var ir = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: G0,
  len: Z0,
  normalizeValidatorObject: Ki,
  regex: Ur,
  req: fa,
  unwrap: H,
  unwrapNormalizedValidator: _f,
  unwrapValidatorResponse: Sf,
  withAsync: X0,
  withMessage: Y0,
  withParams: J0
});
Ur(/^[a-zA-Z]*$/);
Ur(/^[a-zA-Z0-9]*$/);
Ur(/^\d*(\.\d+)?$/);
const Q0 = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
Ur(Q0);
function ew(t) {
  return typeof t == "string" && (t = t.trim()), fa(t);
}
var li = {
  $validator: ew,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function tw(t) {
  return (e) => H(e) === H(t);
}
function rw(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: tw(t),
    $message: (r) => `The value must be equal to the ${e} value`,
    $params: {
      equalTo: t,
      otherName: e,
      type: "sameAs"
    }
  };
}
const ow = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
Ur(ow);
function nw(t) {
  return (e) => !fa(e) || (!/\s/.test(e) || e instanceof Date) && +e >= +H(t);
}
function Nd(t) {
  return {
    $validator: nw(t),
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
function aw(t) {
  return (e) => !fa(e) || (!/\s/.test(e) || e instanceof Date) && +e <= +H(t);
}
var zd = (t) => ({
  $validator: aw(t),
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
Ur(/(^[0-9]*$)|(^-[0-9]+$)/);
Ur(/^[-]?\d*(\.\d+)?$/);
function iw(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
const sw = { class: "amount-input-container" }, lw = { class: "amount-input" }, cw = ["disabled"], dw = ["id", "disabled"], uw = ["disabled"], pw = {
  key: 0,
  class: "error"
}, fw = {
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
    }
  },
  emits: ["update:model-value"],
  setup(t, { emit: e }) {
    const r = t, o = e, n = W({
      get() {
        return r.modelValue;
      },
      set(d) {
        s(d);
      }
    }), a = W(() => n.value === 1), i = W(() => n.value >= r.max);
    function s(d) {
      d < 0 || Number.isNaN(d) || typeof d != "number" || !d ? (Fc(n), o("update:model-value", 1)) : d > r.max ? (Fc(n), o("update:model-value", r.max)) : o("update:model-value", d);
    }
    function l() {
      s(n.value -= 1);
    }
    function c() {
      s(n.value += 1);
    }
    return (d, u) => ($(), I("div", sw, [
      J("div", lw, [
        J("button", {
          disabled: t.disabled || a.value,
          class: "minus",
          "aria-label": "Minus one",
          onClick: fr(l, ["stop"])
        }, [
          fe(Hr, { icon: H(iw) }, null, 8, ["icon"])
        ], 8, cw),
        yo(J("input", {
          id: t.id,
          "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p),
          class: Ne([{ "has-error": t.error }, "input"]),
          disabled: t.disabled,
          "aria-label": "Amount input",
          type: "number"
        }, null, 10, dw), [
          [ai, n.value]
        ]),
        J("button", {
          disabled: t.disabled || i.value,
          class: "plus",
          "aria-label": "Plus one",
          onClick: fr(c, ["stop"])
        }, [
          fe(Hr, { icon: H(Ab) }, null, 8, ["icon"])
        ], 8, uw)
      ]),
      t.error ? ($(), I("span", pw, te(t.error), 1)) : Q("", !0)
    ]));
  }
}, Cf = /* @__PURE__ */ Te(fw, [["__scopeId", "data-v-47a543d3"]]);
function hw(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })
  ]);
}
const mw = ["for"], gw = {
  key: 0,
  class: "optional"
}, vw = { class: "container-inner" }, bw = {
  key: 0,
  class: "inline-container-prepended"
}, ww = ["id", "placeholder", "disabled", "readonly", "aria-label", "rows", "autofocus"], yw = ["id", "placeholder", "type", "disabled", "readonly", "aria-label", "autofocus"], xw = { class: "inline-container-appended" }, kw = {
  key: 1,
  class: "text"
}, $w = {
  key: 1,
  class: "error"
}, Sw = {
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
    }
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(t, { emit: e }) {
    const r = t, o = e, n = Vr("showError", !0), a = tc()[r.hotkey.key], i = X(null), s = W(() => r.error ? hw : r.icon), l = W(() => r.optional !== "" ? r.optional : "Optional"), c = W({
      get() {
        return r.modelValue;
      },
      set(g) {
        o("update:modelValue", g);
      }
    }), d = W(() => r.requiredMessage ? r.requiredMessage : r.label ? Oe("input.required_with_label", { label: r.label.toLowerCase() }) : Oe("input.required")), u = W(() => {
      const g = r.required ? { value: { required: ir.withMessage(() => d.value, li) } } : { value: {} };
      return r.rules.forEach((b, y) => {
        g.value[y] = ir.withMessage(() => b.message || "", b.validator);
      }), g;
    }), p = Ui(u.value, { value: c }), f = W(() => {
      var g;
      return !r.required || r.required && !((g = p.value) != null && g.$errors[0]);
    }), h = W(() => {
      var g;
      return !!r.error || ((g = p.value) == null ? void 0 : g.$errors[0]) || !f.value;
    });
    function m(g) {
      var b;
      o("blur", g), (b = p.value) == null || b.$touch(g);
    }
    return Le(a, (g) => {
      g && r.hotkey && setTimeout(() => {
        i.value.focus();
      }, 100);
    }), (g, b) => {
      var y, x;
      return $(), I("div", {
        class: Ne(["input-container", { "has-error": h.value, "is-large": t.large }]),
        tabindex: "-1",
        onFocus: b[4] || (b[4] = (v) => g.$refs.input.focus())
      }, [
        t.label ? ($(), I("label", {
          key: 0,
          class: "input-label",
          for: t.id
        }, [
          J("span", null, te(t.label), 1),
          t.required ? Q("", !0) : ($(), I("span", gw, te(l.value), 1))
        ], 8, mw)) : Q("", !0),
        J("div", vw, [
          t.prependIcon ? ($(), I("div", bw, [
            fe(Hr, { icon: t.prependIcon }, null, 8, ["icon"])
          ])) : Q("", !0),
          t.expand ? yo(($(), I("textarea", Je({
            key: 1,
            id: t.id,
            ref_key: "input",
            ref: i,
            "onUpdate:modelValue": b[0] || (b[0] = (v) => c.value = v),
            autocomplete: "off",
            class: ["input", {
              "has-error": h.value,
              "is-valid": t.valid,
              "has-icon-prepended": t.prependIcon,
              "has-icon-appended": t.icon
            }],
            placeholder: t.placeholder,
            disabled: t.disabled,
            readonly: t.readonly,
            "aria-label": t.ariaLabel,
            rows: t.rows,
            autofocus: t.autofocus
          }, g.$attrs, {
            onFocus: b[1] || (b[1] = (v) => o("focus", v)),
            onBlur: m
          }), null, 16, ww)), [
            [ai, c.value]
          ]) : yo(($(), I("input", Je({
            key: 2,
            id: t.id,
            ref_key: "input",
            ref: i,
            "onUpdate:modelValue": b[2] || (b[2] = (v) => c.value = v),
            autocomplete: "off",
            class: ["input", {
              "has-error": h.value,
              "is-valid": t.valid,
              medium: t.medium,
              large: t.large,
              "has-icon-prepended": t.prependIcon,
              "has-icon-appended": t.icon
            }],
            placeholder: t.placeholder,
            type: t.type,
            disabled: t.disabled,
            readonly: t.readonly,
            "aria-label": t.ariaLabel,
            autofocus: t.autofocus
          }, g.$attrs, {
            onFocus: b[3] || (b[3] = (v) => o("focus", v)),
            onBlur: m
          }), null, 16, yw)), [
            [kb, c.value]
          ]),
          J("div", xw, [
            Ee(g.$slots, "inline", {}, () => [
              t.icon ? ($(), de(Hr, {
                key: 0,
                icon: s.value,
                class: Ne({ "has-error": h.value })
              }, null, 8, ["icon", "class"])) : Q("", !0),
              t.inline ? ($(), I("span", kw, te(t.inline), 1)) : Q("", !0),
              t.hotkey.label ? ($(), de(rc, {
                key: 2,
                hotkey: t.hotkey.label
              }, null, 8, ["hotkey"])) : Q("", !0)
            ], !0)
          ])
        ]),
        h.value && H(n) ? ($(), I("span", $w, te((x = (y = H(p).value) == null ? void 0 : y.$errors[0]) != null && x.$message ? H(p).value.$errors[0].$message : t.error), 1)) : Q("", !0)
      ], 34);
    };
  }
}, Xn = /* @__PURE__ */ Te(Sw, [["__scopeId", "data-v-094159ff"]]);
function _w(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
const Cw = {
  __name: "PStepStatus",
  props: {
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    }
  },
  setup(t) {
    const e = t, r = W(() => {
      switch (e.status) {
        case "done":
          return oc;
        case "attention":
          return _w;
        default:
          return null;
      }
    });
    return (o, n) => ($(), I("div", {
      class: Ne(["status", t.status])
    }, [
      fe(gf, { icon: r.value }, null, 8, ["icon"])
    ], 2));
  }
}, Of = /* @__PURE__ */ Te(Cw, [["__scopeId", "data-v-593da928"]]);
function Ow(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ew(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Mw(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Tw(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Aw = ["data-testid"], Iw = { class: "icon" }, Nw = { class: "content" }, zw = { class: "title" }, jw = {
  key: 0,
  class: "description"
}, Pw = {
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
    const e = t, r = W(() => e.icon ? e.icon : e.type === "error" ? Ew : e.type === "warning" ? Mw : e.type === "success" ? Ow : e.type === "info" ? Tw : null);
    return (o, n) => ($(), I("div", {
      class: Ne(["alert", t.type]),
      "data-testid": `alert-${t.type}`
    }, [
      Ee(o.$slots, "default", {}, () => [
        J("div", Iw, [
          fe(Ho, { icon: r.value }, null, 8, ["icon"])
        ]),
        J("div", Nw, [
          J("span", zw, te(t.title), 1),
          t.description ? ($(), I("span", jw, te(t.description), 1)) : Q("", !0)
        ])
      ], !0)
    ], 10, Aw));
  }
}, ci = /* @__PURE__ */ Te(Pw, [["__scopeId", "data-v-d4c64a42"]]), Rw = {
  class: "title",
  part: "step-title"
}, Vw = {
  key: 1,
  class: "separator"
}, Lw = {
  key: 0,
  class: "subtitle status-text",
  part: "step-subtitle"
}, Dw = {
  key: 1,
  class: "total",
  part: "step-subtitle"
}, Bw = {
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
    const r = t, o = e, n = X({}), a = lt({
      width: null,
      height: null
    }), i = X(null), s = W(() => {
      const g = r.options.find((S) => S.code === "width"), b = r.options.find((S) => S.code === "height"), y = g && g.reversible && b && b.reversible, x = g == null ? void 0 : g.min, v = b == null ? void 0 : b.min;
      return y ? Math.min(x, v) : { width: x, height: v };
    }), l = W(() => {
      const g = r.options.find((S) => S.code === "width"), b = r.options.find((S) => S.code === "height"), y = g && g.reversible && b && b.reversible, x = g == null ? void 0 : g.max, v = b == null ? void 0 : b.max;
      return y ? Math.max(x, v) : { width: x, height: v };
    }), c = {
      width: {
        minValue: ir.withMessage(
          Oe("step.min_value", {
            minValue: typeof s.value == "number" ? s.value : s.value.width
          }),
          Nd(typeof s.value == "number" ? s.value : s.value.width)
        ),
        required: ir.withMessage(Oe("step.required"), li),
        maxValue: ir.withMessage(
          Oe("step.max_value", {
            maxValue: typeof l.value == "number" ? l.value : l.value.width
          }),
          zd(typeof l.value == "number" ? l.value : l.value.width)
        )
      },
      height: {
        minValue: ir.withMessage(
          Oe("step.min_value", {
            minValue: typeof s.value == "number" ? s.value : s.value.height
          }),
          Nd(typeof s.value == "number" ? s.value : s.value.height)
        ),
        required: ir.withMessage(Oe("step.required"), li),
        maxValue: ir.withMessage(
          Oe("step.max_value", {
            maxValue: typeof l.value == "number" ? l.value : l.value.height
          }),
          zd(typeof l.value == "number" ? l.value : l.value.height)
        )
      }
    }, d = Ui(c, a), u = X(null);
    function p(g, b) {
      if (g && b && (!d.$errors || d.$errors.length === 0)) {
        const y = g * b / 1e4;
        i.value = Number(y.toFixed(2)), n.value = [
          { code: "width", value: g },
          { code: "height", value: b }
        ];
      }
    }
    function f() {
      a.width && a.height && (!r.modelValue || r.modelValue[0].value !== a.width || r.modelValue[1].value !== a.height) && (!d.value.$errors || d.value.$errors.length === 0) && o("update:modelValue", n.value);
    }
    function h() {
      var g, b;
      const y = (g = u.value) == null ? void 0 : g.getElementsByClassName("input");
      (b = y == null ? void 0 : y[0]) == null || b.focus();
    }
    function m(g) {
      setTimeout(() => {
        o("update:focus", g);
      }, 200);
    }
    return Le(
      () => ({ ...n.value }),
      (g, b) => {
        var y;
        const x = g;
        x.code = r.code, b.value !== g.value && (g.value !== ((y = r.modelValue) == null ? void 0 : y.value) || !r.modelValue) && o("update:modelValue", x);
      }
    ), Qt(() => {
      var g, b, y, x;
      h(), (g = r.modelValue) != null && g.length ? (a.width = (b = r.modelValue.find((v) => v.code === "width")) == null ? void 0 : b.value, a.height = (y = r.modelValue.find((v) => v.code === "height")) == null ? void 0 : y.value) : r.modelValue && r.modelValue.code === r.code && (n.value.value = ((x = r.modelValue) == null ? void 0 : x.value) || 1);
    }), Le(
      () => r.modelValue,
      (g) => {
        var b, y;
        g != null && g.length ? (a.width = (b = g.find((x) => x.code === "width")) == null ? void 0 : b.value, a.height = (y = g.find((x) => x.code === "height")) == null ? void 0 : y.value, d.value.$touch()) : r.modelValue && r.modelValue.code === r.code && (n.value.value = (g == null ? void 0 : g.value) || 1);
      },
      { immediate: !0 }
    ), (g, b) => ($(), de(nc, {
      class: "configurator-step simple",
      disabled: !t.alert,
      "model-value": !!t.alert,
      "hide-toggle": "",
      "aria-title": t.ariaTitle,
      part: "step"
    }, {
      header: ve(() => [
        fe(Of, { status: t.status }, null, 8, ["status"]),
        J("div", {
          ref_key: "inner",
          ref: u,
          class: "inner"
        }, [
          J("h3", Rw, te(t.title), 1),
          J("div", {
            class: Ne(["measurement-inputs", { "has-errors": H(d).$errors && H(d).$errors.length }])
          }, [
            ($(!0), I(De, null, Dr(t.options, (y, x) => {
              var v;
              return $(), I(De, { key: x }, [
                y.code === "width" || y.code === "height" ? ($(), de(Xn, {
                  key: 0,
                  id: `measurement-input-${y.code}`,
                  modelValue: a[y.code],
                  "onUpdate:modelValue": [
                    (S) => a[y.code] = S,
                    b[0] || (b[0] = (S) => p(a.width, a.height))
                  ],
                  required: "",
                  type: "number",
                  "aria-label": y.code,
                  class: "measurement-input",
                  inline: y.unit,
                  min: y.min,
                  max: y.max,
                  placeholder: "",
                  error: H(d)[y.code].$errors ? (v = H(d)[y.code].$errors[0]) == null ? void 0 : v.$message : "",
                  onBlur: (S) => {
                    H(d)[y.code].$touch(S), f(), m(!1);
                  },
                  onKeyup: lr((S) => {
                    H(d)[y.code].$touch(S), f();
                  }, ["enter"]),
                  onFocus: b[1] || (b[1] = (S) => m(!0))
                }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "error", "onBlur", "onKeyup"])) : Q("", !0),
                y.code === "width" ? ($(), I("span", Vw, " x ")) : y.code === "amount" ? ($(), de(Cf, {
                  key: 2,
                  modelValue: n.value.value,
                  "onUpdate:modelValue": b[2] || (b[2] = (S) => n.value.value = S),
                  min: y.min,
                  max: y.max || void 0,
                  onKeyup: b[3] || (b[3] = lr((S) => !t.modelValue || Number(S.target.value) !== t.modelValue.value ? o("update:modelValue", { value: Number(S.target.value), code: "amount" }) : "", ["enter"])),
                  onBlur: b[4] || (b[4] = (S) => m(!1)),
                  onFocus: b[5] || (b[5] = (S) => m(!0))
                }, null, 8, ["modelValue", "min", "max"])) : Q("", !0)
              ], 64);
            }), 128))
          ], 2)
        ], 512),
        t.status === "attention" ? ($(), I("span", Lw, te(t.attentionText), 1)) : Q("", !0),
        i.value ? ($(), I("span", Dw, te(t.totalPrefix || H(Oe)("step.total")) + ": " + te(i.value) + " m² ", 1)) : Q("", !0)
      ]),
      default: ve(() => [
        t.alert ? ($(), de(ci, Zo(Je({ key: 0 }, t.alert)), null, 16)) : Q("", !0)
      ]),
      _: 1
    }, 8, ["disabled", "model-value", "aria-title"]));
  }
}, Fw = /* @__PURE__ */ Te(Bw, [["__scopeId", "data-v-6cc08e00"]]);
function Hw(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
    })
  ]);
}
const qw = {
  __name: "PLabel",
  props: {
    /** Small version */
    small: Boolean,
    /** Color of background and text */
    color: {
      type: String,
      default: "red"
    }
  },
  setup(t) {
    return (e, r) => ($(), I("span", {
      class: Ne(["label", [{ small: t.small }, t.color]])
    }, [
      Ee(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, ac = /* @__PURE__ */ Te(qw, [["__scopeId", "data-v-7b9990d7"]]), Ww = ["srcset"], Uw = ["srcset"], Kw = ["src", "alt", "height", "width"], Jw = {
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
  setup(t) {
    const e = t, r = X(!1);
    function o() {
      r.value = !0;
    }
    const n = W(() => e.image);
    return Le(n, () => {
      r.value = !1;
    }), (a, i) => ($(), I("picture", {
      class: "image-wrapper",
      style: _o({ width: `${t.width}px`, height: `${t.height}px` })
    }, [
      J("source", {
        media: "(max-width: 640px)",
        srcset: t.mobile
      }, null, 8, Ww),
      J("source", {
        media: "(max-width: 1024px)",
        srcset: t.tablet
      }, null, 8, Uw),
      t.image && !r.value ? ($(), I("img", {
        key: 0,
        loading: "lazy",
        class: Ne(["image", t.rounded ? `rounded-${t.rounded}` : ""]),
        src: t.image,
        alt: t.alt,
        height: t.height,
        width: t.width,
        onError: i[0] || (i[0] = (s) => o())
      }, null, 42, Kw)) : ($(), I("div", {
        key: 1,
        class: Ne(["skeleton", t.rounded ? `rounded-${t.rounded}` : ""])
      }, null, 2))
    ], 4));
  }
}, Ef = /* @__PURE__ */ Te(Jw, [["__scopeId", "data-v-ac0b607a"]]), Yw = {
  key: 0,
  class: "amount"
}, Xw = {
  key: 1,
  class: "labels"
}, Gw = {
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
    const r = t, o = e, n = W({
      get: () => r.amount,
      set: (a) => {
        o("update:amount", a);
      }
    });
    return (a, i) => ($(), I(De, null, [
      t.selected && t.editAmount ? ($(), I("div", Yw, [
        J("span", null, te(t.amountLabel), 1),
        fe(Cf, {
          modelValue: n.value,
          "onUpdate:modelValue": i[0] || (i[0] = (s) => n.value = s),
          onClick: i[1] || (i[1] = fr(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : Q("", !0),
      t.labels.length && !t.editAmount ? ($(), I("div", Xw, [
        ($(!0), I(De, null, Dr(t.labels, (s, l) => ($(), I(De, { key: l }, [
          s.text ? ($(), de(ac, {
            key: 0,
            color: s.color,
            small: ""
          }, {
            default: ve(() => [
              Xe(te(s.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : Q("", !0)
        ], 64))), 128))
      ])) : Q("", !0),
      t.image && !t.editAmount ? ($(), de(Ef, {
        key: 2,
        image: t.image,
        alt: `${t.title} ${H(Oe)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : Q("", !0)
    ], 64));
  }
}, Zw = /* @__PURE__ */ Te(Gw, [["__scopeId", "data-v-a96fead4"]]);
function Qw(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "fill-rule": "evenodd",
      d: "M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ey(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
const ty = {
  key: 0,
  class: "not-available"
}, ry = {
  key: 1,
  class: "custom-value"
}, oy = {
  key: 2,
  class: "information"
}, ny = {
  key: 0,
  class: "delivery"
}, ay = { class: "delivery-time" }, iy = {
  key: 1,
  class: "price"
}, sy = {
  key: 0,
  class: "price-per"
}, ly = {
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
    const r = t, o = e, n = X(1), a = W({
      get: () => r.customInput.value,
      set: (s) => {
        n.value = Number(s);
      }
    });
    function i() {
      n.value && n.value > 0 && o("update:customValue", n);
    }
    return (s, l) => t.disabled && t.notAvailableMessage ? ($(), I("div", ty, [
      fe(gf, { icon: H(Qw) }, null, 8, ["icon"]),
      J("span", null, te(t.notAvailableMessage), 1)
    ])) : t.customInput.value && t.customInput.unit && !t.disabled && !t.notAvailableMessage ? ($(), I("div", ry, [
      fe(Xn, {
        id: "custom-value",
        modelValue: a.value,
        "onUpdate:modelValue": l[0] || (l[0] = (c) => a.value = c),
        inline: t.customInput.unit,
        required: "",
        "data-testid": "custom-value-input"
      }, null, 8, ["modelValue", "inline"]),
      fe(Ct, {
        variant: "primary",
        "data-testid": "custom-value-submit",
        onClick: fr(i, ["stop"])
      }, {
        default: ve(() => [
          Xe(te(t.customInput.buttonText || H(Oe)("option.continue")), 1)
        ]),
        _: 1
      })
    ])) : ($(), I("div", oy, [
      t.deliveryTime ? ($(), I("span", ny, [
        fe(Hr, { icon: H(ey) }, null, 8, ["icon"]),
        J("span", ay, te(t.deliveryTimeText), 1)
      ])) : Q("", !0),
      t.price ? ($(), I("span", iy, [
        Xe(" € " + te(t.price) + " ", 1),
        t.pricePer ? ($(), I("span", sy, " / " + te(t.pricePer), 1)) : Q("", !0)
      ])) : Q("", !0)
    ]));
  }
}, cy = /* @__PURE__ */ Te(ly, [["__scopeId", "data-v-37a2d813"]]), dy = ["tabindex", "aria-current", "part"], uy = {
  key: 0,
  class: "no-option"
}, py = {
  key: 1,
  class: "inner"
}, fy = { class: "header" }, hy = { class: "content" }, my = {
  key: 0,
  class: "title",
  part: "option-title"
}, gy = {
  class: "description",
  part: "option-description"
}, vy = { class: "footer" }, by = {
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
    const r = t, o = e, n = X(!1), a = W(() => r.deliveryTimeText !== "" ? `${r.deliveryTime} ${r.deliveryTimeText}` : _0("option.days", r.deliveryTime)), i = W(() => {
      switch (r.pricePer) {
        case "unit":
          return Oe("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), s = W({
      get: () => r.modelValue,
      set: (h) => {
        r.customInput.value || o("update:modelValue", h);
      }
    }), l = W({
      get: () => r.amount,
      set: (h) => {
        o("update:amount", h);
      }
    }), c = W(() => r.amountLabel ? r.amountLabel : Oe("option.amount")), d = W(() => typeof l.value == "number" && l.value > 0);
    function u(h) {
      r.disabled || (s.value = r.customInput.value && !h || !s.value, n.value = d.value ? !n.value : !1, h && o("update:customValue", h));
    }
    function p(h, m) {
      let g = null;
      m === "left" && h ? g = h.previousElementSibling : m === "right" && h && (g = h.nextElementSibling);
      const b = g == null ? void 0 : g.querySelector(".header");
      if (g && !b.disabled) {
        b.click();
        let y = null;
        const x = g.querySelector("input");
        setTimeout(() => {
          y = g.querySelector(".option-card"), y && !y.classList.contains("disabled") ? y.focus() : x && x.focus();
        }, 50);
      } else g && p(g, m);
    }
    function f(h, m) {
      var g, b, y, x;
      const v = h.currentTarget.parentElement;
      if (m === "left") {
        const S = (g = v.previousElementSibling) == null ? void 0 : g.querySelector(".option-card"), M = (b = v.previousElementSibling) == null ? void 0 : b.querySelector(".overlay");
        S ? S.classList.contains("disabled") ? f({ currentTarget: S }, "left") : M ? M.click() : S.focus() : p(v.closest(".accordion-item"), "left");
      } else if (m === "right") {
        const S = (y = v.nextElementSibling) == null ? void 0 : y.querySelector(".option-card"), M = (x = v.nextElementSibling) == null ? void 0 : x.querySelector(".overlay");
        S ? S.classList.contains("disabled") ? f({ currentTarget: S }, "right") : M ? M.click() : S.focus() : p(v.closest(".accordion-item"), "right");
      }
    }
    return Qt(() => {
      r.amount > 0 && r.modelValue && (n.value = !0);
    }), Le(
      () => r.amount,
      (h, m) => {
        !m && h && (n.value = !0);
      }
    ), Le(
      () => r.modelValue,
      () => {
        r.amount && (n.value = !!r.modelValue);
      }
    ), (h, m) => ($(), I("div", {
      class: Ne(["option-card", { selected: s.value, disabled: t.disabled }]),
      tabindex: t.disabled ? -1 : 0,
      "aria-current": s.value,
      "data-testid": "option",
      part: `option ${s.value ? "option-selected" : ""}`,
      onClick: m[2] || (m[2] = (g) => t.customInput.value ? null : u()),
      onKeyup: [
        m[3] || (m[3] = lr((g) => t.customInput.value ? null : u(), ["enter"])),
        m[4] || (m[4] = lr((g) => f(g, "left"), ["arrow-left"])),
        m[5] || (m[5] = lr((g) => f(g, "right"), ["arrow-right"])),
        m[6] || (m[6] = lr((g) => f(g, "up"), ["arrow-up"]))
      ]
    }, [
      t.noOption ? ($(), I("div", uy, [
        fe(Hr, { icon: H(Hw) }, null, 8, ["icon"]),
        J("h3", null, te(t.noOptionText), 1)
      ])) : ($(), I("div", py, [
        J("header", fy, [
          Ee(h.$slots, "header", {}, () => [
            fe(Zw, {
              selected: s.value,
              "amount-label": c.value,
              image: t.image,
              "edit-amount": n.value,
              amount: l.value,
              labels: t.labels,
              title: t.title,
              "onUpdate:amount": m[0] || (m[0] = (g) => o("update:amount", g))
            }, null, 8, ["selected", "amount-label", "image", "edit-amount", "amount", "labels", "title"])
          ], !0)
        ]),
        J("div", hy, [
          Ee(h.$slots, "content", {}, () => [
            t.title ? ($(), I("h3", my, te(t.title), 1)) : Q("", !0),
            J("p", gy, te(t.description), 1)
          ], !0)
        ]),
        J("footer", vy, [
          Ee(h.$slots, "footer", {}, () => [
            fe(cy, {
              "delivery-time": t.deliveryTime,
              price: t.price,
              "price-per": i.value,
              "delivery-time-text": a.value,
              "custom-input": t.customInput,
              disabled: t.disabled,
              "not-available-message": t.notAvailableMessage,
              "onUpdate:customValue": m[1] || (m[1] = (g) => u(g))
            }, null, 8, ["delivery-time", "price", "price-per", "delivery-time-text", "custom-input", "disabled", "not-available-message"])
          ], !0)
        ])
      ]))
    ], 42, dy));
  }
}, wy = /* @__PURE__ */ Te(by, [["__scopeId", "data-v-bd1d4e5d"]]), yy = {
  __name: "POverlay",
  props: {
    /** 0 - 100, see https://tailwindcss.com/docs/opacity */
    opacity: {
      type: Number,
      default: 80
    },
    /** rgb color (0,0,0) */
    color: {
      type: String,
      default: "0,0,0"
    },
    blur: Boolean,
    /** Whether the overlay is fixed positioned */
    fixed: Boolean
  },
  setup(t) {
    const e = t;
    return Qt(() => {
      e.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), Fi(() => {
      e.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (r, o) => ($(), I("div", {
      class: Ne(["overlay", { blurred: t.blur, fixed: t.fixed }]),
      style: _o({ background: `rgba(${t.color}, ${t.opacity / 100})` })
    }, [
      Ee(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, xy = /* @__PURE__ */ Te(yy, [["__scopeId", "data-v-e76286b0"]]), ky = {
  class: "title",
  part: "step-title"
}, $y = {
  key: 0,
  class: "subtitle",
  part: "step-subtitle"
}, Sy = {
  key: 1,
  class: "subtitle",
  part: "step-subtitle"
}, _y = {
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
    const r = t, o = e, n = X(!1), a = X([]), i = X([]), s = X([]), l = W({
      get: () => r.open,
      set: (g) => {
        o("update:accordionState", g);
      }
    }), c = W(() => i.value.map((g, b) => {
      if (!g)
        return null;
      if (r.options[b] && r.options[b].noOption)
        return r.options[b].noOptionText;
      let y = "";
      return s.value[b] && (y += `${s.value[b]}x `), y += r.options[b].title, y;
    }).filter((g) => !!g).join(", ")), d = X(null);
    function u(g) {
      r.multiple || (a.value = []), (a.value.length === 0 || a.value.some((y) => y.code === r.options[g].code) === !1) && a.value.push({ code: r.options[g].code, value: s.value[g] }), i.value[g] = !i.value[g];
      const b = a.value.findIndex((y) => y.code === "no-option");
      if (b > -1 && r.options[g].noOption)
        i.value.forEach((y, x) => {
          x !== g && (i.value[x] = !1);
        }), a.value = a.value.filter((y) => y.code === "no-option");
      else if (!r.options[g].noOption) {
        const y = r.options.findIndex((x) => x.noOption);
        y > -1 && (i.value[y] = !1), b > -1 ? a.value.splice(b, 1) : i.value[g] === !1 && a.value.some((x) => x.code === r.options[g].code) && (a.value = a.value.filter((x) => x.code !== r.options[g].code));
      }
      o("update:modelValue", a.value);
    }
    function p() {
      r.options.forEach((g) => {
        var b;
        !g.noOption && g.code === ((b = r.modelValue) == null ? void 0 : b.code) || Array.isArray(r.modelValue) && r.modelValue.some((y) => y.code === g.code) ? i.value.push(!0) : i.value.push(!1);
      }), r.code === "accessories" && r.options.forEach((g) => {
        if (Array.isArray(r.modelValue)) {
          const b = r.modelValue.find((y) => y.code === g.code);
          b ? s.value.push(b.value || g.amount || 1) : s.value.push(g.amount || 1), b && s.value.length > 3 && (n.value = !0);
        } else
          s.value.push(g.amount || 1);
      });
    }
    function f(g) {
      return r.code === "accessories" && g > 3 && !n.value;
    }
    function h(g, b) {
      s.value[g] = b;
      const y = a.value.filter((v) => v.code !== r.options[g].code), x = { code: r.options[g].code, value: b };
      a.value = [...y, x], o("update:modelValue", a.value);
    }
    function m() {
      setTimeout(() => {
        var g;
        (g = d.value) != null && g.length && d.value[0].$el.focus();
      }, 500);
    }
    return p(), Le(
      () => r.modelValue,
      () => {
        m(), i.value = [], s.value = [], p();
      }
    ), Le(
      () => r.open,
      () => {
        r.open && m();
      },
      { immediate: !0 }
    ), (g, b) => ($(), de(nc, {
      modelValue: l.value,
      "onUpdate:modelValue": b[2] || (b[2] = (y) => l.value = y),
      class: "configurator-step options",
      "aria-title": t.ariaTitle,
      "scroll-into-view": "",
      part: "step",
      exportparts: "state-indicator-icon"
    }, {
      header: ve(() => [
        fe(Of, { status: t.status }, null, 8, ["status"]),
        J("h3", ky, te(t.title), 1),
        t.status === "attention" ? ($(), I("span", $y, te(t.attentionText || H(Oe)("option.attention")), 1)) : Q("", !0),
        c.value ? ($(), I("span", Sy, te(c.value), 1)) : Q("", !0)
      ]),
      default: ve(() => [
        J("div", null, [
          J("div", {
            class: Ne(["option-container", {
              "show-all": t.code === "accessories" && n.value || t.code !== "accessories"
            }])
          }, [
            ($(!0), I(De, null, Dr(t.options, (y, x) => ($(), I("div", {
              key: x,
              class: Ne(["option", { hide: f(x) }])
            }, [
              x === 3 && !n.value && t.code === "accessories" ? ($(), de(xy, {
                key: 0,
                tabindex: "0",
                onClick: b[0] || (b[0] = fr((v) => n.value = !0, ["stop"])),
                onKeyup: b[1] || (b[1] = lr(fr((v) => n.value = !0, ["stop"]), ["enter"]))
              }, {
                default: ve(() => [
                  Xe(" +" + te(t.options.length - 3), 1)
                ]),
                _: 1
              })) : Q("", !0),
              fe(wy, Je({
                ref_for: !0,
                ref_key: "optionCards",
                ref: d
              }, y, {
                disabled: y.available === !1 || t.disabled,
                "not-available-message": y.available === !1 ? t.unvailableText || H(Oe)("option.unavailable") : "",
                "model-value": i.value[x],
                amount: t.code === "accessories" && !y.noOption ? s.value[x] : void 0,
                exportparts: "option option-title option-description",
                "onUpdate:amount": (v) => h(x, v),
                "onUpdate:customValue": (v) => h(x, v),
                "onUpdate:modelValue": (v) => u(x)
              }), null, 16, ["disabled", "not-available-message", "model-value", "amount", "onUpdate:amount", "onUpdate:customValue", "onUpdate:modelValue"])
            ], 2))), 128))
          ], 2),
          t.alert ? ($(), de(ci, Zo(Je({ key: 0 }, t.alert)), null, 16)) : Q("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "aria-title"]));
  }
}, Cy = /* @__PURE__ */ Te(_y, [["__scopeId", "data-v-48cd0a03"]]), Oy = {
  class: "delivery-options",
  part: "delivery-step"
}, Ey = { class: "header" }, My = {
  class: "title",
  part: "delivery-step-title"
}, Ty = {
  class: "hint",
  part: "delivery-step-subtitle"
}, Ay = { class: "content" }, Iy = {
  class: "day",
  part: "delivery-option-day"
}, Ny = {
  class: "date",
  part: "delivery-option-date"
}, zy = {
  key: 0,
  class: "cost",
  part: "delivery-option-cost"
}, jy = {
  key: 1,
  class: "no-cost",
  part: "delivery-option-no-cost"
}, Py = {
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
    const e = t, r = X(!1), o = W(() => e.title ? e.title : Oe("delivery.delivery_options")), n = W(() => e.noCost ? e.noCost : Oe("delivery.no_extra_cost")), a = W(
      () => e.makeYourChoice ? e.makeYourChoice : Oe("delivery.make_your_choice_next_step")
    ), i = W(() => e.buttonTextShow ? e.buttonTextShow : Oe("delivery.see_more")), s = W(() => e.buttonTextHide ? e.buttonTextHide : Oe("delivery.see_less"));
    function l() {
      window.innerWidth >= 768 ? r.value = !0 : window.innerWidth < 768 && (r.value = !1);
    }
    return Zt(() => {
      window.addEventListener("resize", l);
    }), da(() => {
      window.removeEventListener("resize", l);
    }), l(), (c, d) => ($(), I("div", Oy, [
      J("div", Ey, [
        J("h2", My, te(o.value), 1),
        J("span", Ty, " *" + te(a.value), 1)
      ]),
      J("div", Ay, [
        ($(!0), I(De, null, Dr(t.items, (u, p) => ($(), I("div", {
          key: p,
          class: Ne(["option", {
            hide: p > 0 && !r.value && !u.cheapest,
            last: p === 1 && !r.value || p === t.items.length - 1 || p > 1 && u.cheapest && !r.value
          }]),
          part: "delivery-option"
        }, [
          J("span", Iy, [
            Xe(te(u.day) + " ", 1),
            u.label ? ($(), de(ac, {
              key: 0,
              color: u.label.color,
              small: ""
            }, {
              default: ve(() => [
                Xe(te(u.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : Q("", !0)
          ]),
          J("span", Ny, te(u.date), 1),
          u.cost ? ($(), I("span", zy, " + € " + te(u.cost), 1)) : ($(), I("span", jy, te(n.value), 1))
        ], 2))), 128)),
        fe(Ct, {
          variant: "tertiary",
          onClick: d[0] || (d[0] = (u) => r.value = !r.value)
        }, {
          default: ve(() => [
            Xe(te(r.value ? s.value : i.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}, Ry = /* @__PURE__ */ Te(Py, [["__scopeId", "data-v-3530df0b"]]), Vy = {
  __name: "PLoader",
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(t) {
    return (e, r) => ($(), I("div", {
      class: Ne(["loader", t.color])
    }, null, 2));
  }
}, ic = /* @__PURE__ */ Te(Vy, [["__scopeId", "data-v-c9362947"]]), Ly = {
  class: "configurator",
  "data-testid": "product-configurator",
  part: "configurator"
}, Dy = {
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
    const r = t, o = e, n = X(!1), a = W(() => r.modelValue), i = W({
      get: () => r.accordionState,
      set: (c) => {
        o("update:accordionState", c);
      }
    });
    function s(c, d) {
      i.value[d] = c, i.value.forEach((u, p) => {
        p !== d && (i.value[p] = !1);
      });
    }
    function l(c, d) {
      a.value.options[d] = c, o("update:modelValue", { code: r.productCode, ...a.value });
    }
    return (c, d) => ($(), I("div", Ly, [
      fe(z0, {
        modelValue: i.value,
        "onUpdate:modelValue": d[1] || (d[1] = (u) => i.value = u),
        items: t.template
      }, {
        default: ve(({ item: u, index: p, open: f }) => [
          u.type === "simple" ? ($(), de(Fw, Je({
            key: 0,
            modelValue: a.value.options[p],
            "onUpdate:modelValue": (h) => a.value.options[p] = h
          }, { ...u }, {
            "aria-title": u.title.toLowerCase().replace(" ", "-"),
            exportparts: "step step-title step-subtitle",
            "onUpdate:modelValue": (h) => l(h, p),
            "onUpdate:focus": d[0] || (d[0] = (h) => n.value = h)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "aria-title"])) : u.type === "options" || u.type === "options-multiple" ? ($(), de(Cy, Je({
            key: 1,
            modelValue: a.value.options[p],
            "onUpdate:modelValue": (h) => a.value.options[p] = h
          }, { ...u }, {
            open: f,
            multiple: u.type === "options-multiple",
            "aria-title": u.title.toLowerCase().replace(" ", "-"),
            disabled: n.value,
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onUpdate:modelValue": l,
            "onUpdate:accordionState": (h) => s(h, p)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "open", "multiple", "aria-title", "disabled", "onUpdate:accordionState"])) : Q("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      t.deliveryOptions.length ? ($(), de(Ry, {
        key: 0,
        items: t.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : Q("", !0),
      t.loading ? ($(), de(ic, { key: 1 })) : Q("", !0)
    ]));
  }
}, jd = /* @__PURE__ */ Te(Dy, [["__scopeId", "data-v-5f0758fc"]]);
function By(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function Fy(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
const Hy = {
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
    const r = t, o = e, n = W({
      get: () => r.value,
      set: (i) => {
        o("update:model-value", i);
      }
    }), a = W(() => r.placeholder ? r.placeholder : Oe("input.product_reference"));
    return (i, s) => ($(), de(Xn, Je({
      id: "reference-input",
      modelValue: n.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => n.value = l),
      class: "reference-input",
      "data-testid": "reference-input",
      type: "text",
      icon: H(Fy),
      large: ""
    }, r, { placeholder: a.value }), null, 16, ["modelValue", "icon", "placeholder"]));
  }
}, Pd = /* @__PURE__ */ Te(Hy, [["__scopeId", "data-v-1b09e567"]]);
function bs(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const qy = {}, Wy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Uy(t, e) {
  return $(), I("svg", Wy, e[0] || (e[0] = [
    J("path", {
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
const Ky = /* @__PURE__ */ Te(qy, [["render", Uy]]), Jy = {}, Yy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Xy(t, e) {
  return $(), I("svg", Yy, e[0] || (e[0] = [
    J("path", {
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
const Gy = /* @__PURE__ */ Te(Jy, [["render", Xy]]), Zy = ["data-testid"], Qy = {
  key: 0,
  class: "actions"
}, e1 = { class: "h-10" }, t1 = {
  key: 0,
  class: "minimized-actions"
}, r1 = {
  key: 1,
  class: "content"
}, o1 = {
  key: 0,
  class: "title"
}, n1 = {
  __name: "PModal",
  props: {
    /** Modal title */
    title: {
      type: String,
      default: ""
    },
    fullscreen: Boolean,
    primaryButtonText: {
      type: String,
      default: "Save"
    },
    secondaryButtonText: {
      type: String,
      default: "Close"
    },
    blur: Boolean,
    modelValue: Boolean,
    hideHeader: Boolean,
    hideFooter: Boolean,
    hideCloseButton: Boolean,
    showMinimize: {
      type: Boolean,
      default: !0
    },
    minimizeText: {
      type: String,
      default: "Minimize"
    },
    maximizeText: {
      type: String,
      default: "Open"
    },
    closeText: {
      type: String,
      default: "Close"
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    dataTestid: {
      type: String,
      default: "modal"
    }
  },
  emits: ["minimize", "update:modelValue", "click:primary", "click:secondary", "close"],
  setup(t, { expose: e, emit: r }) {
    const o = t, n = r, a = X(null), i = X(null), s = X(!1), l = X(!1), c = X(!1), d = X(!1);
    function u() {
      c.value = a.value.scrollTop > 0;
      const m = a.value.scrollHeight - a.value.clientHeight;
      d.value = a.value.scrollTop < m;
    }
    function p(m) {
      n("update:modelValue", m), m ? (a.value.showModal(), u()) : a.value.close();
    }
    function f(m) {
      n("minimize", m), s.value = m, l.value = !m;
    }
    function h(m) {
      o.persistent || o.fullscreen || m.target !== m.currentTarget || p(!1);
    }
    return Le(
      () => o.modelValue,
      (m) => {
        p(m);
      }
    ), Qt(() => {
      p(o.modelValue);
    }), e({
      showModal: () => p(!0),
      close: () => p(!1)
    }), (m, g) => ($(), I("dialog", {
      ref_key: "modal",
      ref: a,
      class: Ne(["modal", {
        fullscreen: t.fullscreen,
        minimized: s.value,
        maximized: l.value,
        blurred: t.blur
      }]),
      "data-testid": t.dataTestid,
      onClose: g[7] || (g[7] = (b) => n("update:modelValue", !1)),
      onClick: h,
      onScroll: u
    }, [
      t.fullscreen && !s.value ? ($(), I("div", Qy, [
        t.showMinimize ? ($(), de(Ct, {
          key: 0,
          variant: "text",
          icon: Ky,
          class: "minimize",
          onClick: g[0] || (g[0] = (b) => f(!0))
        }, {
          default: ve(() => [
            Xe(te(H(Oe)("modal.minimize")), 1)
          ]),
          _: 1
        })) : Q("", !0),
        t.hideCloseButton ? Q("", !0) : ($(), de(Ct, {
          key: 1,
          variant: "text",
          icon: H(bs),
          class: "close",
          onClick: g[1] || (g[1] = (b) => {
            p(!1), n("close");
          })
        }, {
          default: ve(() => [
            Xe(te(H(Oe)("modal.close")), 1)
          ]),
          _: 1
        }, 8, ["icon"]))
      ])) : Q("", !0),
      J("div", {
        ref_key: "modalContent",
        ref: i,
        class: "inner"
      }, [
        t.hideHeader ? Q("", !0) : ($(), I("header", {
          key: 0,
          class: Ne(["header", { "header-shadow": !t.fullscreen && c.value }])
        }, [
          Ee(m.$slots, "header", Zo(Xl({ minimize: s.value })), () => [
            J("div", e1, [
              !t.fullscreen && !t.hideCloseButton ? ($(), de(Ct, {
                key: 0,
                icon: H(bs),
                variant: "text",
                class: "close",
                onClick: g[2] || (g[2] = (b) => p(!1))
              }, null, 8, ["icon"])) : Q("", !0)
            ])
          ]),
          s.value && t.fullscreen ? ($(), I("div", t1, [
            fe(Ct, {
              icon: Gy,
              onClick: g[3] || (g[3] = (b) => f(!1))
            }, {
              default: ve(() => [
                Xe(te(H(Oe)("modal.open")), 1)
              ]),
              _: 1
            }),
            fe(Ct, {
              icon: H(bs),
              variant: "secondary",
              onClick: g[4] || (g[4] = (b) => p(!1))
            }, {
              default: ve(() => [
                Xe(te(H(Oe)("modal.close")), 1)
              ]),
              _: 1
            }, 8, ["icon"])
          ])) : Q("", !0)
        ], 2)),
        s.value ? Q("", !0) : ($(), I("div", r1, [
          t.title ? ($(), I("h2", o1, te(t.title), 1)) : Q("", !0),
          Ee(m.$slots, "default")
        ])),
        !t.fullscreen && !t.hideFooter || !s.value && t.fullscreen && m.$slots.footer ? ($(), I("footer", {
          key: 2,
          class: Ne(["footer", { "footer-shadow": !t.fullscreen && d.value }])
        }, [
          Ee(m.$slots, "footer", {}, () => [
            t.fullscreen ? Q("", !0) : ($(), I(De, { key: 0 }, [
              fe(Ct, {
                type: "button",
                variant: "secondary",
                "data-testid": "secondary-button",
                onClick: g[5] || (g[5] = (b) => n("click:secondary"))
              }, {
                default: ve(() => [
                  Xe(te(t.secondaryButtonText), 1)
                ]),
                _: 1
              }),
              fe(Ct, {
                type: "button",
                "data-testid": "primary-button",
                onClick: g[6] || (g[6] = (b) => n("click:primary"))
              }, {
                default: ve(() => [
                  Xe(te(t.primaryButtonText), 1)
                ]),
                _: 1
              })
            ], 64))
          ])
        ], 2)) : Q("", !0)
      ], 512)
    ], 42, Zy));
  }
}, Mf = /* @__PURE__ */ Te(n1, [["__scopeId", "data-v-02194152"]]);
function ws(t, e = "nl-NL", r = "EUR") {
  let o = t;
  return typeof o != "number" && (o = parseFloat(t.replace(",", "."))), new Intl.NumberFormat(e, { style: "currency", currency: r }).format(o);
}
const a1 = { class: "inner" }, i1 = { class: "title" }, s1 = {
  key: 0,
  class: "subtitle"
}, l1 = {
  key: 2,
  class: "reference"
}, c1 = { class: "value" }, d1 = { class: "footer-wrapper" }, u1 = { class: "right" }, p1 = {
  key: 0,
  class: "sub-total"
}, f1 = {
  key: 0,
  class: "label"
}, h1 = { class: "decimal" }, m1 = { class: "sub-price" }, g1 = { class: "label" }, v1 = { class: "shipping" }, b1 = { class: "sub-price" }, w1 = { class: "label" }, y1 = { class: "packaging" }, x1 = {
  key: 1,
  class: "excluded-from-price"
}, k1 = { class: "desktop" }, $1 = { class: "mobile" }, S1 = {
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
    /** Text in the submit button */
    submit: {
      type: String,
      default: ""
    },
    /** Icon in the submit button */
    submitIcon: {
      type: Function,
      default: By
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
    const o = t, n = r, a = X(!1), i = X(null), s = X(null), l = W(() => o.submit ? o.submit : Oe("product-config-modal.add_to_cart")), c = W(() => o.submit ? o.submit : Oe("product-config-modal.add")), d = W(() => o.priceSubtext ? o.priceSubtext : Oe("product-config-modal.price_excluding")), u = W(() => {
      if (o.product && o.product.price) {
        let [h, m] = ws(o.product.price, o.lang, o.currency).toString().split(",");
        return m && (h = `${h},`), {
          whole: h,
          decimal: m
        };
      }
      return null;
    });
    function p() {
      s.value.showModal();
    }
    function f() {
      s.value.close();
    }
    return e({
      showModal: p,
      close: f
    }), (h, m) => ($(), de(Mf, {
      ref_key: "modal",
      ref: s,
      class: "product-config-modal",
      fullscreen: "",
      "show-minimize": t.showMinimize,
      "data-testid": "product-config-modal",
      onMinimize: m[5] || (m[5] = (g) => a.value = g),
      onClose: m[6] || (m[6] = (g) => n("close"))
    }, {
      header: ve(() => [
        t.product.image ? ($(), de(Ef, {
          key: 0,
          class: "product-image",
          mobile: t.product.imageMobile,
          tablet: t.product.imageTablet,
          image: t.product.image,
          width: a.value ? 88 : 136,
          rounded: 8,
          alt: `${t.product.title} image`
        }, null, 8, ["mobile", "tablet", "image", "width", "alt"])) : Q("", !0),
        J("div", a1, [
          J("h2", i1, te(t.product.name), 1),
          !a.value && t.subTitle ? ($(), I("span", s1, [
            fe(Hr, { icon: H(oc) }, null, 8, ["icon"]),
            Xe(" " + te(t.subTitle), 1)
          ])) : Q("", !0),
          !a.value && t.showReferenceField ? ($(), de(Pd, {
            key: 1,
            id: "reference",
            modelValue: i.value,
            "onUpdate:modelValue": [
              m[0] || (m[0] = (g) => i.value = g),
              m[1] || (m[1] = (g) => n("update:reference", g))
            ]
          }, null, 8, ["modelValue"])) : a.value && i.value ? ($(), I("span", l1, [
            Xe(te(h.referenceLabel) + ": ", 1),
            J("span", c1, te(i.value), 1)
          ])) : Q("", !0)
        ]),
        !a.value && t.showReferenceField ? ($(), de(Pd, {
          key: 1,
          id: "reference",
          modelValue: i.value,
          "onUpdate:modelValue": [
            m[2] || (m[2] = (g) => i.value = g),
            m[3] || (m[3] = (g) => n("update:reference", g))
          ]
        }, null, 8, ["modelValue"])) : Q("", !0)
      ]),
      footer: ve(() => [
        J("div", d1, [
          t.specs ? ($(), de(Ct, {
            key: 0,
            size: "large",
            variant: "secondary",
            class: "specifications"
          }, {
            default: ve(() => [
              Xe(te(H(Oe)("product-config-modal.specifications")), 1)
            ]),
            _: 1
          })) : Q("", !0),
          J("div", u1, [
            u.value ? ($(), I("div", p1, [
              J("span", {
                class: Ne(["price", { small: t.extendedPricing }])
              }, [
                t.extendedPricing ? ($(), I("span", f1, te(H(Oe)("product-config-modal.total")), 1)) : Q("", !0),
                J("span", null, te(u.value.whole), 1),
                J("span", h1, te(u.value.decimal), 1)
              ], 2),
              t.extendedPricing ? ($(), I(De, { key: 0 }, [
                J("span", m1, [
                  J("span", g1, te(H(Oe)("product-config-modal.shipping_costs")), 1),
                  J("span", v1, te(H(ws)(t.product.shipping, t.lang, t.currency)), 1)
                ]),
                J("span", b1, [
                  J("span", w1, te(H(Oe)("product-config-modal.packaging_costs")), 1),
                  J("span", y1, te(H(ws)(t.product.packaging, t.lang, t.currency)), 1)
                ])
              ], 64)) : ($(), I("span", x1, te(d.value), 1))
            ])) : Q("", !0),
            fe(Ct, {
              disabled: !t.canOrder,
              class: "add-to-cart",
              size: "large",
              icon: t.submitIcon,
              onClick: m[4] || (m[4] = (g) => n("submit:product-config"))
            }, {
              default: ve(() => [
                J("span", k1, te(l.value), 1),
                J("span", $1, te(c.value), 1)
              ]),
              _: 1
            }, 8, ["disabled", "icon"])
          ])
        ])
      ]),
      default: ve(() => [
        Ee(h.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["show-minimize"]));
  }
}, _1 = /* @__PURE__ */ Te(S1, [["__scopeId", "data-v-2e62c2b4"]]), C1 = {
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
    const e = X(null);
    function r(n) {
      const a = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((i) => `${i}:not([tabindex="-1"]):not([disabled])`).join(", ");
      return [...n.querySelectorAll(a)];
    }
    function o(n) {
      var a, i;
      if (!["ArrowUp", "ArrowDown"].includes(n.key))
        return;
      const s = r(e.value), l = s.indexOf(n.target);
      n.key === "ArrowDown" ? (a = s[l + 1]) == null || a.focus() : n.key === "ArrowUp" && ((i = s[l - 1]) == null || i.focus());
    }
    return (n, a) => ($(), I("div", {
      ref_key: "list",
      ref: e,
      class: Ne(["list", { grid: t.grid }]),
      style: _o(`column-gap: ${t.gapRow}; row-gap: ${t.gapColumn};`),
      "data-testid": "list",
      onKeydown: o
    }, [
      ($(!0), I(De, null, Dr(t.items, (i, s) => Ee(n.$slots, "default", {
        key: s,
        index: s,
        item: i
      }, void 0, !0)), 128))
    ], 38));
  }
}, O1 = /* @__PURE__ */ Te(C1, [["__scopeId", "data-v-7f3c5a6e"]]), E1 = ["data-testid", "tabindex"], M1 = {
  key: 0,
  class: "prepend"
}, T1 = { class: "content" }, A1 = {
  key: 0,
  class: "title"
}, I1 = {
  key: 1,
  class: "subtitle"
}, N1 = { class: "text" }, z1 = {
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
    return (e, r) => ($(), I("div", {
      class: Ne(["list-item", { clickable: t.clickable, active: t.active }]),
      "data-testid": t.clickable ? "clickable" : "list-item",
      tabindex: t.disabled ? -1 : 0
    }, [
      e.$slots.prepend ? ($(), I("div", M1, [
        Ee(e.$slots, "prepend", {}, void 0, !0)
      ])) : Q("", !0),
      J("div", T1, [
        Ee(e.$slots, "content", {}, () => [
          t.title ? ($(), I("span", A1, te(t.title), 1)) : Q("", !0),
          t.subtitle ? ($(), I("span", I1, te(t.subtitle), 1)) : Q("", !0),
          J("span", N1, te(t.text), 1)
        ], !0)
      ])
    ], 10, E1));
  }
}, ys = /* @__PURE__ */ Te(z1, [["__scopeId", "data-v-8cf71036"]]);
function Tf(t) {
  return t instanceof Map ? t.clear = t.delete = t.set = function() {
    throw new Error("map is read-only");
  } : t instanceof Set && (t.add = t.clear = t.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach((e) => {
    const r = t[e], o = typeof r;
    (o === "object" || o === "function") && !Object.isFrozen(r) && Tf(r);
  }), t;
}
let Rd = class {
  /**
   * @param {CompiledMode} mode
   */
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
};
function Af(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function Pr(t, ...e) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const o in t)
    r[o] = t[o];
  return e.forEach(function(o) {
    for (const n in o)
      r[n] = o[n];
  }), /** @type {T} */
  r;
}
const j1 = "</span>", Vd = (t) => !!t.scope, P1 = (t, { prefix: e }) => {
  if (t.startsWith("language:"))
    return t.replace("language:", "language-");
  if (t.includes(".")) {
    const r = t.split(".");
    return [
      `${e}${r.shift()}`,
      ...r.map((o, n) => `${o}${"_".repeat(n + 1)}`)
    ].join(" ");
  }
  return `${e}${t}`;
};
let R1 = class {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(e, r) {
    this.buffer = "", this.classPrefix = r.classPrefix, e.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(e) {
    this.buffer += Af(e);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(e) {
    if (!Vd(e)) return;
    const r = P1(
      e.scope,
      { prefix: this.classPrefix }
    );
    this.span(r);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(e) {
    Vd(e) && (this.buffer += j1);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
};
const Ld = (t = {}) => {
  const e = { children: [] };
  return Object.assign(e, t), e;
};
let V1 = class If {
  constructor() {
    this.rootNode = Ld(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(e) {
    this.top.children.push(e);
  }
  /** @param {string} scope */
  openNode(e) {
    const r = Ld({ scope: e });
    this.add(r), this.stack.push(r);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); ) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(e, r) {
    return typeof r == "string" ? e.addText(r) : r.children && (e.openNode(r), r.children.forEach((o) => this._walk(e, o)), e.closeNode(r)), e;
  }
  /**
   * @param {Node} node
   */
  static _collapse(e) {
    typeof e != "string" && e.children && (e.children.every((r) => typeof r == "string") ? e.children = [e.children.join("")] : e.children.forEach((r) => {
      If._collapse(r);
    }));
  }
}, L1 = class extends V1 {
  /**
   * @param {*} options
   */
  constructor(e) {
    super(), this.options = e;
  }
  /**
   * @param {string} text
   */
  addText(e) {
    e !== "" && this.add(e);
  }
  /** @param {string} scope */
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(e, r) {
    const o = e.root;
    r && (o.scope = `language:${r}`), this.add(o);
  }
  toHTML() {
    return new R1(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
};
function Gn(t) {
  return t ? typeof t == "string" ? t : t.source : null;
}
function Nf(t) {
  return Eo("(?=", t, ")");
}
function D1(t) {
  return Eo("(?:", t, ")*");
}
function B1(t) {
  return Eo("(?:", t, ")?");
}
function Eo(...t) {
  return t.map((e) => Gn(e)).join("");
}
function F1(t) {
  const e = t[t.length - 1];
  return typeof e == "object" && e.constructor === Object ? (t.splice(t.length - 1, 1), e) : {};
}
function sc(...t) {
  return "(" + (F1(t).capture ? "" : "?:") + t.map((e) => Gn(e)).join("|") + ")";
}
function zf(t) {
  return new RegExp(t.toString() + "|").exec("").length - 1;
}
function H1(t, e) {
  const r = t && t.exec(e);
  return r && r.index === 0;
}
const q1 = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function lc(t, { joinWith: e }) {
  let r = 0;
  return t.map((o) => {
    r += 1;
    const n = r;
    let a = Gn(o), i = "";
    for (; a.length > 0; ) {
      const s = q1.exec(a);
      if (!s) {
        i += a;
        break;
      }
      i += a.substring(0, s.index), a = a.substring(s.index + s[0].length), s[0][0] === "\\" && s[1] ? i += "\\" + String(Number(s[1]) + n) : (i += s[0], s[0] === "(" && r++);
    }
    return i;
  }).map((o) => `(${o})`).join(e);
}
const W1 = /\b\B/, jf = "[a-zA-Z]\\w*", cc = "[a-zA-Z_]\\w*", Pf = "\\b\\d+(\\.\\d+)?", Rf = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Vf = "\\b(0b[01]+)", U1 = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", K1 = (t = {}) => {
  const e = /^#![ ]*\//;
  return t.binary && (t.begin = Eo(
    e,
    /.*\b/,
    t.binary,
    /\b.*/
  )), Pr({
    scope: "meta",
    begin: e,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (r, o) => {
      r.index !== 0 && o.ignoreMatch();
    }
  }, t);
}, Zn = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, J1 = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [Zn]
}, Y1 = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [Zn]
}, X1 = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, Ji = function(t, e, r = {}) {
  const o = Pr(
    {
      scope: "comment",
      begin: t,
      end: e,
      contains: []
    },
    r
  );
  o.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const n = sc(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return o.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: Eo(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        n,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), o;
}, G1 = Ji("//", "$"), Z1 = Ji("/\\*", "\\*/"), Q1 = Ji("#", "$"), ex = {
  scope: "number",
  begin: Pf,
  relevance: 0
}, tx = {
  scope: "number",
  begin: Rf,
  relevance: 0
}, rx = {
  scope: "number",
  begin: Vf,
  relevance: 0
}, ox = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    Zn,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [Zn]
    }
  ]
}, nx = {
  scope: "title",
  begin: jf,
  relevance: 0
}, ax = {
  scope: "title",
  begin: cc,
  relevance: 0
}, ix = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + cc,
  relevance: 0
}, sx = function(t) {
  return Object.assign(
    t,
    {
      /** @type {ModeCallback} */
      "on:begin": (e, r) => {
        r.data._beginMatch = e[1];
      },
      /** @type {ModeCallback} */
      "on:end": (e, r) => {
        r.data._beginMatch !== e[1] && r.ignoreMatch();
      }
    }
  );
};
var Oa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: J1,
  BACKSLASH_ESCAPE: Zn,
  BINARY_NUMBER_MODE: rx,
  BINARY_NUMBER_RE: Vf,
  COMMENT: Ji,
  C_BLOCK_COMMENT_MODE: Z1,
  C_LINE_COMMENT_MODE: G1,
  C_NUMBER_MODE: tx,
  C_NUMBER_RE: Rf,
  END_SAME_AS_BEGIN: sx,
  HASH_COMMENT_MODE: Q1,
  IDENT_RE: jf,
  MATCH_NOTHING_RE: W1,
  METHOD_GUARD: ix,
  NUMBER_MODE: ex,
  NUMBER_RE: Pf,
  PHRASAL_WORDS_MODE: X1,
  QUOTE_STRING_MODE: Y1,
  REGEXP_MODE: ox,
  RE_STARTERS_RE: U1,
  SHEBANG: K1,
  TITLE_MODE: nx,
  UNDERSCORE_IDENT_RE: cc,
  UNDERSCORE_TITLE_MODE: ax
});
function lx(t, e) {
  t.input[t.index - 1] === "." && e.ignoreMatch();
}
function cx(t, e) {
  t.className !== void 0 && (t.scope = t.className, delete t.className);
}
function dx(t, e) {
  e && t.beginKeywords && (t.begin = "\\b(" + t.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", t.__beforeBegin = lx, t.keywords = t.keywords || t.beginKeywords, delete t.beginKeywords, t.relevance === void 0 && (t.relevance = 0));
}
function ux(t, e) {
  Array.isArray(t.illegal) && (t.illegal = sc(...t.illegal));
}
function px(t, e) {
  if (t.match) {
    if (t.begin || t.end) throw new Error("begin & end are not supported with match");
    t.begin = t.match, delete t.match;
  }
}
function fx(t, e) {
  t.relevance === void 0 && (t.relevance = 1);
}
const hx = (t, e) => {
  if (!t.beforeMatch) return;
  if (t.starts) throw new Error("beforeMatch cannot be used with starts");
  const r = Object.assign({}, t);
  Object.keys(t).forEach((o) => {
    delete t[o];
  }), t.keywords = r.keywords, t.begin = Eo(r.beforeMatch, Nf(r.begin)), t.starts = {
    relevance: 0,
    contains: [
      Object.assign(r, { endsParent: !0 })
    ]
  }, t.relevance = 0, delete r.beforeMatch;
}, mx = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], gx = "keyword";
function Lf(t, e, r = gx) {
  const o = /* @__PURE__ */ Object.create(null);
  return typeof t == "string" ? n(r, t.split(" ")) : Array.isArray(t) ? n(r, t) : Object.keys(t).forEach(function(a) {
    Object.assign(
      o,
      Lf(t[a], e, a)
    );
  }), o;
  function n(a, i) {
    e && (i = i.map((s) => s.toLowerCase())), i.forEach(function(s) {
      const l = s.split("|");
      o[l[0]] = [a, vx(l[0], l[1])];
    });
  }
}
function vx(t, e) {
  return e ? Number(e) : bx(t) ? 0 : 1;
}
function bx(t) {
  return mx.includes(t.toLowerCase());
}
const Dd = {}, po = (t) => {
  console.error(t);
}, Bd = (t, ...e) => {
  console.log(`WARN: ${t}`, ...e);
}, jo = (t, e) => {
  Dd[`${t}/${e}`] || (console.log(`Deprecated as of ${t}. ${e}`), Dd[`${t}/${e}`] = !0);
}, di = new Error();
function Df(t, e, { key: r }) {
  let o = 0;
  const n = t[r], a = {}, i = {};
  for (let s = 1; s <= e.length; s++)
    i[s + o] = n[s], a[s + o] = !0, o += zf(e[s - 1]);
  t[r] = i, t[r]._emit = a, t[r]._multi = !0;
}
function wx(t) {
  if (Array.isArray(t.begin)) {
    if (t.skip || t.excludeBegin || t.returnBegin)
      throw po("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), di;
    if (typeof t.beginScope != "object" || t.beginScope === null)
      throw po("beginScope must be object"), di;
    Df(t, t.begin, { key: "beginScope" }), t.begin = lc(t.begin, { joinWith: "" });
  }
}
function yx(t) {
  if (Array.isArray(t.end)) {
    if (t.skip || t.excludeEnd || t.returnEnd)
      throw po("skip, excludeEnd, returnEnd not compatible with endScope: {}"), di;
    if (typeof t.endScope != "object" || t.endScope === null)
      throw po("endScope must be object"), di;
    Df(t, t.end, { key: "endScope" }), t.end = lc(t.end, { joinWith: "" });
  }
}
function xx(t) {
  t.scope && typeof t.scope == "object" && t.scope !== null && (t.beginScope = t.scope, delete t.scope);
}
function kx(t) {
  xx(t), typeof t.beginScope == "string" && (t.beginScope = { _wrap: t.beginScope }), typeof t.endScope == "string" && (t.endScope = { _wrap: t.endScope }), wx(t), yx(t);
}
function $x(t) {
  function e(i, s) {
    return new RegExp(
      Gn(i),
      "m" + (t.case_insensitive ? "i" : "") + (t.unicodeRegex ? "u" : "") + (s ? "g" : "")
    );
  }
  class r {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(s, l) {
      l.position = this.position++, this.matchIndexes[this.matchAt] = l, this.regexes.push([l, s]), this.matchAt += zf(s) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const s = this.regexes.map((l) => l[1]);
      this.matcherRe = e(lc(s, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const l = this.matcherRe.exec(s);
      if (!l)
        return null;
      const c = l.findIndex((u, p) => p > 0 && u !== void 0), d = this.matchIndexes[c];
      return l.splice(0, c), Object.assign(l, d);
    }
  }
  class o {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(s) {
      if (this.multiRegexes[s]) return this.multiRegexes[s];
      const l = new r();
      return this.rules.slice(s).forEach(([c, d]) => l.addRule(c, d)), l.compile(), this.multiRegexes[s] = l, l;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(s, l) {
      this.rules.push([s, l]), l.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(s) {
      const l = this.getMatcher(this.regexIndex);
      l.lastIndex = this.lastIndex;
      let c = l.exec(s);
      if (this.resumingScanAtSamePosition() && !(c && c.index === this.lastIndex)) {
        const d = this.getMatcher(0);
        d.lastIndex = this.lastIndex + 1, c = d.exec(s);
      }
      return c && (this.regexIndex += c.position + 1, this.regexIndex === this.count && this.considerAll()), c;
    }
  }
  function n(i) {
    const s = new o();
    return i.contains.forEach((l) => s.addRule(l.begin, { rule: l, type: "begin" })), i.terminatorEnd && s.addRule(i.terminatorEnd, { type: "end" }), i.illegal && s.addRule(i.illegal, { type: "illegal" }), s;
  }
  function a(i, s) {
    const l = (
      /** @type CompiledMode */
      i
    );
    if (i.isCompiled) return l;
    [
      cx,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      px,
      kx,
      hx
    ].forEach((d) => d(i, s)), t.compilerExtensions.forEach((d) => d(i, s)), i.__beforeBegin = null, [
      dx,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      ux,
      // default to 1 relevance if not specified
      fx
    ].forEach((d) => d(i, s)), i.isCompiled = !0;
    let c = null;
    return typeof i.keywords == "object" && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), c = i.keywords.$pattern, delete i.keywords.$pattern), c = c || /\w+/, i.keywords && (i.keywords = Lf(i.keywords, t.case_insensitive)), l.keywordPatternRe = e(c, !0), s && (i.begin || (i.begin = /\B|\b/), l.beginRe = e(l.begin), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (l.endRe = e(l.end)), l.terminatorEnd = Gn(l.end) || "", i.endsWithParent && s.terminatorEnd && (l.terminatorEnd += (i.end ? "|" : "") + s.terminatorEnd)), i.illegal && (l.illegalRe = e(
      /** @type {RegExp | string} */
      i.illegal
    )), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map(function(d) {
      return Sx(d === "self" ? i : d);
    })), i.contains.forEach(function(d) {
      a(
        /** @type Mode */
        d,
        l
      );
    }), i.starts && a(i.starts, s), l.matcher = n(l), l;
  }
  if (t.compilerExtensions || (t.compilerExtensions = []), t.contains && t.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return t.classNameAliases = Pr(t.classNameAliases || {}), a(
    /** @type Mode */
    t
  );
}
function Bf(t) {
  return t ? t.endsWithParent || Bf(t.starts) : !1;
}
function Sx(t) {
  return t.variants && !t.cachedVariants && (t.cachedVariants = t.variants.map(function(e) {
    return Pr(t, { variants: null }, e);
  })), t.cachedVariants ? t.cachedVariants : Bf(t) ? Pr(t, { starts: t.starts ? Pr(t.starts) : null }) : Object.isFrozen(t) ? Pr(t) : t;
}
var _x = "11.10.0";
let Cx = class extends Error {
  constructor(e, r) {
    super(e), this.name = "HTMLInjectionError", this.html = r;
  }
};
const xs = Af, Fd = Pr, Hd = Symbol("nomatch"), Ox = 7, Ff = function(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), o = [];
  let n = !0;
  const a = "Could not find the language '{}', did you forget to load/include a language module?", i = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let s = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: L1
  };
  function l(C) {
    return s.noHighlightRe.test(C);
  }
  function c(C) {
    let R = C.className + " ";
    R += C.parentNode ? C.parentNode.className : "";
    const se = s.languageDetectRe.exec(R);
    if (se) {
      const re = _(se[1]);
      return re || (Bd(a.replace("{}", se[1])), Bd("Falling back to no-highlight mode for this block.", C)), re ? se[1] : "no-highlight";
    }
    return R.split(/\s+/).find((re) => l(re) || _(re));
  }
  function d(C, R, se) {
    let re = "", we = "";
    typeof R == "object" ? (re = C, se = R.ignoreIllegals, we = R.language) : (jo("10.7.0", "highlight(lang, code, ...args) has been deprecated."), jo("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), we = C, re = R), se === void 0 && (se = !0);
    const j = {
      code: re,
      language: we
    };
    _e("before:highlight", j);
    const he = j.result ? j.result : u(j.language, j.code, se);
    return he.code = j.code, _e("after:highlight", he), he;
  }
  function u(C, R, se, re) {
    const we = /* @__PURE__ */ Object.create(null);
    function j(P, Y) {
      return P.keywords[Y];
    }
    function he() {
      if (!N.keywords) {
        D.addText(A);
        return;
      }
      let P = 0;
      N.keywordPatternRe.lastIndex = 0;
      let Y = N.keywordPatternRe.exec(A), oe = "";
      for (; Y; ) {
        oe += A.substring(P, Y.index);
        const ke = V.case_insensitive ? Y[0].toLowerCase() : Y[0], Ae = j(N, ke);
        if (Ae) {
          const [We, rt] = Ae;
          if (D.addText(oe), oe = "", we[ke] = (we[ke] || 0) + 1, we[ke] <= Ox && (ie += rt), We.startsWith("_"))
            oe += Y[0];
          else {
            const T = V.classNameAliases[We] || We;
            ze(Y[0], T);
          }
        } else
          oe += Y[0];
        P = N.keywordPatternRe.lastIndex, Y = N.keywordPatternRe.exec(A);
      }
      oe += A.substring(P), D.addText(oe);
    }
    function me() {
      if (A === "") return;
      let P = null;
      if (typeof N.subLanguage == "string") {
        if (!e[N.subLanguage]) {
          D.addText(A);
          return;
        }
        P = u(N.subLanguage, A, !0, K[N.subLanguage]), K[N.subLanguage] = /** @type {CompiledMode} */
        P._top;
      } else
        P = f(A, N.subLanguage.length ? N.subLanguage : null);
      N.relevance > 0 && (ie += P.relevance), D.__addSublanguage(P._emitter, P.language);
    }
    function be() {
      N.subLanguage != null ? me() : he(), A = "";
    }
    function ze(P, Y) {
      P !== "" && (D.startScope(Y), D.addText(P), D.endScope());
    }
    function Ye(P, Y) {
      let oe = 1;
      const ke = Y.length - 1;
      for (; oe <= ke; ) {
        if (!P._emit[oe]) {
          oe++;
          continue;
        }
        const Ae = V.classNameAliases[P[oe]] || P[oe], We = Y[oe];
        Ae ? ze(We, Ae) : (A = We, he(), A = ""), oe++;
      }
    }
    function Be(P, Y) {
      return P.scope && typeof P.scope == "string" && D.openNode(V.classNameAliases[P.scope] || P.scope), P.beginScope && (P.beginScope._wrap ? (ze(A, V.classNameAliases[P.beginScope._wrap] || P.beginScope._wrap), A = "") : P.beginScope._multi && (Ye(P.beginScope, Y), A = "")), N = Object.create(P, { parent: { value: N } }), N;
    }
    function It(P, Y, oe) {
      let ke = H1(P.endRe, oe);
      if (ke) {
        if (P["on:end"]) {
          const Ae = new Rd(P);
          P["on:end"](Y, Ae), Ae.isMatchIgnored && (ke = !1);
        }
        if (ke) {
          for (; P.endsParent && P.parent; )
            P = P.parent;
          return P;
        }
      }
      if (P.endsWithParent)
        return It(P.parent, Y, oe);
    }
    function tt(P) {
      return N.matcher.regexIndex === 0 ? (A += P[0], 1) : (pe = !0, 0);
    }
    function Ht(P) {
      const Y = P[0], oe = P.rule, ke = new Rd(oe), Ae = [oe.__beforeBegin, oe["on:begin"]];
      for (const We of Ae)
        if (We && (We(P, ke), ke.isMatchIgnored))
          return tt(Y);
      return oe.skip ? A += Y : (oe.excludeBegin && (A += Y), be(), !oe.returnBegin && !oe.excludeBegin && (A = Y)), Be(oe, P), oe.returnBegin ? 0 : Y.length;
    }
    function br(P) {
      const Y = P[0], oe = R.substring(P.index), ke = It(N, P, oe);
      if (!ke)
        return Hd;
      const Ae = N;
      N.endScope && N.endScope._wrap ? (be(), ze(Y, N.endScope._wrap)) : N.endScope && N.endScope._multi ? (be(), Ye(N.endScope, P)) : Ae.skip ? A += Y : (Ae.returnEnd || Ae.excludeEnd || (A += Y), be(), Ae.excludeEnd && (A = Y));
      do
        N.scope && D.closeNode(), !N.skip && !N.subLanguage && (ie += N.relevance), N = N.parent;
      while (N !== ke.parent);
      return ke.starts && Be(ke.starts, P), Ae.returnEnd ? 0 : Y.length;
    }
    function w() {
      const P = [];
      for (let Y = N; Y !== V; Y = Y.parent)
        Y.scope && P.unshift(Y.scope);
      P.forEach((Y) => D.openNode(Y));
    }
    let k = {};
    function O(P, Y) {
      const oe = Y && Y[0];
      if (A += P, oe == null)
        return be(), 0;
      if (k.type === "begin" && Y.type === "end" && k.index === Y.index && oe === "") {
        if (A += R.slice(Y.index, Y.index + 1), !n) {
          const ke = new Error(`0 width match regex (${C})`);
          throw ke.languageName = C, ke.badRule = k.rule, ke;
        }
        return 1;
      }
      if (k = Y, Y.type === "begin")
        return Ht(Y);
      if (Y.type === "illegal" && !se) {
        const ke = new Error('Illegal lexeme "' + oe + '" for mode "' + (N.scope || "<unnamed>") + '"');
        throw ke.mode = N, ke;
      } else if (Y.type === "end") {
        const ke = br(Y);
        if (ke !== Hd)
          return ke;
      }
      if (Y.type === "illegal" && oe === "")
        return 1;
      if (ne > 1e5 && ne > Y.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return A += oe, oe.length;
    }
    const V = _(C);
    if (!V)
      throw po(a.replace("{}", C)), new Error('Unknown language: "' + C + '"');
    const L = $x(V);
    let F = "", N = re || L;
    const K = {}, D = new s.__emitter(s);
    w();
    let A = "", ie = 0, G = 0, ne = 0, pe = !1;
    try {
      if (V.__emitTokens)
        V.__emitTokens(R, D);
      else {
        for (N.matcher.considerAll(); ; ) {
          ne++, pe ? pe = !1 : N.matcher.considerAll(), N.matcher.lastIndex = G;
          const P = N.matcher.exec(R);
          if (!P) break;
          const Y = R.substring(G, P.index), oe = O(Y, P);
          G = P.index + oe;
        }
        O(R.substring(G));
      }
      return D.finalize(), F = D.toHTML(), {
        language: C,
        value: F,
        relevance: ie,
        illegal: !1,
        _emitter: D,
        _top: N
      };
    } catch (P) {
      if (P.message && P.message.includes("Illegal"))
        return {
          language: C,
          value: xs(R),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: P.message,
            index: G,
            context: R.slice(G - 100, G + 100),
            mode: P.mode,
            resultSoFar: F
          },
          _emitter: D
        };
      if (n)
        return {
          language: C,
          value: xs(R),
          illegal: !1,
          relevance: 0,
          errorRaised: P,
          _emitter: D,
          _top: N
        };
      throw P;
    }
  }
  function p(C) {
    const R = {
      value: xs(C),
      illegal: !1,
      relevance: 0,
      _top: i,
      _emitter: new s.__emitter(s)
    };
    return R._emitter.addText(C), R;
  }
  function f(C, R) {
    R = R || s.languages || Object.keys(e);
    const se = p(C), re = R.filter(_).filter(U).map(
      (be) => u(be, C, !1)
    );
    re.unshift(se);
    const we = re.sort((be, ze) => {
      if (be.relevance !== ze.relevance) return ze.relevance - be.relevance;
      if (be.language && ze.language) {
        if (_(be.language).supersetOf === ze.language)
          return 1;
        if (_(ze.language).supersetOf === be.language)
          return -1;
      }
      return 0;
    }), [j, he] = we, me = j;
    return me.secondBest = he, me;
  }
  function h(C, R, se) {
    const re = R && r[R] || se;
    C.classList.add("hljs"), C.classList.add(`language-${re}`);
  }
  function m(C) {
    let R = null;
    const se = c(C);
    if (l(se)) return;
    if (_e(
      "before:highlightElement",
      { el: C, language: se }
    ), C.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
      return;
    }
    if (C.children.length > 0 && (s.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), s.throwUnescapedHTML))
      throw new Cx(
        "One of your code blocks includes unescaped HTML.",
        C.innerHTML
      );
    R = C;
    const re = R.textContent, we = se ? d(re, { language: se, ignoreIllegals: !0 }) : f(re);
    C.innerHTML = we.value, C.dataset.highlighted = "yes", h(C, se, we.language), C.result = {
      language: we.language,
      // TODO: remove with version 11.0
      re: we.relevance,
      relevance: we.relevance
    }, we.secondBest && (C.secondBest = {
      language: we.secondBest.language,
      relevance: we.secondBest.relevance
    }), _e("after:highlightElement", { el: C, result: we, text: re });
  }
  function g(C) {
    s = Fd(s, C);
  }
  const b = () => {
    v(), jo("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function y() {
    v(), jo("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let x = !1;
  function v() {
    if (document.readyState === "loading") {
      x = !0;
      return;
    }
    document.querySelectorAll(s.cssSelector).forEach(m);
  }
  function S() {
    x && v();
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", S, !1);
  function M(C, R) {
    let se = null;
    try {
      se = R(t);
    } catch (re) {
      if (po("Language definition for '{}' could not be registered.".replace("{}", C)), n)
        po(re);
      else
        throw re;
      se = i;
    }
    se.name || (se.name = C), e[C] = se, se.rawDefinition = R.bind(null, t), se.aliases && E(se.aliases, { languageName: C });
  }
  function q(C) {
    delete e[C];
    for (const R of Object.keys(r))
      r[R] === C && delete r[R];
  }
  function B() {
    return Object.keys(e);
  }
  function _(C) {
    return C = (C || "").toLowerCase(), e[C] || e[r[C]];
  }
  function E(C, { languageName: R }) {
    typeof C == "string" && (C = [C]), C.forEach((se) => {
      r[se.toLowerCase()] = R;
    });
  }
  function U(C) {
    const R = _(C);
    return R && !R.disableAutodetect;
  }
  function z(C) {
    C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = (R) => {
      C["before:highlightBlock"](
        Object.assign({ block: R.el }, R)
      );
    }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = (R) => {
      C["after:highlightBlock"](
        Object.assign({ block: R.el }, R)
      );
    });
  }
  function Z(C) {
    z(C), o.push(C);
  }
  function ge(C) {
    const R = o.indexOf(C);
    R !== -1 && o.splice(R, 1);
  }
  function _e(C, R) {
    const se = C;
    o.forEach(function(re) {
      re[se] && re[se](R);
    });
  }
  function ye(C) {
    return jo("10.7.0", "highlightBlock will be removed entirely in v12.0"), jo("10.7.0", "Please use highlightElement now."), m(C);
  }
  Object.assign(t, {
    highlight: d,
    highlightAuto: f,
    highlightAll: v,
    highlightElement: m,
    // TODO: Remove with v12 API
    highlightBlock: ye,
    configure: g,
    initHighlighting: b,
    initHighlightingOnLoad: y,
    registerLanguage: M,
    unregisterLanguage: q,
    listLanguages: B,
    getLanguage: _,
    registerAliases: E,
    autoDetection: U,
    inherit: Fd,
    addPlugin: Z,
    removePlugin: ge
  }), t.debugMode = function() {
    n = !1;
  }, t.safeMode = function() {
    n = !0;
  }, t.versionString = _x, t.regex = {
    concat: Eo,
    lookahead: Nf,
    either: sc,
    optional: B1,
    anyNumberOfTimes: D1
  };
  for (const C in Oa)
    typeof Oa[C] == "object" && Tf(Oa[C]);
  return Object.assign(t, Oa), t;
}, Qn = Ff({});
Qn.newInstance = () => Ff({});
Qn.HighlightJS = Qn;
Qn.default = Qn;
function sl(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const Ea = {
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
};
({
  ...Xn.props
});
const Ex = {
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
    return nb((e) => ({
      "0705668d": t.thickness
    })), (e, r) => ($(), I("hr", {
      class: Ne(["divider", { vertical: t.vertical, flex: t.flex }])
    }, null, 2));
  }
}, Mx = /* @__PURE__ */ Te(Ex, [["__scopeId", "data-v-7f654821"]]);
function Tx(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
const Ax = { class: "label" }, Ix = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], Nx = {
  key: 0,
  class: "append"
}, zx = {
  key: 0,
  class: "error-message"
}, jx = {
  __name: "PCheckbox",
  props: /* @__PURE__ */ av({
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
    const e = t, r = Ev(t, "modelValue"), o = e.required ? { checked: { required: ir.withMessage(Oe("checkbox.required"), rw(!0)) } } : null, n = Ui(o, { checked: r });
    return (a, i) => {
      var s, l, c, d;
      return $(), I("div", {
        class: Ne(["checkbox-container", { error: (l = (s = H(n).checked) == null ? void 0 : s.$errors[0]) == null ? void 0 : l.$message, large: t.large }])
      }, [
        J("label", Ax, [
          yo(J("input", Je(a.$attrs, {
            id: t.id,
            "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u),
            class: "checkbox",
            type: "checkbox",
            "data-testid": "checkbox",
            value: t.value,
            disabled: t.disabled,
            required: t.required,
            tabindex: a.$attrs.tabindex,
            indeterminate: t.indeterminate,
            "true-value": t.trueValue,
            "false-value": t.falseValue,
            onBlur: i[1] || (i[1] = (u) => {
              var p;
              return (p = H(n).checked) == null ? void 0 : p.$touch(u);
            })
          }), null, 16, Ix), [
            [uf, r.value]
          ]),
          Ee(a.$slots, "label", {}, () => [
            Xe(te(t.label), 1)
          ], !0),
          a.$slots.append ? ($(), I("span", Nx, [
            Ee(a.$slots, "append", {}, void 0, !0)
          ])) : Q("", !0)
        ]),
        (d = (c = H(n).checked) == null ? void 0 : c.$errors[0]) != null && d.$message ? ($(), I("span", zx, te(H(n).checked.$errors[0].$message), 1)) : Q("", !0)
      ], 2);
    };
  }
}, ks = /* @__PURE__ */ Te(jx, [["__scopeId", "data-v-673fdc04"]]);
function Px(t, e) {
  return $(), I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    J("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vn(t, e) {
  return e.split(".").reduce((r, o) => r[o] ? r[o] : r, t);
}
const Hf = {
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
}, Rx = ["data-testid", "tabindex"], Vx = ["for"], Lx = { class: "flex items-center gap-1" }, Dx = ["onClick"], Bx = {
  key: 2,
  class: "selected-item"
}, Fx = ["id", "placeholder", "disabled", "readonly", "value"], Hx = { class: "action-buttons" }, qx = ["aria-label", "disabled"], Wx = ["disabled"], Ux = {
  key: 1,
  class: "error"
}, Kx = {
  key: 0,
  class: "content-divider"
}, Jx = {
  key: 1,
  class: "no-results"
}, Yx = {
  __name: "_BaseSelect",
  props: {
    ...Hf,
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
    const o = r, n = t, a = Vr("showError", !0), i = X(!1), s = X(!1), l = X(!1), c = X(null), d = X(null), u = X(null), p = X(null), f = X(null), h = X(() => {
    }), m = X(() => {
    }), g = X(() => {
    }), b = W({
      get() {
        return n.multiple && !Array.isArray(n.modelValue) ? [] : n.modelValue;
      },
      set(j) {
        if (n.multiple) {
          o("update:modelValue", j);
          return;
        }
        o("update:modelValue", n.returnObject || !n.itemValue ? j : j == null ? void 0 : j[n.itemValue]);
      }
    }), y = W(() => n.requiredMessage ? n.requiredMessage : n.label ? Oe("input.required_with_label", { label: n.label.toLowerCase() }) : Oe("input.required")), x = W(() => n.required ? { value: { required: ir.withMessage(() => y.value, li) } } : { value: {} }), v = Ui(x.value, { value: b }), S = W(() => {
      var j;
      return !n.required || n.required && !((j = v.value) != null && j.$errors[0]);
    }), M = W(() => {
      var j;
      return !!n.error || ((j = v.value) == null ? void 0 : j.$errors[0]) || !S.value;
    }), q = W(() => Array.isArray(b.value) && b.value.length > 0);
    function B(j) {
      return n.itemValue ? j[n.itemValue] : j;
    }
    function _(j) {
      var he;
      return n.multiple ? ((he = n.modelValue) == null ? void 0 : he.includes(B(j))) || !1 : b.value === B(j);
    }
    function E(j) {
      return j ? typeof n.itemText == "function" ? n.itemText(j) : vn(j, n.itemText) : "";
    }
    function U(j) {
      if (!j)
        return "";
      if (n.grouped) {
        const he = n.items.find(
          (me) => me[n.groupItems].find((be) => B(be) === j)
        )[n.groupItems].find((me) => B(me) === j);
        return E(he);
      }
      return !n.returnObject && n.itemValue ? E(n.items.find((he) => B(he) === j)) : E(j);
    }
    function z(j) {
      b.value.splice(b.value.indexOf(j), 1), o("update:modelValue", b.value);
    }
    function Z(j) {
      if (!n.multiple) {
        b.value = j;
        return;
      }
      if (b.value.includes(B(j))) {
        b.value = b.value.filter((he, me) => me !== b.value.indexOf(B(j)));
        return;
      }
      b.value = [...b.value, B(j)];
    }
    function ge(j) {
      const he = n.returnObject || !n.itemValue ? j[n.groupItems] : j[n.groupItems].map((ze) => ze[n.itemValue]);
      let me = !1, be = !0;
      return he.forEach((ze) => {
        b.value.includes(ze) ? me = !0 : be = !1;
      }), be ? !0 : me ? "indeterminate" : !1;
    }
    function _e(j) {
      const he = n.returnObject || !n.itemValue ? j[n.groupItems] : j[n.groupItems].map((me) => me[n.itemValue]);
      if (ge(j) === !0) {
        he.forEach((me) => {
          z(me);
        });
        return;
      }
      o("update:modelValue", Array.from(/* @__PURE__ */ new Set([...b.value, ...he])));
    }
    function ye(j) {
      i.value = j, o("update:isOpen", j);
    }
    function C(j) {
      l.value = j, o("update:focus", j), !j && o("update:inputValue", null);
    }
    function R() {
      n.behavior === "manual" && m.value(), n.behavior === "focus" && !i.value && requestAnimationFrame(() => {
        p.value.focus();
      });
    }
    function se(j, he) {
      p.value = j, n.behavior === "manual" && (h.value = he.setActivator, m.value = he.toggle, g.value = he.onKeydown);
    }
    async function re() {
      return u;
    }
    const we = W(() => n.inputValue !== null ? n.inputValue : n.multiple ? null : U(b.value));
    return Le(
      () => [l.value, s.value],
      () => {
        !l.value && !s.value && v.value.$touch();
      }
    ), e({
      getSelectContent: re,
      getItemText: E,
      setActivator: h,
      toggle: m,
      onKeydown: g,
      input: p
    }), (j, he) => ($(), de(b0, {
      ref_key: "floatingContainer",
      ref: f,
      class: Ne(["rounded-lg bg-white", { "!rounded-t-none": j.showDivider, shadow: !j.showDivider }]),
      transition: "expand",
      offset: n.offset !== null ? n.offset : 1,
      attach: c.value,
      behavior: t.behavior,
      "close-on-click": !n.multiple,
      "onUpdate:isOpen": ye,
      "onUpdate:focus": C
    }, {
      activator: ve((me) => {
        var be, ze, Ye;
        return [
          J("div", Je(t.behavior === "click" ? { ...j.$attrs, ...me } : null, {
            "data-testid": n.dataTestid,
            class: ["base-select", [n.class, t.behavior, { "is-open": i.value, disabled: n.disabled }]],
            tabindex: t.behavior === "click" && !j.disabled ? 0 : null,
            onFocus: he[5] || (he[5] = (Be) => s.value = !0),
            onBlur: he[6] || (he[6] = (Be) => s.value = !1)
          }), [
            j.label ? ($(), I("label", {
              key: 0,
              class: "input-label",
              for: j.id
            }, [
              J("span", null, te(j.label), 1)
            ], 8, Vx)) : Q("", !0),
            J("div", {
              ref_key: "selectWrapper",
              ref: c,
              class: Ne(["wrapper", { focus: l.value || s.value, "has-error": M.value }])
            }, [
              j.prependIcon ? ($(), de(Ho, {
                key: 0,
                class: "prepend-icon",
                icon: j.prependIcon
              }, null, 8, ["icon"])) : Q("", !0),
              q.value ? ($(), I("div", {
                key: 1,
                ref_key: "selectedItems",
                ref: d,
                class: "selected-items"
              }, [
                ($(!0), I(De, null, Dr(b.value, (Be, It) => ($(), de(ac, {
                  key: It,
                  ref_for: !0,
                  ref: "label",
                  color: "gray",
                  class: "inline-block"
                }, {
                  default: ve(() => [
                    J("div", Lx, [
                      Xe(te(U(Be)) + " ", 1),
                      J("button", {
                        class: "h-4 w-4",
                        type: "button",
                        tabindex: "-1",
                        onClick: fr((tt) => z(Be), ["stop", "prevent"])
                      }, [
                        fe(Ho, { icon: H(sl) }, null, 8, ["icon"])
                      ], 8, Dx)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ], 512)) : !j.multiple && t.behavior === "click" && b.value ? ($(), I("div", Bx, te(U(b.value)), 1)) : Q("", !0),
              t.behavior === "click" ? yo(($(), I("div", {
                key: 3,
                class: "placeholder"
              }, te(n.placeholder), 513)), [
                [Zl, !b.value || b.value.length === 0]
              ]) : ($(), I("input", Je({ key: 4 }, t.behavior === "focus" ? { ...j.$attrs, ...me } : j.$attrs, {
                id: n.id,
                ref: (Be) => se(Be, me),
                placeholder: n.placeholder,
                disabled: n.disabled,
                readonly: n.readonly,
                value: we.value,
                autocomplete: "off",
                class: "ml-2",
                onInput: he[0] || (he[0] = (Be) => j.$emit("update:inputValue", Be.target.value)),
                onBlur: he[1] || (he[1] = (Be) => s.value = !1),
                onFocus: he[2] || (he[2] = (Be) => s.value = !0)
              }), null, 16, Fx)),
              J("div", Hx, [
                n.clearable && (!n.multiple && b.value || n.multiple && ((be = b.value) == null ? void 0 : be.length) > 0) ? ($(), I("button", {
                  key: 0,
                  "aria-label": H(Oe)("input.clear"),
                  class: "clear-button",
                  tabindex: "-1",
                  type: "button",
                  disabled: n.disabled,
                  onClick: [
                    he[3] || (he[3] = (Be) => b.value = n.multiple ? [] : null),
                    he[4] || (he[4] = fr(() => {
                    }, ["stop"]))
                  ]
                }, [
                  fe(Ho, {
                    icon: H(sl),
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])
                ], 8, qx)) : Q("", !0),
                Ee(j.$slots, "inline", {}, () => [
                  j.hideChevron ? Q("", !0) : ($(), I("button", {
                    key: 0,
                    tabindex: "-1",
                    type: "button",
                    disabled: n.disabled,
                    onMousedown: R
                  }, [
                    fe(Ho, {
                      class: Ne(["state-indicator", { "is-open": i.value }]),
                      icon: H(Px)
                    }, null, 8, ["icon", "class"])
                  ], 40, Wx))
                ], !0)
              ])
            ], 2),
            M.value && H(a) ? ($(), I("div", Ux, te((Ye = (ze = H(v).value) == null ? void 0 : ze.$errors[0]) != null && Ye.$message ? H(v).value.$errors[0].$message : n.error), 1)) : Q("", !0)
          ], 16, Rx)
        ];
      }),
      default: ve(() => [
        j.showDivider ? ($(), I("hr", Kx)) : Q("", !0),
        J("div", {
          ref_key: "selectContent",
          ref: u,
          class: "select-content"
        }, [
          Ee(j.$slots, "prepend-list", {}, void 0, !0),
          n.items.length > 0 ? ($(), de(O1, {
            key: 0,
            "gap-column": "0",
            "gap-row": "0",
            items: n.items,
            onKeydown: he[7] || (he[7] = fr(() => {
            }, ["prevent"]))
          }, {
            default: ve(({ item: me }) => [
              n.grouped ? ($(), I(De, { key: 0 }, [
                n.items.indexOf(me) !== 0 ? ($(), de(Mx, { key: 0 })) : Q("", !0),
                n.grouped ? ($(), de(ys, {
                  key: 1,
                  title: me[n.groupText],
                  clickable: n.multiple,
                  disabled: !n.multiple,
                  onClick: (be) => n.multiple && _e(me),
                  onKeydown: lr((be) => n.multiple && _e(me), ["enter"])
                }, ds({ _: 2 }, [
                  n.multiple ? {
                    name: "prepend",
                    fn: ve(() => [
                      fe(ks, {
                        id: `group-${n.items.indexOf(me)}-checkbox`,
                        "model-value": typeof ge(me) == "boolean" ? ge(me) : !1,
                        indeterminate: ge(me) === "indeterminate",
                        tabindex: "-1",
                        class: "mr-4"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : Q("", !0),
                ($(!0), I(De, null, Dr(me[n.groupItems], (be, ze) => ($(), de(ys, {
                  key: ze,
                  clickable: "",
                  active: _(be),
                  text: E(be),
                  onClick: (Ye) => Z(be),
                  onKeydown: lr((Ye) => Z(be), ["enter"])
                }, ds({
                  content: ve(() => [
                    Ee(j.$slots, "option", {
                      selected: _(be),
                      option: be
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  n.multiple ? {
                    name: "prepend",
                    fn: ve(() => [
                      fe(ks, {
                        id: `item-${me[n.groupItems].indexOf(be)}-checkbox`,
                        "model-value": _(be),
                        tabindex: "-1",
                        class: "mr-4"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : ($(), de(ys, {
                key: 1,
                clickable: "",
                active: _(me),
                text: E(me),
                onClick: (be) => Z(me),
                onKeydown: lr((be) => Z(me), ["enter"])
              }, ds({
                content: ve(() => [
                  Ee(j.$slots, "option", {
                    selected: _(me),
                    option: me
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                n.multiple ? {
                  name: "prepend",
                  fn: ve(() => [
                    fe(ks, {
                      id: `item-${n.items.indexOf(me)}-checkbox`,
                      "model-value": _(me),
                      tabindex: "-1",
                      class: "mr-4"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"]))
            ]),
            _: 3
          }, 8, ["items"])) : n.hideNoItemsLabel ? Q("", !0) : ($(), I("div", Jx, te(n.noItemsLabel || H(Oe)("input.no_results")), 1)),
          Ee(j.$slots, "append-list", {}, void 0, !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["class", "offset", "attach", "behavior", "close-on-click"]));
  }
}, Xx = /* @__PURE__ */ Te(Yx, [["__scopeId", "data-v-b2acfacf"]]), qd = {
  __name: "PCombobox",
  props: {
    ...Hf,
    /** Whether the combobox is loading new items in the dropdown */
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "intersect"],
  setup(t, { expose: e, emit: r }) {
    const o = t, n = r, a = W(() => {
      const { loading: x, ...v } = o;
      return v;
    }), i = W({
      get() {
        return o.multiple && !Array.isArray(o.modelValue) ? [o.modelValue] : o.modelValue;
      },
      set(x) {
        n("update:modelValue", x);
      }
    }), s = X(null), l = X(null), c = X(null), d = X(null), u = X(null), p = X(!1), f = X(!1);
    function h() {
      l.value = null, i.value = null, s.value.blur();
    }
    const m = W(() => !l.value || o.serverside ? o.items : o.itemText ? o.grouped ? o.items.filter(
      (x) => x[o.groupItems].some(
        (v) => s.value.getItemText(v).toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map((x) => {
      const v = x[o.groupItems].filter(
        (S) => s.value.getItemText(S).toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
      );
      return v.length ? {
        ...x,
        [o.groupItems]: v
      } : null;
    }) : o.items.filter(
      (x) => s.value.getItemText(x).toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
    ) : o.items.filter(
      (x) => x.toLowerCase().replace(/\s+/g, "").includes(l.value.toLowerCase().replace(/\s+/g, ""))
    ));
    function g(x) {
      var v;
      if (p.value = x, x) {
        Zt(() => {
          d.value = new IntersectionObserver((S) => {
            S[0].isIntersecting && !f.value && n("intersect");
          }), d.value.observe(c.value);
        });
        return;
      }
      (v = d.value) == null || v.disconnect(), d.value = null;
    }
    function b(x) {
      if (!o.serverside) {
        n("search", x);
        return;
      }
      f.value = !0, clearTimeout(u.value), u.value = setTimeout(() => {
        n("search", x), f.value = !1;
      }, 500);
    }
    async function y() {
      const x = (await s.value.getSelectContent()).value;
      x == null || x.scrollTo(0, x.scrollHeight);
    }
    return e({
      reset: h,
      select: s,
      scrollToBottom: y
    }), (x, v) => ($(), de(Xx, Je({
      id: x.id,
      ref_key: "select",
      ref: s,
      "input-value": l.value,
      "onUpdate:inputValue": v[1] || (v[1] = (S) => l.value = S)
    }, a.value, {
      behavior: "focus",
      "hide-no-items-label": t.loading || f.value,
      items: f.value ? [] : m.value,
      "onUpdate:inputValue": v[2] || (v[2] = (S) => b(S)),
      "onUpdate:isOpen": v[3] || (v[3] = (S) => g(S)),
      "onUpdate:modelValue": v[4] || (v[4] = (S) => i.value = S)
    }), {
      inline: ve(() => [
        Ee(x.$slots, "inline")
      ]),
      option: ve(({ option: S, selected: M }) => [
        Ee(x.$slots, "option", {
          selected: M,
          option: S
        })
      ]),
      "append-list": ve(() => [
        J("div", {
          ref_key: "intersect",
          ref: c,
          class: "flex justify-center"
        }, [
          t.loading || f.value ? ($(), de(ic, {
            key: 0,
            class: "mt-2",
            onClick: v[0] || (v[0] = fr(() => {
            }, ["prevent"]))
          })) : Q("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
};
function ot(t) {
  this.content = t;
}
ot.prototype = {
  constructor: ot,
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
    var o = r && r != t ? this.remove(r) : this, n = o.find(t), a = o.content.slice();
    return n == -1 ? a.push(r || t, e) : (a[n + 1] = e, r && (a[n] = r)), new ot(a);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var r = this.content.slice();
    return r.splice(e, 2), new ot(r);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new ot([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var r = this.remove(t).content.slice();
    return r.push(t, e), new ot(r);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, r) {
    var o = this.remove(e), n = o.content.slice(), a = o.find(t);
    return n.splice(a == -1 ? n.length : a, 0, e, r), new ot(n);
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
    return t = ot.from(t), t.size ? new ot(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = ot.from(t), t.size ? new ot(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = ot.from(t);
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
ot.from = function(t) {
  if (t instanceof ot) return t;
  var e = [];
  if (t) for (var r in t) e.push(r, t[r]);
  return new ot(e);
};
function qf(t, e, r) {
  for (let o = 0; ; o++) {
    if (o == t.childCount || o == e.childCount)
      return t.childCount == e.childCount ? null : r;
    let n = t.child(o), a = e.child(o);
    if (n == a) {
      r += n.nodeSize;
      continue;
    }
    if (!n.sameMarkup(a))
      return r;
    if (n.isText && n.text != a.text) {
      for (let i = 0; n.text[i] == a.text[i]; i++)
        r++;
      return r;
    }
    if (n.content.size || a.content.size) {
      let i = qf(n.content, a.content, r + 1);
      if (i != null)
        return i;
    }
    r += n.nodeSize;
  }
}
function Wf(t, e, r, o) {
  for (let n = t.childCount, a = e.childCount; ; ) {
    if (n == 0 || a == 0)
      return n == a ? null : { a: r, b: o };
    let i = t.child(--n), s = e.child(--a), l = i.nodeSize;
    if (i == s) {
      r -= l, o -= l;
      continue;
    }
    if (!i.sameMarkup(s))
      return { a: r, b: o };
    if (i.isText && i.text != s.text) {
      let c = 0, d = Math.min(i.text.length, s.text.length);
      for (; c < d && i.text[i.text.length - c - 1] == s.text[s.text.length - c - 1]; )
        c++, r--, o--;
      return { a: r, b: o };
    }
    if (i.content.size || s.content.size) {
      let c = Wf(i.content, s.content, r - 1, o - 1);
      if (c)
        return c;
    }
    r -= l, o -= l;
  }
}
class ee {
  /**
  @internal
  */
  constructor(e, r) {
    if (this.content = e, this.size = r || 0, r == null)
      for (let o = 0; o < e.length; o++)
        this.size += e[o].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, r, o, n = 0, a) {
    for (let i = 0, s = 0; s < r; i++) {
      let l = this.content[i], c = s + l.nodeSize;
      if (c > e && o(l, n + s, a || null, i) !== !1 && l.content.size) {
        let d = s + 1;
        l.nodesBetween(Math.max(0, e - d), Math.min(l.content.size, r - d), o, n + d);
      }
      s = c;
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
  textBetween(e, r, o, n) {
    let a = "", i = !0;
    return this.nodesBetween(e, r, (s, l) => {
      let c = s.isText ? s.text.slice(Math.max(e, l) - l, r - l) : s.isLeaf ? n ? typeof n == "function" ? n(s) : n : s.type.spec.leafText ? s.type.spec.leafText(s) : "" : "";
      s.isBlock && (s.isLeaf && c || s.isTextblock) && o && (i ? i = !1 : a += o), a += c;
    }, 0), a;
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
    let r = this.lastChild, o = e.firstChild, n = this.content.slice(), a = 0;
    for (r.isText && r.sameMarkup(o) && (n[n.length - 1] = r.withText(r.text + o.text), a = 1); a < e.content.length; a++)
      n.push(e.content[a]);
    return new ee(n, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, r = this.size) {
    if (e == 0 && r == this.size)
      return this;
    let o = [], n = 0;
    if (r > e)
      for (let a = 0, i = 0; i < r; a++) {
        let s = this.content[a], l = i + s.nodeSize;
        l > e && ((i < e || l > r) && (s.isText ? s = s.cut(Math.max(0, e - i), Math.min(s.text.length, r - i)) : s = s.cut(Math.max(0, e - i - 1), Math.min(s.content.size, r - i - 1))), o.push(s), n += s.nodeSize), i = l;
      }
    return new ee(o, n);
  }
  /**
  @internal
  */
  cutByIndex(e, r) {
    return e == r ? ee.empty : e == 0 && r == this.content.length ? this : new ee(this.content.slice(e, r));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, r) {
    let o = this.content[e];
    if (o == r)
      return this;
    let n = this.content.slice(), a = this.size + r.nodeSize - o.nodeSize;
    return n[e] = r, new ee(n, a);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new ee([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new ee(this.content.concat(e), this.size + e.nodeSize);
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
    for (let r = 0, o = 0; r < this.content.length; r++) {
      let n = this.content[r];
      e(n, o, r), o += n.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, r = 0) {
    return qf(this, e, r);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, r = this.size, o = e.size) {
    return Wf(this, e, r, o);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, r = -1) {
    if (e == 0)
      return Ma(0, e);
    if (e == this.size)
      return Ma(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let o = 0, n = 0; ; o++) {
      let a = this.child(o), i = n + a.nodeSize;
      if (i >= e)
        return i == e || r > 0 ? Ma(o + 1, i) : Ma(o, n);
      n = i;
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
      return ee.empty;
    if (!Array.isArray(r))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new ee(r.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return ee.empty;
    let r, o = 0;
    for (let n = 0; n < e.length; n++) {
      let a = e[n];
      o += a.nodeSize, n && a.isText && e[n - 1].sameMarkup(a) ? (r || (r = e.slice(0, n)), r[r.length - 1] = a.withText(r[r.length - 1].text + a.text)) : r && r.push(a);
    }
    return new ee(r || e, o);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return ee.empty;
    if (e instanceof ee)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new ee([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
ee.empty = new ee([], 0);
const $s = { index: 0, offset: 0 };
function Ma(t, e) {
  return $s.index = t, $s.offset = e, $s;
}
function ui(t, e) {
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
    for (let o = 0; o < t.length; o++)
      if (!ui(t[o], e[o]))
        return !1;
  } else {
    for (let o in t)
      if (!(o in e) || !ui(t[o], e[o]))
        return !1;
    for (let o in e)
      if (!(o in t))
        return !1;
  }
  return !0;
}
let Ue = class ll {
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
    let r, o = !1;
    for (let n = 0; n < e.length; n++) {
      let a = e[n];
      if (this.eq(a))
        return e;
      if (this.type.excludes(a.type))
        r || (r = e.slice(0, n));
      else {
        if (a.type.excludes(this.type))
          return e;
        !o && a.type.rank > this.type.rank && (r || (r = e.slice(0, n)), r.push(this), o = !0), r && r.push(a);
      }
    }
    return r || (r = e.slice()), o || r.push(this), r;
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
    return this == e || this.type == e.type && ui(this.attrs, e.attrs);
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
    let o = e.marks[r.type];
    if (!o)
      throw new RangeError(`There is no mark type ${r.type} in this schema`);
    let n = o.create(r.attrs);
    return o.checkAttrs(n.attrs), n;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, r) {
    if (e == r)
      return !0;
    if (e.length != r.length)
      return !1;
    for (let o = 0; o < e.length; o++)
      if (!e[o].eq(r[o]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return ll.none;
    if (e instanceof ll)
      return [e];
    let r = e.slice();
    return r.sort((o, n) => o.type.rank - n.type.rank), r;
  }
};
Ue.none = [];
class pi extends Error {
}
class ue {
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
  constructor(e, r, o) {
    this.content = e, this.openStart = r, this.openEnd = o;
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
    let o = Kf(this.content, e + this.openStart, r);
    return o && new ue(o, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, r) {
    return new ue(Uf(this.content, e + this.openStart, r + this.openStart), this.openStart, this.openEnd);
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
      return ue.empty;
    let o = r.openStart || 0, n = r.openEnd || 0;
    if (typeof o != "number" || typeof n != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new ue(ee.fromJSON(e, r.content), o, n);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, r = !0) {
    let o = 0, n = 0;
    for (let a = e.firstChild; a && !a.isLeaf && (r || !a.type.spec.isolating); a = a.firstChild)
      o++;
    for (let a = e.lastChild; a && !a.isLeaf && (r || !a.type.spec.isolating); a = a.lastChild)
      n++;
    return new ue(e, o, n);
  }
}
ue.empty = new ue(ee.empty, 0, 0);
function Uf(t, e, r) {
  let { index: o, offset: n } = t.findIndex(e), a = t.maybeChild(o), { index: i, offset: s } = t.findIndex(r);
  if (n == e || a.isText) {
    if (s != r && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(r));
  }
  if (o != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(o, a.copy(Uf(a.content, e - n - 1, r - n - 1)));
}
function Kf(t, e, r, o) {
  let { index: n, offset: a } = t.findIndex(e), i = t.maybeChild(n);
  if (a == e || i.isText)
    return t.cut(0, e).append(r).append(t.cut(e));
  let s = Kf(i.content, e - a - 1, r);
  return s && t.replaceChild(n, i.copy(s));
}
function Gx(t, e, r) {
  if (r.openStart > t.depth)
    throw new pi("Inserted content deeper than insertion position");
  if (t.depth - r.openStart != e.depth - r.openEnd)
    throw new pi("Inconsistent open depths");
  return Jf(t, e, r, 0);
}
function Jf(t, e, r, o) {
  let n = t.index(o), a = t.node(o);
  if (n == e.index(o) && o < t.depth - r.openStart) {
    let i = Jf(t, e, r, o + 1);
    return a.copy(a.content.replaceChild(n, i));
  } else if (r.content.size)
    if (!r.openStart && !r.openEnd && t.depth == o && e.depth == o) {
      let i = t.parent, s = i.content;
      return ho(i, s.cut(0, t.parentOffset).append(r.content).append(s.cut(e.parentOffset)));
    } else {
      let { start: i, end: s } = Zx(r, t);
      return ho(a, Xf(t, i, s, e, o));
    }
  else return ho(a, fi(t, e, o));
}
function Yf(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new pi("Cannot join " + e.type.name + " onto " + t.type.name);
}
function cl(t, e, r) {
  let o = t.node(r);
  return Yf(o, e.node(r)), o;
}
function fo(t, e) {
  let r = e.length - 1;
  r >= 0 && t.isText && t.sameMarkup(e[r]) ? e[r] = t.withText(e[r].text + t.text) : e.push(t);
}
function Tn(t, e, r, o) {
  let n = (e || t).node(r), a = 0, i = e ? e.index(r) : n.childCount;
  t && (a = t.index(r), t.depth > r ? a++ : t.textOffset && (fo(t.nodeAfter, o), a++));
  for (let s = a; s < i; s++)
    fo(n.child(s), o);
  e && e.depth == r && e.textOffset && fo(e.nodeBefore, o);
}
function ho(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Xf(t, e, r, o, n) {
  let a = t.depth > n && cl(t, e, n + 1), i = o.depth > n && cl(r, o, n + 1), s = [];
  return Tn(null, t, n, s), a && i && e.index(n) == r.index(n) ? (Yf(a, i), fo(ho(a, Xf(t, e, r, o, n + 1)), s)) : (a && fo(ho(a, fi(t, e, n + 1)), s), Tn(e, r, n, s), i && fo(ho(i, fi(r, o, n + 1)), s)), Tn(o, null, n, s), new ee(s);
}
function fi(t, e, r) {
  let o = [];
  if (Tn(null, t, r, o), t.depth > r) {
    let n = cl(t, e, r + 1);
    fo(ho(n, fi(t, e, r + 1)), o);
  }
  return Tn(e, null, r, o), new ee(o);
}
function Zx(t, e) {
  let r = e.depth - t.openStart, o = e.node(r).copy(t.content);
  for (let n = r - 1; n >= 0; n--)
    o = e.node(n).copy(ee.from(o));
  return {
    start: o.resolveNoCache(t.openStart + r),
    end: o.resolveNoCache(o.content.size - t.openEnd - r)
  };
}
class ea {
  /**
  @internal
  */
  constructor(e, r, o) {
    this.pos = e, this.path = r, this.parentOffset = o, this.depth = r.length / 3 - 1;
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
    let o = this.pos - this.path[this.path.length - 1], n = e.child(r);
    return o ? e.child(r).cut(o) : n;
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
    let o = this.path[r * 3], n = r == 0 ? 0 : this.path[r * 3 - 1] + 1;
    for (let a = 0; a < e; a++)
      n += o.child(a).nodeSize;
    return n;
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
      return Ue.none;
    if (this.textOffset)
      return e.child(r).marks;
    let o = e.maybeChild(r - 1), n = e.maybeChild(r);
    if (!o) {
      let s = o;
      o = n, n = s;
    }
    let a = o.marks;
    for (var i = 0; i < a.length; i++)
      a[i].type.spec.inclusive === !1 && (!n || !a[i].isInSet(n.marks)) && (a = a[i--].removeFromSet(a));
    return a;
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
    let o = r.marks, n = e.parent.maybeChild(e.index());
    for (var a = 0; a < o.length; a++)
      o[a].type.spec.inclusive === !1 && (!n || !o[a].isInSet(n.marks)) && (o = o[a--].removeFromSet(o));
    return o;
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
    for (let o = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); o >= 0; o--)
      if (e.pos <= this.end(o) && (!r || r(this.node(o))))
        return new hi(this, e, o);
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
    let o = [], n = 0, a = r;
    for (let i = e; ; ) {
      let { index: s, offset: l } = i.content.findIndex(a), c = a - l;
      if (o.push(i, s, n + l), !c || (i = i.child(s), i.isText))
        break;
      a = c - 1, n += l + 1;
    }
    return new ea(r, o, a);
  }
  /**
  @internal
  */
  static resolveCached(e, r) {
    let o = Wd.get(e);
    if (o)
      for (let a = 0; a < o.elts.length; a++) {
        let i = o.elts[a];
        if (i.pos == r)
          return i;
      }
    else
      Wd.set(e, o = new Qx());
    let n = o.elts[o.i] = ea.resolve(e, r);
    return o.i = (o.i + 1) % e5, n;
  }
}
class Qx {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const e5 = 12, Wd = /* @__PURE__ */ new WeakMap();
class hi {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, r, o) {
    this.$from = e, this.$to = r, this.depth = o;
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
const t5 = /* @__PURE__ */ Object.create(null);
let Yo = class dl {
  /**
  @internal
  */
  constructor(e, r, o, n = Ue.none) {
    this.type = e, this.attrs = r, this.marks = n, this.content = o || ee.empty;
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
  nodesBetween(e, r, o, n = 0) {
    this.content.nodesBetween(e, r, o, n, this);
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
  textBetween(e, r, o, n) {
    return this.content.textBetween(e, r, o, n);
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
  hasMarkup(e, r, o) {
    return this.type == e && ui(this.attrs, r || e.defaultAttrs || t5) && Ue.sameSet(this.marks, o || Ue.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new dl(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new dl(this.type, this.attrs, this.content, e);
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
  slice(e, r = this.content.size, o = !1) {
    if (e == r)
      return ue.empty;
    let n = this.resolve(e), a = this.resolve(r), i = o ? 0 : n.sharedDepth(r), s = n.start(i), l = n.node(i).content.cut(n.pos - s, a.pos - s);
    return new ue(l, n.depth - i, a.depth - i);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, r, o) {
    return Gx(this.resolve(e), this.resolve(r), o);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let r = this; ; ) {
      let { index: o, offset: n } = r.content.findIndex(e);
      if (r = r.maybeChild(o), !r)
        return null;
      if (n == e || r.isText)
        return r;
      e -= n + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: r, offset: o } = this.content.findIndex(e);
    return { node: this.content.maybeChild(r), index: r, offset: o };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: r, offset: o } = this.content.findIndex(e);
    if (o < e)
      return { node: this.content.child(r), index: r, offset: o };
    let n = this.content.child(r - 1);
    return { node: n, index: r - 1, offset: o - n.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return ea.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return ea.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, r, o) {
    let n = !1;
    return r > e && this.nodesBetween(e, r, (a) => (o.isInSet(a.marks) && (n = !0), !n)), n;
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Gf(this.marks, e);
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
  canReplace(e, r, o = ee.empty, n = 0, a = o.childCount) {
    let i = this.contentMatchAt(e).matchFragment(o, n, a), s = i && i.matchFragment(this.content, r);
    if (!s || !s.validEnd)
      return !1;
    for (let l = n; l < a; l++)
      if (!this.type.allowsMarks(o.child(l).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, r, o, n) {
    if (n && !this.type.allowsMarks(n))
      return !1;
    let a = this.contentMatchAt(e).matchType(o), i = a && a.matchFragment(this.content, r);
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
    let e = Ue.none;
    for (let r = 0; r < this.marks.length; r++) {
      let o = this.marks[r];
      o.type.checkAttrs(o.attrs), e = o.addToSet(e);
    }
    if (!Ue.sameSet(e, this.marks))
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
    let o;
    if (r.marks) {
      if (!Array.isArray(r.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      o = r.marks.map(e.markFromJSON);
    }
    if (r.type == "text") {
      if (typeof r.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(r.text, o);
    }
    let n = ee.fromJSON(e, r.content), a = e.nodeType(r.type).create(r.attrs, n, o);
    return a.type.checkAttrs(a.attrs), a;
  }
};
Yo.prototype.text = void 0;
class mi extends Yo {
  /**
  @internal
  */
  constructor(e, r, o, n) {
    if (super(e, r, null, n), !o)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = o;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Gf(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new mi(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new mi(this.type, this.attrs, e, this.marks);
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
function Gf(t, e) {
  for (let r = t.length - 1; r >= 0; r--)
    e = t[r].type.name + "(" + e + ")";
  return e;
}
let ta = class Zf {
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
    let o = new r5(e, r);
    if (o.next == null)
      return Zf.empty;
    let n = Qf(o);
    o.next && o.err("Unexpected trailing text");
    let a = c5(l5(n));
    return d5(a, o), a;
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
  matchFragment(e, r = 0, o = e.childCount) {
    let n = this;
    for (let a = r; n && a < o; a++)
      n = n.matchType(e.child(a).type);
    return n;
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
      for (let o = 0; o < e.next.length; o++)
        if (this.next[r].type == e.next[o].type)
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
  fillBefore(e, r = !1, o = 0) {
    let n = [this];
    function a(i, s) {
      let l = i.matchFragment(e, o);
      if (l && (!r || l.validEnd))
        return ee.from(s.map((c) => c.createAndFill()));
      for (let c = 0; c < i.next.length; c++) {
        let { type: d, next: u } = i.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && n.indexOf(u) == -1) {
          n.push(u);
          let p = a(u, s.concat(d));
          if (p)
            return p;
        }
      }
      return null;
    }
    return a(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let o = 0; o < this.wrapCache.length; o += 2)
      if (this.wrapCache[o] == e)
        return this.wrapCache[o + 1];
    let r = this.computeWrapping(e);
    return this.wrapCache.push(e, r), r;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let r = /* @__PURE__ */ Object.create(null), o = [{ match: this, type: null, via: null }];
    for (; o.length; ) {
      let n = o.shift(), a = n.match;
      if (a.matchType(e)) {
        let i = [];
        for (let s = n; s.type; s = s.via)
          i.push(s.type);
        return i.reverse();
      }
      for (let i = 0; i < a.next.length; i++) {
        let { type: s, next: l } = a.next[i];
        !s.isLeaf && !s.hasRequiredAttrs() && !(s.name in r) && (!n.type || l.validEnd) && (o.push({ match: s.contentMatch, type: s, via: n }), r[s.name] = !0);
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
    function r(o) {
      e.push(o);
      for (let n = 0; n < o.next.length; n++)
        e.indexOf(o.next[n].next) == -1 && r(o.next[n].next);
    }
    return r(this), e.map((o, n) => {
      let a = n + (o.validEnd ? "*" : " ") + " ";
      for (let i = 0; i < o.next.length; i++)
        a += (i ? ", " : "") + o.next[i].type.name + "->" + e.indexOf(o.next[i].next);
      return a;
    }).join(`
`);
  }
};
ta.empty = new ta(!0);
class r5 {
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
function Qf(t) {
  let e = [];
  do
    e.push(o5(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function o5(t) {
  let e = [];
  do
    e.push(n5(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function n5(t) {
  let e = s5(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = a5(t, e);
    else
      break;
  return e;
}
function Ud(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function a5(t, e) {
  let r = Ud(t), o = r;
  return t.eat(",") && (t.next != "}" ? o = Ud(t) : o = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: r, max: o, expr: e };
}
function i5(t, e) {
  let r = t.nodeTypes, o = r[e];
  if (o)
    return [o];
  let n = [];
  for (let a in r) {
    let i = r[a];
    i.groups.indexOf(e) > -1 && n.push(i);
  }
  return n.length == 0 && t.err("No node type or group '" + e + "' found"), n;
}
function s5(t) {
  if (t.eat("(")) {
    let e = Qf(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = i5(t, t.next).map((r) => (t.inline == null ? t.inline = r.isInline : t.inline != r.isInline && t.err("Mixing inline and block content"), { type: "name", value: r }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function l5(t) {
  let e = [[]];
  return n(a(t, 0), r()), e;
  function r() {
    return e.push([]) - 1;
  }
  function o(i, s, l) {
    let c = { term: l, to: s };
    return e[i].push(c), c;
  }
  function n(i, s) {
    i.forEach((l) => l.to = s);
  }
  function a(i, s) {
    if (i.type == "choice")
      return i.exprs.reduce((l, c) => l.concat(a(c, s)), []);
    if (i.type == "seq")
      for (let l = 0; ; l++) {
        let c = a(i.exprs[l], s);
        if (l == i.exprs.length - 1)
          return c;
        n(c, s = r());
      }
    else if (i.type == "star") {
      let l = r();
      return o(s, l), n(a(i.expr, l), l), [o(l)];
    } else if (i.type == "plus") {
      let l = r();
      return n(a(i.expr, s), l), n(a(i.expr, l), l), [o(l)];
    } else {
      if (i.type == "opt")
        return [o(s)].concat(a(i.expr, s));
      if (i.type == "range") {
        let l = s;
        for (let c = 0; c < i.min; c++) {
          let d = r();
          n(a(i.expr, l), d), l = d;
        }
        if (i.max == -1)
          n(a(i.expr, l), l);
        else
          for (let c = i.min; c < i.max; c++) {
            let d = r();
            o(l, d), n(a(i.expr, l), d), l = d;
          }
        return [o(l)];
      } else {
        if (i.type == "name")
          return [o(s, void 0, i.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function eh(t, e) {
  return e - t;
}
function Kd(t, e) {
  let r = [];
  return o(e), r.sort(eh);
  function o(n) {
    let a = t[n];
    if (a.length == 1 && !a[0].term)
      return o(a[0].to);
    r.push(n);
    for (let i = 0; i < a.length; i++) {
      let { term: s, to: l } = a[i];
      !s && r.indexOf(l) == -1 && o(l);
    }
  }
}
function c5(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return r(Kd(t, 0));
  function r(o) {
    let n = [];
    o.forEach((i) => {
      t[i].forEach(({ term: s, to: l }) => {
        if (!s)
          return;
        let c;
        for (let d = 0; d < n.length; d++)
          n[d][0] == s && (c = n[d][1]);
        Kd(t, l).forEach((d) => {
          c || n.push([s, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let a = e[o.join(",")] = new ta(o.indexOf(t.length - 1) > -1);
    for (let i = 0; i < n.length; i++) {
      let s = n[i][1].sort(eh);
      a.next.push({ type: n[i][0], next: e[s.join(",")] || r(s) });
    }
    return a;
  }
}
function d5(t, e) {
  for (let r = 0, o = [t]; r < o.length; r++) {
    let n = o[r], a = !n.validEnd, i = [];
    for (let s = 0; s < n.next.length; s++) {
      let { type: l, next: c } = n.next[s];
      i.push(l.name), a && !(l.isText || l.hasRequiredAttrs()) && (a = !1), o.indexOf(c) == -1 && o.push(c);
    }
    a && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function th(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let o = t[r];
    if (!o.hasDefault)
      return null;
    e[r] = o.default;
  }
  return e;
}
function rh(t, e) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let o in t) {
    let n = e && e[o];
    if (n === void 0) {
      let a = t[o];
      if (a.hasDefault)
        n = a.default;
      else
        throw new RangeError("No value supplied for attribute " + o);
    }
    r[o] = n;
  }
  return r;
}
function oh(t, e, r, o) {
  for (let n in e)
    if (!(n in t))
      throw new RangeError(`Unsupported attribute ${n} for ${r} of type ${n}`);
  for (let n in t) {
    let a = t[n];
    a.validate && a.validate(e[n]);
  }
}
function nh(t, e) {
  let r = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let o in e)
      r[o] = new p5(t, o, e[o]);
  return r;
}
let Jd = class ah {
  /**
  @internal
  */
  constructor(e, r, o) {
    this.name = e, this.schema = r, this.spec = o, this.markSet = null, this.groups = o.group ? o.group.split(" ") : [], this.attrs = nh(e, o.attrs), this.defaultAttrs = th(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(o.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == ta.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : rh(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, r, o) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Yo(this, this.computeAttrs(e), ee.from(r), Ue.setFrom(o));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, r, o) {
    return r = ee.from(r), this.checkContent(r), new Yo(this, this.computeAttrs(e), r, Ue.setFrom(o));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, r, o) {
    if (e = this.computeAttrs(e), r = ee.from(r), r.size) {
      let i = this.contentMatch.fillBefore(r);
      if (!i)
        return null;
      r = i.append(r);
    }
    let n = this.contentMatch.matchFragment(r), a = n && n.fillBefore(ee.empty, !0);
    return a ? new Yo(this, e, r.append(a), Ue.setFrom(o)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let r = this.contentMatch.matchFragment(e);
    if (!r || !r.validEnd)
      return !1;
    for (let o = 0; o < e.childCount; o++)
      if (!this.allowsMarks(e.child(o).marks))
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
    oh(this.attrs, e, "node", this.name);
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
    for (let o = 0; o < e.length; o++)
      this.allowsMarkType(e[o].type) ? r && r.push(e[o]) : r || (r = e.slice(0, o));
    return r ? r.length ? r : Ue.none : e;
  }
  /**
  @internal
  */
  static compile(e, r) {
    let o = /* @__PURE__ */ Object.create(null);
    e.forEach((a, i) => o[a] = new ah(a, r, i));
    let n = r.spec.topNode || "doc";
    if (!o[n])
      throw new RangeError("Schema is missing its top node type ('" + n + "')");
    if (!o.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let a in o.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return o;
  }
};
function u5(t, e, r) {
  let o = r.split("|");
  return (n) => {
    let a = n === null ? "null" : typeof n;
    if (o.indexOf(a) < 0)
      throw new RangeError(`Expected value of type ${o} for attribute ${e} on type ${t}, got ${a}`);
  };
}
class p5 {
  constructor(e, r, o) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(o, "default"), this.default = o.default, this.validate = typeof o.validate == "string" ? u5(e, r, o.validate) : o.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class dc {
  /**
  @internal
  */
  constructor(e, r, o, n) {
    this.name = e, this.rank = r, this.schema = o, this.spec = n, this.attrs = nh(e, n.attrs), this.excluded = null;
    let a = th(this.attrs);
    this.instance = a ? new Ue(this, a) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new Ue(this, rh(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, r) {
    let o = /* @__PURE__ */ Object.create(null), n = 0;
    return e.forEach((a, i) => o[a] = new dc(a, n++, r, i)), o;
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
    oh(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class f5 {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let r = this.spec = {};
    for (let n in e)
      r[n] = e[n];
    r.nodes = ot.from(e.nodes), r.marks = ot.from(e.marks || {}), this.nodes = Jd.compile(this.spec.nodes, this), this.marks = dc.compile(this.spec.marks, this);
    let o = /* @__PURE__ */ Object.create(null);
    for (let n in this.nodes) {
      if (n in this.marks)
        throw new RangeError(n + " can not be both a node and a mark");
      let a = this.nodes[n], i = a.spec.content || "", s = a.spec.marks;
      if (a.contentMatch = o[i] || (o[i] = ta.parse(i, this.nodes)), a.inlineContent = a.contentMatch.inlineContent, a.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!a.isInline || !a.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = a;
      }
      a.markSet = s == "_" ? null : s ? Yd(this, s.split(" ")) : s == "" || !a.inlineContent ? [] : null;
    }
    for (let n in this.marks) {
      let a = this.marks[n], i = a.spec.excludes;
      a.excluded = i == null ? [a] : i == "" ? [] : Yd(this, i.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, r = null, o, n) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Jd) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(r, o, n);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, r) {
    let o = this.nodes.text;
    return new mi(o, o.defaultAttrs, e, Ue.setFrom(r));
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
    return Yo.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return Ue.fromJSON(this, e);
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
function Yd(t, e) {
  let r = [];
  for (let o = 0; o < e.length; o++) {
    let n = e[o], a = t.marks[n], i = a;
    if (a)
      r.push(a);
    else
      for (let s in t.marks) {
        let l = t.marks[s];
        (n == "_" || l.spec.group && l.spec.group.split(" ").indexOf(n) > -1) && r.push(i = l);
      }
    if (!i)
      throw new SyntaxError("Unknown mark type: '" + e[o] + "'");
  }
  return r;
}
function h5(t) {
  return t.tag != null;
}
function m5(t) {
  return t.style != null;
}
let Fa = class ul {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, r) {
    this.schema = e, this.rules = r, this.tags = [], this.styles = [];
    let o = this.matchedStyles = [];
    r.forEach((n) => {
      if (h5(n))
        this.tags.push(n);
      else if (m5(n)) {
        let a = /[^=]*/.exec(n.style)[0];
        o.indexOf(a) < 0 && o.push(a), this.styles.push(n);
      }
    }), this.normalizeLists = !this.tags.some((n) => {
      if (!/^(ul|ol)\b/.test(n.tag) || !n.node)
        return !1;
      let a = e.nodes[n.node];
      return a.contentMatch.matchType(a);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, r = {}) {
    let o = new Gd(this, r, !1);
    return o.addAll(e, Ue.none, r.from, r.to), o.finish();
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
    let o = new Gd(this, r, !0);
    return o.addAll(e, Ue.none, r.from, r.to), ue.maxOpen(o.finish());
  }
  /**
  @internal
  */
  matchTag(e, r, o) {
    for (let n = o ? this.tags.indexOf(o) + 1 : 0; n < this.tags.length; n++) {
      let a = this.tags[n];
      if (b5(e, a.tag) && (a.namespace === void 0 || e.namespaceURI == a.namespace) && (!a.context || r.matchesContext(a.context))) {
        if (a.getAttrs) {
          let i = a.getAttrs(e);
          if (i === !1)
            continue;
          a.attrs = i || void 0;
        }
        return a;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, r, o, n) {
    for (let a = n ? this.styles.indexOf(n) + 1 : 0; a < this.styles.length; a++) {
      let i = this.styles[a], s = i.style;
      if (!(s.indexOf(e) != 0 || i.context && !o.matchesContext(i.context) || // Test that the style string either precisely matches the prop,
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
    function o(n) {
      let a = n.priority == null ? 50 : n.priority, i = 0;
      for (; i < r.length; i++) {
        let s = r[i];
        if ((s.priority == null ? 50 : s.priority) < a)
          break;
      }
      r.splice(i, 0, n);
    }
    for (let n in e.marks) {
      let a = e.marks[n].spec.parseDOM;
      a && a.forEach((i) => {
        o(i = Zd(i)), i.mark || i.ignore || i.clearMark || (i.mark = n);
      });
    }
    for (let n in e.nodes) {
      let a = e.nodes[n].spec.parseDOM;
      a && a.forEach((i) => {
        o(i = Zd(i)), i.node || i.ignore || i.mark || (i.node = n);
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
    return e.cached.domParser || (e.cached.domParser = new ul(e, ul.schemaRules(e)));
  }
};
const ih = {
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
}, g5 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, sh = { ol: !0, ul: !0 }, gi = 1, vi = 2, An = 4;
function Xd(t, e, r) {
  return e != null ? (e ? gi : 0) | (e === "full" ? vi : 0) : t && t.whitespace == "pre" ? gi | vi : r & ~An;
}
class Ta {
  constructor(e, r, o, n, a, i) {
    this.type = e, this.attrs = r, this.marks = o, this.solid = n, this.options = i, this.content = [], this.activeMarks = Ue.none, this.match = a || (i & An ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let r = this.type.contentMatch.fillBefore(ee.from(e));
      if (r)
        this.match = this.type.contentMatch.matchFragment(r);
      else {
        let o = this.type.contentMatch, n;
        return (n = o.findWrapping(e.type)) ? (this.match = o, n) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & gi)) {
      let o = this.content[this.content.length - 1], n;
      if (o && o.isText && (n = /[ \t\r\n\u000c]+$/.exec(o.text))) {
        let a = o;
        o.text.length == n[0].length ? this.content.pop() : this.content[this.content.length - 1] = a.withText(a.text.slice(0, a.text.length - n[0].length));
      }
    }
    let r = ee.from(this.content);
    return !e && this.match && (r = r.append(this.match.fillBefore(ee.empty, !0))), this.type ? this.type.create(this.attrs, r, this.marks) : r;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !ih.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Gd {
  constructor(e, r, o) {
    this.parser = e, this.options = r, this.isOpen = o, this.open = 0;
    let n = r.topNode, a, i = Xd(null, r.preserveWhitespace, 0) | (o ? An : 0);
    n ? a = new Ta(n.type, n.attrs, Ue.none, !0, r.topMatch || n.type.contentMatch, i) : o ? a = new Ta(null, null, Ue.none, !0, null, i) : a = new Ta(e.schema.topNodeType, null, Ue.none, !0, null, i), this.nodes = [a], this.find = r.findPositions, this.needsBlock = !1;
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
    let o = e.nodeValue, n = this.top;
    if (n.options & vi || n.inlineContext(e) || /[^ \t\r\n\u000c]/.test(o)) {
      if (n.options & gi)
        n.options & vi ? o = o.replace(/\r\n?/g, `
`) : o = o.replace(/\r?\n|\r/g, " ");
      else if (o = o.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(o) && this.open == this.nodes.length - 1) {
        let a = n.content[n.content.length - 1], i = e.previousSibling;
        (!a || i && i.nodeName == "BR" || a.isText && /[ \t\r\n\u000c]$/.test(a.text)) && (o = o.slice(1));
      }
      o && this.insertNode(this.parser.schema.text(o), r), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, r, o) {
    let n = e.nodeName.toLowerCase(), a;
    sh.hasOwnProperty(n) && this.parser.normalizeLists && v5(e);
    let i = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, o));
    if (i ? i.ignore : g5.hasOwnProperty(n))
      this.findInside(e), this.ignoreFallback(e, r);
    else if (!i || i.skip || i.closeParent) {
      i && i.closeParent ? this.open = Math.max(0, this.open - 1) : i && i.skip.nodeType && (e = i.skip);
      let s, l = this.top, c = this.needsBlock;
      if (ih.hasOwnProperty(n))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), s = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, r);
        return;
      }
      let d = i && i.skip ? r : this.readStyles(e, r);
      d && this.addAll(e, d), s && this.sync(l), this.needsBlock = c;
    } else {
      let s = this.readStyles(e, r);
      s && this.addElementByRule(e, i, s, i.consuming === !1 ? a : void 0);
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
    let o = e.style;
    if (o && o.length)
      for (let n = 0; n < this.parser.matchedStyles.length; n++) {
        let a = this.parser.matchedStyles[n], i = o.getPropertyValue(a);
        if (i)
          for (let s = void 0; ; ) {
            let l = this.parser.matchStyle(a, i, this, s);
            if (!l)
              break;
            if (l.ignore)
              return null;
            if (l.clearMark ? r = r.filter((c) => !l.clearMark(c)) : r = r.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === !1)
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
  addElementByRule(e, r, o, n) {
    let a, i;
    if (r.node)
      if (i = this.parser.schema.nodes[r.node], i.isLeaf)
        this.insertNode(i.create(r.attrs), o) || this.leafFallback(e, o);
      else {
        let l = this.enter(i, r.attrs || null, o, r.preserveWhitespace);
        l && (a = !0, o = l);
      }
    else {
      let l = this.parser.schema.marks[r.mark];
      o = o.concat(l.create(r.attrs));
    }
    let s = this.top;
    if (i && i.isLeaf)
      this.findInside(e);
    else if (n)
      this.addElement(e, o, n);
    else if (r.getContent)
      this.findInside(e), r.getContent(e, this.parser.schema).forEach((l) => this.insertNode(l, o));
    else {
      let l = e;
      typeof r.contentElement == "string" ? l = e.querySelector(r.contentElement) : typeof r.contentElement == "function" ? l = r.contentElement(e) : r.contentElement && (l = r.contentElement), this.findAround(e, l, !0), this.addAll(l, o);
    }
    a && this.sync(s) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, r, o, n) {
    let a = o || 0;
    for (let i = o ? e.childNodes[o] : e.firstChild, s = n == null ? null : e.childNodes[n]; i != s; i = i.nextSibling, ++a)
      this.findAtPoint(e, a), this.addDOM(i, r);
    this.findAtPoint(e, a);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, r) {
    let o, n;
    for (let a = this.open; a >= 0; a--) {
      let i = this.nodes[a], s = i.findWrapping(e);
      if (s && (!o || o.length > s.length) && (o = s, n = i, !s.length) || i.solid)
        break;
    }
    if (!o)
      return null;
    this.sync(n);
    for (let a = 0; a < o.length; a++)
      r = this.enterInner(o[a], null, r, !1);
    return r;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let n = this.textblockFromContext();
      n && (r = this.enterInner(n, null, r));
    }
    let o = this.findPlace(e, r);
    if (o) {
      this.closeExtra();
      let n = this.top;
      n.match && (n.match = n.match.matchType(e.type));
      let a = Ue.none;
      for (let i of o.concat(e.marks))
        (n.type ? n.type.allowsMarkType(i.type) : Qd(i.type, e.type)) && (a = i.addToSet(a));
      return n.content.push(e.mark(a)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, r, o, n) {
    let a = this.findPlace(e.create(r), o);
    return a && (a = this.enterInner(e, r, o, !0, n)), a;
  }
  // Open a node of the given type
  enterInner(e, r, o, n = !1, a) {
    this.closeExtra();
    let i = this.top;
    i.match = i.match && i.match.matchType(e);
    let s = Xd(e, a, i.options);
    i.options & An && i.content.length == 0 && (s |= An);
    let l = Ue.none;
    return o = o.filter((c) => (i.type ? i.type.allowsMarkType(c.type) : Qd(c.type, e)) ? (l = c.addToSet(l), !1) : !0), this.nodes.push(new Ta(e, r, l, n, null, s)), this.open++, o;
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
      let o = this.nodes[r].content;
      for (let n = o.length - 1; n >= 0; n--)
        e += o[n].nodeSize;
      r && e++;
    }
    return e;
  }
  findAtPoint(e, r) {
    if (this.find)
      for (let o = 0; o < this.find.length; o++)
        this.find[o].node == e && this.find[o].offset == r && (this.find[o].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && (this.find[r].pos = this.currentPos);
  }
  findAround(e, r, o) {
    if (e != r && this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && r.compareDocumentPosition(this.find[n].node) & (o ? 2 : 4) && (this.find[n].pos = this.currentPos);
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
    let r = e.split("/"), o = this.options.context, n = !this.isOpen && (!o || o.parent.type == this.nodes[0].type), a = -(o ? o.depth + 1 : 0) + (n ? 0 : 1), i = (s, l) => {
      for (; s >= 0; s--) {
        let c = r[s];
        if (c == "") {
          if (s == r.length - 1 || s == 0)
            continue;
          for (; l >= a; l--)
            if (i(s - 1, l))
              return !0;
          return !1;
        } else {
          let d = l > 0 || l == 0 && n ? this.nodes[l].type : o && l >= a ? o.node(l - a).type : null;
          if (!d || d.name != c && d.groups.indexOf(c) == -1)
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
        let o = e.node(r).contentMatchAt(e.indexAfter(r)).defaultType;
        if (o && o.isTextblock && o.defaultAttrs)
          return o;
      }
    for (let r in this.parser.schema.nodes) {
      let o = this.parser.schema.nodes[r];
      if (o.isTextblock && o.defaultAttrs)
        return o;
    }
  }
}
function v5(t) {
  for (let e = t.firstChild, r = null; e; e = e.nextSibling) {
    let o = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    o && sh.hasOwnProperty(o) && r ? (r.appendChild(e), e = r) : o == "li" ? r = e : o && (r = null);
  }
}
function b5(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Zd(t) {
  let e = {};
  for (let r in t)
    e[r] = t[r];
  return e;
}
function Qd(t, e) {
  let r = e.schema.nodes;
  for (let o in r) {
    let n = r[o];
    if (!n.allowsMarkType(t))
      continue;
    let a = [], i = (s) => {
      a.push(s);
      for (let l = 0; l < s.edgeCount; l++) {
        let { type: c, next: d } = s.edge(l);
        if (c == e || a.indexOf(d) < 0 && i(d))
          return !0;
      }
    };
    if (i(n.contentMatch))
      return !0;
  }
}
let lh = class ch {
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
  serializeFragment(e, r = {}, o) {
    o || (o = Ss(r).createDocumentFragment());
    let n = o, a = [];
    return e.forEach((i) => {
      if (a.length || i.marks.length) {
        let s = 0, l = 0;
        for (; s < a.length && l < i.marks.length; ) {
          let c = i.marks[l];
          if (!this.marks[c.type.name]) {
            l++;
            continue;
          }
          if (!c.eq(a[s][0]) || c.type.spec.spanning === !1)
            break;
          s++, l++;
        }
        for (; s < a.length; )
          n = a.pop()[1];
        for (; l < i.marks.length; ) {
          let c = i.marks[l++], d = this.serializeMark(c, i.isInline, r);
          d && (a.push([c, n]), n.appendChild(d.dom), n = d.contentDOM || d.dom);
        }
      }
      n.appendChild(this.serializeNodeInner(i, r));
    }), o;
  }
  /**
  @internal
  */
  serializeNodeInner(e, r) {
    let { dom: o, contentDOM: n } = Ha(Ss(r), this.nodes[e.type.name](e), null, e.attrs);
    if (n) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, r, n);
    }
    return o;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, r = {}) {
    let o = this.serializeNodeInner(e, r);
    for (let n = e.marks.length - 1; n >= 0; n--) {
      let a = this.serializeMark(e.marks[n], e.isInline, r);
      a && ((a.contentDOM || a.dom).appendChild(o), o = a.dom);
    }
    return o;
  }
  /**
  @internal
  */
  serializeMark(e, r, o = {}) {
    let n = this.marks[e.type.name];
    return n && Ha(Ss(o), n(e, r), null, e.attrs);
  }
  static renderSpec(e, r, o = null, n) {
    return Ha(e, r, o, n);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new ch(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let r = eu(e.nodes);
    return r.text || (r.text = (o) => o.text), r;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return eu(e.marks);
  }
};
function eu(t) {
  let e = {};
  for (let r in t) {
    let o = t[r].spec.toDOM;
    o && (e[r] = o);
  }
  return e;
}
function Ss(t) {
  return t.document || window.document;
}
const tu = /* @__PURE__ */ new WeakMap();
function w5(t) {
  let e = tu.get(t);
  return e === void 0 && tu.set(t, e = y5(t)), e;
}
function y5(t) {
  let e = null;
  function r(o) {
    if (o && typeof o == "object")
      if (Array.isArray(o))
        if (typeof o[0] == "string")
          e || (e = []), e.push(o);
        else
          for (let n = 0; n < o.length; n++)
            r(o[n]);
      else
        for (let n in o)
          r(o[n]);
  }
  return r(t), e;
}
function Ha(t, e, r, o) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let n = e[0], a;
  if (typeof n != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (o && (a = w5(o)) && a.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let i = n.indexOf(" ");
  i > 0 && (r = n.slice(0, i), n = n.slice(i + 1));
  let s, l = r ? t.createElementNS(r, n) : t.createElement(n), c = e[1], d = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    d = 2;
    for (let u in c)
      if (c[u] != null) {
        let p = u.indexOf(" ");
        p > 0 ? l.setAttributeNS(u.slice(0, p), u.slice(p + 1), c[u]) : l.setAttribute(u, c[u]);
      }
  }
  for (let u = d; u < e.length; u++) {
    let p = e[u];
    if (p === 0) {
      if (u < e.length - 1 || u > d)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: l, contentDOM: l };
    } else {
      let { dom: f, contentDOM: h } = Ha(t, p, r, o);
      if (l.appendChild(f), h) {
        if (s)
          throw new RangeError("Multiple content holes");
        s = h;
      }
    }
  }
  return { dom: l, contentDOM: s };
}
const dh = 65535, uh = Math.pow(2, 16);
function x5(t, e) {
  return t + e * uh;
}
function ru(t) {
  return t & dh;
}
function k5(t) {
  return (t - (t & dh)) / uh;
}
const ph = 1, fh = 2, qa = 4, hh = 8;
class pl {
  /**
  @internal
  */
  constructor(e, r, o) {
    this.pos = e, this.delInfo = r, this.recover = o;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & hh) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (ph | qa)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (fh | qa)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & qa) > 0;
  }
}
class Et {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, r = !1) {
    if (this.ranges = e, this.inverted = r, !e.length && Et.empty)
      return Et.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let r = 0, o = ru(e);
    if (!this.inverted)
      for (let n = 0; n < o; n++)
        r += this.ranges[n * 3 + 2] - this.ranges[n * 3 + 1];
    return this.ranges[o * 3] + r + k5(e);
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
  _map(e, r, o) {
    let n = 0, a = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let s = 0; s < this.ranges.length; s += 3) {
      let l = this.ranges[s] - (this.inverted ? n : 0);
      if (l > e)
        break;
      let c = this.ranges[s + a], d = this.ranges[s + i], u = l + c;
      if (e <= u) {
        let p = c ? e == l ? -1 : e == u ? 1 : r : r, f = l + n + (p < 0 ? 0 : d);
        if (o)
          return f;
        let h = e == (r < 0 ? l : u) ? null : x5(s / 3, e - l), m = e == l ? fh : e == u ? ph : qa;
        return (r < 0 ? e != l : e != u) && (m |= hh), new pl(f, m, h);
      }
      n += d - c;
    }
    return o ? e + n : new pl(e + n, 0, null);
  }
  /**
  @internal
  */
  touches(e, r) {
    let o = 0, n = ru(r), a = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let s = 0; s < this.ranges.length; s += 3) {
      let l = this.ranges[s] - (this.inverted ? o : 0);
      if (l > e)
        break;
      let c = this.ranges[s + a], d = l + c;
      if (e <= d && s == n * 3)
        return !0;
      o += this.ranges[s + i] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let r = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let n = 0, a = 0; n < this.ranges.length; n += 3) {
      let i = this.ranges[n], s = i - (this.inverted ? a : 0), l = i + (this.inverted ? 0 : a), c = this.ranges[n + r], d = this.ranges[n + o];
      e(s, s + c, l, l + d), a += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Et(this.ranges, !this.inverted);
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
    return e == 0 ? Et.empty : new Et(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Et.empty = new Et([]);
class In {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], r, o = 0, n = e.length) {
    this.maps = e, this.mirror = r, this.from = o, this.to = n;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, r = this.maps.length) {
    return new In(this.maps, this.mirror, e, r);
  }
  /**
  @internal
  */
  copy() {
    return new In(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
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
    for (let r = 0, o = this.maps.length; r < e.maps.length; r++) {
      let n = e.getMirror(r);
      this.appendMap(e.maps[r], n != null && n < r ? o + n : void 0);
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
    for (let r = e.maps.length - 1, o = this.maps.length + e.maps.length; r >= 0; r--) {
      let n = e.getMirror(r);
      this.appendMap(e.maps[r].invert(), n != null && n > r ? o - n - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new In();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, r = 1) {
    if (this.mirror)
      return this._map(e, r, !0);
    for (let o = this.from; o < this.to; o++)
      e = this.maps[o].map(e, r);
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
  _map(e, r, o) {
    let n = 0;
    for (let a = this.from; a < this.to; a++) {
      let i = this.maps[a], s = i.mapResult(e, r);
      if (s.recover != null) {
        let l = this.getMirror(a);
        if (l != null && l > a && l < this.to) {
          a = l, e = this.maps[l].recover(s.recover);
          continue;
        }
      }
      n |= s.delInfo, e = s.pos;
    }
    return o ? e : new pl(e, n, null);
  }
}
const _s = /* @__PURE__ */ Object.create(null);
let pt = class {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Et.empty;
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
    let o = _s[r.stepType];
    if (!o)
      throw new RangeError(`No step type ${r.stepType} defined`);
    return o.fromJSON(e, r);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, r) {
    if (e in _s)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return _s[e] = r, r.prototype.jsonID = e, r;
  }
}, wt = class bn {
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
    return new bn(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new bn(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, r, o, n) {
    try {
      return bn.ok(e.replace(r, o, n));
    } catch (a) {
      if (a instanceof pi)
        return bn.fail(a.message);
      throw a;
    }
  }
};
function uc(t, e, r) {
  let o = [];
  for (let n = 0; n < t.childCount; n++) {
    let a = t.child(n);
    a.content.size && (a = a.copy(uc(a.content, e, a))), a.isInline && (a = e(a, r, n)), o.push(a);
  }
  return ee.fromArray(o);
}
let mh = class wn extends pt {
  /**
  Create a mark step.
  */
  constructor(e, r, o) {
    super(), this.from = e, this.to = r, this.mark = o;
  }
  apply(e) {
    let r = e.slice(this.from, this.to), o = e.resolve(this.from), n = o.node(o.sharedDepth(this.to)), a = new ue(uc(r.content, (i, s) => !i.isAtom || !s.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), n), r.openStart, r.openEnd);
    return wt.fromReplace(e, this.from, this.to, a);
  }
  invert() {
    return new lo(this.from, this.to, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.from, 1), o = e.mapResult(this.to, -1);
    return r.deleted && o.deleted || r.pos >= o.pos ? null : new wn(r.pos, o.pos, this.mark);
  }
  merge(e) {
    return e instanceof wn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new wn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new wn(r.from, r.to, e.markFromJSON(r.mark));
  }
};
pt.jsonID("addMark", mh);
class lo extends pt {
  /**
  Create a mark-removing step.
  */
  constructor(e, r, o) {
    super(), this.from = e, this.to = r, this.mark = o;
  }
  apply(e) {
    let r = e.slice(this.from, this.to), o = new ue(uc(r.content, (n) => n.mark(this.mark.removeFromSet(n.marks)), e), r.openStart, r.openEnd);
    return wt.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new mh(this.from, this.to, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.from, 1), o = e.mapResult(this.to, -1);
    return r.deleted && o.deleted || r.pos >= o.pos ? null : new lo(r.pos, o.pos, this.mark);
  }
  merge(e) {
    return e instanceof lo && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new lo(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new lo(r.from, r.to, e.markFromJSON(r.mark));
  }
}
pt.jsonID("removeMark", lo);
let gh = class yn extends pt {
  /**
  Create a node mark step.
  */
  constructor(e, r) {
    super(), this.pos = e, this.mark = r;
  }
  apply(e) {
    let r = e.nodeAt(this.pos);
    if (!r)
      return wt.fail("No node at mark step's position");
    let o = r.type.create(r.attrs, null, this.mark.addToSet(r.marks));
    return wt.fromReplace(e, this.pos, this.pos + 1, new ue(ee.from(o), 0, r.isLeaf ? 0 : 1));
  }
  invert(e) {
    let r = e.nodeAt(this.pos);
    if (r) {
      let o = this.mark.addToSet(r.marks);
      if (o.length == r.marks.length) {
        for (let n = 0; n < r.marks.length; n++)
          if (!r.marks[n].isInSet(o))
            return new yn(this.pos, r.marks[n]);
        return new yn(this.pos, this.mark);
      }
    }
    return new ra(this.pos, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.pos, 1);
    return r.deletedAfter ? null : new yn(r.pos, this.mark);
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
    return new yn(r.pos, e.markFromJSON(r.mark));
  }
};
pt.jsonID("addNodeMark", gh);
class ra extends pt {
  /**
  Create a mark-removing step.
  */
  constructor(e, r) {
    super(), this.pos = e, this.mark = r;
  }
  apply(e) {
    let r = e.nodeAt(this.pos);
    if (!r)
      return wt.fail("No node at mark step's position");
    let o = r.type.create(r.attrs, null, this.mark.removeFromSet(r.marks));
    return wt.fromReplace(e, this.pos, this.pos + 1, new ue(ee.from(o), 0, r.isLeaf ? 0 : 1));
  }
  invert(e) {
    let r = e.nodeAt(this.pos);
    return !r || !this.mark.isInSet(r.marks) ? this : new gh(this.pos, this.mark);
  }
  map(e) {
    let r = e.mapResult(this.pos, 1);
    return r.deletedAfter ? null : new ra(r.pos, this.mark);
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
    return new ra(r.pos, e.markFromJSON(r.mark));
  }
}
pt.jsonID("removeNodeMark", ra);
let cn = class no extends pt {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, r, o, n = !1) {
    super(), this.from = e, this.to = r, this.slice = o, this.structure = n;
  }
  apply(e) {
    return this.structure && fl(e, this.from, this.to) ? wt.fail("Structure replace would overwrite content") : wt.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Et([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new no(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let r = e.mapResult(this.from, 1), o = e.mapResult(this.to, -1);
    return r.deletedAcross && o.deletedAcross ? null : new no(r.pos, Math.max(r.pos, o.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof no) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let r = this.slice.size + e.slice.size == 0 ? ue.empty : new ue(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new no(this.from, this.to + (e.to - e.from), r, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let r = this.slice.size + e.slice.size == 0 ? ue.empty : new ue(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new no(e.from, this.to, r, this.structure);
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
    return new no(r.from, r.to, ue.fromJSON(e, r.slice), !!r.structure);
  }
};
pt.jsonID("replace", cn);
let mr = class Wa extends pt {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, r, o, n, a, i, s = !1) {
    super(), this.from = e, this.to = r, this.gapFrom = o, this.gapTo = n, this.slice = a, this.insert = i, this.structure = s;
  }
  apply(e) {
    if (this.structure && (fl(e, this.from, this.gapFrom) || fl(e, this.gapTo, this.to)))
      return wt.fail("Structure gap-replace would overwrite content");
    let r = e.slice(this.gapFrom, this.gapTo);
    if (r.openStart || r.openEnd)
      return wt.fail("Gap is not a flat range");
    let o = this.slice.insertAt(this.insert, r.content);
    return o ? wt.fromReplace(e, this.from, this.to, o) : wt.fail("Content does not fit in gap");
  }
  getMap() {
    return new Et([
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
    return new Wa(this.from, this.from + this.slice.size + r, this.from + this.insert, this.from + this.insert + r, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let r = e.mapResult(this.from, 1), o = e.mapResult(this.to, -1), n = this.from == this.gapFrom ? r.pos : e.map(this.gapFrom, -1), a = this.to == this.gapTo ? o.pos : e.map(this.gapTo, 1);
    return r.deletedAcross && o.deletedAcross || n < r.pos || a > o.pos ? null : new Wa(r.pos, o.pos, n, a, this.slice, this.insert, this.structure);
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
    return new Wa(r.from, r.to, r.gapFrom, r.gapTo, ue.fromJSON(e, r.slice), r.insert, !!r.structure);
  }
};
pt.jsonID("replaceAround", mr);
function fl(t, e, r) {
  let o = t.resolve(e), n = r - e, a = o.depth;
  for (; n > 0 && a > 0 && o.indexAfter(a) == o.node(a).childCount; )
    a--, n--;
  if (n > 0) {
    let i = o.node(a).maybeChild(o.indexAfter(a));
    for (; n > 0; ) {
      if (!i || i.isLeaf)
        return !0;
      i = i.firstChild, n--;
    }
  }
  return !1;
}
function $5(t, e, r) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (r == t.childCount || t.canReplace(0, r));
}
function dn(t) {
  let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth; ; --r) {
    let o = t.$from.node(r), n = t.$from.index(r), a = t.$to.indexAfter(r);
    if (r < t.depth && o.canReplace(n, a, e))
      return r;
    if (r == 0 || o.type.spec.isolating || !$5(o, n, a))
      break;
  }
  return null;
}
function vh(t, e, r = null, o = t) {
  let n = S5(t, e), a = n && _5(o, e);
  return a ? n.map(ou).concat({ type: e, attrs: r }).concat(a.map(ou)) : null;
}
function ou(t) {
  return { type: t, attrs: null };
}
function S5(t, e) {
  let { parent: r, startIndex: o, endIndex: n } = t, a = r.contentMatchAt(o).findWrapping(e);
  if (!a)
    return null;
  let i = a.length ? a[0] : e;
  return r.canReplaceWith(o, n, i) ? a : null;
}
function _5(t, e) {
  let { parent: r, startIndex: o, endIndex: n } = t, a = r.child(o), i = e.contentMatch.findWrapping(a.type);
  if (!i)
    return null;
  let s = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let l = o; s && l < n; l++)
    s = s.matchType(r.child(l).type);
  return !s || !s.validEnd ? null : i;
}
function Xo(t, e, r = 1, o) {
  let n = t.resolve(e), a = n.depth - r, i = o && o[o.length - 1] || n.parent;
  if (a < 0 || n.parent.type.spec.isolating || !n.parent.canReplace(n.index(), n.parent.childCount) || !i.type.validContent(n.parent.content.cutByIndex(n.index(), n.parent.childCount)))
    return !1;
  for (let c = n.depth - 1, d = r - 2; c > a; c--, d--) {
    let u = n.node(c), p = n.index(c);
    if (u.type.spec.isolating)
      return !1;
    let f = u.content.cutByIndex(p, u.childCount), h = o && o[d + 1];
    h && (f = f.replaceChild(0, h.type.create(h.attrs)));
    let m = o && o[d] || u;
    if (!u.canReplace(p + 1, u.childCount) || !m.type.validContent(f))
      return !1;
  }
  let s = n.indexAfter(a), l = o && o[0];
  return n.node(a).canReplaceWith(s, s, l ? l.type : n.node(a + 1).type);
}
function Mo(t, e) {
  let r = t.resolve(e), o = r.index();
  return bh(r.nodeBefore, r.nodeAfter) && r.parent.canReplace(o, o + 1);
}
function bh(t, e) {
  return !!(t && e && !t.isLeaf && t.canAppend(e));
}
function Yi(t, e, r = -1) {
  let o = t.resolve(e);
  for (let n = o.depth; ; n--) {
    let a, i, s = o.index(n);
    if (n == o.depth ? (a = o.nodeBefore, i = o.nodeAfter) : r > 0 ? (a = o.node(n + 1), s++, i = o.node(n).maybeChild(s)) : (a = o.node(n).maybeChild(s - 1), i = o.node(n + 1)), a && !a.isTextblock && bh(a, i) && o.node(n).canReplace(s, s + 1))
      return e;
    if (n == 0)
      break;
    e = r < 0 ? o.before(n) : o.after(n);
  }
}
function C5(t, e, r) {
  let o = t.resolve(e);
  if (!r.content.size)
    return e;
  let n = r.content;
  for (let a = 0; a < r.openStart; a++)
    n = n.firstChild.content;
  for (let a = 1; a <= (r.openStart == 0 && r.size ? 2 : 1); a++)
    for (let i = o.depth; i >= 0; i--) {
      let s = i == o.depth ? 0 : o.pos <= (o.start(i + 1) + o.end(i + 1)) / 2 ? -1 : 1, l = o.index(i) + (s > 0 ? 1 : 0), c = o.node(i), d = !1;
      if (a == 1)
        d = c.canReplace(l, l, n);
      else {
        let u = c.contentMatchAt(l).findWrapping(n.firstChild.type);
        d = u && c.canReplaceWith(l, l, u[0]);
      }
      if (d)
        return s == 0 ? o.pos : s < 0 ? o.before(i + 1) : o.after(i + 1);
    }
  return null;
}
function pc(t, e, r = e, o = ue.empty) {
  if (e == r && !o.size)
    return null;
  let n = t.resolve(e), a = t.resolve(r);
  return O5(n, a, o) ? new cn(e, r, o) : new E5(n, a, o).fit();
}
function O5(t, e, r) {
  return !r.openStart && !r.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), r.content);
}
class E5 {
  constructor(e, r, o) {
    this.$from = e, this.$to = r, this.unplaced = o, this.frontier = [], this.placed = ee.empty;
    for (let n = 0; n <= e.depth; n++) {
      let a = e.node(n);
      this.frontier.push({
        type: a.type,
        match: a.contentMatchAt(e.indexAfter(n))
      });
    }
    for (let n = e.depth; n > 0; n--)
      this.placed = ee.from(e.node(n).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), r = this.placed.size - this.depth - this.$from.depth, o = this.$from, n = this.close(e < 0 ? this.$to : o.doc.resolve(e));
    if (!n)
      return null;
    let a = this.placed, i = o.depth, s = n.depth;
    for (; i && s && a.childCount == 1; )
      a = a.firstChild.content, i--, s--;
    let l = new ue(a, i, s);
    return e > -1 ? new mr(o.pos, e, this.$to.pos, this.$to.end(), l, r) : l.size || o.pos != this.$to.pos ? new cn(o.pos, n.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let r = this.unplaced.content, o = 0, n = this.unplaced.openEnd; o < e; o++) {
      let a = r.firstChild;
      if (r.childCount > 1 && (n = 0), a.type.spec.isolating && n <= o) {
        e = o;
        break;
      }
      r = a.content;
    }
    for (let r = 1; r <= 2; r++)
      for (let o = r == 1 ? e : this.unplaced.openStart; o >= 0; o--) {
        let n, a = null;
        o ? (a = Cs(this.unplaced.content, o - 1).firstChild, n = a.content) : n = this.unplaced.content;
        let i = n.firstChild;
        for (let s = this.depth; s >= 0; s--) {
          let { type: l, match: c } = this.frontier[s], d, u = null;
          if (r == 1 && (i ? c.matchType(i.type) || (u = c.fillBefore(ee.from(i), !1)) : a && l.compatibleContent(a.type)))
            return { sliceDepth: o, frontierDepth: s, parent: a, inject: u };
          if (r == 2 && i && (d = c.findWrapping(i.type)))
            return { sliceDepth: o, frontierDepth: s, parent: a, wrap: d };
          if (a && c.matchType(a.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: r, openEnd: o } = this.unplaced, n = Cs(e, r);
    return !n.childCount || n.firstChild.isLeaf ? !1 : (this.unplaced = new ue(e, r + 1, Math.max(o, n.size + r >= e.size - o ? r + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: r, openEnd: o } = this.unplaced, n = Cs(e, r);
    if (n.childCount <= 1 && r > 0) {
      let a = e.size - r <= r + n.size;
      this.unplaced = new ue(xn(e, r - 1, 1), r - 1, a ? r - 1 : o);
    } else
      this.unplaced = new ue(xn(e, r, 1), r, o);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: r, parent: o, inject: n, wrap: a }) {
    for (; this.depth > r; )
      this.closeFrontierNode();
    if (a)
      for (let m = 0; m < a.length; m++)
        this.openFrontierNode(a[m]);
    let i = this.unplaced, s = o ? o.content : i.content, l = i.openStart - e, c = 0, d = [], { match: u, type: p } = this.frontier[r];
    if (n) {
      for (let m = 0; m < n.childCount; m++)
        d.push(n.child(m));
      u = u.matchFragment(n);
    }
    let f = s.size + e - (i.content.size - i.openEnd);
    for (; c < s.childCount; ) {
      let m = s.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || l == 0 || m.content.size) && (u = g, d.push(wh(m.mark(p.allowedMarks(m.marks)), c == 1 ? l : 0, c == s.childCount ? f : -1)));
    }
    let h = c == s.childCount;
    h || (f = -1), this.placed = kn(this.placed, r, ee.from(d)), this.frontier[r].match = u, h && f < 0 && o && o.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = s; m < f; m++) {
      let b = g.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), g = b.content;
    }
    this.unplaced = h ? e == 0 ? ue.empty : new ue(xn(i.content, e - 1, 1), e - 1, f < 0 ? i.openEnd : e - 1) : new ue(xn(i.content, e, c), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], r;
    if (!e.type.isTextblock || !Os(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (r = this.findCloseLevel(this.$to)) && r.depth == this.depth)
      return -1;
    let { depth: o } = this.$to, n = this.$to.after(o);
    for (; o > 1 && n == this.$to.end(--o); )
      ++n;
    return n;
  }
  findCloseLevel(e) {
    e: for (let r = Math.min(this.depth, e.depth); r >= 0; r--) {
      let { match: o, type: n } = this.frontier[r], a = r < e.depth && e.end(r + 1) == e.pos + (e.depth - (r + 1)), i = Os(e, r, n, o, a);
      if (i) {
        for (let s = r - 1; s >= 0; s--) {
          let { match: l, type: c } = this.frontier[s], d = Os(e, s, c, l, !0);
          if (!d || d.childCount)
            continue e;
        }
        return { depth: r, fit: i, move: a ? e.doc.resolve(e.after(r + 1)) : e };
      }
    }
  }
  close(e) {
    let r = this.findCloseLevel(e);
    if (!r)
      return null;
    for (; this.depth > r.depth; )
      this.closeFrontierNode();
    r.fit.childCount && (this.placed = kn(this.placed, r.depth, r.fit)), e = r.move;
    for (let o = r.depth + 1; o <= e.depth; o++) {
      let n = e.node(o), a = n.type.contentMatch.fillBefore(n.content, !0, e.index(o));
      this.openFrontierNode(n.type, n.attrs, a);
    }
    return e;
  }
  openFrontierNode(e, r = null, o) {
    let n = this.frontier[this.depth];
    n.match = n.match.matchType(e), this.placed = kn(this.placed, this.depth, ee.from(e.create(r, o))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let e = this.frontier.pop().match.fillBefore(ee.empty, !0);
    e.childCount && (this.placed = kn(this.placed, this.frontier.length, e));
  }
}
function xn(t, e, r) {
  return e == 0 ? t.cutByIndex(r, t.childCount) : t.replaceChild(0, t.firstChild.copy(xn(t.firstChild.content, e - 1, r)));
}
function kn(t, e, r) {
  return e == 0 ? t.append(r) : t.replaceChild(t.childCount - 1, t.lastChild.copy(kn(t.lastChild.content, e - 1, r)));
}
function Cs(t, e) {
  for (let r = 0; r < e; r++)
    t = t.firstChild.content;
  return t;
}
function wh(t, e, r) {
  if (e <= 0)
    return t;
  let o = t.content;
  return e > 1 && (o = o.replaceChild(0, wh(o.firstChild, e - 1, o.childCount == 1 ? r - 1 : 0))), e > 0 && (o = t.type.contentMatch.fillBefore(o).append(o), r <= 0 && (o = o.append(t.type.contentMatch.matchFragment(o).fillBefore(ee.empty, !0)))), t.copy(o);
}
function Os(t, e, r, o, n) {
  let a = t.node(e), i = n ? t.indexAfter(e) : t.index(e);
  if (i == a.childCount && !r.compatibleContent(a.type))
    return null;
  let s = o.fillBefore(a.content, !0, i);
  return s && !M5(r, a.content, i) ? s : null;
}
function M5(t, e, r) {
  for (let o = r; o < e.childCount; o++)
    if (!t.allowsMarks(e.child(o).marks))
      return !0;
  return !1;
}
class Nn extends pt {
  /**
  Construct an attribute step.
  */
  constructor(e, r, o) {
    super(), this.pos = e, this.attr = r, this.value = o;
  }
  apply(e) {
    let r = e.nodeAt(this.pos);
    if (!r)
      return wt.fail("No node at attribute step's position");
    let o = /* @__PURE__ */ Object.create(null);
    for (let a in r.attrs)
      o[a] = r.attrs[a];
    o[this.attr] = this.value;
    let n = r.type.create(o, null, r.marks);
    return wt.fromReplace(e, this.pos, this.pos + 1, new ue(ee.from(n), 0, r.isLeaf ? 0 : 1));
  }
  getMap() {
    return Et.empty;
  }
  invert(e) {
    return new Nn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let r = e.mapResult(this.pos, 1);
    return r.deletedAfter ? null : new Nn(r.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, r) {
    if (typeof r.pos != "number" || typeof r.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Nn(r.pos, r.attr, r.value);
  }
}
pt.jsonID("attr", Nn);
class bi extends pt {
  /**
  Construct an attribute step.
  */
  constructor(e, r) {
    super(), this.attr = e, this.value = r;
  }
  apply(e) {
    let r = /* @__PURE__ */ Object.create(null);
    for (let n in e.attrs)
      r[n] = e.attrs[n];
    r[this.attr] = this.value;
    let o = e.type.create(r, e.content, e.marks);
    return wt.ok(o);
  }
  getMap() {
    return Et.empty;
  }
  invert(e) {
    return new bi(this.attr, e.attrs[this.attr]);
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
    return new bi(r.attr, r.value);
  }
}
pt.jsonID("docAttr", bi);
let oa = class extends Error {
};
oa = function t(e) {
  let r = Error.call(this, e);
  return r.__proto__ = t.prototype, r;
};
oa.prototype = Object.create(Error.prototype);
oa.prototype.constructor = oa;
oa.prototype.name = "TransformError";
const Es = /* @__PURE__ */ Object.create(null);
class Pe {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, r, o) {
    this.$anchor = e, this.$head = r, this.ranges = o || [new T5(e.min(r), e.max(r))];
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
  replace(e, r = ue.empty) {
    let o = r.content.lastChild, n = null;
    for (let s = 0; s < r.openEnd; s++)
      n = o, o = o.lastChild;
    let a = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: l, $to: c } = i[s], d = e.mapping.slice(a);
      e.replaceRange(d.map(l.pos), d.map(c.pos), s ? ue.empty : r), s == 0 && iu(e, a, (o ? o.isInline : n && n.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, r) {
    let o = e.steps.length, n = this.ranges;
    for (let a = 0; a < n.length; a++) {
      let { $from: i, $to: s } = n[a], l = e.mapping.slice(o), c = l.map(i.pos), d = l.map(s.pos);
      a ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, r), iu(e, o, r.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, r, o = !1) {
    let n = e.parent.inlineContent ? new Ie(e) : Vo(e.node(0), e.parent, e.pos, e.index(), r, o);
    if (n)
      return n;
    for (let a = e.depth - 1; a >= 0; a--) {
      let i = r < 0 ? Vo(e.node(0), e.node(a), e.before(a + 1), e.index(a), r, o) : Vo(e.node(0), e.node(a), e.after(a + 1), e.index(a) + 1, r, o);
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
    return this.findFrom(e, r) || this.findFrom(e, -r) || new Yt(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Vo(e, e, 0, 0, 1) || new Yt(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Vo(e, e, e.content.size, e.childCount, -1) || new Yt(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, r) {
    if (!r || !r.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let o = Es[r.type];
    if (!o)
      throw new RangeError(`No selection type ${r.type} defined`);
    return o.fromJSON(e, r);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, r) {
    if (e in Es)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Es[e] = r, r.prototype.jsonID = e, r;
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
    return Ie.between(this.$anchor, this.$head).getBookmark();
  }
}
Pe.prototype.visible = !0;
class T5 {
  /**
  Create a range.
  */
  constructor(e, r) {
    this.$from = e, this.$to = r;
  }
}
let nu = !1;
function au(t) {
  !nu && !t.parent.inlineContent && (nu = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class Ie extends Pe {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, r = e) {
    au(e), au(r), super(e, r);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, r) {
    let o = e.resolve(r.map(this.head));
    if (!o.parent.inlineContent)
      return Pe.near(o);
    let n = e.resolve(r.map(this.anchor));
    return new Ie(n.parent.inlineContent ? n : o, o);
  }
  replace(e, r = ue.empty) {
    if (super.replace(e, r), r == ue.empty) {
      let o = this.$from.marksAcross(this.$to);
      o && e.ensureMarks(o);
    }
  }
  eq(e) {
    return e instanceof Ie && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Xi(this.anchor, this.head);
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
    return new Ie(e.resolve(r.anchor), e.resolve(r.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, r, o = r) {
    let n = e.resolve(r);
    return new this(n, o == r ? n : e.resolve(o));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, r, o) {
    let n = e.pos - r.pos;
    if ((!o || n) && (o = n >= 0 ? 1 : -1), !r.parent.inlineContent) {
      let a = Pe.findFrom(r, o, !0) || Pe.findFrom(r, -o, !0);
      if (a)
        r = a.$head;
      else
        return Pe.near(r, o);
    }
    return e.parent.inlineContent || (n == 0 ? e = r : (e = (Pe.findFrom(e, -o, !0) || Pe.findFrom(e, o, !0)).$anchor, e.pos < r.pos != n < 0 && (e = r))), new Ie(e, r);
  }
}
Pe.jsonID("text", Ie);
class Xi {
  constructor(e, r) {
    this.anchor = e, this.head = r;
  }
  map(e) {
    return new Xi(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return Ie.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
let Se = class $n extends Pe {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let r = e.nodeAfter, o = e.node(0).resolve(e.pos + r.nodeSize);
    super(e, o), this.node = r;
  }
  map(e, r) {
    let { deleted: o, pos: n } = r.mapResult(this.anchor), a = e.resolve(n);
    return o ? Pe.near(a) : new $n(a);
  }
  content() {
    return new ue(ee.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof $n && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new fc(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new $n(e.resolve(r.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, r) {
    return new $n(e.resolve(r));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
};
Se.prototype.visible = !1;
Pe.jsonID("node", Se);
class fc {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: r, pos: o } = e.mapResult(this.anchor);
    return r ? new Xi(o, o) : new fc(o);
  }
  resolve(e) {
    let r = e.resolve(this.anchor), o = r.nodeAfter;
    return o && Se.isSelectable(o) ? new Se(r) : Pe.near(r);
  }
}
class Yt extends Pe {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, r = ue.empty) {
    if (r == ue.empty) {
      e.delete(0, e.doc.content.size);
      let o = Pe.atStart(e.doc);
      o.eq(e.selection) || e.setSelection(o);
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
    return new Yt(e);
  }
  map(e) {
    return new Yt(e);
  }
  eq(e) {
    return e instanceof Yt;
  }
  getBookmark() {
    return A5;
  }
}
Pe.jsonID("all", Yt);
const A5 = {
  map() {
    return this;
  },
  resolve(t) {
    return new Yt(t);
  }
};
function Vo(t, e, r, o, n, a = !1) {
  if (e.inlineContent)
    return Ie.create(t, r);
  for (let i = o - (n > 0 ? 0 : 1); n > 0 ? i < e.childCount : i >= 0; i += n) {
    let s = e.child(i);
    if (s.isAtom) {
      if (!a && Se.isSelectable(s))
        return Se.create(t, r - (n < 0 ? s.nodeSize : 0));
    } else {
      let l = Vo(t, s, r + n, n < 0 ? s.childCount : 0, n, a);
      if (l)
        return l;
    }
    r += s.nodeSize * n;
  }
  return null;
}
function iu(t, e, r) {
  let o = t.steps.length - 1;
  if (o < e)
    return;
  let n = t.steps[o];
  if (!(n instanceof cn || n instanceof mr))
    return;
  let a = t.mapping.maps[o], i;
  a.forEach((s, l, c, d) => {
    i == null && (i = d);
  }), t.setSelection(Pe.near(t.doc.resolve(i), r));
}
function su(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Aa {
  constructor(e, r, o) {
    this.name = e, this.init = su(r.init, o), this.apply = su(r.apply, o);
  }
}
new Aa("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new Aa("selection", {
  init(t, e) {
    return t.selection || Pe.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new Aa("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, r, o) {
    return o.selection.$cursor ? t.storedMarks : null;
  }
}), new Aa("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function yh(t, e, r) {
  for (let o in t) {
    let n = t[o];
    n instanceof Function ? n = n.bind(e) : o == "handleDOMEvents" && (n = yh(n, e, {})), r[o] = n;
  }
  return r;
}
let er = class {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && yh(e.props, this, this.props), this.key = e.key ? e.key.key : xh("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
};
const Ms = /* @__PURE__ */ Object.create(null);
function xh(t) {
  return t in Ms ? t + "$" + ++Ms[t] : (Ms[t] = 0, t + "$");
}
class Bt {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = xh(e);
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
const To = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, kh = function(t, e, r, o) {
  return r && (lu(t, e, r, o, -1) || lu(t, e, r, o, 1));
}, I5 = /^(img|br|input|textarea|hr)$/i;
function lu(t, e, r, o, n) {
  for (; ; ) {
    if (t == r && e == o)
      return !0;
    if (e == (n < 0 ? 0 : wi(t))) {
      let a = t.parentNode;
      if (!a || a.nodeType != 1 || hc(t) || I5.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = To(t) + (n < 0 ? 0 : 1), t = a;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (n < 0 ? -1 : 0)], t.contentEditable == "false")
        return !1;
      e = n < 0 ? wi(t) : 0;
    } else
      return !1;
  }
}
function wi(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function N5(t, e, r) {
  for (let o = e == 0, n = e == wi(t); o || n; ) {
    if (t == r)
      return !0;
    let a = To(t);
    if (t = t.parentNode, !t)
      return !1;
    o = o && a == 0, n = n && a == wi(t);
  }
}
function hc(t) {
  let e;
  for (let r = t; r && !(e = r.pmViewDesc); r = r.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const $h = function(t) {
  return t.focusNode && kh(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Sh(t, e) {
  let r = document.createEvent("Event");
  return r.initEvent("keydown", !0, !0), r.keyCode = t, r.key = r.code = e, r;
}
const gr = typeof navigator < "u" ? navigator : null, cu = typeof document < "u" ? document : null, Kr = gr && gr.userAgent || "", hl = /Edge\/(\d+)/.exec(Kr), _h = /MSIE \d/.exec(Kr), ml = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Kr), ha = !!(_h || ml || hl), Ch = _h ? document.documentMode : ml ? +ml[1] : hl ? +hl[1] : 0, Gi = !ha && /gecko\/(\d+)/i.test(Kr);
Gi && +(/Firefox\/(\d+)/.exec(Kr) || [0, 0])[1];
const gl = !ha && /Chrome\/(\d+)/.exec(Kr), Jr = !!gl, Oh = gl ? +gl[1] : 0, Ao = !ha && !!gr && /Apple Computer/.test(gr.vendor), mc = Ao && (/Mobile\/\w+/.test(Kr) || !!gr && gr.maxTouchPoints > 2), jt = mc || (gr ? /Mac/.test(gr.platform) : !1), z5 = gr ? /Win/.test(gr.platform) : !1, ma = /Android \d/.test(Kr), gc = !!cu && "webkitFontSmoothing" in cu.documentElement.style, j5 = gc ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function P5(t, e = null) {
  let r = t.domSelectionRange(), o = t.state.doc;
  if (!r.focusNode)
    return null;
  let n = t.docView.nearestDesc(r.focusNode), a = n && n.size == 0, i = t.docView.posFromDOM(r.focusNode, r.focusOffset, 1);
  if (i < 0)
    return null;
  let s = o.resolve(i), l, c;
  if ($h(r)) {
    for (l = s; n && !n.node; )
      n = n.parent;
    let d = n.node;
    if (n && d.isAtom && Se.isSelectable(d) && n.parent && !(d.isInline && N5(r.focusNode, r.focusOffset, n.dom))) {
      let u = n.posBefore;
      c = new Se(i == u ? s : o.resolve(u));
    }
  } else {
    let d = t.docView.posFromDOM(r.anchorNode, r.anchorOffset, 1);
    if (d < 0)
      return null;
    l = o.resolve(d);
  }
  if (!c) {
    let d = e == "pointer" || t.state.selection.head < s.pos && !a ? 1 : -1;
    c = Mh(t, l, s, d);
  }
  return c;
}
function Eh(t) {
  return t.editable ? t.hasFocus() : D5(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function vc(t, e = !1) {
  let r = t.state.selection;
  if (L5(t, r), !!Eh(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Jr) {
      let o = t.domSelectionRange(), n = t.domObserver.currentSelection;
      if (o.anchorNode && n.anchorNode && kh(o.anchorNode, o.anchorOffset, n.anchorNode, n.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      V5(t);
    else {
      let { anchor: o, head: n } = r, a, i;
      du && !(r instanceof Ie) && (r.$from.parent.inlineContent || (a = uu(t, r.from)), !r.empty && !r.$from.parent.inlineContent && (i = uu(t, r.to))), t.docView.setSelection(o, n, t.root, e), du && (a && pu(a), i && pu(i)), r.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && R5(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const du = Ao || Jr && Oh < 63;
function uu(t, e) {
  let { node: r, offset: o } = t.docView.domFromPos(e, 0), n = o < r.childNodes.length ? r.childNodes[o] : null, a = o ? r.childNodes[o - 1] : null;
  if (Ao && n && n.contentEditable == "false")
    return Ts(n);
  if ((!n || n.contentEditable == "false") && (!a || a.contentEditable == "false")) {
    if (n)
      return Ts(n);
    if (a)
      return Ts(a);
  }
}
function Ts(t) {
  return t.contentEditable = "true", Ao && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function pu(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function R5(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let r = t.domSelectionRange(), o = r.anchorNode, n = r.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (r.anchorNode != o || r.anchorOffset != n) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!Eh(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function V5(t) {
  let e = t.domSelection(), r = document.createRange();
  if (!e)
    return;
  let o = t.cursorWrapper.dom, n = o.nodeName == "IMG";
  n ? r.setStart(o.parentNode, To(o) + 1) : r.setStart(o, 0), r.collapse(!0), e.removeAllRanges(), e.addRange(r), !n && !t.state.selection.visible && ha && Ch <= 11 && (o.disabled = !0, o.disabled = !1);
}
function L5(t, e) {
  if (e instanceof Se) {
    let r = t.docView.descAt(e.from);
    r != t.lastSelectedViewDesc && (fu(t), r && r.selectNode(), t.lastSelectedViewDesc = r);
  } else
    fu(t);
}
function fu(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function Mh(t, e, r, o) {
  return t.someProp("createSelectionBetween", (n) => n(t, e, r)) || Ie.between(e, r, o);
}
function D5(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function vl(t, e) {
  let { $anchor: r, $head: o } = t.selection, n = e > 0 ? r.max(o) : r.min(o), a = n.parent.inlineContent ? n.depth ? t.doc.resolve(e > 0 ? n.after() : n.before()) : null : n;
  return a && Pe.findFrom(a, e);
}
function zr(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function hu(t, e, r) {
  let o = t.state.selection;
  if (o instanceof Ie)
    if (r.indexOf("s") > -1) {
      let { $head: n } = o, a = n.textOffset ? null : e < 0 ? n.nodeBefore : n.nodeAfter;
      if (!a || a.isText || !a.isLeaf)
        return !1;
      let i = t.state.doc.resolve(n.pos + a.nodeSize * (e < 0 ? -1 : 1));
      return zr(t, new Ie(o.$anchor, i));
    } else if (o.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let n = vl(t.state, e);
        return n && n instanceof Se ? zr(t, n) : !1;
      } else if (!(jt && r.indexOf("m") > -1)) {
        let n = o.$head, a = n.textOffset ? null : e < 0 ? n.nodeBefore : n.nodeAfter, i;
        if (!a || a.isText)
          return !1;
        let s = e < 0 ? n.pos - a.nodeSize : n.pos;
        return a.isAtom || (i = t.docView.descAt(s)) && !i.contentDOM ? Se.isSelectable(a) ? zr(t, new Se(e < 0 ? t.state.doc.resolve(n.pos - a.nodeSize) : n)) : gc ? zr(t, new Ie(t.state.doc.resolve(e < 0 ? s : s + a.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (o instanceof Se && o.node.isInline)
      return zr(t, new Ie(e > 0 ? o.$to : o.$from));
    {
      let n = vl(t.state, e);
      return n ? zr(t, n) : !1;
    }
  }
}
function yi(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function zn(t, e) {
  let r = t.pmViewDesc;
  return r && r.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Po(t, e) {
  return e < 0 ? B5(t) : F5(t);
}
function B5(t) {
  let e = t.domSelectionRange(), r = e.focusNode, o = e.focusOffset;
  if (!r)
    return;
  let n, a, i = !1;
  for (Gi && r.nodeType == 1 && o < yi(r) && zn(r.childNodes[o], -1) && (i = !0); ; )
    if (o > 0) {
      if (r.nodeType != 1)
        break;
      {
        let s = r.childNodes[o - 1];
        if (zn(s, -1))
          n = r, a = --o;
        else if (s.nodeType == 3)
          r = s, o = r.nodeValue.length;
        else
          break;
      }
    } else {
      if (Th(r))
        break;
      {
        let s = r.previousSibling;
        for (; s && zn(s, -1); )
          n = r.parentNode, a = To(s), s = s.previousSibling;
        if (s)
          r = s, o = yi(r);
        else {
          if (r = r.parentNode, r == t.dom)
            break;
          o = 0;
        }
      }
    }
  i ? bl(t, r, o) : n && bl(t, n, a);
}
function F5(t) {
  let e = t.domSelectionRange(), r = e.focusNode, o = e.focusOffset;
  if (!r)
    return;
  let n = yi(r), a, i;
  for (; ; )
    if (o < n) {
      if (r.nodeType != 1)
        break;
      let s = r.childNodes[o];
      if (zn(s, 1))
        a = r, i = ++o;
      else
        break;
    } else {
      if (Th(r))
        break;
      {
        let s = r.nextSibling;
        for (; s && zn(s, 1); )
          a = s.parentNode, i = To(s) + 1, s = s.nextSibling;
        if (s)
          r = s, o = 0, n = yi(r);
        else {
          if (r = r.parentNode, r == t.dom)
            break;
          o = n = 0;
        }
      }
    }
  a && bl(t, a, i);
}
function Th(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function H5(t, e) {
  for (; t && e == t.childNodes.length && !hc(t); )
    e = To(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let r = t.childNodes[e];
    if (r.nodeType == 3)
      return r;
    if (r.nodeType == 1 && r.contentEditable == "false")
      break;
    t = r, e = 0;
  }
}
function q5(t, e) {
  for (; t && !e && !hc(t); )
    e = To(t), t = t.parentNode;
  for (; t && e; ) {
    let r = t.childNodes[e - 1];
    if (r.nodeType == 3)
      return r;
    if (r.nodeType == 1 && r.contentEditable == "false")
      break;
    t = r, e = t.childNodes.length;
  }
}
function bl(t, e, r) {
  if (e.nodeType != 3) {
    let a, i;
    (i = H5(e, r)) ? (e = i, r = 0) : (a = q5(e, r)) && (e = a, r = a.nodeValue.length);
  }
  let o = t.domSelection();
  if (!o)
    return;
  if ($h(o)) {
    let a = document.createRange();
    a.setEnd(e, r), a.setStart(e, r), o.removeAllRanges(), o.addRange(a);
  } else o.extend && o.extend(e, r);
  t.domObserver.setCurSelection();
  let { state: n } = t;
  setTimeout(() => {
    t.state == n && vc(t);
  }, 50);
}
function mu(t, e) {
  let r = t.state.doc.resolve(e);
  if (!(Jr || z5) && r.parent.inlineContent) {
    let o = t.coordsAtPos(e);
    if (e > r.start()) {
      let n = t.coordsAtPos(e - 1), a = (n.top + n.bottom) / 2;
      if (a > o.top && a < o.bottom && Math.abs(n.left - o.left) > 1)
        return n.left < o.left ? "ltr" : "rtl";
    }
    if (e < r.end()) {
      let n = t.coordsAtPos(e + 1), a = (n.top + n.bottom) / 2;
      if (a > o.top && a < o.bottom && Math.abs(n.left - o.left) > 1)
        return n.left > o.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function gu(t, e, r) {
  let o = t.state.selection;
  if (o instanceof Ie && !o.empty || r.indexOf("s") > -1 || jt && r.indexOf("m") > -1)
    return !1;
  let { $from: n, $to: a } = o;
  if (!n.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let i = vl(t.state, e);
    if (i && i instanceof Se)
      return zr(t, i);
  }
  if (!n.parent.inlineContent) {
    let i = e < 0 ? n : a, s = o instanceof Yt ? Pe.near(i, e) : Pe.findFrom(i, e);
    return s ? zr(t, s) : !1;
  }
  return !1;
}
function vu(t, e) {
  if (!(t.state.selection instanceof Ie))
    return !0;
  let { $head: r, $anchor: o, empty: n } = t.state.selection;
  if (!r.sameParent(o))
    return !0;
  if (!n)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let a = !r.textOffset && (e < 0 ? r.nodeBefore : r.nodeAfter);
  if (a && !a.isText) {
    let i = t.state.tr;
    return e < 0 ? i.delete(r.pos - a.nodeSize, r.pos) : i.delete(r.pos, r.pos + a.nodeSize), t.dispatch(i), !0;
  }
  return !1;
}
function bu(t, e, r) {
  t.domObserver.stop(), e.contentEditable = r, t.domObserver.start();
}
function W5(t) {
  if (!Ao || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: r } = t.domSelectionRange();
  if (e && e.nodeType == 1 && r == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let o = e.firstChild;
    bu(t, o, "true"), setTimeout(() => bu(t, o, "false"), 20);
  }
  return !1;
}
function U5(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function K5(t, e) {
  let r = e.keyCode, o = U5(e);
  if (r == 8 || jt && r == 72 && o == "c")
    return vu(t, -1) || Po(t, -1);
  if (r == 46 && !e.shiftKey || jt && r == 68 && o == "c")
    return vu(t, 1) || Po(t, 1);
  if (r == 13 || r == 27)
    return !0;
  if (r == 37 || jt && r == 66 && o == "c") {
    let n = r == 37 ? mu(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return hu(t, n, o) || Po(t, n);
  } else if (r == 39 || jt && r == 70 && o == "c") {
    let n = r == 39 ? mu(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return hu(t, n, o) || Po(t, n);
  } else {
    if (r == 38 || jt && r == 80 && o == "c")
      return gu(t, -1, o) || Po(t, -1);
    if (r == 40 || jt && r == 78 && o == "c")
      return W5(t) || gu(t, 1, o) || Po(t, 1);
    if (o == (jt ? "m" : "c") && (r == 66 || r == 73 || r == 89 || r == 90))
      return !0;
  }
  return !1;
}
function Ah(t, e) {
  t.someProp("transformCopied", (f) => {
    e = f(e, t);
  });
  let r = [], { content: o, openStart: n, openEnd: a } = e;
  for (; n > 1 && a > 1 && o.childCount == 1 && o.firstChild.childCount == 1; ) {
    n--, a--;
    let f = o.firstChild;
    r.push(f.type.name, f.attrs != f.type.defaultAttrs ? f.attrs : null), o = f.content;
  }
  let i = t.someProp("clipboardSerializer") || lh.fromSchema(t.state.schema), s = Rh(), l = s.createElement("div");
  l.appendChild(i.serializeFragment(o, { document: s }));
  let c = l.firstChild, d, u = 0;
  for (; c && c.nodeType == 1 && (d = Ph[c.nodeName.toLowerCase()]); ) {
    for (let f = d.length - 1; f >= 0; f--) {
      let h = s.createElement(d[f]);
      for (; l.firstChild; )
        h.appendChild(l.firstChild);
      l.appendChild(h), u++;
    }
    c = l.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${n} ${a}${u ? ` -${u}` : ""} ${JSON.stringify(r)}`);
  let p = t.someProp("clipboardTextSerializer", (f) => f(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: l, text: p, slice: e };
}
function Ih(t, e, r, o, n) {
  let a = n.parent.type.spec.code, i, s;
  if (!r && !e)
    return null;
  let l = e && (o || a || !r);
  if (l) {
    if (t.someProp("transformPastedText", (p) => {
      e = p(e, a || o, t);
    }), a)
      return e ? new ue(ee.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : ue.empty;
    let u = t.someProp("clipboardTextParser", (p) => p(e, n, o, t));
    if (u)
      s = u;
    else {
      let p = n.marks(), { schema: f } = t.state, h = lh.fromSchema(f);
      i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = i.appendChild(document.createElement("p"));
        m && g.appendChild(h.serializeNode(f.text(m, p)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (u) => {
      r = u(r, t);
    }), i = X5(r), gc && G5(i);
  let c = i && i.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let p = i.firstChild;
      for (; p && p.nodeType != 1; )
        p = p.nextSibling;
      if (!p)
        break;
      i = p;
    }
  if (s || (s = (t.someProp("clipboardParser") || t.someProp("domParser") || Fa.fromSchema(t.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(l || d),
    context: n,
    ruleFromNode(u) {
      return u.nodeName == "BR" && !u.nextSibling && u.parentNode && !J5.test(u.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    s = Z5(wu(s, +d[1], +d[2]), d[4]);
  else if (s = ue.maxOpen(Y5(s.content, n), !0), s.openStart || s.openEnd) {
    let u = 0, p = 0;
    for (let f = s.content.firstChild; u < s.openStart && !f.type.spec.isolating; u++, f = f.firstChild)
      ;
    for (let f = s.content.lastChild; p < s.openEnd && !f.type.spec.isolating; p++, f = f.lastChild)
      ;
    s = wu(s, u, p);
  }
  return t.someProp("transformPasted", (u) => {
    s = u(s, t);
  }), s;
}
const J5 = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Y5(t, e) {
  if (t.childCount < 2)
    return t;
  for (let r = e.depth; r >= 0; r--) {
    let o = e.node(r).contentMatchAt(e.index(r)), n, a = [];
    if (t.forEach((i) => {
      if (!a)
        return;
      let s = o.findWrapping(i.type), l;
      if (!s)
        return a = null;
      if (l = a.length && n.length && zh(s, n, i, a[a.length - 1], 0))
        a[a.length - 1] = l;
      else {
        a.length && (a[a.length - 1] = jh(a[a.length - 1], n.length));
        let c = Nh(i, s);
        a.push(c), o = o.matchType(c.type), n = s;
      }
    }), a)
      return ee.from(a);
  }
  return t;
}
function Nh(t, e, r = 0) {
  for (let o = e.length - 1; o >= r; o--)
    t = e[o].create(null, ee.from(t));
  return t;
}
function zh(t, e, r, o, n) {
  if (n < t.length && n < e.length && t[n] == e[n]) {
    let a = zh(t, e, r, o.lastChild, n + 1);
    if (a)
      return o.copy(o.content.replaceChild(o.childCount - 1, a));
    if (o.contentMatchAt(o.childCount).matchType(n == t.length - 1 ? r.type : t[n + 1]))
      return o.copy(o.content.append(ee.from(Nh(r, t, n + 1))));
  }
}
function jh(t, e) {
  if (e == 0)
    return t;
  let r = t.content.replaceChild(t.childCount - 1, jh(t.lastChild, e - 1)), o = t.contentMatchAt(t.childCount).fillBefore(ee.empty, !0);
  return t.copy(r.append(o));
}
function wl(t, e, r, o, n, a) {
  let i = e < 0 ? t.firstChild : t.lastChild, s = i.content;
  return t.childCount > 1 && (a = 0), n < o - 1 && (s = wl(s, e, r, o, n + 1, a)), n >= r && (s = e < 0 ? i.contentMatchAt(0).fillBefore(s, a <= n).append(s) : s.append(i.contentMatchAt(i.childCount).fillBefore(ee.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, i.copy(s));
}
function wu(t, e, r) {
  return e < t.openStart && (t = new ue(wl(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), r < t.openEnd && (t = new ue(wl(t.content, 1, r, t.openEnd, 0, 0), t.openStart, r)), t;
}
const Ph = {
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
let yu = null;
function Rh() {
  return yu || (yu = document.implementation.createHTMLDocument("title"));
}
function X5(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let r = Rh().createElement("div"), o = /<([a-z][^>\s]+)/i.exec(t), n;
  if ((n = o && Ph[o[1].toLowerCase()]) && (t = n.map((a) => "<" + a + ">").join("") + t + n.map((a) => "</" + a + ">").reverse().join("")), r.innerHTML = t, n)
    for (let a = 0; a < n.length; a++)
      r = r.querySelector(n[a]) || r;
  return r;
}
function G5(t) {
  let e = t.querySelectorAll(Jr ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    o.childNodes.length == 1 && o.textContent == " " && o.parentNode && o.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), o);
  }
}
function Z5(t, e) {
  if (!t.size)
    return t;
  let r = t.content.firstChild.type.schema, o;
  try {
    o = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: n, openStart: a, openEnd: i } = t;
  for (let s = o.length - 2; s >= 0; s -= 2) {
    let l = r.nodes[o[s]];
    if (!l || l.hasRequiredAttrs())
      break;
    n = ee.from(l.create(o[s + 1], n)), a++, i++;
  }
  return new ue(n, a, i);
}
const tr = {}, Tt = {};
function Rr(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
Tt.keydown = (t, e) => {
  let r = e;
  if (t.input.shiftKey = r.keyCode == 16 || r.shiftKey, !Lh(t, r) && (t.input.lastKeyCode = r.keyCode, t.input.lastKeyCodeTime = Date.now(), !(ma && Jr && r.keyCode == 13)))
    if (r.keyCode != 229 && t.domObserver.forceFlush(), mc && r.keyCode == 13 && !r.ctrlKey && !r.altKey && !r.metaKey) {
      let o = Date.now();
      t.input.lastIOSEnter = o, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == o && (t.someProp("handleKeyDown", (n) => n(t, Sh(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (o) => o(t, r)) || K5(t, r) ? r.preventDefault() : Rr(t, "key");
};
Tt.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Tt.keypress = (t, e) => {
  let r = e;
  if (Lh(t, r) || !r.charCode || r.ctrlKey && !r.altKey || jt && r.metaKey)
    return;
  if (t.someProp("handleKeyPress", (n) => n(t, r))) {
    r.preventDefault();
    return;
  }
  let o = t.state.selection;
  if (!(o instanceof Ie) || !o.$from.sameParent(o.$to)) {
    let n = String.fromCharCode(r.charCode);
    !/[\r\n]/.test(n) && !t.someProp("handleTextInput", (a) => a(t, o.$from.pos, o.$to.pos, n)) && t.dispatch(t.state.tr.insertText(n).scrollIntoView()), r.preventDefault();
  }
};
function Zi(t) {
  return { left: t.clientX, top: t.clientY };
}
function Q5(t, e) {
  let r = e.x - t.clientX, o = e.y - t.clientY;
  return r * r + o * o < 100;
}
function bc(t, e, r, o, n) {
  if (o == -1)
    return !1;
  let a = t.state.doc.resolve(o);
  for (let i = a.depth + 1; i > 0; i--)
    if (t.someProp(e, (s) => i > a.depth ? s(t, r, a.nodeAfter, a.before(i), n, !0) : s(t, r, a.node(i), a.before(i), n, !1)))
      return !0;
  return !1;
}
function Go(t, e, r) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let o = t.state.tr.setSelection(e);
  o.setMeta("pointer", !0), t.dispatch(o);
}
function ek(t, e) {
  if (e == -1)
    return !1;
  let r = t.state.doc.resolve(e), o = r.nodeAfter;
  return o && o.isAtom && Se.isSelectable(o) ? (Go(t, new Se(r)), !0) : !1;
}
function tk(t, e) {
  if (e == -1)
    return !1;
  let r = t.state.selection, o, n;
  r instanceof Se && (o = r.node);
  let a = t.state.doc.resolve(e);
  for (let i = a.depth + 1; i > 0; i--) {
    let s = i > a.depth ? a.nodeAfter : a.node(i);
    if (Se.isSelectable(s)) {
      o && r.$from.depth > 0 && i >= r.$from.depth && a.before(r.$from.depth + 1) == r.$from.pos ? n = a.before(r.$from.depth) : n = a.before(i);
      break;
    }
  }
  return n != null ? (Go(t, Se.create(t.state.doc, n)), !0) : !1;
}
function rk(t, e, r, o, n) {
  return bc(t, "handleClickOn", e, r, o) || t.someProp("handleClick", (a) => a(t, e, o)) || (n ? tk(t, r) : ek(t, r));
}
function ok(t, e, r, o) {
  return bc(t, "handleDoubleClickOn", e, r, o) || t.someProp("handleDoubleClick", (n) => n(t, e, o));
}
function nk(t, e, r, o) {
  return bc(t, "handleTripleClickOn", e, r, o) || t.someProp("handleTripleClick", (n) => n(t, e, o)) || ak(t, r, o);
}
function ak(t, e, r) {
  if (r.button != 0)
    return !1;
  let o = t.state.doc;
  if (e == -1)
    return o.inlineContent ? (Go(t, Ie.create(o, 0, o.content.size)), !0) : !1;
  let n = o.resolve(e);
  for (let a = n.depth + 1; a > 0; a--) {
    let i = a > n.depth ? n.nodeAfter : n.node(a), s = n.before(a);
    if (i.inlineContent)
      Go(t, Ie.create(o, s + 1, s + 1 + i.content.size));
    else if (Se.isSelectable(i))
      Go(t, Se.create(o, s));
    else
      continue;
    return !0;
  }
}
function wc(t) {
  return xi(t);
}
const Vh = jt ? "metaKey" : "ctrlKey";
tr.mousedown = (t, e) => {
  let r = e;
  t.input.shiftKey = r.shiftKey;
  let o = wc(t), n = Date.now(), a = "singleClick";
  n - t.input.lastClick.time < 500 && Q5(r, t.input.lastClick) && !r[Vh] && (t.input.lastClick.type == "singleClick" ? a = "doubleClick" : t.input.lastClick.type == "doubleClick" && (a = "tripleClick")), t.input.lastClick = { time: n, x: r.clientX, y: r.clientY, type: a };
  let i = t.posAtCoords(Zi(r));
  i && (a == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new ik(t, i, r, !!o)) : (a == "doubleClick" ? ok : nk)(t, i.pos, i.inside, r) ? r.preventDefault() : Rr(t, "pointer"));
};
class ik {
  constructor(e, r, o, n) {
    this.view = e, this.pos = r, this.event = o, this.flushed = n, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!o[Vh], this.allowDefault = o.shiftKey;
    let a, i;
    if (r.inside > -1)
      a = e.state.doc.nodeAt(r.inside), i = r.inside;
    else {
      let d = e.state.doc.resolve(r.pos);
      a = d.parent, i = d.depth ? d.before() : 0;
    }
    const s = n ? null : o.target, l = s ? e.docView.nearestDesc(s, !0) : null;
    this.target = l && l.dom.nodeType == 1 ? l.dom : null;
    let { selection: c } = e.state;
    (o.button == 0 && a.type.spec.draggable && a.type.spec.selectable !== !1 || c instanceof Se && c.from <= i && c.to > i) && (this.mightDrag = {
      node: a,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Gi && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Rr(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => vc(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let r = this.pos;
    this.view.state.doc != this.startDoc && (r = this.view.posAtCoords(Zi(e))), this.updateAllowDefault(e), this.allowDefault || !r ? Rr(this.view, "pointer") : rk(this.view, r.pos, r.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Ao && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Jr && !this.view.state.selection.visible && Math.min(Math.abs(r.pos - this.view.state.selection.from), Math.abs(r.pos - this.view.state.selection.to)) <= 2) ? (Go(this.view, Pe.near(this.view.state.doc.resolve(r.pos))), e.preventDefault()) : Rr(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Rr(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
tr.touchstart = (t) => {
  t.input.lastTouch = Date.now(), wc(t), Rr(t, "pointer");
};
tr.touchmove = (t) => {
  t.input.lastTouch = Date.now(), Rr(t, "pointer");
};
tr.contextmenu = (t) => wc(t);
function Lh(t, e) {
  return t.composing ? !0 : Ao && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const sk = ma ? 5e3 : -1;
Tt.compositionstart = Tt.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, r = e.selection.$to;
    if (e.selection instanceof Ie && (e.storedMarks || !r.textOffset && r.parentOffset && r.nodeBefore.marks.some((o) => o.type.spec.inclusive === !1)))
      t.markCursor = t.state.storedMarks || r.marks(), xi(t, !0), t.markCursor = null;
    else if (xi(t, !e.selection.empty), Gi && e.selection.empty && r.parentOffset && !r.textOffset && r.nodeBefore.marks.length) {
      let o = t.domSelectionRange();
      for (let n = o.focusNode, a = o.focusOffset; n && n.nodeType == 1 && a != 0; ) {
        let i = a < 0 ? n.lastChild : n.childNodes[a - 1];
        if (!i)
          break;
        if (i.nodeType == 3) {
          let s = t.domSelection();
          s && s.collapse(i, i.nodeValue.length);
          break;
        } else
          n = i, a = -1;
      }
    }
    t.input.composing = !0;
  }
  Dh(t, sk);
};
Tt.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, Dh(t, 20));
};
function Dh(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => xi(t), e));
}
function lk(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = ck()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function ck() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function xi(t, e = !1) {
  if (!(ma && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), lk(t), e || t.docView && t.docView.dirty) {
      let r = P5(t);
      return r && !r.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(r)) : (t.markCursor || e) && !t.state.selection.empty ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function dk(t, e) {
  if (!t.dom.parentNode)
    return;
  let r = t.dom.parentNode.appendChild(document.createElement("div"));
  r.appendChild(e), r.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let o = getSelection(), n = document.createRange();
  n.selectNodeContents(e), t.dom.blur(), o.removeAllRanges(), o.addRange(n), setTimeout(() => {
    r.parentNode && r.parentNode.removeChild(r), t.focus();
  }, 50);
}
const na = ha && Ch < 15 || mc && j5 < 604;
tr.copy = Tt.cut = (t, e) => {
  let r = e, o = t.state.selection, n = r.type == "cut";
  if (o.empty)
    return;
  let a = na ? null : r.clipboardData, i = o.content(), { dom: s, text: l } = Ah(t, i);
  a ? (r.preventDefault(), a.clearData(), a.setData("text/html", s.innerHTML), a.setData("text/plain", l)) : dk(t, s), n && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function uk(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function pk(t, e) {
  if (!t.dom.parentNode)
    return;
  let r = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, o = t.dom.parentNode.appendChild(document.createElement(r ? "textarea" : "div"));
  r || (o.contentEditable = "true"), o.style.cssText = "position: fixed; left: -10000px; top: 10px", o.focus();
  let n = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), o.parentNode && o.parentNode.removeChild(o), r ? yl(t, o.value, null, n, e) : yl(t, o.textContent, o.innerHTML, n, e);
  }, 50);
}
function yl(t, e, r, o, n) {
  let a = Ih(t, e, r, o, t.state.selection.$from);
  if (t.someProp("handlePaste", (l) => l(t, n, a || ue.empty)))
    return !0;
  if (!a)
    return !1;
  let i = uk(a), s = i ? t.state.tr.replaceSelectionWith(i, o) : t.state.tr.replaceSelection(a);
  return t.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Bh(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let r = t.getData("text/uri-list");
  return r ? r.replace(/\r?\n/g, " ") : "";
}
Tt.paste = (t, e) => {
  let r = e;
  if (t.composing && !ma)
    return;
  let o = na ? null : r.clipboardData, n = t.input.shiftKey && t.input.lastKeyCode != 45;
  o && yl(t, Bh(o), o.getData("text/html"), n, r) ? r.preventDefault() : pk(t, r);
};
class fk {
  constructor(e, r, o) {
    this.slice = e, this.move = r, this.node = o;
  }
}
const Fh = jt ? "altKey" : "ctrlKey";
tr.dragstart = (t, e) => {
  let r = e, o = t.input.mouseDown;
  if (o && o.done(), !r.dataTransfer)
    return;
  let n = t.state.selection, a = n.empty ? null : t.posAtCoords(Zi(r)), i;
  if (!(a && a.pos >= n.from && a.pos <= (n instanceof Se ? n.to - 1 : n.to))) {
    if (o && o.mightDrag)
      i = Se.create(t.state.doc, o.mightDrag.pos);
    else if (r.target && r.target.nodeType == 1) {
      let u = t.docView.nearestDesc(r.target, !0);
      u && u.node.type.spec.draggable && u != t.docView && (i = Se.create(t.state.doc, u.posBefore));
    }
  }
  let s = (i || t.state.selection).content(), { dom: l, text: c, slice: d } = Ah(t, s);
  (!r.dataTransfer.files.length || !Jr || Oh > 120) && r.dataTransfer.clearData(), r.dataTransfer.setData(na ? "Text" : "text/html", l.innerHTML), r.dataTransfer.effectAllowed = "copyMove", na || r.dataTransfer.setData("text/plain", c), t.dragging = new fk(d, !r[Fh], i);
};
tr.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Tt.dragover = Tt.dragenter = (t, e) => e.preventDefault();
Tt.drop = (t, e) => {
  let r = e, o = t.dragging;
  if (t.dragging = null, !r.dataTransfer)
    return;
  let n = t.posAtCoords(Zi(r));
  if (!n)
    return;
  let a = t.state.doc.resolve(n.pos), i = o && o.slice;
  i ? t.someProp("transformPasted", (h) => {
    i = h(i, t);
  }) : i = Ih(t, Bh(r.dataTransfer), na ? null : r.dataTransfer.getData("text/html"), !1, a);
  let s = !!(o && !r[Fh]);
  if (t.someProp("handleDrop", (h) => h(t, r, i || ue.empty, s))) {
    r.preventDefault();
    return;
  }
  if (!i)
    return;
  r.preventDefault();
  let l = i ? C5(t.state.doc, a.pos, i) : a.pos;
  l == null && (l = a.pos);
  let c = t.state.tr;
  if (s) {
    let { node: h } = o;
    h ? h.replace(c) : c.deleteSelection();
  }
  let d = c.mapping.map(l), u = i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1, p = c.doc;
  if (u ? c.replaceRangeWith(d, d, i.content.firstChild) : c.replaceRange(d, d, i), c.doc.eq(p))
    return;
  let f = c.doc.resolve(d);
  if (u && Se.isSelectable(i.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(i.content.firstChild))
    c.setSelection(new Se(f));
  else {
    let h = c.mapping.map(l);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, b, y) => h = y), c.setSelection(Mh(t, f, c.doc.resolve(h)));
  }
  t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"));
};
tr.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && vc(t);
  }, 20));
};
tr.blur = (t, e) => {
  let r = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), r.relatedTarget && t.dom.contains(r.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
tr.beforeinput = (t, e) => {
  if (Jr && ma && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (n) => n(t, Sh(8, "Backspace")))))
        return;
      let { $cursor: o } = t.state.selection;
      o && o.pos > 0 && t.dispatch(t.state.tr.delete(o.pos - 1, o.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Tt)
  tr[t] = Tt[t];
function aa(t, e) {
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
class ki {
  constructor(e, r) {
    this.toDOM = e, this.spec = r || mo, this.side = this.spec.side || 0;
  }
  map(e, r, o, n) {
    let { pos: a, deleted: i } = e.mapResult(r.from + n, this.side < 0 ? -1 : 1);
    return i ? null : new dr(a - o, a - o, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof ki && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && aa(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
let jn = class xl {
  constructor(e, r) {
    this.attrs = e, this.spec = r || mo;
  }
  map(e, r, o, n) {
    let a = e.map(r.from + n, this.spec.inclusiveStart ? -1 : 1) - o, i = e.map(r.to + n, this.spec.inclusiveEnd ? 1 : -1) - o;
    return a >= i ? null : new dr(a, i, this);
  }
  valid(e, r) {
    return r.from < r.to;
  }
  eq(e) {
    return this == e || e instanceof xl && aa(this.attrs, e.attrs) && aa(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof xl;
  }
  destroy() {
  }
};
class yc {
  constructor(e, r) {
    this.attrs = e, this.spec = r || mo;
  }
  map(e, r, o, n) {
    let a = e.mapResult(r.from + n, 1);
    if (a.deleted)
      return null;
    let i = e.mapResult(r.to + n, -1);
    return i.deleted || i.pos <= a.pos ? null : new dr(a.pos - o, i.pos - o, this);
  }
  valid(e, r) {
    let { index: o, offset: n } = e.content.findIndex(r.from), a;
    return n == r.from && !(a = e.child(o)).isText && n + a.nodeSize == r.to;
  }
  eq(e) {
    return this == e || e instanceof yc && aa(this.attrs, e.attrs) && aa(this.spec, e.spec);
  }
  destroy() {
  }
}
class dr {
  /**
  @internal
  */
  constructor(e, r, o) {
    this.from = e, this.to = r, this.type = o;
  }
  /**
  @internal
  */
  copy(e, r) {
    return new dr(e, r, this.type);
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
  map(e, r, o) {
    return this.type.map(e, this, r, o);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, r, o) {
    return new dr(e, e, new ki(r, o));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, r, o, n) {
    return new dr(e, r, new jn(o, n));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, r, o, n) {
    return new dr(e, r, new yc(o, n));
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
    return this.type instanceof jn;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof ki;
  }
}
const Lo = [], mo = {};
class Ze {
  /**
  @internal
  */
  constructor(e, r) {
    this.local = e.length ? e : Lo, this.children = r.length ? r : Lo;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, r) {
    return r.length ? $i(r, e, 0, mo) : mt;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, r, o) {
    let n = [];
    return this.findInner(e ?? 0, r ?? 1e9, n, 0, o), n;
  }
  findInner(e, r, o, n, a) {
    for (let i = 0; i < this.local.length; i++) {
      let s = this.local[i];
      s.from <= r && s.to >= e && (!a || a(s.spec)) && o.push(s.copy(s.from + n, s.to + n));
    }
    for (let i = 0; i < this.children.length; i += 3)
      if (this.children[i] < r && this.children[i + 1] > e) {
        let s = this.children[i] + 1;
        this.children[i + 2].findInner(e - s, r - s, o, n + s, a);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, r, o) {
    return this == mt || e.maps.length == 0 ? this : this.mapInner(e, r, 0, 0, o || mo);
  }
  /**
  @internal
  */
  mapInner(e, r, o, n, a) {
    let i;
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s].map(e, o, n);
      l && l.type.valid(r, l) ? (i || (i = [])).push(l) : a.onRemove && a.onRemove(this.local[s].spec);
    }
    return this.children.length ? mk(this.children, i || [], e, r, o, n, a) : i ? new Ze(i.sort(go), Lo) : mt;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, r) {
    return r.length ? this == mt ? Ze.create(e, r) : this.addInner(e, r, 0) : this;
  }
  addInner(e, r, o) {
    let n, a = 0;
    e.forEach((s, l) => {
      let c = l + o, d;
      if (d = qh(r, s, c)) {
        for (n || (n = this.children.slice()); a < n.length && n[a] < l; )
          a += 3;
        n[a] == l ? n[a + 2] = n[a + 2].addInner(s, d, c + 1) : n.splice(a, 0, l, l + s.nodeSize, $i(d, s, c + 1, mo)), a += 3;
      }
    });
    let i = Hh(a ? Wh(r) : r, -o);
    for (let s = 0; s < i.length; s++)
      i[s].type.valid(e, i[s]) || i.splice(s--, 1);
    return new Ze(i.length ? this.local.concat(i).sort(go) : this.local, n || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == mt ? this : this.removeInner(e, 0);
  }
  removeInner(e, r) {
    let o = this.children, n = this.local;
    for (let a = 0; a < o.length; a += 3) {
      let i, s = o[a] + r, l = o[a + 1] + r;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > s && u.to < l && (e[d] = null, (i || (i = [])).push(u));
      if (!i)
        continue;
      o == this.children && (o = this.children.slice());
      let c = o[a + 2].removeInner(i, s + 1);
      c != mt ? o[a + 2] = c : (o.splice(a, 3), a -= 3);
    }
    if (n.length) {
      for (let a = 0, i; a < e.length; a++)
        if (i = e[a])
          for (let s = 0; s < n.length; s++)
            n[s].eq(i, r) && (n == this.local && (n = this.local.slice()), n.splice(s--, 1));
    }
    return o == this.children && n == this.local ? this : n.length || o.length ? new Ze(n, o) : mt;
  }
  forChild(e, r) {
    if (this == mt)
      return this;
    if (r.isLeaf)
      return Ze.empty;
    let o, n;
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] >= e) {
        this.children[s] == e && (o = this.children[s + 2]);
        break;
      }
    let a = e + 1, i = a + r.content.size;
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      if (l.from < i && l.to > a && l.type instanceof jn) {
        let c = Math.max(a, l.from) - a, d = Math.min(i, l.to) - a;
        c < d && (n || (n = [])).push(l.copy(c, d));
      }
    }
    if (n) {
      let s = new Ze(n.sort(go), Lo);
      return o ? new hk([s, o]) : s;
    }
    return o || mt;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Ze) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return xc(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == mt)
      return Lo;
    if (e.inlineContent || !this.local.some(jn.is))
      return this.local;
    let r = [];
    for (let o = 0; o < this.local.length; o++)
      this.local[o].type instanceof jn || r.push(this.local[o]);
    return r;
  }
  forEachSet(e) {
    e(this);
  }
}
Ze.empty = new Ze([], []);
Ze.removeOverlap = xc;
const mt = Ze.empty;
let hk = class Do {
  constructor(e) {
    this.members = e;
  }
  map(e, r) {
    const o = this.members.map((n) => n.map(e, r, mo));
    return Do.from(o);
  }
  forChild(e, r) {
    if (r.isLeaf)
      return Ze.empty;
    let o = [];
    for (let n = 0; n < this.members.length; n++) {
      let a = this.members[n].forChild(e, r);
      a != mt && (a instanceof Do ? o = o.concat(a.members) : o.push(a));
    }
    return Do.from(o);
  }
  eq(e) {
    if (!(e instanceof Do) || e.members.length != this.members.length)
      return !1;
    for (let r = 0; r < this.members.length; r++)
      if (!this.members[r].eq(e.members[r]))
        return !1;
    return !0;
  }
  locals(e) {
    let r, o = !0;
    for (let n = 0; n < this.members.length; n++) {
      let a = this.members[n].localsInner(e);
      if (a.length)
        if (!r)
          r = a;
        else {
          o && (r = r.slice(), o = !1);
          for (let i = 0; i < a.length; i++)
            r.push(a[i]);
        }
    }
    return r ? xc(o ? r : r.sort(go)) : Lo;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return mt;
      case 1:
        return e[0];
      default:
        return new Do(e.every((r) => r instanceof Ze) ? e : e.reduce((r, o) => r.concat(o instanceof Ze ? o : o.members), []));
    }
  }
  forEachSet(e) {
    for (let r = 0; r < this.members.length; r++)
      this.members[r].forEachSet(e);
  }
};
function mk(t, e, r, o, n, a, i) {
  let s = t.slice();
  for (let c = 0, d = a; c < r.maps.length; c++) {
    let u = 0;
    r.maps[c].forEach((p, f, h, m) => {
      let g = m - h - (f - p);
      for (let b = 0; b < s.length; b += 3) {
        let y = s[b + 1];
        if (y < 0 || p > y + d - u)
          continue;
        let x = s[b] + d - u;
        f >= x ? s[b + 1] = p <= x ? -2 : -1 : p >= d && g && (s[b] += g, s[b + 1] += g);
      }
      u += g;
    }), d = r.maps[c].map(d, -1);
  }
  let l = !1;
  for (let c = 0; c < s.length; c += 3)
    if (s[c + 1] < 0) {
      if (s[c + 1] == -2) {
        l = !0, s[c + 1] = -1;
        continue;
      }
      let d = r.map(t[c] + a), u = d - n;
      if (u < 0 || u >= o.content.size) {
        l = !0;
        continue;
      }
      let p = r.map(t[c + 1] + a, -1), f = p - n, { index: h, offset: m } = o.content.findIndex(u), g = o.maybeChild(h);
      if (g && m == u && m + g.nodeSize == f) {
        let b = s[c + 2].mapInner(r, g, d + 1, t[c] + a + 1, i);
        b != mt ? (s[c] = u, s[c + 1] = f, s[c + 2] = b) : (s[c + 1] = -2, l = !0);
      } else
        l = !0;
    }
  if (l) {
    let c = gk(s, t, e, r, n, a, i), d = $i(c, o, 0, i);
    e = d.local;
    for (let u = 0; u < s.length; u += 3)
      s[u + 1] < 0 && (s.splice(u, 3), u -= 3);
    for (let u = 0, p = 0; u < d.children.length; u += 3) {
      let f = d.children[u];
      for (; p < s.length && s[p] < f; )
        p += 3;
      s.splice(p, 0, d.children[u], d.children[u + 1], d.children[u + 2]);
    }
  }
  return new Ze(e.sort(go), s);
}
function Hh(t, e) {
  if (!e || !t.length)
    return t;
  let r = [];
  for (let o = 0; o < t.length; o++) {
    let n = t[o];
    r.push(new dr(n.from + e, n.to + e, n.type));
  }
  return r;
}
function gk(t, e, r, o, n, a, i) {
  function s(l, c) {
    for (let d = 0; d < l.local.length; d++) {
      let u = l.local[d].map(o, n, c);
      u ? r.push(u) : i.onRemove && i.onRemove(l.local[d].spec);
    }
    for (let d = 0; d < l.children.length; d += 3)
      s(l.children[d + 2], l.children[d] + c + 1);
  }
  for (let l = 0; l < t.length; l += 3)
    t[l + 1] == -1 && s(t[l + 2], e[l] + a + 1);
  return r;
}
function qh(t, e, r) {
  if (e.isLeaf)
    return null;
  let o = r + e.nodeSize, n = null;
  for (let a = 0, i; a < t.length; a++)
    (i = t[a]) && i.from > r && i.to < o && ((n || (n = [])).push(i), t[a] = null);
  return n;
}
function Wh(t) {
  let e = [];
  for (let r = 0; r < t.length; r++)
    t[r] != null && e.push(t[r]);
  return e;
}
function $i(t, e, r, o) {
  let n = [], a = !1;
  e.forEach((s, l) => {
    let c = qh(t, s, l + r);
    if (c) {
      a = !0;
      let d = $i(c, s, r + l + 1, o);
      d != mt && n.push(l, l + s.nodeSize, d);
    }
  });
  let i = Hh(a ? Wh(t) : t, -r).sort(go);
  for (let s = 0; s < i.length; s++)
    i[s].type.valid(e, i[s]) || (o.onRemove && o.onRemove(i[s].spec), i.splice(s--, 1));
  return i.length || n.length ? new Ze(i, n) : mt;
}
function go(t, e) {
  return t.from - e.from || t.to - e.to;
}
function xc(t) {
  let e = t;
  for (let r = 0; r < e.length - 1; r++) {
    let o = e[r];
    if (o.from != o.to)
      for (let n = r + 1; n < e.length; n++) {
        let a = e[n];
        if (a.from == o.from) {
          a.to != o.to && (e == t && (e = t.slice()), e[n] = a.copy(a.from, o.to), xu(e, n + 1, a.copy(o.to, a.to)));
          continue;
        } else {
          a.from < o.to && (e == t && (e = t.slice()), e[r] = o.copy(o.from, a.from), xu(e, n, o.copy(a.from, o.to)));
          break;
        }
      }
  }
  return e;
}
function xu(t, e, r) {
  for (; e < t.length && go(r, t[e]) > 0; )
    e++;
  t.splice(e, 0, r);
}
var en = {
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
}, kl = {
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
for (var nt = 0; nt < 10; nt++) en[48 + nt] = en[96 + nt] = String(nt);
for (var nt = 1; nt <= 24; nt++) en[nt + 111] = "F" + nt;
for (var nt = 65; nt <= 90; nt++)
  en[nt] = String.fromCharCode(nt + 32), kl[nt] = String.fromCharCode(nt);
for (var As in en) kl.hasOwnProperty(As) || (kl[As] = en[As]);
const vk = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function Uh(t, e) {
  let { $cursor: r } = t.selection;
  return !r || r.parentOffset > 0 ? null : r;
}
const bk = (t, e, r) => {
  let o = Uh(t);
  if (!o)
    return !1;
  let n = kc(o);
  if (!n) {
    let i = o.blockRange(), s = i && dn(i);
    return s == null ? !1 : (e && e(t.tr.lift(i, s).scrollIntoView()), !0);
  }
  let a = n.nodeBefore;
  if (Xh(t, n, e, -1))
    return !0;
  if (o.parent.content.size == 0 && (tn(a, "end") || Se.isSelectable(a)))
    for (let i = o.depth; ; i--) {
      let s = pc(t.doc, o.before(i), o.after(i), ue.empty);
      if (s && s.slice.size < s.to - s.from) {
        if (e) {
          let l = t.tr.step(s);
          l.setSelection(tn(a, "end") ? Pe.findFrom(l.doc.resolve(l.mapping.map(n.pos, -1)), -1) : Se.create(l.doc, n.pos - a.nodeSize)), e(l.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || o.node(i - 1).childCount > 1)
        break;
    }
  return a.isAtom && n.depth == o.depth - 1 ? (e && e(t.tr.delete(n.pos - a.nodeSize, n.pos).scrollIntoView()), !0) : !1;
}, wk = (t, e, r) => {
  let o = Uh(t);
  if (!o)
    return !1;
  let n = kc(o);
  return n ? Kh(t, n, e) : !1;
}, yk = (t, e, r) => {
  let o = Jh(t);
  if (!o)
    return !1;
  let n = $c(o);
  return n ? Kh(t, n, e) : !1;
};
function Kh(t, e, r) {
  let o = e.nodeBefore, n = o, a = e.pos - 1;
  for (; !n.isTextblock; a--) {
    if (n.type.spec.isolating)
      return !1;
    let d = n.lastChild;
    if (!d)
      return !1;
    n = d;
  }
  let i = e.nodeAfter, s = i, l = e.pos + 1;
  for (; !s.isTextblock; l++) {
    if (s.type.spec.isolating)
      return !1;
    let d = s.firstChild;
    if (!d)
      return !1;
    s = d;
  }
  let c = pc(t.doc, a, l, ue.empty);
  if (!c || c.from != a || c instanceof cn && c.slice.size >= l - a)
    return !1;
  if (r) {
    let d = t.tr.step(c);
    d.setSelection(Ie.create(d.doc, a)), r(d.scrollIntoView());
  }
  return !0;
}
function tn(t, e, r = !1) {
  for (let o = t; o; o = e == "start" ? o.firstChild : o.lastChild) {
    if (o.isTextblock)
      return !0;
    if (r && o.childCount != 1)
      return !1;
  }
  return !1;
}
const xk = (t, e, r) => {
  let { $head: o, empty: n } = t.selection, a = o;
  if (!n)
    return !1;
  if (o.parent.isTextblock) {
    if (o.parentOffset > 0)
      return !1;
    a = kc(o);
  }
  let i = a && a.nodeBefore;
  return !i || !Se.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(Se.create(t.doc, a.pos - i.nodeSize)).scrollIntoView()), !0);
};
function kc(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Jh(t, e) {
  let { $cursor: r } = t.selection;
  return !r || r.parentOffset < r.parent.content.size ? null : r;
}
const kk = (t, e, r) => {
  let o = Jh(t);
  if (!o)
    return !1;
  let n = $c(o);
  if (!n)
    return !1;
  let a = n.nodeAfter;
  if (Xh(t, n, e, 1))
    return !0;
  if (o.parent.content.size == 0 && (tn(a, "start") || Se.isSelectable(a))) {
    let i = pc(t.doc, o.before(), o.after(), ue.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let s = t.tr.step(i);
        s.setSelection(tn(a, "start") ? Pe.findFrom(s.doc.resolve(s.mapping.map(n.pos)), 1) : Se.create(s.doc, s.mapping.map(n.pos))), e(s.scrollIntoView());
      }
      return !0;
    }
  }
  return a.isAtom && n.depth == o.depth - 1 ? (e && e(t.tr.delete(n.pos, n.pos + a.nodeSize).scrollIntoView()), !0) : !1;
}, $k = (t, e, r) => {
  let { $head: o, empty: n } = t.selection, a = o;
  if (!n)
    return !1;
  if (o.parent.isTextblock) {
    if (o.parentOffset < o.parent.content.size)
      return !1;
    a = $c(o);
  }
  let i = a && a.nodeAfter;
  return !i || !Se.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(Se.create(t.doc, a.pos)).scrollIntoView()), !0);
};
function $c(t) {
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
const Sk = (t, e) => {
  let r = t.selection, o = r instanceof Se, n;
  if (o) {
    if (r.node.isTextblock || !Mo(t.doc, r.from))
      return !1;
    n = r.from;
  } else if (n = Yi(t.doc, r.from, -1), n == null)
    return !1;
  if (e) {
    let a = t.tr.join(n);
    o && a.setSelection(Se.create(a.doc, n - t.doc.resolve(n).nodeBefore.nodeSize)), e(a.scrollIntoView());
  }
  return !0;
}, _k = (t, e) => {
  let r = t.selection, o;
  if (r instanceof Se) {
    if (r.node.isTextblock || !Mo(t.doc, r.to))
      return !1;
    o = r.to;
  } else if (o = Yi(t.doc, r.to, 1), o == null)
    return !1;
  return e && e(t.tr.join(o).scrollIntoView()), !0;
}, Ck = (t, e) => {
  let { $from: r, $to: o } = t.selection, n = r.blockRange(o), a = n && dn(n);
  return a == null ? !1 : (e && e(t.tr.lift(n, a).scrollIntoView()), !0);
}, Ok = (t, e) => {
  let { $head: r, $anchor: o } = t.selection;
  return !r.parent.type.spec.code || !r.sameParent(o) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Yh(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: r } = t.edge(e);
    if (r.isTextblock && !r.hasRequiredAttrs())
      return r;
  }
  return null;
}
const Ek = (t, e) => {
  let { $head: r, $anchor: o } = t.selection;
  if (!r.parent.type.spec.code || !r.sameParent(o))
    return !1;
  let n = r.node(-1), a = r.indexAfter(-1), i = Yh(n.contentMatchAt(a));
  if (!i || !n.canReplaceWith(a, a, i))
    return !1;
  if (e) {
    let s = r.after(), l = t.tr.replaceWith(s, s, i.createAndFill());
    l.setSelection(Pe.near(l.doc.resolve(s), 1)), e(l.scrollIntoView());
  }
  return !0;
}, Mk = (t, e) => {
  let r = t.selection, { $from: o, $to: n } = r;
  if (r instanceof Yt || o.parent.inlineContent || n.parent.inlineContent)
    return !1;
  let a = Yh(n.parent.contentMatchAt(n.indexAfter()));
  if (!a || !a.isTextblock)
    return !1;
  if (e) {
    let i = (!o.parentOffset && n.index() < n.parent.childCount ? o : n).pos, s = t.tr.insert(i, a.createAndFill());
    s.setSelection(Ie.create(s.doc, i + 1)), e(s.scrollIntoView());
  }
  return !0;
}, Tk = (t, e) => {
  let { $cursor: r } = t.selection;
  if (!r || r.parent.content.size)
    return !1;
  if (r.depth > 1 && r.after() != r.end(-1)) {
    let a = r.before();
    if (Xo(t.doc, a))
      return e && e(t.tr.split(a).scrollIntoView()), !0;
  }
  let o = r.blockRange(), n = o && dn(o);
  return n == null ? !1 : (e && e(t.tr.lift(o, n).scrollIntoView()), !0);
}, Ak = (t, e) => {
  let { $from: r, to: o } = t.selection, n, a = r.sharedDepth(o);
  return a == 0 ? !1 : (n = r.before(a), e && e(t.tr.setSelection(Se.create(t.doc, n))), !0);
};
function Ik(t, e, r) {
  let o = e.nodeBefore, n = e.nodeAfter, a = e.index();
  return !o || !n || !o.type.compatibleContent(n.type) ? !1 : !o.content.size && e.parent.canReplace(a - 1, a) ? (r && r(t.tr.delete(e.pos - o.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(a, a + 1) || !(n.isTextblock || Mo(t.doc, e.pos)) ? !1 : (r && r(t.tr.clearIncompatible(e.pos, o.type, o.contentMatchAt(o.childCount)).join(e.pos).scrollIntoView()), !0);
}
function Xh(t, e, r, o) {
  let n = e.nodeBefore, a = e.nodeAfter, i, s, l = n.type.spec.isolating || a.type.spec.isolating;
  if (!l && Ik(t, e, r))
    return !0;
  let c = !l && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (i = (s = n.contentMatchAt(n.childCount)).findWrapping(a.type)) && s.matchType(i[0] || a.type).validEnd) {
    if (r) {
      let f = e.pos + a.nodeSize, h = ee.empty;
      for (let b = i.length - 1; b >= 0; b--)
        h = ee.from(i[b].create(null, h));
      h = ee.from(n.copy(h));
      let m = t.tr.step(new mr(e.pos - 1, f, e.pos, f, new ue(h, 1, 0), i.length, !0)), g = f + 2 * i.length;
      Mo(m.doc, g) && m.join(g), r(m.scrollIntoView());
    }
    return !0;
  }
  let d = a.type.spec.isolating || o > 0 && l ? null : Pe.findFrom(e, 1), u = d && d.$from.blockRange(d.$to), p = u && dn(u);
  if (p != null && p >= e.depth)
    return r && r(t.tr.lift(u, p).scrollIntoView()), !0;
  if (c && tn(a, "start", !0) && tn(n, "end")) {
    let f = n, h = [];
    for (; h.push(f), !f.isTextblock; )
      f = f.lastChild;
    let m = a, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (f.canReplace(f.childCount, f.childCount, m.content)) {
      if (r) {
        let b = ee.empty;
        for (let x = h.length - 1; x >= 0; x--)
          b = ee.from(h[x].copy(b));
        let y = t.tr.step(new mr(e.pos - h.length, e.pos + a.nodeSize, e.pos + g, e.pos + a.nodeSize - g, new ue(b, h.length, 0), 0, !0));
        r(y.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Gh(t) {
  return function(e, r) {
    let o = e.selection, n = t < 0 ? o.$from : o.$to, a = n.depth;
    for (; n.node(a).isInline; ) {
      if (!a)
        return !1;
      a--;
    }
    return n.node(a).isTextblock ? (r && r(e.tr.setSelection(Ie.create(e.doc, t < 0 ? n.start(a) : n.end(a)))), !0) : !1;
  };
}
const Nk = Gh(-1), zk = Gh(1);
function jk(t, e = null) {
  return function(r, o) {
    let { $from: n, $to: a } = r.selection, i = n.blockRange(a), s = i && vh(i, t, e);
    return s ? (o && o(r.tr.wrap(i, s).scrollIntoView()), !0) : !1;
  };
}
function ku(t, e = null) {
  return function(r, o) {
    let n = !1;
    for (let a = 0; a < r.selection.ranges.length && !n; a++) {
      let { $from: { pos: i }, $to: { pos: s } } = r.selection.ranges[a];
      r.doc.nodesBetween(i, s, (l, c) => {
        if (n)
          return !1;
        if (!(!l.isTextblock || l.hasMarkup(t, e)))
          if (l.type == t)
            n = !0;
          else {
            let d = r.doc.resolve(c), u = d.index();
            n = d.parent.canReplaceWith(u, u + 1, t);
          }
      });
    }
    if (!n)
      return !1;
    if (o) {
      let a = r.tr;
      for (let i = 0; i < r.selection.ranges.length; i++) {
        let { $from: { pos: s }, $to: { pos: l } } = r.selection.ranges[i];
        a.setBlockType(s, l, t, e);
      }
      o(a.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Pk(t, e = null) {
  return function(r, o) {
    let { $from: n, $to: a } = r.selection, i = n.blockRange(a), s = !1, l = i;
    if (!i)
      return !1;
    if (i.depth >= 2 && n.node(i.depth - 1).type.compatibleContent(t) && i.startIndex == 0) {
      if (n.index(i.depth - 1) == 0)
        return !1;
      let d = r.doc.resolve(i.start - 2);
      l = new hi(d, d, i.depth), i.endIndex < i.parent.childCount && (i = new hi(n, r.doc.resolve(a.end(i.depth)), i.depth)), s = !0;
    }
    let c = vh(l, t, e, i);
    return c ? (o && o(Rk(r.tr, i, c, s, t).scrollIntoView()), !0) : !1;
  };
}
function Rk(t, e, r, o, n) {
  let a = ee.empty;
  for (let d = r.length - 1; d >= 0; d--)
    a = ee.from(r[d].type.create(r[d].attrs, a));
  t.step(new mr(e.start - (o ? 2 : 0), e.end, e.start, e.end, new ue(a, 0, 0), r.length, !0));
  let i = 0;
  for (let d = 0; d < r.length; d++)
    r[d].type == n && (i = d + 1);
  let s = r.length - i, l = e.start + r.length - (o ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, p = !0; d < u; d++, p = !1)
    !p && Xo(t.doc, l, s) && (t.split(l, s), l += 2 * s), l += c.child(d).nodeSize;
  return t;
}
function Vk(t) {
  return function(e, r) {
    let { $from: o, $to: n } = e.selection, a = o.blockRange(n, (i) => i.childCount > 0 && i.firstChild.type == t);
    return a ? r ? o.node(a.depth - 1).type == t ? Lk(e, r, t, a) : Dk(e, r, a) : !0 : !1;
  };
}
function Lk(t, e, r, o) {
  let n = t.tr, a = o.end, i = o.$to.end(o.depth);
  a < i && (n.step(new mr(a - 1, i, a, i, new ue(ee.from(r.create(null, o.parent.copy())), 1, 0), 1, !0)), o = new hi(n.doc.resolve(o.$from.pos), n.doc.resolve(i), o.depth));
  const s = dn(o);
  if (s == null)
    return !1;
  n.lift(o, s);
  let l = n.mapping.map(a, -1) - 1;
  return Mo(n.doc, l) && n.join(l), e(n.scrollIntoView()), !0;
}
function Dk(t, e, r) {
  let o = t.tr, n = r.parent;
  for (let f = r.end, h = r.endIndex - 1, m = r.startIndex; h > m; h--)
    f -= n.child(h).nodeSize, o.delete(f - 1, f + 1);
  let a = o.doc.resolve(r.start), i = a.nodeAfter;
  if (o.mapping.map(r.end) != r.start + a.nodeAfter.nodeSize)
    return !1;
  let s = r.startIndex == 0, l = r.endIndex == n.childCount, c = a.node(-1), d = a.index(-1);
  if (!c.canReplace(d + (s ? 0 : 1), d + 1, i.content.append(l ? ee.empty : ee.from(n))))
    return !1;
  let u = a.pos, p = u + i.nodeSize;
  return o.step(new mr(u - (s ? 1 : 0), p + (l ? 1 : 0), u + 1, p - 1, new ue((s ? ee.empty : ee.from(n.copy(ee.empty))).append(l ? ee.empty : ee.from(n.copy(ee.empty))), s ? 0 : 1, l ? 0 : 1), s ? 0 : 1)), e(o.scrollIntoView()), !0;
}
function Bk(t) {
  return function(e, r) {
    let { $from: o, $to: n } = e.selection, a = o.blockRange(n, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!a)
      return !1;
    let i = a.startIndex;
    if (i == 0)
      return !1;
    let s = a.parent, l = s.child(i - 1);
    if (l.type != t)
      return !1;
    if (r) {
      let c = l.lastChild && l.lastChild.type == s.type, d = ee.from(c ? t.create() : null), u = new ue(ee.from(t.create(null, ee.from(s.type.create(null, d)))), c ? 3 : 1, 0), p = a.start, f = a.end;
      r(e.tr.step(new mr(p - (c ? 3 : 1), f, p, f, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Zh(t) {
  const { state: e, transaction: r } = t;
  let { selection: o } = r, { doc: n } = r, { storedMarks: a } = r;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return a;
    },
    get selection() {
      return o;
    },
    get doc() {
      return n;
    },
    get tr() {
      return o = r.selection, n = r.doc, a = r.storedMarks, r;
    }
  };
}
class Fk {
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
    const { rawCommands: e, editor: r, state: o } = this, { view: n } = r, { tr: a } = o, i = this.buildProps(a);
    return Object.fromEntries(Object.entries(e).map(([s, l]) => [s, (...c) => {
      const d = l(...c)(i);
      return !a.getMeta("preventDispatch") && !this.hasCustomState && n.dispatch(a), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, r = !0) {
    const { rawCommands: o, editor: n, state: a } = this, { view: i } = n, s = [], l = !!e, c = e || a.tr, d = () => (!l && r && !c.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(c), s.every((p) => p === !0)), u = {
      ...Object.fromEntries(Object.entries(o).map(([p, f]) => [p, (...h) => {
        const m = this.buildProps(c, r), g = f(...h)(m);
        return s.push(g), u;
      }])),
      run: d
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: r, state: o } = this, n = !1, a = e || o.tr, i = this.buildProps(a, n);
    return {
      ...Object.fromEntries(Object.entries(r).map(([s, l]) => [s, (...c) => l(...c)({ ...i, dispatch: void 0 })])),
      chain: () => this.createChain(a, n)
    };
  }
  buildProps(e, r = !0) {
    const { rawCommands: o, editor: n, state: a } = this, { view: i } = n, s = {
      tr: e,
      editor: n,
      view: i,
      state: Zh({
        state: a,
        transaction: e
      }),
      dispatch: r ? () => {
      } : void 0,
      chain: () => this.createChain(e, r),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(o).map(([l, c]) => [l, (...d) => c(...d)(s)]));
      }
    };
    return s;
  }
}
function yt(t, e, r) {
  return t.config[e] === void 0 && t.parent ? yt(t.parent, e, r) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...r,
    parent: t.parent ? yt(t.parent, e, r) : null
  }) : t.config[e];
}
function Hk(t) {
  const e = t.filter((n) => n.type === "extension"), r = t.filter((n) => n.type === "node"), o = t.filter((n) => n.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: r,
    markExtensions: o
  };
}
function ut(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function ga(...t) {
  return t.filter((e) => !!e).reduce((e, r) => {
    const o = { ...e };
    return Object.entries(r).forEach(([n, a]) => {
      if (!o[n]) {
        o[n] = a;
        return;
      }
      if (n === "class") {
        const i = a ? a.split(" ") : [], s = o[n] ? o[n].split(" ") : [], l = i.filter((c) => !s.includes(c));
        o[n] = [...s, ...l].join(" ");
      } else if (n === "style") {
        const i = a ? a.split(";").map((c) => c.trim()).filter(Boolean) : [], s = o[n] ? o[n].split(";").map((c) => c.trim()).filter(Boolean) : [], l = /* @__PURE__ */ new Map();
        s.forEach((c) => {
          const [d, u] = c.split(":").map((p) => p.trim());
          l.set(d, u);
        }), i.forEach((c) => {
          const [d, u] = c.split(":").map((p) => p.trim());
          l.set(d, u);
        }), o[n] = Array.from(l.entries()).map(([c, d]) => `${c}: ${d}`).join("; ");
      } else
        o[n] = a;
    }), o;
  }, {});
}
function qk(t) {
  return typeof t == "function";
}
function ct(t, e = void 0, ...r) {
  return qk(t) ? e ? t.bind(e)(...r) : t(...r) : t;
}
function Wk(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
class Qh {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
function Uk(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Ia(t) {
  return Uk(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Qi(t, e) {
  const r = { ...t };
  return Ia(t) && Ia(e) && Object.keys(e).forEach((o) => {
    Ia(e[o]) && Ia(t[o]) ? r[o] = Qi(t[o], e[o]) : r[o] = e[o];
  }), r;
}
class rn {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ct(yt(this, "addOptions", {
      name: this.name
    }))), this.storage = ct(yt(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new rn(e);
  }
  configure(e = {}) {
    const r = this.extend({
      ...this.config,
      addOptions: () => Qi(this.options, e)
    });
    return r.name = this.name, r.parent = this.parent, r;
  }
  extend(e = {}) {
    const r = new rn(e);
    return r.parent = this, this.child = r, r.name = e.name ? e.name : r.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${r.name}".`), r.options = ct(yt(r, "addOptions", {
      name: r.name
    })), r.storage = ct(yt(r, "addStorage", {
      name: r.name,
      options: r.options
    })), r;
  }
  static handleExit({ editor: e, mark: r }) {
    const { tr: o } = e.state, n = e.state.selection.$from;
    if (n.pos === n.end()) {
      const a = n.marks();
      if (!a.find((s) => (s == null ? void 0 : s.type.name) === r.name))
        return !1;
      const i = a.find((s) => (s == null ? void 0 : s.type.name) === r.name);
      return i && o.removeStoredMark(i), o.insertText(" ", n.pos), e.view.dispatch(o), !0;
    }
    return !1;
  }
}
class Kk {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
let Ft = class $l {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ct(yt(this, "addOptions", {
      name: this.name
    }))), this.storage = ct(yt(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new $l(e);
  }
  configure(e = {}) {
    const r = this.extend({
      ...this.config,
      addOptions: () => Qi(this.options, e)
    });
    return r.name = this.name, r.parent = this.parent, r;
  }
  extend(e = {}) {
    const r = new $l({ ...this.config, ...e });
    return r.parent = this, this.child = r, r.name = e.name ? e.name : r.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${r.name}".`), r.options = ct(yt(r, "addOptions", {
      name: r.name
    })), r.storage = ct(yt(r, "addStorage", {
      name: r.name,
      options: r.options
    })), r;
  }
};
function Jk(t, e, r) {
  const { from: o, to: n } = e, { blockSeparator: a = `

`, textSerializers: i = {} } = r || {};
  let s = "";
  return t.nodesBetween(o, n, (l, c, d, u) => {
    var p;
    l.isBlock && c > o && (s += a);
    const f = i == null ? void 0 : i[l.type.name];
    if (f)
      return d && (s += f({
        node: l,
        pos: c,
        parent: d,
        index: u,
        range: e
      })), !1;
    l.isText && (s += (p = l == null ? void 0 : l.text) === null || p === void 0 ? void 0 : p.slice(Math.max(o, c) - c, n - c));
  }), s;
}
function Yk(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, r]) => [e, r.spec.toText]));
}
Ft.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new er({
        key: new Bt("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: r } = t, { doc: o, selection: n } = e, { ranges: a } = n, i = Math.min(...a.map((c) => c.$from.pos)), s = Math.max(...a.map((c) => c.$to.pos)), l = Yk(r);
            return Jk(o, { from: i, to: s }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: l
            });
          }
        }
      })
    ];
  }
});
const Xk = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var r;
  t.isDestroyed || (e.dom.blur(), (r = window == null ? void 0 : window.getSelection()) === null || r === void 0 || r.removeAllRanges());
}), !0), Gk = (t = !1) => ({ commands: e }) => e.setContent("", t), Zk = () => ({ state: t, tr: e, dispatch: r }) => {
  const { selection: o } = e, { ranges: n } = o;
  return r && n.forEach(({ $from: a, $to: i }) => {
    t.doc.nodesBetween(a.pos, i.pos, (s, l) => {
      if (s.type.isText)
        return;
      const { doc: c, mapping: d } = e, u = c.resolve(d.map(l)), p = c.resolve(d.map(l + s.nodeSize)), f = u.blockRange(p);
      if (!f)
        return;
      const h = dn(f);
      if (s.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(f.start, m);
      }
      (h || h === 0) && e.lift(f, h);
    });
  }), !0;
}, Qk = (t) => (e) => t(e), e2 = () => ({ state: t, dispatch: e }) => Mk(t, e), t2 = (t, e) => ({ editor: r, tr: o }) => {
  const { state: n } = r, a = n.doc.slice(t.from, t.to);
  o.deleteRange(t.from, t.to);
  const i = o.mapping.map(e);
  return o.insert(i, a.content), o.setSelection(new Ie(o.doc.resolve(i - 1))), !0;
}, r2 = () => ({ tr: t, dispatch: e }) => {
  const { selection: r } = t, o = r.$anchor.node();
  if (o.content.size > 0)
    return !1;
  const n = t.selection.$anchor;
  for (let a = n.depth; a > 0; a -= 1)
    if (n.node(a).type === o.type) {
      if (e) {
        const i = n.before(a), s = n.after(a);
        t.delete(i, s).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, o2 = (t) => ({ tr: e, state: r, dispatch: o }) => {
  const n = ut(t, r.schema), a = e.selection.$anchor;
  for (let i = a.depth; i > 0; i -= 1)
    if (a.node(i).type === n) {
      if (o) {
        const s = a.before(i), l = a.after(i);
        e.delete(s, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, n2 = (t) => ({ tr: e, dispatch: r }) => {
  const { from: o, to: n } = t;
  return r && e.delete(o, n), !0;
}, a2 = () => ({ state: t, dispatch: e }) => vk(t, e), i2 = () => ({ commands: t }) => t.keyboardShortcut("Enter"), s2 = () => ({ state: t, dispatch: e }) => Ek(t, e);
function Si(t, e, r = { strict: !0 }) {
  const o = Object.keys(e);
  return o.length ? o.every((n) => r.strict ? e[n] === t[n] : Wk(e[n]) ? e[n].test(t[n]) : e[n] === t[n]) : !0;
}
function Sl(t, e, r = {}) {
  return t.find((o) => o.type === e && Si(o.attrs, r));
}
function l2(t, e, r = {}) {
  return !!Sl(t, e, r);
}
function Sc(t, e, r = {}) {
  if (!t || !e)
    return;
  let o = t.parent.childAfter(t.parentOffset);
  if (t.parentOffset === o.offset && o.offset !== 0 && (o = t.parent.childBefore(t.parentOffset)), !o.node)
    return;
  const n = Sl([...o.node.marks], e, r);
  if (!n)
    return;
  let a = o.index, i = t.start() + o.offset, s = a + 1, l = i + o.node.nodeSize;
  for (Sl([...o.node.marks], e, r); a > 0 && n.isInSet(t.parent.child(a - 1).marks); )
    a -= 1, i -= t.parent.child(a).nodeSize;
  for (; s < t.parent.childCount && l2([...t.parent.child(s).marks], e, r); )
    l += t.parent.child(s).nodeSize, s += 1;
  return {
    from: i,
    to: l
  };
}
function Yr(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const c2 = (t, e = {}) => ({ tr: r, state: o, dispatch: n }) => {
  const a = Yr(t, o.schema), { doc: i, selection: s } = r, { $from: l, from: c, to: d } = s;
  if (n) {
    const u = Sc(l, a, e);
    if (u && u.from <= c && u.to >= d) {
      const p = Ie.create(i, u.from, u.to);
      r.setSelection(p);
    }
  }
  return !0;
}, d2 = (t) => (e) => {
  const r = typeof t == "function" ? t(e) : t;
  for (let o = 0; o < r.length; o += 1)
    if (r[o](e))
      return !0;
  return !1;
};
function _c(t) {
  return t instanceof Ie;
}
function Sr(t = 0, e = 0, r = 0) {
  return Math.min(Math.max(t, e), r);
}
function u2(t, e = null) {
  if (!e)
    return null;
  const r = Pe.atStart(t), o = Pe.atEnd(t);
  if (e === "start" || e === !0)
    return r;
  if (e === "end")
    return o;
  const n = r.from, a = o.to;
  return e === "all" ? Ie.create(t, Sr(0, n, a), Sr(t.content.size, n, a)) : Ie.create(t, Sr(e, n, a), Sr(e, n, a));
}
function Cc() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const p2 = (t = null, e = {}) => ({ editor: r, view: o, tr: n, dispatch: a }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    Cc() && o.dom.focus(), requestAnimationFrame(() => {
      r.isDestroyed || (o.focus(), e != null && e.scrollIntoView && r.commands.scrollIntoView());
    });
  };
  if (o.hasFocus() && t === null || t === !1)
    return !0;
  if (a && t === null && !_c(r.state.selection))
    return i(), !0;
  const s = u2(n.doc, t) || r.state.selection, l = r.state.selection.eq(s);
  return a && (l || n.setSelection(s), l && n.storedMarks && n.setStoredMarks(n.storedMarks), i()), !0;
}, f2 = (t, e) => (r) => t.every((o, n) => e(o, { ...r, index: n })), h2 = (t, e) => ({ tr: r, commands: o }) => o.insertContentAt({ from: r.selection.from, to: r.selection.to }, t, e), em = (t) => {
  const e = t.childNodes;
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const o = e[r];
    o.nodeType === 3 && o.nodeValue && /^(\n\s\s|\n)$/.test(o.nodeValue) ? t.removeChild(o) : o.nodeType === 1 && em(o);
  }
  return t;
};
function Na(t) {
  const e = `<body>${t}</body>`, r = new window.DOMParser().parseFromString(e, "text/html").body;
  return em(r);
}
function _i(t, e, r) {
  r = {
    slice: !0,
    parseOptions: {},
    ...r
  };
  const o = typeof t == "object" && t !== null, n = typeof t == "string";
  if (o)
    try {
      if (Array.isArray(t) && t.length > 0)
        return ee.fromArray(t.map((i) => e.nodeFromJSON(i)));
      const a = e.nodeFromJSON(t);
      return r.errorOnInvalidContent && a.check(), a;
    } catch (a) {
      if (r.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: a });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", a), _i("", e, r);
    }
  if (n) {
    if (r.errorOnInvalidContent) {
      let i = !1, s = "";
      const l = new f5({
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
                getAttrs: (c) => (i = !0, s = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (r.slice ? Fa.fromSchema(l).parseSlice(Na(t), r.parseOptions) : Fa.fromSchema(l).parse(Na(t), r.parseOptions), r.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${s}`) });
    }
    const a = Fa.fromSchema(e);
    return r.slice ? a.parseSlice(Na(t), r.parseOptions).content : a.parse(Na(t), r.parseOptions);
  }
  return _i("", e, r);
}
function m2(t, e, r) {
  const o = t.steps.length - 1;
  if (o < e)
    return;
  const n = t.steps[o];
  if (!(n instanceof cn || n instanceof mr))
    return;
  const a = t.mapping.maps[o];
  let i = 0;
  a.forEach((s, l, c, d) => {
    i === 0 && (i = d);
  }), t.setSelection(Pe.near(t.doc.resolve(i), r));
}
const g2 = (t) => !("type" in t), v2 = (t, e, r) => ({ tr: o, dispatch: n, editor: a }) => {
  var i;
  if (n) {
    r = {
      parseOptions: {},
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...r
    };
    let s;
    try {
      s = _i(e, a.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...r.parseOptions
        },
        errorOnInvalidContent: (i = r.errorOnInvalidContent) !== null && i !== void 0 ? i : a.options.enableContentCheck
      });
    } catch (f) {
      return a.emit("contentError", {
        editor: a,
        error: f,
        disableCollaboration: () => {
          console.error("[tiptap error]: Unable to disable collaboration at this point in time");
        }
      }), !1;
    }
    let { from: l, to: c } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, d = !0, u = !0;
    if ((g2(s) ? s : [s]).forEach((f) => {
      f.check(), d = d ? f.isText && f.marks.length === 0 : !1, u = u ? f.isBlock : !1;
    }), l === c && u) {
      const { parent: f } = o.doc.resolve(l);
      f.isTextblock && !f.type.spec.code && !f.childCount && (l -= 1, c += 1);
    }
    let p;
    d ? (Array.isArray(e) ? p = e.map((f) => f.text || "").join("") : typeof e == "object" && e && e.text ? p = e.text : p = e, o.insertText(p, l, c)) : (p = s, o.replaceWith(l, c, p)), r.updateSelection && m2(o, o.steps.length - 1, -1), r.applyInputRules && o.setMeta("applyInputRules", { from: l, text: p }), r.applyPasteRules && o.setMeta("applyPasteRules", { from: l, text: p });
  }
  return !0;
}, b2 = () => ({ state: t, dispatch: e }) => Sk(t, e), w2 = () => ({ state: t, dispatch: e }) => _k(t, e), y2 = () => ({ state: t, dispatch: e }) => bk(t, e), x2 = () => ({ state: t, dispatch: e }) => kk(t, e), k2 = () => ({ state: t, dispatch: e, tr: r }) => {
  try {
    const o = Yi(t.doc, t.selection.$from.pos, -1);
    return o == null ? !1 : (r.join(o, 2), e && e(r), !0);
  } catch {
    return !1;
  }
}, $2 = () => ({ state: t, dispatch: e, tr: r }) => {
  try {
    const o = Yi(t.doc, t.selection.$from.pos, 1);
    return o == null ? !1 : (r.join(o, 2), e && e(r), !0);
  } catch {
    return !1;
  }
}, S2 = () => ({ state: t, dispatch: e }) => wk(t, e), _2 = () => ({ state: t, dispatch: e }) => yk(t, e);
function tm() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function C2(t) {
  const e = t.split(/-(?!$)/);
  let r = e[e.length - 1];
  r === "Space" && (r = " ");
  let o, n, a, i;
  for (let s = 0; s < e.length - 1; s += 1) {
    const l = e[s];
    if (/^(cmd|meta|m)$/i.test(l))
      i = !0;
    else if (/^a(lt)?$/i.test(l))
      o = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      n = !0;
    else if (/^s(hift)?$/i.test(l))
      a = !0;
    else if (/^mod$/i.test(l))
      Cc() || tm() ? i = !0 : n = !0;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return o && (r = `Alt-${r}`), n && (r = `Ctrl-${r}`), i && (r = `Meta-${r}`), a && (r = `Shift-${r}`), r;
}
const O2 = (t) => ({ editor: e, view: r, tr: o, dispatch: n }) => {
  const a = C2(t).split(/-(?!$)/), i = a.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), s = new KeyboardEvent("keydown", {
    key: i === "Space" ? " " : i,
    altKey: a.includes("Alt"),
    ctrlKey: a.includes("Ctrl"),
    metaKey: a.includes("Meta"),
    shiftKey: a.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), l = e.captureTransaction(() => {
    r.someProp("handleKeyDown", (c) => c(r, s));
  });
  return l == null || l.steps.forEach((c) => {
    const d = c.map(o.mapping);
    d && n && o.maybeStep(d);
  }), !0;
};
function Oc(t, e, r = {}) {
  const { from: o, to: n, empty: a } = t.selection, i = e ? ut(e, t.schema) : null, s = [];
  t.doc.nodesBetween(o, n, (d, u) => {
    if (d.isText)
      return;
    const p = Math.max(o, u), f = Math.min(n, u + d.nodeSize);
    s.push({
      node: d,
      from: p,
      to: f
    });
  });
  const l = n - o, c = s.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => Si(d.node.attrs, r, { strict: !1 }));
  return a ? !!c.length : c.reduce((d, u) => d + u.to - u.from, 0) >= l;
}
const E2 = (t, e = {}) => ({ state: r, dispatch: o }) => {
  const n = ut(t, r.schema);
  return Oc(r, n, e) ? Ck(r, o) : !1;
}, M2 = () => ({ state: t, dispatch: e }) => Tk(t, e), T2 = (t) => ({ state: e, dispatch: r }) => {
  const o = ut(t, e.schema);
  return Vk(o)(e, r);
}, A2 = () => ({ state: t, dispatch: e }) => Ok(t, e);
function rm(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function $u(t, e) {
  const r = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((o, n) => (r.includes(n) || (o[n] = t[n]), o), {});
}
const I2 = (t, e) => ({ tr: r, state: o, dispatch: n }) => {
  let a = null, i = null;
  const s = rm(typeof t == "string" ? t : t.name, o.schema);
  return s ? (s === "node" && (a = ut(t, o.schema)), s === "mark" && (i = Yr(t, o.schema)), n && r.selection.ranges.forEach((l) => {
    o.doc.nodesBetween(l.$from.pos, l.$to.pos, (c, d) => {
      a && a === c.type && r.setNodeMarkup(d, void 0, $u(c.attrs, e)), i && c.marks.length && c.marks.forEach((u) => {
        i === u.type && r.addMark(d, d + c.nodeSize, i.create($u(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, N2 = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), z2 = () => ({ tr: t, commands: e }) => e.setTextSelection({
  from: 0,
  to: t.doc.content.size
}), j2 = () => ({ state: t, dispatch: e }) => xk(t, e), P2 = () => ({ state: t, dispatch: e }) => $k(t, e), R2 = () => ({ state: t, dispatch: e }) => Ak(t, e), V2 = () => ({ state: t, dispatch: e }) => zk(t, e), L2 = () => ({ state: t, dispatch: e }) => Nk(t, e);
function D2(t, e, r = {}, o = {}) {
  return _i(t, e, {
    slice: !1,
    parseOptions: r,
    errorOnInvalidContent: o.errorOnInvalidContent
  });
}
const B2 = (t, e = !1, r = {}, o = {}) => ({ editor: n, tr: a, dispatch: i, commands: s }) => {
  var l, c;
  const { doc: d } = a;
  if (r.preserveWhitespace !== "full") {
    const u = D2(t, n.schema, r, {
      errorOnInvalidContent: (l = o.errorOnInvalidContent) !== null && l !== void 0 ? l : n.options.enableContentCheck
    });
    return i && a.replaceWith(0, d.content.size, u).setMeta("preventUpdate", !e), !0;
  }
  return i && a.setMeta("preventUpdate", !e), s.insertContentAt({ from: 0, to: d.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: (c = o.errorOnInvalidContent) !== null && c !== void 0 ? c : n.options.enableContentCheck
  });
};
function F2(t, e) {
  const r = Yr(e, t.schema), { from: o, to: n, empty: a } = t.selection, i = [];
  a ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(o, n, (l) => {
    i.push(...l.marks);
  });
  const s = i.find((l) => l.type.name === r.name);
  return s ? { ...s.attrs } : {};
}
function H2(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: r } = t.edge(e);
    if (r.isTextblock && !r.hasRequiredAttrs())
      return r;
  }
  return null;
}
function q2(t, e) {
  for (let r = t.depth; r > 0; r -= 1) {
    const o = t.node(r);
    if (e(o))
      return {
        pos: r > 0 ? t.before(r) : 0,
        start: t.start(r),
        depth: r,
        node: o
      };
  }
}
function Ec(t) {
  return (e) => q2(e.$from, t);
}
function om(t, e, r) {
  const o = [];
  return t === e ? r.resolve(t).marks().forEach((n) => {
    const a = r.resolve(t), i = Sc(a, n.type);
    i && o.push({
      mark: n,
      ...i
    });
  }) : r.nodesBetween(t, e, (n, a) => {
    !n || (n == null ? void 0 : n.nodeSize) === void 0 || o.push(...n.marks.map((i) => ({
      from: a,
      to: a + n.nodeSize,
      mark: i
    })));
  }), o;
}
function Ua(t, e, r) {
  return Object.fromEntries(Object.entries(r).filter(([o]) => {
    const n = t.find((a) => a.type === e && a.name === o);
    return n ? n.attribute.keepOnSplit : !1;
  }));
}
function W2(t, e, r = {}) {
  const { empty: o, ranges: n } = t.selection, a = e ? Yr(e, t.schema) : null;
  if (o)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => a ? a.name === d.type.name : !0).find((d) => Si(d.attrs, r, { strict: !1 }));
  let i = 0;
  const s = [];
  if (n.forEach(({ $from: d, $to: u }) => {
    const p = d.pos, f = u.pos;
    t.doc.nodesBetween(p, f, (h, m) => {
      if (!h.isText && !h.marks.length)
        return;
      const g = Math.max(p, m), b = Math.min(f, m + h.nodeSize), y = b - g;
      i += y, s.push(...h.marks.map((x) => ({
        mark: x,
        from: g,
        to: b
      })));
    });
  }), i === 0)
    return !1;
  const l = s.filter((d) => a ? a.name === d.mark.type.name : !0).filter((d) => Si(d.mark.attrs, r, { strict: !1 })).reduce((d, u) => d + u.to - u.from, 0), c = s.filter((d) => a ? d.mark.type !== a && d.mark.type.excludes(a) : !0).reduce((d, u) => d + u.to - u.from, 0);
  return (l > 0 ? l + c : l) >= i;
}
function Su(t, e) {
  const { nodeExtensions: r } = Hk(e), o = r.find((i) => i.name === t);
  if (!o)
    return !1;
  const n = {
    name: o.name,
    options: o.options,
    storage: o.storage
  }, a = ct(yt(o, "group", n));
  return typeof a != "string" ? !1 : a.split(" ").includes("list");
}
function nm(t, { checkChildren: e = !0, ignoreWhitespace: r = !1 } = {}) {
  var o;
  if (r) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return /^\s*$/m.test((o = t.text) !== null && o !== void 0 ? o : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let n = !0;
    return t.content.forEach((a) => {
      n !== !1 && (nm(a, { ignoreWhitespace: r, checkChildren: e }) || (n = !1));
    }), n;
  }
  return !1;
}
function U2(t) {
  return t instanceof Se;
}
function am(t, e, r) {
  const o = t.state.doc.content.size, n = Sr(e, 0, o), a = Sr(r, 0, o), i = t.coordsAtPos(n), s = t.coordsAtPos(a, -1), l = Math.min(i.top, s.top), c = Math.max(i.bottom, s.bottom), d = Math.min(i.left, s.left), u = Math.max(i.right, s.right), p = u - d, f = c - l, h = {
    top: l,
    bottom: c,
    left: d,
    right: u,
    width: p,
    height: f,
    x: d,
    y: l
  };
  return {
    ...h,
    toJSON: () => h
  };
}
function K2(t, e, r) {
  var o;
  const { selection: n } = e;
  let a = null;
  if (_c(n) && (a = n.$cursor), a) {
    const s = (o = t.storedMarks) !== null && o !== void 0 ? o : a.marks();
    return !!r.isInSet(s) || !s.some((l) => l.type.excludes(r));
  }
  const { ranges: i } = n;
  return i.some(({ $from: s, $to: l }) => {
    let c = s.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(r) : !1;
    return t.doc.nodesBetween(s.pos, l.pos, (d, u, p) => {
      if (c)
        return !1;
      if (d.isInline) {
        const f = !p || p.type.allowsMarkType(r), h = !!r.isInSet(d.marks) || !d.marks.some((m) => m.type.excludes(r));
        c = f && h;
      }
      return !c;
    }), c;
  });
}
const J2 = (t, e = {}) => ({ tr: r, state: o, dispatch: n }) => {
  const { selection: a } = r, { empty: i, ranges: s } = a, l = Yr(t, o.schema);
  if (n)
    if (i) {
      const c = F2(o, l);
      r.addStoredMark(l.create({
        ...c,
        ...e
      }));
    } else
      s.forEach((c) => {
        const d = c.$from.pos, u = c.$to.pos;
        o.doc.nodesBetween(d, u, (p, f) => {
          const h = Math.max(f, d), m = Math.min(f + p.nodeSize, u);
          p.marks.find((g) => g.type === l) ? p.marks.forEach((g) => {
            l === g.type && r.addMark(h, m, l.create({
              ...g.attrs,
              ...e
            }));
          }) : r.addMark(h, m, l.create(e));
        });
      });
  return K2(o, r, l);
}, Y2 = (t, e) => ({ tr: r }) => (r.setMeta(t, e), !0), X2 = (t, e = {}) => ({ state: r, dispatch: o, chain: n }) => {
  const a = ut(t, r.schema);
  return a.isTextblock ? n().command(({ commands: i }) => ku(a, e)(r) ? !0 : i.clearNodes()).command(({ state: i }) => ku(a, e)(i, o)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, G2 = (t) => ({ tr: e, dispatch: r }) => {
  if (r) {
    const { doc: o } = e, n = Sr(t, 0, o.content.size), a = Se.create(o, n);
    e.setSelection(a);
  }
  return !0;
}, Z2 = (t) => ({ tr: e, dispatch: r }) => {
  if (r) {
    const { doc: o } = e, { from: n, to: a } = typeof t == "number" ? { from: t, to: t } : t, i = Ie.atStart(o).from, s = Ie.atEnd(o).to, l = Sr(n, i, s), c = Sr(a, i, s), d = Ie.create(o, l, c);
    e.setSelection(d);
  }
  return !0;
}, Q2 = (t) => ({ state: e, dispatch: r }) => {
  const o = ut(t, e.schema);
  return Bk(o)(e, r);
};
function _u(t, e) {
  const r = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (r) {
    const o = r.filter((n) => e == null ? void 0 : e.includes(n.type.name));
    t.tr.ensureMarks(o);
  }
}
const e4 = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: r, dispatch: o, editor: n }) => {
  const { selection: a, doc: i } = e, { $from: s, $to: l } = a, c = n.extensionManager.attributes, d = Ua(c, s.node().type.name, s.node().attrs);
  if (a instanceof Se && a.node.isBlock)
    return !s.parentOffset || !Xo(i, s.pos) ? !1 : (o && (t && _u(r, n.extensionManager.splittableMarks), e.split(s.pos).scrollIntoView()), !0);
  if (!s.parent.isBlock)
    return !1;
  const u = l.parentOffset === l.parent.content.size, p = s.depth === 0 ? void 0 : H2(s.node(-1).contentMatchAt(s.indexAfter(-1)));
  let f = u && p ? [
    {
      type: p,
      attrs: d
    }
  ] : void 0, h = Xo(e.doc, e.mapping.map(s.pos), 1, f);
  if (!f && !h && Xo(e.doc, e.mapping.map(s.pos), 1, p ? [{ type: p }] : void 0) && (h = !0, f = p ? [
    {
      type: p,
      attrs: d
    }
  ] : void 0), o) {
    if (h && (a instanceof Ie && e.deleteSelection(), e.split(e.mapping.map(s.pos), 1, f), p && !u && !s.parentOffset && s.parent.type !== p)) {
      const m = e.mapping.map(s.before()), g = e.doc.resolve(m);
      s.node(-1).canReplaceWith(g.index(), g.index() + 1, p) && e.setNodeMarkup(e.mapping.map(s.before()), p);
    }
    t && _u(r, n.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return h;
}, t4 = (t, e = {}) => ({ tr: r, state: o, dispatch: n, editor: a }) => {
  var i;
  const s = ut(t, o.schema), { $from: l, $to: c } = o.selection, d = o.selection.node;
  if (d && d.isBlock || l.depth < 2 || !l.sameParent(c))
    return !1;
  const u = l.node(-1);
  if (u.type !== s)
    return !1;
  const p = a.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== s || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (n) {
      let b = ee.empty;
      const y = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let B = l.depth - y; B >= l.depth - 3; B -= 1)
        b = ee.from(l.node(B).copy(b));
      const x = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, v = {
        ...Ua(p, l.node().type.name, l.node().attrs),
        ...e
      }, S = ((i = s.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.createAndFill(v)) || void 0;
      b = b.append(ee.from(s.createAndFill(null, S) || void 0));
      const M = l.before(l.depth - (y - 1));
      r.replace(M, l.after(-x), new ue(b, 4 - y, 0));
      let q = -1;
      r.doc.nodesBetween(M, r.doc.content.size, (B, _) => {
        if (q > -1)
          return !1;
        B.isTextblock && B.content.size === 0 && (q = _ + 1);
      }), q > -1 && r.setSelection(Ie.near(r.doc.resolve(q))), r.scrollIntoView();
    }
    return !0;
  }
  const f = c.pos === l.end() ? u.contentMatchAt(0).defaultType : null, h = {
    ...Ua(p, u.type.name, u.attrs),
    ...e
  }, m = {
    ...Ua(p, l.node().type.name, l.node().attrs),
    ...e
  };
  r.delete(l.pos, c.pos);
  const g = f ? [
    { type: s, attrs: h },
    { type: f, attrs: m }
  ] : [{ type: s, attrs: h }];
  if (!Xo(r.doc, l.pos, 2))
    return !1;
  if (n) {
    const { selection: b, storedMarks: y } = o, { splittableMarks: x } = a.extensionManager, v = y || b.$to.parentOffset && b.$from.marks();
    if (r.split(l.pos, 2, g).scrollIntoView(), !v || !n)
      return !0;
    const S = v.filter((M) => x.includes(M.type.name));
    r.ensureMarks(S);
  }
  return !0;
}, Is = (t, e) => {
  const r = Ec((a) => a.type === e)(t.selection);
  if (!r)
    return !0;
  const o = t.doc.resolve(Math.max(0, r.pos - 1)).before(r.depth);
  if (o === void 0)
    return !0;
  const n = t.doc.nodeAt(o);
  return r.node.type === (n == null ? void 0 : n.type) && Mo(t.doc, r.pos) && t.join(r.pos), !0;
}, Ns = (t, e) => {
  const r = Ec((a) => a.type === e)(t.selection);
  if (!r)
    return !0;
  const o = t.doc.resolve(r.start).after(r.depth);
  if (o === void 0)
    return !0;
  const n = t.doc.nodeAt(o);
  return r.node.type === (n == null ? void 0 : n.type) && Mo(t.doc, o) && t.join(o), !0;
}, r4 = (t, e, r, o = {}) => ({ editor: n, tr: a, state: i, dispatch: s, chain: l, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: p } = n.extensionManager, f = ut(t, i.schema), h = ut(e, i.schema), { selection: m, storedMarks: g } = i, { $from: b, $to: y } = m, x = b.blockRange(y), v = g || m.$to.parentOffset && m.$from.marks();
  if (!x)
    return !1;
  const S = Ec((M) => Su(M.type.name, u))(m);
  if (x.depth >= 1 && S && x.depth - S.depth <= 1) {
    if (S.node.type === f)
      return c.liftListItem(h);
    if (Su(S.node.type.name, u) && f.validContent(S.node.content) && s)
      return l().command(() => (a.setNodeMarkup(S.pos, f), !0)).command(() => Is(a, f)).command(() => Ns(a, f)).run();
  }
  return !r || !v || !s ? l().command(() => d().wrapInList(f, o) ? !0 : c.clearNodes()).wrapInList(f, o).command(() => Is(a, f)).command(() => Ns(a, f)).run() : l().command(() => {
    const M = d().wrapInList(f, o), q = v.filter((B) => p.includes(B.type.name));
    return a.ensureMarks(q), M ? !0 : c.clearNodes();
  }).wrapInList(f, o).command(() => Is(a, f)).command(() => Ns(a, f)).run();
}, o4 = (t, e = {}, r = {}) => ({ state: o, commands: n }) => {
  const { extendEmptyMarkRange: a = !1 } = r, i = Yr(t, o.schema);
  return W2(o, i, e) ? n.unsetMark(i, { extendEmptyMarkRange: a }) : n.setMark(i, e);
}, n4 = (t, e, r = {}) => ({ state: o, commands: n }) => {
  const a = ut(t, o.schema), i = ut(e, o.schema), s = Oc(o, a, r);
  let l;
  return o.selection.$anchor.sameParent(o.selection.$head) && (l = o.selection.$anchor.parent.attrs), s ? n.setNode(i, l) : n.setNode(a, { ...l, ...r });
}, a4 = (t, e = {}) => ({ state: r, commands: o }) => {
  const n = ut(t, r.schema);
  return Oc(r, n, e) ? o.lift(n) : o.wrapIn(n, e);
}, i4 = () => ({ state: t, dispatch: e }) => {
  const r = t.plugins;
  for (let o = 0; o < r.length; o += 1) {
    const n = r[o];
    let a;
    if (n.spec.isInputRules && (a = n.getState(t))) {
      if (e) {
        const i = t.tr, s = a.transform;
        for (let l = s.steps.length - 1; l >= 0; l -= 1)
          i.step(s.steps[l].invert(s.docs[l]));
        if (a.text) {
          const l = i.doc.resolve(a.from).marks();
          i.replaceWith(a.from, a.to, t.schema.text(a.text, l));
        } else
          i.delete(a.from, a.to);
      }
      return !0;
    }
  }
  return !1;
}, s4 = () => ({ tr: t, dispatch: e }) => {
  const { selection: r } = t, { empty: o, ranges: n } = r;
  return o || e && n.forEach((a) => {
    t.removeMark(a.$from.pos, a.$to.pos);
  }), !0;
}, l4 = (t, e = {}) => ({ tr: r, state: o, dispatch: n }) => {
  var a;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: s } = r, l = Yr(t, o.schema), { $from: c, empty: d, ranges: u } = s;
  if (!n)
    return !0;
  if (d && i) {
    let { from: p, to: f } = s;
    const h = (a = c.marks().find((g) => g.type === l)) === null || a === void 0 ? void 0 : a.attrs, m = Sc(c, l, h);
    m && (p = m.from, f = m.to), r.removeMark(p, f, l);
  } else
    u.forEach((p) => {
      r.removeMark(p.$from.pos, p.$to.pos, l);
    });
  return r.removeStoredMark(l), !0;
}, c4 = (t, e = {}) => ({ tr: r, state: o, dispatch: n }) => {
  let a = null, i = null;
  const s = rm(typeof t == "string" ? t : t.name, o.schema);
  return s ? (s === "node" && (a = ut(t, o.schema)), s === "mark" && (i = Yr(t, o.schema)), n && r.selection.ranges.forEach((l) => {
    const c = l.$from.pos, d = l.$to.pos;
    o.doc.nodesBetween(c, d, (u, p) => {
      a && a === u.type && r.setNodeMarkup(p, void 0, {
        ...u.attrs,
        ...e
      }), i && u.marks.length && u.marks.forEach((f) => {
        if (i === f.type) {
          const h = Math.max(p, c), m = Math.min(p + u.nodeSize, d);
          r.addMark(h, m, i.create({
            ...f.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, d4 = (t, e = {}) => ({ state: r, dispatch: o }) => {
  const n = ut(t, r.schema);
  return jk(n, e)(r, o);
}, u4 = (t, e = {}) => ({ state: r, dispatch: o }) => {
  const n = ut(t, r.schema);
  return Pk(n, e)(r, o);
};
var p4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Xk,
  clearContent: Gk,
  clearNodes: Zk,
  command: Qk,
  createParagraphNear: e2,
  cut: t2,
  deleteCurrentNode: r2,
  deleteNode: o2,
  deleteRange: n2,
  deleteSelection: a2,
  enter: i2,
  exitCode: s2,
  extendMarkRange: c2,
  first: d2,
  focus: p2,
  forEach: f2,
  insertContent: h2,
  insertContentAt: v2,
  joinBackward: y2,
  joinDown: w2,
  joinForward: x2,
  joinItemBackward: k2,
  joinItemForward: $2,
  joinTextblockBackward: S2,
  joinTextblockForward: _2,
  joinUp: b2,
  keyboardShortcut: O2,
  lift: E2,
  liftEmptyBlock: M2,
  liftListItem: T2,
  newlineInCode: A2,
  resetAttributes: I2,
  scrollIntoView: N2,
  selectAll: z2,
  selectNodeBackward: j2,
  selectNodeForward: P2,
  selectParentNode: R2,
  selectTextblockEnd: V2,
  selectTextblockStart: L2,
  setContent: B2,
  setMark: J2,
  setMeta: Y2,
  setNode: X2,
  setNodeSelection: G2,
  setTextSelection: Z2,
  sinkListItem: Q2,
  splitBlock: e4,
  splitListItem: t4,
  toggleList: r4,
  toggleMark: o4,
  toggleNode: n4,
  toggleWrap: a4,
  undoInputRule: i4,
  unsetAllMarks: s4,
  unsetMark: l4,
  updateAttributes: c4,
  wrapIn: d4,
  wrapInList: u4
});
Ft.create({
  name: "commands",
  addCommands() {
    return {
      ...p4
    };
  }
});
Ft.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new er({
        key: new Bt("tiptapDrop"),
        props: {
          handleDrop: (t, e, r, o) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: r,
              moved: o
            });
          }
        }
      })
    ];
  }
});
Ft.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new er({
        key: new Bt("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
});
Ft.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new er({
        key: new Bt("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, r) => {
              t.isFocused = !0;
              const o = t.state.tr.setMeta("focus", { event: r }).setMeta("addToHistory", !1);
              return e.dispatch(o), !1;
            },
            blur: (e, r) => {
              t.isFocused = !1;
              const o = t.state.tr.setMeta("blur", { event: r }).setMeta("addToHistory", !1);
              return e.dispatch(o), !1;
            }
          }
        }
      })
    ];
  }
});
Ft.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: a }) => [
      () => a.undoInputRule(),
      // maybe convert first text block node to default node
      () => a.command(({ tr: i }) => {
        const { selection: s, doc: l } = i, { empty: c, $anchor: d } = s, { pos: u, parent: p } = d, f = d.parent.isTextblock && u > 0 ? i.doc.resolve(u - 1) : d, h = f.parent.type.spec.isolating, m = d.pos - d.parentOffset, g = h && f.parent.childCount === 1 ? m === d.pos : Pe.atStart(l).from === u;
        return !c || !p.type.isTextblock || p.textContent.length || !g || g && d.parent.type.name === "paragraph" ? !1 : a.clearNodes();
      }),
      () => a.deleteSelection(),
      () => a.joinBackward(),
      () => a.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: a }) => [
      () => a.deleteSelection(),
      () => a.deleteCurrentNode(),
      () => a.joinForward(),
      () => a.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: a }) => [
        () => a.newlineInCode(),
        () => a.createParagraphNear(),
        () => a.liftEmptyBlock(),
        () => a.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, o = {
      ...r
    }, n = {
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
    return Cc() || tm() ? n : o;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new er({
        key: new Bt("clearDocument"),
        appendTransaction: (t, e, r) => {
          const o = t.some((f) => f.docChanged) && !e.doc.eq(r.doc), n = t.some((f) => f.getMeta("preventClearDocument"));
          if (!o || n)
            return;
          const { empty: a, from: i, to: s } = e.selection, l = Pe.atStart(e.doc).from, c = Pe.atEnd(e.doc).to;
          if (a || !(i === l && s === c) || !nm(r.doc))
            return;
          const d = r.tr, u = Zh({
            state: r,
            transaction: d
          }), { commands: p } = new Fk({
            editor: this.editor,
            state: u
          });
          if (p.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
});
Ft.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new er({
        key: new Bt("tiptapPaste"),
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
Ft.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new er({
        key: new Bt("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
function Ci(t) {
  return new Qh({
    find: t.find,
    handler: ({ state: e, range: r, match: o }) => {
      const n = ct(t.getAttributes, void 0, o);
      if (n === !1 || n === null)
        return null;
      const { tr: a } = e, i = o[o.length - 1], s = o[0];
      if (i) {
        const l = s.search(/\S/), c = r.from + s.indexOf(i), d = c + i.length;
        if (om(r.from, r.to, e.doc).filter((p) => p.mark.type.excluded.find((f) => f === t.type && f !== p.mark.type)).filter((p) => p.to > c).length)
          return null;
        d < r.to && a.delete(d, r.to), c > r.from && a.delete(r.from + l, c);
        const u = r.from + l + i.length;
        a.addMark(r.from + l, u, t.type.create(n || {})), a.removeStoredMark(t.type);
      }
    }
  });
}
function f4(t) {
  return new Qh({
    find: t.find,
    handler: ({ state: e, range: r, match: o }) => {
      const n = e.doc.resolve(r.from), a = ct(t.getAttributes, void 0, o) || {};
      if (!n.node(-1).canReplaceWith(n.index(-1), n.indexAfter(-1), t.type))
        return null;
      e.tr.delete(r.from, r.to).setBlockType(r.from, r.from, t.type, a);
    }
  });
}
class ko {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ct(yt(this, "addOptions", {
      name: this.name
    }))), this.storage = ct(yt(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ko(e);
  }
  configure(e = {}) {
    const r = this.extend({
      ...this.config,
      addOptions: () => Qi(this.options, e)
    });
    return r.name = this.name, r.parent = this.parent, r;
  }
  extend(e = {}) {
    const r = new ko(e);
    return r.parent = this, this.child = r, r.name = e.name ? e.name : r.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${r.name}".`), r.options = ct(yt(r, "addOptions", {
      name: r.name
    })), r.storage = ct(yt(r, "addStorage", {
      name: r.name,
      options: r.options
    })), r;
  }
}
function Oi(t) {
  return new Kk({
    find: t.find,
    handler: ({ state: e, range: r, match: o, pasteEvent: n }) => {
      const a = ct(t.getAttributes, void 0, o, n);
      if (a === !1 || a === null)
        return null;
      const { tr: i } = e, s = o[o.length - 1], l = o[0];
      let c = r.to;
      if (s) {
        const d = l.search(/\S/), u = r.from + l.indexOf(s), p = u + s.length;
        if (om(r.from, r.to, e.doc).filter((f) => f.mark.type.excluded.find((h) => h === t.type && h !== f.mark.type)).filter((f) => f.to > u).length)
          return null;
        p < r.to && i.delete(p, r.to), u > r.from && i.delete(r.from + d, u), c = r.from + d + s.length, i.addMark(r.from + d, c, t.type.create(a || {})), i.removeStoredMark(t.type);
      }
    }
  });
}
function h4(t) {
  return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var $t = "top", Lt = "bottom", Dt = "right", St = "left", Mc = "auto", va = [$t, Lt, Dt, St], on = "start", ia = "end", m4 = "clippingParents", im = "viewport", mn = "popper", g4 = "reference", Cu = /* @__PURE__ */ va.reduce(function(t, e) {
  return t.concat([e + "-" + on, e + "-" + ia]);
}, []), sm = /* @__PURE__ */ [].concat(va, [Mc]).reduce(function(t, e) {
  return t.concat([e, e + "-" + on, e + "-" + ia]);
}, []), v4 = "beforeRead", b4 = "read", w4 = "afterRead", y4 = "beforeMain", x4 = "main", k4 = "afterMain", $4 = "beforeWrite", S4 = "write", _4 = "afterWrite", C4 = [v4, b4, w4, y4, x4, k4, $4, S4, _4];
function vr(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function At(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function $o(t) {
  var e = At(t).Element;
  return t instanceof e || t instanceof Element;
}
function Vt(t) {
  var e = At(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Tc(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = At(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function O4(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var o = e.styles[r] || {}, n = e.attributes[r] || {}, a = e.elements[r];
    !Vt(a) || !vr(a) || (Object.assign(a.style, o), Object.keys(n).forEach(function(i) {
      var s = n[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function E4(t) {
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
    Object.keys(e.elements).forEach(function(o) {
      var n = e.elements[o], a = e.attributes[o] || {}, i = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : r[o]), s = i.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Vt(n) || !vr(n) || (Object.assign(n.style, s), Object.keys(a).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
const lm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: O4,
  effect: E4,
  requires: ["computeStyles"]
};
function hr(t) {
  return t.split("-")[0];
}
var vo = Math.max, Ei = Math.min, nn = Math.round;
function _l() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function cm() {
  return !/^((?!chrome|android).)*safari/i.test(_l());
}
function an(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var o = t.getBoundingClientRect(), n = 1, a = 1;
  e && Vt(t) && (n = t.offsetWidth > 0 && nn(o.width) / t.offsetWidth || 1, a = t.offsetHeight > 0 && nn(o.height) / t.offsetHeight || 1);
  var i = $o(t) ? At(t) : window, s = i.visualViewport, l = !cm() && r, c = (o.left + (l && s ? s.offsetLeft : 0)) / n, d = (o.top + (l && s ? s.offsetTop : 0)) / a, u = o.width / n, p = o.height / a;
  return {
    width: u,
    height: p,
    top: d,
    right: c + u,
    bottom: d + p,
    left: c,
    x: c,
    y: d
  };
}
function Ac(t) {
  var e = an(t), r = t.offsetWidth, o = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: o
  };
}
function dm(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Tc(r)) {
    var o = e;
    do {
      if (o && t.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function _r(t) {
  return At(t).getComputedStyle(t);
}
function M4(t) {
  return ["table", "td", "th"].indexOf(vr(t)) >= 0;
}
function Xr(t) {
  return (($o(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function es(t) {
  return vr(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Tc(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xr(t)
  );
}
function Ou(t) {
  return !Vt(t) || // https://github.com/popperjs/popper-core/issues/837
  _r(t).position === "fixed" ? null : t.offsetParent;
}
function T4(t) {
  var e = /firefox/i.test(_l()), r = /Trident/i.test(_l());
  if (r && Vt(t)) {
    var o = _r(t);
    if (o.position === "fixed")
      return null;
  }
  var n = es(t);
  for (Tc(n) && (n = n.host); Vt(n) && ["html", "body"].indexOf(vr(n)) < 0; ) {
    var a = _r(n);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || e && a.willChange === "filter" || e && a.filter && a.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function ba(t) {
  for (var e = At(t), r = Ou(t); r && M4(r) && _r(r).position === "static"; )
    r = Ou(r);
  return r && (vr(r) === "html" || vr(r) === "body" && _r(r).position === "static") ? e : r || T4(t) || e;
}
function Ic(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Pn(t, e, r) {
  return vo(t, Ei(e, r));
}
function A4(t, e, r) {
  var o = Pn(t, e, r);
  return o > r ? r : o;
}
function um() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function pm(t) {
  return Object.assign({}, um(), t);
}
function fm(t, e) {
  return e.reduce(function(r, o) {
    return r[o] = t, r;
  }, {});
}
var I4 = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, pm(typeof t != "number" ? t : fm(t, va));
};
function N4(t) {
  var e, r = t.state, o = t.name, n = t.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = hr(r.placement), l = Ic(s), c = [St, Dt].indexOf(s) >= 0, d = c ? "height" : "width";
  if (!(!a || !i)) {
    var u = I4(n.padding, r), p = Ac(a), f = l === "y" ? $t : St, h = l === "y" ? Lt : Dt, m = r.rects.reference[d] + r.rects.reference[l] - i[l] - r.rects.popper[d], g = i[l] - r.rects.reference[l], b = ba(a), y = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, x = m / 2 - g / 2, v = u[f], S = y - p[d] - u[h], M = y / 2 - p[d] / 2 + x, q = Pn(v, M, S), B = l;
    r.modifiersData[o] = (e = {}, e[B] = q, e.centerOffset = q - M, e);
  }
}
function z4(t) {
  var e = t.state, r = t.options, o = r.element, n = o === void 0 ? "[data-popper-arrow]" : o;
  n != null && (typeof n == "string" && (n = e.elements.popper.querySelector(n), !n) || dm(e.elements.popper, n) && (e.elements.arrow = n));
}
const j4 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: N4,
  effect: z4,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function sn(t) {
  return t.split("-")[1];
}
var P4 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function R4(t, e) {
  var r = t.x, o = t.y, n = e.devicePixelRatio || 1;
  return {
    x: nn(r * n) / n || 0,
    y: nn(o * n) / n || 0
  };
}
function Eu(t) {
  var e, r = t.popper, o = t.popperRect, n = t.placement, a = t.variation, i = t.offsets, s = t.position, l = t.gpuAcceleration, c = t.adaptive, d = t.roundOffsets, u = t.isFixed, p = i.x, f = p === void 0 ? 0 : p, h = i.y, m = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: f,
    y: m
  }) : {
    x: f,
    y: m
  };
  f = g.x, m = g.y;
  var b = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), x = St, v = $t, S = window;
  if (c) {
    var M = ba(r), q = "clientHeight", B = "clientWidth";
    if (M === At(r) && (M = Xr(r), _r(M).position !== "static" && s === "absolute" && (q = "scrollHeight", B = "scrollWidth")), M = M, n === $t || (n === St || n === Dt) && a === ia) {
      v = Lt;
      var _ = u && M === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[q]
      );
      m -= _ - o.height, m *= l ? 1 : -1;
    }
    if (n === St || (n === $t || n === Lt) && a === ia) {
      x = Dt;
      var E = u && M === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[B]
      );
      f -= E - o.width, f *= l ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: s
  }, c && P4), z = d === !0 ? R4({
    x: f,
    y: m
  }, At(r)) : {
    x: f,
    y: m
  };
  if (f = z.x, m = z.y, l) {
    var Z;
    return Object.assign({}, U, (Z = {}, Z[v] = y ? "0" : "", Z[x] = b ? "0" : "", Z.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", Z));
  }
  return Object.assign({}, U, (e = {}, e[v] = y ? m + "px" : "", e[x] = b ? f + "px" : "", e.transform = "", e));
}
function V4(t) {
  var e = t.state, r = t.options, o = r.gpuAcceleration, n = o === void 0 ? !0 : o, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: hr(e.placement),
    variation: sn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: n,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Eu(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Eu(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const L4 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: V4,
  data: {}
};
var za = {
  passive: !0
};
function D4(t) {
  var e = t.state, r = t.instance, o = t.options, n = o.scroll, a = n === void 0 ? !0 : n, i = o.resize, s = i === void 0 ? !0 : i, l = At(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return a && c.forEach(function(d) {
    d.addEventListener("scroll", r.update, za);
  }), s && l.addEventListener("resize", r.update, za), function() {
    a && c.forEach(function(d) {
      d.removeEventListener("scroll", r.update, za);
    }), s && l.removeEventListener("resize", r.update, za);
  };
}
const B4 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: D4,
  data: {}
};
var F4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ka(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return F4[e];
  });
}
var H4 = {
  start: "end",
  end: "start"
};
function Mu(t) {
  return t.replace(/start|end/g, function(e) {
    return H4[e];
  });
}
function Nc(t) {
  var e = At(t), r = e.pageXOffset, o = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: o
  };
}
function zc(t) {
  return an(Xr(t)).left + Nc(t).scrollLeft;
}
function q4(t, e) {
  var r = At(t), o = Xr(t), n = r.visualViewport, a = o.clientWidth, i = o.clientHeight, s = 0, l = 0;
  if (n) {
    a = n.width, i = n.height;
    var c = cm();
    (c || !c && e === "fixed") && (s = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + zc(t),
    y: l
  };
}
function W4(t) {
  var e, r = Xr(t), o = Nc(t), n = (e = t.ownerDocument) == null ? void 0 : e.body, a = vo(r.scrollWidth, r.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), i = vo(r.scrollHeight, r.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), s = -o.scrollLeft + zc(t), l = -o.scrollTop;
  return _r(n || r).direction === "rtl" && (s += vo(r.clientWidth, n ? n.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function jc(t) {
  var e = _r(t), r = e.overflow, o = e.overflowX, n = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + n + o);
}
function hm(t) {
  return ["html", "body", "#document"].indexOf(vr(t)) >= 0 ? t.ownerDocument.body : Vt(t) && jc(t) ? t : hm(es(t));
}
function Rn(t, e) {
  var r;
  e === void 0 && (e = []);
  var o = hm(t), n = o === ((r = t.ownerDocument) == null ? void 0 : r.body), a = At(o), i = n ? [a].concat(a.visualViewport || [], jc(o) ? o : []) : o, s = e.concat(i);
  return n ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Rn(es(i)))
  );
}
function Cl(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function U4(t, e) {
  var r = an(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Tu(t, e, r) {
  return e === im ? Cl(q4(t, r)) : $o(e) ? U4(e, r) : Cl(W4(Xr(t)));
}
function K4(t) {
  var e = Rn(es(t)), r = ["absolute", "fixed"].indexOf(_r(t).position) >= 0, o = r && Vt(t) ? ba(t) : t;
  return $o(o) ? e.filter(function(n) {
    return $o(n) && dm(n, o) && vr(n) !== "body";
  }) : [];
}
function J4(t, e, r, o) {
  var n = e === "clippingParents" ? K4(t) : [].concat(e), a = [].concat(n, [r]), i = a[0], s = a.reduce(function(l, c) {
    var d = Tu(t, c, o);
    return l.top = vo(d.top, l.top), l.right = Ei(d.right, l.right), l.bottom = Ei(d.bottom, l.bottom), l.left = vo(d.left, l.left), l;
  }, Tu(t, i, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function mm(t) {
  var e = t.reference, r = t.element, o = t.placement, n = o ? hr(o) : null, a = o ? sn(o) : null, i = e.x + e.width / 2 - r.width / 2, s = e.y + e.height / 2 - r.height / 2, l;
  switch (n) {
    case $t:
      l = {
        x: i,
        y: e.y - r.height
      };
      break;
    case Lt:
      l = {
        x: i,
        y: e.y + e.height
      };
      break;
    case Dt:
      l = {
        x: e.x + e.width,
        y: s
      };
      break;
    case St:
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
  var c = n ? Ic(n) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (a) {
      case on:
        l[c] = l[c] - (e[d] / 2 - r[d] / 2);
        break;
      case ia:
        l[c] = l[c] + (e[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function sa(t, e) {
  e === void 0 && (e = {});
  var r = e, o = r.placement, n = o === void 0 ? t.placement : o, a = r.strategy, i = a === void 0 ? t.strategy : a, s = r.boundary, l = s === void 0 ? m4 : s, c = r.rootBoundary, d = c === void 0 ? im : c, u = r.elementContext, p = u === void 0 ? mn : u, f = r.altBoundary, h = f === void 0 ? !1 : f, m = r.padding, g = m === void 0 ? 0 : m, b = pm(typeof g != "number" ? g : fm(g, va)), y = p === mn ? g4 : mn, x = t.rects.popper, v = t.elements[h ? y : p], S = J4($o(v) ? v : v.contextElement || Xr(t.elements.popper), l, d, i), M = an(t.elements.reference), q = mm({
    reference: M,
    element: x,
    strategy: "absolute",
    placement: n
  }), B = Cl(Object.assign({}, x, q)), _ = p === mn ? B : M, E = {
    top: S.top - _.top + b.top,
    bottom: _.bottom - S.bottom + b.bottom,
    left: S.left - _.left + b.left,
    right: _.right - S.right + b.right
  }, U = t.modifiersData.offset;
  if (p === mn && U) {
    var z = U[n];
    Object.keys(E).forEach(function(Z) {
      var ge = [Dt, Lt].indexOf(Z) >= 0 ? 1 : -1, _e = [$t, Lt].indexOf(Z) >= 0 ? "y" : "x";
      E[Z] += z[_e] * ge;
    });
  }
  return E;
}
function Y4(t, e) {
  e === void 0 && (e = {});
  var r = e, o = r.placement, n = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? sm : l, d = sn(o), u = d ? s ? Cu : Cu.filter(function(h) {
    return sn(h) === d;
  }) : va, p = u.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  p.length === 0 && (p = u);
  var f = p.reduce(function(h, m) {
    return h[m] = sa(t, {
      placement: m,
      boundary: n,
      rootBoundary: a,
      padding: i
    })[hr(m)], h;
  }, {});
  return Object.keys(f).sort(function(h, m) {
    return f[h] - f[m];
  });
}
function X4(t) {
  if (hr(t) === Mc)
    return [];
  var e = Ka(t);
  return [Mu(t), e, Mu(e)];
}
function G4(t) {
  var e = t.state, r = t.options, o = t.name;
  if (!e.modifiersData[o]._skip) {
    for (var n = r.mainAxis, a = n === void 0 ? !0 : n, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, d = r.boundary, u = r.rootBoundary, p = r.altBoundary, f = r.flipVariations, h = f === void 0 ? !0 : f, m = r.allowedAutoPlacements, g = e.options.placement, b = hr(g), y = b === g, x = l || (y || !h ? [Ka(g)] : X4(g)), v = [g].concat(x).reduce(function(me, be) {
      return me.concat(hr(be) === Mc ? Y4(e, {
        placement: be,
        boundary: d,
        rootBoundary: u,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : be);
    }, []), S = e.rects.reference, M = e.rects.popper, q = /* @__PURE__ */ new Map(), B = !0, _ = v[0], E = 0; E < v.length; E++) {
      var U = v[E], z = hr(U), Z = sn(U) === on, ge = [$t, Lt].indexOf(z) >= 0, _e = ge ? "width" : "height", ye = sa(e, {
        placement: U,
        boundary: d,
        rootBoundary: u,
        altBoundary: p,
        padding: c
      }), C = ge ? Z ? Dt : St : Z ? Lt : $t;
      S[_e] > M[_e] && (C = Ka(C));
      var R = Ka(C), se = [];
      if (a && se.push(ye[z] <= 0), s && se.push(ye[C] <= 0, ye[R] <= 0), se.every(function(me) {
        return me;
      })) {
        _ = U, B = !1;
        break;
      }
      q.set(U, se);
    }
    if (B)
      for (var re = h ? 3 : 1, we = function(me) {
        var be = v.find(function(ze) {
          var Ye = q.get(ze);
          if (Ye)
            return Ye.slice(0, me).every(function(Be) {
              return Be;
            });
        });
        if (be)
          return _ = be, "break";
      }, j = re; j > 0; j--) {
        var he = we(j);
        if (he === "break") break;
      }
    e.placement !== _ && (e.modifiersData[o]._skip = !0, e.placement = _, e.reset = !0);
  }
}
const Z4 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: G4,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Au(t, e, r) {
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
function Iu(t) {
  return [$t, Dt, Lt, St].some(function(e) {
    return t[e] >= 0;
  });
}
function Q4(t) {
  var e = t.state, r = t.name, o = e.rects.reference, n = e.rects.popper, a = e.modifiersData.preventOverflow, i = sa(e, {
    elementContext: "reference"
  }), s = sa(e, {
    altBoundary: !0
  }), l = Au(i, o), c = Au(s, n, a), d = Iu(l), u = Iu(c);
  e.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": u
  });
}
const e3 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Q4
};
function t3(t, e, r) {
  var o = hr(t), n = [St, $t].indexOf(o) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * n, [St, Dt].indexOf(o) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function r3(t) {
  var e = t.state, r = t.options, o = t.name, n = r.offset, a = n === void 0 ? [0, 0] : n, i = sm.reduce(function(d, u) {
    return d[u] = t3(u, e.rects, a), d;
  }, {}), s = i[e.placement], l = s.x, c = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[o] = i;
}
const o3 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: r3
};
function n3(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = mm({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const a3 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: n3,
  data: {}
};
function i3(t) {
  return t === "x" ? "y" : "x";
}
function s3(t) {
  var e = t.state, r = t.options, o = t.name, n = r.mainAxis, a = n === void 0 ? !0 : n, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, d = r.altBoundary, u = r.padding, p = r.tether, f = p === void 0 ? !0 : p, h = r.tetherOffset, m = h === void 0 ? 0 : h, g = sa(e, {
    boundary: l,
    rootBoundary: c,
    padding: u,
    altBoundary: d
  }), b = hr(e.placement), y = sn(e.placement), x = !y, v = Ic(b), S = i3(v), M = e.modifiersData.popperOffsets, q = e.rects.reference, B = e.rects.popper, _ = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, E = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), U = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (M) {
    if (a) {
      var Z, ge = v === "y" ? $t : St, _e = v === "y" ? Lt : Dt, ye = v === "y" ? "height" : "width", C = M[v], R = C + g[ge], se = C - g[_e], re = f ? -B[ye] / 2 : 0, we = y === on ? q[ye] : B[ye], j = y === on ? -B[ye] : -q[ye], he = e.elements.arrow, me = f && he ? Ac(he) : {
        width: 0,
        height: 0
      }, be = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : um(), ze = be[ge], Ye = be[_e], Be = Pn(0, q[ye], me[ye]), It = x ? q[ye] / 2 - re - Be - ze - E.mainAxis : we - Be - ze - E.mainAxis, tt = x ? -q[ye] / 2 + re + Be + Ye + E.mainAxis : j + Be + Ye + E.mainAxis, Ht = e.elements.arrow && ba(e.elements.arrow), br = Ht ? v === "y" ? Ht.clientTop || 0 : Ht.clientLeft || 0 : 0, w = (Z = U == null ? void 0 : U[v]) != null ? Z : 0, k = C + It - w - br, O = C + tt - w, V = Pn(f ? Ei(R, k) : R, C, f ? vo(se, O) : se);
      M[v] = V, z[v] = V - C;
    }
    if (s) {
      var L, F = v === "x" ? $t : St, N = v === "x" ? Lt : Dt, K = M[S], D = S === "y" ? "height" : "width", A = K + g[F], ie = K - g[N], G = [$t, St].indexOf(b) !== -1, ne = (L = U == null ? void 0 : U[S]) != null ? L : 0, pe = G ? A : K - q[D] - B[D] - ne + E.altAxis, P = G ? K + q[D] + B[D] - ne - E.altAxis : ie, Y = f && G ? A4(pe, K, P) : Pn(f ? pe : A, K, f ? P : ie);
      M[S] = Y, z[S] = Y - K;
    }
    e.modifiersData[o] = z;
  }
}
const l3 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: s3,
  requiresIfExists: ["offset"]
};
function c3(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function d3(t) {
  return t === At(t) || !Vt(t) ? Nc(t) : c3(t);
}
function u3(t) {
  var e = t.getBoundingClientRect(), r = nn(e.width) / t.offsetWidth || 1, o = nn(e.height) / t.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function p3(t, e, r) {
  r === void 0 && (r = !1);
  var o = Vt(e), n = Vt(e) && u3(e), a = Xr(e), i = an(t, n, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((vr(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  jc(a)) && (s = d3(e)), Vt(e) ? (l = an(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : a && (l.x = zc(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function f3(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
  t.forEach(function(a) {
    e.set(a.name, a);
  });
  function n(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = e.get(s);
        l && n(l);
      }
    }), o.push(a);
  }
  return t.forEach(function(a) {
    r.has(a.name) || n(a);
  }), o;
}
function h3(t) {
  var e = f3(t);
  return C4.reduce(function(r, o) {
    return r.concat(e.filter(function(n) {
      return n.phase === o;
    }));
  }, []);
}
function m3(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function g3(t) {
  var e = t.reduce(function(r, o) {
    var n = r[o.name];
    return r[o.name] = n ? Object.assign({}, n, o, {
      options: Object.assign({}, n.options, o.options),
      data: Object.assign({}, n.data, o.data)
    }) : o, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var Nu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function zu() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function v3(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, o = r === void 0 ? [] : r, n = e.defaultOptions, a = n === void 0 ? Nu : n;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nu, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], u = !1, p = {
      state: c,
      setOptions: function(m) {
        var g = typeof m == "function" ? m(c.options) : m;
        h(), c.options = Object.assign({}, a, c.options, g), c.scrollParents = {
          reference: $o(i) ? Rn(i) : i.contextElement ? Rn(i.contextElement) : [],
          popper: Rn(s)
        };
        var b = h3(g3([].concat(o, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(y) {
          return y.enabled;
        }), f(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!u) {
          var m = c.elements, g = m.reference, b = m.popper;
          if (zu(g, b)) {
            c.rects = {
              reference: p3(g, ba(b), c.options.strategy === "fixed"),
              popper: Ac(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(B) {
              return c.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === !0) {
                c.reset = !1, y = -1;
                continue;
              }
              var x = c.orderedModifiers[y], v = x.fn, S = x.options, M = S === void 0 ? {} : S, q = x.name;
              typeof v == "function" && (c = v({
                state: c,
                options: M,
                name: q,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: m3(function() {
        return new Promise(function(m) {
          p.forceUpdate(), m(c);
        });
      }),
      destroy: function() {
        h(), u = !0;
      }
    };
    if (!zu(i, s))
      return p;
    p.setOptions(l).then(function(m) {
      !u && l.onFirstUpdate && l.onFirstUpdate(m);
    });
    function f() {
      c.orderedModifiers.forEach(function(m) {
        var g = m.name, b = m.options, y = b === void 0 ? {} : b, x = m.effect;
        if (typeof x == "function") {
          var v = x({
            state: c,
            name: g,
            instance: p,
            options: y
          }), S = function() {
          };
          d.push(v || S);
        }
      });
    }
    function h() {
      d.forEach(function(m) {
        return m();
      }), d = [];
    }
    return p;
  };
}
var b3 = [B4, a3, L4, lm, o3, Z4, l3, j4, e3], w3 = /* @__PURE__ */ v3({
  defaultModifiers: b3
}), y3 = "tippy-box", gm = "tippy-content", x3 = "tippy-backdrop", vm = "tippy-arrow", bm = "tippy-svg-arrow", ao = {
  passive: !0,
  capture: !0
}, wm = function() {
  return document.body;
};
function zs(t, e, r) {
  if (Array.isArray(t)) {
    var o = t[e];
    return o ?? (Array.isArray(r) ? r[e] : r);
  }
  return t;
}
function Pc(t, e) {
  var r = {}.toString.call(t);
  return r.indexOf("[object") === 0 && r.indexOf(e + "]") > -1;
}
function ym(t, e) {
  return typeof t == "function" ? t.apply(void 0, e) : t;
}
function ju(t, e) {
  if (e === 0)
    return t;
  var r;
  return function(o) {
    clearTimeout(r), r = setTimeout(function() {
      t(o);
    }, e);
  };
}
function k3(t) {
  return t.split(/\s+/).filter(Boolean);
}
function Bo(t) {
  return [].concat(t);
}
function Pu(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function $3(t) {
  return t.filter(function(e, r) {
    return t.indexOf(e) === r;
  });
}
function S3(t) {
  return t.split("-")[0];
}
function Mi(t) {
  return [].slice.call(t);
}
function Ru(t) {
  return Object.keys(t).reduce(function(e, r) {
    return t[r] !== void 0 && (e[r] = t[r]), e;
  }, {});
}
function Vn() {
  return document.createElement("div");
}
function ts(t) {
  return ["Element", "Fragment"].some(function(e) {
    return Pc(t, e);
  });
}
function _3(t) {
  return Pc(t, "NodeList");
}
function C3(t) {
  return Pc(t, "MouseEvent");
}
function O3(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
function E3(t) {
  return ts(t) ? [t] : _3(t) ? Mi(t) : Array.isArray(t) ? t : Mi(document.querySelectorAll(t));
}
function js(t, e) {
  t.forEach(function(r) {
    r && (r.style.transitionDuration = e + "ms");
  });
}
function Vu(t, e) {
  t.forEach(function(r) {
    r && r.setAttribute("data-state", e);
  });
}
function M3(t) {
  var e, r = Bo(t), o = r[0];
  return o != null && (e = o.ownerDocument) != null && e.body ? o.ownerDocument : document;
}
function T3(t, e) {
  var r = e.clientX, o = e.clientY;
  return t.every(function(n) {
    var a = n.popperRect, i = n.popperState, s = n.props, l = s.interactiveBorder, c = S3(i.placement), d = i.modifiersData.offset;
    if (!d)
      return !0;
    var u = c === "bottom" ? d.top.y : 0, p = c === "top" ? d.bottom.y : 0, f = c === "right" ? d.left.x : 0, h = c === "left" ? d.right.x : 0, m = a.top - o + u > l, g = o - a.bottom - p > l, b = a.left - r + f > l, y = r - a.right - h > l;
    return m || g || b || y;
  });
}
function Ps(t, e, r) {
  var o = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(n) {
    t[o](n, r);
  });
}
function Lu(t, e) {
  for (var r = e; r; ) {
    var o;
    if (t.contains(r))
      return !0;
    r = r.getRootNode == null || (o = r.getRootNode()) == null ? void 0 : o.host;
  }
  return !1;
}
var sr = {
  isTouch: !1
}, Du = 0;
function A3() {
  sr.isTouch || (sr.isTouch = !0, window.performance && document.addEventListener("mousemove", xm));
}
function xm() {
  var t = performance.now();
  t - Du < 20 && (sr.isTouch = !1, document.removeEventListener("mousemove", xm)), Du = t;
}
function I3() {
  var t = document.activeElement;
  if (O3(t)) {
    var e = t._tippy;
    t.blur && !e.state.isVisible && t.blur();
  }
}
function N3() {
  document.addEventListener("touchstart", A3, ao), window.addEventListener("blur", I3);
}
var z3 = typeof window < "u" && typeof document < "u", j3 = z3 ? (
  // @ts-ignore
  !!window.msCrypto
) : !1, P3 = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, R3 = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Kt = Object.assign({
  appendTo: wm,
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
}, P3, R3), V3 = Object.keys(Kt), L3 = function(t) {
  var e = Object.keys(t);
  e.forEach(function(r) {
    Kt[r] = t[r];
  });
};
function km(t) {
  var e = t.plugins || [], r = e.reduce(function(o, n) {
    var a = n.name, i = n.defaultValue;
    if (a) {
      var s;
      o[a] = t[a] !== void 0 ? t[a] : (s = Kt[a]) != null ? s : i;
    }
    return o;
  }, {});
  return Object.assign({}, t, r);
}
function D3(t, e) {
  var r = e ? Object.keys(km(Object.assign({}, Kt, {
    plugins: e
  }))) : V3, o = r.reduce(function(n, a) {
    var i = (t.getAttribute("data-tippy-" + a) || "").trim();
    if (!i)
      return n;
    if (a === "content")
      n[a] = i;
    else
      try {
        n[a] = JSON.parse(i);
      } catch {
        n[a] = i;
      }
    return n;
  }, {});
  return o;
}
function Bu(t, e) {
  var r = Object.assign({}, e, {
    content: ym(e.content, [t])
  }, e.ignoreAttributes ? {} : D3(t, e.plugins));
  return r.aria = Object.assign({}, Kt.aria, r.aria), r.aria = {
    expanded: r.aria.expanded === "auto" ? e.interactive : r.aria.expanded,
    content: r.aria.content === "auto" ? e.interactive ? null : "describedby" : r.aria.content
  }, r;
}
var B3 = function() {
  return "innerHTML";
};
function Ol(t, e) {
  t[B3()] = e;
}
function Fu(t) {
  var e = Vn();
  return t === !0 ? e.className = vm : (e.className = bm, ts(t) ? e.appendChild(t) : Ol(e, t)), e;
}
function Hu(t, e) {
  ts(e.content) ? (Ol(t, ""), t.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Ol(t, e.content) : t.textContent = e.content);
}
function El(t) {
  var e = t.firstElementChild, r = Mi(e.children);
  return {
    box: e,
    content: r.find(function(o) {
      return o.classList.contains(gm);
    }),
    arrow: r.find(function(o) {
      return o.classList.contains(vm) || o.classList.contains(bm);
    }),
    backdrop: r.find(function(o) {
      return o.classList.contains(x3);
    })
  };
}
function $m(t) {
  var e = Vn(), r = Vn();
  r.className = y3, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1");
  var o = Vn();
  o.className = gm, o.setAttribute("data-state", "hidden"), Hu(o, t.props), e.appendChild(r), r.appendChild(o), n(t.props, t.props);
  function n(a, i) {
    var s = El(e), l = s.box, c = s.content, d = s.arrow;
    i.theme ? l.setAttribute("data-theme", i.theme) : l.removeAttribute("data-theme"), typeof i.animation == "string" ? l.setAttribute("data-animation", i.animation) : l.removeAttribute("data-animation"), i.inertia ? l.setAttribute("data-inertia", "") : l.removeAttribute("data-inertia"), l.style.maxWidth = typeof i.maxWidth == "number" ? i.maxWidth + "px" : i.maxWidth, i.role ? l.setAttribute("role", i.role) : l.removeAttribute("role"), (a.content !== i.content || a.allowHTML !== i.allowHTML) && Hu(c, t.props), i.arrow ? d ? a.arrow !== i.arrow && (l.removeChild(d), l.appendChild(Fu(i.arrow))) : l.appendChild(Fu(i.arrow)) : d && l.removeChild(d);
  }
  return {
    popper: e,
    onUpdate: n
  };
}
$m.$$tippy = !0;
var F3 = 1, ja = [], Rs = [];
function H3(t, e) {
  var r = Bu(t, Object.assign({}, Kt, km(Ru(e)))), o, n, a, i = !1, s = !1, l = !1, c = !1, d, u, p, f = [], h = ju(k, r.interactiveDebounce), m, g = F3++, b = null, y = $3(r.plugins), x = {
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
  }, v = {
    // properties
    id: g,
    reference: t,
    popper: Vn(),
    popperInstance: b,
    props: r,
    state: x,
    plugins: y,
    // methods
    clearDelayTimeouts: pe,
    setProps: P,
    setContent: Y,
    show: oe,
    hide: ke,
    hideWithInteractivity: Ae,
    enable: G,
    disable: ne,
    unmount: We,
    destroy: rt
  };
  if (!r.render)
    return v;
  var S = r.render(v), M = S.popper, q = S.onUpdate;
  M.setAttribute("data-tippy-root", ""), M.id = "tippy-" + v.id, v.popper = M, t._tippy = v, M._tippy = v;
  var B = y.map(function(T) {
    return T.fn(v);
  }), _ = t.hasAttribute("aria-expanded");
  return Ht(), re(), C(), R("onCreate", [v]), r.showOnCreate && A(), M.addEventListener("mouseenter", function() {
    v.props.interactive && v.state.isVisible && v.clearDelayTimeouts();
  }), M.addEventListener("mouseleave", function() {
    v.props.interactive && v.props.trigger.indexOf("mouseenter") >= 0 && ge().addEventListener("mousemove", h);
  }), v;
  function E() {
    var T = v.props.touch;
    return Array.isArray(T) ? T : [T, 0];
  }
  function U() {
    return E()[0] === "hold";
  }
  function z() {
    var T;
    return !!((T = v.props.render) != null && T.$$tippy);
  }
  function Z() {
    return m || t;
  }
  function ge() {
    var T = Z().parentNode;
    return T ? M3(T) : document;
  }
  function _e() {
    return El(M);
  }
  function ye(T) {
    return v.state.isMounted && !v.state.isVisible || sr.isTouch || d && d.type === "focus" ? 0 : zs(v.props.delay, T ? 0 : 1, Kt.delay);
  }
  function C(T) {
    T === void 0 && (T = !1), M.style.pointerEvents = v.props.interactive && !T ? "" : "none", M.style.zIndex = "" + v.props.zIndex;
  }
  function R(T, ae, le) {
    if (le === void 0 && (le = !0), B.forEach(function(Me) {
      Me[T] && Me[T].apply(Me, ae);
    }), le) {
      var Ce;
      (Ce = v.props)[T].apply(Ce, ae);
    }
  }
  function se() {
    var T = v.props.aria;
    if (T.content) {
      var ae = "aria-" + T.content, le = M.id, Ce = Bo(v.props.triggerTarget || t);
      Ce.forEach(function(Me) {
        var ft = Me.getAttribute(ae);
        if (v.state.isVisible)
          Me.setAttribute(ae, ft ? ft + " " + le : le);
        else {
          var Nt = ft && ft.replace(le, "").trim();
          Nt ? Me.setAttribute(ae, Nt) : Me.removeAttribute(ae);
        }
      });
    }
  }
  function re() {
    if (!(_ || !v.props.aria.expanded)) {
      var T = Bo(v.props.triggerTarget || t);
      T.forEach(function(ae) {
        v.props.interactive ? ae.setAttribute("aria-expanded", v.state.isVisible && ae === Z() ? "true" : "false") : ae.removeAttribute("aria-expanded");
      });
    }
  }
  function we() {
    ge().removeEventListener("mousemove", h), ja = ja.filter(function(T) {
      return T !== h;
    });
  }
  function j(T) {
    if (!(sr.isTouch && (l || T.type === "mousedown"))) {
      var ae = T.composedPath && T.composedPath()[0] || T.target;
      if (!(v.props.interactive && Lu(M, ae))) {
        if (Bo(v.props.triggerTarget || t).some(function(le) {
          return Lu(le, ae);
        })) {
          if (sr.isTouch || v.state.isVisible && v.props.trigger.indexOf("click") >= 0)
            return;
        } else
          R("onClickOutside", [v, T]);
        v.props.hideOnClick === !0 && (v.clearDelayTimeouts(), v.hide(), s = !0, setTimeout(function() {
          s = !1;
        }), v.state.isMounted || ze());
      }
    }
  }
  function he() {
    l = !0;
  }
  function me() {
    l = !1;
  }
  function be() {
    var T = ge();
    T.addEventListener("mousedown", j, !0), T.addEventListener("touchend", j, ao), T.addEventListener("touchstart", me, ao), T.addEventListener("touchmove", he, ao);
  }
  function ze() {
    var T = ge();
    T.removeEventListener("mousedown", j, !0), T.removeEventListener("touchend", j, ao), T.removeEventListener("touchstart", me, ao), T.removeEventListener("touchmove", he, ao);
  }
  function Ye(T, ae) {
    It(T, function() {
      !v.state.isVisible && M.parentNode && M.parentNode.contains(M) && ae();
    });
  }
  function Be(T, ae) {
    It(T, ae);
  }
  function It(T, ae) {
    var le = _e().box;
    function Ce(Me) {
      Me.target === le && (Ps(le, "remove", Ce), ae());
    }
    if (T === 0)
      return ae();
    Ps(le, "remove", u), Ps(le, "add", Ce), u = Ce;
  }
  function tt(T, ae, le) {
    le === void 0 && (le = !1);
    var Ce = Bo(v.props.triggerTarget || t);
    Ce.forEach(function(Me) {
      Me.addEventListener(T, ae, le), f.push({
        node: Me,
        eventType: T,
        handler: ae,
        options: le
      });
    });
  }
  function Ht() {
    U() && (tt("touchstart", w, {
      passive: !0
    }), tt("touchend", O, {
      passive: !0
    })), k3(v.props.trigger).forEach(function(T) {
      if (T !== "manual")
        switch (tt(T, w), T) {
          case "mouseenter":
            tt("mouseleave", O);
            break;
          case "focus":
            tt(j3 ? "focusout" : "blur", V);
            break;
          case "focusin":
            tt("focusout", V);
            break;
        }
    });
  }
  function br() {
    f.forEach(function(T) {
      var ae = T.node, le = T.eventType, Ce = T.handler, Me = T.options;
      ae.removeEventListener(le, Ce, Me);
    }), f = [];
  }
  function w(T) {
    var ae, le = !1;
    if (!(!v.state.isEnabled || L(T) || s)) {
      var Ce = ((ae = d) == null ? void 0 : ae.type) === "focus";
      d = T, m = T.currentTarget, re(), !v.state.isVisible && C3(T) && ja.forEach(function(Me) {
        return Me(T);
      }), T.type === "click" && (v.props.trigger.indexOf("mouseenter") < 0 || i) && v.props.hideOnClick !== !1 && v.state.isVisible ? le = !0 : A(T), T.type === "click" && (i = !le), le && !Ce && ie(T);
    }
  }
  function k(T) {
    var ae = T.target, le = Z().contains(ae) || M.contains(ae);
    if (!(T.type === "mousemove" && le)) {
      var Ce = D().concat(M).map(function(Me) {
        var ft, Nt = Me._tippy, Io = (ft = Nt.popperInstance) == null ? void 0 : ft.state;
        return Io ? {
          popperRect: Me.getBoundingClientRect(),
          popperState: Io,
          props: r
        } : null;
      }).filter(Boolean);
      T3(Ce, T) && (we(), ie(T));
    }
  }
  function O(T) {
    var ae = L(T) || v.props.trigger.indexOf("click") >= 0 && i;
    if (!ae) {
      if (v.props.interactive) {
        v.hideWithInteractivity(T);
        return;
      }
      ie(T);
    }
  }
  function V(T) {
    v.props.trigger.indexOf("focusin") < 0 && T.target !== Z() || v.props.interactive && T.relatedTarget && M.contains(T.relatedTarget) || ie(T);
  }
  function L(T) {
    return sr.isTouch ? U() !== T.type.indexOf("touch") >= 0 : !1;
  }
  function F() {
    N();
    var T = v.props, ae = T.popperOptions, le = T.placement, Ce = T.offset, Me = T.getReferenceClientRect, ft = T.moveTransition, Nt = z() ? El(M).arrow : null, Io = Me ? {
      getBoundingClientRect: Me,
      contextElement: Me.contextElement || Z()
    } : t, wa = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(ya) {
        var No = ya.state;
        if (z()) {
          var Hm = _e(), rs = Hm.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(xa) {
            xa === "placement" ? rs.setAttribute("data-placement", No.placement) : No.attributes.popper["data-popper-" + xa] ? rs.setAttribute("data-" + xa, "") : rs.removeAttribute("data-" + xa);
          }), No.attributes.popper = {};
        }
      }
    }, Zr = [{
      name: "offset",
      options: {
        offset: Ce
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
        adaptive: !ft
      }
    }, wa];
    z() && Nt && Zr.push({
      name: "arrow",
      options: {
        element: Nt,
        padding: 3
      }
    }), Zr.push.apply(Zr, (ae == null ? void 0 : ae.modifiers) || []), v.popperInstance = w3(Io, M, Object.assign({}, ae, {
      placement: le,
      onFirstUpdate: p,
      modifiers: Zr
    }));
  }
  function N() {
    v.popperInstance && (v.popperInstance.destroy(), v.popperInstance = null);
  }
  function K() {
    var T = v.props.appendTo, ae, le = Z();
    v.props.interactive && T === wm || T === "parent" ? ae = le.parentNode : ae = ym(T, [le]), ae.contains(M) || ae.appendChild(M), v.state.isMounted = !0, F();
  }
  function D() {
    return Mi(M.querySelectorAll("[data-tippy-root]"));
  }
  function A(T) {
    v.clearDelayTimeouts(), T && R("onTrigger", [v, T]), be();
    var ae = ye(!0), le = E(), Ce = le[0], Me = le[1];
    sr.isTouch && Ce === "hold" && Me && (ae = Me), ae ? o = setTimeout(function() {
      v.show();
    }, ae) : v.show();
  }
  function ie(T) {
    if (v.clearDelayTimeouts(), R("onUntrigger", [v, T]), !v.state.isVisible) {
      ze();
      return;
    }
    if (!(v.props.trigger.indexOf("mouseenter") >= 0 && v.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(T.type) >= 0 && i)) {
      var ae = ye(!1);
      ae ? n = setTimeout(function() {
        v.state.isVisible && v.hide();
      }, ae) : a = requestAnimationFrame(function() {
        v.hide();
      });
    }
  }
  function G() {
    v.state.isEnabled = !0;
  }
  function ne() {
    v.hide(), v.state.isEnabled = !1;
  }
  function pe() {
    clearTimeout(o), clearTimeout(n), cancelAnimationFrame(a);
  }
  function P(T) {
    if (!v.state.isDestroyed) {
      R("onBeforeUpdate", [v, T]), br();
      var ae = v.props, le = Bu(t, Object.assign({}, ae, Ru(T), {
        ignoreAttributes: !0
      }));
      v.props = le, Ht(), ae.interactiveDebounce !== le.interactiveDebounce && (we(), h = ju(k, le.interactiveDebounce)), ae.triggerTarget && !le.triggerTarget ? Bo(ae.triggerTarget).forEach(function(Ce) {
        Ce.removeAttribute("aria-expanded");
      }) : le.triggerTarget && t.removeAttribute("aria-expanded"), re(), C(), q && q(ae, le), v.popperInstance && (F(), D().forEach(function(Ce) {
        requestAnimationFrame(Ce._tippy.popperInstance.forceUpdate);
      })), R("onAfterUpdate", [v, T]);
    }
  }
  function Y(T) {
    v.setProps({
      content: T
    });
  }
  function oe() {
    var T = v.state.isVisible, ae = v.state.isDestroyed, le = !v.state.isEnabled, Ce = sr.isTouch && !v.props.touch, Me = zs(v.props.duration, 0, Kt.duration);
    if (!(T || ae || le || Ce) && !Z().hasAttribute("disabled") && (R("onShow", [v], !1), v.props.onShow(v) !== !1)) {
      if (v.state.isVisible = !0, z() && (M.style.visibility = "visible"), C(), be(), v.state.isMounted || (M.style.transition = "none"), z()) {
        var ft = _e(), Nt = ft.box, Io = ft.content;
        js([Nt, Io], 0);
      }
      p = function() {
        var wa;
        if (!(!v.state.isVisible || c)) {
          if (c = !0, M.offsetHeight, M.style.transition = v.props.moveTransition, z() && v.props.animation) {
            var Zr = _e(), ya = Zr.box, No = Zr.content;
            js([ya, No], Me), Vu([ya, No], "visible");
          }
          se(), re(), Pu(Rs, v), (wa = v.popperInstance) == null || wa.forceUpdate(), R("onMount", [v]), v.props.animation && z() && Be(Me, function() {
            v.state.isShown = !0, R("onShown", [v]);
          });
        }
      }, K();
    }
  }
  function ke() {
    var T = !v.state.isVisible, ae = v.state.isDestroyed, le = !v.state.isEnabled, Ce = zs(v.props.duration, 1, Kt.duration);
    if (!(T || ae || le) && (R("onHide", [v], !1), v.props.onHide(v) !== !1)) {
      if (v.state.isVisible = !1, v.state.isShown = !1, c = !1, i = !1, z() && (M.style.visibility = "hidden"), we(), ze(), C(!0), z()) {
        var Me = _e(), ft = Me.box, Nt = Me.content;
        v.props.animation && (js([ft, Nt], Ce), Vu([ft, Nt], "hidden"));
      }
      se(), re(), v.props.animation ? z() && Ye(Ce, v.unmount) : v.unmount();
    }
  }
  function Ae(T) {
    ge().addEventListener("mousemove", h), Pu(ja, h), h(T);
  }
  function We() {
    v.state.isVisible && v.hide(), v.state.isMounted && (N(), D().forEach(function(T) {
      T._tippy.unmount();
    }), M.parentNode && M.parentNode.removeChild(M), Rs = Rs.filter(function(T) {
      return T !== v;
    }), v.state.isMounted = !1, R("onHidden", [v]));
  }
  function rt() {
    !v.state.isDestroyed && (v.clearDelayTimeouts(), v.unmount(), br(), delete t._tippy, v.state.isDestroyed = !0, R("onDestroy", [v]));
  }
}
function un(t, e) {
  e === void 0 && (e = {});
  var r = Kt.plugins.concat(e.plugins || []);
  N3();
  var o = Object.assign({}, e, {
    plugins: r
  }), n = E3(t), a = n.reduce(function(i, s) {
    var l = s && H3(s, o);
    return l && i.push(l), i;
  }, []);
  return ts(t) ? a[0] : a;
}
un.defaultProps = Kt;
un.setDefaultProps = L3;
un.currentInput = sr;
Object.assign({}, lm, {
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
un.setDefaultProps({
  render: $m
});
class q3 {
  constructor({ editor: e, element: r, view: o, tippyOptions: n = {}, updateDelay: a = 250, shouldShow: i }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: l, from: c, to: d }) => {
      const { doc: u, selection: p } = l, { empty: f } = p, h = !u.textBetween(c, d).length && _c(l.selection), m = this.element.contains(document.activeElement);
      return !(!(s.hasFocus() || m) || f || h || !this.editor.isEditable);
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
      s != null && s.relatedTarget && !((l = this.element.parentNode) === null || l === void 0) && l.contains(s.relatedTarget) || this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.handleDebouncedUpdate = (s, l) => {
      const c = !(l != null && l.selection.eq(s.state.selection)), d = !(l != null && l.doc.eq(s.state.doc));
      !c && !d || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(s, c, d, l);
      }, this.updateDelay));
    }, this.updateHandler = (s, l, c, d) => {
      var u, p, f;
      const { state: h, composing: m } = s, { selection: g } = h;
      if (m || !l && !c)
        return;
      this.createTooltip();
      const { ranges: b } = g, y = Math.min(...b.map((v) => v.$from.pos)), x = Math.max(...b.map((v) => v.$to.pos));
      if (!(!((u = this.shouldShow) === null || u === void 0) && u.call(this, {
        editor: this.editor,
        view: s,
        state: h,
        oldState: d,
        from: y,
        to: x
      }))) {
        this.hide();
        return;
      }
      (p = this.tippy) === null || p === void 0 || p.setProps({
        getReferenceClientRect: ((f = this.tippyOptions) === null || f === void 0 ? void 0 : f.getReferenceClientRect) || (() => {
          if (U2(h.selection)) {
            let v = s.nodeDOM(y);
            const S = v.dataset.nodeViewWrapper ? v : v.querySelector("[data-node-view-wrapper]");
            if (S && (v = S.firstChild), v)
              return v.getBoundingClientRect();
          }
          return am(s, y, x);
        })
      }), this.show();
    }, this.editor = e, this.element = r, this.view = o, this.updateDelay = a, i && (this.shouldShow = i), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = n, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, r = !!e.parentElement;
    this.tippy || !r || (this.tippy = un(e, {
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
    const { state: o } = e, n = o.selection.from !== o.selection.to;
    if (this.updateDelay > 0 && n) {
      this.handleDebouncedUpdate(e, r);
      return;
    }
    const a = !(r != null && r.selection.eq(e.state.selection)), i = !(r != null && r.doc.eq(e.state.doc));
    this.updateHandler(e, a, i, r);
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
const W3 = (t) => new er({
  key: typeof t.pluginKey == "string" ? new Bt(t.pluginKey) : t.pluginKey,
  view: (e) => new q3({ view: e, ...t })
});
Ft.create({
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
      W3({
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
class U3 {
  constructor({ editor: e, element: r, view: o, tippyOptions: n = {}, shouldShow: a }) {
    this.preventHide = !1, this.shouldShow = ({ view: i, state: s }) => {
      const { selection: l } = s, { $anchor: c, empty: d } = l, u = c.depth === 1, p = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!i.hasFocus() || !d || !u || !p || !this.editor.isEditable);
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
      i != null && i.relatedTarget && !((s = this.element.parentNode) === null || s === void 0) && s.contains(i.relatedTarget) || this.hide();
    }, this.tippyBlurHandler = (i) => {
      this.blurHandler({ event: i });
    }, this.editor = e, this.element = r, this.view = o, a && (this.shouldShow = a), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = n, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, r = !!e.parentElement;
    this.tippy || !r || (this.tippy = un(e, {
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
    var o, n, a;
    const { state: i } = e, { doc: s, selection: l } = i, { from: c, to: d } = l;
    if (!(r && r.doc.eq(s) && r.selection.eq(l))) {
      if (this.createTooltip(), !(!((o = this.shouldShow) === null || o === void 0) && o.call(this, {
        editor: this.editor,
        view: e,
        state: i,
        oldState: r
      }))) {
        this.hide();
        return;
      }
      (n = this.tippy) === null || n === void 0 || n.setProps({
        getReferenceClientRect: ((a = this.tippyOptions) === null || a === void 0 ? void 0 : a.getReferenceClientRect) || (() => am(e, c, d))
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
const K3 = (t) => new er({
  key: typeof t.pluginKey == "string" ? new Bt(t.pluginKey) : t.pluginKey,
  view: (e) => new U3({ view: e, ...t })
});
Ft.create({
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
      K3({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
ko.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
ko.create({
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
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, ga(this.options.HTMLAttributes, e), 0];
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
    return this.options.levels.map((t) => f4({
      find: new RegExp(`^(#{1,${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
ko.create({
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
    return ["p", ga(this.options.HTMLAttributes, t), 0];
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
ko.create({
  name: "text",
  group: "inline"
});
const J3 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Y3 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, X3 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, G3 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
rn.create({
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
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", ga(this.options.HTMLAttributes, t), 0];
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
      Ci({
        find: J3,
        type: this.type
      }),
      Ci({
        find: X3,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Oi({
        find: Y3,
        type: this.type
      }),
      Oi({
        find: G3,
        type: this.type
      })
    ];
  }
});
const Z3 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Q3 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, e$ = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, t$ = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
rn.create({
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
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", ga(this.options.HTMLAttributes, t), 0];
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
      Ci({
        find: Z3,
        type: this.type
      }),
      Ci({
        find: e$,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Oi({
        find: Q3,
        type: this.type
      }),
      Oi({
        find: t$,
        type: this.type
      })
    ];
  }
});
rn.create({
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
    return ["u", ga(this.options.HTMLAttributes, t), 0];
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
var Ti = 200, et = function() {
};
et.prototype.append = function(t) {
  return t.length ? (t = et.from(t), !this.length && t || t.length < Ti && this.leafAppend(t) || this.length < Ti && t.leafPrepend(this) || this.appendInner(t)) : this;
};
et.prototype.prepend = function(t) {
  return t.length ? et.from(t).append(this) : this;
};
et.prototype.appendInner = function(t) {
  return new r$(this, t);
};
et.prototype.slice = function(t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = this.length), t >= e ? et.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e));
};
et.prototype.get = function(t) {
  if (!(t < 0 || t >= this.length))
    return this.getInner(t);
};
et.prototype.forEach = function(t, e, r) {
  e === void 0 && (e = 0), r === void 0 && (r = this.length), e <= r ? this.forEachInner(t, e, r, 0) : this.forEachInvertedInner(t, e, r, 0);
};
et.prototype.map = function(t, e, r) {
  e === void 0 && (e = 0), r === void 0 && (r = this.length);
  var o = [];
  return this.forEach(function(n, a) {
    return o.push(t(n, a));
  }, e, r), o;
};
et.from = function(t) {
  return t instanceof et ? t : t && t.length ? new Sm(t) : et.empty;
};
var Sm = /* @__PURE__ */ function(t) {
  function e(o) {
    t.call(this), this.values = o;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var r = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(o, n) {
    return o == 0 && n == this.length ? this : new e(this.values.slice(o, n));
  }, e.prototype.getInner = function(o) {
    return this.values[o];
  }, e.prototype.forEachInner = function(o, n, a, i) {
    for (var s = n; s < a; s++)
      if (o(this.values[s], i + s) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(o, n, a, i) {
    for (var s = n - 1; s >= a; s--)
      if (o(this.values[s], i + s) === !1)
        return !1;
  }, e.prototype.leafAppend = function(o) {
    if (this.length + o.length <= Ti)
      return new e(this.values.concat(o.flatten()));
  }, e.prototype.leafPrepend = function(o) {
    if (this.length + o.length <= Ti)
      return new e(o.flatten().concat(this.values));
  }, r.length.get = function() {
    return this.values.length;
  }, r.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, r), e;
}(et);
et.empty = new Sm([]);
var r$ = /* @__PURE__ */ function(t) {
  function e(r, o) {
    t.call(this), this.left = r, this.right = o, this.length = r.length + o.length, this.depth = Math.max(r.depth, o.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, o, n, a) {
    var i = this.left.length;
    if (o < i && this.left.forEachInner(r, o, Math.min(n, i), a) === !1 || n > i && this.right.forEachInner(r, Math.max(o - i, 0), Math.min(this.length, n) - i, a + i) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, o, n, a) {
    var i = this.left.length;
    if (o > i && this.right.forEachInvertedInner(r, o - i, Math.max(n, i) - i, a + i) === !1 || n < i && this.left.forEachInvertedInner(r, Math.min(o, i), n, a) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, o) {
    if (r == 0 && o == this.length)
      return this;
    var n = this.left.length;
    return o <= n ? this.left.slice(r, o) : r >= n ? this.right.slice(r - n, o - n) : this.left.slice(r, n).append(this.right.slice(0, o - n));
  }, e.prototype.leafAppend = function(r) {
    var o = this.right.leafAppend(r);
    if (o)
      return new e(this.left, o);
  }, e.prototype.leafPrepend = function(r) {
    var o = this.left.leafPrepend(r);
    if (o)
      return new e(o, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(et);
const o$ = 500;
class Wt {
  constructor(e, r) {
    this.items = e, this.eventCount = r;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, r) {
    if (this.eventCount == 0)
      return null;
    let o = this.items.length;
    for (; ; o--)
      if (this.items.get(o - 1).selection) {
        --o;
        break;
      }
    let n, a;
    r && (n = this.remapping(o, this.items.length), a = n.maps.length);
    let i = e.tr, s, l, c = [], d = [];
    return this.items.forEach((u, p) => {
      if (!u.step) {
        n || (n = this.remapping(o, p + 1), a = n.maps.length), a--, d.push(u);
        return;
      }
      if (n) {
        d.push(new nr(u.map));
        let f = u.step.map(n.slice(a)), h;
        f && i.maybeStep(f).doc && (h = i.mapping.maps[i.mapping.maps.length - 1], c.push(new nr(h, void 0, void 0, c.length + d.length))), a--, h && n.appendMap(h, a);
      } else
        i.maybeStep(u.step);
      if (u.selection)
        return s = n ? u.selection.map(n.slice(a)) : u.selection, l = new Wt(this.items.slice(0, o).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: l, transform: i, selection: s };
  }
  // Create a new branch with the given transform added.
  addTransform(e, r, o, n) {
    let a = [], i = this.eventCount, s = this.items, l = !n && s.length ? s.get(s.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), p = new nr(e.mapping.maps[d], u, r), f;
      (f = l && l.merge(p)) && (p = f, d ? a.pop() : s = s.slice(0, s.length - 1)), a.push(p), r && (i++, r = void 0), n || (l = p);
    }
    let c = i - o.depth;
    return c > a$ && (s = n$(s, c), i -= c), new Wt(s.append(a), i);
  }
  remapping(e, r) {
    let o = new In();
    return this.items.forEach((n, a) => {
      let i = n.mirrorOffset != null && a - n.mirrorOffset >= e ? o.maps.length - n.mirrorOffset : void 0;
      o.appendMap(n.map, i);
    }, e, r), o;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Wt(this.items.append(e.map((r) => new nr(r))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, r) {
    if (!this.eventCount)
      return this;
    let o = [], n = Math.max(0, this.items.length - r), a = e.mapping, i = e.steps.length, s = this.eventCount;
    this.items.forEach((p) => {
      p.selection && s--;
    }, n);
    let l = r;
    this.items.forEach((p) => {
      let f = a.getMirror(--l);
      if (f == null)
        return;
      i = Math.min(i, f);
      let h = a.maps[f];
      if (p.step) {
        let m = e.steps[f].invert(e.docs[f]), g = p.selection && p.selection.map(a.slice(l + 1, f));
        g && s++, o.push(new nr(h, m, g));
      } else
        o.push(new nr(h));
    }, n);
    let c = [];
    for (let p = r; p < i; p++)
      c.push(new nr(a.maps[p]));
    let d = this.items.slice(0, n).append(c).append(o), u = new Wt(d, s);
    return u.emptyItemCount() > o$ && (u = u.compress(this.items.length - o.length)), u;
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
    let r = this.remapping(0, e), o = r.maps.length, n = [], a = 0;
    return this.items.forEach((i, s) => {
      if (s >= e)
        n.push(i), i.selection && a++;
      else if (i.step) {
        let l = i.step.map(r.slice(o)), c = l && l.getMap();
        if (o--, c && r.appendMap(c, o), l) {
          let d = i.selection && i.selection.map(r.slice(o));
          d && a++;
          let u = new nr(c.invert(), l, d), p, f = n.length - 1;
          (p = n.length && n[f].merge(u)) ? n[f] = p : n.push(u);
        }
      } else i.map && o--;
    }, this.items.length, 0), new Wt(et.from(n.reverse()), a);
  }
}
Wt.empty = new Wt(et.empty, 0);
function n$(t, e) {
  let r;
  return t.forEach((o, n) => {
    if (o.selection && e-- == 0)
      return r = n, !1;
  }), t.slice(r);
}
class nr {
  constructor(e, r, o, n) {
    this.map = e, this.step = r, this.selection = o, this.mirrorOffset = n;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let r = e.step.merge(this.step);
      if (r)
        return new nr(r.getMap().invert(), r, this.selection);
    }
  }
}
let jr = class {
  constructor(e, r, o, n, a) {
    this.done = e, this.undone = r, this.prevRanges = o, this.prevTime = n, this.prevComposition = a;
  }
};
const a$ = 20;
function i$(t, e, r, o) {
  let n = r.getMeta(bo), a;
  if (n)
    return n.historyState;
  r.getMeta(c$) && (t = new jr(t.done, t.undone, null, 0, -1));
  let i = r.getMeta("appendedTransaction");
  if (r.steps.length == 0)
    return t;
  if (i && i.getMeta(bo))
    return i.getMeta(bo).redo ? new jr(t.done.addTransform(r, void 0, o, Ja(e)), t.undone, qu(r.mapping.maps), t.prevTime, t.prevComposition) : new jr(t.done, t.undone.addTransform(r, void 0, o, Ja(e)), null, t.prevTime, t.prevComposition);
  if (r.getMeta("addToHistory") !== !1 && !(i && i.getMeta("addToHistory") === !1)) {
    let s = r.getMeta("composition"), l = t.prevTime == 0 || !i && t.prevComposition != s && (t.prevTime < (r.time || 0) - o.newGroupDelay || !s$(r, t.prevRanges)), c = i ? Vs(t.prevRanges, r.mapping) : qu(r.mapping.maps);
    return new jr(t.done.addTransform(r, l ? e.selection.getBookmark() : void 0, o, Ja(e)), Wt.empty, c, r.time, s ?? t.prevComposition);
  } else return (a = r.getMeta("rebased")) ? new jr(t.done.rebased(r, a), t.undone.rebased(r, a), Vs(t.prevRanges, r.mapping), t.prevTime, t.prevComposition) : new jr(t.done.addMaps(r.mapping.maps), t.undone.addMaps(r.mapping.maps), Vs(t.prevRanges, r.mapping), t.prevTime, t.prevComposition);
}
function s$(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let r = !1;
  return t.mapping.maps[0].forEach((o, n) => {
    for (let a = 0; a < e.length; a += 2)
      o <= e[a + 1] && n >= e[a] && (r = !0);
  }), r;
}
function qu(t) {
  let e = [];
  for (let r = t.length - 1; r >= 0 && e.length == 0; r--)
    t[r].forEach((o, n, a, i) => e.push(a, i));
  return e;
}
function Vs(t, e) {
  if (!t)
    return null;
  let r = [];
  for (let o = 0; o < t.length; o += 2) {
    let n = e.map(t[o], 1), a = e.map(t[o + 1], -1);
    n <= a && r.push(n, a);
  }
  return r;
}
function l$(t, e, r) {
  let o = Ja(e), n = bo.get(e).spec.config, a = (r ? t.undone : t.done).popEvent(e, o);
  if (!a)
    return null;
  let i = a.selection.resolve(a.transform.doc), s = (r ? t.done : t.undone).addTransform(a.transform, e.selection.getBookmark(), n, o), l = new jr(r ? s : a.remaining, r ? a.remaining : s, null, 0, -1);
  return a.transform.setSelection(i).setMeta(bo, { redo: r, historyState: l });
}
let Ls = !1, Wu = null;
function Ja(t) {
  let e = t.plugins;
  if (Wu != e) {
    Ls = !1, Wu = e;
    for (let r = 0; r < e.length; r++)
      if (e[r].spec.historyPreserveItems) {
        Ls = !0;
        break;
      }
  }
  return Ls;
}
const bo = new Bt("history"), c$ = new Bt("closeHistory");
function d$(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new er({
    key: bo,
    state: {
      init() {
        return new jr(Wt.empty, Wt.empty, null, 0, -1);
      },
      apply(e, r, o) {
        return i$(r, o, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, r) {
          let o = r.inputType, n = o == "historyUndo" ? Cm : o == "historyRedo" ? Om : null;
          return n ? (r.preventDefault(), n(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function _m(t, e) {
  return (r, o) => {
    let n = bo.getState(r);
    if (!n || (t ? n.undone : n.done).eventCount == 0)
      return !1;
    if (o) {
      let a = l$(n, r, t);
      a && o(a.scrollIntoView());
    }
    return !0;
  };
}
const Cm = _m(!1), Om = _m(!0);
Ft.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => Cm(t, e),
      redo: () => ({ state: t, dispatch: e }) => Om(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      d$(this.options)
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
function u$(t) {
  var e;
  const { char: r, allowSpaces: o, allowedPrefixes: n, startOfLine: a, $position: i } = t, s = h4(r), l = new RegExp(`\\s${s}$`), c = a ? "^" : "", d = o ? new RegExp(`${c}${s}.*?(?=\\s${s}|$)`, "gm") : new RegExp(`${c}(?:^)?${s}[^\\s${s}]*`, "gm"), u = ((e = i.nodeBefore) === null || e === void 0 ? void 0 : e.isText) && i.nodeBefore.text;
  if (!u)
    return null;
  const p = i.pos - u.length, f = Array.from(u.matchAll(d)).pop();
  if (!f || f.input === void 0 || f.index === void 0)
    return null;
  const h = f.input.slice(Math.max(0, f.index - 1), f.index), m = new RegExp(`^[${n == null ? void 0 : n.join("")}\0]?$`).test(h);
  if (n !== null && !m)
    return null;
  const g = p + f.index;
  let b = g + f[0].length;
  return o && l.test(u.slice(b - 1, b + 1)) && (f[0] += " ", b += 1), g < i.pos && b >= i.pos ? {
    range: {
      from: g,
      to: b
    },
    query: f[0].slice(r.length),
    text: f[0]
  } : null;
}
const p$ = new Bt("suggestion");
function f$({ pluginKey: t = p$, editor: e, char: r = "@", allowSpaces: o = !1, allowedPrefixes: n = [" "], startOfLine: a = !1, decorationTag: i = "span", decorationClass: s = "suggestion", command: l = () => null, items: c = () => [], render: d = () => ({}), allow: u = () => !0, findSuggestionMatch: p = u$ }) {
  let f;
  const h = d == null ? void 0 : d(), m = new er({
    key: t,
    view() {
      return {
        update: async (g, b) => {
          var y, x, v, S, M, q, B;
          const _ = (y = this.key) === null || y === void 0 ? void 0 : y.getState(b), E = (x = this.key) === null || x === void 0 ? void 0 : x.getState(g.state), U = _.active && E.active && _.range.from !== E.range.from, z = !_.active && E.active, Z = _.active && !E.active, ge = !z && !Z && _.query !== E.query, _e = z || U && ge, ye = ge || U, C = Z || U && ge;
          if (!_e && !ye && !C)
            return;
          const R = C && !_e ? _ : E, se = g.dom.querySelector(`[data-decoration-id="${R.decorationId}"]`);
          f = {
            editor: e,
            range: R.range,
            query: R.query,
            text: R.text,
            items: [],
            command: (re) => l({
              editor: e,
              range: R.range,
              props: re
            }),
            decorationNode: se,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: se ? () => {
              var re;
              const { decorationId: we } = (re = this.key) === null || re === void 0 ? void 0 : re.getState(e.state), j = g.dom.querySelector(`[data-decoration-id="${we}"]`);
              return (j == null ? void 0 : j.getBoundingClientRect()) || null;
            } : null
          }, _e && ((v = h == null ? void 0 : h.onBeforeStart) === null || v === void 0 || v.call(h, f)), ye && ((S = h == null ? void 0 : h.onBeforeUpdate) === null || S === void 0 || S.call(h, f)), (ye || _e) && (f.items = await c({
            editor: e,
            query: R.query
          })), C && ((M = h == null ? void 0 : h.onExit) === null || M === void 0 || M.call(h, f)), ye && ((q = h == null ? void 0 : h.onUpdate) === null || q === void 0 || q.call(h, f)), _e && ((B = h == null ? void 0 : h.onStart) === null || B === void 0 || B.call(h, f));
        },
        destroy: () => {
          var g;
          f && ((g = h == null ? void 0 : h.onExit) === null || g === void 0 || g.call(h, f));
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
      apply(g, b, y, x) {
        const { isEditable: v } = e, { composing: S } = e.view, { selection: M } = g, { empty: q, from: B } = M, _ = { ...b };
        if (_.composing = S, v && (q || e.view.composing)) {
          (B < b.range.from || B > b.range.to) && !S && !b.composing && (_.active = !1);
          const E = p({
            char: r,
            allowSpaces: o,
            allowedPrefixes: n,
            startOfLine: a,
            $position: M.$from
          }), U = `id_${Math.floor(Math.random() * 4294967295)}`;
          E && u({
            editor: e,
            state: x,
            range: E.range,
            isActive: b.active
          }) ? (_.active = !0, _.decorationId = b.decorationId ? b.decorationId : U, _.range = E.range, _.query = E.query, _.text = E.text) : _.active = !1;
        } else
          _.active = !1;
        return _.active || (_.decorationId = null, _.range = { from: 0, to: 0 }, _.query = null, _.text = null), _;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(g, b) {
        var y;
        const { active: x, range: v } = m.getState(g.state);
        return x && ((y = h == null ? void 0 : h.onKeyDown) === null || y === void 0 ? void 0 : y.call(h, { view: g, event: b, range: v })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(g) {
        const { active: b, range: y, decorationId: x } = m.getState(g);
        return b ? Ze.create(g.doc, [
          dr.inline(y.from, y.to, {
            nodeName: i,
            class: s,
            "data-decoration-id": x
          })
        ]) : null;
      }
    }
  });
  return m;
}
Ft.create({
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
      f$({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
});
function Cr(t) {
  return Array.isArray ? Array.isArray(t) : Tm(t) === "[object Array]";
}
const h$ = 1 / 0;
function m$(t) {
  if (typeof t == "string")
    return t;
  let e = t + "";
  return e == "0" && 1 / t == -h$ ? "-0" : e;
}
function g$(t) {
  return t == null ? "" : m$(t);
}
function ur(t) {
  return typeof t == "string";
}
function Em(t) {
  return typeof t == "number";
}
function v$(t) {
  return t === !0 || t === !1 || b$(t) && Tm(t) == "[object Boolean]";
}
function Mm(t) {
  return typeof t == "object";
}
function b$(t) {
  return Mm(t) && t !== null;
}
function Ot(t) {
  return t != null;
}
function Ds(t) {
  return !t.trim().length;
}
function Tm(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const w$ = "Incorrect 'index' type", y$ = (t) => `Invalid value for key ${t}`, x$ = (t) => `Pattern length exceeds max of ${t}.`, k$ = (t) => `Missing ${t} property in key`, $$ = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Uu = Object.prototype.hasOwnProperty;
class S$ {
  constructor(e) {
    this._keys = [], this._keyMap = {};
    let r = 0;
    e.forEach((o) => {
      let n = Am(o);
      this._keys.push(n), this._keyMap[n.id] = n, r += n.weight;
    }), this._keys.forEach((o) => {
      o.weight /= r;
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
function Am(t) {
  let e = null, r = null, o = null, n = 1, a = null;
  if (ur(t) || Cr(t))
    o = t, e = Ku(t), r = Ml(t);
  else {
    if (!Uu.call(t, "name"))
      throw new Error(k$("name"));
    const i = t.name;
    if (o = i, Uu.call(t, "weight") && (n = t.weight, n <= 0))
      throw new Error($$(i));
    e = Ku(i), r = Ml(i), a = t.getFn;
  }
  return { path: e, id: r, weight: n, src: o, getFn: a };
}
function Ku(t) {
  return Cr(t) ? t : t.split(".");
}
function Ml(t) {
  return Cr(t) ? t.join(".") : t;
}
function _$(t, e) {
  let r = [], o = !1;
  const n = (a, i, s) => {
    if (Ot(a))
      if (!i[s])
        r.push(a);
      else {
        let l = i[s];
        const c = a[l];
        if (!Ot(c))
          return;
        if (s === i.length - 1 && (ur(c) || Em(c) || v$(c)))
          r.push(g$(c));
        else if (Cr(c)) {
          o = !0;
          for (let d = 0, u = c.length; d < u; d += 1)
            n(c[d], i, s + 1);
        } else i.length && n(c, i, s + 1);
      }
  };
  return n(t, ur(e) ? e.split(".") : e, 0), o ? r : r[0];
}
const C$ = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, O$ = {
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
}, E$ = {
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
}, M$ = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: _$,
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
var xe = {
  ...O$,
  ...C$,
  ...E$,
  ...M$
};
const T$ = /[^ ]+/g;
function A$(t = 1, e = 3) {
  const r = /* @__PURE__ */ new Map(), o = Math.pow(10, e);
  return {
    get(n) {
      const a = n.match(T$).length;
      if (r.has(a))
        return r.get(a);
      const i = 1 / Math.pow(a, 0.5 * t), s = parseFloat(Math.round(i * o) / o);
      return r.set(a, s), s;
    },
    clear() {
      r.clear();
    }
  };
}
class Rc {
  constructor({
    getFn: e = xe.getFn,
    fieldNormWeight: r = xe.fieldNormWeight
  } = {}) {
    this.norm = A$(r, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e, this._keysMap = {}, e.forEach((r, o) => {
      this._keysMap[r.id] = o;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, ur(this.docs[0]) ? this.docs.forEach((e, r) => {
      this._addString(e, r);
    }) : this.docs.forEach((e, r) => {
      this._addObject(e, r);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(e) {
    const r = this.size();
    ur(e) ? this._addString(e, r) : this._addObject(e, r);
  }
  // Removes the doc at the specified index of the index
  removeAt(e) {
    this.records.splice(e, 1);
    for (let r = e, o = this.size(); r < o; r += 1)
      this.records[r].i -= 1;
  }
  getValueForItemAtKeyId(e, r) {
    return e[this._keysMap[r]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, r) {
    if (!Ot(e) || Ds(e))
      return;
    let o = {
      v: e,
      i: r,
      n: this.norm.get(e)
    };
    this.records.push(o);
  }
  _addObject(e, r) {
    let o = { i: r, $: {} };
    this.keys.forEach((n, a) => {
      let i = n.getFn ? n.getFn(e) : this.getFn(e, n.path);
      if (Ot(i)) {
        if (Cr(i)) {
          let s = [];
          const l = [{ nestedArrIndex: -1, value: i }];
          for (; l.length; ) {
            const { nestedArrIndex: c, value: d } = l.pop();
            if (Ot(d))
              if (ur(d) && !Ds(d)) {
                let u = {
                  v: d,
                  i: c,
                  n: this.norm.get(d)
                };
                s.push(u);
              } else Cr(d) && d.forEach((u, p) => {
                l.push({
                  nestedArrIndex: p,
                  value: u
                });
              });
          }
          o.$[a] = s;
        } else if (ur(i) && !Ds(i)) {
          let s = {
            v: i,
            n: this.norm.get(i)
          };
          o.$[a] = s;
        }
      }
    }), this.records.push(o);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function Im(t, e, { getFn: r = xe.getFn, fieldNormWeight: o = xe.fieldNormWeight } = {}) {
  const n = new Rc({ getFn: r, fieldNormWeight: o });
  return n.setKeys(t.map(Am)), n.setSources(e), n.create(), n;
}
function I$(t, { getFn: e = xe.getFn, fieldNormWeight: r = xe.fieldNormWeight } = {}) {
  const { keys: o, records: n } = t, a = new Rc({ getFn: e, fieldNormWeight: r });
  return a.setKeys(o), a.setIndexRecords(n), a;
}
function Pa(t, {
  errors: e = 0,
  currentLocation: r = 0,
  expectedLocation: o = 0,
  distance: n = xe.distance,
  ignoreLocation: a = xe.ignoreLocation
} = {}) {
  const i = e / t.length;
  if (a)
    return i;
  const s = Math.abs(o - r);
  return n ? i + s / n : s ? 1 : i;
}
function N$(t = [], e = xe.minMatchCharLength) {
  let r = [], o = -1, n = -1, a = 0;
  for (let i = t.length; a < i; a += 1) {
    let s = t[a];
    s && o === -1 ? o = a : !s && o !== -1 && (n = a - 1, n - o + 1 >= e && r.push([o, n]), o = -1);
  }
  return t[a - 1] && a - o >= e && r.push([o, a - 1]), r;
}
const so = 32;
function z$(t, e, r, {
  location: o = xe.location,
  distance: n = xe.distance,
  threshold: a = xe.threshold,
  findAllMatches: i = xe.findAllMatches,
  minMatchCharLength: s = xe.minMatchCharLength,
  includeMatches: l = xe.includeMatches,
  ignoreLocation: c = xe.ignoreLocation
} = {}) {
  if (e.length > so)
    throw new Error(x$(so));
  const d = e.length, u = t.length, p = Math.max(0, Math.min(o, u));
  let f = a, h = p;
  const m = s > 1 || l, g = m ? Array(u) : [];
  let b;
  for (; (b = t.indexOf(e, h)) > -1; ) {
    let q = Pa(e, {
      currentLocation: b,
      expectedLocation: p,
      distance: n,
      ignoreLocation: c
    });
    if (f = Math.min(q, f), h = b + d, m) {
      let B = 0;
      for (; B < d; )
        g[b + B] = 1, B += 1;
    }
  }
  h = -1;
  let y = [], x = 1, v = d + u;
  const S = 1 << d - 1;
  for (let q = 0; q < d; q += 1) {
    let B = 0, _ = v;
    for (; B < _; )
      Pa(e, {
        errors: q,
        currentLocation: p + _,
        expectedLocation: p,
        distance: n,
        ignoreLocation: c
      }) <= f ? B = _ : v = _, _ = Math.floor((v - B) / 2 + B);
    v = _;
    let E = Math.max(1, p - _ + 1), U = i ? u : Math.min(p + _, u) + d, z = Array(U + 2);
    z[U + 1] = (1 << q) - 1;
    for (let Z = U; Z >= E; Z -= 1) {
      let ge = Z - 1, _e = r[t.charAt(ge)];
      if (m && (g[ge] = +!!_e), z[Z] = (z[Z + 1] << 1 | 1) & _e, q && (z[Z] |= (y[Z + 1] | y[Z]) << 1 | 1 | y[Z + 1]), z[Z] & S && (x = Pa(e, {
        errors: q,
        currentLocation: ge,
        expectedLocation: p,
        distance: n,
        ignoreLocation: c
      }), x <= f)) {
        if (f = x, h = ge, h <= p)
          break;
        E = Math.max(1, 2 * p - h);
      }
    }
    if (Pa(e, {
      errors: q + 1,
      currentLocation: p,
      expectedLocation: p,
      distance: n,
      ignoreLocation: c
    }) > f)
      break;
    y = z;
  }
  const M = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, x)
  };
  if (m) {
    const q = N$(g, s);
    q.length ? l && (M.indices = q) : M.isMatch = !1;
  }
  return M;
}
function j$(t) {
  let e = {};
  for (let r = 0, o = t.length; r < o; r += 1) {
    const n = t.charAt(r);
    e[n] = (e[n] || 0) | 1 << o - r - 1;
  }
  return e;
}
class Nm {
  constructor(e, {
    location: r = xe.location,
    threshold: o = xe.threshold,
    distance: n = xe.distance,
    includeMatches: a = xe.includeMatches,
    findAllMatches: i = xe.findAllMatches,
    minMatchCharLength: s = xe.minMatchCharLength,
    isCaseSensitive: l = xe.isCaseSensitive,
    ignoreLocation: c = xe.ignoreLocation
  } = {}) {
    if (this.options = {
      location: r,
      threshold: o,
      distance: n,
      includeMatches: a,
      findAllMatches: i,
      minMatchCharLength: s,
      isCaseSensitive: l,
      ignoreLocation: c
    }, this.pattern = l ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const d = (p, f) => {
      this.chunks.push({
        pattern: p,
        alphabet: j$(p),
        startIndex: f
      });
    }, u = this.pattern.length;
    if (u > so) {
      let p = 0;
      const f = u % so, h = u - f;
      for (; p < h; )
        d(this.pattern.substr(p, so), p), p += so;
      if (f) {
        const m = u - so;
        d(this.pattern.substr(m), m);
      }
    } else
      d(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: r, includeMatches: o } = this.options;
    if (r || (e = e.toLowerCase()), this.pattern === e) {
      let h = {
        isMatch: !0,
        score: 0
      };
      return o && (h.indices = [[0, e.length - 1]]), h;
    }
    const {
      location: n,
      distance: a,
      threshold: i,
      findAllMatches: s,
      minMatchCharLength: l,
      ignoreLocation: c
    } = this.options;
    let d = [], u = 0, p = !1;
    this.chunks.forEach(({ pattern: h, alphabet: m, startIndex: g }) => {
      const { isMatch: b, score: y, indices: x } = z$(e, h, m, {
        location: n + g,
        distance: a,
        threshold: i,
        findAllMatches: s,
        minMatchCharLength: l,
        includeMatches: o,
        ignoreLocation: c
      });
      b && (p = !0), u += y, b && x && (d = [...d, ...x]);
    });
    let f = {
      isMatch: p,
      score: p ? u / this.chunks.length : 1
    };
    return p && o && (f.indices = d), f;
  }
}
class Gr {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return Ju(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return Ju(e, this.singleRegex);
  }
  search() {
  }
}
function Ju(t, e) {
  const r = t.match(e);
  return r ? r[1] : null;
}
class P$ extends Gr {
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
class R$ extends Gr {
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
class V$ extends Gr {
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
class L$ extends Gr {
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
class D$ extends Gr {
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
class B$ extends Gr {
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
class zm extends Gr {
  constructor(e, {
    location: r = xe.location,
    threshold: o = xe.threshold,
    distance: n = xe.distance,
    includeMatches: a = xe.includeMatches,
    findAllMatches: i = xe.findAllMatches,
    minMatchCharLength: s = xe.minMatchCharLength,
    isCaseSensitive: l = xe.isCaseSensitive,
    ignoreLocation: c = xe.ignoreLocation
  } = {}) {
    super(e), this._bitapSearch = new Nm(e, {
      location: r,
      threshold: o,
      distance: n,
      includeMatches: a,
      findAllMatches: i,
      minMatchCharLength: s,
      isCaseSensitive: l,
      ignoreLocation: c
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
class jm extends Gr {
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
    let r = 0, o;
    const n = [], a = this.pattern.length;
    for (; (o = e.indexOf(this.pattern, r)) > -1; )
      r = o + a, n.push([o, r - 1]);
    const i = !!n.length;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: n
    };
  }
}
const Tl = [
  P$,
  jm,
  V$,
  L$,
  B$,
  D$,
  R$,
  zm
], Yu = Tl.length, F$ = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, H$ = "|";
function q$(t, e = {}) {
  return t.split(H$).map((r) => {
    let o = r.trim().split(F$).filter((a) => a && !!a.trim()), n = [];
    for (let a = 0, i = o.length; a < i; a += 1) {
      const s = o[a];
      let l = !1, c = -1;
      for (; !l && ++c < Yu; ) {
        const d = Tl[c];
        let u = d.isMultiMatch(s);
        u && (n.push(new d(u, e)), l = !0);
      }
      if (!l)
        for (c = -1; ++c < Yu; ) {
          const d = Tl[c];
          let u = d.isSingleMatch(s);
          if (u) {
            n.push(new d(u, e));
            break;
          }
        }
    }
    return n;
  });
}
const W$ = /* @__PURE__ */ new Set([zm.type, jm.type]);
class U$ {
  constructor(e, {
    isCaseSensitive: r = xe.isCaseSensitive,
    includeMatches: o = xe.includeMatches,
    minMatchCharLength: n = xe.minMatchCharLength,
    ignoreLocation: a = xe.ignoreLocation,
    findAllMatches: i = xe.findAllMatches,
    location: s = xe.location,
    threshold: l = xe.threshold,
    distance: c = xe.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: r,
      includeMatches: o,
      minMatchCharLength: n,
      findAllMatches: i,
      ignoreLocation: a,
      location: s,
      threshold: l,
      distance: c
    }, this.pattern = r ? e : e.toLowerCase(), this.query = q$(this.pattern, this.options);
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
    const { includeMatches: o, isCaseSensitive: n } = this.options;
    e = n ? e : e.toLowerCase();
    let a = 0, i = [], s = 0;
    for (let l = 0, c = r.length; l < c; l += 1) {
      const d = r[l];
      i.length = 0, a = 0;
      for (let u = 0, p = d.length; u < p; u += 1) {
        const f = d[u], { isMatch: h, indices: m, score: g } = f.search(e);
        if (h) {
          if (a += 1, s += g, o) {
            const b = f.constructor.type;
            W$.has(b) ? i = [...i, ...m] : i.push(m);
          }
        } else {
          s = 0, a = 0, i.length = 0;
          break;
        }
      }
      if (a) {
        let u = {
          isMatch: !0,
          score: s / a
        };
        return o && (u.indices = i), u;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Al = [];
function K$(...t) {
  Al.push(...t);
}
function Il(t, e) {
  for (let r = 0, o = Al.length; r < o; r += 1) {
    let n = Al[r];
    if (n.condition(t, e))
      return new n(t, e);
  }
  return new Nm(t, e);
}
const Ai = {
  AND: "$and",
  OR: "$or"
}, Nl = {
  PATH: "$path",
  PATTERN: "$val"
}, zl = (t) => !!(t[Ai.AND] || t[Ai.OR]), J$ = (t) => !!t[Nl.PATH], Y$ = (t) => !Cr(t) && Mm(t) && !zl(t), Xu = (t) => ({
  [Ai.AND]: Object.keys(t).map((e) => ({
    [e]: t[e]
  }))
});
function Pm(t, e, { auto: r = !0 } = {}) {
  const o = (n) => {
    let a = Object.keys(n);
    const i = J$(n);
    if (!i && a.length > 1 && !zl(n))
      return o(Xu(n));
    if (Y$(n)) {
      const l = i ? n[Nl.PATH] : a[0], c = i ? n[Nl.PATTERN] : n[l];
      if (!ur(c))
        throw new Error(y$(l));
      const d = {
        keyId: Ml(l),
        pattern: c
      };
      return r && (d.searcher = Il(c, e)), d;
    }
    let s = {
      children: [],
      operator: a[0]
    };
    return a.forEach((l) => {
      const c = n[l];
      Cr(c) && c.forEach((d) => {
        s.children.push(o(d));
      });
    }), s;
  };
  return zl(t) || (t = Xu(t)), o(t);
}
function X$(t, { ignoreFieldNorm: e = xe.ignoreFieldNorm }) {
  t.forEach((r) => {
    let o = 1;
    r.matches.forEach(({ key: n, norm: a, score: i }) => {
      const s = n ? n.weight : null;
      o *= Math.pow(
        i === 0 && s ? Number.EPSILON : i,
        (s || 1) * (e ? 1 : a)
      );
    }), r.score = o;
  });
}
function G$(t, e) {
  const r = t.matches;
  e.matches = [], Ot(r) && r.forEach((o) => {
    if (!Ot(o.indices) || !o.indices.length)
      return;
    const { indices: n, value: a } = o;
    let i = {
      indices: n,
      value: a
    };
    o.key && (i.key = o.key.src), o.idx > -1 && (i.refIndex = o.idx), e.matches.push(i);
  });
}
function Z$(t, e) {
  e.score = t.score;
}
function Q$(t, e, {
  includeMatches: r = xe.includeMatches,
  includeScore: o = xe.includeScore
} = {}) {
  const n = [];
  return r && n.push(G$), o && n.push(Z$), t.map((a) => {
    const { idx: i } = a, s = {
      item: e[i],
      refIndex: i
    };
    return n.length && n.forEach((l) => {
      l(a, s);
    }), s;
  });
}
class So {
  constructor(e, r = {}, o) {
    this.options = { ...xe, ...r }, this.options.useExtendedSearch, this._keyStore = new S$(this.options.keys), this.setCollection(e, o);
  }
  setCollection(e, r) {
    if (this._docs = e, r && !(r instanceof Rc))
      throw new Error(w$);
    this._myIndex = r || Im(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(e) {
    Ot(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const r = [];
    for (let o = 0, n = this._docs.length; o < n; o += 1) {
      const a = this._docs[o];
      e(a, o) && (this.removeAt(o), o -= 1, n -= 1, r.push(a));
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
      includeMatches: o,
      includeScore: n,
      shouldSort: a,
      sortFn: i,
      ignoreFieldNorm: s
    } = this.options;
    let l = ur(e) ? ur(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    return X$(l, { ignoreFieldNorm: s }), a && l.sort(i), Em(r) && r > -1 && (l = l.slice(0, r)), Q$(l, this._docs, {
      includeMatches: o,
      includeScore: n
    });
  }
  _searchStringList(e) {
    const r = Il(e, this.options), { records: o } = this._myIndex, n = [];
    return o.forEach(({ v: a, i, n: s }) => {
      if (!Ot(a))
        return;
      const { isMatch: l, score: c, indices: d } = r.searchIn(a);
      l && n.push({
        item: a,
        idx: i,
        matches: [{ score: c, value: a, norm: s, indices: d }]
      });
    }), n;
  }
  _searchLogical(e) {
    const r = Pm(e, this.options), o = (s, l, c) => {
      if (!s.children) {
        const { keyId: u, searcher: p } = s, f = this._findMatches({
          key: this._keyStore.get(u),
          value: this._myIndex.getValueForItemAtKeyId(l, u),
          searcher: p
        });
        return f && f.length ? [
          {
            idx: c,
            item: l,
            matches: f
          }
        ] : [];
      }
      const d = [];
      for (let u = 0, p = s.children.length; u < p; u += 1) {
        const f = s.children[u], h = o(f, l, c);
        if (h.length)
          d.push(...h);
        else if (s.operator === Ai.AND)
          return [];
      }
      return d;
    }, n = this._myIndex.records, a = {}, i = [];
    return n.forEach(({ $: s, i: l }) => {
      if (Ot(s)) {
        let c = o(r, s, l);
        c.length && (a[l] || (a[l] = { idx: l, item: s, matches: [] }, i.push(a[l])), c.forEach(({ matches: d }) => {
          a[l].matches.push(...d);
        }));
      }
    }), i;
  }
  _searchObjectList(e) {
    const r = Il(e, this.options), { keys: o, records: n } = this._myIndex, a = [];
    return n.forEach(({ $: i, i: s }) => {
      if (!Ot(i))
        return;
      let l = [];
      o.forEach((c, d) => {
        l.push(
          ...this._findMatches({
            key: c,
            value: i[d],
            searcher: r
          })
        );
      }), l.length && a.push({
        idx: s,
        item: i,
        matches: l
      });
    }), a;
  }
  _findMatches({ key: e, value: r, searcher: o }) {
    if (!Ot(r))
      return [];
    let n = [];
    if (Cr(r))
      r.forEach(({ v: a, i, n: s }) => {
        if (!Ot(a))
          return;
        const { isMatch: l, score: c, indices: d } = o.searchIn(a);
        l && n.push({
          score: c,
          key: e,
          value: a,
          idx: i,
          norm: s,
          indices: d
        });
      });
    else {
      const { v: a, n: i } = r, { isMatch: s, score: l, indices: c } = o.searchIn(a);
      s && n.push({ score: l, key: e, value: a, norm: i, indices: c });
    }
    return n;
  }
}
So.version = "7.0.0";
So.createIndex = Im;
So.parseIndex = I$;
So.config = xe;
So.parseQuery = Pm;
K$(U$);
const eS = {
  class: "search-container",
  "data-testid": "search-input"
}, tS = {
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
    const o = t, n = r, a = tc()[o.hotkey.key], i = X(null), { id: s, items: l, searchKeys: c, searchOptions: d, itemText: u, itemValue: p } = Tg(o), f = lt({
      ...d.value,
      keys: [...c.value]
    });
    let h = lt(new So(l.value, f));
    function m(_) {
      return _ != null && _.item ? u.value.includes(".") ? vn(_.item, u.value) : u.value ? _.item[u.value] : _.item : _ ? u.value.includes(".") ? vn(_, u.value) : u.value ? _[u.value] : _ : null;
    }
    function g(_) {
      return _ != null && _.item ? p.value.includes(".") ? vn(_.item, p.value) : p.value ? _.item[p.value] : _.item : _ ? p.value.includes(".") ? vn(_, p.value) : p.value ? _[p.value] : _ : null;
    }
    const b = W({
      get() {
        return o.modelValue;
      },
      set(_) {
        n("update:modelValue", g(_));
      }
    }), y = X(null), x = X(null);
    function v() {
      x.value.showModal();
    }
    function S() {
      x.value.close();
    }
    const M = W(() => y.value ? h.search(y.value) : o.items), q = lt({
      id: s.value,
      serverside: !0,
      clearable: !0,
      itemValue: p.value,
      itemText: m,
      prependIcon: Tx,
      placeholder: o.placeholder
    }), B = W({
      get() {
        return o.show;
      },
      set(_) {
        n("update:show", _), _ || n("close");
      }
    });
    return Le(a, (_) => {
      _ && o.hotkey && setTimeout(() => {
        i.value.select.input.focus();
      }, 100);
    }), Xp(() => {
      h = lt(new So(l.value, f));
    }), e({
      showModal: v,
      close: S
    }), (_, E) => ($(), I("div", eS, [
      t.elevated ? ($(), de(Mf, {
        key: 0,
        ref_key: "modal",
        ref: x,
        modelValue: B.value,
        "onUpdate:modelValue": E[3] || (E[3] = (U) => B.value = U),
        blur: "",
        "hide-header": "",
        "hide-footer": "",
        class: Ne({ "loader-modal": t.loading })
      }, {
        default: ve(() => [
          t.loading ? ($(), de(ic, { key: 0 })) : ($(), de(qd, Je({
            key: 1,
            modelValue: b.value,
            "onUpdate:modelValue": E[1] || (E[1] = (U) => b.value = U),
            class: "search elevated"
          }, q, {
            items: M.value,
            large: "",
            clearable: "",
            "show-divider": "",
            offset: 0,
            onSearch: E[2] || (E[2] = (U) => y.value = U)
          }), {
            inline: ve(() => [
              fe(Ct, {
                variant: "text",
                class: "cancel",
                onClick: E[0] || (E[0] = (U) => {
                  B.value = !1, b.value = null, y.value = null;
                })
              }, {
                default: ve(() => [
                  Xe(te(t.buttonText || H(Oe)("input.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            option: ve(({ option: U, selected: z }) => [
              Ee(_.$slots, "option", {
                option: U.item || U,
                selected: z
              }, void 0, !0)
            ]),
            _: 3
          }, 16, ["modelValue", "items"]))
        ]),
        _: 3
      }, 8, ["modelValue", "class"])) : ($(), de(qd, Je({
        key: 1,
        ref_key: "search",
        ref: i,
        modelValue: b.value,
        "onUpdate:modelValue": E[4] || (E[4] = (U) => b.value = U),
        class: "search",
        "hide-chevron": ""
      }, q, {
        items: M.value,
        large: t.large,
        onSearch: E[5] || (E[5] = (U) => y.value = U)
      }), {
        inline: ve(() => [
          !t.elevated && t.hotkey.label ? ($(), de(rc, {
            key: 0,
            hotkey: t.hotkey.label
          }, null, 8, ["hotkey"])) : Q("", !0)
        ]),
        _: 1
      }, 16, ["modelValue", "items", "large"]))
    ]));
  }
}, rS = /* @__PURE__ */ Te(tS, [["__scopeId", "data-v-16585402"]]);
X([]);
class oS {
  /**
   * Fetches data from the specified URL using the provided options.
   * @param {object} options - The options to be passed to the fetch function.
   * @param {string} proxy - The URL of the proxy.
   * @throws {Error} If there is an error while fetching the data.
   * @return {Promise} A promise that resolves to the fetched data in JSON format.
   */
  // eslint-disable-next-line class-methods-use-this
  async fetchData(e, r) {
    let o = null, n;
    if (!r)
      throw new Error("Proxy URL not set, add it in the init method");
    e.method === "GET" && (n = JSON.parse(e.body).url, delete e.body);
    const a = {
      method: e.method,
      ...e,
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      e.method === "GET" ? o = await fetch(`${r}?url=${n}`, a) : o = await fetch(r, a);
    } catch (i) {
      throw new Error(`Failed to fetch data from ${e.body ? JSON.parse(e.body).url : n}, ${i}`);
    }
    if (!o.ok)
      throw new Error(`Failed to fetch data from ${e.body ? JSON.parse(e.body).url : n}`);
    return await o.json();
  }
}
class Rm extends oS {
  constructor({ proxy: e, apiVersion: r }) {
    super(), this.proxy = e, this.apiVersion = r;
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
    let o = {};
    try {
      o = await this.fetchData(r, this.proxy);
    } catch (n) {
      throw new Error(n);
    }
    return o;
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
    return (await this.fetchData(r, this.proxy)).prices;
  }
  /**
   * Retrieve all products to be configured in the configurator.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getProducts() {
    const e = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products?per_page=1000`
      })
    };
    return (await this.fetchData(e, this.proxy)).data;
  }
  async getProduct(e) {
    const r = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/product/${e}`
      })
    };
    return await this.fetchData(r, this.proxy);
  }
}
class Gu {
  constructor({ code: e, options: r }) {
    this.code = e, this.options = r || [];
  }
}
class Zu {
  constructor({ products: e, language: r }) {
    this.products = e, this.language = r;
  }
}
class Bs {
  constructor({
    companyName: e,
    firstName: r,
    lastName: o,
    street: n,
    houseNumber: a,
    addition: i,
    postalCode: s,
    city: l,
    country: c,
    phone: d,
    email: u
  }) {
    this.companyName = e, this.firstName = r, this.lastName = o, this.street = n, this.houseNumber = a, this.addition = i, this.postalCode = s, this.city = l, this.country = c, this.phone = d, this.email = u;
  }
}
class nS {
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
const aS = {
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
}, Vm = lt({
  language: "nl"
});
function iS(t) {
  const [e] = t.split("."), r = t.substring(t.indexOf(".") + 1);
  return aS[Vm.language][e !== r ? `${e}.${r}` : e] || t;
}
function sS(t, e = {}) {
  return t.replace(/{(\w+)}/g, (r, o) => e[o] || `{${o}}`);
}
function lS(t, e) {
  return t.replace(/{(\d+)}/g, (r, o) => e[o] || `{${o}}`);
}
function Ut(t, e = null) {
  const r = iS(t);
  return Array.isArray(e) ? lS(r) : sS(r, e);
}
function cS(t) {
  Vm.language = t;
}
function Lm(t, e) {
  return e !== -1 ? t.slice(0, e + 1) : t.filter((r) => r.code !== void 0);
}
function dS(t, e) {
  const r = new Date(t), o = /* @__PURE__ */ new Date(), n = new Date(o);
  return n.setDate(o.getDate() + 1), r.toDateString() === n.toDateString() ? Ut("tomorrow") : r.toLocaleDateString(`${e}-${e.toUpperCase()}`, {
    weekday: "long"
  });
}
function uS(t, e) {
  return new Date(t).toLocaleDateString(`${e}-${e.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function pS(t, e) {
  return t.length === 0 ? !0 : e.some((o) => o.code === "no-option") || e.some((o) => o.code === "amount" && (o.value === 0 || o.value === "")) ? !1 : !(e != null && e.includes(void 0));
}
function fS(t, e, r, o) {
  let n = "";
  r === "accessories-cross-sell" ? n = "unit" : (r === "material" || r === "materialType") && (n = "meter");
  const a = t.map((i) => {
    const s = o.find((c) => c.code === i.code);
    let l;
    return (i.type_code === "number" || i.type_code === "decimal") && (l = {
      value: i.default_value || parseFloat(i.min_value),
      unit: i.unit_code,
      min: i.min_value,
      max: i.max_value,
      buttonText: Ut("global.labels.continue")
    }), {
      code: i.code,
      title: (s == null ? void 0 : s.overwrites.title) || (i == null ? void 0 : i.name),
      description: (s == null ? void 0 : s.overwrites.description) || (i == null ? void 0 : i.description),
      image: s != null && s.overwrites.image || i.images.length ? i.images[0].url : void 0,
      price: i.price ? i.price[e] : void 0,
      pricePer: n,
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
    const s = o.find((l) => l.code === i.code);
    return !(s != null && s.overwrites.hide);
  });
  return r === "accessories-cross-sell" && !a.some((i) => i.noOption) && a.unshift({
    code: "no-option",
    noOption: !0,
    noOptionText: Ut("no_accessoires")
  }), a;
}
function hS(t, e, r, o, n) {
  const a = e.map((c) => {
    var m, g;
    const d = ["width", "height", "amount"];
    let u = (m = c.children) != null && m.find((b) => d.includes(b.type_code)) ? "simple" : "options";
    const p = (g = c.children) != null && g.find((b) => ["width", "height"].includes(b.code)) ? "measurement" : "amount", f = fS(c.children, o, c.code, n);
    let { code: h } = c;
    return h === "accessories-cross-sell" && (h = "accessories", u = "options-multiple"), {
      code: h,
      title: c.name,
      type: u,
      control: p,
      options: f
    };
  }), i = t.find((c) => c.code === "size"), s = r !== -1 && i && i.type === "simple" ? r - 1 : r;
  return [...Lm(t, s), ...a];
}
function Dm(t) {
  let e = 1 / 0, r;
  return t.forEach((o) => {
    const n = o.prices.purchase_rush_surcharge;
    n < e && (e = n, r = o);
  }), r;
}
function Bm(t) {
  let e = null, r = 1 / 0;
  return t.forEach((o) => {
    const n = Dm(o.deliveries), a = n.prices.purchase_rush_surcharge;
    a < r && (r = a, e = n);
  }), e;
}
function mS(t, e) {
  const r = Bm(t);
  let o = 0;
  return t.map((n, a) => {
    let i;
    const s = Dm(n.deliveries);
    return a === 0 && (i = { text: Ut("fastest"), color: "red" }), r && s.shipping_method_api_code === r.shipping_method_api_code && o === 0 && (i || (i = { text: Ut("cheapest"), color: "green" }), o += 1), {
      date: uS(n.delivery_date, e),
      day: dS(n.delivery_date, e),
      cost: s.prices.purchase_rush_surcharge,
      label: i
    };
  });
}
function gS(t, e) {
  const o = t[0][`products_${e}`].toString(), n = Bm(t), a = n.prices.purchase_shipping_price, i = n.prices.purchase_packaging_price;
  return {
    price: o,
    shipping: a,
    packaging: i,
    fullPrice: {
      price: t[0],
      shipping: n
    }
  };
}
function Fm(t) {
  return t.includes("Can not find unique id for option") ? Ut("errors.invalid_or_duplicate") : t.includes("Restrictions are not met") ? Ut("errors.restrictions_not_met") : t === "Validation Failed" ? Ut("errors.invalid") : t.includes("Can not build valid path for tree") ? Ut("errors.invalidConfig") : Ut("errors.general");
}
class vS {
  constructor({ proxy: e, version: r }) {
    this.initialized = !1, this.proxy = e, this.version = r || "", this.repository = new Rm({ proxy: e }), this.product = new Gu({}), this.productInfo = {}, this.productConfig = new Zu({}), this.address = new Bs({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [];
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
    this.lastChangedIndex = -1, e.options.forEach((n, a) => {
      Array.isArray(n) && n.length === 0 && (this.lastChangedIndex = a, r = !0);
    });
    const o = e.options.flat().map((n) => ({
      ...n,
      value: typeof n.value == "number" && !Number.isInteger(n.value) ? n.value.toFixed(1) : n.value
    }));
    if (o.length > 0 && !r) {
      for (let n = this.product.options.length - 1; n >= 0; n -= 1)
        if (this.product.options[n] && o[n] && (this.product.options[n].value && this.product.options[n].value !== o[n].value || this.product.options[n].code && this.product.options[n].code !== o[n].code)) {
          this.lastChangedIndex = this.product.options[n].code === "width" ? n + 1 : n;
          break;
        }
    }
    return this.product.options = Lm(o, this.lastChangedIndex), this.product.options.some((n) => n.code === "no-option") && (this.setStatuses(!0), this.setOpenState(!0)), this;
  }
  /**
   * Asynchronously retrieves the next option.
   * @async
   * @return {Promise<void>} - Resolves when the next option has been retrieved.
   */
  async getNextOption() {
    var e, r;
    if (pS(this.options, this.product.options)) {
      this.loading = !0, this.productConfig.language || (this.productConfig.language = this.language);
      let o = {};
      try {
        this.payload = await this.repository.configureProduct(this.productConfig);
      } catch (n) {
        this.payload = n;
      }
      if (this.payload.status !== "ok" || typeof this.payload == "string")
        throw this.options[this.options.length - 1].status = "attention", this.options[this.options.length - 1].alert = {
          type: "error",
          title: Fm(this.payload.message ? this.payload.message : this.payload)
        }, this.loading = !1, new Error(this.payload.message || this.payload);
      if ([o] = this.payload.products, typeof o == "object" && o) {
        this.alert = {}, (e = this.options[this.options.length - 1]) != null && e.alert && delete this.options[this.options.length - 1].alert;
        let n = o.available_options;
        if (((r = n[0]) == null ? void 0 : r.code) === "size" && n.length === 2 && (n = n.slice(0, 1)), this.options = hS(this.options, n, this.lastChangedIndex, this.priceType, this.overwrites), this.setOpenState(), this.setStatuses(), o.can_order) {
          this.canOrder = !0, o.upload === !0 && (this.upload = !0, this.uploaders = o.uploaders);
          const a = new Event("proboConfigurator:finished");
          window.dispatchEvent(a);
        } else o.can_order === !1 && this.canOrder && (this.canOrder = !1);
        if (o.can_order && this.product.options.length >= this.options.length && Object.keys(this.address).length && this.address.city) {
          const a = await this.getProductPrice();
          this.prices = gS(a, this.priceType), this.deliveryOptions = mS(a, this.language), this.setOpenState();
        } else o.can_order && !this.address.city && this.setOpenState(!0);
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
    const e = new nS({
      address: this.address,
      products: this.productConfig.products
    });
    this.loading = !0;
    const r = await this.repository.getPrice(e.getPayload());
    return this.loading = !1, r;
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
    return this.address = new Bs(e), this;
  }
  /**
   * Set the language for the client.
   *
   * @param {string} language - the language to be set
   */
  setLanguage(e) {
    return this.language = e, cS(e), nl(e), this;
  }
  /**
   * Set the statuses of the options.
   *
   * @param {type} option - the option to set the status for
   * @param {type} index - the index of the option in the options array
   */
  setStatuses(e) {
    const r = this.options.find((n) => n.code === "size"), o = r && r.options && r.options.some((n) => n.code === "height" || n.code === "width") ? 1 : 0;
    e ? this.options.forEach((n) => {
      n.status = "done";
    }) : this.options.forEach((n, a) => {
      this.product.options.length - o > a && (n.status = "done");
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
      const r = e.options.find((i) => i.code === "height"), o = e.options.find((i) => i.code === "width"), n = [...e.options];
      r && o && n.splice(0, 2, [o, r]);
      const a = this.options.find((i) => i.code === "accessories");
      if (a) {
        const i = a.options;
        if (i) {
          const s = [];
          let l = null;
          n.forEach((c, d) => {
            c.code && i.some((u) => u.code === c.code) && (l || (l = d), s.push(c));
          }), s.length > 1 && n.splice(l, s.length, s);
        }
      }
      e.options = n;
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
    return this.product = new Gu({}), this.productConfig = new Zu({}), this.address = new Bs({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this;
  }
  /** Set overwrites for certain products, can only be called on init. */
  setOverwrites(e) {
    return this.options.length === 0 ? this.overwrites = e : console.error("Overwrites can only be set on init"), this;
  }
}
class bS extends vS {
  constructor({ proxy: e }) {
    super({ proxy: e }), this.products = [], this.searchBar = null, this.configuratorModal = null, this.selectedProduct = {}, this.updateExternal = !0;
  }
  /**
   * Initializes the Probo client with the provided proxy, language, address, and price type.
   *
   * @param {string} proxy - the proxy to be initialized
   * @param {string} language - the language to be set
   * @param {object} address - the address to be set
   * @param {string} priceType - the price type to be set
   * @param {boolean} includeVat - whether to include vat in the price
   * @param {array} overwrites - the overwrites to be set
   *
   * @example
   * window.proboConfigurator.init({ proxy: '/api', language: 'nl', address: {}, priceType: 'purchase_price' })
   */
  init({ proxy: e = "/api", language: r = "nl", address: o, priceType: n, includeVat: a = !1, overwrites: i = [] }) {
    this.initialized = !0, this.proxy = e, this.repository = new Rm({ proxy: e }), this.setLanguage(r), o && this.setAddress(o), n && this.setPriceType(n, a), i.length && this.setOverwrites(i);
    const s = new CustomEvent("proboConfigurator:ready", {
      detail: this
    });
    return window.dispatchEvent(s), this;
  }
  /** Get all products from endpoint */
  async getProducts() {
    if (this.overwrites.length) {
      const e = await this.repository.getProducts();
      this.products = e.filter((r) => {
        const o = this.overwrites.find((n) => n.code === r.code);
        return !(o != null && o.overwrites.hide);
      });
    } else
      this.products = await this.repository.getProducts();
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
   * A function to generate a product excerpt based on selected options.
   *
   * @return {Object} The product excerpt including description and options.
   */
  getProductExcerpt() {
    var a, i, s, l, c, d, u;
    (a = this.prices.fullPrice) != null && a.deliveries && delete this.prices.fullPrice.deliveries, (i = this.prices.fullPrice) != null && i.products && delete this.prices.fullPrice.products;
    const e = this.product.options.find((p) => p.code === "amount").value, r = this.selectedProduct && this.selectedProduct.translations && this.selectedProduct.translations[this.language] ? (s = this.selectedProduct.translations[this.language]) == null ? void 0 : s.title : ((l = this.selectedProduct.translations) == null ? void 0 : l.nl.title) || this.product.code, o = (c = this.product.options.find((p) => p.code === "width")) == null ? void 0 : c.value, n = (d = this.product.options.find((p) => p.code === "height")) == null ? void 0 : d.value;
    return {
      product: {
        description: `${e}x ${r} ${o}x${n}`,
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
    const r = e.products[0], { options: o, code: n } = r, a = this;
    await this.setProduct(n), e.deliveries && Object.keys((s = e.deliveries[0]) == null ? void 0 : s.address).length && this.setAddress((l = e.deliveries[0]) == null ? void 0 : l.address), this.openConfigurator();
    async function i(c) {
      if (!(c >= o.length + 1)) {
        try {
          await a.setOption(a.product).getNextOption();
        } catch (d) {
          a.options[a.options.length - 1].alert || (a.alert = {
            type: "error",
            title: Fm(d.message ? d.message : d)
          }), a.loading = !1, a.updateExternal = !0;
          return;
        }
        if (o[c]) {
          let d = c + 1;
          o[c].code === "width" ? (a.product.options.push(o[c], o[c + 1]), d = c + 2) : ["width", "height"].includes(o[c].code) || a.product.options.push(o[c]), await i(d);
        } else
          a.updateExternal = !0;
      }
    }
    o ? await i(0) : console.error("No options found in payload");
  }
}
const wS = { class: "relative h-full" }, yS = { key: 0 }, xS = { class: "font-medium text-[1.125rem] block" }, kS = {
  key: 0,
  class: "text-gray-500 text-sm mt-1 block"
}, $S = { key: 1 }, SS = { class: "font-medium text-[1.125rem] block" }, _S = {
  key: 0,
  class: "text-gray-500 text-sm mt-1 block"
}, CS = {
  __name: "PProductModal",
  setup(t) {
    const e = X(null), r = X(null), o = X(!1), n = X(!1), a = X({}), i = X(""), s = W(() => {
      var l, c, d, u, p, f;
      return {
        name: a.value.productInfo && Object.keys(a.value.productInfo).length && ((l = a.value.productInfo.translations[a.value.language]) != null && l.title) ? a.value.productInfo.translations[a.value.language].title : ((d = (c = a.value.productInfo) == null ? void 0 : c.translations) == null ? void 0 : d.nl.title) || ((u = a.value.productInfo) == null ? void 0 : u.code),
        image: (f = (p = a.value.productInfo) == null ? void 0 : p.images) == null ? void 0 : f[0].url,
        ...a.value.prices
      };
    });
    return Le(i, async () => {
      i.value ? (a.value.selectedProduct = i.value, a.value.closeSearch(), a.value.openConfigurator(), await (await a.value.setProduct(i.value.code, !0)).getNextOption()) : i.value === "" && a.value.clear();
    }), Qt(() => {
      window.addEventListener("proboConfigurator:ready", (l) => {
        const c = l.detail;
        c.searchBar = e.value, c.configuratorModal = r.value, a.value = c;
      });
    }), (l, c) => {
      var d, u, p, f, h;
      return $(), I("div", wS, [
        fe(H(rS), {
          id: "probo-product-search-bar",
          ref_key: "searchBar",
          ref: e,
          modelValue: i.value,
          "onUpdate:modelValue": c[0] || (c[0] = (m) => i.value = m),
          show: o.value,
          "onUpdate:show": c[1] || (c[1] = (m) => o.value = m),
          items: a.value.products,
          elevated: "",
          "search-keys": [
            "code",
            `translations.${a.value.language}.title`,
            `translations.${a.value.language}.description`
          ],
          "item-text": `translations.${a.value.language}.title`,
          loading: a.value.loading,
          "item-height": 80
        }, {
          option: ve(({ option: m }) => [
            m && m.translations[a.value.language] ? ($(), I("span", yS, [
              J("span", xS, te(m.translations[a.value.language].title), 1),
              m.translations[a.value.language].description ? ($(), I("span", kS, te(m.translations[a.value.language].description), 1)) : Q("", !0)
            ])) : m && m.translations.nl ? ($(), I("span", $S, [
              J("span", SS, te(m.translations.nl.title), 1),
              m.translations.nl.description ? ($(), I("span", _S, te(m.translations.nl.description), 1)) : Q("", !0)
            ])) : Q("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "show", "items", "search-keys", "item-text", "loading"]),
        fe(H(_1), {
          ref_key: "configuratorModal",
          ref: r,
          modelValue: n.value,
          "onUpdate:modelValue": c[2] || (c[2] = (m) => n.value = m),
          product: s.value,
          "sub-title": ((p = (u = (d = a.value.productInfo) == null ? void 0 : d.translations) == null ? void 0 : u[a.value.language]) == null ? void 0 : p.description) || ((h = (f = a.value.productInfo) == null ? void 0 : f.translations) == null ? void 0 : h.nl.description),
          specs: !1,
          "show-minimize": !1,
          "extended-pricing": "",
          submit: H(Ut)("complete"),
          "submit-icon": H(oc),
          "can-order": a.value.canOrder,
          "onSubmit:productConfig": c[3] || (c[3] = (m) => a.value.finish()),
          onClose: c[4] || (c[4] = (m) => i.value = "")
        }, {
          default: ve(() => [
            Ee(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["modelValue", "product", "sub-title", "submit", "submit-icon", "can-order"])
      ]);
    };
  }
}, OS = `@import"https://rsms.me/inter/inter.css";.icon[data-v-aeca4267]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.action-button[data-v-cebbcda4]{position:relative;margin:0;display:inline-flex;height:3.5rem;width:3.5rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:center;border-radius:9999px;border-style:none;background-color:var(--primary);padding:0;outline:2px solid transparent;outline-offset:2px}.action-button[data-v-cebbcda4]:hover{background-color:var(--primary-hover)}.action-button[data-v-cebbcda4]:focus{background-color:var(--primary-light)}.action-button[data-v-cebbcda4]:active{background-color:var(--primary-pressed)}.action-button[disabled][data-v-cebbcda4]{pointer-events:none;background-color:var(--disabled)}.action-button[disabled] .icon[data-v-cebbcda4]{color:var(--disabled-text)}.action-button.floating[data-v-cebbcda4]{position:fixed;bottom:0;right:0;z-index:50;margin-bottom:1.5rem;margin-right:1.5rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.action-button .icon[data-v-cebbcda4]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.mini-icon[data-v-17d3891e]{display:flex;height:1.25rem;width:1.25rem;flex-shrink:0}.hotkey[data-v-37295413]{display:flex;height:1.25rem;width:-moz-fit-content;width:fit-content;min-width:1.25rem;align-items:center;justify-content:center;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity));--tw-bg-opacity: 6%;padding-left:.25rem;padding-right:.25rem;padding-bottom:1px;font-size:.75rem;line-height:1rem;font-weight:600}.button[data-v-0b882800]{display:flex;height:2.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:center;gap:.5rem;border-radius:.5rem;padding-left:.75rem;padding-right:.75rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity))}.button[data-v-0b882800]:disabled{background-color:var(--disabled);color:var(--disabled-text)}.button[data-v-0b882800]:disabled:hover{color:var(--disabled-text)}.primary[data-v-0b882800]{background-color:var(--primary);--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.primary[data-v-0b882800]:not(:disabled):hover{background-color:var(--primary-hover)}.primary[data-v-0b882800]:not(:disabled):focus{background-color:var(--primary-pressed)}.secondary[data-v-0b882800]{border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));background-color:var(--secondary);--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity))}.secondary[data-v-0b882800]:not(:disabled):hover{border-color:var(--border-primary-hover);background-color:var(--secondary-hover)}.secondary[data-v-0b882800]:not(:disabled):focus{background-color:var(--secondary-pressed)}.tertiary[data-v-0b882800]{background-color:var(--tertiary);color:var(--primary)}.tertiary[data-v-0b882800]:not(:disabled):hover{background-color:var(--tertiary-hover)}.tertiary[data-v-0b882800]:not(:disabled):focus{background-color:var(--tertiary-pressed)}.text[data-v-0b882800]:not(:disabled):hover{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity));--tw-bg-opacity: 4% }.text[data-v-0b882800]:not(:disabled):focus{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity));--tw-bg-opacity: 8% }.danger[data-v-0b882800]{background-color:var(--error-tertiary);--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.danger[data-v-0b882800]:not(:disabled):hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.danger[data-v-0b882800]:not(:disabled):focus{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity))}.default.has-icon[data-v-0b882800]{padding:.625rem}.default[data-v-0b882800] .mini-icon{height:1.25rem;width:1.25rem}.default[data-v-0b882800] .mini-icon svg{stroke-width:1.75}.small[data-v-0b882800]{height:2rem;padding-left:.75rem;padding-right:.75rem}.small.has-icon[data-v-0b882800]{width:2rem;border-radius:9999px}.small[data-v-0b882800] .mini-icon{height:1rem;width:1rem}.small[data-v-0b882800] .mini-icon svg{stroke-width:2}.medium[data-v-0b882800]{height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:1.5rem}.medium[data-v-0b882800] .mini-icon{height:1.5rem;width:1.5rem}.medium.has-icon[data-v-0b882800]{padding:.75rem}.large[data-v-0b882800]{height:3.5rem;padding-left:1.75rem;padding-right:1.75rem;font-size:1rem;line-height:1.5rem}.large[data-v-0b882800] .mini-icon{height:1.5rem;width:1.5rem}.large.has-icon[data-v-0b882800]{padding:1.25rem}[data-v-0b882800] .hotkey{--tw-bg-opacity: 23% }.micro-icon[data-v-b4a331ed]{display:flex;height:1rem;width:1rem;flex-shrink:0}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}.floating-container-content[data-v-bd654d59]{position:absolute;margin:0;height:-moz-max-content;height:max-content;width:-moz-max-content;width:max-content;overflow:visible;background-color:transparent;padding:0}.tooltip-wrapper[data-v-30d00b19]{display:contents}.tooltip[data-v-30d00b19]{display:flex;justify-content:center;word-break:break-all;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.5rem 1rem;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-drop-shadow: drop-shadow(0 2px 4px rgba(0,0,0,.24));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.tooltip[data-v-30d00b19]:before{position:absolute;display:block;width:0px;border-width:8px;border-style:solid;border-color:transparent;--tw-content: "";content:var(--tw-content)}.tooltip.top[data-v-30d00b19]{margin-bottom:.5rem}.tooltip.top[data-v-30d00b19]:before{left:50%;bottom:0;--tw-translate-x: -50%;--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-width:0px;--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.tooltip.top.inverted[data-v-30d00b19]:before{--tw-border-opacity: 1;border-top-color:rgb(0 0 0 / var(--tw-border-opacity))}.tooltip.top.left[data-v-30d00b19]:before{left:10%}.tooltip.top.right[data-v-30d00b19]:before{left:90%}.tooltip.right[data-v-30d00b19]:not(.bottom):not(.top){margin-left:.5rem}.tooltip.right[data-v-30d00b19]:not(.bottom):not(.top):before{left:0;top:50%;--tw-translate-x: -100%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-left-width:0px;--tw-border-opacity: 1;border-right-color:rgb(255 255 255 / var(--tw-border-opacity))}.tooltip.right:not(.bottom):not(.top).inverted[data-v-30d00b19]:before{--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity))}.tooltip.bottom[data-v-30d00b19]{margin-top:.5rem}.tooltip.bottom[data-v-30d00b19]:before{left:50%;top:0;--tw-translate-x: -50%;--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-top-width:0px;--tw-border-opacity: 1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity))}.tooltip.bottom.inverted[data-v-30d00b19]:before{--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity))}.tooltip.bottom.left[data-v-30d00b19]:before{left:10%}.tooltip.bottom.right[data-v-30d00b19]:before{left:90%}.tooltip.left[data-v-30d00b19]:not(.bottom):not(.top){margin-right:.5rem}.tooltip.left[data-v-30d00b19]:not(.bottom):not(.top):before{right:0;top:50%;--tw-translate-x: 100%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-right-width:0px;--tw-border-opacity: 1;border-left-color:rgb(255 255 255 / var(--tw-border-opacity))}.tooltip.left:not(.bottom):not(.top).inverted[data-v-30d00b19]:before{--tw-border-opacity: 1;border-left-color:rgb(0 0 0 / var(--tw-border-opacity))}.tooltip.inverted[data-v-30d00b19]{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.copy-button[data-v-47f665ee]{display:inline-flex;flex-direction:row;align-items:center;gap:.5rem;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem;font-weight:400;--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.copy-button[data-v-47f665ee]:hover{--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity))}.copy-button[data-v-47f665ee]:active{--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity))}.copy-button .micro-icon[data-v-47f665ee] svg{stroke-width:2}.check-icon[data-v-47f665ee]{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.copy-icon-button[data-v-47f665ee]{border-radius:.5rem!important}.segmented-control.default[data-v-a797b049]{position:relative;display:grid;grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;gap:.25rem;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding:.25rem}.segmented-control.default[data-v-a797b049] .segment{z-index:10;overflow-wrap:break-word}@media screen and (max-width: 640px){.segmented-control.default[data-v-a797b049] .segment{word-break:break-all}}.segmented-control.default[data-v-a797b049] .active{color:var(--primary)}.segmented-control.default .highlight[data-v-a797b049]{pointer-events:none;position:absolute;inset-inline-start:.25rem;top:.25rem;bottom:.25rem;margin-inline-start:0px!important;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-duration:.2s}.segmented-control.buttons[data-v-a797b049]{display:flex;flex-direction:row;gap:.5rem}.segmented-control.buttons[data-v-a797b049] .segment{font-weight:400}.segmented-control.buttons[data-v-a797b049] .active{border-width:2px;border-color:var(--primary);padding-left:.6875rem;padding-right:.6875rem;--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity))}.switch[data-v-1042b58f]{position:relative;display:inline-flex;height:1.5rem;width:2.75rem;flex-shrink:0;cursor:pointer;border-radius:9999px;border-width:2px;border-color:transparent;--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.switch[data-v-1042b58f]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-color: var(--primary);--tw-ring-offset-width: 2px }.switch.enabled[data-v-1042b58f]{background-color:var(--primary-light)}.switch[data-v-1042b58f]:disabled{cursor:default;--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.switch:disabled .dot[data-v-1042b58f]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.switch .dot[data-v-1042b58f]{pointer-events:none;display:inline-block;height:1.25rem;width:1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.switch .dot.enabled[data-v-1042b58f]{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.accordion-item[data-v-dae8d08d]{width:100%;overflow:hidden;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.accordion-item[data-v-dae8d08d]{border-radius:1rem}}.accordion-item .header[data-v-dae8d08d]{display:flex;width:100%;align-items:center;border-style:none;background-color:inherit;padding:1rem}.accordion-item .header[data-v-dae8d08d]:focus{background-color:var(--secondary-hover)}@media (min-width: 640px){.accordion-item .header[data-v-dae8d08d]{min-height:4.5rem;padding-left:1.5rem;padding-right:1.5rem}}.header .state-indicator[data-v-dae8d08d]{margin-left:auto}.state-indicator .icon[data-v-dae8d08d]{color:var(--primary-light)}.header .title[data-v-dae8d08d],.header .title[data-v-dae8d08d-s]{text-align:left;font-weight:500}.accordion-item .content[data-v-dae8d08d]{padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;padding-top:0}@media (min-width: 640px){.accordion-item .content[data-v-dae8d08d]{padding-left:1.5rem;padding-right:1.5rem}}.state-indicator[data-v-dae8d08d]{padding-left:.5rem}.state-indicator .icon[data-v-dae8d08d]{transform:rotate(0);transition:transform .3s linear}.state-indicator.open .icon[data-v-dae8d08d]{transform:rotate(180deg);transition:transform .3s linear}.grow-enter-active[data-v-dae8d08d],.grow-leave-active[data-v-dae8d08d]{transition-property:all;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.fade-enter-active[data-v-dae8d08d],.fade-leave-active[data-v-dae8d08d]{transition-property:all;transition-duration:.1s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.grow-enter-from[data-v-dae8d08d],.grow-leave-to[data-v-dae8d08d]{height:0px!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-dae8d08d],.fade-leave-to[data-v-dae8d08d]{height:0px!important;opacity:0}.accordion[data-v-83cfa0c5]{display:flex;flex-direction:column;gap:.125rem}@media (min-width: 640px){.accordion[data-v-83cfa0c5]{gap:.5rem}}.amount-input-container[data-v-47a543d3]{display:flex;flex-direction:column}.amount-input[data-v-47a543d3]{display:flex;height:2.5rem}.input[data-v-47a543d3],.minus[data-v-47a543d3],.plus[data-v-47a543d3]{border-width:1px;border-style:solid;border-color:var(--border-primary)}.input[data-v-47a543d3]:disabled,.minus[data-v-47a543d3]:disabled,.plus[data-v-47a543d3]:disabled{background-color:var(--disabled)}.input[data-v-47a543d3]:disabled{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.minus[data-v-47a543d3]:disabled,.plus[data-v-47a543d3]:disabled{color:var(--disabled-text)}.minus[data-v-47a543d3]:hover:not(:disabled),.plus[data-v-47a543d3]:hover:not(:disabled){z-index:20;border-color:var(--border-primary-hover);--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.minus[data-v-47a543d3]:focus:not(:disabled),.plus[data-v-47a543d3]:focus:not(:disabled){z-index:20;border-color:var(--border-primary-hover);--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.input[data-v-47a543d3]{z-index:10;margin-left:-1px;margin-right:-1px;width:3.5rem;text-align:center;font-weight:400}.input[data-v-47a543d3]:hover:not(:disabled):not(.has-error){border-color:var(--border-primary-hover)}.input[data-v-47a543d3]:focus:not(:disabled){margin-left:-.125rem;margin-right:-.125rem;border-width:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.input[data-v-47a543d3]:focus-visible{outline:2px solid transparent;outline-offset:2px}.input[data-v-47a543d3]:focus:not(:disabled):not(.has-error){border-color:var(--primary-light)}.input.has-error[data-v-47a543d3],.input.has-error[data-v-47a543d3]:focus{border-color:var(--error-tertiary)}.minus[data-v-47a543d3],.plus[data-v-47a543d3]{display:flex;width:2.5rem;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.minus[data-v-47a543d3]{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.plus[data-v-47a543d3]{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.input[data-v-47a543d3]::-webkit-outer-spin-button,.input[data-v-47a543d3]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-47a543d3]{-moz-appearance:textfield}.error[data-v-47a543d3]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.input-container[data-v-094159ff]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-094159ff]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-094159ff]{stroke:var(--error-tertiary)}.input-container.has-error .icon.has-error[data-v-094159ff]{fill:var(--error-tertiary);stroke:#fff}.container-inner[data-v-094159ff]{position:relative;width:100%}.container-inner .inline-container-prepended[data-v-094159ff],.container-inner .inline-container-appended[data-v-094159ff]{position:absolute;top:50%;display:flex;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));justify-content:center}.container-inner .inline-container-prepended .icon[data-v-094159ff],.container-inner .inline-container-appended .icon[data-v-094159ff]{height:1.25rem;width:1.25rem}.container-inner .inline-container-prepended .text[data-v-094159ff],.container-inner .inline-container-appended .text[data-v-094159ff]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.container-inner .inline-container-prepended[data-v-094159ff]{left:1rem}.container-inner .inline-container-appended[data-v-094159ff]{right:1rem;transform:translateY(-50%)}.input-label[data-v-094159ff]{margin-bottom:.25rem;display:flex;font-size:.875rem;line-height:1.25rem;font-weight:500}.input-label .optional[data-v-094159ff]{margin-left:auto;font-weight:400;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.input[data-v-094159ff]{box-sizing:border-box;width:100%;border-radius:.5rem;border-width:1px;border-style:solid;border-color:var(--border-primary);padding-left:1rem;padding-right:1rem;padding-top:9px;padding-bottom:9px;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity));--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.input[data-v-094159ff]::-moz-placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity))}.input[data-v-094159ff]::placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity))}.input[data-v-094159ff]:hover{border-color:var(--border-primary-hover)}.input[data-v-094159ff]:focus{border-width:2px;border-color:var(--primary-light);padding:8px 15px}.input.has-icon-prepended[data-v-094159ff]{padding-left:2.5rem}.input.has-error[data-v-094159ff]{border-color:var(--error-tertiary);color:var(--error-primary)}.input.has-error[data-v-094159ff]::-moz-placeholder{color:var(--error-primary)}.input.has-error[data-v-094159ff]::placeholder{color:var(--error-primary)}.input.is-valid[data-v-094159ff]{border-color:var(--success-tertiary);color:var(--success-primary)}.input[data-v-094159ff]:disabled{background-color:var(--disabled);color:var(--disabled-text)}.input[data-v-094159ff]:disabled::-moz-placeholder{color:var(--disabled-text)}.input[data-v-094159ff]:disabled::placeholder{color:var(--disabled-text)}.input[data-v-094159ff]:disabled:hover{border-color:var(--border-primary)}.input[data-v-094159ff]:-moz-read-only{cursor:pointer}.input[data-v-094159ff]:read-only{cursor:pointer}.error[data-v-094159ff]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.input.medium[data-v-094159ff]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-094159ff]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-094159ff]{padding-top:.9375rem;padding-bottom:.9375rem;font-size:1rem;line-height:1.5rem}.input.large[data-v-094159ff]:focus{padding-top:.875rem;padding-bottom:.875rem}.status[data-v-593da928]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.status.done[data-v-593da928]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.done .micro-icon[data-v-593da928]{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.status.attention[data-v-593da928]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.attention .micro-icon[data-v-593da928]{color:var(--error-secondary)}.alert[data-v-d4c64a42]{display:flex;border-radius:.5rem;padding:1rem}.alert.error[data-v-d4c64a42]{background-color:var(--error-accent)}.alert.warning[data-v-d4c64a42]{background-color:var(--warning-accent)}.alert.success[data-v-d4c64a42]{background-color:var(--success-accent)}.alert.info[data-v-d4c64a42]{background-color:var(--info-accent)}.alert .icon[data-v-d4c64a42]{margin-right:.75rem}.alert .content[data-v-d4c64a42]{display:flex;flex-direction:column;justify-content:center;gap:.25rem;font-size:.875rem;line-height:1.25rem}.alert .content .title[data-v-d4c64a42]{font-weight:500}.error .icon .mini-icon[data-v-d4c64a42]{color:var(--error-tertiary)}.error .content .title[data-v-d4c64a42]{color:var(--error-primary)}.error .content .description[data-v-d4c64a42]{color:var(--error-secondary)}.warning .icon .mini-icon[data-v-d4c64a42]{color:var(--warning-tertiary)}.warning .content .title[data-v-d4c64a42]{color:var(--warning-primary)}.warning .content .description[data-v-d4c64a42]{color:var(--warning-secondary)}.success .icon .mini-icon[data-v-d4c64a42]{color:var(--success-tertiary)}.success .content .title[data-v-d4c64a42]{color:var(--success-primary)}.success .content .description[data-v-d4c64a42]{color:var(--success-secondary)}.info .icon .mini-icon[data-v-d4c64a42]{color:var(--info-tertiary)}.info .content .title[data-v-d4c64a42]{color:var(--info-primary)}.info .content .description[data-v-d4c64a42]{color:var(--info-secondary)}.configurator-step.simple[data-v-6cc08e00] .header{align-items:flex-start;row-gap:1rem}@media (min-width: 640px){.configurator-step.simple[data-v-6cc08e00] .header{align-items:center}}.configurator-step.simple .inner[data-v-6cc08e00]{display:flex;flex-direction:column;row-gap:1rem}@media (min-width: 640px){.configurator-step.simple .inner[data-v-6cc08e00]{flex-direction:row;align-items:center}}.configurator-step.simple .measurement-inputs[data-v-6cc08e00]{display:flex;align-items:center;gap:.625rem}.measurement-inputs .measurement-input[data-v-6cc08e00]{width:100%;max-width:6rem}.measurement-inputs.has-errors[data-v-6cc08e00]{align-items:flex-start!important}.measurement-inputs.has-errors .separator[data-v-6cc08e00]{margin-top:.5rem}.configurator-step.simple[data-v-6cc08e00] .input::-webkit-outer-spin-button,.configurator-step.simple[data-v-6cc08e00] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple[data-v-6cc08e00] .input[type=number]{-moz-appearance:textfield}.configurator-step.simple .total[data-v-6cc08e00]{margin-left:auto;width:29%;flex-grow:1;text-align:right;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.configurator-step.simple .status-text[data-v-6cc08e00]{width:100%;text-align:right;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media (min-width: 640px){.configurator-step.simple .status-text[data-v-6cc08e00]{text-align:left}}.label[data-v-7b9990d7]{display:flex;height:1.5rem;width:-moz-fit-content;width:fit-content;align-items:center;border-radius:.25rem;padding-left:.625rem;padding-right:.625rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.small[data-v-7b9990d7]{height:1.25rem;padding-left:.5rem;padding-right:.5rem;font-size:.75rem;line-height:1rem}.blue[data-v-7b9990d7]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.green[data-v-7b9990d7]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.gray[data-v-7b9990d7]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.orange[data-v-7b9990d7]{--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(194 65 12 / var(--tw-text-opacity))}.purple[data-v-7b9990d7]{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.red[data-v-7b9990d7]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.yellow[data-v-7b9990d7]{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.image-wrapper[data-v-ac0b607a]{display:block;height:100%;width:100%}.image.rounded-4[data-v-ac0b607a],.skeleton.rounded-4[data-v-ac0b607a]{border-radius:.25rem}.image.rounded-8[data-v-ac0b607a],.skeleton.rounded-8[data-v-ac0b607a]{border-radius:.5rem}.image.rounded-16[data-v-ac0b607a],.skeleton.rounded-16[data-v-ac0b607a]{border-radius:1rem}.image.rounded-100[data-v-ac0b607a],.skeleton.rounded-100[data-v-ac0b607a]{border-radius:9999px}.image-wrapper .skeleton[data-v-ac0b607a]{height:100%;width:100%}@keyframes pulse-ac0b607a{50%{opacity:.5}}.image-wrapper .skeleton[data-v-ac0b607a]{animation:pulse-ac0b607a 2s cubic-bezier(.4,0,.6,1) infinite;--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.labels[data-v-a96fead4]{position:absolute;top:.75rem;right:.75rem;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}[data-v-a96fead4] .image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.amount[data-v-a96fead4]{margin-top:2.75rem;display:flex;flex-direction:column;align-items:center;row-gap:.5rem}.amount span[data-v-a96fead4]{font-size:.875rem;line-height:1.25rem}.information[data-v-37a2d813],.custom-value[data-v-37a2d813]{display:flex;align-items:center;justify-content:space-between;font-size:.75rem;line-height:1rem}.custom-value[data-v-37a2d813]{gap:1rem}.custom-value[data-v-37a2d813] .input-container,.custom-value[data-v-37a2d813] .button{width:100%;max-width:7.25rem}.information .delivery[data-v-37a2d813]{display:flex;align-items:center;-moz-column-gap:.25rem;column-gap:.25rem;--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.information .delivery .icon[data-v-37a2d813]{height:1rem;width:1rem}.information .delivery .icon[data-v-37a2d813] svg{stroke-width:2}.information .delivery .delivery-time[data-v-37a2d813]{font-weight:500}.information .price[data-v-37a2d813]{margin-left:auto;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.price .price-per[data-v-37a2d813]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.not-available[data-v-37a2d813]{display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem;color:var(--error-secondary)}.option-card[data-v-bd1d4e5d]{display:flex;min-height:16.5rem;width:17.5rem;cursor:pointer;justify-content:center;overflow:hidden;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));outline-style:solid;outline-width:1px;outline-color:#d1d5db}.option-card[data-v-bd1d4e5d]:hover,.option-card[data-v-bd1d4e5d]:focus{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.option-card[data-v-bd1d4e5d]:focus:not(.selected){outline-style:dotted;outline-width:.1875rem;outline-color:#3b82f6}.option-card.selected[data-v-bd1d4e5d]{outline-width:.1875rem;outline-color:#2563eb}.option-card.disabled[data-v-bd1d4e5d]{cursor:default;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.option-card.disabled[data-v-bd1d4e5d]:hover{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.option-card.disabled .header[data-v-bd1d4e5d],.option-card.disabled .content[data-v-bd1d4e5d]{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.option-card .inner[data-v-bd1d4e5d]{width:100%}.no-option[data-v-bd1d4e5d]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.no-option[data-v-bd1d4e5d] .icon{margin-bottom:1rem;height:3.5rem;width:3.5rem;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.no-option h3[data-v-bd1d4e5d]{font-size:.875rem;line-height:1.25rem}.header[data-v-bd1d4e5d]{position:relative;display:flex;height:10.25rem;width:100%;justify-content:center;border-top-left-radius:.25rem;border-top-right-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.option-card .content[data-v-bd1d4e5d]{padding:1rem 1rem .75rem}.content .title[data-v-bd1d4e5d]{padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.content .description[data-v-bd1d4e5d]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.option-card .footer[data-v-bd1d4e5d]{padding:1rem;padding-top:0;font-size:.875rem;line-height:1.25rem}.overlay[data-v-e76286b0]{pointer-events:auto;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;height:100%;width:100%}.overlay.fixed[data-v-e76286b0]{position:fixed!important;z-index:1000}.overlay.blurred[data-v-e76286b0]{background-color:transparent!important;--tw-backdrop-blur: blur(2px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.configurator-step.options[data-v-48cd0a03] .content{padding-right:0}@media (min-width: 640px){.configurator-step.options[data-v-48cd0a03] .content{padding-right:1.5rem}}.configurator-step.options[data-v-48cd0a03] .header .state-indicator{display:none}@media (min-width: 640px){.configurator-step.options[data-v-48cd0a03] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-48cd0a03]{display:flex;gap:1rem;overflow-x:scroll;padding:.25rem}@media (min-width: 640px){.configurator-step.options .option-container[data-v-48cd0a03]{overflow:visible;padding-left:0;padding-right:0}.option-container.show-all[data-v-48cd0a03]{flex-wrap:wrap}}.option-container .option[data-v-48cd0a03]{position:relative;display:flex}@media (min-width: 640px){.option-container .option[data-v-48cd0a03]{min-width:0px}}.option-container .option[data-v-48cd0a03]:last-child{margin-right:1rem}@media (min-width: 640px){.option-container .option[data-v-48cd0a03]:last-child{margin-right:0}}.option.hide[data-v-48cd0a03]{display:flex}@media (min-width: 640px){.option.hide[data-v-48cd0a03]{display:none}}.option .option-card[data-v-48cd0a03]{flex-shrink:0}@media (min-width: 640px){.option .option-card[data-v-48cd0a03]{flex-shrink:1}}.option-container .overlay[data-v-48cd0a03]{right:0;bottom:0;display:none;height:100%;width:100%;cursor:pointer;align-items:center;justify-content:center;border-radius:.5rem;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){.option-container .overlay[data-v-48cd0a03]{display:flex}}.configurator-step.options .subtitle[data-v-48cd0a03]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.configurator-step.options .alert[data-v-48cd0a03]{margin-top:1rem;margin-right:1rem}@media (min-width: 640px){.configurator-step.options .alert[data-v-48cd0a03]{margin-right:0}}.delivery-options[data-v-3530df0b]{margin-top:.125rem;width:100%;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.delivery-options[data-v-3530df0b]{margin-top:.5rem;border-radius:1rem}}@media (min-width: 768px){.delivery-options[data-v-3530df0b]{padding:1.5rem}}.header[data-v-3530df0b]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-3530df0b]{font-weight:500}.header .hint[data-v-3530df0b]{display:none;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (min-width: 768px){.header .hint[data-v-3530df0b]{display:flex}}.content[data-v-3530df0b]{display:flex;flex-direction:column;flex-wrap:wrap;gap:1rem}@media (min-width: 768px){.content[data-v-3530df0b]{flex-direction:row;gap:1.5rem}}.content .option[data-v-3530df0b]{position:relative;display:flex;flex-direction:column}.content .option[data-v-3530df0b]:not(.last){border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));padding-bottom:1rem}@media (min-width: 768px){.content .option[data-v-3530df0b]:not(.last){border-bottom-width:0px;padding-bottom:0}.content .option[data-v-3530df0b]:not(:first-child){border-left-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));padding-left:1.0625rem}}.option.hide[data-v-3530df0b]{display:none}.option .day[data-v-3530df0b],.option .cost[data-v-3530df0b],.option .no-cost[data-v-3530df0b]{font-size:.875rem;line-height:1.25rem}.option .cost[data-v-3530df0b],.option .no-cost[data-v-3530df0b]{position:absolute;top:0;right:0}@media (min-width: 768px){.option .cost[data-v-3530df0b],.option .no-cost[data-v-3530df0b]{position:relative}}.option .day[data-v-3530df0b]{margin-bottom:.25rem;display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:.5rem;column-gap:.5rem;row-gap:.25rem;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.option .date[data-v-3530df0b]{font-size:1.25rem;line-height:1.75rem;font-weight:500}@media (min-width: 768px){.option .date[data-v-3530df0b]{margin-bottom:.75rem}}.option .cost[data-v-3530df0b]{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.option .no-cost[data-v-3530df0b]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (min-width: 768px){.content .button[data-v-3530df0b]{display:none}}.loader[data-v-c9362947]{height:1.5rem;width:1.5rem}@keyframes spin-c9362947{to{transform:rotate(360deg)}}.loader[data-v-c9362947]{animation:spin-c9362947 1s linear infinite;border-radius:9999px;border-width:.1875rem}.loader.primary[data-v-c9362947]{border-color:rgb(219 234 254 / var(--tw-border-opacity));--tw-border-opacity: 1;border-top-color:rgb(37 99 235 / var(--tw-border-opacity))}.loader.secondary[data-v-c9362947]{border-color:#fff6;border-top-color:#fff}.configurator[data-v-5f0758fc] .configurator-step .header{overflow:hidden}.configurator[data-v-5f0758fc] .configurator-step .header .title{margin-right:.5rem;width:100%;overflow:hidden;text-overflow:ellipsis}@media (min-width: 640px){.configurator[data-v-5f0758fc] .configurator-step .header .title{width:16rem;max-width:16rem;white-space:nowrap}}.configurator[data-v-5f0758fc] .configurator-step .status{margin-right:1rem}.configurator-step[data-v-5f0758fc] .subtitle{margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}@media (min-width: 640px){.configurator-step[data-v-5f0758fc] .subtitle{margin-left:0}}.loader[data-v-5f0758fc]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-1b09e567] .icon{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity))}@keyframes minimizedAnimation-02194152{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-02194152{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}.modal[data-v-02194152]{width:100%;max-width:48rem;overflow:hidden;border-radius:1.5rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.modal[data-v-02194152]::backdrop{background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity: .5}.modal.blurred[data-v-02194152]::backdrop{background-color:transparent;--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.modal.minimized[data-v-02194152]{margin-bottom:1.25rem;width:100%;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));animation:1.3s 0s forwards minimizedAnimation-02194152}.modal.minimized .inner[data-v-02194152]{overflow-y:hidden}.modal.minimized .inner .header[data-v-02194152]{overflow-y:hidden;padding:1rem!important}.modal.minimized .inner .header .title[data-v-02194152-s]{margin-top:1rem;font-size:1rem!important;line-height:1.5rem!important}.modal.maximized[data-v-02194152]{animation:1.3s 0s forwards maximizedAnimation-02194152}.modal.fullscreen .inner[data-v-02194152]{height:100%;min-height:0px;overflow-y:auto}.modal.fullscreen .inner .header[data-v-02194152]{justify-content:flex-start!important;border-top-left-radius:1rem;border-top-right-radius:1rem;padding:2rem 1rem}.modal.fullscreen .inner .content[data-v-02194152]{padding:0;padding-bottom:.5rem}.modal.fullscreen .inner .footer[data-v-02194152]{margin-top:auto;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.modal.fullscreen .inner .footer[data-v-02194152]{margin-left:5.75rem;margin-right:5.75rem;margin-bottom:1.25rem;border-radius:1rem}}.modal.fullscreen[data-v-02194152]:not(.minimized){margin-top:3.5rem;height:calc(100vh - 3.5rem);max-width:100%;overflow:visible;border-bottom-right-radius:0;border-bottom-left-radius:0}@media (min-width: 640px){.modal.fullscreen:not(.minimized) .header[data-v-02194152],.modal.fullscreen:not(.minimized) .content[data-v-02194152]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen[data-v-02194152]:not(.minimized):modal{max-height:100vh}.modal[data-v-02194152]:not(.fullscreen){overflow-y:auto}.modal:not(.fullscreen) .footer[data-v-02194152]{position:sticky;bottom:0;--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.modal:not(.fullscreen) .footer.footer-shadow[data-v-02194152]{filter:drop-shadow(0 -1px 2px rgb(0 0 0 / .1)) drop-shadow(0 -1px 1px rgb(0 0 0 / .06))}.modal .actions[data-v-02194152]{position:absolute;top:-3.5rem;display:flex;height:3.5rem;width:100%;align-items:center;justify-content:flex-end;padding-left:.5625rem;padding-right:.5625rem}.modal .actions .minimize[data-v-02194152],.modal .actions .close[data-v-02194152]{padding-left:.9375rem;padding-right:.9375rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.modal .inner[data-v-02194152]{display:flex;min-height:-moz-fit-content;min-height:fit-content;flex-direction:column}.modal .inner .header[data-v-02194152]{display:flex;align-items:center;justify-content:flex-end;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem;padding-bottom:0}.modal .inner .header>.close[data-v-02194152]:focus-visible{background-color:var(--secondary-hover)}.modal .inner .header .minimized-actions[data-v-02194152]{margin-left:auto;display:flex;flex-direction:column;gap:.5rem}.modal .inner .title[data-v-02194152],.modal .inner .title[data-v-02194152-s]{font-size:1.25rem;line-height:1.75rem;font-weight:700}.modal .inner .content[data-v-02194152]{padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem}.modal .inner .content .title[data-v-02194152],.modal .inner .content .title[data-v-02194152-s]{margin-bottom:2rem}.modal .inner .footer[data-v-02194152]{margin-top:2rem;display:flex;justify-content:center;gap:.5rem;padding:1.5rem 1rem}.product-config-modal[data-v-2e62c2b4]::backdrop{--tw-bg-opacity: .8 }[data-v-2e62c2b4] .header{display:flex;flex-wrap:wrap}@media (min-width: 640px){[data-v-2e62c2b4] .header{gap:1.5rem}}.header .product-image[data-v-2e62c2b4]{height:auto;width:4.75rem!important}@media (min-width: 640px){.header .product-image[data-v-2e62c2b4]{width:8.5rem!important}}.product-image .image[data-v-2e62c2b4]{height:4.75rem;width:4.75rem}@media (min-width: 640px){.product-image .image[data-v-2e62c2b4]{width:8.5rem!important}}.header .title[data-v-2e62c2b4]{margin-bottom:.5rem}.header .subtitle[data-v-2e62c2b4]{margin-bottom:1rem;display:flex;gap:.625rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.subtitle .icon[data-v-2e62c2b4]{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity))}.header .reference[data-v-2e62c2b4]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.header .reference .value[data-v-2e62c2b4]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.header .inner[data-v-2e62c2b4]{max-width:calc(100% - 4.75rem);flex-shrink:1}@media (min-width: 640px){.header .inner[data-v-2e62c2b4]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-2e62c2b4]{display:none;max-width:30rem}@media (min-width: 640px){.header .inner .reference-input[data-v-2e62c2b4]{display:flex}}.header>.reference-input[data-v-2e62c2b4]{width:100%}@media (min-width: 640px){.header>.reference-input[data-v-2e62c2b4]{display:none}}.footer-wrapper[data-v-2e62c2b4]{display:flex;width:100%;align-items:center;justify-content:space-between}@media (min-width: 768px){.footer-wrapper[data-v-2e62c2b4]{flex-wrap:wrap}}.footer-wrapper .specifications[data-v-2e62c2b4]{display:none}@media (min-width: 640px){.footer-wrapper .specifications[data-v-2e62c2b4]{display:flex}}@media (min-width: 768px){.footer-wrapper .specifications[data-v-2e62c2b4]{width:100%}}@media (min-width: 1024px){.footer-wrapper .specifications[data-v-2e62c2b4]{width:auto}}.footer-wrapper .right[data-v-2e62c2b4]{margin-left:auto;display:flex;width:100%;align-items:center;justify-content:space-between;gap:1.25rem}@media (min-width: 1024px){.footer-wrapper .right[data-v-2e62c2b4]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-2e62c2b4]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-2e62c2b4]{display:none}@media (min-width: 640px){.footer-wrapper .right .add-to-cart .desktop[data-v-2e62c2b4]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-2e62c2b4]{display:flex}@media (min-width: 640px){.footer-wrapper .right .add-to-cart .mobile[data-v-2e62c2b4]{display:none}}.footer-wrapper .right .sub-total[data-v-2e62c2b4]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-2e62c2b4]{display:flex;width:100%;max-width:250px;flex-wrap:wrap;gap:.5rem;font-size:.75rem;line-height:1.2rem!important;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (min-width: 640px){.footer-wrapper .right .sub-total .sub-price[data-v-2e62c2b4]{font-size:.875rem;line-height:1.25rem}}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-2e62c2b4],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-2e62c2b4]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-2e62c2b4]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.footer-wrapper .right .sub-total .price[data-v-2e62c2b4]{display:flex;width:100%;font-size:1.875rem;line-height:2.25rem;font-weight:700;--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}@media (min-width: 1024px){.footer-wrapper .right .sub-total .price[data-v-2e62c2b4]{justify-content:flex-end}}.footer-wrapper .right .sub-total .price .label[data-v-2e62c2b4]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-2e62c2b4]{vertical-align:super;font-size:1rem;line-height:1.5rem}.footer-wrapper .right .sub-total .price.small[data-v-2e62c2b4]{font-size:1rem;line-height:1.5rem}@media (min-width: 640px){.footer-wrapper .right .sub-total .price.small[data-v-2e62c2b4]{font-size:1.5rem;line-height:2rem}}.footer-wrapper .right .sub-total .price.small .decimal[data-v-2e62c2b4]{font-size:.75rem;line-height:1rem}h1[data-v-41cc4def],h2[data-v-41cc4def],h3[data-v-41cc4def],h4[data-v-41cc4def],h5[data-v-41cc4def],h6[data-v-41cc4def]{font-family:Inter,Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:700}h1[data-v-41cc4def]{font-size:6rem;line-height:1}h2[data-v-41cc4def]{font-size:4rem}h3[data-v-41cc4def]{font-size:3rem;line-height:1}h4[data-v-41cc4def]{font-size:2rem}h5[data-v-41cc4def]{font-size:1.5rem;line-height:2rem}h6[data-v-41cc4def]{font-size:1.25rem;line-height:1.75rem}.card[data-v-192bc9f6]{display:flex;width:17.5rem;cursor:pointer;flex-direction:column;overflow:hidden;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.card[data-v-192bc9f6]:not(.passive):hover,.card[data-v-192bc9f6]:not(.passive):focus{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card[data-v-192bc9f6]:not(.flat){outline-style:solid;outline-width:1px;outline-color:#d1d5db}.card.passive[data-v-192bc9f6]{cursor:default}.card.disabled[data-v-192bc9f6]{cursor:default;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.card.disabled[data-v-192bc9f6]:hover{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card.disabled .content[data-v-192bc9f6],.card.disabled[data-v-192bc9f6] .image-wrapper{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.card.dense[data-v-192bc9f6]{width:100%;flex-direction:row;justify-content:flex-start}.card.dense[data-v-192bc9f6] .image-wrapper{height:unset;width:auto;flex-shrink:0}.card.dense .inner[data-v-192bc9f6]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-192bc9f6]{padding-bottom:.25rem}.card.flat[data-v-192bc9f6]:hover{background-color:var(--secondary-hover);--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card[data-v-192bc9f6] .image-wrapper{height:10.25rem}.card[data-v-192bc9f6] .image-wrapper .image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.card .inner[data-v-192bc9f6]{display:flex;width:100%;flex-direction:column;padding:1rem}.card .inner .header[data-v-192bc9f6]{position:relative;display:flex;width:100%;flex-direction:column;border-top-left-radius:.25rem;border-top-right-radius:.25rem;padding-bottom:.5rem}.card .inner .header .title[data-v-192bc9f6]{padding-bottom:.25rem;font-size:1.125rem;line-height:1.75rem}.card .inner .header .subtitle[data-v-192bc9f6]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.card .inner .content[data-v-192bc9f6]{font-size:.875rem;line-height:1.25rem}.card .inner .footer[data-v-192bc9f6]{padding-top:1rem}.list[data-v-7f3c5a6e]{display:flex;flex-direction:column}.list.grid[data-v-7f3c5a6e]{flex-direction:row;flex-wrap:wrap}.list-item[data-v-8cf71036]{display:flex;align-items:center;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.5rem 1rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.list-item.clickable[data-v-8cf71036]:not([tabindex="-1"]){outline:2px solid transparent;outline-offset:2px}.list-item.clickable[data-v-8cf71036]:not([tabindex="-1"]):hover{cursor:pointer;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.list-item.clickable[data-v-8cf71036]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-8cf71036]{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-8cf71036]{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.list-item .prepend[data-v-8cf71036]{display:flex}.list-item .content[data-v-8cf71036]{display:flex;flex-direction:column}.list-item .content .title[data-v-8cf71036]{font-weight:700}.list-item .content .subtitle[data-v-8cf71036]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.list-item .content .text[data-v-8cf71036]{font-size:.875rem;line-height:1.25rem}.confirm-modal[data-v-3ea35c52]{max-width:32rem}.confirm-modal .indicator-icon[data-v-3ea35c52]{margin-left:auto;margin-right:auto;width:-moz-fit-content;width:fit-content;border-radius:9999px;padding:.75rem}.confirm-modal .indicator-icon.danger[data-v-3ea35c52]{background-color:var(--error-accent);color:var(--error-secondary)}.confirm-modal .indicator-icon.info[data-v-3ea35c52]{background-color:var(--info-accent);color:var(--info-tertiary)}.confirm-modal .indicator-icon .icon[data-v-3ea35c52]{height:2rem;width:2rem}.confirm-modal .title[data-v-3ea35c52]{margin-top:1rem;margin-bottom:.75rem!important;text-align:center}.confirm-modal .message[data-v-3ea35c52]{text-align:center}.confirm-modal[data-v-3ea35c52] .content{padding-left:2rem!important;padding-right:2rem!important}.virtual-scroll-container[data-v-b1f0151c]{height:100%;width:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-b1f0151c]{display:flex;flex-direction:column}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}.filter-bar[data-v-889cc7ab]:hover:has(.button:hover){background-color:var(--secondary)}.filter-bar .label-container[data-v-889cc7ab]{margin-left:.5625rem;display:flex}.filter-bar .label-container.concat .label[data-v-889cc7ab]{overflow:hidden;white-space:nowrap;outline-style:solid;outline-width:2px;outline-color:#fff}.filter-bar .label-container.concat .label[data-v-889cc7ab]:not(:first-child){margin-left:-.5rem}.filter-bar .label-container.concat .label[data-v-889cc7ab]:not(:last-child){max-width:2.5rem}.filter-bar .label-container .label[data-v-889cc7ab]{border-radius:.5rem}.filter-bar .clear[data-v-889cc7ab]{margin-left:auto;margin-right:-.5625rem}.filter-dropdown[data-v-6de650f3]{margin-top:.5rem;max-height:33.625rem;min-width:16.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem}.filter-dropdown .button[data-v-6de650f3]{width:100%}.filter-dropdown .select-all[data-v-6de650f3]{margin-top:1rem;margin-bottom:.5rem}.filter-dropdown[data-v-6de650f3] .menu{height:100%;max-height:24.625rem;overflow:auto}.input-container[data-v-95b39f1d] .container-inner .inline-container-appended{margin-right:1.5rem}.input-container[data-v-95b39f1d] .container-inner .inline-container-appended .button{background-color:transparent}.badge[data-v-70bc9b0a]{position:relative;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:9999px;font-size:.75rem;line-height:1rem;font-weight:500;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.badge.small[data-v-70bc9b0a]{height:.5rem;width:.5rem}.badge.small.position[data-v-70bc9b0a]{top:-.125rem;right:-.125rem}.badge.blue[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.badge.blue .pulse[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity))}.badge.green[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.badge.green .pulse[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity))}.badge.gray[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.badge.gray .pulse[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.badge.orange[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))}.badge.orange .pulse[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(251 146 60 / var(--tw-bg-opacity))}.badge.purple[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(168 85 247 / var(--tw-bg-opacity))}.badge.purple .pulse[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(192 132 252 / var(--tw-bg-opacity))}.badge.red[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.badge.red .pulse[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity))}.badge.yellow[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.badge.yellow .pulse[data-v-70bc9b0a]{--tw-bg-opacity: 1;background-color:rgb(250 204 21 / var(--tw-bg-opacity))}.badge.position[data-v-70bc9b0a]{position:absolute;top:-.5rem;right:-.75rem}.badge.pulsating .pulse[data-v-70bc9b0a]{position:absolute;height:100%;width:100%}@keyframes ping-70bc9b0a{75%,to{transform:scale(2);opacity:0}}.badge.pulsating .pulse[data-v-70bc9b0a]{animation:ping-70bc9b0a 1s cubic-bezier(0,0,.2,1) infinite;border-radius:9999px;opacity:.75}.badge.pulsating .content[data-v-70bc9b0a]{z-index:1}.menu-item[data-v-d41f62b8]{position:relative;height:100%;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.25rem}.menu-item.title[data-v-d41f62b8]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.menu-item .menu-item-content[data-v-d41f62b8]{display:flex;height:100%;align-items:center;-moz-column-gap:.75rem;column-gap:.75rem}.menu-item .menu-item-content .icon[data-v-d41f62b8]{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity))}.menu-item .menu-item-content .sub-menu-trigger[data-v-d41f62b8]{margin-left:auto;height:1rem;width:1rem}.menu-item .menu-item-content .count[data-v-d41f62b8]{margin-left:auto;border-radius:9999px;border-width:1px;padding:.125rem .625rem;font-size:.75rem;line-height:1rem;font-weight:500}.menu-item .menu-item-content .current-item-icon[data-v-d41f62b8]{margin-left:auto;height:1.25rem;width:1.25rem;color:var(--primary)}.divider[data-v-7f654821]{width:100%;border-color:var(--border-primary)}.divider[data-v-7f654821]:not(.vertical){border-top-width:var(--0705668d)}.divider.vertical[data-v-7f654821]{height:100%;width:.0625rem}.divider.vertical.flex[data-v-7f654821]{height:auto;align-self:stretch}.divider.vertical[data-v-7f654821]{border-left-width:var(--0705668d)}.menu[data-v-59d42b60]{display:flex;align-items:center}.menu[data-v-59d42b60]:not(.vertical){height:100%;gap:1.5rem}.menu[data-v-59d42b60]:not(.vertical) .menu-item{border-bottom-width:.1875rem;border-color:transparent;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.menu[data-v-59d42b60]:not(.vertical) .menu-item:not(.current):hover,.menu[data-v-59d42b60]:not(.vertical) .menu-item:not(.current):focus{border-color:var(--border-primary-hover)}.menu[data-v-59d42b60]:not(.vertical) .menu-item .menu-item-content{font-weight:600}.menu[data-v-59d42b60]:not(.vertical) .current{border-color:var(--primary)}.menu.vertical[data-v-59d42b60]{flex-direction:column;align-items:flex-start}.menu.vertical[data-v-59d42b60] .menu-item{width:100%;border-radius:.5rem;border-style:none;padding:.5rem}.menu.vertical[data-v-59d42b60] .menu-item:not(.current):not(.title):hover{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.menu.vertical[data-v-59d42b60] .menu-item:not(.current):not(.title):focus{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))}.menu.vertical[data-v-59d42b60] .menu-item .sub-menu-trigger{margin-right:.125rem;--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.menu.vertical[data-v-59d42b60] .divider{margin-top:.3125rem;margin-bottom:.3125rem}.menu.vertical[data-v-59d42b60] .current{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))}.menu.mini[data-v-59d42b60] .count{display:none}.menu[data-v-59d42b60] .current{border-color:var(--primary);color:var(--primary)!important}.menu[data-v-59d42b60] .current .icon{color:var(--primary)}.sub-menu[data-v-59d42b60]{width:16.5rem;border-radius:.75rem;padding:.75rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.inputs[data-v-678330f1]{margin-top:1rem;margin-bottom:1rem}.inputs .input-from[data-v-678330f1],.inputs .to[data-v-678330f1]{margin-bottom:.5rem}.inputs .to[data-v-678330f1]{display:block;text-align:center;font-size:.875rem;line-height:1.25rem}.checkbox-container[data-v-673fdc04]{display:flex;width:100%;flex-direction:column}.checkbox-container.large .label[data-v-673fdc04]{gap:.75rem}.checkbox-container.large .checkbox[data-v-673fdc04]{margin-top:0;height:1.25rem;width:1.25rem}.label[data-v-673fdc04]{display:flex;cursor:pointer;align-items:flex-start;gap:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:400}.checkbox[data-v-673fdc04]{margin-top:.125rem;border-radius:.25rem;border-width:1px;border-color:var(--border-primary);color:var(--primary-light)}.checkbox[data-v-673fdc04]:not(:disabled):hover{border-color:var(--border-primary-hover)}.checkbox[data-v-673fdc04]:checked,.checkbox[data-v-673fdc04]:indeterminate{border-color:var(--primary-light)}.checkbox[data-v-673fdc04]:disabled{border-color:var(--border-primary);--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.checkbox[data-v-673fdc04]:not(:disabled):checked:hover,.checkbox[data-v-673fdc04]:not(:disabled):indeterminate:hover{border-color:var(--primary);color:var(--primary)}.checkbox[data-v-673fdc04]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-673fdc04]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(156, 163, 175)' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-673fdc04]{border-color:var(--error-secondary);outline-color:var(--error-secondary)}.error .error-message[data-v-673fdc04]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.append[data-v-673fdc04]{margin-left:auto;font-weight:400}.search[data-v-85375b61]{margin-bottom:1rem}.list[data-v-85375b61]{max-height:21.625rem;overflow-y:auto;overflow-x:visible;padding:.25rem;font-size:.875rem;line-height:1.25rem}.filter-group[data-v-27d23f8c]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.filter-group .title[data-v-27d23f8c]{margin-right:.25rem;display:none;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}@media (min-width: 768px){.filter-group .title[data-v-27d23f8c]{display:block}}.filter-group .button[data-v-27d23f8c]{font-weight:400;color:var(--primary)}.list[data-v-e1384384]{display:flex;width:16rem;flex-direction:column;gap:.375rem;padding-top:1rem;padding-bottom:.625rem}.list .active-columns[data-v-e1384384],.list .available-columns[data-v-e1384384]{display:flex;flex-direction:column;padding-left:1rem;padding-right:1rem}.list .active-columns .title[data-v-e1384384],.list .available-columns .title[data-v-e1384384]{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:.75rem;line-height:1rem;font-weight:500;--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity))}.list .active-columns .column[data-v-e1384384],.list .available-columns .column[data-v-e1384384]{display:flex;height:2rem;flex-direction:row;align-items:center}.list .active-columns .column .checkbox-container[data-v-e1384384],.list .available-columns .column .checkbox-container[data-v-e1384384]{width:-moz-fit-content;width:fit-content;padding-right:.5rem}.list .active-columns .column .label[data-v-e1384384],.list .available-columns .column .label[data-v-e1384384]{-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem}.list .active-columns .column .drag-handle[data-v-e1384384],.list .available-columns .column .drag-handle[data-v-e1384384]{margin-left:auto;padding-left:.5rem}.list .active-columns .column .drag-handle .icon[data-v-e1384384],.list .available-columns .column .drag-handle .icon[data-v-e1384384]{height:1.25rem;width:1.25rem}.list .active-columns .title[data-v-e1384384]{padding-bottom:.375rem}.list .active-columns .column.dragging[data-v-e1384384]{visibility:hidden;cursor:grabbing}.list .available-columns .title[data-v-e1384384]{padding-top:.375rem;padding-bottom:.375rem}.table-wrapper[data-v-f17e53c5]{position:relative;width:100%;overflow:clip;border-radius:.5rem}.table-wrapper table[data-v-f17e53c5]{width:100%;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.25rem}.table-wrapper .sticky-container[data-v-f17e53c5]{position:sticky;bottom:0;z-index:10}.table-wrapper .sticky-container .scrollbar[data-v-f17e53c5]{display:flex;height:.75rem;align-items:center;background-color:var(--secondary-hover)}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-f17e53c5]{position:absolute;height:.5rem;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}thead[data-v-2bc2c323]{position:sticky;top:0;z-index:10;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}thead[data-v-2bc2c323] tr td{font-weight:500;--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity))}thead[data-v-2bc2c323] tr td input{font-weight:400}thead[data-v-2bc2c323] tr{position:relative}thead[data-v-2bc2c323] tr:after{position:absolute;left:0;bottom:0;z-index:10;display:block;height:1px;width:100%;background-color:var(--table-row-border-color);--tw-content: "";content:var(--tw-content)}tbody[data-v-efa3a81b] tr:not(:last-child){border-bottom-width:1px;border-style:solid;border-color:var(--table-row-border-color)}td[data-v-fc913302]{padding-left:1rem;padding-right:1rem;vertical-align:middle;--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity))}tr[data-v-15e10af8]{height:3.5rem;max-height:3rem;min-height:3.5rem}.no-results-row[data-v-93cb7443]{position:relative;height:16rem}.no-results-row td[data-v-93cb7443]{position:absolute;height:100%;width:100%;overflow:hidden;white-space:nowrap}.no-results-row td .wrapper[data-v-93cb7443]{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;text-wrap:wrap;padding:1rem}.no-results-row td .wrapper .icon[data-v-93cb7443]{height:3rem;width:3rem;stroke:#737373}.no-results-row td .wrapper h2[data-v-93cb7443]{font-size:1.25rem;line-height:1.75rem;font-weight:600}.no-results-row td .wrapper span[data-v-93cb7443]{text-align:center;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.pagination[data-v-8d6c71c3]{display:flex;gap:.5rem}.pagination .button[data-v-8d6c71c3]{position:relative}.pagination .button[data-v-8d6c71c3]:not(:disabled){color:var(--primary)}.pagination .button[data-v-8d6c71c3]:not(:disabled) .icon{height:1.25rem;width:1.25rem}.pagination .button[data-v-8d6c71c3]:not(:first-child):not(:last-child){display:none;width:2.5rem}@media (min-width: 768px){.pagination .button[data-v-8d6c71c3]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-8d6c71c3]:hover{border-color:var(--border-primary)}.pagination .button.current[data-v-8d6c71c3]{border-width:2px;border-color:var(--primary)}.pagination .button .button-text[data-v-8d6c71c3]{display:none}@media (min-width: 768px){.pagination .button .button-text[data-v-8d6c71c3]{display:block}}.pagination .dotdotdot[data-v-8d6c71c3]{display:none;align-self:center}@media (min-width: 768px){.pagination .dotdotdot[data-v-8d6c71c3]{display:inline-block}}.skeleton[data-v-58a2cefa]{display:block;height:1.25rem}@keyframes pulse-58a2cefa{50%{opacity:.5}}.skeleton[data-v-58a2cefa]{animation:pulse-58a2cefa 2s cubic-bezier(.4,0,.6,1) infinite;--tw-bg-opacity: 1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.skeleton.has-content[data-v-58a2cefa]{height:auto}.skeleton.circular[data-v-58a2cefa]{border-radius:50%}.skeleton.text[data-v-58a2cefa]{--tw-scale-y: .6;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:.25rem}.skeleton.text[data-v-58a2cefa]:not(.has-content){height:auto;color:inherit}.skeleton.text[data-v-58a2cefa]:not(.has-content):before{--tw-content: " ";content:var(--tw-content)}.skeleton [data-v-58a2cefa-s]{visibility:hidden}.base-select[data-v-b2acfacf]:focus{outline:2px solid transparent;outline-offset:2px}.base-select.disabled .wrapper[data-v-b2acfacf]{pointer-events:none;background-color:var(--disabled)}.base-select.disabled .wrapper[data-v-b2acfacf]::-moz-placeholder{color:var(--disabled-text)}.base-select.disabled .wrapper[data-v-b2acfacf]::placeholder{color:var(--disabled-text)}.base-select.disabled .wrapper[data-v-b2acfacf]:hover{border-color:var(--border-primary)}.base-select.disabled .wrapper input[data-v-b2acfacf],.base-select.disabled .wrapper .placeholder[data-v-b2acfacf],.base-select.disabled .wrapper .selected-item[data-v-b2acfacf]{background-color:var(--disabled);color:var(--disabled-text)}.base-select.click[data-v-b2acfacf]{cursor:pointer}.base-select.click.disabled[data-v-b2acfacf]{pointer-events:none;cursor:default}.base-select .input-label[data-v-b2acfacf]{margin-bottom:.25rem;display:flex;font-size:.875rem;line-height:1.25rem;font-weight:500}.base-select .wrapper[data-v-b2acfacf]{display:flex;height:2.5rem;width:100%;align-items:center;border-radius:.5rem;border-width:1px;border-color:var(--border-primary);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:.5rem;padding-right:1rem}.base-select .wrapper[data-v-b2acfacf]:hover{border-color:var(--border-primary-hover)}.base-select .wrapper.focus[data-v-b2acfacf]{border-color:var(--primary-light);outline-style:solid;outline-width:1px;outline-color:var(--primary-light)}.base-select .wrapper.has-error[data-v-b2acfacf]{border-color:var(--error-tertiary);color:var(--error-primary);outline-color:var(--error-tertiary)}.base-select .wrapper.has-error[data-v-b2acfacf]::-moz-placeholder{color:var(--error-primary)}.base-select .wrapper.has-error[data-v-b2acfacf]::placeholder{color:var(--error-primary)}.base-select .wrapper .prepend-icon[data-v-b2acfacf]{margin-left:.5rem;color:var(--primary)}.base-select .wrapper .selected-items[data-v-b2acfacf]{margin-left:.5rem;display:flex;width:auto;gap:.25rem;overflow:hidden;white-space:nowrap}.base-select .wrapper .selected-items .label[data-v-b2acfacf]{height:-moz-min-content;height:min-content;font-size:.75rem;line-height:1rem}.base-select .wrapper .placeholder[data-v-b2acfacf]{margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.base-select .wrapper .selected-item[data-v-b2acfacf]{margin-left:.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .action-buttons[data-v-b2acfacf]{margin-left:auto;display:flex;gap:.25rem}.base-select .wrapper input[data-v-b2acfacf]{margin-left:.5rem;min-width:0px;flex:1 0 5rem;border-radius:.5rem;border-style:none;padding-top:.5rem;padding-bottom:.5rem;padding-left:0;padding-right:0;font-size:.875rem;line-height:1.25rem}.base-select .wrapper input[data-v-b2acfacf]::-moz-placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.base-select .wrapper input[data-v-b2acfacf]::placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.base-select .wrapper input[data-v-b2acfacf]:focus{box-shadow:none}.base-select .error[data-v-b2acfacf]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.state-indicator[data-v-b2acfacf]{pointer-events:none;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.state-indicator.is-open[data-v-b2acfacf]{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.content-divider[data-v-b2acfacf]{margin-left:1.5rem;margin-right:1.5rem}.select-content[data-v-b2acfacf]{max-height:300px;justify-content:space-between;overflow-y:auto;padding-top:.5rem;padding-bottom:.5rem}.select-content .no-results[data-v-b2acfacf]{position:relative;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:.5rem 1rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.table-head[data-v-badd73c1]{display:table-header-group;top:var(--bc627600)}.table-head .select-column[data-v-badd73c1],.table-head .action-column[data-v-badd73c1]{z-index:2}.table-head .header[data-v-badd73c1]{position:relative;display:flex;width:-moz-fit-content;width:fit-content;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.table-head .header[data-v-badd73c1]:hover{cursor:pointer}.table-head .header.active[data-v-badd73c1]{--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity))}.table-head .header .sort-icon[data-v-badd73c1]{position:absolute;display:none;height:1rem;width:1rem;cursor:pointer;stroke-width:.125rem}.table-head .header .sort-icon.left[data-v-badd73c1],.table-head .header .sort-icon.right[data-v-badd73c1]{top:50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.table-head .header .sort-icon.left[data-v-badd73c1]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-badd73c1]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-badd73c1],.table-head .header .sort-icon.active[data-v-badd73c1]{display:block}.table-head .filters[data-v-badd73c1]{height:4rem;--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.table-head .filters .action-column[data-v-badd73c1]{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.table-head .filters td[data-v-badd73c1]>div{min-width:6rem;max-width:18rem!important}.select-column[data-v-badd73c1],.action-column[data-v-badd73c1]{position:relative;z-index:1;width:3rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.select-column.overlap[data-v-badd73c1]:after,.action-column.overlap[data-v-badd73c1]:before{position:absolute;top:0;height:100%;width:.625rem;--tw-bg-opacity: .05;--tw-gradient-from: #0000000D var(--tw-gradient-from-position);--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to: transparent var(--tw-gradient-to-position);--tw-content: "";content:var(--tw-content)}.select-column.overlap[data-v-badd73c1]:after{right:-.625rem;background-image:linear-gradient(to right,var(--tw-gradient-stops))}.action-column.overlap[data-v-badd73c1]:before{left:-.625rem;background-image:linear-gradient(to left,var(--tw-gradient-stops))}tbody tr.clickable[data-v-badd73c1]{cursor:pointer}tbody tr.clickable[data-v-badd73c1]:hover{--tw-bg-opacity: 1;background-color:rgb(244 244 245 / var(--tw-bg-opacity))}tbody tr.selectable td[data-v-badd73c1]:nth-child(2){font-weight:500}tbody tr:not(.selectable) td[data-v-badd73c1]:first-child{font-weight:500}.table-footer[data-v-badd73c1]{position:sticky;bottom:0;z-index:10;display:flex;align-items:center;justify-content:space-between;gap:1rem;border-top-width:1px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem 1rem}.table-footer .current-page-info[data-v-badd73c1]{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;row-gap:.5rem;--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity))}.table-footer .current-page-info .total-results[data-v-badd73c1]{margin-right:1.5rem;font-size:.875rem;line-height:1.25rem}.table-footer .current-page-info .total-results span[data-v-badd73c1]{font-weight:700}.table-footer .current-page-info .page-selector[data-v-badd73c1]{display:none;flex-grow:1;flex-wrap:wrap;align-items:center}@media (min-width: 768px){.table-footer .current-page-info .page-selector[data-v-badd73c1]{display:flex}}.table-footer .current-page-info .page-selector[data-v-badd73c1] .base-select{width:100%;max-width:6rem}.table-footer .current-page-info .page-selector .per-page[data-v-badd73c1]{margin-left:.75rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.table-footer .pagination[data-v-badd73c1]{margin-left:auto;padding-top:1rem;padding-bottom:1rem}tfoot[data-v-f1ce8590]{border-top-width:1px;border-style:solid;border-color:var(--table-row-border-color)}tfoot[data-v-f1ce8590] tr{max-height:initial;min-height:initial}.avatar[data-v-b2e968a1]{display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:9999px;background-color:var(--tertiary)}.avatar .initials[data-v-b2e968a1]{font-size:.875rem;line-height:1.25rem;font-weight:500;line-height:1;color:var(--primary)}.avatar img[data-v-b2e968a1]{height:100%;width:100%;border-radius:9999px;-o-object-fit:cover;object-fit:cover}.avatar.small[data-v-b2e968a1]{height:1.5rem;width:1.5rem}.avatar.small .initials[data-v-b2e968a1]{font-size:.75rem;line-height:1rem}.avatar.medium[data-v-b2e968a1]{height:2rem;width:2rem}.avatar.large[data-v-b2e968a1]{height:3rem;width:3rem}.avatar.large .initials[data-v-b2e968a1]{font-size:1rem;line-height:1.5rem}.avatar.extra-large[data-v-b2e968a1]{height:3.5rem;width:3.5rem}.avatar.extra-large .initials[data-v-b2e968a1]{font-size:1.125rem;line-height:1.75rem}.checkbox-group[data-v-cc5ef3e0]{display:flex;flex-direction:column;gap:.5rem}.checkbox-button[data-v-9e73a734]{display:flex;flex-direction:column;border-radius:.75rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity));padding:.25rem}.checkbox-button .checkbox-container[data-v-9e73a734]{border-radius:.5rem}.checkbox-button .checkbox-container[data-v-9e73a734]:hover{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))}.checkbox-button .checkbox-container[data-v-9e73a734] .label{height:100%;align-items:flex-start;word-break:break-all;border-radius:.75rem;padding:.75rem;font-weight:500}.checkbox-button .checkbox-container .checkbox-button-label[data-v-9e73a734]{display:flex;align-items:flex-start;gap:.5rem}.checkbox-button .checkbox-container .micro-icon[data-v-9e73a734]{margin-top:.125rem;--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity))}.checkbox-button .checked-content[data-v-9e73a734]{padding-top:.25rem}.error-summary[data-v-6a273587]{padding-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.country-icon[data-v-4915ad18]{height:1.25rem;width:1.25rem}.activator[data-v-4915ad18]{margin-right:.5rem;display:flex;cursor:pointer;align-items:center;gap:.25rem}.activator .state-indicator[data-v-4915ad18]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.activator .state-indicator.is-open[data-v-4915ad18]{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.country-list[data-v-4915ad18]{max-height:300px;overflow-y:auto;padding-bottom:.5rem;font-size:.875rem;line-height:1.25rem}.country-list .search-container[data-v-4915ad18]{position:sticky;top:0;z-index:1;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.5rem}.country-list .search-container[data-v-4915ad18]:after{position:absolute;bottom:-.5rem;left:0;height:.5rem;width:100%;--tw-bg-opacity: .05;background-image:linear-gradient(to bottom,var(--tw-gradient-stops));--tw-gradient-from: #0000000D var(--tw-gradient-from-position);--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to: transparent var(--tw-gradient-to-position);--tw-content: "";content:var(--tw-content)}.country-list .search-container .search-input[data-v-4915ad18]{width:100%;border-style:none;padding:0;font-size:.875rem;line-height:1.25rem}.country-list .search-container .search-input[data-v-4915ad18]:focus{box-shadow:none}.country-list .countries[data-v-4915ad18]{padding-top:.5rem}.country-list .countries .country[data-v-4915ad18]{display:flex;align-items:center;gap:.5rem;padding:.125rem .5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.country-list .countries .country[data-v-4915ad18]:hover{cursor:pointer;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.country-list .countries .no-countries-found[data-v-4915ad18]{pointer-events:none;padding-top:.25rem;text-align:center;font-weight:700}.phone-input[data-v-b930be34]{display:flex;height:2.5rem;align-items:center;border-radius:.5rem;border-width:1px;border-color:var(--border-primary);padding-left:1rem;padding-right:1rem}.phone-input[data-v-b930be34]:hover{border-color:var(--border-primary-hover)}.phone-input.focus[data-v-b930be34]{border-color:var(--primary-light);outline-style:solid;outline-width:1px;outline-color:var(--primary-light)}.phone-input select[data-v-b930be34],.phone-input input[data-v-b930be34]{border-style:none;padding:0}.phone-input select[data-v-b930be34]:focus,.phone-input input[data-v-b930be34]:focus{box-shadow:none}.phone-input select[data-v-b930be34]{padding-right:2rem}.phone-input input[data-v-b930be34]{width:100%;font-size:.875rem;line-height:1.25rem}.phone-input .country-prefix[data-v-b930be34]{margin-right:.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.radio[data-v-e32b6909]{border-color:var(--border-primary);color:var(--primary-light)}.radio[data-v-e32b6909]:focus{--tw-ring-color: var(--primary-light)}.radio.large[data-v-e32b6909]{height:1.25rem;width:1.25rem}.radio[data-v-e32b6909]:not(:disabled):hover{border-color:var(--border-primary-hover)}.radio[data-v-e32b6909]:checked{border-color:var(--primary-light)}.radio[data-v-e32b6909]:disabled{border-color:var(--border-primary);--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.radio[data-v-e32b6909]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-e32b6909]:checked:not(:disabled):hover{border-color:var(--primary);color:var(--primary)}.radio-button[data-v-8712cfc4]{display:flex;height:2.75rem;align-items:center;gap:.75rem;word-break:break-all;border-radius:.5rem;padding-left:.75rem;padding-right:.75rem}.radio-button[data-v-8712cfc4]:not(.disabled):hover{cursor:pointer;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))}.radio-button:not(.disabled).active[data-v-8712cfc4]{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.radio-button:not(.disabled).active[data-v-8712cfc4]:hover{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.radio-button.disabled[data-v-8712cfc4]{color:var(--disabled-text);--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.radio-button.disabled[data-v-8712cfc4]:before{position:absolute;top:0;left:0;z-index:10;height:100%;width:100%;cursor:not-allowed;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity));opacity:.1;--tw-content: "";content:var(--tw-content)}.radio-button.large[data-v-8712cfc4]{height:4rem}.radio-button label[data-v-8712cfc4]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.radio-button .append[data-v-8712cfc4]{margin-left:auto}.radio-button .prepend-wrapper[data-v-8712cfc4]{display:flex;flex-direction:row;align-items:center;gap:.75rem}.radio-button .prepend-wrapper .title-wrapper[data-v-8712cfc4]{display:flex;min-width:-moz-max-content;min-width:max-content;flex-direction:column}.radio-button .prepend-wrapper .title-wrapper .title[data-v-8712cfc4]{display:flex;flex-direction:row;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-8712cfc4]{font-size:.75rem;line-height:1rem}.radio-group[data-v-64b7e0de]{display:flex;flex-direction:column;gap:.25rem}.suggestion-list[data-v-e3a5df1f]{position:absolute;min-width:6.25rem;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.75rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.suggestion-list .menu[data-v-e3a5df1f]{row-gap:.25rem}.editor[data-v-00ae868a] .tiptap{height:18.75rem;width:100%;overflow:auto;border-radius:.5rem;border-width:1px;border-color:var(--border-primary);padding:.625rem 1rem}.editor[data-v-00ae868a] .tiptap h1,.editor[data-v-00ae868a] .tiptap h2{margin-bottom:1rem}.editor[data-v-00ae868a] .tiptap h1{font-size:1.5rem;line-height:2rem}.editor[data-v-00ae868a] .tiptap h2{font-size:1.25rem;line-height:1.75rem}.editor[data-v-00ae868a] .tiptap h3{font-size:1.125rem;line-height:1.75rem}.editor[data-v-00ae868a] .tiptap h4,.editor[data-v-00ae868a] .tiptap h5,.editor[data-v-00ae868a] .tiptap h6{font-size:1rem;line-height:1.5rem}.editor[data-v-00ae868a] .tiptap .tag{font-weight:700;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.editor .toolbar[data-v-00ae868a]{margin-bottom:.5rem;display:flex;gap:.25rem}.editor .toolbar .button[data-v-00ae868a]{width:2.5rem}.editor .toolbar[data-v-00ae868a] .base-select{margin-left:auto}.modal.loader-modal[data-v-16585402] .inner{height:4.75rem;align-items:center;justify-content:center;border-radius:1rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.modal.loader-modal[data-v-16585402] .inner .loader{height:3.125rem!important;width:3.125rem!important}.search-container[data-v-16585402]{position:relative}.search-container[data-v-16585402] .modal{height:100%;max-height:25rem;background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.search-container[data-v-16585402] .modal .inner .content{padding:0}.search-container[data-v-16585402] .modal .inner .content .floating-container-content{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.search-container[data-v-16585402] .modal .inner .content .floating-container-content .select-content{border-radius:.5rem}.search-container[data-v-16585402] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-right-radius:0;border-bottom-left-radius:0}.search-container[data-v-16585402] .modal .inner .content .search.elevated .wrapper{height:4.75rem;border-radius:1rem;border-style:none;padding-left:1.5rem;padding-right:1.5rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.search-container[data-v-16585402] .modal .inner .content .search.elevated .wrapper.focus{border-style:none;outline:2px solid transparent;outline-offset:2px}.search-container[data-v-16585402] .modal .inner .content .search.elevated .wrapper .prepend-icon{margin-left:0;margin-right:.25rem;height:1.5rem;width:1.5rem}.search-container[data-v-16585402] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-16585402] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.search-container[data-v-16585402] .modal .inner .content .search.elevated .options{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:1rem;border-bottom-left-radius:1rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.search-container[data-v-16585402] .modal .inner .content .search.elevated .options .virtual-scroll-container>div>div:first-child{margin-top:1rem}.search-container[data-v-16585402] .modal .inner .content .search.elevated .options .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-16585402] .modal .inner .content .button{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.search-container[data-v-16585402] .modal .inner .content .button.cancel{border-radius:0;border-left-width:1px;padding-left:1rem;padding-right:.5rem;font-weight:400}.arrow[data-v-159f9407]{position:relative}.arrow.vertical[data-v-159f9407]{height:100%;width:-moz-fit-content;width:fit-content;padding-left:.75rem;padding-right:.75rem}.arrow.vertical .text[data-v-159f9407]{top:50%;--tw-translate-y: -50%;--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));text-align:center}.arrow.vertical.has-text[data-v-159f9407]{margin-right:2rem}.arrow[data-v-159f9407]:not(.vertical){width:100%;padding-top:.75rem;padding-bottom:.75rem}.arrow:not(.vertical) .text[data-v-159f9407]{left:50%;margin-top:1.25rem;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));text-align:center}.arrow:not(.vertical).has-text[data-v-159f9407]{margin-bottom:2rem}.arrow .arrow-pointer[data-v-159f9407]{position:absolute;border-right-width:2px;border-bottom-width:2px;border-color:var(--border-primary);padding:.5rem}.arrow .arrow-pointer.up[data-v-159f9407],.arrow .arrow-pointer.down[data-v-159f9407]{margin-left:-.5rem}.arrow .arrow-pointer.up[data-v-159f9407]{top:0;margin-top:.125rem;--tw-rotate: -135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .arrow-pointer.down[data-v-159f9407]{bottom:0;margin-bottom:.125rem;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .arrow-pointer.left[data-v-159f9407],.arrow .arrow-pointer.right[data-v-159f9407]{top:1rem;margin-top:-.75rem}.arrow .arrow-pointer.left[data-v-159f9407]{left:0;margin-left:.125rem;--tw-rotate: 135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .arrow-pointer.right[data-v-159f9407]{right:0;margin-right:.125rem;--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.arrow .text[data-v-159f9407]{position:absolute;display:block;text-wrap:nowrap;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.overlay[data-v-dd96fa18]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:60;height:100%;width:100%}.overlay.left .drawer[data-v-dd96fa18]{left:0}.overlay.right .drawer[data-v-dd96fa18]{right:0}.overlay .drawer[data-v-dd96fa18]{position:absolute;height:100%;width:-moz-fit-content;width:fit-content;max-width:80%;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.overlay .drawer.fullWidth[data-v-dd96fa18]{width:100%}.overlay .drawer .wrapper[data-v-dd96fa18]{position:relative;display:flex;height:100%;flex-direction:column;overflow:hidden}.overlay .drawer .header[data-v-dd96fa18]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1.25rem}.overlay .drawer .header h1[data-v-dd96fa18]{font-size:1.25rem;line-height:1.75rem}.overlay .drawer .header .close[data-v-dd96fa18]{--tw-translate-x: .625rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.overlay .drawer .content[data-v-dd96fa18]{flex-grow:1;overflow-y:auto;padding:1.25rem;padding-top:0}.slide-enter-active[data-v-dd96fa18],.slide-leave-active[data-v-dd96fa18],.slide-enter-to[data-v-dd96fa18]{transition:all .5s ease}.left .slide-enter-active[data-v-dd96fa18],.left .slide-leave-active[data-v-dd96fa18]{transform:translate(-100%)}.left .slide-enter-to[data-v-dd96fa18]{transform:translate(0)}.right .slide-enter-active[data-v-dd96fa18],.right .slide-leave-active[data-v-dd96fa18]{transform:translate(100%)}.right .slide-enter-to[data-v-dd96fa18]{transform:translate(0)}.dropdown[data-v-ef869708]{position:relative}.dropdown .menu[data-v-ef869708]{padding:.25rem}.dropdown.persistent .button[data-v-ef869708]{transition-property:all;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dropdown.persistent .button.gray[data-v-ef869708]{border-color:#37415133;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity))}.dropdown.persistent .button.orange[data-v-ef869708]{border-color:#95731633;--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(194 65 12 / var(--tw-text-opacity))}.dropdown.persistent .button.blue[data-v-ef869708]{border-color:#3b82f633;--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.dropdown.persistent .button.green[data-v-ef869708]{border-color:#16a34a33;--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.dropdown.persistent .button.red[data-v-ef869708]{border-color:#ef444433;--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.dropdown.persistent .button.purple[data-v-ef869708]{border-color:#a855f733;--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.dropdown.persistent .button.yellow[data-v-ef869708]{border-color:#eab30833;--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.dropdown.persistent .menu[data-v-ef869708] .current{--tw-text-opacity: 1 !important;color:rgb(10 10 10 / var(--tw-text-opacity))!important}.header[data-v-295b8902]{position:relative;z-index:50;width:100%;height:var(--44d5aabe)}.header .wrapper[data-v-295b8902]{position:fixed;width:100%;border-bottom-width:1px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.header .wrapper .inner[data-v-295b8902]{margin-left:auto;margin-right:auto;display:grid;height:100%;align-items:center;gap:.5rem}@media (min-width: 1024px){.header .wrapper .inner[data-v-295b8902]{max-width:100.4375rem}}.header .wrapper .inner[data-v-295b8902]{grid-template-areas:"return-info return-info return-info" "prepend logo append" "middle middle middle";grid-template-columns:1fr auto 1fr}.header .wrapper .inner .prepend[data-v-295b8902]{margin-left:.5rem}@media (min-width: 1024px){.header .wrapper .inner .prepend[data-v-295b8902]{margin-left:1rem}}.header .wrapper .inner .prepend[data-v-295b8902]{grid-area:prepend}.header .wrapper .inner .logo[data-v-295b8902]{grid-area:logo}.header .wrapper .inner .logo a[data-v-295b8902]{display:block;width:-moz-fit-content;width:fit-content}.header .wrapper .inner .return-info[data-v-295b8902]{display:flex;justify-content:center;border-bottom-width:1px;padding-top:.5rem;padding-bottom:.5rem}@media (min-width: 1024px){.header .wrapper .inner .return-info[data-v-295b8902]{justify-content:flex-start;border-bottom-width:0px;padding-top:0;padding-bottom:0}}.header .wrapper .inner .return-info[data-v-295b8902]{grid-area:return-info}.header .wrapper .inner .return-info .icon[data-v-295b8902]{height:1rem;width:1rem}@media (min-width: 1024px){.header .wrapper .inner .return-info .icon[data-v-295b8902]{height:1.5rem;width:1.5rem;border-style:none}}.header .wrapper .inner .return-info a[data-v-295b8902]{display:flex;align-items:center;gap:1rem}.header .wrapper .inner .return-info a .text[data-v-295b8902]{display:flex;align-items:center;font-size:.75rem;line-height:1rem;font-weight:500}@media (min-width: 1024px){.header .wrapper .inner .return-info a .text[data-v-295b8902]{font-size:.875rem;line-height:1.25rem}}.header .wrapper .inner .middle[data-v-295b8902]{display:flex;height:100%;align-items:center;justify-content:center}@media (min-width: 1024px){.header .wrapper .inner .middle[data-v-295b8902]{padding:0}}.header .wrapper .inner .middle[data-v-295b8902]{grid-area:middle}.header .wrapper .inner .middle[data-v-295b8902]>*{margin-left:.5rem;margin-right:.5rem;margin-bottom:.5rem}@media (min-width: 1024px){.header .wrapper .inner .middle[data-v-295b8902]>*{margin:0}}.header .wrapper .inner .middle[data-v-295b8902] .search-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-295b8902] .search-container .input{border-radius:1rem;border-style:none;background-color:var(--disabled);padding-top:.4375rem;padding-bottom:.4375rem;padding-left:3.25rem;font-size:.875rem;line-height:1.25rem}.header .wrapper .inner .middle[data-v-295b8902] .search-container .input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.header .wrapper .inner .middle[data-v-295b8902] .search-container .input::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.header .wrapper .inner .middle[data-v-295b8902] .search-container .input:hover{border-style:none}.header .wrapper .inner .middle[data-v-295b8902] .search-container .input:focus{padding-top:.4375rem;padding-bottom:.4375rem;padding-right:1rem}@media (min-width: 1024px){.header .wrapper .inner .middle[data-v-295b8902] .search-container .input{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.header .wrapper .inner .middle[data-v-295b8902] .search-container .input:focus{padding-top:.6875rem;padding-bottom:.6875rem}}.header .wrapper .inner .append[data-v-295b8902]{display:flex;align-items:center;justify-content:flex-end;gap:1rem;grid-area:append}.header .wrapper .inner .append .icon[data-v-295b8902]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.header .wrapper .inner .append .dropdown[data-v-295b8902] .button{margin-right:.5rem;background-color:transparent;padding:0}@media (min-width: 1024px){.header .wrapper .inner .append .dropdown[data-v-295b8902] .button{margin-right:1rem}.header[data-v-295b8902],.header .wrapper[data-v-295b8902]{height:5rem}.header .wrapper .inner[data-v-295b8902]{grid-template-areas:"logo middle append";grid-template-columns:2fr 3fr 2fr}.header .wrapper .inner.left[data-v-295b8902]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-295b8902]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-295b8902]{justify-content:center}.header .wrapper .inner.right[data-v-295b8902]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-295b8902]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-295b8902]{grid-template-areas:"logo return-info middle append";grid-template-columns:1fr 1fr 2fr 2fr}.header .wrapper .prepend[data-v-295b8902]{display:none}.header .wrapper .logo a[data-v-295b8902]{margin-left:1rem}}.tab[data-v-41d3d9f8]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(82 82 82 / var(--tw-text-opacity))}.tab .tab-count[data-v-41d3d9f8]{margin-left:.5rem;display:none;border-radius:9999px;padding:.125rem .625rem;font-size:.75rem;line-height:1rem;font-weight:500}@media (min-width: 768px){.tab .tab-count[data-v-41d3d9f8]{display:inline-block}}.tab.active[data-v-41d3d9f8]{border-color:var(--primary-light);color:var(--primary-light)}.tab[disabled=true][data-v-41d3d9f8]{cursor:not-allowed;color:var(--disabled-text)}.tab[disabled=true][data-v-41d3d9f8]:hover{color:var(--disabled-text)!important}.tab[disabled=true][data-v-41d3d9f8]:hover:not(.active){border-color:transparent!important}.tab[disabled=true].active[data-v-41d3d9f8]{border-color:var(--disabled-text)}.tabs[data-v-7fbc7dd5]{position:relative;display:flex}.tabs[data-v-7fbc7dd5]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}.tabs[data-v-7fbc7dd5]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tabs[data-v-7fbc7dd5]:after{position:absolute;left:0;right:0;bottom:0;height:1px;--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));--tw-content: "";content:var(--tw-content)}.tabs[data-v-7fbc7dd5] .tab{cursor:pointer;white-space:nowrap;border-bottom-width:2px;padding:1rem .25rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.tabs[data-v-7fbc7dd5] .tab:not(.active){border-color:transparent;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.tabs[data-v-7fbc7dd5] .tab:hover:not(.active){--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.tabs[data-v-7fbc7dd5] .tab:hover:not(.active):hover{--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity))}.tabs[data-v-7fbc7dd5] .tab .tab-count{border-width:1px}.page-header h1[data-v-434d880b]{font-size:1.5rem;line-height:2rem}@media (min-width: 768px){.page-header h1[data-v-434d880b]{font-size:1.75rem}}.page-header .tabs[data-v-434d880b]{margin-bottom:2rem}.page-header .heading[data-v-434d880b]{margin-bottom:1rem;display:flex;align-items:center}@media (min-width: 768px){.page-header .heading[data-v-434d880b]{margin-bottom:1.25rem}}.page-header .heading .actions[data-v-434d880b]{margin-left:auto;display:flex;gap:.5rem}.page-header .filters[data-v-434d880b]{display:flex;align-items:center;gap:.5rem;overflow:auto;padding-bottom:.5rem}@media (min-width: 768px){.page-header .filters[data-v-434d880b]{gap:1.5rem}}.page-header .filters .search[data-v-434d880b]{min-width:12rem}@media (min-width: 1024px){.page-header .filters .search[data-v-434d880b]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-434d880b]{flex-wrap:nowrap}.sidebar[data-v-8f7f346a]{height:100%;width:100%;max-width:14.5rem}.sidebar.mini[data-v-8f7f346a]{width:2.25rem}.sidebar.mini .menu[data-v-8f7f346a]{width:-moz-fit-content;width:fit-content}.menu[data-v-8f7f346a]{gap:.25rem;--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity))}.summary[data-v-15250c0d]{width:var(--5436127c);max-width:100%}.summary-group[data-v-d2ad643f]{padding-top:.5rem;padding-bottom:.5rem}.summary-group .header[data-v-d2ad643f]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.summary-group .header.expandable[data-v-d2ad643f]{cursor:pointer}.summary-group .header .name[data-v-d2ad643f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;font-weight:500}.summary-group .header[data-v-d2ad643f] .icon{height:1.25rem;width:1.25rem}.summary-group .items[data-v-d2ad643f]{display:flex;flex-direction:column;gap:.5rem;border-left-width:4px;padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;animation:fadeIn-d2ad643f .3s}.grow-enter-active[data-v-d2ad643f],.grow-leave-active[data-v-d2ad643f]{transition-property:all;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.grow-enter-from[data-v-d2ad643f],.grow-leave-to[data-v-d2ad643f]{height:0px!important;padding-top:0!important;padding-bottom:0!important;opacity:0!important}@keyframes fadeIn-d2ad643f{0%{opacity:0}to{opacity:1}}.summary-item[data-v-a4a5bb69]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem}.summary-item a[href][data-v-a4a5bb69]:hover{text-decoration-line:underline}.hamburger-icon[data-v-08328666]{cursor:pointer}.linear-progress[data-v-c11bf9e5]{display:flex;width:100%;align-items:center;gap:.5rem;font-size:.75rem;line-height:1rem}.linear-progress .wrapper[data-v-c11bf9e5]{display:flex;width:100%;flex-direction:column;gap:.25rem}.linear-progress .wrapper .progress-bar[data-v-c11bf9e5]{height:.375rem;width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-c11bf9e5]{height:100%;width:100%;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.5s;transition-timing-function:linear}.linear-progress .wrapper .progress-bar.blue[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.green[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.green .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.gray[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.orange[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.purple[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(168 85 247 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.red[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.red .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.yellow[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-c11bf9e5]{--tw-bg-opacity: 1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.linear-progress .append[data-v-c11bf9e5]{min-width:2.25rem}[data-v-07efd5c8] .progress{transition-duration:var(--4ad37437)!important}.toast[data-v-07efd5c8]{position:relative;z-index:100;width:100%;max-width:24rem;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.toast .wrapper[data-v-07efd5c8]{display:flex;padding:1rem}.toast .linear-progress[data-v-07efd5c8] .progress-bar{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.toast.is-absolute[data-v-07efd5c8]{position:absolute;top:.25rem;right:.25rem}.toast .type-icon[data-v-07efd5c8]{margin-right:.75rem;flex-shrink:0}.toast .content[data-v-07efd5c8]{display:flex;flex-direction:column;padding-right:1.5rem;font-size:.875rem;line-height:1.25rem}.toast .content .title[data-v-07efd5c8]{margin-bottom:.25rem;font-weight:500}.toast .content .description[data-v-07efd5c8]{margin-bottom:1rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.toast .content .actions[data-v-07efd5c8]{display:flex;gap:.5rem}.toast .close[data-v-07efd5c8]{position:absolute;top:.5rem;right:0}.toast .close .mini-icon[data-v-07efd5c8]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.close:hover .mini-icon[data-v-07efd5c8]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.error .type-icon[data-v-07efd5c8]{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.warning .type-icon[data-v-07efd5c8]{--tw-text-opacity: 1;color:rgb(249 115 22 / var(--tw-text-opacity))}.success .type-icon[data-v-07efd5c8]{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity))}.info .type-icon[data-v-07efd5c8]{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity))}.fade-leave-from[data-v-07efd5c8]{height:var(--52d1f6ec)}.fade-leave-to[data-v-07efd5c8]{height:0px}.fade-enter-from[data-v-07efd5c8],.fade-leave-to[data-v-07efd5c8]{--tw-translate-x: 15rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.fade-enter-to[data-v-07efd5c8],.fade-leave-from[data-v-07efd5c8]{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.fade-enter-active[data-v-07efd5c8],.fade-leave-active[data-v-07efd5c8]{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.toast-group[data-v-94261a4f]{position:fixed;top:0;right:0;z-index:50;display:flex;max-height:100vh;flex-direction:column;gap:1rem;overflow-y:auto;overflow-x:hidden;padding:1rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;scrollbar-width:none}.page-layout{position:relative}.page-layout .wrap{margin-left:auto;margin-right:auto;display:flex;height:100%;flex-direction:column;gap:1.25rem}@media (min-width: 1024px){.page-layout .wrap{max-width:100.4375rem;flex-direction:row;padding-left:1rem;padding-right:1rem}}@media (min-width: 1280px){.page-layout .wrap{gap:5rem}}.page-layout.layout-mirrored .main{order:1}.page-layout.layout-mirrored .sidebar-left{order:2}.page-layout .sidebar{position:sticky;margin-top:1.5rem;margin-bottom:1rem;height:100%;top:var(--d02f76f2)}.page-layout .sidebar-left{display:none}@media (min-width: 1024px){.page-layout .sidebar-left{display:block}}.page-layout .sidebar-right{padding:1rem}@media (min-width: 1024px){.page-layout .sidebar-right{padding:0}}.page-layout .main{min-width:0px;flex-grow:1;padding:1rem}@media (min-width: 1024px){.page-layout .main{padding-top:2.5rem;padding-bottom:2.5rem}}.step-connector[data-v-c5084711]:not(.absolute){flex:1 1 0%}.step-connector.absolute[data-v-c5084711]{left:calc(-50% + 11px);right:calc(50% + 11px);top:9.1px}.step-connector .horizontal-line[data-v-c5084711]{display:block;border-top-width:.4rem;--tw-border-opacity: 1;border-color:rgb(245 245 245 / var(--tw-border-opacity))}.step[data-v-74954ede]:not(.xs){position:relative;display:flex;flex:1 1 0%;flex-direction:column;align-items:center}.step .step-content[data-v-74954ede]{display:flex;flex-direction:column;align-items:center}.step .step-content .step-state[data-v-74954ede]{position:relative;z-index:1;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.25rem}.step .step-content .step-state.active[data-v-74954ede]:before{position:absolute;z-index:1;height:2.5rem;width:2.5rem;border-radius:9999px;opacity:.1;--tw-content: "";content:var(--tw-content)}.step .step-content .step-state .micro-icon[data-v-74954ede]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.step .step-content .label[data-v-74954ede]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.step .step-content .label.unfinished[data-v-74954ede]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.stepper[data-v-120c7d6f]{z-index:1}.stepper.xs .wrapper[data-v-120c7d6f]{align-items:center}.stepper.xs .wrapper[data-v-120c7d6f] .step-connector:first-child .horizontal-line{border-top-left-radius:9999px;border-bottom-left-radius:9999px}.stepper.xs .wrapper[data-v-120c7d6f] .step-connector:last-child .horizontal-line{border-top-right-radius:9999px;border-bottom-right-radius:9999px}.stepper[data-v-120c7d6f]:not(.xs){justify-content:space-between}.stepper.default[data-v-120c7d6f] .step-connector .active{border-color:var(--primary)}.stepper.default[data-v-120c7d6f] .step-state.finished,.stepper.default[data-v-120c7d6f] .step-state.active,.stepper.default[data-v-120c7d6f] .step-state.active:before{background-color:var(--primary)}.stepper.default[data-v-120c7d6f] .step-state .icon{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.stepper.error[data-v-120c7d6f] .step-connector .active{border-color:var(--error-tertiary)}.stepper.error[data-v-120c7d6f] .step-state.finished,.stepper.error[data-v-120c7d6f] .step-state.active,.stepper.error[data-v-120c7d6f] .step-state.active:before{background-color:var(--error-tertiary)}.stepper.error[data-v-120c7d6f] .step-state .icon{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.stepper.warning[data-v-120c7d6f] .step-connector .active{--tw-border-opacity: 1;border-color:rgb(251 191 36 / var(--tw-border-opacity))}.stepper.warning[data-v-120c7d6f] .step-state.finished,.stepper.warning[data-v-120c7d6f] .step-state.active,.stepper.warning[data-v-120c7d6f] .step-state.active:before{--tw-bg-opacity: 1;background-color:rgb(251 191 36 / var(--tw-bg-opacity))}.stepper.warning[data-v-120c7d6f] .step-state .icon{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.stepper.success[data-v-120c7d6f] .step-connector .active{border-color:var(--success-tertiary)}.stepper.success[data-v-120c7d6f] .step-state.finished,.stepper.success[data-v-120c7d6f] .step-state.active,.stepper.success[data-v-120c7d6f] .step-state.active:before{background-color:var(--success-tertiary)}.stepper.success[data-v-120c7d6f] .step-state .icon{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.stepper.disabled[data-v-120c7d6f] .step-connector .active{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity))}.stepper.disabled[data-v-120c7d6f] .step-state.finished,.stepper.disabled[data-v-120c7d6f] .step-state.active,.stepper.disabled[data-v-120c7d6f] .step-state.active:before{--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity))}.stepper.disabled[data-v-120c7d6f] .step-state.active:before{--tw-bg-opacity: 1;background-color:rgb(163 163 163 / var(--tw-bg-opacity))}.stepper.disabled[data-v-120c7d6f] .step-state .icon{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.stepper .wrapper[data-v-120c7d6f]{position:relative;display:flex;flex-direction:row}.stepper .active-step[data-v-120c7d6f]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.filter-tabs[data-v-346140a8]{display:flex;justify-content:space-between;gap:.5625rem}.filter-tabs[data-v-346140a8] .tab{display:flex;height:2.5rem;flex-grow:1;align-items:center;justify-content:space-between;border-radius:.5rem;border-width:1px;padding-left:1rem;padding-right:.625rem}.filter-tabs[data-v-346140a8] .tab:not(.active){border-color:var(--border-primary)}.filter-tabs[data-v-346140a8] .tab .tab-count{border-width:1px}.filter-tabs[data-v-346140a8] .tab.active{border-width:2px;padding-left:.9375rem;padding-right:.5625rem}:root,:host{--primary-light: #3b82f6;--primary: #2563eb;--primary-hover: #1d4ed8;--primary-pressed: #1e40af;--secondary: #fff;--secondary-hover: rgb(250, 250, 250);--secondary-pressed: rgb(229, 229, 229);--tertiary: #eff6ff;--tertiary-hover: #dbeafe;--tertiary-pressed: #bfdbfe;--error-primary: #7b2122;--error-secondary: #d52d2f;--error-tertiary: #e73c3e;--error-accent: #fef2f2;--warning-primary: #7c2d12;--warning-secondary: #c2410c;--warning-tertiary: #f97316;--warning-accent: #fff7ed;--success-primary: #14532d;--success-secondary: #15803d;--success-tertiary: #22c55e;--success-accent: #f0fdf4;--info-primary: #1e3a8a;--info-secondary: #1d4ed8;--info-tertiary: #3b82f6;--info-accent: #eff6ff;--disabled-light: #f9fafb;--disabled: #f3f4f6;--disabled-text: #9ca3af;--border-primary: #d1d5db;--border-primary-hover: #9ca3af;--table-row-border-color: rgb(229, 229, 229);--table-header-bg: #e5e7eb}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,input:where(:not([type])):focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors: active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors: active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{border-color:transparent;background-color:currentColor}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}@media (forced-colors: active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.\\!fixed{position:fixed!important}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.-bottom-2{bottom:-.5rem}.-left-2{left:-.5rem}.-right-0{right:-0px}.-right-2{right:-.5rem}.-top-0\\.5{top:-.125rem}.-top-14{top:-3.5rem}.-top-2{top:-.5rem}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.left-0{left:0}.left-1\\/2{left:50%}.left-\\[10\\%\\]{left:10%}.left-\\[90\\%\\]{left:90%}.left-\\[calc\\(-50\\%_\\+_11px\\)\\]{left:calc(-50% + 11px)}.right-0{right:0}.right-3{right:.75rem}.right-\\[calc\\(50\\%_\\+_11px\\)\\]{right:calc(50% + 11px)}.start-1{inset-inline-start:.25rem}.top-0{top:0}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-3{top:.75rem}.top-\\[\\.5rem\\]{top:.5rem}.top-\\[1rem\\]{top:1rem}.top-\\[9\\.1px\\]{top:9.1px}.z-10{z-index:10}.z-50{z-index:50}.z-\\[1000\\]{z-index:1000}.z-\\[100\\]{z-index:100}.z-\\[1\\]{z-index:1}.z-\\[2\\]{z-index:2}.z-\\[60\\]{z-index:60}.float-right{float:right}.m-0{margin:0}.-mx-\\[\\.125rem\\]{margin-left:-.125rem;margin-right:-.125rem}.-mx-\\[1px\\]{margin-left:-1px;margin-right:-1px}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-\\[\\.3125rem\\]{margin-top:.3125rem;margin-bottom:.3125rem}.\\!mb-3{margin-bottom:.75rem!important}.\\!ms-0{margin-inline-start:0px!important}.-mr-\\[\\.5625rem\\]{margin-right:-.5625rem}.-mt-3{margin-top:-.75rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-\\[\\.125rem\\]{margin-bottom:.125rem}.ml-0{margin-left:0}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-\\[\\.125rem\\]{margin-left:.125rem}.ml-\\[\\.5625rem\\]{margin-left:.5625rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-6{margin-right:1.5rem}.mr-\\[\\.125rem\\]{margin-right:.125rem}.mt-0{margin-top:0}.mt-0\\.5{margin-top:.125rem}.mt-12{margin-top:3rem}.mt-14{margin-top:3.5rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-\\[\\.125rem\\]{margin-top:.125rem}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-row{display:table-row}.grid{display:grid}.contents{display:contents}.list-item{display:list-item}.\\!hidden{display:none!important}.hidden{display:none}.\\!h-0{height:0px!important}.\\!h-6{height:1.5rem!important}.\\!h-\\[3\\.125rem\\]{height:3.125rem!important}.h-1\\.5{height:.375rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-32{height:8rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[1\\.25rem\\]{height:1.25rem}.h-\\[10\\.25rem\\]{height:10.25rem}.h-\\[100vh\\]{height:100vh}.h-\\[18\\.75rem\\]{height:18.75rem}.h-\\[1px\\]{height:1px}.h-\\[200px\\]{height:200px}.h-\\[3\\.5rem\\]{height:3.5rem}.h-\\[300px\\]{height:300px}.h-\\[4\\.75rem\\]{height:4.75rem}.h-\\[50px\\]{height:50px}.h-\\[90vh\\]{height:90vh}.h-\\[calc\\(100vh-3\\.5rem\\)\\]{height:calc(100vh - 3.5rem)}.h-\\[unset\\]{height:unset}.h-auto{height:auto}.h-full{height:100%}.h-max{height:-moz-max-content;height:max-content}.h-min{height:-moz-min-content;height:min-content}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[100vh\\]{max-height:100vh}.max-h-\\[21\\.625rem\\]{max-height:21.625rem}.max-h-\\[24\\.625rem\\]{max-height:24.625rem}.max-h-\\[25rem\\]{max-height:25rem}.max-h-\\[300px\\]{max-height:300px}.max-h-\\[33\\.625rem\\]{max-height:33.625rem}.max-h-\\[initial\\]{max-height:initial}.min-h-\\[16\\.5rem\\]{min-height:16.5rem}.min-h-\\[3\\.5rem\\]{min-height:3.5rem}.min-h-\\[initial\\]{min-height:initial}.\\!w-\\[3\\.125rem\\]{width:3.125rem!important}.\\!w-\\[4\\.75rem\\]{width:4.75rem!important}.w-0{width:0px}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-2\\/3{width:66.666667%}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-64{width:16rem}.w-80{width:20rem}.w-\\[\\.0625rem\\]{width:.0625rem}.w-\\[16\\.5rem\\]{width:16.5rem}.w-\\[17\\.5rem\\]{width:17.5rem}.w-\\[2\\.25rem\\]{width:2.25rem}.w-\\[29\\%\\]{width:29%}.w-\\[4\\.75rem\\]{width:4.75rem}.w-\\[900px\\]{width:900px}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-24{min-width:6rem}.min-w-\\[1\\.25rem\\]{min-width:1.25rem}.min-w-\\[12rem\\]{min-width:12rem}.min-w-\\[16\\.5rem\\]{min-width:16.5rem}.min-w-\\[6\\.25rem\\]{min-width:6.25rem}.max-w-24{max-width:6rem}.max-w-\\[14\\.5rem\\]{max-width:14.5rem}.max-w-\\[150px\\]{max-width:150px}.max-w-\\[1px\\]{max-width:1px}.max-w-\\[24rem\\]{max-width:24rem}.max-w-\\[250px\\]{max-width:250px}.max-w-\\[30rem\\]{max-width:30rem}.max-w-\\[40rem\\]{max-width:40rem}.max-w-\\[6rem\\]{max-width:6rem}.max-w-\\[7\\.25rem\\]{max-width:7.25rem}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[calc\\(100\\%-4\\.75rem\\)\\]{max-width:calc(100% - 4.75rem)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-\\[1_0_5rem\\]{flex:1 0 5rem}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.origin-left-right{transform-origin:0% 50%}.-translate-x-1\\/2,.-translate-x-2\\/4{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2,.-translate-y-2\\/4{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-2{--tw-translate-x: .5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-90{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-135deg\\]{--tw-rotate: -135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-45deg\\]{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[135deg\\]{--tw-rotate: 135deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[45deg\\]{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-x-0{--tw-scale-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-x-100{--tw-scale-x: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-y-0{--tw-scale-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-y-100{--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-y-\\[0\\.6\\]{--tw-scale-y: .6;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-gpu{transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes ping{75%,to{transform:scale(2);opacity:0}}.animate-ping{animation:ping 1s cubic-bezier(0,0,.2,1) infinite}@keyframes progress{0%{transform:translate(0) scaleX(0)}40%{transform:translate(0) scaleX(.4)}to{transform:translate(100%) scaleX(.5)}}.animate-progress{animation:progress 1s infinite linear}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.\\!cursor-default{cursor:default!important}.cursor-default{cursor:default}.cursor-grabbing{cursor:grabbing}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-all{-webkit-user-select:all;-moz-user-select:all;user-select:all}.resize{resize:both}.auto-cols-fr{grid-auto-columns:minmax(0,1fr)}.grid-flow-col{grid-auto-flow:column}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-\\[\\.125rem\\]{gap:.125rem}.gap-\\[\\.5625rem\\]{gap:.5625rem}.gap-\\[\\.625rem\\]{gap:.625rem}.gap-x-1{-moz-column-gap:.25rem;column-gap:.25rem}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.gap-y-1{row-gap:.25rem}.gap-y-2{row-gap:.5rem}.gap-y-4{row-gap:1rem}.space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-clip{overflow:clip}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-x-visible{overflow-x:visible}.overflow-x-scroll{overflow-x:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-wrap{text-wrap:wrap}.text-nowrap{text-wrap:nowrap}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-\\[50\\%\\]{border-radius:50%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-xl{border-radius:.75rem}.\\!rounded-t-none{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-b-2xl{border-bottom-right-radius:1rem;border-bottom-left-radius:1rem}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-2xl{border-top-left-radius:1rem;border-top-right-radius:1rem}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-4{border-width:4px}.border-8{border-width:8px}.border-\\[\\.1875rem\\]{border-width:.1875rem}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-b-\\[\\.1875rem\\]{border-bottom-width:.1875rem}.border-l{border-left-width:1px}.border-l-0{border-left-width:0px}.border-l-4{border-left-width:4px}.border-r{border-right-width:1px}.border-r-2{border-right-width:2px}.border-t{border-top-width:1px}.border-t-0{border-top-width:0px}.border-t-\\[0\\.4rem\\]{border-top-width:.4rem}.border-solid{border-style:solid}.border-dotted{border-style:dotted}.border-none{border-style:none}.border-\\[rgba\\(149\\,115\\,22\\,_0\\.2\\)\\]{border-color:#95731633}.border-\\[rgba\\(168\\,85\\,247\\,_0\\.2\\)\\]{border-color:#a855f733}.border-\\[rgba\\(22\\,163\\,74\\,_0\\.2\\)\\]{border-color:#16a34a33}.border-\\[rgba\\(234\\,179\\,8\\,_0\\.2\\)\\]{border-color:#eab30833}.border-\\[rgba\\(239\\,68\\,68\\,_0\\.2\\)\\]{border-color:#ef444433}.border-\\[rgba\\(55\\,65\\,81\\,_0\\.2\\)\\]{border-color:#37415133}.border-\\[rgba\\(59\\,_130\\,_246\\,_0\\.2\\)\\]{border-color:#3b82f633}.border-blue-100{--tw-border-opacity: 1;border-color:rgb(219 234 254 / var(--tw-border-opacity))}.border-border-primary{border-color:var(--border-primary)}.border-border-primary-hover{border-color:var(--border-primary-hover)}.border-error-secondary{border-color:var(--error-secondary)}.border-error-tertiary{border-color:var(--error-tertiary)}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-neutral-100{--tw-border-opacity: 1;border-color:rgb(245 245 245 / var(--tw-border-opacity))}.border-neutral-200{--tw-border-opacity: 1;border-color:rgb(229 229 229 / var(--tw-border-opacity))}.border-neutral-300{--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity))}.border-primary{border-color:var(--primary)}.border-primary-light{border-color:var(--primary-light)}.border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.border-red-700{--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}.border-success-tertiary{border-color:var(--success-tertiary)}.border-transparent{border-color:transparent}.border-white\\/40{border-color:#fff6}.border-b-\\[black\\]{--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity))}.border-b-\\[white\\]{--tw-border-opacity: 1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-l-\\[black\\]{--tw-border-opacity: 1;border-left-color:rgb(0 0 0 / var(--tw-border-opacity))}.border-l-\\[white\\]{--tw-border-opacity: 1;border-left-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-r-\\[black\\]{--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity))}.border-r-\\[white\\]{--tw-border-opacity: 1;border-right-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-r-table-row-border-color{border-right-color:var(--table-row-border-color)}.border-t-\\[black\\]{--tw-border-opacity: 1;border-top-color:rgb(0 0 0 / var(--tw-border-opacity))}.border-t-\\[white\\]{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.\\!bg-transparent{background-color:transparent!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.bg-disabled{background-color:var(--disabled)}.bg-error-accent{background-color:var(--error-accent)}.bg-error-tertiary{background-color:var(--error-tertiary)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.bg-green-300{--tw-bg-opacity: 1;background-color:rgb(134 239 172 / var(--tw-bg-opacity))}.bg-info-accent{background-color:var(--info-accent)}.bg-inherit{background-color:inherit}.bg-neutral-100{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))}.bg-neutral-300{--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity))}.bg-neutral-50{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.bg-neutral-950{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity))}.bg-orange-100{--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity))}.bg-primary{background-color:var(--primary)}.bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.bg-purple-300{--tw-bg-opacity: 1;background-color:rgb(216 180 254 / var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.bg-secondary{background-color:var(--secondary)}.bg-secondary-hover{background-color:var(--secondary-hover)}.bg-slate-200{--tw-bg-opacity: 1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-table-row-border-color{background-color:var(--table-row-border-color)}.bg-tertiary{background-color:var(--tertiary)}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity: 1;background-color:rgb(253 224 71 / var(--tw-bg-opacity))}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-\\[23\\%\\]{--tw-bg-opacity: 23%}.bg-opacity-\\[4\\%\\]{--tw-bg-opacity: 4%}.bg-opacity-\\[6\\%\\]{--tw-bg-opacity: 6%}.bg-opacity-\\[8\\%\\]{--tw-bg-opacity: 8%}.bg-gradient-to-l{background-image:linear-gradient(to left,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-\\[\\#0000000D\\]{--tw-gradient-from: #0000000D var(--tw-gradient-from-position);--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.fill-error-tertiary{fill:var(--error-tertiary)}.stroke-\\[\\.125rem\\]{stroke-width:.125rem}.stroke-\\[1\\.75\\]{stroke-width:1.75}.object-cover{-o-object-fit:cover;object-fit:cover}.\\!p-4{padding:1rem!important}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-\\[\\.875rem\\]{padding:.875rem}.\\!py-0{padding-top:0!important;padding-bottom:0!important}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-7{padding-left:1.75rem;padding-right:1.75rem}.px-\\[\\.5625rem\\]{padding-left:.5625rem;padding-right:.5625rem}.px-\\[\\.625rem\\]{padding-left:.625rem;padding-right:.625rem}.px-\\[\\.6875rem\\]{padding-left:.6875rem;padding-right:.6875rem}.px-\\[\\.75rem\\]{padding-left:.75rem;padding-right:.75rem}.px-\\[\\.9375rem\\]{padding-left:.9375rem;padding-right:.9375rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-\\[\\.625rem\\]{padding-top:.625rem;padding-bottom:.625rem}.py-\\[\\.6875rem\\]{padding-top:.6875rem;padding-bottom:.6875rem}.py-\\[\\.75rem\\]{padding-top:.75rem;padding-bottom:.75rem}.py-\\[\\.9375rem\\]{padding-top:.9375rem;padding-bottom:.9375rem}.py-\\[0\\.4375rem\\]{padding-top:.4375rem;padding-bottom:.4375rem}.py-\\[9px\\]{padding-top:9px;padding-bottom:9px}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.pb-2\\.5{padding-bottom:.625rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pb-\\[1px\\]{padding-bottom:1px}.pl-1{padding-left:.25rem}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.pl-\\[\\.9375rem\\]{padding-left:.9375rem}.pl-\\[3\\.25rem\\]{padding-left:3.25rem}.pr-0{padding-right:0}.pr-2{padding-right:.5rem}.pr-\\[\\.5625rem\\]{padding-right:.5625rem}.pr-\\[\\.625rem\\]{padding-right:.625rem}.pt-0{padding-top:0}.pt-1{padding-top:.25rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.align-super{vertical-align:super}.\\!text-base{font-size:1rem!important;line-height:1.5rem!important}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\\[2rem\\]{font-size:2rem}.text-\\[4rem\\]{font-size:4rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.\\!leading-\\[1\\.2rem\\]{line-height:1.2rem!important}.leading-none{line-height:1}.\\!text-primary{color:var(--primary)!important}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.text-disabled-text{color:var(--disabled-text)}.text-error-primary{color:var(--error-primary)}.text-error-secondary{color:var(--error-secondary)}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.text-neutral-500{--tw-text-opacity: 1;color:rgb(115 115 115 / var(--tw-text-opacity))}.text-neutral-600{--tw-text-opacity: 1;color:rgb(82 82 82 / var(--tw-text-opacity))}.text-neutral-700{--tw-text-opacity: 1;color:rgb(64 64 64 / var(--tw-text-opacity))}.text-neutral-950{--tw-text-opacity: 1;color:rgb(10 10 10 / var(--tw-text-opacity))}.text-orange-700{--tw-text-opacity: 1;color:rgb(194 65 12 / var(--tw-text-opacity))}.text-primary{color:var(--primary)}.text-primary-light{color:var(--primary-light)}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-10{opacity:.1}.opacity-100{opacity:1}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-dotted{outline-style:dotted}.outline-1{outline-width:1px}.outline-\\[\\.1875rem\\]{outline-width:.1875rem}.outline-blue-500{outline-color:#3b82f6}.outline-blue-600{outline-color:#2563eb}.outline-gray-300{outline-color:#d1d5db}.outline-white{outline-color:#fff}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-\\[0_2px_4px_rgba\\(0\\,0\\,0\\,0\\.24\\)\\]{--tw-drop-shadow: drop-shadow(0 2px 4px rgba(0,0,0,.24));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.grayscale{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-\\[2px\\]{--tw-backdrop-blur: blur(2px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300,.duration-\\[\\.3s\\]{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-linear{transition-timing-function:linear}.content-\\[\\'\\'\\]{--tw-content: "";content:var(--tw-content)}.content-\\[\\'\\\\00a0\\'\\]{--tw-content: " ";content:var(--tw-content)}.\\[filter\\:drop-shadow\\(0_-1px_2px_rgb\\(0_0_0_\\/_0\\.1\\)\\)_drop-shadow\\(0_-1px_1px_rgb\\(0_0_0_\\/_0\\.06\\)\\)\\]{filter:drop-shadow(0 -1px 2px rgb(0 0 0 / .1)) drop-shadow(0 -1px 1px rgb(0 0 0 / .06))}.placeholder\\:text-disabled-text::-moz-placeholder{color:var(--disabled-text)}.placeholder\\:text-disabled-text::placeholder{color:var(--disabled-text)}.placeholder\\:text-error-primary::-moz-placeholder{color:var(--error-primary)}.placeholder\\:text-error-primary::placeholder{color:var(--error-primary)}.placeholder\\:text-gray-700::-moz-placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-gray-700::placeholder{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.placeholder\\:text-neutral-400::-moz-placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity))}.placeholder\\:text-neutral-400::placeholder{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity))}.hover\\:\\!cursor-default:hover{cursor:default!important}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:border-none:hover{border-style:none}.hover\\:border-border-primary:hover{border-color:var(--border-primary)}.hover\\:border-border-primary-hover:hover{border-color:var(--border-primary-hover)}.hover\\:bg-neutral-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 229 229 / var(--tw-bg-opacity))}.hover\\:bg-primary-hover:hover{background-color:var(--primary-hover)}.focus\\:border-2:focus{border-width:2px}.focus\\:border-primary-light:focus{border-color:var(--primary-light)}.focus\\:px-\\[15px\\]:focus{padding-left:15px;padding-right:15px}.focus\\:py-2:focus{padding-top:.5rem;padding-bottom:.5rem}.focus\\:py-3:focus{padding-top:.75rem;padding-bottom:.75rem}.focus\\:py-\\[\\.4375rem\\]:focus{padding-top:.4375rem;padding-bottom:.4375rem}.focus\\:py-\\[8px\\]:focus{padding-top:8px;padding-bottom:8px}.focus\\:pr-4:focus{padding-right:1rem}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-primary:focus{--tw-ring-color: var(--primary)}.active\\:bg-primary-pressed:active{background-color:var(--primary-pressed)}@media (min-width: 640px){.sm\\:mx-\\[5\\.75rem\\]{margin-left:5.75rem;margin-right:5.75rem}.sm\\:mb-5{margin-bottom:1.25rem}.sm\\:ml-0{margin-left:0}.sm\\:mt-2{margin-top:.5rem}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:min-h-\\[4\\.5rem\\]{min-height:4.5rem}.sm\\:\\!w-\\[8\\.5rem\\]{width:8.5rem!important}.sm\\:w-\\[16rem\\]{width:16rem}.sm\\:max-w-\\[16rem\\]{max-width:16rem}.sm\\:max-w-\\[calc\\(100\\%-10rem\\)\\]{max-width:calc(100% - 10rem)}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:gap-6{gap:1.5rem}.sm\\:overflow-visible{overflow:visible}.sm\\:rounded-2xl{border-radius:1rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width: 768px){.md\\:relative{position:relative}.md\\:mb-3{margin-bottom:.75rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-full{width:100%}.md\\:flex-row{flex-direction:row}.md\\:flex-wrap{flex-wrap:wrap}.md\\:gap-6{gap:1.5rem}.md\\:border-b-0{border-bottom-width:0px}.md\\:border-l{border-left-width:1px}.md\\:border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.md\\:p-6{padding:1.5rem}.md\\:pl-\\[1\\.0625rem\\]{padding-left:1.0625rem}.md\\:text-\\[1\\.75rem\\]{font-size:1.75rem}}@media (min-width: 1024px){.lg\\:block{display:block}.lg\\:h-6{height:1.5rem}.lg\\:w-6{width:1.5rem}.lg\\:w-auto{width:auto}.lg\\:min-w-\\[17\\.5rem\\]{min-width:17.5rem}.lg\\:max-w-\\[100\\.4375rem\\]{max-width:100.4375rem}.lg\\:justify-normal{justify-content:normal}.lg\\:justify-start{justify-content:flex-start}.lg\\:border-b-0{border-bottom-width:0px}.lg\\:p-0{padding:0}.lg\\:px-4{padding-left:1rem;padding-right:1rem}.lg\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem}.lg\\:py-\\[0\\.6875rem\\]{padding-top:.6875rem;padding-bottom:.6875rem}.lg\\:text-sm{font-size:.875rem;line-height:1.25rem}.lg\\:focus\\:py-\\[\\.6875rem\\]:focus{padding-top:.6875rem;padding-bottom:.6875rem}}@media (min-width: 1280px){.xl\\:gap-20{gap:5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}}`, ES = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [o, n] of e)
    r[o] = n;
  return r;
}, MS = { key: 1 }, TS = {
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
    }
  },
  setup(t) {
    const e = t, r = lt(new bS({ proxy: "" }));
    Le(r, () => {
      r.language && r.setLanguage(r.language);
    });
    const o = W({
      get: () => r.getConfig(),
      set: (n) => r.updateExternal ? r.setOption(n).getNextOption() : null
    });
    return Qt(() => {
      window.proboConfigurator = r, e.proxy && (r.init({ proxy: e.proxy, language: e.language, priceType: e.priceType }), e.productCode && r.setProduct(e.productCode).getNextOption());
    }), (n, a) => t.modal ? ($(), de(CS, {
      key: 0,
      part: "modal"
    }, {
      default: ve(() => [
        r.alert.title ? ($(), de(H(ci), Zo(Je({ key: 0 }, r.alert)), null, 16)) : Q("", !0),
        fe(H(jd), {
          modelValue: o.value,
          "onUpdate:modelValue": a[0] || (a[0] = (i) => o.value = i),
          template: r.options,
          "accordion-state": r.openState,
          loading: r.loading,
          "delivery-options": r.deliveryOptions
        }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options"])
      ]),
      _: 1
    })) : ($(), I("div", MS, [
      r.alert.title ? ($(), de(H(ci), Zo(Je({ key: 0 }, r.alert)), null, 16)) : Q("", !0),
      fe(H(jd), {
        modelValue: o.value,
        "onUpdate:modelValue": a[1] || (a[1] = (i) => o.value = i),
        template: r.options,
        "accordion-state": r.openState,
        loading: r.loading,
        "delivery-options": r.deliveryOptions
      }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options"])
    ]));
  }
}, AS = /* @__PURE__ */ ES(TS, [["styles", [OS]]]), IS = /* @__PURE__ */ vb(AS);
customElements.define("probo-product-configurator", IS);
