/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Wr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const ye = {}, Co = [], ht = () => {
}, Cn = () => !1, Ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zr = (e) => e.startsWith("onUpdate:"), Te = Object.assign, Gr = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Es = Object.prototype.hasOwnProperty, ke = (e, t) => Es.call(e, t), re = Array.isArray, zo = (e) => ia(e) === "[object Map]", jo = (e) => ia(e) === "[object Set]", gi = (e) => ia(e) === "[object Date]", ue = (e) => typeof e == "function", Ee = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", _e = (e) => e !== null && typeof e == "object", zn = (e) => (_e(e) || ue(e)) && ue(e.then) && ue(e.catch), Tn = Object.prototype.toString, ia = (e) => Tn.call(e), Os = (e) => ia(e).slice(8, -1), qa = (e) => ia(e) === "[object Object]", Jr = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fo = /* @__PURE__ */ Wr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ha = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, As = /-\w/g, Le = Ha(
  (e) => e.replace(As, (t) => t.slice(1).toUpperCase())
), Vs = /\B([A-Z])/g, Je = Ha(
  (e) => e.replace(Vs, "-$1").toLowerCase()
), Ka = Ha((e) => e.charAt(0).toUpperCase() + e.slice(1)), cr = Ha(
  (e) => e ? `on${Ka(e)}` : ""
), Ge = (e, t) => !Object.is(e, t), ba = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, En = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Wa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zr = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let bi;
const Za = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bt(e) {
  if (re(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], r = Ee(a) ? Is(a) : bt(a);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Ee(e) || _e(e))
    return e;
}
const Ps = /;(?![^(]*\))/g, js = /:([^]+)/, Ms = /\/\*[^]*?\*\//g;
function Is(e) {
  const t = {};
  return e.replace(Ms, "").split(Ps).forEach((o) => {
    if (o) {
      const a = o.split(js);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function pe(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (re(e))
    for (let o = 0; o < e.length; o++) {
      const a = pe(e[o]);
      a && (t += a + " ");
    }
  else if (_e(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
function na(e) {
  if (!e) return null;
  let { class: t, style: o } = e;
  return t && !Ee(t) && (e.class = pe(t)), o && (e.style = bt(o)), e;
}
const Ns = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bs = /* @__PURE__ */ Wr(Ns);
function On(e) {
  return !!e || e === "";
}
function Ls(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = Yt(e[a], t[a]);
  return o;
}
function Yt(e, t) {
  if (e === t) return !0;
  let o = gi(e), a = gi(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = gt(e), a = gt(t), o || a)
    return e === t;
  if (o = re(e), a = re(t), o || a)
    return o && a ? Ls(e, t) : !1;
  if (o = _e(e), a = _e(t), o || a) {
    if (!o || !a)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const n in e) {
      const l = e.hasOwnProperty(n), s = t.hasOwnProperty(n);
      if (l && !s || !l && s || !Yt(e[n], t[n]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Yr(e, t) {
  return e.findIndex((o) => Yt(o, t));
}
const An = (e) => !!(e && e.__v_isRef === !0), D = (e) => Ee(e) ? e : e == null ? "" : re(e) || _e(e) && (e.toString === Tn || !ue(e.toString)) ? An(e) ? D(e.value) : JSON.stringify(e, Vn, 2) : String(e), Vn = (e, t) => An(t) ? Vn(e, t.value) : zo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, r], i) => (o[ur(a, i) + " =>"] = r, o),
    {}
  )
} : jo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => ur(o))
} : gt(t) ? ur(t) : _e(t) && !re(t) && !qa(t) ? String(t) : t, ur = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    gt(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
function Ds(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Me;
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Me, !t && Me && (this.index = (Me.scopes || (Me.scopes = [])).push(
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
      const o = Me;
      try {
        return Me = this, t();
      } finally {
        Me = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Me, Me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Me = this.prevScope, this.prevScope = void 0);
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
function Xr() {
  return Me;
}
function Rs(e, t = !1) {
  Me && Me.cleanups.push(e);
}
let ze;
const pr = /* @__PURE__ */ new WeakSet();
class Pn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && Me.active && Me.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pr.has(this) && (pr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wi(this), In(this);
    const t = ze, o = mt;
    ze = this, mt = !0;
    try {
      return this.fn();
    } finally {
      Nn(this), ze = t, mt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ti(t);
      this.deps = this.depsTail = void 0, wi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Tr(this) && this.run();
  }
  get dirty() {
    return Tr(this);
  }
}
let jn = 0, Ro, Uo;
function Mn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Uo, Uo = e;
    return;
  }
  e.next = Ro, Ro = e;
}
function Qr() {
  jn++;
}
function ei() {
  if (--jn > 0)
    return;
  if (Uo) {
    let t = Uo;
    for (Uo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Ro; ) {
    let t = Ro;
    for (Ro = void 0; t; ) {
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
function In(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Nn(e) {
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const r = a.prevDep;
    a.version === -1 ? (a === o && (o = r), ti(a), Us(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = r;
  }
  e.deps = t, e.depsTail = o;
}
function Tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Bn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Bn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wo) || (e.globalVersion = Wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = ze, a = mt;
  ze = e, mt = !0;
  try {
    In(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ge(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ze = o, mt = a, Nn(e), e.flags &= -3;
  }
}
function ti(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: r } = e;
  if (a && (a.nextSub = r, e.prevSub = void 0), r && (r.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      ti(i, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Us(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let mt = !0;
const Ln = [];
function Rt() {
  Ln.push(mt), mt = !1;
}
function Ut() {
  const e = Ln.pop();
  mt = e === void 0 ? !0 : e;
}
function wi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = ze;
    ze = void 0;
    try {
      t();
    } finally {
      ze = o;
    }
  }
}
let Wo = 0;
class qs {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ga {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ze || !mt || ze === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ze)
      o = this.activeLink = new qs(ze, this), ze.deps ? (o.prevDep = ze.depsTail, ze.depsTail.nextDep = o, ze.depsTail = o) : ze.deps = ze.depsTail = o, Dn(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = ze.depsTail, o.nextDep = void 0, ze.depsTail.nextDep = o, ze.depsTail = o, ze.deps === o && (ze.deps = a);
    }
    return o;
  }
  trigger(t) {
    this.version++, Wo++, this.notify(t);
  }
  notify(t) {
    Qr();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      ei();
    }
  }
}
function Dn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        Dn(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Er = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ Symbol(
  ""
), Or = /* @__PURE__ */ Symbol(
  ""
), Zo = /* @__PURE__ */ Symbol(
  ""
);
function Ie(e, t, o) {
  if (mt && ze) {
    let a = Er.get(e);
    a || Er.set(e, a = /* @__PURE__ */ new Map());
    let r = a.get(o);
    r || (a.set(o, r = new Ga()), r.map = a, r.key = o), r.track();
  }
}
function Bt(e, t, o, a, r, i) {
  const n = Er.get(e);
  if (!n) {
    Wo++;
    return;
  }
  const l = (s) => {
    s && s.trigger();
  };
  if (Qr(), t === "clear")
    n.forEach(l);
  else {
    const s = re(e), c = s && Jr(o);
    if (s && o === "length") {
      const d = Number(a);
      n.forEach((u, f) => {
        (f === "length" || f === Zo || !gt(f) && f >= d) && l(u);
      });
    } else
      switch ((o !== void 0 || n.has(void 0)) && l(n.get(o)), c && l(n.get(Zo)), t) {
        case "add":
          s ? c && l(n.get("length")) : (l(n.get(ho)), zo(e) && l(n.get(Or)));
          break;
        case "delete":
          s || (l(n.get(ho)), zo(e) && l(n.get(Or)));
          break;
        case "set":
          zo(e) && l(n.get(ho));
          break;
      }
  }
  ei();
}
function yo(e) {
  const t = /* @__PURE__ */ xe(e);
  return t === e ? t : (Ie(t, "iterate", Zo), /* @__PURE__ */ lt(e) ? t : t.map(wt));
}
function Ja(e) {
  return Ie(e = /* @__PURE__ */ xe(e), "iterate", Zo), e;
}
function Wt(e, t) {
  return /* @__PURE__ */ Vt(e) ? Ao(/* @__PURE__ */ Jt(e) ? wt(t) : t) : wt(t);
}
const Hs = {
  __proto__: null,
  [Symbol.iterator]() {
    return fr(this, Symbol.iterator, (e) => Wt(this, e));
  },
  concat(...e) {
    return yo(this).concat(
      ...e.map((t) => re(t) ? yo(t) : t)
    );
  },
  entries() {
    return fr(this, "entries", (e) => (e[1] = Wt(this, e[1]), e));
  },
  every(e, t) {
    return jt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return jt(
      this,
      "filter",
      e,
      t,
      (o) => o.map((a) => Wt(this, a)),
      arguments
    );
  },
  find(e, t) {
    return jt(
      this,
      "find",
      e,
      t,
      (o) => Wt(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return jt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return jt(
      this,
      "findLast",
      e,
      t,
      (o) => Wt(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return jt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return jt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return hr(this, "includes", e);
  },
  indexOf(...e) {
    return hr(this, "indexOf", e);
  },
  join(e) {
    return yo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return hr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return jt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Io(this, "pop");
  },
  push(...e) {
    return Io(this, "push", e);
  },
  reduce(e, ...t) {
    return yi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yi(this, "reduceRight", e, t);
  },
  shift() {
    return Io(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return jt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Io(this, "splice", e);
  },
  toReversed() {
    return yo(this).toReversed();
  },
  toSorted(e) {
    return yo(this).toSorted(e);
  },
  toSpliced(...e) {
    return yo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Io(this, "unshift", e);
  },
  values() {
    return fr(this, "values", (e) => Wt(this, e));
  }
};
function fr(e, t, o) {
  const a = Ja(e), r = a[t]();
  return a !== e && !/* @__PURE__ */ lt(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = o(i.value)), i;
  }), r;
}
const Ks = Array.prototype;
function jt(e, t, o, a, r, i) {
  const n = Ja(e), l = n !== e && !/* @__PURE__ */ lt(e), s = n[t];
  if (s !== Ks[t]) {
    const u = s.apply(e, i);
    return l ? wt(u) : u;
  }
  let c = o;
  n !== e && (l ? c = function(u, f) {
    return o.call(this, Wt(e, u), f, e);
  } : o.length > 2 && (c = function(u, f) {
    return o.call(this, u, f, e);
  }));
  const d = s.call(n, c, a);
  return l && r ? r(d) : d;
}
function yi(e, t, o, a) {
  const r = Ja(e);
  let i = o;
  return r !== e && (/* @__PURE__ */ lt(e) ? o.length > 3 && (i = function(n, l, s) {
    return o.call(this, n, l, s, e);
  }) : i = function(n, l, s) {
    return o.call(this, n, Wt(e, l), s, e);
  }), r[t](i, ...a);
}
function hr(e, t, o) {
  const a = /* @__PURE__ */ xe(e);
  Ie(a, "iterate", Zo);
  const r = a[t](...o);
  return (r === -1 || r === !1) && /* @__PURE__ */ ri(o[0]) ? (o[0] = /* @__PURE__ */ xe(o[0]), a[t](...o)) : r;
}
function Io(e, t, o = []) {
  Rt(), Qr();
  const a = (/* @__PURE__ */ xe(e))[t].apply(e, o);
  return ei(), Ut(), a;
}
const Ws = /* @__PURE__ */ Wr("__proto__,__v_isRef,__isVue"), Fn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt)
);
function Zs(e) {
  gt(e) || (e = String(e));
  const t = /* @__PURE__ */ xe(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class Rn {
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
      return a === (r ? i ? rd : Kn : i ? Hn : qn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const n = re(t);
    if (!r) {
      let s;
      if (n && (s = Hs[o]))
        return s;
      if (o === "hasOwnProperty")
        return Zs;
    }
    const l = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ae(t) ? t : a
    );
    if ((gt(o) ? Fn.has(o) : Ws(o)) || (r || Ie(t, "get", o), i))
      return l;
    if (/* @__PURE__ */ Ae(l)) {
      const s = n && Jr(o) ? l : l.value;
      return r && _e(s) ? /* @__PURE__ */ Vr(s) : s;
    }
    return _e(l) ? r ? /* @__PURE__ */ Vr(l) : /* @__PURE__ */ Xe(l) : l;
  }
}
class Un extends Rn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, r) {
    let i = t[o];
    const n = re(t) && Jr(o);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Vt(i);
      if (!/* @__PURE__ */ lt(a) && !/* @__PURE__ */ Vt(a) && (i = /* @__PURE__ */ xe(i), a = /* @__PURE__ */ xe(a)), !n && /* @__PURE__ */ Ae(i) && !/* @__PURE__ */ Ae(a))
        return c || (i.value = a), !0;
    }
    const l = n ? Number(o) < t.length : ke(t, o), s = Reflect.set(
      t,
      o,
      a,
      /* @__PURE__ */ Ae(t) ? t : r
    );
    return t === /* @__PURE__ */ xe(r) && (l ? Ge(a, i) && Bt(t, "set", o, a) : Bt(t, "add", o, a)), s;
  }
  deleteProperty(t, o) {
    const a = ke(t, o);
    t[o];
    const r = Reflect.deleteProperty(t, o);
    return r && a && Bt(t, "delete", o, void 0), r;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!gt(o) || !Fn.has(o)) && Ie(t, "has", o), a;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      re(t) ? "length" : ho
    ), Reflect.ownKeys(t);
  }
}
class Gs extends Rn {
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
const Js = /* @__PURE__ */ new Un(), Ys = /* @__PURE__ */ new Gs(), Xs = /* @__PURE__ */ new Un(!0);
const Ar = (e) => e, ua = (e) => Reflect.getPrototypeOf(e);
function Qs(e, t, o) {
  return function(...a) {
    const r = this.__v_raw, i = /* @__PURE__ */ xe(r), n = zo(i), l = e === "entries" || e === Symbol.iterator && n, s = e === "keys" && n, c = r[e](...a), d = o ? Ar : t ? Ao : wt;
    return !t && Ie(
      i,
      "iterate",
      s ? Or : ho
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
function pa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ed(e, t) {
  const o = {
    get(r) {
      const i = this.__v_raw, n = /* @__PURE__ */ xe(i), l = /* @__PURE__ */ xe(r);
      e || (Ge(r, l) && Ie(n, "get", r), Ie(n, "get", l));
      const { has: s } = ua(n), c = t ? Ar : e ? Ao : wt;
      if (s.call(n, r))
        return c(i.get(r));
      if (s.call(n, l))
        return c(i.get(l));
      i !== n && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ie(/* @__PURE__ */ xe(r), "iterate", ho), r.size;
    },
    has(r) {
      const i = this.__v_raw, n = /* @__PURE__ */ xe(i), l = /* @__PURE__ */ xe(r);
      return e || (Ge(r, l) && Ie(n, "has", r), Ie(n, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const n = this, l = n.__v_raw, s = /* @__PURE__ */ xe(l), c = t ? Ar : e ? Ao : wt;
      return !e && Ie(s, "iterate", ho), l.forEach((d, u) => r.call(i, c(d), c(u), n));
    }
  };
  return Te(
    o,
    e ? {
      add: pa("add"),
      set: pa("set"),
      delete: pa("delete"),
      clear: pa("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ lt(r) && !/* @__PURE__ */ Vt(r) && (r = /* @__PURE__ */ xe(r));
        const i = /* @__PURE__ */ xe(this);
        return ua(i).has.call(i, r) || (i.add(r), Bt(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ lt(i) && !/* @__PURE__ */ Vt(i) && (i = /* @__PURE__ */ xe(i));
        const n = /* @__PURE__ */ xe(this), { has: l, get: s } = ua(n);
        let c = l.call(n, r);
        c || (r = /* @__PURE__ */ xe(r), c = l.call(n, r));
        const d = s.call(n, r);
        return n.set(r, i), c ? Ge(i, d) && Bt(n, "set", r, i) : Bt(n, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ xe(this), { has: n, get: l } = ua(i);
        let s = n.call(i, r);
        s || (r = /* @__PURE__ */ xe(r), s = n.call(i, r)), l && l.call(i, r);
        const c = i.delete(r);
        return s && Bt(i, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ xe(this), i = r.size !== 0, n = r.clear();
        return i && Bt(
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
    o[r] = Qs(r, e, t);
  }), o;
}
function oi(e, t) {
  const o = ed(e, t);
  return (a, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? a : Reflect.get(
    ke(o, r) && r in a ? o : a,
    r,
    i
  );
}
const td = {
  get: /* @__PURE__ */ oi(!1, !1)
}, od = {
  get: /* @__PURE__ */ oi(!1, !0)
}, ad = {
  get: /* @__PURE__ */ oi(!0, !1)
};
const qn = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), rd = /* @__PURE__ */ new WeakMap();
function id(e) {
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
function nd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : id(Os(e));
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return /* @__PURE__ */ Vt(e) ? e : ai(
    e,
    !1,
    Js,
    td,
    qn
  );
}
// @__NO_SIDE_EFFECTS__
function ld(e) {
  return ai(
    e,
    !1,
    Xs,
    od,
    Hn
  );
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return ai(
    e,
    !0,
    Ys,
    ad,
    Kn
  );
}
function ai(e, t, o, a, r) {
  if (!_e(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = nd(e);
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
function Jt(e) {
  return /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ xe(t) : e;
}
function sd(e) {
  return !ke(e, "__v_skip") && Object.isExtensible(e) && En(e, "__v_skip", !0), e;
}
const wt = (e) => _e(e) ? /* @__PURE__ */ Xe(e) : e, Ao = (e) => _e(e) ? /* @__PURE__ */ Vr(e) : e;
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
  return Wn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return Wn(e, !0);
}
function Wn(e, t) {
  return /* @__PURE__ */ Ae(e) ? e : new dd(e, t);
}
class dd {
  constructor(t, o) {
    this.dep = new Ga(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : /* @__PURE__ */ xe(t), this._value = o ? t : wt(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ lt(t) || /* @__PURE__ */ Vt(t);
    t = a ? t : /* @__PURE__ */ xe(t), Ge(t, o) && (this._rawValue = t, this._value = a ? t : wt(t), this.dep.trigger());
  }
}
function xi(e) {
  e.dep && e.dep.trigger();
}
function y(e) {
  return /* @__PURE__ */ Ae(e) ? e.value : e;
}
function st(e) {
  return ue(e) ? e() : y(e);
}
const cd = {
  get: (e, t, o) => t === "__v_raw" ? e : y(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const r = e[t];
    return /* @__PURE__ */ Ae(r) && !/* @__PURE__ */ Ae(o) ? (r.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function Zn(e) {
  return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, cd);
}
class ud {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const o = this.dep = new Ga(), { get: a, set: r } = t(o.track.bind(o), o.trigger.bind(o));
    this._get = a, this._set = r;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function pd(e) {
  return new ud(e);
}
class fd {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new Ga(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ze !== this)
      return Mn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Bn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function hd(e, t, o = !1) {
  let a, r;
  return ue(e) ? a = e : (a = e.get, r = e.set), new fd(a, r, o);
}
const fa = {}, Sa = /* @__PURE__ */ new WeakMap();
let uo;
function md(e, t = !1, o = uo) {
  if (o) {
    let a = Sa.get(o);
    a || Sa.set(o, a = []), a.push(e);
  }
}
function vd(e, t, o = ye) {
  const { immediate: a, deep: r, once: i, scheduler: n, augmentJob: l, call: s } = o, c = (b) => r ? b : /* @__PURE__ */ lt(b) || r === !1 || r === 0 ? Lt(b, 1) : Lt(b);
  let d, u, f, p, h = !1, v = !1;
  if (/* @__PURE__ */ Ae(e) ? (u = () => e.value, h = /* @__PURE__ */ lt(e)) : /* @__PURE__ */ Jt(e) ? (u = () => c(e), h = !0) : re(e) ? (v = !0, h = e.some((b) => /* @__PURE__ */ Jt(b) || /* @__PURE__ */ lt(b)), u = () => e.map((b) => {
    if (/* @__PURE__ */ Ae(b))
      return b.value;
    if (/* @__PURE__ */ Jt(b))
      return c(b);
    if (ue(b))
      return s ? s(b, 2) : b();
  })) : ue(e) ? t ? u = s ? () => s(e, 2) : e : u = () => {
    if (f) {
      Rt();
      try {
        f();
      } finally {
        Ut();
      }
    }
    const b = uo;
    uo = d;
    try {
      return s ? s(e, 3, [p]) : e(p);
    } finally {
      uo = b;
    }
  } : u = ht, t && r) {
    const b = u, C = r === !0 ? 1 / 0 : r;
    u = () => Lt(b(), C);
  }
  const k = Xr(), _ = () => {
    d.stop(), k && k.active && Gr(k.effects, d);
  };
  if (i && t) {
    const b = t;
    t = (...C) => {
      b(...C), _();
    };
  }
  let x = v ? new Array(e.length).fill(fa) : fa;
  const $ = (b) => {
    if (!(!(d.flags & 1) || !d.dirty && !b))
      if (t) {
        const C = d.run();
        if (r || h || (v ? C.some((T, K) => Ge(T, x[K])) : Ge(C, x))) {
          f && f();
          const T = uo;
          uo = d;
          try {
            const K = [
              C,
              // pass undefined as the old value when it's changed for the first time
              x === fa ? void 0 : v && x[0] === fa ? [] : x,
              p
            ];
            x = C, s ? s(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            uo = T;
          }
        }
      } else
        d.run();
  };
  return l && l($), d = new Pn(u), d.scheduler = n ? () => n($, !1) : $, p = (b) => md(b, !1, d), f = d.onStop = () => {
    const b = Sa.get(d);
    if (b) {
      if (s)
        s(b, 4);
      else
        for (const C of b) C();
      Sa.delete(d);
    }
  }, t ? a ? $(!0) : x = d.run() : n ? n($.bind(null, !0), !0) : d.run(), _.pause = d.pause.bind(d), _.resume = d.resume.bind(d), _.stop = _, _;
}
function Lt(e, t = 1 / 0, o) {
  if (t <= 0 || !_e(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, /* @__PURE__ */ Ae(e))
    Lt(e.value, t, o);
  else if (re(e))
    for (let a = 0; a < e.length; a++)
      Lt(e[a], t, o);
  else if (jo(e) || zo(e))
    e.forEach((a) => {
      Lt(a, t, o);
    });
  else if (qa(e)) {
    for (const a in e)
      Lt(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Lt(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function la(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (r) {
    Ya(r, t, o);
  }
}
function yt(e, t, o, a) {
  if (ue(e)) {
    const r = la(e, t, o, a);
    return r && zn(r) && r.catch((i) => {
      Ya(i, t, o);
    }), r;
  }
  if (re(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(yt(e[i], t, o, a));
    return r;
  }
}
function Ya(e, t, o, a = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: n } = t && t.appContext.config || ye;
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
      Rt(), la(i, null, 10, [
        e,
        s,
        c
      ]), Ut();
      return;
    }
  }
  gd(e, o, r, a, n);
}
function gd(e, t, o, a = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Re = [];
let Ct = -1;
const To = [];
let Zt = null, $o = 0;
const Gn = /* @__PURE__ */ Promise.resolve();
let Ca = null;
function ct(e) {
  const t = Ca || Gn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bd(e) {
  let t = Ct + 1, o = Re.length;
  for (; t < o; ) {
    const a = t + o >>> 1, r = Re[a], i = Go(r);
    i < e || i === e && r.flags & 2 ? t = a + 1 : o = a;
  }
  return t;
}
function ii(e) {
  if (!(e.flags & 1)) {
    const t = Go(e), o = Re[Re.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Go(o) ? Re.push(e) : Re.splice(bd(t), 0, e), e.flags |= 1, Jn();
  }
}
function Jn() {
  Ca || (Ca = Gn.then(Qn));
}
function Yn(e) {
  re(e) ? To.push(...e) : Zt && e.id === -1 ? Zt.splice($o + 1, 0, e) : e.flags & 1 || (To.push(e), e.flags |= 1), Jn();
}
function ki(e, t, o = Ct + 1) {
  for (; o < Re.length; o++) {
    const a = Re[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Re.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Xn(e) {
  if (To.length) {
    const t = [...new Set(To)].sort(
      (o, a) => Go(o) - Go(a)
    );
    if (To.length = 0, Zt) {
      Zt.push(...t);
      return;
    }
    for (Zt = t, $o = 0; $o < Zt.length; $o++) {
      const o = Zt[$o];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Zt = null, $o = 0;
  }
}
const Go = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qn(e) {
  try {
    for (Ct = 0; Ct < Re.length; Ct++) {
      const t = Re[Ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), la(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ct < Re.length; Ct++) {
      const t = Re[Ct];
      t && (t.flags &= -2);
    }
    Ct = -1, Re.length = 0, Xn(), Ca = null, (Re.length || To.length) && Qn();
  }
}
let je = null, el = null;
function za(e) {
  const t = je;
  return je = e, el = e && e.type.__scopeId || null, t;
}
function O(e, t = je, o) {
  if (!t || e._n)
    return e;
  const a = (...r) => {
    a._d && Va(-1);
    const i = za(t);
    let n;
    try {
      n = e(...r);
    } finally {
      za(i), a._d && Va(1);
    }
    return n;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function vo(e, t) {
  if (je === null)
    return e;
  const o = rr(je), a = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, n, l, s = ye] = t[r];
    i && (ue(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Lt(n), a.push({
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
function no(e, t, o, a) {
  const r = e.dirs, i = t && t.dirs;
  for (let n = 0; n < r.length; n++) {
    const l = r[n];
    i && (l.oldValue = i[n].value);
    let s = l.dir[a];
    s && (Rt(), yt(s, o, 8, [
      e.el,
      l,
      e,
      t
    ]), Ut());
  }
}
function Ta(e, t) {
  if (Be) {
    let o = Be.provides;
    const a = Be.parent && Be.parent.provides;
    a === o && (o = Be.provides = Object.create(a)), o[e] = t;
  }
}
function At(e, t, o = !1) {
  const a = pt();
  if (a || mo) {
    let r = mo ? mo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return o && ue(t) ? t.call(a && a.proxy) : t;
  }
}
function tl() {
  return !!(pt() || mo);
}
const wd = /* @__PURE__ */ Symbol.for("v-scx"), yd = () => At(wd);
function ol(e, t) {
  return Xa(e, null, t);
}
function xd(e, t) {
  return Xa(
    e,
    null,
    { flush: "sync" }
  );
}
function fe(e, t, o) {
  return Xa(e, t, o);
}
function Xa(e, t, o = ye) {
  const { immediate: a, deep: r, flush: i, once: n } = o, l = Te({}, o), s = t && a || !t && i !== "post";
  let c;
  if (Qo) {
    if (i === "sync") {
      const p = yd();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!s) {
      const p = () => {
      };
      return p.stop = ht, p.resume = ht, p.pause = ht, p;
    }
  }
  const d = Be;
  l.call = (p, h, v) => yt(p, d, h, v);
  let u = !1;
  i === "post" ? l.scheduler = (p) => {
    Ze(p, d && d.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (p, h) => {
    h ? p() : ii(p);
  }), l.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const f = vd(e, t, l);
  return Qo && (c ? c.push(f) : s && f()), f;
}
function kd(e, t, o) {
  const a = this.proxy, r = Ee(e) ? e.includes(".") ? al(a, e) : () => a[e] : e.bind(a, a);
  let i;
  ue(t) ? i = t : (i = t.handler, o = t);
  const n = sa(this), l = Xa(r, i.bind(a), o);
  return n(), l;
}
function al(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let r = 0; r < o.length && a; r++)
      a = a[o[r]];
    return a;
  };
}
const _d = /* @__PURE__ */ Symbol("_vte"), rl = (e) => e.__isTeleport, Tt = /* @__PURE__ */ Symbol("_leaveCb"), No = /* @__PURE__ */ Symbol("_enterCb");
function $d() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return tt(() => {
    e.isMounted = !0;
  }), bo(() => {
    e.isUnmounting = !0;
  }), e;
}
const ot = [Function, Array], il = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ot,
  onEnter: ot,
  onAfterEnter: ot,
  onEnterCancelled: ot,
  // leave
  onBeforeLeave: ot,
  onLeave: ot,
  onAfterLeave: ot,
  onLeaveCancelled: ot,
  // appear
  onBeforeAppear: ot,
  onAppear: ot,
  onAfterAppear: ot,
  onAppearCancelled: ot
}, nl = (e) => {
  const t = e.subTree;
  return t.component ? nl(t.component) : t;
}, Sd = {
  name: "BaseTransition",
  props: il,
  setup(e, { slots: t }) {
    const o = pt(), a = $d();
    return () => {
      const r = t.default && dl(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = ll(r), n = /* @__PURE__ */ xe(e), { mode: l } = n;
      if (a.isLeaving)
        return mr(i);
      const s = _i(i);
      if (!s)
        return mr(i);
      let c = Pr(
        s,
        n,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      s.type !== Ne && Jo(s, c);
      let d = o.subTree && _i(o.subTree);
      if (d && d.type !== Ne && !po(d, s) && nl(o).type !== Ne) {
        let u = Pr(
          d,
          n,
          a,
          o
        );
        if (Jo(d, u), l === "out-in" && s.type !== Ne)
          return a.isLeaving = !0, u.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete u.afterLeave, d = void 0;
          }, mr(i);
        l === "in-out" && s.type !== Ne ? u.delayLeave = (f, p, h) => {
          const v = sl(
            a,
            d
          );
          v[String(d.key)] = d, f[Tt] = () => {
            p(), f[Tt] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            h(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function ll(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Ne) {
        t = o;
        break;
      }
  }
  return t;
}
const Cd = Sd;
function sl(e, t) {
  const { leavingVNodes: o } = e;
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function Pr(e, t, o, a, r) {
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
    onLeaveCancelled: v,
    onBeforeAppear: k,
    onAppear: _,
    onAfterAppear: x,
    onAppearCancelled: $
  } = t, b = String(e.key), C = sl(o, e), T = (ee, I) => {
    ee && yt(
      ee,
      a,
      9,
      I
    );
  }, K = (ee, I) => {
    const q = I[1];
    T(ee, I), re(ee) ? ee.every((A) => A.length <= 1) && q() : ee.length <= 1 && q();
  }, G = {
    mode: n,
    persisted: l,
    beforeEnter(ee) {
      let I = s;
      if (!o.isMounted)
        if (i)
          I = k || s;
        else
          return;
      ee[Tt] && ee[Tt](
        !0
        /* cancelled */
      );
      const q = C[b];
      q && po(e, q) && q.el[Tt] && q.el[Tt](), T(I, [ee]);
    },
    enter(ee) {
      if (C[b] === e) return;
      let I = c, q = d, A = u;
      if (!o.isMounted)
        if (i)
          I = _ || c, q = x || d, A = $ || u;
        else
          return;
      let P = !1;
      ee[No] = (E) => {
        P || (P = !0, E ? T(A, [ee]) : T(q, [ee]), G.delayedLeave && G.delayedLeave(), ee[No] = void 0);
      };
      const W = ee[No].bind(null, !1);
      I ? K(I, [ee, W]) : W();
    },
    leave(ee, I) {
      const q = String(e.key);
      if (ee[No] && ee[No](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return I();
      T(f, [ee]);
      let A = !1;
      ee[Tt] = (W) => {
        A || (A = !0, I(), W ? T(v, [ee]) : T(h, [ee]), ee[Tt] = void 0, C[q] === e && delete C[q]);
      };
      const P = ee[Tt].bind(null, !1);
      C[q] = e, p ? K(p, [ee, P]) : P();
    },
    clone(ee) {
      const I = Pr(
        ee,
        t,
        o,
        a,
        r
      );
      return r && r(I), I;
    }
  };
  return G;
}
function mr(e) {
  if (Qa(e))
    return e = Qt(e), e.children = null, e;
}
function _i(e) {
  if (!Qa(e))
    return rl(e.type) && e.children ? ll(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && ue(o.default))
      return o.default();
  }
}
function Jo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Jo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function dl(e, t = !1, o) {
  let a = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    const l = o == null ? n.key : String(o) + String(n.key != null ? n.key : i);
    n.type === we ? (n.patchFlag & 128 && r++, a = a.concat(
      dl(n.children, t, l)
    )) : (t || n.type !== Ne) && a.push(l != null ? Qt(n, { key: l }) : n);
  }
  if (r > 1)
    for (let i = 0; i < a.length; i++)
      a[i].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function zd(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function cl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ft(e) {
  const t = pt(), o = /* @__PURE__ */ Ot(null);
  if (t) {
    const r = t.refs === ye ? t.refs = {} : t.refs;
    Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    });
  }
  return o;
}
function $i(e, t) {
  let o;
  return !!((o = Object.getOwnPropertyDescriptor(e, t)) && !o.configurable);
}
const Ea = /* @__PURE__ */ new WeakMap();
function qo(e, t, o, a, r = !1) {
  if (re(e)) {
    e.forEach(
      (v, k) => qo(
        v,
        t && (re(t) ? t[k] : t),
        o,
        a,
        r
      )
    );
    return;
  }
  if (Eo(a) && !r) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && qo(e, t, o, a.component.subTree);
    return;
  }
  const i = a.shapeFlag & 4 ? rr(a.component) : a.el, n = r ? null : i, { i: l, r: s } = e, c = t && t.r, d = l.refs === ye ? l.refs = {} : l.refs, u = l.setupState, f = /* @__PURE__ */ xe(u), p = u === ye ? Cn : (v) => $i(d, v) ? !1 : ke(f, v), h = (v, k) => !(k && $i(d, k));
  if (c != null && c !== s) {
    if (Si(t), Ee(c))
      d[c] = null, p(c) && (u[c] = null);
    else if (/* @__PURE__ */ Ae(c)) {
      const v = t;
      h(c, v.k) && (c.value = null), v.k && (d[v.k] = null);
    }
  }
  if (ue(s))
    la(s, l, 12, [n, d]);
  else {
    const v = Ee(s), k = /* @__PURE__ */ Ae(s);
    if (v || k) {
      const _ = () => {
        if (e.f) {
          const x = v ? p(s) ? u[s] : d[s] : h() || !e.k ? s.value : d[e.k];
          if (r)
            re(x) && Gr(x, i);
          else if (re(x))
            x.includes(i) || x.push(i);
          else if (v)
            d[s] = [i], p(s) && (u[s] = d[s]);
          else {
            const $ = [i];
            h(s, e.k) && (s.value = $), e.k && (d[e.k] = $);
          }
        } else v ? (d[s] = n, p(s) && (u[s] = n)) : k && (h(s, e.k) && (s.value = n), e.k && (d[e.k] = n));
      };
      if (n) {
        const x = () => {
          _(), Ea.delete(e);
        };
        x.id = -1, Ea.set(e, x), Ze(x, o);
      } else
        Si(e), _();
    }
  }
}
function Si(e) {
  const t = Ea.get(e);
  t && (t.flags |= 8, Ea.delete(e));
}
Za().requestIdleCallback;
Za().cancelIdleCallback;
const Eo = (e) => !!e.type.__asyncLoader, Qa = (e) => e.type.__isKeepAlive;
function Td(e, t) {
  ul(e, "a", t);
}
function Ed(e, t) {
  ul(e, "da", t);
}
function ul(e, t, o = Be) {
  const a = e.__wdc || (e.__wdc = () => {
    let r = o;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (er(t, a, o), o) {
    let r = o.parent;
    for (; r && r.parent; )
      Qa(r.parent.vnode) && Od(a, t, o, r), r = r.parent;
  }
}
function Od(e, t, o, a) {
  const r = er(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  wo(() => {
    Gr(a[t], r);
  }, o);
}
function er(e, t, o = Be, a = !1) {
  if (o) {
    const r = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...n) => {
      Rt();
      const l = sa(o), s = yt(t, o, e, n);
      return l(), Ut(), s;
    });
    return a ? r.unshift(i) : r.push(i), i;
  }
}
const qt = (e) => (t, o = Be) => {
  (!Qo || e === "sp") && er(e, (...a) => t(...a), o);
}, pl = qt("bm"), tt = qt("m"), fl = qt(
  "bu"
), Ad = qt("u"), bo = qt(
  "bum"
), wo = qt("um"), Vd = qt(
  "sp"
), Pd = qt("rtg"), jd = qt("rtc");
function Md(e, t = Be) {
  er("ec", e, t);
}
const Id = "components", hl = /* @__PURE__ */ Symbol.for("v-ndc");
function Vo(e) {
  return Ee(e) ? Nd(Id, e, !1) || e : e || hl;
}
function Nd(e, t, o = !0, a = !1) {
  const r = je || Be;
  if (r) {
    const i = r.type;
    {
      const l = bc(
        i,
        !1
      );
      if (l && (l === t || l === Le(t) || l === Ka(Le(t))))
        return i;
    }
    const n = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ci(r[e] || i[e], t) || // global registration
      Ci(r.appContext[e], t)
    );
    return !n && a ? i : n;
  }
}
function Ci(e, t) {
  return e && (e[t] || e[Le(t)] || e[Ka(Le(t))]);
}
function Xt(e, t, o, a) {
  let r;
  const i = o, n = re(e);
  if (n || Ee(e)) {
    const l = n && /* @__PURE__ */ Jt(e);
    let s = !1, c = !1;
    l && (s = !/* @__PURE__ */ lt(e), c = /* @__PURE__ */ Vt(e), e = Ja(e)), r = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      r[d] = t(
        s ? c ? Ao(wt(e[d])) : wt(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (_e(e))
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
function vr(e, t) {
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
function se(e, t, o = {}, a, r) {
  if (je.ce || je.parent && Eo(je.parent) && je.parent.ce) {
    const c = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), g(), oe(
      we,
      null,
      [F("slot", o, a && a())],
      c ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), g();
  const n = i && ml(i(o)), l = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  n && n.key, s = oe(
    we,
    {
      key: (l && !gt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!n && a ? "_fb" : "")
    },
    n || (a ? a() : []),
    n && e._ === 1 ? 64 : -2
  );
  return !r && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s;
}
function ml(e) {
  return e.some((t) => Xo(t) ? !(t.type === Ne || t.type === we && !ml(t.children)) : !0) ? e : null;
}
const jr = (e) => e ? Bl(e) ? rr(e) : jr(e.parent) : null, Ho = (
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
    $parent: (e) => jr(e.parent),
    $root: (e) => jr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ii(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ct.bind(e.proxy)),
    $watch: (e) => kd.bind(e)
  })
), gr = (e, t) => e !== ye && !e.__isScriptSetup && ke(e, t), Bd = {
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
        if (gr(a, t))
          return n[t] = 1, a[t];
        if (r !== ye && ke(r, t))
          return n[t] = 2, r[t];
        if (ke(i, t))
          return n[t] = 3, i[t];
        if (o !== ye && ke(o, t))
          return n[t] = 4, o[t];
        Mr && (n[t] = 0);
      }
    }
    const c = Ho[t];
    let d, u;
    if (c)
      return t === "$attrs" && Ie(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (o !== ye && ke(o, t))
      return n[t] = 4, o[t];
    if (
      // global properties
      u = s.config.globalProperties, ke(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: r, ctx: i } = e;
    return gr(r, t) ? (r[t] = o, !0) : a !== ye && ke(a, t) ? (a[t] = o, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: r, props: i, type: n }
  }, l) {
    let s;
    return !!(o[l] || e !== ye && l[0] !== "$" && ke(e, l) || gr(t, l) || ke(i, l) || ke(a, l) || ke(Ho, l) || ke(r.config.globalProperties, l) || (s = n.__cssModules) && s[l]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ke(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function vl() {
  return gl().slots;
}
function Ld() {
  return gl().attrs;
}
function gl(e) {
  const t = pt();
  return t.setupContext || (t.setupContext = Dl(t));
}
function Oa(e) {
  return re(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function ut(e, t) {
  return !e || !t ? e || t : re(e) && re(t) ? e.concat(t) : Te({}, Oa(e), Oa(t));
}
let Mr = !0;
function Dd(e) {
  const t = wl(e), o = e.proxy, a = e.ctx;
  Mr = !1, t.beforeCreate && zi(t.beforeCreate, e, "bc");
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
    activated: v,
    deactivated: k,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: $,
    unmounted: b,
    render: C,
    renderTracked: T,
    renderTriggered: K,
    errorCaptured: G,
    serverPrefetch: ee,
    // public API
    expose: I,
    inheritAttrs: q,
    // assets
    components: A,
    directives: P,
    filters: W
  } = t;
  if (c && Fd(c, a, null), n)
    for (const de in n) {
      const ne = n[de];
      ue(ne) && (a[de] = ne.bind(o));
    }
  if (r) {
    const de = r.call(o, o);
    _e(de) && (e.data = /* @__PURE__ */ Xe(de));
  }
  if (Mr = !0, i)
    for (const de in i) {
      const ne = i[de], He = ue(ne) ? ne.bind(o, o) : ue(ne.get) ? ne.get.bind(o, o) : ht, Se = !ue(ne) && ue(ne.set) ? ne.set.bind(o) : ht, Pe = j({
        get: He,
        set: Se
      });
      Object.defineProperty(a, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (Oe) => Pe.value = Oe
      });
    }
  if (l)
    for (const de in l)
      bl(l[de], a, o, de);
  if (s) {
    const de = ue(s) ? s.call(o) : s;
    Reflect.ownKeys(de).forEach((ne) => {
      Ta(ne, de[ne]);
    });
  }
  d && zi(d, e, "c");
  function Y(de, ne) {
    re(ne) ? ne.forEach((He) => de(He.bind(o))) : ne && de(ne.bind(o));
  }
  if (Y(pl, u), Y(tt, f), Y(fl, p), Y(Ad, h), Y(Td, v), Y(Ed, k), Y(Md, G), Y(jd, T), Y(Pd, K), Y(bo, x), Y(wo, b), Y(Vd, ee), re(I))
    if (I.length) {
      const de = e.exposed || (e.exposed = {});
      I.forEach((ne) => {
        Object.defineProperty(de, ne, {
          get: () => o[ne],
          set: (He) => o[ne] = He,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === ht && (e.render = C), q != null && (e.inheritAttrs = q), A && (e.components = A), P && (e.directives = P), ee && cl(e);
}
function Fd(e, t, o = ht) {
  re(e) && (e = Ir(e));
  for (const a in e) {
    const r = e[a];
    let i;
    _e(r) ? "default" in r ? i = At(
      r.from || a,
      r.default,
      !0
    ) : i = At(r.from || a) : i = At(r), /* @__PURE__ */ Ae(i) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (n) => i.value = n
    }) : t[a] = i;
  }
}
function zi(e, t, o) {
  yt(
    re(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function bl(e, t, o, a) {
  let r = a.includes(".") ? al(o, a) : () => o[a];
  if (Ee(e)) {
    const i = t[e];
    ue(i) && fe(r, i);
  } else if (ue(e))
    fe(r, e.bind(o));
  else if (_e(e))
    if (re(e))
      e.forEach((i) => bl(i, t, o, a));
    else {
      const i = ue(e.handler) ? e.handler.bind(o) : t[e.handler];
      ue(i) && fe(r, i, e);
    }
}
function wl(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: n }
  } = e.appContext, l = i.get(t);
  let s;
  return l ? s = l : !r.length && !o && !a ? s = t : (s = {}, r.length && r.forEach(
    (c) => Aa(s, c, n, !0)
  ), Aa(s, t, n)), _e(t) && i.set(t, s), s;
}
function Aa(e, t, o, a = !1) {
  const { mixins: r, extends: i } = t;
  i && Aa(e, i, o, !0), r && r.forEach(
    (n) => Aa(e, n, o, !0)
  );
  for (const n in t)
    if (!(a && n === "expose")) {
      const l = Rd[n] || o && o[n];
      e[n] = l ? l(e[n], t[n]) : t[n];
    }
  return e;
}
const Rd = {
  data: Ti,
  props: Ei,
  emits: Ei,
  // objects
  methods: Do,
  computed: Do,
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
  components: Do,
  directives: Do,
  // watch
  watch: qd,
  // provide / inject
  provide: Ti,
  inject: Ud
};
function Ti(e, t) {
  return t ? e ? function() {
    return Te(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ud(e, t) {
  return Do(Ir(e), Ir(t));
}
function Ir(e) {
  if (re(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Do(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ei(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    Oa(e),
    Oa(t ?? {})
  ) : t;
}
function qd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Te(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = Fe(e[a], t[a]);
  return o;
}
function yl() {
  return {
    app: null,
    config: {
      isNativeTag: Cn,
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
let Hd = 0;
function Kd(e, t) {
  return function(a, r = null) {
    ue(a) || (a = Te({}, a)), r != null && !_e(r) && (r = null);
    const i = yl(), n = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const c = i.app = {
      _uid: Hd++,
      _component: a,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: yc,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return n.has(d) || (d && ue(d.install) ? (n.add(d), d.install(c, ...u)) : ue(d) && (n.add(d), d(c, ...u))), c;
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
          const p = c._ceVNode || F(a, r);
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, d, f), s = !0, c._container = d, d.__vue_app__ = c, rr(p.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        s && (yt(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return i.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = mo;
        mo = c;
        try {
          return d();
        } finally {
          mo = u;
        }
      }
    };
    return c;
  };
}
let mo = null;
function Ye(e, t, o = ye) {
  const a = pt(), r = Le(t), i = Je(t), n = xl(e, r), l = pd((s, c) => {
    let d, u = ye, f;
    return xd(() => {
      const p = e[r];
      Ge(d, p) && (d = p, c());
    }), {
      get() {
        return s(), o.get ? o.get(d) : d;
      },
      set(p) {
        const h = o.set ? o.set(p) : p;
        if (!Ge(h, d) && !(u !== ye && Ge(p, u)))
          return;
        const v = a.vnode.props;
        v && // check if parent has passed v-model
        (t in v || r in v || i in v) && (`onUpdate:${t}` in v || `onUpdate:${r}` in v || `onUpdate:${i}` in v) || (d = p, c()), a.emit(`update:${t}`, h), Ge(p, h) && Ge(p, u) && !Ge(h, f) && c(), u = p, f = h;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let s = 0;
    return {
      next() {
        return s < 2 ? { value: s++ ? n || ye : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const xl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function Wd(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ye;
  let r = o;
  const i = t.startsWith("update:"), n = i && xl(a, t.slice(7));
  n && (n.trim && (r = o.map((d) => Ee(d) ? d.trim() : d)), n.number && (r = o.map(Wa)));
  let l, s = a[l = cr(t)] || // also try camelCase event handler (#2249)
  a[l = cr(Le(t))];
  !s && i && (s = a[l = cr(Je(t))]), s && yt(
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
    e.emitted[l] = !0, yt(
      c,
      e,
      6,
      r
    );
  }
}
const Zd = /* @__PURE__ */ new WeakMap();
function kl(e, t, o = !1) {
  const a = o ? Zd : t.emitsCache, r = a.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let n = {}, l = !1;
  if (!ue(e)) {
    const s = (c) => {
      const d = kl(c, t, !0);
      d && (l = !0, Te(n, d));
    };
    !o && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !l ? (_e(e) && a.set(e, null), null) : (re(i) ? i.forEach((s) => n[s] = null) : Te(n, i), _e(e) && a.set(e, n), n);
}
function tr(e, t) {
  return !e || !Ua(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, Je(t)) || ke(e, t));
}
function Oi(e) {
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
    inheritAttrs: v
  } = e, k = za(e);
  let _, x;
  try {
    if (o.shapeFlag & 4) {
      const b = r || a, C = b;
      _ = Et(
        c.call(
          C,
          b,
          d,
          u,
          p,
          f,
          h
        )
      ), x = l;
    } else {
      const b = t;
      _ = Et(
        b.length > 1 ? b(
          u,
          { attrs: l, slots: n, emit: s }
        ) : b(
          u,
          null
        )
      ), x = t.props ? l : Gd(l);
    }
  } catch (b) {
    Ko.length = 0, Ya(b, e, 1), _ = F(Ne);
  }
  let $ = _;
  if (x && v !== !1) {
    const b = Object.keys(x), { shapeFlag: C } = $;
    b.length && C & 7 && (i && b.some(Zr) && (x = Jd(
      x,
      i
    )), $ = Qt($, x, !1, !0));
  }
  return o.dirs && ($ = Qt($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(o.dirs) : o.dirs), o.transition && Jo($, o.transition), _ = $, za(k), _;
}
const Gd = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Ua(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Jd = (e, t) => {
  const o = {};
  for (const a in e)
    (!Zr(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function Yd(e, t, o) {
  const { props: a, children: r, component: i } = e, { props: n, children: l, patchFlag: s } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return a ? Ai(a, n, c) : !!n;
    if (s & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (_l(n, a, f) && !tr(c, f))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : a === n ? !1 : a ? n ? Ai(a, n, c) : !0 : !!n;
  return !1;
}
function Ai(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < a.length; r++) {
    const i = a[r];
    if (_l(t, e, i) && !tr(o, i))
      return !0;
  }
  return !1;
}
function _l(e, t, o) {
  const a = e[o], r = t[o];
  return o === "style" && _e(a) && _e(r) ? !Yt(a, r) : a !== r;
}
function Xd({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const $l = {}, Sl = () => Object.create($l), Cl = (e) => Object.getPrototypeOf(e) === $l;
function Qd(e, t, o, a = !1) {
  const r = {}, i = Sl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zl(e, t, r, i);
  for (const n in e.propsOptions[0])
    n in r || (r[n] = void 0);
  o ? e.props = a ? r : /* @__PURE__ */ ld(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function ec(e, t, o, a) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: n }
  } = e, l = /* @__PURE__ */ xe(r), [s] = e.propsOptions;
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
        if (tr(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (s)
          if (ke(i, f))
            p !== i[f] && (i[f] = p, c = !0);
          else {
            const h = Le(f);
            r[h] = Nr(
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
    zl(e, t, r, i) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !ke(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Je(u)) === u || !ke(t, d))) && (s ? o && // for camelCase
      (o[u] !== void 0 || // for kebab-case
      o[d] !== void 0) && (r[u] = Nr(
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
  c && Bt(e.attrs, "set", "");
}
function zl(e, t, o, a) {
  const [r, i] = e.propsOptions;
  let n = !1, l;
  if (t)
    for (let s in t) {
      if (Fo(s))
        continue;
      const c = t[s];
      let d;
      r && ke(r, d = Le(s)) ? !i || !i.includes(d) ? o[d] = c : (l || (l = {}))[d] = c : tr(e.emitsOptions, s) || (!(s in a) || c !== a[s]) && (a[s] = c, n = !0);
    }
  if (i) {
    const s = /* @__PURE__ */ xe(o), c = l || ye;
    for (let d = 0; d < i.length; d++) {
      const u = i[d];
      o[u] = Nr(
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
function Nr(e, t, o, a, r, i) {
  const n = e[o];
  if (n != null) {
    const l = ke(n, "default");
    if (l && a === void 0) {
      const s = n.default;
      if (n.type !== Function && !n.skipFactory && ue(s)) {
        const { propsDefaults: c } = r;
        if (o in c)
          a = c[o];
        else {
          const d = sa(r);
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
    ] && (a === "" || a === Je(o)) && (a = !0));
  }
  return a;
}
const tc = /* @__PURE__ */ new WeakMap();
function Tl(e, t, o = !1) {
  const a = o ? tc : t.propsCache, r = a.get(e);
  if (r)
    return r;
  const i = e.props, n = {}, l = [];
  let s = !1;
  if (!ue(e)) {
    const d = (u) => {
      s = !0;
      const [f, p] = Tl(u, t, !0);
      Te(n, f), p && l.push(...p);
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !s)
    return _e(e) && a.set(e, Co), Co;
  if (re(i))
    for (let d = 0; d < i.length; d++) {
      const u = Le(i[d]);
      Vi(u) && (n[u] = ye);
    }
  else if (i)
    for (const d in i) {
      const u = Le(d);
      if (Vi(u)) {
        const f = i[d], p = n[u] = re(f) || ue(f) ? { type: f } : Te({}, f), h = p.type;
        let v = !1, k = !0;
        if (re(h))
          for (let _ = 0; _ < h.length; ++_) {
            const x = h[_], $ = ue(x) && x.name;
            if ($ === "Boolean") {
              v = !0;
              break;
            } else $ === "String" && (k = !1);
          }
        else
          v = ue(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = v, p[
          1
          /* shouldCastTrue */
        ] = k, (v || ke(p, "default")) && l.push(u);
      }
    }
  const c = [n, l];
  return _e(e) && a.set(e, c), c;
}
function Vi(e) {
  return e[0] !== "$" && !Fo(e);
}
const ni = (e) => e === "_" || e === "_ctx" || e === "$stable", li = (e) => re(e) ? e.map(Et) : [Et(e)], oc = (e, t, o) => {
  if (t._n)
    return t;
  const a = O((...r) => li(t(...r)), o);
  return a._c = !1, a;
}, El = (e, t, o) => {
  const a = e._ctx;
  for (const r in e) {
    if (ni(r)) continue;
    const i = e[r];
    if (ue(i))
      t[r] = oc(r, i, a);
    else if (i != null) {
      const n = li(i);
      t[r] = () => n;
    }
  }
}, Ol = (e, t) => {
  const o = li(t);
  e.slots.default = () => o;
}, Al = (e, t, o) => {
  for (const a in t)
    (o || !ni(a)) && (e[a] = t[a]);
}, ac = (e, t, o) => {
  const a = e.slots = Sl();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Al(a, t, o), o && En(a, "_", r, !0)) : El(t, a);
  } else t && Ol(e, t);
}, rc = (e, t, o) => {
  const { vnode: a, slots: r } = e;
  let i = !0, n = ye;
  if (a.shapeFlag & 32) {
    const l = t._;
    l ? o && l === 1 ? i = !1 : Al(r, t, o) : (i = !t.$stable, El(t, r)), n = t;
  } else t && (Ol(e, t), n = { default: 1 });
  if (i)
    for (const l in r)
      !ni(l) && n[l] == null && delete r[l];
}, Ze = dc;
function ic(e) {
  return nc(e);
}
function nc(e, t) {
  const o = Za();
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
    setScopeId: p = ht,
    insertStaticContent: h
  } = e, v = (m, w, z, L = null, M = null, N = null, Q = void 0, J = null, Z = !!w.dynamicChildren) => {
    if (m === w)
      return;
    m && !po(m, w) && (L = he(m), Oe(m, M, N, !0), m = null), w.patchFlag === -2 && (Z = !1, w.dynamicChildren = null);
    const { type: B, ref: le, shapeFlag: te } = w;
    switch (B) {
      case or:
        k(m, w, z, L);
        break;
      case Ne:
        _(m, w, z, L);
        break;
      case wa:
        m == null && x(w, z, L, Q);
        break;
      case we:
        A(
          m,
          w,
          z,
          L,
          M,
          N,
          Q,
          J,
          Z
        );
        break;
      default:
        te & 1 ? C(
          m,
          w,
          z,
          L,
          M,
          N,
          Q,
          J,
          Z
        ) : te & 6 ? P(
          m,
          w,
          z,
          L,
          M,
          N,
          Q,
          J,
          Z
        ) : (te & 64 || te & 128) && B.process(
          m,
          w,
          z,
          L,
          M,
          N,
          Q,
          J,
          Z,
          Ht
        );
    }
    le != null && M ? qo(le, m && m.ref, N, w || m, !w) : le == null && m && m.ref != null && qo(m.ref, null, N, m, !0);
  }, k = (m, w, z, L) => {
    if (m == null)
      a(
        w.el = l(w.children),
        z,
        L
      );
    else {
      const M = w.el = m.el;
      w.children !== m.children && c(M, w.children);
    }
  }, _ = (m, w, z, L) => {
    m == null ? a(
      w.el = s(w.children || ""),
      z,
      L
    ) : w.el = m.el;
  }, x = (m, w, z, L) => {
    [m.el, m.anchor] = h(
      m.children,
      w,
      z,
      L,
      m.el,
      m.anchor
    );
  }, $ = ({ el: m, anchor: w }, z, L) => {
    let M;
    for (; m && m !== w; )
      M = f(m), a(m, z, L), m = M;
    a(w, z, L);
  }, b = ({ el: m, anchor: w }) => {
    let z;
    for (; m && m !== w; )
      z = f(m), r(m), m = z;
    r(w);
  }, C = (m, w, z, L, M, N, Q, J, Z) => {
    if (w.type === "svg" ? Q = "svg" : w.type === "math" && (Q = "mathml"), m == null)
      T(
        w,
        z,
        L,
        M,
        N,
        Q,
        J,
        Z
      );
    else {
      const B = m.el && m.el._isVueCE ? m.el : null;
      try {
        B && B._beginPatch(), ee(
          m,
          w,
          M,
          N,
          Q,
          J,
          Z
        );
      } finally {
        B && B._endPatch();
      }
    }
  }, T = (m, w, z, L, M, N, Q, J) => {
    let Z, B;
    const { props: le, shapeFlag: te, transition: ie, dirs: ce } = m;
    if (Z = m.el = n(
      m.type,
      N,
      le && le.is,
      le
    ), te & 8 ? d(Z, m.children) : te & 16 && G(
      m.children,
      Z,
      null,
      L,
      M,
      br(m, N),
      Q,
      J
    ), ce && no(m, null, L, "created"), K(Z, m, m.scopeId, Q, L), le) {
      for (const Ce in le)
        Ce !== "value" && !Fo(Ce) && i(Z, Ce, null, le[Ce], N, L);
      "value" in le && i(Z, "value", null, le.value, N), (B = le.onVnodeBeforeMount) && St(B, L, m);
    }
    ce && no(m, null, L, "beforeMount");
    const ge = lc(M, ie);
    ge && ie.beforeEnter(Z), a(Z, w, z), ((B = le && le.onVnodeMounted) || ge || ce) && Ze(() => {
      B && St(B, L, m), ge && ie.enter(Z), ce && no(m, null, L, "mounted");
    }, M);
  }, K = (m, w, z, L, M) => {
    if (z && p(m, z), L)
      for (let N = 0; N < L.length; N++)
        p(m, L[N]);
    if (M) {
      let N = M.subTree;
      if (w === N || Ml(N.type) && (N.ssContent === w || N.ssFallback === w)) {
        const Q = M.vnode;
        K(
          m,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          M.parent
        );
      }
    }
  }, G = (m, w, z, L, M, N, Q, J, Z = 0) => {
    for (let B = Z; B < m.length; B++) {
      const le = m[B] = J ? Nt(m[B]) : Et(m[B]);
      v(
        null,
        le,
        w,
        z,
        L,
        M,
        N,
        Q,
        J
      );
    }
  }, ee = (m, w, z, L, M, N, Q) => {
    const J = w.el = m.el;
    let { patchFlag: Z, dynamicChildren: B, dirs: le } = w;
    Z |= m.patchFlag & 16;
    const te = m.props || ye, ie = w.props || ye;
    let ce;
    if (z && lo(z, !1), (ce = ie.onVnodeBeforeUpdate) && St(ce, z, w, m), le && no(w, m, z, "beforeUpdate"), z && lo(z, !0), (te.innerHTML && ie.innerHTML == null || te.textContent && ie.textContent == null) && d(J, ""), B ? I(
      m.dynamicChildren,
      B,
      J,
      z,
      L,
      br(w, M),
      N
    ) : Q || ne(
      m,
      w,
      J,
      null,
      z,
      L,
      br(w, M),
      N,
      !1
    ), Z > 0) {
      if (Z & 16)
        q(J, te, ie, z, M);
      else if (Z & 2 && te.class !== ie.class && i(J, "class", null, ie.class, M), Z & 4 && i(J, "style", te.style, ie.style, M), Z & 8) {
        const ge = w.dynamicProps;
        for (let Ce = 0; Ce < ge.length; Ce++) {
          const $e = ge[Ce], Ke = te[$e], We = ie[$e];
          (We !== Ke || $e === "value") && i(J, $e, Ke, We, M, z);
        }
      }
      Z & 1 && m.children !== w.children && d(J, w.children);
    } else !Q && B == null && q(J, te, ie, z, M);
    ((ce = ie.onVnodeUpdated) || le) && Ze(() => {
      ce && St(ce, z, w, m), le && no(w, m, z, "updated");
    }, L);
  }, I = (m, w, z, L, M, N, Q) => {
    for (let J = 0; J < w.length; J++) {
      const Z = m[J], B = w[J], le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !po(Z, B) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? u(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      v(
        Z,
        B,
        le,
        null,
        L,
        M,
        N,
        Q,
        !0
      );
    }
  }, q = (m, w, z, L, M) => {
    if (w !== z) {
      if (w !== ye)
        for (const N in w)
          !Fo(N) && !(N in z) && i(
            m,
            N,
            w[N],
            null,
            M,
            L
          );
      for (const N in z) {
        if (Fo(N)) continue;
        const Q = z[N], J = w[N];
        Q !== J && N !== "value" && i(m, N, J, Q, M, L);
      }
      "value" in z && i(m, "value", w.value, z.value, M);
    }
  }, A = (m, w, z, L, M, N, Q, J, Z) => {
    const B = w.el = m ? m.el : l(""), le = w.anchor = m ? m.anchor : l("");
    let { patchFlag: te, dynamicChildren: ie, slotScopeIds: ce } = w;
    ce && (J = J ? J.concat(ce) : ce), m == null ? (a(B, z, L), a(le, z, L), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      z,
      le,
      M,
      N,
      Q,
      J,
      Z
    )) : te > 0 && te & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === ie.length ? (I(
      m.dynamicChildren,
      ie,
      z,
      M,
      N,
      Q,
      J
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || M && w === M.subTree) && Vl(
      m,
      w,
      !0
      /* shallow */
    )) : ne(
      m,
      w,
      z,
      le,
      M,
      N,
      Q,
      J,
      Z
    );
  }, P = (m, w, z, L, M, N, Q, J, Z) => {
    w.slotScopeIds = J, m == null ? w.shapeFlag & 512 ? M.ctx.activate(
      w,
      z,
      L,
      Q,
      Z
    ) : W(
      w,
      z,
      L,
      M,
      N,
      Q,
      Z
    ) : E(m, w, Z);
  }, W = (m, w, z, L, M, N, Q) => {
    const J = m.component = hc(
      m,
      L,
      M
    );
    if (Qa(m) && (J.ctx.renderer = Ht), mc(J, !1, Q), J.asyncDep) {
      if (M && M.registerDep(J, Y, Q), !m.el) {
        const Z = J.subTree = F(Ne);
        _(null, Z, w, z), m.placeholder = Z.el;
      }
    } else
      Y(
        J,
        m,
        w,
        z,
        M,
        N,
        Q
      );
  }, E = (m, w, z) => {
    const L = w.component = m.component;
    if (Yd(m, w, z))
      if (L.asyncDep && !L.asyncResolved) {
        de(L, w, z);
        return;
      } else
        L.next = w, L.update();
    else
      w.el = m.el, L.vnode = w;
  }, Y = (m, w, z, L, M, N, Q) => {
    const J = () => {
      if (m.isMounted) {
        let { next: te, bu: ie, u: ce, parent: ge, vnode: Ce } = m;
        {
          const _t = Pl(m);
          if (_t) {
            te && (te.el = Ce.el, de(m, te, Q)), _t.asyncDep.then(() => {
              Ze(() => {
                m.isUnmounted || B();
              }, M);
            });
            return;
          }
        }
        let $e = te, Ke;
        lo(m, !1), te ? (te.el = Ce.el, de(m, te, Q)) : te = Ce, ie && ba(ie), (Ke = te.props && te.props.onVnodeBeforeUpdate) && St(Ke, ge, te, Ce), lo(m, !0);
        const We = Oi(m), kt = m.subTree;
        m.subTree = We, v(
          kt,
          We,
          // parent may have changed if it's in a teleport
          u(kt.el),
          // anchor may have changed if it's in a fragment
          he(kt),
          m,
          M,
          N
        ), te.el = We.el, $e === null && Xd(m, We.el), ce && Ze(ce, M), (Ke = te.props && te.props.onVnodeUpdated) && Ze(
          () => St(Ke, ge, te, Ce),
          M
        );
      } else {
        let te;
        const { el: ie, props: ce } = w, { bm: ge, m: Ce, parent: $e, root: Ke, type: We } = m, kt = Eo(w);
        lo(m, !1), ge && ba(ge), !kt && (te = ce && ce.onVnodeBeforeMount) && St(te, $e, w), lo(m, !0);
        {
          Ke.ce && Ke.ce._hasShadowRoot() && Ke.ce._injectChildStyle(We);
          const _t = m.subTree = Oi(m);
          v(
            null,
            _t,
            z,
            L,
            m,
            M,
            N
          ), w.el = _t.el;
        }
        if (Ce && Ze(Ce, M), !kt && (te = ce && ce.onVnodeMounted)) {
          const _t = w;
          Ze(
            () => St(te, $e, _t),
            M
          );
        }
        (w.shapeFlag & 256 || $e && Eo($e.vnode) && $e.vnode.shapeFlag & 256) && m.a && Ze(m.a, M), m.isMounted = !0, w = z = L = null;
      }
    };
    m.scope.on();
    const Z = m.effect = new Pn(J);
    m.scope.off();
    const B = m.update = Z.run.bind(Z), le = m.job = Z.runIfDirty.bind(Z);
    le.i = m, le.id = m.uid, Z.scheduler = () => ii(le), lo(m, !0), B();
  }, de = (m, w, z) => {
    w.component = m;
    const L = m.vnode.props;
    m.vnode = w, m.next = null, ec(m, w.props, L, z), rc(m, w.children, z), Rt(), ki(m), Ut();
  }, ne = (m, w, z, L, M, N, Q, J, Z = !1) => {
    const B = m && m.children, le = m ? m.shapeFlag : 0, te = w.children, { patchFlag: ie, shapeFlag: ce } = w;
    if (ie > 0) {
      if (ie & 128) {
        Se(
          B,
          te,
          z,
          L,
          M,
          N,
          Q,
          J,
          Z
        );
        return;
      } else if (ie & 256) {
        He(
          B,
          te,
          z,
          L,
          M,
          N,
          Q,
          J,
          Z
        );
        return;
      }
    }
    ce & 8 ? (le & 16 && ve(B, M, N), te !== B && d(z, te)) : le & 16 ? ce & 16 ? Se(
      B,
      te,
      z,
      L,
      M,
      N,
      Q,
      J,
      Z
    ) : ve(B, M, N, !0) : (le & 8 && d(z, ""), ce & 16 && G(
      te,
      z,
      L,
      M,
      N,
      Q,
      J,
      Z
    ));
  }, He = (m, w, z, L, M, N, Q, J, Z) => {
    m = m || Co, w = w || Co;
    const B = m.length, le = w.length, te = Math.min(B, le);
    let ie;
    for (ie = 0; ie < te; ie++) {
      const ce = w[ie] = Z ? Nt(w[ie]) : Et(w[ie]);
      v(
        m[ie],
        ce,
        z,
        null,
        M,
        N,
        Q,
        J,
        Z
      );
    }
    B > le ? ve(
      m,
      M,
      N,
      !0,
      !1,
      te
    ) : G(
      w,
      z,
      L,
      M,
      N,
      Q,
      J,
      Z,
      te
    );
  }, Se = (m, w, z, L, M, N, Q, J, Z) => {
    let B = 0;
    const le = w.length;
    let te = m.length - 1, ie = le - 1;
    for (; B <= te && B <= ie; ) {
      const ce = m[B], ge = w[B] = Z ? Nt(w[B]) : Et(w[B]);
      if (po(ce, ge))
        v(
          ce,
          ge,
          z,
          null,
          M,
          N,
          Q,
          J,
          Z
        );
      else
        break;
      B++;
    }
    for (; B <= te && B <= ie; ) {
      const ce = m[te], ge = w[ie] = Z ? Nt(w[ie]) : Et(w[ie]);
      if (po(ce, ge))
        v(
          ce,
          ge,
          z,
          null,
          M,
          N,
          Q,
          J,
          Z
        );
      else
        break;
      te--, ie--;
    }
    if (B > te) {
      if (B <= ie) {
        const ce = ie + 1, ge = ce < le ? w[ce].el : L;
        for (; B <= ie; )
          v(
            null,
            w[B] = Z ? Nt(w[B]) : Et(w[B]),
            z,
            ge,
            M,
            N,
            Q,
            J,
            Z
          ), B++;
      }
    } else if (B > ie)
      for (; B <= te; )
        Oe(m[B], M, N, !0), B++;
    else {
      const ce = B, ge = B, Ce = /* @__PURE__ */ new Map();
      for (B = ge; B <= ie; B++) {
        const Qe = w[B] = Z ? Nt(w[B]) : Et(w[B]);
        Qe.key != null && Ce.set(Qe.key, B);
      }
      let $e, Ke = 0;
      const We = ie - ge + 1;
      let kt = !1, _t = 0;
      const Mo = new Array(We);
      for (B = 0; B < We; B++) Mo[B] = 0;
      for (B = ce; B <= te; B++) {
        const Qe = m[B];
        if (Ke >= We) {
          Oe(Qe, M, N, !0);
          continue;
        }
        let $t;
        if (Qe.key != null)
          $t = Ce.get(Qe.key);
        else
          for ($e = ge; $e <= ie; $e++)
            if (Mo[$e - ge] === 0 && po(Qe, w[$e])) {
              $t = $e;
              break;
            }
        $t === void 0 ? Oe(Qe, M, N, !0) : (Mo[$t - ge] = B + 1, $t >= _t ? _t = $t : kt = !0, v(
          Qe,
          w[$t],
          z,
          null,
          M,
          N,
          Q,
          J,
          Z
        ), Ke++);
      }
      const hi = kt ? sc(Mo) : Co;
      for ($e = hi.length - 1, B = We - 1; B >= 0; B--) {
        const Qe = ge + B, $t = w[Qe], mi = w[Qe + 1], vi = Qe + 1 < le ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          mi.el || jl(mi)
        ) : L;
        Mo[B] === 0 ? v(
          null,
          $t,
          z,
          vi,
          M,
          N,
          Q,
          J,
          Z
        ) : kt && ($e < 0 || B !== hi[$e] ? Pe($t, z, vi, 2) : $e--);
      }
    }
  }, Pe = (m, w, z, L, M = null) => {
    const { el: N, type: Q, transition: J, children: Z, shapeFlag: B } = m;
    if (B & 6) {
      Pe(m.component.subTree, w, z, L);
      return;
    }
    if (B & 128) {
      m.suspense.move(w, z, L);
      return;
    }
    if (B & 64) {
      Q.move(m, w, z, Ht);
      return;
    }
    if (Q === we) {
      a(N, w, z);
      for (let te = 0; te < Z.length; te++)
        Pe(Z[te], w, z, L);
      a(m.anchor, w, z);
      return;
    }
    if (Q === wa) {
      $(m, w, z);
      return;
    }
    if (L !== 2 && B & 1 && J)
      if (L === 0)
        J.beforeEnter(N), a(N, w, z), Ze(() => J.enter(N), M);
      else {
        const { leave: te, delayLeave: ie, afterLeave: ce } = J, ge = () => {
          m.ctx.isUnmounted ? r(N) : a(N, w, z);
        }, Ce = () => {
          N._isLeaving && N[Tt](
            !0
            /* cancelled */
          ), te(N, () => {
            ge(), ce && ce();
          });
        };
        ie ? ie(N, ge, Ce) : Ce();
      }
    else
      a(N, w, z);
  }, Oe = (m, w, z, L = !1, M = !1) => {
    const {
      type: N,
      props: Q,
      ref: J,
      children: Z,
      dynamicChildren: B,
      shapeFlag: le,
      patchFlag: te,
      dirs: ie,
      cacheIndex: ce
    } = m;
    if (te === -2 && (M = !1), J != null && (Rt(), qo(J, null, z, m, !0), Ut()), ce != null && (w.renderCache[ce] = void 0), le & 256) {
      w.ctx.deactivate(m);
      return;
    }
    const ge = le & 1 && ie, Ce = !Eo(m);
    let $e;
    if (Ce && ($e = Q && Q.onVnodeBeforeUnmount) && St($e, w, m), le & 6)
      X(m.component, z, L);
    else {
      if (le & 128) {
        m.suspense.unmount(z, L);
        return;
      }
      ge && no(m, null, w, "beforeUnmount"), le & 64 ? m.type.remove(
        m,
        w,
        z,
        Ht,
        L
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== we || te > 0 && te & 64) ? ve(
        B,
        w,
        z,
        !1,
        !0
      ) : (N === we && te & 384 || !M && le & 16) && ve(Z, w, z), L && ca(m);
    }
    (Ce && ($e = Q && Q.onVnodeUnmounted) || ge) && Ze(() => {
      $e && St($e, w, m), ge && no(m, null, w, "unmounted");
    }, z);
  }, ca = (m) => {
    const { type: w, el: z, anchor: L, transition: M } = m;
    if (w === we) {
      dr(z, L);
      return;
    }
    if (w === wa) {
      b(m);
      return;
    }
    const N = () => {
      r(z), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (m.shapeFlag & 1 && M && !M.persisted) {
      const { leave: Q, delayLeave: J } = M, Z = () => Q(z, N);
      J ? J(m.el, N, Z) : Z();
    } else
      N();
  }, dr = (m, w) => {
    let z;
    for (; m !== w; )
      z = f(m), r(m), m = z;
    r(w);
  }, X = (m, w, z) => {
    const { bum: L, scope: M, job: N, subTree: Q, um: J, m: Z, a: B } = m;
    Pi(Z), Pi(B), L && ba(L), M.stop(), N && (N.flags |= 8, Oe(Q, m, w, z)), J && Ze(J, w), Ze(() => {
      m.isUnmounted = !0;
    }, w);
  }, ve = (m, w, z, L = !1, M = !1, N = 0) => {
    for (let Q = N; Q < m.length; Q++)
      Oe(m[Q], w, z, L, M);
  }, he = (m) => {
    if (m.shapeFlag & 6)
      return he(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const w = f(m.anchor || m.el), z = w && w[_d];
    return z ? f(z) : w;
  };
  let be = !1;
  const xt = (m, w, z) => {
    let L;
    m == null ? w._vnode && (Oe(w._vnode, null, null, !0), L = w._vnode.component) : v(
      w._vnode || null,
      m,
      w,
      null,
      null,
      null,
      z
    ), w._vnode = m, be || (be = !0, ki(L), Xn(), be = !1);
  }, Ht = {
    p: v,
    um: Oe,
    m: Pe,
    r: ca,
    mt: W,
    mc: G,
    pc: ne,
    pbc: I,
    n: he,
    o: e
  };
  return {
    render: xt,
    hydrate: void 0,
    createApp: Kd(xt)
  };
}
function br({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function lo({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vl(e, t, o = !1) {
  const a = e.children, r = t.children;
  if (re(a) && re(r))
    for (let i = 0; i < a.length; i++) {
      const n = a[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Nt(r[i]), l.el = n.el), !o && l.patchFlag !== -2 && Vl(n, l)), l.type === or && (l.patchFlag === -1 && (l = r[i] = Nt(l)), l.el = n.el), l.type === Ne && !l.el && (l.el = n.el);
    }
}
function sc(e) {
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
function Pl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pl(t);
}
function Pi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function jl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? jl(t.subTree) : null;
}
const Ml = (e) => e.__isSuspense;
function dc(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : Yn(e);
}
const we = /* @__PURE__ */ Symbol.for("v-fgt"), or = /* @__PURE__ */ Symbol.for("v-txt"), Ne = /* @__PURE__ */ Symbol.for("v-cmt"), wa = /* @__PURE__ */ Symbol.for("v-stc"), Ko = [];
let et = null;
function g(e = !1) {
  Ko.push(et = e ? null : []);
}
function cc() {
  Ko.pop(), et = Ko[Ko.length - 1] || null;
}
let Yo = 1;
function Va(e, t = !1) {
  Yo += e, e < 0 && et && t && (et.hasOnce = !0);
}
function Il(e) {
  return e.dynamicChildren = Yo > 0 ? et || Co : null, cc(), Yo > 0 && et && et.push(e), e;
}
function S(e, t, o, a, r, i) {
  return Il(
    U(
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
function oe(e, t, o, a, r) {
  return Il(
    F(
      e,
      t,
      o,
      a,
      r,
      !0
    )
  );
}
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function po(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nl = ({ key: e }) => e ?? null, ya = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ Ae(e) || ue(e) ? { i: je, r: e, k: t, f: !!o } : e : null);
function U(e, t = null, o = null, a = 0, r = null, i = e === we ? 0 : 1, n = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nl(t),
    ref: t && ya(t),
    scopeId: el,
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
  return l ? (si(s, o), i & 128 && e.normalize(s)) : o && (s.shapeFlag |= Ee(o) ? 8 : 16), Yo > 0 && // avoid a block node from tracking itself
  !n && // has current parent block
  et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && et.push(s), s;
}
const F = uc;
function uc(e, t = null, o = null, a = 0, r = null, i = !1) {
  if ((!e || e === hl) && (e = Ne), Xo(e)) {
    const l = Qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && si(l, o), Yo > 0 && !i && et && (l.shapeFlag & 6 ? et[et.indexOf(e)] = l : et.push(l)), l.patchFlag = -2, l;
  }
  if (wc(e) && (e = e.__vccOpts), t) {
    t = ar(t);
    let { class: l, style: s } = t;
    l && !Ee(l) && (t.class = pe(l)), _e(s) && (/* @__PURE__ */ ri(s) && !re(s) && (s = Te({}, s)), t.style = bt(s));
  }
  const n = Ee(e) ? 1 : Ml(e) ? 128 : rl(e) ? 64 : _e(e) ? 4 : ue(e) ? 2 : 0;
  return U(
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
function ar(e) {
  return e ? /* @__PURE__ */ ri(e) || Cl(e) ? Te({}, e) : e : null;
}
function Qt(e, t, o = !1, a = !1) {
  const { props: r, ref: i, patchFlag: n, children: l, transition: s } = e, c = t ? De(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Nl(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? re(i) ? i.concat(ya(t)) : [i, ya(t)] : ya(t)
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
    patchFlag: t && e.type !== we ? n === -1 ? 16 : n | 16 : n,
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
    ssContent: e.ssContent && Qt(e.ssContent),
    ssFallback: e.ssFallback && Qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && a && Jo(
    d,
    s.clone(d)
  ), d;
}
function ae(e = " ", t = 0) {
  return F(or, null, e, t);
}
function R(e = "", t = !1) {
  return t ? (g(), oe(Ne, null, e)) : F(Ne, null, e);
}
function Et(e) {
  return e == null || typeof e == "boolean" ? F(Ne) : re(e) ? F(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xo(e) ? Nt(e) : F(or, null, String(e));
}
function Nt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e);
}
function si(e, t) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (re(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), si(e, r()), r._c && (r._d = !0));
      return;
    } else {
      o = 32;
      const r = t._;
      !r && !Cl(t) ? t._ctx = je : r === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ue(t) ? (t = { default: t, _ctx: je }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [ae(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function De(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const r in a)
      if (r === "class")
        t.class !== a.class && (t.class = pe([t.class, a.class]));
      else if (r === "style")
        t.style = bt([t.style, a.style]);
      else if (Ua(r)) {
        const i = t[r], n = a[r];
        n && i !== n && !(re(i) && i.includes(n)) && (t[r] = i ? [].concat(i, n) : n);
      } else r !== "" && (t[r] = a[r]);
  }
  return t;
}
function St(e, t, o, a = null) {
  yt(e, t, 7, [
    o,
    a
  ]);
}
const pc = yl();
let fc = 0;
function hc(e, t, o) {
  const a = e.type, r = (t ? t.appContext : e.appContext) || pc, i = {
    uid: fc++,
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
    scope: new Fs(
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
    propsOptions: Tl(a, r),
    emitsOptions: kl(a, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ye,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: ye,
    data: ye,
    props: ye,
    attrs: ye,
    slots: ye,
    refs: ye,
    setupState: ye,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Wd.bind(null, i), e.ce && e.ce(i), i;
}
let Be = null;
const pt = () => Be || je;
let Pa, Br;
{
  const e = Za(), t = (o, a) => {
    let r;
    return (r = e[o]) || (r = e[o] = []), r.push(a), (i) => {
      r.length > 1 ? r.forEach((n) => n(i)) : r[0](i);
    };
  };
  Pa = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Be = o
  ), Br = t(
    "__VUE_SSR_SETTERS__",
    (o) => Qo = o
  );
}
const sa = (e) => {
  const t = Be;
  return Pa(e), e.scope.on(), () => {
    e.scope.off(), Pa(t);
  };
}, ji = () => {
  Be && Be.scope.off(), Pa(null);
};
function Bl(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = !1;
function mc(e, t = !1, o = !1) {
  t && Br(t);
  const { props: a, children: r } = e.vnode, i = Bl(e);
  Qd(e, a, i, t), ac(e, r, o || t);
  const n = i ? vc(e, t) : void 0;
  return t && Br(!1), n;
}
function vc(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Bd);
  const { setup: a } = o;
  if (a) {
    Rt();
    const r = e.setupContext = a.length > 1 ? Dl(e) : null, i = sa(e), n = la(
      a,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = zn(n);
    if (Ut(), i(), (l || e.sp) && !Eo(e) && cl(e), l) {
      if (n.then(ji, ji), t)
        return n.then((s) => {
          Mi(e, s);
        }).catch((s) => {
          Ya(s, e, 0);
        });
      e.asyncDep = n;
    } else
      Mi(e, n);
  } else
    Ll(e);
}
function Mi(e, t, o) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : _e(t) && (e.setupState = Zn(t)), Ll(e);
}
function Ll(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || ht);
  {
    const r = sa(e);
    Rt();
    try {
      Dd(e);
    } finally {
      Ut(), r();
    }
  }
}
const gc = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  }
};
function Dl(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, gc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zn(sd(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Ho)
        return Ho[o](e);
    },
    has(t, o) {
      return o in t || o in Ho;
    }
  })) : e.proxy;
}
function bc(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wc(e) {
  return ue(e) && "__vccOpts" in e;
}
const j = (e, t) => /* @__PURE__ */ hd(e, t, Qo);
function Lr(e, t, o) {
  try {
    Va(-1);
    const a = arguments.length;
    return a === 2 ? _e(t) && !re(t) ? Xo(t) ? F(e, null, [t]) : F(e, t) : F(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && Xo(o) && (o = [o]), F(e, t, o));
  } finally {
    Va(1);
  }
}
const yc = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dr;
const Ii = typeof window < "u" && window.trustedTypes;
if (Ii)
  try {
    Dr = /* @__PURE__ */ Ii.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Fl = Dr ? (e) => Dr.createHTML(e) : (e) => e, xc = "http://www.w3.org/2000/svg", kc = "http://www.w3.org/1998/Math/MathML", It = typeof document < "u" ? document : null, Ni = It && /* @__PURE__ */ It.createElement("template"), _c = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, a) => {
    const r = t === "svg" ? It.createElementNS(xc, e) : t === "mathml" ? It.createElementNS(kc, e) : o ? It.createElement(e, { is: o }) : It.createElement(e);
    return e === "select" && a && a.multiple != null && r.setAttribute("multiple", a.multiple), r;
  },
  createText: (e) => It.createTextNode(e),
  createComment: (e) => It.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => It.querySelector(e),
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
      Ni.innerHTML = Fl(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ni.content;
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
}, Kt = "transition", Bo = "animation", ea = /* @__PURE__ */ Symbol("_vtc"), Rl = {
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
}, $c = /* @__PURE__ */ Te(
  {},
  il,
  Rl
), Sc = (e) => (e.displayName = "Transition", e.props = $c, e), ta = /* @__PURE__ */ Sc(
  (e, { slots: t }) => Lr(Cd, Cc(e), t)
), so = (e, t = []) => {
  re(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, Bi = (e) => e ? re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Cc(e) {
  const t = {};
  for (const A in e)
    A in Rl || (t[A] = e[A]);
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
  } = e, h = zc(r), v = h && h[0], k = h && h[1], {
    onBeforeEnter: _,
    onEnter: x,
    onEnterCancelled: $,
    onLeave: b,
    onLeaveCancelled: C,
    onBeforeAppear: T = _,
    onAppear: K = x,
    onAppearCancelled: G = $
  } = t, ee = (A, P, W, E) => {
    A._enterCancelled = E, co(A, P ? d : l), co(A, P ? c : n), W && W();
  }, I = (A, P) => {
    A._isLeaving = !1, co(A, u), co(A, p), co(A, f), P && P();
  }, q = (A) => (P, W) => {
    const E = A ? K : x, Y = () => ee(P, A, W);
    so(E, [P, Y]), Li(() => {
      co(P, A ? s : i), Mt(P, A ? d : l), Bi(E) || Di(P, a, v, Y);
    });
  };
  return Te(t, {
    onBeforeEnter(A) {
      so(_, [A]), Mt(A, i), Mt(A, n);
    },
    onBeforeAppear(A) {
      so(T, [A]), Mt(A, s), Mt(A, c);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(A, P) {
      A._isLeaving = !0;
      const W = () => I(A, P);
      Mt(A, u), A._enterCancelled ? (Mt(A, f), Ui(A)) : (Ui(A), Mt(A, f)), Li(() => {
        A._isLeaving && (co(A, u), Mt(A, p), Bi(b) || Di(A, a, k, W));
      }), so(b, [A, W]);
    },
    onEnterCancelled(A) {
      ee(A, !1, void 0, !0), so($, [A]);
    },
    onAppearCancelled(A) {
      ee(A, !0, void 0, !0), so(G, [A]);
    },
    onLeaveCancelled(A) {
      I(A), so(C, [A]);
    }
  });
}
function zc(e) {
  if (e == null)
    return null;
  if (_e(e))
    return [wr(e.enter), wr(e.leave)];
  {
    const t = wr(e);
    return [t, t];
  }
}
function wr(e) {
  return zr(e);
}
function Mt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[ea] || (e[ea] = /* @__PURE__ */ new Set())).add(t);
}
function co(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[ea];
  o && (o.delete(t), o.size || (e[ea] = void 0));
}
function Li(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tc = 0;
function Di(e, t, o, a) {
  const r = e._endId = ++Tc, i = () => {
    r === e._endId && a();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: n, timeout: l, propCount: s } = Ec(e, t);
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
function Ec(e, t) {
  const o = window.getComputedStyle(e), a = (h) => (o[h] || "").split(", "), r = a(`${Kt}Delay`), i = a(`${Kt}Duration`), n = Fi(r, i), l = a(`${Bo}Delay`), s = a(`${Bo}Duration`), c = Fi(l, s);
  let d = null, u = 0, f = 0;
  t === Kt ? n > 0 && (d = Kt, u = n, f = i.length) : t === Bo ? c > 0 && (d = Bo, u = c, f = s.length) : (u = Math.max(n, c), d = u > 0 ? n > c ? Kt : Bo : null, f = d ? d === Kt ? i.length : s.length : 0);
  const p = d === Kt && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Kt}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: f,
    hasTransform: p
  };
}
function Fi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, a) => Ri(o) + Ri(e[a])));
}
function Ri(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ui(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Oc(e, t, o) {
  const a = e[ea];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ja = /* @__PURE__ */ Symbol("_vod"), Ul = /* @__PURE__ */ Symbol("_vsh"), di = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: o }) {
    e[ja] = e.style.display === "none" ? "" : e.style.display, o && t ? o.beforeEnter(e) : Lo(e, t);
  },
  mounted(e, { value: t }, { transition: o }) {
    o && t && o.enter(e);
  },
  updated(e, { value: t, oldValue: o }, { transition: a }) {
    !t != !o && (a ? t ? (a.beforeEnter(e), Lo(e, !0), a.enter(e)) : a.leave(e, () => {
      Lo(e, !1);
    }) : Lo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lo(e, t);
  }
};
function Lo(e, t) {
  e.style.display = t ? e[ja] : "none", e[Ul] = !t;
}
const ql = /* @__PURE__ */ Symbol("");
function Ac(e) {
  const t = pt();
  if (!t)
    return;
  const o = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => Ma(i, r));
  }, a = () => {
    const r = e(t.proxy);
    t.ce ? Ma(t.ce, r) : Fr(t.subTree, r), o(r);
  };
  fl(() => {
    Yn(a);
  }), tt(() => {
    fe(a, ht, { flush: "post" });
    const r = new MutationObserver(a);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), wo(() => r.disconnect());
  });
}
function Fr(e, t) {
  if (e.shapeFlag & 128) {
    const o = e.suspense;
    e = o.activeBranch, o.pendingBranch && !o.isHydrating && o.effects.push(() => {
      Fr(o.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ma(e.el, t);
  else if (e.type === we)
    e.children.forEach((o) => Fr(o, t));
  else if (e.type === wa) {
    let { el: o, anchor: a } = e;
    for (; o && (Ma(o, t), o !== a); )
      o = o.nextSibling;
  }
}
function Ma(e, t) {
  if (e.nodeType === 1) {
    const o = e.style;
    let a = "";
    for (const r in t) {
      const i = Ds(t[r]);
      o.setProperty(`--${r}`, i), a += `--${r}: ${i};`;
    }
    o[ql] = a;
  }
}
const Vc = /(?:^|;)\s*display\s*:/;
function Pc(e, t, o) {
  const a = e.style, r = Ee(o);
  let i = !1;
  if (o && !r) {
    if (t)
      if (Ee(t))
        for (const n of t.split(";")) {
          const l = n.slice(0, n.indexOf(":")).trim();
          o[l] == null && xa(a, l, "");
        }
      else
        for (const n in t)
          o[n] == null && xa(a, n, "");
    for (const n in o)
      n === "display" && (i = !0), xa(a, n, o[n]);
  } else if (r) {
    if (t !== o) {
      const n = a[ql];
      n && (o += ";" + n), a.cssText = o, i = Vc.test(o);
    }
  } else t && e.removeAttribute("style");
  ja in e && (e[ja] = i ? a.display : "", e[Ul] && (a.display = "none"));
}
const qi = /\s*!important$/;
function xa(e, t, o) {
  if (re(o))
    o.forEach((a) => xa(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = jc(e, t);
    qi.test(o) ? e.setProperty(
      Je(a),
      o.replace(qi, ""),
      "important"
    ) : e[a] = o;
  }
}
const Hi = ["Webkit", "Moz", "ms"], yr = {};
function jc(e, t) {
  const o = yr[t];
  if (o)
    return o;
  let a = Le(t);
  if (a !== "filter" && a in e)
    return yr[t] = a;
  a = Ka(a);
  for (let r = 0; r < Hi.length; r++) {
    const i = Hi[r] + a;
    if (i in e)
      return yr[t] = i;
  }
  return t;
}
const Ki = "http://www.w3.org/1999/xlink";
function Wi(e, t, o, a, r, i = Bs(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Ki, t.slice(6, t.length)) : e.setAttributeNS(Ki, t, o) : o == null || i && !On(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : gt(o) ? String(o) : o
  );
}
function Zi(e, t, o, a, r) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Fl(o) : o);
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
    l === "boolean" ? o = On(o) : o == null && l === "string" ? (o = "", n = !0) : l === "number" && (o = 0, n = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  n && e.removeAttribute(r || t);
}
function Dt(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function Mc(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const Gi = /* @__PURE__ */ Symbol("_vei");
function Ic(e, t, o, a, r = null) {
  const i = e[Gi] || (e[Gi] = {}), n = i[t];
  if (a && n)
    n.value = a;
  else {
    const [l, s] = Nc(t);
    if (a) {
      const c = i[t] = Dc(
        a,
        r
      );
      Dt(e, l, c, s);
    } else n && (Mc(e, l, n, s), i[t] = void 0);
  }
}
const Ji = /(?:Once|Passive|Capture)$/;
function Nc(e) {
  let t;
  if (Ji.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Ji); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let xr = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), Lc = () => xr || (Bc.then(() => xr = 0), xr = Date.now());
function Dc(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    yt(
      Fc(a, o.value),
      t,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Lc(), o;
}
function Fc(e, t) {
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
const Yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rc = (e, t, o, a, r, i) => {
  const n = r === "svg";
  t === "class" ? Oc(e, a, n) : t === "style" ? Pc(e, o, a) : Ua(t) ? Zr(t) || Ic(e, t, o, a, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Uc(e, t, a, n)) ? (Zi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wi(e, t, a, n, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ee(a)) ? Zi(e, Le(t), a, i, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Wi(e, t, a, n));
};
function Uc(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Yi(t) && ue(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Yi(t) && Ee(o) ? !1 : t in e;
}
const Xi = {};
// @__NO_SIDE_EFFECTS__
function qc(e, t, o) {
  let a = /* @__PURE__ */ zd(e, t);
  qa(a) && (a = Te({}, a, t));
  class r extends ci {
    constructor(n) {
      super(a, n, o);
    }
  }
  return r.def = a, r;
}
const Hc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ci extends Hc {
  constructor(t, o = {}, a = Ur) {
    super(), this._def = t, this._props = o, this._createApp = a, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && a !== Ur ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (t instanceof ci) {
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
    this._connected = !1, ct(() => {
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
          (c === Number || c && c.type === Number) && (s in this._props && (this._props[s] = zr(this._props[s])), (l || (l = /* @__PURE__ */ Object.create(null)))[Le(s)] = !0);
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
    for (const r of a.map(Le))
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
    let a = o ? this.getAttribute(t) : Xi;
    const r = Le(t);
    o && this._numberProps && this._numberProps[r] && (a = zr(a)), this._setProp(r, a, !1, !0);
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
    if (o !== this._props[t] && (this._dirty = !0, o === Xi ? delete this._props[t] : (this._props[t] = o, t === "key" && this._app && (this._app._ceVNode.key = o)), r && this._instance && this._update(), a)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), o === !0 ? this.setAttribute(Je(t), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(Je(t), o + "") : o || this.removeAttribute(Je(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Rr(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const o = F(this._def, Te(t, this._props));
    return this._instance || (o.ce = (a) => {
      this._instance = a, a.ce = this, a.isCE = !0;
      const r = (i, n) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            qa(n[0]) ? Te({ detail: n }, n[0]) : { detail: n }
          )
        );
      };
      a.emit = (i, ...n) => {
        r(i, n), Je(i) !== i && r(Je(i), n);
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
const eo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (o) => ba(t, o) : t;
};
function Kc(e) {
  e.target.composing = !0;
}
function Qi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const dt = /* @__PURE__ */ Symbol("_assign");
function en(e, t, o) {
  return t && (e = e.trim()), o && (e = Wa(e)), e;
}
const Ia = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, r) {
    e[dt] = eo(r);
    const i = a || r.props && r.props.type === "number";
    Dt(e, t ? "change" : "input", (n) => {
      n.target.composing || e[dt](en(e.value, o, i));
    }), (o || i) && Dt(e, "change", () => {
      e.value = en(e.value, o, i);
    }), t || (Dt(e, "compositionstart", Kc), Dt(e, "compositionend", Qi), Dt(e, "change", Qi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: r, number: i } }, n) {
    if (e[dt] = eo(n), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Wa(e.value) : e.value, s = t ?? "";
    l !== s && (document.activeElement === e && e.type !== "range" && (a && t === o || r && e.value.trim() === s) || (e.value = s));
  }
}, Hl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[dt] = eo(o), Dt(e, "change", () => {
      const a = e._modelValue, r = Po(e), i = e.checked, n = e[dt];
      if (re(a)) {
        const l = Yr(a, r), s = l !== -1;
        if (i && !s)
          n(a.concat(r));
        else if (!i && s) {
          const c = [...a];
          c.splice(l, 1), n(c);
        }
      } else if (jo(a)) {
        const l = new Set(a);
        i ? l.add(r) : l.delete(r), n(l);
      } else
        n(Kl(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: tn,
  beforeUpdate(e, t, o) {
    e[dt] = eo(o), tn(e, t, o);
  }
};
function tn(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let r;
  if (re(t))
    r = Yr(t, a.props.value) > -1;
  else if (jo(t))
    r = t.has(a.props.value);
  else {
    if (t === o) return;
    r = Yt(t, Kl(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const Wc = {
  created(e, { value: t }, o) {
    e.checked = Yt(t, o.props.value), e[dt] = eo(o), Dt(e, "change", () => {
      e[dt](Po(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[dt] = eo(a), t !== o && (e.checked = Yt(t, a.props.value));
  }
}, Zc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const r = jo(t);
    Dt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (n) => n.selected).map(
        (n) => o ? Wa(Po(n)) : Po(n)
      );
      e[dt](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, ct(() => {
        e._assigning = !1;
      });
    }), e[dt] = eo(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    on(e, t);
  },
  beforeUpdate(e, t, o) {
    e[dt] = eo(o);
  },
  updated(e, { value: t }) {
    e._assigning || on(e, t);
  }
};
function on(e, t) {
  const o = e.multiple, a = re(t);
  if (!(o && !a && !jo(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const n = e.options[r], l = Po(n);
      if (o)
        if (a) {
          const s = typeof l;
          s === "string" || s === "number" ? n.selected = t.some((c) => String(c) === String(l)) : n.selected = Yr(t, l) > -1;
        } else
          n.selected = t.has(l);
      else if (Yt(Po(n), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Po(e) {
  return "_value" in e ? e._value : e.value;
}
function Kl(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const Gc = {
  created(e, t, o) {
    ha(e, t, o, null, "created");
  },
  mounted(e, t, o) {
    ha(e, t, o, null, "mounted");
  },
  beforeUpdate(e, t, o, a) {
    ha(e, t, o, a, "beforeUpdate");
  },
  updated(e, t, o, a) {
    ha(e, t, o, a, "updated");
  }
};
function Jc(e, t) {
  switch (e) {
    case "SELECT":
      return Zc;
    case "TEXTAREA":
      return Ia;
    default:
      switch (t) {
        case "checkbox":
          return Hl;
        case "radio":
          return Wc;
        default:
          return Ia;
      }
  }
}
function ha(e, t, o, a, r) {
  const n = Jc(
    e.tagName,
    o.props && o.props.type
  )[r];
  n && n(e, t, o, a);
}
const Yc = ["ctrl", "shift", "alt", "meta"], Xc = {
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
  exact: (e, t) => Yc.some((o) => e[`${o}Key`] && !t.includes(o))
}, qe = (e, t) => {
  if (!e) return e;
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((r, ...i) => {
    for (let n = 0; n < t.length; n++) {
      const l = Xc[t[n]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Qc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, it = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return o[a] || (o[a] = ((r) => {
    if (!("key" in r))
      return;
    const i = Je(r.key);
    if (t.some(
      (n) => n === i || Qc[n] === i
    ))
      return e(r);
  }));
}, eu = /* @__PURE__ */ Te({ patchProp: Rc }, _c);
let an;
function Wl() {
  return an || (an = ic(eu));
}
const Rr = ((...e) => {
  Wl().render(...e);
}), Ur = ((...e) => {
  const t = Wl().createApp(...e), { mount: o } = t;
  return t.mount = (a) => {
    const r = ou(a);
    if (!r) return;
    const i = t._component;
    !ue(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const n = o(r, !1, tu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), n;
  }, t;
});
function tu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ou(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
function au(e) {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = e, document.head.appendChild(t);
}
function ru() {
  ["https://rsms.me/inter/inter.css", "https://fonts.cdnfonts.com/css/poppins"].forEach((e) => {
    au(e);
  });
}
function iu(e) {
  ru();
}
const to = /* @__PURE__ */ Xe({
  locale: "nl-NL",
  language: "nl",
  autoDetectLanguage: !0,
  currency: "EUR"
});
function nu(e) {
  if (to.autoDetectLanguage) {
    console.warn("ProboDesignSystem: autoDetectLanguage is enabled. You cannot set the language manually.");
    return;
  }
  if (!["nl", "en", "de"].includes(e)) {
    console.warn(`ProboDesignSystem: ${e} is not a valid language. Valid languages are: nl, en, de`);
    return;
  }
  to.language = e;
}
const ui = new MutationObserver((e) => {
  e[0]?.attributeName === "lang" && (to.language = document.documentElement.lang);
}), Zl = () => ui.disconnect();
function lu() {
  ui.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", Zl), to.autoDetectLanguage = !0;
}
function su() {
  ui.disconnect(), window.removeEventListener("beforeunload", Zl), to.autoDetectLanguage = !1;
}
fe(
  () => to.autoDetectLanguage,
  (e) => {
    if (e) {
      lu();
      return;
    }
    su();
  },
  {
    immediate: !0
  }
);
function du(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
const me = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, r] of t)
    o[a] = r;
  return o;
}, cu = { class: "icon" }, uu = {
  __name: "PIcon",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (g(), S("i", cu, [
      (g(), oe(Vo(e.icon)))
    ]));
  }
}, oo = /* @__PURE__ */ me(uu, [["__scopeId", "data-v-0d12ef98"]]), pu = {
  __name: "PHeading",
  props: {
    level: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, o) => (g(), oe(Vo(e.level), null, {
      default: O(() => [
        se(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, Pt = /* @__PURE__ */ me(pu, [["__scopeId", "data-v-2c80c3d1"]]), fu = ["aria-disabled"], hu = ["id", "aria-controls", "disabled"], mu = ["id", "data-testid", "aria-hidden"], vu = {
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
    const o = e, a = t, r = /* @__PURE__ */ H(null);
    return fe(
      () => o.modelValue,
      (i) => {
        i && o.scrollIntoView && setTimeout(() => r.value.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      },
      { immediate: !0 }
    ), (i, n) => (g(), S("div", {
      class: pe(["accordion-item", { disabled: e.disabled }]),
      "aria-disabled": e.disabled
    }, [
      U("button", {
        id: `accordion-header-${e.ariaTitle}`,
        ref_key: "accordionHeader",
        ref: r,
        class: "header",
        "data-testid": "accordion-trigger",
        "aria-controls": `accordion-content-${e.ariaTitle}`,
        disabled: e.disabled,
        onClick: n[0] || (n[0] = (l) => a("update:modelValue", !e.modelValue))
      }, [
        se(i.$slots, "header", {}, () => [
          F(Pt, {
            class: "title",
            level: "h3"
          }, {
            default: O(() => [
              ae(D(e.title), 1)
            ]),
            _: 1
          })
        ]),
        e.hideToggle ? R("", !0) : (g(), S("div", {
          key: 0,
          "data-testid": "accordion-state-indicator",
          class: pe(["state-indicator", { open: e.modelValue }])
        }, [
          F(oo, {
            part: "state-indicator-icon",
            icon: y(du)
          }, null, 8, ["icon"])
        ], 2))
      ], 8, hu),
      F(ta, { name: "grow" }, {
        default: O(() => [
          vo(U("div", {
            id: `accordion-content-${e.ariaTitle}`,
            "data-testid": `accordion-content-${e.ariaTitle}`,
            "aria-hidden": !e.modelValue,
            class: "content"
          }, [
            F(ta, { name: "fade" }, {
              default: O(() => [
                e.modelValue ? se(i.$slots, "default", { key: 0 }) : R("", !0)
              ]),
              _: 3
            })
          ], 8, mu), [
            [di, e.modelValue]
          ])
        ]),
        _: 3
      })
    ], 10, fu));
  }
}, Gl = /* @__PURE__ */ me(vu, [["__scopeId", "data-v-17b37b7b"]]), gu = {
  class: "accordion",
  "data-testid": "accordion"
}, bu = {
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
    const o = e, a = t, r = j(() => [...o.modelValue]);
    function i(n, l) {
      o.multiple ? (r.value[l] = n, a("update:modelValue", r.value)) : (r.value.forEach((s, c) => {
        c !== l && (r.value[c] = !1);
      }), a("update:modelValue", r.value));
    }
    return (n, l) => (g(), S("div", gu, [
      (g(!0), S(we, null, Xt(e.items, (s, c) => se(n.$slots, "default", De({
        key: c,
        ref_for: !0
      }, { item: s, index: c, open: r.value[c] }), () => [
        F(Gl, {
          modelValue: r.value[c],
          "onUpdate:modelValue": [(d) => r.value[c] = d, (d) => i(d, c)],
          title: s[e.title],
          "aria-title": s.ariaTitle,
          disabled: e.disabled || s.disabled,
          "hide-toggle": e.disabled,
          "scroll-into-view": e.scrollIntoView
        }, {
          default: O(() => [
            se(n.$slots, "content", De({ ref_for: !0 }, s), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "aria-title", "disabled", "hide-toggle", "scroll-into-view"])
      ], !0)), 128))
    ]));
  }
}, Jl = /* @__PURE__ */ me(bu, [["__scopeId", "data-v-25a8f65e"]]);
function rn(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), o.push.apply(o, a);
  }
  return o;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rn(Object(o), !0).forEach(function(a) {
      wu(e, a, o[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : rn(Object(o)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(o, a));
    });
  }
  return e;
}
function wu(e, t, o) {
  return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = o, e;
}
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((o, a) => (t.includes(a) || (o[a] = y(e[a])), o), {});
}
function Na(e) {
  return typeof e == "function";
}
function yu(e) {
  return /* @__PURE__ */ Jt(e) || /* @__PURE__ */ Vt(e);
}
function Yl(e, t, o) {
  let a = e;
  const r = t.split(".");
  for (let i = 0; i < r.length; i++) {
    if (!a[r[i]]) return o;
    a = a[r[i]];
  }
  return a;
}
function kr(e, t, o) {
  return j(() => e.some((a) => Yl(t, a, {
    [o]: !1
  })[o]));
}
function ln(e, t, o) {
  return j(() => e.reduce((a, r) => {
    const i = Yl(t, r, {
      [o]: !1
    })[o] || [];
    return a.concat(i);
  }, []));
}
function Xl(e, t, o, a) {
  return e.call(a, y(t), y(o), a);
}
function Ql(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function xu(e, t, o, a, r, i, n) {
  let {
    $lazy: l,
    $rewardEarly: s
  } = r, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], d = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, f = arguments.length > 10 ? arguments[10] : void 0;
  const p = /* @__PURE__ */ H(!!a.value), h = /* @__PURE__ */ H(0);
  o.value = !1;
  const v = fe([t, a].concat(c, f), () => {
    if (l && !a.value || s && !u.value && !o.value)
      return;
    let k;
    try {
      k = Xl(e, t, d, n);
    } catch (_) {
      k = Promise.reject(_);
    }
    h.value++, o.value = !!h.value, p.value = !1, Promise.resolve(k).then((_) => {
      h.value--, o.value = !!h.value, i.value = _, p.value = Ql(_);
    }).catch((_) => {
      h.value--, o.value = !!h.value, i.value = _, p.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: p,
    $unwatch: v
  };
}
function ku(e, t, o, a, r, i, n, l) {
  let {
    $lazy: s,
    $rewardEarly: c
  } = a;
  const d = () => ({}), u = j(() => {
    if (s && !o.value || c && !l.value)
      return !1;
    let f = !0;
    try {
      const p = Xl(e, t, n, i);
      r.value = p, f = Ql(p);
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
function _u(e, t, o, a, r, i, n, l, s, c, d) {
  const u = /* @__PURE__ */ H(!1), f = e.$params || {}, p = /* @__PURE__ */ H(null);
  let h, v;
  e.$async ? {
    $invalid: h,
    $unwatch: v
  } = xu(e.$validator, t, u, o, a, p, r, e.$watchTargets, s, c, d) : {
    $invalid: h,
    $unwatch: v
  } = ku(e.$validator, t, o, a, p, r, s, c);
  const k = e.$message;
  return {
    $message: Na(k) ? j(() => k(nn({
      $pending: u,
      $invalid: h,
      $params: nn(f),
      $model: t,
      $response: p,
      $validator: i,
      $propertyPath: l,
      $property: n
    }))) : k || "",
    $params: f,
    $pending: u,
    $invalid: h,
    $response: p,
    $unwatch: v
  };
}
function $u() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = y(e), o = Object.keys(t), a = {}, r = {}, i = {};
  let n = null;
  return o.forEach((l) => {
    const s = t[l];
    switch (!0) {
      case Na(s.$validator):
        a[l] = s;
        break;
      case Na(s):
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
const Su = "__root";
function Cu(e, t, o, a, r, i, n, l, s) {
  const c = Object.keys(e), d = a.get(r, e), u = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(!1), p = /* @__PURE__ */ H(0);
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
  return c.length ? (c.forEach((v) => {
    h[v] = _u(e[v], t, h.$dirty, i, n, v, o, r, s, f, p);
  }), h.$externalResults = j(() => l.value ? [].concat(l.value).map((v, k) => ({
    $propertyPath: r,
    $property: o,
    $validator: "$externalResults",
    $uid: `${r}-externalResult-${k}`,
    $message: v,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), h.$invalid = j(() => {
    const v = c.some((k) => y(h[k].$invalid));
    return f.value = v, !!h.$externalResults.value.length || v;
  }), h.$pending = j(() => c.some((v) => y(h[v].$pending))), h.$error = j(() => h.$dirty.value ? h.$pending.value || h.$invalid.value : !1), h.$silentErrors = j(() => c.filter((v) => y(h[v].$invalid)).map((v) => {
    const k = h[v];
    return /* @__PURE__ */ Xe({
      $propertyPath: r,
      $property: o,
      $validator: v,
      $uid: `${r}-${v}`,
      $message: k.$message,
      $params: k.$params,
      $response: k.$response,
      $pending: k.$pending
    });
  }).concat(h.$externalResults.value)), h.$errors = j(() => h.$dirty.value ? h.$silentErrors.value : []), h.$unwatch = () => c.forEach((v) => {
    h[v].$unwatch();
  }), h.$commit = () => {
    f.value = !0, p.value = Date.now();
  }, a.set(r, e, h), h) : (d && a.set(r, e, h), h);
}
function zu(e, t, o, a, r, i, n) {
  const l = Object.keys(e);
  return l.length ? l.reduce((s, c) => (s[c] = qr({
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
function Tu(e, t, o) {
  const a = j(() => [t, o].filter((h) => h).reduce((h, v) => h.concat(Object.values(y(v))), [])), r = j({
    get() {
      return e.$dirty.value || (a.value.length ? a.value.every((h) => h.$dirty) : !1);
    },
    set(h) {
      e.$dirty.value = h;
    }
  }), i = j(() => {
    const h = y(e.$silentErrors) || [], v = a.value.filter((k) => (y(k).$silentErrors || []).length).reduce((k, _) => k.concat(..._.$silentErrors), []);
    return h.concat(v);
  }), n = j(() => {
    const h = y(e.$errors) || [], v = a.value.filter((k) => (y(k).$errors || []).length).reduce((k, _) => k.concat(..._.$errors), []);
    return h.concat(v);
  }), l = j(() => a.value.some((h) => h.$invalid) || y(e.$invalid) || !1), s = j(() => a.value.some((h) => y(h.$pending)) || y(e.$pending) || !1), c = j(() => a.value.some((h) => h.$dirty) || a.value.some((h) => h.$anyDirty) || r.value), d = j(() => r.value ? s.value || l.value : !1), u = () => {
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
function qr(e) {
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
  } = $u(t), v = Gt(Gt({}, l), p), k = a ? j(() => {
    const Se = y(o);
    return Se ? y(Se[a]) : void 0;
  }) : o, _ = Gt({}, y(c) || {}), x = j(() => {
    const Se = y(c);
    return a ? Se ? y(Se[a]) : void 0 : Se;
  }), $ = Cu(u, k, a, n, d, v, s, x, o), b = zu(f, k, d, n, v, s, x), C = {};
  h && Object.entries(h).forEach((Se) => {
    let [Pe, Oe] = Se;
    C[Pe] = {
      $invalid: kr(Oe, b, "$invalid"),
      $error: kr(Oe, b, "$error"),
      $pending: kr(Oe, b, "$pending"),
      $errors: ln(Oe, b, "$errors"),
      $silentErrors: ln(Oe, b, "$silentErrors")
    };
  });
  const {
    $dirty: T,
    $errors: K,
    $invalid: G,
    $anyDirty: ee,
    $error: I,
    $pending: q,
    $touch: A,
    $reset: P,
    $silentErrors: W,
    $commit: E
  } = Tu($, b, i), Y = a ? j({
    get: () => y(k),
    set: (Se) => {
      T.value = !0;
      const Pe = y(o), Oe = y(c);
      Oe && (Oe[a] = _[a]), /* @__PURE__ */ Ae(Pe[a]) ? Pe[a].value = Se : Pe[a] = Se;
    }
  }) : null;
  a && v.$autoDirty && fe(k, () => {
    T.value || A();
    const Se = y(c);
    Se && (Se[a] = _[a]);
  }, {
    flush: "sync"
  });
  async function de() {
    return A(), v.$rewardEarly && (E(), await ct()), await ct(), new Promise((Se) => {
      if (!q.value) return Se(!G.value);
      const Pe = fe(q, () => {
        Se(!G.value), Pe();
      });
    });
  }
  function ne(Se) {
    return (i.value || {})[Se];
  }
  function He() {
    /* @__PURE__ */ Ae(c) ? c.value = _ : Object.keys(_).length === 0 ? Object.keys(c).forEach((Se) => {
      delete c[Se];
    }) : Object.assign(c, _);
  }
  return /* @__PURE__ */ Xe(Gt(Gt(Gt({}, $), {}, {
    $model: Y,
    $dirty: T,
    $error: I,
    $errors: K,
    $invalid: G,
    $anyDirty: ee,
    $pending: q,
    $touch: A,
    $reset: P,
    $path: d || Su,
    $silentErrors: W,
    $validate: de,
    $commit: E
  }, i && {
    $getResultsForChild: ne,
    $clearExternalResults: He,
    $validationGroups: C
  }), b));
}
let Eu = class {
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
const ka = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, sn = /* @__PURE__ */ Symbol("vuelidate#injectChildResults"), dn = /* @__PURE__ */ Symbol("vuelidate#removeChildResults");
function Ou(e) {
  let {
    $scope: t,
    instance: o
  } = e;
  const a = {}, r = /* @__PURE__ */ H([]), i = j(() => r.value.reduce((d, u) => (d[u] = y(a[u]), d), {}));
  function n(d, u) {
    let {
      $registerAs: f,
      $scope: p,
      $stopPropagation: h
    } = u;
    h || t === ka.COLLECT_NONE || p === ka.COLLECT_NONE || t !== ka.COLLECT_ALL && t !== p || (a[f] = d, r.value.push(f));
  }
  o.__vuelidateInjectInstances = [].concat(o.__vuelidateInjectInstances || [], n);
  function l(d) {
    r.value = r.value.filter((u) => u !== d), delete a[d];
  }
  o.__vuelidateRemoveInstances = [].concat(o.__vuelidateRemoveInstances || [], l);
  const s = At(sn, []);
  Ta(sn, o.__vuelidateInjectInstances);
  const c = At(dn, []);
  return Ta(dn, o.__vuelidateRemoveInstances), {
    childResults: i,
    sendValidationResultsToParent: s,
    removeValidationResultsFromParent: c
  };
}
function es(e) {
  return new Proxy(e, {
    get(t, o) {
      return typeof t[o] == "object" ? es(t[o]) : j(() => t[o]);
    }
  });
}
let cn = 0;
function ao(e, t) {
  var o;
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (a = e, e = void 0, t = void 0);
  let {
    $registerAs: r,
    $scope: i = ka.COLLECT_ALL,
    $stopPropagation: n,
    $externalResults: l,
    currentVueInstance: s
  } = a;
  const c = s || ((o = pt()) === null || o === void 0 ? void 0 : o.proxy), d = c ? c.$options : {};
  r || (cn += 1, r = `_vuelidate_${cn}`);
  const u = /* @__PURE__ */ H({}), f = new Eu(), {
    childResults: p,
    sendValidationResultsToParent: h,
    removeValidationResultsFromParent: v
  } = c ? Ou({
    $scope: i,
    instance: c
  }) : {
    childResults: /* @__PURE__ */ H({})
  };
  if (!e && d.validations) {
    const k = d.validations;
    t = /* @__PURE__ */ H({}), pl(() => {
      t.value = c, fe(() => Na(k) ? k.call(t.value, new es(t.value)) : k, (_) => {
        u.value = qr({
          validations: _,
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
    const k = /* @__PURE__ */ Ae(e) || yu(e) ? e : /* @__PURE__ */ Xe(e || {});
    fe(k, (_) => {
      u.value = qr({
        validations: _,
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
  return c && (h.forEach((k) => k(u, {
    $registerAs: r,
    $scope: i,
    $stopPropagation: n
  })), bo(() => v.forEach((k) => k(r)))), j(() => Gt(Gt({}, y(u.value)), p.value));
}
function un(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), o.push.apply(o, a);
  }
  return o;
}
function oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? un(Object(o), !0).forEach(function(a) {
      Au(e, a, o[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : un(Object(o)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(o, a));
    });
  }
  return e;
}
function Au(e, t, o) {
  return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = o, e;
}
function Ba(e) {
  return typeof e == "function";
}
function Hr(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ir(e) {
  return Ba(e.$validator) ? oa({}, e) : {
    $validator: e
  };
}
function ts(e) {
  return typeof e == "object" ? e.$valid : e;
}
function os(e) {
  return e.$validator || e;
}
function Vu(e, t) {
  if (!Hr(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!Hr(t) && !Ba(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const o = ir(t);
  return o.$params = oa(oa({}, o.$params || {}), e), o;
}
function Pu(e, t) {
  if (!Ba(e) && typeof y(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!Hr(t) && !Ba(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const o = ir(t);
  return o.$message = e, o;
}
function ju(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const o = ir(e);
  return oa(oa({}, o), {}, {
    $async: !0,
    $watchTargets: t
  });
}
function Mu(e) {
  return {
    $validator(t) {
      for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
        a[r - 1] = arguments[r];
      return y(t).reduce((i, n, l) => {
        const s = Object.entries(n).reduce((c, d) => {
          let [u, f] = d;
          const p = e[u] || {}, h = Object.entries(p).reduce((v, k) => {
            let [_, x] = k;
            const $ = os(x).call(this, f, n, l, ...a), b = ts($);
            if (v.$data[_] = $, v.$data.$invalid = !b || !!v.$data.$invalid, v.$data.$error = v.$data.$invalid, !b) {
              let C = x.$message || "";
              const T = x.$params || {};
              typeof C == "function" && (C = C({
                $pending: !1,
                $invalid: !b,
                $params: T,
                $model: f,
                $response: $
              })), v.$errors.push({
                $property: u,
                $message: C,
                $params: T,
                $response: $,
                $model: f,
                $pending: !1,
                $validator: _
              });
            }
            return {
              $valid: v.$valid && b,
              $data: v.$data,
              $errors: v.$errors
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
const da = (e) => {
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
}, Iu = (e) => (e = y(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function ro() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return (a) => (a = y(a), !da(a) || t.every((r) => (r.lastIndex = 0, r.test(a))));
}
var Ue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: Mu,
  len: Iu,
  normalizeValidatorObject: ir,
  regex: ro,
  req: da,
  unwrap: y,
  unwrapNormalizedValidator: os,
  unwrapValidatorResponse: ts,
  withAsync: ju,
  withMessage: Pu,
  withParams: Vu
});
ro(/^[a-zA-Z]*$/);
ro(/^[a-zA-Z0-9]*$/);
ro(/^\d*(\.\d+)?$/);
const Nu = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
ro(Nu);
function Bu(e) {
  return typeof e == "string" && (e = e.trim()), da(e);
}
var aa = {
  $validator: Bu,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function Lu(e) {
  return (t) => y(t) === y(e);
}
function Du(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: Lu(e),
    $message: (o) => `The value must be equal to the ${t} value`,
    $params: {
      equalTo: e,
      otherName: t,
      type: "sameAs"
    }
  };
}
const Fu = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
ro(Fu);
function Ru(e) {
  return (t) => !da(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +y(e);
}
function La(e) {
  return {
    $validator: Ru(e),
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
function Uu(e) {
  return (t) => !da(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +y(e);
}
var Da = ((e) => ({
  $validator: Uu(e),
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
ro(/(^[0-9]*$)|(^-[0-9]+$)/);
ro(/^[-]?\d*(\.\d+)?$/);
function qu(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
function Hu(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
function Ku(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Wu(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" })
  ]);
}
const Zu = { class: "mini-icon" }, Gu = {
  __name: "PIconMini",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (g(), S("i", Zu, [
      (g(), oe(Vo(e.icon)))
    ]));
  }
}, vt = /* @__PURE__ */ me(Gu, [["__scopeId", "data-v-83781390"]]), Ju = {
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
}, Yu = {
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
}, Xu = {
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
}, Qu = { nl: Ju, en: Yu, de: Xu };
function as(e, t = {}) {
  return e.replace(/{(\w+)}/g, (o, a) => t[a] || `{${a}}`);
}
function rs(e) {
  const [t] = e.split("."), o = e.substring(e.indexOf(".") + 1);
  return Qu[to.language][`${t}.${o}`] || e;
}
function ep(e, t) {
  return e.replace(/{(\d+)}/g, (o, a) => t[a] || `{${a}}`);
}
function tp(e, t, o = {}) {
  const a = e.split("|").map((i) => i.trim());
  let r;
  return a.length === 1 ? [r] = a : a.length === 2 ? t === 1 ? [r] = a : [, r] = a : t === 0 ? [r] = a : t === 1 ? [, r] = a : r = a[Math.min(t, a.length - 1)], as(r, { ...o, count: t, n: t });
}
function V(e, t = null) {
  const o = rs(e);
  return Array.isArray(t) ? ep(o) : as(o, t);
}
function op(e, t, o = null) {
  return tp(rs(e), t, o);
}
const ap = { class: "amount-input-container" }, rp = ["disabled", "aria-label"], ip = ["id", "disabled", "aria-invalid", "aria-describedby"], np = ["disabled", "aria-label"], lp = ["id"], sp = {
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
    const o = e, a = t, r = j({
      get() {
        return !o.allowEmpty && !o.modelValue ? 1 : o.modelValue;
      },
      set(h) {
        c(h);
      }
    }), i = j(() => o.allowEmpty ? !r.value : r.value === 1), n = j(() => r.value >= o.max), l = j(() => !!o.error), s = j(() => `${o.id}-error`);
    function c(h) {
      if (o.allowEmpty && !h) {
        a("update:model-value", null);
        return;
      }
      h < 0 || Number.isNaN(h) || typeof h != "number" || !h ? (xi(r), a("update:model-value", 1)) : h > o.max ? (xi(r), a("update:model-value", o.max)) : a("update:model-value", h);
    }
    function d() {
      r.value -= 1;
    }
    function u() {
      r.value += 1;
    }
    const f = j(() => o.required ? { value: { required: Ue.withMessage(() => V("input.required"), aa) } } : { value: {} }), p = ao(f.value, { value: r });
    return (h, v) => (g(), S("div", ap, [
      U("div", {
        class: pe(["amount-input", { small: e.small }])
      }, [
        U("button", {
          disabled: e.disabled || i.value,
          class: "minus",
          "aria-label": y(V)("amount-input.minus_one"),
          onClick: qe(d, ["stop"])
        }, [
          e.small ? (g(), oe(vt, {
            key: 1,
            icon: y(Ku)
          }, null, 8, ["icon"])) : (g(), oe(oo, {
            key: 0,
            icon: y(qu)
          }, null, 8, ["icon"]))
        ], 8, rp),
        vo(U("input", {
          id: e.id,
          "onUpdate:modelValue": v[0] || (v[0] = (k) => r.value = k),
          class: pe([{ "has-error": e.error }, "input"]),
          disabled: e.disabled,
          "aria-label": "Amount input",
          "aria-invalid": l.value,
          "aria-describedby": l.value ? s.value : null,
          type: "number",
          onBlur: v[1] || (v[1] = (k) => {
            y(p).value?.$touch(k), a("blur", k);
          }),
          onFocus: v[2] || (v[2] = (k) => a("focus", k))
        }, null, 42, ip), [
          [Ia, r.value]
        ]),
        U("button", {
          disabled: e.disabled || n.value,
          class: "plus",
          "aria-label": y(V)("amount-input.plus_one"),
          onClick: qe(u, ["stop"])
        }, [
          e.small ? (g(), oe(vt, {
            key: 1,
            icon: y(Wu)
          }, null, 8, ["icon"])) : (g(), oe(oo, {
            key: 0,
            icon: y(Hu)
          }, null, 8, ["icon"]))
        ], 8, np)
      ], 2),
      e.error || y(p).value?.$errors[0]?.$message ? (g(), S("span", {
        key: 0,
        id: s.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, D(e.error || y(p).value.$errors[0].$message), 9, lp)) : R("", !0)
    ]));
  }
}, pi = /* @__PURE__ */ me(sp, [["__scopeId", "data-v-44d789fb"]]);
function is(e, t) {
  return Xr() ? (Rs(e, t), !0) : !1;
}
const _r = /* @__PURE__ */ new WeakMap(), dp = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const o = e[0], a = (t = pt()) === null || t === void 0 ? void 0 : t.proxy, r = a ?? Xr();
  if (r == null && !tl()) throw new Error("injectLocal must be called in setup");
  return r && _r.has(r) && o in _r.get(r) ? _r.get(r)[o] : At(...e);
}, cp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const up = (e) => e != null, pp = Object.prototype.toString, fp = (e) => pp.call(e) === "[object Object]", So = () => {
};
function pn(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function _a(e) {
  return Array.isArray(e) ? e : [e];
}
function hp(e) {
  return pt();
}
function mp(e, t = !0, o) {
  hp() ? tt(e, o) : t ? e() : ct(e);
}
function vp(e, t, o) {
  return fe(e, t, {
    ...o,
    immediate: !0
  });
}
const io = cp ? window : void 0;
function fo(e) {
  var t;
  const o = st(e);
  return (t = o?.$el) !== null && t !== void 0 ? t : o;
}
function nt(...e) {
  const t = (a, r, i, n) => (a.addEventListener(r, i, n), () => a.removeEventListener(r, i, n)), o = j(() => {
    const a = _a(st(e[0])).filter((r) => r != null);
    return a.every((r) => typeof r != "string") ? a : void 0;
  });
  return vp(() => {
    var a, r;
    return [
      (a = (r = o.value) === null || r === void 0 ? void 0 : r.map((i) => fo(i))) !== null && a !== void 0 ? a : [io].filter((i) => i != null),
      _a(st(o.value ? e[1] : e[0])),
      _a(y(o.value ? e[2] : e[1])),
      st(o.value ? e[3] : e[2])
    ];
  }, ([a, r, i, n], l, s) => {
    if (!a?.length || !r?.length || !i?.length) return;
    const c = fp(n) ? { ...n } : n, d = a.flatMap((u) => r.flatMap((f) => i.map((p) => t(u, f, p, c))));
    s(() => {
      d.forEach((u) => u());
    });
  }, { flush: "post" });
}
function gp(e, t, o = {}) {
  const { window: a = io, ignore: r = [], capture: i = !0, detectIframe: n = !1, controls: l = !1 } = o;
  if (!a) return l ? {
    stop: So,
    cancel: So,
    trigger: So
  } : So;
  let s = !0;
  const c = (k) => st(r).some((_) => {
    if (typeof _ == "string") return Array.from(a.document.querySelectorAll(_)).some((x) => x === k.target || k.composedPath().includes(x));
    {
      const x = fo(_);
      return x && (k.target === x || k.composedPath().includes(x));
    }
  });
  function d(k) {
    const _ = st(k);
    return _ && _.$.subTree.shapeFlag === 16;
  }
  function u(k, _) {
    const x = st(k), $ = x.$.subTree && x.$.subTree.children;
    return $ == null || !Array.isArray($) ? !1 : $.some((b) => b.el === _.target || _.composedPath().includes(b.el));
  }
  const f = (k) => {
    const _ = fo(e);
    if (k.target != null && !(!(_ instanceof Element) && d(e) && u(e, k)) && !(!_ || _ === k.target || k.composedPath().includes(_))) {
      if ("detail" in k && k.detail === 0 && (s = !c(k)), !s) {
        s = !0;
        return;
      }
      t(k);
    }
  };
  let p = !1;
  const h = [
    nt(a, "click", (k) => {
      p || (p = !0, setTimeout(() => {
        p = !1;
      }, 0), f(k));
    }, {
      passive: !0,
      capture: i
    }),
    nt(a, "pointerdown", (k) => {
      const _ = fo(e);
      s = !c(k) && !!(_ && !k.composedPath().includes(_));
    }, { passive: !0 }),
    n && nt(a, "blur", (k) => {
      setTimeout(() => {
        var _;
        const x = fo(e);
        ((_ = a.document.activeElement) === null || _ === void 0 ? void 0 : _.tagName) === "IFRAME" && !x?.contains(a.document.activeElement) && t(k);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), v = () => h.forEach((k) => k());
  return l ? {
    stop: v,
    cancel: () => {
      s = !1;
    },
    trigger: (k) => {
      s = !0, f(k), s = !1;
    }
  } : v;
}
// @__NO_SIDE_EFFECTS__
function bp() {
  const e = /* @__PURE__ */ Ot(!1), t = pt();
  return t && tt(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  const t = /* @__PURE__ */ bp();
  return j(() => (t.value, !!e()));
}
function wp(e, t, o = {}) {
  const { window: a = io, ...r } = o;
  let i;
  const n = /* @__PURE__ */ ns(() => a && "MutationObserver" in a), l = () => {
    i && (i.disconnect(), i = void 0);
  }, s = fe(j(() => {
    const u = _a(st(e)).map(fo).filter(up);
    return new Set(u);
  }), (u) => {
    l(), n.value && u.size && (i = new MutationObserver(t), u.forEach((f) => i.observe(f, r)));
  }, {
    immediate: !0,
    flush: "post"
  }), c = () => i?.takeRecords(), d = () => {
    s(), l();
  };
  return is(d), {
    isSupported: n,
    stop: d,
    takeRecords: c
  };
}
function yp(e, t, o = {}) {
  const { window: a = io, document: r = a?.document, flush: i = "sync" } = o;
  if (!a || !r) return So;
  let n;
  const l = (d) => {
    n?.(), n = d;
  }, s = ol(() => {
    const d = fo(e);
    if (d) {
      const { stop: u } = wp(r, (f) => {
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
  return is(c), c;
}
// @__NO_SIDE_EFFECTS__
function xp(e = {}) {
  var t;
  const { window: o = io, deep: a = !0, triggerOnRemoval: r = !1 } = e, i = (t = e.document) !== null && t !== void 0 ? t : o?.document, n = () => {
    let c = i?.activeElement;
    if (a)
      for (var d; c?.shadowRoot; ) c = c == null || (d = c.shadowRoot) === null || d === void 0 ? void 0 : d.activeElement;
    return c;
  }, l = /* @__PURE__ */ Ot(), s = () => {
    l.value = n();
  };
  if (o) {
    const c = {
      capture: !0,
      passive: !0
    };
    nt(o, "blur", (d) => {
      d.relatedTarget === null && s();
    }, c), nt(o, "focus", s, c);
  }
  return r && yp(l, s, { document: i }), s(), l;
}
const kp = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function _p() {
  const e = tl() ? /* @__PURE__ */ dp(kp, null) : null;
  return typeof e == "number" ? e : void 0;
}
function $p(e, t = {}) {
  const { window: o = io, ssrWidth: a = /* @__PURE__ */ _p() } = t, r = /* @__PURE__ */ ns(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), i = /* @__PURE__ */ Ot(typeof a == "number"), n = /* @__PURE__ */ Ot(), l = /* @__PURE__ */ Ot(!1), s = (c) => {
    l.value = c.matches;
  };
  return ol(() => {
    if (i.value) {
      i.value = !r.value, l.value = st(e).split(",").some((c) => {
        const d = c.includes("not all"), u = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), f = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(u || f);
        return u && p && (p = a >= pn(u[1])), f && p && (p = a <= pn(f[1])), d ? !p : p;
      });
      return;
    }
    r.value && (n.value = o.matchMedia(st(e)), l.value = n.value.matches);
  }), nt(n, "change", s, { passive: !0 }), j(() => l.value);
}
const Sp = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function ls(e = {}) {
  const { reactive: t = !1, target: o = io, aliasMap: a = Sp, passive: r = !0, onEventFired: i = So } = e, n = /* @__PURE__ */ Xe(/* @__PURE__ */ new Set()), l = {
    toJSON() {
      return {};
    },
    current: n
  }, s = t ? /* @__PURE__ */ Xe(l) : l, c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map([
    ["Meta", c],
    ["Shift", /* @__PURE__ */ new Set()],
    ["Alt", /* @__PURE__ */ new Set()]
  ]), u = /* @__PURE__ */ new Set();
  function f(x, $) {
    x in s && (t ? s[x] = $ : s[x].value = $);
  }
  function p() {
    n.clear();
    for (const x of u) f(x, !1);
  }
  function h(x, $, b) {
    if (!(!x || typeof $.getModifierState != "function")) {
      for (const [C, T] of d) if ($.getModifierState(C)) {
        b.forEach((K) => T.add(K));
        break;
      }
    }
  }
  function v(x, $) {
    if (x) return;
    const b = `${$[0].toUpperCase()}${$.slice(1)}`, C = d.get(b);
    if (!["shift", "alt"].includes($) || !C) return;
    const T = Array.from(C), K = T.indexOf($);
    T.forEach((G, ee) => {
      ee >= K && (n.delete(G), f(G, !1));
    }), C.clear();
  }
  function k(x, $) {
    var b, C;
    const T = (b = x.key) === null || b === void 0 ? void 0 : b.toLowerCase(), K = [(C = x.code) === null || C === void 0 ? void 0 : C.toLowerCase(), T].filter(Boolean);
    if (T) {
      T && ($ ? n.add(T) : n.delete(T));
      for (const G of K)
        u.add(G), f(G, $);
      h($, x, [...n, ...K]), v($, T), T === "meta" && !$ && (c.forEach((G) => {
        n.delete(G), f(G, !1);
      }), c.clear());
    }
  }
  nt(o, "keydown", (x) => (k(x, !0), i(x)), { passive: r }), nt(o, "keyup", (x) => (k(x, !1), i(x)), { passive: r }), nt("blur", p, { passive: r }), nt("focus", p, { passive: r });
  const _ = new Proxy(s, { get(x, $, b) {
    if (typeof $ != "string") return Reflect.get(x, $, b);
    if ($ = $.toLowerCase(), $ in a && ($ = a[$]), !($ in s)) if (/[+_-]/.test($)) {
      const T = $.split(/[+_-]/g).map((K) => K.trim());
      s[$] = j(() => T.map((K) => st(_[K])).every(Boolean));
    } else s[$] = /* @__PURE__ */ Ot(!1);
    const C = Reflect.get(x, $, b);
    return t ? st(C) : C;
  } });
  return _;
}
// @__NO_SIDE_EFFECTS__
function Cp(e = {}) {
  const { window: t = io, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: a = Number.POSITIVE_INFINITY, listenOrientation: r = !0, includeScrollbar: i = !0, type: n = "inner" } = e, l = /* @__PURE__ */ Ot(o), s = /* @__PURE__ */ Ot(a), c = () => {
    if (t) if (n === "outer")
      l.value = t.outerWidth, s.value = t.outerHeight;
    else if (n === "visual" && t.visualViewport) {
      const { width: u, height: f, scale: p } = t.visualViewport;
      l.value = Math.round(u * p), s.value = Math.round(f * p);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  c(), mp(c);
  const d = { passive: !0 };
  return nt("resize", c, d), t && n === "visual" && t.visualViewport && nt(t.visualViewport, "resize", c, d), r && fe($p("(orientation: portrait)"), () => c()), {
    width: l,
    height: s
  };
}
function ss(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })
  ]);
}
function zp(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Tp = { class: "micro-icon" }, Ep = {
  __name: "PIconMicro",
  props: {
    icon: {
      type: [Function, Object],
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (g(), S("i", Tp, [
      (g(), oe(Vo(e.icon)))
    ]));
  }
}, nr = /* @__PURE__ */ me(Ep, [["__scopeId", "data-v-1e1a14be"]]), { width: ft, height: Op } = /* @__PURE__ */ Cp();
function Ap() {
  return {
    /** < 640px */
    isXs: j(() => ft.value < 640),
    /** 640px - 768px */
    isSm: j(() => ft.value >= 640 && ft.value < 768),
    /** 768px - 1024px */
    isMd: j(() => ft.value >= 768 && ft.value < 1024),
    /** 1024px - 1280px */
    isLg: j(() => ft.value >= 1024 && ft.value <= 1280),
    /** 1280px - 1536px */
    isXl: j(() => ft.value > 1280 && ft.value <= 1536),
    /** > 1536px */
    is2Xl: j(() => ft.value > 1536),
    width: j(() => ft.value),
    height: j(() => Op.value)
  };
}
const Vp = {
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
    const { isXs: t, isSm: o, isMd: a } = Ap();
    return (r, i) => !y(t) && !y(o) && !y(a) ? (g(), S("div", {
      key: 0,
      class: pe(["hotkey", [`${e.disabled ? "secondary" : e.variant}-hotkey`, { disabled: e.disabled }]])
    }, D(e.hotkey), 3)) : R("", !0);
  }
}, ds = /* @__PURE__ */ me(Vp, [["__scopeId", "data-v-a6d96a76"]]), Pp = {
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
    const o = e, a = t, r = /* @__PURE__ */ H(null);
    function i(s) {
      s && a("set:activator", s);
    }
    function n(s) {
      i(s.currentTarget), a(o.modelValue ? "close" : "open");
    }
    function l(s) {
      i(s.currentTarget);
    }
    return fe(
      () => [o.modelValue, o.floatingContainerEl, o.activatorEl],
      ([s]) => {
        if (r.value?.(), r.value = null, !s || !o.floatingContainerEl)
          return;
        const c = [o.activatorEl].filter(Boolean);
        requestAnimationFrame(() => {
          r.value = gp(
            o.floatingContainerEl,
            () => o.modelValue && a("close"),
            { ignore: c }
          );
        });
      },
      { immediate: !0 }
    ), (s, c) => se(s.$slots, "default", {
      slotProps: { onClick: n, onFocus: l }
    });
  }
}, jp = {
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
    return fe(
      () => o.isFocused,
      (l) => {
        l || a("close");
      }
    ), (l, s) => se(l.$slots, "default", {
      slotProps: { onFocus: r, onInput: i, onClick: n }
    });
  }
}, Mp = {
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
    const o = e, a = t, r = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H(!1);
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
    return fe(
      () => o.modelValue,
      () => {
        o.modelValue || (r.value = !1);
      }
    ), (d, u) => se(d.$slots, "default", {
      slotProps: { onMouseover: l, onMouseleave: n, onFocus: s, onBlur: c }
    });
  }
}, Ip = {
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
    return (s, c) => se(s.$slots, "default", {
      slotProps: { setActivator: r, toggle: l }
    });
  }
}, Np = {};
function Bp(e, t) {
  return g(), oe(ta, { name: "NO_TRANSITION" }, {
    default: O(() => [
      se(e.$slots, "default")
    ]),
    _: 3
  });
}
const Lp = /* @__PURE__ */ me(Np, [["render", Bp]]), Dp = {};
function Fp(e, t) {
  return g(), oe(ta, null, {
    default: O(() => [
      se(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const Rp = /* @__PURE__ */ me(Dp, [["render", Fp], ["__scopeId", "data-v-ed45de91"]]), Up = {
  __name: "_ExpandTransition",
  props: {
    placement: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, o) => (g(), oe(ta, {
      name: `expand-${e.placement}`
    }, {
      default: O(() => [
        se(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, qp = /* @__PURE__ */ me(Up, [["__scopeId", "data-v-42701d92"]]), Hp = {
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
    return tt(() => {
      const i = document.querySelector(`[data-activator-uuid="${a}"]`);
      if (i) {
        o("set:activator", i), o("open");
        return;
      }
      r.observe(document.body, { childList: !0, subtree: !0 });
    }), bo(() => {
      r.disconnect(), o("close");
    }), (i, n) => se(i.$slots, "default", {
      slotProps: { "data-activator-uuid": a }
    });
  }
};
function Oo(e, t = !1) {
  if (!e)
    return [];
  const o = ["[href]", "button", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? "" : ':not([tabindex="-1"])'}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(o)];
}
const Kp = {
  top: ["bottom", "right", "left"],
  right: ["left", "top", "bottom"],
  left: ["right", "top", "bottom"],
  bottom: ["top", "right", "left"]
}, fn = {
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
function Wp(e) {
  return e?.ownerDocument?.defaultView || window;
}
function cs(e) {
  const { overflow: t, overflowX: o, overflowY: a, display: r } = getComputedStyle(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + o) && !["inline", "contents"].includes(r);
}
function Zp(e) {
  return !e || ["html", "body", "#document"].includes(e.nodeName.toLowerCase());
}
function Gp(e) {
  return e instanceof HTMLElement;
}
function Jp(e) {
  return e.getRootNode ? e.getRootNode() : e;
}
function Yp(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host || Jp(e).host || null;
}
function us(e) {
  const t = Yp(e);
  return Zp(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gp(t) && cs(t) ? t : us(t);
}
function ps(e, t = []) {
  const o = us(e), a = o === e?.ownerDocument?.body, r = Wp(o);
  return a ? t.concat(
    r,
    r.visualViewport || [],
    cs(o) ? o : []
  ) : t.concat(o, ps(o, []));
}
function fs(e, t, o, a) {
  const { clientWidth: r, clientHeight: i } = document.documentElement, n = window.scrollY || document.documentElement.scrollTop || 0, l = window.scrollX || document.documentElement.scrollLeft || 0;
  return e >= n && t >= l && t + o <= l + (window.innerWidth || r) && e + a <= n + (window.innerHeight || i);
}
const Kr = /* @__PURE__ */ H(!1), xo = /* @__PURE__ */ H(!1), ko = /* @__PURE__ */ H(!1);
function Xp(e, t, o, a, r = 4) {
  const i = window.scrollY || document.documentElement.scrollTop || 0, n = window.scrollX || document.documentElement.scrollLeft || 0, l = window.innerHeight, s = window.innerWidth;
  let c = e, d = t;
  const u = i + l - r, f = n + s - r, p = i + r, h = n + r;
  c + a > u && (c = Math.max(p, u - a)), c < p && (c = p), d + o > f && (d = Math.max(h, f - o)), d < h && (d = h);
  const v = u - p, k = f - h;
  return {
    top: c,
    left: d,
    needsVerticalClamp: a > v,
    needsHorizontalClamp: o > k,
    maxHeight: Math.min(a, v),
    maxWidth: Math.min(o, k)
  };
}
function hn(e, t, o) {
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
function mn(e, t, o) {
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
function Qp(e, t, o, a) {
  const r = window.scrollY + e.top, i = window.scrollX + e.left;
  return {
    top: (n) => ({
      top: r - o - a.offset,
      left: hn(n, e, t)
    }),
    bottom: (n) => ({
      top: r + e.height + a.offset,
      left: hn(n, e, t)
    }),
    left: (n) => ({
      top: mn(n, e, o),
      left: i - t - a.offset
    }),
    right: (n) => ({
      top: mn(n, e, o),
      left: i + e.width + a.offset
    })
  };
}
async function ef(e, t, o, a, r) {
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
  const [n, l] = a.location.replaceAll(" ", "").split(","), s = l || "center", c = Qp(i, t, e, a), d = (f, p) => {
    const h = c[f](p);
    return fs(h.top, h.left, t, e) ? { placement: f, alignment: p, ...h } : null;
  };
  let u = d(n, s);
  return u || ((fn[n][s] || []).some((f) => (u = d(n, f), !!u)), u) || (Kp[n].some((f) => (u = d(f, s), u ? !0 : Object.keys(fn[f]).some((p) => (u = d(f, p), !!u)))), u) ? u : { placement: n, alignment: s, ...c[n](s) };
}
function tf(e, t) {
  const o = t.getBoundingClientRect(), a = e.getBoundingClientRect();
  o.width !== a.width && (e.style.minWidth = `${o.width}px`);
}
async function of(e, t, o, a = null) {
  if (e.style.visibility !== "visible") {
    const f = e.style.visibility;
    e.style.visibility = "hidden", e.showPopover(), await new Promise((p) => {
      requestAnimationFrame(() => requestAnimationFrame(p));
    }), e.style.visibility = f || "hidden";
  }
  let r;
  o.attach instanceof HTMLElement ? r = o.attach : typeof o.attach == "string" ? r = document.querySelector(o.attach) : r = t, xo.value || (e.style.maxHeight = "", e.style.overflowY = ""), ko.value || (e.style.maxWidth = "", e.style.overflowX = ""), o.fitContent || (tf(e, r), await Promise.resolve());
  const i = e.getBoundingClientRect(), n = e.scrollHeight || e.clientHeight || Math.ceil(i.height), l = e.scrollWidth || e.clientWidth || Math.ceil(i.width), s = await ef(n, l, r, o, a), c = fs(s.top, s.left, l, n);
  let d = s.top, u = s.left;
  if (Kr.value = !0, !c && o.clamp) {
    const f = Xp(s.top, s.left, l, n);
    d = f.top, u = f.left, f.needsVerticalClamp ? (xo.value = !0, e.style.maxHeight = `${f.maxHeight}px`, e.style.overflowY = "auto") : xo.value && (xo.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), f.needsHorizontalClamp ? (ko.value = !0, e.style.maxWidth = `${f.maxWidth}px`, e.style.overflowX = "auto") : ko.value && (ko.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  } else
    xo.value && (xo.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), ko.value && (ko.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
  return e.style.top = `${d}px`, e.style.left = `${u}px`, e.style.visibility = "visible", requestAnimationFrame(() => {
    Kr.value = !1;
  }), { placement: s.placement, alignment: s.alignment };
}
function af(e, t) {
  const o = /* @__PURE__ */ H(), a = /* @__PURE__ */ H(), r = /* @__PURE__ */ H(), i = /* @__PURE__ */ H(), n = /* @__PURE__ */ Xe({
    location: "bottom",
    fitContent: !1,
    attach: null,
    offset: 0,
    clamp: !0
  }), l = /* @__PURE__ */ Xe([]);
  function s() {
    return !e.value || !t.value ? null : of(e.value, t.value, n, i.value).then((f) => {
      o.value = f.placement, a.value = f.alignment;
    });
  }
  function c() {
    l.forEach((f) => {
      f.removeEventListener("scroll", s), f.removeEventListener("resize", s);
    }), l.splice(0), e.value && (l.push(...ps(e.value)), l.forEach((f) => {
      f.addEventListener("scroll", s, { passive: !0 }), f.addEventListener("resize", s);
    }));
  }
  function d() {
    r.value = new ResizeObserver(() => {
      Kr.value || requestAnimationFrame(s);
    });
  }
  function u(f) {
    Object.keys(f).forEach((p) => {
      p in n && (n[p] = f[p]);
    });
  }
  return fe(e, (f, p) => {
    r.value || d(), p && r.value?.unobserve(p), t.value && r.value?.unobserve(t.value), f && t.value && (r.value.observe(f), r.value.observe(t.value));
  }), bo(() => {
    l.forEach((f) => {
      f.removeEventListener("scroll", s), f.removeEventListener("resize", s);
    }), l.splice(0), r.value?.disconnect();
  }), {
    autoUpdate: (f) => {
      u(f), [o.value, a.value] = n.location.replaceAll(" ", "").split(","), fe([e, t], async ([p, h]) => {
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
      fe(
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
const rf = ["aria-hidden", "aria-label"], nf = { class: "floating-container-overlay" }, lf = ["aria-expanded"], sf = {
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
    const a = e, r = o, i = Ft("floating-container-content"), n = /* @__PURE__ */ H(null), { autoUpdate: l, fixedPosition: s, watchCursor: c, placement: d, alignment: u } = af(
      i,
      n
    ), f = /* @__PURE__ */ xp(), p = /* @__PURE__ */ H(!1), h = /* @__PURE__ */ H(!1), v = /* @__PURE__ */ H(-1), k = j(() => f.value === n.value || f.value === i.value || n.value?.contains(f.value) || i.value?.contains(f.value) || !1), _ = j(() => {
      switch (a.behavior) {
        case "focus":
          return { component: jp, props: { isFocused: k.value } };
        case "hover":
          return {
            component: Mp,
            props: { floatingContainerEl: i.value }
          };
        case "manual":
          return { component: Ip };
        case "static":
          return { component: Hp };
        default:
          return {
            component: Pp,
            props: {
              floatingContainerEl: i.value,
              activatorEl: n.value
            }
          };
      }
    });
    function x(I) {
      n.value = I;
    }
    async function $() {
      clearTimeout(v.value), v.value = setTimeout(async () => {
        p.value = !0, r("update:isOpen", !0), await ct(), await new Promise(requestAnimationFrame), h.value = !0;
      }, a.delay);
    }
    function b() {
      clearTimeout(v.value), h.value = !1, a.transition !== "fade" && a.transition !== "expand" && (p.value = !1);
    }
    function C() {
      p.value = !1, r("update:isOpen", !1);
    }
    function T() {
      !a.closeOnClick || !p.value || a.behavior === "static" || (n.value?.focus(), b());
    }
    function K(I) {
      if (I.key === "Tab") {
        const q = Oo(i.value, !0), A = q.indexOf(document.activeElement), P = I.shiftKey ? A - 1 : A + 1;
        q[P] ? (I.preventDefault(), q[P].focus()) : (I.preventDefault(), P <= 0 && n.value.focus());
      } else if (I.key === "Escape") {
        if (a.behavior === "static")
          return;
        n.value.focus(), b();
      } else I.key === "Enter" && (I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation(), a.closeOnClick && a.behavior !== "static" && (n.value.focus(), b()));
    }
    async function G(I) {
      if (I.key === "Escape") {
        if (a.behavior === "static")
          return;
        I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation(), b();
        return;
      }
      if (!["ArrowDown", "ArrowUp"].includes(I.key))
        return;
      i.value || (await $(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
      const q = Oo(i.value);
      if (q.length === 0)
        return;
      I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
      const A = q.indexOf(document.activeElement);
      A === -1 ? Oo(i.value)[0].focus() : I.key === "ArrowDown" ? q[A + 1]?.focus() : I.key === "ArrowUp" && q[A - 1]?.focus();
    }
    fe(
      () => k.value,
      () => r("update:focus", k.value)
    ), fe([d, u], () => {
      r("update:location", [d.value, u.value].filter(Boolean).join(","));
    });
    const ee = j(() => {
      switch (a.transition) {
        case "fade":
          return Rp;
        case "expand":
          return qp;
        default:
          return Lp;
      }
    });
    return tt(async () => {
      switch (await ct(), a.behavior) {
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
    }), (I, q) => (g(), S(we, null, [
      _.value ? (g(), oe(Vo(_.value.component), De({ key: 0 }, _.value.props, {
        "model-value": p.value,
        onOpen: $,
        onClose: b,
        "onSet:activator": x
      }), {
        default: O(({ slotProps: A }) => [
          se(I.$slots, "activator", na(ar({ ...A, onKeydown: G })), void 0, !0)
        ]),
        _: 3
      }, 16, ["model-value"])) : R("", !0),
      p.value ? (g(), S("div", {
        key: 1,
        class: "floating-container-overlay-container",
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !h.value,
        "aria-label": e.ariaLabel
      }, [
        U("div", nf, [
          (g(), oe(Vo(ee.value), {
            key: e.behavior !== "static" ? `${y(d) || "unknown"}-${y(u) || "unknown"}` : null,
            placement: y(d),
            alignment: y(u),
            appear: "",
            onAfterLeave: C
          }, {
            default: O(() => [
              vo(U("div", {
                ref: "floating-container-content",
                class: "floating-container-content",
                "data-testid": "menu",
                popover: "manual",
                tabindex: "-1",
                role: "menu",
                "aria-expanded": p.value ? "true" : "false",
                onKeydown: K,
                onClick: T
              }, [
                se(I.$slots, "default", {}, void 0, !0)
              ], 40, lf), [
                [di, h.value]
              ])
            ]),
            _: 3
          }, 40, ["placement", "alignment"]))
        ])
      ], 8, rf)) : R("", !0)
    ], 64));
  }
}, hs = /* @__PURE__ */ me(sf, [["__scopeId", "data-v-d07f7747"]]), df = {
  __name: "PTooltip",
  props: /* @__PURE__ */ ut({
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
    const t = Ye(e, "location"), o = Ft("tooltip-wrapper"), a = j(() => o.value?.children[0]);
    return (r, i) => (g(), oe(hs, {
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
        U("div", De({
          ref: "tooltip-wrapper",
          class: "tooltip-wrapper"
        }, n), [
          se(r.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      default: O(() => [
        e.text || r.$slots.content ? (g(), S("div", {
          key: 0,
          class: pe(["tooltip", [t.value.replace(/,/g, "-"), { inverted: e.inverted }]]),
          style: bt({ width: e.width }),
          "data-testid": "tooltip",
          role: "menuitem"
        }, [
          se(r.$slots, "content", {}, () => [
            ae(D(e.text), 1)
          ], !0)
        ], 6)) : R("", !0)
      ]),
      _: 3
    }, 8, ["offset", "behavior", "location", "fit-content", "attach", "delay", "aria-label"]));
  }
}, ra = /* @__PURE__ */ me(df, [["__scopeId", "data-v-5016fba7"]]), cf = ["for"], uf = { class: "label-text" }, pf = {
  variant: "text",
  size: "small"
}, ff = {
  key: 0,
  class: "optional"
}, hf = { class: "container-inner" }, mf = {
  key: 0,
  class: "inline-container-prepended"
}, vf = ["id", "placeholder", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "rows", "autofocus"], gf = ["id", "placeholder", "type", "disabled", "readonly", "aria-label", "aria-invalid", "aria-describedby", "autofocus"], bf = { class: "inline-container-appended" }, wf = {
  key: 1,
  class: "text"
}, yf = ["id"], xf = {
  __name: "PInput",
  props: /* @__PURE__ */ ut({
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
  emits: /* @__PURE__ */ ut(["blur", "focus"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const a = e, r = Ye(e, "modelValue"), i = vl(), n = o, l = At("showError", !0), s = ls()[a.hotkey.key], c = /* @__PURE__ */ H(null), d = j(() => a.error ? ss : a.icon), u = j(() => a.optional !== "" ? a.optional : V("input.optional")), f = j(() => a.requiredMessage ? a.requiredMessage : a.label ? V("input.required_with_label", { label: a.label.toLowerCase() }) : V("input.required")), p = j(() => {
      const b = a.required ? { modelValue: { required: Ue.withMessage(() => f.value, aa) } } : { modelValue: {} };
      return a.rules.forEach((C, T) => {
        b.modelValue[C.label || T] = Ue.withMessage(() => C.message || "", C.validator);
      }), b;
    }), h = /* @__PURE__ */ H(ao(p, { modelValue: r })), v = j(() => !!a.error || h.value.modelValue.$errors?.length > 0), k = j(() => `${a.id}-error`), _ = Ld(), x = j(() => {
      const b = { ..._ };
      return delete b["data-testid"], b;
    });
    function $(b) {
      n("blur", b), h.value.$touch(b);
    }
    return fe(s, (b) => {
      b && a.hotkey && setTimeout(() => {
        c.value.focus();
      }, 100);
    }), fe(p, () => {
      h.value = ao(p, { modelValue: r });
    }), t({
      input: c
    }), (b, C) => (g(), S("div", {
      class: pe(["input-container", { "has-error": v.value, "is-large": e.large }]),
      tabindex: "-1",
      onFocus: C[4] || (C[4] = (T) => b.$refs.input.focus())
    }, [
      e.label ? (g(), S("label", {
        key: 0,
        class: "input-label",
        for: e.id
      }, [
        U("span", uf, [
          ae(D(e.label) + " ", 1),
          e.info || y(i).info ? (g(), oe(ra, {
            key: 0,
            location: "right",
            inverted: ""
          }, {
            content: O(() => [
              se(b.$slots, "info", {}, () => [
                ae(D(e.info), 1)
              ], !0)
            ]),
            default: O(() => [
              U("span", pf, [
                F(nr, {
                  class: "info-icon",
                  icon: y(zp)
                }, null, 8, ["icon"])
              ])
            ]),
            _: 3
          })) : R("", !0)
        ]),
        e.required ? R("", !0) : (g(), S("span", ff, D(u.value), 1))
      ], 8, cf)) : R("", !0),
      U("div", hf, [
        e.prependIcon ? (g(), S("div", mf, [
          F(oo, { icon: e.prependIcon }, null, 8, ["icon"])
        ])) : R("", !0),
        e.expand ? vo((g(), S("textarea", De({
          key: 1,
          id: e.id,
          ref_key: "input",
          ref: c,
          "onUpdate:modelValue": C[0] || (C[0] = (T) => r.value = T),
          autocomplete: "off",
          class: ["input", {
            "has-error": v.value,
            "is-valid": e.valid,
            "has-icon-prepended": e.prependIcon,
            "has-icon-appended": e.icon
          }],
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": e.ariaLabel,
          "aria-invalid": v.value,
          "aria-describedby": v.value ? k.value : null,
          rows: e.rows,
          autofocus: e.autofocus
        }, x.value, {
          onFocus: C[1] || (C[1] = (T) => n("focus", T)),
          onBlur: $
        }), null, 16, vf)), [
          [Ia, r.value]
        ]) : vo((g(), S("input", De({
          key: 2,
          id: e.id,
          ref_key: "input",
          ref: c,
          "onUpdate:modelValue": C[2] || (C[2] = (T) => r.value = T),
          autocomplete: "off",
          class: ["input", {
            "has-error": v.value,
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
          "aria-invalid": v.value,
          "aria-describedby": v.value ? k.value : null,
          autofocus: e.autofocus
        }, x.value, {
          onFocus: C[3] || (C[3] = (T) => n("focus", T)),
          onBlur: $
        }), null, 16, gf)), [
          [Gc, r.value]
        ]),
        U("div", bf, [
          se(b.$slots, "inline", {}, () => [
            e.icon ? (g(), oe(oo, {
              key: 0,
              icon: d.value,
              class: pe({ "has-error": v.value })
            }, null, 8, ["icon", "class"])) : R("", !0),
            e.inline ? (g(), S("span", wf, D(e.inline), 1)) : R("", !0),
            e.hotkey.label ? (g(), oe(ds, {
              key: 2,
              hotkey: e.hotkey.label,
              variant: "secondary"
            }, null, 8, ["hotkey"])) : R("", !0)
          ], !0)
        ])
      ]),
      v.value && y(l) ? (g(), S("span", {
        key: 1,
        id: k.value,
        class: "error",
        "aria-live": "assertive",
        role: "alert"
      }, D(h.value.modelValue?.$errors[0]?.$message ? h.value.modelValue.$errors[0].$message : e.error), 9, yf)) : R("", !0)
    ], 34));
  }
}, zt = /* @__PURE__ */ me(xf, [["__scopeId", "data-v-ff1ca5e3"]]);
function kf(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function _f(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
const $f = {
  __name: "PStepStatus",
  props: {
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    }
  },
  setup(e) {
    const t = e, o = j(() => {
      switch (t.status) {
        case "done":
          return kf;
        case "attention":
          return _f;
        default:
          return null;
      }
    });
    return (a, r) => (g(), S("div", {
      class: pe(["status", e.status])
    }, [
      o.value ? (g(), oe(nr, {
        key: 0,
        icon: o.value
      }, null, 8, ["icon"])) : R("", !0)
    ], 2));
  }
}, ms = /* @__PURE__ */ me($f, [["__scopeId", "data-v-aa0d87a4"]]);
function Sf(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cf(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zf(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Tf(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ef = ["data-testid"], Of = { class: "icon" }, Af = { class: "content" }, Vf = { class: "title" }, Pf = {
  key: 0,
  class: "description"
}, jf = {
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
    const t = e, o = j(() => t.icon ? t.icon : t.type === "error" ? Cf : t.type === "warning" ? zf : t.type === "success" ? Sf : t.type === "info" ? Tf : null);
    return (a, r) => (g(), S("div", {
      class: pe(["alert", e.type]),
      "data-testid": `alert-${e.type}`
    }, [
      se(a.$slots, "default", {}, () => [
        U("div", Of, [
          F(vt, { icon: o.value }, null, 8, ["icon"])
        ]),
        U("div", Af, [
          U("span", Vf, D(e.title), 1),
          e.description ? (g(), S("span", Pf, D(e.description), 1)) : R("", !0)
        ])
      ], !0)
    ], 10, Ef));
  }
}, lr = /* @__PURE__ */ me(jf, [["__scopeId", "data-v-bd0367f1"]]), Mf = {
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
    return (t, o) => (g(), S("div", {
      class: pe(["loader", `${e.color}-loader ${e.size}-loader`])
    }, null, 2));
  }
}, sr = /* @__PURE__ */ me(Mf, [["__scopeId", "data-v-26a513f6"]]), If = ["tabindex", "disabled"], Nf = {
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
    const t = e, o = vl(), a = ls()[t.hotkey.key], r = j(() => t.variant === "secondary" || t.variant === "tertiary" ? t.variant : t.variant === "text" ? "secondary" : "primary");
    return fe(a, (i) => {
      i && t.hotkey?.key && !t.loading && !t.disabled && t.hotkey.callback();
    }), (i, n) => (g(), S("button", {
      class: pe(["button", [e.variant, e.size, e.color, y(o).default ? "" : "has-icon", e.loading ? "pointer-events-none" : ""]]),
      tabindex: e.loading ? -1 : 0,
      disabled: e.disabled
    }, [
      e.loading ? (g(), oe(sr, {
        key: 0,
        color: "inherit",
        size: e.size
      }, null, 8, ["size"])) : e.icon ? (g(), oe(vt, {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : R("", !0),
      se(i.$slots, "default", {}, void 0, !0),
      e.hotkey.key ? (g(), oe(ds, {
        key: 2,
        hotkey: e.hotkey.label,
        variant: r.value,
        disabled: e.disabled
      }, null, 8, ["hotkey", "variant", "disabled"])) : R("", !0)
    ], 10, If));
  }
}, Ve = /* @__PURE__ */ me(Nf, [["__scopeId", "data-v-24f66151"]]);
function Bf(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
function $a(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
function Lf(e, t) {
  return g(), S("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, [
    U("g", {
      id: "Icon/Outline/MaximizeScreen",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      U("path", {
        d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M14.3478261,7.13043478 L17.2826087,7.13043478 C17.6050138,7.13402532 17.8653502,7.35579341 17.8695652,7.63043478 L17.8695652,10.1304348 M17.6973913,7.3026087 L13.3695652,11.6304348",
        id: "Combined-Shape",
        stroke: "currentColor",
        "stroke-width": "1.5"
      })
    ])
  ]);
}
function Df(e, t) {
  return g(), S("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, [
    U("g", {
      id: "Icon/Outline/MinimizeScreen",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      U("path", {
        d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M16.8913043,11.6304348 L13.9565217,11.6304348 C13.6341166,11.6268442 13.3737802,11.4050762 13.3695652,11.1304348 L13.3695652,8.63043478 M13.5417391,11.4582609 L17.8695652,7.13043478",
        id: "Combined-Shape",
        stroke: "currentColor",
        "stroke-width": "1.5"
      })
    ])
  ]);
}
const Ff = ["data-testid"], Rf = {
  key: 0,
  class: "actions"
}, Uf = {
  class: "inner",
  tabindex: "-1",
  autofocus: ""
}, qf = {
  key: 0,
  class: "minimized-actions"
}, Hf = {
  __name: "PModal",
  props: /* @__PURE__ */ ut({
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
  emits: /* @__PURE__ */ ut(["minimize", "update:modelValue", "click:primary", "click:secondary", "close"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const a = e, r = o, i = Ye(e, "modelValue"), n = Ft("modal"), l = Ft("modal-content"), s = Ft("footer"), c = Ft("header"), d = /* @__PURE__ */ H(!1), u = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(!1), p = /* @__PURE__ */ H(!1), h = /* @__PURE__ */ H(!1), v = /* @__PURE__ */ H(!1), k = /* @__PURE__ */ H(!1), _ = /* @__PURE__ */ H(null), x = /* @__PURE__ */ H(null), $ = /* @__PURE__ */ H(null);
    let b = null;
    function C() {
      if (!l.value)
        return;
      f.value = l.value.scrollTop > 0;
      const q = l.value.scrollHeight - l.value.clientHeight;
      p.value = l.value.scrollTop < q;
    }
    function T(q) {
      if (clearTimeout(_.value), b && (cancelAnimationFrame(b), b = null), $.value && (clearTimeout($.value), $.value = null), q) {
        v.value = !1, h.value = !0, k.value = !1, ct(() => {
          const A = n.value;
          A.open || A.showModal(), b = requestAnimationFrame(() => {
            k.value = !0, b = null;
          }), C(), !a.loading && ($.value = setTimeout(() => {
            Oo(l.value)[0]?.focus();
          }, 500));
        });
        return;
      }
      h.value && (v.value = !0, k.value = !1, _.value = setTimeout(() => {
        n.value?.close();
      }, 500));
    }
    function K(q) {
      r("minimize", q), d.value = q, u.value = !q;
    }
    function G(q) {
      if (a.persistent || a.fullscreen || q.target !== q.currentTarget) {
        a.persistent && q.target.isEqualNode(q.currentTarget) && (x.value && clearTimeout(x.value), n.value.classList.add("persistent-animation"), x.value = setTimeout(() => {
          n.value?.classList.remove("persistent-animation");
        }, 300));
        return;
      }
      r("close"), i.value = !1;
    }
    function ee(q) {
      a.persistent && q.preventDefault();
    }
    function I() {
      _.value && (clearTimeout(_.value), _.value = null), i.value && (i.value = !1), v.value = !1, h.value = !1, k.value = !1;
    }
    return fe(
      () => !!i.value,
      (q) => {
        T(q);
      },
      { immediate: !0 }
    ), fe(
      () => a.loading,
      (q) => {
        q === !1 && i.value && ct(() => {
          Oo(l.value)[0]?.focus();
        });
      }
    ), fe(
      () => n.value,
      (q, A, P) => {
        q && (q.addEventListener("cancel", ee), P(() => {
          q.removeEventListener("cancel", ee);
        }));
      },
      { immediate: !0 }
    ), wo(() => {
      _.value && clearTimeout(_.value), x.value && clearTimeout(x.value), $.value && clearTimeout($.value), b && cancelAnimationFrame(b);
    }), t({
      showModal: () => i.value = !0,
      close: () => i.value = !1
    }), (q, A) => h.value ? (g(), S("dialog", {
      key: 0,
      ref: "modal",
      class: pe(["modal", [
        k.value ? "open" : "closed",
        {
          fullscreen: e.fullscreen,
          minimized: d.value,
          maximized: u.value,
          persistent: e.persistent
        }
      ]]),
      "data-testid": e.dataTestid,
      style: bt({ "max-width": e.width }),
      onClose: I,
      onClick: G
    }, [
      e.fullscreen && !d.value ? (g(), S("div", Rf, [
        e.showMinimize ? (g(), oe(Ve, {
          key: 0,
          variant: "text",
          icon: y(Df),
          class: "minimize",
          onClick: A[0] || (A[0] = (P) => K(!0))
        }, {
          default: O(() => [
            ae(D(y(V)("modal.minimize")), 1)
          ]),
          _: 1
        }, 8, ["icon"])) : R("", !0),
        e.hideCloseButton ? R("", !0) : (g(), oe(Ve, {
          key: 1,
          variant: "text",
          icon: y($a),
          class: "close",
          onClick: A[1] || (A[1] = (P) => i.value = !1)
        }, {
          default: O(() => [
            ae(D(y(V)("modal.close")), 1)
          ]),
          _: 1
        }, 8, ["icon"]))
      ])) : R("", !0),
      U("div", Uf, [
        e.hideHeader ? R("", !0) : (g(), S("header", {
          key: 0,
          ref: "header",
          class: pe(["header", { "header-shadow": f.value }]),
          "data-testid": "modal-header"
        }, [
          se(q.$slots, "header", na(ar({ minimize: d.value })), () => [
            e.title ? (g(), oe(Pt, {
              key: 0,
              class: "title",
              level: "h2"
            }, {
              default: O(() => [
                ae(D(e.title), 1)
              ]),
              _: 1
            })) : R("", !0),
            !e.fullscreen && !e.hideCloseButton ? (g(), oe(Ve, {
              key: 1,
              icon: y($a),
              variant: "text",
              class: "close",
              "aria-label": y(V)("modal.close"),
              onClick: A[2] || (A[2] = (P) => {
                i.value = !1, r("close");
              })
            }, null, 8, ["icon", "aria-label"])) : R("", !0)
          ]),
          d.value && e.fullscreen ? (g(), S("div", qf, [
            F(Ve, {
              "data-testid": "open-button",
              icon: y(Lf),
              onClick: A[3] || (A[3] = (P) => K(!1))
            }, {
              default: O(() => [
                ae(D(y(V)("modal.open")), 1)
              ]),
              _: 1
            }, 8, ["icon"]),
            F(Ve, {
              "data-testid": "close-button",
              icon: y($a),
              variant: "secondary",
              onClick: A[4] || (A[4] = (P) => {
                i.value = !1, r("close");
              })
            }, {
              default: O(() => [
                ae(D(y(V)("modal.close")), 1)
              ]),
              _: 1
            }, 8, ["icon"])
          ])) : R("", !0)
        ], 2)),
        d.value ? R("", !0) : (g(), S("div", {
          key: 1,
          ref: "modal-content",
          class: pe(["content", { "pt-8!": e.hideHeader }]),
          tabindex: "0",
          style: bt(
            e.fullscreen ? null : `max-height: calc(100vh - ${c.value?.clientHeight + s.value?.clientHeight}px - 64px); `
          ),
          onScroll: C
        }, [
          e.loading ? (g(), S(we, { key: 0 }, [
            q.$slots.loading ? se(q.$slots, "loading", { key: 0 }) : (g(), oe(sr, { key: 1 }))
          ], 64)) : se(q.$slots, "default", { key: 1 })
        ], 38)),
        !e.fullscreen && !e.hideFooter || !d.value && e.fullscreen && q.$slots.footer ? (g(), S("footer", {
          key: 2,
          ref: "footer",
          class: pe(["footer", { "footer-shadow": !e.fullscreen && p.value }])
        }, [
          se(q.$slots, "footer", {}, () => [
            e.fullscreen ? R("", !0) : (g(), S(we, { key: 0 }, [
              F(Ve, {
                type: "button",
                variant: "secondary",
                "data-testid": "secondary-button",
                onClick: A[5] || (A[5] = (P) => r("click:secondary"))
              }, {
                default: O(() => [
                  ae(D(e.secondaryButtonText ? e.secondaryButtonText : y(V)("modal.cancel")), 1)
                ]),
                _: 1
              }),
              F(Ve, {
                type: "button",
                "data-testid": "primary-button",
                onClick: A[6] || (A[6] = (P) => r("click:primary"))
              }, {
                default: O(() => [
                  ae(D(e.primaryButtonText ? e.primaryButtonText : y(V)("modal.save")), 1)
                ]),
                _: 1
              })
            ], 64))
          ])
        ], 2)) : R("", !0)
      ])
    ], 46, Ff)) : R("", !0);
  }
}, Kf = /* @__PURE__ */ me(Hf, [["__scopeId", "data-v-69ff7208"]]), Wf = { class: "message" }, Zf = {
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
    const o = t, a = e, r = j(() => a.icon ? a.icon : a.isDanger ? ss : Bf);
    return (i, n) => (g(), oe(Kf, {
      "model-value": !0,
      class: "confirm-modal",
      "onUpdate:modelValue": n[2] || (n[2] = (l) => !l && o("cancel"))
    }, {
      footer: O(() => [
        F(Ve, {
          variant: "secondary",
          "data-testid": "secondary-button",
          onClick: n[0] || (n[0] = (l) => o("cancel"))
        }, {
          default: O(() => [
            ae(D(e.secondaryButtonText ? e.secondaryButtonText : y(V)("confirm-modal.cancel")), 1)
          ]),
          _: 1
        }),
        F(Ve, {
          variant: e.isDanger ? "danger" : "primary",
          "data-testid": "primary-button",
          onClick: n[1] || (n[1] = (l) => o("confirm"))
        }, {
          default: O(() => [
            e.primaryButtonText ? (g(), S(we, { key: 0 }, [
              ae(D(e.primaryButtonText), 1)
            ], 64)) : (g(), S(we, { key: 1 }, [
              ae(D(e.type === "delete" ? y(V)("confirm-modal.delete") : y(V)("confirm-modal.confirm")), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      default: O(() => [
        U("div", {
          class: pe(["indicator-icon", { danger: e.isDanger, info: !e.isDanger }])
        }, [
          F(oo, { icon: r.value }, null, 8, ["icon"])
        ], 2),
        F(Pt, {
          level: "h2",
          class: "title"
        }, {
          default: O(() => [
            ae(D(e.title || y(V)("confirm-modal.confirm")), 1)
          ]),
          _: 1
        }),
        U("p", Wf, D(e.message || y(V)("confirm-modal.confirm_message")), 1)
      ]),
      _: 1
    }));
  }
}, vn = /* @__PURE__ */ me(Zf, [["__scopeId", "data-v-8e75fc96"]]);
function Gf() {
  const e = pt(), t = /* @__PURE__ */ H(() => {
  }), o = () => {
    requestAnimationFrame(() => {
      Rr(null, document.querySelector("body"));
    });
  };
  wo(o);
  const a = () => {
    o(), t.value(!0);
  }, r = () => {
    o(), t.value(!1);
  };
  return {
    reveal: (i, n, l = "confirm", s = !0, c = "", d = "", u = null) => {
      let f = null;
      return typeof i == "object" ? f = Lr(vn, {
        title: i.title,
        message: i.message || "",
        type: i.type || "confirm",
        isDanger: i.isDanger !== void 0 ? i.isDanger : !0,
        primaryButtonText: i.primaryButtonText || "",
        secondaryButtonText: i.secondaryButtonText || "",
        icon: i.icon || null,
        onCancel: r,
        onConfirm: a
      }) : f = Lr(vn, {
        title: i,
        message: n,
        type: l,
        isDanger: s,
        primaryButtonText: c,
        secondaryButtonText: d,
        icon: u,
        onCancel: r,
        onConfirm: a
      }), f.key = Math.random(), f.appContext = e.appContext, Rr(f, document.querySelector("body")), new Promise((p) => {
        t.value = p;
      });
    }
  };
}
const Jf = "[data-form-dirty-ignore]", go = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new WeakMap();
let gn = 0, bn = 0, Ra = !1, ma = null;
const Yf = /* @__PURE__ */ H(null);
function vs() {
  return typeof window > "u" ? null : window;
}
function Xf() {
  return typeof document > "u" ? null : document;
}
function Qf(e) {
  return typeof e == "function" ? e() : e;
}
function eh(e) {
  return $r.has(e) || ($r.set(e, bn), bn += 1), $r.get(e);
}
function th(e, t) {
  return `${e}:${eh(t)}`;
}
function oh() {
  return Array.from(go.values()).filter((e) => e.isDirty.value);
}
function gs(e) {
  oh().length && e.preventDefault();
}
function ah() {
  Ra || !go.size || (vs()?.addEventListener("beforeunload", gs), Ra = !0);
}
function rh() {
  !Ra || go.size || (vs()?.removeEventListener("beforeunload", gs), Ra = !1);
}
function ih(e, t) {
  return Array.from(go.values()).map((o) => {
    const a = o.navigationGuards.find((r) => r.listenerKey === e && r.guard.shouldHandle(t));
    return !o.isDirty.value || !a ? null : {
      formState: o,
      navigationGuard: a
    };
  }).filter(Boolean);
}
async function nh(e, t) {
  const o = ih(e, t);
  if (!o.length || (t.preventDefault(), ma))
    return;
  const a = o[o.length - 1];
  ma = a.formState.confirmNavigation();
  try {
    if (!await ma)
      return;
    o.forEach(({ formState: i }) => {
      i.resetDirtyState();
    });
    const r = a.navigationGuard.guard.getNavigationData(t);
    a.navigationGuard.guard.continueNavigation(r, t);
  } finally {
    ma = null;
  }
}
function lh(e, t) {
  const o = Qf(t.target);
  if (!o?.addEventListener || !t.eventName)
    return null;
  const a = th(t.eventName, o);
  let r = Fa.get(a);
  if (!r) {
    const i = (n) => nh(a, n);
    r = {
      eventName: t.eventName,
      target: o,
      listener: i,
      formIds: /* @__PURE__ */ new Set()
    }, o.addEventListener(t.eventName, i), Fa.set(a, r);
  }
  return r.formIds.add(e.id), {
    listenerKey: a,
    guard: t,
    target: o
  };
}
function sh(e) {
  go.set(e.id, e), e.navigationGuards = e.navigationGuards.map((t) => lh(e, t)).filter(Boolean), ah();
}
function wn(e) {
  const t = go.get(e);
  t && (t.navigationGuards.forEach(({ listenerKey: o }) => {
    const a = Fa.get(o);
    a && (a.formIds.delete(e), !a.formIds.size && (a.target.removeEventListener(
      a.eventName,
      a.listener
    ), Fa.delete(o)));
  }), go.delete(e), rh());
}
function dh(e, t) {
  Yf.value?.(e, t);
}
function bs({
  eventName: e = "",
  target: t = Xf,
  shouldHandle: o = () => !0,
  getNavigationData: a = (i) => i.detail,
  continueNavigation: r = dh
} = {}) {
  return {
    eventName: e,
    target: t,
    shouldHandle: o,
    getNavigationData: a,
    continueNavigation: r
  };
}
const ch = Object.freeze([bs()]), uh = /* @__PURE__ */ H(ch);
function ph(e) {
  return (e ?? uh.value).map((t) => bs(t));
}
function fh(e) {
  return Array.from(e.currentTarget?.querySelectorAll?.(Jf) ?? []).some((t) => t.contains(e.target));
}
function hh(e = {}) {
  const { reveal: t } = Gf(), o = gn, a = /* @__PURE__ */ H(!1), r = /* @__PURE__ */ H(!1), i = j(() => a.value), n = j(() => ph(y(e.navigationGuards)));
  gn += 1;
  function l() {
    a.value = !0;
  }
  function s(p) {
    fh(p) || l();
  }
  function c() {
    a.value = !1;
  }
  async function d() {
    return t({
      title: V("form.unsaved_changes.title"),
      message: V("form.unsaved_changes.message"),
      primaryButtonText: V("form.unsaved_changes.leave"),
      secondaryButtonText: V("form.unsaved_changes.stay"),
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
    wn(o), u.navigationGuards = n.value, sh(u);
  }
  return tt(() => {
    r.value = !0, f();
  }), fe(n, () => {
    r.value && f();
  }), wo(() => {
    r.value = !1, wn(o);
  }), {
    isDirty: i,
    markDirty: l,
    markDirtyFromNativeEvent: s,
    resetDirtyState: c
  };
}
const ws = {
  __name: "PForm",
  setup(e, { expose: t }) {
    const o = ao(), { isDirty: a, markDirty: r, markDirtyFromNativeEvent: i, resetDirtyState: n } = hh();
    function l() {
      return o.value.$validate();
    }
    function s() {
      return n(), o.value.$reset();
    }
    return Ta("markFormDirty", r), t({ validate: l, resetValidation: s, isDirty: a }), (c, d) => (g(), S("form", {
      novalidate: "",
      onChangeCapture: d[0] || (d[0] = (u) => y(i)(u)),
      onInputCapture: d[1] || (d[1] = (u) => y(i)(u)),
      onSubmit: d[2] || (d[2] = (u) => {
        u.preventDefault(), u.stopPropagation(), u.stopImmediatePropagation();
      })
    }, [
      se(c.$slots, "default")
    ], 32));
  }
};
function mh(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
    })
  ]);
}
function ys(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    })
  ]);
}
function xs(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
const vh = ["id"], gh = { class: "header" }, bh = {
  key: 1,
  class: "separator"
}, wh = {
  key: 0,
  class: "subtitle status-text",
  part: "step-subtitle"
}, yh = {
  key: 2,
  class: "total",
  part: "step-subtitle"
}, xh = {
  key: 0,
  class: "content"
}, kh = {
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
    const o = e, a = t, r = Ft("measurements-form"), i = /* @__PURE__ */ H({}), n = /* @__PURE__ */ Xe({
      width: null,
      height: null
    }), l = /* @__PURE__ */ H(1), s = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(!1), d = j(() => {
      const T = o.options.find((q) => q.code === "width"), K = o.options.find((q) => q.code === "height"), G = T && T.reversible && K && K.reversible, ee = T?.min, I = K?.min;
      return G ? Math.min(ee, I) : { width: ee, height: I };
    }), u = j(() => {
      const T = o.options.find((q) => q.code === "width"), K = o.options.find((q) => q.code === "height"), G = T && T.reversible && K && K.reversible, ee = T?.max, I = K?.max;
      return G ? Math.max(ee, I) : { width: ee, height: I };
    }), f = {
      width: {
        minValue: Ue.withMessage(
          V("step.min_value", {
            minValue: typeof d.value == "number" ? d.value : d.value.width
          }),
          La(typeof d.value == "number" ? d.value : d.value.width)
        ),
        required: Ue.withMessage(V("step.required"), aa),
        maxValue: Ue.withMessage(
          V("step.max_value", {
            maxValue: typeof u.value == "number" ? u.value : u.value.width
          }),
          Da(typeof u.value == "number" ? u.value : u.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          V("step.min_value", {
            minValue: typeof d.value == "number" ? d.value : d.value.height
          }),
          La(typeof d.value == "number" ? d.value : d.value.height)
        ),
        required: Ue.withMessage(V("step.required"), aa),
        maxValue: Ue.withMessage(
          V("step.max_value", {
            maxValue: typeof u.value == "number" ? u.value : u.value.height
          }),
          Da(typeof u.value == "number" ? u.value : u.value.height)
        )
      }
    }, p = ao(f, n), h = /* @__PURE__ */ H(null), v = j(() => o.buttonStartText || V("step.new_configuration")), k = j(() => {
      if (o.code === "measurement-amount") {
        const T = o.options.some((ee) => ee.code === "width"), K = o.options.some((ee) => ee.code === "height"), G = o.options.some((ee) => ee.code === "amount");
        if (T && (!n.width || p.value.$errors.some((ee) => ee.$property === "width")) || K && (!n.height || p.value.$errors.some((ee) => ee.$property === "height")) || G && !l.value)
          return !0;
      }
      return o.code === "amount" && !l.value;
    });
    function _(T, K) {
      if (T && K && (!p.$errors || p.$errors.length === 0)) {
        const G = T * K / 1e4 * l.value;
        s.value = Number(G.toFixed(2));
      }
    }
    async function x() {
      const T = await r.value.validate(), K = o.options.some((I) => I.code === "width"), G = o.options.some((I) => I.code === "height"), ee = o.options.some((I) => I.code === "amount");
      i.value = [], K && i.value.push({
        code: "width",
        value: n.width
      }), G && i.value.push({
        code: "height",
        value: n.height
      }), ee && i.value.push({
        code: "amount",
        value: l.value
      }), T && a("update:modelValue", i.value);
    }
    function $() {
      h.value?.getElementsByClassName("input")?.[0]?.focus();
    }
    function b(T) {
      setTimeout(() => {
        a("update:focus", T);
      }, 200);
    }
    function C(T) {
      n.width && n.height && T && o.canOrder && (c.value = !0);
    }
    return tt(() => {
      o.disableFirstStepAutofocus || $(), o.modelValue?.length && (n.width = o.modelValue.find((T) => T.code === "width")?.value, n.height = o.modelValue.find((T) => T.code === "height")?.value, l.value = o.modelValue.find((T) => T.code === "amount")?.value || 1);
    }), fe(
      () => o.modelValue,
      (T) => {
        T?.length && (n.width = T.find((K) => K.code === "width")?.value, n.height = T.find((K) => K.code === "height")?.value, l.value = T.find((K) => K.code === "amount")?.value || 1, p.value.$touch());
      },
      { immediate: !0 }
    ), (T, K) => (g(), S("div", {
      id: "accordion-header-" + e.ariaTitle,
      class: pe(["configurator-step simple", { disabled: e.disabled }]),
      part: "step"
    }, [
      U("div", gh, [
        F(ms, { status: e.status }, null, 8, ["status"]),
        U("div", {
          ref_key: "inner",
          ref: h,
          class: "inner"
        }, [
          F(Pt, {
            class: "title",
            part: "step-title",
            level: "h3"
          }, {
            default: O(() => [
              ae(D(e.title) + " ", 1),
              e.hasOverwrites && e.editor ? (g(), oe(ra, {
                key: 0,
                text: y(V)("option.step_has_overwrites")
              }, {
                default: O(() => [
                  F(vt, { icon: y(xs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : R("", !0),
              e.isHidden && e.editor ? (g(), oe(ra, {
                key: 1,
                text: y(V)("option.step_is_hidden")
              }, {
                default: O(() => [
                  F(vt, { icon: y(ys) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : R("", !0)
            ]),
            _: 1
          }),
          F(ws, {
            ref: "measurements-form",
            class: "measurements-form"
          }, {
            default: O(() => [
              U("div", {
                class: pe(["measurement-inputs", { "has-errors": y(p).$errors && y(p).$errors.length }])
              }, [
                (g(!0), S(we, null, Xt(e.options, (G, ee) => (g(), S(we, { key: ee }, [
                  G.code === "width" || G.code === "height" ? (g(), oe(zt, {
                    key: 0,
                    id: `measurement-input-${G.code}`,
                    modelValue: n[G.code],
                    "onUpdate:modelValue": [
                      (I) => n[G.code] = I,
                      K[0] || (K[0] = (I) => _(n.width, n.height))
                    ],
                    required: "",
                    type: "number",
                    "aria-label": G.code,
                    class: "measurement-input",
                    inline: G.unit,
                    min: G.min,
                    max: G.max,
                    placeholder: y(V)(`step.${G.code}`),
                    error: y(p)[G.code].$errors ? y(p)[G.code].$errors[0]?.$message : "",
                    onBlur: (I) => {
                      y(p)[G.code].$touch(I), b(!1);
                    },
                    onKeyup: it(qe((I) => {
                      y(p)[G.code].$touch(I), x();
                    }, ["stop"]), ["enter"]),
                    onFocus: K[1] || (K[1] = (I) => b(!0))
                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "placeholder", "error", "onBlur", "onKeyup"])) : R("", !0),
                  G.code === "width" ? (g(), S("span", bh, " x ")) : G.code === "amount" ? (g(), oe(pi, {
                    key: 2,
                    modelValue: l.value,
                    "onUpdate:modelValue": [
                      K[2] || (K[2] = (I) => l.value = I),
                      K[6] || (K[6] = (I) => {
                        _(n.width, n.height), C(I);
                      })
                    ],
                    min: G.min,
                    max: G.max || void 0,
                    onBlur: K[3] || (K[3] = (I) => b(!1)),
                    onFocus: K[4] || (K[4] = (I) => b(!0)),
                    onKeyup: K[5] || (K[5] = it(qe((I) => x(), ["stop"]), ["enter"]))
                  }, null, 8, ["modelValue", "min", "max"])) : R("", !0)
                ], 64))), 128))
              ], 2),
              e.code == "measurement-amount" || e.code === "amount" ? (g(), oe(Ve, {
                key: 0,
                class: "submit-button",
                "data-testid": "submit-button",
                disabled: k.value,
                onClick: K[7] || (K[7] = (G) => {
                  x(), a("configuration:started"), c.value = !1;
                })
              }, {
                default: O(() => [
                  ae(D(v.value), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : R("", !0),
              c.value ? (g(), oe(Ve, {
                key: 1,
                variant: "text",
                icon: y(mh),
                onClick: K[8] || (K[8] = (G) => {
                  a("recalculate", l.value), c.value = !1;
                })
              }, {
                default: O(() => [
                  ae(D(y(V)("step.recalculate")), 1)
                ]),
                _: 1
              }, 8, ["icon"])) : R("", !0)
            ]),
            _: 1
          }, 512)
        ], 512),
        e.status === "attention" && e.attentionText ? (g(), S("span", wh, D(e.attentionText), 1)) : R("", !0),
        e.editor ? (g(), oe(Ve, {
          key: 1,
          variant: "url",
          size: "small",
          class: "edit-button",
          onClick: K[9] || (K[9] = qe((G) => a("edit:step"), ["stop"]))
        }, {
          default: O(() => [
            ae(D(y(V)("option.edit")), 1)
          ]),
          _: 1
        })) : R("", !0),
        s.value ? (g(), S("span", yh, D(e.totalPrefix || y(V)("step.total")) + ": " + D(s.value) + " m² ", 1)) : R("", !0)
      ]),
      e.alert ? (g(), S("div", xh, [
        F(lr, na(ar(e.alert)), null, 16)
      ])) : R("", !0)
    ], 10, vh));
  }
}, _h = /* @__PURE__ */ me(kh, [["__scopeId", "data-v-cf6c5c3d"]]);
function $h(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
    })
  ]);
}
const Sh = {
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
    return (t, o) => (g(), S("span", {
      class: pe(["label", [{ small: e.small }, { alt: e.alt }, e.color]])
    }, [
      se(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, fi = /* @__PURE__ */ me(Sh, [["__scopeId", "data-v-08911c65"]]), Ch = {
  key: 0,
  class: "top"
}, zh = ["srcset"], Th = ["srcset"], Eh = ["src", "alt", "height", "width"], Oh = {
  key: 1,
  class: "bottom"
}, Ah = {
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
    const o = t, a = e, r = /* @__PURE__ */ H(!1);
    function i(l) {
      r.value = !0, o("error", l);
    }
    const n = j(() => a.image);
    return fe(n, () => {
      r.value = !1;
    }), (l, s) => (g(), S("figure", {
      class: pe(["image-wrapper", { "has-caption": e.caption }]),
      style: bt({ width: `${e.width}px`, height: `${e.height}px` })
    }, [
      e.caption && e.captionPosition === "top" ? (g(), S("figcaption", Ch, D(e.caption), 1)) : R("", !0),
      U("picture", {
        class: "image-inner",
        style: bt({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.mobile ? (g(), S("source", {
          key: 0,
          media: "(max-width: 640px)",
          srcset: e.mobile
        }, null, 8, zh)) : R("", !0),
        e.tablet ? (g(), S("source", {
          key: 1,
          media: "(max-width: 1024px)",
          srcset: e.tablet
        }, null, 8, Th)) : R("", !0),
        e.image && !r.value ? (g(), S("img", {
          key: 2,
          loading: "lazy",
          class: pe(["image", e.rounded ? `rounded-${e.rounded}` : ""]),
          src: e.image,
          alt: e.alt,
          height: e.height,
          width: e.width,
          onError: i
        }, null, 42, Eh)) : (g(), S("div", {
          key: 3,
          class: pe(["skeleton", e.rounded ? `rounded-${e.rounded}` : ""])
        }, null, 2))
      ], 4),
      e.caption && e.captionPosition === "bottom" ? (g(), S("figcaption", Oh, D(e.caption), 1)) : R("", !0)
    ], 6));
  }
}, Vh = /* @__PURE__ */ me(Ah, [["__scopeId", "data-v-a966f45d"]]), Ph = {
  key: 0,
  class: "amount"
}, jh = {
  key: 1,
  class: "labels"
}, Mh = {
  __name: "POptionCardHeader",
  props: /* @__PURE__ */ ut({
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
    const t = Ye(e, "amount");
    return (o, a) => (g(), S(we, null, [
      e.selected && e.editAmount ? (g(), S("div", Ph, [
        U("span", null, D(e.amountLabel), 1),
        F(pi, {
          modelValue: t.value,
          "onUpdate:modelValue": a[0] || (a[0] = (r) => t.value = r),
          onClick: a[1] || (a[1] = qe(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : R("", !0),
      e.labels.length && !e.editAmount ? (g(), S("div", jh, [
        (g(!0), S(we, null, Xt(e.labels, (r, i) => (g(), S(we, { key: i }, [
          r.text ? (g(), oe(fi, {
            key: 0,
            color: r.color,
            small: ""
          }, {
            default: O(() => [
              ae(D(r.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : R("", !0)
        ], 64))), 128))
      ])) : R("", !0),
      e.image && !e.editAmount ? (g(), oe(Vh, {
        key: 2,
        image: e.image,
        alt: `${e.title} ${y(V)("option.product_photo")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : R("", !0)
    ], 64));
  }
}, Ih = /* @__PURE__ */ me(Mh, [["__scopeId", "data-v-caa4e54a"]]);
function Nh(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Bh(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
const Lh = {
  key: 0,
  class: "not-available"
}, Dh = {
  key: 1,
  class: "custom-value"
}, Fh = {
  key: 2,
  class: "information"
}, Rh = {
  key: 0,
  class: "delivery"
}, Uh = { class: "delivery-time" }, qh = {
  key: 1,
  class: "price"
}, Hh = {
  key: 0,
  class: "price-per"
}, Kh = {
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
    const o = e, a = t, r = /* @__PURE__ */ H(o.customInput.value), i = j({
      get: () => o.customInput.value,
      set: (l) => {
        r.value = Number(l);
      }
    });
    function n() {
      r.value && r.value > 0 && a("update:customValue", r.value);
    }
    return (l, s) => e.disabled && e.notAvailableMessage ? (g(), S("div", Lh, [
      F(nr, { icon: y(Nh) }, null, 8, ["icon"]),
      U("span", null, D(e.notAvailableMessage), 1)
    ])) : e.customInput.value && e.customInput.unit && !e.disabled && !e.notAvailableMessage ? (g(), S("div", Dh, [
      F(zt, {
        id: "custom-value",
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (c) => i.value = c),
        inline: e.customInput.unit,
        required: "",
        "data-testid": "custom-value-input",
        "aria-label": y(V)("option.custom_value")
      }, null, 8, ["modelValue", "inline", "aria-label"]),
      F(Ve, {
        variant: "primary",
        "data-testid": "custom-value-submit",
        onClick: qe(n, ["stop"])
      }, {
        default: O(() => [
          ae(D(e.customInput.buttonText || y(V)("option.continue")), 1)
        ]),
        _: 1
      })
    ])) : (g(), S("div", Fh, [
      e.deliveryTime ? (g(), S("span", Rh, [
        F(oo, { icon: y(Bh) }, null, 8, ["icon"]),
        U("span", Uh, D(e.deliveryTimeText), 1)
      ])) : R("", !0),
      e.price ? (g(), S("span", qh, [
        ae(" € " + D(e.price) + " ", 1),
        e.pricePer ? (g(), S("span", Hh, " / " + D(e.pricePer), 1)) : R("", !0)
      ])) : R("", !0)
    ]));
  }
}, Wh = /* @__PURE__ */ me(Kh, [["__scopeId", "data-v-95b1dd81"]]), Zh = ["tabindex", "aria-current", "part", "aria-disabled"], Gh = {
  key: 0,
  class: "no-option"
}, Jh = {
  key: 1,
  class: "inner"
}, Yh = { class: "header" }, Xh = { class: "content" }, Qh = {
  class: "description",
  part: "option-description"
}, em = { class: "footer" }, tm = {
  __name: "POptionCard",
  props: /* @__PURE__ */ ut({
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
    const t = e, o = /* @__PURE__ */ H(!1), a = j(() => t.deliveryTimeText !== "" ? `${t.deliveryTime} ${t.deliveryTimeText}` : op("option.days", t.deliveryTime)), r = j(() => {
      switch (t.pricePer) {
        case "unit":
          return V("option.per_unit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), i = Ye(e, "modelValue"), n = Ye(e, "amount"), l = j(() => t.amountLabel ? t.amountLabel : V("option.amount")), s = j(() => typeof n.value == "number" && n.value > 0);
    function c(f) {
      t.disabled || (o.value = s.value ? !o.value : !1, f ? n.value = f : i.value = !i.value);
    }
    function d(f, p) {
      let h = null;
      p === "left" && f ? h = f.previousElementSibling : p === "right" && f && (h = f.nextElementSibling);
      const v = h?.querySelector(".header");
      if (h && !v.disabled) {
        v.click();
        let k = null;
        const _ = h.querySelector("input");
        setTimeout(() => {
          k = h.querySelector(".option-card"), k && !k.classList.contains("disabled") ? k.focus() : _ && _.focus();
        }, 50);
      } else h && d(h, p);
    }
    function u(f, p) {
      const h = f.currentTarget.parentElement;
      if (p === "left") {
        const v = h.previousElementSibling?.querySelector(".option-card"), k = h.previousElementSibling?.querySelector(".overlay");
        v ? v.classList.contains("disabled") ? u({ currentTarget: v }, "left") : k ? k.click() : v.focus() : d(h.closest(".accordion-item"), "left");
      } else if (p === "right") {
        const v = h.nextElementSibling?.querySelector(".option-card"), k = h.nextElementSibling?.querySelector(".overlay");
        v ? v.classList.contains("disabled") ? u({ currentTarget: v }, "right") : k ? k.click() : v.focus() : d(h.closest(".accordion-item"), "right");
      }
    }
    return tt(() => {
      n.value > 0 && i.value && (o.value = !0);
    }), fe(n, (f, p) => {
      !p && f && (o.value = !0);
    }), fe(i, () => {
      n.value && (o.value = !!i.value);
    }), (f, p) => (g(), S("article", {
      class: pe(["option-card", { selected: i.value, disabled: e.disabled }]),
      tabindex: e.disabled ? -1 : 0,
      "aria-current": i.value,
      "data-testid": "option",
      part: `option ${i.value ? "option-selected" : ""}`,
      "aria-disabled": e.disabled,
      onClick: p[2] || (p[2] = (h) => e.customInput.value ? null : c()),
      onKeyup: [
        p[3] || (p[3] = it((h) => e.customInput.value ? null : c(), ["enter"])),
        p[4] || (p[4] = it((h) => u(h, "left"), ["arrow-left"])),
        p[5] || (p[5] = it((h) => u(h, "right"), ["arrow-right"])),
        p[6] || (p[6] = it((h) => u(h, "up"), ["arrow-up"]))
      ]
    }, [
      e.noOption ? (g(), S("div", Gh, [
        F(oo, { icon: y($h) }, null, 8, ["icon"]),
        F(Pt, { level: "h3" }, {
          default: O(() => [
            ae(D(e.noOptionText), 1)
          ]),
          _: 1
        })
      ])) : (g(), S("div", Jh, [
        U("header", Yh, [
          se(f.$slots, "header", {}, () => [
            F(Ih, {
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
        U("div", Xh, [
          se(f.$slots, "content", {}, () => [
            e.title ? (g(), oe(Pt, {
              key: 0,
              level: "h3",
              class: "title",
              part: "option-title"
            }, {
              default: O(() => [
                ae(D(e.title), 1)
              ]),
              _: 1
            })) : R("", !0),
            U("p", Qh, D(e.description), 1)
          ], !0)
        ]),
        U("footer", em, [
          se(f.$slots, "footer", {}, () => [
            F(Wh, {
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
    ], 42, Zh));
  }
}, om = /* @__PURE__ */ me(tm, [["__scopeId", "data-v-bd75f725"]]), am = {
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
    return tt(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    }), wo(() => {
      t.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
    }), (o, a) => (g(), S("div", {
      class: pe(["overlay", { fixed: e.fixed }]),
      style: bt({ background: `rgba(${e.color}, ${e.opacity / 100})` })
    }, [
      se(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, rm = /* @__PURE__ */ me(am, [["__scopeId", "data-v-66d42f70"]]), im = { class: "option-step-container" }, nm = {
  key: 0,
  class: "subtitle",
  part: "step-subtitle"
}, lm = {
  key: 1,
  class: "subtitle",
  part: "step-subtitle"
}, sm = {
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
    const o = e, a = t, r = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H([]), n = /* @__PURE__ */ H([]), l = j({
      get: () => o.open,
      set: (_) => {
        a("update:accordionState", _);
      }
    }), s = j(() => n.value.map((_, x) => {
      if (!_)
        return null;
      if (o.options[x] && o.options[x].noOption)
        return o.options[x].noOptionText;
      let $ = "";
      const b = i.value.find((C) => C.code === o.options[x].code);
      return b?.value > 0 && ($ += `${b.value}x `), $ += o.options[x].title, $;
    }).filter((_) => !!_).join(", ")), c = /* @__PURE__ */ H(null);
    function d(_) {
      if (o.multiple || (i.value = []), i.value.length === 0 || i.value.some(($) => $.code === o.options[_].code) === !1) {
        let $;
        o.options[_].amount ? $ = { code: o.options[_].code, value: o.options[_].amount } : $ = { code: o.options[_].code }, i.value.push($);
      }
      n.value[_] = !n.value[_];
      const x = i.value.findIndex(($) => $.code === "no-option");
      if (x > -1 && o.options[_].noOption)
        n.value.forEach(($, b) => {
          b !== _ && (n.value[b] = !1);
        }), i.value = i.value.filter(($) => $.code === "no-option");
      else if (!o.options[_].noOption) {
        const $ = o.options.findIndex((b) => b.noOption);
        $ > -1 && (n.value[$] = !1), x > -1 ? i.value.splice(x, 1) : n.value[_] === !1 && i.value.some((b) => b.code === o.options[_].code) && (i.value = i.value.filter((b) => b.code !== o.options[_].code));
      }
    }
    function u(_) {
      d(_), a("update:modelValue", i.value);
    }
    function f() {
      i.value.length === 0 && o.modelValue?.length ? i.value = o.modelValue : o.modelValue && Object.keys(o.modelValue).length && i.value.length === 0 && (i.value = [o.modelValue]), o.options.forEach((_) => {
        !_.noOption && _.code === o.modelValue?.code || Array.isArray(o.modelValue) && o.modelValue.some((x) => x.code === _.code) ? n.value.push(!0) : n.value.push(!1);
      }), o.code === "accessories" && Array.isArray(o.modelValue) && o.modelValue.length > 2 && (r.value = !0);
    }
    function p(_) {
      return o.code === "accessories" && _ > 3 && !r.value;
    }
    function h(_, x) {
      o.multiple || d(_);
      const $ = i.value.filter((C) => C.code !== o.options[_].code), b = { code: o.options[_].code, value: x };
      i.value = [...$, b], a("update:modelValue", i.value);
    }
    function v() {
      setTimeout(() => {
        c.value?.length && c.value[0].$el.focus();
      }, 500);
    }
    function k(_) {
      return _.customInput?.value ? 0 : Array.isArray(o.modelValue) ? o.modelValue?.find((x) => x.code === _.code)?.value : o.modelValue?.value || _.amount || 0;
    }
    return f(), fe(
      () => o.modelValue,
      () => {
        n.value = [], f();
      }
    ), fe(
      () => o.open,
      () => {
        o.open && v();
      },
      { immediate: !0 }
    ), (_, x) => (g(), S("div", im, [
      e.editor ? (g(), oe(Ve, {
        key: 0,
        variant: "url",
        size: "small",
        class: "edit-button",
        onClick: x[0] || (x[0] = qe(($) => a("edit:step"), ["stop"]))
      }, {
        default: O(() => [
          ae(D(y(V)("option.edit")), 1)
        ]),
        _: 1
      })) : R("", !0),
      F(Gl, {
        modelValue: l.value,
        "onUpdate:modelValue": x[3] || (x[3] = ($) => l.value = $),
        class: "configurator-step options",
        "aria-title": e.ariaTitle,
        "scroll-into-view": "",
        part: "step",
        exportparts: "state-indicator-icon"
      }, {
        header: O(() => [
          F(ms, { status: e.status }, null, 8, ["status"]),
          F(Pt, {
            class: "title",
            part: "step-title",
            level: "h3"
          }, {
            default: O(() => [
              ae(D(e.title) + " ", 1),
              e.hasOverwrites && e.editor ? (g(), oe(ra, {
                key: 0,
                text: y(V)("option.step_has_overwrites")
              }, {
                default: O(() => [
                  F(vt, { icon: y(xs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : R("", !0),
              e.isHidden && e.editor ? (g(), oe(ra, {
                key: 1,
                text: y(V)("option.step_is_hidden")
              }, {
                default: O(() => [
                  F(vt, { icon: y(ys) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["text"])) : R("", !0)
            ]),
            _: 1
          }),
          e.status === "attention" ? (g(), S("span", nm, D(e.attentionText || y(V)("option.attention")), 1)) : R("", !0),
          s.value ? (g(), S("span", lm, D(s.value), 1)) : R("", !0)
        ]),
        default: O(() => [
          U("div", null, [
            U("div", {
              class: pe(["option-container", {
                "show-all": e.code === "accessories" && r.value || e.code !== "accessories"
              }]),
              tabindex: "0"
            }, [
              (g(!0), S(we, null, Xt(e.options, ($, b) => (g(), S("div", {
                key: b,
                class: pe(["option", { hide: p(b) }])
              }, [
                b === 3 && !r.value && e.code === "accessories" ? (g(), oe(rm, {
                  key: 0,
                  tabindex: "0",
                  onClick: x[1] || (x[1] = qe((C) => r.value = !0, ["stop"])),
                  onKeyup: x[2] || (x[2] = it(qe((C) => r.value = !0, ["stop"]), ["enter"]))
                }, {
                  default: O(() => [
                    ae(" +" + D(e.options.length - 3), 1)
                  ]),
                  _: 1
                })) : R("", !0),
                F(om, De({
                  ref_for: !0,
                  ref_key: "optionCards",
                  ref: c
                }, { ref_for: !0 }, $, {
                  amount: k($),
                  disabled: $.available === !1 || e.disabled,
                  "not-available-message": $.available === !1 ? e.unvailableText || y(V)("option.unavailable") : "",
                  "model-value": n.value[b],
                  exportparts: "option option-title option-description",
                  "onUpdate:amount": (C) => h(b, C),
                  "onUpdate:modelValue": (C) => u(b)
                }), null, 16, ["amount", "disabled", "not-available-message", "model-value", "onUpdate:amount", "onUpdate:modelValue"])
              ], 2))), 128))
            ], 2),
            e.alert ? (g(), oe(lr, na(De({ key: 0 }, e.alert)), null, 16)) : R("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "aria-title"])
    ]));
  }
}, dm = /* @__PURE__ */ me(sm, [["__scopeId", "data-v-16221ffd"]]), cm = {
  class: "delivery-options",
  part: "delivery-step"
}, um = { class: "header" }, pm = {
  class: "hint",
  part: "delivery-step-subtitle"
}, fm = { class: "content" }, hm = {
  class: "day",
  part: "delivery-option-day"
}, mm = {
  class: "date",
  part: "delivery-option-date"
}, vm = {
  key: 0,
  class: "cost",
  part: "delivery-option-cost"
}, gm = {
  key: 1,
  class: "no-cost",
  part: "delivery-option-no-cost"
}, bm = {
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
    const t = e, o = /* @__PURE__ */ H(!1), a = j(() => t.title ? t.title : V("delivery.delivery_options")), r = j(() => t.noCost ? t.noCost : V("delivery.no_extra_cost")), i = j(
      () => t.makeYourChoice ? t.makeYourChoice : V("delivery.make_your_choice_next_step")
    ), n = j(() => t.buttonTextShow ? t.buttonTextShow : V("delivery.see_more")), l = j(() => t.buttonTextHide ? t.buttonTextHide : V("delivery.see_less"));
    function s() {
      window.innerWidth >= 768 ? o.value = !0 : window.innerWidth < 768 && (o.value = !1);
    }
    return ct(() => {
      window.addEventListener("resize", s);
    }), bo(() => {
      window.removeEventListener("resize", s);
    }), s(), (c, d) => (g(), S("div", cm, [
      U("div", um, [
        F(Pt, {
          class: "title",
          part: "delivery-step-title",
          level: "h3"
        }, {
          default: O(() => [
            ae(D(a.value), 1)
          ]),
          _: 1
        }),
        U("span", pm, [
          d[1] || (d[1] = U("span", null, "*", -1)),
          ae(" " + D(i.value), 1)
        ])
      ]),
      U("div", fm, [
        (g(!0), S(we, null, Xt(e.items, (u, f) => (g(), S("div", {
          key: f,
          class: pe(["option", {
            hide: f > 0 && !o.value && !u.cheapest,
            last: f === 1 && !o.value || f === e.items.length - 1 || f > 1 && u.cheapest && !o.value
          }]),
          part: "delivery-option"
        }, [
          U("span", hm, [
            ae(D(u.day) + " ", 1),
            u.label ? (g(), oe(fi, {
              key: 0,
              color: u.label.color,
              small: ""
            }, {
              default: O(() => [
                ae(D(u.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : R("", !0)
          ]),
          U("span", mm, D(u.date), 1),
          u.cost ? (g(), S("span", vm, " + € " + D(u.cost), 1)) : (g(), S("span", gm, D(r.value), 1))
        ], 2))), 128)),
        F(Ve, {
          variant: "tertiary",
          onClick: d[0] || (d[0] = (u) => o.value = !o.value)
        }, {
          default: O(() => [
            ae(D(o.value ? l.value : n.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}, wm = /* @__PURE__ */ me(bm, [["__scopeId", "data-v-6eb4b6f9"]]), ym = { class: "wrapper" }, xm = { class: "header" }, km = { class: "content" }, _m = {
  __name: "PDrawer",
  props: /* @__PURE__ */ ut({
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
    const o = e, a = Ye(e, "modelValue"), r = Ft("drawer"), i = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(50), l = /* @__PURE__ */ H(!1);
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
    function v() {
      return Array.from(document.body.querySelectorAll("dialog.drawer[open]")).find(
        (b) => b !== r.value
      );
    }
    function k() {
      const b = r.value;
      b.open || (o.overlay ? b.showModal() : b.show()), u();
    }
    function _() {
      d && clearTimeout(d);
      const b = v(), C = () => {
        k(), s = requestAnimationFrame(() => {
          i.value = !0, l.value = !1, n.value = 50, u();
        });
      };
      if (b) {
        n.value = 0, u(), b.dispatchEvent(new CustomEvent("drawer:force-close")), c = window.setTimeout(C, 300);
        return;
      }
      C();
    }
    fe(
      a,
      (b) => {
        if (b) {
          _();
          return;
        }
        f(!1, !0);
      },
      { flush: "post" }
    );
    function x(b) {
      if (o.persistent) {
        b.preventDefault();
        return;
      }
      f(!1, !0);
    }
    function $() {
      d && (clearTimeout(d), d = null), a.value && (a.value = !1), l.value || (i.value = !1), l.value = !1;
    }
    return tt(() => {
      a.value && _();
    }), fe(
      () => r.value,
      (b, C, T) => {
        b && (b.addEventListener("cancel", x), b.addEventListener("click", p), b.addEventListener("drawer:force-close", h), T(() => {
          b.removeEventListener("cancel", x), b.removeEventListener("click", p), b.removeEventListener("drawer:force-close", h);
        }));
      },
      { immediate: !0 }
    ), bo(() => {
      r.value?.open && r.value.close(), s && cancelAnimationFrame(s), c && clearTimeout(c), d && clearTimeout(d);
    }), fe(
      () => o.overlay,
      () => {
        u();
      },
      { immediate: !0 }
    ), fe(
      n,
      () => {
        u();
      },
      { immediate: !0 }
    ), t({
      closeDrawer: f
    }), (b, C) => a.value ? (g(), S("dialog", {
      key: 0,
      ref: "drawer",
      "data-testid": "drawer",
      class: pe(["drawer", [
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
      U("div", ym, [
        U("div", xm, [
          F(Pt, {
            level: "h2",
            class: "title"
          }, {
            default: O(() => [
              ae(D(e.title), 1)
            ]),
            _: 1
          }),
          F(Ve, {
            variant: "text",
            icon: y($a),
            class: "close",
            "data-testid": "close-button",
            "aria-label": y(V)("drawer.close"),
            onClick: C[0] || (C[0] = (T) => f())
          }, null, 8, ["icon", "aria-label"])
        ]),
        U("div", km, [
          se(b.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 34)) : R("", !0);
  }
}, $m = /* @__PURE__ */ me(_m, [["__scopeId", "data-v-c56d11e1"]]), Sm = ["disabled"], Cm = {
  __name: "PSwitch",
  props: {
    modelValue: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, r = j({
      get: () => o.modelValue,
      set: (n) => {
        a("update:modelValue", n);
      }
    });
    function i() {
      r.value = !r.value;
    }
    return (n, l) => (g(), S("button", {
      class: pe(["switch", { enabled: r.value }]),
      "data-testid": "switch",
      disabled: e.disabled,
      "aria-label": "Use setting",
      onClick: l[0] || (l[0] = (s) => e.disabled ? null : i()),
      onKeydown: l[1] || (l[1] = it(qe(() => {
      }, ["prevent"]), ["enter"]))
    }, [
      U("span", {
        class: pe(["dot", { enabled: r.value }]),
        "aria-hidden": "true"
      }, null, 2)
    ], 42, Sm));
  }
}, yn = /* @__PURE__ */ me(Cm, [["__scopeId", "data-v-42e36626"]]), zm = {}, Tm = { class: "form-row" }, Em = {
  key: 0,
  class: "title"
}, Om = {
  key: 1,
  class: "subtitle"
}, Am = { class: "fields" };
function Vm(e, t) {
  return g(), S("section", Tm, [
    U("div", {
      class: pe(["label", { "label--empty": !e.$slots.title && !e.$slots.subtitle }])
    }, [
      e.$slots.title ? (g(), S("h2", Em, [
        se(e.$slots, "title", {}, void 0, !0)
      ])) : R("", !0),
      e.$slots.subtitle ? (g(), S("p", Om, [
        se(e.$slots, "subtitle", {}, void 0, !0)
      ])) : R("", !0)
    ], 2),
    U("div", Am, [
      se(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const at = /* @__PURE__ */ me(zm, [["render", Vm], ["__scopeId", "data-v-7a247590"]]), Pm = { class: "form-grid" }, jm = {
  __name: "PFormGrid",
  setup(e) {
    return (t, o) => (g(), S("div", Pm, [
      se(t.$slots, "default", {}, void 0, !0),
      t.$slots.actions ? (g(), oe(at, {
        key: 0,
        class: "actions"
      }, {
        default: O(() => [
          se(t.$slots, "actions", {}, void 0, !0)
        ]),
        _: 3
      })) : R("", !0)
    ]));
  }
}, xn = /* @__PURE__ */ me(jm, [["__scopeId", "data-v-940e9744"]]);
function Mm(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Im(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
function Nm(e, t) {
  return g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    U("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" })
  ]);
}
const Bm = {
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
    const t = /* @__PURE__ */ H(null);
    function o(a) {
      if (!["ArrowUp", "ArrowDown"].includes(a.key))
        return;
      const r = Oo(t.value), i = r.indexOf(a.target);
      a.key === "ArrowDown" ? r[i + 1]?.focus() : a.key === "ArrowUp" && r[i - 1]?.focus();
    }
    return (a, r) => (g(), S("div", {
      ref_key: "list",
      ref: t,
      class: pe(["list", { grid: e.grid }]),
      style: bt(`column-gap: ${e.gapRow}; row-gap: ${e.gapColumn};`),
      "data-testid": "list",
      onKeydown: o
    }, [
      (g(!0), S(we, null, Xt(e.items, (i, n) => se(a.$slots, "default", {
        key: n,
        index: n,
        item: i
      }, void 0, !0)), 128)),
      se(a.$slots, "append-list", {}, void 0, !0)
    ], 38));
  }
}, Lm = /* @__PURE__ */ me(Bm, [["__scopeId", "data-v-5e496d8d"]]), Dm = ["data-testid", "tabindex", "aria-disabled"], Fm = {
  key: 0,
  class: "prepend"
}, Rm = { class: "content" }, Um = {
  key: 0,
  class: "title"
}, qm = {
  key: 1,
  class: "subtitle"
}, Hm = { class: "text" }, Km = {
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
    return (t, o) => (g(), S("div", {
      class: pe(["list-item", { clickable: e.clickable, active: e.active }]),
      "data-testid": e.clickable ? "clickable" : "list-item",
      tabindex: e.disabled ? -1 : 0,
      "aria-disabled": e.disabled
    }, [
      t.$slots.prepend ? (g(), S("div", Fm, [
        se(t.$slots, "prepend", {}, void 0, !0)
      ])) : R("", !0),
      U("div", Rm, [
        se(t.$slots, "content", {}, () => [
          e.title ? (g(), S("span", Um, D(e.title), 1)) : R("", !0),
          e.subtitle ? (g(), S("span", qm, D(e.subtitle), 1)) : R("", !0),
          U("span", Hm, D(e.text), 1)
        ], !0)
      ])
    ], 10, Dm));
  }
}, Sr = /* @__PURE__ */ me(Km, [["__scopeId", "data-v-9c2bcba7"]]), Wm = ["id", "value", "disabled", "required", "tabindex", "indeterminate", "true-value", "false-value"], Zm = {
  key: 0,
  class: "append"
}, Gm = ["id"], Jm = {
  __name: "PCheckbox",
  props: /* @__PURE__ */ ut({
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
    const t = e, o = Ye(e, "modelValue"), a = t.required ? { checked: { required: Ue.withMessage(V("checkbox.required"), Du(!0)) } } : null, r = ao(a, { checked: o }), i = j(() => `${t.id}-error`);
    return (n, l) => (g(), S("div", {
      class: pe(["checkbox-container", { error: y(r).checked?.$errors[0]?.$message, large: e.large }])
    }, [
      U("label", {
        class: pe(["label", { disabled: e.disabled }])
      }, [
        vo(U("input", De(n.$attrs, {
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
        }), null, 16, Wm), [
          [Hl, o.value]
        ]),
        se(n.$slots, "label", {}, () => [
          ae(D(e.label), 1)
        ], !0),
        n.$slots.append ? (g(), S("span", Zm, [
          se(n.$slots, "append", {}, void 0, !0)
        ])) : R("", !0)
      ], 2),
      y(r).checked?.$errors[0]?.$message ? (g(), S("span", {
        key: 0,
        id: i.value,
        role: "alert",
        "aria-live": "assertive",
        class: "error-message"
      }, D(y(r).checked.$errors[0].$message), 9, Gm)) : R("", !0)
    ], 2));
  }
}, Cr = /* @__PURE__ */ me(Jm, [["__scopeId", "data-v-f61c3d17"]]);
function Ym(e, t) {
  return t.split(".").reduce((o, a) => o[a] ? o[a] : o, e);
}
const Xm = {
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
    return Ac((t) => ({
      v7bf99daa: e.thickness
    })), (t, o) => (g(), S("hr", {
      class: pe(["divider", { vertical: e.vertical, flex: e.flex }])
    }, null, 2));
  }
}, Qm = /* @__PURE__ */ me(Xm, [["__scopeId", "data-v-8cd28476"]]), ks = {
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
}, e0 = ["data-testid", "tabindex"], t0 = ["for"], o0 = ["aria-invalid", "aria-describedby"], a0 = { class: "label-inner" }, r0 = ["onClick"], i0 = {
  key: 2,
  class: "selected-item"
}, n0 = ["id", "placeholder", "disabled", "readonly", "value", "aria-invalid", "aria-describedby"], l0 = { class: "action-buttons" }, s0 = ["aria-label", "disabled"], d0 = ["aria-label", "disabled"], c0 = ["id"], u0 = {
  key: 0,
  class: "content-divider"
}, p0 = {
  key: 1,
  class: "no-results"
}, f0 = {
  __name: "_BaseSelect",
  props: {
    ...ks,
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
    const a = o, r = e, i = At("showError", !0), n = At("markFormDirty", null), l = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1), c = /* @__PURE__ */ H(!1), d = /* @__PURE__ */ H(null), u = /* @__PURE__ */ H(null), f = /* @__PURE__ */ H(null), p = /* @__PURE__ */ H(null), h = /* @__PURE__ */ H(null), v = /* @__PURE__ */ H(() => {
    }), k = /* @__PURE__ */ H(() => {
    }), _ = /* @__PURE__ */ H(() => {
    });
    function x(X) {
      a("update:modelValue", X), n?.();
    }
    const $ = j({
      get() {
        return r.multiple && !Array.isArray(r.modelValue) ? [] : r.modelValue;
      },
      set(X) {
        if (r.multiple) {
          x(X);
          return;
        }
        x(r.returnObject || !r.itemValue ? X : X?.[r.itemValue]);
      }
    }), b = j(() => r.requiredMessage ? r.requiredMessage : r.label ? V("input.required_with_label", { label: r.label.toLowerCase() }) : V("input.required")), C = j(() => r.required ? { value: { required: Ue.withMessage(() => b.value, aa) } } : { value: {} }), T = ao(C.value, { value: $ }), K = j(() => !r.required || r.required && !T.value?.$errors[0]), G = j(() => !!r.error || T.value?.$errors?.length > 0 || !K.value), ee = j(() => Array.isArray($.value) && $.value.length > 0), I = j(() => `${r.id}-error`);
    function q(X) {
      return r.itemValue ? X[r.itemValue] : X;
    }
    function A(X) {
      return r.multiple ? r.modelValue?.includes(q(X)) || !1 : $.value === q(X);
    }
    function P(X) {
      let ve = null;
      return (typeof X == "string" || typeof X == "number") && !r.itemText ? X : (typeof r.itemText == "string" && r.itemText?.includes(".") && (ve = Ym(X, r.itemText)), !X || typeof r.itemText == "string" && (!r.itemText?.includes(".") && X[r.itemText] === void 0 || r.itemText?.includes(".") && ve == null) ? "" : r.itemText && typeof r.itemText == "string" && !r.itemText.includes(".") ? X[r.itemText] : typeof r.itemText == "function" ? r.itemText(X) : ve);
    }
    function W(X) {
      if (!X)
        return "";
      if (r.grouped) {
        const ve = r.items.find(
          (he) => he[r.groupItems].find((be) => q(be) === X)
        )[r.groupItems].find((he) => q(he) === X);
        return P(ve);
      }
      return !r.returnObject && r.itemValue ? P(r.items.find((ve) => q(ve) === X)) : P(X);
    }
    function E(X) {
      $.value.splice($.value.indexOf(X), 1), x($.value);
    }
    function Y(X) {
      if (!r.multiple) {
        $.value = X;
        return;
      }
      if ($.value.includes(q(X))) {
        $.value = $.value.filter((ve, he) => he !== $.value.indexOf(q(X)));
        return;
      }
      $.value = [...$.value, q(X)];
    }
    function de(X) {
      const ve = r.returnObject || !r.itemValue ? X[r.groupItems] : X[r.groupItems].map((xt) => xt[r.itemValue]);
      let he = !1, be = !0;
      return ve.forEach((xt) => {
        $.value.includes(xt) ? he = !0 : be = !1;
      }), be ? !0 : he ? "indeterminate" : !1;
    }
    function ne(X) {
      const ve = r.returnObject || !r.itemValue ? X[r.groupItems] : X[r.groupItems].map((he) => he[r.itemValue]);
      if (de(X) === !0) {
        ve.forEach((he) => {
          E(he);
        });
        return;
      }
      x(Array.from(/* @__PURE__ */ new Set([...$.value, ...ve])));
    }
    function He(X) {
      l.value = X, a("update:isOpen", X);
    }
    function Se(X) {
      c.value = X, a("update:focus", X), !X && a("update:inputValue", null);
    }
    function Pe() {
      r.behavior === "manual" && k.value(), r.behavior === "focus" && !l.value && requestAnimationFrame(() => {
        p.value.focus();
      });
    }
    function Oe(X, ve) {
      p.value = X, r.behavior === "manual" && (v.value = ve.setActivator, k.value = ve.toggle, _.value = ve.onKeydown);
    }
    async function ca() {
      return f;
    }
    const dr = j(() => r.inputValue !== null ? r.inputValue : r.multiple ? null : W($.value));
    return fe(
      () => [c.value, s.value],
      () => {
        !c.value && !s.value && T.value.$touch();
      }
    ), t({
      getSelectContent: ca,
      getItemText: P,
      setActivator: v,
      toggle: k,
      onKeydown: _,
      input: p
    }), (X, ve) => (g(), oe(hs, {
      ref_key: "floatingContainer",
      ref: h,
      "aria-label": "Options",
      transition: "expand",
      offset: r.offset !== null ? r.offset : 1,
      attach: d.value,
      behavior: e.behavior,
      "close-on-click": !r.multiple,
      "onUpdate:isOpen": He,
      "onUpdate:focus": Se
    }, {
      activator: O((he) => [
        U("div", De(e.behavior === "click" ? { ...X.$attrs, ...X.disabled ? {} : he } : null, {
          "data-testid": r.dataTestid,
          "data-form-dirty-ignore": "",
          class: ["base-select", [r.class, e.behavior, { "is-open": l.value, disabled: r.disabled }]],
          tabindex: e.behavior === "click" && !X.disabled ? 0 : null,
          onFocus: ve[5] || (ve[5] = (be) => s.value = !0),
          onBlur: ve[6] || (ve[6] = (be) => s.value = !1)
        }), [
          X.label ? (g(), S("label", {
            key: 0,
            class: "input-label",
            for: X.id
          }, [
            U("span", null, D(X.label), 1)
          ], 8, t0)) : R("", !0),
          U("div", {
            ref_key: "selectWrapper",
            ref: d,
            class: pe(["wrapper", { focus: c.value || s.value, "has-error": G.value }]),
            "aria-invalid": G.value,
            "aria-describedby": G.value ? I.value : null
          }, [
            X.prependIcon ? (g(), oe(vt, {
              key: 0,
              class: "prepend-icon",
              icon: X.prependIcon
            }, null, 8, ["icon"])) : R("", !0),
            ee.value ? (g(), S("div", {
              key: 1,
              ref_key: "selectedItems",
              ref: u,
              class: "selected-items"
            }, [
              (g(!0), S(we, null, Xt($.value, (be, xt) => (g(), oe(fi, {
                key: xt,
                ref_for: !0,
                ref: "label",
                color: "gray"
              }, {
                default: O(() => [
                  U("span", a0, [
                    ae(D(W(be)) + " ", 1),
                    U("button", {
                      class: "close-button",
                      type: "button",
                      tabindex: "-1",
                      onClick: qe((Ht) => E(be), ["stop", "prevent"])
                    }, [
                      F(nr, { icon: y(Nm) }, null, 8, ["icon"])
                    ], 8, r0)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ], 512)) : !X.multiple && e.behavior === "click" && $.value ? (g(), S("div", i0, D(W($.value)), 1)) : R("", !0),
            e.behavior === "click" ? vo((g(), S("div", {
              key: 3,
              class: "placeholder"
            }, D(r.placeholder), 513)), [
              [di, !$.value || $.value.length === 0]
            ]) : (g(), S("input", De({ key: 4 }, e.behavior === "focus" ? { ...X.$attrs, ...he } : X.$attrs, {
              id: r.id,
              ref: (be) => Oe(be, he),
              placeholder: r.placeholder,
              disabled: r.disabled,
              readonly: r.readonly,
              value: dr.value,
              autocomplete: "off",
              "aria-invalid": G.value,
              "aria-describedby": G.value ? I.value : null,
              onInput: ve[0] || (ve[0] = (be) => X.$emit("update:inputValue", be.target.value)),
              onBlur: ve[1] || (ve[1] = (be) => s.value = !1),
              onFocus: ve[2] || (ve[2] = (be) => s.value = !0)
            }), null, 16, n0)),
            U("div", l0, [
              r.clearable && (!r.multiple && $.value || r.multiple && $.value?.length > 0) ? (g(), S("button", {
                key: 0,
                "aria-label": y(V)("input.clear"),
                class: "clear-button",
                tabindex: "-1",
                type: "button",
                disabled: r.disabled,
                onClick: [
                  ve[3] || (ve[3] = (be) => $.value = r.multiple ? [] : null),
                  ve[4] || (ve[4] = qe(() => {
                  }, ["stop"]))
                ]
              }, [
                F(vt, {
                  icon: y(Im),
                  "aria-hidden": "true"
                }, null, 8, ["icon"])
              ], 8, s0)) : R("", !0),
              se(X.$slots, "inline", {}, () => [
                X.hideChevron ? R("", !0) : (g(), S("button", {
                  key: 0,
                  "aria-label": y(V)("input.toggle"),
                  tabindex: "-1",
                  type: "button",
                  "data-testid": "toggle-chevron",
                  class: "toggle-chevron",
                  disabled: r.disabled,
                  onClick: Pe
                }, [
                  F(vt, {
                    class: pe(["state-indicator", { "is-open": l.value }]),
                    icon: y(Mm)
                  }, null, 8, ["icon", "class"])
                ], 8, d0))
              ], !0)
            ])
          ], 10, o0),
          G.value && y(i) ? (g(), S("div", {
            key: 1,
            id: I.value,
            role: "alert",
            "aria-live": "assertive",
            class: "error"
          }, D(y(T).value?.$errors[0]?.$message ? y(T).value.$errors[0].$message : r.error), 9, c0)) : R("", !0)
        ], 16, e0)
      ]),
      default: O(() => [
        X.showDivider ? (g(), S("hr", u0)) : R("", !0),
        U("div", {
          ref_key: "selectContent",
          ref: f,
          class: pe(["select-content", { "remove-radius": X.showDivider, "show-shadow": !X.showDivider }])
        }, [
          se(X.$slots, "prepend-list", {}, void 0, !0),
          r.items.length > 0 ? (g(), oe(Lm, {
            key: 0,
            "gap-column": "0",
            "gap-row": "0",
            items: r.items,
            onKeydown: ve[7] || (ve[7] = qe(() => {
            }, ["prevent"]))
          }, {
            default: O(({ item: he }) => [
              r.grouped ? (g(), S(we, { key: 0 }, [
                r.items.indexOf(he) !== 0 ? (g(), oe(Qm, { key: 0 })) : R("", !0),
                r.grouped ? (g(), oe(Sr, {
                  key: 1,
                  title: he[r.groupText],
                  clickable: r.multiple,
                  disabled: !r.multiple,
                  onClick: (be) => r.multiple && ne(he),
                  onKeydown: it((be) => r.multiple && ne(he), ["enter"])
                }, vr({ _: 2 }, [
                  r.multiple ? {
                    name: "prepend",
                    fn: O(() => [
                      F(Cr, {
                        id: `group-${r.items.indexOf(he)}-checkbox`,
                        "model-value": typeof de(he) == "boolean" ? de(he) : !1,
                        indeterminate: de(he) === "indeterminate",
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value", "indeterminate"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "clickable", "disabled", "onClick", "onKeydown"])) : R("", !0),
                (g(!0), S(we, null, Xt(he[r.groupItems], (be, xt) => (g(), oe(Sr, {
                  key: xt,
                  clickable: "",
                  active: A(be),
                  text: P(be),
                  onClick: (Ht) => Y(be),
                  onKeydown: it((Ht) => Y(be), ["enter"])
                }, vr({
                  content: O(() => [
                    se(X.$slots, "option", {
                      selected: A(be),
                      option: be
                    }, void 0, !0)
                  ]),
                  _: 2
                }, [
                  r.multiple ? {
                    name: "prepend",
                    fn: O(() => [
                      F(Cr, {
                        id: `item-${he[r.groupItems].indexOf(be)}-checkbox`,
                        "model-value": A(be),
                        tabindex: "-1"
                      }, null, 8, ["id", "model-value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["active", "text", "onClick", "onKeydown"]))), 128))
              ], 64)) : P(he) || X.$slots.option ? (g(), oe(Sr, {
                key: 1,
                clickable: "",
                active: A(he),
                text: P(he),
                onClick: (be) => Y(he),
                onKeydown: it((be) => Y(he), ["enter"])
              }, vr({
                content: O(() => [
                  se(X.$slots, "option", {
                    selected: A(he),
                    option: he
                  }, void 0, !0)
                ]),
                _: 2
              }, [
                r.multiple ? {
                  name: "prepend",
                  fn: O(() => [
                    F(Cr, {
                      id: `item-${r.items.indexOf(he)}-checkbox`,
                      "model-value": A(he),
                      tabindex: "-1"
                    }, null, 8, ["id", "model-value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["active", "text", "onClick", "onKeydown"])) : R("", !0)
            ]),
            _: 3
          }, 8, ["items"])) : r.hideNoItemsLabel ? R("", !0) : (g(), S("div", p0, D(r.noItemsLabel || y(V)("input.no_results")), 1)),
          se(X.$slots, "append-list", {}, void 0, !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["offset", "attach", "behavior", "close-on-click"]));
  }
}, h0 = /* @__PURE__ */ me(f0, [["__scopeId", "data-v-aecfad57"]]), m0 = {
  __name: "PCombobox",
  props: {
    ...ks,
    /** Whether the combobox is loading new items in the dropdown */
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "search", "intersect"],
  setup(e, { expose: t, emit: o }) {
    const a = e, r = o, i = j(() => {
      const { loading: b, ...C } = a;
      return C;
    }), n = j({
      get() {
        return a.multiple && !Array.isArray(a.modelValue) ? [a.modelValue] : a.modelValue;
      },
      set(b) {
        r("update:modelValue", b);
      }
    }), l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(null), d = /* @__PURE__ */ H(null), u = /* @__PURE__ */ H(null), f = /* @__PURE__ */ H(!1), p = /* @__PURE__ */ H(!1);
    function h() {
      s.value = null, n.value = null, l.value?.input?.blur?.();
    }
    const v = j(() => !s.value || a.serverside ? a.items : a.itemText ? a.grouped ? a.items.filter(
      (b) => b[a.groupItems].some(
        (C) => l.value.getItemText(C).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
      )
    ).map((b) => {
      const C = b[a.groupItems].filter(
        (T) => l.value.getItemText(T).toLowerCase().replace(/\s+/g, "").includes(s.value.toLowerCase().replace(/\s+/g, ""))
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
    async function k() {
      const b = (await l.value.getSelectContent()).value;
      b?.scrollTo(0, b.scrollHeight);
    }
    function _(b, C = 4) {
      return b ? b.scrollTop + b.clientHeight >= b.scrollHeight - C : !1;
    }
    async function x(b) {
      if (f.value = b, b) {
        await ct(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame);
        const C = (await l.value.getSelectContent()).value;
        d.value = new IntersectionObserver(
          (T) => {
            T[0].isIntersecting && !p.value && !a.loading && (r("intersect"), _(C) && k());
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
      scrollToBottom: k
    }), (b, C) => (g(), oe(h0, De({
      id: b.id,
      ref_key: "select",
      ref: l,
      "input-value": s.value,
      "onUpdate:inputValue": C[1] || (C[1] = (T) => s.value = T)
    }, i.value, {
      behavior: "focus",
      "hide-no-items-label": e.loading || p.value,
      items: p.value ? [] : v.value,
      "onUpdate:inputValue": C[2] || (C[2] = (T) => $(T)),
      "onUpdate:focus": C[3] || (C[3] = (T) => T && r("search", "")),
      "onUpdate:isOpen": C[4] || (C[4] = (T) => x(T)),
      "onUpdate:modelValue": C[5] || (C[5] = (T) => n.value = T)
    }), {
      inline: O(() => [
        se(b.$slots, "inline", {}, void 0, !0)
      ]),
      option: O(({ option: T, selected: K }) => [
        se(b.$slots, "option", {
          selected: K,
          option: T
        }, void 0, !0)
      ]),
      "append-list": O(() => [
        U("div", {
          ref_key: "intersect",
          ref: c,
          class: "intersect"
        }, [
          e.loading || p.value ? (g(), oe(sr, {
            key: 0,
            class: "search-loader",
            onClick: C[0] || (C[0] = qe(() => {
            }, ["prevent"]))
          })) : R("", !0)
        ], 512)
      ]),
      _: 3
    }, 16, ["id", "input-value", "hide-no-items-label", "items"]));
  }
}, v0 = /* @__PURE__ */ me(m0, [["__scopeId", "data-v-d9041eb6"]]);
class _o {
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
}
const g0 = { class: "actions" }, b0 = {
  __name: "PEditorDrawer",
  props: /* @__PURE__ */ ut({
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
    const t = e, o = Ye(e, "modelValue"), a = Ye(e, "step"), r = Ye(e, "overwrites"), i = /* @__PURE__ */ Ot(new _o()), n = Ft("editor-form");
    function l(P = []) {
      return P.map((W) => ({
        ...W,
        overwrites: W.overwrites ? { ...W.overwrites } : {}
      }));
    }
    function s(P = {}) {
      return P ? {
        code: P.code ?? null,
        overwrites: {
          title: P.overwrites?.title ?? null,
          description: P.overwrites?.description ?? null,
          hide: P.overwrites?.hide ?? !1,
          selected: P.overwrites?.selected ?? null,
          value: P.overwrites?.value ?? null,
          options: l(P.overwrites?.options ?? [])
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
        return new _o();
      const P = (r.value?.overwrites?.steps ?? []).find((Y) => Y.code === a.value.code), W = P ? s(P) : null;
      if (W)
        return new _o(W);
      const E = a.value.options?.map((Y) => ({
        code: Y.code,
        overwrites: {}
      })) ?? [];
      return new _o({
        code: a.value.code,
        overwrites: {
          options: E
        }
      });
    }
    function d(P) {
      const W = r.value && typeof r.value == "object" ? r.value : {}, E = Array.isArray(W.overwrites?.steps) ? W.overwrites.steps.map((ne) => s(ne)) : [], Y = s({
        code: P.code ?? a.value?.code,
        overwrites: P.overwrites
      }), de = E.findIndex((ne) => ne.code === Y.code);
      de !== -1 ? E.splice(de, 1, Y) : E.push(Y), r.value = {
        code: W.code ?? t.productCode ?? null,
        overwrites: {
          ...W.overwrites,
          steps: E
        }
      }, i.value = new _o(Y);
    }
    function u(P) {
      const W = new _o({
        code: i.value.code ?? a.value?.code,
        overwrites: {
          ...i.value.overwrites,
          options: l(i.value.overwrites?.options ?? [])
        }
      });
      P(W), d(W);
    }
    fe(
      [() => a.value, () => r.value],
      () => {
        i.value = c();
      },
      { immediate: !0, deep: !0 }
    );
    function f(P, W) {
      u((E) => {
        E.overwrites[P] = W;
      });
    }
    function p(P, W) {
      u((E) => {
        const Y = Array.isArray(E.overwrites.options) ? E.overwrites.options : [];
        let de = !1;
        if (E.overwrites.options = Y.map((ne) => {
          if (ne.code !== P)
            return ne;
          de = !0;
          const He = { ...ne.overwrites ?? {} };
          return W(He), {
            ...ne,
            overwrites: He
          };
        }), !de) {
          const ne = {};
          W(ne), E.overwrites.options = [
            ...E.overwrites.options,
            {
              code: P,
              overwrites: ne
            }
          ];
        }
      });
    }
    function h(P, W, E) {
      p(P, (Y) => {
        Y[W] = E;
      });
    }
    function v(P) {
      if (P == null || P === "")
        return null;
      const W = typeof P == "number" ? P : Number(P);
      return Number.isFinite(W) ? W : null;
    }
    function k(P, W) {
      const E = v(W);
      p(P, (Y) => {
        if (E === null) {
          delete Y.value;
          return;
        }
        Y.value = E;
      });
    }
    function _(P, W) {
      return i.value.overwrites?.options?.find((E) => E.code === P)?.overwrites?.[W] ?? null;
    }
    const x = /* @__PURE__ */ H([]), $ = j({
      get: () => ({
        width: _("width", "value"),
        height: _("height", "value")
      }),
      set: (P) => {
        k("width", P.width), k("height", P.height);
      }
    }), b = j({
      get: () => _("amount", "value") ?? 1,
      set: (P) => {
        u((W) => {
          W.overwrites.options = W.overwrites.options.map((E) => E.code === "amount" ? {
            ...E,
            overwrites: {
              ...E.overwrites ?? {},
              value: P
            }
          } : E);
        });
      }
    }), C = j(() => {
      const P = a.value?.options?.find((ne) => ne.code === "width"), W = a.value?.options?.find((ne) => ne.code === "height"), E = P && P.reversible && W && W.reversible, Y = P?.min, de = W?.min;
      return E ? Math.min(Y, de) : { width: Y, height: de };
    }), T = j(() => {
      const P = a.value?.options?.find((ne) => ne.code === "width"), W = a.value?.options?.find((ne) => ne.code === "height"), E = P && P.reversible && W && W.reversible, Y = P?.max, de = W?.max;
      return E ? Math.max(Y, de) : { width: Y, height: de };
    }), K = j(() => ({
      width: {
        minValue: Ue.withMessage(
          V("step.min_value", {
            minValue: typeof C.value == "number" ? C.value : C.value.width
          }),
          La(typeof C.value == "number" ? C.value : C.value.width)
        ),
        maxValue: Ue.withMessage(
          V("step.max_value", {
            maxValue: typeof T.value == "number" ? T.value : T.value.width
          }),
          Da(typeof T.value == "number" ? T.value : T.value.width)
        )
      },
      height: {
        minValue: Ue.withMessage(
          V("step.min_value", {
            minValue: typeof C.value == "number" ? C.value : C.value.height
          }),
          La(typeof C.value == "number" ? C.value : C.value.height)
        ),
        maxValue: Ue.withMessage(
          V("step.max_value", {
            maxValue: typeof T.value == "number" ? T.value : T.value.height
          }),
          Da(typeof T.value == "number" ? T.value : T.value.height)
        )
      }
    })), G = ao(K, $), ee = j(() => a.value?.options?.some((P) => ["width", "height", "amount"].includes(P.code))), I = j(
      () => a.value.options?.find((P) => P.code === i.value.overwrites.selected)
    );
    function q() {
      i.value = c(), d(i.value), G.value.$reset();
    }
    async function A() {
      await n.value.validate() && (o.value = !1);
    }
    return (P, W) => (g(), oe($m, {
      modelValue: o.value,
      "onUpdate:modelValue": W[8] || (W[8] = (E) => o.value = E),
      position: "right",
      title: y(V)("editor.editing_step", { step: a.value?.title }),
      persistent: y(G).$errors.length > 0
    }, {
      default: O(() => [
        y(G).$errors.length ? (g(), oe(lr, {
          key: 0,
          title: y(V)("editor.editor_alert.title"),
          description: y(V)("editor.editor_alert.description"),
          type: "error"
        }, null, 8, ["title", "description"])) : R("", !0),
        F(ws, { ref: "editor-form" }, {
          default: O(() => [
            F(xn, null, {
              default: O(() => [
                F(at, null, {
                  title: O(() => [
                    ae(D(y(V)("editor.hide_step.title")), 1)
                  ]),
                  subtitle: O(() => [
                    ae(D(y(V)("editor.hide_step.description")), 1)
                  ]),
                  default: O(() => [
                    F(yn, {
                      "model-value": !!i.value.overwrites.hide,
                      "onUpdate:modelValue": W[0] || (W[0] = (E) => f("hide", E))
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                ee.value ? R("", !0) : (g(), S(we, { key: 0 }, [
                  F(at, null, {
                    title: O(() => [
                      ae(D(y(V)("editor.default_option.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(D(y(V)("editor.default_option.description")), 1)
                    ]),
                    default: O(() => [
                      F(v0, {
                        id: "default-value-combo",
                        "model-value": i.value.overwrites.selected,
                        items: a.value.options,
                        "item-text": "title",
                        "item-value": "code",
                        placeholder: y(V)("editor.default_option.label"),
                        required: i.value.overwrites.hide,
                        "onUpdate:modelValue": W[1] || (W[1] = (E) => f("selected", E))
                      }, null, 8, ["model-value", "items", "placeholder", "required"])
                    ]),
                    _: 1
                  }),
                  I.value?.amount ? (g(), oe(at, { key: 0 }, {
                    title: O(() => [
                      ae(D(y(V)("editor.default_option_value.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(D(y(V)("editor.default_option_value.description")), 1)
                    ]),
                    default: O(() => [
                      F(zt, {
                        id: "default-value-input",
                        "model-value": i.value.overwrites.value,
                        placeholder: y(V)("editor.default_option_value.label"),
                        required: i.value.overwrites.hide,
                        inline: I.value?.customInput?.unit,
                        min: I.value?.customInput?.min,
                        max: I.value?.customInput?.max,
                        rules: [
                          {
                            validator: (E) => {
                              if (E === "" || E === null || E === void 0)
                                return !0;
                              const Y = I.value?.customInput?.min ?? 0;
                              return Number(E) >= Y;
                            },
                            message: y(V)("step.min_value", {
                              minValue: I.value?.customInput?.min ?? 0
                            })
                          },
                          {
                            validator: (E) => {
                              if (E === "" || E === null || E === void 0)
                                return !0;
                              const Y = I.value?.customInput?.max ?? 1 / 0;
                              return Number(E) <= Y;
                            },
                            message: y(V)("step.max_value", {
                              maxValue: I.value?.customInput?.max ?? 1 / 0
                            })
                          }
                        ],
                        "onUpdate:modelValue": W[2] || (W[2] = (E) => f("value", Number(E)))
                      }, null, 8, ["model-value", "placeholder", "required", "inline", "min", "max", "rules"])
                    ]),
                    _: 1
                  })) : R("", !0),
                  F(at, null, {
                    title: O(() => [
                      ae(D(y(V)("editor.edit_title.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(D(y(V)("editor.edit_title.description")), 1)
                    ]),
                    default: O(() => [
                      F(zt, {
                        id: `step-title-input-${a.value.code}`,
                        "model-value": i.value.overwrites.title,
                        type: "text",
                        placeholder: y(V)("editor.edit_title.placeholder"),
                        "onUpdate:modelValue": W[3] || (W[3] = (E) => f("title", E))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  }),
                  F(at, null, {
                    title: O(() => [
                      ae(D(y(V)("editor.edit_description.title")), 1)
                    ]),
                    subtitle: O(() => [
                      ae(D(y(V)("editor.edit_description.description")), 1)
                    ]),
                    default: O(() => [
                      F(zt, {
                        id: `step-description-input-${a.value.code}`,
                        "model-value": i.value.overwrites.description,
                        type: "text",
                        placeholder: y(V)("editor.edit_description.placeholder"),
                        "onUpdate:modelValue": W[4] || (W[4] = (E) => f("description", E))
                      }, null, 8, ["id", "model-value", "placeholder"])
                    ]),
                    _: 1
                  })
                ], 64)),
                F(Pt, {
                  level: "h3",
                  class: "sub-heading"
                }, {
                  default: O(() => [
                    ae(D(y(V)("editor.edit_options")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            F(Jl, {
              modelValue: x.value,
              "onUpdate:modelValue": W[6] || (W[6] = (E) => x.value = E),
              items: a.value.options?.map((E) => ({
                ...E,
                title: E.title || y(V)(`editor.edit_option.${E.code}`)
              })),
              title: "title"
            }, {
              content: O((E) => [
                F(xn, null, {
                  default: O(() => [
                    ["height", "width", "amount"].includes(E.code) ? (g(), oe(at, { key: 0 }, {
                      title: O(() => [
                        ae(D(y(V)(`editor.${E.code}.title`)), 1)
                      ]),
                      default: O(() => [
                        E.code === "width" || E.code === "height" ? (g(), oe(zt, {
                          key: 0,
                          id: `measurement-input-${E.code}`,
                          "model-value": $.value[E.code] ?? "",
                          type: "number",
                          "aria-label": E.code,
                          class: "measurement-input",
                          inline: E.unit,
                          min: E.min,
                          max: E.max,
                          placeholder: "",
                          error: y(G)[E.code].$errors ? y(G)[E.code].$errors[0]?.$message : "",
                          onBlur: (Y) => y(G)[E.code].$touch(Y),
                          "onUpdate:modelValue": (Y) => k(E.code, Y),
                          onKeyup: it((Y) => y(G)[E.code].$touch(Y), ["enter"])
                        }, null, 8, ["id", "model-value", "aria-label", "inline", "min", "max", "error", "onBlur", "onUpdate:modelValue", "onKeyup"])) : E.code === "amount" ? (g(), oe(pi, {
                          key: 1,
                          modelValue: b.value,
                          "onUpdate:modelValue": W[5] || (W[5] = (Y) => b.value = Y),
                          min: E.min,
                          max: E.max || void 0
                        }, null, 8, ["modelValue", "min", "max"])) : R("", !0)
                      ]),
                      _: 2
                    }, 1024)) : (g(), S(we, { key: 1 }, [
                      F(at, null, {
                        title: O(() => [
                          ae(D(y(V)("editor.hide_option.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(D(y(V)("editor.hide_option.description")), 1)
                        ]),
                        default: O(() => [
                          F(yn, {
                            "model-value": !!_(E.code, "hide"),
                            "onUpdate:modelValue": (Y) => h(E.code, "hide", Y)
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      F(at, null, {
                        title: O(() => [
                          ae(D(y(V)("editor.edit_option_title.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(D(y(V)("editor.edit_option_title.description")), 1)
                        ]),
                        default: O(() => [
                          F(zt, {
                            id: `option-title-input-${E.code}`,
                            "model-value": _(E.code, "title") ?? "",
                            type: "text",
                            placeholder: y(V)("editor.edit_option_title.placeholder"),
                            "onUpdate:modelValue": (Y) => h(E.code, "title", Y)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      F(at, null, {
                        title: O(() => [
                          ae(D(y(V)("editor.edit_option_description.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(D(y(V)("editor.edit_option_description.description")), 1)
                        ]),
                        default: O(() => [
                          F(zt, {
                            id: `option-description-input-${E.code}`,
                            "model-value": _(E.code, "description") ?? "",
                            type: "text",
                            placeholder: y(V)("editor.edit_description.placeholder"),
                            "onUpdate:modelValue": (Y) => h(E.code, "description", Y)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      F(at, null, {
                        title: O(() => [
                          ae(D(y(V)("editor.edit_image.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(D(y(V)("editor.edit_image.description")), 1)
                        ]),
                        default: O(() => [
                          F(zt, {
                            id: `option-image-input-${E.code}`,
                            "model-value": _(E.code, "image") ?? "",
                            type: "text",
                            placeholder: y(V)("editor.edit_image.placeholder"),
                            "onUpdate:modelValue": (Y) => h(E.code, "image", Y)
                          }, null, 8, ["id", "model-value", "placeholder", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      F(at, null, {
                        title: O(() => [
                          ae(D(y(V)("editor.edit_sequence.title")), 1)
                        ]),
                        subtitle: O(() => [
                          ae(D(y(V)("editor.edit_sequence.description")), 1)
                        ]),
                        default: O(() => [
                          F(zt, {
                            id: `option-sequence-input-${E.code}`,
                            "model-value": _(E.code, "sequence") ?? "",
                            type: "number",
                            placeholder: y(V)("editor.edit_sequence.placeholder"),
                            rules: [
                              {
                                validator: (Y) => Y >= 0,
                                message: y(V)("editor.min_sequence", {
                                  min: 0
                                })
                              },
                              {
                                validator: (Y) => Y <= a.value.options.length,
                                message: y(V)("editor.max_sequence", {
                                  max: a.value.options.length
                                })
                              },
                              {
                                message: y(V)("editor.number_should_not_exist_twice"),
                                validator: (Y) => a.value.options.map(
                                  (de) => _(de.code, "sequence")
                                ).filter((de) => de === Y).length <= 1
                              }
                            ],
                            "onUpdate:modelValue": (Y) => h(E.code, "sequence", Y)
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
        U("div", g0, [
          F(Ve, {
            onClick: W[7] || (W[7] = (E) => A())
          }, {
            default: O(() => [
              ae(D(y(V)("editor.apply")), 1)
            ]),
            _: 1
          }),
          F(Ve, {
            variant: "secondary",
            onClick: q
          }, {
            default: O(() => [
              ae(D(y(V)("editor.reset")), 1)
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "persistent"]));
  }
}, w0 = /* @__PURE__ */ me(b0, [["__scopeId", "data-v-857dd264"]]), y0 = {
  class: "configurator",
  "data-testid": "product-configurator",
  part: "configurator"
}, x0 = {
  __name: "PConfigurator",
  props: /* @__PURE__ */ ut({
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
  emits: /* @__PURE__ */ ut(["update:modelValue", "recalculate", "configuration:started"], ["update:overwrites", "update:accordionState", "update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, a = t, r = Ye(e, "overwrites"), i = Ye(e, "accordionState"), n = Ye(e, "modelValue"), l = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1), c = /* @__PURE__ */ H({});
    function d(p, h) {
      i.value[h] = p, i.value.forEach((v, k) => {
        k !== h && (i.value[k] = !1);
      });
    }
    function u(p, h) {
      const v = { ...n.value };
      v.options[h] = p, a("update:modelValue", v);
    }
    function f(p) {
      c.value = p, s.value = !0;
    }
    return (p, h) => (g(), S("div", y0, [
      F(Jl, {
        modelValue: i.value,
        "onUpdate:modelValue": h[5] || (h[5] = (v) => i.value = v),
        items: e.template
      }, {
        default: O(({ item: v, index: k, open: _ }) => [
          v.type === "simple" ? (g(), oe(_h, De({
            key: 0,
            modelValue: n.value.options[k],
            "onUpdate:modelValue": (x) => n.value.options[k] = x,
            overwrites: r.value,
            "onUpdate:overwrites": h[0] || (h[0] = (x) => r.value = x)
          }, { ...v }, {
            "aria-title": v.title.toLowerCase().replaceAll(" ", "-"),
            "button-start-text": e.buttonStartText,
            editor: e.editor,
            "has-overwrites": r.value?.overwrites?.steps?.some((x) => x.code === v.code),
            "is-hidden": r.value?.overwrites?.steps?.some((x) => x.code === v.code && x.overwrites.hide),
            "can-order": e.canOrder,
            "disable-first-step-autofocus": e.disableFirstStepAutofocus,
            exportparts: "step step-title step-subtitle",
            "onEdit:step": (x) => f(v),
            "onUpdate:modelValue": (x) => u(x, k),
            "onUpdate:focus": h[1] || (h[1] = (x) => l.value = x),
            onRecalculate: h[2] || (h[2] = (x) => a("recalculate", x)),
            "onConfiguration:started": h[3] || (h[3] = (x) => a("configuration:started"))
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "aria-title", "button-start-text", "editor", "has-overwrites", "is-hidden", "can-order", "disable-first-step-autofocus", "onEdit:step"])) : v.type === "options" || v.type === "options-multiple" ? (g(), oe(dm, De({
            key: 1,
            modelValue: n.value.options[k],
            "onUpdate:modelValue": (x) => n.value.options[k] = x,
            overwrites: r.value,
            "onUpdate:overwrites": h[4] || (h[4] = (x) => r.value = x)
          }, { ...v }, {
            open: _,
            multiple: v.type === "options-multiple",
            "aria-title": v.title.toLowerCase().replaceAll(" ", "-"),
            disabled: l.value || e.loading,
            editor: e.editor,
            "has-overwrites": r.value?.overwrites?.steps?.some((x) => x.code === v.code),
            "is-hidden": r.value?.overwrites?.steps?.some((x) => x.code === v.code && x.overwrites.hide),
            exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
            "onEdit:step": (x) => f(v),
            "onUpdate:modelValue": u,
            "onUpdate:accordionState": (x) => d(x, k)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "overwrites", "open", "multiple", "aria-title", "disabled", "editor", "has-overwrites", "is-hidden", "onEdit:step", "onUpdate:accordionState"])) : R("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      e.deliveryOptions.length && !e.hideDeliverySection ? (g(), oe(wm, {
        key: 0,
        items: e.deliveryOptions,
        exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
      }, null, 8, ["items"])) : R("", !0),
      e.loading ? (g(), oe(sr, { key: 1 })) : R("", !0),
      e.editor ? (g(), oe(w0, {
        key: 2,
        modelValue: s.value,
        "onUpdate:modelValue": h[6] || (h[6] = (v) => s.value = v),
        step: c.value,
        "onUpdate:step": h[7] || (h[7] = (v) => c.value = v),
        overwrites: r.value,
        "onUpdate:overwrites": h[8] || (h[8] = (v) => r.value = v),
        "product-code": o.productCode
      }, null, 8, ["modelValue", "step", "overwrites", "product-code"])) : R("", !0)
    ]));
  }
}, k0 = /* @__PURE__ */ me(x0, [["__scopeId", "data-v-0c2ac0e3"]]);
class _0 {
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
class _s extends _0 {
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
function va(e) {
  return Array.isArray(e) ? e.length > 0 : e != null && e !== "";
}
class kn {
  constructor({ code: t, options: o }) {
    this.code = t, this.options = o || [];
  }
}
class _n {
  constructor({ products: t, language: o }) {
    this.products = t, this.language = o;
  }
}
class $n {
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
class $0 {
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
function S0(e, t) {
  return t.split(".").reduce((o, a) => o[a] ? o[a] : o, e);
}
const C0 = {
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
}, $s = /* @__PURE__ */ Xe({ language: "nl" });
function z0(e) {
  return S0(C0[$s.language], e) || e;
}
function T0(e, t = {}) {
  return e.replace(/{(\w+)}/g, (o, a) => t[a] || `{${a}}`);
}
function E0(e, t) {
  return e.replace(/{(\d+)}/g, (o, a) => t[a] || `{${a}}`);
}
function rt(e, t = null) {
  const o = z0(e);
  return Array.isArray(t) ? E0(o) : T0(o, t);
}
function O0(e) {
  $s.language = e;
}
function Ss(e, t) {
  return t !== -1 ? e.slice(0, t + 1) : e.filter((o) => o.code !== void 0);
}
function A0(e, t) {
  const o = new Date(e), a = /* @__PURE__ */ new Date(), r = new Date(a);
  return r.setDate(a.getDate() + 1), o.toDateString() === r.toDateString() ? rt("tomorrow") : o.toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    weekday: "long"
  });
}
function V0(e, t) {
  return new Date(e).toLocaleDateString(`${t}-${t.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function P0(e, t) {
  return e.length === 0 ? !0 : t.some((a) => a.code === "no-option") ? !1 : !t?.includes(void 0);
}
function j0(e, t, o, a) {
  let r = "";
  o === "accessories-cross-sell" ? r = "unit" : (o === "material" || o === "materialType") && (r = "meter");
  const i = e.map((n) => {
    const l = a?.find((c) => c.code === n.code)?.overwrites;
    let s;
    return (n.type_code === "number" || n.type_code === "decimal") && (s = {
      value: n.default_value || parseFloat(n.min_value) || 1,
      min: n.min_value,
      max: n.max_value,
      unit: n.unit_code || rt("pc")
    }), {
      code: n.code,
      title: l?.title || n?.name,
      description: l?.description || n?.description,
      image: l?.image || n.images.length ? n.images[0].url : void 0,
      price: n.price ? n.price[t] : void 0,
      pricePer: r,
      unit: n.unit_code || rt("pc"),
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
    noOptionText: rt("no_accessoires")
  }), i;
}
function Sn(e) {
  const t = e.find((a) => a.code === "measurement-amount");
  if (!t?.options?.length)
    return 0;
  const o = t.options.filter(
    (a) => ["width", "height", "amount"].includes(a.code)
  ).length;
  return Math.max(o - 1, 0);
}
function M0(e, t, o, a, r, i, n) {
  let l = [...t];
  if (!e.some((p) => p.code === "measurement-amount") && t.some((p) => p.children.some((h) => ["width", "height"].includes(h.code)))) {
    const p = t.filter((v) => ["size", "amount"].includes(v.code));
    l = t.filter((v) => !["size", "amount"].includes(v.code));
    const h = {
      code: "measurement-amount",
      name: rt("measurement_and_amount"),
      children: p.flatMap((v) => v.children),
      available: p.every((v) => v.available)
    };
    l.unshift(h);
  }
  const s = l.map((p) => {
    let h = p.code === "measurement-amount" || p.code === "amount" ? "simple" : "options";
    const v = r?.find((x) => x.code === p.code)?.overwrites, k = j0(p.children, a, p.code, v?.options);
    let { code: _ } = p;
    return _ === "accessories-cross-sell" && (_ = "accessories", h = "options-multiple"), {
      code: _,
      title: v && v.title ? v.title : p.name,
      type: h,
      options: k,
      hidden: v && v.hide && !n
    };
  }), c = e.some((p) => p.code === "measurement-amount") || i, d = Math.max(Sn(e), Sn(s)), u = o !== -1 && c ? Math.max(-1, o - d) : o;
  return [...Ss(e, u), ...s];
}
function Cs(e) {
  let t = 1 / 0, o;
  return e.forEach((a) => {
    const r = a.prices.purchase_rush_surcharge;
    r < t && (t = r, o = a);
  }), o;
}
function zs(e) {
  let t = null, o = 1 / 0;
  return e.forEach((a) => {
    const r = Cs(a.deliveries), i = r.prices.purchase_rush_surcharge;
    i < o && (o = i, t = r);
  }), t;
}
function I0(e, t) {
  const o = zs(e);
  let a = 0;
  return e.map((r, i) => {
    let n;
    const l = Cs(r.deliveries);
    return i === 0 && (n = { text: rt("fastest"), color: "red" }), o && l.shipping_method_api_code === o.shipping_method_api_code && a === 0 && (n || (n = { text: rt("cheapest"), color: "green" }), a += 1), {
      date: V0(r.delivery_date, t),
      day: A0(r.delivery_date, t),
      cost: l.prices.purchase_rush_surcharge,
      label: n
    };
  });
}
function N0(e, t) {
  const a = e[0][`products_${t}`].toString(), r = zs(e), i = r.prices.purchase_shipping_price, n = r.prices.purchase_packaging_price;
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
function Ts(e) {
  return e.includes("Can not find unique id for option") ? rt("errors.invalid_or_duplicate") : e.includes("Restrictions are not met") ? rt("errors.restrictions_not_met") : e === "Validation Failed" ? rt("errors.invalid") : e.includes("Can not build valid path for tree") ? rt("errors.invalidConfig") : rt("errors.general");
}
class B0 {
  constructor({ proxy: t, version: o }) {
    this.initialized = !1, this.proxy = t, this.version = o || "", this.repository = new _s({ proxy: t }), this.product = new kn({}), this.productInfo = {}, this.productConfig = new _n({}), this.address = new $n({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null, this.hideDeliverySection = !1, this.timeOut = null, this.isEditor = !1, this.hasMeasurementOverwrites = null, this.isRecalculating = !1;
  }
  /**
   * Set the code of the product and get the first step for the product.
   *
   * @param {string} code - The code of the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  async setProduct(t, o = !1) {
    return this.product.code = t, o && (this.loading = !0, this.productInfo = await this.repository.getProduct(t), this.loading = !1), this.productConfig.products = [this.product], this.deliveryOptions = [], this.hasMeasurementOverwrites = this.overwrites?.find((a) => this.product.code === a.code)?.overwrites?.steps?.find((a) => a.code === "measurement-amount")?.overwrites?.options?.some(
      (a) => (a.code === "width" || a.code === "height") && va(a.overwrites?.value)
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
      this.product.options = Ss(i, u);
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
      return (c?.code === "height" || c.code === "amount") && s.length >= 2 ? s : c;
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
    if (P0(this.options, this.product.options)) {
      this.loading = !0;
      const o = this.overwrites?.find((a) => a.code === this.product.code)?.overwrites?.steps;
      try {
        if (this.productConfig.language || (this.productConfig.language = this.language), this.hasMeasurementOverwrites) {
          const r = o?.find((i) => i.code === "measurement-amount")?.overwrites?.options?.filter((i) => va(i.overwrites?.value));
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
            title: Ts(this.payload.message ? this.payload.message : this.payload)
          }, new Error(this.payload.message || this.payload);
        if ([a] = this.payload.products, typeof a == "object" && a) {
          this.alert = {}, this.options[this.options.length - 1]?.alert && delete this.options[this.options.length - 1].alert;
          const r = a.available_options;
          if (t || (this.options = M0(
            this.options,
            r,
            this.lastChangedIndex,
            this.priceType,
            o,
            this.hasMeasurementOverwrites,
            this.isEditor
          )), !t && this.overwrites.length > 0 && o && this.options.forEach((i) => {
            o.forEach(async (n) => {
              const l = this.product.options.some((d) => d.code === n.overwrites.selected) === !1 && va(n.overwrites?.selected), s = n.overwrites?.options?.filter((d) => d.overwrites?.value) || [];
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
            this.prices = N0(i, this.priceType), this.deliveryOptions = I0(i, this.language), t || this.setOpenState();
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
    const t = new $0({ address: this.address, products: this.productConfig.products });
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
    return this.address = new $n(t), this;
  }
  /**
   * Set the language for the client.
   *
   * @param {string} language - the language to be set
   */
  setLanguage(t) {
    return this.language = t, O0(t), nu(t), this;
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
    return this.product = new kn({}), this.productConfig = new _n({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this.productInfo = {}, this;
  }
  /** Set overwrites for certain products, can only be called on init. */
  setOverwrites(t) {
    return this.options.length === 0 ? this.overwrites = t : console.error("Overwrites can only be set on init"), this;
  }
  recalculate(t) {
    if (va(t)) {
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
class L0 extends B0 {
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
    this.initialized = !0, this.proxy = t, this.repository = new _s({ proxy: t, productId: c }), this.setLanguage(o), this.callbackUrl = s, a && this.setAddress(a), r && this.setPriceType(r, i), n.length && this.setOverwrites(n), l && (this.storeProductsLocally = l), d && (this.hideDeliverySection = d), u && (this.buttonStartText = u);
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
      console.error("No payload provided");
      return;
    }
    const o = t.products[0], { options: a, code: r } = o, i = this;
    await this.setProduct(r, !0), t.deliveries && Object.keys(t.deliveries[0]?.address).length && this.setAddress(t.deliveries[0]?.address), this.openConfigurator();
    async function n(l) {
      if (!(l >= a.length + 1)) {
        try {
          await i.setOption(i.product).getNextOption();
        } catch (s) {
          i.options[i.options.length - 1].alert || (i.alert = {
            type: "error",
            title: Ts(s.message ? s.message : s)
          }), i.loading = !1, i.updateExternal = !0;
          return;
        }
        if (a[l]) {
          let s = l + 1;
          a[l].code === "width" ? (i.product.options.push(a[l], a[l + 1], a[l + 2]), s = l + 3) : ["width", "height"].includes(a[l].code) || i.product.options.push(a[l]), await n(s);
        } else
          i.updateExternal = !0;
      }
    }
    a ? await n(0) : console.error("No options found in payload");
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
const D0 = `*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:--theme(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:--theme(--default-font-feature-settings,normal);font-variation-settings:--theme(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:--theme(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:--theme(--default-mono-font-feature-settings,normal);font-variation-settings:--theme(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}:root,:host{--font-sans: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--animate-progress: progress 1s infinite linear;--transform-origin-left-right: 0% 50%;--color-primary-light: #3b82f6;--color-primary-mid: #2f6fe8;--color-primary: #2563eb;--color-primary-hover: #1d4ed8;--color-primary-pressed: #1e40af;--color-secondary: #ffffff;--color-secondary-hover: #fafafa;--color-secondary-pressed: #e5e5e5;--color-tertiary: #eff6ff;--color-tertiary-hover: #dbeafe;--color-tertiary-pressed: #bfdbfe;--color-error-primary: #7b2122;--color-error-secondary: #d52d2f;--color-error-tertiary: #e73c3e;--color-error-accent: #fef2f2;--color-warning-primary: #7c2d12;--color-warning-secondary: #c2410c;--color-warning-tertiary: #f97316;--color-warning-accent: #fff7ed;--color-info-primary: #1e3a8a;--color-info-secondary: #1d4ed8;--color-info-tertiary: #3b82f6;--color-info-accent: #eff6ff;--color-success-primary: #14532d;--color-success-secondary: #15803d;--color-success-tertiary: #22c55e;--color-success-accent: #f0fdf4;--color-border-primary: #d1d5db;--color-border-primary-hover: #9ca3af;--color-disabled-light: #f9fafb;--color-disabled: #f3f4f6;--color-disabled-text: #9ca3af;--color-table-row-border-color: #e5e5e5;--color-input-bg: #ffffff;--color-input-border: #d1d5db;--color-input-disabled-border: #d1d5db;--color-input-inline: #111827;--color-body-text: #111827;--color-body: #ffffff;--color-parent-bg: #ffffff;--color-child: #ffffff;--color-child-alt: #ffffff;--color-gray-450: #848b98;--color-red-50: oklch(97.1% .013 17.38);--color-red-100: oklch(93.6% .032 17.717);--color-red-200: oklch(88.5% .062 18.334);--color-red-300: oklch(80.8% .114 19.571);--color-red-400: oklch(70.4% .191 22.216);--color-red-500: oklch(63.7% .237 25.331);--color-red-600: oklch(57.7% .245 27.325);--color-red-700: oklch(50.5% .213 27.518);--color-red-800: oklch(44.4% .177 26.899);--color-red-900: oklch(39.6% .141 25.723);--color-red-950: oklch(25.8% .092 26.042);--color-orange-50: oklch(98% .016 73.684);--color-orange-100: oklch(95.4% .038 75.164);--color-orange-200: oklch(90.1% .076 70.697);--color-orange-300: oklch(83.7% .128 66.29);--color-orange-400: oklch(75% .183 55.934);--color-orange-500: oklch(70.5% .213 47.604);--color-orange-600: oklch(64.6% .222 41.116);--color-orange-700: oklch(55.3% .195 38.402);--color-orange-800: oklch(47% .157 37.304);--color-orange-900: oklch(40.8% .123 38.172);--color-orange-950: oklch(26.6% .079 36.259);--color-amber-50: oklch(98.7% .022 95.277);--color-amber-100: oklch(96.2% .059 95.617);--color-amber-200: oklch(92.4% .12 95.746);--color-amber-300: oklch(87.9% .169 91.605);--color-amber-400: oklch(82.8% .189 84.429);--color-amber-500: oklch(76.9% .188 70.08);--color-amber-600: oklch(66.6% .179 58.318);--color-amber-700: oklch(55.5% .163 48.998);--color-amber-800: oklch(47.3% .137 46.201);--color-amber-900: oklch(41.4% .112 45.904);--color-amber-950: oklch(27.9% .077 45.635);--color-yellow-50: oklch(98.7% .026 102.212);--color-yellow-100: oklch(97.3% .071 103.193);--color-yellow-200: oklch(94.5% .129 101.54);--color-yellow-300: oklch(90.5% .182 98.111);--color-yellow-400: oklch(85.2% .199 91.936);--color-yellow-500: oklch(79.5% .184 86.047);--color-yellow-600: oklch(68.1% .162 75.834);--color-yellow-700: oklch(55.4% .135 66.442);--color-yellow-800: oklch(47.6% .114 61.907);--color-yellow-900: oklch(42.1% .095 57.708);--color-yellow-950: oklch(28.6% .066 53.813);--color-lime-50: oklch(98.6% .031 120.757);--color-lime-100: oklch(96.7% .067 122.328);--color-lime-200: oklch(93.8% .127 124.321);--color-lime-300: oklch(89.7% .196 126.665);--color-lime-400: oklch(84.1% .238 128.85);--color-lime-500: oklch(76.8% .233 130.85);--color-lime-600: oklch(64.8% .2 131.684);--color-lime-700: oklch(53.2% .157 131.589);--color-lime-800: oklch(45.3% .124 130.933);--color-lime-900: oklch(40.5% .101 131.063);--color-lime-950: oklch(27.4% .072 132.109);--color-green-50: oklch(98.2% .018 155.826);--color-green-100: oklch(96.2% .044 156.743);--color-green-200: oklch(92.5% .084 155.995);--color-green-300: oklch(87.1% .15 154.449);--color-green-400: oklch(79.2% .209 151.711);--color-green-500: oklch(72.3% .219 149.579);--color-green-600: oklch(62.7% .194 149.214);--color-green-700: oklch(52.7% .154 150.069);--color-green-800: oklch(44.8% .119 151.328);--color-green-900: oklch(39.3% .095 152.535);--color-green-950: oklch(26.6% .065 152.934);--color-emerald-50: oklch(97.9% .021 166.113);--color-emerald-100: oklch(95% .052 163.051);--color-emerald-200: oklch(90.5% .093 164.15);--color-emerald-300: oklch(84.5% .143 164.978);--color-emerald-400: oklch(76.5% .177 163.223);--color-emerald-500: oklch(69.6% .17 162.48);--color-emerald-600: oklch(59.6% .145 163.225);--color-emerald-700: oklch(50.8% .118 165.612);--color-emerald-800: oklch(43.2% .095 166.913);--color-emerald-900: oklch(37.8% .077 168.94);--color-emerald-950: oklch(26.2% .051 172.552);--color-teal-50: oklch(98.4% .014 180.72);--color-teal-100: oklch(95.3% .051 180.801);--color-teal-200: oklch(91% .096 180.426);--color-teal-300: oklch(85.5% .138 181.071);--color-teal-400: oklch(77.7% .152 181.912);--color-teal-500: oklch(70.4% .14 182.503);--color-teal-600: oklch(60% .118 184.704);--color-teal-700: oklch(51.1% .096 186.391);--color-teal-800: oklch(43.7% .078 188.216);--color-teal-900: oklch(38.6% .063 188.416);--color-teal-950: oklch(27.7% .046 192.524);--color-cyan-50: oklch(98.4% .019 200.873);--color-cyan-100: oklch(95.6% .045 203.388);--color-cyan-200: oklch(91.7% .08 205.041);--color-cyan-300: oklch(86.5% .127 207.078);--color-cyan-400: oklch(78.9% .154 211.53);--color-cyan-500: oklch(71.5% .143 215.221);--color-cyan-600: oklch(60.9% .126 221.723);--color-cyan-700: oklch(52% .105 223.128);--color-cyan-800: oklch(45% .085 224.283);--color-cyan-900: oklch(39.8% .07 227.392);--color-cyan-950: oklch(30.2% .056 229.695);--color-sky-50: oklch(97.7% .013 236.62);--color-sky-100: oklch(95.1% .026 236.824);--color-sky-200: oklch(90.1% .058 230.902);--color-sky-300: oklch(82.8% .111 230.318);--color-sky-400: oklch(74.6% .16 232.661);--color-sky-500: oklch(68.5% .169 237.323);--color-sky-600: oklch(58.8% .158 241.966);--color-sky-700: oklch(50% .134 242.749);--color-sky-800: oklch(44.3% .11 240.79);--color-sky-900: oklch(39.1% .09 240.876);--color-sky-950: oklch(29.3% .066 243.157);--color-blue-50: oklch(97% .014 254.604);--color-blue-100: oklch(93.2% .032 255.585);--color-blue-200: oklch(88.2% .059 254.128);--color-blue-300: oklch(80.9% .105 251.813);--color-blue-400: oklch(70.7% .165 254.624);--color-blue-500: oklch(62.3% .214 259.815);--color-blue-600: oklch(54.6% .245 262.881);--color-blue-700: oklch(48.8% .243 264.376);--color-blue-800: oklch(42.4% .199 265.638);--color-blue-900: oklch(37.9% .146 265.522);--color-blue-950: oklch(28.2% .091 267.935);--color-indigo-50: oklch(96.2% .018 272.314);--color-indigo-100: oklch(93% .034 272.788);--color-indigo-200: oklch(87% .065 274.039);--color-indigo-300: oklch(78.5% .115 274.713);--color-indigo-400: oklch(67.3% .182 276.935);--color-indigo-500: oklch(58.5% .233 277.117);--color-indigo-600: oklch(51.1% .262 276.966);--color-indigo-700: oklch(45.7% .24 277.023);--color-indigo-800: oklch(39.8% .195 277.366);--color-indigo-900: oklch(35.9% .144 278.697);--color-indigo-950: oklch(25.7% .09 281.288);--color-violet-50: oklch(96.9% .016 293.756);--color-violet-100: oklch(94.3% .029 294.588);--color-violet-200: oklch(89.4% .057 293.283);--color-violet-300: oklch(81.1% .111 293.571);--color-violet-400: oklch(70.2% .183 293.541);--color-violet-500: oklch(60.6% .25 292.717);--color-violet-600: oklch(54.1% .281 293.009);--color-violet-700: oklch(49.1% .27 292.581);--color-violet-800: oklch(43.2% .232 292.759);--color-violet-900: oklch(38% .189 293.745);--color-violet-950: oklch(28.3% .141 291.089);--color-purple-50: oklch(97.7% .014 308.299);--color-purple-100: oklch(94.6% .033 307.174);--color-purple-200: oklch(90.2% .063 306.703);--color-purple-300: oklch(82.7% .119 306.383);--color-purple-400: oklch(71.4% .203 305.504);--color-purple-500: oklch(62.7% .265 303.9);--color-purple-600: oklch(55.8% .288 302.321);--color-purple-700: oklch(49.6% .265 301.924);--color-purple-800: oklch(43.8% .218 303.724);--color-purple-900: oklch(38.1% .176 304.987);--color-purple-950: oklch(29.1% .149 302.717);--color-fuchsia-50: oklch(97.7% .017 320.058);--color-fuchsia-100: oklch(95.2% .037 318.852);--color-fuchsia-200: oklch(90.3% .076 319.62);--color-fuchsia-300: oklch(83.3% .145 321.434);--color-fuchsia-400: oklch(74% .238 322.16);--color-fuchsia-500: oklch(66.7% .295 322.15);--color-fuchsia-600: oklch(59.1% .293 322.896);--color-fuchsia-700: oklch(51.8% .253 323.949);--color-fuchsia-800: oklch(45.2% .211 324.591);--color-fuchsia-900: oklch(40.1% .17 325.612);--color-fuchsia-950: oklch(29.3% .136 325.661);--color-pink-50: oklch(97.1% .014 343.198);--color-pink-100: oklch(94.8% .028 342.258);--color-pink-200: oklch(89.9% .061 343.231);--color-pink-300: oklch(82.3% .12 346.018);--color-pink-400: oklch(71.8% .202 349.761);--color-pink-500: oklch(65.6% .241 354.308);--color-pink-600: oklch(59.2% .249 .584);--color-pink-700: oklch(52.5% .223 3.958);--color-pink-800: oklch(45.9% .187 3.815);--color-pink-900: oklch(40.8% .153 2.432);--color-pink-950: oklch(28.4% .109 3.907);--color-rose-50: oklch(96.9% .015 12.422);--color-rose-100: oklch(94.1% .03 12.58);--color-rose-200: oklch(89.2% .058 10.001);--color-rose-300: oklch(81% .117 11.638);--color-rose-400: oklch(71.2% .194 13.428);--color-rose-500: oklch(64.5% .246 16.439);--color-rose-600: oklch(58.6% .253 17.585);--color-rose-700: oklch(51.4% .222 16.935);--color-rose-800: oklch(45.5% .188 13.697);--color-rose-900: oklch(41% .159 10.272);--color-rose-950: oklch(27.1% .105 12.094);--color-slate-50: oklch(98.4% .003 247.858);--color-slate-100: oklch(96.8% .007 247.896);--color-slate-200: oklch(92.9% .013 255.508);--color-slate-300: oklch(86.9% .022 252.894);--color-slate-400: oklch(70.4% .04 256.788);--color-slate-500: oklch(55.4% .046 257.417);--color-slate-600: oklch(44.6% .043 257.281);--color-slate-700: oklch(37.2% .044 257.287);--color-slate-800: oklch(27.9% .041 260.031);--color-slate-900: oklch(20.8% .042 265.755);--color-slate-950: oklch(12.9% .042 264.695);--color-gray-50: oklch(98.5% .002 247.839);--color-gray-100: oklch(96.7% .003 264.542);--color-gray-200: oklch(92.8% .006 264.531);--color-gray-300: oklch(87.2% .01 258.338);--color-gray-400: oklch(70.7% .022 261.325);--color-gray-500: oklch(55.1% .027 264.364);--color-gray-600: oklch(44.6% .03 256.802);--color-gray-700: oklch(37.3% .034 259.733);--color-gray-800: oklch(27.8% .033 256.848);--color-gray-900: oklch(21% .034 264.665);--color-gray-950: oklch(13% .028 261.692);--color-zinc-50: oklch(98.5% 0 0);--color-zinc-100: oklch(96.7% .001 286.375);--color-zinc-200: oklch(92% .004 286.32);--color-zinc-300: oklch(87.1% .006 286.286);--color-zinc-400: oklch(70.5% .015 286.067);--color-zinc-500: oklch(55.2% .016 285.938);--color-zinc-600: oklch(44.2% .017 285.786);--color-zinc-700: oklch(37% .013 285.805);--color-zinc-800: oklch(27.4% .006 286.033);--color-zinc-900: oklch(21% .006 285.885);--color-zinc-950: oklch(14.1% .005 285.823);--color-neutral-50: oklch(98.5% 0 0);--color-neutral-100: oklch(97% 0 0);--color-neutral-200: oklch(92.2% 0 0);--color-neutral-300: oklch(87% 0 0);--color-neutral-400: oklch(70.8% 0 0);--color-neutral-500: oklch(55.6% 0 0);--color-neutral-600: oklch(43.9% 0 0);--color-neutral-700: oklch(37.1% 0 0);--color-neutral-800: oklch(26.9% 0 0);--color-neutral-900: oklch(20.5% 0 0);--color-neutral-950: oklch(14.5% 0 0);--color-stone-50: oklch(98.5% .001 106.423);--color-stone-100: oklch(97% .001 106.424);--color-stone-200: oklch(92.3% .003 48.717);--color-stone-300: oklch(86.9% .005 56.366);--color-stone-400: oklch(70.9% .01 56.259);--color-stone-500: oklch(55.3% .013 58.071);--color-stone-600: oklch(44.4% .011 73.639);--color-stone-700: oklch(37.4% .01 67.558);--color-stone-800: oklch(26.8% .007 34.298);--color-stone-900: oklch(21.6% .006 56.043);--color-stone-950: oklch(14.7% .004 49.25);--color-black: #000;--color-white: #fff;--spacing: .25rem;--breakpoint-sm: 40rem;--breakpoint-md: 48rem;--breakpoint-lg: 64rem;--breakpoint-xl: 80rem;--breakpoint-2xl: 96rem;--container-3xs: 16rem;--container-2xs: 18rem;--container-xs: 20rem;--container-sm: 24rem;--container-md: 28rem;--container-lg: 32rem;--container-xl: 36rem;--container-2xl: 42rem;--container-3xl: 48rem;--container-4xl: 56rem;--container-5xl: 64rem;--container-6xl: 72rem;--container-7xl: 80rem;--text-xs: .75rem;--text-xs--line-height: calc(1 / .75);--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-3xl: 1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--text-6xl: 3.75rem;--text-6xl--line-height: 1;--text-7xl: 4.5rem;--text-7xl--line-height: 1;--text-8xl: 6rem;--text-8xl--line-height: 1;--text-9xl: 8rem;--text-9xl--line-height: 1;--font-weight-thin: 100;--font-weight-extralight: 200;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--font-weight-black: 900;--tracking-tighter: -.05em;--tracking-tight: -.025em;--tracking-normal: 0em;--tracking-wide: .025em;--tracking-wider: .05em;--tracking-widest: .1em;--leading-tight: 1.25;--leading-snug: 1.375;--leading-normal: 1.5;--leading-relaxed: 1.625;--leading-loose: 2;--radius-xs: .125rem;--radius-sm: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-4xl: 2rem;--shadow-2xs: 0 1px rgb(0 0 0 / .05);--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--inset-shadow-2xs: inset 0 1px rgb(0 0 0 / .05);--inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / .05);--inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / .05);--drop-shadow-xs: 0 1px 1px rgb(0 0 0 / .05);--drop-shadow-sm: 0 1px 2px rgb(0 0 0 / .15);--drop-shadow-md: 0 3px 3px rgb(0 0 0 / .12);--drop-shadow-lg: 0 4px 4px rgb(0 0 0 / .15);--drop-shadow-xl: 0 9px 7px rgb(0 0 0 / .1);--drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / .15);--text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / .15);--text-shadow-xs: 0px 1px 1px rgb(0 0 0 / .2);--text-shadow-sm: 0px 1px 0px rgb(0 0 0 / .075), 0px 1px 1px rgb(0 0 0 / .075), 0px 2px 2px rgb(0 0 0 / .075);--text-shadow-md: 0px 1px 1px rgb(0 0 0 / .1), 0px 1px 2px rgb(0 0 0 / .1), 0px 2px 4px rgb(0 0 0 / .1);--text-shadow-lg: 0px 1px 2px rgb(0 0 0 / .1), 0px 3px 2px rgb(0 0 0 / .1), 0px 4px 8px rgb(0 0 0 / .1);--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce: bounce 1s infinite;--blur-xs: 4px;--blur-sm: 8px;--blur-md: 12px;--blur-lg: 16px;--blur-xl: 24px;--blur-2xl: 40px;--blur-3xl: 64px;--perspective-dramatic: 100px;--perspective-near: 300px;--perspective-normal: 500px;--perspective-midrange: 800px;--perspective-distant: 1200px;--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)}:root{--font-sans: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-poppins: "Poppins", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--animate-progress: progress 1s infinite linear;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--gradient-position: to bottom;--gradient-from: #0000;--gradient-from-position: 0%;--gradient-to: #0000;--gradient-to-position: 100%;--gradient-stops: var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position);--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);--shadow-base: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000;--shadow-container: 0 1px 3px rgba(0, 0, 0, .1);--shadow-card-hover: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-menu: var(--shadow-base), 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-menu-large: var(--shadow-base), 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-floating-soft: 0 4px 6px rgb(0 0 0 / .1);--shadow-page-header-overlap: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 12px 12px -16px rgb(0 0 0 / .2);--filter-shadow-tooltip: drop-shadow(0 2px 4px rgb(0 0 0 / .24));--filter-shadow-panel-top: drop-shadow(0 -1px 2px rgb(0 0 0 / .1)) drop-shadow(0 -1px 1px rgb(0 0 0 / .06));--filter-shadow-panel-bottom: drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06));--color-primary: oklch(54.615% .2152 262.881);--color-primary-hover: oklch(48.82% .2172 264.376);--color-primary-active: oklch(57.034% .1951 261.584);--color-on-primary: oklch(100% 0 0);--color-accent: oklch(54.615% .2152 262.881);--color-accent-strong: oklch(48.82% .2172 264.376);--color-accent-soft: oklch(96.221% .019 240.333);--color-accent-soft-hover: oklch(93.192% .0316 255.585);--color-accent-soft-active: oklch(88.234% .0571 254.128);--color-on-accent: oklch(100% 0 0);--state-hover-overlay: color-mix(in oklch, oklch(0% 0 0) 8%, transparent);--state-active-overlay: color-mix(in oklch, oklch(0% 0 0) 16%, transparent);--color-surface-canvas: oklch(100% 0 0);--color-surface-page: oklch(100% 0 0);--color-surface-raised: oklch(100% 0 0);--color-surface-raised-alt: oklch(100% 0 0);--color-surface-subtle: oklch(100% 0 0);--color-surface-subtle-hover: oklch(98.477% .0017 247.838);--color-surface-subtle-active: oklch(92.48% .0027 264.541);--color-surface-disabled: oklch(96.65% .004 264.52);--color-surface-disabled-subtle: oklch(98.498% .0018 247.859);--color-control-track-off: oklch(92.48% .0027 264.541);--color-secondary: oklch(100% 0 0);--color-secondary-hover: oklch(98.477% .0017 247.838);--color-secondary-pressed: oklch(92.48% .0027 264.541);--color-secondary-border: oklch(86.277% .0063 264.565);--color-secondary-border-hover: oklch(73.455% .008 264.608);--color-tertiary: oklch(96.221% .019 240.333);--color-tertiary-hover: oklch(93.192% .0316 255.585);--color-tertiary-pressed: oklch(88.234% .0571 254.128);--color-tertiary-text: oklch(54.615% .2152 262.881);--color-parent-bg: oklch(100% 0 0);--color-child: oklch(100% 0 0);--color-text-primary: oklch(21.049% .032 264.664);--color-text-secondary: oklch(55.1% .023 264.36);--color-text-disabled: oklch(51.786% .0108 264.705);--color-text-inverse: oklch(100% 0 0);--color-border-default: oklch(86.277% .0063 264.565);--color-border-strong: oklch(73.455% .008 264.608);--color-divider: oklch(92.48% .0027 264.541);--color-border-subtle: oklch(92.48% .0027 264.541);--color-field-background: oklch(100% 0 0);--color-field-border: oklch(86.277% .0063 264.565);--color-field-text: oklch(21.049% .032 264.664);--color-success: oklch(55.106% .1432 149.926);--color-success-fill: oklch(55.106% .1432 149.926);--color-success-fill-hover: oklch(52.73% .1371 150.069);--color-success-fill-active: oklch(39.253% .0896 152.535);--color-success-strong: oklch(39.253% .0896 152.535);--color-success-soft: oklch(98.135% .0124 149.917);--color-on-success: oklch(100% 0 0);--color-success-text: oklch(52.73% .1371 150.069);--color-warning: oklch(58.272% .162 45.983);--color-warning-hover: oklch(55.343% .1739 38.402);--color-warning-active: oklch(40.839% .1165 38.172);--color-warning-strong: oklch(40.839% .1165 38.172);--color-warning-soft: oklch(98.377% .0105 50.111);--color-on-warning: oklch(100% 0 0);--color-warning-text: oklch(55.343% .1739 38.402);--color-danger: oklch(61.535% .2075 25.224);--color-danger-fill: oklch(57.7% .245 27.325);--color-danger-fill-hover: oklch(50.5% .213 27.518);--color-danger-fill-active: oklch(39.329% .1242 24.368);--color-danger-strong: oklch(39.329% .1242 24.368);--color-danger-muted: oklch(.808 .114 19.571);--color-danger-soft: oklch(97.053% .0129 17.38);--color-on-danger: oklch(100% 0 0);--color-danger-text: oklch(57.004% .2035 26.111);--color-info: oklch(62.538% .1804 219.935);--color-info-strong: oklch(30.152% .1159 260.405);--color-info-soft: oklch(96.221% .019 240.333);--color-info-text: oklch(48.727% .2427 215.855);--color-tag-info-soft-bg: oklch(93.192% .0316 255.585);--color-tag-info-soft-text: oklch(48.82% .2172 264.376);--color-tag-success-soft-bg: oklch(96.241% .0434 156.743);--color-tag-success-soft-text: oklch(52.73% .1371 150.069);--color-tag-neutral-soft-bg: oklch(96.696% .0029 264.542);--color-tag-neutral-soft-text: oklch(37.293% .0306 259.733);--color-tag-warning-orange-soft-bg: oklch(95.42% .0372 75.164);--color-tag-warning-orange-soft-text: oklch(55.343% .1739 38.402);--color-tag-accent-soft-bg: oklch(94.643% .0327 307.174);--color-tag-accent-soft-text: oklch(49.552% .2369 301.924);--color-tag-danger-soft-bg: oklch(93.564% .0309 17.717);--color-tag-danger-soft-text: oklch(50.542% .1905 27.518);--color-tag-warning-yellow-soft-bg: oklch(97.292% .0693 103.193);--color-tag-warning-yellow-soft-text: oklch(55.378% .1207 66.442);--color-tag-neutral-outline-border: oklch(92.758% .0058 264.531);--color-tag-neutral-outline-bg: oklch(100% 0 0);--color-tag-neutral-outline-text: oklch(20.463% 0 0);--color-tag-subtle-outline-border: oklch(37.293% .0306 259.733 / .1);--color-tag-subtle-outline-bg: oklch(97.015% 0 0);--color-tag-subtle-outline-text: oklch(20.463% 0 0);--color-tag-warning-orange-outline-border: oklch(62.848% .1396 63.6 / .1);--color-tag-warning-orange-outline-bg: oklch(97.962% .0158 73.684);--color-tag-warning-orange-outline-text: oklch(40.839% .1165 38.172);--color-tag-info-outline-border: oklch(53.296% .1901 259.956 / .1);--color-tag-info-outline-bg: oklch(97.048% .0142 254.604);--color-tag-info-outline-text: oklch(37.906% .1378 265.522);--color-tag-success-outline-border: oklch(52.699% .1397 149.106 / .1);--color-tag-success-outline-bg: oklch(98.193% .0181 155.826);--color-tag-success-outline-text: oklch(39.253% .0896 152.535);--color-tag-danger-outline-border: oklch(50.678% .1732 28.989 / .1);--color-tag-danger-outline-bg: oklch(97.053% .0129 17.38);--color-tag-danger-outline-text: oklch(39.584% .1331 25.723);--color-tag-accent-outline-border: oklch(48.471% .2356 298.402 / .1);--color-tag-accent-outline-bg: oklch(97.685% .0142 308.299);--color-tag-accent-outline-text: oklch(38.074% .1661 304.987);--color-tag-warning-yellow-outline-border: oklch(55.378% .1207 66.442 / .1);--color-tag-warning-yellow-outline-bg: oklch(98.73% .0262 102.212);--color-tag-warning-yellow-outline-text: oklch(42.1% .0897 57.708);--color-overlay-backdrop: color-mix(in oklch, oklch(0% 0 0) 50%, transparent)}.dark{--color-surface-canvas: oklch(20.768% .0398 265.755);--color-surface-page: oklch(29.569% .034 270.005);--color-surface-raised: oklch(32.662% .0494 270.87);--color-surface-raised-alt: oklch(41.043% .0427 273.922);--color-surface-subtle: oklch(29.569% .034 270.005);--color-surface-subtle-hover: oklch(38.516% .0297 272.123);--color-surface-subtle-active: oklch(41.043% .0427 273.922);--color-accent-soft: oklch(71.374% .1434 254.624 / .1);--color-accent-soft-hover: oklch(71.374% .1434 254.624 / .15);--color-accent-soft-active: oklch(71.374% .1434 254.624 / .175);--color-secondary: oklch(29.569% .034 270.005);--color-secondary-hover: oklch(38.516% .0297 272.123);--color-secondary-pressed: oklch(57.973% .031 276.461);--color-secondary-border: oklch(56.001% .0206 272.101);--color-secondary-border-hover: oklch(73.455% .008 264.608);--color-tertiary: oklch(71.374% .1434 254.624 / .1);--color-tertiary-hover: oklch(71.374% .1434 254.624 / .15);--color-tertiary-pressed: oklch(71.374% .1434 254.624 / .175);--color-tertiary-text: oklch(75.234% .12488 254.018);--color-parent-bg: oklch(29.569% .034 270.005);--color-child: oklch(32.662% .0494 270.87);--color-surface-disabled: oklch(20.768% .0398 265.755);--color-surface-disabled-subtle: oklch(98.498% .0018 247.859);--color-control-track-off: oklch(27.95% .0368 260.031);--color-text-primary: oklch(92.8% .006 264.531);--color-text-secondary: oklch(92.758% .0058 264.531);--color-text-disabled: oklch(73.455% .008 264.608);--color-border-default: oklch(56.001% .0206 272.101);--color-border-strong: oklch(56.001% .0206 272.101);--color-divider: oklch(44.611% .0263 256.802);--color-border-subtle: oklch(44.611% .0263 256.802);--color-primary: oklch(54.615% .2152 262.881);--color-primary-hover: oklch(48.82% .2172 264.376);--color-primary-active: oklch(42.445% .1809 265.638);--color-on-primary: oklch(100% 0 0);--color-accent: oklch(71.374% .1434 254.624);--color-accent-strong: oklch(57.034% .1951 261.584);--color-on-accent: oklch(100% 0 0);--state-hover-overlay: color-mix(in oklch, oklch(100% 0 0) 6%, transparent);--state-active-overlay: color-mix(in oklch, oklch(100% 0 0) 12%, transparent);--color-field-background: oklch(27.95% .0368 260.031);--color-field-border: oklch(56.001% .0206 272.101);--color-field-text: oklch(87.168% .0093 258.338);--color-success: oklch(72.275% .192 149.579);--color-success-fill: oklch(39.253% .0896 152.535);--color-success-fill-hover: oklch(55.106% .1432 149.926);--color-success-fill-active: oklch(55.106% .1432 149.926);--color-success-strong: oklch(98.135% .0124 149.917);--color-success-soft: oklch(39.253% .0896 152.535);--color-success-text: oklch(98.135% .0124 149.917);--color-warning: oklch(58.272% .162 45.983);--color-warning-hover: oklch(55.343% .1739 38.402);--color-warning-active: oklch(40.839% .1165 38.172);--color-warning-strong: oklch(98.377% .0105 50.111);--color-warning-soft: oklch(40.839% .1165 38.172);--color-warning-text: oklch(98.377% .0105 50.111);--color-danger: oklch(61.535% .2075 25.224);--color-danger-fill: oklch(57.7% .245 27.325);--color-danger-fill-hover: oklch(50.5% .213 27.518);--color-danger-fill-active: oklch(45% .213 27.518);--color-danger-strong: oklch(97.053% .0129 17.38);--color-danger-muted: oklch(.808 .114 19.571);--color-danger-soft: oklch(39.329% .1242 24.368);--color-danger-text: oklch(97.053% .0129 17.38);--color-info: oklch(62.538% .1804 219.935);--color-info-strong: oklch(96.221% .019 240.333);--color-info-soft: oklch(30.152% .1159 260.405);--color-info-text: oklch(96.221% .019 240.333);--color-tag-info-soft-bg: oklch(71.374% .1434 254.624 / .1);--color-tag-info-soft-text: oklch(80.907% .0956 251.813);--color-tag-success-soft-bg: oklch(80.035% .1821 151.711 / .1);--color-tag-success-soft-text: oklch(87.116% .1363 154.449);--color-tag-neutral-soft-bg: oklch(71.547% 0 0 / .1);--color-tag-neutral-soft-text: oklch(87.111% .0055 286.286);--color-tag-warning-orange-soft-bg: oklch(75.764% .159 55.934 / .1);--color-tag-warning-orange-soft-text: oklch(83.657% .1165 66.29);--color-tag-accent-soft-bg: oklch(72.169% .1767 305.504 / .1);--color-tag-accent-soft-text: oklch(82.676% .1082 306.383);--color-tag-danger-soft-bg: oklch(71.063% .1661 22.216 / .1);--color-tag-danger-soft-text: oklch(80.769% .1035 19.571);--color-tag-warning-yellow-soft-bg: oklch(86.056% .1731 91.936 / .1);--color-tag-warning-yellow-soft-text: oklch(90.524% .1657 98.111);--color-tag-neutral-outline-bg: oklch(100% 0 0 / .1);--color-tag-neutral-outline-text: oklch(87.111% .0055 286.286);--color-overlay-backdrop: color-mix(in oklch, oklch(0% 0 0) 70%, transparent)}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes progress{0%{transform:translate(0) scaleX(0)}40%{transform:translate(0) scaleX(.4)}to{transform:translate(100%) scaleX(.5)}}@keyframes pulse{50%{opacity:.5}}html{font-size:16px;line-height:1.5rem}*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding:0;margin:0}button,input,optgroup,select,textarea{font:inherit;letter-spacing:inherit;color:inherit}:where(a){color:inherit;text-decoration:inherit}:where(a:visited){color:inherit}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.not-sr-only{position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%;line-height:1.5}img,svg{display:block}table{border-collapse:collapse;border-spacing:0}ol,ul{list-style:none}body{margin:0;font-family:var(--font-sans);background-color:var(--color-surface-canvas, oklch(100% 0 0));color:var(--color-text-primary, oklch(21.049% .032 264.664))}*,:after,:before,::backdrop,::file-selector-button{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}button:not(:disabled),[role=button]:not(:disabled){cursor:pointer}body{background-color:var(--color-surface-canvas, oklch(100% 0 0));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.mini-icon[data-v-83781390]{display:flex;height:1.25rem;width:1.25rem;flex-shrink:0}.micro-icon[data-v-1e1a14be]{display:flex;height:1rem;width:1rem;flex-shrink:0}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{transform:scale(.95);opacity:0}.v-enter-to[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{transform:scale(1);opacity:1}.v-leave-to[data-v-ed45de91]{transform:scale(.95);opacity:0}.expand-top-enter-active[data-v-42701d92],.expand-bottom-enter-active[data-v-42701d92],.expand-left-enter-active[data-v-42701d92],.expand-right-enter-active[data-v-42701d92],.expand-top-leave-active[data-v-42701d92],.expand-bottom-leave-active[data-v-42701d92],.expand-left-leave-active[data-v-42701d92],.expand-right-leave-active[data-v-42701d92]{transform:translateZ(0);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--default-transition-timing-function);transition-duration:.15s}.expand-top-enter-from[data-v-42701d92]{translate:0 50%;scale:1 0;opacity:0}.expand-top-enter-to[data-v-42701d92],.expand-top-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-top-leave-to[data-v-42701d92]{translate:0 50%;scale:1 0;opacity:0}.expand-bottom-enter-from[data-v-42701d92]{translate:0 -50%;scale:1 0;opacity:0}.expand-bottom-enter-to[data-v-42701d92],.expand-bottom-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-bottom-leave-to[data-v-42701d92]{translate:0 -50%;scale:1 0;opacity:0}.expand-left-enter-from[data-v-42701d92]{translate:50% 0;scale:0 1;opacity:0}.expand-left-enter-to[data-v-42701d92],.expand-left-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-left-leave-to[data-v-42701d92]{translate:50% 0;scale:0 1;opacity:0}.expand-right-enter-from[data-v-42701d92]{translate:-50% 0;scale:0 1;opacity:0}.expand-right-enter-to[data-v-42701d92],.expand-right-leave-from[data-v-42701d92]{translate:0 0;scale:1 1;opacity:100%}.expand-right-leave-to[data-v-42701d92]{translate:-50% 0;scale:0 1;opacity:0}.floating-container-overlay-container[data-v-d07f7747]{pointer-events:none;position:absolute;top:0;left:0;display:contents;contain:layout}.floating-container-overlay-container .floating-container-overlay[data-v-d07f7747]{pointer-events:none;position:absolute;inset:0;display:flex}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-d07f7747]{pointer-events:auto;visibility:hidden;position:absolute;margin:0;height:max-content;width:max-content;overflow:visible;background-color:transparent;padding:0}.list[data-v-5e496d8d]{display:flex;flex-direction:column}.list.grid[data-v-5e496d8d]{flex-direction:row;flex-wrap:wrap}.list-item[data-v-9c2bcba7]{display:flex;align-items:center;background-color:var(--color-surface-raised, oklch(100% 0 0));padding-inline:1rem;padding-block:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--default-transition-timing-function);transition-duration:.15s}.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]{--tw-outline-style: none;outline-style:none}@media(forced-colors:active){.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]{outline:2px solid transparent;outline-offset:2px}}.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]:hover{cursor:pointer;background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838))}.list-item.clickable:not([tabindex="-1"])[data-v-9c2bcba7]:focus-visible,.list-item.clickable:not([tabindex="-1"]).active[data-v-9c2bcba7]{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.list-item .prepend[data-v-9c2bcba7]{display:flex}.list-item .content[data-v-9c2bcba7]{display:flex;flex-direction:column}.list-item .content .title[data-v-9c2bcba7]{font-weight:var(--font-weight-bold, 700)}.list-item .content .subtitle[data-v-9c2bcba7]{font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.list-item .content .text[data-v-9c2bcba7]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.dark .list-item.clickable[data-v-9c2bcba7]:not([tabindex="-1"]):focus-visible,.dark .list-item.clickable:not([tabindex="-1"]).active[data-v-9c2bcba7]{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.label[data-v-08911c65]{display:flex;height:1.5rem;width:fit-content;align-items:center;border-radius:.25rem;padding-inline:.625rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.label.small[data-v-08911c65]{height:1.25rem;padding-inline:.5rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.label.blue[data-v-08911c65]{background-color:var(--color-tag-info-soft-bg, oklch(93.192% .0316 255.585));color:var(--color-tag-info-soft-text, oklch(48.82% .2172 264.376))}.label.green[data-v-08911c65]{background-color:var(--color-tag-success-soft-bg, oklch(96.241% .0434 156.743));color:var(--color-tag-success-soft-text, oklch(52.73% .1371 150.069))}.label.gray[data-v-08911c65]{background-color:var(--color-tag-neutral-soft-bg, oklch(96.696% .0029 264.542));color:var(--color-tag-neutral-soft-text, oklch(37.293% .0306 259.733))}.label.orange[data-v-08911c65]{background-color:var(--color-tag-warning-orange-soft-bg, oklch(95.42% .0372 75.164));color:var(--color-tag-warning-orange-soft-text, oklch(55.343% .1739 38.402))}.label.purple[data-v-08911c65]{background-color:var(--color-tag-accent-soft-bg, oklch(94.643% .0327 307.174));color:var(--color-tag-accent-soft-text, oklch(49.552% .2369 301.924))}.label.red[data-v-08911c65]{background-color:var(--color-tag-danger-soft-bg, oklch(93.564% .0309 17.717));color:var(--color-tag-danger-soft-text, oklch(50.542% .1905 27.518))}.label.yellow[data-v-08911c65]{background-color:var(--color-tag-warning-yellow-soft-bg, oklch(97.292% .0693 103.193));color:var(--color-tag-warning-yellow-soft-text, oklch(55.378% .1207 66.442))}.label.alt[data-v-08911c65]{border-radius:var(--radius-xl, .75rem);border-style:solid;border-width:1px;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.label.alt.white[data-v-08911c65]{border-color:var(--color-tag-neutral-outline-border, oklch(92.758% .0058 264.531));background-color:var(--color-tag-neutral-outline-bg, oklch(100% 0 0));color:var(--color-tag-neutral-outline-text, oklch(20.463% 0 0))}.label.alt.gray[data-v-08911c65]{border-color:var(--color-tag-subtle-outline-border, oklch(37.293% .0306 259.733 / .1));background-color:var(--color-tag-subtle-outline-bg, oklch(97.015% 0 0));color:var(--color-tag-subtle-outline-text, oklch(20.463% 0 0))}.label.alt.orange[data-v-08911c65]{border-color:var(--color-tag-warning-orange-outline-border, oklch(62.848% .1396 63.6 / .1));background-color:var(--color-tag-warning-orange-outline-bg, oklch(97.962% .0158 73.684));color:var(--color-tag-warning-orange-outline-text, oklch(40.839% .1165 38.172))}.label.alt.blue[data-v-08911c65]{border-color:var(--color-tag-info-outline-border, oklch(53.296% .1901 259.956 / .1));background-color:var(--color-tag-info-outline-bg, oklch(97.048% .0142 254.604));color:var(--color-tag-info-outline-text, oklch(37.906% .1378 265.522))}.label.alt.green[data-v-08911c65]{border-color:var(--color-tag-success-outline-border, oklch(52.699% .1397 149.106 / .1));background-color:var(--color-tag-success-outline-bg, oklch(98.193% .0181 155.826));color:var(--color-tag-success-outline-text, oklch(39.253% .0896 152.535))}.label.alt.red[data-v-08911c65]{border-color:var(--color-tag-danger-outline-border, oklch(50.678% .1732 28.989 / .1));background-color:var(--color-tag-danger-outline-bg, oklch(97.053% .0129 17.38));color:var(--color-tag-danger-outline-text, oklch(39.584% .1331 25.723))}.label.alt.purple[data-v-08911c65]{border-color:var(--color-tag-accent-outline-border, oklch(48.471% .2356 298.402 / .1));background-color:var(--color-tag-accent-outline-bg, oklch(97.685% .0142 308.299));color:var(--color-tag-accent-outline-text, oklch(38.074% .1661 304.987))}.label.alt.yellow[data-v-08911c65]{border-color:var(--color-tag-warning-yellow-outline-border, oklch(55.378% .1207 66.442 / .1));background-color:var(--color-tag-warning-yellow-outline-bg, oklch(98.73% .0262 102.212));color:var(--color-tag-warning-yellow-outline-text, oklch(42.1% .0897 57.708))}.checkbox-container[data-v-f61c3d17]{display:flex;width:100%;flex-direction:column}.checkbox-container.large .label[data-v-f61c3d17]{gap:.75rem}.checkbox-container.large .checkbox[data-v-f61c3d17]{margin-top:0;height:1.25rem;width:1.25rem}.label[data-v-f61c3d17]{display:flex;align-items:flex-start;gap:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.label[data-v-f61c3d17]:not(.disabled){cursor:pointer}.checkbox[data-v-f61c3d17]{margin-top:.125rem;border-radius:.25rem;border:1px solid var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-field-background, oklch(100% 0 0));color:var(--color-accent-strong, oklch(48.82% .2172 264.376));appearance:none;width:1rem;height:1rem;background-origin:border-box}.checkbox[data-v-f61c3d17]:not(:disabled):hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.checkbox[data-v-f61c3d17]:checked,.checkbox[data-v-f61c3d17]:indeterminate{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));background-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));color:var(--color-on-accent, oklch(100% 0 0))}.checkbox[data-v-f61c3d17]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-f61c3d17]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.checkbox[data-v-f61c3d17]:disabled{border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-border-default, oklch(86.277% .0063 264.565))!important;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.checkbox[data-v-f61c3d17]:not(:disabled):checked:hover,.checkbox[data-v-f61c3d17]:not(:disabled):indeterminate:hover{border-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-on-accent, oklch(100% 0 0))}.checkbox[data-v-f61c3d17]:checked:disabled{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}.checkbox[data-v-f61c3d17]:indeterminate:disabled{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='white' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")}.error .checkbox[data-v-f61c3d17]{border-color:var(--color-danger-text, oklch(57.004% .2035 26.111));outline-color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.error .error-message[data-v-f61c3d17]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.append[data-v-f61c3d17]{margin-left:auto;font-weight:var(--font-weight-normal, 400)}.divider[data-v-8cd28476]{width:100%;border-color:var(--color-border-subtle, oklch(92.789% .0041 286.32));margin:0}.divider[data-v-8cd28476]:not(.vertical){border-top-width:var(--v7bf99daa)}.divider.vertical[data-v-8cd28476]{height:100%;width:.0625rem;border-left-width:var(--v7bf99daa)}.divider.vertical.flex[data-v-8cd28476]{height:auto;align-self:stretch}.base-select[data-v-aecfad57]:focus{outline:none}.base-select.disabled .wrapper[data-v-aecfad57]{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));border-color:var(--color-field-border, oklch(86.277% .0063 264.565));cursor:not-allowed}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-aecfad57]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-aecfad57]::placeholder{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.base-select.click[data-v-aecfad57]{cursor:pointer}.base-select.click.disabled[data-v-aecfad57]{pointer-events:none;cursor:default}.base-select .input-label[data-v-aecfad57]{font-size:.875rem;line-height:1.25rem;font-weight:500;margin-bottom:.25rem;display:flex}.base-select .wrapper[data-v-aecfad57]{background-color:var(--color-field-background, oklch(100% 0 0));border:solid 1px var(--color-field-border, oklch(86.277% .0063 264.565));border-radius:.5rem;display:flex;align-items:center;width:100%;height:2.5rem;padding:.5rem 1rem .5rem .5rem}.base-select .wrapper[data-v-aecfad57]:hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.base-select .wrapper.focus[data-v-aecfad57]{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));border-width:2px;padding-left:.4375rem;padding-right:.9375rem}.base-select .wrapper.has-error[data-v-aecfad57]{border-color:var(--color-danger, oklch(61.535% .2075 25.224));color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.base-select .wrapper .prepend-icon[data-v-aecfad57]{color:var(--color-accent, oklch(54.615% .2152 262.881));margin-left:.5rem}.base-select .wrapper .toggle-chevron[data-v-aecfad57],.base-select .wrapper .clear-button[data-v-aecfad57]{background-color:transparent;padding:0}.base-select .wrapper .selected-items[data-v-aecfad57]{display:flex;gap:.25rem;white-space:nowrap;overflow:hidden;margin-left:.5rem;width:auto}.base-select .wrapper .selected-items .label[data-v-aecfad57]{font-size:.75rem;line-height:1rem;height:min-content}.base-select .wrapper .placeholder[data-v-aecfad57]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .selected-item[data-v-aecfad57]{font-size:.875rem;line-height:1.25rem;margin-left:.5rem;text-overflow:ellipsis;overflow:hidden}.base-select .wrapper .action-buttons[data-v-aecfad57]{display:flex;gap:.25rem;margin-left:auto}.base-select .wrapper input[data-v-aecfad57]{border-style:none;padding:.5rem 0;margin-left:.5rem;font-size:.875rem;line-height:1.25rem;flex:1 0 5rem;min-width:0;min-height:0;background-color:var(--color-field-background, oklch(100% 0 0));color:var(--color-text-primary, oklch(21.049% .032 264.664));height:2.25rem}.base-select .wrapper input[data-v-aecfad57]::placeholder{color:var(--color-border-strong, oklch(73.455% .008 264.608))}.base-select .wrapper input[data-v-aecfad57]:focus{box-shadow:none;outline:none}.base-select .wrapper .label-inner[data-v-aecfad57]{display:flex;align-items:center;gap:.25rem}.base-select .wrapper .label-inner .close-button[data-v-aecfad57]{height:1rem;width:1rem}.base-select .error[data-v-aecfad57]{font-size:.875rem;line-height:1.25rem;color:var(--color-danger-text, oklch(57.004% .2035 26.111));margin-top:.5rem}.state-indicator[data-v-aecfad57]{pointer-events:none;transition:all .2s ease-in-out}.state-indicator.is-open[data-v-aecfad57]{transform:rotate(180deg)}.content-divider[data-v-aecfad57]{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));margin-left:1.5rem;margin-right:1.5rem;height:0px;color:inherit;border-top-width:1px}.select-content[data-v-aecfad57]{justify-content:space-between;max-height:18.75rem;overflow-y:auto;padding:.5rem 0;border-radius:.5rem;background-color:var(--color-surface-raised, oklch(100% 0 0))}.select-content.show-shadow[data-v-aecfad57]{box-shadow:var(--shadow-menu)}.select-content.remove-radius[data-v-aecfad57]{border-top-left-radius:0!important;border-top-right-radius:0!important}.select-content .no-results[data-v-aecfad57]{color:var(--color-text-primary, oklch(21.049% .032 264.664));cursor:default;-webkit-user-select:none;user-select:none;padding:.5rem 1rem;position:relative}.select-content[data-v-aecfad57] .checkbox-container{margin-right:1rem}@media(min-width:768px){.select-content[data-v-aecfad57]{max-height:400px}}@media(min-width:1024px){.select-content[data-v-aecfad57]{max-height:500px}}.loader[data-v-26a513f6]{animation:var(--animate-spin);border-radius:100%;height:1.5rem;width:1.5rem;border-width:.1875rem}.loader.primary-loader[data-v-26a513f6]{border-color:var(--color-accent-soft, oklch(96.221% .019 240.333));border-top-color:var(--color-accent, oklch(54.615% .2152 262.881))}.loader.secondary-loader[data-v-26a513f6]{border-color:color-mix(in oklab,var(--color-text-inverse, oklch(100% 0 0)) 40%,transparent);border-top-color:var(--color-text-inverse, oklch(100% 0 0))}.loader.inherit-loader[data-v-26a513f6]{border-color:color-mix(in oklab,currentColor 40%,transparent);border-top-color:currentColor}.loader.small-loader[data-v-26a513f6]{height:1.25rem;width:1.25rem}.loader.large-loader[data-v-26a513f6]{height:1.75rem;width:1.75rem}.intersect[data-v-d9041eb6]{display:flex;justify-content:center}.search-loader[data-v-d9041eb6]{margin-top:.5rem}.icon[data-v-0d12ef98]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0}.hotkey[data-v-a6d96a76]{display:flex;height:1.25rem;width:fit-content;min-width:1.25rem;align-items:center;justify-content:center;border-radius:.25rem;border-width:1px;border-style:solid;padding-inline:.25rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}.hotkey.disabled[data-v-a6d96a76]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.hotkey.primary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb,var(--color-on-accent, oklch(100% 0 0)) 50%,transparent);background-color:color-mix(in srgb,var(--color-on-accent, oklch(100% 0 0)) 15%,transparent);color:var(--color-on-accent, oklch(100% 0 0))}.hotkey.secondary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb,var(--color-text-primary, oklch(21.049% .032 264.664)) 15%,transparent);background-color:color-mix(in srgb,var(--color-text-primary, oklch(21.049% .032 264.664)) 3%,transparent);color:var(--color-field-text, oklch(21.049% .032 264.664))}.hotkey.tertiary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb,var(--color-accent, oklch(54.615% .2152 262.881)) 30%,transparent);background-color:color-mix(in srgb,var(--color-accent, oklch(54.615% .2152 262.881)) 6%,transparent);color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.tooltip-wrapper[data-v-5016fba7]{display:contents}.tooltip[data-v-5016fba7]{position:relative;display:flex;justify-content:center;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding-inline:1rem;padding-block:.5rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));word-break:break-all;color:var(--color-text-primary, oklch(21.049% .032 264.664));filter:var(--filter-shadow-tooltip)}.tooltip[data-v-5016fba7]:before{position:absolute;display:block;width:0;border-width:8px;border-style:solid;border-color:transparent;content:""}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]{margin-bottom:.5rem}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]:before{content:"";border-top-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]:before{bottom:0;left:50%;translate:-50% 100%;border-bottom-width:0}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-5016fba7]:before{content:"";border-top-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.top-left[data-v-5016fba7]:before{bottom:0;left:.75rem;translate:0 100%;border-bottom-style:solid;border-bottom-width:0px}.tooltip.top-right[data-v-5016fba7]:before{right:.75rem;bottom:0;translate:0 100%;border-bottom-style:solid;border-bottom-width:0px}.tooltip.top-center[data-v-5016fba7]:before,.tooltip.top[data-v-5016fba7]:before{bottom:0;left:50%;translate:-50% 100%;border-bottom-style:solid;border-bottom-width:0px}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom)[data-v-5016fba7]{margin-top:.5rem}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom)[data-v-5016fba7]:before{content:"";border-bottom-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-5016fba7]:before{content:"";border-bottom-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.bottom-left[data-v-5016fba7]:before{top:0;left:.75rem;translate:0 -100%;border-top-width:0px}.tooltip.bottom-right[data-v-5016fba7]:before{top:0;right:.75rem;translate:0 -100%;border-top-width:0px}.tooltip.bottom-center[data-v-5016fba7]:before,.tooltip.bottom[data-v-5016fba7]:before{top:0;left:50%;translate:-50% -100%;border-top-width:0px}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left)[data-v-5016fba7]{margin-right:.5rem}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left)[data-v-5016fba7]:before{content:"";border-left-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-5016fba7]:before{content:"";border-left-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.left-top[data-v-5016fba7]:before{top:.75rem;right:0;translate:100% 0;border-right-width:0px}.tooltip.left-bottom[data-v-5016fba7]:before{right:0;bottom:.75rem;translate:100% 0;border-right-width:0px}.tooltip.left-center[data-v-5016fba7]:before,.tooltip.left[data-v-5016fba7]:before{top:50%;right:0;translate:100% -50%;border-right-width:0px}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right)[data-v-5016fba7]{margin-left:.5rem}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right)[data-v-5016fba7]:before{content:"";border-right-color:var(--color-surface-raised, oklch(100% 0 0))}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-5016fba7]:before{content:"";border-right-color:var(--color-text-primary, oklch(21.049% .032 264.664))}.tooltip.right-top[data-v-5016fba7]:before{top:.75rem;left:0;translate:-100% 0;border-left-width:0px}.tooltip.right-bottom[data-v-5016fba7]:before{bottom:.75rem;left:0;translate:-100% 0;border-left-width:0px}.tooltip.right-center[data-v-5016fba7]:before,.tooltip.right[data-v-5016fba7]:before{top:50%;left:0;translate:-100% -50%;border-left-width:0px}.tooltip.inverted[data-v-5016fba7]{background-color:var(--color-text-primary, oklch(21.049% .032 264.664));color:var(--color-text-inverse, oklch(100% 0 0))}.input-container[data-v-ff1ca5e3]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-ff1ca5e3]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-ff1ca5e3]{stroke:var(--color-danger, oklch(61.535% .2075 25.224))}.input-container.has-error .icon.has-error[data-v-ff1ca5e3]{fill:var(--color-danger, oklch(61.535% .2075 25.224));stroke:var(--color-on-danger, oklch(100% 0 0))}.container-inner[data-v-ff1ca5e3]{width:100%;position:relative}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended)[data-v-ff1ca5e3]{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;z-index:20}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .icon[data-v-ff1ca5e3]{height:1.25rem;width:1.25rem}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .text[data-v-ff1ca5e3]{color:var(--color-field-text, oklch(21.049% .032 264.664));font-size:.875rem;line-height:1.25rem}.container-inner .inline-container-prepended[data-v-ff1ca5e3]{left:1rem}.container-inner .inline-container-appended[data-v-ff1ca5e3]{right:1rem}.input-label[data-v-ff1ca5e3]{font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:flex;font-weight:var(--font-weight-medium, 500)}.input-label .label-text[data-v-ff1ca5e3]{display:flex;gap:.5625rem;align-items:center}.input-label .label-text .info-icon[data-v-ff1ca5e3]{width:.875rem;height:.875rem}.input-label .optional[data-v-ff1ca5e3]{color:var(--color-text-secondary, oklch(55.1% .023 264.36));font-weight:400;margin-left:auto;padding-left:.25rem}.input[data-v-ff1ca5e3]{background-color:var(--color-field-background, oklch(100% 0 0));width:100%;height:2.5rem;border:1px solid var(--color-field-border, oklch(86.277% .0063 264.565));border-radius:.5rem;padding:0 1rem;font-size:.875rem;line-height:1.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));box-sizing:border-box;outline:none;transition:border .2s;appearance:none}.input[data-v-ff1ca5e3]::placeholder{color:var(--color-border-strong, oklch(73.455% .008 264.608))}.input[data-v-ff1ca5e3]:hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.input[data-v-ff1ca5e3]:focus{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));border-width:2px;padding-left:15px;box-shadow:0 0 0 0 var(--color-surface-canvas, oklch(100% 0 0)),0 0 0 1px var(--color-accent, oklch(54.615% .2152 262.881)),0 0 var(--color-text-primary, oklch(21.049% .032 264.664))}.input.has-icon-prepended[data-v-ff1ca5e3]{padding-left:2.5rem}.input.has-icon-prepended[data-v-ff1ca5e3]:focus{padding-left:2.4375rem}.input.has-inline-text[data-v-ff1ca5e3]{padding-right:2.5rem}.input.has-error[data-v-ff1ca5e3]{border-color:var(--color-danger, oklch(61.535% .2075 25.224));color:var(--color-danger-strong, oklch(39.329% .1242 24.368))!important}.input.has-error[data-v-ff1ca5e3]::placeholder{color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.input.has-error[data-v-ff1ca5e3]:focus{border-color:var(--color-danger, oklch(61.535% .2075 25.224));box-shadow:0 0 0 0 var(--color-surface-canvas, oklch(100% 0 0)),0 0 0 1px var(--color-danger, oklch(61.535% .2075 25.224)),0 0 var(--color-text-primary, oklch(21.049% .032 264.664))}.input.is-valid[data-v-ff1ca5e3]{border-color:var(--color-success, oklch(55.106% .1432 149.926));color:var(--color-success-strong, oklch(39.253% .0896 152.535))}.input.is-valid[data-v-ff1ca5e3]::placeholder{color:var(--color-success-strong, oklch(39.253% .0896 152.535))}.input:disabled[data-v-ff1ca5e3]{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important;border-color:var(--color-field-border, oklch(86.277% .0063 264.565))}.input:disabled[data-v-ff1ca5e3]::placeholder{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.input.medium[data-v-ff1ca5e3]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-ff1ca5e3]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-ff1ca5e3]{height:3.5rem;font-size:1rem;line-height:1.5rem}textarea.input[data-v-ff1ca5e3]{padding-top:.75rem;padding-bottom:.75rem}.error[data-v-ff1ca5e3]{color:var(--color-danger-text, oklch(57.004% .2035 26.111));font-size:.875rem;line-height:1.25rem;margin-top:.5rem}.button[data-v-24f66151]{-webkit-appearance:none;appearance:none;height:2.5rem;background-color:transparent;border:0;border-radius:.5rem;padding:0 .75rem;font-weight:500;display:flex;justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;line-height:1.25rem;-webkit-user-select:none;user-select:none;color:var(--color-text-primary, oklch(21.049% .032 264.664));cursor:pointer}.button .default-loader[data-v-24f66151],.button .small-loader[data-v-24f66151]{height:1.3rem;width:1.3rem}.button .large-loader[data-v-24f66151]{height:1.5rem;width:1.5rem}.button[data-v-24f66151]:disabled{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))!important;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important;cursor:not-allowed}.button.primary[data-v-24f66151]{color:var(--color-on-primary, oklch(100% 0 0));background-color:var(--color-primary, oklch(54.615% .2152 262.881))}.button.primary[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-primary-hover, oklch(48.82% .2172 264.376))}.button.primary[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-primary-active, oklch(57.034% .1951 261.584))}.button.secondary[data-v-24f66151]{background-color:var(--color-secondary, oklch(100% 0 0));border:1px solid var(--color-secondary-border, oklch(86.277% .0063 264.565));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.button.secondary[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-secondary-hover, oklch(98.477% .0017 247.838));border-color:var(--color-secondary-border-hover, oklch(73.455% .008 264.608))}.button.secondary[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-secondary-pressed, oklch(92.48% .0027 264.541))}.button.secondary[data-v-24f66151]:disabled{border-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.button.tertiary[data-v-24f66151]{background-color:var(--color-tertiary, oklch(96.221% .019 240.333));color:var(--color-tertiary-text, oklch(54.615% .2152 262.881))}.button.tertiary[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-tertiary-hover, oklch(93.192% .0316 255.585))}.button.tertiary[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-tertiary-pressed, oklch(88.234% .0571 254.128))}.button.text[data-v-24f66151]:not(:disabled):hover{background-color:var(--state-hover-overlay)}.button.text[data-v-24f66151]:not(:disabled):focus{background-color:var(--state-active-overlay)}.button.danger[data-v-24f66151]{background-color:var(--color-danger-fill, oklch(57.7% .245 27.325));color:var(--color-on-danger, oklch(100% 0 0))}.button.danger[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-danger-fill-hover, oklch(50.5% .213 27.518))}.button.danger[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-danger-fill-active, oklch(39.329% .1242 24.368))}.button.success[data-v-24f66151]{background-color:var(--color-success-fill, oklch(55.106% .1432 149.926));color:var(--color-on-success, oklch(100% 0 0))}.button.success[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-success-fill-hover, oklch(52.73% .1371 150.069))}.button.success[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-success-fill-active, oklch(39.253% .0896 152.535))}.button.warning[data-v-24f66151]{background-color:var(--color-warning, oklch(58.272% .162 45.983));color:var(--color-on-warning, oklch(100% 0 0))}.button.warning[data-v-24f66151]:not(:disabled):hover{background-color:var(--color-warning-hover, oklch(55.343% .1739 38.402))}.button.warning[data-v-24f66151]:not(:disabled):focus{background-color:var(--color-warning-active, oklch(40.839% .1165 38.172))}.button.url[data-v-24f66151]{background-color:transparent;color:var(--color-accent, oklch(54.615% .2152 262.881));gap:.25rem;height:1.25rem;padding:0}.button.url[data-v-24f66151]:hover{text-decoration:underline}.button.default.has-icon[data-v-24f66151]{padding:.625rem}.button.default .mini-icon[data-v-24f66151]{height:1.25rem;width:1.25rem}.button.default[data-v-24f66151] .mini-icon svg{stroke-width:1.75}.button.small[data-v-24f66151]{height:2rem;padding:0 .75rem}.button.small.has-icon[data-v-24f66151]{border-radius:9999px;width:2rem}.button.small .mini-icon[data-v-24f66151]{height:1rem;width:1rem}.button.small[data-v-24f66151] .mini-icon svg{stroke-width:2}.button.medium[data-v-24f66151]{height:3rem;padding:0 1rem;font-size:1rem;line-height:1.5rem}.button.medium .mini-icon[data-v-24f66151]{height:1.5rem;width:1.5rem}.button.medium.has-icon[data-v-24f66151]{padding:.75rem}.button.large[data-v-24f66151]{height:3.5rem;padding:0 1.75rem;font-size:1rem;line-height:1.5rem}.button.large .mini-icon[data-v-24f66151]{height:1.5rem;width:1.5rem}.button.large.has-icon[data-v-24f66151]{padding:1.25rem}.hotkey[data-v-24f66151]{margin-left:.25rem}h1[data-v-2c80c3d1],h2[data-v-2c80c3d1],h3[data-v-2c80c3d1],h4[data-v-2c80c3d1],h5[data-v-2c80c3d1],h6[data-v-2c80c3d1]{font-weight:600;margin:0}h1[data-v-2c80c3d1],h2[data-v-2c80c3d1]{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}h3[data-v-2c80c3d1],h4[data-v-2c80c3d1],h5[data-v-2c80c3d1],h6[data-v-2c80c3d1]{font-family:var(--font-sans)}h1[data-v-2c80c3d1]{font-size:1.75rem;letter-spacing:-.8px;line-height:2.25rem}h2[data-v-2c80c3d1]{font-size:1.25rem;letter-spacing:-.2px;line-height:1.75rem}h3[data-v-2c80c3d1]{font-size:1rem;line-height:1.5rem}h4[data-v-2c80c3d1]{font-size:.875rem;line-height:1.25rem}h5[data-v-2c80c3d1]{font-size:.875rem;line-height:1.25rem;font-weight:500}h6[data-v-2c80c3d1]{font-size:.75rem;line-height:1rem}@keyframes minimizedAnimation-69ff7208{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-69ff7208{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-69ff7208{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.dark .modal[data-v-69ff7208]{color:var(--color-body-text)}.modal[data-v-69ff7208]{width:100%;max-width:48rem;border-radius:1.5rem;overflow:hidden;transform:translateY(2.5rem);transition:all .5s ease-in-out;opacity:0;box-shadow:0 0 0 100vmax #0a0a0a80;background-color:var(--color-parent-bg);margin:auto}@media(prefers-reduced-motion){.modal[data-v-69ff7208]{transition:none}}.modal[data-v-69ff7208]::backdrop{background-color:transparent}.modal.open[data-v-69ff7208]{transform:translateY(0);opacity:1;display:block}.modal.minimized[data-v-69ff7208]{width:100%;margin-bottom:1.25rem;border:1px solid #e5e7eb;animation:minimizedAnimation-69ff7208 1.3s forwards}@media(prefers-reduced-motion){.modal.minimized[data-v-69ff7208]{animation:none}}.modal.minimized .inner[data-v-69ff7208]{overflow-y:hidden}.modal.minimized .inner .header[data-v-69ff7208]{padding:1rem;overflow-y:hidden}.modal.minimized .inner .header .title[data-v-69ff7208-s]{margin-top:1rem;font-size:1rem;line-height:1.5rem}.modal.maximized[data-v-69ff7208]{animation:maximizedAnimation-69ff7208 1.3s forwards}@media(prefers-reduced-motion){.modal.maximized[data-v-69ff7208]{animation:none}}.modal.fullscreen .inner[data-v-69ff7208]{height:100%;min-height:0;overflow-y:auto}.modal.fullscreen .inner .header[data-v-69ff7208]{padding:2rem 1rem;border-top-left-radius:1rem;border-top-right-radius:1rem;justify-content:flex-start}.modal.fullscreen .inner .content[data-v-69ff7208]{padding:0 0 .5rem}.modal.fullscreen .inner .footer[data-v-69ff7208]{margin-top:auto;box-shadow:0 10px 15px #0000001a}@media screen and (min-width:640px){.modal.fullscreen .inner .footer[data-v-69ff7208]{margin-inline:5.75rem;border-radius:1rem;margin-bottom:1.25rem}}.modal.fullscreen:not(.minimized)[data-v-69ff7208]{height:calc(100vh - 3.5rem);margin-top:3.5rem;max-width:100%;overflow:visible;border-bottom-left-radius:0;border-bottom-right-radius:0}@media screen and (min-width:640px){.modal.fullscreen:not(.minimized) .header[data-v-69ff7208],.modal.fullscreen:not(.minimized) .content[data-v-69ff7208]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen:not(.minimized)[data-v-69ff7208]:modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-69ff7208]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-69ff7208]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-69ff7208]{width:100%;background-color:#f9fafb}.modal:not(.fullscreen) .footer.footer-shadow[data-v-69ff7208]{filter:drop-shadow(0 -1px 2px rgba(0,0,0,.1)) drop-shadow(0 -1px 1px rgba(0,0,0,.06))}.dark :is(.modal:not(.fullscreen) .footer)[data-v-69ff7208]{background-color:var(--color-child)}.modal.persistent-animation[data-v-69ff7208]{animation:horizontal-shaking-69ff7208 .3s ease-in-out}.modal .actions[data-v-69ff7208]{position:absolute;top:-3.5rem;width:100%;height:3.5rem;display:flex;justify-content:flex-end;align-items:center;padding:0 .5625rem}.modal .actions .minimize[data-v-69ff7208],.modal .actions .close[data-v-69ff7208]{font-size:.875rem;line-height:1.25rem;padding:0 .9375rem;color:#fff}.modal .inner[data-v-69ff7208]{display:flex;flex-direction:column;min-height:fit-content}.modal .inner .header[data-v-69ff7208]{display:flex;align-items:center;background-color:var(--color-parent-bg)}.modal .inner .header.header-shadow[data-v-69ff7208]{filter:drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))}.modal .inner .header>.close[data-v-69ff7208]{margin-left:auto}.modal .inner .header>.close[data-v-69ff7208]:focus-visible{background-color:var(--color-secondary-hover)}.modal .inner .header .minimized-actions[data-v-69ff7208]{display:flex;flex-direction:column;gap:.5rem;margin-left:auto}.modal .inner .title[data-v-69ff7208],.modal .inner.title[data-v-69ff7208-s]{font-weight:700;font-size:1.25rem}.modal .inner .content[data-v-69ff7208]{padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem;overflow-y:auto}.modal .inner .content .loader[data-v-69ff7208]{margin:0 auto;width:2.5rem;height:2.5rem}.modal .inner .footer[data-v-69ff7208]{display:flex;gap:.5rem;justify-content:center;padding:1.5rem 1rem;z-index:10;background-color:var(--color-child)}.dark :is(.modal .inner .footer)[data-v-69ff7208]{background-color:var(--color-child)}.confirm-modal[data-v-8e75fc96]{max-width:var(--container-lg, 32rem)}.confirm-modal .indicator-icon[data-v-8e75fc96]{margin-inline:auto;width:fit-content;border-radius:50%;padding:.75rem}.confirm-modal .indicator-icon.danger[data-v-8e75fc96]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.confirm-modal .indicator-icon.info[data-v-8e75fc96]{background-color:var(--color-info-soft, oklch(96.221% .019 240.333));color:var(--color-info, oklch(62.538% .1804 219.935))}.confirm-modal .indicator-icon .icon[data-v-8e75fc96]{height:2rem;width:2rem}.confirm-modal .title[data-v-8e75fc96]{margin-top:1rem;margin-bottom:.75rem!important;text-align:center}.confirm-modal .message[data-v-8e75fc96]{text-align:center}.confirm-modal[data-v-8e75fc96] .content{padding-inline:2rem!important}.confirm-modal[data-v-8e75fc96] .content p{margin:0}.summary-group[data-v-c6727d6f]{padding-block:.5rem}.summary-group .header[data-v-c6727d6f]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.summary-group .header.increase-margin[data-v-c6727d6f]{margin-bottom:.5rem}.summary-group .header.expandable[data-v-c6727d6f]{cursor:pointer}.summary-group .header .name[data-v-c6727d6f]{overflow:hidden;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);text-overflow:ellipsis;white-space:nowrap}.summary-group .header[data-v-c6727d6f] .icon{height:1.25rem;width:1.25rem}.summary-group .items[data-v-c6727d6f]{display:flex;flex-direction:column;gap:.5rem;border-left-style:solid;border-left-width:4px;padding-block:.5rem;padding-left:1rem;animation:fadeIn-c6727d6f .3s}.grow-enter-active[data-v-c6727d6f],.grow-leave-active[data-v-c6727d6f]{transition-property:all;transition-duration:.3s;transition-timing-function:var(--default-transition-timing-function)}.grow-enter-from[data-v-c6727d6f],.grow-leave-to[data-v-c6727d6f]{height:0!important;padding-block:0!important;opacity:0%!important}@keyframes fadeIn-c6727d6f{0%{opacity:0}to{opacity:1}}.summary-item[data-v-477cd514]{overflow:hidden;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));text-overflow:ellipsis;white-space:nowrap}.summary-item [data-v-477cd514] .summary-link:hover{text-decoration-line:underline}.action-button[data-v-4ce2ffa6]{position:relative;margin:0;display:inline-flex;height:3.5rem;width:3.5rem;cursor:pointer;align-items:center;justify-content:center;border-radius:50%;border-style:none;background-color:var(--color-primary, oklch(54.615% .2152 262.881));padding:0;outline-style:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(forced-colors:active){.action-button[data-v-4ce2ffa6]{outline:2px solid transparent;outline-offset:2px}}@media(hover:hover){.action-button[data-v-4ce2ffa6]:hover{background-color:var(--color-primary-hover, oklch(48.82% .2172 264.376))}}.action-button[data-v-4ce2ffa6]:focus{background-color:var(--color-primary-hover, oklch(48.82% .2172 264.376))}.action-button[data-v-4ce2ffa6]:active{background-color:var(--color-primary-active, oklch(57.034% .1951 261.584))}.action-button[disabled][data-v-4ce2ffa6]{pointer-events:none;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.action-button[disabled] .icon[data-v-4ce2ffa6]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.action-button.floating[data-v-4ce2ffa6]{position:fixed;right:0;bottom:0;z-index:50;margin-right:1.5rem;margin-bottom:1.5rem;box-shadow:var(--shadow-menu-large)}.action-button .icon[data-v-4ce2ffa6]{color:var(--color-on-primary, oklch(100% 0 0))}.copy-button[data-v-da33eefe]{display:inline-flex;flex-direction:row;align-items:center;gap:.5rem;border-radius:var(--radius-lg, .5rem);background-color:var(--color-accent-soft, oklch(96.221% .019 240.333));padding-inline:.5rem;padding-block:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--text-sm--line-height, calc(1.25 / .875));font-weight:var(--font-weight-normal, 400);color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(hover:hover){.copy-button[data-v-da33eefe]:hover{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}}.copy-button[data-v-da33eefe]:active{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.copy-button .micro-icon[data-v-da33eefe] svg{stroke-width:2}.check-icon[data-v-da33eefe]{color:var(--color-success-text, oklch(52.73% .1371 150.069))}.copy-icon-button[data-v-da33eefe]{width:fit-content;border-radius:var(--radius-lg, .5rem)!important}.copy-icon-button.small[data-v-da33eefe]{height:2rem;padding-inline:.5rem}.copy-icon-button.small .micro-icon[data-v-da33eefe] svg{stroke-width:2}.copy-icon-button.medium[data-v-da33eefe]{height:2.5rem;padding-inline:.625rem}.copy-icon-button.medium .mini-icon[data-v-da33eefe]{height:1.25rem;width:1.25rem}.copy-icon-button.large[data-v-da33eefe]{height:3rem;padding-inline:.75rem}.segment[data-v-3ddcfe25]{z-index:10;overflow-wrap:break-word}@media screen and (max-width:640px){.segment[data-v-3ddcfe25]{word-break:break-all}}.segment:not(.button-segment).active[data-v-3ddcfe25]{color:var(--color-tertiary-text, oklch(54.615% .2152 262.881))}.segment.button-segment[data-v-3ddcfe25]{font-weight:var(--font-weight-normal, 400)}.segment.button-segment.active[data-v-3ddcfe25]{border:2px solid var(--color-accent, oklch(54.615% .2152 262.881));padding-inline:.6875rem}.segmented-control.default[data-v-251406ea]{position:relative;display:grid;grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;gap:.25rem;border-radius:var(--radius-xl, .75rem);background-color:var(--color-parent-bg, oklch(100% 0 0));padding:.25rem}.segmented-control.default .highlight[data-v-251406ea]{pointer-events:none;position:absolute;inset-inline-start:.25rem;top:.25rem;bottom:.25rem;margin-inline-start:0!important;border-radius:var(--radius-lg, .5rem);background-color:var(--color-child, oklch(100% 0 0));box-shadow:var(--shadow-menu);transition-duration:.2s}.segmented-control.buttons[data-v-251406ea]{display:flex;flex-direction:row;gap:.5rem}.switch[data-v-42e36626]{-webkit-appearance:none;appearance:none;background-color:var(--color-control-track-off, oklch(92.48% .0027 264.541));position:relative;display:inline-flex;height:1.5rem;width:2.75rem;flex-shrink:0;align-items:center;justify-content:flex-start;padding:0;cursor:pointer;border-radius:9999px;border:2px solid transparent;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;outline:none}.switch[data-v-42e36626]:focus{box-shadow:#0000 0 0,#0000 0 0,#fff 0 0 0 2px,#2563eb 0 0 0 4px,#0000 0 0}.switch.enabled[data-v-42e36626]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))!important}.switch:disabled[data-v-42e36626]{filter:grayscale(1);cursor:not-allowed}.switch:disabled .dot[data-v-42e36626]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important}.switch .dot[data-v-42e36626]{pointer-events:none;display:inline-block;height:1.25rem;width:1.25rem;transform:translate(0);border-radius:9999px;background-color:var(--color-on-accent, oklch(100% 0 0));box-shadow:var(--shadow-container);transition:transform .2s ease-in-out,background-color .2s ease-in-out}.switch .dot.enabled[data-v-42e36626]{transform:translate(1.25rem)}.theme-toggle[data-v-3e1c56fe]{display:flex;align-items:center;gap:.5rem}.theme-toggle .light[data-v-3e1c56fe],.theme-toggle .dark[data-v-3e1c56fe]{color:#fde047}.accordion-item[data-v-17b37b7b]{width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-container);overflow:hidden}@media(min-width:640px){.accordion-item[data-v-17b37b7b]{border-radius:1rem}}.accordion-item .header[data-v-17b37b7b]{width:100%;display:flex;align-items:center;padding:1rem;background-color:inherit;border:none}.accordion-item .header[data-v-17b37b7b]:focus{background-color:var(--color-surface-subtle, oklch(100% 0 0))}@media(min-width:640px){.accordion-item .header[data-v-17b37b7b]{padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.accordion-item .header .state-indicator[data-v-17b37b7b]{margin-left:auto;padding-left:.5rem}.accordion-item .header .state-indicator .icon[data-v-17b37b7b]{color:var(--color-accent, oklch(54.615% .2152 262.881));transform:rotate(0);transition:transform .3s linear}.accordion-item .header .state-indicator.open[data-v-17b37b7b]{transform:rotate(180deg);padding-left:0;padding-right:.5rem}.accordion-item .header .title[data-v-17b37b7b],.accordion-item .header .title[data-v-17b37b7b-s]{text-align:left;font-weight:500;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.accordion-item .content[data-v-17b37b7b]{padding-bottom:1.5rem;padding-top:0;padding-left:1rem;padding-right:1rem}@media(min-width:640px){.accordion-item .content[data-v-17b37b7b]{padding-left:1.5rem;padding-right:1.5rem}}.grow-enter-active[data-v-17b37b7b],.grow-leave-active[data-v-17b37b7b]{transition:all .3s ease-in-out}.fade-enter-active[data-v-17b37b7b],.fade-leave-active[data-v-17b37b7b]{transition:all .1s ease-in-out}.grow-enter-from[data-v-17b37b7b],.grow-leave-to[data-v-17b37b7b]{height:0!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-17b37b7b],.fade-leave-to[data-v-17b37b7b]{opacity:0;height:0!important}.accordion[data-v-25a8f65e]{display:flex;flex-direction:column;gap:.125rem}@media(min-width:640px){.accordion[data-v-25a8f65e]{gap:.5rem}}.amount-input-container[data-v-44d789fb]{display:flex;flex-direction:column}.amount-input[data-v-44d789fb]{display:flex;height:2.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.amount-input.small[data-v-44d789fb]{height:2rem}.amount-input.small .minus[data-v-44d789fb],.amount-input.small .plus[data-v-44d789fb]{width:2rem}.input[data-v-44d789fb],.minus[data-v-44d789fb],.plus[data-v-44d789fb]{border-width:1px;border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.input[data-v-44d789fb]:disabled,.minus[data-v-44d789fb]:disabled,.plus[data-v-44d789fb]:disabled{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.input[data-v-44d789fb]:disabled{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.minus[data-v-44d789fb]:disabled,.plus[data-v-44d789fb]:disabled{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.minus[data-v-44d789fb]:hover:not(:disabled),.plus[data-v-44d789fb]:hover:not(:disabled){z-index:20;border-color:var(--color-border-strong, oklch(73.455% .008 264.608));background-color:var(--color-surface-subtle, oklch(100% 0 0))}.minus[data-v-44d789fb]:focus:not(:disabled),.plus[data-v-44d789fb]:focus:not(:disabled){z-index:20;border-color:var(--color-border-strong, oklch(73.455% .008 264.608));background-color:var(--color-surface-subtle, oklch(100% 0 0))}.input[data-v-44d789fb]{z-index:10;margin-inline:-.0625rem;width:3.5rem;background-color:var(--color-field-background, oklch(100% 0 0));text-align:center;font-weight:var(--font-weight-normal, 400)}.input[data-v-44d789fb]:hover:not(:disabled):not(.has-error){border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.input[data-v-44d789fb]:focus:not(:disabled){border-width:2px}.input[data-v-44d789fb]:focus-visible{outline-style:none}@media(forced-colors:active){.input[data-v-44d789fb]:focus-visible{outline:2px solid transparent;outline-offset:2px}}.input[data-v-44d789fb]:focus:not(:disabled):not(.has-error){border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.input.has-error[data-v-44d789fb],.input.has-error[data-v-44d789fb]:focus{border-color:var(--color-danger, oklch(61.535% .2075 25.224))}.minus[data-v-44d789fb],.plus[data-v-44d789fb]{display:flex;width:2.5rem;align-items:center;justify-content:center;background-color:var(--color-field-background, oklch(100% 0 0))}.minus[data-v-44d789fb]{border-top-left-radius:var(--radius-lg, .5rem);border-bottom-left-radius:var(--radius-lg, .5rem)}.plus[data-v-44d789fb]{border-top-right-radius:var(--radius-lg, .5rem);border-bottom-right-radius:var(--radius-lg, .5rem)}.input[data-v-44d789fb]::-webkit-outer-spin-button,.input[data-v-44d789fb]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-44d789fb]{-moz-appearance:textfield}.error[data-v-44d789fb]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.status[data-v-aa0d87a4]{background-color:var(--color-surface-disabled-subtle, oklch(98.498% .0018 247.859));height:1.5rem;width:1.5rem;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.dark .status[data-v-aa0d87a4]{background-color:var(--color-field-background, oklch(100% 0 0))}.status.done[data-v-aa0d87a4]{background-color:var(--color-success-soft, oklch(98.135% .0124 149.917))}.dark .status.done[data-v-aa0d87a4]{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.done .micro-icon[data-v-aa0d87a4]{color:var(--color-success, oklch(55.106% .1432 149.926))}.dark .done .micro-icon[data-v-aa0d87a4]{color:var(--color-on-success, oklch(100% 0 0))}.status.attention[data-v-aa0d87a4]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.attention .micro-icon[data-v-aa0d87a4]{color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.dark .attention .micro-icon[data-v-aa0d87a4]{color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.alert[data-v-bd0367f1]{padding:1rem;border-radius:.5rem;display:flex}.alert.error[data-v-bd0367f1]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.alert.error .icon .mini-icon[data-v-bd0367f1]{color:var(--color-danger, oklch(61.535% .2075 25.224))}.alert.error .content .title[data-v-bd0367f1]{color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.alert.error .content .description[data-v-bd0367f1]{color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.alert.warning[data-v-bd0367f1]{background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.alert.warning .icon .mini-icon[data-v-bd0367f1]{color:var(--color-warning, oklch(58.272% .162 45.983))}.alert.warning .content .title[data-v-bd0367f1]{color:var(--color-warning-strong, oklch(40.839% .1165 38.172))}.alert.warning .content .description[data-v-bd0367f1]{color:var(--color-warning-text, oklch(55.343% .1739 38.402))}.alert.success[data-v-bd0367f1]{background-color:var(--color-success-soft, oklch(98.135% .0124 149.917))}.alert.success .icon .mini-icon[data-v-bd0367f1]{color:var(--color-success, oklch(55.106% .1432 149.926))}.alert.success .content .title[data-v-bd0367f1]{color:var(--color-success-strong, oklch(39.253% .0896 152.535))}.alert.success .content .description[data-v-bd0367f1]{color:var(--color-success-text, oklch(52.73% .1371 150.069))}.alert.info[data-v-bd0367f1]{background-color:var(--color-info-soft, oklch(96.221% .019 240.333))}.alert.info .icon .mini-icon[data-v-bd0367f1]{color:var(--color-info, oklch(62.538% .1804 219.935))}.alert.info .content .title[data-v-bd0367f1]{color:var(--color-info-strong, oklch(30.152% .1159 260.405))}.alert.info .content .description[data-v-bd0367f1]{color:var(--color-info-text, oklch(48.727% .2427 215.855))}.alert .icon[data-v-bd0367f1]{margin-right:.75rem}.alert .content[data-v-bd0367f1]{display:flex;flex-direction:column;font-size:.875rem;line-height:1.25rem;justify-content:center;gap:.25rem}.alert .content .title[data-v-bd0367f1]{font-weight:500}.configurator-step.simple[data-v-cf6c5c3d]{width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-container);overflow:hidden}@media(min-width:640px){.configurator-step.simple[data-v-cf6c5c3d]{border-radius:1rem}}.configurator-step.simple .content[data-v-cf6c5c3d]{padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0}@media(min-width:640px){.configurator-step.simple .content[data-v-cf6c5c3d]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header[data-v-cf6c5c3d]{display:flex;width:100%;align-items:flex-start;padding:1rem;background-color:inherit;border:none}@media(min-width:640px){.configurator-step.simple .header[data-v-cf6c5c3d]{align-items:center;padding-left:1.5rem;padding-right:1.5rem;min-height:4.5rem}}.configurator-step.simple .header .title[data-v-cf6c5c3d]{text-align:left;font-weight:500;color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(min-width:640px){.configurator-step.simple .header .title[data-v-cf6c5c3d]{white-space:nowrap}}.configurator-step.simple .inner[data-v-cf6c5c3d]{display:flex;flex-direction:column;row-gap:1rem;flex-shrink:1}@media(min-width:640px){.configurator-step.simple .inner[data-v-cf6c5c3d]{flex-direction:row;align-items:center}}.configurator-step.simple .measurements-form[data-v-cf6c5c3d]{gap:1rem;display:flex;flex-direction:column}.configurator-step.simple .measurements-form .submit-button[data-v-cf6c5c3d]{width:100%}.configurator-step.simple .measurement-inputs[data-v-cf6c5c3d]{display:flex;gap:.625rem;align-items:center;flex-wrap:wrap}@media(min-width:640px){.configurator-step.simple .measurement-inputs[data-v-cf6c5c3d]{flex-wrap:nowrap}}.configurator-step.simple .measurement-inputs.has-errors[data-v-cf6c5c3d]{align-items:flex-start!important}.configurator-step.simple .measurement-inputs.has-errors .separator[data-v-cf6c5c3d]{margin-top:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.configurator-step.simple .total[data-v-cf6c5c3d]{margin-left:auto;flex-grow:1;color:var(--color-text-disabled, oklch(51.786% .0108 264.705));text-align:right}.configurator-step.simple .status-text[data-v-cf6c5c3d]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));width:100%;text-align:right}@media(min-width:640px){.configurator-step.simple .status-text[data-v-cf6c5c3d]{text-align:left}}.configurator-step.simple[data-v-cf6c5c3d] .input::-webkit-outer-spin-button,.configurator-step.simple[data-v-cf6c5c3d] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple[data-v-cf6c5c3d] .input[type=number]{-moz-appearance:textfield}.measurement-inputs[data-v-cf6c5c3d] .measurement-input{max-width:7rem;width:100%}img[data-v-a966f45d]{max-width:100%;display:block}.image-wrapper.has-caption[data-v-a966f45d]{display:flex;flex-direction:column;align-items:center;gap:.5rem}.image-wrapper.has-caption figcaption[data-v-a966f45d]{font-size:.875rem;font-style:italic}.image-wrapper[data-v-a966f45d]{width:100%}.image-inner[data-v-a966f45d]{width:fit-content}.image-inner[data-v-a966f45d],.image-wrapper[data-v-a966f45d]{height:100%}.image[data-v-a966f45d]{max-height:100%}.image.rounded-4[data-v-a966f45d],.skeleton.rounded-4[data-v-a966f45d]{border-radius:.25rem}.image.rounded-8[data-v-a966f45d],.skeleton.rounded-8[data-v-a966f45d]{border-radius:.5rem}.image.rounded-16[data-v-a966f45d],.skeleton.rounded-16[data-v-a966f45d]{border-radius:1rem}.image.rounded-100[data-v-a966f45d],.skeleton.rounded-100[data-v-a966f45d]{border-radius:50%}.image-wrapper .skeleton[data-v-a966f45d]{width:100%;height:100%;background-color:var(--color-border-default, oklch(86.277% .0063 264.565));animation:var(--animate-pulse)}.labels[data-v-caa4e54a]{position:absolute;top:.75rem;right:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end;z-index:10}.dark .labels[data-v-caa4e54a]{--color-tag-info-soft-bg: oklch(93.192% .0316 255.585);--color-tag-info-soft-text: oklch(48.82% .2172 264.376);--color-tag-success-soft-bg: oklch(96.241% .0434 156.743);--color-tag-success-soft-text: oklch(52.73% .1371 150.069);--color-tag-neutral-soft-bg: oklch(96.696% .0029 264.542);--color-tag-neutral-soft-text: oklch(37.293% .0306 259.733);--color-tag-warning-orange-soft-bg: oklch(95.42% .0372 75.164);--color-tag-warning-orange-soft-text: oklch(55.343% .1739 38.402);--color-tag-accent-soft-bg: oklch(94.643% .0327 307.174);--color-tag-accent-soft-text: oklch(49.552% .2369 301.924);--color-tag-danger-soft-bg: oklch(93.564% .0309 17.717);--color-tag-danger-soft-text: oklch(50.542% .1905 27.518);--color-tag-warning-yellow-soft-bg: oklch(97.292% .0693 103.193);--color-tag-warning-yellow-soft-text: oklch(55.378% .1207 66.442)}[data-v-caa4e54a] .image{object-fit:cover;height:100%;width:100%}.amount[data-v-caa4e54a]{display:flex;flex-direction:column;align-items:center;gap:.5rem;margin-top:2.75rem;color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.amount span[data-v-caa4e54a]{font-size:.875rem;line-height:1.25rem}.information[data-v-95b1dd81],.custom-value[data-v-95b1dd81]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;line-height:1rem}.custom-value[data-v-95b1dd81]{gap:1rem}.custom-value[data-v-95b1dd81] .input-container,.custom-value[data-v-95b1dd81] .button{max-width:7.25rem;width:100%}.information .delivery[data-v-95b1dd81]{color:var(--color-success-text, oklch(52.73% .1371 150.069));display:flex;gap:.25rem;align-items:center}.information .delivery .icon[data-v-95b1dd81]{height:1rem;width:1rem}.information .delivery .icon[data-v-95b1dd81] svg{stroke-width:2}.information .delivery .delivery-time[data-v-95b1dd81]{font-weight:500}.information .price[data-v-95b1dd81]{color:var(--color-danger-text, oklch(57.004% .2035 26.111));margin-left:auto}.dark .information .price[data-v-95b1dd81]{color:var(--color-danger-muted, oklch(.808 .114 19.571))}.price .price-per[data-v-95b1dd81]{color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.not-available[data-v-95b1dd81]{color:var(--color-danger-text, oklch(57.004% .2035 26.111));display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem}.option-card[data-v-bd75f725]{outline:1px solid var(--color-field-border, oklch(86.277% .0063 264.565));border-radius:.5rem;width:17.5rem;cursor:pointer;background-color:var(--color-surface-raised-alt, oklch(100% 0 0));min-height:16.5rem;display:flex;justify-content:center;overflow:hidden}.option-card[data-v-bd75f725]:hover,.option-card[data-v-bd75f725]:focus{box-shadow:var(--shadow-card-hover)}.option-card[data-v-bd75f725]:focus:not(.selected):not(.disabled){outline:3px dotted var(--color-accent, oklch(54.615% .2152 262.881))}.option-card.selected[data-v-bd75f725]{outline:3px solid var(--color-accent, oklch(54.615% .2152 262.881))!important}.option-card.disabled[data-v-bd75f725]{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));cursor:default}.option-card.disabled[data-v-bd75f725]:hover{box-shadow:none}.option-card.disabled .content[data-v-bd75f725] *{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))!important}.option-card.disabled .header[data-v-bd75f725],.option-card.disabled .content[data-v-bd75f725]{filter:grayscale(100%)}.option-card .inner[data-v-bd75f725]{width:100%}.no-option[data-v-bd75f725]{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.no-option[data-v-bd75f725] .icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));height:3.5rem;width:3.5rem;margin-bottom:1rem}.no-option h3[data-v-bd75f725]{font-size:.875rem;line-height:1.25rem;font-weight:400}.header[data-v-bd75f725]{height:10.25rem;width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));position:relative;border-radius:.5rem .5rem 0 0;display:flex;justify-content:center}.option-card .content[data-v-bd75f725]{padding:1rem 1rem .75rem}.content .title[data-v-bd75f725]{font-weight:500;padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.content .description[data-v-bd75f725]{font-size:.75rem;line-height:1rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.option-card .footer[data-v-bd75f725]{padding:0 1rem 1rem;font-size:.875rem;line-height:1.25rem}.overlay[data-v-66d42f70]{position:absolute;z-index:10;width:100%;height:100%;inset:0;pointer-events:auto}.overlay.fixed[data-v-66d42f70]{position:fixed!important;z-index:1000}.option-step-container[data-v-16221ffd]{position:relative}.configurator-step.options[data-v-16221ffd] .content{padding-right:0}@media(min-width:640px){.configurator-step.options[data-v-16221ffd] .content{padding-right:1.5rem}}.configurator-step.options[data-v-16221ffd] .header .state-indicator{display:none}@media(min-width:640px){.configurator-step.options[data-v-16221ffd] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-16221ffd]{display:flex;gap:1rem;flex-wrap:wrap;padding-top:.25rem;padding-bottom:.25rem;justify-content:center}@media(min-width:640px){.configurator-step.options .option-container[data-v-16221ffd]{justify-content:flex-start}}.option-container .option[data-v-16221ffd]{position:relative;display:flex;min-width:auto}@media(min-width:640px){.option-container.show-all[data-v-16221ffd]{flex-wrap:wrap}.option-container .option[data-v-16221ffd]{min-width:0}.option-container .option[data-v-16221ffd]:last-child{margin-right:0}}.option-container .option[data-v-16221ffd]:last-child{margin-right:1rem}.option.hide[data-v-16221ffd]{display:flex}@media(min-width:640px){.option.hide[data-v-16221ffd]{display:none}}.option .option-card[data-v-16221ffd]{flex-shrink:0}@media(min-width:640px){.option .option-card[data-v-16221ffd]{flex-shrink:1}}.option-container .overlay[data-v-16221ffd]{position:absolute;right:0;bottom:0;width:100%;height:100%;border-radius:.5rem;display:none;align-items:center;justify-content:center;color:var(--color-text-inverse, oklch(100% 0 0));font-size:2.25rem;cursor:pointer}@media(min-width:640px){.option-container .overlay[data-v-16221ffd]{display:flex}}.configurator-step.options .subtitle[data-v-16221ffd]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.configurator-step.options .alert[data-v-16221ffd]{margin-top:1rem;margin-right:1rem}@media(min-width:640px){.configurator-step.options .alert[data-v-16221ffd]{margin-right:0}}.edit-button[data-v-16221ffd]{position:absolute;top:1.25rem;right:3.125rem}.delivery-options[data-v-6eb4b6f9]{width:100%;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-container);padding:1rem;margin-top:.125rem}@media(min-width:640px){.delivery-options[data-v-6eb4b6f9]{border-radius:1rem;margin-top:.5rem}}@media(min-width:768px){.delivery-options[data-v-6eb4b6f9]{padding:1.5rem}}.header[data-v-6eb4b6f9]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-6eb4b6f9]{font-weight:500;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header .hint[data-v-6eb4b6f9]{color:var(--color-text-secondary, oklch(55.1% .023 264.36));display:none;line-height:1.5rem}@media(min-width:768px){.header .hint[data-v-6eb4b6f9]{display:flex}}.content[data-v-6eb4b6f9]{display:flex;flex-direction:column;gap:1rem;flex-wrap:wrap}@media(min-width:768px){.content[data-v-6eb4b6f9]{flex-direction:row;gap:1.5rem}}.content .option[data-v-6eb4b6f9]{display:flex;flex-direction:column;position:relative}.content .option[data-v-6eb4b6f9]:not(.last){border-bottom:1px solid var(--color-divider, oklch(92.48% .0027 264.541));padding-bottom:1rem}@media(min-width:768px){.content .option[data-v-6eb4b6f9]:not(.last){border-bottom:none;padding-bottom:0}}@media(min-width:768px){.content .option[data-v-6eb4b6f9]:not(:first-child){border-left:1px solid var(--color-divider, oklch(92.48% .0027 264.541));padding-left:1.0625rem}}.content .option.hide[data-v-6eb4b6f9]{display:none}.content .option .day[data-v-6eb4b6f9],.content .option .cost[data-v-6eb4b6f9],.content .option .no-cost[data-v-6eb4b6f9]{font-size:.875rem;line-height:1.25rem}.content .option .cost[data-v-6eb4b6f9],.content .option .no-cost[data-v-6eb4b6f9]{position:absolute;top:0;right:0}@media(min-width:768px){.content .option .cost[data-v-6eb4b6f9],.content .option .no-cost[data-v-6eb4b6f9]{position:relative}}.content .option .day[data-v-6eb4b6f9]{margin-bottom:.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));text-transform:capitalize;display:flex;flex-wrap:wrap;gap:.25rem .5rem;align-items:center}.content .option .date[data-v-6eb4b6f9]{font-weight:500;font-size:1.25rem;line-height:1.75rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(min-width:768px){.content .option .date[data-v-6eb4b6f9]{margin-bottom:.75rem}}.content .option .cost[data-v-6eb4b6f9]{color:var(--color-success-text, oklch(52.73% .1371 150.069))}.content .option .no-cost[data-v-6eb4b6f9]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.content .button[data-v-6eb4b6f9]{display:block}@media(min-width:768px){.content .button[data-v-6eb4b6f9]{display:none}}.drawer[data-v-c56d11e1]{background-color:var(--color-surface-page, oklch(100% 0 0));position:fixed;inset:0 auto 0 0;box-shadow:var(--shadow-menu-large);transition:transform .3s var(--default-transition-timing-function);overflow:hidden;color:var(--color-text-primary, oklch(21.049% .032 264.664));max-width:80%;width:auto;height:100vh;min-height:100vh;max-height:100vh}.drawer[data-v-c56d11e1]::backdrop{background-color:color-mix(in oklch,var(--color-overlay-backdrop, color-mix(in oklch, oklch(0% 0 0) 50%, transparent)) calc(var(--drawer-backdrop-opacity, .5) * 100%),transparent);transition:background-color .3s ease}.drawer.no-overlay[data-v-c56d11e1]{z-index:99}.drawer.no-overlay[data-v-c56d11e1]::backdrop{background-color:transparent}.drawer.full-width[data-v-c56d11e1]{width:100%;max-width:100%}.drawer.left[data-v-c56d11e1]{left:0;right:auto;transform:translate(-100%)}.drawer.left.open[data-v-c56d11e1]{transform:translate(0)}.drawer.right[data-v-c56d11e1]{left:auto;right:0;transform:translate(100%)}.drawer.right.open[data-v-c56d11e1]{transform:translate(0)}.drawer.bottom[data-v-c56d11e1]{inset:auto 0 0;width:100%;max-width:100%;min-height:auto;height:auto;max-height:min(90vh,100dvh);display:flex;flex-direction:column;border-top-left-radius:.75rem;border-top-right-radius:.75rem;transform:translateY(100%)}.drawer.bottom.open[data-v-c56d11e1]{transform:translateY(0)}.drawer.bottom .wrapper[data-v-c56d11e1]{height:auto;max-height:inherit}.drawer.bottom .header[data-v-c56d11e1],.drawer.bottom .content[data-v-c56d11e1]{padding:1rem}.drawer.bottom .content[data-v-c56d11e1]{padding-top:0;max-height:inherit;overflow-y:auto}.drawer .wrapper[data-v-c56d11e1]{position:relative;height:100%;overflow:hidden;display:flex;flex-direction:column}.drawer .header[data-v-c56d11e1]{display:flex;justify-content:space-between;align-items:center;gap:1.5rem;padding:1.25rem}.drawer .header .title[data-v-c56d11e1]{font-size:1.25rem;line-height:1.75rem}.drawer .header .close[data-v-c56d11e1]{transform:translate(.625rem)}.drawer .content[data-v-c56d11e1]{padding-left:1.25rem;padding-right:1.25rem;flex-grow:1;overflow-y:auto}.form-row[data-v-7a247590]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem;padding-block:1.5rem}@media(min-width:48rem){.form-row[data-v-7a247590]{flex-direction:row}}@media(min-width:48rem){.form-row[data-v-7a247590]{gap:5.25rem}}@media(min-width:48rem){.form-row[data-v-7a247590]{padding-block:2.5rem}}.form-row[data-v-7a247590]:first-child{padding-top:1.5rem}.form-row .label[data-v-7a247590]{width:100%}@media(min-width:48rem){.form-row .label[data-v-7a247590]{width:18.75rem;min-width:18.75rem}}.form-row .label.label--empty[data-v-7a247590]{display:none}@media(min-width:48rem){.form-row .label.label--empty[data-v-7a247590]{display:block}}.form-row .label .title[data-v-7a247590]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-semibold, 600)}.form-row .label .subtitle[data-v-7a247590]{margin-top:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.form-row .fields[data-v-7a247590]{display:flex;flex-direction:column;gap:1.25rem}.form-grid[data-v-940e9744]{width:100%}:where(.form-grid[data-v-940e9744]>:not(:last-child)){border-bottom-style:solid!important;border-top-style:solid!important;border-top-width:0!important;border-bottom-width:.0625rem!important;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))!important}.form-grid .actions[data-v-940e9744]{padding-block:1.5rem}.form-grid .actions[data-v-940e9744] .fields{display:flex;flex-direction:row;gap:.75rem}.sub-heading[data-v-857dd264]{padding:1rem 0}.actions[data-v-857dd264]{width:100%;display:flex;justify-content:flex-end;gap:1rem;padding:1rem 0}.configurator[data-v-0c2ac0e3] .configurator-step .header{overflow:hidden;gap:1rem}.configurator[data-v-0c2ac0e3] .configurator-step .header .title{margin-right:.5rem;text-overflow:ellipsis;overflow:hidden;display:flex;align-items:center;gap:.5rem}.configurator[data-v-0c2ac0e3] .configurator-step .header .title .mini-icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}@media(min-width:640px){.configurator[data-v-0c2ac0e3] .configurator-step .header .title{max-width:16rem;width:16rem;white-space:nowrap}}.configurator-step[data-v-0c2ac0e3] .subtitle{margin-left:auto;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:right}.configurator-step[data-v-0c2ac0e3] .edit-button{margin-left:auto}@media(min-width:640px){.configurator-step[data-v-0c2ac0e3] .subtitle{margin-left:0}}.loader[data-v-0c2ac0e3]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}.reference-input[data-v-b34c7c35] .icon{color:var(--color-accent, oklch(54.615% .2152 262.881))}[data-v-b1a6dd1f] .header{display:flex;flex-wrap:wrap;gap:0}@media(min-width:640px){[data-v-b1a6dd1f] .header{gap:1.5rem}}.header .product-image[data-v-b1a6dd1f]{height:auto;width:4.75rem!important}@media(min-width:640px){.header .product-image[data-v-b1a6dd1f]{width:8.5rem!important}}.header .product-image .image[data-v-b1a6dd1f]{height:4.75rem;width:4.75rem}@media(min-width:640px){.header .product-image .image[data-v-b1a6dd1f]{width:8.5rem!important}}.header .title[data-v-b1a6dd1f]{margin-bottom:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header .subtitle[data-v-b1a6dd1f]{display:flex;gap:.625rem;color:var(--color-text-secondary, oklch(55.1% .023 264.36));font-size:.875rem;line-height:1.25rem;margin-bottom:1rem}.header .subtitle .icon[data-v-b1a6dd1f]{color:var(--color-success, oklch(55.106% .1432 149.926))}.header .reference[data-v-b1a6dd1f]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));font-size:.875rem;line-height:1.25rem}.header .reference .value[data-v-b1a6dd1f]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header .inner[data-v-b1a6dd1f]{flex-shrink:1;max-width:calc(100% - 4.75rem)}@media(min-width:640px){.header .inner[data-v-b1a6dd1f]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-b1a6dd1f]{display:none;max-width:30rem}@media(min-width:640px){.header .inner .reference-input[data-v-b1a6dd1f]{display:flex}}.header>.reference-input[data-v-b1a6dd1f]{display:block;width:100%}@media(min-width:640px){.header>.reference-input[data-v-b1a6dd1f]{display:none}}.footer-wrapper[data-v-b1a6dd1f]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:.5rem;flex-wrap:wrap}.footer-wrapper .specifications[data-v-b1a6dd1f]{display:none}@media(min-width:640px){.footer-wrapper .specifications[data-v-b1a6dd1f]{display:flex;width:100%}}@media(min-width:1024px){.footer-wrapper .specifications[data-v-b1a6dd1f]{width:auto}}.footer-wrapper .right[data-v-b1a6dd1f]{display:flex;gap:1.25rem;align-items:center;justify-content:space-between;width:100%;margin-left:auto}@media(min-width:1024px){.footer-wrapper .right[data-v-b1a6dd1f]{width:auto;justify-content:normal}}.footer-wrapper .right .add-to-cart[data-v-b1a6dd1f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer-wrapper .right .add-to-cart .desktop[data-v-b1a6dd1f]{display:none}@media(min-width:768px){.footer-wrapper .right .add-to-cart .desktop[data-v-b1a6dd1f]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-b1a6dd1f]{display:flex}@media(min-width:768px){.footer-wrapper .right .add-to-cart .mobile[data-v-b1a6dd1f]{display:none}}.footer-wrapper .right .sub-total[data-v-b1a6dd1f]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.footer-wrapper .right .sub-total .sub-price[data-v-b1a6dd1f]{color:var(--color-text-secondary, oklch(55.1% .023 264.36));font-size:.75rem;line-height:1.2rem!important;max-width:250px;width:100%;display:flex;gap:.5rem;flex-wrap:wrap}@media(min-width:640px){.footer-wrapper .right .sub-total .sub-price[data-v-b1a6dd1f]{font-size:.875rem;line-height:1.25rem}}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-b1a6dd1f],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-b1a6dd1f]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-b1a6dd1f]{color:var(--color-text-primary, oklch(21.049% .032 264.664));font-size:.75rem;line-height:1rem}.footer-wrapper .right .sub-total .price[data-v-b1a6dd1f]{font-size:1.875rem;line-height:2.25rem;font-weight:700;color:var(--color-danger, oklch(61.535% .2075 25.224));display:flex;width:100%}@media(min-width:1024px){.footer-wrapper .right .sub-total .price[data-v-b1a6dd1f]{justify-content:flex-end}}.footer-wrapper .right .sub-total .price .label[data-v-b1a6dd1f]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-b1a6dd1f]{top:-.3em;font-size:1.3rem;position:relative}.footer-wrapper .right .sub-total .price.small[data-v-b1a6dd1f]{font-size:1.2rem;line-height:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-b1a6dd1f]{font-size:1.2rem;top:0}@media(min-width:640px){.footer-wrapper .right .sub-total .price.small[data-v-b1a6dd1f]{font-size:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-b1a6dd1f]{font-size:1.5rem;top:-.1}}[data-v-db1f5349] .image-wrapper{height:10.25rem}[data-v-db1f5349] .image-wrapper .image{height:100%;width:100%;object-fit:cover}[data-v-db1f5349] .image-wrapper.dense{height:unset;width:auto;flex-shrink:0}[data-v-db1f5349] .image-wrapper.disabled{filter:grayscale(100%)}.card[data-v-db1f5349]{display:flex;width:17.625rem;cursor:pointer;flex-direction:column;overflow:auto;border-radius:var(--radius-xl, .75rem);background-color:var(--color-child, oklch(100% 0 0))}.card:not(.passive)[data-v-db1f5349]:hover,.card:not(.passive)[data-v-db1f5349]:focus{box-shadow:var(--shadow-card-hover)}.card[data-v-db1f5349]:not(.flat){border:.0625rem solid var(--color-border-subtle, oklch(92.789% .0041 286.32))}.card.passive[data-v-db1f5349]{cursor:default}.card.disabled[data-v-db1f5349]{cursor:default;border-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.card.disabled[data-v-db1f5349]:hover{box-shadow:none}.card.disabled .content[data-v-db1f5349]{filter:grayscale(100%)}.card.dense[data-v-db1f5349]{width:100%;flex-direction:row;justify-content:flex-start}.card.dense .inner[data-v-db1f5349]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-db1f5349]{padding-bottom:.25rem}.card.flat[data-v-db1f5349]:hover{background-color:var(--color-surface-subtle, oklch(100% 0 0));box-shadow:none}.card.flush .inner[data-v-db1f5349]{padding:0}.card .inner[data-v-db1f5349]{display:flex;width:100%;flex-direction:column;padding:1rem}.card .inner .header[data-v-db1f5349]{position:relative;display:flex;width:100%;flex-direction:column;border-top-left-radius:.25rem;border-top-right-radius:.25rem;padding-bottom:.5rem}.card .inner .header .title[data-v-db1f5349]{padding-bottom:.25rem;font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.card .inner .header .subtitle[data-v-db1f5349]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.card .inner .content[data-v-db1f5349]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.card .inner .footer[data-v-db1f5349]{padding-top:1rem}[data-v-0996fc70]{will-change:height;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}.expand-enter-active[data-v-0996fc70],.expand-leave-active[data-v-0996fc70]{overflow:hidden;transition-property:height,opacity;transition-timing-function:var(--default-transition-timing-function);transition-duration:var(--v66825474)}.expand-enter-from[data-v-0996fc70],.expand-leave-to[data-v-0996fc70]{opacity:0}.expand-enter[data-v-0996fc70],.expand-leave-to[data-v-0996fc70]{height:var(--v23e01c27)}.card[data-v-d1c73970]{width:100%}.card.expanded[data-v-d1c73970]{max-height:var(--v2464f9f5)}.card[data-v-d1c73970] .inner{padding:.25rem}.button[data-v-d1c73970]{margin-top:.25rem;height:auto;width:100%;background-color:var(--color-surface-subtle, oklch(100% 0 0));padding-block:.625rem;color:var(--color-accent, oklch(54.615% .2152 262.881))}.button[data-v-d1c73970]:not([disabled]):hover{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.dark .button[data-v-d1c73970]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.expand-enter-active[data-v-d1c73970],.expand-leave-active[data-v-d1c73970]{transition-property:opacity,height}.expand-enter[data-v-d1c73970],.expand-leave-to[data-v-d1c73970]{opacity:0}.radio-group[data-v-1c59e189]{pointer-events:none;display:flex;flex-direction:column;gap:.25rem}.radio-group[data-v-1c59e189] *{pointer-events:auto}.expandable-radio-group[data-v-57d87eb0]{margin-top:.25rem}.virtual-scroll-container[data-v-d375067a]{height:100%;width:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-d375067a]{display:flex;flex-direction:column}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}.filter-bar-container[data-v-d99cbd82]{position:relative;width:fit-content}.filter-bar-container .filter-bar:hover[data-v-d99cbd82]:has(.button:hover){background-color:var(--color-surface-subtle, oklch(100% 0 0))}.filter-bar-container .filter-bar .label-container[data-v-d99cbd82]{margin-right:2rem;margin-left:.5625rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]{overflow:hidden;white-space:nowrap;outline-style:solid;outline-width:2px;outline-color:var(--color-text-inverse, oklch(100% 0 0))}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]:not(:first-child){margin-left:-.5rem}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]:not(:last-child){max-width:2.5rem}.filter-bar-container .filter-bar .label-container .label[data-v-d99cbd82]{border-radius:var(--radius-lg, .5rem)}.filter-bar-container .clear[data-v-d99cbd82]{position:absolute;top:50%;right:.5rem;translate:0 -50%}.filter-actions[data-v-ac11057c]{margin-top:1rem}.filter-actions .button[data-v-ac11057c]{width:100%}.filter-actions .select-all[data-v-ac11057c]{margin-bottom:.5rem}.filter-dropdown[data-v-f225f3c3]{margin-top:.5rem;max-height:33.625rem;min-width:16.5rem;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:1rem;box-shadow:var(--shadow-menu-large)}.filter-dropdown [data-v-f225f3c3] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup [data-v-f225f3c3] .menu{background-color:inherit!important}.filter-popup [data-v-f225f3c3] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.input-container[data-v-bc10a7f4] .container-inner .inline-container-appended{margin-right:1.5rem}.input-container[data-v-bc10a7f4] .container-inner .inline-container-appended .button{background-color:transparent}.badge[data-v-1e617514]{position:relative;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:50%;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-inverse, oklch(100% 0 0))}.badge.small[data-v-1e617514]{height:.5rem;width:.5rem}.badge.small.position[data-v-1e617514]{top:-.125rem;right:-.125rem}.badge.blue[data-v-1e617514],.badge.blue .pulse[data-v-1e617514]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.badge.green[data-v-1e617514],.badge.green .pulse[data-v-1e617514]{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.badge.gray[data-v-1e617514]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705));color:var(--color-surface-canvas, oklch(100% 0 0))}.badge.gray .pulse[data-v-1e617514]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.badge.orange[data-v-1e617514],.badge.orange .pulse[data-v-1e617514]{background-color:var(--color-warning, oklch(58.272% .162 45.983))}.badge.purple[data-v-1e617514],.badge.purple .pulse[data-v-1e617514]{background-color:#7e22ce}.badge.red[data-v-1e617514],.badge.red .pulse[data-v-1e617514]{background-color:var(--color-danger-fill, oklch(57.7% .245 27.325))}.badge.yellow[data-v-1e617514]{background-color:#e6ca53;color:#382409}.badge.yellow .pulse[data-v-1e617514]{background-color:#e6ca53}.badge.position[data-v-1e617514]{position:absolute;top:-.5rem;right:-.75rem}.badge.pulsating .pulse[data-v-1e617514]{position:absolute;height:100%;width:100%;animation:var(--animate-ping,ping-1e617514 1s cubic-bezier(0, 0, .2, 1) infinite);border-radius:50%;opacity:75%}.badge.pulsating .content[data-v-1e617514]{z-index:1}.dark .badge.purple[data-v-1e617514],.dark .badge.purple .pulse[data-v-1e617514]{background-color:#9e61dc}@keyframes ping-1e617514{75%,to{transform:scale(2);opacity:0}}.menu-item[data-v-b143be33]{position:relative;height:100%;background-color:inherit;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.menu-item.title[data-v-b143be33]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.menu-item.simple[data-v-b143be33]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.menu-item.simple[data-v-b143be33]:hover{text-decoration-line:underline}.menu-item.simple:not(.first)[data-v-b143be33]:before{position:absolute;top:50%;margin-left:-1.5rem;display:flex;width:1.5rem;translate:0 -50%;align-items:center;justify-content:center;color:var(--color-border-default, oklch(86.277% .0063 264.565));content:"|"}@media(min-width:48rem){.menu-item.simple:not(.first)[data-v-b143be33]:before{margin-left:-3rem}}@media(min-width:48rem){.menu-item.simple:not(.first)[data-v-b143be33]:before{width:3rem}}.menu-item.disabled[data-v-b143be33],.menu-item[disabled][data-v-b143be33]{pointer-events:none;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.menu-item .menu-item-content[data-v-b143be33]{display:flex;height:100%;align-items:center;column-gap:.75rem;color:var(--v0a447ee6)}.menu-item .menu-item-content .mini-icon[data-v-b143be33]{color:var(--v0a447ee6)}.menu-item .menu-item-content .sub-menu-trigger[data-v-b143be33]{height:1rem;width:1rem}.menu-item .menu-item-content .sub-menu-trigger[data-v-b143be33],.menu-item .menu-item-content .append-icon[data-v-b143be33],.menu-item .menu-item-content .count[data-v-b143be33],.menu-item .menu-item-content .hotkey[data-v-b143be33]{margin-left:auto}.menu-item .menu-item-content .count[data-v-b143be33]{border-radius:calc(infinity * 1px);border-style:solid;border-width:1px;padding-inline:.625rem;padding-block:.125rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}.menu-item .menu-item-content .current-item-icon[data-v-b143be33]{margin-left:auto;height:1.25rem;width:1.25rem;color:var(--color-accent, oklch(54.615% .2152 262.881))}.menu[data-v-d8f7fc89]{display:flex;align-items:center}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89]{height:100%;gap:1.5rem}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item{border-bottom-style:solid;border-bottom-width:.1875rem;border-color:transparent;background-color:transparent}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item:not(.current):hover,.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item:not(.current):focus{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .menu-item .menu-item-content{font-weight:var(--font-weight-semibold, 600);color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.menu:not(.vertical):not(.simple)[data-v-d8f7fc89] .current{border-color:var(--color-primary-active, oklch(54.615% .2152 262.881))}.menu.vertical[data-v-d8f7fc89]{flex-direction:column;align-items:flex-start;gap:.25rem;background-color:inherit}.menu.vertical .item-vertical[data-v-d8f7fc89]{width:100%;border-radius:var(--radius-lg, .5rem);border-style:none;padding:.5rem}.menu.vertical .item-vertical:not(.current):not(.title)[data-v-d8f7fc89]:hover{background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838))}.menu.vertical .item-vertical:not(.current):not(.title)[data-v-d8f7fc89]:focus,.menu.vertical .item-vertical:not(.current):not(.title)[data-v-d8f7fc89]:focus-visible{background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838))}.menu.vertical[data-v-d8f7fc89] .divider{margin-block:.3125rem}.menu.vertical .current[data-v-d8f7fc89]{background-color:var(--color-surface-subtle, oklch(98.477% .0017 247.838))}.menu.simple[data-v-d8f7fc89]{flex-wrap:wrap;justify-content:center;gap:1.5rem}@media(min-width:48rem){.menu.simple[data-v-d8f7fc89]{gap:3rem}}.menu.mini[data-v-d8f7fc89] .count{display:none}.menu[data-v-d8f7fc89] .current{border-color:var(--color-accent, oklch(54.615% .2152 262.881))}.menu[data-v-d8f7fc89] .current .icon,.menu[data-v-d8f7fc89] .current .mini-icon,.menu[data-v-d8f7fc89] .current .menu-item-content{color:var(--color-accent, oklch(54.615% .2152 262.881))!important}.sub-menu[data-v-d8f7fc89]{width:16.5rem;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:.75rem;box-shadow:var(--shadow-menu)}.inputs[data-v-184e846d]{margin-block:1rem}.inputs .input-from[data-v-184e846d],.inputs .to[data-v-184e846d]{margin-bottom:.5rem}.inputs .to[data-v-184e846d]{display:block;text-align:center;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.search[data-v-301b3260]{margin-bottom:1rem}.list[data-v-301b3260]{max-height:21.625rem;overflow-x:visible;overflow-y:auto;padding:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.list .badge[data-v-301b3260]{margin-top:.375rem}.loader-wrapper[data-v-301b3260]{margin-top:-.25rem;display:flex;width:100%;align-items:center;justify-content:center}.loader-wrapper.loading[data-v-301b3260]{margin-block:.25rem}.menu-loader[data-v-301b3260]{margin-top:.5rem}.menu.vertical[data-v-301b3260]{margin-bottom:.25rem;padding-block:.25rem}.group-checkbox [data-v-301b3260] .label{font-weight:var(--font-weight-bold, 700)}.filter-group[data-v-b2f6b631]{display:flex;flex-wrap:wrap;align-items:flex-start;gap:.5rem}.filter-group .title[data-v-b2f6b631]{margin-right:.25rem;display:none;font-size:var(--text-sm, .875rem);--tw-leading: 2.5rem;line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));text-wrap:nowrap;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}@media(min-width:48rem){.filter-group .title[data-v-b2f6b631]{display:block}}.filter-group .base-filter[data-v-b2f6b631]{text-wrap:nowrap}.filter-group .button[data-v-b2f6b631]{margin-top:.25rem;font-weight:var(--font-weight-normal, 400);text-wrap:nowrap;color:var(--color-accent, oklch(54.615% .2152 262.881))}.table-wrapper[data-v-bda6fd69]{position:relative;display:block;width:100%;overflow:clip;border-radius:var(--radius-lg, .5rem)}.table-wrapper table[data-v-bda6fd69]{width:100%;border-collapse:collapse;text-indent:0px;background-color:var(--color-surface-canvas, oklch(100% 0 0));font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.table-wrapper .sticky-container[data-v-bda6fd69]{position:sticky;bottom:0;z-index:10}.table-wrapper .sticky-container .scrollbar[data-v-bda6fd69]{display:flex;height:.75rem;align-items:center;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-bda6fd69]{position:absolute;height:.5rem;border-radius:var(--radius-lg, .5rem);background-color:var(--color-field-border, oklch(86.277% .0063 264.565))}thead[data-v-0c5f8083]{position:sticky;top:0;z-index:10;background-color:var(--color-surface-canvas, oklch(100% 0 0))}thead[data-v-0c5f8083] tr td{font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664))}thead[data-v-0c5f8083] tr td input{font-weight:var(--font-weight-normal, 400)}thead[data-v-0c5f8083] tr td{box-shadow:var(--shadow-base),inset 0 -1px 0 0 var(--color-divider, oklch(92.48% .0027 264.541))}tbody[data-v-7ea6616f] tr:not(:last-child){border-bottom:solid .0625rem var(--color-divider, oklch(92.48% .0027 264.541))}td[data-v-e416c437]{padding-inline:1rem;vertical-align:middle;color:var(--color-text-primary, oklch(21.049% .032 264.664))}tr[data-v-14aa6f11]{height:3.5rem;max-height:3rem;min-height:3.5rem}.no-results-row[data-v-e40365b9]{position:relative;height:16rem}.no-results-row td[data-v-e40365b9]{position:absolute;height:100%;width:100%;overflow:hidden;white-space:nowrap}.no-results-row td .wrapper[data-v-e40365b9]{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:1rem;text-wrap:wrap}.no-results-row td .wrapper .icon[data-v-e40365b9]{height:3rem;width:3rem;stroke:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.no-results-row td .wrapper span[data-v-e40365b9]{text-align:center;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.pagination[data-v-4ad1e711]{display:flex;gap:.5rem}.pagination .button[data-v-4ad1e711]{position:relative}.pagination .button:not(:disabled)[data-v-4ad1e711]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.pagination .button:not(:disabled)[data-v-4ad1e711]:not(.current){color:var(--color-text-primary, oklch(21.049% .032 264.664))}.pagination .button:not(:disabled)[data-v-4ad1e711] .icon{height:1.25rem;width:1.25rem}.pagination .button[data-v-4ad1e711]:not(:first-child):not(:last-child){display:none;width:2.5rem}@media(min-width:48rem){.pagination .button[data-v-4ad1e711]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-4ad1e711]:not(:disabled):hover{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.pagination .button.current[data-v-4ad1e711]{border-style:solid;border-width:2px;border-color:var(--color-accent, oklch(54.615% .2152 262.881))}.pagination .button .button-text[data-v-4ad1e711]{display:none}@media(min-width:48rem){.pagination .button .button-text[data-v-4ad1e711]{display:block}}.pagination .dotdotdot[data-v-4ad1e711]{display:none;align-self:center}@media(min-width:48rem){.pagination .dotdotdot[data-v-4ad1e711]{display:inline-block}}.skeleton[data-v-269870f9]{display:block;height:1.25rem;animation:var(--animate-pulse,pulse-269870f9 2s cubic-bezier(.4, 0, .6, 1) infinite);background-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.skeleton.has-content[data-v-269870f9]{height:auto}.skeleton.circular[data-v-269870f9]{border-radius:50%}.skeleton.text[data-v-269870f9]{scale:1 .7;border-radius:.25rem}.skeleton.text:not(.has-content)[data-v-269870f9]{height:auto;color:inherit}.skeleton.text:not(.has-content)[data-v-269870f9]:before{content:" "}.skeleton [data-v-269870f9-s]{visibility:hidden}@keyframes pulse-269870f9{50%{opacity:.5}}.table-selection[data-v-3e8932ae]{margin-top:.25rem;display:flex;width:100%;align-items:center;gap:.5rem;border-radius:var(--radius-2xl, 1rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-raised, oklch(100% 0 0));padding-inline:1.5rem;padding-block:.5rem}.table-selection .amount[data-v-3e8932ae]{margin-right:auto}.table-selection .actions[data-v-3e8932ae]{display:flex;flex-direction:column;gap:.5rem}@media(min-width:48rem){.table-selection .actions[data-v-3e8932ae]{flex-direction:row}}.list[data-v-9d717a77]{width:16rem;overflow:hidden;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding-top:1rem;padding-bottom:.625rem;box-shadow:var(--shadow-menu-large)}.list .list-inner[data-v-9d717a77]{display:flex;max-height:33.625rem;flex-direction:column;gap:.375rem;overflow:auto}:is(.list .active-columns,.list .available-columns)[data-v-9d717a77]{display:flex;flex-direction:column;padding-inline:1rem}:is(.list .active-columns,.list .available-columns) .title[data-v-9d717a77]{font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664));-webkit-user-select:none;-moz-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .column[data-v-9d717a77]{display:flex;height:2rem;flex-direction:row;align-items:center}:is(.list .active-columns,.list .available-columns) .column .checkbox-container[data-v-9d717a77]{width:fit-content;padding-right:.5rem}:is(.list .active-columns,.list .available-columns) .column .label[data-v-9d717a77]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));-webkit-user-select:none;-moz-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .column .drag-handle[data-v-9d717a77]{margin-left:auto;cursor:grab;padding-left:.5rem;background-color:transparent}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-9d717a77]{height:1.25rem;width:1.25rem}.list .active-columns .title[data-v-9d717a77]{padding-bottom:.375rem}.list .active-columns .column.dragging[data-v-9d717a77]{visibility:hidden}.list .available-columns .title[data-v-9d717a77]{padding-block:.375rem}.no-columns[data-v-9d717a77]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.table-head[data-v-2c69f723]{display:table-header-group;top:var(--v7ddbd13a)}.table-head .select-column[data-v-2c69f723],.table-head .action-column[data-v-2c69f723]{z-index:2}.table-head .header[data-v-2c69f723]{position:relative;display:flex;width:fit-content;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.table-head .header.header--align-right[data-v-2c69f723]{margin-left:auto}@media(hover:hover){.table-head .header[data-v-2c69f723]:hover{cursor:pointer}}@media(hover:hover){.table-head .header.header--disabled[data-v-2c69f723]:hover{cursor:default}}.table-head .header.active[data-v-2c69f723]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-head .header .sort-icon[data-v-2c69f723]{position:absolute;display:none;height:1rem;width:1rem;cursor:pointer;stroke-width:.125rem}.table-head .header .sort-icon.left[data-v-2c69f723],.table-head .header .sort-icon.right[data-v-2c69f723]{top:50%;translate:0 -50%}.table-head .header .sort-icon.left[data-v-2c69f723]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-2c69f723]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-2c69f723],.table-head .header .sort-icon.active[data-v-2c69f723]{display:block}.table-head .header .sort-icon.sort-icon--disabled[data-v-2c69f723]{display:none!important}.table-head [data-v-2c69f723] .column-configurator{margin-left:auto}.table-head .filters[data-v-2c69f723]{height:4rem;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters .action-column[data-v-2c69f723]{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters td[data-v-2c69f723]>div{max-width:18rem!important;min-width:6rem}.select-column[data-v-2c69f723],.action-column[data-v-2c69f723]{position:relative;z-index:1;width:3rem;background-color:var(--color-surface-canvas, oklch(100% 0 0))}.select-column.overlap[data-v-2c69f723]:after,.action-column.overlap[data-v-2c69f723]:before{position:absolute;top:0;height:100%;width:.625rem;--gradient-from: color-mix(in srgb, var(--color-text-primary, oklch(21.049% .032 264.664)) 5%, transparent);--gradient-to: transparent;--gradient-stops: var( --gradient-via-stops, var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position) );opacity:95%;content:""}.select-column.overlap[data-v-2c69f723]:after{right:-.625rem;--gradient-position: to right;background-image:linear-gradient(var(--gradient-stops))}@supports (background-image: linear-gradient(in lab,red,red)){.select-column.overlap[data-v-2c69f723]:after{--gradient-position: to right in oklab}}.action-column.overlap[data-v-2c69f723]:before{left:-.625rem;--gradient-position: to left;background-image:linear-gradient(var(--gradient-stops))}@supports (background-image: linear-gradient(in lab,red,red)){.action-column.overlap[data-v-2c69f723]:before{--gradient-position: to left in oklab}}.prepend-row-column[data-v-2c69f723]{width:1%;white-space:nowrap}tbody tr.clickable[data-v-2c69f723]{cursor:pointer}tbody tr.clickable[data-v-2c69f723]:hover{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-surface-subtle, oklch(100% 0 0)) 20%,var(--color-surface-subtle, oklch(100% 0 0)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selected[data-v-2c69f723]{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 20%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-2c69f723]{font-weight:var(--font-weight-medium, 500)}tbody tr.selectable td[data-v-2c69f723]:nth-child(2):not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-2c69f723]{font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child[data-v-2c69f723]:not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr .float-right[data-v-2c69f723]{float:right}.table-footer[data-v-2c69f723]{position:sticky;bottom:0;z-index:10;display:flex;flex-wrap:wrap;justify-content:space-between;border-top-style:solid;border-top-width:1px;border-color:var(--color-divider, oklch(92.48% .0027 264.541));background-color:var(--color-surface-canvas, oklch(100% 0 0));padding-inline:1rem;padding-block:.25rem}.table-footer .table-footer-pagination[data-v-2c69f723]{display:flex;width:100%;align-items:center;gap:1rem}.table-footer .current-page-info[data-v-2c69f723]{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;row-gap:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-footer .current-page-info .total-results[data-v-2c69f723]{margin-right:1.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.table-footer .current-page-info .total-results span[data-v-2c69f723]{font-weight:var(--font-weight-bold, 700)}.table-footer .current-page-info .page-selector[data-v-2c69f723]{display:none;flex-grow:1;flex-wrap:wrap;align-items:center}@media(min-width:48rem){.table-footer .current-page-info .page-selector[data-v-2c69f723]{display:flex}}.table-footer .current-page-info .page-selector[data-v-2c69f723] .base-select{width:100%;max-width:6rem}.table-footer .current-page-info .page-selector .per-page[data-v-2c69f723]{margin-left:.75rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.table-footer .pagination[data-v-2c69f723]{margin-left:auto;padding-block:1rem}.actions-align-end[data-v-2c69f723]{display:flex;justify-content:flex-end}.has-explicit-width[data-v-2c69f723]{max-width:1px}.api-data-table__actions[data-v-1a7b0b76]{display:flex;gap:.5rem}tfoot[data-v-df75f6c9] tr{max-height:initial;min-height:initial}tfoot[data-v-df75f6c9] tr td{box-shadow:var(--shadow-base),inset 0 1px 0 0 var(--color-divider, oklch(92.48% .0027 264.541))}.table-head[data-v-1720d033]{display:table-header-group}.table-head .select-column[data-v-1720d033],.table-head .action-column[data-v-1720d033]{z-index:2}.table-head .header[data-v-1720d033]{position:relative;display:flex;width:fit-content;white-space:nowrap;-webkit-user-select:none;user-select:none}.table-head .header.header--align-right[data-v-1720d033]{margin-left:auto}@media(hover:hover){.table-head .header[data-v-1720d033]:hover{cursor:pointer}}@media(hover:hover){.table-head .header.header--disabled[data-v-1720d033]:hover{cursor:default}}.table-head .header.active[data-v-1720d033]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-head .header .sort-icon[data-v-1720d033]{position:absolute;display:none;height:1rem;width:1rem;cursor:pointer;stroke-width:.125rem}.table-head .header .sort-icon.left[data-v-1720d033],.table-head .header .sort-icon.right[data-v-1720d033]{top:50%;translate:0 -50%}.table-head .header .sort-icon.left[data-v-1720d033]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-1720d033]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-1720d033],.table-head .header .sort-icon.active[data-v-1720d033]{display:block}.table-head .header .sort-icon.sort-icon--disabled[data-v-1720d033]{display:none!important}.table-head [data-v-1720d033] .column-configurator{margin-left:auto}.table-head .filters[data-v-1720d033]{height:4rem;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters .action-column[data-v-1720d033]{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.table-head .filters td[data-v-1720d033]>div{max-width:18rem!important;min-width:6rem}.select-column[data-v-1720d033],.action-column[data-v-1720d033]{position:relative;z-index:1;width:3rem;background-color:var(--color-surface-canvas, oklch(100% 0 0))}.select-column.overlap[data-v-1720d033]:after,.action-column.overlap[data-v-1720d033]:before{position:absolute;top:0;height:100%;width:.625rem;--gradient-from: color-mix(in srgb, var(--color-text-primary, oklch(21.049% .032 264.664)) 5%, transparent);--gradient-to: transparent;--gradient-stops: var( --gradient-via-stops, var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position) );opacity:95%;content:""}.select-column.overlap[data-v-1720d033]:after{right:-.625rem;--gradient-position: to right in oklab;background-image:linear-gradient(var(--gradient-stops))}.select-column--inherit-bg[data-v-1720d033]{background-color:inherit!important}.action-column__skeleton[data-v-1720d033],.filter-control--align-right[data-v-1720d033]{margin-left:auto}.actions-align-end[data-v-1720d033]{display:flex;justify-content:flex-end}.spacer-row[data-v-1720d033]{border-style:none!important;border-width:0px!important}.spacer-cell[data-v-1720d033]{height:0;border-style:none!important;border-width:0px!important;padding:0}.has-explicit-width[data-v-1720d033]{max-width:1px}.cell-value--align-right[data-v-1720d033]{margin-left:auto}.action-column.overlap[data-v-1720d033]:before{left:-.625rem;--gradient-position: to left in oklab;background-image:linear-gradient(var(--gradient-stops))}.prepend-row-column[data-v-1720d033]{width:1%;white-space:nowrap}tbody tr.clickable[data-v-1720d033]{cursor:pointer}tbody tr.clickable[data-v-1720d033]:hover{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-surface-subtle, oklch(100% 0 0)) 20%,var(--color-surface-subtle, oklch(100% 0 0)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selected[data-v-1720d033]{background-image:linear-gradient(270deg,var(--color-surface-canvas, oklch(100% 0 0)) 5%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 20%,var(--color-accent-soft, oklch(96.221% .019 240.333)) 80%,var(--color-surface-canvas, oklch(100% 0 0)) 95%)}tbody tr.selectable td:nth-child(2).prepend-row-column+td[data-v-1720d033]{font-weight:var(--font-weight-medium, 500)}tbody tr.selectable td[data-v-1720d033]:nth-child(2):not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child.prepend-row-column+td[data-v-1720d033]{font-weight:var(--font-weight-medium, 500)}tbody tr:not(.selectable) td:first-child[data-v-1720d033]:not(.prepend-row-column){font-weight:var(--font-weight-medium, 500)}tbody tr[data-v-1720d033]:not(.loading):nth-last-child(2){border-bottom-width:0px}tbody tr .cell-content[data-v-1720d033]{display:flex;align-items:center;height:var(--v6a02f16a);min-height:var(--v6a02f16a);max-height:var(--v6a02f16a)}.table-footer[data-v-1720d033]{position:sticky;bottom:0;z-index:10;display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;border-top-style:solid;border-top-width:1px;border-color:var(--color-divider, oklch(92.48% .0027 264.541));background-color:var(--color-surface-canvas, oklch(100% 0 0));padding:1rem}.table-footer .table-footer-pagination[data-v-1720d033]{display:flex;width:100%;align-items:center;gap:1rem}.table-footer .total-results[data-v-1720d033]{margin-right:1.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.table-footer .total-results span[data-v-1720d033]{font-weight:var(--font-weight-bold, 700)}.avatar[data-v-e0ed6a89]{display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:50%;background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.avatar .initials[data-v-e0ed6a89]{font-size:var(--text-sm, .875rem);--tw-leading: 1;line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);color:var(--color-accent, oklch(54.615% .2152 262.881))}.avatar img[data-v-e0ed6a89]{height:100%;width:100%;border-radius:50%;object-fit:cover}.avatar.small[data-v-e0ed6a89]{height:1.5rem;width:1.5rem}.avatar.small .initials[data-v-e0ed6a89]{font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.avatar.medium[data-v-e0ed6a89]{height:2rem;width:2rem}.avatar.large[data-v-e0ed6a89]{height:3rem;width:3rem}.avatar.large .initials[data-v-e0ed6a89]{font-size:var(--text-base, 1rem);line-height:var(--tw-leading, var(--text-base--line-height, 1.5 ))}.avatar.extra-large[data-v-e0ed6a89]{height:3.5rem;width:3.5rem}.avatar.extra-large .initials[data-v-e0ed6a89]{font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.full-image[data-v-b1342901]{opacity:100%}.thumbnail-stack[data-v-7b9fc27b]{display:flex;flex-direction:row;align-items:center}.thumbnail-stack .image-preview[data-v-7b9fc27b]{border-radius:.25rem;outline-style:solid;outline-width:2px;outline-color:var(--color-surface-raised, oklch(100% 0 0))}.thumbnail-stack .image-preview[data-v-7b9fc27b]:not(:first-child){margin-left:-1rem}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-7b9fc27b]{display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.thumbnail-stack .image-preview.invalid .icon[data-v-7b9fc27b]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.address-lookup-result[data-v-29af788f]{display:flex;width:100%;flex-direction:column;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-subtle, oklch(100% 0 0));padding-inline:1rem;padding-block:.75rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664));font-style:normal}.error-summary[data-v-1f9098fa]{padding-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-danger-text, oklch(57.004% .2035 26.111))}.postcodenl-autocomplete-menu{position:absolute;margin-top:.25rem;display:none;border-radius:var(--radius-xl, .75rem);background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--shadow-menu)}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{overflow-x:hidden;overflow-y:auto;padding:.25rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:var(--radius-lg, .5rem);padding:.75rem;--tw-leading: 1.25rem;line-height:1.25rem}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{background-color:transparent;padding:0;font-weight:var(--font-weight-bold, 700)}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.postcodenl-autocomplete-item-label{margin-right:.4rem;display:block;width:100%;max-width:100%;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{margin-right:.4rem;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:center right .25em;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{position:absolute;margin:-.0625rem;display:none;height:.0625rem;width:.0625rem;border-style:none;padding:0;clip:rect(0 0 0 0)}.country-icon[data-v-9706778b]{margin-right:.3125rem;height:1.25rem;width:1.25rem}.activator[data-v-9706778b]{display:flex;cursor:pointer;align-items:center;gap:.25rem;background-color:var(--color-field-background, oklch(100% 0 0))}.activator:not(.simple)[data-v-9706778b]{border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding-inline:1rem;padding-block:.625rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.activator:not(.simple) .country-icon[data-v-9706778b]{margin-right:.5rem}.activator .state-indicator[data-v-9706778b]{margin-left:auto;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.activator .state-indicator.is-open[data-v-9706778b]{rotate:180deg;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.activator.disabled[data-v-9706778b]{pointer-events:none;cursor:not-allowed;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.activator.disabled[data-v-9706778b]::placeholder{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}@media(hover:hover){.activator.disabled[data-v-9706778b]:hover{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}}.activator.disabled[data-v-9706778b]:focus{--tw-outline-style: none;outline-style:none}@media(forced-colors:active){.activator.disabled[data-v-9706778b]:focus{outline:2px solid transparent;outline-offset:2px}}.country-list[data-v-9706778b]{max-height:300px;overflow-y:auto;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding-bottom:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664));box-shadow:var(--shadow-menu)}.country-list .search-container[data-v-9706778b]{position:sticky;top:0;z-index:1;background-color:var(--color-surface-raised-alt, oklch(100% 0 0));padding-inline:.5rem;padding-top:.5rem;padding-bottom:.5rem}.country-list .search-container[data-v-9706778b]:after{position:absolute;bottom:-.5rem;left:0;height:.5rem;width:100%;--gradient-position: to bottom;background-image:linear-gradient(var(--gradient-stops));--gradient-from: color-mix( in srgb, var(--color-text-primary, oklch(21.049% .032 264.664)) 5%, transparent );--gradient-to: transparent;--gradient-stops: var( --tw-gradient-via-stops, var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position) );opacity:95%;content:""}@supports (background-image: linear-gradient(in lab,red,red)){.country-list .search-container[data-v-9706778b]:after{gradient-position:to bottom in oklab}}.country-list .search-container .search-input[data-v-9706778b]{width:100%;border-style:none;background-color:var(--color-surface-raised-alt, oklch(100% 0 0));padding:0;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.country-list .search-container .search-input[data-v-9706778b]::placeholder{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.country-list .search-container .search-input[data-v-9706778b]:focus{box-shadow:none}.country-list .countries[data-v-9706778b]{padding-top:.5rem}.country-list .countries .country[data-v-9706778b]{display:flex;align-items:center;gap:.5rem;padding-inline:.5rem;padding-block:.125rem;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.country-list .countries .country[data-v-9706778b]:hover{cursor:pointer;background-color:var(--color-surface-subtle, oklch(100% 0 0));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}.country-list .countries .no-countries-found[data-v-9706778b]{pointer-events:none;padding-top:.25rem;text-align:center;font-weight:var(--font-weight-bold, 700)}[data-v-5cc52e3f] .activator{width:100%;max-width:15.75rem}.address-input[data-v-5cc52e3f]{display:flex;width:100%;max-width:36rem;flex-direction:column;gap:1rem}.address-input .country .country-label-row[data-v-5cc52e3f]{display:flex;flex-direction:row;justify-content:space-between}.address-input .country .country-label-row .address-toggle[data-v-5cc52e3f]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705));text-decoration-line:underline;background-color:transparent;padding:0}.address-input .input-label[data-v-5cc52e3f]{margin-bottom:.25rem;display:flex;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.address-input .grouped-inputs[data-v-5cc52e3f]{display:flex;width:100%;max-width:24rem;justify-content:space-between;gap:.75rem}.address-input .grouped-inputs .error-summary[data-v-5cc52e3f]{width:100%}.address-input .input-container[data-v-5cc52e3f],.address-input .address-lookup-result[data-v-5cc52e3f]{width:100%;max-width:24rem}.address-autocomplete[data-v-5cc52e3f],.address-alert[data-v-5cc52e3f]{width:100%}.lookup-info[data-v-5cc52e3f]{display:flex;flex-direction:column}.lookup-examples[data-v-5cc52e3f]{width:100%;margin-top:.25rem;padding-left:.5rem;list-style-type:disc}.city-input[data-v-5cc52e3f]{max-width:15.75rem}.address-form[data-v-c27fd513]{display:flex;flex-wrap:wrap;justify-content:space-between}.address-form form[data-v-c27fd513]{display:flex;width:100%;max-width:36rem;flex-direction:column;gap:1rem}.address-form form .input-label[data-v-c27fd513]{margin-bottom:.25rem;display:flex;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.address-form form .grouped-inputs[data-v-c27fd513]{display:flex;justify-content:space-between;gap:.75rem}.address-form form .grouped-inputs .error-summary[data-v-c27fd513]{width:100%}.address-form form .input-container[data-v-c27fd513],.address-form form .grouped-inputs[data-v-c27fd513]{width:100%;max-width:24rem}.checkbox-group[data-v-03ea0e1f]{display:flex;flex-direction:column;gap:.5rem}.checkbox-button[data-v-f3f7acae]{display:flex;flex-direction:column;border-radius:var(--radius-xl, .75rem);border-style:solid;border-width:1px;border-color:var(--color-field-border, oklch(86.277% .0063 264.565));padding:.25rem}.checkbox-button .checkbox-container[data-v-f3f7acae]{border-radius:var(--radius-lg, .5rem)}.checkbox-button .checkbox-container[data-v-f3f7acae]:hover{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.checkbox-button .checkbox-container[data-v-f3f7acae] .label{height:100%;align-items:flex-start;border-radius:var(--radius-xl, .75rem);padding:.75rem;font-weight:var(--font-weight-medium, 500);word-break:break-all}.checkbox-button .checkbox-container .checkbox-button-label[data-v-f3f7acae]{display:flex;align-items:flex-start;gap:.5rem}.checkbox-button .checkbox-container .micro-icon[data-v-f3f7acae]{margin-top:.125rem;color:var(--color-border-strong, oklch(73.455% .008 264.608))}.checkbox-button .checked-content[data-v-f3f7acae]{padding-top:.25rem}.drop-zone[data-v-b954b849]{border-style:dashed}.drop-zone.default[data-v-b954b849]{border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-subtle, oklch(100% 0 0))}.drop-zone.default[data-v-b954b849]:hover{background-color:var(--color-surface-subtle, oklch(100% 0 0))}.drop-zone.dragging[data-v-b954b849]{border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.drop-zone .label[data-v-b954b849]{z-index:2;height:100%;cursor:pointer}.drop-zone .label.dragging[data-v-b954b849]{justify-content:center}.drop-zone .label .icon[data-v-b954b849]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.drop-zone .label .loader[data-v-b954b849]{margin-right:.25rem}.drop-zone .label .trigger[data-v-b954b849]{color:var(--color-accent, oklch(54.615% .2152 262.881));text-decoration-line:underline}.drop-zone .file-input[data-v-b954b849]{display:none}.dropdown[data-v-9ea37c6e]{position:relative}.dropdown .menu[data-v-9ea37c6e]{border-radius:var(--radius-md, .375rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:.25rem;box-shadow:var(--shadow-menu-large)}.upload-menu-button[data-v-7749f9f2]{width:40px}.warning-zone[data-v-959bc417]{border-style:solid;border-color:var(--color-warning, oklch(58.272% .162 45.983));background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.warning-zone .label[data-v-959bc417]{flex-grow:1;color:var(--color-warning-strong, oklch(40.839% .1165 38.172))}.warning-zone .label .icon[data-v-959bc417]{color:var(--color-warning, oklch(58.272% .162 45.983))}.error-zone[data-v-855feab7]{border-style:solid;border-color:var(--color-danger-soft, oklch(97.053% .0129 17.38));background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.error-zone .label[data-v-855feab7]{flex-grow:1;color:var(--color-danger-strong, oklch(39.329% .1242 24.368))}.error-zone .label .icon[data-v-855feab7]{color:var(--color-danger, oklch(61.535% .2075 25.224))}.success-zone[data-v-585fd95f]{border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-raised, oklch(100% 0 0))}.success-zone .label .icon[data-v-585fd95f]{color:var(--color-success, oklch(55.106% .1432 149.926))}.linear-progress[data-v-bb272f73]{display:flex;width:100%;align-items:center;gap:.5rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)))}.linear-progress .wrapper[data-v-bb272f73]{display:flex;width:100%;flex-direction:column;gap:.25rem}.linear-progress .wrapper .progress-bar[data-v-bb272f73]{height:.375rem;width:100%;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-bb272f73]{height:100%;width:100%;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s;--tw-duration: .5s;transition-duration:.5s;--tw-ease: linear;transition-timing-function:linear}.linear-progress .wrapper .progress-bar .progress.animate-progress[data-v-bb272f73]{animation:var(--animate-progress)}.linear-progress .wrapper .progress-bar .progress.origin-left-right[data-v-bb272f73]{transform-origin:left center}.linear-progress .wrapper .progress-bar.blue[data-v-bb272f73]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-bb272f73]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.linear-progress .wrapper .progress-bar.lightblue[data-v-bb272f73]{background-color:inherit}.linear-progress .wrapper .progress-bar.lightblue .progress[data-v-bb272f73]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.green[data-v-bb272f73]{background-color:var(--color-success-soft, oklch(98.135% .0124 149.917))}.linear-progress .wrapper .progress-bar.green .progress[data-v-bb272f73]{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.linear-progress .wrapper .progress-bar.gray[data-v-bb272f73]{background-color:var(--color-surface-raised, oklch(100% 0 0))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-bb272f73]{background-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.linear-progress .wrapper .progress-bar.orange[data-v-bb272f73]{background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-bb272f73]{background-color:var(--color-warning, oklch(58.272% .162 45.983))}.linear-progress .wrapper .progress-bar.purple[data-v-bb272f73]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-bb272f73]{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.linear-progress .wrapper .progress-bar.red[data-v-bb272f73]{background-color:var(--color-danger-soft, oklch(97.053% .0129 17.38))}.linear-progress .wrapper .progress-bar.red .progress[data-v-bb272f73]{background-color:var(--color-danger, oklch(61.535% .2075 25.224))}.linear-progress .wrapper .progress-bar.yellow[data-v-bb272f73]{background-color:var(--color-warning-soft, oklch(98.377% .0105 50.111))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-bb272f73]{background-color:var(--color-warning-text, oklch(55.343% .1739 38.402))}.linear-progress .append[data-v-bb272f73]{min-width:2.25rem}.uploading-zone[data-v-97372f13]{position:relative;border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.uploading-zone .label[data-v-97372f13]{z-index:2;cursor:wait;gap:.75rem!important}.uploading-zone .label .progress[data-v-97372f13]{color:var(--color-accent, oklch(54.615% .2152 262.881))}.uploading-zone .button[data-v-97372f13]{width:100%}@media(min-width:48rem){.uploading-zone .button[data-v-97372f13]{width:auto}}.uploading-zone .linear-progress[data-v-97372f13]{position:absolute;right:0;left:0;z-index:1;height:100%!important}.uploading-zone .linear-progress[data-v-97372f13] .wrapper,.uploading-zone .linear-progress[data-v-97372f13] .progress-bar{height:100%}.uploading-divider[data-v-97372f13]{height:1rem!important}.processing-zone[data-v-4e60054f]{border-style:solid;border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}.processing-zone .label[data-v-4e60054f]{cursor:wait;gap:.75rem!important}.processing-zone .label .loader[data-v-4e60054f]{isolation:isolate}.processing-zone .button[data-v-4e60054f]{width:100%}@media(min-width:48rem){.processing-zone .button[data-v-4e60054f]{width:auto}}@media(min-width:48rem){.drag-and-drop[data-v-4d187b84]{height:4.5rem}}.drag-and-drop .base-zone[data-v-4d187b84]{display:flex;height:100%;width:100%;flex-wrap:wrap;align-items:center;row-gap:1.125rem;overflow:hidden;border-radius:var(--radius-2xl, 1rem);border-style:solid;border-width:1px;padding:1rem}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84]{padding-block:0}}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84]{padding-right:1rem}}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84]{padding-left:1.5rem}}.drag-and-drop .base-zone[data-v-4d187b84] .label{display:flex;width:100%;flex-grow:1;align-items:center;gap:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}@media(min-width:48rem){.drag-and-drop .base-zone[data-v-4d187b84] .label{width:auto}}.drag-and-drop .base-zone[data-v-4d187b84] .label .icon{margin-right:.5rem}.drag-and-drop .base-zone[data-v-4d187b84] .actions{z-index:2;display:flex;flex-grow:1;align-items:center;gap:.5rem}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions{flex-grow:0}}.drag-and-drop .base-zone[data-v-4d187b84] .actions .button{flex-shrink:0}.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:first-child{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:first-child{order:1}}.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:nth-child(2){order:1;flex-grow:1}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions .button:nth-child(2){order:2}}.drag-and-drop .base-zone[data-v-4d187b84] .actions .dropdown{order:2}@media(min-width:40rem){.drag-and-drop .base-zone[data-v-4d187b84] .actions .dropdown{order:1}}.phone-input[data-v-97a1faee]{display:flex;height:2.5rem;align-items:center;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-field-background, oklch(100% 0 0));padding-inline:1rem}.phone-input[data-v-97a1faee]:hover:not(.disabled){border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.phone-input.focus[data-v-97a1faee]:not(.disabled){border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));outline-style:solid;outline-width:1px;outline-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.phone-input.disabled[data-v-97a1faee]{border-color:var(--color-field-border, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52))}.phone-input.disabled .country-prefix[data-v-97a1faee]{color:var(--color-field-text, oklch(21.049% .032 264.664))}.phone-input.disabled input[data-v-97a1faee]{background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}:is(.phone-input select,.phone-input input)[data-v-97a1faee]{border-style:none;padding:0}:is(.phone-input select,.phone-input input)[data-v-97a1faee]:focus{box-shadow:none}.phone-input select[data-v-97a1faee]{padding-right:2rem}.phone-input input[data-v-97a1faee]{width:100%;background-color:var(--color-field-background, oklch(100% 0 0));font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.phone-input .country-prefix[data-v-97a1faee]{margin-right:.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.radio[data-v-fe962c67]{margin-top:.125rem;border:1px solid var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-field-background, oklch(100% 0 0));color:var(--color-accent-strong, oklch(48.82% .2172 264.376));appearance:none;border-radius:100%;width:1rem;height:1rem;background-origin:border-box}.radio[data-v-fe962c67]:focus{--tw-ring-color: var(--color-accent-strong, oklch(48.82% .2172 264.376))}.radio.large[data-v-fe962c67]{height:1.25rem;width:1.25rem}.label[data-v-fe962c67]{display:flex;align-items:flex-start;gap:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.label[data-v-fe962c67]:not(.disabled){cursor:pointer}.radio[data-v-fe962c67]:not(:disabled):hover{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.radio[data-v-fe962c67]:checked:not(:disabled){border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376));background-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-on-accent, oklch(100% 0 0));background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-fe962c67]:disabled{border-color:var(--color-border-default, oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.radio[data-v-fe962c67]:disabled:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}.radio[data-v-fe962c67]:checked:not(:disabled):hover{border-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-on-accent, oklch(100% 0 0))}.radio-button[data-v-4e5b68ec]{display:flex;align-items:center;gap:.75rem;border-radius:var(--radius-lg, .5rem);padding-inline:.75rem;padding-block:.75rem;word-break:break-all}.radio-button [data-v-4e5b68ec]{pointer-events:none}.radio-button:not(.disabled)[data-v-4e5b68ec]:hover{cursor:pointer;background-color:var(--color-surface-subtle, oklch(100% 0 0))}.radio-button:not(.disabled).active[data-v-4e5b68ec]{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}@media(hover:hover){.radio-button:not(.disabled).active[data-v-4e5b68ec]:hover{background-color:var(--color-accent-soft, oklch(96.221% .019 240.333))}}.radio-button:not(.disabled).active .subtitle[data-v-4e5b68ec]{color:var(--color-field-text, oklch(21.049% .032 264.664))!important}.radio-button.disabled[data-v-4e5b68ec]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705));filter:grayscale(100%)}.radio-button.disabled[data-v-4e5b68ec]:before{position:absolute;top:0;left:0;z-index:10;height:100%;width:100%;cursor:not-allowed;border-radius:var(--radius-xl, .75rem);background-color:var(--color-field-border, oklch(86.277% .0063 264.565));opacity:10%;content:""}.radio-button.large[data-v-4e5b68ec]{padding-block:.875rem}.radio-button label[data-v-4e5b68ec]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.radio-button .append[data-v-4e5b68ec]{margin-left:auto}.radio-button .prepend-wrapper[data-v-4e5b68ec]{display:flex;flex-direction:row;align-items:center;gap:.75rem}.radio-button .prepend-wrapper .title-wrapper[data-v-4e5b68ec]{display:flex;min-width:max-content;flex-direction:column}.radio-button .prepend-wrapper .title-wrapper .title[data-v-4e5b68ec]{display:flex;flex-direction:row;align-items:center;gap:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-4e5b68ec]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.suggestion-list[data-v-cc5ffce8]{position:absolute;min-width:6.25rem;border-radius:var(--radius-lg, .5rem);background-color:var(--color-surface-raised, oklch(100% 0 0));padding:.75rem;box-shadow:var(--shadow-menu)}.suggestion-list .menu[data-v-cc5ffce8]{row-gap:.25rem}.editor [data-v-bbd9a106] .tiptap{height:18.75rem;width:100%;overflow:auto;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding-inline:1rem;padding-block:.625rem}.editor [data-v-bbd9a106] .tiptap h1,.editor [data-v-bbd9a106] .tiptap h2,.editor [data-v-bbd9a106] .tiptap h3,.editor [data-v-bbd9a106] .tiptap h4,.editor [data-v-bbd9a106] .tiptap h5,.editor [data-v-bbd9a106] .tiptap h6{margin:0;font-weight:inherit}.editor [data-v-bbd9a106] .tiptap h1,.editor [data-v-bbd9a106] .tiptap h2{margin-bottom:1rem}.editor [data-v-bbd9a106] .tiptap h1{font-size:var(--text-2xl, 1.5rem);line-height:var(--tw-leading, var(--text-2xl--line-height, calc(2 / 1.5)))}.editor [data-v-bbd9a106] .tiptap h2{font-size:var(--text-xl, 1.25rem);line-height:var(--tw-leading, var(--text-xl--line-height, calc(1.75 / 1.25)))}.editor [data-v-bbd9a106] .tiptap h3{font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.editor [data-v-bbd9a106] .tiptap h4,.editor [data-v-bbd9a106] .tiptap h5,.editor [data-v-bbd9a106] .tiptap h6{font-size:var(--text-base, 1rem);line-height:var(--tw-leading, var(--text-base--line-height, 1.5 ))}.editor [data-v-bbd9a106] .tiptap .tag{font-weight:var(--font-weight-bold, 700);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.editor .toolbar[data-v-bbd9a106]{margin-bottom:.5rem;display:flex;gap:.25rem}.editor .toolbar .button[data-v-bbd9a106]{width:2.5rem}.editor .toolbar[data-v-bbd9a106] .base-select{margin-left:auto}.modal.loader-modal[data-v-95758b60] .inner{display:flex;align-items:center;justify-content:center;background-color:var(--color-surface-raised, oklch(100% 0 0));height:4.75rem;border-radius:1rem}.modal.loader-modal[data-v-95758b60] .inner .content{padding:0;overflow:visible}.modal.loader-modal[data-v-95758b60] .inner .loader{width:3.125rem;height:3.125rem}.search-container[data-v-95758b60]{position:relative}.search-container[data-v-95758b60] .modal{max-height:25rem;background-color:transparent;height:100%;box-shadow:none}.search-container[data-v-95758b60] .modal .inner .content{padding:0}.search-container[data-v-95758b60] .modal .inner .content .base-select .wrapper{background-color:var(--color-surface-raised, oklch(100% 0 0))}.search-container[data-v-95758b60] .modal .inner .content .base-select .wrapper input{background-color:var(--color-surface-raised, oklch(100% 0 0));outline:none}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content{background-color:var(--color-surface-raised, oklch(100% 0 0));border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;overflow:hidden}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content .select-content{border-radius:1rem;background-color:var(--color-surface-raised, oklch(100% 0 0))}.search-container[data-v-95758b60] .modal .inner .content .search.elevated{margin:.625rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-left-radius:0;border-bottom-right-radius:0}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper{border-radius:1rem;padding-left:1.5rem;padding-right:1.5rem;height:4.75rem;border:none;box-shadow:var(--shadow-floating-soft)}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper.focus{border:none;outline:none}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper .prepend-icon{height:1.5rem;width:1.5rem;margin-left:0;margin-right:.25rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper .clear-button{margin-right:.75rem;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-shadow:var(--shadow-floating-soft)}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-95758b60] .modal .inner .content .button{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.search-container[data-v-95758b60] .modal .inner .content .button.cancel{font-weight:400;border-left:1px solid var(--color-border-default, oklch(86.277% .0063 264.565));border-radius:0;padding-left:1rem;padding-right:.5rem}@media(min-width:768px){.modal.loader-modal[data-v-95758b60] .inner .content{padding:.5rem}}[data-v-2e97f961] .input{min-width:10rem;border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right-width:0px!important}[data-v-2e97f961] .search-options .wrapper{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-left-width:0px!important}.scoped-search[data-v-2e97f961]{display:flex}.scoped-search .search[data-v-2e97f961]{flex-grow:1}.scoped-search .search:has(.input:hover)+.divider[data-v-2e97f961]{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.scoped-search .search:focus-within+.divider[data-v-2e97f961]{border-left-style:solid;border-left-width:2px;border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))!important}.scoped-search .search:focus-within [data-v-2e97f961] .input{border-style:solid;border-width:2px;border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))}.scoped-search .search:focus-within [data-v-2e97f961] .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-2e97f961]{border-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.scoped-search:has(.search-options:focus) .divider[data-v-2e97f961],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-2e97f961]{border-left-style:solid;border-left-width:2px;border-color:var(--color-accent-strong, oklch(48.82% .2172 264.376))!important}.time-input[data-v-1f997ba5]{width:5.3125rem}.time-input[data-v-1f997ba5]::-webkit-calendar-picker-indicator{display:none}.time-input[data-v-1f997ba5]::-webkit-datetime-edit-text{padding-inline:.25rem;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.time-input[data-v-1f997ba5]::-webkit-datetime-edit-fields-wrapper{margin-inline:auto}.time-input.has-icon[data-v-1f997ba5]{width:7rem}.time-input.has-icon [data-v-1f997ba5]::-webkit-datetime-edit-fields-wrapper{margin-left:0}.time-input.has-icon[data-v-1f997ba5] .icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.time-input.error-full[data-v-1f997ba5] .error{width:max-content}.sidebar[data-v-91c8425e]{height:100%;width:100%;max-width:14.5rem;overflow:hidden;border-radius:var(--radius-lg, .5rem)}.sidebar.mini[data-v-91c8425e]{width:2.25rem}.sidebar.mini .menu[data-v-91c8425e]{width:fit-content}.menu[data-v-91c8425e]{gap:.25rem;color:var(--color-text-primary, oklch(21.049% .032 264.664))}.summary[data-v-15250c0d]{width:var(--v5436127c);max-width:100%}[data-v-ad660516] .progress{transition-duration:var(--v1ad35c38)!important}.toast[data-v-ad660516]{position:relative;width:100%;max-width:24rem;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;border-color:var(--color-divider, oklch(92.48% .0027 264.541));background-color:var(--color-surface-raised-alt, oklch(100% 0 0));box-shadow:var(--shadow-menu-large)}.toast .wrapper[data-v-ad660516]{display:flex;padding:1rem}.toast .linear-progress[data-v-ad660516] .progress-bar{border-bottom-right-radius:var(--radius-lg, .5rem);border-bottom-left-radius:var(--radius-lg, .5rem)}.toast.is-absolute[data-v-ad660516]{position:absolute;top:.25rem;right:.25rem}.toast .type-icon[data-v-ad660516]{margin-right:.75rem;flex-shrink:0}.toast .content[data-v-ad660516]{display:flex;flex-direction:column;padding-right:1.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.toast .content .title[data-v-ad660516]{margin-bottom:.25rem;font-weight:var(--font-weight-medium, 500)}.toast .content .description[data-v-ad660516]{margin-bottom:1rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.toast .content .actions[data-v-ad660516]{display:flex;gap:.5rem}.toast .close[data-v-ad660516]{position:absolute;top:.5rem;right:0}.toast .close[data-v-ad660516] .mini-icon{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.close:hover .mini-icon[data-v-ad660516]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.error .type-icon[data-v-ad660516]{color:var(--color-danger, oklch(61.535% .2075 25.224))}.warning .type-icon[data-v-ad660516]{color:var(--color-warning, oklch(58.272% .162 45.983))}.success .type-icon[data-v-ad660516]{color:var(--color-success, oklch(55.106% .1432 149.926))}.info .type-icon[data-v-ad660516]{color:var(--color-info, oklch(62.538% .1804 219.935))}.fade-enter-from[data-v-ad660516],.fade-leave-to[data-v-ad660516]{translate:15rem 0;opacity:0%}.fade-enter-to[data-v-ad660516],.fade-leave-from[data-v-ad660516]{translate:0 0;opacity:100%}.fade-enter-active[data-v-ad660516],.fade-leave-active[data-v-ad660516]{transition-property:all;transition-timing-function:var(--default-transition-timing-function);transition-duration:.3s}.toast-group[data-v-b0c69dc2]{position:fixed;top:0;right:0;z-index:100;display:flex;max-height:100vh;flex-direction:column;gap:1rem;overflow-x:hidden;overflow-y:auto;padding:1rem;transition-property:all;transition-timing-function:var(--default-transition-timing-function);transition-duration:.15s;scrollbar-width:none}.breadcrumb-item[data-v-650beff2]{display:inline-flex;min-width:0;max-width:100%;align-items:center;white-space:nowrap;font-size:.875rem;line-height:var(--tw-leading, calc(1.25 / .875));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.breadcrumb-item.current[data-v-650beff2]{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.breadcrumb-item.disabled[data-v-650beff2]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.breadcrumb-label[data-v-650beff2]{min-width:0;overflow:hidden;text-overflow:ellipsis}.breadcrumb-link[data-v-650beff2]{text-decoration:none;transition:color .15s ease}.breadcrumb-link[data-v-650beff2]:hover,.breadcrumb-link[data-v-650beff2]:focus-visible{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.breadcrumb[data-v-962135a7]{position:relative;min-width:0}.breadcrumb-list[data-v-962135a7]{display:flex;min-width:0;flex-wrap:nowrap;overflow:hidden;align-items:center;gap:.375rem;margin:0;padding:0;list-style:none;white-space:nowrap}.breadcrumb-list-measurement[data-v-962135a7]{position:absolute;inset:0 auto auto 0;width:100%;visibility:hidden;pointer-events:none;overflow:hidden}.breadcrumb-list-measurement .overflow-button[data-v-962135a7]{visibility:hidden}.breadcrumb-list-measurement .breadcrumb-entry.last-visible[data-v-962135a7]{flex:0 0 auto;overflow:visible}.breadcrumb-entry[data-v-962135a7]{display:inline-flex;min-width:0;flex-shrink:0;align-items:center;gap:.375rem}.breadcrumb-entry.last-visible[data-v-962135a7]{flex:1 1 auto;overflow:hidden}.breadcrumb-separator[data-v-962135a7]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.overflow-button[data-v-962135a7]{display:inline-flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;border:0;border-radius:.375rem;padding:0;color:var(--color-text-secondary, oklch(55.1% .023 264.36));background-color:transparent;cursor:pointer;transition:color .15s ease}.overflow-button[data-v-962135a7]:hover,.overflow-button[data-v-962135a7]:focus-visible{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.scaffold-summary-branch[data-v-21584309]{width:100%}.scaffold-summary-branch-header[data-v-21584309]{position:relative;display:block;width:100%}.scaffold-summary-item[data-v-21584309]{--scaffold-summary-item-hover-bg: color-mix( in oklch, var(--color-text-primary, oklch(21.049% .032 264.664)) 4%, transparent );display:flex;box-sizing:border-box;min-height:2rem;width:100%;align-items:center;gap:.5rem;overflow:hidden;border-radius:.5rem;color:var(--color-text-primary, oklch(21.049% .032 264.664));text-decoration:none;padding:.375rem .5rem;font-size:.875rem;line-height:1.25rem;transition:background-color .15s ease,color .15s ease,gap .22s cubic-bezier(.2,0,0,1)}.scaffold-summary-item[data-v-21584309]:hover{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.scaffold-summary-item[data-v-21584309]:focus-visible,.scaffold-summary-item.active[data-v-21584309]{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.scaffold-summary-item.active-descendant[data-v-21584309]{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.scaffold-summary-item.mini[data-v-21584309]{gap:0}.scaffold-summary-item-link[data-v-21584309]{min-width:0;width:100%;padding-right:2.75rem}.scaffold-summary-item-toggle[data-v-21584309]{border:0;background:transparent;text-align:left;cursor:pointer}.scaffold-summary-item-chevron-button[data-v-21584309]{display:inline-flex;position:absolute;top:50%;right:.25rem;transform:translateY(-50%);min-height:2rem;width:2rem;flex-shrink:0;align-items:center;justify-content:center;border:0;border-radius:.5rem;background:transparent;color:var(--color-text-disabled, oklch(51.786% .0108 264.705));cursor:pointer;transition:background-color .15s ease,color .15s ease}.scaffold-summary-item-chevron-button[data-v-21584309]:hover,.scaffold-summary-item-chevron-button[data-v-21584309]:focus-visible{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541));color:var(--color-text-primary, oklch(21.049% .032 264.664))}@supports (background-color: color-mix(in oklch,black 4%,transparent)){.scaffold-summary-item[data-v-21584309]:hover,.scaffold-summary-item[data-v-21584309]:focus-visible,.scaffold-summary-item.active[data-v-21584309],.scaffold-summary-item.active-descendant[data-v-21584309]{background-color:var( --scaffold-summary-item-hover-bg, var(--color-surface-subtle-active, oklch(92.48% .0027 264.541)) )}.scaffold-summary-item-chevron-button[data-v-21584309]:hover,.scaffold-summary-item-chevron-button[data-v-21584309]:focus-visible{background-color:var( --scaffold-summary-item-hover-bg, var(--color-surface-subtle-active, oklch(92.48% .0027 264.541)) )}}.scaffold-summary-item-chevron[data-v-21584309]{flex-shrink:0}.scaffold-summary-item-text[data-v-21584309]{min-width:0;max-width:10rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;opacity:1;transition:max-width .14s ease,opacity .11s ease}.scaffold-summary-item-text.mini[data-v-21584309]{max-width:0;opacity:0}.scaffold-summary-subitems[data-v-21584309]{display:flex;position:relative;flex-direction:column;gap:.25rem;padding-top:.25rem;padding-left:1.625rem;padding-right:1.5rem}.scaffold-summary-subitems[data-v-21584309]:before{content:"";position:absolute;top:.25rem;bottom:0;left:1rem;width:.0625rem;background-color:var(--color-border-subtle, oklch(92.789% .0041 286.32))}@media(prefers-reduced-motion:reduce){.scaffold-summary-item[data-v-21584309],.scaffold-summary-item-text[data-v-21584309],.scaffold-summary-item-chevron-button[data-v-21584309]{transition:none}}.page-layout[data-v-85c37ea6]{--layout-right-sidebar-gap: 1.5rem;--layout-content-gap: .75rem;--layout-shell-padding: 1rem;--layout-sidebar-surface: var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838));--layout-content-shadow: var(--tw-inset-shadow, 0 0 #0000), var(--tw-inset-ring-shadow, 0 0 #0000), var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 .0625rem .1875rem 0 #0000001a, 0 .0625rem .125rem -.0625rem #0000001a;--sidebar-rail-width-expanded: 17rem;--sidebar-resize-duration: .22s;--sidebar-resize-easing: cubic-bezier(.2, 0, 0, 1);position:relative;display:flex;min-height:100vh;flex-direction:column;overflow-x:visible;background-color:var(--layout-sidebar-surface)}.page-layout .wrap[data-v-85c37ea6]{margin-right:0;display:flex;min-height:100vh;width:100%;flex-direction:row;align-self:stretch}.page-layout .sidebar[data-v-85c37ea6]{position:sticky;top:0;margin-bottom:1rem;height:fit-content;align-self:flex-start}.page-layout .sidebar-left-rail[data-v-85c37ea6]{display:flex;position:sticky;top:0;height:100vh;max-height:100vh;width:var(--sidebar-rail-width-expanded);max-width:var(--sidebar-rail-width-expanded);flex-basis:var(--sidebar-rail-width-expanded);flex-shrink:0;align-self:stretch;flex-direction:column;overflow:visible;background-color:var(--layout-sidebar-surface);padding:.5rem;transition:width var(--sidebar-resize-duration) var(--sidebar-resize-easing),max-width var(--sidebar-resize-duration) var(--sidebar-resize-easing),flex-basis var(--sidebar-resize-duration) var(--sidebar-resize-easing),padding-inline var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .sidebar-left-rail.is-collapsed[data-v-85c37ea6]{width:0;max-width:0;flex-basis:0;padding-inline:0;overflow:hidden;pointer-events:none}.page-layout .sidebar-left[data-v-85c37ea6]{width:100%;max-width:none;position:static;margin-bottom:0;min-height:0;flex:1;align-self:stretch;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain}.page-layout .sidebar-summary[data-v-85c37ea6]{width:100%;display:flex;flex-direction:column;align-items:stretch;padding:.5rem;row-gap:.25rem}.page-layout .sidebar-summary[data-v-85c37ea6] .summary-group{width:100%;padding-block:.25rem}.page-layout .sidebar-summary[data-v-85c37ea6] .summary-group>.header .name{font-size:.875rem;line-height:1.25rem}.page-layout .sidebar-summary[data-v-85c37ea6] .summary-group>.items{width:100%;box-sizing:border-box;border-left-color:var(--color-border-subtle, oklch(92.789% .0041 286.32))}.page-layout .sidebar-logo[data-v-85c37ea6]{display:flex;flex-shrink:0;align-items:center;padding:.5rem}.page-layout .sidebar-logo .sidebar-logo-link[data-v-85c37ea6]{display:flex;box-sizing:border-box;width:100%;align-items:center;gap:.75rem;overflow:hidden;border-radius:.75rem;padding:.5rem;text-align:left;text-decoration:none;background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838));transition:background-color .15s ease,gap var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .sidebar-logo .sidebar-logo-link[data-v-85c37ea6]:hover,.page-layout .sidebar-logo .sidebar-logo-link[data-v-85c37ea6]:focus-visible{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.page-layout .sidebar-logo .sidebar-logo-mark[data-v-85c37ea6]{display:inline-flex;flex-shrink:0;align-items:center;justify-content:center}.page-layout .sidebar-logo .sidebar-logo-image[data-v-85c37ea6]{display:block;height:2rem;width:2rem;border-radius:.5rem}.page-layout .sidebar-logo .sidebar-logo-copy[data-v-85c37ea6]{display:flex;min-width:0;flex-direction:column;overflow:hidden;white-space:nowrap}.page-layout .sidebar-logo .sidebar-logo-title[data-v-85c37ea6]{font-size:.875rem;line-height:1rem;font-weight:var(--font-weight-semibold, 600);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.page-layout .sidebar-logo .sidebar-logo-subtitle[data-v-85c37ea6]{font-size:.75rem;line-height:1rem;color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.page-layout .sidebar-right[data-v-85c37ea6]{display:flex;flex-direction:column;gap:1rem;min-height:100vh;padding:var(--layout-shell-padding) var(--layout-shell-padding) 1.5rem 0}.page-layout .sidebar-right .sidebar-right-content[data-v-85c37ea6]{display:flex;flex-direction:column;gap:1rem}.page-layout .sidebar-user-menu[data-v-85c37ea6]{margin-top:auto;display:flex;flex-direction:column;flex-shrink:0;padding:.5rem}.page-layout .sidebar-user-button[data-v-85c37ea6]{display:flex;box-sizing:border-box;width:100%;align-items:center;gap:.5rem;overflow:hidden;border-radius:.75rem;padding:.5rem;text-align:left;background-color:var(--color-surface-subtle-hover, oklch(98.477% .0017 247.838));transition:background-color .15s ease,gap var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .sidebar-user-button[data-v-85c37ea6]:hover,.page-layout .sidebar-user-button[data-v-85c37ea6]:focus-visible{background-color:var(--color-surface-subtle-active, oklch(92.48% .0027 264.541))}.page-layout .sidebar-user-copy[data-v-85c37ea6]{display:flex;min-width:0;flex:1;flex-direction:column;overflow:hidden}.page-layout .sidebar-user-name[data-v-85c37ea6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:var(--tw-leading, calc(1.25 / .875));font-weight:var(--font-weight-semibold, 600);color:var(--color-text-primary, oklch(21.049% .032 264.664))}.page-layout .sidebar-user-secondary[data-v-85c37ea6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.75rem;line-height:var(--tw-leading, calc(1 / .75));color:var(--color-text-secondary, oklch(55.1% .023 264.36))}.page-layout .sidebar-user-icon[data-v-85c37ea6]{flex-shrink:0;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.page-layout .sidebar-user-actions[data-v-85c37ea6]{display:flex;margin-top:auto;width:100%;flex-direction:column;gap:.25rem;flex-shrink:0;padding:.5rem}.page-layout .sidebar-user-actions+.sidebar-user-menu[data-v-85c37ea6]{margin-top:0}.page-layout .mobile-sidebar-content[data-v-85c37ea6]{display:flex;height:100%;min-height:100%;flex-direction:column;gap:.25rem;padding-bottom:.5rem}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions[data-v-85c37ea6],.page-layout .mobile-sidebar-content .mobile-sidebar-user-menu[data-v-85c37ea6]{padding:.5rem}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions[data-v-85c37ea6],.page-layout .mobile-sidebar-content .mobile-sidebar-user-menu[data-v-85c37ea6]{margin-top:auto}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions+.mobile-sidebar-user-menu[data-v-85c37ea6]{margin-top:0}.page-layout .content-column[data-v-85c37ea6]{display:flex;min-width:0;flex-grow:1;flex-direction:column;margin:.5rem .5rem .5rem 0;transition:margin var(--sidebar-resize-duration) var(--sidebar-resize-easing)}.page-layout .content-column .content-surface[data-v-85c37ea6]{display:flex;position:relative;z-index:1;min-height:100%;min-width:0;flex:1;flex-direction:column;border-radius:1rem;background-color:var(--color-surface-raised, oklch(100% 0 0));box-shadow:var(--layout-content-shadow)}.page-layout .sidebar-left-rail.is-collapsed+.content-column[data-v-85c37ea6]{margin-left:.5rem}.page-layout .content-topbar[data-v-85c37ea6]{padding-top:.75rem}.page-layout .content-topbar .content-topbar-row[data-v-85c37ea6]{display:flex;min-width:0;align-items:center;gap:0;padding-inline:1rem;padding-bottom:.75rem}.page-layout .content-topbar .content-topbar-toggle[data-v-85c37ea6]{flex-shrink:0;cursor:e-resize}.page-layout .content-topbar .content-topbar-divider[data-v-85c37ea6]{height:1rem;align-self:center;margin-left:.5rem;margin-right:.75rem}.page-layout .content-topbar .content-topbar-breadcrumb[data-v-85c37ea6]{min-width:0;flex:1 1 auto}.page-layout .content-topbar .content-topbar-actions[data-v-85c37ea6]{display:flex;flex-shrink:0;align-items:center;gap:.5rem;margin-left:auto;padding-left:.5rem}.page-layout .main[data-v-85c37ea6]{min-width:0;flex-grow:1;padding:1rem}.page-layout .main [data-v-85c37ea6] .page-header{background-color:transparent}@media(prefers-reduced-motion:reduce){.page-layout .sidebar-left-rail[data-v-85c37ea6],.page-layout .sidebar-summary[data-v-85c37ea6] .summary-group>.header,.page-layout .sidebar-summary[data-v-85c37ea6] .summary-group>.header .name,.page-layout .sidebar-logo-link[data-v-85c37ea6],.page-layout .sidebar-user-button[data-v-85c37ea6],.page-layout .sidebar-logo-copy[data-v-85c37ea6],.page-layout .sidebar-user-copy[data-v-85c37ea6],.page-layout .sidebar-user-icon[data-v-85c37ea6]{transition:none}}@media(max-width:64rem){.page-layout[data-v-85c37ea6]{--layout-content-gap: .5rem;--layout-shell-padding: .75rem;--sidebar-rail-width-expanded: 15rem}.page-layout .wrap[data-v-85c37ea6]{min-height:100vh}.page-layout .sidebar-left-rail[data-v-85c37ea6]{padding:.5rem .375rem}.page-layout .sidebar-summary[data-v-85c37ea6]{padding:.375rem}.page-layout .content-column[data-v-85c37ea6]{margin:.5rem .5rem .5rem 0}.page-layout .content-column .content-surface[data-v-85c37ea6]{border-radius:.75rem}.page-layout .content-topbar .content-topbar-row[data-v-85c37ea6]{padding-inline:.875rem}.page-layout .main[data-v-85c37ea6]{padding:.875rem .875rem 1.5rem}.page-layout .sidebar-right[data-v-85c37ea6]{min-height:100vh;padding:.75rem .75rem 1rem 0}}@media(max-width:48rem){.page-layout[data-v-85c37ea6]{--layout-content-gap: .5rem;--layout-shell-padding: .5rem}.page-layout .wrap[data-v-85c37ea6]{min-height:100vh;flex-direction:column}.page-layout .sidebar-left-rail[data-v-85c37ea6]{display:none}.page-layout .sidebar-user-actions[data-v-85c37ea6],.page-layout .sidebar-user-menu[data-v-85c37ea6]{margin-top:0;padding-top:.25rem}.page-layout .content-column[data-v-85c37ea6]{margin:.5rem}.page-layout .content-column .content-surface[data-v-85c37ea6]{min-height:auto;border-radius:.75rem}.page-layout .sidebar-left-rail.is-collapsed+.content-column[data-v-85c37ea6]{margin:.5rem}.page-layout .content-topbar[data-v-85c37ea6]{padding-top:.5rem}.page-layout .content-topbar .content-topbar-row[data-v-85c37ea6]{padding-inline:.75rem;padding-bottom:.5rem}.page-layout .sidebar-right[data-v-85c37ea6]{min-height:auto;padding:0 .5rem .5rem}}.arrow[data-v-48ece3e5]{position:relative}.arrow.vertical[data-v-48ece3e5]{height:100%;width:fit-content;padding-inline:.75rem}.arrow.vertical .text[data-v-48ece3e5]{top:50%;translate:0 -50%;rotate:-90deg;text-align:center}.arrow.vertical.has-text[data-v-48ece3e5]{margin-right:2rem}.arrow:not(.vertical)[data-v-48ece3e5]{width:100%;padding-block:.75rem}.arrow:not(.vertical) .text[data-v-48ece3e5]{left:50%;margin-top:1.25rem;translate:-50% 0;text-align:center}.arrow:not(.vertical).has-text[data-v-48ece3e5]{margin-bottom:2rem}.arrow .arrow-pointer[data-v-48ece3e5]{position:absolute;border-right-style:solid;border-right-width:2px;border-bottom-style:solid;border-bottom-width:2px;border-color:var(--color-border-default, oklch(86.277% .0063 264.565));padding:.5rem}.arrow .arrow-pointer.up[data-v-48ece3e5],.arrow .arrow-pointer.down[data-v-48ece3e5]{margin-left:-.5rem}.arrow .arrow-pointer.up[data-v-48ece3e5]{top:0;margin-top:.125rem;rotate:-135deg}.arrow .arrow-pointer.down[data-v-48ece3e5]{bottom:0;margin-bottom:.125rem;rotate:45deg}.arrow .arrow-pointer.left[data-v-48ece3e5],.arrow .arrow-pointer.right[data-v-48ece3e5]{top:1rem;margin-top:-.75rem}.arrow .arrow-pointer.left[data-v-48ece3e5]{left:0;margin-left:.125rem;rotate:135deg}.arrow .arrow-pointer.right[data-v-48ece3e5]{right:0;margin-right:.125rem;rotate:-45deg}.arrow .text[data-v-48ece3e5]{position:absolute;display:block;text-wrap:nowrap;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.footer[data-v-89dedaa8]{display:flex;min-height:8rem;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;overflow:hidden}.footer .copy[data-v-89dedaa8]{width:100%;text-align:center;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-text-primary, oklch(21.049% .032 264.664))}.header[data-v-f1d60f0c]{position:relative;z-index:50;width:100%;height:var(--v1ccf0090)}.header .wrapper[data-v-f1d60f0c]{position:fixed;display:flex;width:100%;justify-content:center;border-bottom-style:solid;border-bottom-width:1px;background-color:var(--color-surface-page, oklch(100% 0 0))}.header .wrapper .inner[data-v-f1d60f0c]{margin-right:calc(-1*(100vw - 100%));display:grid;height:100%;width:100vw;align-items:center;gap:.5rem;overflow-x:clip;grid-template-areas:"return-info return-info return-info" "prepend logo append" "middle middle middle";grid-template-columns:1fr auto 1fr}@media(min-width:64rem){.header .wrapper .inner[data-v-f1d60f0c]{max-width:100.4375rem}}.header .wrapper .inner .prepend[data-v-f1d60f0c]{margin-left:1.5rem;grid-area:prepend}.header .wrapper .inner .logo-container[data-v-f1d60f0c]{grid-area:logo}.header .wrapper .inner .logo-container .logo[data-v-f1d60f0c]{display:block;width:fit-content}.header .wrapper .inner .return-info[data-v-f1d60f0c]{display:flex;justify-content:center;border-bottom-style:solid;border-bottom-width:1px;padding-block:.5rem;grid-area:return-info}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-f1d60f0c]{justify-content:flex-start}}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-f1d60f0c]{border-bottom-width:0px}}@media(min-width:64rem){.header .wrapper .inner .return-info[data-v-f1d60f0c]{padding-block:0}}.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{height:1rem;width:1rem}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{height:1.5rem}}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{width:1.5rem}}@media(min-width:64rem){.header .wrapper .inner .return-info .icon[data-v-f1d60f0c]{border-style:none}}.header .wrapper .inner .return-info .return-link[data-v-f1d60f0c]{display:flex;align-items:center;gap:1rem}.header .wrapper .inner .return-info .return-link .text[data-v-f1d60f0c]{display:flex;align-items:center;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}@media(min-width:64rem){.header .wrapper .inner .return-info .return-link .text[data-v-f1d60f0c]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}}.header .wrapper .inner .middle[data-v-f1d60f0c]{display:flex;height:100%;align-items:center;justify-content:center;grid-area:middle}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c]{padding:0}}.header .wrapper .inner .middle[data-v-f1d60f0c]>*{margin-inline:.5rem;margin-bottom:.5rem}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c]>*{margin:0}}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .inline-container-prepended .icon{color:var(--color-accent, oklch(54.615% .2152 262.881))}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input{border-radius:var(--radius-2xl, 1rem);border-style:none;background-color:var(--color-surface-disabled, oklch(96.65% .004 264.52));padding-block:.4375rem;padding-left:3.25rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input::placeholder{color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(hover:hover){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:hover{border-style:none}}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:focus{padding-block:.4375rem}.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:focus{padding-right:1rem}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input{padding-block:.6875rem}}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input{font-size:var(--text-base, 1rem);line-height:var(--tw-leading, var(--text-base--line-height, 1.5 ))}}@media(min-width:64rem){.header .wrapper .inner .middle[data-v-f1d60f0c] .input-container .input:focus{padding-block:.6875rem}}.header .wrapper .inner .append[data-v-f1d60f0c]{display:flex;align-items:center;justify-content:flex-end;gap:1rem;grid-area:append}.header .wrapper .inner .append .icon[data-v-f1d60f0c]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.header .wrapper .inner .append .dropdown[data-v-f1d60f0c] .button{margin-right:1.5rem;background-color:transparent;padding:0}@media(min-width:1024px){.header[data-v-f1d60f0c],.header .wrapper[data-v-f1d60f0c]{height:5rem}.header .wrapper .inner[data-v-f1d60f0c]{grid-template-areas:"logo middle append";grid-template-columns:2fr 3fr 2fr}.header .wrapper .inner.left[data-v-f1d60f0c]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-f1d60f0c]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-f1d60f0c]{justify-content:center}.header .wrapper .inner.right[data-v-f1d60f0c]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-f1d60f0c]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-f1d60f0c]{grid-template-areas:"logo return-info middle append";grid-template-columns:1fr 1fr 2fr 2fr}.header .wrapper .prepend[data-v-f1d60f0c]{display:none}.header .wrapper .logo-container .logo[data-v-f1d60f0c]{margin-left:1.5rem}}.tab[data-v-0443e693]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));color:var(--color-field-text, oklch(21.049% .032 264.664))}.tab .tab-count[data-v-0443e693]{margin-left:.5rem;display:none;border-radius:calc(infinity * 1px);padding-inline:.625rem;padding-block:.125rem;font-size:var(--text-xs, .75rem);line-height:var(--tw-leading, var(--text-xs--line-height, calc(1 / .75)));font-weight:var(--font-weight-medium, 500)}@media(min-width:48rem){.tab .tab-count[data-v-0443e693]{display:inline-block}}.tab.active[data-v-0443e693]{border-color:var(--color-accent, oklch(54.615% .2152 262.881));color:var(--color-accent, oklch(54.615% .2152 262.881))}.tab.disabled[data-v-0443e693]{pointer-events:none;cursor:not-allowed;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.tab.disabled.active[data-v-0443e693]{border-color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.tabs[data-v-2de10beb]{position:relative;display:flex;background-color:inherit;box-shadow:var(--shadow-base),inset 0 -1px 0 0 var(--color-border-default, oklch(86.277% .0063 264.565))}:where(.tabs[data-v-2de10beb]>:not(:last-child)){margin-inline-start:0rem;margin-inline-end:2rem}.tabs[data-v-2de10beb] .tab{cursor:pointer;border-bottom-style:solid;border-bottom-width:2px;padding-inline:.25rem;padding-block:1rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500);white-space:nowrap}.tabs[data-v-2de10beb] .tab:not(.active){border-color:transparent;color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.tabs[data-v-2de10beb] .tab:hover:not(.active){color:var(--color-text-primary, oklch(21.049% .032 264.664))}@media(hover:hover){.tabs[data-v-2de10beb] .tab:hover:not(.active):hover{border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}}.tabs[data-v-2de10beb] .tab .tab-count{border-style:solid;border-width:1px}.page-header[data-v-bd4e0bfa]{position:relative;background-color:var(--color-surface-canvas, oklch(100% 0 0))}.page-header.header-sticky[data-v-bd4e0bfa]{position:sticky;z-index:21;top:var(--v55f7079c)}.page-header.header-sticky.overlap[data-v-bd4e0bfa]{border-bottom-style:solid;border-bottom-width:1px;border-color:var(--color-border-subtle, oklch(92.789% .0041 286.32));box-shadow:var(--shadow-page-header-overlap);padding-top:var(--v9a339d4c)}.page-header.header-sticky.overlap .heading[data-v-bd4e0bfa]{margin-bottom:.25rem}.page-header.header-sticky.overlap .heading h1[data-v-bd4e0bfa]{font-size:var(--text-lg, 1.125rem);line-height:var(--tw-leading, var(--text-lg--line-height, calc(1.75 / 1.125)))}.page-header .back-button-wrapper[data-v-bd4e0bfa]{height:1.25rem;width:100%}.page-header h1[data-v-bd4e0bfa]{font-size:var(--text-2xl, 1.5rem);line-height:var(--tw-leading, var(--text-2xl--line-height, calc(2 / 1.5)));transition-property:all;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:.15s}@media(min-width:48rem){.page-header h1[data-v-bd4e0bfa]{font-size:1.75rem}}.page-header .tabs[data-v-bd4e0bfa]{margin-bottom:2rem}.page-header .heading[data-v-bd4e0bfa]{margin-bottom:1rem;display:flex;align-items:center}@media(min-width:48rem){.page-header .heading[data-v-bd4e0bfa]{margin-bottom:1.25rem}}.page-header .heading[data-v-bd4e0bfa] .image-wrapper{width:fit-content}.page-header .heading[data-v-bd4e0bfa] .image-wrapper .image{max-height:3.5rem}.page-header .heading .header-start[data-v-bd4e0bfa]{display:flex;flex-direction:row;align-items:center;gap:1rem}.page-header .heading .actions[data-v-bd4e0bfa]{margin-left:auto;display:flex;gap:.5rem}.page-header .heading .title-wrapper[data-v-bd4e0bfa]{display:flex;flex-direction:column}.page-header .heading .title-wrapper .subtitle[data-v-bd4e0bfa]{font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-semibold, 600);letter-spacing:var(--tracking-tight, -.025em);color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.page-header .filters[data-v-bd4e0bfa]{display:flex;gap:.5rem;overflow:auto;padding-bottom:.5rem}@media(min-width:48rem){.page-header .filters[data-v-bd4e0bfa]{flex-wrap:wrap}}.page-header .filters .search[data-v-bd4e0bfa]{min-width:12rem}@media(min-width:64rem){.page-header .filters .search[data-v-bd4e0bfa]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-bd4e0bfa]{display:contents}.page-header .filters .filter-group[data-v-bd4e0bfa] .title{margin-left:1rem}.hamburger-icon[data-v-05812864]{cursor:pointer}.page-layout[data-v-37c94be7]{position:relative;display:flex;flex-direction:column;overflow-x:clip}.page-layout .wrap[data-v-37c94be7]{margin-right:calc(-1*(100vw - 100%));display:flex;height:100%;width:100vw;flex-direction:column;align-self:center}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{max-width:100.4375rem}}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{flex-direction:row}}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{gap:1.25rem}}@media(min-width:64rem){.page-layout .wrap[data-v-37c94be7]{padding-inline:1.5rem}}@media(min-width:96rem){.page-layout .wrap[data-v-37c94be7]{gap:5rem}}.page-layout .wrap.has-sidebar .main[data-v-37c94be7]{padding-inline:1.5rem}@media(min-width:64rem){.page-layout .wrap.has-sidebar .main[data-v-37c94be7]{padding-right:0}}.page-layout.layout-mirrored .main[data-v-37c94be7]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-37c94be7]{order:2}.page-layout .sidebar[data-v-37c94be7]{position:sticky;margin-bottom:1rem;height:100%;top:var(--v1b3cab92)}@media(min-width:64rem){.page-layout .sidebar[data-v-37c94be7]{margin-top:2.5rem}}.page-layout .sidebar-left[data-v-37c94be7]{display:none}@media(min-width:64rem){.page-layout .sidebar-left[data-v-37c94be7]{display:block}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-37c94be7]{width:fit-content}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-37c94be7]{max-width:10rem}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-37c94be7]{width:100%}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-37c94be7]{max-width:14.5rem}}@media(min-width:80rem){.page-layout .sidebar-left[data-v-37c94be7]:not(.mini) .menu-item-content{padding-right:1rem}}@media(min-width:96rem){.page-layout .sidebar-left[data-v-37c94be7]:not(.mini) .menu-item-content{padding-right:0}}.page-layout .sidebar-right[data-v-37c94be7]{padding-inline:1.5rem;padding-block:1rem;padding-top:0}@media(min-width:64rem){.page-layout .sidebar-right[data-v-37c94be7]{padding:0}}@media(min-width:64rem){.page-layout .sidebar-right[data-v-37c94be7]{padding-top:1rem}}.page-layout .main[data-v-37c94be7]{min-width:0;flex-grow:1;padding-block:1rem}@media(min-width:64rem){.page-layout .main[data-v-37c94be7]{padding-block:2.5rem}}.persistent button[data-v-daacf17f]{appearance:none;background-color:transparent;border:0;padding:0;color:inherit;font:inherit;line-height:inherit}.persistent .label .badge[data-v-daacf17f]{margin-right:.375rem}.persistent .label .micro-icon[data-v-daacf17f]{margin-left:.25rem}.persistent [data-v-daacf17f] .menu .current{color:var(--color-text-primary, oklch(21.049% .032 264.664))!important}.step-connector[data-v-30e2d7ef]:not(.absolute){flex:1}.step-connector.absolute[data-v-30e2d7ef]{position:absolute;top:9.1px;right:calc(50% + 11px);left:calc(-50% + 11px)}.step-connector .horizontal-line[data-v-30e2d7ef]{display:block;border-top-style:solid;border-top-width:.4rem;border-color:var(--color-surface-subtle, oklch(100% 0 0))}.step[data-v-ac6a9dde]:not(.xs){position:relative;display:flex;flex:1;flex-direction:column;align-items:center}.step .step-content[data-v-ac6a9dde]{display:flex;flex-direction:column;align-items:center}.step .step-content .step-state[data-v-ac6a9dde]{position:relative;z-index:1;display:flex;height:1.5rem;width:1.5rem;align-items:center;justify-content:center;border-radius:50%;background-color:var(--color-surface-subtle, oklch(100% 0 0));font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)))}.step .step-content .step-state.active[data-v-ac6a9dde]:before{position:absolute;z-index:1;height:2.5rem;width:2.5rem;border-radius:50%;opacity:10%;content:""}.step .step-content .step-state .micro-icon[data-v-ac6a9dde]{color:var(--color-text-inverse, oklch(100% 0 0))}.step .step-content .label[data-v-ac6a9dde]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.step .step-content .label.unfinished[data-v-ac6a9dde]{color:var(--color-text-disabled, oklch(51.786% .0108 264.705))}.stepper[data-v-1f35bf68]{z-index:1}.stepper.xs .wrapper[data-v-1f35bf68]{align-items:center}.stepper.xs .wrapper[data-v-1f35bf68] .step-connector:first-child .horizontal-line{border-top-left-radius:calc(infinity * 1px);border-bottom-left-radius:calc(infinity * 1px)}.stepper.xs .wrapper[data-v-1f35bf68] .step-connector:last-child .horizontal-line{border-top-right-radius:calc(infinity * 1px);border-bottom-right-radius:calc(infinity * 1px)}.stepper[data-v-1f35bf68]:not(.xs){justify-content:space-between}.stepper.default[data-v-1f35bf68] .step-connector .active{border-color:var(--color-accent, oklch(54.615% .2152 262.881))}.stepper.default[data-v-1f35bf68] .step-state.finished,.stepper.default[data-v-1f35bf68] .step-state.active,.stepper.default[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-accent, oklch(54.615% .2152 262.881))}.stepper.default[data-v-1f35bf68] .step-state .icon{color:var(--color-on-accent, oklch(100% 0 0))}.stepper.error[data-v-1f35bf68] .step-connector .active{border-color:var(--color-danger, oklch(61.535% .2075 25.224))}.stepper.error[data-v-1f35bf68] .step-state.finished,.stepper.error[data-v-1f35bf68] .step-state.active,.stepper.error[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-danger, oklch(61.535% .2075 25.224))}.stepper.error[data-v-1f35bf68] .step-state .icon{color:var(--color-on-danger, oklch(100% 0 0))}.stepper.warning[data-v-1f35bf68] .step-connector .active{border-color:var(--color-warning, oklch(58.272% .162 45.983))}.stepper.warning[data-v-1f35bf68] .step-state.finished,.stepper.warning[data-v-1f35bf68] .step-state.active,.stepper.warning[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-warning, oklch(58.272% .162 45.983))}.stepper.warning[data-v-1f35bf68] .step-state .icon{color:var(--color-on-warning, oklch(100% 0 0))}.stepper.success[data-v-1f35bf68] .step-connector .active{border-color:var(--color-success, oklch(55.106% .1432 149.926))}.stepper.success[data-v-1f35bf68] .step-state.finished,.stepper.success[data-v-1f35bf68] .step-state.active,.stepper.success[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-success, oklch(55.106% .1432 149.926))}.stepper.success[data-v-1f35bf68] .step-state .icon{color:var(--color-on-success, oklch(100% 0 0))}.stepper.disabled[data-v-1f35bf68] .step-connector .active{background-color:var(--color-field-border, oklch(86.277% .0063 264.565))}.stepper.disabled[data-v-1f35bf68] .step-state.finished,.stepper.disabled[data-v-1f35bf68] .step-state.active,.stepper.disabled[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-field-border, oklch(86.277% .0063 264.565))}.stepper.disabled[data-v-1f35bf68] .step-state.active:before{background-color:var(--color-border-strong, oklch(73.455% .008 264.608))}.stepper.disabled[data-v-1f35bf68] .step-state .icon{color:var(--color-text-primary, oklch(21.049% .032 264.664))}.stepper .wrapper[data-v-1f35bf68]{position:relative;display:flex;flex-direction:row}.stepper .active-step[data-v-1f35bf68]{margin-top:.5rem;font-size:var(--text-sm, .875rem);line-height:var(--tw-leading, var(--text-sm--line-height, calc(1.25 / .875)));font-weight:var(--font-weight-medium, 500)}.filter-tabs[data-v-77bf531e]{display:flex;justify-content:space-between;gap:.5625rem}[data-v-77bf531e] .tab{display:flex;height:2.5rem;flex-grow:1;align-items:center;justify-content:space-between;border-radius:var(--radius-lg, .5rem);border-style:solid;border-width:1px;padding-right:.625rem;padding-left:1rem}[data-v-77bf531e] .tab:not(.active){border-color:var(--color-border-default, oklch(86.277% .0063 264.565))}[data-v-77bf531e] .tab .tab-count{border-style:solid;border-width:1px}[data-v-77bf531e] .tab.active{border-style:solid;border-width:2px;padding-right:.5625rem;padding-left:.9375rem}.container{position:relative;height:100%;color:var(--color-body-text);font-family:var(--font-sans)}.container #probo-product-search-bar{outline:none}.container span.option{display:flex;gap:1rem;align-items:center}.container span.option .title{font-size:1.125rem;font-weight:600;display:block}.container span.option .subtitle{color:#6a7282;font-size:.875rem;line-height:1.25rem;margin-top:.25rem;display:block}`, F0 = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, r] of t)
    o[a] = r;
  return o;
}, R0 = { class: "container" }, U0 = {
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
    hideDeliverySection: Boolean,
    buttonStartText: {
      type: String,
      default: ""
    },
    disableFirstStepAutofocus: Boolean
  },
  setup(e) {
    const t = e, o = /* @__PURE__ */ Xe(new L0({ proxy: "" })), a = /* @__PURE__ */ H(null);
    fe(o, () => {
      o.language && o.setLanguage(o.language);
    });
    const r = j({
      get: () => o.getConfig(),
      set: (s) => {
        a.value && clearTimeout(a.value), o.updateExternal && (a.value = setTimeout(() => {
          o.setOption(s).getNextOption();
        }, 300));
      }
    }), i = j({
      get: () => o.overwrites.find((s) => s.code === o.product.code) || {},
      set: (s) => {
        o.overwrites.some((d) => d.code === o.product.code) ? o.overwrites = o.overwrites.map(
          (d) => d.code === o.product.code ? { ...d, ...s } : d
        ) : o.overwrites.push(s);
      }
    });
    function n(s) {
      o.recalculate(s);
    }
    function l() {
      const s = new Event(
        o.isEditor ? "connectConfiguratorEditor:started" : "connectConfigurator:started"
      );
      window.dispatchEvent(s);
    }
    return tt(async () => {
      window.connectConfiguratorEditor = o, o.isEditor = !0, t.proxy && (o.init({
        proxy: t.proxy,
        language: t.language,
        priceType: t.priceType,
        storeProductsLocally: t.storeProductsLocally,
        callbackUrl: t.callbackUrl,
        internalProductId: t.internalProductId,
        hideDeliverySection: t.hideDeliverySection
      }), t.productCode && await (await o.setProduct(t.productCode)).getNextOption());
    }), (s, c) => (g(), S("div", R0, [
      o.alert.title ? (g(), oe(y(lr), na(De({ key: 0 }, o.alert)), null, 16)) : R("", !0),
      F(y(k0), {
        modelValue: r.value,
        "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
        overwrites: i.value,
        "onUpdate:overwrites": c[1] || (c[1] = (d) => i.value = d),
        template: o.options,
        "accordion-state": o.openState,
        loading: o.loading,
        "delivery-options": o.deliveryOptions,
        "hide-delivery-section": o.hideDeliverySection,
        editor: "",
        "product-code": o.product.code,
        "button-start-text": o.buttonStartText,
        "can-order": o.canOrder,
        "disable-first-step-autofocus": e.disableFirstStepAutofocus,
        onRecalculate: n,
        "onConfigurator:started": l
      }, null, 8, ["modelValue", "overwrites", "template", "accordion-state", "loading", "delivery-options", "hide-delivery-section", "product-code", "button-start-text", "can-order", "disable-first-step-autofocus"])
    ]));
  }
}, ga = /* @__PURE__ */ F0(U0, [["styles", [D0]]]), q0 = /* @__PURE__ */ qc({
  ...ga,
  setup(e, t) {
    return Ur(ga).use(iu), to.autoDetectLanguage = !1, ga.setup ? ga.setup(e, t) : null;
  }
});
customElements.define("connect-configurator-editor", q0);
