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
}, un = () => !1, Vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Io = (e) => e.startsWith("onUpdate:"), Ee = Object.assign, Mo = (e, t) => {
  const a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}, nd = Object.prototype.hasOwnProperty, xe = (e, t) => nd.call(e, t), te = Array.isArray, xa = (e) => Ya(e) === "[object Map]", Ca = (e) => Ya(e) === "[object Set]", di = (e) => Ya(e) === "[object Date]", se = (e) => typeof e == "function", Oe = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", pn = (e) => (Se(e) || se(e)) && se(e.then) && se(e.catch), fn = Object.prototype.toString, Ya = (e) => fn.call(e), ld = (e) => Ya(e).slice(8, -1), Pr = (e) => Ya(e) === "[object Object]", No = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pa = /* @__PURE__ */ jo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((a) => t[a] || (t[a] = e(a)));
}, dd = /-\w/g, Le = jr(
  (e) => e.replace(dd, (t) => t.slice(1).toUpperCase())
), sd = /\B([A-Z])/g, Ge = jr(
  (e) => e.replace(sd, "-$1").toLowerCase()
), Ir = jr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xr = jr(
  (e) => e ? `on${Ir(e)}` : ""
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
}, Mr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, vo = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let si;
const Nr = () => si || (si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jt(e) {
  if (te(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const r = e[a], o = Oe(r) ? fd(r) : Jt(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Oe(e) || Se(e))
    return e;
}
const cd = /;(?![^(]*\))/g, ud = /:([^]+)/, pd = /\/\*[^]*?\*\//g;
function fd(e) {
  const t = {};
  return e.replace(pd, "").split(cd).forEach((a) => {
    if (a) {
      const r = a.split(ud);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ve(e) {
  let t = "";
  if (Oe(e))
    t = e;
  else if (te(e))
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
const hd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vd = /* @__PURE__ */ jo(hd);
function vn(e) {
  return !!e || e === "";
}
function md(e, t) {
  if (e.length !== t.length) return !1;
  let a = !0;
  for (let r = 0; a && r < e.length; r++)
    a = sa(e[r], t[r]);
  return a;
}
function sa(e, t) {
  if (e === t) return !0;
  let a = di(e), r = di(t);
  if (a || r)
    return a && r ? e.getTime() === t.getTime() : !1;
  if (a = ht(e), r = ht(t), a || r)
    return e === t;
  if (a = te(e), r = te(t), a || r)
    return a && r ? md(e, t) : !1;
  if (a = Se(e), r = Se(t), a || r) {
    if (!a || !r)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const n in e) {
      const l = e.hasOwnProperty(n), d = t.hasOwnProperty(n);
      if (l && !d || !l && d || !sa(e[n], t[n]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Bo(e, t) {
  return e.findIndex((a) => sa(a, t));
}
const mn = (e) => !!(e && e.__v_isRef === !0), U = (e) => Oe(e) ? e : e == null ? "" : te(e) || Se(e) && (e.toString === fn || !se(e.toString)) ? mn(e) ? U(e.value) : JSON.stringify(e, gn, 2) : String(e), gn = (e, t) => mn(t) ? gn(e, t.value) : xa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (a, [r, o], i) => (a[Qr(r, i) + " =>"] = o, a),
    {}
  )
} : Ca(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((a) => Qr(a))
} : ht(t) ? Qr(t) : Se(t) && !te(t) && !Pr(t) ? String(t) : t, Qr = (e, t = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ht(e) ? `Symbol(${(a = e.description) != null ? a : t})` : e
  );
};
function gd(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ie;
class bd {
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
function wd(e, t = !1) {
  Ie && Ie.cleanups.push(e);
}
let ze;
const eo = /* @__PURE__ */ new WeakSet();
class bn {
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
    r.version === -1 ? (r === a && (a = o), Ro(r), yd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
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
function yd(e) {
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
class xd {
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
    if (!ze || !pt || ze === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== ze)
      a = this.activeLink = new xd(ze, this), ze.deps ? (a.prevDep = ze.depsTail, ze.depsTail.nextDep = a, ze.depsTail = a) : ze.deps = ze.depsTail = a, Sn(a);
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
    o || (r.set(a, o = new Lr()), o.map = r, o.key = a), o.track();
  }
}
function Vt(e, t, a, r, o, i) {
  const n = go.get(e);
  if (!n) {
    La++;
    return;
  }
  const l = (d) => {
    d && d.trigger();
  };
  if (Do(), t === "clear")
    n.forEach(l);
  else {
    const d = te(e), c = d && No(a);
    if (d && a === "length") {
      const s = Number(r);
      n.forEach((u, p) => {
        (p === "length" || p === Da || !ht(p) && p >= s) && l(u);
      });
    } else
      switch ((a !== void 0 || n.has(void 0)) && l(n.get(a)), c && l(n.get(Da)), t) {
        case "add":
          d ? c && l(n.get("length")) : (l(n.get(na)), xa(e) && l(n.get(bo)));
          break;
        case "delete":
          d || (l(n.get(na)), xa(e) && l(n.get(bo)));
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
function Dr(e) {
  return Me(e = ye(e), "iterate", Da), e;
}
const kd = {
  __proto__: null,
  [Symbol.iterator]() {
    return to(this, Symbol.iterator, Pe);
  },
  concat(...e) {
    return ha(this).concat(
      ...e.map((t) => te(t) ? ha(t) : t)
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
  return r !== e && !nt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = a(i.value)), i;
  }), o;
}
const _d = Array.prototype;
function Et(e, t, a, r, o, i) {
  const n = Dr(e), l = n !== e && !nt(e), d = n[t];
  if (d !== _d[t]) {
    const u = d.apply(e, i);
    return l ? Pe(u) : u;
  }
  let c = a;
  n !== e && (l ? c = function(u, p) {
    return a.call(this, Pe(u), p, e);
  } : a.length > 2 && (c = function(u, p) {
    return a.call(this, u, p, e);
  }));
  const s = d.call(n, c, r);
  return l && o ? o(s) : s;
}
function ui(e, t, a, r) {
  const o = Dr(e);
  let i = a;
  return o !== e && (nt(e) ? a.length > 3 && (i = function(n, l, d) {
    return a.call(this, n, l, d, e);
  }) : i = function(n, l, d) {
    return a.call(this, n, Pe(l), d, e);
  }), o[t](i, ...r);
}
function ao(e, t, a) {
  const r = ye(e);
  Me(r, "iterate", Da);
  const o = r[t](...a);
  return (o === -1 || o === !1) && Ho(a[0]) ? (a[0] = ye(a[0]), r[t](...a)) : o;
}
function Oa(e, t, a = []) {
  Mt(), Do();
  const r = ye(e)[t].apply(e, a);
  return Fo(), Nt(), r;
}
const $d = /* @__PURE__ */ jo("__proto__,__v_isRef,__isVue"), Cn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
);
function Sd(e) {
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
      return r === (o ? i ? Id : An : i ? Tn : On).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const n = te(t);
    if (!o) {
      let d;
      if (n && (d = kd[a]))
        return d;
      if (a === "hasOwnProperty")
        return Sd;
    }
    const l = Reflect.get(
      t,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ae(t) ? t : r
    );
    if ((ht(a) ? Cn.has(a) : $d(a)) || (o || Me(t, "get", a), i))
      return l;
    if (Ae(l)) {
      const d = n && No(a) ? l : l.value;
      return o && Se(d) ? yo(d) : d;
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
      const d = Bt(i);
      if (!nt(r) && !Bt(r) && (i = ye(i), r = ye(r)), !te(t) && Ae(i) && !Ae(r))
        return d || (i.value = r), !0;
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
class Cd extends zn {
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
const zd = /* @__PURE__ */ new En(), Ed = /* @__PURE__ */ new Cd(), Od = /* @__PURE__ */ new En(!0);
const wo = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function Td(e, t, a) {
  return function(...r) {
    const o = this.__v_raw, i = ye(o), n = xa(i), l = e === "entries" || e === Symbol.iterator && n, d = e === "keys" && n, c = o[e](...r), s = a ? wo : t ? mr : Pe;
    return !t && Me(
      i,
      "iterate",
      d ? bo : na
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = c.next();
        return p ? { value: u, done: p } : {
          value: l ? [s(u[0]), s(u[1])] : s(u),
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
function Ad(e, t) {
  const a = {
    get(o) {
      const i = this.__v_raw, n = ye(i), l = ye(o);
      e || (Ze(o, l) && Me(n, "get", o), Me(n, "get", l));
      const { has: d } = ar(n), c = t ? wo : e ? mr : Pe;
      if (d.call(n, o))
        return c(i.get(o));
      if (d.call(n, l))
        return c(i.get(l));
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
      const n = this, l = n.__v_raw, d = ye(l), c = t ? wo : e ? mr : Pe;
      return !e && Me(d, "iterate", na), l.forEach((s, u) => o.call(i, c(s), c(u), n));
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
        const n = ye(this), { has: l, get: d } = ar(n);
        let c = l.call(n, o);
        c || (o = ye(o), c = l.call(n, o));
        const s = d.call(n, o);
        return n.set(o, i), c ? Ze(i, s) && Vt(n, "set", o, i) : Vt(n, "add", o, i), this;
      },
      delete(o) {
        const i = ye(this), { has: n, get: l } = ar(i);
        let d = n.call(i, o);
        d || (o = ye(o), d = n.call(i, o)), l && l.call(i, o);
        const c = i.delete(o);
        return d && Vt(i, "delete", o, void 0), c;
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
    a[o] = Td(o, e, t);
  }), a;
}
function Uo(e, t) {
  const a = Ad(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    xe(a, o) && o in r ? a : r,
    o,
    i
  );
}
const Vd = {
  get: /* @__PURE__ */ Uo(!1, !1)
}, Pd = {
  get: /* @__PURE__ */ Uo(!1, !0)
}, jd = {
  get: /* @__PURE__ */ Uo(!0, !1)
};
const On = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Id = /* @__PURE__ */ new WeakMap();
function Md(e) {
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
function Nd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Md(ld(e));
}
function Je(e) {
  return Bt(e) ? e : qo(
    e,
    !1,
    zd,
    Vd,
    On
  );
}
function Bd(e) {
  return qo(
    e,
    !1,
    Od,
    Pd,
    Tn
  );
}
function yo(e) {
  return qo(
    e,
    !0,
    Ed,
    jd,
    An
  );
}
function qo(e, t, a, r, o) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Nd(e);
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
function Ld(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && hn(e, "__v_skip", !0), e;
}
const Pe = (e) => Se(e) ? Je(e) : e, mr = (e) => Se(e) ? yo(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return Vn(e, !1);
}
function St(e) {
  return Vn(e, !0);
}
function Vn(e, t) {
  return Ae(e) ? e : new Dd(e, t);
}
class Dd {
  constructor(t, a) {
    this.dep = new Lr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? t : ye(t), this._value = a ? t : Pe(t), this.__v_isShallow = a;
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
  return se(e) ? e() : k(e);
}
const Fd = {
  get: (e, t, a) => t === "__v_raw" ? e : k(Reflect.get(e, t, a)),
  set: (e, t, a, r) => {
    const o = e[t];
    return Ae(o) && !Ae(a) ? (o.value = a, !0) : Reflect.set(e, t, a, r);
  }
};
function Pn(e) {
  return la(e) ? e : new Proxy(e, Fd);
}
class Rd {
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
function Ud(e) {
  return new Rd(e);
}
class qd {
  constructor(t, a, r) {
    this.fn = t, this.setter = a, this._value = void 0, this.dep = new Lr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = La - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = r;
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
function Hd(e, t, a = !1) {
  let r, o;
  return se(e) ? r = e : (r = e.get, o = e.set), new qd(r, o, a);
}
const or = {}, gr = /* @__PURE__ */ new WeakMap();
let ra;
function Kd(e, t = !1, a = ra) {
  if (a) {
    let r = gr.get(a);
    r || gr.set(a, r = []), r.push(e);
  }
}
function Wd(e, t, a = we) {
  const { immediate: r, deep: o, once: i, scheduler: n, augmentJob: l, call: d } = a, c = (m) => o ? m : nt(m) || o === !1 || o === 0 ? Pt(m, 1) : Pt(m);
  let s, u, p, h, f = !1, w = !1;
  if (Ae(e) ? (u = () => e.value, f = nt(e)) : la(e) ? (u = () => c(e), f = !0) : te(e) ? (w = !0, f = e.some((m) => la(m) || nt(m)), u = () => e.map((m) => {
    if (Ae(m))
      return m.value;
    if (la(m))
      return c(m);
    if (se(m))
      return d ? d(m, 2) : m();
  })) : se(e) ? t ? u = d ? () => d(e, 2) : e : u = () => {
    if (p) {
      Mt();
      try {
        p();
      } finally {
        Nt();
      }
    }
    const m = ra;
    ra = s;
    try {
      return d ? d(e, 3, [h]) : e(h);
    } finally {
      ra = m;
    }
  } : u = ut, t && o) {
    const m = u, $ = o === !0 ? 1 / 0 : o;
    u = () => Pt(m(), $);
  }
  const x = Lo(), b = () => {
    s.stop(), x && x.active && Mo(x.effects, s);
  };
  if (i && t) {
    const m = t;
    t = (...$) => {
      m(...$), b();
    };
  }
  let _ = w ? new Array(e.length).fill(or) : or;
  const S = (m) => {
    if (!(!(s.flags & 1) || !s.dirty && !m))
      if (t) {
        const $ = s.run();
        if (o || f || (w ? $.some((E, ae) => Ze(E, _[ae])) : Ze($, _))) {
          p && p();
          const E = ra;
          ra = s;
          try {
            const ae = [
              $,
              // pass undefined as the old value when it's changed for the first time
              _ === or ? void 0 : w && _[0] === or ? [] : _,
              h
            ];
            _ = $, d ? d(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            ra = E;
          }
        }
      } else
        s.run();
  };
  return l && l(S), s = new bn(u), s.scheduler = n ? () => n(S, !1) : S, h = (m) => Kd(m, !1, s), p = s.onStop = () => {
    const m = gr.get(s);
    if (m) {
      if (d)
        d(m, 4);
      else
        for (const $ of m) $();
      gr.delete(s);
    }
  }, t ? r ? S(!0) : _ = s.run() : n ? n(S.bind(null, !0), !0) : s.run(), b.pause = s.pause.bind(s), b.resume = s.resume.bind(s), b.stop = b, b;
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
function vt(e, t, a, r) {
  if (se(e)) {
    const o = Xa(e, t, a, r);
    return o && pn(o) && o.catch((i) => {
      Fr(i, t, a);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(vt(e[i], t, a, r));
    return o;
  }
}
function Fr(e, t, a, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: n } = t && t.appContext.config || we;
  if (t) {
    let l = t.parent;
    const d = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; l; ) {
      const s = l.ec;
      if (s) {
        for (let u = 0; u < s.length; u++)
          if (s[u](e, d, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Mt(), Xa(i, null, 10, [
        e,
        d,
        c
      ]), Nt();
      return;
    }
  }
  Zd(e, a, o, r, n);
}
function Zd(e, t, a, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Re = [];
let xt = -1;
const ka = [];
let Ft = null, ba = 0;
const jn = /* @__PURE__ */ Promise.resolve();
let br = null;
function Ct(e) {
  const t = br || jn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gd(e) {
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
    !(e.flags & 2) && t >= Fa(a) ? Re.push(e) : Re.splice(Gd(t), 0, e), e.flags |= 1, In();
  }
}
function In() {
  br || (br = jn.then(Bn));
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
    xt = -1, Re.length = 0, Nn(), br = null, (Re.length || ka.length) && Bn();
  }
}
let je = null, Ln = null;
function wr(e) {
  const t = je;
  return je = e, Ln = e && e.type.__scopeId || null, t;
}
function B(e, t = je, a) {
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
    let [i, n, l, d = we] = t[o];
    i && (se(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Pt(n), r.push({
      dir: i,
      instance: a,
      value: n,
      oldValue: void 0,
      arg: l,
      modifiers: d
    }));
  }
  return e;
}
function Qt(e, t, a, r) {
  const o = e.dirs, i = t && t.dirs;
  for (let n = 0; n < o.length; n++) {
    const l = o[n];
    i && (l.oldValue = i[n].value);
    let d = l.dir[r];
    d && (Mt(), vt(d, a, 8, [
      e.el,
      l,
      e,
      t
    ]), Nt());
  }
}
const Jd = Symbol("_vte"), Dn = (e) => e.__isTeleport, At = Symbol("_leaveCb"), ir = Symbol("_enterCb");
function Yd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return st(() => {
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
}, Xd = {
  name: "BaseTransition",
  props: Fn,
  setup(e, { slots: t }) {
    const a = mt(), r = Yd();
    return () => {
      const o = t.default && Hn(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Un(o), n = ye(e), { mode: l } = n;
      if (r.isLeaving)
        return ro(i);
      const d = hi(i);
      if (!d)
        return ro(i);
      let c = xo(
        d,
        n,
        r,
        a,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      d.type !== Ne && Ra(d, c);
      let s = a.subTree && hi(a.subTree);
      if (s && s.type !== Ne && !oa(s, d) && Rn(a).type !== Ne) {
        let u = xo(
          s,
          n,
          r,
          a
        );
        if (Ra(s, u), l === "out-in" && d.type !== Ne)
          return r.isLeaving = !0, u.afterLeave = () => {
            r.isLeaving = !1, a.job.flags & 8 || a.update(), delete u.afterLeave, s = void 0;
          }, ro(i);
        l === "in-out" && d.type !== Ne ? u.delayLeave = (p, h, f) => {
          const w = qn(
            r,
            s
          );
          w[String(s.key)] = s, p[At] = () => {
            h(), p[At] = void 0, delete c.delayedLeave, s = void 0;
          }, c.delayedLeave = () => {
            f(), delete c.delayedLeave, s = void 0;
          };
        } : s = void 0;
      } else s && (s = void 0);
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
const Qd = Xd;
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
    onBeforeEnter: d,
    onEnter: c,
    onAfterEnter: s,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: f,
    onLeaveCancelled: w,
    onBeforeAppear: x,
    onAppear: b,
    onAfterAppear: _,
    onAppearCancelled: S
  } = t, m = String(e.key), $ = qn(a, e), E = (Q, G) => {
    Q && vt(
      Q,
      r,
      9,
      G
    );
  }, ae = (Q, G) => {
    const ne = G[1];
    E(Q, G), te(Q) ? Q.every((F) => F.length <= 1) && ne() : Q.length <= 1 && ne();
  }, Y = {
    mode: n,
    persisted: l,
    beforeEnter(Q) {
      let G = d;
      if (!a.isMounted)
        if (i)
          G = x || d;
        else
          return;
      Q[At] && Q[At](
        !0
        /* cancelled */
      );
      const ne = $[m];
      ne && oa(e, ne) && ne.el[At] && ne.el[At](), E(G, [Q]);
    },
    enter(Q) {
      let G = c, ne = s, F = u;
      if (!a.isMounted)
        if (i)
          G = b || c, ne = _ || s, F = S || u;
        else
          return;
      let I = !1;
      const L = Q[ir] = (O) => {
        I || (I = !0, O ? E(F, [Q]) : E(ne, [Q]), Y.delayedLeave && Y.delayedLeave(), Q[ir] = void 0);
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
      E(p, [Q]);
      let F = !1;
      const I = Q[At] = (L) => {
        F || (F = !0, G(), L ? E(w, [Q]) : E(f, [Q]), Q[At] = void 0, $[ne] === e && delete $[ne]);
      };
      $[ne] = e, h ? ae(h, [Q, I]) : I();
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
  return Y;
}
function ro(e) {
  if (Rr(e))
    return e = Ht(e), e.children = null, e;
}
function hi(e) {
  if (!Rr(e))
    return Dn(e.type) && e.children ? Un(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: a } = e;
  if (a) {
    if (t & 16)
      return a[0];
    if (t & 32 && se(a.default))
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
function es(e, t) {
  return se(e) ? (
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
const yr = /* @__PURE__ */ new WeakMap();
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
  const i = r.shapeFlag & 4 ? Zr(r.component) : r.el, n = o ? null : i, { i: l, r: d } = e, c = t && t.r, s = l.refs === we ? l.refs = {} : l.refs, u = l.setupState, p = ye(u), h = u === we ? un : (f) => xe(p, f);
  if (c != null && c !== d) {
    if (vi(t), Oe(c))
      s[c] = null, h(c) && (u[c] = null);
    else if (Ae(c)) {
      c.value = null;
      const f = t;
      f.k && (s[f.k] = null);
    }
  }
  if (se(d))
    Xa(d, l, 12, [n, s]);
  else {
    const f = Oe(d), w = Ae(d);
    if (f || w) {
      const x = () => {
        if (e.f) {
          const b = f ? h(d) ? u[d] : s[d] : d.value;
          if (o)
            te(b) && Mo(b, i);
          else if (te(b))
            b.includes(i) || b.push(i);
          else if (f)
            s[d] = [i], h(d) && (u[d] = s[d]);
          else {
            const _ = [i];
            d.value = _, e.k && (s[e.k] = _);
          }
        } else f ? (s[d] = n, h(d) && (u[d] = n)) : w && (d.value = n, e.k && (s[e.k] = n));
      };
      if (n) {
        const b = () => {
          x(), yr.delete(e);
        };
        b.id = -1, yr.set(e, b), Xe(b, a);
      } else
        vi(e), x();
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
function ts(e, t) {
  Wn(e, "a", t);
}
function as(e, t) {
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
  if (Ur(t, r, a), a) {
    let o = a.parent;
    for (; o && o.parent; )
      Rr(o.parent.vnode) && rs(r, t, a, o), o = o.parent;
  }
}
function rs(e, t, a, r) {
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
      Mt();
      const l = er(a), d = vt(t, a, e, n);
      return l(), Nt(), d;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Lt = (e) => (t, a = Be) => {
  (!Ha || e === "sp") && Ur(e, (...r) => t(...r), a);
}, Zn = Lt("bm"), st = Lt("m"), Gn = Lt(
  "bu"
), os = Lt("u"), pa = Lt(
  "bum"
), qr = Lt("um"), is = Lt(
  "sp"
), ns = Lt("rtg"), ls = Lt("rtc");
function ds(e, t = Be) {
  Ur("ec", e, t);
}
const ss = "components", Jn = Symbol.for("v-ndc");
function $a(e) {
  return Oe(e) ? cs(ss, e, !1) || e : e || Jn;
}
function cs(e, t, a = !0, r = !1) {
  const o = je || Be;
  if (o) {
    const i = o.type;
    {
      const l = Gs(
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
function qt(e, t, a, r) {
  let o;
  const i = a, n = te(e);
  if (n || Oe(e)) {
    const l = n && la(e);
    let d = !1, c = !1;
    l && (d = !nt(e), c = Bt(e), e = Dr(e)), o = new Array(e.length);
    for (let s = 0, u = e.length; s < u; s++)
      o[s] = t(
        d ? c ? mr(Pe(e[s])) : Pe(e[s]) : e[s],
        s,
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
        (l, d) => t(l, d, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let d = 0, c = l.length; d < c; d++) {
        const s = l[d];
        o[d] = t(e[s], s, d, i);
      }
    }
  else
    o = [];
  return o;
}
function oo(e, t) {
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
    const c = Object.keys(a).length > 0;
    return t !== "default" && (a.name = t), y(), ee(
      _e,
      null,
      [q("slot", a, r && r())],
      c ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), y();
  const n = i && Yn(i(a)), l = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  n && n.key, d = ee(
    _e,
    {
      key: (l && !ht(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!n && r ? "_fb" : "")
    },
    n || (r ? r() : []),
    n && e._ === 1 ? 64 : -2
  );
  return !o && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), i && i._c && (i._d = !0), d;
}
function Yn(e) {
  return e.some((t) => qa(t) ? !(t.type === Ne || t.type === _e && !Yn(t.children)) : !0) ? e : null;
}
const ko = (e) => e ? yl(e) ? Zr(e) : ko(e.parent) : null, Na = (
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
    $watch: (e) => Ps.bind(e)
  })
), io = (e, t) => e !== we && !e.__isScriptSetup && xe(e, t), us = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: a, setupState: r, data: o, props: i, accessCache: n, type: l, appContext: d } = e;
    let c;
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
        if (io(r, t))
          return n[t] = 1, r[t];
        if (o !== we && xe(o, t))
          return n[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && xe(c, t)
        )
          return n[t] = 3, i[t];
        if (a !== we && xe(a, t))
          return n[t] = 4, a[t];
        _o && (n[t] = 0);
      }
    }
    const s = Na[t];
    let u, p;
    if (s)
      return t === "$attrs" && Me(e.attrs, "get", ""), s(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (a !== we && xe(a, t))
      return n[t] = 4, a[t];
    if (
      // global properties
      p = d.config.globalProperties, xe(p, t)
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
    let d, c;
    return !!(a[l] || e !== we && l[0] !== "$" && xe(e, l) || io(t, l) || (d = i[0]) && xe(d, l) || xe(r, l) || xe(Na, l) || xe(o.config.globalProperties, l) || (c = n.__cssModules) && c[l]);
  },
  defineProperty(e, t, a) {
    return a.get != null ? e._.accessCache[t] = 0 : xe(a, "value") && this.set(e, t, a.value, null), Reflect.defineProperty(e, t, a);
  }
};
function Xn() {
  return ps().slots;
}
function ps(e) {
  const t = mt();
  return t.setupContext || (t.setupContext = kl(t));
}
function xr(e) {
  return te(e) ? e.reduce(
    (t, a) => (t[a] = null, t),
    {}
  ) : e;
}
function zt(e, t) {
  return !e || !t ? e || t : te(e) && te(t) ? e.concat(t) : Ee({}, xr(e), xr(t));
}
let _o = !0;
function fs(e) {
  const t = el(e), a = e.proxy, r = e.ctx;
  _o = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: n,
    watch: l,
    provide: d,
    inject: c,
    // lifecycle
    created: s,
    beforeMount: u,
    mounted: p,
    beforeUpdate: h,
    updated: f,
    activated: w,
    deactivated: x,
    beforeDestroy: b,
    beforeUnmount: _,
    destroyed: S,
    unmounted: m,
    render: $,
    renderTracked: E,
    renderTriggered: ae,
    errorCaptured: Y,
    serverPrefetch: Q,
    // public API
    expose: G,
    inheritAttrs: ne,
    // assets
    components: F,
    directives: I,
    filters: L
  } = t;
  if (c && hs(c, r, null), n)
    for (const ce in n) {
      const oe = n[ce];
      se(oe) && (r[ce] = oe.bind(a));
    }
  if (o) {
    const ce = o.call(a, a);
    Se(ce) && (e.data = Je(ce));
  }
  if (_o = !0, i)
    for (const ce in i) {
      const oe = i[ce], He = se(oe) ? oe.bind(a, a) : se(oe.get) ? oe.get.bind(a, a) : ut, $e = !se(oe) && se(oe.set) ? oe.set.bind(a) : ut, Ve = P({
        get: He,
        set: $e
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (Te) => Ve.value = Te
      });
    }
  if (l)
    for (const ce in l)
      Qn(l[ce], r, a, ce);
  if (d) {
    const ce = se(d) ? d.call(a) : d;
    Reflect.ownKeys(ce).forEach((oe) => {
      So(oe, ce[oe]);
    });
  }
  s && gi(s, e, "c");
  function K(ce, oe) {
    te(oe) ? oe.forEach((He) => ce(He.bind(a))) : oe && ce(oe.bind(a));
  }
  if (K(Zn, u), K(st, p), K(Gn, h), K(os, f), K(ts, w), K(as, x), K(ds, Y), K(ls, E), K(ns, ae), K(pa, _), K(qr, m), K(is, Q), te(G))
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
  $ && e.render === ut && (e.render = $), ne != null && (e.inheritAttrs = ne), F && (e.components = F), I && (e.directives = I), Q && Kn(e);
}
function hs(e, t, a = ut) {
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
  if (Oe(e)) {
    const i = t[e];
    se(i) && he(o, i);
  } else if (se(e))
    he(o, e.bind(a));
  else if (Se(e))
    if (te(e))
      e.forEach((i) => Qn(i, t, a, r));
    else {
      const i = se(e.handler) ? e.handler.bind(a) : t[e.handler];
      se(i) && he(o, i, e);
    }
}
function el(e) {
  const t = e.type, { mixins: a, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: n }
  } = e.appContext, l = i.get(t);
  let d;
  return l ? d = l : !o.length && !a && !r ? d = t : (d = {}, o.length && o.forEach(
    (c) => kr(d, c, n, !0)
  ), kr(d, t, n)), Se(t) && i.set(t, d), d;
}
function kr(e, t, a, r = !1) {
  const { mixins: o, extends: i } = t;
  i && kr(e, i, a, !0), o && o.forEach(
    (n) => kr(e, n, a, !0)
  );
  for (const n in t)
    if (!(r && n === "expose")) {
      const l = vs[n] || a && a[n];
      e[n] = l ? l(e[n], t[n]) : t[n];
    }
  return e;
}
const vs = {
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
  watch: gs,
  // provide / inject
  provide: bi,
  inject: ms
};
function bi(e, t) {
  return t ? e ? function() {
    return Ee(
      se(e) ? e.call(this, this) : e,
      se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ms(e, t) {
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
    xr(e),
    xr(t ?? {})
  ) : t;
}
function gs(e, t) {
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
let bs = 0;
function ws(e, t) {
  return function(r, o = null) {
    se(r) || (r = Ee({}, r)), o != null && !Se(o) && (o = null);
    const i = tl(), n = /* @__PURE__ */ new WeakSet(), l = [];
    let d = !1;
    const c = i.app = {
      _uid: bs++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Xs,
      get config() {
        return i.config;
      },
      set config(s) {
      },
      use(s, ...u) {
        return n.has(s) || (s && se(s.install) ? (n.add(s), s.install(c, ...u)) : se(s) && (n.add(s), s(c, ...u))), c;
      },
      mixin(s) {
        return i.mixins.includes(s) || i.mixins.push(s), c;
      },
      component(s, u) {
        return u ? (i.components[s] = u, c) : i.components[s];
      },
      directive(s, u) {
        return u ? (i.directives[s] = u, c) : i.directives[s];
      },
      mount(s, u, p) {
        if (!d) {
          const h = c._ceVNode || q(r, o);
          return h.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(h, s, p), d = !0, c._container = s, s.__vue_app__ = c, Zr(h.component);
        }
      },
      onUnmount(s) {
        l.push(s);
      },
      unmount() {
        d && (vt(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(s, u) {
        return i.provides[s] = u, c;
      },
      runWithContext(s) {
        const u = da;
        da = c;
        try {
          return s();
        } finally {
          da = u;
        }
      }
    };
    return c;
  };
}
let da = null;
function So(e, t) {
  if (Be) {
    let a = Be.provides;
    const r = Be.parent && Be.parent.provides;
    r === a && (a = Be.provides = Object.create(r)), a[e] = t;
  }
}
function It(e, t, a = !1) {
  const r = mt();
  if (r || da) {
    let o = da ? da._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return a && se(t) ? t.call(r && r.proxy) : t;
  }
}
function al() {
  return !!(mt() || da);
}
const rl = {}, ol = () => Object.create(rl), il = (e) => Object.getPrototypeOf(e) === rl;
function ys(e, t, a, r = !1) {
  const o = {}, i = ol();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, o, i);
  for (const n in e.propsOptions[0])
    n in o || (o[n] = void 0);
  a ? e.props = r ? o : Bd(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function xs(e, t, a, r) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: n }
  } = e, l = ye(o), [d] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || n > 0) && !(n & 16)
  ) {
    if (n & 8) {
      const s = e.vnode.dynamicProps;
      for (let u = 0; u < s.length; u++) {
        let p = s[u];
        if (Kr(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (d)
          if (xe(i, p))
            h !== i[p] && (i[p] = h, c = !0);
          else {
            const f = Le(p);
            o[f] = Co(
              d,
              l,
              f,
              h,
              e,
              !1
            );
          }
        else
          h !== i[p] && (i[p] = h, c = !0);
      }
    }
  } else {
    nl(e, t, o, i) && (c = !0);
    let s;
    for (const u in l)
      (!t || // for camelCase
      !xe(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((s = Ge(u)) === u || !xe(t, s))) && (d ? a && // for camelCase
      (a[u] !== void 0 || // for kebab-case
      a[s] !== void 0) && (o[u] = Co(
        d,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (i !== l)
      for (const u in i)
        (!t || !xe(t, u)) && (delete i[u], c = !0);
  }
  c && Vt(e.attrs, "set", "");
}
function nl(e, t, a, r) {
  const [o, i] = e.propsOptions;
  let n = !1, l;
  if (t)
    for (let d in t) {
      if (Pa(d))
        continue;
      const c = t[d];
      let s;
      o && xe(o, s = Le(d)) ? !i || !i.includes(s) ? a[s] = c : (l || (l = {}))[s] = c : Kr(e.emitsOptions, d) || (!(d in r) || c !== r[d]) && (r[d] = c, n = !0);
    }
  if (i) {
    const d = ye(a), c = l || we;
    for (let s = 0; s < i.length; s++) {
      const u = i[s];
      a[u] = Co(
        o,
        d,
        u,
        c[u],
        e,
        !xe(c, u)
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
      const d = n.default;
      if (n.type !== Function && !n.skipFactory && se(d)) {
        const { propsDefaults: c } = o;
        if (a in c)
          r = c[a];
        else {
          const s = er(o);
          r = c[a] = d.call(
            null,
            t
          ), s();
        }
      } else
        r = d;
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
const ks = /* @__PURE__ */ new WeakMap();
function ll(e, t, a = !1) {
  const r = a ? ks : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, n = {}, l = [];
  let d = !1;
  if (!se(e)) {
    const s = (u) => {
      d = !0;
      const [p, h] = ll(u, t, !0);
      Ee(n, p), h && l.push(...h);
    };
    !a && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!i && !d)
    return Se(e) && r.set(e, ya), ya;
  if (te(i))
    for (let s = 0; s < i.length; s++) {
      const u = Le(i[s]);
      yi(u) && (n[u] = we);
    }
  else if (i)
    for (const s in i) {
      const u = Le(s);
      if (yi(u)) {
        const p = i[s], h = n[u] = te(p) || se(p) ? { type: p } : Ee({}, p), f = h.type;
        let w = !1, x = !0;
        if (te(f))
          for (let b = 0; b < f.length; ++b) {
            const _ = f[b], S = se(_) && _.name;
            if (S === "Boolean") {
              w = !0;
              break;
            } else S === "String" && (x = !1);
          }
        else
          w = se(f) && f.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = w, h[
          1
          /* shouldCastTrue */
        ] = x, (w || xe(h, "default")) && l.push(u);
      }
    }
  const c = [n, l];
  return Se(e) && r.set(e, c), c;
}
function yi(e) {
  return e[0] !== "$" && !Pa(e);
}
const Wo = (e) => e === "_" || e === "_ctx" || e === "$stable", Zo = (e) => te(e) ? e.map(_t) : [_t(e)], _s = (e, t, a) => {
  if (t._n)
    return t;
  const r = B((...o) => Zo(t(...o)), a);
  return r._c = !1, r;
}, dl = (e, t, a) => {
  const r = e._ctx;
  for (const o in e) {
    if (Wo(o)) continue;
    const i = e[o];
    if (se(i))
      t[o] = _s(o, i, r);
    else if (i != null) {
      const n = Zo(i);
      t[o] = () => n;
    }
  }
}, sl = (e, t) => {
  const a = Zo(t);
  e.slots.default = () => a;
}, cl = (e, t, a) => {
  for (const r in t)
    (a || !Wo(r)) && (e[r] = t[r]);
}, $s = (e, t, a) => {
  const r = e.slots = ol();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (cl(r, t, a), a && hn(r, "_", o, !0)) : dl(t, r);
  } else t && sl(e, t);
}, Ss = (e, t, a) => {
  const { vnode: r, slots: o } = e;
  let i = !0, n = we;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? a && l === 1 ? i = !1 : cl(o, t, a) : (i = !t.$stable, dl(t, o)), n = t;
  } else t && (sl(e, t), n = { default: 1 });
  if (i)
    for (const l in o)
      !Wo(l) && n[l] == null && delete o[l];
}, Xe = Ds;
function Cs(e) {
  return zs(e);
}
function zs(e, t) {
  const a = Nr();
  a.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: i,
    createElement: n,
    createText: l,
    createComment: d,
    setText: c,
    setElementText: s,
    parentNode: u,
    nextSibling: p,
    setScopeId: h = ut,
    insertStaticContent: f
  } = e, w = (v, g, C, j = null, T = null, A = null, Z = void 0, R = null, D = !!g.dynamicChildren) => {
    if (v === g)
      return;
    v && !oa(v, g) && (j = tt(v), Te(v, T, A, !0), v = null), g.patchFlag === -2 && (D = !1, g.dynamicChildren = null);
    const { type: V, ref: ie, shapeFlag: J } = g;
    switch (V) {
      case Wr:
        x(v, g, C, j);
        break;
      case Ne:
        b(v, g, C, j);
        break;
      case cr:
        v == null && _(g, C, j, Z);
        break;
      case _e:
        F(
          v,
          g,
          C,
          j,
          T,
          A,
          Z,
          R,
          D
        );
        break;
      default:
        J & 1 ? $(
          v,
          g,
          C,
          j,
          T,
          A,
          Z,
          R,
          D
        ) : J & 6 ? I(
          v,
          g,
          C,
          j,
          T,
          A,
          Z,
          R,
          D
        ) : (J & 64 || J & 128) && V.process(
          v,
          g,
          C,
          j,
          T,
          A,
          Z,
          R,
          D,
          za
        );
    }
    ie != null && T ? Ma(ie, v && v.ref, A, g || v, !g) : ie == null && v && v.ref != null && Ma(v.ref, null, A, v, !0);
  }, x = (v, g, C, j) => {
    if (v == null)
      r(
        g.el = l(g.children),
        C,
        j
      );
    else {
      const T = g.el = v.el;
      g.children !== v.children && c(T, g.children);
    }
  }, b = (v, g, C, j) => {
    v == null ? r(
      g.el = d(g.children || ""),
      C,
      j
    ) : g.el = v.el;
  }, _ = (v, g, C, j) => {
    [v.el, v.anchor] = f(
      v.children,
      g,
      C,
      j,
      v.el,
      v.anchor
    );
  }, S = ({ el: v, anchor: g }, C, j) => {
    let T;
    for (; v && v !== g; )
      T = p(v), r(v, C, j), v = T;
    r(g, C, j);
  }, m = ({ el: v, anchor: g }) => {
    let C;
    for (; v && v !== g; )
      C = p(v), o(v), v = C;
    o(g);
  }, $ = (v, g, C, j, T, A, Z, R, D) => {
    if (g.type === "svg" ? Z = "svg" : g.type === "math" && (Z = "mathml"), v == null)
      E(
        g,
        C,
        j,
        T,
        A,
        Z,
        R,
        D
      );
    else {
      const V = v.el && v.el._isVueCE ? v.el : null;
      try {
        V && V._beginPatch(), Q(
          v,
          g,
          T,
          A,
          Z,
          R,
          D
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, E = (v, g, C, j, T, A, Z, R) => {
    let D, V;
    const { props: ie, shapeFlag: J, transition: re, dirs: de } = v;
    if (D = v.el = n(
      v.type,
      A,
      ie && ie.is,
      ie
    ), J & 8 ? s(D, v.children) : J & 16 && Y(
      v.children,
      D,
      null,
      j,
      T,
      no(v, A),
      Z,
      R
    ), de && Qt(v, null, j, "created"), ae(D, v, v.scopeId, Z, j), ie) {
      for (const Ce in ie)
        Ce !== "value" && !Pa(Ce) && i(D, Ce, null, ie[Ce], A, j);
      "value" in ie && i(D, "value", null, ie.value, A), (V = ie.onVnodeBeforeMount) && yt(V, j, v);
    }
    de && Qt(v, null, j, "beforeMount");
    const be = Es(T, re);
    be && re.beforeEnter(D), r(D, g, C), ((V = ie && ie.onVnodeMounted) || be || de) && Xe(() => {
      V && yt(V, j, v), be && re.enter(D), de && Qt(v, null, j, "mounted");
    }, T);
  }, ae = (v, g, C, j, T) => {
    if (C && h(v, C), j)
      for (let A = 0; A < j.length; A++)
        h(v, j[A]);
    if (T) {
      let A = T.subTree;
      if (g === A || gl(A.type) && (A.ssContent === g || A.ssFallback === g)) {
        const Z = T.vnode;
        ae(
          v,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          T.parent
        );
      }
    }
  }, Y = (v, g, C, j, T, A, Z, R, D = 0) => {
    for (let V = D; V < v.length; V++) {
      const ie = v[V] = R ? Rt(v[V]) : _t(v[V]);
      w(
        null,
        ie,
        g,
        C,
        j,
        T,
        A,
        Z,
        R
      );
    }
  }, Q = (v, g, C, j, T, A, Z) => {
    const R = g.el = v.el;
    let { patchFlag: D, dynamicChildren: V, dirs: ie } = g;
    D |= v.patchFlag & 16;
    const J = v.props || we, re = g.props || we;
    let de;
    if (C && ea(C, !1), (de = re.onVnodeBeforeUpdate) && yt(de, C, g, v), ie && Qt(g, v, C, "beforeUpdate"), C && ea(C, !0), (J.innerHTML && re.innerHTML == null || J.textContent && re.textContent == null) && s(R, ""), V ? G(
      v.dynamicChildren,
      V,
      R,
      C,
      j,
      no(g, T),
      A
    ) : Z || oe(
      v,
      g,
      R,
      null,
      C,
      j,
      no(g, T),
      A,
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
      D & 1 && v.children !== g.children && s(R, g.children);
    } else !Z && V == null && ne(R, J, re, C, T);
    ((de = re.onVnodeUpdated) || ie) && Xe(() => {
      de && yt(de, C, g, v), ie && Qt(g, v, C, "updated");
    }, j);
  }, G = (v, g, C, j, T, A, Z) => {
    for (let R = 0; R < g.length; R++) {
      const D = v[R], V = g[R], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !oa(D, V) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? u(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      w(
        D,
        V,
        ie,
        null,
        j,
        T,
        A,
        Z,
        !0
      );
    }
  }, ne = (v, g, C, j, T) => {
    if (g !== C) {
      if (g !== we)
        for (const A in g)
          !Pa(A) && !(A in C) && i(
            v,
            A,
            g[A],
            null,
            T,
            j
          );
      for (const A in C) {
        if (Pa(A)) continue;
        const Z = C[A], R = g[A];
        Z !== R && A !== "value" && i(v, A, R, Z, T, j);
      }
      "value" in C && i(v, "value", g.value, C.value, T);
    }
  }, F = (v, g, C, j, T, A, Z, R, D) => {
    const V = g.el = v ? v.el : l(""), ie = g.anchor = v ? v.anchor : l("");
    let { patchFlag: J, dynamicChildren: re, slotScopeIds: de } = g;
    de && (R = R ? R.concat(de) : de), v == null ? (r(V, C, j), r(ie, C, j), Y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      C,
      ie,
      T,
      A,
      Z,
      R,
      D
    )) : J > 0 && J & 64 && re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (G(
      v.dynamicChildren,
      re,
      C,
      T,
      A,
      Z,
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
      A,
      Z,
      R,
      D
    );
  }, I = (v, g, C, j, T, A, Z, R, D) => {
    g.slotScopeIds = R, v == null ? g.shapeFlag & 512 ? T.ctx.activate(
      g,
      C,
      j,
      Z,
      D
    ) : L(
      g,
      C,
      j,
      T,
      A,
      Z,
      D
    ) : O(v, g, D);
  }, L = (v, g, C, j, T, A, Z) => {
    const R = v.component = Hs(
      v,
      j,
      T
    );
    if (Rr(v) && (R.ctx.renderer = za), Ks(R, !1, Z), R.asyncDep) {
      if (T && T.registerDep(R, K, Z), !v.el) {
        const D = R.subTree = q(Ne);
        b(null, D, g, C), v.placeholder = D.el;
      }
    } else
      K(
        R,
        v,
        g,
        C,
        T,
        A,
        Z
      );
  }, O = (v, g, C) => {
    const j = g.component = v.component;
    if (Bs(v, g, C))
      if (j.asyncDep && !j.asyncResolved) {
        ce(j, g, C);
        return;
      } else
        j.next = g, j.update();
    else
      g.el = v.el, j.vnode = g;
  }, K = (v, g, C, j, T, A, Z) => {
    const R = () => {
      if (v.isMounted) {
        let { next: J, bu: re, u: de, parent: be, vnode: Ce } = v;
        {
          const bt = pl(v);
          if (bt) {
            J && (J.el = Ce.el, ce(v, J, Z)), bt.asyncDep.then(() => {
              v.isUnmounted || R();
            });
            return;
          }
        }
        let ke = J, Ke;
        ea(v, !1), J ? (J.el = Ce.el, ce(v, J, Z)) : J = Ce, re && sr(re), (Ke = J.props && J.props.onVnodeBeforeUpdate) && yt(Ke, be, J, Ce), ea(v, !0);
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
          A
        ), J.el = We.el, ke === null && Ls(v, We.el), de && Xe(de, T), (Ke = J.props && J.props.onVnodeUpdated) && Xe(
          () => yt(Ke, be, J, Ce),
          T
        );
      } else {
        let J;
        const { el: re, props: de } = g, { bm: be, m: Ce, parent: ke, root: Ke, type: We } = v, gt = _a(g);
        ea(v, !1), be && sr(be), !gt && (J = de && de.onVnodeBeforeMount) && yt(J, ke, g), ea(v, !0);
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
            A
          ), g.el = bt.el;
        }
        if (Ce && Xe(Ce, T), !gt && (J = de && de.onVnodeMounted)) {
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
    const V = v.update = D.run.bind(D), ie = v.job = D.runIfDirty.bind(D);
    ie.i = v, ie.id = v.uid, D.scheduler = () => Ko(ie), ea(v, !0), V();
  }, ce = (v, g, C) => {
    g.component = v;
    const j = v.vnode.props;
    v.vnode = g, v.next = null, xs(v, g.props, j, C), Ss(v, g.children, C), Mt(), fi(v), Nt();
  }, oe = (v, g, C, j, T, A, Z, R, D = !1) => {
    const V = v && v.children, ie = v ? v.shapeFlag : 0, J = g.children, { patchFlag: re, shapeFlag: de } = g;
    if (re > 0) {
      if (re & 128) {
        $e(
          V,
          J,
          C,
          j,
          T,
          A,
          Z,
          R,
          D
        );
        return;
      } else if (re & 256) {
        He(
          V,
          J,
          C,
          j,
          T,
          A,
          Z,
          R,
          D
        );
        return;
      }
    }
    de & 8 ? (ie & 16 && ge(V, T, A), J !== V && s(C, J)) : ie & 16 ? de & 16 ? $e(
      V,
      J,
      C,
      j,
      T,
      A,
      Z,
      R,
      D
    ) : ge(V, T, A, !0) : (ie & 8 && s(C, ""), de & 16 && Y(
      J,
      C,
      j,
      T,
      A,
      Z,
      R,
      D
    ));
  }, He = (v, g, C, j, T, A, Z, R, D) => {
    v = v || ya, g = g || ya;
    const V = v.length, ie = g.length, J = Math.min(V, ie);
    let re;
    for (re = 0; re < J; re++) {
      const de = g[re] = D ? Rt(g[re]) : _t(g[re]);
      w(
        v[re],
        de,
        C,
        null,
        T,
        A,
        Z,
        R,
        D
      );
    }
    V > ie ? ge(
      v,
      T,
      A,
      !0,
      !1,
      J
    ) : Y(
      g,
      C,
      j,
      T,
      A,
      Z,
      R,
      D,
      J
    );
  }, $e = (v, g, C, j, T, A, Z, R, D) => {
    let V = 0;
    const ie = g.length;
    let J = v.length - 1, re = ie - 1;
    for (; V <= J && V <= re; ) {
      const de = v[V], be = g[V] = D ? Rt(g[V]) : _t(g[V]);
      if (oa(de, be))
        w(
          de,
          be,
          C,
          null,
          T,
          A,
          Z,
          R,
          D
        );
      else
        break;
      V++;
    }
    for (; V <= J && V <= re; ) {
      const de = v[J], be = g[re] = D ? Rt(g[re]) : _t(g[re]);
      if (oa(de, be))
        w(
          de,
          be,
          C,
          null,
          T,
          A,
          Z,
          R,
          D
        );
      else
        break;
      J--, re--;
    }
    if (V > J) {
      if (V <= re) {
        const de = re + 1, be = de < ie ? g[de].el : j;
        for (; V <= re; )
          w(
            null,
            g[V] = D ? Rt(g[V]) : _t(g[V]),
            C,
            be,
            T,
            A,
            Z,
            R,
            D
          ), V++;
      }
    } else if (V > re)
      for (; V <= J; )
        Te(v[V], T, A, !0), V++;
    else {
      const de = V, be = V, Ce = /* @__PURE__ */ new Map();
      for (V = be; V <= re; V++) {
        const Ye = g[V] = D ? Rt(g[V]) : _t(g[V]);
        Ye.key != null && Ce.set(Ye.key, V);
      }
      let ke, Ke = 0;
      const We = re - be + 1;
      let gt = !1, bt = 0;
      const Ea = new Array(We);
      for (V = 0; V < We; V++) Ea[V] = 0;
      for (V = de; V <= J; V++) {
        const Ye = v[V];
        if (Ke >= We) {
          Te(Ye, T, A, !0);
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
        wt === void 0 ? Te(Ye, T, A, !0) : (Ea[wt - be] = V + 1, wt >= bt ? bt = wt : gt = !0, w(
          Ye,
          g[wt],
          C,
          null,
          T,
          A,
          Z,
          R,
          D
        ), Ke++);
      }
      const ii = gt ? Os(Ea) : ya;
      for (ke = ii.length - 1, V = We - 1; V >= 0; V--) {
        const Ye = be + V, wt = g[Ye], ni = g[Ye + 1], li = Ye + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          ni.el || ni.placeholder
        ) : j;
        Ea[V] === 0 ? w(
          null,
          wt,
          C,
          li,
          T,
          A,
          Z,
          R,
          D
        ) : gt && (ke < 0 || V !== ii[ke] ? Ve(wt, C, li, 2) : ke--);
      }
    }
  }, Ve = (v, g, C, j, T = null) => {
    const { el: A, type: Z, transition: R, children: D, shapeFlag: V } = v;
    if (V & 6) {
      Ve(v.component.subTree, g, C, j);
      return;
    }
    if (V & 128) {
      v.suspense.move(g, C, j);
      return;
    }
    if (V & 64) {
      Z.move(v, g, C, za);
      return;
    }
    if (Z === _e) {
      r(A, g, C);
      for (let J = 0; J < D.length; J++)
        Ve(D[J], g, C, j);
      r(v.anchor, g, C);
      return;
    }
    if (Z === cr) {
      S(v, g, C);
      return;
    }
    if (j !== 2 && V & 1 && R)
      if (j === 0)
        R.beforeEnter(A), r(A, g, C), Xe(() => R.enter(A), T);
      else {
        const { leave: J, delayLeave: re, afterLeave: de } = R, be = () => {
          v.ctx.isUnmounted ? o(A) : r(A, g, C);
        }, Ce = () => {
          A._isLeaving && A[At](
            !0
            /* cancelled */
          ), J(A, () => {
            be(), de && de();
          });
        };
        re ? re(A, be, Ce) : Ce();
      }
    else
      r(A, g, C);
  }, Te = (v, g, C, j = !1, T = !1) => {
    const {
      type: A,
      props: Z,
      ref: R,
      children: D,
      dynamicChildren: V,
      shapeFlag: ie,
      patchFlag: J,
      dirs: re,
      cacheIndex: de
    } = v;
    if (J === -2 && (T = !1), R != null && (Mt(), Ma(R, null, C, v, !0), Nt()), de != null && (g.renderCache[de] = void 0), ie & 256) {
      g.ctx.deactivate(v);
      return;
    }
    const be = ie & 1 && re, Ce = !_a(v);
    let ke;
    if (Ce && (ke = Z && Z.onVnodeBeforeUnmount) && yt(ke, g, v), ie & 6)
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
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== _e || J > 0 && J & 64) ? ge(
        V,
        g,
        C,
        !1,
        !0
      ) : (A === _e && J & 384 || !T && ie & 16) && ge(D, g, C), j && W(v);
    }
    (Ce && (ke = Z && Z.onVnodeUnmounted) || be) && Xe(() => {
      ke && yt(ke, g, v), be && Qt(v, null, g, "unmounted");
    }, C);
  }, W = (v) => {
    const { type: g, el: C, anchor: j, transition: T } = v;
    if (g === _e) {
      me(C, j);
      return;
    }
    if (g === cr) {
      m(v);
      return;
    }
    const A = () => {
      o(C), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (v.shapeFlag & 1 && T && !T.persisted) {
      const { leave: Z, delayLeave: R } = T, D = () => Z(C, A);
      R ? R(v.el, A, D) : D();
    } else
      A();
  }, me = (v, g) => {
    let C;
    for (; v !== g; )
      C = p(v), o(v), v = C;
    o(g);
  }, fe = (v, g, C) => {
    const { bum: j, scope: T, job: A, subTree: Z, um: R, m: D, a: V } = v;
    xi(D), xi(V), j && sr(j), T.stop(), A && (A.flags |= 8, Te(Z, v, g, C)), R && Xe(R, g), Xe(() => {
      v.isUnmounted = !0;
    }, g);
  }, ge = (v, g, C, j = !1, T = !1, A = 0) => {
    for (let Z = A; Z < v.length; Z++)
      Te(v[Z], g, C, j, T);
  }, tt = (v) => {
    if (v.shapeFlag & 6)
      return tt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const g = p(v.anchor || v.el), C = g && g[Jd];
    return C ? p(C) : g;
  };
  let fa = !1;
  const oi = (v, g, C) => {
    v == null ? g._vnode && Te(g._vnode, null, null, !0) : w(
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
    um: Te,
    m: Ve,
    r: W,
    mt: L,
    mc: Y,
    pc: oe,
    pbc: G,
    n: tt,
    o: e
  };
  return {
    render: oi,
    hydrate: void 0,
    createApp: ws(oi)
  };
}
function no({ type: e, props: t }, a) {
  return a === "svg" && e === "foreignObject" || a === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : a;
}
function ea({ effect: e, job: t }, a) {
  a ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Es(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ul(e, t, a = !1) {
  const r = e.children, o = t.children;
  if (te(r) && te(o))
    for (let i = 0; i < r.length; i++) {
      const n = r[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Rt(o[i]), l.el = n.el), !a && l.patchFlag !== -2 && ul(n, l)), l.type === Wr && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = n.el), l.type === Ne && !l.el && (l.el = n.el);
    }
}
function Os(e) {
  const t = e.slice(), a = [0];
  let r, o, i, n, l;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const c = e[r];
    if (c !== 0) {
      if (o = a[a.length - 1], e[o] < c) {
        t[r] = o, a.push(r);
        continue;
      }
      for (i = 0, n = a.length - 1; i < n; )
        l = i + n >> 1, e[a[l]] < c ? i = l + 1 : n = l;
      c < e[a[i]] && (i > 0 && (t[r] = a[i - 1]), a[i] = r);
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
const Ts = Symbol.for("v-scx"), As = () => It(Ts);
function fl(e, t) {
  return Hr(e, null, t);
}
function Vs(e, t) {
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
  const { immediate: r, deep: o, flush: i, once: n } = a, l = Ee({}, a), d = t && r || !t && i !== "post";
  let c;
  if (Ha) {
    if (i === "sync") {
      const h = As();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!d) {
      const h = () => {
      };
      return h.stop = ut, h.resume = ut, h.pause = ut, h;
    }
  }
  const s = Be;
  l.call = (h, f, w) => vt(h, s, f, w);
  let u = !1;
  i === "post" ? l.scheduler = (h) => {
    Xe(h, s && s.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (h, f) => {
    f ? h() : Ko(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, s && (h.id = s.uid, h.i = s));
  };
  const p = Wd(e, t, l);
  return Ha && (c ? c.push(p) : d && p()), p;
}
function Ps(e, t, a) {
  const r = this.proxy, o = Oe(e) ? e.includes(".") ? hl(r, e) : () => r[e] : e.bind(r, r);
  let i;
  se(t) ? i = t : (i = t.handler, a = t);
  const n = er(this), l = Hr(o, i.bind(r), a);
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
  const r = mt(), o = Le(t), i = Ge(t), n = vl(e, o), l = Ud((d, c) => {
    let s, u = we, p;
    return Vs(() => {
      const h = e[o];
      Ze(s, h) && (s = h, c());
    }), {
      get() {
        return d(), a.get ? a.get(s) : s;
      },
      set(h) {
        const f = a.set ? a.set(h) : h;
        if (!Ze(f, s) && !(u !== we && Ze(h, u)))
          return;
        const w = r.vnode.props;
        w && // check if parent has passed v-model
        (t in w || o in w || i in w) && (`onUpdate:${t}` in w || `onUpdate:${o}` in w || `onUpdate:${i}` in w) || (s = h, c()), r.emit(`update:${t}`, f), Ze(h, f) && Ze(h, u) && !Ze(f, p) && c(), u = h, p = f;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let d = 0;
    return {
      next() {
        return d < 2 ? { value: d++ ? n || we : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const vl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Ge(t)}Modifiers`];
function js(e, t, ...a) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || we;
  let o = a;
  const i = t.startsWith("update:"), n = i && vl(r, t.slice(7));
  n && (n.trim && (o = a.map((s) => Oe(s) ? s.trim() : s)), n.number && (o = a.map(Mr)));
  let l, d = r[l = Xr(t)] || // also try camelCase event handler (#2249)
  r[l = Xr(Le(t))];
  !d && i && (d = r[l = Xr(Ge(t))]), d && vt(
    d,
    e,
    6,
    o
  );
  const c = r[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, vt(
      c,
      e,
      6,
      o
    );
  }
}
const Is = /* @__PURE__ */ new WeakMap();
function ml(e, t, a = !1) {
  const r = a ? Is : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let n = {}, l = !1;
  if (!se(e)) {
    const d = (c) => {
      const s = ml(c, t, !0);
      s && (l = !0, Ee(n, s));
    };
    !a && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !l ? (Se(e) && r.set(e, null), null) : (te(i) ? i.forEach((d) => n[d] = null) : Ee(n, i), Se(e) && r.set(e, n), n);
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
    emit: d,
    render: c,
    renderCache: s,
    props: u,
    data: p,
    setupState: h,
    ctx: f,
    inheritAttrs: w
  } = e, x = wr(e);
  let b, _;
  try {
    if (a.shapeFlag & 4) {
      const m = o || r, $ = m;
      b = _t(
        c.call(
          $,
          m,
          s,
          u,
          h,
          p,
          f
        )
      ), _ = l;
    } else {
      const m = t;
      b = _t(
        m.length > 1 ? m(
          u,
          { attrs: l, slots: n, emit: d }
        ) : m(
          u,
          null
        )
      ), _ = t.props ? l : Ms(l);
    }
  } catch (m) {
    Ba.length = 0, Fr(m, e, 1), b = q(Ne);
  }
  let S = b;
  if (_ && w !== !1) {
    const m = Object.keys(_), { shapeFlag: $ } = S;
    m.length && $ & 7 && (i && m.some(Io) && (_ = Ns(
      _,
      i
    )), S = Ht(S, _, !1, !0));
  }
  return a.dirs && (S = Ht(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(a.dirs) : a.dirs), a.transition && Ra(S, a.transition), b = S, wr(x), b;
}
const Ms = (e) => {
  let t;
  for (const a in e)
    (a === "class" || a === "style" || Vr(a)) && ((t || (t = {}))[a] = e[a]);
  return t;
}, Ns = (e, t) => {
  const a = {};
  for (const r in e)
    (!Io(r) || !(r.slice(9) in t)) && (a[r] = e[r]);
  return a;
};
function Bs(e, t, a) {
  const { props: r, children: o, component: i } = e, { props: n, children: l, patchFlag: d } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (a && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? _i(r, n, c) : !!n;
    if (d & 8) {
      const s = t.dynamicProps;
      for (let u = 0; u < s.length; u++) {
        const p = s[u];
        if (n[p] !== r[p] && !Kr(c, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === n ? !1 : r ? n ? _i(r, n, c) : !0 : !!n;
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
function Ls({ vnode: e, parent: t }, a) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = a, t = t.parent;
    else
      break;
  }
}
const gl = (e) => e.__isSuspense;
function Ds(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
const _e = Symbol.for("v-fgt"), Wr = Symbol.for("v-txt"), Ne = Symbol.for("v-cmt"), cr = Symbol.for("v-stc"), Ba = [];
let Qe = null;
function y(e = !1) {
  Ba.push(Qe = e ? null : []);
}
function Fs() {
  Ba.pop(), Qe = Ba[Ba.length - 1] || null;
}
let Ua = 1;
function _r(e, t = !1) {
  Ua += e, e < 0 && Qe && t && (Qe.hasOnce = !0);
}
function bl(e) {
  return e.dynamicChildren = Ua > 0 ? Qe || ya : null, Fs(), Ua > 0 && Qe && Qe.push(e), e;
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
const wl = ({ key: e }) => e ?? null, ur = ({
  ref: e,
  ref_key: t,
  ref_for: a
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || Ae(e) || se(e) ? { i: je, r: e, k: t, f: !!a } : e : null);
function N(e, t = null, a = null, r = 0, o = null, i = e === _e ? 0 : 1, n = !1, l = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wl(t),
    ref: t && ur(t),
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
  return l ? (Jo(d, a), i & 128 && e.normalize(d)) : a && (d.shapeFlag |= Oe(a) ? 8 : 16), Ua > 0 && // avoid a block node from tracking itself
  !n && // has current parent block
  Qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Qe.push(d), d;
}
const q = Rs;
function Rs(e, t = null, a = null, r = 0, o = null, i = !1) {
  if ((!e || e === Jn) && (e = Ne), qa(e)) {
    const l = Ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return a && Jo(l, a), Ua > 0 && !i && Qe && (l.shapeFlag & 6 ? Qe[Qe.indexOf(e)] = l : Qe.push(l)), l.patchFlag = -2, l;
  }
  if (Js(e) && (e = e.__vccOpts), t) {
    t = Go(t);
    let { class: l, style: d } = t;
    l && !Oe(l) && (t.class = ve(l)), Se(d) && (Ho(d) && !te(d) && (d = Ee({}, d)), t.style = Jt(d));
  }
  const n = Oe(e) ? 1 : gl(e) ? 128 : Dn(e) ? 64 : Se(e) ? 4 : se(e) ? 2 : 0;
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
  const { props: o, ref: i, patchFlag: n, children: l, transition: d } = e, c = t ? De(o || {}, t) : o, s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && wl(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && i ? te(i) ? i.concat(ur(t)) : [i, ur(t)] : ur(t)
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
    transition: d,
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
  return d && r && Ra(
    s,
    d.clone(s)
  ), s;
}
function ue(e = " ", t = 0) {
  return q(Wr, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (y(), ee(Ne, null, e)) : q(Ne, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? q(Ne) : te(e) ? q(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qa(e) ? Rt(e) : q(Wr, null, String(e));
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
  else se(t) ? (t = { default: t, _ctx: je }, a = 32) : (t = String(t), r & 64 ? (a = 16, t = [ue(t)]) : a = 8);
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
const Us = tl();
let qs = 0;
function Hs(e, t, a) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Us, i = {
    uid: qs++,
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
    scope: new bd(
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = js.bind(null, i), e.ce && e.ce(i), i;
}
let Be = null;
const mt = () => Be || je;
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
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let Ha = !1;
function Ks(e, t = !1, a = !1) {
  t && zo(t);
  const { props: r, children: o } = e.vnode, i = yl(e);
  ys(e, r, i, t), $s(e, o, a || t);
  const n = i ? Ws(e, t) : void 0;
  return t && zo(!1), n;
}
function Ws(e, t) {
  const a = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, us);
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
        return n.then((d) => {
          Si(e, d);
        }).catch((d) => {
          Fr(d, e, 0);
        });
      e.asyncDep = n;
    } else
      Si(e, n);
  } else
    xl(e);
}
function Si(e, t, a) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Pn(t)), xl(e);
}
function xl(e, t, a) {
  const r = e.type;
  e.render || (e.render = r.render || ut);
  {
    const o = er(e);
    Mt();
    try {
      fs(e);
    } finally {
      Nt(), o();
    }
  }
}
const Zs = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function kl(e) {
  const t = (a) => {
    e.exposed = a || {};
  };
  return {
    attrs: new Proxy(e.attrs, Zs),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pn(Ld(e.exposed)), {
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
function Gs(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Js(e) {
  return se(e) && "__vccOpts" in e;
}
const P = (e, t) => Hd(e, t, Ha);
function Ys(e, t, a) {
  try {
    _r(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !te(t) ? qa(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (r > 3 ? a = Array.prototype.slice.call(arguments, 2) : r === 3 && qa(a) && (a = [a]), q(e, t, a));
  } finally {
    _r(1);
  }
}
const Xs = "3.5.24";
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
const _l = Eo ? (e) => Eo.createHTML(e) : (e) => e, Qs = "http://www.w3.org/2000/svg", ec = "http://www.w3.org/1998/Math/MathML", Tt = typeof document < "u" ? document : null, zi = Tt && /* @__PURE__ */ Tt.createElement("template"), tc = {
  insert: (e, t, a) => {
    t.insertBefore(e, a || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, a, r) => {
    const o = t === "svg" ? Tt.createElementNS(Qs, e) : t === "mathml" ? Tt.createElementNS(ec, e) : a ? Tt.createElement(e, { is: a }) : Tt.createElement(e);
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
      zi.innerHTML = _l(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = zi.content;
      if (r === "svg" || r === "mathml") {
        const d = l.firstChild;
        for (; d.firstChild; )
          l.appendChild(d.firstChild);
        l.removeChild(d);
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
}, Dt = "transition", Ta = "animation", Ka = Symbol("_vtc"), $l = {
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
  (e, { slots: t }) => Ys(Qd, oc(e), t)
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
    appearFromClass: d = i,
    appearActiveClass: c = n,
    appearToClass: s = l,
    leaveFromClass: u = `${a}-leave-from`,
    leaveActiveClass: p = `${a}-leave-active`,
    leaveToClass: h = `${a}-leave-to`
  } = e, f = ic(o), w = f && f[0], x = f && f[1], {
    onBeforeEnter: b,
    onEnter: _,
    onEnterCancelled: S,
    onLeave: m,
    onLeaveCancelled: $,
    onBeforeAppear: E = b,
    onAppear: ae = _,
    onAppearCancelled: Y = S
  } = t, Q = (F, I, L, O) => {
    F._enterCancelled = O, aa(F, I ? s : l), aa(F, I ? c : n), L && L();
  }, G = (F, I) => {
    F._isLeaving = !1, aa(F, u), aa(F, h), aa(F, p), I && I();
  }, ne = (F) => (I, L) => {
    const O = F ? ae : _, K = () => Q(I, F, L);
    ta(O, [I, K]), Oi(() => {
      aa(I, F ? d : i), Ot(I, F ? s : l), Ei(O) || Ti(I, r, w, K);
    });
  };
  return Ee(t, {
    onBeforeEnter(F) {
      ta(b, [F]), Ot(F, i), Ot(F, n);
    },
    onBeforeAppear(F) {
      ta(E, [F]), Ot(F, d), Ot(F, c);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(F, I) {
      F._isLeaving = !0;
      const L = () => G(F, I);
      Ot(F, u), F._enterCancelled ? (Ot(F, p), Pi(F)) : (Pi(F), Ot(F, p)), Oi(() => {
        F._isLeaving && (aa(F, u), Ot(F, h), Ei(m) || Ti(F, r, x, L));
      }), ta(m, [F, L]);
    },
    onEnterCancelled(F) {
      Q(F, !1, void 0, !0), ta(S, [F]);
    },
    onAppearCancelled(F) {
      Q(F, !0, void 0, !0), ta(Y, [F]);
    },
    onLeaveCancelled(F) {
      G(F), ta($, [F]);
    }
  });
}
function ic(e) {
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
let nc = 0;
function Ti(e, t, a, r) {
  const o = e._endId = ++nc, i = () => {
    o === e._endId && r();
  };
  if (a != null)
    return setTimeout(i, a);
  const { type: n, timeout: l, propCount: d } = lc(e, t);
  if (!n)
    return r();
  const c = n + "end";
  let s = 0;
  const u = () => {
    e.removeEventListener(c, p), i();
  }, p = (h) => {
    h.target === e && ++s >= d && u();
  };
  setTimeout(() => {
    s < d && u();
  }, l + 1), e.addEventListener(c, p);
}
function lc(e, t) {
  const a = window.getComputedStyle(e), r = (f) => (a[f] || "").split(", "), o = r(`${Dt}Delay`), i = r(`${Dt}Duration`), n = Ai(o, i), l = r(`${Ta}Delay`), d = r(`${Ta}Duration`), c = Ai(l, d);
  let s = null, u = 0, p = 0;
  t === Dt ? n > 0 && (s = Dt, u = n, p = i.length) : t === Ta ? c > 0 && (s = Ta, u = c, p = d.length) : (u = Math.max(n, c), s = u > 0 ? n > c ? Dt : Ta : null, p = s ? s === Dt ? i.length : d.length : 0);
  const h = s === Dt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Dt}Property`).toString()
  );
  return {
    type: s,
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
function dc(e, t, a) {
  const r = e[Ka];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : a ? e.setAttribute("class", t) : e.className = t;
}
const Sr = Symbol("_vod"), Sl = Symbol("_vsh"), Yo = {
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
  e.style.display = t ? e[Sr] : "none", e[Sl] = !t;
}
const Cl = Symbol("");
function sc(e) {
  const t = mt();
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
  Gn(() => {
    Mn(r);
  }), st(() => {
    he(r, ut, { flush: "post" });
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
      const i = gd(t[o]);
      a.setProperty(`--${o}`, i), r += `--${o}: ${i};`;
    }
    a[Cl] = r;
  }
}
const cc = /(?:^|;)\s*display\s*:/;
function uc(e, t, a) {
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
      const n = r[Cl];
      n && (a += ";" + n), r.cssText = a, i = cc.test(a);
    }
  } else t && e.removeAttribute("style");
  Sr in e && (e[Sr] = i ? r.display : "", e[Sl] && (r.display = "none"));
}
const ji = /\s*!important$/;
function pr(e, t, a) {
  if (te(a))
    a.forEach((r) => pr(e, t, r));
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
const Ii = ["Webkit", "Moz", "ms"], so = {};
function pc(e, t) {
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
function Ni(e, t, a, r, o, i = vd(t)) {
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
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(a);
    (l !== d || !("_value" in e)) && (e.value = d), a == null && e.removeAttribute(t), e._value = a;
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
    const [l, d] = vc(t);
    if (r) {
      const c = i[t] = bc(
        r,
        o
      );
      jt(e, l, c, d);
    } else n && (fc(e, l, n, d), i[t] = void 0);
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
let co = 0;
const mc = /* @__PURE__ */ Promise.resolve(), gc = () => co || (mc.then(() => co = 0), co = Date.now());
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
  t === "class" ? dc(e, r, n) : t === "style" ? uc(e, a, r) : Vr(t) ? Io(t) || hc(e, t, a, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xc(e, t, r, n)) ? (Bi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ni(e, t, r, n, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Oe(r)) ? Bi(e, Le(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ni(e, t, r, n));
};
function xc(e, t, a, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fi(t) && se(a));
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
function kc(e, t, a) {
  let r = /* @__PURE__ */ es(e, t);
  Pr(r) && (r = Ee({}, r, t));
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
      if (i && !te(i))
        for (const d in i) {
          const c = i[d];
          (c === Number || c && c.type === Number) && (d in this._props && (this._props[d] = vo(this._props[d])), (l || (l = /* @__PURE__ */ Object.create(null)))[Le(d)] = !0);
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
        for (const d of n) {
          if (a && d.nodeType === 1) {
            const c = a + "-s", s = document.createTreeWalker(d, 1);
            d.setAttribute(c, "");
            let u;
            for (; u = s.nextNode(); )
              u.setAttribute(c, "");
          }
          l.insertBefore(d, o);
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
const dt = Symbol("_assign");
function qi(e, t, a) {
  return t && (e = e.trim()), a && (e = Mr(e)), e;
}
const zr = {
  created(e, { modifiers: { lazy: t, trim: a, number: r } }, o) {
    e[dt] = Kt(o);
    const i = r || o.props && o.props.type === "number";
    jt(e, t ? "change" : "input", (n) => {
      n.target.composing || e[dt](qi(e.value, a, i));
    }), (a || i) && jt(e, "change", () => {
      e.value = qi(e.value, a, i);
    }), t || (jt(e, "compositionstart", $c), jt(e, "compositionend", Ui), jt(e, "change", Ui));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: a, modifiers: { lazy: r, trim: o, number: i } }, n) {
    if (e[dt] = Kt(n), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Mr(e.value) : e.value, d = t ?? "";
    l !== d && (document.activeElement === e && e.type !== "range" && (r && t === a || o && e.value.trim() === d) || (e.value = d));
  }
}, zl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, a) {
    e[dt] = Kt(a), jt(e, "change", () => {
      const r = e._modelValue, o = Sa(e), i = e.checked, n = e[dt];
      if (te(r)) {
        const l = Bo(r, o), d = l !== -1;
        if (i && !d)
          n(r.concat(o));
        else if (!i && d) {
          const c = [...r];
          c.splice(l, 1), n(c);
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
    e[dt] = Kt(a), Hi(e, t, a);
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
    o = sa(t, El(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Sc = {
  created(e, { value: t }, a) {
    e.checked = sa(t, a.props.value), e[dt] = Kt(a), jt(e, "change", () => {
      e[dt](Sa(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: a }, r) {
    e[dt] = Kt(r), t !== a && (e.checked = sa(t, r.props.value));
  }
}, Cc = {
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
    }), e[dt] = Kt(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ki(e, t);
  },
  beforeUpdate(e, t, a) {
    e[dt] = Kt(a);
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
          const d = typeof l;
          d === "string" || d === "number" ? n.selected = t.some((c) => String(c) === String(l)) : n.selected = Bo(t, l) > -1;
        } else
          n.selected = t.has(l);
      else if (sa(Sa(n), t)) {
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
      return zr;
    default:
      switch (t) {
        case "checkbox":
          return zl;
        case "radio":
          return Sc;
        default:
          return zr;
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
const Oc = ["ctrl", "shift", "alt", "meta"], Tc = {
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
  exact: (e, t) => Oc.some((a) => e[`${a}Key`] && !t.includes(a))
}, qe = (e, t) => {
  const a = e._withMods || (e._withMods = {}), r = t.join(".");
  return a[r] || (a[r] = ((o, ...i) => {
    for (let n = 0; n < t.length; n++) {
      const l = Tc[t[n]];
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
function Ol() {
  return Wi || (Wi = Cs(Vc));
}
const Pc = ((...e) => {
  Ol().render(...e);
}), To = ((...e) => {
  const t = Ol().createApp(...e), { mount: a } = t;
  return t.mount = (r) => {
    const o = Ic(r);
    if (!o) return;
    const i = t._component;
    !se(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
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
  return Oe(e) ? document.querySelector(e) : e;
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
}), Tl = () => Qo.disconnect();
function Dc() {
  Qo.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", Tl), Wt.autoDetectLanguage = !0;
}
function Fc() {
  Qo.disconnect(), window.removeEventListener("beforeunload", Tl), Wt.autoDetectLanguage = !1;
}
he(
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
    const a = e, r = t, o = X(null);
    return he(
      () => a.modelValue,
      (i) => {
        i && a.scrollIntoView && setTimeout(() => o.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (i, n) => (y(), z("div", {
      class: ve(["accordion-item", { disabled: e.disabled }]),
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
        e.hideToggle ? H("", !0) : (y(), z("div", {
          key: 0,
          "data-testid": "accordion-state-indicator",
          class: ve(["state-indicator", { open: e.modelValue }])
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
                e.modelValue ? le(i.$slots, "default", { key: 0 }) : H("", !0)
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
    const a = e, r = t, o = P(() => [...a.modelValue]);
    function i(n, l) {
      a.multiple ? (o.value[l] = n, r("update:modelValue", o.value)) : (o.value.forEach((d, c) => {
        c !== l && (o.value[c] = !1);
      }), r("update:modelValue", o.value));
    }
    return (n, l) => (y(), z("div", Jc, [
      (y(!0), z(_e, null, qt(e.items, (d, c) => le(n.$slots, "default", De({
        key: c,
        ref_for: !0
      }, { item: d, index: c, open: o.value[c] }), () => [
        q(Al, {
          modelValue: o.value[c],
          "onUpdate:modelValue": [(s) => o.value[c] = s, (s) => i(s, c)],
          title: d[e.title],
          "aria-title": d.ariaTitle,
          disabled: e.disabled || d.disabled,
          "hide-toggle": e.disabled,
          "scroll-into-view": e.scrollIntoView
        }, {
          default: B(() => [
            le(n.$slots, "content", De({ ref_for: !0 }, d), void 0, !0)
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
function Er(e) {
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
function uo(e, t, a) {
  return P(() => e.some((r) => Pl(t, r, {
    [a]: !1
  })[a]));
}
function Ji(e, t, a) {
  return P(() => e.reduce((r, o) => {
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
    $rewardEarly: d
  } = o, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], s = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, p = arguments.length > 10 ? arguments[10] : void 0;
  const h = X(!!r.value), f = X(0);
  a.value = !1;
  const w = he([t, r].concat(c, p), () => {
    if (l && !r.value || d && !u.value && !a.value)
      return;
    let x;
    try {
      x = jl(e, t, s, n);
    } catch (b) {
      x = Promise.reject(b);
    }
    f.value++, a.value = !!f.value, h.value = !1, Promise.resolve(x).then((b) => {
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
    $lazy: d,
    $rewardEarly: c
  } = r;
  const s = () => ({}), u = P(() => {
    if (d && !a.value || c && !l.value)
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
    $unwatch: s,
    $invalid: u
  };
}
function au(e, t, a, r, o, i, n, l, d, c, s) {
  const u = X(!1), p = e.$params || {}, h = X(null);
  let f, w;
  e.$async ? {
    $invalid: f,
    $unwatch: w
  } = eu(e.$validator, t, u, a, r, h, o, e.$watchTargets, d, c, s) : {
    $invalid: f,
    $unwatch: w
  } = tu(e.$validator, t, a, r, h, o, d, c);
  const x = e.$message;
  return {
    $message: Er(x) ? P(() => x(Gi({
      $pending: u,
      $invalid: f,
      $params: Gi(p),
      $model: t,
      $response: h,
      $validator: i,
      $propertyPath: l,
      $property: n
    }))) : x || "",
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
    const d = t[l];
    switch (!0) {
      case Er(d.$validator):
        r[l] = d;
        break;
      case Er(d):
        r[l] = {
          $validator: d
        };
        break;
      case l === "$validationGroups":
        n = d;
        break;
      case l.startsWith("$"):
        i[l] = d;
        break;
      default:
        o[l] = d;
    }
  }), {
    rules: r,
    nestedValidators: o,
    config: i,
    validationGroups: n
  };
}
const ou = "__root";
function iu(e, t, a, r, o, i, n, l, d) {
  const c = Object.keys(e), s = r.get(o, e), u = X(!1), p = X(!1), h = X(0);
  if (s) {
    if (!s.$partial) return s;
    s.$unwatch(), u.value = s.$dirty.value;
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
  return c.length ? (c.forEach((w) => {
    f[w] = au(e[w], t, f.$dirty, i, n, w, a, o, d, p, h);
  }), f.$externalResults = P(() => l.value ? [].concat(l.value).map((w, x) => ({
    $propertyPath: o,
    $property: a,
    $validator: "$externalResults",
    $uid: `${o}-externalResult-${x}`,
    $message: w,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), f.$invalid = P(() => {
    const w = c.some((x) => k(f[x].$invalid));
    return p.value = w, !!f.$externalResults.value.length || w;
  }), f.$pending = P(() => c.some((w) => k(f[w].$pending))), f.$error = P(() => f.$dirty.value ? f.$pending.value || f.$invalid.value : !1), f.$silentErrors = P(() => c.filter((w) => k(f[w].$invalid)).map((w) => {
    const x = f[w];
    return Je({
      $propertyPath: o,
      $property: a,
      $validator: w,
      $uid: `${o}-${w}`,
      $message: x.$message,
      $params: x.$params,
      $response: x.$response,
      $pending: x.$pending
    });
  }).concat(f.$externalResults.value)), f.$errors = P(() => f.$dirty.value ? f.$silentErrors.value : []), f.$unwatch = () => c.forEach((w) => {
    f[w].$unwatch();
  }), f.$commit = () => {
    p.value = !0, h.value = Date.now();
  }, r.set(o, e, f), f) : (s && r.set(o, e, f), f);
}
function nu(e, t, a, r, o, i, n) {
  const l = Object.keys(e);
  return l.length ? l.reduce((d, c) => (d[c] = Ao({
    validations: e[c],
    state: t,
    key: c,
    parentKey: a,
    resultsCache: r,
    globalConfig: o,
    instance: i,
    externalResults: n
  }), d), {}) : {};
}
function lu(e, t, a) {
  const r = P(() => [t, a].filter((f) => f).reduce((f, w) => f.concat(Object.values(k(w))), [])), o = P({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((f) => f.$dirty) : !1);
    },
    set(f) {
      e.$dirty.value = f;
    }
  }), i = P(() => {
    const f = k(e.$silentErrors) || [], w = r.value.filter((x) => (k(x).$silentErrors || []).length).reduce((x, b) => x.concat(...b.$silentErrors), []);
    return f.concat(w);
  }), n = P(() => {
    const f = k(e.$errors) || [], w = r.value.filter((x) => (k(x).$errors || []).length).reduce((x, b) => x.concat(...b.$errors), []);
    return f.concat(w);
  }), l = P(() => r.value.some((f) => f.$invalid) || k(e.$invalid) || !1), d = P(() => r.value.some((f) => k(f.$pending)) || k(e.$pending) || !1), c = P(() => r.value.some((f) => f.$dirty) || r.value.some((f) => f.$anyDirty) || o.value), s = P(() => o.value ? d.value || l.value : !1), u = () => {
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
    $anyDirty: c,
    $error: s,
    $pending: d,
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
    instance: d,
    externalResults: c
  } = e;
  const s = o ? `${o}.${r}` : r, {
    rules: u,
    nestedValidators: p,
    config: h,
    validationGroups: f
  } = ru(t), w = Ut(Ut({}, l), h), x = r ? P(() => {
    const $e = k(a);
    return $e ? k($e[r]) : void 0;
  }) : a, b = Ut({}, k(c) || {}), _ = P(() => {
    const $e = k(c);
    return r ? $e ? k($e[r]) : void 0 : $e;
  }), S = iu(u, x, r, n, s, w, d, _, a), m = nu(p, x, s, n, w, d, _), $ = {};
  f && Object.entries(f).forEach(($e) => {
    let [Ve, Te] = $e;
    $[Ve] = {
      $invalid: uo(Te, m, "$invalid"),
      $error: uo(Te, m, "$error"),
      $pending: uo(Te, m, "$pending"),
      $errors: Ji(Te, m, "$errors"),
      $silentErrors: Ji(Te, m, "$silentErrors")
    };
  });
  const {
    $dirty: E,
    $errors: ae,
    $invalid: Y,
    $anyDirty: Q,
    $error: G,
    $pending: ne,
    $touch: F,
    $reset: I,
    $silentErrors: L,
    $commit: O
  } = lu(S, m, i), K = r ? P({
    get: () => k(x),
    set: ($e) => {
      E.value = !0;
      const Ve = k(a), Te = k(c);
      Te && (Te[r] = b[r]), Ae(Ve[r]) ? Ve[r].value = $e : Ve[r] = $e;
    }
  }) : null;
  r && w.$autoDirty && he(x, () => {
    E.value || F();
    const $e = k(c);
    $e && ($e[r] = b[r]);
  }, {
    flush: "sync"
  });
  async function ce() {
    return F(), w.$rewardEarly && (O(), await Ct()), await Ct(), new Promise(($e) => {
      if (!ne.value) return $e(!Y.value);
      const Ve = he(ne, () => {
        $e(!Y.value), Ve();
      });
    });
  }
  function oe($e) {
    return (i.value || {})[$e];
  }
  function He() {
    Ae(c) ? c.value = b : Object.keys(b).length === 0 ? Object.keys(c).forEach(($e) => {
      delete c[$e];
    }) : Object.assign(c, b);
  }
  return Je(Ut(Ut(Ut({}, S), {}, {
    $model: K,
    $dirty: E,
    $error: G,
    $errors: ae,
    $invalid: Y,
    $anyDirty: Q,
    $pending: ne,
    $touch: F,
    $reset: I,
    $path: s || ou,
    $silentErrors: L,
    $validate: ce,
    $commit: O
  }, i && {
    $getResultsForChild: oe,
    $clearExternalResults: He,
    $validationGroups: $
  }), m));
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
function su(e) {
  let {
    $scope: t,
    instance: a
  } = e;
  const r = {}, o = X([]), i = P(() => o.value.reduce((s, u) => (s[u] = k(r[u]), s), {}));
  function n(s, u) {
    let {
      $registerAs: p,
      $scope: h,
      $stopPropagation: f
    } = u;
    f || t === fr.COLLECT_NONE || h === fr.COLLECT_NONE || t !== fr.COLLECT_ALL && t !== h || (r[p] = s, o.value.push(p));
  }
  a.__vuelidateInjectInstances = [].concat(a.__vuelidateInjectInstances || [], n);
  function l(s) {
    o.value = o.value.filter((u) => u !== s), delete r[s];
  }
  a.__vuelidateRemoveInstances = [].concat(a.__vuelidateRemoveInstances || [], l);
  const d = It(Yi, []);
  So(Yi, a.__vuelidateInjectInstances);
  const c = It(Xi, []);
  return So(Xi, a.__vuelidateRemoveInstances), {
    childResults: i,
    sendValidationResultsToParent: d,
    removeValidationResultsFromParent: c
  };
}
function Ml(e) {
  return new Proxy(e, {
    get(t, a) {
      return typeof t[a] == "object" ? Ml(t[a]) : P(() => t[a]);
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
    $scope: i = fr.COLLECT_ALL,
    $stopPropagation: n,
    $externalResults: l,
    currentVueInstance: d
  } = r;
  const c = d || ((a = mt()) === null || a === void 0 ? void 0 : a.proxy), s = c ? c.$options : {};
  o || (Qi += 1, o = `_vuelidate_${Qi}`);
  const u = X({}), p = new du(), {
    childResults: h,
    sendValidationResultsToParent: f,
    removeValidationResultsFromParent: w
  } = c ? su({
    $scope: i,
    instance: c
  }) : {
    childResults: X({})
  };
  if (!e && s.validations) {
    const x = s.validations;
    t = X({}), Zn(() => {
      t.value = c, he(() => Er(x) ? x.call(t.value, new Ml(t.value)) : x, (b) => {
        u.value = Ao({
          validations: b,
          state: t,
          childResults: h,
          resultsCache: p,
          globalConfig: r,
          instance: c,
          externalResults: l || c.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), r = s.validationsConfig || r;
  } else {
    const x = Ae(e) || Qc(e) ? e : Je(e || {});
    he(x, (b) => {
      u.value = Ao({
        validations: b,
        state: t,
        childResults: h,
        resultsCache: p,
        globalConfig: r,
        instance: c ?? {},
        externalResults: l
      });
    }, {
      immediate: !0
    });
  }
  return c && (f.forEach((x) => x(u, {
    $registerAs: o,
    $scope: i,
    $stopPropagation: n
  })), pa(() => w.forEach((x) => x(o)))), P(() => Ut(Ut({}, k(u.value)), h.value));
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
function Nl(e) {
  return typeof e == "object" ? e.$valid : e;
}
function Bl(e) {
  return e.$validator || e;
}
function uu(e, t) {
  if (!Vo(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!Vo(t) && !Or(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Gr(t);
  return a.$params = Za(Za({}, a.$params || {}), e), a;
}
function pu(e, t) {
  if (!Or(e) && typeof k(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!Vo(t) && !Or(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Gr(t);
  return a.$message = e, a;
}
function fu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const a = Gr(e);
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
        const d = Object.entries(n).reduce((c, s) => {
          let [u, p] = s;
          const h = e[u] || {}, f = Object.entries(h).reduce((w, x) => {
            let [b, _] = x;
            const S = Bl(_).call(this, p, n, l, ...r), m = Nl(S);
            if (w.$data[b] = S, w.$data.$invalid = !m || !!w.$data.$invalid, w.$data.$error = w.$data.$invalid, !m) {
              let $ = _.$message || "";
              const E = _.$params || {};
              typeof $ == "function" && ($ = $({
                $pending: !1,
                $invalid: !m,
                $params: E,
                $model: p,
                $response: S
              })), w.$errors.push({
                $property: u,
                $message: $,
                $params: E,
                $response: S,
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
          return c.$data[u] = f.$data, c.$errors[u] = f.$errors, {
            $valid: c.$valid && f.$valid,
            $data: c.$data,
            $errors: c.$errors
          };
        }, {
          $valid: !0,
          $data: {},
          $errors: {}
        });
        return {
          $valid: i.$valid && d.$valid,
          $data: i.$data.concat(d.$data),
          $errors: i.$errors.concat(d.$errors)
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
  normalizeValidatorObject: Gr,
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
var Ar = ((e) => ({
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
}));
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
}, ft = /* @__PURE__ */ pe(Eu, [["__scopeId", "data-v-206f9b1b"]]), Ou = {
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
}, Tu = {
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
}, Au = {
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
}, Vu = { nl: Ou, en: Tu, de: Au };
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
    const a = e, r = t, o = P({
      get() {
        return !a.allowEmpty && !a.modelValue ? 1 : a.modelValue;
      },
      set(f) {
        c(f);
      }
    }), i = P(() => a.allowEmpty ? !o.value : o.value === 1), n = P(() => o.value >= a.max), l = P(() => !!a.error), d = P(() => `${a.id}-error`);
    function c(f) {
      if (a.allowEmpty && !f) {
        r("update:model-value", null);
        return;
      }
      f < 0 || Number.isNaN(f) || typeof f != "number" || !f ? (pi(o), r("update:model-value", 1)) : f > a.max ? (pi(o), r("update:model-value", a.max)) : r("update:model-value", f);
    }
    function s() {
      o.value -= 1;
    }
    function u() {
      o.value += 1;
    }
    const p = P(() => a.required ? { value: { required: Ue.withMessage(() => M("input.required"), Ga) } } : { value: {} }), h = Zt(p.value, { value: o });
    return (f, w) => (y(), z("div", Mu, [
      N("div", {
        class: ve(["amount-input", { small: e.small }])
      }, [
        N("button", {
          disabled: e.disabled || i.value,
          class: "minus",
          "aria-label": k(M)("amount-input.minus_one"),
          onClick: qe(s, ["stop"])
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
          "onUpdate:modelValue": w[0] || (w[0] = (x) => o.value = x),
          class: ve([{ "has-error": e.error }, "input"]),
          disabled: e.disabled,
          "aria-label": "Amount input",
          "aria-invalid": l.value,
          "aria-describedby": l.value ? d.value : null,
          type: "number",
          onBlur: w[1] || (w[1] = (x) => {
            k(h).value?.$touch(x), r("blur", x);
          }),
          onFocus: w[2] || (w[2] = (x) => r("focus", x))
        }, null, 42, Bu), [
          [zr, o.value]
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
        id: d.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, U(e.error || k(h).value.$errors[0].$message), 9, Du)) : H("", !0)
    ]));
  }
}, ei = /* @__PURE__ */ pe(Fu, [["__scopeId", "data-v-ee49f574"]]);
function ti(e, t) {
  return Lo() ? (wd(e, t), !0) : !1;
}
const po = /* @__PURE__ */ new WeakMap(), Ru = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], r = (t = mt()) === null || t === void 0 ? void 0 : t.proxy, o = r ?? Lo();
  if (o == null && !al()) throw new Error("injectLocal must be called in setup");
  return o && po.has(o) && a in po.get(o) ? po.get(o)[a] : It(...e);
}, Uu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qu = (e) => e != null, Hu = Object.prototype.toString, Ku = (e) => Hu.call(e) === "[object Object]", wa = () => {
};
function tn(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function hr(e) {
  return Array.isArray(e) ? e : [e];
}
function Wu(e) {
  return mt();
}
function Zu(e, t = !0, a) {
  Wu() ? st(e, a) : t ? e() : Ct(e);
}
function Gu(e, t, a) {
  return he(e, t, {
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
  }, r = (l, d, c, s) => (l.addEventListener(d, c, s), () => l.removeEventListener(d, c, s)), o = P(() => {
    const l = hr(lt(e[0])).filter((d) => d != null);
    return l.every((d) => typeof d != "string") ? l : void 0;
  }), i = Gu(() => {
    var l, d;
    return [
      (l = (d = o.value) === null || d === void 0 ? void 0 : d.map((c) => ia(c))) !== null && l !== void 0 ? l : [Xt].filter((c) => c != null),
      hr(lt(o.value ? e[1] : e[0])),
      hr(k(o.value ? e[2] : e[1])),
      lt(o.value ? e[3] : e[2])
    ];
  }, ([l, d, c, s]) => {
    if (a(), !l?.length || !d?.length || !c?.length) return;
    const u = Ku(s) ? { ...s } : s;
    t.push(...l.flatMap((p) => d.flatMap((h) => c.map((f) => r(p, h, f, u)))));
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
  let d = !0;
  const c = (x) => lt(o).some((b) => {
    if (typeof b == "string") return Array.from(r.document.querySelectorAll(b)).some((_) => _ === x.target || x.composedPath().includes(_));
    {
      const _ = ia(b);
      return _ && (x.target === _ || x.composedPath().includes(_));
    }
  });
  function s(x) {
    const b = lt(x);
    return b && b.$.subTree.shapeFlag === 16;
  }
  function u(x, b) {
    const _ = lt(x), S = _.$.subTree && _.$.subTree.children;
    return S == null || !Array.isArray(S) ? !1 : S.some((m) => m.el === b.target || b.composedPath().includes(m.el));
  }
  const p = (x) => {
    const b = ia(e);
    if (x.target != null && !(!(b instanceof Element) && s(e) && u(e, x)) && !(!b || b === x.target || x.composedPath().includes(b))) {
      if ("detail" in x && x.detail === 0 && (d = !c(x)), !d) {
        d = !0;
        return;
      }
      t(x);
    }
  };
  let h = !1;
  const f = [
    it(r, "click", (x) => {
      h || (h = !0, setTimeout(() => {
        h = !1;
      }, 0), p(x));
    }, {
      passive: !0,
      capture: i
    }),
    it(r, "pointerdown", (x) => {
      const b = ia(e);
      d = !c(x) && !!(b && !x.composedPath().includes(b));
    }, { passive: !0 }),
    n && it(r, "blur", (x) => {
      setTimeout(() => {
        var b;
        const _ = ia(e);
        ((b = r.document.activeElement) === null || b === void 0 ? void 0 : b.tagName) === "IFRAME" && !_?.contains(r.document.activeElement) && t(x);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), w = () => f.forEach((x) => x());
  return l ? {
    stop: w,
    cancel: () => {
      d = !1;
    },
    trigger: (x) => {
      d = !0, p(x), d = !1;
    }
  } : w;
}
// @__NO_SIDE_EFFECTS__
function Yu() {
  const e = St(!1), t = mt();
  return t && st(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Fl(e) {
  const t = /* @__PURE__ */ Yu();
  return P(() => (t.value, !!e()));
}
function Xu(e, t, a = {}) {
  const { window: r = Xt, ...o } = a;
  let i;
  const n = /* @__PURE__ */ Fl(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, d = he(P(() => {
    const u = hr(lt(e)).map(ia).filter(qu);
    return new Set(u);
  }), (u) => {
    l(), n.value && u.size && (i = new MutationObserver(t), u.forEach((p) => i.observe(p, o)));
  }, {
    immediate: !0,
    flush: "post"
  }), c = () => i?.takeRecords(), s = () => {
    d(), l();
  };
  return ti(s), {
    isSupported: n,
    stop: s,
    takeRecords: c
  };
}
function Qu(e, t, a = {}) {
  const { window: r = Xt, document: o = r?.document, flush: i = "sync" } = a;
  if (!r || !o) return wa;
  let n;
  const l = (s) => {
    n?.(), n = s;
  }, d = fl(() => {
    const s = ia(e);
    if (s) {
      const { stop: u } = Xu(o, (p) => {
        p.map((h) => [...h.removedNodes]).flat().some((h) => h === s || h.contains(s)) && t(p);
      }, {
        window: r,
        childList: !0,
        subtree: !0
      });
      l(u);
    }
  }, { flush: i }), c = () => {
    d(), l();
  };
  return ti(c), c;
}
// @__NO_SIDE_EFFECTS__
function ep(e = {}) {
  var t;
  const { window: a = Xt, deep: r = !0, triggerOnRemoval: o = !1 } = e, i = (t = e.document) !== null && t !== void 0 ? t : a?.document, n = () => {
    let c = i?.activeElement;
    if (r)
      for (var s; c?.shadowRoot; ) c = c == null || (s = c.shadowRoot) === null || s === void 0 ? void 0 : s.activeElement;
    return c;
  }, l = St(), d = () => {
    l.value = n();
  };
  if (a) {
    const c = {
      capture: !0,
      passive: !0
    };
    it(a, "blur", (s) => {
      s.relatedTarget === null && d();
    }, c), it(a, "focus", d, c);
  }
  return o && Qu(l, d, { document: i }), d(), l;
}
const tp = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function ap() {
  const e = al() ? /* @__PURE__ */ Ru(tp, null) : null;
  return typeof e == "number" ? e : void 0;
}
function rp(e, t = {}) {
  const { window: a = Xt, ssrWidth: r = /* @__PURE__ */ ap() } = t, o = /* @__PURE__ */ Fl(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), i = St(typeof r == "number"), n = St(), l = St(!1), d = (c) => {
    l.value = c.matches;
  };
  return fl(() => {
    if (i.value) {
      i.value = !o.value, l.value = lt(e).split(",").some((c) => {
        const s = c.includes("not all"), u = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), p = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(u || p);
        return u && h && (h = r >= tn(u[1])), p && h && (h = r <= tn(p[1])), s ? !h : h;
      });
      return;
    }
    o.value && (n.value = a.matchMedia(lt(e)), l.value = n.value.matches);
  }), it(n, "change", d, { passive: !0 }), P(() => l.value);
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
  }, d = t ? Je(l) : l, c = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map([
    ["Meta", c],
    ["Shift", /* @__PURE__ */ new Set()],
    ["Alt", /* @__PURE__ */ new Set()]
  ]), u = /* @__PURE__ */ new Set();
  function p(_, S) {
    _ in d && (t ? d[_] = S : d[_].value = S);
  }
  function h() {
    n.clear();
    for (const _ of u) p(_, !1);
  }
  function f(_, S, m) {
    if (!(!_ || typeof S.getModifierState != "function")) {
      for (const [$, E] of s) if (S.getModifierState($)) {
        m.forEach((ae) => E.add(ae));
        break;
      }
    }
  }
  function w(_, S) {
    if (_) return;
    const m = `${S[0].toUpperCase()}${S.slice(1)}`, $ = s.get(m);
    if (!["shift", "alt"].includes(S) || !$) return;
    const E = Array.from($), ae = E.indexOf(S);
    E.forEach((Y, Q) => {
      Q >= ae && (n.delete(Y), p(Y, !1));
    }), $.clear();
  }
  function x(_, S) {
    var m, $;
    const E = (m = _.key) === null || m === void 0 ? void 0 : m.toLowerCase(), ae = [($ = _.code) === null || $ === void 0 ? void 0 : $.toLowerCase(), E].filter(Boolean);
    E && (S ? n.add(E) : n.delete(E));
    for (const Y of ae)
      u.add(Y), p(Y, S);
    f(S, _, [...n, ...ae]), w(S, E), E === "meta" && !S && (c.forEach((Y) => {
      n.delete(Y), p(Y, !1);
    }), c.clear());
  }
  it(a, "keydown", (_) => (x(_, !0), i(_)), { passive: o }), it(a, "keyup", (_) => (x(_, !1), i(_)), { passive: o }), it("blur", h, { passive: o }), it("focus", h, { passive: o });
  const b = new Proxy(d, { get(_, S, m) {
    if (typeof S != "string") return Reflect.get(_, S, m);
    if (S = S.toLowerCase(), S in r && (S = r[S]), !(S in d)) if (/[+_-]/.test(S)) {
      const E = S.split(/[+_-]/g).map((ae) => ae.trim());
      d[S] = P(() => E.map((ae) => lt(b[ae])).every(Boolean));
    } else d[S] = St(!1);
    const $ = Reflect.get(_, S, m);
    return t ? lt($) : $;
  } });
  return b;
}
// @__NO_SIDE_EFFECTS__
function ip(e = {}) {
  const { window: t = Xt, initialWidth: a = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: o = !0, includeScrollbar: i = !0, type: n = "inner" } = e, l = St(a), d = St(r), c = () => {
    if (t) if (n === "outer")
      l.value = t.outerWidth, d.value = t.outerHeight;
    else if (n === "visual" && t.visualViewport) {
      const { width: u, height: p, scale: h } = t.visualViewport;
      l.value = Math.round(u * h), d.value = Math.round(p * h);
    } else i ? (l.value = t.innerWidth, d.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, d.value = t.document.documentElement.clientHeight);
  };
  c(), Zu(c);
  const s = { passive: !0 };
  return it("resize", c, s), t && n === "visual" && t.visualViewport && it(t.visualViewport, "resize", c, s), o && he(rp("(orientation: portrait)"), () => c()), {
    width: l,
    height: d
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
const dp = { class: "micro-icon" }, sp = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, a) => (y(), z("i", dp, [
      (y(), ee($a(e.icon)))
    ]));
  }
}, Jr = /* @__PURE__ */ pe(sp, [["__scopeId", "data-v-08f67949"]]), { width: ct, height: cp } = /* @__PURE__ */ ip();
function up() {
  return {
    /** < 640px */
    isXs: P(() => ct.value < 640),
    /** 640px - 768px */
    isSm: P(() => ct.value >= 640 && ct.value < 768),
    /** 768px - 1024px */
    isMd: P(() => ct.value >= 768 && ct.value < 1024),
    /** 1024px - 1280px */
    isLg: P(() => ct.value >= 1024 && ct.value <= 1280),
    /** 1280px - 1536px */
    isXl: P(() => ct.value > 1280 && ct.value <= 1536),
    /** > 1536px */
    is2Xl: P(() => ct.value > 1536),
    width: P(() => ct.value),
    height: P(() => cp.value)
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
      class: ve(["hotkey", [`${e.disabled ? "secondary" : e.variant}-hotkey`, { disabled: e.disabled }]])
    }, U(e.hotkey), 3)) : H("", !0);
  }
}, Ul = /* @__PURE__ */ pe(pp, [["__scopeId", "data-v-47dd263a"]]), fp = {
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
    const a = e, r = t, o = X(null);
    function i(d) {
      d && r("set:activator", d);
    }
    function n(d) {
      i(d.currentTarget), r(a.modelValue ? "close" : "open");
    }
    function l(d) {
      i(d.currentTarget);
    }
    return he(
      () => [a.modelValue, a.floatingContainerEl, a.activatorEl],
      ([d]) => {
        if (o.value?.(), o.value = null, !d || !a.floatingContainerEl)
          return;
        const c = [a.activatorEl].filter(Boolean);
        requestAnimationFrame(() => {
          o.value = Ju(
            a.floatingContainerEl,
            () => a.modelValue && r("close"),
            { ignore: c }
          );
        });
      },
      { immediate: !0 }
    ), (d, c) => le(d.$slots, "default", {
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
    return he(
      () => a.isFocused,
      (l) => {
        l || r("close");
      }
    ), (l, d) => le(l.$slots, "default", {
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
    const a = e, r = t, o = X(!1), i = X(!1);
    function n() {
      o.value || (i.value = !1, r("close"));
    }
    function l(s) {
      i.value = !0, !a.modelValue && (r("set:activator", s.currentTarget), r("open"));
    }
    function d(s) {
      s.target.matches(":focus-visible") && (o.value = !0, r("set:activator", s.currentTarget), r("open"));
    }
    function c() {
      o.value = !1, r("close");
    }
    return he(
      () => a.modelValue,
      () => {
        a.modelValue || (o.value = !1);
      }
    ), (s, u) => le(s.$slots, "default", {
      slotProps: { onMouseover: l, onMouseleave: n, onFocus: d, onBlur: c }
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
    function o(d) {
      r("set:activator", d);
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
    return (d, c) => le(d.$slots, "default", {
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
}, $p = /* @__PURE__ */ pe(_p, [["__scopeId", "data-v-76306795"]]), Sp = {
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
    return st(() => {
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
function Op(e) {
  return e instanceof HTMLElement;
}
function Tp(e) {
  return e.getRootNode ? e.getRootNode() : e;
}
function Ap(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host || Tp(e).host || null;
}
function Hl(e) {
  const t = Ap(e);
  return Ep(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Op(t) && ql(t) ? t : Hl(t);
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
const Po = X(!1), va = X(!1), ma = X(!1);
function Vp(e, t, a, r, o = 4) {
  const i = window.scrollY || document.documentElement.scrollTop || 0, n = window.scrollX || document.documentElement.scrollLeft || 0, l = window.innerHeight || document.documentElement.clientHeight, d = window.innerWidth || document.documentElement.clientWidth;
  let c = e, s = t;
  const u = i + l - o, p = n + d - o, h = i + o, f = n + o;
  c + r > u && (c = Math.max(h, u - r)), c < h && (c = h), s + a > p && (s = Math.max(f, p - a)), s < f && (s = f);
  const w = u - h, x = p - f;
  return {
    top: c,
    left: s,
    needsVerticalClamp: r > w,
    needsHorizontalClamp: a > x,
    maxHeight: Math.min(r, w),
    maxWidth: Math.min(a, x)
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
  const [n, l] = r.location.replaceAll(" ", "").split(","), d = l || "center", c = Pp(i, t, e, r), s = (p, h) => {
    const f = c[p](h);
    return Wl(f.top, f.left, t, e) ? { placement: p, alignment: h, ...f } : null;
  };
  let u = s(n, d);
  return u || ((an[n][d] || []).some((p) => (u = s(n, p), !!u)), u) || (Cp[n].some((p) => (u = s(p, d), u ? !0 : Object.keys(an[p]).some((h) => (u = s(p, h), !!u)))), u) ? u : { placement: n, alignment: d, ...c[n](d) };
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
  const i = e.getBoundingClientRect(), n = e.scrollHeight || e.clientHeight || Math.ceil(i.height), l = e.scrollWidth || e.clientWidth || Math.ceil(i.width), d = await jp(n, l, o, a, r), c = Wl(d.top, d.left, l, n);
  let s = d.top, u = d.left;
  if (Po.value = !0, !c && a.clamp) {
    const p = Vp(d.top, d.left, l, n);
    s = p.top, u = p.left, p.needsVerticalClamp ? (va.value = !0, e.style.maxHeight = `${p.maxHeight}px`, e.style.overflowY = "auto") : va.value && (va.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), p.needsHorizontalClamp ? (ma.value = !0, e.style.maxWidth = `${p.maxWidth}px`, e.style.overflowX = "auto") : ma.value && (ma.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  } else
    va.value && (va.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), ma.value && (ma.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  return e.style.top = `${s}px`, e.style.left = `${u}px`, e.style.visibility = "visible", requestAnimationFrame(() => {
    Po.value = !1;
  }), { placement: d.placement, alignment: d.alignment };
}
function Np(e, t) {
  const a = X(), r = X(), o = X(), i = X(), n = Je({
    location: "bottom",
    fitContent: !1,
    attach: null,
    offset: 0,
    clamp: !0
  }), l = Je([]);
  function d() {
    return !e.value || !t.value ? null : Mp(e.value, t.value, n, i.value).then((p) => {
      a.value = p.placement, r.value = p.alignment;
    });
  }
  function c() {
    l.forEach((p) => {
      p.removeEventListener("scroll", d), p.removeEventListener("resize", d);
    }), l.splice(0), e.value && (l.push(...Kl(e.value)), l.forEach((p) => {
      p.addEventListener("scroll", d, { passive: !0 }), p.addEventListener("resize", d);
    }));
  }
  function s() {
    o.value = new ResizeObserver(() => {
      Po.value || requestAnimationFrame(d);
    });
  }
  function u(p) {
    Object.keys(p).forEach((h) => {
      h in n && (n[h] = p[h]);
    });
  }
  return he(e, (p, h) => {
    o.value || s(), h && o.value?.unobserve(h), t.value && o.value?.unobserve(t.value), p && t.value && (o.value.observe(p), o.value.observe(t.value));
  }), pa(() => {
    l.forEach((p) => {
      p.removeEventListener("scroll", d), p.removeEventListener("resize", d);
    }), l.splice(0), o.value?.disconnect();
  }), {
    autoUpdate: (p = { location: "bottom" }) => {
      u(p), [a.value, r.value] = n.location.replaceAll(" ", "").split(","), he([e, t], async ([h, f]) => {
        c(), h && f && await d();
      });
    },
    fixedPosition: async (p = { location: "bottom" }) => {
      u({ ...p, clamp: !1 }), [a.value, r.value] = n.location.replaceAll(" ", "").split(","), requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          c(), await d();
        });
      });
    },
    watchCursor: () => {
      async function p(h) {
        i.value = h, e.value && await d();
      }
      he(
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
const Bp = ["aria-hidden", "aria-label"], Lp = { class: "floating-container-overlay" }, Dp = ["aria-expanded"], Fp = {
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
    const r = e, o = a, i = Qa("floating-container-content"), n = X(null), { autoUpdate: l, fixedPosition: d, watchCursor: c, placement: s, alignment: u } = Np(
      i,
      n
    ), p = /* @__PURE__ */ ep(), h = X(!1), f = X(!1), w = X(-1), x = P(() => p.value === n.value || p.value === i.value || n.value?.contains(p.value) || i.value?.contains(p.value) || !1), b = P(() => {
      switch (r.behavior) {
        case "focus":
          return { component: hp, props: { isFocused: x.value } };
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
    function _(G) {
      n.value = G;
    }
    async function S() {
      clearTimeout(w.value), w.value = setTimeout(async () => {
        h.value = !0, o("update:isOpen", !0), await Ct(), await new Promise(requestAnimationFrame), f.value = !0;
      }, r.delay);
    }
    function m() {
      clearTimeout(w.value), f.value = !1, r.transition !== "fade" && r.transition !== "expand" && (h.value = !1);
    }
    function $() {
      h.value = !1, o("update:isOpen", !1);
    }
    function E() {
      !r.closeOnClick || !h.value || r.behavior === "static" || (n.value?.focus(), m());
    }
    function ae(G) {
      if (G.key === "Tab") {
        const ne = vr(i.value, !0), F = ne.indexOf(document.activeElement), I = G.shiftKey ? F - 1 : F + 1;
        ne[I] ? (G.preventDefault(), ne[I].focus()) : (G.preventDefault(), I <= 0 && n.value.focus());
      } else if (G.key === "Escape") {
        if (r.behavior === "static")
          return;
        n.value.focus(), m();
      } else G.key === "Enter" && (G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation(), r.closeOnClick && r.behavior !== "static" && (n.value.focus(), m()));
    }
    async function Y(G) {
      if (G.key === "Escape") {
        if (r.behavior === "static")
          return;
        G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation(), m();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(G.key))
        return;
      i.value || (await S(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const ne = vr(i.value);
      if (ne.length === 0)
        return;
      G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation();
      const F = ne.indexOf(document.activeElement);
      F === -1 ? vr(i.value)[0].focus() : G.key === "ArrowDown" ? ne[F + 1]?.focus() : G.key === "ArrowUp" && ne[F - 1]?.focus();
    }
    he(
      () => x.value,
      () => o("update:focus", x.value)
    ), he([s, u], () => {
      o("update:location", [s.value, u.value].filter(Boolean).join(","));
    });
    const Q = P(() => {
      switch (r.transition) {
        case "fade":
          return kp;
        case "expand":
          return $p;
        default:
          return wp;
      }
    });
    return st(async () => {
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
          }), r.attachToCursor && c();
          break;
        case "static":
          S(), d({
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
        onOpen: S,
        onClose: m,
        "onSet:activator": _
      }), {
        default: B(({ slotProps: F }) => [
          le(G.$slots, "activator", Br(Go({ ...F, onKeydown: Y })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : H("", !0),
      h.value ? (y(), z("div", {
        key: 1,
        class: "floating-container-overlay-container",
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !f.value,
        "aria-label": e.ariaLabel
      }, [
        N("div", Lp, [
          (y(), ee($a(Q.value), {
            key: e.behavior !== "static" ? `${k(s) || "unknown"}-${k(u) || "unknown"}` : null,
            placement: k(s),
            alignment: k(u),
            appear: "",
            onAfterLeave: $
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
                onClick: E
              }, [
                le(G.$slots, "default", {}, void 0, !0)
              ], 40, Dp), [
                [Yo, f.value]
              ])
            ]),
            _: 3
          }, 40, ["placement", "alignment"]))
        ])
      ], 8, Bp)) : H("", !0)
    ], 64));
  }
}, Zl = /* @__PURE__ */ pe(Fp, [["__scopeId", "data-v-fa4dfb8f"]]), Rp = {
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
    const t = et(e, "location"), a = Qa("tooltip-wrapper"), r = P(() => a.value?.children[0]);
    return (o, i) => (y(), ee(Zl, {
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
          class: ve(["tooltip", [t.value.replace(/,/g, "-"), { inverted: e.inverted }]]),
          style: Jt({ width: e.width }),
          "data-testid": "tooltip",
          role: "menuitem"
        }, [
          le(o.$slots, "content", {}, () => [
            ue(U(e.text), 1)
          ], !0)
        ], 6)) : H("", !0)
      ]),
      _: 3
    }, 8, ["offset", "behavior", "location", "fit-content", "attach", "delay", "aria-label"]));
  }
}, Ja = /* @__PURE__ */ pe(Rp, [["__scopeId", "data-v-d7f78e8b"]]), Up = ["for"], qp = { class: "label-text" }, Hp = {
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
    const r = e, o = et(e, "modelValue"), i = Xn(), n = a, l = It("showError", !0), d = Rl()[r.hotkey.key], c = X(null), s = P(() => r.error ? np : r.icon), u = P(() => r.optional !== "" ? r.optional : M("input.optional")), p = P(() => r.requiredMessage ? r.requiredMessage : r.label ? M("input.required_with_label", { label: r.label.toLowerCase() }) : M("input.required")), h = P(() => {
      const _ = r.required ? { modelValue: { required: Ue.withMessage(() => p.value, Ga) } } : { modelValue: {} };
      return r.rules.forEach((S, m) => {
        _.modelValue[S.label || m] = Ue.withMessage(() => S.message || "", S.validator);
      }), _;
    }), f = X(Zt(h, { modelValue: o })), w = P(() => !!r.error || f.value.modelValue.$errors?.length > 0), x = P(() => `${r.id}-error`);
    function b(_) {
      n("blur", _), f.value.$touch(_);
    }
    return he(d, (_) => {
      _ && r.hotkey && setTimeout(() => {
        c.value.focus();
      }, 100);
    }), he(h, () => {
      f.value = Zt(h, { modelValue: o });
    }), t({
      input: c
    }), (_, S) => (y(), z("div", {
      class: ve(["input-container", { "has-error": w.value, "is-large": e.large }]),
      tabindex: "-1",
      onFocus: S[4] || (S[4] = (m) => _.$refs.input.focus())
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
              le(_.$slots, "info", {}, () => [
                ue(U(e.info), 1)
              ], !0)
            ]),
            default: B(() => [
              N("span", Hp, [
                q(Jr, {
                  class: "info-icon",
                  icon: k(lp)
                }, null, 8, ["icon"])
              ])
            ]),
            _: 3
          })) : H("", !0)
        ]),
        e.required ? H("", !0) : (y(), z("span", Kp, U(u.value), 1))
      ], 8, Up)) : H("", !0),
      N("div", Wp, [
        e.prependIcon ? (y(), z("div", Zp, [
          q(ua, { icon: e.prependIcon }, null, 8, ["icon"])
        ])) : H("", !0),
        e.expand ? ca((y(), z("textarea", De({
          key: 1,
          id: e.id,
          ref_key: "input",
          ref: c,
          "onUpdate:modelValue": S[0] || (S[0] = (m) => o.value = m),
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
          "aria-describedby": w.value ? x.value : null,
          rows: e.rows,
          autofocus: e.autofocus
        }, _.$attrs, {
          onFocus: S[1] || (S[1] = (m) => n("focus", m)),
          onBlur: b
        }), null, 16, Gp)), [
          [zr, o.value]
        ]) : ca((y(), z("input", De({
          key: 2,
          id: e.id,
          ref_key: "input",
          ref: c,
          "onUpdate:modelValue": S[2] || (S[2] = (m) => o.value = m),
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
          "aria-describedby": w.value ? x.value : null,
          autofocus: e.autofocus
        }, _.$attrs, {
          onFocus: S[3] || (S[3] = (m) => n("focus", m)),
          onBlur: b
        }), null, 16, Jp)), [
          [zc, o.value]
        ]),
        N("div", Yp, [
          le(_.$slots, "inline", {}, () => [
            e.icon ? (y(), ee(ua, {
              key: 0,
              icon: s.value,
              class: ve({ "has-error": w.value })
            }, null, 8, ["icon", "class"])) : H("", !0),
            e.inline ? (y(), z("span", Xp, U(e.inline), 1)) : H("", !0),
            e.hotkey.label ? (y(), ee(Ul, {
              key: 2,
              hotkey: e.hotkey.label,
              variant: "secondary"
            }, null, 8, ["hotkey"])) : H("", !0)
          ], !0)
        ])
      ]),
      w.value && k(l) ? (y(), z("span", {
        key: 1,
        id: x.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, U(f.value.modelValue?.$errors[0]?.$message ? f.value.modelValue.$errors[0].$message : e.error), 9, Qp)) : H("", !0)
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
    const t = e, a = P(() => {
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
      class: ve(["status", e.status])
    }, [
      a.value ? (y(), ee(Jr, {
        key: 0,
        icon: a.value
      }, null, 8, ["icon"])) : H("", !0)
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
function df(e, t) {
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
const sf = ["data-testid"], cf = { class: "icon" }, uf = { class: "content" }, pf = { class: "title" }, ff = {
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
    const t = e, a = P(() => t.icon ? t.icon : t.type === "error" ? nf : t.type === "warning" ? lf : t.type === "success" ? of : t.type === "info" ? df : null);
    return (r, o) => (y(), z("div", {
      class: ve(["alert", e.type]),
      "data-testid": `alert-${e.type}`
    }, [
      le(r.$slots, "default", {}, () => [
        N("div", cf, [
          q(ft, { icon: a.value }, null, 8, ["icon"])
        ]),
        N("div", uf, [
          N("span", pf, U(e.title), 1),
          e.description ? (y(), z("span", ff, U(e.description), 1)) : H("", !0)
        ])
      ], !0)
    ], 10, sf));
  }
}, Yr = /* @__PURE__ */ pe(hf, [["__scopeId", "data-v-e623b23f"]]), vf = {
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
      class: ve(["loader", `${e.color}-loader ${e.size}-loader`])
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
    const t = e, a = Xn(), r = Rl()[t.hotkey.key], o = P(() => t.variant === "secondary" || t.variant === "tertiary" ? t.variant : t.variant === "text" ? "secondary" : "primary");
    return he(r, (i) => {
      i && t.hotkey?.key && !t.loading && !t.disabled && t.hotkey.callback();
    }), (i, n) => (y(), z("button", {
      class: ve(["button", [e.variant, e.size, e.color, k(a).default ? "" : "has-icon", e.loading ? "pointer-events-none" : ""]]),
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
      }, null, 8, ["icon"])) : H("", !0),
      le(i.$slots, "default", {}, void 0, !0),
      e.hotkey.key ? (y(), ee(Ul, {
        key: 2,
        hotkey: e.hotkey.label,
        variant: o.value,
        disabled: e.disabled
      }, null, 8, ["hotkey", "variant", "disabled"])) : H("", !0)
    ], 10, mf));
  }
}, Gt = /* @__PURE__ */ pe(gf, [["__scopeId", "data-v-2b556282"]]), Jl = {
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
    const a = e, r = t, o = Qa("measurements-form"), i = X({}), n = Je({
      width: null,
      height: null
    }), l = X(1), d = X(null), c = P(() => {
      const m = a.options.find((Q) => Q.code === "width"), $ = a.options.find((Q) => Q.code === "height"), E = m && m.reversible && $ && $.reversible, ae = m?.min, Y = $?.min;
      return E ? Math.min(ae, Y) : { width: ae, height: Y };
    }), s = P(() => {
      const m = a.options.find((Q) => Q.code === "width"), $ = a.options.find((Q) => Q.code === "height"), E = m && m.reversible && $ && $.reversible, ae = m?.max, Y = $?.max;
      return E ? Math.max(ae, Y) : { width: ae, height: Y };
    }), u = {
      width: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof c.value == "number" ? c.value : c.value.width
          }),
          Tr(typeof c.value == "number" ? c.value : c.value.width)
        ),
        required: Ue.withMessage(M("step.required"), Ga),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof s.value == "number" ? s.value : s.value.width
          }),
          Ar(typeof s.value == "number" ? s.value : s.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof c.value == "number" ? c.value : c.value.height
          }),
          Tr(typeof c.value == "number" ? c.value : c.value.height)
        ),
        required: Ue.withMessage(M("step.required"), Ga),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof s.value == "number" ? s.value : s.value.height
          }),
          Ar(typeof s.value == "number" ? s.value : s.value.height)
        )
      }
    }, p = Zt(u, n), h = X(null), f = P(() => a.buttonStartText || M("step.new_configuration")), w = P(() => {
      if (a.code === "measurement-amount") {
        const m = a.options.some((ae) => ae.code === "width"), $ = a.options.some((ae) => ae.code === "height"), E = a.options.some((ae) => ae.code === "amount");
        if (m && (!n.width || p.value.$errors.some((ae) => ae.$property === "width")) || $ && (!n.height || p.value.$errors.some((ae) => ae.$property === "height")) || E && !l.value)
          return !0;
      }
      return a.code === "amount" && !l.value;
    });
    function x(m, $) {
      if (m && $ && (!p.$errors || p.$errors.length === 0)) {
        const E = m * $ / 1e4 * l.value;
        d.value = Number(E.toFixed(2));
      }
    }
    async function b() {
      const m = await o.value.validate(), $ = a.options.some((Y) => Y.code === "width"), E = a.options.some((Y) => Y.code === "height"), ae = a.options.some((Y) => Y.code === "amount");
      i.value = [], $ && i.value.push({
        code: "width",
        value: n.width
      }), E && i.value.push({
        code: "height",
        value: n.height
      }), ae && i.value.push({
        code: "amount",
        value: l.value
      }), m && r("update:modelValue", i.value);
    }
    function _() {
      h.value?.getElementsByClassName("input")?.[0]?.focus();
    }
    function S(m) {
      setTimeout(() => {
        r("update:focus", m);
      }, 200);
    }
    return st(() => {
      _(), a.modelValue?.length && (n.width = a.modelValue.find((m) => m.code === "width")?.value, n.height = a.modelValue.find((m) => m.code === "height")?.value, l.value = a.modelValue.find((m) => m.code === "amount")?.value || 1);
    }), he(
      () => a.modelValue,
      (m) => {
        m?.length && (n.width = m.find(($) => $.code === "width")?.value, n.height = m.find(($) => $.code === "height")?.value, l.value = m.find(($) => $.code === "amount")?.value || 1, p.value.$touch());
      },
      { immediate: !0 }
    ), (m, $) => (y(), z("div", {
      id: "accordion-header-" + e.ariaTitle,
      class: ve(["configurator-step simple", { disabled: e.disabled }]),
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
            }, 8, ["text"])) : H("", !0),
            e.isHidden && e.editor ? (y(), ee(Ja, {
              key: 1,
              text: k(M)("option.step_is_hidden")
            }, {
              default: B(() => [
                q(ft, { icon: k(Yl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : H("", !0)
          ]),
          q(Jl, {
            ref: "measurements-form",
            class: "measurements-form"
          }, {
            default: B(() => [
              N("div", {
                class: ve(["measurement-inputs", { "has-errors": k(p).$errors && k(p).$errors.length }])
              }, [
                (y(!0), z(_e, null, qt(e.options, (E, ae) => (y(), z(_e, { key: ae }, [
                  E.code === "width" || E.code === "height" ? (y(), ee(kt, {
                    key: 0,
                    id: `measurement-input-${E.code}`,
                    modelValue: n[E.code],
                    "onUpdate:modelValue": [
                      (Y) => n[E.code] = Y,
                      $[0] || ($[0] = (Y) => x(n.width, n.height))
                    ],
                    required: "",
                    type: "number",
                    "aria-label": E.code,
                    class: "measurement-input",
                    inline: E.unit,
                    min: E.min,
                    max: E.max,
                    placeholder: k(M)(`step.${E.code}`),
                    error: k(p)[E.code].$errors ? k(p)[E.code].$errors[0]?.$message : "",
                    onBlur: (Y) => {
                      k(p)[E.code].$touch(Y), S(!1);
                    },
                    onKeyup: ot(qe((Y) => {
                      k(p)[E.code].$touch(Y), b();
                    }, ["stop"]), ["enter"]),
                    onFocus: $[1] || ($[1] = (Y) => S(!0))
                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "placeholder", "error", "onBlur", "onKeyup"])) : H("", !0),
                  E.code === "width" ? (y(), z("span", xf, " x ")) : E.code === "amount" ? (y(), ee(ei, {
                    key: 2,
                    modelValue: l.value,
                    "onUpdate:modelValue": [
                      $[2] || ($[2] = (Y) => l.value = Y),
                      $[6] || ($[6] = (Y) => x(n.width, n.height))
                    ],
                    min: E.min,
                    max: E.max || void 0,
                    onBlur: $[3] || ($[3] = (Y) => S(!1)),
                    onFocus: $[4] || ($[4] = (Y) => S(!0)),
                    onKeyup: $[5] || ($[5] = ot(qe((Y) => b(), ["stop"]), ["enter"]))
                  }, null, 8, ["modelValue", "min", "max"])) : H("", !0)
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
              }, 8, ["disabled"])) : H("", !0)
            ]),
            _: 1
          }, 512)
        ], 512),
        e.status === "attention" && e.attentionText ? (y(), z("span", kf, U(e.attentionText), 1)) : H("", !0),
        e.editor ? (y(), ee(Gt, {
          key: 1,
          variant: "url",
          size: "small",
          class: "edit-button",
          onClick: $[7] || ($[7] = qe((E) => r("edit:step"), ["stop"]))
        }, {
          default: B(() => [
            ue(U(k(M)("option.edit")), 1)
          ]),
          _: 1
        })) : H("", !0),
        d.value ? (y(), z("span", _f, U(e.totalPrefix || k(M)("step.total")) + ": " + U(d.value) + " m² ", 1)) : H("", !0)
      ]),
      e.alert ? (y(), z("div", $f, [
        q(Yr, Br(Go(e.alert)), null, 16)
      ])) : H("", !0)
    ], 10, bf));
  }
}, Cf = /* @__PURE__ */ pe(Sf, [["__scopeId", "data-v-c1ad972f"]]);
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
      class: ve(["label", [{ small: e.small }, { alt: e.alt }, e.color]])
    }, [
      le(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, ri = /* @__PURE__ */ pe(Ef, [["__scopeId", "data-v-f6c45fb8"]]), Of = ["srcset"], Tf = ["srcset"], Af = ["src", "alt", "height", "width"], Vf = {
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
    const a = t, r = e, o = X(!1);
    function i(l) {
      o.value = !0, a("error", l);
    }
    const n = P(() => r.image);
    return he(n, () => {
      o.value = !1;
    }), (l, d) => (y(), z("picture", {
      class: "image-wrapper",
      style: Jt({ width: `${e.width}px`, height: `${e.height}px` })
    }, [
      N("source", {
        media: "(max-width: 640px)",
        srcset: e.mobile
      }, null, 8, Of),
      N("source", {
        media: "(max-width: 1024px)",
        srcset: e.tablet
      }, null, 8, Tf),
      e.image && !o.value ? (y(), z("img", {
        key: 0,
        loading: "lazy",
        class: ve(["image", e.rounded ? `rounded-${e.rounded}` : ""]),
        src: e.image,
        alt: e.alt,
        height: e.height,
        width: e.width,
        onError: i
      }, null, 42, Af)) : (y(), z("div", {
        key: 1,
        class: ve(["skeleton", e.rounded ? `rounded-${e.rounded}` : ""])
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
      ])) : H("", !0),
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
          }, 1032, ["color"])) : H("", !0)
        ], 64))), 128))
      ])) : H("", !0),
      e.image && !e.editAmount ? (y(), ee(Pf, {
        key: 2,
        image: e.image,
        alt: `${e.title} ${k(M)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : H("", !0)
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
    const a = e, r = t, o = X(a.customInput.value), i = P({
      get: () => a.customInput.value,
      set: (l) => {
        o.value = Number(l);
      }
    });
    function n() {
      o.value && o.value > 0 && r("update:customValue", o.value);
    }
    return (l, d) => e.disabled && e.notAvailableMessage ? (y(), z("div", Df, [
      q(Jr, { icon: k(Bf) }, null, 8, ["icon"]),
      N("span", null, U(e.notAvailableMessage), 1)
    ])) : e.customInput.value && e.customInput.unit && !e.disabled && !e.notAvailableMessage ? (y(), z("div", Ff, [
      q(kt, {
        id: "custom-value",
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => i.value = c),
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
      ])) : H("", !0),
      e.price ? (y(), z("span", Hf, [
        ue(" € " + U(e.price) + " ", 1),
        e.pricePer ? (y(), z("span", Kf, " / " + U(e.pricePer), 1)) : H("", !0)
      ])) : H("", !0)
    ]));
  }
}, Zf = /* @__PURE__ */ pe(Wf, [["__scopeId", "data-v-fa946bbf"]]), Gf = ["tabindex", "aria-current", "part", "aria-disabled"], Jf = {
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
    const t = e, a = X(!1), r = P(() => t.deliveryTimeText !== "" ? `${t.deliveryTime} ${t.deliveryTimeText}` : Iu("option.days", t.deliveryTime)), o = P(() => {
      switch (t.pricePer) {
        case "unit":
          return M("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), i = et(e, "modelValue"), n = et(e, "amount"), l = P(() => t.amountLabel ? t.amountLabel : M("option.amount")), d = P(() => typeof n.value == "number" && n.value > 0);
    function c(p) {
      t.disabled || (a.value = d.value ? !a.value : !1, p ? n.value = p : i.value = !i.value);
    }
    function s(p, h) {
      let f = null;
      h === "left" && p ? f = p.previousElementSibling : h === "right" && p && (f = p.nextElementSibling);
      const w = f?.querySelector(".header");
      if (f && !w.disabled) {
        w.click();
        let x = null;
        const b = f.querySelector("input");
        setTimeout(() => {
          x = f.querySelector(".option-card"), x && !x.classList.contains("disabled") ? x.focus() : b && b.focus();
        }, 50);
      } else f && s(f, h);
    }
    function u(p, h) {
      const f = p.currentTarget.parentElement;
      if (h === "left") {
        const w = f.previousElementSibling?.querySelector(".option-card"), x = f.previousElementSibling?.querySelector(".overlay");
        w ? w.classList.contains("disabled") ? u({ currentTarget: w }, "left") : x ? x.click() : w.focus() : s(f.closest(".accordion-item"), "left");
      } else if (h === "right") {
        const w = f.nextElementSibling?.querySelector(".option-card"), x = f.nextElementSibling?.querySelector(".overlay");
        w ? w.classList.contains("disabled") ? u({ currentTarget: w }, "right") : x ? x.click() : w.focus() : s(f.closest(".accordion-item"), "right");
      }
    }
    return st(() => {
      n.value > 0 && i.value && (a.value = !0);
    }), he(n, (p, h) => {
      !h && p && (a.value = !0);
    }), he(i, () => {
      n.value && (a.value = !!i.value);
    }), (p, h) => (y(), z("article", {
      class: ve(["option-card", { selected: i.value, disabled: e.disabled }]),
      tabindex: e.disabled ? -1 : 0,
      "aria-current": i.value,
      "data-testid": "option",
      part: `option ${i.value ? "option-selected" : ""}`,
      "aria-disabled": e.disabled,
      onClick: h[2] || (h[2] = (f) => e.customInput.value ? null : c()),
      onKeyup: [
        h[3] || (h[3] = ot((f) => e.customInput.value ? null : c(), ["enter"])),
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
            e.title ? (y(), z("h3", eh, U(e.title), 1)) : H("", !0),
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
              "onUpdate:customValue": h[1] || (h[1] = (f) => c(f))
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
    return st(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), qr(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (a, r) => (y(), z("div", {
      class: ve(["overlay", { fixed: e.fixed }]),
      style: Jt({ background: `rgba(${e.color}, ${e.opacity / 100})` })
    }, [
      le(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, nh = /* @__PURE__ */ pe(ih, [["__scopeId", "data-v-66d42f70"]]), lh = { class: "option-step-container" }, dh = {
  class: "title",
  part: "step-title"
}, sh = {
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
    const a = e, r = t, o = X(!1), i = X([]), n = X([]), l = P({
      get: () => a.open,
      set: (b) => {
        r("update:accordionState", b);
      }
    }), d = P(() => n.value.map((b, _) => {
      if (!b)
        return null;
      if (a.options[_] && a.options[_].noOption)
        return a.options[_].noOptionText;
      let S = "";
      const m = i.value.find(($) => $.code === a.options[_].code);
      return m?.value > 0 && (S += `${m.value}x `), S += a.options[_].title, S;
    }).filter((b) => !!b).join(", ")), c = X(null);
    function s(b) {
      if (a.multiple || (i.value = []), i.value.length === 0 || i.value.some((S) => S.code === a.options[b].code) === !1) {
        let S;
        a.options[b].amount ? S = { code: a.options[b].code, value: a.options[b].amount } : S = { code: a.options[b].code }, i.value.push(S);
      }
      n.value[b] = !n.value[b];
      const _ = i.value.findIndex((S) => S.code === "no-option");
      if (_ > -1 && a.options[b].noOption)
        n.value.forEach((S, m) => {
          m !== b && (n.value[m] = !1);
        }), i.value = i.value.filter((S) => S.code === "no-option");
      else if (!a.options[b].noOption) {
        const S = a.options.findIndex((m) => m.noOption);
        S > -1 && (n.value[S] = !1), _ > -1 ? i.value.splice(_, 1) : n.value[b] === !1 && i.value.some((m) => m.code === a.options[b].code) && (i.value = i.value.filter((m) => m.code !== a.options[b].code));
      }
    }
    function u(b) {
      s(b), r("update:modelValue", i.value);
    }
    function p() {
      i.value.length === 0 && a.modelValue?.length ? i.value = a.modelValue : a.modelValue && Object.keys(a.modelValue).length && i.value.length === 0 && (i.value = [a.modelValue]), a.options.forEach((b) => {
        !b.noOption && b.code === a.modelValue?.code || Array.isArray(a.modelValue) && a.modelValue.some((_) => _.code === b.code) ? n.value.push(!0) : n.value.push(!1);
      }), a.code === "accessories" && Array.isArray(a.modelValue) && a.modelValue.length > 2 && (o.value = !0);
    }
    function h(b) {
      return a.code === "accessories" && b > 3 && !o.value;
    }
    function f(b, _) {
      a.multiple || s(b);
      const S = i.value.filter(($) => $.code !== a.options[b].code), m = { code: a.options[b].code, value: _ };
      i.value = [...S, m], r("update:modelValue", i.value);
    }
    function w() {
      setTimeout(() => {
        c.value?.length && c.value[0].$el.focus();
      }, 500);
    }
    function x(b) {
      return b.customInput?.value ? 0 : Array.isArray(a.modelValue) ? a.modelValue?.find((_) => _.code === b.code)?.value : a.modelValue?.value || b.amount || 0;
    }
    return p(), he(
      () => a.modelValue,
      () => {
        n.value = [], p();
      }
    ), he(
      () => a.open,
      () => {
        a.open && w();
      },
      { immediate: !0 }
    ), (b, _) => (y(), z("div", lh, [
      e.editor ? (y(), ee(Gt, {
        key: 0,
        variant: "url",
        size: "small",
        class: "edit-button",
        onClick: _[0] || (_[0] = qe((S) => r("edit:step"), ["stop"]))
      }, {
        default: B(() => [
          ue(U(k(M)("option.edit")), 1)
        ]),
        _: 1
      })) : H("", !0),
      q(Al, {
        modelValue: l.value,
        "onUpdate:modelValue": _[3] || (_[3] = (S) => l.value = S),
        class: "configurator-step options",
        "aria-title": e.ariaTitle,
        "scroll-into-view": "",
        part: "step",
        exportparts: "state-indicator-icon"
      }, {
        header: B(() => [
          q(Gl, { status: e.status }, null, 8, ["status"]),
          N("h3", dh, [
            ue(U(e.title) + " ", 1),
            e.hasOverwrites && e.editor ? (y(), ee(Ja, {
              key: 0,
              text: k(M)("option.step_has_overwrites")
            }, {
              default: B(() => [
                q(ft, { icon: k(Xl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : H("", !0),
            e.isHidden && e.editor ? (y(), ee(Ja, {
              key: 1,
              text: k(M)("option.step_is_hidden")
            }, {
              default: B(() => [
                q(ft, { icon: k(Yl) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["text"])) : H("", !0)
          ]),
          e.status === "attention" ? (y(), z("span", sh, U(e.attentionText || k(M)("option.attention")), 1)) : H("", !0),
          d.value ? (y(), z("span", ch, U(d.value), 1)) : H("", !0)
        ]),
        default: B(() => [
          N("div", null, [
            N("div", {
              class: ve(["option-container", {
                "show-all": e.code === "accessories" && o.value || e.code !== "accessories"
              }]),
              tabindex: "0"
            }, [
              (y(!0), z(_e, null, qt(e.options, (S, m) => (y(), z("div", {
                key: m,
                class: ve(["option", { hide: h(m) }])
              }, [
                m === 3 && !o.value && e.code === "accessories" ? (y(), ee(nh, {
                  key: 0,
                  tabindex: "0",
                  onClick: _[1] || (_[1] = qe(($) => o.value = !0, ["stop"])),
                  onKeyup: _[2] || (_[2] = ot(qe(($) => o.value = !0, ["stop"]), ["enter"]))
                }, {
                  default: B(() => [
                    ue(" +" + U(e.options.length - 3), 1)
                  ]),
                  _: 1
                })) : H("", !0),
                q(oh, De({
                  ref_for: !0,
                  ref_key: "optionCards",
                  ref: c
                }, { ref_for: !0 }, S, {
                  amount: x(S),
                  disabled: S.available === !1 || e.disabled,
                  "not-available-message": S.available === !1 ? e.unvailableText || k(M)("option.unavailable") : "",
                  "model-value": n.value[m],
                  exportparts: "option option-title option-description",
                  "onUpdate:amount": ($) => f(m, $),
                  "onUpdate:modelValue": ($) => u(m)
                }), null, 16, ["amount", "disabled", "not-available-message", "model-value", "onUpdate:amount", "onUpdate:modelValue"])
              ], 2))), 128))
            ], 2),
            e.alert ? (y(), ee(Yr, Br(De({ key: 0 }, e.alert)), null, 16)) : H("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "aria-title"])
    ]));
  }
}, ph = /* @__PURE__ */ pe(uh, [["__scopeId", "data-v-d799026d"]]), fh = {
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
    const t = e, a = X(!1), r = P(() => t.title ? t.title : M("delivery.delivery_options")), o = P(() => t.noCost ? t.noCost : M("delivery.no_extra_cost")), i = P(
      () => t.makeYourChoice ? t.makeYourChoice : M("delivery.make_your_choice_next_step")
    ), n = P(() => t.buttonTextShow ? t.buttonTextShow : M("delivery.see_more")), l = P(() => t.buttonTextHide ? t.buttonTextHide : M("delivery.see_less"));
    function d() {
      window.innerWidth >= 768 ? a.value = !0 : window.innerWidth < 768 && (a.value = !1);
    }
    return Ct(() => {
      window.addEventListener("resize", d);
    }), pa(() => {
      window.removeEventListener("resize", d);
    }), d(), (c, s) => (y(), z("div", fh, [
      N("div", hh, [
        N("h2", vh, U(r.value), 1),
        N("span", mh, [
          s[1] || (s[1] = N("span", { class: "align-sub" }, "*", -1)),
          ue(" " + U(i.value), 1)
        ])
      ]),
      N("div", gh, [
        (y(!0), z(_e, null, qt(e.items, (u, p) => (y(), z("div", {
          key: p,
          class: ve(["option", {
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
            }, 1032, ["color"])) : H("", !0)
          ]),
          N("span", wh, U(u.date), 1),
          u.cost ? (y(), z("span", yh, " + € " + U(u.cost), 1)) : (y(), z("span", xh, U(o.value), 1))
        ], 2))), 128)),
        q(Gt, {
          variant: "tertiary",
          onClick: s[0] || (s[0] = (u) => a.value = !a.value)
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
}, Ch = /* @__PURE__ */ pe(Sh, [["__scopeId", "data-v-6ad666e7"]]), zh = { class: "wrapper" }, Eh = { class: "header" }, Oh = { class: "content" }, Th = {
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
    const a = e, r = et(e, "modelValue"), o = Qa("drawer"), i = X(!1), n = X(50), l = X(!1);
    let d = null, c = null, s = null;
    function u() {
      if (!o.value)
        return;
      const m = a.overlay ? n.value / 100 : 0;
      o.value.style.setProperty("--drawer-backdrop-opacity", String(m));
    }
    function p(m = !1, $ = !1) {
      m && a.persistent && !$ || l.value && !$ || (l.value = !0, i.value = !1, n.value = 0, u(), d && (cancelAnimationFrame(d), d = null), c && (clearTimeout(c), c = null), s && clearTimeout(s), s = window.setTimeout(() => {
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
    function x() {
      o.value && (o.value.open || (a.overlay ? o.value.showModal() : o.value.show()), u());
    }
    function b() {
      s && clearTimeout(s);
      const m = w(), $ = () => {
        x(), d && cancelAnimationFrame(d), d = requestAnimationFrame(() => {
          i.value = !0, l.value = !1, n.value = 50, u();
        });
      };
      if (c && (clearTimeout(c), c = null), m) {
        n.value = 0, u(), m.dispatchEvent(new CustomEvent("drawer:force-close")), c = window.setTimeout($, 300);
        return;
      }
      $();
    }
    he(
      r,
      (m) => {
        if (m) {
          b();
          return;
        }
        p(!1, !0);
      },
      { flush: "post" }
    );
    function _(m) {
      if (a.persistent) {
        m.preventDefault();
        return;
      }
      p(!1, !0);
    }
    function S() {
      s && (clearTimeout(s), s = null), r.value && (r.value = !1), l.value || (i.value = !1), l.value = !1;
    }
    return st(() => {
      r.value && b();
    }), he(
      () => o.value,
      (m, $, E) => {
        m && (m.addEventListener("cancel", _), m.addEventListener("click", h), m.addEventListener("drawer:force-close", f), E(() => {
          m.removeEventListener("cancel", _), m.removeEventListener("click", h), m.removeEventListener("drawer:force-close", f);
        }));
      },
      { immediate: !0 }
    ), pa(() => {
      o.value?.open && o.value.close(), d && cancelAnimationFrame(d), c && clearTimeout(c), s && clearTimeout(s);
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
    }), (m, $) => r.value ? (y(), z("dialog", {
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
      onClose: S
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
            onClick: $[0] || ($[0] = (E) => p())
          }, null, 8, ["icon", "aria-label"])
        ]),
        N("div", Oh, [
          le(m.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 34)) : H("", !0);
  }
}, Ah = /* @__PURE__ */ pe(Th, [["__scopeId", "data-v-059f3a0f"]]), Vh = ["disabled"], Ph = {
  __name: "PSwitch",
  props: {
    modelValue: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, o = P({
      get: () => a.modelValue,
      set: (n) => {
        r("update:modelValue", n);
      }
    });
    function i() {
      o.value = !o.value;
    }
    return (n, l) => (y(), z("button", {
      class: ve(["switch", { enabled: o.value }]),
      "data-testid": "switch",
      disabled: e.disabled,
      "aria-label": "Use setting",
      onClick: l[0] || (l[0] = (d) => e.disabled ? null : i()),
      onKeydown: l[1] || (l[1] = ot(qe(() => {
      }, ["prevent"]), ["enter"]))
    }, [
      N("span", {
        class: ve(["dot", { enabled: o.value }]),
        "aria-hidden": "true"
      }, null, 2)
    ], 42, Vh));
  }
}, nn = /* @__PURE__ */ pe(Ph, [["__scopeId", "data-v-08900835"]]), jh = {}, Ih = { class: "form-row" }, Mh = {
  key: 0,
  class: "title"
}, Nh = {
  key: 1,
  class: "subtitle"
}, Bh = { class: "fields" };
function Lh(e, t) {
  return y(), z("div", Ih, [
    N("div", {
      class: ve(["label", { "hidden md:block": !e.$slots.title && !e.$slots.subtitle }])
    }, [
      e.$slots.title ? (y(), z("p", Mh, [
        le(e.$slots, "title", {}, void 0, !0)
      ])) : H("", !0),
      e.$slots.subtitle ? (y(), z("p", Nh, [
        le(e.$slots, "subtitle", {}, void 0, !0)
      ])) : H("", !0)
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
      })) : H("", !0)
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
    const t = X(null);
    function a(r) {
      if (!["ArrowUp", "ArrowDown"].includes(r.key))
        return;
      const o = vr(t.value), i = o.indexOf(r.target);
      r.key === "ArrowDown" ? o[i + 1]?.focus() : r.key === "ArrowUp" && o[i - 1]?.focus();
    }
    return (r, o) => (y(), z("div", {
      ref_key: "list",
      ref: t,
      class: ve(["list", { grid: e.grid }]),
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
      class: ve(["list-item", { clickable: e.clickable, active: e.active }]),
      "data-testid": e.clickable ? "clickable" : "list-item",
      tabindex: e.disabled ? -1 : 0,
      "aria-disabled": e.disabled
    }, [
      t.$slots.prepend ? (y(), z("div", Zh, [
        le(t.$slots, "prepend", {}, void 0, !0)
      ])) : H("", !0),
      N("div", Gh, [
        le(t.$slots, "content", {}, () => [
          e.title ? (y(), z("span", Jh, U(e.title), 1)) : H("", !0),
          e.subtitle ? (y(), z("span", Yh, U(e.subtitle), 1)) : H("", !0),
          N("span", Xh, U(e.text), 1)
        ], !0)
      ])
    ], 10, Wh));
  }
}, fo = /* @__PURE__ */ pe(Qh, [["__scopeId", "data-v-175d52b3"]]), ev = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], tv = {
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
    const t = e, a = et(e, "modelValue"), r = t.required ? { checked: { required: Ue.withMessage(M("checkbox.required"), wu(!0)) } } : null, o = Zt(r, { checked: a }), i = P(() => `${t.id}-error`);
    return (n, l) => (y(), z("div", {
      class: ve(["checkbox-container", { error: k(o).checked?.$errors[0]?.$message, large: e.large }])
    }, [
      N("label", {
        class: ve(["label", { disabled: e.disabled }])
      }, [
        ca(N("input", De(n.$attrs, {
          id: e.id,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => a.value = d),
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
          onBlur: l[1] || (l[1] = (d) => k(o).checked?.$touch(d))
        }), null, 16, ev), [
          [zl, a.value]
        ]),
        le(n.$slots, "label", {}, () => [
          ue(U(e.label), 1)
        ], !0),
        n.$slots.append ? (y(), z("span", tv, [
          le(n.$slots, "append", {}, void 0, !0)
        ])) : H("", !0)
      ], 2),
      k(o).checked?.$errors[0]?.$message ? (y(), z("span", {
        key: 0,
        id: i.value,
        role: "alert",
        "aria-live": "assertive",
        class: "error-message"
      }, U(k(o).checked.$errors[0].$message), 9, av)) : H("", !0)
    ], 2));
  }
}, ho = /* @__PURE__ */ pe(rv, [["__scopeId", "data-v-3dad8f2b"]]);
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
    return sc((t) => ({
      v1e7beddb: e.thickness
    })), (t, a) => (y(), z("hr", {
      class: ve(["divider", { vertical: e.vertical, flex: e.flex }])
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
}, lv = ["data-testid", "tabindex"], dv = ["for"], sv = ["aria-invalid", "aria-describedby"], cv = { class: "label-inner" }, uv = ["onClick"], pv = {
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
    const r = a, o = e, i = It("showError", !0), n = X(!1), l = X(!1), d = X(!1), c = X(null), s = X(null), u = X(null), p = X(null), h = X(null), f = X(() => {
    }), w = X(() => {
    }), x = X(() => {
    }), b = P({
      get() {
        return o.multiple && !Array.isArray(o.modelValue) ? [] : o.modelValue;
      },
      set(W) {
        if (o.multiple) {
          r("update:modelValue", W);
          return;
        }
        r("update:modelValue", o.returnObject || !o.itemValue ? W : W?.[o.itemValue]);
      }
    }), _ = P(() => o.requiredMessage ? o.requiredMessage : o.label ? M("input.required_with_label", { label: o.label.toLowerCase() }) : M("input.required")), S = P(() => o.required ? { value: { required: Ue.withMessage(() => _.value, Ga) } } : { value: {} }), m = Zt(S.value, { value: b }), $ = P(() => !o.required || o.required && !m.value?.$errors[0]), E = P(() => !!o.error || m.value?.$errors?.length > 0 || !$.value), ae = P(() => Array.isArray(b.value) && b.value.length > 0), Y = P(() => `${o.id}-error`);
    function Q(W) {
      return o.itemValue ? W[o.itemValue] : W;
    }
    function G(W) {
      return o.multiple ? o.modelValue?.includes(Q(W)) || !1 : b.value === Q(W);
    }
    function ne(W) {
      let me = null;
      return (typeof W == "string" || typeof W == "number") && !o.itemText ? W : (typeof o.itemText == "string" && o.itemText?.includes(".") && (me = ov(W, o.itemText)), !W || typeof o.itemText == "string" && (!o.itemText?.includes(".") && W[o.itemText] === void 0 || o.itemText?.includes(".") && me == null) ? "" : o.itemText && typeof o.itemText == "string" && !o.itemText.includes(".") ? W[o.itemText] : typeof o.itemText == "function" ? o.itemText(W) : me);
    }
    function F(W) {
      if (!W)
        return "";
      if (o.grouped) {
        const me = o.items.find(
          (fe) => fe[o.groupItems].find((ge) => Q(ge) === W)
        )[o.groupItems].find((fe) => Q(fe) === W);
        return ne(me);
      }
      return !o.returnObject && o.itemValue ? ne(o.items.find((me) => Q(me) === W)) : ne(W);
    }
    function I(W) {
      b.value.splice(b.value.indexOf(W), 1), r("update:modelValue", b.value);
    }
    function L(W) {
      if (!o.multiple) {
        b.value = W;
        return;
      }
      if (b.value.includes(Q(W))) {
        b.value = b.value.filter((me, fe) => fe !== b.value.indexOf(Q(W)));
        return;
      }
      b.value = [...b.value, Q(W)];
    }
    function O(W) {
      const me = o.returnObject || !o.itemValue ? W[o.groupItems] : W[o.groupItems].map((tt) => tt[o.itemValue]);
      let fe = !1, ge = !0;
      return me.forEach((tt) => {
        b.value.includes(tt) ? fe = !0 : ge = !1;
      }), ge ? !0 : fe ? "indeterminate" : !1;
    }
    function K(W) {
      const me = o.returnObject || !o.itemValue ? W[o.groupItems] : W[o.groupItems].map((fe) => fe[o.itemValue]);
      if (O(W) === !0) {
        me.forEach((fe) => {
          I(fe);
        });
        return;
      }
      r("update:modelValue", Array.from(/* @__PURE__ */ new Set([...b.value, ...me])));
    }
    function ce(W) {
      n.value = W, r("update:isOpen", W);
    }
    function oe(W) {
      d.value = W, r("update:focus", W), !W && r("update:inputValue", null);
    }
    function He() {
      o.behavior === "manual" && w.value(), o.behavior === "focus" && !n.value && requestAnimationFrame(() => {
        p.value.focus();
      });
    }
    function $e(W, me) {
      p.value = W, o.behavior === "manual" && (f.value = me.setActivator, w.value = me.toggle, x.value = me.onKeydown);
    }
    async function Ve() {
      return u;
    }
    const Te = P(() => o.inputValue !== null ? o.inputValue : o.multiple ? null : F(b.value));
    return he(
      () => [d.value, l.value],
      () => {
        !d.value && !l.value && m.value.$touch();
      }
    ), t({
      getSelectContent: Ve,
      getItemText: ne,
      setActivator: f,
      toggle: w,
      onKeydown: x,
      input: p
    }), (W, me) => (y(), ee(Zl, {
      ref_key: "floatingContainer",
      ref: h,
      "aria-label": "Options",
      transition: "expand",
      offset: o.offset !== null ? o.offset : 1,
      attach: c.value,
      behavior: e.behavior,
      "close-on-click": !o.multiple,
      "onUpdate:isOpen": ce,
      "onUpdate:focus": oe
    }, {
      activator: B((fe) => [
        N("div", De(e.behavior === "click" ? { ...W.$attrs, ...W.disabled ? {} : fe } : null, {
          "data-testid": o.dataTestid,
          class: ["base-select", [o.class, e.behavior, { "is-open": n.value, disabled: o.disabled }]],
          tabindex: e.behavior === "click" && !W.disabled ? 0 : null,
          onFocus: me[5] || (me[5] = (ge) => l.value = !0),
          onBlur: me[6] || (me[6] = (ge) => l.value = !1)
        }), [
          W.label ? (y(), z("label", {
            key: 0,
            class: "input-label",
            for: W.id
          }, [
            N("span", null, U(W.label), 1)
          ], 8, dv)) : H("", !0),
          N("div", {
            ref_key: "selectWrapper",
            ref: c,
            class: ve(["wrapper", { focus: d.value || l.value, "has-error": E.value }]),
            "aria-invalid": E.value,
            "aria-describedby": E.value ? Y.value : null
          }, [
            W.prependIcon ? (y(), ee(ft, {
              key: 0,
              class: "prepend-icon",
              icon: W.prependIcon
            }, null, 8, ["icon"])) : H("", !0),
            ae.value ? (y(), z("div", {
              key: 1,
              ref_key: "selectedItems",
              ref: s,
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
                      q(Jr, { icon: k(qh) }, null, 8, ["icon"])
                    ], 8, uv)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ], 512)) : !W.multiple && e.behavior === "click" && b.value ? (y(), z("div", pv, U(F(b.value)), 1)) : H("", !0),
            e.behavior === "click" ? ca((y(), z("div", {
              key: 3,
              class: "placeholder"
            }, U(o.placeholder), 513)), [
              [Yo, !b.value || b.value.length === 0]
            ]) : (y(), z("input", De({ key: 4 }, e.behavior === "focus" ? { ...W.$attrs, ...fe } : W.$attrs, {
              id: o.id,
              ref: (ge) => $e(ge, fe),
              placeholder: o.placeholder,
              disabled: o.disabled,
              readonly: o.readonly,
              value: Te.value,
              autocomplete: "off",
              "aria-invalid": E.value,
              "aria-describedby": E.value ? Y.value : null,
              onInput: me[0] || (me[0] = (ge) => W.$emit("update:inputValue", ge.target.value)),
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
              ], 8, vv)) : H("", !0),
              le(W.$slots, "inline", {}, () => [
                W.hideChevron ? H("", !0) : (y(), z("button", {
                  key: 0,
                  "aria-label": k(M)("input.toggle"),
                  tabindex: "-1",
                  type: "button",
                  "data-testid": "toggle-chevron",
                  disabled: o.disabled,
                  onClick: He
                }, [
                  q(ft, {
                    class: ve(["state-indicator", { "is-open": n.value }]),
                    icon: k(Rh)
                  }, null, 8, ["icon", "class"])
                ], 8, mv))
              ], !0)
            ])
          ], 10, sv),
          E.value && k(i) ? (y(), z("div", {
            key: 1,
            id: Y.value,
            role: "alert",
            "aria-live": "assertive",
            class: "error"
          }, U(k(m).value?.$errors[0]?.$message ? k(m).value.$errors[0].$message : o.error), 9, gv)) : H("", !0)
        ], 16, lv)
      ]),
      default: B(() => [
        W.showDivider ? (y(), z("hr", bv)) : H("", !0),
        N("div", {
          ref_key: "selectContent",
          ref: u,
          class: ve(["select-content", { "remove-radius": W.showDivider, "show-shadow": !W.showDivider }])
        }, [
          le(W.$slots, "prepend-list", {}, void 0, !0),
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
                o.items.indexOf(fe) !== 0 ? (y(), ee(nv, { key: 0 })) : H("", !0),
                o.grouped ? (y(), ee(fo, {
                  key: 1,
                  title: fe[o.groupText],
                  clickable: o.multiple,
                  disabled: !o.multiple,
                  onClick: (ge) => o.multiple && K(fe),
                  onKeydown: ot((ge) => o.multiple && K(fe), ["enter"])
                }, oo({ _: 2 }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: B(() => [
                      q(ho, {
                        id: `group-${o.items.indexOf(fe)}-checkbox`,
                        "model-value": typeof O(fe) == "boolean" ? O(fe) : !1,
                        indeterminate: O(fe) === "indeterminate",
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : H("", !0),
                (y(!0), z(_e, null, qt(fe[o.groupItems], (ge, tt) => (y(), ee(fo, {
                  key: tt,
                  clickable: "",
                  active: G(ge),
                  text: ne(ge),
                  onClick: (fa) => L(ge),
                  onKeydown: ot((fa) => L(ge), ["enter"])
                }, oo({
                  content: B(() => [
                    le(W.$slots, "option", {
                      selected: G(ge),
                      option: ge
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  o.multiple ? {
                    name: "prepend",
                    fn: B(() => [
                      q(ho, {
                        id: `item-${fe[o.groupItems].indexOf(ge)}-checkbox`,
                        "model-value": G(ge),
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : ne(fe) || W.$slots.option ? (y(), ee(fo, {
                key: 1,
                clickable: "",
                active: G(fe),
                text: ne(fe),
                onClick: (ge) => L(fe),
                onKeydown: ot((ge) => L(fe), ["enter"])
              }, oo({
                content: B(() => [
                  le(W.$slots, "option", {
                    selected: G(fe),
                    option: fe
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                o.multiple ? {
                  name: "prepend",
                  fn: B(() => [
                    q(ho, {
                      id: `item-${o.items.indexOf(fe)}-checkbox`,
                      "model-value": G(fe),
                      tabindex: "-1"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"])) : H("", !0)
            ]),
            _: 3
          }, 8, ["items"])) : o.hideNoItemsLabel ? H("", !0) : (y(), z("div", wv, U(o.noItemsLabel || k(M)("input.no_results")), 1)),
          le(W.$slots, "append-list", {}, void 0, !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["offset", "attach", "behavior", "close-on-click"]));
  }
}, xv = /* @__PURE__ */ pe(yv, [["__scopeId", "data-v-7e184a2a"]]), kv = {
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
    const r = e, o = a, i = P(() => {
      const { loading: m, ...$ } = r;
      return $;
    }), n = P({
      get() {
        return r.multiple && !Array.isArray(r.modelValue) ? [r.modelValue] : r.modelValue;
      },
      set(m) {
        o("update:modelValue", m);
      }
    }), l = X(null), d = X(null), c = X(null), s = X(null), u = X(null), p = X(!1), h = X(!1);
    function f() {
      d.value = null, n.value = null, l.value.blur();
    }
    const w = P(() => !d.value || r.serverside ? r.items : r.itemText ? r.grouped ? r.items.filter(
      (m) => m[r.groupItems].some(
        ($) => l.value.getItemText($).toLowerCase().replace(/\s+/g, "").includes(d.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map((m) => {
      const $ = m[r.groupItems].filter(
        (E) => l.value.getItemText(E).toLowerCase().replace(/\s+/g, "").includes(d.value.toLowerCase().replace(/\s+/g, ""))
      );
      return $.length ? {
        ...m,
        [r.groupItems]: $
      } : null;
    }) : r.items.filter(
      (m) => l.value.getItemText(m).toLowerCase().replace(/\s+/g, "").includes(d.value.toLowerCase().replace(/\s+/g, ""))
    ) : r.items.filter(
      (m) => m.toLowerCase().replace(/\s+/g, "").includes(d.value.toLowerCase().replace(/\s+/g, ""))
    ));
    async function x() {
      const m = (await l.value.getSelectContent()).value;
      m?.scrollTo(0, m.scrollHeight);
    }
    function b(m, $ = 4) {
      return m ? m.scrollTop + m.clientHeight >= m.scrollHeight - $ : !1;
    }
    async function _(m) {
      if (p.value = m, m) {
        await Ct(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame);
        const $ = (await l.value.getSelectContent()).value;
        s.value = new IntersectionObserver(
          (E) => {
            E[0].isIntersecting && !h.value && !r.loading && (o("intersect"), b($) && x());
          },
          {
            root: $,
            threshold: 0
          }
        ), s.value.observe(c.value);
        return;
      }
      s.value?.disconnect(), s.value = null;
    }
    function S(m) {
      if (!r.serverside) {
        o("search", m);
        return;
      }
      m !== null && (h.value = !0, clearTimeout(u.value), u.value = setTimeout(() => {
        p.value && o("search", m), h.value = !1;
      }, 500));
    }
    return t({
      reset: f,
      select: l,
      scrollToBottom: x
    }), (m, $) => (y(), ee(xv, De({
      id: m.id,
      ref_key: "select",
      ref: l,
      "input-value": d.value,
      "onUpdate:inputValue": $[1] || ($[1] = (E) => d.value = E)
    }, i.value, {
      behavior: "focus",
      "hide-no-items-label": e.loading || h.value,
      items: h.value ? [] : w.value,
      "onUpdate:inputValue": $[2] || ($[2] = (E) => S(E)),
      "onUpdate:focus": $[3] || ($[3] = (E) => E && o("search", "")),
      "onUpdate:isOpen": $[4] || ($[4] = (E) => _(E)),
      "onUpdate:modelValue": $[5] || ($[5] = (E) => n.value = E)
    }), {
      inline: B(() => [
        le(m.$slots, "inline", {}, void 0, !0)
      ]),
      option: B(({ option: E, selected: ae }) => [
        le(m.$slots, "option", {
          selected: ae,
          option: E
        }, void 0, !0)
      ]),
      "append-list": B(() => [
        N("div", {
          ref_key: "intersect",
          ref: c,
          class: "intersect"
        }, [
          e.loading || h.value ? (y(), ee(ai, {
            key: 0,
            class: "search-loader",
            onClick: $[0] || ($[0] = qe(() => {
            }, ["prevent"]))
          })) : H("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
}, _v = /* @__PURE__ */ pe(kv, [["__scopeId", "data-v-0951cb5e"]]);
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
    function d(I = {}) {
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
    function c() {
      if (!r.value)
        return new ga();
      const I = (o.value?.overwrites?.steps ?? []).find((K) => K.code === r.value.code), L = I ? d(I) : null;
      if (L)
        return new ga(L);
      const O = r.value.options?.map((K) => ({
        code: K.code,
        overwrites: {}
      })) ?? [];
      return new ga({
        code: r.value.code,
        overwrites: {
          options: O
        }
      });
    }
    function s(I) {
      const L = o.value && typeof o.value == "object" ? o.value : {}, O = Array.isArray(L.overwrites?.steps) ? L.overwrites.steps.map((oe) => d(oe)) : [], K = d({
        code: I.code ?? r.value?.code,
        overwrites: I.overwrites
      }), ce = O.findIndex((oe) => oe.code === K.code);
      ce !== -1 ? O.splice(ce, 1, K) : O.push(K), o.value = {
        code: L.code ?? t.productCode ?? null,
        overwrites: {
          ...L.overwrites,
          steps: O
        }
      }, i.value = new ga(K);
    }
    function u(I) {
      const L = new ga({
        code: i.value.code ?? r.value?.code,
        overwrites: {
          ...i.value.overwrites,
          options: l(i.value.overwrites?.options ?? [])
        }
      });
      I(L), s(L);
    }
    he(
      [() => r.value, () => o.value],
      () => {
        i.value = c();
      },
      { immediate: !0, deep: !0 }
    );
    function p(I, L) {
      u((O) => {
        O.overwrites[I] = L;
      });
    }
    function h(I, L) {
      u((O) => {
        const K = Array.isArray(O.overwrites.options) ? O.overwrites.options : [];
        let ce = !1;
        if (O.overwrites.options = K.map((oe) => {
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
          L(oe), O.overwrites.options = [
            ...O.overwrites.options,
            {
              code: I,
              overwrites: oe
            }
          ];
        }
      });
    }
    function f(I, L, O) {
      h(I, (K) => {
        K[L] = O;
      });
    }
    function w(I) {
      if (I == null || I === "")
        return null;
      const L = typeof I == "number" ? I : Number(I);
      return Number.isFinite(L) ? L : null;
    }
    function x(I, L) {
      const O = w(L);
      h(I, (K) => {
        if (O === null) {
          delete K.value;
          return;
        }
        K.value = O;
      });
    }
    function b(I, L) {
      return i.value.overwrites?.options?.find((O) => O.code === I)?.overwrites?.[L] ?? null;
    }
    const _ = X([]), S = P({
      get: () => ({
        width: b("width", "value"),
        height: b("height", "value")
      }),
      set: (I) => {
        x("width", I.width), x("height", I.height);
      }
    }), m = P({
      get: () => b("amount", "value") ?? 1,
      set: (I) => {
        u((L) => {
          L.overwrites.options = L.overwrites.options.map((O) => O.code === "amount" ? {
            ...O,
            overwrites: {
              ...O.overwrites ?? {},
              value: I
            }
          } : O);
        });
      }
    }), $ = P(() => {
      const I = r.value?.options?.find((oe) => oe.code === "width"), L = r.value?.options?.find((oe) => oe.code === "height"), O = I && I.reversible && L && L.reversible, K = I?.min, ce = L?.min;
      return O ? Math.min(K, ce) : { width: K, height: ce };
    }), E = P(() => {
      const I = r.value?.options?.find((oe) => oe.code === "width"), L = r.value?.options?.find((oe) => oe.code === "height"), O = I && I.reversible && L && L.reversible, K = I?.max, ce = L?.max;
      return O ? Math.max(K, ce) : { width: K, height: ce };
    }), ae = P(() => ({
      width: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof $.value == "number" ? $.value : $.value.width
          }),
          Tr(typeof $.value == "number" ? $.value : $.value.width)
        ),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof E.value == "number" ? E.value : E.value.width
          }),
          Ar(typeof E.value == "number" ? E.value : E.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          M("step.min_value", {
            minValue: typeof $.value == "number" ? $.value : $.value.height
          }),
          Tr(typeof $.value == "number" ? $.value : $.value.height)
        ),
        maxValue: Ue.withMessage(
          M("step.max_value", {
            maxValue: typeof E.value == "number" ? E.value : E.value.height
          }),
          Ar(typeof E.value == "number" ? E.value : E.value.height)
        )
      }
    })), Y = Zt(ae, S), Q = P(() => r.value?.options?.some((I) => ["width", "height", "amount"].includes(I.code))), G = P(
      () => r.value.options?.find((I) => I.code === i.value.overwrites.selected)
    );
    function ne() {
      i.value = c(), s(i.value), Y.value.$reset();
    }
    async function F() {
      await n.value.validate() && (a.value = !1);
    }
    return (I, L) => (y(), ee(Ah, {
      modelValue: a.value,
      "onUpdate:modelValue": L[8] || (L[8] = (O) => a.value = O),
      position: "right",
      title: k(M)("editor.editing_step", { step: r.value?.title }),
      persistent: k(Y).$errors.length > 0
    }, {
      default: B(() => [
        k(Y).$errors.length ? (y(), ee(Yr, {
          key: 0,
          title: k(M)("editor.editor_alert.title"),
          description: k(M)("editor.editor_alert.description"),
          type: "error"
        }, null, 8, ["title", "description"])) : H("", !0),
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
                      "onUpdate:modelValue": L[0] || (L[0] = (O) => p("hide", O))
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                Q.value ? H("", !0) : (y(), z(_e, { key: 0 }, [
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
                        "onUpdate:modelValue": L[1] || (L[1] = (O) => p("selected", O))
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
                            validator: (O) => {
                              if (O === "" || O === null || O === void 0)
                                return !0;
                              const K = G.value?.customInput?.min ?? 0;
                              return Number(O) >= K;
                            },
                            message: k(M)("step.min_value", {
                              minValue: G.value?.customInput?.min ?? 0
                            })
                          },
                          {
                            validator: (O) => {
                              if (O === "" || O === null || O === void 0)
                                return !0;
                              const K = G.value?.customInput?.max ?? 1 / 0;
                              return Number(O) <= K;
                            },
                            message: k(M)("step.max_value", {
                              maxValue: G.value?.customInput?.max ?? 1 / 0
                            })
                          }
                        ],
                        "onUpdate:modelValue": L[2] || (L[2] = (O) => p("value", Number(O)))
                      }, null, 8, ["model-value", "placeholder", "required", "inline", "min", "max", "rules"])
                    ]),
                    _: 1
                  })) : H("", !0),
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
                        "onUpdate:modelValue": L[3] || (L[3] = (O) => p("title", O))
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
                        "onUpdate:modelValue": L[4] || (L[4] = (O) => p("description", O))
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
              modelValue: _.value,
              "onUpdate:modelValue": L[6] || (L[6] = (O) => _.value = O),
              items: r.value.options?.map((O) => ({
                ...O,
                title: O.title || k(M)(`editor.edit_option.${O.code}`)
              })),
              title: "title"
            }, {
              content: B((O) => [
                q(ln, null, {
                  default: B(() => [
                    ["height", "width", "amount"].includes(O.code) ? (y(), ee(rt, { key: 0 }, {
                      title: B(() => [
                        ue(U(k(M)(`editor.${O.code}.title`)), 1)
                      ]),
                      default: B(() => [
                        O.code === "width" || O.code === "height" ? (y(), ee(kt, {
                          key: 0,
                          id: `measurement-input-${O.code}`,
                          "model-value": S.value[O.code] ?? "",
                          type: "number",
                          "aria-label": O.code,
                          class: "measurement-input",
                          inline: O.unit,
                          min: O.min,
                          max: O.max,
                          placeholder: "",
                          error: k(Y)[O.code].$errors ? k(Y)[O.code].$errors[0]?.$message : "",
                          onBlur: (K) => k(Y)[O.code].$touch(K),
                          "onUpdate:modelValue": (K) => x(O.code, K),
                          onKeyup: ot((K) => k(Y)[O.code].$touch(K), ["enter"])
                        }, null, 8, ["id", "model-value", "aria-label", "inline", "min", "max", "error", "onBlur", "onUpdate:modelValue", "onKeyup"])) : O.code === "amount" ? (y(), ee(ei, {
                          key: 1,
                          modelValue: m.value,
                          "onUpdate:modelValue": L[5] || (L[5] = (K) => m.value = K),
                          min: O.min,
                          max: O.max || void 0
                        }, null, 8, ["modelValue", "min", "max"])) : H("", !0)
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
                            "model-value": !!b(O.code, "hide"),
                            "onUpdate:modelValue": (K) => f(O.code, "hide", K)
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
                            id: `option-title-input-${O.code}`,
                            "model-value": b(O.code, "title") ?? "",
                            type: "text",
                            placeholder: k(M)("editor.edit_option_title.placeholder"),
                            "onUpdate:modelValue": (K) => f(O.code, "title", K)
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
                            id: `option-description-input-${O.code}`,
                            "model-value": b(O.code, "description") ?? "",
                            type: "text",
                            placeholder: k(M)("editor.edit_description.placeholder"),
                            "onUpdate:modelValue": (K) => f(O.code, "description", K)
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
                            id: `option-image-input-${O.code}`,
                            "model-value": b(O.code, "image") ?? "",
                            type: "text",
                            placeholder: k(M)("editor.edit_image.placeholder"),
                            "onUpdate:modelValue": (K) => f(O.code, "image", K)
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
                            id: `option-sequence-input-${O.code}`,
                            "model-value": b(O.code, "sequence") ?? "",
                            type: "number",
                            placeholder: k(M)("editor.edit_sequence.placeholder"),
                            rules: [
                              {
                                validator: (K) => K >= 0,
                                message: k(M)("editor.min_sequence", {
                                  min: 0
                                })
                              },
                              {
                                validator: (K) => K <= r.value.options.length,
                                message: k(M)("editor.max_sequence", {
                                  max: r.value.options.length
                                })
                              },
                              {
                                message: k(M)("editor.number_should_not_exist_twice"),
                                validator: (K) => r.value.options.map(
                                  (ce) => b(ce.code, "sequence")
                                ).filter((ce) => ce === K).length <= 1
                              }
                            ],
                            "onUpdate:modelValue": (K) => f(O.code, "sequence", K)
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
            onClick: L[7] || (L[7] = (O) => F())
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
}, Ov = {
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
    const a = e, r = t, o = et(e, "overwrites"), i = et(e, "accordionState"), n = et(e, "modelValue"), l = X(!1), d = X(!1), c = X({});
    function s(h, f) {
      i.value[f] = h, i.value.forEach((w, x) => {
        x !== f && (i.value[x] = !1);
      });
    }
    function u(h, f) {
      const w = { ...n.value };
      w.options[f] = h, r("update:modelValue", w);
    }
    function p(h) {
      c.value = h, d.value = !0;
    }
    return (h, f) => (y(), z("div", Ev, [
      q(Vl, {
        modelValue: i.value,
        "onUpdate:modelValue": f[3] || (f[3] = (w) => i.value = w),
        items: e.template
      }, {
        default: B(({ item: w, index: x, open: b }) => [
          w.type === "simple" ? (y(), ee(Cf, De({
            key: 0,
            modelValue: n.value.options[x],
            "onUpdate:modelValue": (_) => n.value.options[x] = _,
            overwrites: o.value,
            "onUpdate:overwrites": f[0] || (f[0] = (_) => o.value = _)
          }, { ...w }, {
            "aria-title": w.title.toLowerCase().replaceAll(" ", "-"),
            "button-start-text": e.buttonStartText,
            editor: e.editor,
            "has-overwrites": o.value?.overwrites?.steps?.some((_) => _.code === w.code),
            "is-hidden": o.value?.overwrites?.steps?.some((_) => _.code === w.code && _.overwrites.hide),
            exportparts: "step step-title step-subtitle",
            "onEdit:step": (_) => p(w),
            "onUpdate:modelValue": (_) => u(_, x),
            "onUpdate:focus": f[1] || (f[1] = (_) => l.value = _)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "aria-title", "button-start-text", "editor", "has-overwrites", "is-hidden", "onEdit:step"])) : w.type === "options" || w.type === "options-multiple" ? (y(), ee(ph, De({
            key: 1,
            modelValue: n.value.options[x],
            "onUpdate:modelValue": (_) => n.value.options[x] = _,
            overwrites: o.value,
            "onUpdate:overwrites": f[2] || (f[2] = (_) => o.value = _)
          }, { ...w }, {
            open: b,
            multiple: w.type === "options-multiple",
            "aria-title": w.title.toLowerCase().replaceAll(" ", "-"),
            disabled: l.value || e.loading,
            editor: e.editor,
            "has-overwrites": o.value?.overwrites?.steps?.some((_) => _.code === w.code),
            "is-hidden": o.value?.overwrites?.steps?.some((_) => _.code === w.code && _.overwrites.hide),
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onEdit:step": (_) => p(w),
            "onUpdate:modelValue": u,
            "onUpdate:accordionState": (_) => s(_, x)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "open", "multiple", "aria-title", "disabled", "editor", "has-overwrites", "is-hidden", "onEdit:step", "onUpdate:accordionState"])) : H("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      e.deliveryOptions.length && !e.hideDeliverySection ? (y(), ee(_h, {
        key: 0,
        items: e.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : H("", !0),
      e.loading ? (y(), ee(ai, { key: 1 })) : H("", !0),
      e.editor ? (y(), ee(zv, {
        key: 2,
        modelValue: d.value,
        "onUpdate:modelValue": f[4] || (f[4] = (w) => d.value = w),
        step: c.value,
        "onUpdate:step": f[5] || (f[5] = (w) => c.value = w),
        overwrites: o.value,
        "onUpdate:overwrites": f[6] || (f[6] = (w) => o.value = w),
        "product-code": a.productCode
      }, null, 8, ["modelValue", "step", "overwrites", "product-code"])) : H("", !0)
    ]));
  }
}, Tv = /* @__PURE__ */ pe(Ov, [["__scopeId", "data-v-4ef00907"]]);
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
class ed extends Av {
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
class dn {
  constructor({ code: t, options: a }) {
    this.code = t, this.options = a || [];
  }
}
class sn {
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
    city: d,
    country: c,
    phone: s,
    email: u
  }) {
    this.companyName = t, this.firstName = a, this.lastName = r, this.street = o, this.houseNumber = i, this.addition = n, this.postalCode = l, this.city = d, this.country = c, this.phone = s, this.email = u;
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
}, td = Je({ language: "nl" });
function Iv(e) {
  return Pv(jv[td.language], e) || e;
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
  td.language = e;
}
function ad(e, t) {
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
    const l = r?.find((c) => c.code === n.code)?.overwrites;
    let d;
    return (n.type_code === "number" || n.type_code === "decimal") && (d = {
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
      customInput: d,
      labels: n.label ? [
        {
          text: n.label,
          color: "red"
        }
      ] : void 0,
      sequence: l?.sequence
    };
  }).filter((n) => !r?.find((d) => d.code === n.code)?.overwrites.hide).sort((n, l) => n.sequence - l.sequence);
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
  const d = l.map((p) => {
    let h = p.code === "measurement-amount" || p.code === "amount" ? "simple" : "options";
    const f = o?.find((b) => b.code === p.code)?.overwrites, w = Rv(p.children, r, p.code, f?.options);
    let { code: x } = p;
    return x === "accessories-cross-sell" && (x = "accessories", h = "options-multiple"), {
      code: x,
      title: f && f.title ? f.title : p.name,
      type: h,
      options: w,
      hidden: f && f.hide && !n
    };
  }), c = e.some((p) => p.code === "measurement-amount") || i, s = a !== -1 && c ? a - 2 : a;
  return [...ad(e, s), ...d];
}
function rd(e) {
  let t = 1 / 0, a;
  return e.forEach((r) => {
    const o = r.prices.purchase_rush_surcharge;
    o < t && (t = o, a = r);
  }), a;
}
function od(e) {
  let t = null, a = 1 / 0;
  return e.forEach((r) => {
    const o = rd(r.deliveries), i = o.prices.purchase_rush_surcharge;
    i < a && (a = i, t = o);
  }), t;
}
function qv(e, t) {
  const a = od(e);
  let r = 0;
  return e.map((o, i) => {
    let n;
    const l = rd(o.deliveries);
    return i === 0 && (n = { text: $t("fastest"), color: "red" }), a && l.shipping_method_api_code === a.shipping_method_api_code && r === 0 && (n || (n = { text: $t("cheapest"), color: "green" }), r += 1), {
      date: Dv(o.delivery_date, t),
      day: Lv(o.delivery_date, t),
      cost: l.prices.purchase_rush_surcharge,
      label: n
    };
  });
}
function Hv(e, t) {
  const r = e[0][`products_${t}`].toString(), o = od(e), i = o.prices.purchase_shipping_price, n = o.prices.purchase_packaging_price;
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
function id(e) {
  return e.includes("Can not find unique id for option") ? $t("errors.invalid_or_duplicate") : e.includes("Restrictions are not met") ? $t("errors.restrictions_not_met") : e === "Validation Failed" ? $t("errors.invalid") : e.includes("Can not build valid path for tree") ? $t("errors.invalidConfig") : $t("errors.general");
}
class Kv {
  constructor({ proxy: t, version: a }) {
    this.initialized = !1, this.proxy = t, this.version = a || "", this.repository = new ed({ proxy: t }), this.product = new dn({}), this.productInfo = {}, this.productConfig = new sn({}), this.address = new cn({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null, this.hideDeliverySection = !1, this.timeOut = null, this.isEditor = !1, this.hasMeasurementOverwrites = null, this.isRecalculating = !1;
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
    let r = !1, o = a;
    this.lastChangedIndex = -1, t.options.forEach((d, c) => {
      Array.isArray(d) && d.length === 0 && (this.lastChangedIndex = c, r = !0);
    });
    const i = t.options.flat().map((d) => ({
      ...d,
      value: typeof d.value == "number" && !Number.isInteger(d.value) ? d.value.toFixed(1) : d.value
    }));
    if (!o && this.canOrder && this.product.options.length && i.length) {
      const d = this.product.options.findIndex((s) => s.code === "amount"), c = i.findIndex((s) => s.code === "amount");
      d !== -1 && c !== -1 && this.product.options[d]?.value !== i[c]?.value && i.length === this.product.options.length && i.every((p, h) => {
        const f = this.product.options[h];
        return h === d ? f?.code === p.code : f?.code === p.code && f?.value === p.value;
      }) && (o = !0);
    }
    if (this.isRecalculating = o, i.length > 0 && !r) {
      const d = i.length === this.product.options.length && i.every(
        (u, p) => u.code === this.product.options[p]?.code && u.value === this.product.options[p]?.value
      ), c = i.some((u) => u.code === "amount"), s = i.find((u) => u.code === "amount")?.value === this.product.options.find((u) => u.code === "amount")?.value;
      if (d && this.options.length > 0 || c && s && i.length === 1)
        this.lastChangedIndex = 2;
      else
        for (let u = this.product.options.length - 1; u >= 0; u -= 1)
          if (this.product.options[u] && i[u] && (this.product.options[u].value && this.product.options[u].value !== i[u].value || this.product.options[u].code && this.product.options[u].code !== i[u].code)) {
            this.product.options[u].code === "width" ? this.lastChangedIndex = u + 2 : this.product.options[u].code === "height" ? this.lastChangedIndex = u + 1 : this.lastChangedIndex = u;
            break;
          }
    }
    if (o)
      this.product.options = i.filter((d) => d.code !== void 0);
    else {
      const c = this.product.options[this.lastChangedIndex]?.code === "amount" && this.hasMeasurementOverwrites ? this.lastChangedIndex - 2 : this.lastChangedIndex;
      this.product.options = ad(i, c);
    }
    if (this.product.options.some((d) => d.code === "no-option")) {
      this.setStatuses(!0), this.setOpenState(!0);
      const d = new Event(
        this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished"
      );
      window.dispatchEvent(d);
    }
    function n(d) {
      const c = d[d.length - 1];
      return (c?.code === "height" || c.code === "amount") && d.length >= 2 ? d : c;
    }
    const l = n(this.product.options);
    if (l && (Array.isArray(l) ? l.length > 0 : Object.keys(l).length > 0)) {
      const d = new CustomEvent(
        this.isEditor ? "connectConfiguratorEditor:option-selected" : "connectConfigurator:option-selected",
        {
          detail: JSON.parse(JSON.stringify(l))
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
    if (Fv(this.options, this.product.options)) {
      this.loading = !0;
      const a = this.overwrites?.find((r) => r.code === this.product.code)?.overwrites?.steps;
      try {
        if (this.productConfig.language || (this.productConfig.language = this.language), this.hasMeasurementOverwrites) {
          const o = a?.find((i) => i.code === "measurement-amount")?.overwrites?.options?.filter((i) => lr(i.overwrites?.value));
          o?.length && this.product.options.some(
            (n) => ["width", "height", "amount"].includes(n.code)
          ) && o.forEach((n) => {
            this.product.options.some((d) => d.code === n.code) || this.product.options.push({ code: n.code, value: n.overwrites.value });
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
            title: id(this.payload.message ? this.payload.message : this.payload)
          }, new Error(this.payload.message || this.payload);
        if ([r] = this.payload.products, typeof r == "object" && r) {
          this.alert = {}, this.options[this.options.length - 1]?.alert && delete this.options[this.options.length - 1].alert;
          const o = r.available_options;
          if (t || (this.options = Uv(
            this.options,
            o,
            this.lastChangedIndex,
            this.priceType,
            a,
            this.hasMeasurementOverwrites,
            this.isEditor
          )), !t && this.overwrites.length > 0 && a && this.options.forEach((i) => {
            a.forEach(async (n) => {
              const l = this.product.options.some((s) => s.code === n.overwrites.selected) === !1 && lr(n.overwrites?.selected), d = n.overwrites?.options?.filter((s) => s.overwrites?.value) || [];
              this.product.options.forEach((s) => {
                const u = d.findIndex((p) => p.code === s.code);
                u !== -1 && d.splice(u, 1);
              });
              const c = this.getConfig();
              i.code === n.code && (l || d.length) && (l ? (n.overwrites.value ? c.options.push({
                code: n.overwrites.selected,
                value: n.overwrites.value
              }) : c.options.push({ code: n.overwrites.selected }), await (await this.setOption(c)).getNextOption()) : d.length && (this.options.splice(0, 1), d.forEach((s) => {
                c.options.push({
                  code: s.code,
                  value: s.overwrites.value
                });
              }), await (await this.setOption(c)).getNextOption()));
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
            this.prices = Hv(i, this.priceType), this.deliveryOptions = qv(i, this.language), t || this.setOpenState();
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
          const d = [];
          let c = null;
          i.forEach((s, u) => {
            s.code && l.some((p) => p.code === s.code) && (c || (c = u), d.push(s));
          }), d.length > 1 && i.splice(c, d.length, d);
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
    return this.product = new dn({}), this.productConfig = new sn({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this.productInfo = {}, this;
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
    callbackUrl: d,
    internalProductId: c,
    hideDeliverySection: s,
    buttonStartText: u
  }) {
    this.initialized = !0, this.proxy = t, this.repository = new ed({ proxy: t, productId: c }), this.setLanguage(a), this.callbackUrl = d, r && this.setAddress(r), o && this.setPriceType(o, i), n.length && this.setOverwrites(n), l && (this.storeProductsLocally = l), s && (this.hideDeliverySection = s), u && (this.buttonStartText = u);
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
        } catch (d) {
          i.options[i.options.length - 1].alert || (i.alert = {
            type: "error",
            title: id(d.message ? d.message : d)
          }), i.loading = !1, i.updateExternal = !0;
          return;
        }
        if (r[l]) {
          let d = l + 1;
          r[l].code === "width" ? (i.product.options.push(r[l], r[l + 1], r[l + 2]), d = l + 3) : ["width", "height"].includes(r[l].code) || i.product.options.push(r[l]), await n(d);
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
const Zv = `*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:--theme(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:--theme(--default-font-feature-settings,normal);font-variation-settings:--theme(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:--theme(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:--theme(--default-mono-font-feature-settings,normal);font-variation-settings:--theme(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}:root,:host{--font-sans: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--animate-progress: progress 1s infinite linear;--transform-origin-left-right: 0% 50%;--color-primary-light: #3b82f6;--color-primary-mid: #2f6fe8;--color-primary: #2563eb;--color-primary-hover: #1d4ed8;--color-primary-pressed: #1e40af;--color-secondary: #ffffff;--color-secondary-hover: #fafafa;--color-secondary-pressed: #e5e5e5;--color-tertiary: #eff6ff;--color-tertiary-hover: #dbeafe;--color-tertiary-pressed: #bfdbfe;--color-error-primary: #7b2122;--color-error-secondary: #d52d2f;--color-error-tertiary: #e73c3e;--color-error-accent: #fef2f2;--color-warning-primary: #7c2d12;--color-warning-secondary: #c2410c;--color-warning-tertiary: #f97316;--color-warning-accent: #fff7ed;--color-info-primary: #1e3a8a;--color-info-secondary: #1d4ed8;--color-info-tertiary: #3b82f6;--color-info-accent: #eff6ff;--color-success-primary: #14532d;--color-success-secondary: #15803d;--color-success-tertiary: #22c55e;--color-success-accent: #f0fdf4;--color-border-primary: #d1d5db;--color-border-primary-hover: #9ca3af;--color-disabled-light: #f9fafb;--color-disabled: #f3f4f6;--color-disabled-text: #9ca3af;--color-table-row-border-color: #e5e5e5;--color-input-bg: #ffffff;--color-input-border: #d1d5db;--color-input-disabled-border: #d1d5db;--color-input-inline: #111827;--color-body-text: #111827;--color-body: #ffffff;--color-parent-bg: #ffffff;--color-child: #ffffff;--color-child-alt: #ffffff;--color-gray-450: #848b98;--color-red-50: oklch(97.1% .013 17.38);--color-red-100: oklch(93.6% .032 17.717);--color-red-200: oklch(88.5% .062 18.334);--color-red-300: oklch(80.8% .114 19.571);--color-red-400: oklch(70.4% .191 22.216);--color-red-500: oklch(63.7% .237 25.331);--color-red-600: oklch(57.7% .245 27.325);--color-red-700: oklch(50.5% .213 27.518);--color-red-800: oklch(44.4% .177 26.899);--color-red-900: oklch(39.6% .141 25.723);--color-red-950: oklch(25.8% .092 26.042);--color-orange-50: oklch(98% .016 73.684);--color-orange-100: oklch(95.4% .038 75.164);--color-orange-200: oklch(90.1% .076 70.697);--color-orange-300: oklch(83.7% .128 66.29);--color-orange-400: oklch(75% .183 55.934);--color-orange-500: oklch(70.5% .213 47.604);--color-orange-600: oklch(64.6% .222 41.116);--color-orange-700: oklch(55.3% .195 38.402);--color-orange-800: oklch(47% .157 37.304);--color-orange-900: oklch(40.8% .123 38.172);--color-orange-950: oklch(26.6% .079 36.259);--color-amber-50: oklch(98.7% .022 95.277);--color-amber-100: oklch(96.2% .059 95.617);--color-amber-200: oklch(92.4% .12 95.746);--color-amber-300: oklch(87.9% .169 91.605);--color-amber-400: oklch(82.8% .189 84.429);--color-amber-500: oklch(76.9% .188 70.08);--color-amber-600: oklch(66.6% .179 58.318);--color-amber-700: oklch(55.5% .163 48.998);--color-amber-800: oklch(47.3% .137 46.201);--color-amber-900: oklch(41.4% .112 45.904);--color-amber-950: oklch(27.9% .077 45.635);--color-yellow-50: oklch(98.7% .026 102.212);--color-yellow-100: oklch(97.3% .071 103.193);--color-yellow-200: oklch(94.5% .129 101.54);--color-yellow-300: oklch(90.5% .182 98.111);--color-yellow-400: oklch(85.2% .199 91.936);--color-yellow-500: oklch(79.5% .184 86.047);--color-yellow-600: oklch(68.1% .162 75.834);--color-yellow-700: oklch(55.4% .135 66.442);--color-yellow-800: oklch(47.6% .114 61.907);--color-yellow-900: oklch(42.1% .095 57.708);--color-yellow-950: oklch(28.6% .066 53.813);--color-lime-50: oklch(98.6% .031 120.757);--color-lime-100: oklch(96.7% .067 122.328);--color-lime-200: oklch(93.8% .127 124.321);--color-lime-300: oklch(89.7% .196 126.665);--color-lime-400: oklch(84.1% .238 128.85);--color-lime-500: oklch(76.8% .233 130.85);--color-lime-600: oklch(64.8% .2 131.684);--color-lime-700: oklch(53.2% .157 131.589);--color-lime-800: oklch(45.3% .124 130.933);--color-lime-900: oklch(40.5% .101 131.063);--color-lime-950: oklch(27.4% .072 132.109);--color-green-50: oklch(98.2% .018 155.826);--color-green-100: oklch(96.2% .044 156.743);--color-green-200: oklch(92.5% .084 155.995);--color-green-300: oklch(87.1% .15 154.449);--color-green-400: oklch(79.2% .209 151.711);--color-green-500: oklch(72.3% .219 149.579);--color-green-600: oklch(62.7% .194 149.214);--color-green-700: oklch(52.7% .154 150.069);--color-green-800: oklch(44.8% .119 151.328);--color-green-900: oklch(39.3% .095 152.535);--color-green-950: oklch(26.6% .065 152.934);--color-emerald-50: oklch(97.9% .021 166.113);--color-emerald-100: oklch(95% .052 163.051);--color-emerald-200: oklch(90.5% .093 164.15);--color-emerald-300: oklch(84.5% .143 164.978);--color-emerald-400: oklch(76.5% .177 163.223);--color-emerald-500: oklch(69.6% .17 162.48);--color-emerald-600: oklch(59.6% .145 163.225);--color-emerald-700: oklch(50.8% .118 165.612);--color-emerald-800: oklch(43.2% .095 166.913);--color-emerald-900: oklch(37.8% .077 168.94);--color-emerald-950: oklch(26.2% .051 172.552);--color-teal-50: oklch(98.4% .014 180.72);--color-teal-100: oklch(95.3% .051 180.801);--color-teal-200: oklch(91% .096 180.426);--color-teal-300: oklch(85.5% .138 181.071);--color-teal-400: oklch(77.7% .152 181.912);--color-teal-500: oklch(70.4% .14 182.503);--color-teal-600: oklch(60% .118 184.704);--color-teal-700: oklch(51.1% .096 186.391);--color-teal-800: oklch(43.7% .078 188.216);--color-teal-900: oklch(38.6% .063 188.416);--color-teal-950: oklch(27.7% .046 192.524);--color-cyan-50: oklch(98.4% .019 200.873);--color-cyan-100: oklch(95.6% .045 203.388);--color-cyan-200: oklch(91.7% .08 205.041);--color-cyan-300: oklch(86.5% .127 207.078);--color-cyan-400: oklch(78.9% .154 211.53);--color-cyan-500: oklch(71.5% .143 215.221);--color-cyan-600: oklch(60.9% .126 221.723);--color-cyan-700: oklch(52% .105 223.128);--color-cyan-800: oklch(45% .085 224.283);--color-cyan-900: oklch(39.8% .07 227.392);--color-cyan-950: oklch(30.2% .056 229.695);--color-sky-50: oklch(97.7% .013 236.62);--color-sky-100: oklch(95.1% .026 236.824);--color-sky-200: oklch(90.1% .058 230.902);--color-sky-300: oklch(82.8% .111 230.318);--color-sky-400: oklch(74.6% .16 232.661);--color-sky-500: oklch(68.5% .169 237.323);--color-sky-600: oklch(58.8% .158 241.966);--color-sky-700: oklch(50% .134 242.749);--color-sky-800: oklch(44.3% .11 240.79);--color-sky-900: oklch(39.1% .09 240.876);--color-sky-950: oklch(29.3% .066 243.157);--color-blue-50: oklch(97% .014 254.604);--color-blue-100: oklch(93.2% .032 255.585);--color-blue-200: oklch(88.2% .059 254.128);--color-blue-300: oklch(80.9% .105 251.813);--color-blue-400: oklch(70.7% .165 254.624);--color-blue-500: oklch(62.3% .214 259.815);--color-blue-600: oklch(54.6% .245 262.881);--color-blue-700: oklch(48.8% .243 264.376);--color-blue-800: oklch(42.4% .199 265.638);--color-blue-900: oklch(37.9% .146 265.522);--color-blue-950: oklch(28.2% .091 267.935);--color-indigo-50: oklch(96.2% .018 272.314);--color-indigo-100: oklch(93% .034 272.788);--color-indigo-200: oklch(87% .065 274.039);--color-indigo-300: oklch(78.5% .115 274.713);--color-indigo-400: oklch(67.3% .182 276.935);--color-indigo-500: oklch(58.5% .233 277.117);--color-indigo-600: oklch(51.1% .262 276.966);--color-indigo-700: oklch(45.7% .24 277.023);--color-indigo-800: oklch(39.8% .195 277.366);--color-indigo-900: oklch(35.9% .144 278.697);--color-indigo-950: oklch(25.7% .09 281.288);--color-violet-50: oklch(96.9% .016 293.756);--color-violet-100: oklch(94.3% .029 294.588);--color-violet-200: oklch(89.4% .057 293.283);--color-violet-300: oklch(81.1% .111 293.571);--color-violet-400: oklch(70.2% .183 293.541);--color-violet-500: oklch(60.6% .25 292.717);--color-violet-600: oklch(54.1% .281 293.009);--color-violet-700: oklch(49.1% .27 292.581);--color-violet-800: oklch(43.2% .232 292.759);--color-violet-900: oklch(38% .189 293.745);--color-violet-950: oklch(28.3% .141 291.089);--color-purple-50: oklch(97.7% .014 308.299);--color-purple-100: oklch(94.6% .033 307.174);--color-purple-200: oklch(90.2% .063 306.703);--color-purple-300: oklch(82.7% .119 306.383);--color-purple-400: oklch(71.4% .203 305.504);--color-purple-500: oklch(62.7% .265 303.9);--color-purple-600: oklch(55.8% .288 302.321);--color-purple-700: oklch(49.6% .265 301.924);--color-purple-800: oklch(43.8% .218 303.724);--color-purple-900: oklch(38.1% .176 304.987);--color-purple-950: oklch(29.1% .149 302.717);--color-fuchsia-50: oklch(97.7% .017 320.058);--color-fuchsia-100: oklch(95.2% .037 318.852);--color-fuchsia-200: oklch(90.3% .076 319.62);--color-fuchsia-300: oklch(83.3% .145 321.434);--color-fuchsia-400: oklch(74% .238 322.16);--color-fuchsia-500: oklch(66.7% .295 322.15);--color-fuchsia-600: oklch(59.1% .293 322.896);--color-fuchsia-700: oklch(51.8% .253 323.949);--color-fuchsia-800: oklch(45.2% .211 324.591);--color-fuchsia-900: oklch(40.1% .17 325.612);--color-fuchsia-950: oklch(29.3% .136 325.661);--color-pink-50: oklch(97.1% .014 343.198);--color-pink-100: oklch(94.8% .028 342.258);--color-pink-200: oklch(89.9% .061 343.231);--color-pink-300: oklch(82.3% .12 346.018);--color-pink-400: oklch(71.8% .202 349.761);--color-pink-500: oklch(65.6% .241 354.308);--color-pink-600: oklch(59.2% .249 .584);--color-pink-700: oklch(52.5% .223 3.958);--color-pink-800: oklch(45.9% .187 3.815);--color-pink-900: oklch(40.8% .153 2.432);--color-pink-950: oklch(28.4% .109 3.907);--color-rose-50: oklch(96.9% .015 12.422);--color-rose-100: oklch(94.1% .03 12.58);--color-rose-200: oklch(89.2% .058 10.001);--color-rose-300: oklch(81% .117 11.638);--color-rose-400: oklch(71.2% .194 13.428);--color-rose-500: oklch(64.5% .246 16.439);--color-rose-600: oklch(58.6% .253 17.585);--color-rose-700: oklch(51.4% .222 16.935);--color-rose-800: oklch(45.5% .188 13.697);--color-rose-900: oklch(41% .159 10.272);--color-rose-950: oklch(27.1% .105 12.094);--color-slate-50: oklch(98.4% .003 247.858);--color-slate-100: oklch(96.8% .007 247.896);--color-slate-200: oklch(92.9% .013 255.508);--color-slate-300: oklch(86.9% .022 252.894);--color-slate-400: oklch(70.4% .04 256.788);--color-slate-500: oklch(55.4% .046 257.417);--color-slate-600: oklch(44.6% .043 257.281);--color-slate-700: oklch(37.2% .044 257.287);--color-slate-800: oklch(27.9% .041 260.031);--color-slate-900: oklch(20.8% .042 265.755);--color-slate-950: oklch(12.9% .042 264.695);--color-gray-50: oklch(98.5% .002 247.839);--color-gray-100: oklch(96.7% .003 264.542);--color-gray-200: oklch(92.8% .006 264.531);--color-gray-300: oklch(87.2% .01 258.338);--color-gray-400: oklch(70.7% .022 261.325);--color-gray-500: oklch(55.1% .027 264.364);--color-gray-600: oklch(44.6% .03 256.802);--color-gray-700: oklch(37.3% .034 259.733);--color-gray-800: oklch(27.8% .033 256.848);--color-gray-900: oklch(21% .034 264.665);--color-gray-950: oklch(13% .028 261.692);--color-zinc-50: oklch(98.5% 0 0);--color-zinc-100: oklch(96.7% .001 286.375);--color-zinc-200: oklch(92% .004 286.32);--color-zinc-300: oklch(87.1% .006 286.286);--color-zinc-400: oklch(70.5% .015 286.067);--color-zinc-500: oklch(55.2% .016 285.938);--color-zinc-600: oklch(44.2% .017 285.786);--color-zinc-700: oklch(37% .013 285.805);--color-zinc-800: oklch(27.4% .006 286.033);--color-zinc-900: oklch(21% .006 285.885);--color-zinc-950: oklch(14.1% .005 285.823);--color-neutral-50: oklch(98.5% 0 0);--color-neutral-100: oklch(97% 0 0);--color-neutral-200: oklch(92.2% 0 0);--color-neutral-300: oklch(87% 0 0);--color-neutral-400: oklch(70.8% 0 0);--color-neutral-500: oklch(55.6% 0 0);--color-neutral-600: oklch(43.9% 0 0);--color-neutral-700: oklch(37.1% 0 0);--color-neutral-800: oklch(26.9% 0 0);--color-neutral-900: oklch(20.5% 0 0);--color-neutral-950: oklch(14.5% 0 0);--color-stone-50: oklch(98.5% .001 106.423);--color-stone-100: oklch(97% .001 106.424);--color-stone-200: oklch(92.3% .003 48.717);--color-stone-300: oklch(86.9% .005 56.366);--color-stone-400: oklch(70.9% .01 56.259);--color-stone-500: oklch(55.3% .013 58.071);--color-stone-600: oklch(44.4% .011 73.639);--color-stone-700: oklch(37.4% .01 67.558);--color-stone-800: oklch(26.8% .007 34.298);--color-stone-900: oklch(21.6% .006 56.043);--color-stone-950: oklch(14.7% .004 49.25);--color-black: #000;--color-white: #fff;--spacing: .25rem;--breakpoint-sm: 40rem;--breakpoint-md: 48rem;--breakpoint-lg: 64rem;--breakpoint-xl: 80rem;--breakpoint-2xl: 96rem;--container-3xs: 16rem;--container-2xs: 18rem;--container-xs: 20rem;--container-sm: 24rem;--container-md: 28rem;--container-lg: 32rem;--container-xl: 36rem;--container-2xl: 42rem;--container-3xl: 48rem;--container-4xl: 56rem;--container-5xl: 64rem;--container-6xl: 72rem;--container-7xl: 80rem;--text-xs: .75rem;--text-xs--line-height: calc(1 / .75);--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-3xl: 1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--text-6xl: 3.75rem;--text-6xl--line-height: 1;--text-7xl: 4.5rem;--text-7xl--line-height: 1;--text-8xl: 6rem;--text-8xl--line-height: 1;--text-9xl: 8rem;--text-9xl--line-height: 1;--font-weight-thin: 100;--font-weight-extralight: 200;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--font-weight-black: 900;--tracking-tighter: -.05em;--tracking-tight: -.025em;--tracking-normal: 0em;--tracking-wide: .025em;--tracking-wider: .05em;--tracking-widest: .1em;--leading-tight: 1.25;--leading-snug: 1.375;--leading-normal: 1.5;--leading-relaxed: 1.625;--leading-loose: 2;--radius-xs: .125rem;--radius-sm: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-4xl: 2rem;--shadow-2xs: 0 1px rgb(0 0 0 / .05);--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--inset-shadow-2xs: inset 0 1px rgb(0 0 0 / .05);--inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / .05);--inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / .05);--drop-shadow-xs: 0 1px 1px rgb(0 0 0 / .05);--drop-shadow-sm: 0 1px 2px rgb(0 0 0 / .15);--drop-shadow-md: 0 3px 3px rgb(0 0 0 / .12);--drop-shadow-lg: 0 4px 4px rgb(0 0 0 / .15);--drop-shadow-xl: 0 9px 7px rgb(0 0 0 / .1);--drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / .15);--text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / .15);--text-shadow-xs: 0px 1px 1px rgb(0 0 0 / .2);--text-shadow-sm: 0px 1px 0px rgb(0 0 0 / .075), 0px 1px 1px rgb(0 0 0 / .075), 0px 2px 2px rgb(0 0 0 / .075);--text-shadow-md: 0px 1px 1px rgb(0 0 0 / .1), 0px 1px 2px rgb(0 0 0 / .1), 0px 2px 4px rgb(0 0 0 / .1);--text-shadow-lg: 0px 1px 2px rgb(0 0 0 / .1), 0px 3px 2px rgb(0 0 0 / .1), 0px 4px 8px rgb(0 0 0 / .1);--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce: bounce 1s infinite;--blur-xs: 4px;--blur-sm: 8px;--blur-md: 12px;--blur-lg: 16px;--blur-xl: 24px;--blur-2xl: 40px;--blur-3xl: 64px;--perspective-dramatic: 100px;--perspective-near: 300px;--perspective-normal: 500px;--perspective-midrange: 800px;--perspective-distant: 1200px;--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)}@layer base{[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6a7282;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(55.1%25 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#155dfc;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6a7282;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media(forced-colors:active){[type=checkbox]:checked{appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media(forced-colors:active){[type=radio]:checked{appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media(forced-colors:active){[type=checkbox]:indeterminate{appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}}.mini-icon[data-v-206f9b1b]{flex-shrink:0;width:1.25rem;height:1.25rem;display:flex}.dark .mini-icon[data-v-206f9b1b]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-47dd263a],[data-v-47dd263a]:before,[data-v-47dd263a]:after,[data-v-47dd263a]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.hotkey[data-v-47dd263a]{height:calc(var(--spacing,.25rem)*5);width:fit-content;min-width:calc(var(--spacing,.25rem)*5);border-style:var(--tw-border-style);--tw-border-style:solid;padding-inline:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-style:solid;border-width:1px;border-radius:.25rem;justify-content:center;align-items:center;display:flex}.hotkey.disabled[data-v-47dd263a]{color:var(--color-disabled-text,#606369)}.hotkey.primary-hotkey[data-v-47dd263a]{color:var(--color-white,#fff);background-color:#ffffff26;border-color:#ffffff80}.hotkey.secondary-hotkey[data-v-47dd263a]{color:var(--color-neutral-600,oklch(43.9% 0 0));background-color:#0a0a0a08;border-color:#0a0a0a26}.hotkey.secondary-hotkey[data-v-47dd263a]:where(.dark,.dark *){color:var(--color-body-text,#111827);background-color:#ffffff26;border-color:#ffffff80}.hotkey.tertiary-hotkey[data-v-47dd263a]{color:var(--color-primary-light,#3b82f6);background-color:#0062ff0f;border-color:#0062ff4d}.hotkey.tertiary-hotkey[data-v-47dd263a]:where(.dark,.dark *){border-color:var(--color-primary-mid,#2f6fe8)}.loader[data-v-7d40d0e0]{animation:var(--animate-spin);border-radius:100%;height:1.5rem;width:1.5rem;border-width:.1875rem}.loader.primary-loader[data-v-7d40d0e0]{border-color:var(--color-blue-100);border-top-color:var(--color-blue-600)}.loader.secondary-loader[data-v-7d40d0e0]{border-color:color-mix(in oklab,var(--color-white) 40%,transparent);border-top-color:var(--color-white)}.loader.small-loader[data-v-7d40d0e0]{height:1.25rem;width:1.25rem}.loader.large-loader[data-v-7d40d0e0]{height:1.75rem;width:1.75rem}.button[data-v-2b556282]{height:2.5rem;border-radius:.5rem;padding:0 .75rem;font-weight:500;display:flex;justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;-webkit-user-select:none;user-select:none;color:var(--color-neutral-700);cursor:pointer}.button .default-loader[data-v-2b556282],.button .small-loader[data-v-2b556282]{height:1.3rem;width:1.3rem}.button .large-loader[data-v-2b556282]{height:1.5rem;width:1.5rem}.button[data-v-2b556282]:disabled{background-color:var(--color-disabled)!important;color:var(--color-disabled-text)!important;cursor:not-allowed}.button.primary[data-v-2b556282]{color:var(--color-white);background-color:var(--color-primary)}.button.primary[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-primary-hover)}.button.primary[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-primary-pressed)}.button.secondary[data-v-2b556282]{background-color:var(--color-secondary);border:1px solid var(--color-neutral-300);color:var(--color-neutral-950)}.dark .button.secondary[data-v-2b556282]{color:var(--color-neutral-200)}.dark .button.secondary[data-v-2b556282]:focus{color:var(--color-black)}.button.secondary[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-secondary-hover);border-color:var(--color-border-primary-hover)}.button.secondary[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-secondary-pressed)}.button.secondary[data-v-2b556282]:disabled{border-color:var(--color-disabled)}.button.tertiary[data-v-2b556282]{background-color:var(--color-tertiary);color:var(--color-primary)}.dark .button.tertiary[data-v-2b556282]{color:var(--color-primary-light)}.button.tertiary[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-tertiary-hover)}.button.tertiary[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-tertiary-pressed)}.dark .button.text[data-v-2b556282]{color:var(--color-body-text)}.button.text[data-v-2b556282]:not(:disabled):hover{background-color:#0f172a0a}.button.text[data-v-2b556282]:not(:disabled):focus{background-color:#0f172a14}.button.danger[data-v-2b556282]{background-color:var(--color-red-600);color:var(--color-white)}.button.danger[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-red-700)}.button.danger[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-red-900)}.dark .button.danger[data-v-2b556282]{background-color:var(--color-red-800)}.button.success[data-v-2b556282]{background-color:var(--color-success-background);color:var(--color-white)}.button.success[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-success-secondary)}.button.success[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-success-primary)}.dark .button.success[data-v-2b556282]{background-color:var(--color-green-800)}.dark .button.success[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-green-700)}.dark .button.success[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-green-900)}.button.warning[data-v-2b556282]{background-color:var(--color-warning-background);color:var(--color-white)}.button.warning[data-v-2b556282]:not(:disabled):hover{background-color:var(--color-warning-secondary)}.button.warning[data-v-2b556282]:not(:disabled):focus{background-color:var(--color-warning-primary)}.button.url[data-v-2b556282]{background-color:transparent;color:var(--color-primary);gap:.25rem;height:1.25rem;padding:0}.button.url[data-v-2b556282]:hover{text-decoration:underline}.dark .button.url[data-v-2b556282]{color:var(--color-primary-light)!important}.dark .button.url .mini-icon[data-v-2b556282]{color:var(--color-primary-light)}.button.default.has-icon[data-v-2b556282]{padding:.625rem}.button.default .mini-icon[data-v-2b556282]{height:1.25rem;width:1.25rem}.button.default[data-v-2b556282] .mini-icon svg{stroke-width:1.75}.button.small[data-v-2b556282]{height:2rem;padding:0 .75rem}.button.small.has-icon[data-v-2b556282]{border-radius:9999px;width:2rem}.button.small .mini-icon[data-v-2b556282]{height:1rem;width:1rem}.button.small[data-v-2b556282] .mini-icon svg{stroke-width:2}.button.medium[data-v-2b556282]{height:3rem;padding:0 1rem;font-size:1rem;line-height:1.5rem}.button.medium .mini-icon[data-v-2b556282]{height:1.5rem;width:1.5rem}.button.medium.has-icon[data-v-2b556282]{padding:.75rem}.button.large[data-v-2b556282]{height:3.5rem;padding:0 1.75rem;font-size:1rem;line-height:1.5rem}.button.large .mini-icon[data-v-2b556282]{height:1.5rem;width:1.5rem}.button.large.has-icon[data-v-2b556282]{padding:1.25rem}.hotkey[data-v-2b556282]{margin-left:.25rem}.image-wrapper[data-v-4654b093]{width:100%;height:100%;display:block}.dark .image-wrapper[data-v-4654b093]{opacity:.8}.image.rounded-4[data-v-4654b093],.skeleton.rounded-4[data-v-4654b093]{border-radius:.25rem}.image.rounded-8[data-v-4654b093],.skeleton.rounded-8[data-v-4654b093]{border-radius:.5rem}.image.rounded-16[data-v-4654b093],.skeleton.rounded-16[data-v-4654b093]{border-radius:1rem}.image.rounded-100[data-v-4654b093],.skeleton.rounded-100[data-v-4654b093]{border-radius:3.40282e38px}.image-wrapper .skeleton[data-v-4654b093]{background-color:var(--color-neutral-200);width:100%;height:100%;animation:var(--animate-pulse)}.dark .image-wrapper .skeleton[data-v-4654b093]{background-color:var(--color-gray-700)}:is(h1,h2,h3,h4,h5,h6)[data-v-6ad666e7]{font-weight:600}.dark :is(h1,h2,h3,h4,h5,h6)[data-v-6ad666e7]{color:var(--color-neutral-200)}h1[data-v-6ad666e7],h2[data-v-6ad666e7]{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h3[data-v-6ad666e7],h4[data-v-6ad666e7],h5[data-v-6ad666e7],h6[data-v-6ad666e7]{font-family:var(--font-sans)}h1[data-v-6ad666e7]{font-size:1.75rem;letter-spacing:-.8px;line-height:2.25rem}h2[data-v-6ad666e7]{font-size:1.25rem;letter-spacing:-.2px;line-height:1.75rem}h3[data-v-6ad666e7]{font-size:1rem;line-height:1.5rem}h4[data-v-6ad666e7]{font-size:.875rem;line-height:1.25rem}h5[data-v-6ad666e7]{font-size:.875rem;line-height:1.25rem;font-weight:500}h6[data-v-6ad666e7]{font-size:.75rem;line-height:1rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3a85ac16],[data-v-3a85ac16]:before,[data-v-3a85ac16]:after,[data-v-3a85ac16]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid}}}[data-v-3a85ac16] .image-wrapper{height:10.25rem}[data-v-3a85ac16] .image-wrapper .image{object-fit:cover;width:100%;height:100%}[data-v-3a85ac16] .image-wrapper.dense{height:unset;flex-shrink:0;width:auto}[data-v-3a85ac16] .image-wrapper.disabled{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card[data-v-3a85ac16]{cursor:pointer;border-radius:var(--radius-xl,.75rem);background-color:var(--color-child-alt,#fff);flex-direction:column;width:17.625rem;display:flex;overflow:auto}.card[data-v-3a85ac16]:not(.passive):hover,.card[data-v-3a85ac16]:not(.passive):focus{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card[data-v-3a85ac16]:not(.flat){border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.card[data-v-3a85ac16]:not(.flat):where(.dark,.dark *){--tw-border-style:none;border-style:none}.card.passive[data-v-3a85ac16]{cursor:default}.card.disabled[data-v-3a85ac16]{cursor:default;border-color:var(--color-gray-300,oklch(87.2% .01 258.338));background-color:var(--color-disabled,#f3f4f6)}@media(hover:hover){.card.disabled[data-v-3a85ac16]:hover{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.card.disabled .content[data-v-3a85ac16]{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.card.dense[data-v-3a85ac16]{flex-direction:row;justify-content:flex-start;width:100%}.card.dense .inner[data-v-3a85ac16]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1)}.card.flat[data-v-3a85ac16]:hover{background-color:var(--color-secondary-hover,#fafafa);--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.card .inner[data-v-3a85ac16]{width:100%;padding:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}.card .inner .header[data-v-3a85ac16]{width:100%;padding-bottom:calc(var(--spacing,.25rem)*2);border-top-left-radius:.25rem;border-top-right-radius:.25rem;flex-direction:column;display:flex;position:relative}.card .inner .header .title[data-v-3a85ac16]{padding-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.card .inner .header .subtitle[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.card .inner .header .subtitle[data-v-3a85ac16]:where(.dark,.dark *){color:var(--color-gray-100,oklch(96.7% .003 264.542))}.card .inner .content[data-v-3a85ac16]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.card .inner .footer[data-v-3a85ac16]{padding-top:calc(var(--spacing,.25rem)*4)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-b1beee2f],[data-v-b1beee2f]:before,[data-v-b1beee2f]:after,[data-v-b1beee2f]::backdrop{--tw-ease:initial}}}[data-v-b1beee2f]{will-change:height;backface-visibility:hidden;perspective:1000px;transform:translateZ(0)}.expand-enter-active[data-v-b1beee2f],.expand-leave-active[data-v-b1beee2f]{transition-property:height,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:var(--b3e76ba0);overflow:hidden}.expand-enter-from[data-v-b1beee2f],.expand-leave-to[data-v-b1beee2f]{opacity:0}.expand-enter[data-v-b1beee2f],.expand-leave-to[data-v-b1beee2f]{height:var(--v744134fd)}.card[data-v-b4f8a358]{width:100%}.card.expanded[data-v-b4f8a358]{max-height:var(--v3d1a4e5c)}.card[data-v-b4f8a358] .inner{padding:calc(var(--spacing,.25rem)*1)}.button[data-v-b4f8a358]{margin-top:calc(var(--spacing,.25rem)*1);background-color:var(--color-neutral-50,oklch(98.5% 0 0));width:100%;height:auto;padding-block:calc(var(--spacing,.25rem)*2.5);color:var(--color-primary,#2563eb)}.button[data-v-b4f8a358]:where(.dark,.dark *){background-color:var(--color-child,#fff);color:var(--color-body-text,#111827)}.button[data-v-b4f8a358]:not([disabled]):hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:#0a0a0a14}@supports (color:color-mix(in lab,red,red)){.button[data-v-b4f8a358]:not([disabled]):hover:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-950,oklch(14.5% 0 0))8%,transparent)}}.expand-enter-active[data-v-b4f8a358],.expand-leave-active[data-v-b4f8a358]{transition-property:opacity,height}.expand-enter[data-v-b4f8a358],.expand-leave-to[data-v-b4f8a358]{opacity:0}.radio-group[data-v-c2d61b3c]{pointer-events:none;gap:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.radio-group[data-v-c2d61b3c] *{pointer-events:auto}.table-wrapper[data-v-5a42bd69]{border-radius:var(--radius-lg,.5rem);width:100%;display:block;position:relative;overflow:clip}.table-wrapper table[data-v-5a42bd69]{background-color:var(--color-body,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-wrapper .sticky-container[data-v-5a42bd69]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;position:sticky}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*3);background-color:var(--color-secondary-hover,#fafafa);align-items:center;display:flex}.table-wrapper .sticky-container .scrollbar[data-v-5a42bd69]:where(.dark,.dark *){background-color:#323746}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]{height:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-gray-300,oklch(87.2% .01 258.338));position:absolute}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-5a42bd69]:where(.dark,.dark *){background-color:#7882a0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5ee4dbf8],[data-v-5ee4dbf8]:before,[data-v-5ee4dbf8]:after,[data-v-5ee4dbf8]::backdrop{--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}thead[data-v-5ee4dbf8]{top:calc(var(--spacing,.25rem)*0);z-index:10;background-color:var(--color-body,#fff);position:sticky}thead[data-v-5ee4dbf8] tr td{--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0))}thead[data-v-5ee4dbf8] tr td:where(.dark,.dark *){color:var(--color-white,#fff)}thead[data-v-5ee4dbf8] tr td input{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}thead[data-v-5ee4dbf8] tr td{--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-table-row-border-color));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-94a1d3c2],[data-v-94a1d3c2]:before,[data-v-94a1d3c2]:after,[data-v-94a1d3c2]::backdrop{--tw-border-style:solid}}}tbody[data-v-94a1d3c2] tr:not(:last-child){border-bottom-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-bottom-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}td[data-v-2b59e8a9]{padding-inline:calc(var(--spacing,.25rem)*4);vertical-align:middle;color:var(--color-neutral-950,oklch(14.5% 0 0))}td[data-v-2b59e8a9]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3dad8f2b],[data-v-3dad8f2b]:before,[data-v-3dad8f2b]:after,[data-v-3dad8f2b]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.checkbox-container[data-v-3dad8f2b]{flex-direction:column;width:100%;display:flex}.checkbox-container.large .label[data-v-3dad8f2b]{gap:calc(var(--spacing,.25rem)*3)}.checkbox-container.large .checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.label[data-v-3dad8f2b]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);display:flex}.label[data-v-3dad8f2b]:not(.disabled){cursor:pointer}.checkbox[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*.5);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6);border-radius:.25rem}.checkbox[data-v-3dad8f2b]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.checkbox[data-v-3dad8f2b]:checked,.checkbox[data-v-3dad8f2b]:indeterminate{border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary-light,#3b82f6)}.checkbox[data-v-3dad8f2b]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-gray-200,oklch(92.8% .006 264.531))!important}.checkbox[data-v-3dad8f2b]:not(:disabled):checked:hover,.checkbox[data-v-3dad8f2b]:not(:disabled):indeterminate:hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}.checkbox[data-v-3dad8f2b]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-3dad8f2b]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(156, 163, 175)' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-3dad8f2b]{border-color:var(--color-error-secondary,#d52d2f);outline-color:var(--color-error-secondary,#d52d2f)}.error .error-message[data-v-3dad8f2b]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.append[data-v-3dad8f2b]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-left:auto}tr[data-v-7e2dd7b3]{height:3.5rem;max-height:calc(var(--spacing,.25rem)*12);min-height:3.5rem}.icon[data-v-eb0a670a]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.dark .icon[data-v-eb0a670a]{color:var(--color-body-text)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-11f73f62],[data-v-11f73f62]:before,[data-v-11f73f62]:after,[data-v-11f73f62]::backdrop{--tw-font-weight:initial}}}.no-results-row[data-v-11f73f62]{height:calc(var(--spacing,.25rem)*64);position:relative}.no-results-row td[data-v-11f73f62]{white-space:nowrap;width:100%;height:100%;position:absolute;overflow:hidden}.no-results-row td .wrapper[data-v-11f73f62]{justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);text-wrap:wrap;flex-direction:column;display:flex}.no-results-row td .wrapper .icon[data-v-11f73f62]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12);stroke:var(--color-neutral-500,oklch(55.6% 0 0))}.no-results-row td .wrapper h2[data-v-11f73f62]{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.no-results-row td .wrapper span[data-v-11f73f62]{text-align:center;color:var(--color-neutral-500,oklch(55.6% 0 0))}.no-results-row td .wrapper span[data-v-11f73f62]:where(.dark,.dark *){color:var(--color-neutral-400,oklch(70.8% 0 0))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a60b07d9],[data-v-a60b07d9]:before,[data-v-a60b07d9]:after,[data-v-a60b07d9]::backdrop{--tw-border-style:solid}}}.pagination[data-v-a60b07d9]{gap:calc(var(--spacing,.25rem)*2);display:flex}.pagination .button[data-v-a60b07d9]{position:relative}.pagination .button[data-v-a60b07d9]:not(:disabled){color:var(--color-primary,#2563eb)}.pagination .button[data-v-a60b07d9]:not(:disabled):not(.current){color:var(--color-body-text,#111827)}.pagination .button[data-v-a60b07d9]:not(:disabled) .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.pagination .button[data-v-a60b07d9]:not(:first-child):not(:last-child){width:calc(var(--spacing,.25rem)*10);display:none}@media(min-width:48rem){.pagination .button[data-v-a60b07d9]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-a60b07d9]:not(:disabled):hover{border-color:var(--color-border-primary,#d1d5db)}.pagination .button.current[data-v-a60b07d9]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb)}.pagination .button .button-text[data-v-a60b07d9]{display:none}@media(min-width:48rem){.pagination .button .button-text[data-v-a60b07d9]{display:block}}.pagination .dotdotdot[data-v-a60b07d9]{align-self:center;display:none}@media(min-width:48rem){.pagination .dotdotdot[data-v-a60b07d9]{display:inline-block}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1005bec5],[data-v-1005bec5]:before,[data-v-1005bec5]:after,[data-v-1005bec5]::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-content:""}}}.skeleton[data-v-1005bec5]{height:calc(var(--spacing,.25rem)*5);animation:var(--animate-pulse,pulse-1005bec5 2s cubic-bezier(.4,0,.6,1)infinite);background-color:var(--color-neutral-200,oklch(92.2% 0 0));display:block}.skeleton[data-v-1005bec5]:where(.dark,.dark *){background-color:var(--color-gray-700,oklch(37.3% .034 259.733))}.skeleton.has-content[data-v-1005bec5]{height:auto}.skeleton.circular[data-v-1005bec5]{border-radius:50%}.skeleton.text[data-v-1005bec5]{--tw-scale-y:.7;scale:var(--tw-scale-x)var(--tw-scale-y);border-radius:.25rem}.skeleton.text[data-v-1005bec5]:not(.has-content){height:auto;color:inherit}.skeleton.text[data-v-1005bec5]:not(.has-content):before{--tw-content:" ";content:var(--tw-content)}.skeleton [data-v-1005bec5-s]{visibility:hidden}@keyframes pulse-1005bec5{50%{opacity:.5}}.micro-icon[data-v-08f67949]{display:flex;height:1rem;width:1rem;flex-shrink:0}.dark .micro-icon[data-v-08f67949]{color:var(--color-body-text)}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-76306795],[data-v-76306795]:before,[data-v-76306795]:after,[data-v-76306795]::backdrop{--tw-duration:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}.expand-top-enter-active[data-v-76306795],.expand-bottom-enter-active[data-v-76306795],.expand-left-enter-active[data-v-76306795],.expand-right-enter-active[data-v-76306795],.expand-top-leave-active[data-v-76306795],.expand-bottom-leave-active[data-v-76306795],.expand-left-leave-active[data-v-76306795],.expand-right-leave-active[data-v-76306795]{transform:translateZ(0)var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.15s;transition-duration:.15s}.expand-top-enter-from[data-v-76306795]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-top-enter-to[data-v-76306795],.expand-top-leave-from[data-v-76306795]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-top-leave-to[data-v-76306795]{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-from[data-v-76306795]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-bottom-enter-to[data-v-76306795],.expand-bottom-leave-from[data-v-76306795]{--tw-translate-y:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-bottom-leave-to[data-v-76306795]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-from[data-v-76306795]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-left-enter-to[data-v-76306795],.expand-left-leave-from[data-v-76306795]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-left-leave-to[data-v-76306795]{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-from[data-v-76306795]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}.expand-right-enter-to[data-v-76306795],.expand-right-leave-from[data-v-76306795]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:1}.expand-right-leave-to[data-v-76306795]{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y);opacity:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fa4dfb8f],[data-v-fa4dfb8f]:before,[data-v-fa4dfb8f]:after,[data-v-fa4dfb8f]::backdrop{--tw-contain-size:initial;--tw-contain-layout:initial;--tw-contain-paint:initial;--tw-contain-style:initial}}}.floating-container-overlay-container[data-v-fa4dfb8f]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);--tw-contain-layout:layout;contain:var(--tw-contain-size,)var(--tw-contain-layout,)var(--tw-contain-paint,)var(--tw-contain-style,);display:contents;position:absolute}.floating-container-overlay-container .floating-container-overlay[data-v-fa4dfb8f]{pointer-events:none;top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);display:flex;position:absolute}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-fa4dfb8f]{pointer-events:auto;visibility:hidden;margin:calc(var(--spacing,.25rem)*0);width:max-content;height:max-content;padding:calc(var(--spacing,.25rem)*0);background-color:#0000;position:absolute;overflow:visible}@property --tw-contain-size{syntax:"*";inherits:false}@property --tw-contain-layout{syntax:"*";inherits:false}@property --tw-contain-paint{syntax:"*";inherits:false}@property --tw-contain-style{syntax:"*";inherits:false}.list[data-v-12959343]{flex-direction:column;display:flex}.list.grid[data-v-12959343]{flex-flow:wrap}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-175d52b3],[data-v-175d52b3]:before,[data-v-175d52b3]:after,[data-v-175d52b3]::backdrop{--tw-font-weight:initial}}}.list-item[data-v-175d52b3]{background-color:var(--color-child,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);color:var(--color-body-text,#111827);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));align-items:center;display:flex}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]){outline-offset:2px;outline:2px solid #0000}}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):hover{cursor:pointer;background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):hover:where(.dark,.dark *){background-color:var(--color-slate-800,oklch(27.9% .041 260.031))}.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-175d52b3]{background-color:var(--color-gray-200,oklch(92.8% .006 264.531))}:is(.list-item.clickable[data-v-175d52b3]:not([tabindex="-1"]):focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-175d52b3]):where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-175d52b3]{background-color:var(--color-gray-300,oklch(87.2% .01 258.338))}.list-item.clickable:not([tabindex="-1"]):focus.active[data-v-175d52b3]:where(.dark,.dark *){background-color:var(--color-slate-700,oklch(37.2% .044 257.287))}.list-item .prepend[data-v-175d52b3]{display:flex}.list-item .content[data-v-175d52b3]{flex-direction:column;display:flex}.list-item .content .title[data-v-175d52b3]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.list-item .content .subtitle[data-v-175d52b3]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.list-item .content .subtitle[data-v-175d52b3]:where(.dark,.dark *){color:var(--color-gray-400,oklch(70.7% .022 261.325))}.list-item .content .text[data-v-175d52b3]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-f6c45fb8],[data-v-f6c45fb8]:before,[data-v-f6c45fb8]:after,[data-v-f6c45fb8]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.label[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*6);width:fit-content;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:.25rem;align-items:center;padding-inline:.625rem;display:flex}.label.small[data-v-f6c45fb8]{height:calc(var(--spacing,.25rem)*5);padding-inline:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.label.blue[data-v-f6c45fb8]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585));color:var(--color-blue-700,oklch(48.8% .243 264.376))}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#54a2ff1a!important}@supports (color:color-mix(in lab,red,red)){.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-blue-400,oklch(70.7% .165 254.624))10%,transparent)!important}}.label.blue[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))!important}.label.green[data-v-f6c45fb8]{background-color:var(--color-green-100,oklch(96.2% .044 156.743));color:var(--color-green-700,oklch(52.7% .154 150.069))}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#05df721a!important}@supports (color:color-mix(in lab,red,red)){.label.green[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-400,oklch(79.2% .209 151.711))10%,transparent)!important}}.label.green[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-green-300,oklch(87.1% .15 154.449))!important}.label.gray[data-v-f6c45fb8]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542));color:var(--color-gray-700,oklch(37.3% .034 259.733))}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#a1a1a11a!important}@supports (color:color-mix(in lab,red,red)){.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-neutral-400,oklch(70.8% 0 0))10%,transparent)!important}}.label.gray[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))!important}.label.orange[data-v-f6c45fb8]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164));color:var(--color-orange-700,oklch(55.3% .195 38.402))}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff8b1a1a!important}@supports (color:color-mix(in lab,red,red)){.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-orange-400,oklch(75% .183 55.934))10%,transparent)!important}}.label.orange[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-orange-300,oklch(83.7% .128 66.29))!important}.label.purple[data-v-f6c45fb8]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174));color:var(--color-purple-700,oklch(49.6% .265 301.924))}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#c07eff1a!important}@supports (color:color-mix(in lab,red,red)){.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-purple-400,oklch(71.4% .203 305.504))10%,transparent)!important}}.label.purple[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-purple-300,oklch(82.7% .119 306.383))!important}.label.red[data-v-f6c45fb8]{background-color:var(--color-red-100,oklch(93.6% .032 17.717));color:var(--color-red-700,oklch(50.5% .213 27.518))}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ff65681a!important}@supports (color:color-mix(in lab,red,red)){.label.red[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-red-400,oklch(70.4% .191 22.216))10%,transparent)!important}}.label.red[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-red-300,oklch(80.8% .114 19.571))!important}.label.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193));color:var(--color-yellow-700,oklch(55.4% .135 66.442))}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#fac8001a!important}@supports (color:color-mix(in lab,red,red)){.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-yellow-400,oklch(85.2% .199 91.936))10%,transparent)!important}}.label.yellow[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-yellow-300,oklch(90.5% .182 98.111))!important}.label.alt[data-v-f6c45fb8]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));border-width:1px}.label.alt.white[data-v-f6c45fb8]{border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);color:var(--color-neutral-900,oklch(20.5% 0 0))}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-white,#fff)10%,transparent)}}.label.alt.white[data-v-f6c45fb8]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}.label.alt.gray[data-v-f6c45fb8]{background-color:var(--color-neutral-100,oklch(97% 0 0));color:var(--color-neutral-900,oklch(20.5% 0 0));border-color:#3741511a}.label.alt.orange[data-v-f6c45fb8]{background-color:var(--color-orange-50,oklch(98% .016 73.684));color:var(--color-orange-900,oklch(40.8% .123 38.172));border-color:#c2730c1a}.label.alt.blue[data-v-f6c45fb8]{background-color:var(--color-blue-50,oklch(97% .014 254.604));color:var(--color-blue-900,oklch(37.9% .146 265.522));border-color:#1d65d81a}.label.alt.green[data-v-f6c45fb8]{background-color:var(--color-green-50,oklch(98.2% .018 155.826));color:var(--color-green-900,oklch(39.3% .095 152.535));border-color:#16803a1a}.label.alt.red[data-v-f6c45fb8]{background-color:var(--color-red-50,oklch(97.1% .013 17.38));color:var(--color-red-900,oklch(39.6% .141 25.723));border-color:#b32c221a}.label.alt.purple[data-v-f6c45fb8]{background-color:var(--color-purple-50,oklch(97.7% .014 308.299));color:var(--color-purple-900,oklch(38.1% .176 304.987));border-color:#7522ce1a}.label.alt.yellow[data-v-f6c45fb8]{background-color:var(--color-yellow-50,oklch(98.7% .026 102.212));color:var(--color-yellow-900,oklch(42.1% .095 57.708));border-color:#a162071a}.divider[data-v-cf022594]{border-color:var(--color-border-primary,#d1d5db);width:100%}.divider[data-v-cf022594]:not(.vertical){border-top-width:var(--v1e7beddb)}.divider.vertical[data-v-cf022594]{width:.0625rem;height:100%}.divider.vertical.flex[data-v-cf022594]{align-self:stretch;height:auto}.divider.vertical[data-v-cf022594]{border-left-width:var(--v1e7beddb)}.base-select[data-v-7e184a2a]:focus{outline:none}.base-select.disabled .wrapper[data-v-7e184a2a]{background-color:var(--color-disabled);border-color:var(--color-input-disabled-border);cursor:not-allowed}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-7e184a2a]{color:var(--color-disabled-text);background-color:var(--color-disabled)}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-7e184a2a]::placeholder{color:var(--color-disabled-text)}.base-select.click[data-v-7e184a2a]{cursor:pointer}.base-select.click.disabled[data-v-7e184a2a]{pointer-events:none;cursor:default}.base-select .input-label[data-v-7e184a2a]{font-size:.875rem;line-height:1.25rem;font-weight:500;margin-bottom:.25rem;display:flex}.base-select .wrapper[data-v-7e184a2a]{background-color:var(--color-input-bg);border:solid 1px var(--color-input-border);border-radius:.5rem;display:flex;align-items:center;width:100%;height:2.5rem;padding:.5rem 1rem .5rem .5rem}.base-select .wrapper[data-v-7e184a2a]:hover{border-color:var(--color-border-primary-hover)}.base-select .wrapper.focus[data-v-7e184a2a]{border-color:var(--color-primary-light);border-width:2px;padding-left:.4375rem;padding-right:.9375rem}.base-select .wrapper.has-error[data-v-7e184a2a]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)}.base-select .wrapper .prepend-icon[data-v-7e184a2a]{color:var(--color-primary);margin-left:.5rem}.base-select .wrapper .selected-items[data-v-7e184a2a]{display:flex;gap:.25rem;white-space:nowrap;overflow:hidden;margin-left:.5rem;width:auto}.base-select .wrapper .selected-items .label[data-v-7e184a2a]{font-size:.75rem;line-height:1rem;height:min-content}.base-select .wrapper .placeholder[data-v-7e184a2a]{color:var(--color-slate-500);margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .selected-item[data-v-7e184a2a]{font-size:.875rem;line-height:1.25rem;margin-left:.5rem;text-overflow:ellipsis;overflow:hidden}.base-select .wrapper .action-buttons[data-v-7e184a2a]{display:flex;gap:.25rem;margin-left:auto}.base-select .wrapper input[data-v-7e184a2a]{border-style:none;padding:.5rem 0;margin-left:.5rem;font-size:.875rem;line-height:1.25rem;flex:1 0 5rem;min-width:0;min-height:0;background-color:var(--color-input-bg);color:var(--color-body-text);height:2.25rem}.base-select .wrapper input[data-v-7e184a2a]::placeholder{color:var(--color-slate-400)}.base-select .wrapper input[data-v-7e184a2a]:focus{box-shadow:none}.base-select .wrapper .label-inner[data-v-7e184a2a]{display:flex;align-items:center;gap:.25rem}.base-select .wrapper .label-inner .close-button[data-v-7e184a2a]{height:1rem;width:1rem}.base-select .error[data-v-7e184a2a]{font-size:.875rem;line-height:1.25rem;color:var(--color-error-secondary);margin-top:.5rem}.state-indicator[data-v-7e184a2a]{pointer-events:none;transition:all .2s ease-in-out}.state-indicator.is-open[data-v-7e184a2a]{transform:rotate(180deg)}.content-divider[data-v-7e184a2a]{border-color:var(--color-input-border);margin-left:1.5rem;margin-right:1.5rem}.select-content[data-v-7e184a2a]{justify-content:space-between;max-height:18.75rem;overflow-y:auto;padding:.5rem 0;border-radius:.5rem;background-color:var(--color-child)}.select-content.show-shadow[data-v-7e184a2a]{box-shadow:var(--shadow-sm)}.select-content.remove-radius[data-v-7e184a2a]{border-top-left-radius:0!important;border-top-right-radius:0!important}.select-content .no-results[data-v-7e184a2a]{color:var(--color-gray-700);cursor:default;-webkit-user-select:none;user-select:none;padding:.5rem 1rem;position:relative}.select-content[data-v-7e184a2a] .checkbox-container{margin-right:1rem}.dark .wrapper .placeholder[data-v-7e184a2a],.dark .select-content .no-results[data-v-7e184a2a]{color:var(--color-body-text)}@media(min-width:768px){.select-content[data-v-7e184a2a]{max-height:400px}}@media(min-width:1024px){.select-content[data-v-7e184a2a]{max-height:500px}}.intersect[data-v-0951cb5e]{display:flex;justify-content:center}.search-loader[data-v-0951cb5e]{margin-top:.5rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-d7f78e8b],[data-v-d7f78e8b]:before,[data-v-d7f78e8b]:after,[data-v-d7f78e8b]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-border-style:solid;--tw-content:"";--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.tooltip-wrapper[data-v-d7f78e8b]{display:contents}.tooltip[data-v-d7f78e8b]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*2);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));word-break:break-all;color:var(--color-black,#000);--tw-drop-shadow-size:drop-shadow(0 2px 4px var(--tw-drop-shadow-color,#0000003d));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,);justify-content:center;display:flex;position:relative}.tooltip[data-v-d7f78e8b]:where(.dark,.dark *){background-color:var(--color-neutral-200,oklch(92.2% 0 0))}.tooltip[data-v-d7f78e8b]:before{width:calc(var(--spacing,.25rem)*0);border-style:var(--tw-border-style);--tw-border-style:solid;--tw-content:"";content:var(--tw-content);border:8px solid #0000;display:block;position:absolute}.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]{margin-bottom:calc(var(--spacing,.25rem)*2)}:is(.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]):before{content:var(--tw-content);border-top-color:var(--color-white,#fff)}:is(.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.top-left[data-v-d7f78e8b],.tooltip.top-right[data-v-d7f78e8b],.tooltip.top-center[data-v-d7f78e8b],.tooltip.top[data-v-d7f78e8b]):before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-top-color:#000}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-top-color:var(--color-child-alt,#fff)}.tooltip.top-left[data-v-d7f78e8b]:before{bottom:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-right[data-v-d7f78e8b]:before{right:calc(var(--spacing,.25rem)*3);bottom:calc(var(--spacing,.25rem)*0);--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0}.tooltip.top-center[data-v-d7f78e8b]:before,.tooltip.top[data-v-d7f78e8b]:before{bottom:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-bottom-style:var(--tw-border-style);border-bottom-width:0;left:50%}.tooltip.bottom-left[data-v-d7f78e8b],.tooltip.bottom-right[data-v-d7f78e8b],.tooltip.bottom-center[data-v-d7f78e8b],.tooltip.bottom[data-v-d7f78e8b]{margin-top:calc(var(--spacing,.25rem)*2)}:is(.tooltip.bottom-left[data-v-d7f78e8b],.tooltip.bottom-right[data-v-d7f78e8b],.tooltip.bottom-center[data-v-d7f78e8b],.tooltip.bottom[data-v-d7f78e8b]):before{content:var(--tw-content);border-bottom-color:var(--color-white,#fff)}:is(.tooltip.bottom-left[data-v-d7f78e8b],.tooltip.bottom-right[data-v-d7f78e8b],.tooltip.bottom-center[data-v-d7f78e8b],.tooltip.bottom[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-bottom-color:#000}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-bottom-color:var(--color-child-alt,#fff)}.tooltip.bottom-left[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-right[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*3);--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0}.tooltip.bottom-center[data-v-d7f78e8b]:before,.tooltip.bottom[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*0);--tw-translate-x: -50% ;--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-top-style:var(--tw-border-style);border-top-width:0;left:50%}.tooltip.left-top[data-v-d7f78e8b],.tooltip.left-bottom[data-v-d7f78e8b],.tooltip.left-center[data-v-d7f78e8b],.tooltip.left[data-v-d7f78e8b]{margin-right:calc(var(--spacing,.25rem)*2)}:is(.tooltip.left-top[data-v-d7f78e8b],.tooltip.left-bottom[data-v-d7f78e8b],.tooltip.left-center[data-v-d7f78e8b],.tooltip.left[data-v-d7f78e8b]):before{content:var(--tw-content);border-left-color:var(--color-white,#fff)}:is(.tooltip.left-top[data-v-d7f78e8b],.tooltip.left-bottom[data-v-d7f78e8b],.tooltip.left-center[data-v-d7f78e8b],.tooltip.left[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-left-color:#000}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-left-color:var(--color-child-alt,#fff)}.tooltip.left-top[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*3);right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-bottom[data-v-d7f78e8b]:before{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*3);--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.left-center[data-v-d7f78e8b]:before,.tooltip.left[data-v-d7f78e8b]:before{top:50%;right:calc(var(--spacing,.25rem)*0);--tw-translate-x:100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-right-style:var(--tw-border-style);border-right-width:0}.tooltip.right-top[data-v-d7f78e8b],.tooltip.right-bottom[data-v-d7f78e8b],.tooltip.right-center[data-v-d7f78e8b],.tooltip.right[data-v-d7f78e8b]{margin-left:calc(var(--spacing,.25rem)*2)}:is(.tooltip.right-top[data-v-d7f78e8b],.tooltip.right-bottom[data-v-d7f78e8b],.tooltip.right-center[data-v-d7f78e8b],.tooltip.right[data-v-d7f78e8b]):before{content:var(--tw-content);border-right-color:var(--color-white,#fff)}:is(.tooltip.right-top[data-v-d7f78e8b],.tooltip.right-bottom[data-v-d7f78e8b],.tooltip.right-center[data-v-d7f78e8b],.tooltip.right[data-v-d7f78e8b]):where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-d7f78e8b]:before{content:var(--tw-content);border-right-color:#000}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-d7f78e8b]:where(.dark,.dark *):before{content:var(--tw-content);border-right-color:var(--color-child-alt,#fff)}.tooltip.right-top[data-v-d7f78e8b]:before{top:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-bottom[data-v-d7f78e8b]:before{bottom:calc(var(--spacing,.25rem)*3);left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.right-center[data-v-d7f78e8b]:before,.tooltip.right[data-v-d7f78e8b]:before{top:50%;left:calc(var(--spacing,.25rem)*0);--tw-translate-x:-100%;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);border-left-style:var(--tw-border-style);border-left-width:0}.tooltip.inverted[data-v-d7f78e8b]{background-color:var(--color-black,#000);color:var(--color-white,#fff)}.tooltip.inverted[data-v-d7f78e8b]:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.input-container[data-v-790b73c6]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-790b73c6]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-790b73c6]{stroke:var(--color-error-tertiary)}.input-container.has-error .icon.has-error[data-v-790b73c6]{fill:var(--color-error-tertiary);stroke:#fff}.container-inner[data-v-790b73c6]{width:100%;position:relative}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended)[data-v-790b73c6]{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;z-index:20}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .icon[data-v-790b73c6]{height:1.25rem;width:1.25rem}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .text[data-v-790b73c6]{color:var(--color-input-inline);font-size:.875rem;line-height:1.25rem}.container-inner .inline-container-prepended[data-v-790b73c6]{left:1rem}.container-inner .inline-container-appended[data-v-790b73c6]{right:1rem}.input-label[data-v-790b73c6]{font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:flex}.input-label .label-text[data-v-790b73c6]{display:flex;gap:.5625rem;align-items:center}.input-label .label-text .info-icon[data-v-790b73c6]{width:.875rem;height:.875rem}.input-label .optional[data-v-790b73c6]{color:#6b7280;font-weight:400;margin-left:auto;padding-left:.25rem}.dark :is(.input-label .optional)[data-v-790b73c6]{color:#e5e7eb}.dark .input[data-v-790b73c6]{color-scheme:dark}.input[data-v-790b73c6]{background-color:var(--color-input-bg);width:100%;height:2.5rem;border:1px solid var(--color-input-border);border-radius:.5rem;padding:0 1rem;font-size:.875rem;line-height:1.25rem;color:var(--color-slate-900);box-sizing:border-box;outline:none;transition:border .2s}.input[data-v-790b73c6]::placeholder{color:var(--color-neutral-400)}.input[data-v-790b73c6]:hover{border-color:var(--color-border-primary-hover)}.input[data-v-790b73c6]:focus{border-color:var(--color-primary-light);border-width:2px;padding-left:15px}.input.has-icon-prepended[data-v-790b73c6]{padding-left:2.5rem}.input.has-icon-prepended[data-v-790b73c6]:focus{padding-left:2.4375rem}.input.has-inline-text[data-v-790b73c6]{padding-right:2.5rem}.input.has-error[data-v-790b73c6]{border-color:var(--color-error-tertiary);color:var(--color-error-primary)!important}.input.has-error[data-v-790b73c6]::placeholder{color:var(--color-error-primary)}.input.is-valid[data-v-790b73c6]{border-color:var(--color-success-tertiary);color:var(--color-success-primary)}.input.is-valid[data-v-790b73c6]::placeholder{color:var(--color-success-primary)}.input:disabled[data-v-790b73c6]{background-color:var(--color-disabled);color:var(--color-disabled-text)!important;border-color:var(--color-input-disabled-border)}.input:disabled[data-v-790b73c6]::placeholder{color:var(--color-disabled-text)}.input.medium[data-v-790b73c6]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-790b73c6]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-790b73c6]{height:3.5rem;font-size:1rem;line-height:1.5rem}.dark .input[data-v-790b73c6]{color:var(--color-body-text)}.error[data-v-790b73c6]{color:var(--color-error-secondary);font-size:.875rem;line-height:1.25rem;margin-top:.5rem}.input-container[data-v-19316412] .container-inner .inline-container-appended{margin-right:calc(var(--spacing,.25rem)*6)}.input-container[data-v-19316412] .container-inner .inline-container-appended .button{background-color:#0000}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-be635536],[data-v-be635536]:before,[data-v-be635536]:after,[data-v-be635536]::backdrop{--tw-border-style:solid}}}.table-selection[data-v-be635536]{margin-top:calc(var(--spacing,.25rem)*1);align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff);width:100%;padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*2);display:flex}.table-selection[data-v-be635536]:where(.dark,.dark *){border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff)}.table-selection .amount[data-v-be635536]{margin-right:auto}.table-selection .actions[data-v-be635536]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@media(min-width:48rem){.table-selection .actions[data-v-be635536]{flex-direction:row}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-460d853e],[data-v-460d853e]:before,[data-v-460d853e]:after,[data-v-460d853e]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial}}}.list[data-v-460d853e]{width:calc(var(--spacing,.25rem)*64);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);padding-top:calc(var(--spacing,.25rem)*4);padding-bottom:calc(var(--spacing,.25rem)*2.5);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow:hidden}.list .list-inner[data-v-460d853e]{gap:calc(var(--spacing,.25rem)*1.5);flex-direction:column;max-height:33.625rem;display:flex;overflow:auto}.list .active-columns[data-v-460d853e],.list .available-columns[data-v-460d853e]{padding-inline:calc(var(--spacing,.25rem)*4);flex-direction:column;display:flex}:is(.list .active-columns,.list .available-columns) .title[data-v-460d853e]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-neutral-700,oklch(37.1% 0 0));-webkit-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .title[data-v-460d853e]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}:is(.list .active-columns,.list .available-columns) .column[data-v-460d853e]{height:calc(var(--spacing,.25rem)*8);flex-direction:row;align-items:center;display:flex}:is(.list .active-columns,.list .available-columns) .column .checkbox-container[data-v-460d853e]{width:fit-content;padding-right:calc(var(--spacing,.25rem)*2)}:is(.list .active-columns,.list .available-columns) .column .label[data-v-460d853e]{text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));-webkit-user-select:none;user-select:none;overflow:hidden}:is(.list .active-columns,.list .available-columns) .column .label[data-v-460d853e]:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.list .active-columns,.list .available-columns) .column .drag-handle[data-v-460d853e]{cursor:grab;padding-left:calc(var(--spacing,.25rem)*2);margin-left:auto}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-460d853e]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-460d853e]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.list .active-columns .title[data-v-460d853e]{padding-bottom:calc(var(--spacing,.25rem)*1.5)}.list .active-columns .column.dragging[data-v-460d853e]{visibility:hidden}.list .available-columns .title[data-v-460d853e]{padding-block:calc(var(--spacing,.25rem)*1.5)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-46c41877],[data-v-46c41877]:before,[data-v-46c41877]:after,[data-v-46c41877]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-46c41877]{top:var(--aadc3322);display:table-header-group}.table-head .select-column[data-v-46c41877],.table-head .action-column[data-v-46c41877]{z-index:2}.table-head .header[data-v-46c41877]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media(hover:hover){.table-head .header[data-v-46c41877]:hover{cursor:pointer}}.table-head .header.active[data-v-46c41877]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-46c41877]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-46c41877],.table-head .header .sort-icon.right[data-v-46c41877]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-46c41877]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-46c41877]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-46c41877],.table-head .header .sort-icon.active[data-v-46c41877]{display:block}.table-head[data-v-46c41877] .column-configurator{margin-left:auto}.table-head .filters[data-v-46c41877]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-46c41877]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-46c41877]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-46c41877]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-46c41877]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-46c41877],.action-column[data-v-46c41877]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-46c41877]:after,.action-column.overlap[data-v-46c41877]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-46c41877]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.select-column.overlap[data-v-46c41877]:after{--tw-gradient-position:to right in oklab}}.select-column.overlap[data-v-46c41877]:after{background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-46c41877]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left}@supports (background-image:linear-gradient(in lab,red,red)){.action-column.overlap[data-v-46c41877]:before{--tw-gradient-position:to left in oklab}}.action-column.overlap[data-v-46c41877]:before{background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-46c41877]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-46c41877]{cursor:pointer}tbody tr.clickable[data-v-46c41877]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20% 80%,#fff 95%)}tbody tr.clickable[data-v-46c41877]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20% 80%,#0f172a 95%)}tbody tr.selected[data-v-46c41877]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20% 80%,#fff 95%)}tbody tr.selected[data-v-46c41877]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20% 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-46c41877],tbody tr.selectable td[data-v-46c41877]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-46c41877],tbody tr:not(.selectable) td[data-v-46c41877]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.table-footer[data-v-46c41877]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*1);flex-wrap:wrap;justify-content:space-between;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-46c41877]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .current-page-info[data-v-46c41877]{align-items:center;row-gap:calc(var(--spacing,.25rem)*2);color:var(--color-neutral-950,oklch(14.5% 0 0));flex-wrap:wrap;flex-grow:1;display:flex}.table-footer .current-page-info[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .current-page-info .total-results[data-v-46c41877]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.table-footer .current-page-info .total-results span[data-v-46c41877]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}.table-footer .current-page-info .page-selector[data-v-46c41877]{flex-wrap:wrap;flex-grow:1;align-items:center;display:none}@media(min-width:48rem){.table-footer .current-page-info .page-selector[data-v-46c41877]{display:flex}}.table-footer .current-page-info .page-selector[data-v-46c41877] .base-select{width:100%;max-width:calc(var(--spacing,.25rem)*24)}.table-footer .current-page-info .page-selector .per-page[data-v-46c41877]{margin-left:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.table-footer .current-page-info .page-selector .per-page[data-v-46c41877]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.table-footer .pagination[data-v-46c41877]{padding-block:calc(var(--spacing,.25rem)*4);margin-left:auto}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-5b94dd63],[data-v-5b94dd63]:before,[data-v-5b94dd63]:after,[data-v-5b94dd63]::backdrop{--tw-font-weight:initial;--tw-border-style:solid;--tw-duration:initial;--tw-ease:initial}}}.summary-group[data-v-5b94dd63]{padding-block:calc(var(--spacing,.25rem)*2)}.summary-group .header[data-v-5b94dd63]{justify-content:space-between;align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.summary-group .header.expandable[data-v-5b94dd63]{cursor:pointer}.summary-group .header .name[data-v-5b94dd63]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-group .header[data-v-5b94dd63] .icon{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.summary-group .items[data-v-5b94dd63]{gap:calc(var(--spacing,.25rem)*2);border-left-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);padding-left:calc(var(--spacing,.25rem)*4);border-left-width:4px;flex-direction:column;animation:.3s fadeIn-5b94dd63;display:flex}.grow-enter-active[data-v-5b94dd63],.grow-leave-active[data-v-5b94dd63]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;--tw-ease:var(--ease-in-out,cubic-bezier(.4,0,.2,1));transition-duration:.3s;transition-timing-function:var(--ease-in-out,cubic-bezier(.4,0,.2,1))}.grow-enter-from[data-v-5b94dd63],.grow-leave-to[data-v-5b94dd63]{height:calc(var(--spacing,.25rem)*0)!important;padding-block:calc(var(--spacing,.25rem)*0)!important;opacity:0!important}@keyframes fadeIn-5b94dd63{0%{opacity:0}to{opacity:1}}.summary-item[data-v-e9ecb151]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-item a[href][data-v-e9ecb151]:hover{text-decoration-line:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3468d776],[data-v-3468d776]:before,[data-v-3468d776]:after,[data-v-3468d776]::backdrop{--tw-font-weight:initial}}}.badge[data-v-3468d776]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:var(--color-white,#fff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.badge.small[data-v-3468d776]{height:calc(var(--spacing,.25rem)*2);width:calc(var(--spacing,.25rem)*2)}.badge.small.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-.5);right:calc(var(--spacing,.25rem)*-.5)}.badge.blue[data-v-3468d776]{background-color:var(--color-blue-600,oklch(54.6% .245 262.881))}.badge.blue .pulse[data-v-3468d776]{background-color:var(--color-blue-400,oklch(70.7% .165 254.624))}.badge.green[data-v-3468d776]{background-color:var(--color-green-700,oklch(52.7% .154 150.069))}.badge.green .pulse[data-v-3468d776]{background-color:var(--color-green-400,oklch(79.2% .209 151.711))}.badge.gray[data-v-3468d776]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.badge.gray .pulse[data-v-3468d776]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.badge.orange[data-v-3468d776]{background-color:var(--color-orange-700,oklch(55.3% .195 38.402))}.badge.orange .pulse[data-v-3468d776]{background-color:var(--color-orange-400,oklch(75% .183 55.934))}.badge.purple[data-v-3468d776]{background-color:var(--color-purple-600,oklch(55.8% .288 302.321))}.badge.purple .pulse[data-v-3468d776]{background-color:var(--color-purple-400,oklch(71.4% .203 305.504))}.badge.red[data-v-3468d776]{background-color:var(--color-red-600,oklch(57.7% .245 27.325))}.badge.red .pulse[data-v-3468d776]{background-color:var(--color-red-400,oklch(70.4% .191 22.216))}.badge.yellow[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936));color:var(--color-gray-900,oklch(21% .034 264.665))}.badge.yellow .pulse[data-v-3468d776]{background-color:var(--color-yellow-400,oklch(85.2% .199 91.936))}.badge.position[data-v-3468d776]{top:calc(var(--spacing,.25rem)*-2);right:calc(var(--spacing,.25rem)*-3);position:absolute}.badge.pulsating .pulse[data-v-3468d776]{width:100%;height:100%;animation:var(--animate-ping,ping-3468d776 1s cubic-bezier(0,0,.2,1)infinite);opacity:.75;border-radius:3.40282e38px;position:absolute}.badge.pulsating .content[data-v-3468d776]{z-index:1}@keyframes ping-3468d776{75%,to{opacity:0;transform:scale(2)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-307971fb],[data-v-307971fb]:before,[data-v-307971fb]:after,[data-v-307971fb]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-content:"";--tw-border-style:solid;--tw-font-weight:initial}}}.menu-item[data-v-307971fb]{background-color:inherit;height:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));position:relative}.menu-item.title[data-v-307971fb]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.menu-item.title[data-v-307971fb]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu-item.simple[data-v-307971fb]{color:var(--color-primary,#2563eb)}.menu-item.simple[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.menu-item.simple[data-v-307971fb]:hover{text-decoration-line:underline}.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-6);width:calc(var(--spacing,.25rem)*6);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-content:"|";content:var(--tw-content);justify-content:center;align-items:center;display:flex;position:absolute;top:50%}@media(min-width:48rem){.menu-item.simple[data-v-307971fb]:not(.first):before{margin-left:calc(var(--spacing,.25rem)*-12);width:calc(var(--spacing,.25rem)*12)}}.menu-item.disabled[data-v-307971fb],.menu-item[disabled][data-v-307971fb]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#606369)}.menu-item .menu-item-content[data-v-307971fb]{align-items:center;column-gap:calc(var(--spacing,.25rem)*3);height:100%;color:var(--b87525ea);display:flex}.menu-item .menu-item-content .mini-icon[data-v-307971fb]{color:var(--b87525ea)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}.menu-item .menu-item-content .sub-menu-trigger[data-v-307971fb],.menu-item .menu-item-content .append-icon[data-v-307971fb],.menu-item .menu-item-content .count[data-v-307971fb],.menu-item .menu-item-content .hotkey[data-v-307971fb]{margin-left:auto}.menu-item .menu-item-content .count[data-v-307971fb]{border-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-width:1px;border-radius:3.40282e38px}.menu-item .menu-item-content .count[data-v-307971fb]:where(.dark,.dark *){border-color:var(--color-neutral-400,oklch(70.8% 0 0))}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);color:var(--color-primary,#2563eb);margin-left:auto}.menu-item .menu-item-content .current-item-icon[data-v-307971fb]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-85c41b4e],[data-v-85c41b4e]:before,[data-v-85c41b4e]:after,[data-v-85c41b4e]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.menu[data-v-85c41b4e]{align-items:center;display:flex}.menu[data-v-85c41b4e]:not(.vertical):not(.simple){gap:calc(var(--spacing,.25rem)*6);height:100%}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item{border-bottom-style:var(--tw-border-style);color:var(--color-gray-500,oklch(55.1% .027 264.364));background-color:#0000;border-color:#0000;border-bottom-width:.1875rem}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item:where(.dark,.dark *){color:var(--color-body-text,#111827)}:is(.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item:not(.current):hover,.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item:not(.current):focus){border-color:var(--color-border-primary-hover,#9ca3af)}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .menu-item .menu-item-content{--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .current{border-color:var(--color-primary,#2563eb)}.menu[data-v-85c41b4e]:not(.vertical):not(.simple) .current:where(.dark,.dark *){border-color:var(--color-blue-400,oklch(70.7% .165 254.624));color:var(--color-blue-400,oklch(70.7% .165 254.624))!important}.menu.vertical[data-v-85c41b4e]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*1);background-color:inherit;flex-direction:column}.menu.vertical .item-vertical[data-v-85c41b4e]{border-radius:var(--radius-lg,.5rem);--tw-border-style:none;width:100%;padding:calc(var(--spacing,.25rem)*2);border-style:none}.menu.vertical .item-vertical[data-v-85c41b4e]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):hover{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):focus{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .item-vertical[data-v-85c41b4e]:not(.current):not(.title):focus:where(.dark,.dark *){background-color:var(--color-slate-600,oklch(44.6% .043 257.281))}.menu.vertical[data-v-85c41b4e] .divider{margin-block:.3125rem}.menu.vertical .current[data-v-85c41b4e]{background-color:var(--color-neutral-100,oklch(97% 0 0))}.menu.vertical .current[data-v-85c41b4e]:where(.dark,.dark *){background-color:var(--color-tertiary,#eff6ff)}.menu.simple[data-v-85c41b4e]{justify-content:center;gap:calc(var(--spacing,.25rem)*6);flex-wrap:wrap}@media(min-width:48rem){.menu.simple[data-v-85c41b4e]{gap:calc(var(--spacing,.25rem)*12)}}.menu.mini[data-v-85c41b4e] .count{display:none}.menu[data-v-85c41b4e] .current{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)!important}.menu[data-v-85c41b4e] .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}.menu[data-v-85c41b4e] .current .icon{color:var(--color-primary,#2563eb)}.sub-menu[data-v-85c41b4e]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);width:16.5rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cb39cec3],[data-v-cb39cec3]:before,[data-v-cb39cec3]:after,[data-v-cb39cec3]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.dropdown[data-v-cb39cec3]{position:relative}.dropdown .menu[data-v-cb39cec3]{border-radius:var(--radius-md,.375rem);background-color:var(--color-child,#fff);padding:calc(var(--spacing,.25rem)*1);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-7013d362],[data-v-7013d362]:before,[data-v-7013d362]:after,[data-v-7013d362]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.action-button[data-v-7013d362]{margin:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14);cursor:pointer;--tw-border-style:none;background-color:var(--color-primary,#2563eb);padding:calc(var(--spacing,.25rem)*0);--tw-outline-style:none;border-style:none;border-radius:3.40282e38px;outline-style:none;justify-content:center;align-items:center;display:inline-flex;position:relative}@media(forced-colors:active){.action-button[data-v-7013d362]{outline-offset:2px;outline:2px solid #0000}}.action-button[data-v-7013d362]{-webkit-user-select:none;user-select:none}@media(hover:hover){.action-button[data-v-7013d362]:hover{background-color:var(--color-primary-hover,#1d4ed8)}}.action-button[data-v-7013d362]:focus{background-color:var(--color-primary-light,#3b82f6)}.action-button[data-v-7013d362]:active{background-color:var(--color-primary-pressed,#1e40af)}.action-button[disabled][data-v-7013d362]{pointer-events:none;background-color:var(--color-disabled,#f3f4f6)}.action-button[disabled] .icon[data-v-7013d362]{color:var(--color-disabled-text,#606369)}.action-button.floating[data-v-7013d362]{right:calc(var(--spacing,.25rem)*0);bottom:calc(var(--spacing,.25rem)*0);z-index:50;margin-right:calc(var(--spacing,.25rem)*6);margin-bottom:calc(var(--spacing,.25rem)*6);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:fixed}.action-button .icon[data-v-7013d362]{color:var(--color-white,#fff)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-2e571008],[data-v-2e571008]:before,[data-v-2e571008]:after,[data-v-2e571008]::backdrop{--tw-font-weight:initial}}}.copy-button[data-v-2e571008]{align-items:center;gap:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-lg,.5rem);background-color:var(--color-tertiary,#eff6ff);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);flex-direction:row;display:inline-flex}@media(hover:hover){.copy-button[data-v-2e571008]:hover{background-color:var(--color-tertiary-hover,#dbeafe)}}.copy-button[data-v-2e571008]:active{background-color:var(--color-tertiary-pressed,#bfdbfe)}.copy-button .micro-icon[data-v-2e571008] svg{stroke-width:2px}.check-icon[data-v-2e571008]{color:var(--color-green-600,oklch(62.7% .194 149.214))}.copy-icon-button[data-v-2e571008]{width:fit-content;border-radius:var(--radius-lg,.5rem)!important}.copy-icon-button.small[data-v-2e571008]{height:calc(var(--spacing,.25rem)*8);padding-inline:calc(var(--spacing,.25rem)*2)}.copy-icon-button.small .micro-icon[data-v-2e571008] svg{stroke-width:2px}.copy-icon-button.medium[data-v-2e571008]{height:calc(var(--spacing,.25rem)*10);padding-inline:calc(var(--spacing,.25rem)*2.5)}.copy-icon-button.medium .mini-icon[data-v-2e571008]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.copy-icon-button.large[data-v-2e571008]{height:calc(var(--spacing,.25rem)*12);padding-inline:calc(var(--spacing,.25rem)*3)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-92b3affe],[data-v-92b3affe]:before,[data-v-92b3affe]:after,[data-v-92b3affe]::backdrop{--tw-font-weight:initial;--tw-border-style:solid}}}.active[data-v-92b3affe]:not(.button-segment) .mini-icon:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment[data-v-92b3affe]{z-index:10;overflow-wrap:break-word}@media screen and (max-width:640px){.segment[data-v-92b3affe]{word-break:break-all}}.segment:not(.button-segment).active[data-v-92b3affe]{color:var(--color-primary,#2563eb)}.segment:not(.button-segment).active[data-v-92b3affe]:where(.dark,.dark *){color:var(--color-blue-300,oklch(80.9% .105 251.813))}.segment.button-segment[data-v-92b3affe]{--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400)}.segment.button-segment.active[data-v-92b3affe]{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary,#2563eb);padding-inline:.6875rem}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1bf35dd7],[data-v-1bf35dd7]:before,[data-v-1bf35dd7]:after,[data-v-1bf35dd7]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}.segmented-control.default[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-100,oklch(97% 0 0));padding:calc(var(--spacing,.25rem)*1);grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;display:grid;position:relative}.segmented-control.default[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.segmented-control.default .highlight[data-v-1bf35dd7]{pointer-events:none;inset-inline-start:calc(var(--spacing,.25rem)*1);top:calc(var(--spacing,.25rem)*1);bottom:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);--tw-duration:.2s;transition-duration:.2s;position:absolute;margin-inline-start:calc(var(--spacing,.25rem)*0)!important}.segmented-control.default .highlight[data-v-1bf35dd7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.segmented-control.buttons[data-v-1bf35dd7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:row;display:flex}.switch[data-v-08900835]{background-color:var(--color-neutral-200);position:relative;display:inline-flex;height:1.5rem;width:2.75rem;flex-shrink:0;cursor:pointer;border-radius:9999px;border:2px solid transparent;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;outline:none}.switch[data-v-08900835]:focus{box-shadow:#0000 0 0,#0000 0 0,#fff 0 0 0 2px,#2563eb 0 0 0 4px,#0000 0 0}.switch.enabled[data-v-08900835]{background-color:var(--color-primary-light)!important}.switch:disabled[data-v-08900835]{filter:grayscale(1);cursor:not-allowed}.switch:disabled .dot[data-v-08900835]{background-color:var(--color-neutral-400)!important}.switch .dot[data-v-08900835]{pointer-events:none;display:inline-block;height:1.25rem;width:1.25rem;transform:translate(0);border-radius:9999px;background-color:var(--color-white);box-shadow:0 1px 3px #0000001a;transition:transform .2s ease-in-out,background-color .2s ease-in-out}.switch .dot.enabled[data-v-08900835]{transform:translate(1.25rem)}.dark .switch[data-v-08900835]{background-color:var(--color-input-bg)}.dark .switch .dot[data-v-08900835]{background-color:var(--color-neutral-100)}.theme-toggle[data-v-88cb7ead]{align-items:center;gap:calc(var(--spacing,.25rem)*2);display:flex}.accordion-item[data-v-3fc5173a]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media(min-width:640px){.accordion-item[data-v-3fc5173a]{border-radius:1rem}}.accordion-item .header[data-v-3fc5173a]{width:100%;display:flex;align-items:center;padding:1rem;background-color:inherit;border:none}.accordion-item .header[data-v-3fc5173a]:focus{background-color:var(--color-secondary-hover)}@media(min-width:640px){.accordion-item .header[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.accordion-item .header .state-indicator[data-v-3fc5173a]{margin-left:auto;padding-left:.5rem}.accordion-item .header .state-indicator .icon[data-v-3fc5173a]{color:var(--color-primary-light);transform:rotate(0);transition:transform .3s linear}.accordion-item .header .state-indicator.open[data-v-3fc5173a]{transform:rotate(180deg);padding-left:0;padding-right:.5rem}.accordion-item .header .title[data-v-3fc5173a],.accordion-item .header .title[data-v-3fc5173a-s]{text-align:left;font-weight:500;color:var(--color-body-text)}.accordion-item .content[data-v-3fc5173a]{padding-bottom:1.5rem;padding-top:0;padding-left:1rem;padding-right:1rem}@media(min-width:640px){.accordion-item .content[data-v-3fc5173a]{padding-left:1.5rem;padding-right:1.5rem}}.grow-enter-active[data-v-3fc5173a],.grow-leave-active[data-v-3fc5173a]{transition:all .3s ease-in-out}.fade-enter-active[data-v-3fc5173a],.fade-leave-active[data-v-3fc5173a]{transition:all .1s ease-in-out}.grow-enter-from[data-v-3fc5173a],.grow-leave-to[data-v-3fc5173a]{height:0!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-3fc5173a],.fade-leave-to[data-v-3fc5173a]{opacity:0;height:0!important}.accordion[data-v-25a8f65e]{display:flex;flex-direction:column;gap:.125rem}@media(min-width:640px){.accordion[data-v-25a8f65e]{gap:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ee49f574],[data-v-ee49f574]:before,[data-v-ee49f574]:after,[data-v-ee49f574]::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.amount-input-container[data-v-ee49f574]{flex-direction:column;display:flex}.amount-input[data-v-ee49f574]{height:calc(var(--spacing,.25rem)*10);color:var(--color-body-text,#111827);display:flex}.amount-input.small[data-v-ee49f574]{height:calc(var(--spacing,.25rem)*8)}.amount-input.small .minus[data-v-ee49f574],.amount-input.small .plus[data-v-ee49f574]{width:calc(var(--spacing,.25rem)*8)}.input[data-v-ee49f574],.minus[data-v-ee49f574],.plus[data-v-ee49f574]{border-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-width:1px;border-color:var(--color-border-primary,#d1d5db)}.input[data-v-ee49f574]:disabled,.minus[data-v-ee49f574]:disabled,.plus[data-v-ee49f574]:disabled{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.input[data-v-ee49f574]:disabled{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.minus[data-v-ee49f574]:disabled,.plus[data-v-ee49f574]:disabled{color:var(--color-disabled-text,#606369)}.minus[data-v-ee49f574]:hover:not(:disabled),.plus[data-v-ee49f574]:hover:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-hover,#fafafa)}.minus[data-v-ee49f574]:focus:not(:disabled),.plus[data-v-ee49f574]:focus:not(:disabled){z-index:20;border-color:var(--color-border-primary-hover,#9ca3af);background-color:var(--color-secondary-pressed,#e5e5e5)}.input[data-v-ee49f574]{z-index:10;width:calc(var(--spacing,.25rem)*14);background-color:var(--color-input-bg,#fff);text-align:center;--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);margin-inline:-1px}.input[data-v-ee49f574]:hover:not(:disabled):not(.has-error){border-color:var(--color-border-primary-hover,#9ca3af)}.input[data-v-ee49f574]:focus:not(:disabled){border-style:var(--tw-border-style);--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-width:2px}.input[data-v-ee49f574]:focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.input[data-v-ee49f574]:focus-visible{outline-offset:2px;outline:2px solid #0000}}.input[data-v-ee49f574]:focus:not(:disabled):not(.has-error){border-color:var(--color-primary-light,#3b82f6)}.input.has-error[data-v-ee49f574],.input.has-error[data-v-ee49f574]:focus{border-color:var(--color-error-tertiary,#e73c3e)}.minus[data-v-ee49f574],.plus[data-v-ee49f574]{width:calc(var(--spacing,.25rem)*10);background-color:var(--color-input-bg,#fff);justify-content:center;align-items:center;display:flex}.minus[data-v-ee49f574]{border-top-left-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.plus[data-v-ee49f574]{border-top-right-radius:var(--radius-lg,.5rem);border-bottom-right-radius:var(--radius-lg,.5rem)}.input[data-v-ee49f574]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input[data-v-ee49f574]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-ee49f574]{-moz-appearance:textfield}.error[data-v-ee49f574]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}.status[data-v-c0e73fbd]{background-color:var(--color-gray-100);height:1.5rem;width:1.5rem;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.dark .status[data-v-c0e73fbd]{background-color:var(--color-input-bg)}.status.done[data-v-c0e73fbd]{background-color:var(--color-green-100)}.dark .status.done[data-v-c0e73fbd]{background-color:var(--color-green-600)}.done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-600)}.dark .done .micro-icon[data-v-c0e73fbd]{color:var(--color-green-100)}.status.attention[data-v-c0e73fbd]{background-color:var(--color-red-100)}.dark .status.attention[data-v-c0e73fbd]{background-color:var(--color-error-accent)}.attention .micro-icon[data-v-c0e73fbd]{color:var(--color-error-secondary)}.dark .attention .micro-icon[data-v-c0e73fbd]{color:var(--color-red-100)}.alert[data-v-e623b23f]{padding:1rem;border-radius:.5rem;display:flex}.alert.error[data-v-e623b23f]{background-color:var(--color-error-accent)}.alert.error .icon .mini-icon[data-v-e623b23f]{color:var(--color-error-tertiary)}.alert.error .content .title[data-v-e623b23f]{color:var(--color-error-primary)}.alert.error .content .description[data-v-e623b23f]{color:var(--color-error-secondary)}.alert.warning[data-v-e623b23f]{background-color:var(--color-warning-accent)}.alert.warning .icon .mini-icon[data-v-e623b23f]{color:var(--color-warning-tertiary)}.alert.warning .content .title[data-v-e623b23f]{color:var(--color-warning-primary)}.alert.warning .content .description[data-v-e623b23f]{color:var(--color-warning-secondary)}.alert.success[data-v-e623b23f]{background-color:var(--color-success-accent)}.alert.success .icon .mini-icon[data-v-e623b23f]{color:var(--color-success-tertiary)}.alert.success .content .title[data-v-e623b23f]{color:var(--color-success-primary)}.alert.success .content .description[data-v-e623b23f]{color:var(--color-success-secondary)}.alert.info[data-v-e623b23f]{background-color:var(--color-info-accent)}.alert.info .icon .mini-icon[data-v-e623b23f]{color:var(--color-info-tertiary)}.alert.info .content .title[data-v-e623b23f]{color:var(--color-info-primary)}.alert.info .content .description[data-v-e623b23f]{color:var(--color-info-secondary)}.alert .icon[data-v-e623b23f]{margin-right:.75rem}.alert .content[data-v-e623b23f]{display:flex;flex-direction:column;font-size:.875rem;line-height:1.25rem;justify-content:center;gap:.25rem}.alert .content .title[data-v-e623b23f]{font-weight:500}.configurator-step.simple[data-v-c1ad972f]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;overflow:hidden}@media(min-width:640px){.configurator-step.simple[data-v-c1ad972f]{border-radius:1rem}}.configurator-step.simple .content[data-v-c1ad972f]{padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0}@media(min-width:640px){.configurator-step.simple .content[data-v-c1ad972f]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header[data-v-c1ad972f]{display:flex;flex-wrap:wrap;width:100%;row-gap:1rem;align-items:flex-start;padding:1rem;background-color:inherit;border:none}@media(min-width:640px){.configurator-step.simple .header[data-v-c1ad972f]{align-items:center;padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.configurator-step.simple .header .title[data-v-c1ad972f]{text-align:left;font-weight:500;color:var(--color-body-text)}@media(min-width:640px){.configurator-step.simple .header .title[data-v-c1ad972f]{white-space:nowrap}}.configurator-step.simple .inner[data-v-c1ad972f]{display:flex;flex-direction:column;row-gap:1rem}@media(min-width:640px){.configurator-step.simple .inner[data-v-c1ad972f]{flex-direction:row;align-items:center}}.configurator-step.simple .measurements-form[data-v-c1ad972f]{gap:1rem;display:flex;flex-direction:column}.configurator-step.simple .measurements-form .submit-button[data-v-c1ad972f]{width:100%}.configurator-step.simple .measurement-inputs[data-v-c1ad972f]{display:flex;gap:.625rem;align-items:center}.configurator-step.simple .measurement-inputs.has-errors[data-v-c1ad972f]{align-items:flex-start!important}.configurator-step.simple .measurement-inputs.has-errors .separator[data-v-c1ad972f]{margin-top:.5rem}.configurator-step.simple .total[data-v-c1ad972f]{margin-left:auto;flex-grow:1;color:var(--color-gray-500);text-align:right}.dark :is(.configurator-step.simple .total)[data-v-c1ad972f]{color:var(--color-neutral-200)}.configurator-step.simple .status-text[data-v-c1ad972f]{color:var(--color-gray-400);width:100%;text-align:right}@media(min-width:640px){.configurator-step.simple .status-text[data-v-c1ad972f]{text-align:left}}.dark :is(.configurator-step.simple .status-text)[data-v-c1ad972f]{color:var(--color-neutral-200)}.configurator-step.simple [data-v-c1ad972f] .input::-webkit-outer-spin-button,.configurator-step.simple [data-v-c1ad972f] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple [data-v-c1ad972f] .input[type=number]{-moz-appearance:textfield}.measurement-inputs[data-v-c1ad972f] .measurement-input{max-width:7rem;width:100%}.labels[data-v-1a9d11c5]{position:absolute;top:.75rem;right:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end;z-index:10}.dark .labels[data-v-1a9d11c5]{mix-blend-mode:exclusion}[data-v-1a9d11c5] .image{object-fit:cover;height:100%;width:100%}.amount[data-v-1a9d11c5]{display:flex;flex-direction:column;align-items:center;gap:.5rem;margin-top:2.75rem}.amount span[data-v-1a9d11c5]{font-size:.875rem;line-height:1.25rem}.information[data-v-fa946bbf],.custom-value[data-v-fa946bbf]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;line-height:1rem}.custom-value[data-v-fa946bbf]{gap:1rem}.custom-value[data-v-fa946bbf] .input-container,.custom-value[data-v-fa946bbf] .button{max-width:7.25rem;width:100%}.information .delivery[data-v-fa946bbf]{color:var(--color-green-700);display:flex;gap:.25rem;align-items:center}.dark .information .delivery[data-v-fa946bbf],.dark .information .delivery .icon[data-v-fa946bbf]{color:var(--color-green-400)}.information .delivery .icon[data-v-fa946bbf]{height:1rem;width:1rem;color:var(--color-green-700)}.information .delivery .icon[data-v-fa946bbf] svg{stroke-width:2}.information .delivery .delivery-time[data-v-fa946bbf]{font-weight:500}.information .price[data-v-fa946bbf]{color:var(--color-red-600);margin-left:auto}.dark .information .price[data-v-fa946bbf]{color:var(--color-red-300)}.price .price-per[data-v-fa946bbf]{color:var(--color-gray-500)}.dark .price .price-per[data-v-fa946bbf]{color:var(--color-body-text)}.not-available[data-v-fa946bbf]{color:var(--color-error-secondary);display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem}.dark .not-available[data-v-fa946bbf]{color:var(--color-error-tertiary)}.option-card[data-v-56b71e2f]{outline:1px solid var(--color-gray-300);border-radius:.5rem;width:17.5rem;cursor:pointer;background-color:var(--color-child-alt);min-height:16.5rem;display:flex;justify-content:center;overflow:hidden}.option-card[data-v-56b71e2f]:hover,.option-card[data-v-56b71e2f]:focus{box-shadow:var(--shadow)}.option-card[data-v-56b71e2f]:focus:not(.selected):not(.disabled){outline:3px dotted var(--color-blue-500)}.option-card.selected[data-v-56b71e2f]{outline:3px solid var(--color-blue-600)!important}.option-card.disabled[data-v-56b71e2f]{border-color:var(--color-gray-300);background-color:var(--color-disabled);cursor:default}.option-card.disabled[data-v-56b71e2f]:hover{box-shadow:none}.option-card.disabled .content[data-v-56b71e2f] *{color:var(--color-disabled-text)!important}.option-card.disabled .header[data-v-56b71e2f],.option-card.disabled .content[data-v-56b71e2f]{filter:grayscale(100%)}.option-card .inner[data-v-56b71e2f]{width:100%}.no-option[data-v-56b71e2f]{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center}.no-option[data-v-56b71e2f] .icon{color:var(--color-gray-400);height:3.5rem;width:3.5rem;margin-bottom:1rem}.no-option h3[data-v-56b71e2f]{font-size:.875rem;line-height:1.25rem}.header[data-v-56b71e2f]{height:10.25rem;width:100%;background-color:var(--color-gray-100);position:relative;border-radius:.5rem .5rem 0 0;display:flex;justify-content:center}.option-card .content[data-v-56b71e2f]{padding:1rem 1rem .75rem}.content .title[data-v-56b71e2f]{font-weight:500;padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem}.content .description[data-v-56b71e2f]{font-size:.75rem;line-height:1rem;color:var(--color-gray-500)}.option-card .footer[data-v-56b71e2f]{padding:1rem;padding-top:0;font-size:.875rem;line-height:1.25rem}.dark .option-card[data-v-56b71e2f]{outline-color:transparent}.dark .option-card[data-v-56b71e2f]:hover{background-color:var(--color-secondary)}.dark .header[data-v-56b71e2f]{background-color:var(--color-child-alt)}.dark .content .title[data-v-56b71e2f]{color:var(--color-gray-200)}.dark .content .description[data-v-56b71e2f]{color:var(--color-gray-300)}.overlay[data-v-66d42f70]{position:absolute;z-index:10;width:100%;height:100%;inset:0;pointer-events:auto}.overlay.fixed[data-v-66d42f70]{position:fixed!important;z-index:1000}.option-step-container[data-v-d799026d]{position:relative}.configurator-step.options[data-v-d799026d] .content{padding-right:0}@media(min-width:640px){.configurator-step.options[data-v-d799026d] .content{padding-right:1.5rem}}.configurator-step.options[data-v-d799026d] .header .state-indicator{display:none}@media(min-width:640px){.configurator-step.options[data-v-d799026d] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-d799026d]{display:flex;gap:1rem;overflow-x:scroll;padding:.25rem}@media(min-width:640px){.configurator-step.options .option-container[data-v-d799026d]{overflow:visible;padding-left:0;padding-right:0}}.option-container .option[data-v-d799026d]{position:relative;display:flex;min-width:auto}@media(min-width:640px){.option-container.show-all[data-v-d799026d]{flex-wrap:wrap}.option-container .option[data-v-d799026d]{min-width:0}.option-container .option[data-v-d799026d]:last-child{margin-right:0}}.option-container .option[data-v-d799026d]:last-child{margin-right:1rem}.option.hide[data-v-d799026d]{display:flex}@media(min-width:640px){.option.hide[data-v-d799026d]{display:none}}.option .option-card[data-v-d799026d]{flex-shrink:0}@media(min-width:640px){.option .option-card[data-v-d799026d]{flex-shrink:1}}.option-container .overlay[data-v-d799026d]{position:absolute;right:0;bottom:0;width:100%;height:100%;border-radius:.5rem;display:none;align-items:center;justify-content:center;color:#fff;font-size:2.25rem;cursor:pointer}@media(min-width:640px){.option-container .overlay[data-v-d799026d]{display:flex}}.configurator-step.options .subtitle[data-v-d799026d]{color:var(--color-gry-700)}.dark .configurator-step.options .subtitle[data-v-d799026d]{color:var(--color-neutral-200)}.configurator-step.options .alert[data-v-d799026d]{margin-top:1rem;margin-right:1rem}@media(min-width:640px){.configurator-step.options .alert[data-v-d799026d]{margin-right:0}}.edit-button[data-v-d799026d]{position:absolute;top:1.25rem;right:3.125rem}.delivery-options[data-v-12d62f2c]{width:100%;background-color:var(--color-child);box-shadow:0 1px 3px #0000001a;padding:1rem;margin-top:.125rem}@media(min-width:640px){.delivery-options[data-v-12d62f2c]{border-radius:1rem;margin-top:.5rem}}@media(min-width:768px){.delivery-options[data-v-12d62f2c]{padding:1.5rem}}.header[data-v-12d62f2c]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-12d62f2c]{font-weight:500;color:var(--color-body-text)}.header .hint[data-v-12d62f2c]{color:#6b7280;display:none}@media(min-width:768px){.header .hint[data-v-12d62f2c]{display:flex}}.dark :is(.header .hint)[data-v-12d62f2c]{color:#e5e7eb}.content[data-v-12d62f2c]{display:flex;flex-direction:column;gap:1rem;flex-wrap:wrap}@media(min-width:768px){.content[data-v-12d62f2c]{flex-direction:row;gap:1.5rem}}.content .option[data-v-12d62f2c]{display:flex;flex-direction:column;position:relative}.content .option[data-v-12d62f2c]:not(.last){border-bottom:1px solid var(--color-gray-200);padding-bottom:1rem}@media(min-width:768px){.content .option[data-v-12d62f2c]:not(.last){border-bottom:none;padding-bottom:0}}@media(min-width:768px){.content .option[data-v-12d62f2c]:not(:first-child){border-left:1px solid var(--color-gray-200);padding-left:1.0625rem}}.content .option.hide[data-v-12d62f2c]{display:none}.content .option .day[data-v-12d62f2c],.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{font-size:.875rem;line-height:1.25rem}.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:absolute;top:0;right:0}@media(min-width:768px){.content .option .cost[data-v-12d62f2c],.content .option .no-cost[data-v-12d62f2c]{position:relative}}.content .option .day[data-v-12d62f2c]{margin-bottom:.25rem;color:var(--color-gray-700);text-transform:capitalize;display:flex;flex-wrap:wrap;gap:.25rem .5rem;align-items:center}.dark :is(.content .option .day)[data-v-12d62f2c]{color:#e5e7eb}.content .option .date[data-v-12d62f2c]{font-weight:500;font-size:1.25rem;line-height:1.75rem;color:var(--color-body-text)}@media(min-width:768px){.content .option .date[data-v-12d62f2c]{margin-bottom:.75rem}}.content .option .cost[data-v-12d62f2c]{color:var(--color-green-700)}.dark :is(.content .option .cost)[data-v-12d62f2c]{color:var(--color-green-500)}.content .option .no-cost[data-v-12d62f2c]{color:var(--color-gray-500)}.dark :is(.content .option .no-cost)[data-v-12d62f2c]{color:var(--color-gray-50)}.content .button[data-v-12d62f2c]{display:block}@media(min-width:768px){.content .button[data-v-12d62f2c]{display:none}}.dark .button.tertiary[data-v-12d62f2c]{background-color:var(--color-parent-bg)}.drawer[data-v-059f3a0f]{background-color:var(--color-parent-bg);position:fixed;inset:0 auto 0 0;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;transition:transform .3s cubic-bezier(.4,0,.2,1);overflow:hidden;color:var(--color-body-text);max-width:80%;width:auto;height:100vh;min-height:100vh;max-height:100vh}.drawer[data-v-059f3a0f]::backdrop{background-color:rgba(15,23,42,var(--drawer-backdrop-opacity, .5));transition:background-color .3s ease}.drawer.no-overlay[data-v-059f3a0f]{z-index:99}.drawer.no-overlay[data-v-059f3a0f]::backdrop{background-color:transparent}.drawer.full-width[data-v-059f3a0f]{width:100%;max-width:100%}.drawer.left[data-v-059f3a0f]{left:0;right:auto;transform:translate(-100%)}.drawer.left.open[data-v-059f3a0f]{transform:translate(0)}.drawer.right[data-v-059f3a0f]{left:auto;right:0;transform:translate(100%)}.drawer.right.open[data-v-059f3a0f]{transform:translate(0)}.drawer.bottom[data-v-059f3a0f]{inset:auto 0 0;width:100%;max-width:100%;min-height:auto;height:auto;max-height:min(90vh,100dvh);display:flex;flex-direction:column;border-top-left-radius:.75rem;border-top-right-radius:.75rem;transform:translateY(100%)}.drawer.bottom.open[data-v-059f3a0f]{transform:translateY(0)}.drawer.bottom .wrapper[data-v-059f3a0f]{height:auto;max-height:inherit}.drawer.bottom .header[data-v-059f3a0f],.drawer.bottom .content[data-v-059f3a0f]{padding:1rem}.drawer.bottom .content[data-v-059f3a0f]{padding-top:0;max-height:inherit;overflow-y:auto}.drawer .wrapper[data-v-059f3a0f]{position:relative;height:100%;overflow:hidden;display:flex;flex-direction:column}.drawer .header[data-v-059f3a0f]{display:flex;justify-content:space-between;align-items:center;gap:1.5rem;padding:1.25rem}.drawer .header .title[data-v-059f3a0f]{font-size:1.25rem;line-height:1.75rem}.drawer .header .close[data-v-059f3a0f]{transform:translate(.625rem)}.drawer .content[data-v-059f3a0f]{padding-left:1.25rem;padding-right:1.25rem;flex-grow:1;overflow-y:auto}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbd1bdc0],[data-v-fbd1bdc0]:before,[data-v-fbd1bdc0]:after,[data-v-fbd1bdc0]::backdrop{--tw-font-weight:initial}}}.form-row[data-v-fbd1bdc0]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex}@media(min-width:48rem){.form-row[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*21);padding-block:calc(var(--spacing,.25rem)*10);flex-direction:row}}.form-row[data-v-fbd1bdc0]:first-child{padding-top:calc(var(--spacing,.25rem)*6)}.form-row .label[data-v-fbd1bdc0]{width:100%}@media(min-width:48rem){.form-row .label[data-v-fbd1bdc0]{width:calc(var(--spacing,.25rem)*75);min-width:calc(var(--spacing,.25rem)*75)}}.form-row .label .title[data-v-fbd1bdc0]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600)}.form-row .label .subtitle[data-v-fbd1bdc0]{margin-top:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.form-row .label .subtitle[data-v-fbd1bdc0]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.form-row .fields[data-v-fbd1bdc0]{gap:calc(var(--spacing,.25rem)*5);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cf479711],[data-v-cf479711]:before,[data-v-cf479711]:after,[data-v-cf479711]::backdrop{--tw-divide-y-reverse:0;--tw-border-style:solid}}}.form-grid[data-v-cf479711]{width:100%}:where(.form-grid[data-v-cf479711]>:not(:last-child)){--tw-divide-y-reverse:0!important;border-bottom-style:var(--tw-border-style)!important;border-top-style:var(--tw-border-style)!important;border-top-width:calc(1px*var(--tw-divide-y-reverse))!important;border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))!important;border-color:var(--color-border-primary,#d1d5db)!important}.form-grid .actions[data-v-cf479711]{padding-block:calc(var(--spacing,.25rem)*6)}.form-grid .actions[data-v-cf479711] .fields{gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}.sub-heading[data-v-143c5965]{padding:1rem 0}.actions[data-v-143c5965]{width:100%;display:flex;justify-content:flex-end;gap:1rem;padding:1rem 0}.configurator[data-v-4ef00907] .configurator-step .header{overflow:hidden}.configurator[data-v-4ef00907] .configurator-step .header .title{width:100%;margin-right:.5rem;text-overflow:ellipsis;overflow:hidden;display:flex;align-items:center;gap:.5rem}.configurator[data-v-4ef00907] .configurator-step .header .title .mini-icon{color:var(--color-neutral-400)}@media(min-width:640px){.configurator[data-v-4ef00907] .configurator-step .header .title{max-width:16rem;width:16rem;white-space:nowrap}}.configurator[data-v-4ef00907] .configurator-step .status{margin-right:1rem}.configurator-step[data-v-4ef00907] .subtitle{margin-left:auto;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:right}.configurator-step[data-v-4ef00907] .edit-button{margin-left:auto}@media(min-width:640px){.configurator-step[data-v-4ef00907] .subtitle{margin-left:0}}.loader[data-v-4ef00907]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-e55e085f] .icon{color:var(--color-blue-500,oklch(62.3% .214 259.815))}@keyframes minimizedAnimation-62575656{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-62575656{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-62575656{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.dark .modal[data-v-62575656]{color:var(--color-body-text)}.modal[data-v-62575656]{width:100%;max-width:48rem;border-radius:1.5rem;overflow:hidden;transform:translateY(2.5rem);transition:all .5s ease-in-out;opacity:0;box-shadow:0 0 0 100vmax #0a0a0a80;background-color:var(--color-parent-bg);margin:auto}@media(prefers-reduced-motion){.modal[data-v-62575656]{transition:none}}.modal[data-v-62575656]::backdrop{background-color:transparent}.modal.open[data-v-62575656]{transform:translateY(0);opacity:1;display:block}.modal.minimized[data-v-62575656]{width:100%;margin-bottom:1.25rem;border:1px solid #e5e7eb;animation:minimizedAnimation-62575656 1.3s forwards}@media(prefers-reduced-motion){.modal.minimized[data-v-62575656]{animation:none}}.modal.minimized .inner[data-v-62575656]{overflow-y:hidden}.modal.minimized .inner .header[data-v-62575656]{padding:1rem;overflow-y:hidden}.modal.minimized .inner .header .title[data-v-62575656-s]{margin-top:1rem;font-size:1rem;line-height:1.5rem}.modal.maximized[data-v-62575656]{animation:maximizedAnimation-62575656 1.3s forwards}@media(prefers-reduced-motion){.modal.maximized[data-v-62575656]{animation:none}}.modal.fullscreen .inner[data-v-62575656]{height:100%;min-height:0;overflow-y:auto}.modal.fullscreen .inner .header[data-v-62575656]{padding:2rem 1rem;border-top-left-radius:1rem;border-top-right-radius:1rem;justify-content:flex-start}.modal.fullscreen .inner .content[data-v-62575656]{padding:0 0 .5rem}.modal.fullscreen .inner .footer[data-v-62575656]{margin-top:auto;box-shadow:0 10px 15px #0000001a}@media screen and (min-width:640px){.modal.fullscreen .inner .footer[data-v-62575656]{margin-inline:5.75rem;border-radius:1rem;margin-bottom:1.25rem}}.modal.fullscreen:not(.minimized)[data-v-62575656]{height:calc(100vh - 3.5rem);margin-top:3.5rem;max-width:100%;overflow:visible;border-bottom-left-radius:0;border-bottom-right-radius:0}@media screen and (min-width:640px){.modal.fullscreen:not(.minimized) .header[data-v-62575656],.modal.fullscreen:not(.minimized) .content[data-v-62575656]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen:not(.minimized)[data-v-62575656]:modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-62575656]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-62575656]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-62575656]{width:100%;background-color:#f9fafb}.modal:not(.fullscreen) .footer.footer-shadow[data-v-62575656]{filter:drop-shadow(0 -1px 2px rgba(0,0,0,.1)) drop-shadow(0 -1px 1px rgba(0,0,0,.06))}.dark :is(.modal:not(.fullscreen) .footer)[data-v-62575656]{background-color:var(--color-child)}.modal.persistent-animation[data-v-62575656]{animation:horizontal-shaking-62575656 .3s ease-in-out}.modal .actions[data-v-62575656]{position:absolute;top:-3.5rem;width:100%;height:3.5rem;display:flex;justify-content:flex-end;align-items:center;padding:0 .5625rem}.modal .actions .minimize[data-v-62575656],.modal .actions .close[data-v-62575656]{font-size:.875rem;line-height:1.25rem;padding:0 .9375rem;color:#fff}.modal .inner[data-v-62575656]{display:flex;flex-direction:column;min-height:fit-content}.modal .inner .header[data-v-62575656]{display:flex;align-items:center;background-color:var(--color-parent-bg)}.modal .inner .header.header-shadow[data-v-62575656]{filter:drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))}.modal .inner .header>.close[data-v-62575656]{margin-left:auto}.modal .inner .header>.close[data-v-62575656]:focus-visible{background-color:var(--color-secondary-hover)}.modal .inner .header .minimized-actions[data-v-62575656]{display:flex;flex-direction:column;gap:.5rem;margin-left:auto}.modal .inner .title[data-v-62575656],.modal .inner .title[data-v-62575656-s]{font-weight:700;font-size:1.25rem}.modal .inner .content[data-v-62575656]{padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem;overflow-y:auto}.modal .inner .content .loader[data-v-62575656]{margin:0 auto;width:2.5rem;height:2.5rem}.modal .inner .footer[data-v-62575656]{display:flex;gap:.5rem;justify-content:center;padding:1.5rem 1rem;z-index:10;background-color:var(--color-child)}.dark :is(.modal .inner .footer)[data-v-62575656]{background-color:var(--color-child)}[data-v-ebaf50db] .header{display:flex;flex-wrap:wrap;gap:0}@media(min-width:640px){[data-v-ebaf50db] .header{gap:1.5rem}}.header .product-image[data-v-ebaf50db]{height:auto;width:4.75rem!important}@media(min-width:640px){.header .product-image[data-v-ebaf50db]{width:8.5rem!important}}.header .product-image .image[data-v-ebaf50db]{height:4.75rem;width:4.75rem}@media(min-width:640px){.header .product-image .image[data-v-ebaf50db]{width:8.5rem!important}}.header .title[data-v-ebaf50db]{margin-bottom:.5rem}.header .subtitle[data-v-ebaf50db]{display:flex;gap:.625rem;color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem;margin-bottom:1rem}.dark :is(.header .subtitle)[data-v-ebaf50db]{color:var(--color-gray-300)}.header .subtitle .icon[data-v-ebaf50db]{color:var(--color-green-500)}.header .reference[data-v-ebaf50db]{color:var(--color-gray-500);font-size:.875rem;line-height:1.25rem}.header .reference .value[data-v-ebaf50db]{color:var(--color-gray-900)}.header .inner[data-v-ebaf50db]{flex-shrink:1;max-width:calc(100% - 4.75rem)}@media(min-width:640px){.header .inner[data-v-ebaf50db]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-ebaf50db]{display:none;max-width:30rem}@media(min-width:640px){.header .inner .reference-input[data-v-ebaf50db]{display:flex}}.header>.reference-input[data-v-ebaf50db]{display:block;width:100%}@media(min-width:640px){.header>.reference-input[data-v-ebaf50db]{display:none}}.footer-wrapper[data-v-ebaf50db]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:.5rem;flex-wrap:wrap}.footer-wrapper .specifications[data-v-ebaf50db]{display:none}@media(min-width:640px){.footer-wrapper .specifications[data-v-ebaf50db]{display:flex;width:100%}}@media(min-width:1024px){.footer-wrapper .specifications[data-v-ebaf50db]{width:auto}}.footer-wrapper .right[data-v-ebaf50db]{display:flex;gap:1.25rem;align-items:center;justify-content:space-between;width:100%;margin-left:auto}@media(min-width:1024px){.footer-wrapper .right[data-v-ebaf50db]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-ebaf50db]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-ebaf50db]{display:none}@media(min-width:768px){.footer-wrapper .right .add-to-cart .desktop[data-v-ebaf50db]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-ebaf50db]{display:flex}@media(min-width:768px){.footer-wrapper .right .add-to-cart .mobile[data-v-ebaf50db]{display:none}}.footer-wrapper .right .sub-total[data-v-ebaf50db]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-ebaf50db]{color:var(--color-gray-500);font-size:.75rem;line-height:1.2rem!important;max-width:250px;width:100%;display:flex;gap:.5rem;flex-wrap:wrap}@media(min-width:640px){.footer-wrapper .right .sub-total .sub-price[data-v-ebaf50db]{font-size:.875rem;line-height:1.25rem}}.dark :is(.footer-wrapper .right .sub-total .sub-price)[data-v-ebaf50db]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-ebaf50db],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-ebaf50db]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-ebaf50db]{color:var(--color-gray-700);font-size:.75rem;line-height:1rem}.dark :is(.footer-wrapper .right .sub-total .excluded-from-price)[data-v-ebaf50db]{color:var(--color-body-text)}.footer-wrapper .right .sub-total .price[data-v-ebaf50db]{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:var(--color-red-500);display:flex;width:100%}@media(min-width:1024px){.footer-wrapper .right .sub-total .price[data-v-ebaf50db]{justify-content:flex-end}}.dark :is(.footer-wrapper .right .sub-total .price)[data-v-ebaf50db]{color:var(--color-red-400)}.footer-wrapper .right .sub-total .price .label[data-v-ebaf50db]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-ebaf50db]{top:-.3em;font-size:1.3rem;position:relative}.footer-wrapper .right .sub-total .price.small[data-v-ebaf50db]{font-size:1.2rem;line-height:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-ebaf50db]{font-size:1.2rem;top:0}@media(min-width:640px){.footer-wrapper .right .sub-total .price.small[data-v-ebaf50db]{font-size:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-ebaf50db]{font-size:1.5rem;top:-.1}}.confirm-modal[data-v-6b257f82]{max-width:var(--container-lg,32rem)}.confirm-modal .indicator-icon[data-v-6b257f82]{width:fit-content;padding:calc(var(--spacing,.25rem)*3);border-radius:3.40282e38px;margin-inline:auto}.confirm-modal .indicator-icon.danger[data-v-6b257f82]{background-color:var(--color-error-accent,#fef2f2);color:var(--color-error-secondary,#d52d2f)}.confirm-modal .indicator-icon.info[data-v-6b257f82]{background-color:var(--color-info-accent,#eff6ff);color:var(--color-info-tertiary,#3b82f6)}.confirm-modal .indicator-icon .icon[data-v-6b257f82]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.confirm-modal .title[data-v-6b257f82]{margin-top:calc(var(--spacing,.25rem)*4);text-align:center;margin-bottom:calc(var(--spacing,.25rem)*3)!important}.confirm-modal .message[data-v-6b257f82]{text-align:center}.confirm-modal[data-v-6b257f82] .content{padding-inline:calc(var(--spacing,.25rem)*8)!important}.virtual-scroll-container[data-v-54b2f023]{width:100%;height:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-54b2f023]{flex-direction:column;display:flex}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-39166481],[data-v-39166481]:before,[data-v-39166481]:after,[data-v-39166481]::backdrop{--tw-outline-style:solid;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}.filter-bar-container[data-v-39166481]{width:fit-content;position:relative}.filter-bar-container .filter-bar[data-v-39166481]:hover:has(.button:hover){background-color:var(--color-secondary,#fff)}.filter-bar-container .filter-bar .label-container[data-v-39166481]{margin-right:calc(var(--spacing,.25rem)*8);margin-left:.5625rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]{white-space:nowrap;outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-white,#fff);overflow:hidden}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-2)}.filter-bar-container .filter-bar .label-container.concat .label[data-v-39166481]:not(:last-child){max-width:calc(var(--spacing,.25rem)*10)}.filter-bar-container .filter-bar .label-container .label[data-v-39166481]{border-radius:var(--radius-lg,.5rem)}.filter-bar-container .clear[data-v-39166481]{top:50%;right:calc(var(--spacing,.25rem)*2);--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);position:absolute}.filter-actions[data-v-62178ff0]{margin-top:calc(var(--spacing,.25rem)*4)}.filter-actions .button[data-v-62178ff0]{width:100%}.filter-actions .select-all[data-v-62178ff0]{margin-bottom:calc(var(--spacing,.25rem)*2)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-715af0c7],[data-v-715af0c7]:before,[data-v-715af0c7]:after,[data-v-715af0c7]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.filter-dropdown[data-v-715af0c7]{margin-top:calc(var(--spacing,.25rem)*2);border-radius:var(--radius-xl,.75rem);background-color:var(--color-child,#fff);min-width:16.5rem;max-height:33.625rem;padding:calc(var(--spacing,.25rem)*4);--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter-dropdown[data-v-715af0c7] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup[data-v-715af0c7] .menu{background-color:inherit!important}.filter-popup[data-v-715af0c7] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.inputs[data-v-f24e9eba]{margin-block:calc(var(--spacing,.25rem)*4)}.inputs .input-from[data-v-f24e9eba],.inputs .to[data-v-f24e9eba]{margin-bottom:calc(var(--spacing,.25rem)*2)}.inputs .to[data-v-f24e9eba]{text-align:center;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);display:block}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e5e273e7],[data-v-e5e273e7]:before,[data-v-e5e273e7]:after,[data-v-e5e273e7]::backdrop{--tw-font-weight:initial}}}.search[data-v-e5e273e7]{margin-bottom:calc(var(--spacing,.25rem)*4)}.list[data-v-e5e273e7]{max-height:21.625rem;padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));overflow:visible auto}.list .badge[data-v-e5e273e7]{margin-top:calc(var(--spacing,.25rem)*1.5)}.loader-wrapper[data-v-e5e273e7]{margin-top:calc(var(--spacing,.25rem)*-1);justify-content:center;align-items:center;width:100%;display:flex}.loader-wrapper.loading[data-v-e5e273e7]{margin-block:calc(var(--spacing,.25rem)*1)}.menu.vertical[data-v-e5e273e7]{margin-bottom:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*1)}.group-checkbox[data-v-e5e273e7] .label{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-4e34bd39],[data-v-4e34bd39]:before,[data-v-4e34bd39]:after,[data-v-4e34bd39]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.filter-group[data-v-4e34bd39]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);flex-wrap:wrap;display:flex}.filter-group .title[data-v-4e34bd39]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:calc(var(--spacing,.25rem)*10);line-height:calc(var(--spacing,.25rem)*10);text-wrap:nowrap;color:var(--color-neutral-500,oklch(55.6% 0 0));display:none}@media(min-width:48rem){.filter-group .title[data-v-4e34bd39]{display:block}}.filter-group .title[data-v-4e34bd39]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.filter-group .base-filter[data-v-4e34bd39]{text-wrap:nowrap}.filter-group .button[data-v-4e34bd39]{margin-top:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);text-wrap:nowrap;color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cc6e6a99],[data-v-cc6e6a99]:before,[data-v-cc6e6a99]:after,[data-v-cc6e6a99]::backdrop{--tw-border-style:solid}}}tfoot[data-v-cc6e6a99]{border-top-style:var(--tw-border-style);--tw-border-style:solid;border-style:solid;border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5)}tfoot[data-v-cc6e6a99] tr{max-height:initial;min-height:initial}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-d8e20525],[data-v-d8e20525]:before,[data-v-d8e20525]:after,[data-v-d8e20525]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial;--tw-border-style:solid}}}.table-head[data-v-d8e20525]{display:table-header-group}.table-head .select-column[data-v-d8e20525],.table-head .action-column[data-v-d8e20525]{z-index:2}.table-head .header[data-v-d8e20525]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}@media(hover:hover){.table-head .header[data-v-d8e20525]:hover{cursor:pointer}}.table-head .header.active[data-v-d8e20525]{color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-head .header.active[data-v-d8e20525]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .header .sort-icon[data-v-d8e20525]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4);cursor:pointer;stroke-width:.125rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-d8e20525],.table-head .header .sort-icon.right[data-v-d8e20525]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);top:50%}.table-head .header .sort-icon.left[data-v-d8e20525]{right:calc(var(--spacing,.25rem)*-6)}.table-head .header .sort-icon.right[data-v-d8e20525]{left:calc(var(--spacing,.25rem)*-6)}.table-head .header:hover .sort-icon[data-v-d8e20525],.table-head .header .sort-icon.active[data-v-d8e20525]{display:block}.table-head[data-v-d8e20525] .column-configurator{margin-left:auto}.table-head .filters[data-v-d8e20525]{height:calc(var(--spacing,.25rem)*16);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters[data-v-d8e20525]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters .action-column[data-v-d8e20525]{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-head .filters .action-column[data-v-d8e20525]:where(.dark,.dark *){background-color:var(--color-parent-bg,#fff)}.table-head .filters td[data-v-d8e20525]>div{min-width:calc(var(--spacing,.25rem)*24);max-width:calc(var(--spacing,.25rem)*72)!important}.select-column[data-v-d8e20525],.action-column[data-v-d8e20525]{z-index:1;width:calc(var(--spacing,.25rem)*12);background-color:var(--color-body,#fff);position:relative}.select-column.overlap[data-v-d8e20525]:after,.action-column.overlap[data-v-d8e20525]:before{top:calc(var(--spacing,.25rem)*0);height:100%;width:calc(var(--spacing,.25rem)*2.5);--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content);position:absolute}.select-column.overlap[data-v-d8e20525]:after{right:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.action-column.overlap[data-v-d8e20525]:before{left:calc(var(--spacing,.25rem)*-2.5);--tw-gradient-position:to left in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.prepend-row-column[data-v-d8e20525]{white-space:nowrap;width:1%}tbody tr.clickable[data-v-d8e20525]{cursor:pointer}tbody tr.clickable[data-v-d8e20525]:hover{background-image:linear-gradient(270deg,#fff 5%,#fafafa 20% 80%,#fff 95%)}tbody tr.clickable[data-v-d8e20525]:hover:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#32394c 20% 80%,#0f172a 95%)}tbody tr.selected[data-v-d8e20525]{background-image:linear-gradient(270deg,#fff 5%,#f0f6ff 20% 80%,#fff 95%)}tbody tr.selected[data-v-d8e20525]:where(.dark,.dark *){background-image:linear-gradient(270deg,#0f172a 5%,#262c3e 20% 80%,#0f172a 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-d8e20525],tbody tr.selectable td[data-v-d8e20525]:nth-child(2):not(.prepend-row-column),tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-d8e20525],tbody tr:not(.selectable) td[data-v-d8e20525]:first-child:not(.prepend-row-column){--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}tbody tr[data-v-d8e20525]:not(.loading):nth-last-child(2){border-bottom-style:var(--tw-border-style);border-bottom-width:0}tbody tr .cell-content[data-v-d8e20525]{height:var(--v15b2dcc4);min-height:var(--v15b2dcc4);max-height:var(--v15b2dcc4);align-items:center;display:flex}.table-footer[data-v-d8e20525]{bottom:calc(var(--spacing,.25rem)*0);z-index:10;justify-content:space-between;gap:calc(var(--spacing,.25rem)*4);border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-table-row-border-color,#e5e5e5);background-color:var(--color-body,#fff);padding:calc(var(--spacing,.25rem)*4);flex-wrap:wrap;display:flex;position:sticky}.table-footer .table-footer-pagination[data-v-d8e20525]{align-items:center;gap:calc(var(--spacing,.25rem)*4);width:100%;display:flex}.table-footer .total-results[data-v-d8e20525]{margin-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-950,oklch(14.5% 0 0))}.table-footer .total-results[data-v-d8e20525]:where(.dark,.dark *){color:var(--color-neutral-50,oklch(98.5% 0 0))}.table-footer .total-results span[data-v-d8e20525]{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-bb3db39e],[data-v-bb3db39e]:before,[data-v-bb3db39e]:after,[data-v-bb3db39e]::backdrop{--tw-leading:initial;--tw-font-weight:initial}}}.avatar[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);background-color:var(--color-tertiary,#eff6ff);border-radius:3.40282e38px;justify-content:center;align-items:center;display:inline-flex}.avatar[data-v-bb3db39e]:where(.dark,.dark *){background-color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-leading:1;--tw-font-weight:var(--font-weight-medium,500);line-height:1;font-weight:var(--font-weight-medium,500);color:var(--color-primary,#2563eb)}.avatar .initials[data-v-bb3db39e]:where(.dark,.dark *){color:var(--color-white,#fff)}.avatar img[data-v-bb3db39e]{object-fit:cover;border-radius:3.40282e38px;width:100%;height:100%}.avatar.small[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6)}.avatar.small .initials[data-v-bb3db39e]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)))}.avatar.medium[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8)}.avatar.large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*12);width:calc(var(--spacing,.25rem)*12)}.avatar.large .initials[data-v-bb3db39e]{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.avatar.extra-large[data-v-bb3db39e]{height:calc(var(--spacing,.25rem)*14);width:calc(var(--spacing,.25rem)*14)}.avatar.extra-large .initials[data-v-bb3db39e]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.full-image[data-v-292098bc]{opacity:1}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-874a424c],[data-v-874a424c]:before,[data-v-874a424c]:after,[data-v-874a424c]::backdrop{--tw-outline-style:solid}}}.thumbnail-stack[data-v-874a424c]{flex-direction:row;align-items:center;display:flex}.thumbnail-stack[data-v-874a424c]:where(.dark,.dark *){opacity:.8}.thumbnail-stack .image-preview[data-v-874a424c]{outline-width:1px;outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--color-child,#fff);border-radius:.25rem}.thumbnail-stack .image-preview[data-v-874a424c]:not(:first-child){margin-left:calc(var(--spacing,.25rem)*-4)}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-874a424c]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-874a424c]{height:calc(var(--spacing,.25rem)*8);width:calc(var(--spacing,.25rem)*8);background-color:var(--color-disabled,#f3f4f6);justify-content:center;align-items:center;display:flex}.thumbnail-stack .image-preview.invalid .icon[data-v-874a424c]{color:var(--color-disabled-text,#606369)}.thumbnail-stack .image-preview[data-v-874a424c] .image-wrapper:where(.dark,.dark *){opacity:1}.address-lookup-result[data-v-2780fe99]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-neutral-100,oklch(97% 0 0));width:100%;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:calc(var(--spacing,.25rem)*3);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-700,oklch(37.1% 0 0));flex-direction:column;font-style:normal;display:flex}.error-summary[data-v-59fb525a]{padding-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-error-secondary,#d52d2f)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-leading:initial;--tw-font-weight:initial}}}.postcodenl-autocomplete-menu{margin-top:calc(var(--spacing,.25rem)*1);border-radius:var(--radius-xl,.75rem);background-color:var(--color-white,#fff);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);display:none;position:absolute}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{padding:calc(var(--spacing,.25rem)*1);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));overflow:hidden auto}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:var(--radius-lg,.5rem);padding:calc(var(--spacing,.25rem)*3);--tw-leading:calc(var(--spacing,.25rem)*5);line-height:calc(var(--spacing,.25rem)*5)}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{padding:calc(var(--spacing,.25rem)*0);--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);background-color:#0000}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.postcodenl-autocomplete-item-label{width:100%;max-width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));margin-right:.4rem;display:block}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{color:var(--color-neutral-500,oklch(55.6% 0 0));margin-right:.4rem}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:right .25em center;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{--tw-border-style:none;width:.0625rem;height:.0625rem;padding:calc(var(--spacing,.25rem)*0);clip:rect(0 0 0 0);border-style:none;margin:-.0625rem;display:none;position:absolute}@property --tw-leading{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e0466e54],[data-v-e0466e54]:before,[data-v-e0466e54]:after,[data-v-e0466e54]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-content:"";--tw-font-weight:initial}}}.country-icon[data-v-e0466e54]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5);margin-right:.3125rem}.activator[data-v-e0466e54]{cursor:pointer;align-items:center;gap:calc(var(--spacing,.25rem)*1);background-color:var(--color-input-bg,#fff);display:flex}.activator[data-v-e0466e54]:not(.simple){border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);padding-inline:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.625rem}.activator:not(.simple) .country-icon[data-v-e0466e54]{margin-right:calc(var(--spacing,.25rem)*2)}.activator .state-indicator[data-v-e0466e54]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));margin-left:auto}.activator .state-indicator.is-open[data-v-e0466e54]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));rotate:180deg}.activator.disabled[data-v-e0466e54]{pointer-events:none;cursor:not-allowed;background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#606369)}.activator.disabled[data-v-e0466e54]::placeholder{color:var(--color-disabled-text,#606369)}@media(hover:hover){.activator.disabled[data-v-e0466e54]:hover{border-color:var(--color-border-primary,#d1d5db)}}.activator.disabled[data-v-e0466e54]:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.activator.disabled[data-v-e0466e54]:focus{outline-offset:2px;outline:2px solid #0000}}.country-list[data-v-e0466e54]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-child,#fff);max-height:300px;padding-bottom:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);overflow-y:auto}.country-list .search-container[data-v-e0466e54]{top:calc(var(--spacing,.25rem)*0);z-index:1;background-color:var(--color-child-alt,#fff);padding-inline:calc(var(--spacing,.25rem)*2);padding-top:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);position:sticky}.country-list .search-container[data-v-e0466e54]:after{bottom:calc(var(--spacing,.25rem)*-2);left:calc(var(--spacing,.25rem)*0);height:calc(var(--spacing,.25rem)*2);--tw-gradient-position:to bottom;width:100%;position:absolute}@supports (background-image:linear-gradient(in lab,red,red)){.country-list .search-container[data-v-e0466e54]:after{--tw-gradient-position:to bottom in oklab}}.country-list .search-container[data-v-e0466e54]:after{background-image:linear-gradient(var(--tw-gradient-stops));--tw-gradient-from:#0000000d;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position));opacity:.95;--tw-content:"";content:var(--tw-content)}.country-list .search-container .search-input[data-v-e0466e54]{--tw-border-style:none;background-color:var(--color-child-alt,#fff);width:100%;padding:calc(var(--spacing,.25rem)*0);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-style:none}.country-list .search-container .search-input[data-v-e0466e54]::placeholder{color:var(--color-body-text,#111827)}.country-list .search-container .search-input[data-v-e0466e54]:focus{box-shadow:none}.country-list .countries[data-v-e0466e54]{padding-top:calc(var(--spacing,.25rem)*2)}.country-list .countries .country[data-v-e0466e54]{align-items:center;gap:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2);padding-block:calc(var(--spacing,.25rem)*.5);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));display:flex}.country-list .countries .country[data-v-e0466e54]:hover{cursor:pointer;background-color:var(--color-secondary-hover,#fafafa);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}.country-list .countries .country[data-v-e0466e54]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.country-list .countries .no-countries-found[data-v-e0466e54]{pointer-events:none;padding-top:calc(var(--spacing,.25rem)*1);text-align:center;--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700)}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}[data-v-58d080a4] .activator{width:100%;max-width:15.75rem}.address-input[data-v-58d080a4]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-input .country .country-label-row[data-v-58d080a4]{flex-direction:row;justify-content:space-between;display:flex}.address-input .country .country-label-row .address-toggle[data-v-58d080a4]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0));text-decoration-line:underline}.address-input .country .country-label-row .address-toggle[data-v-58d080a4]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))}.address-input .input-label[data-v-58d080a4]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-input .grouped-inputs[data-v-58d080a4]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);width:100%;max-width:24rem;display:flex}.address-input .grouped-inputs .error-summary[data-v-58d080a4]{width:100%}.address-input .input-container[data-v-58d080a4],.address-input .address-lookup-result[data-v-58d080a4]{width:100%;max-width:24rem}.address-form[data-v-e0304f7b]{flex-wrap:wrap;justify-content:space-between;display:flex}.address-form form[data-v-e0304f7b]{gap:calc(var(--spacing,.25rem)*4);flex-direction:column;width:100%;max-width:36rem;display:flex}.address-form form .input-label[data-v-e0304f7b]{margin-bottom:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));display:flex}.address-form form .grouped-inputs[data-v-e0304f7b]{justify-content:space-between;gap:calc(var(--spacing,.25rem)*3);display:flex}.address-form form .grouped-inputs .error-summary[data-v-e0304f7b]{width:100%}.address-form form .input-container[data-v-e0304f7b],.address-form form .grouped-inputs[data-v-e0304f7b]{width:100%;max-width:24rem}.checkbox-group[data-v-0088e5e7]{gap:calc(var(--spacing,.25rem)*2);flex-direction:column;display:flex}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ec57ffa3],[data-v-ec57ffa3]:before,[data-v-ec57ffa3]:after,[data-v-ec57ffa3]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.checkbox-button[data-v-ec57ffa3]{border-radius:var(--radius-xl,.75rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-input-border,#d1d5db);padding:calc(var(--spacing,.25rem)*1);flex-direction:column;display:flex}.checkbox-button .checkbox-container[data-v-ec57ffa3]{border-radius:var(--radius-lg,.5rem)}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.checkbox-button .checkbox-container[data-v-ec57ffa3]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.checkbox-button .checkbox-container[data-v-ec57ffa3] .label{border-radius:var(--radius-xl,.75rem);height:100%;padding:calc(var(--spacing,.25rem)*3);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);word-break:break-all;align-items:flex-start}.checkbox-button .checkbox-container .checkbox-button-label[data-v-ec57ffa3]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);display:flex}.checkbox-button .checkbox-container .micro-icon[data-v-ec57ffa3]{margin-top:calc(var(--spacing,.25rem)*.5);color:var(--color-neutral-400,oklch(70.8% 0 0))}.checkbox-button .checked-content[data-v-ec57ffa3]{padding-top:calc(var(--spacing,.25rem)*1)}.drop-zone[data-v-f6ddde4c]{--tw-border-style:dashed;border-style:dashed}.drop-zone.default[data-v-f6ddde4c]{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-neutral-50,oklch(98.5% 0 0))}.drop-zone.default[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.drop-zone.default[data-v-f6ddde4c]:hover{background-color:var(--color-neutral-100,oklch(97% 0 0))}.drop-zone.default[data-v-f6ddde4c]:hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.drop-zone.dragging[data-v-f6ddde4c]{border-color:var(--color-blue-300,oklch(80.9% .105 251.813));background-color:var(--color-blue-50,oklch(97% .014 254.604))}.drop-zone.dragging[data-v-f6ddde4c]:where(.dark,.dark *){background-color:var(--color-blue-900,oklch(37.9% .146 265.522))}.drop-zone .label[data-v-f6ddde4c]{z-index:2;cursor:pointer;height:100%}.drop-zone .label.dragging[data-v-f6ddde4c]{justify-content:center}.drop-zone .label .icon[data-v-f6ddde4c]{color:var(--color-primary,#2563eb)}.drop-zone .label .icon[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .label .loader[data-v-f6ddde4c]{margin-right:calc(var(--spacing,.25rem)*1)}.drop-zone .label .trigger[data-v-f6ddde4c]{color:var(--color-primary,#2563eb);text-decoration-line:underline}.drop-zone .label .trigger[data-v-f6ddde4c]:where(.dark,.dark *){color:var(--color-blue-400,oklch(70.7% .165 254.624))}.drop-zone .file-input[data-v-f6ddde4c]{display:none}.warning-zone[data-v-6a715eb5]{--tw-border-style:solid;border-style:solid;border-color:var(--color-orange-200,oklch(90.1% .076 70.697));background-color:var(--color-warning-accent,#fff7ed)}.warning-zone .label[data-v-6a715eb5]{color:var(--color-warning-primary,#7c2d12);flex-grow:1}.warning-zone .label .icon[data-v-6a715eb5]{color:var(--color-warning-tertiary,#f97316)}.error-zone[data-v-ac56673e]{--tw-border-style:solid;border-style:solid;border-color:var(--color-red-200,oklch(88.5% .062 18.334));background-color:var(--color-error-accent,#fef2f2)}.error-zone .label[data-v-ac56673e]{color:var(--color-error-primary,#7b2122);flex-grow:1}.error-zone .label .icon[data-v-ac56673e]{color:var(--color-error-tertiary,#e73c3e)}.success-zone[data-v-100cfc2a]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));background-color:var(--color-white,#fff)}.success-zone[data-v-100cfc2a]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.success-zone .label .icon[data-v-100cfc2a]{color:var(--color-success-tertiary,#22c55e)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3bf13f60],[data-v-3bf13f60]:before,[data-v-3bf13f60]:after,[data-v-3bf13f60]::backdrop{--tw-duration:initial;--tw-ease:initial}}}.linear-progress[data-v-3bf13f60]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100%;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));display:flex}.linear-progress .wrapper[data-v-3bf13f60]{gap:calc(var(--spacing,.25rem)*1);flex-direction:column;width:100%;display:flex}.linear-progress .wrapper .progress-bar[data-v-3bf13f60]{height:calc(var(--spacing,.25rem)*1.5);width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-3bf13f60]{width:100%;height:100%;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.5s;--tw-ease:linear;transition-duration:.5s;transition-timing-function:linear}.linear-progress .wrapper .progress-bar.blue[data-v-3bf13f60]{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-3bf13f60]{background-color:var(--color-blue-500,oklch(62.3% .214 259.815))}.linear-progress .wrapper .progress-bar.lightblue[data-v-3bf13f60]{background-color:inherit}.linear-progress .wrapper .progress-bar.lightblue .progress[data-v-3bf13f60]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}.linear-progress .wrapper .progress-bar.green[data-v-3bf13f60]{background-color:var(--color-green-100,oklch(96.2% .044 156.743))}.linear-progress .wrapper .progress-bar.green .progress[data-v-3bf13f60]{background-color:var(--color-green-500,oklch(72.3% .219 149.579))}.linear-progress .wrapper .progress-bar.gray[data-v-3bf13f60]{background-color:var(--color-gray-100,oklch(96.7% .003 264.542))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-3bf13f60]{background-color:var(--color-gray-500,oklch(55.1% .027 264.364))}.linear-progress .wrapper .progress-bar.orange[data-v-3bf13f60]{background-color:var(--color-orange-100,oklch(95.4% .038 75.164))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-3bf13f60]{background-color:var(--color-orange-500,oklch(70.5% .213 47.604))}.linear-progress .wrapper .progress-bar.purple[data-v-3bf13f60]{background-color:var(--color-purple-100,oklch(94.6% .033 307.174))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-3bf13f60]{background-color:var(--color-purple-500,oklch(62.7% .265 303.9))}.linear-progress .wrapper .progress-bar.red[data-v-3bf13f60]{background-color:var(--color-red-100,oklch(93.6% .032 17.717))}.linear-progress .wrapper .progress-bar.red .progress[data-v-3bf13f60]{background-color:var(--color-red-500,oklch(63.7% .237 25.331))}.linear-progress .wrapper .progress-bar.yellow[data-v-3bf13f60]{background-color:var(--color-yellow-100,oklch(97.3% .071 103.193))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-3bf13f60]{background-color:var(--color-yellow-500,oklch(79.5% .184 86.047))}.linear-progress .append[data-v-3bf13f60]{min-width:calc(var(--spacing,.25rem)*9)}@property --tw-ease{syntax:"*";inherits:false}.uploading-zone[data-v-c770521c]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0));position:relative}.uploading-zone .label[data-v-c770521c]{z-index:2;cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.uploading-zone .label[data-v-c770521c]:where(.dark,.dark *){mix-blend-mode:difference}.uploading-zone .label .text[data-v-c770521c]:where(.dark,.dark *){color:var(--color-white,#fff)}.uploading-zone .label .progress[data-v-c770521c]{color:var(--color-primary,#2563eb)}.uploading-zone .label .progress[data-v-c770521c]:where(.dark,.dark *){color:var(--color-primary-light,#3b82f6)}.uploading-zone .button[data-v-c770521c]{width:100%}@media(min-width:48rem){.uploading-zone .button[data-v-c770521c]{width:auto}}.uploading-zone .linear-progress[data-v-c770521c]{right:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:1;position:absolute;height:100%!important}:is(.uploading-zone .linear-progress[data-v-c770521c] .wrapper,.uploading-zone .linear-progress[data-v-c770521c] .progress-bar){height:100%}.processing-zone[data-v-c88622d7]{--tw-border-style:solid;border-style:solid;border-color:var(--color-neutral-200,oklch(92.2% 0 0))}.processing-zone[data-v-c88622d7]:where(.dark,.dark *){background-color:var(--color-child,#fff)}.processing-zone .label[data-v-c88622d7]{cursor:wait;gap:calc(var(--spacing,.25rem)*3)!important}.processing-zone .label .loader[data-v-c88622d7]{isolation:isolate}.processing-zone .button[data-v-c88622d7]{width:100%}@media(min-width:48rem){.processing-zone .button[data-v-c88622d7]{width:auto}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-e8f96956],[data-v-e8f96956]:before,[data-v-e8f96956]:after,[data-v-e8f96956]::backdrop{--tw-border-style:solid}}}@media(min-width:48rem){.drag-and-drop[data-v-e8f96956]{height:4.5rem}}.drag-and-drop .base-zone[data-v-e8f96956]{border-radius:var(--radius-2xl,1rem);border-style:var(--tw-border-style);width:100%;height:100%;padding:calc(var(--spacing,.25rem)*4);border-width:1px;flex-wrap:wrap;align-items:center;row-gap:1.125rem;display:flex;overflow:hidden}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956]{padding-block:calc(var(--spacing,.25rem)*0);padding-right:calc(var(--spacing,.25rem)*4);padding-left:calc(var(--spacing,.25rem)*6)}}.drag-and-drop .base-zone[data-v-e8f96956] .label{align-items:center;gap:calc(var(--spacing,.25rem)*1);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-grow:1;display:flex}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-e8f96956] .label{width:auto}}.drag-and-drop .base-zone[data-v-e8f96956] .label .icon{margin-right:calc(var(--spacing,.25rem)*2)}.drag-and-drop .base-zone[data-v-e8f96956] .actions{z-index:2;align-items:center;gap:calc(var(--spacing,.25rem)*2);flex-grow:1;display:flex}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions{flex-grow:0}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button{flex-shrink:0}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:first-child{order:1}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){flex-grow:1;order:1}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .button:nth-child(2){order:2}}.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-e8f96956] .actions .dropdown{order:1}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-cdeedeb7],[data-v-cdeedeb7]:before,[data-v-cdeedeb7]:after,[data-v-cdeedeb7]::backdrop{--tw-border-style:solid;--tw-outline-style:solid}}}.phone-input[data-v-cdeedeb7]{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);padding-inline:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}.phone-input[data-v-cdeedeb7]:hover:not(.disabled){border-color:var(--color-border-primary-hover,#9ca3af)}.phone-input.focus[data-v-cdeedeb7]:not(.disabled){border-color:var(--color-primary-light,#3b82f6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--color-primary-light,#3b82f6)}.phone-input.disabled[data-v-cdeedeb7]{border-color:var(--color-input-disabled-border,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.phone-input.disabled .country-prefix[data-v-cdeedeb7]{color:var(--color-gray-600,oklch(44.6% .03 256.802))}.phone-input.disabled input[data-v-cdeedeb7]{background-color:var(--color-disabled,#f3f4f6);color:var(--color-disabled-text,#606369)}.phone-input select[data-v-cdeedeb7],.phone-input input[data-v-cdeedeb7]{--tw-border-style:none;padding:calc(var(--spacing,.25rem)*0);border-style:none}:is(.phone-input select[data-v-cdeedeb7],.phone-input input[data-v-cdeedeb7]):focus{box-shadow:none}.phone-input select[data-v-cdeedeb7]{padding-right:calc(var(--spacing,.25rem)*8)}.phone-input input[data-v-cdeedeb7]{background-color:var(--color-input-bg,#fff);width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}.phone-input .country-prefix[data-v-cdeedeb7]{margin-right:calc(var(--spacing,.25rem)*1);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.dark .country-prefix[data-v-cdeedeb7]{color:var(--color-gray-400,oklch(70.7% .022 261.325))}.dark .disabled .country-prefix[data-v-cdeedeb7]{color:var(--color-disabled-text,#606369)}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-c1a60afd],[data-v-c1a60afd]:before,[data-v-c1a60afd]:after,[data-v-c1a60afd]::backdrop{--tw-font-weight:initial}}}.radio[data-v-c1a60afd]{margin-top:calc(var(--spacing,.25rem)*.5);border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-input-bg,#fff);color:var(--color-primary-light,#3b82f6)}.radio[data-v-c1a60afd]:focus{--tw-ring-color:var(--color-primary-light,#3b82f6)}.radio.large[data-v-c1a60afd]{height:calc(var(--spacing,.25rem)*5);width:calc(var(--spacing,.25rem)*5)}.label[data-v-c1a60afd]{align-items:flex-start;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-normal,400);font-weight:var(--font-weight-normal,400);color:var(--color-body-text,#111827);display:flex}.label[data-v-c1a60afd]:not(.disabled){cursor:pointer}.radio[data-v-c1a60afd]:not(:disabled):hover{border-color:var(--color-border-primary-hover,#9ca3af)}.radio[data-v-c1a60afd]:checked:not(:disabled){border-color:var(--color-primary-light,#3b82f6);background-color:var(--color-primary,#2563eb)}.radio[data-v-c1a60afd]:checked:not(:disabled):where(.dark,.dark *){background-color:var(--color-primary-light,#3b82f6)}.radio[data-v-c1a60afd]:disabled{border-color:var(--color-border-primary,#d1d5db);background-color:var(--color-disabled,#f3f4f6)}.radio[data-v-c1a60afd]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(156, 163, 175)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-c1a60afd]:checked:not(:disabled):hover{border-color:var(--color-primary,#2563eb);color:var(--color-primary,#2563eb)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-0a934056],[data-v-0a934056]:before,[data-v-0a934056]:after,[data-v-0a934056]::backdrop{--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:"";--tw-font-weight:initial}}}.radio-button[data-v-0a934056]{align-items:center;gap:calc(var(--spacing,.25rem)*3);border-radius:var(--radius-lg,.5rem);padding-inline:calc(var(--spacing,.25rem)*3);padding-block:calc(var(--spacing,.25rem)*3);word-break:break-all;display:flex}.radio-button[data-v-0a934056] *{pointer-events:none}.radio-button[data-v-0a934056]:not(.disabled):hover{cursor:pointer;background-color:var(--color-neutral-100,oklch(97% 0 0))}.radio-button[data-v-0a934056]:not(.disabled):hover:where(.dark,.dark *){background-color:var(--color-child-alt,#fff)}.radio-button:not(.disabled).active[data-v-0a934056]{background-color:var(--color-blue-50,oklch(97% .014 254.604))}@media(hover:hover){.radio-button:not(.disabled).active[data-v-0a934056]:hover{background-color:var(--color-blue-100,oklch(93.2% .032 255.585))}}.radio-button:not(.disabled).active[data-v-0a934056]:where(.dark,.dark *){background-color:var(--color-child,#fff)}@media(hover:hover){.radio-button:not(.disabled).active[data-v-0a934056]:where(.dark,.dark *):hover{background-color:var(--color-child-alt,#fff)}}.radio-button:not(.disabled).active .subtitle[data-v-0a934056]{color:var(--color-neutral-600,oklch(43.9% 0 0))!important}.radio-button:not(.disabled).active .subtitle[data-v-0a934056]:where(.dark,.dark *){color:var(--color-neutral-300,oklch(87% 0 0))!important}.radio-button.disabled[data-v-0a934056]{color:var(--color-disabled-text,#606369);--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.radio-button.disabled[data-v-0a934056]:before{top:calc(var(--spacing,.25rem)*0);left:calc(var(--spacing,.25rem)*0);z-index:10;cursor:not-allowed;border-radius:var(--radius-xl,.75rem);background-color:var(--color-neutral-300,oklch(87% 0 0));opacity:.1;--tw-content:"";content:var(--tw-content);width:100%;height:100%;position:absolute}.radio-button.large[data-v-0a934056]{padding-block:calc(var(--spacing,.25rem)*3.5)}.radio-button label[data-v-0a934056]{-webkit-user-select:none;user-select:none}.radio-button .append[data-v-0a934056]{margin-left:auto}.radio-button .prepend-wrapper[data-v-0a934056]{align-items:center;gap:calc(var(--spacing,.25rem)*3);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper[data-v-0a934056]{flex-direction:column;min-width:max-content;display:flex}.radio-button .prepend-wrapper .title-wrapper .title[data-v-0a934056]{align-items:center;gap:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);flex-direction:row;display:flex}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-0a934056]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-500,oklch(55.6% 0 0))}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-0a934056]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-06fee698],[data-v-06fee698]:before,[data-v-06fee698]:after,[data-v-06fee698]::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}.suggestion-list[data-v-06fee698]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-white,#fff);min-width:6.25rem;padding:calc(var(--spacing,.25rem)*3);--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:absolute}.suggestion-list .menu[data-v-06fee698]{row-gap:calc(var(--spacing,.25rem)*1)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-47592fd4],[data-v-47592fd4]:before,[data-v-47592fd4]:after,[data-v-47592fd4]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.editor[data-v-47592fd4] .tiptap{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-border-primary,#d1d5db);width:100%;height:18.75rem;padding-inline:calc(var(--spacing,.25rem)*4);padding-block:.625rem;overflow:auto}:is(.editor[data-v-47592fd4] .tiptap h1,.editor[data-v-47592fd4] .tiptap h2){margin-bottom:calc(var(--spacing,.25rem)*4)}.editor[data-v-47592fd4] .tiptap h1{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)))}.editor[data-v-47592fd4] .tiptap h2{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75/1.25)))}.editor[data-v-47592fd4] .tiptap h3{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}:is(.editor[data-v-47592fd4] .tiptap h4,.editor[data-v-47592fd4] .tiptap h5,.editor[data-v-47592fd4] .tiptap h6){font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.editor[data-v-47592fd4] .tiptap .tag{--tw-font-weight:var(--font-weight-bold,700);font-weight:var(--font-weight-bold,700);color:var(--color-gray-700,oklch(37.3% .034 259.733))}.editor .toolbar[data-v-47592fd4]{margin-bottom:calc(var(--spacing,.25rem)*2);gap:calc(var(--spacing,.25rem)*1);display:flex}.editor .toolbar .button[data-v-47592fd4]{width:calc(var(--spacing,.25rem)*10)}.editor .toolbar[data-v-47592fd4] .base-select{margin-left:auto}.modal.loader-modal[data-v-3d6405b8] .inner{display:flex;align-items:center;justify-content:center;background-color:var(--color-white);height:4.75rem;border-radius:1rem}.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:0;overflow:visible}.modal.loader-modal[data-v-3d6405b8] .inner .loader{width:3.125rem;height:3.125rem}.search-container[data-v-3d6405b8]{position:relative}.search-container[data-v-3d6405b8] .modal{max-height:25rem;background-color:transparent;height:100%;box-shadow:none}.search-container[data-v-3d6405b8] .modal .inner .content{padding:0}.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper,.search-container[data-v-3d6405b8] .modal .inner .content .base-select .wrapper input{background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{background-color:var(--color-child);border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;overflow:hidden}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .select-content{border-radius:1rem;background-color:var(--color-child)}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated{margin:.625rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-left-radius:0;border-bottom-right-radius:0}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper{border-radius:1rem;padding-left:1.5rem;padding-right:1.5rem;height:4.75rem;border:none;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper.focus{border:none;outline:none}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .prepend-icon{height:1.5rem;width:1.5rem;margin-left:0;margin-right:.25rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-3d6405b8] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-shadow:0 4px 6px #0000001a}.search-container[data-v-3d6405b8] .modal .inner .content .floating-container-content .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-3d6405b8] .modal .inner .content .button{color:var(--color-gray-500)}.search-container[data-v-3d6405b8] .modal .inner .content .button.cancel{font-weight:400;border-left:1px solid var(--color-border-primary);border-radius:0;padding-left:1rem;padding-right:.5rem}.dark .modal .cancel[data-v-3d6405b8]{color:var(--color-body-text)!important}@media(min-width:768px){.modal.loader-modal[data-v-3d6405b8] .inner .content{padding:.5rem}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-56f21690],[data-v-56f21690]:before,[data-v-56f21690]:after,[data-v-56f21690]::backdrop{--tw-border-style:solid}}}[data-v-56f21690] .input{min-width:calc(var(--spacing,.25rem)*40);border-right-style:var(--tw-border-style)!important;border-right-width:0!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important}[data-v-56f21690] .search-options .wrapper{border-left-style:var(--tw-border-style)!important;border-left-width:0!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important}.scoped-search[data-v-56f21690]{display:flex}.scoped-search .search:has(.input:hover)+.divider[data-v-56f21690]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search .search:focus-within+.divider[data-v-56f21690]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search .search[data-v-56f21690]:focus-within .input{border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-primary-light,#3b82f6)}.scoped-search .search[data-v-56f21690]:focus-within .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-56f21690]{border-color:var(--color-border-primary-hover,#9ca3af)}.scoped-search:has(.search-options:focus) .divider[data-v-56f21690],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-56f21690]{border-left-style:var(--tw-border-style);border-left-width:2px;border-color:var(--color-primary-light,#3b82f6)!important}.scoped-search[data-v-56f21690] .search{flex-grow:1}.time-input[data-v-f95d04e5]{width:5.3125rem}.time-input[data-v-f95d04e5] ::-webkit-calendar-picker-indicator{display:none}.time-input[data-v-f95d04e5] ::-webkit-datetime-edit-text{padding-inline:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input[data-v-f95d04e5] ::-webkit-datetime-edit-fields-wrapper{margin-inline:auto}.time-input.has-icon[data-v-f95d04e5]{width:calc(var(--spacing,.25rem)*28)}.time-input.has-icon[data-v-f95d04e5] ::-webkit-datetime-edit-fields-wrapper{margin-left:calc(var(--spacing,.25rem)*0)}.time-input.has-icon[data-v-f95d04e5] .icon{color:var(--color-neutral-500,oklch(55.6% 0 0))}.time-input.error-full[data-v-f95d04e5] .error{width:max-content}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-18c509b1],[data-v-18c509b1]:before,[data-v-18c509b1]:after,[data-v-18c509b1]::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid}}}.arrow[data-v-18c509b1]{position:relative}.arrow.vertical[data-v-18c509b1]{width:fit-content;height:100%;padding-inline:calc(var(--spacing,.25rem)*3)}.arrow.vertical .text[data-v-18c509b1]{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;top:50%;rotate:-90deg}.arrow.vertical.has-text[data-v-18c509b1]{margin-right:calc(var(--spacing,.25rem)*8)}.arrow[data-v-18c509b1]:not(.vertical){width:100%;padding-block:calc(var(--spacing,.25rem)*3)}.arrow:not(.vertical) .text[data-v-18c509b1]{margin-top:calc(var(--spacing,.25rem)*5);--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);text-align:center;left:50%}.arrow:not(.vertical).has-text[data-v-18c509b1]{margin-bottom:calc(var(--spacing,.25rem)*8)}.arrow .arrow-pointer[data-v-18c509b1]{border-right-style:var(--tw-border-style);border-right-width:2px;border-bottom-style:var(--tw-border-style);border-bottom-width:2px;border-color:var(--color-border-primary,#d1d5db);padding:calc(var(--spacing,.25rem)*2);position:absolute}.arrow .arrow-pointer.up[data-v-18c509b1],.arrow .arrow-pointer.down[data-v-18c509b1]{margin-left:calc(var(--spacing,.25rem)*-2)}.arrow .arrow-pointer.up[data-v-18c509b1]{top:calc(var(--spacing,.25rem)*0);margin-top:calc(var(--spacing,.25rem)*.5);rotate:-135deg}.arrow .arrow-pointer.down[data-v-18c509b1]{bottom:calc(var(--spacing,.25rem)*0);margin-bottom:calc(var(--spacing,.25rem)*.5);rotate:45deg}.arrow .arrow-pointer.left[data-v-18c509b1],.arrow .arrow-pointer.right[data-v-18c509b1]{top:calc(var(--spacing,.25rem)*4);margin-top:calc(var(--spacing,.25rem)*-3)}.arrow .arrow-pointer.left[data-v-18c509b1]{left:calc(var(--spacing,.25rem)*0);margin-left:calc(var(--spacing,.25rem)*.5);rotate:135deg}.arrow .arrow-pointer.right[data-v-18c509b1]{right:calc(var(--spacing,.25rem)*0);margin-right:calc(var(--spacing,.25rem)*.5);rotate:-45deg}.arrow .text[data-v-18c509b1]{text-wrap:nowrap;color:var(--color-gray-500,oklch(55.1% .027 264.364));display:block;position:absolute}.arrow .text[data-v-18c509b1]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.footer[data-v-af644ac3]{min-height:calc(var(--spacing,.25rem)*32);justify-content:center;align-items:center;gap:calc(var(--spacing,.25rem)*6);flex-direction:column;display:flex;overflow:hidden}.footer .copy[data-v-af644ac3]{text-align:center;width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-body-text,#111827)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1b195509],[data-v-1b195509]:before,[data-v-1b195509]:after,[data-v-1b195509]::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}.header[data-v-1b195509]{z-index:50;width:100%;height:var(--v6232d06c);position:relative}.header .wrapper[data-v-1b195509]{border-bottom-style:var(--tw-border-style);background-color:var(--color-parent-bg,#fff);border-bottom-width:1px;justify-content:center;width:100%;display:flex;position:fixed}.header .wrapper[data-v-1b195509]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.header .wrapper .inner[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*2);width:100vw;height:100%;margin-right:calc(100% - 100vw);display:grid;overflow-x:clip}@media(min-width:64rem){.header .wrapper .inner[data-v-1b195509]{max-width:100.438rem}}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:1fr auto 1fr;grid-template-areas:"return-info return-info return-info""prepend logo append""middle middle middle"}.header .wrapper .inner .prepend[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6);grid-area:prepend}.header .wrapper .inner .logo[data-v-1b195509]{grid-area:logo}.header .wrapper .inner .logo a[data-v-1b195509]{width:fit-content;display:block}.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*2);border-bottom-width:1px;justify-content:center;display:flex}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-1b195509]{border-bottom-style:var(--tw-border-style);padding-block:calc(var(--spacing,.25rem)*0);border-bottom-width:0;justify-content:flex-start}}.header .wrapper .inner .return-info[data-v-1b195509]{grid-area:return-info}.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*4);width:calc(var(--spacing,.25rem)*4)}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-1b195509]{height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);--tw-border-style:none;border-style:none}}.header .wrapper .inner .return-info a[data-v-1b195509]{align-items:center;gap:calc(var(--spacing,.25rem)*4);display:flex}.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);align-items:center;display:flex}@media(min-width:64rem){.header .wrapper .inner .return-info a .text[data-v-1b195509]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)))}}.header .wrapper .inner .middle[data-v-1b195509]{justify-content:center;align-items:center;height:100%;display:flex}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]{padding:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509]{grid-area:middle}.header .wrapper .inner .middle[data-v-1b195509]>*{margin-inline:calc(var(--spacing,.25rem)*2);margin-bottom:calc(var(--spacing,.25rem)*2)}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509]>*{margin:calc(var(--spacing,.25rem)*0)}}.header .wrapper .inner .middle[data-v-1b195509] .input-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .inline-container-prepended .icon{color:var(--color-primary,#2563eb)}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{border-radius:var(--radius-2xl,1rem);--tw-border-style:none;background-color:var(--color-disabled,#f3f4f6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));padding-block:.4375rem;border-style:none;padding-left:3.25rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input::placeholder{color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media(hover:hover){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:hover{--tw-border-style:none;border-style:none}}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.4375rem;padding-right:calc(var(--spacing,.25rem)*4)}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{padding-block:.6875rem}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height, 1.5 ))}.header .wrapper .inner .middle[data-v-1b195509] .input-container .input:focus{padding-block:.6875rem}}.header .wrapper .inner .append[data-v-1b195509]{justify-content:flex-end;align-items:center;gap:calc(var(--spacing,.25rem)*4);grid-area:append;display:flex}.header .wrapper .inner .append .icon[data-v-1b195509]{color:var(--color-gray-500,oklch(55.1% .027 264.364))}.header .wrapper .inner .append .dropdown[data-v-1b195509] .button{margin-right:calc(var(--spacing,.25rem)*6);padding:calc(var(--spacing,.25rem)*0);background-color:#0000}@media(min-width:1024px){.header[data-v-1b195509],.header .wrapper[data-v-1b195509]{height:calc(var(--spacing,.25rem)*20)}.header .wrapper .inner[data-v-1b195509]{grid-template-columns:2fr 3fr 2fr;grid-template-areas:"logo middle append"}.header .wrapper .inner.left[data-v-1b195509]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-1b195509]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-1b195509]{justify-content:center}.header .wrapper .inner.right[data-v-1b195509]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-1b195509]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-1b195509]{grid-template-columns:1fr 1fr 2fr 2fr;grid-template-areas:"logo return-info middle append"}.header .wrapper .prepend[data-v-1b195509]{display:none}.header .wrapper .logo a[data-v-1b195509]{margin-left:calc(var(--spacing,.25rem)*6)}}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3bdddca1],[data-v-3bdddca1]:before,[data-v-3bdddca1]:after,[data-v-3bdddca1]::backdrop{--tw-font-weight:initial}}}.tab[data-v-3bdddca1]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-neutral-600,oklch(43.9% 0 0))}.tab .tab-count[data-v-3bdddca1]{margin-left:calc(var(--spacing,.25rem)*2);padding-inline:calc(var(--spacing,.25rem)*2.5);padding-block:calc(var(--spacing,.25rem)*.5);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1/.75)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);border-radius:3.40282e38px;display:none}@media(min-width:48rem){.tab .tab-count[data-v-3bdddca1]{display:inline-block}}.tab.active[data-v-3bdddca1]{border-color:var(--color-primary-mid,#2f6fe8);color:var(--color-primary-mid,#2f6fe8)}.tab.active[data-v-3bdddca1]:where(.dark,.dark *){border-color:var(--color-primary-light,#3b82f6);color:var(--color-primary-light,#3b82f6)}.tab.disabled[data-v-3bdddca1]{pointer-events:none;cursor:not-allowed;color:var(--color-disabled-text,#606369)}.tab.disabled.active[data-v-3bdddca1]{border-color:var(--color-disabled-text,#606369)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-51f0b7e0],[data-v-51f0b7e0]:before,[data-v-51f0b7e0]:after,[data-v-51f0b7e0]::backdrop{--tw-space-x-reverse:0;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-border-style:solid;--tw-font-weight:initial}}}.tabs[data-v-51f0b7e0]{display:flex;position:relative}:where(.tabs[data-v-51f0b7e0]>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing,.25rem)*8)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing,.25rem)*8)*calc(1 - var(--tw-space-x-reverse)))}.tabs[data-v-51f0b7e0]{background-color:inherit;--tw-shadow:inset 0 -1px 0 0 var(--tw-shadow-color,var(--color-gray-200));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tabs[data-v-51f0b7e0] .tab{cursor:pointer;border-bottom-style:var(--tw-border-style);padding-inline:calc(var(--spacing,.25rem)*1);padding-block:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);white-space:nowrap;border-bottom-width:2px}.tabs[data-v-51f0b7e0] .tab:not(.active){color:var(--color-gray-500,oklch(55.1% .027 264.364));border-color:#0000}.tabs[data-v-51f0b7e0] .tab:not(.active):where(.dark,.dark *){color:var(--color-body-text,#111827)}.tabs[data-v-51f0b7e0] .tab:hover:not(.active){color:var(--color-gray-700,oklch(37.3% .034 259.733))}@media(hover:hover){.tabs[data-v-51f0b7e0] .tab:hover:not(.active):hover{border-color:var(--color-neutral-200,oklch(92.2% 0 0))}}.tabs[data-v-51f0b7e0] .tab:hover:not(.active):where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.tabs[data-v-51f0b7e0] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a2de1f4a],[data-v-a2de1f4a]:before,[data-v-a2de1f4a]:after,[data-v-a2de1f4a]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-tracking:initial}}}.page-header[data-v-a2de1f4a]{background-color:var(--color-body,#fff);position:relative}.page-header.header-sticky[data-v-a2de1f4a]{z-index:21;top:var(--v6db7cc74);position:sticky}.page-header.header-sticky.overlap[data-v-a2de1f4a]{border-bottom-style:var(--tw-border-style);border-bottom-width:1px;border-color:var(--color-neutral-200,oklch(92.2% 0 0));--tw-shadow:0 12px 12px -16px var(--tw-shadow-color,#0003);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);padding-top:var(--d88fb824)}.page-header.header-sticky.overlap .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*1)}.page-header.header-sticky.overlap .heading h1[data-v-a2de1f4a]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75/1.125)))}.page-header .back-button-wrapper[data-v-a2de1f4a]{height:calc(var(--spacing,.25rem)*5);width:100%}.page-header h1[data-v-a2de1f4a]{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2/1.5)));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s))}@media(min-width:48rem){.page-header h1[data-v-a2de1f4a]{font-size:1.75rem}}.page-header .tabs[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*8)}.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*4);align-items:center;display:flex}@media(min-width:48rem){.page-header .heading[data-v-a2de1f4a]{margin-bottom:calc(var(--spacing,.25rem)*5)}}.page-header .heading .image-wrapper[data-v-a2de1f4a]{width:fit-content}.page-header .heading .image-wrapper[data-v-a2de1f4a] .image{max-height:calc(var(--spacing,.25rem)*14)}.page-header .heading .header-start[data-v-a2de1f4a]{align-items:center;gap:calc(var(--spacing,.25rem)*4);flex-direction:row;display:flex}.page-header .heading .actions[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);margin-left:auto;display:flex}.page-header .heading .title-wrapper[data-v-a2de1f4a]{flex-direction:column;display:flex}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-semibold,600);font-weight:var(--font-weight-semibold,600);--tw-tracking:var(--tracking-tight,-.025em);letter-spacing:var(--tracking-tight,-.025em);color:var(--color-gray-500,oklch(55.1% .027 264.364))}.page-header .heading .title-wrapper .subtitle[data-v-a2de1f4a]:where(.dark,.dark *){color:var(--color-body-text,#111827)}.page-header .filters[data-v-a2de1f4a]{gap:calc(var(--spacing,.25rem)*2);padding-bottom:calc(var(--spacing,.25rem)*2);display:flex;overflow:auto}@media(min-width:48rem){.page-header .filters[data-v-a2de1f4a]{flex-wrap:wrap}}.page-header .filters .search[data-v-a2de1f4a]{min-width:12rem}@media(min-width:64rem){.page-header .filters .search[data-v-a2de1f4a]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-a2de1f4a]{display:contents}.page-header .filters .filter-group[data-v-a2de1f4a] .title{margin-left:calc(var(--spacing,.25rem)*4)}@property --tw-tracking{syntax:"*";inherits:false}.sidebar[data-v-c4aea807]{border-radius:var(--radius-lg,.5rem);width:100%;max-width:14.5rem;height:100%;overflow:hidden}.sidebar.mini[data-v-c4aea807]{width:2.25rem}.sidebar.mini .menu[data-v-c4aea807]{width:fit-content}.menu[data-v-c4aea807]{gap:calc(var(--spacing,.25rem)*1);color:var(--color-neutral-950,oklch(14.5% 0 0))}.summary[data-v-15250c0d]{width:var(--v5436127c);max-width:100%}.hamburger-icon[data-v-40931657]{cursor:pointer}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-fbf56868],[data-v-fbf56868]:before,[data-v-fbf56868]:after,[data-v-fbf56868]::backdrop{--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-font-weight:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-duration:initial}}}[data-v-fbf56868] .progress{transition-duration:var(--v63a26136)!important}.toast[data-v-fbf56868]{border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-gray-200,oklch(92.8% .006 264.531));background-color:var(--color-child-alt,#fff);--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);width:100%;max-width:24rem;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);position:relative}.toast[data-v-fbf56868]:where(.dark,.dark *){--tw-border-style:none;border-style:none}.toast .wrapper[data-v-fbf56868]{padding:calc(var(--spacing,.25rem)*4);display:flex}.toast .linear-progress[data-v-fbf56868] .progress-bar{border-bottom-right-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.toast.is-absolute[data-v-fbf56868]{top:calc(var(--spacing,.25rem)*1);right:calc(var(--spacing,.25rem)*1);position:absolute}.toast .type-icon[data-v-fbf56868]{margin-right:calc(var(--spacing,.25rem)*3);flex-shrink:0}.toast .content[data-v-fbf56868]{padding-right:calc(var(--spacing,.25rem)*6);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));flex-direction:column;display:flex}.toast .content .title[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*1);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.toast .content .description[data-v-fbf56868]{margin-bottom:calc(var(--spacing,.25rem)*4);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));color:var(--color-gray-500,oklch(55.1% .027 264.364))}.toast .content .description[data-v-fbf56868]:where(.dark,.dark *){color:var(--color-neutral-200,oklch(92.2% 0 0))}.toast .content .actions[data-v-fbf56868]{gap:calc(var(--spacing,.25rem)*2);display:flex}.toast .close[data-v-fbf56868]{top:.5rem;right:calc(var(--spacing,.25rem)*0);position:absolute}.toast .close[data-v-fbf56868] .mini-icon{color:var(--color-gray-400,oklch(70.7% .022 261.325))}.close:hover .mini-icon[data-v-fbf56868]{color:var(--color-black,#000)}.error .type-icon[data-v-fbf56868]{color:var(--color-red-500,oklch(63.7% .237 25.331))}.warning .type-icon[data-v-fbf56868]{color:var(--color-orange-500,oklch(70.5% .213 47.604))}.success .type-icon[data-v-fbf56868]{color:var(--color-green-500,oklch(72.3% .219 149.579))}.info .type-icon[data-v-fbf56868]{color:var(--color-blue-500,oklch(62.3% .214 259.815))}.fade-enter-from[data-v-fbf56868],.fade-leave-to[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*60);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:0}.fade-enter-to[data-v-fbf56868],.fade-leave-from[data-v-fbf56868]{--tw-translate-x:calc(var(--spacing,.25rem)*0);translate:var(--tw-translate-x)var(--tw-translate-y);opacity:1}.fade-enter-active[data-v-fbf56868],.fade-leave-active[data-v-fbf56868]{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.3s;transition-duration:.3s}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-duration{syntax:"*";inherits:false}.toast-group[data-v-741facc4]{top:calc(var(--spacing,.25rem)*0);right:calc(var(--spacing,.25rem)*0);z-index:100;gap:calc(var(--spacing,.25rem)*4);max-height:100vh;padding:calc(var(--spacing,.25rem)*4);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));scrollbar-width:none;flex-direction:column;display:flex;position:fixed;overflow:hidden auto}.page-layout[data-v-312f26ad]{flex-direction:column;display:flex;position:relative;overflow-x:clip}.page-layout .wrap[data-v-312f26ad]{flex-direction:column;align-self:center;width:100vw;height:100%;margin-right:calc(100% - 100vw);display:flex}@media(min-width:64rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*5);max-width:100.438rem;padding-inline:calc(var(--spacing,.25rem)*6);flex-direction:row}}@media(min-width:96rem){.page-layout .wrap[data-v-312f26ad]{gap:calc(var(--spacing,.25rem)*20)}}.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6)}@media(min-width:64rem){.page-layout .wrap.has-sidebar .main[data-v-312f26ad]{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout.layout-mirrored .main[data-v-312f26ad]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-312f26ad]{order:2}.page-layout .sidebar[data-v-312f26ad]{margin-bottom:calc(var(--spacing,.25rem)*4);height:100%;position:sticky}@media(min-width:64rem){.page-layout .sidebar[data-v-312f26ad]{margin-top:calc(var(--spacing,.25rem)*10)}}.page-layout .sidebar[data-v-312f26ad]{top:var(--v7ed39e1a)}.page-layout .sidebar-left[data-v-312f26ad]{display:none}@media(min-width:64rem){.page-layout .sidebar-left[data-v-312f26ad]{display:block}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]{width:fit-content;max-width:calc(var(--spacing,.25rem)*40)}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]{width:100%;max-width:14.5rem}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*4)}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-312f26ad]:not(.mini) .menu-item-content{padding-right:calc(var(--spacing,.25rem)*0)}}.page-layout .sidebar-right[data-v-312f26ad]{padding-inline:calc(var(--spacing,.25rem)*6);padding-block:calc(var(--spacing,.25rem)*4);padding-top:calc(var(--spacing,.25rem)*0)}@media(min-width:64rem){.page-layout .sidebar-right[data-v-312f26ad]{padding:calc(var(--spacing,.25rem)*0);padding-top:calc(var(--spacing,.25rem)*4)}}.page-layout .main[data-v-312f26ad]{min-width:calc(var(--spacing,.25rem)*0);padding-block:calc(var(--spacing,.25rem)*4);flex-grow:1}@media(min-width:64rem){.page-layout .main[data-v-312f26ad]{padding-block:calc(var(--spacing,.25rem)*10)}}.persistent .label .badge[data-v-9ccdf55b]{margin-right:.375rem}.persistent .label .micro-icon[data-v-9ccdf55b]{margin-left:calc(var(--spacing,.25rem)*1)}.persistent .label .micro-icon[data-v-9ccdf55b]:where(.dark,.dark *){color:inherit}.persistent[data-v-9ccdf55b] .menu .current{color:var(--color-neutral-950,oklch(14.5% 0 0))!important}.persistent[data-v-9ccdf55b] .menu .current:where(.dark,.dark *){color:var(--color-white,#fff)!important}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-1d398f2d],[data-v-1d398f2d]:before,[data-v-1d398f2d]:after,[data-v-1d398f2d]::backdrop{--tw-border-style:solid}}}.step-connector[data-v-1d398f2d]:not(.absolute){flex:1}.step-connector.absolute[data-v-1d398f2d]{top:9.1px;left:calc(11px - 50%);right:calc(50% + 11px)}.step-connector .horizontal-line[data-v-1d398f2d]{border-top-style:var(--tw-border-style);border-top-width:.4rem;border-color:var(--color-neutral-100,oklch(97% 0 0));display:block}.step-connector .horizontal-line[data-v-1d398f2d]:where(.dark,.dark *){border-color:var(--color-input-border,#d1d5db)}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-a323e4e3],[data-v-a323e4e3]:before,[data-v-a323e4e3]:after,[data-v-a323e4e3]::backdrop{--tw-content:"";--tw-font-weight:initial}}}.step[data-v-a323e4e3]:not(.xs){flex-direction:column;flex:1;align-items:center;display:flex;position:relative}.step .step-content[data-v-a323e4e3]{flex-direction:column;align-items:center;display:flex}.step .step-content .step-state[data-v-a323e4e3]{z-index:1;height:calc(var(--spacing,.25rem)*6);width:calc(var(--spacing,.25rem)*6);background-color:var(--color-neutral-100,oklch(97% 0 0));font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));border-radius:3.40282e38px;justify-content:center;align-items:center;display:flex;position:relative}.step .step-content .step-state[data-v-a323e4e3]:where(.dark,.dark *){background-color:var(--color-input-border,#d1d5db)}.step .step-content .step-state.active[data-v-a323e4e3]:before{z-index:1;height:calc(var(--spacing,.25rem)*10);width:calc(var(--spacing,.25rem)*10);opacity:.1;--tw-content:"";content:var(--tw-content);border-radius:3.40282e38px;position:absolute}.step .step-content .step-state .micro-icon[data-v-a323e4e3]{color:var(--color-white,#fff)}.step .step-content .label[data-v-a323e4e3]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}.step .step-content .label.unfinished[data-v-a323e4e3]{color:var(--color-gray-450,#848b98)}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-102893cf],[data-v-102893cf]:before,[data-v-102893cf]:after,[data-v-102893cf]::backdrop{--tw-font-weight:initial}}}.stepper[data-v-102893cf]{z-index:1}.stepper.xs .wrapper[data-v-102893cf]{align-items:center}.stepper.xs .wrapper[data-v-102893cf] .step-connector:first-child .horizontal-line{border-top-left-radius:3.40282e38px;border-bottom-left-radius:3.40282e38px}.stepper.xs .wrapper[data-v-102893cf] .step-connector:last-child .horizontal-line{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.stepper[data-v-102893cf]:not(.xs){justify-content:space-between}.stepper.default[data-v-102893cf] .step-connector .active{border-color:var(--color-primary,#2563eb)}:is(.stepper.default[data-v-102893cf] .step-state.finished,.stepper.default[data-v-102893cf] .step-state.active,.stepper.default[data-v-102893cf] .step-state.active:before){background-color:var(--color-primary,#2563eb)}.stepper.default[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.error[data-v-102893cf] .step-connector .active{border-color:var(--color-error-tertiary,#e73c3e)}:is(.stepper.error[data-v-102893cf] .step-state.finished,.stepper.error[data-v-102893cf] .step-state.active,.stepper.error[data-v-102893cf] .step-state.active:before){background-color:var(--color-error-tertiary,#e73c3e)}.stepper.error[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.warning[data-v-102893cf] .step-connector .active{border-color:var(--color-amber-400,oklch(82.8% .189 84.429))}:is(.stepper.warning[data-v-102893cf] .step-state.finished,.stepper.warning[data-v-102893cf] .step-state.active,.stepper.warning[data-v-102893cf] .step-state.active:before){background-color:var(--color-amber-400,oklch(82.8% .189 84.429))}.stepper.warning[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper.success[data-v-102893cf] .step-connector .active{border-color:var(--color-success-tertiary,#22c55e)}:is(.stepper.success[data-v-102893cf] .step-state.finished,.stepper.success[data-v-102893cf] .step-state.active,.stepper.success[data-v-102893cf] .step-state.active:before){background-color:var(--color-success-tertiary,#22c55e)}.stepper.success[data-v-102893cf] .step-state .icon{color:var(--color-white,#fff)}.stepper.disabled[data-v-102893cf] .step-connector .active{background-color:var(--color-input-border,#d1d5db)}:is(.stepper.disabled[data-v-102893cf] .step-state.finished,.stepper.disabled[data-v-102893cf] .step-state.active,.stepper.disabled[data-v-102893cf] .step-state.active:before){background-color:var(--color-input-border,#d1d5db)}.stepper.disabled[data-v-102893cf] .step-state.active:before{background-color:var(--color-neutral-400,oklch(70.8% 0 0))}.stepper.disabled[data-v-102893cf] .step-state .icon{color:var(--color-black,#000)}.stepper .wrapper[data-v-102893cf]{flex-direction:row;display:flex;position:relative}.stepper .active-step[data-v-102893cf]{margin-top:calc(var(--spacing,.25rem)*2);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25/.875)));--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500)}@property --tw-font-weight{syntax:"*";inherits:false}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-baadb98e],[data-v-baadb98e]:before,[data-v-baadb98e]:after,[data-v-baadb98e]::backdrop{--tw-border-style:solid}}}.filter-tabs[data-v-baadb98e]{justify-content:space-between;gap:.5625rem;display:flex}[data-v-baadb98e] .tab{height:calc(var(--spacing,.25rem)*10);border-radius:var(--radius-lg,.5rem);border-style:var(--tw-border-style);padding-right:.625rem;padding-left:calc(var(--spacing,.25rem)*4);border-width:1px;flex-grow:1;justify-content:space-between;align-items:center;display:flex}[data-v-baadb98e] .tab:not(.active){border-color:var(--color-border-primary,#d1d5db)}[data-v-baadb98e] .tab:not(.active):where(.dark,.dark *){color:var(--color-neutral-400,oklch(70.8% 0 0))}[data-v-baadb98e] .tab .tab-count{border-style:var(--tw-border-style);border-width:1px}[data-v-baadb98e] .tab.active{border-style:var(--tw-border-style);border-width:2px;padding-left:.9375rem;padding-right:.5625rem}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}.container{position:relative;height:100%;color:var(--color-body-text);font-family:var(--font-sans)}.container #probo-product-search-bar{outline:none}.container span.option{display:flex;gap:1rem;align-items:center}.container span.option .title{font-size:1.125rem;font-weight:600;display:block}.container span.option .subtitle{color:#6a7282;font-size:.875rem;line-height:1.25rem;margin-top:.25rem;display:block}`, Gv = (e, t) => {
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
    const t = e, a = Je(new Wv({ proxy: "" })), r = X(null);
    he(a, () => {
      a.language && a.setLanguage(a.language);
    });
    const o = P({
      get: () => a.getConfig(),
      set: (n) => {
        r.value && clearTimeout(r.value), a.updateExternal && (r.value = setTimeout(() => {
          a.setOption(n).getNextOption();
        }, 300));
      }
    }), i = P({
      get: () => a.overwrites.find((n) => n.code === a.product.code) || {},
      set: (n) => {
        a.overwrites.some((d) => d.code === a.product.code) ? a.overwrites = a.overwrites.map(
          (d) => d.code === a.product.code ? { ...d, ...n } : d
        ) : a.overwrites.push(n);
      }
    });
    return st(async () => {
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
      a.alert.title ? (y(), ee(k(Yr), Br(De({ key: 0 }, a.alert)), null, 16)) : H("", !0),
      q(k(Tv), {
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (d) => o.value = d),
        overwrites: i.value,
        "onUpdate:overwrites": l[1] || (l[1] = (d) => i.value = d),
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
}, dr = /* @__PURE__ */ Gv(Yv, [["styles", [Zv]]]), Xv = /* @__PURE__ */ kc({
  ...dr,
  setup(e, t) {
    return To(dr).use(Bc), Wt.autoDetectLanguage = !1, dr.setup ? dr.setup(e, t) : null;
  }
});
customElements.define("connect-configurator-editor", Xv);
