/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Uo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const a of e.split(",")) t[a] = 1;
  return (a) => a in t;
}
const fe = {}, ka = [], _t = () => {
}, $s = () => !1, Ir = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ho = (e) => e.startsWith("onUpdate:"), ze = Object.assign, qo = (e, t) => {
  const a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}, Ss = Object.prototype.hasOwnProperty, ve = (e, t) => Ss.call(e, t), J = Array.isArray, _a = (e) => tr(e) === "[object Map]", Oa = (e) => tr(e) === "[object Set]", bi = (e) => tr(e) === "[object Date]", re = (e) => typeof e == "function", Ee = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", $e = (e) => e !== null && typeof e == "object", zn = (e) => ($e(e) || re(e)) && re(e.then) && re(e.catch), An = Object.prototype.toString, tr = (e) => An.call(e), Cs = (e) => tr(e).slice(8, -1), jr = (e) => tr(e) === "[object Object]", Ko = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fa = /* @__PURE__ */ Uo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Br = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (a) => t[a] || (t[a] = e(a));
}, zs = /-(\w)/g, Re = Br(
  (e) => e.replace(zs, (t, a) => a ? a.toUpperCase() : "")
), As = /\B([A-Z])/g, Je = Br(
  (e) => e.replace(As, "-$1").toLowerCase()
), Lr = Br((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xr = Br(
  (e) => e ? `on${Lr(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), vr = (e, ...t) => {
  for (let a = 0; a < e.length; a++)
    e[a](...t);
}, En = (e, t, a, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: a
  });
}, xr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, yo = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let wi;
const Fr = () => wi || (wi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (J(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const r = e[a], o = Ee(r) ? Vs(r) : St(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ee(e) || $e(e))
    return e;
}
const Es = /;(?![^(]*\))/g, Ts = /:([^]+)/, Os = /\/\*[^]*?\*\//g;
function Vs(e) {
  const t = {};
  return e.replace(Os, "").split(Es).forEach((a) => {
    if (a) {
      const r = a.split(Ts);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function se(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (J(e))
    for (let a = 0; a < e.length; a++) {
      const r = se(e[a]);
      r && (t += r + " ");
    }
  else if ($e(e))
    for (const a in e)
      e[a] && (t += a + " ");
  return t.trim();
}
function za(e) {
  if (!e) return null;
  let { class: t, style: a } = e;
  return t && !Ee(t) && (e.class = se(t)), a && (e.style = St(a)), e;
}
const Ps = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ms = /* @__PURE__ */ Uo(Ps);
function Tn(e) {
  return !!e || e === "";
}
function Is(e, t) {
  if (e.length !== t.length) return !1;
  let a = !0;
  for (let r = 0; a && r < e.length; r++)
    a = va(e[r], t[r]);
  return a;
}
function va(e, t) {
  if (e === t) return !0;
  let a = bi(e), r = bi(t);
  if (a || r)
    return a && r ? e.getTime() === t.getTime() : !1;
  if (a = ht(e), r = ht(t), a || r)
    return e === t;
  if (a = J(e), r = J(t), a || r)
    return a && r ? Is(e, t) : !1;
  if (a = $e(e), r = $e(t), a || r) {
    if (!a || !r)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const n in e) {
      const l = e.hasOwnProperty(n), s = t.hasOwnProperty(n);
      if (l && !s || !l && s || !va(e[n], t[n]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wo(e, t) {
  return e.findIndex((a) => va(a, t));
}
const On = (e) => !!(e && e.__v_isRef === !0), U = (e) => Ee(e) ? e : e == null ? "" : J(e) || $e(e) && (e.toString === An || !re(e.toString)) ? On(e) ? U(e.value) : JSON.stringify(e, Vn, 2) : String(e), Vn = (e, t) => On(t) ? Vn(e, t.value) : _a(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (a, [r, o], i) => (a[Qr(r, i) + " =>"] = o, a),
    {}
  )
} : Oa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((a) => Qr(a))
} : ht(t) ? Qr(t) : $e(t) && !J(t) && !jr(t) ? String(t) : t, Qr = (e, t = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ht(e) ? `Symbol(${(a = e.description) != null ? a : t})` : e
  );
};
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let He;
class js {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = He, !t && He && (this.index = (He.scopes || (He.scopes = [])).push(
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
      const a = He;
      try {
        return He = this, t();
      } finally {
        He = a;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    He = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    He = this.parent;
  }
  stop(t) {
    if (this._active) {
      let a, r;
      for (a = 0, r = this.effects.length; a < r; a++)
        this.effects[a].stop();
      for (a = 0, r = this.cleanups.length; a < r; a++)
        this.cleanups[a]();
      if (this.scopes)
        for (a = 0, r = this.scopes.length; a < r; a++)
          this.scopes[a].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Pn() {
  return He;
}
function Bs(e, t = !1) {
  He && He.cleanups.push(e);
}
let Ce;
const eo = /* @__PURE__ */ new WeakSet();
class Mn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, He && He.active && He.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || jn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yi(this), Bn(this);
    const t = Ce, a = ft;
    Ce = this, ft = !0;
    try {
      return this.fn();
    } finally {
      Ln(this), Ce = t, ft = a, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Go(t);
      this.deps = this.depsTail = void 0, yi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? eo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xo(this) && this.run();
  }
  get dirty() {
    return xo(this);
  }
}
let In = 0, Da, Na;
function jn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Na, Na = e;
    return;
  }
  e.next = Da, Da = e;
}
function Zo() {
  In++;
}
function Jo() {
  if (--In > 0)
    return;
  if (Na) {
    let t = Na;
    for (Na = void 0; t; ) {
      const a = t.next;
      t.next = void 0, t.flags &= -9, t = a;
    }
  }
  let e;
  for (; Da; ) {
    let t = Da;
    for (Da = void 0; t; ) {
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
function Bn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ln(e) {
  let t, a = e.depsTail, r = a;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === a && (a = o), Go(r), Ls(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = a;
}
function xo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Fn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ha))
    return;
  e.globalVersion = Ha;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !xo(e)) {
    e.flags &= -3;
    return;
  }
  const a = Ce, r = ft;
  Ce = e, ft = !0;
  try {
    Bn(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ze(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ce = a, ft = r, Ln(e), e.flags &= -3;
  }
}
function Go(e, t = !1) {
  const { dep: a, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), a.subs === e && (a.subs = r, !r && a.computed)) {
    a.computed.flags &= -5;
    for (let i = a.computed.deps; i; i = i.nextDep)
      Go(i, !0);
  }
  !t && !--a.sc && a.map && a.map.delete(a.key);
}
function Ls(e) {
  const { prevDep: t, nextDep: a } = e;
  t && (t.nextDep = a, e.prevDep = void 0), a && (a.prevDep = t, e.nextDep = void 0);
}
let ft = !0;
const Dn = [];
function Xt() {
  Dn.push(ft), ft = !1;
}
function Qt() {
  const e = Dn.pop();
  ft = e === void 0 ? !0 : e;
}
function yi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const a = Ce;
    Ce = void 0;
    try {
      t();
    } finally {
      Ce = a;
    }
  }
}
let Ha = 0;
class Fs {
  constructor(t, a) {
    this.sub = t, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Ce || !ft || Ce === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== Ce)
      a = this.activeLink = new Fs(Ce, this), Ce.deps ? (a.prevDep = Ce.depsTail, Ce.depsTail.nextDep = a, Ce.depsTail = a) : Ce.deps = Ce.depsTail = a, Nn(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const r = a.nextDep;
      r.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = r), a.prevDep = Ce.depsTail, a.nextDep = void 0, Ce.depsTail.nextDep = a, Ce.depsTail = a, Ce.deps === a && (Ce.deps = r);
    }
    return a;
  }
  trigger(t) {
    this.version++, Ha++, this.notify(t);
  }
  notify(t) {
    Zo();
    try {
      for (let a = this.subs; a; a = a.prevSub)
        a.sub.notify() && a.sub.dep.notify();
    } finally {
      Jo();
    }
  }
}
function Nn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Nn(r);
    }
    const a = e.dep.subs;
    a !== e && (e.prevSub = a, a && (a.nextSub = e)), e.dep.subs = e;
  }
}
const kr = /* @__PURE__ */ new WeakMap(), ua = Symbol(
  ""
), ko = Symbol(
  ""
), qa = Symbol(
  ""
);
function De(e, t, a) {
  if (ft && Ce) {
    let r = kr.get(e);
    r || kr.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(a);
    o || (r.set(a, o = new Dr()), o.map = r, o.key = a), o.track();
  }
}
function Et(e, t, a, r, o, i) {
  const n = kr.get(e);
  if (!n) {
    Ha++;
    return;
  }
  const l = (s) => {
    s && s.trigger();
  };
  if (Zo(), t === "clear")
    n.forEach(l);
  else {
    const s = J(e), d = s && Ko(a);
    if (s && a === "length") {
      const c = Number(r);
      n.forEach((u, f) => {
        (f === "length" || f === qa || !ht(f) && f >= c) && l(u);
      });
    } else
      switch ((a !== void 0 || n.has(void 0)) && l(n.get(a)), d && l(n.get(qa)), t) {
        case "add":
          s ? d && l(n.get("length")) : (l(n.get(ua)), _a(e) && l(n.get(ko)));
          break;
        case "delete":
          s || (l(n.get(ua)), _a(e) && l(n.get(ko)));
          break;
        case "set":
          _a(e) && l(n.get(ua));
          break;
      }
  }
  Jo();
}
function Ds(e, t) {
  const a = kr.get(e);
  return a && a.get(t);
}
function wa(e) {
  const t = pe(e);
  return t === e ? t : (De(t, "iterate", qa), nt(e) ? t : t.map(Ne));
}
function Nr(e) {
  return De(e = pe(e), "iterate", qa), e;
}
const Ns = {
  __proto__: null,
  [Symbol.iterator]() {
    return to(this, Symbol.iterator, Ne);
  },
  concat(...e) {
    return wa(this).concat(
      ...e.map((t) => J(t) ? wa(t) : t)
    );
  },
  entries() {
    return to(this, "entries", (e) => (e[1] = Ne(e[1]), e));
  },
  every(e, t) {
    return zt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zt(this, "filter", e, t, (a) => a.map(Ne), arguments);
  },
  find(e, t) {
    return zt(this, "find", e, t, Ne, arguments);
  },
  findIndex(e, t) {
    return zt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zt(this, "findLast", e, t, Ne, arguments);
  },
  findLastIndex(e, t) {
    return zt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return zt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ao(this, "includes", e);
  },
  indexOf(...e) {
    return ao(this, "indexOf", e);
  },
  join(e) {
    return wa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ao(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ma(this, "pop");
  },
  push(...e) {
    return Ma(this, "push", e);
  },
  reduce(e, ...t) {
    return xi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return xi(this, "reduceRight", e, t);
  },
  shift() {
    return Ma(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return zt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ma(this, "splice", e);
  },
  toReversed() {
    return wa(this).toReversed();
  },
  toSorted(e) {
    return wa(this).toSorted(e);
  },
  toSpliced(...e) {
    return wa(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ma(this, "unshift", e);
  },
  values() {
    return to(this, "values", Ne);
  }
};
function to(e, t, a) {
  const r = Nr(e), o = r[t]();
  return r !== e && !nt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = a(i.value)), i;
  }), o;
}
const Rs = Array.prototype;
function zt(e, t, a, r, o, i) {
  const n = Nr(e), l = n !== e && !nt(e), s = n[t];
  if (s !== Rs[t]) {
    const u = s.apply(e, i);
    return l ? Ne(u) : u;
  }
  let d = a;
  n !== e && (l ? d = function(u, f) {
    return a.call(this, Ne(u), f, e);
  } : a.length > 2 && (d = function(u, f) {
    return a.call(this, u, f, e);
  }));
  const c = s.call(n, d, r);
  return l && o ? o(c) : c;
}
function xi(e, t, a, r) {
  const o = Nr(e);
  let i = a;
  return o !== e && (nt(e) ? a.length > 3 && (i = function(n, l, s) {
    return a.call(this, n, l, s, e);
  }) : i = function(n, l, s) {
    return a.call(this, n, Ne(l), s, e);
  }), o[t](i, ...r);
}
function ao(e, t, a) {
  const r = pe(e);
  De(r, "iterate", qa);
  const o = r[t](...a);
  return (o === -1 || o === !1) && Qo(a[0]) ? (a[0] = pe(a[0]), r[t](...a)) : o;
}
function Ma(e, t, a = []) {
  Xt(), Zo();
  const r = pe(e)[t].apply(e, a);
  return Jo(), Qt(), r;
}
const Us = /* @__PURE__ */ Uo("__proto__,__v_isRef,__isVue"), Rn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
);
function Hs(e) {
  ht(e) || (e = String(e));
  const t = pe(this);
  return De(t, "has", e), t.hasOwnProperty(e);
}
class Un {
  constructor(t = !1, a = !1) {
    this._isReadonly = t, this._isShallow = a;
  }
  get(t, a, r) {
    const o = this._isReadonly, i = this._isShallow;
    if (a === "__v_isReactive")
      return !o;
    if (a === "__v_isReadonly")
      return o;
    if (a === "__v_isShallow")
      return i;
    if (a === "__v_raw")
      return r === (o ? i ? ed : Wn : i ? Kn : qn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const n = J(t);
    if (!o) {
      let s;
      if (n && (s = Ns[a]))
        return s;
      if (a === "hasOwnProperty")
        return Hs;
    }
    const l = Reflect.get(
      t,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Oe(t) ? t : r
    );
    return (ht(a) ? Rn.has(a) : Us(a)) || (o || De(t, "get", a), i) ? l : Oe(l) ? n && Ko(a) ? l : l.value : $e(l) ? o ? Zn(l) : je(l) : l;
  }
}
class Hn extends Un {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, a, r, o) {
    let i = t[a];
    if (!this._isShallow) {
      const s = Wt(i);
      if (!nt(r) && !Wt(r) && (i = pe(i), r = pe(r)), !J(t) && Oe(i) && !Oe(r))
        return s ? !1 : (i.value = r, !0);
    }
    const n = J(t) && Ko(a) ? Number(a) < t.length : ve(t, a), l = Reflect.set(
      t,
      a,
      r,
      Oe(t) ? t : o
    );
    return t === pe(o) && (n ? Ze(r, i) && Et(t, "set", a, r) : Et(t, "add", a, r)), l;
  }
  deleteProperty(t, a) {
    const r = ve(t, a);
    t[a];
    const o = Reflect.deleteProperty(t, a);
    return o && r && Et(t, "delete", a, void 0), o;
  }
  has(t, a) {
    const r = Reflect.has(t, a);
    return (!ht(a) || !Rn.has(a)) && De(t, "has", a), r;
  }
  ownKeys(t) {
    return De(
      t,
      "iterate",
      J(t) ? "length" : ua
    ), Reflect.ownKeys(t);
  }
}
class qs extends Un {
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
const Ks = /* @__PURE__ */ new Hn(), Ws = /* @__PURE__ */ new qs(), Zs = /* @__PURE__ */ new Hn(!0);
const _o = (e) => e, sr = (e) => Reflect.getPrototypeOf(e);
function Js(e, t, a) {
  return function(...r) {
    const o = this.__v_raw, i = pe(o), n = _a(i), l = e === "entries" || e === Symbol.iterator && n, s = e === "keys" && n, d = o[e](...r), c = a ? _o : t ? $o : Ne;
    return !t && De(
      i,
      "iterate",
      s ? ko : ua
    ), {
      // iterator protocol
      next() {
        const { value: u, done: f } = d.next();
        return f ? { value: u, done: f } : {
          value: l ? [c(u[0]), c(u[1])] : c(u),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function dr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Gs(e, t) {
  const a = {
    get(o) {
      const i = this.__v_raw, n = pe(i), l = pe(o);
      e || (Ze(o, l) && De(n, "get", o), De(n, "get", l));
      const { has: s } = sr(n), d = t ? _o : e ? $o : Ne;
      if (s.call(n, o))
        return d(i.get(o));
      if (s.call(n, l))
        return d(i.get(l));
      i !== n && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && De(pe(o), "iterate", ua), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, n = pe(i), l = pe(o);
      return e || (Ze(o, l) && De(n, "has", o), De(n, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const n = this, l = n.__v_raw, s = pe(l), d = t ? _o : e ? $o : Ne;
      return !e && De(s, "iterate", ua), l.forEach((c, u) => o.call(i, d(c), d(u), n));
    }
  };
  return ze(
    a,
    e ? {
      add: dr("add"),
      set: dr("set"),
      delete: dr("delete"),
      clear: dr("clear")
    } : {
      add(o) {
        !t && !nt(o) && !Wt(o) && (o = pe(o));
        const i = pe(this);
        return sr(i).has.call(i, o) || (i.add(o), Et(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !nt(i) && !Wt(i) && (i = pe(i));
        const n = pe(this), { has: l, get: s } = sr(n);
        let d = l.call(n, o);
        d || (o = pe(o), d = l.call(n, o));
        const c = s.call(n, o);
        return n.set(o, i), d ? Ze(i, c) && Et(n, "set", o, i) : Et(n, "add", o, i), this;
      },
      delete(o) {
        const i = pe(this), { has: n, get: l } = sr(i);
        let s = n.call(i, o);
        s || (o = pe(o), s = n.call(i, o)), l && l.call(i, o);
        const d = i.delete(o);
        return s && Et(i, "delete", o, void 0), d;
      },
      clear() {
        const o = pe(this), i = o.size !== 0, n = o.clear();
        return i && Et(
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
    a[o] = Js(o, e, t);
  }), a;
}
function Yo(e, t) {
  const a = Gs(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ve(a, o) && o in r ? a : r,
    o,
    i
  );
}
const Ys = {
  get: /* @__PURE__ */ Yo(!1, !1)
}, Xs = {
  get: /* @__PURE__ */ Yo(!1, !0)
}, Qs = {
  get: /* @__PURE__ */ Yo(!0, !1)
};
const qn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), ed = /* @__PURE__ */ new WeakMap();
function td(e) {
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
function ad(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : td(Cs(e));
}
function je(e) {
  return Wt(e) ? e : Xo(
    e,
    !1,
    Ks,
    Ys,
    qn
  );
}
function rd(e) {
  return Xo(
    e,
    !1,
    Zs,
    Xs,
    Kn
  );
}
function Zn(e) {
  return Xo(
    e,
    !0,
    Ws,
    Qs,
    Wn
  );
}
function Xo(e, t, a, r, o) {
  if (!$e(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const n = ad(e);
  if (n === 0)
    return e;
  const l = new Proxy(
    e,
    n === 2 ? r : a
  );
  return o.set(e, l), l;
}
function pa(e) {
  return Wt(e) ? pa(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
function nt(e) {
  return !!(e && e.__v_isShallow);
}
function Qo(e) {
  return e ? !!e.__v_raw : !1;
}
function pe(e) {
  const t = e && e.__v_raw;
  return t ? pe(t) : e;
}
function od(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && En(e, "__v_skip", !0), e;
}
const Ne = (e) => $e(e) ? je(e) : e, $o = (e) => $e(e) ? Zn(e) : e;
function Oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function F(e) {
  return Jn(e, !1);
}
function Vt(e) {
  return Jn(e, !0);
}
function Jn(e, t) {
  return Oe(e) ? e : new id(e, t);
}
class id {
  constructor(t, a) {
    this.dep = new Dr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? t : pe(t), this._value = a ? t : Ne(t), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const a = this._rawValue, r = this.__v_isShallow || nt(t) || Wt(t);
    t = r ? t : pe(t), Ze(t, a) && (this._rawValue = t, this._value = r ? t : Ne(t), this.dep.trigger());
  }
}
function ki(e) {
  e.dep && e.dep.trigger();
}
function z(e) {
  return Oe(e) ? e.value : e;
}
function lt(e) {
  return re(e) ? e() : z(e);
}
const nd = {
  get: (e, t, a) => t === "__v_raw" ? e : z(Reflect.get(e, t, a)),
  set: (e, t, a, r) => {
    const o = e[t];
    return Oe(o) && !Oe(a) ? (o.value = a, !0) : Reflect.set(e, t, a, r);
  }
};
function Gn(e) {
  return pa(e) ? e : new Proxy(e, nd);
}
class ld {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const a = this.dep = new Dr(), { get: r, set: o } = t(a.track.bind(a), a.trigger.bind(a));
    this._get = r, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function sd(e) {
  return new ld(e);
}
function dd(e) {
  const t = J(e) ? new Array(e.length) : {};
  for (const a in e)
    t[a] = ud(e, a);
  return t;
}
class cd {
  constructor(t, a, r) {
    this._object = t, this._key = a, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ds(pe(this._object), this._key);
  }
}
function ud(e, t, a) {
  const r = e[t];
  return Oe(r) ? r : new cd(e, t, a);
}
class pd {
  constructor(t, a, r) {
    this.fn = t, this.setter = a, this._value = void 0, this.dep = new Dr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ha - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ce !== this)
      return jn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Fn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function fd(e, t, a = !1) {
  let r, o;
  return re(e) ? r = e : (r = e.get, o = e.set), new pd(r, o, a);
}
const cr = {}, _r = /* @__PURE__ */ new WeakMap();
let la;
function hd(e, t = !1, a = la) {
  if (a) {
    let r = _r.get(a);
    r || _r.set(a, r = []), r.push(e);
  }
}
function vd(e, t, a = fe) {
  const { immediate: r, deep: o, once: i, scheduler: n, augmentJob: l, call: s } = a, d = (_) => o ? _ : nt(_) || o === !1 || o === 0 ? Tt(_, 1) : Tt(_);
  let c, u, f, m, p = !1, h = !1;
  if (Oe(e) ? (u = () => e.value, p = nt(e)) : pa(e) ? (u = () => d(e), p = !0) : J(e) ? (h = !0, p = e.some((_) => pa(_) || nt(_)), u = () => e.map((_) => {
    if (Oe(_))
      return _.value;
    if (pa(_))
      return d(_);
    if (re(_))
      return s ? s(_, 2) : _();
  })) : re(e) ? t ? u = s ? () => s(e, 2) : e : u = () => {
    if (f) {
      Xt();
      try {
        f();
      } finally {
        Qt();
      }
    }
    const _ = la;
    la = c;
    try {
      return s ? s(e, 3, [m]) : e(m);
    } finally {
      la = _;
    }
  } : u = _t, t && o) {
    const _ = u, $ = o === !0 ? 1 / 0 : o;
    u = () => Tt(_(), $);
  }
  const v = Pn(), g = () => {
    c.stop(), v && qo(v.effects, c);
  };
  if (i && t) {
    const _ = t;
    t = (...$) => {
      _(...$), g();
    };
  }
  let x = h ? new Array(e.length).fill(cr) : cr;
  const k = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_))
      if (t) {
        const $ = c.run();
        if (o || p || (h ? $.some((A, le) => Ze(A, x[le])) : Ze($, x))) {
          f && f();
          const A = la;
          la = c;
          try {
            const le = [
              $,
              // pass undefined as the old value when it's changed for the first time
              x === cr ? void 0 : h && x[0] === cr ? [] : x,
              m
            ];
            s ? s(t, 3, le) : (
              // @ts-expect-error
              t(...le)
            ), x = $;
          } finally {
            la = A;
          }
        }
      } else
        c.run();
  };
  return l && l(k), c = new Mn(u), c.scheduler = n ? () => n(k, !1) : k, m = (_) => hd(_, !1, c), f = c.onStop = () => {
    const _ = _r.get(c);
    if (_) {
      if (s)
        s(_, 4);
      else
        for (const $ of _) $();
      _r.delete(c);
    }
  }, t ? r ? k(!0) : x = c.run() : n ? n(k.bind(null, !0), !0) : c.run(), g.pause = c.pause.bind(c), g.resume = c.resume.bind(c), g.stop = g, g;
}
function Tt(e, t = 1 / 0, a) {
  if (t <= 0 || !$e(e) || e.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(e)))
    return e;
  if (a.add(e), t--, Oe(e))
    Tt(e.value, t, a);
  else if (J(e))
    for (let r = 0; r < e.length; r++)
      Tt(e[r], t, a);
  else if (Oa(e) || _a(e))
    e.forEach((r) => {
      Tt(r, t, a);
    });
  else if (jr(e)) {
    for (const r in e)
      Tt(e[r], t, a);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Tt(e[r], t, a);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ar(e, t, a, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Rr(o, t, a);
  }
}
function vt(e, t, a, r) {
  if (re(e)) {
    const o = ar(e, t, a, r);
    return o && zn(o) && o.catch((i) => {
      Rr(i, t, a);
    }), o;
  }
  if (J(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(vt(e[i], t, a, r));
    return o;
  }
}
function Rr(e, t, a, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: n } = t && t.appContext.config || fe;
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
      Xt(), ar(i, null, 10, [
        e,
        s,
        d
      ]), Qt();
      return;
    }
  }
  md(e, a, o, r, n);
}
function md(e, t, a, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const qe = [];
let bt = -1;
const $a = [];
let Rt = null, ya = 0;
const Yn = /* @__PURE__ */ Promise.resolve();
let $r = null;
function Ct(e) {
  const t = $r || Yn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gd(e) {
  let t = bt + 1, a = qe.length;
  for (; t < a; ) {
    const r = t + a >>> 1, o = qe[r], i = Ka(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : a = r;
  }
  return t;
}
function ei(e) {
  if (!(e.flags & 1)) {
    const t = Ka(e), a = qe[qe.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ka(a) ? qe.push(e) : qe.splice(gd(t), 0, e), e.flags |= 1, Xn();
  }
}
function Xn() {
  $r || ($r = Yn.then(el));
}
function bd(e) {
  J(e) ? $a.push(...e) : Rt && e.id === -1 ? Rt.splice(ya + 1, 0, e) : e.flags & 1 || ($a.push(e), e.flags |= 1), Xn();
}
function _i(e, t, a = bt + 1) {
  for (; a < qe.length; a++) {
    const r = qe[a];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      qe.splice(a, 1), a--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Qn(e) {
  if ($a.length) {
    const t = [...new Set($a)].sort(
      (a, r) => Ka(a) - Ka(r)
    );
    if ($a.length = 0, Rt) {
      Rt.push(...t);
      return;
    }
    for (Rt = t, ya = 0; ya < Rt.length; ya++) {
      const a = Rt[ya];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    Rt = null, ya = 0;
  }
}
const Ka = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function el(e) {
  try {
    for (bt = 0; bt < qe.length; bt++) {
      const t = qe[bt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ar(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; bt < qe.length; bt++) {
      const t = qe[bt];
      t && (t.flags &= -2);
    }
    bt = -1, qe.length = 0, Qn(), $r = null, (qe.length || $a.length) && el();
  }
}
let Pe = null, tl = null;
function Sr(e) {
  const t = Pe;
  return Pe = e, tl = e && e.type.__scopeId || null, t;
}
function Z(e, t = Pe, a) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Vi(-1);
    const i = Sr(t);
    let n;
    try {
      n = e(...o);
    } finally {
      Sr(i), r._d && Vi(1);
    }
    return n;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ma(e, t) {
  if (Pe === null)
    return e;
  const a = Zr(Pe), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, n, l, s = fe] = t[o];
    i && (re(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Tt(n), r.push({
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
function ra(e, t, a, r) {
  const o = e.dirs, i = t && t.dirs;
  for (let n = 0; n < o.length; n++) {
    const l = o[n];
    i && (l.oldValue = i[n].value);
    let s = l.dir[r];
    s && (Xt(), vt(s, a, 8, [
      e.el,
      l,
      e,
      t
    ]), Qt());
  }
}
const wd = Symbol("_vte"), al = (e) => e.__isTeleport, Ut = Symbol("_leaveCb"), ur = Symbol("_enterCb");
function yd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), Va(() => {
    e.isUnmounting = !0;
  }), e;
}
const rt = [Function, Array], rl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: rt,
  onEnter: rt,
  onAfterEnter: rt,
  onEnterCancelled: rt,
  // leave
  onBeforeLeave: rt,
  onLeave: rt,
  onAfterLeave: rt,
  onLeaveCancelled: rt,
  // appear
  onBeforeAppear: rt,
  onAppear: rt,
  onAfterAppear: rt,
  onAppearCancelled: rt
}, ol = (e) => {
  const t = e.subTree;
  return t.component ? ol(t.component) : t;
}, xd = {
  name: "BaseTransition",
  props: rl,
  setup(e, { slots: t }) {
    const a = Lt(), r = yd();
    return () => {
      const o = t.default && ll(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = il(o), n = pe(e), { mode: l } = n;
      if (r.isLeaving)
        return ro(i);
      const s = $i(i);
      if (!s)
        return ro(i);
      let d = So(
        s,
        n,
        r,
        a,
        // #11061, ensure enterHooks is fresh after clone
        (f) => d = f
      );
      s.type !== Ke && Wa(s, d);
      const c = a.subTree, u = c && $i(c);
      if (u && u.type !== Ke && !sa(s, u) && ol(a).type !== Ke) {
        const f = So(
          u,
          n,
          r,
          a
        );
        if (Wa(u, f), l === "out-in" && s.type !== Ke)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, a.job.flags & 8 || a.update(), delete f.afterLeave;
          }, ro(i);
        l === "in-out" && s.type !== Ke && (f.delayLeave = (m, p, h) => {
          const v = nl(
            r,
            u
          );
          v[String(u.key)] = u, m[Ut] = () => {
            p(), m[Ut] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = h;
        });
      }
      return i;
    };
  }
};
function il(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const a of e)
      if (a.type !== Ke) {
        t = a;
        break;
      }
  }
  return t;
}
const kd = xd;
function nl(e, t) {
  const { leavingVNodes: a } = e;
  let r = a.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), a.set(t.type, r)), r;
}
function So(e, t, a, r, o) {
  const {
    appear: i,
    mode: n,
    persisted: l = !1,
    onBeforeEnter: s,
    onEnter: d,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: m,
    onAfterLeave: p,
    onLeaveCancelled: h,
    onBeforeAppear: v,
    onAppear: g,
    onAfterAppear: x,
    onAppearCancelled: k
  } = t, _ = String(e.key), $ = nl(a, e), A = (O, M) => {
    O && vt(
      O,
      r,
      9,
      M
    );
  }, le = (O, M) => {
    const q = M[1];
    A(O, M), J(O) ? O.every((B) => B.length <= 1) && q() : O.length <= 1 && q();
  }, ie = {
    mode: n,
    persisted: l,
    beforeEnter(O) {
      let M = s;
      if (!a.isMounted)
        if (i)
          M = v || s;
        else
          return;
      O[Ut] && O[Ut](
        !0
        /* cancelled */
      );
      const q = $[_];
      q && sa(e, q) && q.el[Ut] && q.el[Ut](), A(M, [O]);
    },
    enter(O) {
      let M = d, q = c, B = u;
      if (!a.isMounted)
        if (i)
          M = g || d, q = x || c, B = k || u;
        else
          return;
      let te = !1;
      const he = O[ur] = (Me) => {
        te || (te = !0, Me ? A(B, [O]) : A(q, [O]), ie.delayedLeave && ie.delayedLeave(), O[ur] = void 0);
      };
      M ? le(M, [O, he]) : he();
    },
    leave(O, M) {
      const q = String(e.key);
      if (O[ur] && O[ur](
        !0
        /* cancelled */
      ), a.isUnmounting)
        return M();
      A(f, [O]);
      let B = !1;
      const te = O[Ut] = (he) => {
        B || (B = !0, M(), he ? A(h, [O]) : A(p, [O]), O[Ut] = void 0, $[q] === e && delete $[q]);
      };
      $[q] = e, m ? le(m, [O, te]) : te();
    },
    clone(O) {
      const M = So(
        O,
        t,
        a,
        r,
        o
      );
      return o && o(M), M;
    }
  };
  return ie;
}
function ro(e) {
  if (Ur(e))
    return e = Jt(e), e.children = null, e;
}
function $i(e) {
  if (!Ur(e))
    return al(e.type) && e.children ? il(e.children) : e;
  const { shapeFlag: t, children: a } = e;
  if (a) {
    if (t & 16)
      return a[0];
    if (t & 32 && re(a.default))
      return a.default();
  }
}
function Wa(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Wa(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ll(e, t = !1, a) {
  let r = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    const l = a == null ? n.key : String(a) + String(n.key != null ? n.key : i);
    n.type === be ? (n.patchFlag & 128 && o++, r = r.concat(
      ll(n.children, t, l)
    )) : (t || n.type !== Ke) && r.push(l != null ? Jt(n, { key: l }) : n);
  }
  if (o > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _d(e, t) {
  return re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function sl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xa(e) {
  const t = Lt(), a = Vt(null);
  if (t) {
    const o = t.refs === fe ? t.refs = {} : t.refs;
    Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    });
  }
  return a;
}
function Co(e, t, a, r, o = !1) {
  if (J(e)) {
    e.forEach(
      (p, h) => Co(
        p,
        t && (J(t) ? t[h] : t),
        a,
        r,
        o
      )
    );
    return;
  }
  if (Sa(r) && !o)
    return;
  const i = r.shapeFlag & 4 ? Zr(r.component) : r.el, n = o ? null : i, { i: l, r: s } = e, d = t && t.r, c = l.refs === fe ? l.refs = {} : l.refs, u = l.setupState, f = pe(u), m = u === fe ? () => !1 : (p) => ve(f, p);
  if (d != null && d !== s && (Ee(d) ? (c[d] = null, m(d) && (u[d] = null)) : Oe(d) && (d.value = null)), re(s))
    ar(s, l, 12, [n, c]);
  else {
    const p = Ee(s), h = Oe(s);
    if (p || h) {
      const v = () => {
        if (e.f) {
          const g = p ? m(s) ? u[s] : c[s] : s.value;
          o ? J(g) && qo(g, i) : J(g) ? g.includes(i) || g.push(i) : p ? (c[s] = [i], m(s) && (u[s] = c[s])) : (s.value = [i], e.k && (c[e.k] = s.value));
        } else p ? (c[s] = n, m(s) && (u[s] = n)) : h && (s.value = n, e.k && (c[e.k] = n));
      };
      n ? (v.id = -1, Qe(v, a)) : v();
    }
  }
}
Fr().requestIdleCallback;
Fr().cancelIdleCallback;
const Sa = (e) => !!e.type.__asyncLoader, Ur = (e) => e.type.__isKeepAlive;
function $d(e, t) {
  dl(e, "a", t);
}
function Sd(e, t) {
  dl(e, "da", t);
}
function dl(e, t, a = Ie) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = a;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Hr(t, r, a), a) {
    let o = a.parent;
    for (; o && o.parent; )
      Ur(o.parent.vnode) && Cd(r, t, a, o), o = o.parent;
  }
}
function Cd(e, t, a, r) {
  const o = Hr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  rr(() => {
    qo(r[t], o);
  }, a);
}
function Hr(e, t, a = Ie, r = !1) {
  if (a) {
    const o = a[e] || (a[e] = []), i = t.__weh || (t.__weh = (...n) => {
      Xt();
      const l = ir(a), s = vt(t, a, e, n);
      return l(), Qt(), s;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Bt = (e) => (t, a = Ie) => {
  (!Ga || e === "sp") && Hr(e, (...r) => t(...r), a);
}, ti = Bt("bm"), at = Bt("m"), zd = Bt(
  "bu"
), Ad = Bt("u"), Va = Bt(
  "bum"
), rr = Bt("um"), Ed = Bt(
  "sp"
), Td = Bt("rtg"), Od = Bt("rtc");
function Vd(e, t = Ie) {
  Hr("ec", e, t);
}
const Pd = "components", cl = Symbol.for("v-ndc");
function Aa(e) {
  return Ee(e) ? Md(Pd, e, !1) || e : e || cl;
}
function Md(e, t, a = !0, r = !1) {
  const o = Pe || Ie;
  if (o) {
    const i = o.type;
    {
      const l = wc(
        i,
        !1
      );
      if (l && (l === t || l === Re(t) || l === Lr(Re(t))))
        return i;
    }
    const n = (
      // local registration
      // check instance[type] first which is resolved for options API
      Si(o[e] || i[e], t) || // global registration
      Si(o.appContext[e], t)
    );
    return !n && r ? i : n;
  }
}
function Si(e, t) {
  return e && (e[t] || e[Re(t)] || e[Lr(Re(t))]);
}
function Zt(e, t, a, r) {
  let o;
  const i = a, n = J(e);
  if (n || Ee(e)) {
    const l = n && pa(e);
    let s = !1;
    l && (s = !nt(e), e = Nr(e)), o = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      o[d] = t(
        s ? Ne(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i);
  } else if ($e(e))
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
    if (J(r))
      for (let o = 0; o < r.length; o++)
        e[r[o].name] = r[o].fn;
    else r && (e[r.name] = r.key ? (...o) => {
      const i = r.fn(...o);
      return i && (i.key = r.key), i;
    } : r.fn);
  }
  return e;
}
function Q(e, t, a = {}, r, o) {
  if (Pe.ce || Pe.parent && Sa(Pe.parent) && Pe.parent.ce)
    return t !== "default" && (a.name = t), w(), W(
      be,
      null,
      [G("slot", a, r && r())],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), w();
  const n = i && ul(i(a)), l = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  n && n.key, s = W(
    be,
    {
      key: (l && !ht(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!n && r ? "_fb" : "")
    },
    n || (r ? r() : []),
    n && e._ === 1 ? 64 : -2
  );
  return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s;
}
function ul(e) {
  return e.some((t) => Ja(t) ? !(t.type === Ke || t.type === be && !ul(t.children)) : !0) ? e : null;
}
const zo = (e) => e ? Pl(e) ? Zr(e) : zo(e.parent) : null, Ra = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ze(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zo(e.parent),
    $root: (e) => zo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ai(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ei(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ct.bind(e.proxy)),
    $watch: (e) => oc.bind(e)
  })
), io = (e, t) => e !== fe && !e.__isScriptSetup && ve(e, t), Id = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: a, setupState: r, data: o, props: i, accessCache: n, type: l, appContext: s } = e;
    let d;
    if (t[0] !== "$") {
      const m = n[t];
      if (m !== void 0)
        switch (m) {
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
        if (o !== fe && ve(o, t))
          return n[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && ve(d, t)
        )
          return n[t] = 3, i[t];
        if (a !== fe && ve(a, t))
          return n[t] = 4, a[t];
        Ao && (n[t] = 0);
      }
    }
    const c = Ra[t];
    let u, f;
    if (c)
      return t === "$attrs" && De(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (a !== fe && ve(a, t))
      return n[t] = 4, a[t];
    if (
      // global properties
      f = s.config.globalProperties, ve(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, a) {
    const { data: r, setupState: o, ctx: i } = e;
    return io(o, t) ? (o[t] = a, !0) : r !== fe && ve(r, t) ? (r[t] = a, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = a, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: a, ctx: r, appContext: o, propsOptions: i }
  }, n) {
    let l;
    return !!a[n] || e !== fe && ve(e, n) || io(t, n) || (l = i[0]) && ve(l, n) || ve(r, n) || ve(Ra, n) || ve(o.config.globalProperties, n);
  },
  defineProperty(e, t, a) {
    return a.get != null ? e._.accessCache[t] = 0 : ve(a, "value") && this.set(e, t, a.value, null), Reflect.defineProperty(e, t, a);
  }
};
function pl() {
  return jd().slots;
}
function jd() {
  const e = Lt();
  return e.setupContext || (e.setupContext = Il(e));
}
function Cr(e) {
  return J(e) ? e.reduce(
    (t, a) => (t[a] = null, t),
    {}
  ) : e;
}
function Mt(e, t) {
  return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : ze({}, Cr(e), Cr(t));
}
let Ao = !0;
function Bd(e) {
  const t = ai(e), a = e.proxy, r = e.ctx;
  Ao = !1, t.beforeCreate && Ci(t.beforeCreate, e, "bc");
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
    mounted: f,
    beforeUpdate: m,
    updated: p,
    activated: h,
    deactivated: v,
    beforeDestroy: g,
    beforeUnmount: x,
    destroyed: k,
    unmounted: _,
    render: $,
    renderTracked: A,
    renderTriggered: le,
    errorCaptured: ie,
    serverPrefetch: O,
    // public API
    expose: M,
    inheritAttrs: q,
    // assets
    components: B,
    directives: te,
    filters: he
  } = t;
  if (d && Ld(d, r, null), n)
    for (const ke in n) {
      const me = n[ke];
      re(me) && (r[ke] = me.bind(a));
    }
  if (o) {
    const ke = o.call(a, a);
    $e(ke) && (e.data = je(ke));
  }
  if (Ao = !0, i)
    for (const ke in i) {
      const me = i[ke], dt = re(me) ? me.bind(a, a) : re(me.get) ? me.get.bind(a, a) : _t, xe = !re(me) && re(me.set) ? me.set.bind(a) : _t, Be = V({
        get: dt,
        set: xe
      });
      Object.defineProperty(r, ke, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Te) => Be.value = Te
      });
    }
  if (l)
    for (const ke in l)
      fl(l[ke], r, a, ke);
  if (s) {
    const ke = re(s) ? s.call(a) : s;
    Reflect.ownKeys(ke).forEach((me) => {
      To(me, ke[me]);
    });
  }
  c && Ci(c, e, "c");
  function Ae(ke, me) {
    J(me) ? me.forEach((dt) => ke(dt.bind(a))) : me && ke(me.bind(a));
  }
  if (Ae(ti, u), Ae(at, f), Ae(zd, m), Ae(Ad, p), Ae($d, h), Ae(Sd, v), Ae(Vd, ie), Ae(Od, A), Ae(Td, le), Ae(Va, x), Ae(rr, _), Ae(Ed, O), J(M))
    if (M.length) {
      const ke = e.exposed || (e.exposed = {});
      M.forEach((me) => {
        Object.defineProperty(ke, me, {
          get: () => a[me],
          set: (dt) => a[me] = dt
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === _t && (e.render = $), q != null && (e.inheritAttrs = q), B && (e.components = B), te && (e.directives = te), O && sl(e);
}
function Ld(e, t, a = _t) {
  J(e) && (e = Eo(e));
  for (const r in e) {
    const o = e[r];
    let i;
    $e(o) ? "default" in o ? i = Pt(
      o.from || r,
      o.default,
      !0
    ) : i = Pt(o.from || r) : i = Pt(o), Oe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (n) => i.value = n
    }) : t[r] = i;
  }
}
function Ci(e, t, a) {
  vt(
    J(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    a
  );
}
function fl(e, t, a, r) {
  let o = r.includes(".") ? zl(a, r) : () => a[r];
  if (Ee(e)) {
    const i = t[e];
    re(i) && de(o, i);
  } else if (re(e))
    de(o, e.bind(a));
  else if ($e(e))
    if (J(e))
      e.forEach((i) => fl(i, t, a, r));
    else {
      const i = re(e.handler) ? e.handler.bind(a) : t[e.handler];
      re(i) && de(o, i, e);
    }
}
function ai(e) {
  const t = e.type, { mixins: a, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: n }
  } = e.appContext, l = i.get(t);
  let s;
  return l ? s = l : !o.length && !a && !r ? s = t : (s = {}, o.length && o.forEach(
    (d) => zr(s, d, n, !0)
  ), zr(s, t, n)), $e(t) && i.set(t, s), s;
}
function zr(e, t, a, r = !1) {
  const { mixins: o, extends: i } = t;
  i && zr(e, i, a, !0), o && o.forEach(
    (n) => zr(e, n, a, !0)
  );
  for (const n in t)
    if (!(r && n === "expose")) {
      const l = Fd[n] || a && a[n];
      e[n] = l ? l(e[n], t[n]) : t[n];
    }
  return e;
}
const Fd = {
  data: zi,
  props: Ai,
  emits: Ai,
  // objects
  methods: Ba,
  computed: Ba,
  // lifecycle
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  // assets
  components: Ba,
  directives: Ba,
  // watch
  watch: Nd,
  // provide / inject
  provide: zi,
  inject: Dd
};
function zi(e, t) {
  return t ? e ? function() {
    return ze(
      re(e) ? e.call(this, this) : e,
      re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Dd(e, t) {
  return Ba(Eo(e), Eo(t));
}
function Eo(e) {
  if (J(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++)
      t[e[a]] = e[a];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ba(e, t) {
  return e ? ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ai(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ze(
    /* @__PURE__ */ Object.create(null),
    Cr(e),
    Cr(t ?? {})
  ) : t;
}
function Nd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const a = ze(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    a[r] = Ue(e[r], t[r]);
  return a;
}
function hl() {
  return {
    app: null,
    config: {
      isNativeTag: $s,
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
let Rd = 0;
function Ud(e, t) {
  return function(r, o = null) {
    re(r) || (r = ze({}, r)), o != null && !$e(o) && (o = null);
    const i = hl(), n = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const d = i.app = {
      _uid: Rd++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: kc,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return n.has(c) || (c && re(c.install) ? (n.add(c), c.install(d, ...u)) : re(c) && (n.add(c), c(d, ...u))), d;
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
      mount(c, u, f) {
        if (!s) {
          const m = d._ceVNode || G(r, o);
          return m.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && t ? t(m, c) : e(m, c, f), s = !0, d._container = c, c.__vue_app__ = d, Zr(m.component);
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
        const u = fa;
        fa = d;
        try {
          return c();
        } finally {
          fa = u;
        }
      }
    };
    return d;
  };
}
let fa = null;
function To(e, t) {
  if (Ie) {
    let a = Ie.provides;
    const r = Ie.parent && Ie.parent.provides;
    r === a && (a = Ie.provides = Object.create(r)), a[e] = t;
  }
}
function Pt(e, t, a = !1) {
  const r = Ie || Pe;
  if (r || fa) {
    const o = fa ? fa._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return a && re(t) ? t.call(r && r.proxy) : t;
  }
}
function vl() {
  return !!(Ie || Pe || fa);
}
const ml = {}, gl = () => Object.create(ml), bl = (e) => Object.getPrototypeOf(e) === ml;
function Hd(e, t, a, r = !1) {
  const o = {}, i = gl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), wl(e, t, o, i);
  for (const n in e.propsOptions[0])
    n in o || (o[n] = void 0);
  a ? e.props = r ? o : rd(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function qd(e, t, a, r) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: n }
  } = e, l = pe(o), [s] = e.propsOptions;
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
        let f = c[u];
        if (qr(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (s)
          if (ve(i, f))
            m !== i[f] && (i[f] = m, d = !0);
          else {
            const p = Re(f);
            o[p] = Oo(
              s,
              l,
              p,
              m,
              e,
              !1
            );
          }
        else
          m !== i[f] && (i[f] = m, d = !0);
      }
    }
  } else {
    wl(e, t, o, i) && (d = !0);
    let c;
    for (const u in l)
      (!t || // for camelCase
      !ve(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Je(u)) === u || !ve(t, c))) && (s ? a && // for camelCase
      (a[u] !== void 0 || // for kebab-case
      a[c] !== void 0) && (o[u] = Oo(
        s,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (i !== l)
      for (const u in i)
        (!t || !ve(t, u)) && (delete i[u], d = !0);
  }
  d && Et(e.attrs, "set", "");
}
function wl(e, t, a, r) {
  const [o, i] = e.propsOptions;
  let n = !1, l;
  if (t)
    for (let s in t) {
      if (Fa(s))
        continue;
      const d = t[s];
      let c;
      o && ve(o, c = Re(s)) ? !i || !i.includes(c) ? a[c] = d : (l || (l = {}))[c] = d : qr(e.emitsOptions, s) || (!(s in r) || d !== r[s]) && (r[s] = d, n = !0);
    }
  if (i) {
    const s = pe(a), d = l || fe;
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      a[u] = Oo(
        o,
        s,
        u,
        d[u],
        e,
        !ve(d, u)
      );
    }
  }
  return n;
}
function Oo(e, t, a, r, o, i) {
  const n = e[a];
  if (n != null) {
    const l = ve(n, "default");
    if (l && r === void 0) {
      const s = n.default;
      if (n.type !== Function && !n.skipFactory && re(s)) {
        const { propsDefaults: d } = o;
        if (a in d)
          r = d[a];
        else {
          const c = ir(o);
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
    ] && (r === "" || r === Je(a)) && (r = !0));
  }
  return r;
}
const Kd = /* @__PURE__ */ new WeakMap();
function yl(e, t, a = !1) {
  const r = a ? Kd : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, n = {}, l = [];
  let s = !1;
  if (!re(e)) {
    const c = (u) => {
      s = !0;
      const [f, m] = yl(u, t, !0);
      ze(n, f), m && l.push(...m);
    };
    !a && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !s)
    return $e(e) && r.set(e, ka), ka;
  if (J(i))
    for (let c = 0; c < i.length; c++) {
      const u = Re(i[c]);
      Ei(u) && (n[u] = fe);
    }
  else if (i)
    for (const c in i) {
      const u = Re(c);
      if (Ei(u)) {
        const f = i[c], m = n[u] = J(f) || re(f) ? { type: f } : ze({}, f), p = m.type;
        let h = !1, v = !0;
        if (J(p))
          for (let g = 0; g < p.length; ++g) {
            const x = p[g], k = re(x) && x.name;
            if (k === "Boolean") {
              h = !0;
              break;
            } else k === "String" && (v = !1);
          }
        else
          h = re(p) && p.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = h, m[
          1
          /* shouldCastTrue */
        ] = v, (h || ve(m, "default")) && l.push(u);
      }
    }
  const d = [n, l];
  return $e(e) && r.set(e, d), d;
}
function Ei(e) {
  return e[0] !== "$" && !Fa(e);
}
const xl = (e) => e[0] === "_" || e === "$stable", ri = (e) => J(e) ? e.map(wt) : [wt(e)], Wd = (e, t, a) => {
  if (t._n)
    return t;
  const r = Z((...o) => ri(t(...o)), a);
  return r._c = !1, r;
}, kl = (e, t, a) => {
  const r = e._ctx;
  for (const o in e) {
    if (xl(o)) continue;
    const i = e[o];
    if (re(i))
      t[o] = Wd(o, i, r);
    else if (i != null) {
      const n = ri(i);
      t[o] = () => n;
    }
  }
}, _l = (e, t) => {
  const a = ri(t);
  e.slots.default = () => a;
}, $l = (e, t, a) => {
  for (const r in t)
    (a || r !== "_") && (e[r] = t[r]);
}, Zd = (e, t, a) => {
  const r = e.slots = gl();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? ($l(r, t, a), a && En(r, "_", o, !0)) : kl(t, r);
  } else t && _l(e, t);
}, Jd = (e, t, a) => {
  const { vnode: r, slots: o } = e;
  let i = !0, n = fe;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? a && l === 1 ? i = !1 : $l(o, t, a) : (i = !t.$stable, kl(t, o)), n = t;
  } else t && (_l(e, t), n = { default: 1 });
  if (i)
    for (const l in o)
      !xl(l) && n[l] == null && delete o[l];
}, Qe = cc;
function Gd(e) {
  return Yd(e);
}
function Yd(e, t) {
  const a = Fr();
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
    nextSibling: f,
    setScopeId: m = _t,
    insertStaticContent: p
  } = e, h = (b, y, C, I = null, T = null, P = null, H = void 0, R = null, D = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !sa(b, y) && (I = Le(b), Te(b, T, P, !0), b = null), y.patchFlag === -2 && (D = !1, y.dynamicChildren = null);
    const { type: j, ref: X, shapeFlag: K } = y;
    switch (j) {
      case Kr:
        v(b, y, C, I);
        break;
      case Ke:
        g(b, y, C, I);
        break;
      case mr:
        b == null && x(y, C, I, H);
        break;
      case be:
        B(
          b,
          y,
          C,
          I,
          T,
          P,
          H,
          R,
          D
        );
        break;
      default:
        K & 1 ? $(
          b,
          y,
          C,
          I,
          T,
          P,
          H,
          R,
          D
        ) : K & 6 ? te(
          b,
          y,
          C,
          I,
          T,
          P,
          H,
          R,
          D
        ) : (K & 64 || K & 128) && j.process(
          b,
          y,
          C,
          I,
          T,
          P,
          H,
          R,
          D,
          aa
        );
    }
    X != null && T && Co(X, b && b.ref, P, y || b, !y);
  }, v = (b, y, C, I) => {
    if (b == null)
      r(
        y.el = l(y.children),
        C,
        I
      );
    else {
      const T = y.el = b.el;
      y.children !== b.children && d(T, y.children);
    }
  }, g = (b, y, C, I) => {
    b == null ? r(
      y.el = s(y.children || ""),
      C,
      I
    ) : y.el = b.el;
  }, x = (b, y, C, I) => {
    [b.el, b.anchor] = p(
      b.children,
      y,
      C,
      I,
      b.el,
      b.anchor
    );
  }, k = ({ el: b, anchor: y }, C, I) => {
    let T;
    for (; b && b !== y; )
      T = f(b), r(b, C, I), b = T;
    r(y, C, I);
  }, _ = ({ el: b, anchor: y }) => {
    let C;
    for (; b && b !== y; )
      C = f(b), o(b), b = C;
    o(y);
  }, $ = (b, y, C, I, T, P, H, R, D) => {
    y.type === "svg" ? H = "svg" : y.type === "math" && (H = "mathml"), b == null ? A(
      y,
      C,
      I,
      T,
      P,
      H,
      R,
      D
    ) : O(
      b,
      y,
      T,
      P,
      H,
      R,
      D
    );
  }, A = (b, y, C, I, T, P, H, R) => {
    let D, j;
    const { props: X, shapeFlag: K, transition: Y, dirs: ae } = b;
    if (D = b.el = n(
      b.type,
      P,
      X && X.is,
      X
    ), K & 8 ? c(D, b.children) : K & 16 && ie(
      b.children,
      D,
      null,
      I,
      T,
      no(b, P),
      H,
      R
    ), ae && ra(b, null, I, "created"), le(D, b, b.scopeId, H, I), X) {
      for (const Se in X)
        Se !== "value" && !Fa(Se) && i(D, Se, null, X[Se], P, I);
      "value" in X && i(D, "value", null, X.value, P), (j = X.onVnodeBeforeMount) && gt(j, I, b);
    }
    ae && ra(b, null, I, "beforeMount");
    const ue = Xd(T, Y);
    ue && Y.beforeEnter(D), r(D, y, C), ((j = X && X.onVnodeMounted) || ue || ae) && Qe(() => {
      j && gt(j, I, b), ue && Y.enter(D), ae && ra(b, null, I, "mounted");
    }, T);
  }, le = (b, y, C, I, T) => {
    if (C && m(b, C), I)
      for (let P = 0; P < I.length; P++)
        m(b, I[P]);
    if (T) {
      let P = T.subTree;
      if (y === P || Tl(P.type) && (P.ssContent === y || P.ssFallback === y)) {
        const H = T.vnode;
        le(
          b,
          H,
          H.scopeId,
          H.slotScopeIds,
          T.parent
        );
      }
    }
  }, ie = (b, y, C, I, T, P, H, R, D = 0) => {
    for (let j = D; j < b.length; j++) {
      const X = b[j] = R ? Ht(b[j]) : wt(b[j]);
      h(
        null,
        X,
        y,
        C,
        I,
        T,
        P,
        H,
        R
      );
    }
  }, O = (b, y, C, I, T, P, H) => {
    const R = y.el = b.el;
    let { patchFlag: D, dynamicChildren: j, dirs: X } = y;
    D |= b.patchFlag & 16;
    const K = b.props || fe, Y = y.props || fe;
    let ae;
    if (C && oa(C, !1), (ae = Y.onVnodeBeforeUpdate) && gt(ae, C, y, b), X && ra(y, b, C, "beforeUpdate"), C && oa(C, !0), (K.innerHTML && Y.innerHTML == null || K.textContent && Y.textContent == null) && c(R, ""), j ? M(
      b.dynamicChildren,
      j,
      R,
      C,
      I,
      no(y, T),
      P
    ) : H || me(
      b,
      y,
      R,
      null,
      C,
      I,
      no(y, T),
      P,
      !1
    ), D > 0) {
      if (D & 16)
        q(R, K, Y, C, T);
      else if (D & 2 && K.class !== Y.class && i(R, "class", null, Y.class, T), D & 4 && i(R, "style", K.style, Y.style, T), D & 8) {
        const ue = y.dynamicProps;
        for (let Se = 0; Se < ue.length; Se++) {
          const ye = ue[Se], Ge = K[ye], Fe = Y[ye];
          (Fe !== Ge || ye === "value") && i(R, ye, Ge, Fe, T, C);
        }
      }
      D & 1 && b.children !== y.children && c(R, y.children);
    } else !H && j == null && q(R, K, Y, C, T);
    ((ae = Y.onVnodeUpdated) || X) && Qe(() => {
      ae && gt(ae, C, y, b), X && ra(y, b, C, "updated");
    }, I);
  }, M = (b, y, C, I, T, P, H) => {
    for (let R = 0; R < y.length; R++) {
      const D = b[R], j = y[R], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !sa(D, j) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 70) ? u(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      h(
        D,
        j,
        X,
        null,
        I,
        T,
        P,
        H,
        !0
      );
    }
  }, q = (b, y, C, I, T) => {
    if (y !== C) {
      if (y !== fe)
        for (const P in y)
          !Fa(P) && !(P in C) && i(
            b,
            P,
            y[P],
            null,
            T,
            I
          );
      for (const P in C) {
        if (Fa(P)) continue;
        const H = C[P], R = y[P];
        H !== R && P !== "value" && i(b, P, R, H, T, I);
      }
      "value" in C && i(b, "value", y.value, C.value, T);
    }
  }, B = (b, y, C, I, T, P, H, R, D) => {
    const j = y.el = b ? b.el : l(""), X = y.anchor = b ? b.anchor : l("");
    let { patchFlag: K, dynamicChildren: Y, slotScopeIds: ae } = y;
    ae && (R = R ? R.concat(ae) : ae), b == null ? (r(j, C, I), r(X, C, I), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      C,
      X,
      T,
      P,
      H,
      R,
      D
    )) : K > 0 && K & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (M(
      b.dynamicChildren,
      Y,
      C,
      T,
      P,
      H,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || T && y === T.subTree) && Sl(
      b,
      y,
      !0
      /* shallow */
    )) : me(
      b,
      y,
      C,
      X,
      T,
      P,
      H,
      R,
      D
    );
  }, te = (b, y, C, I, T, P, H, R, D) => {
    y.slotScopeIds = R, b == null ? y.shapeFlag & 512 ? T.ctx.activate(
      y,
      C,
      I,
      H,
      D
    ) : he(
      y,
      C,
      I,
      T,
      P,
      H,
      D
    ) : Me(b, y, D);
  }, he = (b, y, C, I, T, P, H) => {
    const R = b.component = vc(
      b,
      I,
      T
    );
    if (Ur(b) && (R.ctx.renderer = aa), mc(R, !1, H), R.asyncDep) {
      if (T && T.registerDep(R, Ae, H), !b.el) {
        const D = R.subTree = G(Ke);
        g(null, D, y, C);
      }
    } else
      Ae(
        R,
        b,
        y,
        C,
        T,
        P,
        H
      );
  }, Me = (b, y, C) => {
    const I = y.component = b.component;
    if (sc(b, y, C))
      if (I.asyncDep && !I.asyncResolved) {
        ke(I, y, C);
        return;
      } else
        I.next = y, I.update();
    else
      y.el = b.el, I.vnode = y;
  }, Ae = (b, y, C, I, T, P, H) => {
    const R = () => {
      if (b.isMounted) {
        let { next: K, bu: Y, u: ae, parent: ue, vnode: Se } = b;
        {
          const Ye = Cl(b);
          if (Ye) {
            K && (K.el = Se.el, ke(b, K, H)), Ye.asyncDep.then(() => {
              b.isUnmounted || R();
            });
            return;
          }
        }
        let ye = K, Ge;
        oa(b, !1), K ? (K.el = Se.el, ke(b, K, H)) : K = Se, Y && vr(Y), (Ge = K.props && K.props.onVnodeBeforeUpdate) && gt(Ge, ue, K, Se), oa(b, !0);
        const Fe = lo(b), ct = b.subTree;
        b.subTree = Fe, h(
          ct,
          Fe,
          // parent may have changed if it's in a teleport
          u(ct.el),
          // anchor may have changed if it's in a fragment
          Le(ct),
          b,
          T,
          P
        ), K.el = Fe.el, ye === null && dc(b, Fe.el), ae && Qe(ae, T), (Ge = K.props && K.props.onVnodeUpdated) && Qe(
          () => gt(Ge, ue, K, Se),
          T
        );
      } else {
        let K;
        const { el: Y, props: ae } = y, { bm: ue, m: Se, parent: ye, root: Ge, type: Fe } = b, ct = Sa(y);
        if (oa(b, !1), ue && vr(ue), !ct && (K = ae && ae.onVnodeBeforeMount) && gt(K, ye, y), oa(b, !0), Y && vi) {
          const Ye = () => {
            b.subTree = lo(b), vi(
              Y,
              b.subTree,
              b,
              T,
              null
            );
          };
          ct && Fe.__asyncHydrate ? Fe.__asyncHydrate(
            Y,
            b,
            Ye
          ) : Ye();
        } else {
          Ge.ce && Ge.ce._injectChildStyle(Fe);
          const Ye = b.subTree = lo(b);
          h(
            null,
            Ye,
            C,
            I,
            b,
            T,
            P
          ), y.el = Ye.el;
        }
        if (Se && Qe(Se, T), !ct && (K = ae && ae.onVnodeMounted)) {
          const Ye = y;
          Qe(
            () => gt(K, ye, Ye),
            T
          );
        }
        (y.shapeFlag & 256 || ye && Sa(ye.vnode) && ye.vnode.shapeFlag & 256) && b.a && Qe(b.a, T), b.isMounted = !0, y = C = I = null;
      }
    };
    b.scope.on();
    const D = b.effect = new Mn(R);
    b.scope.off();
    const j = b.update = D.run.bind(D), X = b.job = D.runIfDirty.bind(D);
    X.i = b, X.id = b.uid, D.scheduler = () => ei(X), oa(b, !0), j();
  }, ke = (b, y, C) => {
    y.component = b;
    const I = b.vnode.props;
    b.vnode = y, b.next = null, qd(b, y.props, I, C), Jd(b, y.children, C), Xt(), _i(b), Qt();
  }, me = (b, y, C, I, T, P, H, R, D = !1) => {
    const j = b && b.children, X = b ? b.shapeFlag : 0, K = y.children, { patchFlag: Y, shapeFlag: ae } = y;
    if (Y > 0) {
      if (Y & 128) {
        xe(
          j,
          K,
          C,
          I,
          T,
          P,
          H,
          R,
          D
        );
        return;
      } else if (Y & 256) {
        dt(
          j,
          K,
          C,
          I,
          T,
          P,
          H,
          R,
          D
        );
        return;
      }
    }
    ae & 8 ? (X & 16 && we(j, T, P), K !== j && c(C, K)) : X & 16 ? ae & 16 ? xe(
      j,
      K,
      C,
      I,
      T,
      P,
      H,
      R,
      D
    ) : we(j, T, P, !0) : (X & 8 && c(C, ""), ae & 16 && ie(
      K,
      C,
      I,
      T,
      P,
      H,
      R,
      D
    ));
  }, dt = (b, y, C, I, T, P, H, R, D) => {
    b = b || ka, y = y || ka;
    const j = b.length, X = y.length, K = Math.min(j, X);
    let Y;
    for (Y = 0; Y < K; Y++) {
      const ae = y[Y] = D ? Ht(y[Y]) : wt(y[Y]);
      h(
        b[Y],
        ae,
        C,
        null,
        T,
        P,
        H,
        R,
        D
      );
    }
    j > X ? we(
      b,
      T,
      P,
      !0,
      !1,
      K
    ) : ie(
      y,
      C,
      I,
      T,
      P,
      H,
      R,
      D,
      K
    );
  }, xe = (b, y, C, I, T, P, H, R, D) => {
    let j = 0;
    const X = y.length;
    let K = b.length - 1, Y = X - 1;
    for (; j <= K && j <= Y; ) {
      const ae = b[j], ue = y[j] = D ? Ht(y[j]) : wt(y[j]);
      if (sa(ae, ue))
        h(
          ae,
          ue,
          C,
          null,
          T,
          P,
          H,
          R,
          D
        );
      else
        break;
      j++;
    }
    for (; j <= K && j <= Y; ) {
      const ae = b[K], ue = y[Y] = D ? Ht(y[Y]) : wt(y[Y]);
      if (sa(ae, ue))
        h(
          ae,
          ue,
          C,
          null,
          T,
          P,
          H,
          R,
          D
        );
      else
        break;
      K--, Y--;
    }
    if (j > K) {
      if (j <= Y) {
        const ae = Y + 1, ue = ae < X ? y[ae].el : I;
        for (; j <= Y; )
          h(
            null,
            y[j] = D ? Ht(y[j]) : wt(y[j]),
            C,
            ue,
            T,
            P,
            H,
            R,
            D
          ), j++;
      }
    } else if (j > Y)
      for (; j <= K; )
        Te(b[j], T, P, !0), j++;
    else {
      const ae = j, ue = j, Se = /* @__PURE__ */ new Map();
      for (j = ue; j <= Y; j++) {
        const Xe = y[j] = D ? Ht(y[j]) : wt(y[j]);
        Xe.key != null && Se.set(Xe.key, j);
      }
      let ye, Ge = 0;
      const Fe = Y - ue + 1;
      let ct = !1, Ye = 0;
      const Pa = new Array(Fe);
      for (j = 0; j < Fe; j++) Pa[j] = 0;
      for (j = ae; j <= K; j++) {
        const Xe = b[j];
        if (Ge >= Fe) {
          Te(Xe, T, P, !0);
          continue;
        }
        let mt;
        if (Xe.key != null)
          mt = Se.get(Xe.key);
        else
          for (ye = ue; ye <= Y; ye++)
            if (Pa[ye - ue] === 0 && sa(Xe, y[ye])) {
              mt = ye;
              break;
            }
        mt === void 0 ? Te(Xe, T, P, !0) : (Pa[mt - ue] = j + 1, mt >= Ye ? Ye = mt : ct = !0, h(
          Xe,
          y[mt],
          C,
          null,
          T,
          P,
          H,
          R,
          D
        ), Ge++);
      }
      const mi = ct ? Qd(Pa) : ka;
      for (ye = mi.length - 1, j = Fe - 1; j >= 0; j--) {
        const Xe = ue + j, mt = y[Xe], gi = Xe + 1 < X ? y[Xe + 1].el : I;
        Pa[j] === 0 ? h(
          null,
          mt,
          C,
          gi,
          T,
          P,
          H,
          R,
          D
        ) : ct && (ye < 0 || j !== mi[ye] ? Be(mt, C, gi, 2) : ye--);
      }
    }
  }, Be = (b, y, C, I, T = null) => {
    const { el: P, type: H, transition: R, children: D, shapeFlag: j } = b;
    if (j & 6) {
      Be(b.component.subTree, y, C, I);
      return;
    }
    if (j & 128) {
      b.suspense.move(y, C, I);
      return;
    }
    if (j & 64) {
      H.move(b, y, C, aa);
      return;
    }
    if (H === be) {
      r(P, y, C);
      for (let K = 0; K < D.length; K++)
        Be(D[K], y, C, I);
      r(b.anchor, y, C);
      return;
    }
    if (H === mr) {
      k(b, y, C);
      return;
    }
    if (I !== 2 && j & 1 && R)
      if (I === 0)
        R.beforeEnter(P), r(P, y, C), Qe(() => R.enter(P), T);
      else {
        const { leave: K, delayLeave: Y, afterLeave: ae } = R, ue = () => r(P, y, C), Se = () => {
          K(P, () => {
            ue(), ae && ae();
          });
        };
        Y ? Y(P, ue, Se) : Se();
      }
    else
      r(P, y, C);
  }, Te = (b, y, C, I = !1, T = !1) => {
    const {
      type: P,
      props: H,
      ref: R,
      children: D,
      dynamicChildren: j,
      shapeFlag: X,
      patchFlag: K,
      dirs: Y,
      cacheIndex: ae
    } = b;
    if (K === -2 && (T = !1), R != null && Co(R, null, C, b, !0), ae != null && (y.renderCache[ae] = void 0), X & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const ue = X & 1 && Y, Se = !Sa(b);
    let ye;
    if (Se && (ye = H && H.onVnodeBeforeUnmount) && gt(ye, y, b), X & 6)
      ne(b.component, C, I);
    else {
      if (X & 128) {
        b.suspense.unmount(C, I);
        return;
      }
      ue && ra(b, null, y, "beforeUnmount"), X & 64 ? b.type.remove(
        b,
        y,
        C,
        aa,
        I
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (P !== be || K > 0 && K & 64) ? we(
        j,
        y,
        C,
        !1,
        !0
      ) : (P === be && K & 384 || !T && X & 16) && we(D, y, C), I && L(b);
    }
    (Se && (ye = H && H.onVnodeUnmounted) || ue) && Qe(() => {
      ye && gt(ye, y, b), ue && ra(b, null, y, "unmounted");
    }, C);
  }, L = (b) => {
    const { type: y, el: C, anchor: I, transition: T } = b;
    if (y === be) {
      oe(C, I);
      return;
    }
    if (y === mr) {
      _(b);
      return;
    }
    const P = () => {
      o(C), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (b.shapeFlag & 1 && T && !T.persisted) {
      const { leave: H, delayLeave: R } = T, D = () => H(C, P);
      R ? R(b.el, P, D) : D();
    } else
      P();
  }, oe = (b, y) => {
    let C;
    for (; b !== y; )
      C = f(b), o(b), b = C;
    o(y);
  }, ne = (b, y, C) => {
    const { bum: I, scope: T, job: P, subTree: H, um: R, m: D, a: j } = b;
    Ti(D), Ti(j), I && vr(I), T.stop(), P && (P.flags |= 8, Te(H, b, y, C)), R && Qe(R, y), Qe(() => {
      b.isUnmounted = !0;
    }, y), y && y.pendingBranch && !y.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve());
  }, we = (b, y, C, I = !1, T = !1, P = 0) => {
    for (let H = P; H < b.length; H++)
      Te(b[H], y, C, I, T);
  }, Le = (b) => {
    if (b.shapeFlag & 6)
      return Le(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const y = f(b.anchor || b.el), C = y && y[wd];
    return C ? f(C) : y;
  };
  let Ft = !1;
  const We = (b, y, C) => {
    b == null ? y._vnode && Te(y._vnode, null, null, !0) : h(
      y._vnode || null,
      b,
      y,
      null,
      null,
      null,
      C
    ), y._vnode = b, Ft || (Ft = !0, _i(), Qn(), Ft = !1);
  }, aa = {
    p: h,
    um: Te,
    m: Be,
    r: L,
    mt: he,
    mc: ie,
    pc: me,
    pbc: M,
    n: Le,
    o: e
  };
  let Yr, vi;
  return {
    render: We,
    hydrate: Yr,
    createApp: Ud(We, Yr)
  };
}
function no({ type: e, props: t }, a) {
  return a === "svg" && e === "foreignObject" || a === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : a;
}
function oa({ effect: e, job: t }, a) {
  a ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sl(e, t, a = !1) {
  const r = e.children, o = t.children;
  if (J(r) && J(o))
    for (let i = 0; i < r.length; i++) {
      const n = r[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Ht(o[i]), l.el = n.el), !a && l.patchFlag !== -2 && Sl(n, l)), l.type === Kr && (l.el = n.el);
    }
}
function Qd(e) {
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
function Cl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Cl(t);
}
function Ti(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ec = Symbol.for("v-scx"), tc = () => Pt(ec);
function oi(e, t) {
  return or(e, null, t);
}
function ac(e, t) {
  return or(
    e,
    null,
    { flush: "post" }
  );
}
function rc(e, t) {
  return or(
    e,
    null,
    { flush: "sync" }
  );
}
function de(e, t, a) {
  return or(e, t, a);
}
function or(e, t, a = fe) {
  const { immediate: r, deep: o, flush: i, once: n } = a, l = ze({}, a), s = t && r || !t && i !== "post";
  let d;
  if (Ga) {
    if (i === "sync") {
      const m = tc();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!s) {
      const m = () => {
      };
      return m.stop = _t, m.resume = _t, m.pause = _t, m;
    }
  }
  const c = Ie;
  l.call = (m, p, h) => vt(m, c, p, h);
  let u = !1;
  i === "post" ? l.scheduler = (m) => {
    Qe(m, c && c.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (m, p) => {
    p ? m() : ei(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const f = vd(e, t, l);
  return Ga && (d ? d.push(f) : s && f()), f;
}
function oc(e, t, a) {
  const r = this.proxy, o = Ee(e) ? e.includes(".") ? zl(r, e) : () => r[e] : e.bind(r, r);
  let i;
  re(t) ? i = t : (i = t.handler, a = t);
  const n = ir(this), l = or(o, i.bind(r), a);
  return n(), l;
}
function zl(e, t) {
  const a = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < a.length && r; o++)
      r = r[a[o]];
    return r;
  };
}
function ga(e, t, a = fe) {
  const r = Lt(), o = Re(t), i = Je(t), n = Al(e, o), l = sd((s, d) => {
    let c, u = fe, f;
    return rc(() => {
      const m = e[o];
      Ze(c, m) && (c = m, d());
    }), {
      get() {
        return s(), a.get ? a.get(c) : c;
      },
      set(m) {
        const p = a.set ? a.set(m) : m;
        if (!Ze(p, c) && !(u !== fe && Ze(m, u)))
          return;
        const h = r.vnode.props;
        h && // check if parent has passed v-model
        (t in h || o in h || i in h) && (`onUpdate:${t}` in h || `onUpdate:${o}` in h || `onUpdate:${i}` in h) || (c = m, d()), r.emit(`update:${t}`, p), Ze(m, p) && Ze(m, u) && !Ze(p, f) && d(), u = m, f = p;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let s = 0;
    return {
      next() {
        return s < 2 ? { value: s++ ? n || fe : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const Al = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Re(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function ic(e, t, ...a) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || fe;
  let o = a;
  const i = t.startsWith("update:"), n = i && Al(r, t.slice(7));
  n && (n.trim && (o = a.map((c) => Ee(c) ? c.trim() : c)), n.number && (o = a.map(xr)));
  let l, s = r[l = Xr(t)] || // also try camelCase event handler (#2249)
  r[l = Xr(Re(t))];
  !s && i && (s = r[l = Xr(Je(t))]), s && vt(
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
function El(e, t, a = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let n = {}, l = !1;
  if (!re(e)) {
    const s = (d) => {
      const c = El(d, t, !0);
      c && (l = !0, ze(n, c));
    };
    !a && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !l ? ($e(e) && r.set(e, null), null) : (J(i) ? i.forEach((s) => n[s] = null) : ze(n, i), $e(e) && r.set(e, n), n);
}
function qr(e, t) {
  return !e || !Ir(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, Je(t)) || ve(e, t));
}
function lo(e) {
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
    data: f,
    setupState: m,
    ctx: p,
    inheritAttrs: h
  } = e, v = Sr(e);
  let g, x;
  try {
    if (a.shapeFlag & 4) {
      const _ = o || r, $ = _;
      g = wt(
        d.call(
          $,
          _,
          c,
          u,
          m,
          f,
          p
        )
      ), x = l;
    } else {
      const _ = t;
      g = wt(
        _.length > 1 ? _(
          u,
          { attrs: l, slots: n, emit: s }
        ) : _(
          u,
          null
        )
      ), x = t.props ? l : nc(l);
    }
  } catch (_) {
    Ua.length = 0, Rr(_, e, 1), g = G(Ke);
  }
  let k = g;
  if (x && h !== !1) {
    const _ = Object.keys(x), { shapeFlag: $ } = k;
    _.length && $ & 7 && (i && _.some(Ho) && (x = lc(
      x,
      i
    )), k = Jt(k, x, !1, !0));
  }
  return a.dirs && (k = Jt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(a.dirs) : a.dirs), a.transition && Wa(k, a.transition), g = k, Sr(v), g;
}
const nc = (e) => {
  let t;
  for (const a in e)
    (a === "class" || a === "style" || Ir(a)) && ((t || (t = {}))[a] = e[a]);
  return t;
}, lc = (e, t) => {
  const a = {};
  for (const r in e)
    (!Ho(r) || !(r.slice(9) in t)) && (a[r] = e[r]);
  return a;
};
function sc(e, t, a) {
  const { props: r, children: o, component: i } = e, { props: n, children: l, patchFlag: s } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (a && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return r ? Oi(r, n, d) : !!n;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const f = c[u];
        if (n[f] !== r[f] && !qr(d, f))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === n ? !1 : r ? n ? Oi(r, n, d) : !0 : !!n;
  return !1;
}
function Oi(e, t, a) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !qr(a, i))
      return !0;
  }
  return !1;
}
function dc({ vnode: e, parent: t }, a) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = a, t = t.parent;
    else
      break;
  }
}
const Tl = (e) => e.__isSuspense;
function cc(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : bd(e);
}
const be = Symbol.for("v-fgt"), Kr = Symbol.for("v-txt"), Ke = Symbol.for("v-cmt"), mr = Symbol.for("v-stc"), Ua = [];
let tt = null;
function w(e = !1) {
  Ua.push(tt = e ? null : []);
}
function uc() {
  Ua.pop(), tt = Ua[Ua.length - 1] || null;
}
let Za = 1;
function Vi(e) {
  Za += e, e < 0 && tt && (tt.hasOnce = !0);
}
function Ol(e) {
  return e.dynamicChildren = Za > 0 ? tt || ka : null, uc(), Za > 0 && tt && tt.push(e), e;
}
function S(e, t, a, r, o, i) {
  return Ol(
    E(
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
function W(e, t, a, r, o) {
  return Ol(
    G(
      e,
      t,
      a,
      r,
      o,
      !0
    )
  );
}
function Ja(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function sa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vl = ({ key: e }) => e ?? null, gr = ({
  ref: e,
  ref_key: t,
  ref_for: a
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || Oe(e) || re(e) ? { i: Pe, r: e, k: t, f: !!a } : e : null);
function E(e, t = null, a = null, r = 0, o = null, i = e === be ? 0 : 1, n = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vl(t),
    ref: t && gr(t),
    scopeId: tl,
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
    ctx: Pe
  };
  return l ? (ii(s, a), i & 128 && e.normalize(s)) : a && (s.shapeFlag |= Ee(a) ? 8 : 16), Za > 0 && // avoid a block node from tracking itself
  !n && // has current parent block
  tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && tt.push(s), s;
}
const G = pc;
function pc(e, t = null, a = null, r = 0, o = null, i = !1) {
  if ((!e || e === cl) && (e = Ke), Ja(e)) {
    const l = Jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return a && ii(l, a), Za > 0 && !i && tt && (l.shapeFlag & 6 ? tt[tt.indexOf(e)] = l : tt.push(l)), l.patchFlag = -2, l;
  }
  if (yc(e) && (e = e.__vccOpts), t) {
    t = Wr(t);
    let { class: l, style: s } = t;
    l && !Ee(l) && (t.class = se(l)), $e(s) && (Qo(s) && !J(s) && (s = ze({}, s)), t.style = St(s));
  }
  const n = Ee(e) ? 1 : Tl(e) ? 128 : al(e) ? 64 : $e(e) ? 4 : re(e) ? 2 : 0;
  return E(
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
function Wr(e) {
  return e ? Qo(e) || bl(e) ? ze({}, e) : e : null;
}
function Jt(e, t, a = !1, r = !1) {
  const { props: o, ref: i, patchFlag: n, children: l, transition: s } = e, d = t ? Ve(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Vl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && i ? J(i) ? i.concat(gr(t)) : [i, gr(t)] : gr(t)
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
    patchFlag: t && e.type !== be ? n === -1 ? 16 : n | 16 : n,
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
    ssContent: e.ssContent && Jt(e.ssContent),
    ssFallback: e.ssFallback && Jt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && r && Wa(
    c,
    s.clone(c)
  ), c;
}
function _e(e = " ", t = 0) {
  return G(Kr, null, e, t);
}
function N(e = "", t = !1) {
  return t ? (w(), W(Ke, null, e)) : G(Ke, null, e);
}
function wt(e) {
  return e == null || typeof e == "boolean" ? G(Ke) : J(e) ? G(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ja(e) ? Ht(e) : G(Kr, null, String(e));
}
function Ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jt(e);
}
function ii(e, t) {
  let a = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (J(t))
    a = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ii(e, o()), o._c && (o._d = !0));
      return;
    } else {
      a = 32;
      const o = t._;
      !o && !bl(t) ? t._ctx = Pe : o === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else re(t) ? (t = { default: t, _ctx: Pe }, a = 32) : (t = String(t), r & 64 ? (a = 16, t = [_e(t)]) : a = 8);
  e.children = t, e.shapeFlag |= a;
}
function Ve(...e) {
  const t = {};
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = se([t.class, r.class]));
      else if (o === "style")
        t.style = St([t.style, r.style]);
      else if (Ir(o)) {
        const i = t[o], n = r[o];
        n && i !== n && !(J(i) && i.includes(n)) && (t[o] = i ? [].concat(i, n) : n);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function gt(e, t, a, r = null) {
  vt(e, t, 7, [
    a,
    r
  ]);
}
const fc = hl();
let hc = 0;
function vc(e, t, a) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || fc, i = {
    uid: hc++,
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
    scope: new js(
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
    propsOptions: yl(r, o),
    emitsOptions: El(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ic.bind(null, i), e.ce && e.ce(i), i;
}
let Ie = null;
const Lt = () => Ie || Pe;
let Ar, Vo;
{
  const e = Fr(), t = (a, r) => {
    let o;
    return (o = e[a]) || (o = e[a] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((n) => n(i)) : o[0](i);
    };
  };
  Ar = t(
    "__VUE_INSTANCE_SETTERS__",
    (a) => Ie = a
  ), Vo = t(
    "__VUE_SSR_SETTERS__",
    (a) => Ga = a
  );
}
const ir = (e) => {
  const t = Ie;
  return Ar(e), e.scope.on(), () => {
    e.scope.off(), Ar(t);
  };
}, Pi = () => {
  Ie && Ie.scope.off(), Ar(null);
};
function Pl(e) {
  return e.vnode.shapeFlag & 4;
}
let Ga = !1;
function mc(e, t = !1, a = !1) {
  t && Vo(t);
  const { props: r, children: o } = e.vnode, i = Pl(e);
  Hd(e, r, i, t), Zd(e, o, a);
  const n = i ? gc(e, t) : void 0;
  return t && Vo(!1), n;
}
function gc(e, t) {
  const a = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Id);
  const { setup: r } = a;
  if (r) {
    Xt();
    const o = e.setupContext = r.length > 1 ? Il(e) : null, i = ir(e), n = ar(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = zn(n);
    if (Qt(), i(), (l || e.sp) && !Sa(e) && sl(e), l) {
      if (n.then(Pi, Pi), t)
        return n.then((s) => {
          Mi(e, s, t);
        }).catch((s) => {
          Rr(s, e, 0);
        });
      e.asyncDep = n;
    } else
      Mi(e, n, t);
  } else
    Ml(e, t);
}
function Mi(e, t, a) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) && (e.setupState = Gn(t)), Ml(e, a);
}
let Ii;
function Ml(e, t, a) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ii && !r.render) {
      const o = r.template || ai(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: n } = e.appContext.config, { delimiters: l, compilerOptions: s } = r, d = ze(
          ze(
            {
              isCustomElement: i,
              delimiters: l
            },
            n
          ),
          s
        );
        r.render = Ii(o, d);
      }
    }
    e.render = r.render || _t;
  }
  {
    const o = ir(e);
    Xt();
    try {
      Bd(e);
    } finally {
      Qt(), o();
    }
  }
}
const bc = {
  get(e, t) {
    return De(e, "get", ""), e[t];
  }
};
function Il(e) {
  const t = (a) => {
    e.exposed = a || {};
  };
  return {
    attrs: new Proxy(e.attrs, bc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gn(od(e.exposed)), {
    get(t, a) {
      if (a in t)
        return t[a];
      if (a in Ra)
        return Ra[a](e);
    },
    has(t, a) {
      return a in t || a in Ra;
    }
  })) : e.proxy;
}
function wc(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yc(e) {
  return re(e) && "__vccOpts" in e;
}
const V = (e, t) => fd(e, t, Ga);
function xc(e, t, a) {
  const r = arguments.length;
  return r === 2 ? $e(t) && !J(t) ? Ja(t) ? G(e, null, [t]) : G(e, t) : G(e, null, t) : (r > 3 ? a = Array.prototype.slice.call(arguments, 2) : r === 3 && Ja(a) && (a = [a]), G(e, t, a));
}
const kc = "3.5.12";
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Po;
const ji = typeof window < "u" && window.trustedTypes;
if (ji)
  try {
    Po = /* @__PURE__ */ ji.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jl = Po ? (e) => Po.createHTML(e) : (e) => e, _c = "http://www.w3.org/2000/svg", $c = "http://www.w3.org/1998/Math/MathML", At = typeof document < "u" ? document : null, Bi = At && /* @__PURE__ */ At.createElement("template"), Sc = {
  insert: (e, t, a) => {
    t.insertBefore(e, a || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, a, r) => {
    const o = t === "svg" ? At.createElementNS(_c, e) : t === "mathml" ? At.createElementNS($c, e) : a ? At.createElement(e, { is: a }) : At.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => At.createTextNode(e),
  createComment: (e) => At.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => At.querySelector(e),
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
      Bi.innerHTML = jl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Bi.content;
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
}, Dt = "transition", Ia = "animation", Ya = Symbol("_vtc"), Bl = {
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
}, Cc = /* @__PURE__ */ ze(
  {},
  rl,
  Bl
), zc = (e) => (e.displayName = "Transition", e.props = Cc, e), Xa = /* @__PURE__ */ zc(
  (e, { slots: t }) => xc(kd, Ac(e), t)
), ia = (e, t = []) => {
  J(e) ? e.forEach((a) => a(...t)) : e && e(...t);
}, Li = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ac(e) {
  const t = {};
  for (const B in e)
    B in Bl || (t[B] = e[B]);
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
    leaveActiveClass: f = `${a}-leave-active`,
    leaveToClass: m = `${a}-leave-to`
  } = e, p = Ec(o), h = p && p[0], v = p && p[1], {
    onBeforeEnter: g,
    onEnter: x,
    onEnterCancelled: k,
    onLeave: _,
    onLeaveCancelled: $,
    onBeforeAppear: A = g,
    onAppear: le = x,
    onAppearCancelled: ie = k
  } = t, O = (B, te, he) => {
    na(B, te ? c : l), na(B, te ? d : n), he && he();
  }, M = (B, te) => {
    B._isLeaving = !1, na(B, u), na(B, m), na(B, f), te && te();
  }, q = (B) => (te, he) => {
    const Me = B ? le : x, Ae = () => O(te, B, he);
    ia(Me, [te, Ae]), Fi(() => {
      na(te, B ? s : i), Nt(te, B ? c : l), Li(Me) || Di(te, r, h, Ae);
    });
  };
  return ze(t, {
    onBeforeEnter(B) {
      ia(g, [B]), Nt(B, i), Nt(B, n);
    },
    onBeforeAppear(B) {
      ia(A, [B]), Nt(B, s), Nt(B, d);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(B, te) {
      B._isLeaving = !0;
      const he = () => M(B, te);
      Nt(B, u), Nt(B, f), Vc(), Fi(() => {
        B._isLeaving && (na(B, u), Nt(B, m), Li(_) || Di(B, r, v, he));
      }), ia(_, [B, he]);
    },
    onEnterCancelled(B) {
      O(B, !1), ia(k, [B]);
    },
    onAppearCancelled(B) {
      O(B, !0), ia(ie, [B]);
    },
    onLeaveCancelled(B) {
      M(B), ia($, [B]);
    }
  });
}
function Ec(e) {
  if (e == null)
    return null;
  if ($e(e))
    return [so(e.enter), so(e.leave)];
  {
    const t = so(e);
    return [t, t];
  }
}
function so(e) {
  return yo(e);
}
function Nt(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.add(a)), (e[Ya] || (e[Ya] = /* @__PURE__ */ new Set())).add(t);
}
function na(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const a = e[Ya];
  a && (a.delete(t), a.size || (e[Ya] = void 0));
}
function Fi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tc = 0;
function Di(e, t, a, r) {
  const o = e._endId = ++Tc, i = () => {
    o === e._endId && r();
  };
  if (a != null)
    return setTimeout(i, a);
  const { type: n, timeout: l, propCount: s } = Oc(e, t);
  if (!n)
    return r();
  const d = n + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(d, f), i();
  }, f = (m) => {
    m.target === e && ++c >= s && u();
  };
  setTimeout(() => {
    c < s && u();
  }, l + 1), e.addEventListener(d, f);
}
function Oc(e, t) {
  const a = window.getComputedStyle(e), r = (p) => (a[p] || "").split(", "), o = r(`${Dt}Delay`), i = r(`${Dt}Duration`), n = Ni(o, i), l = r(`${Ia}Delay`), s = r(`${Ia}Duration`), d = Ni(l, s);
  let c = null, u = 0, f = 0;
  t === Dt ? n > 0 && (c = Dt, u = n, f = i.length) : t === Ia ? d > 0 && (c = Ia, u = d, f = s.length) : (u = Math.max(n, d), c = u > 0 ? n > d ? Dt : Ia : null, f = c ? c === Dt ? i.length : s.length : 0);
  const m = c === Dt && /\b(transform|all)(,|$)/.test(
    r(`${Dt}Property`).toString()
  );
  return {
    type: c,
    timeout: u,
    propCount: f,
    hasTransform: m
  };
}
function Ni(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((a, r) => Ri(a) + Ri(e[r])));
}
function Ri(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vc() {
  return document.body.offsetHeight;
}
function Pc(e, t, a) {
  const r = e[Ya];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : a ? e.setAttribute("class", t) : e.className = t;
}
const Er = Symbol("_vod"), Ll = Symbol("_vsh"), ni = {
  beforeMount(e, { value: t }, { transition: a }) {
    e[Er] = e.style.display === "none" ? "" : e.style.display, a && t ? a.beforeEnter(e) : ja(e, t);
  },
  mounted(e, { value: t }, { transition: a }) {
    a && t && a.enter(e);
  },
  updated(e, { value: t, oldValue: a }, { transition: r }) {
    !t != !a && (r ? t ? (r.beforeEnter(e), ja(e, !0), r.enter(e)) : r.leave(e, () => {
      ja(e, !1);
    }) : ja(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ja(e, t);
  }
};
function ja(e, t) {
  e.style.display = t ? e[Er] : "none", e[Ll] = !t;
}
const Fl = Symbol("");
function Mc(e) {
  const t = Lt();
  if (!t)
    return;
  const a = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => Tr(i, o));
  }, r = () => {
    const o = e(t.proxy);
    t.ce ? Tr(t.ce, o) : Mo(t.subTree, o), a(o);
  };
  ti(() => {
    ac(r);
  }), at(() => {
    const o = new MutationObserver(r);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), rr(() => o.disconnect());
  });
}
function Mo(e, t) {
  if (e.shapeFlag & 128) {
    const a = e.suspense;
    e = a.activeBranch, a.pendingBranch && !a.isHydrating && a.effects.push(() => {
      Mo(a.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Tr(e.el, t);
  else if (e.type === be)
    e.children.forEach((a) => Mo(a, t));
  else if (e.type === mr) {
    let { el: a, anchor: r } = e;
    for (; a && (Tr(a, t), a !== r); )
      a = a.nextSibling;
  }
}
function Tr(e, t) {
  if (e.nodeType === 1) {
    const a = e.style;
    let r = "";
    for (const o in t)
      a.setProperty(`--${o}`, t[o]), r += `--${o}: ${t[o]};`;
    a[Fl] = r;
  }
}
const Ic = /(^|;)\s*display\s*:/;
function jc(e, t, a) {
  const r = e.style, o = Ee(a);
  let i = !1;
  if (a && !o) {
    if (t)
      if (Ee(t))
        for (const n of t.split(";")) {
          const l = n.slice(0, n.indexOf(":")).trim();
          a[l] == null && br(r, l, "");
        }
      else
        for (const n in t)
          a[n] == null && br(r, n, "");
    for (const n in a)
      n === "display" && (i = !0), br(r, n, a[n]);
  } else if (o) {
    if (t !== a) {
      const n = r[Fl];
      n && (a += ";" + n), r.cssText = a, i = Ic.test(a);
    }
  } else t && e.removeAttribute("style");
  Er in e && (e[Er] = i ? r.display : "", e[Ll] && (r.display = "none"));
}
const Ui = /\s*!important$/;
function br(e, t, a) {
  if (J(a))
    a.forEach((r) => br(e, t, r));
  else if (a == null && (a = ""), t.startsWith("--"))
    e.setProperty(t, a);
  else {
    const r = Bc(e, t);
    Ui.test(a) ? e.setProperty(
      Je(r),
      a.replace(Ui, ""),
      "important"
    ) : e[r] = a;
  }
}
const Hi = ["Webkit", "Moz", "ms"], co = {};
function Bc(e, t) {
  const a = co[t];
  if (a)
    return a;
  let r = Re(t);
  if (r !== "filter" && r in e)
    return co[t] = r;
  r = Lr(r);
  for (let o = 0; o < Hi.length; o++) {
    const i = Hi[o] + r;
    if (i in e)
      return co[t] = i;
  }
  return t;
}
const qi = "http://www.w3.org/1999/xlink";
function Ki(e, t, a, r, o, i = Ms(t)) {
  r && t.startsWith("xlink:") ? a == null ? e.removeAttributeNS(qi, t.slice(6, t.length)) : e.setAttributeNS(qi, t, a) : a == null || i && !Tn(a) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ht(a) ? String(a) : a
  );
}
function Wi(e, t, a, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    a != null && (e[t] = t === "innerHTML" ? jl(a) : a);
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
    l === "boolean" ? a = Tn(a) : a == null && l === "string" ? (a = "", n = !0) : l === "number" && (a = 0, n = !0);
  }
  try {
    e[t] = a;
  } catch {
  }
  n && e.removeAttribute(o || t);
}
function Ot(e, t, a, r) {
  e.addEventListener(t, a, r);
}
function Lc(e, t, a, r) {
  e.removeEventListener(t, a, r);
}
const Zi = Symbol("_vei");
function Fc(e, t, a, r, o = null) {
  const i = e[Zi] || (e[Zi] = {}), n = i[t];
  if (r && n)
    n.value = r;
  else {
    const [l, s] = Dc(t);
    if (r) {
      const d = i[t] = Uc(
        r,
        o
      );
      Ot(e, l, d, s);
    } else n && (Lc(e, l, n, s), i[t] = void 0);
  }
}
const Ji = /(?:Once|Passive|Capture)$/;
function Dc(e) {
  let t;
  if (Ji.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ji); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let uo = 0;
const Nc = /* @__PURE__ */ Promise.resolve(), Rc = () => uo || (Nc.then(() => uo = 0), uo = Date.now());
function Uc(e, t) {
  const a = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= a.attached)
      return;
    vt(
      Hc(r, a.value),
      t,
      5,
      [r]
    );
  };
  return a.value = e, a.attached = Rc(), a;
}
function Hc(e, t) {
  if (J(t)) {
    const a = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      a.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Gi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qc = (e, t, a, r, o, i) => {
  const n = o === "svg";
  t === "class" ? Pc(e, r, n) : t === "style" ? jc(e, a, r) : Ir(t) ? Ho(t) || Fc(e, t, a, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, n)) ? (Wi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ki(e, t, r, n, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ee(r)) ? Wi(e, Re(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ki(e, t, r, n));
};
function Kc(e, t, a, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Gi(t) && re(a));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Gi(t) && Ee(a) ? !1 : t in e;
}
const Yi = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wc(e, t, a) {
  const r = /* @__PURE__ */ _d(e, t);
  jr(r) && ze(r, t);
  class o extends li {
    constructor(n) {
      super(r, n, a);
    }
  }
  return o.def = r, o;
}
const Zc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class li extends Zc {
  constructor(t, a = {}, r = Io) {
    super(), this._def = t, this._props = a, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== Io ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof li) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Ct(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const o of r)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: n } = r;
      let l;
      if (i && !J(i))
        for (const s in i) {
          const d = i[s];
          (d === Number || d && d.type === Number) && (s in this._props && (this._props[s] = yo(this._props[s])), (l || (l = /* @__PURE__ */ Object.create(null)))[Re(s)] = !0);
        }
      this._numberProps = l, o && this._resolveProps(r), this.shadowRoot && this._applyStyles(n), this._mount(r);
    }, a = this._def.__asyncLoader;
    a ? this._pendingResolve = a().then(
      (r) => t(this._def = r, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const a = this._instance && this._instance.exposed;
    if (a)
      for (const r in a)
        ve(this, r) || Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => z(a[r])
        });
  }
  _resolveProps(t) {
    const { props: a } = t, r = J(a) ? a : Object.keys(a || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
    for (const o of r.map(Re))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const a = this.hasAttribute(t);
    let r = a ? this.getAttribute(t) : Yi;
    const o = Re(t);
    a && this._numberProps && this._numberProps[o] && (r = yo(r)), this._setProp(o, r, !1, !0);
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
    a !== this._props[t] && (a === Yi ? delete this._props[t] : (this._props[t] = a, t === "key" && this._app && (this._app._ceVNode.key = a)), o && this._instance && this._update(), r && (a === !0 ? this.setAttribute(Je(t), "") : typeof a == "string" || typeof a == "number" ? this.setAttribute(Je(t), a + "") : a || this.removeAttribute(Je(t))));
  }
  _update() {
    ou(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const a = G(this._def, ze(t, this._props));
    return this._instance || (a.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0;
      const o = (i, n) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            jr(n[0]) ? ze({ detail: n }, n[0]) : { detail: n }
          )
        );
      };
      r.emit = (i, ...n) => {
        o(i, n), Je(i) !== i && o(Je(i), n);
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
    const t = (this._teleportTarget || this).querySelectorAll("slot"), a = this._instance.type.__scopeId;
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
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const Gt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (a) => vr(t, a) : t;
};
function Jc(e) {
  e.target.composing = !0;
}
function Xi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const st = Symbol("_assign"), Or = {
  created(e, { modifiers: { lazy: t, trim: a, number: r } }, o) {
    e[st] = Gt(o);
    const i = r || o.props && o.props.type === "number";
    Ot(e, t ? "change" : "input", (n) => {
      if (n.target.composing) return;
      let l = e.value;
      a && (l = l.trim()), i && (l = xr(l)), e[st](l);
    }), a && Ot(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ot(e, "compositionstart", Jc), Ot(e, "compositionend", Xi), Ot(e, "change", Xi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: a, modifiers: { lazy: r, trim: o, number: i } }, n) {
    if (e[st] = Gt(n), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, s = t ?? "";
    l !== s && (document.activeElement === e && e.type !== "range" && (r && t === a || o && e.value.trim() === s) || (e.value = s));
  }
}, Dl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, a) {
    e[st] = Gt(a), Ot(e, "change", () => {
      const r = e._modelValue, o = Ea(e), i = e.checked, n = e[st];
      if (J(r)) {
        const l = Wo(r, o), s = l !== -1;
        if (i && !s)
          n(r.concat(o));
        else if (!i && s) {
          const d = [...r];
          d.splice(l, 1), n(d);
        }
      } else if (Oa(r)) {
        const l = new Set(r);
        i ? l.add(o) : l.delete(o), n(l);
      } else
        n(Nl(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Qi,
  beforeUpdate(e, t, a) {
    e[st] = Gt(a), Qi(e, t, a);
  }
};
function Qi(e, { value: t, oldValue: a }, r) {
  e._modelValue = t;
  let o;
  if (J(t))
    o = Wo(t, r.props.value) > -1;
  else if (Oa(t))
    o = t.has(r.props.value);
  else {
    if (t === a) return;
    o = va(t, Nl(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Gc = {
  created(e, { value: t }, a) {
    e.checked = va(t, a.props.value), e[st] = Gt(a), Ot(e, "change", () => {
      e[st](Ea(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: a }, r) {
    e[st] = Gt(r), t !== a && (e.checked = va(t, r.props.value));
  }
}, Yc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: a } }, r) {
    const o = Oa(t);
    Ot(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (n) => n.selected).map(
        (n) => a ? xr(Ea(n)) : Ea(n)
      );
      e[st](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, Ct(() => {
        e._assigning = !1;
      });
    }), e[st] = Gt(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    en(e, t);
  },
  beforeUpdate(e, t, a) {
    e[st] = Gt(a);
  },
  updated(e, { value: t }) {
    e._assigning || en(e, t);
  }
};
function en(e, t) {
  const a = e.multiple, r = J(t);
  if (!(a && !r && !Oa(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const n = e.options[o], l = Ea(n);
      if (a)
        if (r) {
          const s = typeof l;
          s === "string" || s === "number" ? n.selected = t.some((d) => String(d) === String(l)) : n.selected = Wo(t, l) > -1;
        } else
          n.selected = t.has(l);
      else if (va(Ea(n), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !a && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ea(e) {
  return "_value" in e ? e._value : e.value;
}
function Nl(e, t) {
  const a = t ? "_trueValue" : "_falseValue";
  return a in e ? e[a] : t;
}
const Xc = {
  created(e, t, a) {
    pr(e, t, a, null, "created");
  },
  mounted(e, t, a) {
    pr(e, t, a, null, "mounted");
  },
  beforeUpdate(e, t, a, r) {
    pr(e, t, a, r, "beforeUpdate");
  },
  updated(e, t, a, r) {
    pr(e, t, a, r, "updated");
  }
};
function Qc(e, t) {
  switch (e) {
    case "SELECT":
      return Yc;
    case "TEXTAREA":
      return Or;
    default:
      switch (t) {
        case "checkbox":
          return Dl;
        case "radio":
          return Gc;
        default:
          return Or;
      }
  }
}
function pr(e, t, a, r, o) {
  const n = Qc(
    e.tagName,
    a.props && a.props.type
  )[o];
  n && n(e, t, a, r);
}
const eu = ["ctrl", "shift", "alt", "meta"], tu = {
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
  exact: (e, t) => eu.some((a) => e[`${a}Key`] && !t.includes(a))
}, $t = (e, t) => {
  const a = e._withMods || (e._withMods = {}), r = t.join(".");
  return a[r] || (a[r] = (o, ...i) => {
    for (let n = 0; n < t.length; n++) {
      const l = tu[t[n]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, au = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, xt = (e, t) => {
  const a = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return a[r] || (a[r] = (o) => {
    if (!("key" in o))
      return;
    const i = Je(o.key);
    if (t.some(
      (n) => n === i || au[n] === i
    ))
      return e(o);
  });
}, ru = /* @__PURE__ */ ze({ patchProp: qc }, Sc);
let tn;
function Rl() {
  return tn || (tn = Gd(ru));
}
const ou = (...e) => {
  Rl().render(...e);
}, Io = (...e) => {
  const t = Rl().createApp(...e), { mount: a } = t;
  return t.mount = (r) => {
    const o = nu(r);
    if (!o) return;
    const i = t._component;
    !re(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const n = a(o, !1, iu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), n;
  }, t;
};
function iu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function nu(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
function lu(e) {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = e, document.head.appendChild(t);
}
function su() {
  ["https://rsms.me/inter/inter.css", "https://fonts.cdnfonts.com/css/poppins"].forEach((e) => {
    lu(e);
  });
}
function du(e) {
  su();
}
function cu(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
const ce = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of t)
    a[r] = o;
  return a;
}, uu = { class: "icon" }, pu = {
  __name: "PIcon",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), S("i", uu, [
      (w(), W(Aa(e.icon)))
    ]));
  }
}, Yt = /* @__PURE__ */ ce(pu, [["__scopeId", "data-v-eb0a670a"]]), fu = ["aria-disabled"], hu = ["id", "aria-controls", "disabled"], vu = { class: "title" }, mu = ["id", "data-testid", "aria-hidden"], gu = {
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
    const a = e, r = t, o = F(null);
    return de(
      () => a.modelValue,
      (i) => {
        i && a.scrollIntoView && setTimeout(() => o.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (i, n) => (w(), S("div", {
      class: se(["accordion-item", { disabled: e.disabled }]),
      "aria-disabled": e.disabled
    }, [
      E("button", {
        id: `accordion-header-${e.ariaTitle}`,
        ref_key: "accordionHeader",
        ref: o,
        class: "header",
        "data-testid": "accordion-trigger",
        "aria-controls": `accordion-content-${e.ariaTitle}`,
        disabled: e.disabled,
        onClick: n[0] || (n[0] = (l) => r("update:modelValue", !e.modelValue))
      }, [
        Q(i.$slots, "header", {}, () => [
          E("h3", vu, U(e.title), 1)
        ]),
        e.hideToggle ? N("", !0) : (w(), S("div", {
          key: 0,
          "data-testid": "accordion-state-indicator",
          class: se(["state-indicator", { open: e.modelValue }])
        }, [
          G(Yt, {
            part: "state-indicator-icon",
            icon: z(cu)
          }, null, 8, ["icon"])
        ], 2))
      ], 8, hu),
      G(Xa, { name: "grow" }, {
        default: Z(() => [
          ma(E("div", {
            id: `accordion-content-${e.ariaTitle}`,
            "data-testid": `accordion-content-${e.ariaTitle}`,
            "aria-hidden": !e.modelValue,
            class: "content"
          }, [
            G(Xa, { name: "fade" }, {
              default: Z(() => [
                e.modelValue ? Q(i.$slots, "default", { key: 0 }) : N("", !0)
              ]),
              _: 3
            })
          ], 8, mu), [
            [ni, e.modelValue]
          ])
        ]),
        _: 3
      })
    ], 10, fu));
  }
}, Ul = /* @__PURE__ */ ce(gu, [["__scopeId", "data-v-3fc5173a"]]), bu = {
  class: "accordion",
  "data-testid": "accordion"
}, wu = {
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
    return (n, l) => (w(), S("div", bu, [
      (w(!0), S(be, null, Zt(e.items, (s, d) => Q(n.$slots, "default", Ve({
        key: d,
        ref_for: !0
      }, { item: s, index: d, open: o.value[d] }), () => [
        G(Ul, {
          modelValue: o.value[d],
          "onUpdate:modelValue": [(c) => o.value[d] = c, (c) => i(c, d)],
          title: s[e.title],
          "aria-title": s.ariaTitle,
          disabled: e.disabled || s.disabled,
          "hide-toggle": e.disabled,
          "scroll-into-view": e.scrollIntoView
        }, {
          default: Z(() => [
            Q(n.$slots, "content", Ve({ ref_for: !0 }, s), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "aria-title", "disabled", "hide-toggle", "scroll-into-view"])
      ], !0)), 128))
    ]));
  }
}, yu = /* @__PURE__ */ ce(wu, [["__scopeId", "data-v-25a8f65e"]]);
function an(e, t) {
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
    t % 2 ? an(Object(a), !0).forEach(function(r) {
      xu(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : an(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function xu(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function rn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((a, r) => (t.includes(r) || (a[r] = z(e[r])), a), {});
}
function Vr(e) {
  return typeof e == "function";
}
function ku(e) {
  return pa(e) || Wt(e);
}
function Hl(e, t, a) {
  let r = e;
  const o = t.split(".");
  for (let i = 0; i < o.length; i++) {
    if (!r[o[i]]) return a;
    r = r[o[i]];
  }
  return r;
}
function po(e, t, a) {
  return V(() => e.some((r) => Hl(t, r, {
    [a]: !1
  })[a]));
}
function on(e, t, a) {
  return V(() => e.reduce((r, o) => {
    const i = Hl(t, o, {
      [a]: !1
    })[a] || [];
    return r.concat(i);
  }, []));
}
function ql(e, t, a, r) {
  return e.call(r, z(t), z(a), r);
}
function Kl(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function _u(e, t, a, r, o, i, n) {
  let {
    $lazy: l,
    $rewardEarly: s
  } = o, d = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], c = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, f = arguments.length > 10 ? arguments[10] : void 0;
  const m = F(!!r.value), p = F(0);
  a.value = !1;
  const h = de([t, r].concat(d, f), () => {
    if (l && !r.value || s && !u.value && !a.value)
      return;
    let v;
    try {
      v = ql(e, t, c, n);
    } catch (g) {
      v = Promise.reject(g);
    }
    p.value++, a.value = !!p.value, m.value = !1, Promise.resolve(v).then((g) => {
      p.value--, a.value = !!p.value, i.value = g, m.value = Kl(g);
    }).catch((g) => {
      p.value--, a.value = !!p.value, i.value = g, m.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: m,
    $unwatch: h
  };
}
function $u(e, t, a, r, o, i, n, l) {
  let {
    $lazy: s,
    $rewardEarly: d
  } = r;
  const c = () => ({}), u = V(() => {
    if (s && !a.value || d && !l.value)
      return !1;
    let f = !0;
    try {
      const m = ql(e, t, n, i);
      o.value = m, f = Kl(m);
    } catch (m) {
      o.value = m;
    }
    return f;
  });
  return {
    $unwatch: c,
    $invalid: u
  };
}
function Su(e, t, a, r, o, i, n, l, s, d, c) {
  const u = F(!1), f = e.$params || {}, m = F(null);
  let p, h;
  e.$async ? {
    $invalid: p,
    $unwatch: h
  } = _u(e.$validator, t, u, a, r, m, o, e.$watchTargets, s, d, c) : {
    $invalid: p,
    $unwatch: h
  } = $u(e.$validator, t, a, r, m, o, s, d);
  const v = e.$message;
  return {
    $message: Vr(v) ? V(() => v(rn({
      $pending: u,
      $invalid: p,
      $params: rn(f),
      $model: t,
      $response: m,
      $validator: i,
      $propertyPath: l,
      $property: n
    }))) : v || "",
    $params: f,
    $pending: u,
    $invalid: p,
    $response: m,
    $unwatch: h
  };
}
function Cu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = z(e), a = Object.keys(t), r = {}, o = {}, i = {};
  let n = null;
  return a.forEach((l) => {
    const s = t[l];
    switch (!0) {
      case Vr(s.$validator):
        r[l] = s;
        break;
      case Vr(s):
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
const zu = "__root";
function Au(e, t, a, r, o, i, n, l, s) {
  const d = Object.keys(e), c = r.get(o, e), u = F(!1), f = F(!1), m = F(0);
  if (c) {
    if (!c.$partial) return c;
    c.$unwatch(), u.value = c.$dirty.value;
  }
  const p = {
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
  return d.length ? (d.forEach((h) => {
    p[h] = Su(e[h], t, p.$dirty, i, n, h, a, o, s, f, m);
  }), p.$externalResults = V(() => l.value ? [].concat(l.value).map((h, v) => ({
    $propertyPath: o,
    $property: a,
    $validator: "$externalResults",
    $uid: `${o}-externalResult-${v}`,
    $message: h,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), p.$invalid = V(() => {
    const h = d.some((v) => z(p[v].$invalid));
    return f.value = h, !!p.$externalResults.value.length || h;
  }), p.$pending = V(() => d.some((h) => z(p[h].$pending))), p.$error = V(() => p.$dirty.value ? p.$pending.value || p.$invalid.value : !1), p.$silentErrors = V(() => d.filter((h) => z(p[h].$invalid)).map((h) => {
    const v = p[h];
    return je({
      $propertyPath: o,
      $property: a,
      $validator: h,
      $uid: `${o}-${h}`,
      $message: v.$message,
      $params: v.$params,
      $response: v.$response,
      $pending: v.$pending
    });
  }).concat(p.$externalResults.value)), p.$errors = V(() => p.$dirty.value ? p.$silentErrors.value : []), p.$unwatch = () => d.forEach((h) => {
    p[h].$unwatch();
  }), p.$commit = () => {
    f.value = !0, m.value = Date.now();
  }, r.set(o, e, p), p) : (c && r.set(o, e, p), p);
}
function Eu(e, t, a, r, o, i, n) {
  const l = Object.keys(e);
  return l.length ? l.reduce((s, d) => (s[d] = jo({
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
function Tu(e, t, a) {
  const r = V(() => [t, a].filter((p) => p).reduce((p, h) => p.concat(Object.values(z(h))), [])), o = V({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((p) => p.$dirty) : !1);
    },
    set(p) {
      e.$dirty.value = p;
    }
  }), i = V(() => {
    const p = z(e.$silentErrors) || [], h = r.value.filter((v) => (z(v).$silentErrors || []).length).reduce((v, g) => v.concat(...g.$silentErrors), []);
    return p.concat(h);
  }), n = V(() => {
    const p = z(e.$errors) || [], h = r.value.filter((v) => (z(v).$errors || []).length).reduce((v, g) => v.concat(...g.$errors), []);
    return p.concat(h);
  }), l = V(() => r.value.some((p) => p.$invalid) || z(e.$invalid) || !1), s = V(() => r.value.some((p) => z(p.$pending)) || z(e.$pending) || !1), d = V(() => r.value.some((p) => p.$dirty) || r.value.some((p) => p.$anyDirty) || o.value), c = V(() => o.value ? s.value || l.value : !1), u = () => {
    e.$touch(), r.value.forEach((p) => {
      p.$touch();
    });
  }, f = () => {
    e.$commit(), r.value.forEach((p) => {
      p.$commit();
    });
  }, m = () => {
    e.$reset(), r.value.forEach((p) => {
      p.$reset();
    });
  };
  return r.value.length && r.value.every((p) => p.$dirty) && u(), {
    $dirty: o,
    $errors: n,
    $invalid: l,
    $anyDirty: d,
    $error: c,
    $pending: s,
    $touch: u,
    $reset: m,
    $silentErrors: i,
    $commit: f
  };
}
function jo(e) {
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
    nestedValidators: f,
    config: m,
    validationGroups: p
  } = Cu(t), h = qt(qt({}, l), m), v = r ? V(() => {
    const xe = z(a);
    return xe ? z(xe[r]) : void 0;
  }) : a, g = qt({}, z(d) || {}), x = V(() => {
    const xe = z(d);
    return r ? xe ? z(xe[r]) : void 0 : xe;
  }), k = Au(u, v, r, n, c, h, s, x, a), _ = Eu(f, v, c, n, h, s, x), $ = {};
  p && Object.entries(p).forEach((xe) => {
    let [Be, Te] = xe;
    $[Be] = {
      $invalid: po(Te, _, "$invalid"),
      $error: po(Te, _, "$error"),
      $pending: po(Te, _, "$pending"),
      $errors: on(Te, _, "$errors"),
      $silentErrors: on(Te, _, "$silentErrors")
    };
  });
  const {
    $dirty: A,
    $errors: le,
    $invalid: ie,
    $anyDirty: O,
    $error: M,
    $pending: q,
    $touch: B,
    $reset: te,
    $silentErrors: he,
    $commit: Me
  } = Tu(k, _, i), Ae = r ? V({
    get: () => z(v),
    set: (xe) => {
      A.value = !0;
      const Be = z(a), Te = z(d);
      Te && (Te[r] = g[r]), Oe(Be[r]) ? Be[r].value = xe : Be[r] = xe;
    }
  }) : null;
  r && h.$autoDirty && de(v, () => {
    A.value || B();
    const xe = z(d);
    xe && (xe[r] = g[r]);
  }, {
    flush: "sync"
  });
  async function ke() {
    return B(), h.$rewardEarly && (Me(), await Ct()), await Ct(), new Promise((xe) => {
      if (!q.value) return xe(!ie.value);
      const Be = de(q, () => {
        xe(!ie.value), Be();
      });
    });
  }
  function me(xe) {
    return (i.value || {})[xe];
  }
  function dt() {
    Oe(d) ? d.value = g : Object.keys(g).length === 0 ? Object.keys(d).forEach((xe) => {
      delete d[xe];
    }) : Object.assign(d, g);
  }
  return je(qt(qt(qt({}, k), {}, {
    $model: Ae,
    $dirty: A,
    $error: M,
    $errors: le,
    $invalid: ie,
    $anyDirty: O,
    $pending: q,
    $touch: B,
    $reset: te,
    $path: c || zu,
    $silentErrors: he,
    $validate: ke,
    $commit: Me
  }, i && {
    $getResultsForChild: me,
    $clearExternalResults: dt,
    $validationGroups: $
  }), _));
}
let Ou = class {
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
    return i.length !== o.length || !i.every((n) => o.includes(n)) ? !1 : i.every((n) => a[n].$params ? Object.keys(a[n].$params).every((l) => z(r[n].$params[l]) === z(a[n].$params[l])) : !0);
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
const wr = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, nn = Symbol("vuelidate#injectChildResults"), ln = Symbol("vuelidate#removeChildResults");
function Vu(e) {
  let {
    $scope: t,
    instance: a
  } = e;
  const r = {}, o = F([]), i = V(() => o.value.reduce((c, u) => (c[u] = z(r[u]), c), {}));
  function n(c, u) {
    let {
      $registerAs: f,
      $scope: m,
      $stopPropagation: p
    } = u;
    p || t === wr.COLLECT_NONE || m === wr.COLLECT_NONE || t !== wr.COLLECT_ALL && t !== m || (r[f] = c, o.value.push(f));
  }
  a.__vuelidateInjectInstances = [].concat(a.__vuelidateInjectInstances || [], n);
  function l(c) {
    o.value = o.value.filter((u) => u !== c), delete r[c];
  }
  a.__vuelidateRemoveInstances = [].concat(a.__vuelidateRemoveInstances || [], l);
  const s = Pt(nn, []);
  To(nn, a.__vuelidateInjectInstances);
  const d = Pt(ln, []);
  return To(ln, a.__vuelidateRemoveInstances), {
    childResults: i,
    sendValidationResultsToParent: s,
    removeValidationResultsFromParent: d
  };
}
function Wl(e) {
  return new Proxy(e, {
    get(t, a) {
      return typeof t[a] == "object" ? Wl(t[a]) : V(() => t[a]);
    }
  });
}
let sn = 0;
function Ta(e, t) {
  var a;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: o,
    $scope: i = wr.COLLECT_ALL,
    $stopPropagation: n,
    $externalResults: l,
    currentVueInstance: s
  } = r;
  const d = s || ((a = Lt()) === null || a === void 0 ? void 0 : a.proxy), c = d ? d.$options : {};
  o || (sn += 1, o = `_vuelidate_${sn}`);
  const u = F({}), f = new Ou(), {
    childResults: m,
    sendValidationResultsToParent: p,
    removeValidationResultsFromParent: h
  } = d ? Vu({
    $scope: i,
    instance: d
  }) : {
    childResults: F({})
  };
  if (!e && c.validations) {
    const v = c.validations;
    t = F({}), ti(() => {
      t.value = d, de(() => Vr(v) ? v.call(t.value, new Wl(t.value)) : v, (g) => {
        u.value = jo({
          validations: g,
          state: t,
          childResults: m,
          resultsCache: f,
          globalConfig: r,
          instance: d,
          externalResults: l || d.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), r = c.validationsConfig || r;
  } else {
    const v = Oe(e) || ku(e) ? e : je(e || {});
    de(v, (g) => {
      u.value = jo({
        validations: g,
        state: t,
        childResults: m,
        resultsCache: f,
        globalConfig: r,
        instance: d ?? {},
        externalResults: l
      });
    }, {
      immediate: !0
    });
  }
  return d && (p.forEach((v) => v(u, {
    $registerAs: o,
    $scope: i,
    $stopPropagation: n
  })), Va(() => h.forEach((v) => v(o)))), V(() => qt(qt({}, z(u.value)), m.value));
}
function dn(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function Qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dn(Object(a), !0).forEach(function(r) {
      Pu(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : dn(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function Pu(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Pr(e) {
  return typeof e == "function";
}
function Bo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Jr(e) {
  return Pr(e.$validator) ? Qa({}, e) : {
    $validator: e
  };
}
function Zl(e) {
  return typeof e == "object" ? e.$valid : e;
}
function Jl(e) {
  return e.$validator || e;
}
function Mu(e, t) {
  if (!Bo(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!Bo(t) && !Pr(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Jr(t);
  return a.$params = Qa(Qa({}, a.$params || {}), e), a;
}
function Iu(e, t) {
  if (!Pr(e) && typeof z(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!Bo(t) && !Pr(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Jr(t);
  return a.$message = e, a;
}
function ju(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const a = Jr(e);
  return Qa(Qa({}, a), {}, {
    $async: !0,
    $watchTargets: t
  });
}
function Bu(e) {
  return {
    $validator(t) {
      for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      return z(t).reduce((i, n, l) => {
        const s = Object.entries(n).reduce((d, c) => {
          let [u, f] = c;
          const m = e[u] || {}, p = Object.entries(m).reduce((h, v) => {
            let [g, x] = v;
            const k = Jl(x).call(this, f, n, l, ...r), _ = Zl(k);
            if (h.$data[g] = k, h.$data.$invalid = !_ || !!h.$data.$invalid, h.$data.$error = h.$data.$invalid, !_) {
              let $ = x.$message || "";
              const A = x.$params || {};
              typeof $ == "function" && ($ = $({
                $pending: !1,
                $invalid: !_,
                $params: A,
                $model: f,
                $response: k
              })), h.$errors.push({
                $property: u,
                $message: $,
                $params: A,
                $response: k,
                $model: f,
                $pending: !1,
                $validator: g
              });
            }
            return {
              $valid: h.$valid && _,
              $data: h.$data,
              $errors: h.$errors
            };
          }, {
            $valid: !0,
            $data: {},
            $errors: []
          });
          return d.$data[u] = p.$data, d.$errors[u] = p.$errors, {
            $valid: d.$valid && p.$valid,
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
const nr = (e) => {
  if (e = z(e), Array.isArray(e)) return !!e.length;
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
}, Lu = (e) => (e = z(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function ea() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return (r) => (r = z(r), !nr(r) || t.every((o) => (o.lastIndex = 0, o.test(r))));
}
var pt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: Bu,
  len: Lu,
  normalizeValidatorObject: Jr,
  regex: ea,
  req: nr,
  unwrap: z,
  unwrapNormalizedValidator: Jl,
  unwrapValidatorResponse: Zl,
  withAsync: ju,
  withMessage: Iu,
  withParams: Mu
});
ea(/^[a-zA-Z]*$/);
ea(/^[a-zA-Z0-9]*$/);
ea(/^\d*(\.\d+)?$/);
const Fu = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
ea(Fu);
function Du(e) {
  return typeof e == "string" && (e = e.trim()), nr(e);
}
var er = {
  $validator: Du,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function Nu(e) {
  return (t) => z(t) === z(e);
}
function Ru(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: Nu(e),
    $message: (a) => `The value must be equal to the ${t} value`,
    $params: {
      equalTo: e,
      otherName: t,
      type: "sameAs"
    }
  };
}
const Uu = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
ea(Uu);
function Hu(e) {
  return (t) => !nr(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +z(e);
}
function cn(e) {
  return {
    $validator: Hu(e),
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
function qu(e) {
  return (t) => !nr(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +z(e);
}
var un = (e) => ({
  $validator: qu(e),
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
ea(/(^[0-9]*$)|(^-[0-9]+$)/);
ea(/^[-]?\d*(\.\d+)?$/);
function Ku(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
function Wu(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
function Zu(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ju(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" })
  ]);
}
const Gu = { class: "mini-icon" }, Yu = {
  __name: "PIconMini",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), S("i", Gu, [
      (w(), W(Aa(e.icon)))
    ]));
  }
}, ha = /* @__PURE__ */ ce(Yu, [["__scopeId", "data-v-206f9b1b"]]), It = je({
  locale: "nl-NL",
  language: "nl",
  autoDetectLanguage: !0,
  currency: "EUR"
});
function Xu(e) {
  if (It.autoDetectLanguage) {
    console.warn("ProboDesignSystem: autoDetectLanguage is enabled. You cannot set the language manually.");
    return;
  }
  if (!["nl", "en", "de"].includes(e)) {
    console.warn(`ProboDesignSystem: ${e} is not a valid language. Valid languages are: nl, en, de`);
    return;
  }
  It.language = e;
}
const si = new MutationObserver((e) => {
  var t;
  ((t = e[0]) == null ? void 0 : t.attributeName) === "lang" && (It.language = document.documentElement.lang);
}), Gl = () => si.disconnect();
function Qu() {
  si.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", Gl), It.autoDetectLanguage = !0;
}
function ep() {
  si.disconnect(), window.removeEventListener("beforeunload", Gl), It.autoDetectLanguage = !1;
}
de(
  () => It.autoDetectLanguage,
  (e) => {
    if (e) {
      Qu();
      return;
    }
    ep();
  },
  {
    immediate: !0
  }
);
const tp = {
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
  "toast.close": "Sluit bericht"
}, ap = {
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
  "toast.close": "Close message"
}, rp = {
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
  "toast.close": "Schließen der Nachricht"
}, op = { nl: tp, en: ap, de: rp };
function Yl(e, t = {}) {
  return e.replace(/{(\w+)}/g, (a, r) => t[r] || `{${r}}`);
}
function Xl(e) {
  const [t] = e.split("."), a = e.substring(e.indexOf(".") + 1);
  return op[It.language][`${t}.${a}`] || e;
}
function ip(e, t) {
  return e.replace(/{(\d+)}/g, (a, r) => t[r] || `{${r}}`);
}
function np(e, t, a = {}) {
  const r = e.split("|").map((i) => i.trim());
  let o;
  return r.length === 1 ? [o] = r : r.length === 2 ? t === 1 ? [o] = r : [, o] = r : t === 0 ? [o] = r : t === 1 ? [, o] = r : o = r[Math.min(t, r.length - 1)], Yl(o, { ...a, count: t, n: t });
}
function ee(e, t = null) {
  const a = Xl(e);
  return Array.isArray(t) ? ip(a) : Yl(a, t);
}
function lp(e, t, a = null) {
  return np(Xl(e), t, a);
}
const sp = { class: "amount-input-container" }, dp = ["disabled", "aria-label"], cp = ["id", "disabled", "aria-invalid", "aria-describedby"], up = ["disabled", "aria-label"], pp = ["id"], fp = {
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
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = V({
      get() {
        return !a.allowEmpty && !a.modelValue ? 1 : a.modelValue;
      },
      set(p) {
        d(p);
      }
    }), i = V(() => a.allowEmpty ? !o.value : o.value === 1), n = V(() => o.value >= a.max), l = V(() => !!a.error), s = V(() => `${a.id}-error`);
    function d(p) {
      if (a.allowEmpty && !p) {
        r("update:model-value", null);
        return;
      }
      p < 0 || Number.isNaN(p) || typeof p != "number" || !p ? (ki(o), r("update:model-value", 1)) : p > a.max ? (ki(o), r("update:model-value", a.max)) : r("update:model-value", p);
    }
    function c() {
      o.value -= 1;
    }
    function u() {
      o.value += 1;
    }
    const f = V(() => a.required ? { value: { required: pt.withMessage(() => ee("input.required"), er) } } : { value: {} }), m = Ta(f.value, { value: o });
    return (p, h) => {
      var v, g;
      return w(), S("div", sp, [
        E("div", {
          class: se(["amount-input", { small: e.small }])
        }, [
          E("button", {
            disabled: e.disabled || i.value,
            class: "minus",
            "aria-label": z(ee)("amount-input.minus_one"),
            onClick: $t(c, ["stop"])
          }, [
            e.small ? (w(), W(ha, {
              key: 1,
              icon: z(Zu)
            }, null, 8, ["icon"])) : (w(), W(Yt, {
              key: 0,
              icon: z(Ku)
            }, null, 8, ["icon"]))
          ], 8, dp),
          ma(E("input", {
            id: e.id,
            "onUpdate:modelValue": h[0] || (h[0] = (x) => o.value = x),
            class: se([{ "has-error": e.error }, "input"]),
            disabled: e.disabled,
            "aria-label": "Amount input",
            "aria-invalid": l.value,
            "aria-describedby": l.value ? s.value : null,
            type: "number",
            onBlur: h[1] || (h[1] = (x) => {
              var k;
              return (k = z(m).value) == null ? void 0 : k.$touch(x);
            })
          }, null, 42, cp), [
            [Or, o.value]
          ]),
          E("button", {
            disabled: e.disabled || n.value,
            class: "plus",
            "aria-label": z(ee)("amount-input.plus_one"),
            onClick: $t(u, ["stop"])
          }, [
            e.small ? (w(), W(ha, {
              key: 1,
              icon: z(Ju)
            }, null, 8, ["icon"])) : (w(), W(Yt, {
              key: 0,
              icon: z(Wu)
            }, null, 8, ["icon"]))
          ], 8, up)
        ], 2),
        e.error || (g = (v = z(m).value) == null ? void 0 : v.$errors[0]) != null && g.$message ? (w(), S("span", {
          key: 0,
          id: s.value,
          class: "error",
          "aria-live": "assertive",
          role: "alert"
        }, U(e.error || z(m).value.$errors[0].$message), 9, pp)) : N("", !0)
      ]);
    };
  }
}, Ql = /* @__PURE__ */ ce(fp, [["__scopeId", "data-v-d8273f08"]]);
function di(e) {
  return Pn() ? (Bs(e), !0) : !1;
}
const fo = /* @__PURE__ */ new WeakMap(), hp = (...e) => {
  var t;
  const a = e[0], r = (t = Lt()) == null ? void 0 : t.proxy;
  if (r == null && !vl())
    throw new Error("injectLocal must be called in setup");
  return r && fo.has(r) && a in fo.get(r) ? fo.get(r)[a] : Pt(...e);
}, es = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const vp = (e) => e != null, mp = Object.prototype.toString, gp = (e) => mp.call(e) === "[object Object]", Kt = () => {
}, bp = /* @__PURE__ */ wp();
function wp() {
  var e, t;
  return es && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function pn(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function yr(e) {
  return Array.isArray(e) ? e : [e];
}
function yp(e) {
  return Lt();
}
function xp(e, t = !0, a) {
  yp() ? at(e, a) : t ? e() : Ct(e);
}
function kp(e, t, a) {
  return de(
    e,
    t,
    {
      ...a,
      immediate: !0
    }
  );
}
const ta = es ? window : void 0;
function ca(e) {
  var t;
  const a = lt(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
function it(...e) {
  const t = [], a = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, s, d, c) => (l.addEventListener(s, d, c), () => l.removeEventListener(s, d, c)), o = V(() => {
    const l = yr(lt(e[0])).filter((s) => s != null);
    return l.every((s) => typeof s != "string") ? l : void 0;
  }), i = kp(
    () => {
      var l, s;
      return [
        (s = (l = o.value) == null ? void 0 : l.map((d) => ca(d))) != null ? s : [ta].filter((d) => d != null),
        yr(lt(o.value ? e[1] : e[0])),
        yr(z(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        lt(o.value ? e[3] : e[2])
      ];
    },
    ([l, s, d, c]) => {
      if (a(), !(l != null && l.length) || !(s != null && s.length) || !(d != null && d.length))
        return;
      const u = gp(c) ? { ...c } : c;
      t.push(
        ...l.flatMap(
          (f) => s.flatMap(
            (m) => d.map((p) => r(f, m, p, u))
          )
        )
      );
    },
    { flush: "post" }
  ), n = () => {
    i(), a();
  };
  return di(a), n;
}
let fn = !1;
function _p(e, t, a = {}) {
  const { window: r = ta, ignore: o = [], capture: i = !0, detectIframe: n = !1, controls: l = !1 } = a;
  if (!r)
    return l ? { stop: Kt, cancel: Kt, trigger: Kt } : Kt;
  if (bp && !fn) {
    fn = !0;
    const v = { passive: !0 };
    Array.from(r.document.body.children).forEach((g) => g.addEventListener("click", Kt, v)), r.document.documentElement.addEventListener("click", Kt, v);
  }
  let s = !0;
  const d = (v) => lt(o).some((g) => {
    if (typeof g == "string")
      return Array.from(r.document.querySelectorAll(g)).some((x) => x === v.target || v.composedPath().includes(x));
    {
      const x = ca(g);
      return x && (v.target === x || v.composedPath().includes(x));
    }
  });
  function c(v) {
    const g = lt(v);
    return g && g.$.subTree.shapeFlag === 16;
  }
  function u(v, g) {
    const x = lt(v), k = x.$.subTree && x.$.subTree.children;
    return k == null || !Array.isArray(k) ? !1 : k.some((_) => _.el === g.target || g.composedPath().includes(_.el));
  }
  const f = (v) => {
    const g = ca(e);
    if (v.target != null && !(!(g instanceof Element) && c(e) && u(e, v)) && !(!g || g === v.target || v.composedPath().includes(g))) {
      if ("detail" in v && v.detail === 0 && (s = !d(v)), !s) {
        s = !0;
        return;
      }
      t(v);
    }
  };
  let m = !1;
  const p = [
    it(r, "click", (v) => {
      m || (m = !0, setTimeout(() => {
        m = !1;
      }, 0), f(v));
    }, { passive: !0, capture: i }),
    it(r, "pointerdown", (v) => {
      const g = ca(e);
      s = !d(v) && !!(g && !v.composedPath().includes(g));
    }, { passive: !0 }),
    n && it(r, "blur", (v) => {
      setTimeout(() => {
        var g;
        const x = ca(e);
        ((g = r.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(x != null && x.contains(r.document.activeElement)) && t(v);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), h = () => p.forEach((v) => v());
  return l ? {
    stop: h,
    cancel: () => {
      s = !1;
    },
    trigger: (v) => {
      s = !0, f(v), s = !1;
    }
  } : h;
}
function $p() {
  const e = Vt(!1), t = Lt();
  return t && at(() => {
    e.value = !0;
  }, t), e;
}
function ts(e) {
  const t = $p();
  return V(() => (t.value, !!e()));
}
function Sp(e, t, a = {}) {
  const { window: r = ta, ...o } = a;
  let i;
  const n = ts(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, s = V(() => {
    const f = lt(e), m = yr(f).map(ca).filter(vp);
    return new Set(m);
  }), d = de(
    () => s.value,
    (f) => {
      l(), n.value && f.size && (i = new MutationObserver(t), f.forEach((m) => i.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => i == null ? void 0 : i.takeRecords(), u = () => {
    d(), l();
  };
  return di(u), {
    isSupported: n,
    stop: u,
    takeRecords: c
  };
}
function Cp(e, t, a = {}) {
  const {
    window: r = ta,
    document: o = r == null ? void 0 : r.document,
    flush: i = "sync"
  } = a;
  if (!r || !o)
    return Kt;
  let n;
  const l = (c) => {
    n == null || n(), n = c;
  }, s = oi(() => {
    const c = ca(e);
    if (c) {
      const { stop: u } = Sp(
        o,
        (f) => {
          f.map((m) => [...m.removedNodes]).flat().some((m) => m === c || m.contains(c)) && t(f);
        },
        {
          window: r,
          childList: !0,
          subtree: !0
        }
      );
      l(u);
    }
  }, { flush: i }), d = () => {
    s(), l();
  };
  return di(d), d;
}
function zp(e = {}) {
  var t;
  const {
    window: a = ta,
    deep: r = !0,
    triggerOnRemoval: o = !1
  } = e, i = (t = e.document) != null ? t : a == null ? void 0 : a.document, n = () => {
    var d;
    let c = i == null ? void 0 : i.activeElement;
    if (r)
      for (; c != null && c.shadowRoot; )
        c = (d = c == null ? void 0 : c.shadowRoot) == null ? void 0 : d.activeElement;
    return c;
  }, l = Vt(), s = () => {
    l.value = n();
  };
  if (a) {
    const d = {
      capture: !0,
      passive: !0
    };
    it(
      a,
      "blur",
      (c) => {
        c.relatedTarget === null && s();
      },
      d
    ), it(
      a,
      "focus",
      s,
      d
    );
  }
  return o && Cp(l, s, { document: i }), s(), l;
}
const Ap = Symbol("vueuse-ssr-width");
function Ep() {
  const e = vl() ? hp(Ap, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Tp(e, t = {}) {
  const { window: a = ta, ssrWidth: r = Ep() } = t, o = ts(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), i = Vt(typeof r == "number"), n = Vt(), l = Vt(!1), s = (d) => {
    l.value = d.matches;
  };
  return oi(() => {
    if (i.value) {
      i.value = !o.value;
      const d = lt(e).split(",");
      l.value = d.some((c) => {
        const u = c.includes("not all"), f = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || m);
        return f && p && (p = r >= pn(f[1])), m && p && (p = r <= pn(m[1])), u ? !p : p;
      });
      return;
    }
    o.value && (n.value = a.matchMedia(lt(e)), l.value = n.value.matches);
  }), it(n, "change", s, { passive: !0 }), V(() => l.value);
}
const Op = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function ci(e = {}) {
  const {
    reactive: t = !1,
    target: a = ta,
    aliasMap: r = Op,
    passive: o = !0,
    onEventFired: i = Kt
  } = e, n = je(/* @__PURE__ */ new Set()), l = {
    toJSON() {
      return {};
    },
    current: n
  }, s = t ? je(l) : l, d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  function f(v, g) {
    v in s && (t ? s[v] = g : s[v].value = g);
  }
  function m() {
    n.clear();
    for (const v of u)
      f(v, !1);
  }
  function p(v, g) {
    var x, k;
    const _ = (x = v.key) == null ? void 0 : x.toLowerCase(), $ = [(k = v.code) == null ? void 0 : k.toLowerCase(), _].filter(Boolean);
    _ && (g ? n.add(_) : n.delete(_));
    for (const A of $)
      u.add(A), f(A, g);
    _ === "shift" && !g ? (c.forEach((A) => {
      n.delete(A), f(A, !1);
    }), c.clear()) : typeof v.getModifierState == "function" && v.getModifierState("Shift") && g && [...n, ...$].forEach((A) => c.add(A)), _ === "meta" && !g ? (d.forEach((A) => {
      n.delete(A), f(A, !1);
    }), d.clear()) : typeof v.getModifierState == "function" && v.getModifierState("Meta") && g && [...n, ...$].forEach((A) => d.add(A));
  }
  it(a, "keydown", (v) => (p(v, !0), i(v)), { passive: o }), it(a, "keyup", (v) => (p(v, !1), i(v)), { passive: o }), it("blur", m, { passive: o }), it("focus", m, { passive: o });
  const h = new Proxy(
    s,
    {
      get(v, g, x) {
        if (typeof g != "string")
          return Reflect.get(v, g, x);
        if (g = g.toLowerCase(), g in r && (g = r[g]), !(g in s))
          if (/[+_-]/.test(g)) {
            const _ = g.split(/[+_-]/g).map(($) => $.trim());
            s[g] = V(() => _.map(($) => lt(h[$])).every(Boolean));
          } else
            s[g] = Vt(!1);
        const k = Reflect.get(v, g, x);
        return t ? lt(k) : k;
      }
    }
  );
  return h;
}
function Vp(e = {}) {
  const {
    window: t = ta,
    initialWidth: a = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: i = !0,
    type: n = "inner"
  } = e, l = Vt(a), s = Vt(r), d = () => {
    if (t)
      if (n === "outer")
        l.value = t.outerWidth, s.value = t.outerHeight;
      else if (n === "visual" && t.visualViewport) {
        const { width: u, height: f, scale: m } = t.visualViewport;
        l.value = Math.round(u * m), s.value = Math.round(f * m);
      } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  d(), xp(d);
  const c = { passive: !0 };
  if (it("resize", d, c), t && n === "visual" && t.visualViewport && it(t.visualViewport, "resize", d, c), o) {
    const u = Tp("(orientation: portrait)");
    de(u, () => d());
  }
  return { width: l, height: s };
}
function Pp(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })
  ]);
}
function Mp(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ip = { class: "micro-icon" }, jp = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), S("i", Ip, [
      (w(), W(Aa(e.icon)))
    ]));
  }
}, Gr = /* @__PURE__ */ ce(jp, [["__scopeId", "data-v-08f67949"]]), { width: ut, height: Bp } = Vp();
function Lp() {
  return {
    /** < 640px */
    isXs: V(() => ut.value < 640),
    /** 640px - 768px */
    isSm: V(() => ut.value >= 640 && ut.value < 768),
    /** 768px - 1024px */
    isMd: V(() => ut.value >= 768 && ut.value < 1024),
    /** 1024px - 1280px */
    isLg: V(() => ut.value >= 1024 && ut.value <= 1280),
    /** 1280px - 1536px */
    isXl: V(() => ut.value > 1280 && ut.value <= 1536),
    /** > 1536px */
    is2Xl: V(() => ut.value > 1536),
    width: V(() => ut.value),
    height: V(() => Bp.value)
  };
}
const Fp = {
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
    const { isXs: t, isSm: a, isMd: r } = Lp();
    return (o, i) => !z(t) && !z(a) && !z(r) ? (w(), S("div", {
      key: 0,
      class: se(["hotkey", [`${e.disabled ? "secondary" : e.variant}-hotkey`, { disabled: e.disabled }]])
    }, U(e.hotkey), 3)) : N("", !0);
  }
}, as = /* @__PURE__ */ ce(Fp, [["__scopeId", "data-v-822ed718"]]), Dp = {
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
    const a = e, r = t, o = F(null), i = F(!1);
    function n(d) {
      i.value || (r("set:activator", d), i.value = !0);
    }
    function l(d) {
      n(d.currentTarget), r(a.modelValue ? "close" : "open");
    }
    function s(d) {
      n(d.currentTarget);
    }
    return de(
      () => a.modelValue,
      (d) => {
        var c;
        d ? requestAnimationFrame(() => {
          o.value = _p(
            a.floatingContainerEl,
            () => {
              a.modelValue && r("close");
            },
            { ignore: [a.activatorEl] }
          );
        }) : ((c = o.value) == null || c.call(o), o.value = null);
      }
    ), (d, c) => Q(d.$slots, "default", {
      slotProps: { onClick: l, onFocus: s }
    });
  }
}, Np = {
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
    return de(
      () => a.isFocused,
      (l) => {
        l || r("close");
      }
    ), (l, s) => Q(l.$slots, "default", {
      slotProps: { onFocus: o, onInput: i, onClick: n }
    });
  }
}, Rp = {
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
    const a = e, r = t, o = F(!1), i = F(!1);
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
    return de(
      () => a.modelValue,
      () => {
        a.modelValue || (o.value = !1);
      }
    ), (c, u) => Q(c.$slots, "default", {
      slotProps: { onMouseover: l, onMouseleave: n, onFocus: s, onBlur: d }
    });
  }
}, Up = {
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
    return (s, d) => Q(s.$slots, "default", {
      slotProps: { setActivator: o, toggle: l }
    });
  }
}, Hp = {};
function qp(e, t) {
  return w(), W(Xa, { name: "NO_TRANSITION" }, {
    default: Z(() => [
      Q(e.$slots, "default")
    ]),
    _: 3
  });
}
const Kp = /* @__PURE__ */ ce(Hp, [["render", qp]]), Wp = {};
function Zp(e, t) {
  return w(), W(Xa, null, {
    default: Z(() => [
      Q(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const Jp = /* @__PURE__ */ ce(Wp, [["render", Zp], ["__scopeId", "data-v-ed45de91"]]), Gp = {
  __name: "_ExpandTransition",
  props: {
    placement: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (w(), W(Xa, {
      name: `expand-${e.placement}`
    }, {
      default: Z(() => [
        Q(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, Yp = /* @__PURE__ */ ce(Gp, [["__scopeId", "data-v-ee42469e"]]), Xp = {
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
    return at(() => {
      o.observe(document.body, { childList: !0, subtree: !0 });
    }), Va(() => {
      o.disconnect(), a("close");
    }), (i, n) => Q(i.$slots, "default", {
      slotProps: { "data-activator-uuid": r }
    });
  }
};
function Ca(e, t = !1) {
  if (!e)
    return [];
  const a = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((r) => `${r}${t ? "" : ':not([tabindex="-1"])'}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(a)];
}
const Qp = {
  top: ["bottom", "right", "left"],
  right: ["left", "top", "bottom"],
  left: ["right", "top", "bottom"],
  bottom: ["top", "right", "left"]
}, hn = {
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
function ef(e) {
  var t;
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function rs(e) {
  const { overflow: t, overflowX: a, overflowY: r, display: o } = getComputedStyle(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + a) && !["inline", "contents"].includes(o);
}
function tf(e) {
  return !e || ["html", "body", "#document"].includes(e.nodeName.toLowerCase());
}
function af(e) {
  return e instanceof HTMLElement;
}
function rf(e) {
  return e.getRootNode ? e.getRootNode() : e;
}
function of(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host || rf(e).host || null;
}
function os(e) {
  const t = of(e);
  return tf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : af(t) && rs(t) ? t : os(t);
}
function is(e, t = []) {
  var i;
  const a = os(e), r = a === ((i = e == null ? void 0 : e.ownerDocument) == null ? void 0 : i.body), o = ef(a);
  return r ? t.concat(
    o,
    o.visualViewport || [],
    rs(a) ? a : []
  ) : t.concat(a, is(a, []));
}
function nf(e, t, a, r) {
  const { scrollTop: o, scrollLeft: i, clientWidth: n, clientHeight: l } = document.documentElement;
  return e >= o && t >= i && t + a <= i + (window.innerWidth || n) && e + r <= o + (window.innerHeight || l);
}
function vn(e, t, a) {
  switch (e) {
    case "left":
      return t.left;
    case "right":
      return t.left + t.width - a;
    default:
      return t.left + (t.width - a) / 2;
  }
}
function mn(e, t, a) {
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
function lf(e, t, a, r) {
  return {
    top: (o) => ({
      top: window.scrollY + e.top - a - r.offset,
      left: vn(o, e, t)
    }),
    bottom: (o) => ({
      top: window.scrollY + e.top + e.height + r.offset,
      left: vn(o, e, t)
    }),
    left: (o) => ({
      top: mn(o, e, a),
      left: e.left - t - r.offset
    }),
    right: (o) => ({
      top: mn(o, e, a),
      left: e.left + e.width + r.offset
    })
  };
}
async function sf(e, t, a, r, o = null) {
  let i;
  if (o) {
    const f = o.clientX, m = o.clientY;
    i = {
      top: m,
      left: f,
      right: f,
      bottom: m,
      width: 0,
      height: 0,
      x: f,
      y: m
    };
  } else
    i = a.getBoundingClientRect();
  const [n, l] = r.location.replaceAll(" ", "").split(","), s = l || "center", d = lf(i, t, e, r), c = (f, m) => {
    const p = d[f](m);
    return nf(p.top, p.left, t, e) ? { placement: f, alignment: m, ...p } : null;
  };
  let u = c(n, s);
  return u || ((hn[n][s] || []).some((f) => (u = c(n, f), !!u)), u) || (Qp[n].some((f) => (u = c(f, s), u ? !0 : Object.keys(hn[f]).some((m) => (u = c(f, m), !!u)))), u) ? u : { placement: n, alignment: s, ...d[n](s) };
}
function df(e, t) {
  const a = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  a.width !== r.width && (e.style.minWidth = `${a.width}px`);
}
async function cf(e, t, a, r = null) {
  e.style.visibility !== "visible" && e.showPopover();
  let o;
  a.attach instanceof HTMLElement ? o = a.attach : typeof a.attach == "string" ? o = document.querySelector(a.attach) : o = t, a.fitContent || df(e, o);
  const { offsetHeight: i, offsetWidth: n } = e, { top: l, left: s, placement: d, alignment: c } = await sf(
    i,
    n,
    o,
    a,
    r
  );
  return e.style.top = `${l}px`, e.style.left = `${s}px`, e.style.visibility = "visible", { placement: d, alignment: c };
}
function uf(e, t) {
  const a = F(), r = F(), o = F(), i = F(), n = F(-1), l = je({
    location: "bottom",
    fitContent: !1,
    attach: null,
    offset: 0
  }), s = je([]);
  async function d() {
    if (!e.value || !t.value)
      return;
    const m = await cf(e.value, t.value, l, i.value);
    a.value = m.placement, r.value = m.alignment;
  }
  function c() {
    s.forEach((m) => {
      m.removeEventListener("scroll", d), m.removeEventListener("resize", d);
    }), s.splice(0), e.value && (s.push(...is(e.value)), s.forEach((m) => {
      m.addEventListener("scroll", d, {
        passive: !0
      }), m.addEventListener("resize", d);
    }));
  }
  function u() {
    o.value = new ResizeObserver((m) => {
      const [p] = m;
      (p == null ? void 0 : p.target) === t.value && o.value && (o.value.unobserve(e.value), cancelAnimationFrame(n.value), n.value = requestAnimationFrame(() => {
        var h;
        e.value && ((h = o.value) == null || h.observe(e.value));
      })), requestAnimationFrame(async () => {
        e.value && await d();
      });
    });
  }
  function f(m) {
    Object.keys(m).forEach((p) => {
      p in l && (l[p] = m[p]);
    });
  }
  return de(e, (m, p) => {
    var h, v;
    if (!m || !t.value) {
      (h = o.value) == null || h.unobserve(p), (v = o.value) == null || v.unobserve(t.value);
      return;
    }
    u(), o.value.observe(m), o.value.observe(t.value);
  }), Va(() => {
    var m;
    s.forEach((p) => {
      p.removeEventListener("scroll", d), p.removeEventListener("resize", d);
    }), s.splice(0), (m = o.value) == null || m.disconnect();
  }), {
    autoUpdate: (m = { location: "bottom" }) => {
      f(m), [a.value, r.value] = l.location.replaceAll(" ", "").split(","), de([e, t], async ([p, h]) => {
        c(), p && h && await d();
      });
    },
    fixedPosition: (m = { location: "bottom" }) => {
      f(m), [a.value, r.value] = l.location.replaceAll(" ", "").split(","), requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          c(), await d();
        });
      });
    },
    watchCursor: () => {
      async function m(p) {
        i.value = p, e.value && await d();
      }
      de(t, async (p, h) => {
        if (!p) {
          h.removeEventListener("mousemove", m);
          return;
        }
        p.addEventListener("mousemove", m);
      });
    },
    placement: a,
    alignment: r
  };
}
const pf = {
  key: 1,
  class: "floating-container-overlay-container"
}, ff = { class: "floating-container-overlay" }, hf = {
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
    const r = e, o = a, i = xa("floating-container-content"), n = F(null), { autoUpdate: l, fixedPosition: s, watchCursor: d, placement: c, alignment: u } = uf(
      i,
      n
    ), f = zp(), m = F(!1), p = F(!1), h = F(-1), v = V(() => {
      var M, q;
      return f.value === n.value || f.value === i.value || ((M = n.value) == null ? void 0 : M.contains(f.value)) || ((q = i.value) == null ? void 0 : q.contains(f.value)) || !1;
    }), g = V(() => {
      switch (r.behavior) {
        case "focus":
          return { component: Np, props: { isFocused: v.value } };
        case "hover":
          return {
            component: Rp,
            props: { floatingContainerEl: i.value }
          };
        case "manual":
          return { component: Up };
        case "static":
          return { component: Xp };
        default:
          return {
            component: Dp,
            props: {
              floatingContainerEl: i.value,
              activatorEl: n.value
            }
          };
      }
    });
    function x(M) {
      n.value = M;
    }
    function k() {
      clearTimeout(h.value), h.value = setTimeout(() => {
        p.value = !0, m.value = !0, o("update:isOpen", !0);
      }, r.delay);
    }
    function _() {
      clearTimeout(h.value), p.value = !1, r.transition !== "fade" && r.transition !== "expand" && (m.value = !1);
    }
    function $() {
      m.value = !1, o("update:isOpen", !1);
    }
    function A() {
      var M;
      !r.closeOnClick || !m.value || r.behavior === "static" || ((M = n.value) == null || M.focus(), _());
    }
    function le(M) {
      if (M.key === "Tab") {
        const q = Ca(i.value, !0), B = q.indexOf(document.activeElement), te = M.shiftKey ? B - 1 : B + 1;
        q[te] ? (M.preventDefault(), q[te].focus()) : (M.preventDefault(), te <= 0 && n.value.focus());
      } else if (M.key === "Escape") {
        if (r.behavior === "static")
          return;
        n.value.focus(), _();
      } else M.key === "Enter" && (M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation(), r.closeOnClick && r.behavior !== "static" && (n.value.focus(), _()));
    }
    async function ie(M) {
      var te, he;
      if (M.key === "Escape") {
        if (r.behavior === "static")
          return;
        M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation(), _();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(M.key))
        return;
      i.value || (k(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const q = Ca(i.value);
      if (q.length === 0)
        return;
      M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
      const B = q.indexOf(document.activeElement);
      B === -1 ? Ca(i.value)[0].focus() : M.key === "ArrowDown" ? (te = q[B + 1]) == null || te.focus() : M.key === "ArrowUp" && ((he = q[B - 1]) == null || he.focus());
    }
    de(
      () => v.value,
      () => {
        o("update:focus", v.value);
      }
    ), de([c, u], () => {
      o("update:location", [c.value, u.value].filter(Boolean).join(","));
    });
    const O = V(() => {
      switch (r.transition) {
        case "fade":
          return Jp;
        case "expand":
          return Yp;
        default:
          return Kp;
      }
    });
    return at(async () => {
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
          k(), s({
            location: r.location,
            attach: r.attach,
            offset: r.offset
          });
          break;
        default:
          console.warn(`Behavior "${r.behavior}" is not supported.`);
      }
    }), t({
      close: _
    }), (M, q) => (w(), S(be, null, [
      g.value ? (w(), W(Aa(g.value.component), Ve({ key: 0 }, g.value.props, {
        "model-value": m.value,
        onOpen: k,
        onClose: _,
        "onSet:activator": x
      }), {
        default: Z(({ slotProps: B }) => [
          Q(M.$slots, "activator", za(Wr({
            ...B,
            onKeydown: ie
          })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : N("", !0),
      m.value ? (w(), S("div", pf, [
        E("div", ff, [
          (w(), W(Aa(O.value), {
            placement: z(c),
            alignment: z(u),
            appear: "",
            onAfterLeave: $
          }, {
            default: Z(() => [
              ma(E("div", {
                ref: "floating-container-content",
                class: "floating-container-content",
                "data-testid": "menu",
                popover: "manual",
                tabindex: "-1",
                onKeydown: le,
                onClick: A
              }, [
                Q(M.$slots, "default", {}, void 0, !0)
              ], 544), [
                [ni, p.value]
              ])
            ]),
            _: 3
          }, 40, ["placement", "alignment"]))
        ])
      ])) : N("", !0)
    ], 64));
  }
}, ns = /* @__PURE__ */ ce(hf, [["__scopeId", "data-v-a4925caf"]]), vf = {
  __name: "PTooltip",
  props: /* @__PURE__ */ Mt({
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
    const t = ga(e, "location"), a = xa("tooltip-wrapper"), r = V(() => {
      var o;
      return (o = a.value) == null ? void 0 : o.children[0];
    });
    return (o, i) => (w(), W(ns, {
      offset: e.offset,
      behavior: e.behavior,
      location: t.value,
      "fit-content": e.width === "fit-content",
      attach: e.attach || r.value,
      delay: e.behavior !== "static" ? 150 : 0,
      "close-on-click": !1,
      "onUpdate:location": i[0] || (i[0] = (n) => t.value = n)
    }, {
      activator: Z((n) => [
        E("div", Ve({
          ref: "tooltip-wrapper",
          class: "tooltip-wrapper"
        }, n), [
          Q(o.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      default: Z(() => [
        e.text || o.$slots.content ? (w(), S("div", {
          key: 0,
          class: se(["tooltip", [t.value.replace(/,/g, "-"), { inverted: e.inverted }]]),
          style: St({ width: e.width })
        }, [
          Q(o.$slots, "content", {}, () => [
            _e(U(e.text), 1)
          ], !0)
        ], 6)) : N("", !0)
      ]),
      _: 3
    }, 8, ["offset", "behavior", "location", "fit-content", "attach", "delay"]));
  }
}, mf = /* @__PURE__ */ ce(vf, [["__scopeId", "data-v-2a3a7b5b"]]), gf = ["for"], bf = { class: "label-text" }, wf = {
  variant: "text",
  size: "small"
}, yf = {
  key: 0,
  class: "optional"
}, xf = { class: "container-inner" }, kf = {
  key: 0,
  class: "inline-container-prepended"
}, _f = ["id", "placeholder", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "rows", "autofocus"], $f = ["id", "placeholder", "type", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "autofocus"], Sf = { class: "inline-container-appended" }, Cf = {
  key: 1,
  class: "text"
}, zf = ["id"], Af = {
  __name: "PInput",
  props: /* @__PURE__ */ Mt({
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
      type: String,
      default: ""
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Mt(["blur", "focus"], ["update:modelValue"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, o = ga(e, "modelValue"), i = pl(), n = a, l = Pt("showError", !0), s = ci()[r.hotkey.key], d = F(null), c = V(() => r.error ? Pp : r.icon), u = V(() => r.optional !== "" ? r.optional : ee("input.optional")), f = V(() => r.requiredMessage ? r.requiredMessage : r.label ? ee("input.required_with_label", { label: r.label.toLowerCase() }) : ee("input.required")), m = V(() => {
      const x = r.required ? { modelValue: { required: pt.withMessage(() => f.value, er) } } : { modelValue: {} };
      return r.rules.forEach((k, _) => {
        x.modelValue[k.label || _] = pt.withMessage(() => k.message || "", k.validator);
      }), x;
    });
    let p = Ta(m, { modelValue: o });
    const h = V(() => {
      var x;
      return !!r.error || ((x = p.value.modelValue.$errors) == null ? void 0 : x.length) > 0;
    }), v = V(() => `${r.id}-error`);
    function g(x) {
      n("blur", x), p.value.$touch(x);
    }
    return de(s, (x) => {
      x && r.hotkey && setTimeout(() => {
        d.value.focus();
      }, 100);
    }), de(m, () => {
      p = Ta(m, { modelValue: o });
    }), t({
      input: d
    }), (x, k) => {
      var _, $;
      return w(), S("div", {
        class: se(["input-container", { "has-error": h.value, "is-large": e.large }]),
        tabindex: "-1",
        onFocus: k[4] || (k[4] = (A) => x.$refs.input.focus())
      }, [
        e.label ? (w(), S("label", {
          key: 0,
          class: "input-label",
          for: e.id
        }, [
          E("span", bf, [
            _e(U(e.label) + " ", 1),
            e.info || z(i).info ? (w(), W(mf, {
              key: 0,
              location: "right",
              inverted: ""
            }, {
              content: Z(() => [
                Q(x.$slots, "info", {}, () => [
                  _e(U(e.info), 1)
                ], !0)
              ]),
              default: Z(() => [
                E("span", wf, [
                  G(Gr, {
                    class: "info-icon",
                    icon: z(Mp)
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 3
            })) : N("", !0)
          ]),
          e.required ? N("", !0) : (w(), S("span", yf, U(u.value), 1))
        ], 8, gf)) : N("", !0),
        E("div", xf, [
          e.prependIcon ? (w(), S("div", kf, [
            G(Yt, { icon: e.prependIcon }, null, 8, ["icon"])
          ])) : N("", !0),
          e.expand ? ma((w(), S("textarea", Ve({
            key: 1,
            id: e.id,
            ref_key: "input",
            ref: d,
            "onUpdate:modelValue": k[0] || (k[0] = (A) => o.value = A),
            autocomplete: "off",
            class: ["input", {
              "has-error": h.value,
              "is-valid": e.valid,
              "has-icon-prepended": e.prependIcon,
              "has-icon-appended": e.icon
            }],
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            "aria-label": e.ariaLabel,
            "aria-invalid": h.value,
            "aria-describedby": h.value ? v.value : null,
            rows: e.rows,
            autofocus: e.autofocus
          }, x.$attrs, {
            onFocus: k[1] || (k[1] = (A) => n("focus", A)),
            onBlur: g
          }), null, 16, _f)), [
            [Or, o.value]
          ]) : ma((w(), S("input", Ve({
            key: 2,
            id: e.id,
            ref_key: "input",
            ref: d,
            "onUpdate:modelValue": k[2] || (k[2] = (A) => o.value = A),
            autocomplete: "off",
            class: ["input", {
              "has-error": h.value,
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
            "aria-invalid": h.value,
            "aria-describedby": h.value ? v.value : null,
            autofocus: e.autofocus
          }, x.$attrs, {
            onFocus: k[3] || (k[3] = (A) => n("focus", A)),
            onBlur: g
          }), null, 16, $f)), [
            [Xc, o.value]
          ]),
          E("div", Sf, [
            Q(x.$slots, "inline", {}, () => [
              e.icon ? (w(), W(Yt, {
                key: 0,
                icon: c.value,
                class: se({ "has-error": h.value })
              }, null, 8, ["icon", "class"])) : N("", !0),
              e.inline ? (w(), S("span", Cf, U(e.inline), 1)) : N("", !0),
              e.hotkey.label ? (w(), W(as, {
                key: 2,
                hotkey: e.hotkey.label,
                variant: "secondary"
              }, null, 8, ["hotkey"])) : N("", !0)
            ], !0)
          ])
        ]),
        h.value && z(l) ? (w(), S("span", {
          key: 1,
          id: v.value,
          class: "error",
          "aria-live": "assertive",
          role: "alert"
        }, U(($ = (_ = z(p).modelValue) == null ? void 0 : _.$errors[0]) != null && $.$message ? z(p).modelValue.$errors[0].$message : e.error), 9, zf)) : N("", !0)
      ], 34);
    };
  }
}, ui = /* @__PURE__ */ ce(Af, [["__scopeId", "data-v-88a4183b"]]);
function pi(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Ef(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
const Tf = {
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
          return pi;
        case "attention":
          return Ef;
        default:
          return null;
      }
    });
    return (r, o) => (w(), S("div", {
      class: se(["status", e.status])
    }, [
      a.value ? (w(), W(Gr, {
        key: 0,
        icon: a.value
      }, null, 8, ["icon"])) : N("", !0)
    ], 2));
  }
}, ls = /* @__PURE__ */ ce(Tf, [["__scopeId", "data-v-c0e73fbd"]]);
function Of(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Vf(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Pf(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Mf(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const If = ["data-testid"], jf = { class: "icon" }, Bf = { class: "content" }, Lf = { class: "title" }, Ff = {
  key: 0,
  class: "description"
}, Df = {
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
    const t = e, a = V(() => t.icon ? t.icon : t.type === "error" ? Vf : t.type === "warning" ? Pf : t.type === "success" ? Of : t.type === "info" ? Mf : null);
    return (r, o) => (w(), S("div", {
      class: se(["alert", e.type]),
      "data-testid": `alert-${e.type}`
    }, [
      Q(r.$slots, "default", {}, () => [
        E("div", jf, [
          G(ha, { icon: a.value }, null, 8, ["icon"])
        ]),
        E("div", Bf, [
          E("span", Lf, U(e.title), 1),
          e.description ? (w(), S("span", Ff, U(e.description), 1)) : N("", !0)
        ])
      ], !0)
    ], 10, If));
  }
}, Mr = /* @__PURE__ */ ce(Df, [["__scopeId", "data-v-e623b23f"]]), Nf = ["id"], Rf = { class: "header" }, Uf = {
  class: "title",
  part: "step-title"
}, Hf = {
  key: 1,
  class: "separator"
}, qf = {
  key: 0,
  class: "subtitle status-text",
  part: "step-subtitle"
}, Kf = {
  key: 1,
  class: "total",
  part: "step-subtitle"
}, Wf = {
  key: 0,
  class: "content"
}, Zf = {
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = F({}), i = je({
      width: null,
      height: null
    }), n = F(null), l = V(() => {
      const v = a.options.find(($) => $.code === "width"), g = a.options.find(($) => $.code === "height"), x = v && v.reversible && g && g.reversible, k = v == null ? void 0 : v.min, _ = g == null ? void 0 : g.min;
      return x ? Math.min(k, _) : { width: k, height: _ };
    }), s = V(() => {
      const v = a.options.find(($) => $.code === "width"), g = a.options.find(($) => $.code === "height"), x = v && v.reversible && g && g.reversible, k = v == null ? void 0 : v.max, _ = g == null ? void 0 : g.max;
      return x ? Math.max(k, _) : { width: k, height: _ };
    }), d = {
      width: {
        minValue: pt.withMessage(
          ee("step.min_value", {
            minValue: typeof l.value == "number" ? l.value : l.value.width
          }),
          cn(typeof l.value == "number" ? l.value : l.value.width)
        ),
        required: pt.withMessage(ee("step.required"), er),
        maxValue: pt.withMessage(
          ee("step.max_value", {
            maxValue: typeof s.value == "number" ? s.value : s.value.width
          }),
          un(typeof s.value == "number" ? s.value : s.value.width)
        )
      },
      height: {
        minValue: pt.withMessage(
          ee("step.min_value", {
            minValue: typeof l.value == "number" ? l.value : l.value.height
          }),
          cn(typeof l.value == "number" ? l.value : l.value.height)
        ),
        required: pt.withMessage(ee("step.required"), er),
        maxValue: pt.withMessage(
          ee("step.max_value", {
            maxValue: typeof s.value == "number" ? s.value : s.value.height
          }),
          un(typeof s.value == "number" ? s.value : s.value.height)
        )
      }
    }, c = Ta(d, i), u = F(null);
    function f(v, g) {
      if (v && g && (!c.$errors || c.$errors.length === 0)) {
        const x = v * g / 1e4;
        n.value = Number(x.toFixed(2)), o.value = [
          { code: "width", value: v },
          { code: "height", value: g }
        ];
      }
    }
    function m() {
      i.width && i.height && (!a.modelValue || a.modelValue[0].value !== i.width || a.modelValue[1].value !== i.height) && (!c.value.$errors || c.value.$errors.length === 0) && r("update:modelValue", o.value);
    }
    function p() {
      var v, g, x;
      (x = (g = (v = u.value) == null ? void 0 : v.getElementsByClassName("input")) == null ? void 0 : g[0]) == null || x.focus();
    }
    function h(v) {
      setTimeout(() => {
        r("update:focus", v);
      }, 200);
    }
    return de(
      () => ({ ...o.value }),
      (v, g) => {
        var k;
        const x = v;
        x.code = a.code, g.value !== v.value && (v.value !== ((k = a.modelValue) == null ? void 0 : k.value) || !a.modelValue) && r("update:modelValue", x);
      }
    ), at(() => {
      var v, g, x, k;
      p(), (v = a.modelValue) != null && v.length ? (i.width = (g = a.modelValue.find((_) => _.code === "width")) == null ? void 0 : g.value, i.height = (x = a.modelValue.find((_) => _.code === "height")) == null ? void 0 : x.value) : a.modelValue && a.modelValue.code === a.code && (o.value.value = ((k = a.modelValue) == null ? void 0 : k.value) || 1);
    }), de(
      () => a.modelValue,
      (v) => {
        var g, x;
        v != null && v.length ? (i.width = (g = v.find((k) => k.code === "width")) == null ? void 0 : g.value, i.height = (x = v.find((k) => k.code === "height")) == null ? void 0 : x.value, c.value.$touch()) : a.modelValue && a.modelValue.code === a.code && (o.value.value = (v == null ? void 0 : v.value) || 1);
      },
      { immediate: !0 }
    ), (v, g) => (w(), S("div", {
      id: "accordion-header-" + e.ariaTitle,
      class: se(["configurator-step simple", { disabled: e.disabled }]),
      part: "step"
    }, [
      E("div", Rf, [
        G(ls, { status: e.status }, null, 8, ["status"]),
        E("div", {
          ref_key: "inner",
          ref: u,
          class: "inner"
        }, [
          E("h3", Uf, U(e.title), 1),
          E("div", {
            class: se(["measurement-inputs", { "has-errors": z(c).$errors && z(c).$errors.length }])
          }, [
            (w(!0), S(be, null, Zt(e.options, (x, k) => {
              var _;
              return w(), S(be, { key: k }, [
                x.code === "width" || x.code === "height" ? (w(), W(ui, {
                  key: 0,
                  id: `measurement-input-${x.code}`,
                  modelValue: i[x.code],
                  "onUpdate:modelValue": [
                    ($) => i[x.code] = $,
                    g[0] || (g[0] = ($) => f(i.width, i.height))
                  ],
                  required: "",
                  type: "number",
                  "aria-label": x.code,
                  class: "measurement-input",
                  inline: x.unit,
                  min: x.min,
                  max: x.max,
                  placeholder: "",
                  error: z(c)[x.code].$errors ? (_ = z(c)[x.code].$errors[0]) == null ? void 0 : _.$message : "",
                  onBlur: ($) => {
                    z(c)[x.code].$touch($), m(), h(!1);
                  },
                  onKeyup: xt(($) => {
                    z(c)[x.code].$touch($), m();
                  }, ["enter"]),
                  onFocus: g[1] || (g[1] = ($) => h(!0))
                }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "error", "onBlur", "onKeyup"])) : N("", !0),
                x.code === "width" ? (w(), S("span", Hf, " x ")) : x.code === "amount" ? (w(), W(Ql, {
                  key: 2,
                  modelValue: o.value.value,
                  "onUpdate:modelValue": g[2] || (g[2] = ($) => o.value.value = $),
                  min: x.min,
                  max: x.max || void 0,
                  onKeyup: g[3] || (g[3] = xt(($) => !e.modelValue || Number($.target.value) !== e.modelValue.value ? r("update:modelValue", { value: Number($.target.value), code: "amount" }) : "", ["enter"])),
                  onBlur: g[4] || (g[4] = ($) => h(!1)),
                  onFocus: g[5] || (g[5] = ($) => h(!0))
                }, null, 8, ["modelValue", "min", "max"])) : N("", !0)
              ], 64);
            }), 128))
          ], 2)
        ], 512),
        e.status === "attention" && e.attentionText ? (w(), S("span", qf, U(e.attentionText), 1)) : N("", !0),
        n.value ? (w(), S("span", Kf, U(e.totalPrefix || z(ee)("step.total")) + ": " + U(n.value) + " m² ", 1)) : N("", !0)
      ]),
      e.alert ? (w(), S("div", Wf, [
        G(Mr, za(Wr(e.alert)), null, 16)
      ])) : N("", !0)
    ], 10, Nf));
  }
}, Jf = /* @__PURE__ */ ce(Zf, [["__scopeId", "data-v-471a4096"]]);
function Gf(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
    })
  ]);
}
const Yf = {
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
    return (t, a) => (w(), S("span", {
      class: se(["label", [{ small: e.small }, { alt: e.alt }, e.color]])
    }, [
      Q(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, fi = /* @__PURE__ */ ce(Yf, [["__scopeId", "data-v-f6c45fb8"]]), Xf = ["srcset"], Qf = ["srcset"], e0 = ["src", "alt", "height", "width"], t0 = {
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
    const a = t, r = e, o = F(!1);
    function i(l) {
      o.value = !0, a("error", l);
    }
    const n = V(() => r.image);
    return de(n, () => {
      o.value = !1;
    }), (l, s) => (w(), S("picture", {
      class: "image-wrapper",
      style: St({ width: `${e.width}px`, height: `${e.height}px` })
    }, [
      E("source", {
        media: "(max-width: 640px)",
        srcset: e.mobile
      }, null, 8, Xf),
      E("source", {
        media: "(max-width: 1024px)",
        srcset: e.tablet
      }, null, 8, Qf),
      e.image && !o.value ? (w(), S("img", {
        key: 0,
        loading: "lazy",
        class: se(["image", e.rounded ? `rounded-${e.rounded}` : ""]),
        src: e.image,
        alt: e.alt,
        height: e.height,
        width: e.width,
        onError: i
      }, null, 42, e0)) : (w(), S("div", {
        key: 1,
        class: se(["skeleton", e.rounded ? `rounded-${e.rounded}` : ""])
      }, null, 2))
    ], 4));
  }
}, ss = /* @__PURE__ */ ce(t0, [["__scopeId", "data-v-4654b093"]]), a0 = {
  key: 0,
  class: "amount"
}, r0 = {
  key: 1,
  class: "labels"
}, o0 = {
  __name: "POptionCardHeader",
  props: /* @__PURE__ */ Mt({
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
    modelValue: {
      type: Number,
      default: 0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ga(e, "modelValue");
    return (a, r) => (w(), S(be, null, [
      e.selected && e.editAmount ? (w(), S("div", a0, [
        E("span", null, U(e.amountLabel), 1),
        G(Ql, {
          modelValue: t.value,
          "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
          onClick: r[1] || (r[1] = $t(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : N("", !0),
      e.labels.length && !e.editAmount ? (w(), S("div", r0, [
        (w(!0), S(be, null, Zt(e.labels, (o, i) => (w(), S(be, { key: i }, [
          o.text ? (w(), W(fi, {
            key: 0,
            color: o.color,
            small: ""
          }, {
            default: Z(() => [
              _e(U(o.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : N("", !0)
        ], 64))), 128))
      ])) : N("", !0),
      e.image && !e.editAmount ? (w(), W(ss, {
        key: 2,
        image: e.image,
        alt: `${e.title} ${z(ee)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : N("", !0)
    ], 64));
  }
}, i0 = /* @__PURE__ */ ce(o0, [["__scopeId", "data-v-fd61a9c2"]]);
function n0(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function l0(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
const s0 = {
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
    return (t, a) => (w(), S("div", {
      class: se(["loader", `${e.color}-loader ${e.size}-loader`])
    }, null, 2));
  }
}, lr = /* @__PURE__ */ ce(s0, [["__scopeId", "data-v-7d40d0e0"]]), d0 = ["tabindex", "disabled"], c0 = {
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
    const t = e, a = pl(), r = ci()[t.hotkey.key], o = V(() => t.variant === "secondary" || t.variant === "tertiary" ? t.variant : t.variant === "text" ? "secondary" : "primary");
    return de(r, (i) => {
      var n;
      i && ((n = t.hotkey) != null && n.key) && !t.loading && !t.disabled && t.hotkey.callback();
    }), (i, n) => (w(), S("button", {
      class: se(["button", [e.variant, e.size, e.color, z(a).default ? "" : "has-icon", e.loading ? "pointer-events-none" : ""]]),
      tabindex: e.loading ? -1 : 0,
      disabled: e.disabled
    }, [
      e.loading ? (w(), W(lr, {
        key: 0,
        color: ["danger", "success", "primary"].includes(e.variant) ? "secondary" : "primary",
        size: e.size
      }, null, 8, ["color", "size"])) : e.icon ? (w(), W(ha, {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : N("", !0),
      Q(i.$slots, "default", {}, void 0, !0),
      e.hotkey.key ? (w(), W(as, {
        key: 2,
        hotkey: e.hotkey.label,
        variant: o.value,
        disabled: e.disabled
      }, null, 8, ["hotkey", "variant", "disabled"])) : N("", !0)
    ], 10, d0));
  }
}, et = /* @__PURE__ */ ce(c0, [["__scopeId", "data-v-381ebff5"]]), u0 = {
  key: 0,
  class: "not-available"
}, p0 = {
  key: 1,
  class: "custom-value"
}, f0 = {
  key: 2,
  class: "information"
}, h0 = {
  key: 0,
  class: "delivery"
}, v0 = { class: "delivery-time" }, m0 = {
  key: 1,
  class: "price"
}, g0 = {
  key: 0,
  class: "price-per"
}, b0 = {
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
    const a = e, r = t, o = F(a.customInput.value), i = V({
      get: () => a.customInput.value,
      set: (l) => {
        o.value = Number(l);
      }
    });
    function n() {
      o.value && o.value > 0 && r("update:customValue", o.value);
    }
    return (l, s) => e.disabled && e.notAvailableMessage ? (w(), S("div", u0, [
      G(Gr, { icon: z(n0) }, null, 8, ["icon"]),
      E("span", null, U(e.notAvailableMessage), 1)
    ])) : e.customInput.value && e.customInput.unit && !e.disabled && !e.notAvailableMessage ? (w(), S("div", p0, [
      G(ui, {
        id: "custom-value",
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => i.value = d),
        inline: e.customInput.unit,
        required: "",
        "data-testid": "custom-value-input",
        "aria-label": z(ee)("option.custom_value")
      }, null, 8, ["modelValue", "inline", "aria-label"]),
      G(et, {
        variant: "primary",
        "data-testid": "custom-value-submit",
        onClick: $t(n, ["stop"])
      }, {
        default: Z(() => [
          _e(U(e.customInput.buttonText || z(ee)("option.continue")), 1)
        ]),
        _: 1
      })
    ])) : (w(), S("div", f0, [
      e.deliveryTime ? (w(), S("span", h0, [
        G(Yt, { icon: z(l0) }, null, 8, ["icon"]),
        E("span", v0, U(e.deliveryTimeText), 1)
      ])) : N("", !0),
      e.price ? (w(), S("span", m0, [
        _e(" € " + U(e.price) + " ", 1),
        e.pricePer ? (w(), S("span", g0, " / " + U(e.pricePer), 1)) : N("", !0)
      ])) : N("", !0)
    ]));
  }
}, w0 = /* @__PURE__ */ ce(b0, [["__scopeId", "data-v-45867763"]]), y0 = ["tabindex", "aria-current", "part", "aria-disabled"], x0 = {
  key: 0,
  class: "no-option"
}, k0 = {
  key: 1,
  class: "inner"
}, _0 = { class: "header" }, $0 = { class: "content" }, S0 = {
  key: 0,
  class: "title",
  part: "option-title"
}, C0 = {
  class: "description",
  part: "option-description"
}, z0 = { class: "footer" }, A0 = {
  __name: "POptionCard",
  props: /* @__PURE__ */ Mt({
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
  emits: /* @__PURE__ */ Mt(["update:modelValue", "update:amount", "update:customValue"], ["update:modelValue", "update:amount"]),
  setup(e, { emit: t }) {
    const a = e, r = t, o = F(!1), i = V(() => a.deliveryTimeText !== "" ? `${a.deliveryTime} ${a.deliveryTimeText}` : lp("option.days", a.deliveryTime)), n = V(() => {
      switch (a.pricePer) {
        case "unit":
          return ee("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), l = ga(e, "modelValue"), s = ga(e, "amount"), d = V(() => a.amountLabel ? a.amountLabel : ee("option.amount")), c = V(() => typeof s.value == "number" && s.value > 0);
    function u(p) {
      a.disabled || (l.value = a.customInput.value && !p || !l.value, o.value = c.value ? !o.value : !1, p && r("update:customValue", p));
    }
    function f(p, h) {
      let v = null;
      h === "left" && p ? v = p.previousElementSibling : h === "right" && p && (v = p.nextElementSibling);
      const g = v == null ? void 0 : v.querySelector(".header");
      if (v && !g.disabled) {
        g.click();
        let x = null;
        const k = v.querySelector("input");
        setTimeout(() => {
          x = v.querySelector(".option-card"), x && !x.classList.contains("disabled") ? x.focus() : k && k.focus();
        }, 50);
      } else v && f(v, h);
    }
    function m(p, h) {
      var g, x, k, _;
      const v = p.currentTarget.parentElement;
      if (h === "left") {
        const $ = (g = v.previousElementSibling) == null ? void 0 : g.querySelector(".option-card"), A = (x = v.previousElementSibling) == null ? void 0 : x.querySelector(".overlay");
        $ ? $.classList.contains("disabled") ? m({ currentTarget: $ }, "left") : A ? A.click() : $.focus() : f(v.closest(".accordion-item"), "left");
      } else if (h === "right") {
        const $ = (k = v.nextElementSibling) == null ? void 0 : k.querySelector(".option-card"), A = (_ = v.nextElementSibling) == null ? void 0 : _.querySelector(".overlay");
        $ ? $.classList.contains("disabled") ? m({ currentTarget: $ }, "right") : A ? A.click() : $.focus() : f(v.closest(".accordion-item"), "right");
      }
    }
    return at(() => {
      a.amount > 0 && a.modelValue && (o.value = !0);
    }), de(
      () => a.amount,
      (p, h) => {
        !h && p && (o.value = !0);
      }
    ), de(
      () => a.modelValue,
      () => {
        a.amount && (o.value = !!a.modelValue);
      }
    ), (p, h) => (w(), S("article", {
      class: se(["option-card", { selected: l.value, disabled: e.disabled }]),
      tabindex: e.disabled ? -1 : 0,
      "aria-current": l.value,
      "data-testid": "option",
      part: `option ${l.value ? "option-selected" : ""}`,
      "aria-disabled": e.disabled,
      onClick: h[2] || (h[2] = (v) => e.customInput.value ? null : u()),
      onKeyup: [
        h[3] || (h[3] = xt((v) => e.customInput.value ? null : u(), ["enter"])),
        h[4] || (h[4] = xt((v) => m(v, "left"), ["arrow-left"])),
        h[5] || (h[5] = xt((v) => m(v, "right"), ["arrow-right"])),
        h[6] || (h[6] = xt((v) => m(v, "up"), ["arrow-up"]))
      ]
    }, [
      e.noOption ? (w(), S("div", x0, [
        G(Yt, { icon: z(Gf) }, null, 8, ["icon"]),
        E("h3", null, U(e.noOptionText), 1)
      ])) : (w(), S("div", k0, [
        E("header", _0, [
          Q(p.$slots, "header", {}, () => [
            G(i0, {
              modelValue: s.value,
              "onUpdate:modelValue": h[0] || (h[0] = (v) => s.value = v),
              selected: l.value,
              "amount-label": d.value,
              image: e.image,
              "edit-amount": o.value,
              labels: e.labels,
              title: e.title
            }, null, 8, ["modelValue", "selected", "amount-label", "image", "edit-amount", "labels", "title"])
          ], !0)
        ]),
        E("div", $0, [
          Q(p.$slots, "content", {}, () => [
            e.title ? (w(), S("h3", S0, U(e.title), 1)) : N("", !0),
            E("p", C0, U(e.description), 1)
          ], !0)
        ]),
        E("footer", z0, [
          Q(p.$slots, "footer", {}, () => [
            G(w0, {
              "delivery-time": e.deliveryTime,
              price: e.price,
              "price-per": n.value,
              "delivery-time-text": i.value,
              "custom-input": e.customInput,
              disabled: e.disabled,
              "not-available-message": e.notAvailableMessage,
              "onUpdate:customValue": h[1] || (h[1] = (v) => u(v))
            }, null, 8, ["delivery-time", "price", "price-per", "delivery-time-text", "custom-input", "disabled", "not-available-message"])
          ], !0)
        ])
      ]))
    ], 42, y0));
  }
}, E0 = /* @__PURE__ */ ce(A0, [["__scopeId", "data-v-fd9655d4"]]), T0 = {
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
    return at(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), rr(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (a, r) => (w(), S("div", {
      class: se(["overlay", { fixed: e.fixed }]),
      style: St({ background: `rgba(${e.color}, ${e.opacity / 100})` })
    }, [
      Q(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, O0 = /* @__PURE__ */ ce(T0, [["__scopeId", "data-v-c9f7fd0c"]]), V0 = {
  class: "title",
  part: "step-title"
}, P0 = {
  key: 0,
  class: "subtitle",
  part: "step-subtitle"
}, M0 = {
  key: 1,
  class: "subtitle",
  part: "step-subtitle"
}, I0 = {
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = F(!1), i = F([]), n = F([]), l = V({
      get: () => a.open,
      set: (h) => {
        r("update:accordionState", h);
      }
    }), s = V(() => n.value.map((h, v) => {
      if (!h)
        return null;
      if (a.options[v] && a.options[v].noOption)
        return a.options[v].noOptionText;
      let g = "";
      const x = i.value.find((k) => k.code === a.options[v].code);
      return x.value > 0 && (g += `${x.value}x `), g += a.options[v].title, g;
    }).filter((h) => !!h).join(", ")), d = F(null);
    function c(h) {
      a.multiple || (i.value = []), (i.value.length === 0 || i.value.some((g) => g.code === a.options[h].code) === !1) && i.value.push({ code: a.options[h].code, value: a.options[h].amount }), n.value[h] = !n.value[h];
      const v = i.value.findIndex((g) => g.code === "no-option");
      if (v > -1 && a.options[h].noOption)
        n.value.forEach((g, x) => {
          x !== h && (n.value[x] = !1);
        }), i.value = i.value.filter((g) => g.code === "no-option");
      else if (!a.options[h].noOption) {
        const g = a.options.findIndex((x) => x.noOption);
        g > -1 && (n.value[g] = !1), v > -1 ? i.value.splice(v, 1) : n.value[h] === !1 && i.value.some((x) => x.code === a.options[h].code) && (i.value = i.value.filter((x) => x.code !== a.options[h].code));
      }
      r("update:modelValue", i.value);
    }
    function u() {
      a.options.forEach((h) => {
        var v;
        !h.noOption && h.code === ((v = a.modelValue) == null ? void 0 : v.code) || Array.isArray(a.modelValue) && a.modelValue.some((g) => g.code === h.code) ? n.value.push(!0) : n.value.push(!1);
      }), a.code === "accessories" && Array.isArray(a.modelValue) && a.modelValue.length > 2 && (o.value = !0);
    }
    function f(h) {
      return a.code === "accessories" && h > 3 && !o.value;
    }
    function m(h, v) {
      const g = i.value.filter((k) => k.code !== a.options[h].code), x = { code: a.options[h].code, value: v };
      i.value = [...g, x], r("update:modelValue", i.value);
    }
    function p() {
      setTimeout(() => {
        var h;
        (h = d.value) != null && h.length && d.value[0].$el.focus();
      }, 500);
    }
    return u(), de(
      () => a.modelValue,
      () => {
        p(), n.value = [], u();
      }
    ), de(
      () => a.open,
      () => {
        a.open && p();
      },
      { immediate: !0 }
    ), (h, v) => (w(), W(Ul, {
      modelValue: l.value,
      "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value = g),
      class: "configurator-step options",
      "aria-title": e.ariaTitle,
      "scroll-into-view": "",
      part: "step",
      exportparts: "state-indicator-icon"
    }, {
      header: Z(() => [
        G(ls, { status: e.status }, null, 8, ["status"]),
        E("h3", V0, U(e.title), 1),
        e.status === "attention" ? (w(), S("span", P0, U(e.attentionText || z(ee)("option.attention")), 1)) : N("", !0),
        s.value ? (w(), S("span", M0, U(s.value), 1)) : N("", !0)
      ]),
      default: Z(() => [
        E("div", null, [
          E("div", {
            class: se(["option-container", {
              "show-all": e.code === "accessories" && o.value || e.code !== "accessories"
            }])
          }, [
            (w(!0), S(be, null, Zt(e.options, (g, x) => (w(), S("div", {
              key: x,
              class: se(["option", { hide: f(x) }])
            }, [
              x === 3 && !o.value && e.code === "accessories" ? (w(), W(O0, {
                key: 0,
                tabindex: "0",
                onClick: v[0] || (v[0] = $t((k) => o.value = !0, ["stop"])),
                onKeyup: v[1] || (v[1] = xt($t((k) => o.value = !0, ["stop"]), ["enter"]))
              }, {
                default: Z(() => [
                  _e(" +" + U(e.options.length - 3), 1)
                ]),
                _: 1
              })) : N("", !0),
              G(E0, Ve({
                ref_for: !0,
                ref_key: "optionCards",
                ref: d
              }, g, {
                amount: g.amount,
                "onUpdate:amount": [(k) => g.amount = k, (k) => m(x, k)],
                disabled: g.available === !1 || e.disabled,
                "not-available-message": g.available === !1 ? e.unvailableText || z(ee)("option.unavailable") : "",
                "model-value": n.value[x],
                exportparts: "option option-title option-description",
                "onUpdate:customValue": (k) => m(x, k),
                "onUpdate:modelValue": (k) => c(x)
              }), null, 16, ["amount", "onUpdate:amount", "disabled", "not-available-message", "model-value", "onUpdate:customValue", "onUpdate:modelValue"])
            ], 2))), 128))
          ], 2),
          e.alert ? (w(), W(Mr, za(Ve({ key: 0 }, e.alert)), null, 16)) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "aria-title"]));
  }
}, j0 = /* @__PURE__ */ ce(I0, [["__scopeId", "data-v-a00d5e2f"]]), B0 = {
  class: "delivery-options",
  part: "delivery-step"
}, L0 = { class: "header" }, F0 = {
  class: "title",
  part: "delivery-step-title"
}, D0 = {
  class: "hint",
  part: "delivery-step-subtitle"
}, N0 = { class: "content" }, R0 = {
  class: "day",
  part: "delivery-option-day"
}, U0 = {
  class: "date",
  part: "delivery-option-date"
}, H0 = {
  key: 0,
  class: "cost",
  part: "delivery-option-cost"
}, q0 = {
  key: 1,
  class: "no-cost",
  part: "delivery-option-no-cost"
}, K0 = {
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
    const t = e, a = F(!1), r = V(() => t.title ? t.title : ee("delivery.delivery_options")), o = V(() => t.noCost ? t.noCost : ee("delivery.no_extra_cost")), i = V(
      () => t.makeYourChoice ? t.makeYourChoice : ee("delivery.make_your_choice_next_step")
    ), n = V(() => t.buttonTextShow ? t.buttonTextShow : ee("delivery.see_more")), l = V(() => t.buttonTextHide ? t.buttonTextHide : ee("delivery.see_less"));
    function s() {
      window.innerWidth >= 768 ? a.value = !0 : window.innerWidth < 768 && (a.value = !1);
    }
    return Ct(() => {
      window.addEventListener("resize", s);
    }), Va(() => {
      window.removeEventListener("resize", s);
    }), s(), (d, c) => (w(), S("div", B0, [
      E("div", L0, [
        E("h2", F0, U(r.value), 1),
        E("span", D0, [
          c[1] || (c[1] = E("span", { class: "align-sub" }, "*", -1)),
          _e(" " + U(i.value), 1)
        ])
      ]),
      E("div", N0, [
        (w(!0), S(be, null, Zt(e.items, (u, f) => (w(), S("div", {
          key: f,
          class: se(["option", {
            hide: f > 0 && !a.value && !u.cheapest,
            last: f === 1 && !a.value || f === e.items.length - 1 || f > 1 && u.cheapest && !a.value
          }]),
          part: "delivery-option"
        }, [
          E("span", R0, [
            _e(U(u.day) + " ", 1),
            u.label ? (w(), W(fi, {
              key: 0,
              color: u.label.color,
              small: ""
            }, {
              default: Z(() => [
                _e(U(u.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : N("", !0)
          ]),
          E("span", U0, U(u.date), 1),
          u.cost ? (w(), S("span", H0, " + € " + U(u.cost), 1)) : (w(), S("span", q0, U(o.value), 1))
        ], 2))), 128)),
        G(et, {
          variant: "tertiary",
          onClick: c[0] || (c[0] = (u) => a.value = !a.value)
        }, {
          default: Z(() => [
            _e(U(a.value ? l.value : n.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}, W0 = /* @__PURE__ */ ce(K0, [["__scopeId", "data-v-12d62f2c"]]), Z0 = {
  class: "configurator",
  "data-testid": "product-configurator",
  part: "configurator"
}, J0 = {
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
    loading: Boolean,
    hideDeliverySection: Boolean
  },
  emits: ["update:modelValue", "update:accordionState"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = F(!1), i = V(() => a.modelValue), n = V({
      get: () => a.accordionState,
      set: (d) => {
        r("update:accordionState", d);
      }
    });
    function l(d, c) {
      n.value[c] = d, n.value.forEach((u, f) => {
        f !== c && (n.value[f] = !1);
      });
    }
    function s(d, c) {
      i.value.options[c] = d, r("update:modelValue", { code: a.productCode, ...i.value });
    }
    return (d, c) => (w(), S("div", Z0, [
      G(yu, {
        modelValue: n.value,
        "onUpdate:modelValue": c[1] || (c[1] = (u) => n.value = u),
        items: e.template
      }, {
        default: Z(({ item: u, index: f, open: m }) => [
          u.type === "simple" ? (w(), W(Jf, Ve({
            key: 0,
            modelValue: i.value.options[f],
            "onUpdate:modelValue": (p) => i.value.options[f] = p
          }, { ...u }, {
            "aria-title": u.title.toLowerCase().replace(" ", "-"),
            exportparts: "step step-title step-subtitle",
            "onUpdate:modelValue": (p) => s(p, f),
            "onUpdate:focus": c[0] || (c[0] = (p) => o.value = p)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "aria-title"])) : u.type === "options" || u.type === "options-multiple" ? (w(), W(j0, Ve({
            key: 1,
            modelValue: i.value.options[f],
            "onUpdate:modelValue": (p) => i.value.options[f] = p
          }, { ...u }, {
            open: m,
            multiple: u.type === "options-multiple",
            "aria-title": u.title.toLowerCase().replace(" ", "-"),
            disabled: o.value || e.loading,
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onUpdate:modelValue": s,
            "onUpdate:accordionState": (p) => l(p, f)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "open", "multiple", "aria-title", "disabled", "onUpdate:accordionState"])) : N("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      e.deliveryOptions.length && !e.hideDeliverySection ? (w(), W(W0, {
        key: 0,
        items: e.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : N("", !0),
      e.loading ? (w(), W(lr, { key: 1 })) : N("", !0)
    ]));
  }
}, gn = /* @__PURE__ */ ce(J0, [["__scopeId", "data-v-57804b08"]]);
class G0 {
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
class ds extends G0 {
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
    if (a != null && a.length && t)
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
class bn {
  constructor({ code: t, options: a }) {
    this.code = t, this.options = a || [];
  }
}
class wn {
  constructor({ products: t, language: a }) {
    this.products = t, this.language = a;
  }
}
class ho {
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
class Y0 {
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
function X0(e, t) {
  return t.split(".").reduce((a, r) => a[r] ? a[r] : a, e);
}
const Q0 = {
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
    searchForProducts: "Search for a product"
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
    searchForProducts: "Zoeken naar producten"
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
    searchForProducts: "Produkte suchen"
  }
}, cs = je({ language: "nl" });
function eh(e) {
  return X0(Q0[cs.language], e) || e;
}
function th(e, t = {}) {
  return e.replace(/{(\w+)}/g, (a, r) => t[r] || `{${r}}`);
}
function ah(e, t) {
  return e.replace(/{(\d+)}/g, (a, r) => t[r] || `{${r}}`);
}
function yt(e, t = null) {
  const a = eh(e);
  return Array.isArray(t) ? ah(a) : th(a, t);
}
function rh(e) {
  cs.language = e;
}
function us(e, t) {
  return t !== -1 ? e.slice(0, t + 1) : e.filter((a) => a.code !== void 0);
}
function oh(e, t) {
  const a = new Date(e), r = /* @__PURE__ */ new Date(), o = new Date(r);
  return o.setDate(r.getDate() + 1), a.toDateString() === o.toDateString() ? yt("tomorrow") : a.toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    weekday: "long"
  });
}
function ih(e, t) {
  return new Date(e).toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function nh(e, t) {
  return e.length === 0 ? !0 : t.some((r) => r.code === "no-option") || t.some((r) => r.code === "amount" && (r.value === 0 || r.value === "")) ? !1 : !(t != null && t.includes(void 0));
}
function lh(e, t, a, r) {
  let o = "";
  a === "accessories-cross-sell" ? o = "unit" : (a === "material" || a === "materialType") && (o = "meter");
  const i = e.map((n) => {
    const l = r.find((d) => d.code === n.code);
    let s;
    return (n.type_code === "number" || n.type_code === "decimal") && (s = {
      value: n.default_value || parseFloat(n.min_value),
      unit: n.unit_code,
      min: n.min_value,
      max: n.max_value
    }), {
      code: n.code,
      title: (l == null ? void 0 : l.overwrites.title) || (n == null ? void 0 : n.name),
      description: (l == null ? void 0 : l.overwrites.description) || (n == null ? void 0 : n.description),
      image: l != null && l.overwrites.image || n.images.length ? n.images[0].url : void 0,
      price: n.price ? n.price[t] : void 0,
      pricePer: o,
      unit: n.unit_code,
      reversible: n.reversible,
      min: n.min_value,
      max: n.max_value,
      available: n == null ? void 0 : n.available,
      amount: n.default_value,
      customInput: s,
      labels: n.label ? [
        {
          text: n.label,
          color: "red"
        }
      ] : void 0
    };
  }).filter((n) => {
    const l = r.find((s) => s.code === n.code);
    return !(l != null && l.overwrites.hide);
  });
  return a === "accessories-cross-sell" && !i.some((n) => n.noOption) && i.unshift({
    code: "no-option",
    noOption: !0,
    noOptionText: yt("no_accessoires")
  }), i;
}
function sh(e, t, a, r, o, i) {
  const n = t.map((c) => {
    var g, x, k, _;
    const u = ["width", "height", "amount"];
    let f = (g = c.children) != null && g.find(($) => u.includes($.type_code)) ? "simple" : "options";
    const m = (x = c.children) != null && x.find(($) => ["width", "height"].includes($.code)) ? "measurement" : "amount", p = (_ = (k = o.find(($) => $.code === i)) == null ? void 0 : k.overwrites.steps.find(($) => $.code === c.code)) == null ? void 0 : _.overwrites, h = lh(c.children, r, c.code, o);
    let { code: v } = c;
    return v === "accessories-cross-sell" && (v = "accessories", f = "options-multiple"), {
      code: v,
      title: p && p.title ? p.title : c.name,
      type: f,
      control: m,
      options: h,
      hidden: p && p.hidden
    };
  }), l = e.find((c) => c.code === "size"), s = a !== -1 && l && l.type === "simple" ? a - 1 : a;
  return [...us(e, s), ...n];
}
function ps(e) {
  let t = 1 / 0, a;
  return e.forEach((r) => {
    const o = r.prices.purchase_rush_surcharge;
    o < t && (t = o, a = r);
  }), a;
}
function fs(e) {
  let t = null, a = 1 / 0;
  return e.forEach((r) => {
    const o = ps(r.deliveries), i = o.prices.purchase_rush_surcharge;
    i < a && (a = i, t = o);
  }), t;
}
function dh(e, t) {
  const a = fs(e);
  let r = 0;
  return e.map((o, i) => {
    let n;
    const l = ps(o.deliveries);
    return i === 0 && (n = { text: yt("fastest"), color: "red" }), a && l.shipping_method_api_code === a.shipping_method_api_code && r === 0 && (n || (n = { text: yt("cheapest"), color: "green" }), r += 1), {
      date: ih(o.delivery_date, t),
      day: oh(o.delivery_date, t),
      cost: l.prices.purchase_rush_surcharge,
      label: n
    };
  });
}
function ch(e, t) {
  const r = e[0][`products_${t}`].toString(), o = fs(e), i = o.prices.purchase_shipping_price, n = o.prices.purchase_packaging_price;
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
function hs(e) {
  return e.includes("Can not find unique id for option") ? yt("errors.invalid_or_duplicate") : e.includes("Restrictions are not met") ? yt("errors.restrictions_not_met") : e === "Validation Failed" ? yt("errors.invalid") : e.includes("Can not build valid path for tree") ? yt("errors.invalidConfig") : yt("errors.general");
}
class uh {
  constructor({ proxy: t, version: a }) {
    this.initialized = !1, this.proxy = t, this.version = a || "", this.repository = new ds({ proxy: t }), this.product = new bn({}), this.productInfo = {}, this.productConfig = new wn({}), this.address = new ho({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null, this.showDeliverySection = !1;
  }
  /**
   * Set the code of the product and get the first step for the product.
   *
   * @param {string} code - The code of the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  async setProduct(t, a) {
    return this.product.code = t, a && (this.loading = !0, this.productInfo = await this.repository.getProduct(t), this.loading = !1), this.productConfig.products = [this.product], this.deliveryOptions = [], this;
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
    this.lastChangedIndex = -1, t.options.forEach((n, l) => {
      Array.isArray(n) && n.length === 0 && (this.lastChangedIndex = l, a = !0);
    });
    const r = t.options.flat().map((n) => ({
      ...n,
      value: typeof n.value == "number" && !Number.isInteger(n.value) ? n.value.toFixed(1) : n.value
    }));
    if (r.length > 0 && !a) {
      for (let n = this.product.options.length - 1; n >= 0; n -= 1)
        if (this.product.options[n] && r[n] && (this.product.options[n].value && this.product.options[n].value !== r[n].value || this.product.options[n].code && this.product.options[n].code !== r[n].code)) {
          this.lastChangedIndex = this.product.options[n].code === "width" ? n + 1 : n;
          break;
        }
    }
    this.product.options = us(r, this.lastChangedIndex), this.product.options.some((n) => n.code === "no-option") && (this.setStatuses(!0), this.setOpenState(!0));
    const o = this.product.options[this.product.options.length - 1], i = (o == null ? void 0 : o.code) === "height" ? [this.product.options[this.product.options.length - 2], o] : o;
    if (i && (i.length || Object.keys(i).length > 0)) {
      const n = new CustomEvent("connectConfigurator:option-selected", {
        detail: JSON.parse(JSON.stringify(i))
      });
      window.dispatchEvent(n);
    }
    return this;
  }
  /**
   * Asynchronously retrieves the next option.
   * @async
   * @return {Promise<void>} - Resolves when the next option has been retrieved.
   */
  async getNextOption() {
    var t, a, r, o;
    if (nh(this.options, this.product.options)) {
      this.loading = !0, this.productConfig.language || (this.productConfig.language = this.language);
      let i = {};
      try {
        this.payload = await this.repository.configureProduct(this.productConfig);
      } catch (n) {
        this.payload = n;
      }
      if (this.payload.status !== "ok" || typeof this.payload == "string")
        throw this.options[this.options.length - 1].status = "attention", this.options[this.options.length - 1].alert = {
          type: "error",
          title: hs(this.payload.message ? this.payload.message : this.payload)
        }, this.loading = !1, new Error(this.payload.message || this.payload);
      if ([i] = this.payload.products, typeof i == "object" && i) {
        this.alert = {}, (t = this.options[this.options.length - 1]) != null && t.alert && delete this.options[this.options.length - 1].alert;
        let n = i.available_options;
        if (((a = n[0]) == null ? void 0 : a.code) === "size" && n.length === 2 && (n = n.slice(0, 1)), this.options = sh(
          this.options,
          n,
          this.lastChangedIndex,
          this.priceType,
          this.overwrites,
          this.product.code
        ), this.overwrites.length > 0) {
          const l = (o = (r = this.overwrites) == null ? void 0 : r.find((s) => s.code === this.product.code)) == null ? void 0 : o.overwrites.steps;
          l && this.options.forEach((s) => {
            l.forEach(async (d) => {
              if (s.code === d.code && this.product.options.some((c) => c.code === d.overwrites.selected) === !1 && d.overwrites.selected) {
                const c = this.getConfig();
                c.options.push({ code: d.overwrites.selected }), await (await this.setOption(c)).getNextOption();
              }
            });
          });
        }
        if (this.setOpenState(), this.setStatuses(), i.can_order) {
          this.canOrder = !0, this.payload.calculation_id && (this.calculationId = this.payload.calculation_id), i.upload === !0 && (this.upload = !0, this.uploaders = i.uploaders);
          const l = new Event("connectConfigurator:finished");
          window.dispatchEvent(l);
        } else i.can_order === !1 && this.canOrder && (this.canOrder = !1);
        if (i.can_order && this.product.options.length >= this.options.length && Object.keys(this.address).length && this.address.city) {
          const l = await this.getProductPrice();
          this.prices = ch(l, this.priceType), this.deliveryOptions = dh(l, this.language), this.setOpenState();
        } else i.can_order && !this.address.city && this.setOpenState(!0);
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
    const t = new Y0({ address: this.address, products: this.productConfig.products });
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
    return this.address = new ho(t), this;
  }
  /**
   * Set the language for the client.
   *
   * @param {string} language - the language to be set
   */
  setLanguage(t) {
    return this.language = t, rh(t), Xu(t), this;
  }
  /**
   * Set the statuses of the options.
   *
   * @param {type} option - the option to set the status for
   * @param {type} index - the index of the option in the options array
   */
  setStatuses(t) {
    const a = this.options.find((o) => o.code === "size"), r = a && a.options && a.options.some((o) => o.code === "height" || o.code === "width") ? 1 : 0;
    t ? this.options.forEach((o) => {
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
      const a = t.options.find((n) => n.code === "height"), r = t.options.find((n) => n.code === "width"), o = [...t.options];
      a && r && o.splice(0, 2, [r, a]);
      const i = this.options.find((n) => n.code === "accessories");
      if (i) {
        const n = i.options;
        if (n) {
          const l = [];
          let s = null;
          o.forEach((d, c) => {
            d.code && n.some((u) => u.code === d.code) && (s || (s = c), l.push(d));
          }), l.length > 1 && o.splice(s, l.length, l);
        }
      }
      t.options = o;
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
    return this.product = new bn({}), this.productConfig = new wn({}), this.address = new ho({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this;
  }
  /** Set overwrites for certain products, can only be called on init. */
  setOverwrites(t) {
    return this.options.length === 0 ? this.overwrites = t : console.error("Overwrites can only be set on init"), this;
  }
}
class ph extends uh {
  constructor({ proxy: t }) {
    super({ proxy: t }), this.products = [], this.searchBar = null, this.configuratorModal = null, this.selectedProduct = {}, this.updateExternal = !0, this.storeProductsLocally = !1, this.callbackUrl = null;
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
    hideDeliverySection: c
  }) {
    this.initialized = !0, this.proxy = t, this.repository = new ds({ proxy: t, productId: d }), this.setLanguage(a), this.callbackUrl = s, r && this.setAddress(r), o && this.setPriceType(o, i), n.length && this.setOverwrites(n), l && (this.storeProductsLocally = l), c && (this.hideDeliverySection = c);
    const u = new CustomEvent("connectConfigurator:ready", {
      detail: this
    });
    return window.dispatchEvent(u), this;
  }
  /** Get all products from endpoint */
  async getProducts() {
    if (this.overwrites.length) {
      const t = await this.repository.getProducts(this.storeProductsLocally, this.internalProductId);
      this.products = t.filter((a) => {
        const r = this.overwrites.find((o) => o.code === a.code);
        return !(r != null && r.overwrites.hide);
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
    var i, n, l, s, d, c, u;
    (i = this.prices.fullPrice) != null && i.deliveries && delete this.prices.fullPrice.deliveries, (n = this.prices.fullPrice) != null && n.products && delete this.prices.fullPrice.products;
    const t = this.product.options.find((f) => f.code === "amount").value, a = this.selectedProduct && this.selectedProduct.translations && this.selectedProduct.translations[this.language] ? (l = this.selectedProduct.translations[this.language]) == null ? void 0 : l.title : ((s = this.selectedProduct.translations) == null ? void 0 : s.nl.title) || this.product.code, r = (d = this.product.options.find((f) => f.code === "width")) == null ? void 0 : d.value, o = (c = this.product.options.find((f) => f.code === "height")) == null ? void 0 : c.value;
    return {
      product: {
        description: `${t}x ${a} ${r}x${o}`,
        description_options: this.product.options.map((f) => f.value ? `${f.code}: ${f.value}` : `${f.code}`).join(", ")
      },
      ...JSON.parse((u = this.prices) != null && u.fullPrice ? JSON.stringify(this.prices.fullPrice) : null)
    };
  }
  /**
   * Opens the configurator modal.
   */
  openConfigurator() {
    var t;
    return (t = this.configuratorModal) == null || t.showModal(), this;
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
    var l, s;
    if (this.updateExternal = !1, !t) {
      console.error("No payload provided");
      return;
    }
    const a = t.products[0], { options: r, code: o } = a, i = this;
    await this.setProduct(o, !0), t.deliveries && Object.keys((l = t.deliveries[0]) == null ? void 0 : l.address).length && this.setAddress((s = t.deliveries[0]) == null ? void 0 : s.address), this.openConfigurator();
    async function n(d) {
      if (!(d >= r.length + 1)) {
        try {
          await i.setOption(i.product).getNextOption();
        } catch (c) {
          i.options[i.options.length - 1].alert || (i.alert = {
            type: "error",
            title: hs(c.message ? c.message : c)
          }), i.loading = !1, i.updateExternal = !0;
          return;
        }
        if (r[d]) {
          let c = d + 1;
          r[d].code === "width" ? (i.product.options.push(r[d], r[d + 1]), c = d + 2) : ["width", "height"].includes(r[d].code) || i.product.options.push(r[d]), await n(c);
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
}
function fh(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function hh(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vh(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
function mh(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" })
  ]);
}
const gh = {
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
    const t = F(null);
    function a(r) {
      var n, l;
      if (!["ArrowUp", "ArrowDown"].includes(r.key))
        return;
      const o = Ca(t.value), i = o.indexOf(r.target);
      r.key === "ArrowDown" ? (n = o[i + 1]) == null || n.focus() : r.key === "ArrowUp" && ((l = o[i - 1]) == null || l.focus());
    }
    return (r, o) => (w(), S("div", {
      ref_key: "list",
      ref: t,
      class: se(["list", { grid: e.grid }]),
      style: St(`column-gap: ${e.gapRow}; row-gap: ${e.gapColumn};`),
      "data-testid": "list",
      onKeydown: a
    }, [
      (w(!0), S(be, null, Zt(e.items, (i, n) => Q(r.$slots, "default", {
        key: n,
        index: n,
        item: i
      }, void 0, !0)), 128)),
      Q(r.$slots, "append-list", {}, void 0, !0)
    ], 38));
  }
}, bh = /* @__PURE__ */ ce(gh, [["__scopeId", "data-v-12959343"]]), wh = ["data-testid", "tabindex", "aria-disabled"], yh = {
  key: 0,
  class: "prepend"
}, xh = { class: "content" }, kh = {
  key: 0,
  class: "title"
}, _h = {
  key: 1,
  class: "subtitle"
}, $h = { class: "text" }, Sh = {
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
    return (t, a) => (w(), S("div", {
      class: se(["list-item", { clickable: e.clickable, active: e.active }]),
      "data-testid": e.clickable ? "clickable" : "list-item",
      tabindex: e.disabled ? -1 : 0,
      "aria-disabled": e.disabled
    }, [
      t.$slots.prepend ? (w(), S("div", yh, [
        Q(t.$slots, "prepend", {}, void 0, !0)
      ])) : N("", !0),
      E("div", xh, [
        Q(t.$slots, "content", {}, () => [
          e.title ? (w(), S("span", kh, U(e.title), 1)) : N("", !0),
          e.subtitle ? (w(), S("span", _h, U(e.subtitle), 1)) : N("", !0),
          E("span", $h, U(e.text), 1)
        ], !0)
      ])
    ], 10, wh));
  }
}, vo = /* @__PURE__ */ ce(Sh, [["__scopeId", "data-v-93a0a846"]]), Ch = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], zh = {
  key: 0,
  class: "append"
}, Ah = ["id"], Eh = {
  __name: "PCheckbox",
  props: /* @__PURE__ */ Mt({
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
    const t = e, a = ga(e, "modelValue"), r = t.required ? { checked: { required: pt.withMessage(ee("checkbox.required"), Ru(!0)) } } : null, o = Ta(r, { checked: a }), i = V(() => `${t.id}-error`);
    return (n, l) => {
      var s, d, c, u;
      return w(), S("div", {
        class: se(["checkbox-container", { error: (d = (s = z(o).checked) == null ? void 0 : s.$errors[0]) == null ? void 0 : d.$message, large: e.large }])
      }, [
        E("label", {
          class: se(["label", { disabled: e.disabled }])
        }, [
          ma(E("input", Ve(n.$attrs, {
            id: e.id,
            "onUpdate:modelValue": l[0] || (l[0] = (f) => a.value = f),
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
            onBlur: l[1] || (l[1] = (f) => {
              var m;
              return (m = z(o).checked) == null ? void 0 : m.$touch(f);
            })
          }), null, 16, Ch), [
            [Dl, a.value]
          ]),
          Q(n.$slots, "label", {}, () => [
            _e(U(e.label), 1)
          ], !0),
          n.$slots.append ? (w(), S("span", zh, [
            Q(n.$slots, "append", {}, void 0, !0)
          ])) : N("", !0)
        ], 2),
        (u = (c = z(o).checked) == null ? void 0 : c.$errors[0]) != null && u.$message ? (w(), S("span", {
          key: 0,
          id: i.value,
          role: "alert",
          "aria-live": "assertive",
          class: "error-message"
        }, U(z(o).checked.$errors[0].$message), 9, Ah)) : N("", !0)
      ], 2);
    };
  }
}, mo = /* @__PURE__ */ ce(Eh, [["__scopeId", "data-v-3dad8f2b"]]);
function La(e, t) {
  return t.split(".").reduce((a, r) => a[r] ? a[r] : a, e);
}
const Th = {
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
    return Mc((t) => ({
      "1e7beddb": e.thickness
    })), (t, a) => (w(), S("hr", {
      class: se(["divider", { vertical: e.vertical, flex: e.flex }])
    }, null, 2));
  }
}, Oh = /* @__PURE__ */ ce(Th, [["__scopeId", "data-v-cf022594"]]), vs = {
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
}, Vh = ["data-testid", "tabindex"], Ph = ["for"], Mh = ["aria-invalid", "aria-describedby"], Ih = { class: "label-inner" }, jh = ["onClick"], Bh = {
  key: 2,
  class: "selected-item"
}, Lh = ["id", "placeholder", "disabled", "readonly", "value", "aria-invalid", "aria-describedby"], Fh = { class: "action-buttons" }, Dh = ["aria-label", "disabled"], Nh = ["aria-label", "disabled"], Rh = ["id"], Uh = {
  key: 0,
  class: "content-divider"
}, Hh = {
  key: 1,
  class: "no-results"
}, qh = {
  __name: "_BaseSelect",
  props: {
    ...vs,
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
    const r = a, o = e, i = Pt("showError", !0), n = F(!1), l = F(!1), s = F(!1), d = F(null), c = F(null), u = F(null), f = F(null), m = F(null), p = F(() => {
    }), h = F(() => {
    }), v = F(() => {
    }), g = V({
      get() {
        return o.multiple && !Array.isArray(o.modelValue) ? [] : o.modelValue;
      },
      set(L) {
        if (o.multiple) {
          r("update:modelValue", L);
          return;
        }
        r("update:modelValue", o.returnObject || !o.itemValue ? L : L == null ? void 0 : L[o.itemValue]);
      }
    }), x = V(() => o.requiredMessage ? o.requiredMessage : o.label ? ee("input.required_with_label", { label: o.label.toLowerCase() }) : ee("input.required")), k = V(() => o.required ? { value: { required: pt.withMessage(() => x.value, er) } } : { value: {} }), _ = Ta(k.value, { value: g }), $ = V(() => {
      var L;
      return !o.required || o.required && !((L = _.value) != null && L.$errors[0]);
    }), A = V(() => {
      var L, oe;
      return !!o.error || ((oe = (L = _.value) == null ? void 0 : L.$errors) == null ? void 0 : oe.length) > 0 || !$.value;
    }), le = V(() => Array.isArray(g.value) && g.value.length > 0), ie = V(() => `${o.id}-error`);
    function O(L) {
      return o.itemValue ? L[o.itemValue] : L;
    }
    function M(L) {
      var oe;
      return o.multiple ? ((oe = o.modelValue) == null ? void 0 : oe.includes(O(L))) || !1 : g.value === O(L);
    }
    function q(L) {
      var ne, we, Le;
      let oe = null;
      return (typeof L == "string" || typeof L == "number") && !o.itemText ? L : (typeof o.itemText == "string" && ((ne = o.itemText) != null && ne.includes(".")) && (oe = La(L, o.itemText)), !L || typeof o.itemText == "string" && (!((we = o.itemText) != null && we.includes(".")) && L[o.itemText] === void 0 || (Le = o.itemText) != null && Le.includes(".") && typeof oe != "string") ? "" : o.itemText && typeof o.itemText == "string" ? L[o.itemText] : typeof o.itemText == "function" ? o.itemText(L) : oe);
    }
    function B(L) {
      if (!L)
        return "";
      if (o.grouped) {
        const oe = o.items.find(
          (ne) => ne[o.groupItems].find((we) => O(we) === L)
        )[o.groupItems].find((ne) => O(ne) === L);
        return q(oe);
      }
      return !o.returnObject && o.itemValue ? q(o.items.find((oe) => O(oe) === L)) : q(L);
    }
    function te(L) {
      g.value.splice(g.value.indexOf(L), 1), r("update:modelValue", g.value);
    }
    function he(L) {
      if (!o.multiple) {
        g.value = L;
        return;
      }
      if (g.value.includes(O(L))) {
        g.value = g.value.filter((oe, ne) => ne !== g.value.indexOf(O(L)));
        return;
      }
      g.value = [...g.value, O(L)];
    }
    function Me(L) {
      const oe = o.returnObject || !o.itemValue ? L[o.groupItems] : L[o.groupItems].map((Le) => Le[o.itemValue]);
      let ne = !1, we = !0;
      return oe.forEach((Le) => {
        g.value.includes(Le) ? ne = !0 : we = !1;
      }), we ? !0 : ne ? "indeterminate" : !1;
    }
    function Ae(L) {
      const oe = o.returnObject || !o.itemValue ? L[o.groupItems] : L[o.groupItems].map((ne) => ne[o.itemValue]);
      if (Me(L) === !0) {
        oe.forEach((ne) => {
          te(ne);
        });
        return;
      }
      r("update:modelValue", Array.from(/* @__PURE__ */ new Set([...g.value, ...oe])));
    }
    function ke(L) {
      n.value = L, r("update:isOpen", L);
    }
    function me(L) {
      s.value = L, r("update:focus", L), !L && r("update:inputValue", null);
    }
    function dt() {
      o.behavior === "manual" && h.value(), o.behavior === "focus" && !n.value && requestAnimationFrame(() => {
        f.value.focus();
      });
    }
    function xe(L, oe) {
      f.value = L, o.behavior === "manual" && (p.value = oe.setActivator, h.value = oe.toggle, v.value = oe.onKeydown);
    }
    async function Be() {
      return u;
    }
    const Te = V(() => o.inputValue !== null ? o.inputValue : o.multiple ? null : B(g.value));
    return de(
      () => [s.value, l.value],
      () => {
        !s.value && !l.value && _.value.$touch();
      }
    ), t({
      getSelectContent: Be,
      getItemText: q,
      setActivator: p,
      toggle: h,
      onKeydown: v,
      input: f
    }), (L, oe) => (w(), W(ns, {
      ref_key: "floatingContainer",
      ref: m,
      transition: "expand",
      offset: o.offset !== null ? o.offset : 1,
      attach: d.value,
      behavior: e.behavior,
      "close-on-click": !o.multiple,
      "onUpdate:isOpen": ke,
      "onUpdate:focus": me
    }, {
      activator: Z((ne) => {
        var we, Le, Ft;
        return [
          E("div", Ve(e.behavior === "click" ? { ...L.$attrs, ...L.disabled ? {} : ne } : null, {
            "data-testid": o.dataTestid,
            class: ["base-select", [o.class, e.behavior, { "is-open": n.value, disabled: o.disabled }]],
            tabindex: e.behavior === "click" && !L.disabled ? 0 : null,
            onFocus: oe[5] || (oe[5] = (We) => l.value = !0),
            onBlur: oe[6] || (oe[6] = (We) => l.value = !1)
          }), [
            L.label ? (w(), S("label", {
              key: 0,
              class: "input-label",
              for: L.id
            }, [
              E("span", null, U(L.label), 1)
            ], 8, Ph)) : N("", !0),
            E("div", {
              ref_key: "selectWrapper",
              ref: d,
              class: se(["wrapper", { focus: s.value || l.value, "has-error": A.value }]),
              "aria-invalid": A.value,
              "aria-describedby": A.value ? ie.value : null
            }, [
              L.prependIcon ? (w(), W(ha, {
                key: 0,
                class: "prepend-icon",
                icon: L.prependIcon
              }, null, 8, ["icon"])) : N("", !0),
              le.value ? (w(), S("div", {
                key: 1,
                ref_key: "selectedItems",
                ref: c,
                class: "selected-items"
              }, [
                (w(!0), S(be, null, Zt(g.value, (We, aa) => (w(), W(fi, {
                  key: aa,
                  ref_for: !0,
                  ref: "label",
                  color: "gray"
                }, {
                  default: Z(() => [
                    E("span", Ih, [
                      _e(U(B(We)) + " ", 1),
                      E("button", {
                        class: "close-button",
                        type: "button",
                        tabindex: "-1",
                        onClick: $t((Yr) => te(We), ["stop", "prevent"])
                      }, [
                        G(Gr, { icon: z(mh) }, null, 8, ["icon"])
                      ], 8, jh)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ], 512)) : !L.multiple && e.behavior === "click" && g.value ? (w(), S("div", Bh, U(B(g.value)), 1)) : N("", !0),
              e.behavior === "click" ? ma((w(), S("div", {
                key: 3,
                class: "placeholder"
              }, U(o.placeholder), 513)), [
                [ni, !g.value || g.value.length === 0]
              ]) : (w(), S("input", Ve({ key: 4 }, e.behavior === "focus" ? { ...L.$attrs, ...ne } : L.$attrs, {
                id: o.id,
                ref: (We) => xe(We, ne),
                placeholder: o.placeholder,
                disabled: o.disabled,
                readonly: o.readonly,
                value: Te.value,
                autocomplete: "off",
                "aria-invalid": A.value,
                "aria-describedby": A.value ? ie.value : null,
                onInput: oe[0] || (oe[0] = (We) => L.$emit("update:inputValue", We.target.value)),
                onBlur: oe[1] || (oe[1] = (We) => l.value = !1),
                onFocus: oe[2] || (oe[2] = (We) => l.value = !0)
              }), null, 16, Lh)),
              E("div", Fh, [
                o.clearable && (!o.multiple && g.value || o.multiple && ((we = g.value) == null ? void 0 : we.length) > 0) ? (w(), S("button", {
                  key: 0,
                  "aria-label": z(ee)("input.clear"),
                  class: "clear-button",
                  tabindex: "-1",
                  type: "button",
                  disabled: o.disabled,
                  onClick: [
                    oe[3] || (oe[3] = (We) => g.value = o.multiple ? [] : null),
                    oe[4] || (oe[4] = $t(() => {
                    }, ["stop"]))
                  ]
                }, [
                  G(ha, {
                    icon: z(vh),
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])
                ], 8, Dh)) : N("", !0),
                Q(L.$slots, "inline", {}, () => [
                  L.hideChevron ? N("", !0) : (w(), S("button", {
                    key: 0,
                    "aria-label": z(ee)("input.toggle"),
                    tabindex: "-1",
                    type: "button",
                    "data-testid": "toggle-chevron",
                    disabled: o.disabled,
                    onClick: dt
                  }, [
                    G(ha, {
                      class: se(["state-indicator", { "is-open": n.value }]),
                      icon: z(hh)
                    }, null, 8, ["icon", "class"])
                  ], 8, Nh))
                ], !0)
              ])
            ], 10, Mh),
            A.value && z(i) ? (w(), S("div", {
              key: 1,
              id: ie.value,
              role: "alert",
              "aria-live": "assertive",
              class: "error"
            }, U((Ft = (Le = z(_).value) == null ? void 0 : Le.$errors[0]) != null && Ft.$message ? z(_).value.$errors[0].$message : o.error), 9, Rh)) : N("", !0)
          ], 16, Vh)
        ];
      }),
      default: Z(() => [
        L.showDivider ? (w(), S("hr", Uh)) : N("", !0),
        E("div", {
          ref_key: "selectContent",
          ref: u,
          class: se(["select-content", { "remove-radius": L.showDivider, "show-shadow": !L.showDivider }])
        }, [
          Q(L.$slots, "prepend-list", {}, void 0, !0),
          o.items.length > 0 ? (w(), W(bh, {
            key: 0,
            "gap-column": "0",
            "gap-row": "0",
            items: o.items,
            onKeydown: oe[7] || (oe[7] = $t(() => {
            }, ["prevent"]))
          }, {
            default: Z(({ item: ne }) => [
              o.grouped ? (w(), S(be, { key: 0 }, [
                o.items.indexOf(ne) !== 0 ? (w(), W(Oh, { key: 0 })) : N("", !0),
                o.grouped ? (w(), W(vo, {
                  key: 1,
                  title: ne[o.groupText],
                  clickable: o.multiple,
                  disabled: !o.multiple,
                  onClick: (we) => o.multiple && Ae(ne),
                  onKeydown: xt((we) => o.multiple && Ae(ne), ["enter"])
                }, oo({ _: 2 }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: Z(() => [
                      G(mo, {
                        id: `group-${o.items.indexOf(ne)}-checkbox`,
                        "model-value": typeof Me(ne) == "boolean" ? Me(ne) : !1,
                        indeterminate: Me(ne) === "indeterminate",
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : N("", !0),
                (w(!0), S(be, null, Zt(ne[o.groupItems], (we, Le) => (w(), W(vo, {
                  key: Le,
                  clickable: "",
                  active: M(we),
                  text: q(we),
                  onClick: (Ft) => he(we),
                  onKeydown: xt((Ft) => he(we), ["enter"])
                }, oo({
                  content: Z(() => [
                    Q(L.$slots, "option", {
                      selected: M(we),
                      option: we
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: Z(() => [
                      G(mo, {
                        id: `item-${ne[o.groupItems].indexOf(we)}-checkbox`,
                        "model-value": M(we),
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : q(ne) || L.$slots.option ? (w(), W(vo, {
                key: 1,
                clickable: "",
                active: M(ne),
                text: q(ne),
                onClick: (we) => he(ne),
                onKeydown: xt((we) => he(ne), ["enter"])
              }, oo({
                content: Z(() => [
                  Q(L.$slots, "option", {
                    selected: M(ne),
                    option: ne
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                o.multiple ? {
                  name: "prepend",
                  fn: Z(() => [
                    G(mo, {
                      id: `item-${o.items.indexOf(ne)}-checkbox`,
                      "model-value": M(ne),
                      tabindex: "-1"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"])) : N("", !0)
            ]),
            _: 3
          }, 8, ["items"])) : o.hideNoItemsLabel ? N("", !0) : (w(), S("div", Hh, U(o.noItemsLabel || z(ee)("input.no_results")), 1)),
          Q(L.$slots, "append-list", {}, void 0, !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["offset", "attach", "behavior", "close-on-click"]));
  }
}, Kh = /* @__PURE__ */ ce(qh, [["__scopeId", "data-v-c35e5bc8"]]), ms = {
  __name: "PCombobox",
  props: {
    ...vs,
    /** Whether the combobox is loading new items in the dropdown */
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "intersect"],
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = V(() => {
      const { loading: k, ..._ } = r;
      return _;
    }), n = V({
      get() {
        return r.multiple && !Array.isArray(r.modelValue) ? [r.modelValue] : r.modelValue;
      },
      set(k) {
        o("update:modelValue", k);
      }
    }), l = F(null), s = F(null), d = F(null), c = F(null), u = F(null), f = F(!1), m = F(!1);
    function p() {
      s.value = null, n.value = null, l.value.blur();
    }
    const h = V(() => !s.value || r.serverside ? r.items : r.itemText ? r.grouped ? r.items.filter(
      (k) => k[r.groupItems].some(
        (_) => l.value.getItemText(_).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map((k) => {
      const _ = k[r.groupItems].filter(
        ($) => l.value.getItemText($).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      );
      return _.length ? {
        ...k,
        [r.groupItems]: _
      } : null;
    }) : r.items.filter(
      (k) => l.value.getItemText(k).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ) : r.items.filter(
      (k) => k.toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ));
    async function v() {
      const k = (await l.value.getSelectContent()).value;
      k == null || k.scrollTo(0, k.scrollHeight);
    }
    function g(k) {
      var _;
      if (f.value = k, k) {
        Ct(async () => {
          c.value = new IntersectionObserver(
            ($) => {
              $[0].isIntersecting && !m.value && !r.loading && (o("intersect"), v());
            },
            {
              root: (await l.value.getSelectContent()).value,
              threshold: 0
            }
          ), c.value.observe(d.value);
        });
        return;
      }
      (_ = c.value) == null || _.disconnect(), c.value = null;
    }
    function x(k) {
      if (!r.serverside) {
        o("search", k);
        return;
      }
      k !== null && (m.value = !0, clearTimeout(u.value), u.value = setTimeout(() => {
        f.value && o("search", k), m.value = !1;
      }, 500));
    }
    return t({
      reset: p,
      select: l,
      scrollToBottom: v
    }), (k, _) => (w(), W(Kh, Ve({
      id: k.id,
      ref_key: "select",
      ref: l,
      "input-value": s.value,
      "onUpdate:inputValue": _[1] || (_[1] = ($) => s.value = $)
    }, i.value, {
      behavior: "focus",
      "hide-no-items-label": e.loading || m.value,
      items: m.value ? [] : h.value,
      "onUpdate:inputValue": _[2] || (_[2] = ($) => x($)),
      "onUpdate:focus": _[3] || (_[3] = ($) => $ && o("search", "")),
      "onUpdate:isOpen": _[4] || (_[4] = ($) => g($)),
      "onUpdate:modelValue": _[5] || (_[5] = ($) => n.value = $)
    }), {
      inline: Z(() => [
        Q(k.$slots, "inline")
      ]),
      option: Z(({ option: $, selected: A }) => [
        Q(k.$slots, "option", {
          selected: A,
          option: $
        })
      ]),
      "append-list": Z(() => [
        E("div", {
          ref_key: "intersect",
          ref: d,
          class: "flex justify-center"
        }, [
          e.loading || m.value ? (w(), W(lr, {
            key: 0,
            class: "mt-2",
            onClick: _[0] || (_[0] = $t(() => {
            }, ["prevent"]))
          })) : N("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
}, Wh = {
  __name: "PApiCombobox",
  props: {
    /**
     * The route of the list endpoint
     */
    endpoint: {
      type: String,
      required: !0
    },
    /**
     * Selected value
     */
    modelValue: {
      type: [String, Number, Object],
      default: null
    },
    /**
     * Selected item / dropdown item text
     */
    itemText: {
      type: [String, Function],
      default: null
    },
    /**
     * Keys used to filter items in the dropdown
     * In case the item text consists of a function, this prop is required, to make filtering work
     */
    filterKeys: {
      type: Array,
      default: () => []
    },
    /**
     * Whether the field is required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Label of the field
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Headers to be sent with the request
     */
    requestHeaders: {
      type: Object,
      default: () => ({})
    },
    /** Additional (static) search params */
    additionalParams: {
      type: [String, URLSearchParams],
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = F([]), i = F(!1), n = F(0), l = F(-1), s = F(null), d = F(null);
    async function c() {
      if (n.value === l.value)
        return;
      i.value = !0, await d.value.scrollToBottom();
      const f = new URLSearchParams(a.additionalParams);
      f.set("page[number]", n.value + 1), s.value && (a.filterKeys.length > 0 ? a.filterKeys.forEach((h) => {
        f.set(`filter[${h}]`, s.value);
      }) : f.set(`filter[${a.itemText}]`, s.value));
      const { data: m, metadata: p } = await (await fetch(`${a.endpoint}?${f}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...a.requestHeaders
        }
      })).json();
      i.value = !1, o.value = [...o.value, ...m], l.value = p.total_pages, n.value = p.page;
    }
    function u(f) {
      s.value !== f && (s.value = f, o.value = [], n.value = 0, l.value = -1, c());
    }
    return (f, m) => (w(), W(ms, {
      id: `api-autocomplete-${e.endpoint}`,
      ref_key: "autocomplete",
      ref: d,
      serverside: "",
      loading: i.value,
      "model-value": e.modelValue,
      clearable: !e.required,
      "item-text": e.itemText,
      required: e.required,
      items: o.value,
      label: e.label,
      "onUpdate:modelValue": m[0] || (m[0] = (p) => r("update:modelValue", p)),
      onIntersect: c,
      onSearch: u
    }, {
      inline: Z(() => [
        Q(f.$slots, "inline")
      ]),
      option: Z(({ option: p, selected: h }) => [
        Q(f.$slots, "option", {
          option: p,
          selected: h
        })
      ]),
      _: 3
    }, 8, ["id", "loading", "model-value", "clearable", "item-text", "required", "items", "label"]));
  }
};
function go(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const Zh = {
  __name: "PHeading",
  props: {
    level: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, a) => (w(), W(Aa(e.level), null, {
      default: Z(() => [
        Q(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, gs = /* @__PURE__ */ ce(Zh, [["__scopeId", "data-v-c6408bcb"]]);
function Jh(e, t) {
  return w(), S("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, [
    E("g", {
      id: "Icon/Outline/MaximizeScreen",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      E("path", {
        d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M14.3478261,7.13043478 L17.2826087,7.13043478 C17.6050138,7.13402532 17.8653502,7.35579341 17.8695652,7.63043478 L17.8695652,10.1304348 M17.6973913,7.3026087 L13.3695652,11.6304348",
        id: "Combined-Shape",
        stroke: "currentColor",
        "stroke-width": "1.5"
      })
    ])
  ]);
}
function Gh(e, t) {
  return w(), S("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, [
    E("g", {
      id: "Icon/Outline/MinimizeScreen",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      E("path", {
        d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M16.8913043,11.6304348 L13.9565217,11.6304348 C13.6341166,11.6268442 13.3737802,11.4050762 13.3695652,11.1304348 L13.3695652,8.63043478 M13.5417391,11.4582609 L17.8695652,7.13043478",
        id: "Combined-Shape",
        stroke: "currentColor",
        "stroke-width": "1.5"
      })
    ])
  ]);
}
const Yh = ["data-testid"], Xh = {
  key: 0,
  class: "actions"
}, Qh = {
  class: "inner",
  tabindex: "-1",
  autofocus: ""
}, ev = {
  key: 0,
  class: "minimized-actions"
}, tv = {
  __name: "PModal",
  props: /* @__PURE__ */ Mt({
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
  emits: /* @__PURE__ */ Mt(["minimize", "update:modelValue", "click:primary", "click:secondary", "close"], ["update:modelValue"]),
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = ga(e, "modelValue"), n = xa("modal"), l = xa("modal-content"), s = xa("footer"), d = xa("header"), c = F(!1), u = F(!1), f = F(!1), m = F(!1), p = F(null), h = F(null);
    function v() {
      f.value = l.value.scrollTop > 0;
      const $ = l.value.scrollHeight - l.value.clientHeight;
      m.value = l.value.scrollTop < $;
    }
    function g($) {
      if (clearTimeout(p.value), i.value = $, $) {
        if (n.value.showModal(), v(), r.loading)
          return;
        setTimeout(() => {
          var A;
          (A = Ca(l.value)[0]) == null || A.focus();
        }, 500);
      } else
        p.value = setTimeout(() => {
          var A;
          (A = n.value) == null || A.close();
        }, 500);
    }
    function x($) {
      o("minimize", $), c.value = $, u.value = !$;
    }
    function k($) {
      if (r.persistent || r.fullscreen || $.target !== $.currentTarget) {
        r.persistent && $.target.isEqualNode($.currentTarget) && (h.value && clearTimeout(h.value), n.value.classList.add("persistent-animation"), h.value = setTimeout(() => {
          var A;
          (A = n.value) == null || A.classList.remove("persistent-animation");
        }, 300));
        return;
      }
      o("close"), g(!1);
    }
    function _($) {
      r.persistent && $.preventDefault();
    }
    return de(i, ($, A) => {
      $ !== A && g($);
    }), de(
      () => r.loading,
      ($) => {
        $ === !1 && i.value && Ct(() => {
          var A;
          (A = Ca(l.value)[0]) == null || A.focus();
        });
      }
    ), at(() => {
      g(i.value), n.value.addEventListener("cancel", _);
    }), rr(() => {
      var $;
      ($ = n.value) == null || $.removeEventListener("cancel", _);
    }), t({
      showModal: () => g(!0),
      close: () => g(!1)
    }), ($, A) => {
      var le, ie;
      return w(), S("dialog", {
        ref: "modal",
        class: se(["modal", [
          i.value ? "open" : "closed",
          {
            fullscreen: e.fullscreen,
            minimized: c.value,
            maximized: u.value,
            persistent: e.persistent
          }
        ]]),
        "data-testid": e.dataTestid,
        style: St({ "max-width": e.width }),
        onClose: A[7] || (A[7] = (O) => g(!1)),
        onClick: k
      }, [
        e.fullscreen && !c.value ? (w(), S("div", Xh, [
          e.showMinimize ? (w(), W(et, {
            key: 0,
            variant: "text",
            icon: z(Gh),
            class: "minimize",
            onClick: A[0] || (A[0] = (O) => x(!0))
          }, {
            default: Z(() => [
              _e(U(z(ee)("modal.minimize")), 1)
            ]),
            _: 1
          }, 8, ["icon"])) : N("", !0),
          e.hideCloseButton ? N("", !0) : (w(), W(et, {
            key: 1,
            variant: "text",
            icon: z(go),
            class: "close",
            onClick: A[1] || (A[1] = (O) => g(!1))
          }, {
            default: Z(() => [
              _e(U(z(ee)("modal.close")), 1)
            ]),
            _: 1
          }, 8, ["icon"]))
        ])) : N("", !0),
        E("div", Qh, [
          e.hideHeader ? N("", !0) : (w(), S("header", {
            key: 0,
            ref: "header",
            class: se(["header", { "header-shadow": f.value }]),
            "data-testid": "modal-header"
          }, [
            Q($.$slots, "header", za(Wr({ minimize: c.value })), () => [
              e.title ? (w(), W(gs, {
                key: 0,
                class: "title",
                level: "h2"
              }, {
                default: Z(() => [
                  _e(U(e.title), 1)
                ]),
                _: 1
              })) : N("", !0),
              !e.fullscreen && !e.hideCloseButton ? (w(), W(et, {
                key: 1,
                icon: z(go),
                variant: "text",
                class: "close",
                "aria-label": z(ee)("modal.close"),
                onClick: A[2] || (A[2] = (O) => {
                  g(!1), o("close");
                })
              }, null, 8, ["icon", "aria-label"])) : N("", !0)
            ]),
            c.value && e.fullscreen ? (w(), S("div", ev, [
              G(et, {
                "data-testid": "open-button",
                icon: z(Jh),
                onClick: A[3] || (A[3] = (O) => x(!1))
              }, {
                default: Z(() => [
                  _e(U(z(ee)("modal.open")), 1)
                ]),
                _: 1
              }, 8, ["icon"]),
              G(et, {
                "data-testid": "close-button",
                icon: z(go),
                variant: "secondary",
                onClick: A[4] || (A[4] = (O) => {
                  g(!1), o("close");
                })
              }, {
                default: Z(() => [
                  _e(U(z(ee)("modal.close")), 1)
                ]),
                _: 1
              }, 8, ["icon"])
            ])) : N("", !0)
          ], 2)),
          c.value ? N("", !0) : (w(), S("div", {
            key: 1,
            ref: "modal-content",
            class: se(["content", { "pt-8!": e.hideHeader }]),
            style: St(
              e.fullscreen ? null : `max-height: calc(100vh - ${((le = z(d)) == null ? void 0 : le.clientHeight) + ((ie = z(s)) == null ? void 0 : ie.clientHeight)}px - 64px); `
            ),
            onScroll: v
          }, [
            e.loading ? (w(), S(be, { key: 0 }, [
              $.$slots.loading ? Q($.$slots, "loading", { key: 0 }) : (w(), W(lr, { key: 1 }))
            ], 64)) : Q($.$slots, "default", { key: 1 })
          ], 38)),
          !e.fullscreen && !e.hideFooter || !c.value && e.fullscreen && $.$slots.footer ? (w(), S("footer", {
            key: 2,
            ref: "footer",
            class: se(["footer", { "footer-shadow": !e.fullscreen && m.value }])
          }, [
            Q($.$slots, "footer", {}, () => [
              e.fullscreen ? N("", !0) : (w(), S(be, { key: 0 }, [
                G(et, {
                  type: "button",
                  variant: "secondary",
                  "data-testid": "secondary-button",
                  onClick: A[5] || (A[5] = (O) => o("click:secondary"))
                }, {
                  default: Z(() => [
                    _e(U(e.secondaryButtonText ? e.secondaryButtonText : z(ee)("modal.cancel")), 1)
                  ]),
                  _: 1
                }),
                G(et, {
                  type: "button",
                  "data-testid": "primary-button",
                  onClick: A[6] || (A[6] = (O) => o("click:primary"))
                }, {
                  default: Z(() => [
                    _e(U(e.primaryButtonText ? e.primaryButtonText : z(ee)("modal.save")), 1)
                  ]),
                  _: 1
                })
              ], 64))
            ])
          ], 2)) : N("", !0)
        ])
      ], 46, Yh);
    };
  }
}, bs = /* @__PURE__ */ ce(tv, [["__scopeId", "data-v-2c5c7bb0"]]);
function yn(e) {
  return typeof e == "string" || e instanceof String;
}
function jt(e) {
  return Array.isArray ? Array.isArray(e) : xs(e) === "[object Array]";
}
function av(e) {
  if (typeof e == "string")
    return e;
  let t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function rv(e) {
  return e == null ? "" : av(e);
}
function kt(e) {
  return typeof e == "string";
}
function ws(e) {
  return typeof e == "number";
}
function ov(e) {
  return e === !0 || e === !1 || iv(e) && xs(e) == "[object Boolean]";
}
function ys(e) {
  return typeof e == "object";
}
function iv(e) {
  return ys(e) && e !== null;
}
function ot(e) {
  return e != null;
}
function bo(e) {
  return !e.trim().length;
}
function xs(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const nv = "Extended search is not available", lv = "Logical search is not available", sv = "Incorrect 'index' type", dv = (e) => `Invalid value for key ${e}`, cv = (e) => `Pattern length exceeds max of ${e}.`, uv = (e) => `Missing ${e} property in key`, pv = (e) => `Property 'weight' in key '${e}' must be a positive integer`, xn = Object.prototype.hasOwnProperty;
class fv {
  constructor(t) {
    this._keys = [], this._keyMap = {};
    let a = 0;
    t.forEach((r) => {
      let o = ks(r);
      this._keys.push(o), this._keyMap[o.id] = o, a += o.weight;
    }), this._keys.forEach((r) => {
      r.weight /= a;
    });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function ks(e) {
  let t = null, a = null, r = null, o = 1, i = null;
  if (kt(e) || jt(e))
    r = e, t = kn(e), a = Lo(e);
  else {
    if (!xn.call(e, "name"))
      throw new Error(uv("name"));
    const n = e.name;
    if (r = n, xn.call(e, "weight") && (o = e.weight, o <= 0))
      throw new Error(pv(n));
    t = kn(n), a = Lo(n), i = e.getFn;
  }
  return { path: t, id: a, weight: o, src: r, getFn: i };
}
function kn(e) {
  return jt(e) ? e : e.split(".");
}
function Lo(e) {
  return jt(e) ? e.join(".") : e;
}
function hv(e, t) {
  let a = [], r = !1;
  const o = (i, n, l) => {
    if (ot(i))
      if (!n[l])
        a.push(i);
      else {
        let s = n[l];
        const d = i[s];
        if (!ot(d))
          return;
        if (l === n.length - 1 && (kt(d) || ws(d) || ov(d)))
          a.push(rv(d));
        else if (jt(d)) {
          r = !0;
          for (let c = 0, u = d.length; c < u; c += 1)
            o(d[c], n, l + 1);
        } else n.length && o(d, n, l + 1);
      }
  };
  return o(e, kt(t) ? t.split(".") : t, 0), r ? a : a[0];
}
const vv = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, mv = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, gv = {
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
}, bv = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: hv,
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
var ge = {
  ...mv,
  ...vv,
  ...gv,
  ...bv
};
const wv = /[^ ]+/g;
function yv(e = 1, t = 3) {
  const a = /* @__PURE__ */ new Map(), r = Math.pow(10, t);
  return {
    get(o) {
      const i = o.match(wv).length;
      if (a.has(i))
        return a.get(i);
      const n = 1 / Math.pow(i, 0.5 * e), l = parseFloat(Math.round(n * r) / r);
      return a.set(i, l), l;
    },
    clear() {
      a.clear();
    }
  };
}
let hi = class {
  constructor({
    getFn: t = ge.getFn,
    fieldNormWeight: a = ge.fieldNormWeight
  } = {}) {
    this.norm = yv(a, 3), this.getFn = t, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    this.keys = t, this._keysMap = {}, t.forEach((a, r) => {
      this._keysMap[a.id] = r;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, kt(this.docs[0]) ? this.docs.forEach((t, a) => {
      this._addString(t, a);
    }) : this.docs.forEach((t, a) => {
      this._addObject(t, a);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(t) {
    const a = this.size();
    kt(t) ? this._addString(t, a) : this._addObject(t, a);
  }
  // Removes the doc at the specified index of the index
  removeAt(t) {
    this.records.splice(t, 1);
    for (let a = t, r = this.size(); a < r; a += 1)
      this.records[a].i -= 1;
  }
  getValueForItemAtKeyId(t, a) {
    return t[this._keysMap[a]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, a) {
    if (!ot(t) || bo(t))
      return;
    let r = {
      v: t,
      i: a,
      n: this.norm.get(t)
    };
    this.records.push(r);
  }
  _addObject(t, a) {
    let r = { i: a, $: {} };
    this.keys.forEach((o, i) => {
      let n = o.getFn ? o.getFn(t) : this.getFn(t, o.path);
      if (ot(n)) {
        if (jt(n)) {
          let l = [];
          const s = [{ nestedArrIndex: -1, value: n }];
          for (; s.length; ) {
            const { nestedArrIndex: d, value: c } = s.pop();
            if (ot(c))
              if (kt(c) && !bo(c)) {
                let u = {
                  v: c,
                  i: d,
                  n: this.norm.get(c)
                };
                l.push(u);
              } else jt(c) && c.forEach((u, f) => {
                s.push({
                  nestedArrIndex: f,
                  value: u
                });
              });
          }
          r.$[i] = l;
        } else if (kt(n) && !bo(n)) {
          let l = {
            v: n,
            n: this.norm.get(n)
          };
          r.$[i] = l;
        }
      }
    }), this.records.push(r);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
};
function _s(e, t, { getFn: a = ge.getFn, fieldNormWeight: r = ge.fieldNormWeight } = {}) {
  const o = new hi({ getFn: a, fieldNormWeight: r });
  return o.setKeys(e.map(ks)), o.setSources(t), o.create(), o;
}
function xv(e, { getFn: t = ge.getFn, fieldNormWeight: a = ge.fieldNormWeight } = {}) {
  const { keys: r, records: o } = e, i = new hi({ getFn: t, fieldNormWeight: a });
  return i.setKeys(r), i.setIndexRecords(o), i;
}
function fr(e, {
  errors: t = 0,
  currentLocation: a = 0,
  expectedLocation: r = 0,
  distance: o = ge.distance,
  ignoreLocation: i = ge.ignoreLocation
} = {}) {
  const n = t / e.length;
  if (i)
    return n;
  const l = Math.abs(r - a);
  return o ? n + l / o : l ? 1 : n;
}
function kv(e = [], t = ge.minMatchCharLength) {
  let a = [], r = -1, o = -1, i = 0;
  for (let n = e.length; i < n; i += 1) {
    let l = e[i];
    l && r === -1 ? r = i : !l && r !== -1 && (o = i - 1, o - r + 1 >= t && a.push([r, o]), r = -1);
  }
  return e[i - 1] && i - r >= t && a.push([r, i - 1]), a;
}
const da = 32;
function _v(e, t, a, {
  location: r = ge.location,
  distance: o = ge.distance,
  threshold: i = ge.threshold,
  findAllMatches: n = ge.findAllMatches,
  minMatchCharLength: l = ge.minMatchCharLength,
  includeMatches: s = ge.includeMatches,
  ignoreLocation: d = ge.ignoreLocation
} = {}) {
  if (t.length > da)
    throw new Error(cv(da));
  const c = t.length, u = e.length, f = Math.max(0, Math.min(r, u));
  let m = i, p = f;
  const h = l > 1 || s, v = h ? Array(u) : [];
  let g;
  for (; (g = e.indexOf(t, p)) > -1; ) {
    let le = fr(t, {
      currentLocation: g,
      expectedLocation: f,
      distance: o,
      ignoreLocation: d
    });
    if (m = Math.min(le, m), p = g + c, h) {
      let ie = 0;
      for (; ie < c; )
        v[g + ie] = 1, ie += 1;
    }
  }
  p = -1;
  let x = [], k = 1, _ = c + u;
  const $ = 1 << c - 1;
  for (let le = 0; le < c; le += 1) {
    let ie = 0, O = _;
    for (; ie < O; )
      fr(t, {
        errors: le,
        currentLocation: f + O,
        expectedLocation: f,
        distance: o,
        ignoreLocation: d
      }) <= m ? ie = O : _ = O, O = Math.floor((_ - ie) / 2 + ie);
    _ = O;
    let M = Math.max(1, f - O + 1), q = n ? u : Math.min(f + O, u) + c, B = Array(q + 2);
    B[q + 1] = (1 << le) - 1;
    for (let te = q; te >= M; te -= 1) {
      let he = te - 1, Me = a[e.charAt(he)];
      if (h && (v[he] = +!!Me), B[te] = (B[te + 1] << 1 | 1) & Me, le && (B[te] |= (x[te + 1] | x[te]) << 1 | 1 | x[te + 1]), B[te] & $ && (k = fr(t, {
        errors: le,
        currentLocation: he,
        expectedLocation: f,
        distance: o,
        ignoreLocation: d
      }), k <= m)) {
        if (m = k, p = he, p <= f)
          break;
        M = Math.max(1, 2 * f - p);
      }
    }
    if (fr(t, {
      errors: le + 1,
      currentLocation: f,
      expectedLocation: f,
      distance: o,
      ignoreLocation: d
    }) > m)
      break;
    x = B;
  }
  const A = {
    isMatch: p >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, k)
  };
  if (h) {
    const le = kv(v, l);
    le.length ? s && (A.indices = le) : A.isMatch = !1;
  }
  return A;
}
function $v(e) {
  let t = {};
  for (let a = 0, r = e.length; a < r; a += 1) {
    const o = e.charAt(a);
    t[o] = (t[o] || 0) | 1 << r - a - 1;
  }
  return t;
}
const _n = String.prototype.normalize ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "") : (e) => e;
class Sv {
  constructor(t, {
    location: a = ge.location,
    threshold: r = ge.threshold,
    distance: o = ge.distance,
    includeMatches: i = ge.includeMatches,
    findAllMatches: n = ge.findAllMatches,
    minMatchCharLength: l = ge.minMatchCharLength,
    isCaseSensitive: s = ge.isCaseSensitive,
    ignoreDiacritics: d = ge.ignoreDiacritics,
    ignoreLocation: c = ge.ignoreLocation
  } = {}) {
    if (this.options = {
      location: a,
      threshold: r,
      distance: o,
      includeMatches: i,
      findAllMatches: n,
      minMatchCharLength: l,
      isCaseSensitive: s,
      ignoreDiacritics: d,
      ignoreLocation: c
    }, t = s ? t : t.toLowerCase(), t = d ? _n(t) : t, this.pattern = t, this.chunks = [], !this.pattern.length)
      return;
    const u = (m, p) => {
      this.chunks.push({
        pattern: m,
        alphabet: $v(m),
        startIndex: p
      });
    }, f = this.pattern.length;
    if (f > da) {
      let m = 0;
      const p = f % da, h = f - p;
      for (; m < h; )
        u(this.pattern.substr(m, da), m), m += da;
      if (p) {
        const v = f - da;
        u(this.pattern.substr(v), v);
      }
    } else
      u(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: a, ignoreDiacritics: r, includeMatches: o } = this.options;
    if (t = a ? t : t.toLowerCase(), t = r ? _n(t) : t, this.pattern === t) {
      let h = {
        isMatch: !0,
        score: 0
      };
      return o && (h.indices = [[0, t.length - 1]]), h;
    }
    const {
      location: i,
      distance: n,
      threshold: l,
      findAllMatches: s,
      minMatchCharLength: d,
      ignoreLocation: c
    } = this.options;
    let u = [], f = 0, m = !1;
    this.chunks.forEach(({ pattern: h, alphabet: v, startIndex: g }) => {
      const { isMatch: x, score: k, indices: _ } = _v(t, h, v, {
        location: i + g,
        distance: n,
        threshold: l,
        findAllMatches: s,
        minMatchCharLength: d,
        includeMatches: o,
        ignoreLocation: c
      });
      x && (m = !0), f += k, x && _ && (u = [...u, ..._]);
    });
    let p = {
      isMatch: m,
      score: m ? f / this.chunks.length : 1
    };
    return m && o && (p.indices = u), p;
  }
}
const $n = [];
function Fo(e, t) {
  for (let a = 0, r = $n.length; a < r; a += 1) {
    let o = $n[a];
    if (o.condition(e, t))
      return new o(e, t);
  }
  return new Sv(e, t);
}
const Do = {
  AND: "$and",
  OR: "$or"
}, No = {
  PATH: "$path",
  PATTERN: "$val"
}, Ro = (e) => !!(e[Do.AND] || e[Do.OR]), Cv = (e) => !!e[No.PATH], zv = (e) => !jt(e) && ys(e) && !Ro(e), Sn = (e) => ({
  [Do.AND]: Object.keys(e).map((t) => ({
    [t]: e[t]
  }))
});
function Av(e, t, { auto: a = !0 } = {}) {
  const r = (o) => {
    let i = Object.keys(o);
    const n = Cv(o);
    if (!n && i.length > 1 && !Ro(o))
      return r(Sn(o));
    if (zv(o)) {
      const s = n ? o[No.PATH] : i[0], d = n ? o[No.PATTERN] : o[s];
      if (!kt(d))
        throw new Error(dv(s));
      const c = {
        keyId: Lo(s),
        pattern: d
      };
      return a && (c.searcher = Fo(d, t)), c;
    }
    let l = {
      children: [],
      operator: i[0]
    };
    return i.forEach((s) => {
      const d = o[s];
      jt(d) && d.forEach((c) => {
        l.children.push(r(c));
      });
    }), l;
  };
  return Ro(e) || (e = Sn(e)), r(e);
}
function Ev(e, { ignoreFieldNorm: t = ge.ignoreFieldNorm }) {
  e.forEach((a) => {
    let r = 1;
    a.matches.forEach(({ key: o, norm: i, score: n }) => {
      const l = o ? o.weight : null;
      r *= Math.pow(
        n === 0 && l ? Number.EPSILON : n,
        (l || 1) * (t ? 1 : i)
      );
    }), a.score = r;
  });
}
function Tv(e, t) {
  const a = e.matches;
  t.matches = [], ot(a) && a.forEach((r) => {
    if (!ot(r.indices) || !r.indices.length)
      return;
    const { indices: o, value: i } = r;
    let n = {
      indices: o,
      value: i
    };
    r.key && (n.key = r.key.src), r.idx > -1 && (n.refIndex = r.idx), t.matches.push(n);
  });
}
function Ov(e, t) {
  t.score = e.score;
}
function Vv(e, t, {
  includeMatches: a = ge.includeMatches,
  includeScore: r = ge.includeScore
} = {}) {
  const o = [];
  return a && o.push(Tv), r && o.push(Ov), e.map((i) => {
    const { idx: n } = i, l = {
      item: t[n],
      refIndex: n
    };
    return o.length && o.forEach((s) => {
      s(i, l);
    }), l;
  });
}
class ba {
  constructor(t, a = {}, r) {
    if (this.options = { ...ge, ...a }, this.options.useExtendedSearch)
      throw new Error(nv);
    this._keyStore = new fv(this.options.keys), this.setCollection(t, r);
  }
  setCollection(t, a) {
    if (this._docs = t, a && !(a instanceof hi))
      throw new Error(sv);
    this._myIndex = a || _s(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(t) {
    ot(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const a = [];
    for (let r = 0, o = this._docs.length; r < o; r += 1) {
      const i = this._docs[r];
      t(i, r) && (this.removeAt(r), r -= 1, o -= 1, a.push(i));
    }
    return a;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: a = -1 } = {}) {
    const {
      includeMatches: r,
      includeScore: o,
      shouldSort: i,
      sortFn: n,
      ignoreFieldNorm: l
    } = this.options;
    let s = kt(t) ? kt(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
    return Ev(s, { ignoreFieldNorm: l }), i && s.sort(n), ws(a) && a > -1 && (s = s.slice(0, a)), Vv(s, this._docs, {
      includeMatches: r,
      includeScore: o
    });
  }
  _searchStringList(t) {
    const a = Fo(t, this.options), { records: r } = this._myIndex, o = [];
    return r.forEach(({ v: i, i: n, n: l }) => {
      if (!ot(i))
        return;
      const { isMatch: s, score: d, indices: c } = a.searchIn(i);
      s && o.push({
        item: i,
        idx: n,
        matches: [{ score: d, value: i, norm: l, indices: c }]
      });
    }), o;
  }
  _searchLogical(t) {
    throw new Error(lv);
  }
  _searchObjectList(t) {
    const a = Fo(t, this.options), { keys: r, records: o } = this._myIndex, i = [];
    return o.forEach(({ $: n, i: l }) => {
      if (!ot(n))
        return;
      let s = [];
      r.forEach((d, c) => {
        s.push(
          ...this._findMatches({
            key: d,
            value: n[c],
            searcher: a
          })
        );
      }), s.length && i.push({
        idx: l,
        item: n,
        matches: s
      });
    }), i;
  }
  _findMatches({ key: t, value: a, searcher: r }) {
    if (!ot(a))
      return [];
    let o = [];
    if (jt(a))
      a.forEach(({ v: i, i: n, n: l }) => {
        if (!ot(i))
          return;
        const { isMatch: s, score: d, indices: c } = r.searchIn(i);
        s && o.push({
          score: d,
          key: t,
          value: i,
          idx: n,
          norm: l,
          indices: c
        });
      });
    else {
      const { v: i, n } = a, { isMatch: l, score: s, indices: d } = r.searchIn(i);
      l && o.push({ score: s, key: t, value: i, norm: n, indices: d });
    }
    return o;
  }
}
ba.version = "7.1.0";
ba.createIndex = _s;
ba.parseIndex = xv;
ba.config = ge;
ba.parseQuery = Av;
const Pv = {
  class: "search-container",
  "data-testid": "search-input"
}, Mv = {
  __name: "PElevatedSearch",
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
    loading: Boolean,
    hotkey: {
      type: Object,
      default: () => ({
        key: "",
        label: ""
      })
    },
    endpoint: {
      type: String,
      default: ""
    },
    /** Keys used to filter items in the dropdown */
    filterKeys: {
      type: Array,
      default: () => []
    },
    /** Additional static URL parameters */
    additionalParams: {
      type: [String, URLSearchParams],
      default: ""
    }
  },
  emits: ["update:modelValue", "close", "update:show"],
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = ci()[r.hotkey.key], n = F(null), { id: l, items: s, searchKeys: d, searchOptions: c, itemText: u, itemValue: f } = dd(r), m = je({
      ...c.value,
      keys: [...d.value]
    });
    let p = je(new ba(s.value, m));
    function h(O) {
      if (O != null && O.item) {
        if (u.value.includes(".")) {
          const M = La(O.item, u.value);
          return yn(M) ? M : "";
        }
        return u.value ? O.item[u.value] : O.item;
      }
      if (O) {
        if (u.value.includes(".")) {
          const M = La(O, u.value);
          return yn(M) ? M : "";
        }
        return u.value ? O[u.value] : O;
      }
      return null;
    }
    function v(O) {
      return O != null && O.item ? f.value.includes(".") ? La(O.item, f.value) : f.value ? O.item[f.value] : O.item : O ? f.value.includes(".") ? La(O, f.value) : f.value ? O[f.value] : O : null;
    }
    const g = V({
      get() {
        return r.modelValue;
      },
      set(O) {
        o("update:modelValue", v(O));
      }
    }), x = F(null), k = F(null);
    function _() {
      k.value.showModal();
    }
    function $() {
      k.value.close();
    }
    const A = V(() => x.value && !r.endpoint ? p.search(x.value) : r.items), le = je({
      id: l.value,
      serverside: !0,
      clearable: !0,
      prependIcon: fh,
      placeholder: r.placeholder,
      large: !0,
      showDivider: !0,
      offset: 0
    }), ie = V({
      get() {
        return r.show;
      },
      set(O) {
        o("update:show", O), O || o("close");
      }
    });
    return de(i, (O) => {
      O && r.hotkey && setTimeout(() => {
        n.value.select.input.focus();
      }, 100);
    }), oi(() => {
      p = je(new ba(s.value, m));
    }), t({
      showModal: _,
      close: $
    }), (O, M) => (w(), S("div", Pv, [
      G(bs, {
        ref_key: "modal",
        ref: k,
        modelValue: ie.value,
        "onUpdate:modelValue": M[6] || (M[6] = (q) => ie.value = q),
        "hide-header": "",
        "hide-footer": "",
        class: se({ "loader-modal": e.loading })
      }, {
        default: Z(() => [
          e.loading ? (w(), W(lr, { key: 0 })) : !e.loading && e.endpoint ? (w(), W(Wh, Ve({
            key: 1,
            modelValue: g.value,
            "onUpdate:modelValue": M[1] || (M[1] = (q) => g.value = q),
            class: "search elevated"
          }, le, {
            "item-text": z(u),
            endpoint: e.endpoint,
            "filter-keys": e.filterKeys,
            "additional-params": e.additionalParams,
            onSearch: M[2] || (M[2] = (q) => x.value = q)
          }), {
            inline: Z(() => [
              G(et, {
                "data-testid": "close-button",
                variant: "text",
                class: "cancel",
                onClick: M[0] || (M[0] = (q) => {
                  ie.value = !1, g.value = null, x.value = null;
                })
              }, {
                default: Z(() => [
                  _e(U(e.buttonText || z(ee)("input.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            option: Z(({ option: q, selected: B }) => [
              Q(O.$slots, "option", {
                option: q.item || q,
                selected: B
              }, void 0, !0)
            ]),
            _: 3
          }, 16, ["modelValue", "item-text", "endpoint", "filter-keys", "additional-params"])) : (w(), W(ms, Ve({
            key: 2,
            modelValue: g.value,
            "onUpdate:modelValue": M[4] || (M[4] = (q) => g.value = q),
            class: "search elevated"
          }, le, {
            "item-value": z(f),
            "item-text": h,
            items: A.value,
            onSearch: M[5] || (M[5] = (q) => x.value = q)
          }), {
            inline: Z(() => [
              G(et, {
                "data-testid": "close-button",
                variant: "text",
                class: "cancel",
                onClick: M[3] || (M[3] = (q) => {
                  ie.value = !1, g.value = null, x.value = null;
                })
              }, {
                default: Z(() => [
                  _e(U(e.buttonText || z(ee)("input.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            option: Z(({ option: q, selected: B }) => [
              Q(O.$slots, "option", {
                option: q.item || q,
                selected: B
              }, void 0, !0)
            ]),
            _: 3
          }, 16, ["modelValue", "item-value", "items"]))
        ]),
        _: 3
      }, 8, ["modelValue", "class"])
    ]));
  }
}, Iv = /* @__PURE__ */ ce(Mv, [["__scopeId", "data-v-3d6405b8"]]);
function jv(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function Bv(e, t) {
  return w(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
const Lv = {
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
  setup(e, { emit: t }) {
    const a = e, r = t, o = V({
      get: () => a.value,
      set: (n) => {
        r("update:model-value", n);
      }
    }), i = V(() => a.placeholder ? a.placeholder : ee("input.product_reference"));
    return (n, l) => (w(), W(ui, Ve({
      id: "reference-input",
      modelValue: o.value,
      "onUpdate:modelValue": l[0] || (l[0] = (s) => o.value = s),
      class: "reference-input",
      "data-testid": "reference-input",
      type: "text",
      icon: z(Bv),
      large: ""
    }, a, { placeholder: i.value }), null, 16, ["modelValue", "icon", "placeholder"]));
  }
}, Cn = /* @__PURE__ */ ce(Lv, [["__scopeId", "data-v-e55e085f"]]);
function wo(e, t = null, a = null) {
  let r = e;
  return typeof r != "number" && (r = parseFloat(e.replace(",", "."))), new Intl.NumberFormat(t || It.locale, {
    style: "currency",
    currency: a || It.currency
  }).format(r);
}
const Fv = { class: "inner" }, Dv = {
  key: 0,
  class: "subtitle"
}, Nv = {
  key: 2,
  class: "reference"
}, Rv = { class: "value" }, Uv = { class: "footer-wrapper" }, Hv = { class: "right" }, qv = {
  key: 0,
  class: "sub-total"
}, Kv = {
  key: 0,
  class: "label"
}, Wv = { class: "decimal" }, Zv = { class: "sub-price" }, Jv = { class: "label" }, Gv = { class: "shipping" }, Yv = { class: "sub-price" }, Xv = { class: "label" }, Qv = { class: "packaging" }, em = {
  key: 1,
  class: "excluded-from-price"
}, tm = { class: "desktop" }, am = { class: "mobile" }, rm = {
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
      default: pi
    },
    /** Text in the submit button */
    submit: {
      type: String,
      default: ""
    },
    /** Icon in the submit button */
    submitIcon: {
      type: Function,
      default: jv
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
  setup(e, { expose: t, emit: a }) {
    const r = e, o = a, i = F(!1), n = F(null), l = F(null), s = V(() => r.submit ? r.submit : ee("product-config-modal.add_to_cart")), d = V(() => r.submit ? r.submit : ee("product-config-modal.add")), c = V(() => r.priceSubtext ? r.priceSubtext : ee("product-config-modal.price_excluding")), u = V(() => {
      if (r.product && r.product.price) {
        let [p, h] = wo(r.product.price, r.lang, r.currency).toString().split(",");
        return h && (p = `${p},`), {
          whole: p,
          decimal: h
        };
      }
      return null;
    });
    function f() {
      l.value.showModal();
    }
    function m() {
      l.value.close();
    }
    return t({
      showModal: f,
      close: m
    }), (p, h) => (w(), W(bs, {
      ref_key: "modal",
      ref: l,
      class: "product-config-modal",
      fullscreen: "",
      "show-minimize": e.showMinimize,
      "data-testid": "product-config-modal",
      onMinimize: h[5] || (h[5] = (v) => i.value = v),
      onClose: h[6] || (h[6] = (v) => o("close"))
    }, {
      header: Z(() => [
        e.product.image ? (w(), W(ss, {
          key: 0,
          class: "product-image",
          mobile: e.product.imageMobile,
          tablet: e.product.imageTablet,
          image: e.product.image,
          width: i.value ? 88 : 136,
          rounded: 8,
          alt: `${e.product.title} image`
        }, null, 8, ["mobile", "tablet", "image", "width", "alt"])) : N("", !0),
        E("div", Fv, [
          G(gs, {
            level: "h2",
            class: "title"
          }, {
            default: Z(() => [
              _e(U(e.product.name), 1)
            ]),
            _: 1
          }),
          !i.value && e.subTitle ? (w(), S("span", Dv, [
            G(Yt, { icon: e.subTitleIcon }, null, 8, ["icon"]),
            _e(" " + U(e.subTitle), 1)
          ])) : N("", !0),
          !i.value && e.showReferenceField ? (w(), W(Cn, {
            key: 1,
            id: "reference",
            modelValue: n.value,
            "onUpdate:modelValue": [
              h[0] || (h[0] = (v) => n.value = v),
              h[1] || (h[1] = (v) => o("update:reference", v))
            ]
          }, null, 8, ["modelValue"])) : i.value && n.value ? (w(), S("span", Nv, [
            _e(U(p.referenceLabel) + ": ", 1),
            E("span", Rv, U(n.value), 1)
          ])) : N("", !0)
        ]),
        !i.value && e.showReferenceField ? (w(), W(Cn, {
          key: 1,
          id: "reference",
          modelValue: n.value,
          "onUpdate:modelValue": [
            h[2] || (h[2] = (v) => n.value = v),
            h[3] || (h[3] = (v) => o("update:reference", v))
          ]
        }, null, 8, ["modelValue"])) : N("", !0)
      ]),
      footer: Z(() => [
        E("div", Uv, [
          e.specs ? (w(), W(et, {
            key: 0,
            size: "large",
            variant: "secondary",
            class: "specifications"
          }, {
            default: Z(() => [
              _e(U(z(ee)("product-config-modal.specifications")), 1)
            ]),
            _: 1
          })) : N("", !0),
          E("div", Hv, [
            u.value ? (w(), S("div", qv, [
              E("span", {
                class: se(["price", { small: e.extendedPricing }])
              }, [
                e.extendedPricing ? (w(), S("span", Kv, U(z(ee)("product-config-modal.total")), 1)) : N("", !0),
                E("span", null, U(u.value.whole), 1),
                E("span", Wv, U(u.value.decimal), 1)
              ], 2),
              e.extendedPricing ? (w(), S(be, { key: 0 }, [
                E("span", Zv, [
                  E("span", Jv, U(z(ee)("product-config-modal.shipping_costs")), 1),
                  E("span", Gv, U(z(wo)(e.product.shipping, e.lang, e.currency)), 1)
                ]),
                E("span", Yv, [
                  E("span", Xv, U(z(ee)("product-config-modal.packaging_costs")), 1),
                  E("span", Qv, U(z(wo)(e.product.packaging, e.lang, e.currency)), 1)
                ])
              ], 64)) : (w(), S("span", em, U(c.value), 1))
            ])) : N("", !0),
            G(et, {
              disabled: !e.canOrder,
              class: "add-to-cart",
              size: "large",
              icon: e.submitIcon,
              onClick: h[4] || (h[4] = (v) => o("submit:product-config"))
            }, {
              default: Z(() => [
                E("span", tm, U(s.value), 1),
                E("span", am, U(d.value), 1)
              ]),
              _: 1
            }, 8, ["disabled", "icon"])
          ])
        ])
      ]),
      default: Z(() => [
        Q(p.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["show-minimize"]));
  }
}, om = /* @__PURE__ */ ce(rm, [["__scopeId", "data-v-fb5e0d55"]]), im = { class: "modal-container" }, nm = { class: "option" }, lm = { key: 0 }, sm = { class: "title" }, dm = {
  key: 0,
  class: "subtitle"
}, cm = { key: 1 }, um = { class: "title" }, pm = {
  key: 0,
  class: "subtitle"
}, fm = {
  __name: "PProductModal",
  setup(e) {
    const t = F(null), a = F(null), r = F(!1), o = F(!1), i = F({}), n = F(""), l = V(() => {
      var s, d, c, u, f, m;
      return {
        name: i.value.productInfo && Object.keys(i.value.productInfo).length && ((s = i.value.productInfo.translations[i.value.language]) != null && s.title) ? i.value.productInfo.translations[i.value.language].title : ((c = (d = i.value.productInfo) == null ? void 0 : d.translations) == null ? void 0 : c.nl.title) || ((u = i.value.productInfo) == null ? void 0 : u.code),
        image: (m = (f = i.value.productInfo) == null ? void 0 : f.images) == null ? void 0 : m[0].url,
        ...i.value.prices
      };
    });
    return de(n, async () => {
      n.value ? (i.value.selectedProduct = n.value, i.value.closeSearch(), i.value.openConfigurator(), await (await i.value.setProduct(n.value.code, !0)).getNextOption()) : n.value === "" && i.value.clear();
    }), at(() => {
      window.addEventListener("connectConfigurator:ready", (s) => {
        const d = s.detail;
        d.searchBar = t.value, d.configuratorModal = a.value, i.value = d;
      });
    }), (s, d) => {
      var c, u, f, m, p;
      return w(), S("div", im, [
        G(z(Iv), {
          id: "probo-product-search-bar",
          ref_key: "searchBar",
          ref: t,
          modelValue: n.value,
          "onUpdate:modelValue": d[0] || (d[0] = (h) => n.value = h),
          show: r.value,
          "onUpdate:show": d[1] || (d[1] = (h) => r.value = h),
          items: i.value.products,
          elevated: "",
          "search-keys": [
            "code",
            `translations.${i.value.language}.title`,
            `translations.${i.value.language}.description`
          ],
          "item-text": `translations.${i.value.language}.title`,
          loading: i.value.loading,
          "item-height": 80
        }, {
          option: Z(({ option: h }) => [
            E("span", nm, [
              h && h.translations[i.value.language] ? (w(), S("span", lm, [
                E("span", sm, U(h.translations[i.value.language].title), 1),
                h.translations[i.value.language].description ? (w(), S("span", dm, U(h.translations[i.value.language].description), 1)) : N("", !0)
              ])) : h && h.translations.nl ? (w(), S("span", cm, [
                E("span", um, U(h.translations.nl.title), 1),
                h.translations.nl.description ? (w(), S("span", pm, U(h.translations.nl.description), 1)) : N("", !0)
              ])) : N("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "show", "items", "search-keys", "item-text", "loading"]),
        G(z(om), {
          ref_key: "configuratorModal",
          ref: a,
          modelValue: o.value,
          "onUpdate:modelValue": d[2] || (d[2] = (h) => o.value = h),
          product: l.value,
          "sub-title": ((f = (u = (c = i.value.productInfo) == null ? void 0 : c.translations) == null ? void 0 : u[i.value.language]) == null ? void 0 : f.description) || ((p = (m = i.value.productInfo) == null ? void 0 : m.translations) == null ? void 0 : p.nl.description),
          specs: !1,
          "show-minimize": !1,
          "extended-pricing": "",
          submit: z(yt)("complete"),
          "submit-icon": z(pi),
          "can-order": i.value.canOrder,
          "onSubmit:productConfig": d[3] || (d[3] = (h) => i.value.finish()),
          onClose: d[4] || (d[4] = (h) => n.value = "")
        }, {
          default: Z(() => [
            Q(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["modelValue", "product", "sub-title", "submit", "submit-icon", "can-order"])
      ]);
    };
  }
}, hm = `*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:--theme(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:--theme(--default-font-feature-settings,normal);font-variation-settings:--theme(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:--theme(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:--theme(--default-mono-font-feature-settings,normal);font-variation-settings:--theme(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}:root,:host{--font-sans: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--animate-progress: progress 1s infinite linear;--transform-origin-left-right: 0% 50%;--color-primary-light: #3b82f6;--color-primary-mid: #2f6fe8;--color-primary: #2563eb;--color-primary-hover: #1d4ed8;--color-primary-pressed: #1e40af;--color-secondary: #ffffff;--color-secondary-hover: #fafafa;--color-secondary-pressed: #e5e5e5;--color-tertiary: #eff6ff;--color-tertiary-hover: #dbeafe;--color-tertiary-pressed: #bfdbfe;--color-error-primary: #7b2122;--color-error-secondary: #d52d2f;--color-error-tertiary: #e73c3e;--color-error-accent: #fef2f2;--color-warning-primary: #7c2d12;--color-warning-secondary: #c2410c;--color-warning-tertiary: #f97316;--color-warning-accent: #fff7ed;--color-info-primary: #1e3a8a;--color-info-secondary: #1d4ed8;--color-info-tertiary: #3b82f6;--color-info-accent: #eff6ff;--color-success-primary: #14532d;--color-success-secondary: #15803d;--color-success-tertiary: #22c55e;--color-success-accent: #f0fdf4;--color-border-primary: #d1d5db;--color-border-primary-hover: #9ca3af;--color-disabled-light: #f9fafb;--color-disabled: #f3f4f6;--color-disabled-text: #9ca3af;--color-table-row-border-color: #e5e5e5;--color-input-bg: #ffffff;--color-input-border: #d1d5db;--color-input-disabled-border: #d1d5db;--color-input-inline: #111827;--color-body-text: #111827;--color-body: #ffffff;--color-parent-bg: #ffffff;--color-child: #ffffff;--color-child-alt: #ffffff;--color-gray-450: #848b98;--color-red-50: oklch(97.1% .013 17.38);--color-red-100: oklch(93.6% .032 17.717);--color-red-200: oklch(88.5% .062 18.334);--color-red-300: oklch(80.8% .114 19.571);--color-red-400: oklch(70.4% .191 22.216);--color-red-500: oklch(63.7% .237 25.331);--color-red-600: oklch(57.7% .245 27.325);--color-red-700: oklch(50.5% .213 27.518);--color-red-800: oklch(44.4% .177 26.899);--color-red-900: oklch(39.6% .141 25.723);--color-red-950: oklch(25.8% .092 26.042);--color-orange-50: oklch(98% .016 73.684);--color-orange-100: oklch(95.4% .038 75.164);--color-orange-200: oklch(90.1% .076 70.697);--color-orange-300: oklch(83.7% .128 66.29);--color-orange-400: oklch(75% .183 55.934);--color-orange-500: oklch(70.5% .213 47.604);--color-orange-600: oklch(64.6% .222 41.116);--color-orange-700: oklch(55.3% .195 38.402);--color-orange-800: oklch(47% .157 37.304);--color-orange-900: oklch(40.8% .123 38.172);--color-orange-950: oklch(26.6% .079 36.259);--color-amber-50: oklch(98.7% .022 95.277);--color-amber-100: oklch(96.2% .059 95.617);--color-amber-200: oklch(92.4% .12 95.746);--color-amber-300: oklch(87.9% .169 91.605);--color-amber-400: oklch(82.8% .189 84.429);--color-amber-500: oklch(76.9% .188 70.08);--color-amber-600: oklch(66.6% .179 58.318);--color-amber-700: oklch(55.5% .163 48.998);--color-amber-800: oklch(47.3% .137 46.201);--color-amber-900: oklch(41.4% .112 45.904);--color-amber-950: oklch(27.9% .077 45.635);--color-yellow-50: oklch(98.7% .026 102.212);--color-yellow-100: oklch(97.3% .071 103.193);--color-yellow-200: oklch(94.5% .129 101.54);--color-yellow-300: oklch(90.5% .182 98.111);--color-yellow-400: oklch(85.2% .199 91.936);--color-yellow-500: oklch(79.5% .184 86.047);--color-yellow-600: oklch(68.1% .162 75.834);--color-yellow-700: oklch(55.4% .135 66.442);--color-yellow-800: oklch(47.6% .114 61.907);--color-yellow-900: oklch(42.1% .095 57.708);--color-yellow-950: oklch(28.6% .066 53.813);--color-lime-50: oklch(98.6% .031 120.757);--color-lime-100: oklch(96.7% .067 122.328);--color-lime-200: oklch(93.8% .127 124.321);--color-lime-300: oklch(89.7% .196 126.665);--color-lime-400: oklch(84.1% .238 128.85);--color-lime-500: oklch(76.8% .233 130.85);--color-lime-600: oklch(64.8% .2 131.684);--color-lime-700: oklch(53.2% .157 131.589);--color-lime-800: oklch(45.3% .124 130.933);--color-lime-900: oklch(40.5% .101 131.063);--color-lime-950: oklch(27.4% .072 132.109);--color-green-50: oklch(98.2% .018 155.826);--color-green-100: oklch(96.2% .044 156.743);--color-green-200: oklch(92.5% .084 155.995);--color-green-300: oklch(87.1% .15 154.449);--color-green-400: oklch(79.2% .209 151.711);--color-green-500: oklch(72.3% .219 149.579);--color-green-600: oklch(62.7% .194 149.214);--color-green-700: oklch(52.7% .154 150.069);--color-green-800: oklch(44.8% .119 151.328);--color-green-900: oklch(39.3% .095 152.535);--color-green-950: oklch(26.6% .065 152.934);--color-emerald-50: oklch(97.9% .021 166.113);--color-emerald-100: oklch(95% .052 163.051);--color-emerald-200: oklch(90.5% .093 164.15);--color-emerald-300: oklch(84.5% .143 164.978);--color-emerald-400: oklch(76.5% .177 163.223);--color-emerald-500: oklch(69.6% .17 162.48);--color-emerald-600: oklch(59.6% .145 163.225);--color-emerald-700: oklch(50.8% .118 165.612);--color-emerald-800: oklch(43.2% .095 166.913);--color-emerald-900: oklch(37.8% .077 168.94);--color-emerald-950: oklch(26.2% .051 172.552);--color-teal-50: oklch(98.4% .014 180.72);--color-teal-100: oklch(95.3% .051 180.801);--color-teal-200: oklch(91% .096 180.426);--color-teal-300: oklch(85.5% .138 181.071);--color-teal-400: oklch(77.7% .152 181.912);--color-teal-500: oklch(70.4% .14 182.503);--color-teal-600: oklch(60% .118 184.704);--color-teal-700: oklch(51.1% .096 186.391);--color-teal-800: oklch(43.7% .078 188.216);--color-teal-900: oklch(38.6% .063 188.416);--color-teal-950: oklch(27.7% .046 192.524);--color-cyan-50: oklch(98.4% .019 200.873);--color-cyan-100: oklch(95.6% .045 203.388);--color-cyan-200: oklch(91.7% .08 205.041);--color-cyan-300: oklch(86.5% .127 207.078);--color-cyan-400: oklch(78.9% .154 211.53);--color-cyan-500: oklch(71.5% .143 215.221);--color-cyan-600: oklch(60.9% .126 221.723);--color-cyan-700: oklch(52% .105 223.128);--color-cyan-800: oklch(45% .085 224.283);--color-cyan-900: oklch(39.8% .07 227.392);--color-cyan-950: oklch(30.2% .056 229.695);--color-sky-50: oklch(97.7% .013 236.62);--color-sky-100: oklch(95.1% .026 236.824);--color-sky-200: oklch(90.1% .058 230.902);--color-sky-300: oklch(82.8% .111 230.318);--color-sky-400: oklch(74.6% .16 232.661);--color-sky-500: oklch(68.5% .169 237.323);--color-sky-600: oklch(58.8% .158 241.966);--color-sky-700: oklch(50% .134 242.749);--color-sky-800: oklch(44.3% .11 240.79);--color-sky-900: oklch(39.1% .09 240.876);--color-sky-950: oklch(29.3% .066 243.157);--color-blue-50: oklch(97% .014 254.604);--color-blue-100: oklch(93.2% .032 255.585);--color-blue-200: oklch(88.2% .059 254.128);--color-blue-300: oklch(80.9% .105 251.813);--color-blue-400: oklch(70.7% .165 254.624);--color-blue-500: oklch(62.3% .214 259.815);--color-blue-600: oklch(54.6% .245 262.881);--color-blue-700: oklch(48.8% .243 264.376);--color-blue-800: oklch(42.4% .199 265.638);--color-blue-900: oklch(37.9% .146 265.522);--color-blue-950: oklch(28.2% .091 267.935);--color-indigo-50: oklch(96.2% .018 272.314);--color-indigo-100: oklch(93% .034 272.788);--color-indigo-200: oklch(87% .065 274.039);--color-indigo-300: oklch(78.5% .115 274.713);--color-indigo-400: oklch(67.3% .182 276.935);--color-indigo-500: oklch(58.5% .233 277.117);--color-indigo-600: oklch(51.1% .262 276.966);--color-indigo-700: oklch(45.7% .24 277.023);--color-indigo-800: oklch(39.8% .195 277.366);--color-indigo-900: oklch(35.9% .144 278.697);--color-indigo-950: oklch(25.7% .09 281.288);--color-violet-50: oklch(96.9% .016 293.756);--color-violet-100: oklch(94.3% .029 294.588);--color-violet-200: oklch(89.4% .057 293.283);--color-violet-300: oklch(81.1% .111 293.571);--color-violet-400: oklch(70.2% .183 293.541);--color-violet-500: oklch(60.6% .25 292.717);--color-violet-600: oklch(54.1% .281 293.009);--color-violet-700: oklch(49.1% .27 292.581);--color-violet-800: oklch(43.2% .232 292.759);--color-violet-900: oklch(38% .189 293.745);--color-violet-950: oklch(28.3% .141 291.089);--color-purple-50: oklch(97.7% .014 308.299);--color-purple-100: oklch(94.6% .033 307.174);--color-purple-200: oklch(90.2% .063 306.703);--color-purple-300: oklch(82.7% .119 306.383);--color-purple-400: oklch(71.4% .203 305.504);--color-purple-500: oklch(62.7% .265 303.9);--color-purple-600: oklch(55.8% .288 302.321);--color-purple-700: oklch(49.6% .265 301.924);--color-purple-800: oklch(43.8% .218 303.724);--color-purple-900: oklch(38.1% .176 304.987);--color-purple-950: oklch(29.1% .149 302.717);--color-fuchsia-50: oklch(97.7% .017 320.058);--color-fuchsia-100: oklch(95.2% .037 318.852);--color-fuchsia-200: oklch(90.3% .076 319.62);--color-fuchsia-300: oklch(83.3% .145 321.434);--color-fuchsia-400: oklch(74% .238 322.16);--color-fuchsia-500: oklch(66.7% .295 322.15);--color-fuchsia-600: oklch(59.1% .293 322.896);--color-fuchsia-700: oklch(51.8% .253 323.949);--color-fuchsia-800: oklch(45.2% .211 324.591);--color-fuchsia-900: oklch(40.1% .17 325.612);--color-fuchsia-950: oklch(29.3% .136 325.661);--color-pink-50: oklch(97.1% .014 343.198);--color-pink-100: oklch(94.8% .028 342.258);--color-pink-200: oklch(89.9% .061 343.231);--color-pink-300: oklch(82.3% .12 346.018);--color-pink-400: oklch(71.8% .202 349.761);--color-pink-500: oklch(65.6% .241 354.308);--color-pink-600: oklch(59.2% .249 .584);--color-pink-700: oklch(52.5% .223 3.958);--color-pink-800: oklch(45.9% .187 3.815);--color-pink-900: oklch(40.8% .153 2.432);--color-pink-950: oklch(28.4% .109 3.907);--color-rose-50: oklch(96.9% .015 12.422);--color-rose-100: oklch(94.1% .03 12.58);--color-rose-200: oklch(89.2% .058 10.001);--color-rose-300: oklch(81% .117 11.638);--color-rose-400: oklch(71.2% .194 13.428);--color-rose-500: oklch(64.5% .246 16.439);--color-rose-600: oklch(58.6% .253 17.585);--color-rose-700: oklch(51.4% .222 16.935);--color-rose-800: oklch(45.5% .188 13.697);--color-rose-900: oklch(41% .159 10.272);--color-rose-950: oklch(27.1% .105 12.094);--color-slate-50: oklch(98.4% .003 247.858);--color-slate-100: oklch(96.8% .007 247.896);--color-slate-200: oklch(92.9% .013 255.508);--color-slate-300: oklch(86.9% .022 252.894);--color-slate-400: oklch(70.4% .04 256.788);--color-slate-500: oklch(55.4% .046 257.417);--color-slate-600: oklch(44.6% .043 257.281);--color-slate-700: oklch(37.2% .044 257.287);--color-slate-800: oklch(27.9% .041 260.031);--color-slate-900: oklch(20.8% .042 265.755);--color-slate-950: oklch(12.9% .042 264.695);--color-gray-50: oklch(98.5% .002 247.839);--color-gray-100: oklch(96.7% .003 264.542);--color-gray-200: oklch(92.8% .006 264.531);--color-gray-300: oklch(87.2% .01 258.338);--color-gray-400: oklch(70.7% .022 261.325);--color-gray-500: oklch(55.1% .027 264.364);--color-gray-600: oklch(44.6% .03 256.802);--color-gray-700: oklch(37.3% .034 259.733);--color-gray-800: oklch(27.8% .033 256.848);--color-gray-900: oklch(21% .034 264.665);--color-gray-950: oklch(13% .028 261.692);--color-zinc-50: oklch(98.5% 0 0);--color-zinc-100: oklch(96.7% .001 286.375);--color-zinc-200: oklch(92% .004 286.32);--color-zinc-300: oklch(87.1% .006 286.286);--color-zinc-400: oklch(70.5% .015 286.067);--color-zinc-500: oklch(55.2% .016 285.938);--color-zinc-600: oklch(44.2% .017 285.786);--color-zinc-700: oklch(37% .013 285.805);--color-zinc-800: oklch(27.4% .006 286.033);--color-zinc-900: oklch(21% .006 285.885);--color-zinc-950: oklch(14.1% .005 285.823);--color-neutral-50: oklch(98.5% 0 0);--color-neutral-100: oklch(97% 0 0);--color-neutral-200: oklch(92.2% 0 0);--color-neutral-300: oklch(87% 0 0);--color-neutral-400: oklch(70.8% 0 0);--color-neutral-500: oklch(55.6% 0 0);--color-neutral-600: oklch(43.9% 0 0);--color-neutral-700: oklch(37.1% 0 0);--color-neutral-800: oklch(26.9% 0 0);--color-neutral-900: oklch(20.5% 0 0);--color-neutral-950: oklch(14.5% 0 0);--color-stone-50: oklch(98.5% .001 106.423);--color-stone-100: oklch(97% .001 106.424);--color-stone-200: oklch(92.3% .003 48.717);--color-stone-300: oklch(86.9% .005 56.366);--color-stone-400: oklch(70.9% .01 56.259);--color-stone-500: oklch(55.3% .013 58.071);--color-stone-600: oklch(44.4% .011 73.639);--color-stone-700: oklch(37.4% .01 67.558);--color-stone-800: oklch(26.8% .007 34.298);--color-stone-900: oklch(21.6% .006 56.043);--color-stone-950: oklch(14.7% .004 49.25);--color-black: #000;--color-white: #fff;--spacing: .25rem;--breakpoint-sm: 40rem;--breakpoint-md: 48rem;--breakpoint-lg: 64rem;--breakpoint-xl: 80rem;--breakpoint-2xl: 96rem;--container-3xs: 16rem;--container-2xs: 18rem;--container-xs: 20rem;--container-sm: 24rem;--container-md: 28rem;--container-lg: 32rem;--container-xl: 36rem;--container-2xl: 42rem;--container-3xl: 48rem;--container-4xl: 56rem;--container-5xl: 64rem;--container-6xl: 72rem;--container-7xl: 80rem;--text-xs: .75rem;--text-xs--line-height: calc(1 / .75);--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-3xl: 1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--text-6xl: 3.75rem;--text-6xl--line-height: 1;--text-7xl: 4.5rem;--text-7xl--line-height: 1;--text-8xl: 6rem;--text-8xl--line-height: 1;--text-9xl: 8rem;--text-9xl--line-height: 1;--font-weight-thin: 100;--font-weight-extralight: 200;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--font-weight-black: 900;--tracking-tighter: -.05em;--tracking-tight: -.025em;--tracking-normal: 0em;--tracking-wide: .025em;--tracking-wider: .05em;--tracking-widest: .1em;--leading-tight: 1.25;--leading-snug: 1.375;--leading-normal: 1.5;--leading-relaxed: 1.625;--leading-loose: 2;--radius-xs: .125rem;--radius-sm: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-4xl: 2rem;--shadow-2xs: 0 1px rgb(0 0 0 / .05);--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--inset-shadow-2xs: inset 0 1px rgb(0 0 0 / .05);--inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / .05);--inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / .05);--drop-shadow-xs: 0 1px 1px rgb(0 0 0 / .05);--drop-shadow-sm: 0 1px 2px rgb(0 0 0 / .15);--drop-shadow-md: 0 3px 3px rgb(0 0 0 / .12);--drop-shadow-lg: 0 4px 4px rgb(0 0 0 / .15);--drop-shadow-xl: 0 9px 7px rgb(0 0 0 / .1);--drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / .15);--text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / .15);--text-shadow-xs: 0px 1px 1px rgb(0 0 0 / .2);--text-shadow-sm: 0px 1px 0px rgb(0 0 0 / .075), 0px 1px 1px rgb(0 0 0 / .075), 0px 2px 2px rgb(0 0 0 / .075);--text-shadow-md: 0px 1px 1px rgb(0 0 0 / .1), 0px 1px 2px rgb(0 0 0 / .1), 0px 2px 4px rgb(0 0 0 / .1);--text-shadow-lg: 0px 1px 2px rgb(0 0 0 / .1), 0px 3px 2px rgb(0 0 0 / .1), 0px 4px 8px rgb(0 0 0 / .1);--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce: bounce 1s infinite;--blur-xs: 4px;--blur-sm: 8px;--blur-md: 12px;--blur-lg: 16px;--blur-xl: 24px;--blur-2xl: 40px;--blur-3xl: 64px;--perspective-dramatic: 100px;--perspective-near: 300px;--perspective-normal: 500px;--perspective-midrange: 800px;--perspective-distant: 1200px;--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)}@layer base{[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6a7282;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(55.1%25 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#155dfc;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6a7282;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}}.mini-icon[data-v-206f9b1b]{flex-shrink:0;width:1.25rem;height:1.25rem;display:flex}.dark .mini-icon[data-v-206f9b1b]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-822ed718],[data-v-822ed718]:before,[data-v-822ed718]:after,[data-v-822ed718]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.hotkey[data-v-822ed718]{border-style:var(--tw-border-style);--tw-border-style:solid;width:fit-content;min-width:1.25rem;height:1.25rem;padding-inline:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-style:solid;border-width:1px;border-radius:.25rem;justify-content:center;align-items:center;display:flex}.hotkey.disabled[data-v-822ed718]{color:var(--color-disabled-text,#9ca3af)}.hotkey.primary-hotkey[data-v-822ed718]{color:var(--color-white,#fff);background-color:#ffffff26;border-color:#ffffff80}.hotkey.secondary-hotkey[data-v-822ed718]{color:var(--color-neutral-500,oklch(55.6% 0 0));background-color:#0a0a0a08;border-color:#0a0a0a26}.hotkey.secondary-hotkey[data-v-822ed718]:where(.dark,.dark *){color:var(--color-body-text,#111827);background-color:#ffffff26;border-color:#ffffff80}.hotkey.tertiary-hotkey[data-v-822ed718]{color:var(--color-primary-light,#3b82f6);background-color:#0062ff0f;border-color:#0062ff4d}.hotkey.tertiary-hotkey[data-v-822ed718]:where(.dark,.dark *){border-color:var(--color-primary-mid,#2f6fe8)}.loader[data-v-7d40d0e0]{animation:var(--animate-spin);border-radius:100%;height:1.5rem;width:1.5rem;border-width:.1875rem}.loader.primary-loader[data-v-7d40d0e0]{border-color:var(--color-blue-100);border-top-color:var(--color-blue-600)}.loader.secondary-loader[data-v-7d40d0e0]{border-color:color-mix(in oklab,var(--color-white) 40%,transparent);border-top-color:var(--color-white)}.loader.small-loader[data-v-7d40d0e0]{height:1.25rem;width:1.25rem}.loader.large-loader[data-v-7d40d0e0]{height:1.75rem;width:1.75rem}.button[data-v-381ebff5]{height:2.5rem;border-radius:.5rem;padding:0 .75rem;font-weight:500;display:flex;justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;-webkit-user-select:none;user-select:none;color:var(--color-neutral-700)}.button .default-loader[data-v-381ebff5],.button .small-loader[data-v-381ebff5]{height:1.3rem;width:1.3rem}.button .large-loader[data-v-381ebff5]{height:1.5rem;width:1.5rem}.button[data-v-381ebff5]:disabled{background-color:var(--color-disabled)!important;color:var(--color-disabled-text)!important}.button.primary[data-v-381ebff5]{color:#fff;background-color:var(--color-primary)}.button.primary[data-v-381ebff5]:not(:disabled):hover{background-color:var(--color-primary-hover)}.button.primary[data-v-381ebff5]:not(:disabled):focus{background-color:var(--color-primary-pressed)}.button.secondary[data-v-381ebff5]{background-color:var(--color-secondary);border:1px solid var(--color-neutral-300);color:var(--color-neutral-950)}.dark .button.secondary[data-v-381ebff5]{color:var(--color-neutral-200)}.button.secondary[data-v-381ebff5]:not(:disabled):hover{background-color:var(--color-secondary-hover);border-color:var(--color-border-primary-hover)}.button.secondary[data-v-381ebff5]:not(:disabled):focus{background-color:var(--color-secondary-pressed)}.button.secondary[data-v-381ebff5]:disabled{border-color:var(--color-disabled)}.button.tertiary[data-v-381ebff5]{background-color:var(--color-tertiary);color:var(--color-primary)}.dark .button.tertiary[data-v-381ebff5]{color:var(--color-primary-light)}.button.tertiary[data-v-381ebff5]:not(:disabled):hover{background-color:var(--color-tertiary-hover)}.button.tertiary[data-v-381ebff5]:not(:disabled):focus{background-color:var(--color-tertiary-pressed)}.dark .button.text[data-v-381ebff5]{color:var(--color-body-text)}.button.text[data-v-381ebff5]:not(:disabled):hover{background-color:#0f172a0a}.button.text[data-v-381ebff5]:not(:disabled):focus{background-color:#0f172a14}.button.danger[data-v-381ebff5]{background-color:var(--color-error-tertiary);color:#fff}.button.danger[data-v-381ebff5]:not(:disabled):hover{background-color:var(--color-red-700)}.button.danger[data-v-381ebff5]:not(:disabled):focus{background-color:var(--color-red-900)}.button.success[data-v-381ebff5]{background-color:var(--color-success-tertiary);color:#fff}.button.success[data-v-381ebff5]:not(:disabled):hover{background-color:var(--color-success-secondary)}.button.success[data-v-381ebff5]:not(:disabled):focus{background-color:var(--color-success-primary)}.button.warning[data-v-381ebff5]{background-color:var(--color-warning-tertiary);color:#fff}.button.warning[data-v-381ebff5]:not(:disabled):hover{background-color:var(--color-warning-secondary)}.button.warning[data-v-381ebff5]:not(:disabled):focus{background-color:var(--color-warning-primary)}.button.url[data-v-381ebff5]{background-color:transparent;color:var(--color-primary);gap:.25rem;height:1.25rem;padding:0}.button.url[data-v-381ebff5]:hover{text-decoration:underline}.button.default.has-icon[data-v-381ebff5]{padding:.625rem}.button.default .mini-icon[data-v-381ebff5]{height:1.25rem;width:1.25rem}.button.default[data-v-381ebff5] .mini-icon svg{stroke-width:1.75}.button.small[data-v-381ebff5]{height:2rem;padding:0 .75rem}.button.small.has-icon[data-v-381ebff5]{border-radius:9999px;width:2rem}.button.small .mini-icon[data-v-381ebff5]{height:1rem;width:1rem}.button.small[data-v-381ebff5] .mini-icon svg{stroke-width:2}.button.medium[data-v-381ebff5]{height:3rem;padding:0 1rem;font-size:1rem;line-height:1.5rem}.button.medium .mini-icon[data-v-381ebff5]{height:1.5rem;width:1.5rem}.button.medium.has-icon[data-v-381ebff5]{padding:.75rem}.button.large[data-v-381ebff5]{height:3.5rem;padding:0 1.75rem;font-size:1rem;line-height:1.5rem}.button.large .mini-icon[data-v-381ebff5]{height:1.5rem;width:1.5rem}.button.large.has-icon[data-v-381ebff5]{padding:1.25rem}.hotkey[data-v-381ebff5]{margin-left:.25rem}.image-wrapper[data-v-4654b093]{width:100%;height:100%;display:block}.dark .image-wrapper[data-v-4654b093]{opacity:.8}.image.rounded-4[data-v-4654b093],.skeleton.rounded-4[data-v-4654b093]{border-radius:.25rem}.image.rounded-8[data-v-4654b093],.skeleton.rounded-8[data-v-4654b093]{border-radius:.5rem}.image.rounded-16[data-v-4654b093],.skeleton.rounded-16[data-v-4654b093]{border-radius:1rem}.image.rounded-100[data-v-4654b093],.skeleton.rounded-100[data-v-4654b093]{border-radius:3.40282e38px}.image-wrapper .skeleton[data-v-4654b093]{background-color:var(--color-neutral-200);width:100%;height:100%;animation:var(--animate-pulse)}.dark .image-wrapper .skeleton[data-v-4654b093]{background-color:var(--color-gray-700)}:is(h1,h2,h3,h4,h5,h6)[data-v-c6408bcb]{font-weight:600}.dark :is(h1,h2,h3,h4,h5,h6)[data-v-c6408bcb]{color:var(--color-neutral-200)}h1[data-v-c6408bcb],h2[data-v-c6408bcb]{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h3[data-v-c6408bcb],h4[data-v-c6408bcb],h5[data-v-c6408bcb],h6[data-v-c6408bcb]{font-family:var(--font-sans)}h1[data-v-c6408bcb]{font-size:1.75rem;letter-spacing:-.8px;line-height:2.25rem}h2[data-v-c6408bcb]{font-size:1.25rem;letter-spacing:-.2px;line-height:1.75rem}h3[data-v-c6408bcb]{font-size:1rem;line-height:1.5rem}h4[data-v-c6408bcb]{font-size:.875rem;line-height:1.25rem}h5[data-v-c6408bcb]{font-size:.875rem;line-height:1.25rem;font-weight:500}h6[data-v-c6408bcb]{font-size:.75rem;line-height:1rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3a85ac16],[data-v-3a85ac16]:before,[data-v-3a85ac16]:after,[data-v-3a85ac16]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid}}}[data-v-3a85ac16] .image-wrapper{height:10.25rem}[data-v-3a85ac16] .image-wrapper .image{object-fit:cover;width:100%;height:100%}[data-v-3a85ac16] .image-wrapper.dense{height:unset;flex-shrink:0;width:auto}[data-v-3a85ac16] .image-wrapper.disabled{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card[data-v-3a85ac16]{cursor:pointer;border-radius:var(--radius-xl,.75rem);background-color:var(--color-child-alt,#fff);flex-direction:column;width:17.625rem;display:flex;overflow:auto}.card[data-v-3a85ac16]:not(.passive):hover,.card[data-v-3a85ac16]:not(.passive):focus{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card[data-v-3a85ac16]:not(.flat){border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.card[data-v-3a85ac16]:not(.flat):where(.dark,.dark *){--tw-border-style:none;border-style:none}.card.passive[data-v-3a85ac16]{cursor:default}.card.disabled[data-v-3a85ac16]{cursor:default;border-color:var(--color-gray-300,oklch(87.2% .01 258.338));background-color:var(--color-disabled,#f3f4f6)}@media (hover:hover){.card.disabled[data-v-3a85ac16]:hover{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.card.disabled .content[data-v-3a85ac16]{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card.dense[data-v-3a85ac16]{flex-direction:row;justify-content:flex-start;width:100%}.card.dense .inner[data-v-3a85ac16]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1)}.card.flat[data-v-3a85ac16]:hover{background-color:var(--color-secondary-hover,#fafafa);--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card .inner[data-v-3a85ac16]{width:100%;padding:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}.card .inner .header[data-v-3a85ac16]{width:100%;padding-bottom:calc(var(--spacing,.25rem)*2);border-top-left-radius:.25rem;border-top-right-radius:.25rem;flex-direction:column;display:flex;position:relative}.card .inner .header .title[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.card .inner .header .subtitle[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.card .inner .header .subtitle[data-v-3a85ac16]:where(.dark,.dark *){color:var(--color-gray-100,oklch(96.7% .003 264.542))}.card .inner .content[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.card .inner .footer[data-v-3a85ac16]{padding-top:calc(var(--spacing,.25rem)*4)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e0700124],[data-v-e0700124]:before,[data-v-e0700124]:after,[data-v-e0700124]::backdrop{--tw-ease:initial}}}[data-v-e0700124]{will-change:height;backface-visibility:hidden;perspective:1000px;transform:translateZ(0)}.expand-enter-active[data-v-e0700124],.expand-leave-active[data-v-e0700124]{transition-property:height,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:var(--5827edde);overflow:hidden}.expand-enter-from[data-v-e0700124],.expand-leave-to[data-v-e0700124]{opacity:0}.expand-enter[data-v-e0700124],.expand-leave-to[data-v-e0700124]{height:var(--0259523c)}.card[data-v-b4f8a358]{width:100%}.card.expanded[data-v-b4f8a358]{max-height:var(--3d1a4e5c)}.card[data-v-b4f8a358] .inner{padding:calc(var(--spacing,.25rem)*1)}.button[data-v-b4f8a358]{margin-top:calc(var(--spacing,.25rem)*1);background-color:var(--color-neutral-50,oklch(98.5% 0 0));width:100%;height:auto;padding-block:calc(var(--spacing,.25rem)*2.5);color:var(--color-primary,#2563eb)}.button[data-v-b4f8a358]:where(.dark,.dark *){background-color:var(--color-child,#fff);color:var(--color-body-text,#111827)}.button[data-v-b4f8a358]:not([disabled]):hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:#0a0a0a14}@supports (color:color-mix(in lab,red,red)){.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-950,oklch(14.5% 0 0))8%,transparent)}}.expand-enter-active[data-v-b4f8a358],.expand-leave-active[data-v-b4f8a358]{transition-property:opacity,height}.expand-enter[data-v-b4f8a358],.expand-leave-to[data-v-b4f8a358]{opacity:0}.radio-group[data-v-c2d61b3c]{pointer-events:none;gap:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.radio-group[data-v-c2d61b3c] *{pointer-events:auto}.table-wrapper[data-v-5a42bd69]{border-radius:var(--radius-lg,.5rem);width:100%;display:block;position:relative;overflow:clip}.table-wrapper table[data-v-5a42bd69]{background-color:var(--color-body,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-wrapper .sticky-container[data-v-5a42bd69]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;position:sticky}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*3);background-color:var(--color-secondary-hover,#fafafa);align-items:center;display:flex}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]:where(.dark,.dark *){background-color:#323746}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-gray-300,oklch(87.2% .01 258.338));position:absolute}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]:where(.dark,.dark *){background-color:#7882a0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5ee4dbf8],[data-v-5ee4dbf8]:before,[data-v-5ee4dbf8]:after,[data-v-5ee4dbf8]::backdrop{--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}thead[data-v-5ee4dbf8]{top:calc(var(--spacing,.25rem)*0);z-index:10;background-color:var(--color-body,#fff);position:sticky}thead[data-v-5ee4dbf8] tr td{--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0))}thead[data-v-5ee4dbf8] tr td:where(.dark,.dark *){color:var(--color-white,#fff)}thead[data-v-5ee4dbf8] tr td input{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}thead[data-v-5ee4dbf8] tr td{--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-table-row-border-color));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-94a1d3c2],[data-v-94a1d3c2]:before,[data-v-94a1d3c2]:after,[data-v-94a1d3c2]::backdrop{--tw-border-style:solid}}}tbody[data-v-94a1d3c2] tr:not(:last-child){border-bottom-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-bottom-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}td[data-v-2b59e8a9]{padding-inline:calc(var(--spacing,.25rem)*4);vertical-align:middle;color:var(--color-neutral-950,oklch(14.5% 0 0))}td[data-v-2b59e8a9]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3dad8f2b],[data-v-3dad8f2b]:before,[data-v-3dad8f2b]:after,[data-v-3dad8f2b]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.checkbox-container[data-v-3dad8f2b]{flex-direction:column;width:100%;display:flex}.checkbox-container.large .label[data-v-3dad8f2b]{gap:calc(var(--spacing,.25rem)*3)}.checkbox-container.large .checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.label[data-v-3dad8f2b]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);display:flex}.label[data-v-3dad8f2b]:not(.disabled){cursor:pointer}.checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*.5);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6);border-radius:.25rem}.checkbox[data-v-3dad8f2b]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.checkbox[data-v-3dad8f2b]:checked,.checkbox[data-v-3dad8f2b]:indeterminate{border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary-light,#3b82f6)}.checkbox[data-v-3dad8f2b]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-gray-200,oklch(92.8% .006 264.531))!important}.checkbox[data-v-3dad8f2b]:not(:disabled):checked:hover,.checkbox[data-v-3dad8f2b]:not(:disabled):indeterminate:hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}.checkbox[data-v-3dad8f2b]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-3dad8f2b]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(156, 163, 175)' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-3dad8f2b]{border-color:var(--color-error-secondary,#d52d2f);outline-color:var(--color-error-secondary,#d52d2f)}.error .error-message[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.append[data-v-3dad8f2b]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-left:auto}tr[data-v-7e2dd7b3]{height:3.5rem;max-height:calc(var(--spacing,.25rem)*12);min-height:3.5rem}.icon[data-v-eb0a670a]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.dark .icon[data-v-eb0a670a]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-36fae9dd],[data-v-36fae9dd]:before,[data-v-36fae9dd]:after,[data-v-36fae9dd]::backdrop{--tw-font-weight:initial}}}.no-results-row[data-v-36fae9dd]{height:calc(var(--spacing,.25rem)*64);position:relative}.no-results-row td[data-v-36fae9dd]{white-space:nowrap;width:100%;height:100%;position:absolute;overflow:hidden}.no-results-row td .wrapper[data-v-36fae9dd]{justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);text-wrap:wrap;flex-direction:column;display:flex}.no-results-row td .wrapper .icon[data-v-36fae9dd]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12);stroke:var(--color-neutral-500,oklch(55.6% 0 0))}.no-results-row td .wrapper h2[data-v-36fae9dd]{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.no-results-row td .wrapper span[data-v-36fae9dd]{text-align:center;color:var(--color-neutral-500,oklch(55.6% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3600666a],[data-v-3600666a]:before,[data-v-3600666a]:after,[data-v-3600666a]::backdrop{--tw-border-style:solid}}}.pagination[data-v-3600666a]{gap:calc(var(--spacing,.25rem)*2);display:flex}.pagination .button[data-v-3600666a]{position:relative}.pagination .button[data-v-3600666a]:not(:disabled){color:var(--color-primary,#2563eb)}.pagination .button[data-v-3600666a]:not(:disabled):not(.current){color:var(--color-body-text,#111827)}.pagination .button[data-v-3600666a]:not(:disabled) .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.pagination .button[data-v-3600666a]:not(:first-child):not(:last-child){width:calc(var(--spacing,.25rem)*10);display:none}@media (min-width:48rem){.pagination .button[data-v-3600666a]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-3600666a]:not(:disabled):hover{border-color:var(--color-border-primary,#d1d5db)}.pagination .button.current[data-v-3600666a]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb)}.pagination .button .button-text[data-v-3600666a]{display:none}@media (min-width:48rem){.pagination .button .button-text[data-v-3600666a]{display:block}}.pagination .dotdotdot[data-v-3600666a]{align-self:center;display:none}@media (min-width:48rem){.pagination .dotdotdot[data-v-3600666a]{display:inline-block}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1005bec5],[data-v-1005bec5]:before,[data-v-1005bec5]:after,[data-v-1005bec5]::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-content:""}}}.skeleton[data-v-1005bec5]{height:calc(var(--spacing,.25rem)*5);animation:var(--animate-pulse,pulse-1005bec5 2s cubic-bezier(.4,0,.6,1)infinite);background-color:var(--color-neutral-200,oklch(92.2% 0 0));display:block}.skeleton[data-v-1005bec5]:where(.dark,.dark *){background-color:var(--color-gray-700,oklch(37.3% .034 259.733))}.skeleton.has-content[data-v-1005bec5]{height:auto}.skeleton.circular[data-v-1005bec5]{border-radius:50%}.skeleton.text[data-v-1005bec5]{--tw-scale-y:.7;scale:var(--tw-scale-x)var(--tw-scale-y);border-radius:.25rem}.skeleton.text[data-v-1005bec5]:not(.has-content){height:auto;color:inherit}.skeleton.text[data-v-1005bec5]:not(.has-content):before{--tw-content:" ";content:var(--tw-content)}.skeleton [data-v-1005bec5-s]{visibility:hidden}@keyframes pulse-1005bec5{50%{opacity:.5}}.micro-icon[data-v-08f67949]{display:flex;height:1rem;width:1rem;flex-shrink:0}.dark .micro-icon[data-v-08f67949]{color:var(--color-body-text)}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ee42469e],[data-v-ee42469e]:before,[data-v-ee42469e]:after,[data-v-ee42469e]::backdrop{--tw-duration:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}.expand-top-enter-active[data-v-ee42469e],.expand-bottom-enter-active[data-v-ee42469e],.expand-left-enter-active[data-v-ee42469e],.expand-right-enter-active[data-v-ee42469e],.expand-top-leave-active[data-v-ee42469e],.expand-bottom-leave-active[data-v-ee42469e],.expand-left-leave-active[data-v-ee42469e],.expand-right-leave-active[data-v-ee42469e]{transform:translateZ(0)var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.15s;transition-duration:.15s}.expand-top-enter-from[data-v-ee42469e]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-top-enter-to[data-v-ee42469e]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-top-leave-from[data-v-ee42469e]{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-top-leave-to[data-v-ee42469e]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-from[data-v-ee42469e]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-to[data-v-ee42469e]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-bottom-leave-from[data-v-ee42469e]{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-bottom-leave-to[data-v-ee42469e]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-from[data-v-ee42469e]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-to[data-v-ee42469e]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-left-leave-from[data-v-ee42469e]{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-left-leave-to[data-v-ee42469e]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-from[data-v-ee42469e]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-to[data-v-ee42469e]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-right-leave-from[data-v-ee42469e]{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-right-leave-to[data-v-ee42469e]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a4925caf],[data-v-a4925caf]:before,[data-v-a4925caf]:after,[data-v-a4925caf]::backdrop{--tw-contain-size:initial;--tw-contain-layout:initial;--tw-contain-paint:initial;--tw-contain-style:initial}}}.floating-container-overlay-container[data-v-a4925caf]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);--tw-contain-layout:layout;contain:var(--tw-contain-size,)var(--tw-contain-layout,)var(--tw-contain-paint,)var(--tw-contain-style,);display:contents;position:absolute}.floating-container-overlay-container .floating-container-overlay[data-v-a4925caf]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);display:flex;position:absolute}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-a4925caf]{pointer-events:auto;visibility:hidden;margin:calc(var(--spacing,.25rem)*0);width:max-content;height:max-content;padding:calc(var(--spacing,.25rem)*0);background-color:#0000;position:absolute;overflow:visible}@property --tw-contain-size{syntax:"*";inherits:false}@property --tw-contain-layout{syntax:"*";inherits:false}@property --tw-contain-paint{syntax:"*";inherits:false}@property --tw-contain-style{syntax:"*";inherits:false}.list[data-v-12959343]{flex-direction:column;display:flex}.list.grid[data-v-12959343]{flex-flow:wrap}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-93a0a846],[data-v-93a0a846]:before,[data-v-93a0a846]:after,[data-v-93a0a846]::backdrop{--tw-font-weight:initial}}}.list-item[data-v-93a0a846]{background-color:var(--color-child,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);color:var(--color-body-text,#111827);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));align-items:center;display:flex}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]){outline-offset:2px;outline:2px solid #0000}}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):hover{cursor:pointer;background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):hover:where(.dark,.dark *){background-color:var(--color-slate-800,oklch(27.9% .041 260.031))}.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-93a0a846]{background-color:var(--color-gray-200,oklch(92.8% .006 264.531))}:is(.list-item.clickable[data-v-93a0a846]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-93a0a846]):where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-93a0a846]{background-color:var(--color-gray-300,oklch(87.2% .01 258.338))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-93a0a846]:where(.dark,.dark *){background-color:var(--color-slate-700,oklch(37.2% .044 257.287))}.list-item .prepend[data-v-93a0a846]{display:flex}.list-item .content[data-v-93a0a846]{flex-direction:column;display:flex}.list-item .content .title[data-v-93a0a846]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.list-item .content .subtitle[data-v-93a0a846]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.list-item .content .text[data-v-93a0a846]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-f6c45fb8],[data-v-f6c45fb8]:before,[data-v-f6c45fb8]:after,[data-v-f6c45fb8]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.label[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*6);width:fit-content;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:.25rem;align-items:center;padding-inline:.625rem;display:flex}.label.small[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*5);padding-inline:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.label.blue[data-v-f6c45fb8]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585));color:var(--color-blue-700,oklch(48.8% .243 264.376))}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#54a2ff1a!important}@supports (color:color-mix(in lab,red,red)){.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-blue-400,oklch(70.7% .165 254.624))10%,transparent)!important}}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))!important}.label.green[data-v-f6c45fb8]{background-color:var(--color-green-100,oklch(96.2% .044 156.743));color:var(--color-green-700,oklch(52.7% .154 150.069))}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#05df721a!important}@supports (color:color-mix(in lab,red,red)){.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-400,oklch(79.2% .209 151.711))10%,transparent)!important}}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-green-300,oklch(87.1% .15 154.449))!important}.label.gray[data-v-f6c45fb8]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542));color:var(--color-gray-700,oklch(37.3% .034 259.733))}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#a1a1a11a!important}@supports (color:color-mix(in lab,red,red)){.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-400,oklch(70.8% 0 0))10%,transparent)!important}}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))!important}.label.orange[data-v-f6c45fb8]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164));color:var(--color-orange-700,oklch(55.3% .195 38.402))}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff8b1a1a!important}@supports (color:color-mix(in lab,red,red)){.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-orange-400,oklch(75% .183 55.934))10%,transparent)!important}}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-orange-300,oklch(83.7% .128 66.29))!important}.label.purple[data-v-f6c45fb8]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174));color:var(--color-purple-700,oklch(49.6% .265 301.924))}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#c07eff1a!important}@supports (color:color-mix(in lab,red,red)){.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-purple-400,oklch(71.4% .203 305.504))10%,transparent)!important}}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-purple-300,oklch(82.7% .119 306.383))!important}.label.red[data-v-f6c45fb8]{background-color:var(--color-red-100,oklch(93.6% .032 17.717));color:var(--color-red-700,oklch(50.5% .213 27.518))}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff65681a!important}@supports (color:color-mix(in lab,red,red)){.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-red-400,oklch(70.4% .191 22.216))10%,transparent)!important}}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-red-300,oklch(80.8% .114 19.571))!important}.label.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193));color:var(--color-yellow-700,oklch(55.4% .135 66.442))}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#fac8001a!important}@supports (color:color-mix(in lab,red,red)){.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-yellow-400,oklch(85.2% .199 91.936))10%,transparent)!important}}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-yellow-300,oklch(90.5% .182 98.111))!important}.label.alt[data-v-f6c45fb8]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));border-width:1px}.label.alt.white[data-v-f6c45fb8]{border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);color:var(--color-neutral-900,oklch(20.5% 0 0))}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-white,#fff)10%,transparent)}}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}.label.alt.gray[data-v-f6c45fb8]{background-color:var(--color-neutral-100,oklch(97% 0 0));color:var(--color-neutral-900,oklch(20.5% 0 0));border-color:#3741511a}.label.alt.orange[data-v-f6c45fb8]{background-color:var(--color-orange-50,oklch(98% .016 73.684));color:var(--color-orange-900,oklch(40.8% .123 38.172));border-color:#c2730c1a}.label.alt.blue[data-v-f6c45fb8]{background-color:var(--color-blue-50,oklch(97% .014 254.604));color:var(--color-blue-900,oklch(37.9% .146 265.522));border-color:#1d65d81a}.label.alt.green[data-v-f6c45fb8]{background-color:var(--color-green-50,oklch(98.2% .018 155.826));color:var(--color-green-900,oklch(39.3% .095 152.535));border-color:#16803a1a}.label.alt.red[data-v-f6c45fb8]{background-color:var(--color-red-50,oklch(97.1% .013 17.38));color:var(--color-red-900,oklch(39.6% .141 25.723));border-color:#b32c221a}.label.alt.purple[data-v-f6c45fb8]{background-color:var(--color-purple-50,oklch(97.7% .014 308.299));color:var(--color-purple-900,oklch(38.1% .176 304.987));border-color:#7522ce1a}.label.alt.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-50,oklch(98.7% .026 102.212));color:var(--color-yellow-900,oklch(42.1% .095 57.708));border-color:#a162071a}.divider[data-v-cf022594]{border-color:var(--color-border-primary,#d1d5db);width:100%}.divider[data-v-cf022594]:not(.vertical){border-top-width:var(--1e7beddb)}.divider.vertical[data-v-cf022594]{width:.0625rem;height:100%}.divider.vertical.flex[data-v-cf022594]{align-self:stretch;height:auto}.divider.vertical[data-v-cf022594]{border-left-width:var(--1e7beddb)}.base-select[data-v-c35e5bc8]:focus{outline:none}.base-select.disabled .wrapper[data-v-c35e5bc8]{background-color:var(--color-disabled);border-color:var(--color-input-disabled-border);cursor:not-allowed}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-c35e5bc8]{color:var(--color-disabled-text);background-color:var(--color-disabled)}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-c35e5bc8]::placeholder{color:var(--color-disabled-text)}.base-select.click[data-v-c35e5bc8]{cursor:pointer}.base-select.click.disabled[data-v-c35e5bc8]{pointer-events:none;cursor:default}.base-select .input-label[data-v-c35e5bc8]{font-size:.875rem;line-height:1.25rem;font-weight:500;margin-bottom:.25rem;display:flex}.base-select .wrapper[data-v-c35e5bc8]{background-color:var(--color-input-bg);border:solid 1px var(--color-input-border);border-radius:.5rem;display:flex;align-items:center;width:100%;height:2.5rem;padding:.5rem 1rem .5rem .5rem}.base-select .wrapper[data-v-c35e5bc8]:hover{border-color:var(--color-border-primary-hover)}.base-select .wrapper.focus[data-v-c35e5bc8]{border-color:var(--color-primary-light);border-width:2px;padding-left:.4375rem;padding-right:.9375rem}.base-select .wrapper.has-error[data-v-c35e5bc8]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)}.base-select .wrapper .prepend-icon[data-v-c35e5bc8]{color:var(--color-primary);margin-left:.5rem}.base-select .wrapper .selected-items[data-v-c35e5bc8]{display:flex;gap:.25rem;white-space:nowrap;overflow:hidden;margin-left:.5rem;width:auto}.base-select .wrapper .selected-items .label[data-v-c35e5bc8]{font-size:.75rem;line-height:1rem;height:min-content}.base-select .wrapper .placeholder[data-v-c35e5bc8]{color:var(--color-slate-400);margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .selected-item[data-v-c35e5bc8]{font-size:.875rem;line-height:1.25rem;margin-left:.5rem;text-overflow:ellipsis;overflow:hidden}.base-select .wrapper .action-buttons[data-v-c35e5bc8]{display:flex;gap:.25rem;margin-left:auto}.base-select .wrapper input[data-v-c35e5bc8]{border-style:none;padding:.5rem 0;margin-left:.5rem;font-size:.875rem;line-height:1.25rem;flex:1 0 5rem;min-width:0;min-height:0;background-color:var(--color-input-bg);color:var(--color-body-text);height:2.25rem}.base-select .wrapper input[data-v-c35e5bc8]::placeholder{color:var(--color-slate-400)}.base-select .wrapper input[data-v-c35e5bc8]:focus{box-shadow:none}.base-select .wrapper .label-inner[data-v-c35e5bc8]{display:flex;align-items:center;gap:.25rem}.base-select .wrapper .label-inner .close-button[data-v-c35e5bc8]{height:1rem;width:1rem}.base-select .error[data-v-c35e5bc8]{font-size:.875rem;line-height:1.25rem;color:var(--color-error-secondary);margin-top:.5rem}.state-indicator[data-v-c35e5bc8]{pointer-events:none;transition:all .2s ease-in-out}.state-indicator.is-open[data-v-c35e5bc8]{transform:rotate(180deg)}.content-divider[data-v-c35e5bc8]{border-color:var(--color-input-border);margin-left:1.5rem;margin-right:1.5rem}.select-content[data-v-c35e5bc8]{justify-content:space-between;max-height:18.75rem;overflow-y:auto;padding:.5rem 0;border-radius:.5rem;background-color:var(--color-child)}.select-content.show-shadow[data-v-c35e5bc8]{box-shadow:var(--shadow-sm)}.select-content.remove-radius[data-v-c35e5bc8]{border-top-left-radius:0!important;border-top-right-radius:0!important}.select-content .no-results[data-v-c35e5bc8]{color:var(--color-gray-700);cursor:default;-webkit-user-select:none;user-select:none;padding:.5rem 1rem;position:relative}.select-content[data-v-c35e5bc8] .checkbox-container{margin-right:1rem}.dark .wrapper input[data-v-c35e5bc8]::placeholder,.dark .select-content .no-results[data-v-c35e5bc8]{color:var(--color-body-text)}@media (min-width: 768px){.select-content[data-v-c35e5bc8]{max-height:400px}}@media (min-width: 1024px){.select-content[data-v-c35e5bc8]{max-height:500px}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-2a3a7b5b],[data-v-2a3a7b5b]:before,[data-v-2a3a7b5b]:after,[data-v-2a3a7b5b]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-border-style:solid;--tw-content:"";--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.tooltip-wrapper[data-v-2a3a7b5b]{display:contents}.tooltip[data-v-2a3a7b5b]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));word-break:break-all;color:var(--color-black,#000);--tw-drop-shadow-size:drop-shadow(0 2px 4px var(--tw-drop-shadow-color,#0000003d));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,);justify-content:center;display:flex;position:relative}.tooltip[data-v-2a3a7b5b]:where(.dark,.dark *){background-color:var(--color-neutral-200,oklch(92.2% 0 0))}.tooltip[data-v-2a3a7b5b]:before{width:calc(var(--spacing,.25rem)*0);border-style:var(--tw-border-style);--tw-border-style:solid;--tw-content:"";content:var(--tw-content);border:8px solid #0000;display:block;position:absolute}.tooltip.top-left[data-v-2a3a7b5b],.tooltip.top-right[data-v-2a3a7b5b],.tooltip.top-center[data-v-2a3a7b5b],.tooltip.top[data-v-2a3a7b5b]{margin-bottom:calc(var(--spacing,.25rem)*2)}:is(.tooltip.top-left[data-v-2a3a7b5b],.tooltip.top-right[data-v-2a3a7b5b],.tooltip.top-center[data-v-2a3a7b5b],.tooltip.top[data-v-2a3a7b5b]):before{content:var(--tw-content);border-top-color:var(--color-white,#fff)}:is(.tooltip.top-left[data-v-2a3a7b5b],.tooltip.top-right[data-v-2a3a7b5b],.tooltip.top-center[data-v-2a3a7b5b],.tooltip.top[data-v-2a3a7b5b]):where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.top-left[data-v-2a3a7b5b],.tooltip.top-right[data-v-2a3a7b5b],.tooltip.top-center[data-v-2a3a7b5b],.tooltip.top[data-v-2a3a7b5b]):before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-2a3a7b5b]:before{content:var(--tw-content);border-top-color:#000}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-2a3a7b5b]:where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-child-alt,#fff)}.tooltip.top-left[data-v-2a3a7b5b]:before{bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-right[data-v-2a3a7b5b]:before{right:calc(var(--spacing,.25rem)*3);bottom:calc(var(--spacing,.25rem)*0);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-center[data-v-2a3a7b5b]:before,.tooltip.top[data-v-2a3a7b5b]:before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}.tooltip.bottom-left[data-v-2a3a7b5b],.tooltip.bottom-right[data-v-2a3a7b5b],.tooltip.bottom-center[data-v-2a3a7b5b],.tooltip.bottom[data-v-2a3a7b5b]{margin-top:calc(var(--spacing,.25rem)*2)}:is(.tooltip.bottom-left[data-v-2a3a7b5b],.tooltip.bottom-right[data-v-2a3a7b5b],.tooltip.bottom-center[data-v-2a3a7b5b],.tooltip.bottom[data-v-2a3a7b5b]):before{content:var(--tw-content);border-bottom-color:var(--color-white,#fff)}:is(.tooltip.bottom-left[data-v-2a3a7b5b],.tooltip.bottom-right[data-v-2a3a7b5b],.tooltip.bottom-center[data-v-2a3a7b5b],.tooltip.bottom[data-v-2a3a7b5b]):where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-2a3a7b5b]:before{content:var(--tw-content);border-bottom-color:#000}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-2a3a7b5b]:where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-child-alt,#fff)}.tooltip.bottom-left[data-v-2a3a7b5b]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-right[data-v-2a3a7b5b]:before{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-center[data-v-2a3a7b5b]:before,.tooltip.bottom[data-v-2a3a7b5b]:before{top:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0;left:50%}.tooltip.left-top[data-v-2a3a7b5b],.tooltip.left-bottom[data-v-2a3a7b5b],.tooltip.left-center[data-v-2a3a7b5b],.tooltip.left[data-v-2a3a7b5b]{margin-right:calc(var(--spacing,.25rem)*2)}:is(.tooltip.left-top[data-v-2a3a7b5b],.tooltip.left-bottom[data-v-2a3a7b5b],.tooltip.left-center[data-v-2a3a7b5b],.tooltip.left[data-v-2a3a7b5b]):before{content:var(--tw-content);border-left-color:var(--color-white,#fff)}:is(.tooltip.left-top[data-v-2a3a7b5b],.tooltip.left-bottom[data-v-2a3a7b5b],.tooltip.left-center[data-v-2a3a7b5b],.tooltip.left[data-v-2a3a7b5b]):where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-2a3a7b5b]:before{content:var(--tw-content);border-left-color:#000}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-2a3a7b5b]:where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-child-alt,#fff)}.tooltip.left-top[data-v-2a3a7b5b]:before{top:calc(var(--spacing,.25rem)*3);right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-bottom[data-v-2a3a7b5b]:before{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*3);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-center[data-v-2a3a7b5b]:before,.tooltip.left[data-v-2a3a7b5b]:before{top:50%;right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.right-top[data-v-2a3a7b5b],.tooltip.right-bottom[data-v-2a3a7b5b],.tooltip.right-center[data-v-2a3a7b5b],.tooltip.right[data-v-2a3a7b5b]{margin-left:calc(var(--spacing,.25rem)*2)}:is(.tooltip.right-top[data-v-2a3a7b5b],.tooltip.right-bottom[data-v-2a3a7b5b],.tooltip.right-center[data-v-2a3a7b5b],.tooltip.right[data-v-2a3a7b5b]):before{content:var(--tw-content);border-right-color:var(--color-white,#fff)}:is(.tooltip.right-top[data-v-2a3a7b5b],.tooltip.right-bottom[data-v-2a3a7b5b],.tooltip.right-center[data-v-2a3a7b5b],.tooltip.right[data-v-2a3a7b5b]):where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-2a3a7b5b]:before{content:var(--tw-content);border-right-color:#000}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-2a3a7b5b]:where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-child-alt,#fff)}.tooltip.right-top[data-v-2a3a7b5b]:before{top:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-bottom[data-v-2a3a7b5b]:before{bottom:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-center[data-v-2a3a7b5b]:before,.tooltip.right[data-v-2a3a7b5b]:before{top:50%;left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.inverted[data-v-2a3a7b5b]{background-color:var(--color-black,#000);color:var(--color-white,#fff)}.tooltip.inverted[data-v-2a3a7b5b]:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.input-container[data-v-88a4183b]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-88a4183b]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-88a4183b]{stroke:var(--color-error-tertiary)}.input-container.has-error .icon.has-error[data-v-88a4183b]{fill:var(--color-error-tertiary);stroke:#fff}.container-inner[data-v-88a4183b]{width:100%;position:relative}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended)[data-v-88a4183b]{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;z-index:20}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .icon[data-v-88a4183b]{height:1.25rem;width:1.25rem}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .text[data-v-88a4183b]{color:var(--color-input-inline);font-size:.875rem;line-height:1.25rem}.container-inner .inline-container-prepended[data-v-88a4183b]{left:1rem}.container-inner .inline-container-appended[data-v-88a4183b]{right:1rem}.input-label[data-v-88a4183b]{font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:flex}.input-label .label-text[data-v-88a4183b]{display:flex;gap:.5625rem;align-items:center}.input-label .label-text .info-icon[data-v-88a4183b]{width:.875rem;height:.875rem}.input-label .optional[data-v-88a4183b]{color:#6b7280;font-weight:400;margin-left:auto;padding-left:.25rem}.dark :is(.input-label .optional)[data-v-88a4183b]{color:#e5e7eb}.dark .input[data-v-88a4183b]{color-scheme:dark}.input[data-v-88a4183b]{background-color:var(--color-input-bg);width:100%;height:2.5rem;border:1px solid var(--color-input-border);border-radius:.5rem;padding:0 1rem;font-size:.875rem;line-height:1.25rem;color:var(--color-slate-900);box-sizing:border-box;outline:none;transition:border .2s}.input[data-v-88a4183b]::placeholder{color:var(--color-neutral-400)}.input[data-v-88a4183b]:hover{border-color:var(--color-border-primary-hover)}.input[data-v-88a4183b]:focus{border-color:var(--color-primary-light);border-width:2px;padding-left:15px}.input.has-icon-prepended[data-v-88a4183b]{padding-left:2.5rem}.input.has-icon-prepended[data-v-88a4183b]:focus{padding-left:2.4375rem}.input.has-inline-text[data-v-88a4183b]{padding-right:2.5rem}.input.has-error[data-v-88a4183b]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)!important}.input.has-error[data-v-88a4183b]::placeholder{color:var(--color-error-primary)}.input.is-valid[data-v-88a4183b]{border-color:var(--color-success-tertiary);color:var(--color-success-primary)}.input.is-valid[data-v-88a4183b]::placeholder{color:var(--color-success-primary)}.input:disabled[data-v-88a4183b]{background-color:var(--color-disabled);color:var(--color-disabled-text)!important;border-color:var(--color-input-disabled-border)}.input:disabled[data-v-88a4183b]::placeholder{color:var(--color-disabled-text)}.input.medium[data-v-88a4183b]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-88a4183b]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-88a4183b]{height:3.5rem;font-size:1rem;line-height:1.5rem}.dark .input[data-v-88a4183b]{color:var(--color-body-text)}.error[data-v-88a4183b]{color:var(--color-error-secondary);font-size:.875rem;line-height:1.25rem;margin-top:.5rem}.input-container[data-v-19316412] .container-inner .inline-container-appended{margin-right:calc(var(--spacing,.25rem)*6)}.input-container[data-v-19316412] .container-inner .inline-container-appended .button{background-color:#0000}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-be635536],[data-v-be635536]:before,[data-v-be635536]:after,[data-v-be635536]::backdrop{--tw-border-style:solid}}}.table-selection[data-v-be635536]{margin-top:calc(var(--spacing,.25rem)*1);align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);width:100%;padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*2);display:flex}.table-selection[data-v-be635536]:where(.dark,.dark *){border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff)}.table-selection .amount[data-v-be635536]{margin-right:auto}.table-selection .actions[data-v-be635536]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@media (min-width:48rem){.table-selection .actions[data-v-be635536]{flex-direction:row}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1df2d468],[data-v-1df2d468]:before,[data-v-1df2d468]:after,[data-v-1df2d468]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial}}}.list[data-v-1df2d468]{width:calc(var(--spacing,.25rem)*64);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);padding-top:calc(var(--spacing,.25rem)*4);padding-bottom:calc(var(--spacing,.25rem)*2.5);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow:hidden}.list .list-inner[data-v-1df2d468]{gap:calc(var(--spacing,.25rem)*1.5);flex-direction:column;max-height:33.625rem;display:flex;overflow:auto}.list .active-columns[data-v-1df2d468],.list .available-columns[data-v-1df2d468]{padding-inline:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}:is(.list .active-columns,.list .available-columns) .title[data-v-1df2d468]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0));-webkit-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .title[data-v-1df2d468]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.list .active-columns,.list .available-columns) .column[data-v-1df2d468]{height:calc(var(--spacing,.25rem)*8);flex-direction:row;align-items:center;display:flex}:is(.list .active-columns,.list .available-columns) .column .checkbox-container[data-v-1df2d468]{width:fit-content;padding-right:calc(var(--spacing,.25rem)*2)}:is(.list .active-columns,.list .available-columns) .column .label[data-v-1df2d468]{text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));-webkit-user-select:none;user-select:none;overflow:hidden}:is(.list .active-columns,.list .available-columns) .column .label[data-v-1df2d468]:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.list .active-columns,.list .available-columns) .column .drag-handle[data-v-1df2d468]{cursor:grab;padding-left:calc(var(--spacing,.25rem)*2);margin-left:auto}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-1df2d468]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-1df2d468]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.list .active-columns .title[data-v-1df2d468]{padding-bottom:calc(var(--spacing,.25rem)*1.5)}.list .active-columns .column.dragging[data-v-1df2d468]{visibility:hidden}.list .available-columns .title[data-v-1df2d468]{padding-block:calc(var(--spacing,.25rem)*1.5)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-7c06f908],[data-v-7c06f908]:before,[data-v-7c06f908]:after,[data-v-7c06f908]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-7c06f908]{top:var(--fd8fa1c8);display:table-header-group}.table-head .select-column[data-v-7c06f908],.table-head .action-column[data-v-7c06f908]{z-index:2}.table-head .header[data-v-7c06f908]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media (hover:hover){.table-head .header[data-v-7c06f908]:hover{cursor:pointer}}.table-head .header.active[data-v-7c06f908]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-7c06f908]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-7c06f908]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-7c06f908],.table-head .header .sort-icon.right[data-v-7c06f908]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-7c06f908]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-7c06f908]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-7c06f908],.table-head .header .sort-icon.active[data-v-7c06f908]{display:block}.table-head[data-v-7c06f908] .column-configurator{margin-left:auto}.table-head .filters[data-v-7c06f908]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-7c06f908]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-7c06f908]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-7c06f908]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-7c06f908]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-7c06f908],.action-column[data-v-7c06f908]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-7c06f908]:after,.action-column.overlap[data-v-7c06f908]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));--tw-gradient-to:transparent;opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-7c06f908]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.select-column.overlap[data-v-7c06f908]:after{--tw-gradient-position:to right in oklab}}.select-column.overlap[data-v-7c06f908]:after{background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-7c06f908]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left}@supports (background-image:linear-gradient(in lab,red,red)){.action-column.overlap[data-v-7c06f908]:before{--tw-gradient-position:to left in oklab}}.action-column.overlap[data-v-7c06f908]:before{background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-7c06f908]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-7c06f908]{cursor:pointer}tbody tr.clickable[data-v-7c06f908]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20%,#fafafa 80%,#fff 95%)}tbody tr.clickable[data-v-7c06f908]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20%,#32394c 80%,#0f172a 95%)}tbody tr.selected[data-v-7c06f908]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20%,#f0f6ff 80%,#fff 95%)}tbody tr.selected[data-v-7c06f908]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20%,#262c3e 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-7c06f908],tbody tr.selectable td[data-v-7c06f908]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-7c06f908],tbody tr:not(.selectable) td[data-v-7c06f908]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.table-footer[data-v-7c06f908]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*1);flex-wrap:wrap;justify-content:space-between;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-7c06f908]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .current-page-info[data-v-7c06f908]{align-items:center;row-gap:calc(var(--spacing,.25rem)*2);color:var(--color-neutral-950,oklch(14.5% 0 0));flex-wrap:wrap;flex-grow:1;display:flex}.table-footer .current-page-info[data-v-7c06f908]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .current-page-info .total-results[data-v-7c06f908]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-footer .current-page-info .total-results span[data-v-7c06f908]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.table-footer .current-page-info .page-selector[data-v-7c06f908]{flex-wrap:wrap;flex-grow:1;align-items:center;display:none}@media (min-width:48rem){.table-footer .current-page-info .page-selector[data-v-7c06f908]{display:flex}}.table-footer .current-page-info .page-selector[data-v-7c06f908] .base-select{width:100%;max-width:calc(var(--spacing,.25rem)*24)}.table-footer .current-page-info .page-selector .per-page[data-v-7c06f908]{margin-left:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.table-footer .current-page-info .page-selector .per-page[data-v-7c06f908]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.table-footer .pagination[data-v-7c06f908]{padding-block:calc(var(--spacing,.25rem)*4);margin-left:auto}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5b94dd63],[data-v-5b94dd63]:before,[data-v-5b94dd63]:after,[data-v-5b94dd63]::backdrop{--tw-font-weight:initial;--tw-border-style:solid;--tw-duration:initial;--tw-ease:initial}}}.summary-group[data-v-5b94dd63]{padding-block:calc(var(--spacing,.25rem)*2)}.summary-group .header[data-v-5b94dd63]{justify-content:space-between;align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.summary-group .header.expandable[data-v-5b94dd63]{cursor:pointer}.summary-group .header .name[data-v-5b94dd63]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-group .header[data-v-5b94dd63] .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.summary-group .items[data-v-5b94dd63]{gap:calc(var(--spacing,.25rem)*2);border-left-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);padding-left:calc(var(--spacing,.25rem)*4);border-left-width:4px;flex-direction:column;animation:.3s fadeIn-5b94dd63;display:flex}.grow-enter-active[data-v-5b94dd63],.grow-leave-active[data-v-5b94dd63]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:.3s;transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1))}.grow-enter-from[data-v-5b94dd63],.grow-leave-to[data-v-5b94dd63]{height:calc(var(--spacing,.25rem)*0)!important;padding-block:calc(var(--spacing,.25rem)*0)!important;opacity:0!important}@keyframes fadeIn-5b94dd63{0%{opacity:0}to{opacity:1}}.summary-item[data-v-e9ecb151]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-item a[href][data-v-e9ecb151]:hover{text-decoration-line:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3468d776],[data-v-3468d776]:before,[data-v-3468d776]:after,[data-v-3468d776]::backdrop{--tw-font-weight:initial}}}.badge[data-v-3468d776]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-white,#fff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.badge.small[data-v-3468d776]{height:calc(var(--spacing,.25rem)*2);width:calc(var(--spacing,.25rem)*2)}.badge.small.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-.5);right:calc(var(--spacing,.25rem)*-.5)}.badge.blue[data-v-3468d776]{background-color:var(--color-blue-600,oklch(54.6% .245 262.881))}.badge.blue .pulse[data-v-3468d776]{background-color:var(--color-blue-400,oklch(70.7% .165 254.624))}.badge.green[data-v-3468d776]{background-color:var(--color-green-700,oklch(52.7% .154 150.069))}.badge.green .pulse[data-v-3468d776]{background-color:var(--color-green-400,oklch(79.2% .209 151.711))}.badge.gray[data-v-3468d776]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.badge.gray .pulse[data-v-3468d776]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.badge.orange[data-v-3468d776]{background-color:var(--color-orange-700,oklch(55.3% .195 38.402))}.badge.orange .pulse[data-v-3468d776]{background-color:var(--color-orange-400,oklch(75% .183 55.934))}.badge.purple[data-v-3468d776]{background-color:var(--color-purple-600,oklch(55.8% .288 302.321))}.badge.purple .pulse[data-v-3468d776]{background-color:var(--color-purple-400,oklch(71.4% .203 305.504))}.badge.red[data-v-3468d776]{background-color:var(--color-red-600,oklch(57.7% .245 27.325))}.badge.red .pulse[data-v-3468d776]{background-color:var(--color-red-400,oklch(70.4% .191 22.216))}.badge.yellow[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936));color:var(--color-gray-900,oklch(21% .034 264.665))}.badge.yellow .pulse[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936))}.badge.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-2);right:calc(var(--spacing,.25rem)*-3);position:absolute}.badge.pulsating .pulse[data-v-3468d776]{width:100%;height:100%;animation:var(--animate-ping,ping-3468d776 1s cubic-bezier(0,0,.2,1)infinite);opacity:.75;border-radius:3.40282e38px;position:absolute}.badge.pulsating .content[data-v-3468d776]{z-index:1}@keyframes ping-3468d776{75%,to{opacity:0;transform:scale(2)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-307971fb],[data-v-307971fb]:before,[data-v-307971fb]:after,[data-v-307971fb]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-content:"";--tw-border-style:solid;--tw-font-weight:initial}}}.menu-item[data-v-307971fb]{background-color:inherit;height:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));position:relative}.menu-item.title[data-v-307971fb]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.menu-item.title[data-v-307971fb]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu-item.simple[data-v-307971fb]{color:var(--color-primary,#2563eb)}.menu-item.simple[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.menu-item.simple[data-v-307971fb]:hover{text-decoration-line:underline}.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-6);width:calc(var(--spacing,.25rem)*6);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-content:"|";content:var(--tw-content);justify-content:center;align-items:center;display:flex;position:absolute;top:50%}@media (min-width:48rem){.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-12);width:calc(var(--spacing,.25rem)*12)}}.menu-item.disabled[data-v-307971fb],.menu-item[disabled][data-v-307971fb]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#9ca3af)}.menu-item .menu-item-content[data-v-307971fb]{align-items:center;column-gap:calc(var(--spacing,.25rem)*3);height:100%;color:var(--b87525ea);display:flex}.menu-item .menu-item-content .mini-icon[data-v-307971fb]{color:var(--b87525ea)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb],.menu-item .menu-item-content .append-icon[data-v-307971fb],.menu-item .menu-item-content .count[data-v-307971fb],.menu-item .menu-item-content .hotkey[data-v-307971fb]{margin-left:auto}.menu-item .menu-item-content .count[data-v-307971fb]{border-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-width:1px;border-radius:3.40282e38px}.menu-item .menu-item-content .count[data-v-307971fb]:where(.dark,.dark *){border-color:var(--color-neutral-400,oklch(70.8% 0 0))}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);color:var(--color-primary,#2563eb);margin-left:auto}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-24bbe7f3],[data-v-24bbe7f3]:before,[data-v-24bbe7f3]:after,[data-v-24bbe7f3]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.menu[data-v-24bbe7f3]{align-items:center;display:flex}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple){gap:calc(var(--spacing,.25rem)*6);height:100%}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item{border-bottom-style:var(--tw-border-style);color:var(--color-gray-500,oklch(55.1% .027 264.364));background-color:#0000;border-color:#0000;border-bottom-width:.1875rem}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item:not(.current):hover,.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item:not(.current):focus){border-color:var(--color-border-primary-hover,#9ca3af)}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .menu-item .menu-item-content{--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .current{border-color:var(--color-primary,#2563eb)}.menu[data-v-24bbe7f3]:not(.vertical):not(.simple) .current:where(.dark,.dark *){border-color:var(--color-blue-400,oklch(70.7% .165 254.624));color:var(--color-blue-400,oklch(70.7% .165 254.624))!important}.menu.vertical[data-v-24bbe7f3]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*1);background-color:inherit;flex-direction:column}.menu.vertical .item-vertical[data-v-24bbe7f3]{border-radius:var(--radius-lg,.5rem);--tw-border-style:none;width:100%;padding:calc(var(--spacing,.25rem)*2);border-style:none}.menu.vertical .item-vertical[data-v-24bbe7f3]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):hover{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):focus{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .item-vertical[data-v-24bbe7f3]:not(.current):not(.title):focus:where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.menu.vertical[data-v-24bbe7f3] .divider{margin-block:.3125rem}.menu.vertical .current[data-v-24bbe7f3]{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .current[data-v-24bbe7f3]:where(.dark,.dark *){background-color:var(--color-tertiary,#eff6ff)}.menu.simple[data-v-24bbe7f3]{justify-content:center;gap:calc(var(--spacing,.25rem)*6);flex-wrap:wrap}@media (min-width:48rem){.menu.simple[data-v-24bbe7f3]{gap:calc(var(--spacing,.25rem)*12)}}.menu.mini[data-v-24bbe7f3] .count{display:none}.menu[data-v-24bbe7f3] .current{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)!important}.menu[data-v-24bbe7f3] .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}.menu[data-v-24bbe7f3] .current .icon{color:var(--color-primary,#2563eb)}.sub-menu[data-v-24bbe7f3]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);width:16.5rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-50dad6b8],[data-v-50dad6b8]:before,[data-v-50dad6b8]:after,[data-v-50dad6b8]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.dropdown[data-v-50dad6b8]{position:relative}.dropdown .menu[data-v-50dad6b8]{border-radius:var(--radius-md,.375rem);background-color:var(--color-child,#fff);padding:calc(var(--spacing,.25rem)*1);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-7013d362],[data-v-7013d362]:before,[data-v-7013d362]:after,[data-v-7013d362]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.action-button[data-v-7013d362]{margin:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14);cursor:pointer;--tw-border-style:none;background-color:var(--color-primary,#2563eb);padding:calc(var(--spacing,.25rem)*0);--tw-outline-style:none;border-style:none;border-radius:3.40282e38px;outline-style:none;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (forced-colors:active){.action-button[data-v-7013d362]{outline-offset:2px;outline:2px solid #0000}}.action-button[data-v-7013d362]{-webkit-user-select:none;user-select:none}@media (hover:hover){.action-button[data-v-7013d362]:hover{background-color:var(--color-primary-hover,#1d4ed8)}}.action-button[data-v-7013d362]:focus{background-color:var(--color-primary-light,#3b82f6)}.action-button[data-v-7013d362]:active{background-color:var(--color-primary-pressed,#1e40af)}.action-button[disabled][data-v-7013d362]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6)}.action-button[disabled] .icon[data-v-7013d362]{color:var(--color-disabled-text,#9ca3af)}.action-button.floating[data-v-7013d362]{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);z-index:50;margin-right:calc(var(--spacing,.25rem)*6);margin-bottom:calc(var(--spacing,.25rem)*6);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:fixed}.action-button .icon[data-v-7013d362]{color:var(--color-white,#fff)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-2e571008],[data-v-2e571008]:before,[data-v-2e571008]:after,[data-v-2e571008]::backdrop{--tw-font-weight:initial}}}.copy-button[data-v-2e571008]{align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-tertiary,#eff6ff);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);flex-direction:row;display:inline-flex}@media (hover:hover){.copy-button[data-v-2e571008]:hover{background-color:var(--color-tertiary-hover,#dbeafe)}}.copy-button[data-v-2e571008]:active{background-color:var(--color-tertiary-pressed,#bfdbfe)}.copy-button .micro-icon[data-v-2e571008] svg{stroke-width:2px}.check-icon[data-v-2e571008]{color:var(--color-green-600,oklch(62.7% .194 149.214))}.copy-icon-button[data-v-2e571008]{width:fit-content;border-radius:var(--radius-lg,.5rem)!important}.copy-icon-button.small[data-v-2e571008]{height:calc(var(--spacing,.25rem)*8);padding-inline:calc(var(--spacing,.25rem)*2)}.copy-icon-button.small .micro-icon[data-v-2e571008] svg{stroke-width:2px}.copy-icon-button.medium[data-v-2e571008]{height:calc(var(--spacing,.25rem)*10);padding-inline:calc(var(--spacing,.25rem)*2.5)}.copy-icon-button.medium .mini-icon[data-v-2e571008]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.copy-icon-button.large[data-v-2e571008]{height:calc(var(--spacing,.25rem)*12);padding-inline:calc(var(--spacing,.25rem)*3)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-92b3affe],[data-v-92b3affe]:before,[data-v-92b3affe]:after,[data-v-92b3affe]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.active[data-v-92b3affe]:not(.button-segment) .mini-icon:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment[data-v-92b3affe]{z-index:10;overflow-wrap:break-word}@media screen and (max-width:640px){.segment[data-v-92b3affe]{word-break:break-all}}.segment:not(.button-segment).active[data-v-92b3affe]{color:var(--color-primary,#2563eb)}.segment:not(.button-segment).active[data-v-92b3affe]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment.button-segment[data-v-92b3affe]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}.segment.button-segment.active[data-v-92b3affe]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb);padding-inline:.6875rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1bf35dd7],[data-v-1bf35dd7]:before,[data-v-1bf35dd7]:after,[data-v-1bf35dd7]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}.segmented-control.default[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-100,oklch(97% 0 0));padding:calc(var(--spacing,.25rem)*1);grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;display:grid;position:relative}.segmented-control.default[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.segmented-control.default .highlight[data-v-1bf35dd7]{pointer-events:none;inset-inline-start:calc(var(--spacing,.25rem)*1);top:calc(var(--spacing,.25rem)*1);bottom:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);--tw-duration:.2s;transition-duration:.2s;position:absolute;margin-inline-start:calc(var(--spacing,.25rem)*0)!important}.segmented-control.default .highlight[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.segmented-control.buttons[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:row;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-29e39519],[data-v-29e39519]:before,[data-v-29e39519]:after,[data-v-29e39519]::backdrop{--tw-border-style:solid;--tw-duration:initial;--tw-ease:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.switch[data-v-29e39519]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*11);cursor:pointer;border-style:var(--tw-border-style);background-color:var(--color-neutral-200,oklch(92.2% 0 0));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.2s;--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:.2s;transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1));border-width:2px;border-color:#0000;border-radius:3.40282e38px;flex-shrink:0;display:inline-flex;position:relative}.switch[data-v-29e39519]:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);--tw-ring-color:var(--color-primary,#2563eb);--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.switch[data-v-29e39519]:focus{outline-offset:2px;outline:2px solid #0000}}.switch[data-v-29e39519]:where(.dark,.dark *){background-color:var(--color-input-bg,#fff);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-slate-700,oklch(37.2% .044 257.287))}.switch.enabled[data-v-29e39519]{background-color:var(--color-primary-light,#3b82f6)}.switch[data-v-29e39519]:disabled{cursor:not-allowed;--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.switch:disabled .dot[data-v-29e39519]{background-color:var(--color-neutral-400,oklch(70.8% 0 0))!important}.switch .dot[data-v-29e39519]{pointer-events:none;height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.2s;--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:.2s;transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1));border-radius:3.40282e38px;display:inline-block}.switch .dot[data-v-29e39519]:where(.dark,.dark *){background-color:var(--color-neutral-200,oklch(92.2% 0 0))}.switch .dot.enabled[data-v-29e39519]{--tw-translate-x:calc(var(--spacing,.25rem)*5);translate:var(--tw-translate-x)var(--tw-translate-y)}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}.theme-toggle[data-v-88cb7ead]{align-items:center;gap:calc(var(--spacing,.25rem)*2);display:flex}.accordion-item[data-v-3fc5173a]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media (min-width: 640px){.accordion-item[data-v-3fc5173a]{border-radius:1rem}}.accordion-item .header[data-v-3fc5173a]{width:100%;display:flex;align-items:center;padding:1rem;background-color:inherit;border:none}.accordion-item .header[data-v-3fc5173a]:focus{background-color:var(--color-secondary-hover)}@media (min-width: 640px){.accordion-item .header[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.accordion-item .header .state-indicator[data-v-3fc5173a]{margin-left:auto;padding-left:.5rem}.accordion-item .header .state-indicator .icon[data-v-3fc5173a]{color:var(--color-primary-light);transform:rotate(0);transition:transform .3s linear}.accordion-item .header .state-indicator.open[data-v-3fc5173a]{transform:rotate(180deg);padding-left:0;padding-right:.5rem}.accordion-item .header .title[data-v-3fc5173a],.accordion-item .header .title[data-v-3fc5173a-s]{text-align:left;font-weight:500;color:var(--color-body-text)}.accordion-item .content[data-v-3fc5173a]{padding-bottom:1.5rem;padding-top:0;padding-left:1rem;padding-right:1rem}@media (min-width: 640px){.accordion-item .content[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem}}.grow-enter-active[data-v-3fc5173a],.grow-leave-active[data-v-3fc5173a]{transition:all .3s ease-in-out}.fade-enter-active[data-v-3fc5173a],.fade-leave-active[data-v-3fc5173a]{transition:all .1s ease-in-out}.grow-enter-from[data-v-3fc5173a],.grow-leave-to[data-v-3fc5173a]{height:0!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-3fc5173a],.fade-leave-to[data-v-3fc5173a]{opacity:0;height:0!important}.accordion[data-v-25a8f65e]{display:flex;flex-direction:column;gap:.125rem}@media (min-width: 640px){.accordion[data-v-25a8f65e]{gap:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-d8273f08],[data-v-d8273f08]:before,[data-v-d8273f08]:after,[data-v-d8273f08]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.amount-input-container[data-v-d8273f08]{flex-direction:column;display:flex}.amount-input[data-v-d8273f08]{height:calc(var(--spacing,.25rem)*10);color:var(--color-body-text,#111827);display:flex}.amount-input.small[data-v-d8273f08]{height:calc(var(--spacing,.25rem)*8)}.amount-input.small .minus[data-v-d8273f08],.amount-input.small .plus[data-v-d8273f08]{width:calc(var(--spacing,.25rem)*8)}.input[data-v-d8273f08],.minus[data-v-d8273f08],.plus[data-v-d8273f08]{border-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-width:1px;border-color:var(--color-border-primary,#d1d5db)}.input[data-v-d8273f08]:disabled,.minus[data-v-d8273f08]:disabled,.plus[data-v-d8273f08]:disabled{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.input[data-v-d8273f08]:disabled{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.minus[data-v-d8273f08]:disabled,.plus[data-v-d8273f08]:disabled{color:var(--color-disabled-text,#9ca3af)}.minus[data-v-d8273f08]:hover:not(:disabled),.plus[data-v-d8273f08]:hover:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-hover,#fafafa)}.minus[data-v-d8273f08]:focus:not(:disabled),.plus[data-v-d8273f08]:focus:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-pressed,#e5e5e5)}.input[data-v-d8273f08]{z-index:10;width:calc(var(--spacing,.25rem)*14);background-color:var(--color-input-bg,#fff);text-align:center;--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-inline:-1px}.input[data-v-d8273f08]:hover:not(:disabled):not(.has-error){border-color:var(--color-border-primary-hover,#9ca3af)}.input[data-v-d8273f08]:focus:not(:disabled){border-style:var(--tw-border-style);--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-width:2px}.input[data-v-d8273f08]:focus-visible{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input[data-v-d8273f08]:focus-visible{outline-offset:2px;outline:2px solid #0000}}.input[data-v-d8273f08]:focus:not(:disabled):not(.has-error){border-color:var(--color-primary-light,#3b82f6)}.input.has-error[data-v-d8273f08],.input.has-error[data-v-d8273f08]:focus{border-color:var(--color-error-tertiary,#e73c3e)}.minus[data-v-d8273f08],.plus[data-v-d8273f08]{width:calc(var(--spacing,.25rem)*10);background-color:var(--color-input-bg,#fff);justify-content:center;align-items:center;display:flex}.minus[data-v-d8273f08]{border-top-left-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.plus[data-v-d8273f08]{border-top-right-radius:var(--radius-lg,.5rem);border-bottom-right-radius:var(--radius-lg,.5rem)}.input[data-v-d8273f08]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input[data-v-d8273f08]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-d8273f08]{-moz-appearance:textfield}.error[data-v-d8273f08]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.status[data-v-c0e73fbd]{background-color:var(--color-gray-100);height:1.5rem;width:1.5rem;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.dark .status[data-v-c0e73fbd]{background-color:var(--color-input-bg)}.status.done[data-v-c0e73fbd]{background-color:var(--color-green-100)}.dark .status.done[data-v-c0e73fbd]{background-color:var(--color-green-600)}.done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-600)}.dark .done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-100)}.status.attention[data-v-c0e73fbd]{background-color:var(--color-red-100)}.dark .status.attention[data-v-c0e73fbd]{background-color:var(--color-error-accent)}.attention .micro-icon[data-v-c0e73fbd]{color:var(--color-error-secondary)}.dark .attention .micro-icon[data-v-c0e73fbd]{color:var(--color-red-100)}.alert[data-v-e623b23f]{padding:1rem;border-radius:.5rem;display:flex}.alert.error[data-v-e623b23f]{background-color:var(--color-error-accent)}.alert.error .icon .mini-icon[data-v-e623b23f]{color:var(--color-error-tertiary)}.alert.error .content .title[data-v-e623b23f]{color:var(--color-error-primary)}.alert.error .content .description[data-v-e623b23f]{color:var(--color-error-secondary)}.alert.warning[data-v-e623b23f]{background-color:var(--color-warning-accent)}.alert.warning .icon .mini-icon[data-v-e623b23f]{color:var(--color-warning-tertiary)}.alert.warning .content .title[data-v-e623b23f]{color:var(--color-warning-primary)}.alert.warning .content .description[data-v-e623b23f]{color:var(--color-warning-secondary)}.alert.success[data-v-e623b23f]{background-color:var(--color-success-accent)}.alert.success .icon .mini-icon[data-v-e623b23f]{color:var(--color-success-tertiary)}.alert.success .content .title[data-v-e623b23f]{color:var(--color-success-primary)}.alert.success .content .description[data-v-e623b23f]{color:var(--color-success-secondary)}.alert.info[data-v-e623b23f]{background-color:var(--color-info-accent)}.alert.info .icon .mini-icon[data-v-e623b23f]{color:var(--color-info-tertiary)}.alert.info .content .title[data-v-e623b23f]{color:var(--color-info-primary)}.alert.info .content .description[data-v-e623b23f]{color:var(--color-info-secondary)}.alert .icon[data-v-e623b23f]{margin-right:.75rem}.alert .content[data-v-e623b23f]{display:flex;flex-direction:column;font-size:.875rem;line-height:1.25rem;justify-content:center;gap:.25rem}.alert .content .title[data-v-e623b23f]{font-weight:500}.configurator-step.simple[data-v-471a4096]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media (min-width: 640px){.configurator-step.simple[data-v-471a4096]{border-radius:1rem}}.configurator-step.simple .content[data-v-471a4096]{padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0}@media (min-width: 640px){.configurator-step.simple .content[data-v-471a4096]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header[data-v-471a4096]{display:flex;flex-wrap:wrap;width:100%;row-gap:1rem;align-items:flex-start;padding:1rem;background-color:inherit;border:none}@media (min-width: 640px){.configurator-step.simple .header[data-v-471a4096]{align-items:center;padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.configurator-step.simple .header .title[data-v-471a4096]{text-align:left;font-weight:500;color:var(--color-body-text)}@media (min-width: 640px){.configurator-step.simple .header .title[data-v-471a4096]{white-space:nowrap}}.configurator-step.simple .inner[data-v-471a4096]{display:flex;flex-direction:column;row-gap:1rem}@media (min-width: 640px){.configurator-step.simple .inner[data-v-471a4096]{flex-direction:row;align-items:center}}.configurator-step.simple .measurement-inputs[data-v-471a4096]{display:flex;gap:.625rem;align-items:center}.configurator-step.simple .measurement-inputs.has-errors[data-v-471a4096]{align-items:flex-start!important}.configurator-step.simple .measurement-inputs.has-errors .separator[data-v-471a4096]{margin-top:.5rem}.configurator-step.simple .total[data-v-471a4096]{margin-left:auto;flex-grow:1;color:var(--color-gray-500);width:29%;text-align:right}.dark :is(.configurator-step.simple .total)[data-v-471a4096]{color:var(--color-neutral-200)}.configurator-step.simple .status-text[data-v-471a4096]{color:var(--color-gray-400);width:100%;text-align:right}@media (min-width: 640px){.configurator-step.simple .status-text[data-v-471a4096]{text-align:left}}.dark :is(.configurator-step.simple .status-text)[data-v-471a4096]{color:var(--color-neutral-200)}.configurator-step.simple [data-v-471a4096] .input::-webkit-outer-spin-button,.configurator-step.simple [data-v-471a4096] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple [data-v-471a4096] .input[type=number]{-moz-appearance:textfield}.measurement-inputs[data-v-471a4096] .measurement-input{max-width:7rem;width:100%}.labels[data-v-fd61a9c2]{position:absolute;top:.75rem;right:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end;z-index:10}.dark .labels[data-v-fd61a9c2]{mix-blend-mode:exclusion}[data-v-fd61a9c2] .image{object-fit:cover;height:100%;width:100%}.amount[data-v-fd61a9c2]{display:flex;flex-direction:column;align-items:center;gap:.5rem;margin-top:2.75rem}.amount span[data-v-fd61a9c2]{font-size:.875rem;line-height:1.25rem}.information[data-v-45867763],.custom-value[data-v-45867763]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;line-height:1rem}.custom-value[data-v-45867763]{gap:1rem}.custom-value[data-v-45867763] .input-container,.custom-value[data-v-45867763] .button{max-width:7.25rem;width:100%}.information .delivery[data-v-45867763]{color:var(--color-green-700);display:flex;gap:.25rem;align-items:center}.dark .information .delivery[data-v-45867763]{color:var(--color-green-500)}.information .delivery .icon[data-v-45867763]{height:1rem;width:1rem;color:var(--color-green-700)}.dark .information .delivery .icon[data-v-45867763]{color:var(--color-green-500)}.information .delivery .icon[data-v-45867763] svg{stroke-width:2}.information .delivery .delivery-time[data-v-45867763]{font-weight:500}.information .price[data-v-45867763]{color:var(--color-red-600);margin-left:auto}.dark .information .price[data-v-45867763]{color:var(--color-red-400)}.price .price-per[data-v-45867763]{color:var(--color-gray-500)}.dark .price .price-per[data-v-45867763]{color:var(--color-body-text)}.not-available[data-v-45867763]{color:var(--color-error-secondary);display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem}.dark .not-available[data-v-45867763]{color:var(--color-error-tertiary)}.option-card[data-v-fd9655d4]{outline:1px solid var(--color-gray-300);border-radius:.5rem;width:17.5rem;cursor:pointer;background-color:var(--color-child-alt);min-height:16.5rem;display:flex;justify-content:center;overflow:hidden}.option-card[data-v-fd9655d4]:hover,.option-card[data-v-fd9655d4]:focus{box-shadow:var(--shadow)}.option-card[data-v-fd9655d4]:focus:not(.selected):not(.disabled){outline:3px dotted var(--color-blue-500)}.option-card.selected[data-v-fd9655d4]{outline:3px solid var(--color-blue-600)!important}.option-card.disabled[data-v-fd9655d4]{border-color:var(--color-gray-300);background-color:var(--color-disabled);cursor:default}.option-card.disabled[data-v-fd9655d4]:hover{box-shadow:none}.option-card.disabled .content[data-v-fd9655d4] *{color:var(--color-disabled-text)!important}.option-card.disabled .header[data-v-fd9655d4],.option-card.disabled .content[data-v-fd9655d4]{filter:grayscale(100%)}.option-card .inner[data-v-fd9655d4]{width:100%}.no-option[data-v-fd9655d4]{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center}.no-option[data-v-fd9655d4] .icon{color:var(--color-gray-400);height:3.5rem;width:3.5rem;margin-bottom:1rem}.no-option h3[data-v-fd9655d4]{font-size:.875rem;line-height:1.25rem}.header[data-v-fd9655d4]{height:10.25rem;width:100%;background-color:var(--color-gray-100);position:relative;border-radius:.5rem .5rem 0 0;display:flex;justify-content:center}.option-card .content[data-v-fd9655d4]{padding:1rem 1rem .75rem}.content .title[data-v-fd9655d4]{font-weight:500;padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem}.content .description[data-v-fd9655d4]{font-size:.75rem;line-height:1rem;color:var(--color-gray-500)}.option-card .footer[data-v-fd9655d4]{padding:1rem;padding-top:0;font-size:.875rem;line-height:1.25rem}.dark .option-card[data-v-fd9655d4]{outline-color:transparent}.dark .option-card[data-v-fd9655d4]:hover{background-color:var(--color-secondary)}.dark .header[data-v-fd9655d4]{background-color:var(--color-child-alt)}.dark .content .title[data-v-fd9655d4]{color:var(--color-gray-200)}.dark .content .description[data-v-fd9655d4]{color:var(--color-gray-300)}.overlay[data-v-c9f7fd0c]{pointer-events:auto;top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:10;width:100%;height:100%;position:absolute}.overlay.fixed[data-v-c9f7fd0c]{z-index:1000;position:fixed!important}.configurator-step.options[data-v-a00d5e2f] .content{padding-right:0}@media (min-width: 640px){.configurator-step.options[data-v-a00d5e2f] .content{padding-right:1.5rem}}.configurator-step.options[data-v-a00d5e2f] .header .state-indicator{display:none}@media (min-width: 640px){.configurator-step.options[data-v-a00d5e2f] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-a00d5e2f]{display:flex;gap:1rem;overflow-x:scroll;padding:.25rem}@media (min-width: 640px){.configurator-step.options .option-container[data-v-a00d5e2f]{overflow:visible;padding-left:0;padding-right:0}}.option-container .option[data-v-a00d5e2f]{position:relative;display:flex;min-width:auto}@media (min-width: 640px){.option-container.show-all[data-v-a00d5e2f]{flex-wrap:wrap}.option-container .option[data-v-a00d5e2f]{min-width:0}.option-container .option[data-v-a00d5e2f]:last-child{margin-right:0}}.option-container .option[data-v-a00d5e2f]:last-child{margin-right:1rem}.option.hide[data-v-a00d5e2f]{display:flex}@media (min-width: 640px){.option.hide[data-v-a00d5e2f]{display:none}}.option .option-card[data-v-a00d5e2f]{flex-shrink:0}@media (min-width: 640px){.option .option-card[data-v-a00d5e2f]{flex-shrink:1}}.option-container .overlay[data-v-a00d5e2f]{position:absolute;right:0;bottom:0;width:100%;height:100%;border-radius:.5rem;display:none;align-items:center;justify-content:center;color:#fff;font-size:2.25rem;cursor:pointer}@media (min-width: 640px){.option-container .overlay[data-v-a00d5e2f]{display:flex}}.configurator-step.options .subtitle[data-v-a00d5e2f]{color:var(--color-gry-700)}.dark .configurator-step.options .subtitle[data-v-a00d5e2f]{color:var(--color-neutral-200)}.configurator-step.options .alert[data-v-a00d5e2f]{margin-top:1rem;margin-right:1rem}@media (min-width: 640px){.configurator-step.options .alert[data-v-a00d5e2f]{margin-right:0}}.delivery-options[data-v-12d62f2c]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;padding:1rem;margin-top:.125rem}@media (min-width: 640px){.delivery-options[data-v-12d62f2c]{border-radius:1rem;margin-top:.5rem}}@media (min-width: 768px){.delivery-options[data-v-12d62f2c]{padding:1.5rem}}.header[data-v-12d62f2c]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-12d62f2c]{font-weight:500;color:var(--color-body-text)}.header .hint[data-v-12d62f2c]{color:#6b7280;display:none}@media (min-width: 768px){.header .hint[data-v-12d62f2c]{display:flex}}.dark :is(.header .hint)[data-v-12d62f2c]{color:#e5e7eb}.content[data-v-12d62f2c]{display:flex;flex-direction:column;gap:1rem;flex-wrap:wrap}@media (min-width: 768px){.content[data-v-12d62f2c]{flex-direction:row;gap:1.5rem}}.content .option[data-v-12d62f2c]{display:flex;flex-direction:column;position:relative}.content .option[data-v-12d62f2c]:not(.last){border-bottom:1px solid var(--color-gray-200);padding-bottom:1rem}@media (min-width: 768px){.content .option[data-v-12d62f2c]:not(.last){border-bottom:none;padding-bottom:0}}@media (min-width: 768px){.content .option[data-v-12d62f2c]:not(:first-child){border-left:1px solid var(--color-gray-200);padding-left:1.0625rem}}.content .option.hide[data-v-12d62f2c]{display:none}.content .option .day[data-v-12d62f2c],.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{font-size:.875rem;line-height:1.25rem}.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:absolute;top:0;right:0}@media (min-width: 768px){.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:relative}}.content .option .day[data-v-12d62f2c]{margin-bottom:.25rem;color:var(--color-gray-700);text-transform:capitalize;display:flex;flex-wrap:wrap;gap:.25rem .5rem;align-items:center}.dark :is(.content .option .day)[data-v-12d62f2c]{color:#e5e7eb}.content .option .date[data-v-12d62f2c]{font-weight:500;font-size:1.25rem;line-height:1.75rem;color:var(--color-body-text)}@media (min-width: 768px){.content .option .date[data-v-12d62f2c]{margin-bottom:.75rem}}.content .option .cost[data-v-12d62f2c]{color:var(--color-green-700)}.dark :is(.content .option .cost)[data-v-12d62f2c]{color:var(--color-green-500)}.content .option .no-cost[data-v-12d62f2c]{color:var(--color-gray-500)}.dark :is(.content .option .no-cost)[data-v-12d62f2c]{color:var(--color-gray-50)}.content .button[data-v-12d62f2c]{display:block}@media (min-width: 768px){.content .button[data-v-12d62f2c]{display:none}}.dark .button.tertiary[data-v-12d62f2c]{background-color:var(--color-parent-bg)}.configurator[data-v-57804b08] .configurator-step .header{overflow:hidden}.configurator[data-v-57804b08] .configurator-step .header .title{width:100%;margin-right:.5rem;text-overflow:ellipsis;overflow:hidden}@media (min-width: 640px){.configurator[data-v-57804b08] .configurator-step .header .title{max-width:16rem;width:16rem;white-space:nowrap}}.configurator[data-v-57804b08] .configurator-step .status{margin-right:1rem}.configurator-step[data-v-57804b08] .subtitle{margin-left:auto;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:right}@media (min-width: 640px){.configurator-step[data-v-57804b08] .subtitle{margin-left:0}}.loader[data-v-57804b08]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-e55e085f] .icon{color:var(--color-blue-500,oklch(62.3% .214 259.815))}@keyframes minimizedAnimation-2c5c7bb0{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-2c5c7bb0{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-2c5c7bb0{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.dark .modal[data-v-2c5c7bb0]{color:var(--color-body-text)}.modal[data-v-2c5c7bb0]{width:100%;max-width:48rem;border-radius:1.5rem;overflow:hidden;transform:translateY(2.5rem);transition:all .5s ease-in-out;opacity:0;box-shadow:0 0 0 100vmax #0a0a0a80;background-color:var(--color-parent-bg);margin:auto}@media (prefers-reduced-motion){.modal[data-v-2c5c7bb0]{transition:none}}.modal[data-v-2c5c7bb0]::backdrop{background-color:transparent}.modal.open[data-v-2c5c7bb0]{transform:translateY(0);opacity:1;display:block}.modal.minimized[data-v-2c5c7bb0]{width:100%;margin-bottom:1.25rem;border:1px solid #e5e7eb;animation:minimizedAnimation-2c5c7bb0 1.3s forwards}@media (prefers-reduced-motion){.modal.minimized[data-v-2c5c7bb0]{animation:none}}.modal.minimized .inner[data-v-2c5c7bb0]{overflow-y:hidden}.modal.minimized .inner .header[data-v-2c5c7bb0]{padding:1rem;overflow-y:hidden}.modal.minimized .inner .header .title[data-v-2c5c7bb0-s]{margin-top:1rem;font-size:1rem;line-height:1.5rem}.modal.maximized[data-v-2c5c7bb0]{animation:maximizedAnimation-2c5c7bb0 1.3s forwards}@media (prefers-reduced-motion){.modal.maximized[data-v-2c5c7bb0]{animation:none}}.modal.fullscreen .inner[data-v-2c5c7bb0]{height:100%;min-height:0;overflow-y:auto}.modal.fullscreen .inner .header[data-v-2c5c7bb0]{padding:2rem 1rem;border-top-left-radius:1rem;border-top-right-radius:1rem;justify-content:flex-start}.modal.fullscreen .inner .content[data-v-2c5c7bb0]{padding:0 0 .5rem}.modal.fullscreen .inner .footer[data-v-2c5c7bb0]{margin-top:auto;box-shadow:0 10px 15px #0000001a}@media screen and (min-width: 640px){.modal.fullscreen .inner .footer[data-v-2c5c7bb0]{margin-inline:5.75rem;border-radius:1rem;margin-bottom:1.25rem}}.modal.fullscreen:not(.minimized)[data-v-2c5c7bb0]{height:calc(100vh - 3.5rem);margin-top:3.5rem;max-width:100%;overflow:visible;border-bottom-left-radius:0;border-bottom-right-radius:0}@media screen and (min-width: 640px){.modal.fullscreen:not(.minimized) .header[data-v-2c5c7bb0],.modal.fullscreen:not(.minimized) .content[data-v-2c5c7bb0]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen:not(.minimized)[data-v-2c5c7bb0]:modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-2c5c7bb0]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-2c5c7bb0]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-2c5c7bb0]{width:100%;background-color:#f9fafb}.modal:not(.fullscreen) .footer.footer-shadow[data-v-2c5c7bb0]{filter:drop-shadow(0 -1px 2px rgba(0,0,0,.1)) drop-shadow(0 -1px 1px rgba(0,0,0,.06))}.dark :is(.modal:not(.fullscreen) .footer)[data-v-2c5c7bb0]{background-color:var(--color-child)}.modal.persistent-animation[data-v-2c5c7bb0]{animation:horizontal-shaking-2c5c7bb0 .3s ease-in-out}.modal .actions[data-v-2c5c7bb0]{position:absolute;top:-3.5rem;width:100%;height:3.5rem;display:flex;justify-content:flex-end;align-items:center;padding:0 .5625rem}.modal .actions .minimize[data-v-2c5c7bb0],.modal .actions .close[data-v-2c5c7bb0]{font-size:.875rem;line-height:1.25rem;padding:0 .9375rem;color:#fff}.modal .inner[data-v-2c5c7bb0]{display:flex;flex-direction:column;min-height:fit-content}.modal .inner .header[data-v-2c5c7bb0]{display:flex;align-items:center;background-color:var(--color-parent-bg)}.modal .inner .header.header-shadow[data-v-2c5c7bb0]{filter:drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))}.modal .inner .header>.close[data-v-2c5c7bb0]{margin-left:auto}.modal .inner .header>.close[data-v-2c5c7bb0]:focus-visible{background-color:var(--color-secondary-hover)}.modal .inner .header .minimized-actions[data-v-2c5c7bb0]{display:flex;flex-direction:column;gap:.5rem;margin-left:auto}.modal .inner .title[data-v-2c5c7bb0],.modal .inner .title[data-v-2c5c7bb0-s]{font-weight:700;font-size:1.25rem}.modal .inner .content[data-v-2c5c7bb0]{padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem;overflow-y:auto}.modal .inner .content .loader[data-v-2c5c7bb0]{margin:0 auto;width:2.5rem;height:2.5rem}.modal .inner .footer[data-v-2c5c7bb0]{display:flex;gap:.5rem;justify-content:center;padding:1.5rem 1rem;z-index:10;background-color:var(--color-child)}.dark :is(.modal .inner .footer)[data-v-2c5c7bb0]{background-color:var(--color-child)}[data-v-fb5e0d55] .header{display:flex;flex-wrap:wrap;gap:0}@media (min-width: 640px){[data-v-fb5e0d55] .header{gap:1.5rem}}.header .product-image[data-v-fb5e0d55]{height:auto;width:4.75rem!important}@media (min-width: 640px){.header .product-image[data-v-fb5e0d55]{width:8.5rem!important}}.header .product-image .image[data-v-fb5e0d55]{height:4.75rem;width:4.75rem}@media (min-width: 640px){.header .product-image .image[data-v-fb5e0d55]{width:8.5rem!important}}.header .title[data-v-fb5e0d55]{margin-bottom:.5rem}.header .subtitle[data-v-fb5e0d55]{display:flex;gap:.625rem;color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem;margin-bottom:1rem}.dark :is(.header .subtitle)[data-v-fb5e0d55]{color:var(--color-gray-300)}.header .subtitle .icon[data-v-fb5e0d55]{color:var(--color-green-500)}.header .reference[data-v-fb5e0d55]{color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem}.header .reference .value[data-v-fb5e0d55]{color:var(--color-gray-900)}.header .inner[data-v-fb5e0d55]{flex-shrink:1;max-width:calc(100% - 4.75rem)}@media (min-width: 640px){.header .inner[data-v-fb5e0d55]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-fb5e0d55]{display:none;max-width:30rem}@media (min-width: 640px){.header .inner .reference-input[data-v-fb5e0d55]{display:flex}}.header>.reference-input[data-v-fb5e0d55]{display:block;width:100%}@media (min-width: 640px){.header>.reference-input[data-v-fb5e0d55]{display:none}}.footer-wrapper[data-v-fb5e0d55]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:.5rem;flex-wrap:wrap}.footer-wrapper .specifications[data-v-fb5e0d55]{display:none}@media (min-width: 640px){.footer-wrapper .specifications[data-v-fb5e0d55]{display:flex;width:100%}}@media (min-width: 1024px){.footer-wrapper .specifications[data-v-fb5e0d55]{width:auto}}.footer-wrapper .right[data-v-fb5e0d55]{display:flex;gap:1.25rem;align-items:center;justify-content:space-between;width:100%;margin-left:auto}@media (min-width: 1024px){.footer-wrapper .right[data-v-fb5e0d55]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-fb5e0d55]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-fb5e0d55]{display:none}@media (min-width: 768px){.footer-wrapper .right .add-to-cart .desktop[data-v-fb5e0d55]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-fb5e0d55]{display:flex}@media (min-width: 768px){.footer-wrapper .right .add-to-cart .mobile[data-v-fb5e0d55]{display:none}}.footer-wrapper .right .sub-total[data-v-fb5e0d55]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-fb5e0d55]{color:var(--color-gray-500);font-size:.75rem;line-height:1.2rem!important;max-width:250px;width:100%;display:flex;gap:.5rem;flex-wrap:wrap}@media (min-width: 640px){.footer-wrapper .right .sub-total .sub-price[data-v-fb5e0d55]{font-size:.875rem;line-height:1.25rem}}.dark :is(.footer-wrapper .right .sub-total .sub-price)[data-v-fb5e0d55]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-fb5e0d55],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-fb5e0d55]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-fb5e0d55]{color:var(--color-gray-700);font-size:.75rem;line-height:1rem}.dark :is(.footer-wrapper .right .sub-total .excluded-from-price)[data-v-fb5e0d55]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .price[data-v-fb5e0d55]{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:var(--color-red-500);display:flex;width:100%}@media (min-width: 1024px){.footer-wrapper .right .sub-total .price[data-v-fb5e0d55]{justify-content:flex-end}}.dark :is(.footer-wrapper .right .sub-total .price)[data-v-fb5e0d55]{color:var(--color-red-400)}.footer-wrapper .right .sub-total .price .label[data-v-fb5e0d55]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-fb5e0d55]{top:-.3em;font-size:1rem;position:relative}.footer-wrapper .right .sub-total .price.small[data-v-fb5e0d55]{font-size:1rem;line-height:1.5rem}@media (min-width: 640px){.footer-wrapper .right .sub-total .price.small[data-v-fb5e0d55]{font-size:1.5rem}}.footer-wrapper .right .sub-total .price.small .decimal[data-v-fb5e0d55]{font-size:.75rem;top:-.4em}.confirm-modal[data-v-6b257f82]{max-width:var(--container-lg,32rem)}.confirm-modal .indicator-icon[data-v-6b257f82]{width:fit-content;padding:calc(var(--spacing,.25rem)*3);border-radius:3.40282e38px;margin-inline:auto}.confirm-modal .indicator-icon.danger[data-v-6b257f82]{background-color:var(--color-error-accent,#fef2f2);color:var(--color-error-secondary,#d52d2f)}.confirm-modal .indicator-icon.info[data-v-6b257f82]{background-color:var(--color-info-accent,#eff6ff);color:var(--color-info-tertiary,#3b82f6)}.confirm-modal .indicator-icon .icon[data-v-6b257f82]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.confirm-modal .title[data-v-6b257f82]{margin-top:calc(var(--spacing,.25rem)*4);text-align:center;margin-bottom:calc(var(--spacing,.25rem)*3)!important}.confirm-modal .message[data-v-6b257f82]{text-align:center}.confirm-modal[data-v-6b257f82] .content{padding-inline:calc(var(--spacing,.25rem)*8)!important}.virtual-scroll-container[data-v-6169c6a9]{width:100%;height:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-6169c6a9]{flex-direction:column;display:flex}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-39166481],[data-v-39166481]:before,[data-v-39166481]:after,[data-v-39166481]::backdrop{--tw-outline-style:solid;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.filter-bar-container[data-v-39166481]{width:fit-content;position:relative}.filter-bar-container .filter-bar[data-v-39166481]:hover:has(.button:hover){background-color:var(--color-secondary,#fff)}.filter-bar-container .filter-bar .label-container[data-v-39166481]{margin-right:calc(var(--spacing,.25rem)*8);margin-left:.5625rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]{white-space:nowrap;outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-white,#fff);overflow:hidden}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-2)}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:last-child){max-width:calc(var(--spacing,.25rem)*10)}.filter-bar-container .filter-bar .label-container .label[data-v-39166481]{border-radius:var(--radius-lg,.5rem)}.filter-bar-container .clear[data-v-39166481]{top:50%;right:calc(var(--spacing,.25rem)*2);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);position:absolute}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-b5c5a85d],[data-v-b5c5a85d]:before,[data-v-b5c5a85d]:after,[data-v-b5c5a85d]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.overlay[data-v-b5c5a85d]{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:60;width:100%;height:100%;position:fixed}.overlay.pointer-events[data-v-b5c5a85d]{pointer-events:none!important}.overlay.left .drawer[data-v-b5c5a85d]{left:calc(var(--spacing,.25rem)*0)}.overlay.right .drawer[data-v-b5c5a85d]{right:calc(var(--spacing,.25rem)*0)}.overlay.bottom .drawer[data-v-b5c5a85d]{bottom:calc(var(--spacing,.25rem)*0);border-top-left-radius:var(--radius-xl,.75rem);border-top-right-radius:var(--radius-xl,.75rem);width:100%;height:auto;max-width:100%!important}.overlay.bottom .drawer .header[data-v-b5c5a85d],.overlay.bottom .drawer .content[data-v-b5c5a85d]{padding:calc(var(--spacing,.25rem)*4)}.overlay.bottom .drawer .content[data-v-b5c5a85d]{padding-top:calc(var(--spacing,.25rem)*0)}.overlay .drawer[data-v-b5c5a85d]{background-color:var(--color-parent-bg,#fff);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);width:fit-content;max-width:80%;height:100%;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;transition-duration:.3s;position:absolute}.overlay .drawer.fullWidth[data-v-b5c5a85d]{width:100%}.overlay .drawer.pointer-events[data-v-b5c5a85d]{pointer-events:auto}.overlay .drawer .wrapper[data-v-b5c5a85d]{flex-direction:column;height:100%;display:flex;position:relative;overflow:hidden}.overlay .drawer .header[data-v-b5c5a85d]{justify-content:space-between;align-items:center;gap:calc(var(--spacing,.25rem)*6);padding:calc(var(--spacing,.25rem)*5);display:flex}.overlay .drawer .header .title[data-v-b5c5a85d]{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)))}.overlay .drawer .header .close[data-v-b5c5a85d]{--tw-translate-x:calc(var(--spacing,.25rem)*2.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.overlay .drawer .content[data-v-b5c5a85d]{padding:calc(var(--spacing,.25rem)*5);padding-top:calc(var(--spacing,.25rem)*0);flex-grow:1;overflow-y:auto}.slide-enter-active[data-v-b5c5a85d],.slide-leave-active[data-v-b5c5a85d],.slide-enter-to[data-v-b5c5a85d]{transition:all .5s}.left .slide-enter-active[data-v-b5c5a85d],.left .slide-leave-active[data-v-b5c5a85d]{transform:translate(-100%)}.left .slide-enter-to[data-v-b5c5a85d]{transform:translate(0)}.right .slide-enter-active[data-v-b5c5a85d],.right .slide-leave-active[data-v-b5c5a85d]{transform:translate(100%)}.right .slide-enter-to[data-v-b5c5a85d]{transform:translate(0)}.bottom .slide-enter-active[data-v-b5c5a85d],.bottom .slide-leave-active[data-v-b5c5a85d]{transform:translateY(100%)}.bottom .slide-enter-to[data-v-b5c5a85d]{transform:translateY(0)}.filter-actions[data-v-62178ff0]{margin-top:calc(var(--spacing,.25rem)*4)}.filter-actions .button[data-v-62178ff0]{width:100%}.filter-actions .select-all[data-v-62178ff0]{margin-bottom:calc(var(--spacing,.25rem)*2)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1b52a40e],[data-v-1b52a40e]:before,[data-v-1b52a40e]:after,[data-v-1b52a40e]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.filter-dropdown[data-v-1b52a40e]{margin-top:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);min-width:16.5rem;max-height:33.625rem;padding:calc(var(--spacing,.25rem)*4);--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter-dropdown[data-v-1b52a40e] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup[data-v-1b52a40e] .menu{background-color:inherit!important}.filter-popup[data-v-1b52a40e] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.inputs[data-v-f24e9eba]{margin-block:calc(var(--spacing,.25rem)*4)}.inputs .input-from[data-v-f24e9eba],.inputs .to[data-v-f24e9eba]{margin-bottom:calc(var(--spacing,.25rem)*2)}.inputs .to[data-v-f24e9eba]{text-align:center;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);display:block}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-c93427ba],[data-v-c93427ba]:before,[data-v-c93427ba]:after,[data-v-c93427ba]::backdrop{--tw-font-weight:initial}}}.search[data-v-c93427ba]{margin-bottom:calc(var(--spacing,.25rem)*4)}.list[data-v-c93427ba]{max-height:21.625rem;padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));overflow:visible auto}.list .badge[data-v-c93427ba]{margin-top:calc(var(--spacing,.25rem)*1.5)}.loader-wrapper[data-v-c93427ba]{margin-top:calc(var(--spacing,.25rem)*-1);justify-content:center;align-items:center;width:100%;display:flex}.loader-wrapper.loading[data-v-c93427ba]{margin-block:calc(var(--spacing,.25rem)*1)}.menu.vertical[data-v-c93427ba]{margin-bottom:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*1)}.group-checkbox[data-v-c93427ba] .label{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-4e34bd39],[data-v-4e34bd39]:before,[data-v-4e34bd39]:after,[data-v-4e34bd39]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.filter-group[data-v-4e34bd39]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);flex-wrap:wrap;display:flex}.filter-group .title[data-v-4e34bd39]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:calc(var(--spacing,.25rem)*10);line-height:calc(var(--spacing,.25rem)*10);text-wrap:nowrap;color:var(--color-neutral-500,oklch(55.6% 0 0));display:none}@media (min-width:48rem){.filter-group .title[data-v-4e34bd39]{display:block}}.filter-group .title[data-v-4e34bd39]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.filter-group .base-filter[data-v-4e34bd39]{text-wrap:nowrap}.filter-group .button[data-v-4e34bd39]{margin-top:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);text-wrap:nowrap;color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cc6e6a99],[data-v-cc6e6a99]:before,[data-v-cc6e6a99]:after,[data-v-cc6e6a99]::backdrop{--tw-border-style:solid}}}tfoot[data-v-cc6e6a99]{border-top-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}tfoot[data-v-cc6e6a99] tr{max-height:initial;min-height:initial}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-53224a8c],[data-v-53224a8c]:before,[data-v-53224a8c]:after,[data-v-53224a8c]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-53224a8c]{display:table-header-group}.table-head .select-column[data-v-53224a8c],.table-head .action-column[data-v-53224a8c]{z-index:2}.table-head .header[data-v-53224a8c]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media (hover:hover){.table-head .header[data-v-53224a8c]:hover{cursor:pointer}}.table-head .header.active[data-v-53224a8c]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-53224a8c]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-53224a8c]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-53224a8c],.table-head .header .sort-icon.right[data-v-53224a8c]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-53224a8c]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-53224a8c]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-53224a8c],.table-head .header .sort-icon.active[data-v-53224a8c]{display:block}.table-head[data-v-53224a8c] .column-configurator{margin-left:auto}.table-head .filters[data-v-53224a8c]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-53224a8c]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-53224a8c]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-53224a8c]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-53224a8c]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-53224a8c],.action-column[data-v-53224a8c]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-53224a8c]:after,.action-column.overlap[data-v-53224a8c]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));--tw-gradient-to:transparent;opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-53224a8c]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-53224a8c]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-53224a8c]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-53224a8c]{cursor:pointer}tbody tr.clickable[data-v-53224a8c]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20%,#fafafa 80%,#fff 95%)}tbody tr.clickable[data-v-53224a8c]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20%,#32394c 80%,#0f172a 95%)}tbody tr.selected[data-v-53224a8c]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20%,#f0f6ff 80%,#fff 95%)}tbody tr.selected[data-v-53224a8c]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20%,#262c3e 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-53224a8c],tbody tr.selectable td[data-v-53224a8c]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-53224a8c],tbody tr:not(.selectable) td[data-v-53224a8c]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}tbody tr[data-v-53224a8c]:not(.loading):nth-last-child(2){border-bottom-style:var(--tw-border-style);border-bottom-width:0}tbody tr .cell-content[data-v-53224a8c]{height:var(--c755539e);min-height:var(--c755539e);max-height:var(--c755539e);align-items:center;display:flex}.table-footer[data-v-53224a8c]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;justify-content:space-between;gap:calc(var(--spacing,.25rem)*4);border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding:calc(var(--spacing,.25rem)*4);flex-wrap:wrap;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-53224a8c]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .total-results[data-v-53224a8c]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-footer .total-results[data-v-53224a8c]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .total-results span[data-v-53224a8c]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-bb3db39e],[data-v-bb3db39e]:before,[data-v-bb3db39e]:after,[data-v-bb3db39e]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.avatar[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);background-color:var(--color-tertiary,#eff6ff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:inline-flex}.avatar[data-v-bb3db39e]:where(.dark,.dark *){background-color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:1;--tw-font-weight:var(--font-weight-medium,500);line-height:1;font-weight:var(--font-weight-medium,500);color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]:where(.dark,.dark *){color:var(--color-white,#fff)}.avatar img[data-v-bb3db39e]{object-fit:cover;border-radius:3.40282e38px;width:100%;height:100%}.avatar.small[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6)}.avatar.small .initials[data-v-bb3db39e]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.avatar.medium[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.avatar.large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12)}.avatar.large .initials[data-v-bb3db39e]{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.avatar.extra-large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14)}.avatar.extra-large .initials[data-v-bb3db39e]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.full-image[data-v-292098bc]{opacity:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-874a424c],[data-v-874a424c]:before,[data-v-874a424c]:after,[data-v-874a424c]::backdrop{--tw-outline-style:solid}}}.thumbnail-stack[data-v-874a424c]{flex-direction:row;align-items:center;display:flex}.thumbnail-stack[data-v-874a424c]:where(.dark,.dark *){opacity:.8}.thumbnail-stack .image-preview[data-v-874a424c]{outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-child,#fff);border-radius:.25rem}.thumbnail-stack .image-preview[data-v-874a424c]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-4)}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-874a424c]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8);background-color:var(--color-disabled,#f3f4f6);justify-content:center;align-items:center;display:flex}.thumbnail-stack .image-preview.invalid .icon[data-v-874a424c]{color:var(--color-disabled-text,#9ca3af)}.thumbnail-stack .image-preview[data-v-874a424c] .image-wrapper:where(.dark,.dark *){opacity:1}.address-lookup-result[data-v-2780fe99]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-neutral-100,oklch(97% 0 0));width:100%;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-700,oklch(37.1% 0 0));flex-direction:column;font-style:normal;display:flex}.error-summary[data-v-59fb525a]{padding-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-leading:initial;--tw-font-weight:initial}}}.postcodenl-autocomplete-menu{margin-top:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);display:none;position:absolute}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));overflow:hidden auto}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:var(--radius-lg,.5rem);padding:calc(var(--spacing,.25rem)*3);--tw-leading:calc(var(--spacing,.25rem)*5);line-height:calc(var(--spacing,.25rem)*5)}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{padding:calc(var(--spacing,.25rem)*0);--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);background-color:#0000}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.postcodenl-autocomplete-item-label{width:100%;max-width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));margin-right:.4rem;display:block}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{color:var(--color-neutral-500,oklch(55.6% 0 0));margin-right:.4rem}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:right .25em center;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{--tw-border-style:none;width:.0625rem;height:.0625rem;padding:calc(var(--spacing,.25rem)*0);clip:rect(0 0 0 0);border-style:none;margin:-.0625rem;display:none;position:absolute}@property --tw-leading{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-dda0be61],[data-v-dda0be61]:before,[data-v-dda0be61]:after,[data-v-dda0be61]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial}}}.country-icon[data-v-dda0be61]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);margin-right:.3125rem}.activator[data-v-dda0be61]{cursor:pointer;align-items:center;gap:calc(var(--spacing,.25rem)*1);background-color:var(--color-input-bg,#fff);display:flex}.activator[data-v-dda0be61]:not(.simple){border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);padding-inline:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.625rem}.activator:not(.simple) .country-icon[data-v-dda0be61]{margin-right:calc(var(--spacing,.25rem)*2)}.activator .state-indicator[data-v-dda0be61]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));margin-left:auto}.activator .state-indicator.is-open[data-v-dda0be61]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));rotate:180deg}.activator.disabled[data-v-dda0be61]{pointer-events:none;cursor:not-allowed;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#9ca3af)}.activator.disabled[data-v-dda0be61]::placeholder{color:var(--color-disabled-text,#9ca3af)}@media (hover:hover){.activator.disabled[data-v-dda0be61]:hover{border-color:var(--color-border-primary,#d1d5db)}}.activator.disabled[data-v-dda0be61]:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.activator.disabled[data-v-dda0be61]:focus{outline-offset:2px;outline:2px solid #0000}}.country-list[data-v-dda0be61]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-child,#fff);max-height:300px;padding-bottom:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow-y:auto}.country-list .search-container[data-v-dda0be61]{top:calc(var(--spacing,.25rem)*0);z-index:1;background-color:var(--color-child-alt,#fff);padding-inline:calc(var(--spacing,.25rem)*2);padding-top:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);position:sticky}.country-list .search-container[data-v-dda0be61]:after{bottom:calc(var(--spacing,.25rem)*-2);left:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*2);--tw-gradient-position:to bottom;width:100%;position:absolute}@supports (background-image:linear-gradient(in lab,red,red)){.country-list .search-container[data-v-dda0be61]:after{--tw-gradient-position:to bottom in oklab}}.country-list .search-container[data-v-dda0be61]:after{background-image:linear-gradient(var(--tw-gradient-stops));--tw-gradient-from:#0000000d;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));--tw-gradient-to:transparent;opacity:.95;--tw-content:"";content:var(--tw-content)}.country-list .search-container .search-input[data-v-dda0be61]{--tw-border-style:none;background-color:var(--color-child-alt,#fff);width:100%;padding:calc(var(--spacing,.25rem)*0);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-style:none}.country-list .search-container .search-input[data-v-dda0be61]::placeholder{color:var(--color-body-text,#111827)}.country-list .search-container .search-input[data-v-dda0be61]:focus{box-shadow:none}.country-list .countries[data-v-dda0be61]{padding-top:calc(var(--spacing,.25rem)*2)}.country-list .countries .country[data-v-dda0be61]{align-items:center;gap:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*.5);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));display:flex}.country-list .countries .country[data-v-dda0be61]:hover{cursor:pointer;background-color:var(--color-secondary-hover,#fafafa);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}.country-list .countries .country[data-v-dda0be61]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.country-list .countries .no-countries-found[data-v-dda0be61]{pointer-events:none;padding-top:calc(var(--spacing,.25rem)*1);text-align:center;--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}[data-v-f3068d9b] .activator{width:100%;max-width:15.75rem}.address-input[data-v-f3068d9b]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-input .country .country-label-row[data-v-f3068d9b]{flex-direction:row;justify-content:space-between;display:flex}.address-input .country .country-label-row .address-toggle[data-v-f3068d9b]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0));text-decoration-line:underline}.address-input .input-label[data-v-f3068d9b]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-input .grouped-inputs[data-v-f3068d9b]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);width:100%;max-width:24rem;display:flex}.address-input .grouped-inputs .error-summary[data-v-f3068d9b]{width:100%}.address-input .input-container[data-v-f3068d9b],.address-input .address-lookup-result[data-v-f3068d9b]{width:100%;max-width:24rem}.address-form[data-v-e0304f7b]{flex-wrap:wrap;justify-content:space-between;display:flex}.address-form form[data-v-e0304f7b]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-form form .input-label[data-v-e0304f7b]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-form form .grouped-inputs[data-v-e0304f7b]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);display:flex}.address-form form .grouped-inputs .error-summary[data-v-e0304f7b]{width:100%}.address-form form .input-container[data-v-e0304f7b],.address-form form .grouped-inputs[data-v-e0304f7b]{width:100%;max-width:24rem}.checkbox-group[data-v-0088e5e7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ec57ffa3],[data-v-ec57ffa3]:before,[data-v-ec57ffa3]:after,[data-v-ec57ffa3]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.checkbox-button[data-v-ec57ffa3]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);padding:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.checkbox-button .checkbox-container[data-v-ec57ffa3]{border-radius:var(--radius-lg,.5rem)}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.checkbox-button .checkbox-container[data-v-ec57ffa3] .label{border-radius:var(--radius-xl,.75rem);height:100%;padding:calc(var(--spacing,.25rem)*3);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);word-break:break-all;align-items:flex-start}.checkbox-button .checkbox-container .checkbox-button-label[data-v-ec57ffa3]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);display:flex}.checkbox-button .checkbox-container .micro-icon[data-v-ec57ffa3]{margin-top:calc(var(--spacing,.25rem)*.5);color:var(--color-neutral-400,oklch(70.8% 0 0))}.checkbox-button .checked-content[data-v-ec57ffa3]{padding-top:calc(var(--spacing,.25rem)*1)}.drop-zone[data-v-f6ddde4c]{--tw-border-style:dashed;border-style:dashed}.drop-zone.default[data-v-f6ddde4c]{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.drop-zone.default[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.drop-zone.default[data-v-f6ddde4c]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.drop-zone.default[data-v-f6ddde4c]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.drop-zone.dragging[data-v-f6ddde4c]{border-color:var(--color-blue-300,oklch(80.9% .105 251.813));background-color:var(--color-blue-50,oklch(97% .014 254.604))}.drop-zone.dragging[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-blue-900,oklch(37.9% .146 265.522))}.drop-zone .label[data-v-f6ddde4c]{z-index:2;cursor:pointer;height:100%}.drop-zone .label.dragging[data-v-f6ddde4c]{justify-content:center}.drop-zone .label .icon[data-v-f6ddde4c]{color:var(--color-primary,#2563eb)}.drop-zone .label .icon[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .label .loader[data-v-f6ddde4c]{margin-right:calc(var(--spacing,.25rem)*1)}.drop-zone .label .trigger[data-v-f6ddde4c]{color:var(--color-primary,#2563eb);text-decoration-line:underline}.drop-zone .label .trigger[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .file-input[data-v-f6ddde4c]{display:none}.warning-zone[data-v-6a715eb5]{--tw-border-style:solid;border-style:solid;border-color:var(--color-orange-200,oklch(90.1% .076 70.697));background-color:var(--color-warning-accent,#fff7ed)}.warning-zone .label[data-v-6a715eb5]{color:var(--color-warning-primary,#7c2d12);flex-grow:1}.warning-zone .label .icon[data-v-6a715eb5]{color:var(--color-warning-tertiary,#f97316)}.error-zone[data-v-ac56673e]{--tw-border-style:solid;border-style:solid;border-color:var(--color-red-200,oklch(88.5% .062 18.334));background-color:var(--color-error-accent,#fef2f2)}.error-zone .label[data-v-ac56673e]{color:var(--color-error-primary,#7b2122);flex-grow:1}.error-zone .label .icon[data-v-ac56673e]{color:var(--color-error-tertiary,#e73c3e)}.success-zone[data-v-100cfc2a]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff)}.success-zone[data-v-100cfc2a]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.success-zone .label .icon[data-v-100cfc2a]{color:var(--color-success-tertiary,#22c55e)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3bf13f60],[data-v-3bf13f60]:before,[data-v-3bf13f60]:after,[data-v-3bf13f60]::backdrop{--tw-duration:initial;--tw-ease:initial}}}.linear-progress[data-v-3bf13f60]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));display:flex}.linear-progress .wrapper[data-v-3bf13f60]{gap:calc(var(--spacing,.25rem)*1);flex-direction:column;width:100%;display:flex}.linear-progress .wrapper .progress-bar[data-v-3bf13f60]{height:calc(var(--spacing,.25rem)*1.5);width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-3bf13f60]{width:100%;height:100%;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.5s;--tw-ease:linear;transition-duration:.5s;transition-timing-function:linear}.linear-progress .wrapper .progress-bar.blue[data-v-3bf13f60]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-3bf13f60]{background-color:var(--color-blue-500,oklch(62.3% .214 259.815))}.linear-progress .wrapper .progress-bar.lightblue[data-v-3bf13f60]{background-color:inherit}.linear-progress .wrapper .progress-bar.lightblue .progress[data-v-3bf13f60]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}.linear-progress .wrapper .progress-bar.green[data-v-3bf13f60]{background-color:var(--color-green-100,oklch(96.2% .044 156.743))}.linear-progress .wrapper .progress-bar.green .progress[data-v-3bf13f60]{background-color:var(--color-green-500,oklch(72.3% .219 149.579))}.linear-progress .wrapper .progress-bar.gray[data-v-3bf13f60]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-3bf13f60]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.linear-progress .wrapper .progress-bar.orange[data-v-3bf13f60]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-3bf13f60]{background-color:var(--color-orange-500,oklch(70.5% .213 47.604))}.linear-progress .wrapper .progress-bar.purple[data-v-3bf13f60]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-3bf13f60]{background-color:var(--color-purple-500,oklch(62.7% .265 303.9))}.linear-progress .wrapper .progress-bar.red[data-v-3bf13f60]{background-color:var(--color-red-100,oklch(93.6% .032 17.717))}.linear-progress .wrapper .progress-bar.red .progress[data-v-3bf13f60]{background-color:var(--color-red-500,oklch(63.7% .237 25.331))}.linear-progress .wrapper .progress-bar.yellow[data-v-3bf13f60]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-3bf13f60]{background-color:var(--color-yellow-500,oklch(79.5% .184 86.047))}.linear-progress .append[data-v-3bf13f60]{min-width:calc(var(--spacing,.25rem)*9)}@property --tw-ease{syntax:"*";inherits:false}.uploading-zone[data-v-4cd21cfa]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));position:relative}.uploading-zone .label[data-v-4cd21cfa]{z-index:2;cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.uploading-zone .label[data-v-4cd21cfa]:where(.dark,.dark *){mix-blend-mode:difference}.uploading-zone .label .progress[data-v-4cd21cfa]{color:var(--color-primary,#2563eb)}.uploading-zone .label .progress[data-v-4cd21cfa]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.uploading-zone .label .loader[data-v-4cd21cfa]{isolation:isolate}.uploading-zone .button[data-v-4cd21cfa]{width:100%}@media (min-width:48rem){.uploading-zone .button[data-v-4cd21cfa]{width:auto}}.uploading-zone .linear-progress[data-v-4cd21cfa]{right:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:1;position:absolute;height:100%!important}:is(.uploading-zone .linear-progress[data-v-4cd21cfa] .wrapper,.uploading-zone .linear-progress[data-v-4cd21cfa] .progress-bar){height:100%}.processing-zone[data-v-c88622d7]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.processing-zone[data-v-c88622d7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.processing-zone .label[data-v-c88622d7]{cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.processing-zone .label .loader[data-v-c88622d7]{isolation:isolate}.processing-zone .button[data-v-c88622d7]{width:100%}@media (min-width:48rem){.processing-zone .button[data-v-c88622d7]{width:auto}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e8f96956],[data-v-e8f96956]:before,[data-v-e8f96956]:after,[data-v-e8f96956]::backdrop{--tw-border-style:solid}}}@media (min-width:48rem){.drag-and-drop[data-v-e8f96956]{height:4.5rem}}.drag-and-drop .base-zone[data-v-e8f96956]{border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);border-width:1px;flex-wrap:wrap;align-items:center;row-gap:1.125rem;display:flex;overflow:hidden}@media (min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956]{padding-block:calc(var(--spacing,.25rem)*0);padding-right:calc(var(--spacing,.25rem)*4);padding-left:calc(var(--spacing,.25rem)*6)}}.drag-and-drop .base-zone[data-v-e8f96956] .label{align-items:center;gap:calc(var(--spacing,.25rem)*1);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-grow:1;display:flex}@media (min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956] .label{width:auto}}.drag-and-drop .base-zone[data-v-e8f96956] .label .icon{margin-right:calc(var(--spacing,.25rem)*2)}.drag-and-drop .base-zone[data-v-e8f96956] .actions{z-index:2;align-items:center;gap:calc(var(--spacing,.25rem)*2);flex-grow:1;display:flex}@media (min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions{flex-grow:0}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button{flex-shrink:0}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:2}@media (min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:1}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){flex-grow:1;order:1}@media (min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){order:2}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:2}@media (min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:1}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbd1bdc0],[data-v-fbd1bdc0]:before,[data-v-fbd1bdc0]:after,[data-v-fbd1bdc0]::backdrop{--tw-font-weight:initial}}}.form-row[data-v-fbd1bdc0]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex}@media (min-width:48rem){.form-row[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*21);padding-block:calc(var(--spacing,.25rem)*10);flex-direction:row}}.form-row[data-v-fbd1bdc0]:first-child{padding-top:calc(var(--spacing,.25rem)*6)}.form-row .label[data-v-fbd1bdc0]{width:100%}@media (min-width:48rem){.form-row .label[data-v-fbd1bdc0]{width:calc(var(--spacing,.25rem)*75);min-width:calc(var(--spacing,.25rem)*75)}}.form-row .label .title[data-v-fbd1bdc0]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.form-row .label .subtitle[data-v-fbd1bdc0]{margin-top:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.form-row .label .subtitle[data-v-fbd1bdc0]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.form-row .fields[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*5);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cf479711],[data-v-cf479711]:before,[data-v-cf479711]:after,[data-v-cf479711]::backdrop{--tw-divide-y-reverse:0;--tw-border-style:solid}}}.form-grid[data-v-cf479711]{width:100%}:where(.form-grid[data-v-cf479711]>:not(:last-child)){--tw-divide-y-reverse:0!important;border-bottom-style:var(--tw-border-style)!important;border-top-style:var(--tw-border-style)!important;border-top-width:calc(1px*var(--tw-divide-y-reverse))!important;border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))!important;border-color:var(--color-border-primary,#d1d5db)!important}.form-grid .actions[data-v-cf479711]{padding-block:calc(var(--spacing,.25rem)*6)}.form-grid .actions[data-v-cf479711] .fields{gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-217ac40b],[data-v-217ac40b]:before,[data-v-217ac40b]:after,[data-v-217ac40b]::backdrop{--tw-border-style:solid;--tw-outline-style:solid}}}.phone-input[data-v-217ac40b]{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);padding-inline:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}.phone-input.focus[data-v-217ac40b]:not(.disabled){border-color:var(--color-primary-light,#3b82f6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--color-primary-light,#3b82f6)}.phone-input[data-v-217ac40b]:hover:not(.disabled){border-color:var(--color-border-primary-hover,#9ca3af)}.phone-input.disabled[data-v-217ac40b]{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.phone-input.disabled .country-prefix[data-v-217ac40b]{color:var(--color-disabled-text,#9ca3af)}.phone-input.disabled input[data-v-217ac40b]{background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#9ca3af)}.phone-input select[data-v-217ac40b],.phone-input input[data-v-217ac40b]{--tw-border-style:none;padding:calc(var(--spacing,.25rem)*0);border-style:none}:is(.phone-input select[data-v-217ac40b],.phone-input input[data-v-217ac40b]):focus{box-shadow:none}.phone-input select[data-v-217ac40b]{padding-right:calc(var(--spacing,.25rem)*8)}.phone-input input[data-v-217ac40b]{background-color:var(--color-input-bg,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.phone-input .country-prefix[data-v-217ac40b]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}.radio[data-v-7475bfb8]{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6)}.radio[data-v-7475bfb8]:focus{--tw-ring-color:var(--color-primary-light,#3b82f6)}.radio.large[data-v-7475bfb8]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.radio[data-v-7475bfb8]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.radio[data-v-7475bfb8]:checked:not(:disabled){border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary,#2563eb)}.radio[data-v-7475bfb8]:checked:not(:disabled):where(.dark,.dark *){background-color:var(--color-primary-light,#3b82f6)}.radio[data-v-7475bfb8]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.radio[data-v-7475bfb8]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-7475bfb8]:checked:not(:disabled):hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-f4886f70],[data-v-f4886f70]:before,[data-v-f4886f70]:after,[data-v-f4886f70]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:"";--tw-font-weight:initial}}}.radio-button[data-v-f4886f70]{align-items:center;gap:calc(var(--spacing,.25rem)*3);border-radius:var(--radius-lg,.5rem);padding-inline:calc(var(--spacing,.25rem)*3);padding-block:calc(var(--spacing,.25rem)*3);word-break:break-all;display:flex}.radio-button[data-v-f4886f70] *{pointer-events:none}.radio-button[data-v-f4886f70]:not(.disabled):hover{cursor:pointer;background-color:var(--color-neutral-100,oklch(97% 0 0))}.radio-button[data-v-f4886f70]:not(.disabled):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.radio-button:not(.disabled).active[data-v-f4886f70]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}@media (hover:hover){.radio-button:not(.disabled).active[data-v-f4886f70]:hover{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}}.radio-button:not(.disabled).active[data-v-f4886f70]:where(.dark,.dark *){background-color:var(--color-child,#fff)}@media (hover:hover){.radio-button:not(.disabled).active[data-v-f4886f70]:where(.dark,.dark *):hover{background-color:var(--color-child-alt,#fff)}}.radio-button.disabled[data-v-f4886f70]{color:var(--color-disabled-text,#9ca3af);--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.radio-button.disabled[data-v-f4886f70]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:10;cursor:not-allowed;border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-300,oklch(87% 0 0));opacity:.1;--tw-content:"";content:var(--tw-content);width:100%;height:100%;position:absolute}.radio-button.large[data-v-f4886f70]{padding-block:calc(var(--spacing,.25rem)*3.5)}.radio-button label[data-v-f4886f70]{-webkit-user-select:none;user-select:none}.radio-button .append[data-v-f4886f70]{margin-left:auto}.radio-button .prepend-wrapper[data-v-f4886f70]{align-items:center;gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper[data-v-f4886f70]{flex-direction:column;min-width:max-content;display:flex}.radio-button .prepend-wrapper .title-wrapper .title[data-v-f4886f70]{align-items:center;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-f4886f70]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-f4886f70]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-06fee698],[data-v-06fee698]:before,[data-v-06fee698]:after,[data-v-06fee698]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.suggestion-list[data-v-06fee698]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);min-width:6.25rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:absolute}.suggestion-list .menu[data-v-06fee698]{row-gap:calc(var(--spacing,.25rem)*1)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5e00395d],[data-v-5e00395d]:before,[data-v-5e00395d]:after,[data-v-5e00395d]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.editor[data-v-5e00395d] .tiptap{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);width:100%;height:18.75rem;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:.625rem;overflow:auto}:is(.editor[data-v-5e00395d] .tiptap h1,.editor[data-v-5e00395d] .tiptap h2){margin-bottom:calc(var(--spacing,.25rem)*4)}.editor[data-v-5e00395d] .tiptap h1{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)))}.editor[data-v-5e00395d] .tiptap h2{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)))}.editor[data-v-5e00395d] .tiptap h3{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}:is(.editor[data-v-5e00395d] .tiptap h4,.editor[data-v-5e00395d] .tiptap h5,.editor[data-v-5e00395d] .tiptap h6){font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.editor[data-v-5e00395d] .tiptap .tag{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);color:var(--color-gray-700,oklch(37.3% .034 259.733))}.editor .toolbar[data-v-5e00395d]{margin-bottom:calc(var(--spacing,.25rem)*2);gap:calc(var(--spacing,.25rem)*1);display:flex}.editor .toolbar .button[data-v-5e00395d]{width:calc(var(--spacing,.25rem)*10)}.editor .toolbar[data-v-5e00395d] .base-select{margin-left:auto}.modal.loader-modal[data-v-3d6405b8] .inner{display:flex;align-items:center;justify-content:center;background-color:var(--color-white);height:4.75rem;border-radius:1rem}.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:0;overflow:visible}.modal.loader-modal[data-v-3d6405b8] .inner .loader{width:3.125rem;height:3.125rem}.search-container[data-v-3d6405b8]{position:relative}.search-container[data-v-3d6405b8] .modal{max-height:25rem;background-color:transparent;height:100%;box-shadow:none}.search-container[data-v-3d6405b8] .modal .inner .content{padding:0}.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper,.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper input{background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{background-color:var(--color-child);border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;overflow:hidden}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .select-content{border-radius:1rem;background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated{margin:.625rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-left-radius:0;border-bottom-right-radius:0}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper{border-radius:1rem;padding-left:1.5rem;padding-right:1.5rem;height:4.75rem;border:none;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper.focus{border:none;outline:none}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .prepend-icon{height:1.5rem;width:1.5rem;margin-left:0;margin-right:.25rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-3d6405b8] .modal .inner .content .button{color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .button.cancel{font-weight:400;border-left:1px solid var(--color-border-primary);border-radius:0;padding-left:1rem;padding-right:.5rem}.dark .modal .cancel[data-v-3d6405b8]{color:var(--color-body-text)!important}@media (min-width: 768px){.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-0a92ef2e],[data-v-0a92ef2e]:before,[data-v-0a92ef2e]:after,[data-v-0a92ef2e]::backdrop{--tw-border-style:solid}}}[data-v-0a92ef2e] .input{min-width:calc(var(--spacing,.25rem)*40);border-right-style:var(--tw-border-style)!important;border-right-width:0!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important}[data-v-0a92ef2e] .search-options .wrapper{border-left-style:var(--tw-border-style)!important;border-left-width:0!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important}.scoped-search[data-v-0a92ef2e]{display:flex}.scoped-search .search:has(.input:hover)+.divider[data-v-0a92ef2e]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search .search:focus-within+.divider[data-v-0a92ef2e]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search .search[data-v-0a92ef2e]:focus-within .input{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary-light,#3b82f6)}.scoped-search .search[data-v-0a92ef2e]:focus-within .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-0a92ef2e]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search:has(.search-options:focus) .divider[data-v-0a92ef2e],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-0a92ef2e]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search[data-v-0a92ef2e] .search{flex-grow:1}.time-input[data-v-f95d04e5]{width:5.3125rem}.time-input[data-v-f95d04e5] ::-webkit-calendar-picker-indicator{display:none}.time-input[data-v-f95d04e5] ::-webkit-datetime-edit-text{padding-inline:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input[data-v-f95d04e5] ::-webkit-datetime-edit-fields-wrapper{margin-inline:auto}.time-input.has-icon[data-v-f95d04e5]{width:calc(var(--spacing,.25rem)*28)}.time-input.has-icon[data-v-f95d04e5] ::-webkit-datetime-edit-fields-wrapper{margin-left:calc(var(--spacing,.25rem)*0)}.time-input.has-icon[data-v-f95d04e5] .icon{color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input.error-full[data-v-f95d04e5] .error{width:max-content}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-70db5286],[data-v-70db5286]:before,[data-v-70db5286]:after,[data-v-70db5286]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid}}}.arrow[data-v-70db5286]{position:relative}.arrow.vertical[data-v-70db5286]{width:fit-content;height:100%;padding-inline:.75rem}.arrow.vertical .text[data-v-70db5286]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;top:50%;rotate:-90deg}.arrow.vertical.has-text[data-v-70db5286]{margin-right:calc(var(--spacing,.25rem)*8)}.arrow[data-v-70db5286]:not(.vertical){width:100%;padding-block:.75rem}.arrow:not(.vertical) .text[data-v-70db5286]{margin-top:calc(var(--spacing,.25rem)*5);--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;left:50%}.arrow:not(.vertical).has-text[data-v-70db5286]{margin-bottom:calc(var(--spacing,.25rem)*8)}.arrow .arrow-pointer[data-v-70db5286]{border-right-style:var(--tw-border-style);border-right-width:2px;border-bottom-style:var(--tw-border-style);border-bottom-width:2px;border-color:var(--color-border-primary,#d1d5db);padding:calc(var(--spacing,.25rem)*2);position:absolute}.arrow .arrow-pointer.up[data-v-70db5286],.arrow .arrow-pointer.down[data-v-70db5286]{margin-left:calc(var(--spacing,.25rem)*-2)}.arrow .arrow-pointer.up[data-v-70db5286]{top:calc(var(--spacing,.25rem)*0);margin-top:.125rem;rotate:-135deg}.arrow .arrow-pointer.down[data-v-70db5286]{bottom:calc(var(--spacing,.25rem)*0);margin-bottom:.125rem;rotate:45deg}.arrow .arrow-pointer.left[data-v-70db5286],.arrow .arrow-pointer.right[data-v-70db5286]{margin-top:calc(var(--spacing,.25rem)*-3);top:1rem}.arrow .arrow-pointer.left[data-v-70db5286]{left:calc(var(--spacing,.25rem)*0);margin-left:.125rem;rotate:135deg}.arrow .arrow-pointer.right[data-v-70db5286]{right:calc(var(--spacing,.25rem)*0);margin-right:.125rem;rotate:-45deg}.arrow .text[data-v-70db5286]{text-wrap:nowrap;color:var(--color-gray-400,oklch(70.7% .022 261.325));display:block;position:absolute}.arrow .text[data-v-70db5286]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.footer[data-v-af644ac3]{min-height:calc(var(--spacing,.25rem)*32);justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex;overflow:hidden}.footer .copy[data-v-af644ac3]{text-align:center;width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1b195509],[data-v-1b195509]:before,[data-v-1b195509]:after,[data-v-1b195509]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.header[data-v-1b195509]{z-index:50;width:100%;height:var(--6232d06c);position:relative}.header .wrapper[data-v-1b195509]{border-bottom-style:var(--tw-border-style);background-color:var(--color-parent-bg,#fff);border-bottom-width:1px;justify-content:center;width:100%;display:flex;position:fixed}.header .wrapper[data-v-1b195509]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.header .wrapper .inner[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100vw;height:100%;margin-right:calc(100% - 100vw);display:grid;overflow-x:clip}@media (min-width:64rem){.header .wrapper .inner[data-v-1b195509]{max-width:100.438rem}}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:1fr auto 1fr;grid-template-areas:"return-info return-info return-info""prepend logo append""middle middle middle"}.header .wrapper .inner .prepend[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6);grid-area:prepend}.header .wrapper .inner .logo[data-v-1b195509]{grid-area:logo}.header .wrapper .inner .logo a[data-v-1b195509]{width:fit-content;display:block}.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);border-bottom-width:1px;justify-content:center;display:flex}@media (min-width:64rem){.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*0);border-bottom-width:0;justify-content:flex-start}}.header .wrapper .inner .return-info[data-v-1b195509]{grid-area:return-info}.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}@media (min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);--tw-border-style:none;border-style:none}}.header .wrapper .inner .return-info a[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);align-items:center;display:flex}@media (min-width:64rem){.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}}.header .wrapper .inner .middle[data-v-1b195509]{justify-content:center;align-items:center;height:100%;display:flex}@media (min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]{padding:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509]{grid-area:middle}.header .wrapper .inner .middle[data-v-1b195509]>*{margin-inline:calc(var(--spacing,.25rem)*2);margin-bottom:calc(var(--spacing,.25rem)*2)}@media (min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]>*{margin:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509] .input-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .inline-container-prepended .icon{color:var(--color-primary,#2563eb)}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{border-radius:var(--radius-2xl,1rem);--tw-border-style:none;background-color:var(--color-disabled,#f3f4f6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.4375rem;border-style:none;padding-left:3.25rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input::placeholder{color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media (hover:hover){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:hover{--tw-border-style:none;border-style:none}}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.4375rem;padding-right:calc(var(--spacing,.25rem)*4)}@media (min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{padding-block:.6875rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.6875rem}}.header .wrapper .inner .append[data-v-1b195509]{justify-content:flex-end;align-items:center;gap:calc(var(--spacing,.25rem)*4);grid-area:append;display:flex}.header .wrapper .inner .append .icon[data-v-1b195509]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.header .wrapper .inner .append .dropdown[data-v-1b195509] .button{margin-right:calc(var(--spacing,.25rem)*6);padding:calc(var(--spacing,.25rem)*0);background-color:#0000}@media (min-width:1024px){.header[data-v-1b195509],.header .wrapper[data-v-1b195509]{height:calc(var(--spacing,.25rem)*20)}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:2fr 3fr 2fr;grid-template-areas:"logo middle append"}.header .wrapper .inner.left[data-v-1b195509]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-1b195509]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-1b195509]{justify-content:center}.header .wrapper .inner.right[data-v-1b195509]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-1b195509]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-1b195509]{grid-template-columns:1fr 1fr 2fr 2fr;grid-template-areas:"logo return-info middle append"}.header .wrapper .prepend[data-v-1b195509]{display:none}.header .wrapper .logo a[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-19221d31],[data-v-19221d31]:before,[data-v-19221d31]:after,[data-v-19221d31]::backdrop{--tw-font-weight:initial}}}.tab[data-v-19221d31]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-600,oklch(43.9% 0 0))}.tab .tab-count[data-v-19221d31]{margin-left:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:3.40282e38px;display:none}@media (min-width:48rem){.tab .tab-count[data-v-19221d31]{display:inline-block}}.tab.active[data-v-19221d31]{border-color:var(--color-primary-mid,#2f6fe8);color:var(--color-primary-mid,#2f6fe8)}.tab.disabled[data-v-19221d31]{pointer-events:none;cursor:not-allowed;color:var(--color-disabled-text,#9ca3af)}.tab.disabled.active[data-v-19221d31]{border-color:var(--color-disabled-text,#9ca3af)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-51f0b7e0],[data-v-51f0b7e0]:before,[data-v-51f0b7e0]:after,[data-v-51f0b7e0]::backdrop{--tw-space-x-reverse:0;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid;--tw-font-weight:initial}}}.tabs[data-v-51f0b7e0]{display:flex;position:relative}:where(.tabs[data-v-51f0b7e0]>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing,.25rem)*8)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing,.25rem)*8)*calc(1 - var(--tw-space-x-reverse)))}.tabs[data-v-51f0b7e0]{background-color:inherit;--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-gray-200));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tabs[data-v-51f0b7e0] .tab{cursor:pointer;border-bottom-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);white-space:nowrap;border-bottom-width:2px}.tabs[data-v-51f0b7e0] .tab:not(.active){color:var(--color-gray-500,oklch(55.1% .027 264.364));border-color:#0000}.tabs[data-v-51f0b7e0] .tab:not(.active):where(.dark,.dark *){color:var(--color-body-text,#111827)}.tabs[data-v-51f0b7e0] .tab:hover:not(.active){color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media (hover:hover){.tabs[data-v-51f0b7e0] .tab:hover:not(.active):hover{border-color:var(--color-neutral-200,oklch(92.2% 0 0))}}.tabs[data-v-51f0b7e0] .tab:hover:not(.active):where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.tabs[data-v-51f0b7e0] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a2de1f4a],[data-v-a2de1f4a]:before,[data-v-a2de1f4a]:after,[data-v-a2de1f4a]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-tracking:initial}}}.page-header[data-v-a2de1f4a]{background-color:var(--color-body,#fff);position:relative}.page-header.header-sticky[data-v-a2de1f4a]{z-index:21;top:var(--6db7cc74);position:sticky}.page-header.header-sticky.overlap[data-v-a2de1f4a]{border-bottom-style:var(--tw-border-style);border-bottom-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-shadow:0 12px 12px -16px var(--tw-shadow-color,#0003);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);padding-top:var(--d88fb824)}.page-header.header-sticky.overlap .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*1)}.page-header.header-sticky.overlap .heading h1[data-v-a2de1f4a]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.page-header .back-button-wrapper[data-v-a2de1f4a]{height:calc(var(--spacing,.25rem)*5);width:100%}.page-header h1[data-v-a2de1f4a]{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}@media (min-width:48rem){.page-header h1[data-v-a2de1f4a]{font-size:1.75rem}}.page-header .tabs[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*8)}.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}@media (min-width:48rem){.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*5)}}.page-header .heading .image-wrapper[data-v-a2de1f4a]{width:fit-content}.page-header .heading .image-wrapper[data-v-a2de1f4a] .image{max-height:calc(var(--spacing,.25rem)*14)}.page-header .heading .header-start[data-v-a2de1f4a]{align-items:center;gap:calc(var(--spacing,.25rem)*4);flex-direction:row;display:flex}.page-header .heading .actions[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);margin-left:auto;display:flex}.page-header .heading .title-wrapper[data-v-a2de1f4a]{flex-direction:column;display:flex}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600);--tw-tracking:var(--tracking-tight,-.025em);letter-spacing:var(--tracking-tight,-.025em);color:var(--color-gray-500,oklch(55.1% .027 264.364))}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.page-header .filters[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);display:flex;overflow:auto}@media (min-width:48rem){.page-header .filters[data-v-a2de1f4a]{flex-wrap:wrap}}.page-header .filters .search[data-v-a2de1f4a]{min-width:12rem}@media (min-width:64rem){.page-header .filters .search[data-v-a2de1f4a]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-a2de1f4a]{display:contents}.page-header .filters .filter-group[data-v-a2de1f4a] .title{margin-left:calc(var(--spacing,.25rem)*4)}@property --tw-tracking{syntax:"*";inherits:false}.sidebar[data-v-c4aea807]{border-radius:var(--radius-lg,.5rem);width:100%;max-width:14.5rem;height:100%;overflow:hidden}.sidebar.mini[data-v-c4aea807]{width:2.25rem}.sidebar.mini .menu[data-v-c4aea807]{width:fit-content}.menu[data-v-c4aea807]{gap:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-950,oklch(14.5% 0 0))}.summary[data-v-15250c0d]{width:var(--5436127c);max-width:100%}.hamburger-icon[data-v-40931657]{cursor:pointer}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbf56868],[data-v-fbf56868]:before,[data-v-fbf56868]:after,[data-v-fbf56868]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-duration:initial}}}[data-v-fbf56868] .progress{transition-duration:var(--63a26136)!important}.toast[data-v-fbf56868]{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-gray-200,oklch(92.8% .006 264.531));background-color:var(--color-child-alt,#fff);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);width:100%;max-width:24rem;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:relative}.toast[data-v-fbf56868]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.toast .wrapper[data-v-fbf56868]{padding:calc(var(--spacing,.25rem)*4);display:flex}.toast .linear-progress[data-v-fbf56868] .progress-bar{border-bottom-right-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.toast.is-absolute[data-v-fbf56868]{top:calc(var(--spacing,.25rem)*1);right:calc(var(--spacing,.25rem)*1);position:absolute}.toast .type-icon[data-v-fbf56868]{margin-right:calc(var(--spacing,.25rem)*3);flex-shrink:0}.toast .content[data-v-fbf56868]{padding-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-direction:column;display:flex}.toast .content .title[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.toast .content .description[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.toast .content .description[data-v-fbf56868]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.toast .content .actions[data-v-fbf56868]{gap:calc(var(--spacing,.25rem)*2);display:flex}.toast .close[data-v-fbf56868]{top:.5rem;right:calc(var(--spacing,.25rem)*0);position:absolute}.toast .close[data-v-fbf56868] .mini-icon{color:var(--color-gray-400,oklch(70.7% .022 261.325))}.close:hover .mini-icon[data-v-fbf56868]{color:var(--color-black,#000)}.error .type-icon[data-v-fbf56868]{color:var(--color-red-500,oklch(63.7% .237 25.331))}.warning .type-icon[data-v-fbf56868]{color:var(--color-orange-500,oklch(70.5% .213 47.604))}.success .type-icon[data-v-fbf56868]{color:var(--color-green-500,oklch(72.3% .219 149.579))}.info .type-icon[data-v-fbf56868]{color:var(--color-blue-500,oklch(62.3% .214 259.815))}.fade-enter-from[data-v-fbf56868],.fade-leave-to[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*60);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:0}.fade-enter-to[data-v-fbf56868],.fade-leave-from[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:1}.fade-enter-active[data-v-fbf56868],.fade-leave-active[data-v-fbf56868]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;transition-duration:.3s}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-duration{syntax:"*";inherits:false}.toast-group[data-v-741facc4]{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);z-index:100;gap:calc(var(--spacing,.25rem)*4);max-height:100vh;padding:calc(var(--spacing,.25rem)*4);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));scrollbar-width:none;flex-direction:column;display:flex;position:fixed;overflow:hidden auto}.page-layout[data-v-312f26ad]{flex-direction:column;display:flex;position:relative;overflow-x:clip}.page-layout .wrap[data-v-312f26ad]{flex-direction:column;align-self:center;width:100vw;height:100%;margin-right:calc(100% - 100vw);display:flex}@media (min-width:64rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*5);max-width:100.438rem;padding-inline:calc(var(--spacing,.25rem)*6);flex-direction:row}}@media (min-width:96rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*20)}}.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6)}@media (min-width:64rem){.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout.layout-mirrored .main[data-v-312f26ad]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-312f26ad]{order:2}.page-layout .sidebar[data-v-312f26ad]{margin-bottom:calc(var(--spacing,.25rem)*4);height:100%;position:sticky}@media (min-width:64rem){.page-layout .sidebar[data-v-312f26ad]{margin-top:calc(var(--spacing,.25rem)*10)}}.page-layout .sidebar[data-v-312f26ad]{top:var(--7ed39e1a)}.page-layout .sidebar-left[data-v-312f26ad]{display:none}@media (min-width:64rem){.page-layout .sidebar-left[data-v-312f26ad]{display:block}}@media (min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]{width:fit-content;max-width:calc(var(--spacing,.25rem)*40)}}@media (min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]{width:100%;max-width:14.5rem}}@media (min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*4)}}@media (min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout .sidebar-right[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*4);padding-top:calc(var(--spacing,.25rem)*0)}@media (min-width:64rem){.page-layout .sidebar-right[data-v-312f26ad]{padding:calc(var(--spacing,.25rem)*0);padding-top:calc(var(--spacing,.25rem)*4)}}.page-layout .main[data-v-312f26ad]{min-width:calc(var(--spacing,.25rem)*0);padding-block:calc(var(--spacing,.25rem)*4);flex-grow:1}@media (min-width:64rem){.page-layout .main[data-v-312f26ad]{padding-block:calc(var(--spacing,.25rem)*10)}}.persistent .label .badge[data-v-9ccdf55b]{margin-right:.375rem}.persistent .label .micro-icon[data-v-9ccdf55b]{margin-left:calc(var(--spacing,.25rem)*1)}.persistent .label .micro-icon[data-v-9ccdf55b]:where(.dark,.dark *){color:inherit}.persistent[data-v-9ccdf55b] .menu .current{color:var(--color-neutral-950,oklch(14.5% 0 0))!important}.persistent[data-v-9ccdf55b] .menu .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1d398f2d],[data-v-1d398f2d]:before,[data-v-1d398f2d]:after,[data-v-1d398f2d]::backdrop{--tw-border-style:solid}}}.step-connector[data-v-1d398f2d]:not(.absolute){flex:1}.step-connector.absolute[data-v-1d398f2d]{top:9.1px;left:calc(11px - 50%);right:calc(50% + 11px)}.step-connector .horizontal-line[data-v-1d398f2d]{border-top-style:var(--tw-border-style);border-top-width:.4rem;border-color:var(--color-neutral-100,oklch(97% 0 0));display:block}.step-connector .horizontal-line[data-v-1d398f2d]:where(.dark,.dark *){border-color:var(--color-input-border,#d1d5db)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-32a8b35f],[data-v-32a8b35f]:before,[data-v-32a8b35f]:after,[data-v-32a8b35f]::backdrop{--tw-content:"";--tw-font-weight:initial}}}.step[data-v-32a8b35f]:not(.xs){flex-direction:column;flex:1;align-items:center;display:flex;position:relative}.step .step-content[data-v-32a8b35f]{flex-direction:column;align-items:center;display:flex}.step .step-content .step-state[data-v-32a8b35f]{z-index:1;height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);background-color:var(--color-neutral-100,oklch(97% 0 0));font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.step .step-content .step-state[data-v-32a8b35f]:where(.dark,.dark *){background-color:var(--color-input-border,#d1d5db)}.step .step-content .step-state.active[data-v-32a8b35f]:before{z-index:1;height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);opacity:.1;--tw-content:"";content:var(--tw-content);border-radius:3.40282e38px;position:absolute}.step .step-content .step-state .micro-icon[data-v-32a8b35f]{color:var(--color-white,#fff)}.step .step-content .label[data-v-32a8b35f]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.step .step-content .label.unfinished[data-v-32a8b35f]{color:var(--color-gray-450,#848b98)}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-102893cf],[data-v-102893cf]:before,[data-v-102893cf]:after,[data-v-102893cf]::backdrop{--tw-font-weight:initial}}}.stepper[data-v-102893cf]{z-index:1}.stepper.xs .wrapper[data-v-102893cf]{align-items:center}.stepper.xs .wrapper[data-v-102893cf] .step-connector:first-child .horizontal-line{border-top-left-radius:3.40282e38px;border-bottom-left-radius:3.40282e38px}.stepper.xs .wrapper[data-v-102893cf] .step-connector:last-child .horizontal-line{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.stepper[data-v-102893cf]:not(.xs){justify-content:space-between}.stepper.default[data-v-102893cf] .step-connector .active{border-color:var(--color-primary,#2563eb)}:is(.stepper.default[data-v-102893cf] .step-state.finished,.stepper.default[data-v-102893cf] .step-state.active,.stepper.default[data-v-102893cf] .step-state.active:before){background-color:var(--color-primary,#2563eb)}.stepper.default[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.error[data-v-102893cf] .step-connector .active{border-color:var(--color-error-tertiary,#e73c3e)}:is(.stepper.error[data-v-102893cf] .step-state.finished,.stepper.error[data-v-102893cf] .step-state.active,.stepper.error[data-v-102893cf] .step-state.active:before){background-color:var(--color-error-tertiary,#e73c3e)}.stepper.error[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.warning[data-v-102893cf] .step-connector .active{border-color:var(--color-amber-400,oklch(82.8% .189 84.429))}:is(.stepper.warning[data-v-102893cf] .step-state.finished,.stepper.warning[data-v-102893cf] .step-state.active,.stepper.warning[data-v-102893cf] .step-state.active:before){background-color:var(--color-amber-400,oklch(82.8% .189 84.429))}.stepper.warning[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper.success[data-v-102893cf] .step-connector .active{border-color:var(--color-success-tertiary,#22c55e)}:is(.stepper.success[data-v-102893cf] .step-state.finished,.stepper.success[data-v-102893cf] .step-state.active,.stepper.success[data-v-102893cf] .step-state.active:before){background-color:var(--color-success-tertiary,#22c55e)}.stepper.success[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.disabled[data-v-102893cf] .step-connector .active{background-color:var(--color-input-border,#d1d5db)}:is(.stepper.disabled[data-v-102893cf] .step-state.finished,.stepper.disabled[data-v-102893cf] .step-state.active,.stepper.disabled[data-v-102893cf] .step-state.active:before){background-color:var(--color-input-border,#d1d5db)}.stepper.disabled[data-v-102893cf] .step-state.active:before{background-color:var(--color-neutral-400,oklch(70.8% 0 0))}.stepper.disabled[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper .wrapper[data-v-102893cf]{flex-direction:row;display:flex;position:relative}.stepper .active-step[data-v-102893cf]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}@property --tw-font-weight{syntax:"*";inherits:false}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3fc06f56],[data-v-3fc06f56]:before,[data-v-3fc06f56]:after,[data-v-3fc06f56]::backdrop{--tw-border-style:solid}}}.filter-tabs[data-v-3fc06f56]{justify-content:space-between;gap:.5625rem;display:flex}[data-v-3fc06f56] .tab{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);padding-right:.625rem;padding-left:calc(var(--spacing,.25rem)*4);border-width:1px;flex-grow:1;justify-content:space-between;align-items:center;display:flex}[data-v-3fc06f56] .tab:not(.active){border-color:var(--color-border-primary,#d1d5db)}[data-v-3fc06f56] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}[data-v-3fc06f56] .tab.active{border-style:var(--tw-border-style);border-width:2px;padding-left:.9375rem;padding-right:.5625rem}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}.container{position:relative;height:100%;color:var(--color-body-text);font-family:var(--font-sans)}.container #probo-product-search-bar{outline:none}.container span.option{display:flex;gap:1rem;align-items:center}.container span.option .title{font-size:1.125rem;font-weight:600;display:block}.container span.option .subtitle{color:#6a7282;font-size:.875rem;line-height:1.25rem;margin-top:.25rem;display:block}`, vm = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, o] of t)
    a[r] = o;
  return a;
}, mm = { class: "container" }, gm = { key: 1 }, bm = {
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
    },
    hideDeliverySection: Boolean
  },
  setup(e) {
    const t = e, a = je(new ph({ proxy: "" }));
    de(a, () => {
      a.language && a.setLanguage(a.language);
    });
    const r = V({
      get: () => a.getConfig(),
      set: (o) => a.updateExternal ? a.setOption(o).getNextOption() : null
    });
    return at(async () => {
      window.connectConfigurator = a, t.proxy && (a.init({
        proxy: t.proxy,
        language: t.language,
        priceType: t.priceType,
        storeProductsLocally: t.storeProductsLocally,
        callbackUrl: t.callbackUrl,
        internalProductId: t.internalProductId,
        hideDeliverySection: t.hideDeliverySection
      }), t.productCode && await (await a.setProduct(t.productCode)).getNextOption());
    }), (o, i) => (w(), S("div", mm, [
      e.modal ? (w(), W(fm, {
        key: 0,
        part: "modal"
      }, {
        default: Z(() => [
          a.alert.title ? (w(), W(z(Mr), za(Ve({ key: 0 }, a.alert)), null, 16)) : N("", !0),
          G(z(gn), {
            modelValue: r.value,
            "onUpdate:modelValue": i[0] || (i[0] = (n) => r.value = n),
            template: a.options,
            "accordion-state": a.openState,
            loading: a.loading,
            "delivery-options": a.deliveryOptions,
            "hide-delivery-section": a.hideDeliverySection
          }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options", "hide-delivery-section"])
        ]),
        _: 1
      })) : (w(), S("div", gm, [
        a.alert.title ? (w(), W(z(Mr), za(Ve({ key: 0 }, a.alert)), null, 16)) : N("", !0),
        G(z(gn), {
          modelValue: r.value,
          "onUpdate:modelValue": i[1] || (i[1] = (n) => r.value = n),
          template: a.options,
          "accordion-state": a.openState,
          loading: a.loading,
          "delivery-options": a.deliveryOptions
        }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options"])
      ]))
    ]));
  }
}, hr = /* @__PURE__ */ vm(bm, [["styles", [hm]]]), wm = /* @__PURE__ */ Wc({
  ...hr,
  setup(e, t) {
    return Io(hr).use(du), hr.setup ? hr.setup(e, t) : null;
  }
});
customElements.define("connect-product-configurator", wm);
