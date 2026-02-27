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
const we = {}, ya = [], pt = () => {
}, pn = () => !1, Vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Io = (e) => e.startsWith("onUpdate:"), Ee = Object.assign, Mo = (e, t) => {
  const a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}, ls = Object.prototype.hasOwnProperty, xe = (e, t) => ls.call(e, t), ae = Array.isArray, xa = (e) => Ya(e) === "[object Map]", Ca = (e) => Ya(e) === "[object Set]", si = (e) => Ya(e) === "[object Date]", de = (e) => typeof e == "function", Oe = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", fn = (e) => (Se(e) || de(e)) && de(e.then) && de(e.catch), hn = Object.prototype.toString, Ya = (e) => hn.call(e), ss = (e) => Ya(e).slice(8, -1), Pr = (e) => Ya(e) === "[object Object]", No = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pa = /* @__PURE__ */ jo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((a) => t[a] || (t[a] = e(a)));
}, ds = /-\w/g, Le = jr(
  (e) => e.replace(ds, (t) => t.slice(1).toUpperCase())
), cs = /\B([A-Z])/g, Ge = jr(
  (e) => e.replace(cs, "-$1").toLowerCase()
), Ir = jr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xr = jr(
  (e) => e ? `on${Ir(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), dr = (e, ...t) => {
  for (let a = 0; a < e.length; a++)
    e[a](...t);
}, vn = (e, t, a, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: a
  });
}, Mr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, vo = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let di;
const Nr = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jt(e) {
  if (ae(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const r = e[a], o = Oe(r) ? hs(r) : Jt(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Oe(e) || Se(e))
    return e;
}
const us = /;(?![^(]*\))/g, ps = /:([^]+)/, fs = /\/\*[^]*?\*\//g;
function hs(e) {
  const t = {};
  return e.replace(fs, "").split(us).forEach((a) => {
    if (a) {
      const r = a.split(ps);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ve(e) {
  let t = "";
  if (Oe(e))
    t = e;
  else if (ae(e))
    for (let a = 0; a < e.length; a++) {
      const r = ve(e[a]);
      r && (t += r + " ");
    }
  else if (Se(e))
    for (const a in e)
      e[a] && (t += a + " ");
  return t.trim();
}
function Br(e) {
  if (!e) return null;
  let { class: t, style: a } = e;
  return t && !Oe(t) && (e.class = ve(t)), a && (e.style = Jt(a)), e;
}
const vs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ms = /* @__PURE__ */ jo(vs);
function mn(e) {
  return !!e || e === "";
}
function gs(e, t) {
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
  if (a = vt(e), r = vt(t), a || r)
    return e === t;
  if (a = ae(e), r = ae(t), a || r)
    return a && r ? gs(e, t) : !1;
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
const gn = (e) => !!(e && e.__v_isRef === !0), q = (e) => Oe(e) ? e : e == null ? "" : ae(e) || Se(e) && (e.toString === hn || !de(e.toString)) ? gn(e) ? q(e.value) : JSON.stringify(e, bn, 2) : String(e), bn = (e, t) => gn(t) ? bn(e, t.value) : xa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (a, [r, o], i) => (a[Qr(r, i) + " =>"] = o, a),
    {}
  )
} : Ca(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((a) => Qr(a))
} : vt(t) ? Qr(t) : Se(t) && !ae(t) && !Pr(t) ? String(t) : t, Qr = (e, t = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vt(e) ? `Symbol(${(a = e.description) != null ? a : t})` : e
  );
};
function bs(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ie;
class ws {
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
function ys(e, t = !1) {
  Ie && Ie.cleanups.push(e);
}
let ze;
const eo = /* @__PURE__ */ new WeakSet();
class wn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, eo.has(this) && (eo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ci(this), kn(this);
    const t = ze, a = ft;
    ze = this, ft = !0;
    try {
      return this.fn();
    } finally {
      _n(this), ze = t, ft = a, this.flags &= -3;
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
    this.flags & 64 ? eo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let yn = 0, ja, Ia;
function xn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ia, Ia = e;
    return;
  }
  e.next = ja, ja = e;
}
function Do() {
  yn++;
}
function Fo() {
  if (--yn > 0)
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
function kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function _n(e) {
  let t, a = e.depsTail, r = a;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === a && (a = o), Ro(r), xs(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = a;
}
function mo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($n(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $n(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === La) || (e.globalVersion = La, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !mo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, a = ze, r = ft;
  ze = e, ft = !0;
  try {
    kn(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ze(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ze = a, ft = r, _n(e), e.flags &= -3;
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
function xs(e) {
  const { prevDep: t, nextDep: a } = e;
  t && (t.nextDep = a, e.prevDep = void 0), a && (a.prevDep = t, e.nextDep = void 0);
}
let ft = !0;
const Sn = [];
function Nt() {
  Sn.push(ft), ft = !1;
}
function Bt() {
  const e = Sn.pop();
  ft = e === void 0 ? !0 : e;
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
class ks {
  constructor(t, a) {
    this.sub = t, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Lr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ze || !ft || ze === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== ze)
      a = this.activeLink = new ks(ze, this), ze.deps ? (a.prevDep = ze.depsTail, ze.depsTail.nextDep = a, ze.depsTail = a) : ze.deps = ze.depsTail = a, Cn(a);
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
function Cn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Cn(r);
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
  if (ft && ze) {
    let r = go.get(e);
    r || go.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(a);
    o || (r.set(a, o = new Lr()), o.map = r, o.key = a), o.track();
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
    const s = ae(e), d = s && No(a);
    if (s && a === "length") {
      const c = Number(r);
      n.forEach((u, p) => {
        (p === "length" || p === Da || !vt(p) && p >= c) && l(u);
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
  return t === e ? t : (Me(t, "iterate", Da), lt(e) ? t : t.map(Pe));
}
function Dr(e) {
  return Me(e = ye(e), "iterate", Da), e;
}
const _s = {
  __proto__: null,
  [Symbol.iterator]() {
    return to(this, Symbol.iterator, Pe);
  },
  concat(...e) {
    return ha(this).concat(
      ...e.map((t) => ae(t) ? ha(t) : t)
    );
  },
  entries() {
    return to(this, "entries", (e) => (e[1] = Pe(e[1]), e));
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
    return ao(this, "includes", e);
  },
  indexOf(...e) {
    return ao(this, "indexOf", e);
  },
  join(e) {
    return ha(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ao(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Oa(this, "pop");
  },
  push(...e) {
    return Oa(this, "push", e);
  },
  reduce(e, ...t) {
    return ui(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ui(this, "reduceRight", e, t);
  },
  shift() {
    return Oa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Oa(this, "splice", e);
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
    return Oa(this, "unshift", e);
  },
  values() {
    return to(this, "values", Pe);
  }
};
function to(e, t, a) {
  const r = Dr(e), o = r[t]();
  return r !== e && !lt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = a(i.value)), i;
  }), o;
}
const $s = Array.prototype;
function Et(e, t, a, r, o, i) {
  const n = Dr(e), l = n !== e && !lt(e), s = n[t];
  if (s !== $s[t]) {
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
  const o = Dr(e);
  let i = a;
  return o !== e && (lt(e) ? a.length > 3 && (i = function(n, l, s) {
    return a.call(this, n, l, s, e);
  }) : i = function(n, l, s) {
    return a.call(this, n, Pe(l), s, e);
  }), o[t](i, ...r);
}
function ao(e, t, a) {
  const r = ye(e);
  Me(r, "iterate", Da);
  const o = r[t](...a);
  return (o === -1 || o === !1) && Ho(a[0]) ? (a[0] = ye(a[0]), r[t](...a)) : o;
}
function Oa(e, t, a = []) {
  Nt(), Do();
  const r = ye(e)[t].apply(e, a);
  return Fo(), Bt(), r;
}
const Ss = /* @__PURE__ */ jo("__proto__,__v_isRef,__isVue"), zn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt)
);
function Cs(e) {
  vt(e) || (e = String(e));
  const t = ye(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class En {
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
      return r === (o ? i ? Ms : Vn : i ? An : Tn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const n = ae(t);
    if (!o) {
      let s;
      if (n && (s = _s[a]))
        return s;
      if (a === "hasOwnProperty")
        return Cs;
    }
    const l = Reflect.get(
      t,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ae(t) ? t : r
    );
    if ((vt(a) ? zn.has(a) : Ss(a)) || (o || Me(t, "get", a), i))
      return l;
    if (Ae(l)) {
      const s = n && No(a) ? l : l.value;
      return o && Se(s) ? yo(s) : s;
    }
    return Se(l) ? o ? yo(l) : Je(l) : l;
  }
}
class On extends En {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, a, r, o) {
    let i = t[a];
    if (!this._isShallow) {
      const s = Lt(i);
      if (!lt(r) && !Lt(r) && (i = ye(i), r = ye(r)), !ae(t) && Ae(i) && !Ae(r))
        return s || (i.value = r), !0;
    }
    const n = ae(t) && No(a) ? Number(a) < t.length : xe(t, a), l = Reflect.set(
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
    return (!vt(a) || !zn.has(a)) && Me(t, "has", a), r;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      ae(t) ? "length" : na
    ), Reflect.ownKeys(t);
  }
}
class zs extends En {
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
const Es = /* @__PURE__ */ new On(), Os = /* @__PURE__ */ new zs(), Ts = /* @__PURE__ */ new On(!0);
const wo = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function As(e, t, a) {
  return function(...r) {
    const o = this.__v_raw, i = ye(o), n = xa(i), l = e === "entries" || e === Symbol.iterator && n, s = e === "keys" && n, d = o[e](...r), c = a ? wo : t ? mr : Pe;
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
function Vs(e, t) {
  const a = {
    get(o) {
      const i = this.__v_raw, n = ye(i), l = ye(o);
      e || (Ze(o, l) && Me(n, "get", o), Me(n, "get", l));
      const { has: s } = ar(n), d = t ? wo : e ? mr : Pe;
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
      const n = this, l = n.__v_raw, s = ye(l), d = t ? wo : e ? mr : Pe;
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
        !t && !lt(o) && !Lt(o) && (o = ye(o));
        const i = ye(this);
        return ar(i).has.call(i, o) || (i.add(o), Vt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !lt(i) && !Lt(i) && (i = ye(i));
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
    a[o] = As(o, e, t);
  }), a;
}
function Uo(e, t) {
  const a = Vs(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    xe(a, o) && o in r ? a : r,
    o,
    i
  );
}
const Ps = {
  get: /* @__PURE__ */ Uo(!1, !1)
}, js = {
  get: /* @__PURE__ */ Uo(!1, !0)
}, Is = {
  get: /* @__PURE__ */ Uo(!0, !1)
};
const Tn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap();
function Ns(e) {
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
function Bs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ns(ss(e));
}
function Je(e) {
  return Lt(e) ? e : qo(
    e,
    !1,
    Es,
    Ps,
    Tn
  );
}
function Ls(e) {
  return qo(
    e,
    !1,
    Ts,
    js,
    An
  );
}
function yo(e) {
  return qo(
    e,
    !0,
    Os,
    Is,
    Vn
  );
}
function qo(e, t, a, r, o) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Bs(e);
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
  return Lt(e) ? la(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Lt(e) {
  return !!(e && e.__v_isReadonly);
}
function lt(e) {
  return !!(e && e.__v_isShallow);
}
function Ho(e) {
  return e ? !!e.__v_raw : !1;
}
function ye(e) {
  const t = e && e.__v_raw;
  return t ? ye(t) : e;
}
function Ds(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && vn(e, "__v_skip", !0), e;
}
const Pe = (e) => Se(e) ? Je(e) : e, mr = (e) => Se(e) ? yo(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ee(e) {
  return Pn(e, !1);
}
function St(e) {
  return Pn(e, !0);
}
function Pn(e, t) {
  return Ae(e) ? e : new Fs(e, t);
}
class Fs {
  constructor(t, a) {
    this.dep = new Lr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? t : ye(t), this._value = a ? t : Pe(t), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const a = this._rawValue, r = this.__v_isShallow || lt(t) || Lt(t);
    t = r ? t : ye(t), Ze(t, a) && (this._rawValue = t, this._value = r ? t : Pe(t), this.dep.trigger());
  }
}
function pi(e) {
  e.dep && e.dep.trigger();
}
function k(e) {
  return Ae(e) ? e.value : e;
}
function st(e) {
  return de(e) ? e() : k(e);
}
const Rs = {
  get: (e, t, a) => t === "__v_raw" ? e : k(Reflect.get(e, t, a)),
  set: (e, t, a, r) => {
    const o = e[t];
    return Ae(o) && !Ae(a) ? (o.value = a, !0) : Reflect.set(e, t, a, r);
  }
};
function jn(e) {
  return la(e) ? e : new Proxy(e, Rs);
}
class Us {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const a = this.dep = new Lr(), { get: r, set: o } = t(a.track.bind(a), a.trigger.bind(a));
    this._get = r, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function qs(e) {
  return new Us(e);
}
class Hs {
  constructor(t, a, r) {
    this.fn = t, this.setter = a, this._value = void 0, this.dep = new Lr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = La - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ze !== this)
      return xn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $n(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ks(e, t, a = !1) {
  let r, o;
  return de(e) ? r = e : (r = e.get, o = e.set), new Hs(r, o, a);
}
const or = {}, gr = /* @__PURE__ */ new WeakMap();
let ra;
function Ws(e, t = !1, a = ra) {
  if (a) {
    let r = gr.get(a);
    r || gr.set(a, r = []), r.push(e);
  }
}
function Zs(e, t, a = we) {
  const { immediate: r, deep: o, once: i, scheduler: n, augmentJob: l, call: s } = a, d = (g) => o ? g : lt(g) || o === !1 || o === 0 ? Pt(g, 1) : Pt(g);
  let c, u, p, f, h = !1, m = !1;
  if (Ae(e) ? (u = () => e.value, h = lt(e)) : la(e) ? (u = () => d(e), h = !0) : ae(e) ? (m = !0, h = e.some((g) => la(g) || lt(g)), u = () => e.map((g) => {
    if (Ae(g))
      return g.value;
    if (la(g))
      return d(g);
    if (de(g))
      return s ? s(g, 2) : g();
  })) : de(e) ? t ? u = s ? () => s(e, 2) : e : u = () => {
    if (p) {
      Nt();
      try {
        p();
      } finally {
        Bt();
      }
    }
    const g = ra;
    ra = c;
    try {
      return s ? s(e, 3, [f]) : e(f);
    } finally {
      ra = g;
    }
  } : u = pt, t && o) {
    const g = u, E = o === !0 ? 1 / 0 : o;
    u = () => Pt(g(), E);
  }
  const _ = Lo(), y = () => {
    c.stop(), _ && _.active && Mo(_.effects, c);
  };
  if (i && t) {
    const g = t;
    t = (...E) => {
      g(...E), y();
    };
  }
  let x = m ? new Array(e.length).fill(or) : or;
  const $ = (g) => {
    if (!(!(c.flags & 1) || !c.dirty && !g))
      if (t) {
        const E = c.run();
        if (o || h || (m ? E.some((z, H) => Ze(z, x[H])) : Ze(E, x))) {
          p && p();
          const z = ra;
          ra = c;
          try {
            const H = [
              E,
              // pass undefined as the old value when it's changed for the first time
              x === or ? void 0 : m && x[0] === or ? [] : x,
              f
            ];
            x = E, s ? s(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            ra = z;
          }
        }
      } else
        c.run();
  };
  return l && l($), c = new wn(u), c.scheduler = n ? () => n($, !1) : $, f = (g) => Ws(g, !1, c), p = c.onStop = () => {
    const g = gr.get(c);
    if (g) {
      if (s)
        s(g, 4);
      else
        for (const E of g) E();
      gr.delete(c);
    }
  }, t ? r ? $(!0) : x = c.run() : n ? n($.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function Pt(e, t = 1 / 0, a) {
  if (t <= 0 || !Se(e) || e.__v_skip || (a = a || /* @__PURE__ */ new Map(), (a.get(e) || 0) >= t))
    return e;
  if (a.set(e, t), t--, Ae(e))
    Pt(e.value, t, a);
  else if (ae(e))
    for (let r = 0; r < e.length; r++)
      Pt(e[r], t, a);
  else if (Ca(e) || xa(e))
    e.forEach((r) => {
      Pt(r, t, a);
    });
  else if (Pr(e)) {
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
    Fr(o, t, a);
  }
}
function mt(e, t, a, r) {
  if (de(e)) {
    const o = Xa(e, t, a, r);
    return o && fn(o) && o.catch((i) => {
      Fr(i, t, a);
    }), o;
  }
  if (ae(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(mt(e[i], t, a, r));
    return o;
  }
}
function Fr(e, t, a, r = !0) {
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
      Nt(), Xa(i, null, 10, [
        e,
        s,
        d
      ]), Bt();
      return;
    }
  }
  Gs(e, a, o, r, n);
}
function Gs(e, t, a, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Re = [];
let kt = -1;
const ka = [];
let Rt = null, ba = 0;
const In = /* @__PURE__ */ Promise.resolve();
let br = null;
function Ct(e) {
  const t = br || In;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Js(e) {
  let t = kt + 1, a = Re.length;
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
    !(e.flags & 2) && t >= Fa(a) ? Re.push(e) : Re.splice(Js(t), 0, e), e.flags |= 1, Mn();
  }
}
function Mn() {
  br || (br = In.then(Ln));
}
function Nn(e) {
  ae(e) ? ka.push(...e) : Rt && e.id === -1 ? Rt.splice(ba + 1, 0, e) : e.flags & 1 || (ka.push(e), e.flags |= 1), Mn();
}
function fi(e, t, a = kt + 1) {
  for (; a < Re.length; a++) {
    const r = Re[a];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Re.splice(a, 1), a--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Bn(e) {
  if (ka.length) {
    const t = [...new Set(ka)].sort(
      (a, r) => Fa(a) - Fa(r)
    );
    if (ka.length = 0, Rt) {
      Rt.push(...t);
      return;
    }
    for (Rt = t, ba = 0; ba < Rt.length; ba++) {
      const a = Rt[ba];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    Rt = null, ba = 0;
  }
}
const Fa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ln(e) {
  try {
    for (kt = 0; kt < Re.length; kt++) {
      const t = Re[kt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; kt < Re.length; kt++) {
      const t = Re[kt];
      t && (t.flags &= -2);
    }
    kt = -1, Re.length = 0, Bn(), br = null, (Re.length || ka.length) && Ln();
  }
}
let je = null, Dn = null;
function wr(e) {
  const t = je;
  return je = e, Dn = e && e.type.__scopeId || null, t;
}
function L(e, t = je, a) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && _r(-1);
    const i = wr(t);
    let n;
    try {
      n = e(...o);
    } finally {
      wr(i), r._d && _r(1);
    }
    return n;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ca(e, t) {
  if (je === null)
    return e;
  const a = Zr(je), r = e.dirs || (e.dirs = []);
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
    s && (Nt(), mt(s, a, 8, [
      e.el,
      l,
      e,
      t
    ]), Bt());
  }
}
const Ys = Symbol("_vte"), Fn = (e) => e.__isTeleport, At = Symbol("_leaveCb"), ir = Symbol("_enterCb");
function Xs() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ct(() => {
    e.isMounted = !0;
  }), pa(() => {
    e.isUnmounting = !0;
  }), e;
}
const at = [Function, Array], Rn = {
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
}, Un = (e) => {
  const t = e.subTree;
  return t.component ? Un(t.component) : t;
}, Qs = {
  name: "BaseTransition",
  props: Rn,
  setup(e, { slots: t }) {
    const a = gt(), r = Xs();
    return () => {
      const o = t.default && Kn(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = qn(o), n = ye(e), { mode: l } = n;
      if (r.isLeaving)
        return ro(i);
      const s = hi(i);
      if (!s)
        return ro(i);
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
      if (c && c.type !== Ne && !oa(c, s) && Un(a).type !== Ne) {
        let u = xo(
          c,
          n,
          r,
          a
        );
        if (Ra(c, u), l === "out-in" && s.type !== Ne)
          return r.isLeaving = !0, u.afterLeave = () => {
            r.isLeaving = !1, a.job.flags & 8 || a.update(), delete u.afterLeave, c = void 0;
          }, ro(i);
        l === "in-out" && s.type !== Ne ? u.delayLeave = (p, f, h) => {
          const m = Hn(
            r,
            c
          );
          m[String(c.key)] = c, p[At] = () => {
            f(), p[At] = void 0, delete d.delayedLeave, c = void 0;
          }, d.delayedLeave = () => {
            h(), delete d.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function qn(e) {
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
const ed = Qs;
function Hn(e, t) {
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
    onLeave: f,
    onAfterLeave: h,
    onLeaveCancelled: m,
    onBeforeAppear: _,
    onAppear: y,
    onAfterAppear: x,
    onAppearCancelled: $
  } = t, g = String(e.key), E = Hn(a, e), z = (Z, V) => {
    Z && mt(
      Z,
      r,
      9,
      V
    );
  }, H = (Z, V) => {
    const re = V[1];
    z(Z, V), ae(Z) ? Z.every((R) => R.length <= 1) && re() : Z.length <= 1 && re();
  }, G = {
    mode: n,
    persisted: l,
    beforeEnter(Z) {
      let V = s;
      if (!a.isMounted)
        if (i)
          V = _ || s;
        else
          return;
      Z[At] && Z[At](
        !0
        /* cancelled */
      );
      const re = E[g];
      re && oa(e, re) && re.el[At] && re.el[At](), z(V, [Z]);
    },
    enter(Z) {
      let V = d, re = c, R = u;
      if (!a.isMounted)
        if (i)
          V = y || d, re = x || c, R = $ || u;
        else
          return;
      let M = !1;
      const D = Z[ir] = (O) => {
        M || (M = !0, O ? z(R, [Z]) : z(re, [Z]), G.delayedLeave && G.delayedLeave(), Z[ir] = void 0);
      };
      V ? H(V, [Z, D]) : D();
    },
    leave(Z, V) {
      const re = String(e.key);
      if (Z[ir] && Z[ir](
        !0
        /* cancelled */
      ), a.isUnmounting)
        return V();
      z(p, [Z]);
      let R = !1;
      const M = Z[At] = (D) => {
        R || (R = !0, V(), D ? z(m, [Z]) : z(h, [Z]), Z[At] = void 0, E[re] === e && delete E[re]);
      };
      E[re] = e, f ? H(f, [Z, M]) : M();
    },
    clone(Z) {
      const V = xo(
        Z,
        t,
        a,
        r,
        o
      );
      return o && o(V), V;
    }
  };
  return G;
}
function ro(e) {
  if (Rr(e))
    return e = Kt(e), e.children = null, e;
}
function hi(e) {
  if (!Rr(e))
    return Fn(e.type) && e.children ? qn(e.children) : e;
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
function Kn(e, t = !1, a) {
  let r = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    const l = a == null ? n.key : String(a) + String(n.key != null ? n.key : i);
    n.type === _e ? (n.patchFlag & 128 && o++, r = r.concat(
      Kn(n.children, t, l)
    )) : (t || n.type !== Ne) && r.push(l != null ? Kt(n, { key: l }) : n);
  }
  if (o > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function td(e, t) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ee({ name: e.name }, t, { setup: e })
  ) : e;
}
function Wn(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Qa(e) {
  const t = gt(), a = St(null);
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
const yr = /* @__PURE__ */ new WeakMap();
function Ma(e, t, a, r, o = !1) {
  if (ae(e)) {
    e.forEach(
      (h, m) => Ma(
        h,
        t && (ae(t) ? t[m] : t),
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
  const i = r.shapeFlag & 4 ? Zr(r.component) : r.el, n = o ? null : i, { i: l, r: s } = e, d = t && t.r, c = l.refs === we ? l.refs = {} : l.refs, u = l.setupState, p = ye(u), f = u === we ? pn : (h) => xe(p, h);
  if (d != null && d !== s) {
    if (vi(t), Oe(d))
      c[d] = null, f(d) && (u[d] = null);
    else if (Ae(d)) {
      d.value = null;
      const h = t;
      h.k && (c[h.k] = null);
    }
  }
  if (de(s))
    Xa(s, l, 12, [n, c]);
  else {
    const h = Oe(s), m = Ae(s);
    if (h || m) {
      const _ = () => {
        if (e.f) {
          const y = h ? f(s) ? u[s] : c[s] : s.value;
          if (o)
            ae(y) && Mo(y, i);
          else if (ae(y))
            y.includes(i) || y.push(i);
          else if (h)
            c[s] = [i], f(s) && (u[s] = c[s]);
          else {
            const x = [i];
            s.value = x, e.k && (c[e.k] = x);
          }
        } else h ? (c[s] = n, f(s) && (u[s] = n)) : m && (s.value = n, e.k && (c[e.k] = n));
      };
      if (n) {
        const y = () => {
          _(), yr.delete(e);
        };
        y.id = -1, yr.set(e, y), Xe(y, a);
      } else
        vi(e), _();
    }
  }
}
function vi(e) {
  const t = yr.get(e);
  t && (t.flags |= 8, yr.delete(e));
}
Nr().requestIdleCallback;
Nr().cancelIdleCallback;
const _a = (e) => !!e.type.__asyncLoader, Rr = (e) => e.type.__isKeepAlive;
function ad(e, t) {
  Zn(e, "a", t);
}
function rd(e, t) {
  Zn(e, "da", t);
}
function Zn(e, t, a = Be) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = a;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ur(t, r, a), a) {
    let o = a.parent;
    for (; o && o.parent; )
      Rr(o.parent.vnode) && od(r, t, a, o), o = o.parent;
  }
}
function od(e, t, a, r) {
  const o = Ur(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  qr(() => {
    Mo(r[t], o);
  }, a);
}
function Ur(e, t, a = Be, r = !1) {
  if (a) {
    const o = a[e] || (a[e] = []), i = t.__weh || (t.__weh = (...n) => {
      Nt();
      const l = er(a), s = mt(t, a, e, n);
      return l(), Bt(), s;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Dt = (e) => (t, a = Be) => {
  (!Ha || e === "sp") && Ur(e, (...r) => t(...r), a);
}, Gn = Dt("bm"), ct = Dt("m"), Jn = Dt(
  "bu"
), id = Dt("u"), pa = Dt(
  "bum"
), qr = Dt("um"), nd = Dt(
  "sp"
), ld = Dt("rtg"), sd = Dt("rtc");
function dd(e, t = Be) {
  Ur("ec", e, t);
}
const cd = "components", Yn = Symbol.for("v-ndc");
function $a(e) {
  return Oe(e) ? ud(cd, e, !1) || e : e || Yn;
}
function ud(e, t, a = !0, r = !1) {
  const o = je || Be;
  if (o) {
    const i = o.type;
    {
      const l = Jd(
        i,
        !1
      );
      if (l && (l === t || l === Le(t) || l === Ir(Le(t))))
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
  return e && (e[t] || e[Le(t)] || e[Ir(Le(t))]);
}
function Ht(e, t, a, r) {
  let o;
  const i = a, n = ae(e);
  if (n || Oe(e)) {
    const l = n && la(e);
    let s = !1, d = !1;
    l && (s = !lt(e), d = Lt(e), e = Dr(e)), o = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++)
      o[c] = t(
        s ? d ? mr(Pe(e[c])) : Pe(e[c]) : e[c],
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
function oo(e, t) {
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (ae(r))
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
    return t !== "default" && (a.name = t), w(), te(
      _e,
      null,
      [K("slot", a, r && r())],
      d ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), w();
  const n = i && Xn(i(a)), l = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  n && n.key, s = te(
    _e,
    {
      key: (l && !vt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!n && r ? "_fb" : "")
    },
    n || (r ? r() : []),
    n && e._ === 1 ? 64 : -2
  );
  return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s;
}
function Xn(e) {
  return e.some((t) => qa(t) ? !(t.type === Ne || t.type === _e && !Xn(t.children)) : !0) ? e : null;
}
const ko = (e) => e ? xl(e) ? Zr(e) : ko(e.parent) : null, Na = (
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
    $options: (e) => tl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ko(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ct.bind(e.proxy)),
    $watch: (e) => jd.bind(e)
  })
), io = (e, t) => e !== we && !e.__isScriptSetup && xe(e, t), pd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: a, setupState: r, data: o, props: i, accessCache: n, type: l, appContext: s } = e;
    let d;
    if (t[0] !== "$") {
      const f = n[t];
      if (f !== void 0)
        switch (f) {
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
        if (io(r, t))
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
    return io(o, t) ? (o[t] = a, !0) : r !== we && xe(r, t) ? (r[t] = a, !0) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = a, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: a, ctx: r, appContext: o, propsOptions: i, type: n }
  }, l) {
    let s, d;
    return !!(a[l] || e !== we && l[0] !== "$" && xe(e, l) || io(t, l) || (s = i[0]) && xe(s, l) || xe(r, l) || xe(Na, l) || xe(o.config.globalProperties, l) || (d = n.__cssModules) && d[l]);
  },
  defineProperty(e, t, a) {
    return a.get != null ? e._.accessCache[t] = 0 : xe(a, "value") && this.set(e, t, a.value, null), Reflect.defineProperty(e, t, a);
  }
};
function Qn() {
  return fd().slots;
}
function fd(e) {
  const t = gt();
  return t.setupContext || (t.setupContext = _l(t));
}
function xr(e) {
  return ae(e) ? e.reduce(
    (t, a) => (t[a] = null, t),
    {}
  ) : e;
}
function zt(e, t) {
  return !e || !t ? e || t : ae(e) && ae(t) ? e.concat(t) : Ee({}, xr(e), xr(t));
}
let _o = !0;
function hd(e) {
  const t = tl(e), a = e.proxy, r = e.ctx;
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
    beforeUpdate: f,
    updated: h,
    activated: m,
    deactivated: _,
    beforeDestroy: y,
    beforeUnmount: x,
    destroyed: $,
    unmounted: g,
    render: E,
    renderTracked: z,
    renderTriggered: H,
    errorCaptured: G,
    serverPrefetch: Z,
    // public API
    expose: V,
    inheritAttrs: re,
    // assets
    components: R,
    directives: M,
    filters: D
  } = t;
  if (d && vd(d, r, null), n)
    for (const ue in n) {
      const ie = n[ue];
      de(ie) && (r[ue] = ie.bind(a));
    }
  if (o) {
    const ue = o.call(a, a);
    Se(ue) && (e.data = Je(ue));
  }
  if (_o = !0, i)
    for (const ue in i) {
      const ie = i[ue], He = de(ie) ? ie.bind(a, a) : de(ie.get) ? ie.get.bind(a, a) : pt, $e = !de(ie) && de(ie.set) ? ie.set.bind(a) : pt, Ve = j({
        get: He,
        set: $e
      });
      Object.defineProperty(r, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (Te) => Ve.value = Te
      });
    }
  if (l)
    for (const ue in l)
      el(l[ue], r, a, ue);
  if (s) {
    const ue = de(s) ? s.call(a) : s;
    Reflect.ownKeys(ue).forEach((ie) => {
      So(ie, ue[ie]);
    });
  }
  c && gi(c, e, "c");
  function J(ue, ie) {
    ae(ie) ? ie.forEach((He) => ue(He.bind(a))) : ie && ue(ie.bind(a));
  }
  if (J(Gn, u), J(ct, p), J(Jn, f), J(id, h), J(ad, m), J(rd, _), J(dd, G), J(sd, z), J(ld, H), J(pa, x), J(qr, g), J(nd, Z), ae(V))
    if (V.length) {
      const ue = e.exposed || (e.exposed = {});
      V.forEach((ie) => {
        Object.defineProperty(ue, ie, {
          get: () => a[ie],
          set: (He) => a[ie] = He,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === pt && (e.render = E), re != null && (e.inheritAttrs = re), R && (e.components = R), M && (e.directives = M), Z && Wn(e);
}
function vd(e, t, a = pt) {
  ae(e) && (e = $o(e));
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
  mt(
    ae(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    a
  );
}
function el(e, t, a, r) {
  let o = r.includes(".") ? vl(a, r) : () => a[r];
  if (Oe(e)) {
    const i = t[e];
    de(i) && he(o, i);
  } else if (de(e))
    he(o, e.bind(a));
  else if (Se(e))
    if (ae(e))
      e.forEach((i) => el(i, t, a, r));
    else {
      const i = de(e.handler) ? e.handler.bind(a) : t[e.handler];
      de(i) && he(o, i, e);
    }
}
function tl(e) {
  const t = e.type, { mixins: a, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: n }
  } = e.appContext, l = i.get(t);
  let s;
  return l ? s = l : !o.length && !a && !r ? s = t : (s = {}, o.length && o.forEach(
    (d) => kr(s, d, n, !0)
  ), kr(s, t, n)), Se(t) && i.set(t, s), s;
}
function kr(e, t, a, r = !1) {
  const { mixins: o, extends: i } = t;
  i && kr(e, i, a, !0), o && o.forEach(
    (n) => kr(e, n, a, !0)
  );
  for (const n in t)
    if (!(r && n === "expose")) {
      const l = md[n] || a && a[n];
      e[n] = l ? l(e[n], t[n]) : t[n];
    }
  return e;
}
const md = {
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
  watch: bd,
  // provide / inject
  provide: bi,
  inject: gd
};
function bi(e, t) {
  return t ? e ? function() {
    return Ee(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gd(e, t) {
  return Va($o(e), $o(t));
}
function $o(e) {
  if (ae(e)) {
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
  return e ? ae(e) && ae(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ee(
    /* @__PURE__ */ Object.create(null),
    xr(e),
    xr(t ?? {})
  ) : t;
}
function bd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const a = Ee(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    a[r] = Fe(e[r], t[r]);
  return a;
}
function al() {
  return {
    app: null,
    config: {
      isNativeTag: pn,
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
let wd = 0;
function yd(e, t) {
  return function(r, o = null) {
    de(r) || (r = Ee({}, r)), o != null && !Se(o) && (o = null);
    const i = al(), n = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const d = i.app = {
      _uid: wd++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Qd,
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
          const f = d._ceVNode || K(r, o);
          return f.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(f, c, p), s = !0, d._container = c, c.__vue_app__ = d, Zr(f.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        s && (mt(
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
  const r = gt();
  if (r || sa) {
    let o = sa ? sa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return a && de(t) ? t.call(r && r.proxy) : t;
  }
}
function rl() {
  return !!(gt() || sa);
}
const ol = {}, il = () => Object.create(ol), nl = (e) => Object.getPrototypeOf(e) === ol;
function xd(e, t, a, r = !1) {
  const o = {}, i = il();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ll(e, t, o, i);
  for (const n in e.propsOptions[0])
    n in o || (o[n] = void 0);
  a ? e.props = r ? o : Ls(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function kd(e, t, a, r) {
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
        if (Kr(e.emitsOptions, p))
          continue;
        const f = t[p];
        if (s)
          if (xe(i, p))
            f !== i[p] && (i[p] = f, d = !0);
          else {
            const h = Le(p);
            o[h] = Co(
              s,
              l,
              h,
              f,
              e,
              !1
            );
          }
        else
          f !== i[p] && (i[p] = f, d = !0);
      }
    }
  } else {
    ll(e, t, o, i) && (d = !0);
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
function ll(e, t, a, r) {
  const [o, i] = e.propsOptions;
  let n = !1, l;
  if (t)
    for (let s in t) {
      if (Pa(s))
        continue;
      const d = t[s];
      let c;
      o && xe(o, c = Le(s)) ? !i || !i.includes(c) ? a[c] = d : (l || (l = {}))[c] = d : Kr(e.emitsOptions, s) || (!(s in r) || d !== r[s]) && (r[s] = d, n = !0);
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
const _d = /* @__PURE__ */ new WeakMap();
function sl(e, t, a = !1) {
  const r = a ? _d : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, n = {}, l = [];
  let s = !1;
  if (!de(e)) {
    const c = (u) => {
      s = !0;
      const [p, f] = sl(u, t, !0);
      Ee(n, p), f && l.push(...f);
    };
    !a && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !s)
    return Se(e) && r.set(e, ya), ya;
  if (ae(i))
    for (let c = 0; c < i.length; c++) {
      const u = Le(i[c]);
      yi(u) && (n[u] = we);
    }
  else if (i)
    for (const c in i) {
      const u = Le(c);
      if (yi(u)) {
        const p = i[c], f = n[u] = ae(p) || de(p) ? { type: p } : Ee({}, p), h = f.type;
        let m = !1, _ = !0;
        if (ae(h))
          for (let y = 0; y < h.length; ++y) {
            const x = h[y], $ = de(x) && x.name;
            if ($ === "Boolean") {
              m = !0;
              break;
            } else $ === "String" && (_ = !1);
          }
        else
          m = de(h) && h.name === "Boolean";
        f[
          0
          /* shouldCast */
        ] = m, f[
          1
          /* shouldCastTrue */
        ] = _, (m || xe(f, "default")) && l.push(u);
      }
    }
  const d = [n, l];
  return Se(e) && r.set(e, d), d;
}
function yi(e) {
  return e[0] !== "$" && !Pa(e);
}
const Wo = (e) => e === "_" || e === "_ctx" || e === "$stable", Zo = (e) => ae(e) ? e.map($t) : [$t(e)], $d = (e, t, a) => {
  if (t._n)
    return t;
  const r = L((...o) => Zo(t(...o)), a);
  return r._c = !1, r;
}, dl = (e, t, a) => {
  const r = e._ctx;
  for (const o in e) {
    if (Wo(o)) continue;
    const i = e[o];
    if (de(i))
      t[o] = $d(o, i, r);
    else if (i != null) {
      const n = Zo(i);
      t[o] = () => n;
    }
  }
}, cl = (e, t) => {
  const a = Zo(t);
  e.slots.default = () => a;
}, ul = (e, t, a) => {
  for (const r in t)
    (a || !Wo(r)) && (e[r] = t[r]);
}, Sd = (e, t, a) => {
  const r = e.slots = il();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ul(r, t, a), a && vn(r, "_", o, !0)) : dl(t, r);
  } else t && cl(e, t);
}, Cd = (e, t, a) => {
  const { vnode: r, slots: o } = e;
  let i = !0, n = we;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? a && l === 1 ? i = !1 : ul(o, t, a) : (i = !t.$stable, dl(t, o)), n = t;
  } else t && (cl(e, t), n = { default: 1 });
  if (i)
    for (const l in o)
      !Wo(l) && n[l] == null && delete o[l];
}, Xe = Fd;
function zd(e) {
  return Ed(e);
}
function Ed(e, t) {
  const a = Nr();
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
    setScopeId: f = pt,
    insertStaticContent: h
  } = e, m = (v, b, S, I = null, T = null, A = null, X = void 0, U = null, F = !!b.dynamicChildren) => {
    if (v === b)
      return;
    v && !oa(v, b) && (I = tt(v), Te(v, T, A, !0), v = null), b.patchFlag === -2 && (F = !1, b.dynamicChildren = null);
    const { type: P, ref: ne, shapeFlag: Q } = b;
    switch (P) {
      case Wr:
        _(v, b, S, I);
        break;
      case Ne:
        y(v, b, S, I);
        break;
      case cr:
        v == null && x(b, S, I, X);
        break;
      case _e:
        R(
          v,
          b,
          S,
          I,
          T,
          A,
          X,
          U,
          F
        );
        break;
      default:
        Q & 1 ? E(
          v,
          b,
          S,
          I,
          T,
          A,
          X,
          U,
          F
        ) : Q & 6 ? M(
          v,
          b,
          S,
          I,
          T,
          A,
          X,
          U,
          F
        ) : (Q & 64 || Q & 128) && P.process(
          v,
          b,
          S,
          I,
          T,
          A,
          X,
          U,
          F,
          za
        );
    }
    ne != null && T ? Ma(ne, v && v.ref, A, b || v, !b) : ne == null && v && v.ref != null && Ma(v.ref, null, A, v, !0);
  }, _ = (v, b, S, I) => {
    if (v == null)
      r(
        b.el = l(b.children),
        S,
        I
      );
    else {
      const T = b.el = v.el;
      b.children !== v.children && d(T, b.children);
    }
  }, y = (v, b, S, I) => {
    v == null ? r(
      b.el = s(b.children || ""),
      S,
      I
    ) : b.el = v.el;
  }, x = (v, b, S, I) => {
    [v.el, v.anchor] = h(
      v.children,
      b,
      S,
      I,
      v.el,
      v.anchor
    );
  }, $ = ({ el: v, anchor: b }, S, I) => {
    let T;
    for (; v && v !== b; )
      T = p(v), r(v, S, I), v = T;
    r(b, S, I);
  }, g = ({ el: v, anchor: b }) => {
    let S;
    for (; v && v !== b; )
      S = p(v), o(v), v = S;
    o(b);
  }, E = (v, b, S, I, T, A, X, U, F) => {
    if (b.type === "svg" ? X = "svg" : b.type === "math" && (X = "mathml"), v == null)
      z(
        b,
        S,
        I,
        T,
        A,
        X,
        U,
        F
      );
    else {
      const P = v.el && v.el._isVueCE ? v.el : null;
      try {
        P && P._beginPatch(), Z(
          v,
          b,
          T,
          A,
          X,
          U,
          F
        );
      } finally {
        P && P._endPatch();
      }
    }
  }, z = (v, b, S, I, T, A, X, U) => {
    let F, P;
    const { props: ne, shapeFlag: Q, transition: oe, dirs: se } = v;
    if (F = v.el = n(
      v.type,
      A,
      ne && ne.is,
      ne
    ), Q & 8 ? c(F, v.children) : Q & 16 && G(
      v.children,
      F,
      null,
      I,
      T,
      no(v, A),
      X,
      U
    ), se && Qt(v, null, I, "created"), H(F, v, v.scopeId, X, I), ne) {
      for (const Ce in ne)
        Ce !== "value" && !Pa(Ce) && i(F, Ce, null, ne[Ce], A, I);
      "value" in ne && i(F, "value", null, ne.value, A), (P = ne.onVnodeBeforeMount) && xt(P, I, v);
    }
    se && Qt(v, null, I, "beforeMount");
    const be = Od(T, oe);
    be && oe.beforeEnter(F), r(F, b, S), ((P = ne && ne.onVnodeMounted) || be || se) && Xe(() => {
      P && xt(P, I, v), be && oe.enter(F), se && Qt(v, null, I, "mounted");
    }, T);
  }, H = (v, b, S, I, T) => {
    if (S && f(v, S), I)
      for (let A = 0; A < I.length; A++)
        f(v, I[A]);
    if (T) {
      let A = T.subTree;
      if (b === A || bl(A.type) && (A.ssContent === b || A.ssFallback === b)) {
        const X = T.vnode;
        H(
          v,
          X,
          X.scopeId,
          X.slotScopeIds,
          T.parent
        );
      }
    }
  }, G = (v, b, S, I, T, A, X, U, F = 0) => {
    for (let P = F; P < v.length; P++) {
      const ne = v[P] = U ? Ut(v[P]) : $t(v[P]);
      m(
        null,
        ne,
        b,
        S,
        I,
        T,
        A,
        X,
        U
      );
    }
  }, Z = (v, b, S, I, T, A, X) => {
    const U = b.el = v.el;
    let { patchFlag: F, dynamicChildren: P, dirs: ne } = b;
    F |= v.patchFlag & 16;
    const Q = v.props || we, oe = b.props || we;
    let se;
    if (S && ea(S, !1), (se = oe.onVnodeBeforeUpdate) && xt(se, S, b, v), ne && Qt(b, v, S, "beforeUpdate"), S && ea(S, !0), (Q.innerHTML && oe.innerHTML == null || Q.textContent && oe.textContent == null) && c(U, ""), P ? V(
      v.dynamicChildren,
      P,
      U,
      S,
      I,
      no(b, T),
      A
    ) : X || ie(
      v,
      b,
      U,
      null,
      S,
      I,
      no(b, T),
      A,
      !1
    ), F > 0) {
      if (F & 16)
        re(U, Q, oe, S, T);
      else if (F & 2 && Q.class !== oe.class && i(U, "class", null, oe.class, T), F & 4 && i(U, "style", Q.style, oe.style, T), F & 8) {
        const be = b.dynamicProps;
        for (let Ce = 0; Ce < be.length; Ce++) {
          const ke = be[Ce], Ke = Q[ke], We = oe[ke];
          (We !== Ke || ke === "value") && i(U, ke, Ke, We, T, S);
        }
      }
      F & 1 && v.children !== b.children && c(U, b.children);
    } else !X && P == null && re(U, Q, oe, S, T);
    ((se = oe.onVnodeUpdated) || ne) && Xe(() => {
      se && xt(se, S, b, v), ne && Qt(b, v, S, "updated");
    }, I);
  }, V = (v, b, S, I, T, A, X) => {
    for (let U = 0; U < b.length; U++) {
      const F = v[U], P = b[U], ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !oa(F, P) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      m(
        F,
        P,
        ne,
        null,
        I,
        T,
        A,
        X,
        !0
      );
    }
  }, re = (v, b, S, I, T) => {
    if (b !== S) {
      if (b !== we)
        for (const A in b)
          !Pa(A) && !(A in S) && i(
            v,
            A,
            b[A],
            null,
            T,
            I
          );
      for (const A in S) {
        if (Pa(A)) continue;
        const X = S[A], U = b[A];
        X !== U && A !== "value" && i(v, A, U, X, T, I);
      }
      "value" in S && i(v, "value", b.value, S.value, T);
    }
  }, R = (v, b, S, I, T, A, X, U, F) => {
    const P = b.el = v ? v.el : l(""), ne = b.anchor = v ? v.anchor : l("");
    let { patchFlag: Q, dynamicChildren: oe, slotScopeIds: se } = b;
    se && (U = U ? U.concat(se) : se), v == null ? (r(P, S, I), r(ne, S, I), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      S,
      ne,
      T,
      A,
      X,
      U,
      F
    )) : Q > 0 && Q & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (V(
      v.dynamicChildren,
      oe,
      S,
      T,
      A,
      X,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || T && b === T.subTree) && pl(
      v,
      b,
      !0
      /* shallow */
    )) : ie(
      v,
      b,
      S,
      ne,
      T,
      A,
      X,
      U,
      F
    );
  }, M = (v, b, S, I, T, A, X, U, F) => {
    b.slotScopeIds = U, v == null ? b.shapeFlag & 512 ? T.ctx.activate(
      b,
      S,
      I,
      X,
      F
    ) : D(
      b,
      S,
      I,
      T,
      A,
      X,
      F
    ) : O(v, b, F);
  }, D = (v, b, S, I, T, A, X) => {
    const U = v.component = Kd(
      v,
      I,
      T
    );
    if (Rr(v) && (U.ctx.renderer = za), Wd(U, !1, X), U.asyncDep) {
      if (T && T.registerDep(U, J, X), !v.el) {
        const F = U.subTree = K(Ne);
        y(null, F, b, S), v.placeholder = F.el;
      }
    } else
      J(
        U,
        v,
        b,
        S,
        T,
        A,
        X
      );
  }, O = (v, b, S) => {
    const I = b.component = v.component;
    if (Ld(v, b, S))
      if (I.asyncDep && !I.asyncResolved) {
        ue(I, b, S);
        return;
      } else
        I.next = b, I.update();
    else
      b.el = v.el, I.vnode = b;
  }, J = (v, b, S, I, T, A, X) => {
    const U = () => {
      if (v.isMounted) {
        let { next: Q, bu: oe, u: se, parent: be, vnode: Ce } = v;
        {
          const wt = fl(v);
          if (wt) {
            Q && (Q.el = Ce.el, ue(v, Q, X)), wt.asyncDep.then(() => {
              v.isUnmounted || U();
            });
            return;
          }
        }
        let ke = Q, Ke;
        ea(v, !1), Q ? (Q.el = Ce.el, ue(v, Q, X)) : Q = Ce, oe && dr(oe), (Ke = Q.props && Q.props.onVnodeBeforeUpdate) && xt(Ke, be, Q, Ce), ea(v, !0);
        const We = ki(v), bt = v.subTree;
        v.subTree = We, m(
          bt,
          We,
          // parent may have changed if it's in a teleport
          u(bt.el),
          // anchor may have changed if it's in a fragment
          tt(bt),
          v,
          T,
          A
        ), Q.el = We.el, ke === null && Dd(v, We.el), se && Xe(se, T), (Ke = Q.props && Q.props.onVnodeUpdated) && Xe(
          () => xt(Ke, be, Q, Ce),
          T
        );
      } else {
        let Q;
        const { el: oe, props: se } = b, { bm: be, m: Ce, parent: ke, root: Ke, type: We } = v, bt = _a(b);
        ea(v, !1), be && dr(be), !bt && (Q = se && se.onVnodeBeforeMount) && xt(Q, ke, b), ea(v, !0);
        {
          Ke.ce && // @ts-expect-error _def is private
          Ke.ce._def.shadowRoot !== !1 && Ke.ce._injectChildStyle(We);
          const wt = v.subTree = ki(v);
          m(
            null,
            wt,
            S,
            I,
            v,
            T,
            A
          ), b.el = wt.el;
        }
        if (Ce && Xe(Ce, T), !bt && (Q = se && se.onVnodeMounted)) {
          const wt = b;
          Xe(
            () => xt(Q, ke, wt),
            T
          );
        }
        (b.shapeFlag & 256 || ke && _a(ke.vnode) && ke.vnode.shapeFlag & 256) && v.a && Xe(v.a, T), v.isMounted = !0, b = S = I = null;
      }
    };
    v.scope.on();
    const F = v.effect = new wn(U);
    v.scope.off();
    const P = v.update = F.run.bind(F), ne = v.job = F.runIfDirty.bind(F);
    ne.i = v, ne.id = v.uid, F.scheduler = () => Ko(ne), ea(v, !0), P();
  }, ue = (v, b, S) => {
    b.component = v;
    const I = v.vnode.props;
    v.vnode = b, v.next = null, kd(v, b.props, I, S), Cd(v, b.children, S), Nt(), fi(v), Bt();
  }, ie = (v, b, S, I, T, A, X, U, F = !1) => {
    const P = v && v.children, ne = v ? v.shapeFlag : 0, Q = b.children, { patchFlag: oe, shapeFlag: se } = b;
    if (oe > 0) {
      if (oe & 128) {
        $e(
          P,
          Q,
          S,
          I,
          T,
          A,
          X,
          U,
          F
        );
        return;
      } else if (oe & 256) {
        He(
          P,
          Q,
          S,
          I,
          T,
          A,
          X,
          U,
          F
        );
        return;
      }
    }
    se & 8 ? (ne & 16 && ge(P, T, A), Q !== P && c(S, Q)) : ne & 16 ? se & 16 ? $e(
      P,
      Q,
      S,
      I,
      T,
      A,
      X,
      U,
      F
    ) : ge(P, T, A, !0) : (ne & 8 && c(S, ""), se & 16 && G(
      Q,
      S,
      I,
      T,
      A,
      X,
      U,
      F
    ));
  }, He = (v, b, S, I, T, A, X, U, F) => {
    v = v || ya, b = b || ya;
    const P = v.length, ne = b.length, Q = Math.min(P, ne);
    let oe;
    for (oe = 0; oe < Q; oe++) {
      const se = b[oe] = F ? Ut(b[oe]) : $t(b[oe]);
      m(
        v[oe],
        se,
        S,
        null,
        T,
        A,
        X,
        U,
        F
      );
    }
    P > ne ? ge(
      v,
      T,
      A,
      !0,
      !1,
      Q
    ) : G(
      b,
      S,
      I,
      T,
      A,
      X,
      U,
      F,
      Q
    );
  }, $e = (v, b, S, I, T, A, X, U, F) => {
    let P = 0;
    const ne = b.length;
    let Q = v.length - 1, oe = ne - 1;
    for (; P <= Q && P <= oe; ) {
      const se = v[P], be = b[P] = F ? Ut(b[P]) : $t(b[P]);
      if (oa(se, be))
        m(
          se,
          be,
          S,
          null,
          T,
          A,
          X,
          U,
          F
        );
      else
        break;
      P++;
    }
    for (; P <= Q && P <= oe; ) {
      const se = v[Q], be = b[oe] = F ? Ut(b[oe]) : $t(b[oe]);
      if (oa(se, be))
        m(
          se,
          be,
          S,
          null,
          T,
          A,
          X,
          U,
          F
        );
      else
        break;
      Q--, oe--;
    }
    if (P > Q) {
      if (P <= oe) {
        const se = oe + 1, be = se < ne ? b[se].el : I;
        for (; P <= oe; )
          m(
            null,
            b[P] = F ? Ut(b[P]) : $t(b[P]),
            S,
            be,
            T,
            A,
            X,
            U,
            F
          ), P++;
      }
    } else if (P > oe)
      for (; P <= Q; )
        Te(v[P], T, A, !0), P++;
    else {
      const se = P, be = P, Ce = /* @__PURE__ */ new Map();
      for (P = be; P <= oe; P++) {
        const Ye = b[P] = F ? Ut(b[P]) : $t(b[P]);
        Ye.key != null && Ce.set(Ye.key, P);
      }
      let ke, Ke = 0;
      const We = oe - be + 1;
      let bt = !1, wt = 0;
      const Ea = new Array(We);
      for (P = 0; P < We; P++) Ea[P] = 0;
      for (P = se; P <= Q; P++) {
        const Ye = v[P];
        if (Ke >= We) {
          Te(Ye, T, A, !0);
          continue;
        }
        let yt;
        if (Ye.key != null)
          yt = Ce.get(Ye.key);
        else
          for (ke = be; ke <= oe; ke++)
            if (Ea[ke - be] === 0 && oa(Ye, b[ke])) {
              yt = ke;
              break;
            }
        yt === void 0 ? Te(Ye, T, A, !0) : (Ea[yt - be] = P + 1, yt >= wt ? wt = yt : bt = !0, m(
          Ye,
          b[yt],
          S,
          null,
          T,
          A,
          X,
          U,
          F
        ), Ke++);
      }
      const ii = bt ? Td(Ea) : ya;
      for (ke = ii.length - 1, P = We - 1; P >= 0; P--) {
        const Ye = be + P, yt = b[Ye], ni = b[Ye + 1], li = Ye + 1 < ne ? (
          // #13559, fallback to el placeholder for unresolved async component
          ni.el || ni.placeholder
        ) : I;
        Ea[P] === 0 ? m(
          null,
          yt,
          S,
          li,
          T,
          A,
          X,
          U,
          F
        ) : bt && (ke < 0 || P !== ii[ke] ? Ve(yt, S, li, 2) : ke--);
      }
    }
  }, Ve = (v, b, S, I, T = null) => {
    const { el: A, type: X, transition: U, children: F, shapeFlag: P } = v;
    if (P & 6) {
      Ve(v.component.subTree, b, S, I);
      return;
    }
    if (P & 128) {
      v.suspense.move(b, S, I);
      return;
    }
    if (P & 64) {
      X.move(v, b, S, za);
      return;
    }
    if (X === _e) {
      r(A, b, S);
      for (let Q = 0; Q < F.length; Q++)
        Ve(F[Q], b, S, I);
      r(v.anchor, b, S);
      return;
    }
    if (X === cr) {
      $(v, b, S);
      return;
    }
    if (I !== 2 && P & 1 && U)
      if (I === 0)
        U.beforeEnter(A), r(A, b, S), Xe(() => U.enter(A), T);
      else {
        const { leave: Q, delayLeave: oe, afterLeave: se } = U, be = () => {
          v.ctx.isUnmounted ? o(A) : r(A, b, S);
        }, Ce = () => {
          A._isLeaving && A[At](
            !0
            /* cancelled */
          ), Q(A, () => {
            be(), se && se();
          });
        };
        oe ? oe(A, be, Ce) : Ce();
      }
    else
      r(A, b, S);
  }, Te = (v, b, S, I = !1, T = !1) => {
    const {
      type: A,
      props: X,
      ref: U,
      children: F,
      dynamicChildren: P,
      shapeFlag: ne,
      patchFlag: Q,
      dirs: oe,
      cacheIndex: se
    } = v;
    if (Q === -2 && (T = !1), U != null && (Nt(), Ma(U, null, S, v, !0), Bt()), se != null && (b.renderCache[se] = void 0), ne & 256) {
      b.ctx.deactivate(v);
      return;
    }
    const be = ne & 1 && oe, Ce = !_a(v);
    let ke;
    if (Ce && (ke = X && X.onVnodeBeforeUnmount) && xt(ke, b, v), ne & 6)
      fe(v.component, S, I);
    else {
      if (ne & 128) {
        v.suspense.unmount(S, I);
        return;
      }
      be && Qt(v, null, b, "beforeUnmount"), ne & 64 ? v.type.remove(
        v,
        b,
        S,
        za,
        I
      ) : P && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !P.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== _e || Q > 0 && Q & 64) ? ge(
        P,
        b,
        S,
        !1,
        !0
      ) : (A === _e && Q & 384 || !T && ne & 16) && ge(F, b, S), I && Y(v);
    }
    (Ce && (ke = X && X.onVnodeUnmounted) || be) && Xe(() => {
      ke && xt(ke, b, v), be && Qt(v, null, b, "unmounted");
    }, S);
  }, Y = (v) => {
    const { type: b, el: S, anchor: I, transition: T } = v;
    if (b === _e) {
      me(S, I);
      return;
    }
    if (b === cr) {
      g(v);
      return;
    }
    const A = () => {
      o(S), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (v.shapeFlag & 1 && T && !T.persisted) {
      const { leave: X, delayLeave: U } = T, F = () => X(S, A);
      U ? U(v.el, A, F) : F();
    } else
      A();
  }, me = (v, b) => {
    let S;
    for (; v !== b; )
      S = p(v), o(v), v = S;
    o(b);
  }, fe = (v, b, S) => {
    const { bum: I, scope: T, job: A, subTree: X, um: U, m: F, a: P } = v;
    xi(F), xi(P), I && dr(I), T.stop(), A && (A.flags |= 8, Te(X, v, b, S)), U && Xe(U, b), Xe(() => {
      v.isUnmounted = !0;
    }, b);
  }, ge = (v, b, S, I = !1, T = !1, A = 0) => {
    for (let X = A; X < v.length; X++)
      Te(v[X], b, S, I, T);
  }, tt = (v) => {
    if (v.shapeFlag & 6)
      return tt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const b = p(v.anchor || v.el), S = b && b[Ys];
    return S ? p(S) : b;
  };
  let fa = !1;
  const oi = (v, b, S) => {
    v == null ? b._vnode && Te(b._vnode, null, null, !0) : m(
      b._vnode || null,
      v,
      b,
      null,
      null,
      null,
      S
    ), b._vnode = v, fa || (fa = !0, fi(), Bn(), fa = !1);
  }, za = {
    p: m,
    um: Te,
    m: Ve,
    r: Y,
    mt: D,
    mc: G,
    pc: ie,
    pbc: V,
    n: tt,
    o: e
  };
  return {
    render: oi,
    hydrate: void 0,
    createApp: yd(oi)
  };
}
function no({ type: e, props: t }, a) {
  return a === "svg" && e === "foreignObject" || a === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : a;
}
function ea({ effect: e, job: t }, a) {
  a ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Od(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pl(e, t, a = !1) {
  const r = e.children, o = t.children;
  if (ae(r) && ae(o))
    for (let i = 0; i < r.length; i++) {
      const n = r[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Ut(o[i]), l.el = n.el), !a && l.patchFlag !== -2 && pl(n, l)), l.type === Wr && // avoid cached text nodes retaining detached dom nodes
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
function fl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fl(t);
}
function xi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ad = Symbol.for("v-scx"), Vd = () => It(Ad);
function hl(e, t) {
  return Hr(e, null, t);
}
function Pd(e, t) {
  return Hr(
    e,
    null,
    { flush: "sync" }
  );
}
function he(e, t, a) {
  return Hr(e, t, a);
}
function Hr(e, t, a = we) {
  const { immediate: r, deep: o, flush: i, once: n } = a, l = Ee({}, a), s = t && r || !t && i !== "post";
  let d;
  if (Ha) {
    if (i === "sync") {
      const f = Vd();
      d = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!s) {
      const f = () => {
      };
      return f.stop = pt, f.resume = pt, f.pause = pt, f;
    }
  }
  const c = Be;
  l.call = (f, h, m) => mt(f, c, h, m);
  let u = !1;
  i === "post" ? l.scheduler = (f) => {
    Xe(f, c && c.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (f, h) => {
    h ? f() : Ko(f);
  }), l.augmentJob = (f) => {
    t && (f.flags |= 4), u && (f.flags |= 2, c && (f.id = c.uid, f.i = c));
  };
  const p = Zs(e, t, l);
  return Ha && (d ? d.push(p) : s && p()), p;
}
function jd(e, t, a) {
  const r = this.proxy, o = Oe(e) ? e.includes(".") ? vl(r, e) : () => r[e] : e.bind(r, r);
  let i;
  de(t) ? i = t : (i = t.handler, a = t);
  const n = er(this), l = Hr(o, i.bind(r), a);
  return n(), l;
}
function vl(e, t) {
  const a = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < a.length && r; o++)
      r = r[a[o]];
    return r;
  };
}
function et(e, t, a = we) {
  const r = gt(), o = Le(t), i = Ge(t), n = ml(e, o), l = qs((s, d) => {
    let c, u = we, p;
    return Pd(() => {
      const f = e[o];
      Ze(c, f) && (c = f, d());
    }), {
      get() {
        return s(), a.get ? a.get(c) : c;
      },
      set(f) {
        const h = a.set ? a.set(f) : f;
        if (!Ze(h, c) && !(u !== we && Ze(f, u)))
          return;
        const m = r.vnode.props;
        m && // check if parent has passed v-model
        (t in m || o in m || i in m) && (`onUpdate:${t}` in m || `onUpdate:${o}` in m || `onUpdate:${i}` in m) || (c = f, d()), r.emit(`update:${t}`, h), Ze(f, h) && Ze(f, u) && !Ze(h, p) && d(), u = f, p = h;
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
const ml = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Ge(t)}Modifiers`];
function Id(e, t, ...a) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || we;
  let o = a;
  const i = t.startsWith("update:"), n = i && ml(r, t.slice(7));
  n && (n.trim && (o = a.map((c) => Oe(c) ? c.trim() : c)), n.number && (o = a.map(Mr)));
  let l, s = r[l = Xr(t)] || // also try camelCase event handler (#2249)
  r[l = Xr(Le(t))];
  !s && i && (s = r[l = Xr(Ge(t))]), s && mt(
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
    e.emitted[l] = !0, mt(
      d,
      e,
      6,
      o
    );
  }
}
const Md = /* @__PURE__ */ new WeakMap();
function gl(e, t, a = !1) {
  const r = a ? Md : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let n = {}, l = !1;
  if (!de(e)) {
    const s = (d) => {
      const c = gl(d, t, !0);
      c && (l = !0, Ee(n, c));
    };
    !a && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !l ? (Se(e) && r.set(e, null), null) : (ae(i) ? i.forEach((s) => n[s] = null) : Ee(n, i), Se(e) && r.set(e, n), n);
}
function Kr(e, t) {
  return !e || !Vr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, Ge(t)) || xe(e, t));
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
    setupState: f,
    ctx: h,
    inheritAttrs: m
  } = e, _ = wr(e);
  let y, x;
  try {
    if (a.shapeFlag & 4) {
      const g = o || r, E = g;
      y = $t(
        d.call(
          E,
          g,
          c,
          u,
          f,
          p,
          h
        )
      ), x = l;
    } else {
      const g = t;
      y = $t(
        g.length > 1 ? g(
          u,
          { attrs: l, slots: n, emit: s }
        ) : g(
          u,
          null
        )
      ), x = t.props ? l : Nd(l);
    }
  } catch (g) {
    Ba.length = 0, Fr(g, e, 1), y = K(Ne);
  }
  let $ = y;
  if (x && m !== !1) {
    const g = Object.keys(x), { shapeFlag: E } = $;
    g.length && E & 7 && (i && g.some(Io) && (x = Bd(
      x,
      i
    )), $ = Kt($, x, !1, !0));
  }
  return a.dirs && ($ = Kt($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(a.dirs) : a.dirs), a.transition && Ra($, a.transition), y = $, wr(_), y;
}
const Nd = (e) => {
  let t;
  for (const a in e)
    (a === "class" || a === "style" || Vr(a)) && ((t || (t = {}))[a] = e[a]);
  return t;
}, Bd = (e, t) => {
  const a = {};
  for (const r in e)
    (!Io(r) || !(r.slice(9) in t)) && (a[r] = e[r]);
  return a;
};
function Ld(e, t, a) {
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
        if (n[p] !== r[p] && !Kr(d, p))
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
    if (t[i] !== e[i] && !Kr(a, i))
      return !0;
  }
  return !1;
}
function Dd({ vnode: e, parent: t }, a) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = a, t = t.parent;
    else
      break;
  }
}
const bl = (e) => e.__isSuspense;
function Fd(e, t) {
  t && t.pendingBranch ? ae(e) ? t.effects.push(...e) : t.effects.push(e) : Nn(e);
}
const _e = Symbol.for("v-fgt"), Wr = Symbol.for("v-txt"), Ne = Symbol.for("v-cmt"), cr = Symbol.for("v-stc"), Ba = [];
let Qe = null;
function w(e = !1) {
  Ba.push(Qe = e ? null : []);
}
function Rd() {
  Ba.pop(), Qe = Ba[Ba.length - 1] || null;
}
let Ua = 1;
function _r(e, t = !1) {
  Ua += e, e < 0 && Qe && t && (Qe.hasOnce = !0);
}
function wl(e) {
  return e.dynamicChildren = Ua > 0 ? Qe || ya : null, Rd(), Ua > 0 && Qe && Qe.push(e), e;
}
function C(e, t, a, r, o, i) {
  return wl(
    B(
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
function te(e, t, a, r, o) {
  return wl(
    K(
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
const yl = ({ key: e }) => e ?? null, ur = ({
  ref: e,
  ref_key: t,
  ref_for: a
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || Ae(e) || de(e) ? { i: je, r: e, k: t, f: !!a } : e : null);
function B(e, t = null, a = null, r = 0, o = null, i = e === _e ? 0 : 1, n = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yl(t),
    ref: t && ur(t),
    scopeId: Dn,
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
  return l ? (Jo(s, a), i & 128 && e.normalize(s)) : a && (s.shapeFlag |= Oe(a) ? 8 : 16), Ua > 0 && // avoid a block node from tracking itself
  !n && // has current parent block
  Qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Qe.push(s), s;
}
const K = Ud;
function Ud(e, t = null, a = null, r = 0, o = null, i = !1) {
  if ((!e || e === Yn) && (e = Ne), qa(e)) {
    const l = Kt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return a && Jo(l, a), Ua > 0 && !i && Qe && (l.shapeFlag & 6 ? Qe[Qe.indexOf(e)] = l : Qe.push(l)), l.patchFlag = -2, l;
  }
  if (Yd(e) && (e = e.__vccOpts), t) {
    t = Go(t);
    let { class: l, style: s } = t;
    l && !Oe(l) && (t.class = ve(l)), Se(s) && (Ho(s) && !ae(s) && (s = Ee({}, s)), t.style = Jt(s));
  }
  const n = Oe(e) ? 1 : bl(e) ? 128 : Fn(e) ? 64 : Se(e) ? 4 : de(e) ? 2 : 0;
  return B(
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
  return e ? Ho(e) || nl(e) ? Ee({}, e) : e : null;
}
function Kt(e, t, a = !1, r = !1) {
  const { props: o, ref: i, patchFlag: n, children: l, transition: s } = e, d = t ? De(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && yl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && i ? ae(i) ? i.concat(ur(t)) : [i, ur(t)] : ur(t)
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
    ssContent: e.ssContent && Kt(e.ssContent),
    ssFallback: e.ssFallback && Kt(e.ssFallback),
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
function ce(e = " ", t = 0) {
  return K(Wr, null, e, t);
}
function W(e = "", t = !1) {
  return t ? (w(), te(Ne, null, e)) : K(Ne, null, e);
}
function $t(e) {
  return e == null || typeof e == "boolean" ? K(Ne) : ae(e) ? K(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qa(e) ? Ut(e) : K(Wr, null, String(e));
}
function Ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Kt(e);
}
function Jo(e, t) {
  let a = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ae(t))
    a = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Jo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      a = 32;
      const o = t._;
      !o && !nl(t) ? t._ctx = je : o === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else de(t) ? (t = { default: t, _ctx: je }, a = 32) : (t = String(t), r & 64 ? (a = 16, t = [ce(t)]) : a = 8);
  e.children = t, e.shapeFlag |= a;
}
function De(...e) {
  const t = {};
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ve([t.class, r.class]));
      else if (o === "style")
        t.style = Jt([t.style, r.style]);
      else if (Vr(o)) {
        const i = t[o], n = r[o];
        n && i !== n && !(ae(i) && i.includes(n)) && (t[o] = i ? [].concat(i, n) : n);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function xt(e, t, a, r = null) {
  mt(e, t, 7, [
    a,
    r
  ]);
}
const qd = al();
let Hd = 0;
function Kd(e, t, a) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || qd, i = {
    uid: Hd++,
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
    scope: new ws(
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
    propsOptions: sl(r, o),
    emitsOptions: gl(r, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Id.bind(null, i), e.ce && e.ce(i), i;
}
let Be = null;
const gt = () => Be || je;
let $r, zo;
{
  const e = Nr(), t = (a, r) => {
    let o;
    return (o = e[a]) || (o = e[a] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((n) => n(i)) : o[0](i);
    };
  };
  $r = t(
    "__VUE_INSTANCE_SETTERS__",
    (a) => Be = a
  ), zo = t(
    "__VUE_SSR_SETTERS__",
    (a) => Ha = a
  );
}
const er = (e) => {
  const t = Be;
  return $r(e), e.scope.on(), () => {
    e.scope.off(), $r(t);
  };
}, $i = () => {
  Be && Be.scope.off(), $r(null);
};
function xl(e) {
  return e.vnode.shapeFlag & 4;
}
let Ha = !1;
function Wd(e, t = !1, a = !1) {
  t && zo(t);
  const { props: r, children: o } = e.vnode, i = xl(e);
  xd(e, r, i, t), Sd(e, o, a || t);
  const n = i ? Zd(e, t) : void 0;
  return t && zo(!1), n;
}
function Zd(e, t) {
  const a = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pd);
  const { setup: r } = a;
  if (r) {
    Nt();
    const o = e.setupContext = r.length > 1 ? _l(e) : null, i = er(e), n = Xa(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = fn(n);
    if (Bt(), i(), (l || e.sp) && !_a(e) && Wn(e), l) {
      if (n.then($i, $i), t)
        return n.then((s) => {
          Si(e, s);
        }).catch((s) => {
          Fr(s, e, 0);
        });
      e.asyncDep = n;
    } else
      Si(e, n);
  } else
    kl(e);
}
function Si(e, t, a) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = jn(t)), kl(e);
}
function kl(e, t, a) {
  const r = e.type;
  e.render || (e.render = r.render || pt);
  {
    const o = er(e);
    Nt();
    try {
      hd(e);
    } finally {
      Bt(), o();
    }
  }
}
const Gd = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function _l(e) {
  const t = (a) => {
    e.exposed = a || {};
  };
  return {
    attrs: new Proxy(e.attrs, Gd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(jn(Ds(e.exposed)), {
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
function Jd(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yd(e) {
  return de(e) && "__vccOpts" in e;
}
const j = (e, t) => Ks(e, t, Ha);
function Xd(e, t, a) {
  try {
    _r(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !ae(t) ? qa(t) ? K(e, null, [t]) : K(e, t) : K(e, null, t) : (r > 3 ? a = Array.prototype.slice.call(arguments, 2) : r === 3 && qa(a) && (a = [a]), K(e, t, a));
  } finally {
    _r(1);
  }
}
const Qd = "3.5.24";
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
const $l = Eo ? (e) => Eo.createHTML(e) : (e) => e, ec = "http://www.w3.org/2000/svg", tc = "http://www.w3.org/1998/Math/MathML", Tt = typeof document < "u" ? document : null, zi = Tt && /* @__PURE__ */ Tt.createElement("template"), ac = {
  insert: (e, t, a) => {
    t.insertBefore(e, a || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, a, r) => {
    const o = t === "svg" ? Tt.createElementNS(ec, e) : t === "mathml" ? Tt.createElementNS(tc, e) : a ? Tt.createElement(e, { is: a }) : Tt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Tt.createTextNode(e),
  createComment: (e) => Tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Tt.querySelector(e),
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
      zi.innerHTML = $l(
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
}, Ft = "transition", Ta = "animation", Ka = Symbol("_vtc"), Sl = {
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
}, rc = /* @__PURE__ */ Ee(
  {},
  Rn,
  Sl
), oc = (e) => (e.displayName = "Transition", e.props = rc, e), Wa = /* @__PURE__ */ oc(
  (e, { slots: t }) => Xd(ed, ic(e), t)
), ta = (e, t = []) => {
  ae(e) ? e.forEach((a) => a(...t)) : e && e(...t);
}, Ei = (e) => e ? ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ic(e) {
  const t = {};
  for (const R in e)
    R in Sl || (t[R] = e[R]);
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
    leaveToClass: f = `${a}-leave-to`
  } = e, h = nc(o), m = h && h[0], _ = h && h[1], {
    onBeforeEnter: y,
    onEnter: x,
    onEnterCancelled: $,
    onLeave: g,
    onLeaveCancelled: E,
    onBeforeAppear: z = y,
    onAppear: H = x,
    onAppearCancelled: G = $
  } = t, Z = (R, M, D, O) => {
    R._enterCancelled = O, aa(R, M ? c : l), aa(R, M ? d : n), D && D();
  }, V = (R, M) => {
    R._isLeaving = !1, aa(R, u), aa(R, f), aa(R, p), M && M();
  }, re = (R) => (M, D) => {
    const O = R ? H : x, J = () => Z(M, R, D);
    ta(O, [M, J]), Oi(() => {
      aa(M, R ? s : i), Ot(M, R ? c : l), Ei(O) || Ti(M, r, m, J);
    });
  };
  return Ee(t, {
    onBeforeEnter(R) {
      ta(y, [R]), Ot(R, i), Ot(R, n);
    },
    onBeforeAppear(R) {
      ta(z, [R]), Ot(R, s), Ot(R, d);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(R, M) {
      R._isLeaving = !0;
      const D = () => V(R, M);
      Ot(R, u), R._enterCancelled ? (Ot(R, p), Pi(R)) : (Pi(R), Ot(R, p)), Oi(() => {
        R._isLeaving && (aa(R, u), Ot(R, f), Ei(g) || Ti(R, r, _, D));
      }), ta(g, [R, D]);
    },
    onEnterCancelled(R) {
      Z(R, !1, void 0, !0), ta($, [R]);
    },
    onAppearCancelled(R) {
      Z(R, !0, void 0, !0), ta(G, [R]);
    },
    onLeaveCancelled(R) {
      V(R), ta(E, [R]);
    }
  });
}
function nc(e) {
  if (e == null)
    return null;
  if (Se(e))
    return [lo(e.enter), lo(e.leave)];
  {
    const t = lo(e);
    return [t, t];
  }
}
function lo(e) {
  return vo(e);
}
function Ot(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.add(a)), (e[Ka] || (e[Ka] = /* @__PURE__ */ new Set())).add(t);
}
function aa(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const a = e[Ka];
  a && (a.delete(t), a.size || (e[Ka] = void 0));
}
function Oi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lc = 0;
function Ti(e, t, a, r) {
  const o = e._endId = ++lc, i = () => {
    o === e._endId && r();
  };
  if (a != null)
    return setTimeout(i, a);
  const { type: n, timeout: l, propCount: s } = sc(e, t);
  if (!n)
    return r();
  const d = n + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(d, p), i();
  }, p = (f) => {
    f.target === e && ++c >= s && u();
  };
  setTimeout(() => {
    c < s && u();
  }, l + 1), e.addEventListener(d, p);
}
function sc(e, t) {
  const a = window.getComputedStyle(e), r = (h) => (a[h] || "").split(", "), o = r(`${Ft}Delay`), i = r(`${Ft}Duration`), n = Ai(o, i), l = r(`${Ta}Delay`), s = r(`${Ta}Duration`), d = Ai(l, s);
  let c = null, u = 0, p = 0;
  t === Ft ? n > 0 && (c = Ft, u = n, p = i.length) : t === Ta ? d > 0 && (c = Ta, u = d, p = s.length) : (u = Math.max(n, d), c = u > 0 ? n > d ? Ft : Ta : null, p = c ? c === Ft ? i.length : s.length : 0);
  const f = c === Ft && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Ft}Property`).toString()
  );
  return {
    type: c,
    timeout: u,
    propCount: p,
    hasTransform: f
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
function dc(e, t, a) {
  const r = e[Ka];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : a ? e.setAttribute("class", t) : e.className = t;
}
const Sr = Symbol("_vod"), Cl = Symbol("_vsh"), Yo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: a }) {
    e[Sr] = e.style.display === "none" ? "" : e.style.display, a && t ? a.beforeEnter(e) : Aa(e, t);
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
  e.style.display = t ? e[Sr] : "none", e[Cl] = !t;
}
const zl = Symbol("");
function cc(e) {
  const t = gt();
  if (!t)
    return;
  const a = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => Cr(i, o));
  }, r = () => {
    const o = e(t.proxy);
    t.ce ? Cr(t.ce, o) : Oo(t.subTree, o), a(o);
  };
  Jn(() => {
    Nn(r);
  }), ct(() => {
    he(r, pt, { flush: "post" });
    const o = new MutationObserver(r);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), qr(() => o.disconnect());
  });
}
function Oo(e, t) {
  if (e.shapeFlag & 128) {
    const a = e.suspense;
    e = a.activeBranch, a.pendingBranch && !a.isHydrating && a.effects.push(() => {
      Oo(a.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Cr(e.el, t);
  else if (e.type === _e)
    e.children.forEach((a) => Oo(a, t));
  else if (e.type === cr) {
    let { el: a, anchor: r } = e;
    for (; a && (Cr(a, t), a !== r); )
      a = a.nextSibling;
  }
}
function Cr(e, t) {
  if (e.nodeType === 1) {
    const a = e.style;
    let r = "";
    for (const o in t) {
      const i = bs(t[o]);
      a.setProperty(`--${o}`, i), r += `--${o}: ${i};`;
    }
    a[zl] = r;
  }
}
const uc = /(?:^|;)\s*display\s*:/;
function pc(e, t, a) {
  const r = e.style, o = Oe(a);
  let i = !1;
  if (a && !o) {
    if (t)
      if (Oe(t))
        for (const n of t.split(";")) {
          const l = n.slice(0, n.indexOf(":")).trim();
          a[l] == null && pr(r, l, "");
        }
      else
        for (const n in t)
          a[n] == null && pr(r, n, "");
    for (const n in a)
      n === "display" && (i = !0), pr(r, n, a[n]);
  } else if (o) {
    if (t !== a) {
      const n = r[zl];
      n && (a += ";" + n), r.cssText = a, i = uc.test(a);
    }
  } else t && e.removeAttribute("style");
  Sr in e && (e[Sr] = i ? r.display : "", e[Cl] && (r.display = "none"));
}
const ji = /\s*!important$/;
function pr(e, t, a) {
  if (ae(a))
    a.forEach((r) => pr(e, t, r));
  else if (a == null && (a = ""), t.startsWith("--"))
    e.setProperty(t, a);
  else {
    const r = fc(e, t);
    ji.test(a) ? e.setProperty(
      Ge(r),
      a.replace(ji, ""),
      "important"
    ) : e[r] = a;
  }
}
const Ii = ["Webkit", "Moz", "ms"], so = {};
function fc(e, t) {
  const a = so[t];
  if (a)
    return a;
  let r = Le(t);
  if (r !== "filter" && r in e)
    return so[t] = r;
  r = Ir(r);
  for (let o = 0; o < Ii.length; o++) {
    const i = Ii[o] + r;
    if (i in e)
      return so[t] = i;
  }
  return t;
}
const Mi = "http://www.w3.org/1999/xlink";
function Ni(e, t, a, r, o, i = ms(t)) {
  r && t.startsWith("xlink:") ? a == null ? e.removeAttributeNS(Mi, t.slice(6, t.length)) : e.setAttributeNS(Mi, t, a) : a == null || i && !mn(a) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : vt(a) ? String(a) : a
  );
}
function Bi(e, t, a, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    a != null && (e[t] = t === "innerHTML" ? $l(a) : a);
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
    l === "boolean" ? a = mn(a) : a == null && l === "string" ? (a = "", n = !0) : l === "number" && (a = 0, n = !0);
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
function hc(e, t, a, r) {
  e.removeEventListener(t, a, r);
}
const Li = Symbol("_vei");
function vc(e, t, a, r, o = null) {
  const i = e[Li] || (e[Li] = {}), n = i[t];
  if (r && n)
    n.value = r;
  else {
    const [l, s] = mc(t);
    if (r) {
      const d = i[t] = wc(
        r,
        o
      );
      jt(e, l, d, s);
    } else n && (hc(e, l, n, s), i[t] = void 0);
  }
}
const Di = /(?:Once|Passive|Capture)$/;
function mc(e) {
  let t;
  if (Di.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Di); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ge(e.slice(2)), t];
}
let co = 0;
const gc = /* @__PURE__ */ Promise.resolve(), bc = () => co || (gc.then(() => co = 0), co = Date.now());
function wc(e, t) {
  const a = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= a.attached)
      return;
    mt(
      yc(r, a.value),
      t,
      5,
      [r]
    );
  };
  return a.value = e, a.attached = bc(), a;
}
function yc(e, t) {
  if (ae(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xc = (e, t, a, r, o, i) => {
  const n = o === "svg";
  t === "class" ? dc(e, r, n) : t === "style" ? pc(e, a, r) : Vr(t) ? Io(t) || vc(e, t, a, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kc(e, t, r, n)) ? (Bi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ni(e, t, r, n, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Oe(r)) ? Bi(e, Le(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ni(e, t, r, n));
};
function kc(e, t, a, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fi(t) && de(a));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Fi(t) && Oe(a) ? !1 : t in e;
}
const Ri = {};
// @__NO_SIDE_EFFECTS__
function _c(e, t, a) {
  let r = /* @__PURE__ */ td(e, t);
  Pr(r) && (r = Ee({}, r, t));
  class o extends Xo {
    constructor(n) {
      super(r, n, a);
    }
  }
  return o.def = r, o;
}
const $c = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Xo extends $c {
  constructor(t, a = {}, r = To) {
    super(), this._def = t, this._props = a, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== To ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (i && !ae(i))
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
    const { props: a } = t, r = ae(a) ? a : Object.keys(a || {});
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
    this._app && (t.appContext = this._app._context), jc(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const a = K(this._def, Ee(t, this._props));
    return this._instance || (a.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0;
      const o = (i, n) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Pr(n[0]) ? Ee({ detail: n }, n[0]) : { detail: n }
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
const Wt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ae(t) ? (a) => dr(t, a) : t;
};
function Sc(e) {
  e.target.composing = !0;
}
function Ui(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const dt = Symbol("_assign");
function qi(e, t, a) {
  return t && (e = e.trim()), a && (e = Mr(e)), e;
}
const zr = {
  created(e, { modifiers: { lazy: t, trim: a, number: r } }, o) {
    e[dt] = Wt(o);
    const i = r || o.props && o.props.type === "number";
    jt(e, t ? "change" : "input", (n) => {
      n.target.composing || e[dt](qi(e.value, a, i));
    }), (a || i) && jt(e, "change", () => {
      e.value = qi(e.value, a, i);
    }), t || (jt(e, "compositionstart", Sc), jt(e, "compositionend", Ui), jt(e, "change", Ui));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: a, modifiers: { lazy: r, trim: o, number: i } }, n) {
    if (e[dt] = Wt(n), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Mr(e.value) : e.value, s = t ?? "";
    l !== s && (document.activeElement === e && e.type !== "range" && (r && t === a || o && e.value.trim() === s) || (e.value = s));
  }
}, El = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, a) {
    e[dt] = Wt(a), jt(e, "change", () => {
      const r = e._modelValue, o = Sa(e), i = e.checked, n = e[dt];
      if (ae(r)) {
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
        n(Ol(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Hi,
  beforeUpdate(e, t, a) {
    e[dt] = Wt(a), Hi(e, t, a);
  }
};
function Hi(e, { value: t, oldValue: a }, r) {
  e._modelValue = t;
  let o;
  if (ae(t))
    o = Bo(t, r.props.value) > -1;
  else if (Ca(t))
    o = t.has(r.props.value);
  else {
    if (t === a) return;
    o = da(t, Ol(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Cc = {
  created(e, { value: t }, a) {
    e.checked = da(t, a.props.value), e[dt] = Wt(a), jt(e, "change", () => {
      e[dt](Sa(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: a }, r) {
    e[dt] = Wt(r), t !== a && (e.checked = da(t, r.props.value));
  }
}, zc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: a } }, r) {
    const o = Ca(t);
    jt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (n) => n.selected).map(
        (n) => a ? Mr(Sa(n)) : Sa(n)
      );
      e[dt](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, Ct(() => {
        e._assigning = !1;
      });
    }), e[dt] = Wt(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ki(e, t);
  },
  beforeUpdate(e, t, a) {
    e[dt] = Wt(a);
  },
  updated(e, { value: t }) {
    e._assigning || Ki(e, t);
  }
};
function Ki(e, t) {
  const a = e.multiple, r = ae(t);
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
function Ol(e, t) {
  const a = t ? "_trueValue" : "_falseValue";
  return a in e ? e[a] : t;
}
const Ec = {
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
function Oc(e, t) {
  switch (e) {
    case "SELECT":
      return zc;
    case "TEXTAREA":
      return zr;
    default:
      switch (t) {
        case "checkbox":
          return El;
        case "radio":
          return Cc;
        default:
          return zr;
      }
  }
}
function nr(e, t, a, r, o) {
  const n = Oc(
    e.tagName,
    a.props && a.props.type
  )[o];
  n && n(e, t, a, r);
}
const Tc = ["ctrl", "shift", "alt", "meta"], Ac = {
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
      const l = Ac[t[n]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  }));
}, Vc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, it = (e, t) => {
  const a = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return a[r] || (a[r] = ((o) => {
    if (!("key" in o))
      return;
    const i = Ge(o.key);
    if (t.some(
      (n) => n === i || Vc[n] === i
    ))
      return e(o);
  }));
}, Pc = /* @__PURE__ */ Ee({ patchProp: xc }, ac);
let Wi;
function Tl() {
  return Wi || (Wi = zd(Pc));
}
const jc = ((...e) => {
  Tl().render(...e);
}), To = ((...e) => {
  const t = Tl().createApp(...e), { mount: a } = t;
  return t.mount = (r) => {
    const o = Mc(r);
    if (!o) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const n = a(o, !1, Ic(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), n;
  }, t;
});
function Ic(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Mc(e) {
  return Oe(e) ? document.querySelector(e) : e;
}
function Nc(e) {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = e, document.head.appendChild(t);
}
function Bc() {
  ["https://rsms.me/inter/inter.css", "https://fonts.cdnfonts.com/css/poppins"].forEach((e) => {
    Nc(e);
  });
}
function Lc(e) {
  Bc();
}
const Zt = Je({
  locale: "nl-NL",
  language: "nl",
  autoDetectLanguage: !0,
  currency: "EUR"
});
function Dc(e) {
  if (Zt.autoDetectLanguage) {
    console.warn("ProboDesignSystem: autoDetectLanguage is enabled. You cannot set the language manually.");
    return;
  }
  if (!["nl", "en", "de"].includes(e)) {
    console.warn(`ProboDesignSystem: ${e} is not a valid language. Valid languages are: nl, en, de`);
    return;
  }
  Zt.language = e;
}
const Qo = new MutationObserver((e) => {
  e[0]?.attributeName === "lang" && (Zt.language = document.documentElement.lang);
}), Al = () => Qo.disconnect();
function Fc() {
  Qo.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", Al), Zt.autoDetectLanguage = !0;
}
function Rc() {
  Qo.disconnect(), window.removeEventListener("beforeunload", Al), Zt.autoDetectLanguage = !1;
}
he(
  () => Zt.autoDetectLanguage,
  (e) => {
    if (e) {
      Fc();
      return;
    }
    Rc();
  },
  {
    immediate: !0
  }
);
function Uc(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
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
}, qc = { class: "icon" }, Hc = {
  __name: "PIcon",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), C("i", qc, [
      (w(), te($a(e.icon)))
    ]));
  }
}, ua = /* @__PURE__ */ pe(Hc, [["__scopeId", "data-v-eb0a670a"]]), Kc = ["aria-disabled"], Wc = ["id", "aria-controls", "disabled"], Zc = { class: "title" }, Gc = ["id", "data-testid", "aria-hidden"], Jc = {
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
    const a = e, r = t, o = ee(null);
    return he(
      () => a.modelValue,
      (i) => {
        i && a.scrollIntoView && setTimeout(() => o.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (i, n) => (w(), C("div", {
      class: ve(["accordion-item", { disabled: e.disabled }]),
      "aria-disabled": e.disabled
    }, [
      B("button", {
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
          B("h3", Zc, q(e.title), 1)
        ]),
        e.hideToggle ? W("", !0) : (w(), C("div", {
          key: 0,
          "data-testid": "accordion-state-indicator",
          class: ve(["state-indicator", { open: e.modelValue }])
        }, [
          K(ua, {
            part: "state-indicator-icon",
            icon: k(Uc)
          }, null, 8, ["icon"])
        ], 2))
      ], 8, Wc),
      K(Wa, { name: "grow" }, {
        default: L(() => [
          ca(B("div", {
            id: `accordion-content-${e.ariaTitle}`,
            "data-testid": `accordion-content-${e.ariaTitle}`,
            "aria-hidden": !e.modelValue,
            class: "content"
          }, [
            K(Wa, { name: "fade" }, {
              default: L(() => [
                e.modelValue ? le(i.$slots, "default", { key: 0 }) : W("", !0)
              ]),
              _: 3
            })
          ], 8, Gc), [
            [Yo, e.modelValue]
          ])
        ]),
        _: 3
      })
    ], 10, Kc));
  }
}, Vl = /* @__PURE__ */ pe(Jc, [["__scopeId", "data-v-3fc5173a"]]), Yc = {
  class: "accordion",
  "data-testid": "accordion"
}, Xc = {
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
    const a = e, r = t, o = j(() => [...a.modelValue]);
    function i(n, l) {
      a.multiple ? (o.value[l] = n, r("update:modelValue", o.value)) : (o.value.forEach((s, d) => {
        d !== l && (o.value[d] = !1);
      }), r("update:modelValue", o.value));
    }
    return (n, l) => (w(), C("div", Yc, [
      (w(!0), C(_e, null, Ht(e.items, (s, d) => le(n.$slots, "default", De({
        key: d,
        ref_for: !0
      }, { item: s, index: d, open: o.value[d] }), () => [
        K(Vl, {
          modelValue: o.value[d],
          "onUpdate:modelValue": [(c) => o.value[d] = c, (c) => i(c, d)],
          title: s[e.title],
          "aria-title": s.ariaTitle,
          disabled: e.disabled || s.disabled,
          "hide-toggle": e.disabled,
          "scroll-into-view": e.scrollIntoView
        }, {
          default: L(() => [
            le(n.$slots, "content", De({ ref_for: !0 }, s), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "aria-title", "disabled", "hide-toggle", "scroll-into-view"])
      ], !0)), 128))
    ]));
  }
}, Pl = /* @__PURE__ */ pe(Xc, [["__scopeId", "data-v-25a8f65e"]]);
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
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zi(Object(a), !0).forEach(function(r) {
      Qc(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Zi(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function Qc(e, t, a) {
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
function Er(e) {
  return typeof e == "function";
}
function eu(e) {
  return la(e) || Lt(e);
}
function jl(e, t, a) {
  let r = e;
  const o = t.split(".");
  for (let i = 0; i < o.length; i++) {
    if (!r[o[i]]) return a;
    r = r[o[i]];
  }
  return r;
}
function uo(e, t, a) {
  return j(() => e.some((r) => jl(t, r, {
    [a]: !1
  })[a]));
}
function Ji(e, t, a) {
  return j(() => e.reduce((r, o) => {
    const i = jl(t, o, {
      [a]: !1
    })[a] || [];
    return r.concat(i);
  }, []));
}
function Il(e, t, a, r) {
  return e.call(r, k(t), k(a), r);
}
function Ml(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function tu(e, t, a, r, o, i, n) {
  let {
    $lazy: l,
    $rewardEarly: s
  } = o, d = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], c = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, p = arguments.length > 10 ? arguments[10] : void 0;
  const f = ee(!!r.value), h = ee(0);
  a.value = !1;
  const m = he([t, r].concat(d, p), () => {
    if (l && !r.value || s && !u.value && !a.value)
      return;
    let _;
    try {
      _ = Il(e, t, c, n);
    } catch (y) {
      _ = Promise.reject(y);
    }
    h.value++, a.value = !!h.value, f.value = !1, Promise.resolve(_).then((y) => {
      h.value--, a.value = !!h.value, i.value = y, f.value = Ml(y);
    }).catch((y) => {
      h.value--, a.value = !!h.value, i.value = y, f.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: f,
    $unwatch: m
  };
}
function au(e, t, a, r, o, i, n, l) {
  let {
    $lazy: s,
    $rewardEarly: d
  } = r;
  const c = () => ({}), u = j(() => {
    if (s && !a.value || d && !l.value)
      return !1;
    let p = !0;
    try {
      const f = Il(e, t, n, i);
      o.value = f, p = Ml(f);
    } catch (f) {
      o.value = f;
    }
    return p;
  });
  return {
    $unwatch: c,
    $invalid: u
  };
}
function ru(e, t, a, r, o, i, n, l, s, d, c) {
  const u = ee(!1), p = e.$params || {}, f = ee(null);
  let h, m;
  e.$async ? {
    $invalid: h,
    $unwatch: m
  } = tu(e.$validator, t, u, a, r, f, o, e.$watchTargets, s, d, c) : {
    $invalid: h,
    $unwatch: m
  } = au(e.$validator, t, a, r, f, o, s, d);
  const _ = e.$message;
  return {
    $message: Er(_) ? j(() => _(Gi({
      $pending: u,
      $invalid: h,
      $params: Gi(p),
      $model: t,
      $response: f,
      $validator: i,
      $propertyPath: l,
      $property: n
    }))) : _ || "",
    $params: p,
    $pending: u,
    $invalid: h,
    $response: f,
    $unwatch: m
  };
}
function ou() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = k(e), a = Object.keys(t), r = {}, o = {}, i = {};
  let n = null;
  return a.forEach((l) => {
    const s = t[l];
    switch (!0) {
      case Er(s.$validator):
        r[l] = s;
        break;
      case Er(s):
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
const iu = "__root";
function nu(e, t, a, r, o, i, n, l, s) {
  const d = Object.keys(e), c = r.get(o, e), u = ee(!1), p = ee(!1), f = ee(0);
  if (c) {
    if (!c.$partial) return c;
    c.$unwatch(), u.value = c.$dirty.value;
  }
  const h = {
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
    h[m] = ru(e[m], t, h.$dirty, i, n, m, a, o, s, p, f);
  }), h.$externalResults = j(() => l.value ? [].concat(l.value).map((m, _) => ({
    $propertyPath: o,
    $property: a,
    $validator: "$externalResults",
    $uid: `${o}-externalResult-${_}`,
    $message: m,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), h.$invalid = j(() => {
    const m = d.some((_) => k(h[_].$invalid));
    return p.value = m, !!h.$externalResults.value.length || m;
  }), h.$pending = j(() => d.some((m) => k(h[m].$pending))), h.$error = j(() => h.$dirty.value ? h.$pending.value || h.$invalid.value : !1), h.$silentErrors = j(() => d.filter((m) => k(h[m].$invalid)).map((m) => {
    const _ = h[m];
    return Je({
      $propertyPath: o,
      $property: a,
      $validator: m,
      $uid: `${o}-${m}`,
      $message: _.$message,
      $params: _.$params,
      $response: _.$response,
      $pending: _.$pending
    });
  }).concat(h.$externalResults.value)), h.$errors = j(() => h.$dirty.value ? h.$silentErrors.value : []), h.$unwatch = () => d.forEach((m) => {
    h[m].$unwatch();
  }), h.$commit = () => {
    p.value = !0, f.value = Date.now();
  }, r.set(o, e, h), h) : (c && r.set(o, e, h), h);
}
function lu(e, t, a, r, o, i, n) {
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
function su(e, t, a) {
  const r = j(() => [t, a].filter((h) => h).reduce((h, m) => h.concat(Object.values(k(m))), [])), o = j({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((h) => h.$dirty) : !1);
    },
    set(h) {
      e.$dirty.value = h;
    }
  }), i = j(() => {
    const h = k(e.$silentErrors) || [], m = r.value.filter((_) => (k(_).$silentErrors || []).length).reduce((_, y) => _.concat(...y.$silentErrors), []);
    return h.concat(m);
  }), n = j(() => {
    const h = k(e.$errors) || [], m = r.value.filter((_) => (k(_).$errors || []).length).reduce((_, y) => _.concat(...y.$errors), []);
    return h.concat(m);
  }), l = j(() => r.value.some((h) => h.$invalid) || k(e.$invalid) || !1), s = j(() => r.value.some((h) => k(h.$pending)) || k(e.$pending) || !1), d = j(() => r.value.some((h) => h.$dirty) || r.value.some((h) => h.$anyDirty) || o.value), c = j(() => o.value ? s.value || l.value : !1), u = () => {
    e.$touch(), r.value.forEach((h) => {
      h.$touch();
    });
  }, p = () => {
    e.$commit(), r.value.forEach((h) => {
      h.$commit();
    });
  }, f = () => {
    e.$reset(), r.value.forEach((h) => {
      h.$reset();
    });
  };
  return r.value.length && r.value.every((h) => h.$dirty) && u(), {
    $dirty: o,
    $errors: n,
    $invalid: l,
    $anyDirty: d,
    $error: c,
    $pending: s,
    $touch: u,
    $reset: f,
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
    config: f,
    validationGroups: h
  } = ou(t), m = qt(qt({}, l), f), _ = r ? j(() => {
    const $e = k(a);
    return $e ? k($e[r]) : void 0;
  }) : a, y = qt({}, k(d) || {}), x = j(() => {
    const $e = k(d);
    return r ? $e ? k($e[r]) : void 0 : $e;
  }), $ = nu(u, _, r, n, c, m, s, x, a), g = lu(p, _, c, n, m, s, x), E = {};
  h && Object.entries(h).forEach(($e) => {
    let [Ve, Te] = $e;
    E[Ve] = {
      $invalid: uo(Te, g, "$invalid"),
      $error: uo(Te, g, "$error"),
      $pending: uo(Te, g, "$pending"),
      $errors: Ji(Te, g, "$errors"),
      $silentErrors: Ji(Te, g, "$silentErrors")
    };
  });
  const {
    $dirty: z,
    $errors: H,
    $invalid: G,
    $anyDirty: Z,
    $error: V,
    $pending: re,
    $touch: R,
    $reset: M,
    $silentErrors: D,
    $commit: O
  } = su($, g, i), J = r ? j({
    get: () => k(_),
    set: ($e) => {
      z.value = !0;
      const Ve = k(a), Te = k(d);
      Te && (Te[r] = y[r]), Ae(Ve[r]) ? Ve[r].value = $e : Ve[r] = $e;
    }
  }) : null;
  r && m.$autoDirty && he(_, () => {
    z.value || R();
    const $e = k(d);
    $e && ($e[r] = y[r]);
  }, {
    flush: "sync"
  });
  async function ue() {
    return R(), m.$rewardEarly && (O(), await Ct()), await Ct(), new Promise(($e) => {
      if (!re.value) return $e(!G.value);
      const Ve = he(re, () => {
        $e(!G.value), Ve();
      });
    });
  }
  function ie($e) {
    return (i.value || {})[$e];
  }
  function He() {
    Ae(d) ? d.value = y : Object.keys(y).length === 0 ? Object.keys(d).forEach(($e) => {
      delete d[$e];
    }) : Object.assign(d, y);
  }
  return Je(qt(qt(qt({}, $), {}, {
    $model: J,
    $dirty: z,
    $error: V,
    $errors: H,
    $invalid: G,
    $anyDirty: Z,
    $pending: re,
    $touch: R,
    $reset: M,
    $path: c || iu,
    $silentErrors: D,
    $validate: ue,
    $commit: O
  }, i && {
    $getResultsForChild: ie,
    $clearExternalResults: He,
    $validationGroups: E
  }), g));
}
let du = class {
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
const fr = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, Yi = /* @__PURE__ */ Symbol("vuelidate#injectChildResults"), Xi = /* @__PURE__ */ Symbol("vuelidate#removeChildResults");
function cu(e) {
  let {
    $scope: t,
    instance: a
  } = e;
  const r = {}, o = ee([]), i = j(() => o.value.reduce((c, u) => (c[u] = k(r[u]), c), {}));
  function n(c, u) {
    let {
      $registerAs: p,
      $scope: f,
      $stopPropagation: h
    } = u;
    h || t === fr.COLLECT_NONE || f === fr.COLLECT_NONE || t !== fr.COLLECT_ALL && t !== f || (r[p] = c, o.value.push(p));
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
function Nl(e) {
  return new Proxy(e, {
    get(t, a) {
      return typeof t[a] == "object" ? Nl(t[a]) : j(() => t[a]);
    }
  });
}
let Qi = 0;
function Gt(e, t) {
  var a;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: o,
    $scope: i = fr.COLLECT_ALL,
    $stopPropagation: n,
    $externalResults: l,
    currentVueInstance: s
  } = r;
  const d = s || ((a = gt()) === null || a === void 0 ? void 0 : a.proxy), c = d ? d.$options : {};
  o || (Qi += 1, o = `_vuelidate_${Qi}`);
  const u = ee({}), p = new du(), {
    childResults: f,
    sendValidationResultsToParent: h,
    removeValidationResultsFromParent: m
  } = d ? cu({
    $scope: i,
    instance: d
  }) : {
    childResults: ee({})
  };
  if (!e && c.validations) {
    const _ = c.validations;
    t = ee({}), Gn(() => {
      t.value = d, he(() => Er(_) ? _.call(t.value, new Nl(t.value)) : _, (y) => {
        u.value = Ao({
          validations: y,
          state: t,
          childResults: f,
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
    const _ = Ae(e) || eu(e) ? e : Je(e || {});
    he(_, (y) => {
      u.value = Ao({
        validations: y,
        state: t,
        childResults: f,
        resultsCache: p,
        globalConfig: r,
        instance: d ?? {},
        externalResults: l
      });
    }, {
      immediate: !0
    });
  }
  return d && (h.forEach((_) => _(u, {
    $registerAs: o,
    $scope: i,
    $stopPropagation: n
  })), pa(() => m.forEach((_) => _(o)))), j(() => qt(qt({}, k(u.value)), f.value));
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
      uu(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : en(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function uu(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Or(e) {
  return typeof e == "function";
}
function Vo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Gr(e) {
  return Or(e.$validator) ? Za({}, e) : {
    $validator: e
  };
}
function Bl(e) {
  return typeof e == "object" ? e.$valid : e;
}
function Ll(e) {
  return e.$validator || e;
}
function pu(e, t) {
  if (!Vo(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!Vo(t) && !Or(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Gr(t);
  return a.$params = Za(Za({}, a.$params || {}), e), a;
}
function fu(e, t) {
  if (!Or(e) && typeof k(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!Vo(t) && !Or(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Gr(t);
  return a.$message = e, a;
}
function hu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const a = Gr(e);
  return Za(Za({}, a), {}, {
    $async: !0,
    $watchTargets: t
  });
}
function vu(e) {
  return {
    $validator(t) {
      for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      return k(t).reduce((i, n, l) => {
        const s = Object.entries(n).reduce((d, c) => {
          let [u, p] = c;
          const f = e[u] || {}, h = Object.entries(f).reduce((m, _) => {
            let [y, x] = _;
            const $ = Ll(x).call(this, p, n, l, ...r), g = Bl($);
            if (m.$data[y] = $, m.$data.$invalid = !g || !!m.$data.$invalid, m.$data.$error = m.$data.$invalid, !g) {
              let E = x.$message || "";
              const z = x.$params || {};
              typeof E == "function" && (E = E({
                $pending: !1,
                $invalid: !g,
                $params: z,
                $model: p,
                $response: $
              })), m.$errors.push({
                $property: u,
                $message: E,
                $params: z,
                $response: $,
                $model: p,
                $pending: !1,
                $validator: y
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
          return d.$data[u] = h.$data, d.$errors[u] = h.$errors, {
            $valid: d.$valid && h.$valid,
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
}, mu = (e) => (e = k(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function Yt() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return (r) => (r = k(r), !tr(r) || t.every((o) => (o.lastIndex = 0, o.test(r))));
}
var Ue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: vu,
  len: mu,
  normalizeValidatorObject: Gr,
  regex: Yt,
  req: tr,
  unwrap: k,
  unwrapNormalizedValidator: Ll,
  unwrapValidatorResponse: Bl,
  withAsync: hu,
  withMessage: fu,
  withParams: pu
});
Yt(/^[a-zA-Z]*$/);
Yt(/^[a-zA-Z0-9]*$/);
Yt(/^\d*(\.\d+)?$/);
const gu = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
Yt(gu);
function bu(e) {
  return typeof e == "string" && (e = e.trim()), tr(e);
}
var Ga = {
  $validator: bu,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function wu(e) {
  return (t) => k(t) === k(e);
}
function yu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: wu(e),
    $message: (a) => `The value must be equal to the ${t} value`,
    $params: {
      equalTo: e,
      otherName: t,
      type: "sameAs"
    }
  };
}
const xu = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
Yt(xu);
function ku(e) {
  return (t) => !tr(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +k(e);
}
function Tr(e) {
  return {
    $validator: ku(e),
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
function _u(e) {
  return (t) => !tr(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +k(e);
}
var Ar = ((e) => ({
  $validator: _u(e),
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
}));
Yt(/(^[0-9]*$)|(^-[0-9]+$)/);
Yt(/^[-]?\d*(\.\d+)?$/);
function $u(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
function Su(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
function Cu(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zu(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" })
  ]);
}
const Eu = { class: "mini-icon" }, Ou = {
  __name: "PIconMini",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), C("i", Eu, [
      (w(), te($a(e.icon)))
    ]));
  }
}, ht = /* @__PURE__ */ pe(Ou, [["__scopeId", "data-v-206f9b1b"]]), Tu = {
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
  "editor.default_option.title": "Standaardoptie",
  "editor.default_option.description": "Selecteer een optie om standaard in te stellen voor deze stap.",
  "editor.default_option.label": "Standaard instellen",
  "editor.default_option_value.title": "Standaardwaarde",
  "editor.default_option_value.description": "Stel een standaardwaarde in voor de geselecteerde optie.",
  "editor.default_option_value.label": "Standaardwaarde instellen",
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
  "editor.no_option": "Geen accessoires",
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
  "step.recalculate": "Opnieuw berekenen",
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
  "input.country_selection": "Land selectie",
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
  "toast.error": "Er is een fout opgetreden",
  "toast.saved": "{item} opgeslagen",
  "toast.save_failed": "{item} opslaan mislukt",
  "toast.retrieve_failed": "{item} ophalen mislukt",
  "toast.refresh_now": "Ververs nu",
  "toast.deleted": "{item} verwijderd",
  "toast.delete_failed": "{item} verwijderen mislukt",
  "toast.please_refresh_and_try_again": "Ververs de pagina en probeer het opnieuw."
}, Au = {
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
  "editor.default_option.title": "Default option",
  "editor.default_option.description": "Select an option to set as default for this step.",
  "editor.default_option.label": "Set as default",
  "editor.default_option_value.title": "Default value",
  "editor.default_option_value.description": "Set a default value for the selected option.",
  "editor.default_option_value.label": "Set default value",
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
  "editor.no_option": "No accessories",
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
  "step.recalculate": "Recalculate",
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
  "input.country_selection": "Country selection",
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
  "toast.error": "An error occurred",
  "toast.saved": "Saved {item}",
  "toast.save_failed": "Failed to save {item}",
  "toast.retrieve_failed": "Failed to retrieve {item}",
  "toast.refresh_now": "Refresh now",
  "toast.deleted": "Deleted {item}",
  "toast.delete_failed": "Failed to delete {item}",
  "toast.please_refresh_and_try_again": "Please refresh the page and try again."
}, Vu = {
  "copy-button.copy": "Kopie",
  "copy-button.copied": "Kopiert!",
  "theme-toggle.toggle_theme": "Zum {theme} Thema wechseln",
  "theme-toggle.light": "hell",
  "theme-toggle.dark": "dunkel",
  "delivery.delivery_options": "Verfügbare Lieferdaten",
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
  "editor.default_option.title": "Standardwert",
  "editor.default_option.description": "Wählen Sie eine Option, um sie als Standard für diesen Schritt festzulegen.",
  "editor.default_option.label": "Als Standard festlegen",
  "editor.default_option_value.title": "Standardwert",
  "editor.default_option_value.description": "Legen Sie einen Standardwert für die ausgewählte Option fest.",
  "editor.default_option_value.label": "Standardwert festlegen",
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
  "editor.no_option": "Keine Zubehörteile",
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
  "step.recalculate": "Neu berechnen",
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
  "input.country_selection": "Länderauswahl",
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
  "toast.error": "Ein Fehler ist aufgetreten",
  "toast.saved": "{item} gespeichert",
  "toast.save_failed": "{item} konnte nicht gespeichert werden",
  "toast.retrieve_failed": "{item} konnte nicht abgerufen werden",
  "toast.refresh_now": "Jetzt aktualisieren",
  "toast.deleted": "{item} gelöscht",
  "toast.delete_failed": "{item} konnte nicht gelöscht werden",
  "toast.please_refresh_and_try_again": "Bitte aktualisiere die Seite und versuche es erneut."
}, Pu = { nl: Tu, en: Au, de: Vu };
function Dl(e, t = {}) {
  return e.replace(/{(\w+)}/g, (a, r) => t[r] || `{${r}}`);
}
function Fl(e) {
  const [t] = e.split("."), a = e.substring(e.indexOf(".") + 1);
  return Pu[Zt.language][`${t}.${a}`] || e;
}
function ju(e, t) {
  return e.replace(/{(\d+)}/g, (a, r) => t[r] || `{${r}}`);
}
function Iu(e, t, a = {}) {
  const r = e.split("|").map((i) => i.trim());
  let o;
  return r.length === 1 ? [o] = r : r.length === 2 ? t === 1 ? [o] = r : [, o] = r : t === 0 ? [o] = r : t === 1 ? [, o] = r : o = r[Math.min(t, r.length - 1)], Dl(o, { ...a, count: t, n: t });
}
function N(e, t = null) {
  const a = Fl(e);
  return Array.isArray(t) ? ju(a) : Dl(a, t);
}
function Mu(e, t, a = null) {
  return Iu(Fl(e), t, a);
}
const Nu = { class: "amount-input-container" }, Bu = ["disabled", "aria-label"], Lu = ["id", "disabled", "aria-invalid", "aria-describedby"], Du = ["disabled", "aria-label"], Fu = ["id"], Ru = {
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
    const a = e, r = t, o = j({
      get() {
        return !a.allowEmpty && !a.modelValue ? 1 : a.modelValue;
      },
      set(h) {
        d(h);
      }
    }), i = j(() => a.allowEmpty ? !o.value : o.value === 1), n = j(() => o.value >= a.max), l = j(() => !!a.error), s = j(() => `${a.id}-error`);
    function d(h) {
      if (a.allowEmpty && !h) {
        r("update:model-value", null);
        return;
      }
      h < 0 || Number.isNaN(h) || typeof h != "number" || !h ? (pi(o), r("update:model-value", 1)) : h > a.max ? (pi(o), r("update:model-value", a.max)) : r("update:model-value", h);
    }
    function c() {
      o.value -= 1;
    }
    function u() {
      o.value += 1;
    }
    const p = j(() => a.required ? { value: { required: Ue.withMessage(() => N("input.required"), Ga) } } : { value: {} }), f = Gt(p.value, { value: o });
    return (h, m) => (w(), C("div", Nu, [
      B("div", {
        class: ve(["amount-input", { small: e.small }])
      }, [
        B("button", {
          disabled: e.disabled || i.value,
          class: "minus",
          "aria-label": k(N)("amount-input.minus_one"),
          onClick: qe(c, ["stop"])
        }, [
          e.small ? (w(), te(ht, {
            key: 1,
            icon: k(Cu)
          }, null, 8, ["icon"])) : (w(), te(ua, {
            key: 0,
            icon: k($u)
          }, null, 8, ["icon"]))
        ], 8, Bu),
        ca(B("input", {
          id: e.id,
          "onUpdate:modelValue": m[0] || (m[0] = (_) => o.value = _),
          class: ve([{ "has-error": e.error }, "input"]),
          disabled: e.disabled,
          "aria-label": "Amount input",
          "aria-invalid": l.value,
          "aria-describedby": l.value ? s.value : null,
          type: "number",
          onBlur: m[1] || (m[1] = (_) => {
            k(f).value?.$touch(_), r("blur", _);
          }),
          onFocus: m[2] || (m[2] = (_) => r("focus", _))
        }, null, 42, Lu), [
          [zr, o.value]
        ]),
        B("button", {
          disabled: e.disabled || n.value,
          class: "plus",
          "aria-label": k(N)("amount-input.plus_one"),
          onClick: qe(u, ["stop"])
        }, [
          e.small ? (w(), te(ht, {
            key: 1,
            icon: k(zu)
          }, null, 8, ["icon"])) : (w(), te(ua, {
            key: 0,
            icon: k(Su)
          }, null, 8, ["icon"]))
        ], 8, Du)
      ], 2),
      e.error || k(f).value?.$errors[0]?.$message ? (w(), C("span", {
        key: 0,
        id: s.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, q(e.error || k(f).value.$errors[0].$message), 9, Fu)) : W("", !0)
    ]));
  }
}, ei = /* @__PURE__ */ pe(Ru, [["__scopeId", "data-v-ee49f574"]]);
function ti(e, t) {
  return Lo() ? (ys(e, t), !0) : !1;
}
const po = /* @__PURE__ */ new WeakMap(), Uu = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], r = (t = gt()) === null || t === void 0 ? void 0 : t.proxy, o = r ?? Lo();
  if (o == null && !rl()) throw new Error("injectLocal must be called in setup");
  return o && po.has(o) && a in po.get(o) ? po.get(o)[a] : It(...e);
}, qu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Hu = (e) => e != null, Ku = Object.prototype.toString, Wu = (e) => Ku.call(e) === "[object Object]", wa = () => {
};
function tn(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function hr(e) {
  return Array.isArray(e) ? e : [e];
}
function Zu(e) {
  return gt();
}
function Gu(e, t = !0, a) {
  Zu() ? ct(e, a) : t ? e() : Ct(e);
}
function Ju(e, t, a) {
  return he(e, t, {
    ...a,
    immediate: !0
  });
}
const Xt = qu ? window : void 0;
function ia(e) {
  var t;
  const a = st(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function nt(...e) {
  const t = [], a = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, s, d, c) => (l.addEventListener(s, d, c), () => l.removeEventListener(s, d, c)), o = j(() => {
    const l = hr(st(e[0])).filter((s) => s != null);
    return l.every((s) => typeof s != "string") ? l : void 0;
  }), i = Ju(() => {
    var l, s;
    return [
      (l = (s = o.value) === null || s === void 0 ? void 0 : s.map((d) => ia(d))) !== null && l !== void 0 ? l : [Xt].filter((d) => d != null),
      hr(st(o.value ? e[1] : e[0])),
      hr(k(o.value ? e[2] : e[1])),
      st(o.value ? e[3] : e[2])
    ];
  }, ([l, s, d, c]) => {
    if (a(), !l?.length || !s?.length || !d?.length) return;
    const u = Wu(c) ? { ...c } : c;
    t.push(...l.flatMap((p) => s.flatMap((f) => d.map((h) => r(p, f, h, u)))));
  }, { flush: "post" }), n = () => {
    i(), a();
  };
  return ti(a), n;
}
function Yu(e, t, a = {}) {
  const { window: r = Xt, ignore: o = [], capture: i = !0, detectIframe: n = !1, controls: l = !1 } = a;
  if (!r) return l ? {
    stop: wa,
    cancel: wa,
    trigger: wa
  } : wa;
  let s = !0;
  const d = (_) => st(o).some((y) => {
    if (typeof y == "string") return Array.from(r.document.querySelectorAll(y)).some((x) => x === _.target || _.composedPath().includes(x));
    {
      const x = ia(y);
      return x && (_.target === x || _.composedPath().includes(x));
    }
  });
  function c(_) {
    const y = st(_);
    return y && y.$.subTree.shapeFlag === 16;
  }
  function u(_, y) {
    const x = st(_), $ = x.$.subTree && x.$.subTree.children;
    return $ == null || !Array.isArray($) ? !1 : $.some((g) => g.el === y.target || y.composedPath().includes(g.el));
  }
  const p = (_) => {
    const y = ia(e);
    if (_.target != null && !(!(y instanceof Element) && c(e) && u(e, _)) && !(!y || y === _.target || _.composedPath().includes(y))) {
      if ("detail" in _ && _.detail === 0 && (s = !d(_)), !s) {
        s = !0;
        return;
      }
      t(_);
    }
  };
  let f = !1;
  const h = [
    nt(r, "click", (_) => {
      f || (f = !0, setTimeout(() => {
        f = !1;
      }, 0), p(_));
    }, {
      passive: !0,
      capture: i
    }),
    nt(r, "pointerdown", (_) => {
      const y = ia(e);
      s = !d(_) && !!(y && !_.composedPath().includes(y));
    }, { passive: !0 }),
    n && nt(r, "blur", (_) => {
      setTimeout(() => {
        var y;
        const x = ia(e);
        ((y = r.document.activeElement) === null || y === void 0 ? void 0 : y.tagName) === "IFRAME" && !x?.contains(r.document.activeElement) && t(_);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), m = () => h.forEach((_) => _());
  return l ? {
    stop: m,
    cancel: () => {
      s = !1;
    },
    trigger: (_) => {
      s = !0, p(_), s = !1;
    }
  } : m;
}
// @__NO_SIDE_EFFECTS__
function Xu() {
  const e = St(!1), t = gt();
  return t && ct(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Rl(e) {
  const t = /* @__PURE__ */ Xu();
  return j(() => (t.value, !!e()));
}
function Qu(e, t, a = {}) {
  const { window: r = Xt, ...o } = a;
  let i;
  const n = /* @__PURE__ */ Rl(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, s = he(j(() => {
    const u = hr(st(e)).map(ia).filter(Hu);
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
function ep(e, t, a = {}) {
  const { window: r = Xt, document: o = r?.document, flush: i = "sync" } = a;
  if (!r || !o) return wa;
  let n;
  const l = (c) => {
    n?.(), n = c;
  }, s = hl(() => {
    const c = ia(e);
    if (c) {
      const { stop: u } = Qu(o, (p) => {
        p.map((f) => [...f.removedNodes]).flat().some((f) => f === c || f.contains(c)) && t(p);
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
function tp(e = {}) {
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
    nt(a, "blur", (c) => {
      c.relatedTarget === null && s();
    }, d), nt(a, "focus", s, d);
  }
  return o && ep(l, s, { document: i }), s(), l;
}
const ap = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function rp() {
  const e = rl() ? /* @__PURE__ */ Uu(ap, null) : null;
  return typeof e == "number" ? e : void 0;
}
function op(e, t = {}) {
  const { window: a = Xt, ssrWidth: r = /* @__PURE__ */ rp() } = t, o = /* @__PURE__ */ Rl(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), i = St(typeof r == "number"), n = St(), l = St(!1), s = (d) => {
    l.value = d.matches;
  };
  return hl(() => {
    if (i.value) {
      i.value = !o.value, l.value = st(e).split(",").some((d) => {
        const c = d.includes("not all"), u = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), p = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let f = !!(u || p);
        return u && f && (f = r >= tn(u[1])), p && f && (f = r <= tn(p[1])), c ? !f : f;
      });
      return;
    }
    o.value && (n.value = a.matchMedia(st(e)), l.value = n.value.matches);
  }), nt(n, "change", s, { passive: !0 }), j(() => l.value);
}
const ip = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function Ul(e = {}) {
  const { reactive: t = !1, target: a = Xt, aliasMap: r = ip, passive: o = !0, onEventFired: i = wa } = e, n = Je(/* @__PURE__ */ new Set()), l = {
    toJSON() {
      return {};
    },
    current: n
  }, s = t ? Je(l) : l, d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map([
    ["Meta", d],
    ["Shift", /* @__PURE__ */ new Set()],
    ["Alt", /* @__PURE__ */ new Set()]
  ]), u = /* @__PURE__ */ new Set();
  function p(x, $) {
    x in s && (t ? s[x] = $ : s[x].value = $);
  }
  function f() {
    n.clear();
    for (const x of u) p(x, !1);
  }
  function h(x, $, g) {
    if (!(!x || typeof $.getModifierState != "function")) {
      for (const [E, z] of c) if ($.getModifierState(E)) {
        g.forEach((H) => z.add(H));
        break;
      }
    }
  }
  function m(x, $) {
    if (x) return;
    const g = `${$[0].toUpperCase()}${$.slice(1)}`, E = c.get(g);
    if (!["shift", "alt"].includes($) || !E) return;
    const z = Array.from(E), H = z.indexOf($);
    z.forEach((G, Z) => {
      Z >= H && (n.delete(G), p(G, !1));
    }), E.clear();
  }
  function _(x, $) {
    var g, E;
    const z = (g = x.key) === null || g === void 0 ? void 0 : g.toLowerCase(), H = [(E = x.code) === null || E === void 0 ? void 0 : E.toLowerCase(), z].filter(Boolean);
    z && ($ ? n.add(z) : n.delete(z));
    for (const G of H)
      u.add(G), p(G, $);
    h($, x, [...n, ...H]), m($, z), z === "meta" && !$ && (d.forEach((G) => {
      n.delete(G), p(G, !1);
    }), d.clear());
  }
  nt(a, "keydown", (x) => (_(x, !0), i(x)), { passive: o }), nt(a, "keyup", (x) => (_(x, !1), i(x)), { passive: o }), nt("blur", f, { passive: o }), nt("focus", f, { passive: o });
  const y = new Proxy(s, { get(x, $, g) {
    if (typeof $ != "string") return Reflect.get(x, $, g);
    if ($ = $.toLowerCase(), $ in r && ($ = r[$]), !($ in s)) if (/[+_-]/.test($)) {
      const z = $.split(/[+_-]/g).map((H) => H.trim());
      s[$] = j(() => z.map((H) => st(y[H])).every(Boolean));
    } else s[$] = St(!1);
    const E = Reflect.get(x, $, g);
    return t ? st(E) : E;
  } });
  return y;
}
// @__NO_SIDE_EFFECTS__
function np(e = {}) {
  const { window: t = Xt, initialWidth: a = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: o = !0, includeScrollbar: i = !0, type: n = "inner" } = e, l = St(a), s = St(r), d = () => {
    if (t) if (n === "outer")
      l.value = t.outerWidth, s.value = t.outerHeight;
    else if (n === "visual" && t.visualViewport) {
      const { width: u, height: p, scale: f } = t.visualViewport;
      l.value = Math.round(u * f), s.value = Math.round(p * f);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  d(), Gu(d);
  const c = { passive: !0 };
  return nt("resize", d, c), t && n === "visual" && t.visualViewport && nt(t.visualViewport, "resize", d, c), o && he(op("(orientation: portrait)"), () => d()), {
    width: l,
    height: s
  };
}
function lp(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })
  ]);
}
function sp(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const dp = { class: "micro-icon" }, cp = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), C("i", dp, [
      (w(), te($a(e.icon)))
    ]));
  }
}, Jr = /* @__PURE__ */ pe(cp, [["__scopeId", "data-v-08f67949"]]), { width: ut, height: up } = /* @__PURE__ */ np();
function pp() {
  return {
    /** < 640px */
    isXs: j(() => ut.value < 640),
    /** 640px - 768px */
    isSm: j(() => ut.value >= 640 && ut.value < 768),
    /** 768px - 1024px */
    isMd: j(() => ut.value >= 768 && ut.value < 1024),
    /** 1024px - 1280px */
    isLg: j(() => ut.value >= 1024 && ut.value <= 1280),
    /** 1280px - 1536px */
    isXl: j(() => ut.value > 1280 && ut.value <= 1536),
    /** > 1536px */
    is2Xl: j(() => ut.value > 1536),
    width: j(() => ut.value),
    height: j(() => up.value)
  };
}
const fp = {
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
    const { isXs: t, isSm: a, isMd: r } = pp();
    return (o, i) => !k(t) && !k(a) && !k(r) ? (w(), C("div", {
      key: 0,
      class: ve(["hotkey", [`${e.disabled ? "secondary" : e.variant}-hotkey`, { disabled: e.disabled }]])
    }, q(e.hotkey), 3)) : W("", !0);
  }
}, ql = /* @__PURE__ */ pe(fp, [["__scopeId", "data-v-47dd263a"]]), hp = {
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
    const a = e, r = t, o = ee(null);
    function i(s) {
      s && r("set:activator", s);
    }
    function n(s) {
      i(s.currentTarget), r(a.modelValue ? "close" : "open");
    }
    function l(s) {
      i(s.currentTarget);
    }
    return he(
      () => [a.modelValue, a.floatingContainerEl, a.activatorEl],
      ([s]) => {
        if (o.value?.(), o.value = null, !s || !a.floatingContainerEl)
          return;
        const d = [a.activatorEl].filter(Boolean);
        requestAnimationFrame(() => {
          o.value = Yu(
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
}, vp = {
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
    return he(
      () => a.isFocused,
      (l) => {
        l || r("close");
      }
    ), (l, s) => le(l.$slots, "default", {
      slotProps: { onFocus: o, onInput: i, onClick: n }
    });
  }
}, mp = {
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
    const a = e, r = t, o = ee(!1), i = ee(!1);
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
    return he(
      () => a.modelValue,
      () => {
        a.modelValue || (o.value = !1);
      }
    ), (c, u) => le(c.$slots, "default", {
      slotProps: { onMouseover: l, onMouseleave: n, onFocus: s, onBlur: d }
    });
  }
}, gp = {
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
}, bp = {};
function wp(e, t) {
  return w(), te(Wa, { name: "NO_TRANSITION" }, {
    default: L(() => [
      le(e.$slots, "default")
    ]),
    _: 3
  });
}
const yp = /* @__PURE__ */ pe(bp, [["render", wp]]), xp = {};
function kp(e, t) {
  return w(), te(Wa, null, {
    default: L(() => [
      le(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const _p = /* @__PURE__ */ pe(xp, [["render", kp], ["__scopeId", "data-v-ed45de91"]]), $p = {
  __name: "_ExpandTransition",
  props: {
    placement: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), te(Wa, {
      name: `expand-${e.placement}`
    }, {
      default: L(() => [
        le(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, Sp = /* @__PURE__ */ pe($p, [["__scopeId", "data-v-76306795"]]), Cp = {
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
    return ct(() => {
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
function vr(e, t = !1) {
  if (!e)
    return [];
  const a = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((r) => `${r}${t ? "" : ':not([tabindex="-1"])'}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(a)];
}
const zp = {
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
function Ep(e) {
  return e?.ownerDocument?.defaultView || window;
}
function Hl(e) {
  const { overflow: t, overflowX: a, overflowY: r, display: o } = getComputedStyle(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + a) && !["inline", "contents"].includes(o);
}
function Op(e) {
  return !e || ["html", "body", "#document"].includes(e.nodeName.toLowerCase());
}
function Tp(e) {
  return e instanceof HTMLElement;
}
function Ap(e) {
  return e.getRootNode ? e.getRootNode() : e;
}
function Vp(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host || Ap(e).host || null;
}
function Kl(e) {
  const t = Vp(e);
  return Op(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Tp(t) && Hl(t) ? t : Kl(t);
}
function Wl(e, t = []) {
  const a = Kl(e), r = a === e?.ownerDocument?.body, o = Ep(a);
  return r ? t.concat(
    o,
    o.visualViewport || [],
    Hl(a) ? a : []
  ) : t.concat(a, Wl(a, []));
}
function Zl(e, t, a, r) {
  const { clientWidth: o, clientHeight: i } = document.documentElement, n = window.scrollY || document.documentElement.scrollTop || 0, l = window.scrollX || document.documentElement.scrollLeft || 0;
  return e >= n && t >= l && t + a <= l + (window.innerWidth || o) && e + r <= n + (window.innerHeight || i);
}
const Po = ee(!1), va = ee(!1), ma = ee(!1);
function Pp(e, t, a, r, o = 4) {
  const i = window.scrollY || document.documentElement.scrollTop || 0, n = window.scrollX || document.documentElement.scrollLeft || 0, l = window.innerHeight || document.documentElement.clientHeight, s = window.innerWidth || document.documentElement.clientWidth;
  let d = e, c = t;
  const u = i + l - o, p = n + s - o, f = i + o, h = n + o;
  d + r > u && (d = Math.max(f, u - r)), d < f && (d = f), c + a > p && (c = Math.max(h, p - a)), c < h && (c = h);
  const m = u - f, _ = p - h;
  return {
    top: d,
    left: c,
    needsVerticalClamp: r > m,
    needsHorizontalClamp: a > _,
    maxHeight: Math.min(r, m),
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
function jp(e, t, a, r) {
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
async function Ip(e, t, a, r, o = null) {
  let i;
  if (o) {
    const p = o.clientX, f = o.clientY;
    i = {
      top: f,
      left: p,
      right: p,
      bottom: f,
      width: 0,
      height: 0,
      x: p,
      y: f
    };
  } else
    i = a.getBoundingClientRect();
  const [n, l] = r.location.replaceAll(" ", "").split(","), s = l || "center", d = jp(i, t, e, r), c = (p, f) => {
    const h = d[p](f);
    return Zl(h.top, h.left, t, e) ? { placement: p, alignment: f, ...h } : null;
  };
  let u = c(n, s);
  return u || ((an[n][s] || []).some((p) => (u = c(n, p), !!u)), u) || (zp[n].some((p) => (u = c(p, s), u ? !0 : Object.keys(an[p]).some((f) => (u = c(p, f), !!u)))), u) ? u : { placement: n, alignment: s, ...d[n](s) };
}
function Mp(e, t) {
  const a = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  a.width !== r.width && (e.style.minWidth = `${a.width}px`);
}
async function Np(e, t, a, r = null) {
  if (e.style.visibility !== "visible") {
    const p = e.style.visibility;
    e.style.visibility = "hidden", e.showPopover(), await new Promise((f) => {
      requestAnimationFrame(() => requestAnimationFrame(f));
    }), e.style.visibility = p || "hidden";
  }
  let o;
  a.attach instanceof HTMLElement ? o = a.attach : typeof a.attach == "string" ? o = document.querySelector(a.attach) : o = t, va.value || (e.style.maxHeight = "", e.style.overflowY = ""), ma.value || (e.style.maxWidth = "", e.style.overflowX = ""), a.fitContent || (Mp(e, o), await Promise.resolve());
  const i = e.getBoundingClientRect(), n = e.scrollHeight || e.clientHeight || Math.ceil(i.height), l = e.scrollWidth || e.clientWidth || Math.ceil(i.width), s = await Ip(n, l, o, a, r), d = Zl(s.top, s.left, l, n);
  let c = s.top, u = s.left;
  if (Po.value = !0, !d && a.clamp) {
    const p = Pp(s.top, s.left, l, n);
    c = p.top, u = p.left, p.needsVerticalClamp ? (va.value = !0, e.style.maxHeight = `${p.maxHeight}px`, e.style.overflowY = "auto") : va.value && (va.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), p.needsHorizontalClamp ? (ma.value = !0, e.style.maxWidth = `${p.maxWidth}px`, e.style.overflowX = "auto") : ma.value && (ma.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  } else
    va.value && (va.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), ma.value && (ma.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  return e.style.top = `${c}px`, e.style.left = `${u}px`, e.style.visibility = "visible", requestAnimationFrame(() => {
    Po.value = !1;
  }), { placement: s.placement, alignment: s.alignment };
}
function Bp(e, t) {
  const a = ee(), r = ee(), o = ee(), i = ee(), n = Je({
    location: "bottom",
    fitContent: !1,
    attach: null,
    offset: 0,
    clamp: !0
  }), l = Je([]);
  function s() {
    return !e.value || !t.value ? null : Np(e.value, t.value, n, i.value).then((p) => {
      a.value = p.placement, r.value = p.alignment;
    });
  }
  function d() {
    l.forEach((p) => {
      p.removeEventListener("scroll", s), p.removeEventListener("resize", s);
    }), l.splice(0), e.value && (l.push(...Wl(e.value)), l.forEach((p) => {
      p.addEventListener("scroll", s, { passive: !0 }), p.addEventListener("resize", s);
    }));
  }
  function c() {
    o.value = new ResizeObserver(() => {
      Po.value || requestAnimationFrame(s);
    });
  }
  function u(p) {
    Object.keys(p).forEach((f) => {
      f in n && (n[f] = p[f]);
    });
  }
  return he(e, (p, f) => {
    o.value || c(), f && o.value?.unobserve(f), t.value && o.value?.unobserve(t.value), p && t.value && (o.value.observe(p), o.value.observe(t.value));
  }), pa(() => {
    l.forEach((p) => {
      p.removeEventListener("scroll", s), p.removeEventListener("resize", s);
    }), l.splice(0), o.value?.disconnect();
  }), {
    autoUpdate: (p = { location: "bottom" }) => {
      u(p), [a.value, r.value] = n.location.replaceAll(" ", "").split(","), he([e, t], async ([f, h]) => {
        d(), f && h && await s();
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
      async function p(f) {
        i.value = f, e.value && await s();
      }
      he(
        t,
        (f, h) => {
          h && h.removeEventListener("mousemove", p), f && f.addEventListener("mousemove", p);
        },
        { immediate: !0 }
      );
    },
    placement: a,
    alignment: r
  };
}
const Lp = ["aria-hidden", "aria-label"], Dp = { class: "floating-container-overlay" }, Fp = ["aria-expanded"], Rp = {
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
    attachToCursor: Boolean,
    ariaLabel: {
      type: String,
      required: !0
    }
  },
  emits: ["update:isOpen", "update:focus", "update:location"],
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = Qa("floating-container-content"), n = ee(null), { autoUpdate: l, fixedPosition: s, watchCursor: d, placement: c, alignment: u } = Bp(
      i,
      n
    ), p = /* @__PURE__ */ tp(), f = ee(!1), h = ee(!1), m = ee(-1), _ = j(() => p.value === n.value || p.value === i.value || n.value?.contains(p.value) || i.value?.contains(p.value) || !1), y = j(() => {
      switch (r.behavior) {
        case "focus":
          return { component: vp, props: { isFocused: _.value } };
        case "hover":
          return {
            component: mp,
            props: { floatingContainerEl: i.value }
          };
        case "manual":
          return { component: gp };
        case "static":
          return { component: Cp };
        default:
          return {
            component: hp,
            props: {
              floatingContainerEl: i.value,
              activatorEl: n.value
            }
          };
      }
    });
    function x(V) {
      n.value = V;
    }
    async function $() {
      clearTimeout(m.value), m.value = setTimeout(async () => {
        f.value = !0, o("update:isOpen", !0), await Ct(), await new Promise(requestAnimationFrame), h.value = !0;
      }, r.delay);
    }
    function g() {
      clearTimeout(m.value), h.value = !1, r.transition !== "fade" && r.transition !== "expand" && (f.value = !1);
    }
    function E() {
      f.value = !1, o("update:isOpen", !1);
    }
    function z() {
      !r.closeOnClick || !f.value || r.behavior === "static" || (n.value?.focus(), g());
    }
    function H(V) {
      if (V.key === "Tab") {
        const re = vr(i.value, !0), R = re.indexOf(document.activeElement), M = V.shiftKey ? R - 1 : R + 1;
        re[M] ? (V.preventDefault(), re[M].focus()) : (V.preventDefault(), M <= 0 && n.value.focus());
      } else if (V.key === "Escape") {
        if (r.behavior === "static")
          return;
        n.value.focus(), g();
      } else V.key === "Enter" && (V.preventDefault(), V.stopPropagation(), V.stopImmediatePropagation(), r.closeOnClick && r.behavior !== "static" && (n.value.focus(), g()));
    }
    async function G(V) {
      if (V.key === "Escape") {
        if (r.behavior === "static")
          return;
        V.preventDefault(), V.stopPropagation(), V.stopImmediatePropagation(), g();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(V.key))
        return;
      i.value || (await $(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const re = vr(i.value);
      if (re.length === 0)
        return;
      V.preventDefault(), V.stopPropagation(), V.stopImmediatePropagation();
      const R = re.indexOf(document.activeElement);
      R === -1 ? vr(i.value)[0].focus() : V.key === "ArrowDown" ? re[R + 1]?.focus() : V.key === "ArrowUp" && re[R - 1]?.focus();
    }
    he(
      () => _.value,
      () => o("update:focus", _.value)
    ), he([c, u], () => {
      o("update:location", [c.value, u.value].filter(Boolean).join(","));
    });
    const Z = j(() => {
      switch (r.transition) {
        case "fade":
          return _p;
        case "expand":
          return Sp;
        default:
          return yp;
      }
    });
    return ct(async () => {
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
          $(), s({
            location: r.location,
            attach: r.attach,
            offset: r.offset
          });
          break;
        default:
          console.warn(`Behavior "${r.behavior}" is not supported.`);
      }
    }), t({
      close: g
    }), (V, re) => (w(), C(_e, null, [
      y.value ? (w(), te($a(y.value.component), De({ key: 0 }, y.value.props, {
        "model-value": f.value,
        onOpen: $,
        onClose: g,
        "onSet:activator": x
      }), {
        default: L(({ slotProps: R }) => [
          le(V.$slots, "activator", Br(Go({ ...R, onKeydown: G })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : W("", !0),
      f.value ? (w(), C("div", {
        key: 1,
        class: "floating-container-overlay-container",
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !h.value,
        "aria-label": e.ariaLabel
      }, [
        B("div", Dp, [
          (w(), te($a(Z.value), {
            key: e.behavior !== "static" ? `${k(c) || "unknown"}-${k(u) || "unknown"}` : null,
            placement: k(c),
            alignment: k(u),
            appear: "",
            onAfterLeave: E
          }, {
            default: L(() => [
              ca(B("div", {
                ref: "floating-container-content",
                class: "floating-container-content",
                "data-testid": "menu",
                popover: "manual",
                tabindex: "-1",
                role: "menu",
                "aria-expanded": f.value ? "true" : "false",
                onKeydown: H,
                onClick: z
              }, [
                le(V.$slots, "default", {}, void 0, !0)
              ], 40, Fp), [
                [Yo, h.value]
              ])
            ]),
            _: 3
          }, 40, ["placement", "alignment"]))
        ])
      ], 8, Lp)) : W("", !0)
    ], 64));
  }
}, Gl = /* @__PURE__ */ pe(Rp, [["__scopeId", "data-v-fa4dfb8f"]]), Up = {
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
    const t = et(e, "location"), a = Qa("tooltip-wrapper"), r = j(() => a.value?.children[0]);
    return (o, i) => (w(), te(Gl, {
      offset: e.offset,
      behavior: e.behavior,
      location: t.value,
      "fit-content": e.width === "fit-content",
      attach: e.attach || r.value,
      delay: e.behavior !== "static" ? 150 : 0,
      "close-on-click": !1,
      "aria-label": e.text || "Tooltip",
      "onUpdate:location": i[0] || (i[0] = (n) => t.value = n)
    }, {
      activator: L((n) => [
        B("div", De({
          ref: "tooltip-wrapper",
          class: "tooltip-wrapper"
        }, n), [
          le(o.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      default: L(() => [
        e.text || o.$slots.content ? (w(), C("div", {
          key: 0,
          class: ve(["tooltip", [t.value.replace(/,/g, "-"), { inverted: e.inverted }]]),
          style: Jt({ width: e.width }),
          "data-testid": "tooltip",
          role: "menuitem"
        }, [
          le(o.$slots, "content", {}, () => [
            ce(q(e.text), 1)
          ], !0)
        ], 6)) : W("", !0)
      ]),
      _: 3
    }, 8, ["offset", "behavior", "location", "fit-content", "attach", "delay", "aria-label"]));
  }
}, Ja = /* @__PURE__ */ pe(Up, [["__scopeId", "data-v-d7f78e8b"]]), qp = ["for"], Hp = { class: "label-text" }, Kp = {
  variant: "text",
  size: "small"
}, Wp = {
  key: 0,
  class: "optional"
}, Zp = { class: "container-inner" }, Gp = {
  key: 0,
  class: "inline-container-prepended"
}, Jp = ["id", "placeholder", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "rows", "autofocus"], Yp = ["id", "placeholder", "type", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "autofocus"], Xp = { class: "inline-container-appended" }, Qp = {
  key: 1,
  class: "text"
}, ef = ["id"], tf = {
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
    const r = e, o = et(e, "modelValue"), i = Qn(), n = a, l = It("showError", !0), s = Ul()[r.hotkey.key], d = ee(null), c = j(() => r.error ? lp : r.icon), u = j(() => r.optional !== "" ? r.optional : N("input.optional")), p = j(() => r.requiredMessage ? r.requiredMessage : r.label ? N("input.required_with_label", { label: r.label.toLowerCase() }) : N("input.required")), f = j(() => {
      const x = r.required ? { modelValue: { required: Ue.withMessage(() => p.value, Ga) } } : { modelValue: {} };
      return r.rules.forEach(($, g) => {
        x.modelValue[$.label || g] = Ue.withMessage(() => $.message || "", $.validator);
      }), x;
    }), h = ee(Gt(f, { modelValue: o })), m = j(() => !!r.error || h.value.modelValue.$errors?.length > 0), _ = j(() => `${r.id}-error`);
    function y(x) {
      n("blur", x), h.value.$touch(x);
    }
    return he(s, (x) => {
      x && r.hotkey && setTimeout(() => {
        d.value.focus();
      }, 100);
    }), he(f, () => {
      h.value = Gt(f, { modelValue: o });
    }), t({
      input: d
    }), (x, $) => (w(), C("div", {
      class: ve(["input-container", { "has-error": m.value, "is-large": e.large }]),
      tabindex: "-1",
      onFocus: $[4] || ($[4] = (g) => x.$refs.input.focus())
    }, [
      e.label ? (w(), C("label", {
        key: 0,
        class: "input-label",
        for: e.id
      }, [
        B("span", Hp, [
          ce(q(e.label) + " ", 1),
          e.info || k(i).info ? (w(), te(Ja, {
            key: 0,
            location: "right",
            inverted: ""
          }, {
            content: L(() => [
              le(x.$slots, "info", {}, () => [
                ce(q(e.info), 1)
              ], !0)
            ]),
            default: L(() => [
              B("span", Kp, [
                K(Jr, {
                  class: "info-icon",
                  icon: k(sp)
                }, null, 8, ["icon"])
              ])
            ]),
            _: 3
          })) : W("", !0)
        ]),
        e.required ? W("", !0) : (w(), C("span", Wp, q(u.value), 1))
      ], 8, qp)) : W("", !0),
      B("div", Zp, [
        e.prependIcon ? (w(), C("div", Gp, [
          K(ua, { icon: e.prependIcon }, null, 8, ["icon"])
        ])) : W("", !0),
        e.expand ? ca((w(), C("textarea", De({
          key: 1,
          id: e.id,
          ref_key: "input",
          ref: d,
          "onUpdate:modelValue": $[0] || ($[0] = (g) => o.value = g),
          autocomplete: "off",
          class: ["input", {
            "has-error": m.value,
            "is-valid": e.valid,
            "has-icon-prepended": e.prependIcon,
            "has-icon-appended": e.icon
          }],
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": e.ariaLabel,
          "aria-invalid": m.value,
          "aria-describedby": m.value ? _.value : null,
          rows: e.rows,
          autofocus: e.autofocus
        }, x.$attrs, {
          onFocus: $[1] || ($[1] = (g) => n("focus", g)),
          onBlur: y
        }), null, 16, Jp)), [
          [zr, o.value]
        ]) : ca((w(), C("input", De({
          key: 2,
          id: e.id,
          ref_key: "input",
          ref: d,
          "onUpdate:modelValue": $[2] || ($[2] = (g) => o.value = g),
          autocomplete: "off",
          class: ["input", {
            "has-error": m.value,
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
          "aria-invalid": m.value,
          "aria-describedby": m.value ? _.value : null,
          autofocus: e.autofocus
        }, x.$attrs, {
          onFocus: $[3] || ($[3] = (g) => n("focus", g)),
          onBlur: y
        }), null, 16, Yp)), [
          [Ec, o.value]
        ]),
        B("div", Xp, [
          le(x.$slots, "inline", {}, () => [
            e.icon ? (w(), te(ua, {
              key: 0,
              icon: c.value,
              class: ve({ "has-error": m.value })
            }, null, 8, ["icon", "class"])) : W("", !0),
            e.inline ? (w(), C("span", Qp, q(e.inline), 1)) : W("", !0),
            e.hotkey.label ? (w(), te(ql, {
              key: 2,
              hotkey: e.hotkey.label,
              variant: "secondary"
            }, null, 8, ["hotkey"])) : W("", !0)
          ], !0)
        ])
      ]),
      m.value && k(l) ? (w(), C("span", {
        key: 1,
        id: _.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, q(h.value.modelValue?.$errors[0]?.$message ? h.value.modelValue.$errors[0].$message : e.error), 9, ef)) : W("", !0)
    ], 34));
  }
}, _t = /* @__PURE__ */ pe(tf, [["__scopeId", "data-v-790b73c6"]]);
function af(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function rf(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
const of = {
  __name: "PStepStatus",
  props: {
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    }
  },
  setup(e) {
    const t = e, a = j(() => {
      switch (t.status) {
        case "done":
          return af;
        case "attention":
          return rf;
        default:
          return null;
      }
    });
    return (r, o) => (w(), C("div", {
      class: ve(["status", e.status])
    }, [
      a.value ? (w(), te(Jr, {
        key: 0,
        icon: a.value
      }, null, 8, ["icon"])) : W("", !0)
    ], 2));
  }
}, Jl = /* @__PURE__ */ pe(of, [["__scopeId", "data-v-c0e73fbd"]]);
function nf(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function lf(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sf(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function df(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const cf = ["data-testid"], uf = { class: "icon" }, pf = { class: "content" }, ff = { class: "title" }, hf = {
  key: 0,
  class: "description"
}, vf = {
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
    const t = e, a = j(() => t.icon ? t.icon : t.type === "error" ? lf : t.type === "warning" ? sf : t.type === "success" ? nf : t.type === "info" ? df : null);
    return (r, o) => (w(), C("div", {
      class: ve(["alert", e.type]),
      "data-testid": `alert-${e.type}`
    }, [
      le(r.$slots, "default", {}, () => [
        B("div", uf, [
          K(ht, { icon: a.value }, null, 8, ["icon"])
        ]),
        B("div", pf, [
          B("span", ff, q(e.title), 1),
          e.description ? (w(), C("span", hf, q(e.description), 1)) : W("", !0)
        ])
      ], !0)
    ], 10, cf));
  }
}, Yr = /* @__PURE__ */ pe(vf, [["__scopeId", "data-v-e623b23f"]]), mf = {
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
    return (t, a) => (w(), C("div", {
      class: ve(["loader", `${e.color}-loader ${e.size}-loader`])
    }, null, 2));
  }
}, ai = /* @__PURE__ */ pe(mf, [["__scopeId", "data-v-7d40d0e0"]]), gf = ["tabindex", "disabled"], bf = {
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
    const t = e, a = Qn(), r = Ul()[t.hotkey.key], o = j(() => t.variant === "secondary" || t.variant === "tertiary" ? t.variant : t.variant === "text" ? "secondary" : "primary");
    return he(r, (i) => {
      i && t.hotkey?.key && !t.loading && !t.disabled && t.hotkey.callback();
    }), (i, n) => (w(), C("button", {
      class: ve(["button", [e.variant, e.size, e.color, k(a).default ? "" : "has-icon", e.loading ? "pointer-events-none" : ""]]),
      tabindex: e.loading ? -1 : 0,
      disabled: e.disabled
    }, [
      e.loading ? (w(), te(ai, {
        key: 0,
        color: ["danger", "success", "primary"].includes(e.variant) ? "secondary" : "primary",
        size: e.size
      }, null, 8, ["color", "size"])) : e.icon ? (w(), te(ht, {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : W("", !0),
      le(i.$slots, "default", {}, void 0, !0),
      e.hotkey.key ? (w(), te(ql, {
        key: 2,
        hotkey: e.hotkey.label,
        variant: o.value,
        disabled: e.disabled
      }, null, 8, ["hotkey", "variant", "disabled"])) : W("", !0)
    ], 10, gf));
  }
}, Mt = /* @__PURE__ */ pe(bf, [["__scopeId", "data-v-2b556282"]]), Yl = {
  __name: "PForm",
  setup(e, { expose: t }) {
    const a = Gt();
    function r() {
      return a.value.$validate();
    }
    function o() {
      return a.value.$reset();
    }
    return t({ validate: r, resetValidation: o }), (i, n) => (w(), C("form", {
      novalidate: "",
      onSubmit: n[0] || (n[0] = (l) => {
        l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation();
      })
    }, [
      le(i.$slots, "default")
    ], 32));
  }
};
function wf(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
    })
  ]);
}
function Xl(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    })
  ]);
}
function Ql(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
const yf = ["id"], xf = { class: "header" }, kf = {
  class: "title",
  part: "step-title"
}, _f = {
  key: 1,
  class: "separator"
}, $f = {
  key: 0,
  class: "subtitle status-text",
  part: "step-subtitle"
}, Sf = {
  key: 2,
  class: "total",
  part: "step-subtitle"
}, Cf = {
  key: 0,
  class: "content"
}, zf = {
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
    isHidden: Boolean,
    /** If the user can order with the current configuration */
    canOrder: Boolean
  },
  emits: ["update:modelValue", "update:focus", "edit:step", "recalculate"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = Qa("measurements-form"), i = ee({}), n = Je({
      width: null,
      height: null
    }), l = ee(1), s = ee(null), d = ee(!1), c = j(() => {
      const z = a.options.find((re) => re.code === "width"), H = a.options.find((re) => re.code === "height"), G = z && z.reversible && H && H.reversible, Z = z?.min, V = H?.min;
      return G ? Math.min(Z, V) : { width: Z, height: V };
    }), u = j(() => {
      const z = a.options.find((re) => re.code === "width"), H = a.options.find((re) => re.code === "height"), G = z && z.reversible && H && H.reversible, Z = z?.max, V = H?.max;
      return G ? Math.max(Z, V) : { width: Z, height: V };
    }), p = {
      width: {
        minValue: Ue.withMessage(
          N("step.min_value", {
            minValue: typeof c.value == "number" ? c.value : c.value.width
          }),
          Tr(typeof c.value == "number" ? c.value : c.value.width)
        ),
        required: Ue.withMessage(N("step.required"), Ga),
        maxValue: Ue.withMessage(
          N("step.max_value", {
            maxValue: typeof u.value == "number" ? u.value : u.value.width
          }),
          Ar(typeof u.value == "number" ? u.value : u.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          N("step.min_value", {
            minValue: typeof c.value == "number" ? c.value : c.value.height
          }),
          Tr(typeof c.value == "number" ? c.value : c.value.height)
        ),
        required: Ue.withMessage(N("step.required"), Ga),
        maxValue: Ue.withMessage(
          N("step.max_value", {
            maxValue: typeof u.value == "number" ? u.value : u.value.height
          }),
          Ar(typeof u.value == "number" ? u.value : u.value.height)
        )
      }
    }, f = Gt(p, n), h = ee(null), m = j(() => a.buttonStartText || N("step.new_configuration")), _ = j(() => {
      if (a.code === "measurement-amount") {
        const z = a.options.some((Z) => Z.code === "width"), H = a.options.some((Z) => Z.code === "height"), G = a.options.some((Z) => Z.code === "amount");
        if (z && (!n.width || f.value.$errors.some((Z) => Z.$property === "width")) || H && (!n.height || f.value.$errors.some((Z) => Z.$property === "height")) || G && !l.value)
          return !0;
      }
      return a.code === "amount" && !l.value;
    });
    function y(z, H) {
      if (z && H && (!f.$errors || f.$errors.length === 0)) {
        const G = z * H / 1e4 * l.value;
        s.value = Number(G.toFixed(2));
      }
    }
    async function x() {
      const z = await o.value.validate(), H = a.options.some((V) => V.code === "width"), G = a.options.some((V) => V.code === "height"), Z = a.options.some((V) => V.code === "amount");
      i.value = [], H && i.value.push({
        code: "width",
        value: n.width
      }), G && i.value.push({
        code: "height",
        value: n.height
      }), Z && i.value.push({
        code: "amount",
        value: l.value
      }), z && r("update:modelValue", i.value);
    }
    function $() {
      h.value?.getElementsByClassName("input")?.[0]?.focus();
    }
    function g(z) {
      setTimeout(() => {
        r("update:focus", z);
      }, 200);
    }
    function E(z) {
      n.width && n.height && z && a.canOrder && (d.value = !0);
    }
    return ct(() => {
      $(), a.modelValue?.length && (n.width = a.modelValue.find((z) => z.code === "width")?.value, n.height = a.modelValue.find((z) => z.code === "height")?.value, l.value = a.modelValue.find((z) => z.code === "amount")?.value || 1);
    }), he(
      () => a.modelValue,
      (z) => {
        z?.length && (n.width = z.find((H) => H.code === "width")?.value, n.height = z.find((H) => H.code === "height")?.value, l.value = z.find((H) => H.code === "amount")?.value || 1, f.value.$touch());
      },
      { immediate: !0 }
    ), (z, H) => (w(), C("div", {
      id: "accordion-header-" + e.ariaTitle,
      class: ve(["configurator-step simple", { disabled: e.disabled }]),
      part: "step"
    }, [
      B("div", xf, [
        K(Jl, { status: e.status }, null, 8, ["status"]),
        B("div", {
          ref_key: "inner",
          ref: h,
          class: "inner"
        }, [
          B("h3", kf, [
            ce(q(e.title) + " ", 1),
            e.hasOverwrites && e.editor ? (w(), te(Ja, {
              key: 0,
              text: k(N)("option.step_has_overwrites")
            }, {
              default: L(() => [
                K(ht, { icon: k(Ql) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : W("", !0),
            e.isHidden && e.editor ? (w(), te(Ja, {
              key: 1,
              text: k(N)("option.step_is_hidden")
            }, {
              default: L(() => [
                K(ht, { icon: k(Xl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : W("", !0)
          ]),
          K(Yl, {
            ref: "measurements-form",
            class: "measurements-form"
          }, {
            default: L(() => [
              B("div", {
                class: ve(["measurement-inputs", { "has-errors": k(f).$errors && k(f).$errors.length }])
              }, [
                (w(!0), C(_e, null, Ht(e.options, (G, Z) => (w(), C(_e, { key: Z }, [
                  G.code === "width" || G.code === "height" ? (w(), te(_t, {
                    key: 0,
                    id: `measurement-input-${G.code}`,
                    modelValue: n[G.code],
                    "onUpdate:modelValue": [
                      (V) => n[G.code] = V,
                      H[0] || (H[0] = (V) => y(n.width, n.height))
                    ],
                    required: "",
                    type: "number",
                    "aria-label": G.code,
                    class: "measurement-input",
                    inline: G.unit,
                    min: G.min,
                    max: G.max,
                    placeholder: k(N)(`step.${G.code}`),
                    error: k(f)[G.code].$errors ? k(f)[G.code].$errors[0]?.$message : "",
                    onBlur: (V) => {
                      k(f)[G.code].$touch(V), g(!1);
                    },
                    onKeyup: it(qe((V) => {
                      k(f)[G.code].$touch(V), x();
                    }, ["stop"]), ["enter"]),
                    onFocus: H[1] || (H[1] = (V) => g(!0))
                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "placeholder", "error", "onBlur", "onKeyup"])) : W("", !0),
                  G.code === "width" ? (w(), C("span", _f, " x ")) : G.code === "amount" ? (w(), te(ei, {
                    key: 2,
                    modelValue: l.value,
                    "onUpdate:modelValue": [
                      H[2] || (H[2] = (V) => l.value = V),
                      E
                    ],
                    min: G.min,
                    max: G.max || void 0,
                    onBlur: H[3] || (H[3] = (V) => g(!1)),
                    onFocus: H[4] || (H[4] = (V) => g(!0)),
                    onKeyup: H[5] || (H[5] = it(qe((V) => x(), ["stop"]), ["enter"]))
                  }, null, 8, ["modelValue", "min", "max"])) : W("", !0)
                ], 64))), 128))
              ], 2),
              e.code == "measurement-amount" || e.code === "amount" ? (w(), te(Mt, {
                key: 0,
                class: "submit-button",
                "data-testid": "submit-button",
                disabled: _.value,
                onClick: H[6] || (H[6] = (G) => {
                  x(), d.value = !1;
                })
              }, {
                default: L(() => [
                  ce(q(m.value), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : W("", !0),
              d.value ? (w(), te(Mt, {
                key: 1,
                variant: "text",
                icon: k(wf),
                onClick: H[7] || (H[7] = (G) => {
                  r("recalculate", l.value), d.value = !1;
                })
              }, {
                default: L(() => [
                  ce(q(k(N)("step.recalculate")), 1)
                ]),
                _: 1
              }, 8, ["icon"])) : W("", !0)
            ]),
            _: 1
          }, 512)
        ], 512),
        e.status === "attention" && e.attentionText ? (w(), C("span", $f, q(e.attentionText), 1)) : W("", !0),
        e.editor ? (w(), te(Mt, {
          key: 1,
          variant: "url",
          size: "small",
          class: "edit-button",
          onClick: H[8] || (H[8] = qe((G) => r("edit:step"), ["stop"]))
        }, {
          default: L(() => [
            ce(q(k(N)("option.edit")), 1)
          ]),
          _: 1
        })) : W("", !0),
        s.value ? (w(), C("span", Sf, q(e.totalPrefix || k(N)("step.total")) + ": " + q(s.value) + " m² ", 1)) : W("", !0)
      ]),
      e.alert ? (w(), C("div", Cf, [
        K(Yr, Br(Go(e.alert)), null, 16)
      ])) : W("", !0)
    ], 10, yf));
  }
}, Ef = /* @__PURE__ */ pe(zf, [["__scopeId", "data-v-0d0687c5"]]);
function Of(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
    })
  ]);
}
const Tf = {
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
    return (t, a) => (w(), C("span", {
      class: ve(["label", [{ small: e.small }, { alt: e.alt }, e.color]])
    }, [
      le(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, ri = /* @__PURE__ */ pe(Tf, [["__scopeId", "data-v-f6c45fb8"]]), Af = ["srcset"], Vf = ["srcset"], Pf = ["src", "alt", "height", "width"], jf = {
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
      type: [String, Number],
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
    const a = t, r = e, o = ee(!1);
    function i(l) {
      o.value = !0, a("error", l);
    }
    const n = j(() => r.image);
    return he(n, () => {
      o.value = !1;
    }), (l, s) => (w(), C("picture", {
      class: "image-wrapper",
      style: Jt({ width: `${e.width}px`, height: `${e.height}px` })
    }, [
      B("source", {
        media: "(max-width: 640px)",
        srcset: e.mobile
      }, null, 8, Af),
      B("source", {
        media: "(max-width: 1024px)",
        srcset: e.tablet
      }, null, 8, Vf),
      e.image && !o.value ? (w(), C("img", {
        key: 0,
        loading: "lazy",
        class: ve(["image", e.rounded ? `rounded-${e.rounded}` : ""]),
        src: e.image,
        alt: e.alt,
        height: e.height,
        width: e.width,
        onError: i
      }, null, 42, Pf)) : (w(), C("div", {
        key: 1,
        class: ve(["skeleton", e.rounded ? `rounded-${e.rounded}` : ""])
      }, null, 2))
    ], 4));
  }
}, If = /* @__PURE__ */ pe(jf, [["__scopeId", "data-v-cfa09f9c"]]), Mf = {
  key: 0,
  class: "amount"
}, Nf = {
  key: 1,
  class: "labels"
}, Bf = {
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
    return (a, r) => (w(), C(_e, null, [
      e.selected && e.editAmount ? (w(), C("div", Mf, [
        B("span", null, q(e.amountLabel), 1),
        K(ei, {
          modelValue: t.value,
          "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
          onClick: r[1] || (r[1] = qe(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : W("", !0),
      e.labels.length && !e.editAmount ? (w(), C("div", Nf, [
        (w(!0), C(_e, null, Ht(e.labels, (o, i) => (w(), C(_e, { key: i }, [
          o.text ? (w(), te(ri, {
            key: 0,
            color: o.color,
            small: ""
          }, {
            default: L(() => [
              ce(q(o.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : W("", !0)
        ], 64))), 128))
      ])) : W("", !0),
      e.image && !e.editAmount ? (w(), te(If, {
        key: 2,
        image: e.image,
        alt: `${e.title} ${k(N)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : W("", !0)
    ], 64));
  }
}, Lf = /* @__PURE__ */ pe(Bf, [["__scopeId", "data-v-1a9d11c5"]]);
function Df(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ff(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
const Rf = {
  key: 0,
  class: "not-available"
}, Uf = {
  key: 1,
  class: "custom-value"
}, qf = {
  key: 2,
  class: "information"
}, Hf = {
  key: 0,
  class: "delivery"
}, Kf = { class: "delivery-time" }, Wf = {
  key: 1,
  class: "price"
}, Zf = {
  key: 0,
  class: "price-per"
}, Gf = {
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
    const a = e, r = t, o = ee(a.customInput.value), i = j({
      get: () => a.customInput.value,
      set: (l) => {
        o.value = Number(l);
      }
    });
    function n() {
      o.value && o.value > 0 && r("update:customValue", o.value);
    }
    return (l, s) => e.disabled && e.notAvailableMessage ? (w(), C("div", Rf, [
      K(Jr, { icon: k(Df) }, null, 8, ["icon"]),
      B("span", null, q(e.notAvailableMessage), 1)
    ])) : e.customInput.value && e.customInput.unit && !e.disabled && !e.notAvailableMessage ? (w(), C("div", Uf, [
      K(_t, {
        id: "custom-value",
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => i.value = d),
        inline: e.customInput.unit,
        required: "",
        "data-testid": "custom-value-input",
        "aria-label": k(N)("option.custom_value")
      }, null, 8, ["modelValue", "inline", "aria-label"]),
      K(Mt, {
        variant: "primary",
        "data-testid": "custom-value-submit",
        onClick: qe(n, ["stop"])
      }, {
        default: L(() => [
          ce(q(e.customInput.buttonText || k(N)("option.continue")), 1)
        ]),
        _: 1
      })
    ])) : (w(), C("div", qf, [
      e.deliveryTime ? (w(), C("span", Hf, [
        K(ua, { icon: k(Ff) }, null, 8, ["icon"]),
        B("span", Kf, q(e.deliveryTimeText), 1)
      ])) : W("", !0),
      e.price ? (w(), C("span", Wf, [
        ce(" € " + q(e.price) + " ", 1),
        e.pricePer ? (w(), C("span", Zf, " / " + q(e.pricePer), 1)) : W("", !0)
      ])) : W("", !0)
    ]));
  }
}, Jf = /* @__PURE__ */ pe(Gf, [["__scopeId", "data-v-fa946bbf"]]), Yf = ["tabindex", "aria-current", "part", "aria-disabled"], Xf = {
  key: 0,
  class: "no-option"
}, Qf = {
  key: 1,
  class: "inner"
}, eh = { class: "header" }, th = { class: "content" }, ah = {
  key: 0,
  class: "title",
  part: "option-title"
}, rh = {
  class: "description",
  part: "option-description"
}, oh = { class: "footer" }, ih = {
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
    const t = e, a = ee(!1), r = j(() => t.deliveryTimeText !== "" ? `${t.deliveryTime} ${t.deliveryTimeText}` : Mu("option.days", t.deliveryTime)), o = j(() => {
      switch (t.pricePer) {
        case "unit":
          return N("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), i = et(e, "modelValue"), n = et(e, "amount"), l = j(() => t.amountLabel ? t.amountLabel : N("option.amount")), s = j(() => typeof n.value == "number" && n.value > 0);
    function d(p) {
      t.disabled || (a.value = s.value ? !a.value : !1, p ? n.value = p : i.value = !i.value);
    }
    function c(p, f) {
      let h = null;
      f === "left" && p ? h = p.previousElementSibling : f === "right" && p && (h = p.nextElementSibling);
      const m = h?.querySelector(".header");
      if (h && !m.disabled) {
        m.click();
        let _ = null;
        const y = h.querySelector("input");
        setTimeout(() => {
          _ = h.querySelector(".option-card"), _ && !_.classList.contains("disabled") ? _.focus() : y && y.focus();
        }, 50);
      } else h && c(h, f);
    }
    function u(p, f) {
      const h = p.currentTarget.parentElement;
      if (f === "left") {
        const m = h.previousElementSibling?.querySelector(".option-card"), _ = h.previousElementSibling?.querySelector(".overlay");
        m ? m.classList.contains("disabled") ? u({ currentTarget: m }, "left") : _ ? _.click() : m.focus() : c(h.closest(".accordion-item"), "left");
      } else if (f === "right") {
        const m = h.nextElementSibling?.querySelector(".option-card"), _ = h.nextElementSibling?.querySelector(".overlay");
        m ? m.classList.contains("disabled") ? u({ currentTarget: m }, "right") : _ ? _.click() : m.focus() : c(h.closest(".accordion-item"), "right");
      }
    }
    return ct(() => {
      n.value > 0 && i.value && (a.value = !0);
    }), he(n, (p, f) => {
      !f && p && (a.value = !0);
    }), he(i, () => {
      n.value && (a.value = !!i.value);
    }), (p, f) => (w(), C("article", {
      class: ve(["option-card", { selected: i.value, disabled: e.disabled }]),
      tabindex: e.disabled ? -1 : 0,
      "aria-current": i.value,
      "data-testid": "option",
      part: `option ${i.value ? "option-selected" : ""}`,
      "aria-disabled": e.disabled,
      onClick: f[2] || (f[2] = (h) => e.customInput.value ? null : d()),
      onKeyup: [
        f[3] || (f[3] = it((h) => e.customInput.value ? null : d(), ["enter"])),
        f[4] || (f[4] = it((h) => u(h, "left"), ["arrow-left"])),
        f[5] || (f[5] = it((h) => u(h, "right"), ["arrow-right"])),
        f[6] || (f[6] = it((h) => u(h, "up"), ["arrow-up"]))
      ]
    }, [
      e.noOption ? (w(), C("div", Xf, [
        K(ua, { icon: k(Of) }, null, 8, ["icon"]),
        B("h3", null, q(e.noOptionText), 1)
      ])) : (w(), C("div", Qf, [
        B("header", eh, [
          le(p.$slots, "header", {}, () => [
            K(Lf, {
              amount: n.value,
              "onUpdate:amount": f[0] || (f[0] = (h) => n.value = h),
              selected: i.value,
              "amount-label": l.value,
              image: e.image,
              "edit-amount": a.value,
              labels: e.labels,
              title: e.title
            }, null, 8, ["amount", "selected", "amount-label", "image", "edit-amount", "labels", "title"])
          ], !0)
        ]),
        B("div", th, [
          le(p.$slots, "content", {}, () => [
            e.title ? (w(), C("h3", ah, q(e.title), 1)) : W("", !0),
            B("p", rh, q(e.description), 1)
          ], !0)
        ]),
        B("footer", oh, [
          le(p.$slots, "footer", {}, () => [
            K(Jf, {
              "delivery-time": e.deliveryTime,
              price: e.price,
              "price-per": o.value,
              "delivery-time-text": r.value,
              "custom-input": e.customInput,
              disabled: e.disabled,
              "not-available-message": e.notAvailableMessage,
              "onUpdate:customValue": f[1] || (f[1] = (h) => d(h))
            }, null, 8, ["delivery-time", "price", "price-per", "delivery-time-text", "custom-input", "disabled", "not-available-message"])
          ], !0)
        ])
      ]))
    ], 42, Yf));
  }
}, nh = /* @__PURE__ */ pe(ih, [["__scopeId", "data-v-56b71e2f"]]), lh = {
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
    return ct(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), qr(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (a, r) => (w(), C("div", {
      class: ve(["overlay", { fixed: e.fixed }]),
      style: Jt({ background: `rgba(${e.color}, ${e.opacity / 100})` })
    }, [
      le(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, sh = /* @__PURE__ */ pe(lh, [["__scopeId", "data-v-66d42f70"]]), dh = { class: "option-step-container" }, ch = {
  class: "title",
  part: "step-title"
}, uh = {
  key: 0,
  class: "subtitle",
  part: "step-subtitle"
}, ph = {
  key: 1,
  class: "subtitle",
  part: "step-subtitle"
}, fh = {
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
    const a = e, r = t, o = ee(!1), i = ee([]), n = ee([]), l = j({
      get: () => a.open,
      set: (y) => {
        r("update:accordionState", y);
      }
    }), s = j(() => n.value.map((y, x) => {
      if (!y)
        return null;
      if (a.options[x] && a.options[x].noOption)
        return a.options[x].noOptionText;
      let $ = "";
      const g = i.value.find((E) => E.code === a.options[x].code);
      return g?.value > 0 && ($ += `${g.value}x `), $ += a.options[x].title, $;
    }).filter((y) => !!y).join(", ")), d = ee(null);
    function c(y) {
      if (a.multiple || (i.value = []), i.value.length === 0 || i.value.some(($) => $.code === a.options[y].code) === !1) {
        let $;
        a.options[y].amount ? $ = { code: a.options[y].code, value: a.options[y].amount } : $ = { code: a.options[y].code }, i.value.push($);
      }
      n.value[y] = !n.value[y];
      const x = i.value.findIndex(($) => $.code === "no-option");
      if (x > -1 && a.options[y].noOption)
        n.value.forEach(($, g) => {
          g !== y && (n.value[g] = !1);
        }), i.value = i.value.filter(($) => $.code === "no-option");
      else if (!a.options[y].noOption) {
        const $ = a.options.findIndex((g) => g.noOption);
        $ > -1 && (n.value[$] = !1), x > -1 ? i.value.splice(x, 1) : n.value[y] === !1 && i.value.some((g) => g.code === a.options[y].code) && (i.value = i.value.filter((g) => g.code !== a.options[y].code));
      }
    }
    function u(y) {
      c(y), r("update:modelValue", i.value);
    }
    function p() {
      i.value.length === 0 && a.modelValue?.length ? i.value = a.modelValue : a.modelValue && Object.keys(a.modelValue).length && i.value.length === 0 && (i.value = [a.modelValue]), a.options.forEach((y) => {
        !y.noOption && y.code === a.modelValue?.code || Array.isArray(a.modelValue) && a.modelValue.some((x) => x.code === y.code) ? n.value.push(!0) : n.value.push(!1);
      }), a.code === "accessories" && Array.isArray(a.modelValue) && a.modelValue.length > 2 && (o.value = !0);
    }
    function f(y) {
      return a.code === "accessories" && y > 3 && !o.value;
    }
    function h(y, x) {
      a.multiple || c(y);
      const $ = i.value.filter((E) => E.code !== a.options[y].code), g = { code: a.options[y].code, value: x };
      i.value = [...$, g], r("update:modelValue", i.value);
    }
    function m() {
      setTimeout(() => {
        d.value?.length && d.value[0].$el.focus();
      }, 500);
    }
    function _(y) {
      return y.customInput?.value ? 0 : Array.isArray(a.modelValue) ? a.modelValue?.find((x) => x.code === y.code)?.value : a.modelValue?.value || y.amount || 0;
    }
    return p(), he(
      () => a.modelValue,
      () => {
        n.value = [], p();
      }
    ), he(
      () => a.open,
      () => {
        a.open && m();
      },
      { immediate: !0 }
    ), (y, x) => (w(), C("div", dh, [
      e.editor ? (w(), te(Mt, {
        key: 0,
        variant: "url",
        size: "small",
        class: "edit-button",
        onClick: x[0] || (x[0] = qe(($) => r("edit:step"), ["stop"]))
      }, {
        default: L(() => [
          ce(q(k(N)("option.edit")), 1)
        ]),
        _: 1
      })) : W("", !0),
      K(Vl, {
        modelValue: l.value,
        "onUpdate:modelValue": x[3] || (x[3] = ($) => l.value = $),
        class: "configurator-step options",
        "aria-title": e.ariaTitle,
        "scroll-into-view": "",
        part: "step",
        exportparts: "state-indicator-icon"
      }, {
        header: L(() => [
          K(Jl, { status: e.status }, null, 8, ["status"]),
          B("h3", ch, [
            ce(q(e.title) + " ", 1),
            e.hasOverwrites && e.editor ? (w(), te(Ja, {
              key: 0,
              text: k(N)("option.step_has_overwrites")
            }, {
              default: L(() => [
                K(ht, { icon: k(Ql) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : W("", !0),
            e.isHidden && e.editor ? (w(), te(Ja, {
              key: 1,
              text: k(N)("option.step_is_hidden")
            }, {
              default: L(() => [
                K(ht, { icon: k(Xl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : W("", !0)
          ]),
          e.status === "attention" ? (w(), C("span", uh, q(e.attentionText || k(N)("option.attention")), 1)) : W("", !0),
          s.value ? (w(), C("span", ph, q(s.value), 1)) : W("", !0)
        ]),
        default: L(() => [
          B("div", null, [
            B("div", {
              class: ve(["option-container", {
                "show-all": e.code === "accessories" && o.value || e.code !== "accessories"
              }]),
              tabindex: "0"
            }, [
              (w(!0), C(_e, null, Ht(e.options, ($, g) => (w(), C("div", {
                key: g,
                class: ve(["option", { hide: f(g) }])
              }, [
                g === 3 && !o.value && e.code === "accessories" ? (w(), te(sh, {
                  key: 0,
                  tabindex: "0",
                  onClick: x[1] || (x[1] = qe((E) => o.value = !0, ["stop"])),
                  onKeyup: x[2] || (x[2] = it(qe((E) => o.value = !0, ["stop"]), ["enter"]))
                }, {
                  default: L(() => [
                    ce(" +" + q(e.options.length - 3), 1)
                  ]),
                  _: 1
                })) : W("", !0),
                K(nh, De({
                  ref_for: !0,
                  ref_key: "optionCards",
                  ref: d
                }, { ref_for: !0 }, $, {
                  amount: _($),
                  disabled: $.available === !1 || e.disabled,
                  "not-available-message": $.available === !1 ? e.unvailableText || k(N)("option.unavailable") : "",
                  "model-value": n.value[g],
                  exportparts: "option option-title option-description",
                  "onUpdate:amount": (E) => h(g, E),
                  "onUpdate:modelValue": (E) => u(g)
                }), null, 16, ["amount", "disabled", "not-available-message", "model-value", "onUpdate:amount", "onUpdate:modelValue"])
              ], 2))), 128))
            ], 2),
            e.alert ? (w(), te(Yr, Br(De({ key: 0 }, e.alert)), null, 16)) : W("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "aria-title"])
    ]));
  }
}, hh = /* @__PURE__ */ pe(fh, [["__scopeId", "data-v-d799026d"]]), vh = {
  class: "delivery-options",
  part: "delivery-step"
}, mh = { class: "header" }, gh = {
  class: "title",
  part: "delivery-step-title"
}, bh = {
  class: "hint",
  part: "delivery-step-subtitle"
}, wh = { class: "content" }, yh = {
  class: "day",
  part: "delivery-option-day"
}, xh = {
  class: "date",
  part: "delivery-option-date"
}, kh = {
  key: 0,
  class: "cost",
  part: "delivery-option-cost"
}, _h = {
  key: 1,
  class: "no-cost",
  part: "delivery-option-no-cost"
}, $h = {
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
    const t = e, a = ee(!1), r = j(() => t.title ? t.title : N("delivery.delivery_options")), o = j(() => t.noCost ? t.noCost : N("delivery.no_extra_cost")), i = j(
      () => t.makeYourChoice ? t.makeYourChoice : N("delivery.make_your_choice_next_step")
    ), n = j(() => t.buttonTextShow ? t.buttonTextShow : N("delivery.see_more")), l = j(() => t.buttonTextHide ? t.buttonTextHide : N("delivery.see_less"));
    function s() {
      window.innerWidth >= 768 ? a.value = !0 : window.innerWidth < 768 && (a.value = !1);
    }
    return Ct(() => {
      window.addEventListener("resize", s);
    }), pa(() => {
      window.removeEventListener("resize", s);
    }), s(), (d, c) => (w(), C("div", vh, [
      B("div", mh, [
        B("h2", gh, q(r.value), 1),
        B("span", bh, [
          c[1] || (c[1] = B("span", { class: "align-sub" }, "*", -1)),
          ce(" " + q(i.value), 1)
        ])
      ]),
      B("div", wh, [
        (w(!0), C(_e, null, Ht(e.items, (u, p) => (w(), C("div", {
          key: p,
          class: ve(["option", {
            hide: p > 0 && !a.value && !u.cheapest,
            last: p === 1 && !a.value || p === e.items.length - 1 || p > 1 && u.cheapest && !a.value
          }]),
          part: "delivery-option"
        }, [
          B("span", yh, [
            ce(q(u.day) + " ", 1),
            u.label ? (w(), te(ri, {
              key: 0,
              color: u.label.color,
              small: ""
            }, {
              default: L(() => [
                ce(q(u.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : W("", !0)
          ]),
          B("span", xh, q(u.date), 1),
          u.cost ? (w(), C("span", kh, " + € " + q(u.cost), 1)) : (w(), C("span", _h, q(o.value), 1))
        ], 2))), 128)),
        K(Mt, {
          variant: "tertiary",
          onClick: c[0] || (c[0] = (u) => a.value = !a.value)
        }, {
          default: L(() => [
            ce(q(a.value ? l.value : n.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}, Sh = /* @__PURE__ */ pe($h, [["__scopeId", "data-v-12d62f2c"]]);
function Ch(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const zh = {
  __name: "PHeading",
  props: {
    level: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, a) => (w(), te($a(e.level), null, {
      default: L(() => [
        le(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, Eh = /* @__PURE__ */ pe(zh, [["__scopeId", "data-v-6ad666e7"]]), Oh = { class: "wrapper" }, Th = { class: "header" }, Ah = { class: "content" }, Vh = {
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
    const a = e, r = et(e, "modelValue"), o = Qa("drawer"), i = ee(!1), n = ee(50), l = ee(!1);
    let s = null, d = null, c = null;
    function u() {
      if (!o.value)
        return;
      const g = a.overlay ? n.value / 100 : 0;
      o.value.style.setProperty("--drawer-backdrop-opacity", String(g));
    }
    function p(g = !1, E = !1) {
      g && a.persistent && !E || l.value && !E || (l.value = !0, i.value = !1, n.value = 0, u(), s && (cancelAnimationFrame(s), s = null), d && (clearTimeout(d), d = null), c && clearTimeout(c), c = window.setTimeout(() => {
        o.value?.open && o.value.close(), r.value && (r.value = !1), l.value = !1;
      }, 300));
    }
    function f(g) {
      a.overlay && g.target === g.currentTarget && p(!0);
    }
    function h() {
      p(!1, !0);
    }
    function m() {
      return Array.from(document.body.querySelectorAll("dialog.drawer[open]")).find(
        (g) => g !== o.value
      );
    }
    function _() {
      o.value && (o.value.open || (a.overlay ? o.value.showModal() : o.value.show()), u());
    }
    function y() {
      c && clearTimeout(c);
      const g = m(), E = () => {
        _(), s && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
          i.value = !0, l.value = !1, n.value = 50, u();
        });
      };
      if (d && (clearTimeout(d), d = null), g) {
        n.value = 0, u(), g.dispatchEvent(new CustomEvent("drawer:force-close")), d = window.setTimeout(E, 300);
        return;
      }
      E();
    }
    he(
      r,
      (g) => {
        if (g) {
          y();
          return;
        }
        p(!1, !0);
      },
      { flush: "post" }
    );
    function x(g) {
      if (a.persistent) {
        g.preventDefault();
        return;
      }
      p(!1, !0);
    }
    function $() {
      c && (clearTimeout(c), c = null), r.value && (r.value = !1), l.value || (i.value = !1), l.value = !1;
    }
    return ct(() => {
      r.value && y();
    }), he(
      () => o.value,
      (g, E, z) => {
        g && (g.addEventListener("cancel", x), g.addEventListener("click", f), g.addEventListener("drawer:force-close", h), z(() => {
          g.removeEventListener("cancel", x), g.removeEventListener("click", f), g.removeEventListener("drawer:force-close", h);
        }));
      },
      { immediate: !0 }
    ), pa(() => {
      o.value?.open && o.value.close(), s && cancelAnimationFrame(s), d && clearTimeout(d), c && clearTimeout(c);
    }), he(
      () => a.overlay,
      () => {
        u();
      },
      { immediate: !0 }
    ), he(
      n,
      () => {
        u();
      },
      { immediate: !0 }
    ), t({
      closeDrawer: p
    }), (g, E) => r.value ? (w(), C("dialog", {
      key: 0,
      ref: "drawer",
      "data-testid": "drawer",
      class: ve(["drawer", [
        e.position,
        {
          open: i.value,
          persistent: e.persistent,
          "full-width": e.fullWidth,
          "no-overlay": !e.overlay
        }
      ]]),
      onClose: $
    }, [
      B("div", Oh, [
        B("div", Th, [
          K(Eh, {
            level: "h2",
            class: "title"
          }, {
            default: L(() => [
              ce(q(e.title), 1)
            ]),
            _: 1
          }),
          K(Mt, {
            variant: "text",
            icon: k(Ch),
            class: "close",
            "data-testid": "close-button",
            "aria-label": k(N)("drawer.close"),
            onClick: E[0] || (E[0] = (z) => p())
          }, null, 8, ["icon", "aria-label"])
        ]),
        B("div", Ah, [
          le(g.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 34)) : W("", !0);
  }
}, Ph = /* @__PURE__ */ pe(Vh, [["__scopeId", "data-v-059f3a0f"]]), jh = ["disabled"], Ih = {
  __name: "PSwitch",
  props: {
    modelValue: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = j({
      get: () => a.modelValue,
      set: (n) => {
        r("update:modelValue", n);
      }
    });
    function i() {
      o.value = !o.value;
    }
    return (n, l) => (w(), C("button", {
      class: ve(["switch", { enabled: o.value }]),
      "data-testid": "switch",
      disabled: e.disabled,
      "aria-label": "Use setting",
      onClick: l[0] || (l[0] = (s) => e.disabled ? null : i()),
      onKeydown: l[1] || (l[1] = it(qe(() => {
      }, ["prevent"]), ["enter"]))
    }, [
      B("span", {
        class: ve(["dot", { enabled: o.value }]),
        "aria-hidden": "true"
      }, null, 2)
    ], 42, jh));
  }
}, nn = /* @__PURE__ */ pe(Ih, [["__scopeId", "data-v-08900835"]]), Mh = {}, Nh = { class: "form-row" }, Bh = {
  key: 0,
  class: "title"
}, Lh = {
  key: 1,
  class: "subtitle"
}, Dh = { class: "fields" };
function Fh(e, t) {
  return w(), C("div", Nh, [
    B("div", {
      class: ve(["label", { "hidden md:block": !e.$slots.title && !e.$slots.subtitle }])
    }, [
      e.$slots.title ? (w(), C("p", Bh, [
        le(e.$slots, "title", {}, void 0, !0)
      ])) : W("", !0),
      e.$slots.subtitle ? (w(), C("p", Lh, [
        le(e.$slots, "subtitle", {}, void 0, !0)
      ])) : W("", !0)
    ], 2),
    B("div", Dh, [
      le(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const rt = /* @__PURE__ */ pe(Mh, [["render", Fh], ["__scopeId", "data-v-fbd1bdc0"]]), Rh = { class: "form-grid" }, Uh = {
  __name: "PFormGrid",
  setup(e) {
    return (t, a) => (w(), C("div", Rh, [
      le(t.$slots, "default", {}, void 0, !0),
      t.$slots.actions ? (w(), te(rt, {
        key: 0,
        class: "actions"
      }, {
        default: L(() => [
          le(t.$slots, "actions", {}, void 0, !0)
        ]),
        _: 3
      })) : W("", !0)
    ]));
  }
}, ln = /* @__PURE__ */ pe(Uh, [["__scopeId", "data-v-cf479711"]]);
function qh(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Hh(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
function Kh(e, t) {
  return w(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    B("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" })
  ]);
}
const Wh = {
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
    const t = ee(null);
    function a(r) {
      if (!["ArrowUp", "ArrowDown"].includes(r.key))
        return;
      const o = vr(t.value), i = o.indexOf(r.target);
      r.key === "ArrowDown" ? o[i + 1]?.focus() : r.key === "ArrowUp" && o[i - 1]?.focus();
    }
    return (r, o) => (w(), C("div", {
      ref_key: "list",
      ref: t,
      class: ve(["list", { grid: e.grid }]),
      style: Jt(`column-gap: ${e.gapRow}; row-gap: ${e.gapColumn};`),
      "data-testid": "list",
      onKeydown: a
    }, [
      (w(!0), C(_e, null, Ht(e.items, (i, n) => le(r.$slots, "default", {
        key: n,
        index: n,
        item: i
      }, void 0, !0)), 128)),
      le(r.$slots, "append-list", {}, void 0, !0)
    ], 38));
  }
}, Zh = /* @__PURE__ */ pe(Wh, [["__scopeId", "data-v-12959343"]]), Gh = ["data-testid", "tabindex", "aria-disabled"], Jh = {
  key: 0,
  class: "prepend"
}, Yh = { class: "content" }, Xh = {
  key: 0,
  class: "title"
}, Qh = {
  key: 1,
  class: "subtitle"
}, ev = { class: "text" }, tv = {
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
    return (t, a) => (w(), C("div", {
      class: ve(["list-item", { clickable: e.clickable, active: e.active }]),
      "data-testid": e.clickable ? "clickable" : "list-item",
      tabindex: e.disabled ? -1 : 0,
      "aria-disabled": e.disabled
    }, [
      t.$slots.prepend ? (w(), C("div", Jh, [
        le(t.$slots, "prepend", {}, void 0, !0)
      ])) : W("", !0),
      B("div", Yh, [
        le(t.$slots, "content", {}, () => [
          e.title ? (w(), C("span", Xh, q(e.title), 1)) : W("", !0),
          e.subtitle ? (w(), C("span", Qh, q(e.subtitle), 1)) : W("", !0),
          B("span", ev, q(e.text), 1)
        ], !0)
      ])
    ], 10, Gh));
  }
}, fo = /* @__PURE__ */ pe(tv, [["__scopeId", "data-v-175d52b3"]]), av = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], rv = {
  key: 0,
  class: "append"
}, ov = ["id"], iv = {
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
    const t = e, a = et(e, "modelValue"), r = t.required ? { checked: { required: Ue.withMessage(N("checkbox.required"), yu(!0)) } } : null, o = Gt(r, { checked: a }), i = j(() => `${t.id}-error`);
    return (n, l) => (w(), C("div", {
      class: ve(["checkbox-container", { error: k(o).checked?.$errors[0]?.$message, large: e.large }])
    }, [
      B("label", {
        class: ve(["label", { disabled: e.disabled }])
      }, [
        ca(B("input", De(n.$attrs, {
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
        }), null, 16, av), [
          [El, a.value]
        ]),
        le(n.$slots, "label", {}, () => [
          ce(q(e.label), 1)
        ], !0),
        n.$slots.append ? (w(), C("span", rv, [
          le(n.$slots, "append", {}, void 0, !0)
        ])) : W("", !0)
      ], 2),
      k(o).checked?.$errors[0]?.$message ? (w(), C("span", {
        key: 0,
        id: i.value,
        role: "alert",
        "aria-live": "assertive",
        class: "error-message"
      }, q(k(o).checked.$errors[0].$message), 9, ov)) : W("", !0)
    ], 2));
  }
}, ho = /* @__PURE__ */ pe(iv, [["__scopeId", "data-v-3dad8f2b"]]);
function nv(e, t) {
  return t.split(".").reduce((a, r) => a[r] ? a[r] : a, e);
}
const lv = {
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
    return cc((t) => ({
      v1e7beddb: e.thickness
    })), (t, a) => (w(), C("hr", {
      class: ve(["divider", { vertical: e.vertical, flex: e.flex }])
    }, null, 2));
  }
}, sv = /* @__PURE__ */ pe(lv, [["__scopeId", "data-v-cf022594"]]), es = {
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
}, dv = ["data-testid", "tabindex"], cv = ["for"], uv = ["aria-invalid", "aria-describedby"], pv = { class: "label-inner" }, fv = ["onClick"], hv = {
  key: 2,
  class: "selected-item"
}, vv = ["id", "placeholder", "disabled", "readonly", "value", "aria-invalid", "aria-describedby"], mv = { class: "action-buttons" }, gv = ["aria-label", "disabled"], bv = ["aria-label", "disabled"], wv = ["id"], yv = {
  key: 0,
  class: "content-divider"
}, xv = {
  key: 1,
  class: "no-results"
}, kv = {
  __name: "_BaseSelect",
  props: {
    ...es,
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
    const r = a, o = e, i = It("showError", !0), n = ee(!1), l = ee(!1), s = ee(!1), d = ee(null), c = ee(null), u = ee(null), p = ee(null), f = ee(null), h = ee(() => {
    }), m = ee(() => {
    }), _ = ee(() => {
    }), y = j({
      get() {
        return o.multiple && !Array.isArray(o.modelValue) ? [] : o.modelValue;
      },
      set(Y) {
        if (o.multiple) {
          r("update:modelValue", Y);
          return;
        }
        r("update:modelValue", o.returnObject || !o.itemValue ? Y : Y?.[o.itemValue]);
      }
    }), x = j(() => o.requiredMessage ? o.requiredMessage : o.label ? N("input.required_with_label", { label: o.label.toLowerCase() }) : N("input.required")), $ = j(() => o.required ? { value: { required: Ue.withMessage(() => x.value, Ga) } } : { value: {} }), g = Gt($.value, { value: y }), E = j(() => !o.required || o.required && !g.value?.$errors[0]), z = j(() => !!o.error || g.value?.$errors?.length > 0 || !E.value), H = j(() => Array.isArray(y.value) && y.value.length > 0), G = j(() => `${o.id}-error`);
    function Z(Y) {
      return o.itemValue ? Y[o.itemValue] : Y;
    }
    function V(Y) {
      return o.multiple ? o.modelValue?.includes(Z(Y)) || !1 : y.value === Z(Y);
    }
    function re(Y) {
      let me = null;
      return (typeof Y == "string" || typeof Y == "number") && !o.itemText ? Y : (typeof o.itemText == "string" && o.itemText?.includes(".") && (me = nv(Y, o.itemText)), !Y || typeof o.itemText == "string" && (!o.itemText?.includes(".") && Y[o.itemText] === void 0 || o.itemText?.includes(".") && me == null) ? "" : o.itemText && typeof o.itemText == "string" && !o.itemText.includes(".") ? Y[o.itemText] : typeof o.itemText == "function" ? o.itemText(Y) : me);
    }
    function R(Y) {
      if (!Y)
        return "";
      if (o.grouped) {
        const me = o.items.find(
          (fe) => fe[o.groupItems].find((ge) => Z(ge) === Y)
        )[o.groupItems].find((fe) => Z(fe) === Y);
        return re(me);
      }
      return !o.returnObject && o.itemValue ? re(o.items.find((me) => Z(me) === Y)) : re(Y);
    }
    function M(Y) {
      y.value.splice(y.value.indexOf(Y), 1), r("update:modelValue", y.value);
    }
    function D(Y) {
      if (!o.multiple) {
        y.value = Y;
        return;
      }
      if (y.value.includes(Z(Y))) {
        y.value = y.value.filter((me, fe) => fe !== y.value.indexOf(Z(Y)));
        return;
      }
      y.value = [...y.value, Z(Y)];
    }
    function O(Y) {
      const me = o.returnObject || !o.itemValue ? Y[o.groupItems] : Y[o.groupItems].map((tt) => tt[o.itemValue]);
      let fe = !1, ge = !0;
      return me.forEach((tt) => {
        y.value.includes(tt) ? fe = !0 : ge = !1;
      }), ge ? !0 : fe ? "indeterminate" : !1;
    }
    function J(Y) {
      const me = o.returnObject || !o.itemValue ? Y[o.groupItems] : Y[o.groupItems].map((fe) => fe[o.itemValue]);
      if (O(Y) === !0) {
        me.forEach((fe) => {
          M(fe);
        });
        return;
      }
      r("update:modelValue", Array.from(/* @__PURE__ */ new Set([...y.value, ...me])));
    }
    function ue(Y) {
      n.value = Y, r("update:isOpen", Y);
    }
    function ie(Y) {
      s.value = Y, r("update:focus", Y), !Y && r("update:inputValue", null);
    }
    function He() {
      o.behavior === "manual" && m.value(), o.behavior === "focus" && !n.value && requestAnimationFrame(() => {
        p.value.focus();
      });
    }
    function $e(Y, me) {
      p.value = Y, o.behavior === "manual" && (h.value = me.setActivator, m.value = me.toggle, _.value = me.onKeydown);
    }
    async function Ve() {
      return u;
    }
    const Te = j(() => o.inputValue !== null ? o.inputValue : o.multiple ? null : R(y.value));
    return he(
      () => [s.value, l.value],
      () => {
        !s.value && !l.value && g.value.$touch();
      }
    ), t({
      getSelectContent: Ve,
      getItemText: re,
      setActivator: h,
      toggle: m,
      onKeydown: _,
      input: p
    }), (Y, me) => (w(), te(Gl, {
      ref_key: "floatingContainer",
      ref: f,
      "aria-label": "Options",
      transition: "expand",
      offset: o.offset !== null ? o.offset : 1,
      attach: d.value,
      behavior: e.behavior,
      "close-on-click": !o.multiple,
      "onUpdate:isOpen": ue,
      "onUpdate:focus": ie
    }, {
      activator: L((fe) => [
        B("div", De(e.behavior === "click" ? { ...Y.$attrs, ...Y.disabled ? {} : fe } : null, {
          "data-testid": o.dataTestid,
          class: ["base-select", [o.class, e.behavior, { "is-open": n.value, disabled: o.disabled }]],
          tabindex: e.behavior === "click" && !Y.disabled ? 0 : null,
          onFocus: me[5] || (me[5] = (ge) => l.value = !0),
          onBlur: me[6] || (me[6] = (ge) => l.value = !1)
        }), [
          Y.label ? (w(), C("label", {
            key: 0,
            class: "input-label",
            for: Y.id
          }, [
            B("span", null, q(Y.label), 1)
          ], 8, cv)) : W("", !0),
          B("div", {
            ref_key: "selectWrapper",
            ref: d,
            class: ve(["wrapper", { focus: s.value || l.value, "has-error": z.value }]),
            "aria-invalid": z.value,
            "aria-describedby": z.value ? G.value : null
          }, [
            Y.prependIcon ? (w(), te(ht, {
              key: 0,
              class: "prepend-icon",
              icon: Y.prependIcon
            }, null, 8, ["icon"])) : W("", !0),
            H.value ? (w(), C("div", {
              key: 1,
              ref_key: "selectedItems",
              ref: c,
              class: "selected-items"
            }, [
              (w(!0), C(_e, null, Ht(y.value, (ge, tt) => (w(), te(ri, {
                key: tt,
                ref_for: !0,
                ref: "label",
                color: "gray"
              }, {
                default: L(() => [
                  B("span", pv, [
                    ce(q(R(ge)) + " ", 1),
                    B("button", {
                      class: "close-button",
                      type: "button",
                      tabindex: "-1",
                      onClick: qe((fa) => M(ge), ["stop", "prevent"])
                    }, [
                      K(Jr, { icon: k(Kh) }, null, 8, ["icon"])
                    ], 8, fv)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ], 512)) : !Y.multiple && e.behavior === "click" && y.value ? (w(), C("div", hv, q(R(y.value)), 1)) : W("", !0),
            e.behavior === "click" ? ca((w(), C("div", {
              key: 3,
              class: "placeholder"
            }, q(o.placeholder), 513)), [
              [Yo, !y.value || y.value.length === 0]
            ]) : (w(), C("input", De({ key: 4 }, e.behavior === "focus" ? { ...Y.$attrs, ...fe } : Y.$attrs, {
              id: o.id,
              ref: (ge) => $e(ge, fe),
              placeholder: o.placeholder,
              disabled: o.disabled,
              readonly: o.readonly,
              value: Te.value,
              autocomplete: "off",
              "aria-invalid": z.value,
              "aria-describedby": z.value ? G.value : null,
              onInput: me[0] || (me[0] = (ge) => Y.$emit("update:inputValue", ge.target.value)),
              onBlur: me[1] || (me[1] = (ge) => l.value = !1),
              onFocus: me[2] || (me[2] = (ge) => l.value = !0)
            }), null, 16, vv)),
            B("div", mv, [
              o.clearable && (!o.multiple && y.value || o.multiple && y.value?.length > 0) ? (w(), C("button", {
                key: 0,
                "aria-label": k(N)("input.clear"),
                class: "clear-button",
                tabindex: "-1",
                type: "button",
                disabled: o.disabled,
                onClick: [
                  me[3] || (me[3] = (ge) => y.value = o.multiple ? [] : null),
                  me[4] || (me[4] = qe(() => {
                  }, ["stop"]))
                ]
              }, [
                K(ht, {
                  icon: k(Hh),
                  "aria-hidden": "true"
                }, null, 8, ["icon"])
              ], 8, gv)) : W("", !0),
              le(Y.$slots, "inline", {}, () => [
                Y.hideChevron ? W("", !0) : (w(), C("button", {
                  key: 0,
                  "aria-label": k(N)("input.toggle"),
                  tabindex: "-1",
                  type: "button",
                  "data-testid": "toggle-chevron",
                  disabled: o.disabled,
                  onClick: He
                }, [
                  K(ht, {
                    class: ve(["state-indicator", { "is-open": n.value }]),
                    icon: k(qh)
                  }, null, 8, ["icon", "class"])
                ], 8, bv))
              ], !0)
            ])
          ], 10, uv),
          z.value && k(i) ? (w(), C("div", {
            key: 1,
            id: G.value,
            role: "alert",
            "aria-live": "assertive",
            class: "error"
          }, q(k(g).value?.$errors[0]?.$message ? k(g).value.$errors[0].$message : o.error), 9, wv)) : W("", !0)
        ], 16, dv)
      ]),
      default: L(() => [
        Y.showDivider ? (w(), C("hr", yv)) : W("", !0),
        B("div", {
          ref_key: "selectContent",
          ref: u,
          class: ve(["select-content", { "remove-radius": Y.showDivider, "show-shadow": !Y.showDivider }])
        }, [
          le(Y.$slots, "prepend-list", {}, void 0, !0),
          o.items.length > 0 ? (w(), te(Zh, {
            key: 0,
            "gap-column": "0",
            "gap-row": "0",
            items: o.items,
            onKeydown: me[7] || (me[7] = qe(() => {
            }, ["prevent"]))
          }, {
            default: L(({ item: fe }) => [
              o.grouped ? (w(), C(_e, { key: 0 }, [
                o.items.indexOf(fe) !== 0 ? (w(), te(sv, { key: 0 })) : W("", !0),
                o.grouped ? (w(), te(fo, {
                  key: 1,
                  title: fe[o.groupText],
                  clickable: o.multiple,
                  disabled: !o.multiple,
                  onClick: (ge) => o.multiple && J(fe),
                  onKeydown: it((ge) => o.multiple && J(fe), ["enter"])
                }, oo({ _: 2 }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: L(() => [
                      K(ho, {
                        id: `group-${o.items.indexOf(fe)}-checkbox`,
                        "model-value": typeof O(fe) == "boolean" ? O(fe) : !1,
                        indeterminate: O(fe) === "indeterminate",
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : W("", !0),
                (w(!0), C(_e, null, Ht(fe[o.groupItems], (ge, tt) => (w(), te(fo, {
                  key: tt,
                  clickable: "",
                  active: V(ge),
                  text: re(ge),
                  onClick: (fa) => D(ge),
                  onKeydown: it((fa) => D(ge), ["enter"])
                }, oo({
                  content: L(() => [
                    le(Y.$slots, "option", {
                      selected: V(ge),
                      option: ge
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: L(() => [
                      K(ho, {
                        id: `item-${fe[o.groupItems].indexOf(ge)}-checkbox`,
                        "model-value": V(ge),
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : re(fe) || Y.$slots.option ? (w(), te(fo, {
                key: 1,
                clickable: "",
                active: V(fe),
                text: re(fe),
                onClick: (ge) => D(fe),
                onKeydown: it((ge) => D(fe), ["enter"])
              }, oo({
                content: L(() => [
                  le(Y.$slots, "option", {
                    selected: V(fe),
                    option: fe
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                o.multiple ? {
                  name: "prepend",
                  fn: L(() => [
                    K(ho, {
                      id: `item-${o.items.indexOf(fe)}-checkbox`,
                      "model-value": V(fe),
                      tabindex: "-1"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"])) : W("", !0)
            ]),
            _: 3
          }, 8, ["items"])) : o.hideNoItemsLabel ? W("", !0) : (w(), C("div", xv, q(o.noItemsLabel || k(N)("input.no_results")), 1)),
          le(Y.$slots, "append-list", {}, void 0, !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["offset", "attach", "behavior", "close-on-click"]));
  }
}, _v = /* @__PURE__ */ pe(kv, [["__scopeId", "data-v-7e184a2a"]]), $v = {
  __name: "PCombobox",
  props: {
    ...es,
    /** Whether the combobox is loading new items in the dropdown */
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "intersect"],
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = j(() => {
      const { loading: g, ...E } = r;
      return E;
    }), n = j({
      get() {
        return r.multiple && !Array.isArray(r.modelValue) ? [r.modelValue] : r.modelValue;
      },
      set(g) {
        o("update:modelValue", g);
      }
    }), l = ee(null), s = ee(null), d = ee(null), c = ee(null), u = ee(null), p = ee(!1), f = ee(!1);
    function h() {
      s.value = null, n.value = null, l.value.blur();
    }
    const m = j(() => !s.value || r.serverside ? r.items : r.itemText ? r.grouped ? r.items.filter(
      (g) => g[r.groupItems].some(
        (E) => l.value.getItemText(E).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map((g) => {
      const E = g[r.groupItems].filter(
        (z) => l.value.getItemText(z).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      );
      return E.length ? {
        ...g,
        [r.groupItems]: E
      } : null;
    }) : r.items.filter(
      (g) => l.value.getItemText(g).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ) : r.items.filter(
      (g) => g.toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ));
    async function _() {
      const g = (await l.value.getSelectContent()).value;
      g?.scrollTo(0, g.scrollHeight);
    }
    function y(g, E = 4) {
      return g ? g.scrollTop + g.clientHeight >= g.scrollHeight - E : !1;
    }
    async function x(g) {
      if (p.value = g, g) {
        await Ct(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame);
        const E = (await l.value.getSelectContent()).value;
        c.value = new IntersectionObserver(
          (z) => {
            z[0].isIntersecting && !f.value && !r.loading && (o("intersect"), y(E) && _());
          },
          {
            root: E,
            threshold: 0
          }
        ), c.value.observe(d.value);
        return;
      }
      c.value?.disconnect(), c.value = null;
    }
    function $(g) {
      if (!r.serverside) {
        o("search", g);
        return;
      }
      g !== null && (f.value = !0, clearTimeout(u.value), u.value = setTimeout(() => {
        p.value && o("search", g), f.value = !1;
      }, 500));
    }
    return t({
      reset: h,
      select: l,
      scrollToBottom: _
    }), (g, E) => (w(), te(_v, De({
      id: g.id,
      ref_key: "select",
      ref: l,
      "input-value": s.value,
      "onUpdate:inputValue": E[1] || (E[1] = (z) => s.value = z)
    }, i.value, {
      behavior: "focus",
      "hide-no-items-label": e.loading || f.value,
      items: f.value ? [] : m.value,
      "onUpdate:inputValue": E[2] || (E[2] = (z) => $(z)),
      "onUpdate:focus": E[3] || (E[3] = (z) => z && o("search", "")),
      "onUpdate:isOpen": E[4] || (E[4] = (z) => x(z)),
      "onUpdate:modelValue": E[5] || (E[5] = (z) => n.value = z)
    }), {
      inline: L(() => [
        le(g.$slots, "inline", {}, void 0, !0)
      ]),
      option: L(({ option: z, selected: H }) => [
        le(g.$slots, "option", {
          selected: H,
          option: z
        }, void 0, !0)
      ]),
      "append-list": L(() => [
        B("div", {
          ref_key: "intersect",
          ref: d,
          class: "intersect"
        }, [
          e.loading || f.value ? (w(), te(ai, {
            key: 0,
            class: "search-loader",
            onClick: E[0] || (E[0] = qe(() => {
            }, ["prevent"]))
          })) : W("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
}, Sv = /* @__PURE__ */ pe($v, [["__scopeId", "data-v-0951cb5e"]]);
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
const Cv = { class: "sub-heading" }, zv = { class: "actions" }, Ev = {
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
    function l(M = []) {
      return M.map((D) => ({
        ...D,
        overwrites: D.overwrites ? { ...D.overwrites } : {}
      }));
    }
    function s(M = {}) {
      return M ? {
        code: M.code ?? null,
        overwrites: {
          title: M.overwrites?.title ?? null,
          description: M.overwrites?.description ?? null,
          hide: M.overwrites?.hide ?? !1,
          selected: M.overwrites?.selected ?? null,
          value: M.overwrites?.value ?? null,
          options: l(M.overwrites?.options ?? [])
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
      const M = (o.value?.overwrites?.steps ?? []).find((J) => J.code === r.value.code), D = M ? s(M) : null;
      if (D)
        return new ga(D);
      const O = r.value.options?.map((J) => ({
        code: J.code,
        overwrites: {}
      })) ?? [];
      return new ga({
        code: r.value.code,
        overwrites: {
          options: O
        }
      });
    }
    function c(M) {
      const D = o.value && typeof o.value == "object" ? o.value : {}, O = Array.isArray(D.overwrites?.steps) ? D.overwrites.steps.map((ie) => s(ie)) : [], J = s({
        code: M.code ?? r.value?.code,
        overwrites: M.overwrites
      }), ue = O.findIndex((ie) => ie.code === J.code);
      ue !== -1 ? O.splice(ue, 1, J) : O.push(J), o.value = {
        code: D.code ?? t.productCode ?? null,
        overwrites: {
          ...D.overwrites,
          steps: O
        }
      }, i.value = new ga(J);
    }
    function u(M) {
      const D = new ga({
        code: i.value.code ?? r.value?.code,
        overwrites: {
          ...i.value.overwrites,
          options: l(i.value.overwrites?.options ?? [])
        }
      });
      M(D), c(D);
    }
    he(
      [() => r.value, () => o.value],
      () => {
        i.value = d();
      },
      { immediate: !0, deep: !0 }
    );
    function p(M, D) {
      u((O) => {
        O.overwrites[M] = D;
      });
    }
    function f(M, D) {
      u((O) => {
        const J = Array.isArray(O.overwrites.options) ? O.overwrites.options : [];
        let ue = !1;
        if (O.overwrites.options = J.map((ie) => {
          if (ie.code !== M)
            return ie;
          ue = !0;
          const He = { ...ie.overwrites ?? {} };
          return D(He), {
            ...ie,
            overwrites: He
          };
        }), !ue) {
          const ie = {};
          D(ie), O.overwrites.options = [
            ...O.overwrites.options,
            {
              code: M,
              overwrites: ie
            }
          ];
        }
      });
    }
    function h(M, D, O) {
      f(M, (J) => {
        J[D] = O;
      });
    }
    function m(M) {
      if (M == null || M === "")
        return null;
      const D = typeof M == "number" ? M : Number(M);
      return Number.isFinite(D) ? D : null;
    }
    function _(M, D) {
      const O = m(D);
      f(M, (J) => {
        if (O === null) {
          delete J.value;
          return;
        }
        J.value = O;
      });
    }
    function y(M, D) {
      return i.value.overwrites?.options?.find((O) => O.code === M)?.overwrites?.[D] ?? null;
    }
    const x = ee([]), $ = j({
      get: () => ({
        width: y("width", "value"),
        height: y("height", "value")
      }),
      set: (M) => {
        _("width", M.width), _("height", M.height);
      }
    }), g = j({
      get: () => y("amount", "value") ?? 1,
      set: (M) => {
        u((D) => {
          D.overwrites.options = D.overwrites.options.map((O) => O.code === "amount" ? {
            ...O,
            overwrites: {
              ...O.overwrites ?? {},
              value: M
            }
          } : O);
        });
      }
    }), E = j(() => {
      const M = r.value?.options?.find((ie) => ie.code === "width"), D = r.value?.options?.find((ie) => ie.code === "height"), O = M && M.reversible && D && D.reversible, J = M?.min, ue = D?.min;
      return O ? Math.min(J, ue) : { width: J, height: ue };
    }), z = j(() => {
      const M = r.value?.options?.find((ie) => ie.code === "width"), D = r.value?.options?.find((ie) => ie.code === "height"), O = M && M.reversible && D && D.reversible, J = M?.max, ue = D?.max;
      return O ? Math.max(J, ue) : { width: J, height: ue };
    }), H = j(() => ({
      width: {
        minValue: Ue.withMessage(
          N("step.min_value", {
            minValue: typeof E.value == "number" ? E.value : E.value.width
          }),
          Tr(typeof E.value == "number" ? E.value : E.value.width)
        ),
        maxValue: Ue.withMessage(
          N("step.max_value", {
            maxValue: typeof z.value == "number" ? z.value : z.value.width
          }),
          Ar(typeof z.value == "number" ? z.value : z.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          N("step.min_value", {
            minValue: typeof E.value == "number" ? E.value : E.value.height
          }),
          Tr(typeof E.value == "number" ? E.value : E.value.height)
        ),
        maxValue: Ue.withMessage(
          N("step.max_value", {
            maxValue: typeof z.value == "number" ? z.value : z.value.height
          }),
          Ar(typeof z.value == "number" ? z.value : z.value.height)
        )
      }
    })), G = Gt(H, $), Z = j(() => r.value?.options?.some((M) => ["width", "height", "amount"].includes(M.code))), V = j(
      () => r.value.options?.find((M) => M.code === i.value.overwrites.selected)
    );
    function re() {
      i.value = d(), c(i.value), G.value.$reset();
    }
    async function R() {
      await n.value.validate() && (a.value = !1);
    }
    return (M, D) => (w(), te(Ph, {
      modelValue: a.value,
      "onUpdate:modelValue": D[8] || (D[8] = (O) => a.value = O),
      position: "right",
      title: k(N)("editor.editing_step", { step: r.value?.title }),
      persistent: k(G).$errors.length > 0
    }, {
      default: L(() => [
        k(G).$errors.length ? (w(), te(Yr, {
          key: 0,
          title: k(N)("editor.editor_alert.title"),
          description: k(N)("editor.editor_alert.description"),
          type: "error"
        }, null, 8, ["title", "description"])) : W("", !0),
        K(Yl, { ref: "editor-form" }, {
          default: L(() => [
            K(ln, null, {
              default: L(() => [
                K(rt, null, {
                  title: L(() => [
                    ce(q(k(N)("editor.hide_step.title")), 1)
                  ]),
                  subtitle: L(() => [
                    ce(q(k(N)("editor.hide_step.description")), 1)
                  ]),
                  default: L(() => [
                    K(nn, {
                      "model-value": !!i.value.overwrites.hide,
                      "onUpdate:modelValue": D[0] || (D[0] = (O) => p("hide", O))
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                Z.value ? W("", !0) : (w(), C(_e, { key: 0 }, [
                  K(rt, null, {
                    title: L(() => [
                      ce(q(k(N)("editor.default_option.title")), 1)
                    ]),
                    subtitle: L(() => [
                      ce(q(k(N)("editor.default_option.description")), 1)
                    ]),
                    default: L(() => [
                      K(Sv, {
                        id: "default-value-combo",
                        "model-value": i.value.overwrites.selected,
                        items: r.value.options,
                        "item-text": "title",
                        "item-value": "code",
                        placeholder: k(N)("editor.default_option.label"),
                        required: i.value.overwrites.hide,
                        "onUpdate:modelValue": D[1] || (D[1] = (O) => p("selected", O))
                      }, null, 8, ["model-value", "items", "placeholder", "required"])
                    ]),
                    _: 1
                  }),
                  V.value?.amount ? (w(), te(rt, { key: 0 }, {
                    title: L(() => [
                      ce(q(k(N)("editor.default_option_value.title")), 1)
                    ]),
                    subtitle: L(() => [
                      ce(q(k(N)("editor.default_option_value.description")), 1)
                    ]),
                    default: L(() => [
                      K(_t, {
                        id: "default-value-input",
                        "model-value": i.value.overwrites.value,
                        placeholder: k(N)("editor.default_option_value.label"),
                        required: i.value.overwrites.hide,
                        inline: V.value?.customInput?.unit,
                        min: V.value?.customInput?.min,
                        max: V.value?.customInput?.max,
                        rules: [
                          {
                            validator: (O) => {
                              if (O === "" || O === null || O === void 0)
                                return !0;
                              const J = V.value?.customInput?.min ?? 0;
                              return Number(O) >= J;
                            },
                            message: k(N)("step.min_value", {
                              minValue: V.value?.customInput?.min ?? 0
                            })
                          },
                          {
                            validator: (O) => {
                              if (O === "" || O === null || O === void 0)
                                return !0;
                              const J = V.value?.customInput?.max ?? 1 / 0;
                              return Number(O) <= J;
                            },
                            message: k(N)("step.max_value", {
                              maxValue: V.value?.customInput?.max ?? 1 / 0
                            })
                          }
                        ],
                        "onUpdate:modelValue": D[2] || (D[2] = (O) => p("value", Number(O)))
                      }, null, 8, ["model-value", "placeholder", "required", "inline", "min", "max", "rules"])
                    ]),
                    _: 1
                  })) : W("", !0),
                  K(rt, null, {
                    title: L(() => [
                      ce(q(k(N)("editor.edit_title.title")), 1)
                    ]),
                    subtitle: L(() => [
                      ce(q(k(N)("editor.edit_title.description")), 1)
                    ]),
                    default: L(() => [
                      K(_t, {
                        id: `step-title-input-${r.value.code}`,
                        "model-value": i.value.overwrites.title,
                        type: "text",
                        placeholder: k(N)("editor.edit_title.placeholder"),
                        "onUpdate:modelValue": D[3] || (D[3] = (O) => p("title", O))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  }),
                  K(rt, null, {
                    title: L(() => [
                      ce(q(k(N)("editor.edit_description.title")), 1)
                    ]),
                    subtitle: L(() => [
                      ce(q(k(N)("editor.edit_description.description")), 1)
                    ]),
                    default: L(() => [
                      K(_t, {
                        id: `step-description-input-${r.value.code}`,
                        "model-value": i.value.overwrites.description,
                        type: "text",
                        placeholder: k(N)("editor.edit_description.placeholder"),
                        "onUpdate:modelValue": D[4] || (D[4] = (O) => p("description", O))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  })
                ], 64)),
                B("h3", Cv, q(k(N)("editor.edit_options")), 1)
              ]),
              _: 1
            }),
            K(Pl, {
              modelValue: x.value,
              "onUpdate:modelValue": D[6] || (D[6] = (O) => x.value = O),
              items: r.value.options?.map((O) => ({
                ...O,
                title: O.title || k(N)(`editor.edit_option.${O.code}`)
              })),
              title: "title"
            }, {
              content: L((O) => [
                K(ln, null, {
                  default: L(() => [
                    ["height", "width", "amount"].includes(O.code) ? (w(), te(rt, { key: 0 }, {
                      title: L(() => [
                        ce(q(k(N)(`editor.${O.code}.title`)), 1)
                      ]),
                      default: L(() => [
                        O.code === "width" || O.code === "height" ? (w(), te(_t, {
                          key: 0,
                          id: `measurement-input-${O.code}`,
                          "model-value": $.value[O.code] ?? "",
                          type: "number",
                          "aria-label": O.code,
                          class: "measurement-input",
                          inline: O.unit,
                          min: O.min,
                          max: O.max,
                          placeholder: "",
                          error: k(G)[O.code].$errors ? k(G)[O.code].$errors[0]?.$message : "",
                          onBlur: (J) => k(G)[O.code].$touch(J),
                          "onUpdate:modelValue": (J) => _(O.code, J),
                          onKeyup: it((J) => k(G)[O.code].$touch(J), ["enter"])
                        }, null, 8, ["id", "model-value", "aria-label", "inline", "min", "max", "error", "onBlur", "onUpdate:modelValue", "onKeyup"])) : O.code === "amount" ? (w(), te(ei, {
                          key: 1,
                          modelValue: g.value,
                          "onUpdate:modelValue": D[5] || (D[5] = (J) => g.value = J),
                          min: O.min,
                          max: O.max || void 0
                        }, null, 8, ["modelValue", "min", "max"])) : W("", !0)
                      ]),
                      _: 2
                    }, 1024)) : (w(), C(_e, { key: 1 }, [
                      K(rt, null, {
                        title: L(() => [
                          ce(q(k(N)("editor.hide_option.title")), 1)
                        ]),
                        subtitle: L(() => [
                          ce(q(k(N)("editor.hide_option.description")), 1)
                        ]),
                        default: L(() => [
                          K(nn, {
                            "model-value": !!y(O.code, "hide"),
                            "onUpdate:modelValue": (J) => h(O.code, "hide", J)
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      K(rt, null, {
                        title: L(() => [
                          ce(q(k(N)("editor.edit_option_title.title")), 1)
                        ]),
                        subtitle: L(() => [
                          ce(q(k(N)("editor.edit_option_title.description")), 1)
                        ]),
                        default: L(() => [
                          K(_t, {
                            id: `option-title-input-${O.code}`,
                            "model-value": y(O.code, "title") ?? "",
                            type: "text",
                            placeholder: k(N)("editor.edit_option_title.placeholder"),
                            "onUpdate:modelValue": (J) => h(O.code, "title", J)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      K(rt, null, {
                        title: L(() => [
                          ce(q(k(N)("editor.edit_option_description.title")), 1)
                        ]),
                        subtitle: L(() => [
                          ce(q(k(N)("editor.edit_option_description.description")), 1)
                        ]),
                        default: L(() => [
                          K(_t, {
                            id: `option-description-input-${O.code}`,
                            "model-value": y(O.code, "description") ?? "",
                            type: "text",
                            placeholder: k(N)("editor.edit_description.placeholder"),
                            "onUpdate:modelValue": (J) => h(O.code, "description", J)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      K(rt, null, {
                        title: L(() => [
                          ce(q(k(N)("editor.edit_image.title")), 1)
                        ]),
                        subtitle: L(() => [
                          ce(q(k(N)("editor.edit_image.description")), 1)
                        ]),
                        default: L(() => [
                          K(_t, {
                            id: `option-image-input-${O.code}`,
                            "model-value": y(O.code, "image") ?? "",
                            type: "text",
                            placeholder: k(N)("editor.edit_image.placeholder"),
                            "onUpdate:modelValue": (J) => h(O.code, "image", J)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      K(rt, null, {
                        title: L(() => [
                          ce(q(k(N)("editor.edit_sequence.title")), 1)
                        ]),
                        subtitle: L(() => [
                          ce(q(k(N)("editor.edit_sequence.description")), 1)
                        ]),
                        default: L(() => [
                          K(_t, {
                            id: `option-sequence-input-${O.code}`,
                            "model-value": y(O.code, "sequence") ?? "",
                            type: "number",
                            placeholder: k(N)("editor.edit_sequence.placeholder"),
                            rules: [
                              {
                                validator: (J) => J >= 0,
                                message: k(N)("editor.min_sequence", {
                                  min: 0
                                })
                              },
                              {
                                validator: (J) => J <= r.value.options.length,
                                message: k(N)("editor.max_sequence", {
                                  max: r.value.options.length
                                })
                              },
                              {
                                message: k(N)("editor.number_should_not_exist_twice"),
                                validator: (J) => r.value.options.map(
                                  (ue) => y(ue.code, "sequence")
                                ).filter((ue) => ue === J).length <= 1
                              }
                            ],
                            "onUpdate:modelValue": (J) => h(O.code, "sequence", J)
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
        B("div", zv, [
          K(Mt, {
            onClick: D[7] || (D[7] = (O) => R())
          }, {
            default: L(() => [
              ce(q(k(N)("editor.apply")), 1)
            ]),
            _: 1
          }),
          K(Mt, {
            variant: "secondary",
            onClick: re
          }, {
            default: L(() => [
              ce(q(k(N)("editor.reset")), 1)
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "persistent"]));
  }
}, Ov = /* @__PURE__ */ pe(Ev, [["__scopeId", "data-v-143c5965"]]), Tv = {
  class: "configurator",
  "data-testid": "product-configurator",
  part: "configurator"
}, Av = {
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
    editor: Boolean,
    canOrder: Boolean
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
  emits: /* @__PURE__ */ zt(["update:modelValue", "recalculate"], ["update:overwrites", "update:accordionState", "update:modelValue"]),
  setup(e, { emit: t }) {
    const a = e, r = t, o = et(e, "overwrites"), i = et(e, "accordionState"), n = et(e, "modelValue"), l = ee(!1), s = ee(!1), d = ee({});
    function c(f, h) {
      i.value[h] = f, i.value.forEach((m, _) => {
        _ !== h && (i.value[_] = !1);
      });
    }
    function u(f, h) {
      const m = { ...n.value };
      m.options[h] = f, r("update:modelValue", m);
    }
    function p(f) {
      d.value = f, s.value = !0;
    }
    return (f, h) => (w(), C("div", Tv, [
      K(Pl, {
        modelValue: i.value,
        "onUpdate:modelValue": h[4] || (h[4] = (m) => i.value = m),
        items: e.template
      }, {
        default: L(({ item: m, index: _, open: y }) => [
          m.type === "simple" ? (w(), te(Ef, De({
            key: 0,
            modelValue: n.value.options[_],
            "onUpdate:modelValue": (x) => n.value.options[_] = x,
            overwrites: o.value,
            "onUpdate:overwrites": h[0] || (h[0] = (x) => o.value = x)
          }, { ...m }, {
            "aria-title": m.title.toLowerCase().replaceAll(" ", "-"),
            "button-start-text": e.buttonStartText,
            editor: e.editor,
            "has-overwrites": o.value?.overwrites?.steps?.some((x) => x.code === m.code),
            "is-hidden": o.value?.overwrites?.steps?.some((x) => x.code === m.code && x.overwrites.hide),
            "can-order": e.canOrder,
            exportparts: "step step-title step-subtitle",
            "onEdit:step": (x) => p(m),
            "onUpdate:modelValue": (x) => u(x, _),
            "onUpdate:focus": h[1] || (h[1] = (x) => l.value = x),
            onRecalculate: h[2] || (h[2] = (x) => r("recalculate", x))
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "aria-title", "button-start-text", "editor", "has-overwrites", "is-hidden", "can-order", "onEdit:step"])) : m.type === "options" || m.type === "options-multiple" ? (w(), te(hh, De({
            key: 1,
            modelValue: n.value.options[_],
            "onUpdate:modelValue": (x) => n.value.options[_] = x,
            overwrites: o.value,
            "onUpdate:overwrites": h[3] || (h[3] = (x) => o.value = x)
          }, { ...m }, {
            open: y,
            multiple: m.type === "options-multiple",
            "aria-title": m.title.toLowerCase().replaceAll(" ", "-"),
            disabled: l.value || e.loading,
            editor: e.editor,
            "has-overwrites": o.value?.overwrites?.steps?.some((x) => x.code === m.code),
            "is-hidden": o.value?.overwrites?.steps?.some((x) => x.code === m.code && x.overwrites.hide),
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onEdit:step": (x) => p(m),
            "onUpdate:modelValue": u,
            "onUpdate:accordionState": (x) => c(x, _)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "open", "multiple", "aria-title", "disabled", "editor", "has-overwrites", "is-hidden", "onEdit:step", "onUpdate:accordionState"])) : W("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      e.deliveryOptions.length && !e.hideDeliverySection ? (w(), te(Sh, {
        key: 0,
        items: e.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : W("", !0),
      e.loading ? (w(), te(ai, { key: 1 })) : W("", !0),
      e.editor ? (w(), te(Ov, {
        key: 2,
        modelValue: s.value,
        "onUpdate:modelValue": h[5] || (h[5] = (m) => s.value = m),
        step: d.value,
        "onUpdate:step": h[6] || (h[6] = (m) => d.value = m),
        overwrites: o.value,
        "onUpdate:overwrites": h[7] || (h[7] = (m) => o.value = m),
        "product-code": a.productCode
      }, null, 8, ["modelValue", "step", "overwrites", "product-code"])) : W("", !0)
    ]));
  }
}, Vv = /* @__PURE__ */ pe(Av, [["__scopeId", "data-v-9ce9feaf"]]);
class Pv {
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
class ts extends Pv {
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
function lr(e) {
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
class jv {
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
function Iv(e, t) {
  return t.split(".").reduce((a, r) => a[r] ? a[r] : a, e);
}
const Mv = {
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
    measurement_and_amount: "Size and amount",
    pc: "pc"
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
    measurement_and_amount: "Formaat en aantal",
    pc: "st"
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
    measurement_and_amount: "Größe und Menge",
    pc: "St"
  }
}, as = Je({ language: "nl" });
function Nv(e) {
  return Iv(Mv[as.language], e) || e;
}
function Bv(e, t = {}) {
  return e.replace(/{(\w+)}/g, (a, r) => t[r] || `{${r}}`);
}
function Lv(e, t) {
  return e.replace(/{(\d+)}/g, (a, r) => t[r] || `{${r}}`);
}
function ot(e, t = null) {
  const a = Nv(e);
  return Array.isArray(t) ? Lv(a) : Bv(a, t);
}
function Dv(e) {
  as.language = e;
}
function rs(e, t) {
  return t !== -1 ? e.slice(0, t + 1) : e.filter((a) => a.code !== void 0);
}
function Fv(e, t) {
  const a = new Date(e), r = /* @__PURE__ */ new Date(), o = new Date(r);
  return o.setDate(r.getDate() + 1), a.toDateString() === o.toDateString() ? ot("tomorrow") : a.toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    weekday: "long"
  });
}
function Rv(e, t) {
  return new Date(e).toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function Uv(e, t) {
  return e.length === 0 ? !0 : t.some((r) => r.code === "no-option") ? !1 : !t?.includes(void 0);
}
function qv(e, t, a, r) {
  let o = "";
  a === "accessories-cross-sell" ? o = "unit" : (a === "material" || a === "materialType") && (o = "meter");
  const i = e.map((n) => {
    const l = r?.find((d) => d.code === n.code)?.overwrites;
    let s;
    return (n.type_code === "number" || n.type_code === "decimal") && (s = {
      value: n.default_value || parseFloat(n.min_value) || 1,
      min: n.min_value,
      max: n.max_value,
      unit: n.unit_code || ot("pc")
    }), {
      code: n.code,
      title: l?.title || n?.name,
      description: l?.description || n?.description,
      image: l?.image || n.images.length ? n.images[0].url : void 0,
      price: n.price ? n.price[t] : void 0,
      pricePer: o,
      unit: n.unit_code || ot("pc"),
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
    noOptionText: ot("no_accessoires")
  }), i;
}
function un(e) {
  const t = e.find((r) => r.code === "measurement-amount");
  if (!t?.options?.length)
    return 0;
  const a = t.options.filter(
    (r) => ["width", "height", "amount"].includes(r.code)
  ).length;
  return Math.max(a - 1, 0);
}
function Hv(e, t, a, r, o, i, n) {
  let l = [...t];
  if (!e.some((f) => f.code === "measurement-amount") && t.some((f) => f.children.some((h) => ["width", "height"].includes(h.code)))) {
    const f = t.filter((m) => ["size", "amount"].includes(m.code));
    l = t.filter((m) => !["size", "amount"].includes(m.code));
    const h = {
      code: "measurement-amount",
      name: ot("measurement_and_amount"),
      children: f.flatMap((m) => m.children),
      available: f.every((m) => m.available)
    };
    l.unshift(h);
  }
  const s = l.map((f) => {
    let h = f.code === "measurement-amount" || f.code === "amount" ? "simple" : "options";
    const m = o?.find((x) => x.code === f.code)?.overwrites, _ = qv(f.children, r, f.code, m?.options);
    let { code: y } = f;
    return y === "accessories-cross-sell" && (y = "accessories", h = "options-multiple"), {
      code: y,
      title: m && m.title ? m.title : f.name,
      type: h,
      options: _,
      hidden: m && m.hide && !n
    };
  }), d = e.some((f) => f.code === "measurement-amount") || i, c = Math.max(un(e), un(s)), u = a !== -1 && d ? Math.max(-1, a - c) : a;
  return [...rs(e, u), ...s];
}
function os(e) {
  let t = 1 / 0, a;
  return e.forEach((r) => {
    const o = r.prices.purchase_rush_surcharge;
    o < t && (t = o, a = r);
  }), a;
}
function is(e) {
  let t = null, a = 1 / 0;
  return e.forEach((r) => {
    const o = os(r.deliveries), i = o.prices.purchase_rush_surcharge;
    i < a && (a = i, t = o);
  }), t;
}
function Kv(e, t) {
  const a = is(e);
  let r = 0;
  return e.map((o, i) => {
    let n;
    const l = os(o.deliveries);
    return i === 0 && (n = { text: ot("fastest"), color: "red" }), a && l.shipping_method_api_code === a.shipping_method_api_code && r === 0 && (n || (n = { text: ot("cheapest"), color: "green" }), r += 1), {
      date: Rv(o.delivery_date, t),
      day: Fv(o.delivery_date, t),
      cost: l.prices.purchase_rush_surcharge,
      label: n
    };
  });
}
function Wv(e, t) {
  const r = e[0][`products_${t}`].toString(), o = is(e), i = o.prices.purchase_shipping_price, n = o.prices.purchase_packaging_price;
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
function ns(e) {
  return e.includes("Can not find unique id for option") ? ot("errors.invalid_or_duplicate") : e.includes("Restrictions are not met") ? ot("errors.restrictions_not_met") : e === "Validation Failed" ? ot("errors.invalid") : e.includes("Can not build valid path for tree") ? ot("errors.invalidConfig") : ot("errors.general");
}
class Zv {
  constructor({ proxy: t, version: a }) {
    this.initialized = !1, this.proxy = t, this.version = a || "", this.repository = new ts({ proxy: t }), this.product = new sn({}), this.productInfo = {}, this.productConfig = new dn({}), this.address = new cn({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null, this.hideDeliverySection = !1, this.timeOut = null, this.isEditor = !1, this.hasMeasurementOverwrites = null, this.isRecalculating = !1;
  }
  /**
   * Set the code of the product and get the first step for the product.
   *
   * @param {string} code - The code of the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  async setProduct(t, a = !1) {
    return this.product.code = t, a && (this.loading = !0, this.productInfo = await this.repository.getProduct(t), this.loading = !1), this.productConfig.products = [this.product], this.deliveryOptions = [], this.hasMeasurementOverwrites = this.overwrites?.find((r) => this.product.code === r.code)?.overwrites?.steps?.find((r) => r.code === "measurement-amount")?.overwrites?.options?.some(
      (r) => (r.code === "width" || r.code === "height") && lr(r.overwrites?.value)
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
  setOption(t, a = !1) {
    const r = t.options[t.options.length - 1];
    if (Array.isArray(r) && r.some((d) => ["width", "height", "amount"].includes(d.code))) {
      const d = new Event(
        this.isEditor ? "connectConfiguratorEditor:started" : "connectConfigurator:started"
      );
      window.dispatchEvent(d);
    }
    let o = !1, i = a;
    this.lastChangedIndex = -1, t.options.forEach((d, c) => {
      Array.isArray(d) && d.length === 0 && (this.lastChangedIndex = c, o = !0);
    });
    const n = t.options.flat().map((d) => ({
      ...d,
      value: typeof d.value == "number" && !Number.isInteger(d.value) ? d.value.toFixed(1) : d.value
    }));
    if (!i && this.canOrder && this.product.options.length && n.length) {
      const d = this.product.options.findIndex((u) => u.code === "amount"), c = n.findIndex((u) => u.code === "amount");
      d !== -1 && c !== -1 && this.product.options[d]?.value !== n[c]?.value && n.length === this.product.options.length && n.every((f, h) => {
        const m = this.product.options[h];
        return h === d ? m?.code === f.code : m?.code === f.code && m?.value === f.value;
      }) && (i = !0);
    }
    if (this.isRecalculating = i, n.length > 0 && !o) {
      const d = n.length === this.product.options.length && n.every(
        (p, f) => p.code === this.product.options[f]?.code && p.value === this.product.options[f]?.value
      ), c = n.some((p) => p.code === "amount"), u = n.find((p) => p.code === "amount")?.value === this.product.options.find((p) => p.code === "amount")?.value;
      if (d && this.options.length > 0 || c && u && n.length === 1)
        this.lastChangedIndex = n.findIndex((p) => p.code === "amount");
      else
        for (let p = this.product.options.length - 1; p >= 0; p -= 1)
          if (this.product.options[p] && n[p] && (this.product.options[p].value && this.product.options[p].value !== n[p].value || this.product.options[p].code && this.product.options[p].code !== n[p].code)) {
            this.product.options[p].code === "width" ? this.lastChangedIndex = p + 2 : this.product.options[p].code === "height" ? this.lastChangedIndex = p + 1 : this.lastChangedIndex = p;
            break;
          }
    }
    if (i)
      this.product.options = n.filter((d) => d.code !== void 0);
    else {
      const d = this.product.options[this.lastChangedIndex]?.code === "amount" && this.hasMeasurementOverwrites, c = ["width", "height", "amount"].filter(
        (f) => n.some((h) => h.code === f)
      ).length, u = Math.max(c - 1, 0), p = d ? Math.max(-1, this.lastChangedIndex - u) : this.lastChangedIndex;
      this.product.options = rs(n, p);
    }
    if (this.product.options.some((d) => d.code === "no-option")) {
      this.setStatuses(!0), this.setOpenState(!0);
      const d = new Event(
        this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished"
      );
      window.dispatchEvent(d);
    }
    function l(d) {
      const c = d[d.length - 1];
      return (c?.code === "height" || c.code === "amount") && d.length >= 2 ? d : c;
    }
    const s = l(this.product.options);
    if (s && (Array.isArray(s) ? s.length > 0 : Object.keys(s).length > 0)) {
      const d = new CustomEvent(
        this.isEditor ? "connectConfiguratorEditor:option-selected" : "connectConfigurator:option-selected",
        {
          detail: JSON.parse(JSON.stringify(s))
        }
      );
      window.dispatchEvent(d);
    }
    return this;
  }
  /**
   * Asynchronously retrieves the next option.
   * @async
   * @return {Promise<void>} - Resolves when the next option has been retrieved.
   */
  async getNextOption() {
    const t = this.isRecalculating === !0;
    if (Uv(this.options, this.product.options)) {
      this.loading = !0;
      const a = this.overwrites?.find((r) => r.code === this.product.code)?.overwrites?.steps;
      try {
        if (this.productConfig.language || (this.productConfig.language = this.language), this.hasMeasurementOverwrites) {
          const o = a?.find((i) => i.code === "measurement-amount")?.overwrites?.options?.filter((i) => lr(i.overwrites?.value));
          o?.length && this.product.options.some(
            (n) => ["width", "height", "amount"].includes(n.code)
          ) && o.forEach((n) => {
            this.product.options.some((s) => s.code === n.code) || this.product.options.push({ code: n.code, value: n.overwrites.value });
          });
        }
        let r = {};
        try {
          this.payload = await this.repository.configureProduct(this.productConfig);
        } catch (o) {
          this.payload = o;
        }
        if (this.payload.status !== "ok" || typeof this.payload == "string")
          throw this.options[this.options.length - 1].status = "attention", this.options[this.options.length - 1].alert = {
            type: "error",
            title: ns(this.payload.message ? this.payload.message : this.payload)
          }, new Error(this.payload.message || this.payload);
        if ([r] = this.payload.products, typeof r == "object" && r) {
          this.alert = {}, this.options[this.options.length - 1]?.alert && delete this.options[this.options.length - 1].alert;
          const o = r.available_options;
          if (t || (this.options = Hv(
            this.options,
            o,
            this.lastChangedIndex,
            this.priceType,
            a,
            this.hasMeasurementOverwrites,
            this.isEditor
          )), !t && this.overwrites.length > 0 && a && this.options.forEach((i) => {
            a.forEach(async (n) => {
              const l = this.product.options.some((c) => c.code === n.overwrites.selected) === !1 && lr(n.overwrites?.selected), s = n.overwrites?.options?.filter((c) => c.overwrites?.value) || [];
              this.product.options.forEach((c) => {
                const u = s.findIndex((p) => p.code === c.code);
                u !== -1 && s.splice(u, 1);
              });
              const d = this.getConfig();
              i.code === n.code && (l || s.length) && (l ? (n.overwrites.value ? d.options.push({
                code: n.overwrites.selected,
                value: n.overwrites.value
              }) : d.options.push({ code: n.overwrites.selected }), await (await this.setOption(d)).getNextOption()) : s.length && (this.options.splice(0, 1), s.forEach((c) => {
                d.options.push({
                  code: c.code,
                  value: c.overwrites.value
                });
              }), await (await this.setOption(d)).getNextOption()));
            });
          }), t || (this.setOpenState(), this.setStatuses()), r.can_order) {
            if (this.canOrder = !0, this.payload.calculation_id && (this.calculationId = this.payload.calculation_id), r.upload === !0 && (this.upload = !0, this.uploaders = r.uploaders), !t) {
              const i = new Event(
                this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished"
              );
              window.dispatchEvent(i);
            }
          } else r.can_order === !1 && this.canOrder && (this.canOrder = !1);
          if (r.can_order && Object.keys(this.address).length && this.address.city) {
            const i = await this.getProductPrice();
            this.prices = Wv(i, this.priceType), this.deliveryOptions = Kv(i, this.language), t || this.setOpenState();
          } else !t && r.can_order && !this.address.city && !this.options.find((i) => i.code === "accessories") && this.setOpenState(!0);
        }
      } finally {
        this.loading = !1, t && (this.isRecalculating = !1);
      }
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
    const t = new jv({ address: this.address, products: this.productConfig.products });
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
    return this.language = t, Dv(t), Dc(t), this;
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
  recalculate(t) {
    if (lr(t)) {
      const a = this.product.options.find((o) => o.code === "amount"), r = this.product.options.findIndex((o) => o.code === "amount");
      if (a) {
        const o = { ...a, value: t }, i = [...this.product.options].slice(0, r).concat(o).concat(this.product.options.slice(r + 1)), n = { ...this.product, options: i };
        this.setOption(n, !0).getNextOption();
        const l = new Event(
          this.isEditor ? "connectConfiguratorEditor:recalculated" : "connectConfigurator:recalculated"
        );
        window.dispatchEvent(l);
      }
    }
  }
}
class Gv extends Zv {
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
    this.initialized = !0, this.proxy = t, this.repository = new ts({ proxy: t, productId: d }), this.setLanguage(a), this.callbackUrl = s, r && this.setAddress(r), o && this.setPriceType(o, i), n.length && this.setOverwrites(n), l && (this.storeProductsLocally = l), c && (this.hideDeliverySection = c), u && (this.buttonStartText = u);
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
            title: ns(s.message ? s.message : s)
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
const Jv = `*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:--theme(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:--theme(--default-font-feature-settings,normal);font-variation-settings:--theme(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:--theme(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:--theme(--default-mono-font-feature-settings,normal);font-variation-settings:--theme(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}:root,:host{--font-sans: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--animate-progress: progress 1s infinite linear;--transform-origin-left-right: 0% 50%;--color-primary-light: #3b82f6;--color-primary-mid: #2f6fe8;--color-primary: #2563eb;--color-primary-hover: #1d4ed8;--color-primary-pressed: #1e40af;--color-secondary: #ffffff;--color-secondary-hover: #fafafa;--color-secondary-pressed: #e5e5e5;--color-tertiary: #eff6ff;--color-tertiary-hover: #dbeafe;--color-tertiary-pressed: #bfdbfe;--color-error-primary: #7b2122;--color-error-secondary: #d52d2f;--color-error-tertiary: #e73c3e;--color-error-accent: #fef2f2;--color-warning-primary: #7c2d12;--color-warning-secondary: #c2410c;--color-warning-tertiary: #f97316;--color-warning-accent: #fff7ed;--color-info-primary: #1e3a8a;--color-info-secondary: #1d4ed8;--color-info-tertiary: #3b82f6;--color-info-accent: #eff6ff;--color-success-primary: #14532d;--color-success-secondary: #15803d;--color-success-tertiary: #22c55e;--color-success-accent: #f0fdf4;--color-border-primary: #d1d5db;--color-border-primary-hover: #9ca3af;--color-disabled-light: #f9fafb;--color-disabled: #f3f4f6;--color-disabled-text: #9ca3af;--color-table-row-border-color: #e5e5e5;--color-input-bg: #ffffff;--color-input-border: #d1d5db;--color-input-disabled-border: #d1d5db;--color-input-inline: #111827;--color-body-text: #111827;--color-body: #ffffff;--color-parent-bg: #ffffff;--color-child: #ffffff;--color-child-alt: #ffffff;--color-gray-450: #848b98;--color-red-50: oklch(97.1% .013 17.38);--color-red-100: oklch(93.6% .032 17.717);--color-red-200: oklch(88.5% .062 18.334);--color-red-300: oklch(80.8% .114 19.571);--color-red-400: oklch(70.4% .191 22.216);--color-red-500: oklch(63.7% .237 25.331);--color-red-600: oklch(57.7% .245 27.325);--color-red-700: oklch(50.5% .213 27.518);--color-red-800: oklch(44.4% .177 26.899);--color-red-900: oklch(39.6% .141 25.723);--color-red-950: oklch(25.8% .092 26.042);--color-orange-50: oklch(98% .016 73.684);--color-orange-100: oklch(95.4% .038 75.164);--color-orange-200: oklch(90.1% .076 70.697);--color-orange-300: oklch(83.7% .128 66.29);--color-orange-400: oklch(75% .183 55.934);--color-orange-500: oklch(70.5% .213 47.604);--color-orange-600: oklch(64.6% .222 41.116);--color-orange-700: oklch(55.3% .195 38.402);--color-orange-800: oklch(47% .157 37.304);--color-orange-900: oklch(40.8% .123 38.172);--color-orange-950: oklch(26.6% .079 36.259);--color-amber-50: oklch(98.7% .022 95.277);--color-amber-100: oklch(96.2% .059 95.617);--color-amber-200: oklch(92.4% .12 95.746);--color-amber-300: oklch(87.9% .169 91.605);--color-amber-400: oklch(82.8% .189 84.429);--color-amber-500: oklch(76.9% .188 70.08);--color-amber-600: oklch(66.6% .179 58.318);--color-amber-700: oklch(55.5% .163 48.998);--color-amber-800: oklch(47.3% .137 46.201);--color-amber-900: oklch(41.4% .112 45.904);--color-amber-950: oklch(27.9% .077 45.635);--color-yellow-50: oklch(98.7% .026 102.212);--color-yellow-100: oklch(97.3% .071 103.193);--color-yellow-200: oklch(94.5% .129 101.54);--color-yellow-300: oklch(90.5% .182 98.111);--color-yellow-400: oklch(85.2% .199 91.936);--color-yellow-500: oklch(79.5% .184 86.047);--color-yellow-600: oklch(68.1% .162 75.834);--color-yellow-700: oklch(55.4% .135 66.442);--color-yellow-800: oklch(47.6% .114 61.907);--color-yellow-900: oklch(42.1% .095 57.708);--color-yellow-950: oklch(28.6% .066 53.813);--color-lime-50: oklch(98.6% .031 120.757);--color-lime-100: oklch(96.7% .067 122.328);--color-lime-200: oklch(93.8% .127 124.321);--color-lime-300: oklch(89.7% .196 126.665);--color-lime-400: oklch(84.1% .238 128.85);--color-lime-500: oklch(76.8% .233 130.85);--color-lime-600: oklch(64.8% .2 131.684);--color-lime-700: oklch(53.2% .157 131.589);--color-lime-800: oklch(45.3% .124 130.933);--color-lime-900: oklch(40.5% .101 131.063);--color-lime-950: oklch(27.4% .072 132.109);--color-green-50: oklch(98.2% .018 155.826);--color-green-100: oklch(96.2% .044 156.743);--color-green-200: oklch(92.5% .084 155.995);--color-green-300: oklch(87.1% .15 154.449);--color-green-400: oklch(79.2% .209 151.711);--color-green-500: oklch(72.3% .219 149.579);--color-green-600: oklch(62.7% .194 149.214);--color-green-700: oklch(52.7% .154 150.069);--color-green-800: oklch(44.8% .119 151.328);--color-green-900: oklch(39.3% .095 152.535);--color-green-950: oklch(26.6% .065 152.934);--color-emerald-50: oklch(97.9% .021 166.113);--color-emerald-100: oklch(95% .052 163.051);--color-emerald-200: oklch(90.5% .093 164.15);--color-emerald-300: oklch(84.5% .143 164.978);--color-emerald-400: oklch(76.5% .177 163.223);--color-emerald-500: oklch(69.6% .17 162.48);--color-emerald-600: oklch(59.6% .145 163.225);--color-emerald-700: oklch(50.8% .118 165.612);--color-emerald-800: oklch(43.2% .095 166.913);--color-emerald-900: oklch(37.8% .077 168.94);--color-emerald-950: oklch(26.2% .051 172.552);--color-teal-50: oklch(98.4% .014 180.72);--color-teal-100: oklch(95.3% .051 180.801);--color-teal-200: oklch(91% .096 180.426);--color-teal-300: oklch(85.5% .138 181.071);--color-teal-400: oklch(77.7% .152 181.912);--color-teal-500: oklch(70.4% .14 182.503);--color-teal-600: oklch(60% .118 184.704);--color-teal-700: oklch(51.1% .096 186.391);--color-teal-800: oklch(43.7% .078 188.216);--color-teal-900: oklch(38.6% .063 188.416);--color-teal-950: oklch(27.7% .046 192.524);--color-cyan-50: oklch(98.4% .019 200.873);--color-cyan-100: oklch(95.6% .045 203.388);--color-cyan-200: oklch(91.7% .08 205.041);--color-cyan-300: oklch(86.5% .127 207.078);--color-cyan-400: oklch(78.9% .154 211.53);--color-cyan-500: oklch(71.5% .143 215.221);--color-cyan-600: oklch(60.9% .126 221.723);--color-cyan-700: oklch(52% .105 223.128);--color-cyan-800: oklch(45% .085 224.283);--color-cyan-900: oklch(39.8% .07 227.392);--color-cyan-950: oklch(30.2% .056 229.695);--color-sky-50: oklch(97.7% .013 236.62);--color-sky-100: oklch(95.1% .026 236.824);--color-sky-200: oklch(90.1% .058 230.902);--color-sky-300: oklch(82.8% .111 230.318);--color-sky-400: oklch(74.6% .16 232.661);--color-sky-500: oklch(68.5% .169 237.323);--color-sky-600: oklch(58.8% .158 241.966);--color-sky-700: oklch(50% .134 242.749);--color-sky-800: oklch(44.3% .11 240.79);--color-sky-900: oklch(39.1% .09 240.876);--color-sky-950: oklch(29.3% .066 243.157);--color-blue-50: oklch(97% .014 254.604);--color-blue-100: oklch(93.2% .032 255.585);--color-blue-200: oklch(88.2% .059 254.128);--color-blue-300: oklch(80.9% .105 251.813);--color-blue-400: oklch(70.7% .165 254.624);--color-blue-500: oklch(62.3% .214 259.815);--color-blue-600: oklch(54.6% .245 262.881);--color-blue-700: oklch(48.8% .243 264.376);--color-blue-800: oklch(42.4% .199 265.638);--color-blue-900: oklch(37.9% .146 265.522);--color-blue-950: oklch(28.2% .091 267.935);--color-indigo-50: oklch(96.2% .018 272.314);--color-indigo-100: oklch(93% .034 272.788);--color-indigo-200: oklch(87% .065 274.039);--color-indigo-300: oklch(78.5% .115 274.713);--color-indigo-400: oklch(67.3% .182 276.935);--color-indigo-500: oklch(58.5% .233 277.117);--color-indigo-600: oklch(51.1% .262 276.966);--color-indigo-700: oklch(45.7% .24 277.023);--color-indigo-800: oklch(39.8% .195 277.366);--color-indigo-900: oklch(35.9% .144 278.697);--color-indigo-950: oklch(25.7% .09 281.288);--color-violet-50: oklch(96.9% .016 293.756);--color-violet-100: oklch(94.3% .029 294.588);--color-violet-200: oklch(89.4% .057 293.283);--color-violet-300: oklch(81.1% .111 293.571);--color-violet-400: oklch(70.2% .183 293.541);--color-violet-500: oklch(60.6% .25 292.717);--color-violet-600: oklch(54.1% .281 293.009);--color-violet-700: oklch(49.1% .27 292.581);--color-violet-800: oklch(43.2% .232 292.759);--color-violet-900: oklch(38% .189 293.745);--color-violet-950: oklch(28.3% .141 291.089);--color-purple-50: oklch(97.7% .014 308.299);--color-purple-100: oklch(94.6% .033 307.174);--color-purple-200: oklch(90.2% .063 306.703);--color-purple-300: oklch(82.7% .119 306.383);--color-purple-400: oklch(71.4% .203 305.504);--color-purple-500: oklch(62.7% .265 303.9);--color-purple-600: oklch(55.8% .288 302.321);--color-purple-700: oklch(49.6% .265 301.924);--color-purple-800: oklch(43.8% .218 303.724);--color-purple-900: oklch(38.1% .176 304.987);--color-purple-950: oklch(29.1% .149 302.717);--color-fuchsia-50: oklch(97.7% .017 320.058);--color-fuchsia-100: oklch(95.2% .037 318.852);--color-fuchsia-200: oklch(90.3% .076 319.62);--color-fuchsia-300: oklch(83.3% .145 321.434);--color-fuchsia-400: oklch(74% .238 322.16);--color-fuchsia-500: oklch(66.7% .295 322.15);--color-fuchsia-600: oklch(59.1% .293 322.896);--color-fuchsia-700: oklch(51.8% .253 323.949);--color-fuchsia-800: oklch(45.2% .211 324.591);--color-fuchsia-900: oklch(40.1% .17 325.612);--color-fuchsia-950: oklch(29.3% .136 325.661);--color-pink-50: oklch(97.1% .014 343.198);--color-pink-100: oklch(94.8% .028 342.258);--color-pink-200: oklch(89.9% .061 343.231);--color-pink-300: oklch(82.3% .12 346.018);--color-pink-400: oklch(71.8% .202 349.761);--color-pink-500: oklch(65.6% .241 354.308);--color-pink-600: oklch(59.2% .249 .584);--color-pink-700: oklch(52.5% .223 3.958);--color-pink-800: oklch(45.9% .187 3.815);--color-pink-900: oklch(40.8% .153 2.432);--color-pink-950: oklch(28.4% .109 3.907);--color-rose-50: oklch(96.9% .015 12.422);--color-rose-100: oklch(94.1% .03 12.58);--color-rose-200: oklch(89.2% .058 10.001);--color-rose-300: oklch(81% .117 11.638);--color-rose-400: oklch(71.2% .194 13.428);--color-rose-500: oklch(64.5% .246 16.439);--color-rose-600: oklch(58.6% .253 17.585);--color-rose-700: oklch(51.4% .222 16.935);--color-rose-800: oklch(45.5% .188 13.697);--color-rose-900: oklch(41% .159 10.272);--color-rose-950: oklch(27.1% .105 12.094);--color-slate-50: oklch(98.4% .003 247.858);--color-slate-100: oklch(96.8% .007 247.896);--color-slate-200: oklch(92.9% .013 255.508);--color-slate-300: oklch(86.9% .022 252.894);--color-slate-400: oklch(70.4% .04 256.788);--color-slate-500: oklch(55.4% .046 257.417);--color-slate-600: oklch(44.6% .043 257.281);--color-slate-700: oklch(37.2% .044 257.287);--color-slate-800: oklch(27.9% .041 260.031);--color-slate-900: oklch(20.8% .042 265.755);--color-slate-950: oklch(12.9% .042 264.695);--color-gray-50: oklch(98.5% .002 247.839);--color-gray-100: oklch(96.7% .003 264.542);--color-gray-200: oklch(92.8% .006 264.531);--color-gray-300: oklch(87.2% .01 258.338);--color-gray-400: oklch(70.7% .022 261.325);--color-gray-500: oklch(55.1% .027 264.364);--color-gray-600: oklch(44.6% .03 256.802);--color-gray-700: oklch(37.3% .034 259.733);--color-gray-800: oklch(27.8% .033 256.848);--color-gray-900: oklch(21% .034 264.665);--color-gray-950: oklch(13% .028 261.692);--color-zinc-50: oklch(98.5% 0 0);--color-zinc-100: oklch(96.7% .001 286.375);--color-zinc-200: oklch(92% .004 286.32);--color-zinc-300: oklch(87.1% .006 286.286);--color-zinc-400: oklch(70.5% .015 286.067);--color-zinc-500: oklch(55.2% .016 285.938);--color-zinc-600: oklch(44.2% .017 285.786);--color-zinc-700: oklch(37% .013 285.805);--color-zinc-800: oklch(27.4% .006 286.033);--color-zinc-900: oklch(21% .006 285.885);--color-zinc-950: oklch(14.1% .005 285.823);--color-neutral-50: oklch(98.5% 0 0);--color-neutral-100: oklch(97% 0 0);--color-neutral-200: oklch(92.2% 0 0);--color-neutral-300: oklch(87% 0 0);--color-neutral-400: oklch(70.8% 0 0);--color-neutral-500: oklch(55.6% 0 0);--color-neutral-600: oklch(43.9% 0 0);--color-neutral-700: oklch(37.1% 0 0);--color-neutral-800: oklch(26.9% 0 0);--color-neutral-900: oklch(20.5% 0 0);--color-neutral-950: oklch(14.5% 0 0);--color-stone-50: oklch(98.5% .001 106.423);--color-stone-100: oklch(97% .001 106.424);--color-stone-200: oklch(92.3% .003 48.717);--color-stone-300: oklch(86.9% .005 56.366);--color-stone-400: oklch(70.9% .01 56.259);--color-stone-500: oklch(55.3% .013 58.071);--color-stone-600: oklch(44.4% .011 73.639);--color-stone-700: oklch(37.4% .01 67.558);--color-stone-800: oklch(26.8% .007 34.298);--color-stone-900: oklch(21.6% .006 56.043);--color-stone-950: oklch(14.7% .004 49.25);--color-black: #000;--color-white: #fff;--spacing: .25rem;--breakpoint-sm: 40rem;--breakpoint-md: 48rem;--breakpoint-lg: 64rem;--breakpoint-xl: 80rem;--breakpoint-2xl: 96rem;--container-3xs: 16rem;--container-2xs: 18rem;--container-xs: 20rem;--container-sm: 24rem;--container-md: 28rem;--container-lg: 32rem;--container-xl: 36rem;--container-2xl: 42rem;--container-3xl: 48rem;--container-4xl: 56rem;--container-5xl: 64rem;--container-6xl: 72rem;--container-7xl: 80rem;--text-xs: .75rem;--text-xs--line-height: calc(1 / .75);--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-3xl: 1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--text-6xl: 3.75rem;--text-6xl--line-height: 1;--text-7xl: 4.5rem;--text-7xl--line-height: 1;--text-8xl: 6rem;--text-8xl--line-height: 1;--text-9xl: 8rem;--text-9xl--line-height: 1;--font-weight-thin: 100;--font-weight-extralight: 200;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--font-weight-black: 900;--tracking-tighter: -.05em;--tracking-tight: -.025em;--tracking-normal: 0em;--tracking-wide: .025em;--tracking-wider: .05em;--tracking-widest: .1em;--leading-tight: 1.25;--leading-snug: 1.375;--leading-normal: 1.5;--leading-relaxed: 1.625;--leading-loose: 2;--radius-xs: .125rem;--radius-sm: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-4xl: 2rem;--shadow-2xs: 0 1px rgb(0 0 0 / .05);--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--inset-shadow-2xs: inset 0 1px rgb(0 0 0 / .05);--inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / .05);--inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / .05);--drop-shadow-xs: 0 1px 1px rgb(0 0 0 / .05);--drop-shadow-sm: 0 1px 2px rgb(0 0 0 / .15);--drop-shadow-md: 0 3px 3px rgb(0 0 0 / .12);--drop-shadow-lg: 0 4px 4px rgb(0 0 0 / .15);--drop-shadow-xl: 0 9px 7px rgb(0 0 0 / .1);--drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / .15);--text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / .15);--text-shadow-xs: 0px 1px 1px rgb(0 0 0 / .2);--text-shadow-sm: 0px 1px 0px rgb(0 0 0 / .075), 0px 1px 1px rgb(0 0 0 / .075), 0px 2px 2px rgb(0 0 0 / .075);--text-shadow-md: 0px 1px 1px rgb(0 0 0 / .1), 0px 1px 2px rgb(0 0 0 / .1), 0px 2px 4px rgb(0 0 0 / .1);--text-shadow-lg: 0px 1px 2px rgb(0 0 0 / .1), 0px 3px 2px rgb(0 0 0 / .1), 0px 4px 8px rgb(0 0 0 / .1);--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce: bounce 1s infinite;--blur-xs: 4px;--blur-sm: 8px;--blur-md: 12px;--blur-lg: 16px;--blur-xl: 24px;--blur-2xl: 40px;--blur-3xl: 64px;--perspective-dramatic: 100px;--perspective-near: 300px;--perspective-normal: 500px;--perspective-midrange: 800px;--perspective-distant: 1200px;--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)}@layer base{[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6a7282;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(55.1%25 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#155dfc;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6a7282;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media(forced-colors:active){[type=checkbox]:checked{appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media(forced-colors:active){[type=radio]:checked{appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media(forced-colors:active){[type=checkbox]:indeterminate{appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}}.mini-icon[data-v-206f9b1b]{flex-shrink:0;width:1.25rem;height:1.25rem;display:flex}.dark .mini-icon[data-v-206f9b1b]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-47dd263a],[data-v-47dd263a]:before,[data-v-47dd263a]:after,[data-v-47dd263a]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.hotkey[data-v-47dd263a]{height:calc(var(--spacing,.25rem)*5);width:fit-content;min-width:calc(var(--spacing,.25rem)*5);border-style:var(--tw-border-style);--tw-border-style:solid;padding-inline:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-style:solid;border-width:1px;border-radius:.25rem;justify-content:center;align-items:center;display:flex}.hotkey.disabled[data-v-47dd263a]{color:var(--color-disabled-text,#606369)}.hotkey.primary-hotkey[data-v-47dd263a]{color:var(--color-white,#fff);background-color:#ffffff26;border-color:#ffffff80}.hotkey.secondary-hotkey[data-v-47dd263a]{color:var(--color-neutral-600,oklch(43.9% 0 0));background-color:#0a0a0a08;border-color:#0a0a0a26}.hotkey.secondary-hotkey[data-v-47dd263a]:where(.dark,.dark *){color:var(--color-body-text,#111827);background-color:#ffffff26;border-color:#ffffff80}.hotkey.tertiary-hotkey[data-v-47dd263a]{color:var(--color-primary-light,#3b82f6);background-color:#0062ff0f;border-color:#0062ff4d}.hotkey.tertiary-hotkey[data-v-47dd263a]:where(.dark,.dark *){border-color:var(--color-primary-mid,#2f6fe8)}.loader[data-v-7d40d0e0]{animation:var(--animate-spin);border-radius:100%;height:1.5rem;width:1.5rem;border-width:.1875rem}.loader.primary-loader[data-v-7d40d0e0]{border-color:var(--color-blue-100);border-top-color:var(--color-blue-600)}.loader.secondary-loader[data-v-7d40d0e0]{border-color:color-mix(in oklab,var(--color-white) 40%,transparent);border-top-color:var(--color-white)}.loader.small-loader[data-v-7d40d0e0]{height:1.25rem;width:1.25rem}.loader.large-loader[data-v-7d40d0e0]{height:1.75rem;width:1.75rem}.button[data-v-2b556282]{height:2.5rem;border-radius:.5rem;padding:0 .75rem;font-weight:500;display:flex;justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;-webkit-user-select:none;user-select:none;color:var(--color-neutral-700);cursor:pointer}.button .default-loader[data-v-2b556282],.button .small-loader[data-v-2b556282]{height:1.3rem;width:1.3rem}.button .large-loader[data-v-2b556282]{height:1.5rem;width:1.5rem}.button[data-v-2b556282]:disabled{background-color:var(--color-disabled)!important;color:var(--color-disabled-text)!important;cursor:not-allowed}.button.primary[data-v-2b556282]{color:var(--color-white);background-color:var(--color-primary)}.button.primary[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-primary-hover)}.button.primary[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-primary-pressed)}.button.secondary[data-v-2b556282]{background-color:var(--color-secondary);border:1px solid var(--color-neutral-300);color:var(--color-neutral-950)}.dark .button.secondary[data-v-2b556282]{color:var(--color-neutral-200)}.dark .button.secondary[data-v-2b556282]:focus{color:var(--color-black)}.button.secondary[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-secondary-hover);border-color:var(--color-border-primary-hover)}.button.secondary[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-secondary-pressed)}.button.secondary[data-v-2b556282]:disabled{border-color:var(--color-disabled)}.button.tertiary[data-v-2b556282]{background-color:var(--color-tertiary);color:var(--color-primary)}.dark .button.tertiary[data-v-2b556282]{color:var(--color-primary-light)}.button.tertiary[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-tertiary-hover)}.button.tertiary[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-tertiary-pressed)}.dark .button.text[data-v-2b556282]{color:var(--color-body-text)}.button.text[data-v-2b556282]:not(:disabled):hover{background-color:#0f172a0a}.button.text[data-v-2b556282]:not(:disabled):focus{background-color:#0f172a14}.button.danger[data-v-2b556282]{background-color:var(--color-red-600);color:var(--color-white)}.button.danger[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-red-700)}.button.danger[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-red-900)}.dark .button.danger[data-v-2b556282]{background-color:var(--color-red-800)}.button.success[data-v-2b556282]{background-color:var(--color-success-background);color:var(--color-white)}.button.success[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-success-secondary)}.button.success[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-success-primary)}.dark .button.success[data-v-2b556282]{background-color:var(--color-green-800)}.dark .button.success[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-green-700)}.dark .button.success[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-green-900)}.button.warning[data-v-2b556282]{background-color:var(--color-warning-background);color:var(--color-white)}.button.warning[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-warning-secondary)}.button.warning[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-warning-primary)}.button.url[data-v-2b556282]{background-color:transparent;color:var(--color-primary);gap:.25rem;height:1.25rem;padding:0}.button.url[data-v-2b556282]:hover{text-decoration:underline}.dark .button.url[data-v-2b556282]{color:var(--color-primary-light)!important}.dark .button.url .mini-icon[data-v-2b556282]{color:var(--color-primary-light)}.button.default.has-icon[data-v-2b556282]{padding:.625rem}.button.default .mini-icon[data-v-2b556282]{height:1.25rem;width:1.25rem}.button.default[data-v-2b556282] .mini-icon svg{stroke-width:1.75}.button.small[data-v-2b556282]{height:2rem;padding:0 .75rem}.button.small.has-icon[data-v-2b556282]{border-radius:9999px;width:2rem}.button.small .mini-icon[data-v-2b556282]{height:1rem;width:1rem}.button.small[data-v-2b556282] .mini-icon svg{stroke-width:2}.button.medium[data-v-2b556282]{height:3rem;padding:0 1rem;font-size:1rem;line-height:1.5rem}.button.medium .mini-icon[data-v-2b556282]{height:1.5rem;width:1.5rem}.button.medium.has-icon[data-v-2b556282]{padding:.75rem}.button.large[data-v-2b556282]{height:3.5rem;padding:0 1.75rem;font-size:1rem;line-height:1.5rem}.button.large .mini-icon[data-v-2b556282]{height:1.5rem;width:1.5rem}.button.large.has-icon[data-v-2b556282]{padding:1.25rem}.hotkey[data-v-2b556282]{margin-left:.25rem}.image-wrapper[data-v-cfa09f9c]{width:100%;height:100%;display:block}.dark .image-wrapper[data-v-cfa09f9c]{opacity:.8}.image.rounded-4[data-v-cfa09f9c],.skeleton.rounded-4[data-v-cfa09f9c]{border-radius:.25rem}.image.rounded-8[data-v-cfa09f9c],.skeleton.rounded-8[data-v-cfa09f9c]{border-radius:.5rem}.image.rounded-16[data-v-cfa09f9c],.skeleton.rounded-16[data-v-cfa09f9c]{border-radius:1rem}.image.rounded-100[data-v-cfa09f9c],.skeleton.rounded-100[data-v-cfa09f9c]{border-radius:3.40282e38px}.image-wrapper .skeleton[data-v-cfa09f9c]{background-color:var(--color-neutral-200);width:100%;height:100%;animation:var(--animate-pulse)}.dark .image-wrapper .skeleton[data-v-cfa09f9c]{background-color:var(--color-gray-700)}:is(h1,h2,h3,h4,h5,h6)[data-v-6ad666e7]{font-weight:600}.dark :is(h1,h2,h3,h4,h5,h6)[data-v-6ad666e7]{color:var(--color-neutral-200)}h1[data-v-6ad666e7],h2[data-v-6ad666e7]{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h3[data-v-6ad666e7],h4[data-v-6ad666e7],h5[data-v-6ad666e7],h6[data-v-6ad666e7]{font-family:var(--font-sans)}h1[data-v-6ad666e7]{font-size:1.75rem;letter-spacing:-.8px;line-height:2.25rem}h2[data-v-6ad666e7]{font-size:1.25rem;letter-spacing:-.2px;line-height:1.75rem}h3[data-v-6ad666e7]{font-size:1rem;line-height:1.5rem}h4[data-v-6ad666e7]{font-size:.875rem;line-height:1.25rem}h5[data-v-6ad666e7]{font-size:.875rem;line-height:1.25rem;font-weight:500}h6[data-v-6ad666e7]{font-size:.75rem;line-height:1rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3a85ac16],[data-v-3a85ac16]:before,[data-v-3a85ac16]:after,[data-v-3a85ac16]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid}}}[data-v-3a85ac16] .image-wrapper{height:10.25rem}[data-v-3a85ac16] .image-wrapper .image{object-fit:cover;width:100%;height:100%}[data-v-3a85ac16] .image-wrapper.dense{height:unset;flex-shrink:0;width:auto}[data-v-3a85ac16] .image-wrapper.disabled{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card[data-v-3a85ac16]{cursor:pointer;border-radius:var(--radius-xl,.75rem);background-color:var(--color-child-alt,#fff);flex-direction:column;width:17.625rem;display:flex;overflow:auto}.card[data-v-3a85ac16]:not(.passive):hover,.card[data-v-3a85ac16]:not(.passive):focus{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card[data-v-3a85ac16]:not(.flat){border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.card[data-v-3a85ac16]:not(.flat):where(.dark,.dark *){--tw-border-style:none;border-style:none}.card.passive[data-v-3a85ac16]{cursor:default}.card.disabled[data-v-3a85ac16]{cursor:default;border-color:var(--color-gray-300,oklch(87.2% .01 258.338));background-color:var(--color-disabled,#f3f4f6)}@media(hover:hover){.card.disabled[data-v-3a85ac16]:hover{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.card.disabled .content[data-v-3a85ac16]{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card.dense[data-v-3a85ac16]{flex-direction:row;justify-content:flex-start;width:100%}.card.dense .inner[data-v-3a85ac16]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1)}.card.flat[data-v-3a85ac16]:hover{background-color:var(--color-secondary-hover,#fafafa);--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card .inner[data-v-3a85ac16]{width:100%;padding:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}.card .inner .header[data-v-3a85ac16]{width:100%;padding-bottom:calc(var(--spacing,.25rem)*2);border-top-left-radius:.25rem;border-top-right-radius:.25rem;flex-direction:column;display:flex;position:relative}.card .inner .header .title[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.card .inner .header .subtitle[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.card .inner .header .subtitle[data-v-3a85ac16]:where(.dark,.dark *){color:var(--color-gray-100,oklch(96.7% .003 264.542))}.card .inner .content[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.card .inner .footer[data-v-3a85ac16]{padding-top:calc(var(--spacing,.25rem)*4)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-b1beee2f],[data-v-b1beee2f]:before,[data-v-b1beee2f]:after,[data-v-b1beee2f]::backdrop{--tw-ease:initial}}}[data-v-b1beee2f]{will-change:height;backface-visibility:hidden;perspective:1000px;transform:translateZ(0)}.expand-enter-active[data-v-b1beee2f],.expand-leave-active[data-v-b1beee2f]{transition-property:height,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:var(--b3e76ba0);overflow:hidden}.expand-enter-from[data-v-b1beee2f],.expand-leave-to[data-v-b1beee2f]{opacity:0}.expand-enter[data-v-b1beee2f],.expand-leave-to[data-v-b1beee2f]{height:var(--v744134fd)}.card[data-v-b4f8a358]{width:100%}.card.expanded[data-v-b4f8a358]{max-height:var(--v3d1a4e5c)}.card[data-v-b4f8a358] .inner{padding:calc(var(--spacing,.25rem)*1)}.button[data-v-b4f8a358]{margin-top:calc(var(--spacing,.25rem)*1);background-color:var(--color-neutral-50,oklch(98.5% 0 0));width:100%;height:auto;padding-block:calc(var(--spacing,.25rem)*2.5);color:var(--color-primary,#2563eb)}.button[data-v-b4f8a358]:where(.dark,.dark *){background-color:var(--color-child,#fff);color:var(--color-body-text,#111827)}.button[data-v-b4f8a358]:not([disabled]):hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:#0a0a0a14}@supports (color:color-mix(in lab,red,red)){.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-950,oklch(14.5% 0 0))8%,transparent)}}.expand-enter-active[data-v-b4f8a358],.expand-leave-active[data-v-b4f8a358]{transition-property:opacity,height}.expand-enter[data-v-b4f8a358],.expand-leave-to[data-v-b4f8a358]{opacity:0}.radio-group[data-v-c2d61b3c]{pointer-events:none;gap:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.radio-group[data-v-c2d61b3c] *{pointer-events:auto}.table-wrapper[data-v-5a42bd69]{border-radius:var(--radius-lg,.5rem);width:100%;display:block;position:relative;overflow:clip}.table-wrapper table[data-v-5a42bd69]{background-color:var(--color-body,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-wrapper .sticky-container[data-v-5a42bd69]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;position:sticky}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*3);background-color:var(--color-secondary-hover,#fafafa);align-items:center;display:flex}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]:where(.dark,.dark *){background-color:#323746}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-gray-300,oklch(87.2% .01 258.338));position:absolute}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]:where(.dark,.dark *){background-color:#7882a0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5ee4dbf8],[data-v-5ee4dbf8]:before,[data-v-5ee4dbf8]:after,[data-v-5ee4dbf8]::backdrop{--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}thead[data-v-5ee4dbf8]{top:calc(var(--spacing,.25rem)*0);z-index:10;background-color:var(--color-body,#fff);position:sticky}thead[data-v-5ee4dbf8] tr td{--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0))}thead[data-v-5ee4dbf8] tr td:where(.dark,.dark *){color:var(--color-white,#fff)}thead[data-v-5ee4dbf8] tr td input{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}thead[data-v-5ee4dbf8] tr td{--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-table-row-border-color));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-94a1d3c2],[data-v-94a1d3c2]:before,[data-v-94a1d3c2]:after,[data-v-94a1d3c2]::backdrop{--tw-border-style:solid}}}tbody[data-v-94a1d3c2] tr:not(:last-child){border-bottom-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-bottom-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}td[data-v-2b59e8a9]{padding-inline:calc(var(--spacing,.25rem)*4);vertical-align:middle;color:var(--color-neutral-950,oklch(14.5% 0 0))}td[data-v-2b59e8a9]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3dad8f2b],[data-v-3dad8f2b]:before,[data-v-3dad8f2b]:after,[data-v-3dad8f2b]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.checkbox-container[data-v-3dad8f2b]{flex-direction:column;width:100%;display:flex}.checkbox-container.large .label[data-v-3dad8f2b]{gap:calc(var(--spacing,.25rem)*3)}.checkbox-container.large .checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.label[data-v-3dad8f2b]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);display:flex}.label[data-v-3dad8f2b]:not(.disabled){cursor:pointer}.checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*.5);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6);border-radius:.25rem}.checkbox[data-v-3dad8f2b]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.checkbox[data-v-3dad8f2b]:checked,.checkbox[data-v-3dad8f2b]:indeterminate{border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary-light,#3b82f6)}.checkbox[data-v-3dad8f2b]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-gray-200,oklch(92.8% .006 264.531))!important}.checkbox[data-v-3dad8f2b]:not(:disabled):checked:hover,.checkbox[data-v-3dad8f2b]:not(:disabled):indeterminate:hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}.checkbox[data-v-3dad8f2b]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-3dad8f2b]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(156, 163, 175)' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-3dad8f2b]{border-color:var(--color-error-secondary,#d52d2f);outline-color:var(--color-error-secondary,#d52d2f)}.error .error-message[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.append[data-v-3dad8f2b]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-left:auto}tr[data-v-7e2dd7b3]{height:3.5rem;max-height:calc(var(--spacing,.25rem)*12);min-height:3.5rem}.icon[data-v-eb0a670a]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.dark .icon[data-v-eb0a670a]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-11f73f62],[data-v-11f73f62]:before,[data-v-11f73f62]:after,[data-v-11f73f62]::backdrop{--tw-font-weight:initial}}}.no-results-row[data-v-11f73f62]{height:calc(var(--spacing,.25rem)*64);position:relative}.no-results-row td[data-v-11f73f62]{white-space:nowrap;width:100%;height:100%;position:absolute;overflow:hidden}.no-results-row td .wrapper[data-v-11f73f62]{justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);text-wrap:wrap;flex-direction:column;display:flex}.no-results-row td .wrapper .icon[data-v-11f73f62]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12);stroke:var(--color-neutral-500,oklch(55.6% 0 0))}.no-results-row td .wrapper h2[data-v-11f73f62]{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.no-results-row td .wrapper span[data-v-11f73f62]{text-align:center;color:var(--color-neutral-500,oklch(55.6% 0 0))}.no-results-row td .wrapper span[data-v-11f73f62]:where(.dark,.dark *){color:var(--color-neutral-400,oklch(70.8% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a60b07d9],[data-v-a60b07d9]:before,[data-v-a60b07d9]:after,[data-v-a60b07d9]::backdrop{--tw-border-style:solid}}}.pagination[data-v-a60b07d9]{gap:calc(var(--spacing,.25rem)*2);display:flex}.pagination .button[data-v-a60b07d9]{position:relative}.pagination .button[data-v-a60b07d9]:not(:disabled){color:var(--color-primary,#2563eb)}.pagination .button[data-v-a60b07d9]:not(:disabled):not(.current){color:var(--color-body-text,#111827)}.pagination .button[data-v-a60b07d9]:not(:disabled) .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.pagination .button[data-v-a60b07d9]:not(:first-child):not(:last-child){width:calc(var(--spacing,.25rem)*10);display:none}@media(min-width:48rem){.pagination .button[data-v-a60b07d9]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-a60b07d9]:not(:disabled):hover{border-color:var(--color-border-primary,#d1d5db)}.pagination .button.current[data-v-a60b07d9]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb)}.pagination .button .button-text[data-v-a60b07d9]{display:none}@media(min-width:48rem){.pagination .button .button-text[data-v-a60b07d9]{display:block}}.pagination .dotdotdot[data-v-a60b07d9]{align-self:center;display:none}@media(min-width:48rem){.pagination .dotdotdot[data-v-a60b07d9]{display:inline-block}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1005bec5],[data-v-1005bec5]:before,[data-v-1005bec5]:after,[data-v-1005bec5]::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-content:""}}}.skeleton[data-v-1005bec5]{height:calc(var(--spacing,.25rem)*5);animation:var(--animate-pulse,pulse-1005bec5 2s cubic-bezier(.4,0,.6,1)infinite);background-color:var(--color-neutral-200,oklch(92.2% 0 0));display:block}.skeleton[data-v-1005bec5]:where(.dark,.dark *){background-color:var(--color-gray-700,oklch(37.3% .034 259.733))}.skeleton.has-content[data-v-1005bec5]{height:auto}.skeleton.circular[data-v-1005bec5]{border-radius:50%}.skeleton.text[data-v-1005bec5]{--tw-scale-y:.7;scale:var(--tw-scale-x)var(--tw-scale-y);border-radius:.25rem}.skeleton.text[data-v-1005bec5]:not(.has-content){height:auto;color:inherit}.skeleton.text[data-v-1005bec5]:not(.has-content):before{--tw-content:" ";content:var(--tw-content)}.skeleton [data-v-1005bec5-s]{visibility:hidden}@keyframes pulse-1005bec5{50%{opacity:.5}}.micro-icon[data-v-08f67949]{display:flex;height:1rem;width:1rem;flex-shrink:0}.dark .micro-icon[data-v-08f67949]{color:var(--color-body-text)}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-76306795],[data-v-76306795]:before,[data-v-76306795]:after,[data-v-76306795]::backdrop{--tw-duration:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}.expand-top-enter-active[data-v-76306795],.expand-bottom-enter-active[data-v-76306795],.expand-left-enter-active[data-v-76306795],.expand-right-enter-active[data-v-76306795],.expand-top-leave-active[data-v-76306795],.expand-bottom-leave-active[data-v-76306795],.expand-left-leave-active[data-v-76306795],.expand-right-leave-active[data-v-76306795]{transform:translateZ(0)var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.15s;transition-duration:.15s}.expand-top-enter-from[data-v-76306795]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-top-enter-to[data-v-76306795],.expand-top-leave-from[data-v-76306795]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-top-leave-to[data-v-76306795]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-from[data-v-76306795]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-to[data-v-76306795],.expand-bottom-leave-from[data-v-76306795]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-bottom-leave-to[data-v-76306795]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-from[data-v-76306795]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-to[data-v-76306795],.expand-left-leave-from[data-v-76306795]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-left-leave-to[data-v-76306795]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-from[data-v-76306795]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-to[data-v-76306795],.expand-right-leave-from[data-v-76306795]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-right-leave-to[data-v-76306795]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fa4dfb8f],[data-v-fa4dfb8f]:before,[data-v-fa4dfb8f]:after,[data-v-fa4dfb8f]::backdrop{--tw-contain-size:initial;--tw-contain-layout:initial;--tw-contain-paint:initial;--tw-contain-style:initial}}}.floating-container-overlay-container[data-v-fa4dfb8f]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);--tw-contain-layout:layout;contain:var(--tw-contain-size,)var(--tw-contain-layout,)var(--tw-contain-paint,)var(--tw-contain-style,);display:contents;position:absolute}.floating-container-overlay-container .floating-container-overlay[data-v-fa4dfb8f]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);display:flex;position:absolute}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-fa4dfb8f]{pointer-events:auto;visibility:hidden;margin:calc(var(--spacing,.25rem)*0);width:max-content;height:max-content;padding:calc(var(--spacing,.25rem)*0);background-color:#0000;position:absolute;overflow:visible}@property --tw-contain-size{syntax:"*";inherits:false}@property --tw-contain-layout{syntax:"*";inherits:false}@property --tw-contain-paint{syntax:"*";inherits:false}@property --tw-contain-style{syntax:"*";inherits:false}.list[data-v-12959343]{flex-direction:column;display:flex}.list.grid[data-v-12959343]{flex-flow:wrap}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-175d52b3],[data-v-175d52b3]:before,[data-v-175d52b3]:after,[data-v-175d52b3]::backdrop{--tw-font-weight:initial}}}.list-item[data-v-175d52b3]{background-color:var(--color-child,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);color:var(--color-body-text,#111827);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));align-items:center;display:flex}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]){outline-offset:2px;outline:2px solid #0000}}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):hover{cursor:pointer;background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):hover:where(.dark,.dark *){background-color:var(--color-slate-800,oklch(27.9% .041 260.031))}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-175d52b3]{background-color:var(--color-gray-200,oklch(92.8% .006 264.531))}:is(.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-175d52b3]):where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-175d52b3]{background-color:var(--color-gray-300,oklch(87.2% .01 258.338))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-175d52b3]:where(.dark,.dark *){background-color:var(--color-slate-700,oklch(37.2% .044 257.287))}.list-item .prepend[data-v-175d52b3]{display:flex}.list-item .content[data-v-175d52b3]{flex-direction:column;display:flex}.list-item .content .title[data-v-175d52b3]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.list-item .content .subtitle[data-v-175d52b3]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.list-item .content .subtitle[data-v-175d52b3]:where(.dark,.dark *){color:var(--color-gray-400,oklch(70.7% .022 261.325))}.list-item .content .text[data-v-175d52b3]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-f6c45fb8],[data-v-f6c45fb8]:before,[data-v-f6c45fb8]:after,[data-v-f6c45fb8]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.label[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*6);width:fit-content;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:.25rem;align-items:center;padding-inline:.625rem;display:flex}.label.small[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*5);padding-inline:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.label.blue[data-v-f6c45fb8]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585));color:var(--color-blue-700,oklch(48.8% .243 264.376))}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#54a2ff1a!important}@supports (color:color-mix(in lab,red,red)){.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-blue-400,oklch(70.7% .165 254.624))10%,transparent)!important}}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))!important}.label.green[data-v-f6c45fb8]{background-color:var(--color-green-100,oklch(96.2% .044 156.743));color:var(--color-green-700,oklch(52.7% .154 150.069))}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#05df721a!important}@supports (color:color-mix(in lab,red,red)){.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-400,oklch(79.2% .209 151.711))10%,transparent)!important}}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-green-300,oklch(87.1% .15 154.449))!important}.label.gray[data-v-f6c45fb8]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542));color:var(--color-gray-700,oklch(37.3% .034 259.733))}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#a1a1a11a!important}@supports (color:color-mix(in lab,red,red)){.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-400,oklch(70.8% 0 0))10%,transparent)!important}}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))!important}.label.orange[data-v-f6c45fb8]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164));color:var(--color-orange-700,oklch(55.3% .195 38.402))}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff8b1a1a!important}@supports (color:color-mix(in lab,red,red)){.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-orange-400,oklch(75% .183 55.934))10%,transparent)!important}}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-orange-300,oklch(83.7% .128 66.29))!important}.label.purple[data-v-f6c45fb8]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174));color:var(--color-purple-700,oklch(49.6% .265 301.924))}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#c07eff1a!important}@supports (color:color-mix(in lab,red,red)){.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-purple-400,oklch(71.4% .203 305.504))10%,transparent)!important}}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-purple-300,oklch(82.7% .119 306.383))!important}.label.red[data-v-f6c45fb8]{background-color:var(--color-red-100,oklch(93.6% .032 17.717));color:var(--color-red-700,oklch(50.5% .213 27.518))}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff65681a!important}@supports (color:color-mix(in lab,red,red)){.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-red-400,oklch(70.4% .191 22.216))10%,transparent)!important}}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-red-300,oklch(80.8% .114 19.571))!important}.label.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193));color:var(--color-yellow-700,oklch(55.4% .135 66.442))}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#fac8001a!important}@supports (color:color-mix(in lab,red,red)){.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-yellow-400,oklch(85.2% .199 91.936))10%,transparent)!important}}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-yellow-300,oklch(90.5% .182 98.111))!important}.label.alt[data-v-f6c45fb8]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));border-width:1px}.label.alt.white[data-v-f6c45fb8]{border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);color:var(--color-neutral-900,oklch(20.5% 0 0))}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-white,#fff)10%,transparent)}}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}.label.alt.gray[data-v-f6c45fb8]{background-color:var(--color-neutral-100,oklch(97% 0 0));color:var(--color-neutral-900,oklch(20.5% 0 0));border-color:#3741511a}.label.alt.orange[data-v-f6c45fb8]{background-color:var(--color-orange-50,oklch(98% .016 73.684));color:var(--color-orange-900,oklch(40.8% .123 38.172));border-color:#c2730c1a}.label.alt.blue[data-v-f6c45fb8]{background-color:var(--color-blue-50,oklch(97% .014 254.604));color:var(--color-blue-900,oklch(37.9% .146 265.522));border-color:#1d65d81a}.label.alt.green[data-v-f6c45fb8]{background-color:var(--color-green-50,oklch(98.2% .018 155.826));color:var(--color-green-900,oklch(39.3% .095 152.535));border-color:#16803a1a}.label.alt.red[data-v-f6c45fb8]{background-color:var(--color-red-50,oklch(97.1% .013 17.38));color:var(--color-red-900,oklch(39.6% .141 25.723));border-color:#b32c221a}.label.alt.purple[data-v-f6c45fb8]{background-color:var(--color-purple-50,oklch(97.7% .014 308.299));color:var(--color-purple-900,oklch(38.1% .176 304.987));border-color:#7522ce1a}.label.alt.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-50,oklch(98.7% .026 102.212));color:var(--color-yellow-900,oklch(42.1% .095 57.708));border-color:#a162071a}.divider[data-v-cf022594]{border-color:var(--color-border-primary,#d1d5db);width:100%}.divider[data-v-cf022594]:not(.vertical){border-top-width:var(--v1e7beddb)}.divider.vertical[data-v-cf022594]{width:.0625rem;height:100%}.divider.vertical.flex[data-v-cf022594]{align-self:stretch;height:auto}.divider.vertical[data-v-cf022594]{border-left-width:var(--v1e7beddb)}.base-select[data-v-7e184a2a]:focus{outline:none}.base-select.disabled .wrapper[data-v-7e184a2a]{background-color:var(--color-disabled);border-color:var(--color-input-disabled-border);cursor:not-allowed}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-7e184a2a]{color:var(--color-disabled-text);background-color:var(--color-disabled)}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-7e184a2a]::placeholder{color:var(--color-disabled-text)}.base-select.click[data-v-7e184a2a]{cursor:pointer}.base-select.click.disabled[data-v-7e184a2a]{pointer-events:none;cursor:default}.base-select .input-label[data-v-7e184a2a]{font-size:.875rem;line-height:1.25rem;font-weight:500;margin-bottom:.25rem;display:flex}.base-select .wrapper[data-v-7e184a2a]{background-color:var(--color-input-bg);border:solid 1px var(--color-input-border);border-radius:.5rem;display:flex;align-items:center;width:100%;height:2.5rem;padding:.5rem 1rem .5rem .5rem}.base-select .wrapper[data-v-7e184a2a]:hover{border-color:var(--color-border-primary-hover)}.base-select .wrapper.focus[data-v-7e184a2a]{border-color:var(--color-primary-light);border-width:2px;padding-left:.4375rem;padding-right:.9375rem}.base-select .wrapper.has-error[data-v-7e184a2a]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)}.base-select .wrapper .prepend-icon[data-v-7e184a2a]{color:var(--color-primary);margin-left:.5rem}.base-select .wrapper .selected-items[data-v-7e184a2a]{display:flex;gap:.25rem;white-space:nowrap;overflow:hidden;margin-left:.5rem;width:auto}.base-select .wrapper .selected-items .label[data-v-7e184a2a]{font-size:.75rem;line-height:1rem;height:min-content}.base-select .wrapper .placeholder[data-v-7e184a2a]{color:var(--color-slate-500);margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .selected-item[data-v-7e184a2a]{font-size:.875rem;line-height:1.25rem;margin-left:.5rem;text-overflow:ellipsis;overflow:hidden}.base-select .wrapper .action-buttons[data-v-7e184a2a]{display:flex;gap:.25rem;margin-left:auto}.base-select .wrapper input[data-v-7e184a2a]{border-style:none;padding:.5rem 0;margin-left:.5rem;font-size:.875rem;line-height:1.25rem;flex:1 0 5rem;min-width:0;min-height:0;background-color:var(--color-input-bg);color:var(--color-body-text);height:2.25rem}.base-select .wrapper input[data-v-7e184a2a]::placeholder{color:var(--color-slate-400)}.base-select .wrapper input[data-v-7e184a2a]:focus{box-shadow:none}.base-select .wrapper .label-inner[data-v-7e184a2a]{display:flex;align-items:center;gap:.25rem}.base-select .wrapper .label-inner .close-button[data-v-7e184a2a]{height:1rem;width:1rem}.base-select .error[data-v-7e184a2a]{font-size:.875rem;line-height:1.25rem;color:var(--color-error-secondary);margin-top:.5rem}.state-indicator[data-v-7e184a2a]{pointer-events:none;transition:all .2s ease-in-out}.state-indicator.is-open[data-v-7e184a2a]{transform:rotate(180deg)}.content-divider[data-v-7e184a2a]{border-color:var(--color-input-border);margin-left:1.5rem;margin-right:1.5rem}.select-content[data-v-7e184a2a]{justify-content:space-between;max-height:18.75rem;overflow-y:auto;padding:.5rem 0;border-radius:.5rem;background-color:var(--color-child)}.select-content.show-shadow[data-v-7e184a2a]{box-shadow:var(--shadow-sm)}.select-content.remove-radius[data-v-7e184a2a]{border-top-left-radius:0!important;border-top-right-radius:0!important}.select-content .no-results[data-v-7e184a2a]{color:var(--color-gray-700);cursor:default;-webkit-user-select:none;user-select:none;padding:.5rem 1rem;position:relative}.select-content[data-v-7e184a2a] .checkbox-container{margin-right:1rem}.dark .wrapper .placeholder[data-v-7e184a2a],.dark .select-content .no-results[data-v-7e184a2a]{color:var(--color-body-text)}@media(min-width:768px){.select-content[data-v-7e184a2a]{max-height:400px}}@media(min-width:1024px){.select-content[data-v-7e184a2a]{max-height:500px}}.intersect[data-v-0951cb5e]{display:flex;justify-content:center}.search-loader[data-v-0951cb5e]{margin-top:.5rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-d7f78e8b],[data-v-d7f78e8b]:before,[data-v-d7f78e8b]:after,[data-v-d7f78e8b]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-border-style:solid;--tw-content:"";--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.tooltip-wrapper[data-v-d7f78e8b]{display:contents}.tooltip[data-v-d7f78e8b]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));word-break:break-all;color:var(--color-black,#000);--tw-drop-shadow-size:drop-shadow(0 2px 4px var(--tw-drop-shadow-color,#0000003d));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,);justify-content:center;display:flex;position:relative}.tooltip[data-v-d7f78e8b]:where(.dark,.dark *){background-color:var(--color-neutral-200,oklch(92.2% 0 0))}.tooltip[data-v-d7f78e8b]:before{width:calc(var(--spacing,.25rem)*0);border-style:var(--tw-border-style);--tw-border-style:solid;--tw-content:"";content:var(--tw-content);border:8px solid #0000;display:block;position:absolute}.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]{margin-bottom:calc(var(--spacing,.25rem)*2)}:is(.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]):before{content:var(--tw-content);border-top-color:var(--color-white,#fff)}:is(.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]):before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-top-color:#000}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-child-alt,#fff)}.tooltip.top-left[data-v-d7f78e8b]:before{bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-right[data-v-d7f78e8b]:before{right:calc(var(--spacing,.25rem)*3);bottom:calc(var(--spacing,.25rem)*0);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-center[data-v-d7f78e8b]:before,.tooltip.top[data-v-d7f78e8b]:before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}.tooltip.bottom-left[data-v-d7f78e8b],.tooltip.bottom-right[data-v-d7f78e8b],.tooltip.bottom-center[data-v-d7f78e8b],.tooltip.bottom[data-v-d7f78e8b]{margin-top:calc(var(--spacing,.25rem)*2)}:is(.tooltip.bottom-left[data-v-d7f78e8b],.tooltip.bottom-right[data-v-d7f78e8b],.tooltip.bottom-center[data-v-d7f78e8b],.tooltip.bottom[data-v-d7f78e8b]):before{content:var(--tw-content);border-bottom-color:var(--color-white,#fff)}:is(.tooltip.bottom-left[data-v-d7f78e8b],.tooltip.bottom-right[data-v-d7f78e8b],.tooltip.bottom-center[data-v-d7f78e8b],.tooltip.bottom[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-bottom-color:#000}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-child-alt,#fff)}.tooltip.bottom-left[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-right[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-center[data-v-d7f78e8b]:before,.tooltip.bottom[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0;left:50%}.tooltip.left-top[data-v-d7f78e8b],.tooltip.left-bottom[data-v-d7f78e8b],.tooltip.left-center[data-v-d7f78e8b],.tooltip.left[data-v-d7f78e8b]{margin-right:calc(var(--spacing,.25rem)*2)}:is(.tooltip.left-top[data-v-d7f78e8b],.tooltip.left-bottom[data-v-d7f78e8b],.tooltip.left-center[data-v-d7f78e8b],.tooltip.left[data-v-d7f78e8b]):before{content:var(--tw-content);border-left-color:var(--color-white,#fff)}:is(.tooltip.left-top[data-v-d7f78e8b],.tooltip.left-bottom[data-v-d7f78e8b],.tooltip.left-center[data-v-d7f78e8b],.tooltip.left[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-left-color:#000}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-child-alt,#fff)}.tooltip.left-top[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*3);right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-bottom[data-v-d7f78e8b]:before{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*3);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-center[data-v-d7f78e8b]:before,.tooltip.left[data-v-d7f78e8b]:before{top:50%;right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.right-top[data-v-d7f78e8b],.tooltip.right-bottom[data-v-d7f78e8b],.tooltip.right-center[data-v-d7f78e8b],.tooltip.right[data-v-d7f78e8b]{margin-left:calc(var(--spacing,.25rem)*2)}:is(.tooltip.right-top[data-v-d7f78e8b],.tooltip.right-bottom[data-v-d7f78e8b],.tooltip.right-center[data-v-d7f78e8b],.tooltip.right[data-v-d7f78e8b]):before{content:var(--tw-content);border-right-color:var(--color-white,#fff)}:is(.tooltip.right-top[data-v-d7f78e8b],.tooltip.right-bottom[data-v-d7f78e8b],.tooltip.right-center[data-v-d7f78e8b],.tooltip.right[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-right-color:#000}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-child-alt,#fff)}.tooltip.right-top[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-bottom[data-v-d7f78e8b]:before{bottom:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-center[data-v-d7f78e8b]:before,.tooltip.right[data-v-d7f78e8b]:before{top:50%;left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.inverted[data-v-d7f78e8b]{background-color:var(--color-black,#000);color:var(--color-white,#fff)}.tooltip.inverted[data-v-d7f78e8b]:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.input-container[data-v-790b73c6]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-790b73c6]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-790b73c6]{stroke:var(--color-error-tertiary)}.input-container.has-error .icon.has-error[data-v-790b73c6]{fill:var(--color-error-tertiary);stroke:#fff}.container-inner[data-v-790b73c6]{width:100%;position:relative}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended)[data-v-790b73c6]{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;z-index:20}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .icon[data-v-790b73c6]{height:1.25rem;width:1.25rem}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .text[data-v-790b73c6]{color:var(--color-input-inline);font-size:.875rem;line-height:1.25rem}.container-inner .inline-container-prepended[data-v-790b73c6]{left:1rem}.container-inner .inline-container-appended[data-v-790b73c6]{right:1rem}.input-label[data-v-790b73c6]{font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:flex}.input-label .label-text[data-v-790b73c6]{display:flex;gap:.5625rem;align-items:center}.input-label .label-text .info-icon[data-v-790b73c6]{width:.875rem;height:.875rem}.input-label .optional[data-v-790b73c6]{color:#6b7280;font-weight:400;margin-left:auto;padding-left:.25rem}.dark :is(.input-label .optional)[data-v-790b73c6]{color:#e5e7eb}.dark .input[data-v-790b73c6]{color-scheme:dark}.input[data-v-790b73c6]{background-color:var(--color-input-bg);width:100%;height:2.5rem;border:1px solid var(--color-input-border);border-radius:.5rem;padding:0 1rem;font-size:.875rem;line-height:1.25rem;color:var(--color-slate-900);box-sizing:border-box;outline:none;transition:border .2s}.input[data-v-790b73c6]::placeholder{color:var(--color-neutral-400)}.input[data-v-790b73c6]:hover{border-color:var(--color-border-primary-hover)}.input[data-v-790b73c6]:focus{border-color:var(--color-primary-light);border-width:2px;padding-left:15px}.input.has-icon-prepended[data-v-790b73c6]{padding-left:2.5rem}.input.has-icon-prepended[data-v-790b73c6]:focus{padding-left:2.4375rem}.input.has-inline-text[data-v-790b73c6]{padding-right:2.5rem}.input.has-error[data-v-790b73c6]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)!important}.input.has-error[data-v-790b73c6]::placeholder{color:var(--color-error-primary)}.input.is-valid[data-v-790b73c6]{border-color:var(--color-success-tertiary);color:var(--color-success-primary)}.input.is-valid[data-v-790b73c6]::placeholder{color:var(--color-success-primary)}.input:disabled[data-v-790b73c6]{background-color:var(--color-disabled);color:var(--color-disabled-text)!important;border-color:var(--color-input-disabled-border)}.input:disabled[data-v-790b73c6]::placeholder{color:var(--color-disabled-text)}.input.medium[data-v-790b73c6]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-790b73c6]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-790b73c6]{height:3.5rem;font-size:1rem;line-height:1.5rem}.dark .input[data-v-790b73c6]{color:var(--color-body-text)}.error[data-v-790b73c6]{color:var(--color-error-secondary);font-size:.875rem;line-height:1.25rem;margin-top:.5rem}.input-container[data-v-19316412] .container-inner .inline-container-appended{margin-right:calc(var(--spacing,.25rem)*6)}.input-container[data-v-19316412] .container-inner .inline-container-appended .button{background-color:#0000}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-be635536],[data-v-be635536]:before,[data-v-be635536]:after,[data-v-be635536]::backdrop{--tw-border-style:solid}}}.table-selection[data-v-be635536]{margin-top:calc(var(--spacing,.25rem)*1);align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);width:100%;padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*2);display:flex}.table-selection[data-v-be635536]:where(.dark,.dark *){border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff)}.table-selection .amount[data-v-be635536]{margin-right:auto}.table-selection .actions[data-v-be635536]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@media(min-width:48rem){.table-selection .actions[data-v-be635536]{flex-direction:row}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-460d853e],[data-v-460d853e]:before,[data-v-460d853e]:after,[data-v-460d853e]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial}}}.list[data-v-460d853e]{width:calc(var(--spacing,.25rem)*64);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);padding-top:calc(var(--spacing,.25rem)*4);padding-bottom:calc(var(--spacing,.25rem)*2.5);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow:hidden}.list .list-inner[data-v-460d853e]{gap:calc(var(--spacing,.25rem)*1.5);flex-direction:column;max-height:33.625rem;display:flex;overflow:auto}.list .active-columns[data-v-460d853e],.list .available-columns[data-v-460d853e]{padding-inline:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}:is(.list .active-columns,.list .available-columns) .title[data-v-460d853e]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0));-webkit-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .title[data-v-460d853e]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.list .active-columns,.list .available-columns) .column[data-v-460d853e]{height:calc(var(--spacing,.25rem)*8);flex-direction:row;align-items:center;display:flex}:is(.list .active-columns,.list .available-columns) .column .checkbox-container[data-v-460d853e]{width:fit-content;padding-right:calc(var(--spacing,.25rem)*2)}:is(.list .active-columns,.list .available-columns) .column .label[data-v-460d853e]{text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));-webkit-user-select:none;user-select:none;overflow:hidden}:is(.list .active-columns,.list .available-columns) .column .label[data-v-460d853e]:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.list .active-columns,.list .available-columns) .column .drag-handle[data-v-460d853e]{cursor:grab;padding-left:calc(var(--spacing,.25rem)*2);margin-left:auto}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-460d853e]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-460d853e]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.list .active-columns .title[data-v-460d853e]{padding-bottom:calc(var(--spacing,.25rem)*1.5)}.list .active-columns .column.dragging[data-v-460d853e]{visibility:hidden}.list .available-columns .title[data-v-460d853e]{padding-block:calc(var(--spacing,.25rem)*1.5)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-46c41877],[data-v-46c41877]:before,[data-v-46c41877]:after,[data-v-46c41877]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-46c41877]{top:var(--aadc3322);display:table-header-group}.table-head .select-column[data-v-46c41877],.table-head .action-column[data-v-46c41877]{z-index:2}.table-head .header[data-v-46c41877]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media(hover:hover){.table-head .header[data-v-46c41877]:hover{cursor:pointer}}.table-head .header.active[data-v-46c41877]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-46c41877]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-46c41877],.table-head .header .sort-icon.right[data-v-46c41877]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-46c41877]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-46c41877]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-46c41877],.table-head .header .sort-icon.active[data-v-46c41877]{display:block}.table-head[data-v-46c41877] .column-configurator{margin-left:auto}.table-head .filters[data-v-46c41877]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-46c41877]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-46c41877]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-46c41877]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-46c41877]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-46c41877],.action-column[data-v-46c41877]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-46c41877]:after,.action-column.overlap[data-v-46c41877]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-46c41877]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.select-column.overlap[data-v-46c41877]:after{--tw-gradient-position:to right in oklab}}.select-column.overlap[data-v-46c41877]:after{background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-46c41877]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left}@supports (background-image:linear-gradient(in lab,red,red)){.action-column.overlap[data-v-46c41877]:before{--tw-gradient-position:to left in oklab}}.action-column.overlap[data-v-46c41877]:before{background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-46c41877]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-46c41877]{cursor:pointer}tbody tr.clickable[data-v-46c41877]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20% 80%,#fff 95%)}tbody tr.clickable[data-v-46c41877]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20% 80%,#0f172a 95%)}tbody tr.selected[data-v-46c41877]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20% 80%,#fff 95%)}tbody tr.selected[data-v-46c41877]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20% 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-46c41877],tbody tr.selectable td[data-v-46c41877]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-46c41877],tbody tr:not(.selectable) td[data-v-46c41877]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.table-footer[data-v-46c41877]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*1);flex-wrap:wrap;justify-content:space-between;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-46c41877]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .current-page-info[data-v-46c41877]{align-items:center;row-gap:calc(var(--spacing,.25rem)*2);color:var(--color-neutral-950,oklch(14.5% 0 0));flex-wrap:wrap;flex-grow:1;display:flex}.table-footer .current-page-info[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .current-page-info .total-results[data-v-46c41877]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-footer .current-page-info .total-results span[data-v-46c41877]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.table-footer .current-page-info .page-selector[data-v-46c41877]{flex-wrap:wrap;flex-grow:1;align-items:center;display:none}@media(min-width:48rem){.table-footer .current-page-info .page-selector[data-v-46c41877]{display:flex}}.table-footer .current-page-info .page-selector[data-v-46c41877] .base-select{width:100%;max-width:calc(var(--spacing,.25rem)*24)}.table-footer .current-page-info .page-selector .per-page[data-v-46c41877]{margin-left:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.table-footer .current-page-info .page-selector .per-page[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.table-footer .pagination[data-v-46c41877]{padding-block:calc(var(--spacing,.25rem)*4);margin-left:auto}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5b94dd63],[data-v-5b94dd63]:before,[data-v-5b94dd63]:after,[data-v-5b94dd63]::backdrop{--tw-font-weight:initial;--tw-border-style:solid;--tw-duration:initial;--tw-ease:initial}}}.summary-group[data-v-5b94dd63]{padding-block:calc(var(--spacing,.25rem)*2)}.summary-group .header[data-v-5b94dd63]{justify-content:space-between;align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.summary-group .header.expandable[data-v-5b94dd63]{cursor:pointer}.summary-group .header .name[data-v-5b94dd63]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-group .header[data-v-5b94dd63] .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.summary-group .items[data-v-5b94dd63]{gap:calc(var(--spacing,.25rem)*2);border-left-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);padding-left:calc(var(--spacing,.25rem)*4);border-left-width:4px;flex-direction:column;animation:.3s fadeIn-5b94dd63;display:flex}.grow-enter-active[data-v-5b94dd63],.grow-leave-active[data-v-5b94dd63]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:.3s;transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1))}.grow-enter-from[data-v-5b94dd63],.grow-leave-to[data-v-5b94dd63]{height:calc(var(--spacing,.25rem)*0)!important;padding-block:calc(var(--spacing,.25rem)*0)!important;opacity:0!important}@keyframes fadeIn-5b94dd63{0%{opacity:0}to{opacity:1}}.summary-item[data-v-e9ecb151]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-item a[href][data-v-e9ecb151]:hover{text-decoration-line:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3468d776],[data-v-3468d776]:before,[data-v-3468d776]:after,[data-v-3468d776]::backdrop{--tw-font-weight:initial}}}.badge[data-v-3468d776]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-white,#fff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.badge.small[data-v-3468d776]{height:calc(var(--spacing,.25rem)*2);width:calc(var(--spacing,.25rem)*2)}.badge.small.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-.5);right:calc(var(--spacing,.25rem)*-.5)}.badge.blue[data-v-3468d776]{background-color:var(--color-blue-600,oklch(54.6% .245 262.881))}.badge.blue .pulse[data-v-3468d776]{background-color:var(--color-blue-400,oklch(70.7% .165 254.624))}.badge.green[data-v-3468d776]{background-color:var(--color-green-700,oklch(52.7% .154 150.069))}.badge.green .pulse[data-v-3468d776]{background-color:var(--color-green-400,oklch(79.2% .209 151.711))}.badge.gray[data-v-3468d776]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.badge.gray .pulse[data-v-3468d776]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.badge.orange[data-v-3468d776]{background-color:var(--color-orange-700,oklch(55.3% .195 38.402))}.badge.orange .pulse[data-v-3468d776]{background-color:var(--color-orange-400,oklch(75% .183 55.934))}.badge.purple[data-v-3468d776]{background-color:var(--color-purple-600,oklch(55.8% .288 302.321))}.badge.purple .pulse[data-v-3468d776]{background-color:var(--color-purple-400,oklch(71.4% .203 305.504))}.badge.red[data-v-3468d776]{background-color:var(--color-red-600,oklch(57.7% .245 27.325))}.badge.red .pulse[data-v-3468d776]{background-color:var(--color-red-400,oklch(70.4% .191 22.216))}.badge.yellow[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936));color:var(--color-gray-900,oklch(21% .034 264.665))}.badge.yellow .pulse[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936))}.badge.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-2);right:calc(var(--spacing,.25rem)*-3);position:absolute}.badge.pulsating .pulse[data-v-3468d776]{width:100%;height:100%;animation:var(--animate-ping,ping-3468d776 1s cubic-bezier(0,0,.2,1)infinite);opacity:.75;border-radius:3.40282e38px;position:absolute}.badge.pulsating .content[data-v-3468d776]{z-index:1}@keyframes ping-3468d776{75%,to{opacity:0;transform:scale(2)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-307971fb],[data-v-307971fb]:before,[data-v-307971fb]:after,[data-v-307971fb]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-content:"";--tw-border-style:solid;--tw-font-weight:initial}}}.menu-item[data-v-307971fb]{background-color:inherit;height:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));position:relative}.menu-item.title[data-v-307971fb]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.menu-item.title[data-v-307971fb]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu-item.simple[data-v-307971fb]{color:var(--color-primary,#2563eb)}.menu-item.simple[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.menu-item.simple[data-v-307971fb]:hover{text-decoration-line:underline}.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-6);width:calc(var(--spacing,.25rem)*6);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-content:"|";content:var(--tw-content);justify-content:center;align-items:center;display:flex;position:absolute;top:50%}@media(min-width:48rem){.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-12);width:calc(var(--spacing,.25rem)*12)}}.menu-item.disabled[data-v-307971fb],.menu-item[disabled][data-v-307971fb]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#606369)}.menu-item .menu-item-content[data-v-307971fb]{align-items:center;column-gap:calc(var(--spacing,.25rem)*3);height:100%;color:var(--b87525ea);display:flex}.menu-item .menu-item-content .mini-icon[data-v-307971fb]{color:var(--b87525ea)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb],.menu-item .menu-item-content .append-icon[data-v-307971fb],.menu-item .menu-item-content .count[data-v-307971fb],.menu-item .menu-item-content .hotkey[data-v-307971fb]{margin-left:auto}.menu-item .menu-item-content .count[data-v-307971fb]{border-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-width:1px;border-radius:3.40282e38px}.menu-item .menu-item-content .count[data-v-307971fb]:where(.dark,.dark *){border-color:var(--color-neutral-400,oklch(70.8% 0 0))}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);color:var(--color-primary,#2563eb);margin-left:auto}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-85c41b4e],[data-v-85c41b4e]:before,[data-v-85c41b4e]:after,[data-v-85c41b4e]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.menu[data-v-85c41b4e]{align-items:center;display:flex}.menu[data-v-85c41b4e]:not(.vertical):not(.simple){gap:calc(var(--spacing,.25rem)*6);height:100%}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item{border-bottom-style:var(--tw-border-style);color:var(--color-gray-500,oklch(55.1% .027 264.364));background-color:#0000;border-color:#0000;border-bottom-width:.1875rem}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item:not(.current):hover,.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item:not(.current):focus){border-color:var(--color-border-primary-hover,#9ca3af)}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item .menu-item-content{--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .current{border-color:var(--color-primary,#2563eb)}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .current:where(.dark,.dark *){border-color:var(--color-blue-400,oklch(70.7% .165 254.624));color:var(--color-blue-400,oklch(70.7% .165 254.624))!important}.menu.vertical[data-v-85c41b4e]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*1);background-color:inherit;flex-direction:column}.menu.vertical .item-vertical[data-v-85c41b4e]{border-radius:var(--radius-lg,.5rem);--tw-border-style:none;width:100%;padding:calc(var(--spacing,.25rem)*2);border-style:none}.menu.vertical .item-vertical[data-v-85c41b4e]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):hover{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):focus{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):focus:where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.menu.vertical[data-v-85c41b4e] .divider{margin-block:.3125rem}.menu.vertical .current[data-v-85c41b4e]{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .current[data-v-85c41b4e]:where(.dark,.dark *){background-color:var(--color-tertiary,#eff6ff)}.menu.simple[data-v-85c41b4e]{justify-content:center;gap:calc(var(--spacing,.25rem)*6);flex-wrap:wrap}@media(min-width:48rem){.menu.simple[data-v-85c41b4e]{gap:calc(var(--spacing,.25rem)*12)}}.menu.mini[data-v-85c41b4e] .count{display:none}.menu[data-v-85c41b4e] .current{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)!important}.menu[data-v-85c41b4e] .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}.menu[data-v-85c41b4e] .current .icon{color:var(--color-primary,#2563eb)}.sub-menu[data-v-85c41b4e]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);width:16.5rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cb39cec3],[data-v-cb39cec3]:before,[data-v-cb39cec3]:after,[data-v-cb39cec3]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.dropdown[data-v-cb39cec3]{position:relative}.dropdown .menu[data-v-cb39cec3]{border-radius:var(--radius-md,.375rem);background-color:var(--color-child,#fff);padding:calc(var(--spacing,.25rem)*1);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-7013d362],[data-v-7013d362]:before,[data-v-7013d362]:after,[data-v-7013d362]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.action-button[data-v-7013d362]{margin:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14);cursor:pointer;--tw-border-style:none;background-color:var(--color-primary,#2563eb);padding:calc(var(--spacing,.25rem)*0);--tw-outline-style:none;border-style:none;border-radius:3.40282e38px;outline-style:none;justify-content:center;align-items:center;display:inline-flex;position:relative}@media(forced-colors:active){.action-button[data-v-7013d362]{outline-offset:2px;outline:2px solid #0000}}.action-button[data-v-7013d362]{-webkit-user-select:none;user-select:none}@media(hover:hover){.action-button[data-v-7013d362]:hover{background-color:var(--color-primary-hover,#1d4ed8)}}.action-button[data-v-7013d362]:focus{background-color:var(--color-primary-light,#3b82f6)}.action-button[data-v-7013d362]:active{background-color:var(--color-primary-pressed,#1e40af)}.action-button[disabled][data-v-7013d362]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6)}.action-button[disabled] .icon[data-v-7013d362]{color:var(--color-disabled-text,#606369)}.action-button.floating[data-v-7013d362]{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);z-index:50;margin-right:calc(var(--spacing,.25rem)*6);margin-bottom:calc(var(--spacing,.25rem)*6);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:fixed}.action-button .icon[data-v-7013d362]{color:var(--color-white,#fff)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-2e571008],[data-v-2e571008]:before,[data-v-2e571008]:after,[data-v-2e571008]::backdrop{--tw-font-weight:initial}}}.copy-button[data-v-2e571008]{align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-tertiary,#eff6ff);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);flex-direction:row;display:inline-flex}@media(hover:hover){.copy-button[data-v-2e571008]:hover{background-color:var(--color-tertiary-hover,#dbeafe)}}.copy-button[data-v-2e571008]:active{background-color:var(--color-tertiary-pressed,#bfdbfe)}.copy-button .micro-icon[data-v-2e571008] svg{stroke-width:2px}.check-icon[data-v-2e571008]{color:var(--color-green-600,oklch(62.7% .194 149.214))}.copy-icon-button[data-v-2e571008]{width:fit-content;border-radius:var(--radius-lg,.5rem)!important}.copy-icon-button.small[data-v-2e571008]{height:calc(var(--spacing,.25rem)*8);padding-inline:calc(var(--spacing,.25rem)*2)}.copy-icon-button.small .micro-icon[data-v-2e571008] svg{stroke-width:2px}.copy-icon-button.medium[data-v-2e571008]{height:calc(var(--spacing,.25rem)*10);padding-inline:calc(var(--spacing,.25rem)*2.5)}.copy-icon-button.medium .mini-icon[data-v-2e571008]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.copy-icon-button.large[data-v-2e571008]{height:calc(var(--spacing,.25rem)*12);padding-inline:calc(var(--spacing,.25rem)*3)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-92b3affe],[data-v-92b3affe]:before,[data-v-92b3affe]:after,[data-v-92b3affe]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.active[data-v-92b3affe]:not(.button-segment) .mini-icon:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment[data-v-92b3affe]{z-index:10;overflow-wrap:break-word}@media screen and (max-width:640px){.segment[data-v-92b3affe]{word-break:break-all}}.segment:not(.button-segment).active[data-v-92b3affe]{color:var(--color-primary,#2563eb)}.segment:not(.button-segment).active[data-v-92b3affe]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment.button-segment[data-v-92b3affe]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}.segment.button-segment.active[data-v-92b3affe]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb);padding-inline:.6875rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1bf35dd7],[data-v-1bf35dd7]:before,[data-v-1bf35dd7]:after,[data-v-1bf35dd7]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}.segmented-control.default[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-100,oklch(97% 0 0));padding:calc(var(--spacing,.25rem)*1);grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;display:grid;position:relative}.segmented-control.default[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.segmented-control.default .highlight[data-v-1bf35dd7]{pointer-events:none;inset-inline-start:calc(var(--spacing,.25rem)*1);top:calc(var(--spacing,.25rem)*1);bottom:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);--tw-duration:.2s;transition-duration:.2s;position:absolute;margin-inline-start:calc(var(--spacing,.25rem)*0)!important}.segmented-control.default .highlight[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.segmented-control.buttons[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:row;display:flex}.switch[data-v-08900835]{background-color:var(--color-neutral-200);position:relative;display:inline-flex;height:1.5rem;width:2.75rem;flex-shrink:0;cursor:pointer;border-radius:9999px;border:2px solid transparent;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;outline:none}.switch[data-v-08900835]:focus{box-shadow:#0000 0 0,#0000 0 0,#fff 0 0 0 2px,#2563eb 0 0 0 4px,#0000 0 0}.switch.enabled[data-v-08900835]{background-color:var(--color-primary-light)!important}.switch:disabled[data-v-08900835]{filter:grayscale(1);cursor:not-allowed}.switch:disabled .dot[data-v-08900835]{background-color:var(--color-neutral-400)!important}.switch .dot[data-v-08900835]{pointer-events:none;display:inline-block;height:1.25rem;width:1.25rem;transform:translate(0);border-radius:9999px;background-color:var(--color-white);box-shadow:0 1px 3px #0000001a;transition:transform .2s ease-in-out,background-color .2s ease-in-out}.switch .dot.enabled[data-v-08900835]{transform:translate(1.25rem)}.dark .switch[data-v-08900835]{background-color:var(--color-input-bg)}.dark .switch .dot[data-v-08900835]{background-color:var(--color-neutral-100)}.theme-toggle[data-v-88cb7ead]{align-items:center;gap:calc(var(--spacing,.25rem)*2);display:flex}.accordion-item[data-v-3fc5173a]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media(min-width:640px){.accordion-item[data-v-3fc5173a]{border-radius:1rem}}.accordion-item .header[data-v-3fc5173a]{width:100%;display:flex;align-items:center;padding:1rem;background-color:inherit;border:none}.accordion-item .header[data-v-3fc5173a]:focus{background-color:var(--color-secondary-hover)}@media(min-width:640px){.accordion-item .header[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.accordion-item .header .state-indicator[data-v-3fc5173a]{margin-left:auto;padding-left:.5rem}.accordion-item .header .state-indicator .icon[data-v-3fc5173a]{color:var(--color-primary-light);transform:rotate(0);transition:transform .3s linear}.accordion-item .header .state-indicator.open[data-v-3fc5173a]{transform:rotate(180deg);padding-left:0;padding-right:.5rem}.accordion-item .header .title[data-v-3fc5173a],.accordion-item .header .title[data-v-3fc5173a-s]{text-align:left;font-weight:500;color:var(--color-body-text)}.accordion-item .content[data-v-3fc5173a]{padding-bottom:1.5rem;padding-top:0;padding-left:1rem;padding-right:1rem}@media(min-width:640px){.accordion-item .content[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem}}.grow-enter-active[data-v-3fc5173a],.grow-leave-active[data-v-3fc5173a]{transition:all .3s ease-in-out}.fade-enter-active[data-v-3fc5173a],.fade-leave-active[data-v-3fc5173a]{transition:all .1s ease-in-out}.grow-enter-from[data-v-3fc5173a],.grow-leave-to[data-v-3fc5173a]{height:0!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-3fc5173a],.fade-leave-to[data-v-3fc5173a]{opacity:0;height:0!important}.accordion[data-v-25a8f65e]{display:flex;flex-direction:column;gap:.125rem}@media(min-width:640px){.accordion[data-v-25a8f65e]{gap:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ee49f574],[data-v-ee49f574]:before,[data-v-ee49f574]:after,[data-v-ee49f574]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.amount-input-container[data-v-ee49f574]{flex-direction:column;display:flex}.amount-input[data-v-ee49f574]{height:calc(var(--spacing,.25rem)*10);color:var(--color-body-text,#111827);display:flex}.amount-input.small[data-v-ee49f574]{height:calc(var(--spacing,.25rem)*8)}.amount-input.small .minus[data-v-ee49f574],.amount-input.small .plus[data-v-ee49f574]{width:calc(var(--spacing,.25rem)*8)}.input[data-v-ee49f574],.minus[data-v-ee49f574],.plus[data-v-ee49f574]{border-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-width:1px;border-color:var(--color-border-primary,#d1d5db)}.input[data-v-ee49f574]:disabled,.minus[data-v-ee49f574]:disabled,.plus[data-v-ee49f574]:disabled{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.input[data-v-ee49f574]:disabled{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.minus[data-v-ee49f574]:disabled,.plus[data-v-ee49f574]:disabled{color:var(--color-disabled-text,#606369)}.minus[data-v-ee49f574]:hover:not(:disabled),.plus[data-v-ee49f574]:hover:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-hover,#fafafa)}.minus[data-v-ee49f574]:focus:not(:disabled),.plus[data-v-ee49f574]:focus:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-pressed,#e5e5e5)}.input[data-v-ee49f574]{z-index:10;width:calc(var(--spacing,.25rem)*14);background-color:var(--color-input-bg,#fff);text-align:center;--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-inline:-1px}.input[data-v-ee49f574]:hover:not(:disabled):not(.has-error){border-color:var(--color-border-primary-hover,#9ca3af)}.input[data-v-ee49f574]:focus:not(:disabled){border-style:var(--tw-border-style);--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-width:2px}.input[data-v-ee49f574]:focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.input[data-v-ee49f574]:focus-visible{outline-offset:2px;outline:2px solid #0000}}.input[data-v-ee49f574]:focus:not(:disabled):not(.has-error){border-color:var(--color-primary-light,#3b82f6)}.input.has-error[data-v-ee49f574],.input.has-error[data-v-ee49f574]:focus{border-color:var(--color-error-tertiary,#e73c3e)}.minus[data-v-ee49f574],.plus[data-v-ee49f574]{width:calc(var(--spacing,.25rem)*10);background-color:var(--color-input-bg,#fff);justify-content:center;align-items:center;display:flex}.minus[data-v-ee49f574]{border-top-left-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.plus[data-v-ee49f574]{border-top-right-radius:var(--radius-lg,.5rem);border-bottom-right-radius:var(--radius-lg,.5rem)}.input[data-v-ee49f574]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input[data-v-ee49f574]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-ee49f574]{-moz-appearance:textfield}.error[data-v-ee49f574]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.status[data-v-c0e73fbd]{background-color:var(--color-gray-100);height:1.5rem;width:1.5rem;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.dark .status[data-v-c0e73fbd]{background-color:var(--color-input-bg)}.status.done[data-v-c0e73fbd]{background-color:var(--color-green-100)}.dark .status.done[data-v-c0e73fbd]{background-color:var(--color-green-600)}.done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-600)}.dark .done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-100)}.status.attention[data-v-c0e73fbd]{background-color:var(--color-red-100)}.dark .status.attention[data-v-c0e73fbd]{background-color:var(--color-error-accent)}.attention .micro-icon[data-v-c0e73fbd]{color:var(--color-error-secondary)}.dark .attention .micro-icon[data-v-c0e73fbd]{color:var(--color-red-100)}.alert[data-v-e623b23f]{padding:1rem;border-radius:.5rem;display:flex}.alert.error[data-v-e623b23f]{background-color:var(--color-error-accent)}.alert.error .icon .mini-icon[data-v-e623b23f]{color:var(--color-error-tertiary)}.alert.error .content .title[data-v-e623b23f]{color:var(--color-error-primary)}.alert.error .content .description[data-v-e623b23f]{color:var(--color-error-secondary)}.alert.warning[data-v-e623b23f]{background-color:var(--color-warning-accent)}.alert.warning .icon .mini-icon[data-v-e623b23f]{color:var(--color-warning-tertiary)}.alert.warning .content .title[data-v-e623b23f]{color:var(--color-warning-primary)}.alert.warning .content .description[data-v-e623b23f]{color:var(--color-warning-secondary)}.alert.success[data-v-e623b23f]{background-color:var(--color-success-accent)}.alert.success .icon .mini-icon[data-v-e623b23f]{color:var(--color-success-tertiary)}.alert.success .content .title[data-v-e623b23f]{color:var(--color-success-primary)}.alert.success .content .description[data-v-e623b23f]{color:var(--color-success-secondary)}.alert.info[data-v-e623b23f]{background-color:var(--color-info-accent)}.alert.info .icon .mini-icon[data-v-e623b23f]{color:var(--color-info-tertiary)}.alert.info .content .title[data-v-e623b23f]{color:var(--color-info-primary)}.alert.info .content .description[data-v-e623b23f]{color:var(--color-info-secondary)}.alert .icon[data-v-e623b23f]{margin-right:.75rem}.alert .content[data-v-e623b23f]{display:flex;flex-direction:column;font-size:.875rem;line-height:1.25rem;justify-content:center;gap:.25rem}.alert .content .title[data-v-e623b23f]{font-weight:500}.configurator-step.simple[data-v-0d0687c5]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media(min-width:640px){.configurator-step.simple[data-v-0d0687c5]{border-radius:1rem}}.configurator-step.simple .content[data-v-0d0687c5]{padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0}@media(min-width:640px){.configurator-step.simple .content[data-v-0d0687c5]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header[data-v-0d0687c5]{display:flex;flex-wrap:wrap;width:100%;row-gap:1rem;align-items:flex-start;padding:1rem;background-color:inherit;border:none}@media(min-width:640px){.configurator-step.simple .header[data-v-0d0687c5]{align-items:center;padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.configurator-step.simple .header .title[data-v-0d0687c5]{text-align:left;font-weight:500;color:var(--color-body-text)}@media(min-width:640px){.configurator-step.simple .header .title[data-v-0d0687c5]{white-space:nowrap}}.configurator-step.simple .inner[data-v-0d0687c5]{display:flex;flex-direction:column;row-gap:1rem}@media(min-width:640px){.configurator-step.simple .inner[data-v-0d0687c5]{flex-direction:row;align-items:center}}.configurator-step.simple .measurements-form[data-v-0d0687c5]{gap:1rem;display:flex;flex-direction:column}.configurator-step.simple .measurements-form .submit-button[data-v-0d0687c5]{width:100%}.configurator-step.simple .measurement-inputs[data-v-0d0687c5]{display:flex;gap:.625rem;align-items:center}.configurator-step.simple .measurement-inputs.has-errors[data-v-0d0687c5]{align-items:flex-start!important}.configurator-step.simple .measurement-inputs.has-errors .separator[data-v-0d0687c5]{margin-top:.5rem}.configurator-step.simple .total[data-v-0d0687c5]{margin-left:auto;flex-grow:1;color:var(--color-gray-500);text-align:right}.dark :is(.configurator-step.simple .total)[data-v-0d0687c5]{color:var(--color-neutral-200)}.configurator-step.simple .status-text[data-v-0d0687c5]{color:var(--color-gray-400);width:100%;text-align:right}@media(min-width:640px){.configurator-step.simple .status-text[data-v-0d0687c5]{text-align:left}}.dark :is(.configurator-step.simple .status-text)[data-v-0d0687c5]{color:var(--color-neutral-200)}.configurator-step.simple [data-v-0d0687c5] .input::-webkit-outer-spin-button,.configurator-step.simple [data-v-0d0687c5] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple [data-v-0d0687c5] .input[type=number]{-moz-appearance:textfield}.measurement-inputs[data-v-0d0687c5] .measurement-input{max-width:7rem;width:100%}.labels[data-v-1a9d11c5]{position:absolute;top:.75rem;right:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end;z-index:10}.dark .labels[data-v-1a9d11c5]{mix-blend-mode:exclusion}[data-v-1a9d11c5] .image{object-fit:cover;height:100%;width:100%}.amount[data-v-1a9d11c5]{display:flex;flex-direction:column;align-items:center;gap:.5rem;margin-top:2.75rem}.amount span[data-v-1a9d11c5]{font-size:.875rem;line-height:1.25rem}.information[data-v-fa946bbf],.custom-value[data-v-fa946bbf]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;line-height:1rem}.custom-value[data-v-fa946bbf]{gap:1rem}.custom-value[data-v-fa946bbf] .input-container,.custom-value[data-v-fa946bbf] .button{max-width:7.25rem;width:100%}.information .delivery[data-v-fa946bbf]{color:var(--color-green-700);display:flex;gap:.25rem;align-items:center}.dark .information .delivery[data-v-fa946bbf],.dark .information .delivery .icon[data-v-fa946bbf]{color:var(--color-green-400)}.information .delivery .icon[data-v-fa946bbf]{height:1rem;width:1rem;color:var(--color-green-700)}.information .delivery .icon[data-v-fa946bbf] svg{stroke-width:2}.information .delivery .delivery-time[data-v-fa946bbf]{font-weight:500}.information .price[data-v-fa946bbf]{color:var(--color-red-600);margin-left:auto}.dark .information .price[data-v-fa946bbf]{color:var(--color-red-300)}.price .price-per[data-v-fa946bbf]{color:var(--color-gray-500)}.dark .price .price-per[data-v-fa946bbf]{color:var(--color-body-text)}.not-available[data-v-fa946bbf]{color:var(--color-error-secondary);display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem}.dark .not-available[data-v-fa946bbf]{color:var(--color-error-tertiary)}.option-card[data-v-56b71e2f]{outline:1px solid var(--color-gray-300);border-radius:.5rem;width:17.5rem;cursor:pointer;background-color:var(--color-child-alt);min-height:16.5rem;display:flex;justify-content:center;overflow:hidden}.option-card[data-v-56b71e2f]:hover,.option-card[data-v-56b71e2f]:focus{box-shadow:var(--shadow)}.option-card[data-v-56b71e2f]:focus:not(.selected):not(.disabled){outline:3px dotted var(--color-blue-500)}.option-card.selected[data-v-56b71e2f]{outline:3px solid var(--color-blue-600)!important}.option-card.disabled[data-v-56b71e2f]{border-color:var(--color-gray-300);background-color:var(--color-disabled);cursor:default}.option-card.disabled[data-v-56b71e2f]:hover{box-shadow:none}.option-card.disabled .content[data-v-56b71e2f] *{color:var(--color-disabled-text)!important}.option-card.disabled .header[data-v-56b71e2f],.option-card.disabled .content[data-v-56b71e2f]{filter:grayscale(100%)}.option-card .inner[data-v-56b71e2f]{width:100%}.no-option[data-v-56b71e2f]{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center}.no-option[data-v-56b71e2f] .icon{color:var(--color-gray-400);height:3.5rem;width:3.5rem;margin-bottom:1rem}.no-option h3[data-v-56b71e2f]{font-size:.875rem;line-height:1.25rem}.header[data-v-56b71e2f]{height:10.25rem;width:100%;background-color:var(--color-gray-100);position:relative;border-radius:.5rem .5rem 0 0;display:flex;justify-content:center}.option-card .content[data-v-56b71e2f]{padding:1rem 1rem .75rem}.content .title[data-v-56b71e2f]{font-weight:500;padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem}.content .description[data-v-56b71e2f]{font-size:.75rem;line-height:1rem;color:var(--color-gray-500)}.option-card .footer[data-v-56b71e2f]{padding:1rem;padding-top:0;font-size:.875rem;line-height:1.25rem}.dark .option-card[data-v-56b71e2f]{outline-color:transparent}.dark .option-card[data-v-56b71e2f]:hover{background-color:var(--color-secondary)}.dark .header[data-v-56b71e2f]{background-color:var(--color-child-alt)}.dark .content .title[data-v-56b71e2f]{color:var(--color-gray-200)}.dark .content .description[data-v-56b71e2f]{color:var(--color-gray-300)}.overlay[data-v-66d42f70]{position:absolute;z-index:10;width:100%;height:100%;inset:0;pointer-events:auto}.overlay.fixed[data-v-66d42f70]{position:fixed!important;z-index:1000}.option-step-container[data-v-d799026d]{position:relative}.configurator-step.options[data-v-d799026d] .content{padding-right:0}@media(min-width:640px){.configurator-step.options[data-v-d799026d] .content{padding-right:1.5rem}}.configurator-step.options[data-v-d799026d] .header .state-indicator{display:none}@media(min-width:640px){.configurator-step.options[data-v-d799026d] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-d799026d]{display:flex;gap:1rem;overflow-x:scroll;padding:.25rem}@media(min-width:640px){.configurator-step.options .option-container[data-v-d799026d]{overflow:visible;padding-left:0;padding-right:0}}.option-container .option[data-v-d799026d]{position:relative;display:flex;min-width:auto}@media(min-width:640px){.option-container.show-all[data-v-d799026d]{flex-wrap:wrap}.option-container .option[data-v-d799026d]{min-width:0}.option-container .option[data-v-d799026d]:last-child{margin-right:0}}.option-container .option[data-v-d799026d]:last-child{margin-right:1rem}.option.hide[data-v-d799026d]{display:flex}@media(min-width:640px){.option.hide[data-v-d799026d]{display:none}}.option .option-card[data-v-d799026d]{flex-shrink:0}@media(min-width:640px){.option .option-card[data-v-d799026d]{flex-shrink:1}}.option-container .overlay[data-v-d799026d]{position:absolute;right:0;bottom:0;width:100%;height:100%;border-radius:.5rem;display:none;align-items:center;justify-content:center;color:#fff;font-size:2.25rem;cursor:pointer}@media(min-width:640px){.option-container .overlay[data-v-d799026d]{display:flex}}.configurator-step.options .subtitle[data-v-d799026d]{color:var(--color-gry-700)}.dark .configurator-step.options .subtitle[data-v-d799026d]{color:var(--color-neutral-200)}.configurator-step.options .alert[data-v-d799026d]{margin-top:1rem;margin-right:1rem}@media(min-width:640px){.configurator-step.options .alert[data-v-d799026d]{margin-right:0}}.edit-button[data-v-d799026d]{position:absolute;top:1.25rem;right:3.125rem}.delivery-options[data-v-12d62f2c]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;padding:1rem;margin-top:.125rem}@media(min-width:640px){.delivery-options[data-v-12d62f2c]{border-radius:1rem;margin-top:.5rem}}@media(min-width:768px){.delivery-options[data-v-12d62f2c]{padding:1.5rem}}.header[data-v-12d62f2c]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-12d62f2c]{font-weight:500;color:var(--color-body-text)}.header .hint[data-v-12d62f2c]{color:#6b7280;display:none}@media(min-width:768px){.header .hint[data-v-12d62f2c]{display:flex}}.dark :is(.header .hint)[data-v-12d62f2c]{color:#e5e7eb}.content[data-v-12d62f2c]{display:flex;flex-direction:column;gap:1rem;flex-wrap:wrap}@media(min-width:768px){.content[data-v-12d62f2c]{flex-direction:row;gap:1.5rem}}.content .option[data-v-12d62f2c]{display:flex;flex-direction:column;position:relative}.content .option[data-v-12d62f2c]:not(.last){border-bottom:1px solid var(--color-gray-200);padding-bottom:1rem}@media(min-width:768px){.content .option[data-v-12d62f2c]:not(.last){border-bottom:none;padding-bottom:0}}@media(min-width:768px){.content .option[data-v-12d62f2c]:not(:first-child){border-left:1px solid var(--color-gray-200);padding-left:1.0625rem}}.content .option.hide[data-v-12d62f2c]{display:none}.content .option .day[data-v-12d62f2c],.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{font-size:.875rem;line-height:1.25rem}.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:absolute;top:0;right:0}@media(min-width:768px){.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:relative}}.content .option .day[data-v-12d62f2c]{margin-bottom:.25rem;color:var(--color-gray-700);text-transform:capitalize;display:flex;flex-wrap:wrap;gap:.25rem .5rem;align-items:center}.dark :is(.content .option .day)[data-v-12d62f2c]{color:#e5e7eb}.content .option .date[data-v-12d62f2c]{font-weight:500;font-size:1.25rem;line-height:1.75rem;color:var(--color-body-text)}@media(min-width:768px){.content .option .date[data-v-12d62f2c]{margin-bottom:.75rem}}.content .option .cost[data-v-12d62f2c]{color:var(--color-green-700)}.dark :is(.content .option .cost)[data-v-12d62f2c]{color:var(--color-green-500)}.content .option .no-cost[data-v-12d62f2c]{color:var(--color-gray-500)}.dark :is(.content .option .no-cost)[data-v-12d62f2c]{color:var(--color-gray-50)}.content .button[data-v-12d62f2c]{display:block}@media(min-width:768px){.content .button[data-v-12d62f2c]{display:none}}.dark .button.tertiary[data-v-12d62f2c]{background-color:var(--color-parent-bg)}.drawer[data-v-059f3a0f]{background-color:var(--color-parent-bg);position:fixed;inset:0 auto 0 0;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;transition:transform .3s cubic-bezier(.4,0,.2,1);overflow:hidden;color:var(--color-body-text);max-width:80%;width:auto;height:100vh;min-height:100vh;max-height:100vh}.drawer[data-v-059f3a0f]::backdrop{background-color:rgba(15,23,42,var(--drawer-backdrop-opacity, .5));transition:background-color .3s ease}.drawer.no-overlay[data-v-059f3a0f]{z-index:99}.drawer.no-overlay[data-v-059f3a0f]::backdrop{background-color:transparent}.drawer.full-width[data-v-059f3a0f]{width:100%;max-width:100%}.drawer.left[data-v-059f3a0f]{left:0;right:auto;transform:translate(-100%)}.drawer.left.open[data-v-059f3a0f]{transform:translate(0)}.drawer.right[data-v-059f3a0f]{left:auto;right:0;transform:translate(100%)}.drawer.right.open[data-v-059f3a0f]{transform:translate(0)}.drawer.bottom[data-v-059f3a0f]{inset:auto 0 0;width:100%;max-width:100%;min-height:auto;height:auto;max-height:min(90vh,100dvh);display:flex;flex-direction:column;border-top-left-radius:.75rem;border-top-right-radius:.75rem;transform:translateY(100%)}.drawer.bottom.open[data-v-059f3a0f]{transform:translateY(0)}.drawer.bottom .wrapper[data-v-059f3a0f]{height:auto;max-height:inherit}.drawer.bottom .header[data-v-059f3a0f],.drawer.bottom .content[data-v-059f3a0f]{padding:1rem}.drawer.bottom .content[data-v-059f3a0f]{padding-top:0;max-height:inherit;overflow-y:auto}.drawer .wrapper[data-v-059f3a0f]{position:relative;height:100%;overflow:hidden;display:flex;flex-direction:column}.drawer .header[data-v-059f3a0f]{display:flex;justify-content:space-between;align-items:center;gap:1.5rem;padding:1.25rem}.drawer .header .title[data-v-059f3a0f]{font-size:1.25rem;line-height:1.75rem}.drawer .header .close[data-v-059f3a0f]{transform:translate(.625rem)}.drawer .content[data-v-059f3a0f]{padding-left:1.25rem;padding-right:1.25rem;flex-grow:1;overflow-y:auto}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbd1bdc0],[data-v-fbd1bdc0]:before,[data-v-fbd1bdc0]:after,[data-v-fbd1bdc0]::backdrop{--tw-font-weight:initial}}}.form-row[data-v-fbd1bdc0]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex}@media(min-width:48rem){.form-row[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*21);padding-block:calc(var(--spacing,.25rem)*10);flex-direction:row}}.form-row[data-v-fbd1bdc0]:first-child{padding-top:calc(var(--spacing,.25rem)*6)}.form-row .label[data-v-fbd1bdc0]{width:100%}@media(min-width:48rem){.form-row .label[data-v-fbd1bdc0]{width:calc(var(--spacing,.25rem)*75);min-width:calc(var(--spacing,.25rem)*75)}}.form-row .label .title[data-v-fbd1bdc0]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.form-row .label .subtitle[data-v-fbd1bdc0]{margin-top:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.form-row .label .subtitle[data-v-fbd1bdc0]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.form-row .fields[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*5);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cf479711],[data-v-cf479711]:before,[data-v-cf479711]:after,[data-v-cf479711]::backdrop{--tw-divide-y-reverse:0;--tw-border-style:solid}}}.form-grid[data-v-cf479711]{width:100%}:where(.form-grid[data-v-cf479711]>:not(:last-child)){--tw-divide-y-reverse:0!important;border-bottom-style:var(--tw-border-style)!important;border-top-style:var(--tw-border-style)!important;border-top-width:calc(1px*var(--tw-divide-y-reverse))!important;border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))!important;border-color:var(--color-border-primary,#d1d5db)!important}.form-grid .actions[data-v-cf479711]{padding-block:calc(var(--spacing,.25rem)*6)}.form-grid .actions[data-v-cf479711] .fields{gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}.sub-heading[data-v-143c5965]{padding:1rem 0}.actions[data-v-143c5965]{width:100%;display:flex;justify-content:flex-end;gap:1rem;padding:1rem 0}.configurator[data-v-9ce9feaf] .configurator-step .header{overflow:hidden}.configurator[data-v-9ce9feaf] .configurator-step .header .title{width:100%;margin-right:.5rem;text-overflow:ellipsis;overflow:hidden;display:flex;align-items:center;gap:.5rem}.configurator[data-v-9ce9feaf] .configurator-step .header .title .mini-icon{color:var(--color-neutral-400)}@media(min-width:640px){.configurator[data-v-9ce9feaf] .configurator-step .header .title{max-width:16rem;width:16rem;white-space:nowrap}}.configurator[data-v-9ce9feaf] .configurator-step .status{margin-right:1rem}.configurator-step[data-v-9ce9feaf] .subtitle{margin-left:auto;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:right}.configurator-step[data-v-9ce9feaf] .edit-button{margin-left:auto}@media(min-width:640px){.configurator-step[data-v-9ce9feaf] .subtitle{margin-left:0}}.loader[data-v-9ce9feaf]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-e55e085f] .icon{color:var(--color-blue-500,oklch(62.3% .214 259.815))}@keyframes minimizedAnimation-62575656{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-62575656{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-62575656{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.dark .modal[data-v-62575656]{color:var(--color-body-text)}.modal[data-v-62575656]{width:100%;max-width:48rem;border-radius:1.5rem;overflow:hidden;transform:translateY(2.5rem);transition:all .5s ease-in-out;opacity:0;box-shadow:0 0 0 100vmax #0a0a0a80;background-color:var(--color-parent-bg);margin:auto}@media(prefers-reduced-motion){.modal[data-v-62575656]{transition:none}}.modal[data-v-62575656]::backdrop{background-color:transparent}.modal.open[data-v-62575656]{transform:translateY(0);opacity:1;display:block}.modal.minimized[data-v-62575656]{width:100%;margin-bottom:1.25rem;border:1px solid #e5e7eb;animation:minimizedAnimation-62575656 1.3s forwards}@media(prefers-reduced-motion){.modal.minimized[data-v-62575656]{animation:none}}.modal.minimized .inner[data-v-62575656]{overflow-y:hidden}.modal.minimized .inner .header[data-v-62575656]{padding:1rem;overflow-y:hidden}.modal.minimized .inner .header .title[data-v-62575656-s]{margin-top:1rem;font-size:1rem;line-height:1.5rem}.modal.maximized[data-v-62575656]{animation:maximizedAnimation-62575656 1.3s forwards}@media(prefers-reduced-motion){.modal.maximized[data-v-62575656]{animation:none}}.modal.fullscreen .inner[data-v-62575656]{height:100%;min-height:0;overflow-y:auto}.modal.fullscreen .inner .header[data-v-62575656]{padding:2rem 1rem;border-top-left-radius:1rem;border-top-right-radius:1rem;justify-content:flex-start}.modal.fullscreen .inner .content[data-v-62575656]{padding:0 0 .5rem}.modal.fullscreen .inner .footer[data-v-62575656]{margin-top:auto;box-shadow:0 10px 15px #0000001a}@media screen and (min-width:640px){.modal.fullscreen .inner .footer[data-v-62575656]{margin-inline:5.75rem;border-radius:1rem;margin-bottom:1.25rem}}.modal.fullscreen:not(.minimized)[data-v-62575656]{height:calc(100vh - 3.5rem);margin-top:3.5rem;max-width:100%;overflow:visible;border-bottom-left-radius:0;border-bottom-right-radius:0}@media screen and (min-width:640px){.modal.fullscreen:not(.minimized) .header[data-v-62575656],.modal.fullscreen:not(.minimized) .content[data-v-62575656]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen:not(.minimized)[data-v-62575656]:modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-62575656]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-62575656]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-62575656]{width:100%;background-color:#f9fafb}.modal:not(.fullscreen) .footer.footer-shadow[data-v-62575656]{filter:drop-shadow(0 -1px 2px rgba(0,0,0,.1)) drop-shadow(0 -1px 1px rgba(0,0,0,.06))}.dark :is(.modal:not(.fullscreen) .footer)[data-v-62575656]{background-color:var(--color-child)}.modal.persistent-animation[data-v-62575656]{animation:horizontal-shaking-62575656 .3s ease-in-out}.modal .actions[data-v-62575656]{position:absolute;top:-3.5rem;width:100%;height:3.5rem;display:flex;justify-content:flex-end;align-items:center;padding:0 .5625rem}.modal .actions .minimize[data-v-62575656],.modal .actions .close[data-v-62575656]{font-size:.875rem;line-height:1.25rem;padding:0 .9375rem;color:#fff}.modal .inner[data-v-62575656]{display:flex;flex-direction:column;min-height:fit-content}.modal .inner .header[data-v-62575656]{display:flex;align-items:center;background-color:var(--color-parent-bg)}.modal .inner .header.header-shadow[data-v-62575656]{filter:drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))}.modal .inner .header>.close[data-v-62575656]{margin-left:auto}.modal .inner .header>.close[data-v-62575656]:focus-visible{background-color:var(--color-secondary-hover)}.modal .inner .header .minimized-actions[data-v-62575656]{display:flex;flex-direction:column;gap:.5rem;margin-left:auto}.modal .inner .title[data-v-62575656],.modal .inner .title[data-v-62575656-s]{font-weight:700;font-size:1.25rem}.modal .inner .content[data-v-62575656]{padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem;overflow-y:auto}.modal .inner .content .loader[data-v-62575656]{margin:0 auto;width:2.5rem;height:2.5rem}.modal .inner .footer[data-v-62575656]{display:flex;gap:.5rem;justify-content:center;padding:1.5rem 1rem;z-index:10;background-color:var(--color-child)}.dark :is(.modal .inner .footer)[data-v-62575656]{background-color:var(--color-child)}[data-v-ebaf50db] .header{display:flex;flex-wrap:wrap;gap:0}@media(min-width:640px){[data-v-ebaf50db] .header{gap:1.5rem}}.header .product-image[data-v-ebaf50db]{height:auto;width:4.75rem!important}@media(min-width:640px){.header .product-image[data-v-ebaf50db]{width:8.5rem!important}}.header .product-image .image[data-v-ebaf50db]{height:4.75rem;width:4.75rem}@media(min-width:640px){.header .product-image .image[data-v-ebaf50db]{width:8.5rem!important}}.header .title[data-v-ebaf50db]{margin-bottom:.5rem}.header .subtitle[data-v-ebaf50db]{display:flex;gap:.625rem;color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem;margin-bottom:1rem}.dark :is(.header .subtitle)[data-v-ebaf50db]{color:var(--color-gray-300)}.header .subtitle .icon[data-v-ebaf50db]{color:var(--color-green-500)}.header .reference[data-v-ebaf50db]{color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem}.header .reference .value[data-v-ebaf50db]{color:var(--color-gray-900)}.header .inner[data-v-ebaf50db]{flex-shrink:1;max-width:calc(100% - 4.75rem)}@media(min-width:640px){.header .inner[data-v-ebaf50db]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-ebaf50db]{display:none;max-width:30rem}@media(min-width:640px){.header .inner .reference-input[data-v-ebaf50db]{display:flex}}.header>.reference-input[data-v-ebaf50db]{display:block;width:100%}@media(min-width:640px){.header>.reference-input[data-v-ebaf50db]{display:none}}.footer-wrapper[data-v-ebaf50db]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:.5rem;flex-wrap:wrap}.footer-wrapper .specifications[data-v-ebaf50db]{display:none}@media(min-width:640px){.footer-wrapper .specifications[data-v-ebaf50db]{display:flex;width:100%}}@media(min-width:1024px){.footer-wrapper .specifications[data-v-ebaf50db]{width:auto}}.footer-wrapper .right[data-v-ebaf50db]{display:flex;gap:1.25rem;align-items:center;justify-content:space-between;width:100%;margin-left:auto}@media(min-width:1024px){.footer-wrapper .right[data-v-ebaf50db]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-ebaf50db]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-ebaf50db]{display:none}@media(min-width:768px){.footer-wrapper .right .add-to-cart .desktop[data-v-ebaf50db]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-ebaf50db]{display:flex}@media(min-width:768px){.footer-wrapper .right .add-to-cart .mobile[data-v-ebaf50db]{display:none}}.footer-wrapper .right .sub-total[data-v-ebaf50db]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-ebaf50db]{color:var(--color-gray-500);font-size:.75rem;line-height:1.2rem!important;max-width:250px;width:100%;display:flex;gap:.5rem;flex-wrap:wrap}@media(min-width:640px){.footer-wrapper .right .sub-total .sub-price[data-v-ebaf50db]{font-size:.875rem;line-height:1.25rem}}.dark :is(.footer-wrapper .right .sub-total .sub-price)[data-v-ebaf50db]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-ebaf50db],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-ebaf50db]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-ebaf50db]{color:var(--color-gray-700);font-size:.75rem;line-height:1rem}.dark :is(.footer-wrapper .right .sub-total .excluded-from-price)[data-v-ebaf50db]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .price[data-v-ebaf50db]{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:var(--color-red-500);display:flex;width:100%}@media(min-width:1024px){.footer-wrapper .right .sub-total .price[data-v-ebaf50db]{justify-content:flex-end}}.dark :is(.footer-wrapper .right .sub-total .price)[data-v-ebaf50db]{color:var(--color-red-400)}.footer-wrapper .right .sub-total .price .label[data-v-ebaf50db]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-ebaf50db]{top:-.3em;font-size:1.3rem;position:relative}.footer-wrapper .right .sub-total .price.small[data-v-ebaf50db]{font-size:1.2rem;line-height:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-ebaf50db]{font-size:1.2rem;top:0}@media(min-width:640px){.footer-wrapper .right .sub-total .price.small[data-v-ebaf50db]{font-size:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-ebaf50db]{font-size:1.5rem;top:-.1}}.confirm-modal[data-v-6b257f82]{max-width:var(--container-lg,32rem)}.confirm-modal .indicator-icon[data-v-6b257f82]{width:fit-content;padding:calc(var(--spacing,.25rem)*3);border-radius:3.40282e38px;margin-inline:auto}.confirm-modal .indicator-icon.danger[data-v-6b257f82]{background-color:var(--color-error-accent,#fef2f2);color:var(--color-error-secondary,#d52d2f)}.confirm-modal .indicator-icon.info[data-v-6b257f82]{background-color:var(--color-info-accent,#eff6ff);color:var(--color-info-tertiary,#3b82f6)}.confirm-modal .indicator-icon .icon[data-v-6b257f82]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.confirm-modal .title[data-v-6b257f82]{margin-top:calc(var(--spacing,.25rem)*4);text-align:center;margin-bottom:calc(var(--spacing,.25rem)*3)!important}.confirm-modal .message[data-v-6b257f82]{text-align:center}.confirm-modal[data-v-6b257f82] .content{padding-inline:calc(var(--spacing,.25rem)*8)!important}.virtual-scroll-container[data-v-54b2f023]{width:100%;height:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-54b2f023]{flex-direction:column;display:flex}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-39166481],[data-v-39166481]:before,[data-v-39166481]:after,[data-v-39166481]::backdrop{--tw-outline-style:solid;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.filter-bar-container[data-v-39166481]{width:fit-content;position:relative}.filter-bar-container .filter-bar[data-v-39166481]:hover:has(.button:hover){background-color:var(--color-secondary,#fff)}.filter-bar-container .filter-bar .label-container[data-v-39166481]{margin-right:calc(var(--spacing,.25rem)*8);margin-left:.5625rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]{white-space:nowrap;outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-white,#fff);overflow:hidden}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-2)}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:last-child){max-width:calc(var(--spacing,.25rem)*10)}.filter-bar-container .filter-bar .label-container .label[data-v-39166481]{border-radius:var(--radius-lg,.5rem)}.filter-bar-container .clear[data-v-39166481]{top:50%;right:calc(var(--spacing,.25rem)*2);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);position:absolute}.filter-actions[data-v-62178ff0]{margin-top:calc(var(--spacing,.25rem)*4)}.filter-actions .button[data-v-62178ff0]{width:100%}.filter-actions .select-all[data-v-62178ff0]{margin-bottom:calc(var(--spacing,.25rem)*2)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-715af0c7],[data-v-715af0c7]:before,[data-v-715af0c7]:after,[data-v-715af0c7]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.filter-dropdown[data-v-715af0c7]{margin-top:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);min-width:16.5rem;max-height:33.625rem;padding:calc(var(--spacing,.25rem)*4);--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter-dropdown[data-v-715af0c7] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup[data-v-715af0c7] .menu{background-color:inherit!important}.filter-popup[data-v-715af0c7] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.inputs[data-v-f24e9eba]{margin-block:calc(var(--spacing,.25rem)*4)}.inputs .input-from[data-v-f24e9eba],.inputs .to[data-v-f24e9eba]{margin-bottom:calc(var(--spacing,.25rem)*2)}.inputs .to[data-v-f24e9eba]{text-align:center;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);display:block}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e5e273e7],[data-v-e5e273e7]:before,[data-v-e5e273e7]:after,[data-v-e5e273e7]::backdrop{--tw-font-weight:initial}}}.search[data-v-e5e273e7]{margin-bottom:calc(var(--spacing,.25rem)*4)}.list[data-v-e5e273e7]{max-height:21.625rem;padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));overflow:visible auto}.list .badge[data-v-e5e273e7]{margin-top:calc(var(--spacing,.25rem)*1.5)}.loader-wrapper[data-v-e5e273e7]{margin-top:calc(var(--spacing,.25rem)*-1);justify-content:center;align-items:center;width:100%;display:flex}.loader-wrapper.loading[data-v-e5e273e7]{margin-block:calc(var(--spacing,.25rem)*1)}.menu.vertical[data-v-e5e273e7]{margin-bottom:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*1)}.group-checkbox[data-v-e5e273e7] .label{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-4e34bd39],[data-v-4e34bd39]:before,[data-v-4e34bd39]:after,[data-v-4e34bd39]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.filter-group[data-v-4e34bd39]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);flex-wrap:wrap;display:flex}.filter-group .title[data-v-4e34bd39]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:calc(var(--spacing,.25rem)*10);line-height:calc(var(--spacing,.25rem)*10);text-wrap:nowrap;color:var(--color-neutral-500,oklch(55.6% 0 0));display:none}@media(min-width:48rem){.filter-group .title[data-v-4e34bd39]{display:block}}.filter-group .title[data-v-4e34bd39]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.filter-group .base-filter[data-v-4e34bd39]{text-wrap:nowrap}.filter-group .button[data-v-4e34bd39]{margin-top:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);text-wrap:nowrap;color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cc6e6a99],[data-v-cc6e6a99]:before,[data-v-cc6e6a99]:after,[data-v-cc6e6a99]::backdrop{--tw-border-style:solid}}}tfoot[data-v-cc6e6a99]{border-top-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}tfoot[data-v-cc6e6a99] tr{max-height:initial;min-height:initial}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-d8e20525],[data-v-d8e20525]:before,[data-v-d8e20525]:after,[data-v-d8e20525]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-d8e20525]{display:table-header-group}.table-head .select-column[data-v-d8e20525],.table-head .action-column[data-v-d8e20525]{z-index:2}.table-head .header[data-v-d8e20525]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media(hover:hover){.table-head .header[data-v-d8e20525]:hover{cursor:pointer}}.table-head .header.active[data-v-d8e20525]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-d8e20525]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-d8e20525]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-d8e20525],.table-head .header .sort-icon.right[data-v-d8e20525]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-d8e20525]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-d8e20525]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-d8e20525],.table-head .header .sort-icon.active[data-v-d8e20525]{display:block}.table-head[data-v-d8e20525] .column-configurator{margin-left:auto}.table-head .filters[data-v-d8e20525]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-d8e20525]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-d8e20525]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-d8e20525]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-d8e20525]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-d8e20525],.action-column[data-v-d8e20525]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-d8e20525]:after,.action-column.overlap[data-v-d8e20525]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-d8e20525]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-d8e20525]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-d8e20525]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-d8e20525]{cursor:pointer}tbody tr.clickable[data-v-d8e20525]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20% 80%,#fff 95%)}tbody tr.clickable[data-v-d8e20525]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20% 80%,#0f172a 95%)}tbody tr.selected[data-v-d8e20525]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20% 80%,#fff 95%)}tbody tr.selected[data-v-d8e20525]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20% 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-d8e20525],tbody tr.selectable td[data-v-d8e20525]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-d8e20525],tbody tr:not(.selectable) td[data-v-d8e20525]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}tbody tr[data-v-d8e20525]:not(.loading):nth-last-child(2){border-bottom-style:var(--tw-border-style);border-bottom-width:0}tbody tr .cell-content[data-v-d8e20525]{height:var(--v15b2dcc4);min-height:var(--v15b2dcc4);max-height:var(--v15b2dcc4);align-items:center;display:flex}.table-footer[data-v-d8e20525]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;justify-content:space-between;gap:calc(var(--spacing,.25rem)*4);border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding:calc(var(--spacing,.25rem)*4);flex-wrap:wrap;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-d8e20525]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .total-results[data-v-d8e20525]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-footer .total-results[data-v-d8e20525]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .total-results span[data-v-d8e20525]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-bb3db39e],[data-v-bb3db39e]:before,[data-v-bb3db39e]:after,[data-v-bb3db39e]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.avatar[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);background-color:var(--color-tertiary,#eff6ff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:inline-flex}.avatar[data-v-bb3db39e]:where(.dark,.dark *){background-color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:1;--tw-font-weight:var(--font-weight-medium,500);line-height:1;font-weight:var(--font-weight-medium,500);color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]:where(.dark,.dark *){color:var(--color-white,#fff)}.avatar img[data-v-bb3db39e]{object-fit:cover;border-radius:3.40282e38px;width:100%;height:100%}.avatar.small[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6)}.avatar.small .initials[data-v-bb3db39e]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.avatar.medium[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.avatar.large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12)}.avatar.large .initials[data-v-bb3db39e]{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.avatar.extra-large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14)}.avatar.extra-large .initials[data-v-bb3db39e]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.full-image[data-v-f3628cd7]{opacity:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-874a424c],[data-v-874a424c]:before,[data-v-874a424c]:after,[data-v-874a424c]::backdrop{--tw-outline-style:solid}}}.thumbnail-stack[data-v-874a424c]{flex-direction:row;align-items:center;display:flex}.thumbnail-stack[data-v-874a424c]:where(.dark,.dark *){opacity:.8}.thumbnail-stack .image-preview[data-v-874a424c]{outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-child,#fff);border-radius:.25rem}.thumbnail-stack .image-preview[data-v-874a424c]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-4)}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-874a424c]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8);background-color:var(--color-disabled,#f3f4f6);justify-content:center;align-items:center;display:flex}.thumbnail-stack .image-preview.invalid .icon[data-v-874a424c]{color:var(--color-disabled-text,#606369)}.thumbnail-stack .image-preview[data-v-874a424c] .image-wrapper:where(.dark,.dark *){opacity:1}.address-lookup-result[data-v-2780fe99]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-neutral-100,oklch(97% 0 0));width:100%;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-700,oklch(37.1% 0 0));flex-direction:column;font-style:normal;display:flex}.error-summary[data-v-59fb525a]{padding-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-leading:initial;--tw-font-weight:initial}}}.postcodenl-autocomplete-menu{margin-top:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);display:none;position:absolute}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));overflow:hidden auto}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:var(--radius-lg,.5rem);padding:calc(var(--spacing,.25rem)*3);--tw-leading:calc(var(--spacing,.25rem)*5);line-height:calc(var(--spacing,.25rem)*5)}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{padding:calc(var(--spacing,.25rem)*0);--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);background-color:#0000}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.postcodenl-autocomplete-item-label{width:100%;max-width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));margin-right:.4rem;display:block}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{color:var(--color-neutral-500,oklch(55.6% 0 0));margin-right:.4rem}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:right .25em center;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{--tw-border-style:none;width:.0625rem;height:.0625rem;padding:calc(var(--spacing,.25rem)*0);clip:rect(0 0 0 0);border-style:none;margin:-.0625rem;display:none;position:absolute}@property --tw-leading{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e0466e54],[data-v-e0466e54]:before,[data-v-e0466e54]:after,[data-v-e0466e54]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial}}}.country-icon[data-v-e0466e54]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);margin-right:.3125rem}.activator[data-v-e0466e54]{cursor:pointer;align-items:center;gap:calc(var(--spacing,.25rem)*1);background-color:var(--color-input-bg,#fff);display:flex}.activator[data-v-e0466e54]:not(.simple){border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);padding-inline:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.625rem}.activator:not(.simple) .country-icon[data-v-e0466e54]{margin-right:calc(var(--spacing,.25rem)*2)}.activator .state-indicator[data-v-e0466e54]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));margin-left:auto}.activator .state-indicator.is-open[data-v-e0466e54]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));rotate:180deg}.activator.disabled[data-v-e0466e54]{pointer-events:none;cursor:not-allowed;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#606369)}.activator.disabled[data-v-e0466e54]::placeholder{color:var(--color-disabled-text,#606369)}@media(hover:hover){.activator.disabled[data-v-e0466e54]:hover{border-color:var(--color-border-primary,#d1d5db)}}.activator.disabled[data-v-e0466e54]:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.activator.disabled[data-v-e0466e54]:focus{outline-offset:2px;outline:2px solid #0000}}.country-list[data-v-e0466e54]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-child,#fff);max-height:300px;padding-bottom:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow-y:auto}.country-list .search-container[data-v-e0466e54]{top:calc(var(--spacing,.25rem)*0);z-index:1;background-color:var(--color-child-alt,#fff);padding-inline:calc(var(--spacing,.25rem)*2);padding-top:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);position:sticky}.country-list .search-container[data-v-e0466e54]:after{bottom:calc(var(--spacing,.25rem)*-2);left:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*2);--tw-gradient-position:to bottom;width:100%;position:absolute}@supports (background-image:linear-gradient(in lab,red,red)){.country-list .search-container[data-v-e0466e54]:after{--tw-gradient-position:to bottom in oklab}}.country-list .search-container[data-v-e0466e54]:after{background-image:linear-gradient(var(--tw-gradient-stops));--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content)}.country-list .search-container .search-input[data-v-e0466e54]{--tw-border-style:none;background-color:var(--color-child-alt,#fff);width:100%;padding:calc(var(--spacing,.25rem)*0);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-style:none}.country-list .search-container .search-input[data-v-e0466e54]::placeholder{color:var(--color-body-text,#111827)}.country-list .search-container .search-input[data-v-e0466e54]:focus{box-shadow:none}.country-list .countries[data-v-e0466e54]{padding-top:calc(var(--spacing,.25rem)*2)}.country-list .countries .country[data-v-e0466e54]{align-items:center;gap:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*.5);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));display:flex}.country-list .countries .country[data-v-e0466e54]:hover{cursor:pointer;background-color:var(--color-secondary-hover,#fafafa);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}.country-list .countries .country[data-v-e0466e54]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.country-list .countries .no-countries-found[data-v-e0466e54]{pointer-events:none;padding-top:calc(var(--spacing,.25rem)*1);text-align:center;--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}[data-v-58d080a4] .activator{width:100%;max-width:15.75rem}.address-input[data-v-58d080a4]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-input .country .country-label-row[data-v-58d080a4]{flex-direction:row;justify-content:space-between;display:flex}.address-input .country .country-label-row .address-toggle[data-v-58d080a4]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0));text-decoration-line:underline}.address-input .country .country-label-row .address-toggle[data-v-58d080a4]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}.address-input .input-label[data-v-58d080a4]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-input .grouped-inputs[data-v-58d080a4]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);width:100%;max-width:24rem;display:flex}.address-input .grouped-inputs .error-summary[data-v-58d080a4]{width:100%}.address-input .input-container[data-v-58d080a4],.address-input .address-lookup-result[data-v-58d080a4]{width:100%;max-width:24rem}.address-form[data-v-e0304f7b]{flex-wrap:wrap;justify-content:space-between;display:flex}.address-form form[data-v-e0304f7b]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-form form .input-label[data-v-e0304f7b]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-form form .grouped-inputs[data-v-e0304f7b]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);display:flex}.address-form form .grouped-inputs .error-summary[data-v-e0304f7b]{width:100%}.address-form form .input-container[data-v-e0304f7b],.address-form form .grouped-inputs[data-v-e0304f7b]{width:100%;max-width:24rem}.checkbox-group[data-v-0088e5e7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ec57ffa3],[data-v-ec57ffa3]:before,[data-v-ec57ffa3]:after,[data-v-ec57ffa3]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.checkbox-button[data-v-ec57ffa3]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);padding:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.checkbox-button .checkbox-container[data-v-ec57ffa3]{border-radius:var(--radius-lg,.5rem)}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.checkbox-button .checkbox-container[data-v-ec57ffa3] .label{border-radius:var(--radius-xl,.75rem);height:100%;padding:calc(var(--spacing,.25rem)*3);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);word-break:break-all;align-items:flex-start}.checkbox-button .checkbox-container .checkbox-button-label[data-v-ec57ffa3]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);display:flex}.checkbox-button .checkbox-container .micro-icon[data-v-ec57ffa3]{margin-top:calc(var(--spacing,.25rem)*.5);color:var(--color-neutral-400,oklch(70.8% 0 0))}.checkbox-button .checked-content[data-v-ec57ffa3]{padding-top:calc(var(--spacing,.25rem)*1)}.drop-zone[data-v-f6ddde4c]{--tw-border-style:dashed;border-style:dashed}.drop-zone.default[data-v-f6ddde4c]{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.drop-zone.default[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.drop-zone.default[data-v-f6ddde4c]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.drop-zone.default[data-v-f6ddde4c]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.drop-zone.dragging[data-v-f6ddde4c]{border-color:var(--color-blue-300,oklch(80.9% .105 251.813));background-color:var(--color-blue-50,oklch(97% .014 254.604))}.drop-zone.dragging[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-blue-900,oklch(37.9% .146 265.522))}.drop-zone .label[data-v-f6ddde4c]{z-index:2;cursor:pointer;height:100%}.drop-zone .label.dragging[data-v-f6ddde4c]{justify-content:center}.drop-zone .label .icon[data-v-f6ddde4c]{color:var(--color-primary,#2563eb)}.drop-zone .label .icon[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .label .loader[data-v-f6ddde4c]{margin-right:calc(var(--spacing,.25rem)*1)}.drop-zone .label .trigger[data-v-f6ddde4c]{color:var(--color-primary,#2563eb);text-decoration-line:underline}.drop-zone .label .trigger[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .file-input[data-v-f6ddde4c]{display:none}.warning-zone[data-v-6a715eb5]{--tw-border-style:solid;border-style:solid;border-color:var(--color-orange-200,oklch(90.1% .076 70.697));background-color:var(--color-warning-accent,#fff7ed)}.warning-zone .label[data-v-6a715eb5]{color:var(--color-warning-primary,#7c2d12);flex-grow:1}.warning-zone .label .icon[data-v-6a715eb5]{color:var(--color-warning-tertiary,#f97316)}.error-zone[data-v-ac56673e]{--tw-border-style:solid;border-style:solid;border-color:var(--color-red-200,oklch(88.5% .062 18.334));background-color:var(--color-error-accent,#fef2f2)}.error-zone .label[data-v-ac56673e]{color:var(--color-error-primary,#7b2122);flex-grow:1}.error-zone .label .icon[data-v-ac56673e]{color:var(--color-error-tertiary,#e73c3e)}.success-zone[data-v-100cfc2a]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff)}.success-zone[data-v-100cfc2a]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.success-zone .label .icon[data-v-100cfc2a]{color:var(--color-success-tertiary,#22c55e)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3bf13f60],[data-v-3bf13f60]:before,[data-v-3bf13f60]:after,[data-v-3bf13f60]::backdrop{--tw-duration:initial;--tw-ease:initial}}}.linear-progress[data-v-3bf13f60]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));display:flex}.linear-progress .wrapper[data-v-3bf13f60]{gap:calc(var(--spacing,.25rem)*1);flex-direction:column;width:100%;display:flex}.linear-progress .wrapper .progress-bar[data-v-3bf13f60]{height:calc(var(--spacing,.25rem)*1.5);width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-3bf13f60]{width:100%;height:100%;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.5s;--tw-ease:linear;transition-duration:.5s;transition-timing-function:linear}.linear-progress .wrapper .progress-bar.blue[data-v-3bf13f60]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-3bf13f60]{background-color:var(--color-blue-500,oklch(62.3% .214 259.815))}.linear-progress .wrapper .progress-bar.lightblue[data-v-3bf13f60]{background-color:inherit}.linear-progress .wrapper .progress-bar.lightblue .progress[data-v-3bf13f60]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}.linear-progress .wrapper .progress-bar.green[data-v-3bf13f60]{background-color:var(--color-green-100,oklch(96.2% .044 156.743))}.linear-progress .wrapper .progress-bar.green .progress[data-v-3bf13f60]{background-color:var(--color-green-500,oklch(72.3% .219 149.579))}.linear-progress .wrapper .progress-bar.gray[data-v-3bf13f60]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-3bf13f60]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.linear-progress .wrapper .progress-bar.orange[data-v-3bf13f60]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-3bf13f60]{background-color:var(--color-orange-500,oklch(70.5% .213 47.604))}.linear-progress .wrapper .progress-bar.purple[data-v-3bf13f60]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-3bf13f60]{background-color:var(--color-purple-500,oklch(62.7% .265 303.9))}.linear-progress .wrapper .progress-bar.red[data-v-3bf13f60]{background-color:var(--color-red-100,oklch(93.6% .032 17.717))}.linear-progress .wrapper .progress-bar.red .progress[data-v-3bf13f60]{background-color:var(--color-red-500,oklch(63.7% .237 25.331))}.linear-progress .wrapper .progress-bar.yellow[data-v-3bf13f60]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-3bf13f60]{background-color:var(--color-yellow-500,oklch(79.5% .184 86.047))}.linear-progress .append[data-v-3bf13f60]{min-width:calc(var(--spacing,.25rem)*9)}@property --tw-ease{syntax:"*";inherits:false}.uploading-zone[data-v-c770521c]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));position:relative}.uploading-zone .label[data-v-c770521c]{z-index:2;cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.uploading-zone .label[data-v-c770521c]:where(.dark,.dark *){mix-blend-mode:difference}.uploading-zone .label .text[data-v-c770521c]:where(.dark,.dark *){color:var(--color-white,#fff)}.uploading-zone .label .progress[data-v-c770521c]{color:var(--color-primary,#2563eb)}.uploading-zone .label .progress[data-v-c770521c]:where(.dark,.dark *){color:var(--color-primary-light,#3b82f6)}.uploading-zone .button[data-v-c770521c]{width:100%}@media(min-width:48rem){.uploading-zone .button[data-v-c770521c]{width:auto}}.uploading-zone .linear-progress[data-v-c770521c]{right:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:1;position:absolute;height:100%!important}:is(.uploading-zone .linear-progress[data-v-c770521c] .wrapper,.uploading-zone .linear-progress[data-v-c770521c] .progress-bar){height:100%}.processing-zone[data-v-c88622d7]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.processing-zone[data-v-c88622d7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.processing-zone .label[data-v-c88622d7]{cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.processing-zone .label .loader[data-v-c88622d7]{isolation:isolate}.processing-zone .button[data-v-c88622d7]{width:100%}@media(min-width:48rem){.processing-zone .button[data-v-c88622d7]{width:auto}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e8f96956],[data-v-e8f96956]:before,[data-v-e8f96956]:after,[data-v-e8f96956]::backdrop{--tw-border-style:solid}}}@media(min-width:48rem){.drag-and-drop[data-v-e8f96956]{height:4.5rem}}.drag-and-drop .base-zone[data-v-e8f96956]{border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);border-width:1px;flex-wrap:wrap;align-items:center;row-gap:1.125rem;display:flex;overflow:hidden}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956]{padding-block:calc(var(--spacing,.25rem)*0);padding-right:calc(var(--spacing,.25rem)*4);padding-left:calc(var(--spacing,.25rem)*6)}}.drag-and-drop .base-zone[data-v-e8f96956] .label{align-items:center;gap:calc(var(--spacing,.25rem)*1);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-grow:1;display:flex}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956] .label{width:auto}}.drag-and-drop .base-zone[data-v-e8f96956] .label .icon{margin-right:calc(var(--spacing,.25rem)*2)}.drag-and-drop .base-zone[data-v-e8f96956] .actions{z-index:2;align-items:center;gap:calc(var(--spacing,.25rem)*2);flex-grow:1;display:flex}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions{flex-grow:0}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button{flex-shrink:0}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:1}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){flex-grow:1;order:1}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){order:2}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:1}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cdeedeb7],[data-v-cdeedeb7]:before,[data-v-cdeedeb7]:after,[data-v-cdeedeb7]::backdrop{--tw-border-style:solid;--tw-outline-style:solid}}}.phone-input[data-v-cdeedeb7]{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);padding-inline:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}.phone-input[data-v-cdeedeb7]:hover:not(.disabled){border-color:var(--color-border-primary-hover,#9ca3af)}.phone-input.focus[data-v-cdeedeb7]:not(.disabled){border-color:var(--color-primary-light,#3b82f6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--color-primary-light,#3b82f6)}.phone-input.disabled[data-v-cdeedeb7]{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.phone-input.disabled .country-prefix[data-v-cdeedeb7]{color:var(--color-gray-600,oklch(44.6% .03 256.802))}.phone-input.disabled input[data-v-cdeedeb7]{background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#606369)}.phone-input select[data-v-cdeedeb7],.phone-input input[data-v-cdeedeb7]{--tw-border-style:none;padding:calc(var(--spacing,.25rem)*0);border-style:none}:is(.phone-input select[data-v-cdeedeb7],.phone-input input[data-v-cdeedeb7]):focus{box-shadow:none}.phone-input select[data-v-cdeedeb7]{padding-right:calc(var(--spacing,.25rem)*8)}.phone-input input[data-v-cdeedeb7]{background-color:var(--color-input-bg,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.phone-input .country-prefix[data-v-cdeedeb7]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.dark .country-prefix[data-v-cdeedeb7]{color:var(--color-gray-400,oklch(70.7% .022 261.325))}.dark .disabled .country-prefix[data-v-cdeedeb7]{color:var(--color-disabled-text,#606369)}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-c1a60afd],[data-v-c1a60afd]:before,[data-v-c1a60afd]:after,[data-v-c1a60afd]::backdrop{--tw-font-weight:initial}}}.radio[data-v-c1a60afd]{margin-top:calc(var(--spacing,.25rem)*.5);border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6)}.radio[data-v-c1a60afd]:focus{--tw-ring-color:var(--color-primary-light,#3b82f6)}.radio.large[data-v-c1a60afd]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.label[data-v-c1a60afd]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);display:flex}.label[data-v-c1a60afd]:not(.disabled){cursor:pointer}.radio[data-v-c1a60afd]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.radio[data-v-c1a60afd]:checked:not(:disabled){border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary,#2563eb)}.radio[data-v-c1a60afd]:checked:not(:disabled):where(.dark,.dark *){background-color:var(--color-primary-light,#3b82f6)}.radio[data-v-c1a60afd]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.radio[data-v-c1a60afd]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-c1a60afd]:checked:not(:disabled):hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-0a934056],[data-v-0a934056]:before,[data-v-0a934056]:after,[data-v-0a934056]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:"";--tw-font-weight:initial}}}.radio-button[data-v-0a934056]{align-items:center;gap:calc(var(--spacing,.25rem)*3);border-radius:var(--radius-lg,.5rem);padding-inline:calc(var(--spacing,.25rem)*3);padding-block:calc(var(--spacing,.25rem)*3);word-break:break-all;display:flex}.radio-button[data-v-0a934056] *{pointer-events:none}.radio-button[data-v-0a934056]:not(.disabled):hover{cursor:pointer;background-color:var(--color-neutral-100,oklch(97% 0 0))}.radio-button[data-v-0a934056]:not(.disabled):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.radio-button:not(.disabled).active[data-v-0a934056]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}@media(hover:hover){.radio-button:not(.disabled).active[data-v-0a934056]:hover{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}}.radio-button:not(.disabled).active[data-v-0a934056]:where(.dark,.dark *){background-color:var(--color-child,#fff)}@media(hover:hover){.radio-button:not(.disabled).active[data-v-0a934056]:where(.dark,.dark *):hover{background-color:var(--color-child-alt,#fff)}}.radio-button:not(.disabled).active .subtitle[data-v-0a934056]{color:var(--color-neutral-600,oklch(43.9% 0 0))!important}.radio-button:not(.disabled).active .subtitle[data-v-0a934056]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))!important}.radio-button.disabled[data-v-0a934056]{color:var(--color-disabled-text,#606369);--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.radio-button.disabled[data-v-0a934056]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:10;cursor:not-allowed;border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-300,oklch(87% 0 0));opacity:.1;--tw-content:"";content:var(--tw-content);width:100%;height:100%;position:absolute}.radio-button.large[data-v-0a934056]{padding-block:calc(var(--spacing,.25rem)*3.5)}.radio-button label[data-v-0a934056]{-webkit-user-select:none;user-select:none}.radio-button .append[data-v-0a934056]{margin-left:auto}.radio-button .prepend-wrapper[data-v-0a934056]{align-items:center;gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper[data-v-0a934056]{flex-direction:column;min-width:max-content;display:flex}.radio-button .prepend-wrapper .title-wrapper .title[data-v-0a934056]{align-items:center;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-0a934056]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-0a934056]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-06fee698],[data-v-06fee698]:before,[data-v-06fee698]:after,[data-v-06fee698]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.suggestion-list[data-v-06fee698]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);min-width:6.25rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:absolute}.suggestion-list .menu[data-v-06fee698]{row-gap:calc(var(--spacing,.25rem)*1)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-47592fd4],[data-v-47592fd4]:before,[data-v-47592fd4]:after,[data-v-47592fd4]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.editor[data-v-47592fd4] .tiptap{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);width:100%;height:18.75rem;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:.625rem;overflow:auto}:is(.editor[data-v-47592fd4] .tiptap h1,.editor[data-v-47592fd4] .tiptap h2){margin-bottom:calc(var(--spacing,.25rem)*4)}.editor[data-v-47592fd4] .tiptap h1{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)))}.editor[data-v-47592fd4] .tiptap h2{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)))}.editor[data-v-47592fd4] .tiptap h3{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}:is(.editor[data-v-47592fd4] .tiptap h4,.editor[data-v-47592fd4] .tiptap h5,.editor[data-v-47592fd4] .tiptap h6){font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.editor[data-v-47592fd4] .tiptap .tag{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);color:var(--color-gray-700,oklch(37.3% .034 259.733))}.editor .toolbar[data-v-47592fd4]{margin-bottom:calc(var(--spacing,.25rem)*2);gap:calc(var(--spacing,.25rem)*1);display:flex}.editor .toolbar .button[data-v-47592fd4]{width:calc(var(--spacing,.25rem)*10)}.editor .toolbar[data-v-47592fd4] .base-select{margin-left:auto}.modal.loader-modal[data-v-3d6405b8] .inner{display:flex;align-items:center;justify-content:center;background-color:var(--color-white);height:4.75rem;border-radius:1rem}.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:0;overflow:visible}.modal.loader-modal[data-v-3d6405b8] .inner .loader{width:3.125rem;height:3.125rem}.search-container[data-v-3d6405b8]{position:relative}.search-container[data-v-3d6405b8] .modal{max-height:25rem;background-color:transparent;height:100%;box-shadow:none}.search-container[data-v-3d6405b8] .modal .inner .content{padding:0}.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper,.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper input{background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{background-color:var(--color-child);border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;overflow:hidden}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .select-content{border-radius:1rem;background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated{margin:.625rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-left-radius:0;border-bottom-right-radius:0}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper{border-radius:1rem;padding-left:1.5rem;padding-right:1.5rem;height:4.75rem;border:none;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper.focus{border:none;outline:none}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .prepend-icon{height:1.5rem;width:1.5rem;margin-left:0;margin-right:.25rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-3d6405b8] .modal .inner .content .button{color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .button.cancel{font-weight:400;border-left:1px solid var(--color-border-primary);border-radius:0;padding-left:1rem;padding-right:.5rem}.dark .modal .cancel[data-v-3d6405b8]{color:var(--color-body-text)!important}@media(min-width:768px){.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-56f21690],[data-v-56f21690]:before,[data-v-56f21690]:after,[data-v-56f21690]::backdrop{--tw-border-style:solid}}}[data-v-56f21690] .input{min-width:calc(var(--spacing,.25rem)*40);border-right-style:var(--tw-border-style)!important;border-right-width:0!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important}[data-v-56f21690] .search-options .wrapper{border-left-style:var(--tw-border-style)!important;border-left-width:0!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important}.scoped-search[data-v-56f21690]{display:flex}.scoped-search .search:has(.input:hover)+.divider[data-v-56f21690]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search .search:focus-within+.divider[data-v-56f21690]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search .search[data-v-56f21690]:focus-within .input{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary-light,#3b82f6)}.scoped-search .search[data-v-56f21690]:focus-within .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-56f21690]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search:has(.search-options:focus) .divider[data-v-56f21690],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-56f21690]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search[data-v-56f21690] .search{flex-grow:1}.time-input[data-v-66e40247]{width:5.3125rem}.time-input[data-v-66e40247] ::-webkit-calendar-picker-indicator{display:none}.time-input[data-v-66e40247] ::-webkit-datetime-edit-text{padding-inline:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input[data-v-66e40247] ::-webkit-datetime-edit-fields-wrapper{margin-inline:auto}.time-input.has-icon[data-v-66e40247]{width:calc(var(--spacing,.25rem)*28)}.time-input.has-icon[data-v-66e40247] ::-webkit-datetime-edit-fields-wrapper{margin-left:calc(var(--spacing,.25rem)*0)}.time-input.has-icon[data-v-66e40247] .icon{color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input.error-full[data-v-66e40247] .error{width:max-content}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-18c509b1],[data-v-18c509b1]:before,[data-v-18c509b1]:after,[data-v-18c509b1]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid}}}.arrow[data-v-18c509b1]{position:relative}.arrow.vertical[data-v-18c509b1]{width:fit-content;height:100%;padding-inline:calc(var(--spacing,.25rem)*3)}.arrow.vertical .text[data-v-18c509b1]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;top:50%;rotate:-90deg}.arrow.vertical.has-text[data-v-18c509b1]{margin-right:calc(var(--spacing,.25rem)*8)}.arrow[data-v-18c509b1]:not(.vertical){width:100%;padding-block:calc(var(--spacing,.25rem)*3)}.arrow:not(.vertical) .text[data-v-18c509b1]{margin-top:calc(var(--spacing,.25rem)*5);--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;left:50%}.arrow:not(.vertical).has-text[data-v-18c509b1]{margin-bottom:calc(var(--spacing,.25rem)*8)}.arrow .arrow-pointer[data-v-18c509b1]{border-right-style:var(--tw-border-style);border-right-width:2px;border-bottom-style:var(--tw-border-style);border-bottom-width:2px;border-color:var(--color-border-primary,#d1d5db);padding:calc(var(--spacing,.25rem)*2);position:absolute}.arrow .arrow-pointer.up[data-v-18c509b1],.arrow .arrow-pointer.down[data-v-18c509b1]{margin-left:calc(var(--spacing,.25rem)*-2)}.arrow .arrow-pointer.up[data-v-18c509b1]{top:calc(var(--spacing,.25rem)*0);margin-top:calc(var(--spacing,.25rem)*.5);rotate:-135deg}.arrow .arrow-pointer.down[data-v-18c509b1]{bottom:calc(var(--spacing,.25rem)*0);margin-bottom:calc(var(--spacing,.25rem)*.5);rotate:45deg}.arrow .arrow-pointer.left[data-v-18c509b1],.arrow .arrow-pointer.right[data-v-18c509b1]{top:calc(var(--spacing,.25rem)*4);margin-top:calc(var(--spacing,.25rem)*-3)}.arrow .arrow-pointer.left[data-v-18c509b1]{left:calc(var(--spacing,.25rem)*0);margin-left:calc(var(--spacing,.25rem)*.5);rotate:135deg}.arrow .arrow-pointer.right[data-v-18c509b1]{right:calc(var(--spacing,.25rem)*0);margin-right:calc(var(--spacing,.25rem)*.5);rotate:-45deg}.arrow .text[data-v-18c509b1]{text-wrap:nowrap;color:var(--color-gray-500,oklch(55.1% .027 264.364));display:block;position:absolute}.arrow .text[data-v-18c509b1]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.footer[data-v-af644ac3]{min-height:calc(var(--spacing,.25rem)*32);justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex;overflow:hidden}.footer .copy[data-v-af644ac3]{text-align:center;width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1b195509],[data-v-1b195509]:before,[data-v-1b195509]:after,[data-v-1b195509]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.header[data-v-1b195509]{z-index:50;width:100%;height:var(--v6232d06c);position:relative}.header .wrapper[data-v-1b195509]{border-bottom-style:var(--tw-border-style);background-color:var(--color-parent-bg,#fff);border-bottom-width:1px;justify-content:center;width:100%;display:flex;position:fixed}.header .wrapper[data-v-1b195509]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.header .wrapper .inner[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100vw;height:100%;margin-right:calc(100% - 100vw);display:grid;overflow-x:clip}@media(min-width:64rem){.header .wrapper .inner[data-v-1b195509]{max-width:100.438rem}}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:1fr auto 1fr;grid-template-areas:"return-info return-info return-info""prepend logo append""middle middle middle"}.header .wrapper .inner .prepend[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6);grid-area:prepend}.header .wrapper .inner .logo[data-v-1b195509]{grid-area:logo}.header .wrapper .inner .logo a[data-v-1b195509]{width:fit-content;display:block}.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);border-bottom-width:1px;justify-content:center;display:flex}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*0);border-bottom-width:0;justify-content:flex-start}}.header .wrapper .inner .return-info[data-v-1b195509]{grid-area:return-info}.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);--tw-border-style:none;border-style:none}}.header .wrapper .inner .return-info a[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);align-items:center;display:flex}@media(min-width:64rem){.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}}.header .wrapper .inner .middle[data-v-1b195509]{justify-content:center;align-items:center;height:100%;display:flex}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]{padding:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509]{grid-area:middle}.header .wrapper .inner .middle[data-v-1b195509]>*{margin-inline:calc(var(--spacing,.25rem)*2);margin-bottom:calc(var(--spacing,.25rem)*2)}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]>*{margin:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509] .input-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .inline-container-prepended .icon{color:var(--color-primary,#2563eb)}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{border-radius:var(--radius-2xl,1rem);--tw-border-style:none;background-color:var(--color-disabled,#f3f4f6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.4375rem;border-style:none;padding-left:3.25rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input::placeholder{color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media(hover:hover){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:hover{--tw-border-style:none;border-style:none}}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.4375rem;padding-right:calc(var(--spacing,.25rem)*4)}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{padding-block:.6875rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.6875rem}}.header .wrapper .inner .append[data-v-1b195509]{justify-content:flex-end;align-items:center;gap:calc(var(--spacing,.25rem)*4);grid-area:append;display:flex}.header .wrapper .inner .append .icon[data-v-1b195509]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.header .wrapper .inner .append .dropdown[data-v-1b195509] .button{margin-right:calc(var(--spacing,.25rem)*6);padding:calc(var(--spacing,.25rem)*0);background-color:#0000}@media(min-width:1024px){.header[data-v-1b195509],.header .wrapper[data-v-1b195509]{height:calc(var(--spacing,.25rem)*20)}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:2fr 3fr 2fr;grid-template-areas:"logo middle append"}.header .wrapper .inner.left[data-v-1b195509]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-1b195509]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-1b195509]{justify-content:center}.header .wrapper .inner.right[data-v-1b195509]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-1b195509]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-1b195509]{grid-template-columns:1fr 1fr 2fr 2fr;grid-template-areas:"logo return-info middle append"}.header .wrapper .prepend[data-v-1b195509]{display:none}.header .wrapper .logo a[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-bfd6f303],[data-v-bfd6f303]:before,[data-v-bfd6f303]:after,[data-v-bfd6f303]::backdrop{--tw-font-weight:initial}}}.tab[data-v-bfd6f303]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-600,oklch(43.9% 0 0))}.tab .tab-count[data-v-bfd6f303]{margin-left:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:3.40282e38px;display:none}@media(min-width:48rem){.tab .tab-count[data-v-bfd6f303]{display:inline-block}}.tab.active[data-v-bfd6f303]{border-color:var(--color-primary-mid,#2f6fe8);color:var(--color-primary-mid,#2f6fe8)}.tab.active[data-v-bfd6f303]:where(.dark,.dark *){border-color:var(--color-primary-light,#3b82f6);color:var(--color-primary-light,#3b82f6)}.tab.disabled[data-v-bfd6f303]{pointer-events:none;cursor:not-allowed;color:var(--color-disabled-text,#606369)}.tab.disabled.active[data-v-bfd6f303]{border-color:var(--color-disabled-text,#606369)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-51f0b7e0],[data-v-51f0b7e0]:before,[data-v-51f0b7e0]:after,[data-v-51f0b7e0]::backdrop{--tw-space-x-reverse:0;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid;--tw-font-weight:initial}}}.tabs[data-v-51f0b7e0]{display:flex;position:relative}:where(.tabs[data-v-51f0b7e0]>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing,.25rem)*8)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing,.25rem)*8)*calc(1 - var(--tw-space-x-reverse)))}.tabs[data-v-51f0b7e0]{background-color:inherit;--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-gray-200));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tabs[data-v-51f0b7e0] .tab{cursor:pointer;border-bottom-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);white-space:nowrap;border-bottom-width:2px}.tabs[data-v-51f0b7e0] .tab:not(.active){color:var(--color-gray-500,oklch(55.1% .027 264.364));border-color:#0000}.tabs[data-v-51f0b7e0] .tab:not(.active):where(.dark,.dark *){color:var(--color-body-text,#111827)}.tabs[data-v-51f0b7e0] .tab:hover:not(.active){color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media(hover:hover){.tabs[data-v-51f0b7e0] .tab:hover:not(.active):hover{border-color:var(--color-neutral-200,oklch(92.2% 0 0))}}.tabs[data-v-51f0b7e0] .tab:hover:not(.active):where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.tabs[data-v-51f0b7e0] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a2de1f4a],[data-v-a2de1f4a]:before,[data-v-a2de1f4a]:after,[data-v-a2de1f4a]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-tracking:initial}}}.page-header[data-v-a2de1f4a]{background-color:var(--color-body,#fff);position:relative}.page-header.header-sticky[data-v-a2de1f4a]{z-index:21;top:var(--v6db7cc74);position:sticky}.page-header.header-sticky.overlap[data-v-a2de1f4a]{border-bottom-style:var(--tw-border-style);border-bottom-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-shadow:0 12px 12px -16px var(--tw-shadow-color,#0003);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);padding-top:var(--d88fb824)}.page-header.header-sticky.overlap .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*1)}.page-header.header-sticky.overlap .heading h1[data-v-a2de1f4a]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.page-header .back-button-wrapper[data-v-a2de1f4a]{height:calc(var(--spacing,.25rem)*5);width:100%}.page-header h1[data-v-a2de1f4a]{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}@media(min-width:48rem){.page-header h1[data-v-a2de1f4a]{font-size:1.75rem}}.page-header .tabs[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*8)}.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}@media(min-width:48rem){.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*5)}}.page-header .heading .image-wrapper[data-v-a2de1f4a]{width:fit-content}.page-header .heading .image-wrapper[data-v-a2de1f4a] .image{max-height:calc(var(--spacing,.25rem)*14)}.page-header .heading .header-start[data-v-a2de1f4a]{align-items:center;gap:calc(var(--spacing,.25rem)*4);flex-direction:row;display:flex}.page-header .heading .actions[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);margin-left:auto;display:flex}.page-header .heading .title-wrapper[data-v-a2de1f4a]{flex-direction:column;display:flex}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600);--tw-tracking:var(--tracking-tight,-.025em);letter-spacing:var(--tracking-tight,-.025em);color:var(--color-gray-500,oklch(55.1% .027 264.364))}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.page-header .filters[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);display:flex;overflow:auto}@media(min-width:48rem){.page-header .filters[data-v-a2de1f4a]{flex-wrap:wrap}}.page-header .filters .search[data-v-a2de1f4a]{min-width:12rem}@media(min-width:64rem){.page-header .filters .search[data-v-a2de1f4a]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-a2de1f4a]{display:contents}.page-header .filters .filter-group[data-v-a2de1f4a] .title{margin-left:calc(var(--spacing,.25rem)*4)}@property --tw-tracking{syntax:"*";inherits:false}.sidebar[data-v-c4aea807]{border-radius:var(--radius-lg,.5rem);width:100%;max-width:14.5rem;height:100%;overflow:hidden}.sidebar.mini[data-v-c4aea807]{width:2.25rem}.sidebar.mini .menu[data-v-c4aea807]{width:fit-content}.menu[data-v-c4aea807]{gap:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-950,oklch(14.5% 0 0))}.summary[data-v-15250c0d]{width:var(--v5436127c);max-width:100%}.hamburger-icon[data-v-40931657]{cursor:pointer}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbf56868],[data-v-fbf56868]:before,[data-v-fbf56868]:after,[data-v-fbf56868]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-duration:initial}}}[data-v-fbf56868] .progress{transition-duration:var(--v63a26136)!important}.toast[data-v-fbf56868]{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-gray-200,oklch(92.8% .006 264.531));background-color:var(--color-child-alt,#fff);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);width:100%;max-width:24rem;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:relative}.toast[data-v-fbf56868]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.toast .wrapper[data-v-fbf56868]{padding:calc(var(--spacing,.25rem)*4);display:flex}.toast .linear-progress[data-v-fbf56868] .progress-bar{border-bottom-right-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.toast.is-absolute[data-v-fbf56868]{top:calc(var(--spacing,.25rem)*1);right:calc(var(--spacing,.25rem)*1);position:absolute}.toast .type-icon[data-v-fbf56868]{margin-right:calc(var(--spacing,.25rem)*3);flex-shrink:0}.toast .content[data-v-fbf56868]{padding-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-direction:column;display:flex}.toast .content .title[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.toast .content .description[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.toast .content .description[data-v-fbf56868]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.toast .content .actions[data-v-fbf56868]{gap:calc(var(--spacing,.25rem)*2);display:flex}.toast .close[data-v-fbf56868]{top:.5rem;right:calc(var(--spacing,.25rem)*0);position:absolute}.toast .close[data-v-fbf56868] .mini-icon{color:var(--color-gray-400,oklch(70.7% .022 261.325))}.close:hover .mini-icon[data-v-fbf56868]{color:var(--color-black,#000)}.error .type-icon[data-v-fbf56868]{color:var(--color-red-500,oklch(63.7% .237 25.331))}.warning .type-icon[data-v-fbf56868]{color:var(--color-orange-500,oklch(70.5% .213 47.604))}.success .type-icon[data-v-fbf56868]{color:var(--color-green-500,oklch(72.3% .219 149.579))}.info .type-icon[data-v-fbf56868]{color:var(--color-blue-500,oklch(62.3% .214 259.815))}.fade-enter-from[data-v-fbf56868],.fade-leave-to[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*60);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:0}.fade-enter-to[data-v-fbf56868],.fade-leave-from[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:1}.fade-enter-active[data-v-fbf56868],.fade-leave-active[data-v-fbf56868]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;transition-duration:.3s}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-duration{syntax:"*";inherits:false}.toast-group[data-v-741facc4]{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);z-index:100;gap:calc(var(--spacing,.25rem)*4);max-height:100vh;padding:calc(var(--spacing,.25rem)*4);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));scrollbar-width:none;flex-direction:column;display:flex;position:fixed;overflow:hidden auto}.page-layout[data-v-312f26ad]{flex-direction:column;display:flex;position:relative;overflow-x:clip}.page-layout .wrap[data-v-312f26ad]{flex-direction:column;align-self:center;width:100vw;height:100%;margin-right:calc(100% - 100vw);display:flex}@media(min-width:64rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*5);max-width:100.438rem;padding-inline:calc(var(--spacing,.25rem)*6);flex-direction:row}}@media(min-width:96rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*20)}}.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6)}@media(min-width:64rem){.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout.layout-mirrored .main[data-v-312f26ad]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-312f26ad]{order:2}.page-layout .sidebar[data-v-312f26ad]{margin-bottom:calc(var(--spacing,.25rem)*4);height:100%;position:sticky}@media(min-width:64rem){.page-layout .sidebar[data-v-312f26ad]{margin-top:calc(var(--spacing,.25rem)*10)}}.page-layout .sidebar[data-v-312f26ad]{top:var(--v7ed39e1a)}.page-layout .sidebar-left[data-v-312f26ad]{display:none}@media(min-width:64rem){.page-layout .sidebar-left[data-v-312f26ad]{display:block}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]{width:fit-content;max-width:calc(var(--spacing,.25rem)*40)}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]{width:100%;max-width:14.5rem}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*4)}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout .sidebar-right[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*4);padding-top:calc(var(--spacing,.25rem)*0)}@media(min-width:64rem){.page-layout .sidebar-right[data-v-312f26ad]{padding:calc(var(--spacing,.25rem)*0);padding-top:calc(var(--spacing,.25rem)*4)}}.page-layout .main[data-v-312f26ad]{min-width:calc(var(--spacing,.25rem)*0);padding-block:calc(var(--spacing,.25rem)*4);flex-grow:1}@media(min-width:64rem){.page-layout .main[data-v-312f26ad]{padding-block:calc(var(--spacing,.25rem)*10)}}.persistent .label .badge[data-v-9ccdf55b]{margin-right:.375rem}.persistent .label .micro-icon[data-v-9ccdf55b]{margin-left:calc(var(--spacing,.25rem)*1)}.persistent .label .micro-icon[data-v-9ccdf55b]:where(.dark,.dark *){color:inherit}.persistent[data-v-9ccdf55b] .menu .current{color:var(--color-neutral-950,oklch(14.5% 0 0))!important}.persistent[data-v-9ccdf55b] .menu .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1d398f2d],[data-v-1d398f2d]:before,[data-v-1d398f2d]:after,[data-v-1d398f2d]::backdrop{--tw-border-style:solid}}}.step-connector[data-v-1d398f2d]:not(.absolute){flex:1}.step-connector.absolute[data-v-1d398f2d]{top:9.1px;left:calc(11px - 50%);right:calc(50% + 11px)}.step-connector .horizontal-line[data-v-1d398f2d]{border-top-style:var(--tw-border-style);border-top-width:.4rem;border-color:var(--color-neutral-100,oklch(97% 0 0));display:block}.step-connector .horizontal-line[data-v-1d398f2d]:where(.dark,.dark *){border-color:var(--color-input-border,#d1d5db)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a323e4e3],[data-v-a323e4e3]:before,[data-v-a323e4e3]:after,[data-v-a323e4e3]::backdrop{--tw-content:"";--tw-font-weight:initial}}}.step[data-v-a323e4e3]:not(.xs){flex-direction:column;flex:1;align-items:center;display:flex;position:relative}.step .step-content[data-v-a323e4e3]{flex-direction:column;align-items:center;display:flex}.step .step-content .step-state[data-v-a323e4e3]{z-index:1;height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);background-color:var(--color-neutral-100,oklch(97% 0 0));font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.step .step-content .step-state[data-v-a323e4e3]:where(.dark,.dark *){background-color:var(--color-input-border,#d1d5db)}.step .step-content .step-state.active[data-v-a323e4e3]:before{z-index:1;height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);opacity:.1;--tw-content:"";content:var(--tw-content);border-radius:3.40282e38px;position:absolute}.step .step-content .step-state .micro-icon[data-v-a323e4e3]{color:var(--color-white,#fff)}.step .step-content .label[data-v-a323e4e3]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.step .step-content .label.unfinished[data-v-a323e4e3]{color:var(--color-gray-450,#848b98)}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-102893cf],[data-v-102893cf]:before,[data-v-102893cf]:after,[data-v-102893cf]::backdrop{--tw-font-weight:initial}}}.stepper[data-v-102893cf]{z-index:1}.stepper.xs .wrapper[data-v-102893cf]{align-items:center}.stepper.xs .wrapper[data-v-102893cf] .step-connector:first-child .horizontal-line{border-top-left-radius:3.40282e38px;border-bottom-left-radius:3.40282e38px}.stepper.xs .wrapper[data-v-102893cf] .step-connector:last-child .horizontal-line{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.stepper[data-v-102893cf]:not(.xs){justify-content:space-between}.stepper.default[data-v-102893cf] .step-connector .active{border-color:var(--color-primary,#2563eb)}:is(.stepper.default[data-v-102893cf] .step-state.finished,.stepper.default[data-v-102893cf] .step-state.active,.stepper.default[data-v-102893cf] .step-state.active:before){background-color:var(--color-primary,#2563eb)}.stepper.default[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.error[data-v-102893cf] .step-connector .active{border-color:var(--color-error-tertiary,#e73c3e)}:is(.stepper.error[data-v-102893cf] .step-state.finished,.stepper.error[data-v-102893cf] .step-state.active,.stepper.error[data-v-102893cf] .step-state.active:before){background-color:var(--color-error-tertiary,#e73c3e)}.stepper.error[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.warning[data-v-102893cf] .step-connector .active{border-color:var(--color-amber-400,oklch(82.8% .189 84.429))}:is(.stepper.warning[data-v-102893cf] .step-state.finished,.stepper.warning[data-v-102893cf] .step-state.active,.stepper.warning[data-v-102893cf] .step-state.active:before){background-color:var(--color-amber-400,oklch(82.8% .189 84.429))}.stepper.warning[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper.success[data-v-102893cf] .step-connector .active{border-color:var(--color-success-tertiary,#22c55e)}:is(.stepper.success[data-v-102893cf] .step-state.finished,.stepper.success[data-v-102893cf] .step-state.active,.stepper.success[data-v-102893cf] .step-state.active:before){background-color:var(--color-success-tertiary,#22c55e)}.stepper.success[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.disabled[data-v-102893cf] .step-connector .active{background-color:var(--color-input-border,#d1d5db)}:is(.stepper.disabled[data-v-102893cf] .step-state.finished,.stepper.disabled[data-v-102893cf] .step-state.active,.stepper.disabled[data-v-102893cf] .step-state.active:before){background-color:var(--color-input-border,#d1d5db)}.stepper.disabled[data-v-102893cf] .step-state.active:before{background-color:var(--color-neutral-400,oklch(70.8% 0 0))}.stepper.disabled[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper .wrapper[data-v-102893cf]{flex-direction:row;display:flex;position:relative}.stepper .active-step[data-v-102893cf]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}@property --tw-font-weight{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-baadb98e],[data-v-baadb98e]:before,[data-v-baadb98e]:after,[data-v-baadb98e]::backdrop{--tw-border-style:solid}}}.filter-tabs[data-v-baadb98e]{justify-content:space-between;gap:.5625rem;display:flex}[data-v-baadb98e] .tab{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);padding-right:.625rem;padding-left:calc(var(--spacing,.25rem)*4);border-width:1px;flex-grow:1;justify-content:space-between;align-items:center;display:flex}[data-v-baadb98e] .tab:not(.active){border-color:var(--color-border-primary,#d1d5db)}[data-v-baadb98e] .tab:not(.active):where(.dark,.dark *){color:var(--color-neutral-400,oklch(70.8% 0 0))}[data-v-baadb98e] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}[data-v-baadb98e] .tab.active{border-style:var(--tw-border-style);border-width:2px;padding-left:.9375rem;padding-right:.5625rem}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}.container{position:relative;height:100%;color:var(--color-body-text);font-family:var(--font-sans)}.container #probo-product-search-bar{outline:none}.container span.option{display:flex;gap:1rem;align-items:center}.container span.option .title{font-size:1.125rem;font-weight:600;display:block}.container span.option .subtitle{color:#6a7282;font-size:.875rem;line-height:1.25rem;margin-top:.25rem;display:block}`, Yv = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of t)
    a[r] = o;
  return a;
}, Xv = { class: "container" }, Qv = {
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
    const t = e, a = Je(new Gv({ proxy: "" })), r = ee(null);
    he(a, () => {
      a.language && a.setLanguage(a.language);
    });
    const o = j({
      get: () => a.getConfig(),
      set: (n) => {
        r.value && clearTimeout(r.value), a.updateExternal && (r.value = setTimeout(() => {
          a.setOption(n).getNextOption();
        }, 300));
      }
    }), i = j({
      get: () => a.overwrites.find((n) => n.code === a.product.code) || {},
      set: (n) => {
        a.overwrites.some((s) => s.code === a.product.code) ? a.overwrites = a.overwrites.map(
          (s) => s.code === a.product.code ? { ...s, ...n } : s
        ) : a.overwrites.push(n);
      }
    });
    return ct(async () => {
      window.connectConfiguratorEditor = a, a.isEditor = !0, t.proxy && (a.init({
        proxy: t.proxy,
        language: t.language,
        priceType: t.priceType,
        storeProductsLocally: t.storeProductsLocally,
        callbackUrl: t.callbackUrl,
        internalProductId: t.internalProductId,
        hideDeliverySection: t.hideDeliverySection
      }), t.productCode && await (await a.setProduct(t.productCode)).getNextOption());
    }), (n, l) => (w(), C("div", Xv, [
      a.alert.title ? (w(), te(k(Yr), Br(De({ key: 0 }, a.alert)), null, 16)) : W("", !0),
      K(k(Vv), {
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
}, sr = /* @__PURE__ */ Yv(Qv, [["styles", [Jv]]]), em = /* @__PURE__ */ _c({
  ...sr,
  setup(e, t) {
    return To(sr).use(Lc), Zt.autoDetectLanguage = !1, sr.setup ? sr.setup(e, t) : null;
  }
});
customElements.define("connect-configurator-editor", em);
