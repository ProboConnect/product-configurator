/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ci(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const xe = {}, Vo = [], gt = () => {
}, ol = () => !1, er = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ui = (e) => e.startsWith("onUpdate:"), Te = Object.assign, fi = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, sd = Object.prototype.hasOwnProperty, ke = (e, t) => sd.call(e, t), re = Array.isArray, Mo = (e) => ha(e) === "[object Map]", Lo = (e) => ha(e) === "[object Set]", Ni = (e) => ha(e) === "[object Date]", pe = (e) => typeof e == "function", Oe = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", $e = (e) => e !== null && typeof e == "object", al = (e) => ($e(e) || pe(e)) && pe(e.then) && pe(e.catch), rl = Object.prototype.toString, ha = (e) => rl.call(e), dd = (e) => ha(e).slice(8, -1), tr = (e) => ha(e) === "[object Object]", or = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Go = /* @__PURE__ */ ci(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, cd = /-\w/g, Re = ar(
  (e) => e.replace(cd, (t) => t.slice(1).toUpperCase())
), ud = /\B([A-Z])/g, Xe = ar(
  (e) => e.replace(ud, "-$1").toLowerCase()
), rr = ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), xr = ar(
  (e) => e ? `on${rr(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), Ea = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, il = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, ir = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fr = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Fi;
const nr = () => Fi || (Fi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
  if (re(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], r = Oe(a) ? md(a) : kt(a);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Oe(e) || $e(e))
    return e;
}
const fd = /;(?![^(]*\))/g, pd = /:([^]+)/, hd = /\/\*[^]*?\*\//g;
function md(e) {
  const t = {};
  return e.replace(hd, "").split(fd).forEach((o) => {
    if (o) {
      const a = o.split(pd);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ce(e) {
  let t = "";
  if (Oe(e))
    t = e;
  else if (re(e))
    for (let o = 0; o < e.length; o++) {
      const a = ce(e[o]);
      a && (t += a + " ");
    }
  else if ($e(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
function jo(e) {
  if (!e) return null;
  let { class: t, style: o } = e;
  return t && !Oe(t) && (e.class = ce(t)), o && (e.style = kt(o)), e;
}
const vd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gd = /* @__PURE__ */ ci(vd);
function nl(e) {
  return !!e || e === "";
}
function bd(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = ao(e[a], t[a]);
  return o;
}
function ao(e, t) {
  if (e === t) return !0;
  let o = Ni(e), a = Ni(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = xt(e), a = xt(t), o || a)
    return e === t;
  if (o = re(e), a = re(t), o || a)
    return o && a ? bd(e, t) : !1;
  if (o = $e(e), a = $e(t), o || a) {
    if (!o || !a)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const n in e) {
      const l = e.hasOwnProperty(n), s = t.hasOwnProperty(n);
      if (l && !s || !l && s || !ao(e[n], t[n]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function pi(e, t) {
  return e.findIndex((o) => ao(o, t));
}
const ll = (e) => !!(e && e.__v_isRef === !0), V = (e) => Oe(e) ? e : e == null ? "" : re(e) || $e(e) && (e.toString === rl || !pe(e.toString)) ? ll(e) ? V(e.value) : JSON.stringify(e, sl, 2) : String(e), sl = (e, t) => ll(t) ? sl(e, t.value) : Mo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, r], i) => (o[kr(a, i) + " =>"] = r, o),
    {}
  )
} : Lo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => kr(o))
} : xt(t) ? kr(t) : $e(t) && !re(t) && !tr(t) ? String(t) : t, kr = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xt(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
function yd(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let De;
class wd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = De, !t && De && (this.index = (De.scopes || (De.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = De;
      try {
        return De = this, t();
      } finally {
        De = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = De, De = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (De = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let o, a;
      for (o = 0, a = this.effects.length; o < a; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, a = this.cleanups.length; o < a; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, a = this.scopes.length; o < a; o++)
          this.scopes[o].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function hi() {
  return De;
}
function xd(e, t = !1) {
  De && De.cleanups.push(e);
}
let Ee;
const _r = /* @__PURE__ */ new WeakSet();
class dl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && De.active && De.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _r.has(this) && (_r.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ul(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Li(this), fl(this);
    const t = Ee, o = bt;
    Ee = this, bt = !0;
    try {
      return this.fn();
    } finally {
      pl(this), Ee = t, bt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gi(t);
      this.deps = this.depsTail = void 0, Li(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _r.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Lr(this) && this.run();
  }
  get dirty() {
    return Lr(this);
  }
}
let cl = 0, Jo, Yo;
function ul(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yo, Yo = e;
    return;
  }
  e.next = Jo, Jo = e;
}
function mi() {
  cl++;
}
function vi() {
  if (--cl > 0)
    return;
  if (Yo) {
    let t = Yo;
    for (Yo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Jo; ) {
    let t = Jo;
    for (Jo = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function fl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function pl(e) {
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const r = a.prevDep;
    a.version === -1 ? (a === o && (o = r), gi(a), kd(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = r;
  }
  e.deps = t, e.depsTail = o;
}
function Lr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ta) || (e.globalVersion = ta, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = Ee, a = bt;
  Ee = e, bt = !0;
  try {
    fl(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ye(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Ee = o, bt = a, pl(e), e.flags &= -3;
  }
}
function gi(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: r } = e;
  if (a && (a.nextSub = r, e.prevSub = void 0), r && (r.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      gi(i, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function kd(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let bt = !0;
const ml = [];
function Kt() {
  ml.push(bt), bt = !1;
}
function Wt() {
  const e = ml.pop();
  bt = e === void 0 ? !0 : e;
}
function Li(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = Ee;
    Ee = void 0;
    try {
      t();
    } finally {
      Ee = o;
    }
  }
}
let ta = 0;
class _d {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ee || !bt || Ee === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== Ee)
      o = this.activeLink = new _d(Ee, this), Ee.deps ? (o.prevDep = Ee.depsTail, Ee.depsTail.nextDep = o, Ee.depsTail = o) : Ee.deps = Ee.depsTail = o, vl(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = Ee.depsTail, o.nextDep = void 0, Ee.depsTail.nextDep = o, Ee.depsTail = o, Ee.deps === o && (Ee.deps = a);
    }
    return o;
  }
  trigger(t) {
    this.version++, ta++, this.notify(t);
  }
  notify(t) {
    mi();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      vi();
    }
  }
}
function vl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        vl(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Pa = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ Symbol(
  ""
), Rr = /* @__PURE__ */ Symbol(
  ""
), oa = /* @__PURE__ */ Symbol(
  ""
);
function Ne(e, t, o) {
  if (bt && Ee) {
    let a = Pa.get(e);
    a || Pa.set(e, a = /* @__PURE__ */ new Map());
    let r = a.get(o);
    r || (a.set(o, r = new lr()), r.map = a, r.key = o), r.track();
  }
}
function Ut(e, t, o, a, r, i) {
  const n = Pa.get(e);
  if (!n) {
    ta++;
    return;
  }
  const l = (s) => {
    s && s.trigger();
  };
  if (mi(), t === "clear")
    n.forEach(l);
  else {
    const s = re(e), c = s && or(o);
    if (s && o === "length") {
      const d = Number(a);
      n.forEach((u, f) => {
        (f === "length" || f === oa || !xt(f) && f >= d) && l(u);
      });
    } else
      switch ((o !== void 0 || n.has(void 0)) && l(n.get(o)), c && l(n.get(oa)), t) {
        case "add":
          s ? c && l(n.get("length")) : (l(n.get(yo)), Mo(e) && l(n.get(Rr)));
          break;
        case "delete":
          s || (l(n.get(yo)), Mo(e) && l(n.get(Rr)));
          break;
        case "set":
          Mo(e) && l(n.get(yo));
          break;
      }
  }
  vi();
}
function $d(e, t) {
  const o = Pa.get(e);
  return o && o.get(t);
}
function Co(e) {
  const t = /* @__PURE__ */ we(e);
  return t === e ? t : (Ne(t, "iterate", oa), /* @__PURE__ */ rt(e) ? t : t.map(_t));
}
function sr(e) {
  return Ne(e = /* @__PURE__ */ we(e), "iterate", oa), e;
}
function Qt(e, t) {
  return /* @__PURE__ */ jt(e) ? Do(/* @__PURE__ */ oo(e) ? _t(t) : t) : _t(t);
}
const Sd = {
  __proto__: null,
  [Symbol.iterator]() {
    return $r(this, Symbol.iterator, (e) => Qt(this, e));
  },
  concat(...e) {
    return Co(this).concat(
      ...e.map((t) => re(t) ? Co(t) : t)
    );
  },
  entries() {
    return $r(this, "entries", (e) => (e[1] = Qt(this, e[1]), e));
  },
  every(e, t) {
    return Nt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Nt(
      this,
      "filter",
      e,
      t,
      (o) => o.map((a) => Qt(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Nt(
      this,
      "find",
      e,
      t,
      (o) => Qt(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Nt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Nt(
      this,
      "findLast",
      e,
      t,
      (o) => Qt(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Nt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Nt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Sr(this, "includes", e);
  },
  indexOf(...e) {
    return Sr(this, "indexOf", e);
  },
  join(e) {
    return Co(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Sr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Nt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Uo(this, "pop");
  },
  push(...e) {
    return Uo(this, "push", e);
  },
  reduce(e, ...t) {
    return Ri(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ri(this, "reduceRight", e, t);
  },
  shift() {
    return Uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Nt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Uo(this, "splice", e);
  },
  toReversed() {
    return Co(this).toReversed();
  },
  toSorted(e) {
    return Co(this).toSorted(e);
  },
  toSpliced(...e) {
    return Co(this).toSpliced(...e);
  },
  unshift(...e) {
    return Uo(this, "unshift", e);
  },
  values() {
    return $r(this, "values", (e) => Qt(this, e));
  }
};
function $r(e, t, o) {
  const a = sr(e), r = a[t]();
  return a !== e && !/* @__PURE__ */ rt(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = o(i.value)), i;
  }), r;
}
const Cd = Array.prototype;
function Nt(e, t, o, a, r, i) {
  const n = sr(e), l = n !== e && !/* @__PURE__ */ rt(e), s = n[t];
  if (s !== Cd[t]) {
    const u = s.apply(e, i);
    return l ? _t(u) : u;
  }
  let c = o;
  n !== e && (l ? c = function(u, f) {
    return o.call(this, Qt(e, u), f, e);
  } : o.length > 2 && (c = function(u, f) {
    return o.call(this, u, f, e);
  }));
  const d = s.call(n, c, a);
  return l && r ? r(d) : d;
}
function Ri(e, t, o, a) {
  const r = sr(e);
  let i = o;
  return r !== e && (/* @__PURE__ */ rt(e) ? o.length > 3 && (i = function(n, l, s) {
    return o.call(this, n, l, s, e);
  }) : i = function(n, l, s) {
    return o.call(this, n, Qt(e, l), s, e);
  }), r[t](i, ...a);
}
function Sr(e, t, o) {
  const a = /* @__PURE__ */ we(e);
  Ne(a, "iterate", oa);
  const r = a[t](...o);
  return (r === -1 || r === !1) && /* @__PURE__ */ dr(o[0]) ? (o[0] = /* @__PURE__ */ we(o[0]), a[t](...o)) : r;
}
function Uo(e, t, o = []) {
  Kt(), mi();
  const a = (/* @__PURE__ */ we(e))[t].apply(e, o);
  return vi(), Wt(), a;
}
const Ad = /* @__PURE__ */ ci("__proto__,__v_isRef,__isVue"), gl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function Ed(e) {
  xt(e) || (e = String(e));
  const t = /* @__PURE__ */ we(this);
  return Ne(t, "has", e), t.hasOwnProperty(e);
}
class bl {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, a) {
    if (o === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (o === "__v_isReactive")
      return !r;
    if (o === "__v_isReadonly")
      return r;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return a === (r ? i ? Dd : kl : i ? xl : wl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const n = re(t);
    if (!r) {
      let s;
      if (n && (s = Sd[o]))
        return s;
      if (o === "hasOwnProperty")
        return Ed;
    }
    const l = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Me(t) ? t : a
    );
    if ((xt(o) ? gl.has(o) : Ad(o)) || (r || Ne(t, "get", o), i))
      return l;
    if (/* @__PURE__ */ Me(l)) {
      const s = n && or(o) ? l : l.value;
      return r && $e(s) ? /* @__PURE__ */ qr(s) : s;
    }
    return $e(l) ? r ? /* @__PURE__ */ qr(l) : /* @__PURE__ */ Pe(l) : l;
  }
}
class yl extends bl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, r) {
    let i = t[o];
    const n = re(t) && or(o);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ jt(i);
      if (!/* @__PURE__ */ rt(a) && !/* @__PURE__ */ jt(a) && (i = /* @__PURE__ */ we(i), a = /* @__PURE__ */ we(a)), !n && /* @__PURE__ */ Me(i) && !/* @__PURE__ */ Me(a))
        return c || (i.value = a), !0;
    }
    const l = n ? Number(o) < t.length : ke(t, o), s = Reflect.set(
      t,
      o,
      a,
      /* @__PURE__ */ Me(t) ? t : r
    );
    return t === /* @__PURE__ */ we(r) && (l ? Ye(a, i) && Ut(t, "set", o, a) : Ut(t, "add", o, a)), s;
  }
  deleteProperty(t, o) {
    const a = ke(t, o);
    t[o];
    const r = Reflect.deleteProperty(t, o);
    return r && a && Ut(t, "delete", o, void 0), r;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!xt(o) || !gl.has(o)) && Ne(t, "has", o), a;
  }
  ownKeys(t) {
    return Ne(
      t,
      "iterate",
      re(t) ? "length" : yo
    ), Reflect.ownKeys(t);
  }
}
class Td extends bl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return !0;
  }
  deleteProperty(t, o) {
    return !0;
  }
}
const Od = /* @__PURE__ */ new yl(), zd = /* @__PURE__ */ new Td(), Vd = /* @__PURE__ */ new yl(!0);
const Ur = (e) => e, wa = (e) => Reflect.getPrototypeOf(e);
function Md(e, t, o) {
  return function(...a) {
    const r = this.__v_raw, i = /* @__PURE__ */ we(r), n = Mo(i), l = e === "entries" || e === Symbol.iterator && n, s = e === "keys" && n, c = r[e](...a), d = o ? Ur : t ? Do : _t;
    return !t && Ne(
      i,
      "iterate",
      s ? Rr : yo
    ), Te(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : {
            value: l ? [d(u[0]), d(u[1])] : d(u),
            done: f
          };
        }
      }
    );
  };
}
function xa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Bd(e, t) {
  const o = {
    get(r) {
      const i = this.__v_raw, n = /* @__PURE__ */ we(i), l = /* @__PURE__ */ we(r);
      e || (Ye(r, l) && Ne(n, "get", r), Ne(n, "get", l));
      const { has: s } = wa(n), c = t ? Ur : e ? Do : _t;
      if (s.call(n, r))
        return c(i.get(r));
      if (s.call(n, l))
        return c(i.get(l));
      i !== n && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ne(/* @__PURE__ */ we(r), "iterate", yo), r.size;
    },
    has(r) {
      const i = this.__v_raw, n = /* @__PURE__ */ we(i), l = /* @__PURE__ */ we(r);
      return e || (Ye(r, l) && Ne(n, "has", r), Ne(n, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const n = this, l = n.__v_raw, s = /* @__PURE__ */ we(l), c = t ? Ur : e ? Do : _t;
      return !e && Ne(s, "iterate", yo), l.forEach((d, u) => r.call(i, c(d), c(u), n));
    }
  };
  return Te(
    o,
    e ? {
      add: xa("add"),
      set: xa("set"),
      delete: xa("delete"),
      clear: xa("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ rt(r) && !/* @__PURE__ */ jt(r) && (r = /* @__PURE__ */ we(r));
        const i = /* @__PURE__ */ we(this);
        return wa(i).has.call(i, r) || (i.add(r), Ut(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ rt(i) && !/* @__PURE__ */ jt(i) && (i = /* @__PURE__ */ we(i));
        const n = /* @__PURE__ */ we(this), { has: l, get: s } = wa(n);
        let c = l.call(n, r);
        c || (r = /* @__PURE__ */ we(r), c = l.call(n, r));
        const d = s.call(n, r);
        return n.set(r, i), c ? Ye(i, d) && Ut(n, "set", r, i) : Ut(n, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ we(this), { has: n, get: l } = wa(i);
        let s = n.call(i, r);
        s || (r = /* @__PURE__ */ we(r), s = n.call(i, r)), l && l.call(i, r);
        const c = i.delete(r);
        return s && Ut(i, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ we(this), i = r.size !== 0, n = r.clear();
        return i && Ut(
          r,
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
  ].forEach((r) => {
    o[r] = Md(r, e, t);
  }), o;
}
function bi(e, t) {
  const o = Bd(e, t);
  return (a, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? a : Reflect.get(
    ke(o, r) && r in a ? o : a,
    r,
    i
  );
}
const Pd = {
  get: /* @__PURE__ */ bi(!1, !1)
}, Id = {
  get: /* @__PURE__ */ bi(!1, !0)
}, jd = {
  get: /* @__PURE__ */ bi(!0, !1)
};
const wl = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap();
function Nd(e) {
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
function Fd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Nd(dd(e));
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return /* @__PURE__ */ jt(e) ? e : yi(
    e,
    !1,
    Od,
    Pd,
    wl
  );
}
// @__NO_SIDE_EFFECTS__
function Ld(e) {
  return yi(
    e,
    !1,
    Vd,
    Id,
    xl
  );
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return yi(
    e,
    !0,
    zd,
    jd,
    kl
  );
}
function yi(e, t, o, a, r) {
  if (!$e(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Fd(e);
  if (i === 0)
    return e;
  const n = r.get(e);
  if (n)
    return n;
  const l = new Proxy(
    e,
    i === 2 ? a : o
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function oo(e) {
  return /* @__PURE__ */ jt(e) ? /* @__PURE__ */ oo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ we(t) : e;
}
function Rd(e) {
  return !ke(e, "__v_skip") && Object.isExtensible(e) && il(e, "__v_skip", !0), e;
}
const _t = (e) => $e(e) ? /* @__PURE__ */ Pe(e) : e, Do = (e) => $e(e) ? /* @__PURE__ */ qr(e) : e;
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
  return _l(e, !1);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
  return _l(e, !0);
}
function _l(e, t) {
  return /* @__PURE__ */ Me(e) ? e : new Ud(e, t);
}
class Ud {
  constructor(t, o) {
    this.dep = new lr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : /* @__PURE__ */ we(t), this._value = o ? t : _t(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ rt(t) || /* @__PURE__ */ jt(t);
    t = a ? t : /* @__PURE__ */ we(t), Ye(t, o) && (this._rawValue = t, this._value = a ? t : _t(t), this.dep.trigger());
  }
}
function Ui(e) {
  e.dep && e.dep.trigger();
}
function y(e) {
  return /* @__PURE__ */ Me(e) ? e.value : e;
}
function ut(e) {
  return pe(e) ? e() : y(e);
}
const qd = {
  get: (e, t, o) => t === "__v_raw" ? e : y(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const r = e[t];
    return /* @__PURE__ */ Me(r) && !/* @__PURE__ */ Me(o) ? (r.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function $l(e) {
  return /* @__PURE__ */ oo(e) ? e : new Proxy(e, qd);
}
class Hd {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const o = this.dep = new lr(), { get: a, set: r } = t(o.track.bind(o), o.trigger.bind(o));
    this._get = a, this._set = r;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Kd(e) {
  return new Hd(e);
}
// @__NO_SIDE_EFFECTS__
function Wd(e) {
  const t = re(e) ? new Array(e.length) : {};
  for (const o in e)
    t[o] = Gd(e, o);
  return t;
}
class Zd {
  constructor(t, o, a) {
    this._object = t, this._key = o, this._defaultValue = a, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ we(t);
    let r = !0, i = t;
    if (!re(t) || !or(String(o)))
      do
        r = !/* @__PURE__ */ dr(i) || /* @__PURE__ */ rt(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = y(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Me(this._raw[this._key])) {
      const o = this._object[this._key];
      if (/* @__PURE__ */ Me(o)) {
        o.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return $d(this._raw, this._key);
  }
}
function Gd(e, t, o) {
  return new Zd(e, t, o);
}
class Jd {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new lr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ta - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ee !== this)
      return ul(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Yd(e, t, o = !1) {
  let a, r;
  return pe(e) ? a = e : (a = e.get, r = e.set), new Jd(a, r, o);
}
const ka = {}, Ia = /* @__PURE__ */ new WeakMap();
let mo;
function Xd(e, t = !1, o = mo) {
  if (o) {
    let a = Ia.get(o);
    a || Ia.set(o, a = []), a.push(e);
  }
}
function Qd(e, t, o = xe) {
  const { immediate: a, deep: r, once: i, scheduler: n, augmentJob: l, call: s } = o, c = (b) => r ? b : /* @__PURE__ */ rt(b) || r === !1 || r === 0 ? qt(b, 1) : qt(b);
  let d, u, f, p, h = !1, m = !1;
  if (/* @__PURE__ */ Me(e) ? (u = () => e.value, h = /* @__PURE__ */ rt(e)) : /* @__PURE__ */ oo(e) ? (u = () => c(e), h = !0) : re(e) ? (m = !0, h = e.some((b) => /* @__PURE__ */ oo(b) || /* @__PURE__ */ rt(b)), u = () => e.map((b) => {
    if (/* @__PURE__ */ Me(b))
      return b.value;
    if (/* @__PURE__ */ oo(b))
      return c(b);
    if (pe(b))
      return s ? s(b, 2) : b();
  })) : pe(e) ? t ? u = s ? () => s(e, 2) : e : u = () => {
    if (f) {
      Kt();
      try {
        f();
      } finally {
        Wt();
      }
    }
    const b = mo;
    mo = d;
    try {
      return s ? s(e, 3, [p]) : e(p);
    } finally {
      mo = b;
    }
  } : u = gt, t && r) {
    const b = u, C = r === !0 ? 1 / 0 : r;
    u = () => qt(b(), C);
  }
  const w = hi(), x = () => {
    d.stop(), w && w.active && fi(w.effects, d);
  };
  if (i && t) {
    const b = t;
    t = (...C) => {
      b(...C), x();
    };
  }
  let _ = m ? new Array(e.length).fill(ka) : ka;
  const $ = (b) => {
    if (!(!(d.flags & 1) || !d.dirty && !b))
      if (t) {
        const C = d.run();
        if (r || h || (m ? C.some((A, K) => Ye(A, _[K])) : Ye(C, _))) {
          f && f();
          const A = mo;
          mo = d;
          try {
            const K = [
              C,
              // pass undefined as the old value when it's changed for the first time
              _ === ka ? void 0 : m && _[0] === ka ? [] : _,
              p
            ];
            _ = C, s ? s(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            mo = A;
          }
        }
      } else
        d.run();
  };
  return l && l($), d = new dl(u), d.scheduler = n ? () => n($, !1) : $, p = (b) => Xd(b, !1, d), f = d.onStop = () => {
    const b = Ia.get(d);
    if (b) {
      if (s)
        s(b, 4);
      else
        for (const C of b) C();
      Ia.delete(d);
    }
  }, t ? a ? $(!0) : _ = d.run() : n ? n($.bind(null, !0), !0) : d.run(), x.pause = d.pause.bind(d), x.resume = d.resume.bind(d), x.stop = x, x;
}
function qt(e, t = 1 / 0, o) {
  if (t <= 0 || !$e(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, /* @__PURE__ */ Me(e))
    qt(e.value, t, o);
  else if (re(e))
    for (let a = 0; a < e.length; a++)
      qt(e[a], t, o);
  else if (Lo(e) || Mo(e))
    e.forEach((a) => {
      qt(a, t, o);
    });
  else if (tr(e)) {
    for (const a in e)
      qt(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && qt(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ma(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (r) {
    cr(r, t, o);
  }
}
function $t(e, t, o, a) {
  if (pe(e)) {
    const r = ma(e, t, o, a);
    return r && al(r) && r.catch((i) => {
      cr(i, t, o);
    }), r;
  }
  if (re(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push($t(e[i], t, o, a));
    return r;
  }
}
function cr(e, t, o, a = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: n } = t && t.appContext.config || xe;
  if (t) {
    let l = t.parent;
    const s = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, s, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Kt(), ma(i, null, 10, [
        e,
        s,
        c
      ]), Wt();
      return;
    }
  }
  ec(e, o, r, a, n);
}
function ec(e, t, o, a = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const qe = [];
let zt = -1;
const Bo = [];
let eo = null, Oo = 0;
const Sl = /* @__PURE__ */ Promise.resolve();
let ja = null;
function it(e) {
  const t = ja || Sl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tc(e) {
  let t = zt + 1, o = qe.length;
  for (; t < o; ) {
    const a = t + o >>> 1, r = qe[a], i = aa(r);
    i < e || i === e && r.flags & 2 ? t = a + 1 : o = a;
  }
  return t;
}
function wi(e) {
  if (!(e.flags & 1)) {
    const t = aa(e), o = qe[qe.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= aa(o) ? qe.push(e) : qe.splice(tc(t), 0, e), e.flags |= 1, Cl();
  }
}
function Cl() {
  ja || (ja = Sl.then(Tl));
}
function Al(e) {
  re(e) ? Bo.push(...e) : eo && e.id === -1 ? eo.splice(Oo + 1, 0, e) : e.flags & 1 || (Bo.push(e), e.flags |= 1), Cl();
}
function qi(e, t, o = zt + 1) {
  for (; o < qe.length; o++) {
    const a = qe[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      qe.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function El(e) {
  if (Bo.length) {
    const t = [...new Set(Bo)].sort(
      (o, a) => aa(o) - aa(a)
    );
    if (Bo.length = 0, eo) {
      eo.push(...t);
      return;
    }
    for (eo = t, Oo = 0; Oo < eo.length; Oo++) {
      const o = eo[Oo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    eo = null, Oo = 0;
  }
}
const aa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Tl(e) {
  try {
    for (zt = 0; zt < qe.length; zt++) {
      const t = qe[zt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ma(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zt < qe.length; zt++) {
      const t = qe[zt];
      t && (t.flags &= -2);
    }
    zt = -1, qe.length = 0, El(), ja = null, (qe.length || Bo.length) && Tl();
  }
}
let je = null, Ol = null;
function Da(e) {
  const t = je;
  return je = e, Ol = e && e.type.__scopeId || null, t;
}
function O(e, t = je, o) {
  if (!t || e._n)
    return e;
  const a = (...r) => {
    a._d && Ua(-1);
    const i = Da(t);
    let n;
    try {
      n = e(...r);
    } finally {
      Da(i), a._d && Ua(1);
    }
    return n;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function xo(e, t) {
  if (je === null)
    return e;
  const o = gr(je), a = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, n, l, s = xe] = t[r];
    i && (pe(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && qt(n), a.push({
      dir: i,
      instance: o,
      value: n,
      oldValue: void 0,
      arg: l,
      modifiers: s
    }));
  }
  return e;
}
function uo(e, t, o, a) {
  const r = e.dirs, i = t && t.dirs;
  for (let n = 0; n < r.length; n++) {
    const l = r[n];
    i && (l.oldValue = i[n].value);
    let s = l.dir[a];
    s && (Kt(), $t(s, o, 8, [
      e.el,
      l,
      e,
      t
    ]), Wt());
  }
}
function Na(e, t) {
  if (Le) {
    let o = Le.provides;
    const a = Le.parent && Le.parent.provides;
    a === o && (o = Le.provides = Object.create(a)), o[e] = t;
  }
}
function yt(e, t, o = !1) {
  const a = ht();
  if (a || wo) {
    let r = wo ? wo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return o && pe(t) ? t.call(a && a.proxy) : t;
  }
}
function zl() {
  return !!(ht() || wo);
}
const oc = /* @__PURE__ */ Symbol.for("v-scx"), ac = () => yt(oc);
function xi(e, t) {
  return ur(e, null, t);
}
function rc(e, t) {
  return ur(
    e,
    null,
    { flush: "sync" }
  );
}
function ue(e, t, o) {
  return ur(e, t, o);
}
function ur(e, t, o = xe) {
  const { immediate: a, deep: r, flush: i, once: n } = o, l = Te({}, o), s = t && a || !t && i !== "post";
  let c;
  if (la) {
    if (i === "sync") {
      const p = ac();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!s) {
      const p = () => {
      };
      return p.stop = gt, p.resume = gt, p.pause = gt, p;
    }
  }
  const d = Le;
  l.call = (p, h, m) => $t(p, d, h, m);
  let u = !1;
  i === "post" ? l.scheduler = (p) => {
    Je(p, d && d.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (p, h) => {
    h ? p() : wi(p);
  }), l.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const f = Qd(e, t, l);
  return la && (c ? c.push(f) : s && f()), f;
}
function ic(e, t, o) {
  const a = this.proxy, r = Oe(e) ? e.includes(".") ? Vl(a, e) : () => a[e] : e.bind(a, a);
  let i;
  pe(t) ? i = t : (i = t.handler, o = t);
  const n = va(this), l = ur(r, i.bind(a), o);
  return n(), l;
}
function Vl(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let r = 0; r < o.length && a; r++)
      a = a[o[r]];
    return a;
  };
}
const nc = /* @__PURE__ */ Symbol("_vte"), Ml = (e) => e.__isTeleport, Vt = /* @__PURE__ */ Symbol("_leaveCb"), qo = /* @__PURE__ */ Symbol("_enterCb");
function lc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return et(() => {
    e.isMounted = !0;
  }), $o(() => {
    e.isUnmounting = !0;
  }), e;
}
const nt = [Function, Array], Bl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: nt,
  onEnter: nt,
  onAfterEnter: nt,
  onEnterCancelled: nt,
  // leave
  onBeforeLeave: nt,
  onLeave: nt,
  onAfterLeave: nt,
  onLeaveCancelled: nt,
  // appear
  onBeforeAppear: nt,
  onAppear: nt,
  onAfterAppear: nt,
  onAppearCancelled: nt
}, Pl = (e) => {
  const t = e.subTree;
  return t.component ? Pl(t.component) : t;
}, sc = {
  name: "BaseTransition",
  props: Bl,
  setup(e, { slots: t }) {
    const o = ht(), a = lc();
    return () => {
      const r = t.default && Dl(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = Il(r), n = /* @__PURE__ */ we(e), { mode: l } = n;
      if (a.isLeaving)
        return Cr(i);
      const s = Hi(i);
      if (!s)
        return Cr(i);
      let c = Hr(
        s,
        n,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      s.type !== Fe && ra(s, c);
      let d = o.subTree && Hi(o.subTree);
      if (d && d.type !== Fe && !vo(d, s) && Pl(o).type !== Fe) {
        let u = Hr(
          d,
          n,
          a,
          o
        );
        if (ra(d, u), l === "out-in" && s.type !== Fe)
          return a.isLeaving = !0, u.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete u.afterLeave, d = void 0;
          }, Cr(i);
        l === "in-out" && s.type !== Fe ? u.delayLeave = (f, p, h) => {
          const m = jl(
            a,
            d
          );
          m[String(d.key)] = d, f[Vt] = () => {
            p(), f[Vt] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            h(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function Il(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Fe) {
        t = o;
        break;
      }
  }
  return t;
}
const dc = sc;
function jl(e, t) {
  const { leavingVNodes: o } = e;
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function Hr(e, t, o, a, r) {
  const {
    appear: i,
    mode: n,
    persisted: l = !1,
    onBeforeEnter: s,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: h,
    onLeaveCancelled: m,
    onBeforeAppear: w,
    onAppear: x,
    onAfterAppear: _,
    onAppearCancelled: $
  } = t, b = String(e.key), C = jl(o, e), A = (j, T) => {
    j && $t(
      j,
      a,
      9,
      T
    );
  }, K = (j, T) => {
    const D = T[1];
    A(j, T), re(j) ? j.every((z) => z.length <= 1) && D() : j.length <= 1 && D();
  }, Z = {
    mode: n,
    persisted: l,
    beforeEnter(j) {
      let T = s;
      if (!o.isMounted)
        if (i)
          T = w || s;
        else
          return;
      j[Vt] && j[Vt](
        !0
        /* cancelled */
      );
      const D = C[b];
      D && vo(e, D) && D.el[Vt] && D.el[Vt](), A(T, [j]);
    },
    enter(j) {
      if (C[b] === e) return;
      let T = c, D = d, z = u;
      if (!o.isMounted)
        if (i)
          T = x || c, D = _ || d, z = $ || u;
        else
          return;
      let M = !1;
      j[qo] = (P) => {
        M || (M = !0, P ? A(z, [j]) : A(D, [j]), Z.delayedLeave && Z.delayedLeave(), j[qo] = void 0);
      };
      const G = j[qo].bind(null, !1);
      T ? K(T, [j, G]) : G();
    },
    leave(j, T) {
      const D = String(e.key);
      if (j[qo] && j[qo](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return T();
      A(f, [j]);
      let z = !1;
      j[Vt] = (G) => {
        z || (z = !0, T(), G ? A(m, [j]) : A(h, [j]), j[Vt] = void 0, C[D] === e && delete C[D]);
      };
      const M = j[Vt].bind(null, !1);
      C[D] = e, p ? K(p, [j, M]) : M();
    },
    clone(j) {
      const T = Hr(
        j,
        t,
        o,
        a,
        r
      );
      return r && r(T), T;
    }
  };
  return Z;
}
function Cr(e) {
  if (fr(e))
    return e = io(e), e.children = null, e;
}
function Hi(e) {
  if (!fr(e))
    return Ml(e.type) && e.children ? Il(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && pe(o.default))
      return o.default();
  }
}
function ra(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ra(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Dl(e, t = !1, o) {
  let a = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    const l = o == null ? n.key : String(o) + String(n.key != null ? n.key : i);
    n.type === be ? (n.patchFlag & 128 && r++, a = a.concat(
      Dl(n.children, t, l)
    )) : (t || n.type !== Fe) && a.push(l != null ? io(n, { key: l }) : n);
  }
  if (r > 1)
    for (let i = 0; i < a.length; i++)
      a[i].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function cc(e, t) {
  return pe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function Nl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Bt(e) {
  const t = ht(), o = /* @__PURE__ */ It(null);
  if (t) {
    const r = t.refs === xe ? t.refs = {} : t.refs;
    Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    });
  }
  return o;
}
function Ki(e, t) {
  let o;
  return !!((o = Object.getOwnPropertyDescriptor(e, t)) && !o.configurable);
}
const Fa = /* @__PURE__ */ new WeakMap();
function Xo(e, t, o, a, r = !1) {
  if (re(e)) {
    e.forEach(
      (m, w) => Xo(
        m,
        t && (re(t) ? t[w] : t),
        o,
        a,
        r
      )
    );
    return;
  }
  if (Po(a) && !r) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Xo(e, t, o, a.component.subTree);
    return;
  }
  const i = a.shapeFlag & 4 ? gr(a.component) : a.el, n = r ? null : i, { i: l, r: s } = e, c = t && t.r, d = l.refs === xe ? l.refs = {} : l.refs, u = l.setupState, f = /* @__PURE__ */ we(u), p = u === xe ? ol : (m) => Ki(d, m) ? !1 : ke(f, m), h = (m, w) => !(w && Ki(d, w));
  if (c != null && c !== s) {
    if (Wi(t), Oe(c))
      d[c] = null, p(c) && (u[c] = null);
    else if (/* @__PURE__ */ Me(c)) {
      const m = t;
      h(c, m.k) && (c.value = null), m.k && (d[m.k] = null);
    }
  }
  if (pe(s))
    ma(s, l, 12, [n, d]);
  else {
    const m = Oe(s), w = /* @__PURE__ */ Me(s);
    if (m || w) {
      const x = () => {
        if (e.f) {
          const _ = m ? p(s) ? u[s] : d[s] : h() || !e.k ? s.value : d[e.k];
          if (r)
            re(_) && fi(_, i);
          else if (re(_))
            _.includes(i) || _.push(i);
          else if (m)
            d[s] = [i], p(s) && (u[s] = d[s]);
          else {
            const $ = [i];
            h(s, e.k) && (s.value = $), e.k && (d[e.k] = $);
          }
        } else m ? (d[s] = n, p(s) && (u[s] = n)) : w && (h(s, e.k) && (s.value = n), e.k && (d[e.k] = n));
      };
      if (n) {
        const _ = () => {
          x(), Fa.delete(e);
        };
        _.id = -1, Fa.set(e, _), Je(_, o);
      } else
        Wi(e), x();
    }
  }
}
function Wi(e) {
  const t = Fa.get(e);
  t && (t.flags |= 8, Fa.delete(e));
}
nr().requestIdleCallback;
nr().cancelIdleCallback;
const Po = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function uc(e, t) {
  Fl(e, "a", t);
}
function fc(e, t) {
  Fl(e, "da", t);
}
function Fl(e, t, o = Le) {
  const a = e.__wdc || (e.__wdc = () => {
    let r = o;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (pr(t, a, o), o) {
    let r = o.parent;
    for (; r && r.parent; )
      fr(r.parent.vnode) && pc(a, t, o, r), r = r.parent;
  }
}
function pc(e, t, o, a) {
  const r = pr(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  So(() => {
    fi(a[t], r);
  }, o);
}
function pr(e, t, o = Le, a = !1) {
  if (o) {
    const r = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...n) => {
      Kt();
      const l = va(o), s = $t(t, o, e, n);
      return l(), Wt(), s;
    });
    return a ? r.unshift(i) : r.push(i), i;
  }
}
const Jt = (e) => (t, o = Le) => {
  (!la || e === "sp") && pr(e, (...a) => t(...a), o);
}, Ll = Jt("bm"), et = Jt("m"), Rl = Jt(
  "bu"
), hc = Jt("u"), $o = Jt(
  "bum"
), So = Jt("um"), mc = Jt(
  "sp"
), vc = Jt("rtg"), gc = Jt("rtc");
function bc(e, t = Le) {
  pr("ec", e, t);
}
const yc = "components", Ul = /* @__PURE__ */ Symbol.for("v-ndc");
function No(e) {
  return Oe(e) ? wc(yc, e, !1) || e : e || Ul;
}
function wc(e, t, o = !0, a = !1) {
  const r = je || Le;
  if (r) {
    const i = r.type;
    {
      const l = tu(
        i,
        !1
      );
      if (l && (l === t || l === Re(t) || l === rr(Re(t))))
        return i;
    }
    const n = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zi(r[e] || i[e], t) || // global registration
      Zi(r.appContext[e], t)
    );
    return !n && a ? i : n;
  }
}
function Zi(e, t) {
  return e && (e[t] || e[Re(t)] || e[rr(Re(t))]);
}
function ro(e, t, o, a) {
  let r;
  const i = o, n = re(e);
  if (n || Oe(e)) {
    const l = n && /* @__PURE__ */ oo(e);
    let s = !1, c = !1;
    l && (s = !/* @__PURE__ */ rt(e), c = /* @__PURE__ */ jt(e), e = sr(e)), r = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      r[d] = t(
        s ? c ? Do(_t(e[d])) : _t(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if ($e(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, s) => t(l, s, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let s = 0, c = l.length; s < c; s++) {
        const d = l[s];
        r[s] = t(e[d], d, s, i);
      }
    }
  else
    r = [];
  return r;
}
function Ar(e, t) {
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (re(a))
      for (let r = 0; r < a.length; r++)
        e[a[r].name] = a[r].fn;
    else a && (e[a.name] = a.key ? (...r) => {
      const i = a.fn(...r);
      return i && (i.key = a.key), i;
    } : a.fn);
  }
  return e;
}
function ie(e, t, o = {}, a, r) {
  if (je.ce || je.parent && Po(je.parent) && je.parent.ce) {
    const c = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), v(), Y(
      be,
      null,
      [U("slot", o, a && a())],
      c ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), v();
  const n = i && ql(i(o)), l = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  n && n.key, s = Y(
    be,
    {
      key: (l && !xt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!n && a ? "_fb" : "")
    },
    n || (a ? a() : []),
    n && e._ === 1 ? 64 : -2
  );
  return !r && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s;
}
function ql(e) {
  return e.some((t) => na(t) ? !(t.type === Fe || t.type === be && !ql(t.children)) : !0) ? e : null;
}
const Kr = (e) => e ? ps(e) ? gr(e) : Kr(e.parent) : null, Qo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Kr(e.parent),
    $root: (e) => Kr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = it.bind(e.proxy)),
    $watch: (e) => ic.bind(e)
  })
), Er = (e, t) => e !== xe && !e.__isScriptSetup && ke(e, t), xc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: r, props: i, accessCache: n, type: l, appContext: s } = e;
    if (t[0] !== "$") {
      const f = n[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return a[t];
          case 2:
            return r[t];
          case 4:
            return o[t];
          case 3:
            return i[t];
        }
      else {
        if (Er(a, t))
          return n[t] = 1, a[t];
        if (r !== xe && ke(r, t))
          return n[t] = 2, r[t];
        if (ke(i, t))
          return n[t] = 3, i[t];
        if (o !== xe && ke(o, t))
          return n[t] = 4, o[t];
        Wr && (n[t] = 0);
      }
    }
    const c = Qo[t];
    let d, u;
    if (c)
      return t === "$attrs" && Ne(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (o !== xe && ke(o, t))
      return n[t] = 4, o[t];
    if (
      // global properties
      u = s.config.globalProperties, ke(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: r, ctx: i } = e;
    return Er(r, t) ? (r[t] = o, !0) : a !== xe && ke(a, t) ? (a[t] = o, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: r, props: i, type: n }
  }, l) {
    let s;
    return !!(o[l] || e !== xe && l[0] !== "$" && ke(e, l) || Er(t, l) || ke(i, l) || ke(a, l) || ke(Qo, l) || ke(r.config.globalProperties, l) || (s = n.__cssModules) && s[l]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ke(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Hl() {
  return Kl().slots;
}
function kc() {
  return Kl().attrs;
}
function Kl(e) {
  const t = ht();
  return t.setupContext || (t.setupContext = ms(t));
}
function La(e) {
  return re(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function pt(e, t) {
  return !e || !t ? e || t : re(e) && re(t) ? e.concat(t) : Te({}, La(e), La(t));
}
let Wr = !0;
function _c(e) {
  const t = Zl(e), o = e.proxy, a = e.ctx;
  Wr = !1, t.beforeCreate && Gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: n,
    watch: l,
    provide: s,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: p,
    updated: h,
    activated: m,
    deactivated: w,
    beforeDestroy: x,
    beforeUnmount: _,
    destroyed: $,
    unmounted: b,
    render: C,
    renderTracked: A,
    renderTriggered: K,
    errorCaptured: Z,
    serverPrefetch: j,
    // public API
    expose: T,
    inheritAttrs: D,
    // assets
    components: z,
    directives: M,
    filters: G
  } = t;
  if (c && $c(c, a, null), n)
    for (const de in n) {
      const le = n[de];
      pe(le) && (a[de] = le.bind(o));
    }
  if (r) {
    const de = r.call(o, o);
    $e(de) && (e.data = /* @__PURE__ */ Pe(de));
  }
  if (Wr = !0, i)
    for (const de in i) {
      const le = i[de], We = pe(le) ? le.bind(o, o) : pe(le.get) ? le.get.bind(o, o) : gt, Ce = !pe(le) && pe(le.set) ? le.set.bind(o) : gt, Ie = I({
        get: We,
        set: Ce
      });
      Object.defineProperty(a, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Ve) => Ie.value = Ve
      });
    }
  if (l)
    for (const de in l)
      Wl(l[de], a, o, de);
  if (s) {
    const de = pe(s) ? s.call(o) : s;
    Reflect.ownKeys(de).forEach((le) => {
      Na(le, de[le]);
    });
  }
  d && Gi(d, e, "c");
  function Q(de, le) {
    re(le) ? le.forEach((We) => de(We.bind(o))) : le && de(le.bind(o));
  }
  if (Q(Ll, u), Q(et, f), Q(Rl, p), Q(hc, h), Q(uc, m), Q(fc, w), Q(bc, Z), Q(gc, A), Q(vc, K), Q($o, _), Q(So, b), Q(mc, j), re(T))
    if (T.length) {
      const de = e.exposed || (e.exposed = {});
      T.forEach((le) => {
        Object.defineProperty(de, le, {
          get: () => o[le],
          set: (We) => o[le] = We,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === gt && (e.render = C), D != null && (e.inheritAttrs = D), z && (e.components = z), M && (e.directives = M), j && Nl(e);
}
function $c(e, t, o = gt) {
  re(e) && (e = Zr(e));
  for (const a in e) {
    const r = e[a];
    let i;
    $e(r) ? "default" in r ? i = yt(
      r.from || a,
      r.default,
      !0
    ) : i = yt(r.from || a) : i = yt(r), /* @__PURE__ */ Me(i) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (n) => i.value = n
    }) : t[a] = i;
  }
}
function Gi(e, t, o) {
  $t(
    re(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Wl(e, t, o, a) {
  let r = a.includes(".") ? Vl(o, a) : () => o[a];
  if (Oe(e)) {
    const i = t[e];
    pe(i) && ue(r, i);
  } else if (pe(e))
    ue(r, e.bind(o));
  else if ($e(e))
    if (re(e))
      e.forEach((i) => Wl(i, t, o, a));
    else {
      const i = pe(e.handler) ? e.handler.bind(o) : t[e.handler];
      pe(i) && ue(r, i, e);
    }
}
function Zl(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: n }
  } = e.appContext, l = i.get(t);
  let s;
  return l ? s = l : !r.length && !o && !a ? s = t : (s = {}, r.length && r.forEach(
    (c) => Ra(s, c, n, !0)
  ), Ra(s, t, n)), $e(t) && i.set(t, s), s;
}
function Ra(e, t, o, a = !1) {
  const { mixins: r, extends: i } = t;
  i && Ra(e, i, o, !0), r && r.forEach(
    (n) => Ra(e, n, o, !0)
  );
  for (const n in t)
    if (!(a && n === "expose")) {
      const l = Sc[n] || o && o[n];
      e[n] = l ? l(e[n], t[n]) : t[n];
    }
  return e;
}
const Sc = {
  data: Ji,
  props: Yi,
  emits: Yi,
  // objects
  methods: Wo,
  computed: Wo,
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
  components: Wo,
  directives: Wo,
  // watch
  watch: Ac,
  // provide / inject
  provide: Ji,
  inject: Cc
};
function Ji(e, t) {
  return t ? e ? function() {
    return Te(
      pe(e) ? e.call(this, this) : e,
      pe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Cc(e, t) {
  return Wo(Zr(e), Zr(t));
}
function Zr(e) {
  if (re(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wo(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yi(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    La(e),
    La(t ?? {})
  ) : t;
}
function Ac(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Te(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = Ue(e[a], t[a]);
  return o;
}
function Gl() {
  return {
    app: null,
    config: {
      isNativeTag: ol,
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
let Ec = 0;
function Tc(e, t) {
  return function(a, r = null) {
    pe(a) || (a = Te({}, a)), r != null && !$e(r) && (r = null);
    const i = Gl(), n = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const c = i.app = {
      _uid: Ec++,
      _component: a,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: au,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return n.has(d) || (d && pe(d.install) ? (n.add(d), d.install(c, ...u)) : pe(d) && (n.add(d), d(c, ...u))), c;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), c;
      },
      component(d, u) {
        return u ? (i.components[d] = u, c) : i.components[d];
      },
      directive(d, u) {
        return u ? (i.directives[d] = u, c) : i.directives[d];
      },
      mount(d, u, f) {
        if (!s) {
          const p = c._ceVNode || U(a, r);
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, d, f), s = !0, c._container = d, d.__vue_app__ = c, gr(p.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        s && ($t(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return i.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = wo;
        wo = c;
        try {
          return d();
        } finally {
          wo = u;
        }
      }
    };
    return c;
  };
}
let wo = null;
function Qe(e, t, o = xe) {
  const a = ht(), r = Re(t), i = Xe(t), n = Jl(e, r), l = Kd((s, c) => {
    let d, u = xe, f;
    return rc(() => {
      const p = e[r];
      Ye(d, p) && (d = p, c());
    }), {
      get() {
        return s(), o.get ? o.get(d) : d;
      },
      set(p) {
        const h = o.set ? o.set(p) : p;
        if (!Ye(h, d) && !(u !== xe && Ye(p, u)))
          return;
        const m = a.vnode.props;
        m && // check if parent has passed v-model
        (t in m || r in m || i in m) && (`onUpdate:${t}` in m || `onUpdate:${r}` in m || `onUpdate:${i}` in m) || (d = p, c()), a.emit(`update:${t}`, h), Ye(p, h) && Ye(p, u) && !Ye(h, f) && c(), u = p, f = h;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let s = 0;
    return {
      next() {
        return s < 2 ? { value: s++ ? n || xe : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const Jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Re(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function Oc(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || xe;
  let r = o;
  const i = t.startsWith("update:"), n = i && Jl(a, t.slice(7));
  n && (n.trim && (r = o.map((d) => Oe(d) ? d.trim() : d)), n.number && (r = o.map(ir)));
  let l, s = a[l = xr(t)] || // also try camelCase event handler (#2249)
  a[l = xr(Re(t))];
  !s && i && (s = a[l = xr(Xe(t))]), s && $t(
    s,
    e,
    6,
    r
  );
  const c = a[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, $t(
      c,
      e,
      6,
      r
    );
  }
}
const zc = /* @__PURE__ */ new WeakMap();
function Yl(e, t, o = !1) {
  const a = o ? zc : t.emitsCache, r = a.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let n = {}, l = !1;
  if (!pe(e)) {
    const s = (c) => {
      const d = Yl(c, t, !0);
      d && (l = !0, Te(n, d));
    };
    !o && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !l ? ($e(e) && a.set(e, null), null) : (re(i) ? i.forEach((s) => n[s] = null) : Te(n, i), $e(e) && a.set(e, n), n);
}
function hr(e, t) {
  return !e || !er(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, Xe(t)) || ke(e, t));
}
function Xi(e) {
  const {
    type: t,
    vnode: o,
    proxy: a,
    withProxy: r,
    propsOptions: [i],
    slots: n,
    attrs: l,
    emit: s,
    render: c,
    renderCache: d,
    props: u,
    data: f,
    setupState: p,
    ctx: h,
    inheritAttrs: m
  } = e, w = Da(e);
  let x, _;
  try {
    if (o.shapeFlag & 4) {
      const b = r || a, C = b;
      x = Mt(
        c.call(
          C,
          b,
          d,
          u,
          p,
          f,
          h
        )
      ), _ = l;
    } else {
      const b = t;
      x = Mt(
        b.length > 1 ? b(
          u,
          { attrs: l, slots: n, emit: s }
        ) : b(
          u,
          null
        )
      ), _ = t.props ? l : Vc(l);
    }
  } catch (b) {
    ea.length = 0, cr(b, e, 1), x = U(Fe);
  }
  let $ = x;
  if (_ && m !== !1) {
    const b = Object.keys(_), { shapeFlag: C } = $;
    b.length && C & 7 && (i && b.some(ui) && (_ = Mc(
      _,
      i
    )), $ = io($, _, !1, !0));
  }
  return o.dirs && ($ = io($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(o.dirs) : o.dirs), o.transition && ra($, o.transition), x = $, Da(w), x;
}
const Vc = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || er(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Mc = (e, t) => {
  const o = {};
  for (const a in e)
    (!ui(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function Bc(e, t, o) {
  const { props: a, children: r, component: i } = e, { props: n, children: l, patchFlag: s } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return a ? Qi(a, n, c) : !!n;
    if (s & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Xl(n, a, f) && !hr(c, f))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : a === n ? !1 : a ? n ? Qi(a, n, c) : !0 : !!n;
  return !1;
}
function Qi(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < a.length; r++) {
    const i = a[r];
    if (Xl(t, e, i) && !hr(o, i))
      return !0;
  }
  return !1;
}
function Xl(e, t, o) {
  const a = e[o], r = t[o];
  return o === "style" && $e(a) && $e(r) ? !ao(a, r) : a !== r;
}
function Pc({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Ql = {}, es = () => Object.create(Ql), ts = (e) => Object.getPrototypeOf(e) === Ql;
function Ic(e, t, o, a = !1) {
  const r = {}, i = es();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), os(e, t, r, i);
  for (const n in e.propsOptions[0])
    n in r || (r[n] = void 0);
  o ? e.props = a ? r : /* @__PURE__ */ Ld(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function jc(e, t, o, a) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: n }
  } = e, l = /* @__PURE__ */ we(r), [s] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || n > 0) && !(n & 16)
  ) {
    if (n & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (hr(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (s)
          if (ke(i, f))
            p !== i[f] && (i[f] = p, c = !0);
          else {
            const h = Re(f);
            r[h] = Gr(
              s,
              l,
              h,
              p,
              e,
              !1
            );
          }
        else
          p !== i[f] && (i[f] = p, c = !0);
      }
    }
  } else {
    os(e, t, r, i) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !ke(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Xe(u)) === u || !ke(t, d))) && (s ? o && // for camelCase
      (o[u] !== void 0 || // for kebab-case
      o[d] !== void 0) && (r[u] = Gr(
        s,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (i !== l)
      for (const u in i)
        (!t || !ke(t, u)) && (delete i[u], c = !0);
  }
  c && Ut(e.attrs, "set", "");
}
function os(e, t, o, a) {
  const [r, i] = e.propsOptions;
  let n = !1, l;
  if (t)
    for (let s in t) {
      if (Go(s))
        continue;
      const c = t[s];
      let d;
      r && ke(r, d = Re(s)) ? !i || !i.includes(d) ? o[d] = c : (l || (l = {}))[d] = c : hr(e.emitsOptions, s) || (!(s in a) || c !== a[s]) && (a[s] = c, n = !0);
    }
  if (i) {
    const s = /* @__PURE__ */ we(o), c = l || xe;
    for (let d = 0; d < i.length; d++) {
      const u = i[d];
      o[u] = Gr(
        r,
        s,
        u,
        c[u],
        e,
        !ke(c, u)
      );
    }
  }
  return n;
}
function Gr(e, t, o, a, r, i) {
  const n = e[o];
  if (n != null) {
    const l = ke(n, "default");
    if (l && a === void 0) {
      const s = n.default;
      if (n.type !== Function && !n.skipFactory && pe(s)) {
        const { propsDefaults: c } = r;
        if (o in c)
          a = c[o];
        else {
          const d = va(r);
          a = c[o] = s.call(
            null,
            t
          ), d();
        }
      } else
        a = s;
      r.ce && r.ce._setProp(o, a);
    }
    n[
      0
      /* shouldCast */
    ] && (i && !l ? a = !1 : n[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Xe(o)) && (a = !0));
  }
  return a;
}
const Dc = /* @__PURE__ */ new WeakMap();
function as(e, t, o = !1) {
  const a = o ? Dc : t.propsCache, r = a.get(e);
  if (r)
    return r;
  const i = e.props, n = {}, l = [];
  let s = !1;
  if (!pe(e)) {
    const d = (u) => {
      s = !0;
      const [f, p] = as(u, t, !0);
      Te(n, f), p && l.push(...p);
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !s)
    return $e(e) && a.set(e, Vo), Vo;
  if (re(i))
    for (let d = 0; d < i.length; d++) {
      const u = Re(i[d]);
      en(u) && (n[u] = xe);
    }
  else if (i)
    for (const d in i) {
      const u = Re(d);
      if (en(u)) {
        const f = i[d], p = n[u] = re(f) || pe(f) ? { type: f } : Te({}, f), h = p.type;
        let m = !1, w = !0;
        if (re(h))
          for (let x = 0; x < h.length; ++x) {
            const _ = h[x], $ = pe(_) && _.name;
            if ($ === "Boolean") {
              m = !0;
              break;
            } else $ === "String" && (w = !1);
          }
        else
          m = pe(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = m, p[
          1
          /* shouldCastTrue */
        ] = w, (m || ke(p, "default")) && l.push(u);
      }
    }
  const c = [n, l];
  return $e(e) && a.set(e, c), c;
}
function en(e) {
  return e[0] !== "$" && !Go(e);
}
const ki = (e) => e === "_" || e === "_ctx" || e === "$stable", _i = (e) => re(e) ? e.map(Mt) : [Mt(e)], Nc = (e, t, o) => {
  if (t._n)
    return t;
  const a = O((...r) => _i(t(...r)), o);
  return a._c = !1, a;
}, rs = (e, t, o) => {
  const a = e._ctx;
  for (const r in e) {
    if (ki(r)) continue;
    const i = e[r];
    if (pe(i))
      t[r] = Nc(r, i, a);
    else if (i != null) {
      const n = _i(i);
      t[r] = () => n;
    }
  }
}, is = (e, t) => {
  const o = _i(t);
  e.slots.default = () => o;
}, ns = (e, t, o) => {
  for (const a in t)
    (o || !ki(a)) && (e[a] = t[a]);
}, Fc = (e, t, o) => {
  const a = e.slots = es();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ns(a, t, o), o && il(a, "_", r, !0)) : rs(t, a);
  } else t && is(e, t);
}, Lc = (e, t, o) => {
  const { vnode: a, slots: r } = e;
  let i = !0, n = xe;
  if (a.shapeFlag & 32) {
    const l = t._;
    l ? o && l === 1 ? i = !1 : ns(r, t, o) : (i = !t.$stable, rs(t, r)), n = t;
  } else t && (is(e, t), n = { default: 1 });
  if (i)
    for (const l in r)
      !ki(l) && n[l] == null && delete r[l];
}, Je = Kc;
function Rc(e) {
  return Uc(e);
}
function Uc(e, t) {
  const o = nr();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: r,
    patchProp: i,
    createElement: n,
    createText: l,
    createComment: s,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: p = gt,
    insertStaticContent: h
  } = e, m = (g, k, E, W = null, R = null, q = null, te = void 0, X = null, J = !!k.dynamicChildren) => {
    if (g === k)
      return;
    g && !vo(g, k) && (W = me(g), Ve(g, R, q, !0), g = null), k.patchFlag === -2 && (J = !1, k.dynamicChildren = null);
    const { type: H, ref: se, shapeFlag: oe } = k;
    switch (H) {
      case mr:
        w(g, k, E, W);
        break;
      case Fe:
        x(g, k, E, W);
        break;
      case Ta:
        g == null && _(k, E, W, te);
        break;
      case be:
        z(
          g,
          k,
          E,
          W,
          R,
          q,
          te,
          X,
          J
        );
        break;
      default:
        oe & 1 ? C(
          g,
          k,
          E,
          W,
          R,
          q,
          te,
          X,
          J
        ) : oe & 6 ? M(
          g,
          k,
          E,
          W,
          R,
          q,
          te,
          X,
          J
        ) : (oe & 64 || oe & 128) && H.process(
          g,
          k,
          E,
          W,
          R,
          q,
          te,
          X,
          J,
          Yt
        );
    }
    se != null && R ? Xo(se, g && g.ref, q, k || g, !k) : se == null && g && g.ref != null && Xo(g.ref, null, q, g, !0);
  }, w = (g, k, E, W) => {
    if (g == null)
      a(
        k.el = l(k.children),
        E,
        W
      );
    else {
      const R = k.el = g.el;
      k.children !== g.children && c(R, k.children);
    }
  }, x = (g, k, E, W) => {
    g == null ? a(
      k.el = s(k.children || ""),
      E,
      W
    ) : k.el = g.el;
  }, _ = (g, k, E, W) => {
    [g.el, g.anchor] = h(
      g.children,
      k,
      E,
      W,
      g.el,
      g.anchor
    );
  }, $ = ({ el: g, anchor: k }, E, W) => {
    let R;
    for (; g && g !== k; )
      R = f(g), a(g, E, W), g = R;
    a(k, E, W);
  }, b = ({ el: g, anchor: k }) => {
    let E;
    for (; g && g !== k; )
      E = f(g), r(g), g = E;
    r(k);
  }, C = (g, k, E, W, R, q, te, X, J) => {
    if (k.type === "svg" ? te = "svg" : k.type === "math" && (te = "mathml"), g == null)
      A(
        k,
        E,
        W,
        R,
        q,
        te,
        X,
        J
      );
    else {
      const H = g.el && g.el._isVueCE ? g.el : null;
      try {
        H && H._beginPatch(), j(
          g,
          k,
          R,
          q,
          te,
          X,
          J
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, A = (g, k, E, W, R, q, te, X) => {
    let J, H;
    const { props: se, shapeFlag: oe, transition: ne, dirs: fe } = g;
    if (J = g.el = n(
      g.type,
      q,
      se && se.is,
      se
    ), oe & 8 ? d(J, g.children) : oe & 16 && Z(
      g.children,
      J,
      null,
      W,
      R,
      Tr(g, q),
      te,
      X
    ), fe && uo(g, null, W, "created"), K(J, g, g.scopeId, te, W), se) {
      for (const Ae in se)
        Ae !== "value" && !Go(Ae) && i(J, Ae, null, se[Ae], q, W);
      "value" in se && i(J, "value", null, se.value, q), (H = se.onVnodeBeforeMount) && Ot(H, W, g);
    }
    fe && uo(g, null, W, "beforeMount");
    const ge = qc(R, ne);
    ge && ne.beforeEnter(J), a(J, k, E), ((H = se && se.onVnodeMounted) || ge || fe) && Je(() => {
      H && Ot(H, W, g), ge && ne.enter(J), fe && uo(g, null, W, "mounted");
    }, R);
  }, K = (g, k, E, W, R) => {
    if (E && p(g, E), W)
      for (let q = 0; q < W.length; q++)
        p(g, W[q]);
    if (R) {
      let q = R.subTree;
      if (k === q || cs(q.type) && (q.ssContent === k || q.ssFallback === k)) {
        const te = R.vnode;
        K(
          g,
          te,
          te.scopeId,
          te.slotScopeIds,
          R.parent
        );
      }
    }
  }, Z = (g, k, E, W, R, q, te, X, J = 0) => {
    for (let H = J; H < g.length; H++) {
      const se = g[H] = X ? Rt(g[H]) : Mt(g[H]);
      m(
        null,
        se,
        k,
        E,
        W,
        R,
        q,
        te,
        X
      );
    }
  }, j = (g, k, E, W, R, q, te) => {
    const X = k.el = g.el;
    let { patchFlag: J, dynamicChildren: H, dirs: se } = k;
    J |= g.patchFlag & 16;
    const oe = g.props || xe, ne = k.props || xe;
    let fe;
    if (E && fo(E, !1), (fe = ne.onVnodeBeforeUpdate) && Ot(fe, E, k, g), se && uo(k, g, E, "beforeUpdate"), E && fo(E, !0), (oe.innerHTML && ne.innerHTML == null || oe.textContent && ne.textContent == null) && d(X, ""), H ? T(
      g.dynamicChildren,
      H,
      X,
      E,
      W,
      Tr(k, R),
      q
    ) : te || le(
      g,
      k,
      X,
      null,
      E,
      W,
      Tr(k, R),
      q,
      !1
    ), J > 0) {
      if (J & 16)
        D(X, oe, ne, E, R);
      else if (J & 2 && oe.class !== ne.class && i(X, "class", null, ne.class, R), J & 4 && i(X, "style", oe.style, ne.style, R), J & 8) {
        const ge = k.dynamicProps;
        for (let Ae = 0; Ae < ge.length; Ae++) {
          const Se = ge[Ae], Ze = oe[Se], Ge = ne[Se];
          (Ge !== Ze || Se === "value") && i(X, Se, Ze, Ge, R, E);
        }
      }
      J & 1 && g.children !== k.children && d(X, k.children);
    } else !te && H == null && D(X, oe, ne, E, R);
    ((fe = ne.onVnodeUpdated) || se) && Je(() => {
      fe && Ot(fe, E, k, g), se && uo(k, g, E, "updated");
    }, W);
  }, T = (g, k, E, W, R, q, te) => {
    for (let X = 0; X < k.length; X++) {
      const J = g[X], H = k[X], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vo(J, H) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? u(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      m(
        J,
        H,
        se,
        null,
        W,
        R,
        q,
        te,
        !0
      );
    }
  }, D = (g, k, E, W, R) => {
    if (k !== E) {
      if (k !== xe)
        for (const q in k)
          !Go(q) && !(q in E) && i(
            g,
            q,
            k[q],
            null,
            R,
            W
          );
      for (const q in E) {
        if (Go(q)) continue;
        const te = E[q], X = k[q];
        te !== X && q !== "value" && i(g, q, X, te, R, W);
      }
      "value" in E && i(g, "value", k.value, E.value, R);
    }
  }, z = (g, k, E, W, R, q, te, X, J) => {
    const H = k.el = g ? g.el : l(""), se = k.anchor = g ? g.anchor : l("");
    let { patchFlag: oe, dynamicChildren: ne, slotScopeIds: fe } = k;
    fe && (X = X ? X.concat(fe) : fe), g == null ? (a(H, E, W), a(se, E, W), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      E,
      se,
      R,
      q,
      te,
      X,
      J
    )) : oe > 0 && oe & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === ne.length ? (T(
      g.dynamicChildren,
      ne,
      E,
      R,
      q,
      te,
      X
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (k.key != null || R && k === R.subTree) && ls(
      g,
      k,
      !0
      /* shallow */
    )) : le(
      g,
      k,
      E,
      se,
      R,
      q,
      te,
      X,
      J
    );
  }, M = (g, k, E, W, R, q, te, X, J) => {
    k.slotScopeIds = X, g == null ? k.shapeFlag & 512 ? R.ctx.activate(
      k,
      E,
      W,
      te,
      J
    ) : G(
      k,
      E,
      W,
      R,
      q,
      te,
      J
    ) : P(g, k, J);
  }, G = (g, k, E, W, R, q, te) => {
    const X = g.component = Yc(
      g,
      W,
      R
    );
    if (fr(g) && (X.ctx.renderer = Yt), Xc(X, !1, te), X.asyncDep) {
      if (R && R.registerDep(X, Q, te), !g.el) {
        const J = X.subTree = U(Fe);
        x(null, J, k, E), g.placeholder = J.el;
      }
    } else
      Q(
        X,
        g,
        k,
        E,
        R,
        q,
        te
      );
  }, P = (g, k, E) => {
    const W = k.component = g.component;
    if (Bc(g, k, E))
      if (W.asyncDep && !W.asyncResolved) {
        de(W, k, E);
        return;
      } else
        W.next = k, W.update();
    else
      k.el = g.el, W.vnode = k;
  }, Q = (g, k, E, W, R, q, te) => {
    const X = () => {
      if (g.isMounted) {
        let { next: oe, bu: ne, u: fe, parent: ge, vnode: Ae } = g;
        {
          const Et = ss(g);
          if (Et) {
            oe && (oe.el = Ae.el, de(g, oe, te)), Et.asyncDep.then(() => {
              Je(() => {
                g.isUnmounted || H();
              }, R);
            });
            return;
          }
        }
        let Se = oe, Ze;
        fo(g, !1), oe ? (oe.el = Ae.el, de(g, oe, te)) : oe = Ae, ne && Ea(ne), (Ze = oe.props && oe.props.onVnodeBeforeUpdate) && Ot(Ze, ge, oe, Ae), fo(g, !0);
        const Ge = Xi(g), At = g.subTree;
        g.subTree = Ge, m(
          At,
          Ge,
          // parent may have changed if it's in a teleport
          u(At.el),
          // anchor may have changed if it's in a fragment
          me(At),
          g,
          R,
          q
        ), oe.el = Ge.el, Se === null && Pc(g, Ge.el), fe && Je(fe, R), (Ze = oe.props && oe.props.onVnodeUpdated) && Je(
          () => Ot(Ze, ge, oe, Ae),
          R
        );
      } else {
        let oe;
        const { el: ne, props: fe } = k, { bm: ge, m: Ae, parent: Se, root: Ze, type: Ge } = g, At = Po(k);
        fo(g, !1), ge && Ea(ge), !At && (oe = fe && fe.onVnodeBeforeMount) && Ot(oe, Se, k), fo(g, !0);
        {
          Ze.ce && Ze.ce._hasShadowRoot() && Ze.ce._injectChildStyle(Ge);
          const Et = g.subTree = Xi(g);
          m(
            null,
            Et,
            E,
            W,
            g,
            R,
            q
          ), k.el = Et.el;
        }
        if (Ae && Je(Ae, R), !At && (oe = fe && fe.onVnodeMounted)) {
          const Et = k;
          Je(
            () => Ot(oe, Se, Et),
            R
          );
        }
        (k.shapeFlag & 256 || Se && Po(Se.vnode) && Se.vnode.shapeFlag & 256) && g.a && Je(g.a, R), g.isMounted = !0, k = E = W = null;
      }
    };
    g.scope.on();
    const J = g.effect = new dl(X);
    g.scope.off();
    const H = g.update = J.run.bind(J), se = g.job = J.runIfDirty.bind(J);
    se.i = g, se.id = g.uid, J.scheduler = () => wi(se), fo(g, !0), H();
  }, de = (g, k, E) => {
    k.component = g;
    const W = g.vnode.props;
    g.vnode = k, g.next = null, jc(g, k.props, W, E), Lc(g, k.children, E), Kt(), qi(g), Wt();
  }, le = (g, k, E, W, R, q, te, X, J = !1) => {
    const H = g && g.children, se = g ? g.shapeFlag : 0, oe = k.children, { patchFlag: ne, shapeFlag: fe } = k;
    if (ne > 0) {
      if (ne & 128) {
        Ce(
          H,
          oe,
          E,
          W,
          R,
          q,
          te,
          X,
          J
        );
        return;
      } else if (ne & 256) {
        We(
          H,
          oe,
          E,
          W,
          R,
          q,
          te,
          X,
          J
        );
        return;
      }
    }
    fe & 8 ? (se & 16 && ve(H, R, q), oe !== H && d(E, oe)) : se & 16 ? fe & 16 ? Ce(
      H,
      oe,
      E,
      W,
      R,
      q,
      te,
      X,
      J
    ) : ve(H, R, q, !0) : (se & 8 && d(E, ""), fe & 16 && Z(
      oe,
      E,
      W,
      R,
      q,
      te,
      X,
      J
    ));
  }, We = (g, k, E, W, R, q, te, X, J) => {
    g = g || Vo, k = k || Vo;
    const H = g.length, se = k.length, oe = Math.min(H, se);
    let ne;
    for (ne = 0; ne < oe; ne++) {
      const fe = k[ne] = J ? Rt(k[ne]) : Mt(k[ne]);
      m(
        g[ne],
        fe,
        E,
        null,
        R,
        q,
        te,
        X,
        J
      );
    }
    H > se ? ve(
      g,
      R,
      q,
      !0,
      !1,
      oe
    ) : Z(
      k,
      E,
      W,
      R,
      q,
      te,
      X,
      J,
      oe
    );
  }, Ce = (g, k, E, W, R, q, te, X, J) => {
    let H = 0;
    const se = k.length;
    let oe = g.length - 1, ne = se - 1;
    for (; H <= oe && H <= ne; ) {
      const fe = g[H], ge = k[H] = J ? Rt(k[H]) : Mt(k[H]);
      if (vo(fe, ge))
        m(
          fe,
          ge,
          E,
          null,
          R,
          q,
          te,
          X,
          J
        );
      else
        break;
      H++;
    }
    for (; H <= oe && H <= ne; ) {
      const fe = g[oe], ge = k[ne] = J ? Rt(k[ne]) : Mt(k[ne]);
      if (vo(fe, ge))
        m(
          fe,
          ge,
          E,
          null,
          R,
          q,
          te,
          X,
          J
        );
      else
        break;
      oe--, ne--;
    }
    if (H > oe) {
      if (H <= ne) {
        const fe = ne + 1, ge = fe < se ? k[fe].el : W;
        for (; H <= ne; )
          m(
            null,
            k[H] = J ? Rt(k[H]) : Mt(k[H]),
            E,
            ge,
            R,
            q,
            te,
            X,
            J
          ), H++;
      }
    } else if (H > ne)
      for (; H <= oe; )
        Ve(g[H], R, q, !0), H++;
    else {
      const fe = H, ge = H, Ae = /* @__PURE__ */ new Map();
      for (H = ge; H <= ne; H++) {
        const tt = k[H] = J ? Rt(k[H]) : Mt(k[H]);
        tt.key != null && Ae.set(tt.key, H);
      }
      let Se, Ze = 0;
      const Ge = ne - ge + 1;
      let At = !1, Et = 0;
      const Ro = new Array(Ge);
      for (H = 0; H < Ge; H++) Ro[H] = 0;
      for (H = fe; H <= oe; H++) {
        const tt = g[H];
        if (Ze >= Ge) {
          Ve(tt, R, q, !0);
          continue;
        }
        let Tt;
        if (tt.key != null)
          Tt = Ae.get(tt.key);
        else
          for (Se = ge; Se <= ne; Se++)
            if (Ro[Se - ge] === 0 && vo(tt, k[Se])) {
              Tt = Se;
              break;
            }
        Tt === void 0 ? Ve(tt, R, q, !0) : (Ro[Tt - ge] = H + 1, Tt >= Et ? Et = Tt : At = !0, m(
          tt,
          k[Tt],
          E,
          null,
          R,
          q,
          te,
          X,
          J
        ), Ze++);
      }
      const Ii = At ? Hc(Ro) : Vo;
      for (Se = Ii.length - 1, H = Ge - 1; H >= 0; H--) {
        const tt = ge + H, Tt = k[tt], ji = k[tt + 1], Di = tt + 1 < se ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ji.el || ds(ji)
        ) : W;
        Ro[H] === 0 ? m(
          null,
          Tt,
          E,
          Di,
          R,
          q,
          te,
          X,
          J
        ) : At && (Se < 0 || H !== Ii[Se] ? Ie(Tt, E, Di, 2) : Se--);
      }
    }
  }, Ie = (g, k, E, W, R = null) => {
    const { el: q, type: te, transition: X, children: J, shapeFlag: H } = g;
    if (H & 6) {
      Ie(g.component.subTree, k, E, W);
      return;
    }
    if (H & 128) {
      g.suspense.move(k, E, W);
      return;
    }
    if (H & 64) {
      te.move(g, k, E, Yt);
      return;
    }
    if (te === be) {
      a(q, k, E);
      for (let oe = 0; oe < J.length; oe++)
        Ie(J[oe], k, E, W);
      a(g.anchor, k, E);
      return;
    }
    if (te === Ta) {
      $(g, k, E);
      return;
    }
    if (W !== 2 && H & 1 && X)
      if (W === 0)
        X.beforeEnter(q), a(q, k, E), Je(() => X.enter(q), R);
      else {
        const { leave: oe, delayLeave: ne, afterLeave: fe } = X, ge = () => {
          g.ctx.isUnmounted ? r(q) : a(q, k, E);
        }, Ae = () => {
          q._isLeaving && q[Vt](
            !0
            /* cancelled */
          ), oe(q, () => {
            ge(), fe && fe();
          });
        };
        ne ? ne(q, ge, Ae) : Ae();
      }
    else
      a(q, k, E);
  }, Ve = (g, k, E, W = !1, R = !1) => {
    const {
      type: q,
      props: te,
      ref: X,
      children: J,
      dynamicChildren: H,
      shapeFlag: se,
      patchFlag: oe,
      dirs: ne,
      cacheIndex: fe
    } = g;
    if (oe === -2 && (R = !1), X != null && (Kt(), Xo(X, null, E, g, !0), Wt()), fe != null && (k.renderCache[fe] = void 0), se & 256) {
      k.ctx.deactivate(g);
      return;
    }
    const ge = se & 1 && ne, Ae = !Po(g);
    let Se;
    if (Ae && (Se = te && te.onVnodeBeforeUnmount) && Ot(Se, k, g), se & 6)
      ee(g.component, E, W);
    else {
      if (se & 128) {
        g.suspense.unmount(E, W);
        return;
      }
      ge && uo(g, null, k, "beforeUnmount"), se & 64 ? g.type.remove(
        g,
        k,
        E,
        Yt,
        W
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== be || oe > 0 && oe & 64) ? ve(
        H,
        k,
        E,
        !1,
        !0
      ) : (q === be && oe & 384 || !R && se & 16) && ve(J, k, E), W && ya(g);
    }
    (Ae && (Se = te && te.onVnodeUnmounted) || ge) && Je(() => {
      Se && Ot(Se, k, g), ge && uo(g, null, k, "unmounted");
    }, E);
  }, ya = (g) => {
    const { type: k, el: E, anchor: W, transition: R } = g;
    if (k === be) {
      wr(E, W);
      return;
    }
    if (k === Ta) {
      b(g);
      return;
    }
    const q = () => {
      r(E), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (g.shapeFlag & 1 && R && !R.persisted) {
      const { leave: te, delayLeave: X } = R, J = () => te(E, q);
      X ? X(g.el, q, J) : J();
    } else
      q();
  }, wr = (g, k) => {
    let E;
    for (; g !== k; )
      E = f(g), r(g), g = E;
    r(k);
  }, ee = (g, k, E) => {
    const { bum: W, scope: R, job: q, subTree: te, um: X, m: J, a: H } = g;
    tn(J), tn(H), W && Ea(W), R.stop(), q && (q.flags |= 8, Ve(te, g, k, E)), X && Je(X, k), Je(() => {
      g.isUnmounted = !0;
    }, k);
  }, ve = (g, k, E, W = !1, R = !1, q = 0) => {
    for (let te = q; te < g.length; te++)
      Ve(g[te], k, E, W, R);
  }, me = (g) => {
    if (g.shapeFlag & 6)
      return me(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const k = f(g.anchor || g.el), E = k && k[nc];
    return E ? f(E) : k;
  };
  let ye = !1;
  const Ct = (g, k, E) => {
    let W;
    g == null ? k._vnode && (Ve(k._vnode, null, null, !0), W = k._vnode.component) : m(
      k._vnode || null,
      g,
      k,
      null,
      null,
      null,
      E
    ), k._vnode = g, ye || (ye = !0, qi(W), El(), ye = !1);
  }, Yt = {
    p: m,
    um: Ve,
    m: Ie,
    r: ya,
    mt: G,
    mc: Z,
    pc: le,
    pbc: T,
    n: me,
    o: e
  };
  return {
    render: Ct,
    hydrate: void 0,
    createApp: Tc(Ct)
  };
}
function Tr({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function fo({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ls(e, t, o = !1) {
  const a = e.children, r = t.children;
  if (re(a) && re(r))
    for (let i = 0; i < a.length; i++) {
      const n = a[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Rt(r[i]), l.el = n.el), !o && l.patchFlag !== -2 && ls(n, l)), l.type === mr && (l.patchFlag === -1 && (l = r[i] = Rt(l)), l.el = n.el), l.type === Fe && !l.el && (l.el = n.el);
    }
}
function Hc(e) {
  const t = e.slice(), o = [0];
  let a, r, i, n, l;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const c = e[a];
    if (c !== 0) {
      if (r = o[o.length - 1], e[r] < c) {
        t[a] = r, o.push(a);
        continue;
      }
      for (i = 0, n = o.length - 1; i < n; )
        l = i + n >> 1, e[o[l]] < c ? i = l + 1 : n = l;
      c < e[o[i]] && (i > 0 && (t[a] = o[i - 1]), o[i] = a);
    }
  }
  for (i = o.length, n = o[i - 1]; i-- > 0; )
    o[i] = n, n = t[n];
  return o;
}
function ss(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ss(t);
}
function tn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ds(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ds(t.subTree) : null;
}
const cs = (e) => e.__isSuspense;
function Kc(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : Al(e);
}
const be = /* @__PURE__ */ Symbol.for("v-fgt"), mr = /* @__PURE__ */ Symbol.for("v-txt"), Fe = /* @__PURE__ */ Symbol.for("v-cmt"), Ta = /* @__PURE__ */ Symbol.for("v-stc"), ea = [];
let at = null;
function v(e = !1) {
  ea.push(at = e ? null : []);
}
function Wc() {
  ea.pop(), at = ea[ea.length - 1] || null;
}
let ia = 1;
function Ua(e, t = !1) {
  ia += e, e < 0 && at && t && (at.hasOnce = !0);
}
function us(e) {
  return e.dynamicChildren = ia > 0 ? at || Vo : null, Wc(), ia > 0 && at && at.push(e), e;
}
function S(e, t, o, a, r, i) {
  return us(
    N(
      e,
      t,
      o,
      a,
      r,
      i,
      !0
    )
  );
}
function Y(e, t, o, a, r) {
  return us(
    U(
      e,
      t,
      o,
      a,
      r,
      !0
    )
  );
}
function na(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fs = ({ key: e }) => e ?? null, Oa = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || /* @__PURE__ */ Me(e) || pe(e) ? { i: je, r: e, k: t, f: !!o } : e : null);
function N(e, t = null, o = null, a = 0, r = null, i = e === be ? 0 : 1, n = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fs(t),
    ref: t && Oa(t),
    scopeId: Ol,
    slotScopeIds: null,
    children: o,
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
    patchFlag: a,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: je
  };
  return l ? ($i(s, o), i & 128 && e.normalize(s)) : o && (s.shapeFlag |= Oe(o) ? 8 : 16), ia > 0 && // avoid a block node from tracking itself
  !n && // has current parent block
  at && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && at.push(s), s;
}
const U = Zc;
function Zc(e, t = null, o = null, a = 0, r = null, i = !1) {
  if ((!e || e === Ul) && (e = Fe), na(e)) {
    const l = io(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && $i(l, o), ia > 0 && !i && at && (l.shapeFlag & 6 ? at[at.indexOf(e)] = l : at.push(l)), l.patchFlag = -2, l;
  }
  if (ou(e) && (e = e.__vccOpts), t) {
    t = vr(t);
    let { class: l, style: s } = t;
    l && !Oe(l) && (t.class = ce(l)), $e(s) && (/* @__PURE__ */ dr(s) && !re(s) && (s = Te({}, s)), t.style = kt(s));
  }
  const n = Oe(e) ? 1 : cs(e) ? 128 : Ml(e) ? 64 : $e(e) ? 4 : pe(e) ? 2 : 0;
  return N(
    e,
    t,
    o,
    a,
    r,
    n,
    i,
    !0
  );
}
function vr(e) {
  return e ? /* @__PURE__ */ dr(e) || ts(e) ? Te({}, e) : e : null;
}
function io(e, t, o = !1, a = !1) {
  const { props: r, ref: i, patchFlag: n, children: l, transition: s } = e, c = t ? Be(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && fs(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? re(i) ? i.concat(Oa(t)) : [i, Oa(t)] : Oa(t)
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
    ssContent: e.ssContent && io(e.ssContent),
    ssFallback: e.ssFallback && io(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && a && ra(
    d,
    s.clone(d)
  ), d;
}
function ae(e = " ", t = 0) {
  return U(mr, null, e, t);
}
function L(e = "", t = !1) {
  return t ? (v(), Y(Fe, null, e)) : U(Fe, null, e);
}
function Mt(e) {
  return e == null || typeof e == "boolean" ? U(Fe) : re(e) ? U(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : na(e) ? Rt(e) : U(mr, null, String(e));
}
function Rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : io(e);
}
function $i(e, t) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (re(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $i(e, r()), r._c && (r._d = !0));
      return;
    } else {
      o = 32;
      const r = t._;
      !r && !ts(t) ? t._ctx = je : r === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else pe(t) ? (t = { default: t, _ctx: je }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [ae(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function Be(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const r in a)
      if (r === "class")
        t.class !== a.class && (t.class = ce([t.class, a.class]));
      else if (r === "style")
        t.style = kt([t.style, a.style]);
      else if (er(r)) {
        const i = t[r], n = a[r];
        n && i !== n && !(re(i) && i.includes(n)) && (t[r] = i ? [].concat(i, n) : n);
      } else r !== "" && (t[r] = a[r]);
  }
  return t;
}
function Ot(e, t, o, a = null) {
  $t(e, t, 7, [
    o,
    a
  ]);
}
const Gc = Gl();
let Jc = 0;
function Yc(e, t, o) {
  const a = e.type, r = (t ? t.appContext : e.appContext) || Gc, i = {
    uid: Jc++,
    vnode: e,
    type: a,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new wd(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: as(a, r),
    emitsOptions: Yl(a, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
    setupContext: null,
    // suspense related
    suspense: o,
    suspenseId: o ? o.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Oc.bind(null, i), e.ce && e.ce(i), i;
}
let Le = null;
const ht = () => Le || je;
let qa, Jr;
{
  const e = nr(), t = (o, a) => {
    let r;
    return (r = e[o]) || (r = e[o] = []), r.push(a), (i) => {
      r.length > 1 ? r.forEach((n) => n(i)) : r[0](i);
    };
  };
  qa = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Le = o
  ), Jr = t(
    "__VUE_SSR_SETTERS__",
    (o) => la = o
  );
}
const va = (e) => {
  const t = Le;
  return qa(e), e.scope.on(), () => {
    e.scope.off(), qa(t);
  };
}, on = () => {
  Le && Le.scope.off(), qa(null);
};
function ps(e) {
  return e.vnode.shapeFlag & 4;
}
let la = !1;
function Xc(e, t = !1, o = !1) {
  t && Jr(t);
  const { props: a, children: r } = e.vnode, i = ps(e);
  Ic(e, a, i, t), Fc(e, r, o || t);
  const n = i ? Qc(e, t) : void 0;
  return t && Jr(!1), n;
}
function Qc(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xc);
  const { setup: a } = o;
  if (a) {
    Kt();
    const r = e.setupContext = a.length > 1 ? ms(e) : null, i = va(e), n = ma(
      a,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = al(n);
    if (Wt(), i(), (l || e.sp) && !Po(e) && Nl(e), l) {
      if (n.then(on, on), t)
        return n.then((s) => {
          an(e, s);
        }).catch((s) => {
          cr(s, e, 0);
        });
      e.asyncDep = n;
    } else
      an(e, n);
  } else
    hs(e);
}
function an(e, t, o) {
  pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) && (e.setupState = $l(t)), hs(e);
}
function hs(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || gt);
  {
    const r = va(e);
    Kt();
    try {
      _c(e);
    } finally {
      Wt(), r();
    }
  }
}
const eu = {
  get(e, t) {
    return Ne(e, "get", ""), e[t];
  }
};
function ms(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, eu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($l(Rd(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Qo)
        return Qo[o](e);
    },
    has(t, o) {
      return o in t || o in Qo;
    }
  })) : e.proxy;
}
function tu(e, t = !0) {
  return pe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ou(e) {
  return pe(e) && "__vccOpts" in e;
}
const I = (e, t) => /* @__PURE__ */ Yd(e, t, la);
function Yr(e, t, o) {
  try {
    Ua(-1);
    const a = arguments.length;
    return a === 2 ? $e(t) && !re(t) ? na(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && na(o) && (o = [o]), U(e, t, o));
  } finally {
    Ua(1);
  }
}
const au = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xr;
const rn = typeof window < "u" && window.trustedTypes;
if (rn)
  try {
    Xr = /* @__PURE__ */ rn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const vs = Xr ? (e) => Xr.createHTML(e) : (e) => e, ru = "http://www.w3.org/2000/svg", iu = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, nn = Lt && /* @__PURE__ */ Lt.createElement("template"), nu = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, a) => {
    const r = t === "svg" ? Lt.createElementNS(ru, e) : t === "mathml" ? Lt.createElementNS(iu, e) : o ? Lt.createElement(e, { is: o }) : Lt.createElement(e);
    return e === "select" && a && a.multiple != null && r.setAttribute("multiple", a.multiple), r;
  },
  createText: (e) => Lt.createTextNode(e),
  createComment: (e) => Lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, a, r, i) {
    const n = o ? o.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), o), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      nn.innerHTML = vs(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const l = nn.content;
      if (a === "svg" || a === "mathml") {
        const s = l.firstChild;
        for (; s.firstChild; )
          l.appendChild(s.firstChild);
        l.removeChild(s);
      }
      t.insertBefore(l, o);
    }
    return [
      // first
      n ? n.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Xt = "transition", Ho = "animation", sa = /* @__PURE__ */ Symbol("_vtc"), gs = {
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
}, lu = /* @__PURE__ */ Te(
  {},
  Bl,
  gs
), su = (e) => (e.displayName = "Transition", e.props = lu, e), da = /* @__PURE__ */ su(
  (e, { slots: t }) => Yr(dc, du(e), t)
), po = (e, t = []) => {
  re(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ln = (e) => e ? re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function du(e) {
  const t = {};
  for (const z in e)
    z in gs || (t[z] = e[z]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: a,
    duration: r,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: n = `${o}-enter-active`,
    enterToClass: l = `${o}-enter-to`,
    appearFromClass: s = i,
    appearActiveClass: c = n,
    appearToClass: d = l,
    leaveFromClass: u = `${o}-leave-from`,
    leaveActiveClass: f = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, h = cu(r), m = h && h[0], w = h && h[1], {
    onBeforeEnter: x,
    onEnter: _,
    onEnterCancelled: $,
    onLeave: b,
    onLeaveCancelled: C,
    onBeforeAppear: A = x,
    onAppear: K = _,
    onAppearCancelled: Z = $
  } = t, j = (z, M, G, P) => {
    z._enterCancelled = P, ho(z, M ? d : l), ho(z, M ? c : n), G && G();
  }, T = (z, M) => {
    z._isLeaving = !1, ho(z, u), ho(z, p), ho(z, f), M && M();
  }, D = (z) => (M, G) => {
    const P = z ? K : _, Q = () => j(M, z, G);
    po(P, [M, Q]), sn(() => {
      ho(M, z ? s : i), Ft(M, z ? d : l), ln(P) || dn(M, a, m, Q);
    });
  };
  return Te(t, {
    onBeforeEnter(z) {
      po(x, [z]), Ft(z, i), Ft(z, n);
    },
    onBeforeAppear(z) {
      po(A, [z]), Ft(z, s), Ft(z, c);
    },
    onEnter: D(!1),
    onAppear: D(!0),
    onLeave(z, M) {
      z._isLeaving = !0;
      const G = () => T(z, M);
      Ft(z, u), z._enterCancelled ? (Ft(z, f), fn(z)) : (fn(z), Ft(z, f)), sn(() => {
        z._isLeaving && (ho(z, u), Ft(z, p), ln(b) || dn(z, a, w, G));
      }), po(b, [z, G]);
    },
    onEnterCancelled(z) {
      j(z, !1, void 0, !0), po($, [z]);
    },
    onAppearCancelled(z) {
      j(z, !0, void 0, !0), po(Z, [z]);
    },
    onLeaveCancelled(z) {
      T(z), po(C, [z]);
    }
  });
}
function cu(e) {
  if (e == null)
    return null;
  if ($e(e))
    return [Or(e.enter), Or(e.leave)];
  {
    const t = Or(e);
    return [t, t];
  }
}
function Or(e) {
  return Fr(e);
}
function Ft(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[sa] || (e[sa] = /* @__PURE__ */ new Set())).add(t);
}
function ho(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[sa];
  o && (o.delete(t), o.size || (e[sa] = void 0));
}
function sn(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let uu = 0;
function dn(e, t, o, a) {
  const r = e._endId = ++uu, i = () => {
    r === e._endId && a();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: n, timeout: l, propCount: s } = fu(e, t);
  if (!n)
    return a();
  const c = n + "end";
  let d = 0;
  const u = () => {
    e.removeEventListener(c, f), i();
  }, f = (p) => {
    p.target === e && ++d >= s && u();
  };
  setTimeout(() => {
    d < s && u();
  }, l + 1), e.addEventListener(c, f);
}
function fu(e, t) {
  const o = window.getComputedStyle(e), a = (h) => (o[h] || "").split(", "), r = a(`${Xt}Delay`), i = a(`${Xt}Duration`), n = cn(r, i), l = a(`${Ho}Delay`), s = a(`${Ho}Duration`), c = cn(l, s);
  let d = null, u = 0, f = 0;
  t === Xt ? n > 0 && (d = Xt, u = n, f = i.length) : t === Ho ? c > 0 && (d = Ho, u = c, f = s.length) : (u = Math.max(n, c), d = u > 0 ? n > c ? Xt : Ho : null, f = d ? d === Xt ? i.length : s.length : 0);
  const p = d === Xt && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Xt}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: f,
    hasTransform: p
  };
}
function cn(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, a) => un(o) + un(e[a])));
}
function un(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function fn(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function pu(e, t, o) {
  const a = e[sa];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const Ha = /* @__PURE__ */ Symbol("_vod"), bs = /* @__PURE__ */ Symbol("_vsh"), Si = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: o }) {
    e[Ha] = e.style.display === "none" ? "" : e.style.display, o && t ? o.beforeEnter(e) : Ko(e, t);
  },
  mounted(e, { value: t }, { transition: o }) {
    o && t && o.enter(e);
  },
  updated(e, { value: t, oldValue: o }, { transition: a }) {
    !t != !o && (a ? t ? (a.beforeEnter(e), Ko(e, !0), a.enter(e)) : a.leave(e, () => {
      Ko(e, !1);
    }) : Ko(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ko(e, t);
  }
};
function Ko(e, t) {
  e.style.display = t ? e[Ha] : "none", e[bs] = !t;
}
const ys = /* @__PURE__ */ Symbol("");
function hu(e) {
  const t = ht();
  if (!t)
    return;
  const o = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => Ka(i, r));
  }, a = () => {
    const r = e(t.proxy);
    t.ce ? Ka(t.ce, r) : Qr(t.subTree, r), o(r);
  };
  Rl(() => {
    Al(a);
  }), et(() => {
    ue(a, gt, { flush: "post" });
    const r = new MutationObserver(a);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), So(() => r.disconnect());
  });
}
function Qr(e, t) {
  if (e.shapeFlag & 128) {
    const o = e.suspense;
    e = o.activeBranch, o.pendingBranch && !o.isHydrating && o.effects.push(() => {
      Qr(o.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ka(e.el, t);
  else if (e.type === be)
    e.children.forEach((o) => Qr(o, t));
  else if (e.type === Ta) {
    let { el: o, anchor: a } = e;
    for (; o && (Ka(o, t), o !== a); )
      o = o.nextSibling;
  }
}
function Ka(e, t) {
  if (e.nodeType === 1) {
    const o = e.style;
    let a = "";
    for (const r in t) {
      const i = yd(t[r]);
      o.setProperty(`--${r}`, i), a += `--${r}: ${i};`;
    }
    o[ys] = a;
  }
}
const mu = /(?:^|;)\s*display\s*:/;
function vu(e, t, o) {
  const a = e.style, r = Oe(o);
  let i = !1;
  if (o && !r) {
    if (t)
      if (Oe(t))
        for (const n of t.split(";")) {
          const l = n.slice(0, n.indexOf(":")).trim();
          o[l] == null && za(a, l, "");
        }
      else
        for (const n in t)
          o[n] == null && za(a, n, "");
    for (const n in o)
      n === "display" && (i = !0), za(a, n, o[n]);
  } else if (r) {
    if (t !== o) {
      const n = a[ys];
      n && (o += ";" + n), a.cssText = o, i = mu.test(o);
    }
  } else t && e.removeAttribute("style");
  Ha in e && (e[Ha] = i ? a.display : "", e[bs] && (a.display = "none"));
}
const pn = /\s*!important$/;
function za(e, t, o) {
  if (re(o))
    o.forEach((a) => za(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = gu(e, t);
    pn.test(o) ? e.setProperty(
      Xe(a),
      o.replace(pn, ""),
      "important"
    ) : e[a] = o;
  }
}
const hn = ["Webkit", "Moz", "ms"], zr = {};
function gu(e, t) {
  const o = zr[t];
  if (o)
    return o;
  let a = Re(t);
  if (a !== "filter" && a in e)
    return zr[t] = a;
  a = rr(a);
  for (let r = 0; r < hn.length; r++) {
    const i = hn[r] + a;
    if (i in e)
      return zr[t] = i;
  }
  return t;
}
const mn = "http://www.w3.org/1999/xlink";
function vn(e, t, o, a, r, i = gd(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(mn, t.slice(6, t.length)) : e.setAttributeNS(mn, t, o) : o == null || i && !nl(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : xt(o) ? String(o) : o
  );
}
function gn(e, t, o, a, r) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? vs(o) : o);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, s = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (l !== s || !("_value" in e)) && (e.value = s), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let n = !1;
  if (o === "" || o == null) {
    const l = typeof e[t];
    l === "boolean" ? o = nl(o) : o == null && l === "string" ? (o = "", n = !0) : l === "number" && (o = 0, n = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  n && e.removeAttribute(r || t);
}
function Ht(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function bu(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const bn = /* @__PURE__ */ Symbol("_vei");
function yu(e, t, o, a, r = null) {
  const i = e[bn] || (e[bn] = {}), n = i[t];
  if (a && n)
    n.value = a;
  else {
    const [l, s] = wu(t);
    if (a) {
      const c = i[t] = _u(
        a,
        r
      );
      Ht(e, l, c, s);
    } else n && (bu(e, l, n, s), i[t] = void 0);
  }
}
const yn = /(?:Once|Passive|Capture)$/;
function wu(e) {
  let t;
  if (yn.test(e)) {
    t = {};
    let a;
    for (; a = e.match(yn); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let Vr = 0;
const xu = /* @__PURE__ */ Promise.resolve(), ku = () => Vr || (xu.then(() => Vr = 0), Vr = Date.now());
function _u(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    $t(
      $u(a, o.value),
      t,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = ku(), o;
}
function $u(e, t) {
  if (re(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (a) => (r) => !r._stopped && a && a(r)
    );
  } else
    return t;
}
const wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Su = (e, t, o, a, r, i) => {
  const n = r === "svg";
  t === "class" ? pu(e, a, n) : t === "style" ? vu(e, o, a) : er(t) ? ui(t) || yu(e, t, o, a, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cu(e, t, a, n)) ? (gn(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vn(e, t, a, n, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Oe(a)) ? gn(e, Re(t), a, i, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), vn(e, t, a, n));
};
function Cu(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wn(t) && pe(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return wn(t) && Oe(o) ? !1 : t in e;
}
const xn = {};
// @__NO_SIDE_EFFECTS__
function Au(e, t, o) {
  let a = /* @__PURE__ */ cc(e, t);
  tr(a) && (a = Te({}, a, t));
  class r extends Ci {
    constructor(n) {
      super(a, n, o);
    }
  }
  return r.def = a, r;
}
const Eu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ci extends Eu {
  constructor(t, o = {}, a = ti) {
    super(), this._def = t, this._props = o, this._createApp = a, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && a !== ti ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Te({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ci) {
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
    this._connected = !1, it(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const o of t)
      this._setAttr(o.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let a = 0; a < this.attributes.length; a++)
      this._setAttr(this.attributes[a].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (a, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: n } = a;
      let l;
      if (i && !re(i))
        for (const s in i) {
          const c = i[s];
          (c === Number || c && c.type === Number) && (s in this._props && (this._props[s] = Fr(this._props[s])), (l || (l = /* @__PURE__ */ Object.create(null)))[Re(s)] = !0);
        }
      this._numberProps = l, this._resolveProps(a), this.shadowRoot && this._applyStyles(n), this._mount(a);
    }, o = this._def.__asyncLoader;
    o ? this._pendingResolve = o().then((a) => {
      a.configureApp = this._def.configureApp, t(this._def = a, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const o = this._instance && this._instance.exposed;
    if (o)
      for (const a in o)
        ke(this, a) || Object.defineProperty(this, a, {
          // unwrap ref to be consistent with public instance behavior
          get: () => y(o[a])
        });
  }
  _resolveProps(t) {
    const { props: o } = t, a = re(o) ? o : Object.keys(o || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && a.includes(r) && this._setProp(r, this[r]);
    for (const r of a.map(Re))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const o = this.hasAttribute(t);
    let a = o ? this.getAttribute(t) : xn;
    const r = Re(t);
    o && this._numberProps && this._numberProps[r] && (a = Fr(a)), this._setProp(r, a, !1, !0);
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
  _setProp(t, o, a = !0, r = !1) {
    if (o !== this._props[t] && (this._dirty = !0, o === xn ? delete this._props[t] : (this._props[t] = o, t === "key" && this._app && (this._app._ceVNode.key = o)), r && this._instance && this._update(), a)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), o === !0 ? this.setAttribute(Xe(t), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(Xe(t), o + "") : o || this.removeAttribute(Xe(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), ei(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const o = U(this._def, Te(t, this._props));
    return this._instance || (o.ce = (a) => {
      this._instance = a, a.ce = this, a.isCE = !0;
      const r = (i, n) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            tr(n[0]) ? Te({ detail: n }, n[0]) : { detail: n }
          )
        );
      };
      a.emit = (i, ...n) => {
        r(i, n), Xe(i) !== i && r(Xe(i), n);
      }, this._setParent();
    }), o;
  }
  _applyStyles(t, o) {
    if (!t) return;
    if (o) {
      if (o === this._def || this._styleChildren.has(o))
        return;
      this._styleChildren.add(o);
    }
    const a = this._nonce;
    for (let r = t.length - 1; r >= 0; r--) {
      const i = document.createElement("style");
      a && i.setAttribute("nonce", a), i.textContent = t[r], this.shadowRoot.prepend(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let o;
    for (; o = this.firstChild; ) {
      const a = o.nodeType === 1 && o.getAttribute("slot") || "default";
      (t[a] || (t[a] = [])).push(o), this.removeChild(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), o = this._instance.type.__scopeId;
    for (let a = 0; a < t.length; a++) {
      const r = t[a], i = r.getAttribute("name") || "default", n = this._slots[i], l = r.parentNode;
      if (n)
        for (const s of n) {
          if (o && s.nodeType === 1) {
            const c = o + "-s", d = document.createTreeWalker(s, 1);
            s.setAttribute(c, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(c, "");
          }
          l.insertBefore(s, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const o = /* @__PURE__ */ new Set();
    for (const a of t) {
      const r = a.querySelectorAll("slot");
      for (let i = 0; i < r.length; i++)
        o.add(r[i]);
    }
    return Array.from(o);
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
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const no = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (o) => Ea(t, o) : t;
};
function Tu(e) {
  e.target.composing = !0;
}
function kn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ft = /* @__PURE__ */ Symbol("_assign");
function _n(e, t, o) {
  return t && (e = e.trim()), o && (e = ir(e)), e;
}
const Wa = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, r) {
    e[ft] = no(r);
    const i = a || r.props && r.props.type === "number";
    Ht(e, t ? "change" : "input", (n) => {
      n.target.composing || e[ft](_n(e.value, o, i));
    }), (o || i) && Ht(e, "change", () => {
      e.value = _n(e.value, o, i);
    }), t || (Ht(e, "compositionstart", Tu), Ht(e, "compositionend", kn), Ht(e, "change", kn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: r, number: i } }, n) {
    if (e[ft] = no(n), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ir(e.value) : e.value, s = t ?? "";
    l !== s && (document.activeElement === e && e.type !== "range" && (a && t === o || r && e.value.trim() === s) || (e.value = s));
  }
}, ws = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ft] = no(o), Ht(e, "change", () => {
      const a = e._modelValue, r = Fo(e), i = e.checked, n = e[ft];
      if (re(a)) {
        const l = pi(a, r), s = l !== -1;
        if (i && !s)
          n(a.concat(r));
        else if (!i && s) {
          const c = [...a];
          c.splice(l, 1), n(c);
        }
      } else if (Lo(a)) {
        const l = new Set(a);
        i ? l.add(r) : l.delete(r), n(l);
      } else
        n(xs(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: $n,
  beforeUpdate(e, t, o) {
    e[ft] = no(o), $n(e, t, o);
  }
};
function $n(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let r;
  if (re(t))
    r = pi(t, a.props.value) > -1;
  else if (Lo(t))
    r = t.has(a.props.value);
  else {
    if (t === o) return;
    r = ao(t, xs(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const Ou = {
  created(e, { value: t }, o) {
    e.checked = ao(t, o.props.value), e[ft] = no(o), Ht(e, "change", () => {
      e[ft](Fo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[ft] = no(a), t !== o && (e.checked = ao(t, a.props.value));
  }
}, zu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const r = Lo(t);
    Ht(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (n) => n.selected).map(
        (n) => o ? ir(Fo(n)) : Fo(n)
      );
      e[ft](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, it(() => {
        e._assigning = !1;
      });
    }), e[ft] = no(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Sn(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ft] = no(o);
  },
  updated(e, { value: t }) {
    e._assigning || Sn(e, t);
  }
};
function Sn(e, t) {
  const o = e.multiple, a = re(t);
  if (!(o && !a && !Lo(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const n = e.options[r], l = Fo(n);
      if (o)
        if (a) {
          const s = typeof l;
          s === "string" || s === "number" ? n.selected = t.some((c) => String(c) === String(l)) : n.selected = pi(t, l) > -1;
        } else
          n.selected = t.has(l);
      else if (ao(Fo(n), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Fo(e) {
  return "_value" in e ? e._value : e.value;
}
function xs(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const Vu = {
  created(e, t, o) {
    _a(e, t, o, null, "created");
  },
  mounted(e, t, o) {
    _a(e, t, o, null, "mounted");
  },
  beforeUpdate(e, t, o, a) {
    _a(e, t, o, a, "beforeUpdate");
  },
  updated(e, t, o, a) {
    _a(e, t, o, a, "updated");
  }
};
function Mu(e, t) {
  switch (e) {
    case "SELECT":
      return zu;
    case "TEXTAREA":
      return Wa;
    default:
      switch (t) {
        case "checkbox":
          return ws;
        case "radio":
          return Ou;
        default:
          return Wa;
      }
  }
}
function _a(e, t, o, a, r) {
  const n = Mu(
    e.tagName,
    o.props && o.props.type
  )[r];
  n && n(e, t, o, a);
}
const Bu = ["ctrl", "shift", "alt", "meta"], Pu = {
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
  exact: (e, t) => Bu.some((o) => e[`${o}Key`] && !t.includes(o))
}, Ke = (e, t) => {
  if (!e) return e;
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((r, ...i) => {
    for (let n = 0; n < t.length; n++) {
      const l = Pu[t[n]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Iu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, dt = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return o[a] || (o[a] = ((r) => {
    if (!("key" in r))
      return;
    const i = Xe(r.key);
    if (t.some(
      (n) => n === i || Iu[n] === i
    ))
      return e(r);
  }));
}, ju = /* @__PURE__ */ Te({ patchProp: Su }, nu);
let Cn;
function ks() {
  return Cn || (Cn = Rc(ju));
}
const ei = ((...e) => {
  ks().render(...e);
}), ti = ((...e) => {
  const t = ks().createApp(...e), { mount: o } = t;
  return t.mount = (a) => {
    const r = Nu(a);
    if (!r) return;
    const i = t._component;
    !pe(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const n = o(r, !1, Du(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), n;
  }, t;
});
function Du(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Nu(e) {
  return Oe(e) ? document.querySelector(e) : e;
}
function Fu(e) {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = e, document.head.appendChild(t);
}
function Lu(e, t) {
  ["https://rsms.me/inter/inter.css", "https://fonts.cdnfonts.com/css/poppins"].forEach((o) => {
    Fu(o);
  }), e.provide("enableFormNavGuard", t?.enableFormNavGuard);
}
function Ru(e, t) {
  Lu(e, t);
}
const Dt = /* @__PURE__ */ Pe({
  locale: "nl-NL",
  language: "nl",
  autoDetectLanguage: !0,
  currency: "EUR"
});
function Uu(e) {
  if (Dt.autoDetectLanguage) {
    console.warn("ProboDesignSystem: autoDetectLanguage is enabled. You cannot set the language manually.");
    return;
  }
  if (!["nl", "en", "de"].includes(e)) {
    console.warn(`ProboDesignSystem: ${e} is not a valid language. Valid languages are: nl, en, de`);
    return;
  }
  Dt.language = e;
}
const Ai = new MutationObserver((e) => {
  e[0]?.attributeName === "lang" && (Dt.language = document.documentElement.lang);
}), _s = () => Ai.disconnect();
function qu() {
  Ai.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", _s), Dt.autoDetectLanguage = !0;
}
function Hu() {
  Ai.disconnect(), window.removeEventListener("beforeunload", _s), Dt.autoDetectLanguage = !1;
}
ue(
  () => Dt.autoDetectLanguage,
  (e) => {
    if (e) {
      qu();
      return;
    }
    Hu();
  },
  {
    immediate: !0
  }
);
function Ku(e, t) {
  return v(), S("svg", {
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
const he = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, r] of t)
    o[a] = r;
  return o;
}, Wu = { class: "icon" }, Zu = {
  __name: "PIcon",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (v(), S("i", Wu, [
      (v(), Y(No(e.icon)))
    ]));
  }
}, Zt = /* @__PURE__ */ he(Zu, [["__scopeId", "data-v-0d12ef98"]]), Gu = {
  __name: "PHeading",
  props: {
    level: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, o) => (v(), Y(No(e.level), null, {
      default: O(() => [
        ie(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, St = /* @__PURE__ */ he(Gu, [["__scopeId", "data-v-2c80c3d1"]]), Ju = ["aria-disabled"], Yu = ["id", "aria-controls", "disabled"], Xu = ["id", "data-testid", "aria-hidden"], Qu = {
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
    const o = e, a = t, r = /* @__PURE__ */ F(null);
    return ue(
      () => o.modelValue,
      (i) => {
        i && o.scrollIntoView && setTimeout(() => r.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (i, n) => (v(), S("div", {
      class: ce(["accordion-item", { disabled: e.disabled }]),
      "aria-disabled": e.disabled
    }, [
      N("button", {
        id: `accordion-header-${e.ariaTitle}`,
        ref_key: "accordionHeader",
        ref: r,
        class: "header",
        "data-testid": "accordion-trigger",
        "aria-controls": `accordion-content-${e.ariaTitle}`,
        disabled: e.disabled,
        onClick: n[0] || (n[0] = (l) => a("update:modelValue", !e.modelValue))
      }, [
        ie(i.$slots, "header", {}, () => [
          U(St, {
            class: "title",
            level: "h3"
          }, {
            default: O(() => [
              ae(V(e.title), 1)
            ]),
            _: 1
          })
        ]),
        e.hideToggle ? L("", !0) : (v(), S("div", {
          key: 0,
          "data-testid": "accordion-state-indicator",
          class: ce(["state-indicator", { open: e.modelValue }])
        }, [
          U(Zt, {
            part: "state-indicator-icon",
            icon: y(Ku)
          }, null, 8, ["icon"])
        ], 2))
      ], 8, Yu),
      U(da, { name: "grow" }, {
        default: O(() => [
          xo(N("div", {
            id: `accordion-content-${e.ariaTitle}`,
            "data-testid": `accordion-content-${e.ariaTitle}`,
            "aria-hidden": !e.modelValue,
            class: "content"
          }, [
            U(da, { name: "fade" }, {
              default: O(() => [
                e.modelValue ? ie(i.$slots, "default", { key: 0 }) : L("", !0)
              ]),
              _: 3
            })
          ], 8, Xu), [
            [Si, e.modelValue]
          ])
        ]),
        _: 3
      })
    ], 10, Ju));
  }
}, $s = /* @__PURE__ */ he(Qu, [["__scopeId", "data-v-17b37b7b"]]), ef = {
  class: "accordion",
  "data-testid": "accordion"
}, tf = {
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
    const o = e, a = t, r = I(() => [...o.modelValue]);
    function i(n, l) {
      o.multiple ? (r.value[l] = n, a("update:modelValue", r.value)) : (r.value.forEach((s, c) => {
        c !== l && (r.value[c] = !1);
      }), a("update:modelValue", r.value));
    }
    return (n, l) => (v(), S("div", ef, [
      (v(!0), S(be, null, ro(e.items, (s, c) => ie(n.$slots, "default", Be({
        key: c,
        ref_for: !0
      }, { item: s, index: c, open: r.value[c] }), () => [
        U($s, {
          modelValue: r.value[c],
          "onUpdate:modelValue": [(d) => r.value[c] = d, (d) => i(d, c)],
          title: s[e.title],
          "aria-title": s.ariaTitle,
          disabled: e.disabled || s.disabled,
          "hide-toggle": e.disabled,
          "scroll-into-view": e.scrollIntoView
        }, {
          default: O(() => [
            ie(n.$slots, "content", Be({ ref_for: !0 }, s), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "aria-title", "disabled", "hide-toggle", "scroll-into-view"])
      ], !0)), 128))
    ]));
  }
}, Ss = /* @__PURE__ */ he(tf, [["__scopeId", "data-v-25a8f65e"]]);
function An(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), o.push.apply(o, a);
  }
  return o;
}
function to(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? An(Object(o), !0).forEach(function(a) {
      of(e, a, o[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : An(Object(o)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(o, a));
    });
  }
  return e;
}
function of(e, t, o) {
  return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = o, e;
}
function En(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((o, a) => (t.includes(a) || (o[a] = y(e[a])), o), {});
}
function Za(e) {
  return typeof e == "function";
}
function af(e) {
  return /* @__PURE__ */ oo(e) || /* @__PURE__ */ jt(e);
}
function Cs(e, t, o) {
  let a = e;
  const r = t.split(".");
  for (let i = 0; i < r.length; i++) {
    if (!a[r[i]]) return o;
    a = a[r[i]];
  }
  return a;
}
function Mr(e, t, o) {
  return I(() => e.some((a) => Cs(t, a, {
    [o]: !1
  })[o]));
}
function Tn(e, t, o) {
  return I(() => e.reduce((a, r) => {
    const i = Cs(t, r, {
      [o]: !1
    })[o] || [];
    return a.concat(i);
  }, []));
}
function As(e, t, o, a) {
  return e.call(a, y(t), y(o), a);
}
function Es(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function rf(e, t, o, a, r, i, n) {
  let {
    $lazy: l,
    $rewardEarly: s
  } = r, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], d = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, f = arguments.length > 10 ? arguments[10] : void 0;
  const p = /* @__PURE__ */ F(!!a.value), h = /* @__PURE__ */ F(0);
  o.value = !1;
  const m = ue([t, a].concat(c, f), () => {
    if (l && !a.value || s && !u.value && !o.value)
      return;
    let w;
    try {
      w = As(e, t, d, n);
    } catch (x) {
      w = Promise.reject(x);
    }
    h.value++, o.value = !!h.value, p.value = !1, Promise.resolve(w).then((x) => {
      h.value--, o.value = !!h.value, i.value = x, p.value = Es(x);
    }).catch((x) => {
      h.value--, o.value = !!h.value, i.value = x, p.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: p,
    $unwatch: m
  };
}
function nf(e, t, o, a, r, i, n, l) {
  let {
    $lazy: s,
    $rewardEarly: c
  } = a;
  const d = () => ({}), u = I(() => {
    if (s && !o.value || c && !l.value)
      return !1;
    let f = !0;
    try {
      const p = As(e, t, n, i);
      r.value = p, f = Es(p);
    } catch (p) {
      r.value = p;
    }
    return f;
  });
  return {
    $unwatch: d,
    $invalid: u
  };
}
function lf(e, t, o, a, r, i, n, l, s, c, d) {
  const u = /* @__PURE__ */ F(!1), f = e.$params || {}, p = /* @__PURE__ */ F(null);
  let h, m;
  e.$async ? {
    $invalid: h,
    $unwatch: m
  } = rf(e.$validator, t, u, o, a, p, r, e.$watchTargets, s, c, d) : {
    $invalid: h,
    $unwatch: m
  } = nf(e.$validator, t, o, a, p, r, s, c);
  const w = e.$message;
  return {
    $message: Za(w) ? I(() => w(En({
      $pending: u,
      $invalid: h,
      $params: En(f),
      $model: t,
      $response: p,
      $validator: i,
      $propertyPath: l,
      $property: n
    }))) : w || "",
    $params: f,
    $pending: u,
    $invalid: h,
    $response: p,
    $unwatch: m
  };
}
function sf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = y(e), o = Object.keys(t), a = {}, r = {}, i = {};
  let n = null;
  return o.forEach((l) => {
    const s = t[l];
    switch (!0) {
      case Za(s.$validator):
        a[l] = s;
        break;
      case Za(s):
        a[l] = {
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
        r[l] = s;
    }
  }), {
    rules: a,
    nestedValidators: r,
    config: i,
    validationGroups: n
  };
}
const df = "__root";
function cf(e, t, o, a, r, i, n, l, s) {
  const c = Object.keys(e), d = a.get(r, e), u = /* @__PURE__ */ F(!1), f = /* @__PURE__ */ F(!1), p = /* @__PURE__ */ F(0);
  if (d) {
    if (!d.$partial) return d;
    d.$unwatch(), u.value = d.$dirty.value;
  }
  const h = {
    $dirty: u,
    $path: r,
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
    h[m] = lf(e[m], t, h.$dirty, i, n, m, o, r, s, f, p);
  }), h.$externalResults = I(() => l.value ? [].concat(l.value).map((m, w) => ({
    $propertyPath: r,
    $property: o,
    $validator: "$externalResults",
    $uid: `${r}-externalResult-${w}`,
    $message: m,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), h.$invalid = I(() => {
    const m = c.some((w) => y(h[w].$invalid));
    return f.value = m, !!h.$externalResults.value.length || m;
  }), h.$pending = I(() => c.some((m) => y(h[m].$pending))), h.$error = I(() => h.$dirty.value ? h.$pending.value || h.$invalid.value : !1), h.$silentErrors = I(() => c.filter((m) => y(h[m].$invalid)).map((m) => {
    const w = h[m];
    return /* @__PURE__ */ Pe({
      $propertyPath: r,
      $property: o,
      $validator: m,
      $uid: `${r}-${m}`,
      $message: w.$message,
      $params: w.$params,
      $response: w.$response,
      $pending: w.$pending
    });
  }).concat(h.$externalResults.value)), h.$errors = I(() => h.$dirty.value ? h.$silentErrors.value : []), h.$unwatch = () => c.forEach((m) => {
    h[m].$unwatch();
  }), h.$commit = () => {
    f.value = !0, p.value = Date.now();
  }, a.set(r, e, h), h) : (d && a.set(r, e, h), h);
}
function uf(e, t, o, a, r, i, n) {
  const l = Object.keys(e);
  return l.length ? l.reduce((s, c) => (s[c] = oi({
    validations: e[c],
    state: t,
    key: c,
    parentKey: o,
    resultsCache: a,
    globalConfig: r,
    instance: i,
    externalResults: n
  }), s), {}) : {};
}
function ff(e, t, o) {
  const a = I(() => [t, o].filter((h) => h).reduce((h, m) => h.concat(Object.values(y(m))), [])), r = I({
    get() {
      return e.$dirty.value || (a.value.length ? a.value.every((h) => h.$dirty) : !1);
    },
    set(h) {
      e.$dirty.value = h;
    }
  }), i = I(() => {
    const h = y(e.$silentErrors) || [], m = a.value.filter((w) => (y(w).$silentErrors || []).length).reduce((w, x) => w.concat(...x.$silentErrors), []);
    return h.concat(m);
  }), n = I(() => {
    const h = y(e.$errors) || [], m = a.value.filter((w) => (y(w).$errors || []).length).reduce((w, x) => w.concat(...x.$errors), []);
    return h.concat(m);
  }), l = I(() => a.value.some((h) => h.$invalid) || y(e.$invalid) || !1), s = I(() => a.value.some((h) => y(h.$pending)) || y(e.$pending) || !1), c = I(() => a.value.some((h) => h.$dirty) || a.value.some((h) => h.$anyDirty) || r.value), d = I(() => r.value ? s.value || l.value : !1), u = () => {
    e.$touch(), a.value.forEach((h) => {
      h.$touch();
    });
  }, f = () => {
    e.$commit(), a.value.forEach((h) => {
      h.$commit();
    });
  }, p = () => {
    e.$reset(), a.value.forEach((h) => {
      h.$reset();
    });
  };
  return a.value.length && a.value.every((h) => h.$dirty) && u(), {
    $dirty: r,
    $errors: n,
    $invalid: l,
    $anyDirty: c,
    $error: d,
    $pending: s,
    $touch: u,
    $reset: p,
    $silentErrors: i,
    $commit: f
  };
}
function oi(e) {
  let {
    validations: t,
    state: o,
    key: a,
    parentKey: r,
    childResults: i,
    resultsCache: n,
    globalConfig: l = {},
    instance: s,
    externalResults: c
  } = e;
  const d = r ? `${r}.${a}` : a, {
    rules: u,
    nestedValidators: f,
    config: p,
    validationGroups: h
  } = sf(t), m = to(to({}, l), p), w = a ? I(() => {
    const Ce = y(o);
    return Ce ? y(Ce[a]) : void 0;
  }) : o, x = to({}, y(c) || {}), _ = I(() => {
    const Ce = y(c);
    return a ? Ce ? y(Ce[a]) : void 0 : Ce;
  }), $ = cf(u, w, a, n, d, m, s, _, o), b = uf(f, w, d, n, m, s, _), C = {};
  h && Object.entries(h).forEach((Ce) => {
    let [Ie, Ve] = Ce;
    C[Ie] = {
      $invalid: Mr(Ve, b, "$invalid"),
      $error: Mr(Ve, b, "$error"),
      $pending: Mr(Ve, b, "$pending"),
      $errors: Tn(Ve, b, "$errors"),
      $silentErrors: Tn(Ve, b, "$silentErrors")
    };
  });
  const {
    $dirty: A,
    $errors: K,
    $invalid: Z,
    $anyDirty: j,
    $error: T,
    $pending: D,
    $touch: z,
    $reset: M,
    $silentErrors: G,
    $commit: P
  } = ff($, b, i), Q = a ? I({
    get: () => y(w),
    set: (Ce) => {
      A.value = !0;
      const Ie = y(o), Ve = y(c);
      Ve && (Ve[a] = x[a]), /* @__PURE__ */ Me(Ie[a]) ? Ie[a].value = Ce : Ie[a] = Ce;
    }
  }) : null;
  a && m.$autoDirty && ue(w, () => {
    A.value || z();
    const Ce = y(c);
    Ce && (Ce[a] = x[a]);
  }, {
    flush: "sync"
  });
  async function de() {
    return z(), m.$rewardEarly && (P(), await it()), await it(), new Promise((Ce) => {
      if (!D.value) return Ce(!Z.value);
      const Ie = ue(D, () => {
        Ce(!Z.value), Ie();
      });
    });
  }
  function le(Ce) {
    return (i.value || {})[Ce];
  }
  function We() {
    /* @__PURE__ */ Me(c) ? c.value = x : Object.keys(x).length === 0 ? Object.keys(c).forEach((Ce) => {
      delete c[Ce];
    }) : Object.assign(c, x);
  }
  return /* @__PURE__ */ Pe(to(to(to({}, $), {}, {
    $model: Q,
    $dirty: A,
    $error: T,
    $errors: K,
    $invalid: Z,
    $anyDirty: j,
    $pending: D,
    $touch: z,
    $reset: M,
    $path: d || df,
    $silentErrors: G,
    $validate: de,
    $commit: P
  }, i && {
    $getResultsForChild: le,
    $clearExternalResults: We,
    $validationGroups: C
  }), b));
}
let pf = class {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(t, o, a) {
    this.storage.set(t, {
      rules: o,
      result: a
    });
  }
  checkRulesValidity(t, o, a) {
    const r = Object.keys(a), i = Object.keys(o);
    return i.length !== r.length || !i.every((n) => r.includes(n)) ? !1 : i.every((n) => o[n].$params ? Object.keys(o[n].$params).every((l) => y(a[n].$params[l]) === y(o[n].$params[l])) : !0);
  }
  get(t, o) {
    const a = this.storage.get(t);
    if (!a) return;
    const {
      rules: r,
      result: i
    } = a, n = this.checkRulesValidity(t, o, r), l = i.$unwatch ? i.$unwatch : () => ({});
    return n ? i : {
      $dirty: i.$dirty,
      $partial: !0,
      $unwatch: l
    };
  }
};
const Va = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, On = /* @__PURE__ */ Symbol("vuelidate#injectChildResults"), zn = /* @__PURE__ */ Symbol("vuelidate#removeChildResults");
function hf(e) {
  let {
    $scope: t,
    instance: o
  } = e;
  const a = {}, r = /* @__PURE__ */ F([]), i = I(() => r.value.reduce((d, u) => (d[u] = y(a[u]), d), {}));
  function n(d, u) {
    let {
      $registerAs: f,
      $scope: p,
      $stopPropagation: h
    } = u;
    h || t === Va.COLLECT_NONE || p === Va.COLLECT_NONE || t !== Va.COLLECT_ALL && t !== p || (a[f] = d, r.value.push(f));
  }
  o.__vuelidateInjectInstances = [].concat(o.__vuelidateInjectInstances || [], n);
  function l(d) {
    r.value = r.value.filter((u) => u !== d), delete a[d];
  }
  o.__vuelidateRemoveInstances = [].concat(o.__vuelidateRemoveInstances || [], l);
  const s = yt(On, []);
  Na(On, o.__vuelidateInjectInstances);
  const c = yt(zn, []);
  return Na(zn, o.__vuelidateRemoveInstances), {
    childResults: i,
    sendValidationResultsToParent: s,
    removeValidationResultsFromParent: c
  };
}
function Ts(e) {
  return new Proxy(e, {
    get(t, o) {
      return typeof t[o] == "object" ? Ts(t[o]) : I(() => t[o]);
    }
  });
}
let Vn = 0;
function lo(e, t) {
  var o;
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (a = e, e = void 0, t = void 0);
  let {
    $registerAs: r,
    $scope: i = Va.COLLECT_ALL,
    $stopPropagation: n,
    $externalResults: l,
    currentVueInstance: s
  } = a;
  const c = s || ((o = ht()) === null || o === void 0 ? void 0 : o.proxy), d = c ? c.$options : {};
  r || (Vn += 1, r = `_vuelidate_${Vn}`);
  const u = /* @__PURE__ */ F({}), f = new pf(), {
    childResults: p,
    sendValidationResultsToParent: h,
    removeValidationResultsFromParent: m
  } = c ? hf({
    $scope: i,
    instance: c
  }) : {
    childResults: /* @__PURE__ */ F({})
  };
  if (!e && d.validations) {
    const w = d.validations;
    t = /* @__PURE__ */ F({}), Ll(() => {
      t.value = c, ue(() => Za(w) ? w.call(t.value, new Ts(t.value)) : w, (x) => {
        u.value = oi({
          validations: x,
          state: t,
          childResults: p,
          resultsCache: f,
          globalConfig: a,
          instance: c,
          externalResults: l || c.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), a = d.validationsConfig || a;
  } else {
    const w = /* @__PURE__ */ Me(e) || af(e) ? e : /* @__PURE__ */ Pe(e || {});
    ue(w, (x) => {
      u.value = oi({
        validations: x,
        state: t,
        childResults: p,
        resultsCache: f,
        globalConfig: a,
        instance: c ?? {},
        externalResults: l
      });
    }, {
      immediate: !0
    });
  }
  return c && (h.forEach((w) => w(u, {
    $registerAs: r,
    $scope: i,
    $stopPropagation: n
  })), $o(() => m.forEach((w) => w(r)))), I(() => to(to({}, y(u.value)), p.value));
}
function Mn(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), o.push.apply(o, a);
  }
  return o;
}
function ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mn(Object(o), !0).forEach(function(a) {
      mf(e, a, o[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Mn(Object(o)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(o, a));
    });
  }
  return e;
}
function mf(e, t, o) {
  return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = o, e;
}
function Ga(e) {
  return typeof e == "function";
}
function ai(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function br(e) {
  return Ga(e.$validator) ? ca({}, e) : {
    $validator: e
  };
}
function Os(e) {
  return typeof e == "object" ? e.$valid : e;
}
function zs(e) {
  return e.$validator || e;
}
function vf(e, t) {
  if (!ai(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!ai(t) && !Ga(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const o = br(t);
  return o.$params = ca(ca({}, o.$params || {}), e), o;
}
function gf(e, t) {
  if (!Ga(e) && typeof y(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!ai(t) && !Ga(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const o = br(t);
  return o.$message = e, o;
}
function bf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const o = br(e);
  return ca(ca({}, o), {}, {
    $async: !0,
    $watchTargets: t
  });
}
function yf(e) {
  return {
    $validator(t) {
      for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
        a[r - 1] = arguments[r];
      return y(t).reduce((i, n, l) => {
        const s = Object.entries(n).reduce((c, d) => {
          let [u, f] = d;
          const p = e[u] || {}, h = Object.entries(p).reduce((m, w) => {
            let [x, _] = w;
            const $ = zs(_).call(this, f, n, l, ...a), b = Os($);
            if (m.$data[x] = $, m.$data.$invalid = !b || !!m.$data.$invalid, m.$data.$error = m.$data.$invalid, !b) {
              let C = _.$message || "";
              const A = _.$params || {};
              typeof C == "function" && (C = C({
                $pending: !1,
                $invalid: !b,
                $params: A,
                $model: f,
                $response: $
              })), m.$errors.push({
                $property: u,
                $message: C,
                $params: A,
                $response: $,
                $model: f,
                $pending: !1,
                $validator: x
              });
            }
            return {
              $valid: m.$valid && b,
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
        $response: o
      } = t;
      return o ? o.$errors.map((a) => Object.values(a).map((r) => r.map((i) => i.$message)).reduce((r, i) => r.concat(i), [])) : [];
    }
  };
}
const ga = (e) => {
  if (e = y(e), Array.isArray(e)) return !!e.length;
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
}, wf = (e) => (e = y(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function so() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return (a) => (a = y(a), !ga(a) || t.every((r) => (r.lastIndex = 0, r.test(a))));
}
var He = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: yf,
  len: wf,
  normalizeValidatorObject: br,
  regex: so,
  req: ga,
  unwrap: y,
  unwrapNormalizedValidator: zs,
  unwrapValidatorResponse: Os,
  withAsync: bf,
  withMessage: gf,
  withParams: vf
});
so(/^[a-zA-Z]*$/);
so(/^[a-zA-Z0-9]*$/);
so(/^\d*(\.\d+)?$/);
const xf = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
so(xf);
function kf(e) {
  return typeof e == "string" && (e = e.trim()), ga(e);
}
var ua = {
  $validator: kf,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function _f(e) {
  return (t) => y(t) === y(e);
}
function $f(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: _f(e),
    $message: (o) => `The value must be equal to the ${t} value`,
    $params: {
      equalTo: e,
      otherName: t,
      type: "sameAs"
    }
  };
}
const Sf = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
so(Sf);
function Cf(e) {
  return (t) => !ga(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +y(e);
}
function Ja(e) {
  return {
    $validator: Cf(e),
    $message: (t) => {
      let {
        $params: o
      } = t;
      return `The minimum value allowed is ${o.min}`;
    },
    $params: {
      min: e,
      type: "minValue"
    }
  };
}
function Af(e) {
  return (t) => !ga(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +y(e);
}
var Ya = ((e) => ({
  $validator: Af(e),
  $message: (t) => {
    let {
      $params: o
    } = t;
    return `The maximum value allowed is ${o.max}`;
  },
  $params: {
    max: e,
    type: "maxValue"
  }
}));
so(/(^[0-9]*$)|(^-[0-9]+$)/);
so(/^[-]?\d*(\.\d+)?$/);
function Ef(e, t) {
  return v(), S("svg", {
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
function Tf(e, t) {
  return v(), S("svg", {
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
function Of(e, t) {
  return v(), S("svg", {
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
function zf(e, t) {
  return v(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" })
  ]);
}
const Vf = { class: "mini-icon" }, Mf = {
  __name: "PIconMini",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (v(), S("i", Vf, [
      (v(), Y(No(e.icon)))
    ]));
  }
}, wt = /* @__PURE__ */ he(Mf, [["__scopeId", "data-v-83781390"]]), Bf = {
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
  "data-table.all": "Alles",
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
  "form.unsaved_changes.title": "Niet-opgeslagen wijzigingen",
  "form.unsaved_changes.message": "Je hebt niet-opgeslagen wijzigingen. Weet je zeker dat je deze pagina wilt verlaten?",
  "form.unsaved_changes.leave": "Pagina verlaten",
  "form.unsaved_changes.stay": "Op pagina blijven",
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
  "application-layout.open_navigation": "Navigatie openen",
  "application-layout.close_navigation": "Navigatie sluiten",
  "application-layout.expand_sidebar": "Zijbalk uitklappen",
  "application-layout.collapse_sidebar": "Zijbalk inklappen",
  "application-layout.navigation": "Navigatie",
  "application-layout.open_user_menu": "Gebruikersmenu openen",
  "drawer.close": "Sluit zijbalk",
  "header.back_to_home": "Terug naar home",
  "page-header.scroll_top": "Scroll naar boven",
  "sidebar.title": "Navigatie zijbalk",
  "breadcrumb.label": "Navigatiepad",
  "breadcrumb.show_hidden_breadcrumbs": "Verborgen niveaus van het navigatiepad tonen",
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
}, Pf = {
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
  "data-table.all": "All",
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
  "form.unsaved_changes.title": "Unsaved changes",
  "form.unsaved_changes.message": "You have unsaved changes. Are you sure you want to leave this page?",
  "form.unsaved_changes.leave": "Leave page",
  "form.unsaved_changes.stay": "Stay on page",
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
  "application-layout.open_navigation": "Open navigation",
  "application-layout.close_navigation": "Close navigation",
  "application-layout.expand_sidebar": "Expand sidebar",
  "application-layout.collapse_sidebar": "Collapse sidebar",
  "application-layout.navigation": "Navigation",
  "application-layout.open_user_menu": "Open user menu",
  "drawer.close": "Close drawer",
  "header.back_to_home": "Back to home",
  "page-header.scroll_top": "Scroll to top",
  "sidebar.title": "Navigation sidebar",
  "breadcrumb.label": "Breadcrumb",
  "breadcrumb.show_hidden_breadcrumbs": "Show hidden breadcrumbs",
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
}, If = {
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
  "data-table.all": "Alle",
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
  "form.unsaved_changes.title": "Ungespeicherte Änderungen",
  "form.unsaved_changes.message": "Sie haben ungespeicherte Änderungen. Sind Sie sicher, dass Sie diese Seite verlassen möchten?",
  "form.unsaved_changes.leave": "Seite verlassen",
  "form.unsaved_changes.stay": "Auf der Seite bleiben",
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
  "application-layout.open_navigation": "Navigation öffnen",
  "application-layout.close_navigation": "Navigation schließen",
  "application-layout.expand_sidebar": "Seitenleiste erweitern",
  "application-layout.collapse_sidebar": "Seitenleiste einklappen",
  "application-layout.navigation": "Navigation",
  "application-layout.open_user_menu": "Benutzermenü öffnen",
  "drawer.close": "Schließ die Leiste",
  "header.back_to_home": "Zurück zu home",
  "page-header.scroll_top": "Nach oben scrollen",
  "sidebar.title": "Navigationsleiste",
  "breadcrumb.label": "Navigationspfad",
  "breadcrumb.show_hidden_breadcrumbs": "Ausgeblendete Ebenen des Navigationspfads anzeigen",
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
}, jf = { nl: Bf, en: Pf, de: If };
function Vs(e, t = {}) {
  return e.replace(/{(\w+)}/g, (o, a) => t[a] || `{${a}}`);
}
function Ms(e) {
  const [t] = e.split("."), o = e.substring(e.indexOf(".") + 1);
  return jf[Dt.language][`${t}.${o}`] || e;
}
function Df(e, t) {
  return e.replace(/{(\d+)}/g, (o, a) => t[a] || `{${a}}`);
}
function Nf(e, t, o = {}) {
  const a = e.split("|").map((i) => i.trim());
  let r;
  return a.length === 1 ? [r] = a : a.length === 2 ? t === 1 ? [r] = a : [, r] = a : t === 0 ? [r] = a : t === 1 ? [, r] = a : r = a[Math.min(t, a.length - 1)], Vs(r, { ...o, count: t, n: t });
}
function B(e, t = null) {
  const o = Ms(e);
  return Array.isArray(t) ? Df(o) : Vs(o, t);
}
function Ff(e, t, o = null) {
  return Nf(Ms(e), t, o);
}
const Lf = { class: "amount-input-container" }, Rf = ["disabled", "aria-label"], Uf = ["id", "disabled", "aria-invalid", "aria-describedby"], qf = ["disabled", "aria-label"], Hf = ["id"], Kf = {
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
    const o = e, a = t, r = I({
      get() {
        return !o.allowEmpty && !o.modelValue ? 1 : o.modelValue;
      },
      set(h) {
        c(h);
      }
    }), i = I(() => o.allowEmpty ? !r.value : r.value === 1), n = I(() => r.value >= o.max), l = I(() => !!o.error), s = I(() => `${o.id}-error`);
    function c(h) {
      if (o.allowEmpty && !h) {
        a("update:model-value", null);
        return;
      }
      h < 0 || Number.isNaN(h) || typeof h != "number" || !h ? (Ui(r), a("update:model-value", 1)) : h > o.max ? (Ui(r), a("update:model-value", o.max)) : a("update:model-value", h);
    }
    function d() {
      r.value -= 1;
    }
    function u() {
      r.value += 1;
    }
    const f = I(() => o.required ? { value: { required: He.withMessage(() => B("input.required"), ua) } } : { value: {} }), p = lo(f.value, { value: r });
    return (h, m) => (v(), S("div", Lf, [
      N("div", {
        class: ce(["amount-input", { small: e.small }])
      }, [
        N("button", {
          disabled: e.disabled || i.value,
          class: "minus",
          "aria-label": y(B)("amount-input.minus_one"),
          onClick: Ke(d, ["stop"])
        }, [
          e.small ? (v(), Y(wt, {
            key: 1,
            icon: y(Of)
          }, null, 8, ["icon"])) : (v(), Y(Zt, {
            key: 0,
            icon: y(Ef)
          }, null, 8, ["icon"]))
        ], 8, Rf),
        xo(N("input", {
          id: e.id,
          "onUpdate:modelValue": m[0] || (m[0] = (w) => r.value = w),
          class: ce([{ "has-error": e.error }, "input"]),
          disabled: e.disabled,
          "aria-label": "Amount input",
          "aria-invalid": l.value,
          "aria-describedby": l.value ? s.value : null,
          type: "number",
          onBlur: m[1] || (m[1] = (w) => {
            y(p).value?.$touch(w), a("blur", w);
          }),
          onFocus: m[2] || (m[2] = (w) => a("focus", w))
        }, null, 42, Uf), [
          [Wa, r.value]
        ]),
        N("button", {
          disabled: e.disabled || n.value,
          class: "plus",
          "aria-label": y(B)("amount-input.plus_one"),
          onClick: Ke(u, ["stop"])
        }, [
          e.small ? (v(), Y(wt, {
            key: 1,
            icon: y(zf)
          }, null, 8, ["icon"])) : (v(), Y(Zt, {
            key: 0,
            icon: y(Tf)
          }, null, 8, ["icon"]))
        ], 8, qf)
      ], 2),
      e.error || y(p).value?.$errors[0]?.$message ? (v(), S("span", {
        key: 0,
        id: s.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, V(e.error || y(p).value.$errors[0].$message), 9, Hf)) : L("", !0)
    ]));
  }
}, Ei = /* @__PURE__ */ he(Kf, [["__scopeId", "data-v-44d789fb"]]);
function Bs(e, t) {
  return hi() ? (xd(e, t), !0) : !1;
}
const Br = /* @__PURE__ */ new WeakMap(), Wf = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const o = e[0], a = (t = ht()) === null || t === void 0 ? void 0 : t.proxy, r = a ?? hi();
  if (r == null && !zl()) throw new Error("injectLocal must be called in setup");
  return r && Br.has(r) && o in Br.get(r) ? Br.get(r)[o] : yt(...e);
}, Zf = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gf = (e) => e != null, Jf = Object.prototype.toString, Yf = (e) => Jf.call(e) === "[object Object]", zo = () => {
};
function Bn(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Ma(e) {
  return Array.isArray(e) ? e : [e];
}
function Xf(e) {
  return ht();
}
function Qf(e, t = !0, o) {
  Xf() ? et(e, o) : t ? e() : it(e);
}
function ep(e, t, o) {
  return ue(e, t, {
    ...o,
    immediate: !0
  });
}
const co = Zf ? window : void 0;
function bo(e) {
  var t;
  const o = ut(e);
  return (t = o?.$el) !== null && t !== void 0 ? t : o;
}
function ct(...e) {
  const t = (a, r, i, n) => (a.addEventListener(r, i, n), () => a.removeEventListener(r, i, n)), o = I(() => {
    const a = Ma(ut(e[0])).filter((r) => r != null);
    return a.every((r) => typeof r != "string") ? a : void 0;
  });
  return ep(() => {
    var a, r;
    return [
      (a = (r = o.value) === null || r === void 0 ? void 0 : r.map((i) => bo(i))) !== null && a !== void 0 ? a : [co].filter((i) => i != null),
      Ma(ut(o.value ? e[1] : e[0])),
      Ma(y(o.value ? e[2] : e[1])),
      ut(o.value ? e[3] : e[2])
    ];
  }, ([a, r, i, n], l, s) => {
    if (!a?.length || !r?.length || !i?.length) return;
    const c = Yf(n) ? { ...n } : n, d = a.flatMap((u) => r.flatMap((f) => i.map((p) => t(u, f, p, c))));
    s(() => {
      d.forEach((u) => u());
    });
  }, { flush: "post" });
}
function tp(e, t, o = {}) {
  const { window: a = co, ignore: r = [], capture: i = !0, detectIframe: n = !1, controls: l = !1 } = o;
  if (!a) return l ? {
    stop: zo,
    cancel: zo,
    trigger: zo
  } : zo;
  let s = !0;
  const c = (w) => ut(r).some((x) => {
    if (typeof x == "string") return Array.from(a.document.querySelectorAll(x)).some((_) => _ === w.target || w.composedPath().includes(_));
    {
      const _ = bo(x);
      return _ && (w.target === _ || w.composedPath().includes(_));
    }
  });
  function d(w) {
    const x = ut(w);
    return x && x.$.subTree.shapeFlag === 16;
  }
  function u(w, x) {
    const _ = ut(w), $ = _.$.subTree && _.$.subTree.children;
    return $ == null || !Array.isArray($) ? !1 : $.some((b) => b.el === x.target || x.composedPath().includes(b.el));
  }
  const f = (w) => {
    const x = bo(e);
    if (w.target != null && !(!(x instanceof Element) && d(e) && u(e, w)) && !(!x || x === w.target || w.composedPath().includes(x))) {
      if ("detail" in w && w.detail === 0 && (s = !c(w)), !s) {
        s = !0;
        return;
      }
      t(w);
    }
  };
  let p = !1;
  const h = [
    ct(a, "click", (w) => {
      p || (p = !0, setTimeout(() => {
        p = !1;
      }, 0), f(w));
    }, {
      passive: !0,
      capture: i
    }),
    ct(a, "pointerdown", (w) => {
      const x = bo(e);
      s = !c(w) && !!(x && !w.composedPath().includes(x));
    }, { passive: !0 }),
    n && ct(a, "blur", (w) => {
      setTimeout(() => {
        var x;
        const _ = bo(e);
        ((x = a.document.activeElement) === null || x === void 0 ? void 0 : x.tagName) === "IFRAME" && !_?.contains(a.document.activeElement) && t(w);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), m = () => h.forEach((w) => w());
  return l ? {
    stop: m,
    cancel: () => {
      s = !1;
    },
    trigger: (w) => {
      s = !0, f(w), s = !1;
    }
  } : m;
}
// @__NO_SIDE_EFFECTS__
function op() {
  const e = /* @__PURE__ */ It(!1), t = ht();
  return t && et(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ op();
  return I(() => (t.value, !!e()));
}
function ap(e, t, o = {}) {
  const { window: a = co, ...r } = o;
  let i;
  const n = /* @__PURE__ */ Ps(() => a && "MutationObserver" in a), l = () => {
    i && (i.disconnect(), i = void 0);
  }, s = ue(I(() => {
    const u = Ma(ut(e)).map(bo).filter(Gf);
    return new Set(u);
  }), (u) => {
    l(), n.value && u.size && (i = new MutationObserver(t), u.forEach((f) => i.observe(f, r)));
  }, {
    immediate: !0,
    flush: "post"
  }), c = () => i?.takeRecords(), d = () => {
    s(), l();
  };
  return Bs(d), {
    isSupported: n,
    stop: d,
    takeRecords: c
  };
}
function rp(e, t, o = {}) {
  const { window: a = co, document: r = a?.document, flush: i = "sync" } = o;
  if (!a || !r) return zo;
  let n;
  const l = (d) => {
    n?.(), n = d;
  }, s = xi(() => {
    const d = bo(e);
    if (d) {
      const { stop: u } = ap(r, (f) => {
        f.map((p) => [...p.removedNodes]).flat().some((p) => p === d || p.contains(d)) && t(f);
      }, {
        window: a,
        childList: !0,
        subtree: !0
      });
      l(u);
    }
  }, { flush: i }), c = () => {
    s(), l();
  };
  return Bs(c), c;
}
// @__NO_SIDE_EFFECTS__
function ip(e = {}) {
  var t;
  const { window: o = co, deep: a = !0, triggerOnRemoval: r = !1 } = e, i = (t = e.document) !== null && t !== void 0 ? t : o?.document, n = () => {
    let c = i?.activeElement;
    if (a)
      for (var d; c?.shadowRoot; ) c = c == null || (d = c.shadowRoot) === null || d === void 0 ? void 0 : d.activeElement;
    return c;
  }, l = /* @__PURE__ */ It(), s = () => {
    l.value = n();
  };
  if (o) {
    const c = {
      capture: !0,
      passive: !0
    };
    ct(o, "blur", (d) => {
      d.relatedTarget === null && s();
    }, c), ct(o, "focus", s, c);
  }
  return r && rp(l, s, { document: i }), s(), l;
}
const np = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function lp() {
  const e = zl() ? /* @__PURE__ */ Wf(np, null) : null;
  return typeof e == "number" ? e : void 0;
}
function sp(e, t = {}) {
  const { window: o = co, ssrWidth: a = /* @__PURE__ */ lp() } = t, r = /* @__PURE__ */ Ps(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), i = /* @__PURE__ */ It(typeof a == "number"), n = /* @__PURE__ */ It(), l = /* @__PURE__ */ It(!1), s = (c) => {
    l.value = c.matches;
  };
  return xi(() => {
    if (i.value) {
      i.value = !r.value, l.value = ut(e).split(",").some((c) => {
        const d = c.includes("not all"), u = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), f = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(u || f);
        return u && p && (p = a >= Bn(u[1])), f && p && (p = a <= Bn(f[1])), d ? !p : p;
      });
      return;
    }
    r.value && (n.value = o.matchMedia(ut(e)), l.value = n.value.matches);
  }), ct(n, "change", s, { passive: !0 }), I(() => l.value);
}
const dp = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function Ti(e = {}) {
  const { reactive: t = !1, target: o = co, aliasMap: a = dp, passive: r = !0, onEventFired: i = zo } = e, n = /* @__PURE__ */ Pe(/* @__PURE__ */ new Set()), l = {
    toJSON() {
      return {};
    },
    current: n
  }, s = t ? /* @__PURE__ */ Pe(l) : l, c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map([
    ["Meta", c],
    ["Shift", /* @__PURE__ */ new Set()],
    ["Alt", /* @__PURE__ */ new Set()]
  ]), u = /* @__PURE__ */ new Set();
  function f(_, $) {
    _ in s && (t ? s[_] = $ : s[_].value = $);
  }
  function p() {
    n.clear();
    for (const _ of u) f(_, !1);
  }
  function h(_, $, b) {
    if (!(!_ || typeof $.getModifierState != "function")) {
      for (const [C, A] of d) if ($.getModifierState(C)) {
        b.forEach((K) => A.add(K));
        break;
      }
    }
  }
  function m(_, $) {
    if (_) return;
    const b = `${$[0].toUpperCase()}${$.slice(1)}`, C = d.get(b);
    if (!["shift", "alt"].includes($) || !C) return;
    const A = Array.from(C), K = A.indexOf($);
    A.forEach((Z, j) => {
      j >= K && (n.delete(Z), f(Z, !1));
    }), C.clear();
  }
  function w(_, $) {
    var b, C;
    const A = (b = _.key) === null || b === void 0 ? void 0 : b.toLowerCase(), K = [(C = _.code) === null || C === void 0 ? void 0 : C.toLowerCase(), A].filter(Boolean);
    if (A) {
      A && ($ ? n.add(A) : n.delete(A));
      for (const Z of K)
        u.add(Z), f(Z, $);
      h($, _, [...n, ...K]), m($, A), A === "meta" && !$ && (c.forEach((Z) => {
        n.delete(Z), f(Z, !1);
      }), c.clear());
    }
  }
  ct(o, "keydown", (_) => (w(_, !0), i(_)), { passive: r }), ct(o, "keyup", (_) => (w(_, !1), i(_)), { passive: r }), ct("blur", p, { passive: r }), ct("focus", p, { passive: r });
  const x = new Proxy(s, { get(_, $, b) {
    if (typeof $ != "string") return Reflect.get(_, $, b);
    if ($ = $.toLowerCase(), $ in a && ($ = a[$]), !($ in s)) if (/[+_-]/.test($)) {
      const A = $.split(/[+_-]/g).map((K) => K.trim());
      s[$] = I(() => A.map((K) => ut(x[K])).every(Boolean));
    } else s[$] = /* @__PURE__ */ It(!1);
    const C = Reflect.get(_, $, b);
    return t ? ut(C) : C;
  } });
  return x;
}
// @__NO_SIDE_EFFECTS__
function cp(e = {}) {
  const { window: t = co, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: a = Number.POSITIVE_INFINITY, listenOrientation: r = !0, includeScrollbar: i = !0, type: n = "inner" } = e, l = /* @__PURE__ */ It(o), s = /* @__PURE__ */ It(a), c = () => {
    if (t) if (n === "outer")
      l.value = t.outerWidth, s.value = t.outerHeight;
    else if (n === "visual" && t.visualViewport) {
      const { width: u, height: f, scale: p } = t.visualViewport;
      l.value = Math.round(u * p), s.value = Math.round(f * p);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  c(), Qf(c);
  const d = { passive: !0 };
  return ct("resize", c, d), t && n === "visual" && t.visualViewport && ct(t.visualViewport, "resize", c, d), r && ue(sp("(orientation: portrait)"), () => c()), {
    width: l,
    height: s
  };
}
function Is(e, t) {
  return v(), S("svg", {
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
function up(e, t) {
  return v(), S("svg", {
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
const fp = { class: "micro-icon" }, pp = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (v(), S("i", fp, [
      (v(), Y(No(e.icon)))
    ]));
  }
}, yr = /* @__PURE__ */ he(pp, [["__scopeId", "data-v-1e1a14be"]]), { width: mt, height: hp } = /* @__PURE__ */ cp();
function mp() {
  return {
    /** < 640px */
    isXs: I(() => mt.value < 640),
    /** 640px - 768px */
    isSm: I(() => mt.value >= 640 && mt.value < 768),
    /** 768px - 1024px */
    isMd: I(() => mt.value >= 768 && mt.value < 1024),
    /** 1024px - 1280px */
    isLg: I(() => mt.value >= 1024 && mt.value <= 1280),
    /** 1280px - 1536px */
    isXl: I(() => mt.value > 1280 && mt.value <= 1536),
    /** > 1536px */
    is2Xl: I(() => mt.value > 1536),
    width: I(() => mt.value),
    height: I(() => hp.value)
  };
}
const vp = {
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
    const { isXs: t, isSm: o, isMd: a } = mp();
    return (r, i) => !y(t) && !y(o) && !y(a) ? (v(), S("div", {
      key: 0,
      class: ce(["hotkey", [`${e.disabled ? "secondary" : e.variant}-hotkey`, { disabled: e.disabled }]])
    }, V(e.hotkey), 3)) : L("", !0);
  }
}, js = /* @__PURE__ */ he(vp, [["__scopeId", "data-v-a6d96a76"]]), gp = {
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
    const o = e, a = t, r = /* @__PURE__ */ F(null);
    function i(s) {
      s && a("set:activator", s);
    }
    function n(s) {
      i(s.currentTarget), a(o.modelValue ? "close" : "open");
    }
    function l(s) {
      i(s.currentTarget);
    }
    return ue(
      () => [o.modelValue, o.floatingContainerEl, o.activatorEl],
      ([s]) => {
        if (r.value?.(), r.value = null, !s || !o.floatingContainerEl)
          return;
        const c = [o.activatorEl].filter(Boolean);
        requestAnimationFrame(() => {
          r.value = tp(
            o.floatingContainerEl,
            () => o.modelValue && a("close"),
            { ignore: c }
          );
        });
      },
      { immediate: !0 }
    ), (s, c) => ie(s.$slots, "default", {
      slotProps: { onClick: n, onFocus: l }
    });
  }
}, bp = {
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
    const o = e, a = t;
    function r(l) {
      a("set:activator", l.currentTarget), a("open");
    }
    function i() {
      o.modelValue || a("open");
    }
    function n() {
      o.modelValue || a("open");
    }
    return ue(
      () => o.isFocused,
      (l) => {
        l || a("close");
      }
    ), (l, s) => ie(l.$slots, "default", {
      slotProps: { onFocus: r, onInput: i, onClick: n }
    });
  }
}, yp = {
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
    const o = e, a = t, r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F(!1);
    function n() {
      r.value || (i.value = !1, a("close"));
    }
    function l(d) {
      i.value = !0, !o.modelValue && (a("set:activator", d.currentTarget), a("open"));
    }
    function s(d) {
      d.target.matches(":focus-visible") && (r.value = !0, a("set:activator", d.currentTarget), a("open"));
    }
    function c() {
      r.value = !1, a("close");
    }
    return ue(
      () => o.modelValue,
      () => {
        o.modelValue || (r.value = !1);
      }
    ), (d, u) => ie(d.$slots, "default", {
      slotProps: { onMouseover: l, onMouseleave: n, onFocus: s, onBlur: c }
    });
  }
}, wp = {
  __name: "_ManualBehavior",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["open", "close", "set:activator"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function r(s) {
      a("set:activator", s);
    }
    function i() {
      a("open");
    }
    function n() {
      a("close");
    }
    function l() {
      if (o.modelValue) {
        n();
        return;
      }
      i();
    }
    return (s, c) => ie(s.$slots, "default", {
      slotProps: { setActivator: r, toggle: l }
    });
  }
}, xp = {};
function kp(e, t) {
  return v(), Y(da, { name: "NO_TRANSITION" }, {
    default: O(() => [
      ie(e.$slots, "default")
    ]),
    _: 3
  });
}
const _p = /* @__PURE__ */ he(xp, [["render", kp]]), $p = {};
function Sp(e, t) {
  return v(), Y(da, null, {
    default: O(() => [
      ie(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const Cp = /* @__PURE__ */ he($p, [["render", Sp], ["__scopeId", "data-v-ed45de91"]]), Ap = {
  __name: "_ExpandTransition",
  props: {
    placement: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (v(), Y(da, {
      name: `expand-${e.placement}`
    }, {
      default: O(() => [
        ie(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, Ep = /* @__PURE__ */ he(Ap, [["__scopeId", "data-v-42701d92"]]), Tp = {
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
    const o = t, a = `floating-${crypto.randomUUID()}`, r = new MutationObserver(() => {
      const i = document.querySelector(`[data-activator-uuid="${a}"]`);
      i && (o("set:activator", i), o("open"), r.disconnect());
    });
    return et(() => {
      const i = document.querySelector(`[data-activator-uuid="${a}"]`);
      if (i) {
        o("set:activator", i), o("open");
        return;
      }
      r.observe(document.body, { childList: !0, subtree: !0 });
    }), $o(() => {
      r.disconnect(), o("close");
    }), (i, n) => ie(i.$slots, "default", {
      slotProps: { "data-activator-uuid": a }
    });
  }
};
function Io(e, t = !1) {
  if (!e)
    return [];
  const o = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? "" : ':not([tabindex="-1"])'}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(o)];
}
const Op = {
  top: ["bottom", "right", "left"],
  right: ["left", "top", "bottom"],
  left: ["right", "top", "bottom"],
  bottom: ["top", "right", "left"]
}, Pn = {
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
function Ds(e) {
  const { overflow: t, overflowX: o, overflowY: a, display: r } = getComputedStyle(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + o) && !["inline", "contents"].includes(r);
}
function Vp(e) {
  return !e || ["html", "body", "#document"].includes(e.nodeName.toLowerCase());
}
function Mp(e) {
  return e instanceof HTMLElement;
}
function Bp(e) {
  return e.getRootNode ? e.getRootNode() : e;
}
function Pp(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host || Bp(e).host || null;
}
function Ns(e) {
  const t = Pp(e);
  return Vp(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mp(t) && Ds(t) ? t : Ns(t);
}
function Fs(e, t = []) {
  const o = Ns(e), a = o === e?.ownerDocument?.body, r = zp(o);
  return a ? t.concat(
    r,
    r.visualViewport || [],
    Ds(o) ? o : []
  ) : t.concat(o, Fs(o, []));
}
function Ls(e, t, o, a) {
  const { clientWidth: r, clientHeight: i } = document.documentElement, n = window.scrollY || document.documentElement.scrollTop || 0, l = window.scrollX || document.documentElement.scrollLeft || 0;
  return e >= n && t >= l && t + o <= l + (window.innerWidth || r) && e + a <= n + (window.innerHeight || i);
}
const ri = /* @__PURE__ */ F(!1), Ao = /* @__PURE__ */ F(!1), Eo = /* @__PURE__ */ F(!1);
function Ip(e, t, o, a, r = 4) {
  const i = window.scrollY || document.documentElement.scrollTop || 0, n = window.scrollX || document.documentElement.scrollLeft || 0, l = window.innerHeight, s = window.innerWidth;
  let c = e, d = t;
  const u = i + l - r, f = n + s - r, p = i + r, h = n + r;
  c + a > u && (c = Math.max(p, u - a)), c < p && (c = p), d + o > f && (d = Math.max(h, f - o)), d < h && (d = h);
  const m = u - p, w = f - h;
  return {
    top: c,
    left: d,
    needsVerticalClamp: a > m,
    needsHorizontalClamp: o > w,
    maxHeight: Math.min(a, m),
    maxWidth: Math.min(o, w)
  };
}
function In(e, t, o) {
  const a = window.scrollX + t.left;
  switch (e) {
    case "left":
      return a;
    case "right":
      return a + t.width - o;
    default:
      return a + (t.width - o) / 2;
  }
}
function jn(e, t, o) {
  const a = window.scrollY + t.top;
  switch (e) {
    case "top":
      return a;
    case "bottom":
      return a - (o - t.height);
    default:
      return a + (t.height - o) / 2;
  }
}
function jp(e, t, o, a) {
  const r = window.scrollY + e.top, i = window.scrollX + e.left;
  return {
    top: (n) => ({
      top: r - o - a.offset,
      left: In(n, e, t)
    }),
    bottom: (n) => ({
      top: r + e.height + a.offset,
      left: In(n, e, t)
    }),
    left: (n) => ({
      top: jn(n, e, o),
      left: i - t - a.offset
    }),
    right: (n) => ({
      top: jn(n, e, o),
      left: i + e.width + a.offset
    })
  };
}
async function Dp(e, t, o, a, r) {
  let i;
  if (r) {
    const f = r.clientX, p = r.clientY;
    i = {
      top: p,
      left: f,
      right: f,
      bottom: p,
      width: 0,
      height: 0,
      x: f,
      y: p
    };
  } else
    i = o.getBoundingClientRect();
  const [n, l] = a.location.replaceAll(" ", "").split(","), s = l || "center", c = jp(i, t, e, a), d = (f, p) => {
    const h = c[f](p);
    return Ls(h.top, h.left, t, e) ? { placement: f, alignment: p, ...h } : null;
  };
  let u = d(n, s);
  return u || ((Pn[n][s] || []).some((f) => (u = d(n, f), !!u)), u) || (Op[n].some((f) => (u = d(f, s), u ? !0 : Object.keys(Pn[f]).some((p) => (u = d(f, p), !!u)))), u) ? u : { placement: n, alignment: s, ...c[n](s) };
}
function Np(e, t) {
  const o = t.getBoundingClientRect(), a = e.getBoundingClientRect();
  o.width !== a.width && (e.style.minWidth = `${o.width}px`);
}
async function Fp(e, t, o, a = null) {
  if (e.style.visibility !== "visible") {
    const f = e.style.visibility;
    e.style.visibility = "hidden", e.showPopover(), await new Promise((p) => {
      requestAnimationFrame(() => requestAnimationFrame(p));
    }), e.style.visibility = f || "hidden";
  }
  let r;
  o.attach instanceof HTMLElement ? r = o.attach : typeof o.attach == "string" ? r = document.querySelector(o.attach) : r = t, Ao.value || (e.style.maxHeight = "", e.style.overflowY = ""), Eo.value || (e.style.maxWidth = "", e.style.overflowX = ""), o.fitContent || (Np(e, r), await Promise.resolve());
  const i = e.getBoundingClientRect(), n = e.scrollHeight || e.clientHeight || Math.ceil(i.height), l = e.scrollWidth || e.clientWidth || Math.ceil(i.width), s = await Dp(n, l, r, o, a), c = Ls(s.top, s.left, l, n);
  let d = s.top, u = s.left;
  if (ri.value = !0, !c && o.clamp) {
    const f = Ip(s.top, s.left, l, n);
    d = f.top, u = f.left, f.needsVerticalClamp ? (Ao.value = !0, e.style.maxHeight = `${f.maxHeight}px`, e.style.overflowY = "auto") : Ao.value && (Ao.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), f.needsHorizontalClamp ? (Eo.value = !0, e.style.maxWidth = `${f.maxWidth}px`, e.style.overflowX = "auto") : Eo.value && (Eo.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  } else
    Ao.value && (Ao.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), Eo.value && (Eo.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  return e.style.top = `${d}px`, e.style.left = `${u}px`, e.style.visibility = "visible", requestAnimationFrame(() => {
    ri.value = !1;
  }), { placement: s.placement, alignment: s.alignment };
}
function Lp(e, t) {
  const o = /* @__PURE__ */ F(), a = /* @__PURE__ */ F(), r = /* @__PURE__ */ F(), i = /* @__PURE__ */ F(), n = /* @__PURE__ */ Pe({
    location: "bottom",
    fitContent: !1,
    attach: null,
    offset: 0,
    clamp: !0
  }), l = /* @__PURE__ */ Pe([]);
  function s() {
    return !e.value || !t.value ? null : Fp(e.value, t.value, n, i.value).then((f) => {
      o.value = f.placement, a.value = f.alignment;
    });
  }
  function c() {
    l.forEach((f) => {
      f.removeEventListener("scroll", s), f.removeEventListener("resize", s);
    }), l.splice(0), e.value && (l.push(...Fs(e.value)), l.forEach((f) => {
      f.addEventListener("scroll", s, { passive: !0 }), f.addEventListener("resize", s);
    }));
  }
  function d() {
    r.value = new ResizeObserver(() => {
      ri.value || requestAnimationFrame(s);
    });
  }
  function u(f) {
    Object.keys(f).forEach((p) => {
      p in n && (n[p] = f[p]);
    });
  }
  return ue(e, (f, p) => {
    r.value || d(), p && r.value?.unobserve(p), t.value && r.value?.unobserve(t.value), f && t.value && (r.value.observe(f), r.value.observe(t.value));
  }), $o(() => {
    l.forEach((f) => {
      f.removeEventListener("scroll", s), f.removeEventListener("resize", s);
    }), l.splice(0), r.value?.disconnect();
  }), {
    autoUpdate: (f) => {
      u(f), [o.value, a.value] = n.location.replaceAll(" ", "").split(","), ue([e, t], async ([p, h]) => {
        c(), p && h && await s();
      });
    },
    fixedPosition: async (f) => {
      u({ ...f, clamp: !1 }), [o.value, a.value] = n.location.replaceAll(" ", "").split(","), requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          c(), await s();
        });
      });
    },
    watchCursor: () => {
      async function f(p) {
        i.value = p, e.value && await s();
      }
      ue(
        t,
        (p, h) => {
          h && h.removeEventListener("mousemove", f), p && p.addEventListener("mousemove", f);
        },
        { immediate: !0 }
      );
    },
    placement: o,
    alignment: a
  };
}
const Rp = ["aria-hidden", "aria-label"], Up = { class: "floating-container-overlay" }, qp = ["aria-expanded"], Hp = {
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
  setup(e, { expose: t, emit: o }) {
    const a = e, r = o, i = Bt("floating-container-content"), n = /* @__PURE__ */ F(null), { autoUpdate: l, fixedPosition: s, watchCursor: c, placement: d, alignment: u } = Lp(
      i,
      n
    ), f = /* @__PURE__ */ ip(), p = /* @__PURE__ */ F(!1), h = /* @__PURE__ */ F(!1), m = /* @__PURE__ */ F(-1), w = I(() => f.value === n.value || f.value === i.value || n.value?.contains(f.value) || i.value?.contains(f.value) || !1), x = I(() => {
      switch (a.behavior) {
        case "focus":
          return { component: bp, props: { isFocused: w.value } };
        case "hover":
          return {
            component: yp,
            props: { floatingContainerEl: i.value }
          };
        case "manual":
          return { component: wp };
        case "static":
          return { component: Tp };
        default:
          return {
            component: gp,
            props: {
              floatingContainerEl: i.value,
              activatorEl: n.value
            }
          };
      }
    });
    function _(T) {
      n.value = T;
    }
    async function $() {
      clearTimeout(m.value), m.value = setTimeout(async () => {
        p.value = !0, r("update:isOpen", !0), await it(), await new Promise(requestAnimationFrame), h.value = !0;
      }, a.delay);
    }
    function b() {
      clearTimeout(m.value), h.value = !1, a.transition !== "fade" && a.transition !== "expand" && (p.value = !1);
    }
    function C() {
      p.value = !1, r("update:isOpen", !1);
    }
    function A() {
      !a.closeOnClick || !p.value || a.behavior === "static" || (n.value?.focus(), b());
    }
    function K(T) {
      if (T.key === "Tab") {
        const D = Io(i.value, !0), z = D.indexOf(document.activeElement), M = T.shiftKey ? z - 1 : z + 1;
        D[M] ? (T.preventDefault(), D[M].focus()) : (T.preventDefault(), M <= 0 && n.value.focus());
      } else if (T.key === "Escape") {
        if (a.behavior === "static")
          return;
        n.value.focus(), b();
      } else T.key === "Enter" && (T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation(), a.closeOnClick && a.behavior !== "static" && (n.value.focus(), b()));
    }
    async function Z(T) {
      if (T.key === "Escape") {
        if (a.behavior === "static")
          return;
        T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation(), b();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(T.key))
        return;
      i.value || (await $(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const D = Io(i.value);
      if (D.length === 0)
        return;
      T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation();
      const z = D.indexOf(document.activeElement);
      z === -1 ? Io(i.value)[0].focus() : T.key === "ArrowDown" ? D[z + 1]?.focus() : T.key === "ArrowUp" && D[z - 1]?.focus();
    }
    ue(
      () => w.value,
      () => r("update:focus", w.value)
    ), ue([d, u], () => {
      r("update:location", [d.value, u.value].filter(Boolean).join(","));
    });
    const j = I(() => {
      switch (a.transition) {
        case "fade":
          return Cp;
        case "expand":
          return Ep;
        default:
          return _p;
      }
    });
    return et(async () => {
      switch (await it(), a.behavior) {
        case "click":
        case "focus":
          l({
            location: a.location,
            fitContent: a.fitContent,
            attach: a.attach,
            offset: a.offset
          });
          break;
        case "hover":
          l({
            location: a.location,
            fitContent: a.fitContent,
            attach: a.attach,
            offset: a.offset
          }), a.attachToCursor && c();
          break;
        case "static":
          $(), s({
            location: a.location,
            attach: a.attach,
            offset: a.offset
          });
          break;
        default:
          console.warn(`Behavior "${a.behavior}" is not supported.`);
      }
    }), t({
      close: b
    }), (T, D) => (v(), S(be, null, [
      x.value ? (v(), Y(No(x.value.component), Be({ key: 0 }, x.value.props, {
        "model-value": p.value,
        onOpen: $,
        onClose: b,
        "onSet:activator": _
      }), {
        default: O(({ slotProps: z }) => [
          ie(T.$slots, "activator", jo(vr({ ...z, onKeydown: Z })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : L("", !0),
      p.value ? (v(), S("div", {
        key: 1,
        class: "floating-container-overlay-container",
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !h.value,
        "aria-label": e.ariaLabel
      }, [
        N("div", Up, [
          (v(), Y(No(j.value), {
            key: e.behavior !== "static" ? `${y(d) || "unknown"}-${y(u) || "unknown"}` : null,
            placement: y(d),
            alignment: y(u),
            appear: "",
            onAfterLeave: C
          }, {
            default: O(() => [
              xo(N("div", {
                ref: "floating-container-content",
                class: "floating-container-content",
                "data-testid": "menu",
                popover: "manual",
                tabindex: "-1",
                role: "menu",
                "aria-expanded": p.value ? "true" : "false",
                onKeydown: K,
                onClick: A
              }, [
                ie(T.$slots, "default", {}, void 0, !0)
              ], 40, qp), [
                [Si, h.value]
              ])
            ]),
            _: 3
          }, 40, ["placement", "alignment"]))
        ])
      ], 8, Rp)) : L("", !0)
    ], 64));
  }
}, Rs = /* @__PURE__ */ he(Hp, [["__scopeId", "data-v-d07f7747"]]), Kp = {
  __name: "PTooltip",
  props: /* @__PURE__ */ pt({
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
    const t = Qe(e, "location"), o = Bt("tooltip-wrapper"), a = I(() => o.value?.children[0]);
    return (r, i) => (v(), Y(Rs, {
      offset: e.offset,
      behavior: e.behavior,
      location: t.value,
      "fit-content": e.width === "fit-content",
      attach: e.attach || a.value,
      delay: e.behavior !== "static" ? 150 : 0,
      "close-on-click": !1,
      "aria-label": e.text || "Tooltip",
      "onUpdate:location": i[0] || (i[0] = (n) => t.value = n)
    }, {
      activator: O((n) => [
        N("div", Be({
          ref: "tooltip-wrapper",
          class: "tooltip-wrapper"
        }, n), [
          ie(r.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      default: O(() => [
        e.text || r.$slots.content ? (v(), S("div", {
          key: 0,
          class: ce(["tooltip", [t.value.replace(/,/g, "-"), { inverted: e.inverted }]]),
          style: kt({ width: e.width }),
          "data-testid": "tooltip",
          role: "menuitem"
        }, [
          ie(r.$slots, "content", {}, () => [
            ae(V(e.text), 1)
          ], !0)
        ], 6)) : L("", !0)
      ]),
      _: 3
    }, 8, ["offset", "behavior", "location", "fit-content", "attach", "delay", "aria-label"]));
  }
}, fa = /* @__PURE__ */ he(Kp, [["__scopeId", "data-v-5016fba7"]]), Wp = ["for"], Zp = { class: "label-text" }, Gp = {
  variant: "text",
  size: "small"
}, Jp = {
  key: 0,
  class: "optional"
}, Yp = { class: "container-inner" }, Xp = {
  key: 0,
  class: "inline-container-prepended"
}, Qp = ["id", "placeholder", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "rows", "autofocus"], eh = ["id", "placeholder", "type", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "autofocus"], th = { class: "inline-container-appended" }, oh = {
  key: 1,
  class: "text"
}, ah = ["id"], rh = {
  __name: "PInput",
  props: /* @__PURE__ */ pt({
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
  emits: /* @__PURE__ */ pt(["blur", "focus"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const a = e, r = Qe(e, "modelValue"), i = Hl(), n = o, l = yt("showError", !0), s = Ti()[a.hotkey.key], c = /* @__PURE__ */ F(null), d = I(() => a.error ? Is : a.icon), u = I(() => a.optional !== "" ? a.optional : B("input.optional")), f = I(() => a.requiredMessage ? a.requiredMessage : a.label ? B("input.required_with_label", { label: a.label.toLowerCase() }) : B("input.required")), p = I(() => {
      const b = a.required ? { modelValue: { required: He.withMessage(() => f.value, ua) } } : { modelValue: {} };
      return a.rules.forEach((C, A) => {
        b.modelValue[C.label || A] = He.withMessage(() => C.message || "", C.validator);
      }), b;
    }), h = /* @__PURE__ */ F(lo(p, { modelValue: r })), m = I(() => !!a.error || h.value.modelValue.$errors?.length > 0), w = I(() => `${a.id}-error`), x = kc(), _ = I(() => {
      const b = { ...x };
      return delete b["data-testid"], b;
    });
    function $(b) {
      n("blur", b), h.value.$touch(b);
    }
    return ue(s, (b) => {
      b && a.hotkey && setTimeout(() => {
        c.value.focus();
      }, 100);
    }), ue(p, () => {
      h.value = lo(p, { modelValue: r });
    }), t({
      input: c
    }), (b, C) => (v(), S("div", {
      class: ce(["input-container", { "has-error": m.value, "is-large": e.large }]),
      tabindex: "-1",
      onFocus: C[4] || (C[4] = (A) => b.$refs.input.focus())
    }, [
      e.label ? (v(), S("label", {
        key: 0,
        class: "input-label",
        for: e.id
      }, [
        N("span", Zp, [
          ae(V(e.label) + " ", 1),
          e.info || y(i).info ? (v(), Y(fa, {
            key: 0,
            location: "right",
            inverted: ""
          }, {
            content: O(() => [
              ie(b.$slots, "info", {}, () => [
                ae(V(e.info), 1)
              ], !0)
            ]),
            default: O(() => [
              N("span", Gp, [
                U(yr, {
                  class: "info-icon",
                  icon: y(up)
                }, null, 8, ["icon"])
              ])
            ]),
            _: 3
          })) : L("", !0)
        ]),
        e.required ? L("", !0) : (v(), S("span", Jp, V(u.value), 1))
      ], 8, Wp)) : L("", !0),
      N("div", Yp, [
        e.prependIcon ? (v(), S("div", Xp, [
          U(Zt, { icon: e.prependIcon }, null, 8, ["icon"])
        ])) : L("", !0),
        e.expand ? xo((v(), S("textarea", Be({
          key: 1,
          id: e.id,
          ref_key: "input",
          ref: c,
          "onUpdate:modelValue": C[0] || (C[0] = (A) => r.value = A),
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
          "aria-describedby": m.value ? w.value : null,
          rows: e.rows,
          autofocus: e.autofocus
        }, _.value, {
          onFocus: C[1] || (C[1] = (A) => n("focus", A)),
          onBlur: $
        }), null, 16, Qp)), [
          [Wa, r.value]
        ]) : xo((v(), S("input", Be({
          key: 2,
          id: e.id,
          ref_key: "input",
          ref: c,
          "onUpdate:modelValue": C[2] || (C[2] = (A) => r.value = A),
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
          "aria-describedby": m.value ? w.value : null,
          autofocus: e.autofocus
        }, _.value, {
          onFocus: C[3] || (C[3] = (A) => n("focus", A)),
          onBlur: $
        }), null, 16, eh)), [
          [Vu, r.value]
        ]),
        N("div", th, [
          ie(b.$slots, "inline", {}, () => [
            e.icon ? (v(), Y(Zt, {
              key: 0,
              icon: d.value,
              class: ce({ "has-error": m.value })
            }, null, 8, ["icon", "class"])) : L("", !0),
            e.inline ? (v(), S("span", oh, V(e.inline), 1)) : L("", !0),
            e.hotkey.label ? (v(), Y(js, {
              key: 2,
              hotkey: e.hotkey.label,
              variant: "secondary"
            }, null, 8, ["hotkey"])) : L("", !0)
          ], !0)
        ])
      ]),
      m.value && y(l) ? (v(), S("span", {
        key: 1,
        id: w.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, V(h.value.modelValue?.$errors[0]?.$message ? h.value.modelValue.$errors[0].$message : e.error), 9, ah)) : L("", !0)
    ], 34));
  }
}, vt = /* @__PURE__ */ he(rh, [["__scopeId", "data-v-ff1ca5e3"]]);
function Oi(e, t) {
  return v(), S("svg", {
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
function ih(e, t) {
  return v(), S("svg", {
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
const nh = {
  __name: "PStepStatus",
  props: {
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    }
  },
  setup(e) {
    const t = e, o = I(() => {
      switch (t.status) {
        case "done":
          return Oi;
        case "attention":
          return ih;
        default:
          return null;
      }
    });
    return (a, r) => (v(), S("div", {
      class: ce(["status", e.status])
    }, [
      o.value ? (v(), Y(yr, {
        key: 0,
        icon: o.value
      }, null, 8, ["icon"])) : L("", !0)
    ], 2));
  }
}, Us = /* @__PURE__ */ he(nh, [["__scopeId", "data-v-aa0d87a4"]]);
function lh(e, t) {
  return v(), S("svg", {
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
function sh(e, t) {
  return v(), S("svg", {
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
function dh(e, t) {
  return v(), S("svg", {
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
function ch(e, t) {
  return v(), S("svg", {
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
const uh = ["data-testid"], fh = { class: "icon" }, ph = { class: "content" }, hh = { class: "title" }, mh = {
  key: 0,
  class: "description"
}, vh = {
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
    const t = e, o = I(() => t.icon ? t.icon : t.type === "error" ? sh : t.type === "warning" ? dh : t.type === "success" ? lh : t.type === "info" ? ch : null);
    return (a, r) => (v(), S("div", {
      class: ce(["alert", e.type]),
      "data-testid": `alert-${e.type}`
    }, [
      ie(a.$slots, "default", {}, () => [
        N("div", fh, [
          U(wt, { icon: o.value }, null, 8, ["icon"])
        ]),
        N("div", ph, [
          N("span", hh, V(e.title), 1),
          e.description ? (v(), S("span", mh, V(e.description), 1)) : L("", !0)
        ])
      ], !0)
    ], 10, uh));
  }
}, pa = /* @__PURE__ */ he(vh, [["__scopeId", "data-v-bd0367f1"]]), gh = {
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
    return (t, o) => (v(), S("div", {
      class: ce(["loader", `${e.color}-loader ${e.size}-loader`])
    }, null, 2));
  }
}, ba = /* @__PURE__ */ he(gh, [["__scopeId", "data-v-26a513f6"]]), bh = ["tabindex", "disabled"], yh = {
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
    const t = e, o = Hl(), a = Ti()[t.hotkey.key], r = I(() => t.variant === "secondary" || t.variant === "tertiary" ? t.variant : t.variant === "text" ? "secondary" : "primary");
    return ue(a, (i) => {
      i && t.hotkey?.key && !t.loading && !t.disabled && t.hotkey.callback();
    }), (i, n) => (v(), S("button", {
      class: ce(["button", [e.variant, e.size, e.color, y(o).default ? "" : "has-icon", e.loading ? "pointer-events-none" : ""]]),
      tabindex: e.loading ? -1 : 0,
      disabled: e.disabled
    }, [
      e.loading ? (v(), Y(ba, {
        key: 0,
        color: "inherit",
        size: e.size
      }, null, 8, ["size"])) : e.icon ? (v(), Y(wt, {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : L("", !0),
      ie(i.$slots, "default", {}, void 0, !0),
      e.hotkey.key ? (v(), Y(js, {
        key: 2,
        hotkey: e.hotkey.label,
        variant: r.value,
        disabled: e.disabled
      }, null, 8, ["hotkey", "variant", "disabled"])) : L("", !0)
    ], 10, bh));
  }
}, ze = /* @__PURE__ */ he(yh, [["__scopeId", "data-v-24f66151"]]);
function wh(e, t) {
  return v(), S("svg", {
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
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
function Ba(e, t) {
  return v(), S("svg", {
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
function xh(e, t) {
  return v(), S("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, [
    N("g", {
      id: "Icon/Outline/MaximizeScreen",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      N("path", {
        d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M14.3478261,7.13043478 L17.2826087,7.13043478 C17.6050138,7.13402532 17.8653502,7.35579341 17.8695652,7.63043478 L17.8695652,10.1304348 M17.6973913,7.3026087 L13.3695652,11.6304348",
        id: "Combined-Shape",
        stroke: "currentColor",
        "stroke-width": "1.5"
      })
    ])
  ]);
}
function kh(e, t) {
  return v(), S("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, [
    N("g", {
      id: "Icon/Outline/MinimizeScreen",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      N("path", {
        d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M16.8913043,11.6304348 L13.9565217,11.6304348 C13.6341166,11.6268442 13.3737802,11.4050762 13.3695652,11.1304348 L13.3695652,8.63043478 M13.5417391,11.4582609 L17.8695652,7.13043478",
        id: "Combined-Shape",
        stroke: "currentColor",
        "stroke-width": "1.5"
      })
    ])
  ]);
}
const _h = ["data-testid"], $h = {
  key: 0,
  class: "actions"
}, Sh = {
  class: "inner",
  tabindex: "-1",
  autofocus: ""
}, Ch = {
  key: 0,
  class: "minimized-actions"
}, Ah = {
  __name: "PModal",
  props: /* @__PURE__ */ pt({
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
  emits: /* @__PURE__ */ pt(["minimize", "update:modelValue", "click:primary", "click:secondary", "close"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const a = e, r = o, i = Qe(e, "modelValue"), n = Bt("modal"), l = Bt("modal-content"), s = Bt("footer"), c = Bt("header"), d = /* @__PURE__ */ F(!1), u = /* @__PURE__ */ F(!1), f = /* @__PURE__ */ F(!1), p = /* @__PURE__ */ F(!1), h = /* @__PURE__ */ F(!1), m = /* @__PURE__ */ F(!1), w = /* @__PURE__ */ F(!1), x = /* @__PURE__ */ F(null), _ = /* @__PURE__ */ F(null), $ = /* @__PURE__ */ F(null);
    let b = null;
    function C() {
      if (!l.value)
        return;
      f.value = l.value.scrollTop > 0;
      const D = l.value.scrollHeight - l.value.clientHeight;
      p.value = l.value.scrollTop < D;
    }
    function A(D) {
      if (clearTimeout(x.value), b && (cancelAnimationFrame(b), b = null), $.value && (clearTimeout($.value), $.value = null), D) {
        m.value = !1, h.value = !0, w.value = !1, it(() => {
          const z = n.value;
          z.open || z.showModal(), b = requestAnimationFrame(() => {
            w.value = !0, b = null;
          }), C(), !a.loading && ($.value = setTimeout(() => {
            Io(l.value)[0]?.focus();
          }, 500));
        });
        return;
      }
      h.value && (m.value = !0, w.value = !1, x.value = setTimeout(() => {
        n.value?.close();
      }, 500));
    }
    function K(D) {
      r("minimize", D), d.value = D, u.value = !D;
    }
    function Z(D) {
      if (a.persistent || a.fullscreen || D.target !== D.currentTarget) {
        a.persistent && D.target.isEqualNode(D.currentTarget) && (_.value && clearTimeout(_.value), n.value.classList.add("persistent-animation"), _.value = setTimeout(() => {
          n.value?.classList.remove("persistent-animation");
        }, 300));
        return;
      }
      r("close"), i.value = !1;
    }
    function j(D) {
      a.persistent && D.preventDefault();
    }
    function T() {
      x.value && (clearTimeout(x.value), x.value = null), i.value && (i.value = !1), m.value = !1, h.value = !1, w.value = !1;
    }
    return ue(
      () => !!i.value,
      (D) => {
        A(D);
      },
      { immediate: !0 }
    ), ue(
      () => a.loading,
      (D) => {
        D === !1 && i.value && it(() => {
          Io(l.value)[0]?.focus();
        });
      }
    ), ue(
      () => n.value,
      (D, z, M) => {
        D && (D.addEventListener("cancel", j), M(() => {
          D.removeEventListener("cancel", j);
        }));
      },
      { immediate: !0 }
    ), So(() => {
      x.value && clearTimeout(x.value), _.value && clearTimeout(_.value), $.value && clearTimeout($.value), b && cancelAnimationFrame(b);
    }), t({
      showModal: () => i.value = !0,
      close: () => i.value = !1
    }), (D, z) => h.value ? (v(), S("dialog", {
      key: 0,
      ref: "modal",
      class: ce(["modal", [
        w.value ? "open" : "closed",
        {
          fullscreen: e.fullscreen,
          minimized: d.value,
          maximized: u.value,
          persistent: e.persistent
        }
      ]]),
      "data-testid": e.dataTestid,
      style: kt({ "max-width": e.width }),
      onClose: T,
      onClick: Z
    }, [
      e.fullscreen && !d.value ? (v(), S("div", $h, [
        e.showMinimize ? (v(), Y(ze, {
          key: 0,
          variant: "text",
          icon: y(kh),
          class: "minimize",
          onClick: z[0] || (z[0] = (M) => K(!0))
        }, {
          default: O(() => [
            ae(V(y(B)("modal.minimize")), 1)
          ]),
          _: 1
        }, 8, ["icon"])) : L("", !0),
        e.hideCloseButton ? L("", !0) : (v(), Y(ze, {
          key: 1,
          variant: "text",
          icon: y(Ba),
          class: "close",
          onClick: z[1] || (z[1] = (M) => i.value = !1)
        }, {
          default: O(() => [
            ae(V(y(B)("modal.close")), 1)
          ]),
          _: 1
        }, 8, ["icon"]))
      ])) : L("", !0),
      N("div", Sh, [
        e.hideHeader ? L("", !0) : (v(), S("header", {
          key: 0,
          ref: "header",
          class: ce(["header", { "header-shadow": f.value }]),
          "data-testid": "modal-header"
        }, [
          ie(D.$slots, "header", jo(vr({ minimize: d.value })), () => [
            e.title ? (v(), Y(St, {
              key: 0,
              class: "title",
              level: "h2"
            }, {
              default: O(() => [
                ae(V(e.title), 1)
              ]),
              _: 1
            })) : L("", !0),
            !e.fullscreen && !e.hideCloseButton ? (v(), Y(ze, {
              key: 1,
              icon: y(Ba),
              variant: "text",
              class: "close",
              "aria-label": y(B)("modal.close"),
              onClick: z[2] || (z[2] = (M) => {
                i.value = !1, r("close");
              })
            }, null, 8, ["icon", "aria-label"])) : L("", !0)
          ]),
          d.value && e.fullscreen ? (v(), S("div", Ch, [
            U(ze, {
              "data-testid": "open-button",
              icon: y(xh),
              onClick: z[3] || (z[3] = (M) => K(!1))
            }, {
              default: O(() => [
                ae(V(y(B)("modal.open")), 1)
              ]),
              _: 1
            }, 8, ["icon"]),
            U(ze, {
              "data-testid": "close-button",
              icon: y(Ba),
              variant: "secondary",
              onClick: z[4] || (z[4] = (M) => {
                i.value = !1, r("close");
              })
            }, {
              default: O(() => [
                ae(V(y(B)("modal.close")), 1)
              ]),
              _: 1
            }, 8, ["icon"])
          ])) : L("", !0)
        ], 2)),
        d.value ? L("", !0) : (v(), S("div", {
          key: 1,
          ref: "modal-content",
          class: ce(["content", { "pt-8!": e.hideHeader }]),
          tabindex: "0",
          style: kt(
            e.fullscreen ? null : `max-height: calc(100vh - ${c.value?.clientHeight + s.value?.clientHeight}px - 64px); `
          ),
          onScroll: C
        }, [
          e.loading ? (v(), S(be, { key: 0 }, [
            D.$slots.loading ? ie(D.$slots, "loading", { key: 0 }) : (v(), Y(ba, { key: 1 }))
          ], 64)) : ie(D.$slots, "default", { key: 1 })
        ], 38)),
        !e.fullscreen && !e.hideFooter || !d.value && e.fullscreen && D.$slots.footer ? (v(), S("footer", {
          key: 2,
          ref: "footer",
          class: ce(["footer", { "footer-shadow": !e.fullscreen && p.value }])
        }, [
          ie(D.$slots, "footer", {}, () => [
            e.fullscreen ? L("", !0) : (v(), S(be, { key: 0 }, [
              U(ze, {
                type: "button",
                variant: "secondary",
                "data-testid": "secondary-button",
                onClick: z[5] || (z[5] = (M) => r("click:secondary"))
              }, {
                default: O(() => [
                  ae(V(e.secondaryButtonText ? e.secondaryButtonText : y(B)("modal.cancel")), 1)
                ]),
                _: 1
              }),
              U(ze, {
                type: "button",
                "data-testid": "primary-button",
                onClick: z[6] || (z[6] = (M) => r("click:primary"))
              }, {
                default: O(() => [
                  ae(V(e.primaryButtonText ? e.primaryButtonText : y(B)("modal.save")), 1)
                ]),
                _: 1
              })
            ], 64))
          ])
        ], 2)) : L("", !0)
      ])
    ], 46, _h)) : L("", !0);
  }
}, zi = /* @__PURE__ */ he(Ah, [["__scopeId", "data-v-69ff7208"]]), Eh = { class: "message" }, Th = {
  __name: "PConfirmModal",
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "confirm"
    },
    isDanger: {
      type: Boolean,
      default: !1
    },
    primaryButtonText: {
      type: String,
      default: ""
    },
    secondaryButtonText: {
      type: String,
      default: ""
    },
    icon: {
      type: Function,
      default: null
    }
  },
  emits: ["cancel", "confirm"],
  setup(e, { emit: t }) {
    const o = t, a = e, r = I(() => a.icon ? a.icon : a.isDanger ? Is : wh);
    return (i, n) => (v(), Y(zi, {
      "model-value": !0,
      class: "confirm-modal",
      "onUpdate:modelValue": n[2] || (n[2] = (l) => !l && o("cancel"))
    }, {
      footer: O(() => [
        U(ze, {
          variant: "secondary",
          "data-testid": "secondary-button",
          onClick: n[0] || (n[0] = (l) => o("cancel"))
        }, {
          default: O(() => [
            ae(V(e.secondaryButtonText ? e.secondaryButtonText : y(B)("confirm-modal.cancel")), 1)
          ]),
          _: 1
        }),
        U(ze, {
          variant: e.isDanger ? "danger" : "primary",
          "data-testid": "primary-button",
          onClick: n[1] || (n[1] = (l) => o("confirm"))
        }, {
          default: O(() => [
            e.primaryButtonText ? (v(), S(be, { key: 0 }, [
              ae(V(e.primaryButtonText), 1)
            ], 64)) : (v(), S(be, { key: 1 }, [
              ae(V(e.type === "delete" ? y(B)("confirm-modal.delete") : y(B)("confirm-modal.confirm")), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      default: O(() => [
        N("div", {
          class: ce(["indicator-icon", { danger: e.isDanger, info: !e.isDanger }])
        }, [
          U(Zt, { icon: r.value }, null, 8, ["icon"])
        ], 2),
        U(St, {
          level: "h2",
          class: "title"
        }, {
          default: O(() => [
            ae(V(e.title || y(B)("confirm-modal.confirm")), 1)
          ]),
          _: 1
        }),
        N("p", Eh, V(e.message || y(B)("confirm-modal.confirm_message")), 1)
      ]),
      _: 1
    }));
  }
}, Dn = /* @__PURE__ */ he(Th, [["__scopeId", "data-v-8e75fc96"]]);
function Oh() {
  const e = ht(), t = /* @__PURE__ */ F(() => {
  }), o = () => {
    requestAnimationFrame(() => {
      ei(null, document.querySelector("body"));
    });
  };
  So(o);
  const a = () => {
    o(), t.value(!0);
  }, r = () => {
    o(), t.value(!1);
  };
  return {
    reveal: (i, n, l = "confirm", s = !0, c = "", d = "", u = null) => {
      let f = null;
      return typeof i == "object" ? f = Yr(Dn, {
        title: i.title,
        message: i.message || "",
        type: i.type || "confirm",
        isDanger: i.isDanger !== void 0 ? i.isDanger : !0,
        primaryButtonText: i.primaryButtonText || "",
        secondaryButtonText: i.secondaryButtonText || "",
        icon: i.icon || null,
        onCancel: r,
        onConfirm: a
      }) : f = Yr(Dn, {
        title: i,
        message: n,
        type: l,
        isDanger: s,
        primaryButtonText: c,
        secondaryButtonText: d,
        icon: u,
        onCancel: r,
        onConfirm: a
      }), f.key = Math.random(), f.appContext = e.appContext, ei(f, document.querySelector("body")), new Promise((p) => {
        t.value = p;
      });
    }
  };
}
const zh = "[data-form-dirty-ignore]", ko = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new WeakMap();
let Nn = 0, Fn = 0, Qa = !1, $a = null;
const Vh = /* @__PURE__ */ F(null);
function qs() {
  return typeof window > "u" ? null : window;
}
function Mh() {
  return typeof document > "u" ? null : document;
}
function Bh(e) {
  return typeof e == "function" ? e() : e;
}
function Ph(e) {
  return Pr.has(e) || (Pr.set(e, Fn), Fn += 1), Pr.get(e);
}
function Ih(e, t) {
  return `${e}:${Ph(t)}`;
}
function jh() {
  return Array.from(ko.values()).filter((e) => e.isDirty.value);
}
function Hs(e) {
  jh().length && e.preventDefault();
}
function Dh() {
  Qa || !ko.size || (qs()?.addEventListener("beforeunload", Hs), Qa = !0);
}
function Nh() {
  !Qa || ko.size || (qs()?.removeEventListener("beforeunload", Hs), Qa = !1);
}
function Fh(e, t) {
  return Array.from(ko.values()).map((o) => {
    const a = o.navigationGuards.find((r) => r.listenerKey === e && r.guard.shouldHandle(t));
    return !o.isDirty.value || !a ? null : {
      formState: o,
      navigationGuard: a
    };
  }).filter(Boolean);
}
async function Lh(e, t) {
  const o = Fh(e, t);
  if (!o.length || (t.preventDefault(), $a))
    return;
  const a = o[o.length - 1];
  $a = a.formState.confirmNavigation();
  try {
    if (!await $a)
      return;
    o.forEach(({ formState: i }) => {
      i.resetDirtyState();
    });
    const r = a.navigationGuard.guard.getNavigationData(t);
    a.navigationGuard.guard.continueNavigation(r, t);
  } finally {
    $a = null;
  }
}
function Rh(e, t) {
  const o = Bh(t.target);
  if (!o?.addEventListener || !t.eventName)
    return null;
  const a = Ih(t.eventName, o);
  let r = Xa.get(a);
  if (!r) {
    const i = (n) => Lh(a, n);
    r = {
      eventName: t.eventName,
      target: o,
      listener: i,
      formIds: /* @__PURE__ */ new Set()
    }, o.addEventListener(t.eventName, i), Xa.set(a, r);
  }
  return r.formIds.add(e.id), {
    listenerKey: a,
    guard: t,
    target: o
  };
}
function Uh(e) {
  ko.set(e.id, e), e.navigationGuards = e.navigationGuards.map((t) => Rh(e, t)).filter(Boolean), Dh();
}
function Ln(e) {
  const t = ko.get(e);
  t && (t.navigationGuards.forEach(({ listenerKey: o }) => {
    const a = Xa.get(o);
    a && (a.formIds.delete(e), !a.formIds.size && (a.target.removeEventListener(
      a.eventName,
      a.listener
    ), Xa.delete(o)));
  }), ko.delete(e), Nh());
}
function qh(e, t) {
  Vh.value?.(e, t);
}
function Ks({
  eventName: e = "",
  target: t = Mh,
  shouldHandle: o = () => !0,
  getNavigationData: a = (i) => i.detail,
  continueNavigation: r = qh
} = {}) {
  return {
    eventName: e,
    target: t,
    shouldHandle: o,
    getNavigationData: a,
    continueNavigation: r
  };
}
const Hh = Object.freeze([Ks()]), Kh = /* @__PURE__ */ F(Hh);
function Wh(e) {
  return (e ?? Kh.value).map((t) => Ks(t));
}
function Zh(e) {
  return Array.from(e.currentTarget?.querySelectorAll?.(zh) ?? []).some((t) => t.contains(e.target));
}
function Gh(e = {}) {
  const { reveal: t } = Oh(), o = Nn, a = /* @__PURE__ */ F(!1), r = /* @__PURE__ */ F(!1), i = I(() => a.value), n = I(() => Wh(y(e.navigationGuards)));
  Nn += 1;
  function l() {
    a.value = !0;
  }
  function s(p) {
    Zh(p) || l();
  }
  function c() {
    a.value = !1;
  }
  async function d() {
    return t({
      title: B("form.unsaved_changes.title"),
      message: B("form.unsaved_changes.message"),
      primaryButtonText: B("form.unsaved_changes.leave"),
      secondaryButtonText: B("form.unsaved_changes.stay"),
      type: "info"
    });
  }
  const u = {
    id: o,
    isDirty: i,
    navigationGuards: [],
    resetDirtyState: c,
    confirmNavigation: d
  };
  function f() {
    Ln(o), u.navigationGuards = n.value, Uh(u);
  }
  return et(() => {
    r.value = !0, f();
  }), ue(n, () => {
    r.value && f();
  }), So(() => {
    r.value = !1, Ln(o);
  }), {
    isDirty: i,
    markDirty: l,
    markDirtyFromNativeEvent: s,
    resetDirtyState: c
  };
}
const Ws = {
  __name: "PForm",
  props: {
    guard: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: t }) {
    const o = e, a = lo(), { isDirty: r, markDirty: i, markDirtyFromNativeEvent: n, resetDirtyState: l } = Gh(), s = yt("enableFormNavGuard"), c = I(() => o.guard || s);
    function d() {
      return a.value.$validate();
    }
    function u() {
      return c.value && l(), a.value.$reset();
    }
    return Na("markFormDirty", c.value ? i : () => {
    }), t({ validate: d, resetValidation: u, isDirty: r }), (f, p) => (v(), S("form", {
      novalidate: "",
      onChangeCapture: p[0] || (p[0] = (h) => c.value ? y(n)(h) : null),
      onInputCapture: p[1] || (p[1] = (h) => c.value ? y(n)(h) : null),
      onSubmit: p[2] || (p[2] = (h) => {
        h.preventDefault(), h.stopPropagation(), h.stopImmediatePropagation();
      })
    }, [
      ie(f.$slots, "default")
    ], 32));
  }
};
function Jh(e, t) {
  return v(), S("svg", {
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
      d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
    })
  ]);
}
function Zs(e, t) {
  return v(), S("svg", {
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
function Vi(e, t) {
  return v(), S("svg", {
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
const Yh = ["id"], Xh = { class: "header" }, Qh = {
  key: 1,
  class: "separator"
}, em = {
  key: 0,
  class: "subtitle status-text",
  part: "step-subtitle"
}, tm = {
  key: 2,
  class: "total",
  part: "step-subtitle"
}, om = {
  key: 0,
  class: "content"
}, am = {
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
    canOrder: Boolean,
    disableFirstStepAutofocus: Boolean
  },
  emits: ["update:modelValue", "update:focus", "edit:step", "recalculate", "configuration:started"],
  setup(e, { emit: t }) {
    const o = e, a = t, r = Bt("measurements-form"), i = /* @__PURE__ */ F({}), n = /* @__PURE__ */ Pe({
      width: null,
      height: null
    }), l = /* @__PURE__ */ F(1), s = /* @__PURE__ */ F(null), c = /* @__PURE__ */ F(!1), d = I(() => {
      const A = o.options.find((D) => D.code === "width"), K = o.options.find((D) => D.code === "height"), Z = A && A.reversible && K && K.reversible, j = A?.min, T = K?.min;
      return Z ? Math.min(j, T) : { width: j, height: T };
    }), u = I(() => {
      const A = o.options.find((D) => D.code === "width"), K = o.options.find((D) => D.code === "height"), Z = A && A.reversible && K && K.reversible, j = A?.max, T = K?.max;
      return Z ? Math.max(j, T) : { width: j, height: T };
    }), f = {
      width: {
        minValue: He.withMessage(
          B("step.min_value", {
            minValue: typeof d.value == "number" ? d.value : d.value.width
          }),
          Ja(typeof d.value == "number" ? d.value : d.value.width)
        ),
        required: He.withMessage(B("step.required"), ua),
        maxValue: He.withMessage(
          B("step.max_value", {
            maxValue: typeof u.value == "number" ? u.value : u.value.width
          }),
          Ya(typeof u.value == "number" ? u.value : u.value.width)
        )
      },
      height: {
        minValue: He.withMessage(
          B("step.min_value", {
            minValue: typeof d.value == "number" ? d.value : d.value.height
          }),
          Ja(typeof d.value == "number" ? d.value : d.value.height)
        ),
        required: He.withMessage(B("step.required"), ua),
        maxValue: He.withMessage(
          B("step.max_value", {
            maxValue: typeof u.value == "number" ? u.value : u.value.height
          }),
          Ya(typeof u.value == "number" ? u.value : u.value.height)
        )
      }
    }, p = lo(f, n), h = /* @__PURE__ */ F(null), m = I(() => o.buttonStartText || B("step.new_configuration")), w = I(() => {
      if (o.code === "measurement-amount") {
        const A = o.options.some((j) => j.code === "width"), K = o.options.some((j) => j.code === "height"), Z = o.options.some((j) => j.code === "amount");
        if (A && (!n.width || p.value.$errors.some((j) => j.$property === "width")) || K && (!n.height || p.value.$errors.some((j) => j.$property === "height")) || Z && !l.value)
          return !0;
      }
      return o.code === "amount" && !l.value;
    });
    function x(A, K) {
      if (A && K && (!p.$errors || p.$errors.length === 0)) {
        const Z = A * K / 1e4 * l.value;
        s.value = Number(Z.toFixed(2));
      }
    }
    async function _() {
      const A = await r.value.validate(), K = o.options.some((T) => T.code === "width"), Z = o.options.some((T) => T.code === "height"), j = o.options.some((T) => T.code === "amount");
      i.value = [], K && i.value.push({
        code: "width",
        value: n.width
      }), Z && i.value.push({
        code: "height",
        value: n.height
      }), j && i.value.push({
        code: "amount",
        value: l.value
      }), A && a("update:modelValue", i.value);
    }
    function $() {
      h.value?.getElementsByClassName("input")?.[0]?.focus();
    }
    function b(A) {
      setTimeout(() => {
        a("update:focus", A);
      }, 200);
    }
    function C(A) {
      n.width && n.height && A && o.canOrder && (c.value = !0);
    }
    return et(() => {
      o.disableFirstStepAutofocus || $(), o.modelValue?.length && (n.width = o.modelValue.find((A) => A.code === "width")?.value, n.height = o.modelValue.find((A) => A.code === "height")?.value, l.value = o.modelValue.find((A) => A.code === "amount")?.value || 1);
    }), ue(
      () => o.modelValue,
      (A) => {
        A?.length && (n.width = A.find((K) => K.code === "width")?.value, n.height = A.find((K) => K.code === "height")?.value, l.value = A.find((K) => K.code === "amount")?.value || 1, p.value.$touch());
      },
      { immediate: !0 }
    ), (A, K) => (v(), S("div", {
      id: "accordion-header-" + e.ariaTitle,
      class: ce(["configurator-step simple", { disabled: e.disabled }]),
      part: "step"
    }, [
      N("div", Xh, [
        U(Us, { status: e.status }, null, 8, ["status"]),
        N("div", {
          ref_key: "inner",
          ref: h,
          class: "inner"
        }, [
          U(St, {
            class: "title",
            part: "step-title",
            level: "h3"
          }, {
            default: O(() => [
              ae(V(e.title) + " ", 1),
              e.hasOverwrites && e.editor ? (v(), Y(fa, {
                key: 0,
                text: y(B)("option.step_has_overwrites")
              }, {
                default: O(() => [
                  U(wt, { icon: y(Vi) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : L("", !0),
              e.isHidden && e.editor ? (v(), Y(fa, {
                key: 1,
                text: y(B)("option.step_is_hidden")
              }, {
                default: O(() => [
                  U(wt, { icon: y(Zs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : L("", !0)
            ]),
            _: 1
          }),
          U(Ws, {
            ref: "measurements-form",
            class: "measurements-form"
          }, {
            default: O(() => [
              N("div", {
                class: ce(["measurement-inputs", { "has-errors": y(p).$errors && y(p).$errors.length }])
              }, [
                (v(!0), S(be, null, ro(e.options, (Z, j) => (v(), S(be, { key: j }, [
                  Z.code === "width" || Z.code === "height" ? (v(), Y(vt, {
                    key: 0,
                    id: `measurement-input-${Z.code}`,
                    modelValue: n[Z.code],
                    "onUpdate:modelValue": [
                      (T) => n[Z.code] = T,
                      K[0] || (K[0] = (T) => x(n.width, n.height))
                    ],
                    required: "",
                    type: "number",
                    "aria-label": Z.code,
                    class: "measurement-input",
                    inline: Z.unit,
                    min: Z.min,
                    max: Z.max,
                    placeholder: y(B)(`step.${Z.code}`),
                    error: y(p)[Z.code].$errors ? y(p)[Z.code].$errors[0]?.$message : "",
                    onBlur: (T) => {
                      y(p)[Z.code].$touch(T), b(!1);
                    },
                    onKeyup: dt(Ke((T) => {
                      y(p)[Z.code].$touch(T), _();
                    }, ["stop"]), ["enter"]),
                    onFocus: K[1] || (K[1] = (T) => b(!0))
                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "placeholder", "error", "onBlur", "onKeyup"])) : L("", !0),
                  Z.code === "width" ? (v(), S("span", Qh, " x ")) : Z.code === "amount" ? (v(), Y(Ei, {
                    key: 2,
                    modelValue: l.value,
                    "onUpdate:modelValue": [
                      K[2] || (K[2] = (T) => l.value = T),
                      K[6] || (K[6] = (T) => {
                        x(n.width, n.height), C(T);
                      })
                    ],
                    min: Z.min,
                    max: Z.max || void 0,
                    onBlur: K[3] || (K[3] = (T) => b(!1)),
                    onFocus: K[4] || (K[4] = (T) => b(!0)),
                    onKeyup: K[5] || (K[5] = dt(Ke((T) => _(), ["stop"]), ["enter"]))
                  }, null, 8, ["modelValue", "min", "max"])) : L("", !0)
                ], 64))), 128))
              ], 2),
              e.code == "measurement-amount" || e.code === "amount" ? (v(), Y(ze, {
                key: 0,
                class: "submit-button",
                "data-testid": "submit-button",
                disabled: w.value,
                onClick: K[7] || (K[7] = (Z) => {
                  _(), a("configuration:started"), c.value = !1;
                })
              }, {
                default: O(() => [
                  ae(V(m.value), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : L("", !0),
              c.value ? (v(), Y(ze, {
                key: 1,
                variant: "text",
                icon: y(Jh),
                onClick: K[8] || (K[8] = (Z) => {
                  a("recalculate", l.value), c.value = !1;
                })
              }, {
                default: O(() => [
                  ae(V(y(B)("step.recalculate")), 1)
                ]),
                _: 1
              }, 8, ["icon"])) : L("", !0)
            ]),
            _: 1
          }, 512)
        ], 512),
        e.status === "attention" && e.attentionText ? (v(), S("span", em, V(e.attentionText), 1)) : L("", !0),
        e.editor ? (v(), Y(ze, {
          key: 1,
          variant: "url",
          size: "small",
          class: "edit-button",
          onClick: K[9] || (K[9] = Ke((Z) => a("edit:step"), ["stop"]))
        }, {
          default: O(() => [
            ae(V(y(B)("option.edit")), 1)
          ]),
          _: 1
        })) : L("", !0),
        s.value ? (v(), S("span", tm, V(e.totalPrefix || y(B)("step.total")) + ": " + V(s.value) + " m² ", 1)) : L("", !0)
      ]),
      e.alert ? (v(), S("div", om, [
        U(pa, jo(vr(e.alert)), null, 16)
      ])) : L("", !0)
    ], 10, Yh));
  }
}, rm = /* @__PURE__ */ he(am, [["__scopeId", "data-v-cf6c5c3d"]]);
function im(e, t) {
  return v(), S("svg", {
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
const nm = {
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
    return (t, o) => (v(), S("span", {
      class: ce(["label", [{ small: e.small }, { alt: e.alt }, e.color]])
    }, [
      ie(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, Mi = /* @__PURE__ */ he(nm, [["__scopeId", "data-v-08911c65"]]), lm = {
  key: 0,
  class: "top"
}, sm = ["srcset"], dm = ["srcset"], cm = ["src", "alt", "height", "width"], um = {
  key: 1,
  class: "bottom"
}, fm = {
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
    },
    /** Caption for the image */
    caption: {
      type: String,
      default: ""
    },
    captionPosition: {
      type: String,
      default: "bottom"
    }
  },
  emits: ["error"],
  setup(e, { emit: t }) {
    const o = t, a = e, r = /* @__PURE__ */ F(!1);
    function i(l) {
      r.value = !0, o("error", l);
    }
    const n = I(() => a.image);
    return ue(n, () => {
      r.value = !1;
    }), (l, s) => (v(), S("figure", {
      class: ce(["image-wrapper", { "has-caption": e.caption }]),
      style: kt({ width: `${e.width}px`, height: `${e.height}px` })
    }, [
      e.caption && e.captionPosition === "top" ? (v(), S("figcaption", lm, V(e.caption), 1)) : L("", !0),
      N("picture", {
        class: "image-inner",
        style: kt({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.mobile ? (v(), S("source", {
          key: 0,
          media: "(max-width: 640px)",
          srcset: e.mobile
        }, null, 8, sm)) : L("", !0),
        e.tablet ? (v(), S("source", {
          key: 1,
          media: "(max-width: 1024px)",
          srcset: e.tablet
        }, null, 8, dm)) : L("", !0),
        e.image && !r.value ? (v(), S("img", {
          key: 2,
          loading: "lazy",
          class: ce(["image", e.rounded ? `rounded-${e.rounded}` : ""]),
          src: e.image,
          alt: e.alt,
          height: e.height,
          width: e.width,
          onError: i
        }, null, 42, cm)) : (v(), S("div", {
          key: 3,
          class: ce(["skeleton", e.rounded ? `rounded-${e.rounded}` : ""])
        }, null, 2))
      ], 4),
      e.caption && e.captionPosition === "bottom" ? (v(), S("figcaption", um, V(e.caption), 1)) : L("", !0)
    ], 6));
  }
}, Gs = /* @__PURE__ */ he(fm, [["__scopeId", "data-v-a966f45d"]]), pm = {
  key: 0,
  class: "amount"
}, hm = {
  key: 1,
  class: "labels"
}, mm = {
  __name: "POptionCardHeader",
  props: /* @__PURE__ */ pt({
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
    const t = Qe(e, "amount");
    return (o, a) => (v(), S(be, null, [
      e.selected && e.editAmount ? (v(), S("div", pm, [
        N("span", null, V(e.amountLabel), 1),
        U(Ei, {
          modelValue: t.value,
          "onUpdate:modelValue": a[0] || (a[0] = (r) => t.value = r),
          onClick: a[1] || (a[1] = Ke(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : L("", !0),
      e.labels.length && !e.editAmount ? (v(), S("div", hm, [
        (v(!0), S(be, null, ro(e.labels, (r, i) => (v(), S(be, { key: i }, [
          r.text ? (v(), Y(Mi, {
            key: 0,
            color: r.color,
            small: ""
          }, {
            default: O(() => [
              ae(V(r.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : L("", !0)
        ], 64))), 128))
      ])) : L("", !0),
      e.image && !e.editAmount ? (v(), Y(Gs, {
        key: 2,
        image: e.image,
        alt: `${e.title} ${y(B)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : L("", !0)
    ], 64));
  }
}, vm = /* @__PURE__ */ he(mm, [["__scopeId", "data-v-caa4e54a"]]);
function gm(e, t) {
  return v(), S("svg", {
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
function bm(e, t) {
  return v(), S("svg", {
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
const ym = {
  key: 0,
  class: "not-available"
}, wm = {
  key: 1,
  class: "custom-value"
}, xm = {
  key: 2,
  class: "information"
}, km = {
  key: 0,
  class: "delivery"
}, _m = { class: "delivery-time" }, $m = {
  key: 1,
  class: "price"
}, Sm = {
  key: 0,
  class: "price-per"
}, Cm = {
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
    const o = e, a = t, r = /* @__PURE__ */ F(o.customInput.value), i = I({
      get: () => o.customInput.value,
      set: (l) => {
        r.value = Number(l);
      }
    });
    function n() {
      r.value && r.value > 0 && a("update:customValue", r.value);
    }
    return (l, s) => e.disabled && e.notAvailableMessage ? (v(), S("div", ym, [
      U(yr, { icon: y(gm) }, null, 8, ["icon"]),
      N("span", null, V(e.notAvailableMessage), 1)
    ])) : e.customInput.value && e.customInput.unit && !e.disabled && !e.notAvailableMessage ? (v(), S("div", wm, [
      U(vt, {
        id: "custom-value",
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (c) => i.value = c),
        inline: e.customInput.unit,
        required: "",
        "data-testid": "custom-value-input",
        "aria-label": y(B)("option.custom_value")
      }, null, 8, ["modelValue", "inline", "aria-label"]),
      U(ze, {
        variant: "primary",
        "data-testid": "custom-value-submit",
        onClick: Ke(n, ["stop"])
      }, {
        default: O(() => [
          ae(V(e.customInput.buttonText || y(B)("option.continue")), 1)
        ]),
        _: 1
      })
    ])) : (v(), S("div", xm, [
      e.deliveryTime ? (v(), S("span", km, [
        U(Zt, { icon: y(bm) }, null, 8, ["icon"]),
        N("span", _m, V(e.deliveryTimeText), 1)
      ])) : L("", !0),
      e.price ? (v(), S("span", $m, [
        ae(" € " + V(e.price) + " ", 1),
        e.pricePer ? (v(), S("span", Sm, " / " + V(e.pricePer), 1)) : L("", !0)
      ])) : L("", !0)
    ]));
  }
}, Am = /* @__PURE__ */ he(Cm, [["__scopeId", "data-v-95b1dd81"]]), Em = ["tabindex", "aria-current", "part", "aria-disabled"], Tm = {
  key: 0,
  class: "no-option"
}, Om = {
  key: 1,
  class: "inner"
}, zm = { class: "header" }, Vm = { class: "content" }, Mm = {
  class: "description",
  part: "option-description"
}, Bm = { class: "footer" }, Pm = {
  __name: "POptionCard",
  props: /* @__PURE__ */ pt({
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
    const t = e, o = /* @__PURE__ */ F(!1), a = I(() => t.deliveryTimeText !== "" ? `${t.deliveryTime} ${t.deliveryTimeText}` : Ff("option.days", t.deliveryTime)), r = I(() => {
      switch (t.pricePer) {
        case "unit":
          return B("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), i = Qe(e, "modelValue"), n = Qe(e, "amount"), l = I(() => t.amountLabel ? t.amountLabel : B("option.amount")), s = I(() => typeof n.value == "number" && n.value > 0);
    function c(f) {
      t.disabled || (o.value = s.value ? !o.value : !1, f ? n.value = f : i.value = !i.value);
    }
    function d(f, p) {
      let h = null;
      p === "left" && f ? h = f.previousElementSibling : p === "right" && f && (h = f.nextElementSibling);
      const m = h?.querySelector(".header");
      if (h && !m.disabled) {
        m.click();
        let w = null;
        const x = h.querySelector("input");
        setTimeout(() => {
          w = h.querySelector(".option-card"), w && !w.classList.contains("disabled") ? w.focus() : x && x.focus();
        }, 50);
      } else h && d(h, p);
    }
    function u(f, p) {
      const h = f.currentTarget.parentElement;
      if (p === "left") {
        const m = h.previousElementSibling?.querySelector(".option-card"), w = h.previousElementSibling?.querySelector(".overlay");
        m ? m.classList.contains("disabled") ? u({ currentTarget: m }, "left") : w ? w.click() : m.focus() : d(h.closest(".accordion-item"), "left");
      } else if (p === "right") {
        const m = h.nextElementSibling?.querySelector(".option-card"), w = h.nextElementSibling?.querySelector(".overlay");
        m ? m.classList.contains("disabled") ? u({ currentTarget: m }, "right") : w ? w.click() : m.focus() : d(h.closest(".accordion-item"), "right");
      }
    }
    return et(() => {
      n.value > 0 && i.value && (o.value = !0);
    }), ue(n, (f, p) => {
      !p && f && (o.value = !0);
    }), ue(i, () => {
      n.value && (o.value = !!i.value);
    }), (f, p) => (v(), S("article", {
      class: ce(["option-card", { selected: i.value, disabled: e.disabled }]),
      tabindex: e.disabled ? -1 : 0,
      "aria-current": i.value,
      "data-testid": "option",
      part: `option ${i.value ? "option-selected" : ""}`,
      "aria-disabled": e.disabled,
      onClick: p[2] || (p[2] = (h) => e.customInput.value ? null : c()),
      onKeyup: [
        p[3] || (p[3] = dt((h) => e.customInput.value ? null : c(), ["enter"])),
        p[4] || (p[4] = dt((h) => u(h, "left"), ["arrow-left"])),
        p[5] || (p[5] = dt((h) => u(h, "right"), ["arrow-right"])),
        p[6] || (p[6] = dt((h) => u(h, "up"), ["arrow-up"]))
      ]
    }, [
      e.noOption ? (v(), S("div", Tm, [
        U(Zt, { icon: y(im) }, null, 8, ["icon"]),
        U(St, { level: "h3" }, {
          default: O(() => [
            ae(V(e.noOptionText), 1)
          ]),
          _: 1
        })
      ])) : (v(), S("div", Om, [
        N("header", zm, [
          ie(f.$slots, "header", {}, () => [
            U(vm, {
              amount: n.value,
              "onUpdate:amount": p[0] || (p[0] = (h) => n.value = h),
              selected: i.value,
              "amount-label": l.value,
              image: e.image,
              "edit-amount": o.value,
              labels: e.labels,
              title: e.title
            }, null, 8, ["amount", "selected", "amount-label", "image", "edit-amount", "labels", "title"])
          ], !0)
        ]),
        N("div", Vm, [
          ie(f.$slots, "content", {}, () => [
            e.title ? (v(), Y(St, {
              key: 0,
              level: "h3",
              class: "title",
              part: "option-title"
            }, {
              default: O(() => [
                ae(V(e.title), 1)
              ]),
              _: 1
            })) : L("", !0),
            N("p", Mm, V(e.description), 1)
          ], !0)
        ]),
        N("footer", Bm, [
          ie(f.$slots, "footer", {}, () => [
            U(Am, {
              "delivery-time": e.deliveryTime,
              price: e.price,
              "price-per": r.value,
              "delivery-time-text": a.value,
              "custom-input": e.customInput,
              disabled: e.disabled,
              "not-available-message": e.notAvailableMessage,
              "onUpdate:customValue": p[1] || (p[1] = (h) => c(h))
            }, null, 8, ["delivery-time", "price", "price-per", "delivery-time-text", "custom-input", "disabled", "not-available-message"])
          ], !0)
        ])
      ]))
    ], 42, Em));
  }
}, Im = /* @__PURE__ */ he(Pm, [["__scopeId", "data-v-bd75f725"]]), jm = {
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
    return et(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), So(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (o, a) => (v(), S("div", {
      class: ce(["overlay", { fixed: e.fixed }]),
      style: kt({ background: `rgba(${e.color}, ${e.opacity / 100})` })
    }, [
      ie(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, Dm = /* @__PURE__ */ he(jm, [["__scopeId", "data-v-66d42f70"]]), Nm = { class: "option-step-container" }, Fm = {
  key: 0,
  class: "subtitle",
  part: "step-subtitle"
}, Lm = {
  key: 1,
  class: "subtitle",
  part: "step-subtitle"
}, Rm = {
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
    const o = e, a = t, r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F([]), n = /* @__PURE__ */ F([]), l = I({
      get: () => o.open,
      set: (x) => {
        a("update:accordionState", x);
      }
    }), s = I(() => n.value.map((x, _) => {
      if (!x)
        return null;
      if (o.options[_] && o.options[_].noOption)
        return o.options[_].noOptionText;
      let $ = "";
      const b = i.value.find((C) => C.code === o.options[_].code);
      return b?.value > 0 && ($ += `${b.value}x `), $ += o.options[_].title, $;
    }).filter((x) => !!x).join(", ")), c = /* @__PURE__ */ F(null);
    function d(x) {
      if (o.multiple || (i.value = []), i.value.length === 0 || i.value.some(($) => $.code === o.options[x].code) === !1) {
        let $;
        o.options[x].amount ? $ = { code: o.options[x].code, value: o.options[x].amount } : $ = { code: o.options[x].code }, i.value.push($);
      }
      n.value[x] = !n.value[x];
      const _ = i.value.findIndex(($) => $.code === "no-option");
      if (_ > -1 && o.options[x].noOption)
        n.value.forEach(($, b) => {
          b !== x && (n.value[b] = !1);
        }), i.value = i.value.filter(($) => $.code === "no-option");
      else if (!o.options[x].noOption) {
        const $ = o.options.findIndex((b) => b.noOption);
        $ > -1 && (n.value[$] = !1), _ > -1 ? i.value.splice(_, 1) : n.value[x] === !1 && i.value.some((b) => b.code === o.options[x].code) && (i.value = i.value.filter((b) => b.code !== o.options[x].code));
      }
    }
    function u(x) {
      d(x), a("update:modelValue", i.value);
    }
    function f() {
      i.value.length === 0 && o.modelValue?.length ? i.value = o.modelValue : o.modelValue && Object.keys(o.modelValue).length && i.value.length === 0 && (i.value = [o.modelValue]), o.options.forEach((x) => {
        !x.noOption && x.code === o.modelValue?.code || Array.isArray(o.modelValue) && o.modelValue.some((_) => _.code === x.code) ? n.value.push(!0) : n.value.push(!1);
      }), o.code === "accessories" && Array.isArray(o.modelValue) && o.modelValue.length > 2 && (r.value = !0);
    }
    function p(x) {
      return o.code === "accessories" && x > 3 && !r.value;
    }
    function h(x, _) {
      o.multiple || d(x);
      const $ = i.value.filter((C) => C.code !== o.options[x].code), b = { code: o.options[x].code, value: _ };
      i.value = [...$, b], a("update:modelValue", i.value);
    }
    function m() {
      setTimeout(() => {
        c.value?.length && c.value[0].$el.focus();
      }, 500);
    }
    function w(x) {
      return x.customInput?.value ? 0 : Array.isArray(o.modelValue) ? o.modelValue?.find((_) => _.code === x.code)?.value : o.modelValue?.value || x.amount || 0;
    }
    return f(), ue(
      () => o.modelValue,
      () => {
        n.value = [], f();
      }
    ), ue(
      () => o.open,
      () => {
        o.open && m();
      },
      { immediate: !0 }
    ), (x, _) => (v(), S("div", Nm, [
      e.editor ? (v(), Y(ze, {
        key: 0,
        variant: "url",
        size: "small",
        class: "edit-button",
        onClick: _[0] || (_[0] = Ke(($) => a("edit:step"), ["stop"]))
      }, {
        default: O(() => [
          ae(V(y(B)("option.edit")), 1)
        ]),
        _: 1
      })) : L("", !0),
      U($s, {
        modelValue: l.value,
        "onUpdate:modelValue": _[3] || (_[3] = ($) => l.value = $),
        class: "configurator-step options",
        "aria-title": e.ariaTitle,
        "scroll-into-view": "",
        part: "step",
        exportparts: "state-indicator-icon"
      }, {
        header: O(() => [
          U(Us, { status: e.status }, null, 8, ["status"]),
          U(St, {
            class: "title",
            part: "step-title",
            level: "h3"
          }, {
            default: O(() => [
              ae(V(e.title) + " ", 1),
              e.hasOverwrites && e.editor ? (v(), Y(fa, {
                key: 0,
                text: y(B)("option.step_has_overwrites")
              }, {
                default: O(() => [
                  U(wt, { icon: y(Vi) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : L("", !0),
              e.isHidden && e.editor ? (v(), Y(fa, {
                key: 1,
                text: y(B)("option.step_is_hidden")
              }, {
                default: O(() => [
                  U(wt, { icon: y(Zs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : L("", !0)
            ]),
            _: 1
          }),
          e.status === "attention" ? (v(), S("span", Fm, V(e.attentionText || y(B)("option.attention")), 1)) : L("", !0),
          s.value ? (v(), S("span", Lm, V(s.value), 1)) : L("", !0)
        ]),
        default: O(() => [
          N("div", null, [
            N("div", {
              class: ce(["option-container", {
                "show-all": e.code === "accessories" && r.value || e.code !== "accessories"
              }]),
              tabindex: "0"
            }, [
              (v(!0), S(be, null, ro(e.options, ($, b) => (v(), S("div", {
                key: b,
                class: ce(["option", { hide: p(b) }])
              }, [
                b === 3 && !r.value && e.code === "accessories" ? (v(), Y(Dm, {
                  key: 0,
                  tabindex: "0",
                  onClick: _[1] || (_[1] = Ke((C) => r.value = !0, ["stop"])),
                  onKeyup: _[2] || (_[2] = dt(Ke((C) => r.value = !0, ["stop"]), ["enter"]))
                }, {
                  default: O(() => [
                    ae(" +" + V(e.options.length - 3), 1)
                  ]),
                  _: 1
                })) : L("", !0),
                U(Im, Be({
                  ref_for: !0,
                  ref_key: "optionCards",
                  ref: c
                }, { ref_for: !0 }, $, {
                  amount: w($),
                  disabled: $.available === !1 || e.disabled,
                  "not-available-message": $.available === !1 ? e.unvailableText || y(B)("option.unavailable") : "",
                  "model-value": n.value[b],
                  exportparts: "option option-title option-description",
                  "onUpdate:amount": (C) => h(b, C),
                  "onUpdate:modelValue": (C) => u(b)
                }), null, 16, ["amount", "disabled", "not-available-message", "model-value", "onUpdate:amount", "onUpdate:modelValue"])
              ], 2))), 128))
            ], 2),
            e.alert ? (v(), Y(pa, jo(Be({ key: 0 }, e.alert)), null, 16)) : L("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "aria-title"])
    ]));
  }
}, Um = /* @__PURE__ */ he(Rm, [["__scopeId", "data-v-16221ffd"]]), qm = {
  class: "delivery-options",
  part: "delivery-step"
}, Hm = { class: "header" }, Km = {
  class: "hint",
  part: "delivery-step-subtitle"
}, Wm = { class: "content" }, Zm = {
  class: "day",
  part: "delivery-option-day"
}, Gm = {
  class: "date",
  part: "delivery-option-date"
}, Jm = {
  key: 0,
  class: "cost",
  part: "delivery-option-cost"
}, Ym = {
  key: 1,
  class: "no-cost",
  part: "delivery-option-no-cost"
}, Xm = {
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
    const t = e, o = /* @__PURE__ */ F(!1), a = I(() => t.title ? t.title : B("delivery.delivery_options")), r = I(() => t.noCost ? t.noCost : B("delivery.no_extra_cost")), i = I(
      () => t.makeYourChoice ? t.makeYourChoice : B("delivery.make_your_choice_next_step")
    ), n = I(() => t.buttonTextShow ? t.buttonTextShow : B("delivery.see_more")), l = I(() => t.buttonTextHide ? t.buttonTextHide : B("delivery.see_less"));
    function s() {
      window.innerWidth >= 768 ? o.value = !0 : window.innerWidth < 768 && (o.value = !1);
    }
    return it(() => {
      window.addEventListener("resize", s);
    }), $o(() => {
      window.removeEventListener("resize", s);
    }), s(), (c, d) => (v(), S("div", qm, [
      N("div", Hm, [
        U(St, {
          class: "title",
          part: "delivery-step-title",
          level: "h3"
        }, {
          default: O(() => [
            ae(V(a.value), 1)
          ]),
          _: 1
        }),
        N("span", Km, [
          d[1] || (d[1] = N("span", null, "*", -1)),
          ae(" " + V(i.value), 1)
        ])
      ]),
      N("div", Wm, [
        (v(!0), S(be, null, ro(e.items, (u, f) => (v(), S("div", {
          key: f,
          class: ce(["option", {
            hide: f > 0 && !o.value && !u.cheapest,
            last: f === 1 && !o.value || f === e.items.length - 1 || f > 1 && u.cheapest && !o.value
          }]),
          part: "delivery-option"
        }, [
          N("span", Zm, [
            ae(V(u.day) + " ", 1),
            u.label ? (v(), Y(Mi, {
              key: 0,
              color: u.label.color,
              small: ""
            }, {
              default: O(() => [
                ae(V(u.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : L("", !0)
          ]),
          N("span", Gm, V(u.date), 1),
          u.cost ? (v(), S("span", Jm, " + € " + V(u.cost), 1)) : (v(), S("span", Ym, V(r.value), 1))
        ], 2))), 128)),
        U(ze, {
          variant: "tertiary",
          onClick: d[0] || (d[0] = (u) => o.value = !o.value)
        }, {
          default: O(() => [
            ae(V(o.value ? l.value : n.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}, Qm = /* @__PURE__ */ he(Xm, [["__scopeId", "data-v-6eb4b6f9"]]), ev = { class: "wrapper" }, tv = { class: "header" }, ov = { class: "content" }, av = {
  __name: "PDrawer",
  props: /* @__PURE__ */ pt({
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
    const o = e, a = Qe(e, "modelValue"), r = Bt("drawer"), i = /* @__PURE__ */ F(!1), n = /* @__PURE__ */ F(50), l = /* @__PURE__ */ F(!1);
    let s = null, c = null, d = null;
    function u() {
      if (!r.value)
        return;
      const b = o.overlay ? n.value / 100 : 0;
      r.value.style.setProperty("--drawer-backdrop-opacity", String(b));
    }
    function f(b = !1, C = !1) {
      b && o.persistent && !C || l.value && !C || (l.value = !0, i.value = !1, n.value = 0, u(), s && (cancelAnimationFrame(s), s = null), c && (clearTimeout(c), c = null), d && clearTimeout(d), d = window.setTimeout(() => {
        r.value?.open && r.value.close(), a.value && (a.value = !1), l.value = !1;
      }, 300));
    }
    function p(b) {
      o.overlay && b.target === b.currentTarget && f(!0);
    }
    function h() {
      f(!1, !0);
    }
    function m() {
      return Array.from(document.body.querySelectorAll("dialog.drawer[open]")).find(
        (b) => b !== r.value
      );
    }
    function w() {
      const b = r.value;
      b.open || (o.overlay ? b.showModal() : b.show()), u();
    }
    function x() {
      d && clearTimeout(d);
      const b = m(), C = () => {
        w(), s = requestAnimationFrame(() => {
          i.value = !0, l.value = !1, n.value = 50, u();
        });
      };
      if (b) {
        n.value = 0, u(), b.dispatchEvent(new CustomEvent("drawer:force-close")), c = window.setTimeout(C, 300);
        return;
      }
      C();
    }
    ue(
      a,
      (b) => {
        if (b) {
          x();
          return;
        }
        f(!1, !0);
      },
      { flush: "post" }
    );
    function _(b) {
      if (o.persistent) {
        b.preventDefault();
        return;
      }
      f(!1, !0);
    }
    function $() {
      d && (clearTimeout(d), d = null), a.value && (a.value = !1), l.value || (i.value = !1), l.value = !1;
    }
    return et(() => {
      a.value && x();
    }), ue(
      () => r.value,
      (b, C, A) => {
        b && (b.addEventListener("cancel", _), b.addEventListener("click", p), b.addEventListener("drawer:force-close", h), A(() => {
          b.removeEventListener("cancel", _), b.removeEventListener("click", p), b.removeEventListener("drawer:force-close", h);
        }));
      },
      { immediate: !0 }
    ), $o(() => {
      r.value?.open && r.value.close(), s && cancelAnimationFrame(s), c && clearTimeout(c), d && clearTimeout(d);
    }), ue(
      () => o.overlay,
      () => {
        u();
      },
      { immediate: !0 }
    ), ue(
      n,
      () => {
        u();
      },
      { immediate: !0 }
    ), t({
      closeDrawer: f
    }), (b, C) => a.value ? (v(), S("dialog", {
      key: 0,
      ref: "drawer",
      "data-testid": "drawer",
      class: ce(["drawer", [
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
      N("div", ev, [
        N("div", tv, [
          U(St, {
            level: "h2",
            class: "title"
          }, {
            default: O(() => [
              ae(V(e.title), 1)
            ]),
            _: 1
          }),
          U(ze, {
            variant: "text",
            icon: y(Ba),
            class: "close",
            "data-testid": "close-button",
            "aria-label": y(B)("drawer.close"),
            onClick: C[0] || (C[0] = (A) => f())
          }, null, 8, ["icon", "aria-label"])
        ]),
        N("div", ov, [
          ie(b.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 34)) : L("", !0);
  }
}, rv = /* @__PURE__ */ he(av, [["__scopeId", "data-v-c56d11e1"]]), iv = ["disabled"], nv = {
  __name: "PSwitch",
  props: {
    modelValue: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, r = I({
      get: () => o.modelValue,
      set: (n) => {
        a("update:modelValue", n);
      }
    });
    function i() {
      r.value = !r.value;
    }
    return (n, l) => (v(), S("button", {
      class: ce(["switch", { enabled: r.value }]),
      "data-testid": "switch",
      disabled: e.disabled,
      "aria-label": "Use setting",
      onClick: l[0] || (l[0] = (s) => e.disabled ? null : i()),
      onKeydown: l[1] || (l[1] = dt(Ke(() => {
      }, ["prevent"]), ["enter"]))
    }, [
      N("span", {
        class: ce(["dot", { enabled: r.value }]),
        "aria-hidden": "true"
      }, null, 2)
    ], 42, iv));
  }
}, Rn = /* @__PURE__ */ he(nv, [["__scopeId", "data-v-42e36626"]]), lv = {}, sv = { class: "form-row" }, dv = {
  key: 0,
  class: "title"
}, cv = {
  key: 1,
  class: "subtitle"
}, uv = { class: "fields" };
function fv(e, t) {
  return v(), S("section", sv, [
    N("div", {
      class: ce(["label", { "label--empty": !e.$slots.title && !e.$slots.subtitle }])
    }, [
      e.$slots.title ? (v(), S("h2", dv, [
        ie(e.$slots, "title", {}, void 0, !0)
      ])) : L("", !0),
      e.$slots.subtitle ? (v(), S("p", cv, [
        ie(e.$slots, "subtitle", {}, void 0, !0)
      ])) : L("", !0)
    ], 2),
    N("div", uv, [
      ie(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const lt = /* @__PURE__ */ he(lv, [["render", fv], ["__scopeId", "data-v-7a247590"]]), pv = { class: "form-grid" }, hv = {
  __name: "PFormGrid",
  setup(e) {
    return (t, o) => (v(), S("div", pv, [
      ie(t.$slots, "default", {}, void 0, !0),
      t.$slots.actions ? (v(), Y(lt, {
        key: 0,
        class: "actions"
      }, {
        default: O(() => [
          ie(t.$slots, "actions", {}, void 0, !0)
        ]),
        _: 3
      })) : L("", !0)
    ]));
  }
}, Un = /* @__PURE__ */ he(hv, [["__scopeId", "data-v-940e9744"]]);
function mv(e, t) {
  return v(), S("svg", {
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
function vv(e, t) {
  return v(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
function gv(e, t) {
  return v(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    N("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" })
  ]);
}
const bv = {
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
    const t = /* @__PURE__ */ F(null);
    function o(a) {
      if (!["ArrowUp", "ArrowDown"].includes(a.key))
        return;
      const r = Io(t.value), i = r.indexOf(a.target);
      a.key === "ArrowDown" ? r[i + 1]?.focus() : a.key === "ArrowUp" && r[i - 1]?.focus();
    }
    return (a, r) => (v(), S("div", {
      ref_key: "list",
      ref: t,
      class: ce(["list", { grid: e.grid }]),
      style: kt(`column-gap: ${e.gapRow}; row-gap: ${e.gapColumn};`),
      "data-testid": "list",
      onKeydown: o
    }, [
      (v(!0), S(be, null, ro(e.items, (i, n) => ie(a.$slots, "default", {
        key: n,
        index: n,
        item: i
      }, void 0, !0)), 128)),
      ie(a.$slots, "append-list", {}, void 0, !0)
    ], 38));
  }
}, yv = /* @__PURE__ */ he(bv, [["__scopeId", "data-v-5e496d8d"]]), wv = ["data-testid", "tabindex", "aria-disabled"], xv = {
  key: 0,
  class: "prepend"
}, kv = { class: "content" }, _v = {
  key: 0,
  class: "title"
}, $v = {
  key: 1,
  class: "subtitle"
}, Sv = { class: "text" }, Cv = {
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
    return (t, o) => (v(), S("div", {
      class: ce(["list-item", { clickable: e.clickable, active: e.active }]),
      "data-testid": e.clickable ? "clickable" : "list-item",
      tabindex: e.disabled ? -1 : 0,
      "aria-disabled": e.disabled
    }, [
      t.$slots.prepend ? (v(), S("div", xv, [
        ie(t.$slots, "prepend", {}, void 0, !0)
      ])) : L("", !0),
      N("div", kv, [
        ie(t.$slots, "content", {}, () => [
          e.title ? (v(), S("span", _v, V(e.title), 1)) : L("", !0),
          e.subtitle ? (v(), S("span", $v, V(e.subtitle), 1)) : L("", !0),
          N("span", Sv, V(e.text), 1)
        ], !0)
      ])
    ], 10, wv));
  }
}, Ir = /* @__PURE__ */ he(Cv, [["__scopeId", "data-v-9c2bcba7"]]), Av = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], Ev = {
  key: 0,
  class: "append"
}, Tv = ["id"], Ov = {
  __name: "PCheckbox",
  props: /* @__PURE__ */ pt({
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
    const t = e, o = Qe(e, "modelValue"), a = t.required ? { checked: { required: He.withMessage(B("checkbox.required"), $f(!0)) } } : null, r = lo(a, { checked: o }), i = I(() => `${t.id}-error`);
    return (n, l) => (v(), S("div", {
      class: ce(["checkbox-container", { error: y(r).checked?.$errors[0]?.$message, large: e.large }])
    }, [
      N("label", {
        class: ce(["label", { disabled: e.disabled }])
      }, [
        xo(N("input", Be(n.$attrs, {
          id: e.id,
          "onUpdate:modelValue": l[0] || (l[0] = (s) => o.value = s),
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
          onBlur: l[1] || (l[1] = (s) => y(r).checked?.$touch(s))
        }), null, 16, Av), [
          [ws, o.value]
        ]),
        ie(n.$slots, "label", {}, () => [
          ae(V(e.label), 1)
        ], !0),
        n.$slots.append ? (v(), S("span", Ev, [
          ie(n.$slots, "append", {}, void 0, !0)
        ])) : L("", !0)
      ], 2),
      y(r).checked?.$errors[0]?.$message ? (v(), S("span", {
        key: 0,
        id: i.value,
        role: "alert",
        "aria-live": "assertive",
        class: "error-message"
      }, V(y(r).checked.$errors[0].$message), 9, Tv)) : L("", !0)
    ], 2));
  }
}, jr = /* @__PURE__ */ he(Ov, [["__scopeId", "data-v-f61c3d17"]]);
function Zo(e, t) {
  return t.split(".").reduce((o, a) => o[a] ? o[a] : o, e);
}
const zv = {
  __name: "PDivider",
  props: {
    thickness: {
      type: String,
      default: "0.0625rem"
    },
    vertical: Boolean,
    /** container uses flexbox, make the divider stretch */
    flex: Boolean
  },
  setup(e) {
    return hu((t) => ({
      v7bf99daa: e.thickness
    })), (t, o) => (v(), S("hr", {
      class: ce(["divider", { vertical: e.vertical, flex: e.flex }])
    }, null, 2));
  }
}, Vv = /* @__PURE__ */ he(zv, [["__scopeId", "data-v-8cd28476"]]), Js = {
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
}, Mv = ["data-testid", "tabindex"], Bv = ["for"], Pv = ["aria-invalid", "aria-describedby"], Iv = { class: "label-inner" }, jv = ["onClick"], Dv = {
  key: 2,
  class: "selected-item"
}, Nv = ["id", "placeholder", "disabled", "readonly", "value", "aria-invalid", "aria-describedby"], Fv = { class: "action-buttons" }, Lv = ["aria-label", "disabled"], Rv = ["aria-label", "disabled"], Uv = ["id"], qv = {
  key: 0,
  class: "content-divider"
}, Hv = {
  key: 1,
  class: "no-results"
}, Kv = {
  __name: "_BaseSelect",
  props: {
    ...Js,
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
  setup(e, { expose: t, emit: o }) {
    const a = o, r = e, i = yt("showError", !0), n = yt("markFormDirty", null), l = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(!1), c = /* @__PURE__ */ F(!1), d = /* @__PURE__ */ F(null), u = /* @__PURE__ */ F(null), f = /* @__PURE__ */ F(null), p = /* @__PURE__ */ F(null), h = /* @__PURE__ */ F(null), m = /* @__PURE__ */ F(() => {
    }), w = /* @__PURE__ */ F(() => {
    }), x = /* @__PURE__ */ F(() => {
    });
    function _(ee) {
      a("update:modelValue", ee), n?.();
    }
    const $ = I({
      get() {
        return r.multiple && !Array.isArray(r.modelValue) ? [] : r.modelValue;
      },
      set(ee) {
        if (r.multiple) {
          _(ee);
          return;
        }
        _(r.returnObject || !r.itemValue ? ee : ee?.[r.itemValue]);
      }
    }), b = I(() => r.requiredMessage ? r.requiredMessage : r.label ? B("input.required_with_label", { label: r.label.toLowerCase() }) : B("input.required")), C = I(() => r.required ? { value: { required: He.withMessage(() => b.value, ua) } } : { value: {} }), A = lo(C.value, { value: $ }), K = I(() => !r.required || r.required && !A.value?.$errors[0]), Z = I(() => !!r.error || A.value?.$errors?.length > 0 || !K.value), j = I(() => Array.isArray($.value) && $.value.length > 0), T = I(() => `${r.id}-error`);
    function D(ee) {
      return r.itemValue ? ee[r.itemValue] : ee;
    }
    function z(ee) {
      return r.multiple ? r.modelValue?.includes(D(ee)) || !1 : $.value === D(ee);
    }
    function M(ee) {
      let ve = null;
      return (typeof ee == "string" || typeof ee == "number") && !r.itemText ? ee : (typeof r.itemText == "string" && r.itemText?.includes(".") && (ve = Zo(ee, r.itemText)), !ee || typeof r.itemText == "string" && (!r.itemText?.includes(".") && ee[r.itemText] === void 0 || r.itemText?.includes(".") && ve == null) ? "" : r.itemText && typeof r.itemText == "string" && !r.itemText.includes(".") ? ee[r.itemText] : typeof r.itemText == "function" ? r.itemText(ee) : ve);
    }
    function G(ee) {
      if (!ee)
        return "";
      if (r.grouped) {
        const ve = r.items.find(
          (me) => me[r.groupItems].find((ye) => D(ye) === ee)
        )[r.groupItems].find((me) => D(me) === ee);
        return M(ve);
      }
      return !r.returnObject && r.itemValue ? M(r.items.find((ve) => D(ve) === ee)) : M(ee);
    }
    function P(ee) {
      $.value.splice($.value.indexOf(ee), 1), _($.value);
    }
    function Q(ee) {
      if (!r.multiple) {
        $.value = ee;
        return;
      }
      if ($.value.includes(D(ee))) {
        $.value = $.value.filter((ve, me) => me !== $.value.indexOf(D(ee)));
        return;
      }
      $.value = [...$.value, D(ee)];
    }
    function de(ee) {
      const ve = r.returnObject || !r.itemValue ? ee[r.groupItems] : ee[r.groupItems].map((Ct) => Ct[r.itemValue]);
      let me = !1, ye = !0;
      return ve.forEach((Ct) => {
        $.value.includes(Ct) ? me = !0 : ye = !1;
      }), ye ? !0 : me ? "indeterminate" : !1;
    }
    function le(ee) {
      const ve = r.returnObject || !r.itemValue ? ee[r.groupItems] : ee[r.groupItems].map((me) => me[r.itemValue]);
      if (de(ee) === !0) {
        ve.forEach((me) => {
          P(me);
        });
        return;
      }
      _(Array.from(/* @__PURE__ */ new Set([...$.value, ...ve])));
    }
    function We(ee) {
      l.value = ee, a("update:isOpen", ee);
    }
    function Ce(ee) {
      c.value = ee, a("update:focus", ee), !ee && a("update:inputValue", null);
    }
    function Ie() {
      r.behavior === "manual" && w.value(), r.behavior === "focus" && !l.value && requestAnimationFrame(() => {
        p.value.focus();
      });
    }
    function Ve(ee, ve) {
      p.value = ee, r.behavior === "manual" && (m.value = ve.setActivator, w.value = ve.toggle, x.value = ve.onKeydown);
    }
    async function ya() {
      return f;
    }
    const wr = I(() => r.inputValue !== null ? r.inputValue : r.multiple ? null : G($.value));
    return ue(
      () => [c.value, s.value],
      () => {
        !c.value && !s.value && A.value.$touch();
      }
    ), t({
      getSelectContent: ya,
      getItemText: M,
      setActivator: m,
      toggle: w,
      onKeydown: x,
      input: p
    }), (ee, ve) => (v(), Y(Rs, {
      ref_key: "floatingContainer",
      ref: h,
      "aria-label": "Options",
      transition: "expand",
      offset: r.offset !== null ? r.offset : 1,
      attach: d.value,
      behavior: e.behavior,
      "close-on-click": !r.multiple,
      "onUpdate:isOpen": We,
      "onUpdate:focus": Ce
    }, {
      activator: O((me) => [
        N("div", Be(e.behavior === "click" ? { ...ee.$attrs, ...ee.disabled ? {} : me } : null, {
          "data-testid": r.dataTestid,
          "data-form-dirty-ignore": "",
          class: ["base-select", [r.class, e.behavior, { "is-open": l.value, disabled: r.disabled }]],
          tabindex: e.behavior === "click" && !ee.disabled ? 0 : null,
          onFocus: ve[5] || (ve[5] = (ye) => s.value = !0),
          onBlur: ve[6] || (ve[6] = (ye) => s.value = !1)
        }), [
          ee.label ? (v(), S("label", {
            key: 0,
            class: "input-label",
            for: ee.id
          }, [
            N("span", null, V(ee.label), 1)
          ], 8, Bv)) : L("", !0),
          N("div", {
            ref_key: "selectWrapper",
            ref: d,
            class: ce(["wrapper", { focus: c.value || s.value, "has-error": Z.value }]),
            "aria-invalid": Z.value,
            "aria-describedby": Z.value ? T.value : null
          }, [
            ee.prependIcon ? (v(), Y(wt, {
              key: 0,
              class: "prepend-icon",
              icon: ee.prependIcon
            }, null, 8, ["icon"])) : L("", !0),
            j.value ? (v(), S("div", {
              key: 1,
              ref_key: "selectedItems",
              ref: u,
              class: "selected-items"
            }, [
              (v(!0), S(be, null, ro($.value, (ye, Ct) => (v(), Y(Mi, {
                key: Ct,
                ref_for: !0,
                ref: "label",
                color: "gray"
              }, {
                default: O(() => [
                  N("span", Iv, [
                    ae(V(G(ye)) + " ", 1),
                    N("button", {
                      class: "close-button",
                      type: "button",
                      tabindex: "-1",
                      onClick: Ke((Yt) => P(ye), ["stop", "prevent"])
                    }, [
                      U(yr, { icon: y(gv) }, null, 8, ["icon"])
                    ], 8, jv)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ], 512)) : !ee.multiple && e.behavior === "click" && $.value ? (v(), S("div", Dv, V(G($.value)), 1)) : L("", !0),
            e.behavior === "click" ? xo((v(), S("div", {
              key: 3,
              class: "placeholder"
            }, V(r.placeholder), 513)), [
              [Si, !$.value || $.value.length === 0]
            ]) : (v(), S("input", Be({ key: 4 }, e.behavior === "focus" ? { ...ee.$attrs, ...me } : ee.$attrs, {
              id: r.id,
              ref: (ye) => Ve(ye, me),
              placeholder: r.placeholder,
              disabled: r.disabled,
              readonly: r.readonly,
              value: wr.value,
              autocomplete: "off",
              "aria-invalid": Z.value,
              "aria-describedby": Z.value ? T.value : null,
              onInput: ve[0] || (ve[0] = (ye) => ee.$emit("update:inputValue", ye.target.value)),
              onBlur: ve[1] || (ve[1] = (ye) => s.value = !1),
              onFocus: ve[2] || (ve[2] = (ye) => s.value = !0)
            }), null, 16, Nv)),
            N("div", Fv, [
              r.clearable && (!r.multiple && $.value || r.multiple && $.value?.length > 0) ? (v(), S("button", {
                key: 0,
                "aria-label": y(B)("input.clear"),
                class: "clear-button",
                tabindex: "-1",
                type: "button",
                disabled: r.disabled,
                onClick: [
                  ve[3] || (ve[3] = (ye) => $.value = r.multiple ? [] : null),
                  ve[4] || (ve[4] = Ke(() => {
                  }, ["stop"]))
                ]
              }, [
                U(wt, {
                  icon: y(vv),
                  "aria-hidden": "true"
                }, null, 8, ["icon"])
              ], 8, Lv)) : L("", !0),
              ie(ee.$slots, "inline", {}, () => [
                ee.hideChevron ? L("", !0) : (v(), S("button", {
                  key: 0,
                  "aria-label": y(B)("input.toggle"),
                  tabindex: "-1",
                  type: "button",
                  "data-testid": "toggle-chevron",
                  class: "toggle-chevron",
                  disabled: r.disabled,
                  onClick: Ie
                }, [
                  U(wt, {
                    class: ce(["state-indicator", { "is-open": l.value }]),
                    icon: y(mv)
                  }, null, 8, ["icon", "class"])
                ], 8, Rv))
              ], !0)
            ])
          ], 10, Pv),
          Z.value && y(i) ? (v(), S("div", {
            key: 1,
            id: T.value,
            role: "alert",
            "aria-live": "assertive",
            class: "error"
          }, V(y(A).value?.$errors[0]?.$message ? y(A).value.$errors[0].$message : r.error), 9, Uv)) : L("", !0)
        ], 16, Mv)
      ]),
      default: O(() => [
        ee.showDivider ? (v(), S("hr", qv)) : L("", !0),
        N("div", {
          ref_key: "selectContent",
          ref: f,
          class: ce(["select-content", { "remove-radius": ee.showDivider, "show-shadow": !ee.showDivider }])
        }, [
          ie(ee.$slots, "prepend-list", {}, void 0, !0),
          r.items.length > 0 ? (v(), Y(yv, {
            key: 0,
            "gap-column": "0",
            "gap-row": "0",
            items: r.items,
            onKeydown: ve[7] || (ve[7] = Ke(() => {
            }, ["prevent"]))
          }, {
            default: O(({ item: me }) => [
              r.grouped ? (v(), S(be, { key: 0 }, [
                r.items.indexOf(me) !== 0 ? (v(), Y(Vv, { key: 0 })) : L("", !0),
                r.grouped ? (v(), Y(Ir, {
                  key: 1,
                  title: me[r.groupText],
                  clickable: r.multiple,
                  disabled: !r.multiple,
                  onClick: (ye) => r.multiple && le(me),
                  onKeydown: dt((ye) => r.multiple && le(me), ["enter"])
                }, Ar({ _: 2 }, [
                  r.multiple ? {
                    name: "prepend",
                    fn: O(() => [
                      U(jr, {
                        id: `group-${r.items.indexOf(me)}-checkbox`,
                        "model-value": typeof de(me) == "boolean" ? de(me) : !1,
                        indeterminate: de(me) === "indeterminate",
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : L("", !0),
                (v(!0), S(be, null, ro(me[r.groupItems], (ye, Ct) => (v(), Y(Ir, {
                  key: Ct,
                  clickable: "",
                  active: z(ye),
                  text: M(ye),
                  onClick: (Yt) => Q(ye),
                  onKeydown: dt((Yt) => Q(ye), ["enter"])
                }, Ar({
                  content: O(() => [
                    ie(ee.$slots, "option", {
                      selected: z(ye),
                      option: ye
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  r.multiple ? {
                    name: "prepend",
                    fn: O(() => [
                      U(jr, {
                        id: `item-${me[r.groupItems].indexOf(ye)}-checkbox`,
                        "model-value": z(ye),
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : M(me) || ee.$slots.option ? (v(), Y(Ir, {
                key: 1,
                clickable: "",
                active: z(me),
                text: M(me),
                onClick: (ye) => Q(me),
                onKeydown: dt((ye) => Q(me), ["enter"])
              }, Ar({
                content: O(() => [
                  ie(ee.$slots, "option", {
                    selected: z(me),
                    option: me
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                r.multiple ? {
                  name: "prepend",
                  fn: O(() => [
                    U(jr, {
                      id: `item-${r.items.indexOf(me)}-checkbox`,
                      "model-value": z(me),
                      tabindex: "-1"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"])) : L("", !0)
            ]),
            _: 3
          }, 8, ["items"])) : r.hideNoItemsLabel ? L("", !0) : (v(), S("div", Hv, V(r.noItemsLabel || y(B)("input.no_results")), 1)),
          ie(ee.$slots, "append-list", {}, void 0, !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["offset", "attach", "behavior", "close-on-click"]));
  }
}, Wv = /* @__PURE__ */ he(Kv, [["__scopeId", "data-v-aecfad57"]]), Zv = {
  __name: "PCombobox",
  props: {
    ...Js,
    /** Whether the combobox is loading new items in the dropdown */
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "intersect"],
  setup(e, { expose: t, emit: o }) {
    const a = e, r = o, i = I(() => {
      const { loading: b, ...C } = a;
      return C;
    }), n = I({
      get() {
        return a.multiple && !Array.isArray(a.modelValue) ? [a.modelValue] : a.modelValue;
      },
      set(b) {
        r("update:modelValue", b);
      }
    }), l = /* @__PURE__ */ F(null), s = /* @__PURE__ */ F(null), c = /* @__PURE__ */ F(null), d = /* @__PURE__ */ F(null), u = /* @__PURE__ */ F(null), f = /* @__PURE__ */ F(!1), p = /* @__PURE__ */ F(!1);
    function h() {
      s.value = null, n.value = null, l.value?.input?.blur?.();
    }
    const m = I(() => !s.value || a.serverside ? a.items : a.itemText ? a.grouped ? a.items.filter(
      (b) => b[a.groupItems].some(
        (C) => l.value.getItemText(C).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map((b) => {
      const C = b[a.groupItems].filter(
        (A) => l.value.getItemText(A).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      );
      return C.length ? {
        ...b,
        [a.groupItems]: C
      } : null;
    }) : a.items.filter(
      (b) => l.value.getItemText(b).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ) : a.items.filter(
      (b) => b.toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
    ));
    async function w() {
      const b = (await l.value.getSelectContent()).value;
      b?.scrollTo(0, b.scrollHeight);
    }
    function x(b, C = 4) {
      return b ? b.scrollTop + b.clientHeight >= b.scrollHeight - C : !1;
    }
    async function _(b) {
      if (f.value = b, b) {
        await it(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame);
        const C = (await l.value.getSelectContent()).value;
        d.value = new IntersectionObserver(
          (A) => {
            A[0].isIntersecting && !p.value && !a.loading && (r("intersect"), x(C) && w());
          },
          {
            root: C,
            threshold: 0
          }
        ), d.value.observe(c.value);
        return;
      }
      d.value?.disconnect(), d.value = null;
    }
    function $(b) {
      if (!a.serverside) {
        r("search", b);
        return;
      }
      b !== null && (p.value = !0, clearTimeout(u.value), u.value = setTimeout(() => {
        f.value && r("search", b), p.value = !1;
      }, 500));
    }
    return t({
      reset: h,
      select: l,
      scrollToBottom: w
    }), (b, C) => (v(), Y(Wv, Be({
      id: b.id,
      ref_key: "select",
      ref: l,
      "input-value": s.value,
      "onUpdate:inputValue": C[1] || (C[1] = (A) => s.value = A)
    }, i.value, {
      behavior: "focus",
      "hide-no-items-label": e.loading || p.value,
      items: p.value ? [] : m.value,
      "onUpdate:inputValue": C[2] || (C[2] = (A) => $(A)),
      "onUpdate:focus": C[3] || (C[3] = (A) => A && r("search", "")),
      "onUpdate:isOpen": C[4] || (C[4] = (A) => _(A)),
      "onUpdate:modelValue": C[5] || (C[5] = (A) => n.value = A)
    }), {
      inline: O(() => [
        ie(b.$slots, "inline", {}, void 0, !0)
      ]),
      option: O(({ option: A, selected: K }) => [
        ie(b.$slots, "option", {
          selected: K,
          option: A
        }, void 0, !0)
      ]),
      "append-list": O(() => [
        N("div", {
          ref_key: "intersect",
          ref: c,
          class: "intersect"
        }, [
          e.loading || p.value ? (v(), Y(ba, {
            key: 0,
            class: "search-loader",
            onClick: C[0] || (C[0] = Ke(() => {
            }, ["prevent"]))
          })) : L("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
}, Bi = /* @__PURE__ */ he(Zv, [["__scopeId", "data-v-d9041eb6"]]);
let To = class {
  constructor(t = {}) {
    this.code = t.code, this.overwrites = {
      title: t.overwrites?.title ?? null,
      description: t.overwrites?.description ?? null,
      hide: t.overwrites?.hide ?? !1,
      selected: t.overwrites?.selected ?? null,
      value: t.overwrites?.value ?? null,
      options: Array.isArray(t.overwrites?.options) ? t.overwrites.options.map((o) => ({ ...o })) : []
    };
  }
};
const Gv = { class: "actions" }, Jv = {
  __name: "PEditorDrawer",
  props: /* @__PURE__ */ pt({
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
    const t = e, o = Qe(e, "modelValue"), a = Qe(e, "step"), r = Qe(e, "overwrites"), i = /* @__PURE__ */ It(new To()), n = Bt("editor-form");
    function l(M = []) {
      return M.map((G) => ({
        ...G,
        overwrites: G.overwrites ? { ...G.overwrites } : {}
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
    function c() {
      if (!a.value)
        return new To();
      const M = (r.value?.overwrites?.steps ?? []).find((Q) => Q.code === a.value.code), G = M ? s(M) : null;
      if (G)
        return new To(G);
      const P = a.value.options?.map((Q) => ({
        code: Q.code,
        overwrites: {}
      })) ?? [];
      return new To({
        code: a.value.code,
        overwrites: {
          options: P
        }
      });
    }
    function d(M) {
      const G = r.value && typeof r.value == "object" ? r.value : {}, P = Array.isArray(G.overwrites?.steps) ? G.overwrites.steps.map((le) => s(le)) : [], Q = s({
        code: M.code ?? a.value?.code,
        overwrites: M.overwrites
      }), de = P.findIndex((le) => le.code === Q.code);
      de !== -1 ? P.splice(de, 1, Q) : P.push(Q), r.value = {
        code: G.code ?? t.productCode ?? null,
        overwrites: {
          ...G.overwrites,
          steps: P
        }
      }, i.value = new To(Q);
    }
    function u(M) {
      const G = new To({
        code: i.value.code ?? a.value?.code,
        overwrites: {
          ...i.value.overwrites,
          options: l(i.value.overwrites?.options ?? [])
        }
      });
      M(G), d(G);
    }
    ue(
      [() => a.value, () => r.value],
      () => {
        i.value = c();
      },
      { immediate: !0, deep: !0 }
    );
    function f(M, G) {
      u((P) => {
        P.overwrites[M] = G;
      });
    }
    function p(M, G) {
      u((P) => {
        const Q = Array.isArray(P.overwrites.options) ? P.overwrites.options : [];
        let de = !1;
        if (P.overwrites.options = Q.map((le) => {
          if (le.code !== M)
            return le;
          de = !0;
          const We = { ...le.overwrites ?? {} };
          return G(We), {
            ...le,
            overwrites: We
          };
        }), !de) {
          const le = {};
          G(le), P.overwrites.options = [
            ...P.overwrites.options,
            {
              code: M,
              overwrites: le
            }
          ];
        }
      });
    }
    function h(M, G, P) {
      p(M, (Q) => {
        Q[G] = P;
      });
    }
    function m(M) {
      if (M == null || M === "")
        return null;
      const G = typeof M == "number" ? M : Number(M);
      return Number.isFinite(G) ? G : null;
    }
    function w(M, G) {
      const P = m(G);
      p(M, (Q) => {
        if (P === null) {
          delete Q.value;
          return;
        }
        Q.value = P;
      });
    }
    function x(M, G) {
      return i.value.overwrites?.options?.find((P) => P.code === M)?.overwrites?.[G] ?? null;
    }
    const _ = /* @__PURE__ */ F([]), $ = I({
      get: () => ({
        width: x("width", "value"),
        height: x("height", "value")
      }),
      set: (M) => {
        w("width", M.width), w("height", M.height);
      }
    }), b = I({
      get: () => x("amount", "value") ?? 1,
      set: (M) => {
        u((G) => {
          G.overwrites.options = G.overwrites.options.map((P) => P.code === "amount" ? {
            ...P,
            overwrites: {
              ...P.overwrites ?? {},
              value: M
            }
          } : P);
        });
      }
    }), C = I(() => {
      const M = a.value?.options?.find((le) => le.code === "width"), G = a.value?.options?.find((le) => le.code === "height"), P = M && M.reversible && G && G.reversible, Q = M?.min, de = G?.min;
      return P ? Math.min(Q, de) : { width: Q, height: de };
    }), A = I(() => {
      const M = a.value?.options?.find((le) => le.code === "width"), G = a.value?.options?.find((le) => le.code === "height"), P = M && M.reversible && G && G.reversible, Q = M?.max, de = G?.max;
      return P ? Math.max(Q, de) : { width: Q, height: de };
    }), K = I(() => ({
      width: {
        minValue: He.withMessage(
          B("step.min_value", {
            minValue: typeof C.value == "number" ? C.value : C.value.width
          }),
          Ja(typeof C.value == "number" ? C.value : C.value.width)
        ),
        maxValue: He.withMessage(
          B("step.max_value", {
            maxValue: typeof A.value == "number" ? A.value : A.value.width
          }),
          Ya(typeof A.value == "number" ? A.value : A.value.width)
        )
      },
      height: {
        minValue: He.withMessage(
          B("step.min_value", {
            minValue: typeof C.value == "number" ? C.value : C.value.height
          }),
          Ja(typeof C.value == "number" ? C.value : C.value.height)
        ),
        maxValue: He.withMessage(
          B("step.max_value", {
            maxValue: typeof A.value == "number" ? A.value : A.value.height
          }),
          Ya(typeof A.value == "number" ? A.value : A.value.height)
        )
      }
    })), Z = lo(K, $), j = I(() => a.value?.options?.some((M) => ["width", "height", "amount"].includes(M.code))), T = I(
      () => a.value.options?.find((M) => M.code === i.value.overwrites.selected)
    );
    function D() {
      i.value = c(), d(i.value), Z.value.$reset();
    }
    async function z() {
      await n.value.validate() && (o.value = !1);
    }
    return (M, G) => (v(), Y(rv, {
      modelValue: o.value,
      "onUpdate:modelValue": G[8] || (G[8] = (P) => o.value = P),
      position: "right",
      title: y(B)("editor.editing_step", { step: a.value?.title }),
      persistent: y(Z).$errors.length > 0
    }, {
      default: O(() => [
        y(Z).$errors.length ? (v(), Y(pa, {
          key: 0,
          title: y(B)("editor.editor_alert.title"),
          description: y(B)("editor.editor_alert.description"),
          type: "error"
        }, null, 8, ["title", "description"])) : L("", !0),
        U(Ws, { ref: "editor-form" }, {
          default: O(() => [
            U(Un, null, {
              default: O(() => [
                U(lt, null, {
                  title: O(() => [
                    ae(V(y(B)("editor.hide_step.title")), 1)
                  ]),
                  subtitle: O(() => [
                    ae(V(y(B)("editor.hide_step.description")), 1)
                  ]),
                  default: O(() => [
                    U(Rn, {
                      "model-value": !!i.value.overwrites.hide,
                      "onUpdate:modelValue": G[0] || (G[0] = (P) => f("hide", P))
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                j.value ? L("", !0) : (v(), S(be, { key: 0 }, [
                  U(lt, null, {
                    title: O(() => [
                      ae(V(y(B)("editor.default_option.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(V(y(B)("editor.default_option.description")), 1)
                    ]),
                    default: O(() => [
                      U(Bi, {
                        id: "default-value-combo",
                        "model-value": i.value.overwrites.selected,
                        items: a.value.options,
                        "item-text": "title",
                        "item-value": "code",
                        placeholder: y(B)("editor.default_option.label"),
                        required: i.value.overwrites.hide,
                        "onUpdate:modelValue": G[1] || (G[1] = (P) => f("selected", P))
                      }, null, 8, ["model-value", "items", "placeholder", "required"])
                    ]),
                    _: 1
                  }),
                  T.value?.amount ? (v(), Y(lt, { key: 0 }, {
                    title: O(() => [
                      ae(V(y(B)("editor.default_option_value.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(V(y(B)("editor.default_option_value.description")), 1)
                    ]),
                    default: O(() => [
                      U(vt, {
                        id: "default-value-input",
                        "model-value": i.value.overwrites.value,
                        placeholder: y(B)("editor.default_option_value.label"),
                        required: i.value.overwrites.hide,
                        inline: T.value?.customInput?.unit,
                        min: T.value?.customInput?.min,
                        max: T.value?.customInput?.max,
                        rules: [
                          {
                            validator: (P) => {
                              if (P === "" || P === null || P === void 0)
                                return !0;
                              const Q = T.value?.customInput?.min ?? 0;
                              return Number(P) >= Q;
                            },
                            message: y(B)("step.min_value", {
                              minValue: T.value?.customInput?.min ?? 0
                            })
                          },
                          {
                            validator: (P) => {
                              if (P === "" || P === null || P === void 0)
                                return !0;
                              const Q = T.value?.customInput?.max ?? 1 / 0;
                              return Number(P) <= Q;
                            },
                            message: y(B)("step.max_value", {
                              maxValue: T.value?.customInput?.max ?? 1 / 0
                            })
                          }
                        ],
                        "onUpdate:modelValue": G[2] || (G[2] = (P) => f("value", Number(P)))
                      }, null, 8, ["model-value", "placeholder", "required", "inline", "min", "max", "rules"])
                    ]),
                    _: 1
                  })) : L("", !0),
                  U(lt, null, {
                    title: O(() => [
                      ae(V(y(B)("editor.edit_title.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(V(y(B)("editor.edit_title.description")), 1)
                    ]),
                    default: O(() => [
                      U(vt, {
                        id: `step-title-input-${a.value.code}`,
                        "model-value": i.value.overwrites.title,
                        type: "text",
                        placeholder: y(B)("editor.edit_title.placeholder"),
                        "onUpdate:modelValue": G[3] || (G[3] = (P) => f("title", P))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  }),
                  U(lt, null, {
                    title: O(() => [
                      ae(V(y(B)("editor.edit_description.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(V(y(B)("editor.edit_description.description")), 1)
                    ]),
                    default: O(() => [
                      U(vt, {
                        id: `step-description-input-${a.value.code}`,
                        "model-value": i.value.overwrites.description,
                        type: "text",
                        placeholder: y(B)("editor.edit_description.placeholder"),
                        "onUpdate:modelValue": G[4] || (G[4] = (P) => f("description", P))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  })
                ], 64)),
                U(St, {
                  level: "h3",
                  class: "sub-heading"
                }, {
                  default: O(() => [
                    ae(V(y(B)("editor.edit_options")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            U(Ss, {
              modelValue: _.value,
              "onUpdate:modelValue": G[6] || (G[6] = (P) => _.value = P),
              items: a.value.options?.map((P) => ({
                ...P,
                title: P.title || y(B)(`editor.edit_option.${P.code}`)
              })),
              title: "title"
            }, {
              content: O((P) => [
                U(Un, null, {
                  default: O(() => [
                    ["height", "width", "amount"].includes(P.code) ? (v(), Y(lt, { key: 0 }, {
                      title: O(() => [
                        ae(V(y(B)(`editor.${P.code}.title`)), 1)
                      ]),
                      default: O(() => [
                        P.code === "width" || P.code === "height" ? (v(), Y(vt, {
                          key: 0,
                          id: `measurement-input-${P.code}`,
                          "model-value": $.value[P.code] ?? "",
                          type: "number",
                          "aria-label": P.code,
                          class: "measurement-input",
                          inline: P.unit,
                          min: P.min,
                          max: P.max,
                          placeholder: "",
                          error: y(Z)[P.code].$errors ? y(Z)[P.code].$errors[0]?.$message : "",
                          onBlur: (Q) => y(Z)[P.code].$touch(Q),
                          "onUpdate:modelValue": (Q) => w(P.code, Q),
                          onKeyup: dt((Q) => y(Z)[P.code].$touch(Q), ["enter"])
                        }, null, 8, ["id", "model-value", "aria-label", "inline", "min", "max", "error", "onBlur", "onUpdate:modelValue", "onKeyup"])) : P.code === "amount" ? (v(), Y(Ei, {
                          key: 1,
                          modelValue: b.value,
                          "onUpdate:modelValue": G[5] || (G[5] = (Q) => b.value = Q),
                          min: P.min,
                          max: P.max || void 0
                        }, null, 8, ["modelValue", "min", "max"])) : L("", !0)
                      ]),
                      _: 2
                    }, 1024)) : (v(), S(be, { key: 1 }, [
                      U(lt, null, {
                        title: O(() => [
                          ae(V(y(B)("editor.hide_option.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(V(y(B)("editor.hide_option.description")), 1)
                        ]),
                        default: O(() => [
                          U(Rn, {
                            "model-value": !!x(P.code, "hide"),
                            "onUpdate:modelValue": (Q) => h(P.code, "hide", Q)
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      U(lt, null, {
                        title: O(() => [
                          ae(V(y(B)("editor.edit_option_title.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(V(y(B)("editor.edit_option_title.description")), 1)
                        ]),
                        default: O(() => [
                          U(vt, {
                            id: `option-title-input-${P.code}`,
                            "model-value": x(P.code, "title") ?? "",
                            type: "text",
                            placeholder: y(B)("editor.edit_option_title.placeholder"),
                            "onUpdate:modelValue": (Q) => h(P.code, "title", Q)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      U(lt, null, {
                        title: O(() => [
                          ae(V(y(B)("editor.edit_option_description.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(V(y(B)("editor.edit_option_description.description")), 1)
                        ]),
                        default: O(() => [
                          U(vt, {
                            id: `option-description-input-${P.code}`,
                            "model-value": x(P.code, "description") ?? "",
                            type: "text",
                            placeholder: y(B)("editor.edit_description.placeholder"),
                            "onUpdate:modelValue": (Q) => h(P.code, "description", Q)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      U(lt, null, {
                        title: O(() => [
                          ae(V(y(B)("editor.edit_image.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(V(y(B)("editor.edit_image.description")), 1)
                        ]),
                        default: O(() => [
                          U(vt, {
                            id: `option-image-input-${P.code}`,
                            "model-value": x(P.code, "image") ?? "",
                            type: "text",
                            placeholder: y(B)("editor.edit_image.placeholder"),
                            "onUpdate:modelValue": (Q) => h(P.code, "image", Q)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      U(lt, null, {
                        title: O(() => [
                          ae(V(y(B)("editor.edit_sequence.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(V(y(B)("editor.edit_sequence.description")), 1)
                        ]),
                        default: O(() => [
                          U(vt, {
                            id: `option-sequence-input-${P.code}`,
                            "model-value": x(P.code, "sequence") ?? "",
                            type: "number",
                            placeholder: y(B)("editor.edit_sequence.placeholder"),
                            rules: [
                              {
                                validator: (Q) => Q >= 0,
                                message: y(B)("editor.min_sequence", {
                                  min: 0
                                })
                              },
                              {
                                validator: (Q) => Q <= a.value.options.length,
                                message: y(B)("editor.max_sequence", {
                                  max: a.value.options.length
                                })
                              },
                              {
                                message: y(B)("editor.number_should_not_exist_twice"),
                                validator: (Q) => a.value.options.map(
                                  (de) => x(de.code, "sequence")
                                ).filter((de) => de === Q).length <= 1
                              }
                            ],
                            "onUpdate:modelValue": (Q) => h(P.code, "sequence", Q)
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
        N("div", Gv, [
          U(ze, {
            onClick: G[7] || (G[7] = (P) => z())
          }, {
            default: O(() => [
              ae(V(y(B)("editor.apply")), 1)
            ]),
            _: 1
          }),
          U(ze, {
            variant: "secondary",
            onClick: D
          }, {
            default: O(() => [
              ae(V(y(B)("editor.reset")), 1)
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "persistent"]));
  }
}, Yv = /* @__PURE__ */ he(Jv, [["__scopeId", "data-v-857dd264"]]), Xv = {
  class: "configurator",
  "data-testid": "product-configurator",
  part: "configurator"
}, Qv = {
  __name: "PConfigurator",
  props: /* @__PURE__ */ pt({
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
    canOrder: Boolean,
    disableFirstStepAutofocus: Boolean
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
  emits: /* @__PURE__ */ pt(["update:modelValue", "recalculate", "configuration:started"], ["update:overwrites", "update:accordionState", "update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, a = t, r = Qe(e, "overwrites"), i = Qe(e, "accordionState"), n = Qe(e, "modelValue"), l = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(!1), c = /* @__PURE__ */ F({});
    function d(p, h) {
      i.value[h] = p, i.value.forEach((m, w) => {
        w !== h && (i.value[w] = !1);
      });
    }
    function u(p, h) {
      const m = { ...n.value };
      m.options[h] = p, a("update:modelValue", m);
    }
    function f(p) {
      c.value = p, s.value = !0;
    }
    return (p, h) => (v(), S("div", Xv, [
      U(Ss, {
        modelValue: i.value,
        "onUpdate:modelValue": h[5] || (h[5] = (m) => i.value = m),
        items: e.template
      }, {
        default: O(({ item: m, index: w, open: x }) => [
          m.type === "simple" ? (v(), Y(rm, Be({
            key: 0,
            modelValue: n.value.options[w],
            "onUpdate:modelValue": (_) => n.value.options[w] = _,
            overwrites: r.value,
            "onUpdate:overwrites": h[0] || (h[0] = (_) => r.value = _)
          }, { ...m }, {
            "aria-title": m.title.toLowerCase().replaceAll(" ", "-"),
            "button-start-text": e.buttonStartText,
            editor: e.editor,
            "has-overwrites": r.value?.overwrites?.steps?.some((_) => _.code === m.code),
            "is-hidden": r.value?.overwrites?.steps?.some((_) => _.code === m.code && _.overwrites.hide),
            "can-order": e.canOrder,
            "disable-first-step-autofocus": e.disableFirstStepAutofocus,
            exportparts: "step step-title step-subtitle",
            "onEdit:step": (_) => f(m),
            "onUpdate:modelValue": (_) => u(_, w),
            "onUpdate:focus": h[1] || (h[1] = (_) => l.value = _),
            onRecalculate: h[2] || (h[2] = (_) => a("recalculate", _)),
            "onConfiguration:started": h[3] || (h[3] = (_) => a("configuration:started"))
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "aria-title", "button-start-text", "editor", "has-overwrites", "is-hidden", "can-order", "disable-first-step-autofocus", "onEdit:step"])) : m.type === "options" || m.type === "options-multiple" ? (v(), Y(Um, Be({
            key: 1,
            modelValue: n.value.options[w],
            "onUpdate:modelValue": (_) => n.value.options[w] = _,
            overwrites: r.value,
            "onUpdate:overwrites": h[4] || (h[4] = (_) => r.value = _)
          }, { ...m }, {
            open: x,
            multiple: m.type === "options-multiple",
            "aria-title": m.title.toLowerCase().replaceAll(" ", "-"),
            disabled: l.value || e.loading,
            editor: e.editor,
            "has-overwrites": r.value?.overwrites?.steps?.some((_) => _.code === m.code),
            "is-hidden": r.value?.overwrites?.steps?.some((_) => _.code === m.code && _.overwrites.hide),
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onEdit:step": (_) => f(m),
            "onUpdate:modelValue": u,
            "onUpdate:accordionState": (_) => d(_, w)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "open", "multiple", "aria-title", "disabled", "editor", "has-overwrites", "is-hidden", "onEdit:step", "onUpdate:accordionState"])) : L("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      e.deliveryOptions.length && !e.hideDeliverySection ? (v(), Y(Qm, {
        key: 0,
        items: e.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : L("", !0),
      e.loading ? (v(), Y(ba, { key: 1 })) : L("", !0),
      e.editor ? (v(), Y(Yv, {
        key: 2,
        modelValue: s.value,
        "onUpdate:modelValue": h[6] || (h[6] = (m) => s.value = m),
        step: c.value,
        "onUpdate:step": h[7] || (h[7] = (m) => c.value = m),
        overwrites: r.value,
        "onUpdate:overwrites": h[8] || (h[8] = (m) => r.value = m),
        "product-code": o.productCode
      }, null, 8, ["modelValue", "step", "overwrites", "product-code"])) : L("", !0)
    ]));
  }
}, qn = /* @__PURE__ */ he(Qv, [["__scopeId", "data-v-0c2ac0e3"]]);
class eg {
  /**
   * Fetches data from the specified URL using the provided options.
   * @param {object} options - The options to be passed to the fetch function.
   * @param {string} proxy - The URL of the proxy.
   * @param {string} productId - The ID of an internal customer product.
   * @throws {Error} If there is an error while fetching the data.
   * @return {Promise} A promise that resolves to the fetched data in JSON format.
   */
  async fetchData(t, o, a) {
    let r = null;
    if (!o)
      throw new Error("Proxy URL not set, add it in the init method");
    const i = new URLSearchParams({});
    t.method === "GET" && (i.set("url", JSON.parse(t.body).url), delete t.body), a && i.set("product_id", a);
    const n = {
      method: t.method,
      ...t,
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      r = await fetch(`${o}?${i}`, n);
    } catch (l) {
      throw new Error(
        `Failed to fetch data from ${t.body ? JSON.parse(t.body).url : i.get("url")}, ${l}`
      );
    }
    if (!r.ok)
      throw new Error(
        `Failed to fetch data from ${t.body ? JSON.parse(t.body).url : i.get("url")}`
      );
    return await r.json();
  }
}
class Ys extends eg {
  constructor({ proxy: t, apiVersion: o, productId: a }) {
    super(), this.proxy = t, this.apiVersion = o, this.productId = a;
  }
  /**
   * Asynchronously configures the product by fetching data from the 'products/configure' endpoint.
   *
   * @return {Promise<array>} The response from the API.
   */
  async configureProduct(t) {
    const o = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/configure`,
        data: {
          ...t
        }
      })
    };
    let a = {};
    try {
      a = await this.fetchData(o, this.proxy, this.productId);
    } catch (r) {
      throw new Error(r);
    }
    return a;
  }
  /**
   * Retrieves the price using the specified configuration options.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getPrice(t) {
    const o = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/price`,
        data: {
          ...t
        }
      })
    };
    return await this.fetchData(o, this.proxy, this.productId);
  }
  /**
   * Retrieve all products to be configured in the configurator.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getProducts(t) {
    const o = JSON.parse(sessionStorage.getItem("products"));
    if (o?.length && t)
      return o;
    const a = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products?per_page=1000`
      })
    }, r = await this.fetchData(a, this.proxy, this.productId);
    return t && sessionStorage.setItem("products", JSON.stringify(r.data)), r.data;
  }
  async getProduct(t) {
    const o = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/product/${t}`
      })
    };
    return await this.fetchData(o, this.proxy, this.productId);
  }
  async storeConfiguration(t) {
    const o = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/apiproducts/product`,
        data: {
          ...t
        }
      })
    };
    return await this.fetchData(o, this.proxy, this.productId);
  }
  async updateConfiguration(t) {
    const o = {
      method: "PUT",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/apiproducts/product/${t.customer_code}`,
        data: {
          ...t
        }
      })
    };
    return await this.fetchData(o, this.proxy);
  }
  async getUploaderSession(t) {
    const o = {
      method: "POST",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/uploader/create`,
        data: t
      })
    };
    return (await this.fetchData(o, this.proxy, this.productId)).uploaders;
  }
}
function Sa(e) {
  return Array.isArray(e) ? e.length > 0 : e != null && e !== "";
}
function Hn(e) {
  return typeof e == "string" || e instanceof String;
}
function Dr(e, t = null, o = null) {
  let a = e;
  return typeof a != "number" && (a = parseFloat(e.replace(",", "."))), new Intl.NumberFormat(t || Dt.locale, {
    style: "currency",
    currency: o || Dt.currency
  }).format(a);
}
class Kn {
  constructor({ code: t, options: o }) {
    this.code = t, this.options = o || [];
  }
}
class Wn {
  constructor({ products: t, language: o }) {
    this.products = t, this.language = o;
  }
}
class Zn {
  constructor({
    companyName: t,
    firstName: o,
    lastName: a,
    street: r,
    houseNumber: i,
    addition: n,
    postalCode: l,
    city: s,
    country: c,
    phone: d,
    email: u
  }) {
    this.companyName = t, this.firstName = o, this.lastName = a, this.street = r, this.houseNumber = i, this.addition = n, this.postalCode = l, this.city = s, this.country = c, this.phone = d, this.email = u;
  }
}
class tg {
  constructor({ address: t, products: o }) {
    this.address = t, this.products = o;
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
function og(e, t) {
  return t.split(".").reduce((o, a) => o[a] ? o[a] : o, e);
}
const ag = {
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
}, Xs = /* @__PURE__ */ Pe({ language: "nl" });
function rg(e) {
  return og(ag[Xs.language], e) || e;
}
function ig(e, t = {}) {
  return e.replace(/{(\w+)}/g, (o, a) => t[a] || `{${a}}`);
}
function ng(e, t) {
  return e.replace(/{(\d+)}/g, (o, a) => t[a] || `{${a}}`);
}
function ot(e, t = null) {
  const o = rg(e);
  return Array.isArray(t) ? ng(o) : ig(o, t);
}
function lg(e) {
  Xs.language = e;
}
function Qs(e, t) {
  return t !== -1 ? e.slice(0, t + 1) : e.filter((o) => o.code !== void 0);
}
function sg(e, t) {
  const o = new Date(e), a = /* @__PURE__ */ new Date(), r = new Date(a);
  return r.setDate(a.getDate() + 1), o.toDateString() === r.toDateString() ? ot("tomorrow") : o.toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    weekday: "long"
  });
}
function dg(e, t) {
  return new Date(e).toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function cg(e, t) {
  return e.length === 0 ? !0 : t.some((a) => a.code === "no-option") ? !1 : !t?.includes(void 0);
}
function ug(e, t, o, a) {
  let r = "";
  o === "accessories-cross-sell" ? r = "unit" : (o === "material" || o === "materialType") && (r = "meter");
  const i = e.map((n) => {
    const l = a?.find((c) => c.code === n.code)?.overwrites;
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
      pricePer: r,
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
  }).filter((n) => !a?.find((s) => s.code === n.code)?.overwrites.hide).sort((n, l) => n.sequence - l.sequence);
  return o === "accessories-cross-sell" && !i.some((n) => n.noOption) && i.unshift({
    code: "no-option",
    noOption: !0,
    noOptionText: ot("no_accessoires")
  }), i;
}
function Gn(e) {
  const t = e.find((a) => a.code === "measurement-amount");
  if (!t?.options?.length)
    return 0;
  const o = t.options.filter(
    (a) => ["width", "height", "amount"].includes(a.code)
  ).length;
  return Math.max(o - 1, 0);
}
function fg(e, t, o, a, r, i, n) {
  let l = [...t];
  if (!e.some((p) => p.code === "measurement-amount") && t.some((p) => p.children.some((h) => ["width", "height"].includes(h.code)))) {
    const p = t.filter((m) => ["size", "amount"].includes(m.code));
    l = t.filter((m) => !["size", "amount"].includes(m.code));
    const h = {
      code: "measurement-amount",
      name: ot("measurement_and_amount"),
      children: p.flatMap((m) => m.children),
      available: p.every((m) => m.available)
    };
    l.unshift(h);
  }
  const s = l.map((p) => {
    let h = p.code === "measurement-amount" || p.code === "amount" ? "simple" : "options";
    const m = r?.find((_) => _.code === p.code)?.overwrites, w = ug(p.children, a, p.code, m?.options);
    let { code: x } = p;
    return x === "accessories-cross-sell" && (x = "accessories", h = "options-multiple"), {
      code: x,
      title: m && m.title ? m.title : p.name,
      type: h,
      options: w,
      hidden: m && m.hide && !n
    };
  }), c = e.some((p) => p.code === "measurement-amount") || i, d = Math.max(Gn(e), Gn(s)), u = o !== -1 && c ? Math.max(-1, o - d) : o;
  return [...Qs(e, u), ...s];
}
function ed(e) {
  let t = 1 / 0, o;
  return e.forEach((a) => {
    const r = a.prices.purchase_rush_surcharge;
    r < t && (t = r, o = a);
  }), o;
}
function td(e) {
  let t = null, o = 1 / 0;
  return e.forEach((a) => {
    const r = ed(a.deliveries), i = r.prices.purchase_rush_surcharge;
    i < o && (o = i, t = r);
  }), t;
}
function pg(e, t) {
  const o = td(e);
  let a = 0;
  return e.map((r, i) => {
    let n;
    const l = ed(r.deliveries);
    return i === 0 && (n = { text: ot("fastest"), color: "red" }), o && l.shipping_method_api_code === o.shipping_method_api_code && a === 0 && (n || (n = { text: ot("cheapest"), color: "green" }), a += 1), {
      date: dg(r.delivery_date, t),
      day: sg(r.delivery_date, t),
      cost: l.prices.purchase_rush_surcharge,
      label: n
    };
  });
}
function hg(e, t) {
  const a = e[0][`products_${t}`].toString(), r = td(e), i = r.prices.purchase_shipping_price, n = r.prices.purchase_packaging_price;
  return {
    price: a,
    shipping: i,
    packaging: n,
    fullPrice: {
      price: e[0],
      shipping: r
    }
  };
}
function od(e) {
  return e.includes("Can not find unique id for option") ? ot("errors.invalid_or_duplicate") : e.includes("Restrictions are not met") ? ot("errors.restrictions_not_met") : e === "Validation Failed" ? ot("errors.invalid") : e.includes("Can not build valid path for tree") ? ot("errors.invalidConfig") : ot("errors.general");
}
class mg {
  constructor({ proxy: t, version: o }) {
    this.initialized = !1, this.proxy = t, this.version = o || "", this.repository = new Ys({ proxy: t }), this.product = new Kn({}), this.productInfo = {}, this.productConfig = new Wn({}), this.address = new Zn({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null, this.hideDeliverySection = !1, this.timeOut = null, this.isEditor = !1, this.hasMeasurementOverwrites = null, this.isRecalculating = !1;
  }
  /**
   * Set the code of the product and get the first step for the product.
   *
   * @param {string} code - The code of the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  async setProduct(t, o = !1) {
    return this.product.code = t, o && (this.loading = !0, this.productInfo = await this.repository.getProduct(t), this.loading = !1), this.productConfig.products = [this.product], this.deliveryOptions = [], this.hasMeasurementOverwrites = this.overwrites?.find((a) => this.product.code === a.code)?.overwrites?.steps?.find((a) => a.code === "measurement-amount")?.overwrites?.options?.some(
      (a) => (a.code === "width" || a.code === "height") && Sa(a.overwrites?.value)
    ), this;
  }
  /**
   * Sets the price type of the product.
   *
   * @param {string} type - the type of price to be set, either purchase_price, sales_price or base_price
   * @param {boolean} includeVat - whether to include vat in the price
   */
  setPriceType(t, o = !1) {
    return this.priceType = o ? `${t}_incl_vat` : t, this;
  }
  /**
   * Sets the options for the product.
   *
   * @param {Product} product - The product with options to set for the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  setOption(t, o = !1) {
    let a = !1, r = o;
    this.lastChangedIndex = -1, t.options.forEach((s, c) => {
      Array.isArray(s) && s.length === 0 && (this.lastChangedIndex = c, a = !0);
    });
    const i = t.options.flat().map((s) => ({
      ...s,
      value: typeof s.value == "number" && !Number.isInteger(s.value) ? s.value.toFixed(1) : s.value
    }));
    if (!r && this.canOrder && this.product.options.length && i.length) {
      const s = this.product.options.findIndex((d) => d.code === "amount"), c = i.findIndex((d) => d.code === "amount");
      s !== -1 && c !== -1 && this.product.options[s]?.value !== i[c]?.value && i.length === this.product.options.length && i.every((f, p) => {
        const h = this.product.options[p];
        return p === s ? h?.code === f.code : h?.code === f.code && h?.value === f.value;
      }) && (r = !0);
    }
    if (this.isRecalculating = r, i.length > 0 && !a) {
      const s = i.length === this.product.options.length && i.every(
        (u, f) => u.code === this.product.options[f]?.code && u.value === this.product.options[f]?.value
      ), c = i.some((u) => u.code === "amount"), d = i.find((u) => u.code === "amount")?.value === this.product.options.find((u) => u.code === "amount")?.value;
      if (s && this.options.length > 0 || c && d && i.length === 1)
        this.lastChangedIndex = i.findIndex((u) => u.code === "amount");
      else
        for (let u = this.product.options.length - 1; u >= 0; u -= 1)
          if (this.product.options[u] && i[u] && (this.product.options[u].value && this.product.options[u].value !== i[u].value || this.product.options[u].code && this.product.options[u].code !== i[u].code)) {
            this.product.options[u].code === "width" ? this.lastChangedIndex = u + 2 : this.product.options[u].code === "height" ? this.lastChangedIndex = u + 1 : this.lastChangedIndex = u;
            break;
          }
    }
    if (r)
      this.product.options = i.filter((s) => s.code !== void 0);
    else {
      const s = this.product.options[this.lastChangedIndex]?.code === "amount" && this.hasMeasurementOverwrites, c = ["width", "height", "amount"].filter(
        (f) => i.some((p) => p.code === f)
      ).length, d = Math.max(c - 1, 0), u = s ? Math.max(-1, this.lastChangedIndex - d) : this.lastChangedIndex;
      this.product.options = Qs(i, u);
    }
    if (this.product.options.some((s) => s.code === "no-option")) {
      this.setStatuses(!0), this.setOpenState(!0);
      const s = new Event(
        this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished"
      );
      window.dispatchEvent(s);
    }
    function n(s) {
      const c = s[s.length - 1];
      return (c?.code === "height" || c?.code === "amount") && s.length >= 2 ? s : c;
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
    const t = this.isRecalculating === !0;
    if (cg(this.options, this.product.options)) {
      this.loading = !0;
      const o = this.overwrites?.find((a) => a.code === this.product.code)?.overwrites?.steps;
      try {
        if (this.productConfig.language || (this.productConfig.language = this.language), this.hasMeasurementOverwrites) {
          const r = o?.find((i) => i.code === "measurement-amount")?.overwrites?.options?.filter((i) => Sa(i.overwrites?.value));
          r?.length && this.product.options.some(
            (n) => ["width", "height", "amount"].includes(n.code)
          ) && r.forEach((n) => {
            this.product.options.some((s) => s.code === n.code) || this.product.options.push({ code: n.code, value: n.overwrites.value });
          });
        }
        let a = {};
        try {
          this.payload = await this.repository.configureProduct(this.productConfig);
        } catch (r) {
          this.payload = r;
        }
        if (this.payload.status !== "ok" || typeof this.payload == "string")
          throw this.options[this.options.length - 1].status = "attention", this.options[this.options.length - 1].alert = {
            type: "error",
            title: od(this.payload.message ? this.payload.message : this.payload)
          }, new Error(this.payload.message || this.payload);
        if ([a] = this.payload.products, typeof a == "object" && a) {
          this.alert = {}, this.options[this.options.length - 1]?.alert && delete this.options[this.options.length - 1].alert;
          const r = a.available_options;
          if (t || (this.options = fg(
            this.options,
            r,
            this.lastChangedIndex,
            this.priceType,
            o,
            this.hasMeasurementOverwrites,
            this.isEditor
          )), !t && this.overwrites.length > 0 && o && this.options.forEach((i) => {
            o.forEach(async (n) => {
              const l = this.product.options.some((d) => d.code === n.overwrites.selected) === !1 && Sa(n.overwrites?.selected), s = n.overwrites?.options?.filter((d) => d.overwrites?.value) || [];
              this.product.options.forEach((d) => {
                const u = s.findIndex((f) => f.code === d.code);
                u !== -1 && s.splice(u, 1);
              });
              const c = this.getConfig();
              i.code === n.code && (l || s.length) && (l ? (n.overwrites.value ? c.options.push({
                code: n.overwrites.selected,
                value: n.overwrites.value
              }) : c.options.push({ code: n.overwrites.selected }), await (await this.setOption(c)).getNextOption()) : s.length && (this.options.splice(0, 1), s.forEach((d) => {
                c.options.push({
                  code: d.code,
                  value: d.overwrites.value
                });
              }), await (await this.setOption(c)).getNextOption()));
            });
          }), t || (this.setOpenState(), this.setStatuses()), a.can_order) {
            this.canOrder = !0, this.payload.calculation_id && (this.calculationId = this.payload.calculation_id), a.upload === !0 && (this.upload = !0, this.uploaders = a.uploaders);
            const i = new Event(
              this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished"
            );
            window.dispatchEvent(i);
          } else a.can_order === !1 && this.canOrder && (this.canOrder = !1);
          if (a.can_order && Object.keys(this.address).length && this.address.city) {
            const i = await this.getProductPrice();
            this.prices = hg(i, this.priceType), this.deliveryOptions = pg(i, this.language), t || this.setOpenState();
          } else !t && a.can_order && !this.address.city && !this.options.find((i) => i.code === "accessories") && this.setOpenState(!0);
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
    const t = new tg({ address: this.address, products: this.productConfig.products });
    this.loading = !0;
    const o = await this.repository.getPrice(t.getPayload());
    return this.calculationId = o.calculation_id, this.loading = !1, o.prices;
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
    return this.address = new Zn(t), this;
  }
  /**
   * Set the language for the client.
   *
   * @param {string} language - the language to be set
   */
  setLanguage(t) {
    return this.language = t, lg(t), Uu(t), this;
  }
  /**
   * Set the statuses of the options.
   *
   * @param {type} option - the option to set the status for
   * @param {type} index - the index of the option in the options array
   */
  setStatuses(t) {
    const o = this.options.find((r) => r.code === "measurement-amount");
    let a = o && o.options && o.options.filter(
      (r) => r.code === "height" || r.code === "width" || r.code === "amount"
    ).length - 1 || 0;
    this.hasMeasurementOverwrites && (a += 2), t ? this.options.forEach((r) => {
      r.status = "done";
    }) : this.options.forEach((r, i) => {
      this.product.options.length - a > i && (r.status = "done");
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
      const o = t.options.find((l) => l.code === "height"), a = t.options.find((l) => l.code === "width"), r = t.options.find((l) => l.code === "amount"), i = [...t.options];
      o && a && r ? i.splice(0, 3, [a, o, r]) : o && r ? i.splice(0, 2, [o, r]) : a && r && i.splice(0, 2, [a, r]);
      const n = this.options.find((l) => l.code === "accessories");
      if (n) {
        const l = n.options;
        if (l) {
          const s = [];
          let c = null;
          i.forEach((d, u) => {
            d.code && l.some((f) => f.code === d.code) && (c || (c = u), s.push(d));
          }), s.length > 1 && i.splice(c, s.length, s);
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
    return this.product = new Kn({}), this.productConfig = new Wn({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this.productInfo = {}, this;
  }
  /** Set overwrites for certain products, can only be called on init. */
  setOverwrites(t) {
    return this.options.length === 0 ? this.overwrites = t : console.error("Overwrites can only be set on init"), this;
  }
  recalculate(t) {
    if (Sa(t)) {
      const o = this.product.options.find((r) => r.code === "amount"), a = this.product.options.findIndex((r) => r.code === "amount");
      if (o) {
        const r = { ...o, value: t }, i = [...this.product.options].slice(0, a).concat(r).concat(this.product.options.slice(a + 1)), n = { ...this.product, options: i };
        this.setOption(n, !0).getNextOption();
        const l = new Event(
          this.isEditor ? "connectConfiguratorEditor:recalculated" : "connectConfigurator:recalculated"
        );
        window.dispatchEvent(l);
      }
    }
  }
}
class vg extends mg {
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
    language: o = "nl",
    address: a,
    priceType: r,
    includeVat: i = !1,
    overwrites: n = [],
    storeProductsLocally: l = !1,
    callbackUrl: s,
    internalProductId: c,
    hideDeliverySection: d,
    buttonStartText: u
  }) {
    this.initialized = !0, this.proxy = t, this.repository = new Ys({ proxy: t, productId: c }), this.setLanguage(o), this.callbackUrl = s, a && this.setAddress(a), r && this.setPriceType(r, i), n.length && this.setOverwrites(n), l && (this.storeProductsLocally = l), d && (this.hideDeliverySection = d), u && (this.buttonStartText = u);
    const f = new CustomEvent(this.isEditor ? "connectConfiguratorEditor:ready" : "connectConfigurator:ready", {
      detail: this
    });
    return window.dispatchEvent(f), this;
  }
  /** Get all products from endpoint */
  async getProducts() {
    const t = await this.repository.getProducts(this.storeProductsLocally, this.internalProductId);
    this.overwrites.length ? this.products = t.filter((o) => !this.overwrites.some((a) => a.code === o.code && a.overwrites?.hide)) : this.products = t;
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
  storeConfiguration(t, o = null) {
    const a = o || this.productConfig.products[0];
    a.customer_code = t;
    try {
      this.repository.storeConfiguration(a);
    } catch (r) {
      console.error(r);
    }
  }
  /**
   * Updates the stored configuration for the given customer code
   *
   * @param {string} name - The customer code to store the configuration for
   * @param {object} [config] - The configuration to update, defaults to current product configuration
   */
  updateConfiguration(t, o = null) {
    const a = o || this.productConfig.products[0];
    a.customer_code = t;
    try {
      this.repository.updateConfiguration(a);
    } catch (r) {
      console.error(r);
    }
  }
  /**
   * A function to generate a product excerpt based on selected options.
   *
   * @return {Object} The product excerpt including description and options.
   */
  getProductExcerpt() {
    this.prices.fullPrice?.deliveries && delete this.prices.fullPrice.deliveries, this.prices.fullPrice?.products && delete this.prices.fullPrice.products;
    const t = this.product.options.find((i) => i.code === "amount").value, o = this.selectedProduct && this.selectedProduct.translations && this.selectedProduct.translations[this.language] ? this.selectedProduct.translations[this.language]?.title : this.selectedProduct.translations?.nl.title || this.product.code, a = this.product.options.find((i) => i.code === "width")?.value, r = this.product.options.find((i) => i.code === "height")?.value;
    return {
      product: {
        description: `${t}x ${o} ${a}x${r}`,
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
      console.error("No payload provided"), this.updateExternal = !0;
      return;
    }
    const o = t.products?.[0];
    if (!o) {
      console.error("No product found in payload"), this.updateExternal = !0;
      return;
    }
    const { options: a, code: r } = o, i = this, n = [];
    await this.setProduct(r, !0), t.deliveries && Object.keys(t.deliveries[0]?.address).length && this.setAddress(t.deliveries[0]?.address), this.openConfigurator();
    async function l(s) {
      if (!(s >= a.length + 1)) {
        try {
          await i.setOption({
            ...i.product,
            options: [...n]
          }).getNextOption();
        } catch (c) {
          i.options[i.options.length - 1]?.alert || (i.alert = {
            type: "error",
            title: od(c.message ? c.message : c)
          }), i.loading = !1, i.updateExternal = !0;
          return;
        }
        if (a[s]) {
          let c = s + 1;
          if (a[s].code === "width") {
            const d = a.slice(s, s + 3).filter(Boolean);
            n.push(...d), c = s + d.length;
          } else ["width", "height"].includes(a[s].code) || n.push(a[s]);
          await l(c);
        } else
          i.updateExternal = !0;
      }
    }
    a ? await l(0) : (console.error("No options found in payload"), this.updateExternal = !0);
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
    const o = t || this.callbackUrl;
    if (!this.canOrder || !this.calculationId)
      throw new Error("Can not fetch uploader session, no calculation id found");
    try {
      return await this.repository.getUploaderSession({
        callback_url: o,
        calculation_id: this.calculationId
      });
    } catch (a) {
      return console.error(a), a;
    }
  }
  getOverwrites() {
    return this.overwrites;
  }
}
function gg(e, t) {
  return v(), S("svg", {
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
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
const bg = {
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
    const o = e, a = t, r = /* @__PURE__ */ F([]), i = /* @__PURE__ */ F(!1), n = /* @__PURE__ */ F(0), l = /* @__PURE__ */ F(-1), s = /* @__PURE__ */ F(null), c = /* @__PURE__ */ F(null);
    async function d() {
      if (n.value === l.value)
        return;
      i.value = !0, await c.value.scrollToBottom();
      const f = new URLSearchParams(o.additionalParams);
      f.set("page[number]", n.value + 1), s.value && (o.filterKeys.length > 0 ? o.filterKeys.forEach((m) => {
        f.set(`filter[${m}]`, s.value);
      }) : f.set(`filter[${o.itemText}]`, s.value));
      const { data: p, metadata: h } = await (await fetch(`${o.endpoint}?${f}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...o.requestHeaders
        }
      })).json();
      i.value = !1, r.value = [...r.value, ...p], l.value = h.total_pages, n.value = h.page;
    }
    function u(f) {
      s.value !== f && (s.value = f, r.value = [], n.value = 0, l.value = -1, d());
    }
    return (f, p) => (v(), Y(Bi, {
      id: `api-autocomplete-${e.endpoint}`,
      ref_key: "autocomplete",
      ref: c,
      serverside: "",
      loading: i.value,
      "model-value": e.modelValue,
      clearable: !e.required,
      "item-text": e.itemText,
      required: e.required,
      items: r.value,
      label: e.label,
      "onUpdate:modelValue": p[0] || (p[0] = (h) => a("update:modelValue", h)),
      onIntersect: d,
      onSearch: u
    }, {
      inline: O(() => [
        ie(f.$slots, "inline")
      ]),
      option: O(({ option: h, selected: m }) => [
        ie(f.$slots, "option", {
          option: h,
          selected: m
        })
      ]),
      _: 3
    }, 8, ["id", "loading", "model-value", "clearable", "item-text", "required", "items", "label"]));
  }
};
function Gt(e) {
  return Array.isArray ? Array.isArray(e) : id(e) === "[object Array]";
}
function yg(e) {
  if (typeof e == "string")
    return e;
  let t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function wg(e) {
  return e == null ? "" : yg(e);
}
function Pt(e) {
  return typeof e == "string";
}
function ad(e) {
  return typeof e == "number";
}
function xg(e) {
  return e === !0 || e === !1 || kg(e) && id(e) == "[object Boolean]";
}
function rd(e) {
  return typeof e == "object";
}
function kg(e) {
  return rd(e) && e !== null;
}
function st(e) {
  return e != null;
}
function Nr(e) {
  return !e.trim().length;
}
function id(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const _g = "Extended search is not available", $g = "Logical search is not available", Sg = "Incorrect 'index' type", Cg = (e) => `Invalid value for key ${e}`, Ag = (e) => `Pattern length exceeds max of ${e}.`, Eg = (e) => `Missing ${e} property in key`, Tg = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Jn = Object.prototype.hasOwnProperty;
class Og {
  constructor(t) {
    this._keys = [], this._keyMap = {};
    let o = 0;
    t.forEach((a) => {
      let r = nd(a);
      this._keys.push(r), this._keyMap[r.id] = r, o += r.weight;
    }), this._keys.forEach((a) => {
      a.weight /= o;
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
function nd(e) {
  let t = null, o = null, a = null, r = 1, i = null;
  if (Pt(e) || Gt(e))
    a = e, t = Yn(e), o = ii(e);
  else {
    if (!Jn.call(e, "name"))
      throw new Error(Eg("name"));
    const n = e.name;
    if (a = n, Jn.call(e, "weight") && (r = e.weight, r <= 0))
      throw new Error(Tg(n));
    t = Yn(n), o = ii(n), i = e.getFn;
  }
  return { path: t, id: o, weight: r, src: a, getFn: i };
}
function Yn(e) {
  return Gt(e) ? e : e.split(".");
}
function ii(e) {
  return Gt(e) ? e.join(".") : e;
}
function zg(e, t) {
  let o = [], a = !1;
  const r = (i, n, l) => {
    if (st(i))
      if (!n[l])
        o.push(i);
      else {
        let s = n[l];
        const c = i[s];
        if (!st(c))
          return;
        if (l === n.length - 1 && (Pt(c) || ad(c) || xg(c)))
          o.push(wg(c));
        else if (Gt(c)) {
          a = !0;
          for (let d = 0, u = c.length; d < u; d += 1)
            r(c[d], n, l + 1);
        } else n.length && r(c, n, l + 1);
      }
  };
  return r(e, Pt(t) ? t.split(".") : t, 0), a ? o : o[0];
}
const Vg = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, Mg = {
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
}, Bg = {
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
}, Pg = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: zg,
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
var _e = {
  ...Mg,
  ...Vg,
  ...Bg,
  ...Pg
};
const Ig = /[^ ]+/g;
function jg(e = 1, t = 3) {
  const o = /* @__PURE__ */ new Map(), a = Math.pow(10, t);
  return {
    get(r) {
      const i = r.match(Ig).length;
      if (o.has(i))
        return o.get(i);
      const n = 1 / Math.pow(i, 0.5 * e), l = parseFloat(Math.round(n * a) / a);
      return o.set(i, l), l;
    },
    clear() {
      o.clear();
    }
  };
}
let Pi = class {
  constructor({
    getFn: t = _e.getFn,
    fieldNormWeight: o = _e.fieldNormWeight
  } = {}) {
    this.norm = jg(o, 3), this.getFn = t, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    this.keys = t, this._keysMap = {}, t.forEach((o, a) => {
      this._keysMap[o.id] = a;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Pt(this.docs[0]) ? this.docs.forEach((t, o) => {
      this._addString(t, o);
    }) : this.docs.forEach((t, o) => {
      this._addObject(t, o);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(t) {
    const o = this.size();
    Pt(t) ? this._addString(t, o) : this._addObject(t, o);
  }
  // Removes the doc at the specified index of the index
  removeAt(t) {
    this.records.splice(t, 1);
    for (let o = t, a = this.size(); o < a; o += 1)
      this.records[o].i -= 1;
  }
  getValueForItemAtKeyId(t, o) {
    return t[this._keysMap[o]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, o) {
    if (!st(t) || Nr(t))
      return;
    let a = {
      v: t,
      i: o,
      n: this.norm.get(t)
    };
    this.records.push(a);
  }
  _addObject(t, o) {
    let a = { i: o, $: {} };
    this.keys.forEach((r, i) => {
      let n = r.getFn ? r.getFn(t) : this.getFn(t, r.path);
      if (st(n)) {
        if (Gt(n)) {
          let l = [];
          const s = [{ nestedArrIndex: -1, value: n }];
          for (; s.length; ) {
            const { nestedArrIndex: c, value: d } = s.pop();
            if (st(d))
              if (Pt(d) && !Nr(d)) {
                let u = {
                  v: d,
                  i: c,
                  n: this.norm.get(d)
                };
                l.push(u);
              } else Gt(d) && d.forEach((u, f) => {
                s.push({
                  nestedArrIndex: f,
                  value: u
                });
              });
          }
          a.$[i] = l;
        } else if (Pt(n) && !Nr(n)) {
          let l = {
            v: n,
            n: this.norm.get(n)
          };
          a.$[i] = l;
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
};
function ld(e, t, { getFn: o = _e.getFn, fieldNormWeight: a = _e.fieldNormWeight } = {}) {
  const r = new Pi({ getFn: o, fieldNormWeight: a });
  return r.setKeys(e.map(nd)), r.setSources(t), r.create(), r;
}
function Dg(e, { getFn: t = _e.getFn, fieldNormWeight: o = _e.fieldNormWeight } = {}) {
  const { keys: a, records: r } = e, i = new Pi({ getFn: t, fieldNormWeight: o });
  return i.setKeys(a), i.setIndexRecords(r), i;
}
function Ca(e, {
  errors: t = 0,
  currentLocation: o = 0,
  expectedLocation: a = 0,
  distance: r = _e.distance,
  ignoreLocation: i = _e.ignoreLocation
} = {}) {
  const n = t / e.length;
  if (i)
    return n;
  const l = Math.abs(a - o);
  return r ? n + l / r : l ? 1 : n;
}
function Ng(e = [], t = _e.minMatchCharLength) {
  let o = [], a = -1, r = -1, i = 0;
  for (let n = e.length; i < n; i += 1) {
    let l = e[i];
    l && a === -1 ? a = i : !l && a !== -1 && (r = i - 1, r - a + 1 >= t && o.push([a, r]), a = -1);
  }
  return e[i - 1] && i - a >= t && o.push([a, i - 1]), o;
}
const go = 32;
function Fg(e, t, o, {
  location: a = _e.location,
  distance: r = _e.distance,
  threshold: i = _e.threshold,
  findAllMatches: n = _e.findAllMatches,
  minMatchCharLength: l = _e.minMatchCharLength,
  includeMatches: s = _e.includeMatches,
  ignoreLocation: c = _e.ignoreLocation
} = {}) {
  if (t.length > go)
    throw new Error(Ag(go));
  const d = t.length, u = e.length, f = Math.max(0, Math.min(a, u));
  let p = i, h = f;
  const m = l > 1 || s, w = m ? Array(u) : [];
  let x;
  for (; (x = e.indexOf(t, h)) > -1; ) {
    let K = Ca(t, {
      currentLocation: x,
      expectedLocation: f,
      distance: r,
      ignoreLocation: c
    });
    if (p = Math.min(K, p), h = x + d, m) {
      let Z = 0;
      for (; Z < d; )
        w[x + Z] = 1, Z += 1;
    }
  }
  h = -1;
  let _ = [], $ = 1, b = d + u;
  const C = 1 << d - 1;
  for (let K = 0; K < d; K += 1) {
    let Z = 0, j = b;
    for (; Z < j; )
      Ca(t, {
        errors: K,
        currentLocation: f + j,
        expectedLocation: f,
        distance: r,
        ignoreLocation: c
      }) <= p ? Z = j : b = j, j = Math.floor((b - Z) / 2 + Z);
    b = j;
    let T = Math.max(1, f - j + 1), D = n ? u : Math.min(f + j, u) + d, z = Array(D + 2);
    z[D + 1] = (1 << K) - 1;
    for (let M = D; M >= T; M -= 1) {
      let G = M - 1, P = o[e.charAt(G)];
      if (m && (w[G] = +!!P), z[M] = (z[M + 1] << 1 | 1) & P, K && (z[M] |= (_[M + 1] | _[M]) << 1 | 1 | _[M + 1]), z[M] & C && ($ = Ca(t, {
        errors: K,
        currentLocation: G,
        expectedLocation: f,
        distance: r,
        ignoreLocation: c
      }), $ <= p)) {
        if (p = $, h = G, h <= f)
          break;
        T = Math.max(1, 2 * f - h);
      }
    }
    if (Ca(t, {
      errors: K + 1,
      currentLocation: f,
      expectedLocation: f,
      distance: r,
      ignoreLocation: c
    }) > p)
      break;
    _ = z;
  }
  const A = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, $)
  };
  if (m) {
    const K = Ng(w, l);
    K.length ? s && (A.indices = K) : A.isMatch = !1;
  }
  return A;
}
function Lg(e) {
  let t = {};
  for (let o = 0, a = e.length; o < a; o += 1) {
    const r = e.charAt(o);
    t[r] = (t[r] || 0) | 1 << a - o - 1;
  }
  return t;
}
const Xn = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e);
class Rg {
  constructor(t, {
    location: o = _e.location,
    threshold: a = _e.threshold,
    distance: r = _e.distance,
    includeMatches: i = _e.includeMatches,
    findAllMatches: n = _e.findAllMatches,
    minMatchCharLength: l = _e.minMatchCharLength,
    isCaseSensitive: s = _e.isCaseSensitive,
    ignoreDiacritics: c = _e.ignoreDiacritics,
    ignoreLocation: d = _e.ignoreLocation
  } = {}) {
    if (this.options = {
      location: o,
      threshold: a,
      distance: r,
      includeMatches: i,
      findAllMatches: n,
      minMatchCharLength: l,
      isCaseSensitive: s,
      ignoreDiacritics: c,
      ignoreLocation: d
    }, t = s ? t : t.toLowerCase(), t = c ? Xn(t) : t, this.pattern = t, this.chunks = [], !this.pattern.length)
      return;
    const u = (p, h) => {
      this.chunks.push({
        pattern: p,
        alphabet: Lg(p),
        startIndex: h
      });
    }, f = this.pattern.length;
    if (f > go) {
      let p = 0;
      const h = f % go, m = f - h;
      for (; p < m; )
        u(this.pattern.substr(p, go), p), p += go;
      if (h) {
        const w = f - go;
        u(this.pattern.substr(w), w);
      }
    } else
      u(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: o, ignoreDiacritics: a, includeMatches: r } = this.options;
    if (t = o ? t : t.toLowerCase(), t = a ? Xn(t) : t, this.pattern === t) {
      let m = {
        isMatch: !0,
        score: 0
      };
      return r && (m.indices = [[0, t.length - 1]]), m;
    }
    const {
      location: i,
      distance: n,
      threshold: l,
      findAllMatches: s,
      minMatchCharLength: c,
      ignoreLocation: d
    } = this.options;
    let u = [], f = 0, p = !1;
    this.chunks.forEach(({ pattern: m, alphabet: w, startIndex: x }) => {
      const { isMatch: _, score: $, indices: b } = Fg(t, m, w, {
        location: i + x,
        distance: n,
        threshold: l,
        findAllMatches: s,
        minMatchCharLength: c,
        includeMatches: r,
        ignoreLocation: d
      });
      _ && (p = !0), f += $, _ && b && (u = [...u, ...b]);
    });
    let h = {
      isMatch: p,
      score: p ? f / this.chunks.length : 1
    };
    return p && r && (h.indices = u), h;
  }
}
const Qn = [];
function ni(e, t) {
  for (let o = 0, a = Qn.length; o < a; o += 1) {
    let r = Qn[o];
    if (r.condition(e, t))
      return new r(e, t);
  }
  return new Rg(e, t);
}
const li = {
  AND: "$and",
  OR: "$or"
}, si = {
  PATH: "$path",
  PATTERN: "$val"
}, di = (e) => !!(e[li.AND] || e[li.OR]), Ug = (e) => !!e[si.PATH], qg = (e) => !Gt(e) && rd(e) && !di(e), el = (e) => ({
  [li.AND]: Object.keys(e).map((t) => ({
    [t]: e[t]
  }))
});
function Hg(e, t, { auto: o = !0 } = {}) {
  const a = (r) => {
    let i = Object.keys(r);
    const n = Ug(r);
    if (!n && i.length > 1 && !di(r))
      return a(el(r));
    if (qg(r)) {
      const s = n ? r[si.PATH] : i[0], c = n ? r[si.PATTERN] : r[s];
      if (!Pt(c))
        throw new Error(Cg(s));
      const d = {
        keyId: ii(s),
        pattern: c
      };
      return o && (d.searcher = ni(c, t)), d;
    }
    let l = {
      children: [],
      operator: i[0]
    };
    return i.forEach((s) => {
      const c = r[s];
      Gt(c) && c.forEach((d) => {
        l.children.push(a(d));
      });
    }), l;
  };
  return di(e) || (e = el(e)), a(e);
}
function Kg(e, { ignoreFieldNorm: t = _e.ignoreFieldNorm }) {
  e.forEach((o) => {
    let a = 1;
    o.matches.forEach(({ key: r, norm: i, score: n }) => {
      const l = r ? r.weight : null;
      a *= Math.pow(
        n === 0 && l ? Number.EPSILON : n,
        (l || 1) * (t ? 1 : i)
      );
    }), o.score = a;
  });
}
function Wg(e, t) {
  const o = e.matches;
  t.matches = [], st(o) && o.forEach((a) => {
    if (!st(a.indices) || !a.indices.length)
      return;
    const { indices: r, value: i } = a;
    let n = {
      indices: r,
      value: i
    };
    a.key && (n.key = a.key.src), a.idx > -1 && (n.refIndex = a.idx), t.matches.push(n);
  });
}
function Zg(e, t) {
  t.score = e.score;
}
function Gg(e, t, {
  includeMatches: o = _e.includeMatches,
  includeScore: a = _e.includeScore
} = {}) {
  const r = [];
  return o && r.push(Wg), a && r.push(Zg), e.map((i) => {
    const { idx: n } = i, l = {
      item: t[n],
      refIndex: n
    };
    return r.length && r.forEach((s) => {
      s(i, l);
    }), l;
  });
}
class _o {
  constructor(t, o = {}, a) {
    if (this.options = { ..._e, ...o }, this.options.useExtendedSearch)
      throw new Error(_g);
    this._keyStore = new Og(this.options.keys), this.setCollection(t, a);
  }
  setCollection(t, o) {
    if (this._docs = t, o && !(o instanceof Pi))
      throw new Error(Sg);
    this._myIndex = o || ld(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(t) {
    st(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const o = [];
    for (let a = 0, r = this._docs.length; a < r; a += 1) {
      const i = this._docs[a];
      t(i, a) && (this.removeAt(a), a -= 1, r -= 1, o.push(i));
    }
    return o;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: o = -1 } = {}) {
    const {
      includeMatches: a,
      includeScore: r,
      shouldSort: i,
      sortFn: n,
      ignoreFieldNorm: l
    } = this.options;
    let s = Pt(t) ? Pt(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
    return Kg(s, { ignoreFieldNorm: l }), i && s.sort(n), ad(o) && o > -1 && (s = s.slice(0, o)), Gg(s, this._docs, {
      includeMatches: a,
      includeScore: r
    });
  }
  _searchStringList(t) {
    const o = ni(t, this.options), { records: a } = this._myIndex, r = [];
    return a.forEach(({ v: i, i: n, n: l }) => {
      if (!st(i))
        return;
      const { isMatch: s, score: c, indices: d } = o.searchIn(i);
      s && r.push({
        item: i,
        idx: n,
        matches: [{ score: c, value: i, norm: l, indices: d }]
      });
    }), r;
  }
  _searchLogical(t) {
    throw new Error($g);
  }
  _searchObjectList(t) {
    const o = ni(t, this.options), { keys: a, records: r } = this._myIndex, i = [];
    return r.forEach(({ $: n, i: l }) => {
      if (!st(n))
        return;
      let s = [];
      a.forEach((c, d) => {
        s.push(
          ...this._findMatches({
            key: c,
            value: n[d],
            searcher: o
          })
        );
      }), s.length && i.push({
        idx: l,
        item: n,
        matches: s
      });
    }), i;
  }
  _findMatches({ key: t, value: o, searcher: a }) {
    if (!st(o))
      return [];
    let r = [];
    if (Gt(o))
      o.forEach(({ v: i, i: n, n: l }) => {
        if (!st(i))
          return;
        const { isMatch: s, score: c, indices: d } = a.searchIn(i);
        s && r.push({
          score: c,
          key: t,
          value: i,
          idx: n,
          norm: l,
          indices: d
        });
      });
    else {
      const { v: i, n } = o, { isMatch: l, score: s, indices: c } = a.searchIn(i);
      l && r.push({ score: s, key: t, value: i, norm: n, indices: c });
    }
    return r;
  }
}
_o.version = "7.1.0";
_o.createIndex = ld;
_o.parseIndex = Dg;
_o.config = _e;
_o.parseQuery = Hg;
const Jg = {
  class: "search-container",
  "data-testid": "search-input"
}, Yg = {
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
  setup(e, { expose: t, emit: o }) {
    const a = e, r = o, i = Ti()[a.hotkey.key], n = /* @__PURE__ */ F(null), { id: l, items: s, searchKeys: c, searchOptions: d, itemText: u, itemValue: f } = /* @__PURE__ */ Wd(a), p = /* @__PURE__ */ Pe({
      ...d.value,
      keys: [...c.value]
    });
    let h = /* @__PURE__ */ Pe(new _o(s.value, p));
    function m(j) {
      if (j?.item) {
        if (u.value.includes(".")) {
          const T = Zo(j.item, u.value);
          return Hn(T) ? T : "";
        }
        return u.value ? j.item[u.value] : j.item;
      }
      if (j) {
        if (u.value.includes(".")) {
          const T = Zo(j, u.value);
          return Hn(T) ? T : "";
        }
        return u.value ? j[u.value] : j;
      }
      return null;
    }
    function w(j) {
      return j?.item ? f.value.includes(".") ? Zo(j.item, f.value) : f.value ? j.item[f.value] : j.item : j ? f.value.includes(".") ? Zo(j, f.value) : f.value ? j[f.value] : j : null;
    }
    const x = I({
      get() {
        return a.modelValue;
      },
      set(j) {
        r("update:modelValue", w(j));
      }
    }), _ = /* @__PURE__ */ F(null), $ = /* @__PURE__ */ F(null);
    function b() {
      $.value.showModal();
    }
    function C() {
      $.value.close();
    }
    const A = I(() => _.value && !a.endpoint ? h.search(_.value) : a.items), K = /* @__PURE__ */ Pe({
      id: l.value,
      serverside: !0,
      clearable: !0,
      prependIcon: gg,
      placeholder: a.placeholder,
      large: !0,
      showDivider: !0,
      offset: 0
    }), Z = I({
      get() {
        return a.show;
      },
      set(j) {
        r("update:show", j), j || r("close");
      }
    });
    return ue(i, (j) => {
      j && a.hotkey && setTimeout(() => {
        n.value.select.input.focus();
      }, 100);
    }), xi(() => {
      h = /* @__PURE__ */ Pe(new _o(s.value, p));
    }), t({
      showModal: b,
      close: C
    }), (j, T) => (v(), S("div", Jg, [
      U(zi, {
        ref_key: "modal",
        ref: $,
        modelValue: Z.value,
        "onUpdate:modelValue": T[6] || (T[6] = (D) => Z.value = D),
        "hide-header": "",
        "hide-footer": "",
        class: ce({ "loader-modal": e.loading })
      }, {
        default: O(() => [
          e.loading ? (v(), Y(ba, { key: 0 })) : !e.loading && e.endpoint ? (v(), Y(bg, Be({
            key: 1,
            ref_key: "search",
            ref: n,
            modelValue: x.value,
            "onUpdate:modelValue": T[1] || (T[1] = (D) => x.value = D),
            class: "search elevated"
          }, K, {
            "item-text": y(u),
            endpoint: e.endpoint,
            "filter-keys": e.filterKeys,
            "additional-params": e.additionalParams,
            onSearch: T[2] || (T[2] = (D) => _.value = D)
          }), {
            inline: O(() => [
              U(ze, {
                "data-testid": "close-button",
                variant: "text",
                class: "cancel",
                onClick: T[0] || (T[0] = (D) => {
                  Z.value = !1, x.value = null, _.value = null;
                })
              }, {
                default: O(() => [
                  ae(V(e.buttonText || y(B)("input.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            option: O(({ option: D, selected: z }) => [
              ie(j.$slots, "option", {
                option: D.item || D,
                selected: z
              }, void 0, !0)
            ]),
            _: 3
          }, 16, ["modelValue", "item-text", "endpoint", "filter-keys", "additional-params"])) : (v(), Y(Bi, Be({
            key: 2,
            ref_key: "search",
            ref: n,
            modelValue: x.value,
            "onUpdate:modelValue": T[4] || (T[4] = (D) => x.value = D),
            class: "search elevated"
          }, K, {
            "item-value": y(f),
            "item-text": m,
            items: A.value,
            onSearch: T[5] || (T[5] = (D) => _.value = D)
          }), {
            inline: O(() => [
              U(ze, {
                "data-testid": "close-button",
                variant: "text",
                class: "cancel",
                onClick: T[3] || (T[3] = (D) => {
                  Z.value = !1, x.value = null, _.value = null;
                })
              }, {
                default: O(() => [
                  ae(V(e.buttonText || y(B)("input.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            option: O(({ option: D, selected: z }) => [
              ie(j.$slots, "option", {
                option: D.item || D,
                selected: z
              }, void 0, !0)
            ]),
            _: 3
          }, 16, ["modelValue", "item-value", "items"]))
        ]),
        _: 3
      }, 8, ["modelValue", "class"])
    ]));
  }
}, Xg = /* @__PURE__ */ he(Yg, [["__scopeId", "data-v-95758b60"]]);
function Qg(e, t) {
  return v(), S("svg", {
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
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
const e0 = {
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
    const o = e, a = t, r = I({
      get: () => o.value,
      set: (n) => {
        a("update:model-value", n);
      }
    }), i = I(() => o.placeholder ? o.placeholder : B("input.product_reference"));
    return (n, l) => (v(), Y(vt, Be({
      id: "reference-input",
      modelValue: r.value,
      "onUpdate:modelValue": l[0] || (l[0] = (s) => r.value = s),
      class: "reference-input",
      "data-testid": "reference-input",
      type: "text",
      icon: y(Vi),
      large: ""
    }, o, { placeholder: i.value }), null, 16, ["modelValue", "icon", "placeholder"]));
  }
}, tl = /* @__PURE__ */ he(e0, [["__scopeId", "data-v-b34c7c35"]]), t0 = { class: "inner" }, o0 = {
  key: 0,
  class: "subtitle"
}, a0 = {
  key: 2,
  class: "reference"
}, r0 = { class: "value" }, i0 = { class: "footer-wrapper" }, n0 = { class: "right" }, l0 = {
  key: 0,
  class: "sub-total"
}, s0 = {
  key: 0,
  class: "label"
}, d0 = { class: "decimal" }, c0 = { class: "sub-price" }, u0 = { class: "label" }, f0 = { class: "shipping" }, p0 = { class: "sub-price" }, h0 = { class: "label" }, m0 = { class: "packaging" }, v0 = {
  key: 1,
  class: "excluded-from-price"
}, g0 = { class: "desktop" }, b0 = { class: "mobile" }, y0 = {
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
      default: Oi
    },
    /** Text in the submit button */
    submit: {
      type: String,
      default: ""
    },
    /** Icon in the submit button */
    submitIcon: {
      type: Function,
      default: Qg
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
  setup(e, { expose: t, emit: o }) {
    const a = e, r = o, i = Bt("submit-button"), n = /* @__PURE__ */ F(!1), l = /* @__PURE__ */ F(null), s = /* @__PURE__ */ F(null), c = I(() => a.submit ? a.submit : B("product-config-modal.add_to_cart")), d = I(() => a.submit ? a.submit : B("product-config-modal.add")), u = I(() => a.priceSubtext ? a.priceSubtext : B("product-config-modal.price_excluding")), f = I(() => {
      if (a.product && a.product.price) {
        let [m, w] = Dr(a.product.price, a.lang, a.currency).toString().split(",");
        return w && (m = `${m},`), {
          whole: m,
          decimal: w
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
    return ue(
      () => a.canOrder,
      async (m) => {
        m && (await it(), i.value.$el.focus());
      }
    ), t({
      showModal: p,
      close: h
    }), (m, w) => (v(), Y(zi, {
      ref_key: "modal",
      ref: s,
      class: "product-config-modal",
      fullscreen: "",
      "show-minimize": e.showMinimize,
      "data-testid": "product-config-modal",
      onMinimize: w[5] || (w[5] = (x) => n.value = x),
      onClose: w[6] || (w[6] = (x) => r("close"))
    }, {
      header: O(() => [
        e.product.image ? (v(), Y(Gs, {
          key: 0,
          class: "product-image",
          mobile: e.product.imageMobile,
          tablet: e.product.imageTablet,
          image: e.product.image,
          width: n.value ? 88 : 136,
          rounded: 8,
          alt: `${e.product.title} image`
        }, null, 8, ["mobile", "tablet", "image", "width", "alt"])) : L("", !0),
        N("div", t0, [
          U(St, {
            level: "h2",
            class: "title"
          }, {
            default: O(() => [
              ae(V(e.product.name), 1)
            ]),
            _: 1
          }),
          !n.value && e.subTitle ? (v(), S("span", o0, [
            U(Zt, { icon: e.subTitleIcon }, null, 8, ["icon"]),
            ae(" " + V(e.subTitle), 1)
          ])) : L("", !0),
          !n.value && e.showReferenceField ? (v(), Y(tl, {
            key: 1,
            id: "reference",
            modelValue: l.value,
            "onUpdate:modelValue": [
              w[0] || (w[0] = (x) => l.value = x),
              w[1] || (w[1] = (x) => r("update:reference", x))
            ]
          }, null, 8, ["modelValue"])) : n.value && l.value ? (v(), S("span", a0, [
            ae(V(m.referenceLabel) + ": ", 1),
            N("span", r0, V(l.value), 1)
          ])) : L("", !0)
        ]),
        !n.value && e.showReferenceField ? (v(), Y(tl, {
          key: 1,
          id: "reference",
          modelValue: l.value,
          "onUpdate:modelValue": [
            w[2] || (w[2] = (x) => l.value = x),
            w[3] || (w[3] = (x) => r("update:reference", x))
          ]
        }, null, 8, ["modelValue"])) : L("", !0)
      ]),
      footer: O(() => [
        N("div", i0, [
          e.specs ? (v(), Y(ze, {
            key: 0,
            size: "large",
            variant: "secondary",
            class: "specifications"
          }, {
            default: O(() => [
              ae(V(y(B)("product-config-modal.specifications")), 1)
            ]),
            _: 1
          })) : L("", !0),
          N("div", n0, [
            f.value ? (v(), S("div", l0, [
              N("span", {
                class: ce(["price", { small: e.extendedPricing }])
              }, [
                e.extendedPricing ? (v(), S("span", s0, V(y(B)("product-config-modal.total")), 1)) : L("", !0),
                N("span", null, V(f.value.whole), 1),
                N("span", d0, V(f.value.decimal), 1)
              ], 2),
              e.extendedPricing ? (v(), S(be, { key: 0 }, [
                N("span", c0, [
                  N("span", u0, V(y(B)("product-config-modal.shipping_costs")), 1),
                  N("span", f0, V(y(Dr)(e.product.shipping, e.lang, e.currency)), 1)
                ]),
                N("span", p0, [
                  N("span", h0, V(y(B)("product-config-modal.packaging_costs")), 1),
                  N("span", m0, V(y(Dr)(e.product.packaging, e.lang, e.currency)), 1)
                ])
              ], 64)) : (v(), S("span", v0, V(u.value), 1))
            ])) : L("", !0),
            U(ze, {
              ref: "submit-button",
              disabled: !e.canOrder,
              class: "add-to-cart",
              size: "large",
              icon: e.submitIcon,
              onClick: w[4] || (w[4] = (x) => r("submit:product-config"))
            }, {
              default: O(() => [
                N("span", g0, V(c.value), 1),
                N("span", b0, V(d.value), 1)
              ]),
              _: 1
            }, 8, ["disabled", "icon"])
          ])
        ])
      ]),
      default: O(() => [
        ie(m.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["show-minimize"]));
  }
}, w0 = /* @__PURE__ */ he(y0, [["__scopeId", "data-v-b1a6dd1f"]]), x0 = { class: "modal-container" }, k0 = { class: "option" }, _0 = { key: 0 }, $0 = { class: "title" }, S0 = {
  key: 0,
  class: "subtitle"
}, C0 = { key: 1 }, A0 = { class: "title" }, E0 = {
  key: 0,
  class: "subtitle"
}, T0 = {
  __name: "PProductModal",
  setup(e) {
    const t = /* @__PURE__ */ F(null), o = /* @__PURE__ */ F(null), a = /* @__PURE__ */ F(!1), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F({}), n = /* @__PURE__ */ F(""), l = I(() => ({
      name: i.value.productInfo && Object.keys(i.value.productInfo).length && i.value.productInfo.translations[i.value.language]?.title ? i.value.productInfo.translations[i.value.language].title : i.value.productInfo?.translations?.nl.title || i.value.productInfo?.code,
      image: i.value.productInfo?.images?.[0].url,
      ...i.value.prices
    }));
    return ue(n, async () => {
      n.value ? (i.value.selectedProduct = n.value, i.value.closeSearch(), i.value.openConfigurator(), await (await i.value.setProduct(n.value.code, !0)).getNextOption()) : n.value === "" && i.value.clear();
    }), et(() => {
      window.addEventListener("connectConfigurator:ready", (s) => {
        if (!s.detail.isEditor) {
          const c = s.detail;
          c.searchBar = t.value, c.configuratorModal = o.value, i.value = c;
        }
      });
    }), ue(a, (s) => {
      s && (n.value.code || i.value.product.code) && i.value.clear();
    }), (s, c) => (v(), S("div", x0, [
      U(y(Xg), {
        id: "probo-product-search-bar",
        ref_key: "searchBar",
        ref: t,
        modelValue: n.value,
        "onUpdate:modelValue": c[0] || (c[0] = (d) => n.value = d),
        show: a.value,
        "onUpdate:show": c[1] || (c[1] = (d) => a.value = d),
        items: i.value.products,
        elevated: "",
        "search-keys": [
          "code",
          `translations.${i.value.language}.title`,
          `translations.${i.value.language}.description`
        ],
        "item-text": `translations.${i.value.language}.title`,
        loading: i.value.loading
      }, {
        option: O(({ option: d }) => [
          N("span", k0, [
            d && d.translations[i.value.language] ? (v(), S("span", _0, [
              N("span", $0, V(d.translations[i.value.language].title), 1),
              d.translations[i.value.language].description ? (v(), S("span", S0, V(d.translations[i.value.language].description), 1)) : L("", !0)
            ])) : d && d.translations.nl ? (v(), S("span", C0, [
              N("span", A0, V(d.translations.nl.title), 1),
              d.translations.nl.description ? (v(), S("span", E0, V(d.translations.nl.description), 1)) : L("", !0)
            ])) : L("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "show", "items", "search-keys", "item-text", "loading"]),
      U(y(w0), {
        ref_key: "configuratorModal",
        ref: o,
        modelValue: r.value,
        "onUpdate:modelValue": c[2] || (c[2] = (d) => r.value = d),
        product: l.value,
        "sub-title": i.value.productInfo?.translations?.[i.value.language]?.description || i.value.productInfo?.translations?.nl.description,
        specs: !1,
        "show-minimize": !1,
        "extended-pricing": "",
        submit: y(ot)("complete"),
        "submit-icon": y(Oi),
        "can-order": i.value.canOrder,
        "onSubmit:productConfig": c[3] || (c[3] = (d) => i.value.finish()),
        onClose: c[4] || (c[4] = (d) => n.value = "")
      }, {
        default: O(() => [
          ie(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["modelValue", "product", "sub-title", "submit", "submit-icon", "can-order"])
    ]));
  }
}, O0 = { class: "container" }, z0 = { key: 1 }, Aa = {
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
    hideDeliverySection: Boolean,
    buttonStartText: {
      type: String,
      default: ""
    },
    disableFirstStepAutofocus: Boolean
  },
  setup(e) {
    const t = e, o = /* @__PURE__ */ Pe(new vg({ proxy: "" })), a = /* @__PURE__ */ F(null);
    ue(o, () => {
      o.language && o.setLanguage(o.language);
    });
    const r = I({
      get: () => o.getConfig(),
      set: (l) => {
        a.value && clearTimeout(a.value), o.updateExternal && (a.value = setTimeout(() => {
          o.setOption(l).getNextOption();
        }, 300));
      }
    });
    function i(l) {
      o.recalculate(l);
    }
    function n() {
      const l = new Event(
        o.isEditor ? "connectConfiguratorEditor:started" : "connectConfigurator:started"
      );
      window.dispatchEvent(l);
    }
    return et(async () => {
      window.connectConfigurator = o, t.proxy && (o.init({
        proxy: t.proxy,
        language: t.language,
        priceType: t.priceType,
        storeProductsLocally: t.storeProductsLocally,
        callbackUrl: t.callbackUrl,
        internalProductId: t.internalProductId,
        hideDeliverySection: t.hideDeliverySection,
        buttonStartText: t.buttonStartText
      }), t.productCode && await (await o.setProduct(t.productCode)).getNextOption());
    }), (l, s) => (v(), S("div", O0, [
      e.modal ? (v(), Y(T0, {
        key: 0,
        part: "modal"
      }, {
        default: O(() => [
          o.alert.title ? (v(), Y(y(pa), jo(Be({ key: 0 }, o.alert)), null, 16)) : L("", !0),
          U(y(qn), {
            modelValue: r.value,
            "onUpdate:modelValue": s[0] || (s[0] = (c) => r.value = c),
            template: o.options,
            "accordion-state": o.openState,
            loading: o.loading,
            "delivery-options": o.deliveryOptions,
            "hide-delivery-section": o.hideDeliverySection,
            "button-start-text": o.buttonStartText,
            "can-order": o.canOrder,
            "disable-first-step-autofocus": e.disableFirstStepAutofocus,
            onRecalculate: i,
            "onConfiguration:started": n
          }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options", "hide-delivery-section", "button-start-text", "can-order", "disable-first-step-autofocus"])
        ]),
        _: 1
      })) : (v(), S("div", z0, [
        o.alert.title ? (v(), Y(y(pa), jo(Be({ key: 0 }, o.alert)), null, 16)) : L("", !0),
        U(y(qn), {
          modelValue: r.value,
          "onUpdate:modelValue": s[1] || (s[1] = (c) => r.value = c),
          template: o.options,
          "accordion-state": o.openState,
          loading: o.loading,
          "delivery-options": o.deliveryOptions,
          "hide-delivery-section": o.hideDeliverySection,
          "button-start-text": o.buttonStartText,
          "can-order": o.canOrder,
          "disable-first-step-autofocus": e.disableFirstStepAutofocus,
          onRecalculate: i,
          "onConfiguration:started": n
        }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options", "hide-delivery-section", "button-start-text", "can-order", "disable-first-step-autofocus"])
      ]))
    ]));
  }
}, V0 = `:root,:host{--font-sans: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-poppins: "Poppins", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--animate-progress: progress 1s infinite linear;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--gradient-position: to bottom;--gradient-from: #0000;--gradient-from-position: 0%;--gradient-to: #0000;--gradient-to-position: 100%;--gradient-stops: var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position);--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);--shadow-base: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000;--shadow-container: 0 1px 3px rgba(0, 0, 0, .1);--shadow-card-hover: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-menu: var(--shadow-base), 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-menu-large: var(--shadow-base), 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-floating-soft: 0 4px 6px rgb(0 0 0 / .1);--shadow-page-header-overlap: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 12px 12px -16px rgb(0 0 0 / .2);--filter-shadow-tooltip: drop-shadow(0 2px 4px rgb(0 0 0 / .24));--filter-shadow-panel-top: drop-shadow(0 -1px 2px rgb(0 0 0 / .1)) drop-shadow(0 -1px 1px rgb(0 0 0 / .06));--filter-shadow-panel-bottom: drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06));--color-primary: oklch(54.615% .2152 262.881);--color-primary-hover: oklch(48.82% .2172 264.376);--color-primary-active: oklch(57.034% .1951 261.584);--color-on-primary: oklch(100% 0 0);--color-accent: oklch(54.615% .2152 262.881);--color-accent-strong: oklch(48.82% .2172 264.376);--color-accent-soft: oklch(96.221% .019 240.333);--color-accent-soft-hover: oklch(93.192% .0316 255.585);--color-accent-soft-active: oklch(88.234% .0571 254.128);--color-on-accent: oklch(100% 0 0);--state-hover-overlay: color-mix(in oklch, oklch(0% 0 0) 8%, transparent);--state-active-overlay: color-mix(in oklch, oklch(0% 0 0) 16%, transparent);--color-surface-canvas: oklch(100% 0 0);--color-surface-page: oklch(100% 0 0);--color-surface-raised: oklch(100% 0 0);--color-surface-raised-alt: oklch(100% 0 0);--color-surface-subtle: oklch(100% 0 0);--color-surface-subtle-hover: oklch(98.477% .0017 247.838);--color-surface-subtle-active: oklch(92.48% .0027 264.541);--color-surface-disabled: oklch(96.65% .004 264.52);--color-surface-disabled-subtle: oklch(98.498% .0018 247.859);--color-control-track-off: oklch(92.48% .0027 264.541);--color-secondary: oklch(100% 0 0);--color-secondary-hover: oklch(98.477% .0017 247.838);--color-secondary-pressed: oklch(92.48% .0027 264.541);--color-secondary-border: oklch(86.277% .0063 264.565);--color-secondary-border-hover: oklch(73.455% .008 264.608);--color-tertiary: oklch(96.221% .019 240.333);--color-tertiary-hover: oklch(93.192% .0316 255.585);--color-tertiary-pressed: oklch(88.234% .0571 254.128);--color-tertiary-text: oklch(54.615% .2152 262.881);--color-parent-bg: oklch(100% 0 0);--color-child: oklch(100% 0 0);--color-text-primary: oklch(21.049% .032 264.664);--color-text-secondary: oklch(55.1% .023 264.36);--color-text-disabled: oklch(51.786% .0108 264.705);--color-text-inverse: oklch(100% 0 0);--color-border-default: oklch(86.277% .0063 264.565);--color-border-strong: oklch(73.455% .008 264.608);--color-divider: oklch(92.48% .0027 264.541);--color-border-subtle: oklch(92.48% .0027 264.541);--color-field-background: oklch(100% 0 0);--color-field-border: oklch(86.277% .0063 264.565);--color-field-text: oklch(21.049% .032 264.664);--color-success: oklch(55.106% .1432 149.926);--color-success-fill: oklch(55.106% .1432 149.926);--color-success-fill-hover: oklch(52.73% .1371 150.069);--color-success-fill-active: oklch(39.253% .0896 152.535);--color-success-strong: oklch(39.253% .0896 152.535);--color-success-soft: oklch(98.135% .0124 149.917);--color-on-success: oklch(100% 0 0);--color-success-text: oklch(52.73% .1371 150.069);--color-warning: oklch(58.272% .162 45.983);--color-warning-hover: oklch(55.343% .1739 38.402);--color-warning-active: oklch(40.839% .1165 38.172);--color-warning-strong: oklch(40.839% .1165 38.172);--color-warning-soft: oklch(98.377% .0105 50.111);--color-on-warning: oklch(100% 0 0);--color-warning-text: oklch(55.343% .1739 38.402);--color-danger: oklch(61.535% .2075 25.224);--color-danger-fill: oklch(57.7% .245 27.325);--color-danger-fill-hover: oklch(50.5% .213 27.518);--color-danger-fill-active: oklch(39.329% .1242 24.368);--color-danger-strong: oklch(39.329% .1242 24.368);--color-danger-muted: oklch(.808 .114 19.571);--color-danger-soft: oklch(97.053% .0129 17.38);--color-on-danger: oklch(100% 0 0);--color-danger-text: oklch(57.004% .2035 26.111);--color-info: oklch(62.538% .1804 219.935);--color-info-strong: oklch(30.152% .1159 260.405);--color-info-soft: oklch(96.221% .019 240.333);--color-info-text: oklch(48.727% .2427 215.855);--color-tag-info-soft-bg: oklch(93.192% .0316 255.585);--color-tag-info-soft-text: oklch(48.82% .2172 264.376);--color-tag-success-soft-bg: oklch(96.241% .0434 156.743);--color-tag-success-soft-text: oklch(52.73% .1371 150.069);--color-tag-neutral-soft-bg: oklch(96.696% .0029 264.542);--color-tag-neutral-soft-text: oklch(37.293% .0306 259.733);--color-tag-warning-orange-soft-bg: oklch(95.42% .0372 75.164);--color-tag-warning-orange-soft-text: oklch(55.343% .1739 38.402);--color-tag-accent-soft-bg: oklch(94.643% .0327 307.174);--color-tag-accent-soft-text: oklch(49.552% .2369 301.924);--color-tag-danger-soft-bg: oklch(93.564% .0309 17.717);--color-tag-danger-soft-text: oklch(50.542% .1905 27.518);--color-tag-warning-yellow-soft-bg: oklch(97.292% .0693 103.193);--color-tag-warning-yellow-soft-text: oklch(55.378% .1207 66.442);--color-tag-neutral-outline-border: oklch(92.758% .0058 264.531);--color-tag-neutral-outline-bg: oklch(100% 0 0);--color-tag-neutral-outline-text: oklch(20.463% 0 0);--color-tag-subtle-outline-border: oklch(37.293% .0306 259.733 / .1);--color-tag-subtle-outline-bg: oklch(97.015% 0 0);--color-tag-subtle-outline-text: oklch(20.463% 0 0);--color-tag-warning-orange-outline-border: oklch(62.848% .1396 63.6 / .1);--color-tag-warning-orange-outline-bg: oklch(97.962% .0158 73.684);--color-tag-warning-orange-outline-text: oklch(40.839% .1165 38.172);--color-tag-info-outline-border: oklch(53.296% .1901 259.956 / .1);--color-tag-info-outline-bg: oklch(97.048% .0142 254.604);--color-tag-info-outline-text: oklch(37.906% .1378 265.522);--color-tag-success-outline-border: oklch(52.699% .1397 149.106 / .1);--color-tag-success-outline-bg: oklch(98.193% .0181 155.826);--color-tag-success-outline-text: oklch(39.253% .0896 152.535);--color-tag-danger-outline-border: oklch(50.678% .1732 28.989 / .1);--color-tag-danger-outline-bg: oklch(97.053% .0129 17.38);--color-tag-danger-outline-text: oklch(39.584% .1331 25.723);--color-tag-accent-outline-border: oklch(48.471% .2356 298.402 / .1);--color-tag-accent-outline-bg: oklch(97.685% .0142 308.299);--color-tag-accent-outline-text: oklch(38.074% .1661 304.987);--color-tag-warning-yellow-outline-border: oklch(55.378% .1207 66.442 / .1);--color-tag-warning-yellow-outline-bg: oklch(98.73% .0262 102.212);--color-tag-warning-yellow-outline-text: oklch(42.1% .0897 57.708);--color-overlay-backdrop: color-mix(in oklch, oklch(0% 0 0) 50%, transparent)}.dark{--color-surface-canvas: oklch(20.768% .0398 265.755);--color-surface-page: oklch(29.569% .034 270.005);--color-surface-raised: oklch(32.662% .0494 270.87);--color-surface-raised-alt: oklch(41.043% .0427 273.922);--color-surface-subtle: oklch(29.569% .034 270.005);--color-surface-subtle-hover: oklch(38.516% .0297 272.123);--color-surface-subtle-active: oklch(41.043% .0427 273.922);--color-accent-soft: oklch(71.374% .1434 254.624 / .1);--color-accent-soft-hover: oklch(71.374% .1434 254.624 / .15);--color-accent-soft-active: oklch(71.374% .1434 254.624 / .175);--color-secondary: oklch(29.569% .034 270.005);--color-secondary-hover: oklch(38.516% .0297 272.123);--color-secondary-pressed: oklch(57.973% .031 276.461);--color-secondary-border: oklch(56.001% .0206 272.101);--color-secondary-border-hover: oklch(73.455% .008 264.608);--color-tertiary: oklch(71.374% .1434 254.624 / .1);--color-tertiary-hover: oklch(71.374% .1434 254.624 / .15);--color-tertiary-pressed: oklch(71.374% .1434 254.624 / .175);--color-tertiary-text: oklch(75.234% .12488 254.018);--color-parent-bg: oklch(29.569% .034 270.005);--color-child: oklch(32.662% .0494 270.87);--color-surface-disabled: oklch(20.768% .0398 265.755);--color-surface-disabled-subtle: oklch(98.498% .0018 247.859);--color-control-track-off: oklch(27.95% .0368 260.031);--color-text-primary: oklch(92.8% .006 264.531);--color-text-secondary: oklch(92.758% .0058 264.531);--color-text-disabled: oklch(73.455% .008 264.608);--color-border-default: oklch(56.001% .0206 272.101);--color-border-strong: oklch(56.001% .0206 272.101);--color-divider: oklch(44.611% .0263 256.802);--color-border-subtle: oklch(44.611% .0263 256.802);--color-primary: oklch(54.615% .2152 262.881);--color-primary-hover: oklch(48.82% .2172 264.376);--color-primary-active: oklch(42.445% .1809 265.638);--color-on-primary: oklch(100% 0 0);--color-accent: oklch(71.374% .1434 254.624);--color-accent-strong: oklch(57.034% .1951 261.584);--color-on-accent: oklch(100% 0 0);--state-hover-overlay: color-mix(in oklch, oklch(100% 0 0) 6%, transparent);--state-active-overlay: color-mix(in oklch, oklch(100% 0 0) 12%, transparent);--color-field-background: oklch(27.95% .0368 260.031);--color-field-border: oklch(56.001% .0206 272.101);--color-field-text: oklch(87.168% .0093 258.338);--color-success: oklch(72.275% .192 149.579);--color-success-fill: oklch(39.253% .0896 152.535);--color-success-fill-hover: oklch(55.106% .1432 149.926);--color-success-fill-active: oklch(55.106% .1432 149.926);--color-success-strong: oklch(98.135% .0124 149.917);--color-success-soft: oklch(39.253% .0896 152.535);--color-success-text: oklch(98.135% .0124 149.917);--color-warning: oklch(58.272% .162 45.983);--color-warning-hover: oklch(55.343% .1739 38.402);--color-warning-active: oklch(40.839% .1165 38.172);--color-warning-strong: oklch(98.377% .0105 50.111);--color-warning-soft: oklch(40.839% .1165 38.172);--color-warning-text: oklch(98.377% .0105 50.111);--color-danger: oklch(61.535% .2075 25.224);--color-danger-fill: oklch(57.7% .245 27.325);--color-danger-fill-hover: oklch(50.5% .213 27.518);--color-danger-fill-active: oklch(45% .213 27.518);--color-danger-strong: oklch(97.053% .0129 17.38);--color-danger-muted: oklch(.808 .114 19.571);--color-danger-soft: oklch(39.329% .1242 24.368);--color-danger-text: oklch(97.053% .0129 17.38);--color-info: oklch(62.538% .1804 219.935);--color-info-strong: oklch(96.221% .019 240.333);--color-info-soft: oklch(30.152% .1159 260.405);--color-info-text: oklch(96.221% .019 240.333);--color-tag-info-soft-bg: oklch(71.374% .1434 254.624 / .1);--color-tag-info-soft-text: oklch(80.907% .0956 251.813);--color-tag-success-soft-bg: oklch(80.035% .1821 151.711 / .1);--color-tag-success-soft-text: oklch(87.116% .1363 154.449);--color-tag-neutral-soft-bg: oklch(71.547% 0 0 / .1);--color-tag-neutral-soft-text: oklch(87.111% .0055 286.286);--color-tag-warning-orange-soft-bg: oklch(75.764% .159 55.934 / .1);--color-tag-warning-orange-soft-text: oklch(83.657% .1165 66.29);--color-tag-accent-soft-bg: oklch(72.169% .1767 305.504 / .1);--color-tag-accent-soft-text: oklch(82.676% .1082 306.383);--color-tag-danger-soft-bg: oklch(71.063% .1661 22.216 / .1);--color-tag-danger-soft-text: oklch(80.769% .1035 19.571);--color-tag-warning-yellow-soft-bg: oklch(86.056% .1731 91.936 / .1);--color-tag-warning-yellow-soft-text: oklch(90.524% .1657 98.111);--color-tag-neutral-outline-bg: oklch(100% 0 0 / .1);--color-tag-neutral-outline-text: oklch(87.111% .0055 286.286);--color-overlay-backdrop: color-mix(in oklch, oklch(0% 0 0) 70%, transparent)}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes progress{0%{transform:translate(0) scaleX(0)}40%{transform:translate(0) scaleX(.4)}to{transform:translate(100%) scaleX(.5)}}@keyframes pulse{50%{opacity:.5}}html{font-size:16px;line-height:1.5rem}*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding:0;margin:0}button,input,optgroup,select,textarea{font:inherit;letter-spacing:inherit;color:inherit}:where(a){color:inherit;text-decoration:inherit}:where(a:visited){color:inherit}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.not-sr-only{position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%;line-height:1.5}img,svg{display:block}table{border-collapse:collapse;border-spacing:0}ol,ul{list-style:none}body{margin:0;font-family:var(--font-sans);background-color:var(--color-surface-canvas, oklch(100% 0 0));color:var(--color-text-primary, oklch(21.049% .032 264.664))}*,:after,:before,::backdrop,::file-selector-button{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}button:not(:disabled),[role=button]:not(:disabled){cursor:pointer}body{background-color:var(--color-surface-canvas, oklch(100% 0 0));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.mini-icon[data-v-83781390]{display:flex;height:1.25rem;width:1.25rem;flex-shrink:0}.micro-icon[data-v-1e1a14be]{display:flex;height:1rem;width:1rem;flex-shrink:0}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}.expand-top-enter-active[data-v-42701d92],.expand-bottom-enter-active[data-v-42701d92],.expand-left-enter-active[data-v-42701d92],.expand-right-enter-active[data-v-42701d92],.expand-top-leave-active[data-v-42701d92],.expand-bottom-leave-active[data-v-42701d92],.expand-left-leave-active[data-v-42701d92],.expand-right-leave-active[data-v-42701d92]{transform:translateZ(0);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--default-transition-timing-function);transition-duration:.15s}.expand-top-enter-from[data-v-42701d92]{translate:0 50%;scale:1 0;opacity:0}.expand-top-enter-to[data-v-42701d92],.expand-top-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-top-leave-to[data-v-42701d92]{translate:0 50%;scale:1 0;opacity:0}.expand-bottom-enter-from[data-v-42701d92]{translate:0 -50%;scale:1 0;opacity:0}.expand-bottom-enter-to[data-v-42701d92],.expand-bottom-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-bottom-leave-to[data-v-42701d92]{translate:0 -50%;scale:1 0;opacity:0}.expand-left-enter-from[data-v-42701d92]{translate:50% 0;scale:0 1;opacity:0}.expand-left-enter-to[data-v-42701d92],.expand-left-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-left-leave-to[data-v-42701d92]{translate:50% 0;scale:0 1;opacity:0}.expand-right-enter-from[data-v-42701d92]{translate:-50% 0;scale:0 1;opacity:0}.expand-right-enter-to[data-v-42701d92],.expand-right-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-right-leave-to[data-v-42701d92]{translate:-50% 0;scale:0 1;opacity:0}.floating-container-overlay-container[data-v-d07f7747]{pointer-events:none;position:absolute;top:0;left:0;display:contents;contain:layout}.floating-container-overlay-container .floating-container-overlay[data-v-d07f7747]{pointer-events:none;position:absolute;inset:0;display:flex}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-d07f7747]{pointer-events:auto;visibility:hidden;position:absolute;margin:0;height:max-content;width:max-content;overflow:visible;background-color:transparent;padding:0}.list[data-v-5e496d8d]{display:flex;flex-direction:column}.list.grid[data-v-5e496d8d]{flex-direction:row;flex-wrap:wrap}.list-item[data-v-9c2bcba7]{display:flex;align-items:center;background-color:var(--color-surface-raised, oklch(100% 0 0));padding-inline:1rem;padding-block:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--default-transition-timing-function);transition-duration:.15s}.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]{--tw-outline-style: none;outline-style:none}@media(forced-colors:active){.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]{outline:2px solid transparent;outline-offset:2px}}.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]:hover{cursor:pointer;background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838))}.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]:focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-9c2bcba7]{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.list-item .prepend[data-v-9c2bcba7]{display:flex}.list-item .content[data-v-9c2bcba7]{display:flex;flex-direction:column}.list-item .content .title[data-v-9c2bcba7]{font-weight:var(--font-weight-bold, 700)}.list-item .content .subtitle[data-v-9c2bcba7]{font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.list-item .content .text[data-v-9c2bcba7]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.dark .list-item.clickable[data-v-9c2bcba7]:not([tabindex="-1"]):focus-visible,.dark .list-item.clickable:not([tabindex="-1"]).active[data-v-9c2bcba7]{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.label[data-v-08911c65]{display:flex;height:1.5rem;width:fit-content;align-items:center;border-radius:.25rem;padding-inline:.625rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.label.small[data-v-08911c65]{height:1.25rem;padding-inline:.5rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.label.blue[data-v-08911c65]{background-color:var(--color-tag-info-soft-bg, oklch(93.192% .0316 255.585));color:var(--color-tag-info-soft-text, oklch(48.82% .2172 264.376))}.label.green[data-v-08911c65]{background-color:var(--color-tag-success-soft-bg, oklch(96.241% .0434 156.743));color:var(--color-tag-success-soft-text, oklch(52.73% .1371 150.069))}.label.gray[data-v-08911c65]{background-color:var(--color-tag-neutral-soft-bg, oklch(96.696% .0029 264.542));color:var(--color-tag-neutral-soft-text, oklch(37.293% .0306 259.733))}.label.orange[data-v-08911c65]{background-color:var(--color-tag-warning-orange-soft-bg, oklch(95.42% .0372 75.164));color:var(--color-tag-warning-orange-soft-text, oklch(55.343% .1739 38.402))}.label.purple[data-v-08911c65]{background-color:var(--color-tag-accent-soft-bg, oklch(94.643% .0327 307.174));color:var(--color-tag-accent-soft-text, oklch(49.552% .2369 301.924))}.label.red[data-v-08911c65]{background-color:var(--color-tag-danger-soft-bg, oklch(93.564% .0309 17.717));color:var(--color-tag-danger-soft-text, oklch(50.542% .1905 27.518))}.label.yellow[data-v-08911c65]{background-color:var(--color-tag-warning-yellow-soft-bg, oklch(97.292% .0693 103.193));color:var(--color-tag-warning-yellow-soft-text, oklch(55.378% .1207 66.442))}.label.alt[data-v-08911c65]{border-radius:var(--radius-xl, .75rem);border-style:solid;border-width:1px;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.label.alt.white[data-v-08911c65]{border-color:var(--color-tag-neutral-outline-border, oklch(92.758% .0058 264.531));background-color:var(--color-tag-neutral-outline-bg, oklch(100% 0 0));color:var(--color-tag-neutral-outline-text, oklch(20.463% 0 0))}.label.alt.gray[data-v-08911c65]{border-color:var(--color-tag-subtle-outline-border, oklch(37.293% .0306 259.733 / .1));background-color:var(--color-tag-subtle-outline-bg, oklch(97.015% 0 0));color:var(--color-tag-subtle-outline-text, oklch(20.463% 0 0))}.label.alt.orange[data-v-08911c65]{border-color:var(--color-tag-warning-orange-outline-border, oklch(62.848% .1396 63.6 / .1));background-color:var(--color-tag-warning-orange-outline-bg, oklch(97.962% .0158 73.684));color:var(--color-tag-warning-orange-outline-text, oklch(40.839% .1165 38.172))}.label.alt.blue[data-v-08911c65]{border-color:var(--color-tag-info-outline-border, oklch(53.296% .1901 259.956 / .1));background-color:var(--color-tag-info-outline-bg, oklch(97.048% .0142 254.604));color:var(--color-tag-info-outline-text, oklch(37.906% .1378 265.522))}.label.alt.green[data-v-08911c65]{border-color:var(--color-tag-success-outline-border, oklch(52.699% .1397 149.106 / .1));background-color:var(--color-tag-success-outline-bg, oklch(98.193% .0181 155.826));color:var(--color-tag-success-outline-text, oklch(39.253% .0896 152.535))}.label.alt.red[data-v-08911c65]{border-color:var(--color-tag-danger-outline-border, oklch(50.678% .1732 28.989 / .1));background-color:var(--color-tag-danger-outline-bg, oklch(97.053% .0129 17.38));color:var(--color-tag-danger-outline-text, oklch(39.584% .1331 25.723))}.label.alt.purple[data-v-08911c65]{border-color:var(--color-tag-accent-outline-border, oklch(48.471% .2356 298.402 / .1));background-color:var(--color-tag-accent-outline-bg, oklch(97.685% .0142 308.299));color:var(--color-tag-accent-outline-text, oklch(38.074% .1661 304.987))}.label.alt.yellow[data-v-08911c65]{border-color:var(--color-tag-warning-yellow-outline-border, oklch(55.378% .1207 66.442 / .1));background-color:var(--color-tag-warning-yellow-outline-bg, oklch(98.73% .0262 102.212));color:var(--color-tag-warning-yellow-outline-text, oklch(42.1% .0897 57.708))}.checkbox-container[data-v-f61c3d17]{display:flex;width:100%;flex-direction:column}.checkbox-container.large .label[data-v-f61c3d17]{gap:.75rem}.checkbox-container.large .checkbox[data-v-f61c3d17]{margin-top:0;height:1.25rem;width:1.25rem}.label[data-v-f61c3d17]{display:flex;align-items:flex-start;gap:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.label[data-v-f61c3d17]:not(.disabled){cursor:pointer}.checkbox[data-v-f61c3d17]{margin-top:.125rem;border-radius:.25rem;border:1px solid var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-field-background, oklch(100% 0 0));color:var(--color-accent-strong, oklch(48.82% .2172 264.376));appearance:none;width:1rem;height:1rem;background-origin:border-box}.checkbox[data-v-f61c3d17]:not(:disabled):hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.checkbox[data-v-f61c3d17]:checked,.checkbox[data-v-f61c3d17]:indeterminate{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));background-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));color:var(--color-on-accent, oklch(100% 0 0))}.checkbox[data-v-f61c3d17]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-f61c3d17]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.checkbox[data-v-f61c3d17]:disabled{border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-border-default, oklch(86.277% .0063 264.565))!important;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.checkbox[data-v-f61c3d17]:not(:disabled):checked:hover,.checkbox[data-v-f61c3d17]:not(:disabled):indeterminate:hover{border-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-on-accent, oklch(100% 0 0))}.checkbox[data-v-f61c3d17]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-f61c3d17]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='white' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-f61c3d17]{border-color:var(--color-danger-text, oklch(57.004% .2035 26.111));outline-color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.error .error-message[data-v-f61c3d17]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.append[data-v-f61c3d17]{margin-left:auto;font-weight:var(--font-weight-normal, 400)}.divider[data-v-8cd28476]{width:100%;border-color:var(--color-border-subtle, oklch(92.789% .0041 286.32));margin:0}.divider[data-v-8cd28476]:not(.vertical){border-top-width:var(--v7bf99daa)}.divider.vertical[data-v-8cd28476]{height:100%;width:.0625rem;border-left-width:var(--v7bf99daa)}.divider.vertical.flex[data-v-8cd28476]{height:auto;align-self:stretch}.base-select[data-v-aecfad57]:focus{outline:none}.base-select.disabled .wrapper[data-v-aecfad57]{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));border-color:var(--color-field-border, oklch(86.277% .0063 264.565));cursor:not-allowed}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-aecfad57]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-aecfad57]::placeholder{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.base-select.click[data-v-aecfad57]{cursor:pointer}.base-select.click.disabled[data-v-aecfad57]{pointer-events:none;cursor:default}.base-select .input-label[data-v-aecfad57]{font-size:.875rem;line-height:1.25rem;font-weight:500;margin-bottom:.25rem;display:flex}.base-select .wrapper[data-v-aecfad57]{background-color:var(--color-field-background, oklch(100% 0 0));border:solid 1px var(--color-field-border, oklch(86.277% .0063 264.565));border-radius:.5rem;display:flex;align-items:center;width:100%;height:2.5rem;padding:.5rem 1rem .5rem .5rem}.base-select .wrapper[data-v-aecfad57]:hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.base-select .wrapper.focus[data-v-aecfad57]{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));border-width:2px;padding-left:.4375rem;padding-right:.9375rem}.base-select .wrapper.has-error[data-v-aecfad57]{border-color:var(--color-danger, oklch(61.535% .2075 25.224));color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.base-select .wrapper .prepend-icon[data-v-aecfad57]{color:var(--color-accent, oklch(54.615% .2152 262.881));margin-left:.5rem}.base-select .wrapper .toggle-chevron[data-v-aecfad57],.base-select .wrapper .clear-button[data-v-aecfad57]{background-color:transparent;padding:0}.base-select .wrapper .selected-items[data-v-aecfad57]{display:flex;gap:.25rem;white-space:nowrap;overflow:hidden;margin-left:.5rem;width:auto}.base-select .wrapper .selected-items .label[data-v-aecfad57]{font-size:.75rem;line-height:1rem;height:min-content}.base-select .wrapper .placeholder[data-v-aecfad57]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .selected-item[data-v-aecfad57]{font-size:.875rem;line-height:1.25rem;margin-left:.5rem;text-overflow:ellipsis;overflow:hidden}.base-select .wrapper .action-buttons[data-v-aecfad57]{display:flex;gap:.25rem;margin-left:auto}.base-select .wrapper input[data-v-aecfad57]{border-style:none;padding:.5rem 0;margin-left:.5rem;font-size:.875rem;line-height:1.25rem;flex:1 0 5rem;min-width:0;min-height:0;background-color:var(--color-field-background, oklch(100% 0 0));color:var(--color-text-primary, oklch(21.049% .032 264.664));height:2.25rem}.base-select .wrapper input[data-v-aecfad57]::placeholder{color:var(--color-border-strong, oklch(73.455% .008 264.608))}.base-select .wrapper input[data-v-aecfad57]:focus{box-shadow:none;outline:none}.base-select .wrapper .label-inner[data-v-aecfad57]{display:flex;align-items:center;gap:.25rem}.base-select .wrapper .label-inner .close-button[data-v-aecfad57]{height:1rem;width:1rem}.base-select .error[data-v-aecfad57]{font-size:.875rem;line-height:1.25rem;color:var(--color-danger-text, oklch(57.004% .2035 26.111));margin-top:.5rem}.state-indicator[data-v-aecfad57]{pointer-events:none;transition:all .2s ease-in-out}.state-indicator.is-open[data-v-aecfad57]{transform:rotate(180deg)}.content-divider[data-v-aecfad57]{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));margin-left:1.5rem;margin-right:1.5rem;height:0px;color:inherit;border-top-width:1px}.select-content[data-v-aecfad57]{justify-content:space-between;max-height:18.75rem;overflow-y:auto;padding:.5rem 0;border-radius:.5rem;background-color:var(--color-surface-raised, oklch(100% 0 0))}.select-content.show-shadow[data-v-aecfad57]{box-shadow:var(--shadow-menu)}.select-content.remove-radius[data-v-aecfad57]{border-top-left-radius:0!important;border-top-right-radius:0!important}.select-content .no-results[data-v-aecfad57]{color:var(--color-text-primary, oklch(21.049% .032 264.664));cursor:default;-webkit-user-select:none;user-select:none;padding:.5rem 1rem;position:relative}.select-content[data-v-aecfad57] .checkbox-container{margin-right:1rem}@media(min-width:768px){.select-content[data-v-aecfad57]{max-height:400px}}@media(min-width:1024px){.select-content[data-v-aecfad57]{max-height:500px}}.loader[data-v-26a513f6]{animation:var(--animate-spin);border-radius:100%;height:1.5rem;width:1.5rem;border-width:.1875rem}.loader.primary-loader[data-v-26a513f6]{border-color:var(--color-accent-soft, oklch(96.221% .019 240.333));border-top-color:var(--color-accent, oklch(54.615% .2152 262.881))}.loader.secondary-loader[data-v-26a513f6]{border-color:color-mix(in oklab,var(--color-text-inverse, oklch(100% 0 0)) 40%,transparent);border-top-color:var(--color-text-inverse, oklch(100% 0 0))}.loader.inherit-loader[data-v-26a513f6]{border-color:color-mix(in oklab,currentColor 40%,transparent);border-top-color:currentColor}.loader.small-loader[data-v-26a513f6]{height:1.25rem;width:1.25rem}.loader.large-loader[data-v-26a513f6]{height:1.75rem;width:1.75rem}.intersect[data-v-d9041eb6]{display:flex;justify-content:center}.search-loader[data-v-d9041eb6]{margin-top:.5rem}.icon[data-v-0d12ef98]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.hotkey[data-v-a6d96a76]{display:flex;height:1.25rem;width:fit-content;min-width:1.25rem;align-items:center;justify-content:center;border-radius:.25rem;border-width:1px;border-style:solid;padding-inline:.25rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}.hotkey.disabled[data-v-a6d96a76]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.hotkey.primary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb,var(--color-on-accent, oklch(100% 0 0)) 50%,transparent);background-color:color-mix(in srgb,var(--color-on-accent, oklch(100% 0 0)) 15%,transparent);color:var(--color-on-accent, oklch(100% 0 0))}.hotkey.secondary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb,var(--color-text-primary, oklch(21.049% .032 264.664)) 15%,transparent);background-color:color-mix(in srgb,var(--color-text-primary, oklch(21.049% .032 264.664)) 3%,transparent);color:var(--color-field-text, oklch(21.049% .032 264.664))}.hotkey.tertiary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb,var(--color-accent, oklch(54.615% .2152 262.881)) 30%,transparent);background-color:color-mix(in srgb,var(--color-accent, oklch(54.615% .2152 262.881)) 6%,transparent);color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.tooltip-wrapper[data-v-5016fba7]{display:contents}.tooltip[data-v-5016fba7]{position:relative;display:flex;justify-content:center;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding-inline:1rem;padding-block:.5rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));word-break:break-all;color:var(--color-text-primary, oklch(21.049% .032 264.664));filter:var(--filter-shadow-tooltip)}.tooltip[data-v-5016fba7]:before{position:absolute;display:block;width:0;border-width:8px;border-style:solid;border-color:transparent;content:""}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]{margin-bottom:.5rem}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]:before{content:"";border-top-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]:before{bottom:0;left:50%;translate:-50% 100%;border-bottom-width:0}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-5016fba7]:before{content:"";border-top-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.top-left[data-v-5016fba7]:before{bottom:0;left:.75rem;translate:0 100%;border-bottom-style:solid;border-bottom-width:0px}.tooltip.top-right[data-v-5016fba7]:before{right:.75rem;bottom:0;translate:0 100%;border-bottom-style:solid;border-bottom-width:0px}.tooltip.top-center[data-v-5016fba7]:before,.tooltip.top[data-v-5016fba7]:before{bottom:0;left:50%;translate:-50% 100%;border-bottom-style:solid;border-bottom-width:0px}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom)[data-v-5016fba7]{margin-top:.5rem}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom)[data-v-5016fba7]:before{content:"";border-bottom-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-5016fba7]:before{content:"";border-bottom-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.bottom-left[data-v-5016fba7]:before{top:0;left:.75rem;translate:0 -100%;border-top-width:0px}.tooltip.bottom-right[data-v-5016fba7]:before{top:0;right:.75rem;translate:0 -100%;border-top-width:0px}.tooltip.bottom-center[data-v-5016fba7]:before,.tooltip.bottom[data-v-5016fba7]:before{top:0;left:50%;translate:-50% -100%;border-top-width:0px}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left)[data-v-5016fba7]{margin-right:.5rem}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left)[data-v-5016fba7]:before{content:"";border-left-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-5016fba7]:before{content:"";border-left-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.left-top[data-v-5016fba7]:before{top:.75rem;right:0;translate:100% 0;border-right-width:0px}.tooltip.left-bottom[data-v-5016fba7]:before{right:0;bottom:.75rem;translate:100% 0;border-right-width:0px}.tooltip.left-center[data-v-5016fba7]:before,.tooltip.left[data-v-5016fba7]:before{top:50%;right:0;translate:100% -50%;border-right-width:0px}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right)[data-v-5016fba7]{margin-left:.5rem}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right)[data-v-5016fba7]:before{content:"";border-right-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-5016fba7]:before{content:"";border-right-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.right-top[data-v-5016fba7]:before{top:.75rem;left:0;translate:-100% 0;border-left-width:0px}.tooltip.right-bottom[data-v-5016fba7]:before{bottom:.75rem;left:0;translate:-100% 0;border-left-width:0px}.tooltip.right-center[data-v-5016fba7]:before,.tooltip.right[data-v-5016fba7]:before{top:50%;left:0;translate:-100% -50%;border-left-width:0px}.tooltip.inverted[data-v-5016fba7]{background-color:var(--color-text-primary, oklch(21.049% .032 264.664));color:var(--color-text-inverse, oklch(100% 0 0))}.input-container[data-v-ff1ca5e3]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-ff1ca5e3]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-ff1ca5e3]{stroke:var(--color-danger, oklch(61.535% .2075 25.224))}.input-container.has-error .icon.has-error[data-v-ff1ca5e3]{fill:var(--color-danger, oklch(61.535% .2075 25.224));stroke:var(--color-on-danger, oklch(100% 0 0))}.container-inner[data-v-ff1ca5e3]{width:100%;position:relative}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended)[data-v-ff1ca5e3]{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;z-index:20}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .icon[data-v-ff1ca5e3]{height:1.25rem;width:1.25rem}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .text[data-v-ff1ca5e3]{color:var(--color-field-text, oklch(21.049% .032 264.664));font-size:.875rem;line-height:1.25rem}.container-inner .inline-container-prepended[data-v-ff1ca5e3]{left:1rem}.container-inner .inline-container-appended[data-v-ff1ca5e3]{right:1rem}.input-label[data-v-ff1ca5e3]{font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:flex;font-weight:var(--font-weight-medium, 500)}.input-label .label-text[data-v-ff1ca5e3]{display:flex;gap:.5625rem;align-items:center}.input-label .label-text .info-icon[data-v-ff1ca5e3]{width:.875rem;height:.875rem}.input-label .optional[data-v-ff1ca5e3]{color:var(--color-text-secondary, oklch(55.1% .023 264.36));font-weight:400;margin-left:auto;padding-left:.25rem}.input[data-v-ff1ca5e3]{background-color:var(--color-field-background, oklch(100% 0 0));width:100%;height:2.5rem;border:1px solid var(--color-field-border, oklch(86.277% .0063 264.565));border-radius:.5rem;padding:0 1rem;font-size:.875rem;line-height:1.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));box-sizing:border-box;outline:none;transition:border .2s;appearance:none}.input[data-v-ff1ca5e3]::placeholder{color:var(--color-border-strong, oklch(73.455% .008 264.608))}.input[data-v-ff1ca5e3]:hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.input[data-v-ff1ca5e3]:focus{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));border-width:2px;padding-left:15px;box-shadow:0 0 0 0 var(--color-surface-canvas, oklch(100% 0 0)),0 0 0 1px var(--color-accent, oklch(54.615% .2152 262.881)),0 0 var(--color-text-primary, oklch(21.049% .032 264.664))}.input.has-icon-prepended[data-v-ff1ca5e3]{padding-left:2.5rem}.input.has-icon-prepended[data-v-ff1ca5e3]:focus{padding-left:2.4375rem}.input.has-inline-text[data-v-ff1ca5e3]{padding-right:2.5rem}.input.has-error[data-v-ff1ca5e3]{border-color:var(--color-danger, oklch(61.535% .2075 25.224));color:var(--color-danger-strong, oklch(39.329% .1242 24.368))!important}.input.has-error[data-v-ff1ca5e3]::placeholder{color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.input.has-error[data-v-ff1ca5e3]:focus{border-color:var(--color-danger, oklch(61.535% .2075 25.224));box-shadow:0 0 0 0 var(--color-surface-canvas, oklch(100% 0 0)),0 0 0 1px var(--color-danger, oklch(61.535% .2075 25.224)),0 0 var(--color-text-primary, oklch(21.049% .032 264.664))}.input.is-valid[data-v-ff1ca5e3]{border-color:var(--color-success, oklch(55.106% .1432 149.926));color:var(--color-success-strong, oklch(39.253% .0896 152.535))}.input.is-valid[data-v-ff1ca5e3]::placeholder{color:var(--color-success-strong, oklch(39.253% .0896 152.535))}.input:disabled[data-v-ff1ca5e3]{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important;border-color:var(--color-field-border, oklch(86.277% .0063 264.565))}.input:disabled[data-v-ff1ca5e3]::placeholder{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.input.medium[data-v-ff1ca5e3]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-ff1ca5e3]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-ff1ca5e3]{height:3.5rem;font-size:1rem;line-height:1.5rem}textarea.input[data-v-ff1ca5e3]{padding-top:.75rem;padding-bottom:.75rem}.error[data-v-ff1ca5e3]{color:var(--color-danger-text, oklch(57.004% .2035 26.111));font-size:.875rem;line-height:1.25rem;margin-top:.5rem}.button[data-v-24f66151]{-webkit-appearance:none;appearance:none;height:2.5rem;background-color:transparent;border:0;border-radius:.5rem;padding:0 .75rem;font-weight:500;display:flex;justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;-webkit-user-select:none;user-select:none;color:var(--color-text-primary, oklch(21.049% .032 264.664));cursor:pointer}.button .default-loader[data-v-24f66151],.button .small-loader[data-v-24f66151]{height:1.3rem;width:1.3rem}.button .large-loader[data-v-24f66151]{height:1.5rem;width:1.5rem}.button[data-v-24f66151]:disabled{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))!important;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important;cursor:not-allowed}.button.primary[data-v-24f66151]{color:var(--color-on-primary, oklch(100% 0 0));background-color:var(--color-primary, oklch(54.615% .2152 262.881))}.button.primary[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-primary-hover, oklch(48.82% .2172 264.376))}.button.primary[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-primary-active, oklch(57.034% .1951 261.584))}.button.secondary[data-v-24f66151]{background-color:var(--color-secondary, oklch(100% 0 0));border:1px solid var(--color-secondary-border, oklch(86.277% .0063 264.565));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.button.secondary[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-secondary-hover, oklch(98.477% .0017 247.838));border-color:var(--color-secondary-border-hover, oklch(73.455% .008 264.608))}.button.secondary[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-secondary-pressed, oklch(92.48% .0027 264.541))}.button.secondary[data-v-24f66151]:disabled{border-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.button.tertiary[data-v-24f66151]{background-color:var(--color-tertiary, oklch(96.221% .019 240.333));color:var(--color-tertiary-text, oklch(54.615% .2152 262.881))}.button.tertiary[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-tertiary-hover, oklch(93.192% .0316 255.585))}.button.tertiary[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-tertiary-pressed, oklch(88.234% .0571 254.128))}.button.text[data-v-24f66151]:not(:disabled):hover{background-color:var(--state-hover-overlay)}.button.text[data-v-24f66151]:not(:disabled):focus{background-color:var(--state-active-overlay)}.button.danger[data-v-24f66151]{background-color:var(--color-danger-fill, oklch(57.7% .245 27.325));color:var(--color-on-danger, oklch(100% 0 0))}.button.danger[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-danger-fill-hover, oklch(50.5% .213 27.518))}.button.danger[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-danger-fill-active, oklch(39.329% .1242 24.368))}.button.success[data-v-24f66151]{background-color:var(--color-success-fill, oklch(55.106% .1432 149.926));color:var(--color-on-success, oklch(100% 0 0))}.button.success[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-success-fill-hover, oklch(52.73% .1371 150.069))}.button.success[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-success-fill-active, oklch(39.253% .0896 152.535))}.button.warning[data-v-24f66151]{background-color:var(--color-warning, oklch(58.272% .162 45.983));color:var(--color-on-warning, oklch(100% 0 0))}.button.warning[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-warning-hover, oklch(55.343% .1739 38.402))}.button.warning[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-warning-active, oklch(40.839% .1165 38.172))}.button.url[data-v-24f66151]{background-color:transparent;color:var(--color-accent, oklch(54.615% .2152 262.881));gap:.25rem;height:1.25rem;padding:0}.button.url[data-v-24f66151]:hover{text-decoration:underline}.button.default.has-icon[data-v-24f66151]{padding:.625rem}.button.default .mini-icon[data-v-24f66151]{height:1.25rem;width:1.25rem}.button.default[data-v-24f66151] .mini-icon svg{stroke-width:1.75}.button.small[data-v-24f66151]{height:2rem;padding:0 .75rem}.button.small.has-icon[data-v-24f66151]{border-radius:9999px;width:2rem}.button.small .mini-icon[data-v-24f66151]{height:1rem;width:1rem}.button.small[data-v-24f66151] .mini-icon svg{stroke-width:2}.button.medium[data-v-24f66151]{height:3rem;padding:0 1rem;font-size:1rem;line-height:1.5rem}.button.medium .mini-icon[data-v-24f66151]{height:1.5rem;width:1.5rem}.button.medium.has-icon[data-v-24f66151]{padding:.75rem}.button.large[data-v-24f66151]{height:3.5rem;padding:0 1.75rem;font-size:1rem;line-height:1.5rem}.button.large .mini-icon[data-v-24f66151]{height:1.5rem;width:1.5rem}.button.large.has-icon[data-v-24f66151]{padding:1.25rem}.hotkey[data-v-24f66151]{margin-left:.25rem}h1[data-v-2c80c3d1],h2[data-v-2c80c3d1],h3[data-v-2c80c3d1],h4[data-v-2c80c3d1],h5[data-v-2c80c3d1],h6[data-v-2c80c3d1]{font-weight:600;margin:0}h1[data-v-2c80c3d1],h2[data-v-2c80c3d1]{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h3[data-v-2c80c3d1],h4[data-v-2c80c3d1],h5[data-v-2c80c3d1],h6[data-v-2c80c3d1]{font-family:var(--font-sans)}h1[data-v-2c80c3d1]{font-size:1.75rem;letter-spacing:-.8px;line-height:2.25rem}h2[data-v-2c80c3d1]{font-size:1.25rem;letter-spacing:-.2px;line-height:1.75rem}h3[data-v-2c80c3d1]{font-size:1rem;line-height:1.5rem}h4[data-v-2c80c3d1]{font-size:.875rem;line-height:1.25rem}h5[data-v-2c80c3d1]{font-size:.875rem;line-height:1.25rem;font-weight:500}h6[data-v-2c80c3d1]{font-size:.75rem;line-height:1rem}@keyframes minimizedAnimation-69ff7208{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-69ff7208{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-69ff7208{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.dark .modal[data-v-69ff7208]{color:var(--color-body-text)}.modal[data-v-69ff7208]{width:100%;max-width:48rem;border-radius:1.5rem;overflow:hidden;transform:translateY(2.5rem);transition:all .5s ease-in-out;opacity:0;box-shadow:0 0 0 100vmax #0a0a0a80;background-color:var(--color-parent-bg);margin:auto}@media(prefers-reduced-motion){.modal[data-v-69ff7208]{transition:none}}.modal[data-v-69ff7208]::backdrop{background-color:transparent}.modal.open[data-v-69ff7208]{transform:translateY(0);opacity:1;display:block}.modal.minimized[data-v-69ff7208]{width:100%;margin-bottom:1.25rem;border:1px solid #e5e7eb;animation:minimizedAnimation-69ff7208 1.3s forwards}@media(prefers-reduced-motion){.modal.minimized[data-v-69ff7208]{animation:none}}.modal.minimized .inner[data-v-69ff7208]{overflow-y:hidden}.modal.minimized .inner .header[data-v-69ff7208]{padding:1rem;overflow-y:hidden}.modal.minimized .inner .header .title[data-v-69ff7208-s]{margin-top:1rem;font-size:1rem;line-height:1.5rem}.modal.maximized[data-v-69ff7208]{animation:maximizedAnimation-69ff7208 1.3s forwards}@media(prefers-reduced-motion){.modal.maximized[data-v-69ff7208]{animation:none}}.modal.fullscreen .inner[data-v-69ff7208]{height:100%;min-height:0;overflow-y:auto}.modal.fullscreen .inner .header[data-v-69ff7208]{padding:2rem 1rem;border-top-left-radius:1rem;border-top-right-radius:1rem;justify-content:flex-start}.modal.fullscreen .inner .content[data-v-69ff7208]{padding:0 0 .5rem}.modal.fullscreen .inner .footer[data-v-69ff7208]{margin-top:auto;box-shadow:0 10px 15px #0000001a}@media screen and (min-width:640px){.modal.fullscreen .inner .footer[data-v-69ff7208]{margin-inline:5.75rem;border-radius:1rem;margin-bottom:1.25rem}}.modal.fullscreen:not(.minimized)[data-v-69ff7208]{height:calc(100vh - 3.5rem);margin-top:3.5rem;max-width:100%;overflow:visible;border-bottom-left-radius:0;border-bottom-right-radius:0}@media screen and (min-width:640px){.modal.fullscreen:not(.minimized) .header[data-v-69ff7208],.modal.fullscreen:not(.minimized) .content[data-v-69ff7208]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen:not(.minimized)[data-v-69ff7208]:modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-69ff7208]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-69ff7208]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-69ff7208]{width:100%;background-color:#f9fafb}.modal:not(.fullscreen) .footer.footer-shadow[data-v-69ff7208]{filter:drop-shadow(0 -1px 2px rgba(0,0,0,.1)) drop-shadow(0 -1px 1px rgba(0,0,0,.06))}.dark :is(.modal:not(.fullscreen) .footer)[data-v-69ff7208]{background-color:var(--color-child)}.modal.persistent-animation[data-v-69ff7208]{animation:horizontal-shaking-69ff7208 .3s ease-in-out}.modal .actions[data-v-69ff7208]{position:absolute;top:-3.5rem;width:100%;height:3.5rem;display:flex;justify-content:flex-end;align-items:center;padding:0 .5625rem}.modal .actions .minimize[data-v-69ff7208],.modal .actions .close[data-v-69ff7208]{font-size:.875rem;line-height:1.25rem;padding:0 .9375rem;color:#fff}.modal .inner[data-v-69ff7208]{display:flex;flex-direction:column;min-height:fit-content}.modal .inner .header[data-v-69ff7208]{display:flex;align-items:center;background-color:var(--color-parent-bg)}.modal .inner .header.header-shadow[data-v-69ff7208]{filter:drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))}.modal .inner .header>.close[data-v-69ff7208]{margin-left:auto}.modal .inner .header>.close[data-v-69ff7208]:focus-visible{background-color:var(--color-secondary-hover)}.modal .inner .header .minimized-actions[data-v-69ff7208]{display:flex;flex-direction:column;gap:.5rem;margin-left:auto}.modal .inner .title[data-v-69ff7208],.modal .inner.title[data-v-69ff7208-s]{font-weight:700;font-size:1.25rem}.modal .inner .content[data-v-69ff7208]{padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem;overflow-y:auto}.modal .inner .content .loader[data-v-69ff7208]{margin:0 auto;width:2.5rem;height:2.5rem}.modal .inner .footer[data-v-69ff7208]{display:flex;gap:.5rem;justify-content:center;padding:1.5rem 1rem;z-index:10;background-color:var(--color-child)}.dark :is(.modal .inner .footer)[data-v-69ff7208]{background-color:var(--color-child)}.confirm-modal[data-v-8e75fc96]{max-width:var(--container-lg, 32rem)}.confirm-modal .indicator-icon[data-v-8e75fc96]{margin-inline:auto;width:fit-content;border-radius:50%;padding:.75rem}.confirm-modal .indicator-icon.danger[data-v-8e75fc96]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.confirm-modal .indicator-icon.info[data-v-8e75fc96]{background-color:var(--color-info-soft, oklch(96.221% .019 240.333));color:var(--color-info, oklch(62.538% .1804 219.935))}.confirm-modal .indicator-icon .icon[data-v-8e75fc96]{height:2rem;width:2rem}.confirm-modal .title[data-v-8e75fc96]{margin-top:1rem;margin-bottom:.75rem!important;text-align:center}.confirm-modal .message[data-v-8e75fc96]{text-align:center}.confirm-modal[data-v-8e75fc96] .content{padding-inline:2rem!important}.confirm-modal[data-v-8e75fc96] .content p{margin:0}.summary-group[data-v-c6727d6f]{padding-block:.5rem}.summary-group .header[data-v-c6727d6f]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.summary-group .header.increase-margin[data-v-c6727d6f]{margin-bottom:.5rem}.summary-group .header.expandable[data-v-c6727d6f]{cursor:pointer}.summary-group .header .name[data-v-c6727d6f]{overflow:hidden;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);text-overflow:ellipsis;white-space:nowrap}.summary-group .header[data-v-c6727d6f] .icon{height:1.25rem;width:1.25rem}.summary-group .items[data-v-c6727d6f]{display:flex;flex-direction:column;gap:.5rem;border-left-style:solid;border-left-width:4px;padding-block:.5rem;padding-left:1rem;animation:fadeIn-c6727d6f .3s}.grow-enter-active[data-v-c6727d6f],.grow-leave-active[data-v-c6727d6f]{transition-property:all;transition-duration:.3s;transition-timing-function:var(--default-transition-timing-function)}.grow-enter-from[data-v-c6727d6f],.grow-leave-to[data-v-c6727d6f]{height:0!important;padding-block:0!important;opacity:0%!important}@keyframes fadeIn-c6727d6f{0%{opacity:0}to{opacity:1}}.summary-item[data-v-477cd514]{overflow:hidden;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));text-overflow:ellipsis;white-space:nowrap}.summary-item [data-v-477cd514] .summary-link:hover{text-decoration-line:underline}.action-button[data-v-4ce2ffa6]{position:relative;margin:0;display:inline-flex;height:3.5rem;width:3.5rem;cursor:pointer;align-items:center;justify-content:center;border-radius:50%;border-style:none;background-color:var(--color-primary, oklch(54.615% .2152 262.881));padding:0;outline-style:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(forced-colors:active){.action-button[data-v-4ce2ffa6]{outline:2px solid transparent;outline-offset:2px}}@media(hover:hover){.action-button[data-v-4ce2ffa6]:hover{background-color:var(--color-primary-hover, oklch(48.82% .2172 264.376))}}.action-button[data-v-4ce2ffa6]:focus{background-color:var(--color-primary-hover, oklch(48.82% .2172 264.376))}.action-button[data-v-4ce2ffa6]:active{background-color:var(--color-primary-active, oklch(57.034% .1951 261.584))}.action-button[disabled][data-v-4ce2ffa6]{pointer-events:none;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.action-button[disabled] .icon[data-v-4ce2ffa6]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.action-button.floating[data-v-4ce2ffa6]{position:fixed;right:0;bottom:0;z-index:50;margin-right:1.5rem;margin-bottom:1.5rem;box-shadow:var(--shadow-menu-large)}.action-button .icon[data-v-4ce2ffa6]{color:var(--color-on-primary, oklch(100% 0 0))}.copy-button[data-v-da33eefe]{display:inline-flex;flex-direction:row;align-items:center;gap:.5rem;border-radius:var(--radius-lg, .5rem);background-color:var(--color-accent-soft, oklch(96.221% .019 240.333));padding-inline:.5rem;padding-block:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--text-sm--line-height, calc(1.25 / .875));font-weight:var(--font-weight-normal, 400);color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(hover:hover){.copy-button[data-v-da33eefe]:hover{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}}.copy-button[data-v-da33eefe]:active{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.copy-button .micro-icon[data-v-da33eefe] svg{stroke-width:2}.check-icon[data-v-da33eefe]{color:var(--color-success-text, oklch(52.73% .1371 150.069))}.copy-icon-button[data-v-da33eefe]{width:fit-content;border-radius:var(--radius-lg, .5rem)!important}.copy-icon-button.small[data-v-da33eefe]{height:2rem;padding-inline:.5rem}.copy-icon-button.small .micro-icon[data-v-da33eefe] svg{stroke-width:2}.copy-icon-button.medium[data-v-da33eefe]{height:2.5rem;padding-inline:.625rem}.copy-icon-button.medium .mini-icon[data-v-da33eefe]{height:1.25rem;width:1.25rem}.copy-icon-button.large[data-v-da33eefe]{height:3rem;padding-inline:.75rem}.segment[data-v-3ddcfe25]{z-index:10;overflow-wrap:break-word}@media screen and (max-width:640px){.segment[data-v-3ddcfe25]{word-break:break-all}}.segment:not(.button-segment).active[data-v-3ddcfe25]{color:var(--color-tertiary-text, oklch(54.615% .2152 262.881))}.segment.button-segment[data-v-3ddcfe25]{font-weight:var(--font-weight-normal, 400)}.segment.button-segment.active[data-v-3ddcfe25]{border:2px solid var(--color-accent, oklch(54.615% .2152 262.881));padding-inline:.6875rem}.segmented-control.default[data-v-251406ea]{position:relative;display:grid;grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;gap:.25rem;border-radius:var(--radius-xl, .75rem);background-color:var(--color-parent-bg, oklch(100% 0 0));padding:.25rem}.segmented-control.default .highlight[data-v-251406ea]{pointer-events:none;position:absolute;inset-inline-start:.25rem;top:.25rem;bottom:.25rem;margin-inline-start:0!important;border-radius:var(--radius-lg, .5rem);background-color:var(--color-child, oklch(100% 0 0));box-shadow:var(--shadow-menu);transition-duration:.2s}.segmented-control.buttons[data-v-251406ea]{display:flex;flex-direction:row;gap:.5rem}.switch[data-v-42e36626]{-webkit-appearance:none;appearance:none;background-color:var(--color-control-track-off, oklch(92.48% .0027 264.541));position:relative;display:inline-flex;height:1.5rem;width:2.75rem;flex-shrink:0;align-items:center;justify-content:flex-start;padding:0;cursor:pointer;border-radius:9999px;border:2px solid transparent;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;outline:none}.switch[data-v-42e36626]:focus{box-shadow:#0000 0 0,#0000 0 0,#fff 0 0 0 2px,#2563eb 0 0 0 4px,#0000 0 0}.switch.enabled[data-v-42e36626]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))!important}.switch:disabled[data-v-42e36626]{filter:grayscale(1);cursor:not-allowed}.switch:disabled .dot[data-v-42e36626]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important}.switch .dot[data-v-42e36626]{pointer-events:none;display:inline-block;height:1.25rem;width:1.25rem;transform:translate(0);border-radius:9999px;background-color:var(--color-on-accent, oklch(100% 0 0));box-shadow:var(--shadow-container);transition:transform .2s ease-in-out,background-color .2s ease-in-out}.switch .dot.enabled[data-v-42e36626]{transform:translate(1.25rem)}.theme-toggle[data-v-3e1c56fe]{display:flex;align-items:center;gap:.5rem}.theme-toggle .light[data-v-3e1c56fe],.theme-toggle .dark[data-v-3e1c56fe]{color:#fde047}.accordion-item[data-v-17b37b7b]{width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-container);overflow:hidden}@media(min-width:640px){.accordion-item[data-v-17b37b7b]{border-radius:1rem}}.accordion-item .header[data-v-17b37b7b]{width:100%;display:flex;align-items:center;padding:1rem;background-color:inherit;border:none}.accordion-item .header[data-v-17b37b7b]:focus{background-color:var(--color-surface-subtle, oklch(100% 0 0))}@media(min-width:640px){.accordion-item .header[data-v-17b37b7b]{padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.accordion-item .header .state-indicator[data-v-17b37b7b]{margin-left:auto;padding-left:.5rem}.accordion-item .header .state-indicator .icon[data-v-17b37b7b]{color:var(--color-accent, oklch(54.615% .2152 262.881));transform:rotate(0);transition:transform .3s linear}.accordion-item .header .state-indicator.open[data-v-17b37b7b]{transform:rotate(180deg);padding-left:0;padding-right:.5rem}.accordion-item .header .title[data-v-17b37b7b],.accordion-item .header .title[data-v-17b37b7b-s]{text-align:left;font-weight:500;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.accordion-item .content[data-v-17b37b7b]{padding-bottom:1.5rem;padding-top:0;padding-left:1rem;padding-right:1rem}@media(min-width:640px){.accordion-item .content[data-v-17b37b7b]{padding-left:1.5rem;padding-right:1.5rem}}.grow-enter-active[data-v-17b37b7b],.grow-leave-active[data-v-17b37b7b]{transition:all .3s ease-in-out}.fade-enter-active[data-v-17b37b7b],.fade-leave-active[data-v-17b37b7b]{transition:all .1s ease-in-out}.grow-enter-from[data-v-17b37b7b],.grow-leave-to[data-v-17b37b7b]{height:0!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-17b37b7b],.fade-leave-to[data-v-17b37b7b]{opacity:0;height:0!important}.accordion[data-v-25a8f65e]{display:flex;flex-direction:column;gap:.125rem}@media(min-width:640px){.accordion[data-v-25a8f65e]{gap:.5rem}}.amount-input-container[data-v-44d789fb]{display:flex;flex-direction:column}.amount-input[data-v-44d789fb]{display:flex;height:2.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.amount-input.small[data-v-44d789fb]{height:2rem}.amount-input.small .minus[data-v-44d789fb],.amount-input.small .plus[data-v-44d789fb]{width:2rem}.input[data-v-44d789fb],.minus[data-v-44d789fb],.plus[data-v-44d789fb]{border-width:1px;border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.input[data-v-44d789fb]:disabled,.minus[data-v-44d789fb]:disabled,.plus[data-v-44d789fb]:disabled{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.input[data-v-44d789fb]:disabled{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.minus[data-v-44d789fb]:disabled,.plus[data-v-44d789fb]:disabled{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.minus[data-v-44d789fb]:hover:not(:disabled),.plus[data-v-44d789fb]:hover:not(:disabled){z-index:20;border-color:var(--color-border-strong, oklch(73.455% .008 264.608));background-color:var(--color-surface-subtle, oklch(100% 0 0))}.minus[data-v-44d789fb]:focus:not(:disabled),.plus[data-v-44d789fb]:focus:not(:disabled){z-index:20;border-color:var(--color-border-strong, oklch(73.455% .008 264.608));background-color:var(--color-surface-subtle, oklch(100% 0 0))}.input[data-v-44d789fb]{z-index:10;margin-inline:-.0625rem;width:3.5rem;background-color:var(--color-field-background, oklch(100% 0 0));text-align:center;font-weight:var(--font-weight-normal, 400)}.input[data-v-44d789fb]:hover:not(:disabled):not(.has-error){border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.input[data-v-44d789fb]:focus:not(:disabled){border-width:2px}.input[data-v-44d789fb]:focus-visible{outline-style:none}@media(forced-colors:active){.input[data-v-44d789fb]:focus-visible{outline:2px solid transparent;outline-offset:2px}}.input[data-v-44d789fb]:focus:not(:disabled):not(.has-error){border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.input.has-error[data-v-44d789fb],.input.has-error[data-v-44d789fb]:focus{border-color:var(--color-danger, oklch(61.535% .2075 25.224))}.minus[data-v-44d789fb],.plus[data-v-44d789fb]{display:flex;width:2.5rem;align-items:center;justify-content:center;background-color:var(--color-field-background, oklch(100% 0 0))}.minus[data-v-44d789fb]{border-top-left-radius:var(--radius-lg, .5rem);border-bottom-left-radius:var(--radius-lg, .5rem)}.plus[data-v-44d789fb]{border-top-right-radius:var(--radius-lg, .5rem);border-bottom-right-radius:var(--radius-lg, .5rem)}.input[data-v-44d789fb]::-webkit-outer-spin-button,.input[data-v-44d789fb]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-44d789fb]{-moz-appearance:textfield}.error[data-v-44d789fb]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.status[data-v-aa0d87a4]{background-color:var(--color-surface-disabled-subtle, oklch(98.498% .0018 247.859));height:1.5rem;width:1.5rem;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.dark .status[data-v-aa0d87a4]{background-color:var(--color-field-background, oklch(100% 0 0))}.status.done[data-v-aa0d87a4]{background-color:var(--color-success-soft, oklch(98.135% .0124 149.917))}.dark .status.done[data-v-aa0d87a4]{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.done .micro-icon[data-v-aa0d87a4]{color:var(--color-success, oklch(55.106% .1432 149.926))}.dark .done .micro-icon[data-v-aa0d87a4]{color:var(--color-on-success, oklch(100% 0 0))}.status.attention[data-v-aa0d87a4]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.attention .micro-icon[data-v-aa0d87a4]{color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.dark .attention .micro-icon[data-v-aa0d87a4]{color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.alert[data-v-bd0367f1]{padding:1rem;border-radius:.5rem;display:flex}.alert.error[data-v-bd0367f1]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.alert.error .icon .mini-icon[data-v-bd0367f1]{color:var(--color-danger, oklch(61.535% .2075 25.224))}.alert.error .content .title[data-v-bd0367f1]{color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.alert.error .content .description[data-v-bd0367f1]{color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.alert.warning[data-v-bd0367f1]{background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.alert.warning .icon .mini-icon[data-v-bd0367f1]{color:var(--color-warning, oklch(58.272% .162 45.983))}.alert.warning .content .title[data-v-bd0367f1]{color:var(--color-warning-strong, oklch(40.839% .1165 38.172))}.alert.warning .content .description[data-v-bd0367f1]{color:var(--color-warning-text, oklch(55.343% .1739 38.402))}.alert.success[data-v-bd0367f1]{background-color:var(--color-success-soft, oklch(98.135% .0124 149.917))}.alert.success .icon .mini-icon[data-v-bd0367f1]{color:var(--color-success, oklch(55.106% .1432 149.926))}.alert.success .content .title[data-v-bd0367f1]{color:var(--color-success-strong, oklch(39.253% .0896 152.535))}.alert.success .content .description[data-v-bd0367f1]{color:var(--color-success-text, oklch(52.73% .1371 150.069))}.alert.info[data-v-bd0367f1]{background-color:var(--color-info-soft, oklch(96.221% .019 240.333))}.alert.info .icon .mini-icon[data-v-bd0367f1]{color:var(--color-info, oklch(62.538% .1804 219.935))}.alert.info .content .title[data-v-bd0367f1]{color:var(--color-info-strong, oklch(30.152% .1159 260.405))}.alert.info .content .description[data-v-bd0367f1]{color:var(--color-info-text, oklch(48.727% .2427 215.855))}.alert .icon[data-v-bd0367f1]{margin-right:.75rem}.alert .content[data-v-bd0367f1]{display:flex;flex-direction:column;font-size:.875rem;line-height:1.25rem;justify-content:center;gap:.25rem}.alert .content .title[data-v-bd0367f1]{font-weight:500}.configurator-step.simple[data-v-cf6c5c3d]{width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-container);overflow:hidden}@media(min-width:640px){.configurator-step.simple[data-v-cf6c5c3d]{border-radius:1rem}}.configurator-step.simple .content[data-v-cf6c5c3d]{padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0}@media(min-width:640px){.configurator-step.simple .content[data-v-cf6c5c3d]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header[data-v-cf6c5c3d]{display:flex;width:100%;align-items:flex-start;padding:1rem;background-color:inherit;border:none}@media(min-width:640px){.configurator-step.simple .header[data-v-cf6c5c3d]{align-items:center;padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.configurator-step.simple .header .title[data-v-cf6c5c3d]{text-align:left;font-weight:500;color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(min-width:640px){.configurator-step.simple .header .title[data-v-cf6c5c3d]{white-space:nowrap}}.configurator-step.simple .inner[data-v-cf6c5c3d]{display:flex;flex-direction:column;row-gap:1rem;flex-shrink:1}@media(min-width:640px){.configurator-step.simple .inner[data-v-cf6c5c3d]{flex-direction:row;align-items:center}}.configurator-step.simple .measurements-form[data-v-cf6c5c3d]{gap:1rem;display:flex;flex-direction:column}.configurator-step.simple .measurements-form .submit-button[data-v-cf6c5c3d]{width:100%}.configurator-step.simple .measurement-inputs[data-v-cf6c5c3d]{display:flex;gap:.625rem;align-items:center;flex-wrap:wrap}@media(min-width:640px){.configurator-step.simple .measurement-inputs[data-v-cf6c5c3d]{flex-wrap:nowrap}}.configurator-step.simple .measurement-inputs.has-errors[data-v-cf6c5c3d]{align-items:flex-start!important}.configurator-step.simple .measurement-inputs.has-errors .separator[data-v-cf6c5c3d]{margin-top:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.configurator-step.simple .total[data-v-cf6c5c3d]{margin-left:auto;flex-grow:1;color:var(--color-text-disabled, oklch(51.786% .0108 264.705));text-align:right}.configurator-step.simple .status-text[data-v-cf6c5c3d]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));width:100%;text-align:right}@media(min-width:640px){.configurator-step.simple .status-text[data-v-cf6c5c3d]{text-align:left}}.configurator-step.simple[data-v-cf6c5c3d] .input::-webkit-outer-spin-button,.configurator-step.simple[data-v-cf6c5c3d] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple[data-v-cf6c5c3d] .input[type=number]{-moz-appearance:textfield}.measurement-inputs[data-v-cf6c5c3d] .measurement-input{max-width:7rem;width:100%}img[data-v-a966f45d]{max-width:100%;display:block}.image-wrapper.has-caption[data-v-a966f45d]{display:flex;flex-direction:column;align-items:center;gap:.5rem}.image-wrapper.has-caption figcaption[data-v-a966f45d]{font-size:.875rem;font-style:italic}.image-wrapper[data-v-a966f45d]{width:100%}.image-inner[data-v-a966f45d]{width:fit-content}.image-inner[data-v-a966f45d],.image-wrapper[data-v-a966f45d]{height:100%}.image[data-v-a966f45d]{max-height:100%}.image.rounded-4[data-v-a966f45d],.skeleton.rounded-4[data-v-a966f45d]{border-radius:.25rem}.image.rounded-8[data-v-a966f45d],.skeleton.rounded-8[data-v-a966f45d]{border-radius:.5rem}.image.rounded-16[data-v-a966f45d],.skeleton.rounded-16[data-v-a966f45d]{border-radius:1rem}.image.rounded-100[data-v-a966f45d],.skeleton.rounded-100[data-v-a966f45d]{border-radius:50%}.image-wrapper .skeleton[data-v-a966f45d]{width:100%;height:100%;background-color:var(--color-border-default, oklch(86.277% .0063 264.565));animation:var(--animate-pulse)}.labels[data-v-caa4e54a]{position:absolute;top:.75rem;right:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end;z-index:10}.dark .labels[data-v-caa4e54a]{--color-tag-info-soft-bg: oklch(93.192% .0316 255.585);--color-tag-info-soft-text: oklch(48.82% .2172 264.376);--color-tag-success-soft-bg: oklch(96.241% .0434 156.743);--color-tag-success-soft-text: oklch(52.73% .1371 150.069);--color-tag-neutral-soft-bg: oklch(96.696% .0029 264.542);--color-tag-neutral-soft-text: oklch(37.293% .0306 259.733);--color-tag-warning-orange-soft-bg: oklch(95.42% .0372 75.164);--color-tag-warning-orange-soft-text: oklch(55.343% .1739 38.402);--color-tag-accent-soft-bg: oklch(94.643% .0327 307.174);--color-tag-accent-soft-text: oklch(49.552% .2369 301.924);--color-tag-danger-soft-bg: oklch(93.564% .0309 17.717);--color-tag-danger-soft-text: oklch(50.542% .1905 27.518);--color-tag-warning-yellow-soft-bg: oklch(97.292% .0693 103.193);--color-tag-warning-yellow-soft-text: oklch(55.378% .1207 66.442)}[data-v-caa4e54a] .image{object-fit:cover;height:100%;width:100%}.amount[data-v-caa4e54a]{display:flex;flex-direction:column;align-items:center;gap:.5rem;margin-top:2.75rem;color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.amount span[data-v-caa4e54a]{font-size:.875rem;line-height:1.25rem}.information[data-v-95b1dd81],.custom-value[data-v-95b1dd81]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;line-height:1rem}.custom-value[data-v-95b1dd81]{gap:1rem}.custom-value[data-v-95b1dd81] .input-container,.custom-value[data-v-95b1dd81] .button{max-width:7.25rem;width:100%}.information .delivery[data-v-95b1dd81]{color:var(--color-success-text, oklch(52.73% .1371 150.069));display:flex;gap:.25rem;align-items:center}.information .delivery .icon[data-v-95b1dd81]{height:1rem;width:1rem}.information .delivery .icon[data-v-95b1dd81] svg{stroke-width:2}.information .delivery .delivery-time[data-v-95b1dd81]{font-weight:500}.information .price[data-v-95b1dd81]{color:var(--color-danger-text, oklch(57.004% .2035 26.111));margin-left:auto}.dark .information .price[data-v-95b1dd81]{color:var(--color-danger-muted, oklch(.808 .114 19.571))}.price .price-per[data-v-95b1dd81]{color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.not-available[data-v-95b1dd81]{color:var(--color-danger-text, oklch(57.004% .2035 26.111));display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem}.option-card[data-v-bd75f725]{outline:1px solid var(--color-field-border, oklch(86.277% .0063 264.565));border-radius:.5rem;width:17.5rem;cursor:pointer;background-color:var(--color-surface-raised-alt, oklch(100% 0 0));min-height:16.5rem;display:flex;justify-content:center;overflow:hidden}.option-card[data-v-bd75f725]:hover,.option-card[data-v-bd75f725]:focus{box-shadow:var(--shadow-card-hover)}.option-card[data-v-bd75f725]:focus:not(.selected):not(.disabled){outline:3px dotted var(--color-accent, oklch(54.615% .2152 262.881))}.option-card.selected[data-v-bd75f725]{outline:3px solid var(--color-accent, oklch(54.615% .2152 262.881))!important}.option-card.disabled[data-v-bd75f725]{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));cursor:default}.option-card.disabled[data-v-bd75f725]:hover{box-shadow:none}.option-card.disabled .content[data-v-bd75f725] *{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important}.option-card.disabled .header[data-v-bd75f725],.option-card.disabled .content[data-v-bd75f725]{filter:grayscale(100%)}.option-card .inner[data-v-bd75f725]{width:100%}.no-option[data-v-bd75f725]{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.no-option[data-v-bd75f725] .icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));height:3.5rem;width:3.5rem;margin-bottom:1rem}.no-option h3[data-v-bd75f725]{font-size:.875rem;line-height:1.25rem;font-weight:400}.header[data-v-bd75f725]{height:10.25rem;width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));position:relative;border-radius:.5rem .5rem 0 0;display:flex;justify-content:center}.option-card .content[data-v-bd75f725]{padding:1rem 1rem .75rem}.content .title[data-v-bd75f725]{font-weight:500;padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.content .description[data-v-bd75f725]{font-size:.75rem;line-height:1rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.option-card .footer[data-v-bd75f725]{padding:0 1rem 1rem;font-size:.875rem;line-height:1.25rem}.overlay[data-v-66d42f70]{position:absolute;z-index:10;width:100%;height:100%;inset:0;pointer-events:auto}.overlay.fixed[data-v-66d42f70]{position:fixed!important;z-index:1000}.option-step-container[data-v-16221ffd]{position:relative}.configurator-step.options[data-v-16221ffd] .content{padding-right:0}@media(min-width:640px){.configurator-step.options[data-v-16221ffd] .content{padding-right:1.5rem}}.configurator-step.options[data-v-16221ffd] .header .state-indicator{display:none}@media(min-width:640px){.configurator-step.options[data-v-16221ffd] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-16221ffd]{display:flex;gap:1rem;flex-wrap:wrap;padding-top:.25rem;padding-bottom:.25rem;justify-content:center}@media(min-width:640px){.configurator-step.options .option-container[data-v-16221ffd]{justify-content:flex-start}}.option-container .option[data-v-16221ffd]{position:relative;display:flex;min-width:auto}@media(min-width:640px){.option-container.show-all[data-v-16221ffd]{flex-wrap:wrap}.option-container .option[data-v-16221ffd]{min-width:0}.option-container .option[data-v-16221ffd]:last-child{margin-right:0}}.option-container .option[data-v-16221ffd]:last-child{margin-right:1rem}.option.hide[data-v-16221ffd]{display:flex}@media(min-width:640px){.option.hide[data-v-16221ffd]{display:none}}.option .option-card[data-v-16221ffd]{flex-shrink:0}@media(min-width:640px){.option .option-card[data-v-16221ffd]{flex-shrink:1}}.option-container .overlay[data-v-16221ffd]{position:absolute;right:0;bottom:0;width:100%;height:100%;border-radius:.5rem;display:none;align-items:center;justify-content:center;color:var(--color-text-inverse, oklch(100% 0 0));font-size:2.25rem;cursor:pointer}@media(min-width:640px){.option-container .overlay[data-v-16221ffd]{display:flex}}.configurator-step.options .subtitle[data-v-16221ffd]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.configurator-step.options .alert[data-v-16221ffd]{margin-top:1rem;margin-right:1rem}@media(min-width:640px){.configurator-step.options .alert[data-v-16221ffd]{margin-right:0}}.edit-button[data-v-16221ffd]{position:absolute;top:1.25rem;right:3.125rem}.delivery-options[data-v-6eb4b6f9]{width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-container);padding:1rem;margin-top:.125rem}@media(min-width:640px){.delivery-options[data-v-6eb4b6f9]{border-radius:1rem;margin-top:.5rem}}@media(min-width:768px){.delivery-options[data-v-6eb4b6f9]{padding:1.5rem}}.header[data-v-6eb4b6f9]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-6eb4b6f9]{font-weight:500;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header .hint[data-v-6eb4b6f9]{color:var(--color-text-secondary, oklch(55.1% .023 264.36));display:none;line-height:1.5rem}@media(min-width:768px){.header .hint[data-v-6eb4b6f9]{display:flex}}.content[data-v-6eb4b6f9]{display:flex;flex-direction:column;gap:1rem;flex-wrap:wrap}@media(min-width:768px){.content[data-v-6eb4b6f9]{flex-direction:row;gap:1.5rem}}.content .option[data-v-6eb4b6f9]{display:flex;flex-direction:column;position:relative}.content .option[data-v-6eb4b6f9]:not(.last){border-bottom:1px solid var(--color-divider, oklch(92.48% .0027 264.541));padding-bottom:1rem}@media(min-width:768px){.content .option[data-v-6eb4b6f9]:not(.last){border-bottom:none;padding-bottom:0}}@media(min-width:768px){.content .option[data-v-6eb4b6f9]:not(:first-child){border-left:1px solid var(--color-divider, oklch(92.48% .0027 264.541));padding-left:1.0625rem}}.content .option.hide[data-v-6eb4b6f9]{display:none}.content .option .day[data-v-6eb4b6f9],.content .option .cost[data-v-6eb4b6f9],.content .option .no-cost[data-v-6eb4b6f9]{font-size:.875rem;line-height:1.25rem}.content .option .cost[data-v-6eb4b6f9],.content .option .no-cost[data-v-6eb4b6f9]{position:absolute;top:0;right:0}@media(min-width:768px){.content .option .cost[data-v-6eb4b6f9],.content .option .no-cost[data-v-6eb4b6f9]{position:relative}}.content .option .day[data-v-6eb4b6f9]{margin-bottom:.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));text-transform:capitalize;display:flex;flex-wrap:wrap;gap:.25rem .5rem;align-items:center}.content .option .date[data-v-6eb4b6f9]{font-weight:500;font-size:1.25rem;line-height:1.75rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(min-width:768px){.content .option .date[data-v-6eb4b6f9]{margin-bottom:.75rem}}.content .option .cost[data-v-6eb4b6f9]{color:var(--color-success-text, oklch(52.73% .1371 150.069))}.content .option .no-cost[data-v-6eb4b6f9]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.content .button[data-v-6eb4b6f9]{display:block}@media(min-width:768px){.content .button[data-v-6eb4b6f9]{display:none}}.drawer[data-v-c56d11e1]{background-color:var(--color-surface-page, oklch(100% 0 0));position:fixed;inset:0 auto 0 0;box-shadow:var(--shadow-menu-large);transition:transform .3s var(--default-transition-timing-function);overflow:hidden;color:var(--color-text-primary, oklch(21.049% .032 264.664));max-width:80%;width:auto;height:100vh;min-height:100vh;max-height:100vh}.drawer[data-v-c56d11e1]::backdrop{background-color:color-mix(in oklch,var(--color-overlay-backdrop, color-mix(in oklch, oklch(0% 0 0) 50%, transparent)) calc(var(--drawer-backdrop-opacity, .5) * 100%),transparent);transition:background-color .3s ease}.drawer.no-overlay[data-v-c56d11e1]{z-index:99}.drawer.no-overlay[data-v-c56d11e1]::backdrop{background-color:transparent}.drawer.full-width[data-v-c56d11e1]{width:100%;max-width:100%}.drawer.left[data-v-c56d11e1]{left:0;right:auto;transform:translate(-100%)}.drawer.left.open[data-v-c56d11e1]{transform:translate(0)}.drawer.right[data-v-c56d11e1]{left:auto;right:0;transform:translate(100%)}.drawer.right.open[data-v-c56d11e1]{transform:translate(0)}.drawer.bottom[data-v-c56d11e1]{inset:auto 0 0;width:100%;max-width:100%;min-height:auto;height:auto;max-height:min(90vh,100dvh);display:flex;flex-direction:column;border-top-left-radius:.75rem;border-top-right-radius:.75rem;transform:translateY(100%)}.drawer.bottom.open[data-v-c56d11e1]{transform:translateY(0)}.drawer.bottom .wrapper[data-v-c56d11e1]{height:auto;max-height:inherit}.drawer.bottom .header[data-v-c56d11e1],.drawer.bottom .content[data-v-c56d11e1]{padding:1rem}.drawer.bottom .content[data-v-c56d11e1]{padding-top:0;max-height:inherit;overflow-y:auto}.drawer .wrapper[data-v-c56d11e1]{position:relative;height:100%;overflow:hidden;display:flex;flex-direction:column}.drawer .header[data-v-c56d11e1]{display:flex;justify-content:space-between;align-items:center;gap:1.5rem;padding:1.25rem}.drawer .header .title[data-v-c56d11e1]{font-size:1.25rem;line-height:1.75rem}.drawer .header .close[data-v-c56d11e1]{transform:translate(.625rem)}.drawer .content[data-v-c56d11e1]{padding-left:1.25rem;padding-right:1.25rem;flex-grow:1;overflow-y:auto}.form-row[data-v-7a247590]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem;padding-block:1.5rem}@media(min-width:48rem){.form-row[data-v-7a247590]{flex-direction:row}}@media(min-width:48rem){.form-row[data-v-7a247590]{gap:5.25rem}}@media(min-width:48rem){.form-row[data-v-7a247590]{padding-block:2.5rem}}.form-row[data-v-7a247590]:first-child{padding-top:1.5rem}.form-row .label[data-v-7a247590]{width:100%}@media(min-width:48rem){.form-row .label[data-v-7a247590]{width:18.75rem;min-width:18.75rem}}.form-row .label.label--empty[data-v-7a247590]{display:none}@media(min-width:48rem){.form-row .label.label--empty[data-v-7a247590]{display:block}}.form-row .label .title[data-v-7a247590]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-semibold, 600)}.form-row .label .subtitle[data-v-7a247590]{margin-top:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.form-row .fields[data-v-7a247590]{display:flex;flex-direction:column;gap:1.25rem}.form-grid[data-v-940e9744]{width:100%}:where(.form-grid[data-v-940e9744]>:not(:last-child)){border-bottom-style:solid!important;border-top-style:solid!important;border-top-width:0!important;border-bottom-width:.0625rem!important;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))!important}.form-grid .actions[data-v-940e9744]{padding-block:1.5rem}.form-grid .actions[data-v-940e9744] .fields{display:flex;flex-direction:row;gap:.75rem}.sub-heading[data-v-857dd264]{padding:1rem 0}.actions[data-v-857dd264]{width:100%;display:flex;justify-content:flex-end;gap:1rem;padding:1rem 0}.configurator[data-v-0c2ac0e3] .configurator-step .header{overflow:hidden;gap:1rem}.configurator[data-v-0c2ac0e3] .configurator-step .header .title{margin-right:.5rem;text-overflow:ellipsis;overflow:hidden;display:flex;align-items:center;gap:.5rem}.configurator[data-v-0c2ac0e3] .configurator-step .header .title .mini-icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}@media(min-width:640px){.configurator[data-v-0c2ac0e3] .configurator-step .header .title{max-width:16rem;width:16rem;white-space:nowrap}}.configurator-step[data-v-0c2ac0e3] .subtitle{margin-left:auto;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:right}.configurator-step[data-v-0c2ac0e3] .edit-button{margin-left:auto}@media(min-width:640px){.configurator-step[data-v-0c2ac0e3] .subtitle{margin-left:0}}.loader[data-v-0c2ac0e3]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-b34c7c35] .icon{color:var(--color-accent, oklch(54.615% .2152 262.881))}[data-v-b1a6dd1f] .header{display:flex;flex-wrap:wrap;gap:0}@media(min-width:640px){[data-v-b1a6dd1f] .header{gap:1.5rem}}.header .product-image[data-v-b1a6dd1f]{height:auto;width:4.75rem!important}@media(min-width:640px){.header .product-image[data-v-b1a6dd1f]{width:8.5rem!important}}.header .product-image .image[data-v-b1a6dd1f]{height:4.75rem;width:4.75rem}@media(min-width:640px){.header .product-image .image[data-v-b1a6dd1f]{width:8.5rem!important}}.header .title[data-v-b1a6dd1f]{margin-bottom:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header .subtitle[data-v-b1a6dd1f]{display:flex;gap:.625rem;color:var(--color-text-secondary, oklch(55.1% .023 264.36));font-size:.875rem;line-height:1.25rem;margin-bottom:1rem}.header .subtitle .icon[data-v-b1a6dd1f]{color:var(--color-success, oklch(55.106% .1432 149.926))}.header .reference[data-v-b1a6dd1f]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));font-size:.875rem;line-height:1.25rem}.header .reference .value[data-v-b1a6dd1f]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header .inner[data-v-b1a6dd1f]{flex-shrink:1;max-width:calc(100% - 4.75rem)}@media(min-width:640px){.header .inner[data-v-b1a6dd1f]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-b1a6dd1f]{display:none;max-width:30rem}@media(min-width:640px){.header .inner .reference-input[data-v-b1a6dd1f]{display:flex}}.header>.reference-input[data-v-b1a6dd1f]{display:block;width:100%}@media(min-width:640px){.header>.reference-input[data-v-b1a6dd1f]{display:none}}.footer-wrapper[data-v-b1a6dd1f]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:.5rem;flex-wrap:wrap}.footer-wrapper .specifications[data-v-b1a6dd1f]{display:none}@media(min-width:640px){.footer-wrapper .specifications[data-v-b1a6dd1f]{display:flex;width:100%}}@media(min-width:1024px){.footer-wrapper .specifications[data-v-b1a6dd1f]{width:auto}}.footer-wrapper .right[data-v-b1a6dd1f]{display:flex;gap:1.25rem;align-items:center;justify-content:space-between;width:100%;margin-left:auto}@media(min-width:1024px){.footer-wrapper .right[data-v-b1a6dd1f]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-b1a6dd1f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-b1a6dd1f]{display:none}@media(min-width:768px){.footer-wrapper .right .add-to-cart .desktop[data-v-b1a6dd1f]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-b1a6dd1f]{display:flex}@media(min-width:768px){.footer-wrapper .right .add-to-cart .mobile[data-v-b1a6dd1f]{display:none}}.footer-wrapper .right .sub-total[data-v-b1a6dd1f]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-b1a6dd1f]{color:var(--color-text-secondary, oklch(55.1% .023 264.36));font-size:.75rem;line-height:1.2rem!important;max-width:250px;width:100%;display:flex;gap:.5rem;flex-wrap:wrap}@media(min-width:640px){.footer-wrapper .right .sub-total .sub-price[data-v-b1a6dd1f]{font-size:.875rem;line-height:1.25rem}}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-b1a6dd1f],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-b1a6dd1f]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-b1a6dd1f]{color:var(--color-text-primary, oklch(21.049% .032 264.664));font-size:.75rem;line-height:1rem}.footer-wrapper .right .sub-total .price[data-v-b1a6dd1f]{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:var(--color-danger, oklch(61.535% .2075 25.224));display:flex;width:100%}@media(min-width:1024px){.footer-wrapper .right .sub-total .price[data-v-b1a6dd1f]{justify-content:flex-end}}.footer-wrapper .right .sub-total .price .label[data-v-b1a6dd1f]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-b1a6dd1f]{top:-.3em;font-size:1.3rem;position:relative}.footer-wrapper .right .sub-total .price.small[data-v-b1a6dd1f]{font-size:1.2rem;line-height:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-b1a6dd1f]{font-size:1.2rem;top:0}@media(min-width:640px){.footer-wrapper .right .sub-total .price.small[data-v-b1a6dd1f]{font-size:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-b1a6dd1f]{font-size:1.5rem;top:-.1}}[data-v-db1f5349] .image-wrapper{height:10.25rem}[data-v-db1f5349] .image-wrapper .image{height:100%;width:100%;object-fit:cover}[data-v-db1f5349] .image-wrapper.dense{height:unset;width:auto;flex-shrink:0}[data-v-db1f5349] .image-wrapper.disabled{filter:grayscale(100%)}.card[data-v-db1f5349]{display:flex;width:17.625rem;cursor:pointer;flex-direction:column;overflow:auto;border-radius:var(--radius-xl, .75rem);background-color:var(--color-child, oklch(100% 0 0))}.card:not(.passive)[data-v-db1f5349]:hover,.card:not(.passive)[data-v-db1f5349]:focus{box-shadow:var(--shadow-card-hover)}.card[data-v-db1f5349]:not(.flat){border:.0625rem solid var(--color-border-subtle, oklch(92.789% .0041 286.32))}.card.passive[data-v-db1f5349]{cursor:default}.card.disabled[data-v-db1f5349]{cursor:default;border-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.card.disabled[data-v-db1f5349]:hover{box-shadow:none}.card.disabled .content[data-v-db1f5349]{filter:grayscale(100%)}.card.dense[data-v-db1f5349]{width:100%;flex-direction:row;justify-content:flex-start}.card.dense .inner[data-v-db1f5349]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-db1f5349]{padding-bottom:.25rem}.card.flat[data-v-db1f5349]:hover{background-color:var(--color-surface-subtle, oklch(100% 0 0));box-shadow:none}.card.flush .inner[data-v-db1f5349]{padding:0}.card .inner[data-v-db1f5349]{display:flex;width:100%;flex-direction:column;padding:1rem}.card .inner .header[data-v-db1f5349]{position:relative;display:flex;width:100%;flex-direction:column;border-top-left-radius:.25rem;border-top-right-radius:.25rem;padding-bottom:.5rem}.card .inner .header .title[data-v-db1f5349]{padding-bottom:.25rem;font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.card .inner .header .subtitle[data-v-db1f5349]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.card .inner .content[data-v-db1f5349]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.card .inner .footer[data-v-db1f5349]{padding-top:1rem}[data-v-0996fc70]{will-change:height;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}.expand-enter-active[data-v-0996fc70],.expand-leave-active[data-v-0996fc70]{overflow:hidden;transition-property:height,opacity;transition-timing-function:var(--default-transition-timing-function);transition-duration:var(--v66825474)}.expand-enter-from[data-v-0996fc70],.expand-leave-to[data-v-0996fc70]{opacity:0}.expand-enter[data-v-0996fc70],.expand-leave-to[data-v-0996fc70]{height:var(--v23e01c27)}.card[data-v-d1c73970]{width:100%}.card.expanded[data-v-d1c73970]{max-height:var(--v2464f9f5)}.card[data-v-d1c73970] .inner{padding:.25rem}.button[data-v-d1c73970]{margin-top:.25rem;height:auto;width:100%;background-color:var(--color-surface-subtle, oklch(100% 0 0));padding-block:.625rem;color:var(--color-accent, oklch(54.615% .2152 262.881))}.button[data-v-d1c73970]:not([disabled]):hover{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.dark .button[data-v-d1c73970]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.expand-enter-active[data-v-d1c73970],.expand-leave-active[data-v-d1c73970]{transition-property:opacity,height}.expand-enter[data-v-d1c73970],.expand-leave-to[data-v-d1c73970]{opacity:0}.radio-group[data-v-1c59e189]{pointer-events:none;display:flex;flex-direction:column;gap:.25rem}.radio-group[data-v-1c59e189] *{pointer-events:auto}.expandable-radio-group[data-v-57d87eb0]{margin-top:.25rem}.virtual-scroll-container[data-v-d375067a]{height:100%;width:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-d375067a]{display:flex;flex-direction:column}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}.filter-bar-container[data-v-d99cbd82]{position:relative;width:fit-content}.filter-bar-container .filter-bar:hover[data-v-d99cbd82]:has(.button:hover){background-color:var(--color-surface-subtle, oklch(100% 0 0))}.filter-bar-container .filter-bar .label-container[data-v-d99cbd82]{margin-right:2rem;margin-left:.5625rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]{overflow:hidden;white-space:nowrap;outline-style:solid;outline-width:2px;outline-color:var(--color-text-inverse, oklch(100% 0 0))}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]:not(:first-child){margin-left:-.5rem}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]:not(:last-child){max-width:2.5rem}.filter-bar-container .filter-bar .label-container .label[data-v-d99cbd82]{border-radius:var(--radius-lg, .5rem)}.filter-bar-container .clear[data-v-d99cbd82]{position:absolute;top:50%;right:.5rem;translate:0 -50%}.filter-actions[data-v-ac11057c]{margin-top:1rem}.filter-actions .button[data-v-ac11057c]{width:100%}.filter-actions .select-all[data-v-ac11057c]{margin-bottom:.5rem}.filter-dropdown[data-v-f225f3c3]{margin-top:.5rem;max-height:33.625rem;min-width:16.5rem;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:1rem;box-shadow:var(--shadow-menu-large)}.filter-dropdown [data-v-f225f3c3] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup [data-v-f225f3c3] .menu{background-color:inherit!important}.filter-popup [data-v-f225f3c3] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.input-container[data-v-bc10a7f4] .container-inner .inline-container-appended{margin-right:1.5rem}.input-container[data-v-bc10a7f4] .container-inner .inline-container-appended .button{background-color:transparent}.badge[data-v-1e617514]{position:relative;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:50%;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-inverse, oklch(100% 0 0))}.badge.small[data-v-1e617514]{height:.5rem;width:.5rem}.badge.small.position[data-v-1e617514]{top:-.125rem;right:-.125rem}.badge.blue[data-v-1e617514],.badge.blue .pulse[data-v-1e617514]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.badge.green[data-v-1e617514],.badge.green .pulse[data-v-1e617514]{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.badge.gray[data-v-1e617514]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705));color:var(--color-surface-canvas, oklch(100% 0 0))}.badge.gray .pulse[data-v-1e617514]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.badge.orange[data-v-1e617514],.badge.orange .pulse[data-v-1e617514]{background-color:var(--color-warning, oklch(58.272% .162 45.983))}.badge.purple[data-v-1e617514],.badge.purple .pulse[data-v-1e617514]{background-color:#7e22ce}.badge.red[data-v-1e617514],.badge.red .pulse[data-v-1e617514]{background-color:var(--color-danger-fill, oklch(57.7% .245 27.325))}.badge.yellow[data-v-1e617514]{background-color:#e6ca53;color:#382409}.badge.yellow .pulse[data-v-1e617514]{background-color:#e6ca53}.badge.position[data-v-1e617514]{position:absolute;top:-.5rem;right:-.75rem}.badge.pulsating .pulse[data-v-1e617514]{position:absolute;height:100%;width:100%;animation:var(--animate-ping,ping-1e617514 1s cubic-bezier(0, 0, .2, 1) infinite);border-radius:50%;opacity:75%}.badge.pulsating .content[data-v-1e617514]{z-index:1}.dark .badge.purple[data-v-1e617514],.dark .badge.purple .pulse[data-v-1e617514]{background-color:#9e61dc}@keyframes ping-1e617514{75%,to{transform:scale(2);opacity:0}}.menu-item[data-v-b143be33]{position:relative;height:100%;background-color:inherit;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.menu-item.title[data-v-b143be33]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.menu-item.simple[data-v-b143be33]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.menu-item.simple[data-v-b143be33]:hover{text-decoration-line:underline}.menu-item.simple:not(.first)[data-v-b143be33]:before{position:absolute;top:50%;margin-left:-1.5rem;display:flex;width:1.5rem;translate:0 -50%;align-items:center;justify-content:center;color:var(--color-border-default, oklch(86.277% .0063 264.565));content:"|"}@media(min-width:48rem){.menu-item.simple:not(.first)[data-v-b143be33]:before{margin-left:-3rem}}@media(min-width:48rem){.menu-item.simple:not(.first)[data-v-b143be33]:before{width:3rem}}.menu-item.disabled[data-v-b143be33],.menu-item[disabled][data-v-b143be33]{pointer-events:none;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.menu-item .menu-item-content[data-v-b143be33]{display:flex;height:100%;align-items:center;column-gap:.75rem;color:var(--v0a447ee6)}.menu-item .menu-item-content .mini-icon[data-v-b143be33]{color:var(--v0a447ee6)}.menu-item .menu-item-content .sub-menu-trigger[data-v-b143be33]{height:1rem;width:1rem}.menu-item .menu-item-content .sub-menu-trigger[data-v-b143be33],.menu-item .menu-item-content .append-icon[data-v-b143be33],.menu-item .menu-item-content .count[data-v-b143be33],.menu-item .menu-item-content .hotkey[data-v-b143be33]{margin-left:auto}.menu-item .menu-item-content .count[data-v-b143be33]{border-radius:calc(infinity * 1px);border-style:solid;border-width:1px;padding-inline:.625rem;padding-block:.125rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}.menu-item .menu-item-content .current-item-icon[data-v-b143be33]{margin-left:auto;height:1.25rem;width:1.25rem;color:var(--color-accent, oklch(54.615% .2152 262.881))}.menu[data-v-d8f7fc89]{display:flex;align-items:center}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89]{height:100%;gap:1.5rem}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item{border-bottom-style:solid;border-bottom-width:.1875rem;border-color:transparent;background-color:transparent}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item:not(.current):hover,.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item:not(.current):focus{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item .menu-item-content{font-weight:var(--font-weight-semibold, 600);color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .current{border-color:var(--color-primary-active, oklch(54.615% .2152 262.881))}.menu.vertical[data-v-d8f7fc89]{flex-direction:column;align-items:flex-start;gap:.25rem;background-color:inherit}.menu.vertical .item-vertical[data-v-d8f7fc89]{width:100%;border-radius:var(--radius-lg, .5rem);border-style:none;padding:.5rem}.menu.vertical .item-vertical:not(.current):not(.title)[data-v-d8f7fc89]:hover{background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838))}.menu.vertical .item-vertical:not(.current):not(.title)[data-v-d8f7fc89]:focus,.menu.vertical .item-vertical:not(.current):not(.title)[data-v-d8f7fc89]:focus-visible{background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838))}.menu.vertical[data-v-d8f7fc89] .divider{margin-block:.3125rem}.menu.vertical .current[data-v-d8f7fc89]{background-color:var(--color-surface-subtle, oklch(98.477% .0017 247.838))}.menu.simple[data-v-d8f7fc89]{flex-wrap:wrap;justify-content:center;gap:1.5rem}@media(min-width:48rem){.menu.simple[data-v-d8f7fc89]{gap:3rem}}.menu.mini[data-v-d8f7fc89] .count{display:none}.menu[data-v-d8f7fc89] .current{border-color:var(--color-accent, oklch(54.615% .2152 262.881))}.menu[data-v-d8f7fc89] .current .icon,.menu[data-v-d8f7fc89] .current .mini-icon,.menu[data-v-d8f7fc89] .current .menu-item-content{color:var(--color-accent, oklch(54.615% .2152 262.881))!important}.sub-menu[data-v-d8f7fc89]{width:16.5rem;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:.75rem;box-shadow:var(--shadow-menu)}.inputs[data-v-184e846d]{margin-block:1rem}.inputs .input-from[data-v-184e846d],.inputs .to[data-v-184e846d]{margin-bottom:.5rem}.inputs .to[data-v-184e846d]{display:block;text-align:center;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.search[data-v-301b3260]{margin-bottom:1rem}.list[data-v-301b3260]{max-height:21.625rem;overflow-x:visible;overflow-y:auto;padding:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.list .badge[data-v-301b3260]{margin-top:.375rem}.loader-wrapper[data-v-301b3260]{margin-top:-.25rem;display:flex;width:100%;align-items:center;justify-content:center}.loader-wrapper.loading[data-v-301b3260]{margin-block:.25rem}.menu-loader[data-v-301b3260]{margin-top:.5rem}.menu.vertical[data-v-301b3260]{margin-bottom:.25rem;padding-block:.25rem}.group-checkbox [data-v-301b3260] .label{font-weight:var(--font-weight-bold, 700)}.filter-group[data-v-b2f6b631]{display:flex;flex-wrap:wrap;align-items:flex-start;gap:.5rem}.filter-group .title[data-v-b2f6b631]{margin-right:.25rem;display:none;font-size:var(--text-sm, .875rem);--tw-leading: 2.5rem;line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));text-wrap:nowrap;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}@media(min-width:48rem){.filter-group .title[data-v-b2f6b631]{display:block}}.filter-group .base-filter[data-v-b2f6b631]{text-wrap:nowrap}.filter-group .button[data-v-b2f6b631]{margin-top:.25rem;font-weight:var(--font-weight-normal, 400);text-wrap:nowrap;color:var(--color-accent, oklch(54.615% .2152 262.881))}.table-wrapper[data-v-bda6fd69]{position:relative;display:block;width:100%;overflow:clip;border-radius:var(--radius-lg, .5rem)}.table-wrapper table[data-v-bda6fd69]{width:100%;border-collapse:collapse;text-indent:0px;background-color:var(--color-surface-canvas, oklch(100% 0 0));font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.table-wrapper .sticky-container[data-v-bda6fd69]{position:sticky;bottom:0;z-index:10}.table-wrapper .sticky-container .scrollbar[data-v-bda6fd69]{display:flex;height:.75rem;align-items:center;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-bda6fd69]{position:absolute;height:.5rem;border-radius:var(--radius-lg, .5rem);background-color:var(--color-field-border, oklch(86.277% .0063 264.565))}thead[data-v-0c5f8083]{position:sticky;top:0;z-index:10;background-color:var(--color-surface-canvas, oklch(100% 0 0))}thead[data-v-0c5f8083] tr td{font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664))}thead[data-v-0c5f8083] tr td input{font-weight:var(--font-weight-normal, 400)}thead[data-v-0c5f8083] tr td{box-shadow:var(--shadow-base),inset 0 -1px 0 0 var(--color-divider, oklch(92.48% .0027 264.541))}tbody[data-v-7ea6616f] tr:not(:last-child){border-bottom:solid .0625rem var(--color-divider, oklch(92.48% .0027 264.541))}td[data-v-e416c437]{padding-inline:1rem;vertical-align:middle;color:var(--color-text-primary, oklch(21.049% .032 264.664))}tr[data-v-14aa6f11]{height:3.5rem;max-height:3rem;min-height:3.5rem}.no-results-row[data-v-e40365b9]{position:relative;height:16rem}.no-results-row td[data-v-e40365b9]{position:absolute;height:100%;width:100%;overflow:hidden;white-space:nowrap}.no-results-row td .wrapper[data-v-e40365b9]{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:1rem;text-wrap:wrap}.no-results-row td .wrapper .icon[data-v-e40365b9]{height:3rem;width:3rem;stroke:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.no-results-row td .wrapper span[data-v-e40365b9]{text-align:center;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.pagination[data-v-4ad1e711]{display:flex;gap:.5rem}.pagination .button[data-v-4ad1e711]{position:relative}.pagination .button:not(:disabled)[data-v-4ad1e711]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.pagination .button:not(:disabled)[data-v-4ad1e711]:not(.current){color:var(--color-text-primary, oklch(21.049% .032 264.664))}.pagination .button:not(:disabled)[data-v-4ad1e711] .icon{height:1.25rem;width:1.25rem}.pagination .button[data-v-4ad1e711]:not(:first-child):not(:last-child){display:none;width:2.5rem}@media(min-width:48rem){.pagination .button[data-v-4ad1e711]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-4ad1e711]:not(:disabled):hover{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.pagination .button.current[data-v-4ad1e711]{border-style:solid;border-width:2px;border-color:var(--color-accent, oklch(54.615% .2152 262.881))}.pagination .button .button-text[data-v-4ad1e711]{display:none}@media(min-width:48rem){.pagination .button .button-text[data-v-4ad1e711]{display:block}}.pagination .dotdotdot[data-v-4ad1e711]{display:none;align-self:center}@media(min-width:48rem){.pagination .dotdotdot[data-v-4ad1e711]{display:inline-block}}.skeleton[data-v-269870f9]{display:block;height:1.25rem;animation:var(--animate-pulse,pulse-269870f9 2s cubic-bezier(.4, 0, .6, 1) infinite);background-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.skeleton.has-content[data-v-269870f9]{height:auto}.skeleton.circular[data-v-269870f9]{border-radius:50%}.skeleton.text[data-v-269870f9]{scale:1 .7;border-radius:.25rem}.skeleton.text:not(.has-content)[data-v-269870f9]{height:auto;color:inherit}.skeleton.text:not(.has-content)[data-v-269870f9]:before{content:" "}.skeleton [data-v-269870f9-s]{visibility:hidden}@keyframes pulse-269870f9{50%{opacity:.5}}.table-selection[data-v-3e8932ae]{margin-top:.25rem;display:flex;width:100%;align-items:center;gap:.5rem;border-radius:var(--radius-2xl, 1rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-raised, oklch(100% 0 0));padding-inline:1.5rem;padding-block:.5rem}.table-selection .amount[data-v-3e8932ae]{margin-right:auto}.table-selection .actions[data-v-3e8932ae]{display:flex;flex-direction:column;gap:.5rem}@media(min-width:48rem){.table-selection .actions[data-v-3e8932ae]{flex-direction:row}}.list[data-v-9d717a77]{width:16rem;overflow:hidden;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding-top:1rem;padding-bottom:.625rem;box-shadow:var(--shadow-menu-large)}.list .list-inner[data-v-9d717a77]{display:flex;max-height:33.625rem;flex-direction:column;gap:.375rem;overflow:auto}:is(.list .active-columns,.list .available-columns)[data-v-9d717a77]{display:flex;flex-direction:column;padding-inline:1rem}:is(.list .active-columns,.list .available-columns) .title[data-v-9d717a77]{font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664));-webkit-user-select:none;-moz-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .column[data-v-9d717a77]{display:flex;height:2rem;flex-direction:row;align-items:center}:is(.list .active-columns,.list .available-columns) .column .checkbox-container[data-v-9d717a77]{width:fit-content;padding-right:.5rem}:is(.list .active-columns,.list .available-columns) .column .label[data-v-9d717a77]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));-webkit-user-select:none;-moz-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .column .drag-handle[data-v-9d717a77]{margin-left:auto;cursor:grab;padding-left:.5rem;background-color:transparent}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-9d717a77]{height:1.25rem;width:1.25rem}.list .active-columns .title[data-v-9d717a77]{padding-bottom:.375rem}.list .active-columns .column.dragging[data-v-9d717a77]{visibility:hidden}.list .available-columns .title[data-v-9d717a77]{padding-block:.375rem}.no-columns[data-v-9d717a77]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.table-head[data-v-2c69f723]{display:table-header-group;top:var(--v7ddbd13a)}.table-head .select-column[data-v-2c69f723],.table-head .action-column[data-v-2c69f723]{z-index:2}.table-head .header[data-v-2c69f723]{position:relative;display:flex;width:fit-content;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.table-head .header.header--align-right[data-v-2c69f723]{margin-left:auto}@media(hover:hover){.table-head .header[data-v-2c69f723]:hover{cursor:pointer}}@media(hover:hover){.table-head .header.header--disabled[data-v-2c69f723]:hover{cursor:default}}.table-head .header.active[data-v-2c69f723]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-head .header .sort-icon[data-v-2c69f723]{position:absolute;display:none;height:1rem;width:1rem;cursor:pointer;stroke-width:.125rem}.table-head .header .sort-icon.left[data-v-2c69f723],.table-head .header .sort-icon.right[data-v-2c69f723]{top:50%;translate:0 -50%}.table-head .header .sort-icon.left[data-v-2c69f723]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-2c69f723]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-2c69f723],.table-head .header .sort-icon.active[data-v-2c69f723]{display:block}.table-head .header .sort-icon.sort-icon--disabled[data-v-2c69f723]{display:none!important}.table-head [data-v-2c69f723] .column-configurator{margin-left:auto}.table-head .filters[data-v-2c69f723]{height:4rem;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters .action-column[data-v-2c69f723]{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters td[data-v-2c69f723]>div{max-width:18rem!important;min-width:6rem}.select-column[data-v-2c69f723],.action-column[data-v-2c69f723]{position:relative;z-index:1;width:3rem;background-color:var(--color-surface-canvas, oklch(100% 0 0))}.select-column.overlap[data-v-2c69f723]:after,.action-column.overlap[data-v-2c69f723]:before{position:absolute;top:0;height:100%;width:.625rem;--gradient-from: color-mix(in srgb, var(--color-text-primary, oklch(21.049% .032 264.664)) 5%, transparent);--gradient-to: transparent;--gradient-stops: var( --gradient-via-stops, var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position) );opacity:95%;content:""}.select-column.overlap[data-v-2c69f723]:after{right:-.625rem;--gradient-position: to right;background-image:linear-gradient(var(--gradient-stops))}@supports (background-image: linear-gradient(in lab,red,red)){.select-column.overlap[data-v-2c69f723]:after{--gradient-position: to right in oklab}}.action-column.overlap[data-v-2c69f723]:before{left:-.625rem;--gradient-position: to left;background-image:linear-gradient(var(--gradient-stops))}@supports (background-image: linear-gradient(in lab,red,red)){.action-column.overlap[data-v-2c69f723]:before{--gradient-position: to left in oklab}}.prepend-row-column[data-v-2c69f723]{width:1%;white-space:nowrap}tbody tr.clickable[data-v-2c69f723]{cursor:pointer}tbody tr.clickable[data-v-2c69f723]:hover{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-surface-subtle, oklch(100% 0 0)) 20%,var(--color-surface-subtle, oklch(100% 0 0)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selected[data-v-2c69f723]{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 20%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-2c69f723]{font-weight:var(--font-weight-medium, 500)}tbody tr.selectable td[data-v-2c69f723]:nth-child(2):not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-2c69f723]{font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child[data-v-2c69f723]:not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr .float-right[data-v-2c69f723]{float:right}.table-footer[data-v-2c69f723]{position:sticky;bottom:0;z-index:10;display:flex;flex-wrap:wrap;justify-content:space-between;border-top-style:solid;border-top-width:1px;border-color:var(--color-divider, oklch(92.48% .0027 264.541));background-color:var(--color-surface-canvas, oklch(100% 0 0));padding-inline:1rem;padding-block:.25rem}.table-footer .table-footer-pagination[data-v-2c69f723]{display:flex;width:100%;align-items:center;gap:1rem}.table-footer .current-page-info[data-v-2c69f723]{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;row-gap:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-footer .current-page-info .total-results[data-v-2c69f723]{margin-right:1.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.table-footer .current-page-info .total-results span[data-v-2c69f723]{font-weight:var(--font-weight-bold, 700)}.table-footer .current-page-info .page-selector[data-v-2c69f723]{display:none;flex-grow:1;flex-wrap:wrap;align-items:center}@media(min-width:48rem){.table-footer .current-page-info .page-selector[data-v-2c69f723]{display:flex}}.table-footer .current-page-info .page-selector[data-v-2c69f723] .base-select{width:100%;max-width:6rem}.table-footer .current-page-info .page-selector .per-page[data-v-2c69f723]{margin-left:.75rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.table-footer .pagination[data-v-2c69f723]{margin-left:auto;padding-block:1rem}.actions-align-end[data-v-2c69f723]{display:flex;justify-content:flex-end}.has-explicit-width[data-v-2c69f723]{max-width:1px}.api-data-table__actions[data-v-1a7b0b76]{display:flex;gap:.5rem}tfoot[data-v-df75f6c9] tr{max-height:initial;min-height:initial}tfoot[data-v-df75f6c9] tr td{box-shadow:var(--shadow-base),inset 0 1px 0 0 var(--color-divider, oklch(92.48% .0027 264.541))}.table-head[data-v-1720d033]{display:table-header-group}.table-head .select-column[data-v-1720d033],.table-head .action-column[data-v-1720d033]{z-index:2}.table-head .header[data-v-1720d033]{position:relative;display:flex;width:fit-content;white-space:nowrap;-webkit-user-select:none;user-select:none}.table-head .header.header--align-right[data-v-1720d033]{margin-left:auto}@media(hover:hover){.table-head .header[data-v-1720d033]:hover{cursor:pointer}}@media(hover:hover){.table-head .header.header--disabled[data-v-1720d033]:hover{cursor:default}}.table-head .header.active[data-v-1720d033]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-head .header .sort-icon[data-v-1720d033]{position:absolute;display:none;height:1rem;width:1rem;cursor:pointer;stroke-width:.125rem}.table-head .header .sort-icon.left[data-v-1720d033],.table-head .header .sort-icon.right[data-v-1720d033]{top:50%;translate:0 -50%}.table-head .header .sort-icon.left[data-v-1720d033]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-1720d033]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-1720d033],.table-head .header .sort-icon.active[data-v-1720d033]{display:block}.table-head .header .sort-icon.sort-icon--disabled[data-v-1720d033]{display:none!important}.table-head [data-v-1720d033] .column-configurator{margin-left:auto}.table-head .filters[data-v-1720d033]{height:4rem;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters .action-column[data-v-1720d033]{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters td[data-v-1720d033]>div{max-width:18rem!important;min-width:6rem}.select-column[data-v-1720d033],.action-column[data-v-1720d033]{position:relative;z-index:1;width:3rem;background-color:var(--color-surface-canvas, oklch(100% 0 0))}.select-column.overlap[data-v-1720d033]:after,.action-column.overlap[data-v-1720d033]:before{position:absolute;top:0;height:100%;width:.625rem;--gradient-from: color-mix(in srgb, var(--color-text-primary, oklch(21.049% .032 264.664)) 5%, transparent);--gradient-to: transparent;--gradient-stops: var( --gradient-via-stops, var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position) );opacity:95%;content:""}.select-column.overlap[data-v-1720d033]:after{right:-.625rem;--gradient-position: to right in oklab;background-image:linear-gradient(var(--gradient-stops))}.select-column--inherit-bg[data-v-1720d033]{background-color:inherit!important}.action-column__skeleton[data-v-1720d033],.filter-control--align-right[data-v-1720d033]{margin-left:auto}.actions-align-end[data-v-1720d033]{display:flex;justify-content:flex-end}.spacer-row[data-v-1720d033]{border-style:none!important;border-width:0px!important}.spacer-cell[data-v-1720d033]{height:0;border-style:none!important;border-width:0px!important;padding:0}.has-explicit-width[data-v-1720d033]{max-width:1px}.cell-value--align-right[data-v-1720d033]{margin-left:auto}.action-column.overlap[data-v-1720d033]:before{left:-.625rem;--gradient-position: to left in oklab;background-image:linear-gradient(var(--gradient-stops))}.prepend-row-column[data-v-1720d033]{width:1%;white-space:nowrap}tbody tr.clickable[data-v-1720d033]{cursor:pointer}tbody tr.clickable[data-v-1720d033]:hover{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-surface-subtle, oklch(100% 0 0)) 20%,var(--color-surface-subtle, oklch(100% 0 0)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selected[data-v-1720d033]{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 20%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-1720d033]{font-weight:var(--font-weight-medium, 500)}tbody tr.selectable td[data-v-1720d033]:nth-child(2):not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-1720d033]{font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child[data-v-1720d033]:not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr[data-v-1720d033]:not(.loading):nth-last-child(2){border-bottom-width:0px}tbody tr .cell-content[data-v-1720d033]{display:flex;align-items:center;height:var(--v6a02f16a);min-height:var(--v6a02f16a);max-height:var(--v6a02f16a)}.table-footer[data-v-1720d033]{position:sticky;bottom:0;z-index:10;display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;border-top-style:solid;border-top-width:1px;border-color:var(--color-divider, oklch(92.48% .0027 264.541));background-color:var(--color-surface-canvas, oklch(100% 0 0));padding:1rem}.table-footer .table-footer-pagination[data-v-1720d033]{display:flex;width:100%;align-items:center;gap:1rem}.table-footer .total-results[data-v-1720d033]{margin-right:1.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-footer .total-results span[data-v-1720d033]{font-weight:var(--font-weight-bold, 700)}.avatar[data-v-e0ed6a89]{display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:50%;background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.avatar .initials[data-v-e0ed6a89]{font-size:var(--text-sm, .875rem);--tw-leading: 1;line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);color:var(--color-accent, oklch(54.615% .2152 262.881))}.avatar img[data-v-e0ed6a89]{height:100%;width:100%;border-radius:50%;object-fit:cover}.avatar.small[data-v-e0ed6a89]{height:1.5rem;width:1.5rem}.avatar.small .initials[data-v-e0ed6a89]{font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.avatar.medium[data-v-e0ed6a89]{height:2rem;width:2rem}.avatar.large[data-v-e0ed6a89]{height:3rem;width:3rem}.avatar.large .initials[data-v-e0ed6a89]{font-size:var(--text-base, 1rem);line-height:var(--tw-leading, var(--text-base--line-height, 1.5 ))}.avatar.extra-large[data-v-e0ed6a89]{height:3.5rem;width:3.5rem}.avatar.extra-large .initials[data-v-e0ed6a89]{font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.full-image[data-v-b1342901]{opacity:100%}.thumbnail-stack[data-v-7b9fc27b]{display:flex;flex-direction:row;align-items:center}.thumbnail-stack .image-preview[data-v-7b9fc27b]{border-radius:.25rem;outline-style:solid;outline-width:2px;outline-color:var(--color-surface-raised, oklch(100% 0 0))}.thumbnail-stack .image-preview[data-v-7b9fc27b]:not(:first-child){margin-left:-1rem}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-7b9fc27b]{display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.thumbnail-stack .image-preview.invalid .icon[data-v-7b9fc27b]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.address-lookup-result[data-v-29af788f]{display:flex;width:100%;flex-direction:column;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-subtle, oklch(100% 0 0));padding-inline:1rem;padding-block:.75rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664));font-style:normal}.error-summary[data-v-1f9098fa]{padding-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.postcodenl-autocomplete-menu{position:absolute;margin-top:.25rem;display:none;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-menu)}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{overflow-x:hidden;overflow-y:auto;padding:.25rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:var(--radius-lg, .5rem);padding:.75rem;--tw-leading: 1.25rem;line-height:1.25rem}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{background-color:transparent;padding:0;font-weight:var(--font-weight-bold, 700)}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.postcodenl-autocomplete-item-label{margin-right:.4rem;display:block;width:100%;max-width:100%;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{margin-right:.4rem;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:center right .25em;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{position:absolute;margin:-.0625rem;display:none;height:.0625rem;width:.0625rem;border-style:none;padding:0;clip:rect(0 0 0 0)}.country-icon[data-v-9706778b]{margin-right:.3125rem;height:1.25rem;width:1.25rem}.activator[data-v-9706778b]{display:flex;cursor:pointer;align-items:center;gap:.25rem;background-color:var(--color-field-background, oklch(100% 0 0))}.activator:not(.simple)[data-v-9706778b]{border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding-inline:1rem;padding-block:.625rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.activator:not(.simple) .country-icon[data-v-9706778b]{margin-right:.5rem}.activator .state-indicator[data-v-9706778b]{margin-left:auto;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.activator .state-indicator.is-open[data-v-9706778b]{rotate:180deg;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.activator.disabled[data-v-9706778b]{pointer-events:none;cursor:not-allowed;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.activator.disabled[data-v-9706778b]::placeholder{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}@media(hover:hover){.activator.disabled[data-v-9706778b]:hover{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}}.activator.disabled[data-v-9706778b]:focus{--tw-outline-style: none;outline-style:none}@media(forced-colors:active){.activator.disabled[data-v-9706778b]:focus{outline:2px solid transparent;outline-offset:2px}}.country-list[data-v-9706778b]{max-height:300px;overflow-y:auto;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding-bottom:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664));box-shadow:var(--shadow-menu)}.country-list .search-container[data-v-9706778b]{position:sticky;top:0;z-index:1;background-color:var(--color-surface-raised-alt, oklch(100% 0 0));padding-inline:.5rem;padding-top:.5rem;padding-bottom:.5rem}.country-list .search-container[data-v-9706778b]:after{position:absolute;bottom:-.5rem;left:0;height:.5rem;width:100%;--gradient-position: to bottom;background-image:linear-gradient(var(--gradient-stops));--gradient-from: color-mix( in srgb, var(--color-text-primary, oklch(21.049% .032 264.664)) 5%, transparent );--gradient-to: transparent;--gradient-stops: var( --tw-gradient-via-stops, var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position) );opacity:95%;content:""}@supports (background-image: linear-gradient(in lab,red,red)){.country-list .search-container[data-v-9706778b]:after{gradient-position:to bottom in oklab}}.country-list .search-container .search-input[data-v-9706778b]{width:100%;border-style:none;background-color:var(--color-surface-raised-alt, oklch(100% 0 0));padding:0;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.country-list .search-container .search-input[data-v-9706778b]::placeholder{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.country-list .search-container .search-input[data-v-9706778b]:focus{box-shadow:none}.country-list .countries[data-v-9706778b]{padding-top:.5rem}.country-list .countries .country[data-v-9706778b]{display:flex;align-items:center;gap:.5rem;padding-inline:.5rem;padding-block:.125rem;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.country-list .countries .country[data-v-9706778b]:hover{cursor:pointer;background-color:var(--color-surface-subtle, oklch(100% 0 0));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.country-list .countries .no-countries-found[data-v-9706778b]{pointer-events:none;padding-top:.25rem;text-align:center;font-weight:var(--font-weight-bold, 700)}[data-v-5cc52e3f] .activator{width:100%;max-width:15.75rem}.address-input[data-v-5cc52e3f]{display:flex;width:100%;max-width:36rem;flex-direction:column;gap:1rem}.address-input .country .country-label-row[data-v-5cc52e3f]{display:flex;flex-direction:row;justify-content:space-between}.address-input .country .country-label-row .address-toggle[data-v-5cc52e3f]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705));text-decoration-line:underline;background-color:transparent;padding:0}.address-input .input-label[data-v-5cc52e3f]{margin-bottom:.25rem;display:flex;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.address-input .grouped-inputs[data-v-5cc52e3f]{display:flex;width:100%;max-width:24rem;justify-content:space-between;gap:.75rem}.address-input .grouped-inputs .error-summary[data-v-5cc52e3f]{width:100%}.address-input .input-container[data-v-5cc52e3f],.address-input .address-lookup-result[data-v-5cc52e3f]{width:100%;max-width:24rem}.address-autocomplete[data-v-5cc52e3f],.address-alert[data-v-5cc52e3f]{width:100%}.lookup-info[data-v-5cc52e3f]{display:flex;flex-direction:column}.lookup-examples[data-v-5cc52e3f]{width:100%;margin-top:.25rem;padding-left:.5rem;list-style-type:disc}.city-input[data-v-5cc52e3f]{max-width:15.75rem}.address-form[data-v-c27fd513]{display:flex;flex-wrap:wrap;justify-content:space-between}.address-form form[data-v-c27fd513]{display:flex;width:100%;max-width:36rem;flex-direction:column;gap:1rem}.address-form form .input-label[data-v-c27fd513]{margin-bottom:.25rem;display:flex;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.address-form form .grouped-inputs[data-v-c27fd513]{display:flex;justify-content:space-between;gap:.75rem}.address-form form .grouped-inputs .error-summary[data-v-c27fd513]{width:100%}.address-form form .input-container[data-v-c27fd513],.address-form form .grouped-inputs[data-v-c27fd513]{width:100%;max-width:24rem}.checkbox-group[data-v-03ea0e1f]{display:flex;flex-direction:column;gap:.5rem}.checkbox-button[data-v-f3f7acae]{display:flex;flex-direction:column;border-radius:var(--radius-xl, .75rem);border-style:solid;border-width:1px;border-color:var(--color-field-border, oklch(86.277% .0063 264.565));padding:.25rem}.checkbox-button .checkbox-container[data-v-f3f7acae]{border-radius:var(--radius-lg, .5rem)}.checkbox-button .checkbox-container[data-v-f3f7acae]:hover{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.checkbox-button .checkbox-container[data-v-f3f7acae] .label{height:100%;align-items:flex-start;border-radius:var(--radius-xl, .75rem);padding:.75rem;font-weight:var(--font-weight-medium, 500);word-break:break-all}.checkbox-button .checkbox-container .checkbox-button-label[data-v-f3f7acae]{display:flex;align-items:flex-start;gap:.5rem}.checkbox-button .checkbox-container .micro-icon[data-v-f3f7acae]{margin-top:.125rem;color:var(--color-border-strong, oklch(73.455% .008 264.608))}.checkbox-button .checked-content[data-v-f3f7acae]{padding-top:.25rem}.drop-zone[data-v-b954b849]{border-style:dashed}.drop-zone.default[data-v-b954b849]{border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-subtle, oklch(100% 0 0))}.drop-zone.default[data-v-b954b849]:hover{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.drop-zone.dragging[data-v-b954b849]{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.drop-zone .label[data-v-b954b849]{z-index:2;height:100%;cursor:pointer}.drop-zone .label.dragging[data-v-b954b849]{justify-content:center}.drop-zone .label .icon[data-v-b954b849]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.drop-zone .label .loader[data-v-b954b849]{margin-right:.25rem}.drop-zone .label .trigger[data-v-b954b849]{color:var(--color-accent, oklch(54.615% .2152 262.881));text-decoration-line:underline}.drop-zone .file-input[data-v-b954b849]{display:none}.dropdown[data-v-9ea37c6e]{position:relative}.dropdown .menu[data-v-9ea37c6e]{border-radius:var(--radius-md, .375rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:.25rem;box-shadow:var(--shadow-menu-large)}.upload-menu-button[data-v-7749f9f2]{width:40px}.warning-zone[data-v-959bc417]{border-style:solid;border-color:var(--color-warning, oklch(58.272% .162 45.983));background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.warning-zone .label[data-v-959bc417]{flex-grow:1;color:var(--color-warning-strong, oklch(40.839% .1165 38.172))}.warning-zone .label .icon[data-v-959bc417]{color:var(--color-warning, oklch(58.272% .162 45.983))}.error-zone[data-v-855feab7]{border-style:solid;border-color:var(--color-danger-soft, oklch(97.053% .0129 17.38));background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.error-zone .label[data-v-855feab7]{flex-grow:1;color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.error-zone .label .icon[data-v-855feab7]{color:var(--color-danger, oklch(61.535% .2075 25.224))}.success-zone[data-v-585fd95f]{border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-raised, oklch(100% 0 0))}.success-zone .label .icon[data-v-585fd95f]{color:var(--color-success, oklch(55.106% .1432 149.926))}.linear-progress[data-v-bb272f73]{display:flex;width:100%;align-items:center;gap:.5rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.linear-progress .wrapper[data-v-bb272f73]{display:flex;width:100%;flex-direction:column;gap:.25rem}.linear-progress .wrapper .progress-bar[data-v-bb272f73]{height:.375rem;width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-bb272f73]{height:100%;width:100%;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s;--tw-duration: .5s;transition-duration:.5s;--tw-ease: linear;transition-timing-function:linear}.linear-progress .wrapper .progress-bar .progress.animate-progress[data-v-bb272f73]{animation:var(--animate-progress)}.linear-progress .wrapper .progress-bar .progress.origin-left-right[data-v-bb272f73]{transform-origin:left center}.linear-progress .wrapper .progress-bar.blue[data-v-bb272f73]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-bb272f73]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.linear-progress .wrapper .progress-bar.lightblue[data-v-bb272f73]{background-color:inherit}.linear-progress .wrapper .progress-bar.lightblue .progress[data-v-bb272f73]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.green[data-v-bb272f73]{background-color:var(--color-success-soft, oklch(98.135% .0124 149.917))}.linear-progress .wrapper .progress-bar.green .progress[data-v-bb272f73]{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.linear-progress .wrapper .progress-bar.gray[data-v-bb272f73]{background-color:var(--color-surface-raised, oklch(100% 0 0))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-bb272f73]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.linear-progress .wrapper .progress-bar.orange[data-v-bb272f73]{background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-bb272f73]{background-color:var(--color-warning, oklch(58.272% .162 45.983))}.linear-progress .wrapper .progress-bar.purple[data-v-bb272f73]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-bb272f73]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.linear-progress .wrapper .progress-bar.red[data-v-bb272f73]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.linear-progress .wrapper .progress-bar.red .progress[data-v-bb272f73]{background-color:var(--color-danger, oklch(61.535% .2075 25.224))}.linear-progress .wrapper .progress-bar.yellow[data-v-bb272f73]{background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-bb272f73]{background-color:var(--color-warning-text, oklch(55.343% .1739 38.402))}.linear-progress .append[data-v-bb272f73]{min-width:2.25rem}.uploading-zone[data-v-97372f13]{position:relative;border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.uploading-zone .label[data-v-97372f13]{z-index:2;cursor:wait;gap:.75rem!important}.uploading-zone .label .progress[data-v-97372f13]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.uploading-zone .button[data-v-97372f13]{width:100%}@media(min-width:48rem){.uploading-zone .button[data-v-97372f13]{width:auto}}.uploading-zone .linear-progress[data-v-97372f13]{position:absolute;right:0;left:0;z-index:1;height:100%!important}.uploading-zone .linear-progress[data-v-97372f13] .wrapper,.uploading-zone .linear-progress[data-v-97372f13] .progress-bar{height:100%}.uploading-divider[data-v-97372f13]{height:1rem!important}.processing-zone[data-v-4e60054f]{border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.processing-zone .label[data-v-4e60054f]{cursor:wait;gap:.75rem!important}.processing-zone .label .loader[data-v-4e60054f]{isolation:isolate}.processing-zone .button[data-v-4e60054f]{width:100%}@media(min-width:48rem){.processing-zone .button[data-v-4e60054f]{width:auto}}@media(min-width:48rem){.drag-and-drop[data-v-4d187b84]{height:4.5rem}}.drag-and-drop .base-zone[data-v-4d187b84]{display:flex;height:100%;width:100%;flex-wrap:wrap;align-items:center;row-gap:1.125rem;overflow:hidden;border-radius:var(--radius-2xl, 1rem);border-style:solid;border-width:1px;padding:1rem}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84]{padding-block:0}}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84]{padding-right:1rem}}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84]{padding-left:1.5rem}}.drag-and-drop .base-zone[data-v-4d187b84] .label{display:flex;width:100%;flex-grow:1;align-items:center;gap:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84] .label{width:auto}}.drag-and-drop .base-zone[data-v-4d187b84] .label .icon{margin-right:.5rem}.drag-and-drop .base-zone[data-v-4d187b84] .actions{z-index:2;display:flex;flex-grow:1;align-items:center;gap:.5rem}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions{flex-grow:0}}.drag-and-drop .base-zone[data-v-4d187b84] .actions .button{flex-shrink:0}.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:first-child{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:first-child{order:1}}.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:nth-child(2){order:1;flex-grow:1}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:nth-child(2){order:2}}.drag-and-drop .base-zone[data-v-4d187b84] .actions .dropdown{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions .dropdown{order:1}}.phone-input[data-v-97a1faee]{display:flex;height:2.5rem;align-items:center;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-field-background, oklch(100% 0 0));padding-inline:1rem}.phone-input[data-v-97a1faee]:hover:not(.disabled){border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.phone-input.focus[data-v-97a1faee]:not(.disabled){border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));outline-style:solid;outline-width:1px;outline-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.phone-input.disabled[data-v-97a1faee]{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.phone-input.disabled .country-prefix[data-v-97a1faee]{color:var(--color-field-text, oklch(21.049% .032 264.664))}.phone-input.disabled input[data-v-97a1faee]{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}:is(.phone-input select,.phone-input input)[data-v-97a1faee]{border-style:none;padding:0}:is(.phone-input select,.phone-input input)[data-v-97a1faee]:focus{box-shadow:none}.phone-input select[data-v-97a1faee]{padding-right:2rem}.phone-input input[data-v-97a1faee]{width:100%;background-color:var(--color-field-background, oklch(100% 0 0));font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.phone-input .country-prefix[data-v-97a1faee]{margin-right:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.radio[data-v-fe962c67]{margin-top:.125rem;border:1px solid var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-field-background, oklch(100% 0 0));color:var(--color-accent-strong, oklch(48.82% .2172 264.376));appearance:none;border-radius:100%;width:1rem;height:1rem;background-origin:border-box}.radio[data-v-fe962c67]:focus{--tw-ring-color: var(--color-accent-strong, oklch(48.82% .2172 264.376))}.radio.large[data-v-fe962c67]{height:1.25rem;width:1.25rem}.label[data-v-fe962c67]{display:flex;align-items:flex-start;gap:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.label[data-v-fe962c67]:not(.disabled){cursor:pointer}.radio[data-v-fe962c67]:not(:disabled):hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.radio[data-v-fe962c67]:checked:not(:disabled){border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));background-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-on-accent, oklch(100% 0 0));background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-fe962c67]:disabled{border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.radio[data-v-fe962c67]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-fe962c67]:checked:not(:disabled):hover{border-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-on-accent, oklch(100% 0 0))}.radio-button[data-v-4e5b68ec]{display:flex;align-items:center;gap:.75rem;border-radius:var(--radius-lg, .5rem);padding-inline:.75rem;padding-block:.75rem;word-break:break-all}.radio-button [data-v-4e5b68ec]{pointer-events:none}.radio-button:not(.disabled)[data-v-4e5b68ec]:hover{cursor:pointer;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.radio-button:not(.disabled).active[data-v-4e5b68ec]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}@media(hover:hover){.radio-button:not(.disabled).active[data-v-4e5b68ec]:hover{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}}.radio-button:not(.disabled).active .subtitle[data-v-4e5b68ec]{color:var(--color-field-text, oklch(21.049% .032 264.664))!important}.radio-button.disabled[data-v-4e5b68ec]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));filter:grayscale(100%)}.radio-button.disabled[data-v-4e5b68ec]:before{position:absolute;top:0;left:0;z-index:10;height:100%;width:100%;cursor:not-allowed;border-radius:var(--radius-xl, .75rem);background-color:var(--color-field-border, oklch(86.277% .0063 264.565));opacity:10%;content:""}.radio-button.large[data-v-4e5b68ec]{padding-block:.875rem}.radio-button label[data-v-4e5b68ec]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.radio-button .append[data-v-4e5b68ec]{margin-left:auto}.radio-button .prepend-wrapper[data-v-4e5b68ec]{display:flex;flex-direction:row;align-items:center;gap:.75rem}.radio-button .prepend-wrapper .title-wrapper[data-v-4e5b68ec]{display:flex;min-width:max-content;flex-direction:column}.radio-button .prepend-wrapper .title-wrapper .title[data-v-4e5b68ec]{display:flex;flex-direction:row;align-items:center;gap:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-4e5b68ec]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.suggestion-list[data-v-cc5ffce8]{position:absolute;min-width:6.25rem;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:.75rem;box-shadow:var(--shadow-menu)}.suggestion-list .menu[data-v-cc5ffce8]{row-gap:.25rem}.editor [data-v-bbd9a106] .tiptap{height:18.75rem;width:100%;overflow:auto;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding-inline:1rem;padding-block:.625rem}.editor [data-v-bbd9a106] .tiptap h1,.editor [data-v-bbd9a106] .tiptap h2,.editor [data-v-bbd9a106] .tiptap h3,.editor [data-v-bbd9a106] .tiptap h4,.editor [data-v-bbd9a106] .tiptap h5,.editor [data-v-bbd9a106] .tiptap h6{margin:0;font-weight:inherit}.editor [data-v-bbd9a106] .tiptap h1,.editor [data-v-bbd9a106] .tiptap h2{margin-bottom:1rem}.editor [data-v-bbd9a106] .tiptap h1{font-size:var(--text-2xl, 1.5rem);line-height:var(--tw-leading, var(--text-2xl--line-height, calc(2 / 1.5)))}.editor [data-v-bbd9a106] .tiptap h2{font-size:var(--text-xl, 1.25rem);line-height:var(--tw-leading, var(--text-xl--line-height, calc(1.75 / 1.25)))}.editor [data-v-bbd9a106] .tiptap h3{font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.editor [data-v-bbd9a106] .tiptap h4,.editor [data-v-bbd9a106] .tiptap h5,.editor [data-v-bbd9a106] .tiptap h6{font-size:var(--text-base, 1rem);line-height:var(--tw-leading, var(--text-base--line-height, 1.5 ))}.editor [data-v-bbd9a106] .tiptap .tag{font-weight:var(--font-weight-bold, 700);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.editor .toolbar[data-v-bbd9a106]{margin-bottom:.5rem;display:flex;gap:.25rem}.editor .toolbar .button[data-v-bbd9a106]{width:2.5rem}.editor .toolbar[data-v-bbd9a106] .base-select{margin-left:auto}.modal.loader-modal[data-v-95758b60] .inner{display:flex;align-items:center;justify-content:center;background-color:var(--color-surface-raised, oklch(100% 0 0));height:4.75rem;border-radius:1rem}.modal.loader-modal[data-v-95758b60] .inner .content{padding:0;overflow:visible}.modal.loader-modal[data-v-95758b60] .inner .loader{width:3.125rem;height:3.125rem}.search-container[data-v-95758b60]{position:relative}.search-container[data-v-95758b60] .modal{max-height:25rem;background-color:transparent;height:100%;box-shadow:none}.search-container[data-v-95758b60] .modal .inner .content{padding:0}.search-container[data-v-95758b60] .modal .inner .content .base-select .wrapper{background-color:var(--color-surface-raised, oklch(100% 0 0))}.search-container[data-v-95758b60] .modal .inner .content .base-select .wrapper input{background-color:var(--color-surface-raised, oklch(100% 0 0));outline:none}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content{background-color:var(--color-surface-raised, oklch(100% 0 0));border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;overflow:hidden}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content .select-content{border-radius:1rem;background-color:var(--color-surface-raised, oklch(100% 0 0))}.search-container[data-v-95758b60] .modal .inner .content .search.elevated{margin:.625rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-left-radius:0;border-bottom-right-radius:0}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper{border-radius:1rem;padding-left:1.5rem;padding-right:1.5rem;height:4.75rem;border:none;box-shadow:var(--shadow-floating-soft)}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper.focus{border:none;outline:none}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper .prepend-icon{height:1.5rem;width:1.5rem;margin-left:0;margin-right:.25rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-shadow:var(--shadow-floating-soft)}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-95758b60] .modal .inner .content .button{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.search-container[data-v-95758b60] .modal .inner .content .button.cancel{font-weight:400;border-left:1px solid var(--color-border-default, oklch(86.277% .0063 264.565));border-radius:0;padding-left:1rem;padding-right:.5rem}@media(min-width:768px){.modal.loader-modal[data-v-95758b60] .inner .content{padding:.5rem}}[data-v-2e97f961] .input{min-width:10rem;border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right-width:0px!important}[data-v-2e97f961] .search-options .wrapper{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-left-width:0px!important}.scoped-search[data-v-2e97f961]{display:flex}.scoped-search .search[data-v-2e97f961]{flex-grow:1}.scoped-search .search:has(.input:hover)+.divider[data-v-2e97f961]{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.scoped-search .search:focus-within+.divider[data-v-2e97f961]{border-left-style:solid;border-left-width:2px;border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))!important}.scoped-search .search:focus-within [data-v-2e97f961] .input{border-style:solid;border-width:2px;border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.scoped-search .search:focus-within [data-v-2e97f961] .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-2e97f961]{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.scoped-search:has(.search-options:focus) .divider[data-v-2e97f961],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-2e97f961]{border-left-style:solid;border-left-width:2px;border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))!important}.time-input[data-v-1f997ba5]{width:5.3125rem}.time-input[data-v-1f997ba5]::-webkit-calendar-picker-indicator{display:none}.time-input[data-v-1f997ba5]::-webkit-datetime-edit-text{padding-inline:.25rem;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.time-input[data-v-1f997ba5]::-webkit-datetime-edit-fields-wrapper{margin-inline:auto}.time-input.has-icon[data-v-1f997ba5]{width:7rem}.time-input.has-icon [data-v-1f997ba5]::-webkit-datetime-edit-fields-wrapper{margin-left:0}.time-input.has-icon[data-v-1f997ba5] .icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.time-input.error-full[data-v-1f997ba5] .error{width:max-content}.sidebar[data-v-91c8425e]{height:100%;width:100%;max-width:14.5rem;overflow:hidden;border-radius:var(--radius-lg, .5rem)}.sidebar.mini[data-v-91c8425e]{width:2.25rem}.sidebar.mini .menu[data-v-91c8425e]{width:fit-content}.menu[data-v-91c8425e]{gap:.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.summary[data-v-15250c0d]{width:var(--v5436127c);max-width:100%}[data-v-ad660516] .progress{transition-duration:var(--v1ad35c38)!important}.toast[data-v-ad660516]{position:relative;width:100%;max-width:24rem;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-divider, oklch(92.48% .0027 264.541));background-color:var(--color-surface-raised-alt, oklch(100% 0 0));box-shadow:var(--shadow-menu-large)}.toast .wrapper[data-v-ad660516]{display:flex;padding:1rem}.toast .linear-progress[data-v-ad660516] .progress-bar{border-bottom-right-radius:var(--radius-lg, .5rem);border-bottom-left-radius:var(--radius-lg, .5rem)}.toast.is-absolute[data-v-ad660516]{position:absolute;top:.25rem;right:.25rem}.toast .type-icon[data-v-ad660516]{margin-right:.75rem;flex-shrink:0}.toast .content[data-v-ad660516]{display:flex;flex-direction:column;padding-right:1.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.toast .content .title[data-v-ad660516]{margin-bottom:.25rem;font-weight:var(--font-weight-medium, 500)}.toast .content .description[data-v-ad660516]{margin-bottom:1rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.toast .content .actions[data-v-ad660516]{display:flex;gap:.5rem}.toast .close[data-v-ad660516]{position:absolute;top:.5rem;right:0}.toast .close[data-v-ad660516] .mini-icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.close:hover .mini-icon[data-v-ad660516]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.error .type-icon[data-v-ad660516]{color:var(--color-danger, oklch(61.535% .2075 25.224))}.warning .type-icon[data-v-ad660516]{color:var(--color-warning, oklch(58.272% .162 45.983))}.success .type-icon[data-v-ad660516]{color:var(--color-success, oklch(55.106% .1432 149.926))}.info .type-icon[data-v-ad660516]{color:var(--color-info, oklch(62.538% .1804 219.935))}.fade-enter-from[data-v-ad660516],.fade-leave-to[data-v-ad660516]{translate:15rem 0;opacity:0%}.fade-enter-to[data-v-ad660516],.fade-leave-from[data-v-ad660516]{translate:0 0;opacity:100%}.fade-enter-active[data-v-ad660516],.fade-leave-active[data-v-ad660516]{transition-property:all;transition-timing-function:var(--default-transition-timing-function);transition-duration:.3s}.toast-group[data-v-b0c69dc2]{position:fixed;top:0;right:0;z-index:100;display:flex;max-height:100vh;flex-direction:column;gap:1rem;overflow-x:hidden;overflow-y:auto;padding:1rem;transition-property:all;transition-timing-function:var(--default-transition-timing-function);transition-duration:.15s;scrollbar-width:none}.breadcrumb-item[data-v-650beff2]{display:inline-flex;min-width:0;max-width:100%;align-items:center;white-space:nowrap;font-size:.875rem;line-height:var(--tw-leading, calc(1.25 / .875));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.breadcrumb-item.current[data-v-650beff2]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.breadcrumb-item.disabled[data-v-650beff2]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.breadcrumb-label[data-v-650beff2]{min-width:0;overflow:hidden;text-overflow:ellipsis}.breadcrumb-link[data-v-650beff2]{text-decoration:none;transition:color .15s ease}.breadcrumb-link[data-v-650beff2]:hover,.breadcrumb-link[data-v-650beff2]:focus-visible{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.breadcrumb[data-v-962135a7]{position:relative;min-width:0}.breadcrumb-list[data-v-962135a7]{display:flex;min-width:0;flex-wrap:nowrap;overflow:hidden;align-items:center;gap:.375rem;margin:0;padding:0;list-style:none;white-space:nowrap}.breadcrumb-list-measurement[data-v-962135a7]{position:absolute;inset:0 auto auto 0;width:100%;visibility:hidden;pointer-events:none;overflow:hidden}.breadcrumb-list-measurement .overflow-button[data-v-962135a7]{visibility:hidden}.breadcrumb-list-measurement .breadcrumb-entry.last-visible[data-v-962135a7]{flex:0 0 auto;overflow:visible}.breadcrumb-entry[data-v-962135a7]{display:inline-flex;min-width:0;flex-shrink:0;align-items:center;gap:.375rem}.breadcrumb-entry.last-visible[data-v-962135a7]{flex:1 1 auto;overflow:hidden}.breadcrumb-separator[data-v-962135a7]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.overflow-button[data-v-962135a7]{display:inline-flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;border:0;border-radius:.375rem;padding:0;color:var(--color-text-secondary, oklch(55.1% .023 264.36));background-color:transparent;cursor:pointer;transition:color .15s ease}.overflow-button[data-v-962135a7]:hover,.overflow-button[data-v-962135a7]:focus-visible{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.scaffold-summary-branch[data-v-2b5f5390]{width:100%}.scaffold-summary-branch-header[data-v-2b5f5390]{position:relative;display:block;width:100%}.scaffold-summary-item[data-v-2b5f5390]{--scaffold-summary-item-hover-bg: color-mix( in oklch, var(--color-text-primary, oklch(21.049% .032 264.664)) 4%, transparent );display:flex;box-sizing:border-box;min-height:2rem;width:100%;align-items:center;gap:.5rem;overflow:hidden;border-radius:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));text-decoration:none;padding:.375rem .5rem;font-size:.875rem;line-height:1.25rem;transition:background-color .15s ease,color .15s ease,gap .22s cubic-bezier(.2,0,0,1)}.scaffold-summary-item[data-v-2b5f5390]:hover{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.scaffold-summary-item[data-v-2b5f5390]:focus-visible,.scaffold-summary-item.active[data-v-2b5f5390]{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.scaffold-summary-item.active-descendant[data-v-2b5f5390]{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.scaffold-summary-item.mini[data-v-2b5f5390]{gap:0}.scaffold-summary-item-link[data-v-2b5f5390]{min-width:0;width:100%;padding-right:2.75rem}.scaffold-summary-item-toggle[data-v-2b5f5390]{border:0;background:transparent;text-align:left;cursor:pointer}.scaffold-summary-item-chevron-button[data-v-2b5f5390]{display:inline-flex;position:absolute;top:50%;right:.25rem;transform:translateY(-50%);min-height:2rem;width:2rem;flex-shrink:0;align-items:center;justify-content:center;border:0;border-radius:.5rem;background:transparent;color:var(--color-text-disabled, oklch(51.786% .0108 264.705));cursor:pointer;transition:background-color .15s ease,color .15s ease}.scaffold-summary-item-chevron-button[data-v-2b5f5390]:hover,.scaffold-summary-item-chevron-button[data-v-2b5f5390]:focus-visible{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541));color:var(--color-text-primary, oklch(21.049% .032 264.664))}@supports (background-color: color-mix(in oklch,black 4%,transparent)){.scaffold-summary-item[data-v-2b5f5390]:hover,.scaffold-summary-item[data-v-2b5f5390]:focus-visible,.scaffold-summary-item.active[data-v-2b5f5390],.scaffold-summary-item.active-descendant[data-v-2b5f5390]{background-color:var( --scaffold-summary-item-hover-bg, var(--color-surface-subtle-active, oklch(92.48% .0027 264.541)) )}.scaffold-summary-item-chevron-button[data-v-2b5f5390]:hover,.scaffold-summary-item-chevron-button[data-v-2b5f5390]:focus-visible{background-color:var( --scaffold-summary-item-hover-bg, var(--color-surface-subtle-active, oklch(92.48% .0027 264.541)) )}}.scaffold-summary-item-chevron[data-v-2b5f5390]{flex-shrink:0}.scaffold-summary-item-text[data-v-2b5f5390]{min-width:0;max-width:10rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;opacity:1;transition:max-width .14s ease,opacity .11s ease}.scaffold-summary-item-text.mini[data-v-2b5f5390]{max-width:0;opacity:0}.scaffold-summary-subitems[data-v-2b5f5390]{display:flex;position:relative;flex-direction:column;gap:.25rem;padding-top:.25rem;padding-left:1.625rem;padding-right:1.5rem}.scaffold-summary-subitems[data-v-2b5f5390]:before{content:"";position:absolute;top:.25rem;bottom:0;left:1rem;width:.0625rem;background-color:var(--color-border-subtle, oklch(92.789% .0041 286.32))}@media(prefers-reduced-motion:reduce){.scaffold-summary-item[data-v-2b5f5390],.scaffold-summary-item-text[data-v-2b5f5390],.scaffold-summary-item-chevron-button[data-v-2b5f5390]{transition:none}}.page-layout[data-v-c0b7f42b]{--layout-right-sidebar-gap: 1.5rem;--layout-content-gap: .75rem;--layout-shell-padding: 1rem;--layout-sidebar-surface: var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838));--layout-content-shadow: var(--tw-inset-shadow, 0 0 #0000), var(--tw-inset-ring-shadow, 0 0 #0000), var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 .0625rem .1875rem 0 #0000001a, 0 .0625rem .125rem -.0625rem #0000001a;--sidebar-rail-width-expanded: 17rem;--sidebar-resize-duration: .22s;--sidebar-resize-easing: cubic-bezier(.2, 0, 0, 1);position:relative;display:flex;min-height:100vh;flex-direction:column;overflow-x:visible;background-color:var(--layout-sidebar-surface)}.page-layout .wrap[data-v-c0b7f42b]{margin-right:0;display:flex;min-height:100vh;width:100%;flex-direction:row;align-self:stretch}.page-layout .sidebar[data-v-c0b7f42b]{position:sticky;top:0;margin-bottom:1rem;height:fit-content;align-self:flex-start}.page-layout .sidebar-left-rail[data-v-c0b7f42b]{display:flex;position:sticky;top:0;height:100vh;max-height:100vh;width:var(--sidebar-rail-width-expanded);max-width:var(--sidebar-rail-width-expanded);flex-basis:var(--sidebar-rail-width-expanded);flex-shrink:0;align-self:stretch;flex-direction:column;overflow:visible;background-color:var(--layout-sidebar-surface);padding:.5rem;transition:width var(--sidebar-resize-duration) var(--sidebar-resize-easing),max-width var(--sidebar-resize-duration) var(--sidebar-resize-easing),flex-basis var(--sidebar-resize-duration) var(--sidebar-resize-easing),padding-inline var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .sidebar-left-rail.is-collapsed[data-v-c0b7f42b]{width:0;max-width:0;flex-basis:0;padding-inline:0;overflow:hidden;pointer-events:none}.page-layout .sidebar-left[data-v-c0b7f42b]{width:100%;max-width:none;position:static;margin-bottom:0;min-height:0;flex:1;align-self:stretch;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain}.page-layout .sidebar-summary[data-v-c0b7f42b]{width:100%;display:flex;flex-direction:column;align-items:stretch;padding:.5rem;row-gap:.25rem}.page-layout .sidebar-summary[data-v-c0b7f42b] .summary-group{width:100%;padding-block:.25rem}.page-layout .sidebar-summary[data-v-c0b7f42b] .summary-group>.header .name{font-size:.875rem;line-height:1.25rem}.page-layout .sidebar-summary[data-v-c0b7f42b] .summary-group>.items{width:100%;box-sizing:border-box;border-left-color:var(--color-border-subtle, oklch(92.789% .0041 286.32))}.page-layout .sidebar-logo[data-v-c0b7f42b]{display:flex;flex-shrink:0;align-items:center;padding:.5rem}.page-layout .sidebar-logo .sidebar-logo-link[data-v-c0b7f42b]{display:flex;box-sizing:border-box;width:100%;align-items:center;gap:.75rem;overflow:hidden;border-radius:.75rem;padding:.5rem;text-align:left;text-decoration:none;background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838));transition:background-color .15s ease,gap var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .sidebar-logo .sidebar-logo-link[data-v-c0b7f42b]:hover,.page-layout .sidebar-logo .sidebar-logo-link[data-v-c0b7f42b]:focus-visible{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.page-layout .sidebar-logo .sidebar-logo-mark[data-v-c0b7f42b]{display:inline-flex;flex-shrink:0;align-items:center;justify-content:center}.page-layout .sidebar-logo .sidebar-logo-image[data-v-c0b7f42b]{display:block;height:2rem;width:2rem;border-radius:.5rem}.page-layout .sidebar-logo .sidebar-logo-copy[data-v-c0b7f42b]{display:flex;min-width:0;flex-direction:column;overflow:hidden;white-space:nowrap}.page-layout .sidebar-logo .sidebar-logo-title[data-v-c0b7f42b]{font-size:.875rem;line-height:1rem;font-weight:var(--font-weight-semibold, 600);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.page-layout .sidebar-logo .sidebar-logo-subtitle[data-v-c0b7f42b]{font-size:.75rem;line-height:1rem;color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.page-layout .sidebar-right[data-v-c0b7f42b]{display:flex;flex-direction:column;gap:1rem;min-height:100vh;padding:var(--layout-shell-padding) var(--layout-shell-padding) 1.5rem 0}.page-layout .sidebar-right .sidebar-right-content[data-v-c0b7f42b]{display:flex;flex-direction:column;gap:1rem}.page-layout .sidebar-user-menu[data-v-c0b7f42b]{margin-top:auto;display:flex;flex-direction:column;flex-shrink:0;padding:.5rem}.page-layout .sidebar-user-button[data-v-c0b7f42b]{display:flex;box-sizing:border-box;width:100%;align-items:center;gap:.5rem;overflow:hidden;border-radius:.75rem;padding:.5rem;text-align:left;background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838));transition:background-color .15s ease,gap var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .sidebar-user-button[data-v-c0b7f42b]:hover,.page-layout .sidebar-user-button[data-v-c0b7f42b]:focus-visible{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.page-layout .sidebar-user-copy[data-v-c0b7f42b]{display:flex;min-width:0;flex:1;flex-direction:column;overflow:hidden}.page-layout .sidebar-user-name[data-v-c0b7f42b]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:var(--tw-leading, calc(1.25 / .875));font-weight:var(--font-weight-semibold, 600);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.page-layout .sidebar-user-secondary[data-v-c0b7f42b]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.75rem;line-height:var(--tw-leading, calc(1 / .75));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.page-layout .sidebar-user-icon[data-v-c0b7f42b]{flex-shrink:0;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.page-layout .sidebar-user-actions[data-v-c0b7f42b]{display:flex;margin-top:auto;width:100%;flex-direction:column;gap:.25rem;flex-shrink:0;padding:.5rem}.page-layout .sidebar-user-actions+.sidebar-user-menu[data-v-c0b7f42b]{margin-top:0}.page-layout .mobile-sidebar-content[data-v-c0b7f42b]{display:flex;height:100%;min-height:100%;flex-direction:column;gap:.25rem;padding-bottom:.5rem}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions[data-v-c0b7f42b],.page-layout .mobile-sidebar-content .mobile-sidebar-user-menu[data-v-c0b7f42b]{padding:.5rem}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions[data-v-c0b7f42b],.page-layout .mobile-sidebar-content .mobile-sidebar-user-menu[data-v-c0b7f42b]{margin-top:auto}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions+.mobile-sidebar-user-menu[data-v-c0b7f42b]{margin-top:0}.page-layout .content-column[data-v-c0b7f42b]{display:flex;min-width:0;flex-grow:1;flex-direction:column;margin:.5rem .5rem .5rem 0;transition:margin var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .content-column .content-surface[data-v-c0b7f42b]{display:flex;position:relative;z-index:1;min-height:100%;min-width:0;flex:1;flex-direction:column;border-radius:1rem;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--layout-content-shadow)}.page-layout .sidebar-left-rail.is-collapsed+.content-column[data-v-c0b7f42b]{margin-left:.5rem}.page-layout .content-topbar[data-v-c0b7f42b]{padding-top:.75rem}.page-layout .content-topbar .content-topbar-row[data-v-c0b7f42b]{display:flex;min-width:0;align-items:center;gap:0;padding-inline:1rem;padding-bottom:.75rem}.page-layout .content-topbar .content-topbar-toggle[data-v-c0b7f42b]{flex-shrink:0;cursor:e-resize}.page-layout .content-topbar .content-topbar-divider[data-v-c0b7f42b]{height:1rem;align-self:center;margin-left:.5rem;margin-right:.75rem}.page-layout .content-topbar .content-topbar-breadcrumb[data-v-c0b7f42b]{min-width:0;flex:1 1 auto}.page-layout .content-topbar .content-topbar-actions[data-v-c0b7f42b]{display:flex;flex-shrink:0;align-items:center;gap:.5rem;margin-left:auto;padding-left:.5rem}.page-layout .main[data-v-c0b7f42b]{min-width:0;flex-grow:1;padding:1rem}.page-layout .main [data-v-c0b7f42b] .page-header{background-color:transparent}@media(prefers-reduced-motion:reduce){.page-layout .sidebar-left-rail[data-v-c0b7f42b],.page-layout .sidebar-summary[data-v-c0b7f42b] .summary-group>.header,.page-layout .sidebar-summary[data-v-c0b7f42b] .summary-group>.header .name,.page-layout .sidebar-logo-link[data-v-c0b7f42b],.page-layout .sidebar-user-button[data-v-c0b7f42b],.page-layout .sidebar-logo-copy[data-v-c0b7f42b],.page-layout .sidebar-user-copy[data-v-c0b7f42b],.page-layout .sidebar-user-icon[data-v-c0b7f42b]{transition:none}}@media(max-width:64rem){.page-layout[data-v-c0b7f42b]{--layout-content-gap: .5rem;--layout-shell-padding: .75rem;--sidebar-rail-width-expanded: 15rem}.page-layout .wrap[data-v-c0b7f42b]{min-height:100vh}.page-layout .sidebar-left-rail[data-v-c0b7f42b]{padding:.5rem .375rem}.page-layout .sidebar-summary[data-v-c0b7f42b]{padding:.375rem}.page-layout .content-column[data-v-c0b7f42b]{margin:.5rem .5rem .5rem 0}.page-layout .content-column .content-surface[data-v-c0b7f42b]{border-radius:.75rem}.page-layout .content-topbar .content-topbar-row[data-v-c0b7f42b]{padding-inline:.875rem}.page-layout .main[data-v-c0b7f42b]{padding:.875rem .875rem 1.5rem}.page-layout .sidebar-right[data-v-c0b7f42b]{min-height:100vh;padding:.75rem .75rem 1rem 0}}@media(max-width:48rem){.page-layout[data-v-c0b7f42b]{--layout-content-gap: .5rem;--layout-shell-padding: .5rem}.page-layout .wrap[data-v-c0b7f42b]{min-height:100vh;flex-direction:column}.page-layout .sidebar-left-rail[data-v-c0b7f42b]{display:none}.page-layout .sidebar-user-actions[data-v-c0b7f42b],.page-layout .sidebar-user-menu[data-v-c0b7f42b]{margin-top:0;padding-top:.25rem}.page-layout .content-column[data-v-c0b7f42b]{margin:.5rem}.page-layout .content-column .content-surface[data-v-c0b7f42b]{min-height:auto;border-radius:.75rem}.page-layout .sidebar-left-rail.is-collapsed+.content-column[data-v-c0b7f42b]{margin:.5rem}.page-layout .content-topbar[data-v-c0b7f42b]{padding-top:.5rem}.page-layout .content-topbar .content-topbar-row[data-v-c0b7f42b]{padding-inline:.75rem;padding-bottom:.5rem}.page-layout .sidebar-right[data-v-c0b7f42b]{min-height:auto;padding:0 .5rem .5rem}}.arrow[data-v-48ece3e5]{position:relative}.arrow.vertical[data-v-48ece3e5]{height:100%;width:fit-content;padding-inline:.75rem}.arrow.vertical .text[data-v-48ece3e5]{top:50%;translate:0 -50%;rotate:-90deg;text-align:center}.arrow.vertical.has-text[data-v-48ece3e5]{margin-right:2rem}.arrow:not(.vertical)[data-v-48ece3e5]{width:100%;padding-block:.75rem}.arrow:not(.vertical) .text[data-v-48ece3e5]{left:50%;margin-top:1.25rem;translate:-50% 0;text-align:center}.arrow:not(.vertical).has-text[data-v-48ece3e5]{margin-bottom:2rem}.arrow .arrow-pointer[data-v-48ece3e5]{position:absolute;border-right-style:solid;border-right-width:2px;border-bottom-style:solid;border-bottom-width:2px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding:.5rem}.arrow .arrow-pointer.up[data-v-48ece3e5],.arrow .arrow-pointer.down[data-v-48ece3e5]{margin-left:-.5rem}.arrow .arrow-pointer.up[data-v-48ece3e5]{top:0;margin-top:.125rem;rotate:-135deg}.arrow .arrow-pointer.down[data-v-48ece3e5]{bottom:0;margin-bottom:.125rem;rotate:45deg}.arrow .arrow-pointer.left[data-v-48ece3e5],.arrow .arrow-pointer.right[data-v-48ece3e5]{top:1rem;margin-top:-.75rem}.arrow .arrow-pointer.left[data-v-48ece3e5]{left:0;margin-left:.125rem;rotate:135deg}.arrow .arrow-pointer.right[data-v-48ece3e5]{right:0;margin-right:.125rem;rotate:-45deg}.arrow .text[data-v-48ece3e5]{position:absolute;display:block;text-wrap:nowrap;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.footer[data-v-89dedaa8]{display:flex;min-height:8rem;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;overflow:hidden}.footer .copy[data-v-89dedaa8]{width:100%;text-align:center;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header[data-v-f1d60f0c]{position:relative;z-index:50;width:100%;height:var(--v1ccf0090)}.header .wrapper[data-v-f1d60f0c]{position:fixed;display:flex;width:100%;justify-content:center;border-bottom-style:solid;border-bottom-width:1px;background-color:var(--color-surface-page, oklch(100% 0 0))}.header .wrapper .inner[data-v-f1d60f0c]{margin-right:calc(-1*(100vw - 100%));display:grid;height:100%;width:100vw;align-items:center;gap:.5rem;overflow-x:clip;grid-template-areas:"return-info return-info return-info" "prepend logo append" "middle middle middle";grid-template-columns:1fr auto 1fr}@media(min-width:64rem){.header .wrapper .inner[data-v-f1d60f0c]{max-width:100.4375rem}}.header .wrapper .inner .prepend[data-v-f1d60f0c]{margin-left:1.5rem;grid-area:prepend}.header .wrapper .inner .logo-container[data-v-f1d60f0c]{grid-area:logo}.header .wrapper .inner .logo-container .logo[data-v-f1d60f0c]{display:block;width:fit-content}.header .wrapper .inner .return-info[data-v-f1d60f0c]{display:flex;justify-content:center;border-bottom-style:solid;border-bottom-width:1px;padding-block:.5rem;grid-area:return-info}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-f1d60f0c]{justify-content:flex-start}}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-f1d60f0c]{border-bottom-width:0px}}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-f1d60f0c]{padding-block:0}}.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{height:1rem;width:1rem}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{height:1.5rem}}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{width:1.5rem}}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{border-style:none}}.header .wrapper .inner .return-info .return-link[data-v-f1d60f0c]{display:flex;align-items:center;gap:1rem}.header .wrapper .inner .return-info .return-link .text[data-v-f1d60f0c]{display:flex;align-items:center;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}@media(min-width:64rem){.header .wrapper .inner .return-info .return-link .text[data-v-f1d60f0c]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}}.header .wrapper .inner .middle[data-v-f1d60f0c]{display:flex;height:100%;align-items:center;justify-content:center;grid-area:middle}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c]{padding:0}}.header .wrapper .inner .middle[data-v-f1d60f0c]>*{margin-inline:.5rem;margin-bottom:.5rem}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c]>*{margin:0}}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .inline-container-prepended .icon{color:var(--color-accent, oklch(54.615% .2152 262.881))}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input{border-radius:var(--radius-2xl, 1rem);border-style:none;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));padding-block:.4375rem;padding-left:3.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input::placeholder{color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(hover:hover){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:hover{border-style:none}}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:focus{padding-block:.4375rem}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:focus{padding-right:1rem}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input{padding-block:.6875rem}}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input{font-size:var(--text-base, 1rem);line-height:var(--tw-leading, var(--text-base--line-height, 1.5 ))}}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:focus{padding-block:.6875rem}}.header .wrapper .inner .append[data-v-f1d60f0c]{display:flex;align-items:center;justify-content:flex-end;gap:1rem;grid-area:append}.header .wrapper .inner .append .icon[data-v-f1d60f0c]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.header .wrapper .inner .append .dropdown[data-v-f1d60f0c] .button{margin-right:1.5rem;background-color:transparent;padding:0}@media(min-width:1024px){.header[data-v-f1d60f0c],.header .wrapper[data-v-f1d60f0c]{height:5rem}.header .wrapper .inner[data-v-f1d60f0c]{grid-template-areas:"logo middle append";grid-template-columns:2fr 3fr 2fr}.header .wrapper .inner.left[data-v-f1d60f0c]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-f1d60f0c]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-f1d60f0c]{justify-content:center}.header .wrapper .inner.right[data-v-f1d60f0c]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-f1d60f0c]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-f1d60f0c]{grid-template-areas:"logo return-info middle append";grid-template-columns:1fr 1fr 2fr 2fr}.header .wrapper .prepend[data-v-f1d60f0c]{display:none}.header .wrapper .logo-container .logo[data-v-f1d60f0c]{margin-left:1.5rem}}.tab[data-v-0443e693]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-field-text, oklch(21.049% .032 264.664))}.tab .tab-count[data-v-0443e693]{margin-left:.5rem;display:none;border-radius:calc(infinity * 1px);padding-inline:.625rem;padding-block:.125rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}@media(min-width:48rem){.tab .tab-count[data-v-0443e693]{display:inline-block}}.tab.active[data-v-0443e693]{border-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-accent, oklch(54.615% .2152 262.881))}.tab.disabled[data-v-0443e693]{pointer-events:none;cursor:not-allowed;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.tab.disabled.active[data-v-0443e693]{border-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.tabs[data-v-2de10beb]{position:relative;display:flex;background-color:inherit;box-shadow:var(--shadow-base),inset 0 -1px 0 0 var(--color-border-default, oklch(86.277% .0063 264.565))}:where(.tabs[data-v-2de10beb]>:not(:last-child)){margin-inline-start:0rem;margin-inline-end:2rem}.tabs[data-v-2de10beb] .tab{cursor:pointer;border-bottom-style:solid;border-bottom-width:2px;padding-inline:.25rem;padding-block:1rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);white-space:nowrap}.tabs[data-v-2de10beb] .tab:not(.active){border-color:transparent;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.tabs[data-v-2de10beb] .tab:hover:not(.active){color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(hover:hover){.tabs[data-v-2de10beb] .tab:hover:not(.active):hover{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}}.tabs[data-v-2de10beb] .tab .tab-count{border-style:solid;border-width:1px}.page-header[data-v-bd4e0bfa]{position:relative;background-color:var(--color-surface-canvas, oklch(100% 0 0))}.page-header.header-sticky[data-v-bd4e0bfa]{position:sticky;z-index:21;top:var(--v55f7079c)}.page-header.header-sticky.overlap[data-v-bd4e0bfa]{border-bottom-style:solid;border-bottom-width:1px;border-color:var(--color-border-subtle, oklch(92.789% .0041 286.32));box-shadow:var(--shadow-page-header-overlap);padding-top:var(--v9a339d4c)}.page-header.header-sticky.overlap .heading[data-v-bd4e0bfa]{margin-bottom:.25rem}.page-header.header-sticky.overlap .heading h1[data-v-bd4e0bfa]{font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.page-header .back-button-wrapper[data-v-bd4e0bfa]{height:1.25rem;width:100%}.page-header h1[data-v-bd4e0bfa]{font-size:var(--text-2xl, 1.5rem);line-height:var(--tw-leading, var(--text-2xl--line-height, calc(2 / 1.5)));transition-property:all;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}@media(min-width:48rem){.page-header h1[data-v-bd4e0bfa]{font-size:1.75rem}}.page-header .tabs[data-v-bd4e0bfa]{margin-bottom:2rem}.page-header .heading[data-v-bd4e0bfa]{margin-bottom:1rem;display:flex;align-items:center}@media(min-width:48rem){.page-header .heading[data-v-bd4e0bfa]{margin-bottom:1.25rem}}.page-header .heading[data-v-bd4e0bfa] .image-wrapper{width:fit-content}.page-header .heading[data-v-bd4e0bfa] .image-wrapper .image{max-height:3.5rem}.page-header .heading .header-start[data-v-bd4e0bfa]{display:flex;flex-direction:row;align-items:center;gap:1rem}.page-header .heading .actions[data-v-bd4e0bfa]{margin-left:auto;display:flex;gap:.5rem}.page-header .heading .title-wrapper[data-v-bd4e0bfa]{display:flex;flex-direction:column}.page-header .heading .title-wrapper .subtitle[data-v-bd4e0bfa]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-semibold, 600);letter-spacing:var(--tracking-tight, -.025em);color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.page-header .filters[data-v-bd4e0bfa]{display:flex;gap:.5rem;overflow:auto;padding-bottom:.5rem}@media(min-width:48rem){.page-header .filters[data-v-bd4e0bfa]{flex-wrap:wrap}}.page-header .filters .search[data-v-bd4e0bfa]{min-width:12rem}@media(min-width:64rem){.page-header .filters .search[data-v-bd4e0bfa]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-bd4e0bfa]{display:contents}.page-header .filters .filter-group[data-v-bd4e0bfa] .title{margin-left:1rem}.hamburger-icon[data-v-05812864]{cursor:pointer}.page-layout[data-v-37c94be7]{position:relative;display:flex;flex-direction:column;overflow-x:clip}.page-layout .wrap[data-v-37c94be7]{margin-right:calc(-1*(100vw - 100%));display:flex;height:100%;width:100vw;flex-direction:column;align-self:center}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{max-width:100.4375rem}}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{flex-direction:row}}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{gap:1.25rem}}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{padding-inline:1.5rem}}@media(min-width:96rem){.page-layout .wrap[data-v-37c94be7]{gap:5rem}}.page-layout .wrap.has-sidebar .main[data-v-37c94be7]{padding-inline:1.5rem}@media(min-width:64rem){.page-layout .wrap.has-sidebar .main[data-v-37c94be7]{padding-right:0}}.page-layout.layout-mirrored .main[data-v-37c94be7]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-37c94be7]{order:2}.page-layout .sidebar[data-v-37c94be7]{position:sticky;margin-bottom:1rem;height:100%;top:var(--v1b3cab92)}@media(min-width:64rem){.page-layout .sidebar[data-v-37c94be7]{margin-top:2.5rem}}.page-layout .sidebar-left[data-v-37c94be7]{display:none}@media(min-width:64rem){.page-layout .sidebar-left[data-v-37c94be7]{display:block}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-37c94be7]{width:fit-content}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-37c94be7]{max-width:10rem}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-37c94be7]{width:100%}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-37c94be7]{max-width:14.5rem}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-37c94be7]:not(.mini) .menu-item-content{padding-right:1rem}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-37c94be7]:not(.mini) .menu-item-content{padding-right:0}}.page-layout .sidebar-right[data-v-37c94be7]{padding-inline:1.5rem;padding-block:1rem;padding-top:0}@media(min-width:64rem){.page-layout .sidebar-right[data-v-37c94be7]{padding:0}}@media(min-width:64rem){.page-layout .sidebar-right[data-v-37c94be7]{padding-top:1rem}}.page-layout .main[data-v-37c94be7]{min-width:0;flex-grow:1;padding-block:1rem}@media(min-width:64rem){.page-layout .main[data-v-37c94be7]{padding-block:2.5rem}}.persistent button[data-v-daacf17f]{appearance:none;background-color:transparent;border:0;padding:0;color:inherit;font:inherit;line-height:inherit}.persistent .label .badge[data-v-daacf17f]{margin-right:.375rem}.persistent .label .micro-icon[data-v-daacf17f]{margin-left:.25rem}.persistent [data-v-daacf17f] .menu .current{color:var(--color-text-primary, oklch(21.049% .032 264.664))!important}.step-connector[data-v-30e2d7ef]:not(.absolute){flex:1}.step-connector.absolute[data-v-30e2d7ef]{position:absolute;top:9.1px;right:calc(50% + 11px);left:calc(-50% + 11px)}.step-connector .horizontal-line[data-v-30e2d7ef]{display:block;border-top-style:solid;border-top-width:.4rem;border-color:var(--color-surface-subtle, oklch(100% 0 0))}.step[data-v-ac6a9dde]:not(.xs){position:relative;display:flex;flex:1;flex-direction:column;align-items:center}.step .step-content[data-v-ac6a9dde]{display:flex;flex-direction:column;align-items:center}.step .step-content .step-state[data-v-ac6a9dde]{position:relative;z-index:1;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:50%;background-color:var(--color-surface-subtle, oklch(100% 0 0));font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.step .step-content .step-state.active[data-v-ac6a9dde]:before{position:absolute;z-index:1;height:2.5rem;width:2.5rem;border-radius:50%;opacity:10%;content:""}.step .step-content .step-state .micro-icon[data-v-ac6a9dde]{color:var(--color-text-inverse, oklch(100% 0 0))}.step .step-content .label[data-v-ac6a9dde]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.step .step-content .label.unfinished[data-v-ac6a9dde]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.stepper[data-v-1f35bf68]{z-index:1}.stepper.xs .wrapper[data-v-1f35bf68]{align-items:center}.stepper.xs .wrapper[data-v-1f35bf68] .step-connector:first-child .horizontal-line{border-top-left-radius:calc(infinity * 1px);border-bottom-left-radius:calc(infinity * 1px)}.stepper.xs .wrapper[data-v-1f35bf68] .step-connector:last-child .horizontal-line{border-top-right-radius:calc(infinity * 1px);border-bottom-right-radius:calc(infinity * 1px)}.stepper[data-v-1f35bf68]:not(.xs){justify-content:space-between}.stepper.default[data-v-1f35bf68] .step-connector .active{border-color:var(--color-accent, oklch(54.615% .2152 262.881))}.stepper.default[data-v-1f35bf68] .step-state.finished,.stepper.default[data-v-1f35bf68] .step-state.active,.stepper.default[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.stepper.default[data-v-1f35bf68] .step-state .icon{color:var(--color-on-accent, oklch(100% 0 0))}.stepper.error[data-v-1f35bf68] .step-connector .active{border-color:var(--color-danger, oklch(61.535% .2075 25.224))}.stepper.error[data-v-1f35bf68] .step-state.finished,.stepper.error[data-v-1f35bf68] .step-state.active,.stepper.error[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-danger, oklch(61.535% .2075 25.224))}.stepper.error[data-v-1f35bf68] .step-state .icon{color:var(--color-on-danger, oklch(100% 0 0))}.stepper.warning[data-v-1f35bf68] .step-connector .active{border-color:var(--color-warning, oklch(58.272% .162 45.983))}.stepper.warning[data-v-1f35bf68] .step-state.finished,.stepper.warning[data-v-1f35bf68] .step-state.active,.stepper.warning[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-warning, oklch(58.272% .162 45.983))}.stepper.warning[data-v-1f35bf68] .step-state .icon{color:var(--color-on-warning, oklch(100% 0 0))}.stepper.success[data-v-1f35bf68] .step-connector .active{border-color:var(--color-success, oklch(55.106% .1432 149.926))}.stepper.success[data-v-1f35bf68] .step-state.finished,.stepper.success[data-v-1f35bf68] .step-state.active,.stepper.success[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.stepper.success[data-v-1f35bf68] .step-state .icon{color:var(--color-on-success, oklch(100% 0 0))}.stepper.disabled[data-v-1f35bf68] .step-connector .active{background-color:var(--color-field-border, oklch(86.277% .0063 264.565))}.stepper.disabled[data-v-1f35bf68] .step-state.finished,.stepper.disabled[data-v-1f35bf68] .step-state.active,.stepper.disabled[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-field-border, oklch(86.277% .0063 264.565))}.stepper.disabled[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.stepper.disabled[data-v-1f35bf68] .step-state .icon{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.stepper .wrapper[data-v-1f35bf68]{position:relative;display:flex;flex-direction:row}.stepper .active-step[data-v-1f35bf68]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.filter-tabs[data-v-77bf531e]{display:flex;justify-content:space-between;gap:.5625rem}[data-v-77bf531e] .tab{display:flex;height:2.5rem;flex-grow:1;align-items:center;justify-content:space-between;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;padding-right:.625rem;padding-left:1rem}[data-v-77bf531e] .tab:not(.active){border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}[data-v-77bf531e] .tab .tab-count{border-style:solid;border-width:1px}[data-v-77bf531e] .tab.active{border-style:solid;border-width:2px;padding-right:.5625rem;padding-left:.9375rem}.container{position:relative;height:100%;color:var(--color-text-primary, #111827);font-family:var(--font-sans)}.container #probo-product-search-bar{outline:none}.container span.option{display:flex;gap:1rem;align-items:center}.container span.option .title{font-size:1.125rem;font-weight:600;display:block}.container span.option .subtitle{color:#6a7282;font-size:.875rem;line-height:1.25rem;margin-top:.25rem;display:block}`, M0 = /* @__PURE__ */ Au({
  ...Aa,
  styles: [V0],
  setup(e, t) {
    return ti(Aa).use(Ru), Dt.autoDetectLanguage = !1, Aa.setup ? Aa.setup(e, t) : null;
  }
});
customElements.define("connect-product-configurator", M0);
