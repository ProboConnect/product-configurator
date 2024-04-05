/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function HE(A, B) {
  const g = new Set(A.split(","));
  return B ? (Q) => g.has(Q.toLowerCase()) : (Q) => g.has(Q);
}
const lA = {}, Jg = [], CB = () => {
}, S0 = () => !1, wC = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // uppercase letter
(A.charCodeAt(2) > 122 || A.charCodeAt(2) < 97), dE = (A) => A.startsWith("onUpdate:"), TA = Object.assign, uE = (A, B) => {
  const g = A.indexOf(B);
  g > -1 && A.splice(g, 1);
}, R0 = Object.prototype.hasOwnProperty, tA = (A, B) => R0.call(A, B), $ = Array.isArray, Tg = (A) => MQ(A) === "[object Map]", Sg = (A) => MQ(A) === "[object Set]", CI = (A) => MQ(A) === "[object Date]", wA = (A) => typeof A == "function", fA = (A) => typeof A == "string", _B = (A) => typeof A == "symbol", hA = (A) => A !== null && typeof A == "object", BD = (A) => (hA(A) || wA(A)) && wA(A.then) && wA(A.catch), gD = Object.prototype.toString, MQ = (A) => gD.call(A), L0 = (A) => MQ(A).slice(8, -1), QD = (A) => MQ(A) === "[object Object]", vE = (A) => fA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, qg = /* @__PURE__ */ HE(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), DC = (A) => {
  const B = /* @__PURE__ */ Object.create(null);
  return (g) => B[g] || (B[g] = A(g));
}, m0 = /-(\w)/g, IB = DC((A) => A.replace(m0, (B, g) => g ? g.toUpperCase() : "")), K0 = /\B([A-Z])/g, PB = DC(
  (A) => A.replace(K0, "-$1").toLowerCase()
), oC = DC((A) => A.charAt(0).toUpperCase() + A.slice(1)), HC = DC((A) => A ? `on${oC(A)}` : ""), $B = (A, B) => !Object.is(A, B), zQ = (A, B) => {
  for (let g = 0; g < A.length; g++)
    A[g](B);
}, mQ = (A, B, g) => {
  Object.defineProperty(A, B, {
    configurable: !0,
    enumerable: !1,
    value: g
  });
}, gQ = (A) => {
  const B = parseFloat(A);
  return isNaN(B) ? A : B;
}, ZC = (A) => {
  const B = fA(A) ? Number(A) : NaN;
  return isNaN(B) ? A : B;
};
let EI;
const CD = () => EI || (EI = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bg(A) {
  if ($(A)) {
    const B = {};
    for (let g = 0; g < A.length; g++) {
      const Q = A[g], C = fA(Q) ? W0(Q) : Bg(Q);
      if (C)
        for (const E in C)
          B[E] = C[E];
    }
    return B;
  } else if (fA(A) || hA(A))
    return A;
}
const y0 = /;(?![^(]*\))/g, p0 = /:([^]+)/, x0 = /\/\*[^]*?\*\//g;
function W0(A) {
  const B = {};
  return A.replace(x0, "").split(y0).forEach((g) => {
    if (g) {
      const Q = g.split(p0);
      Q.length > 1 && (B[Q[0].trim()] = Q[1].trim());
    }
  }), B;
}
function iA(A) {
  let B = "";
  if (fA(A))
    B = A;
  else if ($(A))
    for (let g = 0; g < A.length; g++) {
      const Q = iA(A[g]);
      Q && (B += Q + " ");
    }
  else if (hA(A))
    for (const g in A)
      A[g] && (B += g + " ");
  return B.trim();
}
function zg(A) {
  if (!A)
    return null;
  let { class: B, style: g } = A;
  return B && !fA(B) && (A.class = iA(B)), g && (A.style = Bg(g)), A;
}
const b0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", V0 = /* @__PURE__ */ HE(b0);
function ED(A) {
  return !!A || A === "";
}
function Z0(A, B) {
  if (A.length !== B.length)
    return !1;
  let g = !0;
  for (let Q = 0; g && Q < A.length; Q++)
    g = rg(A[Q], B[Q]);
  return g;
}
function rg(A, B) {
  if (A === B)
    return !0;
  let g = CI(A), Q = CI(B);
  if (g || Q)
    return g && Q ? A.getTime() === B.getTime() : !1;
  if (g = _B(A), Q = _B(B), g || Q)
    return A === B;
  if (g = $(A), Q = $(B), g || Q)
    return g && Q ? Z0(A, B) : !1;
  if (g = hA(A), Q = hA(B), g || Q) {
    if (!g || !Q)
      return !1;
    const C = Object.keys(A).length, E = Object.keys(B).length;
    if (C !== E)
      return !1;
    for (const I in A) {
      const e = A.hasOwnProperty(I), Y = B.hasOwnProperty(I);
      if (e && !Y || !e && Y || !rg(A[I], B[I]))
        return !1;
    }
  }
  return String(A) === String(B);
}
function kE(A, B) {
  return A.findIndex((g) => rg(g, B));
}
const V = (A) => fA(A) ? A : A == null ? "" : $(A) || hA(A) && (A.toString === gD || !wA(A.toString)) ? JSON.stringify(A, ID, 2) : String(A), ID = (A, B) => B && B.__v_isRef ? ID(A, B.value) : Tg(B) ? {
  [`Map(${B.size})`]: [...B.entries()].reduce(
    (g, [Q, C], E) => (g[dC(Q, E) + " =>"] = C, g),
    {}
  )
} : Sg(B) ? {
  [`Set(${B.size})`]: [...B.values()].map((g) => dC(g))
} : _B(B) ? dC(B) : hA(B) && !$(B) && !QD(B) ? String(B) : B, dC = (A, B = "") => {
  var g;
  return _B(A) ? `Symbol(${(g = A.description) != null ? g : B})` : A;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $A;
class wD {
  constructor(B = !1) {
    this.detached = B, this._active = !0, this.effects = [], this.cleanups = [], this.parent = $A, !B && $A && (this.index = ($A.scopes || ($A.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(B) {
    if (this._active) {
      const g = $A;
      try {
        return $A = this, B();
      } finally {
        $A = g;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    $A = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    $A = this.parent;
  }
  stop(B) {
    if (this._active) {
      let g, Q;
      for (g = 0, Q = this.effects.length; g < Q; g++)
        this.effects[g].stop();
      for (g = 0, Q = this.cleanups.length; g < Q; g++)
        this.cleanups[g]();
      if (this.scopes)
        for (g = 0, Q = this.scopes.length; g < Q; g++)
          this.scopes[g].stop(!0);
      if (!this.detached && this.parent && !B) {
        const C = this.parent.scopes.pop();
        C && C !== this && (this.parent.scopes[this.index] = C, C.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function q0(A) {
  return new wD(A);
}
function X0(A, B = $A) {
  B && B.active && B.effects.push(A);
}
function DD() {
  return $A;
}
function oD(A) {
  $A && $A.cleanups.push(A);
}
let ig;
class fE {
  constructor(B, g, Q, C) {
    this.fn = B, this.trigger = g, this.scheduler = Q, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, X0(this, C);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Gg();
      for (let B = 0; B < this._depsLength; B++) {
        const g = this.deps[B];
        if (g.computed && (_0(g.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ug();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(B) {
    this._dirtyLevel = B ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let B = qB, g = ig;
    try {
      return qB = !0, ig = this, this._runnings++, II(this), this.fn();
    } finally {
      wI(this), this._runnings--, ig = g, qB = B;
    }
  }
  stop() {
    var B;
    this.active && (II(this), wI(this), (B = this.onStop) == null || B.call(this), this.active = !1);
  }
}
function _0(A) {
  return A.value;
}
function II(A) {
  A._trackId++, A._depsLength = 0;
}
function wI(A) {
  if (A.deps.length > A._depsLength) {
    for (let B = A._depsLength; B < A.deps.length; B++)
      eD(A.deps[B], A);
    A.deps.length = A._depsLength;
  }
}
function eD(A, B) {
  const g = A.get(B);
  g !== void 0 && B._trackId !== g && (A.delete(B), A.size === 0 && A.cleanup());
}
let qB = !0, qC = 0;
const YD = [];
function Gg() {
  YD.push(qB), qB = !1;
}
function Ug() {
  const A = YD.pop();
  qB = A === void 0 ? !0 : A;
}
function JE() {
  qC++;
}
function TE() {
  for (qC--; !qC && XC.length; )
    XC.shift()();
}
function MD(A, B, g) {
  if (B.get(A) !== A._trackId) {
    B.set(A, A._trackId);
    const Q = A.deps[A._depsLength];
    Q !== B ? (Q && eD(Q, A), A.deps[A._depsLength++] = B) : A._depsLength++;
  }
}
const XC = [];
function PD(A, B, g) {
  JE();
  for (const Q of A.keys()) {
    let C;
    Q._dirtyLevel < B && (C ?? (C = A.get(Q) === Q._trackId)) && (Q._shouldSchedule || (Q._shouldSchedule = Q._dirtyLevel === 0), Q._dirtyLevel = B), Q._shouldSchedule && (C ?? (C = A.get(Q) === Q._trackId)) && (Q.trigger(), (!Q._runnings || Q.allowRecurse) && Q._dirtyLevel !== 2 && (Q._shouldSchedule = !1, Q.scheduler && XC.push(Q.scheduler)));
  }
  TE();
}
const tD = (A, B) => {
  const g = /* @__PURE__ */ new Map();
  return g.cleanup = A, g.computed = B, g;
}, KQ = /* @__PURE__ */ new WeakMap(), ag = Symbol(""), _C = Symbol("");
function qA(A, B, g) {
  if (qB && ig) {
    let Q = KQ.get(A);
    Q || KQ.set(A, Q = /* @__PURE__ */ new Map());
    let C = Q.get(g);
    C || Q.set(g, C = tD(() => Q.delete(g))), MD(
      ig,
      C
    );
  }
}
function zB(A, B, g, Q, C, E) {
  const I = KQ.get(A);
  if (!I)
    return;
  let e = [];
  if (B === "clear")
    e = [...I.values()];
  else if (g === "length" && $(A)) {
    const Y = Number(Q);
    I.forEach((M, P) => {
      (P === "length" || !_B(P) && P >= Y) && e.push(M);
    });
  } else
    switch (g !== void 0 && e.push(I.get(g)), B) {
      case "add":
        $(A) ? vE(g) && e.push(I.get("length")) : (e.push(I.get(ag)), Tg(A) && e.push(I.get(_C)));
        break;
      case "delete":
        $(A) || (e.push(I.get(ag)), Tg(A) && e.push(I.get(_C)));
        break;
      case "set":
        Tg(A) && e.push(I.get(ag));
        break;
    }
  JE();
  for (const Y of e)
    Y && PD(
      Y,
      4
    );
  TE();
}
function $0(A, B) {
  var g;
  return (g = KQ.get(A)) == null ? void 0 : g.get(B);
}
const Ae = /* @__PURE__ */ HE("__proto__,__v_isRef,__isVue"), cD = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(_B)
), DI = /* @__PURE__ */ Be();
function Be() {
  const A = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((B) => {
    A[B] = function(...g) {
      const Q = DA(this);
      for (let E = 0, I = this.length; E < I; E++)
        qA(Q, "get", E + "");
      const C = Q[B](...g);
      return C === -1 || C === !1 ? Q[B](...g.map(DA)) : C;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((B) => {
    A[B] = function(...g) {
      Gg(), JE();
      const Q = DA(this)[B].apply(this, g);
      return TE(), Ug(), Q;
    };
  }), A;
}
function ge(A) {
  const B = DA(this);
  return qA(B, "has", A), B.hasOwnProperty(A);
}
class iD {
  constructor(B = !1, g = !1) {
    this._isReadonly = B, this._isShallow = g;
  }
  get(B, g, Q) {
    const C = this._isReadonly, E = this._isShallow;
    if (g === "__v_isReactive")
      return !C;
    if (g === "__v_isReadonly")
      return C;
    if (g === "__v_isShallow")
      return E;
    if (g === "__v_raw")
      return Q === (C ? E ? ce : sD : E ? rD : FD).get(B) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(B) === Object.getPrototypeOf(Q) ? B : void 0;
    const I = $(B);
    if (!C) {
      if (I && tA(DI, g))
        return Reflect.get(DI, g, Q);
      if (g === "hasOwnProperty")
        return ge;
    }
    const e = Reflect.get(B, g, Q);
    return (_B(g) ? cD.has(g) : Ae(g)) || (C || qA(B, "get", g), E) ? e : jA(e) ? I && vE(g) ? e : e.value : hA(e) ? C ? nD(e) : EB(e) : e;
  }
}
class aD extends iD {
  constructor(B = !1) {
    super(!1, B);
  }
  set(B, g, Q, C) {
    let E = B[g];
    if (!this._isShallow) {
      const Y = sg(E);
      if (!yQ(Q) && !sg(Q) && (E = DA(E), Q = DA(Q)), !$(B) && jA(E) && !jA(Q))
        return Y ? !1 : (E.value = Q, !0);
    }
    const I = $(B) && vE(g) ? Number(g) < B.length : tA(B, g), e = Reflect.set(B, g, Q, C);
    return B === DA(C) && (I ? $B(Q, E) && zB(B, "set", g, Q) : zB(B, "add", g, Q)), e;
  }
  deleteProperty(B, g) {
    const Q = tA(B, g);
    B[g];
    const C = Reflect.deleteProperty(B, g);
    return C && Q && zB(B, "delete", g, void 0), C;
  }
  has(B, g) {
    const Q = Reflect.has(B, g);
    return (!_B(g) || !cD.has(g)) && qA(B, "has", g), Q;
  }
  ownKeys(B) {
    return qA(
      B,
      "iterate",
      $(B) ? "length" : ag
    ), Reflect.ownKeys(B);
  }
}
class Qe extends iD {
  constructor(B = !1) {
    super(!0, B);
  }
  set(B, g) {
    return !0;
  }
  deleteProperty(B, g) {
    return !0;
  }
}
const Ce = /* @__PURE__ */ new aD(), Ee = /* @__PURE__ */ new Qe(), Ie = /* @__PURE__ */ new aD(
  !0
), OE = (A) => A, eC = (A) => Reflect.getPrototypeOf(A);
function GQ(A, B, g = !1, Q = !1) {
  A = A.__v_raw;
  const C = DA(A), E = DA(B);
  g || ($B(B, E) && qA(C, "get", B), qA(C, "get", E));
  const { has: I } = eC(C), e = Q ? OE : g ? NE : QQ;
  if (I.call(C, B))
    return e(A.get(B));
  if (I.call(C, E))
    return e(A.get(E));
  A !== C && A.get(B);
}
function UQ(A, B = !1) {
  const g = this.__v_raw, Q = DA(g), C = DA(A);
  return B || ($B(A, C) && qA(Q, "has", A), qA(Q, "has", C)), A === C ? g.has(A) : g.has(A) || g.has(C);
}
function lQ(A, B = !1) {
  return A = A.__v_raw, !B && qA(DA(A), "iterate", ag), Reflect.get(A, "size", A);
}
function oI(A) {
  A = DA(A);
  const B = DA(this);
  return eC(B).has.call(B, A) || (B.add(A), zB(B, "add", A, A)), this;
}
function eI(A, B) {
  B = DA(B);
  const g = DA(this), { has: Q, get: C } = eC(g);
  let E = Q.call(g, A);
  E || (A = DA(A), E = Q.call(g, A));
  const I = C.call(g, A);
  return g.set(A, B), E ? $B(B, I) && zB(g, "set", A, B) : zB(g, "add", A, B), this;
}
function YI(A) {
  const B = DA(this), { has: g, get: Q } = eC(B);
  let C = g.call(B, A);
  C || (A = DA(A), C = g.call(B, A)), Q && Q.call(B, A);
  const E = B.delete(A);
  return C && zB(B, "delete", A, void 0), E;
}
function MI() {
  const A = DA(this), B = A.size !== 0, g = A.clear();
  return B && zB(A, "clear", void 0, void 0), g;
}
function HQ(A, B) {
  return function(Q, C) {
    const E = this, I = E.__v_raw, e = DA(I), Y = B ? OE : A ? NE : QQ;
    return !A && qA(e, "iterate", ag), I.forEach((M, P) => Q.call(C, Y(M), Y(P), E));
  };
}
function dQ(A, B, g) {
  return function(...Q) {
    const C = this.__v_raw, E = DA(C), I = Tg(E), e = A === "entries" || A === Symbol.iterator && I, Y = A === "keys" && I, M = C[A](...Q), P = g ? OE : B ? NE : QQ;
    return !B && qA(
      E,
      "iterate",
      Y ? _C : ag
    ), {
      // iterator protocol
      next() {
        const { value: t, done: i } = M.next();
        return i ? { value: t, done: i } : {
          value: e ? [P(t[0]), P(t[1])] : P(t),
          done: i
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function mB(A) {
  return function(...B) {
    return A === "delete" ? !1 : A === "clear" ? void 0 : this;
  };
}
function we() {
  const A = {
    get(E) {
      return GQ(this, E);
    },
    get size() {
      return lQ(this);
    },
    has: UQ,
    add: oI,
    set: eI,
    delete: YI,
    clear: MI,
    forEach: HQ(!1, !1)
  }, B = {
    get(E) {
      return GQ(this, E, !1, !0);
    },
    get size() {
      return lQ(this);
    },
    has: UQ,
    add: oI,
    set: eI,
    delete: YI,
    clear: MI,
    forEach: HQ(!1, !0)
  }, g = {
    get(E) {
      return GQ(this, E, !0);
    },
    get size() {
      return lQ(this, !0);
    },
    has(E) {
      return UQ.call(this, E, !0);
    },
    add: mB("add"),
    set: mB("set"),
    delete: mB("delete"),
    clear: mB("clear"),
    forEach: HQ(!0, !1)
  }, Q = {
    get(E) {
      return GQ(this, E, !0, !0);
    },
    get size() {
      return lQ(this, !0);
    },
    has(E) {
      return UQ.call(this, E, !0);
    },
    add: mB("add"),
    set: mB("set"),
    delete: mB("delete"),
    clear: mB("clear"),
    forEach: HQ(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((E) => {
    A[E] = dQ(
      E,
      !1,
      !1
    ), g[E] = dQ(
      E,
      !0,
      !1
    ), B[E] = dQ(
      E,
      !1,
      !0
    ), Q[E] = dQ(
      E,
      !0,
      !0
    );
  }), [
    A,
    g,
    B,
    Q
  ];
}
const [
  De,
  oe,
  ee,
  Ye
] = /* @__PURE__ */ we();
function zE(A, B) {
  const g = B ? A ? Ye : ee : A ? oe : De;
  return (Q, C, E) => C === "__v_isReactive" ? !A : C === "__v_isReadonly" ? A : C === "__v_raw" ? Q : Reflect.get(
    tA(g, C) && C in Q ? g : Q,
    C,
    E
  );
}
const Me = {
  get: /* @__PURE__ */ zE(!1, !1)
}, Pe = {
  get: /* @__PURE__ */ zE(!1, !0)
}, te = {
  get: /* @__PURE__ */ zE(!0, !1)
}, FD = /* @__PURE__ */ new WeakMap(), rD = /* @__PURE__ */ new WeakMap(), sD = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap();
function ie(A) {
  switch (A) {
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
function ae(A) {
  return A.__v_skip || !Object.isExtensible(A) ? 0 : ie(L0(A));
}
function EB(A) {
  return sg(A) ? A : jE(
    A,
    !1,
    Ce,
    Me,
    FD
  );
}
function Fe(A) {
  return jE(
    A,
    !1,
    Ie,
    Pe,
    rD
  );
}
function nD(A) {
  return jE(
    A,
    !0,
    Ee,
    te,
    sD
  );
}
function jE(A, B, g, Q, C) {
  if (!hA(A) || A.__v_raw && !(B && A.__v_isReactive))
    return A;
  const E = C.get(A);
  if (E)
    return E;
  const I = ae(A);
  if (I === 0)
    return A;
  const e = new Proxy(
    A,
    I === 2 ? Q : g
  );
  return C.set(A, e), e;
}
function Fg(A) {
  return sg(A) ? Fg(A.__v_raw) : !!(A && A.__v_isReactive);
}
function sg(A) {
  return !!(A && A.__v_isReadonly);
}
function yQ(A) {
  return !!(A && A.__v_isShallow);
}
function hD(A) {
  return Fg(A) || sg(A);
}
function DA(A) {
  const B = A && A.__v_raw;
  return B ? DA(B) : A;
}
function GD(A) {
  return Object.isExtensible(A) && mQ(A, "__v_skip", !0), A;
}
const QQ = (A) => hA(A) ? EB(A) : A, NE = (A) => hA(A) ? nD(A) : A;
class UD {
  constructor(B, g, Q, C) {
    this.getter = B, this._setter = g, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new fE(
      () => B(this._value),
      () => Xg(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !C, this.__v_isReadonly = Q;
  }
  get value() {
    const B = DA(this);
    return (!B._cacheable || B.effect.dirty) && $B(B._value, B._value = B.effect.run()) && Xg(B, 4), lD(B), B.effect._dirtyLevel >= 2 && Xg(B, 2), B._value;
  }
  set value(B) {
    this._setter(B);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(B) {
    this.effect.dirty = B;
  }
  // #endregion
}
function re(A, B, g = !1) {
  let Q, C;
  const E = wA(A);
  return E ? (Q = A, C = CB) : (Q = A.get, C = A.set), new UD(Q, C, E || !C, g);
}
function lD(A) {
  var B;
  qB && ig && (A = DA(A), MD(
    ig,
    (B = A.dep) != null ? B : A.dep = tD(
      () => A.dep = void 0,
      A instanceof UD ? A : void 0
    )
  ));
}
function Xg(A, B = 4, g) {
  A = DA(A);
  const Q = A.dep;
  Q && PD(
    Q,
    B
  );
}
function jA(A) {
  return !!(A && A.__v_isRef === !0);
}
function Z(A) {
  return HD(A, !1);
}
function SE(A) {
  return HD(A, !0);
}
function HD(A, B) {
  return jA(A) ? A : new se(A, B);
}
class se {
  constructor(B, g) {
    this.__v_isShallow = g, this.dep = void 0, this.__v_isRef = !0, this._rawValue = g ? B : DA(B), this._value = g ? B : QQ(B);
  }
  get value() {
    return lD(this), this._value;
  }
  set value(B) {
    const g = this.__v_isShallow || yQ(B) || sg(B);
    B = g ? B : DA(B), $B(B, this._rawValue) && (this._rawValue = B, this._value = g ? B : QQ(B), Xg(this, 4));
  }
}
function PI(A) {
  Xg(A, 4);
}
function y(A) {
  return jA(A) ? A.value : A;
}
const ne = {
  get: (A, B, g) => y(Reflect.get(A, B, g)),
  set: (A, B, g, Q) => {
    const C = A[B];
    return jA(C) && !jA(g) ? (C.value = g, !0) : Reflect.set(A, B, g, Q);
  }
};
function dD(A) {
  return Fg(A) ? A : new Proxy(A, ne);
}
function he(A) {
  const B = $(A) ? new Array(A.length) : {};
  for (const g in A)
    B[g] = Ue(A, g);
  return B;
}
class Ge {
  constructor(B, g, Q) {
    this._object = B, this._key = g, this._defaultValue = Q, this.__v_isRef = !0;
  }
  get value() {
    const B = this._object[this._key];
    return B === void 0 ? this._defaultValue : B;
  }
  set value(B) {
    this._object[this._key] = B;
  }
  get dep() {
    return $0(DA(this._object), this._key);
  }
}
function Ue(A, B, g) {
  const Q = A[B];
  return jA(Q) ? Q : new Ge(A, B, g);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function XB(A, B, g, Q) {
  try {
    return Q ? A(...Q) : A();
  } catch (C) {
    PQ(C, B, g);
  }
}
function tB(A, B, g, Q) {
  if (wA(A)) {
    const E = XB(A, B, g, Q);
    return E && BD(E) && E.catch((I) => {
      PQ(I, B, g);
    }), E;
  }
  const C = [];
  for (let E = 0; E < A.length; E++)
    C.push(tB(A[E], B, g, Q));
  return C;
}
function PQ(A, B, g, Q = !0) {
  const C = B ? B.vnode : null;
  if (B) {
    let E = B.parent;
    const I = B.proxy, e = `https://vuejs.org/error-reference/#runtime-${g}`;
    for (; E; ) {
      const M = E.ec;
      if (M) {
        for (let P = 0; P < M.length; P++)
          if (M[P](A, I, e) === !1)
            return;
      }
      E = E.parent;
    }
    const Y = B.appContext.config.errorHandler;
    if (Y) {
      XB(
        Y,
        null,
        10,
        [A, I, e]
      );
      return;
    }
  }
  le(A, g, C, Q);
}
function le(A, B, g, Q = !0) {
  console.error(A);
}
let CQ = !1, $C = !1;
const KA = [];
let HB = 0;
const Og = [];
let pB = null, Mg = 0;
const uD = /* @__PURE__ */ Promise.resolve();
let RE = null;
function QB(A) {
  const B = RE || uD;
  return A ? B.then(this ? A.bind(this) : A) : B;
}
function He(A) {
  let B = HB + 1, g = KA.length;
  for (; B < g; ) {
    const Q = B + g >>> 1, C = KA[Q], E = EQ(C);
    E < A || E === A && C.pre ? B = Q + 1 : g = Q;
  }
  return B;
}
function YC(A) {
  (!KA.length || !KA.includes(
    A,
    CQ && A.allowRecurse ? HB + 1 : HB
  )) && (A.id == null ? KA.push(A) : KA.splice(He(A.id), 0, A), vD());
}
function vD() {
  !CQ && !$C && ($C = !0, RE = uD.then(fD));
}
function de(A) {
  const B = KA.indexOf(A);
  B > HB && KA.splice(B, 1);
}
function ue(A) {
  $(A) ? Og.push(...A) : (!pB || !pB.includes(
    A,
    A.allowRecurse ? Mg + 1 : Mg
  )) && Og.push(A), vD();
}
function tI(A, B, g = CQ ? HB + 1 : 0) {
  for (; g < KA.length; g++) {
    const Q = KA[g];
    if (Q && Q.pre) {
      if (A && Q.id !== A.uid)
        continue;
      KA.splice(g, 1), g--, Q();
    }
  }
}
function kD(A) {
  if (Og.length) {
    const B = [...new Set(Og)].sort(
      (g, Q) => EQ(g) - EQ(Q)
    );
    if (Og.length = 0, pB) {
      pB.push(...B);
      return;
    }
    for (pB = B, Mg = 0; Mg < pB.length; Mg++)
      pB[Mg]();
    pB = null, Mg = 0;
  }
}
const EQ = (A) => A.id == null ? 1 / 0 : A.id, ve = (A, B) => {
  const g = EQ(A) - EQ(B);
  if (g === 0) {
    if (A.pre && !B.pre)
      return -1;
    if (B.pre && !A.pre)
      return 1;
  }
  return g;
};
function fD(A) {
  $C = !1, CQ = !0, KA.sort(ve);
  const B = CB;
  try {
    for (HB = 0; HB < KA.length; HB++) {
      const g = KA[HB];
      g && g.active !== !1 && XB(g, null, 14);
    }
  } finally {
    HB = 0, KA.length = 0, kD(), CQ = !1, RE = null, (KA.length || Og.length) && fD();
  }
}
function ke(A, B, ...g) {
  if (A.isUnmounted)
    return;
  const Q = A.vnode.props || lA;
  let C = g;
  const E = B.startsWith("update:"), I = E && B.slice(7);
  if (I && I in Q) {
    const P = `${I === "modelValue" ? "model" : I}Modifiers`, { number: t, trim: i } = Q[P] || lA;
    i && (C = g.map((F) => fA(F) ? F.trim() : F)), t && (C = g.map(gQ));
  }
  let e, Y = Q[e = HC(B)] || // also try camelCase event handler (#2249)
  Q[e = HC(IB(B))];
  !Y && E && (Y = Q[e = HC(PB(B))]), Y && tB(
    Y,
    A,
    6,
    C
  );
  const M = Q[e + "Once"];
  if (M) {
    if (!A.emitted)
      A.emitted = {};
    else if (A.emitted[e])
      return;
    A.emitted[e] = !0, tB(
      M,
      A,
      6,
      C
    );
  }
}
function JD(A, B, g = !1) {
  const Q = B.emitsCache, C = Q.get(A);
  if (C !== void 0)
    return C;
  const E = A.emits;
  let I = {}, e = !1;
  if (!wA(A)) {
    const Y = (M) => {
      const P = JD(M, B, !0);
      P && (e = !0, TA(I, P));
    };
    !g && B.mixins.length && B.mixins.forEach(Y), A.extends && Y(A.extends), A.mixins && A.mixins.forEach(Y);
  }
  return !E && !e ? (hA(A) && Q.set(A, null), null) : ($(E) ? E.forEach((Y) => I[Y] = null) : TA(I, E), hA(A) && Q.set(A, I), I);
}
function MC(A, B) {
  return !A || !wC(B) ? !1 : (B = B.slice(2).replace(/Once$/, ""), tA(A, B[0].toLowerCase() + B.slice(1)) || tA(A, PB(B)) || tA(A, B));
}
let OA = null, TD = null;
function pQ(A) {
  const B = OA;
  return OA = A, TD = A && A.type.__scopeId || null, B;
}
function oA(A, B = OA, g) {
  if (!B || A._n)
    return A;
  const Q = (...C) => {
    Q._d && HI(-1);
    const E = pQ(B);
    let I;
    try {
      I = A(...C);
    } finally {
      pQ(E), Q._d && HI(1);
    }
    return I;
  };
  return Q._n = !0, Q._c = !0, Q._d = !0, Q;
}
function uC(A) {
  const {
    type: B,
    vnode: g,
    proxy: Q,
    withProxy: C,
    props: E,
    propsOptions: [I],
    slots: e,
    attrs: Y,
    emit: M,
    render: P,
    renderCache: t,
    data: i,
    setupState: F,
    ctx: c,
    inheritAttrs: a
  } = A;
  let r, n;
  const G = pQ(A);
  try {
    if (g.shapeFlag & 4) {
      const u = C || Q, S = u;
      r = lB(
        P.call(
          S,
          u,
          t,
          E,
          F,
          i,
          c
        )
      ), n = Y;
    } else {
      const u = B;
      r = lB(
        u.length > 1 ? u(
          E,
          { attrs: Y, slots: e, emit: M }
        ) : u(
          E,
          null
          /* we know it doesn't need it */
        )
      ), n = B.props ? Y : fe(Y);
    }
  } catch (u) {
    BQ.length = 0, PQ(u, A, 1), r = q(cB);
  }
  let l = r;
  if (n && a !== !1) {
    const u = Object.keys(n), { shapeFlag: S } = l;
    u.length && S & 7 && (I && u.some(dE) && (n = Je(
      n,
      I
    )), l = kB(l, n));
  }
  return g.dirs && (l = kB(l), l.dirs = l.dirs ? l.dirs.concat(g.dirs) : g.dirs), g.transition && (l.transition = g.transition), r = l, pQ(G), r;
}
const fe = (A) => {
  let B;
  for (const g in A)
    (g === "class" || g === "style" || wC(g)) && ((B || (B = {}))[g] = A[g]);
  return B;
}, Je = (A, B) => {
  const g = {};
  for (const Q in A)
    (!dE(Q) || !(Q.slice(9) in B)) && (g[Q] = A[Q]);
  return g;
};
function Te(A, B, g) {
  const { props: Q, children: C, component: E } = A, { props: I, children: e, patchFlag: Y } = B, M = E.emitsOptions;
  if (B.dirs || B.transition)
    return !0;
  if (g && Y >= 0) {
    if (Y & 1024)
      return !0;
    if (Y & 16)
      return Q ? cI(Q, I, M) : !!I;
    if (Y & 8) {
      const P = B.dynamicProps;
      for (let t = 0; t < P.length; t++) {
        const i = P[t];
        if (I[i] !== Q[i] && !MC(M, i))
          return !0;
      }
    }
  } else
    return (C || e) && (!e || !e.$stable) ? !0 : Q === I ? !1 : Q ? I ? cI(Q, I, M) : !0 : !!I;
  return !1;
}
function cI(A, B, g) {
  const Q = Object.keys(B);
  if (Q.length !== Object.keys(A).length)
    return !0;
  for (let C = 0; C < Q.length; C++) {
    const E = Q[C];
    if (B[E] !== A[E] && !MC(g, E))
      return !0;
  }
  return !1;
}
function Oe({ vnode: A, parent: B }, g) {
  for (; B; ) {
    const Q = B.subTree;
    if (Q.suspense && Q.suspense.activeBranch === A && (Q.el = A.el), Q === A)
      (A = B.vnode).el = g, B = B.parent;
    else
      break;
  }
}
const OD = "components", zD = Symbol.for("v-ndc");
function xQ(A) {
  return fA(A) ? ze(OD, A, !1) || A : A || zD;
}
function ze(A, B, g = !0, Q = !1) {
  const C = OA || NA;
  if (C) {
    const E = C.type;
    if (A === OD) {
      const e = uY(
        E,
        !1
      );
      if (e && (e === B || e === IB(B) || e === oC(IB(B))))
        return E;
    }
    const I = (
      // local registration
      // check instance[type] first which is resolved for options API
      iI(C[A] || E[A], B) || // global registration
      iI(C.appContext[A], B)
    );
    return !I && Q ? E : I;
  }
}
function iI(A, B) {
  return A && (A[B] || A[IB(B)] || A[oC(IB(B))]);
}
const je = (A) => A.__isSuspense;
function Ne(A, B) {
  B && B.pendingBranch ? $(A) ? B.effects.push(...A) : B.effects.push(A) : ue(A);
}
const Se = Symbol.for("v-scx"), Re = () => ZA(Se);
function wB(A, B) {
  return LE(A, null, B);
}
const uQ = {};
function aA(A, B, g) {
  return LE(A, B, g);
}
function LE(A, B, {
  immediate: g,
  deep: Q,
  flush: C,
  once: E,
  onTrack: I,
  onTrigger: e
} = lA) {
  if (B && E) {
    const J = B;
    B = (...QA) => {
      J(...QA), S();
    };
  }
  const Y = NA, M = (J) => Q === !0 ? J : (
    // for deep: false, only traverse root-level properties
    cg(J, Q === !1 ? 1 : void 0)
  );
  let P, t = !1, i = !1;
  if (jA(A) ? (P = () => A.value, t = yQ(A)) : Fg(A) ? (P = () => M(A), t = !0) : $(A) ? (i = !0, t = A.some((J) => Fg(J) || yQ(J)), P = () => A.map((J) => {
    if (jA(J))
      return J.value;
    if (Fg(J))
      return M(J);
    if (wA(J))
      return XB(J, Y, 2);
  })) : wA(A) ? B ? P = () => XB(A, Y, 2) : P = () => (F && F(), tB(
    A,
    Y,
    3,
    [c]
  )) : P = CB, B && Q) {
    const J = P;
    P = () => cg(J());
  }
  let F, c = (J) => {
    F = l.onStop = () => {
      XB(J, Y, 4), F = l.onStop = void 0;
    };
  }, a;
  if (aQ)
    if (c = CB, B ? g && tB(B, Y, 3, [
      P(),
      i ? [] : void 0,
      c
    ]) : P(), C === "sync") {
      const J = Re();
      a = J.__watcherHandles || (J.__watcherHandles = []);
    } else
      return CB;
  let r = i ? new Array(A.length).fill(uQ) : uQ;
  const n = () => {
    if (!(!l.active || !l.dirty))
      if (B) {
        const J = l.run();
        (Q || t || (i ? J.some((QA, v) => $B(QA, r[v])) : $B(J, r))) && (F && F(), tB(B, Y, 3, [
          J,
          // pass undefined as the old value when it's changed for the first time
          r === uQ ? void 0 : i && r[0] === uQ ? [] : r,
          c
        ]), r = J);
      } else
        l.run();
  };
  n.allowRecurse = !!B;
  let G;
  C === "sync" ? G = n : C === "post" ? G = () => VA(n, Y && Y.suspense) : (n.pre = !0, Y && (n.id = Y.uid), G = () => YC(n));
  const l = new fE(P, CB, G), u = DD(), S = () => {
    l.stop(), u && uE(u.effects, l);
  };
  return B ? g ? n() : r = l.run() : C === "post" ? VA(
    l.run.bind(l),
    Y && Y.suspense
  ) : l.run(), a && a.push(S), S;
}
function Le(A, B, g) {
  const Q = this.proxy, C = fA(A) ? A.includes(".") ? jD(Q, A) : () => Q[A] : A.bind(Q, Q);
  let E;
  wA(B) ? E = B : (E = B.handler, g = B);
  const I = iQ(this), e = LE(C, E.bind(Q), g);
  return I(), e;
}
function jD(A, B) {
  const g = B.split(".");
  return () => {
    let Q = A;
    for (let C = 0; C < g.length && Q; C++)
      Q = Q[g[C]];
    return Q;
  };
}
function cg(A, B, g = 0, Q) {
  if (!hA(A) || A.__v_skip)
    return A;
  if (B && B > 0) {
    if (g >= B)
      return A;
    g++;
  }
  if (Q = Q || /* @__PURE__ */ new Set(), Q.has(A))
    return A;
  if (Q.add(A), jA(A))
    cg(A.value, B, g, Q);
  else if ($(A))
    for (let C = 0; C < A.length; C++)
      cg(A[C], B, g, Q);
  else if (Sg(A) || Tg(A))
    A.forEach((C) => {
      cg(C, B, g, Q);
    });
  else if (QD(A))
    for (const C in A)
      cg(A[C], B, g, Q);
  return A;
}
function WQ(A, B) {
  if (OA === null)
    return A;
  const g = aC(OA) || OA.proxy, Q = A.dirs || (A.dirs = []);
  for (let C = 0; C < B.length; C++) {
    let [E, I, e, Y = lA] = B[C];
    E && (wA(E) && (E = {
      mounted: E,
      updated: E
    }), E.deep && cg(I), Q.push({
      dir: E,
      instance: g,
      value: I,
      oldValue: void 0,
      arg: e,
      modifiers: Y
    }));
  }
  return A;
}
function Ig(A, B, g, Q) {
  const C = A.dirs, E = B && B.dirs;
  for (let I = 0; I < C.length; I++) {
    const e = C[I];
    E && (e.oldValue = E[I].value);
    let Y = e.dir[Q];
    Y && (Gg(), tB(Y, g, 8, [
      A.el,
      e,
      A,
      B
    ]), Ug());
  }
}
const xB = Symbol("_leaveCb"), vQ = Symbol("_enterCb");
function me() {
  const A = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return LA(() => {
    A.isMounted = !0;
  }), tC(() => {
    A.isUnmounting = !0;
  }), A;
}
const eB = [Function, Array], ND = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: eB,
  onEnter: eB,
  onAfterEnter: eB,
  onEnterCancelled: eB,
  // leave
  onBeforeLeave: eB,
  onLeave: eB,
  onAfterLeave: eB,
  onLeaveCancelled: eB,
  // appear
  onBeforeAppear: eB,
  onAppear: eB,
  onAfterAppear: eB,
  onAppearCancelled: eB
}, Ke = {
  name: "BaseTransition",
  props: ND,
  setup(A, { slots: B }) {
    const g = RB(), Q = me();
    return () => {
      const C = B.default && RD(B.default(), !0);
      if (!C || !C.length)
        return;
      let E = C[0];
      if (C.length > 1) {
        for (const i of C)
          if (i.type !== cB) {
            E = i;
            break;
          }
      }
      const I = DA(A), { mode: e } = I;
      if (Q.isLeaving)
        return vC(E);
      const Y = aI(E);
      if (!Y)
        return vC(E);
      const M = AE(
        Y,
        I,
        Q,
        g
      );
      BE(Y, M);
      const P = g.subTree, t = P && aI(P);
      if (t && t.type !== cB && !Pg(Y, t)) {
        const i = AE(
          t,
          I,
          Q,
          g
        );
        if (BE(t, i), e === "out-in")
          return Q.isLeaving = !0, i.afterLeave = () => {
            Q.isLeaving = !1, g.update.active !== !1 && (g.effect.dirty = !0, g.update());
          }, vC(E);
        e === "in-out" && Y.type !== cB && (i.delayLeave = (F, c, a) => {
          const r = SD(
            Q,
            t
          );
          r[String(t.key)] = t, F[xB] = () => {
            c(), F[xB] = void 0, delete M.delayedLeave;
          }, M.delayedLeave = a;
        });
      }
      return E;
    };
  }
}, ye = Ke;
function SD(A, B) {
  const { leavingVNodes: g } = A;
  let Q = g.get(B.type);
  return Q || (Q = /* @__PURE__ */ Object.create(null), g.set(B.type, Q)), Q;
}
function AE(A, B, g, Q) {
  const {
    appear: C,
    mode: E,
    persisted: I = !1,
    onBeforeEnter: e,
    onEnter: Y,
    onAfterEnter: M,
    onEnterCancelled: P,
    onBeforeLeave: t,
    onLeave: i,
    onAfterLeave: F,
    onLeaveCancelled: c,
    onBeforeAppear: a,
    onAppear: r,
    onAfterAppear: n,
    onAppearCancelled: G
  } = B, l = String(A.key), u = SD(g, A), S = (v, L) => {
    v && tB(
      v,
      Q,
      9,
      L
    );
  }, J = (v, L) => {
    const j = L[1];
    S(v, L), $(v) ? v.every((m) => m.length <= 1) && j() : v.length <= 1 && j();
  }, QA = {
    mode: E,
    persisted: I,
    beforeEnter(v) {
      let L = e;
      if (!g.isMounted)
        if (C)
          L = a || e;
        else
          return;
      v[xB] && v[xB](
        !0
        /* cancelled */
      );
      const j = u[l];
      j && Pg(A, j) && j.el[xB] && j.el[xB](), S(L, [v]);
    },
    enter(v) {
      let L = Y, j = M, m = P;
      if (!g.isMounted)
        if (C)
          L = r || Y, j = n || M, m = G || P;
        else
          return;
      let f = !1;
      const x = v[vQ] = (AA) => {
        f || (f = !0, AA ? S(m, [v]) : S(j, [v]), QA.delayedLeave && QA.delayedLeave(), v[vQ] = void 0);
      };
      L ? J(L, [v, x]) : x();
    },
    leave(v, L) {
      const j = String(A.key);
      if (v[vQ] && v[vQ](
        !0
        /* cancelled */
      ), g.isUnmounting)
        return L();
      S(t, [v]);
      let m = !1;
      const f = v[xB] = (x) => {
        m || (m = !0, L(), x ? S(c, [v]) : S(F, [v]), v[xB] = void 0, u[j] === A && delete u[j]);
      };
      u[j] = A, i ? J(i, [v, f]) : f();
    },
    clone(v) {
      return AE(v, B, g, Q);
    }
  };
  return QA;
}
function vC(A) {
  if (tQ(A))
    return A = kB(A), A.children = null, A;
}
function aI(A) {
  return tQ(A) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    A.children ? A.children[0] : void 0
  ) : A;
}
function BE(A, B) {
  A.shapeFlag & 6 && A.component ? BE(A.component.subTree, B) : A.shapeFlag & 128 ? (A.ssContent.transition = B.clone(A.ssContent), A.ssFallback.transition = B.clone(A.ssFallback)) : A.transition = B;
}
function RD(A, B = !1, g) {
  let Q = [], C = 0;
  for (let E = 0; E < A.length; E++) {
    let I = A[E];
    const e = g == null ? I.key : String(g) + String(I.key != null ? I.key : E);
    I.type === sA ? (I.patchFlag & 128 && C++, Q = Q.concat(
      RD(I.children, B, e)
    )) : (B || I.type !== cB) && Q.push(e != null ? kB(I, { key: e }) : I);
  }
  if (C > 1)
    for (let E = 0; E < Q.length; E++)
      Q[E].patchFlag = -2;
  return Q;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oB(A, B) {
  return wA(A) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => TA({ name: A.name }, B, { setup: A }))()
  ) : A;
}
const _g = (A) => !!A.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function pe(A) {
  wA(A) && (A = { loader: A });
  const {
    loader: B,
    loadingComponent: g,
    errorComponent: Q,
    delay: C = 200,
    timeout: E,
    // undefined = never times out
    suspensible: I = !0,
    onError: e
  } = A;
  let Y = null, M, P = 0;
  const t = () => (P++, Y = null, i()), i = () => {
    let F;
    return Y || (F = Y = B().catch((c) => {
      if (c = c instanceof Error ? c : new Error(String(c)), e)
        return new Promise((a, r) => {
          e(c, () => a(t()), () => r(c), P + 1);
        });
      throw c;
    }).then((c) => F !== Y && Y ? Y : (c && (c.__esModule || c[Symbol.toStringTag] === "Module") && (c = c.default), M = c, c)));
  };
  return /* @__PURE__ */ oB({
    name: "AsyncComponentWrapper",
    __asyncLoader: i,
    get __asyncResolved() {
      return M;
    },
    setup() {
      const F = NA;
      if (M)
        return () => kC(M, F);
      const c = (G) => {
        Y = null, PQ(
          G,
          F,
          13,
          !Q
        );
      };
      if (I && F.suspense || aQ)
        return i().then((G) => () => kC(G, F)).catch((G) => (c(G), () => Q ? q(Q, {
          error: G
        }) : null));
      const a = Z(!1), r = Z(), n = Z(!!C);
      return C && setTimeout(() => {
        n.value = !1;
      }, C), E != null && setTimeout(() => {
        if (!a.value && !r.value) {
          const G = new Error(
            `Async component timed out after ${E}ms.`
          );
          c(G), r.value = G;
        }
      }, E), i().then(() => {
        a.value = !0, F.parent && tQ(F.parent.vnode) && (F.parent.effect.dirty = !0, YC(F.parent.update));
      }).catch((G) => {
        c(G), r.value = G;
      }), () => {
        if (a.value && M)
          return kC(M, F);
        if (r.value && Q)
          return q(Q, {
            error: r.value
          });
        if (g && !n.value)
          return q(g);
      };
    }
  });
}
function kC(A, B) {
  const { ref: g, props: Q, children: C, ce: E } = B.vnode, I = q(A, Q, C);
  return I.ref = g, I.ce = E, delete B.vnode.ce, I;
}
const tQ = (A) => A.type.__isKeepAlive;
function xe(A, B) {
  LD(A, "a", B);
}
function We(A, B) {
  LD(A, "da", B);
}
function LD(A, B, g = NA) {
  const Q = A.__wdc || (A.__wdc = () => {
    let C = g;
    for (; C; ) {
      if (C.isDeactivated)
        return;
      C = C.parent;
    }
    return A();
  });
  if (PC(B, Q, g), g) {
    let C = g.parent;
    for (; C && C.parent; )
      tQ(C.parent.vnode) && be(Q, B, g, C), C = C.parent;
  }
}
function be(A, B, g, Q) {
  const C = PC(
    B,
    A,
    Q,
    !0
    /* prepend */
  );
  Rg(() => {
    uE(Q[B], C);
  }, g);
}
function PC(A, B, g = NA, Q = !1) {
  if (g) {
    const C = g[A] || (g[A] = []), E = B.__weh || (B.__weh = (...I) => {
      if (g.isUnmounted)
        return;
      Gg();
      const e = iQ(g), Y = tB(B, g, A, I);
      return e(), Ug(), Y;
    });
    return Q ? C.unshift(E) : C.push(E), E;
  }
}
const SB = (A) => (B, g = NA) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!aQ || A === "sp") && PC(A, (...Q) => B(...Q), g)
), mD = SB("bm"), LA = SB("m"), Ve = SB("bu"), Ze = SB("u"), tC = SB("bum"), Rg = SB("um"), qe = SB("sp"), Xe = SB(
  "rtg"
), _e = SB(
  "rtc"
);
function $e(A, B = NA) {
  PC("ec", A, B);
}
function lg(A, B, g, Q) {
  let C;
  const E = g && g[Q];
  if ($(A) || fA(A)) {
    C = new Array(A.length);
    for (let I = 0, e = A.length; I < e; I++)
      C[I] = B(A[I], I, void 0, E && E[I]);
  } else if (typeof A == "number") {
    C = new Array(A);
    for (let I = 0; I < A; I++)
      C[I] = B(I + 1, I, void 0, E && E[I]);
  } else if (hA(A))
    if (A[Symbol.iterator])
      C = Array.from(
        A,
        (I, e) => B(I, e, void 0, E && E[e])
      );
    else {
      const I = Object.keys(A);
      C = new Array(I.length);
      for (let e = 0, Y = I.length; e < Y; e++) {
        const M = I[e];
        C[e] = B(A[M], M, e, E && E[e]);
      }
    }
  else
    C = [];
  return g && (g[Q] = C), C;
}
function kA(A, B, g = {}, Q, C) {
  if (OA.isCE || OA.parent && _g(OA.parent) && OA.parent.isCE)
    return B !== "default" && (g.name = B), q("slot", g, Q && Q());
  let E = A[B];
  E && E._c && (E._d = !1), D();
  const I = E && KD(E(g)), e = MA(
    sA,
    {
      key: g.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      I && I.key || `_${B}`
    },
    I || (Q ? Q() : []),
    I && A._ === 1 ? 64 : -2
  );
  return !C && e.scopeId && (e.slotScopeIds = [e.scopeId + "-s"]), E && E._c && (E._d = !0), e;
}
function KD(A) {
  return A.some((B) => VQ(B) ? !(B.type === cB || B.type === sA && !KD(B.children)) : !0) ? A : null;
}
const gE = (A) => A ? Ao(A) ? aC(A) || A.proxy : gE(A.parent) : null, $g = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ TA(/* @__PURE__ */ Object.create(null), {
    $: (A) => A,
    $el: (A) => A.vnode.el,
    $data: (A) => A.data,
    $props: (A) => A.props,
    $attrs: (A) => A.attrs,
    $slots: (A) => A.slots,
    $refs: (A) => A.refs,
    $parent: (A) => gE(A.parent),
    $root: (A) => gE(A.root),
    $emit: (A) => A.emit,
    $options: (A) => mE(A),
    $forceUpdate: (A) => A.f || (A.f = () => {
      A.effect.dirty = !0, YC(A.update);
    }),
    $nextTick: (A) => A.n || (A.n = QB.bind(A.proxy)),
    $watch: (A) => Le.bind(A)
  })
), fC = (A, B) => A !== lA && !A.__isScriptSetup && tA(A, B), AY = {
  get({ _: A }, B) {
    const { ctx: g, setupState: Q, data: C, props: E, accessCache: I, type: e, appContext: Y } = A;
    let M;
    if (B[0] !== "$") {
      const F = I[B];
      if (F !== void 0)
        switch (F) {
          case 1:
            return Q[B];
          case 2:
            return C[B];
          case 4:
            return g[B];
          case 3:
            return E[B];
        }
      else {
        if (fC(Q, B))
          return I[B] = 1, Q[B];
        if (C !== lA && tA(C, B))
          return I[B] = 2, C[B];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (M = A.propsOptions[0]) && tA(M, B)
        )
          return I[B] = 3, E[B];
        if (g !== lA && tA(g, B))
          return I[B] = 4, g[B];
        QE && (I[B] = 0);
      }
    }
    const P = $g[B];
    let t, i;
    if (P)
      return B === "$attrs" && qA(A, "get", B), P(A);
    if (
      // css module (injected by vue-loader)
      (t = e.__cssModules) && (t = t[B])
    )
      return t;
    if (g !== lA && tA(g, B))
      return I[B] = 4, g[B];
    if (
      // global properties
      i = Y.config.globalProperties, tA(i, B)
    )
      return i[B];
  },
  set({ _: A }, B, g) {
    const { data: Q, setupState: C, ctx: E } = A;
    return fC(C, B) ? (C[B] = g, !0) : Q !== lA && tA(Q, B) ? (Q[B] = g, !0) : tA(A.props, B) || B[0] === "$" && B.slice(1) in A ? !1 : (E[B] = g, !0);
  },
  has({
    _: { data: A, setupState: B, accessCache: g, ctx: Q, appContext: C, propsOptions: E }
  }, I) {
    let e;
    return !!g[I] || A !== lA && tA(A, I) || fC(B, I) || (e = E[0]) && tA(e, I) || tA(Q, I) || tA($g, I) || tA(C.config.globalProperties, I);
  },
  defineProperty(A, B, g) {
    return g.get != null ? A._.accessCache[B] = 0 : tA(g, "value") && this.set(A, B, g.value, null), Reflect.defineProperty(A, B, g);
  }
};
function BY() {
  return gY().slots;
}
function gY() {
  const A = RB();
  return A.setupContext || (A.setupContext = go(A));
}
function FI(A) {
  return $(A) ? A.reduce(
    (B, g) => (B[g] = null, B),
    {}
  ) : A;
}
let QE = !0;
function QY(A) {
  const B = mE(A), g = A.proxy, Q = A.ctx;
  QE = !1, B.beforeCreate && rI(B.beforeCreate, A, "bc");
  const {
    // state
    data: C,
    computed: E,
    methods: I,
    watch: e,
    provide: Y,
    inject: M,
    // lifecycle
    created: P,
    beforeMount: t,
    mounted: i,
    beforeUpdate: F,
    updated: c,
    activated: a,
    deactivated: r,
    beforeDestroy: n,
    beforeUnmount: G,
    destroyed: l,
    unmounted: u,
    render: S,
    renderTracked: J,
    renderTriggered: QA,
    errorCaptured: v,
    serverPrefetch: L,
    // public API
    expose: j,
    inheritAttrs: m,
    // assets
    components: f,
    directives: x,
    filters: AA
  } = B;
  if (M && CY(M, Q, null), I)
    for (const cA in I) {
      const YA = I[cA];
      wA(YA) && (Q[cA] = YA.bind(g));
    }
  if (C) {
    const cA = C.call(g, g);
    hA(cA) && (A.data = EB(cA));
  }
  if (QE = !0, E)
    for (const cA in E) {
      const YA = E[cA], WA = wA(YA) ? YA.bind(g, g) : wA(YA.get) ? YA.get.bind(g, g) : CB, rA = !wA(YA) && wA(YA.set) ? YA.set.bind(g) : CB, HA = k({
        get: WA,
        set: rA
      });
      Object.defineProperty(Q, cA, {
        enumerable: !0,
        configurable: !0,
        get: () => HA.value,
        set: (UA) => HA.value = UA
      });
    }
  if (e)
    for (const cA in e)
      yD(e[cA], Q, g, cA);
  if (Y) {
    const cA = wA(Y) ? Y.call(g) : Y;
    Reflect.ownKeys(cA).forEach((YA) => {
      jB(YA, cA[YA]);
    });
  }
  P && rI(P, A, "c");
  function eA(cA, YA) {
    $(YA) ? YA.forEach((WA) => cA(WA.bind(g))) : YA && cA(YA.bind(g));
  }
  if (eA(mD, t), eA(LA, i), eA(Ve, F), eA(Ze, c), eA(xe, a), eA(We, r), eA($e, v), eA(_e, J), eA(Xe, QA), eA(tC, G), eA(Rg, u), eA(qe, L), $(j))
    if (j.length) {
      const cA = A.exposed || (A.exposed = {});
      j.forEach((YA) => {
        Object.defineProperty(cA, YA, {
          get: () => g[YA],
          set: (WA) => g[YA] = WA
        });
      });
    } else
      A.exposed || (A.exposed = {});
  S && A.render === CB && (A.render = S), m != null && (A.inheritAttrs = m), f && (A.components = f), x && (A.directives = x);
}
function CY(A, B, g = CB) {
  $(A) && (A = CE(A));
  for (const Q in A) {
    const C = A[Q];
    let E;
    hA(C) ? "default" in C ? E = ZA(
      C.from || Q,
      C.default,
      !0
    ) : E = ZA(C.from || Q) : E = ZA(C), jA(E) ? Object.defineProperty(B, Q, {
      enumerable: !0,
      configurable: !0,
      get: () => E.value,
      set: (I) => E.value = I
    }) : B[Q] = E;
  }
}
function rI(A, B, g) {
  tB(
    $(A) ? A.map((Q) => Q.bind(B.proxy)) : A.bind(B.proxy),
    B,
    g
  );
}
function yD(A, B, g, Q) {
  const C = Q.includes(".") ? jD(g, Q) : () => g[Q];
  if (fA(A)) {
    const E = B[A];
    wA(E) && aA(C, E);
  } else if (wA(A))
    aA(C, A.bind(g));
  else if (hA(A))
    if ($(A))
      A.forEach((E) => yD(E, B, g, Q));
    else {
      const E = wA(A.handler) ? A.handler.bind(g) : B[A.handler];
      wA(E) && aA(C, E, A);
    }
}
function mE(A) {
  const B = A.type, { mixins: g, extends: Q } = B, {
    mixins: C,
    optionsCache: E,
    config: { optionMergeStrategies: I }
  } = A.appContext, e = E.get(B);
  let Y;
  return e ? Y = e : !C.length && !g && !Q ? Y = B : (Y = {}, C.length && C.forEach(
    (M) => bQ(Y, M, I, !0)
  ), bQ(Y, B, I)), hA(B) && E.set(B, Y), Y;
}
function bQ(A, B, g, Q = !1) {
  const { mixins: C, extends: E } = B;
  E && bQ(A, E, g, !0), C && C.forEach(
    (I) => bQ(A, I, g, !0)
  );
  for (const I in B)
    if (!(Q && I === "expose")) {
      const e = EY[I] || g && g[I];
      A[I] = e ? e(A[I], B[I]) : B[I];
    }
  return A;
}
const EY = {
  data: sI,
  props: nI,
  emits: nI,
  // objects
  methods: Vg,
  computed: Vg,
  // lifecycle
  beforeCreate: pA,
  created: pA,
  beforeMount: pA,
  mounted: pA,
  beforeUpdate: pA,
  updated: pA,
  beforeDestroy: pA,
  beforeUnmount: pA,
  destroyed: pA,
  unmounted: pA,
  activated: pA,
  deactivated: pA,
  errorCaptured: pA,
  serverPrefetch: pA,
  // assets
  components: Vg,
  directives: Vg,
  // watch
  watch: wY,
  // provide / inject
  provide: sI,
  inject: IY
};
function sI(A, B) {
  return B ? A ? function() {
    return TA(
      wA(A) ? A.call(this, this) : A,
      wA(B) ? B.call(this, this) : B
    );
  } : B : A;
}
function IY(A, B) {
  return Vg(CE(A), CE(B));
}
function CE(A) {
  if ($(A)) {
    const B = {};
    for (let g = 0; g < A.length; g++)
      B[A[g]] = A[g];
    return B;
  }
  return A;
}
function pA(A, B) {
  return A ? [...new Set([].concat(A, B))] : B;
}
function Vg(A, B) {
  return A ? TA(/* @__PURE__ */ Object.create(null), A, B) : B;
}
function nI(A, B) {
  return A ? $(A) && $(B) ? [.../* @__PURE__ */ new Set([...A, ...B])] : TA(
    /* @__PURE__ */ Object.create(null),
    FI(A),
    FI(B ?? {})
  ) : B;
}
function wY(A, B) {
  if (!A)
    return B;
  if (!B)
    return A;
  const g = TA(/* @__PURE__ */ Object.create(null), A);
  for (const Q in B)
    g[Q] = pA(A[Q], B[Q]);
  return g;
}
function pD() {
  return {
    app: null,
    config: {
      isNativeTag: S0,
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
let DY = 0;
function oY(A, B) {
  return function(Q, C = null) {
    wA(Q) || (Q = TA({}, Q)), C != null && !hA(C) && (C = null);
    const E = pD(), I = /* @__PURE__ */ new WeakSet();
    let e = !1;
    const Y = E.app = {
      _uid: DY++,
      _component: Q,
      _props: C,
      _container: null,
      _context: E,
      _instance: null,
      version: kY,
      get config() {
        return E.config;
      },
      set config(M) {
      },
      use(M, ...P) {
        return I.has(M) || (M && wA(M.install) ? (I.add(M), M.install(Y, ...P)) : wA(M) && (I.add(M), M(Y, ...P))), Y;
      },
      mixin(M) {
        return E.mixins.includes(M) || E.mixins.push(M), Y;
      },
      component(M, P) {
        return P ? (E.components[M] = P, Y) : E.components[M];
      },
      directive(M, P) {
        return P ? (E.directives[M] = P, Y) : E.directives[M];
      },
      mount(M, P, t) {
        if (!e) {
          const i = q(Q, C);
          return i.appContext = E, t === !0 ? t = "svg" : t === !1 && (t = void 0), P && B ? B(i, M) : A(i, M, t), e = !0, Y._container = M, M.__vue_app__ = Y, aC(i.component) || i.component.proxy;
        }
      },
      unmount() {
        e && (A(null, Y._container), delete Y._container.__vue_app__);
      },
      provide(M, P) {
        return E.provides[M] = P, Y;
      },
      runWithContext(M) {
        const P = AQ;
        AQ = Y;
        try {
          return M();
        } finally {
          AQ = P;
        }
      }
    };
    return Y;
  };
}
let AQ = null;
function jB(A, B) {
  if (NA) {
    let g = NA.provides;
    const Q = NA.parent && NA.parent.provides;
    Q === g && (g = NA.provides = Object.create(Q)), g[A] = B;
  }
}
function ZA(A, B, g = !1) {
  const Q = NA || OA;
  if (Q || AQ) {
    const C = Q ? Q.parent == null ? Q.vnode.appContext && Q.vnode.appContext.provides : Q.parent.provides : AQ._context.provides;
    if (C && A in C)
      return C[A];
    if (arguments.length > 1)
      return g && wA(B) ? B.call(Q && Q.proxy) : B;
  }
}
function eY(A, B, g, Q = !1) {
  const C = {}, E = {};
  mQ(E, cC, 1), A.propsDefaults = /* @__PURE__ */ Object.create(null), xD(A, B, C, E);
  for (const I in A.propsOptions[0])
    I in C || (C[I] = void 0);
  g ? A.props = Q ? C : Fe(C) : A.type.props ? A.props = C : A.props = E, A.attrs = E;
}
function YY(A, B, g, Q) {
  const {
    props: C,
    attrs: E,
    vnode: { patchFlag: I }
  } = A, e = DA(C), [Y] = A.propsOptions;
  let M = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (Q || I > 0) && !(I & 16)
  ) {
    if (I & 8) {
      const P = A.vnode.dynamicProps;
      for (let t = 0; t < P.length; t++) {
        let i = P[t];
        if (MC(A.emitsOptions, i))
          continue;
        const F = B[i];
        if (Y)
          if (tA(E, i))
            F !== E[i] && (E[i] = F, M = !0);
          else {
            const c = IB(i);
            C[c] = EE(
              Y,
              e,
              c,
              F,
              A,
              !1
            );
          }
        else
          F !== E[i] && (E[i] = F, M = !0);
      }
    }
  } else {
    xD(A, B, C, E) && (M = !0);
    let P;
    for (const t in e)
      (!B || // for camelCase
      !tA(B, t) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((P = PB(t)) === t || !tA(B, P))) && (Y ? g && // for camelCase
      (g[t] !== void 0 || // for kebab-case
      g[P] !== void 0) && (C[t] = EE(
        Y,
        e,
        t,
        void 0,
        A,
        !0
      )) : delete C[t]);
    if (E !== e)
      for (const t in E)
        (!B || !tA(B, t)) && (delete E[t], M = !0);
  }
  M && zB(A, "set", "$attrs");
}
function xD(A, B, g, Q) {
  const [C, E] = A.propsOptions;
  let I = !1, e;
  if (B)
    for (let Y in B) {
      if (qg(Y))
        continue;
      const M = B[Y];
      let P;
      C && tA(C, P = IB(Y)) ? !E || !E.includes(P) ? g[P] = M : (e || (e = {}))[P] = M : MC(A.emitsOptions, Y) || (!(Y in Q) || M !== Q[Y]) && (Q[Y] = M, I = !0);
    }
  if (E) {
    const Y = DA(g), M = e || lA;
    for (let P = 0; P < E.length; P++) {
      const t = E[P];
      g[t] = EE(
        C,
        Y,
        t,
        M[t],
        A,
        !tA(M, t)
      );
    }
  }
  return I;
}
function EE(A, B, g, Q, C, E) {
  const I = A[g];
  if (I != null) {
    const e = tA(I, "default");
    if (e && Q === void 0) {
      const Y = I.default;
      if (I.type !== Function && !I.skipFactory && wA(Y)) {
        const { propsDefaults: M } = C;
        if (g in M)
          Q = M[g];
        else {
          const P = iQ(C);
          Q = M[g] = Y.call(
            null,
            B
          ), P();
        }
      } else
        Q = Y;
    }
    I[
      0
      /* shouldCast */
    ] && (E && !e ? Q = !1 : I[
      1
      /* shouldCastTrue */
    ] && (Q === "" || Q === PB(g)) && (Q = !0));
  }
  return Q;
}
function WD(A, B, g = !1) {
  const Q = B.propsCache, C = Q.get(A);
  if (C)
    return C;
  const E = A.props, I = {}, e = [];
  let Y = !1;
  if (!wA(A)) {
    const P = (t) => {
      Y = !0;
      const [i, F] = WD(t, B, !0);
      TA(I, i), F && e.push(...F);
    };
    !g && B.mixins.length && B.mixins.forEach(P), A.extends && P(A.extends), A.mixins && A.mixins.forEach(P);
  }
  if (!E && !Y)
    return hA(A) && Q.set(A, Jg), Jg;
  if ($(E))
    for (let P = 0; P < E.length; P++) {
      const t = IB(E[P]);
      hI(t) && (I[t] = lA);
    }
  else if (E)
    for (const P in E) {
      const t = IB(P);
      if (hI(t)) {
        const i = E[P], F = I[t] = $(i) || wA(i) ? { type: i } : TA({}, i);
        if (F) {
          const c = lI(Boolean, F.type), a = lI(String, F.type);
          F[
            0
            /* shouldCast */
          ] = c > -1, F[
            1
            /* shouldCastTrue */
          ] = a < 0 || c < a, (c > -1 || tA(F, "default")) && e.push(t);
        }
      }
    }
  const M = [I, e];
  return hA(A) && Q.set(A, M), M;
}
function hI(A) {
  return A[0] !== "$" && !qg(A);
}
function GI(A) {
  return A === null ? "null" : typeof A == "function" ? A.name || "" : typeof A == "object" && A.constructor && A.constructor.name || "";
}
function UI(A, B) {
  return GI(A) === GI(B);
}
function lI(A, B) {
  return $(B) ? B.findIndex((g) => UI(g, A)) : wA(B) && UI(B, A) ? 0 : -1;
}
const bD = (A) => A[0] === "_" || A === "$stable", KE = (A) => $(A) ? A.map(lB) : [lB(A)], MY = (A, B, g) => {
  if (B._n)
    return B;
  const Q = oA((...C) => KE(B(...C)), g);
  return Q._c = !1, Q;
}, VD = (A, B, g) => {
  const Q = A._ctx;
  for (const C in A) {
    if (bD(C))
      continue;
    const E = A[C];
    if (wA(E))
      B[C] = MY(C, E, Q);
    else if (E != null) {
      const I = KE(E);
      B[C] = () => I;
    }
  }
}, ZD = (A, B) => {
  const g = KE(B);
  A.slots.default = () => g;
}, PY = (A, B) => {
  if (A.vnode.shapeFlag & 32) {
    const g = B._;
    g ? (A.slots = DA(B), mQ(B, "_", g)) : VD(
      B,
      A.slots = {}
    );
  } else
    A.slots = {}, B && ZD(A, B);
  mQ(A.slots, cC, 1);
}, tY = (A, B, g) => {
  const { vnode: Q, slots: C } = A;
  let E = !0, I = lA;
  if (Q.shapeFlag & 32) {
    const e = B._;
    e ? g && e === 1 ? E = !1 : (TA(C, B), !g && e === 1 && delete C._) : (E = !B.$stable, VD(B, C)), I = B;
  } else
    B && (ZD(A, B), I = { default: 1 });
  if (E)
    for (const e in C)
      !bD(e) && I[e] == null && delete C[e];
};
function IE(A, B, g, Q, C = !1) {
  if ($(A)) {
    A.forEach(
      (i, F) => IE(
        i,
        B && ($(B) ? B[F] : B),
        g,
        Q,
        C
      )
    );
    return;
  }
  if (_g(Q) && !C)
    return;
  const E = Q.shapeFlag & 4 ? aC(Q.component) || Q.component.proxy : Q.el, I = C ? null : E, { i: e, r: Y } = A, M = B && B.r, P = e.refs === lA ? e.refs = {} : e.refs, t = e.setupState;
  if (M != null && M !== Y && (fA(M) ? (P[M] = null, tA(t, M) && (t[M] = null)) : jA(M) && (M.value = null)), wA(Y))
    XB(Y, e, 12, [I, P]);
  else {
    const i = fA(Y), F = jA(Y);
    if (i || F) {
      const c = () => {
        if (A.f) {
          const a = i ? tA(t, Y) ? t[Y] : P[Y] : Y.value;
          C ? $(a) && uE(a, E) : $(a) ? a.includes(E) || a.push(E) : i ? (P[Y] = [E], tA(t, Y) && (t[Y] = P[Y])) : (Y.value = [E], A.k && (P[A.k] = Y.value));
        } else
          i ? (P[Y] = I, tA(t, Y) && (t[Y] = I)) : F && (Y.value = I, A.k && (P[A.k] = I));
      };
      I ? (c.id = -1, VA(c, g)) : c();
    }
  }
}
const VA = Ne;
function cY(A) {
  return iY(A);
}
function iY(A, B) {
  const g = CD();
  g.__VUE__ = !0;
  const {
    insert: Q,
    remove: C,
    patchProp: E,
    createElement: I,
    createText: e,
    createComment: Y,
    setText: M,
    setElementText: P,
    parentNode: t,
    nextSibling: i,
    setScopeId: F = CB,
    insertStaticContent: c
  } = A, a = (s, h, H, T = null, O = null, R = null, p = void 0, N = null, K = !!h.dynamicChildren) => {
    if (s === h)
      return;
    s && !Pg(s, h) && (T = mg(s), UA(s, O, R, !0), s = null), h.patchFlag === -2 && (K = !1, h.dynamicChildren = null);
    const { type: z, ref: b, shapeFlag: gA } = h;
    switch (z) {
      case cQ:
        r(s, h, H, T);
        break;
      case cB:
        n(s, h, H, T);
        break;
      case TC:
        s == null && G(h, H, T, p);
        break;
      case sA:
        f(
          s,
          h,
          H,
          T,
          O,
          R,
          p,
          N,
          K
        );
        break;
      default:
        gA & 1 ? S(
          s,
          h,
          H,
          T,
          O,
          R,
          p,
          N,
          K
        ) : gA & 6 ? x(
          s,
          h,
          H,
          T,
          O,
          R,
          p,
          N,
          K
        ) : (gA & 64 || gA & 128) && z.process(
          s,
          h,
          H,
          T,
          O,
          R,
          p,
          N,
          K,
          LB
        );
    }
    b != null && O && IE(b, s && s.ref, R, h || s, !h);
  }, r = (s, h, H, T) => {
    if (s == null)
      Q(
        h.el = e(h.children),
        H,
        T
      );
    else {
      const O = h.el = s.el;
      h.children !== s.children && M(O, h.children);
    }
  }, n = (s, h, H, T) => {
    s == null ? Q(
      h.el = Y(h.children || ""),
      H,
      T
    ) : h.el = s.el;
  }, G = (s, h, H, T) => {
    [s.el, s.anchor] = c(
      s.children,
      h,
      H,
      T,
      s.el,
      s.anchor
    );
  }, l = ({ el: s, anchor: h }, H, T) => {
    let O;
    for (; s && s !== h; )
      O = i(s), Q(s, H, T), s = O;
    Q(h, H, T);
  }, u = ({ el: s, anchor: h }) => {
    let H;
    for (; s && s !== h; )
      H = i(s), C(s), s = H;
    C(h);
  }, S = (s, h, H, T, O, R, p, N, K) => {
    h.type === "svg" ? p = "svg" : h.type === "math" && (p = "mathml"), s == null ? J(
      h,
      H,
      T,
      O,
      R,
      p,
      N,
      K
    ) : L(
      s,
      h,
      O,
      R,
      p,
      N,
      K
    );
  }, J = (s, h, H, T, O, R, p, N) => {
    let K, z;
    const { props: b, shapeFlag: gA, transition: W, dirs: U } = s;
    if (K = s.el = I(
      s.type,
      R,
      b && b.is,
      b
    ), gA & 8 ? P(K, s.children) : gA & 16 && v(
      s.children,
      K,
      null,
      T,
      O,
      JC(s, R),
      p,
      N
    ), U && Ig(s, null, T, "created"), QA(K, s, s.scopeId, p, T), b) {
      for (const _ in b)
        _ !== "value" && !qg(_) && E(
          K,
          _,
          null,
          b[_],
          R,
          s.children,
          T,
          O,
          FB
        );
      "value" in b && E(K, "value", null, b.value, R), (z = b.onVnodeBeforeMount) && UB(z, T, s);
    }
    U && Ig(s, null, T, "beforeMount");
    const d = aY(O, W);
    d && W.beforeEnter(K), Q(K, h, H), ((z = b && b.onVnodeMounted) || d || U) && VA(() => {
      z && UB(z, T, s), d && W.enter(K), U && Ig(s, null, T, "mounted");
    }, O);
  }, QA = (s, h, H, T, O) => {
    if (H && F(s, H), T)
      for (let R = 0; R < T.length; R++)
        F(s, T[R]);
    if (O) {
      let R = O.subTree;
      if (h === R) {
        const p = O.vnode;
        QA(
          s,
          p,
          p.scopeId,
          p.slotScopeIds,
          O.parent
        );
      }
    }
  }, v = (s, h, H, T, O, R, p, N, K = 0) => {
    for (let z = K; z < s.length; z++) {
      const b = s[z] = N ? WB(s[z]) : lB(s[z]);
      a(
        null,
        b,
        h,
        H,
        T,
        O,
        R,
        p,
        N
      );
    }
  }, L = (s, h, H, T, O, R, p) => {
    const N = h.el = s.el;
    let { patchFlag: K, dynamicChildren: z, dirs: b } = h;
    K |= s.patchFlag & 16;
    const gA = s.props || lA, W = h.props || lA;
    let U;
    if (H && wg(H, !1), (U = W.onVnodeBeforeUpdate) && UB(U, H, h, s), b && Ig(h, s, H, "beforeUpdate"), H && wg(H, !0), z ? j(
      s.dynamicChildren,
      z,
      N,
      H,
      T,
      JC(h, O),
      R
    ) : p || YA(
      s,
      h,
      N,
      null,
      H,
      T,
      JC(h, O),
      R,
      !1
    ), K > 0) {
      if (K & 16)
        m(
          N,
          h,
          gA,
          W,
          H,
          T,
          O
        );
      else if (K & 2 && gA.class !== W.class && E(N, "class", null, W.class, O), K & 4 && E(N, "style", gA.style, W.style, O), K & 8) {
        const d = h.dynamicProps;
        for (let _ = 0; _ < d.length; _++) {
          const CA = d[_], nA = gA[CA], mA = W[CA];
          (mA !== nA || CA === "value") && E(
            N,
            CA,
            nA,
            mA,
            O,
            s.children,
            H,
            T,
            FB
          );
        }
      }
      K & 1 && s.children !== h.children && P(N, h.children);
    } else
      !p && z == null && m(
        N,
        h,
        gA,
        W,
        H,
        T,
        O
      );
    ((U = W.onVnodeUpdated) || b) && VA(() => {
      U && UB(U, H, h, s), b && Ig(h, s, H, "updated");
    }, T);
  }, j = (s, h, H, T, O, R, p) => {
    for (let N = 0; N < h.length; N++) {
      const K = s[N], z = h[N], b = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === sA || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pg(K, z) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 70) ? t(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          H
        )
      );
      a(
        K,
        z,
        b,
        null,
        T,
        O,
        R,
        p,
        !0
      );
    }
  }, m = (s, h, H, T, O, R, p) => {
    if (H !== T) {
      if (H !== lA)
        for (const N in H)
          !qg(N) && !(N in T) && E(
            s,
            N,
            H[N],
            null,
            p,
            h.children,
            O,
            R,
            FB
          );
      for (const N in T) {
        if (qg(N))
          continue;
        const K = T[N], z = H[N];
        K !== z && N !== "value" && E(
          s,
          N,
          z,
          K,
          p,
          h.children,
          O,
          R,
          FB
        );
      }
      "value" in T && E(s, "value", H.value, T.value, p);
    }
  }, f = (s, h, H, T, O, R, p, N, K) => {
    const z = h.el = s ? s.el : e(""), b = h.anchor = s ? s.anchor : e("");
    let { patchFlag: gA, dynamicChildren: W, slotScopeIds: U } = h;
    U && (N = N ? N.concat(U) : U), s == null ? (Q(z, H, T), Q(b, H, T), v(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      H,
      b,
      O,
      R,
      p,
      N,
      K
    )) : gA > 0 && gA & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    s.dynamicChildren ? (j(
      s.dynamicChildren,
      W,
      H,
      O,
      R,
      p,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || O && h === O.subTree) && qD(
      s,
      h,
      !0
      /* shallow */
    )) : YA(
      s,
      h,
      H,
      b,
      O,
      R,
      p,
      N,
      K
    );
  }, x = (s, h, H, T, O, R, p, N, K) => {
    h.slotScopeIds = N, s == null ? h.shapeFlag & 512 ? O.ctx.activate(
      h,
      H,
      T,
      p,
      K
    ) : AA(
      h,
      H,
      T,
      O,
      R,
      p,
      K
    ) : IA(s, h, K);
  }, AA = (s, h, H, T, O, R, p) => {
    const N = s.component = UY(
      s,
      T,
      O
    );
    if (tQ(s) && (N.ctx.renderer = LB), lY(N), N.asyncDep) {
      if (O && O.registerDep(N, eA), !s.el) {
        const K = N.subTree = q(cB);
        n(null, K, h, H);
      }
    } else
      eA(
        N,
        s,
        h,
        H,
        O,
        R,
        p
      );
  }, IA = (s, h, H) => {
    const T = h.component = s.component;
    if (Te(s, h, H))
      if (T.asyncDep && !T.asyncResolved) {
        cA(T, h, H);
        return;
      } else
        T.next = h, de(T.update), T.effect.dirty = !0, T.update();
    else
      h.el = s.el, T.vnode = h;
  }, eA = (s, h, H, T, O, R, p) => {
    const N = () => {
      if (s.isMounted) {
        let { next: b, bu: gA, u: W, parent: U, vnode: d } = s;
        {
          const XA = XD(s);
          if (XA) {
            b && (b.el = d.el, cA(s, b, p)), XA.asyncDep.then(() => {
              s.isUnmounted || N();
            });
            return;
          }
        }
        let _ = b, CA;
        wg(s, !1), b ? (b.el = d.el, cA(s, b, p)) : b = d, gA && zQ(gA), (CA = b.props && b.props.onVnodeBeforeUpdate) && UB(CA, U, b, d), wg(s, !0);
        const nA = uC(s), mA = s.subTree;
        s.subTree = nA, a(
          mA,
          nA,
          // parent may have changed if it's in a teleport
          t(mA.el),
          // anchor may have changed if it's in a fragment
          mg(mA),
          s,
          O,
          R
        ), b.el = nA.el, _ === null && Oe(s, nA.el), W && VA(W, O), (CA = b.props && b.props.onVnodeUpdated) && VA(
          () => UB(CA, U, b, d),
          O
        );
      } else {
        let b;
        const { el: gA, props: W } = h, { bm: U, m: d, parent: _ } = s, CA = _g(h);
        if (wg(s, !1), U && zQ(U), !CA && (b = W && W.onVnodeBeforeMount) && UB(b, _, h), wg(s, !0), gA && pg) {
          const nA = () => {
            s.subTree = uC(s), pg(
              gA,
              s.subTree,
              s,
              O,
              null
            );
          };
          CA ? h.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !s.isUnmounted && nA()
          ) : nA();
        } else {
          const nA = s.subTree = uC(s);
          a(
            null,
            nA,
            H,
            T,
            s,
            O,
            R
          ), h.el = nA.el;
        }
        if (d && VA(d, O), !CA && (b = W && W.onVnodeMounted)) {
          const nA = h;
          VA(
            () => UB(b, _, nA),
            O
          );
        }
        (h.shapeFlag & 256 || _ && _g(_.vnode) && _.vnode.shapeFlag & 256) && s.a && VA(s.a, O), s.isMounted = !0, h = H = T = null;
      }
    }, K = s.effect = new fE(
      N,
      CB,
      () => YC(z),
      s.scope
      // track it in component's effect scope
    ), z = s.update = () => {
      K.dirty && K.run();
    };
    z.id = s.uid, wg(s, !0), z();
  }, cA = (s, h, H) => {
    h.component = s;
    const T = s.vnode.props;
    s.vnode = h, s.next = null, YY(s, h.props, T, H), tY(s, h.children, H), Gg(), tI(s), Ug();
  }, YA = (s, h, H, T, O, R, p, N, K = !1) => {
    const z = s && s.children, b = s ? s.shapeFlag : 0, gA = h.children, { patchFlag: W, shapeFlag: U } = h;
    if (W > 0) {
      if (W & 128) {
        rA(
          z,
          gA,
          H,
          T,
          O,
          R,
          p,
          N,
          K
        );
        return;
      } else if (W & 256) {
        WA(
          z,
          gA,
          H,
          T,
          O,
          R,
          p,
          N,
          K
        );
        return;
      }
    }
    U & 8 ? (b & 16 && FB(z, O, R), gA !== z && P(H, gA)) : b & 16 ? U & 16 ? rA(
      z,
      gA,
      H,
      T,
      O,
      R,
      p,
      N,
      K
    ) : FB(z, O, R, !0) : (b & 8 && P(H, ""), U & 16 && v(
      gA,
      H,
      T,
      O,
      R,
      p,
      N,
      K
    ));
  }, WA = (s, h, H, T, O, R, p, N, K) => {
    s = s || Jg, h = h || Jg;
    const z = s.length, b = h.length, gA = Math.min(z, b);
    let W;
    for (W = 0; W < gA; W++) {
      const U = h[W] = K ? WB(h[W]) : lB(h[W]);
      a(
        s[W],
        U,
        H,
        null,
        O,
        R,
        p,
        N,
        K
      );
    }
    z > b ? FB(
      s,
      O,
      R,
      !0,
      !1,
      gA
    ) : v(
      h,
      H,
      T,
      O,
      R,
      p,
      N,
      K,
      gA
    );
  }, rA = (s, h, H, T, O, R, p, N, K) => {
    let z = 0;
    const b = h.length;
    let gA = s.length - 1, W = b - 1;
    for (; z <= gA && z <= W; ) {
      const U = s[z], d = h[z] = K ? WB(h[z]) : lB(h[z]);
      if (Pg(U, d))
        a(
          U,
          d,
          H,
          null,
          O,
          R,
          p,
          N,
          K
        );
      else
        break;
      z++;
    }
    for (; z <= gA && z <= W; ) {
      const U = s[gA], d = h[W] = K ? WB(h[W]) : lB(h[W]);
      if (Pg(U, d))
        a(
          U,
          d,
          H,
          null,
          O,
          R,
          p,
          N,
          K
        );
      else
        break;
      gA--, W--;
    }
    if (z > gA) {
      if (z <= W) {
        const U = W + 1, d = U < b ? h[U].el : T;
        for (; z <= W; )
          a(
            null,
            h[z] = K ? WB(h[z]) : lB(h[z]),
            H,
            d,
            O,
            R,
            p,
            N,
            K
          ), z++;
      }
    } else if (z > W)
      for (; z <= gA; )
        UA(s[z], O, R, !0), z++;
    else {
      const U = z, d = z, _ = /* @__PURE__ */ new Map();
      for (z = d; z <= W; z++) {
        const _A = h[z] = K ? WB(h[z]) : lB(h[z]);
        _A.key != null && _.set(_A.key, z);
      }
      let CA, nA = 0;
      const mA = W - d + 1;
      let XA = !1, hQ = 0;
      const ug = new Array(mA);
      for (z = 0; z < mA; z++)
        ug[z] = 0;
      for (z = U; z <= gA; z++) {
        const _A = s[z];
        if (nA >= mA) {
          UA(_A, O, R, !0);
          continue;
        }
        let GB;
        if (_A.key != null)
          GB = _.get(_A.key);
        else
          for (CA = d; CA <= W; CA++)
            if (ug[CA - d] === 0 && Pg(_A, h[CA])) {
              GB = CA;
              break;
            }
        GB === void 0 ? UA(_A, O, R, !0) : (ug[GB - d] = z + 1, GB >= hQ ? hQ = GB : XA = !0, a(
          _A,
          h[GB],
          H,
          null,
          O,
          R,
          p,
          N,
          K
        ), nA++);
      }
      const gI = XA ? FY(ug) : Jg;
      for (CA = gI.length - 1, z = mA - 1; z >= 0; z--) {
        const _A = d + z, GB = h[_A], QI = _A + 1 < b ? h[_A + 1].el : T;
        ug[z] === 0 ? a(
          null,
          GB,
          H,
          QI,
          O,
          R,
          p,
          N,
          K
        ) : XA && (CA < 0 || z !== gI[CA] ? HA(GB, H, QI, 2) : CA--);
      }
    }
  }, HA = (s, h, H, T, O = null) => {
    const { el: R, type: p, transition: N, children: K, shapeFlag: z } = s;
    if (z & 6) {
      HA(s.component.subTree, h, H, T);
      return;
    }
    if (z & 128) {
      s.suspense.move(h, H, T);
      return;
    }
    if (z & 64) {
      p.move(s, h, H, LB);
      return;
    }
    if (p === sA) {
      Q(R, h, H);
      for (let gA = 0; gA < K.length; gA++)
        HA(K[gA], h, H, T);
      Q(s.anchor, h, H);
      return;
    }
    if (p === TC) {
      l(s, h, H);
      return;
    }
    if (T !== 2 && z & 1 && N)
      if (T === 0)
        N.beforeEnter(R), Q(R, h, H), VA(() => N.enter(R), O);
      else {
        const { leave: gA, delayLeave: W, afterLeave: U } = N, d = () => Q(R, h, H), _ = () => {
          gA(R, () => {
            d(), U && U();
          });
        };
        W ? W(R, d, _) : _();
      }
    else
      Q(R, h, H);
  }, UA = (s, h, H, T = !1, O = !1) => {
    const {
      type: R,
      props: p,
      ref: N,
      children: K,
      dynamicChildren: z,
      shapeFlag: b,
      patchFlag: gA,
      dirs: W
    } = s;
    if (N != null && IE(N, null, H, s, !0), b & 256) {
      h.ctx.deactivate(s);
      return;
    }
    const U = b & 1 && W, d = !_g(s);
    let _;
    if (d && (_ = p && p.onVnodeBeforeUnmount) && UB(_, h, s), b & 6)
      lC(s.component, H, T);
    else {
      if (b & 128) {
        s.suspense.unmount(H, T);
        return;
      }
      U && Ig(s, null, h, "beforeUnmount"), b & 64 ? s.type.remove(
        s,
        h,
        H,
        O,
        LB,
        T
      ) : z && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== sA || gA > 0 && gA & 64) ? FB(
        z,
        h,
        H,
        !1,
        !0
      ) : (R === sA && gA & 384 || !O && b & 16) && FB(K, h, H), T && dg(s);
    }
    (d && (_ = p && p.onVnodeUnmounted) || U) && VA(() => {
      _ && UB(_, h, s), U && Ig(s, null, h, "unmounted");
    }, H);
  }, dg = (s) => {
    const { type: h, el: H, anchor: T, transition: O } = s;
    if (h === sA) {
      Lg(H, T);
      return;
    }
    if (h === TC) {
      u(s);
      return;
    }
    const R = () => {
      C(H), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (s.shapeFlag & 1 && O && !O.persisted) {
      const { leave: p, delayLeave: N } = O, K = () => p(H, R);
      N ? N(s.el, R, K) : K();
    } else
      R();
  }, Lg = (s, h) => {
    let H;
    for (; s !== h; )
      H = i(s), C(s), s = H;
    C(h);
  }, lC = (s, h, H) => {
    const { bum: T, scope: O, update: R, subTree: p, um: N } = s;
    T && zQ(T), O.stop(), R && (R.active = !1, UA(p, s, h, H)), N && VA(N, h), VA(() => {
      s.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && s.asyncDep && !s.asyncResolved && s.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
  }, FB = (s, h, H, T = !1, O = !1, R = 0) => {
    for (let p = R; p < s.length; p++)
      UA(s[p], h, H, T, O);
  }, mg = (s) => s.shapeFlag & 6 ? mg(s.component.subTree) : s.shapeFlag & 128 ? s.suspense.next() : i(s.anchor || s.el);
  let Kg = !1;
  const nQ = (s, h, H) => {
    s == null ? h._vnode && UA(h._vnode, null, null, !0) : a(
      h._vnode || null,
      s,
      h,
      null,
      null,
      null,
      H
    ), Kg || (Kg = !0, tI(), kD(), Kg = !1), h._vnode = s;
  }, LB = {
    p: a,
    um: UA,
    m: HA,
    r: dg,
    mt: AA,
    mc: v,
    pc: YA,
    pbc: j,
    n: mg,
    o: A
  };
  let yg, pg;
  return B && ([yg, pg] = B(
    LB
  )), {
    render: nQ,
    hydrate: yg,
    createApp: oY(nQ, yg)
  };
}
function JC({ type: A, props: B }, g) {
  return g === "svg" && A === "foreignObject" || g === "mathml" && A === "annotation-xml" && B && B.encoding && B.encoding.includes("html") ? void 0 : g;
}
function wg({ effect: A, update: B }, g) {
  A.allowRecurse = B.allowRecurse = g;
}
function aY(A, B) {
  return (!A || A && !A.pendingBranch) && B && !B.persisted;
}
function qD(A, B, g = !1) {
  const Q = A.children, C = B.children;
  if ($(Q) && $(C))
    for (let E = 0; E < Q.length; E++) {
      const I = Q[E];
      let e = C[E];
      e.shapeFlag & 1 && !e.dynamicChildren && ((e.patchFlag <= 0 || e.patchFlag === 32) && (e = C[E] = WB(C[E]), e.el = I.el), g || qD(I, e)), e.type === cQ && (e.el = I.el);
    }
}
function FY(A) {
  const B = A.slice(), g = [0];
  let Q, C, E, I, e;
  const Y = A.length;
  for (Q = 0; Q < Y; Q++) {
    const M = A[Q];
    if (M !== 0) {
      if (C = g[g.length - 1], A[C] < M) {
        B[Q] = C, g.push(Q);
        continue;
      }
      for (E = 0, I = g.length - 1; E < I; )
        e = E + I >> 1, A[g[e]] < M ? E = e + 1 : I = e;
      M < A[g[E]] && (E > 0 && (B[Q] = g[E - 1]), g[E] = Q);
    }
  }
  for (E = g.length, I = g[E - 1]; E-- > 0; )
    g[E] = I, I = B[I];
  return g;
}
function XD(A) {
  const B = A.subTree.component;
  if (B)
    return B.asyncDep && !B.asyncResolved ? B : XD(B);
}
const rY = (A) => A.__isTeleport, sA = Symbol.for("v-fgt"), cQ = Symbol.for("v-txt"), cB = Symbol.for("v-cmt"), TC = Symbol.for("v-stc"), BQ = [];
let rB = null;
function D(A = !1) {
  BQ.push(rB = A ? null : []);
}
function sY() {
  BQ.pop(), rB = BQ[BQ.length - 1] || null;
}
let IQ = 1;
function HI(A) {
  IQ += A;
}
function _D(A) {
  return A.dynamicChildren = IQ > 0 ? rB || Jg : null, sY(), IQ > 0 && rB && rB.push(A), A;
}
function o(A, B, g, Q, C, E) {
  return _D(
    w(
      A,
      B,
      g,
      Q,
      C,
      E,
      !0
    )
  );
}
function MA(A, B, g, Q, C) {
  return _D(
    q(
      A,
      B,
      g,
      Q,
      C,
      !0
    )
  );
}
function VQ(A) {
  return A ? A.__v_isVNode === !0 : !1;
}
function Pg(A, B) {
  return A.type === B.type && A.key === B.key;
}
const cC = "__vInternal", $D = ({ key: A }) => A ?? null, jQ = ({
  ref: A,
  ref_key: B,
  ref_for: g
}) => (typeof A == "number" && (A = "" + A), A != null ? fA(A) || jA(A) || wA(A) ? { i: OA, r: A, k: B, f: !!g } : A : null);
function w(A, B = null, g = null, Q = 0, C = null, E = A === sA ? 0 : 1, I = !1, e = !1) {
  const Y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A,
    props: B,
    key: B && $D(B),
    ref: B && jQ(B),
    scopeId: TD,
    slotScopeIds: null,
    children: g,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: E,
    patchFlag: Q,
    dynamicProps: C,
    dynamicChildren: null,
    appContext: null,
    ctx: OA
  };
  return e ? (yE(Y, g), E & 128 && A.normalize(Y)) : g && (Y.shapeFlag |= fA(g) ? 8 : 16), IQ > 0 && // avoid a block node from tracking itself
  !I && // has current parent block
  rB && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (Y.patchFlag > 0 || E & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  Y.patchFlag !== 32 && rB.push(Y), Y;
}
const q = nY;
function nY(A, B = null, g = null, Q = 0, C = null, E = !1) {
  if ((!A || A === zD) && (A = cB), VQ(A)) {
    const e = kB(
      A,
      B,
      !0
      /* mergeRef: true */
    );
    return g && yE(e, g), IQ > 0 && !E && rB && (e.shapeFlag & 6 ? rB[rB.indexOf(A)] = e : rB.push(e)), e.patchFlag |= -2, e;
  }
  if (vY(A) && (A = A.__vccOpts), B) {
    B = iC(B);
    let { class: e, style: Y } = B;
    e && !fA(e) && (B.class = iA(e)), hA(Y) && (hD(Y) && !$(Y) && (Y = TA({}, Y)), B.style = Bg(Y));
  }
  const I = fA(A) ? 1 : je(A) ? 128 : rY(A) ? 64 : hA(A) ? 4 : wA(A) ? 2 : 0;
  return w(
    A,
    B,
    g,
    Q,
    C,
    I,
    E,
    !0
  );
}
function iC(A) {
  return A ? hD(A) || cC in A ? TA({}, A) : A : null;
}
function kB(A, B, g = !1) {
  const { props: Q, ref: C, patchFlag: E, children: I } = A, e = B ? sB(Q || {}, B) : Q;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A.type,
    props: e,
    key: e && $D(e),
    ref: B && B.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      g && C ? $(C) ? C.concat(jQ(B)) : [C, jQ(B)] : jQ(B)
    ) : C,
    scopeId: A.scopeId,
    slotScopeIds: A.slotScopeIds,
    children: I,
    target: A.target,
    targetAnchor: A.targetAnchor,
    staticCount: A.staticCount,
    shapeFlag: A.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: B && A.type !== sA ? E === -1 ? 16 : E | 16 : E,
    dynamicProps: A.dynamicProps,
    dynamicChildren: A.dynamicChildren,
    appContext: A.appContext,
    dirs: A.dirs,
    transition: A.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: A.component,
    suspense: A.suspense,
    ssContent: A.ssContent && kB(A.ssContent),
    ssFallback: A.ssFallback && kB(A.ssFallback),
    el: A.el,
    anchor: A.anchor,
    ctx: A.ctx,
    ce: A.ce
  };
}
function dA(A = " ", B = 0) {
  return q(cQ, null, A, B);
}
function BA(A = "", B = !1) {
  return B ? (D(), MA(cB, null, A)) : q(cB, null, A);
}
function lB(A) {
  return A == null || typeof A == "boolean" ? q(cB) : $(A) ? q(
    sA,
    null,
    // #3666, avoid reference pollution when reusing vnode
    A.slice()
  ) : typeof A == "object" ? WB(A) : q(cQ, null, String(A));
}
function WB(A) {
  return A.el === null && A.patchFlag !== -1 || A.memo ? A : kB(A);
}
function yE(A, B) {
  let g = 0;
  const { shapeFlag: Q } = A;
  if (B == null)
    B = null;
  else if ($(B))
    g = 16;
  else if (typeof B == "object")
    if (Q & 65) {
      const C = B.default;
      C && (C._c && (C._d = !1), yE(A, C()), C._c && (C._d = !0));
      return;
    } else {
      g = 32;
      const C = B._;
      !C && !(cC in B) ? B._ctx = OA : C === 3 && OA && (OA.slots._ === 1 ? B._ = 1 : (B._ = 2, A.patchFlag |= 1024));
    }
  else
    wA(B) ? (B = { default: B, _ctx: OA }, g = 32) : (B = String(B), Q & 64 ? (g = 16, B = [dA(B)]) : g = 8);
  A.children = B, A.shapeFlag |= g;
}
function sB(...A) {
  const B = {};
  for (let g = 0; g < A.length; g++) {
    const Q = A[g];
    for (const C in Q)
      if (C === "class")
        B.class !== Q.class && (B.class = iA([B.class, Q.class]));
      else if (C === "style")
        B.style = Bg([B.style, Q.style]);
      else if (wC(C)) {
        const E = B[C], I = Q[C];
        I && E !== I && !($(E) && E.includes(I)) && (B[C] = E ? [].concat(E, I) : I);
      } else
        C !== "" && (B[C] = Q[C]);
  }
  return B;
}
function UB(A, B, g, Q = null) {
  tB(A, B, 7, [
    g,
    Q
  ]);
}
const hY = pD();
let GY = 0;
function UY(A, B, g) {
  const Q = A.type, C = (B ? B.appContext : A.appContext) || hY, E = {
    uid: GY++,
    vnode: A,
    type: Q,
    parent: B,
    appContext: C,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new wD(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: B ? B.provides : Object.create(C.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: WD(Q, C),
    emitsOptions: JD(Q, C),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: lA,
    // inheritAttrs
    inheritAttrs: Q.inheritAttrs,
    // state
    ctx: lA,
    data: lA,
    props: lA,
    attrs: lA,
    slots: lA,
    refs: lA,
    setupState: lA,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: g,
    suspenseId: g ? g.pendingId : 0,
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
  return E.ctx = { _: E }, E.root = B ? B.root : E, E.emit = ke.bind(null, E), A.ce && A.ce(E), E;
}
let NA = null;
const RB = () => NA || OA;
let ZQ, wE;
{
  const A = CD(), B = (g, Q) => {
    let C;
    return (C = A[g]) || (C = A[g] = []), C.push(Q), (E) => {
      C.length > 1 ? C.forEach((I) => I(E)) : C[0](E);
    };
  };
  ZQ = B(
    "__VUE_INSTANCE_SETTERS__",
    (g) => NA = g
  ), wE = B(
    "__VUE_SSR_SETTERS__",
    (g) => aQ = g
  );
}
const iQ = (A) => {
  const B = NA;
  return ZQ(A), A.scope.on(), () => {
    A.scope.off(), ZQ(B);
  };
}, dI = () => {
  NA && NA.scope.off(), ZQ(null);
};
function Ao(A) {
  return A.vnode.shapeFlag & 4;
}
let aQ = !1;
function lY(A, B = !1) {
  B && wE(B);
  const { props: g, children: Q } = A.vnode, C = Ao(A);
  eY(A, g, C, B), PY(A, Q);
  const E = C ? HY(A, B) : void 0;
  return B && wE(!1), E;
}
function HY(A, B) {
  const g = A.type;
  A.accessCache = /* @__PURE__ */ Object.create(null), A.proxy = GD(new Proxy(A.ctx, AY));
  const { setup: Q } = g;
  if (Q) {
    const C = A.setupContext = Q.length > 1 ? go(A) : null, E = iQ(A);
    Gg();
    const I = XB(
      Q,
      A,
      0,
      [
        A.props,
        C
      ]
    );
    if (Ug(), E(), BD(I)) {
      if (I.then(dI, dI), B)
        return I.then((e) => {
          uI(A, e, B);
        }).catch((e) => {
          PQ(e, A, 0);
        });
      A.asyncDep = I;
    } else
      uI(A, I, B);
  } else
    Bo(A, B);
}
function uI(A, B, g) {
  wA(B) ? A.type.__ssrInlineRender ? A.ssrRender = B : A.render = B : hA(B) && (A.setupState = dD(B)), Bo(A, g);
}
let vI;
function Bo(A, B, g) {
  const Q = A.type;
  if (!A.render) {
    if (!B && vI && !Q.render) {
      const C = Q.template || mE(A).template;
      if (C) {
        const { isCustomElement: E, compilerOptions: I } = A.appContext.config, { delimiters: e, compilerOptions: Y } = Q, M = TA(
          TA(
            {
              isCustomElement: E,
              delimiters: e
            },
            I
          ),
          Y
        );
        Q.render = vI(C, M);
      }
    }
    A.render = Q.render || CB;
  }
  {
    const C = iQ(A);
    Gg();
    try {
      QY(A);
    } finally {
      Ug(), C();
    }
  }
}
function dY(A) {
  return A.attrsProxy || (A.attrsProxy = new Proxy(
    A.attrs,
    {
      get(B, g) {
        return qA(A, "get", "$attrs"), B[g];
      }
    }
  ));
}
function go(A) {
  const B = (g) => {
    A.exposed = g || {};
  };
  return {
    get attrs() {
      return dY(A);
    },
    slots: A.slots,
    emit: A.emit,
    expose: B
  };
}
function aC(A) {
  if (A.exposed)
    return A.exposeProxy || (A.exposeProxy = new Proxy(dD(GD(A.exposed)), {
      get(B, g) {
        if (g in B)
          return B[g];
        if (g in $g)
          return $g[g](A);
      },
      has(B, g) {
        return g in B || g in $g;
      }
    }));
}
function uY(A, B = !0) {
  return wA(A) ? A.displayName || A.name : A.name || B && A.__name;
}
function vY(A) {
  return wA(A) && "__vccOpts" in A;
}
const k = (A, B) => re(A, B, aQ);
function nB(A, B, g) {
  const Q = arguments.length;
  return Q === 2 ? hA(B) && !$(B) ? VQ(B) ? q(A, null, [B]) : q(A, B) : q(A, null, B) : (Q > 3 ? g = Array.prototype.slice.call(arguments, 2) : Q === 3 && VQ(g) && (g = [g]), q(A, B, g));
}
const kY = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fY = "http://www.w3.org/2000/svg", JY = "http://www.w3.org/1998/Math/MathML", bB = typeof document < "u" ? document : null, kI = bB && /* @__PURE__ */ bB.createElement("template"), TY = {
  insert: (A, B, g) => {
    B.insertBefore(A, g || null);
  },
  remove: (A) => {
    const B = A.parentNode;
    B && B.removeChild(A);
  },
  createElement: (A, B, g, Q) => {
    const C = B === "svg" ? bB.createElementNS(fY, A) : B === "mathml" ? bB.createElementNS(JY, A) : bB.createElement(A, g ? { is: g } : void 0);
    return A === "select" && Q && Q.multiple != null && C.setAttribute("multiple", Q.multiple), C;
  },
  createText: (A) => bB.createTextNode(A),
  createComment: (A) => bB.createComment(A),
  setText: (A, B) => {
    A.nodeValue = B;
  },
  setElementText: (A, B) => {
    A.textContent = B;
  },
  parentNode: (A) => A.parentNode,
  nextSibling: (A) => A.nextSibling,
  querySelector: (A) => bB.querySelector(A),
  setScopeId(A, B) {
    A.setAttribute(B, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(A, B, g, Q, C, E) {
    const I = g ? g.previousSibling : B.lastChild;
    if (C && (C === E || C.nextSibling))
      for (; B.insertBefore(C.cloneNode(!0), g), !(C === E || !(C = C.nextSibling)); )
        ;
    else {
      kI.innerHTML = Q === "svg" ? `<svg>${A}</svg>` : Q === "mathml" ? `<math>${A}</math>` : A;
      const e = kI.content;
      if (Q === "svg" || Q === "mathml") {
        const Y = e.firstChild;
        for (; Y.firstChild; )
          e.appendChild(Y.firstChild);
        e.removeChild(Y);
      }
      B.insertBefore(e, g);
    }
    return [
      // first
      I ? I.nextSibling : B.firstChild,
      // last
      g ? g.previousSibling : B.lastChild
    ];
  }
}, KB = "transition", xg = "animation", wQ = Symbol("_vtc"), qQ = (A, { slots: B }) => nB(ye, OY(A), B);
qQ.displayName = "Transition";
const Qo = {
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
};
qQ.props = /* @__PURE__ */ TA(
  {},
  ND,
  Qo
);
const Dg = (A, B = []) => {
  $(A) ? A.forEach((g) => g(...B)) : A && A(...B);
}, fI = (A) => A ? $(A) ? A.some((B) => B.length > 1) : A.length > 1 : !1;
function OY(A) {
  const B = {};
  for (const f in A)
    f in Qo || (B[f] = A[f]);
  if (A.css === !1)
    return B;
  const {
    name: g = "v",
    type: Q,
    duration: C,
    enterFromClass: E = `${g}-enter-from`,
    enterActiveClass: I = `${g}-enter-active`,
    enterToClass: e = `${g}-enter-to`,
    appearFromClass: Y = E,
    appearActiveClass: M = I,
    appearToClass: P = e,
    leaveFromClass: t = `${g}-leave-from`,
    leaveActiveClass: i = `${g}-leave-active`,
    leaveToClass: F = `${g}-leave-to`
  } = A, c = zY(C), a = c && c[0], r = c && c[1], {
    onBeforeEnter: n,
    onEnter: G,
    onEnterCancelled: l,
    onLeave: u,
    onLeaveCancelled: S,
    onBeforeAppear: J = n,
    onAppear: QA = G,
    onAppearCancelled: v = l
  } = B, L = (f, x, AA) => {
    og(f, x ? P : e), og(f, x ? M : I), AA && AA();
  }, j = (f, x) => {
    f._isLeaving = !1, og(f, t), og(f, F), og(f, i), x && x();
  }, m = (f) => (x, AA) => {
    const IA = f ? QA : G, eA = () => L(x, f, AA);
    Dg(IA, [x, eA]), JI(() => {
      og(x, f ? Y : E), yB(x, f ? P : e), fI(IA) || TI(x, Q, a, eA);
    });
  };
  return TA(B, {
    onBeforeEnter(f) {
      Dg(n, [f]), yB(f, E), yB(f, I);
    },
    onBeforeAppear(f) {
      Dg(J, [f]), yB(f, Y), yB(f, M);
    },
    onEnter: m(!1),
    onAppear: m(!0),
    onLeave(f, x) {
      f._isLeaving = !0;
      const AA = () => j(f, x);
      yB(f, t), SY(), yB(f, i), JI(() => {
        f._isLeaving && (og(f, t), yB(f, F), fI(u) || TI(f, Q, r, AA));
      }), Dg(u, [f, AA]);
    },
    onEnterCancelled(f) {
      L(f, !1), Dg(l, [f]);
    },
    onAppearCancelled(f) {
      L(f, !0), Dg(v, [f]);
    },
    onLeaveCancelled(f) {
      j(f), Dg(S, [f]);
    }
  });
}
function zY(A) {
  if (A == null)
    return null;
  if (hA(A))
    return [OC(A.enter), OC(A.leave)];
  {
    const B = OC(A);
    return [B, B];
  }
}
function OC(A) {
  return ZC(A);
}
function yB(A, B) {
  B.split(/\s+/).forEach((g) => g && A.classList.add(g)), (A[wQ] || (A[wQ] = /* @__PURE__ */ new Set())).add(B);
}
function og(A, B) {
  B.split(/\s+/).forEach((Q) => Q && A.classList.remove(Q));
  const g = A[wQ];
  g && (g.delete(B), g.size || (A[wQ] = void 0));
}
function JI(A) {
  requestAnimationFrame(() => {
    requestAnimationFrame(A);
  });
}
let jY = 0;
function TI(A, B, g, Q) {
  const C = A._endId = ++jY, E = () => {
    C === A._endId && Q();
  };
  if (g)
    return setTimeout(E, g);
  const { type: I, timeout: e, propCount: Y } = NY(A, B);
  if (!I)
    return Q();
  const M = I + "end";
  let P = 0;
  const t = () => {
    A.removeEventListener(M, i), E();
  }, i = (F) => {
    F.target === A && ++P >= Y && t();
  };
  setTimeout(() => {
    P < Y && t();
  }, e + 1), A.addEventListener(M, i);
}
function NY(A, B) {
  const g = window.getComputedStyle(A), Q = (c) => (g[c] || "").split(", "), C = Q(`${KB}Delay`), E = Q(`${KB}Duration`), I = OI(C, E), e = Q(`${xg}Delay`), Y = Q(`${xg}Duration`), M = OI(e, Y);
  let P = null, t = 0, i = 0;
  B === KB ? I > 0 && (P = KB, t = I, i = E.length) : B === xg ? M > 0 && (P = xg, t = M, i = Y.length) : (t = Math.max(I, M), P = t > 0 ? I > M ? KB : xg : null, i = P ? P === KB ? E.length : Y.length : 0);
  const F = P === KB && /\b(transform|all)(,|$)/.test(
    Q(`${KB}Property`).toString()
  );
  return {
    type: P,
    timeout: t,
    propCount: i,
    hasTransform: F
  };
}
function OI(A, B) {
  for (; A.length < B.length; )
    A = A.concat(A);
  return Math.max(...B.map((g, Q) => zI(g) + zI(A[Q])));
}
function zI(A) {
  return A === "auto" ? 0 : Number(A.slice(0, -1).replace(",", ".")) * 1e3;
}
function SY() {
  return document.body.offsetHeight;
}
function RY(A, B, g) {
  const Q = A[wQ];
  Q && (B = (B ? [B, ...Q] : [...Q]).join(" ")), B == null ? A.removeAttribute("class") : g ? A.setAttribute("class", B) : A.className = B;
}
const XQ = Symbol("_vod"), Co = Symbol("_vsh"), LY = {
  beforeMount(A, { value: B }, { transition: g }) {
    A[XQ] = A.style.display === "none" ? "" : A.style.display, g && B ? g.beforeEnter(A) : Wg(A, B);
  },
  mounted(A, { value: B }, { transition: g }) {
    g && B && g.enter(A);
  },
  updated(A, { value: B, oldValue: g }, { transition: Q }) {
    !B != !g && (Q ? B ? (Q.beforeEnter(A), Wg(A, !0), Q.enter(A)) : Q.leave(A, () => {
      Wg(A, !1);
    }) : Wg(A, B));
  },
  beforeUnmount(A, { value: B }) {
    Wg(A, B);
  }
};
function Wg(A, B) {
  A.style.display = B ? A[XQ] : "none", A[Co] = !B;
}
const mY = Symbol(""), KY = /(^|;)\s*display\s*:/;
function yY(A, B, g) {
  const Q = A.style, C = fA(g);
  let E = !1;
  if (g && !C) {
    if (B)
      if (fA(B))
        for (const I of B.split(";")) {
          const e = I.slice(0, I.indexOf(":")).trim();
          g[e] == null && NQ(Q, e, "");
        }
      else
        for (const I in B)
          g[I] == null && NQ(Q, I, "");
    for (const I in g)
      I === "display" && (E = !0), NQ(Q, I, g[I]);
  } else if (C) {
    if (B !== g) {
      const I = Q[mY];
      I && (g += ";" + I), Q.cssText = g, E = KY.test(g);
    }
  } else
    B && A.removeAttribute("style");
  XQ in A && (A[XQ] = E ? Q.display : "", A[Co] && (Q.display = "none"));
}
const jI = /\s*!important$/;
function NQ(A, B, g) {
  if ($(g))
    g.forEach((Q) => NQ(A, B, Q));
  else if (g == null && (g = ""), B.startsWith("--"))
    A.setProperty(B, g);
  else {
    const Q = pY(A, B);
    jI.test(g) ? A.setProperty(
      PB(Q),
      g.replace(jI, ""),
      "important"
    ) : A[Q] = g;
  }
}
const NI = ["Webkit", "Moz", "ms"], zC = {};
function pY(A, B) {
  const g = zC[B];
  if (g)
    return g;
  let Q = IB(B);
  if (Q !== "filter" && Q in A)
    return zC[B] = Q;
  Q = oC(Q);
  for (let C = 0; C < NI.length; C++) {
    const E = NI[C] + Q;
    if (E in A)
      return zC[B] = E;
  }
  return B;
}
const SI = "http://www.w3.org/1999/xlink";
function xY(A, B, g, Q, C) {
  if (Q && B.startsWith("xlink:"))
    g == null ? A.removeAttributeNS(SI, B.slice(6, B.length)) : A.setAttributeNS(SI, B, g);
  else {
    const E = V0(B);
    g == null || E && !ED(g) ? A.removeAttribute(B) : A.setAttribute(B, E ? "" : g);
  }
}
function WY(A, B, g, Q, C, E, I) {
  if (B === "innerHTML" || B === "textContent") {
    Q && I(Q, C, E), A[B] = g ?? "";
    return;
  }
  const e = A.tagName;
  if (B === "value" && e !== "PROGRESS" && // custom elements may use _value internally
  !e.includes("-")) {
    const M = e === "OPTION" ? A.getAttribute("value") || "" : A.value, P = g ?? "";
    (M !== P || !("_value" in A)) && (A.value = P), g == null && A.removeAttribute(B), A._value = g;
    return;
  }
  let Y = !1;
  if (g === "" || g == null) {
    const M = typeof A[B];
    M === "boolean" ? g = ED(g) : g == null && M === "string" ? (g = "", Y = !0) : M === "number" && (g = 0, Y = !0);
  }
  try {
    A[B] = g;
  } catch {
  }
  Y && A.removeAttribute(B);
}
function JB(A, B, g, Q) {
  A.addEventListener(B, g, Q);
}
function bY(A, B, g, Q) {
  A.removeEventListener(B, g, Q);
}
const RI = Symbol("_vei");
function VY(A, B, g, Q, C = null) {
  const E = A[RI] || (A[RI] = {}), I = E[B];
  if (Q && I)
    I.value = Q;
  else {
    const [e, Y] = ZY(B);
    if (Q) {
      const M = E[B] = _Y(Q, C);
      JB(A, e, M, Y);
    } else
      I && (bY(A, e, I, Y), E[B] = void 0);
  }
}
const LI = /(?:Once|Passive|Capture)$/;
function ZY(A) {
  let B;
  if (LI.test(A)) {
    B = {};
    let Q;
    for (; Q = A.match(LI); )
      A = A.slice(0, A.length - Q[0].length), B[Q[0].toLowerCase()] = !0;
  }
  return [A[2] === ":" ? A.slice(3) : PB(A.slice(2)), B];
}
let jC = 0;
const qY = /* @__PURE__ */ Promise.resolve(), XY = () => jC || (qY.then(() => jC = 0), jC = Date.now());
function _Y(A, B) {
  const g = (Q) => {
    if (!Q._vts)
      Q._vts = Date.now();
    else if (Q._vts <= g.attached)
      return;
    tB(
      $Y(Q, g.value),
      B,
      5,
      [Q]
    );
  };
  return g.value = A, g.attached = XY(), g;
}
function $Y(A, B) {
  if ($(B)) {
    const g = A.stopImmediatePropagation;
    return A.stopImmediatePropagation = () => {
      g.call(A), A._stopped = !0;
    }, B.map((Q) => (C) => !C._stopped && Q && Q(C));
  } else
    return B;
}
const mI = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // lowercase letter
A.charCodeAt(2) > 96 && A.charCodeAt(2) < 123, AM = (A, B, g, Q, C, E, I, e, Y) => {
  const M = C === "svg";
  B === "class" ? RY(A, Q, M) : B === "style" ? yY(A, g, Q) : wC(B) ? dE(B) || VY(A, B, g, Q, I) : (B[0] === "." ? (B = B.slice(1), !0) : B[0] === "^" ? (B = B.slice(1), !1) : BM(A, B, Q, M)) ? WY(
    A,
    B,
    Q,
    E,
    I,
    e,
    Y
  ) : (B === "true-value" ? A._trueValue = Q : B === "false-value" && (A._falseValue = Q), xY(A, B, Q, M));
};
function BM(A, B, g, Q) {
  if (Q)
    return !!(B === "innerHTML" || B === "textContent" || B in A && mI(B) && wA(g));
  if (B === "spellcheck" || B === "draggable" || B === "translate" || B === "form" || B === "list" && A.tagName === "INPUT" || B === "type" && A.tagName === "TEXTAREA")
    return !1;
  if (B === "width" || B === "height") {
    const C = A.tagName;
    if (C === "IMG" || C === "VIDEO" || C === "CANVAS" || C === "SOURCE")
      return !1;
  }
  return mI(B) && fA(g) ? !1 : B in A;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gM(A, B) {
  const g = /* @__PURE__ */ oB(A);
  class Q extends pE {
    constructor(E) {
      super(g, E, B);
    }
  }
  return Q.def = g, Q;
}
const QM = typeof HTMLElement < "u" ? HTMLElement : class {
};
class pE extends QM {
  constructor(B, g = {}, Q) {
    super(), this._def = B, this._props = g, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && Q ? Q(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), QB(() => {
      this._connected || (WI(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let Q = 0; Q < this.attributes.length; Q++)
      this._setAttr(this.attributes[Q].name);
    this._ob = new MutationObserver((Q) => {
      for (const C of Q)
        this._setAttr(C.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const B = (Q, C = !1) => {
      const { props: E, styles: I } = Q;
      let e;
      if (E && !$(E))
        for (const Y in E) {
          const M = E[Y];
          (M === Number || M && M.type === Number) && (Y in this._props && (this._props[Y] = ZC(this._props[Y])), (e || (e = /* @__PURE__ */ Object.create(null)))[IB(Y)] = !0);
        }
      this._numberProps = e, C && this._resolveProps(Q), this._applyStyles(I), this._update();
    }, g = this._def.__asyncLoader;
    g ? g().then((Q) => B(Q, !0)) : B(this._def);
  }
  _resolveProps(B) {
    const { props: g } = B, Q = $(g) ? g : Object.keys(g || {});
    for (const C of Object.keys(this))
      C[0] !== "_" && Q.includes(C) && this._setProp(C, this[C], !0, !1);
    for (const C of Q.map(IB))
      Object.defineProperty(this, C, {
        get() {
          return this._getProp(C);
        },
        set(E) {
          this._setProp(C, E);
        }
      });
  }
  _setAttr(B) {
    let g = this.getAttribute(B);
    const Q = IB(B);
    this._numberProps && this._numberProps[Q] && (g = ZC(g)), this._setProp(Q, g, !1);
  }
  /**
   * @internal
   */
  _getProp(B) {
    return this._props[B];
  }
  /**
   * @internal
   */
  _setProp(B, g, Q = !0, C = !0) {
    g !== this._props[B] && (this._props[B] = g, C && this._instance && this._update(), Q && (g === !0 ? this.setAttribute(PB(B), "") : typeof g == "string" || typeof g == "number" ? this.setAttribute(PB(B), g + "") : g || this.removeAttribute(PB(B))));
  }
  _update() {
    WI(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const B = q(this._def, TA({}, this._props));
    return this._instance || (B.ce = (g) => {
      this._instance = g, g.isCE = !0;
      const Q = (E, I) => {
        this.dispatchEvent(
          new CustomEvent(E, {
            detail: I
          })
        );
      };
      g.emit = (E, ...I) => {
        Q(E, I), PB(E) !== E && Q(PB(E), I);
      };
      let C = this;
      for (; C = C && (C.parentNode || C.host); )
        if (C instanceof pE) {
          g.parent = C._instance, g.provides = C._instance.provides;
          break;
        }
    }), B;
  }
  _applyStyles(B) {
    B && B.forEach((g) => {
      const Q = document.createElement("style");
      Q.textContent = g, this.shadowRoot.appendChild(Q);
    });
  }
}
const Ag = (A) => {
  const B = A.props["onUpdate:modelValue"] || !1;
  return $(B) ? (g) => zQ(B, g) : B;
};
function CM(A) {
  A.target.composing = !0;
}
function KI(A) {
  const B = A.target;
  B.composing && (B.composing = !1, B.dispatchEvent(new Event("input")));
}
const iB = Symbol("_assign"), _Q = {
  created(A, { modifiers: { lazy: B, trim: g, number: Q } }, C) {
    A[iB] = Ag(C);
    const E = Q || C.props && C.props.type === "number";
    JB(A, B ? "change" : "input", (I) => {
      if (I.target.composing)
        return;
      let e = A.value;
      g && (e = e.trim()), E && (e = gQ(e)), A[iB](e);
    }), g && JB(A, "change", () => {
      A.value = A.value.trim();
    }), B || (JB(A, "compositionstart", CM), JB(A, "compositionend", KI), JB(A, "change", KI));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(A, { value: B }) {
    A.value = B ?? "";
  },
  beforeUpdate(A, { value: B, modifiers: { lazy: g, trim: Q, number: C } }, E) {
    if (A[iB] = Ag(E), A.composing)
      return;
    const I = C || A.type === "number" ? gQ(A.value) : A.value, e = B ?? "";
    I !== e && (document.activeElement === A && A.type !== "range" && (g || Q && A.value.trim() === e) || (A.value = e));
  }
}, EM = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(A, B, g) {
    A[iB] = Ag(g), JB(A, "change", () => {
      const Q = A._modelValue, C = jg(A), E = A.checked, I = A[iB];
      if ($(Q)) {
        const e = kE(Q, C), Y = e !== -1;
        if (E && !Y)
          I(Q.concat(C));
        else if (!E && Y) {
          const M = [...Q];
          M.splice(e, 1), I(M);
        }
      } else if (Sg(Q)) {
        const e = new Set(Q);
        E ? e.add(C) : e.delete(C), I(e);
      } else
        I(Eo(A, E));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: yI,
  beforeUpdate(A, B, g) {
    A[iB] = Ag(g), yI(A, B, g);
  }
};
function yI(A, { value: B, oldValue: g }, Q) {
  A._modelValue = B, $(B) ? A.checked = kE(B, Q.props.value) > -1 : Sg(B) ? A.checked = B.has(Q.props.value) : B !== g && (A.checked = rg(B, Eo(A, !0)));
}
const IM = {
  created(A, { value: B }, g) {
    A.checked = rg(B, g.props.value), A[iB] = Ag(g), JB(A, "change", () => {
      A[iB](jg(A));
    });
  },
  beforeUpdate(A, { value: B, oldValue: g }, Q) {
    A[iB] = Ag(Q), B !== g && (A.checked = rg(B, Q.props.value));
  }
}, wM = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(A, { value: B, modifiers: { number: g } }, Q) {
    const C = Sg(B);
    JB(A, "change", () => {
      const E = Array.prototype.filter.call(A.options, (I) => I.selected).map(
        (I) => g ? gQ(jg(I)) : jg(I)
      );
      A[iB](
        A.multiple ? C ? new Set(E) : E : E[0]
      ), A._assigning = !0, QB(() => {
        A._assigning = !1;
      });
    }), A[iB] = Ag(Q);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(A, { value: B, modifiers: { number: g } }) {
    pI(A, B, g);
  },
  beforeUpdate(A, B, g) {
    A[iB] = Ag(g);
  },
  updated(A, { value: B, modifiers: { number: g } }) {
    A._assigning || pI(A, B, g);
  }
};
function pI(A, B, g) {
  const Q = A.multiple, C = $(B);
  if (!(Q && !C && !Sg(B))) {
    for (let E = 0, I = A.options.length; E < I; E++) {
      const e = A.options[E], Y = jg(e);
      if (Q)
        if (C) {
          const M = typeof Y;
          M === "string" || M === "number" ? e.selected = B.includes(
            g ? gQ(Y) : Y
          ) : e.selected = kE(B, Y) > -1;
        } else
          e.selected = B.has(Y);
      else if (rg(jg(e), B)) {
        A.selectedIndex !== E && (A.selectedIndex = E);
        return;
      }
    }
    !Q && A.selectedIndex !== -1 && (A.selectedIndex = -1);
  }
}
function jg(A) {
  return "_value" in A ? A._value : A.value;
}
function Eo(A, B) {
  const g = B ? "_trueValue" : "_falseValue";
  return g in A ? A[g] : B;
}
const DM = {
  created(A, B, g) {
    kQ(A, B, g, null, "created");
  },
  mounted(A, B, g) {
    kQ(A, B, g, null, "mounted");
  },
  beforeUpdate(A, B, g, Q) {
    kQ(A, B, g, Q, "beforeUpdate");
  },
  updated(A, B, g, Q) {
    kQ(A, B, g, Q, "updated");
  }
};
function oM(A, B) {
  switch (A) {
    case "SELECT":
      return wM;
    case "TEXTAREA":
      return _Q;
    default:
      switch (B) {
        case "checkbox":
          return EM;
        case "radio":
          return IM;
        default:
          return _Q;
      }
  }
}
function kQ(A, B, g, Q, C) {
  const I = oM(
    A.tagName,
    g.props && g.props.type
  )[C];
  I && I(A, B, g, Q);
}
const eM = ["ctrl", "shift", "alt", "meta"], YM = {
  stop: (A) => A.stopPropagation(),
  prevent: (A) => A.preventDefault(),
  self: (A) => A.target !== A.currentTarget,
  ctrl: (A) => !A.ctrlKey,
  shift: (A) => !A.shiftKey,
  alt: (A) => !A.altKey,
  meta: (A) => !A.metaKey,
  left: (A) => "button" in A && A.button !== 0,
  middle: (A) => "button" in A && A.button !== 1,
  right: (A) => "button" in A && A.button !== 2,
  exact: (A, B) => eM.some((g) => A[`${g}Key`] && !B.includes(g))
}, DQ = (A, B) => {
  const g = A._withMods || (A._withMods = {}), Q = B.join(".");
  return g[Q] || (g[Q] = (C, ...E) => {
    for (let I = 0; I < B.length; I++) {
      const e = YM[B[I]];
      if (e && e(C, B))
        return;
    }
    return A(C, ...E);
  });
}, MM = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, YB = (A, B) => {
  const g = A._withKeys || (A._withKeys = {}), Q = B.join(".");
  return g[Q] || (g[Q] = (C) => {
    if (!("key" in C))
      return;
    const E = PB(C.key);
    if (B.some((I) => I === E || MM[I] === E))
      return A(C);
  });
}, PM = /* @__PURE__ */ TA({ patchProp: AM }, TY);
let xI;
function Io() {
  return xI || (xI = cY(PM));
}
const WI = (...A) => {
  Io().render(...A);
}, tM = (...A) => {
  const B = Io().createApp(...A), { mount: g } = B;
  return B.mount = (Q) => {
    const C = iM(Q);
    if (!C)
      return;
    const E = B._component;
    !wA(E) && !E.render && !E.template && (E.template = C.innerHTML), C.innerHTML = "";
    const I = g(C, !1, cM(C));
    return C instanceof Element && (C.removeAttribute("v-cloak"), C.setAttribute("data-v-app", "")), I;
  }, B;
};
function cM(A) {
  if (A instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && A instanceof MathMLElement)
    return "mathml";
}
function iM(A) {
  return fA(A) ? document.querySelector(A) : A;
}
const aM = (A) => {
  for (; (A == null ? void 0 : A.nodeType) !== 1; ) {
    if (!A.parentElement)
      throw new Error(
        "No parent element found, the rootComponent must be wrapped in a HTML element (e.g. <template><div> app content </div></template>)"
      );
    A = A.parentElement;
  }
  return A;
};
function FM(A) {
  return "on" + A.charAt(0).toUpperCase() + A.slice(1);
}
const rM = ({
  rootComponent: A,
  plugins: B,
  cssFrameworkStyles: g,
  VueDefineCustomElement: Q,
  h: C,
  createApp: E,
  getCurrentInstance: I,
  elementName: e,
  disableRemoveStylesOnUnmount: Y
}) => Q({
  styles: [g],
  props: {
    ...A.props,
    modelValue: { type: [String, Number, Boolean, Array, Object] }
    // v-model support
  },
  emits: A == null ? void 0 : A.emits,
  setup(M) {
    var P;
    const t = [...(A == null ? void 0 : A.emits) || [], "update:modelValue"], i = E();
    if (i.component("app-root", A), A.provide) {
      const r = typeof A.provide == "function" ? A.provide() : A.provide;
      Object.keys(r).forEach((n) => {
        i.provide(n, r[n]);
      });
    }
    i.mixin({
      mounted() {
        var r;
        const n = (G) => {
          G != null && G.length && (this.__style = document.createElement("style"), this.__style.innerText = G.join().replace(/\n/g, ""), aM(this.$el).prepend(this.__style));
        };
        if (n((r = this.$) == null ? void 0 : r.type.styles), this.$options.components)
          for (const G of Object.values(this.$options.components))
            n(G.styles);
      },
      unmounted() {
        var r;
        Y || (r = this.__style) == null || r.remove();
      }
    }), i.use(B);
    const F = I();
    Object.assign(F.appContext, i._context), Object.assign(F.provides, i._context.provides);
    const c = t == null ? void 0 : t.reduce((r, n) => {
      const G = FM(n);
      return r[G] = (l) => {
        F.emit(n, l);
      }, r;
    }, {}), a = (P = A == null ? void 0 : A.namedSlots) == null ? void 0 : P.reduce((r, n) => (r[n] = () => C("slot", { name: n }), r), {});
    return () => C(
      A,
      {
        ...M,
        ...c
      },
      {
        default: () => C("slot"),
        ...a
      }
    );
  }
}), sM = ({
  elementName: A,
  rootComponent: B,
  plugins: g,
  cssFrameworkStyles: Q,
  VueDefineCustomElement: C,
  h: E,
  createApp: I,
  getCurrentInstance: e,
  disableRemoveStylesOnUnmount: Y
}) => {
  if (!B) {
    console.warn("No root component provided. Please provide a root component to create a web component.");
    return;
  }
  if (!A) {
    console.warn("No element name provided. Please provide an element name to create a web component.");
    return;
  }
  if (!C) {
    console.warn(
      "No VueDefineCustomElement provided. Please provide a VueDefineCustomElement to create a web component."
    );
    return;
  }
  if (!E) {
    console.warn("No h provided. Please provide an h to create a web component.");
    return;
  }
  if (!I) {
    console.warn("No createApp provided. Please provide a createApp to create a web component.");
    return;
  }
  if (!e) {
    console.warn("No getCurrentInstance provided. Please provide a getCurrentInstance to create a web component.");
    return;
  }
  customElements.define(
    A,
    rM({
      rootComponent: B,
      plugins: g,
      cssFrameworkStyles: Q,
      VueDefineCustomElement: C,
      h: E,
      createApp: I,
      getCurrentInstance: e,
      elementName: A,
      disableRemoveStylesOnUnmount: Y
    })
  );
};
/*!
  * shared v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const $Q = typeof window < "u", gg = (A, B = !1) => B ? Symbol.for(A) : Symbol(A), nM = (A, B, g) => hM({ l: A, k: B, s: g }), hM = (A) => JSON.stringify(A).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), SA = (A) => typeof A == "number" && isFinite(A), GM = (A) => Do(A) === "[object Date]", AC = (A) => Do(A) === "[object RegExp]", FC = (A) => PA(A) && Object.keys(A).length === 0, yA = Object.assign;
let bI;
const xE = () => bI || (bI = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function VI(A) {
  return A.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const UM = Object.prototype.hasOwnProperty;
function BC(A, B) {
  return UM.call(A, B);
}
const zA = Array.isArray, uA = (A) => typeof A == "function", X = (A) => typeof A == "string", vA = (A) => typeof A == "boolean", FA = (A) => A !== null && typeof A == "object", lM = (A) => FA(A) && uA(A.then) && uA(A.catch), wo = Object.prototype.toString, Do = (A) => wo.call(A), PA = (A) => {
  if (!FA(A))
    return !1;
  const B = Object.getPrototypeOf(A);
  return B === null || B.constructor === Object;
}, HM = (A) => A == null ? "" : zA(A) || PA(A) && A.toString === wo ? JSON.stringify(A, null, 2) : String(A);
function dM(A, B = "") {
  return A.reduce((g, Q, C) => C === 0 ? g + Q : g + B + Q, "");
}
function WE(A) {
  let B = A;
  return () => ++B;
}
function uM(A, B) {
  typeof console < "u" && (console.warn("[intlify] " + A), B && console.warn(B.stack));
}
const fQ = (A) => !FA(A) || zA(A);
function SQ(A, B) {
  if (fQ(A) || fQ(B))
    throw new Error("Invalid value");
  const g = [{ src: A, des: B }];
  for (; g.length; ) {
    const { src: Q, des: C } = g.pop();
    Object.keys(Q).forEach((E) => {
      fQ(Q[E]) || fQ(C[E]) ? C[E] = Q[E] : g.push({ src: Q[E], des: C[E] });
    });
  }
}
/*!
  * message-compiler v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const vM = /\{([0-9a-zA-Z]+)\}/g;
function kM(A, ...B) {
  return B.length === 1 && fM(B[0]) && (B = B[0]), (!B || !B.hasOwnProperty) && (B = {}), A.replace(vM, (g, Q) => B.hasOwnProperty(Q) ? B[Q] : "");
}
const fM = (A) => A !== null && typeof A == "object", RA = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, JM = {
  // tokenizer error messages
  [RA.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [RA.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [RA.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [RA.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [RA.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [RA.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [RA.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [RA.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [RA.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [RA.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [RA.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [RA.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [RA.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [RA.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [RA.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [RA.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function oo(A, B, g = {}) {
  const { domain: Q, messages: C, args: E } = g, I = kM((C || JM)[A] || "", ...E || []), e = new SyntaxError(String(I));
  return e.code = A, B && (e.location = B), e.domain = Q, e;
}
/*!
  * core-base v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function TM() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xE().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Qg = [];
Qg[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Qg[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Qg[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Qg[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Qg[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Qg[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Qg[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const OM = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function zM(A) {
  return OM.test(A);
}
function jM(A) {
  const B = A.charCodeAt(0), g = A.charCodeAt(A.length - 1);
  return B === g && (B === 34 || B === 39) ? A.slice(1, -1) : A;
}
function NM(A) {
  if (A == null)
    return "o";
  switch (A.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return A;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function SM(A) {
  const B = A.trim();
  return A.charAt(0) === "0" && isNaN(parseInt(A)) ? !1 : zM(B) ? jM(B) : "*" + B;
}
function RM(A) {
  const B = [];
  let g = -1, Q = 0, C = 0, E, I, e, Y, M, P, t;
  const i = [];
  i[
    0
    /* Actions.APPEND */
  ] = () => {
    I === void 0 ? I = e : I += e;
  }, i[
    1
    /* Actions.PUSH */
  ] = () => {
    I !== void 0 && (B.push(I), I = void 0);
  }, i[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    i[
      0
      /* Actions.APPEND */
    ](), C++;
  }, i[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (C > 0)
      C--, Q = 4, i[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (C = 0, I === void 0 || (I = SM(I), I === !1))
        return !1;
      i[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function F() {
    const c = A[g + 1];
    if (Q === 5 && c === "'" || Q === 6 && c === '"')
      return g++, e = "\\" + c, i[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; Q !== null; )
    if (g++, E = A[g], !(E === "\\" && F())) {
      if (Y = NM(E), t = Qg[Q], M = t[Y] || t.l || 8, M === 8 || (Q = M[0], M[1] !== void 0 && (P = i[M[1]], P && (e = E, P() === !1))))
        return;
      if (Q === 7)
        return B;
    }
}
const ZI = /* @__PURE__ */ new Map();
function LM(A, B) {
  return FA(A) ? A[B] : null;
}
function mM(A, B) {
  if (!FA(A))
    return null;
  let g = ZI.get(B);
  if (g || (g = RM(B), g && ZI.set(B, g)), !g)
    return null;
  const Q = g.length;
  let C = A, E = 0;
  for (; E < Q; ) {
    const I = C[g[E]];
    if (I === void 0 || uA(C))
      return null;
    C = I, E++;
  }
  return C;
}
const KM = (A) => A, yM = (A) => "", pM = "text", xM = (A) => A.length === 0 ? "" : dM(A), WM = HM;
function qI(A, B) {
  return A = Math.abs(A), B === 2 ? A ? A > 1 ? 1 : 0 : 1 : A ? Math.min(A, 2) : 0;
}
function bM(A) {
  const B = SA(A.pluralIndex) ? A.pluralIndex : -1;
  return A.named && (SA(A.named.count) || SA(A.named.n)) ? SA(A.named.count) ? A.named.count : SA(A.named.n) ? A.named.n : B : B;
}
function VM(A, B) {
  B.count || (B.count = A), B.n || (B.n = A);
}
function ZM(A = {}) {
  const B = A.locale, g = bM(A), Q = FA(A.pluralRules) && X(B) && uA(A.pluralRules[B]) ? A.pluralRules[B] : qI, C = FA(A.pluralRules) && X(B) && uA(A.pluralRules[B]) ? qI : void 0, E = (n) => n[Q(g, n.length, C)], I = A.list || [], e = (n) => I[n], Y = A.named || {};
  SA(A.pluralIndex) && VM(g, Y);
  const M = (n) => Y[n];
  function P(n) {
    const G = uA(A.messages) ? A.messages(n) : FA(A.messages) ? A.messages[n] : !1;
    return G || (A.parent ? A.parent.message(n) : yM);
  }
  const t = (n) => A.modifiers ? A.modifiers[n] : KM, i = PA(A.processor) && uA(A.processor.normalize) ? A.processor.normalize : xM, F = PA(A.processor) && uA(A.processor.interpolate) ? A.processor.interpolate : WM, c = PA(A.processor) && X(A.processor.type) ? A.processor.type : pM, r = {
    list: e,
    named: M,
    plural: E,
    linked: (n, ...G) => {
      const [l, u] = G;
      let S = "text", J = "";
      G.length === 1 ? FA(l) ? (J = l.modifier || J, S = l.type || S) : X(l) && (J = l || J) : G.length === 2 && (X(l) && (J = l || J), X(u) && (S = u || S));
      const QA = P(n)(r), v = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        S === "vnode" && zA(QA) && J ? QA[0] : QA
      );
      return J ? t(J)(v, S) : v;
    },
    message: P,
    type: c,
    interpolate: F,
    normalize: i,
    values: yA({}, I, Y)
  };
  return r;
}
let oQ = null;
function qM(A) {
  oQ = A;
}
function XM(A, B, g) {
  oQ && oQ.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: A,
    version: B,
    meta: g
  });
}
const _M = /* @__PURE__ */ $M(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function $M(A) {
  return (B) => oQ && oQ.emit(A, B);
}
const AP = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, eo = RA.__EXTEND_POINT__, eg = WE(eo), dB = {
  INVALID_ARGUMENT: eo,
  // 18
  INVALID_DATE_ARGUMENT: eg(),
  // 19
  INVALID_ISO_DATE_ARGUMENT: eg(),
  // 20
  NOT_SUPPORT_NON_STRING_MESSAGE: eg(),
  // 21
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: eg(),
  // 22
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: eg(),
  // 23
  NOT_SUPPORT_LOCALE_TYPE: eg(),
  // 24
  __EXTEND_POINT__: eg()
  // 25
};
function TB(A) {
  return oo(A, null, void 0);
}
function bE(A, B) {
  return B.locale != null ? XI(B.locale) : XI(A.locale);
}
let NC;
function XI(A) {
  if (X(A))
    return A;
  if (uA(A)) {
    if (A.resolvedOnce && NC != null)
      return NC;
    if (A.constructor.name === "Function") {
      const B = A();
      if (lM(B))
        throw TB(dB.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return NC = B;
    } else
      throw TB(dB.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw TB(dB.NOT_SUPPORT_LOCALE_TYPE);
}
function BP(A, B, g) {
  return [.../* @__PURE__ */ new Set([
    g,
    ...zA(B) ? B : FA(B) ? Object.keys(B) : X(B) ? [B] : [g]
  ])];
}
function Yo(A, B, g) {
  const Q = X(g) ? g : gC, C = A;
  C.__localeChainCache || (C.__localeChainCache = /* @__PURE__ */ new Map());
  let E = C.__localeChainCache.get(Q);
  if (!E) {
    E = [];
    let I = [g];
    for (; zA(I); )
      I = _I(E, I, B);
    const e = zA(B) || !PA(B) ? B : B.default ? B.default : null;
    I = X(e) ? [e] : e, zA(I) && _I(E, I, !1), C.__localeChainCache.set(Q, E);
  }
  return E;
}
function _I(A, B, g) {
  let Q = !0;
  for (let C = 0; C < B.length && vA(Q); C++) {
    const E = B[C];
    X(E) && (Q = gP(A, B[C], g));
  }
  return Q;
}
function gP(A, B, g) {
  let Q;
  const C = B.split("-");
  do {
    const E = C.join("-");
    Q = QP(A, E, g), C.splice(-1, 1);
  } while (C.length && Q === !0);
  return Q;
}
function QP(A, B, g) {
  let Q = !1;
  if (!A.includes(B) && (Q = !0, B)) {
    Q = B[B.length - 1] !== "!";
    const C = B.replace(/!/g, "");
    A.push(C), (zA(g) || PA(g)) && g[C] && (Q = g[C]);
  }
  return Q;
}
const CP = "9.10.2", rC = -1, gC = "en-US", $I = "", Aw = (A) => `${A.charAt(0).toLocaleUpperCase()}${A.substr(1)}`;
function EP() {
  return {
    upper: (A, B) => B === "text" && X(A) ? A.toUpperCase() : B === "vnode" && FA(A) && "__v_isVNode" in A ? A.children.toUpperCase() : A,
    lower: (A, B) => B === "text" && X(A) ? A.toLowerCase() : B === "vnode" && FA(A) && "__v_isVNode" in A ? A.children.toLowerCase() : A,
    capitalize: (A, B) => B === "text" && X(A) ? Aw(A) : B === "vnode" && FA(A) && "__v_isVNode" in A ? Aw(A.children) : A
  };
}
let IP, Mo;
function wP(A) {
  Mo = A;
}
let Po;
function DP(A) {
  Po = A;
}
let to = null;
const oP = /* @__NO_SIDE_EFFECTS__ */ (A) => {
  to = A;
}, eP = /* @__NO_SIDE_EFFECTS__ */ () => to;
let co = null;
const Bw = (A) => {
  co = A;
}, YP = () => co;
let gw = 0;
function MP(A = {}) {
  const B = uA(A.onWarn) ? A.onWarn : uM, g = X(A.version) ? A.version : CP, Q = X(A.locale) || uA(A.locale) ? A.locale : gC, C = uA(Q) ? gC : Q, E = zA(A.fallbackLocale) || PA(A.fallbackLocale) || X(A.fallbackLocale) || A.fallbackLocale === !1 ? A.fallbackLocale : C, I = PA(A.messages) ? A.messages : { [C]: {} }, e = PA(A.datetimeFormats) ? A.datetimeFormats : { [C]: {} }, Y = PA(A.numberFormats) ? A.numberFormats : { [C]: {} }, M = yA({}, A.modifiers || {}, EP()), P = A.pluralRules || {}, t = uA(A.missing) ? A.missing : null, i = vA(A.missingWarn) || AC(A.missingWarn) ? A.missingWarn : !0, F = vA(A.fallbackWarn) || AC(A.fallbackWarn) ? A.fallbackWarn : !0, c = !!A.fallbackFormat, a = !!A.unresolving, r = uA(A.postTranslation) ? A.postTranslation : null, n = PA(A.processor) ? A.processor : null, G = vA(A.warnHtmlMessage) ? A.warnHtmlMessage : !0, l = !!A.escapeParameter, u = uA(A.messageCompiler) ? A.messageCompiler : IP, S = uA(A.messageResolver) ? A.messageResolver : Mo || LM, J = uA(A.localeFallbacker) ? A.localeFallbacker : Po || BP, QA = FA(A.fallbackContext) ? A.fallbackContext : void 0, v = A, L = FA(v.__datetimeFormatters) ? v.__datetimeFormatters : /* @__PURE__ */ new Map(), j = FA(v.__numberFormatters) ? v.__numberFormatters : /* @__PURE__ */ new Map(), m = FA(v.__meta) ? v.__meta : {};
  gw++;
  const f = {
    version: g,
    cid: gw,
    locale: Q,
    fallbackLocale: E,
    messages: I,
    modifiers: M,
    pluralRules: P,
    missing: t,
    missingWarn: i,
    fallbackWarn: F,
    fallbackFormat: c,
    unresolving: a,
    postTranslation: r,
    processor: n,
    warnHtmlMessage: G,
    escapeParameter: l,
    messageCompiler: u,
    messageResolver: S,
    localeFallbacker: J,
    fallbackContext: QA,
    onWarn: B,
    __meta: m
  };
  return f.datetimeFormats = e, f.numberFormats = Y, f.__datetimeFormatters = L, f.__numberFormatters = j, __INTLIFY_PROD_DEVTOOLS__ && XM(f, g, m), f;
}
function VE(A, B, g, Q, C) {
  const { missing: E, onWarn: I } = A;
  if (E !== null) {
    const e = E(A, g, B, C);
    return X(e) ? e : B;
  } else
    return B;
}
function bg(A, B, g) {
  const Q = A;
  Q.__localeChainCache = /* @__PURE__ */ new Map(), A.localeFallbacker(A, g, B);
}
const Ng = (A) => FA(A) && (A.t === 0 || A.type === 0) && ("b" in A || "body" in A), Qw = () => "", MB = (A) => uA(A);
function Cw(A, ...B) {
  const { fallbackFormat: g, postTranslation: Q, unresolving: C, messageCompiler: E, fallbackLocale: I, messages: e } = A, [Y, M] = DE(...B), P = vA(M.missingWarn) ? M.missingWarn : A.missingWarn, t = vA(M.fallbackWarn) ? M.fallbackWarn : A.fallbackWarn, i = vA(M.escapeParameter) ? M.escapeParameter : A.escapeParameter, F = !!M.resolvedMessage, c = X(M.default) || vA(M.default) ? vA(M.default) ? E ? Y : () => Y : M.default : g ? E ? Y : () => Y : "", a = g || c !== "", r = bE(A, M);
  i && PP(M);
  let [n, G, l] = F ? [
    Y,
    r,
    e[r] || {}
  ] : io(A, Y, r, I, t, P), u = n, S = Y;
  if (!F && !(X(u) || Ng(u) || MB(u)) && a && (u = c, S = u), !F && (!(X(u) || Ng(u) || MB(u)) || !X(G)))
    return C ? rC : Y;
  let J = !1;
  const QA = () => {
    J = !0;
  }, v = MB(u) ? u : ao(A, Y, G, u, S, QA);
  if (J)
    return u;
  const L = iP(A, G, l, M), j = ZM(L), m = tP(A, v, j), f = Q ? Q(m, Y) : m;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const x = {
      timestamp: Date.now(),
      key: X(Y) ? Y : MB(u) ? u.key : "",
      locale: G || (MB(u) ? u.locale : ""),
      format: X(u) ? u : MB(u) ? u.source : "",
      message: f
    };
    x.meta = yA({}, A.__meta, /* @__PURE__ */ eP() || {}), _M(x);
  }
  return f;
}
function PP(A) {
  zA(A.list) ? A.list = A.list.map((B) => X(B) ? VI(B) : B) : FA(A.named) && Object.keys(A.named).forEach((B) => {
    X(A.named[B]) && (A.named[B] = VI(A.named[B]));
  });
}
function io(A, B, g, Q, C, E) {
  const { messages: I, onWarn: e, messageResolver: Y, localeFallbacker: M } = A, P = M(A, Q, g);
  let t = {}, i, F = null;
  const c = "translate";
  for (let a = 0; a < P.length && (i = P[a], t = I[i] || {}, (F = Y(t, B)) === null && (F = t[B]), !(X(F) || Ng(F) || MB(F))); a++) {
    const r = VE(
      A,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      B,
      i,
      E,
      c
    );
    r !== B && (F = r);
  }
  return [F, i, t];
}
function ao(A, B, g, Q, C, E) {
  const { messageCompiler: I, warnHtmlMessage: e } = A;
  if (MB(Q)) {
    const M = Q;
    return M.locale = M.locale || g, M.key = M.key || B, M;
  }
  if (I == null) {
    const M = () => Q;
    return M.locale = g, M.key = B, M;
  }
  const Y = I(Q, cP(A, g, C, Q, e, E));
  return Y.locale = g, Y.key = B, Y.source = Q, Y;
}
function tP(A, B, g) {
  return B(g);
}
function DE(...A) {
  const [B, g, Q] = A, C = {};
  if (!X(B) && !SA(B) && !MB(B) && !Ng(B))
    throw TB(dB.INVALID_ARGUMENT);
  const E = SA(B) ? String(B) : (MB(B), B);
  return SA(g) ? C.plural = g : X(g) ? C.default = g : PA(g) && !FC(g) ? C.named = g : zA(g) && (C.list = g), SA(Q) ? C.plural = Q : X(Q) ? C.default = Q : PA(Q) && yA(C, Q), [E, C];
}
function cP(A, B, g, Q, C, E) {
  return {
    locale: B,
    key: g,
    warnHtmlMessage: C,
    onError: (I) => {
      throw E && E(I), I;
    },
    onCacheKey: (I) => nM(B, g, I)
  };
}
function iP(A, B, g, Q) {
  const { modifiers: C, pluralRules: E, messageResolver: I, fallbackLocale: e, fallbackWarn: Y, missingWarn: M, fallbackContext: P } = A, i = {
    locale: B,
    modifiers: C,
    pluralRules: E,
    messages: (F) => {
      let c = I(g, F);
      if (c == null && P) {
        const [, , a] = io(P, F, B, e, Y, M);
        c = I(a, F);
      }
      if (X(c) || Ng(c)) {
        let a = !1;
        const n = ao(A, F, B, c, F, () => {
          a = !0;
        });
        return a ? Qw : n;
      } else
        return MB(c) ? c : Qw;
    }
  };
  return A.processor && (i.processor = A.processor), Q.list && (i.list = Q.list), Q.named && (i.named = Q.named), SA(Q.plural) && (i.pluralIndex = Q.plural), i;
}
function Ew(A, ...B) {
  const { datetimeFormats: g, unresolving: Q, fallbackLocale: C, onWarn: E, localeFallbacker: I } = A, { __datetimeFormatters: e } = A, [Y, M, P, t] = oE(...B), i = vA(P.missingWarn) ? P.missingWarn : A.missingWarn;
  vA(P.fallbackWarn) ? P.fallbackWarn : A.fallbackWarn;
  const F = !!P.part, c = bE(A, P), a = I(
    A,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    C,
    c
  );
  if (!X(Y) || Y === "")
    return new Intl.DateTimeFormat(c, t).format(M);
  let r = {}, n, G = null;
  const l = "datetime format";
  for (let J = 0; J < a.length && (n = a[J], r = g[n] || {}, G = r[Y], !PA(G)); J++)
    VE(A, Y, n, i, l);
  if (!PA(G) || !X(n))
    return Q ? rC : Y;
  let u = `${n}__${Y}`;
  FC(t) || (u = `${u}__${JSON.stringify(t)}`);
  let S = e.get(u);
  return S || (S = new Intl.DateTimeFormat(n, yA({}, G, t)), e.set(u, S)), F ? S.formatToParts(M) : S.format(M);
}
const Fo = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function oE(...A) {
  const [B, g, Q, C] = A, E = {};
  let I = {}, e;
  if (X(B)) {
    const Y = B.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!Y)
      throw TB(dB.INVALID_ISO_DATE_ARGUMENT);
    const M = Y[3] ? Y[3].trim().startsWith("T") ? `${Y[1].trim()}${Y[3].trim()}` : `${Y[1].trim()}T${Y[3].trim()}` : Y[1].trim();
    e = new Date(M);
    try {
      e.toISOString();
    } catch {
      throw TB(dB.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (GM(B)) {
    if (isNaN(B.getTime()))
      throw TB(dB.INVALID_DATE_ARGUMENT);
    e = B;
  } else if (SA(B))
    e = B;
  else
    throw TB(dB.INVALID_ARGUMENT);
  return X(g) ? E.key = g : PA(g) && Object.keys(g).forEach((Y) => {
    Fo.includes(Y) ? I[Y] = g[Y] : E[Y] = g[Y];
  }), X(Q) ? E.locale = Q : PA(Q) && (I = Q), PA(C) && (I = C), [E.key || "", e, E, I];
}
function Iw(A, B, g) {
  const Q = A;
  for (const C in g) {
    const E = `${B}__${C}`;
    Q.__datetimeFormatters.has(E) && Q.__datetimeFormatters.delete(E);
  }
}
function ww(A, ...B) {
  const { numberFormats: g, unresolving: Q, fallbackLocale: C, onWarn: E, localeFallbacker: I } = A, { __numberFormatters: e } = A, [Y, M, P, t] = eE(...B), i = vA(P.missingWarn) ? P.missingWarn : A.missingWarn;
  vA(P.fallbackWarn) ? P.fallbackWarn : A.fallbackWarn;
  const F = !!P.part, c = bE(A, P), a = I(
    A,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    C,
    c
  );
  if (!X(Y) || Y === "")
    return new Intl.NumberFormat(c, t).format(M);
  let r = {}, n, G = null;
  const l = "number format";
  for (let J = 0; J < a.length && (n = a[J], r = g[n] || {}, G = r[Y], !PA(G)); J++)
    VE(A, Y, n, i, l);
  if (!PA(G) || !X(n))
    return Q ? rC : Y;
  let u = `${n}__${Y}`;
  FC(t) || (u = `${u}__${JSON.stringify(t)}`);
  let S = e.get(u);
  return S || (S = new Intl.NumberFormat(n, yA({}, G, t)), e.set(u, S)), F ? S.formatToParts(M) : S.format(M);
}
const ro = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function eE(...A) {
  const [B, g, Q, C] = A, E = {};
  let I = {};
  if (!SA(B))
    throw TB(dB.INVALID_ARGUMENT);
  const e = B;
  return X(g) ? E.key = g : PA(g) && Object.keys(g).forEach((Y) => {
    ro.includes(Y) ? I[Y] = g[Y] : E[Y] = g[Y];
  }), X(Q) ? E.locale = Q : PA(Q) && (I = Q), PA(C) && (I = C), [E.key || "", e, E, I];
}
function Dw(A, B, g) {
  const Q = A;
  for (const C in g) {
    const E = `${B}__${C}`;
    Q.__numberFormatters.has(E) && Q.__numberFormatters.delete(E);
  }
}
TM();
/*!
  * vue-i18n v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const aP = "9.10.2";
function FP() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xE().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const so = AP.__EXTEND_POINT__, fB = WE(so);
fB(), fB(), fB(), fB(), fB(), fB(), fB(), fB(), fB();
const no = dB.__EXTEND_POINT__, bA = WE(no), aB = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: no,
  // 26
  // legacy module errors
  INVALID_ARGUMENT: bA(),
  // 27
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: bA(),
  // 28
  NOT_INSTALLED: bA(),
  // 29
  NOT_AVAILABLE_IN_LEGACY_MODE: bA(),
  // 30
  // directive module errors
  REQUIRED_VALUE: bA(),
  // 31
  INVALID_VALUE: bA(),
  // 32
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: bA(),
  // 33
  NOT_INSTALLED_WITH_PROVIDE: bA(),
  // 34
  // unexpected error
  UNEXPECTED_ERROR: bA(),
  // 35
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: bA(),
  // 36
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: bA(),
  // 37
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: bA(),
  // 38
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: bA(),
  // 39
  // for enhancement
  __EXTEND_POINT__: bA()
  // 40
};
function hB(A, ...B) {
  return oo(A, null, void 0);
}
const YE = /* @__PURE__ */ gg("__translateVNode"), ME = /* @__PURE__ */ gg("__datetimeParts"), PE = /* @__PURE__ */ gg("__numberParts"), rP = gg("__setPluralRules"), sP = /* @__PURE__ */ gg("__injectWithOption"), tE = /* @__PURE__ */ gg("__dispose");
function eQ(A) {
  if (!FA(A))
    return A;
  for (const B in A)
    if (BC(A, B))
      if (!B.includes("."))
        FA(A[B]) && eQ(A[B]);
      else {
        const g = B.split("."), Q = g.length - 1;
        let C = A, E = !1;
        for (let I = 0; I < Q; I++) {
          if (g[I] in C || (C[g[I]] = {}), !FA(C[g[I]])) {
            E = !0;
            break;
          }
          C = C[g[I]];
        }
        E || (C[g[Q]] = A[B], delete A[B]), FA(C[g[Q]]) && eQ(C[g[Q]]);
      }
  return A;
}
function ho(A, B) {
  const { messages: g, __i18n: Q, messageResolver: C, flatJson: E } = B, I = PA(g) ? g : zA(Q) ? {} : { [A]: {} };
  if (zA(Q) && Q.forEach((e) => {
    if ("locale" in e && "resource" in e) {
      const { locale: Y, resource: M } = e;
      Y ? (I[Y] = I[Y] || {}, SQ(M, I[Y])) : SQ(M, I);
    } else
      X(e) && SQ(JSON.parse(e), I);
  }), C == null && E)
    for (const e in I)
      BC(I, e) && eQ(I[e]);
  return I;
}
function Go(A) {
  return A.type;
}
function nP(A, B, g) {
  let Q = FA(B.messages) ? B.messages : {};
  "__i18nGlobal" in g && (Q = ho(A.locale.value, {
    messages: Q,
    __i18n: g.__i18nGlobal
  }));
  const C = Object.keys(Q);
  C.length && C.forEach((E) => {
    A.mergeLocaleMessage(E, Q[E]);
  });
  {
    if (FA(B.datetimeFormats)) {
      const E = Object.keys(B.datetimeFormats);
      E.length && E.forEach((I) => {
        A.mergeDateTimeFormat(I, B.datetimeFormats[I]);
      });
    }
    if (FA(B.numberFormats)) {
      const E = Object.keys(B.numberFormats);
      E.length && E.forEach((I) => {
        A.mergeNumberFormat(I, B.numberFormats[I]);
      });
    }
  }
}
function ow(A) {
  return q(cQ, null, A, 0);
}
const ew = "__INTLIFY_META__", Yw = () => [], hP = () => !1;
let Mw = 0;
function Pw(A) {
  return (B, g, Q, C) => A(g, Q, RB() || void 0, C);
}
const GP = /* @__NO_SIDE_EFFECTS__ */ () => {
  const A = RB();
  let B = null;
  return A && (B = Go(A)[ew]) ? { [ew]: B } : null;
};
function Uo(A = {}, B) {
  const { __root: g, __injectWithOption: Q } = A, C = g === void 0, E = A.flatJson, I = $Q ? Z : SE, e = !!A.translateExistCompatible;
  let Y = vA(A.inheritLocale) ? A.inheritLocale : !0;
  const M = I(
    // prettier-ignore
    g && Y ? g.locale.value : X(A.locale) ? A.locale : gC
  ), P = I(
    // prettier-ignore
    g && Y ? g.fallbackLocale.value : X(A.fallbackLocale) || zA(A.fallbackLocale) || PA(A.fallbackLocale) || A.fallbackLocale === !1 ? A.fallbackLocale : M.value
  ), t = I(ho(M.value, A)), i = I(PA(A.datetimeFormats) ? A.datetimeFormats : { [M.value]: {} }), F = I(PA(A.numberFormats) ? A.numberFormats : { [M.value]: {} });
  let c = g ? g.missingWarn : vA(A.missingWarn) || AC(A.missingWarn) ? A.missingWarn : !0, a = g ? g.fallbackWarn : vA(A.fallbackWarn) || AC(A.fallbackWarn) ? A.fallbackWarn : !0, r = g ? g.fallbackRoot : vA(A.fallbackRoot) ? A.fallbackRoot : !0, n = !!A.fallbackFormat, G = uA(A.missing) ? A.missing : null, l = uA(A.missing) ? Pw(A.missing) : null, u = uA(A.postTranslation) ? A.postTranslation : null, S = g ? g.warnHtmlMessage : vA(A.warnHtmlMessage) ? A.warnHtmlMessage : !0, J = !!A.escapeParameter;
  const QA = g ? g.modifiers : PA(A.modifiers) ? A.modifiers : {};
  let v = A.pluralRules || g && g.pluralRules, L;
  L = (() => {
    C && Bw(null);
    const U = {
      version: aP,
      locale: M.value,
      fallbackLocale: P.value,
      messages: t.value,
      modifiers: QA,
      pluralRules: v,
      missing: l === null ? void 0 : l,
      missingWarn: c,
      fallbackWarn: a,
      fallbackFormat: n,
      unresolving: !0,
      postTranslation: u === null ? void 0 : u,
      warnHtmlMessage: S,
      escapeParameter: J,
      messageResolver: A.messageResolver,
      messageCompiler: A.messageCompiler,
      __meta: { framework: "vue" }
    };
    U.datetimeFormats = i.value, U.numberFormats = F.value, U.__datetimeFormatters = PA(L) ? L.__datetimeFormatters : void 0, U.__numberFormatters = PA(L) ? L.__numberFormatters : void 0;
    const d = MP(U);
    return C && Bw(d), d;
  })(), bg(L, M.value, P.value);
  function m() {
    return [
      M.value,
      P.value,
      t.value,
      i.value,
      F.value
    ];
  }
  const f = k({
    get: () => M.value,
    set: (U) => {
      M.value = U, L.locale = M.value;
    }
  }), x = k({
    get: () => P.value,
    set: (U) => {
      P.value = U, L.fallbackLocale = P.value, bg(L, M.value, U);
    }
  }), AA = k(() => t.value), IA = /* @__PURE__ */ k(() => i.value), eA = /* @__PURE__ */ k(() => F.value);
  function cA() {
    return uA(u) ? u : null;
  }
  function YA(U) {
    u = U, L.postTranslation = U;
  }
  function WA() {
    return G;
  }
  function rA(U) {
    U !== null && (l = Pw(U)), G = U, L.missing = l;
  }
  const HA = (U, d, _, CA, nA, mA) => {
    m();
    let XA;
    try {
      __INTLIFY_PROD_DEVTOOLS__, C || (L.fallbackContext = g ? YP() : void 0), XA = U(L);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, C || (L.fallbackContext = void 0);
    }
    if (_ !== "translate exists" && // for not `te` (e.g `t`)
    SA(XA) && XA === rC || _ === "translate exists" && !XA) {
      const [hQ, ug] = d();
      return g && r ? CA(g) : nA(hQ);
    } else {
      if (mA(XA))
        return XA;
      throw hB(aB.UNEXPECTED_RETURN_TYPE);
    }
  };
  function UA(...U) {
    return HA((d) => Reflect.apply(Cw, null, [d, ...U]), () => DE(...U), "translate", (d) => Reflect.apply(d.t, d, [...U]), (d) => d, (d) => X(d));
  }
  function dg(...U) {
    const [d, _, CA] = U;
    if (CA && !FA(CA))
      throw hB(aB.INVALID_ARGUMENT);
    return UA(d, _, yA({ resolvedMessage: !0 }, CA || {}));
  }
  function Lg(...U) {
    return HA((d) => Reflect.apply(Ew, null, [d, ...U]), () => oE(...U), "datetime format", (d) => Reflect.apply(d.d, d, [...U]), () => $I, (d) => X(d));
  }
  function lC(...U) {
    return HA((d) => Reflect.apply(ww, null, [d, ...U]), () => eE(...U), "number format", (d) => Reflect.apply(d.n, d, [...U]), () => $I, (d) => X(d));
  }
  function FB(U) {
    return U.map((d) => X(d) || SA(d) || vA(d) ? ow(String(d)) : d);
  }
  const Kg = {
    normalize: FB,
    interpolate: (U) => U,
    type: "vnode"
  };
  function nQ(...U) {
    return HA(
      (d) => {
        let _;
        const CA = d;
        try {
          CA.processor = Kg, _ = Reflect.apply(Cw, null, [CA, ...U]);
        } finally {
          CA.processor = null;
        }
        return _;
      },
      () => DE(...U),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (d) => d[YE](...U),
      (d) => [ow(d)],
      (d) => zA(d)
    );
  }
  function LB(...U) {
    return HA(
      (d) => Reflect.apply(ww, null, [d, ...U]),
      () => eE(...U),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (d) => d[PE](...U),
      Yw,
      (d) => X(d) || zA(d)
    );
  }
  function yg(...U) {
    return HA(
      (d) => Reflect.apply(Ew, null, [d, ...U]),
      () => oE(...U),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (d) => d[ME](...U),
      Yw,
      (d) => X(d) || zA(d)
    );
  }
  function pg(U) {
    v = U, L.pluralRules = v;
  }
  function s(U, d) {
    return HA(() => {
      if (!U)
        return !1;
      const _ = X(d) ? d : M.value, CA = T(_), nA = L.messageResolver(CA, U);
      return e ? nA != null : Ng(nA) || MB(nA) || X(nA);
    }, () => [U], "translate exists", (_) => Reflect.apply(_.te, _, [U, d]), hP, (_) => vA(_));
  }
  function h(U) {
    let d = null;
    const _ = Yo(L, P.value, M.value);
    for (let CA = 0; CA < _.length; CA++) {
      const nA = t.value[_[CA]] || {}, mA = L.messageResolver(nA, U);
      if (mA != null) {
        d = mA;
        break;
      }
    }
    return d;
  }
  function H(U) {
    const d = h(U);
    return d ?? (g ? g.tm(U) || {} : {});
  }
  function T(U) {
    return t.value[U] || {};
  }
  function O(U, d) {
    if (E) {
      const _ = { [U]: d };
      for (const CA in _)
        BC(_, CA) && eQ(_[CA]);
      d = _[U];
    }
    t.value[U] = d, L.messages = t.value;
  }
  function R(U, d) {
    t.value[U] = t.value[U] || {};
    const _ = { [U]: d };
    if (E)
      for (const CA in _)
        BC(_, CA) && eQ(_[CA]);
    d = _[U], SQ(d, t.value[U]), L.messages = t.value;
  }
  function p(U) {
    return i.value[U] || {};
  }
  function N(U, d) {
    i.value[U] = d, L.datetimeFormats = i.value, Iw(L, U, d);
  }
  function K(U, d) {
    i.value[U] = yA(i.value[U] || {}, d), L.datetimeFormats = i.value, Iw(L, U, d);
  }
  function z(U) {
    return F.value[U] || {};
  }
  function b(U, d) {
    F.value[U] = d, L.numberFormats = F.value, Dw(L, U, d);
  }
  function gA(U, d) {
    F.value[U] = yA(F.value[U] || {}, d), L.numberFormats = F.value, Dw(L, U, d);
  }
  Mw++, g && $Q && (aA(g.locale, (U) => {
    Y && (M.value = U, L.locale = U, bg(L, M.value, P.value));
  }), aA(g.fallbackLocale, (U) => {
    Y && (P.value = U, L.fallbackLocale = U, bg(L, M.value, P.value));
  }));
  const W = {
    id: Mw,
    locale: f,
    fallbackLocale: x,
    get inheritLocale() {
      return Y;
    },
    set inheritLocale(U) {
      Y = U, U && g && (M.value = g.locale.value, P.value = g.fallbackLocale.value, bg(L, M.value, P.value));
    },
    get availableLocales() {
      return Object.keys(t.value).sort();
    },
    messages: AA,
    get modifiers() {
      return QA;
    },
    get pluralRules() {
      return v || {};
    },
    get isGlobal() {
      return C;
    },
    get missingWarn() {
      return c;
    },
    set missingWarn(U) {
      c = U, L.missingWarn = c;
    },
    get fallbackWarn() {
      return a;
    },
    set fallbackWarn(U) {
      a = U, L.fallbackWarn = a;
    },
    get fallbackRoot() {
      return r;
    },
    set fallbackRoot(U) {
      r = U;
    },
    get fallbackFormat() {
      return n;
    },
    set fallbackFormat(U) {
      n = U, L.fallbackFormat = n;
    },
    get warnHtmlMessage() {
      return S;
    },
    set warnHtmlMessage(U) {
      S = U, L.warnHtmlMessage = U;
    },
    get escapeParameter() {
      return J;
    },
    set escapeParameter(U) {
      J = U, L.escapeParameter = U;
    },
    t: UA,
    getLocaleMessage: T,
    setLocaleMessage: O,
    mergeLocaleMessage: R,
    getPostTranslationHandler: cA,
    setPostTranslationHandler: YA,
    getMissingHandler: WA,
    setMissingHandler: rA,
    [rP]: pg
  };
  return W.datetimeFormats = IA, W.numberFormats = eA, W.rt = dg, W.te = s, W.tm = H, W.d = Lg, W.n = lC, W.getDateTimeFormat = p, W.setDateTimeFormat = N, W.mergeDateTimeFormat = K, W.getNumberFormat = z, W.setNumberFormat = b, W.mergeNumberFormat = gA, W[sP] = Q, W[YE] = nQ, W[ME] = yg, W[PE] = LB, W;
}
const ZE = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (A) => A === "parent" || A === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function UP({ slots: A }, B) {
  return B.length === 1 && B[0] === "default" ? (A.default ? A.default() : []).reduce((Q, C) => [
    ...Q,
    // prettier-ignore
    ...C.type === sA ? C.children : [C]
  ], []) : B.reduce((g, Q) => {
    const C = A[Q];
    return C && (g[Q] = C()), g;
  }, {});
}
function lo(A) {
  return sA;
}
const lP = /* @__PURE__ */ oB({
  /* eslint-disable */
  name: "i18n-t",
  props: yA({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (A) => SA(A) || !isNaN(A)
    }
  }, ZE),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(A, B) {
    const { slots: g, attrs: Q } = B, C = A.i18n || xA({
      useScope: A.scope,
      __useComponent: !0
    });
    return () => {
      const E = Object.keys(g).filter((t) => t !== "_"), I = {};
      A.locale && (I.locale = A.locale), A.plural !== void 0 && (I.plural = X(A.plural) ? +A.plural : A.plural);
      const e = UP(B, E), Y = C[YE](A.keypath, e, I), M = yA({}, Q), P = X(A.tag) || FA(A.tag) ? A.tag : lo();
      return nB(P, M, Y);
    };
  }
}), tw = lP;
function HP(A) {
  return zA(A) && !X(A[0]);
}
function Ho(A, B, g, Q) {
  const { slots: C, attrs: E } = B;
  return () => {
    const I = { part: !0 };
    let e = {};
    A.locale && (I.locale = A.locale), X(A.format) ? I.key = A.format : FA(A.format) && (X(A.format.key) && (I.key = A.format.key), e = Object.keys(A.format).reduce((i, F) => g.includes(F) ? yA({}, i, { [F]: A.format[F] }) : i, {}));
    const Y = Q(A.value, I, e);
    let M = [I.key];
    zA(Y) ? M = Y.map((i, F) => {
      const c = C[i.type], a = c ? c({ [i.type]: i.value, index: F, parts: Y }) : [i.value];
      return HP(a) && (a[0].key = `${i.type}-${F}`), a;
    }) : X(Y) && (M = [Y]);
    const P = yA({}, E), t = X(A.tag) || FA(A.tag) ? A.tag : lo();
    return nB(t, P, M);
  };
}
const dP = /* @__PURE__ */ oB({
  /* eslint-disable */
  name: "i18n-n",
  props: yA({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ZE),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(A, B) {
    const g = A.i18n || xA({
      useScope: "parent",
      __useComponent: !0
    });
    return Ho(A, B, ro, (...Q) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      g[PE](...Q)
    ));
  }
}), cw = dP, uP = /* @__PURE__ */ oB({
  /* eslint-disable */
  name: "i18n-d",
  props: yA({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ZE),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(A, B) {
    const g = A.i18n || xA({
      useScope: "parent",
      __useComponent: !0
    });
    return Ho(A, B, Fo, (...Q) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      g[ME](...Q)
    ));
  }
}), iw = uP;
function vP(A, B) {
  const g = A;
  if (A.mode === "composition")
    return g.__getInstance(B) || A.global;
  {
    const Q = g.__getInstance(B);
    return Q != null ? Q.__composer : A.global.__composer;
  }
}
function kP(A) {
  const B = (I) => {
    const { instance: e, modifiers: Y, value: M } = I;
    if (!e || !e.$)
      throw hB(aB.UNEXPECTED_ERROR);
    const P = vP(A, e.$), t = aw(M);
    return [
      Reflect.apply(P.t, P, [...Fw(t)]),
      P
    ];
  };
  return {
    created: (I, e) => {
      const [Y, M] = B(e);
      $Q && A.global === M && (I.__i18nWatcher = aA(M.locale, () => {
        e.instance && e.instance.$forceUpdate();
      })), I.__composer = M, I.textContent = Y;
    },
    unmounted: (I) => {
      $Q && I.__i18nWatcher && (I.__i18nWatcher(), I.__i18nWatcher = void 0, delete I.__i18nWatcher), I.__composer && (I.__composer = void 0, delete I.__composer);
    },
    beforeUpdate: (I, { value: e }) => {
      if (I.__composer) {
        const Y = I.__composer, M = aw(e);
        I.textContent = Reflect.apply(Y.t, Y, [
          ...Fw(M)
        ]);
      }
    },
    getSSRProps: (I) => {
      const [e] = B(I);
      return { textContent: e };
    }
  };
}
function aw(A) {
  if (X(A))
    return { path: A };
  if (PA(A)) {
    if (!("path" in A))
      throw hB(aB.REQUIRED_VALUE, "path");
    return A;
  } else
    throw hB(aB.INVALID_VALUE);
}
function Fw(A) {
  const { path: B, locale: g, args: Q, choice: C, plural: E } = A, I = {}, e = Q || {};
  return X(g) && (I.locale = g), SA(C) && (I.plural = C), SA(E) && (I.plural = E), [B, e, I];
}
function fP(A, B, ...g) {
  const Q = PA(g[0]) ? g[0] : {}, C = !!Q.useI18nComponentName;
  (vA(Q.globalInstall) ? Q.globalInstall : !0) && ([C ? "i18n" : tw.name, "I18nT"].forEach((I) => A.component(I, tw)), [cw.name, "I18nN"].forEach((I) => A.component(I, cw)), [iw.name, "I18nD"].forEach((I) => A.component(I, iw))), A.directive("t", kP(B));
}
const JP = /* @__PURE__ */ gg("global-vue-i18n");
function uo(A = {}, B) {
  const g = vA(A.globalInjection) ? A.globalInjection : !0, Q = !0, C = /* @__PURE__ */ new Map(), [E, I] = TP(A), e = /* @__PURE__ */ gg("");
  function Y(t) {
    return C.get(t) || null;
  }
  function M(t, i) {
    C.set(t, i);
  }
  function P(t) {
    C.delete(t);
  }
  {
    const t = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return Q;
      },
      // install plugin
      async install(i, ...F) {
        if (i.__VUE_I18N_SYMBOL__ = e, i.provide(i.__VUE_I18N_SYMBOL__, t), PA(F[0])) {
          const r = F[0];
          t.__composerExtend = r.__composerExtend, t.__vueI18nExtend = r.__vueI18nExtend;
        }
        let c = null;
        g && (c = mP(i, t.global)), fP(i, t, ...F);
        const a = i.unmount;
        i.unmount = () => {
          c && c(), t.dispose(), a();
        };
      },
      // global accessor
      get global() {
        return I;
      },
      dispose() {
        E.stop();
      },
      // @internal
      __instances: C,
      // @internal
      __getInstance: Y,
      // @internal
      __setInstance: M,
      // @internal
      __deleteInstance: P
    };
    return t;
  }
}
function xA(A = {}) {
  const B = RB();
  if (B == null)
    throw hB(aB.MUST_BE_CALL_SETUP_TOP);
  if (!B.isCE && B.appContext.app != null && !B.appContext.app.__VUE_I18N_SYMBOL__)
    throw hB(aB.NOT_INSTALLED);
  const g = OP(B), Q = jP(g), C = Go(B), E = zP(A, C);
  if (E === "global")
    return nP(Q, A, C), Q;
  if (E === "parent") {
    let Y = NP(g, B, A.__useComponent);
    return Y == null && (Y = Q), Y;
  }
  const I = g;
  let e = I.__getInstance(B);
  if (e == null) {
    const Y = yA({}, A);
    "__i18n" in C && (Y.__i18n = C.__i18n), Q && (Y.__root = Q), e = Uo(Y), I.__composerExtend && (e[tE] = I.__composerExtend(e)), RP(I, B, e), I.__setInstance(B, e);
  }
  return e;
}
function TP(A, B, g) {
  const Q = q0();
  {
    const C = Q.run(() => Uo(A));
    if (C == null)
      throw hB(aB.UNEXPECTED_ERROR);
    return [Q, C];
  }
}
function OP(A) {
  {
    const B = ZA(A.isCE ? JP : A.appContext.app.__VUE_I18N_SYMBOL__);
    if (!B)
      throw hB(A.isCE ? aB.NOT_INSTALLED_WITH_PROVIDE : aB.UNEXPECTED_ERROR);
    return B;
  }
}
function zP(A, B) {
  return FC(A) ? "__i18n" in B ? "local" : "global" : A.useScope ? A.useScope : "local";
}
function jP(A) {
  return A.mode === "composition" ? A.global : A.global.__composer;
}
function NP(A, B, g = !1) {
  let Q = null;
  const C = B.root;
  let E = SP(B, g);
  for (; E != null; ) {
    const I = A;
    if (A.mode === "composition" && (Q = I.__getInstance(E)), Q != null || C === E)
      break;
    E = E.parent;
  }
  return Q;
}
function SP(A, B = !1) {
  return A == null ? null : B && A.vnode.ctx || A.parent;
}
function RP(A, B, g) {
  LA(() => {
  }, B), Rg(() => {
    const Q = g;
    A.__deleteInstance(B);
    const C = Q[tE];
    C && (C(), delete Q[tE]);
  }, B);
}
const LP = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], rw = ["t", "rt", "d", "n", "tm", "te"];
function mP(A, B) {
  const g = /* @__PURE__ */ Object.create(null);
  return LP.forEach((C) => {
    const E = Object.getOwnPropertyDescriptor(B, C);
    if (!E)
      throw hB(aB.UNEXPECTED_ERROR);
    const I = jA(E.value) ? {
      get() {
        return E.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(e) {
        E.value.value = e;
      }
    } : {
      get() {
        return E.get && E.get();
      }
    };
    Object.defineProperty(g, C, I);
  }), A.config.globalProperties.$i18n = g, rw.forEach((C) => {
    const E = Object.getOwnPropertyDescriptor(B, C);
    if (!E || !E.value)
      throw hB(aB.UNEXPECTED_ERROR);
    Object.defineProperty(A.config.globalProperties, `$${C}`, E);
  }), () => {
    delete A.config.globalProperties.$i18n, rw.forEach((C) => {
      delete A.config.globalProperties[`$${C}`];
    });
  };
}
FP();
wP(mM);
DP(Yo);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const A = xE();
  A.__INTLIFY__ = !0, qM(A.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const SC = (A) => A && typeof A == "object" && !Array.isArray(A), cE = (A, ...B) => {
  if (!B.length)
    return A;
  const g = B.shift();
  if (SC(A) && SC(g))
    for (const Q in g)
      SC(g[Q]) ? (A[Q] || Object.assign(A, { [Q]: {} }), cE(A[Q], g[Q])) : Object.assign(A, { [Q]: g[Q] });
  return cE(A, ...B);
}, RC = cE(
  {},
  { de: {
    global: {
      days: (A) => {
        const { normalize: B, plural: g } = A;
        return g([B(["tag"]), B(["tagen"])]);
      },
      perUnit: (A) => {
        const { normalize: B } = A;
        return B(["ei"]);
      },
      productPhoto: (A) => {
        const { normalize: B } = A;
        return B(["Produktbild"]);
      },
      labels: {
        amount: (A) => {
          const { normalize: B } = A;
          return B(["Nummer"]);
        },
        continue: (A) => {
          const { normalize: B } = A;
          return B(["Steig ein"]);
        },
        optional: (A) => {
          const { normalize: B } = A;
          return B(["Optional"]);
        },
        confirm: (A) => {
          const { normalize: B } = A;
          return B(["Bestätigen"]);
        },
        dismiss: (A) => {
          const { normalize: B } = A;
          return B(["Schließen"]);
        },
        product_reference: (A) => {
          const { normalize: B } = A;
          return B(["Produktreferenz (optional)"]);
        },
        add_to_cart: (A) => {
          const { normalize: B } = A;
          return B(["Zum Warenkorb hinzufügen"]);
        }
      },
      no_accessoires: (A) => {
        const { normalize: B } = A;
        return B(["Keine Zubehör"]);
      },
      unavailable: (A) => {
        const { normalize: B } = A;
        return B(["Nicht verfügbar"]);
      }
    },
    errors: {
      cantBeZero: (A) => {
        const { normalize: B } = A;
        return B(["Der Wert darf nicht kleiner als eins sein"]);
      },
      required: (A) => {
        const { normalize: B } = A;
        return B(["Wert erforderlich"]);
      },
      maxValue: (A) => {
        const { normalize: B, interpolate: g, named: Q } = A;
        return B(["Der Wert darf nicht hoeher sein als ", g(Q("maxValue"))]);
      }
    },
    delivery: {
      deliveryOptions: (A) => {
        const { normalize: B } = A;
        return B(["Verfälgbare Lieferdaten"]);
      },
      noExtraCost: (A) => {
        const { normalize: B } = A;
        return B(["Keine Zusatzkosten"]);
      },
      makeYourChoiceNextStep: (A) => {
        const { normalize: B } = A;
        return B(["Wählen Sie Ihre Wahl in der nächsten Schritt"]);
      },
      seeMore: (A) => {
        const { normalize: B } = A;
        return B(["Alle Daten anzeigen"]);
      },
      seeLess: (A) => {
        const { normalize: B } = A;
        return B(["Weniger Daten anzeigen"]);
      },
      tomorrow: (A) => {
        const { normalize: B } = A;
        return B(["Morgen"]);
      },
      fastest: (A) => {
        const { normalize: B } = A;
        return B(["Schnellste"]);
      },
      cheapest: (A) => {
        const { normalize: B } = A;
        return B(["Aam billigsten"]);
      }
    }
  } },
  { en: {
    global: {
      days: (A) => {
        const { normalize: B, plural: g } = A;
        return g([B(["day"]), B(["days"])]);
      },
      perUnit: (A) => {
        const { normalize: B } = A;
        return B(["pc"]);
      },
      productPhoto: (A) => {
        const { normalize: B } = A;
        return B(["product photo"]);
      },
      labels: {
        amount: (A) => {
          const { normalize: B } = A;
          return B(["Amount"]);
        },
        continue: (A) => {
          const { normalize: B } = A;
          return B(["Continue"]);
        },
        optional: (A) => {
          const { normalize: B } = A;
          return B(["Optional"]);
        },
        confirm: (A) => {
          const { normalize: B } = A;
          return B(["Confirm"]);
        },
        dismiss: (A) => {
          const { normalize: B } = A;
          return B(["Dismiss"]);
        },
        product_reference: (A) => {
          const { normalize: B } = A;
          return B(["Product reference (optional)"]);
        },
        add_to_cart: (A) => {
          const { normalize: B } = A;
          return B(["Add to cart"]);
        }
      },
      no_accessoires: (A) => {
        const { normalize: B } = A;
        return B(["No accessories"]);
      },
      unavailable: (A) => {
        const { normalize: B } = A;
        return B(["Unavailable"]);
      }
    },
    errors: {
      cantBeZero: (A) => {
        const { normalize: B } = A;
        return B(["Value can't be less than one"]);
      },
      required: (A) => {
        const { normalize: B } = A;
        return B(["Value is required"]);
      },
      maxValue: (A) => {
        const { normalize: B, interpolate: g, named: Q } = A;
        return B(["Value can't be greater than ", g(Q("maxValue"))]);
      }
    },
    delivery: {
      deliveryOptions: (A) => {
        const { normalize: B } = A;
        return B(["Available delivery dates"]);
      },
      noExtraCost: (A) => {
        const { normalize: B } = A;
        return B([]);
      },
      makeYourChoiceNextStep: (A) => {
        const { normalize: B } = A;
        return B(["Make your choice in the next step"]);
      },
      seeMore: (A) => {
        const { normalize: B } = A;
        return B(["See all dates"]);
      },
      seeLess: (A) => {
        const { normalize: B } = A;
        return B(["See less dates"]);
      },
      tomorrow: (A) => {
        const { normalize: B } = A;
        return B(["Tomorrow"]);
      },
      fastest: (A) => {
        const { normalize: B } = A;
        return B(["Fastest"]);
      },
      cheapest: (A) => {
        const { normalize: B } = A;
        return B(["Cheapest"]);
      }
    }
  } },
  { nl: {
    global: {
      days: (A) => {
        const { normalize: B, plural: g } = A;
        return g([B(["dag"]), B(["dagen"])]);
      },
      perUnit: (A) => {
        const { normalize: B } = A;
        return B(["st"]);
      },
      productPhoto: (A) => {
        const { normalize: B } = A;
        return B(["product foto"]);
      },
      labels: {
        amount: (A) => {
          const { normalize: B } = A;
          return B(["Aantal"]);
        },
        continue: (A) => {
          const { normalize: B } = A;
          return B(["Doorgaan"]);
        },
        optional: (A) => {
          const { normalize: B } = A;
          return B(["Optioneel"]);
        },
        confirm: (A) => {
          const { normalize: B } = A;
          return B(["Bevestig"]);
        },
        dismiss: (A) => {
          const { normalize: B } = A;
          return B(["Sluiten"]);
        },
        product_reference: (A) => {
          const { normalize: B } = A;
          return B(["Productreferentie (optioneel)"]);
        },
        add_to_cart: (A) => {
          const { normalize: B } = A;
          return B(["Voeg toe aan winkelwagen"]);
        }
      },
      no_accessoires: (A) => {
        const { normalize: B } = A;
        return B(["Geen accessoires"]);
      },
      unavailable: (A) => {
        const { normalize: B } = A;
        return B(["Niet beschikbaar"]);
      }
    },
    errors: {
      cantBeZero: (A) => {
        const { normalize: B } = A;
        return B(["Waarde kan niet kleiner zijn dan één"]);
      },
      required: (A) => {
        const { normalize: B } = A;
        return B(["Waarde is verplicht"]);
      },
      minValue: (A) => {
        const { normalize: B, interpolate: g, named: Q } = A;
        return B(["Waarde kan niet kleiner zijn dan ", g(Q("minValue"))]);
      },
      maxValue: (A) => {
        const { normalize: B, interpolate: g, named: Q } = A;
        return B(["Waarde kan niet groter zijn dan ", g(Q("maxValue"))]);
      }
    },
    delivery: {
      deliveryOptions: (A) => {
        const { normalize: B } = A;
        return B(["Beschikbare leverdatums"]);
      },
      noExtraCost: (A) => {
        const { normalize: B } = A;
        return B(["Geen toeslag"]);
      },
      makeYourChoiceNextStep: (A) => {
        const { normalize: B } = A;
        return B(["Maak je keuze in de volgende stap"]);
      },
      seeMore: (A) => {
        const { normalize: B } = A;
        return B(["Bekijk alle datums"]);
      },
      seeLess: (A) => {
        const { normalize: B } = A;
        return B(["Bekijk minder datums"]);
      },
      tomorrow: (A) => {
        const { normalize: B } = A;
        return B(["Morgen"]);
      },
      fastest: (A) => {
        const { normalize: B } = A;
        return B(["Snelste"]);
      },
      cheapest: (A) => {
        const { normalize: B } = A;
        return B(["Voordeligst"]);
      }
    }
  } }
), vo = {
  legacy: !1,
  locale: "nl",
  fallbackLocale: "en",
  messages: {
    en: {
      ...RC.en,
      complete: "Complete",
      fastest: "Fastest",
      cheapest: "Cheapest",
      tomorrow: "Tomorrow"
    },
    nl: {
      ...RC.nl,
      complete: "Afronden",
      fastest: "Snelste",
      cheapest: "Voordeligst",
      tomorrow: "Morgen"
    },
    de: {
      ...RC.de,
      complete: "Vollständigen",
      fastest: "Schnellste",
      cheapest: "Aam billigsten",
      tomorrow: "Morgen"
    }
  }
}, ng = uo(vo), KP = (A, B) => {
  const g = A[B];
  return g ? typeof g == "function" ? g() : Promise.resolve(g) : new Promise((Q, C) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(C.bind(null, new Error("Unknown variable dynamic import: " + B)));
  });
};
function yP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    })
  ]);
}
function pP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
    })
  ]);
}
function xP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
    })
  ]);
}
function WP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    })
  ]);
}
function bP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    })
  ]);
}
function VP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    })
  ]);
}
function ZP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function qP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
    })
  ]);
}
function XP(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
    })
  ]);
}
function _P(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
    })
  ]);
}
function $P(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
    })
  ]);
}
function At(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    })
  ]);
}
function Bt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    })
  ]);
}
function gt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Qt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
    })
  ]);
}
function Ct(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
    })
  ]);
}
function Et(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
    })
  ]);
}
function It(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    })
  ]);
}
function wt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
    })
  ]);
}
function Dt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
    })
  ]);
}
function ot(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    })
  ]);
}
function et(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
    })
  ]);
}
function Yt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
    })
  ]);
}
function Mt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    })
  ]);
}
function Pt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function tt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
    })
  ]);
}
function ct(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
    })
  ]);
}
function it(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
    })
  ]);
}
function at(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    })
  ]);
}
function Ft(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"
    })
  ]);
}
function rt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"
    })
  ]);
}
function st(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
    })
  ]);
}
function nt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"
    })
  ]);
}
function ht(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    })
  ]);
}
function Gt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
    })
  ]);
}
function Ut(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    })
  ]);
}
function lt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Ht(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
    })
  ]);
}
function dt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
    })
  ]);
}
function ut(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
    })
  ]);
}
function vt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    })
  ]);
}
function kt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
    })
  ]);
}
function ft(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
    })
  ]);
}
function Jt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
    })
  ]);
}
function Tt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
    })
  ]);
}
function Ot(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
    })
  ]);
}
function zt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3"
    })
  ]);
}
function jt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
    })
  ]);
}
function Nt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    })
  ]);
}
function St(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
    })
  ]);
}
function Rt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
    })
  ]);
}
function Lt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
    })
  ]);
}
function mt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
    })
  ]);
}
function Kt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
    })
  ]);
}
function yt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
    })
  ]);
}
function pt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 9h16.5m-16.5 6.75h16.5"
    })
  ]);
}
function xt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
    })
  ]);
}
function Wt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
    })
  ]);
}
function bt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
    })
  ]);
}
function Vt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Zt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    })
  ]);
}
function qt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
    })
  ]);
}
function Xt(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
    })
  ]);
}
function _t(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
    })
  ]);
}
function $t(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
    })
  ]);
}
function Ac(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
    })
  ]);
}
function Bc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    })
  ]);
}
function gc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
    })
  ]);
}
function Qc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
    })
  ]);
}
function Cc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3"
    })
  ]);
}
function Ec(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    })
  ]);
}
function Ic(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
    })
  ]);
}
function wc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    })
  ]);
}
function Dc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    })
  ]);
}
function oc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
    })
  ]);
}
function ec(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
    })
  ]);
}
function Yc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
    })
  ]);
}
function Mc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Pc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"
    })
  ]);
}
function tc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
    })
  ]);
}
function cc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
    })
  ]);
}
function ic(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
    })
  ]);
}
function ac(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
    })
  ]);
}
function Fc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
    })
  ]);
}
function rc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
    })
  ]);
}
function sc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    })
  ]);
}
function nc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    })
  ]);
}
function hc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
    })
  ]);
}
function Gc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    })
  ]);
}
function Uc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    })
  ]);
}
function lc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
    })
  ]);
}
function Hc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    })
  ]);
}
function dc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    })
  ]);
}
function uc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    })
  ]);
}
function vc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
    })
  ]);
}
function kc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    })
  ]);
}
function fc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
    })
  ]);
}
function Jc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
    })
  ]);
}
function Tc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
    })
  ]);
}
function Oc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function zc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function jc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
    })
  ]);
}
function Nc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    })
  ]);
}
function Sc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function Rc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 18.75 7.5-7.5 7.5 7.5"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 7.5-7.5 7.5 7.5"
    })
  ]);
}
function Lc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function mc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function Kc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function yc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function pc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 15.75 7.5-7.5 7.5 7.5"
    })
  ]);
}
function xc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
    })
  ]);
}
function Wc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
    })
  ]);
}
function bc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
    })
  ]);
}
function Vc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
    })
  ]);
}
function Zc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
    })
  ]);
}
function qc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Xc(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
    })
  ]);
}
function _c(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
    })
  ]);
}
function $c(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
    })
  ]);
}
function Ai(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    })
  ]);
}
function Bi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    })
  ]);
}
function gi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
function Qi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
function Ci(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
    })
  ]);
}
function Ei(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
    })
  ]);
}
function Ii(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
    })
  ]);
}
function wi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
    })
  ]);
}
function Di(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    })
  ]);
}
function oi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
    })
  ]);
}
function ei(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    })
  ]);
}
function Yi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 7.5.415-.207a.75.75 0 0 1 1.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 0 0 5.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Mi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Pi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function ti(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function ci(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function ii(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function ai(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
    })
  ]);
}
function Fi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
    })
  ]);
}
function ri(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    })
  ]);
}
function si(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
    })
  ]);
}
function ni(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function hi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function Gi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function Ui(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
    })
  ]);
}
function li(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
    })
  ]);
}
function Hi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    })
  ]);
}
function di(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function ui(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function vi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function ki(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function fi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Ji(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function Ti(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
    })
  ]);
}
function Oi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
    })
  ]);
}
function zi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    })
  ]);
}
function ji(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Ni(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })
  ]);
}
function Si(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9"
    })
  ]);
}
function Ri(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    })
  ]);
}
function Li(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
function mi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
    })
  ]);
}
function Ki(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
    })
  ]);
}
function yi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
    })
  ]);
}
function pi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
    })
  ]);
}
function xi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
    })
  ]);
}
function Wi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
    })
  ]);
}
function bi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
    })
  ]);
}
function Vi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
    })
  ]);
}
function Zi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
    })
  ]);
}
function qi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
    })
  ]);
}
function Xi(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
    })
  ]);
}
function _i(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
    })
  ]);
}
function $i(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
    })
  ]);
}
function A4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    })
  ]);
}
function B4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z"
    })
  ]);
}
function g4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    })
  ]);
}
function Q4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    })
  ]);
}
function C4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
    })
  ]);
}
function E4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
    })
  ]);
}
function I4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
    })
  ]);
}
function w4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
    })
  ]);
}
function D4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
    })
  ]);
}
function o4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
    })
  ]);
}
function e4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
    })
  ]);
}
function Y4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    })
  ]);
}
function M4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
    })
  ]);
}
function P4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    })
  ]);
}
function t4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
    })
  ]);
}
function c4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
    })
  ]);
}
function i4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
    })
  ]);
}
function a4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
    })
  ]);
}
function F4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
function r4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
    })
  ]);
}
function s4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
    })
  ]);
}
function n4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
    })
  ]);
}
function h4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    })
  ]);
}
function G4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
    })
  ]);
}
function U4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    })
  ]);
}
function l4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    })
  ]);
}
function H4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    })
  ]);
}
function d4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function u4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6"
    })
  ]);
}
function v4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
    })
  ]);
}
function k4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function f4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    })
  ]);
}
function J4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
    })
  ]);
}
function T4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
    })
  ]);
}
function O4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
    })
  ]);
}
function z4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function j4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18 12H6"
    })
  ]);
}
function N4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 12h14"
    })
  ]);
}
function S4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    })
  ]);
}
function R4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
    })
  ]);
}
function L4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
    })
  ]);
}
function m4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
    })
  ]);
}
function K4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
    })
  ]);
}
function y4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    })
  ]);
}
function p4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
    })
  ]);
}
function x4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function W4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 5.25v13.5m-7.5-13.5v13.5"
    })
  ]);
}
function b4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    })
  ]);
}
function V4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
function Z4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
    })
  ]);
}
function q4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
    })
  ]);
}
function X4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
    })
  ]);
}
function _4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    })
  ]);
}
function $4(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    })
  ]);
}
function A5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
    })
  ]);
}
function B5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z"
    })
  ]);
}
function g5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
    })
  ]);
}
function Q5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function C5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6v12m6-6H6"
    })
  ]);
}
function E5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
function I5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
    })
  ]);
}
function w5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
    })
  ]);
}
function D5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
    })
  ]);
}
function o5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
    })
  ]);
}
function e5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
    })
  ]);
}
function Y5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
    })
  ]);
}
function M5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
    })
  ]);
}
function P5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
    })
  ]);
}
function t5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005ZM9.255 10.5v.008h-.008V10.5h.008Zm3.249 1.88-.007.004-.003-.007.006-.003.004.006Zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007.006.004Zm1.37 5.129-.007-.004.004-.006.006.003-.004.007Zm.504-1.877h-.008v-.007h.008v.007ZM9.255 18v.008h-.008V18h.008Zm-3.246-1.87-.007.004L6 16.127l.006-.003.004.006Zm1.366-5.119-.004-.006.006-.004.004.007-.006.003ZM7.38 17.5l-.003.006-.007-.003.004-.007.006.004Zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008v.007ZM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
    })
  ]);
}
function c5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    })
  ]);
}
function i5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
    })
  ]);
}
function a5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
    })
  ]);
}
function F5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
    })
  ]);
}
function r5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    })
  ]);
}
function s5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function n5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
    })
  ]);
}
function h5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664"
    })
  ]);
}
function G5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
    })
  ]);
}
function U5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
    })
  ]);
}
function l5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
    })
  ]);
}
function H5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    })
  ]);
}
function d5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
    })
  ]);
}
function u5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    })
  ]);
}
function v5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function k5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m3 3 8.735 8.735m0 0a.374.374 0 1 1 .53.53m-.53-.53.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 0 1 0 5.304m2.121-7.425a6.75 6.75 0 0 1 0 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 0 1-1.06-2.122m-1.061 4.243a6.75 6.75 0 0 1-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12Z"
    })
  ]);
}
function f5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    })
  ]);
}
function J5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    })
  ]);
}
function T5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
    })
  ]);
}
function O5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
    })
  ]);
}
function z5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
    })
  ]);
}
function j5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
    })
  ]);
}
function N5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
    })
  ]);
}
function S5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
    })
  ]);
}
function R5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    })
  ]);
}
function L5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
    })
  ]);
}
function m5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
    })
  ]);
}
function K5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    })
  ]);
}
function y5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
    })
  ]);
}
function p5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
    })
  ]);
}
function x5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 6h.008v.008H6V6Z"
    })
  ]);
}
function W5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
    })
  ]);
}
function b5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    })
  ]);
}
function V5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
    })
  ]);
}
function Z5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    })
  ]);
}
function q5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
    })
  ]);
}
function X5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
function _5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    })
  ]);
}
function $5(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
    })
  ]);
}
function A1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
    })
  ]);
}
function B1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    })
  ]);
}
function g1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    })
  ]);
}
function Q1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09"
    })
  ]);
}
function C1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
    })
  ]);
}
function E1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
    })
  ]);
}
function I1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
    })
  ]);
}
function w1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
function D1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
    })
  ]);
}
function o1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
    })
  ]);
}
function e1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
    })
  ]);
}
function Y1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
    })
  ]);
}
function M1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
    }),
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.867 19.125h.008v.008h-.008v-.008Z"
    })
  ]);
}
function P1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function t1(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const c1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCapIcon: yP,
  AdjustmentsHorizontalIcon: pP,
  AdjustmentsVerticalIcon: xP,
  ArchiveBoxArrowDownIcon: WP,
  ArchiveBoxIcon: VP,
  ArchiveBoxXMarkIcon: bP,
  ArrowDownCircleIcon: ZP,
  ArrowDownIcon: Bt,
  ArrowDownLeftIcon: qP,
  ArrowDownOnSquareIcon: _P,
  ArrowDownOnSquareStackIcon: XP,
  ArrowDownRightIcon: $P,
  ArrowDownTrayIcon: At,
  ArrowLeftCircleIcon: gt,
  ArrowLeftEndOnRectangleIcon: Qt,
  ArrowLeftIcon: It,
  ArrowLeftOnRectangleIcon: Ct,
  ArrowLeftStartOnRectangleIcon: Et,
  ArrowLongDownIcon: wt,
  ArrowLongLeftIcon: Dt,
  ArrowLongRightIcon: ot,
  ArrowLongUpIcon: et,
  ArrowPathIcon: Mt,
  ArrowPathRoundedSquareIcon: Yt,
  ArrowRightCircleIcon: Pt,
  ArrowRightEndOnRectangleIcon: tt,
  ArrowRightIcon: at,
  ArrowRightOnRectangleIcon: ct,
  ArrowRightStartOnRectangleIcon: it,
  ArrowSmallDownIcon: Ft,
  ArrowSmallLeftIcon: rt,
  ArrowSmallRightIcon: st,
  ArrowSmallUpIcon: nt,
  ArrowTopRightOnSquareIcon: ht,
  ArrowTrendingDownIcon: Gt,
  ArrowTrendingUpIcon: Ut,
  ArrowUpCircleIcon: lt,
  ArrowUpIcon: ft,
  ArrowUpLeftIcon: Ht,
  ArrowUpOnSquareIcon: ut,
  ArrowUpOnSquareStackIcon: dt,
  ArrowUpRightIcon: vt,
  ArrowUpTrayIcon: kt,
  ArrowUturnDownIcon: Jt,
  ArrowUturnLeftIcon: Tt,
  ArrowUturnRightIcon: Ot,
  ArrowUturnUpIcon: zt,
  ArrowsPointingInIcon: jt,
  ArrowsPointingOutIcon: Nt,
  ArrowsRightLeftIcon: St,
  ArrowsUpDownIcon: Rt,
  AtSymbolIcon: Lt,
  BackspaceIcon: mt,
  BackwardIcon: Kt,
  BanknotesIcon: yt,
  Bars2Icon: pt,
  Bars3BottomLeftIcon: xt,
  Bars3BottomRightIcon: Wt,
  Bars3CenterLeftIcon: bt,
  Bars3Icon: Vt,
  Bars4Icon: Zt,
  BarsArrowDownIcon: qt,
  BarsArrowUpIcon: Xt,
  Battery0Icon: _t,
  Battery100Icon: $t,
  Battery50Icon: Ac,
  BeakerIcon: Bc,
  BellAlertIcon: gc,
  BellIcon: Ec,
  BellSlashIcon: Qc,
  BellSnoozeIcon: Cc,
  BoltIcon: wc,
  BoltSlashIcon: Ic,
  BookOpenIcon: Dc,
  BookmarkIcon: Yc,
  BookmarkSlashIcon: oc,
  BookmarkSquareIcon: ec,
  BriefcaseIcon: Mc,
  BugAntIcon: Pc,
  BuildingLibraryIcon: tc,
  BuildingOffice2Icon: cc,
  BuildingOfficeIcon: ic,
  BuildingStorefrontIcon: ac,
  CakeIcon: Fc,
  CalculatorIcon: rc,
  CalendarDaysIcon: sc,
  CalendarIcon: nc,
  CameraIcon: hc,
  ChartBarIcon: Uc,
  ChartBarSquareIcon: Gc,
  ChartPieIcon: lc,
  ChatBubbleBottomCenterIcon: dc,
  ChatBubbleBottomCenterTextIcon: Hc,
  ChatBubbleLeftEllipsisIcon: uc,
  ChatBubbleLeftIcon: kc,
  ChatBubbleLeftRightIcon: vc,
  ChatBubbleOvalLeftEllipsisIcon: fc,
  ChatBubbleOvalLeftIcon: Jc,
  CheckBadgeIcon: Tc,
  CheckCircleIcon: Oc,
  CheckIcon: zc,
  ChevronDoubleDownIcon: jc,
  ChevronDoubleLeftIcon: Nc,
  ChevronDoubleRightIcon: Sc,
  ChevronDoubleUpIcon: Rc,
  ChevronDownIcon: Lc,
  ChevronLeftIcon: mc,
  ChevronRightIcon: Kc,
  ChevronUpDownIcon: yc,
  ChevronUpIcon: pc,
  CircleStackIcon: xc,
  ClipboardDocumentCheckIcon: Wc,
  ClipboardDocumentIcon: Vc,
  ClipboardDocumentListIcon: bc,
  ClipboardIcon: Zc,
  ClockIcon: qc,
  CloudArrowDownIcon: Xc,
  CloudArrowUpIcon: _c,
  CloudIcon: $c,
  CodeBracketIcon: Bi,
  CodeBracketSquareIcon: Ai,
  Cog6ToothIcon: gi,
  Cog8ToothIcon: Qi,
  CogIcon: Ci,
  CommandLineIcon: Ei,
  ComputerDesktopIcon: Ii,
  CpuChipIcon: wi,
  CreditCardIcon: Di,
  CubeIcon: ei,
  CubeTransparentIcon: oi,
  CurrencyBangladeshiIcon: Yi,
  CurrencyDollarIcon: Mi,
  CurrencyEuroIcon: Pi,
  CurrencyPoundIcon: ti,
  CurrencyRupeeIcon: ci,
  CurrencyYenIcon: ii,
  CursorArrowRaysIcon: ai,
  CursorArrowRippleIcon: Fi,
  DevicePhoneMobileIcon: ri,
  DeviceTabletIcon: si,
  DocumentArrowDownIcon: ni,
  DocumentArrowUpIcon: hi,
  DocumentChartBarIcon: Gi,
  DocumentCheckIcon: Ui,
  DocumentDuplicateIcon: li,
  DocumentIcon: ki,
  DocumentMagnifyingGlassIcon: Hi,
  DocumentMinusIcon: di,
  DocumentPlusIcon: ui,
  DocumentTextIcon: vi,
  EllipsisHorizontalCircleIcon: fi,
  EllipsisHorizontalIcon: Ji,
  EllipsisVerticalIcon: Ti,
  EnvelopeIcon: zi,
  EnvelopeOpenIcon: Oi,
  ExclamationCircleIcon: ji,
  ExclamationTriangleIcon: Ni,
  EyeDropperIcon: Si,
  EyeIcon: Li,
  EyeSlashIcon: Ri,
  FaceFrownIcon: mi,
  FaceSmileIcon: Ki,
  FilmIcon: yi,
  FingerPrintIcon: pi,
  FireIcon: xi,
  FlagIcon: Wi,
  FolderArrowDownIcon: bi,
  FolderIcon: Xi,
  FolderMinusIcon: Vi,
  FolderOpenIcon: Zi,
  FolderPlusIcon: qi,
  ForwardIcon: _i,
  FunnelIcon: $i,
  GifIcon: A4,
  GiftIcon: g4,
  GiftTopIcon: B4,
  GlobeAltIcon: Q4,
  GlobeAmericasIcon: C4,
  GlobeAsiaAustraliaIcon: E4,
  GlobeEuropeAfricaIcon: I4,
  HandRaisedIcon: w4,
  HandThumbDownIcon: D4,
  HandThumbUpIcon: o4,
  HashtagIcon: e4,
  HeartIcon: Y4,
  HomeIcon: P4,
  HomeModernIcon: M4,
  IdentificationIcon: t4,
  InboxArrowDownIcon: c4,
  InboxIcon: a4,
  InboxStackIcon: i4,
  InformationCircleIcon: F4,
  KeyIcon: r4,
  LanguageIcon: s4,
  LifebuoyIcon: n4,
  LightBulbIcon: h4,
  LinkIcon: G4,
  ListBulletIcon: U4,
  LockClosedIcon: l4,
  LockOpenIcon: H4,
  MagnifyingGlassCircleIcon: d4,
  MagnifyingGlassIcon: k4,
  MagnifyingGlassMinusIcon: u4,
  MagnifyingGlassPlusIcon: v4,
  MapIcon: J4,
  MapPinIcon: f4,
  MegaphoneIcon: T4,
  MicrophoneIcon: O4,
  MinusCircleIcon: z4,
  MinusIcon: N4,
  MinusSmallIcon: j4,
  MoonIcon: S4,
  MusicalNoteIcon: R4,
  NewspaperIcon: L4,
  NoSymbolIcon: m4,
  PaintBrushIcon: K4,
  PaperAirplaneIcon: y4,
  PaperClipIcon: p4,
  PauseCircleIcon: x4,
  PauseIcon: W4,
  PencilIcon: V4,
  PencilSquareIcon: b4,
  PhoneArrowDownLeftIcon: Z4,
  PhoneArrowUpRightIcon: q4,
  PhoneIcon: _4,
  PhoneXMarkIcon: X4,
  PhotoIcon: $4,
  PlayCircleIcon: A5,
  PlayIcon: g5,
  PlayPauseIcon: B5,
  PlusCircleIcon: Q5,
  PlusIcon: E5,
  PlusSmallIcon: C5,
  PowerIcon: I5,
  PresentationChartBarIcon: w5,
  PresentationChartLineIcon: D5,
  PrinterIcon: o5,
  PuzzlePieceIcon: e5,
  QrCodeIcon: Y5,
  QuestionMarkCircleIcon: M5,
  QueueListIcon: P5,
  RadioIcon: t5,
  ReceiptPercentIcon: c5,
  ReceiptRefundIcon: i5,
  RectangleGroupIcon: a5,
  RectangleStackIcon: F5,
  RocketLaunchIcon: r5,
  RssIcon: s5,
  ScaleIcon: n5,
  ScissorsIcon: h5,
  ServerIcon: U5,
  ServerStackIcon: G5,
  ShareIcon: l5,
  ShieldCheckIcon: H5,
  ShieldExclamationIcon: d5,
  ShoppingBagIcon: u5,
  ShoppingCartIcon: v5,
  SignalIcon: f5,
  SignalSlashIcon: k5,
  SparklesIcon: J5,
  SpeakerWaveIcon: T5,
  SpeakerXMarkIcon: O5,
  Square2StackIcon: z5,
  Square3Stack3DIcon: j5,
  Squares2X2Icon: N5,
  SquaresPlusIcon: S5,
  StarIcon: R5,
  StopCircleIcon: L5,
  StopIcon: m5,
  SunIcon: K5,
  SwatchIcon: y5,
  TableCellsIcon: p5,
  TagIcon: x5,
  TicketIcon: W5,
  TrashIcon: b5,
  TrophyIcon: V5,
  TruckIcon: Z5,
  TvIcon: q5,
  UserCircleIcon: X5,
  UserGroupIcon: _5,
  UserIcon: B1,
  UserMinusIcon: $5,
  UserPlusIcon: A1,
  UsersIcon: g1,
  VariableIcon: Q1,
  VideoCameraIcon: E1,
  VideoCameraSlashIcon: C1,
  ViewColumnsIcon: I1,
  ViewfinderCircleIcon: w1,
  WalletIcon: D1,
  WifiIcon: o1,
  WindowIcon: e1,
  WrenchIcon: M1,
  WrenchScrewdriverIcon: Y1,
  XCircleIcon: P1,
  XMarkIcon: t1
}, Symbol.toStringTag, { value: "Module" })), i1 = `.icon[data-v-eb2719e6]{height:1.5rem;width:1.5rem;flex-shrink:0}
`, GA = (A, B) => {
  const g = A.__vccOpts || A;
  for (const [Q, C] of B)
    g[Q] = C;
  return g;
}, a1 = {
  __name: "PIcon",
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(A) {
    const B = A, g = k(() => {
      switch (B.name) {
        case "MinimizeScreen":
        case "MaximizeScreen":
          return /* @__PURE__ */ pe(() => KP(/* @__PURE__ */ Object.assign({}), `../../icons/${B.name}.svg`));
        default:
          return c1[`${B.name}Icon`];
      }
    });
    return (Q, C) => (D(), MA(xQ(g.value), { class: "icon" }));
  }
}, DB = /* @__PURE__ */ GA(a1, [["styles", [i1]], ["__scopeId", "data-v-eb2719e6"]]), F1 = `.button[data-v-a2664583]{display:flex;height:2.5rem;align-items:center;justify-content:center;gap:.5rem;border-radius:.5rem;padding-left:.75rem;padding-right:.75rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.button[data-v-a2664583]:disabled{background-color:var(--disabled);color:var(--disabled-text)}.button[data-v-a2664583]:disabled:hover{background-color:var(--disabled);color:var(--disabled-text)}.primary[data-v-a2664583]{background-color:var(--primary);--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.primary[data-v-a2664583] .icon path{stroke:#fff}.primary[data-v-a2664583]:hover{background-color:var(--primary-hover)}.primary[data-v-a2664583]:focus{background-color:var(--primary-pressed)}.secondary[data-v-a2664583]{border-width:1px;border-style:solid;border-color:var(--border-primary);background-color:var(--secondary);--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity))}.secondary[data-v-a2664583]:hover{border-color:var(--border-primary-hover);background-color:var(--secondary-hover)}.secondary[data-v-a2664583]:focus{background-color:var(--secondary-pressed)}.secondary[data-v-a2664583]:disabled:hover{border-color:var(--border-primary)}.tertiary[data-v-a2664583]{background-color:var(--tertiary);color:var(--primary)}.tertiary[data-v-a2664583] .icon path{stroke:#2563eb}.tertiary[data-v-a2664583]:hover{background-color:var(--tertiary-hover)}.tertiary[data-v-a2664583]:focus{background-color:var(--tertiary-pressed)}.default.has-icon[data-v-a2664583]{padding:.625rem}.default .icon[data-v-a2664583]{height:1.25rem;width:1.25rem}.small[data-v-a2664583]{height:2rem;padding-left:.75rem;padding-right:.75rem}.medium[data-v-a2664583]{height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:1.5rem}.medium.has-icon[data-v-a2664583]{padding:.75rem}.large[data-v-a2664583]{height:3.5rem;padding-left:1.75rem;padding-right:1.75rem;font-size:1rem;line-height:1.5rem}.large.has-icon[data-v-a2664583]{padding:1.25rem}
`, r1 = {
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
      type: String,
      default: ""
    }
  },
  setup(A) {
    const B = BY();
    return (g, Q) => (D(), o("button", {
      class: iA(["button", [A.variant, A.size, y(B).default ? "" : "has-icon"]])
    }, [
      A.icon ? (D(), MA(DB, {
        key: 0,
        name: A.icon
      }, null, 8, ["name"])) : BA("", !0),
      kA(g.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, AB = /* @__PURE__ */ GA(r1, [["styles", [F1]], ["__scopeId", "data-v-a2664583"]]), s1 = `.image-wrapper[data-v-c21040ae]{display:block;height:100%;width:100%}.image.rounded-4[data-v-c21040ae],.skeleton.rounded-4[data-v-c21040ae]{border-radius:.25rem}.image.rounded-8[data-v-c21040ae],.skeleton.rounded-8[data-v-c21040ae]{border-radius:.5rem}.image.rounded-16[data-v-c21040ae],.skeleton.rounded-16[data-v-c21040ae]{border-radius:1rem}.image.rounded-100[data-v-c21040ae],.skeleton.rounded-100[data-v-c21040ae]{border-radius:9999px}.image-wrapper .skeleton[data-v-c21040ae]{height:100%;width:100%}@keyframes pulse-c21040ae{50%{opacity:.5}}.image-wrapper .skeleton[data-v-c21040ae]{animation:pulse-c21040ae 2s cubic-bezier(.4,0,.6,1) infinite;--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}
`, n1 = ["srcset"], h1 = ["srcset"], G1 = ["src", "alt", "height", "width"], U1 = {
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
  setup(A) {
    const B = A, g = Z(!1);
    function Q() {
      g.value = !0;
    }
    const C = k(() => B.image);
    return aA(C, () => {
      g.value = !1;
    }), (E, I) => (D(), o("picture", {
      class: "image-wrapper",
      style: Bg({ width: `${A.width}px`, height: `${A.height}px` })
    }, [
      w("source", {
        media: "(max-width: 640px)",
        srcset: A.mobile
      }, null, 8, n1),
      w("source", {
        media: "(max-width: 1024px)",
        srcset: A.tablet
      }, null, 8, h1),
      A.image && !g.value ? (D(), o("img", {
        key: 0,
        loading: "lazy",
        class: iA(["image", A.rounded ? `rounded-${A.rounded}` : ""]),
        src: A.image,
        alt: A.alt,
        height: A.height,
        width: A.width,
        onError: I[0] || (I[0] = (e) => Q())
      }, null, 42, G1)) : (D(), o("div", {
        key: 1,
        class: iA(["skeleton", A.rounded ? `rounded-${A.rounded}` : ""])
      }, null, 2))
    ], 4));
  }
}, ko = /* @__PURE__ */ GA(U1, [["styles", [s1]], ["__scopeId", "data-v-c21040ae"]]), l1 = `@keyframes minimizedAnimation-2a77c646{0%{max-width:100%;height:100%}50%{height:7.5rem;max-width:100%}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-2a77c646{0%{max-width:37.5rem;height:7.5rem!important;margin:79% auto 0}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}.modal[data-v-2a77c646]{width:100%;max-width:48rem;overflow:hidden;border-radius:1rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.modal[data-v-2a77c646]::backdrop{background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity: .8}.modal.blurred[data-v-2a77c646]::backdrop{background-color:transparent;--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.modal.minimized[data-v-2a77c646]{margin-bottom:1.25rem;width:100%;border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));animation:1.3s 0s forwards minimizedAnimation-2a77c646}.modal.minimized .inner[data-v-2a77c646]{overflow-y:hidden}.modal.minimized .inner .header[data-v-2a77c646]{padding:1rem!important}.modal.minimized .inner .header .title[data-v-2a77c646-s]{margin-top:1rem;font-size:1rem!important;line-height:1.5rem!important}.modal.maximized[data-v-2a77c646]{animation:1.3s 0s forwards maximizedAnimation-2a77c646}.modal.fullscreen .inner .header[data-v-2a77c646]{justify-content:flex-start!important;border-top-left-radius:1rem;border-top-right-radius:1rem;padding:1.5rem 1rem}.modal.fullscreen .inner .content[data-v-2a77c646]{padding:0;padding-top:1rem;padding-bottom:.5rem}@media (min-width: 640px){.modal.fullscreen .inner .content[data-v-2a77c646]{padding-top:1.5rem}}.modal.fullscreen .inner .footer[data-v-2a77c646]{margin-top:auto;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.modal.fullscreen .inner .footer[data-v-2a77c646]{margin-left:5.75rem;margin-right:5.75rem;margin-bottom:1.25rem;border-radius:1rem}}.modal.fullscreen[data-v-2a77c646]:not(.minimized){margin-top:3.5rem;height:calc(100vh - 3.5rem);max-width:100%;overflow:visible;border-bottom-right-radius:0;border-bottom-left-radius:0}@media (min-width: 640px){.modal.fullscreen:not(.minimized) .header[data-v-2a77c646],.modal.fullscreen:not(.minimized) .content[data-v-2a77c646]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen[data-v-2a77c646]:not(.minimized):modal{max-height:100vh}.modal .actions[data-v-2a77c646]{position:absolute;top:-3.5rem;display:flex;height:3.5rem;width:100%;align-items:center;justify-content:flex-end;padding-left:.5625rem;padding-right:.5625rem}.modal .actions .minimize[data-v-2a77c646],.modal .actions .close[data-v-2a77c646]{padding-left:.9375rem;padding-right:.9375rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.modal .actions[data-v-2a77c646] .icon path{stroke:#fff}.modal .inner[data-v-2a77c646]{display:flex;height:100%;flex-direction:column;overflow-y:auto}.modal .inner .header[data-v-2a77c646],.modal .inner .content[data-v-2a77c646]{padding:1.25rem}.modal .inner .header[data-v-2a77c646]{display:flex;align-items:center;justify-content:space-between;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 1px 0 1px 0 #D1D5DB;--tw-shadow-colored: 1px 0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.modal .inner .header>.close[data-v-2a77c646]:focus-visible{background-color:var(--secondary-hover)}.modal .inner .header .title[data-v-2a77c646],.modal .inner .header .title[data-v-2a77c646-s]{font-size:1.875rem;line-height:2.25rem;font-weight:700}.modal .inner .header .minimized-actions[data-v-2a77c646]{margin-left:auto;display:flex;flex-direction:column;gap:.5rem}.modal .inner .footer[data-v-2a77c646]{display:flex;justify-content:flex-end;gap:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem}@media (min-width: 640px){.modal .inner .footer[data-v-2a77c646]{padding:1.25rem}}
`;
function sw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        close: (g) => {
          const { normalize: Q } = g;
          return Q(["Close"]);
        },
        minimize: (g) => {
          const { normalize: Q } = g;
          return Q(["Minimize"]);
        },
        open: (g) => {
          const { normalize: Q } = g;
          return Q(["Open"]);
        }
      },
      nl: {
        close: (g) => {
          const { normalize: Q } = g;
          return Q(["Sluiten"]);
        },
        minimize: (g) => {
          const { normalize: Q } = g;
          return Q(["Minimaliseren"]);
        },
        open: (g) => {
          const { normalize: Q } = g;
          return Q(["Openen"]);
        }
      },
      de: {
        close: (g) => {
          const { normalize: Q } = g;
          return Q(["Schließen"]);
        },
        minimize: (g) => {
          const { normalize: Q } = g;
          return Q(["Minimalisieren"]);
        },
        open: (g) => {
          const { normalize: Q } = g;
          return Q(["Öffnen"]);
        }
      }
    }
  });
}
const H1 = {
  key: 0,
  class: "actions"
}, d1 = { class: "inner" }, u1 = {
  key: 0,
  class: "header"
}, v1 = { class: "title" }, k1 = {
  key: 0,
  class: "minimized-actions"
}, f1 = {
  key: 1,
  class: "content"
}, J1 = {
  key: 2,
  class: "footer"
}, fo = {
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
    }
  },
  emits: ["minimize", "update:modelValue", "click:primary", "click:secondary"],
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = Z(null), I = Z(!1), e = Z(!1);
    function Y(P) {
      Q("update:modelValue", P), P ? E.value.showModal() : E.value.close();
    }
    function M(P) {
      Q("minimize", P), I.value = P, e.value = !P;
    }
    return aA(
      () => g.modelValue,
      (P) => {
        Y(P);
      }
    ), LA(() => {
      Y(g.modelValue);
    }), (P, t) => (D(), o("dialog", {
      ref_key: "modal",
      ref: E,
      class: iA(["modal", {
        fullscreen: A.fullscreen,
        minimized: I.value,
        maximized: e.value,
        blurred: A.blur
      }])
    }, [
      A.fullscreen && !I.value ? (D(), o("div", H1, [
        A.showMinimize ? (D(), MA(AB, {
          key: 0,
          variant: "text",
          icon: "MinimizeScreen",
          class: "minimize",
          onClick: t[0] || (t[0] = (i) => M(!0))
        }, {
          default: oA(() => [
            dA(V(y(C)("minimize")), 1)
          ]),
          _: 1
        })) : BA("", !0),
        q(AB, {
          variant: "text",
          icon: "XMark",
          class: "close",
          onClick: t[1] || (t[1] = (i) => Y(!1))
        }, {
          default: oA(() => [
            dA(V(y(C)("close")), 1)
          ]),
          _: 1
        })
      ])) : BA("", !0),
      w("div", d1, [
        A.hideHeader ? BA("", !0) : (D(), o("header", u1, [
          kA(P.$slots, "header", zg(iC({ minimize: I.value })), () => [
            w("h2", v1, V(A.title), 1),
            A.fullscreen ? BA("", !0) : (D(), MA(AB, {
              key: 0,
              icon: "XMark",
              variant: "text",
              class: "close",
              onClick: t[2] || (t[2] = (i) => Y(!1))
            }))
          ]),
          I.value && A.fullscreen ? (D(), o("div", k1, [
            q(AB, {
              icon: "MaximizeScreen",
              onClick: t[3] || (t[3] = (i) => M(!1))
            }, {
              default: oA(() => [
                dA(V(y(C)("open")), 1)
              ]),
              _: 1
            }),
            q(AB, {
              icon: "XMark",
              variant: "secondary",
              onClick: t[4] || (t[4] = (i) => Y(!1))
            }, {
              default: oA(() => [
                dA(V(y(C)("close")), 1)
              ]),
              _: 1
            })
          ])) : BA("", !0)
        ])),
        I.value ? BA("", !0) : (D(), o("div", f1, [
          kA(P.$slots, "default")
        ])),
        !A.fullscreen && !A.hideFooter || !I.value && A.fullscreen && P.$slots.footer ? (D(), o("footer", J1, [
          kA(P.$slots, "footer", {}, () => [
            A.fullscreen ? BA("", !0) : (D(), o(sA, { key: 0 }, [
              q(AB, {
                variant: "secondary",
                onClick: t[5] || (t[5] = (i) => Q("click:secondary"))
              }, {
                default: oA(() => [
                  dA(V(A.secondaryButtonText), 1)
                ]),
                _: 1
              }),
              q(AB, {
                onClick: t[6] || (t[6] = (i) => Q("click:primary"))
              }, {
                default: oA(() => [
                  dA(V(A.primaryButtonText), 1)
                ]),
                _: 1
              })
            ], 64))
          ])
        ])) : BA("", !0)
      ])
    ], 2));
  }
};
typeof sw == "function" && sw(fo);
const Jo = /* @__PURE__ */ GA(fo, [["styles", [l1]], ["__scopeId", "data-v-2a77c646"]]), T1 = `.accordion-item[data-v-b09674ae]{width:100%;overflow:hidden;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.accordion-item[data-v-b09674ae]{border-radius:1rem}}.accordion-item .header[data-v-b09674ae]{display:flex;width:100%;align-items:center;border-style:none;background-color:inherit;padding:1rem}@media (min-width: 640px){.accordion-item .header[data-v-b09674ae]{min-height:4.5rem;padding-left:1.5rem;padding-right:1.5rem}}.header .state-indicator[data-v-b09674ae]{margin-left:auto}.state-indicator .icon[data-v-b09674ae]{color:var(--primary-light)}.header .title[data-v-b09674ae],.header .title[data-v-b09674ae-s]{text-align:left;font-weight:500}.accordion-item .content[data-v-b09674ae]{padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;padding-top:0}@media (min-width: 640px){.accordion-item .content[data-v-b09674ae]{padding-left:1.5rem;padding-right:1.5rem}}.state-indicator[data-v-b09674ae]{padding-left:.5rem}.state-indicator .icon[data-v-b09674ae]{transform:rotate(0);transition:transform .3s linear}.state-indicator.open .icon[data-v-b09674ae]{transform:rotate(180deg);transition:transform .3s linear}.grow-enter-active[data-v-b09674ae],.grow-leave-active[data-v-b09674ae]{transition-property:all;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.fade-enter-active[data-v-b09674ae],.fade-leave-active[data-v-b09674ae]{transition-property:all;transition-duration:.1s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.grow-enter-from[data-v-b09674ae],.grow-leave-to[data-v-b09674ae]{height:0px!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-b09674ae],.fade-leave-to[data-v-b09674ae]{height:0px!important;opacity:0}
`, O1 = ["id", "aria-controls", "disabled"], z1 = { class: "title" }, j1 = ["id", "aria-hidden"], N1 = {
  key: 0,
  class: "content-inner"
}, S1 = {
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
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(A, { emit: B }) {
    const g = B;
    return (Q, C) => (D(), o("div", {
      class: iA(["accordion-item", { disabled: A.disabled }])
    }, [
      w("button", {
        id: "accordion-header-" + A.ariaTitle,
        class: "header",
        "aria-controls": "accordion-content-" + A.ariaTitle,
        disabled: A.disabled,
        onClick: C[0] || (C[0] = (E) => g("update:modelValue", !A.modelValue))
      }, [
        kA(Q.$slots, "header", {}, () => [
          w("h3", z1, V(A.title), 1)
        ]),
        A.hideToggle ? BA("", !0) : (D(), o("div", {
          key: 0,
          class: iA(["state-indicator", { open: A.modelValue }])
        }, [
          q(DB, { name: "ChevronDown" })
        ], 2))
      ], 8, O1),
      q(qQ, { name: "grow" }, {
        default: oA(() => [
          WQ(w("div", {
            id: "accordion-content-" + A.ariaTitle,
            "aria-hidden": !A.modelValue,
            class: "content"
          }, [
            q(qQ, { name: "fade" }, {
              default: oA(() => [
                A.modelValue ? (D(), o("span", N1, [
                  kA(Q.$slots, "default")
                ])) : BA("", !0)
              ]),
              _: 3
            })
          ], 8, j1), [
            [LY, A.modelValue]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}, qE = /* @__PURE__ */ GA(S1, [["styles", [T1]], ["__scopeId", "data-v-b09674ae"]]), R1 = `.accordion[data-v-5487ce4f]{display:flex;flex-direction:column;gap:.125rem}@media (min-width: 640px){.accordion[data-v-5487ce4f]{gap:.5rem}}
`, L1 = { class: "accordion" }, m1 = {
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
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(A, { emit: B }) {
    const g = A, Q = B, C = k(() => [...g.modelValue]);
    function E(I, e) {
      g.multiple ? (C.value[e] = I, Q("update:modelValue", C)) : (C.value.forEach((Y, M) => {
        M !== e && (C.value[M] = !1);
      }), Q("update:modelValue", C));
    }
    return (I, e) => (D(), o("div", L1, [
      (D(!0), o(sA, null, lg(A.items, (Y, M) => kA(I.$slots, "default", zg(sB({ key: M }, { item: Y, index: M, open: C.value[M] })), () => [
        q(qE, {
          modelValue: C.value[M],
          "onUpdate:modelValue": [(P) => C.value[M] = P, (P) => E(P, M)],
          title: Y[A.title],
          disabled: A.disabled || Y.disabled,
          "hide-toggle": A.disabled
        }, {
          default: oA(() => [
            kA(I.$slots, "content", zg(iC(Y)), void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "title", "disabled", "hide-toggle"])
      ], !0)), 128))
    ]));
  }
}, K1 = /* @__PURE__ */ GA(m1, [["styles", [R1]], ["__scopeId", "data-v-5487ce4f"]]);
function nw(A, B) {
  var g = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var Q = Object.getOwnPropertySymbols(A);
    B && (Q = Q.filter(function(C) {
      return Object.getOwnPropertyDescriptor(A, C).enumerable;
    })), g.push.apply(g, Q);
  }
  return g;
}
function VB(A) {
  for (var B = 1; B < arguments.length; B++) {
    var g = arguments[B] != null ? arguments[B] : {};
    B % 2 ? nw(Object(g), !0).forEach(function(Q) {
      y1(A, Q, g[Q]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(g)) : nw(Object(g)).forEach(function(Q) {
      Object.defineProperty(A, Q, Object.getOwnPropertyDescriptor(g, Q));
    });
  }
  return A;
}
function y1(A, B, g) {
  return B in A ? Object.defineProperty(A, B, {
    value: g,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[B] = g, A;
}
function hw(A) {
  let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(A).reduce((g, Q) => (B.includes(Q) || (g[Q] = y(A[Q])), g), {});
}
function QC(A) {
  return typeof A == "function";
}
function p1(A) {
  return Fg(A) || sg(A);
}
function To(A, B, g) {
  let Q = A;
  const C = B.split(".");
  for (let E = 0; E < C.length; E++) {
    if (!Q[C[E]])
      return g;
    Q = Q[C[E]];
  }
  return Q;
}
function LC(A, B, g) {
  return k(() => A.some((Q) => To(B, Q, {
    [g]: !1
  })[g]));
}
function Gw(A, B, g) {
  return k(() => A.reduce((Q, C) => {
    const E = To(B, C, {
      [g]: !1
    })[g] || [];
    return Q.concat(E);
  }, []));
}
function Oo(A, B, g, Q) {
  return A.call(Q, y(B), y(g), Q);
}
function zo(A) {
  return A.$valid !== void 0 ? !A.$valid : !A;
}
function x1(A, B, g, Q, C, E, I) {
  let {
    $lazy: e,
    $rewardEarly: Y
  } = C, M = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], P = arguments.length > 8 ? arguments[8] : void 0, t = arguments.length > 9 ? arguments[9] : void 0, i = arguments.length > 10 ? arguments[10] : void 0;
  const F = Z(!!Q.value), c = Z(0);
  g.value = !1;
  const a = aA([B, Q].concat(M, i), () => {
    if (e && !Q.value || Y && !t.value && !g.value)
      return;
    let r;
    try {
      r = Oo(A, B, P, I);
    } catch (n) {
      r = Promise.reject(n);
    }
    c.value++, g.value = !!c.value, F.value = !1, Promise.resolve(r).then((n) => {
      c.value--, g.value = !!c.value, E.value = n, F.value = zo(n);
    }).catch((n) => {
      c.value--, g.value = !!c.value, E.value = n, F.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof B == "object"
  });
  return {
    $invalid: F,
    $unwatch: a
  };
}
function W1(A, B, g, Q, C, E, I, e) {
  let {
    $lazy: Y,
    $rewardEarly: M
  } = Q;
  const P = () => ({}), t = k(() => {
    if (Y && !g.value || M && !e.value)
      return !1;
    let i = !0;
    try {
      const F = Oo(A, B, I, E);
      C.value = F, i = zo(F);
    } catch (F) {
      C.value = F;
    }
    return i;
  });
  return {
    $unwatch: P,
    $invalid: t
  };
}
function b1(A, B, g, Q, C, E, I, e, Y, M, P) {
  const t = Z(!1), i = A.$params || {}, F = Z(null);
  let c, a;
  A.$async ? {
    $invalid: c,
    $unwatch: a
  } = x1(A.$validator, B, t, g, Q, F, C, A.$watchTargets, Y, M, P) : {
    $invalid: c,
    $unwatch: a
  } = W1(A.$validator, B, g, Q, F, C, Y, M);
  const r = A.$message;
  return {
    $message: QC(r) ? k(() => r(hw({
      $pending: t,
      $invalid: c,
      $params: hw(i),
      $model: B,
      $response: F,
      $validator: E,
      $propertyPath: e,
      $property: I
    }))) : r || "",
    $params: i,
    $pending: t,
    $invalid: c,
    $response: F,
    $unwatch: a
  };
}
function V1() {
  let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const B = y(A), g = Object.keys(B), Q = {}, C = {}, E = {};
  let I = null;
  return g.forEach((e) => {
    const Y = B[e];
    switch (!0) {
      case QC(Y.$validator):
        Q[e] = Y;
        break;
      case QC(Y):
        Q[e] = {
          $validator: Y
        };
        break;
      case e === "$validationGroups":
        I = Y;
        break;
      case e.startsWith("$"):
        E[e] = Y;
        break;
      default:
        C[e] = Y;
    }
  }), {
    rules: Q,
    nestedValidators: C,
    config: E,
    validationGroups: I
  };
}
const Z1 = "__root";
function q1(A, B, g, Q, C, E, I, e, Y) {
  const M = Object.keys(A), P = Q.get(C, A), t = Z(!1), i = Z(!1), F = Z(0);
  if (P) {
    if (!P.$partial)
      return P;
    P.$unwatch(), t.value = P.$dirty.value;
  }
  const c = {
    $dirty: t,
    $path: C,
    $touch: () => {
      t.value || (t.value = !0);
    },
    $reset: () => {
      t.value && (t.value = !1);
    },
    $commit: () => {
    }
  };
  return M.length ? (M.forEach((a) => {
    c[a] = b1(A[a], B, c.$dirty, E, I, a, g, C, Y, i, F);
  }), c.$externalResults = k(() => e.value ? [].concat(e.value).map((a, r) => ({
    $propertyPath: C,
    $property: g,
    $validator: "$externalResults",
    $uid: `${C}-externalResult-${r}`,
    $message: a,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), c.$invalid = k(() => {
    const a = M.some((r) => y(c[r].$invalid));
    return i.value = a, !!c.$externalResults.value.length || a;
  }), c.$pending = k(() => M.some((a) => y(c[a].$pending))), c.$error = k(() => c.$dirty.value ? c.$pending.value || c.$invalid.value : !1), c.$silentErrors = k(() => M.filter((a) => y(c[a].$invalid)).map((a) => {
    const r = c[a];
    return EB({
      $propertyPath: C,
      $property: g,
      $validator: a,
      $uid: `${C}-${a}`,
      $message: r.$message,
      $params: r.$params,
      $response: r.$response,
      $pending: r.$pending
    });
  }).concat(c.$externalResults.value)), c.$errors = k(() => c.$dirty.value ? c.$silentErrors.value : []), c.$unwatch = () => M.forEach((a) => {
    c[a].$unwatch();
  }), c.$commit = () => {
    i.value = !0, F.value = Date.now();
  }, Q.set(C, A, c), c) : (P && Q.set(C, A, c), c);
}
function X1(A, B, g, Q, C, E, I) {
  const e = Object.keys(A);
  return e.length ? e.reduce((Y, M) => (Y[M] = iE({
    validations: A[M],
    state: B,
    key: M,
    parentKey: g,
    resultsCache: Q,
    globalConfig: C,
    instance: E,
    externalResults: I
  }), Y), {}) : {};
}
function _1(A, B, g) {
  const Q = k(() => [B, g].filter((c) => c).reduce((c, a) => c.concat(Object.values(y(a))), [])), C = k({
    get() {
      return A.$dirty.value || (Q.value.length ? Q.value.every((c) => c.$dirty) : !1);
    },
    set(c) {
      A.$dirty.value = c;
    }
  }), E = k(() => {
    const c = y(A.$silentErrors) || [], a = Q.value.filter((r) => (y(r).$silentErrors || []).length).reduce((r, n) => r.concat(...n.$silentErrors), []);
    return c.concat(a);
  }), I = k(() => {
    const c = y(A.$errors) || [], a = Q.value.filter((r) => (y(r).$errors || []).length).reduce((r, n) => r.concat(...n.$errors), []);
    return c.concat(a);
  }), e = k(() => Q.value.some((c) => c.$invalid) || y(A.$invalid) || !1), Y = k(() => Q.value.some((c) => y(c.$pending)) || y(A.$pending) || !1), M = k(() => Q.value.some((c) => c.$dirty) || Q.value.some((c) => c.$anyDirty) || C.value), P = k(() => C.value ? Y.value || e.value : !1), t = () => {
    A.$touch(), Q.value.forEach((c) => {
      c.$touch();
    });
  }, i = () => {
    A.$commit(), Q.value.forEach((c) => {
      c.$commit();
    });
  }, F = () => {
    A.$reset(), Q.value.forEach((c) => {
      c.$reset();
    });
  };
  return Q.value.length && Q.value.every((c) => c.$dirty) && t(), {
    $dirty: C,
    $errors: I,
    $invalid: e,
    $anyDirty: M,
    $error: P,
    $pending: Y,
    $touch: t,
    $reset: F,
    $silentErrors: E,
    $commit: i
  };
}
function iE(A) {
  let {
    validations: B,
    state: g,
    key: Q,
    parentKey: C,
    childResults: E,
    resultsCache: I,
    globalConfig: e = {},
    instance: Y,
    externalResults: M
  } = A;
  const P = C ? `${C}.${Q}` : Q, {
    rules: t,
    nestedValidators: i,
    config: F,
    validationGroups: c
  } = V1(B), a = VB(VB({}, e), F), r = Q ? k(() => {
    const rA = y(g);
    return rA ? y(rA[Q]) : void 0;
  }) : g, n = VB({}, y(M) || {}), G = k(() => {
    const rA = y(M);
    return Q ? rA ? y(rA[Q]) : void 0 : rA;
  }), l = q1(t, r, Q, I, P, a, Y, G, g), u = X1(i, r, P, I, a, Y, G), S = {};
  c && Object.entries(c).forEach((rA) => {
    let [HA, UA] = rA;
    S[HA] = {
      $invalid: LC(UA, u, "$invalid"),
      $error: LC(UA, u, "$error"),
      $pending: LC(UA, u, "$pending"),
      $errors: Gw(UA, u, "$errors"),
      $silentErrors: Gw(UA, u, "$silentErrors")
    };
  });
  const {
    $dirty: J,
    $errors: QA,
    $invalid: v,
    $anyDirty: L,
    $error: j,
    $pending: m,
    $touch: f,
    $reset: x,
    $silentErrors: AA,
    $commit: IA
  } = _1(l, u, E), eA = Q ? k({
    get: () => y(r),
    set: (rA) => {
      J.value = !0;
      const HA = y(g), UA = y(M);
      UA && (UA[Q] = n[Q]), jA(HA[Q]) ? HA[Q].value = rA : HA[Q] = rA;
    }
  }) : null;
  Q && a.$autoDirty && aA(r, () => {
    J.value || f();
    const rA = y(M);
    rA && (rA[Q] = n[Q]);
  }, {
    flush: "sync"
  });
  async function cA() {
    return f(), a.$rewardEarly && (IA(), await QB()), await QB(), new Promise((rA) => {
      if (!m.value)
        return rA(!v.value);
      const HA = aA(m, () => {
        rA(!v.value), HA();
      });
    });
  }
  function YA(rA) {
    return (E.value || {})[rA];
  }
  function WA() {
    jA(M) ? M.value = n : Object.keys(n).length === 0 ? Object.keys(M).forEach((rA) => {
      delete M[rA];
    }) : Object.assign(M, n);
  }
  return EB(VB(VB(VB({}, l), {}, {
    $model: eA,
    $dirty: J,
    $error: j,
    $errors: QA,
    $invalid: v,
    $anyDirty: L,
    $pending: m,
    $touch: f,
    $reset: x,
    $path: P || Z1,
    $silentErrors: AA,
    $validate: cA,
    $commit: IA
  }, E && {
    $getResultsForChild: YA,
    $clearExternalResults: WA,
    $validationGroups: S
  }), u));
}
class $1 {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(B, g, Q) {
    this.storage.set(B, {
      rules: g,
      result: Q
    });
  }
  checkRulesValidity(B, g, Q) {
    const C = Object.keys(Q), E = Object.keys(g);
    return E.length !== C.length || !E.every((e) => C.includes(e)) ? !1 : E.every((e) => g[e].$params ? Object.keys(g[e].$params).every((Y) => y(Q[e].$params[Y]) === y(g[e].$params[Y])) : !0);
  }
  get(B, g) {
    const Q = this.storage.get(B);
    if (!Q)
      return;
    const {
      rules: C,
      result: E
    } = Q, I = this.checkRulesValidity(B, g, C), e = E.$unwatch ? E.$unwatch : () => ({});
    return I ? E : {
      $dirty: E.$dirty,
      $partial: !0,
      $unwatch: e
    };
  }
}
const RQ = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, Uw = Symbol("vuelidate#injectChildResults"), lw = Symbol("vuelidate#removeChildResults");
function Aa(A) {
  let {
    $scope: B,
    instance: g
  } = A;
  const Q = {}, C = Z([]), E = k(() => C.value.reduce((P, t) => (P[t] = y(Q[t]), P), {}));
  function I(P, t) {
    let {
      $registerAs: i,
      $scope: F,
      $stopPropagation: c
    } = t;
    c || B === RQ.COLLECT_NONE || F === RQ.COLLECT_NONE || B !== RQ.COLLECT_ALL && B !== F || (Q[i] = P, C.value.push(i));
  }
  g.__vuelidateInjectInstances = [].concat(g.__vuelidateInjectInstances || [], I);
  function e(P) {
    C.value = C.value.filter((t) => t !== P), delete Q[P];
  }
  g.__vuelidateRemoveInstances = [].concat(g.__vuelidateRemoveInstances || [], e);
  const Y = ZA(Uw, []);
  jB(Uw, g.__vuelidateInjectInstances);
  const M = ZA(lw, []);
  return jB(lw, g.__vuelidateRemoveInstances), {
    childResults: E,
    sendValidationResultsToParent: Y,
    removeValidationResultsFromParent: M
  };
}
function jo(A) {
  return new Proxy(A, {
    get(B, g) {
      return typeof B[g] == "object" ? jo(B[g]) : k(() => B[g]);
    }
  });
}
let Hw = 0;
function Ba(A, B) {
  var g;
  let Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (Q = A, A = void 0, B = void 0);
  let {
    $registerAs: C,
    $scope: E = RQ.COLLECT_ALL,
    $stopPropagation: I,
    $externalResults: e,
    currentVueInstance: Y
  } = Q;
  const M = Y || ((g = RB()) === null || g === void 0 ? void 0 : g.proxy), P = M ? M.$options : {};
  C || (Hw += 1, C = `_vuelidate_${Hw}`);
  const t = Z({}), i = new $1(), {
    childResults: F,
    sendValidationResultsToParent: c,
    removeValidationResultsFromParent: a
  } = M ? Aa({
    $scope: E,
    instance: M
  }) : {
    childResults: Z({})
  };
  if (!A && P.validations) {
    const r = P.validations;
    B = Z({}), mD(() => {
      B.value = M, aA(() => QC(r) ? r.call(B.value, new jo(B.value)) : r, (n) => {
        t.value = iE({
          validations: n,
          state: B,
          childResults: F,
          resultsCache: i,
          globalConfig: Q,
          instance: M,
          externalResults: e || M.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), Q = P.validationsConfig || Q;
  } else {
    const r = jA(A) || p1(A) ? A : EB(A || {});
    aA(r, (n) => {
      t.value = iE({
        validations: n,
        state: B,
        childResults: F,
        resultsCache: i,
        globalConfig: Q,
        instance: M ?? {},
        externalResults: e
      });
    }, {
      immediate: !0
    });
  }
  return M && (c.forEach((r) => r(t, {
    $registerAs: C,
    $scope: E,
    $stopPropagation: I
  })), tC(() => a.forEach((r) => r(C)))), k(() => VB(VB({}, y(t.value)), F.value));
}
function dw(A, B) {
  var g = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var Q = Object.getOwnPropertySymbols(A);
    B && (Q = Q.filter(function(C) {
      return Object.getOwnPropertyDescriptor(A, C).enumerable;
    })), g.push.apply(g, Q);
  }
  return g;
}
function YQ(A) {
  for (var B = 1; B < arguments.length; B++) {
    var g = arguments[B] != null ? arguments[B] : {};
    B % 2 ? dw(Object(g), !0).forEach(function(Q) {
      ga(A, Q, g[Q]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(g)) : dw(Object(g)).forEach(function(Q) {
      Object.defineProperty(A, Q, Object.getOwnPropertyDescriptor(g, Q));
    });
  }
  return A;
}
function ga(A, B, g) {
  return B in A ? Object.defineProperty(A, B, {
    value: g,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[B] = g, A;
}
function CC(A) {
  return typeof A == "function";
}
function aE(A) {
  return A !== null && typeof A == "object" && !Array.isArray(A);
}
function sC(A) {
  return CC(A.$validator) ? YQ({}, A) : {
    $validator: A
  };
}
function No(A) {
  return typeof A == "object" ? A.$valid : A;
}
function So(A) {
  return A.$validator || A;
}
function Qa(A, B) {
  if (!aE(A))
    throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof A}`);
  if (!aE(B) && !CC(B))
    throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const g = sC(B);
  return g.$params = YQ(YQ({}, g.$params || {}), A), g;
}
function Ca(A, B) {
  if (!CC(A) && typeof y(A) != "string")
    throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof A}`);
  if (!aE(B) && !CC(B))
    throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const g = sC(B);
  return g.$message = A, g;
}
function Ea(A) {
  let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const g = sC(A);
  return YQ(YQ({}, g), {}, {
    $async: !0,
    $watchTargets: B
  });
}
function Ia(A) {
  return {
    $validator(B) {
      for (var g = arguments.length, Q = new Array(g > 1 ? g - 1 : 0), C = 1; C < g; C++)
        Q[C - 1] = arguments[C];
      return y(B).reduce((E, I, e) => {
        const Y = Object.entries(I).reduce((M, P) => {
          let [t, i] = P;
          const F = A[t] || {}, c = Object.entries(F).reduce((a, r) => {
            let [n, G] = r;
            const u = So(G).call(this, i, I, e, ...Q), S = No(u);
            if (a.$data[n] = u, a.$data.$invalid = !S || !!a.$data.$invalid, a.$data.$error = a.$data.$invalid, !S) {
              let J = G.$message || "";
              const QA = G.$params || {};
              typeof J == "function" && (J = J({
                $pending: !1,
                $invalid: !S,
                $params: QA,
                $model: i,
                $response: u
              })), a.$errors.push({
                $property: t,
                $message: J,
                $params: QA,
                $response: u,
                $model: i,
                $pending: !1,
                $validator: n
              });
            }
            return {
              $valid: a.$valid && S,
              $data: a.$data,
              $errors: a.$errors
            };
          }, {
            $valid: !0,
            $data: {},
            $errors: []
          });
          return M.$data[t] = c.$data, M.$errors[t] = c.$errors, {
            $valid: M.$valid && c.$valid,
            $data: M.$data,
            $errors: M.$errors
          };
        }, {
          $valid: !0,
          $data: {},
          $errors: {}
        });
        return {
          $valid: E.$valid && Y.$valid,
          $data: E.$data.concat(Y.$data),
          $errors: E.$errors.concat(Y.$errors)
        };
      }, {
        $valid: !0,
        $data: [],
        $errors: []
      });
    },
    $message: (B) => {
      let {
        $response: g
      } = B;
      return g ? g.$errors.map((Q) => Object.values(Q).map((C) => C.map((E) => E.$message)).reduce((C, E) => C.concat(E), [])) : [];
    }
  };
}
const FQ = (A) => {
  if (A = y(A), Array.isArray(A))
    return !!A.length;
  if (A == null)
    return !1;
  if (A === !1)
    return !0;
  if (A instanceof Date)
    return !isNaN(A.getTime());
  if (typeof A == "object") {
    for (let B in A)
      return !0;
    return !1;
  }
  return !!String(A).length;
}, wa = (A) => (A = y(A), Array.isArray(A) ? A.length : typeof A == "object" ? Object.keys(A).length : String(A).length);
function Cg() {
  for (var A = arguments.length, B = new Array(A), g = 0; g < A; g++)
    B[g] = arguments[g];
  return (Q) => (Q = y(Q), !FQ(Q) || B.every((C) => (C.lastIndex = 0, C.test(Q))));
}
var vg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: Ia,
  len: wa,
  normalizeValidatorObject: sC,
  regex: Cg,
  req: FQ,
  unwrap: y,
  unwrapNormalizedValidator: So,
  unwrapValidatorResponse: No,
  withAsync: Ea,
  withMessage: Ca,
  withParams: Qa
});
Cg(/^[a-zA-Z]*$/);
Cg(/^[a-zA-Z0-9]*$/);
Cg(/^\d*(\.\d+)?$/);
const Da = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
Cg(Da);
function oa(A) {
  return typeof A == "string" && (A = A.trim()), FQ(A);
}
var uw = {
  $validator: oa,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
const ea = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
Cg(ea);
function Ya(A) {
  return (B) => !FQ(B) || (!/\s/.test(B) || B instanceof Date) && +B >= +y(A);
}
function vw(A) {
  return {
    $validator: Ya(A),
    $message: (B) => {
      let {
        $params: g
      } = B;
      return `The minimum value allowed is ${g.min}`;
    },
    $params: {
      min: A,
      type: "minValue"
    }
  };
}
function Ma(A) {
  return (B) => !FQ(B) || (!/\s/.test(B) || B instanceof Date) && +B <= +y(A);
}
var kw = (A) => ({
  $validator: Ma(A),
  $message: (B) => {
    let {
      $params: g
    } = B;
    return `The maximum value allowed is ${g.max}`;
  },
  $params: {
    max: A,
    type: "maxValue"
  }
});
Cg(/(^[0-9]*$)|(^-[0-9]+$)/);
Cg(/^[-]?\d*(\.\d+)?$/);
const Pa = `.amount-input-container[data-v-5f413620]{display:flex;flex-direction:column}.amount-input[data-v-5f413620]{display:flex;height:2.5rem}.input[data-v-5f413620],.minus[data-v-5f413620],.plus[data-v-5f413620]{border-width:1px;border-style:solid;border-color:var(--border-primary)}.input[data-v-5f413620]:disabled,.minus[data-v-5f413620]:disabled,.plus[data-v-5f413620]:disabled{background-color:var(--disabled)}.input[data-v-5f413620]:disabled{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.minus[data-v-5f413620]:disabled,.plus[data-v-5f413620]:disabled{color:var(--disabled-text)}.minus[data-v-5f413620]:hover:not(:disabled),.plus[data-v-5f413620]:hover:not(:disabled){z-index:20;border-color:var(--border-primary-hover);--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.minus[data-v-5f413620]:focus:not(:disabled),.plus[data-v-5f413620]:focus:not(:disabled){z-index:20;border-color:var(--border-primary-hover);--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.input[data-v-5f413620]{z-index:10;margin-left:-1px;margin-right:-1px;width:3.5rem;text-align:center;font-weight:400}.input[data-v-5f413620]:hover:not(:disabled):not(.has-error){border-color:var(--border-primary-hover)}.input[data-v-5f413620]:focus:not(:disabled){margin-left:-.125rem;margin-right:-.125rem;border-width:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.input[data-v-5f413620]:focus-visible{outline:2px solid transparent;outline-offset:2px}.input[data-v-5f413620]:focus:not(:disabled):not(.has-error){border-color:var(--primary-light)}.input.has-error[data-v-5f413620],.input.has-error[data-v-5f413620]:focus{border-color:var(--error-tertiary)}.minus[data-v-5f413620],.plus[data-v-5f413620]{display:flex;width:2.5rem;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.minus[data-v-5f413620]{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.plus[data-v-5f413620]{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.input[data-v-5f413620]::-webkit-outer-spin-button,.input[data-v-5f413620]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-5f413620]{-moz-appearance:textfield}.error[data-v-5f413620]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}
`, ta = { class: "amount-input-container" }, ca = { class: "amount-input" }, ia = ["disabled"], aa = ["id", "disabled"], Fa = ["disabled"], ra = {
  key: 0,
  class: "error"
}, sa = {
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
  emits: ["update:modelValue"],
  setup(A, { emit: B }) {
    const g = A, Q = B, C = k({
      get() {
        return g.modelValue;
      },
      set(P) {
        Q("update:modelValue", P);
      }
    }), E = k(() => C.value === 1), I = k(() => C.value >= g.max);
    function e() {
      Q("update:modelValue", C.value !== 0 ? C.value -= 1 : 0);
    }
    function Y() {
      Q("update:modelValue", C.value += 1);
    }
    function M(P) {
      P > g.max ? C.value = g.max : (P < 0 || Number.isNaN(P) || !P) && (C.value = 1);
    }
    return aA(C, (P) => {
      M(P);
    }), (P, t) => (D(), o("div", ta, [
      w("div", ca, [
        w("button", {
          disabled: A.disabled || E.value,
          class: "minus",
          "aria-label": "Minus one",
          onClick: DQ(e, ["stop"])
        }, [
          q(DB, { name: "Minus" })
        ], 8, ia),
        WQ(w("input", {
          id: A.id,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => C.value = i),
          class: iA([{ "has-error": A.error }, "input"]),
          disabled: A.disabled,
          "aria-label": "Amount input",
          type: "number"
        }, null, 10, aa), [
          [_Q, C.value]
        ]),
        w("button", {
          disabled: A.disabled || I.value,
          class: "plus",
          "aria-label": "Plus one",
          onClick: DQ(Y, ["stop"])
        }, [
          q(DB, { name: "Plus" })
        ], 8, Fa)
      ]),
      A.error ? (D(), o("span", ra, V(A.error), 1)) : BA("", !0)
    ]));
  }
}, Ro = /* @__PURE__ */ GA(sa, [["styles", [Pa]], ["__scopeId", "data-v-5f413620"]]);
function na(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" }),
    w("path", { d: "M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" }),
    w("path", { d: "M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" })
  ]);
}
function ha(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" })
  ]);
}
function Ga(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" })
  ]);
}
function Ua(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function la(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ha(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function da(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ua(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function va(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" })
  ]);
}
function ka(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" })
  ]);
}
function fa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.97 3.97a.75.75 0 0 1 1.06 0l13.72 13.72V8.25a.75.75 0 0 1 1.5 0V19.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1 0-1.5h9.44L3.97 5.03a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ja(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ta(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Oa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function za(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ja(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Na(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Sa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ra(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function La(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ma(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ka(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ya(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function pa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function xa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Wa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ba(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Va(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Za(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function qa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a.75.75 0 0 1 .75.75v13.19l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0l-6.75-6.75a.75.75 0 1 1 1.06-1.06l5.47 5.47V4.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Xa(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M20.25 12a.75.75 0 0 1-.75.75H6.31l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06l-5.47 5.47H19.5a.75.75 0 0 1 .75.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function _a(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.75 12a.75.75 0 0 1 .75-.75h13.19l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H4.5a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $a(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 20.25a.75.75 0 0 1-.75-.75V6.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 1 1-1.06 1.06l-5.47-5.47V19.5a.75.75 0 0 1-.75.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function AF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function BF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function QF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function CF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06L5.25 6.31Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function EF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3ZM9.75 6.75v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z" }),
    w("path", { d: "M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" })
  ]);
}
function IF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" })
  ]);
}
function wF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function DF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function oF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function eF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15 3.75A5.25 5.25 0 0 0 9.75 9v10.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V9a6.75 6.75 0 0 1 13.5 0v3a.75.75 0 0 1-1.5 0V9c0-2.9-2.35-5.25-5.25-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function YF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function MF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function PF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M21.53 9.53a.75.75 0 0 1-1.06 0l-4.72-4.72V15a6.75 6.75 0 0 1-13.5 0v-3a.75.75 0 0 1 1.5 0v3a5.25 5.25 0 1 0 10.5 0V4.81L9.53 9.53a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function tF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function cF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function iF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function aF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function FF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function rF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.53 9.22a.75.75 0 1 0-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L15.31 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" })
  ]);
}
function nF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" })
  ]);
}
function hF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function GF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function UF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function lF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function HF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function dF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function uF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14.47 3.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L18 10.81V21a.75.75 0 0 1-1.5 0V10.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06l3.75-3.75ZM2.25 9A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function kF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M.75 9.75a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-6Zm19.5 0a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-6Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function JF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0 0 12 15v-4.5a.75.75 0 0 0-.75-.75H4.5Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function TF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function OF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0 1 18.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.25 9c0-.184.007-.366.022-.546l10.384 10.384a3.751 3.751 0 0 1-7.396-1.119 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function jF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Zm.75-10.5a.75.75 0 0 0 0 1.5h1.599l-2.223 3.334A.75.75 0 0 0 10.5 13.5h3a.75.75 0 0 0 0-1.5h-1.599l2.223-3.334A.75.75 0 0 0 13.5 7.5h-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function NF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function SF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "m20.798 11.012-3.188 3.416L9.462 6.28l4.24-4.542a.75.75 0 0 1 1.272.71L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262ZM3.202 12.988 6.39 9.572l8.148 8.148-4.24 4.542a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262ZM3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18Z" })
  ]);
}
function RF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function LF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" })
  ]);
}
function mF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93ZM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 0 1 3.75 21Z" })
  ]);
}
function KF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function yF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function pF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" })
  ]);
}
function xF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.478 1.6a.75.75 0 0 1 .273 1.026 3.72 3.72 0 0 0-.425 1.121c.058.058.118.114.18.168A4.491 4.491 0 0 1 12 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 0 0-.426-1.125.75.75 0 1 1 1.298-.752 5.22 5.22 0 0 1 .671 2.046.75.75 0 0 1-.187.582c-.241.27-.505.52-.787.749a4.494 4.494 0 0 1 .216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.742a23.122 23.122 0 0 0 3.832-.803 23.241 23.241 0 0 0-.345-2.634.75.75 0 0 1 1.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 0 1-.516.75c-1.527.499-3.119.854-4.76 1.049-.074.38-.22.735-.423 1.05 2.066.209 4.058.672 5.943 1.358a.75.75 0 0 1 .492.75 24.665 24.665 0 0 1-1.189 6.25.75.75 0 0 1-1.425-.47 23.14 23.14 0 0 0 1.077-5.306c-.5-.169-1.009-.32-1.524-.455.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.135-1.022.286-1.522.455.154 1.838.52 3.616 1.077 5.307a.75.75 0 1 1-1.425.468 24.662 24.662 0 0 1-1.19-6.25.75.75 0 0 1 .493-.749 24.586 24.586 0 0 1 4.964-1.24h.01c.321-.046.644-.085.969-.118a2.983 2.983 0 0 1-.424-1.05 24.614 24.614 0 0 1-4.76-1.05.75.75 0 0 1-.516-.75c.057-1.16.194-2.302.405-3.417a.75.75 0 0 1 1.474.28c-.164.862-.28 1.74-.345 2.634 1.237.371 2.517.642 3.832.803.085-.266.207-.515.359-.742a18.698 18.698 0 0 1-.547-.08c-.664-.11-1.311-.612-1.417-1.404a4.535 4.535 0 0 1 .217-2.103 6.788 6.788 0 0 1-.788-.751.75.75 0 0 1-.187-.583 5.22 5.22 0 0 1 .67-2.04.75.75 0 0 1 1.026-.273Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function WF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" })
  ]);
}
function bF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function VF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ZF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function qF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" })
  ]);
}
function XF(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function _F(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $F(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ar(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Br(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" })
  ]);
}
function Qr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Er(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ir(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function wr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" }),
    w("path", { d: "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" })
  ]);
}
function Dr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function or(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function er(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Yr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Mr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Pr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function tr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function cr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ir(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ar(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Fr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function rr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function nr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function hr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Gr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" }),
    w("path", { d: "M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" }),
    w("path", { d: "M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" }),
    w("path", { d: "M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" })
  ]);
}
function Ur(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function lr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Hr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" }),
    w("path", { d: "M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" })
  ]);
}
function dr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ur(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function kr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Jr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Tr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Or(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function jr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Nr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Sr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Rr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M16.5 7.5h-9v9h9v-9Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Lr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function mr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Kr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" })
  ]);
}
function yr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75ZM10.5 7.963a1.5 1.5 0 0 0-2.17-1.341l-.415.207a.75.75 0 0 0 .67 1.342L9 7.963V9.75h-.75a.75.75 0 1 0 0 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0 0 16.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 1 0 0 1.5h.656a3.002 3.002 0 0 1-4.327 1.893.113.113 0 0 1-.045-.051.336.336 0 0 1-.034-.154V11.25h5.25a.75.75 0 0 0 0-1.5H10.5V7.963Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function pr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function xr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.902 7.098a3.75 3.75 0 0 1 3.903-.884.75.75 0 1 0 .498-1.415A5.25 5.25 0 0 0 8.005 9.75H7.5a.75.75 0 0 0 0 1.5h.054a5.281 5.281 0 0 0 0 1.5H7.5a.75.75 0 0 0 0 1.5h.505a5.25 5.25 0 0 0 6.494 2.701.75.75 0 1 0-.498-1.415 3.75 3.75 0 0 1-4.252-1.286h3.001a.75.75 0 0 0 0-1.5H9.075a3.77 3.77 0 0 1 0-1.5h3.675a.75.75 0 0 0 0-1.5h-3c.105-.14.221-.274.348-.402Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Wr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.763 9.51a2.25 2.25 0 0 1 3.828-1.351.75.75 0 0 0 1.06-1.06 3.75 3.75 0 0 0-6.38 2.252c-.033.307 0 .595.032.822l.154 1.077H8.25a.75.75 0 0 0 0 1.5h.421l.138.964a3.75 3.75 0 0 1-.358 2.208l-.122.242a.75.75 0 0 0 .908 1.047l1.539-.512a1.5 1.5 0 0 1 .948 0l.655.218a3 3 0 0 0 2.29-.163l.666-.333a.75.75 0 1 0-.67-1.342l-.667.333a1.5 1.5 0 0 1-1.145.082l-.654-.218a3 3 0 0 0-1.898 0l-.06.02a5.25 5.25 0 0 0 .053-1.794l-.108-.752H12a.75.75 0 0 0 0-1.5H9.972l-.184-1.29a1.863 1.863 0 0 1-.025-.45Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function br(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Vr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.624 7.084a.75.75 0 0 0-1.248.832l2.223 3.334H9a.75.75 0 0 0 0 1.5h2.25v1.5H9a.75.75 0 0 0 0 1.5h2.25v1.5a.75.75 0 0 0 1.5 0v-1.5H15a.75.75 0 0 0 0-1.5h-2.25v-1.5H15a.75.75 0 0 0 0-1.5h-1.599l2.223-3.334a.75.75 0 1 0-1.248-.832L12 10.648 9.624 7.084Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Zr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function qr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Xr(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function _r(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $r(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" })
  ]);
}
function A8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" })
  ]);
}
function B8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" })
  ]);
}
function g8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" })
  ]);
}
function Q8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" }),
    w("path", { d: "M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" })
  ]);
}
function C8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" })
  ]);
}
function E8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 14.25a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5H9.75Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" })
  ]);
}
function I8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" })
  ]);
}
function w8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" })
  ]);
}
function D8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" }),
    w("path", { d: "M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" })
  ]);
}
function o8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function e8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Y8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function M8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" }),
    w("path", { d: "M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" })
  ]);
}
function P8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" }),
    w("path", { d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" })
  ]);
}
function t8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function c8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function i8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M16.098 2.598a3.75 3.75 0 1 1 3.622 6.275l-1.72.46V12a.75.75 0 0 1-.22.53l-.75.75a.75.75 0 0 1-1.06 0l-.97-.97-7.94 7.94a2.56 2.56 0 0 1-1.81.75 1.06 1.06 0 0 0-.75.31l-.97.97a.75.75 0 0 1-1.06 0l-.75-.75a.75.75 0 0 1 0-1.06l.97-.97a1.06 1.06 0 0 0 .31-.75c0-.68.27-1.33.75-1.81L11.69 9l-.97-.97a.75.75 0 0 1 0-1.06l.75-.75A.75.75 0 0 1 12 6h2.666l.461-1.72c.165-.617.49-1.2.971-1.682Zm-3.348 7.463L4.81 18a1.06 1.06 0 0 0-.31.75c0 .318-.06.63-.172.922a2.56 2.56 0 0 1 .922-.172c.281 0 .551-.112.75-.31l7.94-7.94-1.19-1.19Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function a8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" }),
    w("path", { d: "M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" }),
    w("path", { d: "M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" })
  ]);
}
function F8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function r8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function s8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function n8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function h8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a6.715 6.715 0 0 0-3.722 1.118.75.75 0 1 1-.828-1.25 8.25 8.25 0 0 1 12.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 0 1-1.395-.551A21.69 21.69 0 0 0 18.75 10.5 6.75 6.75 0 0 0 12 3.75ZM6.157 5.739a.75.75 0 0 1 .21 1.04A6.715 6.715 0 0 0 5.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 0 1-1.27-.8A6.715 6.715 0 0 0 3.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 0 1 1.04-.211ZM12 7.5a3 3 0 0 0-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 1 1-1.112-1.008A10.459 10.459 0 0 0 7.5 10.5a4.5 4.5 0 1 1 9 0c0 .547-.022 1.09-.067 1.626a.75.75 0 0 1-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 0 0-3-3Zm0 2.25a.75.75 0 0 1 .75.75c0 3.908-1.424 7.485-3.781 10.238a.75.75 0 0 1-1.14-.975A14.19 14.19 0 0 0 11.25 10.5a.75.75 0 0 1 .75-.75Zm3.239 5.183a.75.75 0 0 1 .515.927 19.417 19.417 0 0 1-2.585 5.544.75.75 0 0 1-1.243-.84 17.915 17.915 0 0 0 2.386-5.116.75.75 0 0 1 .927-.515Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function G8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function U8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function l8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function H8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function d8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" })
  ]);
}
function u8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function v8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" })
  ]);
}
function k8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" })
  ]);
}
function f8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function J8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm9 4.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm1.5 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H16.5v2.25H18a.75.75 0 0 1 0 1.5h-1.5v3a.75.75 0 0 1-1.5 0v-7.5ZM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 0 0 1.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 0 0 .136-.431V12a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function T8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.25 3v4.046a3 3 0 0 0-4.277 4.204H1.5v-6A2.25 2.25 0 0 1 3.75 3h7.5ZM12.75 3v4.011a3 3 0 0 1 4.239 4.239H22.5v-6A2.25 2.25 0 0 0 20.25 3h-7.5ZM22.5 12.75h-8.983a4.125 4.125 0 0 0 4.108 3.75.75.75 0 0 1 0 1.5 5.623 5.623 0 0 1-4.875-2.817V21h7.5a2.25 2.25 0 0 0 2.25-2.25v-6ZM11.25 21v-5.817A5.623 5.623 0 0 1 6.375 18a.75.75 0 0 1 0-1.5 4.126 4.126 0 0 0 4.108-3.75H1.5v6A2.25 2.25 0 0 0 3.75 21h7.5Z" }),
    w("path", { d: "M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 0 1-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 0 1 2.122-2.12c.517.517.759 1.36.842 2.194ZM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0 0 13.72 8.16c-.518.518-.76 1.362-.843 2.194Z" })
  ]);
}
function O8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" })
  ]);
}
function z8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" })
  ]);
}
function j8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function N8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function S8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function R8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" })
  ]);
}
function L8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" })
  ]);
}
function m8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" })
  ]);
}
function K8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function y8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" })
  ]);
}
function p8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function x8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" }),
    w("path", { d: "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" })
  ]);
}
function W8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function b8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function V8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" })
  ]);
}
function Z8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function q8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function X8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function _8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $8(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.449 8.448 16.388 11a4.52 4.52 0 0 1 0 2.002l3.061 2.55a8.275 8.275 0 0 0 0-7.103ZM15.552 19.45 13 16.388a4.52 4.52 0 0 1-2.002 0l-2.55 3.061a8.275 8.275 0 0 0 7.103 0ZM4.55 15.552 7.612 13a4.52 4.52 0 0 1 0-2.002L4.551 8.45a8.275 8.275 0 0 0 0 7.103ZM8.448 4.55 11 7.612a4.52 4.52 0 0 1 2.002 0l2.55-3.061a8.275 8.275 0 0 0-7.103 0Zm8.657-.86a9.776 9.776 0 0 1 1.79 1.415 9.776 9.776 0 0 1 1.414 1.788 9.764 9.764 0 0 1 0 10.211 9.777 9.777 0 0 1-1.415 1.79 9.777 9.777 0 0 1-1.788 1.414 9.764 9.764 0 0 1-10.212 0 9.776 9.776 0 0 1-1.788-1.415 9.776 9.776 0 0 1-1.415-1.788 9.764 9.764 0 0 1 0-10.212 9.774 9.774 0 0 1 1.415-1.788A9.774 9.774 0 0 1 6.894 3.69a9.764 9.764 0 0 1 10.211 0ZM14.121 9.88a2.985 2.985 0 0 0-1.11-.704 3.015 3.015 0 0 0-2.022 0 2.985 2.985 0 0 0-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 0 0 0 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 0 0 1.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 0 0 0-2.022 2.985 2.985 0 0 0-.704-1.11Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function As(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Bs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Qs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" })
  ]);
}
function Es(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Is(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm4.5 0a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ws(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm8.25-3.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V7.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ds(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function os(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function es(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ys(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" })
  ]);
}
function Ms(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" }),
    w("path", { d: "M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" })
  ]);
}
function Ps(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ts(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function cs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function is(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function as(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Fs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" })
  ]);
}
function rs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ss(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ns(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" })
  ]);
}
function hs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Gs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Us(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ls(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" }),
    w("path", { d: "M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" })
  ]);
}
function Hs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" })
  ]);
}
function ds(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function us(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15.22 3.22a.75.75 0 0 1 1.06 0L18 4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L19.06 6l1.72 1.72a.75.75 0 0 1-1.06 1.06L18 7.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L16.94 6l-1.72-1.72a.75.75 0 0 1 0-1.06ZM1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ks(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Js(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ts(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M15 6.75a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75H15ZM20.25 6.75a.75.75 0 0 0-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75h-.75ZM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061Z" })
  ]);
}
function Os(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function js(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 0 1 0 1.5h-5.25V18a.75.75 0 0 1-1.5 0v-5.25H6a.75.75 0 0 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ns(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ss(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Rs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ls(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ms(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ks(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" })
  ]);
}
function ys(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 9.375v-4.5ZM4.875 4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75A.75.75 0 0 1 6 7.5v-.75Zm9.75 0A.75.75 0 0 1 16.5 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 19.125v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875-.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM6 16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm9.75 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm-3 3a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ps(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function xs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" })
  ]);
}
function Ws(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M20.432 4.103a.75.75 0 0 0-.364-1.456L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.574v9.176a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.017 49.017 0 0 0-7.255-.658l7.616-1.904Zm-9.585 8.56a.75.75 0 0 1 0 1.06l-.005.006a.75.75 0 0 1-1.06 0l-.006-.006a.75.75 0 0 1 0-1.06l.005-.005a.75.75 0 0 1 1.06 0l.006.005ZM9.781 15.85a.75.75 0 0 0 1.061 0l.005-.005a.75.75 0 0 0 0-1.061l-.005-.005a.75.75 0 0 0-1.06 0l-.006.005a.75.75 0 0 0 0 1.06l.005.006Zm-1.055-1.066a.75.75 0 0 1 0 1.06l-.005.006a.75.75 0 0 1-1.061 0l-.005-.005a.75.75 0 0 1 0-1.06l.005-.006a.75.75 0 0 1 1.06 0l.006.005ZM7.66 13.73a.75.75 0 0 0 1.061 0l.005-.006a.75.75 0 0 0 0-1.06l-.005-.006a.75.75 0 0 0-1.06 0l-.006.006a.75.75 0 0 0 0 1.06l.005.006ZM9.255 9.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75V10.5a.75.75 0 0 1 .75-.75h.008Zm3.624 3.28a.75.75 0 0 0 .275-1.025L13.15 12a.75.75 0 0 0-1.025-.275l-.006.004a.75.75 0 0 0-.275 1.024l.004.007a.75.75 0 0 0 1.025.274l.006-.003Zm-1.38 5.126a.75.75 0 0 1-1.024-.275l-.004-.006a.75.75 0 0 1 .275-1.025l.006-.004a.75.75 0 0 1 1.025.275l.004.007a.75.75 0 0 1-.275 1.024l-.006.004Zm.282-6.776a.75.75 0 0 0-.274-1.025l-.007-.003a.75.75 0 0 0-1.024.274l-.004.007a.75.75 0 0 0 .274 1.024l.007.004a.75.75 0 0 0 1.024-.275l.004-.006Zm1.369 5.129a.75.75 0 0 1-1.025.274l-.006-.004a.75.75 0 0 1-.275-1.024l.004-.007a.75.75 0 0 1 1.025-.274l.006.004a.75.75 0 0 1 .275 1.024l-.004.007Zm-.145-1.502a.75.75 0 0 0 .75-.75v-.007a.75.75 0 0 0-.75-.75h-.008a.75.75 0 0 0-.75.75v.007c0 .415.336.75.75.75h.008Zm-3.75 2.243a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75V18a.75.75 0 0 1 .75-.75h.008Zm-2.871-.47a.75.75 0 0 0 .274-1.025l-.003-.006a.75.75 0 0 0-1.025-.275l-.006.004a.75.75 0 0 0-.275 1.024l.004.007a.75.75 0 0 0 1.024.274l.007-.003Zm1.366-5.12a.75.75 0 0 1-1.025-.274l-.004-.006a.75.75 0 0 1 .275-1.025l.006-.004a.75.75 0 0 1 1.025.275l.004.006a.75.75 0 0 1-.275 1.025l-.006.004Zm.281 6.215a.75.75 0 0 0-.275-1.024l-.006-.004a.75.75 0 0 0-1.025.274l-.003.007a.75.75 0 0 0 .274 1.024l.007.004a.75.75 0 0 0 1.024-.274l.004-.007Zm-1.376-5.116a.75.75 0 0 1-1.025.274l-.006-.003a.75.75 0 0 1-.275-1.025l.004-.007a.75.75 0 0 1 1.025-.274l.006.004a.75.75 0 0 1 .275 1.024l-.004.007Zm-1.15 2.248a.75.75 0 0 0 .75-.75v-.007a.75.75 0 0 0-.75-.75h-.008a.75.75 0 0 0-.75.75v.007c0 .415.336.75.75.75h.008ZM17.25 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.5 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function bs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Vs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm-.97 6.53a.75.75 0 1 0-1.06-1.06L7.72 9.22a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h3.065a1.875 1.875 0 0 1 0 3.75H12a.75.75 0 0 0 0 1.5h1.125a3.375 3.375 0 1 0 0-6.75h-3.064l.97-.97Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Zs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function qs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" })
  ]);
}
function Xs(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" })
  ]);
}
function _s(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.75 4.5a.75.75 0 0 1 .75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 0 1-.75-.75V4.5Zm0 6.75a.75.75 0 0 1 .75-.75h.75a8.25 8.25 0 0 1 8.25 8.25v.75a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-.75a6 6 0 0 0-6-6H4.5a.75.75 0 0 1-.75-.75v-.75Zm0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $s(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function An(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" })
  ]);
}
function Bn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M4.08 5.227A3 3 0 0 1 6.979 3H17.02a3 3 0 0 1 2.9 2.227l2.113 7.926A5.228 5.228 0 0 0 18.75 12H5.25a5.228 5.228 0 0 0-3.284 1.153L4.08 5.227Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.25 13.5a3.75 3.75 0 1 0 0 7.5h13.5a3.75 3.75 0 1 0 0-7.5H5.25Zm10.5 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Qn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function En(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function In(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function wn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" })
  ]);
}
function Dn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.47 2.47a.75.75 0 0 1 1.06 0l8.407 8.407a1.125 1.125 0 0 1 1.186 1.186l1.462 1.461a3.001 3.001 0 0 0-.464-3.645.75.75 0 1 1 1.061-1.061 4.501 4.501 0 0 1 .486 5.79l1.072 1.072a6.001 6.001 0 0 0-.497-7.923.75.75 0 0 1 1.06-1.06 7.501 7.501 0 0 1 .505 10.05l1.064 1.065a9 9 0 0 0-.508-12.176.75.75 0 0 1 1.06-1.06c3.923 3.922 4.093 10.175.512 14.3l1.594 1.594a.75.75 0 1 1-1.06 1.06l-2.106-2.105-2.121-2.122h-.001l-4.705-4.706a.747.747 0 0 1-.127-.126L2.47 3.53a.75.75 0 0 1 0-1.061Zm1.189 4.422a.75.75 0 0 1 .326 1.01 9.004 9.004 0 0 0 1.651 10.462.75.75 0 1 1-1.06 1.06C1.27 16.12.63 11.165 2.648 7.219a.75.75 0 0 1 1.01-.326ZM5.84 9.134a.75.75 0 0 1 .472.95 6 6 0 0 0 1.444 6.159.75.75 0 0 1-1.06 1.06A7.5 7.5 0 0 1 4.89 9.606a.75.75 0 0 1 .95-.472Zm2.341 2.653a.75.75 0 0 1 .848.638c.088.62.37 1.218.849 1.696a.75.75 0 0 1-1.061 1.061 4.483 4.483 0 0 1-1.273-2.546.75.75 0 0 1 .637-.848Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function on(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function en(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Yn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" }),
    w("path", { d: "M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" })
  ]);
}
function Mn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" })
  ]);
}
function Pn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" }),
    w("path", { d: "M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" })
  ]);
}
function tn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" }),
    w("path", { d: "m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" }),
    w("path", { d: "m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" })
  ]);
}
function cn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function an(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" })
  ]);
}
function Fn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function rn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function nn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" })
  ]);
}
function hn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" })
  ]);
}
function Gn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Un(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ln(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Hn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function dn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function un(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" }),
    w("path", { d: "M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" }),
    w("path", { d: "M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" })
  ]);
}
function vn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M19.5 6h-15v9h15V6Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function kn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" })
  ]);
}
function Jn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" })
  ]);
}
function Tn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" })
  ]);
}
function On(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" })
  ]);
}
function jn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M19.253 2.292a.75.75 0 0 1 .955.461A28.123 28.123 0 0 1 21.75 12c0 3.266-.547 6.388-1.542 9.247a.75.75 0 1 1-1.416-.494c.94-2.7 1.458-5.654 1.458-8.753s-.519-6.054-1.458-8.754a.75.75 0 0 1 .461-.954Zm-14.227.013a.75.75 0 0 1 .414.976A23.183 23.183 0 0 0 3.75 12c0 3.085.6 6.027 1.69 8.718a.75.75 0 0 1-1.39.563c-1.161-2.867-1.8-6-1.8-9.281 0-3.28.639-6.414 1.8-9.281a.75.75 0 0 1 .976-.414Zm4.275 5.052a1.5 1.5 0 0 1 2.21.803l.716 2.148L13.6 8.246a2.438 2.438 0 0 1 2.978-.892l.213.09a.75.75 0 1 1-.584 1.381l-.214-.09a.937.937 0 0 0-1.145.343l-2.021 3.033 1.084 3.255 1.445-.89a.75.75 0 1 1 .786 1.278l-1.444.889a1.5 1.5 0 0 1-2.21-.803l-.716-2.148-1.374 2.062a2.437 2.437 0 0 1-2.978.892l-.213-.09a.75.75 0 0 1 .584-1.381l.214.09a.938.938 0 0 0 1.145-.344l2.021-3.032-1.084-3.255-1.445.89a.75.75 0 1 1-.786-1.278l1.444-.89Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Nn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M.97 3.97a.75.75 0 0 1 1.06 0l15 15a.75.75 0 1 1-1.06 1.06l-15-15a.75.75 0 0 1 0-1.06ZM17.25 16.06l2.69 2.69c.944.945 2.56.276 2.56-1.06V6.31c0-1.336-1.616-2.005-2.56-1.06l-2.69 2.69v8.12ZM15.75 7.5v8.068L4.682 4.5h8.068a3 3 0 0 1 3 3ZM1.5 16.5V7.682l11.773 11.773c-.17.03-.345.045-.523.045H4.5a3 3 0 0 1-3-3Z" })
  ]);
}
function Sn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" })
  ]);
}
function Rn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M15 3.75H9v16.5h6V3.75ZM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5ZM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 0 1-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875Z" })
  ]);
}
function Ln(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M6 3a3 3 0 0 0-3 3v1.5a.75.75 0 0 0 1.5 0V6A1.5 1.5 0 0 1 6 4.5h1.5a.75.75 0 0 0 0-1.5H6ZM16.5 3a.75.75 0 0 0 0 1.5H18A1.5 1.5 0 0 1 19.5 6v1.5a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3h-1.5ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.5 16.5a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h1.5a.75.75 0 0 0 0-1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5ZM21 16.5a.75.75 0 0 0-1.5 0V18a1.5 1.5 0 0 1-1.5 1.5h-1.5a.75.75 0 0 0 0 1.5H18a3 3 0 0 0 3-3v-1.5Z" })
  ]);
}
function mn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", { d: "M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" })
  ]);
}
function Kn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function yn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function pn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",
      "clip-rule": "evenodd"
    }),
    w("path", { d: "m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" }),
    w("path", {
      "fill-rule": "evenodd",
      d: "m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function xn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Wn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function bn(A, B) {
  return D(), o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    w("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCapIcon: na,
  AdjustmentsHorizontalIcon: ha,
  AdjustmentsVerticalIcon: Ga,
  ArchiveBoxArrowDownIcon: Ua,
  ArchiveBoxIcon: Ha,
  ArchiveBoxXMarkIcon: la,
  ArrowDownCircleIcon: da,
  ArrowDownIcon: Ta,
  ArrowDownLeftIcon: ua,
  ArrowDownOnSquareIcon: ka,
  ArrowDownOnSquareStackIcon: va,
  ArrowDownRightIcon: fa,
  ArrowDownTrayIcon: Ja,
  ArrowLeftCircleIcon: Oa,
  ArrowLeftEndOnRectangleIcon: za,
  ArrowLeftIcon: Sa,
  ArrowLeftOnRectangleIcon: ja,
  ArrowLeftStartOnRectangleIcon: Na,
  ArrowLongDownIcon: Ra,
  ArrowLongLeftIcon: La,
  ArrowLongRightIcon: ma,
  ArrowLongUpIcon: Ka,
  ArrowPathIcon: pa,
  ArrowPathRoundedSquareIcon: ya,
  ArrowRightCircleIcon: xa,
  ArrowRightEndOnRectangleIcon: Wa,
  ArrowRightIcon: Za,
  ArrowRightOnRectangleIcon: ba,
  ArrowRightStartOnRectangleIcon: Va,
  ArrowSmallDownIcon: qa,
  ArrowSmallLeftIcon: Xa,
  ArrowSmallRightIcon: _a,
  ArrowSmallUpIcon: $a,
  ArrowTopRightOnSquareIcon: AF,
  ArrowTrendingDownIcon: BF,
  ArrowTrendingUpIcon: gF,
  ArrowUpCircleIcon: QF,
  ArrowUpIcon: oF,
  ArrowUpLeftIcon: CF,
  ArrowUpOnSquareIcon: IF,
  ArrowUpOnSquareStackIcon: EF,
  ArrowUpRightIcon: wF,
  ArrowUpTrayIcon: DF,
  ArrowUturnDownIcon: eF,
  ArrowUturnLeftIcon: YF,
  ArrowUturnRightIcon: MF,
  ArrowUturnUpIcon: PF,
  ArrowsPointingInIcon: tF,
  ArrowsPointingOutIcon: cF,
  ArrowsRightLeftIcon: iF,
  ArrowsUpDownIcon: aF,
  AtSymbolIcon: FF,
  BackspaceIcon: rF,
  BackwardIcon: sF,
  BanknotesIcon: nF,
  Bars2Icon: hF,
  Bars3BottomLeftIcon: GF,
  Bars3BottomRightIcon: UF,
  Bars3CenterLeftIcon: lF,
  Bars3Icon: HF,
  Bars4Icon: dF,
  BarsArrowDownIcon: uF,
  BarsArrowUpIcon: vF,
  Battery0Icon: kF,
  Battery100Icon: fF,
  Battery50Icon: JF,
  BeakerIcon: TF,
  BellAlertIcon: OF,
  BellIcon: NF,
  BellSlashIcon: zF,
  BellSnoozeIcon: jF,
  BoltIcon: RF,
  BoltSlashIcon: SF,
  BookOpenIcon: LF,
  BookmarkIcon: yF,
  BookmarkSlashIcon: mF,
  BookmarkSquareIcon: KF,
  BriefcaseIcon: pF,
  BugAntIcon: xF,
  BuildingLibraryIcon: WF,
  BuildingOffice2Icon: bF,
  BuildingOfficeIcon: VF,
  BuildingStorefrontIcon: ZF,
  CakeIcon: qF,
  CalculatorIcon: XF,
  CalendarDaysIcon: _F,
  CalendarIcon: $F,
  CameraIcon: Ar,
  ChartBarIcon: gr,
  ChartBarSquareIcon: Br,
  ChartPieIcon: Qr,
  ChatBubbleBottomCenterIcon: Er,
  ChatBubbleBottomCenterTextIcon: Cr,
  ChatBubbleLeftEllipsisIcon: Ir,
  ChatBubbleLeftIcon: Dr,
  ChatBubbleLeftRightIcon: wr,
  ChatBubbleOvalLeftEllipsisIcon: or,
  ChatBubbleOvalLeftIcon: er,
  CheckBadgeIcon: Yr,
  CheckCircleIcon: Mr,
  CheckIcon: Pr,
  ChevronDoubleDownIcon: tr,
  ChevronDoubleLeftIcon: cr,
  ChevronDoubleRightIcon: ir,
  ChevronDoubleUpIcon: ar,
  ChevronDownIcon: Fr,
  ChevronLeftIcon: rr,
  ChevronRightIcon: sr,
  ChevronUpDownIcon: nr,
  ChevronUpIcon: hr,
  CircleStackIcon: Gr,
  ClipboardDocumentCheckIcon: Ur,
  ClipboardDocumentIcon: Hr,
  ClipboardDocumentListIcon: lr,
  ClipboardIcon: dr,
  ClockIcon: ur,
  CloudArrowDownIcon: vr,
  CloudArrowUpIcon: kr,
  CloudIcon: fr,
  CodeBracketIcon: Tr,
  CodeBracketSquareIcon: Jr,
  Cog6ToothIcon: Or,
  Cog8ToothIcon: zr,
  CogIcon: jr,
  CommandLineIcon: Nr,
  ComputerDesktopIcon: Sr,
  CpuChipIcon: Rr,
  CreditCardIcon: Lr,
  CubeIcon: Kr,
  CubeTransparentIcon: mr,
  CurrencyBangladeshiIcon: yr,
  CurrencyDollarIcon: pr,
  CurrencyEuroIcon: xr,
  CurrencyPoundIcon: Wr,
  CurrencyRupeeIcon: br,
  CurrencyYenIcon: Vr,
  CursorArrowRaysIcon: Zr,
  CursorArrowRippleIcon: qr,
  DevicePhoneMobileIcon: Xr,
  DeviceTabletIcon: _r,
  DocumentArrowDownIcon: $r,
  DocumentArrowUpIcon: A8,
  DocumentChartBarIcon: B8,
  DocumentCheckIcon: g8,
  DocumentDuplicateIcon: Q8,
  DocumentIcon: D8,
  DocumentMagnifyingGlassIcon: C8,
  DocumentMinusIcon: E8,
  DocumentPlusIcon: I8,
  DocumentTextIcon: w8,
  EllipsisHorizontalCircleIcon: o8,
  EllipsisHorizontalIcon: e8,
  EllipsisVerticalIcon: Y8,
  EnvelopeIcon: P8,
  EnvelopeOpenIcon: M8,
  ExclamationCircleIcon: t8,
  ExclamationTriangleIcon: c8,
  EyeDropperIcon: i8,
  EyeIcon: F8,
  EyeSlashIcon: a8,
  FaceFrownIcon: r8,
  FaceSmileIcon: s8,
  FilmIcon: n8,
  FingerPrintIcon: h8,
  FireIcon: G8,
  FlagIcon: U8,
  FolderArrowDownIcon: l8,
  FolderIcon: v8,
  FolderMinusIcon: H8,
  FolderOpenIcon: d8,
  FolderPlusIcon: u8,
  ForwardIcon: k8,
  FunnelIcon: f8,
  GifIcon: J8,
  GiftIcon: O8,
  GiftTopIcon: T8,
  GlobeAltIcon: z8,
  GlobeAmericasIcon: j8,
  GlobeAsiaAustraliaIcon: N8,
  GlobeEuropeAfricaIcon: S8,
  HandRaisedIcon: R8,
  HandThumbDownIcon: L8,
  HandThumbUpIcon: m8,
  HashtagIcon: K8,
  HeartIcon: y8,
  HomeIcon: x8,
  HomeModernIcon: p8,
  IdentificationIcon: W8,
  InboxArrowDownIcon: b8,
  InboxIcon: Z8,
  InboxStackIcon: V8,
  InformationCircleIcon: q8,
  KeyIcon: X8,
  LanguageIcon: _8,
  LifebuoyIcon: $8,
  LightBulbIcon: As,
  LinkIcon: Bs,
  ListBulletIcon: gs,
  LockClosedIcon: Qs,
  LockOpenIcon: Cs,
  MagnifyingGlassCircleIcon: Es,
  MagnifyingGlassIcon: Ds,
  MagnifyingGlassMinusIcon: Is,
  MagnifyingGlassPlusIcon: ws,
  MapIcon: es,
  MapPinIcon: os,
  MegaphoneIcon: Ys,
  MicrophoneIcon: Ms,
  MinusCircleIcon: Ps,
  MinusIcon: cs,
  MinusSmallIcon: ts,
  MoonIcon: is,
  MusicalNoteIcon: as,
  NewspaperIcon: Fs,
  NoSymbolIcon: rs,
  PaintBrushIcon: ss,
  PaperAirplaneIcon: ns,
  PaperClipIcon: hs,
  PauseCircleIcon: Gs,
  PauseIcon: Us,
  PencilIcon: Hs,
  PencilSquareIcon: ls,
  PhoneArrowDownLeftIcon: ds,
  PhoneArrowUpRightIcon: us,
  PhoneIcon: ks,
  PhoneXMarkIcon: vs,
  PhotoIcon: fs,
  PlayCircleIcon: Js,
  PlayIcon: Os,
  PlayPauseIcon: Ts,
  PlusCircleIcon: zs,
  PlusIcon: Ns,
  PlusSmallIcon: js,
  PowerIcon: Ss,
  PresentationChartBarIcon: Rs,
  PresentationChartLineIcon: Ls,
  PrinterIcon: ms,
  PuzzlePieceIcon: Ks,
  QrCodeIcon: ys,
  QuestionMarkCircleIcon: ps,
  QueueListIcon: xs,
  RadioIcon: Ws,
  ReceiptPercentIcon: bs,
  ReceiptRefundIcon: Vs,
  RectangleGroupIcon: Zs,
  RectangleStackIcon: qs,
  RocketLaunchIcon: Xs,
  RssIcon: _s,
  ScaleIcon: $s,
  ScissorsIcon: An,
  ServerIcon: gn,
  ServerStackIcon: Bn,
  ShareIcon: Qn,
  ShieldCheckIcon: Cn,
  ShieldExclamationIcon: En,
  ShoppingBagIcon: In,
  ShoppingCartIcon: wn,
  SignalIcon: on,
  SignalSlashIcon: Dn,
  SparklesIcon: en,
  SpeakerWaveIcon: Yn,
  SpeakerXMarkIcon: Mn,
  Square2StackIcon: Pn,
  Square3Stack3DIcon: tn,
  Squares2X2Icon: cn,
  SquaresPlusIcon: an,
  StarIcon: Fn,
  StopCircleIcon: rn,
  StopIcon: sn,
  SunIcon: nn,
  SwatchIcon: hn,
  TableCellsIcon: Gn,
  TagIcon: Un,
  TicketIcon: ln,
  TrashIcon: Hn,
  TrophyIcon: dn,
  TruckIcon: un,
  TvIcon: vn,
  UserCircleIcon: kn,
  UserGroupIcon: fn,
  UserIcon: On,
  UserMinusIcon: Jn,
  UserPlusIcon: Tn,
  UsersIcon: zn,
  VariableIcon: jn,
  VideoCameraIcon: Sn,
  VideoCameraSlashIcon: Nn,
  ViewColumnsIcon: Rn,
  ViewfinderCircleIcon: Ln,
  WalletIcon: mn,
  WifiIcon: Kn,
  WindowIcon: yn,
  WrenchIcon: xn,
  WrenchScrewdriverIcon: pn,
  XCircleIcon: Wn,
  XMarkIcon: bn
}, Symbol.toStringTag, { value: "Module" })), Zn = `.icon[data-v-79823d03]{height:1.5rem;width:1.5rem}
`, qn = {
  __name: "PIconSolid",
  props: {
    /** Icon name, case sensitive, see README for list */
    name: {
      type: String,
      required: !0
    }
  },
  setup(A) {
    const B = Z(Vn);
    return (g, Q) => (D(), MA(xQ(B.value[`${A.name}Icon`]), { class: "icon" }));
  }
}, FE = /* @__PURE__ */ GA(qn, [["styles", [Zn]], ["__scopeId", "data-v-79823d03"]]), Xn = `.input-container[data-v-b4d0eadd]{display:flex;flex-direction:column}.input-container.is-large .icon[data-v-b4d0eadd]{height:1.5rem!important;width:1.5rem!important}.input-container.has-error .icon[data-v-b4d0eadd]{stroke:var(--error-tertiary)}.input-container.has-error .icon.solid[data-v-b4d0eadd]{fill:var(--error-tertiary);stroke:#fff}.container-inner[data-v-b4d0eadd]{position:relative;width:100%}.container-inner .inline-container-prepended[data-v-b4d0eadd],.container-inner .inline-container-appended[data-v-b4d0eadd]{position:absolute;top:50%;display:flex;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));justify-content:center}.container-inner .inline-container-prepended .icon[data-v-b4d0eadd],.container-inner .inline-container-appended .icon[data-v-b4d0eadd]{height:1.25rem;width:1.25rem}.container-inner .inline-container-prepended .text[data-v-b4d0eadd],.container-inner .inline-container-appended .text[data-v-b4d0eadd]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.container-inner .inline-container-prepended[data-v-b4d0eadd]{left:1rem}.container-inner .inline-container-prepended .icon[data-v-b4d0eadd]{color:var(--primary)}.container-inner .inline-container-appended[data-v-b4d0eadd]{right:1rem;transform:translateY(-50%)}.input-label[data-v-b4d0eadd]{margin-bottom:.5rem;display:flex;font-size:.875rem;line-height:1.25rem;font-weight:500}.input-label .optional[data-v-b4d0eadd]{margin-left:auto;font-weight:400;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.input[data-v-b4d0eadd]{box-sizing:border-box;width:100%;border-radius:.5rem;border-width:1px;border-style:solid;border-color:var(--border-primary);padding-left:1rem;padding-right:1rem;padding-top:9px;padding-bottom:9px;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity));--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.input[data-v-b4d0eadd]::-moz-placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.input[data-v-b4d0eadd]::placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.input[data-v-b4d0eadd]:hover{border-color:var(--border-primary-hover)}.input[data-v-b4d0eadd]:focus{border-width:2px;border-color:var(--primary-light);padding:8px 15px}.input.has-icon-prepended[data-v-b4d0eadd]{padding-left:2.5rem}.input.has-error[data-v-b4d0eadd]{border-color:var(--error-tertiary);color:var(--error-primary)}.input.has-error[data-v-b4d0eadd]::-moz-placeholder{color:var(--error-primary)}.input.has-error[data-v-b4d0eadd]::placeholder{color:var(--error-primary)}.input.is-valid[data-v-b4d0eadd]{border-color:var(--success-tertiary);color:var(--success-primary)}.input[data-v-b4d0eadd]:disabled{background-color:var(--disabled);color:var(--disabled-text)}.input[data-v-b4d0eadd]:disabled::-moz-placeholder{color:var(--disabled-text)}.input[data-v-b4d0eadd]:disabled::placeholder{color:var(--disabled-text)}.input[data-v-b4d0eadd]:disabled:hover{border-color:var(--border-primary)}.error[data-v-b4d0eadd]{margin-top:.5rem;font-size:.875rem;line-height:1.25rem;color:var(--error-secondary)}.input.medium[data-v-b4d0eadd]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-b4d0eadd]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-b4d0eadd]{padding-top:.9375rem;padding-bottom:.9375rem;font-size:1rem;line-height:1.5rem}.input.large[data-v-b4d0eadd]:focus{padding-top:.875rem;padding-bottom:.875rem}
`, _n = ["for"], $n = {
  key: 0,
  class: "optional"
}, Ah = { class: "container-inner" }, Bh = {
  key: 0,
  class: "inline-container-prepended"
}, gh = ["id", "placeholder", "disabled", "aria-label", "rows"], Qh = ["id", "placeholder", "type", "disabled", "aria-label"], Ch = { class: "inline-container-appended" }, Eh = {
  key: 1,
  class: "text"
}, Ih = {
  key: 1,
  class: "error"
}, wh = {
  __name: "PInput",
  props: {
    id: {
      type: String,
      required: !0
    },
    /** The input value */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /** Placeholder text in input */
    placeholder: {
      type: String,
      default: "Type something"
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
    /** Icon to display at the end of an input */
    icon: {
      type: Object,
      default: () => {
      }
    },
    /** Icon to display at the beginning of an input */
    prependIcon: {
      type: Object,
      default: () => {
      }
    },
    /** Disabled state */
    disabled: {
      type: Boolean
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
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(A, { emit: B }) {
    const g = A, Q = B, C = k(() => {
      var e;
      return g.error ? "ExclamationTriangle" : (e = g.icon) == null ? void 0 : e.name;
    }), E = k(() => g.optional !== "" ? g.optional : "Optional"), I = k({
      get() {
        return g.modelValue;
      },
      set(e) {
        Q("update:modelValue", e);
      }
    });
    return (e, Y) => (D(), o("div", {
      class: iA(["input-container", { "has-error": A.error, "is-large": A.large }])
    }, [
      A.label ? (D(), o("label", {
        key: 0,
        class: "input-label",
        for: A.id
      }, [
        w("span", null, V(A.label), 1),
        A.required ? BA("", !0) : (D(), o("span", $n, V(E.value), 1))
      ], 8, _n)) : BA("", !0),
      w("div", Ah, [
        A.prependIcon ? (D(), o("div", Bh, [
          (D(), MA(xQ(A.prependIcon && A.prependIcon.style === "solid" ? FE : DB), {
            name: A.prependIcon.name,
            class: iA({ solid: A.icon && A.icon.style === "solid" })
          }, null, 8, ["name", "class"]))
        ])) : BA("", !0),
        A.expand ? WQ((D(), o("textarea", {
          key: 1,
          id: A.id,
          "onUpdate:modelValue": Y[0] || (Y[0] = (M) => I.value = M),
          class: iA(["input", {
            "has-error": A.error,
            "is-valid": A.valid,
            "has-icon-prepended": A.prependIcon,
            "has-icon-appended": A.icon
          }]),
          placeholder: A.placeholder,
          disabled: A.disabled,
          "aria-label": A.ariaLabel,
          rows: A.rows,
          onFocus: Y[1] || (Y[1] = (M) => Q("focus", M)),
          onBlur: Y[2] || (Y[2] = (M) => Q("blur", M))
        }, null, 42, gh)), [
          [_Q, I.value]
        ]) : WQ((D(), o("input", {
          key: 2,
          id: A.id,
          "onUpdate:modelValue": Y[3] || (Y[3] = (M) => I.value = M),
          class: iA(["input", {
            "has-error": A.error,
            "is-valid": A.valid,
            medium: A.medium,
            large: A.large,
            "has-icon-prepended": A.prependIcon,
            "has-icon-appended": A.icon
          }]),
          placeholder: A.placeholder,
          type: A.type,
          disabled: A.disabled,
          "aria-label": A.ariaLabel,
          onFocus: Y[4] || (Y[4] = (M) => Q("focus", M)),
          onBlur: Y[5] || (Y[5] = (M) => Q("blur", M))
        }, null, 42, Qh)), [
          [DM, I.value]
        ]),
        w("div", Ch, [
          kA(e.$slots, "inline", {}, () => [
            A.icon ? (D(), MA(xQ(A.icon && A.icon.style === "solid" || A.error ? FE : DB), {
              key: 0,
              name: C.value,
              class: iA({ solid: A.icon && A.icon.style === "solid" || A.error })
            }, null, 8, ["name", "class"])) : BA("", !0),
            A.inline ? (D(), o("span", Eh, V(A.inline), 1)) : BA("", !0)
          ], !0)
        ])
      ]),
      A.error ? (D(), o("span", Ih, V(A.error), 1)) : BA("", !0)
    ], 2));
  }
}, nC = /* @__PURE__ */ GA(wh, [["styles", [Xn]], ["__scopeId", "data-v-b4d0eadd"]]), Dh = `.status[data-v-aa9d824d]{display:flex;height:1.5rem;width:1.5rem;flex-shrink:0;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.status .icon[data-v-aa9d824d]{height:1rem;width:1rem}.status.done[data-v-aa9d824d]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.done .icon[data-v-aa9d824d]{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.status.attention[data-v-aa9d824d]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.attention .icon[data-v-aa9d824d]{color:var(--error-secondary)}
`, oh = {
  __name: "PStepStatus",
  props: {
    /** Step status, editing | done | attention */
    status: {
      type: String,
      default: "editing"
    }
  },
  setup(A) {
    const B = A, g = k(() => {
      switch (B.status) {
        case "done":
          return "Check";
        case "attention":
          return "ExclamationCircle";
        default:
          return "";
      }
    });
    return (Q, C) => (D(), o("div", {
      class: iA(["status", A.status])
    }, [
      q(DB, { name: g.value }, null, 8, ["name"])
    ], 2));
  }
}, Lo = /* @__PURE__ */ GA(oh, [["styles", [Dh]], ["__scopeId", "data-v-aa9d824d"]]), eh = `.alert[data-v-d5e79ae0]{display:flex;border-radius:.5rem;padding:1rem}.alert.error[data-v-d5e79ae0]{background-color:var(--error-accent)}.alert.warning[data-v-d5e79ae0]{background-color:var(--warning-accent)}.alert.success[data-v-d5e79ae0]{background-color:var(--success-accent)}.alert.info[data-v-d5e79ae0]{background-color:var(--info-accent)}.alert .icon[data-v-d5e79ae0]{margin-right:.75rem;height:1.25rem;width:1.25rem}.alert .content[data-v-d5e79ae0]{display:flex;flex-direction:column;justify-content:center;gap:.25rem;font-size:.875rem;line-height:1.25rem}.alert .content .title[data-v-d5e79ae0]{font-weight:500}.error .icon .icon[data-v-d5e79ae0]{fill:var(--error-tertiary)}.error .content .title[data-v-d5e79ae0]{color:var(--error-primary)}.error .content .description[data-v-d5e79ae0]{color:var(--error-secondary)}.warning .icon .icon[data-v-d5e79ae0]{fill:var(--warning-tertiary)}.warning .content .title[data-v-d5e79ae0]{color:var(--warning-primary)}.warning .content .description[data-v-d5e79ae0]{color:var(--warning-secondary)}.success .icon .icon[data-v-d5e79ae0]{fill:var(--success-tertiary)}.success .content .title[data-v-d5e79ae0]{color:var(--success-primary)}.success .content .description[data-v-d5e79ae0]{color:var(--success-secondary)}.info .icon .icon[data-v-d5e79ae0]{fill:var(--info-tertiary)}.info .content .title[data-v-d5e79ae0]{color:var(--info-primary)}.info .content .description[data-v-d5e79ae0]{color:var(--info-secondary)}
`, Yh = { class: "icon" }, Mh = { class: "content" }, Ph = { class: "title" }, th = {
  key: 0,
  class: "description"
}, ch = {
  __name: "PAlert",
  props: {
    /** error | warning | success | info */
    type: {
      type: String,
      required: !0
    },
    /** Icon displayled next to title */
    icon: {
      type: String,
      default: ""
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
  setup(A) {
    const B = A, g = k(() => B.icon ? B.icon : B.type === "error" ? "ExclamationCircle" : B.type === "warning" ? "ExclamationTriangle" : B.type === "success" ? "CheckCircle" : B.type === "info" ? "InformationCircle" : "");
    return (Q, C) => (D(), o("div", {
      class: iA(["alert", A.type])
    }, [
      kA(Q.$slots, "default", {}, () => [
        w("div", Yh, [
          q(FE, { name: g.value }, null, 8, ["name"])
        ]),
        w("div", Mh, [
          w("span", Ph, V(A.title), 1),
          A.description ? (D(), o("span", th, V(A.description), 1)) : BA("", !0)
        ])
      ], !0)
    ], 2));
  }
}, mo = /* @__PURE__ */ GA(ch, [["styles", [eh]], ["__scopeId", "data-v-d5e79ae0"]]), ih = `.configurator-step.simple[data-v-d9cdea33] .header{align-items:flex-start;row-gap:1rem}@media (min-width: 640px){.configurator-step.simple[data-v-d9cdea33] .header{align-items:center}}.configurator-step.simple .inner[data-v-d9cdea33]{display:flex;flex-direction:column;row-gap:1rem}@media (min-width: 640px){.configurator-step.simple .inner[data-v-d9cdea33]{flex-direction:row;align-items:center}}.configurator-step.simple .measurement-inputs[data-v-d9cdea33]{display:flex;align-items:center;gap:.625rem}.measurement-inputs .measurement-input[data-v-d9cdea33]{width:100%;max-width:6rem}.measurement-inputs.has-errors[data-v-d9cdea33]{align-items:flex-start!important}.measurement-inputs.has-errors .separator[data-v-d9cdea33]{margin-top:.5rem}.configurator-step.simple[data-v-d9cdea33] .input::-webkit-outer-spin-button,.configurator-step.simple[data-v-d9cdea33] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple[data-v-d9cdea33] .input[type=number]{-moz-appearance:textfield}.configurator-step.simple .total[data-v-d9cdea33]{margin-left:auto;width:29%;flex-grow:1;text-align:right;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.configurator-step.simple .status-text[data-v-d9cdea33]{width:100%;text-align:right;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media (min-width: 640px){.configurator-step.simple .status-text[data-v-d9cdea33]{text-align:left}}
`;
function fw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        attention: (g) => {
          const { normalize: Q } = g;
          return Q(["Make a new choice"]);
        },
        unavailable: (g) => {
          const { normalize: Q } = g;
          return Q(["Not available"]);
        },
        minValue: (g) => {
          const { normalize: Q, interpolate: C, named: E } = g;
          return Q(["Value cannot be less than ", C(E("minValue"))]);
        },
        maxValue: (g) => {
          const { normalize: Q, interpolate: C, named: E } = g;
          return Q(["Value cannot be more than ", C(E("maxValue"))]);
        },
        required: (g) => {
          const { normalize: Q } = g;
          return Q(["Value is required"]);
        },
        total: (g) => {
          const { normalize: Q } = g;
          return Q(["Total"]);
        }
      },
      de: {
        attention: (g) => {
          const { normalize: Q } = g;
          return Q(["Weitere Option waehlen"]);
        },
        unavailable: (g) => {
          const { normalize: Q } = g;
          return Q(["Nicht verfügbar"]);
        },
        minValue: (g) => {
          const { normalize: Q, interpolate: C, named: E } = g;
          return Q(["Wert kann nicht weniger als ", C(E("minValue")), " sein"]);
        },
        maxValue: (g) => {
          const { normalize: Q, interpolate: C, named: E } = g;
          return Q(["Wert kann nicht mehr als ", C(E("maxValue")), " sein"]);
        },
        required: (g) => {
          const { normalize: Q } = g;
          return Q(["Wert erforderlich"]);
        },
        total: (g) => {
          const { normalize: Q } = g;
          return Q(["Gesamt"]);
        }
      },
      nl: {
        attention: (g) => {
          const { normalize: Q } = g;
          return Q(["Maak een nieuwe keuze"]);
        },
        unavailable: (g) => {
          const { normalize: Q } = g;
          return Q(["Niet beschikbaar"]);
        },
        minValue: (g) => {
          const { normalize: Q, interpolate: C, named: E } = g;
          return Q(["Waarde kan niet kleiner zijn dan ", C(E("minValue"))]);
        },
        maxValue: (g) => {
          const { normalize: Q, interpolate: C, named: E } = g;
          return Q(["Waarde kan niet groter zijn dan ", C(E("maxValue"))]);
        },
        required: (g) => {
          const { normalize: Q } = g;
          return Q(["Waarde is verplicht"]);
        },
        total: (g) => {
          const { normalize: Q } = g;
          return Q(["Totaal"]);
        }
      }
    }
  });
}
const ah = { class: "inner" }, Fh = { class: "title" }, rh = {
  key: 1,
  class: "separator"
}, sh = {
  key: 0,
  class: "subtitle status-text"
}, nh = {
  key: 1,
  class: "total"
}, Ko = {
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
    /** Unused, but when not present the state is bugged */
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
  emits: ["update:modelValue"],
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = Z({}), I = EB({
      width: null,
      height: null
    }), e = Z(null), Y = k(() => {
      const c = g.options.find((l) => l.code === "width"), a = g.options.find((l) => l.code === "height"), r = c && c.reversible && a && a.reversible, n = c == null ? void 0 : c.min, G = a == null ? void 0 : a.min;
      return r ? Math.min(n, G) : { width: n, height: G };
    }), M = k(() => {
      const c = g.options.find((l) => l.code === "width"), a = g.options.find((l) => l.code === "height"), r = c && c.reversible && a && a.reversible, n = c == null ? void 0 : c.max, G = a == null ? void 0 : a.max;
      return r ? Math.max(n, G) : { width: n, height: G };
    }), P = {
      width: {
        minValue: vg.withMessage(
          C("minValue", {
            minValue: typeof Y.value == "number" ? Y.value : Y.value.width
          }),
          vw(typeof Y.value == "number" ? Y.value : Y.value.width)
        ),
        required: vg.withMessage(C("required"), uw),
        maxValue: vg.withMessage(
          C("maxValue", {
            maxValue: typeof M.value == "number" ? M.value : M.value.width
          }),
          kw(typeof M.value == "number" ? M.value : M.value.width)
        )
      },
      height: {
        minValue: vg.withMessage(
          C("minValue", {
            minValue: typeof Y.value == "number" ? Y.value : Y.value.height
          }),
          vw(typeof Y.value == "number" ? Y.value : Y.value.height)
        ),
        required: vg.withMessage(C("required"), uw),
        maxValue: vg.withMessage(
          C("maxValue", {
            maxValue: typeof M.value == "number" ? M.value : M.value.height
          }),
          kw(typeof M.value == "number" ? M.value : M.value.height)
        )
      }
    }, t = Ba(P, I);
    function i(c, a) {
      if (c && a && (!t.$errors || t.$errors.length === 0)) {
        const r = c * a / 1e4;
        e.value = Number(r.toFixed(2)), E.value = [
          { code: "width", value: c },
          { code: "height", value: a }
        ];
      }
    }
    function F() {
      I.width && I.height && (!t.$errors || t.$errors.length === 0) && Q("update:modelValue", E.value);
    }
    return aA(E.value, (c) => {
      const a = c;
      a.code = g.code, Q("update:modelValue", a);
    }), LA(() => {
      var c, a, r, n;
      (c = g.modelValue) != null && c.length ? (I.width = (a = g.modelValue.find((G) => G.code === "width")) == null ? void 0 : a.value, I.height = (r = g.modelValue.find((G) => G.code === "height")) == null ? void 0 : r.value) : g.modelValue && g.modelValue.code === g.code && (E.value.value = ((n = g.modelValue) == null ? void 0 : n.value) || 1);
    }), aA(
      () => g.modelValue,
      (c) => {
        var a, r;
        c != null && c.length ? (I.width = (a = c.find((n) => n.code === "width")) == null ? void 0 : a.value, I.height = (r = c.find((n) => n.code === "height")) == null ? void 0 : r.value) : g.modelValue && g.modelValue.code === g.code && (E.value.value = (c == null ? void 0 : c.value) || 1);
      }
    ), (c, a) => (D(), MA(qE, {
      class: "configurator-step simple",
      disabled: !A.alert,
      "model-value": !!A.alert,
      "hide-toggle": "",
      "aria-title": A.ariaTitle
    }, {
      header: oA(() => [
        q(Lo, { status: A.status }, null, 8, ["status"]),
        w("div", ah, [
          w("h3", Fh, V(A.title), 1),
          w("div", {
            class: iA(["measurement-inputs", { "has-errors": y(t).$errors && y(t).$errors.length }])
          }, [
            (D(!0), o(sA, null, lg(A.options, (r, n) => {
              var G;
              return D(), o(sA, { key: n }, [
                r.code === "width" || r.code === "height" ? (D(), MA(nC, {
                  key: 0,
                  id: `measurement-input-${r.code}`,
                  modelValue: I[r.code],
                  "onUpdate:modelValue": [
                    (l) => I[r.code] = l,
                    a[0] || (a[0] = (l) => i(I.width, I.height))
                  ],
                  required: "",
                  type: "number",
                  "aria-label": r.code,
                  class: "measurement-input",
                  inline: r.unit,
                  min: r.min,
                  max: r.max,
                  placeholder: "",
                  error: y(t)[r.code].$errors ? (G = y(t)[r.code].$errors[0]) == null ? void 0 : G.$message : "",
                  onBlur: (l) => {
                    y(t)[r.code].$touch(l), F();
                  }
                }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "aria-label", "inline", "min", "max", "error", "onBlur"])) : BA("", !0),
                r.code === "width" ? (D(), o("span", rh, " x ")) : r.code === "amount" ? (D(), MA(Ro, {
                  key: 2,
                  modelValue: E.value.value,
                  "onUpdate:modelValue": a[1] || (a[1] = (l) => E.value.value = l),
                  min: r.min,
                  max: r.max || void 0
                }, null, 8, ["modelValue", "min", "max"])) : BA("", !0)
              ], 64);
            }), 128))
          ], 2)
        ]),
        A.status === "attention" ? (D(), o("span", sh, V(A.attentionText), 1)) : BA("", !0),
        e.value ? (D(), o("span", nh, V(A.totalPrefix || y(C)("total")) + ": " + V(e.value) + " m² ", 1)) : BA("", !0)
      ]),
      default: oA(() => [
        A.alert ? (D(), MA(mo, zg(sB({ key: 0 }, A.alert)), null, 16)) : BA("", !0)
      ]),
      _: 1
    }, 8, ["disabled", "model-value", "aria-title"]));
  }
};
typeof fw == "function" && fw(Ko);
const hh = /* @__PURE__ */ GA(Ko, [["styles", [ih]], ["__scopeId", "data-v-d9cdea33"]]), Gh = `.label[data-v-0040a87c]{display:inline-block;border-radius:.25rem;padding:.125rem .5rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.small[data-v-0040a87c]{padding-left:.375rem;padding-right:.375rem;font-size:.75rem;line-height:1rem}.blue[data-v-0040a87c]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.green[data-v-0040a87c]{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.gray[data-v-0040a87c]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.orange[data-v-0040a87c]{--tw-bg-opacity: 1;background-color:rgb(255 237 213 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(194 65 12 / var(--tw-text-opacity))}.purple[data-v-0040a87c]{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.red[data-v-0040a87c]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.yellow[data-v-0040a87c]{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}
`, Uh = {
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
  setup(A) {
    return (B, g) => (D(), o("span", {
      class: iA(["label", [{ small: A.small }, A.color]])
    }, [
      kA(B.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, yo = /* @__PURE__ */ GA(Uh, [["styles", [Gh]], ["__scopeId", "data-v-0040a87c"]]), lh = `.labels[data-v-d560dad8]{position:absolute;top:.75rem;right:.75rem;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}[data-v-d560dad8] .image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.amount[data-v-d560dad8]{margin-top:2.75rem;display:flex;flex-direction:column;align-items:center;row-gap:.5rem}.amount span[data-v-d560dad8]{font-size:.875rem;line-height:1.25rem}
`;
function Jw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        productPhoto: (g) => {
          const { normalize: Q } = g;
          return Q(["product photo"]);
        }
      },
      de: {
        productPhoto: (g) => {
          const { normalize: Q } = g;
          return Q(["produktbild"]);
        }
      },
      nl: {
        productPhoto: (g) => {
          const { normalize: Q } = g;
          return Q(["productafbeelding"]);
        }
      }
    }
  });
}
const Hh = {
  key: 0,
  class: "amount"
}, dh = {
  key: 1,
  class: "labels"
}, po = {
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
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = k({
      get: () => g.amount,
      set: (I) => {
        Q("update:amount", I);
      }
    });
    return (I, e) => (D(), o(sA, null, [
      A.selected && A.editAmount ? (D(), o("div", Hh, [
        w("span", null, V(A.amountLabel), 1),
        q(Ro, {
          modelValue: E.value,
          "onUpdate:modelValue": e[0] || (e[0] = (Y) => E.value = Y),
          onClick: e[1] || (e[1] = DQ(() => {
          }, ["stop"]))
        }, null, 8, ["modelValue"])
      ])) : BA("", !0),
      A.labels.length && !A.editAmount ? (D(), o("div", dh, [
        (D(!0), o(sA, null, lg(A.labels, (Y, M) => (D(), o(sA, { key: M }, [
          Y.text ? (D(), MA(yo, {
            key: 0,
            color: Y.color,
            small: ""
          }, {
            default: oA(() => [
              dA(V(Y.text), 1)
            ]),
            _: 2
          }, 1032, ["color"])) : BA("", !0)
        ], 64))), 128))
      ])) : BA("", !0),
      A.image && !A.editAmount ? (D(), MA(ko, {
        key: 2,
        image: A.image,
        alt: `${A.title} ${y(C)("productPhoto")}`,
        width: "280"
      }, null, 8, ["image", "alt"])) : BA("", !0)
    ], 64));
  }
};
typeof Jw == "function" && Jw(po);
const uh = /* @__PURE__ */ GA(po, [["styles", [lh]], ["__scopeId", "data-v-d560dad8"]]), vh = `.information[data-v-228d41a1],.custom-value[data-v-228d41a1]{display:flex;align-items:center;justify-content:space-between;font-size:.75rem;line-height:1rem}.custom-value[data-v-228d41a1]{gap:1rem}.custom-value[data-v-228d41a1] .input-container,.custom-value[data-v-228d41a1] .button{width:100%;max-width:7.25rem}.information .delivery[data-v-228d41a1]{display:flex;align-items:center;-moz-column-gap:.25rem;column-gap:.25rem;--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.delivery .icon[data-v-228d41a1]{height:1rem;width:1rem}.information .price[data-v-228d41a1]{margin-left:auto;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.price .price-per[data-v-228d41a1]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.not-available[data-v-228d41a1]{display:flex;align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem;color:var(--error-secondary)}.not-available .icon[data-v-228d41a1]{height:1rem;width:1rem}
`;
function Tw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        continue: (g) => {
          const { normalize: Q } = g;
          return Q(["Continue"]);
        }
      },
      de: {
        continue: (g) => {
          const { normalize: Q } = g;
          return Q(["Weiter"]);
        }
      },
      nl: {
        continue: (g) => {
          const { normalize: Q } = g;
          return Q(["Doorgaan"]);
        }
      }
    }
  });
}
const kh = {
  key: 0,
  class: "not-available"
}, fh = {
  key: 1,
  class: "custom-value"
}, Jh = {
  key: 2,
  class: "information"
}, Th = {
  key: 0,
  class: "delivery"
}, Oh = { class: "delivery-time" }, zh = {
  key: 1,
  class: "price"
}, jh = {
  key: 0,
  class: "price-per"
}, xo = {
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
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = Z(1), I = k({
      get: () => g.customInput.value,
      set: (Y) => {
        E.value = Number(Y);
      }
    });
    function e() {
      E.value && E.value > 0 && Q("update:customValue", E);
    }
    return (Y, M) => A.disabled && A.notAvailableMessage ? (D(), o("div", kh, [
      q(DB, { name: "NoSymbol" }),
      w("span", null, V(A.notAvailableMessage), 1)
    ])) : A.customInput.value && A.customInput.unit && !A.disabled && !A.notAvailableMessage ? (D(), o("div", fh, [
      q(nC, {
        id: "custom-value",
        modelValue: I.value,
        "onUpdate:modelValue": M[0] || (M[0] = (P) => I.value = P),
        inline: A.customInput.unit,
        required: ""
      }, null, 8, ["modelValue", "inline"]),
      q(AB, {
        variant: "primary",
        onClick: DQ(e, ["stop"])
      }, {
        default: oA(() => [
          dA(V(A.customInput.buttonText || y(C)("continue")), 1)
        ]),
        _: 1
      })
    ])) : (D(), o("div", Jh, [
      A.deliveryTime ? (D(), o("span", Th, [
        q(DB, { name: "Truck" }),
        w("span", Oh, V(A.deliveryTime) + " " + V(A.deliveryTimeText), 1)
      ])) : BA("", !0),
      A.price ? (D(), o("span", zh, [
        dA(" € " + V(A.price) + " ", 1),
        A.pricePer ? (D(), o("span", jh, " / " + V(A.pricePer), 1)) : BA("", !0)
      ])) : BA("", !0)
    ]));
  }
};
typeof Tw == "function" && Tw(xo);
const Nh = /* @__PURE__ */ GA(xo, [["styles", [vh]], ["__scopeId", "data-v-228d41a1"]]), Sh = `.option-card[data-v-ec4f9cc4]{display:flex;min-height:16.5rem;width:17.5rem;cursor:pointer;justify-content:center;overflow:hidden;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));outline-style:solid;outline-width:1px;outline-color:#d1d5db}.option-card[data-v-ec4f9cc4]:hover,.option-card[data-v-ec4f9cc4]:focus{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.option-card.selected[data-v-ec4f9cc4]{outline-width:.1875rem;outline-color:#2563eb}.option-card.disabled[data-v-ec4f9cc4]{cursor:default;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.option-card.disabled[data-v-ec4f9cc4]:hover{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.option-card.disabled .header[data-v-ec4f9cc4],.option-card.disabled .content[data-v-ec4f9cc4]{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.option-card .inner[data-v-ec4f9cc4]{width:100%}.no-option[data-v-ec4f9cc4]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.no-option[data-v-ec4f9cc4] .icon{margin-bottom:1rem;height:3.5rem;width:3.5rem;stroke:#9ca3af}.no-option h3[data-v-ec4f9cc4]{font-size:.875rem;line-height:1.25rem}.header[data-v-ec4f9cc4]{position:relative;display:flex;height:10.25rem;width:100%;justify-content:center;border-top-left-radius:.25rem;border-top-right-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.option-card .content[data-v-ec4f9cc4]{padding:1rem 1rem .75rem}.content .title[data-v-ec4f9cc4]{padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.content .description[data-v-ec4f9cc4]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.option-card .footer[data-v-ec4f9cc4]{padding:1rem;padding-top:0;font-size:.875rem;line-height:1.25rem}
`;
function Ow(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        days: (g) => {
          const { normalize: Q, plural: C } = g;
          return C([Q(["day"]), Q(["days"])]);
        },
        perUnit: (g) => {
          const { normalize: Q } = g;
          return Q(["pc"]);
        },
        amount: (g) => {
          const { normalize: Q } = g;
          return Q(["Amount"]);
        }
      },
      de: {
        days: (g) => {
          const { normalize: Q, plural: C } = g;
          return C([Q(["Tag"]), Q(["Tage"])]);
        },
        perUnit: (g) => {
          const { normalize: Q } = g;
          return Q(["ei"]);
        },
        amount: (g) => {
          const { normalize: Q } = g;
          return Q(["Anzahl"]);
        }
      },
      nl: {
        days: (g) => {
          const { normalize: Q, plural: C } = g;
          return C([Q(["dag"]), Q(["dagen"])]);
        },
        perUnit: (g) => {
          const { normalize: Q } = g;
          return Q(["st"]);
        },
        amount: (g) => {
          const { normalize: Q } = g;
          return Q(["Aantal"]);
        }
      }
    }
  });
}
const Rh = {
  key: 0,
  class: "no-option"
}, Lh = {
  key: 1,
  class: "inner"
}, mh = { class: "header" }, Kh = { class: "content" }, yh = {
  key: 0,
  class: "title"
}, ph = { class: "description" }, xh = { class: "footer" }, Wo = {
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
      default: "days"
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
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = Z(!1), I = k(() => g.deliveryTimeText !== "" ? g.deliveryTimeText : C("days", g.deliveryTime)), e = k(() => {
      switch (g.pricePer) {
        case "unit":
          return C("perUnit");
        case "meter":
          return "m";
        default:
          return "m²";
      }
    }), Y = k({
      get: () => g.modelValue,
      set: (F) => {
        g.customInput.value || Q("update:modelValue", F);
      }
    }), M = k({
      get: () => g.amount,
      set: (F) => {
        Q("update:amount", F);
      }
    }), P = k(() => g.amountLabel ? g.amountLabel : C("amount")), t = k(() => typeof M.value == "number" && M.value > 0);
    function i(F) {
      g.disabled || (Y.value = g.customInput.value && !F || !Y.value, E.value = t.value ? !E.value : !1, F && Q("update:customValue", F));
    }
    return LA(() => {
      g.amount > 0 && g.modelValue && (E.value = !0);
    }), aA(
      () => g.amount,
      (F, c) => {
        !c && F && (E.value = !0);
      }
    ), (F, c) => (D(), o("div", {
      class: iA(["option-card", { selected: Y.value, disabled: A.disabled }]),
      tabindex: "0",
      onClick: c[2] || (c[2] = (a) => A.customInput.value ? null : i()),
      onKeyup: c[3] || (c[3] = YB((a) => A.customInput.value ? null : i(), ["enter"]))
    }, [
      A.noOption ? (D(), o("div", Rh, [
        q(DB, { name: "NoSymbol" }),
        w("h3", null, V(A.noOptionText), 1)
      ])) : (D(), o("div", Lh, [
        w("header", mh, [
          kA(F.$slots, "header", {}, () => [
            q(uh, {
              selected: Y.value,
              "amount-label": P.value,
              image: A.image,
              "edit-amount": E.value,
              amount: M.value,
              labels: A.labels,
              title: A.title,
              "onUpdate:amount": c[0] || (c[0] = (a) => Q("update:amount", a))
            }, null, 8, ["selected", "amount-label", "image", "edit-amount", "amount", "labels", "title"])
          ], !0)
        ]),
        w("div", Kh, [
          kA(F.$slots, "content", {}, () => [
            A.title ? (D(), o("h3", yh, V(A.title), 1)) : BA("", !0),
            w("p", ph, V(A.description), 1)
          ], !0)
        ]),
        w("footer", xh, [
          kA(F.$slots, "footer", {}, () => [
            q(Nh, {
              "delivery-time": A.deliveryTime,
              price: A.price,
              "price-per": e.value,
              "delivery-time-text": I.value,
              "custom-input": A.customInput,
              disabled: A.disabled,
              "not-available-message": A.notAvailableMessage,
              "onUpdate:customValue": c[1] || (c[1] = (a) => i(a))
            }, null, 8, ["delivery-time", "price", "price-per", "delivery-time-text", "custom-input", "disabled", "not-available-message"])
          ], !0)
        ])
      ]))
    ], 34));
  }
};
typeof Ow == "function" && Ow(Wo);
const Wh = /* @__PURE__ */ GA(Wo, [["styles", [Sh]], ["__scopeId", "data-v-ec4f9cc4"]]), bh = `.overlay[data-v-172236da]{position:absolute;top:0;bottom:0;z-index:10;height:100%;width:100%}.overlay.blur[data-v-172236da]{background-color:transparent!important;--tw-blur: blur(16px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}
`, Vh = {
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
    blur: Boolean
  },
  setup(A) {
    return (B, g) => (D(), o("div", {
      class: iA(["overlay", { blur: A.blur }]),
      style: Bg({ background: `rgba(${A.color}, ${A.opacity / 100})` })
    }, [
      kA(B.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, Zh = /* @__PURE__ */ GA(Vh, [["styles", [bh]], ["__scopeId", "data-v-172236da"]]), qh = `.configurator-step.options[data-v-8cc30fed] .content{padding-right:0}@media (min-width: 640px){.configurator-step.options[data-v-8cc30fed] .content{padding-right:1.5rem}}.configurator-step.options[data-v-8cc30fed] .header .state-indicator{display:none}@media (min-width: 640px){.configurator-step.options[data-v-8cc30fed] .header .state-indicator{display:flex}}.configurator-step.options .option-container[data-v-8cc30fed]{display:flex;gap:1rem;overflow-x:scroll;padding:.25rem}@media (min-width: 640px){.configurator-step.options .option-container[data-v-8cc30fed]{overflow:visible;padding-left:0;padding-right:0}.option-container.show-all[data-v-8cc30fed]{flex-wrap:wrap}}.option-container .option[data-v-8cc30fed]{position:relative;display:flex}@media (min-width: 640px){.option-container .option[data-v-8cc30fed]{min-width:0px}}.option-container .option[data-v-8cc30fed]:last-child{margin-right:1rem}@media (min-width: 640px){.option-container .option[data-v-8cc30fed]:last-child{margin-right:0}}.option.hide[data-v-8cc30fed]{display:flex}@media (min-width: 640px){.option.hide[data-v-8cc30fed]{display:none}}.option .option-card[data-v-8cc30fed]{flex-shrink:0}@media (min-width: 640px){.option .option-card[data-v-8cc30fed]{flex-shrink:1}}.option-container .overlay[data-v-8cc30fed]{right:0;bottom:0;display:none;height:100%;width:100%;cursor:pointer;align-items:center;justify-content:center;border-radius:.5rem;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){.option-container .overlay[data-v-8cc30fed]{display:flex}}.configurator-step.options .subtitle[data-v-8cc30fed]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.configurator-step.options .alert[data-v-8cc30fed]{margin-top:1rem;margin-right:1rem}@media (min-width: 640px){.configurator-step.options .alert[data-v-8cc30fed]{margin-right:0}}
`;
function zw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        attention: (g) => {
          const { normalize: Q } = g;
          return Q(["Make a new choice"]);
        },
        unavailable: (g) => {
          const { normalize: Q } = g;
          return Q(["Not available"]);
        }
      },
      de: {
        attention: (g) => {
          const { normalize: Q } = g;
          return Q(["Weitere Option waehlen"]);
        },
        unavailable: (g) => {
          const { normalize: Q } = g;
          return Q(["Nicht verfügbar"]);
        }
      },
      nl: {
        attention: (g) => {
          const { normalize: Q } = g;
          return Q(["Maak een nieuwe keuze"]);
        },
        unavailable: (g) => {
          const { normalize: Q } = g;
          return Q(["Niet beschikbaar"]);
        }
      }
    }
  });
}
const Xh = { class: "title" }, _h = {
  key: 0,
  class: "subtitle"
}, $h = {
  key: 1,
  class: "subtitle"
}, bo = {
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
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = Z(!1), I = Z([]), e = Z([]), Y = Z([]), M = k({
      get: () => g.open,
      set: (a) => {
        Q("update:accordionState", a);
      }
    }), P = k(() => e.value.map((a, r) => {
      if (!a)
        return null;
      if (g.options[r] && g.options[r].noOption)
        return g.options[r].noOptionText;
      let n = "";
      return Y.value[r] && (n += `${Y.value[r]}x `), n += g.options[r].title, n;
    }).filter((a) => !!a).join(", "));
    function t(a) {
      g.multiple || (I.value = []), (I.value.length === 0 || I.value.some((G) => G.code === g.options[a].code) === !1) && I.value.push({ code: g.options[a].code, value: Y.value[a] }), e.value[a] = !e.value[a];
      const r = I.value.findIndex((G) => G.code === "no-option");
      if (r > -1 && g.options[a].noOption)
        e.value.forEach((G, l) => {
          l !== a && (e.value[l] = !1, I.value = I.value.filter((u) => u.code === "no-option"));
        });
      else if (!g.options[a].noOption) {
        const G = g.options.findIndex((l) => l.noOption);
        G > -1 && (e.value[G] = !1), r > -1 ? I.value.splice(r, 1) : e.value[a] === !1 && I.value.some((l) => l.code === g.options[a].code) && (I.value = I.value.filter(
          (l) => l.code !== g.options[a].code
        ));
      }
      const n = I.value.length === 1 ? I.value[0] : I.value;
      typeof n == "object" && !n.value && delete n.value, Q("update:modelValue", n);
    }
    function i() {
      g.options.forEach((a) => {
        var r;
        !a.noOption && a.code === ((r = g.modelValue) == null ? void 0 : r.code) || Array.isArray(g.modelValue) && g.modelValue.some((n) => n.code === a.code) ? e.value.push(!0) : e.value.push(!1);
      }), g.code === "accessories" && g.options.forEach((a) => {
        var r, n;
        if (a.code === ((r = g.modelValue) == null ? void 0 : r.code) && ((n = g.modelValue) != null && n.value))
          Y.value.push(g.modelValue.value || a.amount || 1);
        else if (Array.isArray(g.modelValue)) {
          const G = g.modelValue.find((l) => l.code === a.code);
          G ? Y.value.push(G.value || a.amount || 1) : Y.value.push(a.amount || 1);
        } else
          Y.value.push(a.amount || 1);
      });
    }
    function F(a) {
      return g.code === "accessories" && a > 3 && !E.value;
    }
    function c(a, r) {
      Y.value[a] = r;
      const n = I.value.filter((l) => l.code !== g.options[a].code), G = { code: g.options[a].code, value: r };
      I.value = [...n, G], Q("update:modelValue", I.value);
    }
    return i(), aA(
      () => g.modelValue,
      () => {
        e.value = [], Y.value = [], i();
      }
    ), (a, r) => (D(), MA(qE, {
      modelValue: M.value,
      "onUpdate:modelValue": r[1] || (r[1] = (n) => M.value = n),
      class: "configurator-step options",
      "aria-title": A.ariaTitle
    }, {
      header: oA(() => [
        q(Lo, { status: A.status }, null, 8, ["status"]),
        w("h3", Xh, V(A.title), 1),
        A.status === "attention" ? (D(), o("span", _h, V(A.attentionText || y(C)("attention")), 1)) : BA("", !0),
        P.value ? (D(), o("span", $h, V(P.value), 1)) : BA("", !0)
      ]),
      default: oA(() => [
        w("div", {
          class: iA(["option-container", {
            "show-all": A.code === "accessories" && E.value || A.code !== "accessories"
          }])
        }, [
          (D(!0), o(sA, null, lg(A.options, (n, G) => (D(), o("div", {
            key: G,
            class: iA(["option", { hide: F(G) }])
          }, [
            q(Wh, sB(n, {
              disabled: n.available === !1,
              "not-available-message": n.available === !1 ? A.unvailableText || y(C)("unavailable") : "",
              "model-value": e.value[G],
              amount: A.code === "accessories" ? Y.value[G] : void 0,
              "onUpdate:amount": (l) => c(G, l),
              "onUpdate:customValue": (l) => c(G, l),
              "onUpdate:modelValue": (l) => t(G)
            }), null, 16, ["disabled", "not-available-message", "model-value", "amount", "onUpdate:amount", "onUpdate:customValue", "onUpdate:modelValue"]),
            G === 3 && !E.value && A.code === "accessories" ? (D(), MA(Zh, {
              key: 0,
              onClick: r[0] || (r[0] = DQ((l) => E.value = !0, ["stop"]))
            }, {
              default: oA(() => [
                dA(" +" + V(A.options.length - 3), 1)
              ]),
              _: 1
            })) : BA("", !0)
          ], 2))), 128))
        ], 2),
        A.alert ? (D(), MA(mo, zg(sB({ key: 0 }, A.alert)), null, 16)) : BA("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "aria-title"]));
  }
};
typeof zw == "function" && zw(bo);
const AG = /* @__PURE__ */ GA(bo, [["styles", [qh]], ["__scopeId", "data-v-8cc30fed"]]), BG = `.delivery-options[data-v-e1d5493c]{margin-top:.125rem;width:100%;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.delivery-options[data-v-e1d5493c]{margin-top:.5rem;border-radius:1rem}}@media (min-width: 768px){.delivery-options[data-v-e1d5493c]{padding:1.5rem}}.header[data-v-e1d5493c]{margin-bottom:1.5rem;display:flex;justify-content:space-between}.header .title[data-v-e1d5493c]{font-weight:500}.header .hint[data-v-e1d5493c]{display:none;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (min-width: 768px){.header .hint[data-v-e1d5493c]{display:flex}}.content[data-v-e1d5493c]{display:flex;flex-direction:column;flex-wrap:wrap;gap:1rem}@media (min-width: 768px){.content[data-v-e1d5493c]{flex-direction:row;gap:1.5rem}}.content .option[data-v-e1d5493c]{position:relative;display:flex;flex-direction:column}.content .option[data-v-e1d5493c]:not(.last){border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));padding-bottom:1rem}@media (min-width: 768px){.content .option[data-v-e1d5493c]:not(.last){border-bottom-width:0px;padding-bottom:0}.content .option[data-v-e1d5493c]:not(:first-child){border-left-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));padding-left:1.0625rem}}.option.hide[data-v-e1d5493c]{display:none}.option .day[data-v-e1d5493c],.option .cost[data-v-e1d5493c],.option .no-cost[data-v-e1d5493c]{font-size:.875rem;line-height:1.25rem}.option .cost[data-v-e1d5493c],.option .no-cost[data-v-e1d5493c]{position:absolute;top:0;right:0}@media (min-width: 768px){.option .cost[data-v-e1d5493c],.option .no-cost[data-v-e1d5493c]{position:relative}}.option .day[data-v-e1d5493c]{margin-bottom:.25rem;display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:.5rem;column-gap:.5rem;row-gap:.25rem;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.option .date[data-v-e1d5493c]{font-size:1.25rem;line-height:1.75rem;font-weight:500}@media (min-width: 768px){.option .date[data-v-e1d5493c]{margin-bottom:.75rem}}.option .cost[data-v-e1d5493c]{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.option .no-cost[data-v-e1d5493c]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (min-width: 768px){.content .button[data-v-e1d5493c]{display:none}}
`;
function jw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        deliveryOptions: (g) => {
          const { normalize: Q } = g;
          return Q(["Available delivery dates"]);
        },
        noExtraCost: (g) => {
          const { normalize: Q } = g;
          return Q(["No extra cost"]);
        },
        makeYourChoiceNextStep: (g) => {
          const { normalize: Q } = g;
          return Q(["Make your choice in the next step"]);
        },
        seeMore: (g) => {
          const { normalize: Q } = g;
          return Q(["See all dates"]);
        },
        seeLess: (g) => {
          const { normalize: Q } = g;
          return Q(["See less dates"]);
        },
        tomorrow: (g) => {
          const { normalize: Q } = g;
          return Q(["Tomorrow"]);
        },
        fastest: (g) => {
          const { normalize: Q } = g;
          return Q(["Fastest"]);
        },
        cheapest: (g) => {
          const { normalize: Q } = g;
          return Q(["Cheapest"]);
        }
      },
      de: {
        deliveryOptions: (g) => {
          const { normalize: Q } = g;
          return Q(["Verfälgbare Lieferdaten"]);
        },
        noExtraCost: (g) => {
          const { normalize: Q } = g;
          return Q(["Keine Zusatzkosten"]);
        },
        makeYourChoiceNextStep: (g) => {
          const { normalize: Q } = g;
          return Q(["Wählen Sie Ihre Wahl in der nächsten Schritt"]);
        },
        seeMore: (g) => {
          const { normalize: Q } = g;
          return Q(["Alle Daten anzeigen"]);
        },
        seeLess: (g) => {
          const { normalize: Q } = g;
          return Q(["Weniger Daten anzeigen"]);
        },
        tomorrow: (g) => {
          const { normalize: Q } = g;
          return Q(["Morgen"]);
        },
        fastest: (g) => {
          const { normalize: Q } = g;
          return Q(["Schnellste"]);
        },
        cheapest: (g) => {
          const { normalize: Q } = g;
          return Q(["Aam billigsten"]);
        }
      },
      nl: {
        deliveryOptions: (g) => {
          const { normalize: Q } = g;
          return Q(["Beschikbare leverdatums"]);
        },
        noExtraCost: (g) => {
          const { normalize: Q } = g;
          return Q(["Geen toeslag"]);
        },
        makeYourChoiceNextStep: (g) => {
          const { normalize: Q } = g;
          return Q(["Maak je keuze in de volgende stap"]);
        },
        seeMore: (g) => {
          const { normalize: Q } = g;
          return Q(["Bekijk alle datums"]);
        },
        seeLess: (g) => {
          const { normalize: Q } = g;
          return Q(["Bekijk minder datums"]);
        },
        tomorrow: (g) => {
          const { normalize: Q } = g;
          return Q(["Morgen"]);
        },
        fastest: (g) => {
          const { normalize: Q } = g;
          return Q(["Snelste"]);
        },
        cheapest: (g) => {
          const { normalize: Q } = g;
          return Q(["Voordeligst"]);
        }
      }
    }
  });
}
const gG = { class: "delivery-options" }, QG = { class: "header" }, CG = { class: "title" }, EG = { class: "hint" }, IG = { class: "content" }, wG = { class: "day" }, DG = { class: "date" }, oG = {
  key: 0,
  class: "cost"
}, eG = {
  key: 1,
  class: "no-cost"
}, Vo = {
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
  setup(A) {
    const B = A, { t: g } = xA(), Q = Z(!1), C = k(() => B.title ? B.title : g("deliveryOptions")), E = k(() => B.noCost ? B.noCost : g("noExtraCost")), I = k(
      () => B.makeYourChoice ? B.makeYourChoice : g("makeYourChoiceNextStep")
    ), e = k(() => B.buttonTextShow ? B.buttonTextShow : g("seeMore")), Y = k(() => B.buttonTextHide ? B.buttonTextHide : g("seeLess"));
    function M() {
      window.innerWidth >= 768 ? Q.value = !0 : window.innerWidth < 768 && (Q.value = !1);
    }
    return QB(() => {
      window.addEventListener("resize", M);
    }), tC(() => {
      window.removeEventListener("resize", M);
    }), M(), (P, t) => (D(), o("div", gG, [
      w("div", QG, [
        w("h2", CG, V(C.value), 1),
        w("span", EG, "*" + V(I.value), 1)
      ]),
      w("div", IG, [
        (D(!0), o(sA, null, lg(A.items, (i, F) => (D(), o("div", {
          key: F,
          class: iA(["option", {
            hide: F > 0 && !Q.value && !i.cheapest,
            last: F === 1 && !Q.value || F === A.items.length - 1 || F > 1 && i.cheapest && !Q.value
          }])
        }, [
          w("span", wG, [
            dA(V(i.day) + " ", 1),
            i.label ? (D(), MA(yo, {
              key: 0,
              color: i.label.color,
              small: ""
            }, {
              default: oA(() => [
                dA(V(i.label.text), 1)
              ]),
              _: 2
            }, 1032, ["color"])) : BA("", !0)
          ]),
          w("span", DG, V(i.date), 1),
          i.cost ? (D(), o("span", oG, " + € " + V(i.cost), 1)) : (D(), o("span", eG, V(E.value), 1))
        ], 2))), 128)),
        q(AB, {
          variant: "tertiary",
          onClick: t[0] || (t[0] = (i) => Q.value = !Q.value)
        }, {
          default: oA(() => [
            dA(V(Q.value ? Y.value : e.value), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
};
typeof jw == "function" && jw(Vo);
const YG = /* @__PURE__ */ GA(Vo, [["styles", [BG]], ["__scopeId", "data-v-e1d5493c"]]), MG = `.loader[data-v-85cde143]{height:1.5rem;width:1.5rem}@keyframes spin-85cde143{to{transform:rotate(360deg)}}.loader[data-v-85cde143]{animation:spin-85cde143 1s linear infinite;border-radius:9999px;border-width:.1875rem}.loader.primary[data-v-85cde143]{border-color:rgb(219 234 254 / var(--tw-border-opacity));--tw-border-opacity: 1;border-top-color:rgb(37 99 235 / var(--tw-border-opacity))}.loader.secondary[data-v-85cde143]{border-color:#fff6;border-top-color:#fff}
`, PG = {
  __name: "PLoader",
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(A) {
    return (B, g) => (D(), o("div", {
      class: iA(["loader", A.color])
    }, null, 2));
  }
}, tG = /* @__PURE__ */ GA(PG, [["styles", [MG]], ["__scopeId", "data-v-85cde143"]]), cG = `.configurator[data-v-ef04a05d] .configurator-step .header{overflow:hidden}.configurator[data-v-ef04a05d] .configurator-step .header .title{margin-right:.5rem;width:100%;overflow:hidden;text-overflow:ellipsis}@media (min-width: 640px){.configurator[data-v-ef04a05d] .configurator-step .header .title{width:16rem;max-width:16rem;white-space:nowrap}}.configurator[data-v-ef04a05d] .configurator-step .status{margin-right:1rem}.configurator-step[data-v-ef04a05d] .subtitle{margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}@media (min-width: 640px){.configurator-step[data-v-ef04a05d] .subtitle{margin-left:0}}.loader[data-v-ef04a05d]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem}
`, iG = { class: "configurator" }, aG = {
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
  setup(A, { emit: B }) {
    const g = A, Q = B, C = k(() => g.modelValue), E = k({
      get: () => g.accordionState,
      set: (Y) => {
        Q("update:accordionState", Y);
      }
    });
    function I(Y, M) {
      E.value[M] = Y, E.value.forEach((P, t) => {
        t !== M && (E.value[t] = !1);
      });
    }
    function e(Y, M) {
      C.value.options[M] = Y, Q("update:modelValue", { code: g.productCode, ...C.value });
    }
    return (Y, M) => (D(), o("div", iG, [
      q(K1, {
        modelValue: E.value,
        "onUpdate:modelValue": M[0] || (M[0] = (P) => E.value = P),
        items: A.template
      }, {
        default: oA(({ item: P, index: t, open: i }) => [
          P.type === "simple" ? (D(), MA(hh, sB({
            key: 0,
            modelValue: C.value.options[t],
            "onUpdate:modelValue": (F) => C.value.options[t] = F
          }, { ...P }, {
            "aria-title": P.title.toLowerCase().replace(" ", "-"),
            "onUpdate:modelValue": (F) => e(F, t)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "aria-title"])) : P.type === "options" || P.type === "options-multiple" ? (D(), MA(AG, sB({
            key: 1,
            modelValue: C.value.options[t],
            "onUpdate:modelValue": (F) => C.value.options[t] = F
          }, { ...P }, {
            open: i,
            multiple: P.type === "options-multiple",
            "aria-title": P.title.toLowerCase().replace(" ", "-"),
            "onUpdate:modelValue": e,
            "onUpdate:accordionState": (F) => I(F, t)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "open", "multiple", "aria-title", "onUpdate:accordionState"])) : BA("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "items"]),
      A.deliveryOptions.length ? (D(), MA(YG, {
        key: 0,
        items: A.deliveryOptions
      }, null, 8, ["items"])) : BA("", !0),
      A.loading ? (D(), MA(tG, { key: 1 })) : BA("", !0)
    ]));
  }
}, FG = /* @__PURE__ */ GA(aG, [["styles", [cG]], ["__scopeId", "data-v-ef04a05d"]]), rG = `.reference-input[data-v-de6c2513] .icon{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity))}
`;
function Nw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        product_reference: (g) => {
          const { normalize: Q } = g;
          return Q(["Product reference (optional)"]);
        }
      },
      de: {
        product_reference: (g) => {
          const { normalize: Q } = g;
          return Q(["Produktreferenz (optional)"]);
        }
      },
      nl: {
        product_reference: (g) => {
          const { normalize: Q } = g;
          return Q(["Productreferentie (optioneel)"]);
        }
      }
    }
  });
}
const Zo = {
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
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = k({
      get: () => g.value,
      set: (e) => {
        Q("update:model-value", e);
      }
    }), I = k(
      () => g.placeholder ? g.placeholder : C("product_reference")
    );
    return (e, Y) => (D(), MA(nC, sB({
      id: "reference-input",
      modelValue: E.value,
      "onUpdate:modelValue": Y[0] || (Y[0] = (M) => E.value = M),
      class: "reference-input",
      type: "text",
      icon: { name: "Pencil" },
      large: ""
    }, g, { placeholder: I.value }), null, 16, ["modelValue", "placeholder"]));
  }
};
typeof Nw == "function" && Nw(Zo);
const Sw = /* @__PURE__ */ GA(Zo, [["styles", [rG]], ["__scopeId", "data-v-de6c2513"]]);
function mC(A, B = "nl-NL", g = "EUR") {
  let Q = A;
  return typeof Q != "number" && (Q = parseFloat(A.replace(",", "."))), new Intl.NumberFormat(B, { style: "currency", currency: g }).format(Q);
}
const sG = `[data-v-b7f9e0f8] .header{display:flex;flex-wrap:wrap}@media (min-width: 640px){[data-v-b7f9e0f8] .header{gap:1.5rem}}.header .product-image[data-v-b7f9e0f8]{height:auto;width:4.75rem!important}@media (min-width: 640px){.header .product-image[data-v-b7f9e0f8]{width:8.5rem!important}}.product-image .image[data-v-b7f9e0f8]{height:4.75rem;width:4.75rem}@media (min-width: 640px){.product-image .image[data-v-b7f9e0f8]{width:8.5rem!important}}.header .title[data-v-b7f9e0f8]{margin-bottom:.5rem}.header .subtitle[data-v-b7f9e0f8]{margin-bottom:1rem;display:flex;gap:.625rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.subtitle .icon[data-v-b7f9e0f8]{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity))}.header .reference[data-v-b7f9e0f8]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.header .reference .value[data-v-b7f9e0f8]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.header .inner[data-v-b7f9e0f8]{width:100%;max-width:calc(100% - 4.75rem);flex-shrink:1}@media (min-width: 640px){.header .inner[data-v-b7f9e0f8]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-b7f9e0f8]{display:none;max-width:30rem}@media (min-width: 640px){.header .inner .reference-input[data-v-b7f9e0f8]{display:flex}}.header>.reference-input[data-v-b7f9e0f8]{width:100%}@media (min-width: 640px){.header>.reference-input[data-v-b7f9e0f8]{display:none}}[data-v-b7f9e0f8] .footer{display:flex;align-items:center;justify-content:space-between}@media (min-width: 768px){[data-v-b7f9e0f8] .footer{flex-wrap:wrap}}[data-v-b7f9e0f8] .footer .specifications{display:none}@media (min-width: 640px){[data-v-b7f9e0f8] .footer .specifications{display:flex}}@media (min-width: 768px){[data-v-b7f9e0f8] .footer .specifications{width:100%}}@media (min-width: 1024px){[data-v-b7f9e0f8] .footer .specifications{width:auto}}[data-v-b7f9e0f8] .footer .right{margin-left:auto;display:flex;width:100%;align-items:center;justify-content:space-between;gap:1.25rem}@media (min-width: 1024px){[data-v-b7f9e0f8] .footer .right{width:auto;justify-content:normal}}.right .sub-total[data-v-b7f9e0f8]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-end}.right .sub-total .sub-price[data-v-b7f9e0f8]{display:flex;width:100%;max-width:250px;flex-wrap:wrap;gap:.5rem;font-size:.75rem;line-height:1.2rem!important;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (min-width: 640px){.right .sub-total .sub-price[data-v-b7f9e0f8]{font-size:.875rem;line-height:1.25rem}}.right .sub-total .sub-price .packaging[data-v-b7f9e0f8],.right .sub-total .sub-price .shipping[data-v-b7f9e0f8]{margin-left:auto}.sub-total .price[data-v-b7f9e0f8]{display:flex;width:100%;font-size:1.875rem;line-height:2.25rem;font-weight:700;--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}@media (min-width: 1024px){.sub-total .price[data-v-b7f9e0f8]{justify-content:flex-end}}.sub-total .price .label[data-v-b7f9e0f8]{margin-right:auto}.sub-total .price.small[data-v-b7f9e0f8]{font-size:1rem;line-height:1.5rem}@media (min-width: 640px){.sub-total .price.small[data-v-b7f9e0f8]{font-size:1.5rem;line-height:2rem}}.sub-total .price.small .decimal[data-v-b7f9e0f8]{font-size:.75rem;line-height:1rem}.price .decimal[data-v-b7f9e0f8]{vertical-align:super;font-size:1rem;line-height:1.5rem}.sub-total .excluded-from-price[data-v-b7f9e0f8]{font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}[data-v-b7f9e0f8] .footer{align-items:center;justify-content:space-between!important}[data-v-b7f9e0f8] .footer .right .add-to-cart{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[data-v-b7f9e0f8] .footer .right .add-to-cart .desktop{display:none}@media (min-width: 640px){[data-v-b7f9e0f8] .footer .right .add-to-cart .desktop{display:flex}}[data-v-b7f9e0f8] .footer .right .add-to-cart .mobile{display:flex}@media (min-width: 640px){[data-v-b7f9e0f8] .footer .right .add-to-cart .mobile{display:none}}
`;
function Rw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        reference: (g) => {
          const { normalize: Q } = g;
          return Q(["Reference"]);
        },
        add_to_cart: (g) => {
          const { normalize: Q } = g;
          return Q(["Add to cart"]);
        },
        add: (g) => {
          const { normalize: Q } = g;
          return Q(["Add"]);
        },
        price_excluding: (g) => {
          const { normalize: Q } = g;
          return Q(["excl. packaging & shipping"]);
        },
        specifications: (g) => {
          const { normalize: Q } = g;
          return Q(["Specifications"]);
        },
        shipping_costs: (g) => {
          const { normalize: Q } = g;
          return Q(["Shipping costs (from)"]);
        },
        packaging_costs: (g) => {
          const { normalize: Q } = g;
          return Q(["Packaging costs"]);
        },
        total: (g) => {
          const { normalize: Q } = g;
          return Q(["Total"]);
        }
      },
      nl: {
        reference: (g) => {
          const { normalize: Q } = g;
          return Q(["Referentie"]);
        },
        add_to_cart: (g) => {
          const { normalize: Q } = g;
          return Q(["Toevoegen aan winkelwagen"]);
        },
        add: (g) => {
          const { normalize: Q } = g;
          return Q(["Toevoegen"]);
        },
        price_excluding: (g) => {
          const { normalize: Q } = g;
          return Q(["excl. verpakking & verzending"]);
        },
        specifications: (g) => {
          const { normalize: Q } = g;
          return Q(["Aanleverspecificaties"]);
        },
        shipping_costs: (g) => {
          const { normalize: Q } = g;
          return Q(["Verzendkosten (vanaf)"]);
        },
        packaging_costs: (g) => {
          const { normalize: Q } = g;
          return Q(["Verpakkingskosten"]);
        },
        total: (g) => {
          const { normalize: Q } = g;
          return Q(["Totaal"]);
        }
      },
      de: {
        reference: (g) => {
          const { normalize: Q } = g;
          return Q(["Referenz"]);
        },
        add_to_cart: (g) => {
          const { normalize: Q } = g;
          return Q(["Zum Warenkorb hinzufügen"]);
        },
        add: (g) => {
          const { normalize: Q } = g;
          return Q(["Hinzufügen"]);
        },
        price_excluding: (g) => {
          const { normalize: Q } = g;
          return Q(["exkl. Verpackung & Versand"]);
        },
        specifications: (g) => {
          const { normalize: Q } = g;
          return Q(["Spezifikationen"]);
        },
        shipping_costs: (g) => {
          const { normalize: Q } = g;
          return Q(["Versandkosten (von)"]);
        },
        packaging_costs: (g) => {
          const { normalize: Q } = g;
          return Q(["Verpackungskosten"]);
        },
        total: (g) => {
          const { normalize: Q } = g;
          return Q(["Gesamt"]);
        }
      }
    }
  });
}
const nG = { class: "inner" }, hG = { class: "title" }, GG = {
  key: 0,
  class: "subtitle"
}, UG = {
  key: 2,
  class: "reference"
}, lG = { class: "value" }, HG = { class: "right" }, dG = {
  key: 0,
  class: "sub-total"
}, uG = {
  key: 0,
  class: "label"
}, vG = { class: "decimal" }, kG = { class: "sub-price" }, fG = { class: "label" }, JG = { class: "shipping" }, TG = { class: "sub-price" }, OG = { class: "label" }, zG = { class: "packaging" }, jG = {
  key: 1,
  class: "excluded-from-price"
}, NG = { class: "desktop" }, SG = { class: "mobile" }, qo = {
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
    /** Template for configurator */
    template: {
      type: Array,
      default: () => []
    },
    submit: {
      type: String,
      default: ""
    },
    submitIcon: {
      type: String,
      default: "ShoppingCart"
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
    /** Configuration values */
    config: {
      type: Object,
      default: () => {
      }
    },
    /** Loading state */
    loading: {
      type: Boolean,
      default: !1
    },
    /** Delivery options */
    deliveryOptions: {
      type: Array,
      default: () => []
    },
    /** Accordion state */
    accordionState: {
      type: Array,
      default: () => []
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
  emits: [
    "close",
    "update:reference",
    "update:product-config",
    "submit:product-config"
  ],
  setup(A, { emit: B }) {
    const g = A, { t: Q } = xA(), C = B, E = Z(!1), I = Z(null), e = k(() => g.submit ? g.submit : Q("add_to_cart")), Y = k(() => g.submit ? g.submit : Q("add")), M = k(() => g.priceSubtext ? g.priceSubtext : Q("price_excluding")), P = k(() => {
      if (g.product && g.product.price) {
        let [i, F] = mC(g.product.price, g.lang, g.currency).toString().split(",");
        return F && (i = `${i},`), {
          whole: i,
          decimal: F
        };
      }
      return null;
    }), t = k({
      get: () => g.config,
      set: (i) => C("update:product-config", i)
    });
    return (i, F) => (D(), MA(Jo, {
      class: "product-config-modal",
      fullscreen: "",
      "show-minimize": A.showMinimize,
      "onUpdate:modelValue": F[6] || (F[6] = (c) => C("close")),
      onMinimize: F[7] || (F[7] = (c) => E.value = c)
    }, {
      header: oA(() => [
        A.product.image ? (D(), MA(ko, {
          key: 0,
          class: "product-image",
          mobile: A.product.imageMobile,
          tablet: A.product.imageTablet,
          image: A.product.image,
          width: E.value ? 88 : 136,
          rounded: 8,
          alt: `${A.product.title} image`
        }, null, 8, ["mobile", "tablet", "image", "width", "alt"])) : BA("", !0),
        w("div", nG, [
          w("h2", hG, V(A.product.name), 1),
          !E.value && A.subTitle ? (D(), o("span", GG, [
            q(DB, { name: "Check" }),
            dA(" " + V(A.subTitle), 1)
          ])) : BA("", !0),
          !E.value && A.showReferenceField ? (D(), MA(Sw, {
            key: 1,
            id: "reference",
            modelValue: I.value,
            "onUpdate:modelValue": [
              F[0] || (F[0] = (c) => I.value = c),
              F[1] || (F[1] = (c) => C("update:reference", c))
            ]
          }, null, 8, ["modelValue"])) : E.value && I.value ? (D(), o("span", UG, [
            dA(V(i.referenceLabel) + ": ", 1),
            w("span", lG, V(I.value), 1)
          ])) : BA("", !0)
        ]),
        !E.value && A.showReferenceField ? (D(), MA(Sw, {
          key: 1,
          id: "reference",
          modelValue: I.value,
          "onUpdate:modelValue": [
            F[2] || (F[2] = (c) => I.value = c),
            F[3] || (F[3] = (c) => C("update:reference", c))
          ]
        }, null, 8, ["modelValue"])) : BA("", !0)
      ]),
      footer: oA(() => [
        A.specs ? (D(), MA(AB, {
          key: 0,
          size: "large",
          variant: "secondary",
          class: "specifications"
        }, {
          default: oA(() => [
            dA(V(y(Q)("specifications")), 1)
          ]),
          _: 1
        })) : BA("", !0),
        w("div", HG, [
          P.value ? (D(), o("div", dG, [
            w("span", {
              class: iA(["price", { small: A.extendedPricing }])
            }, [
              A.extendedPricing ? (D(), o("span", uG, V(y(Q)("total")), 1)) : BA("", !0),
              w("span", null, V(P.value.whole), 1),
              w("span", vG, V(P.value.decimal), 1)
            ], 2),
            A.extendedPricing ? (D(), o(sA, { key: 0 }, [
              w("span", kG, [
                w("span", fG, V(y(Q)("shipping_costs")), 1),
                w("span", JG, V(y(mC)(A.product.shipping, A.lang, A.currency)), 1)
              ]),
              w("span", TG, [
                w("span", OG, V(y(Q)("packaging_costs")), 1),
                w("span", zG, V(y(mC)(A.product.packaging, A.lang, A.currency)), 1)
              ])
            ], 64)) : (D(), o("span", jG, V(M.value), 1))
          ])) : BA("", !0),
          q(AB, {
            disabled: !A.canOrder,
            class: "add-to-cart",
            size: "large",
            icon: A.submitIcon,
            onClick: F[5] || (F[5] = (c) => C("submit:product-config"))
          }, {
            default: oA(() => [
              w("span", NG, V(e.value), 1),
              w("span", SG, V(Y.value), 1)
            ]),
            _: 1
          }, 8, ["disabled", "icon"])
        ])
      ]),
      default: oA(() => [
        q(FG, {
          modelValue: t.value,
          "onUpdate:modelValue": F[4] || (F[4] = (c) => t.value = c),
          template: A.template,
          "accordion-state": A.accordionState,
          loading: A.loading,
          "delivery-options": A.deliveryOptions
        }, null, 8, ["modelValue", "template", "accordion-state", "loading", "delivery-options"])
      ]),
      _: 1
    }, 8, ["show-minimize"]));
  }
};
typeof Rw == "function" && Rw(qo);
const RG = /* @__PURE__ */ GA(qo, [["styles", [sG]], ["__scopeId", "data-v-b7f9e0f8"]]);
function NB(A) {
  return Array.isArray ? Array.isArray(A) : $o(A) === "[object Array]";
}
const LG = 1 / 0;
function mG(A) {
  if (typeof A == "string")
    return A;
  let B = A + "";
  return B == "0" && 1 / A == -LG ? "-0" : B;
}
function KG(A) {
  return A == null ? "" : mG(A);
}
function uB(A) {
  return typeof A == "string";
}
function Xo(A) {
  return typeof A == "number";
}
function yG(A) {
  return A === !0 || A === !1 || pG(A) && $o(A) == "[object Boolean]";
}
function _o(A) {
  return typeof A == "object";
}
function pG(A) {
  return _o(A) && A !== null;
}
function BB(A) {
  return A != null;
}
function KC(A) {
  return !A.trim().length;
}
function $o(A) {
  return A == null ? A === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(A);
}
const xG = "Incorrect 'index' type", WG = (A) => `Invalid value for key ${A}`, bG = (A) => `Pattern length exceeds max of ${A}.`, VG = (A) => `Missing ${A} property in key`, ZG = (A) => `Property 'weight' in key '${A}' must be a positive integer`, Lw = Object.prototype.hasOwnProperty;
class qG {
  constructor(B) {
    this._keys = [], this._keyMap = {};
    let g = 0;
    B.forEach((Q) => {
      let C = A0(Q);
      this._keys.push(C), this._keyMap[C.id] = C, g += C.weight;
    }), this._keys.forEach((Q) => {
      Q.weight /= g;
    });
  }
  get(B) {
    return this._keyMap[B];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function A0(A) {
  let B = null, g = null, Q = null, C = 1, E = null;
  if (uB(A) || NB(A))
    Q = A, B = mw(A), g = rE(A);
  else {
    if (!Lw.call(A, "name"))
      throw new Error(VG("name"));
    const I = A.name;
    if (Q = I, Lw.call(A, "weight") && (C = A.weight, C <= 0))
      throw new Error(ZG(I));
    B = mw(I), g = rE(I), E = A.getFn;
  }
  return { path: B, id: g, weight: C, src: Q, getFn: E };
}
function mw(A) {
  return NB(A) ? A : A.split(".");
}
function rE(A) {
  return NB(A) ? A.join(".") : A;
}
function XG(A, B) {
  let g = [], Q = !1;
  const C = (E, I, e) => {
    if (BB(E))
      if (!I[e])
        g.push(E);
      else {
        let Y = I[e];
        const M = E[Y];
        if (!BB(M))
          return;
        if (e === I.length - 1 && (uB(M) || Xo(M) || yG(M)))
          g.push(KG(M));
        else if (NB(M)) {
          Q = !0;
          for (let P = 0, t = M.length; P < t; P += 1)
            C(M[P], I, e + 1);
        } else
          I.length && C(M, I, e + 1);
      }
  };
  return C(A, uB(B) ? B.split(".") : B, 0), Q ? g : g[0];
}
const _G = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, $G = {
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
  sortFn: (A, B) => A.score === B.score ? A.idx < B.idx ? -1 : 1 : A.score < B.score ? -1 : 1
}, A2 = {
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
}, B2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: XG,
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
var EA = {
  ...$G,
  ..._G,
  ...A2,
  ...B2
};
const g2 = /[^ ]+/g;
function Q2(A = 1, B = 3) {
  const g = /* @__PURE__ */ new Map(), Q = Math.pow(10, B);
  return {
    get(C) {
      const E = C.match(g2).length;
      if (g.has(E))
        return g.get(E);
      const I = 1 / Math.pow(E, 0.5 * A), e = parseFloat(Math.round(I * Q) / Q);
      return g.set(E, e), e;
    },
    clear() {
      g.clear();
    }
  };
}
class XE {
  constructor({
    getFn: B = EA.getFn,
    fieldNormWeight: g = EA.fieldNormWeight
  } = {}) {
    this.norm = Q2(g, 3), this.getFn = B, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(B = []) {
    this.docs = B;
  }
  setIndexRecords(B = []) {
    this.records = B;
  }
  setKeys(B = []) {
    this.keys = B, this._keysMap = {}, B.forEach((g, Q) => {
      this._keysMap[g.id] = Q;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, uB(this.docs[0]) ? this.docs.forEach((B, g) => {
      this._addString(B, g);
    }) : this.docs.forEach((B, g) => {
      this._addObject(B, g);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(B) {
    const g = this.size();
    uB(B) ? this._addString(B, g) : this._addObject(B, g);
  }
  // Removes the doc at the specified index of the index
  removeAt(B) {
    this.records.splice(B, 1);
    for (let g = B, Q = this.size(); g < Q; g += 1)
      this.records[g].i -= 1;
  }
  getValueForItemAtKeyId(B, g) {
    return B[this._keysMap[g]];
  }
  size() {
    return this.records.length;
  }
  _addString(B, g) {
    if (!BB(B) || KC(B))
      return;
    let Q = {
      v: B,
      i: g,
      n: this.norm.get(B)
    };
    this.records.push(Q);
  }
  _addObject(B, g) {
    let Q = { i: g, $: {} };
    this.keys.forEach((C, E) => {
      let I = C.getFn ? C.getFn(B) : this.getFn(B, C.path);
      if (BB(I)) {
        if (NB(I)) {
          let e = [];
          const Y = [{ nestedArrIndex: -1, value: I }];
          for (; Y.length; ) {
            const { nestedArrIndex: M, value: P } = Y.pop();
            if (BB(P))
              if (uB(P) && !KC(P)) {
                let t = {
                  v: P,
                  i: M,
                  n: this.norm.get(P)
                };
                e.push(t);
              } else
                NB(P) && P.forEach((t, i) => {
                  Y.push({
                    nestedArrIndex: i,
                    value: t
                  });
                });
          }
          Q.$[E] = e;
        } else if (uB(I) && !KC(I)) {
          let e = {
            v: I,
            n: this.norm.get(I)
          };
          Q.$[E] = e;
        }
      }
    }), this.records.push(Q);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function B0(A, B, { getFn: g = EA.getFn, fieldNormWeight: Q = EA.fieldNormWeight } = {}) {
  const C = new XE({ getFn: g, fieldNormWeight: Q });
  return C.setKeys(A.map(A0)), C.setSources(B), C.create(), C;
}
function C2(A, { getFn: B = EA.getFn, fieldNormWeight: g = EA.fieldNormWeight } = {}) {
  const { keys: Q, records: C } = A, E = new XE({ getFn: B, fieldNormWeight: g });
  return E.setKeys(Q), E.setIndexRecords(C), E;
}
function JQ(A, {
  errors: B = 0,
  currentLocation: g = 0,
  expectedLocation: Q = 0,
  distance: C = EA.distance,
  ignoreLocation: E = EA.ignoreLocation
} = {}) {
  const I = B / A.length;
  if (E)
    return I;
  const e = Math.abs(Q - g);
  return C ? I + e / C : e ? 1 : I;
}
function E2(A = [], B = EA.minMatchCharLength) {
  let g = [], Q = -1, C = -1, E = 0;
  for (let I = A.length; E < I; E += 1) {
    let e = A[E];
    e && Q === -1 ? Q = E : !e && Q !== -1 && (C = E - 1, C - Q + 1 >= B && g.push([Q, C]), Q = -1);
  }
  return A[E - 1] && E - Q >= B && g.push([Q, E - 1]), g;
}
const tg = 32;
function I2(A, B, g, {
  location: Q = EA.location,
  distance: C = EA.distance,
  threshold: E = EA.threshold,
  findAllMatches: I = EA.findAllMatches,
  minMatchCharLength: e = EA.minMatchCharLength,
  includeMatches: Y = EA.includeMatches,
  ignoreLocation: M = EA.ignoreLocation
} = {}) {
  if (B.length > tg)
    throw new Error(bG(tg));
  const P = B.length, t = A.length, i = Math.max(0, Math.min(Q, t));
  let F = E, c = i;
  const a = e > 1 || Y, r = a ? Array(t) : [];
  let n;
  for (; (n = A.indexOf(B, c)) > -1; ) {
    let QA = JQ(B, {
      currentLocation: n,
      expectedLocation: i,
      distance: C,
      ignoreLocation: M
    });
    if (F = Math.min(QA, F), c = n + P, a) {
      let v = 0;
      for (; v < P; )
        r[n + v] = 1, v += 1;
    }
  }
  c = -1;
  let G = [], l = 1, u = P + t;
  const S = 1 << P - 1;
  for (let QA = 0; QA < P; QA += 1) {
    let v = 0, L = u;
    for (; v < L; )
      JQ(B, {
        errors: QA,
        currentLocation: i + L,
        expectedLocation: i,
        distance: C,
        ignoreLocation: M
      }) <= F ? v = L : u = L, L = Math.floor((u - v) / 2 + v);
    u = L;
    let j = Math.max(1, i - L + 1), m = I ? t : Math.min(i + L, t) + P, f = Array(m + 2);
    f[m + 1] = (1 << QA) - 1;
    for (let AA = m; AA >= j; AA -= 1) {
      let IA = AA - 1, eA = g[A.charAt(IA)];
      if (a && (r[IA] = +!!eA), f[AA] = (f[AA + 1] << 1 | 1) & eA, QA && (f[AA] |= (G[AA + 1] | G[AA]) << 1 | 1 | G[AA + 1]), f[AA] & S && (l = JQ(B, {
        errors: QA,
        currentLocation: IA,
        expectedLocation: i,
        distance: C,
        ignoreLocation: M
      }), l <= F)) {
        if (F = l, c = IA, c <= i)
          break;
        j = Math.max(1, 2 * i - c);
      }
    }
    if (JQ(B, {
      errors: QA + 1,
      currentLocation: i,
      expectedLocation: i,
      distance: C,
      ignoreLocation: M
    }) > F)
      break;
    G = f;
  }
  const J = {
    isMatch: c >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, l)
  };
  if (a) {
    const QA = E2(r, e);
    QA.length ? Y && (J.indices = QA) : J.isMatch = !1;
  }
  return J;
}
function w2(A) {
  let B = {};
  for (let g = 0, Q = A.length; g < Q; g += 1) {
    const C = A.charAt(g);
    B[C] = (B[C] || 0) | 1 << Q - g - 1;
  }
  return B;
}
class g0 {
  constructor(B, {
    location: g = EA.location,
    threshold: Q = EA.threshold,
    distance: C = EA.distance,
    includeMatches: E = EA.includeMatches,
    findAllMatches: I = EA.findAllMatches,
    minMatchCharLength: e = EA.minMatchCharLength,
    isCaseSensitive: Y = EA.isCaseSensitive,
    ignoreLocation: M = EA.ignoreLocation
  } = {}) {
    if (this.options = {
      location: g,
      threshold: Q,
      distance: C,
      includeMatches: E,
      findAllMatches: I,
      minMatchCharLength: e,
      isCaseSensitive: Y,
      ignoreLocation: M
    }, this.pattern = Y ? B : B.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const P = (i, F) => {
      this.chunks.push({
        pattern: i,
        alphabet: w2(i),
        startIndex: F
      });
    }, t = this.pattern.length;
    if (t > tg) {
      let i = 0;
      const F = t % tg, c = t - F;
      for (; i < c; )
        P(this.pattern.substr(i, tg), i), i += tg;
      if (F) {
        const a = t - tg;
        P(this.pattern.substr(a), a);
      }
    } else
      P(this.pattern, 0);
  }
  searchIn(B) {
    const { isCaseSensitive: g, includeMatches: Q } = this.options;
    if (g || (B = B.toLowerCase()), this.pattern === B) {
      let c = {
        isMatch: !0,
        score: 0
      };
      return Q && (c.indices = [[0, B.length - 1]]), c;
    }
    const {
      location: C,
      distance: E,
      threshold: I,
      findAllMatches: e,
      minMatchCharLength: Y,
      ignoreLocation: M
    } = this.options;
    let P = [], t = 0, i = !1;
    this.chunks.forEach(({ pattern: c, alphabet: a, startIndex: r }) => {
      const { isMatch: n, score: G, indices: l } = I2(B, c, a, {
        location: C + r,
        distance: E,
        threshold: I,
        findAllMatches: e,
        minMatchCharLength: Y,
        includeMatches: Q,
        ignoreLocation: M
      });
      n && (i = !0), t += G, n && l && (P = [...P, ...l]);
    });
    let F = {
      isMatch: i,
      score: i ? t / this.chunks.length : 1
    };
    return i && Q && (F.indices = P), F;
  }
}
class Eg {
  constructor(B) {
    this.pattern = B;
  }
  static isMultiMatch(B) {
    return Kw(B, this.multiRegex);
  }
  static isSingleMatch(B) {
    return Kw(B, this.singleRegex);
  }
  search() {
  }
}
function Kw(A, B) {
  const g = A.match(B);
  return g ? g[1] : null;
}
class D2 extends Eg {
  constructor(B) {
    super(B);
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
  search(B) {
    const g = B === this.pattern;
    return {
      isMatch: g,
      score: g ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class o2 extends Eg {
  constructor(B) {
    super(B);
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
  search(B) {
    const Q = B.indexOf(this.pattern) === -1;
    return {
      isMatch: Q,
      score: Q ? 0 : 1,
      indices: [0, B.length - 1]
    };
  }
}
class e2 extends Eg {
  constructor(B) {
    super(B);
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
  search(B) {
    const g = B.startsWith(this.pattern);
    return {
      isMatch: g,
      score: g ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Y2 extends Eg {
  constructor(B) {
    super(B);
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
  search(B) {
    const g = !B.startsWith(this.pattern);
    return {
      isMatch: g,
      score: g ? 0 : 1,
      indices: [0, B.length - 1]
    };
  }
}
class M2 extends Eg {
  constructor(B) {
    super(B);
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
  search(B) {
    const g = B.endsWith(this.pattern);
    return {
      isMatch: g,
      score: g ? 0 : 1,
      indices: [B.length - this.pattern.length, B.length - 1]
    };
  }
}
class P2 extends Eg {
  constructor(B) {
    super(B);
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
  search(B) {
    const g = !B.endsWith(this.pattern);
    return {
      isMatch: g,
      score: g ? 0 : 1,
      indices: [0, B.length - 1]
    };
  }
}
class Q0 extends Eg {
  constructor(B, {
    location: g = EA.location,
    threshold: Q = EA.threshold,
    distance: C = EA.distance,
    includeMatches: E = EA.includeMatches,
    findAllMatches: I = EA.findAllMatches,
    minMatchCharLength: e = EA.minMatchCharLength,
    isCaseSensitive: Y = EA.isCaseSensitive,
    ignoreLocation: M = EA.ignoreLocation
  } = {}) {
    super(B), this._bitapSearch = new g0(B, {
      location: g,
      threshold: Q,
      distance: C,
      includeMatches: E,
      findAllMatches: I,
      minMatchCharLength: e,
      isCaseSensitive: Y,
      ignoreLocation: M
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
  search(B) {
    return this._bitapSearch.searchIn(B);
  }
}
class C0 extends Eg {
  constructor(B) {
    super(B);
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
  search(B) {
    let g = 0, Q;
    const C = [], E = this.pattern.length;
    for (; (Q = B.indexOf(this.pattern, g)) > -1; )
      g = Q + E, C.push([Q, g - 1]);
    const I = !!C.length;
    return {
      isMatch: I,
      score: I ? 0 : 1,
      indices: C
    };
  }
}
const sE = [
  D2,
  C0,
  e2,
  Y2,
  P2,
  M2,
  o2,
  Q0
], yw = sE.length, t2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, c2 = "|";
function i2(A, B = {}) {
  return A.split(c2).map((g) => {
    let Q = g.trim().split(t2).filter((E) => E && !!E.trim()), C = [];
    for (let E = 0, I = Q.length; E < I; E += 1) {
      const e = Q[E];
      let Y = !1, M = -1;
      for (; !Y && ++M < yw; ) {
        const P = sE[M];
        let t = P.isMultiMatch(e);
        t && (C.push(new P(t, B)), Y = !0);
      }
      if (!Y)
        for (M = -1; ++M < yw; ) {
          const P = sE[M];
          let t = P.isSingleMatch(e);
          if (t) {
            C.push(new P(t, B));
            break;
          }
        }
    }
    return C;
  });
}
const a2 = /* @__PURE__ */ new Set([Q0.type, C0.type]);
class F2 {
  constructor(B, {
    isCaseSensitive: g = EA.isCaseSensitive,
    includeMatches: Q = EA.includeMatches,
    minMatchCharLength: C = EA.minMatchCharLength,
    ignoreLocation: E = EA.ignoreLocation,
    findAllMatches: I = EA.findAllMatches,
    location: e = EA.location,
    threshold: Y = EA.threshold,
    distance: M = EA.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: g,
      includeMatches: Q,
      minMatchCharLength: C,
      findAllMatches: I,
      ignoreLocation: E,
      location: e,
      threshold: Y,
      distance: M
    }, this.pattern = g ? B : B.toLowerCase(), this.query = i2(this.pattern, this.options);
  }
  static condition(B, g) {
    return g.useExtendedSearch;
  }
  searchIn(B) {
    const g = this.query;
    if (!g)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: Q, isCaseSensitive: C } = this.options;
    B = C ? B : B.toLowerCase();
    let E = 0, I = [], e = 0;
    for (let Y = 0, M = g.length; Y < M; Y += 1) {
      const P = g[Y];
      I.length = 0, E = 0;
      for (let t = 0, i = P.length; t < i; t += 1) {
        const F = P[t], { isMatch: c, indices: a, score: r } = F.search(B);
        if (c) {
          if (E += 1, e += r, Q) {
            const n = F.constructor.type;
            a2.has(n) ? I = [...I, ...a] : I.push(a);
          }
        } else {
          e = 0, E = 0, I.length = 0;
          break;
        }
      }
      if (E) {
        let t = {
          isMatch: !0,
          score: e / E
        };
        return Q && (t.indices = I), t;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const nE = [];
function r2(...A) {
  nE.push(...A);
}
function hE(A, B) {
  for (let g = 0, Q = nE.length; g < Q; g += 1) {
    let C = nE[g];
    if (C.condition(A, B))
      return new C(A, B);
  }
  return new g0(A, B);
}
const EC = {
  AND: "$and",
  OR: "$or"
}, GE = {
  PATH: "$path",
  PATTERN: "$val"
}, UE = (A) => !!(A[EC.AND] || A[EC.OR]), s2 = (A) => !!A[GE.PATH], n2 = (A) => !NB(A) && _o(A) && !UE(A), pw = (A) => ({
  [EC.AND]: Object.keys(A).map((B) => ({
    [B]: A[B]
  }))
});
function E0(A, B, { auto: g = !0 } = {}) {
  const Q = (C) => {
    let E = Object.keys(C);
    const I = s2(C);
    if (!I && E.length > 1 && !UE(C))
      return Q(pw(C));
    if (n2(C)) {
      const Y = I ? C[GE.PATH] : E[0], M = I ? C[GE.PATTERN] : C[Y];
      if (!uB(M))
        throw new Error(WG(Y));
      const P = {
        keyId: rE(Y),
        pattern: M
      };
      return g && (P.searcher = hE(M, B)), P;
    }
    let e = {
      children: [],
      operator: E[0]
    };
    return E.forEach((Y) => {
      const M = C[Y];
      NB(M) && M.forEach((P) => {
        e.children.push(Q(P));
      });
    }), e;
  };
  return UE(A) || (A = pw(A)), Q(A);
}
function h2(A, { ignoreFieldNorm: B = EA.ignoreFieldNorm }) {
  A.forEach((g) => {
    let Q = 1;
    g.matches.forEach(({ key: C, norm: E, score: I }) => {
      const e = C ? C.weight : null;
      Q *= Math.pow(
        I === 0 && e ? Number.EPSILON : I,
        (e || 1) * (B ? 1 : E)
      );
    }), g.score = Q;
  });
}
function G2(A, B) {
  const g = A.matches;
  B.matches = [], BB(g) && g.forEach((Q) => {
    if (!BB(Q.indices) || !Q.indices.length)
      return;
    const { indices: C, value: E } = Q;
    let I = {
      indices: C,
      value: E
    };
    Q.key && (I.key = Q.key.src), Q.idx > -1 && (I.refIndex = Q.idx), B.matches.push(I);
  });
}
function U2(A, B) {
  B.score = A.score;
}
function l2(A, B, {
  includeMatches: g = EA.includeMatches,
  includeScore: Q = EA.includeScore
} = {}) {
  const C = [];
  return g && C.push(G2), Q && C.push(U2), A.map((E) => {
    const { idx: I } = E, e = {
      item: B[I],
      refIndex: I
    };
    return C.length && C.forEach((Y) => {
      Y(E, e);
    }), e;
  });
}
class hg {
  constructor(B, g = {}, Q) {
    this.options = { ...EA, ...g }, this.options.useExtendedSearch, this._keyStore = new qG(this.options.keys), this.setCollection(B, Q);
  }
  setCollection(B, g) {
    if (this._docs = B, g && !(g instanceof XE))
      throw new Error(xG);
    this._myIndex = g || B0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(B) {
    BB(B) && (this._docs.push(B), this._myIndex.add(B));
  }
  remove(B = () => !1) {
    const g = [];
    for (let Q = 0, C = this._docs.length; Q < C; Q += 1) {
      const E = this._docs[Q];
      B(E, Q) && (this.removeAt(Q), Q -= 1, C -= 1, g.push(E));
    }
    return g;
  }
  removeAt(B) {
    this._docs.splice(B, 1), this._myIndex.removeAt(B);
  }
  getIndex() {
    return this._myIndex;
  }
  search(B, { limit: g = -1 } = {}) {
    const {
      includeMatches: Q,
      includeScore: C,
      shouldSort: E,
      sortFn: I,
      ignoreFieldNorm: e
    } = this.options;
    let Y = uB(B) ? uB(this._docs[0]) ? this._searchStringList(B) : this._searchObjectList(B) : this._searchLogical(B);
    return h2(Y, { ignoreFieldNorm: e }), E && Y.sort(I), Xo(g) && g > -1 && (Y = Y.slice(0, g)), l2(Y, this._docs, {
      includeMatches: Q,
      includeScore: C
    });
  }
  _searchStringList(B) {
    const g = hE(B, this.options), { records: Q } = this._myIndex, C = [];
    return Q.forEach(({ v: E, i: I, n: e }) => {
      if (!BB(E))
        return;
      const { isMatch: Y, score: M, indices: P } = g.searchIn(E);
      Y && C.push({
        item: E,
        idx: I,
        matches: [{ score: M, value: E, norm: e, indices: P }]
      });
    }), C;
  }
  _searchLogical(B) {
    const g = E0(B, this.options), Q = (e, Y, M) => {
      if (!e.children) {
        const { keyId: t, searcher: i } = e, F = this._findMatches({
          key: this._keyStore.get(t),
          value: this._myIndex.getValueForItemAtKeyId(Y, t),
          searcher: i
        });
        return F && F.length ? [
          {
            idx: M,
            item: Y,
            matches: F
          }
        ] : [];
      }
      const P = [];
      for (let t = 0, i = e.children.length; t < i; t += 1) {
        const F = e.children[t], c = Q(F, Y, M);
        if (c.length)
          P.push(...c);
        else if (e.operator === EC.AND)
          return [];
      }
      return P;
    }, C = this._myIndex.records, E = {}, I = [];
    return C.forEach(({ $: e, i: Y }) => {
      if (BB(e)) {
        let M = Q(g, e, Y);
        M.length && (E[Y] || (E[Y] = { idx: Y, item: e, matches: [] }, I.push(E[Y])), M.forEach(({ matches: P }) => {
          E[Y].matches.push(...P);
        }));
      }
    }), I;
  }
  _searchObjectList(B) {
    const g = hE(B, this.options), { keys: Q, records: C } = this._myIndex, E = [];
    return C.forEach(({ $: I, i: e }) => {
      if (!BB(I))
        return;
      let Y = [];
      Q.forEach((M, P) => {
        Y.push(
          ...this._findMatches({
            key: M,
            value: I[P],
            searcher: g
          })
        );
      }), Y.length && E.push({
        idx: e,
        item: I,
        matches: Y
      });
    }), E;
  }
  _findMatches({ key: B, value: g, searcher: Q }) {
    if (!BB(g))
      return [];
    let C = [];
    if (NB(g))
      g.forEach(({ v: E, i: I, n: e }) => {
        if (!BB(E))
          return;
        const { isMatch: Y, score: M, indices: P } = Q.searchIn(E);
        Y && C.push({
          score: M,
          key: B,
          value: E,
          idx: I,
          norm: e,
          indices: P
        });
      });
    else {
      const { v: E, n: I } = g, { isMatch: e, score: Y, indices: M } = Q.searchIn(E);
      e && C.push({ score: Y, key: B, value: E, norm: I, indices: M });
    }
    return C;
  }
}
hg.version = "7.0.0";
hg.createIndex = B0;
hg.parseIndex = C2;
hg.config = EA;
hg.parseQuery = E0;
r2(F2);
function kg(A, B, g) {
  let Q = g.initialDeps ?? [], C;
  return () => {
    var E, I, e, Y;
    let M;
    g.key && ((E = g.debug) != null && E.call(g)) && (M = Date.now());
    const P = A();
    if (!(P.length !== Q.length || P.some((F, c) => Q[c] !== F)))
      return C;
    Q = P;
    let i;
    if (g.key && ((I = g.debug) != null && I.call(g)) && (i = Date.now()), C = B(...P), g.key && ((e = g.debug) != null && e.call(g))) {
      const F = Math.round((Date.now() - M) * 100) / 100, c = Math.round((Date.now() - i) * 100) / 100, a = c / 16, r = (n, G) => {
        for (n = String(n); n.length < G; )
          n = " " + n;
        return n;
      };
      console.info(
        `%c⏱ ${r(c, 5)} /${r(F, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * a, 120)
        )}deg 100% 31%);`,
        g == null ? void 0 : g.key
      );
    }
    return (Y = g == null ? void 0 : g.onChange) == null || Y.call(g, C), C;
  };
}
function yC(A, B) {
  if (A === void 0)
    throw new Error(`Unexpected undefined${B ? `: ${B}` : ""}`);
  return A;
}
const H2 = (A, B) => Math.abs(A - B) < 1, d2 = (A) => A, u2 = (A) => {
  const B = Math.max(A.startIndex - A.overscan, 0), g = Math.min(A.endIndex + A.overscan, A.count - 1), Q = [];
  for (let C = B; C <= g; C++)
    Q.push(C);
  return Q;
}, v2 = (A, B) => {
  const g = A.scrollElement;
  if (!g)
    return;
  const Q = (E) => {
    const { width: I, height: e } = E;
    B({ width: Math.round(I), height: Math.round(e) });
  };
  if (Q(g.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  const C = new ResizeObserver((E) => {
    const I = E[0];
    if (I != null && I.borderBoxSize) {
      const e = I.borderBoxSize[0];
      if (e) {
        Q({ width: e.inlineSize, height: e.blockSize });
        return;
      }
    }
    Q(g.getBoundingClientRect());
  });
  return C.observe(g, { box: "border-box" }), () => {
    C.unobserve(g);
  };
}, k2 = (A, B) => {
  const g = A.scrollElement;
  if (!g)
    return;
  const Q = () => {
    B(g[A.options.horizontal ? "scrollLeft" : "scrollTop"]);
  };
  return Q(), g.addEventListener("scroll", Q, {
    passive: !0
  }), () => {
    g.removeEventListener("scroll", Q);
  };
}, f2 = (A, B, g) => {
  if (B != null && B.borderBoxSize) {
    const Q = B.borderBoxSize[0];
    if (Q)
      return Math.round(
        Q[g.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    A.getBoundingClientRect()[g.options.horizontal ? "width" : "height"]
  );
}, J2 = (A, {
  adjustments: B = 0,
  behavior: g
}, Q) => {
  var C, E;
  const I = A + B;
  (E = (C = Q.scrollElement) == null ? void 0 : C.scrollTo) == null || E.call(C, {
    [Q.options.horizontal ? "left" : "top"]: I,
    behavior: g
  });
};
class T2 {
  constructor(B) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection = null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let g = null;
      const Q = () => g || (typeof ResizeObserver < "u" ? g = new ResizeObserver((C) => {
        C.forEach((E) => {
          this._measureElement(E.target, E);
        });
      }) : null);
      return {
        disconnect: () => {
          var C;
          return (C = Q()) == null ? void 0 : C.disconnect();
        },
        observe: (C) => {
          var E;
          return (E = Q()) == null ? void 0 : E.observe(C, { box: "border-box" });
        },
        unobserve: (C) => {
          var E;
          return (E = Q()) == null ? void 0 : E.unobserve(C);
        }
      };
    })(), this.range = null, this.setOptions = (g) => {
      Object.entries(g).forEach(([Q, C]) => {
        typeof C > "u" && delete g[Q];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: d2,
        rangeExtractor: u2,
        onChange: () => {
        },
        measureElement: f2,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...g
      };
    }, this.notify = (g) => {
      var Q, C;
      (C = (Q = this.options).onChange) == null || C.call(Q, this, g);
    }, this.maybeNotify = kg(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (g) => {
        this.notify(g);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((g) => g()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      const g = this.options.getScrollElement();
      this.scrollElement !== g && (this.cleanup(), this.scrollElement = g, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (Q) => {
          this.scrollRect = Q, this.maybeNotify();
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (Q) => {
          this.scrollAdjustments = 0, this.scrollOffset !== Q && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId), this.isScrollingTimeoutId = null), this.isScrolling = !0, this.scrollDirection = this.scrollOffset < Q ? "forward" : "backward", this.scrollOffset = Q, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
            this.isScrollingTimeoutId = null, this.isScrolling = !1, this.scrollDirection = null, this.maybeNotify();
          }, this.options.scrollingDelay));
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = kg(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (g, Q, C, E) => (this.pendingMeasuredCacheIndexes = [], {
        count: g,
        paddingStart: Q,
        scrollMargin: C,
        getItemKey: E
      }),
      {
        key: !1
      }
    ), this.getFurthestMeasurement = (g, Q) => {
      const C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
      for (let I = Q - 1; I >= 0; I--) {
        const e = g[I];
        if (C.has(e.lane))
          continue;
        const Y = E.get(
          e.lane
        );
        if (Y == null || e.end > Y.end ? E.set(e.lane, e) : e.end < Y.end && C.set(e.lane, !0), C.size === this.options.lanes)
          break;
      }
      return E.size === this.options.lanes ? Array.from(E.values()).sort((I, e) => I.end === e.end ? I.index - e.index : I.end - e.end)[0] : void 0;
    }, this.getMeasurements = kg(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count: g, paddingStart: Q, scrollMargin: C, getItemKey: E }, I) => {
        const e = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const Y = this.measurementsCache.slice(0, e);
        for (let M = e; M < g; M++) {
          const P = E(M), t = this.options.lanes === 1 ? Y[M - 1] : this.getFurthestMeasurement(Y, M), i = t ? t.end : Q + C, F = I.get(P), c = typeof F == "number" ? F : this.options.estimateSize(M), a = i + c, r = t ? t.lane : M % this.options.lanes;
          Y[M] = {
            index: M,
            start: i,
            size: c,
            end: a,
            key: P,
            lane: r
          };
        }
        return this.measurementsCache = Y, Y;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = kg(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (g, Q, C) => this.range = g.length > 0 && Q > 0 ? O2({
        measurements: g,
        outerSize: Q,
        scrollOffset: C
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getIndexes = kg(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (g, Q, C, E) => Q === null ? [] : g({
        ...Q,
        overscan: C,
        count: E
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (g) => {
      const Q = this.options.indexAttribute, C = g.getAttribute(Q);
      return C ? parseInt(C, 10) : (console.warn(
        `Missing attribute name '${Q}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (g, Q) => {
      const C = this.measurementsCache[this.indexFromElement(g)];
      if (!C || !g.isConnected) {
        this.measureElementCache.forEach((e, Y) => {
          e === g && (this.observer.unobserve(g), this.measureElementCache.delete(Y));
        });
        return;
      }
      const E = this.measureElementCache.get(C.key);
      E !== g && (E && this.observer.unobserve(E), this.observer.observe(g), this.measureElementCache.set(C.key, g));
      const I = this.options.measureElement(g, Q, this);
      this.resizeItem(C, I);
    }, this.resizeItem = (g, Q) => {
      const C = this.itemSizeCache.get(g.key) ?? g.size, E = Q - C;
      E !== 0 && (g.start < this.scrollOffset + this.scrollAdjustments && this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += E,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(g.index), this.itemSizeCache = new Map(this.itemSizeCache.set(g.key, Q)), this.notify(!1));
    }, this.measureElement = (g) => {
      g && this._measureElement(g, void 0);
    }, this.getVirtualItems = kg(
      () => [this.getIndexes(), this.getMeasurements()],
      (g, Q) => {
        const C = [];
        for (let E = 0, I = g.length; E < I; E++) {
          const e = g[E], Y = Q[e];
          C.push(Y);
        }
        return C;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (g) => {
      const Q = this.getMeasurements();
      return yC(
        Q[I0(
          0,
          Q.length - 1,
          (C) => yC(Q[C]).start,
          g
        )]
      );
    }, this.getOffsetForAlignment = (g, Q) => {
      const C = this.getSize();
      Q === "auto" && (g <= this.scrollOffset ? Q = "start" : g >= this.scrollOffset + C ? Q = "end" : Q = "start"), Q === "start" ? g = g : Q === "end" ? g = g - C : Q === "center" && (g = g - C / 2);
      const E = this.options.horizontal ? "scrollWidth" : "scrollHeight", e = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[E] : this.scrollElement[E] : 0) - this.getSize();
      return Math.max(Math.min(e, g), 0);
    }, this.getOffsetForIndex = (g, Q = "auto") => {
      g = Math.max(0, Math.min(g, this.options.count - 1));
      const C = yC(this.getMeasurements()[g]);
      if (Q === "auto")
        if (C.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          Q = "end";
        else if (C.start <= this.scrollOffset + this.options.scrollPaddingStart)
          Q = "start";
        else
          return [this.scrollOffset, Q];
      const E = Q === "end" ? C.end + this.options.scrollPaddingEnd : C.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(E, Q), Q];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (g, { align: Q = "start", behavior: C } = {}) => {
      this.cancelScrollToIndex(), C === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(g, Q), {
        adjustments: void 0,
        behavior: C
      });
    }, this.scrollToIndex = (g, { align: Q = "auto", behavior: C } = {}) => {
      g = Math.max(0, Math.min(g, this.options.count - 1)), this.cancelScrollToIndex(), C === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const [E, I] = this.getOffsetForIndex(g, Q);
      this._scrollToOffset(E, { adjustments: void 0, behavior: C }), C !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId = setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(g)
        )) {
          const [Y] = this.getOffsetForIndex(g, I);
          H2(Y, this.scrollOffset) || this.scrollToIndex(g, { align: I, behavior: C });
        } else
          this.scrollToIndex(g, { align: I, behavior: C });
      }));
    }, this.scrollBy = (g, { behavior: Q } = {}) => {
      this.cancelScrollToIndex(), Q === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + g, {
        adjustments: void 0,
        behavior: Q
      });
    }, this.getTotalSize = () => {
      var g;
      const Q = this.getMeasurements();
      let C;
      return Q.length === 0 ? C = this.options.paddingStart : C = this.options.lanes === 1 ? ((g = Q[Q.length - 1]) == null ? void 0 : g.end) ?? 0 : Math.max(
        ...Q.slice(-this.options.lanes).map((E) => E.end)
      ), C - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (g, {
      adjustments: Q,
      behavior: C
    }) => {
      this.options.scrollToFn(g, { behavior: C, adjustments: Q }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(B), this.scrollRect = this.options.initialRect, this.scrollOffset = this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
      this.itemSizeCache.set(g.key, g.size);
    }), this.maybeNotify();
  }
}
const I0 = (A, B, g, Q) => {
  for (; A <= B; ) {
    const C = (A + B) / 2 | 0, E = g(C);
    if (E < Q)
      A = C + 1;
    else if (E > Q)
      B = C - 1;
    else
      return C;
  }
  return A > 0 ? A - 1 : 0;
};
function O2({
  measurements: A,
  outerSize: B,
  scrollOffset: g
}) {
  const Q = A.length - 1, E = I0(0, Q, (e) => A[e].start, g);
  let I = E;
  for (; I < Q && A[I].end < g + B; )
    I++;
  return { startIndex: E, endIndex: I };
}
function z2(A) {
  const B = new T2(y(A)), g = SE(B), Q = B._didMount();
  return aA(
    () => y(A).getScrollElement(),
    (C) => {
      C && B._willUpdate();
    },
    {
      immediate: !0
    }
  ), aA(
    () => y(A),
    (C) => {
      B.setOptions({
        ...C,
        onChange: (E, I) => {
          var e;
          PI(g), (e = C.onChange) == null || e.call(C, E, I);
        }
      }), B._willUpdate(), PI(g);
    },
    {
      immediate: !0
    }
  ), oD(Q), g;
}
function j2(A) {
  return z2(
    k(() => ({
      observeElementRect: v2,
      observeElementOffset: k2,
      scrollToFn: J2,
      ...y(A)
    }))
  );
}
function N2(A, B, g) {
  let Q = Z(g == null ? void 0 : g.value), C = k(() => A.value !== void 0);
  return [k(() => C.value ? A.value : Q.value), function(E) {
    return C.value || (Q.value = E), B == null ? void 0 : B(E);
  }];
}
let S2 = Symbol("headlessui.useid"), R2 = 0;
function hC() {
  return ZA(S2, () => `${++R2}`)();
}
function JA(A) {
  var B;
  if (A == null || A.value == null)
    return null;
  let g = (B = A.value.$el) != null ? B : A.value;
  return g instanceof Node ? g : null;
}
function vB(A, B, ...g) {
  if (A in B) {
    let C = B[A];
    return typeof C == "function" ? C(...g) : C;
  }
  let Q = new Error(`Tried to handle "${A}" but there is no handler defined. Only defined handlers are: ${Object.keys(B).map((C) => `"${C}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(Q, vB), Q;
}
var L2 = Object.defineProperty, m2 = (A, B, g) => B in A ? L2(A, B, { enumerable: !0, configurable: !0, writable: !0, value: g }) : A[B] = g, xw = (A, B, g) => (m2(A, typeof B != "symbol" ? B + "" : B, g), g);
let K2 = class {
  constructor() {
    xw(this, "current", this.detect()), xw(this, "currentId", 0);
  }
  set(B) {
    this.current !== B && (this.currentId = 0, this.current = B);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, GC = new K2();
function w0(A) {
  if (GC.isServer)
    return null;
  if (A instanceof Node)
    return A.ownerDocument;
  if (A != null && A.hasOwnProperty("value")) {
    let B = JA(A);
    if (B)
      return B.ownerDocument;
  }
  return document;
}
let Ww = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((A) => `${A}:not([tabindex='-1'])`).join(",");
var y2 = ((A) => (A[A.First = 1] = "First", A[A.Previous = 2] = "Previous", A[A.Next = 4] = "Next", A[A.Last = 8] = "Last", A[A.WrapAround = 16] = "WrapAround", A[A.NoScroll = 32] = "NoScroll", A))(y2 || {}), p2 = ((A) => (A[A.Error = 0] = "Error", A[A.Overflow = 1] = "Overflow", A[A.Success = 2] = "Success", A[A.Underflow = 3] = "Underflow", A))(p2 || {}), x2 = ((A) => (A[A.Previous = -1] = "Previous", A[A.Next = 1] = "Next", A))(x2 || {}), D0 = ((A) => (A[A.Strict = 0] = "Strict", A[A.Loose = 1] = "Loose", A))(D0 || {});
function W2(A, B = 0) {
  var g;
  return A === ((g = w0(A)) == null ? void 0 : g.body) ? !1 : vB(B, { 0() {
    return A.matches(Ww);
  }, 1() {
    let Q = A;
    for (; Q !== null; ) {
      if (Q.matches(Ww))
        return !0;
      Q = Q.parentElement;
    }
    return !1;
  } });
}
var b2 = ((A) => (A[A.Keyboard = 0] = "Keyboard", A[A.Mouse = 1] = "Mouse", A))(b2 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (A) => {
  A.metaKey || A.altKey || A.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (A) => {
  A.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : A.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function V2(A, B = (g) => g) {
  return A.slice().sort((g, Q) => {
    let C = B(g), E = B(Q);
    if (C === null || E === null)
      return 0;
    let I = C.compareDocumentPosition(E);
    return I & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : I & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Z2() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function q2() {
  return /Android/gi.test(window.navigator.userAgent);
}
function o0() {
  return Z2() || q2();
}
function TQ(A, B, g) {
  GC.isServer || wB((Q) => {
    document.addEventListener(A, B, g), Q(() => document.removeEventListener(A, B, g));
  });
}
function X2(A, B, g) {
  GC.isServer || wB((Q) => {
    window.addEventListener(A, B, g), Q(() => window.removeEventListener(A, B, g));
  });
}
function _2(A, B, g = k(() => !0)) {
  function Q(E, I) {
    if (!g.value || E.defaultPrevented)
      return;
    let e = I(E);
    if (e === null || !e.getRootNode().contains(e))
      return;
    let Y = function M(P) {
      return typeof P == "function" ? M(P()) : Array.isArray(P) || P instanceof Set ? P : [P];
    }(A);
    for (let M of Y) {
      if (M === null)
        continue;
      let P = M instanceof HTMLElement ? M : JA(M);
      if (P != null && P.contains(e) || E.composed && E.composedPath().includes(P))
        return;
    }
    return !W2(e, D0.Loose) && e.tabIndex !== -1 && E.preventDefault(), B(E, e);
  }
  let C = Z(null);
  TQ("pointerdown", (E) => {
    var I, e;
    g.value && (C.value = ((e = (I = E.composedPath) == null ? void 0 : I.call(E)) == null ? void 0 : e[0]) || E.target);
  }, !0), TQ("mousedown", (E) => {
    var I, e;
    g.value && (C.value = ((e = (I = E.composedPath) == null ? void 0 : I.call(E)) == null ? void 0 : e[0]) || E.target);
  }, !0), TQ("click", (E) => {
    o0() || C.value && (Q(E, () => C.value), C.value = null);
  }, !0), TQ("touchend", (E) => Q(E, () => E.target instanceof HTMLElement ? E.target : null), !0), X2("blur", (E) => Q(E, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function bw(A, B) {
  if (A)
    return A;
  let g = B ?? "button";
  if (typeof g == "string" && g.toLowerCase() === "button")
    return "button";
}
function $2(A, B) {
  let g = Z(bw(A.value.type, A.value.as));
  return LA(() => {
    g.value = bw(A.value.type, A.value.as);
  }), wB(() => {
    var Q;
    g.value || JA(B) && JA(B) instanceof HTMLButtonElement && !((Q = JA(B)) != null && Q.hasAttribute("type")) && (g.value = "button");
  }), g;
}
function Vw(A) {
  return [A.screenX, A.screenY];
}
function AU() {
  let A = Z([-1, -1]);
  return { wasMoved(B) {
    let g = Vw(B);
    return A.value[0] === g[0] && A.value[1] === g[1] ? !1 : (A.value = g, !0);
  }, update(B) {
    A.value = Vw(B);
  } };
}
function BU({ container: A, accept: B, walk: g, enabled: Q }) {
  wB(() => {
    let C = A.value;
    if (!C || Q !== void 0 && !Q.value)
      return;
    let E = w0(A);
    if (!E)
      return;
    let I = Object.assign((Y) => B(Y), { acceptNode: B }), e = E.createTreeWalker(C, NodeFilter.SHOW_ELEMENT, I, !1);
    for (; e.nextNode(); )
      g(e.currentNode);
  });
}
var IC = ((A) => (A[A.None = 0] = "None", A[A.RenderStrategy = 1] = "RenderStrategy", A[A.Static = 2] = "Static", A))(IC || {}), ZB = ((A) => (A[A.Unmount = 0] = "Unmount", A[A.Hidden = 1] = "Hidden", A))(ZB || {});
function Hg({ visible: A = !0, features: B = 0, ourProps: g, theirProps: Q, ...C }) {
  var E;
  let I = Y0(Q, g), e = Object.assign(C, { props: I });
  if (A || B & 2 && I.static)
    return pC(e);
  if (B & 1) {
    let Y = (E = I.unmount) == null || E ? 0 : 1;
    return vB(Y, { 0() {
      return null;
    }, 1() {
      return pC({ ...C, props: { ...I, hidden: !0, style: { display: "none" } } });
    } });
  }
  return pC(e);
}
function pC({ props: A, attrs: B, slots: g, slot: Q, name: C }) {
  var E, I;
  let { as: e, ...Y } = rQ(A, ["unmount", "static"]), M = (E = g.default) == null ? void 0 : E.call(g, Q), P = {};
  if (Q) {
    let t = !1, i = [];
    for (let [F, c] of Object.entries(Q))
      typeof c == "boolean" && (t = !0), c === !0 && i.push(F);
    t && (P["data-headlessui-state"] = i.join(" "));
  }
  if (e === "template") {
    if (M = e0(M ?? []), Object.keys(Y).length > 0 || Object.keys(B).length > 0) {
      let [t, ...i] = M ?? [];
      if (!QU(t) || i.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${C} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(Y).concat(Object.keys(B)).map((a) => a.trim()).filter((a, r, n) => n.indexOf(a) === r).sort((a, r) => a.localeCompare(r)).map((a) => `  - ${a}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((a) => `  - ${a}`).join(`
`)].join(`
`));
      let F = Y0((I = t.props) != null ? I : {}, Y, P), c = kB(t, F, !0);
      for (let a in F)
        a.startsWith("on") && (c.props || (c.props = {}), c.props[a] = F[a]);
      return c;
    }
    return Array.isArray(M) && M.length === 1 ? M[0] : M;
  }
  return nB(e, Object.assign({}, Y, P), { default: () => M });
}
function e0(A) {
  return A.flatMap((B) => B.type === sA ? e0(B.children) : [B]);
}
function Y0(...A) {
  if (A.length === 0)
    return {};
  if (A.length === 1)
    return A[0];
  let B = {}, g = {};
  for (let Q of A)
    for (let C in Q)
      C.startsWith("on") && typeof Q[C] == "function" ? (g[C] != null || (g[C] = []), g[C].push(Q[C])) : B[C] = Q[C];
  if (B.disabled || B["aria-disabled"])
    return Object.assign(B, Object.fromEntries(Object.keys(g).map((Q) => [Q, void 0])));
  for (let Q in g)
    Object.assign(B, { [Q](C, ...E) {
      let I = g[Q];
      for (let e of I) {
        if (C instanceof Event && C.defaultPrevented)
          return;
        e(C, ...E);
      }
    } });
  return B;
}
function gU(A) {
  let B = Object.assign({}, A);
  for (let g in B)
    B[g] === void 0 && delete B[g];
  return B;
}
function rQ(A, B = []) {
  let g = Object.assign({}, A);
  for (let Q of B)
    Q in g && delete g[Q];
  return g;
}
function QU(A) {
  return A == null ? !1 : typeof A.type == "string" || typeof A.type == "object" || typeof A.type == "function";
}
var M0 = ((A) => (A[A.None = 1] = "None", A[A.Focusable = 2] = "Focusable", A[A.Hidden = 4] = "Hidden", A))(M0 || {});
let CU = /* @__PURE__ */ oB({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(A, { slots: B, attrs: g }) {
  return () => {
    var Q;
    let { features: C, ...E } = A, I = { "aria-hidden": (C & 2) === 2 ? !0 : (Q = E["aria-hidden"]) != null ? Q : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(C & 4) === 4 && (C & 2) !== 2 && { display: "none" } } };
    return Hg({ ourProps: I, theirProps: E, slot: {}, attrs: g, slots: B, name: "Hidden" });
  };
} }), P0 = Symbol("Context");
var gB = ((A) => (A[A.Open = 1] = "Open", A[A.Closed = 2] = "Closed", A[A.Closing = 4] = "Closing", A[A.Opening = 8] = "Opening", A))(gB || {});
function EU() {
  return _E() !== null;
}
function _E() {
  return ZA(P0, null);
}
function t0(A) {
  jB(P0, A);
}
var LQ = ((A) => (A.Space = " ", A.Enter = "Enter", A.Escape = "Escape", A.Backspace = "Backspace", A.Delete = "Delete", A.ArrowLeft = "ArrowLeft", A.ArrowUp = "ArrowUp", A.ArrowRight = "ArrowRight", A.ArrowDown = "ArrowDown", A.Home = "Home", A.End = "End", A.PageUp = "PageUp", A.PageDown = "PageDown", A.Tab = "Tab", A))(LQ || {});
function IU(A) {
  throw new Error("Unexpected object: " + A);
}
var OB = ((A) => (A[A.First = 0] = "First", A[A.Previous = 1] = "Previous", A[A.Next = 2] = "Next", A[A.Last = 3] = "Last", A[A.Specific = 4] = "Specific", A[A.Nothing = 5] = "Nothing", A))(OB || {});
function Zw(A, B) {
  let g = B.resolveItems();
  if (g.length <= 0)
    return null;
  let Q = B.resolveActiveIndex(), C = Q ?? -1;
  switch (A.focus) {
    case 0: {
      for (let E = 0; E < g.length; ++E)
        if (!B.resolveDisabled(g[E], E, g))
          return E;
      return Q;
    }
    case 1: {
      C === -1 && (C = g.length);
      for (let E = C - 1; E >= 0; --E)
        if (!B.resolveDisabled(g[E], E, g))
          return E;
      return Q;
    }
    case 2: {
      for (let E = C + 1; E < g.length; ++E)
        if (!B.resolveDisabled(g[E], E, g))
          return E;
      return Q;
    }
    case 3: {
      for (let E = g.length - 1; E >= 0; --E)
        if (!B.resolveDisabled(g[E], E, g))
          return E;
      return Q;
    }
    case 4: {
      for (let E = 0; E < g.length; ++E)
        if (B.resolveId(g[E], E, g) === A.id)
          return E;
      return Q;
    }
    case 5:
      return null;
    default:
      IU(A);
  }
}
function wU(A) {
  typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A).catch((B) => setTimeout(() => {
    throw B;
  }));
}
function $E() {
  let A = [], B = { addEventListener(g, Q, C, E) {
    return g.addEventListener(Q, C, E), B.add(() => g.removeEventListener(Q, C, E));
  }, requestAnimationFrame(...g) {
    let Q = requestAnimationFrame(...g);
    B.add(() => cancelAnimationFrame(Q));
  }, nextFrame(...g) {
    B.requestAnimationFrame(() => {
      B.requestAnimationFrame(...g);
    });
  }, setTimeout(...g) {
    let Q = setTimeout(...g);
    B.add(() => clearTimeout(Q));
  }, microTask(...g) {
    let Q = { current: !0 };
    return wU(() => {
      Q.current && g[0]();
    }), B.add(() => {
      Q.current = !1;
    });
  }, style(g, Q, C) {
    let E = g.style.getPropertyValue(Q);
    return Object.assign(g.style, { [Q]: C }), this.add(() => {
      Object.assign(g.style, { [Q]: E });
    });
  }, group(g) {
    let Q = $E();
    return g(Q), this.add(() => Q.dispose());
  }, add(g) {
    return A.push(g), () => {
      let Q = A.indexOf(g);
      if (Q >= 0)
        for (let C of A.splice(Q, 1))
          C();
    };
  }, dispose() {
    for (let g of A.splice(0))
      g();
  } };
  return B;
}
function c0(A = {}, B = null, g = []) {
  for (let [Q, C] of Object.entries(A))
    a0(g, i0(B, Q), C);
  return g;
}
function i0(A, B) {
  return A ? A + "[" + B + "]" : B;
}
function a0(A, B, g) {
  if (Array.isArray(g))
    for (let [Q, C] of g.entries())
      a0(A, i0(B, Q.toString()), C);
  else
    g instanceof Date ? A.push([B, g.toISOString()]) : typeof g == "boolean" ? A.push([B, g ? "1" : "0"]) : typeof g == "string" ? A.push([B, g]) : typeof g == "number" ? A.push([B, `${g}`]) : g == null ? A.push([B, ""]) : c0(g, B, A);
}
function DU(A, B) {
  return A === B;
}
var oU = ((A) => (A[A.Open = 0] = "Open", A[A.Closed = 1] = "Closed", A))(oU || {}), eU = ((A) => (A[A.Single = 0] = "Single", A[A.Multi = 1] = "Multi", A))(eU || {}), YU = ((A) => (A[A.Pointer = 0] = "Pointer", A[A.Focus = 1] = "Focus", A[A.Other = 2] = "Other", A))(YU || {});
let F0 = Symbol("ComboboxContext");
function sQ(A) {
  let B = ZA(F0, null);
  if (B === null) {
    let g = new Error(`<${A} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(g, sQ), g;
  }
  return B;
}
let r0 = Symbol("VirtualContext"), MU = /* @__PURE__ */ oB({ name: "VirtualProvider", setup(A, { slots: B }) {
  let g = sQ("VirtualProvider"), Q = k(() => {
    let e = JA(g.optionsRef);
    if (!e)
      return { start: 0, end: 0 };
    let Y = window.getComputedStyle(e);
    return { start: parseFloat(Y.paddingBlockStart || Y.paddingTop), end: parseFloat(Y.paddingBlockEnd || Y.paddingBottom) };
  }), C = j2(k(() => ({ scrollPaddingStart: Q.value.start, scrollPaddingEnd: Q.value.end, count: g.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return JA(g.optionsRef);
  }, overscan: 12 }))), E = k(() => {
    var e;
    return (e = g.virtual.value) == null ? void 0 : e.options;
  }), I = Z(0);
  return aA([E], () => {
    I.value += 1;
  }), jB(r0, g.virtual.value ? C : null), () => [nB("div", { style: { position: "relative", width: "100%", height: `${C.value.getTotalSize()}px` }, ref: (e) => {
    if (e) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || g.activationTrigger.value === 0)
        return;
      g.activeOptionIndex.value !== null && g.virtual.value.options.length > g.activeOptionIndex.value && C.value.scrollToIndex(g.activeOptionIndex.value);
    }
  } }, C.value.getVirtualItems().map((e) => kB(B.default({ option: g.virtual.value.options[e.index], open: g.comboboxState.value === 0 })[0], { key: `${I.value}-${e.index}`, "data-index": e.index, "aria-setsize": g.virtual.value.options.length, "aria-posinset": e.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${e.start}px)`, overflowAnchor: "none" } })))];
} }), PU = /* @__PURE__ */ oB({ name: "Combobox", emits: { "update:modelValue": (A) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(A, { slots: B, attrs: g, emit: Q }) {
  let C = Z(1), E = Z(null), I = Z(null), e = Z(null), Y = Z(null), M = Z({ static: !1, hold: !1 }), P = Z([]), t = Z(null), i = Z(2), F = Z(!1);
  function c(j = (m) => m) {
    let m = t.value !== null ? P.value[t.value] : null, f = j(P.value.slice()), x = f.length > 0 && f[0].dataRef.order.value !== null ? f.sort((IA, eA) => IA.dataRef.order.value - eA.dataRef.order.value) : V2(f, (IA) => JA(IA.dataRef.domRef)), AA = m ? x.indexOf(m) : null;
    return AA === -1 && (AA = null), { options: x, activeOptionIndex: AA };
  }
  let a = k(() => A.multiple ? 1 : 0), r = k(() => A.nullable), [n, G] = N2(k(() => A.modelValue), (j) => Q("update:modelValue", j), k(() => A.defaultValue)), l = k(() => n.value === void 0 ? vB(a.value, { 1: [], 0: void 0 }) : n.value), u = null, S = null;
  function J(j) {
    return vB(a.value, { 0() {
      return G == null ? void 0 : G(j);
    }, 1: () => {
      let m = DA(v.value.value).slice(), f = DA(j), x = m.findIndex((AA) => v.compare(f, DA(AA)));
      return x === -1 ? m.push(f) : m.splice(x, 1), G == null ? void 0 : G(m);
    } });
  }
  let QA = k(() => {
  });
  aA([QA], ([j], [m]) => {
    if (v.virtual.value && j && m && t.value !== null) {
      let f = j.indexOf(m[t.value]);
      f !== -1 ? t.value = f : t.value = null;
    }
  });
  let v = { comboboxState: C, value: l, mode: a, compare(j, m) {
    if (typeof A.by == "string") {
      let f = A.by;
      return (j == null ? void 0 : j[f]) === (m == null ? void 0 : m[f]);
    }
    return A.by === null ? DU(j, m) : A.by(j, m);
  }, calculateIndex(j) {
    return v.virtual.value ? A.by === null ? v.virtual.value.options.indexOf(j) : v.virtual.value.options.findIndex((m) => v.compare(m, j)) : P.value.findIndex((m) => v.compare(m.dataRef.value, j));
  }, defaultValue: k(() => A.defaultValue), nullable: r, immediate: k(() => !1), virtual: k(() => null), inputRef: I, labelRef: E, buttonRef: e, optionsRef: Y, disabled: k(() => A.disabled), options: P, change(j) {
    G(j);
  }, activeOptionIndex: k(() => {
    if (F.value && t.value === null && (v.virtual.value ? v.virtual.value.options.length > 0 : P.value.length > 0)) {
      if (v.virtual.value) {
        let m = v.virtual.value.options.findIndex((f) => {
          var x;
          return !((x = v.virtual.value) != null && x.disabled(f));
        });
        if (m !== -1)
          return m;
      }
      let j = P.value.findIndex((m) => !m.dataRef.disabled);
      if (j !== -1)
        return j;
    }
    return t.value;
  }), activationTrigger: i, optionsPropsRef: M, closeCombobox() {
    F.value = !1, !A.disabled && C.value !== 1 && (C.value = 1, t.value = null);
  }, openCombobox() {
    if (F.value = !0, !A.disabled && C.value !== 0) {
      if (v.value.value) {
        let j = v.calculateIndex(v.value.value);
        j !== -1 && (t.value = j);
      }
      C.value = 0;
    }
  }, setActivationTrigger(j) {
    i.value = j;
  }, goToOption(j, m, f) {
    F.value = !1, u !== null && cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      if (A.disabled || Y.value && !M.value.static && C.value === 1)
        return;
      if (v.virtual.value) {
        t.value = j === OB.Specific ? m : Zw({ focus: j }, { resolveItems: () => v.virtual.value.options, resolveActiveIndex: () => {
          var IA, eA;
          return (eA = (IA = v.activeOptionIndex.value) != null ? IA : v.virtual.value.options.findIndex((cA) => {
            var YA;
            return !((YA = v.virtual.value) != null && YA.disabled(cA));
          })) != null ? eA : null;
        }, resolveDisabled: (IA) => v.virtual.value.disabled(IA), resolveId() {
          throw new Error("Function not implemented.");
        } }), i.value = f ?? 2;
        return;
      }
      let x = c();
      if (x.activeOptionIndex === null) {
        let IA = x.options.findIndex((eA) => !eA.dataRef.disabled);
        IA !== -1 && (x.activeOptionIndex = IA);
      }
      let AA = j === OB.Specific ? m : Zw({ focus: j }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (IA) => IA.id, resolveDisabled: (IA) => IA.dataRef.disabled });
      t.value = AA, i.value = f ?? 2, P.value = x.options;
    });
  }, selectOption(j) {
    let m = P.value.find((x) => x.id === j);
    if (!m)
      return;
    let { dataRef: f } = m;
    J(f.value);
  }, selectActiveOption() {
    if (v.activeOptionIndex.value !== null) {
      if (v.virtual.value)
        J(v.virtual.value.options[v.activeOptionIndex.value]);
      else {
        let { dataRef: j } = P.value[v.activeOptionIndex.value];
        J(j.value);
      }
      v.goToOption(OB.Specific, v.activeOptionIndex.value);
    }
  }, registerOption(j, m) {
    let f = EB({ id: j, dataRef: m });
    if (v.virtual.value) {
      P.value.push(f);
      return;
    }
    S && cancelAnimationFrame(S);
    let x = c((AA) => (AA.push(f), AA));
    t.value === null && v.isSelected(m.value.value) && (x.activeOptionIndex = x.options.indexOf(f)), P.value = x.options, t.value = x.activeOptionIndex, i.value = 2, x.options.some((AA) => !JA(AA.dataRef.domRef)) && (S = requestAnimationFrame(() => {
      let AA = c();
      P.value = AA.options, t.value = AA.activeOptionIndex;
    }));
  }, unregisterOption(j, m) {
    if (u !== null && cancelAnimationFrame(u), m && (F.value = !0), v.virtual.value) {
      P.value = P.value.filter((x) => x.id !== j);
      return;
    }
    let f = c((x) => {
      let AA = x.findIndex((IA) => IA.id === j);
      return AA !== -1 && x.splice(AA, 1), x;
    });
    P.value = f.options, t.value = f.activeOptionIndex, i.value = 2;
  }, isSelected(j) {
    return vB(a.value, { 0: () => v.compare(DA(v.value.value), DA(j)), 1: () => DA(v.value.value).some((m) => v.compare(DA(m), DA(j))) });
  }, isActive(j) {
    return t.value === v.calculateIndex(j);
  } };
  _2([I, e, Y], () => v.closeCombobox(), k(() => C.value === 0)), jB(F0, v), t0(k(() => vB(C.value, { 0: gB.Open, 1: gB.Closed })));
  let L = k(() => {
    var j;
    return (j = JA(I)) == null ? void 0 : j.closest("form");
  });
  return LA(() => {
    aA([L], () => {
      if (!L.value || A.defaultValue === void 0)
        return;
      function j() {
        v.change(A.defaultValue);
      }
      return L.value.addEventListener("reset", j), () => {
        var m;
        (m = L.value) == null || m.removeEventListener("reset", j);
      };
    }, { immediate: !0 });
  }), () => {
    var j, m, f;
    let { name: x, disabled: AA, form: IA, ...eA } = A, cA = { open: C.value === 0, disabled: AA, activeIndex: v.activeOptionIndex.value, activeOption: v.activeOptionIndex.value === null ? null : v.virtual.value ? v.virtual.value.options[(j = v.activeOptionIndex.value) != null ? j : 0] : (f = (m = v.options.value[v.activeOptionIndex.value]) == null ? void 0 : m.dataRef.value) != null ? f : null, value: l.value };
    return nB(sA, [...x != null && l.value != null ? c0({ [x]: l.value }).map(([YA, WA]) => nB(CU, gU({ features: M0.Hidden, key: YA, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: IA, name: YA, value: WA }))) : [], Hg({ theirProps: { ...g, ...rQ(eA, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: cA, slots: B, attrs: g, name: "Combobox" })]);
  };
} }), tU = /* @__PURE__ */ oB({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(A, { attrs: B, slots: g, expose: Q }) {
  var C;
  let E = (C = A.id) != null ? C : `headlessui-combobox-button-${hC()}`, I = sQ("ComboboxButton");
  Q({ el: I.buttonRef, $el: I.buttonRef });
  function e(P) {
    I.disabled.value || (I.comboboxState.value === 0 ? I.closeCombobox() : (P.preventDefault(), I.openCombobox()), QB(() => {
      var t;
      return (t = JA(I.inputRef)) == null ? void 0 : t.focus({ preventScroll: !0 });
    }));
  }
  function Y(P) {
    switch (P.key) {
      case LQ.ArrowDown:
        P.preventDefault(), P.stopPropagation(), I.comboboxState.value === 1 && I.openCombobox(), QB(() => {
          var t;
          return (t = I.inputRef.value) == null ? void 0 : t.focus({ preventScroll: !0 });
        });
        return;
      case LQ.ArrowUp:
        P.preventDefault(), P.stopPropagation(), I.comboboxState.value === 1 && (I.openCombobox(), QB(() => {
          I.value.value || I.goToOption(OB.Last);
        })), QB(() => {
          var t;
          return (t = I.inputRef.value) == null ? void 0 : t.focus({ preventScroll: !0 });
        });
        return;
      case LQ.Escape:
        if (I.comboboxState.value !== 0)
          return;
        P.preventDefault(), I.optionsRef.value && !I.optionsPropsRef.value.static && P.stopPropagation(), I.closeCombobox(), QB(() => {
          var t;
          return (t = I.inputRef.value) == null ? void 0 : t.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let M = $2(k(() => ({ as: A.as, type: B.type })), I.buttonRef);
  return () => {
    var P, t;
    let i = { open: I.comboboxState.value === 0, disabled: I.disabled.value, value: I.value.value }, { ...F } = A, c = { ref: I.buttonRef, id: E, type: M.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (P = JA(I.optionsRef)) == null ? void 0 : P.id, "aria-expanded": I.comboboxState.value === 0, "aria-labelledby": I.labelRef.value ? [(t = JA(I.labelRef)) == null ? void 0 : t.id, E].join(" ") : void 0, disabled: I.disabled.value === !0 ? !0 : void 0, onKeydown: Y, onClick: e };
    return Hg({ ourProps: c, theirProps: F, slot: i, attrs: B, slots: g, name: "ComboboxButton" });
  };
} }), cU = /* @__PURE__ */ oB({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(A, { attrs: B, slots: g, expose: Q }) {
  let C = sQ("ComboboxOptions"), E = `headlessui-combobox-options-${hC()}`;
  Q({ el: C.optionsRef, $el: C.optionsRef }), wB(() => {
    C.optionsPropsRef.value.static = A.static;
  }), wB(() => {
    C.optionsPropsRef.value.hold = A.hold;
  });
  let I = _E(), e = k(() => I !== null ? (I.value & gB.Open) === gB.Open : C.comboboxState.value === 0);
  return BU({ container: k(() => JA(C.optionsRef)), enabled: k(() => C.comboboxState.value === 0), accept(Y) {
    return Y.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : Y.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(Y) {
    Y.setAttribute("role", "none");
  } }), () => {
    var Y, M, P;
    let t = { open: C.comboboxState.value === 0 }, i = { "aria-labelledby": (P = (Y = JA(C.labelRef)) == null ? void 0 : Y.id) != null ? P : (M = JA(C.buttonRef)) == null ? void 0 : M.id, id: E, ref: C.optionsRef, role: "listbox", "aria-multiselectable": C.mode.value === 1 ? !0 : void 0 }, F = rQ(A, ["hold"]);
    return Hg({ ourProps: i, theirProps: F, slot: t, attrs: B, slots: C.virtual.value && C.comboboxState.value === 0 ? { ...g, default: () => [nB(MU, {}, g.default)] } : g, features: IC.RenderStrategy | IC.Static, visible: e.value, name: "ComboboxOptions" });
  };
} }), xC = /* @__PURE__ */ oB({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(A, { slots: B, attrs: g, expose: Q }) {
  let C = sQ("ComboboxOption"), E = `headlessui-combobox-option-${hC()}`, I = Z(null);
  Q({ el: I, $el: I });
  let e = k(() => {
    var n;
    return C.virtual.value ? C.activeOptionIndex.value === C.calculateIndex(A.value) : C.activeOptionIndex.value === null ? !1 : ((n = C.options.value[C.activeOptionIndex.value]) == null ? void 0 : n.id) === E;
  }), Y = k(() => C.isSelected(A.value)), M = ZA(r0, null), P = k(() => ({ disabled: A.disabled, value: A.value, domRef: I, order: k(() => A.order) }));
  LA(() => C.registerOption(E, P)), Rg(() => C.unregisterOption(E, e.value)), wB(() => {
    let n = JA(I);
    n && (M == null || M.value.measureElement(n));
  }), wB(() => {
    C.comboboxState.value === 0 && e.value && (C.virtual.value || C.activationTrigger.value !== 0 && QB(() => {
      var n, G;
      return (G = (n = JA(I)) == null ? void 0 : n.scrollIntoView) == null ? void 0 : G.call(n, { block: "nearest" });
    }));
  });
  function t(n) {
    var G;
    if (A.disabled || (G = C.virtual.value) != null && G.disabled(A.value))
      return n.preventDefault();
    C.selectOption(E), o0() || requestAnimationFrame(() => {
      var l;
      return (l = JA(C.inputRef)) == null ? void 0 : l.focus({ preventScroll: !0 });
    }), C.mode.value === 0 && requestAnimationFrame(() => C.closeCombobox());
  }
  function i() {
    var n;
    if (A.disabled || (n = C.virtual.value) != null && n.disabled(A.value))
      return C.goToOption(OB.Nothing);
    let G = C.calculateIndex(A.value);
    C.goToOption(OB.Specific, G);
  }
  let F = AU();
  function c(n) {
    F.update(n);
  }
  function a(n) {
    var G;
    if (!F.wasMoved(n) || A.disabled || (G = C.virtual.value) != null && G.disabled(A.value) || e.value)
      return;
    let l = C.calculateIndex(A.value);
    C.goToOption(OB.Specific, l, 0);
  }
  function r(n) {
    var G;
    F.wasMoved(n) && (A.disabled || (G = C.virtual.value) != null && G.disabled(A.value) || e.value && (C.optionsPropsRef.value.hold || C.goToOption(OB.Nothing)));
  }
  return () => {
    let { disabled: n } = A, G = { active: e.value, selected: Y.value, disabled: n }, l = { id: E, ref: I, role: "option", tabIndex: n === !0 ? void 0 : -1, "aria-disabled": n === !0 ? !0 : void 0, "aria-selected": Y.value, disabled: void 0, onClick: t, onFocus: i, onPointerenter: c, onMouseenter: c, onPointermove: a, onMousemove: a, onPointerleave: r, onMouseleave: r }, u = rQ(A, ["order", "value"]);
    return Hg({ ourProps: l, theirProps: u, slot: G, attrs: g, slots: B, name: "ComboboxOption" });
  };
} });
function iU(A) {
  let B = { called: !1 };
  return (...g) => {
    if (!B.called)
      return B.called = !0, A(...g);
  };
}
function WC(A, ...B) {
  A && B.length > 0 && A.classList.add(...B);
}
function OQ(A, ...B) {
  A && B.length > 0 && A.classList.remove(...B);
}
var lE = ((A) => (A.Finished = "finished", A.Cancelled = "cancelled", A))(lE || {});
function aU(A, B) {
  let g = $E();
  if (!A)
    return g.dispose;
  let { transitionDuration: Q, transitionDelay: C } = getComputedStyle(A), [E, I] = [Q, C].map((e) => {
    let [Y = 0] = e.split(",").filter(Boolean).map((M) => M.includes("ms") ? parseFloat(M) : parseFloat(M) * 1e3).sort((M, P) => P - M);
    return Y;
  });
  return E !== 0 ? g.setTimeout(() => B("finished"), E + I) : B("finished"), g.add(() => B("cancelled")), g.dispose;
}
function qw(A, B, g, Q, C, E) {
  let I = $E(), e = E !== void 0 ? iU(E) : () => {
  };
  return OQ(A, ...C), WC(A, ...B, ...g), I.nextFrame(() => {
    OQ(A, ...g), WC(A, ...Q), I.add(aU(A, (Y) => (OQ(A, ...Q, ...B), WC(A, ...C), e(Y))));
  }), I.add(() => OQ(A, ...B, ...g, ...Q, ...C)), I.add(() => e("cancelled")), I.dispose;
}
function Yg(A = "") {
  return A.split(/\s+/).filter((B) => B.length > 1);
}
let AI = Symbol("TransitionContext");
var FU = ((A) => (A.Visible = "visible", A.Hidden = "hidden", A))(FU || {});
function rU() {
  return ZA(AI, null) !== null;
}
function sU() {
  let A = ZA(AI, null);
  if (A === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return A;
}
function nU() {
  let A = ZA(BI, null);
  if (A === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return A;
}
let BI = Symbol("NestingContext");
function UC(A) {
  return "children" in A ? UC(A.children) : A.value.filter(({ state: B }) => B === "visible").length > 0;
}
function s0(A) {
  let B = Z([]), g = Z(!1);
  LA(() => g.value = !0), Rg(() => g.value = !1);
  function Q(E, I = ZB.Hidden) {
    let e = B.value.findIndex(({ id: Y }) => Y === E);
    e !== -1 && (vB(I, { [ZB.Unmount]() {
      B.value.splice(e, 1);
    }, [ZB.Hidden]() {
      B.value[e].state = "hidden";
    } }), !UC(B) && g.value && (A == null || A()));
  }
  function C(E) {
    let I = B.value.find(({ id: e }) => e === E);
    return I ? I.state !== "visible" && (I.state = "visible") : B.value.push({ id: E, state: "visible" }), () => Q(E, ZB.Unmount);
  }
  return { children: B, register: C, unregister: Q };
}
let n0 = IC.RenderStrategy, hU = /* @__PURE__ */ oB({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(A, { emit: B, attrs: g, slots: Q, expose: C }) {
  let E = Z(0);
  function I() {
    E.value |= gB.Opening, B("beforeEnter");
  }
  function e() {
    E.value &= ~gB.Opening, B("afterEnter");
  }
  function Y() {
    E.value |= gB.Closing, B("beforeLeave");
  }
  function M() {
    E.value &= ~gB.Closing, B("afterLeave");
  }
  if (!rU() && EU())
    return () => nB(h0, { ...A, onBeforeEnter: I, onAfterEnter: e, onBeforeLeave: Y, onAfterLeave: M }, Q);
  let P = Z(null), t = k(() => A.unmount ? ZB.Unmount : ZB.Hidden);
  C({ el: P, $el: P });
  let { show: i, appear: F } = sU(), { register: c, unregister: a } = nU(), r = Z(i.value ? "visible" : "hidden"), n = { value: !0 }, G = hC(), l = { value: !1 }, u = s0(() => {
    !l.value && r.value !== "hidden" && (r.value = "hidden", a(G), M());
  });
  LA(() => {
    let x = c(G);
    Rg(x);
  }), wB(() => {
    if (t.value === ZB.Hidden && G) {
      if (i.value && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      vB(r.value, { hidden: () => a(G), visible: () => c(G) });
    }
  });
  let S = Yg(A.enter), J = Yg(A.enterFrom), QA = Yg(A.enterTo), v = Yg(A.entered), L = Yg(A.leave), j = Yg(A.leaveFrom), m = Yg(A.leaveTo);
  LA(() => {
    wB(() => {
      if (r.value === "visible") {
        let x = JA(P);
        if (x instanceof Comment && x.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function f(x) {
    let AA = n.value && !F.value, IA = JA(P);
    !IA || !(IA instanceof HTMLElement) || AA || (l.value = !0, i.value && I(), i.value || Y(), x(i.value ? qw(IA, S, J, QA, v, (eA) => {
      l.value = !1, eA === lE.Finished && e();
    }) : qw(IA, L, j, m, v, (eA) => {
      l.value = !1, eA === lE.Finished && (UC(u) || (r.value = "hidden", a(G), M()));
    })));
  }
  return LA(() => {
    aA([i], (x, AA, IA) => {
      f(IA), n.value = !1;
    }, { immediate: !0 });
  }), jB(BI, u), t0(k(() => vB(r.value, { visible: gB.Open, hidden: gB.Closed }) | E.value)), () => {
    let { appear: x, show: AA, enter: IA, enterFrom: eA, enterTo: cA, entered: YA, leave: WA, leaveFrom: rA, leaveTo: HA, ...UA } = A, dg = { ref: P }, Lg = { ...UA, ...F.value && i.value && GC.isServer ? { class: iA([g.class, UA.class, ...S, ...J]) } : {} };
    return Hg({ theirProps: Lg, ourProps: dg, slot: {}, slots: Q, attrs: g, features: n0, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), GU = hU, h0 = /* @__PURE__ */ oB({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(A, { emit: B, attrs: g, slots: Q }) {
  let C = _E(), E = k(() => A.show === null && C !== null ? (C.value & gB.Open) === gB.Open : A.show);
  wB(() => {
    if (![!0, !1].includes(E.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let I = Z(E.value ? "visible" : "hidden"), e = s0(() => {
    I.value = "hidden";
  }), Y = Z(!0), M = { show: E, appear: k(() => A.appear || !Y.value) };
  return LA(() => {
    wB(() => {
      Y.value = !1, E.value ? I.value = "visible" : UC(e) || (I.value = "hidden");
    });
  }), jB(BI, e), jB(AI, M), () => {
    let P = rQ(A, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), t = { unmount: A.unmount };
    return Hg({ ourProps: { ...t, as: "template" }, theirProps: {}, slot: {}, slots: { ...Q, default: () => [nB(GU, { onBeforeEnter: () => B("beforeEnter"), onAfterEnter: () => B("afterEnter"), onBeforeLeave: () => B("beforeLeave"), onAfterLeave: () => B("afterLeave"), ...g, ...t, ...P }, Q.default)] }, attrs: {}, features: n0, visible: I.value === "visible", name: "Transition" });
  };
} });
function UU(A) {
  return DD() ? (oD(A), !0) : !1;
}
function lU(A) {
  return typeof A == "function" ? A() : y(A);
}
const HU = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function dU(A) {
  return A || RB();
}
function uU(A, B = !0, g) {
  dU() ? LA(A, g) : B ? A() : QB(A);
}
function fg(A) {
  var B;
  const g = lU(A);
  return (B = g == null ? void 0 : g.$el) != null ? B : g;
}
const G0 = HU ? window : void 0;
function vU() {
  const A = Z(!1), B = RB();
  return B && LA(() => {
    A.value = !0;
  }, B), A;
}
function kU(A) {
  const B = vU();
  return k(() => (B.value, !!A()));
}
function fU(A, B, g = {}) {
  const { window: Q = G0, ...C } = g;
  let E;
  const I = kU(() => Q && "ResizeObserver" in Q), e = () => {
    E && (E.disconnect(), E = void 0);
  }, Y = k(() => Array.isArray(A) ? A.map((t) => fg(t)) : [fg(A)]), M = aA(
    Y,
    (t) => {
      if (e(), I.value && Q) {
        E = new ResizeObserver(B);
        for (const i of t)
          i && E.observe(i, C);
      }
    },
    { immediate: !0, flush: "post" }
  ), P = () => {
    e(), M();
  };
  return UU(P), {
    isSupported: I,
    stop: P
  };
}
function JU(A, B = { width: 0, height: 0 }, g = {}) {
  const { window: Q = G0, box: C = "content-box" } = g, E = k(() => {
    var t, i;
    return (i = (t = fg(A)) == null ? void 0 : t.namespaceURI) == null ? void 0 : i.includes("svg");
  }), I = Z(B.width), e = Z(B.height), { stop: Y } = fU(
    A,
    ([t]) => {
      const i = C === "border-box" ? t.borderBoxSize : C === "content-box" ? t.contentBoxSize : t.devicePixelContentBoxSize;
      if (Q && E.value) {
        const F = fg(A);
        if (F) {
          const c = Q.getComputedStyle(F);
          I.value = Number.parseFloat(c.width), e.value = Number.parseFloat(c.height);
        }
      } else if (i) {
        const F = Array.isArray(i) ? i : [i];
        I.value = F.reduce((c, { inlineSize: a }) => c + a, 0), e.value = F.reduce((c, { blockSize: a }) => c + a, 0);
      } else
        I.value = t.contentRect.width, e.value = t.contentRect.height;
    },
    g
  );
  uU(() => {
    const t = fg(A);
    t && (I.value = "offsetWidth" in t ? t.offsetWidth : B.width, e.value = "offsetHeight" in t ? t.offsetHeight : B.height);
  });
  const M = aA(
    () => fg(A),
    (t) => {
      I.value = t ? B.width : 0, e.value = t ? B.height : 0;
    }
  );
  function P() {
    Y(), M();
  }
  return {
    width: I,
    height: e,
    stop: P
  };
}
function TU(A, B) {
  const { containerStyle: g, wrapperProps: Q, scrollTo: C, calculateRange: E, currentList: I, containerRef: e } = "itemHeight" in B ? jU(B, A) : zU(B, A);
  return {
    list: I,
    scrollTo: C,
    containerProps: {
      ref: e,
      onScroll: () => {
        E();
      },
      style: g
    },
    wrapperProps: Q
  };
}
function U0(A) {
  const B = Z(null), g = JU(B), Q = Z([]), C = SE(A);
  return { state: Z({ start: 0, end: 10 }), source: C, currentList: Q, size: g, containerRef: B };
}
function l0(A, B, g) {
  return (Q) => {
    if (typeof g == "number")
      return Math.ceil(Q / g);
    const { start: C = 0 } = A.value;
    let E = 0, I = 0;
    for (let e = C; e < B.value.length; e++) {
      const Y = g(e);
      if (E += Y, I = e, E > Q)
        break;
    }
    return I - C;
  };
}
function H0(A, B) {
  return (g) => {
    if (typeof B == "number")
      return Math.floor(g / B) + 1;
    let Q = 0, C = 0;
    for (let E = 0; E < A.value.length; E++) {
      const I = B(E);
      if (Q += I, Q >= g) {
        C = E;
        break;
      }
    }
    return C + 1;
  };
}
function d0(A, B, g, Q, { containerRef: C, state: E, currentList: I, source: e }) {
  return () => {
    const Y = C.value;
    if (Y) {
      const M = g(A === "vertical" ? Y.scrollTop : Y.scrollLeft), P = Q(A === "vertical" ? Y.clientHeight : Y.clientWidth), t = M - B, i = M + P + B;
      E.value = {
        start: t < 0 ? 0 : t,
        end: i > e.value.length ? e.value.length : i
      }, I.value = e.value.slice(E.value.start, E.value.end).map((F, c) => ({
        data: F,
        index: c + E.value.start
      }));
    }
  };
}
function u0(A, B) {
  return (g) => typeof A == "number" ? g * A : B.value.slice(0, g).reduce((C, E, I) => C + A(I), 0);
}
function v0(A, B, g) {
  aA([A.width, A.height, B], () => {
    g();
  });
}
function k0(A, B) {
  return k(() => typeof A == "number" ? B.value.length * A : B.value.reduce((g, Q, C) => g + A(C), 0));
}
const OU = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function f0(A, B, g, Q) {
  return (C) => {
    Q.value && (Q.value[OU[A]] = g(C), B());
  };
}
function zU(A, B) {
  const g = U0(B), { state: Q, source: C, currentList: E, size: I, containerRef: e } = g, Y = { overflowX: "auto" }, { itemWidth: M, overscan: P = 5 } = A, t = l0(Q, C, M), i = H0(C, M), F = d0("horizontal", P, i, t, g), c = u0(M, C), a = k(() => c(Q.value.start)), r = k0(M, C);
  v0(I, B, F);
  const n = f0("horizontal", F, c, e), G = k(() => ({
    style: {
      height: "100%",
      width: `${r.value - a.value}px`,
      marginLeft: `${a.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: n,
    calculateRange: F,
    wrapperProps: G,
    containerStyle: Y,
    currentList: E,
    containerRef: e
  };
}
function jU(A, B) {
  const g = U0(B), { state: Q, source: C, currentList: E, size: I, containerRef: e } = g, Y = { overflowY: "auto" }, { itemHeight: M, overscan: P = 5 } = A, t = l0(Q, C, M), i = H0(C, M), F = d0("vertical", P, i, t, g), c = u0(M, C), a = k(() => c(Q.value.start)), r = k0(M, C);
  v0(I, B, F);
  const n = f0("vertical", F, c, e), G = k(() => ({
    style: {
      width: "100%",
      height: `${r.value - a.value}px`,
      marginTop: `${a.value}px`
    }
  }));
  return {
    calculateRange: F,
    scrollTo: n,
    containerStyle: Y,
    wrapperProps: G,
    currentList: E,
    containerRef: e
  };
}
const NU = `.virtual-scroll-container[data-v-6425c279]{height:100%;width:100%;overflow-y:auto}
`, SU = {
  __name: "PVirtualScroll",
  props: {
    items: {
      type: Array,
      required: !0
    },
    /** List item height in px, used to calculate the number of items shown */
    itemHeight: {
      type: Number,
      default: 24
    },
    /** Render offset, number of items to be rendered before and after the visible area */
    offset: {
      type: Number,
      default: 3
    }
  },
  setup(A) {
    const B = A, g = k(() => B.items), Q = k(() => B.itemHeight), C = k(() => B.offset), { list: E, containerProps: I, wrapperProps: e } = TU(g, {
      itemHeight: Q.value,
      overscan: C.value
    });
    return (Y, M) => (D(), o("div", sB({ class: "virtual-scroll-container" }, y(I)), [
      w("div", zg(iC(y(e))), [
        (D(!0), o(sA, null, lg(y(E), (P) => (D(), o("div", {
          key: P.index,
          style: Bg(`height: ${Q.value}px;`)
        }, [
          kA(Y.$slots, "default", {
            item: P.data
          }, void 0, !0)
        ], 4))), 128))
      ], 16)
    ], 16));
  }
}, RU = /* @__PURE__ */ GA(SU, [["styles", [NU]], ["__scopeId", "data-v-6425c279"]]);
function Zg(A, B) {
  return B.split(".").reduce((g, Q) => g[Q] ? g[Q] : g, A);
}
const LU = `.combobox[data-v-fd764c90]{position:relative}.combobox .input[data-v-fd764c90]{width:100%;border-radius:.375rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.625rem .75rem;text-align:left;font-size:.875rem;text-transform:capitalize;line-height:1.25rem;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.combobox .input[data-v-fd764c90]:focus-within{--tw-border-opacity: 1;border-color:rgb(79 70 229 / var(--tw-border-opacity));--tw-ring-opacity: 1;--tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity)) }.combobox .divider[data-v-fd764c90]{margin-left:1.5rem;margin-right:1.5rem;margin-top:-.0625rem}.combobox .options[data-v-fd764c90]{position:absolute;z-index:50;margin-top:.25rem;height:20rem;width:100%;overflow:auto;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:.25rem;padding-bottom:.25rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));--tw-ring-opacity: .05 }.combobox .options[data-v-fd764c90]:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 640px){.combobox .options[data-v-fd764c90]{font-size:.875rem;line-height:1.25rem}}.combobox .options .option[data-v-fd764c90]{display:flex;height:100%;cursor:pointer;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:.5rem;font-weight:400;text-transform:capitalize}.combobox .options .option.selected[data-v-fd764c90]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));font-weight:500;--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.combobox .options .option.active[data-v-fd764c90]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.combobox .options .option.title[data-v-fd764c90]{font-weight:700}.combobox .options .no-results[data-v-fd764c90]{position:relative;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:.5rem 1rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}
`;
function Xw(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        no_results: (g) => {
          const { normalize: Q } = g;
          return Q(["No results"]);
        },
        clear: (g) => {
          const { normalize: Q } = g;
          return Q(["Clear"]);
        }
      },
      nl: {
        no_results: (g) => {
          const { normalize: Q } = g;
          return Q(["Geen resultaten"]);
        },
        clear: (g) => {
          const { normalize: Q } = g;
          return Q(["Legen"]);
        }
      },
      de: {
        no_results: (g) => {
          const { normalize: Q } = g;
          return Q(["Keine Ergebnisse"]);
        },
        clear: (g) => {
          const { normalize: Q } = g;
          return Q(["Leeren"]);
        }
      }
    }
  });
}
const mU = { class: "combobox" }, KU = ["aria-label"], yU = {
  key: 0,
  class: "no-results"
}, pU = {
  key: 1,
  class: "divider"
}, xU = ["onKeyup"], WU = ["onKeyup"], bU = ["onKeyup"], J0 = {
  __name: "PCombobox",
  props: {
    /** The input value */
    modelValue: {
      type: [String, Number, Array, Object],
      default: ""
    },
    /** Option items, can be array of strings or array of objects */
    items: {
      type: Array,
      default: () => []
    },
    /** If item is an object display a specific value as the option text */
    itemText: {
      type: [String, Number],
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
    /** Use an external search function, as implemented in search input */
    externalSearch: Boolean,
    /** Item height, used to calculate the number of items shown for virtual scrolling */
    itemHeight: {
      type: Number,
      default: 40
    },
    /** Icon to display at the end of an input */
    prependIcon: {
      type: Object,
      default: () => {
      }
    },
    large: Boolean,
    showDivider: Boolean
  },
  emits: ["update:modelValue", "search"],
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), E = k({
      get() {
        return g.multiple && !Array.isArray(g.modelValue) ? [g.modelValue] : g.modelValue;
      },
      set(a) {
        Q("update:modelValue", a);
      }
    }), I = Z(null), e = Z(!1), Y = Z(-1), M = k(() => I.value && !g.externalSearch ? g.itemText ? g.items.filter((a) => (typeof g.itemText == "string" && g.itemText.includes(".") ? Zg(a, g.itemText) : a[g.itemText]).toLowerCase().replace(/\s+/g, "").includes(I.value.toLowerCase().replace(/\s+/g, ""))) : g.items.filter(
      (a) => a.toLowerCase().replace(/\s+/g, "").includes(I.value.toLowerCase().replace(/\s+/g, ""))
    ) : g.items), P = k(() => (g.externalSearch && g.items.length === 0 || M.value.length === 0) && I.value !== "" ? 40 : g.items.length * g.itemHeight);
    function t(a) {
      let r = g.items.find((n) => n[g.itemValue] === a);
      return r ? g.itemText.includes(".") ? Zg(r, g.itemText) : r[g.itemText] : g.grouped ? (r = g.items.find(
        (G) => G[g.groupItems].find((l) => l[g.itemValue] === a)
      )[g.groupItems].find((G) => G[g.itemValue] === a), r[g.itemText]) : a;
    }
    const i = k(() => {
      if (g.multiple && E.value && E.value.length > 0) {
        const r = E.value.map((n) => t(n));
        if (r.length)
          return r.join(", ");
      }
      if (E.value && E.value[g.itemText])
        return E.value[g.itemText];
      if (E.value && g.itemText.includes("."))
        return Zg(E.value, g.itemText);
      const a = g.items.find((r) => r[g.itemValue] === E.value);
      return E.value && a ? g.itemText.includes(".") ? Zg(a, g.itemText) : a[g.itemText] : (!E.value || E.value === -1) && I.value ? I.value : E.value;
    });
    function F(a) {
      e.value = a;
    }
    function c(a) {
      const r = document.querySelectorAll(".option");
      a && a.key === "ArrowDown" ? a.target.tagName === "INPUT" && e.value === !1 ? F(!0) : (a.target.tagName === "INPUT" && e.value === !0 && Y.value < r.length - 1 || a.target.tagName !== "INPUT" && e.value === !0 && Y.value < r.length - 1) && (Y.value += 1, r[Y.value].focus()) : a && a.key === "ArrowUp" && e.value && Y.value > 0 ? (Y.value -= 1, r[Y.value].focus()) : a && a.key === "Escape" && e.value ? (Y.value = -1, F(!1)) : a.type === "blur" && Y.value === -1 && setTimeout(() => F(!1), 100);
    }
    return aA(I, (a) => {
      !e.value && a && F(!0);
    }), aA(E, (a) => {
      a === null && (I.value = null);
    }), (a, r) => (D(), MA(y(PU), {
      id: A.id,
      modelValue: E.value,
      "onUpdate:modelValue": r[3] || (r[3] = (n) => E.value = n),
      multiple: A.multiple,
      nullable: A.clearable
    }, {
      default: oA(({ open: n }) => [
        w("div", mU, [
          q(nC, {
            id: A.id,
            "model-value": i.value,
            "prepend-icon": A.prependIcon,
            large: A.large,
            class: iA({ "options-open": n || e.value }),
            placeholder: A.placeholder,
            "onUpdate:modelValue": r[1] || (r[1] = (G) => {
              I.value = G, Q("search", G);
            }),
            onKeyup: [
              YB(c, ["down"]),
              YB(c, ["esc"])
            ],
            onFocus: r[2] || (r[2] = (G) => I.value ? F(!0) : null),
            onBlur: c
          }, {
            inline: oA(() => [
              kA(a.$slots, "inline", {}, () => [
                A.clearable && E.value ? (D(), o("button", {
                  key: 0,
                  class: "combobox-button",
                  "aria-label": y(C)("clear"),
                  onClick: r[0] || (r[0] = (G) => {
                    E.value = null, I.value = null;
                  })
                }, [
                  q(DB, {
                    name: "XMark",
                    "aria-hidden": ""
                  })
                ], 8, KU)) : BA("", !0),
                q(y(tU), {
                  class: "combobox-button",
                  tabindex: "0"
                }, {
                  default: oA(() => [
                    q(DB, { name: "ChevronDown" })
                  ]),
                  _: 1
                })
              ], !0)
            ]),
            _: 2
          }, 1032, ["id", "model-value", "prepend-icon", "large", "class", "placeholder"]),
          q(y(h0), {
            show: n || e.value,
            enter: "transition duration-100 ease-out",
            "enter-from": "transform scale-95 opacity-0",
            "enter-to": "transform scale-100 opacity-100",
            leave: "transition duration-75 ease-out",
            "leave-from": "transform scale-100 opacity-100",
            "leave-to": "transform scale-95 opacity-0"
          }, {
            default: oA(() => [
              q(y(cU), {
                class: "options",
                style: Bg(`height: ${P.value < 300 ? P.value : 300}px;`),
                static: ""
              }, {
                default: oA(() => [
                  M.value.length === 0 && I.value !== null ? (D(), o("div", yU, V(A.noItemsLabel || y(C)("no_results")), 1)) : BA("", !0),
                  A.showDivider ? (D(), o("hr", pU)) : BA("", !0),
                  q(RU, {
                    items: M.value,
                    "item-height": A.itemHeight
                  }, {
                    default: oA(({ item: G }) => [
                      A.grouped ? (D(), o(sA, { key: 0 }, [
                        q(y(xC), {
                          tabindex: "0",
                          disabled: "",
                          as: "template"
                        }, {
                          default: oA(() => [
                            w("li", {
                              class: "block truncate p-2 capitalize font-bold",
                              onKeyup: [
                                YB(c, ["down"]),
                                YB(c, ["up"]),
                                YB((l) => {
                                  E.value = A.itemValue ? G[A.itemValue] : G, F(!1);
                                }, ["enter"])
                              ]
                            }, [
                              kA(a.$slots, "title", { option: G }, () => [
                                dA(V(G[A.groupText]), 1)
                              ], !0)
                            ], 40, xU)
                          ]),
                          _: 2
                        }, 1024),
                        (D(!0), o(sA, null, lg(a.group[A.groupItems], (l, u) => (D(), MA(y(xC), {
                          key: u,
                          value: A.itemValue ? l[A.itemValue] : l,
                          as: "template"
                        }, {
                          default: oA(({ selected: S, active: J }) => [
                            w("li", {
                              class: iA(["option", { selected: S, active: J }]),
                              onKeyup: [
                                YB(c, ["down"]),
                                YB(c, ["up"]),
                                YB((QA) => {
                                  E.value = A.itemValue ? G[A.itemValue] : G, F(!1);
                                }, ["enter"])
                              ]
                            }, [
                              kA(a.$slots, "option", {
                                option: l,
                                selected: S,
                                active: J
                              }, () => [
                                dA(V(l[A.itemText]), 1)
                              ], !0)
                            ], 42, WU)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ], 64)) : (D(), MA(y(xC), {
                        key: 1,
                        as: "template",
                        value: A.itemValue ? G[A.itemValue] : G
                      }, {
                        default: oA(({ selected: l, active: u }) => [
                          w("li", {
                            class: iA(["option", { selected: l, active: u }]),
                            onKeyup: [
                              YB(c, ["down"]),
                              YB(c, ["up"]),
                              YB((S) => {
                                E.value = A.itemValue ? G[A.itemValue] : G, F(!1);
                              }, ["enter"])
                            ]
                          }, [
                            kA(a.$slots, "option", {
                              option: G,
                              selected: l,
                              active: u
                            }, () => [
                              dA(V(A.itemText ? G[A.itemText] : G), 1)
                            ], !0)
                          ], 42, bU)
                        ]),
                        _: 2
                      }, 1032, ["value"]))
                    ]),
                    _: 3
                  }, 8, ["items", "item-height"])
                ]),
                _: 3
              }, 8, ["style"])
            ]),
            _: 2
          }, 1032, ["show"])
        ])
      ]),
      _: 3
    }, 8, ["id", "modelValue", "multiple", "nullable"]));
  }
};
typeof Xw == "function" && Xw(J0);
const _w = /* @__PURE__ */ GA(J0, [["styles", [LU]], ["__scopeId", "data-v-fd764c90"]]), VU = `.search-container[data-v-474606b1] .modal{height:100%;max-height:24.5625rem;background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.search-container[data-v-474606b1] .modal .inner .content{padding:0}.search-container[data-v-474606b1] .modal .inner .content .search.elevated .input{border-radius:1rem;border-style:none;padding:1.5rem;font-size:1.25rem;line-height:1.75rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.search-container[data-v-474606b1] .modal .inner .content .search.elevated .input:focus-within{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.search-container[data-v-474606b1] .modal .inner .content .search.elevated .input.has-icon-prepended{padding-left:4rem;padding-right:4rem}.search-container[data-v-474606b1] .modal .inner .content .search.elevated .options-open .input{border-bottom-right-radius:0;border-bottom-left-radius:0}.search-container[data-v-474606b1] .modal .inner .content .search.elevated .options{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:1rem;border-bottom-left-radius:1rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.search-container[data-v-474606b1] .modal .inner .content .search.elevated .options .virtual-scroll-container>div>div:first-child{margin-top:1rem}.search-container[data-v-474606b1] .modal .inner .content .search.elevated .options .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-474606b1] .modal .inner .content .inline-container-prepended{left:1.5rem}.search-container[data-v-474606b1] .modal .inner .content .inline-container-prepended .icon,.search-container[data-v-474606b1] .modal .inner .content .inline-container-appended .icon{height:1.5rem;width:1.5rem}.search-container[data-v-474606b1] .modal .inner .content .inline-container-appended{right:1rem}.search-container[data-v-474606b1] .modal .inner .content .inline-container-appended .button{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.search-container[data-v-474606b1] .modal .inner .content .inline-container-appended .button.cancel{border-radius:0;border-left-width:1px;padding-left:1rem;padding-right:1rem;font-weight:400}
`;
function $w(A) {
  const B = A;
  B.__i18n = B.__i18n || [], B.__i18n.push({
    locale: "",
    resource: {
      en: {
        no_results: (g) => {
          const { normalize: Q } = g;
          return Q(["No results"]);
        },
        clear: (g) => {
          const { normalize: Q } = g;
          return Q(["Clear"]);
        },
        cancel: (g) => {
          const { normalize: Q } = g;
          return Q(["Cancel"]);
        }
      },
      nl: {
        no_results: (g) => {
          const { normalize: Q } = g;
          return Q(["Geen resultaten"]);
        },
        clear: (g) => {
          const { normalize: Q } = g;
          return Q(["Legen"]);
        },
        cancel: (g) => {
          const { normalize: Q } = g;
          return Q(["Annuleren"]);
        }
      },
      de: {
        no_results: (g) => {
          const { normalize: Q } = g;
          return Q(["Keine Ergebnisse"]);
        },
        clear: (g) => {
          const { normalize: Q } = g;
          return Q(["Leeren"]);
        },
        cancel: (g) => {
          const { normalize: Q } = g;
          return Q(["Abbrechen"]);
        }
      }
    }
  });
}
const ZU = { class: "search-container" }, T0 = {
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
      default: "Type something"
    },
    /** Option items, can be array of strings or array of objects */
    items: {
      type: Array,
      default: () => []
    },
    itemHeight: {
      type: Number,
      default: 40
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
      type: [String, Number],
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
    }
  },
  emits: ["update:modelValue", "close"],
  setup(A, { emit: B }) {
    const g = A, Q = B, { t: C } = xA(), { id: E, items: I, searchKeys: e, searchOptions: Y, itemText: M, itemValue: P, itemHeight: t } = he(g), i = EB({
      ...Y.value,
      keys: [...e.value]
    });
    let F = EB(new hg(I.value, i));
    function c(u) {
      return u != null && u.item ? M.value.includes(".") ? Zg(u.item, P.value) : P.value ? u.item[P.value] : u.item : u ? P.value ? u[P.value] : u : null;
    }
    const a = k({
      get() {
        return g.modelValue;
      },
      set(u) {
        Q("update:modelValue", c(u));
      }
    }), r = Z(null), n = k(() => r.value ? F.search(r.value) : g.items), G = EB({
      id: E.value,
      externalSearch: !0,
      clearable: !0,
      itemValue: P.value,
      itemText: M.value,
      itemHeight: t.value,
      prependIcon: {
        name: "MagnifyingGlass"
      }
    }), l = k({
      get() {
        return g.show;
      },
      set(u) {
        u || Q("close");
      }
    });
    return wB(() => {
      G.itemValue = P.value, G.itemText = M.value, F = EB(new hg(I.value, i));
    }), (u, S) => (D(), o("div", ZU, [
      A.elevated ? (D(), MA(Jo, {
        key: 0,
        modelValue: l.value,
        "onUpdate:modelValue": S[4] || (S[4] = (J) => l.value = J),
        blur: "",
        "hide-header": "",
        "hide-footer": ""
      }, {
        default: oA(() => [
          q(_w, sB({
            modelValue: a.value,
            "onUpdate:modelValue": S[2] || (S[2] = (J) => a.value = J),
            class: ["search", { elevated: A.elevated }]
          }, G, {
            items: n.value,
            large: "",
            clearable: "",
            "show-divider": "",
            onSearch: S[3] || (S[3] = (J) => r.value = J)
          }), {
            inline: oA(() => [
              r.value || a.value ? (D(), MA(AB, {
                key: 0,
                class: "clear",
                "aria-label": y(C)("clear"),
                variant: "text",
                icon: "XMark",
                onClick: S[0] || (S[0] = (J) => {
                  a.value = null, r.value = null;
                })
              }, null, 8, ["aria-label"])) : BA("", !0),
              q(AB, {
                variant: "text",
                class: "cancel",
                onClick: S[1] || (S[1] = (J) => {
                  l.value = !1, a.value = null, r.value = null;
                })
              }, {
                default: oA(() => [
                  dA(V(A.buttonText || y(C)("cancel")), 1)
                ]),
                _: 1
              })
            ]),
            option: oA(({ option: J }) => [
              kA(u.$slots, "option", {
                option: J.item
              }, () => [
                dA(V(c(J)), 1)
              ], !0)
            ]),
            _: 3
          }, 16, ["modelValue", "class", "items"])
        ]),
        _: 3
      }, 8, ["modelValue"])) : (D(), MA(_w, sB({
        key: 1,
        modelValue: a.value,
        "onUpdate:modelValue": S[5] || (S[5] = (J) => a.value = J),
        class: "search"
      }, G, {
        items: n.value,
        large: u.large,
        onSearch: S[6] || (S[6] = (J) => r.value = J)
      }), {
        option: oA(({ option: J }) => [
          kA(u.$slots, "option", {
            option: J.item
          }, () => [
            dA(V(c(J)), 1)
          ], !0)
        ]),
        _: 3
      }, 16, ["modelValue", "items", "large"]))
    ]));
  }
};
typeof $w == "function" && $w(T0);
const qU = /* @__PURE__ */ GA(T0, [["styles", [VU]], ["__scopeId", "data-v-474606b1"]]);
class XU {
  /**
   * Fetches data from the specified URL using the provided options.
   * @param {object} options - The options to be passed to the fetch function.
   * @param {string} proxy - The URL of the proxy.
   * @throws {Error} If there is an error while fetching the data.
   * @return {Promise} A promise that resolves to the fetched data in JSON format.
   */
  // eslint-disable-next-line class-methods-use-this
  async fetchData(B, g) {
    let Q = null, C;
    if (!g)
      throw new Error("Proxy URL not set, add it in the init method");
    B.method === "GET" && (C = JSON.parse(B.body).url, delete B.body);
    const E = {
      method: "POST",
      ...B
    };
    try {
      Q = await fetch(`${g}?url=${C}`, E);
    } catch (I) {
      throw new Error(`Failed to fetch data from ${JSON.parse(B.body).url}, ${I}`);
    }
    if (!Q.ok)
      throw new Error(`Failed to fetch data from ${JSON.parse(B.body).url}`);
    return await Q.json();
  }
}
class O0 extends XU {
  constructor({ proxy: B, apiVersion: g }) {
    super(), this.proxy = B, this.apiVersion = g;
  }
  /**
   * Asynchronously configures the product by fetching data from the 'products/configure' endpoint.
   *
   * @return {Promise<array>} The response from the API.
   */
  async configureProduct(B) {
    const g = {
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products/configure`,
        data: {
          ...B
        }
      })
    };
    return (await this.fetchData(g, this.proxy)).products[0];
  }
  /**
   * Retrieves the price using the specified configuration options.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getPrice(B) {
    const g = {
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/price`,
        data: {
          ...B
        }
      })
    };
    return (await this.fetchData(g, this.proxy)).prices;
  }
  /**
   * Retrieve all products to be configured in the configurator.
   *
   * @param {Object} configOptions - The configuration options for retrieving the price.
   * @return {Promise<object>} A promise that resolves to the response containing the price.
   */
  async getProducts() {
    const B = {
      method: "GET",
      body: JSON.stringify({
        url: `${this.apiVersion || ""}/products`
      })
    };
    return (await this.fetchData(B, this.proxy)).data;
  }
}
class bC {
  constructor({ code: B, options: g }) {
    this.code = B, this.options = g || [];
  }
}
class AD {
  constructor({ products: B, language: g }) {
    this.products = B, this.language = g;
  }
}
class VC {
  constructor({
    companyName: B,
    firstName: g,
    lastName: Q,
    street: C,
    houseNumber: E,
    addition: I,
    postalCode: e,
    city: Y,
    country: M,
    phone: P,
    email: t
  }) {
    this.companyName = B, this.firstName = g, this.lastName = Q, this.street = C, this.houseNumber = E, this.addition = I, this.postalCode = e, this.city = Y, this.country = M, this.phone = P, this.email = t;
  }
}
class _U {
  constructor({ address: B, products: g }) {
    this.address = B, this.products = g;
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
function z0(A, B) {
  return B !== -1 ? A.slice(0, B + 1) : A.filter((g) => g.code !== void 0);
}
function $U(A, B) {
  const g = new Date(A), Q = /* @__PURE__ */ new Date(), C = new Date(Q);
  return C.setDate(Q.getDate() + 1), g.toDateString() === C.toDateString() ? ng.global.t("tomorrow") : g.toLocaleDateString(`${B}-${B.toUpperCase()}`, {
    weekday: "long"
  });
}
function A7(A, B) {
  return new Date(A).toLocaleDateString(`${B}-${B.toUpperCase()}`, {
    month: "long",
    day: "numeric"
  });
}
function B7(A, B) {
  var Q;
  const g = A.findIndex((C) => C.code === "amount");
  return g > -1 && ((Q = B[g]) == null ? void 0 : Q.code) !== "amount" && B.find((C) => C.code === "amount") === void 0 && B.push({ code: "amount", value: 1 }), B;
}
function g7(A) {
  return A.length === 0 ? !0 : !A.includes(void 0);
}
function Q7(A, B, g) {
  let Q = "";
  g === "accessories-cross-sell" ? Q = "unit" : (g === "material" || g === "materialType") && (Q = "meter");
  const C = A.map((E) => {
    let I;
    return E.type_code === "number" && (I = {
      value: E.default_value,
      unit: E.unit_code,
      min: E.min_value,
      max: E.max_value,
      buttonText: ng.global.t("global.labels.continue")
    }), {
      code: E.code,
      title: E == null ? void 0 : E.name,
      description: E == null ? void 0 : E.description,
      image: E.images.length ? E.images[0].url : void 0,
      price: E.price ? E.price[B] : void 0,
      pricePer: Q,
      unit: E.unit_code,
      reversible: E.reversible,
      min: E.min_value,
      max: E.max_value,
      available: E == null ? void 0 : E.available,
      amount: E.default_value,
      customInput: I,
      labels: E.label ? [
        {
          text: E.label,
          color: "red"
        }
      ] : void 0
    };
  });
  return g === "accessories-cross-sell" && !C.some((E) => E.noOption) && C.unshift({
    noOption: !0,
    noOptionText: ng.global.t("global.no_accessoires")
  }), C;
}
function C7(A, B, g, Q) {
  const C = B.map((M) => {
    var a, r;
    const P = ["width", "height", "amount"];
    let t = (a = M.children) != null && a.find((n) => P.includes(n.type_code)) ? "simple" : "options";
    const i = (r = M.children) != null && r.find((n) => ["width", "height"].includes(n.code)) ? "measurement" : "amount", F = Q7(M.children, Q, M.code);
    let { code: c } = M;
    return c === "accessories-cross-sell" && (c = "accessories", t = "options-multiple"), {
      code: c,
      title: M.name,
      type: t,
      control: i,
      options: F
    };
  }), E = A.find((M) => M.code === "size"), I = g !== -1 && E && E.type === "simple" ? g - 1 : g, e = [...z0(A, I), ...C];
  return e.filter((M, P) => e.findIndex((t) => t.code === M.code) === P);
}
function j0(A) {
  let B = 1 / 0, g;
  return A.forEach((Q) => {
    const C = Q.prices.purchase_rush_surcharge;
    C < B && (B = C, g = Q);
  }), g;
}
function N0(A) {
  let B = null, g = 1 / 0;
  return A.forEach((Q) => {
    const C = j0(Q.deliveries), E = C.prices.purchase_rush_surcharge;
    E < g && (g = E, B = C);
  }), B;
}
function E7(A, B) {
  const g = N0(A);
  let Q = 0;
  return A.map((C, E) => {
    let I;
    const e = j0(C.deliveries);
    return E === 0 && (I = { text: ng.global.t("fastest"), color: "red" }), g && e.shipping_method_api_code === g.shipping_method_api_code && Q === 0 && (I || (I = { text: ng.global.t("cheapest"), color: "green" }), Q += 1), {
      date: A7(C.delivery_date, B),
      day: $U(C.delivery_date, B),
      cost: e.prices.purchase_rush_surcharge,
      label: I
    };
  });
}
function I7(A, B) {
  const Q = A[0][`products_${B}`].toString(), C = N0(A), E = C.prices.purchase_shipping_price, I = C.prices.purchase_packaging_price;
  return {
    price: Q,
    shipping: E,
    packaging: I,
    fullPrice: {
      price: A[0],
      shipping: C
    }
  };
}
class w7 {
  constructor({ proxy: B, version: g }) {
    this.proxy = B, this.version = g || "", this.repository = new O0({ proxy: B }), this.product = new bC({}), this.productConfig = new AD({}), this.address = new VC({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1;
  }
  /**
   * Set the code of the product and get the first step for the product.
   *
   * @async
   * @param {string} code - The code of the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  async setProduct(B) {
    return this.product.code = B, this.productConfig.products = [this.product], this.deliveryOptions = [], this.getNextOption(), this;
  }
  /**
   * Sets the price type of the product.
   *
   * @param {string} type - the type of price to be set, either purchase_price, sales_price or base_price
   * @param {boolean} includeVat - whether to include vat in the price
   */
  setPriceType(B, g = !1) {
    return this.priceType = g ? `${B}_incl_vat` : B, this;
  }
  /**
   * Sets the options for the product.
   *
   * @param {Product} product - The product with options to set for the product.
   * @return {object} - Returns the current instance of the object for method chaining.
   */
  setOption(B) {
    const g = B.options.flat();
    if (g.length > 0) {
      this.lastChangedIndex = -1;
      for (let C = this.product.options.length - 1; C >= 0; C -= 1)
        if (this.product.options[C].value && this.product.options[C].value !== g[C].value || this.product.options[C].code && this.product.options[C].code !== g[C].code) {
          this.lastChangedIndex = C;
          break;
        }
      const Q = z0(g, this.lastChangedIndex);
      this.product.options = B7(this.options, Q);
    }
    return this;
  }
  /**
   * Asynchronously retrieves the next option.
   * @async
   * @return {Promise<void>} - Resolves when the next option has been retrieved.
   */
  async getNextOption() {
    if (g7(this.options, this.product.options)) {
      this.loading = !0, this.productConfig.language = this.language;
      const B = await this.repository.configureProduct(this.productConfig), g = B.available_options;
      if (this.options = C7(this.options, g, this.lastChangedIndex, this.priceType), this.setOpenState(), this.setStatuses(), B.can_order && (this.canOrder = !0), B.can_order && this.product.options.length >= this.options.length && Object.keys(this.address).length) {
        const Q = await this.getProductPrice();
        this.prices = I7(Q, this.priceType), this.deliveryOptions = E7(Q, this.language);
      }
      this.loading = !1;
    }
  }
  /**
   * Set the open state of the component to open if the next option is an option step.
   */
  setOpenState() {
    this.openState = [], this.options.forEach((B, g) => {
      B.type === "options" && this.options.length - 1 === g ? this.openState.push(!0) : this.openState.push(!1);
    });
  }
  /**
   * Retrieves the product price from the repository.
   *
   * @return {Promise} The price of the product.
   */
  async getProductPrice() {
    const B = new _U({
      address: this.address,
      products: this.productConfig.products
    });
    this.loading = !0;
    const g = await this.repository.getPrice(B.getPayload());
    return this.loading = !1, g;
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
  setAddress(B) {
    return this.address = new VC(B), this;
  }
  /**
   * Set the language for the client.
   *
   * @param {string} language - the language to be set
   */
  setLanguage(B) {
    return this.language = B, this;
  }
  /**
   * Set the statuses of the options.
   *
   * @param {type} option - the option to set the status for
   * @param {type} index - the index of the option in the options array
   */
  setStatuses() {
    const B = this.options.find((Q) => Q.code === "size"), g = B && B.options && B.options.some((Q) => Q.code === "height" || Q.code === "width") ? 1 : 0;
    this.options.forEach((Q, C) => {
      this.product.options.length - g > C && (Q.status = "done");
    });
  }
  /**
   * Retrieves the configuration of the product.
   *
   * @return {Object} The configuration of the product.
   */
  getConfig() {
    const B = { ...this.product };
    if (B.options.length > 0) {
      const g = B.options.find((I) => I.code === "height"), Q = B.options.find((I) => I.code === "width"), C = [...B.options];
      g && Q && C.splice(0, 2, [Q, g]);
      const E = this.options.find((I) => I.code === "accessories");
      if (E) {
        const I = E.options;
        if (I) {
          const e = [];
          let Y = null;
          C.forEach((M, P) => {
            M.code && I.some((t) => t.code === M.code) && (Y || (Y = P), e.push(M));
          }), e.length > 1 && C.splice(Y, e.length, e);
        }
      }
      B.options = C;
    }
    return B;
  }
  /**
   * Clear all the variables and reset the state of the object.
   */
  clear() {
    return this.product = new bC({}), this.productConfig = new AD({}), this.address = new VC({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this;
  }
  /**
   * Set a configuration based on the given payload.
   *
   * @param {Price} payload - The payload containing the product to be set
   */
  async setFromPayload(B) {
    var e, Y;
    const g = B.products[0], Q = new bC({ ...g, options: [] }), { options: C } = g;
    this.setProduct(Q.code), Object.keys((e = B.deliveries[0]) == null ? void 0 : e.address).length && this.setAddress((Y = B.deliveries[0]) == null ? void 0 : Y.address);
    const E = this;
    async function I(M) {
      M >= C.length + 1 || (await E.setOption(Q).getNextOption(), C[M] && E.product.options.push(C[M]), await I(M + 1));
    }
    await I(0);
  }
}
class D7 extends w7 {
  constructor({ proxy: B }) {
    super({ proxy: B }), this.products = [], this.searchBar = null, this.configuratorModal = null, this.selectedProduct = {};
  }
  /**
   * Initializes the Probo client with the provided proxy, language, address, and price type.
   *
   * @param {string} proxy - the proxy to be initialized
   * @param {string} language - the language to be set
   * @param {object} address - the address to be set
   * @param {string} priceType - the price type to be set
   * @param {boolean} includeVat - whether to include vat in the price
   *
   * @example
   * window.proboConfigurator.init({ proxy: '/api', language: 'nl', address: {}, priceType: 'purchase_price' })
   */
  init({ proxy: B, language: g, address: Q, priceType: C, includeVat: E = !1 }) {
    return this.proxy = B, this.repository = new O0({ proxy: B }), this.setLanguage(g).setAddress(Q).setPriceType(C, E), this;
  }
  /** Get all products from endpoint */
  async getProducts() {
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
    delete this.prices.fullPrice.deliveries, delete this.prices.fullPrice.products;
    const B = this.product.options.find((E) => E.code === "amount").value, g = this.selectedProduct.translations[this.language].title, Q = this.product.options.find((E) => E.code === "width").value, C = this.product.options.find((E) => E.code === "height").value;
    return {
      excerpt: {
        product: {
          description: `${B}x ${g} ${Q}x${C}`,
          description_options: this.product.options.map((E) => E.value ? `${E.code}: ${E.value}` : `${E.code}`).join(", ")
        },
        ...this.prices.fullPrice
      },
      configuration: this.productConfig
    };
  }
  /**
   * Opens the configurator modal.
   */
  openConfigurator() {
    const B = document.getElementsByTagName("probo-product-configurator")[0];
    this.configuratorModal = B.shadowRoot.querySelector(".product-config-modal"), this.configuratorModal.showModal();
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
    const B = document.getElementsByTagName("probo-product-configurator")[0];
    this.searchBar = B.shadowRoot.querySelector(".modal"), this.products.length === 0 && await this.getProducts(), this.searchBar.showModal();
  }
  /**
   * Closes the search modal.
   */
  closeSearch() {
    this.searchBar && this.searchBar.close();
  }
  /**
   * A method that closes the configurator and dispatches the finished event.
   */
  finish() {
    this.closeConfigurator();
    const B = new Event("proboConfigurator:finished");
    window.dispatchEvent(B);
  }
}
`, e7 = { key: 0 }, Y7 = { class: "font-medium text-[1.125rem] block" }, M7 = {
  key: 0,
  class: "text-gray-500 text-sm mt-1 block"
}, P7 = { key: 1 }, t7 = { class: "font-medium text-[1.125rem] block" }, c7 = {
  key: 0,
  class: "text-gray-500 text-sm mt-1 block"
}, i7 = {
  __name: "PProductConfigurator",
  setup(A) {
    const B = EB(new D7({ proxy: "" })), { t: g, locale: Q } = xA({ useScope: "global" });
    Q.value = B.language, ng.global.locale.value = B.language;
    const C = Z(""), E = k(() => ({
      name: C.value && Object.keys(C.value).length ? C.value.translations[B.language].title : "",
      ...B.prices
    }));
    return aA(C, () => {
      C.value && (B.selectedProduct = C.value, B.closeSearch(), B.openConfigurator(), B.setProduct(C.value.code));
    }), aA(B, () => {
      B.language && (Q.value = B.language, ng.global.locale.value = B.language);
    }), LA(async () => {
      window.proboConfigurator = B;
    }), (I, e) => (D(), o("div", null, [
      q(qU, {
        id: "probo-product-search-bar",
        modelValue: C.value,
        "onUpdate:modelValue": e[0] || (e[0] = (Y) => C.value = Y),
        show: B.showSearchBar,
        items: B.products,
        elevated: "",
        "search-keys": ["code", `translations.${B.language}.title`, `translations.${B.language}.description`],
        "item-text": `translations.${B.language}.title`,
        "item-height": 80,
        onClose: e[1] || (e[1] = (Y) => {
          B.closeSearch();
        })
      }, {
        option: oA(({ option: Y }) => [
          Y && Y.translations[B.language] ? (D(), o("span", e7, [
            w("span", Y7, V(Y.translations[B.language].title), 1),
            Y.translations[B.language].description ? (D(), o("span", M7, V(Y.translations[B.language].description), 1)) : BA("", !0)
          ])) : Y && Y.translations.nl ? (D(), o("span", P7, [
            w("span", t7, V(Y.translations.nl.title), 1),
            Y.translations.nl.description ? (D(), o("span", c7, V(Y.translations.nl.description), 1)) : BA("", !0)
          ])) : BA("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "show", "items", "search-keys", "item-text"]),
      q(RG, {
        product: E.value,
        "sub-title": C.value && C.value.translations ? C.value.translations[B.language].description : "",
        template: B.options,
        config: B.getConfig(),
        "accordion-state": B.openState,
        loading: B.loading,
        "delivery-options": B.deliveryOptions,
        specs: !1,
        "show-minimize": !1,
        "extended-pricing": "",
        submit: y(g)("complete"),
        "submit-icon": "Check",
        "can-order": B.canOrder,
        "onUpdate:productConfig": e[2] || (e[2] = (Y) => B.setOption(Y).getNextOption()),
        "onSubmit:productConfig": e[3] || (e[3] = (Y) => B.finish()),
        onClose: e[4] || (e[4] = (Y) => C.value = "")
      }, null, 8, ["product", "sub-title", "template", "config", "accordion-state", "loading", "delivery-options", "submit", "can-order"])
    ]));
  }
}, a7 = /* @__PURE__ */ GA(i7, [["styles", [o7]]]), F7 = {
  install(A) {
    const B = A, g = uo(vo);
    B.use(g);
  }
};
sM({
  rootComponent: a7,
  elementName: "probo-product-configurator",
  plugins: F7,
  VueDefineCustomElement: gM,
  h: nB,
  createApp: tM,
  getCurrentInstance: RB,
  disableStyleRemoval: !0
});