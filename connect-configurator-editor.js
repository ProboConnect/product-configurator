/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function jo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const a of e.split(",")) t[a] = 1;
  return (a) => a in t;
}
const we = {}, ya = [], ut = () => {
}, un = () => !1, Ar = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Io = (e) => e.startsWith("onUpdate:"), Ee = Object.assign, Mo = (e, t) => {
  const a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}, ns = Object.prototype.hasOwnProperty, xe = (e, t) => ns.call(e, t), te = Array.isArray, xa = (e) => Ya(e) === "[object Map]", Ca = (e) => Ya(e) === "[object Set]", si = (e) => Ya(e) === "[object Date]", de = (e) => typeof e == "function", Te = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", pn = (e) => (Se(e) || de(e)) && de(e.then) && de(e.catch), fn = Object.prototype.toString, Ya = (e) => fn.call(e), ls = (e) => Ya(e).slice(8, -1), Vr = (e) => Ya(e) === "[object Object]", No = (e) => Te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pa = /* @__PURE__ */ jo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((a) => t[a] || (t[a] = e(a)));
}, ss = /-\w/g, Le = Pr(
  (e) => e.replace(ss, (t) => t.slice(1).toUpperCase())
), ds = /\B([A-Z])/g, Ge = Pr(
  (e) => e.replace(ds, "-$1").toLowerCase()
), jr = Pr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yr = Pr(
  (e) => e ? `on${jr(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), sr = (e, ...t) => {
  for (let a = 0; a < e.length; a++)
    e[a](...t);
}, hn = (e, t, a, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: a
  });
}, Ir = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, vo = (e) => {
  const t = Te(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let di;
const Mr = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jt(e) {
  if (te(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const r = e[a], o = Te(r) ? fs(r) : Jt(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Te(e) || Se(e))
    return e;
}
const cs = /;(?![^(]*\))/g, us = /:([^]+)/, ps = /\/\*[^]*?\*\//g;
function fs(e) {
  const t = {};
  return e.replace(ps, "").split(cs).forEach((a) => {
    if (a) {
      const r = a.split(us);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function he(e) {
  let t = "";
  if (Te(e))
    t = e;
  else if (te(e))
    for (let a = 0; a < e.length; a++) {
      const r = he(e[a]);
      r && (t += r + " ");
    }
  else if (Se(e))
    for (const a in e)
      e[a] && (t += a + " ");
  return t.trim();
}
function Nr(e) {
  if (!e) return null;
  let { class: t, style: a } = e;
  return t && !Te(t) && (e.class = he(t)), a && (e.style = Jt(a)), e;
}
const hs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vs = /* @__PURE__ */ jo(hs);
function vn(e) {
  return !!e || e === "";
}
function ms(e, t) {
  if (e.length !== t.length) return !1;
  let a = !0;
  for (let r = 0; a && r < e.length; r++)
    a = da(e[r], t[r]);
  return a;
}
function da(e, t) {
  if (e === t) return !0;
  let a = si(e), r = si(t);
  if (a || r)
    return a && r ? e.getTime() === t.getTime() : !1;
  if (a = ht(e), r = ht(t), a || r)
    return e === t;
  if (a = te(e), r = te(t), a || r)
    return a && r ? ms(e, t) : !1;
  if (a = Se(e), r = Se(t), a || r) {
    if (!a || !r)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const n in e) {
      const l = e.hasOwnProperty(n), s = t.hasOwnProperty(n);
      if (l && !s || !l && s || !da(e[n], t[n]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Bo(e, t) {
  return e.findIndex((a) => da(a, t));
}
const mn = (e) => !!(e && e.__v_isRef === !0), U = (e) => Te(e) ? e : e == null ? "" : te(e) || Se(e) && (e.toString === fn || !de(e.toString)) ? mn(e) ? U(e.value) : JSON.stringify(e, gn, 2) : String(e), gn = (e, t) => mn(t) ? gn(e, t.value) : xa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (a, [r, o], i) => (a[Xr(r, i) + " =>"] = o, a),
    {}
  )
} : Ca(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((a) => Xr(a))
} : ht(t) ? Xr(t) : Se(t) && !te(t) && !Vr(t) ? String(t) : t, Xr = (e, t = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ht(e) ? `Symbol(${(a = e.description) != null ? a : t})` : e
  );
};
function gs(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ie;
class bs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, a;
      if (this.scopes)
        for (t = 0, a = this.scopes.length; t < a; t++)
          this.scopes[t].pause();
      for (t = 0, a = this.effects.length; t < a; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, a;
      if (this.scopes)
        for (t = 0, a = this.scopes.length; t < a; t++)
          this.scopes[t].resume();
      for (t = 0, a = this.effects.length; t < a; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const a = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = a;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ie, Ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ie = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let a, r;
      for (a = 0, r = this.effects.length; a < r; a++)
        this.effects[a].stop();
      for (this.effects.length = 0, a = 0, r = this.cleanups.length; a < r; a++)
        this.cleanups[a]();
      if (this.cleanups.length = 0, this.scopes) {
        for (a = 0, r = this.scopes.length; a < r; a++)
          this.scopes[a].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Lo() {
  return Ie;
}
function ws(e, t = !1) {
  Ie && Ie.cleanups.push(e);
}
let ze;
const Qr = /* @__PURE__ */ new WeakSet();
class bn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Qr.has(this) && (Qr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ci(this), xn(this);
    const t = ze, a = pt;
    ze = this, pt = !0;
    try {
      return this.fn();
    } finally {
      kn(this), ze = t, pt = a, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ro(t);
      this.deps = this.depsTail = void 0, ci(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    mo(this) && this.run();
  }
  get dirty() {
    return mo(this);
  }
}
let wn = 0, ja, Ia;
function yn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ia, Ia = e;
    return;
  }
  e.next = ja, ja = e;
}
function Do() {
  wn++;
}
function Fo() {
  if (--wn > 0)
    return;
  if (Ia) {
    let t = Ia;
    for (Ia = void 0; t; ) {
      const a = t.next;
      t.next = void 0, t.flags &= -9, t = a;
    }
  }
  let e;
  for (; ja; ) {
    let t = ja;
    for (ja = void 0; t; ) {
      const a = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = a;
    }
  }
  if (e) throw e;
}
function xn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function kn(e) {
  let t, a = e.depsTail, r = a;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === a && (a = o), Ro(r), ys(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = a;
}
function mo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (_n(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function _n(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === La) || (e.globalVersion = La, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !mo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, a = ze, r = pt;
  ze = e, pt = !0;
  try {
    xn(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ze(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ze = a, pt = r, kn(e), e.flags &= -3;
  }
}
function Ro(e, t = !1) {
  const { dep: a, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), a.subs === e && (a.subs = r, !r && a.computed)) {
    a.computed.flags &= -5;
    for (let i = a.computed.deps; i; i = i.nextDep)
      Ro(i, !0);
  }
  !t && !--a.sc && a.map && a.map.delete(a.key);
}
function ys(e) {
  const { prevDep: t, nextDep: a } = e;
  t && (t.nextDep = a, e.prevDep = void 0), a && (a.prevDep = t, e.nextDep = void 0);
}
let pt = !0;
const $n = [];
function Mt() {
  $n.push(pt), pt = !1;
}
function Nt() {
  const e = $n.pop();
  pt = e === void 0 ? !0 : e;
}
function ci(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const a = ze;
    ze = void 0;
    try {
      t();
    } finally {
      ze = a;
    }
  }
}
let La = 0;
class xs {
  constructor(t, a) {
    this.sub = t, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Br {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ze || !pt || ze === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== ze)
      a = this.activeLink = new xs(ze, this), ze.deps ? (a.prevDep = ze.depsTail, ze.depsTail.nextDep = a, ze.depsTail = a) : ze.deps = ze.depsTail = a, Sn(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const r = a.nextDep;
      r.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = r), a.prevDep = ze.depsTail, a.nextDep = void 0, ze.depsTail.nextDep = a, ze.depsTail = a, ze.deps === a && (ze.deps = r);
    }
    return a;
  }
  trigger(t) {
    this.version++, La++, this.notify(t);
  }
  notify(t) {
    Do();
    try {
      for (let a = this.subs; a; a = a.prevSub)
        a.sub.notify() && a.sub.dep.notify();
    } finally {
      Fo();
    }
  }
}
function Sn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Sn(r);
    }
    const a = e.dep.subs;
    a !== e && (e.prevSub = a, a && (a.nextSub = e)), e.dep.subs = e;
  }
}
const go = /* @__PURE__ */ new WeakMap(), na = Symbol(
  ""
), bo = Symbol(
  ""
), Da = Symbol(
  ""
);
function Me(e, t, a) {
  if (pt && ze) {
    let r = go.get(e);
    r || go.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(a);
    o || (r.set(a, o = new Br()), o.map = r, o.key = a), o.track();
  }
}
function Vt(e, t, a, r, o, i) {
  const n = go.get(e);
  if (!n) {
    La++;
    return;
  }
  const l = (s) => {
    s && s.trigger();
  };
  if (Do(), t === "clear")
    n.forEach(l);
  else {
    const s = te(e), d = s && No(a);
    if (s && a === "length") {
      const c = Number(r);
      n.forEach((u, p) => {
        (p === "length" || p === Da || !ht(p) && p >= c) && l(u);
      });
    } else
      switch ((a !== void 0 || n.has(void 0)) && l(n.get(a)), d && l(n.get(Da)), t) {
        case "add":
          s ? d && l(n.get("length")) : (l(n.get(na)), xa(e) && l(n.get(bo)));
          break;
        case "delete":
          s || (l(n.get(na)), xa(e) && l(n.get(bo)));
          break;
        case "set":
          xa(e) && l(n.get(na));
          break;
      }
  }
  Fo();
}
function ha(e) {
  const t = ye(e);
  return t === e ? t : (Me(t, "iterate", Da), nt(e) ? t : t.map(Pe));
}
function Lr(e) {
  return Me(e = ye(e), "iterate", Da), e;
}
const ks = {
  __proto__: null,
  [Symbol.iterator]() {
    return eo(this, Symbol.iterator, Pe);
  },
  concat(...e) {
    return ha(this).concat(
      ...e.map((t) => te(t) ? ha(t) : t)
    );
  },
  entries() {
    return eo(this, "entries", (e) => (e[1] = Pe(e[1]), e));
  },
  every(e, t) {
    return Et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Et(this, "filter", e, t, (a) => a.map(Pe), arguments);
  },
  find(e, t) {
    return Et(this, "find", e, t, Pe, arguments);
  },
  findIndex(e, t) {
    return Et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Et(this, "findLast", e, t, Pe, arguments);
  },
  findLastIndex(e, t) {
    return Et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return to(this, "includes", e);
  },
  indexOf(...e) {
    return to(this, "indexOf", e);
  },
  join(e) {
    return ha(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return to(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ta(this, "pop");
  },
  push(...e) {
    return Ta(this, "push", e);
  },
  reduce(e, ...t) {
    return ui(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ui(this, "reduceRight", e, t);
  },
  shift() {
    return Ta(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ta(this, "splice", e);
  },
  toReversed() {
    return ha(this).toReversed();
  },
  toSorted(e) {
    return ha(this).toSorted(e);
  },
  toSpliced(...e) {
    return ha(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ta(this, "unshift", e);
  },
  values() {
    return eo(this, "values", Pe);
  }
};
function eo(e, t, a) {
  const r = Lr(e), o = r[t]();
  return r !== e && !nt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = a(i.value)), i;
  }), o;
}
const _s = Array.prototype;
function Et(e, t, a, r, o, i) {
  const n = Lr(e), l = n !== e && !nt(e), s = n[t];
  if (s !== _s[t]) {
    const u = s.apply(e, i);
    return l ? Pe(u) : u;
  }
  let d = a;
  n !== e && (l ? d = function(u, p) {
    return a.call(this, Pe(u), p, e);
  } : a.length > 2 && (d = function(u, p) {
    return a.call(this, u, p, e);
  }));
  const c = s.call(n, d, r);
  return l && o ? o(c) : c;
}
function ui(e, t, a, r) {
  const o = Lr(e);
  let i = a;
  return o !== e && (nt(e) ? a.length > 3 && (i = function(n, l, s) {
    return a.call(this, n, l, s, e);
  }) : i = function(n, l, s) {
    return a.call(this, n, Pe(l), s, e);
  }), o[t](i, ...r);
}
function to(e, t, a) {
  const r = ye(e);
  Me(r, "iterate", Da);
  const o = r[t](...a);
  return (o === -1 || o === !1) && Ho(a[0]) ? (a[0] = ye(a[0]), r[t](...a)) : o;
}
function Ta(e, t, a = []) {
  Mt(), Do();
  const r = ye(e)[t].apply(e, a);
  return Fo(), Nt(), r;
}
const $s = /* @__PURE__ */ jo("__proto__,__v_isRef,__isVue"), Cn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
);
function Ss(e) {
  ht(e) || (e = String(e));
  const t = ye(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class zn {
  constructor(t = !1, a = !1) {
    this._isReadonly = t, this._isShallow = a;
  }
  get(t, a, r) {
    if (a === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (a === "__v_isReactive")
      return !o;
    if (a === "__v_isReadonly")
      return o;
    if (a === "__v_isShallow")
      return i;
    if (a === "__v_raw")
      return r === (o ? i ? Is : An : i ? On : Tn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const n = te(t);
    if (!o) {
      let s;
      if (n && (s = ks[a]))
        return s;
      if (a === "hasOwnProperty")
        return Ss;
    }
    const l = Reflect.get(
      t,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ae(t) ? t : r
    );
    if ((ht(a) ? Cn.has(a) : $s(a)) || (o || Me(t, "get", a), i))
      return l;
    if (Ae(l)) {
      const s = n && No(a) ? l : l.value;
      return o && Se(s) ? yo(s) : s;
    }
    return Se(l) ? o ? yo(l) : Je(l) : l;
  }
}
class En extends zn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, a, r, o) {
    let i = t[a];
    if (!this._isShallow) {
      const s = Bt(i);
      if (!nt(r) && !Bt(r) && (i = ye(i), r = ye(r)), !te(t) && Ae(i) && !Ae(r))
        return s || (i.value = r), !0;
    }
    const n = te(t) && No(a) ? Number(a) < t.length : xe(t, a), l = Reflect.set(
      t,
      a,
      r,
      Ae(t) ? t : o
    );
    return t === ye(o) && (n ? Ze(r, i) && Vt(t, "set", a, r) : Vt(t, "add", a, r)), l;
  }
  deleteProperty(t, a) {
    const r = xe(t, a);
    t[a];
    const o = Reflect.deleteProperty(t, a);
    return o && r && Vt(t, "delete", a, void 0), o;
  }
  has(t, a) {
    const r = Reflect.has(t, a);
    return (!ht(a) || !Cn.has(a)) && Me(t, "has", a), r;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      te(t) ? "length" : na
    ), Reflect.ownKeys(t);
  }
}
class Cs extends zn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, a) {
    return !0;
  }
  deleteProperty(t, a) {
    return !0;
  }
}
const zs = /* @__PURE__ */ new En(), Es = /* @__PURE__ */ new Cs(), Ts = /* @__PURE__ */ new En(!0);
const wo = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function Os(e, t, a) {
  return function(...r) {
    const o = this.__v_raw, i = ye(o), n = xa(i), l = e === "entries" || e === Symbol.iterator && n, s = e === "keys" && n, d = o[e](...r), c = a ? wo : t ? vr : Pe;
    return !t && Me(
      i,
      "iterate",
      s ? bo : na
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = d.next();
        return p ? { value: u, done: p } : {
          value: l ? [c(u[0]), c(u[1])] : c(u),
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
function rr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function As(e, t) {
  const a = {
    get(o) {
      const i = this.__v_raw, n = ye(i), l = ye(o);
      e || (Ze(o, l) && Me(n, "get", o), Me(n, "get", l));
      const { has: s } = ar(n), d = t ? wo : e ? vr : Pe;
      if (s.call(n, o))
        return d(i.get(o));
      if (s.call(n, l))
        return d(i.get(l));
      i !== n && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Me(ye(o), "iterate", na), o.size;
    },
    has(o) {
      const i = this.__v_raw, n = ye(i), l = ye(o);
      return e || (Ze(o, l) && Me(n, "has", o), Me(n, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const n = this, l = n.__v_raw, s = ye(l), d = t ? wo : e ? vr : Pe;
      return !e && Me(s, "iterate", na), l.forEach((c, u) => o.call(i, d(c), d(u), n));
    }
  };
  return Ee(
    a,
    e ? {
      add: rr("add"),
      set: rr("set"),
      delete: rr("delete"),
      clear: rr("clear")
    } : {
      add(o) {
        !t && !nt(o) && !Bt(o) && (o = ye(o));
        const i = ye(this);
        return ar(i).has.call(i, o) || (i.add(o), Vt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !nt(i) && !Bt(i) && (i = ye(i));
        const n = ye(this), { has: l, get: s } = ar(n);
        let d = l.call(n, o);
        d || (o = ye(o), d = l.call(n, o));
        const c = s.call(n, o);
        return n.set(o, i), d ? Ze(i, c) && Vt(n, "set", o, i) : Vt(n, "add", o, i), this;
      },
      delete(o) {
        const i = ye(this), { has: n, get: l } = ar(i);
        let s = n.call(i, o);
        s || (o = ye(o), s = n.call(i, o)), l && l.call(i, o);
        const d = i.delete(o);
        return s && Vt(i, "delete", o, void 0), d;
      },
      clear() {
        const o = ye(this), i = o.size !== 0, n = o.clear();
        return i && Vt(
          o,
          "clear",
          void 0,
          void 0
        ), n;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    a[o] = Os(o, e, t);
  }), a;
}
function Uo(e, t) {
  const a = As(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    xe(a, o) && o in r ? a : r,
    o,
    i
  );
}
const Vs = {
  get: /* @__PURE__ */ Uo(!1, !1)
}, Ps = {
  get: /* @__PURE__ */ Uo(!1, !0)
}, js = {
  get: /* @__PURE__ */ Uo(!0, !1)
};
const Tn = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap();
function Ms(e) {
  switch (e) {
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
function Ns(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ms(ls(e));
}
function Je(e) {
  return Bt(e) ? e : qo(
    e,
    !1,
    zs,
    Vs,
    Tn
  );
}
function Bs(e) {
  return qo(
    e,
    !1,
    Ts,
    Ps,
    On
  );
}
function yo(e) {
  return qo(
    e,
    !0,
    Es,
    js,
    An
  );
}
function qo(e, t, a, r, o) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Ns(e);
  if (i === 0)
    return e;
  const n = o.get(e);
  if (n)
    return n;
  const l = new Proxy(
    e,
    i === 2 ? r : a
  );
  return o.set(e, l), l;
}
function la(e) {
  return Bt(e) ? la(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Bt(e) {
  return !!(e && e.__v_isReadonly);
}
function nt(e) {
  return !!(e && e.__v_isShallow);
}
function Ho(e) {
  return e ? !!e.__v_raw : !1;
}
function ye(e) {
  const t = e && e.__v_raw;
  return t ? ye(t) : e;
}
function Ls(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && hn(e, "__v_skip", !0), e;
}
const Pe = (e) => Se(e) ? Je(e) : e, vr = (e) => Se(e) ? yo(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Y(e) {
  return Vn(e, !1);
}
function St(e) {
  return Vn(e, !0);
}
function Vn(e, t) {
  return Ae(e) ? e : new Ds(e, t);
}
class Ds {
  constructor(t, a) {
    this.dep = new Br(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? t : ye(t), this._value = a ? t : Pe(t), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const a = this._rawValue, r = this.__v_isShallow || nt(t) || Bt(t);
    t = r ? t : ye(t), Ze(t, a) && (this._rawValue = t, this._value = r ? t : Pe(t), this.dep.trigger());
  }
}
function pi(e) {
  e.dep && e.dep.trigger();
}
function k(e) {
  return Ae(e) ? e.value : e;
}
function lt(e) {
  return de(e) ? e() : k(e);
}
const Fs = {
  get: (e, t, a) => t === "__v_raw" ? e : k(Reflect.get(e, t, a)),
  set: (e, t, a, r) => {
    const o = e[t];
    return Ae(o) && !Ae(a) ? (o.value = a, !0) : Reflect.set(e, t, a, r);
  }
};
function Pn(e) {
  return la(e) ? e : new Proxy(e, Fs);
}
class Rs {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const a = this.dep = new Br(), { get: r, set: o } = t(a.track.bind(a), a.trigger.bind(a));
    this._get = r, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Us(e) {
  return new Rs(e);
}
class qs {
  constructor(t, a, r) {
    this.fn = t, this.setter = a, this._value = void 0, this.dep = new Br(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = La - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ze !== this)
      return yn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return _n(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Hs(e, t, a = !1) {
  let r, o;
  return de(e) ? r = e : (r = e.get, o = e.set), new qs(r, o, a);
}
const or = {}, mr = /* @__PURE__ */ new WeakMap();
let ra;
function Ks(e, t = !1, a = ra) {
  if (a) {
    let r = mr.get(a);
    r || mr.set(a, r = []), r.push(e);
  }
}
function Ws(e, t, a = we) {
  const { immediate: r, deep: o, once: i, scheduler: n, augmentJob: l, call: s } = a, d = (m) => o ? m : nt(m) || o === !1 || o === 0 ? Pt(m, 1) : Pt(m);
  let c, u, p, h, f = !1, w = !1;
  if (Ae(e) ? (u = () => e.value, f = nt(e)) : la(e) ? (u = () => d(e), f = !0) : te(e) ? (w = !0, f = e.some((m) => la(m) || nt(m)), u = () => e.map((m) => {
    if (Ae(m))
      return m.value;
    if (la(m))
      return d(m);
    if (de(m))
      return s ? s(m, 2) : m();
  })) : de(e) ? t ? u = s ? () => s(e, 2) : e : u = () => {
    if (p) {
      Mt();
      try {
        p();
      } finally {
        Nt();
      }
    }
    const m = ra;
    ra = c;
    try {
      return s ? s(e, 3, [h]) : e(h);
    } finally {
      ra = m;
    }
  } : u = ut, t && o) {
    const m = u, S = o === !0 ? 1 / 0 : o;
    u = () => Pt(m(), S);
  }
  const _ = Lo(), b = () => {
    c.stop(), _ && _.active && Mo(_.effects, c);
  };
  if (i && t) {
    const m = t;
    t = (...S) => {
      m(...S), b();
    };
  }
  let $ = w ? new Array(e.length).fill(or) : or;
  const x = (m) => {
    if (!(!(c.flags & 1) || !c.dirty && !m))
      if (t) {
        const S = c.run();
        if (o || f || (w ? S.some((P, ae) => Ze(P, $[ae])) : Ze(S, $))) {
          p && p();
          const P = ra;
          ra = c;
          try {
            const ae = [
              S,
              // pass undefined as the old value when it's changed for the first time
              $ === or ? void 0 : w && $[0] === or ? [] : $,
              h
            ];
            $ = S, s ? s(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            ra = P;
          }
        }
      } else
        c.run();
  };
  return l && l(x), c = new bn(u), c.scheduler = n ? () => n(x, !1) : x, h = (m) => Ks(m, !1, c), p = c.onStop = () => {
    const m = mr.get(c);
    if (m) {
      if (s)
        s(m, 4);
      else
        for (const S of m) S();
      mr.delete(c);
    }
  }, t ? r ? x(!0) : $ = c.run() : n ? n(x.bind(null, !0), !0) : c.run(), b.pause = c.pause.bind(c), b.resume = c.resume.bind(c), b.stop = b, b;
}
function Pt(e, t = 1 / 0, a) {
  if (t <= 0 || !Se(e) || e.__v_skip || (a = a || /* @__PURE__ */ new Map(), (a.get(e) || 0) >= t))
    return e;
  if (a.set(e, t), t--, Ae(e))
    Pt(e.value, t, a);
  else if (te(e))
    for (let r = 0; r < e.length; r++)
      Pt(e[r], t, a);
  else if (Ca(e) || xa(e))
    e.forEach((r) => {
      Pt(r, t, a);
    });
  else if (Vr(e)) {
    for (const r in e)
      Pt(e[r], t, a);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Pt(e[r], t, a);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xa(e, t, a, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Dr(o, t, a);
  }
}
function vt(e, t, a, r) {
  if (de(e)) {
    const o = Xa(e, t, a, r);
    return o && pn(o) && o.catch((i) => {
      Dr(i, t, a);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(vt(e[i], t, a, r));
    return o;
  }
}
function Dr(e, t, a, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: n } = t && t.appContext.config || we;
  if (t) {
    let l = t.parent;
    const s = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Mt(), Xa(i, null, 10, [
        e,
        s,
        d
      ]), Nt();
      return;
    }
  }
  Zs(e, a, o, r, n);
}
function Zs(e, t, a, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Re = [];
let xt = -1;
const ka = [];
let Ft = null, ba = 0;
const jn = /* @__PURE__ */ Promise.resolve();
let gr = null;
function Ct(e) {
  const t = gr || jn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gs(e) {
  let t = xt + 1, a = Re.length;
  for (; t < a; ) {
    const r = t + a >>> 1, o = Re[r], i = Fa(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : a = r;
  }
  return t;
}
function Ko(e) {
  if (!(e.flags & 1)) {
    const t = Fa(e), a = Re[Re.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Fa(a) ? Re.push(e) : Re.splice(Gs(t), 0, e), e.flags |= 1, In();
  }
}
function In() {
  gr || (gr = jn.then(Bn));
}
function Mn(e) {
  te(e) ? ka.push(...e) : Ft && e.id === -1 ? Ft.splice(ba + 1, 0, e) : e.flags & 1 || (ka.push(e), e.flags |= 1), In();
}
function fi(e, t, a = xt + 1) {
  for (; a < Re.length; a++) {
    const r = Re[a];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Re.splice(a, 1), a--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Nn(e) {
  if (ka.length) {
    const t = [...new Set(ka)].sort(
      (a, r) => Fa(a) - Fa(r)
    );
    if (ka.length = 0, Ft) {
      Ft.push(...t);
      return;
    }
    for (Ft = t, ba = 0; ba < Ft.length; ba++) {
      const a = Ft[ba];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    Ft = null, ba = 0;
  }
}
const Fa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bn(e) {
  try {
    for (xt = 0; xt < Re.length; xt++) {
      const t = Re[xt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xt < Re.length; xt++) {
      const t = Re[xt];
      t && (t.flags &= -2);
    }
    xt = -1, Re.length = 0, Nn(), gr = null, (Re.length || ka.length) && Bn();
  }
}
let je = null, Ln = null;
function br(e) {
  const t = je;
  return je = e, Ln = e && e.type.__scopeId || null, t;
}
function B(e, t = je, a) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && kr(-1);
    const i = br(t);
    let n;
    try {
      n = e(...o);
    } finally {
      br(i), r._d && kr(1);
    }
    return n;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ca(e, t) {
  if (je === null)
    return e;
  const a = Wr(je), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, n, l, s = we] = t[o];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Pt(n), r.push({
      dir: i,
      instance: a,
      value: n,
      oldValue: void 0,
      arg: l,
      modifiers: s
    }));
  }
  return e;
}
function Qt(e, t, a, r) {
  const o = e.dirs, i = t && t.dirs;
  for (let n = 0; n < o.length; n++) {
    const l = o[n];
    i && (l.oldValue = i[n].value);
    let s = l.dir[r];
    s && (Mt(), vt(s, a, 8, [
      e.el,
      l,
      e,
      t
    ]), Nt());
  }
}
const Js = Symbol("_vte"), Dn = (e) => e.__isTeleport, At = Symbol("_leaveCb"), ir = Symbol("_enterCb");
function Ys() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return dt(() => {
    e.isMounted = !0;
  }), pa(() => {
    e.isUnmounting = !0;
  }), e;
}
const at = [Function, Array], Fn = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: at,
  onEnter: at,
  onAfterEnter: at,
  onEnterCancelled: at,
  // leave
  onBeforeLeave: at,
  onLeave: at,
  onAfterLeave: at,
  onLeaveCancelled: at,
  // appear
  onBeforeAppear: at,
  onAppear: at,
  onAfterAppear: at,
  onAppearCancelled: at
}, Rn = (e) => {
  const t = e.subTree;
  return t.component ? Rn(t.component) : t;
}, Xs = {
  name: "BaseTransition",
  props: Fn,
  setup(e, { slots: t }) {
    const a = mt(), r = Ys();
    return () => {
      const o = t.default && Hn(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Un(o), n = ye(e), { mode: l } = n;
      if (r.isLeaving)
        return ao(i);
      const s = hi(i);
      if (!s)
        return ao(i);
      let d = xo(
        s,
        n,
        r,
        a,
        // #11061, ensure enterHooks is fresh after clone
        (u) => d = u
      );
      s.type !== Ne && Ra(s, d);
      let c = a.subTree && hi(a.subTree);
      if (c && c.type !== Ne && !oa(c, s) && Rn(a).type !== Ne) {
        let u = xo(
          c,
          n,
          r,
          a
        );
        if (Ra(c, u), l === "out-in" && s.type !== Ne)
          return r.isLeaving = !0, u.afterLeave = () => {
            r.isLeaving = !1, a.job.flags & 8 || a.update(), delete u.afterLeave, c = void 0;
          }, ao(i);
        l === "in-out" && s.type !== Ne ? u.delayLeave = (p, h, f) => {
          const w = qn(
            r,
            c
          );
          w[String(c.key)] = c, p[At] = () => {
            h(), p[At] = void 0, delete d.delayedLeave, c = void 0;
          }, d.delayedLeave = () => {
            f(), delete d.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Un(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const a of e)
      if (a.type !== Ne) {
        t = a;
        break;
      }
  }
  return t;
}
const Qs = Xs;
function qn(e, t) {
  const { leavingVNodes: a } = e;
  let r = a.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), a.set(t.type, r)), r;
}
function xo(e, t, a, r, o) {
  const {
    appear: i,
    mode: n,
    persisted: l = !1,
    onBeforeEnter: s,
    onEnter: d,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: f,
    onLeaveCancelled: w,
    onBeforeAppear: _,
    onAppear: b,
    onAfterAppear: $,
    onAppearCancelled: x
  } = t, m = String(e.key), S = qn(a, e), P = (Q, G) => {
    Q && vt(
      Q,
      r,
      9,
      G
    );
  }, ae = (Q, G) => {
    const ne = G[1];
    P(Q, G), te(Q) ? Q.every((F) => F.length <= 1) && ne() : Q.length <= 1 && ne();
  }, X = {
    mode: n,
    persisted: l,
    beforeEnter(Q) {
      let G = s;
      if (!a.isMounted)
        if (i)
          G = _ || s;
        else
          return;
      Q[At] && Q[At](
        !0
        /* cancelled */
      );
      const ne = S[m];
      ne && oa(e, ne) && ne.el[At] && ne.el[At](), P(G, [Q]);
    },
    enter(Q) {
      let G = d, ne = c, F = u;
      if (!a.isMounted)
        if (i)
          G = b || d, ne = $ || c, F = x || u;
        else
          return;
      let I = !1;
      const L = Q[ir] = (E) => {
        I || (I = !0, E ? P(F, [Q]) : P(ne, [Q]), X.delayedLeave && X.delayedLeave(), Q[ir] = void 0);
      };
      G ? ae(G, [Q, L]) : L();
    },
    leave(Q, G) {
      const ne = String(e.key);
      if (Q[ir] && Q[ir](
        !0
        /* cancelled */
      ), a.isUnmounting)
        return G();
      P(p, [Q]);
      let F = !1;
      const I = Q[At] = (L) => {
        F || (F = !0, G(), L ? P(w, [Q]) : P(f, [Q]), Q[At] = void 0, S[ne] === e && delete S[ne]);
      };
      S[ne] = e, h ? ae(h, [Q, I]) : I();
    },
    clone(Q) {
      const G = xo(
        Q,
        t,
        a,
        r,
        o
      );
      return o && o(G), G;
    }
  };
  return X;
}
function ao(e) {
  if (Fr(e))
    return e = Ht(e), e.children = null, e;
}
function hi(e) {
  if (!Fr(e))
    return Dn(e.type) && e.children ? Un(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: a } = e;
  if (a) {
    if (t & 16)
      return a[0];
    if (t & 32 && de(a.default))
      return a.default();
  }
}
function Ra(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ra(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Hn(e, t = !1, a) {
  let r = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    const l = a == null ? n.key : String(a) + String(n.key != null ? n.key : i);
    n.type === _e ? (n.patchFlag & 128 && o++, r = r.concat(
      Hn(n.children, t, l)
    )) : (t || n.type !== Ne) && r.push(l != null ? Ht(n, { key: l }) : n);
  }
  if (o > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function ed(e, t) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ee({ name: e.name }, t, { setup: e })
  ) : e;
}
function Kn(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Qa(e) {
  const t = mt(), a = St(null);
  if (t) {
    const o = t.refs === we ? t.refs = {} : t.refs;
    Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    });
  }
  return a;
}
const wr = /* @__PURE__ */ new WeakMap();
function Ma(e, t, a, r, o = !1) {
  if (te(e)) {
    e.forEach(
      (f, w) => Ma(
        f,
        t && (te(t) ? t[w] : t),
        a,
        r,
        o
      )
    );
    return;
  }
  if (_a(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ma(e, t, a, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Wr(r.component) : r.el, n = o ? null : i, { i: l, r: s } = e, d = t && t.r, c = l.refs === we ? l.refs = {} : l.refs, u = l.setupState, p = ye(u), h = u === we ? un : (f) => xe(p, f);
  if (d != null && d !== s) {
    if (vi(t), Te(d))
      c[d] = null, h(d) && (u[d] = null);
    else if (Ae(d)) {
      d.value = null;
      const f = t;
      f.k && (c[f.k] = null);
    }
  }
  if (de(s))
    Xa(s, l, 12, [n, c]);
  else {
    const f = Te(s), w = Ae(s);
    if (f || w) {
      const _ = () => {
        if (e.f) {
          const b = f ? h(s) ? u[s] : c[s] : s.value;
          if (o)
            te(b) && Mo(b, i);
          else if (te(b))
            b.includes(i) || b.push(i);
          else if (f)
            c[s] = [i], h(s) && (u[s] = c[s]);
          else {
            const $ = [i];
            s.value = $, e.k && (c[e.k] = $);
          }
        } else f ? (c[s] = n, h(s) && (u[s] = n)) : w && (s.value = n, e.k && (c[e.k] = n));
      };
      if (n) {
        const b = () => {
          _(), wr.delete(e);
        };
        b.id = -1, wr.set(e, b), Xe(b, a);
      } else
        vi(e), _();
    }
  }
}
function vi(e) {
  const t = wr.get(e);
  t && (t.flags |= 8, wr.delete(e));
}
Mr().requestIdleCallback;
Mr().cancelIdleCallback;
const _a = (e) => !!e.type.__asyncLoader, Fr = (e) => e.type.__isKeepAlive;
function td(e, t) {
  Wn(e, "a", t);
}
function ad(e, t) {
  Wn(e, "da", t);
}
function Wn(e, t, a = Be) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = a;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Rr(t, r, a), a) {
    let o = a.parent;
    for (; o && o.parent; )
      Fr(o.parent.vnode) && rd(r, t, a, o), o = o.parent;
  }
}
function rd(e, t, a, r) {
  const o = Rr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ur(() => {
    Mo(r[t], o);
  }, a);
}
function Rr(e, t, a = Be, r = !1) {
  if (a) {
    const o = a[e] || (a[e] = []), i = t.__weh || (t.__weh = (...n) => {
      Mt();
      const l = er(a), s = vt(t, a, e, n);
      return l(), Nt(), s;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Lt = (e) => (t, a = Be) => {
  (!Ha || e === "sp") && Rr(e, (...r) => t(...r), a);
}, Zn = Lt("bm"), dt = Lt("m"), Gn = Lt(
  "bu"
), od = Lt("u"), pa = Lt(
  "bum"
), Ur = Lt("um"), id = Lt(
  "sp"
), nd = Lt("rtg"), ld = Lt("rtc");
function sd(e, t = Be) {
  Rr("ec", e, t);
}
const dd = "components", Jn = Symbol.for("v-ndc");
function $a(e) {
  return Te(e) ? cd(dd, e, !1) || e : e || Jn;
}
function cd(e, t, a = !0, r = !1) {
  const o = je || Be;
  if (o) {
    const i = o.type;
    {
      const l = Gd(
        i,
        !1
      );
      if (l && (l === t || l === Le(t) || l === jr(Le(t))))
        return i;
    }
    const n = (
      // local registration
      // check instance[type] first which is resolved for options API
      mi(o[e] || i[e], t) || // global registration
      mi(o.appContext[e], t)
    );
    return !n && r ? i : n;
  }
}
function mi(e, t) {
  return e && (e[t] || e[Le(t)] || e[jr(Le(t))]);
}
function qt(e, t, a, r) {
  let o;
  const i = a, n = te(e);
  if (n || Te(e)) {
    const l = n && la(e);
    let s = !1, d = !1;
    l && (s = !nt(e), d = Bt(e), e = Lr(e)), o = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++)
      o[c] = t(
        s ? d ? vr(Pe(e[c])) : Pe(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i);
  } else if (Se(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, s) => t(l, s, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let s = 0, d = l.length; s < d; s++) {
        const c = l[s];
        o[s] = t(e[c], c, s, i);
      }
    }
  else
    o = [];
  return o;
}
function ro(e, t) {
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (te(r))
      for (let o = 0; o < r.length; o++)
        e[r[o].name] = r[o].fn;
    else r && (e[r.name] = r.key ? (...o) => {
      const i = r.fn(...o);
      return i && (i.key = r.key), i;
    } : r.fn);
  }
  return e;
}
function le(e, t, a = {}, r, o) {
  if (je.ce || je.parent && _a(je.parent) && je.parent.ce) {
    const d = Object.keys(a).length > 0;
    return t !== "default" && (a.name = t), y(), ee(
      _e,
      null,
      [q("slot", a, r && r())],
      d ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), y();
  const n = i && Yn(i(a)), l = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  n && n.key, s = ee(
    _e,
    {
      key: (l && !ht(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!n && r ? "_fb" : "")
    },
    n || (r ? r() : []),
    n && e._ === 1 ? 64 : -2
  );
  return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s;
}
function Yn(e) {
  return e.some((t) => qa(t) ? !(t.type === Ne || t.type === _e && !Yn(t.children)) : !0) ? e : null;
}
const ko = (e) => e ? yl(e) ? Wr(e) : ko(e.parent) : null, Na = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ko(e.parent),
    $root: (e) => ko(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => el(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ko(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ct.bind(e.proxy)),
    $watch: (e) => Pd.bind(e)
  })
), oo = (e, t) => e !== we && !e.__isScriptSetup && xe(e, t), ud = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: a, setupState: r, data: o, props: i, accessCache: n, type: l, appContext: s } = e;
    let d;
    if (t[0] !== "$") {
      const h = n[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return a[t];
          case 3:
            return i[t];
        }
      else {
        if (oo(r, t))
          return n[t] = 1, r[t];
        if (o !== we && xe(o, t))
          return n[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && xe(d, t)
        )
          return n[t] = 3, i[t];
        if (a !== we && xe(a, t))
          return n[t] = 4, a[t];
        _o && (n[t] = 0);
      }
    }
    const c = Na[t];
    let u, p;
    if (c)
      return t === "$attrs" && Me(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (a !== we && xe(a, t))
      return n[t] = 4, a[t];
    if (
      // global properties
      p = s.config.globalProperties, xe(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, a) {
    const { data: r, setupState: o, ctx: i } = e;
    return oo(o, t) ? (o[t] = a, !0) : r !== we && xe(r, t) ? (r[t] = a, !0) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = a, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: a, ctx: r, appContext: o, propsOptions: i, type: n }
  }, l) {
    let s, d;
    return !!(a[l] || e !== we && l[0] !== "$" && xe(e, l) || oo(t, l) || (s = i[0]) && xe(s, l) || xe(r, l) || xe(Na, l) || xe(o.config.globalProperties, l) || (d = n.__cssModules) && d[l]);
  },
  defineProperty(e, t, a) {
    return a.get != null ? e._.accessCache[t] = 0 : xe(a, "value") && this.set(e, t, a.value, null), Reflect.defineProperty(e, t, a);
  }
};
function Xn() {
  return pd().slots;
}
function pd(e) {
  const t = mt();
  return t.setupContext || (t.setupContext = kl(t));
}
function yr(e) {
  return te(e) ? e.reduce(
    (t, a) => (t[a] = null, t),
    {}
  ) : e;
}
function zt(e, t) {
  return !e || !t ? e || t : te(e) && te(t) ? e.concat(t) : Ee({}, yr(e), yr(t));
}
let _o = !0;
function fd(e) {
  const t = el(e), a = e.proxy, r = e.ctx;
  _o = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: n,
    watch: l,
    provide: s,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: p,
    beforeUpdate: h,
    updated: f,
    activated: w,
    deactivated: _,
    beforeDestroy: b,
    beforeUnmount: $,
    destroyed: x,
    unmounted: m,
    render: S,
    renderTracked: P,
    renderTriggered: ae,
    errorCaptured: X,
    serverPrefetch: Q,
    // public API
    expose: G,
    inheritAttrs: ne,
    // assets
    components: F,
    directives: I,
    filters: L
  } = t;
  if (d && hd(d, r, null), n)
    for (const ce in n) {
      const oe = n[ce];
      de(oe) && (r[ce] = oe.bind(a));
    }
  if (o) {
    const ce = o.call(a, a);
    Se(ce) && (e.data = Je(ce));
  }
  if (_o = !0, i)
    for (const ce in i) {
      const oe = i[ce], He = de(oe) ? oe.bind(a, a) : de(oe.get) ? oe.get.bind(a, a) : ut, $e = !de(oe) && de(oe.set) ? oe.set.bind(a) : ut, Ve = V({
        get: He,
        set: $e
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (Oe) => Ve.value = Oe
      });
    }
  if (l)
    for (const ce in l)
      Qn(l[ce], r, a, ce);
  if (s) {
    const ce = de(s) ? s.call(a) : s;
    Reflect.ownKeys(ce).forEach((oe) => {
      So(oe, ce[oe]);
    });
  }
  c && gi(c, e, "c");
  function H(ce, oe) {
    te(oe) ? oe.forEach((He) => ce(He.bind(a))) : oe && ce(oe.bind(a));
  }
  if (H(Zn, u), H(dt, p), H(Gn, h), H(od, f), H(td, w), H(ad, _), H(sd, X), H(ld, P), H(nd, ae), H(pa, $), H(Ur, m), H(id, Q), te(G))
    if (G.length) {
      const ce = e.exposed || (e.exposed = {});
      G.forEach((oe) => {
        Object.defineProperty(ce, oe, {
          get: () => a[oe],
          set: (He) => a[oe] = He,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === ut && (e.render = S), ne != null && (e.inheritAttrs = ne), F && (e.components = F), I && (e.directives = I), Q && Kn(e);
}
function hd(e, t, a = ut) {
  te(e) && (e = $o(e));
  for (const r in e) {
    const o = e[r];
    let i;
    Se(o) ? "default" in o ? i = It(
      o.from || r,
      o.default,
      !0
    ) : i = It(o.from || r) : i = It(o), Ae(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (n) => i.value = n
    }) : t[r] = i;
  }
}
function gi(e, t, a) {
  vt(
    te(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    a
  );
}
function Qn(e, t, a, r) {
  let o = r.includes(".") ? hl(a, r) : () => a[r];
  if (Te(e)) {
    const i = t[e];
    de(i) && ve(o, i);
  } else if (de(e))
    ve(o, e.bind(a));
  else if (Se(e))
    if (te(e))
      e.forEach((i) => Qn(i, t, a, r));
    else {
      const i = de(e.handler) ? e.handler.bind(a) : t[e.handler];
      de(i) && ve(o, i, e);
    }
}
function el(e) {
  const t = e.type, { mixins: a, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: n }
  } = e.appContext, l = i.get(t);
  let s;
  return l ? s = l : !o.length && !a && !r ? s = t : (s = {}, o.length && o.forEach(
    (d) => xr(s, d, n, !0)
  ), xr(s, t, n)), Se(t) && i.set(t, s), s;
}
function xr(e, t, a, r = !1) {
  const { mixins: o, extends: i } = t;
  i && xr(e, i, a, !0), o && o.forEach(
    (n) => xr(e, n, a, !0)
  );
  for (const n in t)
    if (!(r && n === "expose")) {
      const l = vd[n] || a && a[n];
      e[n] = l ? l(e[n], t[n]) : t[n];
    }
  return e;
}
const vd = {
  data: bi,
  props: wi,
  emits: wi,
  // objects
  methods: Va,
  computed: Va,
  // lifecycle
  beforeCreate: Fe,
  created: Fe,
  beforeMount: Fe,
  mounted: Fe,
  beforeUpdate: Fe,
  updated: Fe,
  beforeDestroy: Fe,
  beforeUnmount: Fe,
  destroyed: Fe,
  unmounted: Fe,
  activated: Fe,
  deactivated: Fe,
  errorCaptured: Fe,
  serverPrefetch: Fe,
  // assets
  components: Va,
  directives: Va,
  // watch
  watch: gd,
  // provide / inject
  provide: bi,
  inject: md
};
function bi(e, t) {
  return t ? e ? function() {
    return Ee(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function md(e, t) {
  return Va($o(e), $o(t));
}
function $o(e) {
  if (te(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++)
      t[e[a]] = e[a];
    return t;
  }
  return e;
}
function Fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Va(e, t) {
  return e ? Ee(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wi(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ee(
    /* @__PURE__ */ Object.create(null),
    yr(e),
    yr(t ?? {})
  ) : t;
}
function gd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const a = Ee(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    a[r] = Fe(e[r], t[r]);
  return a;
}
function tl() {
  return {
    app: null,
    config: {
      isNativeTag: un,
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
let bd = 0;
function wd(e, t) {
  return function(r, o = null) {
    de(r) || (r = Ee({}, r)), o != null && !Se(o) && (o = null);
    const i = tl(), n = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const d = i.app = {
      _uid: bd++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Xd,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return n.has(c) || (c && de(c.install) ? (n.add(c), c.install(d, ...u)) : de(c) && (n.add(c), c(d, ...u))), d;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), d;
      },
      component(c, u) {
        return u ? (i.components[c] = u, d) : i.components[c];
      },
      directive(c, u) {
        return u ? (i.directives[c] = u, d) : i.directives[c];
      },
      mount(c, u, p) {
        if (!s) {
          const h = d._ceVNode || q(r, o);
          return h.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(h, c, p), s = !0, d._container = c, c.__vue_app__ = d, Wr(h.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        s && (vt(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, u) {
        return i.provides[c] = u, d;
      },
      runWithContext(c) {
        const u = sa;
        sa = d;
        try {
          return c();
        } finally {
          sa = u;
        }
      }
    };
    return d;
  };
}
let sa = null;
function So(e, t) {
  if (Be) {
    let a = Be.provides;
    const r = Be.parent && Be.parent.provides;
    r === a && (a = Be.provides = Object.create(r)), a[e] = t;
  }
}
function It(e, t, a = !1) {
  const r = mt();
  if (r || sa) {
    let o = sa ? sa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return a && de(t) ? t.call(r && r.proxy) : t;
  }
}
function al() {
  return !!(mt() || sa);
}
const rl = {}, ol = () => Object.create(rl), il = (e) => Object.getPrototypeOf(e) === rl;
function yd(e, t, a, r = !1) {
  const o = {}, i = ol();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, o, i);
  for (const n in e.propsOptions[0])
    n in o || (o[n] = void 0);
  a ? e.props = r ? o : Bs(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function xd(e, t, a, r) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: n }
  } = e, l = ye(o), [s] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || n > 0) && !(n & 16)
  ) {
    if (n & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let p = c[u];
        if (Hr(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (s)
          if (xe(i, p))
            h !== i[p] && (i[p] = h, d = !0);
          else {
            const f = Le(p);
            o[f] = Co(
              s,
              l,
              f,
              h,
              e,
              !1
            );
          }
        else
          h !== i[p] && (i[p] = h, d = !0);
      }
    }
  } else {
    nl(e, t, o, i) && (d = !0);
    let c;
    for (const u in l)
      (!t || // for camelCase
      !xe(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ge(u)) === u || !xe(t, c))) && (s ? a && // for camelCase
      (a[u] !== void 0 || // for kebab-case
      a[c] !== void 0) && (o[u] = Co(
        s,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (i !== l)
      for (const u in i)
        (!t || !xe(t, u)) && (delete i[u], d = !0);
  }
  d && Vt(e.attrs, "set", "");
}
function nl(e, t, a, r) {
  const [o, i] = e.propsOptions;
  let n = !1, l;
  if (t)
    for (let s in t) {
      if (Pa(s))
        continue;
      const d = t[s];
      let c;
      o && xe(o, c = Le(s)) ? !i || !i.includes(c) ? a[c] = d : (l || (l = {}))[c] = d : Hr(e.emitsOptions, s) || (!(s in r) || d !== r[s]) && (r[s] = d, n = !0);
    }
  if (i) {
    const s = ye(a), d = l || we;
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      a[u] = Co(
        o,
        s,
        u,
        d[u],
        e,
        !xe(d, u)
      );
    }
  }
  return n;
}
function Co(e, t, a, r, o, i) {
  const n = e[a];
  if (n != null) {
    const l = xe(n, "default");
    if (l && r === void 0) {
      const s = n.default;
      if (n.type !== Function && !n.skipFactory && de(s)) {
        const { propsDefaults: d } = o;
        if (a in d)
          r = d[a];
        else {
          const c = er(o);
          r = d[a] = s.call(
            null,
            t
          ), c();
        }
      } else
        r = s;
      o.ce && o.ce._setProp(a, r);
    }
    n[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : n[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ge(a)) && (r = !0));
  }
  return r;
}
const kd = /* @__PURE__ */ new WeakMap();
function ll(e, t, a = !1) {
  const r = a ? kd : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, n = {}, l = [];
  let s = !1;
  if (!de(e)) {
    const c = (u) => {
      s = !0;
      const [p, h] = ll(u, t, !0);
      Ee(n, p), h && l.push(...h);
    };
    !a && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !s)
    return Se(e) && r.set(e, ya), ya;
  if (te(i))
    for (let c = 0; c < i.length; c++) {
      const u = Le(i[c]);
      yi(u) && (n[u] = we);
    }
  else if (i)
    for (const c in i) {
      const u = Le(c);
      if (yi(u)) {
        const p = i[c], h = n[u] = te(p) || de(p) ? { type: p } : Ee({}, p), f = h.type;
        let w = !1, _ = !0;
        if (te(f))
          for (let b = 0; b < f.length; ++b) {
            const $ = f[b], x = de($) && $.name;
            if (x === "Boolean") {
              w = !0;
              break;
            } else x === "String" && (_ = !1);
          }
        else
          w = de(f) && f.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = w, h[
          1
          /* shouldCastTrue */
        ] = _, (w || xe(h, "default")) && l.push(u);
      }
    }
  const d = [n, l];
  return Se(e) && r.set(e, d), d;
}
function yi(e) {
  return e[0] !== "$" && !Pa(e);
}
const Wo = (e) => e === "_" || e === "_ctx" || e === "$stable", Zo = (e) => te(e) ? e.map(_t) : [_t(e)], _d = (e, t, a) => {
  if (t._n)
    return t;
  const r = B((...o) => Zo(t(...o)), a);
  return r._c = !1, r;
}, sl = (e, t, a) => {
  const r = e._ctx;
  for (const o in e) {
    if (Wo(o)) continue;
    const i = e[o];
    if (de(i))
      t[o] = _d(o, i, r);
    else if (i != null) {
      const n = Zo(i);
      t[o] = () => n;
    }
  }
}, dl = (e, t) => {
  const a = Zo(t);
  e.slots.default = () => a;
}, cl = (e, t, a) => {
  for (const r in t)
    (a || !Wo(r)) && (e[r] = t[r]);
}, $d = (e, t, a) => {
  const r = e.slots = ol();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (cl(r, t, a), a && hn(r, "_", o, !0)) : sl(t, r);
  } else t && dl(e, t);
}, Sd = (e, t, a) => {
  const { vnode: r, slots: o } = e;
  let i = !0, n = we;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? a && l === 1 ? i = !1 : cl(o, t, a) : (i = !t.$stable, sl(t, o)), n = t;
  } else t && (dl(e, t), n = { default: 1 });
  if (i)
    for (const l in o)
      !Wo(l) && n[l] == null && delete o[l];
}, Xe = Dd;
function Cd(e) {
  return zd(e);
}
function zd(e, t) {
  const a = Mr();
  a.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: i,
    createElement: n,
    createText: l,
    createComment: s,
    setText: d,
    setElementText: c,
    parentNode: u,
    nextSibling: p,
    setScopeId: h = ut,
    insertStaticContent: f
  } = e, w = (v, g, C, j = null, T = null, O = null, W = void 0, R = null, D = !!g.dynamicChildren) => {
    if (v === g)
      return;
    v && !oa(v, g) && (j = tt(v), Oe(v, T, O, !0), v = null), g.patchFlag === -2 && (D = !1, g.dynamicChildren = null);
    const { type: A, ref: ie, shapeFlag: J } = g;
    switch (A) {
      case Kr:
        _(v, g, C, j);
        break;
      case Ne:
        b(v, g, C, j);
        break;
      case dr:
        v == null && $(g, C, j, W);
        break;
      case _e:
        F(
          v,
          g,
          C,
          j,
          T,
          O,
          W,
          R,
          D
        );
        break;
      default:
        J & 1 ? S(
          v,
          g,
          C,
          j,
          T,
          O,
          W,
          R,
          D
        ) : J & 6 ? I(
          v,
          g,
          C,
          j,
          T,
          O,
          W,
          R,
          D
        ) : (J & 64 || J & 128) && A.process(
          v,
          g,
          C,
          j,
          T,
          O,
          W,
          R,
          D,
          za
        );
    }
    ie != null && T ? Ma(ie, v && v.ref, O, g || v, !g) : ie == null && v && v.ref != null && Ma(v.ref, null, O, v, !0);
  }, _ = (v, g, C, j) => {
    if (v == null)
      r(
        g.el = l(g.children),
        C,
        j
      );
    else {
      const T = g.el = v.el;
      g.children !== v.children && d(T, g.children);
    }
  }, b = (v, g, C, j) => {
    v == null ? r(
      g.el = s(g.children || ""),
      C,
      j
    ) : g.el = v.el;
  }, $ = (v, g, C, j) => {
    [v.el, v.anchor] = f(
      v.children,
      g,
      C,
      j,
      v.el,
      v.anchor
    );
  }, x = ({ el: v, anchor: g }, C, j) => {
    let T;
    for (; v && v !== g; )
      T = p(v), r(v, C, j), v = T;
    r(g, C, j);
  }, m = ({ el: v, anchor: g }) => {
    let C;
    for (; v && v !== g; )
      C = p(v), o(v), v = C;
    o(g);
  }, S = (v, g, C, j, T, O, W, R, D) => {
    if (g.type === "svg" ? W = "svg" : g.type === "math" && (W = "mathml"), v == null)
      P(
        g,
        C,
        j,
        T,
        O,
        W,
        R,
        D
      );
    else {
      const A = v.el && v.el._isVueCE ? v.el : null;
      try {
        A && A._beginPatch(), Q(
          v,
          g,
          T,
          O,
          W,
          R,
          D
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, P = (v, g, C, j, T, O, W, R) => {
    let D, A;
    const { props: ie, shapeFlag: J, transition: re, dirs: se } = v;
    if (D = v.el = n(
      v.type,
      O,
      ie && ie.is,
      ie
    ), J & 8 ? c(D, v.children) : J & 16 && X(
      v.children,
      D,
      null,
      j,
      T,
      io(v, O),
      W,
      R
    ), se && Qt(v, null, j, "created"), ae(D, v, v.scopeId, W, j), ie) {
      for (const Ce in ie)
        Ce !== "value" && !Pa(Ce) && i(D, Ce, null, ie[Ce], O, j);
      "value" in ie && i(D, "value", null, ie.value, O), (A = ie.onVnodeBeforeMount) && yt(A, j, v);
    }
    se && Qt(v, null, j, "beforeMount");
    const be = Ed(T, re);
    be && re.beforeEnter(D), r(D, g, C), ((A = ie && ie.onVnodeMounted) || be || se) && Xe(() => {
      A && yt(A, j, v), be && re.enter(D), se && Qt(v, null, j, "mounted");
    }, T);
  }, ae = (v, g, C, j, T) => {
    if (C && h(v, C), j)
      for (let O = 0; O < j.length; O++)
        h(v, j[O]);
    if (T) {
      let O = T.subTree;
      if (g === O || gl(O.type) && (O.ssContent === g || O.ssFallback === g)) {
        const W = T.vnode;
        ae(
          v,
          W,
          W.scopeId,
          W.slotScopeIds,
          T.parent
        );
      }
    }
  }, X = (v, g, C, j, T, O, W, R, D = 0) => {
    for (let A = D; A < v.length; A++) {
      const ie = v[A] = R ? Rt(v[A]) : _t(v[A]);
      w(
        null,
        ie,
        g,
        C,
        j,
        T,
        O,
        W,
        R
      );
    }
  }, Q = (v, g, C, j, T, O, W) => {
    const R = g.el = v.el;
    let { patchFlag: D, dynamicChildren: A, dirs: ie } = g;
    D |= v.patchFlag & 16;
    const J = v.props || we, re = g.props || we;
    let se;
    if (C && ea(C, !1), (se = re.onVnodeBeforeUpdate) && yt(se, C, g, v), ie && Qt(g, v, C, "beforeUpdate"), C && ea(C, !0), (J.innerHTML && re.innerHTML == null || J.textContent && re.textContent == null) && c(R, ""), A ? G(
      v.dynamicChildren,
      A,
      R,
      C,
      j,
      io(g, T),
      O
    ) : W || oe(
      v,
      g,
      R,
      null,
      C,
      j,
      io(g, T),
      O,
      !1
    ), D > 0) {
      if (D & 16)
        ne(R, J, re, C, T);
      else if (D & 2 && J.class !== re.class && i(R, "class", null, re.class, T), D & 4 && i(R, "style", J.style, re.style, T), D & 8) {
        const be = g.dynamicProps;
        for (let Ce = 0; Ce < be.length; Ce++) {
          const ke = be[Ce], Ke = J[ke], We = re[ke];
          (We !== Ke || ke === "value") && i(R, ke, Ke, We, T, C);
        }
      }
      D & 1 && v.children !== g.children && c(R, g.children);
    } else !W && A == null && ne(R, J, re, C, T);
    ((se = re.onVnodeUpdated) || ie) && Xe(() => {
      se && yt(se, C, g, v), ie && Qt(g, v, C, "updated");
    }, j);
  }, G = (v, g, C, j, T, O, W) => {
    for (let R = 0; R < g.length; R++) {
      const D = v[R], A = g[R], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !oa(D, A) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? u(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      w(
        D,
        A,
        ie,
        null,
        j,
        T,
        O,
        W,
        !0
      );
    }
  }, ne = (v, g, C, j, T) => {
    if (g !== C) {
      if (g !== we)
        for (const O in g)
          !Pa(O) && !(O in C) && i(
            v,
            O,
            g[O],
            null,
            T,
            j
          );
      for (const O in C) {
        if (Pa(O)) continue;
        const W = C[O], R = g[O];
        W !== R && O !== "value" && i(v, O, R, W, T, j);
      }
      "value" in C && i(v, "value", g.value, C.value, T);
    }
  }, F = (v, g, C, j, T, O, W, R, D) => {
    const A = g.el = v ? v.el : l(""), ie = g.anchor = v ? v.anchor : l("");
    let { patchFlag: J, dynamicChildren: re, slotScopeIds: se } = g;
    se && (R = R ? R.concat(se) : se), v == null ? (r(A, C, j), r(ie, C, j), X(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      C,
      ie,
      T,
      O,
      W,
      R,
      D
    )) : J > 0 && J & 64 && re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (G(
      v.dynamicChildren,
      re,
      C,
      T,
      O,
      W,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || T && g === T.subTree) && ul(
      v,
      g,
      !0
      /* shallow */
    )) : oe(
      v,
      g,
      C,
      ie,
      T,
      O,
      W,
      R,
      D
    );
  }, I = (v, g, C, j, T, O, W, R, D) => {
    g.slotScopeIds = R, v == null ? g.shapeFlag & 512 ? T.ctx.activate(
      g,
      C,
      j,
      W,
      D
    ) : L(
      g,
      C,
      j,
      T,
      O,
      W,
      D
    ) : E(v, g, D);
  }, L = (v, g, C, j, T, O, W) => {
    const R = v.component = Hd(
      v,
      j,
      T
    );
    if (Fr(v) && (R.ctx.renderer = za), Kd(R, !1, W), R.asyncDep) {
      if (T && T.registerDep(R, H, W), !v.el) {
        const D = R.subTree = q(Ne);
        b(null, D, g, C), v.placeholder = D.el;
      }
    } else
      H(
        R,
        v,
        g,
        C,
        T,
        O,
        W
      );
  }, E = (v, g, C) => {
    const j = g.component = v.component;
    if (Bd(v, g, C))
      if (j.asyncDep && !j.asyncResolved) {
        ce(j, g, C);
        return;
      } else
        j.next = g, j.update();
    else
      g.el = v.el, j.vnode = g;
  }, H = (v, g, C, j, T, O, W) => {
    const R = () => {
      if (v.isMounted) {
        let { next: J, bu: re, u: se, parent: be, vnode: Ce } = v;
        {
          const bt = pl(v);
          if (bt) {
            J && (J.el = Ce.el, ce(v, J, W)), bt.asyncDep.then(() => {
              v.isUnmounted || R();
            });
            return;
          }
        }
        let ke = J, Ke;
        ea(v, !1), J ? (J.el = Ce.el, ce(v, J, W)) : J = Ce, re && sr(re), (Ke = J.props && J.props.onVnodeBeforeUpdate) && yt(Ke, be, J, Ce), ea(v, !0);
        const We = ki(v), gt = v.subTree;
        v.subTree = We, w(
          gt,
          We,
          // parent may have changed if it's in a teleport
          u(gt.el),
          // anchor may have changed if it's in a fragment
          tt(gt),
          v,
          T,
          O
        ), J.el = We.el, ke === null && Ld(v, We.el), se && Xe(se, T), (Ke = J.props && J.props.onVnodeUpdated) && Xe(
          () => yt(Ke, be, J, Ce),
          T
        );
      } else {
        let J;
        const { el: re, props: se } = g, { bm: be, m: Ce, parent: ke, root: Ke, type: We } = v, gt = _a(g);
        ea(v, !1), be && sr(be), !gt && (J = se && se.onVnodeBeforeMount) && yt(J, ke, g), ea(v, !0);
        {
          Ke.ce && // @ts-expect-error _def is private
          Ke.ce._def.shadowRoot !== !1 && Ke.ce._injectChildStyle(We);
          const bt = v.subTree = ki(v);
          w(
            null,
            bt,
            C,
            j,
            v,
            T,
            O
          ), g.el = bt.el;
        }
        if (Ce && Xe(Ce, T), !gt && (J = se && se.onVnodeMounted)) {
          const bt = g;
          Xe(
            () => yt(J, ke, bt),
            T
          );
        }
        (g.shapeFlag & 256 || ke && _a(ke.vnode) && ke.vnode.shapeFlag & 256) && v.a && Xe(v.a, T), v.isMounted = !0, g = C = j = null;
      }
    };
    v.scope.on();
    const D = v.effect = new bn(R);
    v.scope.off();
    const A = v.update = D.run.bind(D), ie = v.job = D.runIfDirty.bind(D);
    ie.i = v, ie.id = v.uid, D.scheduler = () => Ko(ie), ea(v, !0), A();
  }, ce = (v, g, C) => {
    g.component = v;
    const j = v.vnode.props;
    v.vnode = g, v.next = null, xd(v, g.props, j, C), Sd(v, g.children, C), Mt(), fi(v), Nt();
  }, oe = (v, g, C, j, T, O, W, R, D = !1) => {
    const A = v && v.children, ie = v ? v.shapeFlag : 0, J = g.children, { patchFlag: re, shapeFlag: se } = g;
    if (re > 0) {
      if (re & 128) {
        $e(
          A,
          J,
          C,
          j,
          T,
          O,
          W,
          R,
          D
        );
        return;
      } else if (re & 256) {
        He(
          A,
          J,
          C,
          j,
          T,
          O,
          W,
          R,
          D
        );
        return;
      }
    }
    se & 8 ? (ie & 16 && ge(A, T, O), J !== A && c(C, J)) : ie & 16 ? se & 16 ? $e(
      A,
      J,
      C,
      j,
      T,
      O,
      W,
      R,
      D
    ) : ge(A, T, O, !0) : (ie & 8 && c(C, ""), se & 16 && X(
      J,
      C,
      j,
      T,
      O,
      W,
      R,
      D
    ));
  }, He = (v, g, C, j, T, O, W, R, D) => {
    v = v || ya, g = g || ya;
    const A = v.length, ie = g.length, J = Math.min(A, ie);
    let re;
    for (re = 0; re < J; re++) {
      const se = g[re] = D ? Rt(g[re]) : _t(g[re]);
      w(
        v[re],
        se,
        C,
        null,
        T,
        O,
        W,
        R,
        D
      );
    }
    A > ie ? ge(
      v,
      T,
      O,
      !0,
      !1,
      J
    ) : X(
      g,
      C,
      j,
      T,
      O,
      W,
      R,
      D,
      J
    );
  }, $e = (v, g, C, j, T, O, W, R, D) => {
    let A = 0;
    const ie = g.length;
    let J = v.length - 1, re = ie - 1;
    for (; A <= J && A <= re; ) {
      const se = v[A], be = g[A] = D ? Rt(g[A]) : _t(g[A]);
      if (oa(se, be))
        w(
          se,
          be,
          C,
          null,
          T,
          O,
          W,
          R,
          D
        );
      else
        break;
      A++;
    }
    for (; A <= J && A <= re; ) {
      const se = v[J], be = g[re] = D ? Rt(g[re]) : _t(g[re]);
      if (oa(se, be))
        w(
          se,
          be,
          C,
          null,
          T,
          O,
          W,
          R,
          D
        );
      else
        break;
      J--, re--;
    }
    if (A > J) {
      if (A <= re) {
        const se = re + 1, be = se < ie ? g[se].el : j;
        for (; A <= re; )
          w(
            null,
            g[A] = D ? Rt(g[A]) : _t(g[A]),
            C,
            be,
            T,
            O,
            W,
            R,
            D
          ), A++;
      }
    } else if (A > re)
      for (; A <= J; )
        Oe(v[A], T, O, !0), A++;
    else {
      const se = A, be = A, Ce = /* @__PURE__ */ new Map();
      for (A = be; A <= re; A++) {
        const Ye = g[A] = D ? Rt(g[A]) : _t(g[A]);
        Ye.key != null && Ce.set(Ye.key, A);
      }
      let ke, Ke = 0;
      const We = re - be + 1;
      let gt = !1, bt = 0;
      const Ea = new Array(We);
      for (A = 0; A < We; A++) Ea[A] = 0;
      for (A = se; A <= J; A++) {
        const Ye = v[A];
        if (Ke >= We) {
          Oe(Ye, T, O, !0);
          continue;
        }
        let wt;
        if (Ye.key != null)
          wt = Ce.get(Ye.key);
        else
          for (ke = be; ke <= re; ke++)
            if (Ea[ke - be] === 0 && oa(Ye, g[ke])) {
              wt = ke;
              break;
            }
        wt === void 0 ? Oe(Ye, T, O, !0) : (Ea[wt - be] = A + 1, wt >= bt ? bt = wt : gt = !0, w(
          Ye,
          g[wt],
          C,
          null,
          T,
          O,
          W,
          R,
          D
        ), Ke++);
      }
      const ii = gt ? Td(Ea) : ya;
      for (ke = ii.length - 1, A = We - 1; A >= 0; A--) {
        const Ye = be + A, wt = g[Ye], ni = g[Ye + 1], li = Ye + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          ni.el || ni.placeholder
        ) : j;
        Ea[A] === 0 ? w(
          null,
          wt,
          C,
          li,
          T,
          O,
          W,
          R,
          D
        ) : gt && (ke < 0 || A !== ii[ke] ? Ve(wt, C, li, 2) : ke--);
      }
    }
  }, Ve = (v, g, C, j, T = null) => {
    const { el: O, type: W, transition: R, children: D, shapeFlag: A } = v;
    if (A & 6) {
      Ve(v.component.subTree, g, C, j);
      return;
    }
    if (A & 128) {
      v.suspense.move(g, C, j);
      return;
    }
    if (A & 64) {
      W.move(v, g, C, za);
      return;
    }
    if (W === _e) {
      r(O, g, C);
      for (let J = 0; J < D.length; J++)
        Ve(D[J], g, C, j);
      r(v.anchor, g, C);
      return;
    }
    if (W === dr) {
      x(v, g, C);
      return;
    }
    if (j !== 2 && A & 1 && R)
      if (j === 0)
        R.beforeEnter(O), r(O, g, C), Xe(() => R.enter(O), T);
      else {
        const { leave: J, delayLeave: re, afterLeave: se } = R, be = () => {
          v.ctx.isUnmounted ? o(O) : r(O, g, C);
        }, Ce = () => {
          O._isLeaving && O[At](
            !0
            /* cancelled */
          ), J(O, () => {
            be(), se && se();
          });
        };
        re ? re(O, be, Ce) : Ce();
      }
    else
      r(O, g, C);
  }, Oe = (v, g, C, j = !1, T = !1) => {
    const {
      type: O,
      props: W,
      ref: R,
      children: D,
      dynamicChildren: A,
      shapeFlag: ie,
      patchFlag: J,
      dirs: re,
      cacheIndex: se
    } = v;
    if (J === -2 && (T = !1), R != null && (Mt(), Ma(R, null, C, v, !0), Nt()), se != null && (g.renderCache[se] = void 0), ie & 256) {
      g.ctx.deactivate(v);
      return;
    }
    const be = ie & 1 && re, Ce = !_a(v);
    let ke;
    if (Ce && (ke = W && W.onVnodeBeforeUnmount) && yt(ke, g, v), ie & 6)
      fe(v.component, C, j);
    else {
      if (ie & 128) {
        v.suspense.unmount(C, j);
        return;
      }
      be && Qt(v, null, g, "beforeUnmount"), ie & 64 ? v.type.remove(
        v,
        g,
        C,
        za,
        j
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== _e || J > 0 && J & 64) ? ge(
        A,
        g,
        C,
        !1,
        !0
      ) : (O === _e && J & 384 || !T && ie & 16) && ge(D, g, C), j && K(v);
    }
    (Ce && (ke = W && W.onVnodeUnmounted) || be) && Xe(() => {
      ke && yt(ke, g, v), be && Qt(v, null, g, "unmounted");
    }, C);
  }, K = (v) => {
    const { type: g, el: C, anchor: j, transition: T } = v;
    if (g === _e) {
      me(C, j);
      return;
    }
    if (g === dr) {
      m(v);
      return;
    }
    const O = () => {
      o(C), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (v.shapeFlag & 1 && T && !T.persisted) {
      const { leave: W, delayLeave: R } = T, D = () => W(C, O);
      R ? R(v.el, O, D) : D();
    } else
      O();
  }, me = (v, g) => {
    let C;
    for (; v !== g; )
      C = p(v), o(v), v = C;
    o(g);
  }, fe = (v, g, C) => {
    const { bum: j, scope: T, job: O, subTree: W, um: R, m: D, a: A } = v;
    xi(D), xi(A), j && sr(j), T.stop(), O && (O.flags |= 8, Oe(W, v, g, C)), R && Xe(R, g), Xe(() => {
      v.isUnmounted = !0;
    }, g);
  }, ge = (v, g, C, j = !1, T = !1, O = 0) => {
    for (let W = O; W < v.length; W++)
      Oe(v[W], g, C, j, T);
  }, tt = (v) => {
    if (v.shapeFlag & 6)
      return tt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const g = p(v.anchor || v.el), C = g && g[Js];
    return C ? p(C) : g;
  };
  let fa = !1;
  const oi = (v, g, C) => {
    v == null ? g._vnode && Oe(g._vnode, null, null, !0) : w(
      g._vnode || null,
      v,
      g,
      null,
      null,
      null,
      C
    ), g._vnode = v, fa || (fa = !0, fi(), Nn(), fa = !1);
  }, za = {
    p: w,
    um: Oe,
    m: Ve,
    r: K,
    mt: L,
    mc: X,
    pc: oe,
    pbc: G,
    n: tt,
    o: e
  };
  return {
    render: oi,
    hydrate: void 0,
    createApp: wd(oi)
  };
}
function io({ type: e, props: t }, a) {
  return a === "svg" && e === "foreignObject" || a === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : a;
}
function ea({ effect: e, job: t }, a) {
  a ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ed(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ul(e, t, a = !1) {
  const r = e.children, o = t.children;
  if (te(r) && te(o))
    for (let i = 0; i < r.length; i++) {
      const n = r[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Rt(o[i]), l.el = n.el), !a && l.patchFlag !== -2 && ul(n, l)), l.type === Kr && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = n.el), l.type === Ne && !l.el && (l.el = n.el);
    }
}
function Td(e) {
  const t = e.slice(), a = [0];
  let r, o, i, n, l;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const d = e[r];
    if (d !== 0) {
      if (o = a[a.length - 1], e[o] < d) {
        t[r] = o, a.push(r);
        continue;
      }
      for (i = 0, n = a.length - 1; i < n; )
        l = i + n >> 1, e[a[l]] < d ? i = l + 1 : n = l;
      d < e[a[i]] && (i > 0 && (t[r] = a[i - 1]), a[i] = r);
    }
  }
  for (i = a.length, n = a[i - 1]; i-- > 0; )
    a[i] = n, n = t[n];
  return a;
}
function pl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : pl(t);
}
function xi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Od = Symbol.for("v-scx"), Ad = () => It(Od);
function fl(e, t) {
  return qr(e, null, t);
}
function Vd(e, t) {
  return qr(
    e,
    null,
    { flush: "sync" }
  );
}
function ve(e, t, a) {
  return qr(e, t, a);
}
function qr(e, t, a = we) {
  const { immediate: r, deep: o, flush: i, once: n } = a, l = Ee({}, a), s = t && r || !t && i !== "post";
  let d;
  if (Ha) {
    if (i === "sync") {
      const h = Ad();
      d = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!s) {
      const h = () => {
      };
      return h.stop = ut, h.resume = ut, h.pause = ut, h;
    }
  }
  const c = Be;
  l.call = (h, f, w) => vt(h, c, f, w);
  let u = !1;
  i === "post" ? l.scheduler = (h) => {
    Xe(h, c && c.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (h, f) => {
    f ? h() : Ko(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const p = Ws(e, t, l);
  return Ha && (d ? d.push(p) : s && p()), p;
}
function Pd(e, t, a) {
  const r = this.proxy, o = Te(e) ? e.includes(".") ? hl(r, e) : () => r[e] : e.bind(r, r);
  let i;
  de(t) ? i = t : (i = t.handler, a = t);
  const n = er(this), l = qr(o, i.bind(r), a);
  return n(), l;
}
function hl(e, t) {
  const a = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < a.length && r; o++)
      r = r[a[o]];
    return r;
  };
}
function et(e, t, a = we) {
  const r = mt(), o = Le(t), i = Ge(t), n = vl(e, o), l = Us((s, d) => {
    let c, u = we, p;
    return Vd(() => {
      const h = e[o];
      Ze(c, h) && (c = h, d());
    }), {
      get() {
        return s(), a.get ? a.get(c) : c;
      },
      set(h) {
        const f = a.set ? a.set(h) : h;
        if (!Ze(f, c) && !(u !== we && Ze(h, u)))
          return;
        const w = r.vnode.props;
        w && // check if parent has passed v-model
        (t in w || o in w || i in w) && (`onUpdate:${t}` in w || `onUpdate:${o}` in w || `onUpdate:${i}` in w) || (c = h, d()), r.emit(`update:${t}`, f), Ze(h, f) && Ze(h, u) && !Ze(f, p) && d(), u = h, p = f;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let s = 0;
    return {
      next() {
        return s < 2 ? { value: s++ ? n || we : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const vl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Ge(t)}Modifiers`];
function jd(e, t, ...a) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || we;
  let o = a;
  const i = t.startsWith("update:"), n = i && vl(r, t.slice(7));
  n && (n.trim && (o = a.map((c) => Te(c) ? c.trim() : c)), n.number && (o = a.map(Ir)));
  let l, s = r[l = Yr(t)] || // also try camelCase event handler (#2249)
  r[l = Yr(Le(t))];
  !s && i && (s = r[l = Yr(Ge(t))]), s && vt(
    s,
    e,
    6,
    o
  );
  const d = r[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, vt(
      d,
      e,
      6,
      o
    );
  }
}
const Id = /* @__PURE__ */ new WeakMap();
function ml(e, t, a = !1) {
  const r = a ? Id : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let n = {}, l = !1;
  if (!de(e)) {
    const s = (d) => {
      const c = ml(d, t, !0);
      c && (l = !0, Ee(n, c));
    };
    !a && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !l ? (Se(e) && r.set(e, null), null) : (te(i) ? i.forEach((s) => n[s] = null) : Ee(n, i), Se(e) && r.set(e, n), n);
}
function Hr(e, t) {
  return !e || !Ar(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, Ge(t)) || xe(e, t));
}
function ki(e) {
  const {
    type: t,
    vnode: a,
    proxy: r,
    withProxy: o,
    propsOptions: [i],
    slots: n,
    attrs: l,
    emit: s,
    render: d,
    renderCache: c,
    props: u,
    data: p,
    setupState: h,
    ctx: f,
    inheritAttrs: w
  } = e, _ = br(e);
  let b, $;
  try {
    if (a.shapeFlag & 4) {
      const m = o || r, S = m;
      b = _t(
        d.call(
          S,
          m,
          c,
          u,
          h,
          p,
          f
        )
      ), $ = l;
    } else {
      const m = t;
      b = _t(
        m.length > 1 ? m(
          u,
          { attrs: l, slots: n, emit: s }
        ) : m(
          u,
          null
        )
      ), $ = t.props ? l : Md(l);
    }
  } catch (m) {
    Ba.length = 0, Dr(m, e, 1), b = q(Ne);
  }
  let x = b;
  if ($ && w !== !1) {
    const m = Object.keys($), { shapeFlag: S } = x;
    m.length && S & 7 && (i && m.some(Io) && ($ = Nd(
      $,
      i
    )), x = Ht(x, $, !1, !0));
  }
  return a.dirs && (x = Ht(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(a.dirs) : a.dirs), a.transition && Ra(x, a.transition), b = x, br(_), b;
}
const Md = (e) => {
  let t;
  for (const a in e)
    (a === "class" || a === "style" || Ar(a)) && ((t || (t = {}))[a] = e[a]);
  return t;
}, Nd = (e, t) => {
  const a = {};
  for (const r in e)
    (!Io(r) || !(r.slice(9) in t)) && (a[r] = e[r]);
  return a;
};
function Bd(e, t, a) {
  const { props: r, children: o, component: i } = e, { props: n, children: l, patchFlag: s } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (a && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return r ? _i(r, n, d) : !!n;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (n[p] !== r[p] && !Hr(d, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === n ? !1 : r ? n ? _i(r, n, d) : !0 : !!n;
  return !1;
}
function _i(e, t, a) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Hr(a, i))
      return !0;
  }
  return !1;
}
function Ld({ vnode: e, parent: t }, a) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = a, t = t.parent;
    else
      break;
  }
}
const gl = (e) => e.__isSuspense;
function Dd(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
const _e = Symbol.for("v-fgt"), Kr = Symbol.for("v-txt"), Ne = Symbol.for("v-cmt"), dr = Symbol.for("v-stc"), Ba = [];
let Qe = null;
function y(e = !1) {
  Ba.push(Qe = e ? null : []);
}
function Fd() {
  Ba.pop(), Qe = Ba[Ba.length - 1] || null;
}
let Ua = 1;
function kr(e, t = !1) {
  Ua += e, e < 0 && Qe && t && (Qe.hasOnce = !0);
}
function bl(e) {
  return e.dynamicChildren = Ua > 0 ? Qe || ya : null, Fd(), Ua > 0 && Qe && Qe.push(e), e;
}
function z(e, t, a, r, o, i) {
  return bl(
    N(
      e,
      t,
      a,
      r,
      o,
      i,
      !0
    )
  );
}
function ee(e, t, a, r, o) {
  return bl(
    q(
      e,
      t,
      a,
      r,
      o,
      !0
    )
  );
}
function qa(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function oa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wl = ({ key: e }) => e ?? null, cr = ({
  ref: e,
  ref_key: t,
  ref_for: a
}) => (typeof e == "number" && (e = "" + e), e != null ? Te(e) || Ae(e) || de(e) ? { i: je, r: e, k: t, f: !!a } : e : null);
function N(e, t = null, a = null, r = 0, o = null, i = e === _e ? 0 : 1, n = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wl(t),
    ref: t && cr(t),
    scopeId: Ln,
    slotScopeIds: null,
    children: a,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: je
  };
  return l ? (Jo(s, a), i & 128 && e.normalize(s)) : a && (s.shapeFlag |= Te(a) ? 8 : 16), Ua > 0 && // avoid a block node from tracking itself
  !n && // has current parent block
  Qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Qe.push(s), s;
}
const q = Rd;
function Rd(e, t = null, a = null, r = 0, o = null, i = !1) {
  if ((!e || e === Jn) && (e = Ne), qa(e)) {
    const l = Ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return a && Jo(l, a), Ua > 0 && !i && Qe && (l.shapeFlag & 6 ? Qe[Qe.indexOf(e)] = l : Qe.push(l)), l.patchFlag = -2, l;
  }
  if (Jd(e) && (e = e.__vccOpts), t) {
    t = Go(t);
    let { class: l, style: s } = t;
    l && !Te(l) && (t.class = he(l)), Se(s) && (Ho(s) && !te(s) && (s = Ee({}, s)), t.style = Jt(s));
  }
  const n = Te(e) ? 1 : gl(e) ? 128 : Dn(e) ? 64 : Se(e) ? 4 : de(e) ? 2 : 0;
  return N(
    e,
    t,
    a,
    r,
    o,
    n,
    i,
    !0
  );
}
function Go(e) {
  return e ? Ho(e) || il(e) ? Ee({}, e) : e : null;
}
function Ht(e, t, a = !1, r = !1) {
  const { props: o, ref: i, patchFlag: n, children: l, transition: s } = e, d = t ? De(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && wl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && i ? te(i) ? i.concat(cr(t)) : [i, cr(t)] : cr(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? n === -1 ? 16 : n | 16 : n,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: s,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ht(e.ssContent),
    ssFallback: e.ssFallback && Ht(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && r && Ra(
    c,
    s.clone(c)
  ), c;
}
function ue(e = " ", t = 0) {
  return q(Kr, null, e, t);
}
function Z(e = "", t = !1) {
  return t ? (y(), ee(Ne, null, e)) : q(Ne, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? q(Ne) : te(e) ? q(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qa(e) ? Rt(e) : q(Kr, null, String(e));
}
function Rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ht(e);
}
function Jo(e, t) {
  let a = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (te(t))
    a = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Jo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      a = 32;
      const o = t._;
      !o && !il(t) ? t._ctx = je : o === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else de(t) ? (t = { default: t, _ctx: je }, a = 32) : (t = String(t), r & 64 ? (a = 16, t = [ue(t)]) : a = 8);
  e.children = t, e.shapeFlag |= a;
}
function De(...e) {
  const t = {};
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = he([t.class, r.class]));
      else if (o === "style")
        t.style = Jt([t.style, r.style]);
      else if (Ar(o)) {
        const i = t[o], n = r[o];
        n && i !== n && !(te(i) && i.includes(n)) && (t[o] = i ? [].concat(i, n) : n);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function yt(e, t, a, r = null) {
  vt(e, t, 7, [
    a,
    r
  ]);
}
const Ud = tl();
let qd = 0;
function Hd(e, t, a) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Ud, i = {
    uid: qd++,
    vnode: e,
    type: r,
    parent: t,
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
    scope: new bs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ll(r, o),
    emitsOptions: ml(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
    setupContext: null,
    // suspense related
    suspense: a,
    suspenseId: a ? a.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = jd.bind(null, i), e.ce && e.ce(i), i;
}
let Be = null;
const mt = () => Be || je;
let _r, zo;
{
  const e = Mr(), t = (a, r) => {
    let o;
    return (o = e[a]) || (o = e[a] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((n) => n(i)) : o[0](i);
    };
  };
  _r = t(
    "__VUE_INSTANCE_SETTERS__",
    (a) => Be = a
  ), zo = t(
    "__VUE_SSR_SETTERS__",
    (a) => Ha = a
  );
}
const er = (e) => {
  const t = Be;
  return _r(e), e.scope.on(), () => {
    e.scope.off(), _r(t);
  };
}, $i = () => {
  Be && Be.scope.off(), _r(null);
};
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let Ha = !1;
function Kd(e, t = !1, a = !1) {
  t && zo(t);
  const { props: r, children: o } = e.vnode, i = yl(e);
  yd(e, r, i, t), $d(e, o, a || t);
  const n = i ? Wd(e, t) : void 0;
  return t && zo(!1), n;
}
function Wd(e, t) {
  const a = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ud);
  const { setup: r } = a;
  if (r) {
    Mt();
    const o = e.setupContext = r.length > 1 ? kl(e) : null, i = er(e), n = Xa(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = pn(n);
    if (Nt(), i(), (l || e.sp) && !_a(e) && Kn(e), l) {
      if (n.then($i, $i), t)
        return n.then((s) => {
          Si(e, s);
        }).catch((s) => {
          Dr(s, e, 0);
        });
      e.asyncDep = n;
    } else
      Si(e, n);
  } else
    xl(e);
}
function Si(e, t, a) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Pn(t)), xl(e);
}
function xl(e, t, a) {
  const r = e.type;
  e.render || (e.render = r.render || ut);
  {
    const o = er(e);
    Mt();
    try {
      fd(e);
    } finally {
      Nt(), o();
    }
  }
}
const Zd = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function kl(e) {
  const t = (a) => {
    e.exposed = a || {};
  };
  return {
    attrs: new Proxy(e.attrs, Zd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Wr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pn(Ls(e.exposed)), {
    get(t, a) {
      if (a in t)
        return t[a];
      if (a in Na)
        return Na[a](e);
    },
    has(t, a) {
      return a in t || a in Na;
    }
  })) : e.proxy;
}
function Gd(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Jd(e) {
  return de(e) && "__vccOpts" in e;
}
const V = (e, t) => Hs(e, t, Ha);
function Yd(e, t, a) {
  try {
    kr(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !te(t) ? qa(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (r > 3 ? a = Array.prototype.slice.call(arguments, 2) : r === 3 && qa(a) && (a = [a]), q(e, t, a));
  } finally {
    kr(1);
  }
}
const Xd = "3.5.24";
/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Eo;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    Eo = /* @__PURE__ */ Ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Eo ? (e) => Eo.createHTML(e) : (e) => e, Qd = "http://www.w3.org/2000/svg", ec = "http://www.w3.org/1998/Math/MathML", Ot = typeof document < "u" ? document : null, zi = Ot && /* @__PURE__ */ Ot.createElement("template"), tc = {
  insert: (e, t, a) => {
    t.insertBefore(e, a || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, a, r) => {
    const o = t === "svg" ? Ot.createElementNS(Qd, e) : t === "mathml" ? Ot.createElementNS(ec, e) : a ? Ot.createElement(e, { is: a }) : Ot.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Ot.createTextNode(e),
  createComment: (e) => Ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, a, r, o, i) {
    const n = a ? a.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), a), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      zi.innerHTML = _l(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = zi.content;
      if (r === "svg" || r === "mathml") {
        const s = l.firstChild;
        for (; s.firstChild; )
          l.appendChild(s.firstChild);
        l.removeChild(s);
      }
      t.insertBefore(l, a);
    }
    return [
      // first
      n ? n.nextSibling : t.firstChild,
      // last
      a ? a.previousSibling : t.lastChild
    ];
  }
}, Dt = "transition", Oa = "animation", Ka = Symbol("_vtc"), $l = {
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
}, ac = /* @__PURE__ */ Ee(
  {},
  Fn,
  $l
), rc = (e) => (e.displayName = "Transition", e.props = ac, e), Wa = /* @__PURE__ */ rc(
  (e, { slots: t }) => Yd(Qs, oc(e), t)
), ta = (e, t = []) => {
  te(e) ? e.forEach((a) => a(...t)) : e && e(...t);
}, Ei = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function oc(e) {
  const t = {};
  for (const F in e)
    F in $l || (t[F] = e[F]);
  if (e.css === !1)
    return t;
  const {
    name: a = "v",
    type: r,
    duration: o,
    enterFromClass: i = `${a}-enter-from`,
    enterActiveClass: n = `${a}-enter-active`,
    enterToClass: l = `${a}-enter-to`,
    appearFromClass: s = i,
    appearActiveClass: d = n,
    appearToClass: c = l,
    leaveFromClass: u = `${a}-leave-from`,
    leaveActiveClass: p = `${a}-leave-active`,
    leaveToClass: h = `${a}-leave-to`
  } = e, f = ic(o), w = f && f[0], _ = f && f[1], {
    onBeforeEnter: b,
    onEnter: $,
    onEnterCancelled: x,
    onLeave: m,
    onLeaveCancelled: S,
    onBeforeAppear: P = b,
    onAppear: ae = $,
    onAppearCancelled: X = x
  } = t, Q = (F, I, L, E) => {
    F._enterCancelled = E, aa(F, I ? c : l), aa(F, I ? d : n), L && L();
  }, G = (F, I) => {
    F._isLeaving = !1, aa(F, u), aa(F, h), aa(F, p), I && I();
  }, ne = (F) => (I, L) => {
    const E = F ? ae : $, H = () => Q(I, F, L);
    ta(E, [I, H]), Ti(() => {
      aa(I, F ? s : i), Tt(I, F ? c : l), Ei(E) || Oi(I, r, w, H);
    });
  };
  return Ee(t, {
    onBeforeEnter(F) {
      ta(b, [F]), Tt(F, i), Tt(F, n);
    },
    onBeforeAppear(F) {
      ta(P, [F]), Tt(F, s), Tt(F, d);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(F, I) {
      F._isLeaving = !0;
      const L = () => G(F, I);
      Tt(F, u), F._enterCancelled ? (Tt(F, p), Pi(F)) : (Pi(F), Tt(F, p)), Ti(() => {
        F._isLeaving && (aa(F, u), Tt(F, h), Ei(m) || Oi(F, r, _, L));
      }), ta(m, [F, L]);
    },
    onEnterCancelled(F) {
      Q(F, !1, void 0, !0), ta(x, [F]);
    },
    onAppearCancelled(F) {
      Q(F, !0, void 0, !0), ta(X, [F]);
    },
    onLeaveCancelled(F) {
      G(F), ta(S, [F]);
    }
  });
}
function ic(e) {
  if (e == null)
    return null;
  if (Se(e))
    return [no(e.enter), no(e.leave)];
  {
    const t = no(e);
    return [t, t];
  }
}
function no(e) {
  return vo(e);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.add(a)), (e[Ka] || (e[Ka] = /* @__PURE__ */ new Set())).add(t);
}
function aa(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const a = e[Ka];
  a && (a.delete(t), a.size || (e[Ka] = void 0));
}
function Ti(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let nc = 0;
function Oi(e, t, a, r) {
  const o = e._endId = ++nc, i = () => {
    o === e._endId && r();
  };
  if (a != null)
    return setTimeout(i, a);
  const { type: n, timeout: l, propCount: s } = lc(e, t);
  if (!n)
    return r();
  const d = n + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(d, p), i();
  }, p = (h) => {
    h.target === e && ++c >= s && u();
  };
  setTimeout(() => {
    c < s && u();
  }, l + 1), e.addEventListener(d, p);
}
function lc(e, t) {
  const a = window.getComputedStyle(e), r = (f) => (a[f] || "").split(", "), o = r(`${Dt}Delay`), i = r(`${Dt}Duration`), n = Ai(o, i), l = r(`${Oa}Delay`), s = r(`${Oa}Duration`), d = Ai(l, s);
  let c = null, u = 0, p = 0;
  t === Dt ? n > 0 && (c = Dt, u = n, p = i.length) : t === Oa ? d > 0 && (c = Oa, u = d, p = s.length) : (u = Math.max(n, d), c = u > 0 ? n > d ? Dt : Oa : null, p = c ? c === Dt ? i.length : s.length : 0);
  const h = c === Dt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Dt}Property`).toString()
  );
  return {
    type: c,
    timeout: u,
    propCount: p,
    hasTransform: h
  };
}
function Ai(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((a, r) => Vi(a) + Vi(e[r])));
}
function Vi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function sc(e, t, a) {
  const r = e[Ka];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : a ? e.setAttribute("class", t) : e.className = t;
}
const $r = Symbol("_vod"), Sl = Symbol("_vsh"), Yo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: a }) {
    e[$r] = e.style.display === "none" ? "" : e.style.display, a && t ? a.beforeEnter(e) : Aa(e, t);
  },
  mounted(e, { value: t }, { transition: a }) {
    a && t && a.enter(e);
  },
  updated(e, { value: t, oldValue: a }, { transition: r }) {
    !t != !a && (r ? t ? (r.beforeEnter(e), Aa(e, !0), r.enter(e)) : r.leave(e, () => {
      Aa(e, !1);
    }) : Aa(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Aa(e, t);
  }
};
function Aa(e, t) {
  e.style.display = t ? e[$r] : "none", e[Sl] = !t;
}
const Cl = Symbol("");
function dc(e) {
  const t = mt();
  if (!t)
    return;
  const a = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => Sr(i, o));
  }, r = () => {
    const o = e(t.proxy);
    t.ce ? Sr(t.ce, o) : To(t.subTree, o), a(o);
  };
  Gn(() => {
    Mn(r);
  }), dt(() => {
    ve(r, ut, { flush: "post" });
    const o = new MutationObserver(r);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Ur(() => o.disconnect());
  });
}
function To(e, t) {
  if (e.shapeFlag & 128) {
    const a = e.suspense;
    e = a.activeBranch, a.pendingBranch && !a.isHydrating && a.effects.push(() => {
      To(a.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Sr(e.el, t);
  else if (e.type === _e)
    e.children.forEach((a) => To(a, t));
  else if (e.type === dr) {
    let { el: a, anchor: r } = e;
    for (; a && (Sr(a, t), a !== r); )
      a = a.nextSibling;
  }
}
function Sr(e, t) {
  if (e.nodeType === 1) {
    const a = e.style;
    let r = "";
    for (const o in t) {
      const i = gs(t[o]);
      a.setProperty(`--${o}`, i), r += `--${o}: ${i};`;
    }
    a[Cl] = r;
  }
}
const cc = /(?:^|;)\s*display\s*:/;
function uc(e, t, a) {
  const r = e.style, o = Te(a);
  let i = !1;
  if (a && !o) {
    if (t)
      if (Te(t))
        for (const n of t.split(";")) {
          const l = n.slice(0, n.indexOf(":")).trim();
          a[l] == null && ur(r, l, "");
        }
      else
        for (const n in t)
          a[n] == null && ur(r, n, "");
    for (const n in a)
      n === "display" && (i = !0), ur(r, n, a[n]);
  } else if (o) {
    if (t !== a) {
      const n = r[Cl];
      n && (a += ";" + n), r.cssText = a, i = cc.test(a);
    }
  } else t && e.removeAttribute("style");
  $r in e && (e[$r] = i ? r.display : "", e[Sl] && (r.display = "none"));
}
const ji = /\s*!important$/;
function ur(e, t, a) {
  if (te(a))
    a.forEach((r) => ur(e, t, r));
  else if (a == null && (a = ""), t.startsWith("--"))
    e.setProperty(t, a);
  else {
    const r = pc(e, t);
    ji.test(a) ? e.setProperty(
      Ge(r),
      a.replace(ji, ""),
      "important"
    ) : e[r] = a;
  }
}
const Ii = ["Webkit", "Moz", "ms"], lo = {};
function pc(e, t) {
  const a = lo[t];
  if (a)
    return a;
  let r = Le(t);
  if (r !== "filter" && r in e)
    return lo[t] = r;
  r = jr(r);
  for (let o = 0; o < Ii.length; o++) {
    const i = Ii[o] + r;
    if (i in e)
      return lo[t] = i;
  }
  return t;
}
const Mi = "http://www.w3.org/1999/xlink";
function Ni(e, t, a, r, o, i = vs(t)) {
  r && t.startsWith("xlink:") ? a == null ? e.removeAttributeNS(Mi, t.slice(6, t.length)) : e.setAttributeNS(Mi, t, a) : a == null || i && !vn(a) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ht(a) ? String(a) : a
  );
}
function Bi(e, t, a, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    a != null && (e[t] = t === "innerHTML" ? _l(a) : a);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, s = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(a);
    (l !== s || !("_value" in e)) && (e.value = s), a == null && e.removeAttribute(t), e._value = a;
    return;
  }
  let n = !1;
  if (a === "" || a == null) {
    const l = typeof e[t];
    l === "boolean" ? a = vn(a) : a == null && l === "string" ? (a = "", n = !0) : l === "number" && (a = 0, n = !0);
  }
  try {
    e[t] = a;
  } catch {
  }
  n && e.removeAttribute(o || t);
}
function jt(e, t, a, r) {
  e.addEventListener(t, a, r);
}
function fc(e, t, a, r) {
  e.removeEventListener(t, a, r);
}
const Li = Symbol("_vei");
function hc(e, t, a, r, o = null) {
  const i = e[Li] || (e[Li] = {}), n = i[t];
  if (r && n)
    n.value = r;
  else {
    const [l, s] = vc(t);
    if (r) {
      const d = i[t] = bc(
        r,
        o
      );
      jt(e, l, d, s);
    } else n && (fc(e, l, n, s), i[t] = void 0);
  }
}
const Di = /(?:Once|Passive|Capture)$/;
function vc(e) {
  let t;
  if (Di.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Di); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ge(e.slice(2)), t];
}
let so = 0;
const mc = /* @__PURE__ */ Promise.resolve(), gc = () => so || (mc.then(() => so = 0), so = Date.now());
function bc(e, t) {
  const a = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= a.attached)
      return;
    vt(
      wc(r, a.value),
      t,
      5,
      [r]
    );
  };
  return a.value = e, a.attached = gc(), a;
}
function wc(e, t) {
  if (te(t)) {
    const a = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      a.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yc = (e, t, a, r, o, i) => {
  const n = o === "svg";
  t === "class" ? sc(e, r, n) : t === "style" ? uc(e, a, r) : Ar(t) ? Io(t) || hc(e, t, a, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xc(e, t, r, n)) ? (Bi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ni(e, t, r, n, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Te(r)) ? Bi(e, Le(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ni(e, t, r, n));
};
function xc(e, t, a, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fi(t) && de(a));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Fi(t) && Te(a) ? !1 : t in e;
}
const Ri = {};
// @__NO_SIDE_EFFECTS__
function kc(e, t, a) {
  let r = /* @__PURE__ */ ed(e, t);
  Vr(r) && (r = Ee({}, r, t));
  class o extends Xo {
    constructor(n) {
      super(r, n, a);
    }
  }
  return o.def = r, o;
}
const _c = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Xo extends _c {
  constructor(t, a = {}, r = Oo) {
    super(), this._def = t, this._props = a, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== Oo ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Ee({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Xo) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Ct(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const a of t)
      this._setAttr(a.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (r, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: n } = r;
      let l;
      if (i && !te(i))
        for (const s in i) {
          const d = i[s];
          (d === Number || d && d.type === Number) && (s in this._props && (this._props[s] = vo(this._props[s])), (l || (l = /* @__PURE__ */ Object.create(null)))[Le(s)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot && this._applyStyles(n), this._mount(r);
    }, a = this._def.__asyncLoader;
    a ? this._pendingResolve = a().then((r) => {
      r.configureApp = this._def.configureApp, t(this._def = r, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const a = this._instance && this._instance.exposed;
    if (a)
      for (const r in a)
        xe(this, r) || Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => k(a[r])
        });
  }
  _resolveProps(t) {
    const { props: a } = t, r = te(a) ? a : Object.keys(a || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
    for (const o of r.map(Le))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const a = this.hasAttribute(t);
    let r = a ? this.getAttribute(t) : Ri;
    const o = Le(t);
    a && this._numberProps && this._numberProps[o] && (r = vo(r)), this._setProp(o, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, a, r = !0, o = !1) {
    if (a !== this._props[t] && (this._dirty = !0, a === Ri ? delete this._props[t] : (this._props[t] = a, t === "key" && this._app && (this._app._ceVNode.key = a)), o && this._instance && this._update(), r)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), a === !0 ? this.setAttribute(Ge(t), "") : typeof a == "string" || typeof a == "number" ? this.setAttribute(Ge(t), a + "") : a || this.removeAttribute(Ge(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Pc(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const a = q(this._def, Ee(t, this._props));
    return this._instance || (a.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0;
      const o = (i, n) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Vr(n[0]) ? Ee({ detail: n }, n[0]) : { detail: n }
          )
        );
      };
      r.emit = (i, ...n) => {
        o(i, n), Ge(i) !== i && o(Ge(i), n);
      }, this._setParent();
    }), a;
  }
  _applyStyles(t, a) {
    if (!t) return;
    if (a) {
      if (a === this._def || this._styleChildren.has(a))
        return;
      this._styleChildren.add(a);
    }
    const r = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = document.createElement("style");
      r && i.setAttribute("nonce", r), i.textContent = t[o], this.shadowRoot.prepend(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let a;
    for (; a = this.firstChild; ) {
      const r = a.nodeType === 1 && a.getAttribute("slot") || "default";
      (t[r] || (t[r] = [])).push(a), this.removeChild(a);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), a = this._instance.type.__scopeId;
    for (let r = 0; r < t.length; r++) {
      const o = t[r], i = o.getAttribute("name") || "default", n = this._slots[i], l = o.parentNode;
      if (n)
        for (const s of n) {
          if (a && s.nodeType === 1) {
            const d = a + "-s", c = document.createTreeWalker(s, 1);
            s.setAttribute(d, "");
            let u;
            for (; u = c.nextNode(); )
              u.setAttribute(d, "");
          }
          l.insertBefore(s, o);
        }
      else
        for (; o.firstChild; ) l.insertBefore(o.firstChild, o);
      l.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const a = /* @__PURE__ */ new Set();
    for (const r of t) {
      const o = r.querySelectorAll("slot");
      for (let i = 0; i < o.length; i++)
        a.add(o[i]);
    }
    return Array.from(a);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const Kt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (a) => sr(t, a) : t;
};
function $c(e) {
  e.target.composing = !0;
}
function Ui(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const st = Symbol("_assign");
function qi(e, t, a) {
  return t && (e = e.trim()), a && (e = Ir(e)), e;
}
const Cr = {
  created(e, { modifiers: { lazy: t, trim: a, number: r } }, o) {
    e[st] = Kt(o);
    const i = r || o.props && o.props.type === "number";
    jt(e, t ? "change" : "input", (n) => {
      n.target.composing || e[st](qi(e.value, a, i));
    }), (a || i) && jt(e, "change", () => {
      e.value = qi(e.value, a, i);
    }), t || (jt(e, "compositionstart", $c), jt(e, "compositionend", Ui), jt(e, "change", Ui));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: a, modifiers: { lazy: r, trim: o, number: i } }, n) {
    if (e[st] = Kt(n), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ir(e.value) : e.value, s = t ?? "";
    l !== s && (document.activeElement === e && e.type !== "range" && (r && t === a || o && e.value.trim() === s) || (e.value = s));
  }
}, zl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, a) {
    e[st] = Kt(a), jt(e, "change", () => {
      const r = e._modelValue, o = Sa(e), i = e.checked, n = e[st];
      if (te(r)) {
        const l = Bo(r, o), s = l !== -1;
        if (i && !s)
          n(r.concat(o));
        else if (!i && s) {
          const d = [...r];
          d.splice(l, 1), n(d);
        }
      } else if (Ca(r)) {
        const l = new Set(r);
        i ? l.add(o) : l.delete(o), n(l);
      } else
        n(El(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Hi,
  beforeUpdate(e, t, a) {
    e[st] = Kt(a), Hi(e, t, a);
  }
};
function Hi(e, { value: t, oldValue: a }, r) {
  e._modelValue = t;
  let o;
  if (te(t))
    o = Bo(t, r.props.value) > -1;
  else if (Ca(t))
    o = t.has(r.props.value);
  else {
    if (t === a) return;
    o = da(t, El(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Sc = {
  created(e, { value: t }, a) {
    e.checked = da(t, a.props.value), e[st] = Kt(a), jt(e, "change", () => {
      e[st](Sa(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: a }, r) {
    e[st] = Kt(r), t !== a && (e.checked = da(t, r.props.value));
  }
}, Cc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: a } }, r) {
    const o = Ca(t);
    jt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (n) => n.selected).map(
        (n) => a ? Ir(Sa(n)) : Sa(n)
      );
      e[st](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, Ct(() => {
        e._assigning = !1;
      });
    }), e[st] = Kt(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ki(e, t);
  },
  beforeUpdate(e, t, a) {
    e[st] = Kt(a);
  },
  updated(e, { value: t }) {
    e._assigning || Ki(e, t);
  }
};
function Ki(e, t) {
  const a = e.multiple, r = te(t);
  if (!(a && !r && !Ca(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const n = e.options[o], l = Sa(n);
      if (a)
        if (r) {
          const s = typeof l;
          s === "string" || s === "number" ? n.selected = t.some((d) => String(d) === String(l)) : n.selected = Bo(t, l) > -1;
        } else
          n.selected = t.has(l);
      else if (da(Sa(n), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !a && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Sa(e) {
  return "_value" in e ? e._value : e.value;
}
function El(e, t) {
  const a = t ? "_trueValue" : "_falseValue";
  return a in e ? e[a] : t;
}
const zc = {
  created(e, t, a) {
    nr(e, t, a, null, "created");
  },
  mounted(e, t, a) {
    nr(e, t, a, null, "mounted");
  },
  beforeUpdate(e, t, a, r) {
    nr(e, t, a, r, "beforeUpdate");
  },
  updated(e, t, a, r) {
    nr(e, t, a, r, "updated");
  }
};
function Ec(e, t) {
  switch (e) {
    case "SELECT":
      return Cc;
    case "TEXTAREA":
      return Cr;
    default:
      switch (t) {
        case "checkbox":
          return zl;
        case "radio":
          return Sc;
        default:
          return Cr;
      }
  }
}
function nr(e, t, a, r, o) {
  const n = Ec(
    e.tagName,
    a.props && a.props.type
  )[o];
  n && n(e, t, a, r);
}
const Tc = ["ctrl", "shift", "alt", "meta"], Oc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Tc.some((a) => e[`${a}Key`] && !t.includes(a))
}, qe = (e, t) => {
  const a = e._withMods || (e._withMods = {}), r = t.join(".");
  return a[r] || (a[r] = ((o, ...i) => {
    for (let n = 0; n < t.length; n++) {
      const l = Oc[t[n]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  }));
}, Ac = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ot = (e, t) => {
  const a = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return a[r] || (a[r] = ((o) => {
    if (!("key" in o))
      return;
    const i = Ge(o.key);
    if (t.some(
      (n) => n === i || Ac[n] === i
    ))
      return e(o);
  }));
}, Vc = /* @__PURE__ */ Ee({ patchProp: yc }, tc);
let Wi;
function Tl() {
  return Wi || (Wi = Cd(Vc));
}
const Pc = ((...e) => {
  Tl().render(...e);
}), Oo = ((...e) => {
  const t = Tl().createApp(...e), { mount: a } = t;
  return t.mount = (r) => {
    const o = Ic(r);
    if (!o) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const n = a(o, !1, jc(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), n;
  }, t;
});
function jc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ic(e) {
  return Te(e) ? document.querySelector(e) : e;
}
function Mc(e) {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = e, document.head.appendChild(t);
}
function Nc() {
  ["https://rsms.me/inter/inter.css", "https://fonts.cdnfonts.com/css/poppins"].forEach((e) => {
    Mc(e);
  });
}
function Bc(e) {
  Nc();
}
const Wt = Je({
  locale: "nl-NL",
  language: "nl",
  autoDetectLanguage: !0,
  currency: "EUR"
});
function Lc(e) {
  if (Wt.autoDetectLanguage) {
    console.warn("ProboDesignSystem: autoDetectLanguage is enabled. You cannot set the language manually.");
    return;
  }
  if (!["nl", "en", "de"].includes(e)) {
    console.warn(`ProboDesignSystem: ${e} is not a valid language. Valid languages are: nl, en, de`);
    return;
  }
  Wt.language = e;
}
const Qo = new MutationObserver((e) => {
  e[0]?.attributeName === "lang" && (Wt.language = document.documentElement.lang);
}), Ol = () => Qo.disconnect();
function Dc() {
  Qo.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", Ol), Wt.autoDetectLanguage = !0;
}
function Fc() {
  Qo.disconnect(), window.removeEventListener("beforeunload", Ol), Wt.autoDetectLanguage = !1;
}
ve(
  () => Wt.autoDetectLanguage,
  (e) => {
    if (e) {
      Dc();
      return;
    }
    Fc();
  },
  {
    immediate: !0
  }
);
function Rc(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
const pe = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of t)
    a[r] = o;
  return a;
}, Uc = { class: "icon" }, qc = {
  __name: "PIcon",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (y(), z("i", Uc, [
      (y(), ee($a(e.icon)))
    ]));
  }
}, ua = /* @__PURE__ */ pe(qc, [["__scopeId", "data-v-eb0a670a"]]), Hc = ["aria-disabled"], Kc = ["id", "aria-controls", "disabled"], Wc = { class: "title" }, Zc = ["id", "data-testid", "aria-hidden"], Gc = {
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = Y(null);
    return ve(
      () => a.modelValue,
      (i) => {
        i && a.scrollIntoView && setTimeout(() => o.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (i, n) => (y(), z("div", {
      class: he(["accordion-item", { disabled: e.disabled }]),
      "aria-disabled": e.disabled
    }, [
      N("button", {
        id: `accordion-header-${e.ariaTitle}`,
        ref_key: "accordionHeader",
        ref: o,
        class: "header",
        "data-testid": "accordion-trigger",
        "aria-controls": `accordion-content-${e.ariaTitle}`,
        disabled: e.disabled,
        onClick: n[0] || (n[0] = (l) => r("update:modelValue", !e.modelValue))
      }, [
        le(i.$slots, "header", {}, () => [
          N("h3", Wc, U(e.title), 1)
        ]),
        e.hideToggle ? Z("", !0) : (y(), z("div", {
          key: 0,
          "data-testid": "accordion-state-indicator",
          class: he(["state-indicator", { open: e.modelValue }])
        }, [
          q(ua, {
            part: "state-indicator-icon",
            icon: k(Rc)
          }, null, 8, ["icon"])
        ], 2))
      ], 8, Kc),
      q(Wa, { name: "grow" }, {
        default: B(() => [
          ca(N("div", {
            id: `accordion-content-${e.ariaTitle}`,
            "data-testid": `accordion-content-${e.ariaTitle}`,
            "aria-hidden": !e.modelValue,
            class: "content"
          }, [
            q(Wa, { name: "fade" }, {
              default: B(() => [
                e.modelValue ? le(i.$slots, "default", { key: 0 }) : Z("", !0)
              ]),
              _: 3
            })
          ], 8, Zc), [
            [Yo, e.modelValue]
          ])
        ]),
        _: 3
      })
    ], 10, Hc));
  }
}, Al = /* @__PURE__ */ pe(Gc, [["__scopeId", "data-v-3fc5173a"]]), Jc = {
  class: "accordion",
  "data-testid": "accordion"
}, Yc = {
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = V(() => [...a.modelValue]);
    function i(n, l) {
      a.multiple ? (o.value[l] = n, r("update:modelValue", o.value)) : (o.value.forEach((s, d) => {
        d !== l && (o.value[d] = !1);
      }), r("update:modelValue", o.value));
    }
    return (n, l) => (y(), z("div", Jc, [
      (y(!0), z(_e, null, qt(e.items, (s, d) => le(n.$slots, "default", De({
        key: d,
        ref_for: !0
      }, { item: s, index: d, open: o.value[d] }), () => [
        q(Al, {
          modelValue: o.value[d],
          "onUpdate:modelValue": [(c) => o.value[d] = c, (c) => i(c, d)],
          title: s[e.title],
          "aria-title": s.ariaTitle,
          disabled: e.disabled || s.disabled,
          "hide-toggle": e.disabled,
          "scroll-into-view": e.scrollIntoView
        }, {
          default: B(() => [
            le(n.$slots, "content", De({ ref_for: !0 }, s), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "aria-title", "disabled", "hide-toggle", "scroll-into-view"])
      ], !0)), 128))
    ]));
  }
}, Vl = /* @__PURE__ */ pe(Yc, [["__scopeId", "data-v-25a8f65e"]]);
function Zi(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zi(Object(a), !0).forEach(function(r) {
      Xc(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Zi(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function Xc(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Gi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((a, r) => (t.includes(r) || (a[r] = k(e[r])), a), {});
}
function zr(e) {
  return typeof e == "function";
}
function Qc(e) {
  return la(e) || Bt(e);
}
function Pl(e, t, a) {
  let r = e;
  const o = t.split(".");
  for (let i = 0; i < o.length; i++) {
    if (!r[o[i]]) return a;
    r = r[o[i]];
  }
  return r;
}
function co(e, t, a) {
  return V(() => e.some((r) => Pl(t, r, {
    [a]: !1
  })[a]));
}
function Ji(e, t, a) {
  return V(() => e.reduce((r, o) => {
    const i = Pl(t, o, {
      [a]: !1
    })[a] || [];
    return r.concat(i);
  }, []));
}
function jl(e, t, a, r) {
  return e.call(r, k(t), k(a), r);
}
function Il(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function eu(e, t, a, r, o, i, n) {
  let {
    $lazy: l,
    $rewardEarly: s
  } = o, d = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], c = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, p = arguments.length > 10 ? arguments[10] : void 0;
  const h = Y(!!r.value), f = Y(0);
  a.value = !1;
  const w = ve([t, r].concat(d, p), () => {
    if (l && !r.value || s && !u.value && !a.value)
      return;
    let _;
    try {
      _ = jl(e, t, c, n);
    } catch (b) {
      _ = Promise.reject(b);
    }
    f.value++, a.value = !!f.value, h.value = !1, Promise.resolve(_).then((b) => {
      f.value--, a.value = !!f.value, i.value = b, h.value = Il(b);
    }).catch((b) => {
      f.value--, a.value = !!f.value, i.value = b, h.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: h,
    $unwatch: w
  };
}
function tu(e, t, a, r, o, i, n, l) {
  let {
    $lazy: s,
    $rewardEarly: d
  } = r;
  const c = () => ({}), u = V(() => {
    if (s && !a.value || d && !l.value)
      return !1;
    let p = !0;
    try {
      const h = jl(e, t, n, i);
      o.value = h, p = Il(h);
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
function au(e, t, a, r, o, i, n, l, s, d, c) {
  const u = Y(!1), p = e.$params || {}, h = Y(null);
  let f, w;
  e.$async ? {
    $invalid: f,
    $unwatch: w
  } = eu(e.$validator, t, u, a, r, h, o, e.$watchTargets, s, d, c) : {
    $invalid: f,
    $unwatch: w
  } = tu(e.$validator, t, a, r, h, o, s, d);
  const _ = e.$message;
  return {
    $message: zr(_) ? V(() => _(Gi({
      $pending: u,
      $invalid: f,
      $params: Gi(p),
      $model: t,
      $response: h,
      $validator: i,
      $propertyPath: l,
      $property: n
    }))) : _ || "",
    $params: p,
    $pending: u,
    $invalid: f,
    $response: h,
    $unwatch: w
  };
}
function ru() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = k(e), a = Object.keys(t), r = {}, o = {}, i = {};
  let n = null;
  return a.forEach((l) => {
    const s = t[l];
    switch (!0) {
      case zr(s.$validator):
        r[l] = s;
        break;
      case zr(s):
        r[l] = {
          $validator: s
        };
        break;
      case l === "$validationGroups":
        n = s;
        break;
      case l.startsWith("$"):
        i[l] = s;
        break;
      default:
        o[l] = s;
    }
  }), {
    rules: r,
    nestedValidators: o,
    config: i,
    validationGroups: n
  };
}
const ou = "__root";
function iu(e, t, a, r, o, i, n, l, s) {
  const d = Object.keys(e), c = r.get(o, e), u = Y(!1), p = Y(!1), h = Y(0);
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
  return d.length ? (d.forEach((w) => {
    f[w] = au(e[w], t, f.$dirty, i, n, w, a, o, s, p, h);
  }), f.$externalResults = V(() => l.value ? [].concat(l.value).map((w, _) => ({
    $propertyPath: o,
    $property: a,
    $validator: "$externalResults",
    $uid: `${o}-externalResult-${_}`,
    $message: w,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), f.$invalid = V(() => {
    const w = d.some((_) => k(f[_].$invalid));
    return p.value = w, !!f.$externalResults.value.length || w;
  }), f.$pending = V(() => d.some((w) => k(f[w].$pending))), f.$error = V(() => f.$dirty.value ? f.$pending.value || f.$invalid.value : !1), f.$silentErrors = V(() => d.filter((w) => k(f[w].$invalid)).map((w) => {
    const _ = f[w];
    return Je({
      $propertyPath: o,
      $property: a,
      $validator: w,
      $uid: `${o}-${w}`,
      $message: _.$message,
      $params: _.$params,
      $response: _.$response,
      $pending: _.$pending
    });
  }).concat(f.$externalResults.value)), f.$errors = V(() => f.$dirty.value ? f.$silentErrors.value : []), f.$unwatch = () => d.forEach((w) => {
    f[w].$unwatch();
  }), f.$commit = () => {
    p.value = !0, h.value = Date.now();
  }, r.set(o, e, f), f) : (c && r.set(o, e, f), f);
}
function nu(e, t, a, r, o, i, n) {
  const l = Object.keys(e);
  return l.length ? l.reduce((s, d) => (s[d] = Ao({
    validations: e[d],
    state: t,
    key: d,
    parentKey: a,
    resultsCache: r,
    globalConfig: o,
    instance: i,
    externalResults: n
  }), s), {}) : {};
}
function lu(e, t, a) {
  const r = V(() => [t, a].filter((f) => f).reduce((f, w) => f.concat(Object.values(k(w))), [])), o = V({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((f) => f.$dirty) : !1);
    },
    set(f) {
      e.$dirty.value = f;
    }
  }), i = V(() => {
    const f = k(e.$silentErrors) || [], w = r.value.filter((_) => (k(_).$silentErrors || []).length).reduce((_, b) => _.concat(...b.$silentErrors), []);
    return f.concat(w);
  }), n = V(() => {
    const f = k(e.$errors) || [], w = r.value.filter((_) => (k(_).$errors || []).length).reduce((_, b) => _.concat(...b.$errors), []);
    return f.concat(w);
  }), l = V(() => r.value.some((f) => f.$invalid) || k(e.$invalid) || !1), s = V(() => r.value.some((f) => k(f.$pending)) || k(e.$pending) || !1), d = V(() => r.value.some((f) => f.$dirty) || r.value.some((f) => f.$anyDirty) || o.value), c = V(() => o.value ? s.value || l.value : !1), u = () => {
    e.$touch(), r.value.forEach((f) => {
      f.$touch();
    });
  }, p = () => {
    e.$commit(), r.value.forEach((f) => {
      f.$commit();
    });
  }, h = () => {
    e.$reset(), r.value.forEach((f) => {
      f.$reset();
    });
  };
  return r.value.length && r.value.every((f) => f.$dirty) && u(), {
    $dirty: o,
    $errors: n,
    $invalid: l,
    $anyDirty: d,
    $error: c,
    $pending: s,
    $touch: u,
    $reset: h,
    $silentErrors: i,
    $commit: p
  };
}
function Ao(e) {
  let {
    validations: t,
    state: a,
    key: r,
    parentKey: o,
    childResults: i,
    resultsCache: n,
    globalConfig: l = {},
    instance: s,
    externalResults: d
  } = e;
  const c = o ? `${o}.${r}` : r, {
    rules: u,
    nestedValidators: p,
    config: h,
    validationGroups: f
  } = ru(t), w = Ut(Ut({}, l), h), _ = r ? V(() => {
    const $e = k(a);
    return $e ? k($e[r]) : void 0;
  }) : a, b = Ut({}, k(d) || {}), $ = V(() => {
    const $e = k(d);
    return r ? $e ? k($e[r]) : void 0 : $e;
  }), x = iu(u, _, r, n, c, w, s, $, a), m = nu(p, _, c, n, w, s, $), S = {};
  f && Object.entries(f).forEach(($e) => {
    let [Ve, Oe] = $e;
    S[Ve] = {
      $invalid: co(Oe, m, "$invalid"),
      $error: co(Oe, m, "$error"),
      $pending: co(Oe, m, "$pending"),
      $errors: Ji(Oe, m, "$errors"),
      $silentErrors: Ji(Oe, m, "$silentErrors")
    };
  });
  const {
    $dirty: P,
    $errors: ae,
    $invalid: X,
    $anyDirty: Q,
    $error: G,
    $pending: ne,
    $touch: F,
    $reset: I,
    $silentErrors: L,
    $commit: E
  } = lu(x, m, i), H = r ? V({
    get: () => k(_),
    set: ($e) => {
      P.value = !0;
      const Ve = k(a), Oe = k(d);
      Oe && (Oe[r] = b[r]), Ae(Ve[r]) ? Ve[r].value = $e : Ve[r] = $e;
    }
  }) : null;
  r && w.$autoDirty && ve(_, () => {
    P.value || F();
    const $e = k(d);
    $e && ($e[r] = b[r]);
  }, {
    flush: "sync"
  });
  async function ce() {
    return F(), w.$rewardEarly && (E(), await Ct()), await Ct(), new Promise(($e) => {
      if (!ne.value) return $e(!X.value);
      const Ve = ve(ne, () => {
        $e(!X.value), Ve();
      });
    });
  }
  function oe($e) {
    return (i.value || {})[$e];
  }
  function He() {
    Ae(d) ? d.value = b : Object.keys(b).length === 0 ? Object.keys(d).forEach(($e) => {
      delete d[$e];
    }) : Object.assign(d, b);
  }
  return Je(Ut(Ut(Ut({}, x), {}, {
    $model: H,
    $dirty: P,
    $error: G,
    $errors: ae,
    $invalid: X,
    $anyDirty: Q,
    $pending: ne,
    $touch: F,
    $reset: I,
    $path: c || ou,
    $silentErrors: L,
    $validate: ce,
    $commit: E
  }, i && {
    $getResultsForChild: oe,
    $clearExternalResults: He,
    $validationGroups: S
  }), m));
}
let su = class {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(t, a, r) {
    this.storage.set(t, {
      rules: a,
      result: r
    });
  }
  checkRulesValidity(t, a, r) {
    const o = Object.keys(r), i = Object.keys(a);
    return i.length !== o.length || !i.every((n) => o.includes(n)) ? !1 : i.every((n) => a[n].$params ? Object.keys(a[n].$params).every((l) => k(r[n].$params[l]) === k(a[n].$params[l])) : !0);
  }
  get(t, a) {
    const r = this.storage.get(t);
    if (!r) return;
    const {
      rules: o,
      result: i
    } = r, n = this.checkRulesValidity(t, a, o), l = i.$unwatch ? i.$unwatch : () => ({});
    return n ? i : {
      $dirty: i.$dirty,
      $partial: !0,
      $unwatch: l
    };
  }
};
const pr = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, Yi = Symbol("vuelidate#injectChildResults"), Xi = Symbol("vuelidate#removeChildResults");
function du(e) {
  let {
    $scope: t,
    instance: a
  } = e;
  const r = {}, o = Y([]), i = V(() => o.value.reduce((c, u) => (c[u] = k(r[u]), c), {}));
  function n(c, u) {
    let {
      $registerAs: p,
      $scope: h,
      $stopPropagation: f
    } = u;
    f || t === pr.COLLECT_NONE || h === pr.COLLECT_NONE || t !== pr.COLLECT_ALL && t !== h || (r[p] = c, o.value.push(p));
  }
  a.__vuelidateInjectInstances = [].concat(a.__vuelidateInjectInstances || [], n);
  function l(c) {
    o.value = o.value.filter((u) => u !== c), delete r[c];
  }
  a.__vuelidateRemoveInstances = [].concat(a.__vuelidateRemoveInstances || [], l);
  const s = It(Yi, []);
  So(Yi, a.__vuelidateInjectInstances);
  const d = It(Xi, []);
  return So(Xi, a.__vuelidateRemoveInstances), {
    childResults: i,
    sendValidationResultsToParent: s,
    removeValidationResultsFromParent: d
  };
}
function Ml(e) {
  return new Proxy(e, {
    get(t, a) {
      return typeof t[a] == "object" ? Ml(t[a]) : V(() => t[a]);
    }
  });
}
let Qi = 0;
function Zt(e, t) {
  var a;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: o,
    $scope: i = pr.COLLECT_ALL,
    $stopPropagation: n,
    $externalResults: l,
    currentVueInstance: s
  } = r;
  const d = s || ((a = mt()) === null || a === void 0 ? void 0 : a.proxy), c = d ? d.$options : {};
  o || (Qi += 1, o = `_vuelidate_${Qi}`);
  const u = Y({}), p = new su(), {
    childResults: h,
    sendValidationResultsToParent: f,
    removeValidationResultsFromParent: w
  } = d ? du({
    $scope: i,
    instance: d
  }) : {
    childResults: Y({})
  };
  if (!e && c.validations) {
    const _ = c.validations;
    t = Y({}), Zn(() => {
      t.value = d, ve(() => zr(_) ? _.call(t.value, new Ml(t.value)) : _, (b) => {
        u.value = Ao({
          validations: b,
          state: t,
          childResults: h,
          resultsCache: p,
          globalConfig: r,
          instance: d,
          externalResults: l || d.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), r = c.validationsConfig || r;
  } else {
    const _ = Ae(e) || Qc(e) ? e : Je(e || {});
    ve(_, (b) => {
      u.value = Ao({
        validations: b,
        state: t,
        childResults: h,
        resultsCache: p,
        globalConfig: r,
        instance: d ?? {},
        externalResults: l
      });
    }, {
      immediate: !0
    });
  }
  return d && (f.forEach((_) => _(u, {
    $registerAs: o,
    $scope: i,
    $stopPropagation: n
  })), pa(() => w.forEach((_) => _(o)))), V(() => Ut(Ut({}, k(u.value)), h.value));
}
function en(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function Za(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? en(Object(a), !0).forEach(function(r) {
      cu(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : en(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function cu(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Er(e) {
  return typeof e == "function";
}
function Vo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Zr(e) {
  return Er(e.$validator) ? Za({}, e) : {
    $validator: e
  };
}
function Nl(e) {
  return typeof e == "object" ? e.$valid : e;
}
function Bl(e) {
  return e.$validator || e;
}
function uu(e, t) {
  if (!Vo(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!Vo(t) && !Er(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Zr(t);
  return a.$params = Za(Za({}, a.$params || {}), e), a;
}
function pu(e, t) {
  if (!Er(e) && typeof k(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!Vo(t) && !Er(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Zr(t);
  return a.$message = e, a;
}
function fu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const a = Zr(e);
  return Za(Za({}, a), {}, {
    $async: !0,
    $watchTargets: t
  });
}
function hu(e) {
  return {
    $validator(t) {
      for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      return k(t).reduce((i, n, l) => {
        const s = Object.entries(n).reduce((d, c) => {
          let [u, p] = c;
          const h = e[u] || {}, f = Object.entries(h).reduce((w, _) => {
            let [b, $] = _;
            const x = Bl($).call(this, p, n, l, ...r), m = Nl(x);
            if (w.$data[b] = x, w.$data.$invalid = !m || !!w.$data.$invalid, w.$data.$error = w.$data.$invalid, !m) {
              let S = $.$message || "";
              const P = $.$params || {};
              typeof S == "function" && (S = S({
                $pending: !1,
                $invalid: !m,
                $params: P,
                $model: p,
                $response: x
              })), w.$errors.push({
                $property: u,
                $message: S,
                $params: P,
                $response: x,
                $model: p,
                $pending: !1,
                $validator: b
              });
            }
            return {
              $valid: w.$valid && m,
              $data: w.$data,
              $errors: w.$errors
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
          $valid: i.$valid && s.$valid,
          $data: i.$data.concat(s.$data),
          $errors: i.$errors.concat(s.$errors)
        };
      }, {
        $valid: !0,
        $data: [],
        $errors: []
      });
    },
    $message: (t) => {
      let {
        $response: a
      } = t;
      return a ? a.$errors.map((r) => Object.values(r).map((o) => o.map((i) => i.$message)).reduce((o, i) => o.concat(i), [])) : [];
    }
  };
}
const tr = (e) => {
  if (e = k(e), Array.isArray(e)) return !!e.length;
  if (e == null)
    return !1;
  if (e === !1)
    return !0;
  if (e instanceof Date)
    return !isNaN(e.getTime());
  if (typeof e == "object") {
    for (let t in e) return !0;
    return !1;
  }
  return !!String(e).length;
}, vu = (e) => (e = k(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function Yt() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return (r) => (r = k(r), !tr(r) || t.every((o) => (o.lastIndex = 0, o.test(r))));
}
var Ue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: hu,
  len: vu,
  normalizeValidatorObject: Zr,
  regex: Yt,
  req: tr,
  unwrap: k,
  unwrapNormalizedValidator: Bl,
  unwrapValidatorResponse: Nl,
  withAsync: fu,
  withMessage: pu,
  withParams: uu
});
Yt(/^[a-zA-Z]*$/);
Yt(/^[a-zA-Z0-9]*$/);
Yt(/^\d*(\.\d+)?$/);
const mu = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
Yt(mu);
function gu(e) {
  return typeof e == "string" && (e = e.trim()), tr(e);
}
var Ga = {
  $validator: gu,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function bu(e) {
  return (t) => k(t) === k(e);
}
function wu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: bu(e),
    $message: (a) => `The value must be equal to the ${t} value`,
    $params: {
      equalTo: e,
      otherName: t,
      type: "sameAs"
    }
  };
}
const yu = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
Yt(yu);
function xu(e) {
  return (t) => !tr(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +k(e);
}
function Tr(e) {
  return {
    $validator: xu(e),
    $message: (t) => {
      let {
        $params: a
      } = t;
      return `The minimum value allowed is ${a.min}`;
    },
    $params: {
      min: e,
      type: "minValue"
    }
  };
}
function ku(e) {
  return (t) => !tr(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +k(e);
}
var Or = (e) => ({
  $validator: ku(e),
  $message: (t) => {
    let {
      $params: a
    } = t;
    return `The maximum value allowed is ${a.max}`;
  },
  $params: {
    max: e,
    type: "maxValue"
  }
});
Yt(/(^[0-9]*$)|(^-[0-9]+$)/);
Yt(/^[-]?\d*(\.\d+)?$/);
function _u(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
function $u(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
function Su(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cu(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" })
  ]);
}
const zu = { class: "mini-icon" }, Eu = {
  __name: "PIconMini",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (y(), z("i", zu, [
      (y(), ee($a(e.icon)))
    ]));
  }
}, ft = /* @__PURE__ */ pe(Eu, [["__scopeId", "data-v-206f9b1b"]]), Tu = {
  "copy-button.copy": "Kopieer",
  "copy-button.copied": "Gekopieerd!",
  "theme-toggle.toggle_theme": "Schakel naar {theme} thema",
  "theme-toggle.light": "licht",
  "theme-toggle.dark": "donker",
  "delivery.delivery_options": "Beschikbare leverdatums",
  "delivery.no_extra_cost": "Geen toeslag",
  "delivery.make_your_choice_next_step": "Maak je keuze in de volgende stap",
  "delivery.see_more": "Bekijk alle datums",
  "delivery.see_less": "Bekijk minder datums",
  "delivery.tomorrow": "Morgen",
  "delivery.fastest": "Snelste",
  "delivery.cheapest": "Voordeligst",
  "editor.editing_step": "Aanpassen van: {step}",
  "editor.hide_step.title": "Stap verbergen",
  "editor.hide_step.description": "Deze stap wordt verborgen en overgeslagen.",
  "editor.hide_step.label": "Verbergen",
  "editor.edit_options": "Opties aanpassen",
  "editor.edit_option.height": "Hoogte",
  "editor.edit_option.width": "Breedte",
  "editor.edit_option.amount": "Aantal",
  "editor.save_changes": "Stap overschrijven",
  "editor.default_value.title": "Standaardoptie",
  "editor.default_value.description": "Selecteer een optie om standaard in te stellen voor deze stap.",
  "editor.default_value.label": "Standaard instellen",
  "editor.default_value_value.title": "Standaardwaarde",
  "editor.default_value_value.description": "Stel een standaardwaarde in voor de geselecteerde optie.",
  "editor.default_value_value.label": "Standaardwaarde instellen",
  "editor.hide_option.title": "Optie verbergen",
  "editor.hide_option.description": "Deze optie wordt verborgen en is niet selecteerbaar.",
  "editor.hide_option.label": "Verbergen",
  "editor.edit_image.title": "Afbeelding",
  "editor.edit_image.description": "Kies een andere afbeelding.",
  "editor.edit_image.placeholder": "Voer afbeelding URL in",
  "editor.edit_title.title": "Titel",
  "editor.edit_title.description": "Pas de titel van deze stap aan.",
  "editor.edit_title.placeholder": "Voer stap titel in",
  "editor.edit_description.title": "Beschrijving",
  "editor.edit_description.description": "Pas de beschrijving van deze stap aan.",
  "editor.edit_description.placeholder": "Voer stap beschrijving in",
  "editor.cancel": "Annuleren",
  "editor.width.title": "Breedte",
  "editor.width.description": "Stel een standaard breedte in voor deze stap.",
  "editor.height.title": "Hoogte",
  "editor.height.description": "Stel een standaard hoogte in voor deze stap.",
  "editor.amount.title": "Aantal",
  "editor.amount.description": "Stel een standaard aantal in voor deze stap.",
  "editor.edit_option_title.title": "Titel",
  "editor.edit_option_title.description": "Pas de titel van deze optie aan.",
  "editor.edit_option_title.placeholder": "Voer optie titel in",
  "editor.edit_option_description.title": "Beschrijving",
  "editor.edit_option_description.description": "Pas de beschrijving van deze optie aan.",
  "editor.edit_option_description.placeholder": "Voer optie beschrijving in",
  "editor.apply": "Toepassen",
  "editor.reset": "Resetten",
  "editor.edit_sequence.title": "Volgorde",
  "editor.edit_sequence.description": "Stel de volgorde van deze stap in.",
  "editor.edit_sequence.placeholder": "Volgorde",
  "editor.min_sequence": "Minimale volgorde is {min}",
  "editor.max_sequence": "Maximale volgorde is {max}",
  "editor.number_should_not_exist_twice": "Het nummer mag niet twee keer voorkomen",
  "editor.editor_alert.title": "Een of meer velden bevatten fouten",
  "editor.editor_alert.description": "Corrigeer de fouten voordat je doorgaat.",
  "option.continue": "Doorgaan",
  "option.days": "1 dag | {n} dagen",
  "option.per_unit": "st",
  "option.amount": "Aantal",
  "option.product_photo": "productafbeelding",
  "option.attention": "Maak een nieuwe keuze",
  "option.unavailable": "Niet beschikbaar",
  "option.custom_value": "Aangepaste waarde",
  "option.edit": "Aanpassen",
  "option.step_has_overwrites": "Deze stap heeft aanpassingen",
  "option.step_is_hidden": "Deze stap is verborgen",
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
  "step.new_configuration": "Nieuwe samenstelling",
  "step.height": "Hoogte",
  "step.width": "Breedte",
  "step.amount": "Aantal",
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
  "drag-and-drop.empty_state_desktop": "of sleep je bestand(en)",
  "drag-and-drop.empty_state_mobile": "je bestand(en)",
  "drag-and-drop.choose": "Kies",
  "drag-and-drop.open_uploader": "Open uploader",
  "drag-and-drop.open_specifications": "Open specificaties",
  "drag-and-drop.drop_files": "Laat je bestand(en) hier los",
  "drag-and-drop.warning": "Actie of controle vereist",
  "drag-and-drop.more": "Meer uploaden",
  "drag-and-drop.retry": "Opnieuw",
  "drag-and-drop.open_menu": "Menu openen",
  "drag-and-drop.error": "Fout in bestand",
  "drag-and-drop.success": "Je bent klaar!",
  "drag-and-drop.files_uploading": "{amount} bestand(en) uploaden",
  "drag-and-drop.uploading": "Bestand(en) uploaden",
  "drag-and-drop.cancel": "Upload annuleren",
  "drag-and-drop.errors.file_too_large": "Upload een bestand van maximaal {maxSize} MB",
  "drag-and-drop.errors.invalid_file_type": "Upload een bestand in het volgende type: {acceptedFileFormats}",
  "drag-and-drop.files_processing": "Je bestand wordt verwerkt | {amount} bestanden worden verwerkt",
  "drag-and-drop.processing": "Bestanden worden verwerkt",
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
  "toast.close": "Sluit bericht",
  "editor.no-option": "Geen accessoires"
}, Ou = {
  "copy-button.copy": "Copy",
  "copy-button.copied": "Copied!",
  "theme-toggle.toggle_theme": "Toggle to {theme} theme",
  "theme-toggle.light": "light",
  "theme-toggle.dark": "dark",
  "delivery.delivery_options": "Available delivery dates",
  "delivery.no_extra_cost": "No extra cost",
  "delivery.make_your_choice_next_step": "Make your choice in the next step",
  "delivery.see_more": "See all dates",
  "delivery.see_less": "See less dates",
  "delivery.tomorrow": "Tomorrow",
  "delivery.fastest": "Fastest",
  "delivery.cheapest": "Cheapest",
  "editor.editing_step": "Editing: {step}",
  "editor.hide_step.title": "Hide step",
  "editor.hide_step.description": "This step will be hidden and skipped.",
  "editor.hide_step.label": "Hide",
  "editor.edit_options": "Edit options",
  "editor.edit_option.height": "Height",
  "editor.edit_option.width": "Width",
  "editor.edit_option.amount": "Amount",
  "editor.save_changes": "Overwrite step",
  "editor.default_value.title": "Default option",
  "editor.default_value.description": "Select an option to set as default for this step.",
  "editor.default_value.label": "Set as default",
  "editor.default_value_value.title": "Default value",
  "editor.default_value_value.description": "Set a default value for the selected option.",
  "editor.default_value_value.label": "Set default value",
  "editor.hide_option.title": "Hide option",
  "editor.hide_option.description": "This option will be hidden and not selectable.",
  "editor.hide_option.label": "Hide",
  "editor.edit_image.title": "Image",
  "editor.edit_image.description": "Choose a different image.",
  "editor.edit_image.placeholder": "Enter image URL",
  "editor.edit_title.title": "Title",
  "editor.edit_title.description": "Customize the title of this step.",
  "editor.edit_title.placeholder": "Enter step title",
  "editor.edit_description.title": "Description",
  "editor.edit_description.description": "Customize the description of this step.",
  "editor.edit_description.placeholder": "Enter step description",
  "editor.cancel": "Cancel",
  "editor.width.title": "Width",
  "editor.width.description": "Set a default width for this step.",
  "editor.height.title": "Height",
  "editor.height.description": "Set a default height for this step.",
  "editor.amount.title": "Amount",
  "editor.amount.description": "Set a default amount for this step.",
  "editor.edit_option_title.title": "Title",
  "editor.edit_option_title.description": "Customize the title of this option.",
  "editor.edit_option_title.placeholder": "Enter option title",
  "editor.edit_option_description.title": "Description",
  "editor.edit_option_description.description": "Customize the description of this option.",
  "editor.edit_option_description.placeholder": "Enter option description",
  "editor.apply": "Apply",
  "editor.reset": "Reset",
  "editor.edit_sequence.title": "Sequence",
  "editor.edit_sequence.description": "Set the sequence of this step.",
  "editor.edit_sequence.placeholder": "Sequence",
  "editor.min_sequence": "The minimum sequence is {min}",
  "editor.max_sequence": "The maximum sequence is {max}",
  "editor.number_should_not_exist_twice": "The number should not exist twice",
  "editor.editor_alert.title": "One or more fields contain errors",
  "editor.editor_alert.description": "Please correct the errors before proceeding.",
  "option.continue": "Continue",
  "option.days": "1 day | {n} days",
  "option.per_unit": "pc",
  "option.amount": "Amount",
  "option.product_photo": "product photo",
  "option.attention": "Make a new choice",
  "option.unavailable": "Not available",
  "option.custom_value": "Custom value",
  "option.edit": "Edit",
  "option.step_has_overwrites": "This step has overwrites",
  "option.step_is_hidden": "This step is hidden",
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
  "step.new_configuration": "New Configuration",
  "step.height": "Height",
  "step.width": "Width",
  "step.amount": "Amount",
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
  "drag-and-drop.empty_state_desktop": "or drag your file(s)",
  "drag-and-drop.empty_state_mobile": "your file(s)",
  "drag-and-drop.choose": "Choose",
  "drag-and-drop.open_uploader": "Open uploader",
  "drag-and-drop.open_specifications": "Open specifications",
  "drag-and-drop.drop_files": "Drop your file(s) here",
  "drag-and-drop.warning": "Action or verification required",
  "drag-and-drop.more": "Upload more",
  "drag-and-drop.retry": "Retry",
  "drag-and-drop.open_menu": "Open menu",
  "drag-and-drop.error": "Error in file",
  "drag-and-drop.success": "You're done!",
  "drag-and-drop.files_uploading": "{amount} file(s) uploading",
  "drag-and-drop.uploading": "Uploading file(s)",
  "drag-and-drop.cancel": "Cancel upload",
  "drag-and-drop.errors.file_too_large": "Upload a file of maximum {maxSize} MB",
  "drag-and-drop.errors.invalid_file_type": "Upload a file in the following format: {acceptedFileFormats}",
  "drag-and-drop.files_processing": "Your file is being processed | {amount} files are being processed",
  "drag-and-drop.processing": "Files are being processed",
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
  "toast.close": "Close message",
  "editor.no-option": "No accessories"
}, Au = {
  "copy-button.copy": "Kopie",
  "copy-button.copied": "Kopiert!",
  "theme-toggle.toggle_theme": "Zum {theme} Thema wechseln",
  "theme-toggle.light": "hell",
  "theme-toggle.dark": "dunkel",
  "delivery.delivery_options": "Verfälgbare Lieferdaten",
  "delivery.no_extra_cost": "Keine Zusatzkosten",
  "delivery.make_your_choice_next_step": "Wählen Sie Ihre Wahl in der nächsten Schritt",
  "delivery.see_more": "Alle Daten anzeigen",
  "delivery.see_less": "Weniger Daten anzeigen",
  "delivery.tomorrow": "Morgen",
  "delivery.fastest": "Schnellste",
  "delivery.cheapest": "Aam billigsten",
  "editor.editing_step": "Bearbeiten: {step}",
  "editor.hide_step.title": "Schritt ausblenden",
  "editor.hide_step.description": "Dieser Schritt wird ausgeblendet und übersprungen.",
  "editor.hide_step.label": "Ausblenden",
  "editor.edit_options": "Optionen bearbeiten",
  "editor.edit_option.height": "Höhe",
  "editor.edit_option.width": "Breite",
  "editor.edit_option.amount": "Anzahl",
  "editor.save_changes": "Schritt überschreiben",
  "editor.default_value.title": "Standardwert",
  "editor.default_value.description": "Wählen Sie eine Option, um sie als Standard für diesen Schritt festzulegen.",
  "editor.default_value.label": "Als Standard festlegen",
  "editor.default_value_value.title": "Standardwert",
  "editor.default_value_value.description": "Legen Sie einen Standardwert für die ausgewählte Option fest.",
  "editor.default_value_value.label": "Standardwert festlegen",
  "editor.hide_option.title": "Option ausblenden",
  "editor.hide_option.description": "Diese Option wird ausgeblendet und ist nicht auswählbar.",
  "editor.hide_option.label": "Ausblenden",
  "editor.edit_image.title": "Bild",
  "editor.edit_image.description": "Wählen Sie ein anderes Bild.",
  "editor.edit_image.placeholder": "Bild-URL eingeben",
  "editor.edit_title.title": "Titel",
  "editor.edit_title.description": "Passen Sie den Titel dieses Schritts an.",
  "editor.edit_title.placeholder": "Schritt-Titel eingeben",
  "editor.edit_description.title": "Beschreibung",
  "editor.edit_description.description": "Passen Sie die Beschreibung dieses Schritts an.",
  "editor.edit_description.placeholder": "Schritt-Beschreibung eingeben",
  "editor.cancel": "Abbrechen",
  "editor.width.title": "Breite",
  "editor.width.description": "Legen Sie eine Standardbreite für diesen Schritt fest.",
  "editor.height.title": "Höhe",
  "editor.height.description": "Legen Sie eine Standardhöhe für diesen Schritt fest.",
  "editor.amount.title": "Anzahl",
  "editor.amount.description": "Legen Sie eine Standardanzahl für diesen Schritt fest.",
  "editor.edit_option_title.title": "Titel",
  "editor.edit_option_title.description": "Passen Sie den Titel dieser Option an.",
  "editor.edit_option_title.placeholder": "Option-Titel eingeben",
  "editor.edit_option_description.title": "Beschreibung",
  "editor.edit_option_description.description": "Passen Sie die Beschreibung dieser Option an.",
  "editor.edit_option_description.placeholder": "Option-Beschreibung eingeben",
  "editor.apply": "Anwenden",
  "editor.reset": "Zurücksetzen",
  "editor.edit_sequence.title": "Reihenfolge",
  "editor.edit_sequence.description": "Legen Sie die Reihenfolge dieses Schritts fest.",
  "editor.edit_sequence.placeholder": "Reihenfolge",
  "editor.min_sequence": "Die minimale Reihenfolge ist {min}",
  "editor.max_sequence": "Die maximale Reihenfolge ist {max}",
  "editor.number_should_not_exist_twice": "Die Nummer darf nicht zweimal vorkommen",
  "editor.editor_alert.title": "Ein oder mehrere Felder enthalten Fehler",
  "editor.editor_alert.description": "Korrigieren Sie die Fehler, bevor Sie fortfahren.",
  "option.continue": "Weiter",
  "option.days": "1 Tag | {n} Tage",
  "option.per_unit": "ei",
  "option.amount": "Anzahl",
  "option.product_photo": "produktbild",
  "option.attention": "Weitere Option waehlen",
  "option.unavailable": "Nicht verfügbar",
  "option.custom_value": "Zusatzwert",
  "option.edit": "Bearbeiten",
  "option.step_has_overwrites": "Dieser Schritt hat Anpassungen",
  "option.step_is_hidden": "Dieser Schritt ist verborgen",
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
  "step.new_configuration": "Neue Konfiguration",
  "step.height": "Höhe",
  "step.width": "Breite",
  "step.amount": "Anzahl",
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
  "data-table.undo_selection": "Auswähl aufheben",
  "data-table.delete": "Löschen",
  "data-table.selected": "{amount} ausgewählt",
  "data-table.per_page": "pro Seite",
  "data-table.select_all": "Alles auswählen",
  "data-table.deselect_all": "Alles abwählen",
  "data-table.select_row": "Zeile auswählen",
  "data-table.deselect_row": "Zeile abwählen",
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
  "drag-and-drop.empty_state_desktop": "oder ziehe deine Datei(en)",
  "drag-and-drop.empty_state_mobile": "deine Datei(en)",
  "drag-and-drop.choose": "Auswahl",
  "drag-and-drop.open_uploader": "Uploader oeffnen",
  "drag-and-drop.open_specifications": "Spezifikationen oeffnen",
  "drag-and-drop.drop_files": "Lasse deine Datei(en) hier los",
  "drag-and-drop.warning": "Aktion oder Verifizierung erforderlich",
  "drag-and-drop.more": "Mehr hochladen",
  "drag-and-drop.retry": "Erneut versuchen",
  "drag-and-drop.open_menu": "Menu oeffnen",
  "drag-and-drop.error": "Fehler in der Datei",
  "drag-and-drop.success": "Du bist fertig!",
  "drag-and-drop.files_uploading": "{amount} Datei(en) hochladen",
  "drag-and-drop.uploading": "Dateien hochladen",
  "drag-and-drop.cancel": "Datei(en) abbrechen",
  "drag-and-drop.errors.file_too_large": "Lade eine Datei von maximal {maxSize} MB",
  "drag-and-drop.errors.invalid_file_type": "Lade eine Datei im folgenden Format: {acceptedFileFormats}",
  "drag-and-drop.files_processing": "Deine Datei wird verarbeitet | {amount} Dateien werden verarbeitet",
  "drag-and-drop.processing": "Dateien werden verarbeitet",
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
  "input.choose_filter": "Filter auswählen",
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
  "toast.close": "Schließen der Nachricht",
  "editor.no-option": "Keine Zubehörteile"
}, Vu = { nl: Tu, en: Ou, de: Au };
function Ll(e, t = {}) {
  return e.replace(/{(\w+)}/g, (a, r) => t[r] || `{${r}}`);
}
function Dl(e) {
  const [t] = e.split("."), a = e.substring(e.indexOf(".") + 1);
  return Vu[Wt.language][`${t}.${a}`] || e;
}
function Pu(e, t) {
  return e.replace(/{(\d+)}/g, (a, r) => t[r] || `{${r}}`);
}
function ju(e, t, a = {}) {
  const r = e.split("|").map((i) => i.trim());
  let o;
  return r.length === 1 ? [o] = r : r.length === 2 ? t === 1 ? [o] = r : [, o] = r : t === 0 ? [o] = r : t === 1 ? [, o] = r : o = r[Math.min(t, r.length - 1)], Ll(o, { ...a, count: t, n: t });
}
function M(e, t = null) {
  const a = Dl(e);
  return Array.isArray(t) ? Pu(a) : Ll(a, t);
}
function Iu(e, t, a = null) {
  return ju(Dl(e), t, a);
}
const Mu = { class: "amount-input-container" }, Nu = ["disabled", "aria-label"], Bu = ["id", "disabled", "aria-invalid", "aria-describedby"], Lu = ["disabled", "aria-label"], Du = ["id"], Fu = {
  __name: "PAmountInput",
  props: {
    /** Input ID */
    id: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Number,
      default: null
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
    small: Boolean,
    allowEmpty: Boolean,
    required: Boolean
  },
  emits: ["update:model-value", "blur", "focus"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = V({
      get() {
        return !a.allowEmpty && !a.modelValue ? 1 : a.modelValue;
      },
      set(f) {
        d(f);
      }
    }), i = V(() => a.allowEmpty ? !o.value : o.value === 1), n = V(() => o.value >= a.max), l = V(() => !!a.error), s = V(() => `${a.id}-error`);
    function d(f) {
      if (a.allowEmpty && !f) {
        r("update:model-value", null);
        return;
      }
      f < 0 || Number.isNaN(f) || typeof f != "number" || !f ? (pi(o), r("update:model-value", 1)) : f > a.max ? (pi(o), r("update:model-value", a.max)) : r("update:model-value", f);
    }
    function c() {
      o.value -= 1;
    }
    function u() {
      o.value += 1;
    }
    const p = V(() => a.required ? { value: { required: Ue.withMessage(() => M("input.required"), Ga) } } : { value: {} }), h = Zt(p.value, { value: o });
    return (f, w) => (y(), z("div", Mu, [
      N("div", {
        class: he(["amount-input", { small: e.small }])
      }, [
        N("button", {
          disabled: e.disabled || i.value,
          class: "minus",
          "aria-label": k(M)("amount-input.minus_one"),
          onClick: qe(c, ["stop"])
        }, [
          e.small ? (y(), ee(ft, {
            key: 1,
            icon: k(Su)
          }, null, 8, ["icon"])) : (y(), ee(ua, {
            key: 0,
            icon: k(_u)
          }, null, 8, ["icon"]))
        ], 8, Nu),
        ca(N("input", {
          id: e.id,
          "onUpdate:modelValue": w[0] || (w[0] = (_) => o.value = _),
          class: he([{ "has-error": e.error }, "input"]),
          disabled: e.disabled,
          "aria-label": "Amount input",
          "aria-invalid": l.value,
          "aria-describedby": l.value ? s.value : null,
          type: "number",
          onBlur: w[1] || (w[1] = (_) => {
            k(h).value?.$touch(_), r("blur", _);
          }),
          onFocus: w[2] || (w[2] = (_) => r("focus", _))
        }, null, 42, Bu), [
          [Cr, o.value]
        ]),
        N("button", {
          disabled: e.disabled || n.value,
          class: "plus",
          "aria-label": k(M)("amount-input.plus_one"),
          onClick: qe(u, ["stop"])
        }, [
          e.small ? (y(), ee(ft, {
            key: 1,
            icon: k(Cu)
          }, null, 8, ["icon"])) : (y(), ee(ua, {
            key: 0,
            icon: k($u)
          }, null, 8, ["icon"]))
        ], 8, Lu)
      ], 2),
      e.error || k(h).value?.$errors[0]?.$message ? (y(), z("span", {
        key: 0,
        id: s.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, U(e.error || k(h).value.$errors[0].$message), 9, Du)) : Z("", !0)
    ]));
  }
}, ei = /* @__PURE__ */ pe(Fu, [["__scopeId", "data-v-ee49f574"]]);
function ti(e, t) {
  return Lo() ? (ws(e, t), !0) : !1;
}
const uo = /* @__PURE__ */ new WeakMap(), Ru = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], r = (t = mt()) === null || t === void 0 ? void 0 : t.proxy, o = r ?? Lo();
  if (o == null && !al()) throw new Error("injectLocal must be called in setup");
  return o && uo.has(o) && a in uo.get(o) ? uo.get(o)[a] : It(...e);
}, Uu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qu = (e) => e != null, Hu = Object.prototype.toString, Ku = (e) => Hu.call(e) === "[object Object]", wa = () => {
};
function tn(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function fr(e) {
  return Array.isArray(e) ? e : [e];
}
function Wu(e) {
  return mt();
}
function Zu(e, t = !0, a) {
  Wu() ? dt(e, a) : t ? e() : Ct(e);
}
function Gu(e, t, a) {
  return ve(e, t, {
    ...a,
    immediate: !0
  });
}
const Xt = Uu ? window : void 0;
function ia(e) {
  var t;
  const a = lt(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function it(...e) {
  const t = [], a = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, s, d, c) => (l.addEventListener(s, d, c), () => l.removeEventListener(s, d, c)), o = V(() => {
    const l = fr(lt(e[0])).filter((s) => s != null);
    return l.every((s) => typeof s != "string") ? l : void 0;
  }), i = Gu(() => {
    var l, s;
    return [
      (l = (s = o.value) === null || s === void 0 ? void 0 : s.map((d) => ia(d))) !== null && l !== void 0 ? l : [Xt].filter((d) => d != null),
      fr(lt(o.value ? e[1] : e[0])),
      fr(k(o.value ? e[2] : e[1])),
      lt(o.value ? e[3] : e[2])
    ];
  }, ([l, s, d, c]) => {
    if (a(), !l?.length || !s?.length || !d?.length) return;
    const u = Ku(c) ? { ...c } : c;
    t.push(...l.flatMap((p) => s.flatMap((h) => d.map((f) => r(p, h, f, u)))));
  }, { flush: "post" }), n = () => {
    i(), a();
  };
  return ti(a), n;
}
function Ju(e, t, a = {}) {
  const { window: r = Xt, ignore: o = [], capture: i = !0, detectIframe: n = !1, controls: l = !1 } = a;
  if (!r) return l ? {
    stop: wa,
    cancel: wa,
    trigger: wa
  } : wa;
  let s = !0;
  const d = (_) => lt(o).some((b) => {
    if (typeof b == "string") return Array.from(r.document.querySelectorAll(b)).some(($) => $ === _.target || _.composedPath().includes($));
    {
      const $ = ia(b);
      return $ && (_.target === $ || _.composedPath().includes($));
    }
  });
  function c(_) {
    const b = lt(_);
    return b && b.$.subTree.shapeFlag === 16;
  }
  function u(_, b) {
    const $ = lt(_), x = $.$.subTree && $.$.subTree.children;
    return x == null || !Array.isArray(x) ? !1 : x.some((m) => m.el === b.target || b.composedPath().includes(m.el));
  }
  const p = (_) => {
    const b = ia(e);
    if (_.target != null && !(!(b instanceof Element) && c(e) && u(e, _)) && !(!b || b === _.target || _.composedPath().includes(b))) {
      if ("detail" in _ && _.detail === 0 && (s = !d(_)), !s) {
        s = !0;
        return;
      }
      t(_);
    }
  };
  let h = !1;
  const f = [
    it(r, "click", (_) => {
      h || (h = !0, setTimeout(() => {
        h = !1;
      }, 0), p(_));
    }, {
      passive: !0,
      capture: i
    }),
    it(r, "pointerdown", (_) => {
      const b = ia(e);
      s = !d(_) && !!(b && !_.composedPath().includes(b));
    }, { passive: !0 }),
    n && it(r, "blur", (_) => {
      setTimeout(() => {
        var b;
        const $ = ia(e);
        ((b = r.document.activeElement) === null || b === void 0 ? void 0 : b.tagName) === "IFRAME" && !$?.contains(r.document.activeElement) && t(_);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), w = () => f.forEach((_) => _());
  return l ? {
    stop: w,
    cancel: () => {
      s = !1;
    },
    trigger: (_) => {
      s = !0, p(_), s = !1;
    }
  } : w;
}
// @__NO_SIDE_EFFECTS__
function Yu() {
  const e = St(!1), t = mt();
  return t && dt(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Fl(e) {
  const t = /* @__PURE__ */ Yu();
  return V(() => (t.value, !!e()));
}
function Xu(e, t, a = {}) {
  const { window: r = Xt, ...o } = a;
  let i;
  const n = /* @__PURE__ */ Fl(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, s = ve(V(() => {
    const u = fr(lt(e)).map(ia).filter(qu);
    return new Set(u);
  }), (u) => {
    l(), n.value && u.size && (i = new MutationObserver(t), u.forEach((p) => i.observe(p, o)));
  }, {
    immediate: !0,
    flush: "post"
  }), d = () => i?.takeRecords(), c = () => {
    s(), l();
  };
  return ti(c), {
    isSupported: n,
    stop: c,
    takeRecords: d
  };
}
function Qu(e, t, a = {}) {
  const { window: r = Xt, document: o = r?.document, flush: i = "sync" } = a;
  if (!r || !o) return wa;
  let n;
  const l = (c) => {
    n?.(), n = c;
  }, s = fl(() => {
    const c = ia(e);
    if (c) {
      const { stop: u } = Xu(o, (p) => {
        p.map((h) => [...h.removedNodes]).flat().some((h) => h === c || h.contains(c)) && t(p);
      }, {
        window: r,
        childList: !0,
        subtree: !0
      });
      l(u);
    }
  }, { flush: i }), d = () => {
    s(), l();
  };
  return ti(d), d;
}
// @__NO_SIDE_EFFECTS__
function ep(e = {}) {
  var t;
  const { window: a = Xt, deep: r = !0, triggerOnRemoval: o = !1 } = e, i = (t = e.document) !== null && t !== void 0 ? t : a?.document, n = () => {
    let d = i?.activeElement;
    if (r)
      for (var c; d?.shadowRoot; ) d = d == null || (c = d.shadowRoot) === null || c === void 0 ? void 0 : c.activeElement;
    return d;
  }, l = St(), s = () => {
    l.value = n();
  };
  if (a) {
    const d = {
      capture: !0,
      passive: !0
    };
    it(a, "blur", (c) => {
      c.relatedTarget === null && s();
    }, d), it(a, "focus", s, d);
  }
  return o && Qu(l, s, { document: i }), s(), l;
}
const tp = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function ap() {
  const e = al() ? /* @__PURE__ */ Ru(tp, null) : null;
  return typeof e == "number" ? e : void 0;
}
function rp(e, t = {}) {
  const { window: a = Xt, ssrWidth: r = /* @__PURE__ */ ap() } = t, o = /* @__PURE__ */ Fl(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), i = St(typeof r == "number"), n = St(), l = St(!1), s = (d) => {
    l.value = d.matches;
  };
  return fl(() => {
    if (i.value) {
      i.value = !o.value, l.value = lt(e).split(",").some((d) => {
        const c = d.includes("not all"), u = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), p = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(u || p);
        return u && h && (h = r >= tn(u[1])), p && h && (h = r <= tn(p[1])), c ? !h : h;
      });
      return;
    }
    o.value && (n.value = a.matchMedia(lt(e)), l.value = n.value.matches);
  }), it(n, "change", s, { passive: !0 }), V(() => l.value);
}
const op = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function Rl(e = {}) {
  const { reactive: t = !1, target: a = Xt, aliasMap: r = op, passive: o = !0, onEventFired: i = wa } = e, n = Je(/* @__PURE__ */ new Set()), l = {
    toJSON() {
      return {};
    },
    current: n
  }, s = t ? Je(l) : l, d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map([
    ["Meta", d],
    ["Shift", /* @__PURE__ */ new Set()],
    ["Alt", /* @__PURE__ */ new Set()]
  ]), u = /* @__PURE__ */ new Set();
  function p($, x) {
    $ in s && (t ? s[$] = x : s[$].value = x);
  }
  function h() {
    n.clear();
    for (const $ of u) p($, !1);
  }
  function f($, x, m) {
    if (!(!$ || typeof x.getModifierState != "function")) {
      for (const [S, P] of c) if (x.getModifierState(S)) {
        m.forEach((ae) => P.add(ae));
        break;
      }
    }
  }
  function w($, x) {
    if ($) return;
    const m = `${x[0].toUpperCase()}${x.slice(1)}`, S = c.get(m);
    if (!["shift", "alt"].includes(x) || !S) return;
    const P = Array.from(S), ae = P.indexOf(x);
    P.forEach((X, Q) => {
      Q >= ae && (n.delete(X), p(X, !1));
    }), S.clear();
  }
  function _($, x) {
    var m, S;
    const P = (m = $.key) === null || m === void 0 ? void 0 : m.toLowerCase(), ae = [(S = $.code) === null || S === void 0 ? void 0 : S.toLowerCase(), P].filter(Boolean);
    P && (x ? n.add(P) : n.delete(P));
    for (const X of ae)
      u.add(X), p(X, x);
    f(x, $, [...n, ...ae]), w(x, P), P === "meta" && !x && (d.forEach((X) => {
      n.delete(X), p(X, !1);
    }), d.clear());
  }
  it(a, "keydown", ($) => (_($, !0), i($)), { passive: o }), it(a, "keyup", ($) => (_($, !1), i($)), { passive: o }), it("blur", h, { passive: o }), it("focus", h, { passive: o });
  const b = new Proxy(s, { get($, x, m) {
    if (typeof x != "string") return Reflect.get($, x, m);
    if (x = x.toLowerCase(), x in r && (x = r[x]), !(x in s)) if (/[+_-]/.test(x)) {
      const P = x.split(/[+_-]/g).map((ae) => ae.trim());
      s[x] = V(() => P.map((ae) => lt(b[ae])).every(Boolean));
    } else s[x] = St(!1);
    const S = Reflect.get($, x, m);
    return t ? lt(S) : S;
  } });
  return b;
}
// @__NO_SIDE_EFFECTS__
function ip(e = {}) {
  const { window: t = Xt, initialWidth: a = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: o = !0, includeScrollbar: i = !0, type: n = "inner" } = e, l = St(a), s = St(r), d = () => {
    if (t) if (n === "outer")
      l.value = t.outerWidth, s.value = t.outerHeight;
    else if (n === "visual" && t.visualViewport) {
      const { width: u, height: p, scale: h } = t.visualViewport;
      l.value = Math.round(u * h), s.value = Math.round(p * h);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  d(), Zu(d);
  const c = { passive: !0 };
  return it("resize", d, c), t && n === "visual" && t.visualViewport && it(t.visualViewport, "resize", d, c), o && ve(rp("(orientation: portrait)"), () => d()), {
    width: l,
    height: s
  };
}
function np(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })
  ]);
}
function lp(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const sp = { class: "micro-icon" }, dp = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (y(), z("i", sp, [
      (y(), ee($a(e.icon)))
    ]));
  }
}, Gr = /* @__PURE__ */ pe(dp, [["__scopeId", "data-v-08f67949"]]), { width: ct, height: cp } = /* @__PURE__ */ ip();
function up() {
  return {
    /** < 640px */
    isXs: V(() => ct.value < 640),
    /** 640px - 768px */
    isSm: V(() => ct.value >= 640 && ct.value < 768),
    /** 768px - 1024px */
    isMd: V(() => ct.value >= 768 && ct.value < 1024),
    /** 1024px - 1280px */
    isLg: V(() => ct.value >= 1024 && ct.value <= 1280),
    /** 1280px - 1536px */
    isXl: V(() => ct.value > 1280 && ct.value <= 1536),
    /** > 1536px */
    is2Xl: V(() => ct.value > 1536),
    width: V(() => ct.value),
    height: V(() => cp.value)
  };
}
const pp = {
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
  setup(e) {
    const { isXs: t, isSm: a, isMd: r } = up();
    return (o, i) => !k(t) && !k(a) && !k(r) ? (y(), z("div", {
      key: 0,
      class: he(["hotkey", [`${e.disabled ? "secondary" : e.variant}-hotkey`, { disabled: e.disabled }]])
    }, U(e.hotkey), 3)) : Z("", !0);
  }
}, Ul = /* @__PURE__ */ pe(pp, [["__scopeId", "data-v-822ed718"]]), fp = {
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = Y(null);
    function i(s) {
      s && r("set:activator", s);
    }
    function n(s) {
      i(s.currentTarget), r(a.modelValue ? "close" : "open");
    }
    function l(s) {
      i(s.currentTarget);
    }
    return ve(
      () => [a.modelValue, a.floatingContainerEl, a.activatorEl],
      ([s]) => {
        if (o.value?.(), o.value = null, !s || !a.floatingContainerEl)
          return;
        const d = [a.activatorEl].filter(Boolean);
        requestAnimationFrame(() => {
          o.value = Ju(
            a.floatingContainerEl,
            () => a.modelValue && r("close"),
            { ignore: d }
          );
        });
      },
      { immediate: !0 }
    ), (s, d) => le(s.$slots, "default", {
      slotProps: { onClick: n, onFocus: l }
    });
  }
}, hp = {
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
  setup(e, { emit: t }) {
    const a = e, r = t;
    function o(l) {
      r("set:activator", l.currentTarget), r("open");
    }
    function i() {
      a.modelValue || r("open");
    }
    function n() {
      a.modelValue || r("open");
    }
    return ve(
      () => a.isFocused,
      (l) => {
        l || r("close");
      }
    ), (l, s) => le(l.$slots, "default", {
      slotProps: { onFocus: o, onInput: i, onClick: n }
    });
  }
}, vp = {
  __name: "_HoverBehavior",
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = Y(!1), i = Y(!1);
    function n() {
      o.value || (i.value = !1, r("close"));
    }
    function l(c) {
      i.value = !0, !a.modelValue && (r("set:activator", c.currentTarget), r("open"));
    }
    function s(c) {
      c.target.matches(":focus-visible") && (o.value = !0, r("set:activator", c.currentTarget), r("open"));
    }
    function d() {
      o.value = !1, r("close");
    }
    return ve(
      () => a.modelValue,
      () => {
        a.modelValue || (o.value = !1);
      }
    ), (c, u) => le(c.$slots, "default", {
      slotProps: { onMouseover: l, onMouseleave: n, onFocus: s, onBlur: d }
    });
  }
}, mp = {
  __name: "_ManualBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(e, { emit: t }) {
    const a = e, r = t;
    function o(s) {
      r("set:activator", s);
    }
    function i() {
      r("open");
    }
    function n() {
      r("close");
    }
    function l() {
      if (a.modelValue) {
        n();
        return;
      }
      i();
    }
    return (s, d) => le(s.$slots, "default", {
      slotProps: { setActivator: o, toggle: l }
    });
  }
}, gp = {};
function bp(e, t) {
  return y(), ee(Wa, { name: "NO_TRANSITION" }, {
    default: B(() => [
      le(e.$slots, "default")
    ]),
    _: 3
  });
}
const wp = /* @__PURE__ */ pe(gp, [["render", bp]]), yp = {};
function xp(e, t) {
  return y(), ee(Wa, null, {
    default: B(() => [
      le(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const kp = /* @__PURE__ */ pe(yp, [["render", xp], ["__scopeId", "data-v-ed45de91"]]), _p = {
  __name: "_ExpandTransition",
  props: {
    placement: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (y(), ee(Wa, {
      name: `expand-${e.placement}`
    }, {
      default: B(() => [
        le(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, $p = /* @__PURE__ */ pe(_p, [["__scopeId", "data-v-cc8be62f"]]), Sp = {
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
  setup(e, { emit: t }) {
    const a = t, r = `floating-${crypto.randomUUID()}`, o = new MutationObserver(() => {
      const i = document.querySelector(`[data-activator-uuid="${r}"]`);
      i && (a("set:activator", i), a("open"), o.disconnect());
    });
    return dt(() => {
      const i = document.querySelector(`[data-activator-uuid="${r}"]`);
      if (i) {
        a("set:activator", i), a("open");
        return;
      }
      o.observe(document.body, { childList: !0, subtree: !0 });
    }), pa(() => {
      o.disconnect(), a("close");
    }), (i, n) => le(i.$slots, "default", {
      slotProps: { "data-activator-uuid": r }
    });
  }
};
function hr(e, t = !1) {
  if (!e)
    return [];
  const a = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((r) => `${r}${t ? "" : ':not([tabindex="-1"])'}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(a)];
}
const Cp = {
  top: ["bottom", "right", "left"],
  right: ["left", "top", "bottom"],
  left: ["right", "top", "bottom"],
  bottom: ["top", "right", "left"]
}, an = {
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
function zp(e) {
  return e?.ownerDocument?.defaultView || window;
}
function ql(e) {
  const { overflow: t, overflowX: a, overflowY: r, display: o } = getComputedStyle(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + a) && !["inline", "contents"].includes(o);
}
function Ep(e) {
  return !e || ["html", "body", "#document"].includes(e.nodeName.toLowerCase());
}
function Tp(e) {
  return e instanceof HTMLElement;
}
function Op(e) {
  return e.getRootNode ? e.getRootNode() : e;
}
function Ap(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host || Op(e).host || null;
}
function Hl(e) {
  const t = Ap(e);
  return Ep(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Tp(t) && ql(t) ? t : Hl(t);
}
function Kl(e, t = []) {
  const a = Hl(e), r = a === e?.ownerDocument?.body, o = zp(a);
  return r ? t.concat(
    o,
    o.visualViewport || [],
    ql(a) ? a : []
  ) : t.concat(a, Kl(a, []));
}
function Wl(e, t, a, r) {
  const { clientWidth: o, clientHeight: i } = document.documentElement, n = window.scrollY || document.documentElement.scrollTop || 0, l = window.scrollX || document.documentElement.scrollLeft || 0;
  return e >= n && t >= l && t + a <= l + (window.innerWidth || o) && e + r <= n + (window.innerHeight || i);
}
const Po = Y(!1), va = Y(!1), ma = Y(!1);
function Vp(e, t, a, r, o = 4) {
  const i = window.scrollY || document.documentElement.scrollTop || 0, n = window.scrollX || document.documentElement.scrollLeft || 0, l = window.innerHeight || document.documentElement.clientHeight, s = window.innerWidth || document.documentElement.clientWidth;
  let d = e, c = t;
  const u = i + l - o, p = n + s - o, h = i + o, f = n + o;
  d + r > u && (d = Math.max(h, u - r)), d < h && (d = h), c + a > p && (c = Math.max(f, p - a)), c < f && (c = f);
  const w = u - h, _ = p - f;
  return {
    top: d,
    left: c,
    needsVerticalClamp: r > w,
    needsHorizontalClamp: a > _,
    maxHeight: Math.min(r, w),
    maxWidth: Math.min(a, _)
  };
}
function rn(e, t, a) {
  const r = window.scrollX + t.left;
  switch (e) {
    case "left":
      return r;
    case "right":
      return r + t.width - a;
    default:
      return r + (t.width - a) / 2;
  }
}
function on(e, t, a) {
  const r = window.scrollY + t.top;
  switch (e) {
    case "top":
      return r;
    case "bottom":
      return r - (a - t.height);
    default:
      return r + (t.height - a) / 2;
  }
}
function Pp(e, t, a, r) {
  const o = window.scrollY + e.top, i = window.scrollX + e.left;
  return {
    top: (n) => ({
      top: o - a - r.offset,
      left: rn(n, e, t)
    }),
    bottom: (n) => ({
      top: o + e.height + r.offset,
      left: rn(n, e, t)
    }),
    left: (n) => ({
      top: on(n, e, a),
      left: i - t - r.offset
    }),
    right: (n) => ({
      top: on(n, e, a),
      left: i + e.width + r.offset
    })
  };
}
async function jp(e, t, a, r, o = null) {
  let i;
  if (o) {
    const p = o.clientX, h = o.clientY;
    i = {
      top: h,
      left: p,
      right: p,
      bottom: h,
      width: 0,
      height: 0,
      x: p,
      y: h
    };
  } else
    i = a.getBoundingClientRect();
  const [n, l] = r.location.replaceAll(" ", "").split(","), s = l || "center", d = Pp(i, t, e, r), c = (p, h) => {
    const f = d[p](h);
    return Wl(f.top, f.left, t, e) ? { placement: p, alignment: h, ...f } : null;
  };
  let u = c(n, s);
  return u || ((an[n][s] || []).some((p) => (u = c(n, p), !!u)), u) || (Cp[n].some((p) => (u = c(p, s), u ? !0 : Object.keys(an[p]).some((h) => (u = c(p, h), !!u)))), u) ? u : { placement: n, alignment: s, ...d[n](s) };
}
function Ip(e, t) {
  const a = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  a.width !== r.width && (e.style.minWidth = `${a.width}px`);
}
async function Mp(e, t, a, r = null) {
  if (e.style.visibility !== "visible") {
    const p = e.style.visibility;
    e.style.visibility = "hidden", e.showPopover(), await new Promise((h) => {
      requestAnimationFrame(() => requestAnimationFrame(h));
    }), e.style.visibility = p || "hidden";
  }
  let o;
  a.attach instanceof HTMLElement ? o = a.attach : typeof a.attach == "string" ? o = document.querySelector(a.attach) : o = t, va.value || (e.style.maxHeight = "", e.style.overflowY = ""), ma.value || (e.style.maxWidth = "", e.style.overflowX = ""), a.fitContent || (Ip(e, o), await Promise.resolve());
  const i = e.getBoundingClientRect(), n = e.scrollHeight || e.clientHeight || Math.ceil(i.height), l = e.scrollWidth || e.clientWidth || Math.ceil(i.width), s = await jp(n, l, o, a, r), d = Wl(s.top, s.left, l, n);
  let c = s.top, u = s.left;
  if (Po.value = !0, !d && a.clamp) {
    const p = Vp(s.top, s.left, l, n);
    c = p.top, u = p.left, p.needsVerticalClamp ? (va.value = !0, e.style.maxHeight = `${p.maxHeight}px`, e.style.overflowY = "auto") : va.value && (va.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), p.needsHorizontalClamp ? (ma.value = !0, e.style.maxWidth = `${p.maxWidth}px`, e.style.overflowX = "auto") : ma.value && (ma.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  } else
    va.value && (va.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), ma.value && (ma.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  return e.style.top = `${c}px`, e.style.left = `${u}px`, e.style.visibility = "visible", requestAnimationFrame(() => {
    Po.value = !1;
  }), { placement: s.placement, alignment: s.alignment };
}
function Np(e, t) {
  const a = Y(), r = Y(), o = Y(), i = Y(), n = Je({
    location: "bottom",
    fitContent: !1,
    attach: null,
    offset: 0,
    clamp: !0
  }), l = Je([]);
  function s() {
    return !e.value || !t.value ? null : Mp(e.value, t.value, n, i.value).then((p) => {
      a.value = p.placement, r.value = p.alignment;
    });
  }
  function d() {
    l.forEach((p) => {
      p.removeEventListener("scroll", s), p.removeEventListener("resize", s);
    }), l.splice(0), e.value && (l.push(...Kl(e.value)), l.forEach((p) => {
      p.addEventListener("scroll", s, { passive: !0 }), p.addEventListener("resize", s);
    }));
  }
  function c() {
    o.value = new ResizeObserver(() => {
      Po.value || requestAnimationFrame(s);
    });
  }
  function u(p) {
    Object.keys(p).forEach((h) => {
      h in n && (n[h] = p[h]);
    });
  }
  return ve(e, (p, h) => {
    o.value || c(), h && o.value?.unobserve(h), t.value && o.value?.unobserve(t.value), p && t.value && (o.value.observe(p), o.value.observe(t.value));
  }), pa(() => {
    l.forEach((p) => {
      p.removeEventListener("scroll", s), p.removeEventListener("resize", s);
    }), l.splice(0), o.value?.disconnect();
  }), {
    autoUpdate: (p = { location: "bottom" }) => {
      u(p), [a.value, r.value] = n.location.replaceAll(" ", "").split(","), ve([e, t], async ([h, f]) => {
        d(), h && f && await s();
      });
    },
    fixedPosition: async (p = { location: "bottom" }) => {
      u({ ...p, clamp: !1 }), [a.value, r.value] = n.location.replaceAll(" ", "").split(","), requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          d(), await s();
        });
      });
    },
    watchCursor: () => {
      async function p(h) {
        i.value = h, e.value && await s();
      }
      ve(
        t,
        (h, f) => {
          f && f.removeEventListener("mousemove", p), h && h.addEventListener("mousemove", p);
        },
        { immediate: !0 }
      );
    },
    placement: a,
    alignment: r
  };
}
const Bp = ["aria-hidden"], Lp = { class: "floating-container-overlay" }, Dp = ["aria-expanded"], Fp = {
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
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = Qa("floating-container-content"), n = Y(null), { autoUpdate: l, fixedPosition: s, watchCursor: d, placement: c, alignment: u } = Np(
      i,
      n
    ), p = /* @__PURE__ */ ep(), h = Y(!1), f = Y(!1), w = Y(-1), _ = V(() => p.value === n.value || p.value === i.value || n.value?.contains(p.value) || i.value?.contains(p.value) || !1), b = V(() => {
      switch (r.behavior) {
        case "focus":
          return { component: hp, props: { isFocused: _.value } };
        case "hover":
          return {
            component: vp,
            props: { floatingContainerEl: i.value }
          };
        case "manual":
          return { component: mp };
        case "static":
          return { component: Sp };
        default:
          return {
            component: fp,
            props: {
              floatingContainerEl: i.value,
              activatorEl: n.value
            }
          };
      }
    });
    function $(G) {
      n.value = G;
    }
    async function x() {
      clearTimeout(w.value), w.value = setTimeout(async () => {
        h.value = !0, o("update:isOpen", !0), await Ct(), await new Promise(requestAnimationFrame), f.value = !0;
      }, r.delay);
    }
    function m() {
      clearTimeout(w.value), f.value = !1, r.transition !== "fade" && r.transition !== "expand" && (h.value = !1);
    }
    function S() {
      h.value = !1, o("update:isOpen", !1);
    }
    function P() {
      !r.closeOnClick || !h.value || r.behavior === "static" || (n.value?.focus(), m());
    }
    function ae(G) {
      if (G.key === "Tab") {
        const ne = hr(i.value, !0), F = ne.indexOf(document.activeElement), I = G.shiftKey ? F - 1 : F + 1;
        ne[I] ? (G.preventDefault(), ne[I].focus()) : (G.preventDefault(), I <= 0 && n.value.focus());
      } else if (G.key === "Escape") {
        if (r.behavior === "static")
          return;
        n.value.focus(), m();
      } else G.key === "Enter" && (G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation(), r.closeOnClick && r.behavior !== "static" && (n.value.focus(), m()));
    }
    async function X(G) {
      if (G.key === "Escape") {
        if (r.behavior === "static")
          return;
        G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation(), m();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(G.key))
        return;
      i.value || (await x(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const ne = hr(i.value);
      if (ne.length === 0)
        return;
      G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation();
      const F = ne.indexOf(document.activeElement);
      F === -1 ? hr(i.value)[0].focus() : G.key === "ArrowDown" ? ne[F + 1]?.focus() : G.key === "ArrowUp" && ne[F - 1]?.focus();
    }
    ve(
      () => _.value,
      () => o("update:focus", _.value)
    ), ve([c, u], () => {
      o("update:location", [c.value, u.value].filter(Boolean).join(","));
    });
    const Q = V(() => {
      switch (r.transition) {
        case "fade":
          return kp;
        case "expand":
          return $p;
        default:
          return wp;
      }
    });
    return dt(async () => {
      switch (await Ct(), r.behavior) {
        case "click":
        case "focus":
          l({
            location: r.location,
            fitContent: r.fitContent,
            attach: r.attach,
            offset: r.offset
          });
          break;
        case "hover":
          l({
            location: r.location,
            fitContent: r.fitContent,
            attach: r.attach,
            offset: r.offset
          }), r.attachToCursor && d();
          break;
        case "static":
          x(), s({
            location: r.location,
            attach: r.attach,
            offset: r.offset
          });
          break;
        default:
          console.warn(`Behavior "${r.behavior}" is not supported.`);
      }
    }), t({
      close: m
    }), (G, ne) => (y(), z(_e, null, [
      b.value ? (y(), ee($a(b.value.component), De({ key: 0 }, b.value.props, {
        "model-value": h.value,
        onOpen: x,
        onClose: m,
        "onSet:activator": $
      }), {
        default: B(({ slotProps: F }) => [
          le(G.$slots, "activator", Nr(Go({ ...F, onKeydown: X })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : Z("", !0),
      h.value ? (y(), z("div", {
        key: 1,
        class: "floating-container-overlay-container",
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !f.value
      }, [
        N("div", Lp, [
          (y(), ee($a(Q.value), {
            key: e.behavior !== "static" ? `${k(c) || "unknown"}-${k(u) || "unknown"}` : null,
            placement: k(c),
            alignment: k(u),
            appear: "",
            onAfterLeave: S
          }, {
            default: B(() => [
              ca(N("div", {
                ref: "floating-container-content",
                class: "floating-container-content",
                "data-testid": "menu",
                popover: "manual",
                tabindex: "-1",
                role: "menu",
                "aria-expanded": h.value ? "true" : "false",
                onKeydown: ae,
                onClick: P
              }, [
                le(G.$slots, "default", {}, void 0, !0)
              ], 40, Dp), [
                [Yo, f.value]
              ])
            ]),
            _: 3
          }, 40, ["placement", "alignment"]))
        ])
      ], 8, Bp)) : Z("", !0)
    ], 64));
  }
}, Zl = /* @__PURE__ */ pe(Fp, [["__scopeId", "data-v-d5e1dc35"]]), Rp = {
  __name: "PTooltip",
  props: /* @__PURE__ */ zt({
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
  setup(e) {
    const t = et(e, "location"), a = Qa("tooltip-wrapper"), r = V(() => a.value?.children[0]);
    return (o, i) => (y(), ee(Zl, {
      offset: e.offset,
      behavior: e.behavior,
      location: t.value,
      "fit-content": e.width === "fit-content",
      attach: e.attach || r.value,
      delay: e.behavior !== "static" ? 150 : 0,
      "close-on-click": !1,
      "onUpdate:location": i[0] || (i[0] = (n) => t.value = n)
    }, {
      activator: B((n) => [
        N("div", De({
          ref: "tooltip-wrapper",
          class: "tooltip-wrapper"
        }, n), [
          le(o.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      default: B(() => [
        e.text || o.$slots.content ? (y(), z("div", {
          key: 0,
          class: he(["tooltip", [t.value.replace(/,/g, "-"), { inverted: e.inverted }]]),
          style: Jt({ width: e.width }),
          "data-testid": "tooltip"
        }, [
          le(o.$slots, "content", {}, () => [
            ue(U(e.text), 1)
          ], !0)
        ], 6)) : Z("", !0)
      ]),
      _: 3
    }, 8, ["offset", "behavior", "location", "fit-content", "attach", "delay"]));
  }
}, Ja = /* @__PURE__ */ pe(Rp, [["__scopeId", "data-v-ea23c282"]]), Up = ["for"], qp = { class: "label-text" }, Hp = {
  variant: "text",
  size: "small"
}, Kp = {
  key: 0,
  class: "optional"
}, Wp = { class: "container-inner" }, Zp = {
  key: 0,
  class: "inline-container-prepended"
}, Gp = ["id", "placeholder", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "rows", "autofocus"], Jp = ["id", "placeholder", "type", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "autofocus"], Yp = { class: "inline-container-appended" }, Xp = {
  key: 1,
  class: "text"
}, Qp = ["id"], ef = {
  __name: "PInput",
  props: /* @__PURE__ */ zt({
    id: {
      type: String,
      required: !0
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
  }, {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ zt(["blur", "focus"], ["update:modelValue"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, o = et(e, "modelValue"), i = Xn(), n = a, l = It("showError", !0), s = Rl()[r.hotkey.key], d = Y(null), c = V(() => r.error ? np : r.icon), u = V(() => r.optional !== "" ? r.optional : M("input.optional")), p = V(() => r.requiredMessage ? r.requiredMessage : r.label ? M("input.required_with_label", { label: r.label.toLowerCase() }) : M("input.required")), h = V(() => {
      const $ = r.required ? { modelValue: { required: Ue.withMessage(() => p.value, Ga) } } : { modelValue: {} };
      return r.rules.forEach((x, m) => {
        $.modelValue[x.label || m] = Ue.withMessage(() => x.message || "", x.validator);
      }), $;
    }), f = Y(Zt(h, { modelValue: o })), w = V(() => !!r.error || f.value.modelValue.$errors?.length > 0), _ = V(() => `${r.id}-error`);
    function b($) {
      n("blur", $), f.value.$touch($);
    }
    return ve(s, ($) => {
      $ && r.hotkey && setTimeout(() => {
        d.value.focus();
      }, 100);
    }), ve(h, () => {
      f.value = Zt(h, { modelValue: o });
    }), t({
      input: d
    }), ($, x) => (y(), z("div", {
      class: he(["input-container", { "has-error": w.value, "is-large": e.large }]),
      tabindex: "-1",
      onFocus: x[4] || (x[4] = (m) => $.$refs.input.focus())
    }, [
      e.label ? (y(), z("label", {
        key: 0,
        class: "input-label",
        for: e.id
      }, [
        N("span", qp, [
          ue(U(e.label) + " ", 1),
          e.info || k(i).info ? (y(), ee(Ja, {
            key: 0,
            location: "right",
            inverted: ""
          }, {
            content: B(() => [
              le($.$slots, "info", {}, () => [
                ue(U(e.info), 1)
              ], !0)
            ]),
            default: B(() => [
              N("span", Hp, [
                q(Gr, {
                  class: "info-icon",
                  icon: k(lp)
                }, null, 8, ["icon"])
              ])
            ]),
            _: 3
          })) : Z("", !0)
        ]),
        e.required ? Z("", !0) : (y(), z("span", Kp, U(u.value), 1))
      ], 8, Up)) : Z("", !0),
      N("div", Wp, [
        e.prependIcon ? (y(), z("div", Zp, [
          q(ua, { icon: e.prependIcon }, null, 8, ["icon"])
        ])) : Z("", !0),
        e.expand ? ca((y(), z("textarea", De({
          key: 1,
          id: e.id,
          ref_key: "input",
          ref: d,
          "onUpdate:modelValue": x[0] || (x[0] = (m) => o.value = m),
          autocomplete: "off",
          class: ["input", {
            "has-error": w.value,
            "is-valid": e.valid,
            "has-icon-prepended": e.prependIcon,
            "has-icon-appended": e.icon
          }],
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": e.ariaLabel,
          "aria-invalid": w.value,
          "aria-describedby": w.value ? _.value : null,
          rows: e.rows,
          autofocus: e.autofocus
        }, $.$attrs, {
          onFocus: x[1] || (x[1] = (m) => n("focus", m)),
          onBlur: b
        }), null, 16, Gp)), [
          [Cr, o.value]
        ]) : ca((y(), z("input", De({
          key: 2,
          id: e.id,
          ref_key: "input",
          ref: d,
          "onUpdate:modelValue": x[2] || (x[2] = (m) => o.value = m),
          autocomplete: "off",
          class: ["input", {
            "has-error": w.value,
            "is-valid": e.valid,
            medium: e.medium,
            large: e.large,
            "has-icon-prepended": e.prependIcon,
            "has-icon-appended": e.icon,
            "has-inline-text": e.inline
          }],
          placeholder: e.placeholder,
          type: e.type,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": e.ariaLabel,
          "aria-invalid": w.value,
          "aria-describedby": w.value ? _.value : null,
          autofocus: e.autofocus
        }, $.$attrs, {
          onFocus: x[3] || (x[3] = (m) => n("focus", m)),
          onBlur: b
        }), null, 16, Jp)), [
          [zc, o.value]
        ]),
        N("div", Yp, [
          le($.$slots, "inline", {}, () => [
            e.icon ? (y(), ee(ua, {
              key: 0,
              icon: c.value,
              class: he({ "has-error": w.value })
            }, null, 8, ["icon", "class"])) : Z("", !0),
            e.inline ? (y(), z("span", Xp, U(e.inline), 1)) : Z("", !0),
            e.hotkey.label ? (y(), ee(Ul, {
              key: 2,
              hotkey: e.hotkey.label,
              variant: "secondary"
            }, null, 8, ["hotkey"])) : Z("", !0)
          ], !0)
        ])
      ]),
      w.value && k(l) ? (y(), z("span", {
        key: 1,
        id: _.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, U(f.value.modelValue?.$errors[0]?.$message ? f.value.modelValue.$errors[0].$message : e.error), 9, Qp)) : Z("", !0)
    ], 34));
  }
}, kt = /* @__PURE__ */ pe(ef, [["__scopeId", "data-v-790b73c6"]]);
function tf(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function af(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
const rf = {
  __name: "PStepStatus",
  props: {
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    }
  },
  setup(e) {
    const t = e, a = V(() => {
      switch (t.status) {
        case "done":
          return tf;
        case "attention":
          return af;
        default:
          return null;
      }
    });
    return (r, o) => (y(), z("div", {
      class: he(["status", e.status])
    }, [
      a.value ? (y(), ee(Gr, {
        key: 0,
        icon: a.value
      }, null, 8, ["icon"])) : Z("", !0)
    ], 2));
  }
}, Gl = /* @__PURE__ */ pe(rf, [["__scopeId", "data-v-c0e73fbd"]]);
function of(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function nf(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function lf(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sf(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const df = ["data-testid"], cf = { class: "icon" }, uf = { class: "content" }, pf = { class: "title" }, ff = {
  key: 0,
  class: "description"
}, hf = {
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
  setup(e) {
    const t = e, a = V(() => t.icon ? t.icon : t.type === "error" ? nf : t.type === "warning" ? lf : t.type === "success" ? of : t.type === "info" ? sf : null);
    return (r, o) => (y(), z("div", {
      class: he(["alert", e.type]),
      "data-testid": `alert-${e.type}`
    }, [
      le(r.$slots, "default", {}, () => [
        N("div", cf, [
          q(ft, { icon: a.value }, null, 8, ["icon"])
        ]),
        N("div", uf, [
          N("span", pf, U(e.title), 1),
          e.description ? (y(), z("span", ff, U(e.description), 1)) : Z("", !0)
        ])
      ], !0)
    ], 10, df));
  }
}, Jr = /* @__PURE__ */ pe(hf, [["__scopeId", "data-v-e623b23f"]]), vf = {
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
  setup(e) {
    return (t, a) => (y(), z("div", {
      class: he(["loader", `${e.color}-loader ${e.size}-loader`])
    }, null, 2));
  }
}, ai = /* @__PURE__ */ pe(vf, [["__scopeId", "data-v-7d40d0e0"]]), mf = ["tabindex", "disabled"], gf = {
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
    },
    disabled: Boolean
  },
  setup(e) {
    const t = e, a = Xn(), r = Rl()[t.hotkey.key], o = V(() => t.variant === "secondary" || t.variant === "tertiary" ? t.variant : t.variant === "text" ? "secondary" : "primary");
    return ve(r, (i) => {
      i && t.hotkey?.key && !t.loading && !t.disabled && t.hotkey.callback();
    }), (i, n) => (y(), z("button", {
      class: he(["button", [e.variant, e.size, e.color, k(a).default ? "" : "has-icon", e.loading ? "pointer-events-none" : ""]]),
      tabindex: e.loading ? -1 : 0,
      disabled: e.disabled
    }, [
      e.loading ? (y(), ee(ai, {
        key: 0,
        color: ["danger", "success", "primary"].includes(e.variant) ? "secondary" : "primary",
        size: e.size
      }, null, 8, ["color", "size"])) : e.icon ? (y(), ee(ft, {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : Z("", !0),
      le(i.$slots, "default", {}, void 0, !0),
      e.hotkey.key ? (y(), ee(Ul, {
        key: 2,
        hotkey: e.hotkey.label,
        variant: o.value,
        disabled: e.disabled
      }, null, 8, ["hotkey", "variant", "disabled"])) : Z("", !0)
    ], 10, mf));
  }
}, Gt = /* @__PURE__ */ pe(gf, [["__scopeId", "data-v-71d76802"]]), Jl = {
  __name: "PForm",
  setup(e, { expose: t }) {
    const a = Zt();
    function r() {
      return a.value.$validate();
    }
    function o() {
      return a.value.$reset();
    }
    return t({ validate: r, resetValidation: o }), (i, n) => (y(), z("form", {
      novalidate: "",
      onSubmit: n[0] || (n[0] = (l) => {
        l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation();
      })
    }, [
      le(i.$slots, "default")
    ], 32));
  }
};
function Yl(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    })
  ]);
}
function Xl(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
const bf = ["id"], wf = { class: "header" }, yf = {
  class: "title",
  part: "step-title"
}, xf = {
  key: 1,
  class: "separator"
}, kf = {
  key: 0,
  class: "subtitle status-text",
  part: "step-subtitle"
}, _f = {
  key: 2,
  class: "total",
  part: "step-subtitle"
}, $f = {
  key: 0,
  class: "content"
}, Sf = {
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
    },
    buttonStartText: {
      type: String,
      default: ""
    },
    /** The configurator is in editing mode and steps can be overwritten */
    editor: Boolean,
    /** The step has overwrites */
    hasOverwrites: Boolean,
    /** The step is hidden */
    isHidden: Boolean
  },
  emits: ["update:modelValue", "update:focus", "edit:step"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = Qa("measurements-form"), i = Y({}), n = Je({
      width: null,
      height: null
    }), l = Y(1), s = Y(null), d = V(() => {
      const m = a.options.find((Q) => Q.code === "width"), S = a.options.find((Q) => Q.code === "height"), P = m && m.reversible && S && S.reversible, ae = m?.min, X = S?.min;
      return P ? Math.min(ae, X) : { width: ae, height: X };
    }), c = V(() => {
      const m = a.options.find((Q) => Q.code === "width"), S = a.options.find((Q) => Q.code === "height"), P = m && m.reversible && S && S.reversible, ae = m?.max, X = S?.max;
      return P ? Math.max(ae, X) : { width: ae, height: X };
    }), u = {
      width: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof d.value == "number" ? d.value : d.value.width
          }),
          Tr(typeof d.value == "number" ? d.value : d.value.width)
        ),
        required: Ue.withMessage(M("step.required"), Ga),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof c.value == "number" ? c.value : c.value.width
          }),
          Or(typeof c.value == "number" ? c.value : c.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof d.value == "number" ? d.value : d.value.height
          }),
          Tr(typeof d.value == "number" ? d.value : d.value.height)
        ),
        required: Ue.withMessage(M("step.required"), Ga),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof c.value == "number" ? c.value : c.value.height
          }),
          Or(typeof c.value == "number" ? c.value : c.value.height)
        )
      }
    }, p = Zt(u, n), h = Y(null), f = V(() => a.buttonStartText || M("step.new_configuration")), w = V(() => {
      if (a.code === "measurement-amount") {
        const m = a.options.some((ae) => ae.code === "width"), S = a.options.some((ae) => ae.code === "height"), P = a.options.some((ae) => ae.code === "amount");
        if (m && (!n.width || p.value.$errors.some((ae) => ae.$property === "width")) || S && (!n.height || p.value.$errors.some((ae) => ae.$property === "height")) || P && !l.value)
          return !0;
      }
      return a.code === "amount" && !l.value;
    });
    function _(m, S) {
      if (m && S && (!p.$errors || p.$errors.length === 0)) {
        const P = m * S / 1e4;
        s.value = Number(P.toFixed(2));
      }
    }
    async function b() {
      const m = await o.value.validate(), S = a.options.some((X) => X.code === "width"), P = a.options.some((X) => X.code === "height"), ae = a.options.some((X) => X.code === "amount");
      i.value = [], S && i.value.push({
        code: "width",
        value: n.width
      }), P && i.value.push({
        code: "height",
        value: n.height
      }), ae && i.value.push({
        code: "amount",
        value: l.value
      }), m && r("update:modelValue", i.value);
    }
    function $() {
      h.value?.getElementsByClassName("input")?.[0]?.focus();
    }
    function x(m) {
      setTimeout(() => {
        r("update:focus", m);
      }, 200);
    }
    return dt(() => {
      $(), a.modelValue?.length && (n.width = a.modelValue.find((m) => m.code === "width")?.value, n.height = a.modelValue.find((m) => m.code === "height")?.value, l.value = a.modelValue.find((m) => m.code === "amount")?.value || 1);
    }), ve(
      () => a.modelValue,
      (m) => {
        m?.length && (n.width = m.find((S) => S.code === "width")?.value, n.height = m.find((S) => S.code === "height")?.value, l.value = m.find((S) => S.code === "amount")?.value || 1, p.value.$touch());
      },
      { immediate: !0 }
    ), (m, S) => (y(), z("div", {
      id: "accordion-header-" + e.ariaTitle,
      class: he(["configurator-step simple", { disabled: e.disabled }]),
      part: "step"
    }, [
      N("div", wf, [
        q(Gl, { status: e.status }, null, 8, ["status"]),
        N("div", {
          ref_key: "inner",
          ref: h,
          class: "inner"
        }, [
          N("h3", yf, [
            ue(U(e.title) + " ", 1),
            e.hasOverwrites && e.editor ? (y(), ee(Ja, {
              key: 0,
              text: k(M)("option.step_has_overwrites")
            }, {
              default: B(() => [
                q(ft, { icon: k(Xl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : Z("", !0),
            e.isHidden && e.editor ? (y(), ee(Ja, {
              key: 1,
              text: k(M)("option.step_is_hidden")
            }, {
              default: B(() => [
                q(ft, { icon: k(Yl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : Z("", !0)
          ]),
          q(Jl, {
            ref: "measurements-form",
            class: "measurements-form"
          }, {
            default: B(() => [
              N("div", {
                class: he(["measurement-inputs", { "has-errors": k(p).$errors && k(p).$errors.length }])
              }, [
                (y(!0), z(_e, null, qt(e.options, (P, ae) => (y(), z(_e, { key: ae }, [
                  P.code === "width" || P.code === "height" ? (y(), ee(kt, {
                    key: 0,
                    id: `measurement-input-${P.code}`,
                    modelValue: n[P.code],
                    "onUpdate:modelValue": [
                      (X) => n[P.code] = X,
                      S[0] || (S[0] = (X) => _(n.width, n.height))
                    ],
                    required: "",
                    type: "number",
                    "aria-label": P.code,
                    class: "measurement-input",
                    inline: P.unit,
                    min: P.min,
                    max: P.max,
                    placeholder: k(M)(`step.${P.code}`),
                    error: k(p)[P.code].$errors ? k(p)[P.code].$errors[0]?.$message : "",
                    onBlur: (X) => {
                      k(p)[P.code].$touch(X), x(!1);
                    },
                    onKeyup: ot(qe((X) => {
                      k(p)[P.code].$touch(X), b();
                    }, ["stop"]), ["enter"]),
                    onFocus: S[1] || (S[1] = (X) => x(!0))
                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "placeholder", "error", "onBlur", "onKeyup"])) : Z("", !0),
                  P.code === "width" ? (y(), z("span", xf, " x ")) : P.code === "amount" ? (y(), ee(ei, {
                    key: 2,
                    modelValue: l.value,
                    "onUpdate:modelValue": S[2] || (S[2] = (X) => l.value = X),
                    min: P.min,
                    max: P.max || void 0,
                    onBlur: S[3] || (S[3] = (X) => x(!1)),
                    onFocus: S[4] || (S[4] = (X) => x(!0)),
                    onKeyup: S[5] || (S[5] = ot(qe((X) => b(), ["stop"]), ["enter"]))
                  }, null, 8, ["modelValue", "min", "max"])) : Z("", !0)
                ], 64))), 128))
              ], 2),
              e.code == "measurement-amount" || e.code === "amount" ? (y(), ee(Gt, {
                key: 0,
                class: "submit-button",
                "data-testid": "submit-button",
                disabled: w.value,
                onClick: b
              }, {
                default: B(() => [
                  ue(U(f.value), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : Z("", !0)
            ]),
            _: 1
          }, 512)
        ], 512),
        e.status === "attention" && e.attentionText ? (y(), z("span", kf, U(e.attentionText), 1)) : Z("", !0),
        e.editor ? (y(), ee(Gt, {
          key: 1,
          variant: "url",
          size: "small",
          class: "edit-button",
          onClick: S[6] || (S[6] = qe((P) => r("edit:step"), ["stop"]))
        }, {
          default: B(() => [
            ue(U(k(M)("option.edit")), 1)
          ]),
          _: 1
        })) : Z("", !0),
        s.value ? (y(), z("span", _f, U(e.totalPrefix || k(M)("step.total")) + ": " + U(s.value) + " m² ", 1)) : Z("", !0)
      ]),
      e.alert ? (y(), z("div", $f, [
        q(Jr, Nr(Go(e.alert)), null, 16)
      ])) : Z("", !0)
    ], 10, bf));
  }
}, Cf = /* @__PURE__ */ pe(Sf, [["__scopeId", "data-v-b35362eb"]]);
function zf(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
    })
  ]);
}
const Ef = {
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
  setup(e) {
    return (t, a) => (y(), z("span", {
      class: he(["label", [{ small: e.small }, { alt: e.alt }, e.color]])
    }, [
      le(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, ri = /* @__PURE__ */ pe(Ef, [["__scopeId", "data-v-f6c45fb8"]]), Tf = ["srcset"], Of = ["srcset"], Af = ["src", "alt", "height", "width"], Vf = {
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
  setup(e, { emit: t }) {
    const a = t, r = e, o = Y(!1);
    function i(l) {
      o.value = !0, a("error", l);
    }
    const n = V(() => r.image);
    return ve(n, () => {
      o.value = !1;
    }), (l, s) => (y(), z("picture", {
      class: "image-wrapper",
      style: Jt({ width: `${e.width}px`, height: `${e.height}px` })
    }, [
      N("source", {
        media: "(max-width: 640px)",
        srcset: e.mobile
      }, null, 8, Tf),
      N("source", {
        media: "(max-width: 1024px)",
        srcset: e.tablet
      }, null, 8, Of),
      e.image && !o.value ? (y(), z("img", {
        key: 0,
        loading: "lazy",
        class: he(["image", e.rounded ? `rounded-${e.rounded}` : ""]),
        src: e.image,
        alt: e.alt,
        height: e.height,
        width: e.width,
        onError: i
      }, null, 42, Af)) : (y(), z("div", {
        key: 1,
        class: he(["skeleton", e.rounded ? `rounded-${e.rounded}` : ""])
      }, null, 2))
    ], 4));
  }
}, Pf = /* @__PURE__ */ pe(Vf, [["__scopeId", "data-v-4654b093"]]), jf = {
  key: 0,
  class: "amount"
}, If = {
  key: 1,
  class: "labels"
}, Mf = {
  __name: "POptionCardHeader",
  props: /* @__PURE__ */ zt({
    selected: Boolean,
    /** The product image */
    image: {
      type: String,
      default: ""
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
  }, {
    amount: {
      type: Number,
      default: 0
    },
    amountModifiers: {}
  }),
  emits: ["update:amount"],
  setup(e) {
    const t = et(e, "amount");
    return (a, r) => (y(), z(_e, null, [
      e.selected && e.editAmount ? (y(), z("div", jf, [
        N("span", null, U(e.amountLabel), 1),
        q(ei, {
          modelValue: t.value,
          "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
          onClick: r[1] || (r[1] = qe(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : Z("", !0),
      e.labels.length && !e.editAmount ? (y(), z("div", If, [
        (y(!0), z(_e, null, qt(e.labels, (o, i) => (y(), z(_e, { key: i }, [
          o.text ? (y(), ee(ri, {
            key: 0,
            color: o.color,
            small: ""
          }, {
            default: B(() => [
              ue(U(o.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : Z("", !0)
        ], 64))), 128))
      ])) : Z("", !0),
      e.image && !e.editAmount ? (y(), ee(Pf, {
        key: 2,
        image: e.image,
        alt: `${e.title} ${k(M)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : Z("", !0)
    ], 64));
  }
}, Nf = /* @__PURE__ */ pe(Mf, [["__scopeId", "data-v-1a9d11c5"]]);
function Bf(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Lf(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
const Df = {
  key: 0,
  class: "not-available"
}, Ff = {
  key: 1,
  class: "custom-value"
}, Rf = {
  key: 2,
  class: "information"
}, Uf = {
  key: 0,
  class: "delivery"
}, qf = { class: "delivery-time" }, Hf = {
  key: 1,
  class: "price"
}, Kf = {
  key: 0,
  class: "price-per"
}, Wf = {
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = Y(a.customInput.value), i = V({
      get: () => a.customInput.value,
      set: (l) => {
        o.value = Number(l);
      }
    });
    function n() {
      o.value && o.value > 0 && r("update:customValue", o.value);
    }
    return (l, s) => e.disabled && e.notAvailableMessage ? (y(), z("div", Df, [
      q(Gr, { icon: k(Bf) }, null, 8, ["icon"]),
      N("span", null, U(e.notAvailableMessage), 1)
    ])) : e.customInput.value && e.customInput.unit && !e.disabled && !e.notAvailableMessage ? (y(), z("div", Ff, [
      q(kt, {
        id: "custom-value",
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => i.value = d),
        inline: e.customInput.unit,
        required: "",
        "data-testid": "custom-value-input",
        "aria-label": k(M)("option.custom_value")
      }, null, 8, ["modelValue", "inline", "aria-label"]),
      q(Gt, {
        variant: "primary",
        "data-testid": "custom-value-submit",
        onClick: qe(n, ["stop"])
      }, {
        default: B(() => [
          ue(U(e.customInput.buttonText || k(M)("option.continue")), 1)
        ]),
        _: 1
      })
    ])) : (y(), z("div", Rf, [
      e.deliveryTime ? (y(), z("span", Uf, [
        q(ua, { icon: k(Lf) }, null, 8, ["icon"]),
        N("span", qf, U(e.deliveryTimeText), 1)
      ])) : Z("", !0),
      e.price ? (y(), z("span", Hf, [
        ue(" € " + U(e.price) + " ", 1),
        e.pricePer ? (y(), z("span", Kf, " / " + U(e.pricePer), 1)) : Z("", !0)
      ])) : Z("", !0)
    ]));
  }
}, Zf = /* @__PURE__ */ pe(Wf, [["__scopeId", "data-v-45867763"]]), Gf = ["tabindex", "aria-current", "part", "aria-disabled"], Jf = {
  key: 0,
  class: "no-option"
}, Yf = {
  key: 1,
  class: "inner"
}, Xf = { class: "header" }, Qf = { class: "content" }, eh = {
  key: 0,
  class: "title",
  part: "option-title"
}, th = {
  class: "description",
  part: "option-description"
}, ah = { class: "footer" }, rh = {
  __name: "POptionCard",
  props: /* @__PURE__ */ zt({
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
    /** The product image */
    image: {
      type: String,
      default: ""
    },
    disabled: Boolean,
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
  }, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {},
    amount: {
      type: Number,
      default: 0
    },
    amountModifiers: {}
  }),
  emits: ["update:modelValue", "update:amount"],
  setup(e) {
    const t = e, a = Y(!1), r = V(() => t.deliveryTimeText !== "" ? `${t.deliveryTime} ${t.deliveryTimeText}` : Iu("option.days", t.deliveryTime)), o = V(() => {
      switch (t.pricePer) {
        case "unit":
          return M("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), i = et(e, "modelValue"), n = et(e, "amount"), l = V(() => t.amountLabel ? t.amountLabel : M("option.amount")), s = V(() => typeof n.value == "number" && n.value > 0);
    function d(p) {
      t.disabled || (a.value = s.value ? !a.value : !1, p ? n.value = p : i.value = !i.value);
    }
    function c(p, h) {
      let f = null;
      h === "left" && p ? f = p.previousElementSibling : h === "right" && p && (f = p.nextElementSibling);
      const w = f?.querySelector(".header");
      if (f && !w.disabled) {
        w.click();
        let _ = null;
        const b = f.querySelector("input");
        setTimeout(() => {
          _ = f.querySelector(".option-card"), _ && !_.classList.contains("disabled") ? _.focus() : b && b.focus();
        }, 50);
      } else f && c(f, h);
    }
    function u(p, h) {
      const f = p.currentTarget.parentElement;
      if (h === "left") {
        const w = f.previousElementSibling?.querySelector(".option-card"), _ = f.previousElementSibling?.querySelector(".overlay");
        w ? w.classList.contains("disabled") ? u({ currentTarget: w }, "left") : _ ? _.click() : w.focus() : c(f.closest(".accordion-item"), "left");
      } else if (h === "right") {
        const w = f.nextElementSibling?.querySelector(".option-card"), _ = f.nextElementSibling?.querySelector(".overlay");
        w ? w.classList.contains("disabled") ? u({ currentTarget: w }, "right") : _ ? _.click() : w.focus() : c(f.closest(".accordion-item"), "right");
      }
    }
    return dt(() => {
      n.value > 0 && i.value && (a.value = !0);
    }), ve(n, (p, h) => {
      !h && p && (a.value = !0);
    }), ve(i, () => {
      n.value && (a.value = !!i.value);
    }), (p, h) => (y(), z("article", {
      class: he(["option-card", { selected: i.value, disabled: e.disabled }]),
      tabindex: e.disabled ? -1 : 0,
      "aria-current": i.value,
      "data-testid": "option",
      part: `option ${i.value ? "option-selected" : ""}`,
      "aria-disabled": e.disabled,
      onClick: h[2] || (h[2] = (f) => e.customInput.value ? null : d()),
      onKeyup: [
        h[3] || (h[3] = ot((f) => e.customInput.value ? null : d(), ["enter"])),
        h[4] || (h[4] = ot((f) => u(f, "left"), ["arrow-left"])),
        h[5] || (h[5] = ot((f) => u(f, "right"), ["arrow-right"])),
        h[6] || (h[6] = ot((f) => u(f, "up"), ["arrow-up"]))
      ]
    }, [
      e.noOption ? (y(), z("div", Jf, [
        q(ua, { icon: k(zf) }, null, 8, ["icon"]),
        N("h3", null, U(e.noOptionText), 1)
      ])) : (y(), z("div", Yf, [
        N("header", Xf, [
          le(p.$slots, "header", {}, () => [
            q(Nf, {
              amount: n.value,
              "onUpdate:amount": h[0] || (h[0] = (f) => n.value = f),
              selected: i.value,
              "amount-label": l.value,
              image: e.image,
              "edit-amount": a.value,
              labels: e.labels,
              title: e.title
            }, null, 8, ["amount", "selected", "amount-label", "image", "edit-amount", "labels", "title"])
          ], !0)
        ]),
        N("div", Qf, [
          le(p.$slots, "content", {}, () => [
            e.title ? (y(), z("h3", eh, U(e.title), 1)) : Z("", !0),
            N("p", th, U(e.description), 1)
          ], !0)
        ]),
        N("footer", ah, [
          le(p.$slots, "footer", {}, () => [
            q(Zf, {
              "delivery-time": e.deliveryTime,
              price: e.price,
              "price-per": o.value,
              "delivery-time-text": r.value,
              "custom-input": e.customInput,
              disabled: e.disabled,
              "not-available-message": e.notAvailableMessage,
              "onUpdate:customValue": h[1] || (h[1] = (f) => d(f))
            }, null, 8, ["delivery-time", "price", "price-per", "delivery-time-text", "custom-input", "disabled", "not-available-message"])
          ], !0)
        ])
      ]))
    ], 42, Gf));
  }
}, oh = /* @__PURE__ */ pe(rh, [["__scopeId", "data-v-56b71e2f"]]), ih = {
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
  setup(e) {
    const t = e;
    return dt(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), Ur(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (a, r) => (y(), z("div", {
      class: he(["overlay", { fixed: e.fixed }]),
      style: Jt({ background: `rgba(${e.color}, ${e.opacity / 100})` })
    }, [
      le(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, nh = /* @__PURE__ */ pe(ih, [["__scopeId", "data-v-66d42f70"]]), lh = { class: "option-step-container" }, sh = {
  class: "title",
  part: "step-title"
}, dh = {
  key: 0,
  class: "subtitle",
  part: "step-subtitle"
}, ch = {
  key: 1,
  class: "subtitle",
  part: "step-subtitle"
}, uh = {
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
    },
    /** The configurator is in editing mode and steps can be overwritten */
    editor: Boolean,
    /** The step has overwrites */
    hasOverwrites: Boolean,
    /** The step is hidden */
    isHidden: Boolean
  },
  emits: ["update:modelValue", "update:accordionState", "edit:step"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = Y(!1), i = Y([]), n = Y([]), l = V({
      get: () => a.open,
      set: (b) => {
        r("update:accordionState", b);
      }
    }), s = V(() => n.value.map((b, $) => {
      if (!b)
        return null;
      if (a.options[$] && a.options[$].noOption)
        return a.options[$].noOptionText;
      let x = "";
      const m = i.value.find((S) => S.code === a.options[$].code);
      return m?.value > 0 && (x += `${m.value}x `), x += a.options[$].title, x;
    }).filter((b) => !!b).join(", ")), d = Y(null);
    function c(b) {
      if (a.multiple || (i.value = []), i.value.length === 0 || i.value.some((x) => x.code === a.options[b].code) === !1) {
        let x;
        a.options[b].amount ? x = { code: a.options[b].code, value: a.options[b].amount } : x = { code: a.options[b].code }, i.value.push(x);
      }
      n.value[b] = !n.value[b];
      const $ = i.value.findIndex((x) => x.code === "no-option");
      if ($ > -1 && a.options[b].noOption)
        n.value.forEach((x, m) => {
          m !== b && (n.value[m] = !1);
        }), i.value = i.value.filter((x) => x.code === "no-option");
      else if (!a.options[b].noOption) {
        const x = a.options.findIndex((m) => m.noOption);
        x > -1 && (n.value[x] = !1), $ > -1 ? i.value.splice($, 1) : n.value[b] === !1 && i.value.some((m) => m.code === a.options[b].code) && (i.value = i.value.filter((m) => m.code !== a.options[b].code));
      }
    }
    function u(b) {
      c(b), r("update:modelValue", i.value);
    }
    function p() {
      i.value.length === 0 && a.modelValue?.length ? i.value = a.modelValue : a.modelValue && Object.keys(a.modelValue).length && i.value.length === 0 && (i.value = [a.modelValue]), a.options.forEach((b) => {
        !b.noOption && b.code === a.modelValue?.code || Array.isArray(a.modelValue) && a.modelValue.some(($) => $.code === b.code) ? n.value.push(!0) : n.value.push(!1);
      }), a.code === "accessories" && Array.isArray(a.modelValue) && a.modelValue.length > 2 && (o.value = !0);
    }
    function h(b) {
      return a.code === "accessories" && b > 3 && !o.value;
    }
    function f(b, $) {
      a.multiple || c(b);
      const x = i.value.filter((S) => S.code !== a.options[b].code), m = { code: a.options[b].code, value: $ };
      i.value = [...x, m], r("update:modelValue", i.value);
    }
    function w() {
      setTimeout(() => {
        d.value?.length && d.value[0].$el.focus();
      }, 500);
    }
    function _(b) {
      return b.customInput?.value ? 0 : Array.isArray(a.modelValue) ? a.modelValue?.find(($) => $.code === b.code)?.value : a.modelValue?.value || b.amount || 0;
    }
    return p(), ve(
      () => a.modelValue,
      () => {
        n.value = [], p();
      }
    ), ve(
      () => a.open,
      () => {
        a.open && w();
      },
      { immediate: !0 }
    ), (b, $) => (y(), z("div", lh, [
      e.editor ? (y(), ee(Gt, {
        key: 0,
        variant: "url",
        size: "small",
        class: "edit-button",
        onClick: $[0] || ($[0] = qe((x) => r("edit:step"), ["stop"]))
      }, {
        default: B(() => [
          ue(U(k(M)("option.edit")), 1)
        ]),
        _: 1
      })) : Z("", !0),
      q(Al, {
        modelValue: l.value,
        "onUpdate:modelValue": $[3] || ($[3] = (x) => l.value = x),
        class: "configurator-step options",
        "aria-title": e.ariaTitle,
        "scroll-into-view": "",
        part: "step",
        exportparts: "state-indicator-icon"
      }, {
        header: B(() => [
          q(Gl, { status: e.status }, null, 8, ["status"]),
          N("h3", sh, [
            ue(U(e.title) + " ", 1),
            e.hasOverwrites && e.editor ? (y(), ee(Ja, {
              key: 0,
              text: k(M)("option.step_has_overwrites")
            }, {
              default: B(() => [
                q(ft, { icon: k(Xl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : Z("", !0),
            e.isHidden && e.editor ? (y(), ee(Ja, {
              key: 1,
              text: k(M)("option.step_is_hidden")
            }, {
              default: B(() => [
                q(ft, { icon: k(Yl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : Z("", !0)
          ]),
          e.status === "attention" ? (y(), z("span", dh, U(e.attentionText || k(M)("option.attention")), 1)) : Z("", !0),
          s.value ? (y(), z("span", ch, U(s.value), 1)) : Z("", !0)
        ]),
        default: B(() => [
          N("div", null, [
            N("div", {
              class: he(["option-container", {
                "show-all": e.code === "accessories" && o.value || e.code !== "accessories"
              }])
            }, [
              (y(!0), z(_e, null, qt(e.options, (x, m) => (y(), z("div", {
                key: m,
                class: he(["option", { hide: h(m) }])
              }, [
                m === 3 && !o.value && e.code === "accessories" ? (y(), ee(nh, {
                  key: 0,
                  tabindex: "0",
                  onClick: $[1] || ($[1] = qe((S) => o.value = !0, ["stop"])),
                  onKeyup: $[2] || ($[2] = ot(qe((S) => o.value = !0, ["stop"]), ["enter"]))
                }, {
                  default: B(() => [
                    ue(" +" + U(e.options.length - 3), 1)
                  ]),
                  _: 1
                })) : Z("", !0),
                q(oh, De({
                  ref_for: !0,
                  ref_key: "optionCards",
                  ref: d
                }, { ref_for: !0 }, x, {
                  amount: _(x),
                  disabled: x.available === !1 || e.disabled,
                  "not-available-message": x.available === !1 ? e.unvailableText || k(M)("option.unavailable") : "",
                  "model-value": n.value[m],
                  exportparts: "option option-title option-description",
                  "onUpdate:amount": (S) => f(m, S),
                  "onUpdate:modelValue": (S) => u(m)
                }), null, 16, ["amount", "disabled", "not-available-message", "model-value", "onUpdate:amount", "onUpdate:modelValue"])
              ], 2))), 128))
            ], 2),
            e.alert ? (y(), ee(Jr, Nr(De({ key: 0 }, e.alert)), null, 16)) : Z("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "aria-title"])
    ]));
  }
}, ph = /* @__PURE__ */ pe(uh, [["__scopeId", "data-v-0ea5d6d3"]]), fh = {
  class: "delivery-options",
  part: "delivery-step"
}, hh = { class: "header" }, vh = {
  class: "title",
  part: "delivery-step-title"
}, mh = {
  class: "hint",
  part: "delivery-step-subtitle"
}, gh = { class: "content" }, bh = {
  class: "day",
  part: "delivery-option-day"
}, wh = {
  class: "date",
  part: "delivery-option-date"
}, yh = {
  key: 0,
  class: "cost",
  part: "delivery-option-cost"
}, xh = {
  key: 1,
  class: "no-cost",
  part: "delivery-option-no-cost"
}, kh = {
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
  setup(e) {
    const t = e, a = Y(!1), r = V(() => t.title ? t.title : M("delivery.delivery_options")), o = V(() => t.noCost ? t.noCost : M("delivery.no_extra_cost")), i = V(
      () => t.makeYourChoice ? t.makeYourChoice : M("delivery.make_your_choice_next_step")
    ), n = V(() => t.buttonTextShow ? t.buttonTextShow : M("delivery.see_more")), l = V(() => t.buttonTextHide ? t.buttonTextHide : M("delivery.see_less"));
    function s() {
      window.innerWidth >= 768 ? a.value = !0 : window.innerWidth < 768 && (a.value = !1);
    }
    return Ct(() => {
      window.addEventListener("resize", s);
    }), pa(() => {
      window.removeEventListener("resize", s);
    }), s(), (d, c) => (y(), z("div", fh, [
      N("div", hh, [
        N("h2", vh, U(r.value), 1),
        N("span", mh, [
          c[1] || (c[1] = N("span", { class: "align-sub" }, "*", -1)),
          ue(" " + U(i.value), 1)
        ])
      ]),
      N("div", gh, [
        (y(!0), z(_e, null, qt(e.items, (u, p) => (y(), z("div", {
          key: p,
          class: he(["option", {
            hide: p > 0 && !a.value && !u.cheapest,
            last: p === 1 && !a.value || p === e.items.length - 1 || p > 1 && u.cheapest && !a.value
          }]),
          part: "delivery-option"
        }, [
          N("span", bh, [
            ue(U(u.day) + " ", 1),
            u.label ? (y(), ee(ri, {
              key: 0,
              color: u.label.color,
              small: ""
            }, {
              default: B(() => [
                ue(U(u.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : Z("", !0)
          ]),
          N("span", wh, U(u.date), 1),
          u.cost ? (y(), z("span", yh, " + € " + U(u.cost), 1)) : (y(), z("span", xh, U(o.value), 1))
        ], 2))), 128)),
        q(Gt, {
          variant: "tertiary",
          onClick: c[0] || (c[0] = (u) => a.value = !a.value)
        }, {
          default: B(() => [
            ue(U(a.value ? l.value : n.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}, _h = /* @__PURE__ */ pe(kh, [["__scopeId", "data-v-12d62f2c"]]);
function $h(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const Sh = {
  __name: "PHeading",
  props: {
    level: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, a) => (y(), ee($a(e.level), null, {
      default: B(() => [
        le(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, Ch = /* @__PURE__ */ pe(Sh, [["__scopeId", "data-v-6ad666e7"]]), zh = { class: "wrapper" }, Eh = { class: "header" }, Th = { class: "content" }, Oh = {
  __name: "PDrawer",
  props: /* @__PURE__ */ zt({
    /** Where the sidebar is located, possible values: left, right, bottom */
    position: {
      type: String,
      required: !0
    },
    /** Title positioned at the top of the drawer */
    title: {
      type: String,
      required: !0
    },
    /** Whether the drawer has a fixed width of 80% */
    fullWidth: {
      type: Boolean,
      default: !1
    },
    /** Drawer closes on click outside */
    persistent: {
      type: Boolean,
      default: !1
    },
    /** Show or hide the overlay */
    overlay: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const a = e, r = et(e, "modelValue"), o = Qa("drawer"), i = Y(!1), n = Y(50), l = Y(!1);
    let s = null, d = null, c = null;
    function u() {
      if (!o.value)
        return;
      const m = a.overlay ? n.value / 100 : 0;
      o.value.style.setProperty("--drawer-backdrop-opacity", String(m));
    }
    function p(m = !1, S = !1) {
      m && a.persistent && !S || l.value && !S || (l.value = !0, i.value = !1, n.value = 0, u(), s && (cancelAnimationFrame(s), s = null), d && (clearTimeout(d), d = null), c && clearTimeout(c), c = window.setTimeout(() => {
        o.value?.open && o.value.close(), r.value && (r.value = !1), l.value = !1;
      }, 300));
    }
    function h(m) {
      a.overlay && m.target === m.currentTarget && p(!0);
    }
    function f() {
      p(!1, !0);
    }
    function w() {
      return Array.from(document.body.querySelectorAll("dialog.drawer[open]")).find(
        (m) => m !== o.value
      );
    }
    function _() {
      o.value && (o.value.open || o.value.showModal(), u());
    }
    function b() {
      c && clearTimeout(c);
      const m = w(), S = () => {
        _(), s && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
          i.value = !0, l.value = !1, n.value = 50, u();
        });
      };
      if (d && (clearTimeout(d), d = null), m) {
        n.value = 0, u(), m.dispatchEvent(new CustomEvent("drawer:force-close")), d = window.setTimeout(S, 300);
        return;
      }
      S();
    }
    ve(r, (m) => {
      if (m) {
        b();
        return;
      }
      p(!1, !0);
    });
    function $(m) {
      if (a.persistent) {
        m.preventDefault();
        return;
      }
      p(!1, !0);
    }
    function x() {
      c && (clearTimeout(c), c = null), r.value && (r.value = !1), l.value || (i.value = !1), l.value = !1;
    }
    return dt(() => {
      o.value?.addEventListener("cancel", $), o.value?.addEventListener("click", h), o.value?.addEventListener("drawer:force-close", f), r.value && b();
    }), pa(() => {
      o.value?.removeEventListener("cancel", $), o.value?.removeEventListener("click", h), o.value?.removeEventListener("drawer:force-close", f), o.value?.open && o.value.close(), s && cancelAnimationFrame(s), d && clearTimeout(d), c && clearTimeout(c);
    }), ve(
      () => a.overlay,
      () => {
        u();
      },
      { immediate: !0 }
    ), ve(
      n,
      () => {
        u();
      },
      { immediate: !0 }
    ), t({
      closeDrawer: p
    }), (m, S) => (y(), z("dialog", {
      ref: "drawer",
      "data-testid": "drawer",
      class: he(["drawer", [
        e.position,
        {
          open: i.value,
          persistent: e.persistent,
          "full-width": e.fullWidth,
          "no-overlay": !e.overlay
        }
      ]]),
      onClose: x
    }, [
      N("div", zh, [
        N("div", Eh, [
          q(Ch, {
            level: "h2",
            class: "title"
          }, {
            default: B(() => [
              ue(U(e.title), 1)
            ]),
            _: 1
          }),
          q(Gt, {
            variant: "text",
            icon: k($h),
            class: "close",
            "data-testid": "close-button",
            "aria-label": k(M)("drawer.close"),
            onClick: S[0] || (S[0] = (P) => p())
          }, null, 8, ["icon", "aria-label"])
        ]),
        N("div", Th, [
          le(m.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 34));
  }
}, Ah = /* @__PURE__ */ pe(Oh, [["__scopeId", "data-v-ba805a59"]]), Vh = ["disabled"], Ph = {
  __name: "PSwitch",
  props: {
    modelValue: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = V({
      get: () => a.modelValue,
      set: (n) => {
        r("update:modelValue", n);
      }
    });
    function i() {
      o.value = !o.value;
    }
    return (n, l) => (y(), z("button", {
      class: he(["switch", { enabled: o.value }]),
      "data-testid": "switch",
      disabled: e.disabled,
      "aria-label": "Use setting",
      onClick: l[0] || (l[0] = (s) => e.disabled ? null : i()),
      onKeydown: l[1] || (l[1] = ot(qe(() => {
      }, ["prevent"]), ["enter"]))
    }, [
      N("span", {
        class: he(["dot", { enabled: o.value }]),
        "aria-hidden": "true"
      }, null, 2)
    ], 42, Vh));
  }
}, nn = /* @__PURE__ */ pe(Ph, [["__scopeId", "data-v-2a0977ac"]]), jh = {}, Ih = { class: "form-row" }, Mh = {
  key: 0,
  class: "title"
}, Nh = {
  key: 1,
  class: "subtitle"
}, Bh = { class: "fields" };
function Lh(e, t) {
  return y(), z("div", Ih, [
    N("div", {
      class: he(["label", { "hidden md:block": !e.$slots.title && !e.$slots.subtitle }])
    }, [
      e.$slots.title ? (y(), z("p", Mh, [
        le(e.$slots, "title", {}, void 0, !0)
      ])) : Z("", !0),
      e.$slots.subtitle ? (y(), z("p", Nh, [
        le(e.$slots, "subtitle", {}, void 0, !0)
      ])) : Z("", !0)
    ], 2),
    N("div", Bh, [
      le(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const rt = /* @__PURE__ */ pe(jh, [["render", Lh], ["__scopeId", "data-v-fbd1bdc0"]]), Dh = { class: "form-grid" }, Fh = {
  __name: "PFormGrid",
  setup(e) {
    return (t, a) => (y(), z("div", Dh, [
      le(t.$slots, "default", {}, void 0, !0),
      t.$slots.actions ? (y(), ee(rt, {
        key: 0,
        class: "actions"
      }, {
        default: B(() => [
          le(t.$slots, "actions", {}, void 0, !0)
        ]),
        _: 3
      })) : Z("", !0)
    ]));
  }
}, ln = /* @__PURE__ */ pe(Fh, [["__scopeId", "data-v-cf479711"]]);
function Rh(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Uh(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
function qh(e, t) {
  return y(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" })
  ]);
}
const Hh = {
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
  setup(e) {
    const t = Y(null);
    function a(r) {
      if (!["ArrowUp", "ArrowDown"].includes(r.key))
        return;
      const o = hr(t.value), i = o.indexOf(r.target);
      r.key === "ArrowDown" ? o[i + 1]?.focus() : r.key === "ArrowUp" && o[i - 1]?.focus();
    }
    return (r, o) => (y(), z("div", {
      ref_key: "list",
      ref: t,
      class: he(["list", { grid: e.grid }]),
      style: Jt(`column-gap: ${e.gapRow}; row-gap: ${e.gapColumn};`),
      "data-testid": "list",
      onKeydown: a
    }, [
      (y(!0), z(_e, null, qt(e.items, (i, n) => le(r.$slots, "default", {
        key: n,
        index: n,
        item: i
      }, void 0, !0)), 128)),
      le(r.$slots, "append-list", {}, void 0, !0)
    ], 38));
  }
}, Kh = /* @__PURE__ */ pe(Hh, [["__scopeId", "data-v-12959343"]]), Wh = ["data-testid", "tabindex", "aria-disabled"], Zh = {
  key: 0,
  class: "prepend"
}, Gh = { class: "content" }, Jh = {
  key: 0,
  class: "title"
}, Yh = {
  key: 1,
  class: "subtitle"
}, Xh = { class: "text" }, Qh = {
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
  setup(e) {
    return (t, a) => (y(), z("div", {
      class: he(["list-item", { clickable: e.clickable, active: e.active }]),
      "data-testid": e.clickable ? "clickable" : "list-item",
      tabindex: e.disabled ? -1 : 0,
      "aria-disabled": e.disabled
    }, [
      t.$slots.prepend ? (y(), z("div", Zh, [
        le(t.$slots, "prepend", {}, void 0, !0)
      ])) : Z("", !0),
      N("div", Gh, [
        le(t.$slots, "content", {}, () => [
          e.title ? (y(), z("span", Jh, U(e.title), 1)) : Z("", !0),
          e.subtitle ? (y(), z("span", Yh, U(e.subtitle), 1)) : Z("", !0),
          N("span", Xh, U(e.text), 1)
        ], !0)
      ])
    ], 10, Wh));
  }
}, po = /* @__PURE__ */ pe(Qh, [["__scopeId", "data-v-93a0a846"]]), ev = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], tv = {
  key: 0,
  class: "append"
}, av = ["id"], rv = {
  __name: "PCheckbox",
  props: /* @__PURE__ */ zt({
    id: {
      type: String,
      required: !0
    },
    value: {
      type: [String, Number, Boolean, Object],
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
    modelValue: { type: [String, Number, Boolean, Array, Object] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = et(e, "modelValue"), r = t.required ? { checked: { required: Ue.withMessage(M("checkbox.required"), wu(!0)) } } : null, o = Zt(r, { checked: a }), i = V(() => `${t.id}-error`);
    return (n, l) => (y(), z("div", {
      class: he(["checkbox-container", { error: k(o).checked?.$errors[0]?.$message, large: e.large }])
    }, [
      N("label", {
        class: he(["label", { disabled: e.disabled }])
      }, [
        ca(N("input", De(n.$attrs, {
          id: e.id,
          "onUpdate:modelValue": l[0] || (l[0] = (s) => a.value = s),
          class: "checkbox",
          type: "checkbox",
          "data-testid": "checkbox",
          value: e.value,
          disabled: e.disabled,
          required: e.required,
          tabindex: n.$attrs.tabindex,
          indeterminate: e.indeterminate,
          "true-value": e.trueValue,
          "false-value": e.falseValue,
          onBlur: l[1] || (l[1] = (s) => k(o).checked?.$touch(s))
        }), null, 16, ev), [
          [zl, a.value]
        ]),
        le(n.$slots, "label", {}, () => [
          ue(U(e.label), 1)
        ], !0),
        n.$slots.append ? (y(), z("span", tv, [
          le(n.$slots, "append", {}, void 0, !0)
        ])) : Z("", !0)
      ], 2),
      k(o).checked?.$errors[0]?.$message ? (y(), z("span", {
        key: 0,
        id: i.value,
        role: "alert",
        "aria-live": "assertive",
        class: "error-message"
      }, U(k(o).checked.$errors[0].$message), 9, av)) : Z("", !0)
    ], 2));
  }
}, fo = /* @__PURE__ */ pe(rv, [["__scopeId", "data-v-3dad8f2b"]]);
function ov(e, t) {
  return t.split(".").reduce((a, r) => a[r] ? a[r] : a, e);
}
const iv = {
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
  setup(e) {
    return dc((t) => ({
      v1e7beddb: e.thickness
    })), (t, a) => (y(), z("hr", {
      class: he(["divider", { vertical: e.vertical, flex: e.flex }])
    }, null, 2));
  }
}, nv = /* @__PURE__ */ pe(iv, [["__scopeId", "data-v-cf022594"]]), Ql = {
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
}, lv = ["data-testid", "tabindex"], sv = ["for"], dv = ["aria-invalid", "aria-describedby"], cv = { class: "label-inner" }, uv = ["onClick"], pv = {
  key: 2,
  class: "selected-item"
}, fv = ["id", "placeholder", "disabled", "readonly", "value", "aria-invalid", "aria-describedby"], hv = { class: "action-buttons" }, vv = ["aria-label", "disabled"], mv = ["aria-label", "disabled"], gv = ["id"], bv = {
  key: 0,
  class: "content-divider"
}, wv = {
  key: 1,
  class: "no-results"
}, yv = {
  __name: "_BaseSelect",
  props: {
    ...Ql,
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
  setup(e, { expose: t, emit: a }) {
    const r = a, o = e, i = It("showError", !0), n = Y(!1), l = Y(!1), s = Y(!1), d = Y(null), c = Y(null), u = Y(null), p = Y(null), h = Y(null), f = Y(() => {
    }), w = Y(() => {
    }), _ = Y(() => {
    }), b = V({
      get() {
        return o.multiple && !Array.isArray(o.modelValue) ? [] : o.modelValue;
      },
      set(K) {
        if (o.multiple) {
          r("update:modelValue", K);
          return;
        }
        r("update:modelValue", o.returnObject || !o.itemValue ? K : K?.[o.itemValue]);
      }
    }), $ = V(() => o.requiredMessage ? o.requiredMessage : o.label ? M("input.required_with_label", { label: o.label.toLowerCase() }) : M("input.required")), x = V(() => o.required ? { value: { required: Ue.withMessage(() => $.value, Ga) } } : { value: {} }), m = Zt(x.value, { value: b }), S = V(() => !o.required || o.required && !m.value?.$errors[0]), P = V(() => !!o.error || m.value?.$errors?.length > 0 || !S.value), ae = V(() => Array.isArray(b.value) && b.value.length > 0), X = V(() => `${o.id}-error`);
    function Q(K) {
      return o.itemValue ? K[o.itemValue] : K;
    }
    function G(K) {
      return o.multiple ? o.modelValue?.includes(Q(K)) || !1 : b.value === Q(K);
    }
    function ne(K) {
      let me = null;
      return (typeof K == "string" || typeof K == "number") && !o.itemText ? K : (typeof o.itemText == "string" && o.itemText?.includes(".") && (me = ov(K, o.itemText)), !K || typeof o.itemText == "string" && (!o.itemText?.includes(".") && K[o.itemText] === void 0 || o.itemText?.includes(".") && typeof me != "string") ? "" : o.itemText && typeof o.itemText == "string" ? K[o.itemText] : typeof o.itemText == "function" ? o.itemText(K) : me);
    }
    function F(K) {
      if (!K)
        return "";
      if (o.grouped) {
        const me = o.items.find(
          (fe) => fe[o.groupItems].find((ge) => Q(ge) === K)
        )[o.groupItems].find((fe) => Q(fe) === K);
        return ne(me);
      }
      return !o.returnObject && o.itemValue ? ne(o.items.find((me) => Q(me) === K)) : ne(K);
    }
    function I(K) {
      b.value.splice(b.value.indexOf(K), 1), r("update:modelValue", b.value);
    }
    function L(K) {
      if (!o.multiple) {
        b.value = K;
        return;
      }
      if (b.value.includes(Q(K))) {
        b.value = b.value.filter((me, fe) => fe !== b.value.indexOf(Q(K)));
        return;
      }
      b.value = [...b.value, Q(K)];
    }
    function E(K) {
      const me = o.returnObject || !o.itemValue ? K[o.groupItems] : K[o.groupItems].map((tt) => tt[o.itemValue]);
      let fe = !1, ge = !0;
      return me.forEach((tt) => {
        b.value.includes(tt) ? fe = !0 : ge = !1;
      }), ge ? !0 : fe ? "indeterminate" : !1;
    }
    function H(K) {
      const me = o.returnObject || !o.itemValue ? K[o.groupItems] : K[o.groupItems].map((fe) => fe[o.itemValue]);
      if (E(K) === !0) {
        me.forEach((fe) => {
          I(fe);
        });
        return;
      }
      r("update:modelValue", Array.from(/* @__PURE__ */ new Set([...b.value, ...me])));
    }
    function ce(K) {
      n.value = K, r("update:isOpen", K);
    }
    function oe(K) {
      s.value = K, r("update:focus", K), !K && r("update:inputValue", null);
    }
    function He() {
      o.behavior === "manual" && w.value(), o.behavior === "focus" && !n.value && requestAnimationFrame(() => {
        p.value.focus();
      });
    }
    function $e(K, me) {
      p.value = K, o.behavior === "manual" && (f.value = me.setActivator, w.value = me.toggle, _.value = me.onKeydown);
    }
    async function Ve() {
      return u;
    }
    const Oe = V(() => o.inputValue !== null ? o.inputValue : o.multiple ? null : F(b.value));
    return ve(
      () => [s.value, l.value],
      () => {
        !s.value && !l.value && m.value.$touch();
      }
    ), t({
      getSelectContent: Ve,
      getItemText: ne,
      setActivator: f,
      toggle: w,
      onKeydown: _,
      input: p
    }), (K, me) => (y(), ee(Zl, {
      ref_key: "floatingContainer",
      ref: h,
      transition: "expand",
      offset: o.offset !== null ? o.offset : 1,
      attach: d.value,
      behavior: e.behavior,
      "close-on-click": !o.multiple,
      "onUpdate:isOpen": ce,
      "onUpdate:focus": oe
    }, {
      activator: B((fe) => [
        N("div", De(e.behavior === "click" ? { ...K.$attrs, ...K.disabled ? {} : fe } : null, {
          "data-testid": o.dataTestid,
          class: ["base-select", [o.class, e.behavior, { "is-open": n.value, disabled: o.disabled }]],
          tabindex: e.behavior === "click" && !K.disabled ? 0 : null,
          onFocus: me[5] || (me[5] = (ge) => l.value = !0),
          onBlur: me[6] || (me[6] = (ge) => l.value = !1)
        }), [
          K.label ? (y(), z("label", {
            key: 0,
            class: "input-label",
            for: K.id
          }, [
            N("span", null, U(K.label), 1)
          ], 8, sv)) : Z("", !0),
          N("div", {
            ref_key: "selectWrapper",
            ref: d,
            class: he(["wrapper", { focus: s.value || l.value, "has-error": P.value }]),
            "aria-invalid": P.value,
            "aria-describedby": P.value ? X.value : null
          }, [
            K.prependIcon ? (y(), ee(ft, {
              key: 0,
              class: "prepend-icon",
              icon: K.prependIcon
            }, null, 8, ["icon"])) : Z("", !0),
            ae.value ? (y(), z("div", {
              key: 1,
              ref_key: "selectedItems",
              ref: c,
              class: "selected-items"
            }, [
              (y(!0), z(_e, null, qt(b.value, (ge, tt) => (y(), ee(ri, {
                key: tt,
                ref_for: !0,
                ref: "label",
                color: "gray"
              }, {
                default: B(() => [
                  N("span", cv, [
                    ue(U(F(ge)) + " ", 1),
                    N("button", {
                      class: "close-button",
                      type: "button",
                      tabindex: "-1",
                      onClick: qe((fa) => I(ge), ["stop", "prevent"])
                    }, [
                      q(Gr, { icon: k(qh) }, null, 8, ["icon"])
                    ], 8, uv)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ], 512)) : !K.multiple && e.behavior === "click" && b.value ? (y(), z("div", pv, U(F(b.value)), 1)) : Z("", !0),
            e.behavior === "click" ? ca((y(), z("div", {
              key: 3,
              class: "placeholder"
            }, U(o.placeholder), 513)), [
              [Yo, !b.value || b.value.length === 0]
            ]) : (y(), z("input", De({ key: 4 }, e.behavior === "focus" ? { ...K.$attrs, ...fe } : K.$attrs, {
              id: o.id,
              ref: (ge) => $e(ge, fe),
              placeholder: o.placeholder,
              disabled: o.disabled,
              readonly: o.readonly,
              value: Oe.value,
              autocomplete: "off",
              "aria-invalid": P.value,
              "aria-describedby": P.value ? X.value : null,
              onInput: me[0] || (me[0] = (ge) => K.$emit("update:inputValue", ge.target.value)),
              onBlur: me[1] || (me[1] = (ge) => l.value = !1),
              onFocus: me[2] || (me[2] = (ge) => l.value = !0)
            }), null, 16, fv)),
            N("div", hv, [
              o.clearable && (!o.multiple && b.value || o.multiple && b.value?.length > 0) ? (y(), z("button", {
                key: 0,
                "aria-label": k(M)("input.clear"),
                class: "clear-button",
                tabindex: "-1",
                type: "button",
                disabled: o.disabled,
                onClick: [
                  me[3] || (me[3] = (ge) => b.value = o.multiple ? [] : null),
                  me[4] || (me[4] = qe(() => {
                  }, ["stop"]))
                ]
              }, [
                q(ft, {
                  icon: k(Uh),
                  "aria-hidden": "true"
                }, null, 8, ["icon"])
              ], 8, vv)) : Z("", !0),
              le(K.$slots, "inline", {}, () => [
                K.hideChevron ? Z("", !0) : (y(), z("button", {
                  key: 0,
                  "aria-label": k(M)("input.toggle"),
                  tabindex: "-1",
                  type: "button",
                  "data-testid": "toggle-chevron",
                  disabled: o.disabled,
                  onClick: He
                }, [
                  q(ft, {
                    class: he(["state-indicator", { "is-open": n.value }]),
                    icon: k(Rh)
                  }, null, 8, ["icon", "class"])
                ], 8, mv))
              ], !0)
            ])
          ], 10, dv),
          P.value && k(i) ? (y(), z("div", {
            key: 1,
            id: X.value,
            role: "alert",
            "aria-live": "assertive",
            class: "error"
          }, U(k(m).value?.$errors[0]?.$message ? k(m).value.$errors[0].$message : o.error), 9, gv)) : Z("", !0)
        ], 16, lv)
      ]),
      default: B(() => [
        K.showDivider ? (y(), z("hr", bv)) : Z("", !0),
        N("div", {
          ref_key: "selectContent",
          ref: u,
          class: he(["select-content", { "remove-radius": K.showDivider, "show-shadow": !K.showDivider }])
        }, [
          le(K.$slots, "prepend-list", {}, void 0, !0),
          o.items.length > 0 ? (y(), ee(Kh, {
            key: 0,
            "gap-column": "0",
            "gap-row": "0",
            items: o.items,
            onKeydown: me[7] || (me[7] = qe(() => {
            }, ["prevent"]))
          }, {
            default: B(({ item: fe }) => [
              o.grouped ? (y(), z(_e, { key: 0 }, [
                o.items.indexOf(fe) !== 0 ? (y(), ee(nv, { key: 0 })) : Z("", !0),
                o.grouped ? (y(), ee(po, {
                  key: 1,
                  title: fe[o.groupText],
                  clickable: o.multiple,
                  disabled: !o.multiple,
                  onClick: (ge) => o.multiple && H(fe),
                  onKeydown: ot((ge) => o.multiple && H(fe), ["enter"])
                }, ro({ _: 2 }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: B(() => [
                      q(fo, {
                        id: `group-${o.items.indexOf(fe)}-checkbox`,
                        "model-value": typeof E(fe) == "boolean" ? E(fe) : !1,
                        indeterminate: E(fe) === "indeterminate",
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : Z("", !0),
                (y(!0), z(_e, null, qt(fe[o.groupItems], (ge, tt) => (y(), ee(po, {
                  key: tt,
                  clickable: "",
                  active: G(ge),
                  text: ne(ge),
                  onClick: (fa) => L(ge),
                  onKeydown: ot((fa) => L(ge), ["enter"])
                }, ro({
                  content: B(() => [
                    le(K.$slots, "option", {
                      selected: G(ge),
                      option: ge
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: B(() => [
                      q(fo, {
                        id: `item-${fe[o.groupItems].indexOf(ge)}-checkbox`,
                        "model-value": G(ge),
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : ne(fe) || K.$slots.option ? (y(), ee(po, {
                key: 1,
                clickable: "",
                active: G(fe),
                text: ne(fe),
                onClick: (ge) => L(fe),
                onKeydown: ot((ge) => L(fe), ["enter"])
              }, ro({
                content: B(() => [
                  le(K.$slots, "option", {
                    selected: G(fe),
                    option: fe
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                o.multiple ? {
                  name: "prepend",
                  fn: B(() => [
                    q(fo, {
                      id: `item-${o.items.indexOf(fe)}-checkbox`,
                      "model-value": G(fe),
                      tabindex: "-1"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"])) : Z("", !0)
            ]),
            _: 3
          }, 8, ["items"])) : o.hideNoItemsLabel ? Z("", !0) : (y(), z("div", wv, U(o.noItemsLabel || k(M)("input.no_results")), 1)),
          le(K.$slots, "append-list", {}, void 0, !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["offset", "attach", "behavior", "close-on-click"]));
  }
}, xv = /* @__PURE__ */ pe(yv, [["__scopeId", "data-v-c35e5bc8"]]), kv = {
  __name: "PCombobox",
  props: {
    ...Ql,
    /** Whether the combobox is loading new items in the dropdown */
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "intersect"],
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = V(() => {
      const { loading: x, ...m } = r;
      return m;
    }), n = V({
      get() {
        return r.multiple && !Array.isArray(r.modelValue) ? [r.modelValue] : r.modelValue;
      },
      set(x) {
        o("update:modelValue", x);
      }
    }), l = Y(null), s = Y(null), d = Y(null), c = Y(null), u = Y(null), p = Y(!1), h = Y(!1);
    function f() {
      s.value = null, n.value = null, l.value.blur();
    }
    const w = V(() => !s.value || r.serverside ? r.items : r.itemText ? r.grouped ? r.items.filter(
      (x) => x[r.groupItems].some(
        (m) => l.value.getItemText(m).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map((x) => {
      const m = x[r.groupItems].filter(
        (S) => l.value.getItemText(S).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      );
      return m.length ? {
        ...x,
        [r.groupItems]: m
      } : null;
    }) : r.items.filter(
      (x) => l.value.getItemText(x).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ) : r.items.filter(
      (x) => x.toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ));
    async function _() {
      const x = (await l.value.getSelectContent()).value;
      x?.scrollTo(0, x.scrollHeight);
    }
    async function b(x) {
      if (p.value = x, x) {
        await Ct(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame), c.value = new IntersectionObserver(
          (m) => {
            m[0].isIntersecting && !h.value && !r.loading && (o("intersect"), _());
          },
          {
            root: (await l.value.getSelectContent()).value,
            threshold: 0
          }
        ), c.value.observe(d.value);
        return;
      }
      c.value?.disconnect(), c.value = null;
    }
    function $(x) {
      if (!r.serverside) {
        o("search", x);
        return;
      }
      x !== null && (h.value = !0, clearTimeout(u.value), u.value = setTimeout(() => {
        p.value && o("search", x), h.value = !1;
      }, 500));
    }
    return t({
      reset: f,
      select: l,
      scrollToBottom: _
    }), (x, m) => (y(), ee(xv, De({
      id: x.id,
      ref_key: "select",
      ref: l,
      "input-value": s.value,
      "onUpdate:inputValue": m[1] || (m[1] = (S) => s.value = S)
    }, i.value, {
      behavior: "focus",
      "hide-no-items-label": e.loading || h.value,
      items: h.value ? [] : w.value,
      "onUpdate:inputValue": m[2] || (m[2] = (S) => $(S)),
      "onUpdate:focus": m[3] || (m[3] = (S) => S && o("search", "")),
      "onUpdate:isOpen": m[4] || (m[4] = (S) => b(S)),
      "onUpdate:modelValue": m[5] || (m[5] = (S) => n.value = S)
    }), {
      inline: B(() => [
        le(x.$slots, "inline", {}, void 0, !0)
      ]),
      option: B(({ option: S, selected: P }) => [
        le(x.$slots, "option", {
          selected: P,
          option: S
        }, void 0, !0)
      ]),
      "append-list": B(() => [
        N("div", {
          ref_key: "intersect",
          ref: d,
          class: "intersect"
        }, [
          e.loading || h.value ? (y(), ee(ai, {
            key: 0,
            class: "search-loader",
            onClick: m[0] || (m[0] = qe(() => {
            }, ["prevent"]))
          })) : Z("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
}, _v = /* @__PURE__ */ pe(kv, [["__scopeId", "data-v-905f1ae1"]]);
class ga {
  constructor(t = {}) {
    this.code = t.code, this.overwrites = {
      title: t.overwrites?.title ?? null,
      description: t.overwrites?.description ?? null,
      hide: t.overwrites?.hide ?? !1,
      selected: t.overwrites?.selected ?? null,
      value: t.overwrites?.value ?? null,
      options: Array.isArray(t.overwrites?.options) ? t.overwrites.options.map((a) => ({ ...a })) : []
    };
  }
}
const $v = { class: "sub-heading" }, Sv = { class: "actions" }, Cv = {
  __name: "PEditorDrawer",
  props: /* @__PURE__ */ zt({
    productCode: {
      type: String,
      default: ""
    }
  }, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {},
    step: {
      type: Object,
      required: !0
    },
    stepModifiers: {},
    overwrites: {
      type: Object,
      required: !0
    },
    overwritesModifiers: {}
  }),
  emits: ["update:modelValue", "update:step", "update:overwrites"],
  setup(e) {
    const t = e, a = et(e, "modelValue"), r = et(e, "step"), o = et(e, "overwrites"), i = St(new ga()), n = Qa("editor-form");
    function l(I = []) {
      return I.map((L) => ({
        ...L,
        overwrites: L.overwrites ? { ...L.overwrites } : {}
      }));
    }
    function s(I = {}) {
      return I ? {
        code: I.code ?? null,
        overwrites: {
          title: I.overwrites?.title ?? null,
          description: I.overwrites?.description ?? null,
          hide: I.overwrites?.hide ?? !1,
          selected: I.overwrites?.selected ?? null,
          value: I.overwrites?.value ?? null,
          options: l(I.overwrites?.options ?? [])
        }
      } : {
        code: null,
        overwrites: {
          title: null,
          description: null,
          hide: !1,
          selected: null,
          value: null,
          options: []
        }
      };
    }
    function d() {
      if (!r.value)
        return new ga();
      const I = (o.value?.overwrites?.steps ?? []).find((H) => H.code === r.value.code), L = I ? s(I) : null;
      if (L)
        return new ga(L);
      const E = r.value.options?.map((H) => ({
        code: H.code,
        overwrites: {}
      })) ?? [];
      return new ga({
        code: r.value.code,
        overwrites: {
          options: E
        }
      });
    }
    function c(I) {
      const L = o.value && typeof o.value == "object" ? o.value : {}, E = Array.isArray(L.overwrites?.steps) ? L.overwrites.steps.map((oe) => s(oe)) : [], H = s({
        code: I.code ?? r.value?.code,
        overwrites: I.overwrites
      }), ce = E.findIndex((oe) => oe.code === H.code);
      ce !== -1 ? E.splice(ce, 1, H) : E.push(H), o.value = {
        code: L.code ?? t.productCode ?? null,
        overwrites: {
          ...L.overwrites,
          steps: E
        }
      }, i.value = new ga(H);
    }
    function u(I) {
      const L = new ga({
        code: i.value.code ?? r.value?.code,
        overwrites: {
          ...i.value.overwrites,
          options: l(i.value.overwrites?.options ?? [])
        }
      });
      I(L), c(L);
    }
    ve(
      [() => r.value, () => o.value],
      () => {
        i.value = d();
      },
      { immediate: !0, deep: !0 }
    );
    function p(I, L) {
      u((E) => {
        E.overwrites[I] = L;
      });
    }
    function h(I, L) {
      u((E) => {
        const H = Array.isArray(E.overwrites.options) ? E.overwrites.options : [];
        let ce = !1;
        if (E.overwrites.options = H.map((oe) => {
          if (oe.code !== I)
            return oe;
          ce = !0;
          const He = { ...oe.overwrites ?? {} };
          return L(He), {
            ...oe,
            overwrites: He
          };
        }), !ce) {
          const oe = {};
          L(oe), E.overwrites.options = [
            ...E.overwrites.options,
            {
              code: I,
              overwrites: oe
            }
          ];
        }
      });
    }
    function f(I, L, E) {
      h(I, (H) => {
        H[L] = E;
      });
    }
    function w(I) {
      if (I == null || I === "")
        return null;
      const L = typeof I == "number" ? I : Number(I);
      return Number.isFinite(L) ? L : null;
    }
    function _(I, L) {
      const E = w(L);
      h(I, (H) => {
        if (E === null) {
          delete H.value;
          return;
        }
        H.value = E;
      });
    }
    function b(I, L) {
      return i.value.overwrites?.options?.find((E) => E.code === I)?.overwrites?.[L] ?? null;
    }
    const $ = Y([]), x = V({
      get: () => ({
        width: b("width", "value"),
        height: b("height", "value")
      }),
      set: (I) => {
        _("width", I.width), _("height", I.height);
      }
    }), m = V({
      get: () => b("amount", "value") ?? 1,
      set: (I) => {
        u((L) => {
          L.overwrites.options = L.overwrites.options.map((E) => E.code === "amount" ? {
            ...E,
            overwrites: {
              ...E.overwrites ?? {},
              value: I
            }
          } : E);
        });
      }
    }), S = V(() => {
      const I = r.value?.options?.find((oe) => oe.code === "width"), L = r.value?.options?.find((oe) => oe.code === "height"), E = I && I.reversible && L && L.reversible, H = I?.min, ce = L?.min;
      return E ? Math.min(H, ce) : { width: H, height: ce };
    }), P = V(() => {
      const I = r.value?.options?.find((oe) => oe.code === "width"), L = r.value?.options?.find((oe) => oe.code === "height"), E = I && I.reversible && L && L.reversible, H = I?.max, ce = L?.max;
      return E ? Math.max(H, ce) : { width: H, height: ce };
    }), ae = V(() => ({
      width: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof S.value == "number" ? S.value : S.value.width
          }),
          Tr(typeof S.value == "number" ? S.value : S.value.width)
        ),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof P.value == "number" ? P.value : P.value.width
          }),
          Or(typeof P.value == "number" ? P.value : P.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof S.value == "number" ? S.value : S.value.height
          }),
          Tr(typeof S.value == "number" ? S.value : S.value.height)
        ),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof P.value == "number" ? P.value : P.value.height
          }),
          Or(typeof P.value == "number" ? P.value : P.value.height)
        )
      }
    })), X = Zt(ae, x), Q = V(() => r.value?.options?.some((I) => ["width", "height", "amount"].includes(I.code))), G = V(
      () => r.value.options?.find((I) => I.code === i.value.overwrites.selected)
    );
    function ne() {
      i.value = d(), c(i.value), X.value.$reset();
    }
    async function F() {
      await n.value.validate() && (a.value = !1);
    }
    return (I, L) => (y(), ee(Ah, {
      modelValue: a.value,
      "onUpdate:modelValue": L[8] || (L[8] = (E) => a.value = E),
      position: "right",
      title: k(M)("editor.editing_step", { step: r.value?.title }),
      persistent: k(X).$errors.length > 0
    }, {
      default: B(() => [
        k(X).$errors.length ? (y(), ee(Jr, {
          key: 0,
          title: k(M)("editor.editor_alert.title"),
          description: k(M)("editor.editor_alert.description"),
          type: "error"
        }, null, 8, ["title", "description"])) : Z("", !0),
        q(Jl, { ref: "editor-form" }, {
          default: B(() => [
            q(ln, null, {
              default: B(() => [
                q(rt, null, {
                  title: B(() => [
                    ue(U(k(M)("editor.hide_step.title")), 1)
                  ]),
                  subtitle: B(() => [
                    ue(U(k(M)("editor.hide_step.description")), 1)
                  ]),
                  default: B(() => [
                    q(nn, {
                      "model-value": !!i.value.overwrites.hide,
                      "onUpdate:modelValue": L[0] || (L[0] = (E) => p("hide", E))
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                Q.value ? Z("", !0) : (y(), z(_e, { key: 0 }, [
                  q(rt, null, {
                    title: B(() => [
                      ue(U(k(M)("editor.default_option.title")), 1)
                    ]),
                    subtitle: B(() => [
                      ue(U(k(M)("editor.default_option.description")), 1)
                    ]),
                    default: B(() => [
                      q(_v, {
                        id: "default-value-combo",
                        "model-value": i.value.overwrites.selected,
                        items: r.value.options,
                        "item-text": "title",
                        "item-value": "code",
                        placeholder: k(M)("editor.default_option.label"),
                        required: i.value.overwrites.hide,
                        "onUpdate:modelValue": L[1] || (L[1] = (E) => p("selected", E))
                      }, null, 8, ["model-value", "items", "placeholder", "required"])
                    ]),
                    _: 1
                  }),
                  G.value?.amount ? (y(), ee(rt, { key: 0 }, {
                    title: B(() => [
                      ue(U(k(M)("editor.default_option_value.title")), 1)
                    ]),
                    subtitle: B(() => [
                      ue(U(k(M)("editor.default_option_value.description")), 1)
                    ]),
                    default: B(() => [
                      q(kt, {
                        id: "default-value-input",
                        "model-value": i.value.overwrites.value,
                        placeholder: k(M)("editor.default_option_value.label"),
                        required: i.value.overwrites.hide,
                        inline: G.value?.customInput?.unit,
                        min: G.value?.customInput?.min,
                        max: G.value?.customInput?.max,
                        rules: [
                          {
                            validator: (E) => {
                              if (E === "" || E === null || E === void 0)
                                return !0;
                              const H = G.value?.customInput?.min ?? 0;
                              return Number(E) >= H;
                            },
                            message: k(M)("step.min_value", {
                              minValue: G.value?.customInput?.min ?? 0
                            })
                          },
                          {
                            validator: (E) => {
                              if (E === "" || E === null || E === void 0)
                                return !0;
                              const H = G.value?.customInput?.max ?? 1 / 0;
                              return Number(E) <= H;
                            },
                            message: k(M)("step.max_value", {
                              maxValue: G.value?.customInput?.max ?? 1 / 0
                            })
                          }
                        ],
                        "onUpdate:modelValue": L[2] || (L[2] = (E) => p("value", Number(E)))
                      }, null, 8, ["model-value", "placeholder", "required", "inline", "min", "max", "rules"])
                    ]),
                    _: 1
                  })) : Z("", !0),
                  q(rt, null, {
                    title: B(() => [
                      ue(U(k(M)("editor.edit_title.title")), 1)
                    ]),
                    subtitle: B(() => [
                      ue(U(k(M)("editor.edit_title.description")), 1)
                    ]),
                    default: B(() => [
                      q(kt, {
                        id: `step-title-input-${r.value.code}`,
                        "model-value": i.value.overwrites.title,
                        type: "text",
                        placeholder: k(M)("editor.edit_title.placeholder"),
                        "onUpdate:modelValue": L[3] || (L[3] = (E) => p("title", E))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  }),
                  q(rt, null, {
                    title: B(() => [
                      ue(U(k(M)("editor.edit_description.title")), 1)
                    ]),
                    subtitle: B(() => [
                      ue(U(k(M)("editor.edit_description.description")), 1)
                    ]),
                    default: B(() => [
                      q(kt, {
                        id: `step-description-input-${r.value.code}`,
                        "model-value": i.value.overwrites.description,
                        type: "text",
                        placeholder: k(M)("editor.edit_description.placeholder"),
                        "onUpdate:modelValue": L[4] || (L[4] = (E) => p("description", E))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  })
                ], 64)),
                N("h3", $v, U(k(M)("editor.edit_options")), 1)
              ]),
              _: 1
            }),
            q(Vl, {
              modelValue: $.value,
              "onUpdate:modelValue": L[6] || (L[6] = (E) => $.value = E),
              items: r.value.options?.map((E) => ({
                ...E,
                title: E.title || k(M)(`editor.edit_option.${E.code}`)
              })),
              title: "title"
            }, {
              content: B((E) => [
                q(ln, null, {
                  default: B(() => [
                    ["height", "width", "amount"].includes(E.code) ? (y(), ee(rt, { key: 0 }, {
                      title: B(() => [
                        ue(U(k(M)(`editor.${E.code}.title`)), 1)
                      ]),
                      default: B(() => [
                        E.code === "width" || E.code === "height" ? (y(), ee(kt, {
                          key: 0,
                          id: `measurement-input-${E.code}`,
                          "model-value": x.value[E.code] ?? "",
                          type: "number",
                          "aria-label": E.code,
                          class: "measurement-input",
                          inline: E.unit,
                          min: E.min,
                          max: E.max,
                          placeholder: "",
                          error: k(X)[E.code].$errors ? k(X)[E.code].$errors[0]?.$message : "",
                          onBlur: (H) => k(X)[E.code].$touch(H),
                          "onUpdate:modelValue": (H) => _(E.code, H),
                          onKeyup: ot((H) => k(X)[E.code].$touch(H), ["enter"])
                        }, null, 8, ["id", "model-value", "aria-label", "inline", "min", "max", "error", "onBlur", "onUpdate:modelValue", "onKeyup"])) : E.code === "amount" ? (y(), ee(ei, {
                          key: 1,
                          modelValue: m.value,
                          "onUpdate:modelValue": L[5] || (L[5] = (H) => m.value = H),
                          min: E.min,
                          max: E.max || void 0
                        }, null, 8, ["modelValue", "min", "max"])) : Z("", !0)
                      ]),
                      _: 2
                    }, 1024)) : (y(), z(_e, { key: 1 }, [
                      q(rt, null, {
                        title: B(() => [
                          ue(U(k(M)("editor.hide_option.title")), 1)
                        ]),
                        subtitle: B(() => [
                          ue(U(k(M)("editor.hide_option.description")), 1)
                        ]),
                        default: B(() => [
                          q(nn, {
                            "model-value": !!b(E.code, "hide"),
                            "onUpdate:modelValue": (H) => f(E.code, "hide", H)
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      q(rt, null, {
                        title: B(() => [
                          ue(U(k(M)("editor.edit_option_title.title")), 1)
                        ]),
                        subtitle: B(() => [
                          ue(U(k(M)("editor.edit_option_title.description")), 1)
                        ]),
                        default: B(() => [
                          q(kt, {
                            id: `option-title-input-${E.code}`,
                            "model-value": b(E.code, "title") ?? "",
                            type: "text",
                            placeholder: k(M)("editor.edit_option_title.placeholder"),
                            "onUpdate:modelValue": (H) => f(E.code, "title", H)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      q(rt, null, {
                        title: B(() => [
                          ue(U(k(M)("editor.edit_option_description.title")), 1)
                        ]),
                        subtitle: B(() => [
                          ue(U(k(M)("editor.edit_option_description.description")), 1)
                        ]),
                        default: B(() => [
                          q(kt, {
                            id: `option-description-input-${E.code}`,
                            "model-value": b(E.code, "description") ?? "",
                            type: "text",
                            placeholder: k(M)("editor.edit_description.placeholder"),
                            "onUpdate:modelValue": (H) => f(E.code, "description", H)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      q(rt, null, {
                        title: B(() => [
                          ue(U(k(M)("editor.edit_image.title")), 1)
                        ]),
                        subtitle: B(() => [
                          ue(U(k(M)("editor.edit_image.description")), 1)
                        ]),
                        default: B(() => [
                          q(kt, {
                            id: `option-image-input-${E.code}`,
                            "model-value": b(E.code, "image") ?? "",
                            type: "text",
                            placeholder: k(M)("editor.edit_image.placeholder"),
                            "onUpdate:modelValue": (H) => f(E.code, "image", H)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      q(rt, null, {
                        title: B(() => [
                          ue(U(k(M)("editor.edit_sequence.title")), 1)
                        ]),
                        subtitle: B(() => [
                          ue(U(k(M)("editor.edit_sequence.description")), 1)
                        ]),
                        default: B(() => [
                          q(kt, {
                            id: `option-sequence-input-${E.code}`,
                            "model-value": b(E.code, "sequence") ?? "",
                            type: "number",
                            placeholder: k(M)("editor.edit_sequence.placeholder"),
                            rules: [
                              {
                                validator: (H) => H >= 0,
                                message: k(M)("editor.min_sequence", {
                                  min: 0
                                })
                              },
                              {
                                validator: (H) => H <= r.value.options.length,
                                message: k(M)("editor.max_sequence", {
                                  max: r.value.options.length
                                })
                              },
                              {
                                message: k(M)("editor.number_should_not_exist_twice"),
                                validator: (H) => r.value.options.map(
                                  (ce) => b(ce.code, "sequence")
                                ).filter((ce) => ce === H).length <= 1
                              }
                            ],
                            "onUpdate:modelValue": (H) => f(E.code, "sequence", H)
                          }, null, 8, ["id", "model-value", "placeholder", "rules", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 64))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            }, 8, ["modelValue", "items"])
          ]),
          _: 1
        }, 512),
        N("div", Sv, [
          q(Gt, {
            onClick: L[7] || (L[7] = (E) => F())
          }, {
            default: B(() => [
              ue(U(k(M)("editor.apply")), 1)
            ]),
            _: 1
          }),
          q(Gt, {
            variant: "secondary",
            onClick: ne
          }, {
            default: B(() => [
              ue(U(k(M)("editor.reset")), 1)
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "persistent"]));
  }
}, zv = /* @__PURE__ */ pe(Cv, [["__scopeId", "data-v-143c5965"]]), Ev = {
  class: "configurator",
  "data-testid": "product-configurator",
  part: "configurator"
}, Tv = {
  __name: "PConfigurator",
  props: /* @__PURE__ */ zt({
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
    loading: Boolean,
    hideDeliverySection: Boolean,
    buttonStartText: {
      type: String,
      default: ""
    },
    editor: Boolean
  }, {
    overwrites: {
      type: Object,
      default: () => ({})
    },
    overwritesModifiers: {},
    accordionState: {
      type: Array,
      default: () => []
    },
    accordionStateModifiers: {},
    modelValue: {
      type: Object,
      default: () => ({ options: [] })
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ zt(["update:modelValue"], ["update:overwrites", "update:accordionState", "update:modelValue"]),
  setup(e, { emit: t }) {
    const a = e, r = t, o = et(e, "overwrites"), i = et(e, "accordionState"), n = et(e, "modelValue"), l = Y(!1), s = Y(!1), d = Y({});
    function c(h, f) {
      i.value[f] = h, i.value.forEach((w, _) => {
        _ !== f && (i.value[_] = !1);
      });
    }
    function u(h, f) {
      const w = { ...n.value };
      w.options[f] = h, r("update:modelValue", w);
    }
    function p(h) {
      d.value = h, s.value = !0;
    }
    return (h, f) => (y(), z("div", Ev, [
      q(Vl, {
        modelValue: i.value,
        "onUpdate:modelValue": f[3] || (f[3] = (w) => i.value = w),
        items: e.template
      }, {
        default: B(({ item: w, index: _, open: b }) => [
          w.type === "simple" ? (y(), ee(Cf, De({
            key: 0,
            modelValue: n.value.options[_],
            "onUpdate:modelValue": ($) => n.value.options[_] = $,
            overwrites: o.value,
            "onUpdate:overwrites": f[0] || (f[0] = ($) => o.value = $)
          }, { ...w }, {
            "aria-title": w.title.toLowerCase().replaceAll(" ", "-"),
            "button-start-text": e.buttonStartText,
            editor: e.editor,
            "has-overwrites": o.value?.overwrites?.steps?.some(($) => $.code === w.code),
            "is-hidden": o.value?.overwrites?.steps?.some(($) => $.code === w.code && $.overwrites.hide),
            exportparts: "step step-title step-subtitle",
            "onEdit:step": ($) => p(w),
            "onUpdate:modelValue": ($) => u($, _),
            "onUpdate:focus": f[1] || (f[1] = ($) => l.value = $)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "aria-title", "button-start-text", "editor", "has-overwrites", "is-hidden", "onEdit:step"])) : w.type === "options" || w.type === "options-multiple" ? (y(), ee(ph, De({
            key: 1,
            modelValue: n.value.options[_],
            "onUpdate:modelValue": ($) => n.value.options[_] = $,
            overwrites: o.value,
            "onUpdate:overwrites": f[2] || (f[2] = ($) => o.value = $)
          }, { ...w }, {
            open: b,
            multiple: w.type === "options-multiple",
            "aria-title": w.title.toLowerCase().replaceAll(" ", "-"),
            disabled: l.value || e.loading,
            editor: e.editor,
            "has-overwrites": o.value?.overwrites?.steps?.some(($) => $.code === w.code),
            "is-hidden": o.value?.overwrites?.steps?.some(($) => $.code === w.code && $.overwrites.hide),
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onEdit:step": ($) => p(w),
            "onUpdate:modelValue": u,
            "onUpdate:accordionState": ($) => c($, _)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "open", "multiple", "aria-title", "disabled", "editor", "has-overwrites", "is-hidden", "onEdit:step", "onUpdate:accordionState"])) : Z("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      e.deliveryOptions.length && !e.hideDeliverySection ? (y(), ee(_h, {
        key: 0,
        items: e.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : Z("", !0),
      e.loading ? (y(), ee(ai, { key: 1 })) : Z("", !0),
      e.editor ? (y(), ee(zv, {
        key: 2,
        modelValue: s.value,
        "onUpdate:modelValue": f[4] || (f[4] = (w) => s.value = w),
        step: d.value,
        "onUpdate:step": f[5] || (f[5] = (w) => d.value = w),
        overwrites: o.value,
        "onUpdate:overwrites": f[6] || (f[6] = (w) => o.value = w),
        "product-code": a.productCode
      }, null, 8, ["modelValue", "step", "overwrites", "product-code"])) : Z("", !0)
    ]));
  }
}, Ov = /* @__PURE__ */ pe(Tv, [["__scopeId", "data-v-4ef00907"]]);
class Av {
  /**
   * Fetches data from the specified URL using the provided options.
   * @param {object} options - The options to be passed to the fetch function.
   * @param {string} proxy - The URL of the proxy.
   * @param {string} productId - The ID of an internal customer product.
   * @throws {Error} If there is an error while fetching the data.
   * @return {Promise} A promise that resolves to the fetched data in JSON format.
   */
  // eslint-disable-next-line class-methods-use-this
  async fetchData(t, a, r) {
    let o = null;
    if (!a)
      throw new Error("Proxy URL not set, add it in the init method");
    const i = new URLSearchParams({});
    t.method === "GET" && (i.set("url", JSON.parse(t.body).url), delete t.body), r && i.set("product_id", r);
    const n = {
      method: t.method,
      ...t,
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      o = await fetch(`${a}?${i}`, n);
    } catch (l) {
      throw new Error(
        `Failed to fetch data from ${t.body ? JSON.parse(t.body).url : i.get("url")}, ${l}`
      );
    }
    if (!o.ok)
      throw new Error(
        `Failed to fetch data from ${t.body ? JSON.parse(t.body).url : i.get("url")}`
      );
    return await o.json();
  }
}
class es extends Av {
  constructor({ proxy: t, apiVersion: a, productId: r }) {
    super(), this.proxy = t, this.apiVersion = a, this.productId = r;
  }
  /**
   * Asynchronously configures the product by fetching data from the 'products/configure' endpoint.
   *
   * @return {Promise<array>} The response from the API.
   */
  async configureProduct(t) {
    const a = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/configure`,
        data: {
          ...t
        }
      })
    };
    let r = {};
    try {
      r = await this.fetchData(a, this.proxy, this.productId);
    } catch (o) {
      throw new Error(o);
    }
    return r;
  }
  /**
   * Retrieves the price using the specified configuration options.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getPrice(t) {
    const a = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/price`,
        data: {
          ...t
        }
      })
    };
    return await this.fetchData(a, this.proxy, this.productId);
  }
  /**
   * Retrieve all products to be configured in the configurator.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getProducts(t) {
    const a = JSON.parse(sessionStorage.getItem("products"));
    if (a?.length && t)
      return a;
    const r = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products?per_page=1000`
      })
    }, o = await this.fetchData(r, this.proxy, this.productId);
    return t && sessionStorage.setItem("products", JSON.stringify(o.data)), o.data;
  }
  async getProduct(t) {
    const a = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/product/${t}`
      })
    };
    return await this.fetchData(a, this.proxy, this.productId);
  }
  async storeConfiguration(t) {
    const a = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/apiproducts/product`,
        data: {
          ...t
        }
      })
    };
    return await this.fetchData(a, this.proxy, this.productId);
  }
  async updateConfiguration(t) {
    const a = {
      method: "PUT",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/apiproducts/product/${t.customer_code}`,
        data: {
          ...t
        }
      })
    };
    return await this.fetchData(a, this.proxy);
  }
  async getUploaderSession(t) {
    const a = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/uploader/create`,
        data: t
      })
    };
    return (await this.fetchData(a, this.proxy, this.productId)).uploaders;
  }
}
function ho(e) {
  return Array.isArray(e) ? e.length > 0 : e != null && e !== "";
}
class sn {
  constructor({ code: t, options: a }) {
    this.code = t, this.options = a || [];
  }
}
class dn {
  constructor({ products: t, language: a }) {
    this.products = t, this.language = a;
  }
}
class cn {
  constructor({
    companyName: t,
    firstName: a,
    lastName: r,
    street: o,
    houseNumber: i,
    addition: n,
    postalCode: l,
    city: s,
    country: d,
    phone: c,
    email: u
  }) {
    this.companyName = t, this.firstName = a, this.lastName = r, this.street = o, this.houseNumber = i, this.addition = n, this.postalCode = l, this.city = s, this.country = d, this.phone = c, this.email = u;
  }
}
class Vv {
  constructor({ address: t, products: a }) {
    this.address = t, this.products = a;
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
function Pv(e, t) {
  return t.split(".").reduce((a, r) => a[r] ? a[r] : a, e);
}
const jv = {
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
      labels: { continue: "Continue" }
    },
    searchForProducts: "Search for a product",
    measurement_and_amount: "Size and amount"
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
      labels: { continue: "Doorgaan" }
    },
    searchForProducts: "Zoeken naar producten",
    measurement_and_amount: "Formaat en aantal"
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
      labels: { continue: "Weiter" }
    },
    searchForProducts: "Produkte suchen",
    measurement_and_amount: "Größe und Menge"
  }
}, ts = Je({ language: "nl" });
function Iv(e) {
  return Pv(jv[ts.language], e) || e;
}
function Mv(e, t = {}) {
  return e.replace(/{(\w+)}/g, (a, r) => t[r] || `{${r}}`);
}
function Nv(e, t) {
  return e.replace(/{(\d+)}/g, (a, r) => t[r] || `{${r}}`);
}
function $t(e, t = null) {
  const a = Iv(e);
  return Array.isArray(t) ? Nv(a) : Mv(a, t);
}
function Bv(e) {
  ts.language = e;
}
function as(e, t) {
  return t !== -1 ? e.slice(0, t + 1) : e.filter((a) => a.code !== void 0);
}
function Lv(e, t) {
  const a = new Date(e), r = /* @__PURE__ */ new Date(), o = new Date(r);
  return o.setDate(r.getDate() + 1), a.toDateString() === o.toDateString() ? $t("tomorrow") : a.toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    weekday: "long"
  });
}
function Dv(e, t) {
  return new Date(e).toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function Fv(e, t) {
  return e.length === 0 ? !0 : t.some((r) => r.code === "no-option") ? !1 : !t?.includes(void 0);
}
function Rv(e, t, a, r) {
  let o = "";
  a === "accessories-cross-sell" ? o = "unit" : (a === "material" || a === "materialType") && (o = "meter");
  const i = e.map((n) => {
    const l = r?.find((d) => d.code === n.code)?.overwrites;
    let s;
    return (n.type_code === "number" || n.type_code === "decimal") && (s = {
      value: n.default_value || parseFloat(n.min_value),
      min: n.min_value,
      max: n.max_value,
      unit: n.unit_code
    }), {
      code: n.code,
      title: l?.title || n?.name,
      description: l?.description || n?.description,
      image: l?.image || n.images.length ? n.images[0].url : void 0,
      price: n.price ? n.price[t] : void 0,
      pricePer: o,
      unit: n.unit_code,
      reversible: n.reversible,
      min: n.min_value,
      max: n.max_value,
      available: n?.available,
      amount: n.default_value,
      customInput: s,
      labels: n.label ? [
        {
          text: n.label,
          color: "red"
        }
      ] : void 0,
      sequence: l?.sequence
    };
  }).filter((n) => !r?.find((s) => s.code === n.code)?.overwrites.hide).sort((n, l) => n.sequence - l.sequence);
  return a === "accessories-cross-sell" && !i.some((n) => n.noOption) && i.unshift({
    code: "no-option",
    noOption: !0,
    noOptionText: $t("no_accessoires")
  }), i;
}
function Uv(e, t, a, r, o, i, n) {
  let l = [...t];
  if (!e.some((p) => p.code === "measurement-amount") && t.some((p) => p.children.some((h) => ["width", "height"].includes(h.code)))) {
    const p = t.filter((f) => ["size", "amount"].includes(f.code));
    l = t.filter((f) => !["size", "amount"].includes(f.code));
    const h = {
      code: "measurement-amount",
      name: $t("measurement_and_amount"),
      children: p.flatMap((f) => f.children),
      available: p.every((f) => f.available)
    };
    l.unshift(h);
  }
  const s = l.map((p) => {
    let h = p.code === "measurement-amount" || p.code === "amount" ? "simple" : "options";
    const f = o?.find((b) => b.code === p.code)?.overwrites, w = Rv(p.children, r, p.code, f?.options);
    let { code: _ } = p;
    return _ === "accessories-cross-sell" && (_ = "accessories", h = "options-multiple"), {
      code: _,
      title: f && f.title ? f.title : p.name,
      type: h,
      options: w,
      hidden: f && f.hide && !n
    };
  }), d = e.some((p) => p.code === "measurement-amount") || i, c = a !== -1 && d ? a - 2 : a;
  return [...as(e, c), ...s];
}
function rs(e) {
  let t = 1 / 0, a;
  return e.forEach((r) => {
    const o = r.prices.purchase_rush_surcharge;
    o < t && (t = o, a = r);
  }), a;
}
function os(e) {
  let t = null, a = 1 / 0;
  return e.forEach((r) => {
    const o = rs(r.deliveries), i = o.prices.purchase_rush_surcharge;
    i < a && (a = i, t = o);
  }), t;
}
function qv(e, t) {
  const a = os(e);
  let r = 0;
  return e.map((o, i) => {
    let n;
    const l = rs(o.deliveries);
    return i === 0 && (n = { text: $t("fastest"), color: "red" }), a && l.shipping_method_api_code === a.shipping_method_api_code && r === 0 && (n || (n = { text: $t("cheapest"), color: "green" }), r += 1), {
      date: Dv(o.delivery_date, t),
      day: Lv(o.delivery_date, t),
      cost: l.prices.purchase_rush_surcharge,
      label: n
    };
  });
}
function Hv(e, t) {
  const r = e[0][`products_${t}`].toString(), o = os(e), i = o.prices.purchase_shipping_price, n = o.prices.purchase_packaging_price;
  return {
    price: r,
    shipping: i,
    packaging: n,
    fullPrice: {
      price: e[0],
      shipping: o
    }
  };
}
function is(e) {
  return e.includes("Can not find unique id for option") ? $t("errors.invalid_or_duplicate") : e.includes("Restrictions are not met") ? $t("errors.restrictions_not_met") : e === "Validation Failed" ? $t("errors.invalid") : e.includes("Can not build valid path for tree") ? $t("errors.invalidConfig") : $t("errors.general");
}
class Kv {
  constructor({ proxy: t, version: a }) {
    this.initialized = !1, this.proxy = t, this.version = a || "", this.repository = new es({ proxy: t }), this.product = new sn({}), this.productInfo = {}, this.productConfig = new dn({}), this.address = new cn({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null, this.hideDeliverySection = !1, this.timeOut = null, this.isEditor = !1, this.hasMeasurementOverwrites = null;
  }
  /**
   * Set the code of the product and get the first step for the product.
   *
   * @param {string} code - The code of the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  async setProduct(t, a = !1) {
    return this.product.code = t, a && (this.loading = !0, this.productInfo = await this.repository.getProduct(t), this.loading = !1), this.productConfig.products = [this.product], this.deliveryOptions = [], this.hasMeasurementOverwrites = this.overwrites?.find((r) => this.product.code === r.code)?.overwrites?.steps?.find((r) => r.code === "measurement-amount")?.overwrites?.options?.some(
      (r) => (r.code === "width" || r.code === "height") && ho(r.overwrites?.value)
    ), this;
  }
  /**
   * Sets the price type of the product.
   *
   * @param {string} type - the type of price to be set, either purchase_price, sales_price or base_price
   * @param {boolean} includeVat - whether to include vat in the price
   */
  setPriceType(t, a = !1) {
    return this.priceType = a ? `${t}_incl_vat` : t, this;
  }
  /**
   * Sets the options for the product.
   *
   * @param {Product} product - The product with options to set for the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  setOption(t) {
    let a = !1;
    this.lastChangedIndex = -1, t.options.forEach((s, d) => {
      Array.isArray(s) && s.length === 0 && (this.lastChangedIndex = d, a = !0);
    });
    const r = t.options.flat().map((s) => ({
      ...s,
      value: typeof s.value == "number" && !Number.isInteger(s.value) ? s.value.toFixed(1) : s.value
    }));
    if (r.length > 0 && !a) {
      if ((r.length === this.product.options.length && r.every(
        (d, c) => d.code === this.product.options[c]?.code && d.value === this.product.options[c]?.value
      ) && this.options.length > 0 || r.find((d) => d.code === "amount")?.value === this.product.options.find((d) => d.code === "amount")?.value) && r.length === 1)
        return this.optionsChanged = !1, this;
      for (let d = this.product.options.length - 1; d >= 0; d -= 1)
        if (this.product.options[d] && r[d] && (this.product.options[d].value && this.product.options[d].value !== r[d].value || this.product.options[d].code && this.product.options[d].code !== r[d].code)) {
          this.product.options[d].code === "width" ? this.lastChangedIndex = d + 2 : this.product.options[d].code === "height" ? this.lastChangedIndex = d + 1 : this.lastChangedIndex = d;
          break;
        }
      this.optionsChanged = !0;
    }
    const i = this.product.options[this.lastChangedIndex]?.code === "amount" && this.hasMeasurementOverwrites ? this.lastChangedIndex - 2 : this.lastChangedIndex;
    if (this.product.options = as(r, i), this.product.options.some((s) => s.code === "no-option")) {
      this.setStatuses(!0), this.setOpenState(!0);
      const s = new Event(
        this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished"
      );
      window.dispatchEvent(s);
    }
    function n(s) {
      const d = s[s.length - 1];
      return (d?.code === "height" || d.code === "amount") && s.length >= 2 ? s : d;
    }
    const l = n(this.product.options);
    if (l && (Array.isArray(l) ? l.length > 0 : Object.keys(l).length > 0)) {
      const s = new CustomEvent(
        this.isEditor ? "connectConfiguratorEditor:option-selected" : "connectConfigurator:option-selected",
        {
          detail: JSON.parse(JSON.stringify(l))
        }
      );
      window.dispatchEvent(s);
    }
    return this;
  }
  /**
   * Asynchronously retrieves the next option.
   * @async
   * @return {Promise<void>} - Resolves when the next option has been retrieved.
   */
  async getNextOption() {
    if (this.optionsChanged === !1) {
      this.optionsChanged = void 0;
      return;
    }
    if (Fv(this.options, this.product.options)) {
      if (this.loading = !0, this.productConfig.language || (this.productConfig.language = this.language), this.hasMeasurementOverwrites) {
        const r = this.overwrites?.find((o) => o.code === this.product.code)?.overwrites?.steps?.find((o) => o.code === "measurement-amount")?.overwrites?.options?.filter((o) => ho(o.overwrites?.value));
        r?.length && this.product.options.some(
          (i) => ["width", "height", "amount"].includes(i.code)
        ) && r.forEach((i) => {
          this.product.options.some((l) => l.code === i.code) || this.product.options.push({ code: i.code, value: i.overwrites.value });
        });
      }
      let t = {};
      try {
        this.payload = await this.repository.configureProduct(this.productConfig);
      } catch (a) {
        this.payload = a;
      }
      if (this.payload.status !== "ok" || typeof this.payload == "string")
        throw this.options[this.options.length - 1].status = "attention", this.options[this.options.length - 1].alert = {
          type: "error",
          title: is(this.payload.message ? this.payload.message : this.payload)
        }, this.loading = !1, new Error(this.payload.message || this.payload);
      if ([t] = this.payload.products, typeof t == "object" && t) {
        this.alert = {}, this.options[this.options.length - 1]?.alert && delete this.options[this.options.length - 1].alert;
        const a = t.available_options, r = this.overwrites?.find((o) => o.code === this.product.code)?.overwrites?.steps;
        if (this.options = Uv(
          this.options,
          a,
          this.lastChangedIndex,
          this.priceType,
          r,
          this.hasMeasurementOverwrites,
          this.isEditor
        ), this.overwrites.length > 0 && r && this.options.forEach((o) => {
          r.forEach(async (i) => {
            const n = this.product.options.some((d) => d.code === i.overwrites.selected) === !1 && ho(i.overwrites?.selected), l = i.overwrites?.options?.filter((d) => d.overwrites?.value) || [];
            this.product.options.forEach((d) => {
              const c = l.findIndex((u) => u.code === d.code);
              c !== -1 && l.splice(c, 1);
            });
            const s = this.getConfig();
            o.code === i.code && (n || l.length) && (n ? (i.overwrites.value ? s.options.push({
              code: i.overwrites.selected,
              value: i.overwrites.value
            }) : s.options.push({ code: i.overwrites.selected }), await (await this.setOption(s)).getNextOption()) : l.length && (this.options.splice(0, 1), l.forEach((d) => {
              s.options.push({
                code: d.code,
                value: d.overwrites.value
              });
            }), await (await this.setOption(s)).getNextOption()));
          });
        }), this.setOpenState(), this.setStatuses(), t.can_order) {
          this.canOrder = !0, this.payload.calculation_id && (this.calculationId = this.payload.calculation_id), t.upload === !0 && (this.upload = !0, this.uploaders = t.uploaders);
          const o = new Event(
            this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished"
          );
          window.dispatchEvent(o);
        } else t.can_order === !1 && this.canOrder && (this.canOrder = !1);
        if (t.can_order && this.product.options.length >= this.options.length && Object.keys(this.address).length && this.address.city) {
          const o = await this.getProductPrice();
          this.prices = Hv(o, this.priceType), this.deliveryOptions = qv(o, this.language), this.setOpenState();
        } else t.can_order && !this.address.city && !this.options.find((o) => o.code === "accessories") && this.setOpenState(!0);
      }
      this.loading = !1;
    }
  }
  /**
   * Set the open state of the component to open if the next option is an option step.
   */
  setOpenState(t = !1) {
    this.openState = [], t ? this.options.forEach(() => {
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
    const t = new Vv({ address: this.address, products: this.productConfig.products });
    this.loading = !0;
    const a = await this.repository.getPrice(t.getPayload());
    return this.calculationId = a.calculation_id, this.loading = !1, a.prices;
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
  setAddress(t) {
    return this.address = new cn(t), this;
  }
  /**
   * Set the language for the client.
   *
   * @param {string} language - the language to be set
   */
  setLanguage(t) {
    return this.language = t, Bv(t), Lc(t), this;
  }
  /**
   * Set the statuses of the options.
   *
   * @param {type} option - the option to set the status for
   * @param {type} index - the index of the option in the options array
   */
  setStatuses(t) {
    const a = this.options.find((o) => o.code === "measurement-amount");
    let r = a && a.options && a.options.filter(
      (o) => o.code === "height" || o.code === "width" || o.code === "amount"
    ).length - 1 || 0;
    this.hasMeasurementOverwrites && (r += 2), t ? this.options.forEach((o) => {
      o.status = "done";
    }) : this.options.forEach((o, i) => {
      this.product.options.length - r > i && (o.status = "done");
    });
  }
  /**
   * Retrieves the configuration of the product mapped for the configurator. (internal use)
   *
   * @return {Object} The configuration of the product.
   */
  getConfig() {
    const t = { ...this.product };
    if (t.options.length > 0) {
      const a = t.options.find((l) => l.code === "height"), r = t.options.find((l) => l.code === "width"), o = t.options.find((l) => l.code === "amount"), i = [...t.options];
      a && r && o ? i.splice(0, 3, [r, a, o]) : a && o ? i.splice(0, 2, [a, o]) : r && o && i.splice(0, 2, [r, o]);
      const n = this.options.find((l) => l.code === "accessories");
      if (n) {
        const l = n.options;
        if (l) {
          const s = [];
          let d = null;
          i.forEach((c, u) => {
            c.code && l.some((p) => p.code === c.code) && (d || (d = u), s.push(c));
          }), s.length > 1 && i.splice(d, s.length, s);
        }
      }
      t.options = i;
    }
    return t;
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
    return this.product = new sn({}), this.productConfig = new dn({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this.productInfo = {}, this;
  }
  /** Set overwrites for certain products, can only be called on init. */
  setOverwrites(t) {
    return this.options.length === 0 ? this.overwrites = t : console.error("Overwrites can only be set on init"), this;
  }
}
class Wv extends Kv {
  constructor({ proxy: t }) {
    super({ proxy: t }), this.products = [], this.searchBar = null, this.configuratorModal = null, this.selectedProduct = {}, this.updateExternal = !0, this.storeProductsLocally = !1, this.callbackUrl = null, this.buttonStartText = null;
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
   * @param {boolean} hideDeliverySection - whether to hide the delivery section in the configurator
   *
   * @example
   * window.connectConfigurator.init({ proxy: '/api', language: 'nl', address: {}, priceType: 'purchase_price' })
   */
  init({
    proxy: t = "/api",
    language: a = "nl",
    address: r,
    priceType: o,
    includeVat: i = !1,
    overwrites: n = [],
    storeProductsLocally: l = !1,
    callbackUrl: s,
    internalProductId: d,
    hideDeliverySection: c,
    buttonStartText: u
  }) {
    this.initialized = !0, this.proxy = t, this.repository = new es({ proxy: t, productId: d }), this.setLanguage(a), this.callbackUrl = s, r && this.setAddress(r), o && this.setPriceType(o, i), n.length && this.setOverwrites(n), l && (this.storeProductsLocally = l), c && (this.hideDeliverySection = c), u && (this.buttonStartText = u);
    const p = new CustomEvent(this.isEditor ? "connectConfiguratorEditor:ready" : "connectConfigurator:ready", {
      detail: this
    });
    return window.dispatchEvent(p), this;
  }
  /** Get all products from endpoint */
  async getProducts() {
    const t = await this.repository.getProducts(this.storeProductsLocally, this.internalProductId);
    this.overwrites.length ? this.products = t.filter((a) => !this.overwrites.some((r) => r.code === a.code && r.overwrites?.hide)) : this.products = t;
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
  storeConfiguration(t, a = null) {
    const r = a || this.productConfig.products[0];
    r.customer_code = t;
    try {
      this.repository.storeConfiguration(r);
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
  updateConfiguration(t, a = null) {
    const r = a || this.productConfig.products[0];
    r.customer_code = t;
    try {
      this.repository.updateConfiguration(r);
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
    this.prices.fullPrice?.deliveries && delete this.prices.fullPrice.deliveries, this.prices.fullPrice?.products && delete this.prices.fullPrice.products;
    const t = this.product.options.find((i) => i.code === "amount").value, a = this.selectedProduct && this.selectedProduct.translations && this.selectedProduct.translations[this.language] ? this.selectedProduct.translations[this.language]?.title : this.selectedProduct.translations?.nl.title || this.product.code, r = this.product.options.find((i) => i.code === "width")?.value, o = this.product.options.find((i) => i.code === "height")?.value;
    return {
      product: {
        description: `${t}x ${a} ${r}x${o}`,
        description_options: this.product.options.map((i) => i.value ? `${i.code}: ${i.value}` : `${i.code}`).join(", ")
      },
      ...JSON.parse(this.prices?.fullPrice ? JSON.stringify(this.prices.fullPrice) : null)
    };
  }
  /**
   * Opens the configurator modal.
   */
  openConfigurator() {
    return this.configuratorModal?.showModal(), this;
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
  async setFromPayload(t) {
    if (this.updateExternal = !1, !t) {
      console.error("No payload provided");
      return;
    }
    const a = t.products[0], { options: r, code: o } = a, i = this;
    await this.setProduct(o, !0), t.deliveries && Object.keys(t.deliveries[0]?.address).length && this.setAddress(t.deliveries[0]?.address), this.openConfigurator();
    async function n(l) {
      if (!(l >= r.length + 1)) {
        try {
          await i.setOption(i.product).getNextOption();
        } catch (s) {
          i.options[i.options.length - 1].alert || (i.alert = {
            type: "error",
            title: is(s.message ? s.message : s)
          }), i.loading = !1, i.updateExternal = !0;
          return;
        }
        if (r[l]) {
          let s = l + 1;
          r[l].code === "width" ? (i.product.options.push(r[l], r[l + 1], r[l + 2]), s = l + 3) : ["width", "height"].includes(r[l].code) || i.product.options.push(r[l]), await n(s);
        } else
          i.updateExternal = !0;
      }
    }
    r ? await n(0) : console.error("No options found in payload");
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
  async getUploaderSession(t = null) {
    const a = t || this.callbackUrl;
    if (!this.canOrder || !this.calculationId)
      throw new Error("Can not fetch uploader session, no calculation id found");
    try {
      return await this.repository.getUploaderSession({
        callback_url: a,
        calculation_id: this.calculationId
      });
    } catch (r) {
      return console.error(r), r;
    }
  }
  getOverwrites() {
    return this.overwrites;
  }
}
const Zv = `*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:--theme(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:--theme(--default-font-feature-settings,normal);font-variation-settings:--theme(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:--theme(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:--theme(--default-mono-font-feature-settings,normal);font-variation-settings:--theme(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}:root,:host{--font-sans: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--animate-progress: progress 1s infinite linear;--transform-origin-left-right: 0% 50%;--color-primary-light: #3b82f6;--color-primary-mid: #2f6fe8;--color-primary: #2563eb;--color-primary-hover: #1d4ed8;--color-primary-pressed: #1e40af;--color-secondary: #ffffff;--color-secondary-hover: #fafafa;--color-secondary-pressed: #e5e5e5;--color-tertiary: #eff6ff;--color-tertiary-hover: #dbeafe;--color-tertiary-pressed: #bfdbfe;--color-error-primary: #7b2122;--color-error-secondary: #d52d2f;--color-error-tertiary: #e73c3e;--color-error-accent: #fef2f2;--color-warning-primary: #7c2d12;--color-warning-secondary: #c2410c;--color-warning-tertiary: #f97316;--color-warning-accent: #fff7ed;--color-info-primary: #1e3a8a;--color-info-secondary: #1d4ed8;--color-info-tertiary: #3b82f6;--color-info-accent: #eff6ff;--color-success-primary: #14532d;--color-success-secondary: #15803d;--color-success-tertiary: #22c55e;--color-success-accent: #f0fdf4;--color-border-primary: #d1d5db;--color-border-primary-hover: #9ca3af;--color-disabled-light: #f9fafb;--color-disabled: #f3f4f6;--color-disabled-text: #9ca3af;--color-table-row-border-color: #e5e5e5;--color-input-bg: #ffffff;--color-input-border: #d1d5db;--color-input-disabled-border: #d1d5db;--color-input-inline: #111827;--color-body-text: #111827;--color-body: #ffffff;--color-parent-bg: #ffffff;--color-child: #ffffff;--color-child-alt: #ffffff;--color-gray-450: #848b98;--color-red-50: oklch(97.1% .013 17.38);--color-red-100: oklch(93.6% .032 17.717);--color-red-200: oklch(88.5% .062 18.334);--color-red-300: oklch(80.8% .114 19.571);--color-red-400: oklch(70.4% .191 22.216);--color-red-500: oklch(63.7% .237 25.331);--color-red-600: oklch(57.7% .245 27.325);--color-red-700: oklch(50.5% .213 27.518);--color-red-800: oklch(44.4% .177 26.899);--color-red-900: oklch(39.6% .141 25.723);--color-red-950: oklch(25.8% .092 26.042);--color-orange-50: oklch(98% .016 73.684);--color-orange-100: oklch(95.4% .038 75.164);--color-orange-200: oklch(90.1% .076 70.697);--color-orange-300: oklch(83.7% .128 66.29);--color-orange-400: oklch(75% .183 55.934);--color-orange-500: oklch(70.5% .213 47.604);--color-orange-600: oklch(64.6% .222 41.116);--color-orange-700: oklch(55.3% .195 38.402);--color-orange-800: oklch(47% .157 37.304);--color-orange-900: oklch(40.8% .123 38.172);--color-orange-950: oklch(26.6% .079 36.259);--color-amber-50: oklch(98.7% .022 95.277);--color-amber-100: oklch(96.2% .059 95.617);--color-amber-200: oklch(92.4% .12 95.746);--color-amber-300: oklch(87.9% .169 91.605);--color-amber-400: oklch(82.8% .189 84.429);--color-amber-500: oklch(76.9% .188 70.08);--color-amber-600: oklch(66.6% .179 58.318);--color-amber-700: oklch(55.5% .163 48.998);--color-amber-800: oklch(47.3% .137 46.201);--color-amber-900: oklch(41.4% .112 45.904);--color-amber-950: oklch(27.9% .077 45.635);--color-yellow-50: oklch(98.7% .026 102.212);--color-yellow-100: oklch(97.3% .071 103.193);--color-yellow-200: oklch(94.5% .129 101.54);--color-yellow-300: oklch(90.5% .182 98.111);--color-yellow-400: oklch(85.2% .199 91.936);--color-yellow-500: oklch(79.5% .184 86.047);--color-yellow-600: oklch(68.1% .162 75.834);--color-yellow-700: oklch(55.4% .135 66.442);--color-yellow-800: oklch(47.6% .114 61.907);--color-yellow-900: oklch(42.1% .095 57.708);--color-yellow-950: oklch(28.6% .066 53.813);--color-lime-50: oklch(98.6% .031 120.757);--color-lime-100: oklch(96.7% .067 122.328);--color-lime-200: oklch(93.8% .127 124.321);--color-lime-300: oklch(89.7% .196 126.665);--color-lime-400: oklch(84.1% .238 128.85);--color-lime-500: oklch(76.8% .233 130.85);--color-lime-600: oklch(64.8% .2 131.684);--color-lime-700: oklch(53.2% .157 131.589);--color-lime-800: oklch(45.3% .124 130.933);--color-lime-900: oklch(40.5% .101 131.063);--color-lime-950: oklch(27.4% .072 132.109);--color-green-50: oklch(98.2% .018 155.826);--color-green-100: oklch(96.2% .044 156.743);--color-green-200: oklch(92.5% .084 155.995);--color-green-300: oklch(87.1% .15 154.449);--color-green-400: oklch(79.2% .209 151.711);--color-green-500: oklch(72.3% .219 149.579);--color-green-600: oklch(62.7% .194 149.214);--color-green-700: oklch(52.7% .154 150.069);--color-green-800: oklch(44.8% .119 151.328);--color-green-900: oklch(39.3% .095 152.535);--color-green-950: oklch(26.6% .065 152.934);--color-emerald-50: oklch(97.9% .021 166.113);--color-emerald-100: oklch(95% .052 163.051);--color-emerald-200: oklch(90.5% .093 164.15);--color-emerald-300: oklch(84.5% .143 164.978);--color-emerald-400: oklch(76.5% .177 163.223);--color-emerald-500: oklch(69.6% .17 162.48);--color-emerald-600: oklch(59.6% .145 163.225);--color-emerald-700: oklch(50.8% .118 165.612);--color-emerald-800: oklch(43.2% .095 166.913);--color-emerald-900: oklch(37.8% .077 168.94);--color-emerald-950: oklch(26.2% .051 172.552);--color-teal-50: oklch(98.4% .014 180.72);--color-teal-100: oklch(95.3% .051 180.801);--color-teal-200: oklch(91% .096 180.426);--color-teal-300: oklch(85.5% .138 181.071);--color-teal-400: oklch(77.7% .152 181.912);--color-teal-500: oklch(70.4% .14 182.503);--color-teal-600: oklch(60% .118 184.704);--color-teal-700: oklch(51.1% .096 186.391);--color-teal-800: oklch(43.7% .078 188.216);--color-teal-900: oklch(38.6% .063 188.416);--color-teal-950: oklch(27.7% .046 192.524);--color-cyan-50: oklch(98.4% .019 200.873);--color-cyan-100: oklch(95.6% .045 203.388);--color-cyan-200: oklch(91.7% .08 205.041);--color-cyan-300: oklch(86.5% .127 207.078);--color-cyan-400: oklch(78.9% .154 211.53);--color-cyan-500: oklch(71.5% .143 215.221);--color-cyan-600: oklch(60.9% .126 221.723);--color-cyan-700: oklch(52% .105 223.128);--color-cyan-800: oklch(45% .085 224.283);--color-cyan-900: oklch(39.8% .07 227.392);--color-cyan-950: oklch(30.2% .056 229.695);--color-sky-50: oklch(97.7% .013 236.62);--color-sky-100: oklch(95.1% .026 236.824);--color-sky-200: oklch(90.1% .058 230.902);--color-sky-300: oklch(82.8% .111 230.318);--color-sky-400: oklch(74.6% .16 232.661);--color-sky-500: oklch(68.5% .169 237.323);--color-sky-600: oklch(58.8% .158 241.966);--color-sky-700: oklch(50% .134 242.749);--color-sky-800: oklch(44.3% .11 240.79);--color-sky-900: oklch(39.1% .09 240.876);--color-sky-950: oklch(29.3% .066 243.157);--color-blue-50: oklch(97% .014 254.604);--color-blue-100: oklch(93.2% .032 255.585);--color-blue-200: oklch(88.2% .059 254.128);--color-blue-300: oklch(80.9% .105 251.813);--color-blue-400: oklch(70.7% .165 254.624);--color-blue-500: oklch(62.3% .214 259.815);--color-blue-600: oklch(54.6% .245 262.881);--color-blue-700: oklch(48.8% .243 264.376);--color-blue-800: oklch(42.4% .199 265.638);--color-blue-900: oklch(37.9% .146 265.522);--color-blue-950: oklch(28.2% .091 267.935);--color-indigo-50: oklch(96.2% .018 272.314);--color-indigo-100: oklch(93% .034 272.788);--color-indigo-200: oklch(87% .065 274.039);--color-indigo-300: oklch(78.5% .115 274.713);--color-indigo-400: oklch(67.3% .182 276.935);--color-indigo-500: oklch(58.5% .233 277.117);--color-indigo-600: oklch(51.1% .262 276.966);--color-indigo-700: oklch(45.7% .24 277.023);--color-indigo-800: oklch(39.8% .195 277.366);--color-indigo-900: oklch(35.9% .144 278.697);--color-indigo-950: oklch(25.7% .09 281.288);--color-violet-50: oklch(96.9% .016 293.756);--color-violet-100: oklch(94.3% .029 294.588);--color-violet-200: oklch(89.4% .057 293.283);--color-violet-300: oklch(81.1% .111 293.571);--color-violet-400: oklch(70.2% .183 293.541);--color-violet-500: oklch(60.6% .25 292.717);--color-violet-600: oklch(54.1% .281 293.009);--color-violet-700: oklch(49.1% .27 292.581);--color-violet-800: oklch(43.2% .232 292.759);--color-violet-900: oklch(38% .189 293.745);--color-violet-950: oklch(28.3% .141 291.089);--color-purple-50: oklch(97.7% .014 308.299);--color-purple-100: oklch(94.6% .033 307.174);--color-purple-200: oklch(90.2% .063 306.703);--color-purple-300: oklch(82.7% .119 306.383);--color-purple-400: oklch(71.4% .203 305.504);--color-purple-500: oklch(62.7% .265 303.9);--color-purple-600: oklch(55.8% .288 302.321);--color-purple-700: oklch(49.6% .265 301.924);--color-purple-800: oklch(43.8% .218 303.724);--color-purple-900: oklch(38.1% .176 304.987);--color-purple-950: oklch(29.1% .149 302.717);--color-fuchsia-50: oklch(97.7% .017 320.058);--color-fuchsia-100: oklch(95.2% .037 318.852);--color-fuchsia-200: oklch(90.3% .076 319.62);--color-fuchsia-300: oklch(83.3% .145 321.434);--color-fuchsia-400: oklch(74% .238 322.16);--color-fuchsia-500: oklch(66.7% .295 322.15);--color-fuchsia-600: oklch(59.1% .293 322.896);--color-fuchsia-700: oklch(51.8% .253 323.949);--color-fuchsia-800: oklch(45.2% .211 324.591);--color-fuchsia-900: oklch(40.1% .17 325.612);--color-fuchsia-950: oklch(29.3% .136 325.661);--color-pink-50: oklch(97.1% .014 343.198);--color-pink-100: oklch(94.8% .028 342.258);--color-pink-200: oklch(89.9% .061 343.231);--color-pink-300: oklch(82.3% .12 346.018);--color-pink-400: oklch(71.8% .202 349.761);--color-pink-500: oklch(65.6% .241 354.308);--color-pink-600: oklch(59.2% .249 .584);--color-pink-700: oklch(52.5% .223 3.958);--color-pink-800: oklch(45.9% .187 3.815);--color-pink-900: oklch(40.8% .153 2.432);--color-pink-950: oklch(28.4% .109 3.907);--color-rose-50: oklch(96.9% .015 12.422);--color-rose-100: oklch(94.1% .03 12.58);--color-rose-200: oklch(89.2% .058 10.001);--color-rose-300: oklch(81% .117 11.638);--color-rose-400: oklch(71.2% .194 13.428);--color-rose-500: oklch(64.5% .246 16.439);--color-rose-600: oklch(58.6% .253 17.585);--color-rose-700: oklch(51.4% .222 16.935);--color-rose-800: oklch(45.5% .188 13.697);--color-rose-900: oklch(41% .159 10.272);--color-rose-950: oklch(27.1% .105 12.094);--color-slate-50: oklch(98.4% .003 247.858);--color-slate-100: oklch(96.8% .007 247.896);--color-slate-200: oklch(92.9% .013 255.508);--color-slate-300: oklch(86.9% .022 252.894);--color-slate-400: oklch(70.4% .04 256.788);--color-slate-500: oklch(55.4% .046 257.417);--color-slate-600: oklch(44.6% .043 257.281);--color-slate-700: oklch(37.2% .044 257.287);--color-slate-800: oklch(27.9% .041 260.031);--color-slate-900: oklch(20.8% .042 265.755);--color-slate-950: oklch(12.9% .042 264.695);--color-gray-50: oklch(98.5% .002 247.839);--color-gray-100: oklch(96.7% .003 264.542);--color-gray-200: oklch(92.8% .006 264.531);--color-gray-300: oklch(87.2% .01 258.338);--color-gray-400: oklch(70.7% .022 261.325);--color-gray-500: oklch(55.1% .027 264.364);--color-gray-600: oklch(44.6% .03 256.802);--color-gray-700: oklch(37.3% .034 259.733);--color-gray-800: oklch(27.8% .033 256.848);--color-gray-900: oklch(21% .034 264.665);--color-gray-950: oklch(13% .028 261.692);--color-zinc-50: oklch(98.5% 0 0);--color-zinc-100: oklch(96.7% .001 286.375);--color-zinc-200: oklch(92% .004 286.32);--color-zinc-300: oklch(87.1% .006 286.286);--color-zinc-400: oklch(70.5% .015 286.067);--color-zinc-500: oklch(55.2% .016 285.938);--color-zinc-600: oklch(44.2% .017 285.786);--color-zinc-700: oklch(37% .013 285.805);--color-zinc-800: oklch(27.4% .006 286.033);--color-zinc-900: oklch(21% .006 285.885);--color-zinc-950: oklch(14.1% .005 285.823);--color-neutral-50: oklch(98.5% 0 0);--color-neutral-100: oklch(97% 0 0);--color-neutral-200: oklch(92.2% 0 0);--color-neutral-300: oklch(87% 0 0);--color-neutral-400: oklch(70.8% 0 0);--color-neutral-500: oklch(55.6% 0 0);--color-neutral-600: oklch(43.9% 0 0);--color-neutral-700: oklch(37.1% 0 0);--color-neutral-800: oklch(26.9% 0 0);--color-neutral-900: oklch(20.5% 0 0);--color-neutral-950: oklch(14.5% 0 0);--color-stone-50: oklch(98.5% .001 106.423);--color-stone-100: oklch(97% .001 106.424);--color-stone-200: oklch(92.3% .003 48.717);--color-stone-300: oklch(86.9% .005 56.366);--color-stone-400: oklch(70.9% .01 56.259);--color-stone-500: oklch(55.3% .013 58.071);--color-stone-600: oklch(44.4% .011 73.639);--color-stone-700: oklch(37.4% .01 67.558);--color-stone-800: oklch(26.8% .007 34.298);--color-stone-900: oklch(21.6% .006 56.043);--color-stone-950: oklch(14.7% .004 49.25);--color-black: #000;--color-white: #fff;--spacing: .25rem;--breakpoint-sm: 40rem;--breakpoint-md: 48rem;--breakpoint-lg: 64rem;--breakpoint-xl: 80rem;--breakpoint-2xl: 96rem;--container-3xs: 16rem;--container-2xs: 18rem;--container-xs: 20rem;--container-sm: 24rem;--container-md: 28rem;--container-lg: 32rem;--container-xl: 36rem;--container-2xl: 42rem;--container-3xl: 48rem;--container-4xl: 56rem;--container-5xl: 64rem;--container-6xl: 72rem;--container-7xl: 80rem;--text-xs: .75rem;--text-xs--line-height: calc(1 / .75);--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-3xl: 1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--text-6xl: 3.75rem;--text-6xl--line-height: 1;--text-7xl: 4.5rem;--text-7xl--line-height: 1;--text-8xl: 6rem;--text-8xl--line-height: 1;--text-9xl: 8rem;--text-9xl--line-height: 1;--font-weight-thin: 100;--font-weight-extralight: 200;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--font-weight-black: 900;--tracking-tighter: -.05em;--tracking-tight: -.025em;--tracking-normal: 0em;--tracking-wide: .025em;--tracking-wider: .05em;--tracking-widest: .1em;--leading-tight: 1.25;--leading-snug: 1.375;--leading-normal: 1.5;--leading-relaxed: 1.625;--leading-loose: 2;--radius-xs: .125rem;--radius-sm: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-4xl: 2rem;--shadow-2xs: 0 1px rgb(0 0 0 / .05);--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--inset-shadow-2xs: inset 0 1px rgb(0 0 0 / .05);--inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / .05);--inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / .05);--drop-shadow-xs: 0 1px 1px rgb(0 0 0 / .05);--drop-shadow-sm: 0 1px 2px rgb(0 0 0 / .15);--drop-shadow-md: 0 3px 3px rgb(0 0 0 / .12);--drop-shadow-lg: 0 4px 4px rgb(0 0 0 / .15);--drop-shadow-xl: 0 9px 7px rgb(0 0 0 / .1);--drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / .15);--text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / .15);--text-shadow-xs: 0px 1px 1px rgb(0 0 0 / .2);--text-shadow-sm: 0px 1px 0px rgb(0 0 0 / .075), 0px 1px 1px rgb(0 0 0 / .075), 0px 2px 2px rgb(0 0 0 / .075);--text-shadow-md: 0px 1px 1px rgb(0 0 0 / .1), 0px 1px 2px rgb(0 0 0 / .1), 0px 2px 4px rgb(0 0 0 / .1);--text-shadow-lg: 0px 1px 2px rgb(0 0 0 / .1), 0px 3px 2px rgb(0 0 0 / .1), 0px 4px 8px rgb(0 0 0 / .1);--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce: bounce 1s infinite;--blur-xs: 4px;--blur-sm: 8px;--blur-md: 12px;--blur-lg: 16px;--blur-xl: 24px;--blur-2xl: 40px;--blur-3xl: 64px;--perspective-dramatic: 100px;--perspective-near: 300px;--perspective-normal: 500px;--perspective-midrange: 800px;--perspective-distant: 1200px;--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)}@layer base{[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6a7282;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(55.1%25 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#155dfc;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6a7282;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media(forced-colors:active){[type=checkbox]:checked{appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media(forced-colors:active){[type=radio]:checked{appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media(forced-colors:active){[type=checkbox]:indeterminate{appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}}.mini-icon[data-v-206f9b1b]{flex-shrink:0;width:1.25rem;height:1.25rem;display:flex}.dark .mini-icon[data-v-206f9b1b]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-822ed718],[data-v-822ed718]:before,[data-v-822ed718]:after,[data-v-822ed718]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.hotkey[data-v-822ed718]{border-style:var(--tw-border-style);--tw-border-style:solid;width:fit-content;min-width:1.25rem;height:1.25rem;padding-inline:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-style:solid;border-width:1px;border-radius:.25rem;justify-content:center;align-items:center;display:flex}.hotkey.disabled[data-v-822ed718]{color:var(--color-disabled-text,#9ca3af)}.hotkey.primary-hotkey[data-v-822ed718]{color:var(--color-white,#fff);background-color:#ffffff26;border-color:#ffffff80}.hotkey.secondary-hotkey[data-v-822ed718]{color:var(--color-neutral-500,oklch(55.6% 0 0));background-color:#0a0a0a08;border-color:#0a0a0a26}.hotkey.secondary-hotkey[data-v-822ed718]:where(.dark,.dark *){color:var(--color-body-text,#111827);background-color:#ffffff26;border-color:#ffffff80}.hotkey.tertiary-hotkey[data-v-822ed718]{color:var(--color-primary-light,#3b82f6);background-color:#0062ff0f;border-color:#0062ff4d}.hotkey.tertiary-hotkey[data-v-822ed718]:where(.dark,.dark *){border-color:var(--color-primary-mid,#2f6fe8)}.loader[data-v-7d40d0e0]{animation:var(--animate-spin);border-radius:100%;height:1.5rem;width:1.5rem;border-width:.1875rem}.loader.primary-loader[data-v-7d40d0e0]{border-color:var(--color-blue-100);border-top-color:var(--color-blue-600)}.loader.secondary-loader[data-v-7d40d0e0]{border-color:color-mix(in oklab,var(--color-white) 40%,transparent);border-top-color:var(--color-white)}.loader.small-loader[data-v-7d40d0e0]{height:1.25rem;width:1.25rem}.loader.large-loader[data-v-7d40d0e0]{height:1.75rem;width:1.75rem}.button[data-v-71d76802]{height:2.5rem;border-radius:.5rem;padding:0 .75rem;font-weight:500;display:flex;justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;-webkit-user-select:none;user-select:none;color:var(--color-neutral-700);cursor:pointer}.button .default-loader[data-v-71d76802],.button .small-loader[data-v-71d76802]{height:1.3rem;width:1.3rem}.button .large-loader[data-v-71d76802]{height:1.5rem;width:1.5rem}.button[data-v-71d76802]:disabled{background-color:var(--color-disabled)!important;color:var(--color-disabled-text)!important;cursor:not-allowed}.button.primary[data-v-71d76802]{color:#fff;background-color:var(--color-primary)}.button.primary[data-v-71d76802]:not(:disabled):hover{background-color:var(--color-primary-hover)}.button.primary[data-v-71d76802]:not(:disabled):focus{background-color:var(--color-primary-pressed)}.button.secondary[data-v-71d76802]{background-color:var(--color-secondary);border:1px solid var(--color-neutral-300);color:var(--color-neutral-950)}.dark .button.secondary[data-v-71d76802]{color:var(--color-neutral-200)}.button.secondary[data-v-71d76802]:not(:disabled):hover{background-color:var(--color-secondary-hover);border-color:var(--color-border-primary-hover)}.button.secondary[data-v-71d76802]:not(:disabled):focus{background-color:var(--color-secondary-pressed)}.button.secondary[data-v-71d76802]:disabled{border-color:var(--color-disabled)}.button.tertiary[data-v-71d76802]{background-color:var(--color-tertiary);color:var(--color-primary)}.dark .button.tertiary[data-v-71d76802]{color:var(--color-primary-light)}.button.tertiary[data-v-71d76802]:not(:disabled):hover{background-color:var(--color-tertiary-hover)}.button.tertiary[data-v-71d76802]:not(:disabled):focus{background-color:var(--color-tertiary-pressed)}.dark .button.text[data-v-71d76802]{color:var(--color-body-text)}.button.text[data-v-71d76802]:not(:disabled):hover{background-color:#0f172a0a}.button.text[data-v-71d76802]:not(:disabled):focus{background-color:#0f172a14}.button.danger[data-v-71d76802]{background-color:var(--color-error-tertiary);color:#fff}.button.danger[data-v-71d76802]:not(:disabled):hover{background-color:var(--color-red-700)}.button.danger[data-v-71d76802]:not(:disabled):focus{background-color:var(--color-red-900)}.button.success[data-v-71d76802]{background-color:var(--color-success-tertiary);color:#fff}.button.success[data-v-71d76802]:not(:disabled):hover{background-color:var(--color-success-secondary)}.button.success[data-v-71d76802]:not(:disabled):focus{background-color:var(--color-success-primary)}.button.warning[data-v-71d76802]{background-color:var(--color-warning-tertiary);color:#fff}.button.warning[data-v-71d76802]:not(:disabled):hover{background-color:var(--color-warning-secondary)}.button.warning[data-v-71d76802]:not(:disabled):focus{background-color:var(--color-warning-primary)}.button.url[data-v-71d76802]{background-color:transparent;color:var(--color-primary);gap:.25rem;height:1.25rem;padding:0}.button.url[data-v-71d76802]:hover{text-decoration:underline}.button.default.has-icon[data-v-71d76802]{padding:.625rem}.button.default .mini-icon[data-v-71d76802]{height:1.25rem;width:1.25rem}.button.default[data-v-71d76802] .mini-icon svg{stroke-width:1.75}.button.small[data-v-71d76802]{height:2rem;padding:0 .75rem}.button.small.has-icon[data-v-71d76802]{border-radius:9999px;width:2rem}.button.small .mini-icon[data-v-71d76802]{height:1rem;width:1rem}.button.small[data-v-71d76802] .mini-icon svg{stroke-width:2}.button.medium[data-v-71d76802]{height:3rem;padding:0 1rem;font-size:1rem;line-height:1.5rem}.button.medium .mini-icon[data-v-71d76802]{height:1.5rem;width:1.5rem}.button.medium.has-icon[data-v-71d76802]{padding:.75rem}.button.large[data-v-71d76802]{height:3.5rem;padding:0 1.75rem;font-size:1rem;line-height:1.5rem}.button.large .mini-icon[data-v-71d76802]{height:1.5rem;width:1.5rem}.button.large.has-icon[data-v-71d76802]{padding:1.25rem}.hotkey[data-v-71d76802]{margin-left:.25rem}.image-wrapper[data-v-4654b093]{width:100%;height:100%;display:block}.dark .image-wrapper[data-v-4654b093]{opacity:.8}.image.rounded-4[data-v-4654b093],.skeleton.rounded-4[data-v-4654b093]{border-radius:.25rem}.image.rounded-8[data-v-4654b093],.skeleton.rounded-8[data-v-4654b093]{border-radius:.5rem}.image.rounded-16[data-v-4654b093],.skeleton.rounded-16[data-v-4654b093]{border-radius:1rem}.image.rounded-100[data-v-4654b093],.skeleton.rounded-100[data-v-4654b093]{border-radius:3.40282e38px}.image-wrapper .skeleton[data-v-4654b093]{background-color:var(--color-neutral-200);width:100%;height:100%;animation:var(--animate-pulse)}.dark .image-wrapper .skeleton[data-v-4654b093]{background-color:var(--color-gray-700)}:is(h1,h2,h3,h4,h5,h6)[data-v-6ad666e7]{font-weight:600}.dark :is(h1,h2,h3,h4,h5,h6)[data-v-6ad666e7]{color:var(--color-neutral-200)}h1[data-v-6ad666e7],h2[data-v-6ad666e7]{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h3[data-v-6ad666e7],h4[data-v-6ad666e7],h5[data-v-6ad666e7],h6[data-v-6ad666e7]{font-family:var(--font-sans)}h1[data-v-6ad666e7]{font-size:1.75rem;letter-spacing:-.8px;line-height:2.25rem}h2[data-v-6ad666e7]{font-size:1.25rem;letter-spacing:-.2px;line-height:1.75rem}h3[data-v-6ad666e7]{font-size:1rem;line-height:1.5rem}h4[data-v-6ad666e7]{font-size:.875rem;line-height:1.25rem}h5[data-v-6ad666e7]{font-size:.875rem;line-height:1.25rem;font-weight:500}h6[data-v-6ad666e7]{font-size:.75rem;line-height:1rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3a85ac16],[data-v-3a85ac16]:before,[data-v-3a85ac16]:after,[data-v-3a85ac16]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid}}}[data-v-3a85ac16] .image-wrapper{height:10.25rem}[data-v-3a85ac16] .image-wrapper .image{object-fit:cover;width:100%;height:100%}[data-v-3a85ac16] .image-wrapper.dense{height:unset;flex-shrink:0;width:auto}[data-v-3a85ac16] .image-wrapper.disabled{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card[data-v-3a85ac16]{cursor:pointer;border-radius:var(--radius-xl,.75rem);background-color:var(--color-child-alt,#fff);flex-direction:column;width:17.625rem;display:flex;overflow:auto}.card[data-v-3a85ac16]:not(.passive):hover,.card[data-v-3a85ac16]:not(.passive):focus{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card[data-v-3a85ac16]:not(.flat){border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.card[data-v-3a85ac16]:not(.flat):where(.dark,.dark *){--tw-border-style:none;border-style:none}.card.passive[data-v-3a85ac16]{cursor:default}.card.disabled[data-v-3a85ac16]{cursor:default;border-color:var(--color-gray-300,oklch(87.2% .01 258.338));background-color:var(--color-disabled,#f3f4f6)}@media(hover:hover){.card.disabled[data-v-3a85ac16]:hover{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.card.disabled .content[data-v-3a85ac16]{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card.dense[data-v-3a85ac16]{flex-direction:row;justify-content:flex-start;width:100%}.card.dense .inner[data-v-3a85ac16]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1)}.card.flat[data-v-3a85ac16]:hover{background-color:var(--color-secondary-hover,#fafafa);--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card .inner[data-v-3a85ac16]{width:100%;padding:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}.card .inner .header[data-v-3a85ac16]{width:100%;padding-bottom:calc(var(--spacing,.25rem)*2);border-top-left-radius:.25rem;border-top-right-radius:.25rem;flex-direction:column;display:flex;position:relative}.card .inner .header .title[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.card .inner .header .subtitle[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.card .inner .header .subtitle[data-v-3a85ac16]:where(.dark,.dark *){color:var(--color-gray-100,oklch(96.7% .003 264.542))}.card .inner .content[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.card .inner .footer[data-v-3a85ac16]{padding-top:calc(var(--spacing,.25rem)*4)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-b1beee2f],[data-v-b1beee2f]:before,[data-v-b1beee2f]:after,[data-v-b1beee2f]::backdrop{--tw-ease:initial}}}[data-v-b1beee2f]{will-change:height;backface-visibility:hidden;perspective:1000px;transform:translateZ(0)}.expand-enter-active[data-v-b1beee2f],.expand-leave-active[data-v-b1beee2f]{transition-property:height,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:var(--b3e76ba0);overflow:hidden}.expand-enter-from[data-v-b1beee2f],.expand-leave-to[data-v-b1beee2f]{opacity:0}.expand-enter[data-v-b1beee2f],.expand-leave-to[data-v-b1beee2f]{height:var(--v744134fd)}.card[data-v-b4f8a358]{width:100%}.card.expanded[data-v-b4f8a358]{max-height:var(--v3d1a4e5c)}.card[data-v-b4f8a358] .inner{padding:calc(var(--spacing,.25rem)*1)}.button[data-v-b4f8a358]{margin-top:calc(var(--spacing,.25rem)*1);background-color:var(--color-neutral-50,oklch(98.5% 0 0));width:100%;height:auto;padding-block:calc(var(--spacing,.25rem)*2.5);color:var(--color-primary,#2563eb)}.button[data-v-b4f8a358]:where(.dark,.dark *){background-color:var(--color-child,#fff);color:var(--color-body-text,#111827)}.button[data-v-b4f8a358]:not([disabled]):hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:#0a0a0a14}@supports (color:color-mix(in lab,red,red)){.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-950,oklch(14.5% 0 0))8%,transparent)}}.expand-enter-active[data-v-b4f8a358],.expand-leave-active[data-v-b4f8a358]{transition-property:opacity,height}.expand-enter[data-v-b4f8a358],.expand-leave-to[data-v-b4f8a358]{opacity:0}.radio-group[data-v-c2d61b3c]{pointer-events:none;gap:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.radio-group[data-v-c2d61b3c] *{pointer-events:auto}.table-wrapper[data-v-5a42bd69]{border-radius:var(--radius-lg,.5rem);width:100%;display:block;position:relative;overflow:clip}.table-wrapper table[data-v-5a42bd69]{background-color:var(--color-body,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-wrapper .sticky-container[data-v-5a42bd69]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;position:sticky}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*3);background-color:var(--color-secondary-hover,#fafafa);align-items:center;display:flex}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]:where(.dark,.dark *){background-color:#323746}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-gray-300,oklch(87.2% .01 258.338));position:absolute}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]:where(.dark,.dark *){background-color:#7882a0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5ee4dbf8],[data-v-5ee4dbf8]:before,[data-v-5ee4dbf8]:after,[data-v-5ee4dbf8]::backdrop{--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}thead[data-v-5ee4dbf8]{top:calc(var(--spacing,.25rem)*0);z-index:10;background-color:var(--color-body,#fff);position:sticky}thead[data-v-5ee4dbf8] tr td{--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0))}thead[data-v-5ee4dbf8] tr td:where(.dark,.dark *){color:var(--color-white,#fff)}thead[data-v-5ee4dbf8] tr td input{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}thead[data-v-5ee4dbf8] tr td{--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-table-row-border-color));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-94a1d3c2],[data-v-94a1d3c2]:before,[data-v-94a1d3c2]:after,[data-v-94a1d3c2]::backdrop{--tw-border-style:solid}}}tbody[data-v-94a1d3c2] tr:not(:last-child){border-bottom-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-bottom-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}td[data-v-2b59e8a9]{padding-inline:calc(var(--spacing,.25rem)*4);vertical-align:middle;color:var(--color-neutral-950,oklch(14.5% 0 0))}td[data-v-2b59e8a9]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3dad8f2b],[data-v-3dad8f2b]:before,[data-v-3dad8f2b]:after,[data-v-3dad8f2b]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.checkbox-container[data-v-3dad8f2b]{flex-direction:column;width:100%;display:flex}.checkbox-container.large .label[data-v-3dad8f2b]{gap:calc(var(--spacing,.25rem)*3)}.checkbox-container.large .checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.label[data-v-3dad8f2b]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);display:flex}.label[data-v-3dad8f2b]:not(.disabled){cursor:pointer}.checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*.5);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6);border-radius:.25rem}.checkbox[data-v-3dad8f2b]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.checkbox[data-v-3dad8f2b]:checked,.checkbox[data-v-3dad8f2b]:indeterminate{border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary-light,#3b82f6)}.checkbox[data-v-3dad8f2b]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-gray-200,oklch(92.8% .006 264.531))!important}.checkbox[data-v-3dad8f2b]:not(:disabled):checked:hover,.checkbox[data-v-3dad8f2b]:not(:disabled):indeterminate:hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}.checkbox[data-v-3dad8f2b]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-3dad8f2b]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(156, 163, 175)' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-3dad8f2b]{border-color:var(--color-error-secondary,#d52d2f);outline-color:var(--color-error-secondary,#d52d2f)}.error .error-message[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.append[data-v-3dad8f2b]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-left:auto}tr[data-v-7e2dd7b3]{height:3.5rem;max-height:calc(var(--spacing,.25rem)*12);min-height:3.5rem}.icon[data-v-eb0a670a]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.dark .icon[data-v-eb0a670a]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-36fae9dd],[data-v-36fae9dd]:before,[data-v-36fae9dd]:after,[data-v-36fae9dd]::backdrop{--tw-font-weight:initial}}}.no-results-row[data-v-36fae9dd]{height:calc(var(--spacing,.25rem)*64);position:relative}.no-results-row td[data-v-36fae9dd]{white-space:nowrap;width:100%;height:100%;position:absolute;overflow:hidden}.no-results-row td .wrapper[data-v-36fae9dd]{justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);text-wrap:wrap;flex-direction:column;display:flex}.no-results-row td .wrapper .icon[data-v-36fae9dd]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12);stroke:var(--color-neutral-500,oklch(55.6% 0 0))}.no-results-row td .wrapper h2[data-v-36fae9dd]{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.no-results-row td .wrapper span[data-v-36fae9dd]{text-align:center;color:var(--color-neutral-500,oklch(55.6% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3600666a],[data-v-3600666a]:before,[data-v-3600666a]:after,[data-v-3600666a]::backdrop{--tw-border-style:solid}}}.pagination[data-v-3600666a]{gap:calc(var(--spacing,.25rem)*2);display:flex}.pagination .button[data-v-3600666a]{position:relative}.pagination .button[data-v-3600666a]:not(:disabled){color:var(--color-primary,#2563eb)}.pagination .button[data-v-3600666a]:not(:disabled):not(.current){color:var(--color-body-text,#111827)}.pagination .button[data-v-3600666a]:not(:disabled) .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.pagination .button[data-v-3600666a]:not(:first-child):not(:last-child){width:calc(var(--spacing,.25rem)*10);display:none}@media(min-width:48rem){.pagination .button[data-v-3600666a]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-3600666a]:not(:disabled):hover{border-color:var(--color-border-primary,#d1d5db)}.pagination .button.current[data-v-3600666a]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb)}.pagination .button .button-text[data-v-3600666a]{display:none}@media(min-width:48rem){.pagination .button .button-text[data-v-3600666a]{display:block}}.pagination .dotdotdot[data-v-3600666a]{align-self:center;display:none}@media(min-width:48rem){.pagination .dotdotdot[data-v-3600666a]{display:inline-block}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1005bec5],[data-v-1005bec5]:before,[data-v-1005bec5]:after,[data-v-1005bec5]::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-content:""}}}.skeleton[data-v-1005bec5]{height:calc(var(--spacing,.25rem)*5);animation:var(--animate-pulse,pulse-1005bec5 2s cubic-bezier(.4,0,.6,1)infinite);background-color:var(--color-neutral-200,oklch(92.2% 0 0));display:block}.skeleton[data-v-1005bec5]:where(.dark,.dark *){background-color:var(--color-gray-700,oklch(37.3% .034 259.733))}.skeleton.has-content[data-v-1005bec5]{height:auto}.skeleton.circular[data-v-1005bec5]{border-radius:50%}.skeleton.text[data-v-1005bec5]{--tw-scale-y:.7;scale:var(--tw-scale-x)var(--tw-scale-y);border-radius:.25rem}.skeleton.text[data-v-1005bec5]:not(.has-content){height:auto;color:inherit}.skeleton.text[data-v-1005bec5]:not(.has-content):before{--tw-content:" ";content:var(--tw-content)}.skeleton [data-v-1005bec5-s]{visibility:hidden}@keyframes pulse-1005bec5{50%{opacity:.5}}.micro-icon[data-v-08f67949]{display:flex;height:1rem;width:1rem;flex-shrink:0}.dark .micro-icon[data-v-08f67949]{color:var(--color-body-text)}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cc8be62f],[data-v-cc8be62f]:before,[data-v-cc8be62f]:after,[data-v-cc8be62f]::backdrop{--tw-duration:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}.expand-top-enter-active[data-v-cc8be62f],.expand-bottom-enter-active[data-v-cc8be62f],.expand-left-enter-active[data-v-cc8be62f],.expand-right-enter-active[data-v-cc8be62f],.expand-top-leave-active[data-v-cc8be62f],.expand-bottom-leave-active[data-v-cc8be62f],.expand-left-leave-active[data-v-cc8be62f],.expand-right-leave-active[data-v-cc8be62f]{transform:translateZ(0)var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.15s;transition-duration:.15s}.expand-top-enter-from[data-v-cc8be62f]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-top-enter-to[data-v-cc8be62f]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-top-leave-from[data-v-cc8be62f]{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-top-leave-to[data-v-cc8be62f]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-from[data-v-cc8be62f]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-to[data-v-cc8be62f]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-bottom-leave-from[data-v-cc8be62f]{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-bottom-leave-to[data-v-cc8be62f]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-from[data-v-cc8be62f]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-to[data-v-cc8be62f]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-left-leave-from[data-v-cc8be62f]{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-left-leave-to[data-v-cc8be62f]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-from[data-v-cc8be62f]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-to[data-v-cc8be62f]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-right-leave-from[data-v-cc8be62f]{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-right-leave-to[data-v-cc8be62f]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-d5e1dc35],[data-v-d5e1dc35]:before,[data-v-d5e1dc35]:after,[data-v-d5e1dc35]::backdrop{--tw-contain-size:initial;--tw-contain-layout:initial;--tw-contain-paint:initial;--tw-contain-style:initial}}}.floating-container-overlay-container[data-v-d5e1dc35]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);--tw-contain-layout:layout;contain:var(--tw-contain-size,)var(--tw-contain-layout,)var(--tw-contain-paint,)var(--tw-contain-style,);display:contents;position:absolute}.floating-container-overlay-container .floating-container-overlay[data-v-d5e1dc35]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);display:flex;position:absolute}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-d5e1dc35]{pointer-events:auto;visibility:hidden;margin:calc(var(--spacing,.25rem)*0);width:max-content;height:max-content;padding:calc(var(--spacing,.25rem)*0);background-color:#0000;position:absolute;overflow:visible}@property --tw-contain-size{syntax:"*";inherits:false}@property --tw-contain-layout{syntax:"*";inherits:false}@property --tw-contain-paint{syntax:"*";inherits:false}@property --tw-contain-style{syntax:"*";inherits:false}.list[data-v-12959343]{flex-direction:column;display:flex}.list.grid[data-v-12959343]{flex-flow:wrap}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-93a0a846],[data-v-93a0a846]:before,[data-v-93a0a846]:after,[data-v-93a0a846]::backdrop{--tw-font-weight:initial}}}.list-item[data-v-93a0a846]{background-color:var(--color-child,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);color:var(--color-body-text,#111827);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));align-items:center;display:flex}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]){outline-offset:2px;outline:2px solid #0000}}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):hover{cursor:pointer;background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):hover:where(.dark,.dark *){background-color:var(--color-slate-800,oklch(27.9% .041 260.031))}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-93a0a846]{background-color:var(--color-gray-200,oklch(92.8% .006 264.531))}:is(.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-93a0a846]):where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-93a0a846]{background-color:var(--color-gray-300,oklch(87.2% .01 258.338))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-93a0a846]:where(.dark,.dark *){background-color:var(--color-slate-700,oklch(37.2% .044 257.287))}.list-item .prepend[data-v-93a0a846]{display:flex}.list-item .content[data-v-93a0a846]{flex-direction:column;display:flex}.list-item .content .title[data-v-93a0a846]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.list-item .content .subtitle[data-v-93a0a846]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.list-item .content .text[data-v-93a0a846]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-f6c45fb8],[data-v-f6c45fb8]:before,[data-v-f6c45fb8]:after,[data-v-f6c45fb8]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.label[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*6);width:fit-content;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:.25rem;align-items:center;padding-inline:.625rem;display:flex}.label.small[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*5);padding-inline:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.label.blue[data-v-f6c45fb8]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585));color:var(--color-blue-700,oklch(48.8% .243 264.376))}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#54a2ff1a!important}@supports (color:color-mix(in lab,red,red)){.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-blue-400,oklch(70.7% .165 254.624))10%,transparent)!important}}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))!important}.label.green[data-v-f6c45fb8]{background-color:var(--color-green-100,oklch(96.2% .044 156.743));color:var(--color-green-700,oklch(52.7% .154 150.069))}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#05df721a!important}@supports (color:color-mix(in lab,red,red)){.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-400,oklch(79.2% .209 151.711))10%,transparent)!important}}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-green-300,oklch(87.1% .15 154.449))!important}.label.gray[data-v-f6c45fb8]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542));color:var(--color-gray-700,oklch(37.3% .034 259.733))}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#a1a1a11a!important}@supports (color:color-mix(in lab,red,red)){.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-400,oklch(70.8% 0 0))10%,transparent)!important}}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))!important}.label.orange[data-v-f6c45fb8]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164));color:var(--color-orange-700,oklch(55.3% .195 38.402))}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff8b1a1a!important}@supports (color:color-mix(in lab,red,red)){.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-orange-400,oklch(75% .183 55.934))10%,transparent)!important}}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-orange-300,oklch(83.7% .128 66.29))!important}.label.purple[data-v-f6c45fb8]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174));color:var(--color-purple-700,oklch(49.6% .265 301.924))}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#c07eff1a!important}@supports (color:color-mix(in lab,red,red)){.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-purple-400,oklch(71.4% .203 305.504))10%,transparent)!important}}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-purple-300,oklch(82.7% .119 306.383))!important}.label.red[data-v-f6c45fb8]{background-color:var(--color-red-100,oklch(93.6% .032 17.717));color:var(--color-red-700,oklch(50.5% .213 27.518))}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff65681a!important}@supports (color:color-mix(in lab,red,red)){.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-red-400,oklch(70.4% .191 22.216))10%,transparent)!important}}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-red-300,oklch(80.8% .114 19.571))!important}.label.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193));color:var(--color-yellow-700,oklch(55.4% .135 66.442))}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#fac8001a!important}@supports (color:color-mix(in lab,red,red)){.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-yellow-400,oklch(85.2% .199 91.936))10%,transparent)!important}}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-yellow-300,oklch(90.5% .182 98.111))!important}.label.alt[data-v-f6c45fb8]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));border-width:1px}.label.alt.white[data-v-f6c45fb8]{border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);color:var(--color-neutral-900,oklch(20.5% 0 0))}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-white,#fff)10%,transparent)}}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}.label.alt.gray[data-v-f6c45fb8]{background-color:var(--color-neutral-100,oklch(97% 0 0));color:var(--color-neutral-900,oklch(20.5% 0 0));border-color:#3741511a}.label.alt.orange[data-v-f6c45fb8]{background-color:var(--color-orange-50,oklch(98% .016 73.684));color:var(--color-orange-900,oklch(40.8% .123 38.172));border-color:#c2730c1a}.label.alt.blue[data-v-f6c45fb8]{background-color:var(--color-blue-50,oklch(97% .014 254.604));color:var(--color-blue-900,oklch(37.9% .146 265.522));border-color:#1d65d81a}.label.alt.green[data-v-f6c45fb8]{background-color:var(--color-green-50,oklch(98.2% .018 155.826));color:var(--color-green-900,oklch(39.3% .095 152.535));border-color:#16803a1a}.label.alt.red[data-v-f6c45fb8]{background-color:var(--color-red-50,oklch(97.1% .013 17.38));color:var(--color-red-900,oklch(39.6% .141 25.723));border-color:#b32c221a}.label.alt.purple[data-v-f6c45fb8]{background-color:var(--color-purple-50,oklch(97.7% .014 308.299));color:var(--color-purple-900,oklch(38.1% .176 304.987));border-color:#7522ce1a}.label.alt.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-50,oklch(98.7% .026 102.212));color:var(--color-yellow-900,oklch(42.1% .095 57.708));border-color:#a162071a}.divider[data-v-cf022594]{border-color:var(--color-border-primary,#d1d5db);width:100%}.divider[data-v-cf022594]:not(.vertical){border-top-width:var(--v1e7beddb)}.divider.vertical[data-v-cf022594]{width:.0625rem;height:100%}.divider.vertical.flex[data-v-cf022594]{align-self:stretch;height:auto}.divider.vertical[data-v-cf022594]{border-left-width:var(--v1e7beddb)}.base-select[data-v-c35e5bc8]:focus{outline:none}.base-select.disabled .wrapper[data-v-c35e5bc8]{background-color:var(--color-disabled);border-color:var(--color-input-disabled-border);cursor:not-allowed}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-c35e5bc8]{color:var(--color-disabled-text);background-color:var(--color-disabled)}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-c35e5bc8]::placeholder{color:var(--color-disabled-text)}.base-select.click[data-v-c35e5bc8]{cursor:pointer}.base-select.click.disabled[data-v-c35e5bc8]{pointer-events:none;cursor:default}.base-select .input-label[data-v-c35e5bc8]{font-size:.875rem;line-height:1.25rem;font-weight:500;margin-bottom:.25rem;display:flex}.base-select .wrapper[data-v-c35e5bc8]{background-color:var(--color-input-bg);border:solid 1px var(--color-input-border);border-radius:.5rem;display:flex;align-items:center;width:100%;height:2.5rem;padding:.5rem 1rem .5rem .5rem}.base-select .wrapper[data-v-c35e5bc8]:hover{border-color:var(--color-border-primary-hover)}.base-select .wrapper.focus[data-v-c35e5bc8]{border-color:var(--color-primary-light);border-width:2px;padding-left:.4375rem;padding-right:.9375rem}.base-select .wrapper.has-error[data-v-c35e5bc8]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)}.base-select .wrapper .prepend-icon[data-v-c35e5bc8]{color:var(--color-primary);margin-left:.5rem}.base-select .wrapper .selected-items[data-v-c35e5bc8]{display:flex;gap:.25rem;white-space:nowrap;overflow:hidden;margin-left:.5rem;width:auto}.base-select .wrapper .selected-items .label[data-v-c35e5bc8]{font-size:.75rem;line-height:1rem;height:min-content}.base-select .wrapper .placeholder[data-v-c35e5bc8]{color:var(--color-slate-400);margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .selected-item[data-v-c35e5bc8]{font-size:.875rem;line-height:1.25rem;margin-left:.5rem;text-overflow:ellipsis;overflow:hidden}.base-select .wrapper .action-buttons[data-v-c35e5bc8]{display:flex;gap:.25rem;margin-left:auto}.base-select .wrapper input[data-v-c35e5bc8]{border-style:none;padding:.5rem 0;margin-left:.5rem;font-size:.875rem;line-height:1.25rem;flex:1 0 5rem;min-width:0;min-height:0;background-color:var(--color-input-bg);color:var(--color-body-text);height:2.25rem}.base-select .wrapper input[data-v-c35e5bc8]::placeholder{color:var(--color-slate-400)}.base-select .wrapper input[data-v-c35e5bc8]:focus{box-shadow:none}.base-select .wrapper .label-inner[data-v-c35e5bc8]{display:flex;align-items:center;gap:.25rem}.base-select .wrapper .label-inner .close-button[data-v-c35e5bc8]{height:1rem;width:1rem}.base-select .error[data-v-c35e5bc8]{font-size:.875rem;line-height:1.25rem;color:var(--color-error-secondary);margin-top:.5rem}.state-indicator[data-v-c35e5bc8]{pointer-events:none;transition:all .2s ease-in-out}.state-indicator.is-open[data-v-c35e5bc8]{transform:rotate(180deg)}.content-divider[data-v-c35e5bc8]{border-color:var(--color-input-border);margin-left:1.5rem;margin-right:1.5rem}.select-content[data-v-c35e5bc8]{justify-content:space-between;max-height:18.75rem;overflow-y:auto;padding:.5rem 0;border-radius:.5rem;background-color:var(--color-child)}.select-content.show-shadow[data-v-c35e5bc8]{box-shadow:var(--shadow-sm)}.select-content.remove-radius[data-v-c35e5bc8]{border-top-left-radius:0!important;border-top-right-radius:0!important}.select-content .no-results[data-v-c35e5bc8]{color:var(--color-gray-700);cursor:default;-webkit-user-select:none;user-select:none;padding:.5rem 1rem;position:relative}.select-content[data-v-c35e5bc8] .checkbox-container{margin-right:1rem}.dark .wrapper input[data-v-c35e5bc8]::placeholder,.dark .select-content .no-results[data-v-c35e5bc8]{color:var(--color-body-text)}@media(min-width:768px){.select-content[data-v-c35e5bc8]{max-height:400px}}@media(min-width:1024px){.select-content[data-v-c35e5bc8]{max-height:500px}}.intersect[data-v-905f1ae1]{display:flex;justify-content:center}.search-loader[data-v-905f1ae1]{margin-top:.5rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ea23c282],[data-v-ea23c282]:before,[data-v-ea23c282]:after,[data-v-ea23c282]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-border-style:solid;--tw-content:"";--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.tooltip-wrapper[data-v-ea23c282]{display:contents}.tooltip[data-v-ea23c282]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));word-break:break-all;color:var(--color-black,#000);--tw-drop-shadow-size:drop-shadow(0 2px 4px var(--tw-drop-shadow-color,#0000003d));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,);justify-content:center;display:flex;position:relative}.tooltip[data-v-ea23c282]:where(.dark,.dark *){background-color:var(--color-neutral-200,oklch(92.2% 0 0))}.tooltip[data-v-ea23c282]:before{width:calc(var(--spacing,.25rem)*0);border-style:var(--tw-border-style);--tw-border-style:solid;--tw-content:"";content:var(--tw-content);border:8px solid #0000;display:block;position:absolute}.tooltip.top-left[data-v-ea23c282],.tooltip.top-right[data-v-ea23c282],.tooltip.top-center[data-v-ea23c282],.tooltip.top[data-v-ea23c282]{margin-bottom:calc(var(--spacing,.25rem)*2)}:is(.tooltip.top-left[data-v-ea23c282],.tooltip.top-right[data-v-ea23c282],.tooltip.top-center[data-v-ea23c282],.tooltip.top[data-v-ea23c282]):before{content:var(--tw-content);border-top-color:var(--color-white,#fff)}:is(.tooltip.top-left[data-v-ea23c282],.tooltip.top-right[data-v-ea23c282],.tooltip.top-center[data-v-ea23c282],.tooltip.top[data-v-ea23c282]):where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.top-left[data-v-ea23c282],.tooltip.top-right[data-v-ea23c282],.tooltip.top-center[data-v-ea23c282],.tooltip.top[data-v-ea23c282]):before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-ea23c282]:before{content:var(--tw-content);border-top-color:#000}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-ea23c282]:where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-child-alt,#fff)}.tooltip.top-left[data-v-ea23c282]:before{bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-right[data-v-ea23c282]:before{right:calc(var(--spacing,.25rem)*3);bottom:calc(var(--spacing,.25rem)*0);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-center[data-v-ea23c282]:before,.tooltip.top[data-v-ea23c282]:before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}.tooltip.bottom-left[data-v-ea23c282],.tooltip.bottom-right[data-v-ea23c282],.tooltip.bottom-center[data-v-ea23c282],.tooltip.bottom[data-v-ea23c282]{margin-top:calc(var(--spacing,.25rem)*2)}:is(.tooltip.bottom-left[data-v-ea23c282],.tooltip.bottom-right[data-v-ea23c282],.tooltip.bottom-center[data-v-ea23c282],.tooltip.bottom[data-v-ea23c282]):before{content:var(--tw-content);border-bottom-color:var(--color-white,#fff)}:is(.tooltip.bottom-left[data-v-ea23c282],.tooltip.bottom-right[data-v-ea23c282],.tooltip.bottom-center[data-v-ea23c282],.tooltip.bottom[data-v-ea23c282]):where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-ea23c282]:before{content:var(--tw-content);border-bottom-color:#000}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-ea23c282]:where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-child-alt,#fff)}.tooltip.bottom-left[data-v-ea23c282]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-right[data-v-ea23c282]:before{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-center[data-v-ea23c282]:before,.tooltip.bottom[data-v-ea23c282]:before{top:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0;left:50%}.tooltip.left-top[data-v-ea23c282],.tooltip.left-bottom[data-v-ea23c282],.tooltip.left-center[data-v-ea23c282],.tooltip.left[data-v-ea23c282]{margin-right:calc(var(--spacing,.25rem)*2)}:is(.tooltip.left-top[data-v-ea23c282],.tooltip.left-bottom[data-v-ea23c282],.tooltip.left-center[data-v-ea23c282],.tooltip.left[data-v-ea23c282]):before{content:var(--tw-content);border-left-color:var(--color-white,#fff)}:is(.tooltip.left-top[data-v-ea23c282],.tooltip.left-bottom[data-v-ea23c282],.tooltip.left-center[data-v-ea23c282],.tooltip.left[data-v-ea23c282]):where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-ea23c282]:before{content:var(--tw-content);border-left-color:#000}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-ea23c282]:where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-child-alt,#fff)}.tooltip.left-top[data-v-ea23c282]:before{top:calc(var(--spacing,.25rem)*3);right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-bottom[data-v-ea23c282]:before{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*3);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-center[data-v-ea23c282]:before,.tooltip.left[data-v-ea23c282]:before{top:50%;right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.right-top[data-v-ea23c282],.tooltip.right-bottom[data-v-ea23c282],.tooltip.right-center[data-v-ea23c282],.tooltip.right[data-v-ea23c282]{margin-left:calc(var(--spacing,.25rem)*2)}:is(.tooltip.right-top[data-v-ea23c282],.tooltip.right-bottom[data-v-ea23c282],.tooltip.right-center[data-v-ea23c282],.tooltip.right[data-v-ea23c282]):before{content:var(--tw-content);border-right-color:var(--color-white,#fff)}:is(.tooltip.right-top[data-v-ea23c282],.tooltip.right-bottom[data-v-ea23c282],.tooltip.right-center[data-v-ea23c282],.tooltip.right[data-v-ea23c282]):where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-ea23c282]:before{content:var(--tw-content);border-right-color:#000}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-ea23c282]:where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-child-alt,#fff)}.tooltip.right-top[data-v-ea23c282]:before{top:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-bottom[data-v-ea23c282]:before{bottom:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-center[data-v-ea23c282]:before,.tooltip.right[data-v-ea23c282]:before{top:50%;left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.inverted[data-v-ea23c282]{background-color:var(--color-black,#000);color:var(--color-white,#fff)}.tooltip.inverted[data-v-ea23c282]:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.input-container[data-v-790b73c6]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-790b73c6]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-790b73c6]{stroke:var(--color-error-tertiary)}.input-container.has-error .icon.has-error[data-v-790b73c6]{fill:var(--color-error-tertiary);stroke:#fff}.container-inner[data-v-790b73c6]{width:100%;position:relative}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended)[data-v-790b73c6]{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;z-index:20}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .icon[data-v-790b73c6]{height:1.25rem;width:1.25rem}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .text[data-v-790b73c6]{color:var(--color-input-inline);font-size:.875rem;line-height:1.25rem}.container-inner .inline-container-prepended[data-v-790b73c6]{left:1rem}.container-inner .inline-container-appended[data-v-790b73c6]{right:1rem}.input-label[data-v-790b73c6]{font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:flex}.input-label .label-text[data-v-790b73c6]{display:flex;gap:.5625rem;align-items:center}.input-label .label-text .info-icon[data-v-790b73c6]{width:.875rem;height:.875rem}.input-label .optional[data-v-790b73c6]{color:#6b7280;font-weight:400;margin-left:auto;padding-left:.25rem}.dark :is(.input-label .optional)[data-v-790b73c6]{color:#e5e7eb}.dark .input[data-v-790b73c6]{color-scheme:dark}.input[data-v-790b73c6]{background-color:var(--color-input-bg);width:100%;height:2.5rem;border:1px solid var(--color-input-border);border-radius:.5rem;padding:0 1rem;font-size:.875rem;line-height:1.25rem;color:var(--color-slate-900);box-sizing:border-box;outline:none;transition:border .2s}.input[data-v-790b73c6]::placeholder{color:var(--color-neutral-400)}.input[data-v-790b73c6]:hover{border-color:var(--color-border-primary-hover)}.input[data-v-790b73c6]:focus{border-color:var(--color-primary-light);border-width:2px;padding-left:15px}.input.has-icon-prepended[data-v-790b73c6]{padding-left:2.5rem}.input.has-icon-prepended[data-v-790b73c6]:focus{padding-left:2.4375rem}.input.has-inline-text[data-v-790b73c6]{padding-right:2.5rem}.input.has-error[data-v-790b73c6]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)!important}.input.has-error[data-v-790b73c6]::placeholder{color:var(--color-error-primary)}.input.is-valid[data-v-790b73c6]{border-color:var(--color-success-tertiary);color:var(--color-success-primary)}.input.is-valid[data-v-790b73c6]::placeholder{color:var(--color-success-primary)}.input:disabled[data-v-790b73c6]{background-color:var(--color-disabled);color:var(--color-disabled-text)!important;border-color:var(--color-input-disabled-border)}.input:disabled[data-v-790b73c6]::placeholder{color:var(--color-disabled-text)}.input.medium[data-v-790b73c6]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-790b73c6]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-790b73c6]{height:3.5rem;font-size:1rem;line-height:1.5rem}.dark .input[data-v-790b73c6]{color:var(--color-body-text)}.error[data-v-790b73c6]{color:var(--color-error-secondary);font-size:.875rem;line-height:1.25rem;margin-top:.5rem}.input-container[data-v-19316412] .container-inner .inline-container-appended{margin-right:calc(var(--spacing,.25rem)*6)}.input-container[data-v-19316412] .container-inner .inline-container-appended .button{background-color:#0000}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-be635536],[data-v-be635536]:before,[data-v-be635536]:after,[data-v-be635536]::backdrop{--tw-border-style:solid}}}.table-selection[data-v-be635536]{margin-top:calc(var(--spacing,.25rem)*1);align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);width:100%;padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*2);display:flex}.table-selection[data-v-be635536]:where(.dark,.dark *){border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff)}.table-selection .amount[data-v-be635536]{margin-right:auto}.table-selection .actions[data-v-be635536]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@media(min-width:48rem){.table-selection .actions[data-v-be635536]{flex-direction:row}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1df2d468],[data-v-1df2d468]:before,[data-v-1df2d468]:after,[data-v-1df2d468]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial}}}.list[data-v-1df2d468]{width:calc(var(--spacing,.25rem)*64);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);padding-top:calc(var(--spacing,.25rem)*4);padding-bottom:calc(var(--spacing,.25rem)*2.5);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow:hidden}.list .list-inner[data-v-1df2d468]{gap:calc(var(--spacing,.25rem)*1.5);flex-direction:column;max-height:33.625rem;display:flex;overflow:auto}.list .active-columns[data-v-1df2d468],.list .available-columns[data-v-1df2d468]{padding-inline:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}:is(.list .active-columns,.list .available-columns) .title[data-v-1df2d468]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0));-webkit-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .title[data-v-1df2d468]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.list .active-columns,.list .available-columns) .column[data-v-1df2d468]{height:calc(var(--spacing,.25rem)*8);flex-direction:row;align-items:center;display:flex}:is(.list .active-columns,.list .available-columns) .column .checkbox-container[data-v-1df2d468]{width:fit-content;padding-right:calc(var(--spacing,.25rem)*2)}:is(.list .active-columns,.list .available-columns) .column .label[data-v-1df2d468]{text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));-webkit-user-select:none;user-select:none;overflow:hidden}:is(.list .active-columns,.list .available-columns) .column .label[data-v-1df2d468]:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.list .active-columns,.list .available-columns) .column .drag-handle[data-v-1df2d468]{cursor:grab;padding-left:calc(var(--spacing,.25rem)*2);margin-left:auto}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-1df2d468]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-1df2d468]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.list .active-columns .title[data-v-1df2d468]{padding-bottom:calc(var(--spacing,.25rem)*1.5)}.list .active-columns .column.dragging[data-v-1df2d468]{visibility:hidden}.list .available-columns .title[data-v-1df2d468]{padding-block:calc(var(--spacing,.25rem)*1.5)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-46c41877],[data-v-46c41877]:before,[data-v-46c41877]:after,[data-v-46c41877]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-46c41877]{top:var(--aadc3322);display:table-header-group}.table-head .select-column[data-v-46c41877],.table-head .action-column[data-v-46c41877]{z-index:2}.table-head .header[data-v-46c41877]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media(hover:hover){.table-head .header[data-v-46c41877]:hover{cursor:pointer}}.table-head .header.active[data-v-46c41877]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-46c41877]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-46c41877],.table-head .header .sort-icon.right[data-v-46c41877]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-46c41877]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-46c41877]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-46c41877],.table-head .header .sort-icon.active[data-v-46c41877]{display:block}.table-head[data-v-46c41877] .column-configurator{margin-left:auto}.table-head .filters[data-v-46c41877]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-46c41877]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-46c41877]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-46c41877]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-46c41877]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-46c41877],.action-column[data-v-46c41877]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-46c41877]:after,.action-column.overlap[data-v-46c41877]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-46c41877]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.select-column.overlap[data-v-46c41877]:after{--tw-gradient-position:to right in oklab}}.select-column.overlap[data-v-46c41877]:after{background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-46c41877]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left}@supports (background-image:linear-gradient(in lab,red,red)){.action-column.overlap[data-v-46c41877]:before{--tw-gradient-position:to left in oklab}}.action-column.overlap[data-v-46c41877]:before{background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-46c41877]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-46c41877]{cursor:pointer}tbody tr.clickable[data-v-46c41877]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20% 80%,#fff 95%)}tbody tr.clickable[data-v-46c41877]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20% 80%,#0f172a 95%)}tbody tr.selected[data-v-46c41877]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20% 80%,#fff 95%)}tbody tr.selected[data-v-46c41877]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20% 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-46c41877],tbody tr.selectable td[data-v-46c41877]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-46c41877],tbody tr:not(.selectable) td[data-v-46c41877]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.table-footer[data-v-46c41877]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*1);flex-wrap:wrap;justify-content:space-between;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-46c41877]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .current-page-info[data-v-46c41877]{align-items:center;row-gap:calc(var(--spacing,.25rem)*2);color:var(--color-neutral-950,oklch(14.5% 0 0));flex-wrap:wrap;flex-grow:1;display:flex}.table-footer .current-page-info[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .current-page-info .total-results[data-v-46c41877]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-footer .current-page-info .total-results span[data-v-46c41877]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.table-footer .current-page-info .page-selector[data-v-46c41877]{flex-wrap:wrap;flex-grow:1;align-items:center;display:none}@media(min-width:48rem){.table-footer .current-page-info .page-selector[data-v-46c41877]{display:flex}}.table-footer .current-page-info .page-selector[data-v-46c41877] .base-select{width:100%;max-width:calc(var(--spacing,.25rem)*24)}.table-footer .current-page-info .page-selector .per-page[data-v-46c41877]{margin-left:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.table-footer .current-page-info .page-selector .per-page[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.table-footer .pagination[data-v-46c41877]{padding-block:calc(var(--spacing,.25rem)*4);margin-left:auto}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5b94dd63],[data-v-5b94dd63]:before,[data-v-5b94dd63]:after,[data-v-5b94dd63]::backdrop{--tw-font-weight:initial;--tw-border-style:solid;--tw-duration:initial;--tw-ease:initial}}}.summary-group[data-v-5b94dd63]{padding-block:calc(var(--spacing,.25rem)*2)}.summary-group .header[data-v-5b94dd63]{justify-content:space-between;align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.summary-group .header.expandable[data-v-5b94dd63]{cursor:pointer}.summary-group .header .name[data-v-5b94dd63]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-group .header[data-v-5b94dd63] .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.summary-group .items[data-v-5b94dd63]{gap:calc(var(--spacing,.25rem)*2);border-left-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);padding-left:calc(var(--spacing,.25rem)*4);border-left-width:4px;flex-direction:column;animation:.3s fadeIn-5b94dd63;display:flex}.grow-enter-active[data-v-5b94dd63],.grow-leave-active[data-v-5b94dd63]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:.3s;transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1))}.grow-enter-from[data-v-5b94dd63],.grow-leave-to[data-v-5b94dd63]{height:calc(var(--spacing,.25rem)*0)!important;padding-block:calc(var(--spacing,.25rem)*0)!important;opacity:0!important}@keyframes fadeIn-5b94dd63{0%{opacity:0}to{opacity:1}}.summary-item[data-v-e9ecb151]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-item a[href][data-v-e9ecb151]:hover{text-decoration-line:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3468d776],[data-v-3468d776]:before,[data-v-3468d776]:after,[data-v-3468d776]::backdrop{--tw-font-weight:initial}}}.badge[data-v-3468d776]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-white,#fff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.badge.small[data-v-3468d776]{height:calc(var(--spacing,.25rem)*2);width:calc(var(--spacing,.25rem)*2)}.badge.small.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-.5);right:calc(var(--spacing,.25rem)*-.5)}.badge.blue[data-v-3468d776]{background-color:var(--color-blue-600,oklch(54.6% .245 262.881))}.badge.blue .pulse[data-v-3468d776]{background-color:var(--color-blue-400,oklch(70.7% .165 254.624))}.badge.green[data-v-3468d776]{background-color:var(--color-green-700,oklch(52.7% .154 150.069))}.badge.green .pulse[data-v-3468d776]{background-color:var(--color-green-400,oklch(79.2% .209 151.711))}.badge.gray[data-v-3468d776]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.badge.gray .pulse[data-v-3468d776]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.badge.orange[data-v-3468d776]{background-color:var(--color-orange-700,oklch(55.3% .195 38.402))}.badge.orange .pulse[data-v-3468d776]{background-color:var(--color-orange-400,oklch(75% .183 55.934))}.badge.purple[data-v-3468d776]{background-color:var(--color-purple-600,oklch(55.8% .288 302.321))}.badge.purple .pulse[data-v-3468d776]{background-color:var(--color-purple-400,oklch(71.4% .203 305.504))}.badge.red[data-v-3468d776]{background-color:var(--color-red-600,oklch(57.7% .245 27.325))}.badge.red .pulse[data-v-3468d776]{background-color:var(--color-red-400,oklch(70.4% .191 22.216))}.badge.yellow[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936));color:var(--color-gray-900,oklch(21% .034 264.665))}.badge.yellow .pulse[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936))}.badge.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-2);right:calc(var(--spacing,.25rem)*-3);position:absolute}.badge.pulsating .pulse[data-v-3468d776]{width:100%;height:100%;animation:var(--animate-ping,ping-3468d776 1s cubic-bezier(0,0,.2,1)infinite);opacity:.75;border-radius:3.40282e38px;position:absolute}.badge.pulsating .content[data-v-3468d776]{z-index:1}@keyframes ping-3468d776{75%,to{opacity:0;transform:scale(2)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-307971fb],[data-v-307971fb]:before,[data-v-307971fb]:after,[data-v-307971fb]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-content:"";--tw-border-style:solid;--tw-font-weight:initial}}}.menu-item[data-v-307971fb]{background-color:inherit;height:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));position:relative}.menu-item.title[data-v-307971fb]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.menu-item.title[data-v-307971fb]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu-item.simple[data-v-307971fb]{color:var(--color-primary,#2563eb)}.menu-item.simple[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.menu-item.simple[data-v-307971fb]:hover{text-decoration-line:underline}.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-6);width:calc(var(--spacing,.25rem)*6);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-content:"|";content:var(--tw-content);justify-content:center;align-items:center;display:flex;position:absolute;top:50%}@media(min-width:48rem){.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-12);width:calc(var(--spacing,.25rem)*12)}}.menu-item.disabled[data-v-307971fb],.menu-item[disabled][data-v-307971fb]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#9ca3af)}.menu-item .menu-item-content[data-v-307971fb]{align-items:center;column-gap:calc(var(--spacing,.25rem)*3);height:100%;color:var(--b87525ea);display:flex}.menu-item .menu-item-content .mini-icon[data-v-307971fb]{color:var(--b87525ea)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb],.menu-item .menu-item-content .append-icon[data-v-307971fb],.menu-item .menu-item-content .count[data-v-307971fb],.menu-item .menu-item-content .hotkey[data-v-307971fb]{margin-left:auto}.menu-item .menu-item-content .count[data-v-307971fb]{border-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-width:1px;border-radius:3.40282e38px}.menu-item .menu-item-content .count[data-v-307971fb]:where(.dark,.dark *){border-color:var(--color-neutral-400,oklch(70.8% 0 0))}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);color:var(--color-primary,#2563eb);margin-left:auto}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-24bbe7f3],[data-v-24bbe7f3]:before,[data-v-24bbe7f3]:after,[data-v-24bbe7f3]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.menu[data-v-24bbe7f3]{align-items:center;display:flex}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple){gap:calc(var(--spacing,.25rem)*6);height:100%}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item{border-bottom-style:var(--tw-border-style);color:var(--color-gray-500,oklch(55.1% .027 264.364));background-color:#0000;border-color:#0000;border-bottom-width:.1875rem}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item:not(.current):hover,.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item:not(.current):focus){border-color:var(--color-border-primary-hover,#9ca3af)}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item .menu-item-content{--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .current{border-color:var(--color-primary,#2563eb)}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .current:where(.dark,.dark *){border-color:var(--color-blue-400,oklch(70.7% .165 254.624));color:var(--color-blue-400,oklch(70.7% .165 254.624))!important}.menu.vertical[data-v-24bbe7f3]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*1);background-color:inherit;flex-direction:column}.menu.vertical .item-vertical[data-v-24bbe7f3]{border-radius:var(--radius-lg,.5rem);--tw-border-style:none;width:100%;padding:calc(var(--spacing,.25rem)*2);border-style:none}.menu.vertical .item-vertical[data-v-24bbe7f3]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):hover{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):focus{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):focus:where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.menu.vertical[data-v-24bbe7f3] .divider{margin-block:.3125rem}.menu.vertical .current[data-v-24bbe7f3]{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .current[data-v-24bbe7f3]:where(.dark,.dark *){background-color:var(--color-tertiary,#eff6ff)}.menu.simple[data-v-24bbe7f3]{justify-content:center;gap:calc(var(--spacing,.25rem)*6);flex-wrap:wrap}@media(min-width:48rem){.menu.simple[data-v-24bbe7f3]{gap:calc(var(--spacing,.25rem)*12)}}.menu.mini[data-v-24bbe7f3] .count{display:none}.menu[data-v-24bbe7f3] .current{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)!important}.menu[data-v-24bbe7f3] .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}.menu[data-v-24bbe7f3] .current .icon{color:var(--color-primary,#2563eb)}.sub-menu[data-v-24bbe7f3]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);width:16.5rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-50dad6b8],[data-v-50dad6b8]:before,[data-v-50dad6b8]:after,[data-v-50dad6b8]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.dropdown[data-v-50dad6b8]{position:relative}.dropdown .menu[data-v-50dad6b8]{border-radius:var(--radius-md,.375rem);background-color:var(--color-child,#fff);padding:calc(var(--spacing,.25rem)*1);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-7013d362],[data-v-7013d362]:before,[data-v-7013d362]:after,[data-v-7013d362]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.action-button[data-v-7013d362]{margin:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14);cursor:pointer;--tw-border-style:none;background-color:var(--color-primary,#2563eb);padding:calc(var(--spacing,.25rem)*0);--tw-outline-style:none;border-style:none;border-radius:3.40282e38px;outline-style:none;justify-content:center;align-items:center;display:inline-flex;position:relative}@media(forced-colors:active){.action-button[data-v-7013d362]{outline-offset:2px;outline:2px solid #0000}}.action-button[data-v-7013d362]{-webkit-user-select:none;user-select:none}@media(hover:hover){.action-button[data-v-7013d362]:hover{background-color:var(--color-primary-hover,#1d4ed8)}}.action-button[data-v-7013d362]:focus{background-color:var(--color-primary-light,#3b82f6)}.action-button[data-v-7013d362]:active{background-color:var(--color-primary-pressed,#1e40af)}.action-button[disabled][data-v-7013d362]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6)}.action-button[disabled] .icon[data-v-7013d362]{color:var(--color-disabled-text,#9ca3af)}.action-button.floating[data-v-7013d362]{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);z-index:50;margin-right:calc(var(--spacing,.25rem)*6);margin-bottom:calc(var(--spacing,.25rem)*6);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:fixed}.action-button .icon[data-v-7013d362]{color:var(--color-white,#fff)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-2e571008],[data-v-2e571008]:before,[data-v-2e571008]:after,[data-v-2e571008]::backdrop{--tw-font-weight:initial}}}.copy-button[data-v-2e571008]{align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-tertiary,#eff6ff);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);flex-direction:row;display:inline-flex}@media(hover:hover){.copy-button[data-v-2e571008]:hover{background-color:var(--color-tertiary-hover,#dbeafe)}}.copy-button[data-v-2e571008]:active{background-color:var(--color-tertiary-pressed,#bfdbfe)}.copy-button .micro-icon[data-v-2e571008] svg{stroke-width:2px}.check-icon[data-v-2e571008]{color:var(--color-green-600,oklch(62.7% .194 149.214))}.copy-icon-button[data-v-2e571008]{width:fit-content;border-radius:var(--radius-lg,.5rem)!important}.copy-icon-button.small[data-v-2e571008]{height:calc(var(--spacing,.25rem)*8);padding-inline:calc(var(--spacing,.25rem)*2)}.copy-icon-button.small .micro-icon[data-v-2e571008] svg{stroke-width:2px}.copy-icon-button.medium[data-v-2e571008]{height:calc(var(--spacing,.25rem)*10);padding-inline:calc(var(--spacing,.25rem)*2.5)}.copy-icon-button.medium .mini-icon[data-v-2e571008]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.copy-icon-button.large[data-v-2e571008]{height:calc(var(--spacing,.25rem)*12);padding-inline:calc(var(--spacing,.25rem)*3)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-92b3affe],[data-v-92b3affe]:before,[data-v-92b3affe]:after,[data-v-92b3affe]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.active[data-v-92b3affe]:not(.button-segment) .mini-icon:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment[data-v-92b3affe]{z-index:10;overflow-wrap:break-word}@media screen and (max-width:640px){.segment[data-v-92b3affe]{word-break:break-all}}.segment:not(.button-segment).active[data-v-92b3affe]{color:var(--color-primary,#2563eb)}.segment:not(.button-segment).active[data-v-92b3affe]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment.button-segment[data-v-92b3affe]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}.segment.button-segment.active[data-v-92b3affe]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb);padding-inline:.6875rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1bf35dd7],[data-v-1bf35dd7]:before,[data-v-1bf35dd7]:after,[data-v-1bf35dd7]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}.segmented-control.default[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-100,oklch(97% 0 0));padding:calc(var(--spacing,.25rem)*1);grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;display:grid;position:relative}.segmented-control.default[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.segmented-control.default .highlight[data-v-1bf35dd7]{pointer-events:none;inset-inline-start:calc(var(--spacing,.25rem)*1);top:calc(var(--spacing,.25rem)*1);bottom:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);--tw-duration:.2s;transition-duration:.2s;position:absolute;margin-inline-start:calc(var(--spacing,.25rem)*0)!important}.segmented-control.default .highlight[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.segmented-control.buttons[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:row;display:flex}.switch[data-v-2a0977ac]{background-color:var(--color-neutral-200);position:relative;display:inline-flex;height:1.5rem;width:2.75rem;flex-shrink:0;cursor:pointer;border-radius:9999px;border:2px solid transparent;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;outline:none}.switch.enabled[data-v-2a0977ac]{background-color:var(--color-primary-light)!important}.switch:disabled[data-v-2a0977ac]{filter:grayscale(1);cursor:not-allowed}.switch:disabled .dot[data-v-2a0977ac]{background-color:var(--color-neutral-400)!important}.switch .dot[data-v-2a0977ac]{pointer-events:none;display:inline-block;height:1.25rem;width:1.25rem;transform:translate(0);border-radius:9999px;background-color:var(--color-white);box-shadow:0 1px 3px #0000001a;transition:transform .2s ease-in-out,background-color .2s ease-in-out}.switch .dot.enabled[data-v-2a0977ac]{transform:translate(1.25rem)}.dark .switch[data-v-2a0977ac]{background-color:var(--color-input-bg)}.dark .switch .dot[data-v-2a0977ac]{background-color:var(--color-neutral-100)}.theme-toggle[data-v-88cb7ead]{align-items:center;gap:calc(var(--spacing,.25rem)*2);display:flex}.accordion-item[data-v-3fc5173a]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media(min-width:640px){.accordion-item[data-v-3fc5173a]{border-radius:1rem}}.accordion-item .header[data-v-3fc5173a]{width:100%;display:flex;align-items:center;padding:1rem;background-color:inherit;border:none}.accordion-item .header[data-v-3fc5173a]:focus{background-color:var(--color-secondary-hover)}@media(min-width:640px){.accordion-item .header[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.accordion-item .header .state-indicator[data-v-3fc5173a]{margin-left:auto;padding-left:.5rem}.accordion-item .header .state-indicator .icon[data-v-3fc5173a]{color:var(--color-primary-light);transform:rotate(0);transition:transform .3s linear}.accordion-item .header .state-indicator.open[data-v-3fc5173a]{transform:rotate(180deg);padding-left:0;padding-right:.5rem}.accordion-item .header .title[data-v-3fc5173a],.accordion-item .header .title[data-v-3fc5173a-s]{text-align:left;font-weight:500;color:var(--color-body-text)}.accordion-item .content[data-v-3fc5173a]{padding-bottom:1.5rem;padding-top:0;padding-left:1rem;padding-right:1rem}@media(min-width:640px){.accordion-item .content[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem}}.grow-enter-active[data-v-3fc5173a],.grow-leave-active[data-v-3fc5173a]{transition:all .3s ease-in-out}.fade-enter-active[data-v-3fc5173a],.fade-leave-active[data-v-3fc5173a]{transition:all .1s ease-in-out}.grow-enter-from[data-v-3fc5173a],.grow-leave-to[data-v-3fc5173a]{height:0!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-3fc5173a],.fade-leave-to[data-v-3fc5173a]{opacity:0;height:0!important}.accordion[data-v-25a8f65e]{display:flex;flex-direction:column;gap:.125rem}@media(min-width:640px){.accordion[data-v-25a8f65e]{gap:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ee49f574],[data-v-ee49f574]:before,[data-v-ee49f574]:after,[data-v-ee49f574]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.amount-input-container[data-v-ee49f574]{flex-direction:column;display:flex}.amount-input[data-v-ee49f574]{height:calc(var(--spacing,.25rem)*10);color:var(--color-body-text,#111827);display:flex}.amount-input.small[data-v-ee49f574]{height:calc(var(--spacing,.25rem)*8)}.amount-input.small .minus[data-v-ee49f574],.amount-input.small .plus[data-v-ee49f574]{width:calc(var(--spacing,.25rem)*8)}.input[data-v-ee49f574],.minus[data-v-ee49f574],.plus[data-v-ee49f574]{border-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-width:1px;border-color:var(--color-border-primary,#d1d5db)}.input[data-v-ee49f574]:disabled,.minus[data-v-ee49f574]:disabled,.plus[data-v-ee49f574]:disabled{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.input[data-v-ee49f574]:disabled{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.minus[data-v-ee49f574]:disabled,.plus[data-v-ee49f574]:disabled{color:var(--color-disabled-text,#9ca3af)}.minus[data-v-ee49f574]:hover:not(:disabled),.plus[data-v-ee49f574]:hover:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-hover,#fafafa)}.minus[data-v-ee49f574]:focus:not(:disabled),.plus[data-v-ee49f574]:focus:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-pressed,#e5e5e5)}.input[data-v-ee49f574]{z-index:10;width:calc(var(--spacing,.25rem)*14);background-color:var(--color-input-bg,#fff);text-align:center;--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-inline:-1px}.input[data-v-ee49f574]:hover:not(:disabled):not(.has-error){border-color:var(--color-border-primary-hover,#9ca3af)}.input[data-v-ee49f574]:focus:not(:disabled){border-style:var(--tw-border-style);--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-width:2px}.input[data-v-ee49f574]:focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.input[data-v-ee49f574]:focus-visible{outline-offset:2px;outline:2px solid #0000}}.input[data-v-ee49f574]:focus:not(:disabled):not(.has-error){border-color:var(--color-primary-light,#3b82f6)}.input.has-error[data-v-ee49f574],.input.has-error[data-v-ee49f574]:focus{border-color:var(--color-error-tertiary,#e73c3e)}.minus[data-v-ee49f574],.plus[data-v-ee49f574]{width:calc(var(--spacing,.25rem)*10);background-color:var(--color-input-bg,#fff);justify-content:center;align-items:center;display:flex}.minus[data-v-ee49f574]{border-top-left-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.plus[data-v-ee49f574]{border-top-right-radius:var(--radius-lg,.5rem);border-bottom-right-radius:var(--radius-lg,.5rem)}.input[data-v-ee49f574]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input[data-v-ee49f574]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-ee49f574]{-moz-appearance:textfield}.error[data-v-ee49f574]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.status[data-v-c0e73fbd]{background-color:var(--color-gray-100);height:1.5rem;width:1.5rem;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.dark .status[data-v-c0e73fbd]{background-color:var(--color-input-bg)}.status.done[data-v-c0e73fbd]{background-color:var(--color-green-100)}.dark .status.done[data-v-c0e73fbd]{background-color:var(--color-green-600)}.done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-600)}.dark .done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-100)}.status.attention[data-v-c0e73fbd]{background-color:var(--color-red-100)}.dark .status.attention[data-v-c0e73fbd]{background-color:var(--color-error-accent)}.attention .micro-icon[data-v-c0e73fbd]{color:var(--color-error-secondary)}.dark .attention .micro-icon[data-v-c0e73fbd]{color:var(--color-red-100)}.alert[data-v-e623b23f]{padding:1rem;border-radius:.5rem;display:flex}.alert.error[data-v-e623b23f]{background-color:var(--color-error-accent)}.alert.error .icon .mini-icon[data-v-e623b23f]{color:var(--color-error-tertiary)}.alert.error .content .title[data-v-e623b23f]{color:var(--color-error-primary)}.alert.error .content .description[data-v-e623b23f]{color:var(--color-error-secondary)}.alert.warning[data-v-e623b23f]{background-color:var(--color-warning-accent)}.alert.warning .icon .mini-icon[data-v-e623b23f]{color:var(--color-warning-tertiary)}.alert.warning .content .title[data-v-e623b23f]{color:var(--color-warning-primary)}.alert.warning .content .description[data-v-e623b23f]{color:var(--color-warning-secondary)}.alert.success[data-v-e623b23f]{background-color:var(--color-success-accent)}.alert.success .icon .mini-icon[data-v-e623b23f]{color:var(--color-success-tertiary)}.alert.success .content .title[data-v-e623b23f]{color:var(--color-success-primary)}.alert.success .content .description[data-v-e623b23f]{color:var(--color-success-secondary)}.alert.info[data-v-e623b23f]{background-color:var(--color-info-accent)}.alert.info .icon .mini-icon[data-v-e623b23f]{color:var(--color-info-tertiary)}.alert.info .content .title[data-v-e623b23f]{color:var(--color-info-primary)}.alert.info .content .description[data-v-e623b23f]{color:var(--color-info-secondary)}.alert .icon[data-v-e623b23f]{margin-right:.75rem}.alert .content[data-v-e623b23f]{display:flex;flex-direction:column;font-size:.875rem;line-height:1.25rem;justify-content:center;gap:.25rem}.alert .content .title[data-v-e623b23f]{font-weight:500}.configurator-step.simple[data-v-b35362eb]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media(min-width:640px){.configurator-step.simple[data-v-b35362eb]{border-radius:1rem}}.configurator-step.simple .content[data-v-b35362eb]{padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0}@media(min-width:640px){.configurator-step.simple .content[data-v-b35362eb]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header[data-v-b35362eb]{display:flex;flex-wrap:wrap;width:100%;row-gap:1rem;align-items:flex-start;padding:1rem;background-color:inherit;border:none}@media(min-width:640px){.configurator-step.simple .header[data-v-b35362eb]{align-items:center;padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.configurator-step.simple .header .title[data-v-b35362eb]{text-align:left;font-weight:500;color:var(--color-body-text)}@media(min-width:640px){.configurator-step.simple .header .title[data-v-b35362eb]{white-space:nowrap}}.configurator-step.simple .inner[data-v-b35362eb]{display:flex;flex-direction:column;row-gap:1rem}@media(min-width:640px){.configurator-step.simple .inner[data-v-b35362eb]{flex-direction:row;align-items:center}}.configurator-step.simple .measurements-form[data-v-b35362eb]{gap:1rem;display:flex;flex-direction:column}.configurator-step.simple .measurements-form .submit-button[data-v-b35362eb]{width:100%}.configurator-step.simple .measurement-inputs[data-v-b35362eb]{display:flex;gap:.625rem;align-items:center}.configurator-step.simple .measurement-inputs.has-errors[data-v-b35362eb]{align-items:flex-start!important}.configurator-step.simple .measurement-inputs.has-errors .separator[data-v-b35362eb]{margin-top:.5rem}.configurator-step.simple .total[data-v-b35362eb]{margin-left:auto;flex-grow:1;color:var(--color-gray-500);text-align:right}.dark :is(.configurator-step.simple .total)[data-v-b35362eb]{color:var(--color-neutral-200)}.configurator-step.simple .status-text[data-v-b35362eb]{color:var(--color-gray-400);width:100%;text-align:right}@media(min-width:640px){.configurator-step.simple .status-text[data-v-b35362eb]{text-align:left}}.dark :is(.configurator-step.simple .status-text)[data-v-b35362eb]{color:var(--color-neutral-200)}.configurator-step.simple [data-v-b35362eb] .input::-webkit-outer-spin-button,.configurator-step.simple [data-v-b35362eb] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple [data-v-b35362eb] .input[type=number]{-moz-appearance:textfield}.measurement-inputs[data-v-b35362eb] .measurement-input{max-width:7rem;width:100%}.labels[data-v-1a9d11c5]{position:absolute;top:.75rem;right:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end;z-index:10}.dark .labels[data-v-1a9d11c5]{mix-blend-mode:exclusion}[data-v-1a9d11c5] .image{object-fit:cover;height:100%;width:100%}.amount[data-v-1a9d11c5]{display:flex;flex-direction:column;align-items:center;gap:.5rem;margin-top:2.75rem}.amount span[data-v-1a9d11c5]{font-size:.875rem;line-height:1.25rem}.information[data-v-45867763],.custom-value[data-v-45867763]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;line-height:1rem}.custom-value[data-v-45867763]{gap:1rem}.custom-value[data-v-45867763] .input-container,.custom-value[data-v-45867763] .button{max-width:7.25rem;width:100%}.information .delivery[data-v-45867763]{color:var(--color-green-700);display:flex;gap:.25rem;align-items:center}.dark .information .delivery[data-v-45867763]{color:var(--color-green-500)}.information .delivery .icon[data-v-45867763]{height:1rem;width:1rem;color:var(--color-green-700)}.dark .information .delivery .icon[data-v-45867763]{color:var(--color-green-500)}.information .delivery .icon[data-v-45867763] svg{stroke-width:2}.information .delivery .delivery-time[data-v-45867763]{font-weight:500}.information .price[data-v-45867763]{color:var(--color-red-600);margin-left:auto}.dark .information .price[data-v-45867763]{color:var(--color-red-400)}.price .price-per[data-v-45867763]{color:var(--color-gray-500)}.dark .price .price-per[data-v-45867763]{color:var(--color-body-text)}.not-available[data-v-45867763]{color:var(--color-error-secondary);display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem}.dark .not-available[data-v-45867763]{color:var(--color-error-tertiary)}.option-card[data-v-56b71e2f]{outline:1px solid var(--color-gray-300);border-radius:.5rem;width:17.5rem;cursor:pointer;background-color:var(--color-child-alt);min-height:16.5rem;display:flex;justify-content:center;overflow:hidden}.option-card[data-v-56b71e2f]:hover,.option-card[data-v-56b71e2f]:focus{box-shadow:var(--shadow)}.option-card[data-v-56b71e2f]:focus:not(.selected):not(.disabled){outline:3px dotted var(--color-blue-500)}.option-card.selected[data-v-56b71e2f]{outline:3px solid var(--color-blue-600)!important}.option-card.disabled[data-v-56b71e2f]{border-color:var(--color-gray-300);background-color:var(--color-disabled);cursor:default}.option-card.disabled[data-v-56b71e2f]:hover{box-shadow:none}.option-card.disabled .content[data-v-56b71e2f] *{color:var(--color-disabled-text)!important}.option-card.disabled .header[data-v-56b71e2f],.option-card.disabled .content[data-v-56b71e2f]{filter:grayscale(100%)}.option-card .inner[data-v-56b71e2f]{width:100%}.no-option[data-v-56b71e2f]{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center}.no-option[data-v-56b71e2f] .icon{color:var(--color-gray-400);height:3.5rem;width:3.5rem;margin-bottom:1rem}.no-option h3[data-v-56b71e2f]{font-size:.875rem;line-height:1.25rem}.header[data-v-56b71e2f]{height:10.25rem;width:100%;background-color:var(--color-gray-100);position:relative;border-radius:.5rem .5rem 0 0;display:flex;justify-content:center}.option-card .content[data-v-56b71e2f]{padding:1rem 1rem .75rem}.content .title[data-v-56b71e2f]{font-weight:500;padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem}.content .description[data-v-56b71e2f]{font-size:.75rem;line-height:1rem;color:var(--color-gray-500)}.option-card .footer[data-v-56b71e2f]{padding:1rem;padding-top:0;font-size:.875rem;line-height:1.25rem}.dark .option-card[data-v-56b71e2f]{outline-color:transparent}.dark .option-card[data-v-56b71e2f]:hover{background-color:var(--color-secondary)}.dark .header[data-v-56b71e2f]{background-color:var(--color-child-alt)}.dark .content .title[data-v-56b71e2f]{color:var(--color-gray-200)}.dark .content .description[data-v-56b71e2f]{color:var(--color-gray-300)}.overlay[data-v-66d42f70]{position:absolute;z-index:10;width:100%;height:100%;inset:0;pointer-events:auto}.overlay.fixed[data-v-66d42f70]{position:fixed!important;z-index:1000}.option-step-container[data-v-0ea5d6d3]{position:relative}.configurator-step.options[data-v-0ea5d6d3] .content{padding-right:0}@media(min-width:640px){.configurator-step.options[data-v-0ea5d6d3] .content{padding-right:1.5rem}}.configurator-step.options[data-v-0ea5d6d3] .header .state-indicator{display:none}@media(min-width:640px){.configurator-step.options[data-v-0ea5d6d3] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-0ea5d6d3]{display:flex;gap:1rem;overflow-x:scroll;padding:.25rem}@media(min-width:640px){.configurator-step.options .option-container[data-v-0ea5d6d3]{overflow:visible;padding-left:0;padding-right:0}}.option-container .option[data-v-0ea5d6d3]{position:relative;display:flex;min-width:auto}@media(min-width:640px){.option-container.show-all[data-v-0ea5d6d3]{flex-wrap:wrap}.option-container .option[data-v-0ea5d6d3]{min-width:0}.option-container .option[data-v-0ea5d6d3]:last-child{margin-right:0}}.option-container .option[data-v-0ea5d6d3]:last-child{margin-right:1rem}.option.hide[data-v-0ea5d6d3]{display:flex}@media(min-width:640px){.option.hide[data-v-0ea5d6d3]{display:none}}.option .option-card[data-v-0ea5d6d3]{flex-shrink:0}@media(min-width:640px){.option .option-card[data-v-0ea5d6d3]{flex-shrink:1}}.option-container .overlay[data-v-0ea5d6d3]{position:absolute;right:0;bottom:0;width:100%;height:100%;border-radius:.5rem;display:none;align-items:center;justify-content:center;color:#fff;font-size:2.25rem;cursor:pointer}@media(min-width:640px){.option-container .overlay[data-v-0ea5d6d3]{display:flex}}.configurator-step.options .subtitle[data-v-0ea5d6d3]{color:var(--color-gry-700)}.dark .configurator-step.options .subtitle[data-v-0ea5d6d3]{color:var(--color-neutral-200)}.configurator-step.options .alert[data-v-0ea5d6d3]{margin-top:1rem;margin-right:1rem}@media(min-width:640px){.configurator-step.options .alert[data-v-0ea5d6d3]{margin-right:0}}.edit-button[data-v-0ea5d6d3]{position:absolute;top:1.25rem;right:3.125rem}.delivery-options[data-v-12d62f2c]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;padding:1rem;margin-top:.125rem}@media(min-width:640px){.delivery-options[data-v-12d62f2c]{border-radius:1rem;margin-top:.5rem}}@media(min-width:768px){.delivery-options[data-v-12d62f2c]{padding:1.5rem}}.header[data-v-12d62f2c]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-12d62f2c]{font-weight:500;color:var(--color-body-text)}.header .hint[data-v-12d62f2c]{color:#6b7280;display:none}@media(min-width:768px){.header .hint[data-v-12d62f2c]{display:flex}}.dark :is(.header .hint)[data-v-12d62f2c]{color:#e5e7eb}.content[data-v-12d62f2c]{display:flex;flex-direction:column;gap:1rem;flex-wrap:wrap}@media(min-width:768px){.content[data-v-12d62f2c]{flex-direction:row;gap:1.5rem}}.content .option[data-v-12d62f2c]{display:flex;flex-direction:column;position:relative}.content .option[data-v-12d62f2c]:not(.last){border-bottom:1px solid var(--color-gray-200);padding-bottom:1rem}@media(min-width:768px){.content .option[data-v-12d62f2c]:not(.last){border-bottom:none;padding-bottom:0}}@media(min-width:768px){.content .option[data-v-12d62f2c]:not(:first-child){border-left:1px solid var(--color-gray-200);padding-left:1.0625rem}}.content .option.hide[data-v-12d62f2c]{display:none}.content .option .day[data-v-12d62f2c],.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{font-size:.875rem;line-height:1.25rem}.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:absolute;top:0;right:0}@media(min-width:768px){.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:relative}}.content .option .day[data-v-12d62f2c]{margin-bottom:.25rem;color:var(--color-gray-700);text-transform:capitalize;display:flex;flex-wrap:wrap;gap:.25rem .5rem;align-items:center}.dark :is(.content .option .day)[data-v-12d62f2c]{color:#e5e7eb}.content .option .date[data-v-12d62f2c]{font-weight:500;font-size:1.25rem;line-height:1.75rem;color:var(--color-body-text)}@media(min-width:768px){.content .option .date[data-v-12d62f2c]{margin-bottom:.75rem}}.content .option .cost[data-v-12d62f2c]{color:var(--color-green-700)}.dark :is(.content .option .cost)[data-v-12d62f2c]{color:var(--color-green-500)}.content .option .no-cost[data-v-12d62f2c]{color:var(--color-gray-500)}.dark :is(.content .option .no-cost)[data-v-12d62f2c]{color:var(--color-gray-50)}.content .button[data-v-12d62f2c]{display:block}@media(min-width:768px){.content .button[data-v-12d62f2c]{display:none}}.dark .button.tertiary[data-v-12d62f2c]{background-color:var(--color-parent-bg)}.drawer[data-v-ba805a59]{background-color:var(--color-parent-bg);position:fixed;inset:0 auto 0 0;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;transition:transform .3s cubic-bezier(.4,0,.2,1);overflow:hidden;color:var(--color-body-text);max-width:80%;width:auto;height:100vh;min-height:100vh;max-height:100vh;will-change:transform}.drawer[data-v-ba805a59]::backdrop{background-color:rgba(15,23,42,var(--drawer-backdrop-opacity, .5));transition:background-color .3s ease}.drawer.no-overlay[data-v-ba805a59]::backdrop{background-color:transparent}.drawer.full-width[data-v-ba805a59]{width:100%;max-width:100%}.drawer.left[data-v-ba805a59]{left:0;right:auto;transform:translate(-100%)}.drawer.left.open[data-v-ba805a59]{transform:translate(0)}.drawer.right[data-v-ba805a59]{left:auto;right:0;transform:translate(100%)}.drawer.right.open[data-v-ba805a59]{transform:translate(0)}.drawer.bottom[data-v-ba805a59]{inset:auto 0 0;width:100%;max-width:100%;min-height:auto;height:auto;max-height:min(90vh,100dvh);display:flex;flex-direction:column;border-top-left-radius:.75rem;border-top-right-radius:.75rem;transform:translateY(100%)}.drawer.bottom.open[data-v-ba805a59]{transform:translateY(0)}.drawer.bottom .wrapper[data-v-ba805a59]{height:auto;max-height:inherit}.drawer.bottom .header[data-v-ba805a59],.drawer.bottom .content[data-v-ba805a59]{padding:1rem}.drawer.bottom .content[data-v-ba805a59]{padding-top:0;max-height:inherit;overflow-y:auto}.drawer .wrapper[data-v-ba805a59]{position:relative;height:100%;overflow:hidden;display:flex;flex-direction:column}.drawer .header[data-v-ba805a59]{display:flex;justify-content:space-between;align-items:center;gap:1.5rem;padding:1.25rem}.drawer .header .title[data-v-ba805a59]{font-size:1.25rem;line-height:1.75rem}.drawer .header .close[data-v-ba805a59]{transform:translate(.625rem)}.drawer .content[data-v-ba805a59]{padding-left:1.25rem;padding-right:1.25rem;flex-grow:1;overflow-y:auto}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbd1bdc0],[data-v-fbd1bdc0]:before,[data-v-fbd1bdc0]:after,[data-v-fbd1bdc0]::backdrop{--tw-font-weight:initial}}}.form-row[data-v-fbd1bdc0]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex}@media(min-width:48rem){.form-row[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*21);padding-block:calc(var(--spacing,.25rem)*10);flex-direction:row}}.form-row[data-v-fbd1bdc0]:first-child{padding-top:calc(var(--spacing,.25rem)*6)}.form-row .label[data-v-fbd1bdc0]{width:100%}@media(min-width:48rem){.form-row .label[data-v-fbd1bdc0]{width:calc(var(--spacing,.25rem)*75);min-width:calc(var(--spacing,.25rem)*75)}}.form-row .label .title[data-v-fbd1bdc0]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.form-row .label .subtitle[data-v-fbd1bdc0]{margin-top:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.form-row .label .subtitle[data-v-fbd1bdc0]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.form-row .fields[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*5);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cf479711],[data-v-cf479711]:before,[data-v-cf479711]:after,[data-v-cf479711]::backdrop{--tw-divide-y-reverse:0;--tw-border-style:solid}}}.form-grid[data-v-cf479711]{width:100%}:where(.form-grid[data-v-cf479711]>:not(:last-child)){--tw-divide-y-reverse:0!important;border-bottom-style:var(--tw-border-style)!important;border-top-style:var(--tw-border-style)!important;border-top-width:calc(1px*var(--tw-divide-y-reverse))!important;border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))!important;border-color:var(--color-border-primary,#d1d5db)!important}.form-grid .actions[data-v-cf479711]{padding-block:calc(var(--spacing,.25rem)*6)}.form-grid .actions[data-v-cf479711] .fields{gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}.sub-heading[data-v-143c5965]{padding:1rem 0}.actions[data-v-143c5965]{width:100%;display:flex;justify-content:flex-end;gap:1rem;padding:1rem 0}.configurator[data-v-4ef00907] .configurator-step .header{overflow:hidden}.configurator[data-v-4ef00907] .configurator-step .header .title{width:100%;margin-right:.5rem;text-overflow:ellipsis;overflow:hidden;display:flex;align-items:center;gap:.5rem}.configurator[data-v-4ef00907] .configurator-step .header .title .mini-icon{color:var(--color-neutral-400)}@media(min-width:640px){.configurator[data-v-4ef00907] .configurator-step .header .title{max-width:16rem;width:16rem;white-space:nowrap}}.configurator[data-v-4ef00907] .configurator-step .status{margin-right:1rem}.configurator-step[data-v-4ef00907] .subtitle{margin-left:auto;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:right}.configurator-step[data-v-4ef00907] .edit-button{margin-left:auto}@media(min-width:640px){.configurator-step[data-v-4ef00907] .subtitle{margin-left:0}}.loader[data-v-4ef00907]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-e55e085f] .icon{color:var(--color-blue-500,oklch(62.3% .214 259.815))}@keyframes minimizedAnimation-2c5c7bb0{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-2c5c7bb0{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-2c5c7bb0{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.dark .modal[data-v-2c5c7bb0]{color:var(--color-body-text)}.modal[data-v-2c5c7bb0]{width:100%;max-width:48rem;border-radius:1.5rem;overflow:hidden;transform:translateY(2.5rem);transition:all .5s ease-in-out;opacity:0;box-shadow:0 0 0 100vmax #0a0a0a80;background-color:var(--color-parent-bg);margin:auto}@media(prefers-reduced-motion){.modal[data-v-2c5c7bb0]{transition:none}}.modal[data-v-2c5c7bb0]::backdrop{background-color:transparent}.modal.open[data-v-2c5c7bb0]{transform:translateY(0);opacity:1;display:block}.modal.minimized[data-v-2c5c7bb0]{width:100%;margin-bottom:1.25rem;border:1px solid #e5e7eb;animation:minimizedAnimation-2c5c7bb0 1.3s forwards}@media(prefers-reduced-motion){.modal.minimized[data-v-2c5c7bb0]{animation:none}}.modal.minimized .inner[data-v-2c5c7bb0]{overflow-y:hidden}.modal.minimized .inner .header[data-v-2c5c7bb0]{padding:1rem;overflow-y:hidden}.modal.minimized .inner .header .title[data-v-2c5c7bb0-s]{margin-top:1rem;font-size:1rem;line-height:1.5rem}.modal.maximized[data-v-2c5c7bb0]{animation:maximizedAnimation-2c5c7bb0 1.3s forwards}@media(prefers-reduced-motion){.modal.maximized[data-v-2c5c7bb0]{animation:none}}.modal.fullscreen .inner[data-v-2c5c7bb0]{height:100%;min-height:0;overflow-y:auto}.modal.fullscreen .inner .header[data-v-2c5c7bb0]{padding:2rem 1rem;border-top-left-radius:1rem;border-top-right-radius:1rem;justify-content:flex-start}.modal.fullscreen .inner .content[data-v-2c5c7bb0]{padding:0 0 .5rem}.modal.fullscreen .inner .footer[data-v-2c5c7bb0]{margin-top:auto;box-shadow:0 10px 15px #0000001a}@media screen and (min-width:640px){.modal.fullscreen .inner .footer[data-v-2c5c7bb0]{margin-inline:5.75rem;border-radius:1rem;margin-bottom:1.25rem}}.modal.fullscreen:not(.minimized)[data-v-2c5c7bb0]{height:calc(100vh - 3.5rem);margin-top:3.5rem;max-width:100%;overflow:visible;border-bottom-left-radius:0;border-bottom-right-radius:0}@media screen and (min-width:640px){.modal.fullscreen:not(.minimized) .header[data-v-2c5c7bb0],.modal.fullscreen:not(.minimized) .content[data-v-2c5c7bb0]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen:not(.minimized)[data-v-2c5c7bb0]:modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-2c5c7bb0]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-2c5c7bb0]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-2c5c7bb0]{width:100%;background-color:#f9fafb}.modal:not(.fullscreen) .footer.footer-shadow[data-v-2c5c7bb0]{filter:drop-shadow(0 -1px 2px rgba(0,0,0,.1)) drop-shadow(0 -1px 1px rgba(0,0,0,.06))}.dark :is(.modal:not(.fullscreen) .footer)[data-v-2c5c7bb0]{background-color:var(--color-child)}.modal.persistent-animation[data-v-2c5c7bb0]{animation:horizontal-shaking-2c5c7bb0 .3s ease-in-out}.modal .actions[data-v-2c5c7bb0]{position:absolute;top:-3.5rem;width:100%;height:3.5rem;display:flex;justify-content:flex-end;align-items:center;padding:0 .5625rem}.modal .actions .minimize[data-v-2c5c7bb0],.modal .actions .close[data-v-2c5c7bb0]{font-size:.875rem;line-height:1.25rem;padding:0 .9375rem;color:#fff}.modal .inner[data-v-2c5c7bb0]{display:flex;flex-direction:column;min-height:fit-content}.modal .inner .header[data-v-2c5c7bb0]{display:flex;align-items:center;background-color:var(--color-parent-bg)}.modal .inner .header.header-shadow[data-v-2c5c7bb0]{filter:drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))}.modal .inner .header>.close[data-v-2c5c7bb0]{margin-left:auto}.modal .inner .header>.close[data-v-2c5c7bb0]:focus-visible{background-color:var(--color-secondary-hover)}.modal .inner .header .minimized-actions[data-v-2c5c7bb0]{display:flex;flex-direction:column;gap:.5rem;margin-left:auto}.modal .inner .title[data-v-2c5c7bb0],.modal .inner .title[data-v-2c5c7bb0-s]{font-weight:700;font-size:1.25rem}.modal .inner .content[data-v-2c5c7bb0]{padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem;overflow-y:auto}.modal .inner .content .loader[data-v-2c5c7bb0]{margin:0 auto;width:2.5rem;height:2.5rem}.modal .inner .footer[data-v-2c5c7bb0]{display:flex;gap:.5rem;justify-content:center;padding:1.5rem 1rem;z-index:10;background-color:var(--color-child)}.dark :is(.modal .inner .footer)[data-v-2c5c7bb0]{background-color:var(--color-child)}[data-v-7ecda409] .header{display:flex;flex-wrap:wrap;gap:0}@media(min-width:640px){[data-v-7ecda409] .header{gap:1.5rem}}.header .product-image[data-v-7ecda409]{height:auto;width:4.75rem!important}@media(min-width:640px){.header .product-image[data-v-7ecda409]{width:8.5rem!important}}.header .product-image .image[data-v-7ecda409]{height:4.75rem;width:4.75rem}@media(min-width:640px){.header .product-image .image[data-v-7ecda409]{width:8.5rem!important}}.header .title[data-v-7ecda409]{margin-bottom:.5rem}.header .subtitle[data-v-7ecda409]{display:flex;gap:.625rem;color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem;margin-bottom:1rem}.dark :is(.header .subtitle)[data-v-7ecda409]{color:var(--color-gray-300)}.header .subtitle .icon[data-v-7ecda409]{color:var(--color-green-500)}.header .reference[data-v-7ecda409]{color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem}.header .reference .value[data-v-7ecda409]{color:var(--color-gray-900)}.header .inner[data-v-7ecda409]{flex-shrink:1;max-width:calc(100% - 4.75rem)}@media(min-width:640px){.header .inner[data-v-7ecda409]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-7ecda409]{display:none;max-width:30rem}@media(min-width:640px){.header .inner .reference-input[data-v-7ecda409]{display:flex}}.header>.reference-input[data-v-7ecda409]{display:block;width:100%}@media(min-width:640px){.header>.reference-input[data-v-7ecda409]{display:none}}.footer-wrapper[data-v-7ecda409]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:.5rem;flex-wrap:wrap}.footer-wrapper .specifications[data-v-7ecda409]{display:none}@media(min-width:640px){.footer-wrapper .specifications[data-v-7ecda409]{display:flex;width:100%}}@media(min-width:1024px){.footer-wrapper .specifications[data-v-7ecda409]{width:auto}}.footer-wrapper .right[data-v-7ecda409]{display:flex;gap:1.25rem;align-items:center;justify-content:space-between;width:100%;margin-left:auto}@media(min-width:1024px){.footer-wrapper .right[data-v-7ecda409]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-7ecda409]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-7ecda409]{display:none}@media(min-width:768px){.footer-wrapper .right .add-to-cart .desktop[data-v-7ecda409]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-7ecda409]{display:flex}@media(min-width:768px){.footer-wrapper .right .add-to-cart .mobile[data-v-7ecda409]{display:none}}.footer-wrapper .right .sub-total[data-v-7ecda409]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-7ecda409]{color:var(--color-gray-500);font-size:.75rem;line-height:1.2rem!important;max-width:250px;width:100%;display:flex;gap:.5rem;flex-wrap:wrap}@media(min-width:640px){.footer-wrapper .right .sub-total .sub-price[data-v-7ecda409]{font-size:.875rem;line-height:1.25rem}}.dark :is(.footer-wrapper .right .sub-total .sub-price)[data-v-7ecda409]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-7ecda409],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-7ecda409]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-7ecda409]{color:var(--color-gray-700);font-size:.75rem;line-height:1rem}.dark :is(.footer-wrapper .right .sub-total .excluded-from-price)[data-v-7ecda409]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .price[data-v-7ecda409]{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:var(--color-red-500);display:flex;width:100%}@media(min-width:1024px){.footer-wrapper .right .sub-total .price[data-v-7ecda409]{justify-content:flex-end}}.dark :is(.footer-wrapper .right .sub-total .price)[data-v-7ecda409]{color:var(--color-red-400)}.footer-wrapper .right .sub-total .price .label[data-v-7ecda409]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-7ecda409]{top:-.3em;font-size:1rem;position:relative}.footer-wrapper .right .sub-total .price.small[data-v-7ecda409]{font-size:1rem;line-height:1.5rem}@media(min-width:640px){.footer-wrapper .right .sub-total .price.small[data-v-7ecda409]{font-size:1.5rem}}.footer-wrapper .right .sub-total .price.small .decimal[data-v-7ecda409]{font-size:.75rem;top:-.4em}.confirm-modal[data-v-6b257f82]{max-width:var(--container-lg,32rem)}.confirm-modal .indicator-icon[data-v-6b257f82]{width:fit-content;padding:calc(var(--spacing,.25rem)*3);border-radius:3.40282e38px;margin-inline:auto}.confirm-modal .indicator-icon.danger[data-v-6b257f82]{background-color:var(--color-error-accent,#fef2f2);color:var(--color-error-secondary,#d52d2f)}.confirm-modal .indicator-icon.info[data-v-6b257f82]{background-color:var(--color-info-accent,#eff6ff);color:var(--color-info-tertiary,#3b82f6)}.confirm-modal .indicator-icon .icon[data-v-6b257f82]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.confirm-modal .title[data-v-6b257f82]{margin-top:calc(var(--spacing,.25rem)*4);text-align:center;margin-bottom:calc(var(--spacing,.25rem)*3)!important}.confirm-modal .message[data-v-6b257f82]{text-align:center}.confirm-modal[data-v-6b257f82] .content{padding-inline:calc(var(--spacing,.25rem)*8)!important}.virtual-scroll-container[data-v-6169c6a9]{width:100%;height:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-6169c6a9]{flex-direction:column;display:flex}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-39166481],[data-v-39166481]:before,[data-v-39166481]:after,[data-v-39166481]::backdrop{--tw-outline-style:solid;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.filter-bar-container[data-v-39166481]{width:fit-content;position:relative}.filter-bar-container .filter-bar[data-v-39166481]:hover:has(.button:hover){background-color:var(--color-secondary,#fff)}.filter-bar-container .filter-bar .label-container[data-v-39166481]{margin-right:calc(var(--spacing,.25rem)*8);margin-left:.5625rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]{white-space:nowrap;outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-white,#fff);overflow:hidden}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-2)}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:last-child){max-width:calc(var(--spacing,.25rem)*10)}.filter-bar-container .filter-bar .label-container .label[data-v-39166481]{border-radius:var(--radius-lg,.5rem)}.filter-bar-container .clear[data-v-39166481]{top:50%;right:calc(var(--spacing,.25rem)*2);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);position:absolute}.filter-actions[data-v-62178ff0]{margin-top:calc(var(--spacing,.25rem)*4)}.filter-actions .button[data-v-62178ff0]{width:100%}.filter-actions .select-all[data-v-62178ff0]{margin-bottom:calc(var(--spacing,.25rem)*2)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1b52a40e],[data-v-1b52a40e]:before,[data-v-1b52a40e]:after,[data-v-1b52a40e]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.filter-dropdown[data-v-1b52a40e]{margin-top:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);min-width:16.5rem;max-height:33.625rem;padding:calc(var(--spacing,.25rem)*4);--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter-dropdown[data-v-1b52a40e] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup[data-v-1b52a40e] .menu{background-color:inherit!important}.filter-popup[data-v-1b52a40e] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.inputs[data-v-f24e9eba]{margin-block:calc(var(--spacing,.25rem)*4)}.inputs .input-from[data-v-f24e9eba],.inputs .to[data-v-f24e9eba]{margin-bottom:calc(var(--spacing,.25rem)*2)}.inputs .to[data-v-f24e9eba]{text-align:center;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);display:block}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-c93427ba],[data-v-c93427ba]:before,[data-v-c93427ba]:after,[data-v-c93427ba]::backdrop{--tw-font-weight:initial}}}.search[data-v-c93427ba]{margin-bottom:calc(var(--spacing,.25rem)*4)}.list[data-v-c93427ba]{max-height:21.625rem;padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));overflow:visible auto}.list .badge[data-v-c93427ba]{margin-top:calc(var(--spacing,.25rem)*1.5)}.loader-wrapper[data-v-c93427ba]{margin-top:calc(var(--spacing,.25rem)*-1);justify-content:center;align-items:center;width:100%;display:flex}.loader-wrapper.loading[data-v-c93427ba]{margin-block:calc(var(--spacing,.25rem)*1)}.menu.vertical[data-v-c93427ba]{margin-bottom:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*1)}.group-checkbox[data-v-c93427ba] .label{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-4e34bd39],[data-v-4e34bd39]:before,[data-v-4e34bd39]:after,[data-v-4e34bd39]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.filter-group[data-v-4e34bd39]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);flex-wrap:wrap;display:flex}.filter-group .title[data-v-4e34bd39]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:calc(var(--spacing,.25rem)*10);line-height:calc(var(--spacing,.25rem)*10);text-wrap:nowrap;color:var(--color-neutral-500,oklch(55.6% 0 0));display:none}@media(min-width:48rem){.filter-group .title[data-v-4e34bd39]{display:block}}.filter-group .title[data-v-4e34bd39]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.filter-group .base-filter[data-v-4e34bd39]{text-wrap:nowrap}.filter-group .button[data-v-4e34bd39]{margin-top:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);text-wrap:nowrap;color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cc6e6a99],[data-v-cc6e6a99]:before,[data-v-cc6e6a99]:after,[data-v-cc6e6a99]::backdrop{--tw-border-style:solid}}}tfoot[data-v-cc6e6a99]{border-top-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}tfoot[data-v-cc6e6a99] tr{max-height:initial;min-height:initial}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-53224a8c],[data-v-53224a8c]:before,[data-v-53224a8c]:after,[data-v-53224a8c]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-53224a8c]{display:table-header-group}.table-head .select-column[data-v-53224a8c],.table-head .action-column[data-v-53224a8c]{z-index:2}.table-head .header[data-v-53224a8c]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media(hover:hover){.table-head .header[data-v-53224a8c]:hover{cursor:pointer}}.table-head .header.active[data-v-53224a8c]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-53224a8c]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-53224a8c]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-53224a8c],.table-head .header .sort-icon.right[data-v-53224a8c]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-53224a8c]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-53224a8c]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-53224a8c],.table-head .header .sort-icon.active[data-v-53224a8c]{display:block}.table-head[data-v-53224a8c] .column-configurator{margin-left:auto}.table-head .filters[data-v-53224a8c]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-53224a8c]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-53224a8c]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-53224a8c]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-53224a8c]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-53224a8c],.action-column[data-v-53224a8c]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-53224a8c]:after,.action-column.overlap[data-v-53224a8c]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-53224a8c]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-53224a8c]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-53224a8c]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-53224a8c]{cursor:pointer}tbody tr.clickable[data-v-53224a8c]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20% 80%,#fff 95%)}tbody tr.clickable[data-v-53224a8c]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20% 80%,#0f172a 95%)}tbody tr.selected[data-v-53224a8c]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20% 80%,#fff 95%)}tbody tr.selected[data-v-53224a8c]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20% 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-53224a8c],tbody tr.selectable td[data-v-53224a8c]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-53224a8c],tbody tr:not(.selectable) td[data-v-53224a8c]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}tbody tr[data-v-53224a8c]:not(.loading):nth-last-child(2){border-bottom-style:var(--tw-border-style);border-bottom-width:0}tbody tr .cell-content[data-v-53224a8c]{height:var(--c755539e);min-height:var(--c755539e);max-height:var(--c755539e);align-items:center;display:flex}.table-footer[data-v-53224a8c]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;justify-content:space-between;gap:calc(var(--spacing,.25rem)*4);border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding:calc(var(--spacing,.25rem)*4);flex-wrap:wrap;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-53224a8c]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .total-results[data-v-53224a8c]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-footer .total-results[data-v-53224a8c]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .total-results span[data-v-53224a8c]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-bb3db39e],[data-v-bb3db39e]:before,[data-v-bb3db39e]:after,[data-v-bb3db39e]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.avatar[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);background-color:var(--color-tertiary,#eff6ff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:inline-flex}.avatar[data-v-bb3db39e]:where(.dark,.dark *){background-color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:1;--tw-font-weight:var(--font-weight-medium,500);line-height:1;font-weight:var(--font-weight-medium,500);color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]:where(.dark,.dark *){color:var(--color-white,#fff)}.avatar img[data-v-bb3db39e]{object-fit:cover;border-radius:3.40282e38px;width:100%;height:100%}.avatar.small[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6)}.avatar.small .initials[data-v-bb3db39e]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.avatar.medium[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.avatar.large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12)}.avatar.large .initials[data-v-bb3db39e]{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.avatar.extra-large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14)}.avatar.extra-large .initials[data-v-bb3db39e]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.full-image[data-v-292098bc]{opacity:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-874a424c],[data-v-874a424c]:before,[data-v-874a424c]:after,[data-v-874a424c]::backdrop{--tw-outline-style:solid}}}.thumbnail-stack[data-v-874a424c]{flex-direction:row;align-items:center;display:flex}.thumbnail-stack[data-v-874a424c]:where(.dark,.dark *){opacity:.8}.thumbnail-stack .image-preview[data-v-874a424c]{outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-child,#fff);border-radius:.25rem}.thumbnail-stack .image-preview[data-v-874a424c]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-4)}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-874a424c]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8);background-color:var(--color-disabled,#f3f4f6);justify-content:center;align-items:center;display:flex}.thumbnail-stack .image-preview.invalid .icon[data-v-874a424c]{color:var(--color-disabled-text,#9ca3af)}.thumbnail-stack .image-preview[data-v-874a424c] .image-wrapper:where(.dark,.dark *){opacity:1}.address-lookup-result[data-v-2780fe99]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-neutral-100,oklch(97% 0 0));width:100%;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-700,oklch(37.1% 0 0));flex-direction:column;font-style:normal;display:flex}.error-summary[data-v-59fb525a]{padding-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-leading:initial;--tw-font-weight:initial}}}.postcodenl-autocomplete-menu{margin-top:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);display:none;position:absolute}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));overflow:hidden auto}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:var(--radius-lg,.5rem);padding:calc(var(--spacing,.25rem)*3);--tw-leading:calc(var(--spacing,.25rem)*5);line-height:calc(var(--spacing,.25rem)*5)}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{padding:calc(var(--spacing,.25rem)*0);--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);background-color:#0000}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.postcodenl-autocomplete-item-label{width:100%;max-width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));margin-right:.4rem;display:block}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{color:var(--color-neutral-500,oklch(55.6% 0 0));margin-right:.4rem}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:right .25em center;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{--tw-border-style:none;width:.0625rem;height:.0625rem;padding:calc(var(--spacing,.25rem)*0);clip:rect(0 0 0 0);border-style:none;margin:-.0625rem;display:none;position:absolute}@property --tw-leading{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-dda0be61],[data-v-dda0be61]:before,[data-v-dda0be61]:after,[data-v-dda0be61]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial}}}.country-icon[data-v-dda0be61]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);margin-right:.3125rem}.activator[data-v-dda0be61]{cursor:pointer;align-items:center;gap:calc(var(--spacing,.25rem)*1);background-color:var(--color-input-bg,#fff);display:flex}.activator[data-v-dda0be61]:not(.simple){border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);padding-inline:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.625rem}.activator:not(.simple) .country-icon[data-v-dda0be61]{margin-right:calc(var(--spacing,.25rem)*2)}.activator .state-indicator[data-v-dda0be61]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));margin-left:auto}.activator .state-indicator.is-open[data-v-dda0be61]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));rotate:180deg}.activator.disabled[data-v-dda0be61]{pointer-events:none;cursor:not-allowed;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#9ca3af)}.activator.disabled[data-v-dda0be61]::placeholder{color:var(--color-disabled-text,#9ca3af)}@media(hover:hover){.activator.disabled[data-v-dda0be61]:hover{border-color:var(--color-border-primary,#d1d5db)}}.activator.disabled[data-v-dda0be61]:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.activator.disabled[data-v-dda0be61]:focus{outline-offset:2px;outline:2px solid #0000}}.country-list[data-v-dda0be61]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-child,#fff);max-height:300px;padding-bottom:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow-y:auto}.country-list .search-container[data-v-dda0be61]{top:calc(var(--spacing,.25rem)*0);z-index:1;background-color:var(--color-child-alt,#fff);padding-inline:calc(var(--spacing,.25rem)*2);padding-top:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);position:sticky}.country-list .search-container[data-v-dda0be61]:after{bottom:calc(var(--spacing,.25rem)*-2);left:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*2);--tw-gradient-position:to bottom;width:100%;position:absolute}@supports (background-image:linear-gradient(in lab,red,red)){.country-list .search-container[data-v-dda0be61]:after{--tw-gradient-position:to bottom in oklab}}.country-list .search-container[data-v-dda0be61]:after{background-image:linear-gradient(var(--tw-gradient-stops));--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content)}.country-list .search-container .search-input[data-v-dda0be61]{--tw-border-style:none;background-color:var(--color-child-alt,#fff);width:100%;padding:calc(var(--spacing,.25rem)*0);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-style:none}.country-list .search-container .search-input[data-v-dda0be61]::placeholder{color:var(--color-body-text,#111827)}.country-list .search-container .search-input[data-v-dda0be61]:focus{box-shadow:none}.country-list .countries[data-v-dda0be61]{padding-top:calc(var(--spacing,.25rem)*2)}.country-list .countries .country[data-v-dda0be61]{align-items:center;gap:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*.5);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));display:flex}.country-list .countries .country[data-v-dda0be61]:hover{cursor:pointer;background-color:var(--color-secondary-hover,#fafafa);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}.country-list .countries .country[data-v-dda0be61]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.country-list .countries .no-countries-found[data-v-dda0be61]{pointer-events:none;padding-top:calc(var(--spacing,.25rem)*1);text-align:center;--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}[data-v-f3068d9b] .activator{width:100%;max-width:15.75rem}.address-input[data-v-f3068d9b]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-input .country .country-label-row[data-v-f3068d9b]{flex-direction:row;justify-content:space-between;display:flex}.address-input .country .country-label-row .address-toggle[data-v-f3068d9b]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0));text-decoration-line:underline}.address-input .input-label[data-v-f3068d9b]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-input .grouped-inputs[data-v-f3068d9b]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);width:100%;max-width:24rem;display:flex}.address-input .grouped-inputs .error-summary[data-v-f3068d9b]{width:100%}.address-input .input-container[data-v-f3068d9b],.address-input .address-lookup-result[data-v-f3068d9b]{width:100%;max-width:24rem}.address-form[data-v-e0304f7b]{flex-wrap:wrap;justify-content:space-between;display:flex}.address-form form[data-v-e0304f7b]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-form form .input-label[data-v-e0304f7b]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-form form .grouped-inputs[data-v-e0304f7b]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);display:flex}.address-form form .grouped-inputs .error-summary[data-v-e0304f7b]{width:100%}.address-form form .input-container[data-v-e0304f7b],.address-form form .grouped-inputs[data-v-e0304f7b]{width:100%;max-width:24rem}.checkbox-group[data-v-0088e5e7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ec57ffa3],[data-v-ec57ffa3]:before,[data-v-ec57ffa3]:after,[data-v-ec57ffa3]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.checkbox-button[data-v-ec57ffa3]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);padding:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.checkbox-button .checkbox-container[data-v-ec57ffa3]{border-radius:var(--radius-lg,.5rem)}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.checkbox-button .checkbox-container[data-v-ec57ffa3] .label{border-radius:var(--radius-xl,.75rem);height:100%;padding:calc(var(--spacing,.25rem)*3);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);word-break:break-all;align-items:flex-start}.checkbox-button .checkbox-container .checkbox-button-label[data-v-ec57ffa3]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);display:flex}.checkbox-button .checkbox-container .micro-icon[data-v-ec57ffa3]{margin-top:calc(var(--spacing,.25rem)*.5);color:var(--color-neutral-400,oklch(70.8% 0 0))}.checkbox-button .checked-content[data-v-ec57ffa3]{padding-top:calc(var(--spacing,.25rem)*1)}.drop-zone[data-v-f6ddde4c]{--tw-border-style:dashed;border-style:dashed}.drop-zone.default[data-v-f6ddde4c]{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.drop-zone.default[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.drop-zone.default[data-v-f6ddde4c]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.drop-zone.default[data-v-f6ddde4c]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.drop-zone.dragging[data-v-f6ddde4c]{border-color:var(--color-blue-300,oklch(80.9% .105 251.813));background-color:var(--color-blue-50,oklch(97% .014 254.604))}.drop-zone.dragging[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-blue-900,oklch(37.9% .146 265.522))}.drop-zone .label[data-v-f6ddde4c]{z-index:2;cursor:pointer;height:100%}.drop-zone .label.dragging[data-v-f6ddde4c]{justify-content:center}.drop-zone .label .icon[data-v-f6ddde4c]{color:var(--color-primary,#2563eb)}.drop-zone .label .icon[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .label .loader[data-v-f6ddde4c]{margin-right:calc(var(--spacing,.25rem)*1)}.drop-zone .label .trigger[data-v-f6ddde4c]{color:var(--color-primary,#2563eb);text-decoration-line:underline}.drop-zone .label .trigger[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .file-input[data-v-f6ddde4c]{display:none}.warning-zone[data-v-6a715eb5]{--tw-border-style:solid;border-style:solid;border-color:var(--color-orange-200,oklch(90.1% .076 70.697));background-color:var(--color-warning-accent,#fff7ed)}.warning-zone .label[data-v-6a715eb5]{color:var(--color-warning-primary,#7c2d12);flex-grow:1}.warning-zone .label .icon[data-v-6a715eb5]{color:var(--color-warning-tertiary,#f97316)}.error-zone[data-v-ac56673e]{--tw-border-style:solid;border-style:solid;border-color:var(--color-red-200,oklch(88.5% .062 18.334));background-color:var(--color-error-accent,#fef2f2)}.error-zone .label[data-v-ac56673e]{color:var(--color-error-primary,#7b2122);flex-grow:1}.error-zone .label .icon[data-v-ac56673e]{color:var(--color-error-tertiary,#e73c3e)}.success-zone[data-v-100cfc2a]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff)}.success-zone[data-v-100cfc2a]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.success-zone .label .icon[data-v-100cfc2a]{color:var(--color-success-tertiary,#22c55e)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3bf13f60],[data-v-3bf13f60]:before,[data-v-3bf13f60]:after,[data-v-3bf13f60]::backdrop{--tw-duration:initial;--tw-ease:initial}}}.linear-progress[data-v-3bf13f60]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));display:flex}.linear-progress .wrapper[data-v-3bf13f60]{gap:calc(var(--spacing,.25rem)*1);flex-direction:column;width:100%;display:flex}.linear-progress .wrapper .progress-bar[data-v-3bf13f60]{height:calc(var(--spacing,.25rem)*1.5);width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-3bf13f60]{width:100%;height:100%;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.5s;--tw-ease:linear;transition-duration:.5s;transition-timing-function:linear}.linear-progress .wrapper .progress-bar.blue[data-v-3bf13f60]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-3bf13f60]{background-color:var(--color-blue-500,oklch(62.3% .214 259.815))}.linear-progress .wrapper .progress-bar.lightblue[data-v-3bf13f60]{background-color:inherit}.linear-progress .wrapper .progress-bar.lightblue .progress[data-v-3bf13f60]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}.linear-progress .wrapper .progress-bar.green[data-v-3bf13f60]{background-color:var(--color-green-100,oklch(96.2% .044 156.743))}.linear-progress .wrapper .progress-bar.green .progress[data-v-3bf13f60]{background-color:var(--color-green-500,oklch(72.3% .219 149.579))}.linear-progress .wrapper .progress-bar.gray[data-v-3bf13f60]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-3bf13f60]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.linear-progress .wrapper .progress-bar.orange[data-v-3bf13f60]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-3bf13f60]{background-color:var(--color-orange-500,oklch(70.5% .213 47.604))}.linear-progress .wrapper .progress-bar.purple[data-v-3bf13f60]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-3bf13f60]{background-color:var(--color-purple-500,oklch(62.7% .265 303.9))}.linear-progress .wrapper .progress-bar.red[data-v-3bf13f60]{background-color:var(--color-red-100,oklch(93.6% .032 17.717))}.linear-progress .wrapper .progress-bar.red .progress[data-v-3bf13f60]{background-color:var(--color-red-500,oklch(63.7% .237 25.331))}.linear-progress .wrapper .progress-bar.yellow[data-v-3bf13f60]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-3bf13f60]{background-color:var(--color-yellow-500,oklch(79.5% .184 86.047))}.linear-progress .append[data-v-3bf13f60]{min-width:calc(var(--spacing,.25rem)*9)}@property --tw-ease{syntax:"*";inherits:false}.uploading-zone[data-v-4cd21cfa]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));position:relative}.uploading-zone .label[data-v-4cd21cfa]{z-index:2;cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.uploading-zone .label[data-v-4cd21cfa]:where(.dark,.dark *){mix-blend-mode:difference}.uploading-zone .label .progress[data-v-4cd21cfa]{color:var(--color-primary,#2563eb)}.uploading-zone .label .progress[data-v-4cd21cfa]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.uploading-zone .label .loader[data-v-4cd21cfa]{isolation:isolate}.uploading-zone .button[data-v-4cd21cfa]{width:100%}@media(min-width:48rem){.uploading-zone .button[data-v-4cd21cfa]{width:auto}}.uploading-zone .linear-progress[data-v-4cd21cfa]{right:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:1;position:absolute;height:100%!important}:is(.uploading-zone .linear-progress[data-v-4cd21cfa] .wrapper,.uploading-zone .linear-progress[data-v-4cd21cfa] .progress-bar){height:100%}.processing-zone[data-v-c88622d7]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.processing-zone[data-v-c88622d7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.processing-zone .label[data-v-c88622d7]{cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.processing-zone .label .loader[data-v-c88622d7]{isolation:isolate}.processing-zone .button[data-v-c88622d7]{width:100%}@media(min-width:48rem){.processing-zone .button[data-v-c88622d7]{width:auto}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e8f96956],[data-v-e8f96956]:before,[data-v-e8f96956]:after,[data-v-e8f96956]::backdrop{--tw-border-style:solid}}}@media(min-width:48rem){.drag-and-drop[data-v-e8f96956]{height:4.5rem}}.drag-and-drop .base-zone[data-v-e8f96956]{border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);border-width:1px;flex-wrap:wrap;align-items:center;row-gap:1.125rem;display:flex;overflow:hidden}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956]{padding-block:calc(var(--spacing,.25rem)*0);padding-right:calc(var(--spacing,.25rem)*4);padding-left:calc(var(--spacing,.25rem)*6)}}.drag-and-drop .base-zone[data-v-e8f96956] .label{align-items:center;gap:calc(var(--spacing,.25rem)*1);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-grow:1;display:flex}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956] .label{width:auto}}.drag-and-drop .base-zone[data-v-e8f96956] .label .icon{margin-right:calc(var(--spacing,.25rem)*2)}.drag-and-drop .base-zone[data-v-e8f96956] .actions{z-index:2;align-items:center;gap:calc(var(--spacing,.25rem)*2);flex-grow:1;display:flex}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions{flex-grow:0}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button{flex-shrink:0}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:1}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){flex-grow:1;order:1}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){order:2}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:1}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-217ac40b],[data-v-217ac40b]:before,[data-v-217ac40b]:after,[data-v-217ac40b]::backdrop{--tw-border-style:solid;--tw-outline-style:solid}}}.phone-input[data-v-217ac40b]{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);padding-inline:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}.phone-input.focus[data-v-217ac40b]:not(.disabled){border-color:var(--color-primary-light,#3b82f6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--color-primary-light,#3b82f6)}.phone-input[data-v-217ac40b]:hover:not(.disabled){border-color:var(--color-border-primary-hover,#9ca3af)}.phone-input.disabled[data-v-217ac40b]{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.phone-input.disabled .country-prefix[data-v-217ac40b]{color:var(--color-disabled-text,#9ca3af)}.phone-input.disabled input[data-v-217ac40b]{background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#9ca3af)}.phone-input select[data-v-217ac40b],.phone-input input[data-v-217ac40b]{--tw-border-style:none;padding:calc(var(--spacing,.25rem)*0);border-style:none}:is(.phone-input select[data-v-217ac40b],.phone-input input[data-v-217ac40b]):focus{box-shadow:none}.phone-input select[data-v-217ac40b]{padding-right:calc(var(--spacing,.25rem)*8)}.phone-input input[data-v-217ac40b]{background-color:var(--color-input-bg,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.phone-input .country-prefix[data-v-217ac40b]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}.radio[data-v-7475bfb8]{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6)}.radio[data-v-7475bfb8]:focus{--tw-ring-color:var(--color-primary-light,#3b82f6)}.radio.large[data-v-7475bfb8]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.radio[data-v-7475bfb8]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.radio[data-v-7475bfb8]:checked:not(:disabled){border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary,#2563eb)}.radio[data-v-7475bfb8]:checked:not(:disabled):where(.dark,.dark *){background-color:var(--color-primary-light,#3b82f6)}.radio[data-v-7475bfb8]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.radio[data-v-7475bfb8]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-7475bfb8]:checked:not(:disabled):hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-f4886f70],[data-v-f4886f70]:before,[data-v-f4886f70]:after,[data-v-f4886f70]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:"";--tw-font-weight:initial}}}.radio-button[data-v-f4886f70]{align-items:center;gap:calc(var(--spacing,.25rem)*3);border-radius:var(--radius-lg,.5rem);padding-inline:calc(var(--spacing,.25rem)*3);padding-block:calc(var(--spacing,.25rem)*3);word-break:break-all;display:flex}.radio-button[data-v-f4886f70] *{pointer-events:none}.radio-button[data-v-f4886f70]:not(.disabled):hover{cursor:pointer;background-color:var(--color-neutral-100,oklch(97% 0 0))}.radio-button[data-v-f4886f70]:not(.disabled):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.radio-button:not(.disabled).active[data-v-f4886f70]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}@media(hover:hover){.radio-button:not(.disabled).active[data-v-f4886f70]:hover{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}}.radio-button:not(.disabled).active[data-v-f4886f70]:where(.dark,.dark *){background-color:var(--color-child,#fff)}@media(hover:hover){.radio-button:not(.disabled).active[data-v-f4886f70]:where(.dark,.dark *):hover{background-color:var(--color-child-alt,#fff)}}.radio-button.disabled[data-v-f4886f70]{color:var(--color-disabled-text,#9ca3af);--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.radio-button.disabled[data-v-f4886f70]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:10;cursor:not-allowed;border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-300,oklch(87% 0 0));opacity:.1;--tw-content:"";content:var(--tw-content);width:100%;height:100%;position:absolute}.radio-button.large[data-v-f4886f70]{padding-block:calc(var(--spacing,.25rem)*3.5)}.radio-button label[data-v-f4886f70]{-webkit-user-select:none;user-select:none}.radio-button .append[data-v-f4886f70]{margin-left:auto}.radio-button .prepend-wrapper[data-v-f4886f70]{align-items:center;gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper[data-v-f4886f70]{flex-direction:column;min-width:max-content;display:flex}.radio-button .prepend-wrapper .title-wrapper .title[data-v-f4886f70]{align-items:center;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-f4886f70]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-f4886f70]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-06fee698],[data-v-06fee698]:before,[data-v-06fee698]:after,[data-v-06fee698]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.suggestion-list[data-v-06fee698]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);min-width:6.25rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:absolute}.suggestion-list .menu[data-v-06fee698]{row-gap:calc(var(--spacing,.25rem)*1)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-47592fd4],[data-v-47592fd4]:before,[data-v-47592fd4]:after,[data-v-47592fd4]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.editor[data-v-47592fd4] .tiptap{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);width:100%;height:18.75rem;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:.625rem;overflow:auto}:is(.editor[data-v-47592fd4] .tiptap h1,.editor[data-v-47592fd4] .tiptap h2){margin-bottom:calc(var(--spacing,.25rem)*4)}.editor[data-v-47592fd4] .tiptap h1{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)))}.editor[data-v-47592fd4] .tiptap h2{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)))}.editor[data-v-47592fd4] .tiptap h3{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}:is(.editor[data-v-47592fd4] .tiptap h4,.editor[data-v-47592fd4] .tiptap h5,.editor[data-v-47592fd4] .tiptap h6){font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.editor[data-v-47592fd4] .tiptap .tag{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);color:var(--color-gray-700,oklch(37.3% .034 259.733))}.editor .toolbar[data-v-47592fd4]{margin-bottom:calc(var(--spacing,.25rem)*2);gap:calc(var(--spacing,.25rem)*1);display:flex}.editor .toolbar .button[data-v-47592fd4]{width:calc(var(--spacing,.25rem)*10)}.editor .toolbar[data-v-47592fd4] .base-select{margin-left:auto}.modal.loader-modal[data-v-3d6405b8] .inner{display:flex;align-items:center;justify-content:center;background-color:var(--color-white);height:4.75rem;border-radius:1rem}.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:0;overflow:visible}.modal.loader-modal[data-v-3d6405b8] .inner .loader{width:3.125rem;height:3.125rem}.search-container[data-v-3d6405b8]{position:relative}.search-container[data-v-3d6405b8] .modal{max-height:25rem;background-color:transparent;height:100%;box-shadow:none}.search-container[data-v-3d6405b8] .modal .inner .content{padding:0}.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper,.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper input{background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{background-color:var(--color-child);border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;overflow:hidden}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .select-content{border-radius:1rem;background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated{margin:.625rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-left-radius:0;border-bottom-right-radius:0}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper{border-radius:1rem;padding-left:1.5rem;padding-right:1.5rem;height:4.75rem;border:none;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper.focus{border:none;outline:none}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .prepend-icon{height:1.5rem;width:1.5rem;margin-left:0;margin-right:.25rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-3d6405b8] .modal .inner .content .button{color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .button.cancel{font-weight:400;border-left:1px solid var(--color-border-primary);border-radius:0;padding-left:1rem;padding-right:.5rem}.dark .modal .cancel[data-v-3d6405b8]{color:var(--color-body-text)!important}@media(min-width:768px){.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-56f21690],[data-v-56f21690]:before,[data-v-56f21690]:after,[data-v-56f21690]::backdrop{--tw-border-style:solid}}}[data-v-56f21690] .input{min-width:calc(var(--spacing,.25rem)*40);border-right-style:var(--tw-border-style)!important;border-right-width:0!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important}[data-v-56f21690] .search-options .wrapper{border-left-style:var(--tw-border-style)!important;border-left-width:0!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important}.scoped-search[data-v-56f21690]{display:flex}.scoped-search .search:has(.input:hover)+.divider[data-v-56f21690]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search .search:focus-within+.divider[data-v-56f21690]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search .search[data-v-56f21690]:focus-within .input{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary-light,#3b82f6)}.scoped-search .search[data-v-56f21690]:focus-within .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-56f21690]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search:has(.search-options:focus) .divider[data-v-56f21690],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-56f21690]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search[data-v-56f21690] .search{flex-grow:1}.time-input[data-v-f95d04e5]{width:5.3125rem}.time-input[data-v-f95d04e5] ::-webkit-calendar-picker-indicator{display:none}.time-input[data-v-f95d04e5] ::-webkit-datetime-edit-text{padding-inline:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input[data-v-f95d04e5] ::-webkit-datetime-edit-fields-wrapper{margin-inline:auto}.time-input.has-icon[data-v-f95d04e5]{width:calc(var(--spacing,.25rem)*28)}.time-input.has-icon[data-v-f95d04e5] ::-webkit-datetime-edit-fields-wrapper{margin-left:calc(var(--spacing,.25rem)*0)}.time-input.has-icon[data-v-f95d04e5] .icon{color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input.error-full[data-v-f95d04e5] .error{width:max-content}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-70db5286],[data-v-70db5286]:before,[data-v-70db5286]:after,[data-v-70db5286]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid}}}.arrow[data-v-70db5286]{position:relative}.arrow.vertical[data-v-70db5286]{width:fit-content;height:100%;padding-inline:.75rem}.arrow.vertical .text[data-v-70db5286]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;top:50%;rotate:-90deg}.arrow.vertical.has-text[data-v-70db5286]{margin-right:calc(var(--spacing,.25rem)*8)}.arrow[data-v-70db5286]:not(.vertical){width:100%;padding-block:.75rem}.arrow:not(.vertical) .text[data-v-70db5286]{margin-top:calc(var(--spacing,.25rem)*5);--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;left:50%}.arrow:not(.vertical).has-text[data-v-70db5286]{margin-bottom:calc(var(--spacing,.25rem)*8)}.arrow .arrow-pointer[data-v-70db5286]{border-right-style:var(--tw-border-style);border-right-width:2px;border-bottom-style:var(--tw-border-style);border-bottom-width:2px;border-color:var(--color-border-primary,#d1d5db);padding:calc(var(--spacing,.25rem)*2);position:absolute}.arrow .arrow-pointer.up[data-v-70db5286],.arrow .arrow-pointer.down[data-v-70db5286]{margin-left:calc(var(--spacing,.25rem)*-2)}.arrow .arrow-pointer.up[data-v-70db5286]{top:calc(var(--spacing,.25rem)*0);margin-top:.125rem;rotate:-135deg}.arrow .arrow-pointer.down[data-v-70db5286]{bottom:calc(var(--spacing,.25rem)*0);margin-bottom:.125rem;rotate:45deg}.arrow .arrow-pointer.left[data-v-70db5286],.arrow .arrow-pointer.right[data-v-70db5286]{margin-top:calc(var(--spacing,.25rem)*-3);top:1rem}.arrow .arrow-pointer.left[data-v-70db5286]{left:calc(var(--spacing,.25rem)*0);margin-left:.125rem;rotate:135deg}.arrow .arrow-pointer.right[data-v-70db5286]{right:calc(var(--spacing,.25rem)*0);margin-right:.125rem;rotate:-45deg}.arrow .text[data-v-70db5286]{text-wrap:nowrap;color:var(--color-gray-400,oklch(70.7% .022 261.325));display:block;position:absolute}.arrow .text[data-v-70db5286]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.footer[data-v-af644ac3]{min-height:calc(var(--spacing,.25rem)*32);justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex;overflow:hidden}.footer .copy[data-v-af644ac3]{text-align:center;width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1b195509],[data-v-1b195509]:before,[data-v-1b195509]:after,[data-v-1b195509]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.header[data-v-1b195509]{z-index:50;width:100%;height:var(--v6232d06c);position:relative}.header .wrapper[data-v-1b195509]{border-bottom-style:var(--tw-border-style);background-color:var(--color-parent-bg,#fff);border-bottom-width:1px;justify-content:center;width:100%;display:flex;position:fixed}.header .wrapper[data-v-1b195509]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.header .wrapper .inner[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100vw;height:100%;margin-right:calc(100% - 100vw);display:grid;overflow-x:clip}@media(min-width:64rem){.header .wrapper .inner[data-v-1b195509]{max-width:100.438rem}}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:1fr auto 1fr;grid-template-areas:"return-info return-info return-info""prepend logo append""middle middle middle"}.header .wrapper .inner .prepend[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6);grid-area:prepend}.header .wrapper .inner .logo[data-v-1b195509]{grid-area:logo}.header .wrapper .inner .logo a[data-v-1b195509]{width:fit-content;display:block}.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);border-bottom-width:1px;justify-content:center;display:flex}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*0);border-bottom-width:0;justify-content:flex-start}}.header .wrapper .inner .return-info[data-v-1b195509]{grid-area:return-info}.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);--tw-border-style:none;border-style:none}}.header .wrapper .inner .return-info a[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);align-items:center;display:flex}@media(min-width:64rem){.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}}.header .wrapper .inner .middle[data-v-1b195509]{justify-content:center;align-items:center;height:100%;display:flex}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]{padding:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509]{grid-area:middle}.header .wrapper .inner .middle[data-v-1b195509]>*{margin-inline:calc(var(--spacing,.25rem)*2);margin-bottom:calc(var(--spacing,.25rem)*2)}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]>*{margin:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509] .input-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .inline-container-prepended .icon{color:var(--color-primary,#2563eb)}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{border-radius:var(--radius-2xl,1rem);--tw-border-style:none;background-color:var(--color-disabled,#f3f4f6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.4375rem;border-style:none;padding-left:3.25rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input::placeholder{color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media(hover:hover){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:hover{--tw-border-style:none;border-style:none}}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.4375rem;padding-right:calc(var(--spacing,.25rem)*4)}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{padding-block:.6875rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.6875rem}}.header .wrapper .inner .append[data-v-1b195509]{justify-content:flex-end;align-items:center;gap:calc(var(--spacing,.25rem)*4);grid-area:append;display:flex}.header .wrapper .inner .append .icon[data-v-1b195509]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.header .wrapper .inner .append .dropdown[data-v-1b195509] .button{margin-right:calc(var(--spacing,.25rem)*6);padding:calc(var(--spacing,.25rem)*0);background-color:#0000}@media(min-width:1024px){.header[data-v-1b195509],.header .wrapper[data-v-1b195509]{height:calc(var(--spacing,.25rem)*20)}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:2fr 3fr 2fr;grid-template-areas:"logo middle append"}.header .wrapper .inner.left[data-v-1b195509]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-1b195509]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-1b195509]{justify-content:center}.header .wrapper .inner.right[data-v-1b195509]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-1b195509]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-1b195509]{grid-template-columns:1fr 1fr 2fr 2fr;grid-template-areas:"logo return-info middle append"}.header .wrapper .prepend[data-v-1b195509]{display:none}.header .wrapper .logo a[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-19221d31],[data-v-19221d31]:before,[data-v-19221d31]:after,[data-v-19221d31]::backdrop{--tw-font-weight:initial}}}.tab[data-v-19221d31]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-600,oklch(43.9% 0 0))}.tab .tab-count[data-v-19221d31]{margin-left:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:3.40282e38px;display:none}@media(min-width:48rem){.tab .tab-count[data-v-19221d31]{display:inline-block}}.tab.active[data-v-19221d31]{border-color:var(--color-primary-mid,#2f6fe8);color:var(--color-primary-mid,#2f6fe8)}.tab.disabled[data-v-19221d31]{pointer-events:none;cursor:not-allowed;color:var(--color-disabled-text,#9ca3af)}.tab.disabled.active[data-v-19221d31]{border-color:var(--color-disabled-text,#9ca3af)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-51f0b7e0],[data-v-51f0b7e0]:before,[data-v-51f0b7e0]:after,[data-v-51f0b7e0]::backdrop{--tw-space-x-reverse:0;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid;--tw-font-weight:initial}}}.tabs[data-v-51f0b7e0]{display:flex;position:relative}:where(.tabs[data-v-51f0b7e0]>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing,.25rem)*8)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing,.25rem)*8)*calc(1 - var(--tw-space-x-reverse)))}.tabs[data-v-51f0b7e0]{background-color:inherit;--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-gray-200));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tabs[data-v-51f0b7e0] .tab{cursor:pointer;border-bottom-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);white-space:nowrap;border-bottom-width:2px}.tabs[data-v-51f0b7e0] .tab:not(.active){color:var(--color-gray-500,oklch(55.1% .027 264.364));border-color:#0000}.tabs[data-v-51f0b7e0] .tab:not(.active):where(.dark,.dark *){color:var(--color-body-text,#111827)}.tabs[data-v-51f0b7e0] .tab:hover:not(.active){color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media(hover:hover){.tabs[data-v-51f0b7e0] .tab:hover:not(.active):hover{border-color:var(--color-neutral-200,oklch(92.2% 0 0))}}.tabs[data-v-51f0b7e0] .tab:hover:not(.active):where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.tabs[data-v-51f0b7e0] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a2de1f4a],[data-v-a2de1f4a]:before,[data-v-a2de1f4a]:after,[data-v-a2de1f4a]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-tracking:initial}}}.page-header[data-v-a2de1f4a]{background-color:var(--color-body,#fff);position:relative}.page-header.header-sticky[data-v-a2de1f4a]{z-index:21;top:var(--v6db7cc74);position:sticky}.page-header.header-sticky.overlap[data-v-a2de1f4a]{border-bottom-style:var(--tw-border-style);border-bottom-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-shadow:0 12px 12px -16px var(--tw-shadow-color,#0003);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);padding-top:var(--d88fb824)}.page-header.header-sticky.overlap .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*1)}.page-header.header-sticky.overlap .heading h1[data-v-a2de1f4a]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.page-header .back-button-wrapper[data-v-a2de1f4a]{height:calc(var(--spacing,.25rem)*5);width:100%}.page-header h1[data-v-a2de1f4a]{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}@media(min-width:48rem){.page-header h1[data-v-a2de1f4a]{font-size:1.75rem}}.page-header .tabs[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*8)}.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}@media(min-width:48rem){.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*5)}}.page-header .heading .image-wrapper[data-v-a2de1f4a]{width:fit-content}.page-header .heading .image-wrapper[data-v-a2de1f4a] .image{max-height:calc(var(--spacing,.25rem)*14)}.page-header .heading .header-start[data-v-a2de1f4a]{align-items:center;gap:calc(var(--spacing,.25rem)*4);flex-direction:row;display:flex}.page-header .heading .actions[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);margin-left:auto;display:flex}.page-header .heading .title-wrapper[data-v-a2de1f4a]{flex-direction:column;display:flex}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600);--tw-tracking:var(--tracking-tight,-.025em);letter-spacing:var(--tracking-tight,-.025em);color:var(--color-gray-500,oklch(55.1% .027 264.364))}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.page-header .filters[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);display:flex;overflow:auto}@media(min-width:48rem){.page-header .filters[data-v-a2de1f4a]{flex-wrap:wrap}}.page-header .filters .search[data-v-a2de1f4a]{min-width:12rem}@media(min-width:64rem){.page-header .filters .search[data-v-a2de1f4a]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-a2de1f4a]{display:contents}.page-header .filters .filter-group[data-v-a2de1f4a] .title{margin-left:calc(var(--spacing,.25rem)*4)}@property --tw-tracking{syntax:"*";inherits:false}.sidebar[data-v-c4aea807]{border-radius:var(--radius-lg,.5rem);width:100%;max-width:14.5rem;height:100%;overflow:hidden}.sidebar.mini[data-v-c4aea807]{width:2.25rem}.sidebar.mini .menu[data-v-c4aea807]{width:fit-content}.menu[data-v-c4aea807]{gap:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-950,oklch(14.5% 0 0))}.summary[data-v-15250c0d]{width:var(--v5436127c);max-width:100%}.hamburger-icon[data-v-40931657]{cursor:pointer}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbf56868],[data-v-fbf56868]:before,[data-v-fbf56868]:after,[data-v-fbf56868]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-duration:initial}}}[data-v-fbf56868] .progress{transition-duration:var(--v63a26136)!important}.toast[data-v-fbf56868]{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-gray-200,oklch(92.8% .006 264.531));background-color:var(--color-child-alt,#fff);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);width:100%;max-width:24rem;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:relative}.toast[data-v-fbf56868]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.toast .wrapper[data-v-fbf56868]{padding:calc(var(--spacing,.25rem)*4);display:flex}.toast .linear-progress[data-v-fbf56868] .progress-bar{border-bottom-right-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.toast.is-absolute[data-v-fbf56868]{top:calc(var(--spacing,.25rem)*1);right:calc(var(--spacing,.25rem)*1);position:absolute}.toast .type-icon[data-v-fbf56868]{margin-right:calc(var(--spacing,.25rem)*3);flex-shrink:0}.toast .content[data-v-fbf56868]{padding-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-direction:column;display:flex}.toast .content .title[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.toast .content .description[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.toast .content .description[data-v-fbf56868]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.toast .content .actions[data-v-fbf56868]{gap:calc(var(--spacing,.25rem)*2);display:flex}.toast .close[data-v-fbf56868]{top:.5rem;right:calc(var(--spacing,.25rem)*0);position:absolute}.toast .close[data-v-fbf56868] .mini-icon{color:var(--color-gray-400,oklch(70.7% .022 261.325))}.close:hover .mini-icon[data-v-fbf56868]{color:var(--color-black,#000)}.error .type-icon[data-v-fbf56868]{color:var(--color-red-500,oklch(63.7% .237 25.331))}.warning .type-icon[data-v-fbf56868]{color:var(--color-orange-500,oklch(70.5% .213 47.604))}.success .type-icon[data-v-fbf56868]{color:var(--color-green-500,oklch(72.3% .219 149.579))}.info .type-icon[data-v-fbf56868]{color:var(--color-blue-500,oklch(62.3% .214 259.815))}.fade-enter-from[data-v-fbf56868],.fade-leave-to[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*60);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:0}.fade-enter-to[data-v-fbf56868],.fade-leave-from[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:1}.fade-enter-active[data-v-fbf56868],.fade-leave-active[data-v-fbf56868]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;transition-duration:.3s}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-duration{syntax:"*";inherits:false}.toast-group[data-v-741facc4]{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);z-index:100;gap:calc(var(--spacing,.25rem)*4);max-height:100vh;padding:calc(var(--spacing,.25rem)*4);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));scrollbar-width:none;flex-direction:column;display:flex;position:fixed;overflow:hidden auto}.page-layout[data-v-312f26ad]{flex-direction:column;display:flex;position:relative;overflow-x:clip}.page-layout .wrap[data-v-312f26ad]{flex-direction:column;align-self:center;width:100vw;height:100%;margin-right:calc(100% - 100vw);display:flex}@media(min-width:64rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*5);max-width:100.438rem;padding-inline:calc(var(--spacing,.25rem)*6);flex-direction:row}}@media(min-width:96rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*20)}}.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6)}@media(min-width:64rem){.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout.layout-mirrored .main[data-v-312f26ad]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-312f26ad]{order:2}.page-layout .sidebar[data-v-312f26ad]{margin-bottom:calc(var(--spacing,.25rem)*4);height:100%;position:sticky}@media(min-width:64rem){.page-layout .sidebar[data-v-312f26ad]{margin-top:calc(var(--spacing,.25rem)*10)}}.page-layout .sidebar[data-v-312f26ad]{top:var(--v7ed39e1a)}.page-layout .sidebar-left[data-v-312f26ad]{display:none}@media(min-width:64rem){.page-layout .sidebar-left[data-v-312f26ad]{display:block}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]{width:fit-content;max-width:calc(var(--spacing,.25rem)*40)}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]{width:100%;max-width:14.5rem}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*4)}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout .sidebar-right[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*4);padding-top:calc(var(--spacing,.25rem)*0)}@media(min-width:64rem){.page-layout .sidebar-right[data-v-312f26ad]{padding:calc(var(--spacing,.25rem)*0);padding-top:calc(var(--spacing,.25rem)*4)}}.page-layout .main[data-v-312f26ad]{min-width:calc(var(--spacing,.25rem)*0);padding-block:calc(var(--spacing,.25rem)*4);flex-grow:1}@media(min-width:64rem){.page-layout .main[data-v-312f26ad]{padding-block:calc(var(--spacing,.25rem)*10)}}.persistent .label .badge[data-v-9ccdf55b]{margin-right:.375rem}.persistent .label .micro-icon[data-v-9ccdf55b]{margin-left:calc(var(--spacing,.25rem)*1)}.persistent .label .micro-icon[data-v-9ccdf55b]:where(.dark,.dark *){color:inherit}.persistent[data-v-9ccdf55b] .menu .current{color:var(--color-neutral-950,oklch(14.5% 0 0))!important}.persistent[data-v-9ccdf55b] .menu .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1d398f2d],[data-v-1d398f2d]:before,[data-v-1d398f2d]:after,[data-v-1d398f2d]::backdrop{--tw-border-style:solid}}}.step-connector[data-v-1d398f2d]:not(.absolute){flex:1}.step-connector.absolute[data-v-1d398f2d]{top:9.1px;left:calc(11px - 50%);right:calc(50% + 11px)}.step-connector .horizontal-line[data-v-1d398f2d]{border-top-style:var(--tw-border-style);border-top-width:.4rem;border-color:var(--color-neutral-100,oklch(97% 0 0));display:block}.step-connector .horizontal-line[data-v-1d398f2d]:where(.dark,.dark *){border-color:var(--color-input-border,#d1d5db)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a323e4e3],[data-v-a323e4e3]:before,[data-v-a323e4e3]:after,[data-v-a323e4e3]::backdrop{--tw-content:"";--tw-font-weight:initial}}}.step[data-v-a323e4e3]:not(.xs){flex-direction:column;flex:1;align-items:center;display:flex;position:relative}.step .step-content[data-v-a323e4e3]{flex-direction:column;align-items:center;display:flex}.step .step-content .step-state[data-v-a323e4e3]{z-index:1;height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);background-color:var(--color-neutral-100,oklch(97% 0 0));font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.step .step-content .step-state[data-v-a323e4e3]:where(.dark,.dark *){background-color:var(--color-input-border,#d1d5db)}.step .step-content .step-state.active[data-v-a323e4e3]:before{z-index:1;height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);opacity:.1;--tw-content:"";content:var(--tw-content);border-radius:3.40282e38px;position:absolute}.step .step-content .step-state .micro-icon[data-v-a323e4e3]{color:var(--color-white,#fff)}.step .step-content .label[data-v-a323e4e3]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.step .step-content .label.unfinished[data-v-a323e4e3]{color:var(--color-gray-450,#848b98)}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-102893cf],[data-v-102893cf]:before,[data-v-102893cf]:after,[data-v-102893cf]::backdrop{--tw-font-weight:initial}}}.stepper[data-v-102893cf]{z-index:1}.stepper.xs .wrapper[data-v-102893cf]{align-items:center}.stepper.xs .wrapper[data-v-102893cf] .step-connector:first-child .horizontal-line{border-top-left-radius:3.40282e38px;border-bottom-left-radius:3.40282e38px}.stepper.xs .wrapper[data-v-102893cf] .step-connector:last-child .horizontal-line{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.stepper[data-v-102893cf]:not(.xs){justify-content:space-between}.stepper.default[data-v-102893cf] .step-connector .active{border-color:var(--color-primary,#2563eb)}:is(.stepper.default[data-v-102893cf] .step-state.finished,.stepper.default[data-v-102893cf] .step-state.active,.stepper.default[data-v-102893cf] .step-state.active:before){background-color:var(--color-primary,#2563eb)}.stepper.default[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.error[data-v-102893cf] .step-connector .active{border-color:var(--color-error-tertiary,#e73c3e)}:is(.stepper.error[data-v-102893cf] .step-state.finished,.stepper.error[data-v-102893cf] .step-state.active,.stepper.error[data-v-102893cf] .step-state.active:before){background-color:var(--color-error-tertiary,#e73c3e)}.stepper.error[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.warning[data-v-102893cf] .step-connector .active{border-color:var(--color-amber-400,oklch(82.8% .189 84.429))}:is(.stepper.warning[data-v-102893cf] .step-state.finished,.stepper.warning[data-v-102893cf] .step-state.active,.stepper.warning[data-v-102893cf] .step-state.active:before){background-color:var(--color-amber-400,oklch(82.8% .189 84.429))}.stepper.warning[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper.success[data-v-102893cf] .step-connector .active{border-color:var(--color-success-tertiary,#22c55e)}:is(.stepper.success[data-v-102893cf] .step-state.finished,.stepper.success[data-v-102893cf] .step-state.active,.stepper.success[data-v-102893cf] .step-state.active:before){background-color:var(--color-success-tertiary,#22c55e)}.stepper.success[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.disabled[data-v-102893cf] .step-connector .active{background-color:var(--color-input-border,#d1d5db)}:is(.stepper.disabled[data-v-102893cf] .step-state.finished,.stepper.disabled[data-v-102893cf] .step-state.active,.stepper.disabled[data-v-102893cf] .step-state.active:before){background-color:var(--color-input-border,#d1d5db)}.stepper.disabled[data-v-102893cf] .step-state.active:before{background-color:var(--color-neutral-400,oklch(70.8% 0 0))}.stepper.disabled[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper .wrapper[data-v-102893cf]{flex-direction:row;display:flex;position:relative}.stepper .active-step[data-v-102893cf]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}@property --tw-font-weight{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3fc06f56],[data-v-3fc06f56]:before,[data-v-3fc06f56]:after,[data-v-3fc06f56]::backdrop{--tw-border-style:solid}}}.filter-tabs[data-v-3fc06f56]{justify-content:space-between;gap:.5625rem;display:flex}[data-v-3fc06f56] .tab{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);padding-right:.625rem;padding-left:calc(var(--spacing,.25rem)*4);border-width:1px;flex-grow:1;justify-content:space-between;align-items:center;display:flex}[data-v-3fc06f56] .tab:not(.active){border-color:var(--color-border-primary,#d1d5db)}[data-v-3fc06f56] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}[data-v-3fc06f56] .tab.active{border-style:var(--tw-border-style);border-width:2px;padding-left:.9375rem;padding-right:.5625rem}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}.container{position:relative;height:100%;color:var(--color-body-text);font-family:var(--font-sans)}.container #probo-product-search-bar{outline:none}.container span.option{display:flex;gap:1rem;align-items:center}.container span.option .title{font-size:1.125rem;font-weight:600;display:block}.container span.option .subtitle{color:#6a7282;font-size:.875rem;line-height:1.25rem;margin-top:.25rem;display:block}`, Gv = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of t)
    a[r] = o;
  return a;
}, Jv = { class: "container" }, Yv = {
  __name: "PProductConfiguratorEditor.ce",
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
    },
    hideDeliverySection: Boolean
  },
  setup(e) {
    const t = e, a = Je(new Wv({ proxy: "" })), r = Y(null);
    ve(a, () => {
      a.language && a.setLanguage(a.language);
    });
    const o = V({
      get: () => a.getConfig(),
      set: (n) => {
        r.value && clearTimeout(r.value), a.updateExternal && (r.value = setTimeout(() => {
          a.setOption(n).getNextOption();
        }, 300));
      }
    }), i = V({
      get: () => a.overwrites.find((n) => n.code === a.product.code) || {},
      set: (n) => {
        a.overwrites.some((s) => s.code === a.product.code) ? a.overwrites = a.overwrites.map(
          (s) => s.code === a.product.code ? { ...s, ...n } : s
        ) : a.overwrites.push(n);
      }
    });
    return dt(async () => {
      window.connectConfiguratorEditor = a, a.isEditor = !0, t.proxy && (a.init({
        proxy: t.proxy,
        language: t.language,
        priceType: t.priceType,
        storeProductsLocally: t.storeProductsLocally,
        callbackUrl: t.callbackUrl,
        internalProductId: t.internalProductId,
        hideDeliverySection: t.hideDeliverySection
      }), t.productCode && await (await a.setProduct(t.productCode)).getNextOption());
    }), (n, l) => (y(), z("div", Jv, [
      a.alert.title ? (y(), ee(k(Jr), Nr(De({ key: 0 }, a.alert)), null, 16)) : Z("", !0),
      q(k(Ov), {
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (s) => o.value = s),
        overwrites: i.value,
        "onUpdate:overwrites": l[1] || (l[1] = (s) => i.value = s),
        template: a.options,
        "accordion-state": a.openState,
        loading: a.loading,
        "delivery-options": a.deliveryOptions,
        "hide-delivery-section": a.hideDeliverySection,
        editor: "",
        "product-code": a.product.code
      }, null, 8, ["modelValue", "overwrites", "template", "accordion-state", "loading", "delivery-options", "hide-delivery-section", "product-code"])
    ]));
  }
}, lr = /* @__PURE__ */ Gv(Yv, [["styles", [Zv]]]), Xv = /* @__PURE__ */ kc({
  ...lr,
  setup(e, t) {
    return Oo(lr).use(Bc), Wt.autoDetectLanguage = !1, lr.setup ? lr.setup(e, t) : null;
  }
});
customElements.define("connect-configurator-editor", Xv);
