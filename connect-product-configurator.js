//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function n(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var r = {}, i = [], a = () => {}, o = () => !1, s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), c = (e) => e.startsWith("onUpdate:"), l = Object.assign, u = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => w(e) === "[object Map]", h = (e) => w(e) === "[object Set]", g = (e) => w(e) === "[object Date]", _ = (e) => w(e) === "[object RegExp]", v = (e) => typeof e == "function", y = (e) => typeof e == "string", b = (e) => typeof e == "symbol", x = (e) => typeof e == "object" && !!e, S = (e) => (x(e) || v(e)) && v(e.then) && v(e.catch), C = Object.prototype.toString, w = (e) => C.call(e), T = (e) => w(e).slice(8, -1), E = (e) => w(e) === "[object Object]", D = (e) => y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, O = te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, ie = te((e) => e.replace(re, "-$1").toLowerCase()), ae = te((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = te((e) => e ? `on${ae(e)}` : ""), se = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de = (e) => {
	let t = y(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}, me = /* @__PURE__ */ n("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function he(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = y(r) ? ye(r) : he(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (y(e) || x(e)) return e;
}
var ge = /;(?![^(]*\))/g, _e = /:([^]+)/, ve = /\/\*[^]*?\*\//g;
function ye(e) {
	let t = {};
	return e.replace(ve, "").split(ge).forEach((e) => {
		if (e) {
			let n = e.split(_e);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (y(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (x(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function be(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !y(t) && (e.class = k(t)), n && (e.style = he(n)), e;
}
var xe = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Se = /* @__PURE__ */ n(xe);
xe + "";
function Ce(e) {
	return !!e || e === "";
}
function we(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ee(e[r], t[r]);
	return n;
}
function Te(e, t) {
	if (e.size !== t.size) return !1;
	let n = Array.from(t), r = new Uint8Array(n.length);
	for (let t of e) {
		let e = -1;
		for (let i = 0; i < n.length; i++) if (!r[i] && Ee(t, n[i])) {
			e = i;
			break;
		}
		if (e < 0) return !1;
		r[e] = 1;
	}
	return !0;
}
function Ee(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = b(e), r = b(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? we(e, t) : !1;
	if (n = x(e), r = x(t), n || r) {
		if (!n || !r) return !1;
		if (n = m(e), r = m(t), n || r || (n = h(e), r = h(t), n || r)) return n && r ? Te(e, t) : !1;
		if (Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ee(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function De(e, t) {
	return e.findIndex((e) => Ee(e, t));
}
var Oe = (e) => !!(e && e.__v_isRef === !0), A = (e) => y(e) ? e : e == null ? "" : p(e) || x(e) && (e.toString === C || !v(e.toString)) ? Oe(e) ? A(e.value) : JSON.stringify(e, ke, 2) : String(e), ke = (e, t) => Oe(t) ? ke(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ae(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ae(e)) } : b(t) ? Ae(t) : x(t) && !p(t) && !E(t) ? String(t) : t, Ae = (e, t = "") => b(e) ? `Symbol(${e.description ?? t})` : e;
function je(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var Me, Ne = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Me && (Me.active ? (this.parent = Me, this.index = (Me.scopes || (Me.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = Me;
			try {
				return Me = this, e();
			} finally {
				Me = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Me, Me = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Me === this) Me = this.prevScope;
			else {
				let e = Me;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Pe(e) {
	return new Ne(e);
}
function Fe() {
	return Me;
}
function Ie(e, t = !1) {
	Me && Me.cleanups.push(e);
}
var j, Le = /* @__PURE__ */ new WeakSet(), Re = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && (Me.active ? Me.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Le.has(this) && (Le.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || He(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, rt(this), Ge(this);
		let e = j, t = $e;
		j = this, $e = !0;
		try {
			return this.fn();
		} finally {
			Ke(this), j = e, $e = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ye(e);
			this.deps = this.depsTail = void 0, rt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Le.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		qe(this) && this.run();
	}
	get dirty() {
		return qe(this);
	}
}, ze = 0, Be, Ve;
function He(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ve, Ve = e;
		return;
	}
	e.next = Be, Be = e;
}
function Ue() {
	ze++;
}
function We() {
	if (--ze > 0) return;
	if (Ve) {
		let e = Ve;
		for (Ve = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Be;) {
		let t = Be;
		for (Be = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ke(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ye(r), Xe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function qe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Je(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Je(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === it) || (e.globalVersion = it, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = $e;
	j = e, $e = !0;
	try {
		Ge(e);
		let n = e.fn(e._value);
		(t.version === 0 || se(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, $e = r, Ke(e), e.flags &= -3;
	}
}
function Ye(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ye(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function Ze(e, t) {
	e.effect instanceof Re && (e = e.effect.fn);
	let n = new Re(e);
	t && l(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function Qe(e) {
	e.effect.stop();
}
var $e = !0, et = [];
function tt() {
	et.push($e), $e = !1;
}
function nt() {
	let e = et.pop();
	$e = e === void 0 || e;
}
function rt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var it = 0, at = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, ot = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !$e || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new at(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, st(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, it++, this.notify(e);
	}
	notify(e) {
		Ue();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			We();
		}
	}
};
function st(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) st(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var ct = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ Symbol(""), ut = /* @__PURE__ */ Symbol(""), dt = /* @__PURE__ */ Symbol("");
function ft(e, t, n) {
	if ($e && j) {
		let t = ct.get(e);
		t || ct.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new ot()), r.map = t, r.key = n), r.track();
	}
}
function pt(e, t, n, r, i, a) {
	let o = ct.get(e);
	if (!o) {
		it++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ue(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && D(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === dt || !b(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(dt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(lt)), m(e) && s(o.get(ut)));
				break;
			case "delete":
				i || (s(o.get(lt)), m(e) && s(o.get(ut)));
				break;
			case "set": m(e) && s(o.get(lt));
		}
	}
	We();
}
function mt(e, t) {
	let n = ct.get(e);
	return n && n.get(t);
}
function ht(e) {
	let t = /* @__PURE__ */ M(e);
	return t === e ? t : (ft(t, "iterate", dt), /* @__PURE__ */ rn(e) ? t : t.map(sn));
}
function gt(e) {
	return ft(e = /* @__PURE__ */ M(e), "iterate", dt), e;
}
function _t(e, t) {
	return /* @__PURE__ */ nn(e) ? cn(/* @__PURE__ */ tn(e) ? sn(t) : t) : sn(t);
}
var vt = {
	__proto__: null,
	[Symbol.iterator]() {
		return yt(this, Symbol.iterator, (e) => _t(this, e));
	},
	concat(...e) {
		return ht(this).concat(...e.map((e) => p(e) ? ht(e) : e));
	},
	entries() {
		return yt(this, "entries", (e) => (e[1] = _t(this, e[1]), e));
	},
	every(e, t) {
		return xt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return xt(this, "filter", e, t, (e) => e.map((e) => _t(this, e)), arguments);
	},
	find(e, t) {
		return xt(this, "find", e, t, (e) => _t(this, e), arguments);
	},
	findIndex(e, t) {
		return xt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return xt(this, "findLast", e, t, (e) => _t(this, e), arguments);
	},
	findLastIndex(e, t) {
		return xt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return xt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Ct(this, "includes", e);
	},
	indexOf(...e) {
		return Ct(this, "indexOf", e);
	},
	join(e) {
		return ht(this).join(e);
	},
	lastIndexOf(...e) {
		return Ct(this, "lastIndexOf", e);
	},
	map(e, t) {
		return xt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return wt(this, "pop");
	},
	push(...e) {
		return wt(this, "push", e);
	},
	reduce(e, ...t) {
		return St(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return St(this, "reduceRight", e, t);
	},
	shift() {
		return wt(this, "shift");
	},
	some(e, t) {
		return xt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return wt(this, "splice", e);
	},
	toReversed() {
		return ht(this).toReversed();
	},
	toSorted(e) {
		return ht(this).toSorted(e);
	},
	toSpliced(...e) {
		return ht(this).toSpliced(...e);
	},
	unshift(...e) {
		return wt(this, "unshift", e);
	},
	values() {
		return yt(this, "values", (e) => _t(this, e));
	}
};
function yt(e, t, n) {
	let r = gt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ rn(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var bt = Array.prototype;
function xt(e, t, n, r, i, a) {
	let o = gt(e), s = o !== e && !/* @__PURE__ */ rn(e), c = o[t];
	if (c !== bt[t]) {
		let t = c.apply(e, a);
		return s ? sn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, _t(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function St(e, t, n, r) {
	let i = gt(e), a = i !== e && !/* @__PURE__ */ rn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = _t(e, t)), n.call(this, t, _t(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? _t(e, c) : c;
}
function Ct(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	ft(r, "iterate", dt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ an(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function wt(e, t, n = []) {
	tt(), Ue();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return We(), nt(), r;
}
var Tt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), Et = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(b));
function Dt(e) {
	b(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
	return ft(t, "has", e), t.hasOwnProperty(e);
}
var Ot = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Jt : qt : i ? Kt : Gt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = vt[t])) return e;
			if (t === "hasOwnProperty") return Dt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ ln(e) ? e : n);
		if ((b(t) ? Et.has(t) : Tt(t)) || (r || ft(e, "get", t), i)) return o;
		if (/* @__PURE__ */ ln(o)) {
			let e = a && D(t) ? o : o.value;
			return r && x(e) ? /* @__PURE__ */ Qt(e) : e;
		}
		return x(o) ? r ? /* @__PURE__ */ Qt(o) : /* @__PURE__ */ Xt(o) : o;
	}
}, kt = class extends Ot {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && D(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ nn(i);
			if (!/* @__PURE__ */ rn(n) && !/* @__PURE__ */ nn(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ ln(i) && !/* @__PURE__ */ ln(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ ln(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && s && (o ? se(n, i) && pt(e, "set", t, n, i) : pt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && pt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!b(t) || !Et.has(t)) && ft(e, "has", t), n;
	}
	ownKeys(e) {
		return ft(e, "iterate", p(e) ? "length" : lt), Reflect.ownKeys(e);
	}
}, At = class extends Ot {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, jt = /* @__PURE__ */ new kt(), Mt = /* @__PURE__ */ new At(), Nt = /* @__PURE__ */ new kt(!0), Pt = /* @__PURE__ */ new At(!0), Ft = (e) => e, It = (e) => Reflect.getPrototypeOf(e);
function Lt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Ft : t ? cn : sn;
		return !t && ft(a, "iterate", c ? ut : lt), l(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Rt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function zt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (se(n, a) && ft(i, "get", n), ft(i, "get", a));
			let { has: o } = It(i), s = t ? Ft : e ? cn : sn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && ft(/* @__PURE__ */ M(t), "iterate", lt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (se(t, i) && ft(r, "has", t), ft(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? Ft : e ? cn : sn;
			return !e && ft(o, "iterate", lt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Rt("add"),
		set: Rt("set"),
		delete: Rt("delete"),
		clear: Rt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ M(this), r = It(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ rn(e) && !/* @__PURE__ */ nn(e) ? i : e;
			return r.has.call(n, a) || se(e, a) && r.has.call(n, e) || se(i, a) && r.has.call(n, i) || (n.add(a), pt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ rn(n) && !/* @__PURE__ */ nn(n) && (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = It(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? se(n, s) && pt(r, "set", e, n, s) : pt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = It(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && pt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
			return t && pt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Lt(r, e, t);
	}), n;
}
function Bt(e, t) {
	let n = zt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Vt = { get: /* @__PURE__ */ Bt(!1, !1) }, Ht = { get: /* @__PURE__ */ Bt(!1, !0) }, Ut = { get: /* @__PURE__ */ Bt(!0, !1) }, Wt = { get: /* @__PURE__ */ Bt(!0, !0) }, Gt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap();
function Yt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return /* @__PURE__ */ nn(e) ? e : en(e, !1, jt, Vt, Gt);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return en(e, !1, Nt, Ht, Kt);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return en(e, !0, Mt, Ut, qt);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return en(e, !0, Pt, Wt, Jt);
}
function en(e, t, n, r, i) {
	if (!x(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Yt(T(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return /* @__PURE__ */ nn(e) ? /* @__PURE__ */ tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ M(t) : e;
}
function on(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var sn = (e) => x(e) ? /* @__PURE__ */ Xt(e) : e, cn = (e) => x(e) ? /* @__PURE__ */ Qt(e) : e;
// @__NO_SIDE_EFFECTS__
function ln(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return dn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
	return dn(e, !0);
}
function dn(e, t) {
	return /* @__PURE__ */ ln(e) ? e : new fn(e, t);
}
var fn = class {
	constructor(e, t) {
		this.dep = new ot(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : sn(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ rn(e) || /* @__PURE__ */ nn(e);
		e = n ? e : /* @__PURE__ */ M(e), se(e, t) && (this._rawValue = e, this._value = n ? e : sn(e), this.dep.trigger());
	}
};
function pn(e) {
	e.dep && e.dep.trigger();
}
function P(e) {
	return /* @__PURE__ */ ln(e) ? e.value : e;
}
function mn(e) {
	return v(e) ? e() : P(e);
}
var hn = {
	get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ ln(i) && !/* @__PURE__ */ ln(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function gn(e) {
	return /* @__PURE__ */ tn(e) ? e : new Proxy(e, hn);
}
var _n = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new ot(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function vn(e) {
	return new _n(e);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = Cn(e, n);
	return t;
}
var bn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = b(t) ? t : String(t), this._raw = /* @__PURE__ */ M(e);
		let r = !0, i = e;
		if (!p(e) || b(this._key) || !D(this._key)) do
			r = !/* @__PURE__ */ an(i) || /* @__PURE__ */ rn(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = P(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ ln(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ ln(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return mt(this._raw, this._key);
	}
}, xn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Sn(e, t, n) {
	return /* @__PURE__ */ ln(e) ? e : v(e) ? new xn(e) : x(e) && arguments.length > 1 ? Cn(e, t, n) : /* @__PURE__ */ N(e);
}
function Cn(e, t, n) {
	return new bn(e, t, n);
}
var wn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new ot(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = it - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return He(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Je(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function Tn(e, t, n = !1) {
	let r, i;
	return v(e) ? r = e : (r = e.get, i = e.set), new wn(r, i, n);
}
var En = {
	GET: "get",
	HAS: "has",
	ITERATE: "iterate"
}, Dn = {
	SET: "set",
	ADD: "add",
	DELETE: "delete",
	CLEAR: "clear"
}, On = {}, kn = /* @__PURE__ */ new WeakMap(), An = void 0;
function jn() {
	return An;
}
function Mn(e, t = !1, n = An) {
	if (n) {
		let t = kn.get(n);
		t || kn.set(n, t = []), t.push(e);
	}
}
function Nn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ rn(e) || o === !1 || o === 0 ? Pn(e, 1) : Pn(e), m, h, g, _, y = !1, b = !1;
	if (/* @__PURE__ */ ln(e) ? (h = () => e.value, y = /* @__PURE__ */ rn(e)) : /* @__PURE__ */ tn(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ tn(e) || /* @__PURE__ */ rn(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ ln(e)) return e.value;
		if (/* @__PURE__ */ tn(e)) return f(e);
		if (v(e)) return d ? d(e, 2) : e();
	})) : h = v(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			tt();
			try {
				g();
			} finally {
				nt();
			}
		}
		let t = An;
		An = m;
		try {
			return d ? d(e, 3, [_]) : e(_);
		} finally {
			An = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => Pn(e(), t);
	}
	let x = Fe(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(On) : On, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) {
			if (t) {
				let n = m.run();
				if (e || o || y || (b ? n.some((e, t) => se(e, C[t])) : se(n, C))) {
					g && g();
					let e = An;
					An = m;
					try {
						let e = [
							n,
							C === On ? void 0 : b && C[0] === On ? [] : C,
							_
						];
						C = n, d ? d(t, 3, e) : t(...e);
					} finally {
						An = e;
					}
				}
			} else m.run();
		}
	};
	return l && l(w), m = new Re(h), m.scheduler = c ? () => c(w, !1) : w, _ = (e) => Mn(e, !1, m), g = m.onStop = () => {
		let e = kn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			kn.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function Pn(e, t = Infinity, n) {
	if (t <= 0 || !x(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ ln(e)) Pn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) Pn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		Pn(e, t, n);
	});
	else if (E(e)) {
		for (let r in e) Pn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Pn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var Fn = [];
function In(e) {
	Fn.push(e);
}
function Ln() {
	Fn.pop();
}
function Rn(e, t) {}
var zn = {
	SETUP_FUNCTION: 0,
	0: "SETUP_FUNCTION",
	RENDER_FUNCTION: 1,
	1: "RENDER_FUNCTION",
	NATIVE_EVENT_HANDLER: 5,
	5: "NATIVE_EVENT_HANDLER",
	COMPONENT_EVENT_HANDLER: 6,
	6: "COMPONENT_EVENT_HANDLER",
	VNODE_HOOK: 7,
	7: "VNODE_HOOK",
	DIRECTIVE_HOOK: 8,
	8: "DIRECTIVE_HOOK",
	TRANSITION_HOOK: 9,
	9: "TRANSITION_HOOK",
	APP_ERROR_HANDLER: 10,
	10: "APP_ERROR_HANDLER",
	APP_WARN_HANDLER: 11,
	11: "APP_WARN_HANDLER",
	FUNCTION_REF: 12,
	12: "FUNCTION_REF",
	ASYNC_COMPONENT_LOADER: 13,
	13: "ASYNC_COMPONENT_LOADER",
	SCHEDULER: 14,
	14: "SCHEDULER",
	COMPONENT_UPDATE: 15,
	15: "COMPONENT_UPDATE",
	APP_UNMOUNT_CLEANUP: 16,
	16: "APP_UNMOUNT_CLEANUP"
}, Bn = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function Vn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Un(e, t, n);
	}
}
function Hn(e, t, n, r) {
	if (v(e)) {
		let i = Vn(e, t, n, r);
		return i && S(i) && i.catch((e) => {
			Un(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Hn(e[a], t, n, r));
		return i;
	}
}
function Un(e, t, n, i = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || r;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			tt(), Vn(o, null, 10, [
				e,
				i,
				a
			]), nt();
			return;
		}
	}
	Wn(e, n, a, i, s);
}
function Wn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Gn = [], Kn = -1, qn = [], Jn = null, Yn = 0, Xn = /* @__PURE__ */ Promise.resolve(), Zn = null;
function Qn(e) {
	let t = Zn || Xn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function $n(e) {
	let t = Kn + 1, n = Gn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Gn[r], a = ar(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function er(e) {
	if (!(e.flags & 1)) {
		let t = ar(e), n = Gn[Gn.length - 1];
		!n || !(e.flags & 2) && t >= ar(n) ? Gn.push(e) : Gn.splice($n(t), 0, e), e.flags |= 1, tr();
	}
}
function tr() {
	Zn ||= Xn.then(or);
}
function nr(e) {
	if (!p(e)) Jn && e.id === -1 ? Jn.splice(Yn + 1, 0, e) : e.flags & 1 || (qn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) qn.push(e[t]);
	tr();
}
function rr(e, t, n = Kn + 1) {
	for (; n < Gn.length; n++) {
		let t = Gn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			Gn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function ir(e) {
	if (qn.length) {
		let e = [...new Set(qn)].sort((e, t) => ar(e) - ar(t));
		if (qn.length = 0, Jn) {
			for (let t = 0; t < e.length; t++) Jn.push(e[t]);
			return;
		}
		for (Jn = e, Yn = 0; Yn < Jn.length; Yn++) {
			let e = Jn[Yn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Jn = null, Yn = 0;
	}
}
var ar = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function or(e) {
	try {
		for (Kn = 0; Kn < Gn.length; Kn++) {
			let e = Gn[Kn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Vn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Kn < Gn.length; Kn++) {
			let e = Gn[Kn];
			e && (e.flags &= -2);
		}
		Kn = -1, Gn.length = 0, ir(e), Zn = null, (Gn.length || qn.length) && or(e);
	}
}
var sr, cr = [];
function lr(e, t) {
	sr = e, sr ? (sr.enabled = !0, cr.forEach(({ event: e, args: t }) => sr.emit(e, ...t)), cr = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		lr(e, t);
	}), setTimeout(() => {
		sr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, cr = []);
	}, 3e3)) : cr = [];
}
var ur = null, dr = null;
function fr(e) {
	let t = ur;
	return ur = e, dr = e && e.type.__scopeId || null, t;
}
function pr(e) {
	dr = e;
}
function mr() {
	dr = null;
}
var hr = (e) => F;
function F(e, t = ur, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ps(-1);
		let i = fr(t), a = ls.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = ls.length; e > a; e--) ds();
			fr(i), r._d && ps(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function gr(e, t) {
	if (ur === null) return e;
	let n = Ys(ur), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (v(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && Pn(o), i.push({
			dir: a,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function _r(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (tt(), Hn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), nt());
	}
}
function vr(e, t) {
	if (js) {
		let n = js.provides, r = js.parent && js.parent.provides;
		r === n && (n = js.provides = Object.create(r)), n[e] = t;
	}
}
function yr(e, t, n = !1) {
	let r = Ms();
	if (r || no) {
		let i = no ? no._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && v(t) ? t.call(r && r.proxy) : t;
	}
}
function br() {
	return !!(Ms() || no);
}
var xr = /* @__PURE__ */ Symbol.for("v-scx"), Sr = () => yr(xr);
function Cr(e, t) {
	return Er(e, null, t);
}
function wr(e, t) {
	return Er(e, null, { flush: "post" });
}
function Tr(e, t) {
	return Er(e, null, { flush: "sync" });
}
function I(e, t, n) {
	return Er(e, t, n);
}
function Er(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Rs) {
		if (s === "sync") {
			let e = Sr();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = js;
	u.call = (e, t, n) => Hn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Io(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : er(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = Nn(e, t, u);
	return Rs && (f ? f.push(h) : d && h()), h;
}
function Dr(e, t, n) {
	let r = this.proxy, i = y(e) ? e.includes(".") ? Or(r, e) : () => r[e] : e.bind(r, r), a;
	v(t) ? a = t : (a = t.handler, n = t);
	let o = Fs(this), s = Er(i, a.bind(r), n);
	return o(), s;
}
function Or(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var kr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ Symbol("_vte"), jr = (e) => e.__isTeleport, Mr = (e) => e && (e.disabled || e.disabled === ""), Nr = (e) => e && (e.defer || e.defer === ""), Pr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Fr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ir = (e, t) => {
	let n = e && e.to;
	return y(n) ? t ? t(n) : null : n;
}, Lr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Mr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Mr(e.props), r = e.target = Ir(e.props, m), a = Hr(r, e, h, p);
			r && (o !== "svg" && Pr(r) ? o = "svg" : o !== "mathml" && Fr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), Vr(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (kr.get(e) === t) {
					if (kr.delete(e), Mr(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), Vr(e, !0);
					}
					x(e);
				}
			};
			kr.set(e, t), Io(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), Nr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), Vr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = kr.get(e);
			if (u) {
				u.flags |= 8, kr.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Mr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || Pr(p) ? o = "svg" : (o === "mathml" || Fr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), Uo(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Rr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = Ir(t.props, m);
				e && (t.target = e, Rr(t, e, null, l, 0));
			} else g && Rr(t, p, h, l, 1);
			Vr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = Mr(f), m = a || !p, h = kr.get(e);
		if (h && (h.flags |= 8, kr.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: Rr,
	hydrate: zr
};
function Rr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !kr.has(e) && (!d || Mr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function zr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = Ir(t.props, c), h = Mr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || Hr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || Hr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), Vr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var Br = Lr;
function Vr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function Hr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Ar] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var Ur = /* @__PURE__ */ Symbol("_leaveCb"), Wr = /* @__PURE__ */ Symbol("_enterCb");
function Gr() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Zi(() => {
		e.isMounted = !0;
	}), ea(() => {
		e.isUnmounting = !0;
	}), e;
}
var Kr = [Function, Array], qr = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Kr,
	onEnter: Kr,
	onAfterEnter: Kr,
	onEnterCancelled: Kr,
	onBeforeLeave: Kr,
	onLeave: Kr,
	onAfterLeave: Kr,
	onLeaveCancelled: Kr,
	onBeforeAppear: Kr,
	onAppear: Kr,
	onAfterAppear: Kr,
	onAppearCancelled: Kr
}, Jr = (e) => {
	let t = e.subTree;
	return t.component ? Jr(t.component) : t;
}, Yr = {
	name: "BaseTransition",
	props: qr,
	setup(e, { slots: t }) {
		let n = Ms(), r = Gr();
		return () => {
			let i = t.default && ri(t.default(), !0), a = i && i.length ? Xr(i) : n.subTree ? K() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ M(e), { mode: s } = o;
			if (r.isLeaving) return ei(a);
			let c = ti(a);
			if (!c) return ei(a);
			let l = $r(c, o, r, n, (e) => l = e);
			c.type !== z && ni(c, l);
			let u = n.subTree && ti(n.subTree);
			if (u && u.type !== z && !gs(u, c) && Jr(n).type !== z) {
				let e = $r(u, o, r, n);
				if (ni(u, e), s === "out-in" && c.type !== z) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, ei(a);
				s === "in-out" && c.type !== z ? e.delayLeave = (e, t, n) => {
					let i = Qr(r, u);
					i[String(u.key)] = u, e[Ur] = () => {
						t(), e[Ur] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function Xr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== z) {
			t = n;
			break;
		}
	}
	return t;
}
var Zr = Yr;
function Qr(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function $r(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = Qr(n, e), C = (e, t) => {
		e && Hn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), p(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, T = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) {
				if (a) r = _ || c;
				else return;
			}
			t[Ur] && t[Ur](!0);
			let i = S[x];
			i && gs(e, i) && i.el[Ur] && i.el[Ur](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) {
				if (a) r = v || l, i = y || u, o = b || d;
				else return;
			}
			let s = !1;
			t[Wr] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Wr] = void 0);
			};
			let c = t[Wr].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Wr] && t[Wr](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[Ur] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Ur] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Ur].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = $r(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function ei(e) {
	if (zi(e)) return e = Ss(e), e.children = null, e;
}
function ti(e) {
	if (!zi(e)) return jr(e.type) && e.children ? Xr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && v(n.default)) return n.default();
	}
}
function ni(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		ni(jr(n.type) && ti(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ri(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === R ? (o.patchFlag & 128 && i++, r = r.concat(ri(o.children, t, s))) : (t || o.type !== z) && r.push(s == null ? o : Ss(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
// @__NO_SIDE_EFFECTS__
function ii(e, t) {
	return v(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function ai() {
	let e = Ms();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function oi(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function si(e) {
	let t = Ms(), n = /* @__PURE__ */ un(null);
	if (t) {
		let i = t.refs === r ? t.refs = {} : t.refs;
		Object.defineProperty(i, e, {
			enumerable: !0,
			get: () => n.value,
			set: (e) => n.value = e
		});
	}
	return n;
}
function ci(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var li = /* @__PURE__ */ new WeakMap();
function ui(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => ui(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (Ii(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ui(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Ys(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ M(g), b = g === r ? o : (e) => !ci(h, e) && f(_, e), x = (e, t) => !(t && ci(h, t));
	if (m != null && m !== d) {
		if (di(t), y(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ ln(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (v(d)) Vn(d, l, 12, [c, h]);
	else {
		let t = y(d), r = /* @__PURE__ */ ln(d);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? b(d) ? g[d] : h[d] : x(d) || !e.k ? d.value : h[e.k];
					if (a) p(n) && u(n, s);
					else if (p(n)) n.includes(s) || n.push(s);
					else if (t) h[d] = [s], b(d) && (g[d] = h[d]);
					else {
						let t = [s];
						x(d, e.k) && (d.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[d] = c, b(d) && (g[d] = c)) : r && (x(d, e.k) && (d.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), li.delete(e);
				};
				t.id = -1, li.set(e, t), Io(t, n);
			} else di(e), i();
		}
	}
}
function di(e) {
	let t = li.get(e);
	t && (t.flags |= 8, li.delete(e));
}
var fi = !1, pi = () => {
	fi ||= (console.error("Hydration completed but contains mismatches."), !0);
}, mi = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", hi = (e) => e.namespaceURI.includes("MathML"), gi = (e) => {
	if (e.nodeType === 1) {
		if (mi(e)) return "svg";
		if (hi(e)) return "mathml";
	}
}, _i = (e) => e.nodeType === 8;
function vi(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: a, parentNode: o, remove: c, insert: l, createComment: u } } = e, d = (e, t) => {
		if (!t.hasChildNodes()) {
			n(null, e, t), ir(), t._vnode = e;
			return;
		}
		f(t.firstChild, e, null, null, null), ir(), t._vnode = e;
	}, f = (n, r, s, c, u, d = !1) => {
		d ||= !!r.dynamicChildren;
		let b = _i(n) && n.data === "[", x = () => g(n, r, s, c, u, b), { type: S, ref: C, shapeFlag: w, patchFlag: T } = r, E = n.nodeType;
		r.el = n, T === -2 && (d = !1, r.dynamicChildren = null);
		let D = null;
		switch (S) {
			case ss:
				E === 3 ? (n.data !== r.children && (pi(), n.data = r.children), D = a(n)) : r.children === "" ? (l(r.el = i(""), o(n), n), D = n) : D = x();
				break;
			case z:
				y(n) ? (D = a(n), v(r.el = n.content.firstChild, n, s)) : D = E !== 8 || b ? x() : a(n);
				break;
			case cs:
				if (b && (n = a(n), E = n.nodeType), E === 1 || E === 3) {
					D = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += D.nodeType === 1 ? D.outerHTML : D.data), t === r.staticCount - 1 && (r.anchor = D), D = a(D);
					return b ? a(D) : D;
				}
				x();
				break;
			case R:
				D = b ? h(n, r, s, c, u, d) : x();
				break;
			default: if (w & 1) D = (E !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) && !y(n) ? x() : p(n, r, s, c, u, d);
			else if (w & 6) {
				r.slotScopeIds = u;
				let e = o(n);
				if (D = b ? _(n) : _i(n) && n.data === "teleport start" ? _(n, n.data, "teleport end") : a(n), t(r, e, null, s, c, gi(e), d), Ii(r) && !r.component.subTree) {
					let t;
					b ? (t = W(cs), t.anchor = D ? D.previousSibling : e.lastChild) : t = n.nodeType === 3 ? G("") : W("div"), t.el = n, r.component.subTree = t;
				}
			} else w & 64 ? D = E === 8 ? r.type.hydrate(n, r, s, c, u, d, e, m) : x() : w & 128 && (D = r.type.hydrate(n, r, s, c, gi(o(n)), u, d, e, f));
		}
		return C != null && ui(C, null, c, r), D;
	}, p = (e, t, n, i, a, o) => {
		o ||= !!t.dynamicChildren;
		let { type: l, dynamicProps: u, props: d, patchFlag: f, shapeFlag: p, dirs: h, transition: g } = t, _ = l === "input" || l === "option", b = !!u;
		if (_ || b || f !== -1) {
			h && _r(t, null, n, "created");
			let l = !1;
			if (y(e)) {
				l = Ho(null, g) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (l) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), g.beforeEnter(r);
				}
				v(r, e, n), t.el = e = r;
			}
			if (p & 16 && !(d && (d.innerHTML || d.textContent))) {
				let r = m(e.firstChild, t, e, n, i, a, o);
				for (r && !Ci(e, 1) && pi(); r;) {
					let e = r;
					r = r.nextSibling, c(e);
				}
			} else if (p & 8) {
				let n = t.children;
				n[0] === "\n" && (e.tagName === "PRE" || e.tagName === "TEXTAREA") && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, "\n") && (Ci(e, 0) || pi(), e.textContent = t.children);
			}
			if (d) {
				if (_ || b || !o || f & 48) {
					let t = e.tagName.includes("-"), i = e.namespaceURI.includes("svg") ? "svg" : e.namespaceURI.includes("MathML") ? "mathml" : void 0;
					for (let a in d) if (_ && (a.endsWith("value") || a === "indeterminate") || s(a) && !ee(a) || a[0] === "." || t && !ee(a) || u && u.includes(a)) {
						if (bi(e, a, d[a])) continue;
						r(e, a, null, d[a], i, n);
					}
				} else if (d.onClick) r(e, "onClick", null, d.onClick, void 0, n);
				else if (f & 4 && /* @__PURE__ */ tn(d.style)) for (let e in d.style) d.style[e];
			}
			let x;
			(x = d && d.onVnodeBeforeMount) && Ds(x, n, t), h && _r(t, null, n, "beforeMount"), ((x = d && d.onVnodeMounted) || h || l) && is(() => {
				x && Ds(x, n, t), l && g.enter(e), h && _r(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, m = (e, t, r, o, s, c, u) => {
		u ||= !!t.dynamicChildren;
		let d = t.children, p = d.length, m = !1;
		for (let t = 0; t < p; t++) {
			let h = u ? d[t] : d[t] = ws(d[t]), g = h.type === ss;
			e ? (g && !u && t + 1 < p && ws(d[t + 1]).type === ss && (l(i(e.data.slice(h.children.length)), r, a(e)), e.data = h.children), e = f(e, h, o, s, c, u)) : g && !h.children ? l(h.el = i(""), r) : (m || (m = !0, Ci(r, 1) || pi()), n(null, h, r, null, o, s, gi(r), c));
		}
		return e;
	}, h = (e, t, n, r, i, s) => {
		let { slotScopeIds: c } = t;
		c && (i = i ? i.concat(c) : c);
		let d = o(e), f = m(a(e), t, d, n, r, i, s);
		return f && _i(f) && f.data === "]" ? a(t.anchor = f) : (pi(), l(t.anchor = u("]"), d, f), f);
	}, g = (e, t, r, i, s, l) => {
		if (Ti(e, t) || pi(), t.el = null, l) {
			let t = _(e);
			for (;;) {
				let n = a(e);
				if (n && n !== t) c(n);
				else break;
			}
		}
		let u = a(e), d = o(e);
		return c(e), n(null, t, d, u, r, i, gi(d), s), r && (r.vnode.el = t.el, _o(r, t.el)), u;
	}, _ = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if (e = a(e), e && _i(e) && (e.data === t && r++, e.data === n)) {
			if (r === 0) return a(e);
			r--;
		}
		return e;
	}, v = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, y = (e) => e.nodeType === 1 && e.tagName === "TEMPLATE";
	return [d, f];
}
var yi = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"href",
	"poster"
]);
function bi(e, t, n) {
	return yi.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
var xi = "data-allow-mismatch", Si = {
	0: "text",
	1: "children",
	2: "class",
	3: "style",
	4: "attribute"
};
function Ci(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(xi);) e = e.parentElement;
	return wi(e && e.getAttribute(xi), t);
}
function wi(e, t) {
	if (e == null) return !1;
	if (e === "") return !0;
	{
		let n = e.split(",");
		return t === 0 && n.includes("children") ? !0 : n.includes(Si[t]);
	}
}
function Ti(e, t) {
	return Ci(e.parentElement, 1) || Ei(e) || Di(t);
}
function Ei(e) {
	return e.nodeType === 1 && wi(e.getAttribute(xi), 1);
}
function Di({ props: e }) {
	let t = e && e[xi];
	return typeof t == "string" && wi(t, 1);
}
var Oi = pe().requestIdleCallback || ((e) => setTimeout(e, 1)), ki = pe().cancelIdleCallback || ((e) => clearTimeout(e)), Ai = (e = 1e4) => (t) => {
	let n = Oi(t, { timeout: e });
	return () => ki(n);
};
function ji(e) {
	let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: a, innerWidth: o } = window;
	return (t > 0 && t < a || r > 0 && r < a) && (n > 0 && n < o || i > 0 && i < o);
}
var Mi = (e) => (t, n) => {
	let r = new IntersectionObserver((e) => {
		for (let n of e) if (n.isIntersecting) {
			r.disconnect(), t();
			break;
		}
	}, e);
	return n((e) => {
		if (e instanceof Element) {
			if (ji(e)) return t(), r.disconnect(), !1;
			r.observe(e);
		}
	}), () => r.disconnect();
}, Ni = (e) => (t) => {
	if (e) {
		let n = matchMedia(e);
		if (n.matches) t();
		else return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
	}
}, Pi = (e = []) => (t, n) => {
	y(e) && (e = [e]);
	let r = !1, i = (e) => {
		r || (r = !0, a(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
	}, a = () => {
		n((t) => {
			for (let n of e) t.removeEventListener(n, i);
		});
	};
	return n((t) => {
		for (let n of e) t.addEventListener(n, i, { once: !0 });
	}), a;
};
function Fi(e, t) {
	if (_i(e) && e.data === "[") {
		let n = 1, r = e.nextSibling;
		for (; r;) {
			if (r.nodeType === 1) {
				if (t(r) === !1) break;
			} else if (_i(r)) {
				if (r.data === "]") {
					if (--n === 0) break;
				} else r.data === "[" && n++;
			}
			r = r.nextSibling;
		}
	} else t(e);
}
var Ii = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Li(e) {
	v(e) && (e = { loader: e });
	let { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, hydrate: a, timeout: o, suspensible: s = !0, onError: c } = e, l = null, u, d = 0, f = () => (d++, l = null, p()), p = () => {
		let e;
		return l || (e = l = t().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t(f()), () => n(e), d + 1);
			});
			throw e;
		}).then((t) => e !== l && l ? l : (t && (t.__esModule || t[Symbol.toStringTag] === "Module") && (t = t.default), u = t, t)));
	};
	return /* @__PURE__ */ ii({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, t, n) {
			let r = e.isConnected, i = !1;
			(t.bu ||= []).push(() => i = !0);
			let o = () => {
				i || !e.parentNode || r && !e.isConnected || n();
			}, s = a ? () => {
				let n = a(o, (t) => Fi(e, t));
				n && (t.bum ||= []).push(n);
			} : o;
			u ? s() : p().then(() => !t.isUnmounted && s());
		},
		get __asyncResolved() {
			return u;
		},
		setup() {
			let e = js;
			if (oi(e), u) return () => Ri(u, e);
			let t = (t) => {
				l = null, Un(t, e, 13, !r);
			};
			if (s && e.suspense || Rs) return p().then((t) => () => Ri(t, e)).catch((e) => (t(e), () => r ? W(r, { error: e }) : null));
			let a = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(), d = /* @__PURE__ */ N(!!i), f, m;
			return ta(() => {
				f != null && clearTimeout(f), m != null && clearTimeout(m);
			}), i && (m = setTimeout(() => {
				e.isUnmounted || (d.value = !1);
			}, i)), o != null && (f = setTimeout(() => {
				if (!e.isUnmounted && !a.value && !c.value) {
					let e = /* @__PURE__ */ Error(`Async component timed out after ${o}ms.`);
					t(e), c.value = e;
				}
			}, o)), p().then(() => {
				e.isUnmounted || (a.value = !0, e.parent && zi(e.parent.vnode) && e.parent.update());
			}).catch((n) => {
				if (e.isUnmounted) {
					l = null;
					return;
				}
				t(n), c.value = n;
			}), () => {
				if (a.value && u) return Ri(u, e);
				if (c.value && r) return W(r, { error: c.value });
				if (n && !d.value) return Ri(n, e);
			};
		}
	});
}
function Ri(e, t) {
	let { ref: n, props: r, children: i, ce: a } = t.vnode, o = W(e, r, i);
	return o.ref = n, o.ce = a, delete t.vnode.ce, o;
}
var zi = (e) => e.type.__isKeepAlive, Bi = {
	name: "KeepAlive",
	__isKeepAlive: !0,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(e, { slots: t }) {
		let n = Ms(), r = n.ctx;
		if (!r.renderer) return () => {
			let e = t.default && t.default();
			return e && e.length === 1 ? e[0] : e;
		};
		let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = null, s = n.suspense, { renderer: { p: c, m: l, um: u, o: { createElement: d } } } = r, f = d("div");
		r.activate = (e, t, n, r, i) => {
			let a = e.component;
			l(e, t, n, 0, s), c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i), Io(() => {
				a.isDeactivated = !1, a.a && ce(a.a);
				let t = e.props && e.props.onVnodeMounted;
				t && Ds(t, a.parent, e);
			}, s);
		}, r.deactivate = (e) => {
			let t = e.component;
			Ko(t.m), Ko(t.a), l(e, f, null, 1, s), Io(() => {
				t.da && ce(t.da);
				let n = e.props && e.props.onVnodeUnmounted;
				n && Ds(n, t.parent, e), t.isDeactivated = !0;
			}, s);
		};
		function p(e) {
			Ki(e), u(e, n, s, !0);
		}
		function m(e) {
			i.forEach((t, n) => {
				let r = Xs(Ii(t) ? t.type.__asyncResolved || {} : t.type);
				r && !e(r) && h(n);
			});
		}
		function h(e) {
			let t = i.get(e);
			t && (!o || !gs(t, o)) ? p(t) : o && Ki(o), i.delete(e), a.delete(e);
		}
		I(() => [e.include, e.exclude], ([e, t]) => {
			e && m((t) => Vi(e, t)), t && m((e) => !Vi(t, e));
		}, {
			flush: "post",
			deep: !0
		});
		let g = null, _ = () => {
			g != null && (Jo(n.subTree.type) ? Io(() => {
				let e = qi(n.subTree);
				e.component && i.set(g, e);
			}, n.subTree.suspense) : i.set(g, qi(n.subTree)));
		};
		return Zi(_), $i(_), ea(() => {
			i.forEach((e) => {
				let { subTree: t, suspense: r } = n, i = qi(t);
				if (e.type === i.type && e.key === i.key) {
					Ki(i);
					let e = i.component.da;
					e && Io(e, r);
					return;
				}
				p(e);
			});
		}), () => {
			if (g = null, !t.default) return o = null;
			let n = t.default(), r = n[0];
			if (n.length > 1) return o = null, n;
			if (!hs(r) || !(r.shapeFlag & 4) && !(r.shapeFlag & 128)) return o = null, r;
			let s = qi(r);
			if (s.type === z) return o = null, s;
			let c = s.type, l = Xs(Ii(s) ? s.type.__asyncResolved || {} : c), { include: u, exclude: d, max: f } = e;
			if (u && (!l || !Vi(u, l)) || d && l && Vi(d, l)) return s.shapeFlag &= -257, o = s, r;
			let p = s.key == null ? c : s.key, m = i.get(p);
			return s.el && (s = Ss(s), r.shapeFlag & 128 && (r.ssContent = s)), g = p, m ? (s.el = m.el, s.component = m.component, s.transition && ni(s, s.transition), s.shapeFlag |= 512, a.delete(p), a.add(p)) : (a.add(p), f && a.size > parseInt(f, 10) && h(a.values().next().value)), s.shapeFlag |= 256, o = s, Jo(r.type) ? r : s;
		};
	}
};
function Vi(e, t) {
	return p(e) ? e.some((e) => Vi(e, t)) : y(e) ? e.split(",").includes(t) : _(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Hi(e, t) {
	Wi(e, "a", t);
}
function Ui(e, t) {
	Wi(e, "da", t);
}
function Wi(e, t, n = js) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Ji(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) zi(e.parent.vnode) && Gi(r, t, n, e), e = e.parent;
	}
}
function Gi(e, t, n, r) {
	let i = Ji(t, e, r, !0);
	ta(() => {
		u(r[t], i);
	}, n);
}
function Ki(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function qi(e) {
	return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ji(e, t, n = js, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			tt();
			let i = Fs(n), a = Hn(t, n, e, r);
			return i(), nt(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Yi = (e) => (t, n = js) => {
	(!Rs || e === "sp") && Ji(e, (...e) => t(...e), n);
}, Xi = Yi("bm"), Zi = Yi("m"), Qi = Yi("bu"), $i = Yi("u"), ea = Yi("bum"), ta = Yi("um"), na = Yi("sp"), ra = Yi("rtg"), ia = Yi("rtc");
function aa(e, t = js) {
	Ji("ec", e, t);
}
var oa = "components", sa = "directives";
function ca(e, t) {
	return fa(oa, e, !0, t) || e;
}
var la = /* @__PURE__ */ Symbol.for("v-ndc");
function ua(e) {
	return y(e) ? fa(oa, e, !1) || e : e || la;
}
function da(e) {
	return fa(sa, e);
}
function fa(e, t, n = !0, r = !1) {
	let i = ur || js;
	if (i) {
		let n = i.type;
		if (e === oa) {
			let e = Xs(n, !1);
			if (e && (e === t || e === O(t) || e === ae(O(t)))) return n;
		}
		let a = pa(i[e] || n[e], t) || pa(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function pa(e, t) {
	return e && (e[t] || e[O(t)] || e[ae(O(t))]);
}
function ma(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || y(e)) {
		let n = o && /* @__PURE__ */ tn(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ rn(e), s = /* @__PURE__ */ nn(e), e = gt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? cn(sn(e[n])) : sn(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (x(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function ha(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (p(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function L(e, t, n, r, i, a) {
	if (n ??= {}, ur.ce || ur.parent && Ii(ur.parent) && ur.parent.ce) {
		let e = a != null && n.key == null ? l({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), B(), H(R, null, [W("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let s = ls.length;
	B();
	let c;
	try {
		let i = o && ga(o(n)), s = n.key || a || i && i.key;
		c = H(R, { key: (s && !b(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = ls.length; e > s; e--) ds();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function ga(e) {
	return e.some((e) => !hs(e) || !(e.type === z || e.type === R && !ga(e.children))) ? e : null;
}
function _a(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : oe(r)] = e[r];
	return n;
}
var va = (e) => e ? Ls(e) ? Ys(e) : va(e.parent) : null, ya = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => va(e.parent),
	$root: (e) => va(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ua(e),
	$forceUpdate: (e) => e.f ||= () => {
		er(e.update);
	},
	$nextTick: (e) => e.n ||= Qn.bind(e.proxy),
	$watch: (e) => Dr.bind(e)
}), ba = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), xa = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (ba(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Ra && (s[t] = 0);
		}
		let u = ya[t], d, p;
		if (u) return t === "$attrs" && ft(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return ba(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || ba(t, c) || f(o, c) || f(i, c) || f(ya, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
}, Sa = /* @__PURE__ */ l({}, xa, {
	get(e, t) {
		if (t !== Symbol.unscopables) return xa.get(e, t, e);
	},
	has(e, t) {
		return t[0] !== "_" && !me(t);
	}
});
function Ca() {
	return null;
}
function wa() {
	return null;
}
function Ta(e) {}
function Ea(e) {}
function Da() {
	return null;
}
function Oa() {}
function ka(e, t) {
	return null;
}
function Aa() {
	return Ma("useSlots").slots;
}
function ja() {
	return Ma("useAttrs").attrs;
}
function Ma(e) {
	let t = Ms();
	return t.setupContext ||= Js(t);
}
function Na(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Pa(e, t) {
	let n = Na(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? p(r) || v(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : r === null && (r = n[e] = { default: t[e] }), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function Fa(e, t) {
	return !e || !t ? e || t : p(e) && p(t) ? e.concat(t) : l({}, Na(e), Na(t));
}
function Ia(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function La(e) {
	let t = Ms(), n = Rs, r = e();
	Is(), n && Ps(!1);
	let i = () => {
		Fs(t), n && Ps(!0);
	}, a = () => {
		Ms() !== t && t.scope.off(), Is(), n && Ps(!1);
	};
	return S(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(a)), e;
	})), [r, () => {
		i(), Promise.resolve().then(a);
	}];
}
var Ra = !0;
function za(e) {
	let t = Ua(e), n = e.proxy, r = e.ctx;
	Ra = !1, t.beforeCreate && Va(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: _, deactivated: y, beforeDestroy: b, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: ee, serverPrefetch: te, expose: ne, inheritAttrs: O, components: re, directives: ie, filters: ae } = t;
	if (u && Ba(u, r, null), s) for (let e in s) {
		let t = s[e];
		v(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		x(t) && (e.data = /* @__PURE__ */ Xt(t));
	}
	if (Ra = !0, o) for (let e in o) {
		let t = o[e], i = J({
			get: v(t) ? t.bind(n, n) : v(t.get) ? t.get.bind(n, n) : a,
			set: !v(t) && v(t.set) ? t.set.bind(n) : a
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Ha(c[e], r, n, e);
	if (l) {
		let e = v(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			vr(t, e[t]);
		});
	}
	d && Va(d, e, "c");
	function oe(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (oe(Xi, f), oe(Zi, m), oe(Qi, h), oe($i, g), oe(Hi, _), oe(Ui, y), oe(aa, ee), oe(ia, E), oe(ra, D), oe(ea, S), oe(ta, w), oe(na, te), p(ne)) {
		if (ne.length) {
			let t = e.exposed ||= {};
			ne.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	T && e.render === a && (e.render = T), O != null && (e.inheritAttrs = O), re && (e.components = re), ie && (e.directives = ie), te && oi(e);
}
function Ba(e, t, n = a) {
	p(e) && (e = Ja(e));
	for (let n in e) {
		let r = e[n], i;
		i = x(r) ? "default" in r ? yr(r.from || n, r.default, !0) : yr(r.from || n) : yr(r), /* @__PURE__ */ ln(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Va(e, t, n) {
	Hn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ha(e, t, n, r) {
	let i = r.includes(".") ? Or(n, r) : () => n[r];
	if (y(e)) {
		let n = t[e];
		v(n) && I(i, n);
	} else if (v(e)) I(i, e.bind(n));
	else if (x(e)) {
		if (p(e)) e.forEach((e) => Ha(e, t, n, r));
		else {
			let r = v(e.handler) ? e.handler.bind(n) : t[e.handler];
			v(r) && I(i, r, e);
		}
	}
}
function Ua(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Wa(c, e, o, !0)), Wa(c, t, o)), x(t) && a.set(t, c), c;
}
function Wa(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Wa(e, a, n, !0), i && i.forEach((t) => Wa(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Ga[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Ga = {
	data: Ka,
	props: Za,
	emits: Za,
	methods: Xa,
	computed: Xa,
	beforeCreate: Ya,
	created: Ya,
	beforeMount: Ya,
	mounted: Ya,
	beforeUpdate: Ya,
	updated: Ya,
	beforeDestroy: Ya,
	beforeUnmount: Ya,
	destroyed: Ya,
	unmounted: Ya,
	activated: Ya,
	deactivated: Ya,
	errorCaptured: Ya,
	serverPrefetch: Ya,
	components: Xa,
	directives: Xa,
	watch: Qa,
	provide: Ka,
	inject: qa
};
function Ka(e, t) {
	return t ? e ? function() {
		return l(v(e) ? e.call(this, this) : e, v(t) ? t.call(this, this) : t);
	} : t : e;
}
function qa(e, t) {
	return Xa(Ja(e), Ja(t));
}
function Ja(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Ya(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Xa(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Za(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Na(e), Na(t ?? {})) : t;
}
function Qa(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Ya(e[r], t[r]);
	return n;
}
function $a() {
	return {
		app: null,
		config: {
			isNativeTag: o,
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
var eo = 0;
function to(e, t) {
	return function(n, r = null) {
		v(n) || (n = l({}, n)), r != null && !x(r) && (r = null);
		let i = $a(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: eo++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: nc,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && v(e.install) ? (a.add(e), e.install(c, ...t)) : v(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || W(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ys(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Hn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = no;
				no = c;
				try {
					return e();
				} finally {
					no = t;
				}
			}
		};
		return c;
	};
}
var no = null;
function ro(e, t, n = r) {
	let i = Ms(), a = O(t), o = ie(t), s = io(e, a), c = vn((s, c) => {
		let l, u = r, d;
		return Tr(() => {
			let t = e[a];
			se(l, t) && (l = t, c());
		}), {
			get() {
				return s(), n.get ? n.get(l) : l;
			},
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!se(s, l) && !(u !== r && se(e, u))) return;
				let f = i.vnode.props, p = !!(f && (t in f || a in f || o in f) && (`onUpdate:${t}` in f || `onUpdate:${a}` in f || `onUpdate:${o}` in f));
				p || (l = e, c()), i.emit(`update:${t}`, s), se(e, u) && (se(e, s) && !se(s, d) || p && u !== r && !se(s, l)) && c(), u = e, d = s;
			}
		};
	});
	return c[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? s || r : c,
				done: !1
			} : { done: !0 };
		} };
	}, c;
}
var io = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${ie(t)}Modifiers`];
function ao(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && io(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => y(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = oe(t)] || i[c = oe(O(t))];
	!l && o && (l = i[c = oe(ie(t))]), l && Hn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Hn(u, e, 6, a);
	}
}
var oo = /* @__PURE__ */ new WeakMap();
function so(e, t, n = !1) {
	let r = n ? oo : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!v(e)) {
		let r = (e) => {
			let n = so(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (x(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), x(e) && r.set(e, o), o);
}
function co(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ie(t)) || f(e, t));
}
function lo(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = fr(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ws(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = ws(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : fo(s);
		}
	} catch (t) {
		ls.length = 0, Un(t, e, 1), v = W(z);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = po(y, a)), b = Ss(b, y, !1, !0));
	}
	return n.dirs && (b = Ss(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ni(jr(b.type) && ti(b) || b, n.transition), v = b, fr(_), v;
}
function uo(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (hs(r)) {
			if (r.type !== z || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var fo = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, po = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function mo(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ho(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (go(o, r, n) && !co(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ho(r, o, l) : !!o;
	return !1;
}
function ho(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (go(t, e, a) && !co(n, a)) return !0;
	}
	return !1;
}
function go(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && x(r) && x(i) ? !Ee(r, i) : r !== i;
}
function _o({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var vo = {}, yo = () => Object.create(vo), bo = (e) => Object.getPrototypeOf(e) === vo;
function xo(e, t, n, r = !1) {
	let i = {}, a = yo();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Co(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Zt(i) : e.type.props ? i : a, e.attrs = a;
}
function So(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (co(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = O(o);
						i[t] = wo(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Co(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ie(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = wo(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && pt(e.attrs, "set", "");
}
function Co(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ee(r)) continue;
		let l = t[r], u;
		a && f(a, u = O(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : co(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ M(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = wo(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function wo(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && v(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Fs(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ie(n)) && (r = !0));
	}
	return r;
}
var To = /* @__PURE__ */ new WeakMap();
function Eo(e, t, n = !1) {
	let a = n ? To : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!v(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Eo(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return x(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = O(s[e]);
		Do(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = O(e);
		if (Do(t)) {
			let n = s[e], r = c[t] = p(n) || v(n) ? { type: n } : l({}, n), i = r.type, a = !1, o = !0;
			if (p(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = v(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = v(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || f(r, "default")) && u.push(t);
		}
	}
	let m = [c, u];
	return x(e) && a.set(e, m), m;
}
function Do(e) {
	return e[0] !== "$" && !ee(e);
}
var Oo = (e) => e === "_" || e === "_ctx" || e === "$stable", ko = (e) => p(e) ? e.map(ws) : [ws(e)], Ao = (e, t, n) => {
	if (t._n) return t;
	let r = F((...e) => ko(t(...e)), n);
	return r._c = !1, r;
}, jo = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Oo(n)) continue;
		let i = e[n];
		if (v(i)) t[n] = Ao(n, i, r);
		else if (i != null) {
			let e = ko(i);
			t[n] = () => e;
		}
	}
}, Mo = (e, t) => {
	let n = ko(t);
	e.slots.default = () => n;
}, No = (e, t, n) => {
	for (let r in t) (n || !Oo(r)) && (e[r] = t[r]);
}, Po = (e, t, n) => {
	let r = e.slots = yo();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (No(r, t, n), n && le(r, "_", e, !0)) : jo(t, r);
	} else t && Mo(e, t);
}, Fo = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : No(a, t, n) : (o = !t.$stable, jo(t, a)), s = t;
	} else t && (Mo(e, t), s = { default: 1 });
	if (o) for (let e in a) !Oo(e) && s[e] == null && delete a[e];
}, Io = is;
function Lo(e) {
	return zo(e);
}
function Ro(e) {
	return zo(e, vi);
}
function zo(e, t) {
	let n = pe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !gs(e, t) && (r = k(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ss:
				y(e, t, n, r);
				break;
			case z:
				b(e, t, n, r);
				break;
			case cs:
				e ?? x(t, n, r, o);
				break;
			case R:
				re(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ie(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? ui(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && ui(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, Bo(e, a), s, u), _ && _r(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ds(f, r, e);
		}
		_ && _r(e, null, r, "beforeMount");
		let v = Ho(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Io(() => {
			try {
				f && Ds(f, r, e), v && g.enter(d), _ && _r(e, null, r, "mounted");
			} finally {}
		}, i);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Jo(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Ts(e[l]) : ws(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, te = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Vo(n, !1), (g = h.onVnodeBeforeUpdate) && Ds(g, n, t, e), f && _r(t, e, n, "beforeUpdate"), n && Vo(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ne(e.dynamicChildren, d, l, n, i, Bo(t, a), o) : s || ue(e, t, l, null, n, i, Bo(t, a), o, !1), u > 0) {
			if (u & 16) O(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && O(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Io(() => {
			g && Ds(g, n, t, e), f && _r(t, e, n, "updated");
		}, i);
	}, ne = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === R || !gs(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, O = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ee(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ee(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, re = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ne(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Uo(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ie = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ae(t, n, r, i, a, o, c) : oe(e, t, c);
	}, ae = (e, t, n, r, i, a, o) => {
		let s = e.component = As(e, r, i);
		if (zi(e) && (s.ctx.renderer = Se), zs(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, se, o), !e.el) {
				let r = s.subTree = W(z);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else se(s, e, t, n, i, a, o);
	}, oe = (e, t, n) => {
		let r = t.component = e.component;
		if (mo(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				le(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, se = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Go(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							Io(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Vo(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ds(d, s, t, c), Vo(e, !0);
				let f = lo(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), k(p), e, i, a), t.el = f.el, u === null && _o(e, f.el), r && Io(r, i), (d = t.props && t.props.onVnodeUpdated) && Io(() => Ds(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Ii(t);
				if (Vo(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && Ds(o, d, t), Vo(e, !0), s && we) {
					let t = () => {
						e.subTree = lo(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = lo(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Io(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Io(() => Ds(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Ii(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Io(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Re(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => er(u), Vo(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, So(e, t.props, r, n), Fo(e, t.children, n), tt(), rr(e), nt();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? fe(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, de = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Ts(t[p]) : ws(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : D(t, n, r, a, o, s, c, l, f);
	}, fe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Ts(t[u]) : ws(t[u]);
			if (gs(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Ts(t[p]) : ws(t[p]);
			if (gs(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Ts(t[u]) : ws(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Ts(t[u]) : ws(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					he(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && gs(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Wo(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || qo(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(i, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === R) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === cs) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Ur] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Io(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Ur];
					a._isLeaving && a[Ur](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (tt(), ui(s, null, n, e, !0), nt()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Ii(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ds(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && _r(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Io(() => {
			_ && Ds(_, t, e), h && _r(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === R) {
			_e(n, r);
			return;
		}
		if (t === cs) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ko(c), Ko(l), r && ce(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && Io(s, t), Io(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, k = (e) => {
		if (e.shapeFlag & 6) return k(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Ar];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, rr(r), ir(), !1);
	}, Se = {
		p: v,
		um: he,
		m: me,
		r: ge,
		mt: ae,
		mc: D,
		pc: ue,
		pbc: ne,
		n: k,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: to(xe, Ce)
	};
}
function Bo({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Vo({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ho(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Uo(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ts(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Uo(t, a)), a.type === ss && (a.patchFlag === -1 && (a = i[e] = Ts(a)), a.el = t.el), a.type === z && !a.el && (a.el = t.el);
	}
}
function Wo(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Go(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Go(t);
}
function Ko(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function qo(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? qo(t.subTree) : null;
}
var Jo = (e) => e.__isSuspense, Yo = 0, Xo = {
	name: "Suspense",
	__isSuspense: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		if (e == null) Qo(t, n, r, i, a, o, s, c, l);
		else {
			if (a && a.deps > 0 && !e.suspense.isInFallback) {
				t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
				return;
			}
			$o(e, t, n, r, i, o, s, c, l);
		}
	},
	hydrate: ts,
	normalize: ns
};
function Zo(e, t) {
	let n = e.props && e.props[t];
	v(n) && n();
}
function Qo(e, t, n, r, i, a, o, s, c) {
	let { p: l, o: { createElement: u } } = c, d = u("div"), f = e.suspense = es(e, i, r, t, d, n, a, o, s, c);
	l(null, f.pendingBranch = e.ssContent, d, null, r, f, a, o), f.deps > 0 ? (Zo(e, "onPending"), Zo(e, "onFallback"), l(null, e.ssFallback, t, n, r, null, a, o), as(f, e.ssFallback)) : f.resolve(!1, !0);
}
function $o(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
	let d = t.suspense = e.suspense;
	d.vnode = t, t.el = e.el;
	let f = t.ssContent, p = t.ssFallback, { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
	if (h) d.pendingBranch = f, gs(h, f) ? (c(h, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : g && !_ && !d.isFallbackMountPending && (c(m, p, n, r, i, null, a, o, s), as(d, p))) : (d.pendingId = Yo++, _ ? (d.isHydrating = !1, d.activeBranch = h) : l(h, i, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), g ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : d.isFallbackMountPending || (c(m, p, n, r, i, null, a, o, s), as(d, p))) : m && gs(m, f) ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0)) : (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 && d.resolve()));
	else if (m && gs(m, f)) c(m, f, n, r, i, d, a, o, s), as(d, f);
	else if (Zo(t, "onPending"), d.pendingBranch = f, d.pendingId = f.shapeFlag & 512 ? f.component.suspenseId : Yo++, c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0) d.resolve();
	else {
		let { timeout: e, pendingId: t } = d;
		e > 0 ? setTimeout(() => {
			d.pendingId === t && d.fallback(p);
		}, e) : e === 0 && d.fallback(p);
	}
}
function es(e, t, n, r, i, a, o, s, c, l, u = !1) {
	let { p: d, m: f, um: p, n: m, o: { parentNode: h, remove: g } } = l, _, v = os(e);
	v && t && t.pendingBranch && (_ = t.pendingId, t.deps++);
	let y = e.props ? de(e.props.timeout) : void 0, b = a, x = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: o,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: Yo++,
		timeout: typeof y == "number" ? y : -1,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			let { vnode: r, activeBranch: i, pendingBranch: o, pendingId: s, effects: c, parentComponent: l, container: u, isInFallback: d } = x, g = !1;
			if (x.isHydrating) x.isHydrating = !1;
			else if (!e) {
				g = i && o.transition && o.transition.mode === "out-in";
				let e = !1;
				g && (i.transition.afterLeave = () => {
					s === x.pendingId && (f(o, u, a === b && !e ? m(i) : a, 0), nr(c), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !x.isFallbackMountPending && (h(i.el) === u && (a = m(i), e = !0), p(i, l, x, !0), !g && d && r.ssFallback && Io(() => r.ssFallback.el = null, x)), g || f(o, u, a, 0);
			}
			x.isFallbackMountPending = !1, as(x, o), x.pendingBranch = null, x.isInFallback = !1;
			let y = x.parent, S = !1;
			for (; y;) {
				if (y.pendingBranch) {
					for (let e = 0; e < c.length; e++) y.effects.push(c[e]);
					S = !0;
					break;
				}
				y = y.parent;
			}
			!S && !g && nr(c), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (t.deps--, t.deps === 0 && !n && t.resolve()), Zo(r, "onResolve");
		},
		fallback(e) {
			if (!x.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: a } = x;
			Zo(t, "onFallback");
			let o = m(n), l = () => {
				if (x.isFallbackMountPending = !1, !x.isInFallback) return;
				let e = x.vnode.ssFallback;
				d(null, e, i, o, r, null, a, s, c), as(x, e);
			}, u = e.transition && e.transition.mode === "out-in";
			u && (x.isFallbackMountPending = !0, n.transition.afterLeave = l), x.isInFallback = !0, p(n, r, null, !0), u || l();
		},
		move(e, t, n) {
			x.activeBranch && f(x.activeBranch, e, t, n), x.container = e;
		},
		next() {
			return x.activeBranch && m(x.activeBranch);
		},
		registerDep(e, t, n) {
			let r = !!x.pendingBranch;
			r && x.deps++;
			let i = e.vnode.el;
			e.asyncDep.catch((t) => {
				Un(t, e, 0);
			}).then((a) => {
				if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId) return;
				Is(), e.asyncResolved = !0;
				let { vnode: s } = e;
				Vs(e, a, !1), i && (s.el = i);
				let c = !i && e.subTree.el;
				t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n), c && (s.placeholder = null, g(c)), _o(e, s.el), r && --x.deps === 0 && x.resolve();
			});
		},
		unmount(e, t) {
			x.isUnmounted = !0, x.activeBranch && p(x.activeBranch, n, e, t), x.pendingBranch && p(x.pendingBranch, n, e, t);
		}
	};
	return x;
}
function ts(e, t, n, r, i, a, o, s, c) {
	let l = t.suspense = es(t, r, n, e.parentNode, document.createElement("div"), null, i, a, o, s, !0), u = c(e, l.pendingBranch = t.ssContent, n, l, a, o);
	return l.deps === 0 && l.resolve(!1, !0), u;
}
function ns(e) {
	let { shapeFlag: t, children: n } = e, r = t & 32;
	e.ssContent = rs(r ? n.default : n), e.ssFallback = r ? rs(n.fallback) : W(z);
}
function rs(e) {
	let t;
	if (v(e)) {
		let n = fs && e._c;
		n && (e._d = !1, B()), e = e(), n && (e._d = !0, t = us, ds());
	}
	return p(e) && (e = uo(e)), e = ws(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function is(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : nr(e);
}
function as(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) t = t.component.subTree, i = t.el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, _o(r, i));
}
function os(e) {
	let t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), z = /* @__PURE__ */ Symbol.for("v-cmt"), cs = /* @__PURE__ */ Symbol.for("v-stc"), ls = [], us = null;
function B(e = !1) {
	ls.push(us = e ? null : []);
}
function ds() {
	ls.pop(), us = ls[ls.length - 1] || null;
}
var fs = 1;
function ps(e, t = !1) {
	fs += e, e < 0 && us && t && (us.hasOnce = !0);
}
function ms(e) {
	return e.dynamicChildren = fs > 0 ? us || i : null, ds(), fs > 0 && us && us.push(e), e;
}
function V(e, t, n, r, i, a) {
	return ms(U(e, t, n, r, i, a, !0));
}
function H(e, t, n, r, i) {
	return ms(W(e, t, n, r, i, !0));
}
function hs(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function gs(e, t) {
	return e.type === t.type && e.key === t.key;
}
function _s(e) {}
var vs = ({ key: e }) => e ?? null, ys = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : y(e) || /* @__PURE__ */ ln(e) || v(e) ? {
	i: ur,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === R ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && vs(t),
		ref: t && ys(t),
		scopeId: dr,
		slotScopeIds: null,
		children: n,
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
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: ur
	};
	return s ? (Es(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= y(n) ? 8 : 16), fs > 0 && !o && us && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && us.push(c), c;
}
var W = bs;
function bs(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === la) && (e = z), hs(e)) {
		let r = Ss(e, t, !0);
		return n && Es(r, n), fs > 0 && !a && us && (r.shapeFlag & 6 ? us[us.indexOf(e)] = r : us.push(r)), r.patchFlag = -2, r;
	}
	if (Zs(e) && (e = e.__vccOpts), t) {
		t = xs(t);
		let { class: e, style: n } = t;
		e && !y(e) && (t.class = k(e)), x(n) && (/* @__PURE__ */ an(n) && !p(n) && (n = l({}, n)), t.style = he(n));
	}
	let o = y(e) ? 1 : Jo(e) ? 128 : jr(e) ? 64 : x(e) ? 4 : v(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function xs(e) {
	return e ? /* @__PURE__ */ an(e) || bo(e) ? l({}, e) : e : null;
}
function Ss(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? q(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && vs(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(ys(t)) : [a, ys(t)] : ys(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== R ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ss(e.ssContent),
		ssFallback: e.ssFallback && Ss(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && ni(u, c.clone(u)), u;
}
function G(e = " ", t = 0) {
	return W(ss, null, e, t);
}
function Cs(e, t) {
	let n = W(cs, null, e);
	return n.staticCount = t, n;
}
function K(e = "", t = !1) {
	return t ? (B(), H(z, null, e)) : W(z, null, e);
}
function ws(e) {
	return e == null || typeof e == "boolean" ? W(z) : p(e) ? W(R, null, e.slice()) : hs(e) ? Ts(e) : W(ss, null, String(e));
}
function Ts(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ss(e);
}
function Es(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Es(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !bo(t) ? t._ctx = ur : r === 3 && ur && (ur.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (v(t)) {
		if (r & 65) {
			Es(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: ur
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [G(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function q(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = he([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ds(e, t, n, r = null) {
	Hn(e, t, 7, [n, r]);
}
var Os = $a(), ks = 0;
function As(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Os, o = {
		uid: ks++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Ne(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Eo(i, a),
		emitsOptions: so(i, a),
		emit: null,
		emitted: null,
		propsDefaults: r,
		inheritAttrs: i.inheritAttrs,
		ctx: r,
		data: r,
		props: r,
		attrs: r,
		slots: r,
		refs: r,
		setupState: r,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ao.bind(null, o), e.ce && e.ce(o), o;
}
var js = null, Ms = () => js || ur, Ns, Ps;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ns = t("__VUE_INSTANCE_SETTERS__", (e) => js = e), Ps = t("__VUE_SSR_SETTERS__", (e) => Rs = e);
}
var Fs = (e) => {
	let t = js;
	return Ns(e), e.scope.on(), () => {
		e.scope.off(), Ns(t);
	};
}, Is = () => {
	js && js.scope.off(), Ns(null);
};
function Ls(e) {
	return e.vnode.shapeFlag & 4;
}
var Rs = !1;
function zs(e, t = !1, n = !1) {
	t && Ps(t);
	let { props: r, children: i } = e.vnode, a = Ls(e);
	xo(e, r, a, t), Po(e, i, n || t);
	let o = a ? Bs(e, t) : void 0;
	return t && Ps(!1), o;
}
function Bs(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xa);
	let { setup: r } = n;
	if (r) {
		tt();
		let n = e.setupContext = r.length > 1 ? Js(e) : null, i = Fs(e), a = Vn(r, e, 0, [e.props, n]), o = S(a);
		if (nt(), i(), (o || e.sp) && !Ii(e) && oi(e), o) {
			if (a.then(Is, Is), t) return a.then((n) => {
				Ps(!0);
				try {
					Vs(e, n, t);
				} finally {
					Ps(!1);
				}
			}).catch((t) => {
				Un(t, e, 0);
			});
			e.asyncDep = a;
		} else Vs(e, a, t);
	} else Ks(e, t);
}
function Vs(e, t, n) {
	v(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : x(t) && (e.setupState = gn(t)), Ks(e, n);
}
var Hs, Us;
function Ws(e) {
	Hs = e, Us = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, Sa));
	};
}
var Gs = () => !Hs;
function Ks(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Hs && !r.render) {
			let t = r.template || Ua(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r, s = l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o);
				r.render = Hs(t, s);
			}
		}
		e.render = r.render || a, Us && Us(e);
	}
	{
		let t = Fs(e);
		tt();
		try {
			za(e);
		} finally {
			nt(), t();
		}
	}
}
var qs = { get(e, t) {
	return ft(e, "get", ""), e[t];
} };
function Js(e) {
	return {
		attrs: new Proxy(e.attrs, qs),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ys(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(gn(on(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in ya) return ya[n](e);
		},
		has(e, t) {
			return t in e || t in ya;
		}
	}) : e.proxy;
}
function Xs(e, t = !0) {
	return v(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zs(e) {
	return v(e) && "__vccOpts" in e;
}
var J = (e, t) => /* @__PURE__ */ Tn(e, t, Rs);
function Qs(e, t, n) {
	try {
		ps(-1);
		let r = arguments.length;
		return r === 2 ? x(t) && !p(t) ? hs(t) ? W(e, null, [t]) : W(e, t) : W(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && hs(n) && (n = [n]), W(e, t, n));
	} finally {
		ps(1);
	}
}
function $s() {}
function ec(e, t, n, r) {
	let i = n[r];
	if (i && tc(i, e)) return i;
	let a = t();
	return a.memo = e.slice(), a.cacheIndex = r, n[r] = a;
}
function tc(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (se(n[e], t[e])) return !1;
	return fs > 0 && us && us.push(e), !0;
}
var nc = "3.5.42", rc = a, ic = Bn, ac = sr, oc = lr, sc = {
	createComponentInstance: As,
	setupComponent: zs,
	renderComponentRoot: lo,
	setCurrentRenderingInstance: fr,
	isVNode: hs,
	normalizeVNode: ws,
	getComponentPublicInstance: Ys,
	ensureValidVNode: ga,
	pushWarningContext: In,
	popWarningContext: Ln
}, cc = void 0, lc = typeof window < "u" && window.trustedTypes;
if (lc) try {
	cc = /* @__PURE__ */ lc.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var uc = cc ? (e) => cc.createHTML(e) : (e) => e, dc = "http://www.w3.org/2000/svg", fc = "http://www.w3.org/1998/Math/MathML", pc = typeof document < "u" ? document : null, mc = pc && /* @__PURE__ */ pc.createElement("template"), hc = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? pc.createElementNS(dc, e) : t === "mathml" ? pc.createElementNS(fc, e) : n ? pc.createElement(e, { is: n }) : pc.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => pc.createTextNode(e),
	createComment: (e) => pc.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => pc.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			mc.innerHTML = uc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = mc.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, gc = "transition", _c = "animation", vc = /* @__PURE__ */ Symbol("_vtc"), yc = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, bc = /* @__PURE__ */ l({}, qr, yc), xc = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = bc, e))((e, { slots: t }) => Qs(Zr, wc(e), t)), Sc = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Cc = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function wc(e) {
	let t = {};
	for (let n in e) n in yc || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = Tc(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, Oc(e, t ? d : s), Oc(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, Oc(e, f), Oc(e, m), Oc(e, p), t && t();
	}, ee = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		Sc(i, [t, o]), kc(() => {
			Oc(t, e ? c : a), Dc(t, e ? d : s), Cc(i) || jc(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			Sc(v, [e]), Dc(e, a), Dc(e, o);
		},
		onBeforeAppear(e) {
			Sc(C, [e]), Dc(e, c), Dc(e, u);
		},
		onEnter: ee(!1),
		onAppear: ee(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			Dc(e, f), e._enterCancelled ? (Dc(e, p), Fc(e)) : (Fc(e), Dc(e, p)), kc(() => {
				e._isLeaving && (Oc(e, f), Dc(e, m), Cc(x) || jc(e, r, _, n));
			}), Sc(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), Sc(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), Sc(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), Sc(S, [e]);
		}
	});
}
function Tc(e) {
	if (e == null) return null;
	if (x(e)) return [Ec(e.enter), Ec(e.leave)];
	{
		let t = Ec(e);
		return [t, t];
	}
}
function Ec(e) {
	return de(e);
}
function Dc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[vc] || (e[vc] = /* @__PURE__ */ new Set())).add(t);
}
function Oc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[vc];
	n && (n.delete(t), n.size || (e[vc] = void 0));
}
function kc(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Ac = 0;
function jc(e, t, n, r) {
	let i = e._endId = ++Ac, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Mc(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function Mc(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${gc}Delay`), a = r(`${gc}Duration`), o = Nc(i, a), s = r(`${_c}Delay`), c = r(`${_c}Duration`), l = Nc(s, c), u = null, d = 0, f = 0;
	t === gc ? o > 0 && (u = gc, d = o, f = a.length) : t === _c ? l > 0 && (u = _c, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? gc : _c : null, f = u ? u === gc ? a.length : c.length : 0);
	let p = u === gc && /\b(?:transform|all)(?:,|$)/.test(r(`${gc}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Nc(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Pc(t) + Pc(e[n])));
}
function Pc(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Fc(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ic(e, t, n) {
	let r = e[vc];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Lc = /* @__PURE__ */ Symbol("_vod"), Rc = /* @__PURE__ */ Symbol("_vsh"), zc = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Lc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bc(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Bc(e, !0), r.enter(e)) : r.leave(e, () => {
			Bc(e, !1);
		}) : Bc(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Bc(e, t);
	}
};
function Bc(e, t) {
	e.style.display = t ? e[Lc] : "none", e[Rc] = !t;
}
function Vc() {
	zc.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var Hc = /* @__PURE__ */ Symbol("");
function Uc(e) {
	let t = Ms();
	if (!t) return;
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => Gc(e, n));
	}, r = () => {
		let r = e(t.proxy);
		t.ce ? Gc(t.ce, r) : Wc(t.subTree, r), n(r);
	};
	Qi(() => {
		nr(r);
	}), Zi(() => {
		I(r, a, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), ta(() => e.disconnect());
	});
}
function Wc(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			Wc(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) Gc(e.el, t);
	else if (e.type === R) e.children.forEach((e) => Wc(e, t));
	else if (e.type === cs) {
		let { el: n, anchor: r } = e;
		for (; n && (Gc(n, t), n !== r);) n = n.nextSibling;
	}
}
function Gc(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = je(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[Hc] = r;
	}
}
var Kc = /(?:^|;)\s*display\s*:/;
function qc(e, t, n) {
	let r = e.style, i = y(n), a = !1;
	if (n && !i) {
		if (t) {
			if (y(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Yc(r, t, "");
			}
			else for (let e in t) n[e] ?? Yc(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Yc(r, i, "") : $c(e, i, !y(t) && t ? t[i] : void 0, o) || Yc(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Hc];
			e && (n += ";" + e), r.cssText = n, a = Kc.test(n);
		}
	} else t && e.removeAttribute("style");
	Lc in e && (e[Lc] = a ? r.display : "", e[Rc] && (r.display = "none"));
}
var Jc = /\s*!important$/;
function Yc(e, t, n) {
	if (p(n)) n.forEach((n) => Yc(e, t, n));
	else if (n ??= "", t.startsWith("--")) Jc.test(n) ? e.setProperty(t, n.replace(Jc, ""), "important") : e.setProperty(t, n);
	else {
		let r = Qc(e, t);
		Jc.test(n) ? e.setProperty(ie(r), n.replace(Jc, ""), "important") : e[r] = n;
	}
}
var Xc = [
	"Webkit",
	"Moz",
	"ms"
], Zc = {};
function Qc(e, t) {
	let n = Zc[t];
	if (n) return n;
	let r = O(t);
	if (r !== "filter" && r in e) return Zc[t] = r;
	r = ae(r);
	for (let n = 0; n < Xc.length; n++) {
		let i = Xc[n] + r;
		if (i in e) return Zc[t] = i;
	}
	return t;
}
function $c(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && y(r) && n === r;
}
var el = "http://www.w3.org/1999/xlink";
function tl(e, t, n, r, i, a = Se(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(el, t.slice(6, t.length)) : e.setAttributeNS(el, t, n) : n == null || a && !Ce(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : b(n) ? String(n) : n);
}
function nl(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? uc(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Ce(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function rl(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function il(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var al = /* @__PURE__ */ Symbol("_vei");
function ol(e, t, n, r, i = null) {
	let a = e[al] || (e[al] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ll(t);
		r ? rl(e, n, a[t] = pl(r, i), s) : o && (il(e, n, o, s), a[t] = void 0);
	}
}
var sl = /(Once|Passive|Capture)$/, cl = /^on:?(?:Once|Passive|Capture)$/;
function ll(e) {
	let t, n;
	for (; (n = e.match(sl)) && !cl.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
var ul = 0, dl = /* @__PURE__ */ Promise.resolve(), fl = () => ul ||= (dl.then(() => ul = 0), Date.now());
function pl(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (p(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Hn(e, t, 5, a);
			}
		} else Hn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = fl(), n;
}
var ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hl = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ic(e, r, o) : t === "style" ? qc(e, n, r) : s(t) ? c(t) || ol(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gl(e, t, r, o)) ? (nl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && tl(e, t, r, o, a, t !== "value")) : e._isVueCE && (_l(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !y(r))) ? nl(e, O(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), tl(e, t, r, o));
};
function gl(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ml(t) && v(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return ml(t) && y(n) ? !1 : t in e;
}
function _l(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = O(t);
	return Array.isArray(n) ? n.some((e) => O(e) === r) : Object.keys(n).some((e) => O(e) === r);
}
var vl = {};
// @__NO_SIDE_EFFECTS__
function yl(e, t, n) {
	let r = /* @__PURE__ */ ii(e, t);
	E(r) && (r = l({}, r, t));
	class i extends Sl {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var bl = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ yl(e, t, mu)), xl = typeof HTMLElement < "u" ? HTMLElement : class {}, Sl = class e extends xl {
	constructor(e, t = {}, n = pu) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== pu ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(l({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, Qn(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !p(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = de(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[O(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) f(this, e) || Object.defineProperty(this, e, { get: () => P(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = p(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(O)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : vl, r = O(e);
		t && this._numberProps && this._numberProps[r] && (n = de(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === vl ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(ie(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(ie(e), t + "") : t || this.removeAttribute(ie(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), du(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = W(this._def, l(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, E(t[0]) ? l({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), ie(e) !== e && t(ie(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function Cl(e) {
	let t = Ms();
	return t && t.ce || null;
}
function wl() {
	let e = Cl();
	return e && e.shadowRoot;
}
function Tl(e = "$style") {
	{
		let t = Ms();
		if (!t) return r;
		let n = t.type.__cssModules;
		return n && n[e] || r;
	}
}
var El = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ Symbol("_moveCb"), kl = /* @__PURE__ */ Symbol("_enterCb"), Al = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ l({}, bc, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = Ms(), r = Gr(), i, a;
		return $i(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!Fl(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach(jl), i.forEach(Ml);
			let r = i.filter(Nl);
			Fc(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				Dc(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[Ol] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[Ol] = null, Oc(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ M(e), s = wc(o), c = o.tag || R;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[Rc] && (i.push(t), ni(t, $r(t, s, r, n)), El.set(t, Pl(t.el)));
			}
			a = t.default ? ri(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && ni(t, $r(t, s, r, n));
			}
			return W(c, null, a);
		};
	}
});
function jl(e) {
	let t = e.el;
	t[Ol] && t[Ol](), t[kl] && t[kl]();
}
function Ml(e) {
	Dl.set(e, Pl(e.el));
}
function Nl(e) {
	let t = El.get(e), n = Dl.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function Pl(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function Fl(e, t, n) {
	let r = e.cloneNode(), i = e[vc];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = Mc(r);
	return a.removeChild(r), o;
}
var Il = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ce(t, e) : t;
};
function Ll(e) {
	e.target.composing = !0;
}
function Rl(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var zl = /* @__PURE__ */ Symbol("_assign"), Bl = /* @__PURE__ */ Symbol("_initialValue");
function Vl(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Hl = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Bl] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Bl] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[zl] = Il(i);
		let a = r || i.props && i.props.type === "number";
		rl(e, t ? "change" : "input", (t) => {
			t.target.composing || e[zl](Vl(e.value, n, a));
		}), (n || a) && rl(e, "change", () => {
			e.value = Vl(e.value, n, a);
		}), t || (rl(e, "compositionstart", Ll), rl(e, "compositionend", Rl), rl(e, "change", Rl));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Bl];
		delete e[Bl], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[zl](Vl(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[zl] = Il(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Ul = {
	deep: !0,
	created(e, t, n) {
		e[zl] = Il(n), rl(e, "change", () => {
			let t = e._modelValue, n = Yl(e), r = e.checked, i = e[zl];
			if (p(t)) {
				let e = De(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (h(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Xl(e, r));
		});
	},
	mounted: Wl,
	beforeUpdate(e, t, n) {
		e[zl] = Il(n), Wl(e, t, n);
	}
};
function Wl(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (p(t)) i = De(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ee(t, Xl(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Gl = {
	created(e, { value: t }, n) {
		e.checked = Ee(t, n.props.value), e[zl] = Il(n), rl(e, "change", () => {
			e[zl](Yl(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[zl] = Il(r), t !== n && (e.checked = Ee(t, r.props.value));
	}
}, Kl = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, rl(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Yl(e)) : Yl(e)), r = e.multiple, i = r ? h(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? p(i) ? t.slice() : t : i];
			try {
				e[zl](i);
			} finally {
				Qn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[zl] = Il(r);
	},
	mounted(e, { value: t }) {
		Jl(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[zl] = Il(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ql(t, n[1], n[0])) && Jl(e, t);
	}
};
function ql(e, t, n) {
	if (!n || p(e)) return Ee(e, t);
	if (h(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Jl(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Yl(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : De(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Ee(Yl(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Yl(e) {
	return "_value" in e ? e._value : e.value;
}
function Xl(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Zl = {
	created(e, t, n) {
		$l(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		$l(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		$l(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		$l(e, t, n, r, "updated");
	}
};
function Ql(e, t) {
	switch (e) {
		case "SELECT": return Kl;
		case "TEXTAREA": return Hl;
		default: switch (t) {
			case "checkbox": return Ul;
			case "radio": return Gl;
			default: return Hl;
		}
	}
}
function $l(e, t, n, r, i) {
	let a = Ql(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function eu() {
	Hl.getSSRProps = ({ value: e }) => ({ value: e }), Gl.getSSRProps = ({ value: e }, t) => {
		if (t.props && Ee(t.props.value, e)) return { checked: !0 };
	}, Ul.getSSRProps = ({ value: e }, t) => {
		if (p(e)) {
			if (t.props && De(e, t.props.value) > -1) return { checked: !0 };
		} else if (h(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, Zl.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = Ql(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var tu = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], nu = {
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
	exact: (e, t) => tu.some((n) => e[`${n}Key`] && !t.includes(n))
}, ru = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = nu[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, iu = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, au = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ie(n.key);
		if (t.some((e) => e === r || iu[e] === r)) return e(n);
	}));
}, ou = /* @__PURE__ */ l({ patchProp: hl }, hc), su, cu = !1;
function lu() {
	return su ||= Lo(ou);
}
function uu() {
	return su = cu ? su : Ro(ou), cu = !0, su;
}
var du = ((...e) => {
	lu().render(...e);
}), fu = ((...e) => {
	uu().hydrate(...e);
}), pu = ((...e) => {
	let t = lu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = gu(e);
		if (!r) return;
		let i = t._component;
		!v(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, hu(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), mu = ((...e) => {
	let t = uu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = gu(e);
		if (t) return n(t, !0, hu(t));
	}, t;
});
function hu(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function gu(e) {
	return y(e) ? document.querySelector(e) : e;
}
var _u = !1, vu = () => {
	_u || (_u = !0, eu(), Vc());
}, yu = /* @__PURE__ */ t({
	BaseTransition: () => Zr,
	BaseTransitionPropsValidators: () => qr,
	Comment: () => z,
	DeprecationTypes: () => null,
	EffectScope: () => Ne,
	ErrorCodes: () => zn,
	ErrorTypeStrings: () => ic,
	Fragment: () => R,
	KeepAlive: () => Bi,
	ReactiveEffect: () => Re,
	Static: () => cs,
	Suspense: () => Xo,
	Teleport: () => Br,
	Text: () => ss,
	TrackOpTypes: () => En,
	Transition: () => xc,
	TransitionGroup: () => Al,
	TriggerOpTypes: () => Dn,
	VueElement: () => Sl,
	assertNumber: () => Rn,
	callWithAsyncErrorHandling: () => Hn,
	callWithErrorHandling: () => Vn,
	camelize: () => O,
	capitalize: () => ae,
	cloneVNode: () => Ss,
	compatUtils: () => null,
	compile: () => bu,
	computed: () => J,
	createApp: () => pu,
	createBlock: () => H,
	createCommentVNode: () => K,
	createElementBlock: () => V,
	createElementVNode: () => U,
	createHydrationRenderer: () => Ro,
	createPropsRestProxy: () => Ia,
	createRenderer: () => Lo,
	createSSRApp: () => mu,
	createSlots: () => ha,
	createStaticVNode: () => Cs,
	createTextVNode: () => G,
	createVNode: () => W,
	customRef: () => vn,
	defineAsyncComponent: () => Li,
	defineComponent: () => ii,
	defineCustomElement: () => yl,
	defineEmits: () => wa,
	defineExpose: () => Ta,
	defineModel: () => Oa,
	defineOptions: () => Ea,
	defineProps: () => Ca,
	defineSSRCustomElement: () => bl,
	defineSlots: () => Da,
	devtools: () => ac,
	effect: () => Ze,
	effectScope: () => Pe,
	getCurrentInstance: () => Ms,
	getCurrentScope: () => Fe,
	getCurrentWatcher: () => jn,
	getTransitionRawChildren: () => ri,
	guardReactiveProps: () => xs,
	h: () => Qs,
	handleError: () => Un,
	hasInjectionContext: () => br,
	hydrate: () => fu,
	hydrateOnIdle: () => Ai,
	hydrateOnInteraction: () => Pi,
	hydrateOnMediaQuery: () => Ni,
	hydrateOnVisible: () => Mi,
	initCustomFormatter: () => $s,
	initDirectivesForSSR: () => vu,
	inject: () => yr,
	isMemoSame: () => tc,
	isProxy: () => an,
	isReactive: () => tn,
	isReadonly: () => nn,
	isRef: () => ln,
	isRuntimeOnly: () => Gs,
	isShallow: () => rn,
	isVNode: () => hs,
	markRaw: () => on,
	mergeDefaults: () => Pa,
	mergeModels: () => Fa,
	mergeProps: () => q,
	nextTick: () => Qn,
	nodeOps: () => hc,
	normalizeClass: () => k,
	normalizeProps: () => be,
	normalizeStyle: () => he,
	onActivated: () => Hi,
	onBeforeMount: () => Xi,
	onBeforeUnmount: () => ea,
	onBeforeUpdate: () => Qi,
	onDeactivated: () => Ui,
	onErrorCaptured: () => aa,
	onMounted: () => Zi,
	onRenderTracked: () => ia,
	onRenderTriggered: () => ra,
	onScopeDispose: () => Ie,
	onServerPrefetch: () => na,
	onUnmounted: () => ta,
	onUpdated: () => $i,
	onWatcherCleanup: () => Mn,
	openBlock: () => B,
	patchProp: () => hl,
	popScopeId: () => mr,
	provide: () => vr,
	proxyRefs: () => gn,
	pushScopeId: () => pr,
	queuePostFlushCb: () => nr,
	reactive: () => Xt,
	readonly: () => Qt,
	ref: () => N,
	registerRuntimeCompiler: () => Ws,
	render: () => du,
	renderList: () => ma,
	renderSlot: () => L,
	resolveComponent: () => ca,
	resolveDirective: () => da,
	resolveDynamicComponent: () => ua,
	resolveFilter: () => null,
	resolveTransitionHooks: () => $r,
	setBlockTracking: () => ps,
	setDevtoolsHook: () => oc,
	setTransitionHooks: () => ni,
	shallowReactive: () => Zt,
	shallowReadonly: () => $t,
	shallowRef: () => un,
	ssrContextKey: () => xr,
	ssrUtils: () => sc,
	stop: () => Qe,
	toDisplayString: () => A,
	toHandlerKey: () => oe,
	toHandlers: () => _a,
	toRaw: () => M,
	toRef: () => Sn,
	toRefs: () => yn,
	toValue: () => mn,
	transformVNodeArgs: () => _s,
	triggerRef: () => pn,
	unref: () => P,
	useAttrs: () => ja,
	useCssModule: () => Tl,
	useCssVars: () => Uc,
	useHost: () => Cl,
	useId: () => ai,
	useModel: () => ro,
	useSSRContext: () => Sr,
	useShadowRoot: () => wl,
	useSlots: () => Aa,
	useTemplateRef: () => si,
	useTransitionState: () => Gr,
	vModelCheckbox: () => Ul,
	vModelDynamic: () => Zl,
	vModelRadio: () => Gl,
	vModelSelect: () => Kl,
	vModelText: () => Hl,
	vShow: () => zc,
	version: () => nc,
	warn: () => rc,
	watch: () => I,
	watchEffect: () => Cr,
	watchPostEffect: () => wr,
	watchSyncEffect: () => Tr,
	withAsyncContext: () => La,
	withCtx: () => F,
	withDefaults: () => ka,
	withDirectives: () => gr,
	withKeys: () => au,
	withMemo: () => ec,
	withModifiers: () => ru,
	withScopeId: () => hr
}), bu = () => {}, Y = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/esm.C8XHDrJf.js
function xu(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
		"clip-rule": "evenodd"
	})]);
}
function Su(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
		"clip-rule": "evenodd"
	})]);
}
function Cu(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
		"clip-rule": "evenodd"
	})]);
}
function wu(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
		"clip-rule": "evenodd"
	})]);
}
function Tu(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
		"clip-rule": "evenodd"
	})]);
}
function Eu(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
		"clip-rule": "evenodd"
	})]);
}
function Du(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" })]);
}
function Ou(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })]);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/icons-and-images/icons/PIconMini.js
var ku = { class: "mini-icon" }, Au = /*#__PURE__*/ Y({
	__name: "PIconMini",
	props: { icon: {
		type: [Function, Object],
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("i", ku, [(B(), H(ua(e.icon)))]));
	}
}, [["__scopeId", "data-v-83781390"]]);
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/dist.Pjk96w6n.js
function ju(e, t) {
	return Fe() ? (Ie(e, t), !0) : !1;
}
var Mu = /* @__PURE__ */ new WeakMap(), Nu = (...e) => {
	let t = e[0], n = Ms()?.proxy ?? Fe();
	if (n == null && !br()) throw Error("injectLocal must be called in setup");
	return n && Mu.has(n) && t in Mu.get(n) ? Mu.get(n)[t] : yr(...e);
}, Pu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Fu = (e) => e != null, Iu = Object.prototype.toString, Lu = (e) => Iu.call(e) === "[object Object]", Ru = () => {}, zu = /* #__PURE__ */ Bu();
function Bu() {
	var e, t;
	return Pu && !!((e = window) != null && (e = e.navigator) != null && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Vu(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Hu(e) {
	return Array.isArray(e) ? e : [e];
}
function Uu(e) {
	return e || Ms();
}
function Wu(e, t = !0, n) {
	Uu(n) ? Zi(e, n) : t ? e() : Qn(e);
}
function Gu(e, t, n) {
	return I(e, t, {
		...n,
		immediate: !0
	});
}
var Ku = Pu ? window : void 0;
Pu && window.document, Pu && window.navigator, Pu && window.location;
function qu(e) {
	let t = mn(e);
	return t?.$el ?? t;
}
function Ju(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = J(() => {
		let t = Hu(mn(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Gu(() => [
		n.value?.map((e) => qu(e)) ?? [Ku].filter((e) => e != null),
		Hu(mn(n.value ? e[1] : e[0])),
		Hu(P(n.value ? e[2] : e[1])),
		mn(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Lu(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var Yu = !1;
function Xu(e, t, n = {}) {
	let { window: r = Ku, ignore: i = [], capture: a = !0, detectIframe: o = !1, controls: s = !1 } = n;
	if (!r) return s ? {
		stop: Ru,
		cancel: Ru,
		trigger: Ru
	} : Ru;
	if (zu && !Yu) {
		Yu = !0;
		let e = { passive: !0 };
		Array.from(r.document.body.children).forEach((t) => t.addEventListener("click", Ru, e)), r.document.documentElement.addEventListener("click", Ru, e);
	}
	let c = !0, l = (e) => mn(i).some((t) => {
		if (typeof t == "string") return Array.from(r.document.querySelectorAll(t)).some((t) => t === e.target || e.composedPath().includes(t));
		{
			let n = qu(t);
			return n && (e.target === n || e.composedPath().includes(n));
		}
	});
	function u(e) {
		let t = mn(e);
		return t && t.$.subTree.shapeFlag === 16;
	}
	function d(e, t) {
		let n = mn(e), r = n.$.subTree && n.$.subTree.children;
		return r == null || !Array.isArray(r) ? !1 : r.some((e) => e.el === t.target || t.composedPath().includes(e.el));
	}
	let f = (n) => {
		let r = qu(e);
		if (n.target != null && !(!(r instanceof Element) && u(e) && d(e, n)) && !(!r || r === n.target || n.composedPath().includes(r))) {
			if ("detail" in n && n.detail === 0 && (c = !l(n)), !c) {
				c = !0;
				return;
			}
			t(n);
		}
	}, p = !1, m = [
		Ju(r, "click", (e) => {
			p || (p = !0, setTimeout(() => {
				p = !1;
			}, 0), f(e));
		}, {
			passive: !0,
			capture: a
		}),
		Ju(r, "pointerdown", (t) => {
			let n = qu(e);
			c = !l(t) && !!(n && !t.composedPath().includes(n));
		}, { passive: !0 }),
		o && Ju(r, "blur", (n) => {
			setTimeout(() => {
				let i = qu(e), a = r.document.activeElement;
				for (; a?.shadowRoot;) a = a.shadowRoot.activeElement;
				a?.tagName === "IFRAME" && !i?.contains(r.document.activeElement) && t(n);
			}, 0);
		}, { passive: !0 })
	].filter(Boolean), h = () => m.forEach((e) => e());
	return s ? {
		stop: h,
		cancel: () => {
			c = !1;
		},
		trigger: (e) => {
			c = !0, f(e), c = !1;
		}
	} : h;
}
function Zu() {
	let e = /* @__PURE__ */ un(!1), t = Ms();
	return t && Zi(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function Qu(e) {
	let t = Zu();
	return J(() => (t.value, !!e()));
}
function $u(e, t, n = {}) {
	let { window: r = Ku, ...i } = n, a, o = /* @__PURE__ */ Qu(() => r && "MutationObserver" in r), s = () => {
		a &&= (a.disconnect(), void 0);
	}, c = I(J(() => {
		let t = Hu(mn(e)).map(qu).filter(Fu);
		return new Set(t);
	}), (e) => {
		s(), o.value && e.size && (a = new MutationObserver(t), e.forEach((e) => a.observe(e, i)));
	}, {
		immediate: !0,
		flush: "post"
	}), l = () => a?.takeRecords(), u = () => {
		c(), s();
	};
	return ju(u), {
		isSupported: o,
		stop: u,
		takeRecords: l
	};
}
function ed(e, t, n = {}) {
	let { window: r = Ku, document: i = r?.document, flush: a = "sync" } = n;
	if (!r || !i) return Ru;
	let o, s = (e) => {
		o?.(), o = e;
	}, c = Cr(() => {
		let n = qu(e);
		if (n) {
			let { stop: e } = $u(i, (e) => {
				e.map((e) => [...e.removedNodes]).flat().some((e) => e === n || e.contains(n)) && t(e);
			}, {
				window: r,
				childList: !0,
				subtree: !0
			});
			s(e);
		}
	}, { flush: a }), l = () => {
		c(), s();
	};
	return ju(l), l;
}
function td(e = {}) {
	let { window: t = Ku, deep: n = !0, triggerOnRemoval: r = !1 } = e, i = e.document ?? t?.document, a = () => {
		let e = i?.activeElement;
		if (n) for (var t; e?.shadowRoot;) e = e == null || (t = e.shadowRoot) == null ? void 0 : t.activeElement;
		return e;
	}, o = /* @__PURE__ */ un(), s = () => {
		o.value = a();
	};
	if (t) {
		let e = {
			capture: !0,
			passive: !0
		};
		Ju(t, "blur", (e) => {
			e.relatedTarget === null && s();
		}, e), Ju(t, "focus", s, e);
	}
	return r && ed(o, s, { document: i }), s(), o;
}
var nd = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function rd() {
	let e = br() ? Nu(nd, null) : null;
	return typeof e == "number" ? e : void 0;
}
function id(e, t = {}) {
	let { window: n = Ku, ssrWidth: r = /* @__PURE__ */ rd() } = t, i = /* @__PURE__ */ Qu(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), a = /* @__PURE__ */ un(typeof r == "number"), o = /* @__PURE__ */ un(), s = /* @__PURE__ */ un(!1);
	return Cr(() => {
		if (a.value) {
			a.value = !i.value;
			let t = mn(e).split(",");
			s.value = t.some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || i);
				return n && a && (a = r >= Vu(n[1])), i && a && (a = r <= Vu(i[1])), t ? !a : a;
			});
			return;
		}
		i.value && (o.value = n.matchMedia(mn(e)), s.value = o.value.matches);
	}), Ju(o, "change", (e) => {
		s.value = e.matches;
	}, { passive: !0 }), J(() => s.value);
}
var ad = {
	ctrl: "control",
	command: "meta",
	cmd: "meta",
	option: "alt",
	up: "arrowup",
	down: "arrowdown",
	left: "arrowleft",
	right: "arrowright"
};
function od(e = {}) {
	let { reactive: t = !1, target: n = Ku, aliasMap: r = ad, passive: i = !0, onEventFired: a = Ru } = e, o = /* @__PURE__ */ Xt(/* @__PURE__ */ new Set()), s = {
		toJSON() {
			return {};
		},
		current: o
	}, c = t ? /* @__PURE__ */ Xt(s) : s, l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map([
		["Meta", l],
		["Shift", /* @__PURE__ */ new Set()],
		["Alt", /* @__PURE__ */ new Set()]
	]), d = /* @__PURE__ */ new Set();
	function f(e, n) {
		e in c && (t ? c[e] = n : c[e].value = n);
	}
	function p() {
		o.clear();
		for (let e of d) f(e, !1);
	}
	function m(e, t, n) {
		if (!(!e || typeof t.getModifierState != "function")) {
			for (let [e, r] of u) if (t.getModifierState(e)) {
				n.forEach((e) => r.add(e));
				break;
			}
		}
	}
	function h(e, t) {
		if (e) return;
		let n = `${t[0].toUpperCase()}${t.slice(1)}`, r = u.get(n);
		if (!["shift", "alt"].includes(t) || !r) return;
		let i = Array.from(r), a = i.indexOf(t);
		i.forEach((e, t) => {
			t >= a && (o.delete(e), f(e, !1));
		}), r.clear();
	}
	function g(e, t) {
		let n = e.key?.toLowerCase(), r = [e.code?.toLowerCase(), n].filter(Boolean);
		if (n) {
			n && (t ? o.add(n) : o.delete(n));
			for (let e of r) d.add(e), f(e, t);
			m(t, e, [...o, ...r]), h(t, n), n === "meta" && !t && (l.forEach((e) => {
				o.delete(e), f(e, !1);
			}), l.clear());
		}
	}
	Ju(n, "keydown", (e) => (g(e, !0), a(e)), { passive: i }), Ju(n, "keyup", (e) => (g(e, !1), a(e)), { passive: i }), Ju("blur", p, { passive: i }), Ju("focus", p, { passive: i });
	let _ = new Proxy(c, { get(e, n, i) {
		if (typeof n != "string") return Reflect.get(e, n, i);
		if (n = n.toLowerCase(), n in r && (n = r[n]), !(n in c)) {
			if (/[+_-]/.test(n)) {
				let e = n.split(/[+_-]/g).map((e) => e.trim());
				c[n] = J(() => e.map((e) => mn(_[e])).every(Boolean));
			} else c[n] = /* @__PURE__ */ un(!1);
		}
		let a = Reflect.get(e, n, i);
		return t ? mn(a) : a;
	} });
	return _;
}
function sd(e = {}) {
	let { window: t = Ku, initialWidth: n = Infinity, initialHeight: r = Infinity, listenOrientation: i = !0, includeScrollbar: a = !0, type: o = "inner" } = e, s = /* @__PURE__ */ un(n), c = /* @__PURE__ */ un(r), l = () => {
		if (t) {
			if (o === "outer") s.value = t.outerWidth, c.value = t.outerHeight;
			else if (o === "visual" && t.visualViewport) {
				let { width: e, height: n, scale: r } = t.visualViewport;
				s.value = Math.round(e * r), c.value = Math.round(n * r);
			} else a ? (s.value = t.innerWidth, c.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, c.value = t.document.documentElement.clientHeight);
		}
	};
	l(), Wu(l);
	let u = { passive: !0 };
	return Ju("resize", l, u), t && o === "visual" && t.visualViewport && Ju(t.visualViewport, "resize", l, u), i && I(id("(orientation: portrait)"), () => l()), {
		width: s,
		height: c
	};
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/breakpoint.helper.Bmkcf1rl.js
var { width: cd, height: ld } = sd();
function ud() {
	return {
		isXs: J(() => cd.value < 640),
		isSm: J(() => cd.value >= 640 && cd.value < 768),
		isMd: J(() => cd.value >= 768 && cd.value < 1024),
		isLg: J(() => cd.value >= 1024 && cd.value <= 1280),
		isXl: J(() => cd.value > 1280 && cd.value <= 1536),
		is2Xl: J(() => cd.value > 1536),
		width: J(() => cd.value),
		height: J(() => ld.value)
	};
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/indicators/hotkey/PHotkey.js
var dd = /*#__PURE__*/ Y({
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
		let { isXs: t, isSm: n, isMd: r } = ud();
		return (i, a) => !P(t) && !P(n) && !P(r) ? (B(), V("div", {
			key: 0,
			class: k(["hotkey", [`${e.disabled ? "secondary" : e.variant}-hotkey`, { disabled: e.disabled }]])
		}, A(e.hotkey), 3)) : K("", !0);
	}
}, [["__scopeId", "data-v-a6d96a76"]]), fd = /*#__PURE__*/ Y({
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
		return (t, n) => (B(), V("div", { class: k(["loader", `${e.color}-loader ${e.size}-loader`]) }, null, 2));
	}
}, [["__scopeId", "data-v-26a513f6"]]), pd = ["tabindex", "disabled"], X = /*#__PURE__*/ Y({
	__name: "PButton",
	props: {
		variant: {
			type: String,
			default: "primary"
		},
		size: {
			type: String,
			default: "default"
		},
		icon: {
			type: [Function, Object],
			default: null
		},
		hotkey: {
			type: Object,
			default: () => ({
				key: "",
				callback: () => {}
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
		let t = e, n = Aa(), r = od()[t.hotkey.key], i = J(() => t.variant === "secondary" || t.variant === "tertiary" ? t.variant : t.variant === "text" ? "secondary" : "primary");
		return I(r, (e) => {
			e && t.hotkey?.key && !t.loading && !t.disabled && t.hotkey.callback();
		}), (t, r) => (B(), V("button", {
			class: k(["button", [
				e.variant,
				e.size,
				e.color,
				P(n).default ? "" : "has-icon",
				e.loading ? "pointer-events-none" : ""
			]]),
			tabindex: e.loading ? -1 : 0,
			disabled: e.disabled
		}, [
			e.loading ? (B(), H(fd, {
				key: 0,
				color: "inherit",
				size: e.size
			}, null, 8, ["size"])) : e.icon ? (B(), H(Au, {
				key: 1,
				icon: e.icon
			}, null, 8, ["icon"])) : K("", !0),
			L(t.$slots, "default", {}, void 0, !0),
			e.hotkey.key ? (B(), H(dd, {
				key: 2,
				hotkey: e.hotkey.label,
				variant: i.value,
				disabled: e.disabled
			}, null, 8, [
				"hotkey",
				"variant",
				"disabled"
			])) : K("", !0)
		], 10, pd));
	}
}, [["__scopeId", "data-v-b15862b6"]]), md = /* @__PURE__ */ Xt({
	locale: "nl-NL",
	language: "nl",
	autoDetectLanguage: !0,
	currency: "EUR"
});
function hd(e) {
	if (md.autoDetectLanguage) {
		console.warn("ProboDesignSystem: autoDetectLanguage is enabled. You cannot set the language manually.");
		return;
	}
	if (![
		"nl",
		"en",
		"de",
		"es"
	].includes(e)) {
		console.warn(`ProboDesignSystem: ${e} is not a valid language. Valid languages are: nl, en, de, es`);
		return;
	}
	md.language = e;
}
var gd = new MutationObserver((e) => {
	e[0]?.attributeName === "lang" && (md.language = document.documentElement.lang);
}), _d = () => gd.disconnect();
function vd() {
	gd.observe(document.documentElement, { attributes: !0 }), window.addEventListener("beforeunload", _d), md.autoDetectLanguage = !0;
}
function yd() {
	gd.disconnect(), window.removeEventListener("beforeunload", _d), md.autoDetectLanguage = !1;
}
I(() => md.autoDetectLanguage, (e) => {
	if (e) {
		vd();
		return;
	}
	yd();
}, { immediate: !0 });
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/locale.helper.bf-MOxVs.js
var bd = {
	nl: {
		"copy-button.copy": "Kopieer",
		"copy-button.copied": "Gekopieerd!",
		"theme-toggle.toggle_theme": "Schakel naar {theme} thema",
		"theme-toggle.light": "licht",
		"theme-toggle.system": "systeem",
		"theme-toggle.dark": "donker",
		"theme-toggle.theme": "Thema",
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
		"card-grid.pagination": "Paginanavigatie",
		"card-grid.page_of": "Pagina {page} / {pages}",
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
		"data-table.resize_column": "Kolombreedte aanpassen van {column}",
		"table-display-options.display_options": "Weergaveopties",
		"table-display-options.row_density": "Rijhoogte",
		"table-display-options.density_compact": "Compact",
		"table-display-options.density_default": "Standaard",
		"table-display-options.density_comfortable": "Ruim",
		"table-display-options.text_display": "Tekstweergave",
		"table-display-options.text_ellipsis": "Afkappen met puntjes",
		"table-display-options.text_wrap": "Tekst laten omlopen",
		"table-display-options.reset_column_widths": "Kolombreedtes herstellen",
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
		"drag-and-drop.in_progress": "Rond af in de uploader",
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
		"radio-group.required": "Selecteer een optie om door te gaan",
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
	},
	en: {
		"copy-button.copy": "Copy",
		"copy-button.copied": "Copied!",
		"theme-toggle.toggle_theme": "Toggle to {theme} theme",
		"theme-toggle.light": "light",
		"theme-toggle.system": "system",
		"theme-toggle.dark": "dark",
		"theme-toggle.theme": "Theme",
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
		"card-grid.pagination": "Page navigation",
		"card-grid.page_of": "Page {page} / {pages}",
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
		"data-table.resize_column": "Resize column {column}",
		"table-display-options.display_options": "Display options",
		"table-display-options.row_density": "Row density",
		"table-display-options.density_compact": "Compact",
		"table-display-options.density_default": "Default",
		"table-display-options.density_comfortable": "Comfortable",
		"table-display-options.text_display": "Text display",
		"table-display-options.text_ellipsis": "Truncate with ellipsis",
		"table-display-options.text_wrap": "Wrap text",
		"table-display-options.reset_column_widths": "Reset column widths",
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
		"drag-and-drop.in_progress": "Finish in the uploader",
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
		"radio-group.required": "Select an option to continue",
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
	},
	de: {
		"copy-button.copy": "Kopie",
		"copy-button.copied": "Kopiert!",
		"theme-toggle.toggle_theme": "Zum {theme} Thema wechseln",
		"theme-toggle.light": "hell",
		"theme-toggle.system": "system",
		"theme-toggle.dark": "dunkel",
		"theme-toggle.theme": "Thema",
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
		"card-grid.pagination": "Seitennavigation",
		"card-grid.page_of": "Seite {page} / {pages}",
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
		"data-table.resize_column": "Spaltenbreite von {column} ändern",
		"table-display-options.display_options": "Anzeigeoptionen",
		"table-display-options.row_density": "Zeilenhöhe",
		"table-display-options.density_compact": "Kompakt",
		"table-display-options.density_default": "Standard",
		"table-display-options.density_comfortable": "Komfortabel",
		"table-display-options.text_display": "Textanzeige",
		"table-display-options.text_ellipsis": "Mit Auslassungspunkten kürzen",
		"table-display-options.text_wrap": "Text umbrechen",
		"table-display-options.reset_column_widths": "Spaltenbreiten zurücksetzen",
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
		"drag-and-drop.in_progress": "Im Uploader abrunden",
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
		"radio-group.required": "Wählen Sie eine Option, um fortzufahren",
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
	},
	es: {
		"theme-toggle.toggle_theme": "Cambiar al tema {theme}",
		"theme-toggle.light": "claro",
		"theme-toggle.system": "sistema",
		"theme-toggle.dark": "oscuro",
		"theme-toggle.theme": "Tema",
		"delivery.delivery_options": "Fechas de entrega disponibles",
		"delivery.no_extra_cost": "Sin coste adicional",
		"delivery.make_your_choice_next_step": "Elige en el siguiente paso",
		"delivery.see_more": "Ver todas las fechas",
		"delivery.see_less": "Ver menos fechas",
		"delivery.tomorrow": "Mañana",
		"delivery.fastest": "Más rápido",
		"delivery.cheapest": "Más barato",
		"editor.editing_step": "Editando: {step}",
		"editor.hide_step.title": "Ocultar paso",
		"editor.hide_step.description": "Este paso se ocultará y se omitirá.",
		"editor.hide_step.label": "Ocultar",
		"editor.edit_options": "Editar opciones",
		"editor.edit_option.height": "Altura",
		"editor.edit_option.width": "Anchura",
		"editor.edit_option.amount": "Cantidad",
		"editor.save_changes": "Sobrescribir paso",
		"editor.default_option.title": "Opción predeterminada",
		"editor.default_option.description": "Selecciona una opción para establecerla como predeterminada en este paso.",
		"editor.default_option.label": "Establecer como predeterminada",
		"editor.default_option_value.title": "Valor predeterminado",
		"editor.default_option_value.description": "Establece un valor predeterminado para la opción seleccionada.",
		"editor.default_option_value.label": "Establecer valor predeterminado",
		"editor.hide_option.title": "Ocultar opción",
		"editor.hide_option.description": "Esta opción se ocultará y no se podrá seleccionar.",
		"editor.hide_option.label": "Ocultar",
		"editor.edit_image.title": "Imagen",
		"editor.edit_image.description": "Elige otra imagen.",
		"editor.edit_image.placeholder": "Introduce la URL de la imagen",
		"editor.edit_title.title": "Título",
		"editor.edit_title.description": "Edita el título de este paso.",
		"editor.edit_title.placeholder": "Introduce el título del paso",
		"editor.edit_description.title": "Descripción",
		"editor.edit_description.description": "Edita la descripción de este paso.",
		"editor.edit_description.placeholder": "Introduce la descripción del paso",
		"editor.cancel": "Cancelar",
		"editor.width.title": "Anchura",
		"editor.width.description": "Establece una anchura predeterminada para este paso.",
		"editor.height.title": "Altura",
		"editor.height.description": "Establece una altura predeterminada para este paso.",
		"editor.amount.title": "Cantidad",
		"editor.amount.description": "Establece una cantidad predeterminada para este paso.",
		"editor.edit_option_title.title": "Título",
		"editor.edit_option_title.description": "Edita el título de esta opción.",
		"editor.edit_option_title.placeholder": "Introduce el título de la opción",
		"editor.edit_option_description.title": "Descripción",
		"editor.edit_option_description.description": "Edita la descripción de esta opción.",
		"editor.edit_option_description.placeholder": "Introduce la descripción de la opción",
		"editor.apply": "Aplicar",
		"editor.reset": "Restablecer",
		"editor.edit_sequence.title": "Orden",
		"editor.edit_sequence.description": "Establece el orden de este paso.",
		"editor.edit_sequence.placeholder": "Orden",
		"editor.min_sequence": "El orden mínimo es {min}",
		"editor.max_sequence": "El orden máximo es {max}",
		"editor.number_should_not_exist_twice": "El número no puede aparecer dos veces",
		"editor.editor_alert.title": "Uno o más campos contienen errores",
		"editor.editor_alert.description": "Corrige los errores antes de continuar.",
		"editor.no_option": "Sin accesorios",
		"option.continue": "Continuar",
		"option.days": "1 día | {n} días",
		"option.per_unit": "ud",
		"option.amount": "Cantidad",
		"option.product_photo": "imagen del producto",
		"option.attention": "Elige de nuevo",
		"option.unavailable": "No disponible",
		"option.custom_value": "Valor personalizado",
		"option.edit": "Editar",
		"option.step_has_overwrites": "Este paso tiene modificaciones",
		"option.step_is_hidden": "Este paso está oculto",
		"product-config-modal.reference": "Referencia",
		"product-config-modal.add_to_cart": "Añadir al carrito",
		"product-config-modal.add": "Añadir",
		"product-config-modal.price_excluding": "sin embalaje ni envío",
		"product-config-modal.specifications": "Especificaciones del archivo",
		"product-config-modal.shipping_costs": "Gastos de envío (desde)",
		"product-config-modal.packaging_costs": "Gastos de embalaje",
		"product-config-modal.total": "Total",
		"step.min_value": "El valor no puede ser inferior a {minValue}",
		"step.max_value": "El valor no puede ser superior a {maxValue}",
		"step.required": "El valor es obligatorio",
		"step.total": "Total",
		"step.new_configuration": "Nueva configuración",
		"step.height": "Altura",
		"step.width": "Anchura",
		"step.amount": "Cantidad",
		"step.recalculate": "Recalcular",
		"confirm-modal.confirm": "Confirmar",
		"confirm-modal.confirm_message": "Esta acción no se puede deshacer.",
		"confirm-modal.delete": "Eliminar",
		"confirm-modal.cancel": "Cancelar",
		"modal.close": "Cerrar",
		"modal.minimize": "Minimizar",
		"modal.open": "Abrir",
		"modal.save": "Guardar",
		"modal.cancel": "Cancelar",
		"table-display-options.display_options": "Opciones de visualización",
		"table-display-options.row_density": "Altura de fila",
		"table-display-options.density_compact": "Compacta",
		"table-display-options.density_default": "Predeterminada",
		"table-display-options.density_comfortable": "Amplia",
		"table-display-options.text_display": "Visualización de texto",
		"table-display-options.text_ellipsis": "Truncar con puntos suspensivos",
		"table-display-options.text_wrap": "Ajustar texto",
		"table-display-options.reset_column_widths": "Restablecer anchos de columna",
		"amount-input.plus_one": "Añadir uno",
		"amount-input.minus_one": "Restar uno",
		"checkbox.required": "Marca para continuar",
		"input.select": "Seleccionar",
		"input.no_results": "Sin resultados",
		"input.clear": "Borrar",
		"input.cancel": "Cancelar",
		"input.product_reference": "Referencia del producto (opcional)",
		"input.search_country": "Buscar país",
		"input.no_countries_found": "No se han encontrado países",
		"input.required": "Este campo es obligatorio",
		"input.min_date": "Fecha mínima: {date}",
		"input.max_date": "Fecha máxima: {date}",
		"input.required_with_label": "No se ha introducido ningún {label}.",
		"input.optional": "Opcional",
		"input.toggle": "Alternar desplegable",
		"input.bold": "Negrita",
		"input.italic": "Cursiva",
		"input.underline": "Subrayado",
		"input.search": "Buscar",
		"input.choose_filter": "Elegir filtro",
		"input.country_selection": "Selección de país",
		"radio-group.required": "Selecciona una opción para continuar"
	}
};
function xd(e, t = {}) {
	let n = t ?? {};
	return e.replace(/{(\w+)}/g, (e, t) => n[t] || `{${t}}`);
}
function Sd(e) {
	let [t] = e.split("."), n = e.substring(e.indexOf(".") + 1);
	return bd[md.language][`${t}.${n}`] || e;
}
function Cd(e, t) {
	return e.replace(/{(\d+)}/g, (e, n) => t[n] || `{${n}}`);
}
function wd(e, t, n = {}) {
	let r = e.split("|").map((e) => e.trim()), i;
	return r.length === 1 ? [i] = r : r.length === 2 ? t === 1 ? [i] = r : [, i] = r : t === 0 ? [i] = r : t === 1 ? [, i] = r : i = r[Math.min(t, r.length - 1)], xd(i, {
		...n,
		count: t,
		n: t
	});
}
function Z(e, t = null) {
	let n = Sd(e);
	return Array.isArray(t) ? Cd(n, t) : xd(n, t);
}
function Td(e, t, n = null) {
	return wd(Sd(e), t, n);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/esm.C9nXDZs9.js
function Ed(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
	})]);
}
function Dd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "m4.5 12.75 6 6 9-13.5"
	})]);
}
function Od(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "m19.5 8.25-7.5 7.5-7.5-7.5"
	})]);
}
function kd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
	})]);
}
function Ad(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
	})]);
}
function jd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
	})]);
}
function Md(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
	})]);
}
function Nd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
	})]);
}
function Pd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
	})]);
}
function Fd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M5 12h14"
	})]);
}
function Id(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
	})]);
}
function Ld(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
	})]);
}
function Rd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M12 4.5v15m7.5-7.5h-15"
	})]);
}
function zd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
	})]);
}
function Bd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
	})]);
}
function Vd(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M6 18 18 6M6 6l12 12"
	})]);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/icons-and-images/icons/PIcon.js
var Hd = { class: "icon" }, Ud = /*#__PURE__*/ Y({
	__name: "PIcon",
	props: { icon: {
		type: [Function, Object],
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("i", Hd, [(B(), H(ua(e.icon)))]));
	}
}, [["__scopeId", "data-v-0d12ef98"]]), Wd = { class: "micro-icon" }, Gd = /*#__PURE__*/ Y({
	__name: "PIconMicro",
	props: { icon: {
		type: [Function, Object],
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("i", Wd, [(B(), H(ua(e.icon)))]));
	}
}, [["__scopeId", "data-v-1e1a14be"]]);
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/focusableElements.helper.BF8tMe3X.js
function Kd(e, t = !1) {
	if (!e) return [];
	let n = [
		"[href]",
		"button",
		"input:not([type=\"hidden\"])",
		"select",
		"textarea",
		"[tabindex]"
	].map((e) => `${e}${t ? "" : ":not([tabindex=\"-1\"])"}:not([disabled])`).join(", ");
	return [...e.querySelectorAll(n)];
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/PFloatingContainer.CC_FAY9U.js
var qd = {
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
	emits: [
		"open",
		"close",
		"set:activator"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(null);
		function a(e) {
			e && r("set:activator", e);
		}
		function o(e) {
			a(e.currentTarget), r(n.modelValue ? "close" : "open");
		}
		function s(e) {
			a(e.currentTarget);
		}
		return I(() => [
			n.modelValue,
			n.floatingContainerEl,
			n.activatorEl
		], ([e]) => {
			if (i.value?.(), i.value = null, !e || !n.floatingContainerEl) return;
			let t = [n.activatorEl].filter(Boolean);
			requestAnimationFrame(() => {
				i.value = Xu(n.floatingContainerEl, () => n.modelValue && r("close"), { ignore: t });
			});
		}, { immediate: !0 }), (e, t) => L(e.$slots, "default", { slotProps: {
			onClick: o,
			onFocus: s
		} });
	}
}, Jd = {
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
	emits: [
		"open",
		"close",
		"set:activator"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			r("set:activator", e.currentTarget), r("open");
		}
		function a() {
			n.modelValue || r("open");
		}
		function o() {
			n.modelValue || r("open");
		}
		return I(() => n.isFocused, (e) => {
			e || r("close");
		}), (e, t) => L(e.$slots, "default", { slotProps: {
			onFocus: i,
			onInput: a,
			onClick: o
		} });
	}
}, Yd = {
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
	emits: [
		"open",
		"close",
		"set:activator"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(!1), a = /* @__PURE__ */ N(!1);
		function o() {
			i.value || (a.value = !1, r("close"));
		}
		function s(e) {
			a.value = !0, !n.modelValue && (r("set:activator", e.currentTarget), r("open"));
		}
		function c(e) {
			e.target.matches(":focus-visible") && (i.value = !0, r("set:activator", e.currentTarget), r("open"));
		}
		function l() {
			i.value = !1, r("close");
		}
		return I(() => n.modelValue, () => {
			n.modelValue || (i.value = !1);
		}), (e, t) => L(e.$slots, "default", { slotProps: {
			onMouseover: s,
			onMouseleave: o,
			onFocus: c,
			onBlur: l
		} });
	}
}, Xd = {
	__name: "_ManualBehavior",
	props: { modelValue: {
		type: Boolean,
		required: !0
	} },
	emits: [
		"open",
		"close",
		"set:activator"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			r("set:activator", e);
		}
		function a() {
			r("open");
		}
		function o() {
			r("close");
		}
		function s() {
			if (n.modelValue) {
				o();
				return;
			}
			a();
		}
		return (e, t) => L(e.$slots, "default", { slotProps: {
			setActivator: i,
			toggle: s
		} });
	}
}, Zd = {};
function Qd(e, t) {
	return B(), H(xc, { name: "NO_TRANSITION" }, {
		default: F(() => [L(e.$slots, "default")]),
		_: 3
	});
}
var $d = /*#__PURE__*/ Y(Zd, [["render", Qd]]), ef = {};
function tf(e, t) {
	return B(), H(xc, null, {
		default: F(() => [L(e.$slots, "default", {}, void 0, !0)]),
		_: 3
	});
}
var nf = /*#__PURE__*/ Y(ef, [["render", tf], ["__scopeId", "data-v-ed45de91"]]), rf = /*#__PURE__*/ Y({
	__name: "_ExpandTransition",
	props: { placement: {
		type: String,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), H(xc, { name: `expand-${e.placement}` }, {
			default: F(() => [L(t.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["name"]));
	}
}, [["__scopeId", "data-v-42701d92"]]), af = {
	top: [
		"bottom",
		"right",
		"left"
	],
	right: [
		"left",
		"top",
		"bottom"
	],
	left: [
		"right",
		"top",
		"bottom"
	],
	bottom: [
		"top",
		"right",
		"left"
	]
}, of = {
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
function sf(e) {
	return e?.ownerDocument?.defaultView || window;
}
function cf(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = getComputedStyle(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function lf(e) {
	return !e || [
		"html",
		"body",
		"#document"
	].includes(e.nodeName.toLowerCase());
}
function uf(e) {
	return e instanceof HTMLElement;
}
function df(e) {
	return e.getRootNode ? e.getRootNode() : e;
}
function ff(e) {
	return e.nodeName === "HTML" ? e : e.parentNode || e.host || df(e).host || null;
}
function pf(e) {
	let t = ff(e);
	return lf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : uf(t) && cf(t) ? t : pf(t);
}
function mf(e, t = []) {
	let n = pf(e), r = n === e?.ownerDocument?.body, i = sf(n);
	return r ? t.concat(i, i.visualViewport || [], cf(n) ? n : []) : t.concat(n, mf(n, []));
}
function hf(e, t, n, r) {
	let { clientWidth: i, clientHeight: a } = document.documentElement, o = window.scrollY || document.documentElement.scrollTop || 0, s = window.scrollX || document.documentElement.scrollLeft || 0;
	return e >= o && t >= s && t + n <= s + (window.innerWidth || i) && e + r <= o + (window.innerHeight || a);
}
var gf = /* @__PURE__ */ N(!1), _f = /* @__PURE__ */ N(!1), vf = /* @__PURE__ */ N(!1);
function yf(e, t, n, r, i = 4) {
	let a = window.scrollY || document.documentElement.scrollTop || 0, o = window.scrollX || document.documentElement.scrollLeft || 0, s = window.innerHeight, c = window.innerWidth, l = e, u = t, d = a + s - i, f = o + c - i, p = a + i, m = o + i;
	l + r > d && (l = Math.max(p, d - r)), l < p && (l = p), u + n > f && (u = Math.max(m, f - n)), u < m && (u = m);
	let h = d - p, g = f - m;
	return {
		top: l,
		left: u,
		needsVerticalClamp: r > h,
		needsHorizontalClamp: n > g,
		maxHeight: Math.min(r, h),
		maxWidth: Math.min(n, g)
	};
}
function bf(e, t, n) {
	let r = window.scrollX + t.left;
	switch (e) {
		case "left": return r;
		case "right": return r + t.width - n;
		default: return r + (t.width - n) / 2;
	}
}
function xf(e, t, n) {
	let r = window.scrollY + t.top;
	switch (e) {
		case "top": return r;
		case "bottom": return r - (n - t.height);
		default: return r + (t.height - n) / 2;
	}
}
function Sf(e, t, n, r) {
	let i = window.scrollY + e.top, a = window.scrollX + e.left;
	return {
		top: (a) => ({
			top: i - n - r.offset,
			left: bf(a, e, t)
		}),
		bottom: (n) => ({
			top: i + e.height + r.offset,
			left: bf(n, e, t)
		}),
		left: (i) => ({
			top: xf(i, e, n),
			left: a - t - r.offset
		}),
		right: (t) => ({
			top: xf(t, e, n),
			left: a + e.width + r.offset
		})
	};
}
async function Cf(e, t, n, r, i) {
	let a;
	if (i) {
		let e = i.clientX, t = i.clientY;
		a = {
			top: t,
			left: e,
			right: e,
			bottom: t,
			width: 0,
			height: 0,
			x: e,
			y: t
		};
	} else a = n.getBoundingClientRect();
	let [o, s] = r.location.replaceAll(" ", "").split(","), c = s || "center", l = Sf(a, t, e, r), u = (n, r) => {
		let i = l[n](r);
		return hf(i.top, i.left, t, e) ? {
			placement: n,
			alignment: r,
			...i
		} : null;
	}, d = u(o, c);
	return d || ((of[o][c] || []).some((e) => (d = u(o, e), !!d)), d) || (af[o].some((e) => (d = u(e, c), d ? !0 : Object.keys(of[e]).some((t) => (d = u(e, t), !!d)))), d) ? d : {
		placement: o,
		alignment: c,
		...l[o](c)
	};
}
function wf(e, t) {
	let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
	n.width !== r.width && (e.style.minWidth = `${n.width}px`);
}
async function Tf(e, t, n, r = null) {
	if (e.style.visibility !== "visible") {
		let t = e.style.visibility;
		e.style.visibility = "hidden", e.showPopover(), await new Promise((e) => {
			requestAnimationFrame(() => requestAnimationFrame(e));
		}), e.style.visibility = t || "hidden";
	}
	let i;
	i = n.attach instanceof HTMLElement ? n.attach : typeof n.attach == "string" ? document.querySelector(n.attach) : t, _f.value || (e.style.maxHeight = "", e.style.overflowY = ""), vf.value || (e.style.maxWidth = "", e.style.overflowX = ""), n.fitContent || (wf(e, i), await Promise.resolve());
	let a = e.getBoundingClientRect(), o = e.scrollHeight || e.clientHeight || Math.ceil(a.height), s = e.scrollWidth || e.clientWidth || Math.ceil(a.width), c = await Cf(o, s, i, n, r), l = hf(c.top, c.left, s, o), u = c.top, d = c.left;
	if (gf.value = !0, !l && n.clamp) {
		let t = yf(c.top, c.left, s, o);
		u = t.top, d = t.left, t.needsVerticalClamp ? (_f.value = !0, e.style.maxHeight = `${t.maxHeight}px`, e.style.overflowY = "auto") : _f.value && (_f.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), t.needsHorizontalClamp ? (vf.value = !0, e.style.maxWidth = `${t.maxWidth}px`, e.style.overflowX = "auto") : vf.value && (vf.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
	} else _f.value && (_f.value = !1, e.style.maxHeight = "", e.style.overflowY = ""), vf.value && (vf.value = !1, e.style.maxWidth = "", e.style.overflowX = "");
	return e.style.top = `${u}px`, e.style.left = `${d}px`, e.style.visibility = "visible", requestAnimationFrame(() => {
		gf.value = !1;
	}), {
		placement: c.placement,
		alignment: c.alignment
	};
}
function Ef(e, t) {
	let n = /* @__PURE__ */ N(), r = /* @__PURE__ */ N(), i = /* @__PURE__ */ N(), a = /* @__PURE__ */ N(), o = /* @__PURE__ */ Xt({
		location: "bottom",
		fitContent: !1,
		attach: null,
		offset: 0,
		clamp: !0
	}), s = /* @__PURE__ */ Xt([]);
	function c() {
		return !e.value || !t.value ? null : Tf(e.value, t.value, o, a.value).then((e) => {
			n.value = e.placement, r.value = e.alignment;
		});
	}
	function l() {
		s.forEach((e) => {
			e.removeEventListener("scroll", c), e.removeEventListener("resize", c);
		}), s.splice(0), e.value && (s.push(...mf(e.value)), s.forEach((e) => {
			e.addEventListener("scroll", c, { passive: !0 }), e.addEventListener("resize", c);
		}));
	}
	function u() {
		i.value = new ResizeObserver(() => {
			gf.value || requestAnimationFrame(c);
		});
	}
	function d(e) {
		Object.keys(e).forEach((t) => {
			t in o && (o[t] = e[t]);
		});
	}
	return I(e, (e, n) => {
		i.value || u(), n && i.value?.unobserve(n), t.value && i.value?.unobserve(t.value), e && t.value && (i.value.observe(e), i.value.observe(t.value));
	}), ea(() => {
		s.forEach((e) => {
			e.removeEventListener("scroll", c), e.removeEventListener("resize", c);
		}), s.splice(0), i.value?.disconnect();
	}), {
		autoUpdate: (i) => {
			d(i), [n.value, r.value] = o.location.replaceAll(" ", "").split(","), I([e, t], async ([e, t]) => {
				l(), e && t && await c();
			});
		},
		fixedPosition: async (e) => {
			d({
				...e,
				clamp: !1
			}), [n.value, r.value] = o.location.replaceAll(" ", "").split(","), requestAnimationFrame(() => {
				requestAnimationFrame(async () => {
					l(), await c();
				});
			});
		},
		watchCursor: () => {
			async function n(t) {
				a.value = t, e.value && await c();
			}
			I(t, (e, t) => {
				t && t.removeEventListener("mousemove", n), e && e.addEventListener("mousemove", n);
			}, { immediate: !0 });
		},
		placement: n,
		alignment: r
	};
}
var Df = {
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
	emits: [
		"open",
		"close",
		"set:activator"
	],
	setup(e, { emit: t }) {
		let n = t, r = `floating-${crypto.randomUUID()}`, i = new MutationObserver(() => {
			let e = document.querySelector(`[data-activator-uuid="${r}"]`);
			e && (n("set:activator", e), n("open"), i.disconnect());
		});
		return Zi(() => {
			let e = document.querySelector(`[data-activator-uuid="${r}"]`);
			if (e) {
				n("set:activator", e), n("open");
				return;
			}
			i.observe(document.body, {
				childList: !0,
				subtree: !0
			});
		}), ea(() => {
			i.disconnect(), n("close");
		}), (e, t) => L(e.$slots, "default", { slotProps: { "data-activator-uuid": r } });
	}
}, Of = ["aria-hidden", "aria-label"], kf = { class: "floating-container-overlay" }, Af = ["aria-expanded"], jf = /*#__PURE__*/ Y({
	__name: "PFloatingContainer",
	props: {
		behavior: {
			type: String,
			default: "click"
		},
		location: {
			type: String,
			default: "bottom"
		},
		fitContent: {
			type: Boolean,
			default: !1
		},
		closeOnClick: {
			type: Boolean,
			default: !0
		},
		attach: {
			type: [String, HTMLElement],
			default: null
		},
		offset: {
			type: Number,
			default: 0
		},
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
	emits: [
		"update:isOpen",
		"update:focus",
		"update:location"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = si("floating-container-content"), o = /* @__PURE__ */ N(null), { autoUpdate: s, fixedPosition: c, watchCursor: l, placement: u, alignment: d } = Ef(a, o), f = td(), p = /* @__PURE__ */ N(!1), m = /* @__PURE__ */ N(!1), h = /* @__PURE__ */ N(-1), g = J(() => f.value === o.value || f.value === a.value || o.value?.contains(f.value) || a.value?.contains(f.value) || !1), _ = J(() => {
			switch (r.behavior) {
				case "focus": return {
					component: Jd,
					props: { isFocused: g.value }
				};
				case "hover": return {
					component: Yd,
					props: { floatingContainerEl: a.value }
				};
				case "manual": return { component: Xd };
				case "static": return { component: Df };
				default: return {
					component: qd,
					props: {
						floatingContainerEl: a.value,
						activatorEl: o.value
					}
				};
			}
		});
		function v(e) {
			o.value = e;
		}
		async function y() {
			clearTimeout(h.value), h.value = setTimeout(async () => {
				p.value = !0, i("update:isOpen", !0), await Qn(), await new Promise(requestAnimationFrame), m.value = !0;
			}, r.delay);
		}
		function b() {
			clearTimeout(h.value), m.value = !1, r.transition !== "fade" && r.transition !== "expand" && (p.value = !1);
		}
		function x() {
			p.value = !1, i("update:isOpen", !1);
		}
		function S() {
			!r.closeOnClick || !p.value || r.behavior === "static" || (o.value?.focus(), b());
		}
		function C(e) {
			if (e.key === "Tab") {
				let t = Kd(a.value, !0), n = t.indexOf(document.activeElement), r = e.shiftKey ? n - 1 : n + 1;
				t[r] ? (e.preventDefault(), t[r].focus()) : (e.preventDefault(), r <= 0 && o.value.focus());
			} else if (e.key === "Escape") {
				if (r.behavior === "static") return;
				o.value.focus(), b();
			} else e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), r.closeOnClick && r.behavior !== "static" && (o.value.focus(), b()));
		}
		async function w(e) {
			if (e.key === "Escape") {
				if (r.behavior === "static") return;
				e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), b();
				return;
			}
			if (!["ArrowDown", "ArrowUp"].includes(e.key)) return;
			a.value || (await y(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame));
			let t = Kd(a.value);
			if (t.length === 0) return;
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
			let n = t.indexOf(document.activeElement);
			n === -1 ? Kd(a.value)[0].focus() : t[e.key === "ArrowDown" ? n + 1 : n - 1]?.focus();
		}
		I(() => g.value, () => i("update:focus", g.value)), I([u, d], () => {
			i("update:location", [u.value, d.value].filter(Boolean).join(","));
		});
		let T = J(() => {
			switch (r.transition) {
				case "fade": return nf;
				case "expand": return rf;
				default: return $d;
			}
		});
		return Zi(async () => {
			switch (await Qn(), r.behavior) {
				case "click":
				case "focus":
				case "manual":
					s({
						location: r.location,
						fitContent: r.fitContent,
						attach: r.attach,
						offset: r.offset
					});
					break;
				case "hover":
					s({
						location: r.location,
						fitContent: r.fitContent,
						attach: r.attach,
						offset: r.offset
					}), r.attachToCursor && l();
					break;
				case "static":
					y(), c({
						location: r.location,
						attach: r.attach,
						offset: r.offset
					});
					break;
				default: console.warn(`Behavior "${r.behavior}" is not supported.`);
			}
		}), t({ close: b }), (t, n) => (B(), V(R, null, [_.value ? (B(), H(ua(_.value.component), q({ key: 0 }, _.value.props, {
			"model-value": p.value,
			onOpen: y,
			onClose: b,
			"onSet:activator": v
		}), {
			default: F(({ slotProps: e }) => [L(t.$slots, "activator", be(xs({
				...e,
				onKeydown: w
			})), void 0, !0)]),
			_: 3
		}, 16, ["model-value"])) : K("", !0), p.value ? (B(), V("div", {
			key: 1,
			class: "floating-container-overlay-container",
			role: "dialog",
			"aria-modal": "true",
			"aria-hidden": !m.value,
			"aria-label": e.ariaLabel
		}, [U("div", kf, [(B(), H(ua(T.value), {
			key: e.behavior === "static" ? null : `${P(u) || "unknown"}-${P(d) || "unknown"}`,
			placement: P(u),
			alignment: P(d),
			appear: "",
			onAfterLeave: x
		}, {
			default: F(() => [gr(U("div", {
				ref: "floating-container-content",
				class: "floating-container-content",
				"data-testid": "menu",
				popover: "manual",
				tabindex: "-1",
				role: "menu",
				"aria-expanded": p.value ? "true" : "false",
				onKeydown: C,
				onClick: S
			}, [L(t.$slots, "default", {}, void 0, !0)], 40, Af), [[zc, m.value]])]),
			_: 3
		}, 40, ["placement", "alignment"]))])], 8, Of)) : K("", !0)], 64));
	}
}, [["__scopeId", "data-v-7bb9c58b"]]), Mf = /*#__PURE__*/ Y({
	__name: "PTooltip",
	props: /*@__PURE__*/ Fa({
		offset: {
			type: Number,
			default: 2
		},
		behavior: {
			type: String,
			default: "hover"
		},
		text: {
			type: String,
			default: ""
		},
		inverted: {
			type: Boolean,
			default: !1
		},
		width: {
			type: String,
			default: "fit-content"
		},
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
		let t = ro(e, "location"), n = si("tooltip-wrapper"), r = J(() => n.value?.children[0]);
		return (n, i) => (B(), H(jf, {
			offset: e.offset,
			behavior: e.behavior,
			location: t.value,
			"fit-content": e.width === "fit-content",
			attach: e.attach || r.value,
			delay: e.behavior === "static" ? 0 : 150,
			"close-on-click": !1,
			"aria-label": e.text || "Tooltip",
			"onUpdate:location": i[0] ||= (e) => t.value = e
		}, {
			activator: F((e) => [U("div", q({
				ref: "tooltip-wrapper",
				class: "tooltip-wrapper"
			}, e), [L(n.$slots, "default", {}, void 0, !0)], 16)]),
			default: F(() => [e.text || n.$slots.content ? (B(), V("div", {
				key: 0,
				class: k(["tooltip", [t.value.replace(/,/g, "-"), { inverted: e.inverted }]]),
				style: he({ width: e.width }),
				"data-testid": "tooltip",
				role: "menuitem"
			}, [L(n.$slots, "content", {}, () => [G(A(e.text), 1)], !0)], 6)) : K("", !0)]),
			_: 3
		}, 8, [
			"offset",
			"behavior",
			"location",
			"fit-content",
			"attach",
			"delay",
			"aria-label"
		]));
	}
}, [["__scopeId", "data-v-5016fba7"]]);
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/copyToClipboard.helper.BGJJdrWO.js
async function Nf(e) {
	try {
		await navigator.clipboard.writeText(e);
	} catch (e) {
		console.error("Failed to copy: ", e);
	}
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/buttons/copy-button/PCopyButton.js
var Pf = ["aria-label"], Ff = /*#__PURE__*/ Y({
	__name: "PCopyButton",
	props: {
		text: {
			type: String,
			required: !0
		},
		size: {
			type: String,
			default: "small"
		},
		outline: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(!1), r = /* @__PURE__ */ N(0), i = J(() => {
			switch (t.size) {
				case "large": return Ud;
				case "medium": return Au;
				default: return Gd;
			}
		});
		function a() {
			Nf(t.text), n.value = !0, clearTimeout(r.value), r.value = setTimeout(() => {
				n.value = !1;
			}, 1e3);
		}
		return (t, r) => t.$slots.default ? (B(), V("button", {
			key: 0,
			class: "copy-button",
			type: "button",
			"aria-label": n.value ? P(Z)("copy-button.copied") : P(Z)("copy-button.copy"),
			onClick: a
		}, [L(t.$slots, "default", {}, void 0, !0), W(Gd, {
			icon: n.value ? P(Dd) : P(kd),
			class: k({ "check-icon": n.value })
		}, null, 8, ["icon", "class"])], 8, Pf)) : (B(), H(Mf, {
			key: 1,
			location: "top",
			inverted: "",
			text: n.value ? P(Z)("copy-button.copied") : P(Z)("copy-button.copy")
		}, {
			default: F(() => [W(X, {
				class: "copy-icon-button",
				variant: e.outline ? "secondary" : "text",
				"aria-label": n.value ? P(Z)("copy-button.copied") : P(Z)("copy-button.copy"),
				size: e.size,
				onClick: a
			}, {
				default: F(() => [(B(), H(ua(i.value), {
					icon: n.value ? P(Dd) : P(kd),
					class: k({ "check-icon": n.value })
				}, null, 8, ["icon", "class"]))]),
				_: 1
			}, 8, [
				"variant",
				"aria-label",
				"size"
			])]),
			_: 1
		}, 8, ["text"]));
	}
}, [["__scopeId", "data-v-da33eefe"]]), If = { class: "linear-progress" }, Lf = { class: "wrapper" }, Rf = {
	key: 0,
	class: "append"
}, zf = { key: 0 }, Bf = { key: 1 }, Vf = -100, Hf = /*#__PURE__*/ Y({
	__name: "PLinearProgress",
	props: {
		indeterminate: {
			type: Boolean,
			default: !1
		},
		color: {
			type: String,
			default: "blue"
		},
		value: {
			type: Number,
			default: null
		},
		showAsPercentage: {
			type: Boolean,
			default: !1
		},
		showAsFraction: {
			type: Boolean,
			default: !1
		},
		max: {
			type: Number,
			default: 100
		}
	},
	setup(e) {
		let t = e;
		function n(e) {
			return Number(`${Math.round(Number(`${e}e2`))}e-2`);
		}
		let r = J(() => n(t.value / t.max * 100));
		return (t, n) => (B(), V("div", If, [
			L(t.$slots, "prepend", {}, void 0, !0),
			U("div", Lf, [
				L(t.$slots, "start", {}, void 0, !0),
				U("div", { class: k(["progress-bar", e.color]) }, [U("div", {
					class: k(["progress", { "animate-progress origin-left-right": e.indeterminate }]),
					style: he({ transform: `translateX(${Vf + r.value}%)` })
				}, null, 6)], 2),
				L(t.$slots, "end", {}, void 0, !0)
			]),
			L(t.$slots, "append", {}, () => [e.value !== null && (e.showAsPercentage || e.showAsFraction) ? (B(), V("div", Rf, [e.showAsPercentage ? (B(), V("span", zf, A(`${r.value}%`), 1)) : K("", !0), e.showAsFraction ? (B(), V("span", Bf, A(`${e.value}/${e.max}`), 1)) : K("", !0)])) : K("", !0)], !0)
		]));
	}
}, [["__scopeId", "data-v-d9f079b8"]]), Uf = ["data-testid"], Wf = { class: "wrapper" }, Gf = { class: "content" }, Kf = { class: "title" }, qf = {
	key: 1,
	class: "actions"
}, Jf = /*#__PURE__*/ Y({
	__name: "PToast",
	props: {
		type: {
			type: String,
			default: "success"
		},
		icon: {
			type: [Function, Object],
			default: null
		},
		title: {
			type: String,
			required: !0
		},
		description: {
			type: String,
			default: ""
		},
		primaryButton: {
			type: Boolean,
			default: !1
		},
		secondaryButton: {
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
		show: Boolean,
		absolute: Boolean,
		durationInMs: {
			type: Number,
			default: null
		},
		hideCloseButton: {
			type: Boolean,
			default: !1
		},
		clipboardText: {
			type: String,
			default: ""
		}
	},
	emits: [
		"click:primary",
		"click:secondary",
		"click:close"
	],
	setup(e, { emit: t }) {
		Uc((e) => ({ v0ca17cc2: f.value }));
		let n = e, r = t, i = Ms(), a = si("toast"), o = /* @__PURE__ */ N(null), s = /* @__PURE__ */ N(""), c = /* @__PURE__ */ N(100), l = J(() => n.primaryButtonText ? n.primaryButtonText : Z("toast.confirm")), u = J(() => n.secondaryButtonText ? n.secondaryButtonText : Z("toast.dismiss")), d = J(() => n.icon ? n.icon : n.type === "error" ? Cu : n.type === "warning" ? wu : n.type === "success" ? xu : n.type === "info" ? Tu : null), f = J(() => n.durationInMs ? `${n.durationInMs}ms` : 0);
		return Zi(() => {
			s.value = `${a.value.getBoundingClientRect().height}px`, n.durationInMs && (c.value = 0);
		}), I(() => n.clipboardText, () => {
			n.clipboardText && Qn(() => {
				o.value.innerHTML = "";
				let [e, t] = n.description.split(`@${n.clipboardText}@`), r = Qs(Ff, { text: n.clipboardText }, { default: () => n.clipboardText });
				o.value.appendChild(document.createTextNode(e)), r.key = Math.random(), r.appContext = i.appContext, du(r, o.value), o.value.appendChild(document.createTextNode(t));
			});
		}, { immediate: !0 }), (t, n) => (B(), H(xc, { name: "fade" }, {
			default: F(() => [e.show ? (B(), V("div", {
				key: 0,
				ref: "toast",
				class: k(["toast", [e.type, { "is-absolute": e.absolute }]]),
				"data-testid": `toast-${e.type}`,
				role: "alert"
			}, [U("div", Wf, [
				d.value ? (B(), H(Au, {
					key: 0,
					class: "type-icon",
					icon: d.value
				}, null, 8, ["icon"])) : K("", !0),
				U("div", Gf, [L(t.$slots, "default", {}, () => [
					U("span", Kf, A(e.title), 1),
					e.description ? (B(), V("span", {
						key: 0,
						ref_key: "descriptionElement",
						ref: o,
						class: "description"
					}, A(e.description), 513)) : K("", !0),
					e.primaryButton || e.secondaryButton ? (B(), V("div", qf, [e.primaryButton ? (B(), H(X, {
						key: 0,
						size: "small",
						onClick: n[0] ||= (e) => r("click:primary")
					}, {
						default: F(() => [G(A(l.value), 1)]),
						_: 1
					})) : K("", !0), e.secondaryButton ? (B(), H(X, {
						key: 1,
						size: "small",
						variant: "secondary",
						onClick: n[1] ||= (e) => r("click:secondary")
					}, {
						default: F(() => [G(A(u.value), 1)]),
						_: 1
					})) : K("", !0)])) : K("", !0)
				], !0)]),
				e.hideCloseButton ? K("", !0) : (B(), H(X, {
					key: 1,
					class: "close",
					variant: "terniary",
					icon: P(Ou),
					"aria-label": P(Z)("toast.close"),
					onClick: n[2] ||= (e) => r("click:close")
				}, null, 8, ["icon", "aria-label"]))
			]), e.durationInMs ? (B(), H(Hf, {
				key: 0,
				value: c.value
			}, null, 8, ["value"])) : K("", !0)], 10, Uf)) : K("", !0)]),
			_: 3
		}));
	}
}, [["__scopeId", "data-v-4db35736"]]), Yf = /* @__PURE__ */ N([]), Xf = /* @__PURE__ */ new Map(), Zf = 2, Qf = 9;
function $f() {
	function e(e) {
		let t = Yf.value.findIndex((t) => t.id === e);
		t !== -1 && (clearTimeout(Xf.get(e)), Xf.delete(e), Yf.value.splice(t, 1));
	}
	function t(t) {
		let n = Math.random().toString(36).substring(Zf, Qf) + (/* @__PURE__ */ new Date()).getTime().toString(36);
		if (Yf.value.push({
			...t,
			id: n,
			show: !0
		}), t.durationInMs) {
			let r = setTimeout(() => {
				e(n);
			}, t.durationInMs);
			Xf.set(n, r);
		}
		return n;
	}
	return {
		toasts: /* @__PURE__ */ Qt(Yf),
		removeToast: e,
		addToast: t
	};
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/notifications/toast/PToastGroup.js
var ep = {
	ref: "toast-group",
	class: "toast-group",
	popover: "manual"
}, tp = 300, np = -1, rp = /*#__PURE__*/ Y({
	__name: "PToastGroup",
	setup(e) {
		let { toasts: t, removeToast: n } = $f(), r = /* @__PURE__ */ N(np), i = si("toast-group"), a;
		function o() {
			return !!i.value?.matches(":popover-open");
		}
		function s() {
			!i.value || o() || i.value.showPopover();
		}
		function c() {
			!i.value || !o() || i.value.hidePopover();
		}
		function l() {
			!i.value || t.value.length === 0 || !o() || (c(), s());
		}
		function u(e) {
			return Array.from(e).some((e) => e.nodeName === "DIALOG" || e.querySelector?.("dialog"));
		}
		function d(e) {
			return e.target.nodeName === "DIALOG" || u(e.addedNodes) || u(e.removedNodes);
		}
		return I(() => t.value.length, () => {
			if (clearTimeout(r.value), t.value.length > 0) {
				s();
				return;
			}
			r.value = setTimeout(() => {
				c();
			}, tp);
		}), Zi(() => {
			t.value.length > 0 && s(), a = new MutationObserver((e) => {
				e.some(d) && l();
			}), a.observe(document.body, {
				subtree: !0,
				childList: !0,
				attributes: !0,
				attributeFilter: ["open"]
			});
		}), ta(() => {
			clearTimeout(r.value), a?.disconnect(), c();
		}), (e, r) => (B(), H(Br, { to: "body" }, [U("div", ep, [W(Al, {
			name: "fade",
			appear: ""
		}, {
			default: F(() => [(B(!0), V(R, null, ma(P(t), (e) => (B(), H(Jf, q({
				key: e.id,
				ref_for: !0,
				ref: "toastElements"
			}, { ref_for: !0 }, e, { "onClick:close": (t) => P(n)(e.id) }), null, 16, ["onClick:close"]))), 128))]),
			_: 1
		})], 512)]));
	}
}, [["__scopeId", "data-v-acb04aac"]]), ip = "probo-design-system-toast-host", ap = null;
function op(e = null) {
	if (typeof document > "u" || !document.body) return null;
	if (ap?.isConnected) return ap;
	ap = document.getElementById("probo-design-system-toast-host") || document.createElement("div"), ap.id = ip, ap.parentNode || document.body.appendChild(ap);
	let t = Qs(rp);
	return e?._context && (t.appContext = e._context), du(t, ap), ap;
}
function sp(e) {
	let t = document.createElement("link");
	t.rel = "stylesheet", t.href = e, document.head.appendChild(t);
}
function cp(e, t) {
	["https://rsms.me/inter/inter.css", "https://fonts.cdnfonts.com/css/poppins"].forEach((e) => {
		sp(e);
	}), t?.toastHost !== !1 && op(e), e.provide("enableFormNavGuard", t?.enableFormNavGuard);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/ProboDesignSystemThinPlugin.js
function lp(e, t) {
	cp(e, t);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/indicators/labels/PLabel.js
var up = /*#__PURE__*/ Y({
	__name: "PLabel",
	props: {
		small: Boolean,
		color: {
			type: String,
			default: "red"
		},
		alt: Boolean
	},
	setup(e) {
		return (t, n) => (B(), V("span", { class: k(["label", [
			{ small: e.small },
			{ alt: e.alt },
			e.color
		]]) }, [L(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-08911c65"]]), dp = /*#__PURE__*/ Y({
	__name: "PHeading",
	props: { level: {
		type: String,
		default: "h1"
	} },
	setup(e) {
		return (t, n) => (B(), H(ua(e.level), null, {
			default: F(() => [L(t.$slots, "default", {}, void 0, !0)]),
			_: 3
		}));
	}
}, [["__scopeId", "data-v-2c80c3d1"]]), fp = {
	class: "delivery-options",
	part: "delivery-step"
}, pp = { class: "header" }, mp = {
	class: "hint",
	part: "delivery-step-subtitle"
}, hp = { class: "content" }, gp = {
	class: "day",
	part: "delivery-option-day"
}, _p = {
	class: "date",
	part: "delivery-option-date"
}, vp = {
	key: 0,
	class: "cost",
	part: "delivery-option-cost"
}, yp = {
	key: 1,
	class: "no-cost",
	part: "delivery-option-no-cost"
}, bp = /*#__PURE__*/ Y({
	__name: "PDeliveryOptions",
	props: {
		items: {
			type: Array,
			default: () => []
		},
		title: {
			type: String,
			default: ""
		},
		noCostText: {
			type: String,
			default: ""
		},
		makeYourChoice: {
			type: String,
			default: ""
		},
		buttonTextShow: {
			type: String,
			default: ""
		},
		buttonTextHide: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(!1), r = J(() => t.title ? t.title : Z("delivery.delivery_options")), i = J(() => t.noCostText ? t.noCostText : Z("delivery.no_extra_cost")), a = J(() => t.makeYourChoice ? t.makeYourChoice : Z("delivery.make_your_choice_next_step")), o = J(() => t.buttonTextShow ? t.buttonTextShow : Z("delivery.see_more")), s = J(() => t.buttonTextHide ? t.buttonTextHide : Z("delivery.see_less"));
		function c() {
			window.innerWidth >= 768 ? n.value = !0 : n.value = !1;
		}
		return Qn(() => {
			window.addEventListener("resize", c);
		}), ea(() => {
			window.removeEventListener("resize", c);
		}), c(), (t, c) => (B(), V("div", fp, [U("div", pp, [W(dp, {
			class: "title",
			part: "delivery-step-title",
			level: "h3"
		}, {
			default: F(() => [G(A(r.value), 1)]),
			_: 1
		}), U("span", mp, [c[1] ||= U("span", null, "*", -1), G(" " + A(a.value), 1)])]), U("div", hp, [(B(!0), V(R, null, ma(e.items, (t, r) => (B(), V("div", {
			key: r,
			class: k(["option", {
				hide: r > 0 && !n.value && !t.cheapest,
				last: r === 1 && !n.value || r === e.items.length - 1 || r > 1 && t.cheapest && !n.value
			}]),
			part: "delivery-option"
		}, [
			U("span", gp, [G(A(t.day) + " ", 1), t.label ? (B(), H(up, {
				key: 0,
				color: t.label.color,
				small: ""
			}, {
				default: F(() => [G(A(t.label.text), 1)]),
				_: 2
			}, 1032, ["color"])) : K("", !0)]),
			U("span", _p, A(t.date), 1),
			t.cost ? (B(), V("span", vp, " + € " + A(t.cost), 1)) : (B(), V("span", yp, A(i.value), 1))
		], 2))), 128)), W(X, {
			variant: "tertiary",
			onClick: c[0] ||= (e) => n.value = !n.value
		}, {
			default: F(() => [G(A(n.value ? s.value : o.value), 1)]),
			_: 1
		})])]));
	}
}, [["__scopeId", "data-v-684645c5"]]), xp = ["aria-disabled"], Sp = [
	"id",
	"aria-controls",
	"disabled"
], Cp = [
	"id",
	"data-testid",
	"aria-hidden"
], wp = /*#__PURE__*/ Y({
	__name: "PAccordionItem",
	props: {
		modelValue: Boolean,
		title: {
			type: [String, Number],
			default: ""
		},
		ariaTitle: {
			type: String,
			default: ""
		},
		hideToggle: Boolean,
		disabled: Boolean,
		scrollIntoView: Boolean
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(null);
		return I(() => n.modelValue, (e) => {
			e && n.scrollIntoView && setTimeout(() => i.value.scrollIntoView({
				behavior: "smooth",
				block: "start"
			}), 100);
		}, { immediate: !0 }), (t, n) => (B(), V("div", {
			class: k(["accordion-item", { disabled: e.disabled }]),
			"aria-disabled": e.disabled
		}, [U("button", {
			id: `accordion-header-${e.ariaTitle}`,
			ref_key: "accordionHeader",
			ref: i,
			class: "header",
			"data-testid": "accordion-trigger",
			"aria-controls": `accordion-content-${e.ariaTitle}`,
			disabled: e.disabled,
			onClick: n[0] ||= (t) => r("update:modelValue", !e.modelValue)
		}, [L(t.$slots, "header", {}, () => [W(dp, {
			class: "title",
			level: "h3"
		}, {
			default: F(() => [G(A(e.title), 1)]),
			_: 1
		})]), e.hideToggle ? K("", !0) : (B(), V("div", {
			key: 0,
			"data-testid": "accordion-state-indicator",
			class: k(["state-indicator", { open: e.modelValue }])
		}, [W(Ud, {
			part: "state-indicator-icon",
			icon: P(Od)
		}, null, 8, ["icon"])], 2))], 8, Sp), W(xc, { name: "grow" }, {
			default: F(() => [gr(U("div", {
				id: `accordion-content-${e.ariaTitle}`,
				"data-testid": `accordion-content-${e.ariaTitle}`,
				"aria-hidden": !e.modelValue,
				class: "content"
			}, [W(xc, { name: "fade" }, {
				default: F(() => [e.modelValue ? L(t.$slots, "default", {}, void 0, void 0, 0) : K("", !0)]),
				_: 3
			})], 8, Cp), [[zc, e.modelValue]])]),
			_: 3
		})], 10, xp));
	}
}, [["__scopeId", "data-v-17b37b7b"]]), Tp = {
	class: "accordion",
	"data-testid": "accordion"
}, Ep = /*#__PURE__*/ Y({
	__name: "PAccordion",
	props: {
		modelValue: {
			type: Array,
			default: () => [!0]
		},
		items: {
			type: Array,
			default: () => []
		},
		title: {
			type: String,
			default: ""
		},
		multiple: Boolean,
		disabled: Boolean,
		scrollIntoView: Boolean
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = J(() => [...n.modelValue]);
		function a(e, t) {
			n.multiple ? (i.value[t] = e, r("update:modelValue", i.value)) : (i.value.forEach((e, n) => {
				n !== t && (i.value[n] = !1);
			}), r("update:modelValue", i.value));
		}
		return (t, n) => (B(), V("div", Tp, [(B(!0), V(R, null, ma(e.items, (n, r) => L(t.$slots, "default", q({ ref_for: !0 }, {
			item: n,
			index: r,
			open: i.value[r]
		}), () => [W(wp, {
			modelValue: i.value[r],
			"onUpdate:modelValue": [(e) => i.value[r] = e, (e) => a(e, r)],
			title: n[e.title],
			"aria-title": n.ariaTitle,
			disabled: e.disabled || n.disabled,
			"hide-toggle": e.disabled,
			"scroll-into-view": e.scrollIntoView
		}, {
			default: F(() => [L(t.$slots, "content", q({ ref_for: !0 }, n), void 0, !0)]),
			_: 2
		}, 1032, [
			"modelValue",
			"onUpdate:modelValue",
			"title",
			"aria-title",
			"disabled",
			"hide-toggle",
			"scroll-into-view"
		])], !0, r)), 128))]));
	}
}, [["__scopeId", "data-v-25a8f65e"]]), Dp = ["disabled"], Op = /*#__PURE__*/ Y({
	__name: "PSwitch",
	props: {
		modelValue: Boolean,
		disabled: Boolean
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = yr("markFormDirty", null), i = t, a = J({
			get: () => n.modelValue,
			set: (e) => {
				i("update:modelValue", e);
			}
		});
		function o() {
			a.value = !a.value, r?.();
		}
		return (t, n) => (B(), V("button", {
			class: k(["switch", { enabled: a.value }]),
			"data-testid": "switch",
			disabled: e.disabled,
			"aria-label": "Use setting",
			onClick: n[0] ||= (t) => e.disabled ? null : o(),
			onKeydown: n[1] ||= au(ru(() => {}, ["prevent"]), ["enter"])
		}, [U("span", {
			class: k(["dot", { enabled: a.value }]),
			"aria-hidden": "true"
		}, null, 2)], 42, Dp));
	}
}, [["__scopeId", "data-v-9b4745c4"]]), kp = Object.defineProperty, Ap = Object.getOwnPropertyDescriptor, jp = Object.getOwnPropertyNames, Mp = Object.prototype.hasOwnProperty, Np = (e, t) => {
	let n = {};
	for (var r in e) kp(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || kp(n, Symbol.toStringTag, { value: "Module" }), n;
}, Pp = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = jp(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Mp.call(e, s) && s !== n && kp(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Ap(t, s)) || r.enumerable
	});
	return e;
}, Fp = (e, t, n) => (Pp(e, t, "default"), n && Pp(n, t, "default")), Q = /* @__PURE__ */ Np({
	Vue: () => yu,
	Vue2: () => void 0,
	del: () => Rp,
	install: () => Ip,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => Lp
});
Fp(Q, yu);
function Ip() {}
function Lp(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Rp(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
function zp(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Bp(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? zp(Object(n), !0).forEach(function(t) {
			Vp(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zp(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Vp(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Hp(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	return Object.keys(e).reduce((n, r) => (t.includes(r) || (n[r] = (0, Q.unref)(e[r])), n), {});
}
function Up(e) {
	return typeof e == "function";
}
function Wp(e) {
	return (0, Q.isReactive)(e) || (0, Q.isReadonly)(e);
}
function Gp(e, t, n) {
	let r = e, i = t.split(".");
	for (let e = 0; e < i.length; e++) {
		if (!r[i[e]]) return n;
		r = r[i[e]];
	}
	return r;
}
function Kp(e, t, n) {
	return (0, Q.computed)(() => e.some((e) => Gp(t, e, { [n]: !1 })[n]));
}
function qp(e, t, n) {
	return (0, Q.computed)(() => e.reduce((e, r) => {
		let i = Gp(t, r, { [n]: !1 })[n] || [];
		return e.concat(i);
	}, []));
}
function Jp(e, t, n, r) {
	return e.call(r, (0, Q.unref)(t), (0, Q.unref)(n), r);
}
function Yp(e) {
	return e.$valid === void 0 ? !e : !e.$valid;
}
function Xp(e, t, n, r, i, a, o) {
	let { $lazy: s, $rewardEarly: c } = i, l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], u = arguments.length > 8 ? arguments[8] : void 0, d = arguments.length > 9 ? arguments[9] : void 0, f = arguments.length > 10 ? arguments[10] : void 0, p = (0, Q.ref)(!!r.value), m = (0, Q.ref)(0);
	return n.value = !1, {
		$invalid: p,
		$unwatch: (0, Q.watch)([t, r].concat(l, f), () => {
			if (s && !r.value || c && !d.value && !n.value) return;
			let i;
			try {
				i = Jp(e, t, u, o);
			} catch (e) {
				i = Promise.reject(e);
			}
			m.value++, n.value = !!m.value, p.value = !1, Promise.resolve(i).then((e) => {
				m.value--, n.value = !!m.value, a.value = e, p.value = Yp(e);
			}).catch((e) => {
				m.value--, n.value = !!m.value, a.value = e, p.value = !0;
			});
		}, {
			immediate: !0,
			deep: typeof t == "object"
		})
	};
}
function Zp(e, t, n, r, i, a, o, s) {
	let { $lazy: c, $rewardEarly: l } = r;
	return {
		$unwatch: () => ({}),
		$invalid: (0, Q.computed)(() => {
			if (c && !n.value || l && !s.value) return !1;
			let r = !0;
			try {
				let n = Jp(e, t, o, a);
				i.value = n, r = Yp(n);
			} catch (e) {
				i.value = e;
			}
			return r;
		})
	};
}
function Qp(e, t, n, r, i, a, o, s, c, l, u) {
	let d = (0, Q.ref)(!1), f = e.$params || {}, p = (0, Q.ref)(null), m, h;
	e.$async ? {$invalid: m, $unwatch: h} = Xp(e.$validator, t, d, n, r, p, i, e.$watchTargets, c, l, u) : {$invalid: m, $unwatch: h} = Zp(e.$validator, t, n, r, p, i, c, l);
	let g = e.$message;
	return {
		$message: Up(g) ? (0, Q.computed)(() => g(Hp({
			$pending: d,
			$invalid: m,
			$params: Hp(f),
			$model: t,
			$response: p,
			$validator: a,
			$propertyPath: s,
			$property: o
		}))) : g || "",
		$params: f,
		$pending: d,
		$invalid: m,
		$response: p,
		$unwatch: h
	};
}
function $p() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = (0, Q.unref)(e), n = Object.keys(t), r = {}, i = {}, a = {}, o = null;
	return n.forEach((e) => {
		let n = t[e];
		switch (!0) {
			case Up(n.$validator):
				r[e] = n;
				break;
			case Up(n):
				r[e] = { $validator: n };
				break;
			case e === "$validationGroups":
				o = n;
				break;
			case e.startsWith("$"):
				a[e] = n;
				break;
			default: i[e] = n;
		}
	}), {
		rules: r,
		nestedValidators: i,
		config: a,
		validationGroups: o
	};
}
var em = "__root";
function tm(e, t, n, r, i, a, o, s, c) {
	let l = Object.keys(e), u = r.get(i, e), d = (0, Q.ref)(!1), f = (0, Q.ref)(!1), p = (0, Q.ref)(0);
	if (u) {
		if (!u.$partial) return u;
		u.$unwatch(), d.value = u.$dirty.value;
	}
	let m = {
		$dirty: d,
		$path: i,
		$touch: () => {
			d.value ||= !0;
		},
		$reset: () => {
			d.value &&= !1;
		},
		$commit: () => {}
	};
	return l.length ? (l.forEach((r) => {
		m[r] = Qp(e[r], t, m.$dirty, a, o, r, n, i, c, f, p);
	}), m.$externalResults = (0, Q.computed)(() => s.value ? [].concat(s.value).map((e, t) => ({
		$propertyPath: i,
		$property: n,
		$validator: "$externalResults",
		$uid: `${i}-externalResult-${t}`,
		$message: e,
		$params: {},
		$response: null,
		$pending: !1
	})) : []), m.$invalid = (0, Q.computed)(() => {
		let e = l.some((e) => (0, Q.unref)(m[e].$invalid));
		return f.value = e, !!m.$externalResults.value.length || e;
	}), m.$pending = (0, Q.computed)(() => l.some((e) => (0, Q.unref)(m[e].$pending))), m.$error = (0, Q.computed)(() => m.$dirty.value ? m.$pending.value || m.$invalid.value : !1), m.$silentErrors = (0, Q.computed)(() => l.filter((e) => (0, Q.unref)(m[e].$invalid)).map((e) => {
		let t = m[e];
		return (0, Q.reactive)({
			$propertyPath: i,
			$property: n,
			$validator: e,
			$uid: `${i}-${e}`,
			$message: t.$message,
			$params: t.$params,
			$response: t.$response,
			$pending: t.$pending
		});
	}).concat(m.$externalResults.value)), m.$errors = (0, Q.computed)(() => m.$dirty.value ? m.$silentErrors.value : []), m.$unwatch = () => l.forEach((e) => {
		m[e].$unwatch();
	}), m.$commit = () => {
		f.value = !0, p.value = Date.now();
	}, r.set(i, e, m), m) : (u && r.set(i, e, m), m);
}
function nm(e, t, n, r, i, a, o) {
	let s = Object.keys(e);
	return s.length ? s.reduce((s, c) => (s[c] = im({
		validations: e[c],
		state: t,
		key: c,
		parentKey: n,
		resultsCache: r,
		globalConfig: i,
		instance: a,
		externalResults: o
	}), s), {}) : {};
}
function rm(e, t, n) {
	let r = (0, Q.computed)(() => [t, n].filter((e) => e).reduce((e, t) => e.concat(Object.values((0, Q.unref)(t))), [])), i = (0, Q.computed)({
		get() {
			return e.$dirty.value || (r.value.length ? r.value.every((e) => e.$dirty) : !1);
		},
		set(t) {
			e.$dirty.value = t;
		}
	}), a = (0, Q.computed)(() => {
		let t = (0, Q.unref)(e.$silentErrors) || [], n = r.value.filter((e) => ((0, Q.unref)(e).$silentErrors || []).length).reduce((e, t) => e.concat(...t.$silentErrors), []);
		return t.concat(n);
	}), o = (0, Q.computed)(() => {
		let t = (0, Q.unref)(e.$errors) || [], n = r.value.filter((e) => ((0, Q.unref)(e).$errors || []).length).reduce((e, t) => e.concat(...t.$errors), []);
		return t.concat(n);
	}), s = (0, Q.computed)(() => r.value.some((e) => e.$invalid) || (0, Q.unref)(e.$invalid) || !1), c = (0, Q.computed)(() => r.value.some((e) => (0, Q.unref)(e.$pending)) || (0, Q.unref)(e.$pending) || !1), l = (0, Q.computed)(() => r.value.some((e) => e.$dirty) || r.value.some((e) => e.$anyDirty) || i.value), u = (0, Q.computed)(() => i.value ? c.value || s.value : !1), d = () => {
		e.$touch(), r.value.forEach((e) => {
			e.$touch();
		});
	};
	return r.value.length && r.value.every((e) => e.$dirty) && d(), {
		$dirty: i,
		$errors: o,
		$invalid: s,
		$anyDirty: l,
		$error: u,
		$pending: c,
		$touch: d,
		$reset: () => {
			e.$reset(), r.value.forEach((e) => {
				e.$reset();
			});
		},
		$silentErrors: a,
		$commit: () => {
			e.$commit(), r.value.forEach((e) => {
				e.$commit();
			});
		}
	};
}
function im(e) {
	let { validations: t, state: n, key: r, parentKey: i, childResults: a, resultsCache: o, globalConfig: s = {}, instance: c, externalResults: l } = e, u = i ? `${i}.${r}` : r, { rules: d, nestedValidators: f, config: p, validationGroups: m } = $p(t), h = Bp(Bp({}, s), p), g = r ? (0, Q.computed)(() => {
		let e = (0, Q.unref)(n);
		return e ? (0, Q.unref)(e[r]) : void 0;
	}) : n, _ = Bp({}, (0, Q.unref)(l) || {}), v = (0, Q.computed)(() => {
		let e = (0, Q.unref)(l);
		return r ? e ? (0, Q.unref)(e[r]) : void 0 : e;
	}), y = tm(d, g, r, o, u, h, c, v, n), b = nm(f, g, u, o, h, c, v), x = {};
	m && Object.entries(m).forEach((e) => {
		let [t, n] = e;
		x[t] = {
			$invalid: Kp(n, b, "$invalid"),
			$error: Kp(n, b, "$error"),
			$pending: Kp(n, b, "$pending"),
			$errors: qp(n, b, "$errors"),
			$silentErrors: qp(n, b, "$silentErrors")
		};
	});
	let { $dirty: S, $errors: C, $invalid: w, $anyDirty: T, $error: E, $pending: D, $touch: ee, $reset: te, $silentErrors: ne, $commit: O } = rm(y, b, a), re = r ? (0, Q.computed)({
		get: () => (0, Q.unref)(g),
		set: (e) => {
			S.value = !0;
			let t = (0, Q.unref)(n), i = (0, Q.unref)(l);
			i && (i[r] = _[r]), (0, Q.isRef)(t[r]) ? t[r].value = e : t[r] = e;
		}
	}) : null;
	r && h.$autoDirty && (0, Q.watch)(g, () => {
		S.value || ee();
		let e = (0, Q.unref)(l);
		e && (e[r] = _[r]);
	}, { flush: "sync" });
	async function ie() {
		return ee(), h.$rewardEarly && (O(), await (0, Q.nextTick)()), await (0, Q.nextTick)(), new Promise((e) => {
			if (!D.value) return e(!w.value);
			let t = (0, Q.watch)(D, () => {
				e(!w.value), t();
			});
		});
	}
	function ae(e) {
		return (a.value || {})[e];
	}
	function oe() {
		(0, Q.isRef)(l) ? l.value = _ : Object.keys(_).length === 0 ? Object.keys(l).forEach((e) => {
			delete l[e];
		}) : Object.assign(l, _);
	}
	return (0, Q.reactive)(Bp(Bp(Bp({}, y), {}, {
		$model: re,
		$dirty: S,
		$error: E,
		$errors: C,
		$invalid: w,
		$anyDirty: T,
		$pending: D,
		$touch: ee,
		$reset: te,
		$path: u || em,
		$silentErrors: ne,
		$validate: ie,
		$commit: O
	}, a && {
		$getResultsForChild: ae,
		$clearExternalResults: oe,
		$validationGroups: x
	}), b));
}
var am = class {
	constructor() {
		this.storage = /* @__PURE__ */ new Map();
	}
	set(e, t, n) {
		this.storage.set(e, {
			rules: t,
			result: n
		});
	}
	checkRulesValidity(e, t, n) {
		let r = Object.keys(n), i = Object.keys(t);
		return i.length !== r.length || !i.every((e) => r.includes(e)) ? !1 : i.every((e) => !t[e].$params || Object.keys(t[e].$params).every((r) => (0, Q.unref)(n[e].$params[r]) === (0, Q.unref)(t[e].$params[r])));
	}
	get(e, t) {
		let n = this.storage.get(e);
		if (!n) return;
		let { rules: r, result: i } = n, a = this.checkRulesValidity(e, t, r), o = i.$unwatch ? i.$unwatch : () => ({});
		return a ? i : {
			$dirty: i.$dirty,
			$partial: !0,
			$unwatch: o
		};
	}
}, om = {
	COLLECT_ALL: !0,
	COLLECT_NONE: !1
}, sm = Symbol("vuelidate#injectChildResults"), cm = Symbol("vuelidate#removeChildResults");
function lm(e) {
	let { $scope: t, instance: n } = e, r = {}, i = (0, Q.ref)([]), a = (0, Q.computed)(() => i.value.reduce((e, t) => (e[t] = (0, Q.unref)(r[t]), e), {}));
	function o(e, n) {
		let { $registerAs: a, $scope: o, $stopPropagation: s } = n;
		s || t === om.COLLECT_NONE || o === om.COLLECT_NONE || t !== om.COLLECT_ALL && t !== o || (r[a] = e, i.value.push(a));
	}
	n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], o);
	function s(e) {
		i.value = i.value.filter((t) => t !== e), delete r[e];
	}
	n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], s);
	let c = (0, Q.inject)(sm, []);
	(0, Q.provide)(sm, n.__vuelidateInjectInstances);
	let l = (0, Q.inject)(cm, []);
	return (0, Q.provide)(cm, n.__vuelidateRemoveInstances), {
		childResults: a,
		sendValidationResultsToParent: c,
		removeValidationResultsFromParent: l
	};
}
function um(e) {
	return new Proxy(e, { get(e, t) {
		return typeof e[t] == "object" ? um(e[t]) : (0, Q.computed)(() => e[t]);
	} });
}
var dm = 0;
function fm(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	arguments.length === 1 && (n = e, e = void 0, t = void 0);
	let { $registerAs: r, $scope: i = om.COLLECT_ALL, $stopPropagation: a, $externalResults: o, currentVueInstance: s } = n, c = s || (0, Q.getCurrentInstance)()?.proxy, l = c ? c.$options : {};
	r ||= (dm += 1, `_vuelidate_${dm}`);
	let u = (0, Q.ref)({}), d = new am(), { childResults: f, sendValidationResultsToParent: p, removeValidationResultsFromParent: m } = c ? lm({
		$scope: i,
		instance: c
	}) : { childResults: (0, Q.ref)({}) };
	if (!e && l.validations) {
		let e = l.validations;
		t = (0, Q.ref)({}), (0, Q.onBeforeMount)(() => {
			t.value = c, (0, Q.watch)(() => Up(e) ? e.call(t.value, new um(t.value)) : e, (e) => {
				u.value = im({
					validations: e,
					state: t,
					childResults: f,
					resultsCache: d,
					globalConfig: n,
					instance: c,
					externalResults: o || c.vuelidateExternalResults
				});
			}, { immediate: !0 });
		}), n = l.validationsConfig || n;
	} else {
		let r = (0, Q.isRef)(e) || Wp(e) ? e : (0, Q.reactive)(e || {});
		(0, Q.watch)(r, (e) => {
			u.value = im({
				validations: e,
				state: t,
				childResults: f,
				resultsCache: d,
				globalConfig: n,
				instance: c ?? {},
				externalResults: o
			});
		}, { immediate: !0 });
	}
	return c && (p.forEach((e) => e(u, {
		$registerAs: r,
		$scope: i,
		$stopPropagation: a
	})), (0, Q.onBeforeUnmount)(() => m.forEach((e) => e(r)))), (0, Q.computed)(() => Bp(Bp({}, (0, Q.unref)(u.value)), f.value));
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/dist.DKlAMPau.js
var pm = /* @__PURE__ */ Np({
	Vue: () => yu,
	Vue2: () => void 0,
	del: () => gm,
	install: () => mm,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => hm
});
Fp(pm, yu);
function mm() {}
function hm(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function gm(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
function _m(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function vm(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? _m(Object(n), !0).forEach(function(t) {
			ym(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _m(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ym(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function bm(e) {
	return typeof e == "function";
}
function xm(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Sm(e) {
	return bm(e.$validator) ? vm({}, e) : { $validator: e };
}
function Cm(e) {
	return typeof e == "object" ? e.$valid : e;
}
function wm(e) {
	return e.$validator || e;
}
function Tm(e, t) {
	if (!xm(e)) throw Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
	if (!xm(t) && !bm(t)) throw Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
	let n = Sm(t);
	return n.$params = vm(vm({}, n.$params || {}), e), n;
}
function Em(e, t) {
	if (!bm(e) && typeof (0, pm.unref)(e) != "string") throw Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
	if (!xm(t) && !bm(t)) throw Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
	let n = Sm(t);
	return n.$message = e, n;
}
function Dm(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	return vm(vm({}, Sm(e)), {}, {
		$async: !0,
		$watchTargets: t
	});
}
function Om(e) {
	return {
		$validator(t) {
			var n = [...arguments].slice(1);
			return (0, pm.unref)(t).reduce((t, r, i) => {
				let a = Object.entries(r).reduce((t, a) => {
					let [o, s] = a, c = e[o] || {}, l = Object.entries(c).reduce((e, t) => {
						let [a, c] = t, l = wm(c).call(this, s, r, i, ...n), u = Cm(l);
						if (e.$data[a] = l, e.$data.$invalid = !u || !!e.$data.$invalid, e.$data.$error = e.$data.$invalid, !u) {
							let t = c.$message || "", n = c.$params || {};
							typeof t == "function" && (t = t({
								$pending: !1,
								$invalid: !u,
								$params: n,
								$model: s,
								$response: l
							})), e.$errors.push({
								$property: o,
								$message: t,
								$params: n,
								$response: l,
								$model: s,
								$pending: !1,
								$validator: a
							});
						}
						return {
							$valid: e.$valid && u,
							$data: e.$data,
							$errors: e.$errors
						};
					}, {
						$valid: !0,
						$data: {},
						$errors: []
					});
					return t.$data[o] = l.$data, t.$errors[o] = l.$errors, {
						$valid: t.$valid && l.$valid,
						$data: t.$data,
						$errors: t.$errors
					};
				}, {
					$valid: !0,
					$data: {},
					$errors: {}
				});
				return {
					$valid: t.$valid && a.$valid,
					$data: t.$data.concat(a.$data),
					$errors: t.$errors.concat(a.$errors)
				};
			}, {
				$valid: !0,
				$data: [],
				$errors: []
			});
		},
		$message: (e) => {
			let { $response: t } = e;
			return t ? t.$errors.map((e) => Object.values(e).map((e) => e.map((e) => e.$message)).reduce((e, t) => e.concat(t), [])) : [];
		}
	};
}
var km = (e) => {
	if (e = (0, pm.unref)(e), Array.isArray(e)) return !!e.length;
	if (e == null) return !1;
	if (e === !1) return !0;
	if (e instanceof Date) return !isNaN(e.getTime());
	if (typeof e == "object") {
		for (let t in e) return !0;
		return !1;
	}
	return !!String(e).length;
}, Am = (e) => (e = (0, pm.unref)(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function jm() {
	var e = [...arguments];
	return (t) => (t = (0, pm.unref)(t), !km(t) || e.every((e) => (e.lastIndex = 0, e.test(t))));
}
var Mm = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	forEach: Om,
	len: Am,
	normalizeValidatorObject: Sm,
	regex: jm,
	req: km,
	unwrap: pm.unref,
	unwrapNormalizedValidator: wm,
	unwrapValidatorResponse: Cm,
	withAsync: Dm,
	withMessage: Em,
	withParams: Tm
});
function Nm(e) {
	return typeof e == "string" && (e = e.trim()), km(e);
}
var Pm = {
	$validator: Nm,
	$message: "Value is required",
	$params: { type: "required" }
};
function Fm(e) {
	return (t) => (0, pm.unref)(t) === (0, pm.unref)(e);
}
function Im(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
	return {
		$validator: Fm(e),
		$message: (e) => `The value must be equal to the ${t} value`,
		$params: {
			equalTo: e,
			otherName: t,
			type: "sameAs"
		}
	};
}
function Lm(e) {
	return (t) => !km(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +(0, pm.unref)(e);
}
function Rm(e) {
	return {
		$validator: Lm(e),
		$message: (e) => {
			let { $params: t } = e;
			return `The minimum value allowed is ${t.min}`;
		},
		$params: {
			min: e,
			type: "minValue"
		}
	};
}
function zm(e) {
	return (t) => !km(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +(0, pm.unref)(e);
}
var Bm = ((e) => ({
	$validator: zm(e),
	$message: (e) => {
		let { $params: t } = e;
		return `The maximum value allowed is ${t.max}`;
	},
	$params: {
		max: e,
		type: "maxValue"
	}
})), Vm = { class: "wrapper" }, Hm = { class: "header" }, Um = { class: "content" }, Wm = /*#__PURE__*/ Y({
	__name: "PDrawer",
	props: /*@__PURE__*/ Fa({
		position: {
			type: String,
			required: !0
		},
		title: {
			type: String,
			required: !0
		},
		fullWidth: {
			type: Boolean,
			default: !1
		},
		persistent: {
			type: Boolean,
			default: !1
		},
		overlay: {
			type: Boolean,
			default: !0
		}
	}, {
		modelValue: { type: Boolean },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e, { expose: t }) {
		let n = e, r = ro(e, "modelValue"), i = si("drawer"), a = /* @__PURE__ */ N(!1), o = /* @__PURE__ */ N(50), s = /* @__PURE__ */ N(!1), c = null, l = null, u = null;
		function d() {
			if (!i.value) return;
			let e = n.overlay ? o.value / 100 : 0;
			i.value.style.setProperty("--drawer-backdrop-opacity", String(e));
		}
		function f(e = !1, t = !1) {
			e && n.persistent && !t || s.value && !t || (s.value = !0, a.value = !1, o.value = 0, d(), c &&= (cancelAnimationFrame(c), null), l &&= (clearTimeout(l), null), u && clearTimeout(u), u = window.setTimeout(() => {
				i.value?.open && i.value.close(), r.value &&= !1, s.value = !1;
			}, 300));
		}
		function p(e) {
			n.overlay && e.target === e.currentTarget && f(!0);
		}
		function m() {
			f(!1, !0);
		}
		function h() {
			return Array.from(document.body.querySelectorAll("dialog.drawer[open]")).find((e) => e !== i.value);
		}
		function g() {
			let e = i.value;
			e.open || e.show(), d();
		}
		function _() {
			u && clearTimeout(u);
			let e = h(), t = () => {
				g(), c = requestAnimationFrame(() => {
					a.value = !0, s.value = !1, o.value = 50, d();
				});
			};
			if (e) {
				o.value = 0, d(), e.dispatchEvent(new CustomEvent("drawer:force-close")), l = window.setTimeout(t, 300);
				return;
			}
			t();
		}
		I(r, (e) => {
			if (e) {
				_();
				return;
			}
			f(!1, !0);
		}, { flush: "post" });
		function v(e) {
			if (n.persistent) {
				e.preventDefault();
				return;
			}
			f(!1, !0);
		}
		function y() {
			u &&= (clearTimeout(u), null), r.value &&= !1, s.value || (a.value = !1), s.value = !1;
		}
		return Zi(() => {
			r.value && _();
		}), I(() => i.value, (e, t, n) => {
			e && (e.addEventListener("drawer:force-close", m), n(() => {
				e.removeEventListener("drawer:force-close", m);
			}));
		}, { immediate: !0 }), ea(() => {
			i.value?.open && i.value.close(), c && cancelAnimationFrame(c), l && clearTimeout(l), u && clearTimeout(u);
		}), I(() => n.overlay, () => {
			d();
		}, { immediate: !0 }), I(o, () => {
			d();
		}, { immediate: !0 }), t({ closeDrawer: f }), (t, n) => r.value ? (B(), V("dialog", {
			key: 0,
			ref: "drawer",
			"data-testid": "drawer",
			class: k(["drawer", [e.position, {
				open: a.value,
				persistent: e.persistent,
				"full-width": e.fullWidth,
				"no-overlay": !e.overlay
			}]]),
			onCancel: v,
			onClick: p,
			onClose: y
		}, [U("div", Vm, [U("div", Hm, [W(dp, {
			level: "h2",
			class: "title"
		}, {
			default: F(() => [G(A(e.title), 1)]),
			_: 1
		}), W(X, {
			variant: "text",
			icon: P(Vd),
			class: "close",
			"data-testid": "close-button",
			"aria-label": P(Z)("drawer.close"),
			onClick: n[0] ||= (e) => f()
		}, null, 8, ["icon", "aria-label"])]), U("div", Um, [L(t.$slots, "default", {}, void 0, !0)])])], 34)) : K("", !0);
	}
}, [["__scopeId", "data-v-fb6d2cc1"]]), Gm = {}, Km = { class: "form-row" }, qm = {
	key: 0,
	class: "title"
}, Jm = {
	key: 1,
	class: "subtitle"
}, Ym = { class: "fields" };
function Xm(e, t) {
	return B(), V("section", Km, [U("div", { class: k(["label", { "label--empty": !e.$slots.title && !e.$slots.subtitle }]) }, [e.$slots.title ? (B(), V("h2", qm, [L(e.$slots, "title", {}, void 0, !0)])) : K("", !0), e.$slots.subtitle ? (B(), V("p", Jm, [L(e.$slots, "subtitle", {}, void 0, !0)])) : K("", !0)], 2), U("div", Ym, [L(e.$slots, "default", {}, void 0, !0)])]);
}
var Zm = /*#__PURE__*/ Y(Gm, [["render", Xm], ["__scopeId", "data-v-7a247590"]]), Qm = { class: "form-grid" }, $m = /*#__PURE__*/ Y({
	__name: "PFormGrid",
	setup(e) {
		return (e, t) => (B(), V("div", Qm, [L(e.$slots, "default", {}, void 0, !0), e.$slots.actions ? (B(), H(Zm, {
			key: 0,
			class: "actions"
		}, {
			default: F(() => [L(e.$slots, "actions", {}, void 0, !0)]),
			_: 3
		})) : K("", !0)]));
	}
}, [["__scopeId", "data-v-940e9744"]]);
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/esm.DlfxPmzK.js
function eh(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
		"clip-rule": "evenodd"
	})]);
}
function th(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", {
		"fill-rule": "evenodd",
		d: "M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z",
		"clip-rule": "evenodd"
	})]);
}
function nh(e, t) {
	return B(), V("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon"
	}, [U("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" })]);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/inputs/input/PInput.js
var rh = ["for"], ih = { class: "label-text" }, ah = {
	variant: "text",
	size: "small"
}, oh = {
	key: 0,
	class: "optional"
}, sh = { class: "container-inner" }, ch = {
	key: 0,
	class: "inline-container-prepended"
}, lh = [
	"id",
	"placeholder",
	"disabled",
	"readonly",
	"aria-label",
	"aria-invalid",
	"aria-describedby",
	"rows",
	"autofocus"
], uh = [
	"id",
	"placeholder",
	"type",
	"disabled",
	"readonly",
	"aria-label",
	"aria-invalid",
	"aria-describedby",
	"autofocus"
], dh = { class: "inline-container-appended" }, fh = {
	key: 1,
	class: "text"
}, ph = ["id"], mh = /*#__PURE__*/ Y({
	__name: "PInput",
	props: /*@__PURE__*/ Fa({
		id: {
			type: String,
			required: !0
		},
		placeholder: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "text"
		},
		error: {
			type: String,
			default: ""
		},
		valid: { type: Boolean },
		prependIcon: {
			type: [Function, Object],
			default: null
		},
		icon: {
			type: [Function, Object],
			default: null
		},
		disabled: { type: Boolean },
		readonly: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			default: ""
		},
		required: { type: Boolean },
		optional: {
			type: String,
			default: ""
		},
		inline: {
			type: String,
			default: ""
		},
		expand: { type: Boolean },
		rows: {
			type: Number,
			default: 3
		},
		medium: Boolean,
		large: Boolean,
		autofocus: Boolean,
		ariaLabel: {
			type: String,
			default: ""
		},
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
	emits: /*@__PURE__*/ Fa(["blur", "focus"], ["update:modelValue"]),
	setup(e, { expose: t, emit: n }) {
		let r = e, i = ro(e, "modelValue"), a = Aa(), o = n, s = yr("showError", !0), c = od()[r.hotkey.key], l = /* @__PURE__ */ N(null), u = J(() => r.error ? jd : r.icon), d = J(() => r.optional === "" ? Z("input.optional") : r.optional), f = J(() => r.requiredMessage ? r.requiredMessage : r.label ? Z("input.required_with_label", { label: r.label.toLowerCase() }) : Z("input.required")), p = fm(J(() => {
			let e = r.required ? { modelValue: { required: Mm.withMessage(() => f.value, Pm) } } : { modelValue: {} };
			return r.rules.forEach((t, n) => {
				e.modelValue[t.label || n] = Mm.withMessage(() => t.message || "", t.validator);
			}), e;
		}), { modelValue: i }), m = J(() => !!r.error || p.value.modelValue.$errors?.length > 0), h = J(() => `${r.id}-error`), g = ja(), _ = J(() => {
			let e = { ...g };
			return delete e["data-testid"], e;
		});
		function v(e) {
			o("blur", e), p.value.$touch(e);
		}
		return I(c, (e) => {
			e && r.hotkey && setTimeout(() => {
				l.value.focus();
			}, 100);
		}), t({ input: l }), (t, n) => (B(), V("div", {
			class: k(["input-container", {
				"has-error": m.value,
				"is-large": e.large
			}]),
			tabindex: "-1",
			onFocus: n[4] ||= (e) => t.$refs.input.focus()
		}, [
			e.label ? (B(), V("label", {
				key: 0,
				class: "input-label",
				for: e.id
			}, [U("span", ih, [G(A(e.label) + " ", 1), e.info || P(a).info ? (B(), H(Mf, {
				key: 0,
				location: "right",
				inverted: ""
			}, {
				content: F(() => [L(t.$slots, "info", {}, () => [G(A(e.info), 1)], !0)]),
				default: F(() => [U("span", ah, [W(Gd, {
					class: "info-icon",
					icon: P(eh)
				}, null, 8, ["icon"])])]),
				_: 3
			})) : K("", !0)]), e.required ? K("", !0) : (B(), V("span", oh, A(d.value), 1))], 8, rh)) : K("", !0),
			U("div", sh, [
				e.prependIcon ? (B(), V("div", ch, [W(Ud, { icon: e.prependIcon }, null, 8, ["icon"])])) : K("", !0),
				e.expand ? gr((B(), V("textarea", q({
					key: 1,
					id: e.id,
					ref_key: "input",
					ref: l,
					"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
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
					"aria-describedby": m.value ? h.value : null,
					rows: e.rows,
					autofocus: e.autofocus
				}, _.value, {
					onFocus: n[1] ||= (e) => o("focus", e),
					onBlur: v
				}), null, 16, lh)), [[Hl, i.value]]) : gr((B(), V("input", q({
					key: 2,
					id: e.id,
					ref_key: "input",
					ref: l,
					"onUpdate:modelValue": n[2] ||= (e) => i.value = e,
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
					"aria-describedby": m.value ? h.value : null,
					autofocus: e.autofocus
				}, _.value, {
					onFocus: n[3] ||= (e) => o("focus", e),
					onBlur: v
				}), null, 16, uh)), [[Zl, i.value]]),
				U("div", dh, [L(t.$slots, "inline", {}, () => [
					e.icon ? (B(), H(Ud, {
						key: 0,
						icon: u.value,
						class: k({ "has-error": m.value })
					}, null, 8, ["icon", "class"])) : K("", !0),
					e.inline ? (B(), V("span", fh, A(e.inline), 1)) : K("", !0),
					e.hotkey.label ? (B(), H(dd, {
						key: 2,
						hotkey: e.hotkey.label,
						variant: "secondary"
					}, null, 8, ["hotkey"])) : K("", !0)
				], !0)])
			]),
			m.value && P(s) ? (B(), V("span", {
				key: 1,
				id: h.value,
				class: "error",
				"aria-live": "assertive",
				role: "alert"
			}, A(P(p).modelValue?.$errors[0]?.$message ? P(p).modelValue.$errors[0].$message : e.error), 9, ph)) : K("", !0)
		], 34));
	}
}, [["__scopeId", "data-v-878992b1"]]), hh = { class: "amount-input-container" }, gh = ["disabled", "aria-label"], _h = [
	"id",
	"disabled",
	"aria-invalid",
	"aria-describedby"
], vh = ["disabled", "aria-label"], yh = ["id"], bh = /*#__PURE__*/ Y({
	__name: "PAmountInput",
	props: {
		id: {
			type: String,
			default: ""
		},
		modelValue: {
			type: Number,
			default: null
		},
		disabled: { type: Boolean },
		error: {
			type: String,
			default: ""
		},
		max: {
			type: Number,
			default: 1e4
		},
		small: Boolean,
		allowEmpty: Boolean,
		required: Boolean
	},
	emits: [
		"update:model-value",
		"blur",
		"focus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = J({
			get() {
				return !n.allowEmpty && !n.modelValue ? 1 : n.modelValue;
			},
			set(e) {
				l(e);
			}
		}), a = J(() => n.allowEmpty ? !i.value : i.value === 1), o = J(() => i.value >= n.max), s = J(() => !!n.error), c = J(() => `${n.id}-error`);
		function l(e) {
			if (n.allowEmpty && !e) {
				r("update:model-value", null);
				return;
			}
			e < 0 || Number.isNaN(e) || typeof e != "number" || !e ? (pn(i), r("update:model-value", 1)) : e > n.max ? (pn(i), r("update:model-value", n.max)) : r("update:model-value", e);
		}
		function u() {
			--i.value;
		}
		function d() {
			i.value += 1;
		}
		let f = fm(J(() => n.required ? { value: { required: Mm.withMessage(() => Z("input.required"), Pm) } } : { value: {} }).value, { value: i });
		return (t, n) => (B(), V("div", hh, [U("div", { class: k(["amount-input", { small: e.small }]) }, [
			U("button", {
				disabled: e.disabled || a.value,
				class: "minus",
				"aria-label": P(Z)("amount-input.minus_one"),
				onClick: ru(u, ["stop"])
			}, [e.small ? (B(), H(Au, {
				key: 1,
				icon: P(Eu)
			}, null, 8, ["icon"])) : (B(), H(Ud, {
				key: 0,
				icon: P(Fd)
			}, null, 8, ["icon"]))], 8, gh),
			gr(U("input", {
				id: e.id,
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				class: k([{ "has-error": e.error }, "input"]),
				disabled: e.disabled,
				"aria-label": "Amount input",
				"aria-invalid": s.value,
				"aria-describedby": s.value ? c.value : null,
				type: "number",
				onBlur: n[1] ||= (e) => {
					P(f).value?.$touch(e), r("blur", e);
				},
				onFocus: n[2] ||= (e) => r("focus", e)
			}, null, 42, _h), [[Hl, i.value]]),
			U("button", {
				disabled: e.disabled || o.value,
				class: "plus",
				"aria-label": P(Z)("amount-input.plus_one"),
				onClick: ru(d, ["stop"])
			}, [e.small ? (B(), H(Au, {
				key: 1,
				icon: P(Du)
			}, null, 8, ["icon"])) : (B(), H(Ud, {
				key: 0,
				icon: P(Rd)
			}, null, 8, ["icon"]))], 8, vh)
		], 2), e.error || P(f).value?.$errors[0]?.$message ? (B(), V("span", {
			key: 0,
			id: c.value,
			class: "error",
			"aria-live": "assertive",
			role: "alert"
		}, A(e.error || P(f).value.$errors[0].$message), 9, yh)) : K("", !0)]));
	}
}, [["__scopeId", "data-v-44d789fb"]]), xh = /*#__PURE__*/ Y({
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
		items: {
			type: Array,
			default: () => []
		},
		grid: Boolean
	},
	setup(e) {
		let t = /* @__PURE__ */ N(null);
		function n(e) {
			if (!["ArrowUp", "ArrowDown"].includes(e.key)) return;
			let n = Kd(t.value), r = n.indexOf(e.target);
			e.key === "ArrowDown" ? n[r + 1]?.focus() : n[r - 1]?.focus();
		}
		return (r, i) => (B(), V("div", {
			ref_key: "list",
			ref: t,
			class: k(["list", { grid: e.grid }]),
			style: he(`column-gap: ${e.gapRow}; row-gap: ${e.gapColumn};`),
			"data-testid": "list",
			onKeydown: n
		}, [(B(!0), V(R, null, ma(e.items, (e, t) => L(r.$slots, "default", {
			index: t,
			item: e
		}, void 0, !0, t)), 128)), L(r.$slots, "append-list", {}, void 0, !0)], 38));
	}
}, [["__scopeId", "data-v-6e791591"]]), Sh = [
	"data-testid",
	"tabindex",
	"aria-disabled"
], Ch = {
	key: 0,
	class: "prepend"
}, wh = { class: "content" }, Th = {
	key: 0,
	class: "title"
}, Eh = {
	key: 1,
	class: "subtitle"
}, Dh = { class: "text" }, Oh = /*#__PURE__*/ Y({
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
		return (t, n) => (B(), V("div", {
			class: k(["list-item", {
				clickable: e.clickable,
				active: e.active
			}]),
			"data-testid": e.clickable ? "clickable" : "list-item",
			tabindex: e.disabled ? -1 : 0,
			"aria-disabled": e.disabled
		}, [t.$slots.prepend ? (B(), V("div", Ch, [L(t.$slots, "prepend", {}, void 0, !0)])) : K("", !0), U("div", wh, [L(t.$slots, "content", {}, () => [
			e.title ? (B(), V("span", Th, A(e.title), 1)) : K("", !0),
			e.subtitle ? (B(), V("span", Eh, A(e.subtitle), 1)) : K("", !0),
			U("span", Dh, A(e.text), 1)
		], !0)])], 10, Sh));
	}
}, [["__scopeId", "data-v-9c2bcba7"]]), kh = [
	"id",
	"value",
	"disabled",
	"required",
	"tabindex",
	"indeterminate",
	"true-value",
	"false-value"
], Ah = {
	key: 0,
	class: "append"
}, jh = ["id"], Mh = /*#__PURE__*/ Y({
	__name: "PCheckbox",
	props: /*@__PURE__*/ Fa({
		id: {
			type: String,
			required: !0
		},
		value: {
			type: [
				String,
				Number,
				Boolean,
				Object
			],
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
			type: [
				String,
				Number,
				Boolean
			],
			default: !1
		},
		trueValue: {
			type: [
				String,
				Number,
				Boolean
			],
			default: !0
		}
	}, {
		modelValue: { type: [
			String,
			Number,
			Boolean,
			Array,
			Object
		] },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, n = ro(e, "modelValue"), r = fm(t.required ? { checked: { required: Mm.withMessage(Z("checkbox.required"), Im(!0)) } } : null, { checked: n }), i = J(() => `${t.id}-error`);
		return (t, a) => (B(), V("div", { class: k(["checkbox-container", {
			error: P(r).checked?.$errors[0]?.$message,
			large: e.large
		}]) }, [U("label", { class: k(["label", { disabled: e.disabled }]) }, [
			gr(U("input", q(t.$attrs, {
				id: e.id,
				"onUpdate:modelValue": a[0] ||= (e) => n.value = e,
				class: "checkbox",
				type: "checkbox",
				"data-testid": "checkbox",
				value: e.value,
				disabled: e.disabled,
				required: e.required,
				tabindex: t.$attrs.tabindex,
				indeterminate: e.indeterminate,
				"true-value": e.trueValue,
				"false-value": e.falseValue,
				onBlur: a[1] ||= (e) => P(r).checked?.$touch(e)
			}), null, 16, kh), [[Ul, n.value]]),
			L(t.$slots, "label", {}, () => [G(A(e.label), 1)], !0),
			t.$slots.append ? (B(), V("span", Ah, [L(t.$slots, "append", {}, void 0, !0)])) : K("", !0)
		], 2), P(r).checked?.$errors[0]?.$message ? (B(), V("span", {
			key: 0,
			id: i.value,
			role: "alert",
			"aria-live": "assertive",
			class: "error-message"
		}, A(P(r).checked.$errors[0].$message), 9, jh)) : K("", !0)], 2));
	}
}, [["__scopeId", "data-v-f61c3d17"]]);
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/returnValueFromDotNotationString.DXOU9ZFe.js
function Nh(e, t) {
	return t.split(".").reduce((e, t) => e[t] ? e[t] : e, e);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/layout/divider/PDivider.js
var Ph = /*#__PURE__*/ Y({
	__name: "PDivider",
	props: {
		thickness: {
			type: String,
			default: "0.0625rem"
		},
		vertical: Boolean,
		flex: Boolean
	},
	setup(e) {
		return Uc((t) => ({ aa3491c8: e.thickness })), (t, n) => (B(), V("hr", { class: k(["divider", {
			vertical: e.vertical,
			flex: e.flex
		}]) }, null, 2));
	}
}, [["__scopeId", "data-v-37c3f4ff"]]), Fh = {
	modelValue: {
		type: [
			String,
			Number,
			Array,
			Object
		],
		default: ""
	},
	items: {
		type: Array,
		default: () => []
	},
	itemText: {
		type: [
			String,
			Number,
			Function
		],
		default: ""
	},
	itemValue: {
		type: [String, Number],
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
	id: {
		type: String,
		required: !0
	},
	multiple: { type: Boolean },
	noItemsLabel: {
		type: String,
		default: ""
	},
	clearable: { type: Boolean },
	grouped: Boolean,
	groupText: {
		type: String,
		default: "title"
	},
	groupItems: {
		type: String,
		default: "items"
	},
	prependIcon: {
		type: [Function, Object],
		default: null
	},
	required: { type: Boolean },
	serverside: {
		type: Boolean,
		default: !1
	},
	large: Boolean,
	showDivider: Boolean,
	returnObject: Boolean,
	error: {
		type: String,
		default: ""
	},
	class: {
		type: [
			String,
			Object,
			Array
		],
		default: null
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	hideInput: {
		type: Boolean,
		default: !1
	},
	hideChevron: {
		type: Boolean,
		default: !1
	},
	offset: {
		type: Number,
		default: null
	},
	dataTestid: {
		type: String,
		default: "select"
	},
	requiredMessage: {
		type: String,
		default: ""
	}
}, Ih = ["data-testid", "tabindex"], Lh = ["for"], Rh = ["aria-invalid", "aria-describedby"], zh = { class: "label-inner" }, Bh = ["onClick"], Vh = {
	key: 2,
	class: "selected-item"
}, Hh = [
	"id",
	"placeholder",
	"disabled",
	"readonly",
	"value",
	"aria-invalid",
	"aria-describedby"
], Uh = { class: "action-buttons" }, Wh = ["aria-label", "disabled"], Gh = ["aria-label", "disabled"], Kh = ["id"], qh = {
	key: 0,
	class: "content-divider"
}, Jh = {
	key: 1,
	class: "no-results"
}, Yh = /*#__PURE__*/ Y({
	__name: "_BaseSelect",
	props: {
		...Fh,
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
	emits: [
		"update:modelValue",
		"update:inputValue",
		"update:isOpen",
		"update:focus"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = yr("showError", !0), o = yr("markFormDirty", null), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N(!1), u = /* @__PURE__ */ N(null), d = /* @__PURE__ */ N(null), f = /* @__PURE__ */ N(null), p = /* @__PURE__ */ N(null), m = /* @__PURE__ */ N(null), h = /* @__PURE__ */ N(() => {}), g = /* @__PURE__ */ N(() => {}), _ = /* @__PURE__ */ N(() => {});
		function v(e) {
			r("update:modelValue", e), o?.();
		}
		let y = J({
			get() {
				return i.multiple && !Array.isArray(i.modelValue) ? [] : i.modelValue;
			},
			set(e) {
				if (i.multiple) {
					v(e);
					return;
				}
				v(i.returnObject || !i.itemValue ? e : e?.[i.itemValue]);
			}
		}), b = J(() => i.requiredMessage ? i.requiredMessage : i.label ? Z("input.required_with_label", { label: i.label.toLowerCase() }) : Z("input.required")), x = fm(J(() => i.required ? { value: { required: Mm.withMessage(() => b.value, Pm) } } : { value: {} }).value, { value: y }), S = J(() => !i.required || i.required && !x.value?.$errors[0]), C = J(() => !!i.error || x.value?.$errors?.length > 0 || !S.value), w = J(() => Array.isArray(y.value) && y.value.length > 0), T = J(() => `${i.id}-error`);
		function E(e) {
			return i.itemValue ? e[i.itemValue] : e;
		}
		function D(e) {
			return i.multiple ? i.modelValue?.includes(E(e)) || !1 : y.value === E(e);
		}
		function ee(e) {
			let t = null;
			return (typeof e == "string" || typeof e == "number") && !i.itemText ? e : (typeof i.itemText == "string" && i.itemText?.includes(".") && (t = Nh(e, i.itemText)), !e || typeof i.itemText == "string" && (!i.itemText?.includes(".") && e[i.itemText] === void 0 || i.itemText?.includes(".") && t == null) ? "" : i.itemText && typeof i.itemText == "string" && !i.itemText.includes(".") ? e[i.itemText] : typeof i.itemText == "function" ? i.itemText(e) : t);
		}
		function te(e) {
			return e ? i.grouped ? ee(i.items.find((t) => t[i.groupItems].find((t) => E(t) === e))[i.groupItems].find((t) => E(t) === e)) : !i.returnObject && i.itemValue ? ee(i.items.find((t) => E(t) === e)) : ee(e) : "";
		}
		function ne(e) {
			y.value.splice(y.value.indexOf(e), 1), v(y.value);
		}
		function O(e) {
			if (!i.multiple) {
				y.value = e;
				return;
			}
			if (y.value.includes(E(e))) {
				y.value = y.value.filter((t, n) => n !== y.value.indexOf(E(e)));
				return;
			}
			y.value = [...y.value, E(e)];
		}
		function re(e) {
			let t = i.returnObject || !i.itemValue ? e[i.groupItems] : e[i.groupItems].map((e) => e[i.itemValue]), n = !1, r = !0;
			return t.forEach((e) => {
				y.value.includes(e) ? n = !0 : r = !1;
			}), r ? !0 : n ? "indeterminate" : !1;
		}
		function ie(e) {
			let t = i.returnObject || !i.itemValue ? e[i.groupItems] : e[i.groupItems].map((e) => e[i.itemValue]);
			if (re(e) === !0) {
				t.forEach((e) => {
					ne(e);
				});
				return;
			}
			v(Array.from(/* @__PURE__ */ new Set([...y.value, ...t])));
		}
		function ae(e) {
			s.value = e, r("update:isOpen", e);
		}
		function oe(e) {
			l.value = e, r("update:focus", e), !e && r("update:inputValue", null);
		}
		function se() {
			if (i.behavior === "manual") {
				g.value();
				return;
			}
			if (i.behavior === "focus" && s.value) {
				m.value?.close?.(), p.value?.blur?.();
				return;
			}
			i.behavior === "focus" && !s.value && requestAnimationFrame(() => {
				p.value?.focus?.();
			});
		}
		function ce(e, t) {
			p.value = e, i.behavior === "manual" && (h.value = t.setActivator, g.value = t.toggle, _.value = t.onKeydown);
		}
		async function le() {
			return f;
		}
		let ue = J(() => i.inputValue === null ? i.multiple ? null : te(y.value) : i.inputValue);
		return I(() => [l.value, c.value], () => {
			!l.value && !c.value && x.value.$touch();
		}), t({
			getSelectContent: le,
			getItemText: ee,
			setActivator: h,
			toggle: g,
			onKeydown: _,
			input: p
		}), (t, n) => (B(), H(jf, {
			ref_key: "floatingContainer",
			ref: m,
			"aria-label": "Options",
			transition: "expand",
			offset: i.offset === null ? 1 : i.offset,
			attach: u.value,
			behavior: e.behavior,
			"close-on-click": !i.multiple,
			"onUpdate:isOpen": ae,
			"onUpdate:focus": oe
		}, {
			activator: F((r) => [U("div", q(e.behavior === "click" ? {
				...t.$attrs,
				...t.disabled ? {} : r
			} : null, {
				"data-testid": i.dataTestid,
				"data-form-dirty-ignore": "",
				class: ["base-select", [
					i.class,
					e.behavior,
					{
						"is-open": s.value,
						disabled: i.disabled
					}
				]],
				tabindex: e.behavior === "click" && !t.disabled ? 0 : null,
				onFocus: n[5] ||= (e) => c.value = !0,
				onBlur: n[6] ||= (e) => c.value = !1
			}), [
				t.label ? (B(), V("label", {
					key: 0,
					class: "input-label",
					for: t.id
				}, [U("span", null, A(t.label), 1)], 8, Lh)) : K("", !0),
				U("div", {
					ref_key: "selectWrapper",
					ref: u,
					class: k(["wrapper", {
						focus: l.value || c.value,
						"has-error": C.value
					}]),
					"aria-invalid": C.value,
					"aria-describedby": C.value ? T.value : null
				}, [
					t.prependIcon ? (B(), H(Au, {
						key: 0,
						class: "prepend-icon",
						icon: t.prependIcon
					}, null, 8, ["icon"])) : K("", !0),
					w.value ? (B(), V("div", {
						key: 1,
						ref_key: "selectedItems",
						ref: d,
						class: "selected-items"
					}, [(B(!0), V(R, null, ma(y.value, (e, t) => (B(), H(up, {
						key: t,
						ref_for: !0,
						ref: "label",
						color: "gray"
					}, {
						default: F(() => [U("span", zh, [G(A(te(e)) + " ", 1), U("button", {
							class: "close-button",
							type: "button",
							tabindex: "-1",
							onClick: ru((t) => ne(e), ["stop", "prevent"])
						}, [W(Gd, { icon: P(nh) }, null, 8, ["icon"])], 8, Bh)])]),
						_: 2
					}, 1024))), 128))], 512)) : !t.multiple && e.behavior === "click" && y.value ? (B(), V("div", Vh, A(te(y.value)), 1)) : K("", !0),
					e.behavior === "click" ? gr((B(), V("div", {
						key: 3,
						class: "placeholder"
					}, A(i.placeholder), 513)), [[zc, !y.value || y.value.length === 0]]) : (B(), V("input", q({ key: 4 }, e.behavior === "focus" ? {
						...t.$attrs,
						...r
					} : t.$attrs, {
						id: i.id,
						ref: (e) => ce(e, r),
						placeholder: i.placeholder,
						disabled: i.disabled,
						readonly: i.readonly,
						value: ue.value,
						autocomplete: "off",
						"aria-invalid": C.value,
						"aria-describedby": C.value ? T.value : null,
						onInput: n[0] ||= (e) => t.$emit("update:inputValue", e.target.value),
						onBlur: n[1] ||= (e) => c.value = !1,
						onFocus: n[2] ||= (e) => c.value = !0
					}), null, 16, Hh)),
					U("div", Uh, [i.clearable && (!i.multiple && y.value || i.multiple && y.value?.length > 0) ? (B(), V("button", {
						key: 0,
						"aria-label": P(Z)("input.clear"),
						class: "clear-button",
						tabindex: "-1",
						type: "button",
						disabled: i.disabled,
						onClick: [n[3] ||= (e) => y.value = i.multiple ? [] : null, n[4] ||= ru(() => {}, ["stop"])]
					}, [W(Au, {
						icon: P(Ou),
						"aria-hidden": "true"
					}, null, 8, ["icon"])], 8, Wh)) : K("", !0), L(t.$slots, "inline", {}, () => [t.hideChevron ? K("", !0) : (B(), V("button", {
						key: 0,
						"aria-label": P(Z)("input.toggle"),
						tabindex: "-1",
						type: "button",
						"data-testid": "toggle-chevron",
						class: "toggle-chevron",
						disabled: i.disabled,
						onClick: se
					}, [W(Au, {
						class: k(["state-indicator", { "is-open": s.value }]),
						icon: P(Su)
					}, null, 8, ["icon", "class"])], 8, Gh))], !0)])
				], 10, Rh),
				C.value && P(a) ? (B(), V("div", {
					key: 1,
					id: T.value,
					role: "alert",
					"aria-live": "assertive",
					class: "error"
				}, A(P(x).value?.$errors[0]?.$message ? P(x).value.$errors[0].$message : i.error), 9, Kh)) : K("", !0)
			], 16, Ih)]),
			default: F(() => [t.showDivider ? (B(), V("hr", qh)) : K("", !0), U("div", {
				ref_key: "selectContent",
				ref: f,
				class: k(["select-content", {
					"remove-radius": t.showDivider,
					"show-shadow": !t.showDivider
				}])
			}, [
				L(t.$slots, "prepend-list", {}, void 0, !0),
				i.items.length > 0 ? (B(), H(xh, {
					key: 0,
					"gap-column": "0",
					"gap-row": "0",
					items: i.items,
					onKeydown: n[7] ||= ru(() => {}, ["prevent"])
				}, {
					default: F(({ item: e }) => [i.grouped ? (B(), V(R, { key: 0 }, [
						i.items.indexOf(e) === 0 ? K("", !0) : (B(), H(Ph, { key: 0 })),
						i.grouped ? (B(), H(Oh, {
							key: 1,
							title: e[i.groupText],
							clickable: i.multiple,
							disabled: !i.multiple,
							onClick: (t) => i.multiple && ie(e),
							onKeydown: au((t) => i.multiple && ie(e), ["enter"])
						}, ha({ _: 2 }, [i.multiple ? {
							name: "prepend",
							fn: F(() => [W(Mh, {
								id: `group-${i.items.indexOf(e)}-checkbox`,
								"model-value": typeof re(e) == "boolean" && re(e),
								indeterminate: re(e) === "indeterminate",
								tabindex: "-1"
							}, null, 8, [
								"id",
								"model-value",
								"indeterminate"
							])]),
							key: "0"
						} : void 0]), 1032, [
							"title",
							"clickable",
							"disabled",
							"onClick",
							"onKeydown"
						])) : K("", !0),
						(B(!0), V(R, null, ma(e[i.groupItems], (n, r) => (B(), H(Oh, {
							key: r,
							clickable: "",
							active: D(n),
							text: ee(n),
							onClick: (e) => O(n),
							onKeydown: au((e) => O(n), ["enter"])
						}, ha({
							content: F(() => [L(t.$slots, "option", {
								selected: D(n),
								option: n
							}, void 0, !0)]),
							_: 2
						}, [i.multiple ? {
							name: "prepend",
							fn: F(() => [W(Mh, {
								id: `item-${e[i.groupItems].indexOf(n)}-checkbox`,
								"model-value": D(n),
								tabindex: "-1"
							}, null, 8, ["id", "model-value"])]),
							key: "0"
						} : void 0]), 1032, [
							"active",
							"text",
							"onClick",
							"onKeydown"
						]))), 128))
					], 64)) : ee(e) || t.$slots.option ? (B(), H(Oh, {
						key: 1,
						clickable: "",
						active: D(e),
						text: ee(e),
						onClick: (t) => O(e),
						onKeydown: au((t) => O(e), ["enter"])
					}, ha({
						content: F(() => [L(t.$slots, "option", {
							selected: D(e),
							option: e
						}, void 0, !0)]),
						_: 2
					}, [i.multiple ? {
						name: "prepend",
						fn: F(() => [W(Mh, {
							id: `item-${i.items.indexOf(e)}-checkbox`,
							"model-value": D(e),
							tabindex: "-1"
						}, null, 8, ["id", "model-value"])]),
						key: "0"
					} : void 0]), 1032, [
						"active",
						"text",
						"onClick",
						"onKeydown"
					])) : K("", !0)]),
					_: 3
				}, 8, ["items"])) : i.hideNoItemsLabel ? K("", !0) : (B(), V("div", Jh, A(i.noItemsLabel || P(Z)("input.no_results")), 1)),
				L(t.$slots, "append-list", {}, void 0, !0)
			], 2)]),
			_: 3
		}, 8, [
			"offset",
			"attach",
			"behavior",
			"close-on-click"
		]));
	}
}, [["__scopeId", "data-v-e448bd71"]]), Xh = /*#__PURE__*/ Y({
	__name: "PCombobox",
	props: {
		...Fh,
		loading: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"search",
		"intersect"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = J(() => {
			let { loading: e, ...t } = r;
			return t;
		}), o = J({
			get() {
				return r.multiple && !Array.isArray(r.modelValue) ? [r.modelValue] : r.modelValue;
			},
			set(e) {
				i("update:modelValue", e);
			}
		}), s = /* @__PURE__ */ N(null), c = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(null), u = /* @__PURE__ */ N(null), d = /* @__PURE__ */ N(null), f = /* @__PURE__ */ N(!1), p = /* @__PURE__ */ N(!1);
		function m() {
			c.value = null, o.value = null, s.value?.input?.blur?.();
		}
		let h = J(() => !c.value || r.serverside ? r.items : r.itemText ? r.grouped ? r.items.filter((e) => e[r.groupItems].some((e) => s.value.getItemText(e).toLowerCase().replace(/\s+/g, "").includes(c.value.toLowerCase().replace(/\s+/g, "")))).map((e) => {
			let t = e[r.groupItems].filter((e) => s.value.getItemText(e).toLowerCase().replace(/\s+/g, "").includes(c.value.toLowerCase().replace(/\s+/g, "")));
			return t.length ? {
				...e,
				[r.groupItems]: t
			} : null;
		}) : r.items.filter((e) => s.value.getItemText(e).toLowerCase().replace(/\s+/g, "").includes(c.value.toLowerCase().replace(/\s+/g, ""))) : r.items.filter((e) => e.toLowerCase().replace(/\s+/g, "").includes(c.value.toLowerCase().replace(/\s+/g, ""))));
		async function g() {
			let e = (await s.value.getSelectContent()).value;
			e?.scrollTo(0, e.scrollHeight);
		}
		function _(e, t = 4) {
			return e ? e.scrollTop + e.clientHeight >= e.scrollHeight - t : !1;
		}
		async function v(e) {
			if (f.value = e, e) {
				await Qn(), await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame);
				let e = (await s.value.getSelectContent()).value;
				u.value = new IntersectionObserver((t) => {
					t[0].isIntersecting && !p.value && !r.loading && (i("intersect"), _(e) && g());
				}, {
					root: e,
					threshold: 0
				}), u.value.observe(l.value);
				return;
			}
			u.value?.disconnect(), u.value = null;
		}
		function y(e) {
			if (!r.serverside) {
				i("search", e);
				return;
			}
			e !== null && (p.value = !0, clearTimeout(d.value), d.value = setTimeout(() => {
				f.value && i("search", e), p.value = !1;
			}, 500));
		}
		return t({
			reset: m,
			select: s,
			scrollToBottom: g
		}), (t, n) => (B(), H(Yh, q({
			id: t.id,
			ref_key: "select",
			ref: s,
			"input-value": c.value,
			"onUpdate:inputValue": n[1] ||= (e) => c.value = e
		}, a.value, {
			behavior: "focus",
			"hide-no-items-label": e.loading || p.value,
			items: p.value ? [] : h.value,
			"onUpdate:inputValue": n[2] ||= (e) => y(e),
			"onUpdate:focus": n[3] ||= (e) => e && i("search", ""),
			"onUpdate:isOpen": n[4] ||= (e) => v(e),
			"onUpdate:modelValue": n[5] ||= (e) => o.value = e
		}), {
			inline: F(() => [L(t.$slots, "inline", {}, void 0, !0)]),
			option: F(({ option: e, selected: n }) => [L(t.$slots, "option", {
				selected: n,
				option: e
			}, void 0, !0)]),
			"append-list": F(() => [U("div", {
				ref_key: "intersect",
				ref: l,
				class: "intersect"
			}, [e.loading || p.value ? (B(), H(fd, {
				key: 0,
				class: "search-loader",
				onClick: n[0] ||= ru(() => {}, ["prevent"])
			})) : K("", !0)], 512)]),
			_: 3
		}, 16, [
			"id",
			"input-value",
			"hide-no-items-label",
			"items"
		]));
	}
}, [["__scopeId", "data-v-d9041eb6"]]);
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/outline.DjmFaRuY.js
function Zh(e, t) {
	return B(), V("svg", {
		width: "24px",
		height: "24px",
		viewBox: "0 0 24 24",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink"
	}, [U("g", {
		id: "Icon/Outline/MaximizeScreen",
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd",
		"stroke-linecap": "round",
		"stroke-linejoin": "round"
	}, [U("path", {
		d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M14.3478261,7.13043478 L17.2826087,7.13043478 C17.6050138,7.13402532 17.8653502,7.35579341 17.8695652,7.63043478 L17.8695652,10.1304348 M17.6973913,7.3026087 L13.3695652,11.6304348",
		id: "Combined-Shape",
		stroke: "currentColor",
		"stroke-width": "1.5"
	})])]);
}
function Qh(e, t) {
	return B(), V("svg", {
		width: "24px",
		height: "24px",
		viewBox: "0 0 24 24",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink"
	}, [U("g", {
		id: "Icon/Outline/MinimizeScreen",
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd",
		"stroke-linecap": "round",
		"stroke-linejoin": "round"
	}, [U("path", {
		d: "M13.6086957,20.0869565 L19.826087,20.0869565 C20.4744212,20.0869565 21,19.5613777 21,18.9130435 L21,5.17391304 C21,4.52557877 20.4744212,4 19.826087,4 L4.08695652,4 C3.43862225,4 2.91304348,4.52557877 2.91304348,5.17391304 L2.91304348,11.3913043 M2.91,14.09 L10.6242857,14.09 L10.6242857,20.09 L2.91,20.09 Z M16.8913043,11.6304348 L13.9565217,11.6304348 C13.6341166,11.6268442 13.3737802,11.4050762 13.3695652,11.1304348 L13.3695652,8.63043478 M13.5417391,11.4582609 L17.8695652,7.13043478",
		id: "Combined-Shape",
		stroke: "currentColor",
		"stroke-width": "1.5"
	})])]);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/containers/modals/modal/PModal.js
var $h = ["data-testid"], eg = {
	key: 0,
	class: "actions"
}, tg = {
	class: "inner",
	tabindex: "-1"
}, ng = {
	key: 0,
	class: "minimized-actions"
}, rg = /*#__PURE__*/ Y({
	__name: "PModal",
	props: /*@__PURE__*/ Fa({
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
		modelValue: { type: Boolean },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ Fa([
		"minimize",
		"update:modelValue",
		"click:primary",
		"click:secondary",
		"close"
	], ["update:modelValue"]),
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = ro(e, "modelValue"), o = si("modal"), s = si("modal-content"), c = si("footer"), l = si("header"), u = /* @__PURE__ */ N(!1), d = /* @__PURE__ */ N(!1), f = /* @__PURE__ */ N(!1), p = /* @__PURE__ */ N(!1), m = /* @__PURE__ */ N(!1), h = /* @__PURE__ */ N(!1), g = /* @__PURE__ */ N(!1), _ = /* @__PURE__ */ N(null), v = /* @__PURE__ */ N(null), y = null;
		function b() {
			if (!s.value) return;
			f.value = s.value.scrollTop > 0;
			let e = s.value.scrollHeight - s.value.clientHeight;
			p.value = s.value.scrollTop < e;
		}
		function x(e) {
			if (clearTimeout(_.value), y &&= (cancelAnimationFrame(y), null), e) {
				h.value = !1, m.value = !0, g.value = !1, Qn(() => {
					let e = o.value;
					e && (e.open || e.showModal(), y = requestAnimationFrame(() => {
						g.value = !0, y = null;
					}), b());
				});
				return;
			}
			m.value && (h.value = !0, g.value = !1, _.value = setTimeout(() => {
				o.value?.close();
			}, 500));
		}
		function S(e) {
			i("minimize", e), u.value = e, d.value = !e;
		}
		function C(e) {
			if (r.persistent || r.fullscreen || e.target !== e.currentTarget) {
				r.persistent && e.target.isEqualNode(e.currentTarget) && (v.value && clearTimeout(v.value), o.value.classList.add("persistent-animation"), v.value = setTimeout(() => {
					o.value?.classList.remove("persistent-animation");
				}, 300));
				return;
			}
			i("close"), a.value = !1;
		}
		function w(e) {
			r.persistent && e.preventDefault();
		}
		function T() {
			_.value &&= (clearTimeout(_.value), null), a.value &&= !1, h.value = !1, m.value = !1, g.value = !1;
		}
		return I(() => !!a.value, (e) => {
			x(e);
		}, { immediate: !0 }), I(() => o.value, (e, t, n) => {
			e && (e.addEventListener("cancel", w), n(() => {
				e.removeEventListener("cancel", w);
			}));
		}, { immediate: !0 }), ta(() => {
			_.value && clearTimeout(_.value), v.value && clearTimeout(v.value), y && cancelAnimationFrame(y);
		}), t({
			showModal: () => a.value = !0,
			close: () => a.value = !1
		}), (t, n) => m.value ? (B(), V("dialog", {
			key: 0,
			ref: "modal",
			class: k(["modal", [g.value ? "open" : "closed", {
				fullscreen: e.fullscreen,
				minimized: u.value,
				maximized: d.value,
				persistent: e.persistent
			}]]),
			"data-testid": e.dataTestid,
			style: he({ "max-width": e.width }),
			onClose: T,
			onClick: C
		}, [e.fullscreen && !u.value ? (B(), V("div", eg, [e.showMinimize ? (B(), H(X, {
			key: 0,
			variant: "text",
			icon: P(Qh),
			class: "minimize",
			onClick: n[0] ||= (e) => S(!0)
		}, {
			default: F(() => [G(A(P(Z)("modal.minimize")), 1)]),
			_: 1
		}, 8, ["icon"])) : K("", !0), e.hideCloseButton ? K("", !0) : (B(), H(X, {
			key: 1,
			variant: "text",
			icon: P(Vd),
			class: "close",
			onClick: n[1] ||= (e) => a.value = !1
		}, {
			default: F(() => [G(A(P(Z)("modal.close")), 1)]),
			_: 1
		}, 8, ["icon"]))])) : K("", !0), U("div", tg, [
			e.hideHeader ? K("", !0) : (B(), V("header", {
				key: 0,
				ref: "header",
				class: k(["header", { "header-shadow": f.value }]),
				"data-testid": "modal-header"
			}, [L(t.$slots, "header", be(xs({ minimize: u.value })), () => [e.title ? (B(), H(dp, {
				key: 0,
				class: "title",
				level: "h2"
			}, {
				default: F(() => [G(A(e.title), 1)]),
				_: 1
			})) : K("", !0), !e.fullscreen && !e.hideCloseButton ? (B(), H(X, {
				key: 1,
				icon: P(Vd),
				variant: "text",
				class: "close",
				"aria-label": P(Z)("modal.close"),
				onClick: n[2] ||= (e) => {
					a.value = !1, i("close");
				}
			}, null, 8, ["icon", "aria-label"])) : K("", !0)]), u.value && e.fullscreen ? (B(), V("div", ng, [W(X, {
				"data-testid": "open-button",
				icon: P(Zh),
				onClick: n[3] ||= (e) => S(!1)
			}, {
				default: F(() => [G(A(P(Z)("modal.open")), 1)]),
				_: 1
			}, 8, ["icon"]), W(X, {
				"data-testid": "close-button",
				icon: P(Vd),
				variant: "secondary",
				onClick: n[4] ||= (e) => {
					a.value = !1, i("close");
				}
			}, {
				default: F(() => [G(A(P(Z)("modal.close")), 1)]),
				_: 1
			}, 8, ["icon"])])) : K("", !0)], 2)),
			u.value ? K("", !0) : (B(), V("div", {
				key: 1,
				ref: "modal-content",
				class: k(["content", { "pt-8!": e.hideHeader }]),
				tabindex: "0",
				style: he(e.fullscreen ? null : `max-height: calc(100vh - ${l.value?.clientHeight + c.value?.clientHeight}px - 64px); `),
				onScroll: b
			}, [e.loading ? (B(), V(R, { key: 0 }, [t.$slots.loading ? L(t.$slots, "loading", {}, void 0, void 0, 0) : (B(), H(fd, { key: 1 }))], 64)) : L(t.$slots, "default", {}, void 0, void 0, 1)], 38)),
			!e.fullscreen && !e.hideFooter || !u.value && e.fullscreen && t.$slots.footer ? (B(), V("footer", {
				key: 2,
				ref: "footer",
				class: k(["footer", { "footer-shadow": !e.fullscreen && p.value }])
			}, [L(t.$slots, "footer", {}, () => [e.fullscreen ? K("", !0) : (B(), V(R, { key: 0 }, [W(X, {
				type: "button",
				variant: "secondary",
				"data-testid": "secondary-button",
				onClick: n[5] ||= (e) => i("click:secondary")
			}, {
				default: F(() => [G(A(e.secondaryButtonText ? e.secondaryButtonText : P(Z)("modal.cancel")), 1)]),
				_: 1
			}), W(X, {
				type: "button",
				"data-testid": "primary-button",
				onClick: n[6] ||= (e) => i("click:primary")
			}, {
				default: F(() => [G(A(e.primaryButtonText ? e.primaryButtonText : P(Z)("modal.save")), 1)]),
				_: 1
			})], 64))])], 2)) : K("", !0)
		])], 46, $h)) : K("", !0);
	}
}, [["__scopeId", "data-v-10182b3a"]]), ig = { class: "message" }, ag = /*#__PURE__*/ Y({
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
		let n = t, r = e, i = J(() => r.icon ? r.icon : r.isDanger ? jd : Nd);
		return (t, r) => (B(), H(rg, {
			"model-value": !0,
			class: "confirm-modal",
			"onUpdate:modelValue": r[2] ||= (e) => !e && n("cancel")
		}, {
			footer: F(() => [W(X, {
				variant: "secondary",
				"data-testid": "secondary-button",
				onClick: r[0] ||= (e) => n("cancel")
			}, {
				default: F(() => [G(A(e.secondaryButtonText ? e.secondaryButtonText : P(Z)("confirm-modal.cancel")), 1)]),
				_: 1
			}), W(X, {
				variant: e.isDanger ? "danger" : "primary",
				"data-testid": "primary-button",
				onClick: r[1] ||= (e) => n("confirm")
			}, {
				default: F(() => [e.primaryButtonText ? (B(), V(R, { key: 0 }, [G(A(e.primaryButtonText), 1)], 64)) : (B(), V(R, { key: 1 }, [G(A(e.type === "delete" ? P(Z)("confirm-modal.delete") : P(Z)("confirm-modal.confirm")), 1)], 64))]),
				_: 1
			}, 8, ["variant"])]),
			default: F(() => [
				U("div", { class: k(["indicator-icon", {
					danger: e.isDanger,
					info: !e.isDanger
				}]) }, [W(Ud, { icon: i.value }, null, 8, ["icon"])], 2),
				W(dp, {
					level: "h2",
					class: "title"
				}, {
					default: F(() => [G(A(e.title || P(Z)("confirm-modal.confirm")), 1)]),
					_: 1
				}),
				U("p", ig, A(e.message || P(Z)("confirm-modal.confirm_message")), 1)
			]),
			_: 1
		}));
	}
}, [["__scopeId", "data-v-9f54edc5"]]);
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/useForm.composable.DmbWwAN0.js
function og() {
	let e = Ms(), t = null, n = null, r = null, i = 0, a = () => n?.isConnected ? n : (n = document.createElement("div"), n.setAttribute("data-testid", "confirm-modal-root"), document.body.appendChild(n), n), o = () => {
		let e = i;
		r = requestAnimationFrame(() => {
			r = null, !(!n || e !== i) && (du(null, n), n.remove(), n = null);
		});
	};
	ta(() => {
		r && cancelAnimationFrame(r), o();
	});
	let s = () => {
		o(), t(!0);
	}, c = () => {
		o(), t(!1);
	};
	return { reveal: (n, r, o = "confirm", l = !0, u = "", d = "", f = null) => {
		let p = null;
		return i += 1, p = typeof n == "object" ? Qs(ag, {
			title: n.title,
			message: n.message || "",
			type: n.type || "confirm",
			isDanger: n.isDanger === void 0 || n.isDanger,
			primaryButtonText: n.primaryButtonText || "",
			secondaryButtonText: n.secondaryButtonText || "",
			icon: n.icon || null,
			onCancel: c,
			onConfirm: s
		}) : Qs(ag, {
			title: n,
			message: r,
			type: o,
			isDanger: l,
			primaryButtonText: u,
			secondaryButtonText: d,
			icon: f,
			onCancel: c,
			onConfirm: s
		}), p.key = Math.random(), p.appContext = e.appContext, du(p, a()), new Promise((e) => {
			t = e;
		});
	} };
}
var sg = "[data-form-dirty-ignore]", cg = /* @__PURE__ */ new Map(), lg = /* @__PURE__ */ new WeakMap(), ug = 0, dg = 0, fg = !1, pg = null, mg = /* @__PURE__ */ N(null), hg = /* @__PURE__ */ N([]), gg = /* @__PURE__ */ N(null), _g = /* @__PURE__ */ N(!1), vg = J(() => _g.value);
function yg() {
	return typeof window > "u" ? null : window;
}
function bg() {
	return typeof document > "u" ? null : document;
}
function xg(e) {
	return typeof e == "function" ? e() : e;
}
function Sg(e) {
	return lg.has(e) || (lg.set(e, ug), ug += 1), lg.get(e);
}
function Cg(e, t) {
	return `${e}:${Sg(t)}`;
}
function wg(e) {
	vg.value && e.preventDefault();
}
function Tg() {
	fg || !dg || (yg()?.addEventListener("beforeunload", wg), fg = !0);
}
function Eg() {
	!fg || dg || (yg()?.removeEventListener("beforeunload", wg), fg = !1);
}
function Dg(e, t) {
	mg.value?.(e, t);
}
function Og({ eventName: e = "", target: t = bg, shouldHandle: n = () => !0, getNavigationData: r = (e) => e.detail, continueNavigation: i = Dg } = {}) {
	return {
		eventName: e,
		target: t,
		shouldHandle: n,
		getNavigationData: r,
		continueNavigation: i
	};
}
hg.value = [...Object.freeze([Og()])];
function kg() {
	return hg.value.map((e) => Og(e));
}
function Ag() {
	cg.forEach((e) => {
		e.target.removeEventListener(e.eventName, e.listener);
	}), cg.clear();
}
async function jg() {
	return gg.value({
		title: Z("form.unsaved_changes.title"),
		message: Z("form.unsaved_changes.message"),
		primaryButtonText: Z("form.unsaved_changes.leave"),
		secondaryButtonText: Z("form.unsaved_changes.stay"),
		type: "info"
	});
}
function Mg() {
	_g.value = !1;
}
async function Ng(e, t) {
	let n = cg.get(e)?.guards.find((e) => e.shouldHandle(t));
	if (!(!vg.value || !n) && (t.preventDefault(), !pg)) {
		pg = jg();
		try {
			let e = await pg, r = n.getNavigationData(t);
			if (!e) return;
			Mg(), n.continueNavigation(r, t);
		} finally {
			pg = null;
		}
	}
}
function Pg() {
	if (!dg) {
		Ag();
		return;
	}
	let e = /* @__PURE__ */ new Map();
	kg().forEach((t) => {
		let n = xg(t.target);
		if (!n?.addEventListener || !t.eventName) return;
		let r = Cg(t.eventName, n), i = e.get(r) ?? {
			eventName: t.eventName,
			target: n,
			guards: []
		};
		i.guards.push(t), e.set(r, i);
	}), cg.forEach((t, n) => {
		e.has(n) || (t.target.removeEventListener(t.eventName, t.listener), cg.delete(n));
	}), e.forEach((e, t) => {
		let n = cg.get(t);
		if (n) {
			n.guards = e.guards;
			return;
		}
		let r = (e) => Ng(t, e);
		e.listener = r, e.target.addEventListener(e.eventName, r), cg.set(t, e);
	});
}
I(hg, () => {
	Pg();
});
function Fg() {
	_g.value = !0;
}
function Ig(e) {
	return Array.from(e.currentTarget?.querySelectorAll?.(sg) ?? []).some((t) => t.contains(e.target));
}
function Lg(e) {
	Ig(e) || Fg();
}
function Rg() {
	let { reveal: e } = og();
	return gg.value = e, Zi(() => {
		dg += 1, Tg(), Pg();
	}), ta(() => {
		dg = Math.max(0, dg - 1), dg || (Mg(), gg.value = null), Eg(), Pg();
	}), {
		isDirty: vg,
		markDirty: Fg,
		markDirtyFromNativeEvent: Lg,
		resetDirtyState: Mg
	};
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/inputs/form/PForm.js
var zg = {
	__name: "PForm",
	props: { guard: {
		type: Boolean,
		default: !1
	} },
	setup(e, { expose: t }) {
		let n = e, r = fm(), { isDirty: i, markDirty: a, markDirtyFromNativeEvent: o } = Rg(), s = yr("enableFormNavGuard", !1), c = J(() => n.guard || s);
		function l() {
			return r.value.$validate();
		}
		function u() {
			return r.value.$reset();
		}
		return vr("markFormDirty", c.value ? a : () => {}), t({
			validate: l,
			resetValidation: u,
			isDirty: i
		}), (e, t) => (B(), V("form", {
			novalidate: "",
			onChangeCapture: t[0] ||= (e) => c.value ? P(o)(e) : null,
			onInputCapture: t[1] ||= (e) => c.value ? P(o)(e) : null,
			onSubmit: t[2] ||= (e) => {
				e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
			}
		}, [L(e.$slots, "default")], 32));
	}
}, Bg = ["data-testid"], Vg = {
	key: 0,
	class: "icon"
}, Hg = { class: "content" }, Ug = { class: "title" }, Wg = {
	key: 0,
	class: "description"
}, Gg = /*#__PURE__*/ Y({
	__name: "PAlert",
	props: {
		type: {
			type: String,
			required: !0
		},
		icon: {
			type: Function,
			default: null
		},
		title: {
			type: String,
			required: !0
		},
		description: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		let t = e, n = J(() => t.icon ? t.icon : t.type === "error" ? Cu : t.type === "warning" ? wu : t.type === "success" ? xu : t.type === "info" ? Tu : null);
		return (t, r) => (B(), V("div", {
			class: k(["alert", e.type]),
			"data-testid": `alert-${e.type}`
		}, [L(t.$slots, "default", {}, () => [n.value ? (B(), V("div", Vg, [W(Au, { icon: n.value }, null, 8, ["icon"])])) : K("", !0), U("div", Hg, [U("span", Ug, A(e.title), 1), e.description ? (B(), V("span", Wg, A(e.description), 1)) : K("", !0)])], !0)], 10, Bg));
	}
}, [["__scopeId", "data-v-4165b473"]]), Kg = class {
	constructor(e = {}) {
		this.code = e.code, this.overwrites = {
			title: e.overwrites?.title ?? null,
			description: e.overwrites?.description ?? null,
			hide: e.overwrites?.hide ?? !1,
			selected: e.overwrites?.selected ?? null,
			value: e.overwrites?.value ?? null,
			options: Array.isArray(e.overwrites?.options) ? e.overwrites.options.map((e) => ({ ...e })) : []
		};
	}
}, qg = { class: "actions" }, Jg = /*#__PURE__*/ Y({
	__name: "PEditorDrawer",
	props: /*@__PURE__*/ Fa({ productCode: {
		type: String,
		default: ""
	} }, {
		modelValue: { type: Boolean },
		modelModifiers: {},
		step: {
			type: Object,
			required: !0
		},
		stepModifiers: {},
		overwrites: {
			type: [Object, null],
			required: !0
		},
		overwritesModifiers: {}
	}),
	emits: [
		"update:modelValue",
		"update:step",
		"update:overwrites"
	],
	setup(e) {
		let t = e, n = ro(e, "modelValue"), r = ro(e, "step"), i = ro(e, "overwrites"), a = /* @__PURE__ */ un(new Kg()), o = si("editor-form");
		function s(e = []) {
			return e.map((e) => ({
				...e,
				overwrites: e.overwrites ? { ...e.overwrites } : {}
			}));
		}
		function c(e = {}) {
			return {
				code: e.code ?? null,
				overwrites: {
					title: e.overwrites?.title ?? null,
					description: e.overwrites?.description ?? null,
					hide: e.overwrites?.hide ?? !1,
					selected: e.overwrites?.selected ?? null,
					value: e.overwrites?.value ?? null,
					options: s(e.overwrites?.options ?? [])
				}
			};
		}
		function l() {
			let e = (i.value?.overwrites?.steps ?? []).find((e) => e.code === r.value.code), t = e ? c(e) : null;
			if (t) return new Kg(t);
			let n = r.value.options?.map((e) => ({
				code: e.code,
				overwrites: {}
			})) ?? [];
			return new Kg({
				code: r.value.code,
				overwrites: { options: n }
			});
		}
		function u(e) {
			let n = i.value && typeof i.value == "object" ? i.value : {}, o = Array.isArray(n.overwrites?.steps) ? n.overwrites.steps.map((e) => c(e)) : [], s = c({
				code: e.code ?? r.value?.code,
				overwrites: e.overwrites
			}), l = o.findIndex((e) => e.code === s.code);
			l === -1 ? o.push(s) : o.splice(l, 1, s), i.value = {
				code: n.code ?? t.productCode ?? null,
				overwrites: {
					...n.overwrites,
					steps: o
				}
			}, a.value = new Kg(s);
		}
		function d(e) {
			let t = new Kg({
				code: a.value.code ?? r.value?.code,
				overwrites: {
					...a.value.overwrites,
					options: s(a.value.overwrites.options)
				}
			});
			e(t), u(t);
		}
		I([() => r.value, () => i.value], () => {
			a.value = l();
		}, {
			immediate: !0,
			deep: !0
		});
		function f(e, t) {
			d((n) => {
				n.overwrites[e] = t;
			});
		}
		function p(e, t) {
			d((n) => {
				let r = n.overwrites.options, i = !1;
				if (n.overwrites.options = r.map((n) => {
					if (n.code !== e) return n;
					i = !0;
					let r = { ...n.overwrites };
					return t(r), {
						...n,
						overwrites: r
					};
				}), !i) {
					let r = {};
					t(r), n.overwrites.options = [...n.overwrites.options, {
						code: e,
						overwrites: r
					}];
				}
			});
		}
		function m(e, t, n) {
			p(e, (e) => {
				e[t] = n;
			});
		}
		function h(e) {
			if (e == null || e === "") return null;
			let t = typeof e == "number" ? e : Number(e);
			return Number.isFinite(t) ? t : null;
		}
		function g(e, t) {
			let n = h(t);
			p(e, (e) => {
				if (n === null) {
					delete e.value;
					return;
				}
				e.value = n;
			});
		}
		function _(e, t) {
			return (a.value.overwrites?.options?.find((t) => t.code === e))?.overwrites?.[t] ?? null;
		}
		let v = /* @__PURE__ */ N([]), y = J({
			get: () => ({
				width: _("width", "value"),
				height: _("height", "value")
			}),
			set: (e) => {
				g("width", e.width), g("height", e.height);
			}
		}), b = J({
			get: () => _("amount", "value") ?? 1,
			set: (e) => {
				d((t) => {
					t.overwrites.options = t.overwrites.options.map((t) => t.code === "amount" ? {
						...t,
						overwrites: {
							...t.overwrites,
							value: e
						}
					} : t);
				});
			}
		}), x = J(() => {
			let e = r.value?.options?.find((e) => e.code === "width"), t = r.value?.options?.find((e) => e.code === "height"), n = e && e.reversible && t && t.reversible, i = e?.min, a = t?.min;
			return n ? Math.min(i, a) : {
				width: i,
				height: a
			};
		}), S = J(() => {
			let e = r.value?.options?.find((e) => e.code === "width"), t = r.value?.options?.find((e) => e.code === "height"), n = e && e.reversible && t && t.reversible, i = e?.max, a = t?.max;
			return n ? Math.max(i, a) : {
				width: i,
				height: a
			};
		}), C = fm(J(() => ({
			width: {
				minValue: Mm.withMessage(Z("step.min_value", { minValue: typeof x.value == "number" ? x.value : x.value.width }), Rm(typeof x.value == "number" ? x.value : x.value.width)),
				maxValue: Mm.withMessage(Z("step.max_value", { maxValue: typeof S.value == "number" ? S.value : S.value.width }), Bm(typeof S.value == "number" ? S.value : S.value.width))
			},
			height: {
				minValue: Mm.withMessage(Z("step.min_value", { minValue: typeof x.value == "number" ? x.value : x.value.height }), Rm(typeof x.value == "number" ? x.value : x.value.height)),
				maxValue: Mm.withMessage(Z("step.max_value", { maxValue: typeof S.value == "number" ? S.value : S.value.height }), Bm(typeof S.value == "number" ? S.value : S.value.height))
			}
		})), y), w = J(() => r.value?.options?.some((e) => [
			"width",
			"height",
			"amount"
		].includes(e.code))), T = J(() => r.value.options?.find((e) => e.code === a.value.overwrites.selected));
		function E() {
			a.value = l(), u(a.value), C.value.$reset();
		}
		async function D() {
			await o.value.validate() && (n.value = !1);
		}
		return (e, t) => (B(), H(Wm, {
			modelValue: n.value,
			"onUpdate:modelValue": t[8] ||= (e) => n.value = e,
			position: "right",
			title: P(Z)("editor.editing_step", { step: r.value?.title }),
			persistent: P(C).$errors.length > 0
		}, {
			default: F(() => [
				P(C).$errors.length ? (B(), H(Gg, {
					key: 0,
					title: P(Z)("editor.editor_alert.title"),
					description: P(Z)("editor.editor_alert.description"),
					type: "error"
				}, null, 8, ["title", "description"])) : K("", !0),
				W(zg, { ref: "editor-form" }, {
					default: F(() => [W($m, null, {
						default: F(() => [
							W(Zm, null, {
								title: F(() => [G(A(P(Z)("editor.hide_step.title")), 1)]),
								subtitle: F(() => [G(A(P(Z)("editor.hide_step.description")), 1)]),
								default: F(() => [W(Op, {
									"model-value": !!a.value.overwrites.hide,
									"onUpdate:modelValue": t[0] ||= (e) => f("hide", e)
								}, null, 8, ["model-value"])]),
								_: 1
							}),
							w.value ? K("", !0) : (B(), V(R, { key: 0 }, [
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.default_option.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.default_option.description")), 1)]),
									default: F(() => [W(Xh, {
										id: "default-value-combo",
										"model-value": a.value.overwrites.selected,
										items: r.value.options,
										"item-text": "title",
										"item-value": "code",
										placeholder: P(Z)("editor.default_option.label"),
										required: a.value.overwrites.hide,
										"onUpdate:modelValue": t[1] ||= (e) => f("selected", e)
									}, null, 8, [
										"model-value",
										"items",
										"placeholder",
										"required"
									])]),
									_: 1
								}),
								T.value?.amount ? (B(), H(Zm, { key: 0 }, {
									title: F(() => [G(A(P(Z)("editor.default_option_value.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.default_option_value.description")), 1)]),
									default: F(() => [W(mh, {
										id: "default-value-input",
										"model-value": a.value.overwrites.value,
										placeholder: P(Z)("editor.default_option_value.label"),
										required: a.value.overwrites.hide,
										inline: T.value?.customInput?.unit,
										min: T.value?.customInput?.min,
										max: T.value?.customInput?.max,
										rules: [{
											validator: (e) => {
												if (e === "" || e == null) return !0;
												let t = T.value?.customInput?.min ?? 0;
												return Number(e) >= t;
											},
											message: P(Z)("step.min_value", { minValue: T.value?.customInput?.min ?? 0 })
										}, {
											validator: (e) => {
												if (e === "" || e == null) return !0;
												let t = T.value?.customInput?.max ?? Infinity;
												return Number(e) <= t;
											},
											message: P(Z)("step.max_value", { maxValue: T.value?.customInput?.max ?? Infinity })
										}],
										"onUpdate:modelValue": t[2] ||= (e) => f("value", Number(e))
									}, null, 8, [
										"model-value",
										"placeholder",
										"required",
										"inline",
										"min",
										"max",
										"rules"
									])]),
									_: 1
								})) : K("", !0),
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.edit_title.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.edit_title.description")), 1)]),
									default: F(() => [W(mh, {
										id: `step-title-input-${r.value.code}`,
										"model-value": a.value.overwrites.title,
										type: "text",
										placeholder: P(Z)("editor.edit_title.placeholder"),
										"onUpdate:modelValue": t[3] ||= (e) => f("title", e)
									}, null, 8, [
										"id",
										"model-value",
										"placeholder"
									])]),
									_: 1
								}),
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.edit_description.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.edit_description.description")), 1)]),
									default: F(() => [W(mh, {
										id: `step-description-input-${r.value.code}`,
										"model-value": a.value.overwrites.description,
										type: "text",
										placeholder: P(Z)("editor.edit_description.placeholder"),
										"onUpdate:modelValue": t[4] ||= (e) => f("description", e)
									}, null, 8, [
										"id",
										"model-value",
										"placeholder"
									])]),
									_: 1
								})
							], 64)),
							W(dp, {
								level: "h3",
								class: "sub-heading"
							}, {
								default: F(() => [G(A(P(Z)("editor.edit_options")), 1)]),
								_: 1
							})
						]),
						_: 1
					}), W(Ep, {
						modelValue: v.value,
						"onUpdate:modelValue": t[6] ||= (e) => v.value = e,
						items: r.value.options?.map((e) => ({
							...e,
							title: e.title || P(Z)(`editor.edit_option.${e.code}`)
						})),
						title: "title"
					}, {
						content: F((e) => [W($m, null, {
							default: F(() => [[
								"height",
								"width",
								"amount"
							].includes(e.code) ? (B(), H(Zm, { key: 0 }, {
								title: F(() => [G(A(P(Z)(`editor.${e.code}.title`)), 1)]),
								default: F(() => [e.code === "width" || e.code === "height" ? (B(), H(mh, {
									key: 0,
									id: `measurement-input-${e.code}`,
									"model-value": y.value[e.code] ?? "",
									type: "number",
									"aria-label": e.code,
									class: "measurement-input",
									inline: e.unit,
									min: e.min,
									max: e.max,
									placeholder: "",
									error: P(C)[e.code].$errors[0]?.$message ?? "",
									onBlur: (t) => P(C)[e.code].$touch(t),
									"onUpdate:modelValue": (t) => g(e.code, t),
									onKeyup: au((t) => P(C)[e.code].$touch(t), ["enter"])
								}, null, 8, [
									"id",
									"model-value",
									"aria-label",
									"inline",
									"min",
									"max",
									"error",
									"onBlur",
									"onUpdate:modelValue",
									"onKeyup"
								])) : e.code === "amount" ? (B(), H(bh, {
									key: 1,
									modelValue: b.value,
									"onUpdate:modelValue": t[5] ||= (e) => b.value = e,
									min: e.min,
									max: e.max || void 0
								}, null, 8, [
									"modelValue",
									"min",
									"max"
								])) : K("", !0)]),
								_: 2
							}, 1024)) : (B(), V(R, { key: 1 }, [
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.hide_option.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.hide_option.description")), 1)]),
									default: F(() => [W(Op, {
										"model-value": !!_(e.code, "hide"),
										"onUpdate:modelValue": (t) => m(e.code, "hide", t)
									}, null, 8, ["model-value", "onUpdate:modelValue"])]),
									_: 2
								}, 1024),
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.edit_option_title.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.edit_option_title.description")), 1)]),
									default: F(() => [W(mh, {
										id: `option-title-input-${e.code}`,
										"model-value": _(e.code, "title") ?? "",
										type: "text",
										placeholder: P(Z)("editor.edit_option_title.placeholder"),
										"onUpdate:modelValue": (t) => m(e.code, "title", t)
									}, null, 8, [
										"id",
										"model-value",
										"placeholder",
										"onUpdate:modelValue"
									])]),
									_: 2
								}, 1024),
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.edit_option_description.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.edit_option_description.description")), 1)]),
									default: F(() => [W(mh, {
										id: `option-description-input-${e.code}`,
										"model-value": _(e.code, "description") ?? "",
										type: "text",
										placeholder: P(Z)("editor.edit_description.placeholder"),
										"onUpdate:modelValue": (t) => m(e.code, "description", t)
									}, null, 8, [
										"id",
										"model-value",
										"placeholder",
										"onUpdate:modelValue"
									])]),
									_: 2
								}, 1024),
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.edit_image.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.edit_image.description")), 1)]),
									default: F(() => [W(mh, {
										id: `option-image-input-${e.code}`,
										"model-value": _(e.code, "image") ?? "",
										type: "text",
										placeholder: P(Z)("editor.edit_image.placeholder"),
										"onUpdate:modelValue": (t) => m(e.code, "image", t)
									}, null, 8, [
										"id",
										"model-value",
										"placeholder",
										"onUpdate:modelValue"
									])]),
									_: 2
								}, 1024),
								W(Zm, null, {
									title: F(() => [G(A(P(Z)("editor.edit_sequence.title")), 1)]),
									subtitle: F(() => [G(A(P(Z)("editor.edit_sequence.description")), 1)]),
									default: F(() => [W(mh, {
										id: `option-sequence-input-${e.code}`,
										"model-value": _(e.code, "sequence") ?? "",
										type: "number",
										placeholder: P(Z)("editor.edit_sequence.placeholder"),
										rules: [
											{
												validator: (e) => e >= 0,
												message: P(Z)("editor.min_sequence", { min: 0 })
											},
											{
												validator: (e) => e <= r.value.options.length,
												message: P(Z)("editor.max_sequence", { max: r.value.options.length })
											},
											{
												message: P(Z)("editor.number_should_not_exist_twice"),
												validator: (e) => r.value.options.map((e) => _(e.code, "sequence")).filter((t) => t === e).length <= 1
											}
										],
										"onUpdate:modelValue": (t) => m(e.code, "sequence", t)
									}, null, 8, [
										"id",
										"model-value",
										"placeholder",
										"rules",
										"onUpdate:modelValue"
									])]),
									_: 2
								}, 1024)
							], 64))]),
							_: 2
						}, 1024)]),
						_: 1
					}, 8, ["modelValue", "items"])]),
					_: 1
				}, 512),
				U("div", qg, [W(X, { onClick: t[7] ||= (e) => D() }, {
					default: F(() => [G(A(P(Z)("editor.apply")), 1)]),
					_: 1
				}), W(X, {
					variant: "secondary",
					onClick: E
				}, {
					default: F(() => [G(A(P(Z)("editor.reset")), 1)]),
					_: 1
				})])
			]),
			_: 1
		}, 8, [
			"modelValue",
			"title",
			"persistent"
		]));
	}
}, [["__scopeId", "data-v-6b0f6ff6"]]), Yg = {
	key: 0,
	class: "top"
}, Xg = ["srcset"], Zg = ["srcset"], Qg = [
	"src",
	"alt",
	"height",
	"width"
], $g = {
	key: 1,
	class: "bottom"
}, e_ = /*#__PURE__*/ Y({
	__name: "PImage",
	props: {
		image: {
			type: String,
			required: !0
		},
		tablet: {
			type: String,
			default: ""
		},
		mobile: {
			type: String,
			default: ""
		},
		alt: {
			type: String,
			required: !0
		},
		rounded: {
			type: [String, Number],
			default: null
		},
		width: {
			type: [String, Number],
			default: ""
		},
		height: {
			type: [String, Number],
			default: ""
		},
		caption: {
			type: String,
			default: ""
		},
		captionPosition: {
			type: String,
			default: "bottom"
		},
		fluid: Boolean
	},
	emits: ["error"],
	setup(e, { emit: t }) {
		let n = t, r = e, i = /* @__PURE__ */ N(!1);
		function a(e) {
			i.value = !0, n("error", e);
		}
		let o = J(() => r.image), s = J(() => r.fluid ? null : {
			width: `${r.width}px`,
			height: `${r.height}px`
		});
		return I(o, () => {
			i.value = !1;
		}), (t, n) => (B(), V("figure", {
			class: k(["image-wrapper", { "has-caption": e.caption }]),
			style: he(s.value)
		}, [
			e.caption && e.captionPosition === "top" ? (B(), V("figcaption", Yg, A(e.caption), 1)) : K("", !0),
			U("picture", {
				class: k(["image-inner", { fluid: e.fluid }]),
				style: he(s.value)
			}, [
				e.mobile ? (B(), V("source", {
					key: 0,
					media: "(max-width: 640px)",
					srcset: e.mobile
				}, null, 8, Xg)) : K("", !0),
				e.tablet ? (B(), V("source", {
					key: 1,
					media: "(max-width: 1024px)",
					srcset: e.tablet
				}, null, 8, Zg)) : K("", !0),
				e.image && !i.value ? (B(), V("img", {
					key: 2,
					loading: "lazy",
					class: k(["image", e.rounded ? `rounded-${e.rounded}` : ""]),
					src: e.image,
					alt: e.alt,
					height: e.height,
					width: e.width,
					onError: a
				}, null, 42, Qg)) : (B(), V("div", {
					key: 3,
					class: k(["skeleton", e.rounded ? `rounded-${e.rounded}` : ""])
				}, null, 2))
			], 6),
			e.caption && e.captionPosition === "bottom" ? (B(), V("figcaption", $g, A(e.caption), 1)) : K("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-56f974c8"]]), t_ = {
	key: 0,
	class: "amount"
}, n_ = {
	key: 1,
	class: "labels"
}, r_ = /*#__PURE__*/ Y({
	__name: "POptionCardHeader",
	props: /*@__PURE__*/ Fa({
		selected: Boolean,
		image: {
			type: String,
			default: ""
		},
		amountLabel: {
			type: String,
			default: ""
		},
		editAmount: Boolean,
		labels: {
			type: Array,
			default: () => []
		},
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
		let t = ro(e, "amount");
		return (n, r) => (B(), V(R, null, [
			e.selected && e.editAmount ? (B(), V("div", t_, [U("span", null, A(e.amountLabel), 1), W(bh, {
				modelValue: t.value,
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
				onClick: r[1] ||= ru(() => {}, ["stop"])
			}, null, 8, ["modelValue"])])) : K("", !0),
			e.labels.length && !e.editAmount ? (B(), V("div", n_, [(B(!0), V(R, null, ma(e.labels, (e, t) => (B(), V(R, { key: t }, [e.text ? (B(), H(up, {
				key: 0,
				color: e.color,
				small: ""
			}, {
				default: F(() => [G(A(e.text), 1)]),
				_: 2
			}, 1032, ["color"])) : K("", !0)], 64))), 128))])) : K("", !0),
			e.image && !e.editAmount ? (B(), H(e_, {
				key: 2,
				image: e.image,
				alt: `${e.title} ${P(Z)("option.product_photo")}`,
				width: "280",
				fluid: ""
			}, null, 8, ["image", "alt"])) : K("", !0)
		], 64));
	}
}, [["__scopeId", "data-v-b23b8d25"]]), i_ = {
	key: 0,
	class: "not-available"
}, a_ = {
	key: 1,
	class: "custom-value"
}, o_ = {
	key: 2,
	class: "information"
}, s_ = {
	key: 0,
	class: "delivery"
}, c_ = { class: "delivery-time" }, l_ = {
	key: 1,
	class: "price"
}, u_ = {
	key: 0,
	class: "price-per"
}, d_ = /*#__PURE__*/ Y({
	__name: "POptionCardFooter",
	props: {
		price: {
			type: [Number, String],
			default: 0
		},
		pricePer: {
			type: String,
			default: "m2"
		},
		deliveryTime: {
			type: Number,
			default: 0
		},
		deliveryTimeText: {
			type: String,
			default: ""
		},
		customInput: {
			type: Object,
			default: () => ({
				unit: "",
				value: 0,
				buttonText: ""
			})
		},
		disabled: Boolean,
		notAvailableMessage: {
			type: String,
			default: ""
		}
	},
	emits: ["update:customValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(n.customInput.value), a = J({
			get: () => n.customInput.value,
			set: (e) => {
				i.value = Number(e);
			}
		});
		function o() {
			i.value && i.value > 0 && r("update:customValue", i.value);
		}
		return (t, n) => e.disabled && e.notAvailableMessage ? (B(), V("div", i_, [W(Gd, { icon: P(th) }, null, 8, ["icon"]), U("span", null, A(e.notAvailableMessage), 1)])) : e.customInput.value && e.customInput.unit && !e.disabled && !e.notAvailableMessage ? (B(), V("div", a_, [W(mh, {
			id: "custom-value",
			modelValue: a.value,
			"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
			inline: e.customInput.unit,
			required: "",
			"data-testid": "custom-value-input",
			"aria-label": P(Z)("option.custom_value")
		}, null, 8, [
			"modelValue",
			"inline",
			"aria-label"
		]), W(X, {
			variant: "primary",
			"data-testid": "custom-value-submit",
			onClick: ru(o, ["stop"])
		}, {
			default: F(() => [G(A(e.customInput.buttonText || P(Z)("option.continue")), 1)]),
			_: 1
		})])) : (B(), V("div", o_, [e.deliveryTime ? (B(), V("span", s_, [W(Ud, { icon: P(Bd) }, null, 8, ["icon"]), U("span", c_, A(e.deliveryTimeText), 1)])) : K("", !0), e.price ? (B(), V("span", l_, [G(" € " + A(e.price) + " ", 1), e.pricePer ? (B(), V("span", u_, " / " + A(e.pricePer), 1)) : K("", !0)])) : K("", !0)]));
	}
}, [["__scopeId", "data-v-4c2d6a7b"]]), f_ = [
	"tabindex",
	"aria-current",
	"part",
	"aria-disabled"
], p_ = {
	key: 0,
	class: "no-option"
}, m_ = {
	key: 1,
	class: "inner"
}, h_ = { class: "header" }, g_ = { class: "content" }, __ = {
	class: "description",
	part: "option-description"
}, v_ = { class: "footer" }, y_ = /*#__PURE__*/ Y({
	__name: "POptionCard",
	props: /*@__PURE__*/ Fa({
		title: {
			type: String,
			default: ""
		},
		description: {
			type: String,
			default: ""
		},
		deliveryTime: {
			type: Number,
			default: 0
		},
		price: {
			type: [Number, String],
			default: 0
		},
		pricePer: {
			type: String,
			default: "m2"
		},
		deliveryTimeText: {
			type: String,
			default: ""
		},
		labels: {
			type: Array,
			default: () => []
		},
		image: {
			type: String,
			default: ""
		},
		disabled: Boolean,
		amountLabel: {
			type: String,
			default: ""
		},
		customInput: {
			type: Object,
			default: () => ({
				unit: "",
				value: 0
			})
		},
		noOption: Boolean,
		noOptionText: {
			type: String,
			default: ""
		},
		notAvailableMessage: {
			type: String,
			default: ""
		}
	}, {
		modelValue: { type: Boolean },
		modelModifiers: {},
		amount: {
			type: Number,
			default: 0
		},
		amountModifiers: {}
	}),
	emits: ["update:modelValue", "update:amount"],
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(!1), r = J(() => t.deliveryTimeText === "" ? Td("option.days", t.deliveryTime) : `${t.deliveryTime} ${t.deliveryTimeText}`), i = J(() => {
			switch (t.pricePer) {
				case "unit": return Z("option.per_unit");
				case "meter": return "m";
				default: return "m²";
			}
		}), a = ro(e, "modelValue"), o = ro(e, "amount"), s = J(() => t.amountLabel ? t.amountLabel : Z("option.amount")), c = J(() => typeof o.value == "number" && o.value > 0);
		function l(e) {
			t.disabled || (n.value = c.value ? !n.value : !1, e ? o.value = e : a.value = !a.value);
		}
		function u(e, t) {
			let n = null;
			t === "left" && e ? n = e.previousElementSibling : t === "right" && e && (n = e.nextElementSibling);
			let r = n?.querySelector(".header");
			if (n && !r.disabled) {
				r.click();
				let e = null, t = n.querySelector("input");
				setTimeout(() => {
					e = n.querySelector(".option-card"), e && !e.classList.contains("disabled") ? e.focus() : t && t.focus();
				}, 50);
			} else n && u(n, t);
		}
		function d(e, t) {
			let n = e.currentTarget.parentElement;
			if (t === "left") {
				let e = n.previousElementSibling?.querySelector(".option-card"), t = n.previousElementSibling?.querySelector(".overlay");
				e ? e.classList.contains("disabled") ? d({ currentTarget: e }, "left") : t ? t.click() : e.focus() : u(n.closest(".accordion-item"), "left");
			} else if (t === "right") {
				let e = n.nextElementSibling?.querySelector(".option-card"), t = n.nextElementSibling?.querySelector(".overlay");
				e ? e.classList.contains("disabled") ? d({ currentTarget: e }, "right") : t ? t.click() : e.focus() : u(n.closest(".accordion-item"), "right");
			}
		}
		return Zi(() => {
			o.value > 0 && a.value && (n.value = !0);
		}), I(o, (e, t) => {
			!t && e && (n.value = !0);
		}), I(a, () => {
			o.value && (n.value = !!a.value);
		}), (t, c) => (B(), V("article", {
			class: k(["option-card", {
				selected: a.value,
				disabled: e.disabled
			}]),
			tabindex: e.disabled ? -1 : 0,
			"aria-current": a.value,
			"data-testid": "option",
			part: `option ${a.value ? "option-selected" : ""}`,
			"aria-disabled": e.disabled,
			onClick: c[2] ||= (t) => e.customInput.value ? null : l(),
			onKeyup: [
				c[3] ||= au((t) => e.customInput.value ? null : l(), ["enter"]),
				c[4] ||= au((e) => d(e, "left"), ["arrow-left"]),
				c[5] ||= au((e) => d(e, "right"), ["arrow-right"]),
				c[6] ||= au((e) => d(e, "up"), ["arrow-up"])
			]
		}, [e.noOption ? (B(), V("div", p_, [W(Ud, { icon: P(Id) }, null, 8, ["icon"]), W(dp, { level: "h3" }, {
			default: F(() => [G(A(e.noOptionText), 1)]),
			_: 1
		})])) : (B(), V("div", m_, [
			U("header", h_, [L(t.$slots, "header", {}, () => [W(r_, {
				amount: o.value,
				"onUpdate:amount": c[0] ||= (e) => o.value = e,
				selected: a.value,
				"amount-label": s.value,
				image: e.image,
				"edit-amount": n.value,
				labels: e.labels,
				title: e.title
			}, null, 8, [
				"amount",
				"selected",
				"amount-label",
				"image",
				"edit-amount",
				"labels",
				"title"
			])], !0)]),
			U("div", g_, [L(t.$slots, "content", {}, () => [e.title ? (B(), H(dp, {
				key: 0,
				level: "h3",
				class: "title",
				part: "option-title"
			}, {
				default: F(() => [G(A(e.title), 1)]),
				_: 1
			})) : K("", !0), U("p", __, A(e.description), 1)], !0)]),
			U("footer", v_, [L(t.$slots, "footer", {}, () => [W(d_, {
				"delivery-time": e.deliveryTime,
				price: e.price,
				"price-per": i.value,
				"delivery-time-text": r.value,
				"custom-input": e.customInput,
				disabled: e.disabled,
				"not-available-message": e.notAvailableMessage,
				"onUpdate:customValue": c[1] ||= (e) => l(e)
			}, null, 8, [
				"delivery-time",
				"price",
				"price-per",
				"delivery-time-text",
				"custom-input",
				"disabled",
				"not-available-message"
			])], !0)])
		]))], 42, f_));
	}
}, [["__scopeId", "data-v-917bcc94"]]), b_ = /*#__PURE__*/ Y({
	__name: "PStepStatus",
	props: { status: {
		type: String,
		default: "editing"
	} },
	setup(e) {
		let t = e, n = J(() => {
			switch (t.status) {
				case "done": return Dd;
				case "attention": return Ad;
				default: return null;
			}
		});
		return (t, r) => (B(), V("div", { class: k(["status", e.status]) }, [n.value ? (B(), H(Gd, {
			key: 0,
			icon: n.value
		}, null, 8, ["icon"])) : K("", !0)], 2));
	}
}, [["__scopeId", "data-v-aa0d87a4"]]), x_ = /*#__PURE__*/ Y({
	__name: "POverlay",
	props: {
		opacity: {
			type: Number,
			default: 50
		},
		color: {
			type: String,
			default: "10,10,10"
		},
		fixed: Boolean
	},
	setup(e) {
		let t = e;
		return Zi(() => {
			t.fixed && (document.getElementsByTagName("html")[0].style.overflow = "hidden");
		}), ta(() => {
			t.fixed && (document.getElementsByTagName("html")[0].style.overflow = null);
		}), (t, n) => (B(), V("div", {
			class: k(["overlay", { fixed: e.fixed }]),
			style: he({ background: `rgba(${e.color}, ${e.opacity / 100})` })
		}, [L(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-66d42f70"]]), S_ = { class: "option-step-container" }, C_ = {
	key: 0,
	class: "subtitle",
	part: "step-subtitle"
}, w_ = {
	key: 1,
	class: "subtitle",
	part: "step-subtitle"
}, T_ = {
	class: "option-container",
	tabindex: "0"
}, E_ = /*#__PURE__*/ Y({
	__name: "POptionStep",
	props: {
		title: {
			type: [String, Number],
			default: ""
		},
		subtitle: {
			type: [String, Number],
			default: ""
		},
		ariaTitle: {
			type: String,
			default: ""
		},
		disabled: Boolean,
		status: {
			type: String,
			default: "editing"
		},
		options: {
			type: Array,
			default: () => []
		},
		modelValue: {
			type: Object,
			default: () => {}
		},
		open: Boolean,
		attentionText: {
			type: String,
			default: ""
		},
		multiple: Boolean,
		code: {
			type: String,
			default: ""
		},
		alert: {
			type: Object,
			default: () => {}
		},
		unvailableText: {
			type: String,
			default: ""
		},
		editor: Boolean,
		hasOverwrites: Boolean,
		isHidden: Boolean
	},
	emits: [
		"update:modelValue",
		"update:accordionState",
		"edit:step"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(!1), a = /* @__PURE__ */ N([]), o = /* @__PURE__ */ N([]), s = J({
			get: () => n.open,
			set: (e) => {
				r("update:accordionState", e);
			}
		}), c = J(() => o.value.map((e, t) => {
			if (!e) return null;
			if (n.options[t] && n.options[t].noOption) return n.options[t].noOptionText;
			let r = "", i = a.value.find((e) => e.code === n.options[t].code);
			return i?.value > 0 && (r += `${i.value}x `), r += n.options[t].title, r;
		}).filter((e) => !!e).join(", ")), l = /* @__PURE__ */ N(null);
		function u(e) {
			if (n.multiple || (a.value = []), a.value.length === 0 || a.value.some((t) => t.code === n.options[e].code) === !1) {
				let t;
				t = n.options[e].amount ? {
					code: n.options[e].code,
					value: n.options[e].amount
				} : { code: n.options[e].code }, a.value.push(t);
			}
			o.value[e] = !o.value[e];
			let t = a.value.findIndex((e) => e.code === "no-option");
			if (t > -1 && n.options[e].noOption) o.value.forEach((t, n) => {
				n !== e && (o.value[n] = !1);
			}), a.value = a.value.filter((e) => e.code === "no-option");
			else {
				let r = n.options.findIndex((e) => e.noOption);
				r > -1 && (o.value[r] = !1), t > -1 ? a.value.splice(t, 1) : o.value[e] === !1 && a.value.some((t) => t.code === n.options[e].code) && (a.value = a.value.filter((t) => t.code !== n.options[e].code));
			}
		}
		function d(e) {
			u(e), r("update:modelValue", a.value);
		}
		function f() {
			a.value.length === 0 && n.modelValue?.length ? a.value = n.modelValue : n.modelValue && Object.keys(n.modelValue).length && a.value.length === 0 && (a.value = [n.modelValue]), n.options.forEach((e) => {
				!e.noOption && e.code === n.modelValue?.code || Array.isArray(n.modelValue) && n.modelValue.some((t) => t.code === e.code) ? o.value.push(!0) : o.value.push(!1);
			}), n.code === "accessories" && Array.isArray(n.modelValue) && n.modelValue.length > 2 && (i.value = !0);
		}
		function p(e) {
			return n.code === "accessories" && e > 3 && !i.value;
		}
		function m(e, t) {
			n.multiple || u(e);
			let i = a.value.filter((t) => t.code !== n.options[e].code), o = {
				code: n.options[e].code,
				value: t
			};
			a.value = [...i, o], r("update:modelValue", a.value);
		}
		function h() {
			setTimeout(() => {
				l.value?.length && l.value[0].$el.focus();
			}, 500);
		}
		function g(e) {
			return e.customInput?.value ? 0 : Array.isArray(n.modelValue) ? n.modelValue?.find((t) => t.code === e.code)?.value : n.modelValue?.value || e.amount || 0;
		}
		return f(), I(() => n.modelValue, () => {
			o.value = [], f();
		}), I(() => n.open, () => {
			n.open && h();
		}, { immediate: !0 }), (t, n) => (B(), V("div", S_, [e.editor ? (B(), H(X, {
			key: 0,
			variant: "url",
			size: "small",
			class: "edit-button",
			onClick: n[0] ||= ru((e) => r("edit:step"), ["stop"])
		}, {
			default: F(() => [G(A(P(Z)("option.edit")), 1)]),
			_: 1
		})) : K("", !0), W(wp, {
			modelValue: s.value,
			"onUpdate:modelValue": n[3] ||= (e) => s.value = e,
			class: "configurator-step options",
			"aria-title": e.ariaTitle,
			"scroll-into-view": "",
			part: "step",
			exportparts: "state-indicator-icon"
		}, {
			header: F(() => [
				W(b_, { status: e.status }, null, 8, ["status"]),
				W(dp, {
					class: "title",
					part: "step-title",
					level: "h3"
				}, {
					default: F(() => [
						G(A(e.title) + " ", 1),
						e.hasOverwrites && e.editor ? (B(), H(Mf, {
							key: 0,
							text: P(Z)("option.step_has_overwrites")
						}, {
							default: F(() => [W(Au, { icon: P(Ld) }, null, 8, ["icon"])]),
							_: 1
						}, 8, ["text"])) : K("", !0),
						e.isHidden && e.editor ? (B(), H(Mf, {
							key: 1,
							text: P(Z)("option.step_is_hidden")
						}, {
							default: F(() => [W(Au, { icon: P(Md) }, null, 8, ["icon"])]),
							_: 1
						}, 8, ["text"])) : K("", !0)
					]),
					_: 1
				}),
				e.status === "attention" ? (B(), V("span", C_, A(e.attentionText || P(Z)("option.attention")), 1)) : K("", !0),
				c.value ? (B(), V("span", w_, A(c.value), 1)) : K("", !0)
			]),
			default: F(() => [U("div", null, [U("div", T_, [(B(!0), V(R, null, ma(e.options, (t, r) => (B(), V("div", {
				key: r,
				class: k(["option", { hide: p(r) }])
			}, [r === 3 && !i.value && e.code === "accessories" ? (B(), H(x_, {
				key: 0,
				tabindex: "0",
				onClick: n[1] ||= ru((e) => i.value = !0, ["stop"]),
				onKeyup: n[2] ||= au(ru((e) => i.value = !0, ["stop"]), ["enter"])
			}, {
				default: F(() => [G(" +" + A(e.options.length - 3), 1)]),
				_: 1
			})) : K("", !0), W(y_, q({
				ref_for: !0,
				ref_key: "optionCards",
				ref: l
			}, { ref_for: !0 }, t, {
				amount: g(t),
				disabled: t.available === !1 || e.disabled,
				"not-available-message": t.available === !1 ? e.unvailableText || P(Z)("option.unavailable") : "",
				"model-value": o.value[r],
				exportparts: "option option-title option-description",
				"onUpdate:amount": (e) => m(r, e),
				"onUpdate:modelValue": (e) => d(r)
			}), null, 16, [
				"amount",
				"disabled",
				"not-available-message",
				"model-value",
				"onUpdate:amount",
				"onUpdate:modelValue"
			])], 2))), 128))]), e.alert ? (B(), H(Gg, be(q({ key: 0 }, e.alert)), null, 16)) : K("", !0)])]),
			_: 1
		}, 8, ["modelValue", "aria-title"])]));
	}
}, [["__scopeId", "data-v-304f16a6"]]), D_ = ["id"], O_ = { class: "header" }, k_ = {
	key: 1,
	class: "separator"
}, A_ = {
	key: 0,
	class: "subtitle status-text",
	part: "step-subtitle"
}, j_ = {
	key: 2,
	class: "total",
	part: "step-subtitle"
}, M_ = {
	key: 0,
	class: "content"
}, N_ = /*#__PURE__*/ Y({
	__name: "PSimpleStep",
	props: {
		title: {
			type: [String, Number],
			default: ""
		},
		ariaTitle: {
			type: String,
			default: ""
		},
		disabled: Boolean,
		code: {
			type: String,
			default: ""
		},
		status: {
			type: String,
			default: "editing"
		},
		totalPrefix: {
			type: String,
			default: ""
		},
		attentionText: {
			type: String,
			default: ""
		},
		alert: {
			type: Object,
			default: () => {}
		},
		modelValue: {
			type: Object,
			default: () => {}
		},
		options: {
			type: Array,
			default: () => []
		},
		buttonStartText: {
			type: String,
			default: ""
		},
		editor: Boolean,
		hasOverwrites: Boolean,
		isHidden: Boolean,
		canOrder: Boolean,
		disableFirstStepAutofocus: Boolean
	},
	emits: [
		"update:modelValue",
		"update:focus",
		"edit:step",
		"recalculate",
		"configuration:started"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = si("measurements-form"), a = /* @__PURE__ */ N({}), o = /* @__PURE__ */ Xt({
			width: null,
			height: null
		}), s = /* @__PURE__ */ N(1), c = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(!1), u = J(() => {
			let e = n.options.find((e) => e.code === "width"), t = n.options.find((e) => e.code === "height"), r = e && e.reversible && t && t.reversible, i = e?.min, a = t?.min;
			return r ? Math.min(i, a) : {
				width: i,
				height: a
			};
		}), d = J(() => {
			let e = n.options.find((e) => e.code === "width"), t = n.options.find((e) => e.code === "height"), r = e && e.reversible && t && t.reversible, i = e?.max, a = t?.max;
			return r ? Math.max(i, a) : {
				width: i,
				height: a
			};
		}), f = fm({
			width: {
				minValue: Mm.withMessage(Z("step.min_value", { minValue: typeof u.value == "number" ? u.value : u.value.width }), Rm(typeof u.value == "number" ? u.value : u.value.width)),
				required: Mm.withMessage(Z("step.required"), Pm),
				maxValue: Mm.withMessage(Z("step.max_value", { maxValue: typeof d.value == "number" ? d.value : d.value.width }), Bm(typeof d.value == "number" ? d.value : d.value.width))
			},
			height: {
				minValue: Mm.withMessage(Z("step.min_value", { minValue: typeof u.value == "number" ? u.value : u.value.height }), Rm(typeof u.value == "number" ? u.value : u.value.height)),
				required: Mm.withMessage(Z("step.required"), Pm),
				maxValue: Mm.withMessage(Z("step.max_value", { maxValue: typeof d.value == "number" ? d.value : d.value.height }), Bm(typeof d.value == "number" ? d.value : d.value.height))
			}
		}, o), p = /* @__PURE__ */ N(null), m = J(() => n.buttonStartText || Z("step.new_configuration")), h = J(() => {
			if (n.code === "measurement-amount") {
				let e = n.options.some((e) => e.code === "width"), t = n.options.some((e) => e.code === "height"), r = n.options.some((e) => e.code === "amount");
				if (e && (!o.width || f.value.$errors.some((e) => e.$property === "width")) || t && (!o.height || f.value.$errors.some((e) => e.$property === "height")) || r && !s.value) return !0;
			}
			return n.code === "amount" && !s.value;
		});
		function g(e, t) {
			if (e && t && !f.value.$invalid) {
				b();
				let n = e * t / 1e4 * s.value;
				c.value = Number(n.toFixed(2));
			}
		}
		async function _() {
			let e = await i.value.validate(), t = n.options.some((e) => e.code === "width"), c = n.options.some((e) => e.code === "height"), l = n.options.some((e) => e.code === "amount");
			a.value = [], t && a.value.push({
				code: "width",
				value: o.width
			}), c && a.value.push({
				code: "height",
				value: o.height
			}), l && a.value.push({
				code: "amount",
				value: s.value
			}), e && r("update:modelValue", a.value);
		}
		function v() {
			(p.value?.getElementsByClassName("input"))?.[0]?.focus();
		}
		function y(e) {
			setTimeout(() => {
				r("update:focus", e);
			}, 200);
		}
		function b() {
			o.width && o.height && s.value && n.canOrder && (l.value = !0);
		}
		return Zi(() => {
			n.disableFirstStepAutofocus || v(), n.modelValue?.length && (o.width = n.modelValue.find((e) => e.code === "width")?.value, o.height = n.modelValue.find((e) => e.code === "height")?.value, s.value = n.modelValue.find((e) => e.code === "amount")?.value || 1);
		}), I(() => n.modelValue, (e) => {
			e?.length && (o.width = e.find((e) => e.code === "width")?.value, o.height = e.find((e) => e.code === "height")?.value, s.value = e.find((e) => e.code === "amount")?.value || 1, f.value.$touch());
		}, { immediate: !0 }), (t, n) => (B(), V("div", {
			id: "accordion-header-" + e.ariaTitle,
			class: k(["configurator-step simple", { disabled: e.disabled }]),
			part: "step"
		}, [U("div", O_, [
			W(b_, { status: e.status }, null, 8, ["status"]),
			U("div", {
				ref_key: "inner",
				ref: p,
				class: "inner"
			}, [W(dp, {
				class: "title",
				part: "step-title",
				level: "h3"
			}, {
				default: F(() => [
					G(A(e.title) + " ", 1),
					e.hasOverwrites && e.editor ? (B(), H(Mf, {
						key: 0,
						text: P(Z)("option.step_has_overwrites")
					}, {
						default: F(() => [W(Au, { icon: P(Ld) }, null, 8, ["icon"])]),
						_: 1
					}, 8, ["text"])) : K("", !0),
					e.isHidden && e.editor ? (B(), H(Mf, {
						key: 1,
						text: P(Z)("option.step_is_hidden")
					}, {
						default: F(() => [W(Au, { icon: P(Md) }, null, 8, ["icon"])]),
						_: 1
					}, 8, ["text"])) : K("", !0)
				]),
				_: 1
			}), W(zg, {
				ref: "measurements-form",
				class: "measurements-form"
			}, {
				default: F(() => [
					U("div", { class: k(["measurement-inputs", { "has-errors": P(f).$errors && P(f).$errors.length }]) }, [(B(!0), V(R, null, ma(e.options, (e, t) => (B(), V(R, { key: t }, [e.code === "width" || e.code === "height" ? (B(), H(mh, {
						key: 0,
						id: `measurement-input-${e.code}`,
						modelValue: o[e.code],
						"onUpdate:modelValue": [(t) => o[e.code] = t, n[0] ||= (e) => g(o.width, o.height)],
						required: "",
						type: "number",
						"aria-label": e.code,
						class: "measurement-input",
						inline: e.unit,
						min: e.min,
						max: e.max,
						placeholder: P(Z)(`step.${e.code}`),
						error: P(f)[e.code].$errors[0]?.$message ?? "",
						onBlur: (t) => {
							P(f)[e.code].$touch(t), y(!1);
						},
						onKeyup: au(ru((t) => {
							P(f)[e.code].$touch(t), _();
						}, ["stop"]), ["enter"]),
						onFocus: n[1] ||= (e) => y(!0)
					}, null, 8, [
						"id",
						"modelValue",
						"onUpdate:modelValue",
						"aria-label",
						"inline",
						"min",
						"max",
						"placeholder",
						"error",
						"onBlur",
						"onKeyup"
					])) : K("", !0), e.code === "width" ? (B(), V("span", k_, " x ")) : e.code === "amount" ? (B(), H(bh, {
						key: 2,
						modelValue: s.value,
						"onUpdate:modelValue": [n[2] ||= (e) => s.value = e, n[6] ||= (e) => g(o.width, o.height)],
						min: e.min,
						max: e.max || void 0,
						onBlur: n[3] ||= (e) => y(!1),
						onFocus: n[4] ||= (e) => y(!0),
						onKeyup: n[5] ||= au(ru((e) => _(), ["stop"]), ["enter"])
					}, null, 8, [
						"modelValue",
						"min",
						"max"
					])) : K("", !0)], 64))), 128))], 2),
					e.code == "measurement-amount" || e.code === "amount" ? (B(), H(X, {
						key: 0,
						class: "submit-button",
						"data-testid": "submit-button",
						disabled: h.value,
						onClick: n[7] ||= (e) => {
							_(), r("configuration:started"), l.value = !1;
						}
					}, {
						default: F(() => [G(A(m.value), 1)]),
						_: 1
					}, 8, ["disabled"])) : K("", !0),
					l.value ? (B(), H(X, {
						key: 1,
						variant: "text",
						icon: P(Ed),
						onClick: n[8] ||= (e) => {
							r("recalculate", {
								measurement: o,
								amount: s.value
							}), l.value = !1;
						}
					}, {
						default: F(() => [G(A(P(Z)("step.recalculate")), 1)]),
						_: 1
					}, 8, ["icon"])) : K("", !0)
				]),
				_: 1
			}, 512)], 512),
			e.status === "attention" && e.attentionText ? (B(), V("span", A_, A(e.attentionText), 1)) : K("", !0),
			e.editor ? (B(), H(X, {
				key: 1,
				variant: "url",
				size: "small",
				class: "edit-button",
				onClick: n[9] ||= ru((e) => r("edit:step"), ["stop"])
			}, {
				default: F(() => [G(A(P(Z)("option.edit")), 1)]),
				_: 1
			})) : K("", !0),
			c.value ? (B(), V("span", j_, A(e.totalPrefix || P(Z)("step.total")) + ": " + A(c.value) + " m² ", 1)) : K("", !0)
		]), e.alert ? (B(), V("div", M_, [W(Gg, be(xs(e.alert)), null, 16)])) : K("", !0)], 10, D_));
	}
}, [["__scopeId", "data-v-6fa4e0b0"]]), P_ = {
	class: "configurator",
	"data-testid": "product-configurator",
	part: "configurator"
}, F_ = /*#__PURE__*/ Y({
	__name: "PConfigurator",
	props: /*@__PURE__*/ Fa({
		template: {
			type: Array,
			default: () => []
		},
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
	emits: /*@__PURE__*/ Fa([
		"update:modelValue",
		"recalculate",
		"configuration:started"
	], [
		"update:overwrites",
		"update:accordionState",
		"update:modelValue"
	]),
	setup(e, { emit: t }) {
		let n = e, r = t, i = ro(e, "overwrites"), a = ro(e, "accordionState"), o = ro(e, "modelValue"), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N({});
		function u(e, t) {
			a.value[t] = e, a.value.forEach((e, n) => {
				n !== t && (a.value[n] = !1);
			});
		}
		function d(e, t) {
			let n = { ...o.value };
			n.options[t] = e, r("update:modelValue", n);
		}
		function f(e) {
			l.value = e, c.value = !0;
		}
		return (t, p) => (B(), V("div", P_, [
			W(Ep, {
				modelValue: a.value,
				"onUpdate:modelValue": p[5] ||= (e) => a.value = e,
				items: e.template
			}, {
				default: F(({ item: t, index: n, open: a }) => [t.type === "simple" ? (B(), H(N_, q({
					key: 0,
					modelValue: o.value.options[n],
					"onUpdate:modelValue": (e) => o.value.options[n] = e,
					overwrites: i.value,
					"onUpdate:overwrites": p[0] ||= (e) => i.value = e
				}, { ...t }, {
					"aria-title": t.title.toLowerCase().replaceAll(" ", "-"),
					"button-start-text": e.buttonStartText,
					editor: e.editor,
					"has-overwrites": i.value?.overwrites?.steps?.some((e) => e.code === t.code),
					"is-hidden": i.value?.overwrites?.steps?.some((e) => e.code === t.code && e.overwrites.hide),
					"can-order": e.canOrder,
					"disable-first-step-autofocus": e.disableFirstStepAutofocus,
					exportparts: "step step-title step-subtitle",
					"onEdit:step": (e) => f(t),
					"onUpdate:modelValue": (e) => d(e, n),
					"onUpdate:focus": p[1] ||= (e) => s.value = e,
					onRecalculate: p[2] ||= (e) => r("recalculate", e),
					"onConfiguration:started": p[3] ||= (e) => r("configuration:started")
				}), null, 16, [
					"modelValue",
					"onUpdate:modelValue",
					"overwrites",
					"aria-title",
					"button-start-text",
					"editor",
					"has-overwrites",
					"is-hidden",
					"can-order",
					"disable-first-step-autofocus",
					"onEdit:step"
				])) : t.type === "options" || t.type === "options-multiple" ? (B(), H(E_, q({
					key: 1,
					modelValue: o.value.options[n],
					"onUpdate:modelValue": (e) => o.value.options[n] = e,
					overwrites: i.value,
					"onUpdate:overwrites": p[4] ||= (e) => i.value = e
				}, { ...t }, {
					open: a,
					multiple: t.type === "options-multiple",
					"aria-title": t.title.toLowerCase().replaceAll(" ", "-"),
					disabled: s.value || e.loading,
					editor: e.editor,
					"has-overwrites": i.value?.overwrites?.steps?.some((e) => e.code === t.code),
					"is-hidden": i.value?.overwrites?.steps?.some((e) => e.code === t.code && e.overwrites.hide),
					exportparts: "option step step-title step-subtitle option-title option-description state-indicator-icon",
					"onEdit:step": (e) => f(t),
					"onUpdate:modelValue": (e) => d(e, n),
					"onUpdate:accordionState": (e) => u(e, n)
				}), null, 16, [
					"modelValue",
					"onUpdate:modelValue",
					"overwrites",
					"open",
					"multiple",
					"aria-title",
					"disabled",
					"editor",
					"has-overwrites",
					"is-hidden",
					"onEdit:step",
					"onUpdate:accordionState"
				])) : K("", !0)]),
				_: 1
			}, 8, ["modelValue", "items"]),
			e.deliveryOptions.length && !e.hideDeliverySection ? (B(), H(bp, {
				key: 0,
				items: e.deliveryOptions,
				exportparts: "delivery-step delivery-step-option delivery-option-day delivery-option-date delivery-option-cost delivery-option-no-cost"
			}, null, 8, ["items"])) : K("", !0),
			e.loading ? (B(), H(fd, { key: 1 })) : K("", !0),
			e.editor ? (B(), H(Jg, {
				key: 2,
				modelValue: c.value,
				"onUpdate:modelValue": p[6] ||= (e) => c.value = e,
				step: l.value,
				"onUpdate:step": p[7] ||= (e) => l.value = e,
				overwrites: i.value,
				"onUpdate:overwrites": p[8] ||= (e) => i.value = e,
				"product-code": n.productCode
			}, null, 8, [
				"modelValue",
				"step",
				"overwrites",
				"product-code"
			])) : K("", !0)
		]));
	}
}, [["__scopeId", "data-v-62d3a628"]]), I_ = class {
	async fetchData(e, t, n) {
		let r = null;
		if (!t) throw Error("Proxy URL not set, add it in the init method");
		let i = new URLSearchParams({});
		e.method === "GET" && (i.set("url", JSON.parse(e.body).url), delete e.body), n && i.set("product_id", n);
		let a = {
			method: e.method,
			...e,
			headers: { "Content-Type": "application/json" }
		};
		try {
			r = await fetch(`${t}?${i}`, a);
		} catch (t) {
			throw Error(`Failed to fetch data from ${e.body ? JSON.parse(e.body).url : i.get("url")}, ${t}`);
		}
		if (!r.ok) throw Error(`Failed to fetch data from ${e.body ? JSON.parse(e.body).url : i.get("url")}`);
		return await r.json();
	}
}, L_ = class extends I_ {
	constructor({ proxy: e, apiVersion: t, productId: n }) {
		super(), this.proxy = e, this.apiVersion = t, this.productId = n;
	}
	async configureProduct(e) {
		let t = {
			method: "POST",
			body: JSON.stringify({
				url: `${this.apiVersion || ""}/products/configure`,
				data: { ...e }
			})
		}, n = {};
		try {
			n = await this.fetchData(t, this.proxy, this.productId);
		} catch (e) {
			throw Error(e);
		}
		return n;
	}
	async getPrice(e) {
		let t = {
			method: "POST",
			body: JSON.stringify({
				url: `${this.apiVersion || ""}/price`,
				data: { ...e }
			})
		};
		return await this.fetchData(t, this.proxy, this.productId);
	}
	async getProducts(e) {
		let t = JSON.parse(sessionStorage.getItem("products"));
		if (t?.length && e) return t;
		let n = {
			method: "GET",
			body: JSON.stringify({ url: `${this.apiVersion || ""}/products?per_page=1000` })
		}, r = await this.fetchData(n, this.proxy, this.productId);
		return e && sessionStorage.setItem("products", JSON.stringify(r.data)), r.data;
	}
	async getProduct(e) {
		let t = {
			method: "GET",
			body: JSON.stringify({ url: `${this.apiVersion || ""}/products/product/${e}` })
		};
		return await this.fetchData(t, this.proxy, this.productId);
	}
	async storeConfiguration(e) {
		let t = {
			method: "POST",
			body: JSON.stringify({
				url: `${this.apiVersion || ""}/apiproducts/product`,
				data: { ...e }
			})
		};
		return await this.fetchData(t, this.proxy, this.productId);
	}
	async updateConfiguration(e) {
		let t = {
			method: "PUT",
			body: JSON.stringify({
				url: `${this.apiVersion || ""}/apiproducts/product/${e.customer_code}`,
				data: { ...e }
			})
		};
		return await this.fetchData(t, this.proxy);
	}
	async getUploaderSession(e) {
		let t = {
			method: "POST",
			body: JSON.stringify({
				url: `${this.apiVersion || ""}/products/uploader/create`,
				data: e
			})
		};
		return (await this.fetchData(t, this.proxy, this.productId)).uploaders;
	}
};
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/numberToCurrency.pE1fJnJC.js
function R_(e, t = null, n = null) {
	let r = e;
	return typeof r != "number" && (r = parseFloat(e.replace(",", "."))), new Intl.NumberFormat(t || md.locale, {
		style: "currency",
		currency: n || md.currency
	}).format(r);
}
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/data.helper.CngfxZ_3.js
function z_(e) {
	return Array.isArray(e) ? e.length > 0 : e != null && e !== "";
}
function B_(e) {
	return typeof e == "string" || e instanceof String;
}
//#endregion
//#region src/models/product.model.js
var V_ = class {
	constructor({ code: e, options: t }) {
		this.code = e, this.options = t || [];
	}
}, H_ = class {
	constructor({ products: e, language: t }) {
		this.products = e, this.language = t;
	}
}, U_ = class {
	constructor({ companyName: e, firstName: t, lastName: n, street: r, houseNumber: i, addition: a, postalCode: o, city: s, country: c, phone: l, email: u }) {
		this.companyName = e, this.firstName = t, this.lastName = n, this.street = r, this.houseNumber = i, this.addition = a, this.postalCode = o, this.city = s, this.country = c, this.phone = l, this.email = u;
	}
}, W_ = class {
	constructor({ address: e, products: t }) {
		this.address = e, this.products = t;
	}
	getPayload() {
		return {
			deliveries: [{ address: {
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
			} }],
			products: this.products
		};
	}
};
//#endregion
//#region src/helpers/returnValueFromDotNotationString.helper.js
function G_(e, t) {
	return t.split(".").reduce((e, t) => e[t] ? e[t] : e, e);
}
//#endregion
//#region src/helpers/locale.helper.js
var K_ = {
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
		global: { labels: { continue: "Continue" } },
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
		global: { labels: { continue: "Doorgaan" } },
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
		global: { labels: { continue: "Weiter" } },
		searchForProducts: "Produkte suchen",
		measurement_and_amount: "Größe und Menge",
		pc: "St"
	},
	es: {
		fastest: "Más rápido",
		cheapest: "Más barato",
		tomorrow: "Mañana",
		no_accessoires: "Sin accesorios",
		complete: "Finalizar",
		errors: {
			invalid_or_duplicate: "Opción no válida o duplicada, modifica la configuración e inténtalo de nuevo",
			restrictions_not_met: "No se cumplen las restricciones de una o más líneas del pedido",
			invalid: "Uno o más valores no son válidos",
			invalidConfig: "La configuración contiene una opción no válida, modifícala e inténtalo de nuevo",
			general: "Algo ha salido mal, revisa la configuración e inténtalo de nuevo"
		},
		global: { labels: { continue: "Continuar" } },
		searchForProducts: "Buscar productos",
		measurement_and_amount: "Formato y cantidad",
		pc: "ud"
	}
}, q_ = /* @__PURE__ */ Xt({ language: "nl" });
function J_(e) {
	return G_(K_[q_.language], e) || e;
}
function Y_(e, t = {}) {
	return e.replace(/{(\w+)}/g, (e, n) => t[n] || `{${n}}`);
}
function X_(e, t) {
	return e.replace(/{(\d+)}/g, (e, n) => t[n] || `{${n}}`);
}
function Z_(e, t = null) {
	let n = J_(e);
	return Array.isArray(t) ? X_(n) : Y_(n, t);
}
function Q_(e) {
	q_.language = e;
}
//#endregion
//#region src/helpers/remove.helper.js
function $_(e, t) {
	return t === -1 ? e.filter((e) => e.code !== void 0) : e.slice(0, t + 1);
}
//#endregion
//#region src/helpers/date.helper.js
function ev(e, t) {
	let n = new Date(e), r = /* @__PURE__ */ new Date(), i = new Date(r);
	return i.setDate(r.getDate() + 1), n.toDateString() === i.toDateString() ? Z_("tomorrow") : n.toLocaleDateString(`${t}-${t.toUpperCase()}`, { weekday: "long" });
}
function tv(e, t) {
	return new Date(e).toLocaleDateString(`${t}-${t.toUpperCase()}`, {
		month: "long",
		day: "numeric"
	});
}
//#endregion
//#region src/helpers/options.helper.js
function nv(e, t) {
	return e.length === 0 || !t.some((e) => e.code === "no-option") && !t?.includes(void 0);
}
function rv(e, t, n, r) {
	let i = "";
	n === "accessories-cross-sell" ? i = "unit" : (n === "material" || n === "materialType") && (i = "meter");
	let a = e.map((e) => {
		let n = r?.find((t) => t.code === e.code)?.overwrites, a;
		return (e.type_code === "number" || e.type_code === "decimal") && (a = {
			value: e.default_value || parseFloat(e.min_value) || 1,
			min: e.min_value,
			max: e.max_value,
			unit: e.unit_code || Z_("pc")
		}), {
			code: e.code,
			title: n?.title || e?.name,
			description: n?.description || e?.description,
			image: n?.image || e.images.length ? e.images[0].url : void 0,
			price: e.price ? e.price[t] : void 0,
			pricePer: i,
			unit: e.unit_code || Z_("pc"),
			reversible: e.reversible,
			min: e.min_value,
			max: e.max_value,
			available: e?.available,
			amount: e.default_value,
			customInput: a,
			labels: e.label ? [{
				text: e.label,
				color: "red"
			}] : void 0,
			sequence: n?.sequence
		};
	}).filter((e) => !(r?.find((t) => t.code === e.code))?.overwrites.hide).sort((e, t) => e.sequence - t.sequence);
	return n === "accessories-cross-sell" && !a.some((e) => e.noOption) && a.unshift({
		code: "no-option",
		noOption: !0,
		noOptionText: Z_("no_accessoires")
	}), a;
}
function iv(e) {
	let t = e.find((e) => e.code === "measurement-amount");
	if (!t?.options?.length) return 0;
	let n = t.options.filter((e) => [
		"width",
		"height",
		"amount"
	].includes(e.code)).length;
	return Math.max(n - 1, 0);
}
function av(e, t, n, r, i, a, o) {
	let s = [...t];
	if (!e.some((e) => e.code === "measurement-amount") && t.some((e) => e.children.some((e) => ["width", "height"].includes(e.code)))) {
		let e = t.filter((e) => ["size", "amount"].includes(e.code));
		s = t.filter((e) => !["size", "amount"].includes(e.code));
		let n = {
			code: "measurement-amount",
			name: Z_("measurement_and_amount"),
			children: e.flatMap((e) => e.children),
			available: e.every((e) => e.available)
		};
		s.unshift(n);
	}
	let c = s.map((e) => {
		let t = e.code === "measurement-amount" || e.code === "amount" ? "simple" : "options", n = i?.find((t) => t.code === e.code)?.overwrites, a = rv(e.children, r, e.code, n?.options), { code: s } = e;
		return ["accessories-cross-sell", "accessories"].includes(s) && (s = "accessories", t = "options-multiple"), {
			code: s,
			title: n && n.title ? n.title : e.name,
			type: t,
			options: a,
			hidden: n && n.hide && !o
		};
	}), l = e.some((e) => e.code === "measurement-amount") || a, u = Math.max(iv(e), iv(c));
	return [...$_(e, n !== -1 && l ? Math.max(-1, n - u) : n), ...c];
}
function ov(e) {
	let t = Infinity, n;
	return e.forEach((e) => {
		let r = e.prices.purchase_rush_surcharge;
		r < t && (t = r, n = e);
	}), n;
}
function sv(e) {
	let t = null, n = Infinity;
	return e.forEach((e) => {
		let r = ov(e.deliveries), i = r.prices.purchase_rush_surcharge;
		i < n && (n = i, t = r);
	}), t;
}
function cv(e, t) {
	let n = sv(e), r = 0;
	return e.map((e, i) => {
		let a, o = ov(e.deliveries);
		return i === 0 && (a = {
			text: Z_("fastest"),
			color: "red"
		}), n && o.shipping_method_api_code === n.shipping_method_api_code && r === 0 && (a ||= {
			text: Z_("cheapest"),
			color: "green"
		}, r += 1), {
			date: tv(e.delivery_date, t),
			day: ev(e.delivery_date, t),
			cost: o.prices.purchase_rush_surcharge,
			label: a
		};
	});
}
function lv(e, t) {
	let n = e[0][`products_${t}`].toString(), r = sv(e);
	return {
		price: n,
		shipping: r.prices.purchase_shipping_price,
		packaging: r.prices.purchase_packaging_price,
		fullPrice: {
			price: e[0],
			shipping: r
		}
	};
}
//#endregion
//#region src/helpers/error.helper.js
function uv(e) {
	return e.includes("Can not find unique id for option") ? Z_("errors.invalid_or_duplicate") : e.includes("Restrictions are not met") ? Z_("errors.restrictions_not_met") : e === "Validation Failed" ? Z_("errors.invalid") : e.includes("Can not build valid path for tree") ? Z_("errors.invalidConfig") : Z_("errors.general");
}
//#endregion
//#region src/clients/client.js
var dv = class {
	constructor({ proxy: e, version: t }) {
		this.initialized = !1, this.proxy = e, this.version = t || "", this.repository = new L_({ proxy: e }), this.product = new V_({}), this.productInfo = {}, this.productConfig = new H_({}), this.address = new U_({}), this.openState = [], this.options = [], this.loading = !1, this.lastChangedIndex = -1, this.priceType = "purchase_price", this.deliveryOptions = [], this.language = "nl", this.prices = {}, this.canOrder = !1, this.alert = {}, this.upload = !1, this.uploaders = [], this.payload = {}, this.overwrites = [], this.calculationId = null, this.hideDeliverySection = !1, this.timeOut = null, this.isEditor = !1, this.hasMeasurementOverwrites = null, this.isRecalculating = !1;
	}
	async setProduct(e, t = !1) {
		return this.product.code = e, t && (this.loading = !0, this.productInfo = await this.repository.getProduct(e), this.loading = !1), this.productConfig.products = [this.product], this.deliveryOptions = [], this.hasMeasurementOverwrites = this.overwrites?.find((e) => this.product.code === e.code)?.overwrites?.steps?.find((e) => e.code === "measurement-amount")?.overwrites?.options?.some((e) => (e.code === "width" || e.code === "height") && z_(e.overwrites?.value)), this;
	}
	setPriceType(e, t = !1) {
		return this.priceType = t ? `${e}_incl_vat` : e, this;
	}
	setOption(e, t = !1) {
		let n = !1, r = t;
		this.lastChangedIndex = -1, e.options.forEach((e, t) => {
			Array.isArray(e) && e.length === 0 && (this.lastChangedIndex = t, n = !0);
		});
		let i = e.options.flat().map((e) => ({
			...e,
			value: typeof e.value == "number" && !Number.isInteger(e.value) ? e.value.toFixed(1) : e.value
		}));
		if (!r && this.canOrder && this.product.options.length && i.length) {
			let e = this.product.options.findIndex((e) => e.code === "amount"), t = i.findIndex((e) => e.code === "amount");
			e !== -1 && t !== -1 && this.product.options[e]?.value !== i[t]?.value && i.length === this.product.options.length && i.every((t, n) => {
				let r = this.product.options[n];
				return n === e ? r?.code === t.code : r?.code === t.code && r?.value === t.value;
			}) && (r = !0);
		}
		if (this.isRecalculating = r, i.length > 0 && !n) {
			let e = i.length === this.product.options.length && i.every((e, t) => e.code === this.product.options[t]?.code && e.value === this.product.options[t]?.value), t = i.some((e) => e.code === "amount"), n = i.find((e) => e.code === "amount")?.value === this.product.options.find((e) => e.code === "amount")?.value;
			if (e && this.options.length > 0 || t && n && i.length === 1) this.lastChangedIndex = i.findIndex((e) => e.code === "amount");
			else for (let e = this.product.options.length - 1; e >= 0; --e) if (this.product.options[e] && i[e] && (this.product.options[e].value && this.product.options[e].value !== i[e].value || this.product.options[e].code && this.product.options[e].code !== i[e].code)) {
				this.lastChangedIndex = this.product.options[e].code === "width" ? e + 2 : this.product.options[e].code === "height" ? e + 1 : e;
				break;
			}
		}
		if (r) this.product.options = i.filter((e) => e.code !== void 0);
		else {
			let e = this.product.options[this.lastChangedIndex]?.code === "amount" && this.hasMeasurementOverwrites, t = [
				"width",
				"height",
				"amount"
			].filter((e) => i.some((t) => t.code === e)).length, n = Math.max(t - 1, 0), r = e ? Math.max(-1, this.lastChangedIndex - n) : this.lastChangedIndex;
			this.product.options = $_(i, r);
		}
		if (this.product.options.some((e) => e.code === "no-option")) {
			this.setStatuses(!0), this.setOpenState(!0);
			let e = new Event(this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished");
			window.dispatchEvent(e);
		}
		function a(e) {
			let t = e[e.length - 1];
			return (t?.code === "height" || t?.code === "amount") && e.length >= 2 ? e : t;
		}
		let o = a(this.product.options);
		if (o && (Array.isArray(o) ? o.length > 0 : Object.keys(o).length > 0)) {
			let e = new CustomEvent(this.isEditor ? "connectConfiguratorEditor:option-selected" : "connectConfigurator:option-selected", { detail: JSON.parse(JSON.stringify(o)) });
			window.dispatchEvent(e);
		}
		return this;
	}
	async getNextOption() {
		let e = this.isRecalculating === !0;
		if (nv(this.options, this.product.options)) {
			this.loading = !0;
			let t = this.overwrites?.find((e) => e.code === this.product.code)?.overwrites?.steps;
			try {
				if (this.productConfig.language || (this.productConfig.language = this.language), this.hasMeasurementOverwrites) {
					let e = t?.find((e) => e.code === "measurement-amount")?.overwrites?.options?.filter((e) => z_(e.overwrites?.value));
					e?.length && this.product.options.some((e) => [
						"width",
						"height",
						"amount"
					].includes(e.code)) && e.forEach((e) => {
						this.product.options.some((t) => t.code === e.code) || this.product.options.push({
							code: e.code,
							value: e.overwrites.value
						});
					});
				}
				let n = {};
				try {
					this.payload = await this.repository.configureProduct(this.productConfig);
				} catch (e) {
					this.payload = e;
				}
				if (this.payload.status !== "ok" || typeof this.payload == "string") throw this.options[this.options.length - 1].status = "attention", this.options[this.options.length - 1].alert = {
					type: "error",
					title: uv(this.payload.message ? this.payload.message : this.payload)
				}, Error(this.payload.message || this.payload);
				if ([n] = this.payload.products, typeof n == "object" && n) {
					this.alert = {}, this.options[this.options.length - 1]?.alert && delete this.options[this.options.length - 1].alert;
					let r = n.available_options;
					if (e || (this.options = av(this.options, r, this.lastChangedIndex, this.priceType, t, this.hasMeasurementOverwrites, this.isEditor)), !e && this.overwrites.length > 0 && t && this.options.forEach((e) => {
						t.forEach(async (t) => {
							let n = this.product.options.some((e) => e.code === t.overwrites.selected) === !1 && z_(t.overwrites?.selected), r = t.overwrites?.options?.filter((e) => e.overwrites?.value) || [];
							this.product.options.forEach((e) => {
								let t = r.findIndex((t) => t.code === e.code);
								t !== -1 && r.splice(t, 1);
							});
							let i = this.getConfig();
							e.code === t.code && (n || r.length) && (n ? (t.overwrites.value ? i.options.push({
								code: t.overwrites.selected,
								value: t.overwrites.value
							}) : i.options.push({ code: t.overwrites.selected }), await (await this.setOption(i)).getNextOption()) : r.length && (this.options.splice(0, 1), r.forEach((e) => {
								i.options.push({
									code: e.code,
									value: e.overwrites.value
								});
							}), await (await this.setOption(i)).getNextOption()));
						});
					}), e || (this.setOpenState(), this.setStatuses()), n.can_order) {
						this.canOrder = !0, this.payload.calculation_id && (this.calculationId = this.payload.calculation_id), n.upload === !0 && (this.upload = !0, this.uploaders = n.uploaders);
						let e = new Event(this.isEditor ? "connectConfiguratorEditor:finished" : "connectConfigurator:finished");
						window.dispatchEvent(e);
					} else n.can_order === !1 && this.canOrder && (this.canOrder = !1);
					if (n.can_order && Object.keys(this.address).length && this.address.city) {
						let t = await this.getProductPrice();
						this.prices = lv(t, this.priceType), this.deliveryOptions = cv(t, this.language), e || this.setOpenState();
					} else !e && n.can_order && !this.address.city && !this.options.find((e) => e.code === "accessories") && this.setOpenState(!0);
				}
			} finally {
				this.loading = !1, e && (this.isRecalculating = !1);
			}
		}
	}
	setOpenState(e = !1) {
		this.openState = [], e ? this.options.forEach(() => {
			this.openState.push(!1);
		}) : (this.options.forEach(() => {
			this.openState.push(!1);
		}), this.openState[this.options.length - 1] = !0);
	}
	async getProductPrice() {
		let e = new W_({
			address: this.address,
			products: this.productConfig.products
		});
		this.loading = !0;
		let t = await this.repository.getPrice(e.getPayload());
		return this.calculationId = t.calculation_id, this.loading = !1, t.prices;
	}
	setAddress(e) {
		return this.address = new U_(e), this;
	}
	setLanguage(e) {
		return this.language = e, Q_(e), hd(e), this;
	}
	setStatuses(e) {
		let t = this.options.find((e) => e.code === "measurement-amount"), n = t && t.options && t.options.filter((e) => e.code === "height" || e.code === "width" || e.code === "amount").length - 1 || 0;
		this.hasMeasurementOverwrites && (n += 2), e ? this.options.forEach((e) => {
			e.status = "done";
		}) : this.options.forEach((e, t) => {
			this.product.options.length - n > t && (e.status = "done");
		});
	}
	getConfig() {
		let e = { ...this.product };
		if (e.options.length > 0) {
			let t = e.options.find((e) => e.code === "height"), n = e.options.find((e) => e.code === "width"), r = e.options.find((e) => e.code === "amount"), i = [...e.options];
			t && n && r ? i.splice(0, 3, [
				n,
				t,
				r
			]) : t && r ? i.splice(0, 2, [t, r]) : n && r && i.splice(0, 2, [n, r]);
			let a = this.options.find((e) => e.code === "accessories");
			if (a) {
				let e = a.options;
				if (e) {
					let t = [], n = null;
					i.forEach((r, i) => {
						r.code && e.some((e) => e.code === r.code) && (n ||= i, t.push(r));
					}), t.length > 1 && i.splice(n, t.length, t);
				}
			}
			e.options = i;
		}
		return e;
	}
	getUploaderData() {
		return JSON.parse(JSON.stringify(this.uploaders));
	}
	needsUpload() {
		return this.upload;
	}
	getRaw() {
		return JSON.parse(JSON.stringify(this.payload));
	}
	clear() {
		return this.product = new V_({}), this.productConfig = new H_({}), this.openState = [], this.options = [], this.lastChangedIndex = -1, this.deliveryOptions = [], this.canOrder = !1, this.updateExternal = !0, this.prices = {}, this.productInfo = {}, this;
	}
	setOverwrites(e) {
		return this.options.length === 0 ? this.overwrites = e : console.error("Overwrites can only be set on init"), this;
	}
	recalculate({ measurement: e, amount: t }) {
		let n = {};
		z_(t) && (n.amount = t), z_(e) && (n.width = e.width, n.height = e.height);
		let r = this.product.options.map((e) => e.code in n ? {
			...e,
			value: n[e.code]
		} : e);
		this.setOption({
			...this.product,
			options: r
		}, !0).getNextOption();
		let i = new Event(this.isEditor ? "connectConfiguratorEditor:recalculated" : "connectConfigurator:recalculated");
		window.dispatchEvent(i);
	}
}, fv = class extends dv {
	constructor({ proxy: e }) {
		super({ proxy: e }), this.products = [], this.searchBar = null, this.configuratorModal = null, this.selectedProduct = {}, this.updateExternal = !0, this.storeProductsLocally = !1, this.callbackUrl = null, this.buttonStartText = null;
	}
	init({ proxy: e = "/api", language: t = "nl", address: n, priceType: r, includeVat: i = !1, overwrites: a = [], storeProductsLocally: o = !1, callbackUrl: s, internalProductId: c, hideDeliverySection: l, buttonStartText: u }) {
		this.initialized = !0, this.proxy = e, this.repository = new L_({
			proxy: e,
			productId: c
		}), this.setLanguage(t), this.callbackUrl = s, n && this.setAddress(n), r && this.setPriceType(r, i), a.length && this.setOverwrites(a), o && (this.storeProductsLocally = o), l && (this.hideDeliverySection = l), u && (this.buttonStartText = u);
		let d = new CustomEvent(this.isEditor ? "connectConfiguratorEditor:ready" : "connectConfigurator:ready", { detail: this });
		return window.dispatchEvent(d), this;
	}
	async getProducts() {
		let e = await this.repository.getProducts(this.storeProductsLocally, this.internalProductId);
		this.products = this.overwrites.length ? e.filter((e) => !this.overwrites.some((t) => t.code === e.code && t.overwrites?.hide)) : e;
	}
	getResult() {
		return {
			excerpt: { ...this.getProductExcerpt() },
			configuration: this.getConfiguration()
		};
	}
	getConfiguration() {
		return JSON.parse(JSON.stringify(this.productConfig));
	}
	storeConfiguration(e, t = null) {
		let n = t || this.productConfig.products[0];
		n.customer_code = e;
		try {
			this.repository.storeConfiguration(n);
		} catch (e) {
			console.error(e);
		}
	}
	updateConfiguration(e, t = null) {
		let n = t || this.productConfig.products[0];
		n.customer_code = e;
		try {
			this.repository.updateConfiguration(n);
		} catch (e) {
			console.error(e);
		}
	}
	getProductExcerpt() {
		return this.prices.fullPrice?.deliveries && delete this.prices.fullPrice.deliveries, this.prices.fullPrice?.products && delete this.prices.fullPrice.products, {
			product: {
				description: `${this.product.options.find((e) => e.code === "amount").value}x ${this.selectedProduct && this.selectedProduct.translations && this.selectedProduct.translations[this.language] ? this.selectedProduct.translations[this.language]?.title : this.selectedProduct.translations?.nl.title || this.product.code} ${this.product.options.find((e) => e.code === "width")?.value}x${this.product.options.find((e) => e.code === "height")?.value}`,
				description_options: this.product.options.map((e) => e.value ? `${e.code}: ${e.value}` : `${e.code}`).join(", ")
			},
			...JSON.parse(this.prices?.fullPrice ? JSON.stringify(this.prices.fullPrice) : null)
		};
	}
	openConfigurator() {
		return this.configuratorModal?.showModal(), this;
	}
	closeConfigurator() {
		this.configuratorModal.close();
	}
	async openSearch() {
		this.searchBar && (this.searchBar.showModal(), this.products.length === 0 && (this.loading = !0, await this.getProducts(), this.loading = !1));
	}
	closeSearch() {
		return this.searchBar && this.searchBar.close(), this;
	}
	finish() {
		this.closeConfigurator(), this.updateExternal = !0;
	}
	async setFromPayload(e) {
		if (this.updateExternal = !1, !e) {
			console.error("No payload provided"), this.updateExternal = !0;
			return;
		}
		let t = e.products?.[0];
		if (!t) {
			console.error("No product found in payload"), this.updateExternal = !0;
			return;
		}
		let { options: n, code: r } = t, i = this, a = [];
		await this.setProduct(r, !0), e.deliveries && Object.keys(e.deliveries[0]?.address).length && this.setAddress(e.deliveries[0]?.address), this.openConfigurator();
		async function o(e) {
			if (!(e >= n.length + 1)) {
				try {
					await i.setOption({
						...i.product,
						options: [...a]
					}).getNextOption();
				} catch (e) {
					i.options[i.options.length - 1]?.alert || (i.alert = {
						type: "error",
						title: uv(e.message ? e.message : e)
					}), i.loading = !1, i.updateExternal = !0;
					return;
				}
				if (n[e]) {
					let t = e + 1;
					if (n[e].code === "width") {
						let r = n.slice(e, e + 3).filter(Boolean);
						a.push(...r), t = e + r.length;
					} else ["width", "height"].includes(n[e].code) || a.push(n[e]);
					await o(t);
				} else i.updateExternal = !0;
			}
		}
		n ? await o(0) : (console.error("No options found in payload"), this.updateExternal = !0);
	}
	async getUploaderSession(e = null) {
		let t = e || this.callbackUrl;
		if (!this.canOrder || !this.calculationId) throw Error("Can not fetch uploader session, no calculation id found");
		try {
			return await this.repository.getUploaderSession({
				callback_url: t,
				calculation_id: this.calculationId
			});
		} catch (e) {
			return console.error(e), e;
		}
	}
	getOverwrites() {
		return this.overwrites;
	}
}, pv = {
	__name: "PApiCombobox",
	props: {
		endpoint: {
			type: String,
			required: !0
		},
		modelValue: {
			type: [
				String,
				Number,
				Object
			],
			default: null
		},
		itemText: {
			type: [String, Function],
			default: null
		},
		filterKeys: {
			type: Array,
			default: () => []
		},
		required: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			default: ""
		},
		requestHeaders: {
			type: Object,
			default: () => ({})
		},
		additionalParams: {
			type: [String, URLSearchParams],
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N([]), a = /* @__PURE__ */ N(!1), o = /* @__PURE__ */ N(0), s = /* @__PURE__ */ N(-1), c = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(null);
		async function u() {
			if (o.value === s.value) return;
			a.value = !0, await l.value.scrollToBottom();
			let e = new URLSearchParams(n.additionalParams);
			e.set("page[number]", o.value + 1), c.value && (n.filterKeys.length > 0 ? n.filterKeys.forEach((t) => {
				e.set(`filter[${t}]`, c.value);
			}) : e.set(`filter[${n.itemText}]`, c.value));
			let { data: t, metadata: r } = await (await fetch(`${n.endpoint}?${e}`, { headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				...n.requestHeaders
			} })).json();
			a.value = !1, i.value = [...i.value, ...t], s.value = r.total_pages, o.value = r.page;
		}
		function d(e) {
			c.value !== e && (c.value = e, i.value = [], o.value = 0, s.value = -1, u());
		}
		return (t, n) => (B(), H(Xh, {
			id: `api-autocomplete-${e.endpoint}`,
			ref_key: "autocomplete",
			ref: l,
			serverside: "",
			loading: a.value,
			"model-value": e.modelValue,
			clearable: !e.required,
			"item-text": e.itemText,
			required: e.required,
			items: i.value,
			label: e.label,
			"onUpdate:modelValue": n[0] ||= (e) => r("update:modelValue", e),
			onIntersect: u,
			onSearch: d
		}, {
			inline: F(() => [L(t.$slots, "inline")]),
			option: F(({ option: e, selected: n }) => [L(t.$slots, "option", {
				option: e,
				selected: n
			})]),
			_: 3
		}, 8, [
			"id",
			"loading",
			"model-value",
			"clearable",
			"item-text",
			"required",
			"items",
			"label"
		]));
	}
};
//#endregion
//#region node_modules/@probodokkum/designsystem/dist/chunks/PElevatedSearch.BhdsE9VJ.js
function mv(e) {
	return Array.isArray ? Array.isArray(e) : wv(e) === "[object Array]";
}
function hv(e) {
	if (typeof e == "string") return e;
	if (typeof e == "bigint") return e.toString();
	let t = e + "";
	return t == "0" && 1 / e == -Infinity ? "-0" : t;
}
function gv(e) {
	return e == null ? "" : hv(e);
}
function _v(e) {
	return typeof e == "string";
}
function vv(e) {
	return typeof e == "number";
}
function yv(e) {
	return e === !0 || e === !1 || xv(e) && wv(e) == "[object Boolean]";
}
function bv(e) {
	return typeof e == "object";
}
function xv(e) {
	return bv(e) && e !== null;
}
function Sv(e) {
	return e != null;
}
function Cv(e) {
	return !e.trim().length;
}
function wv(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var Tv = "Extended search is not available", Ev = "Logical search is not available", Dv = "Token search is not available", Ov = "Incorrect 'index' type", kv = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", Av = (e) => `Invalid value for key ${e}`, jv = (e) => `Pattern length exceeds max of ${e}.`, Mv = (e) => `Missing ${e} property in key`, Nv = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Pv = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", Fv = Object.prototype.hasOwnProperty, Iv = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = Lv(e);
			this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
		}), this._keys.forEach((e) => {
			e.weight /= t;
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
};
function Lv(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (_v(e) || mv(e)) r = e, t = Rv(e), n = zv(e);
	else {
		if (!Fv.call(e, "name")) throw Error(Mv("name"));
		let o = e.name;
		if (r = o, Fv.call(e, "weight") && e.weight !== void 0 && (i = e.weight, i <= 0)) throw Error(Nv(zv(o)));
		t = Rv(o), n = zv(o), a = e.getFn ?? null;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function Rv(e) {
	return mv(e) ? e : e.split(".");
}
function zv(e) {
	return mv(e) ? e.join(".") : e;
}
function Bv(e, t) {
	let n = [], r = !1, i = (e, t, a, o) => {
		if (Sv(e)) {
			if (!t[a]) n.push(o === void 0 ? e : {
				v: e,
				i: o
			});
			else {
				let s = e[t[a]];
				if (!Sv(s)) return;
				if (a === t.length - 1 && (_v(s) || vv(s) || yv(s) || typeof s == "bigint")) n.push(o === void 0 ? gv(s) : {
					v: gv(s),
					i: o
				});
				else if (mv(s)) {
					r = !0;
					for (let e = 0, n = s.length; e < n; e += 1) i(s[e], t, a + 1, e);
				} else t.length && i(s, t, a + 1, o);
			}
		}
	};
	return i(e, _v(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var Vv = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, Hv = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Uv = {
	location: 0,
	threshold: .6,
	distance: 100
}, Wv = {
	useExtendedSearch: !1,
	useTokenSearch: !1,
	tokenize: void 0,
	tokenMatch: "any",
	getFn: Bv,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, $ = Object.freeze({
	...Hv,
	...Vv,
	...Uv,
	...Wv
});
function Gv(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 160;
}
function Kv(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = 0, a = !1;
			for (let e = 0; e < t.length; e++) Gv(t.charCodeAt(e)) ? a = !1 : a ||= (i++, !0);
			if (i === 0 && (i = 1), n.has(i)) return n.get(i);
			let o = Math.round(r / i ** (.5 * e)) / r;
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var qv = class {
	constructor({ getFn: e = $.getFn, fieldNormWeight: t = $.fieldNormWeight } = {}) {
		this.norm = Kv(t, 3), this.getFn = e, this.isCreated = !1, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
	}
	setSources(e = []) {
		this.docs = e;
	}
	setIndexRecords(e = []) {
		this.records = e;
	}
	setKeys(e = []) {
		this.keys = e, this._keysMap = {}, e.forEach((e, t) => {
			this._keysMap[e.id] = t;
		});
	}
	create() {
		if (this.isCreated || !this.docs.length) return;
		this.isCreated = !0;
		let e = this.docs.length;
		this.records = Array(e);
		let t = 0;
		if (_v(this.docs[0])) for (let n = 0; n < e; n++) {
			let e = this._createStringRecord(this.docs[n], n);
			e && (this.records[t++] = e);
		}
		else for (let n = 0; n < e; n++) this.records[t++] = this._createObjectRecord(this.docs[n], n);
		this.records.length = t, this.norm.clear();
	}
	add(e, t) {
		if (!Number.isInteger(t) || t < 0) throw Error(kv);
		if (_v(e)) {
			let n = this._createStringRecord(e, t);
			return n && this.records.push(n), n;
		}
		let n = this._createObjectRecord(e, t);
		return this.records.push(n), n;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0) throw Error(kv);
		for (let t = 0, n = this.records.length; t < n; t += 1) if (this.records[t].i === e) {
			this.records.splice(t, 1);
			break;
		}
		for (let t = 0, n = this.records.length; t < n; t += 1) this.records[t].i > e && --this.records[t].i;
	}
	removeAll(e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) Number.isInteger(n) && n >= 0 && t.add(n);
		if (t.size === 0) return;
		this.records = this.records.filter((e) => !t.has(e.i));
		let n = Array.from(t).sort((e, t) => e - t);
		for (let e of this.records) {
			let t = 0, r = n.length;
			for (; t < r;) {
				let i = t + r >>> 1;
				n[i] < e.i ? t = i + 1 : r = i;
			}
			e.i -= t;
		}
	}
	getValueForItemAtKeyId(e, t) {
		return e[this._keysMap[t]];
	}
	size() {
		return this.records.length;
	}
	_createStringRecord(e, t) {
		return !Sv(e) || Cv(e) ? null : {
			v: e,
			i: t,
			n: this.norm.get(e)
		};
	}
	_createObjectRecord(e, t) {
		let n = {
			i: t,
			$: {}
		};
		for (let t = 0, r = this.keys.length; t < r; t++) {
			let r = this.keys[t], i = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
			if (Sv(i)) {
				if (mv(i)) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t += 1) {
						let n = i[t];
						if (Sv(n)) {
							if (_v(n)) {
								if (!Cv(n)) {
									let r = {
										v: n,
										i: t,
										n: this.norm.get(n)
									};
									e.push(r);
								}
							} else if (Sv(n.v)) {
								let t = _v(n.v) ? n.v : gv(n.v);
								if (!Cv(t)) {
									let r = {
										v: t,
										i: n.i,
										n: this.norm.get(t)
									};
									e.push(r);
								}
							}
						}
					}
					n.$[t] = e;
				} else if (_v(i) && !Cv(i)) {
					let e = {
						v: i,
						n: this.norm.get(i)
					};
					n.$[t] = e;
				}
			}
		}
		return n;
	}
	toJSON() {
		return {
			keys: this.keys.map(({ getFn: e, ...t }) => t),
			records: this.records
		};
	}
};
function Jv(e, t, { getFn: n = $.getFn, fieldNormWeight: r = $.fieldNormWeight } = {}) {
	let i = new qv({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(Lv)), i.setSources(t), i.create(), i;
}
function Yv(e, { getFn: t = $.getFn, fieldNormWeight: n = $.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new qv({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Xv(e = [], t = $.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
function Zv(e, t, n, { location: r = $.location, distance: i = $.distance, threshold: a = $.threshold, findAllMatches: o = $.findAllMatches, minMatchCharLength: s = $.minMatchCharLength, includeMatches: c = $.includeMatches, ignoreLocation: l = $.ignoreLocation } = {}) {
	if (t.length > 32) throw Error(jv(32));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = (e, t) => {
		let n = e / u;
		if (l) return n;
		let r = Math.abs(f - t);
		return i ? n + r / i : r ? 1 : n;
	}, g = s > 1 || c, _ = g ? Array(d) : [], v;
	for (; (v = e.indexOf(t, m)) > -1;) {
		let e = h(0, v);
		if (p = Math.min(e, p), m = v + u, g) {
			let e = 0;
			for (; e < u;) _[v + e] = 1, e += 1;
		}
	}
	m = -1;
	let y = [], b = 1, x = 0, S = u + d, C = 1 << u - 1;
	for (let t = 0; t < u; t += 1) {
		let r = 0, i = S;
		for (; r < i;) h(t, f + i) <= p ? r = i : S = i, i = Math.floor((S - r) / 2 + r);
		S = i;
		let a = Math.max(1, f - i + 1), s = o ? d : Math.min(f + i, d) + u, c = Array(s + 2);
		c[s + 1] = (1 << t) - 1;
		for (let r = s; r >= a; --r) {
			let i = r - 1, o = n[e[i]];
			if (c[r] = (c[r + 1] << 1 | 1) & o, t && (c[r] |= (y[r + 1] | y[r]) << 1 | 1 | y[r + 1]), c[r] & C && (b = h(t, i), b <= p)) {
				if (p = b, m = i, x = t, m <= f) break;
				a = Math.max(1, 2 * f - m);
			}
		}
		if (h(t + 1, f) > p) break;
		y = c;
	}
	if (g && m >= 0) {
		let t = Math.min(d - 1, m + u - 1 + x);
		for (let r = m; r <= t; r += 1) n[e[r]] && (_[r] = 1);
	}
	let w = {
		isMatch: m >= 0,
		score: Math.max(.001, b)
	};
	if (g) {
		let e = Xv(_, s);
		e.length ? c && (w.indices = e) : w.isMatch = !1;
	}
	return w;
}
function Qv(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
function $v(e) {
	if (e.length <= 1) return e;
	e.sort((e, t) => e[0] - t[0] || e[1] - t[1]);
	let t = [e[0]];
	for (let n = 1, r = e.length; n < r; n += 1) {
		let r = t[t.length - 1], i = e[n];
		i[0] <= r[1] + 1 ? r[1] = Math.max(r[1], i[1]) : t.push(i);
	}
	return t;
}
var ey = {
	ł: "l",
	Ł: "L",
	đ: "d",
	Đ: "D",
	ø: "o",
	Ø: "O",
	ħ: "h",
	Ħ: "H",
	ŧ: "t",
	Ŧ: "T",
	ı: "i",
	ß: "ss"
}, ty = RegExp("[" + Object.keys(ey).join("") + "]", "g"), ny = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(ty, (e) => ey[e]) : (e) => e, ry = class {
	constructor(e, { location: t = $.location, threshold: n = $.threshold, distance: r = $.distance, includeMatches: i = $.includeMatches, findAllMatches: a = $.findAllMatches, minMatchCharLength: o = $.minMatchCharLength, isCaseSensitive: s = $.isCaseSensitive, ignoreDiacritics: c = $.ignoreDiacritics, ignoreLocation: l = $.ignoreLocation } = {}) {
		if (this.options = {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		}, e = s ? e : e.toLowerCase(), e = c ? ny(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: Qv(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > 32) {
			let e = 0, t = d % 32, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, 32), e), e += 32;
			if (t) {
				let e = d - 32;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? ny(e) : e, this.pattern === e) {
			if (e.length < this.options.minMatchCharLength) return {
				isMatch: !1,
				score: 1
			};
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Zv(e, t, n, {
				location: i + p,
				distance: a,
				threshold: o,
				findAllMatches: s,
				minMatchCharLength: c,
				includeMatches: r,
				ignoreLocation: l
			});
			m && (f = !0), d += h, m && g && u.push(...g);
		});
		let p = {
			isMatch: f,
			score: f ? d / this.chunks.length : 1
		};
		return f && r && (p.indices = $v(u)), p;
	}
}, iy = [];
function ay(...e) {
	iy.push(...e);
}
function oy(e, t) {
	for (let n = 0, r = iy.length; n < r; n += 1) {
		let r = iy[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new ry(e, t);
}
var sy = {
	AND: "$and",
	OR: "$or"
}, cy = {
	PATH: "$path",
	PATTERN: "$val"
}, ly = (e) => !!(e[sy.AND] || e[sy.OR]), uy = (e) => !!e[cy.PATH], dy = (e) => !mv(e) && bv(e) && !ly(e), fy = (e) => ({ [sy.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function py(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		if (_v(e)) {
			let r = {
				keyId: null,
				pattern: e
			};
			return n && (r.searcher = oy(e, t)), r;
		}
		let i = Object.keys(e), a = uy(e);
		if (!a && i.length > 1 && !ly(e)) return r(fy(e));
		if (dy(e)) {
			let r = a ? e[cy.PATH] : i[0], o = a ? e[cy.PATTERN] : e[r];
			if (!_v(o)) throw Error(Av(r));
			let s = {
				keyId: zv(r),
				pattern: o
			};
			return n && (s.searcher = oy(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			mv(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return ly(e) || (e = fy(e)), r(e);
}
function my(e, { ignoreFieldNorm: t = $.ignoreFieldNorm }) {
	let n = 1;
	return e.forEach(({ key: e, norm: r, score: i }) => {
		let a = e ? e.weight : null;
		n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
	}), n;
}
function hy(e, { ignoreFieldNorm: t = $.ignoreFieldNorm }) {
	e.forEach((e) => {
		e.score = my(e.matches, { ignoreFieldNorm: t });
	});
}
var gy = class {
	constructor(e, t) {
		this.limit = e, this.heap = [], this.comparator = t;
	}
	get size() {
		return this.heap.length;
	}
	insert(e) {
		this.size < this.limit ? (this.heap.push(e), this._bubbleUp(this.size - 1)) : this.comparator(e, this.heap[0]) < 0 && (this.heap[0] = e, this._sinkDown(0));
	}
	extractSorted() {
		return this.heap.sort(this.comparator);
	}
	_bubbleUp(e) {
		let t = this.heap;
		for (; e > 0;) {
			let n = e - 1 >> 1;
			if (this.comparator(t[e], t[n]) <= 0) break;
			let r = t[e];
			t[e] = t[n], t[n] = r, e = n;
		}
	}
	_sinkDown(e) {
		let t = this.heap, n = t.length, r = e;
		do {
			e = r;
			let i = 2 * e + 1, a = 2 * e + 2;
			if (i < n && this.comparator(t[i], t[r]) > 0 && (r = i), a < n && this.comparator(t[a], t[r]) > 0 && (r = a), r !== e) {
				let n = t[e];
				t[e] = t[r], t[r] = n;
			}
		} while (r !== e);
	}
};
function _y(e) {
	let t = [];
	return e.matches.forEach((e) => {
		if (!Sv(e.indices) || !e.indices.length) return;
		let n = {
			indices: e.indices,
			value: e.value
		};
		e.key && (n.key = e.key.id), e.idx > -1 && (n.refIndex = e.idx), t.push(n);
	}), t;
}
function vy(e, t, { includeMatches: n = $.includeMatches, includeScore: r = $.includeScore } = {}) {
	return e.map((e) => {
		let { idx: i } = e, a = {
			item: t[i],
			refIndex: i
		};
		return n && (a.matches = _y(e)), r && (a.score = e.score), a;
	});
}
var yy = /[\p{L}\p{M}\p{N}_]+/gu, by = /* @__PURE__ */ new WeakSet();
function xy(e) {
	by.has(e) || (by.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
}
function Sy(e) {
	if (typeof e == "function") {
		let t = !1;
		return (n) => {
			let r = e(n);
			if (!t && (t = !0, !Array.isArray(r) || r.some((e) => typeof e != "string"))) throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r) ? "array containing non-strings" : typeof r}.`);
			return r;
		};
	}
	return e instanceof RegExp ? (e.global || xy(e), (t) => t.match(e) || []) : (e) => e.match(yy) || [];
}
function Cy({ isCaseSensitive: e = !1, ignoreDiacritics: t = !1, tokenize: n } = {}) {
	let r = Sy(n);
	return { tokenize(n) {
		return e || (n = n.toLowerCase()), t && (n = ny(n)), r(n);
	} };
}
function wy(e, t, n, r) {
	let i = r.tokenize(t);
	if (!i.length) return;
	e.fieldCount++, e.docFieldCount.set(n, (e.docFieldCount.get(n) || 0) + 1);
	let a = new Set(i), o = e.docTermFieldHits.get(n);
	o || (o = /* @__PURE__ */ new Map(), e.docTermFieldHits.set(n, o));
	for (let t of a) o.set(t, (o.get(t) || 0) + 1), e.df.set(t, (e.df.get(t) || 0) + 1);
}
function Ty(e, t, n, r) {
	let { i, v: a, $: o } = t;
	if (a !== void 0) {
		wy(e, a, i, r);
		return;
	}
	if (o) for (let t = 0; t < n; t++) {
		let n = o[t];
		if (n) {
			if (Array.isArray(n)) for (let t of n) wy(e, t.v, i, r);
			else wy(e, n.v, i, r);
		}
	}
}
function Ey(e, t, n) {
	let r = {
		fieldCount: 0,
		df: /* @__PURE__ */ new Map(),
		docFieldCount: /* @__PURE__ */ new Map(),
		docTermFieldHits: /* @__PURE__ */ new Map()
	};
	for (let i of e) Ty(r, i, t, n);
	return r;
}
function Dy(e, t, n, r) {
	Ty(e, t, n, r);
}
function Oy(e, t) {
	let n = e.docFieldCount.get(t);
	if (n === void 0) return;
	e.fieldCount -= n, e.docFieldCount.delete(t);
	let r = e.docTermFieldHits.get(t);
	if (r) {
		for (let [t, n] of r) {
			let r = (e.df.get(t) || 0) - n;
			r <= 0 ? e.df.delete(t) : e.df.set(t, r);
		}
		e.docTermFieldHits.delete(t);
	}
}
function ky(e, t) {
	if (t.length === 0) return;
	let n = Array.from(new Set(t)).sort((e, t) => e - t);
	for (let t of n) Oy(e, t);
	let r = (e) => {
		let t = 0, r = n.length;
		for (; t < r;) {
			let i = t + r >>> 1;
			n[i] < e ? t = i + 1 : r = i;
		}
		return e - t;
	}, i = n[0], a = /* @__PURE__ */ new Map();
	for (let [t, n] of e.docFieldCount) a.set(t > i ? r(t) : t, n);
	e.docFieldCount = a;
	let o = /* @__PURE__ */ new Map();
	for (let [t, n] of e.docTermFieldHits) o.set(t > i ? r(t) : t, n);
	e.docTermFieldHits = o;
}
var Ay = class {
	constructor(e, t, n) {
		if (this.options = {
			...$,
			...t
		}, this.options.useExtendedSearch) throw Error(Tv);
		if (this.options.useTokenSearch) throw Error(Dv);
		this._keyStore = new Iv(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, n), this._lastQuery = null, this._lastSearcher = null;
	}
	_getSearcher(e) {
		if (this._lastQuery === e) return this._lastSearcher;
		let t = oy(e, this._invertedIndex ? {
			...this.options,
			_invertedIndex: this._invertedIndex
		} : this.options);
		return this._lastQuery = e, this._lastSearcher = t, t;
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof qv)) throw Error(Ov);
		if (this._myIndex = t || Jv(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		}), this.options.useTokenSearch) {
			let e = Cy({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			this._invertedIndex = Ey(this._myIndex.records, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	add(e) {
		if (!Sv(e)) return;
		this._docs.push(e);
		let t = this._myIndex.add(e, this._docs.length - 1);
		if (this._invertedIndex && t) {
			let e = Cy({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			Dy(this._invertedIndex, t, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	remove(e = () => !1) {
		let t = [], n = [];
		for (let r = 0, i = this._docs.length; r < i; r += 1) e(this._docs[r], r) && (t.push(this._docs[r]), n.push(r));
		if (n.length) {
			this._invertedIndex && ky(this._invertedIndex, n);
			let e = new Set(n);
			this._docs = this._docs.filter((t, n) => !e.has(n)), this._myIndex.removeAll(n), this._invalidateSearcherCache();
		}
		return t;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw Error(kv);
		this._invertedIndex && ky(this._invertedIndex, [e]);
		let t = this._docs.splice(e, 1)[0];
		return this._myIndex.removeAt(e), this._invalidateSearcherCache(), t;
	}
	_invalidateSearcherCache() {
		this._lastQuery = null, this._lastSearcher = null;
	}
	getIndex() {
		return this._myIndex;
	}
	_normalizedKeys() {
		return this._myIndex.keys.map((e) => this._keyStore.get(e.id) || e);
	}
	search(e, t) {
		let { limit: n = -1 } = t || {}, { includeMatches: r, includeScore: i, shouldSort: a, sortFn: o, ignoreFieldNorm: s } = this.options;
		if (_v(e) && !e.trim()) {
			let e = this._docs.map((e, t) => ({
				item: e,
				refIndex: t
			}));
			return vv(n) && n > -1 && (e = e.slice(0, n)), e;
		}
		let c = a && vv(n) && n > 0 && _v(e), l = o, u = (e, t) => l(e, t) || e.idx - t.idx, d;
		if (c) {
			let t = new gy(n, u);
			_v(this._docs[0]) ? this._searchStringList(e, {
				heap: t,
				ignoreFieldNorm: s
			}) : this._searchObjectList(e, {
				heap: t,
				ignoreFieldNorm: s
			}), d = t.extractSorted();
		} else d = _v(e) ? _v(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), hy(d, { ignoreFieldNorm: s }), a && d.sort(_v(e) ? u : l), vv(n) && n > -1 && (d = d.slice(0, n));
		return vy(d, this._docs, {
			includeMatches: r,
			includeScore: i
		});
	}
	_searchStringList(e, { heap: t, ignoreFieldNorm: n } = {}) {
		let r = this._getSearcher(e), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: a } = this._myIndex, o = t ? null : [];
		return a.forEach(({ v: e, i: a, n: s }) => {
			if (!Sv(e)) return;
			let c = r.searchIn(e);
			if (c.isMatch) {
				let r = {
					score: c.score,
					value: e,
					norm: s,
					indices: c.indices
				};
				i && (r.matchedMask = c.matchedMask, r.matchedTerms = c.matchedTerms, r.termCount = c.termCount);
				let l = [r];
				if (!i || this._coversAllTokens(l)) {
					let r = {
						item: e,
						idx: a,
						matches: l
					};
					t ? (r.score = my(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : o.push(r);
				}
			}
		}), o;
	}
	_searchLogical(e) {
		throw Error(Ev);
	}
	_searchObjectList(e, { heap: t, ignoreFieldNorm: n } = {}) {
		let r = this._getSearcher(e), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: a } = this._myIndex, o = this._normalizedKeys(), s = t ? null : [];
		return a.forEach(({ $: e, i: a }) => {
			if (!Sv(e)) return;
			let c = [], l = !1, u = !1;
			if (o.forEach((t, n) => {
				let i = this._findMatches({
					key: t,
					value: e[n],
					searcher: r
				});
				i.length ? (c.push(...i), i[0].hasInverse && (u = !0)) : l = !0;
			}), !(u && l) && c.length && (!i || this._coversAllTokens(c))) {
				let r = {
					idx: a,
					item: e,
					matches: c
				};
				t ? (r.score = my(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : s.push(r);
			}
		}), s;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!Sv(t)) return [];
		let r = [];
		if (mv(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!Sv(t)) return;
			let o = n.searchIn(t);
			if (o.isMatch) {
				let n = {
					score: o.score,
					key: e,
					value: t,
					idx: i,
					norm: a,
					indices: o.indices,
					hasInverse: o.hasInverse
				};
				o.termCount !== void 0 && (n.matchedMask = o.matchedMask, n.matchedTerms = o.matchedTerms, n.termCount = o.termCount), r.push(n);
			}
		});
		else {
			let { v: i, n: a } = t, o = n.searchIn(i);
			if (o.isMatch) {
				let t = {
					score: o.score,
					key: e,
					value: i,
					norm: a,
					indices: o.indices,
					hasInverse: o.hasInverse
				};
				o.termCount !== void 0 && (t.matchedMask = o.matchedMask, t.matchedTerms = o.matchedTerms, t.termCount = o.termCount), r.push(t);
			}
		}
		return r;
	}
	_coversAllTokens(e) {
		let t = e.length ? e[0].termCount : void 0;
		if (t === void 0) return !0;
		if (t <= 31) {
			let n = 0;
			for (let t = 0; t < e.length; t++) n |= e[t].matchedMask || 0;
			return n === 2 ** t - 1;
		}
		let n = /* @__PURE__ */ new Set();
		for (let t = 0; t < e.length; t++) {
			let r = e[t].matchedTerms;
			if (r) for (let e of r) n.add(e);
		}
		return n.size === t;
	}
};
Ay.version = "7.5.0", Ay.createIndex = Jv, Ay.parseIndex = Yv, Ay.config = $, Ay.match = function(e, t, n) {
	if (n && n.useTokenSearch) throw Error(Pv);
	return oy(e, {
		...$,
		...n
	}).searchIn(t);
}, Ay.parseQuery = py, Ay.use = function(...e) {
	e.forEach((e) => ay(e));
};
var jy = Ay, My = {
	class: "search-container",
	"data-testid": "search-input"
}, Ny = /*#__PURE__*/ Y({
	__name: "PElevatedSearch",
	props: {
		id: {
			type: String,
			required: !0
		},
		modelValue: {
			type: [
				String,
				Number,
				Array,
				Object
			],
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		items: {
			type: Array,
			default: () => []
		},
		searchKeys: {
			type: Array,
			default: () => []
		},
		searchOptions: {
			type: Object,
			default: () => ({})
		},
		itemText: {
			type: [
				String,
				Number,
				Function
			],
			default: ""
		},
		itemValue: {
			type: [String, Number],
			default: ""
		},
		show: Boolean,
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
		filterKeys: {
			type: Array,
			default: () => []
		},
		additionalParams: {
			type: [String, URLSearchParams],
			default: ""
		}
	},
	emits: [
		"update:modelValue",
		"close",
		"update:show"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = od()[r.hotkey.key], o = /* @__PURE__ */ N(null), { id: s, items: c, searchKeys: l, searchOptions: u, itemText: d, itemValue: f } = /* @__PURE__ */ yn(r), p = /* @__PURE__ */ Xt({
			...u.value,
			keys: [...l.value]
		}), m = /* @__PURE__ */ Xt(new jy(c.value, p));
		function h(e) {
			if (e?.item) {
				if (d.value.includes(".")) {
					let t = Nh(e.item, d.value);
					return B_(t) ? t : "";
				}
				return d.value ? e.item[d.value] : e.item;
			}
			if (e) {
				if (d.value.includes(".")) {
					let t = Nh(e, d.value);
					return B_(t) ? t : "";
				}
				return d.value ? e[d.value] : e;
			}
			return null;
		}
		function g(e) {
			return e?.item ? f.value.includes(".") ? Nh(e.item, f.value) : f.value ? e.item[f.value] : e.item : e ? f.value.includes(".") ? Nh(e, f.value) : f.value ? e[f.value] : e : null;
		}
		let _ = J({
			get() {
				return r.modelValue;
			},
			set(e) {
				i("update:modelValue", g(e));
			}
		}), v = /* @__PURE__ */ N(null), y = /* @__PURE__ */ N(null);
		function b() {
			y.value.showModal();
		}
		function x() {
			y.value.close();
		}
		let S = J(() => v.value && !r.endpoint ? m.search(v.value) : r.items), C = /* @__PURE__ */ Xt({
			id: s.value,
			serverside: !0,
			clearable: !0,
			prependIcon: Pd,
			placeholder: r.placeholder,
			large: !0,
			showDivider: !0,
			offset: 0
		}), w = J({
			get() {
				return r.show;
			},
			set(e) {
				i("update:show", e), e || i("close");
			}
		});
		return I(a, (e) => {
			e && r.hotkey && setTimeout(() => {
				o.value.select.input.focus();
			}, 100);
		}), Cr(() => {
			m = /* @__PURE__ */ Xt(new jy(c.value, p));
		}), t({
			showModal: b,
			close: x
		}), (t, n) => (B(), V("div", My, [W(rg, {
			ref_key: "modal",
			ref: y,
			modelValue: w.value,
			"onUpdate:modelValue": n[6] ||= (e) => w.value = e,
			"hide-header": "",
			"hide-footer": "",
			class: k({ "loader-modal": e.loading })
		}, {
			default: F(() => [e.loading ? (B(), H(fd, { key: 0 })) : !e.loading && e.endpoint ? (B(), H(pv, q({
				key: 1,
				ref_key: "search",
				ref: o,
				modelValue: _.value,
				"onUpdate:modelValue": n[1] ||= (e) => _.value = e,
				class: "search elevated"
			}, C, {
				"item-text": P(d),
				endpoint: e.endpoint,
				"filter-keys": e.filterKeys,
				"additional-params": e.additionalParams,
				onSearch: n[2] ||= (e) => v.value = e
			}), {
				inline: F(() => [W(X, {
					"data-testid": "close-button",
					variant: "text",
					class: "cancel",
					onClick: n[0] ||= (e) => {
						w.value = !1, _.value = null, v.value = null;
					}
				}, {
					default: F(() => [G(A(e.buttonText || P(Z)("input.cancel")), 1)]),
					_: 1
				})]),
				option: F(({ option: e, selected: n }) => [L(t.$slots, "option", {
					option: e.item || e,
					selected: n
				}, void 0, !0)]),
				_: 3
			}, 16, [
				"modelValue",
				"item-text",
				"endpoint",
				"filter-keys",
				"additional-params"
			])) : (B(), H(Xh, q({
				key: 2,
				ref_key: "search",
				ref: o,
				modelValue: _.value,
				"onUpdate:modelValue": n[4] ||= (e) => _.value = e,
				class: "search elevated"
			}, C, {
				"item-value": P(f),
				"item-text": h,
				items: S.value,
				onSearch: n[5] ||= (e) => v.value = e
			}), {
				inline: F(() => [W(X, {
					"data-testid": "close-button",
					variant: "text",
					class: "cancel",
					onClick: n[3] ||= (e) => {
						w.value = !1, _.value = null, v.value = null;
					}
				}, {
					default: F(() => [G(A(e.buttonText || P(Z)("input.cancel")), 1)]),
					_: 1
				})]),
				option: F(({ option: e, selected: n }) => [L(t.$slots, "option", {
					option: e.item || e,
					selected: n
				}, void 0, !0)]),
				_: 3
			}, 16, [
				"modelValue",
				"item-value",
				"items"
			]))]),
			_: 3
		}, 8, ["modelValue", "class"])]));
	}
}, [["__scopeId", "data-v-95758b60"]]), Py = /*#__PURE__*/ Y({
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
		let n = e, r = t, i = J({
			get: () => n.value,
			set: (e) => {
				r("update:model-value", e);
			}
		}), a = J(() => n.placeholder ? n.placeholder : Z("input.product_reference"));
		return (e, t) => (B(), H(mh, q({
			id: "reference-input",
			modelValue: i.value,
			"onUpdate:modelValue": t[0] ||= (e) => i.value = e,
			class: "reference-input",
			"data-testid": "reference-input",
			type: "text",
			icon: P(Ld),
			large: ""
		}, n, { placeholder: a.value }), null, 16, [
			"modelValue",
			"icon",
			"placeholder"
		]));
	}
}, [["__scopeId", "data-v-b34c7c35"]]), Fy = { class: "inner" }, Iy = {
	key: 0,
	class: "subtitle"
}, Ly = {
	key: 2,
	class: "reference"
}, Ry = { class: "value" }, zy = { class: "footer-wrapper" }, By = { class: "right" }, Vy = {
	key: 0,
	class: "sub-total"
}, Hy = {
	key: 0,
	class: "label"
}, Uy = { class: "decimal" }, Wy = { class: "sub-price" }, Gy = { class: "label" }, Ky = { class: "shipping" }, qy = { class: "sub-price" }, Jy = { class: "label" }, Yy = { class: "packaging" }, Xy = {
	key: 1,
	class: "excluded-from-price"
}, Zy = { class: "desktop" }, Qy = { class: "mobile" }, $y = /*#__PURE__*/ Y({
	__name: "PProductConfigModal",
	props: {
		product: {
			type: Object,
			required: !0
		},
		subTitle: {
			type: String,
			default: ""
		},
		subTitleIcon: {
			type: Function,
			default: Dd
		},
		submit: {
			type: String,
			default: ""
		},
		submitIcon: {
			type: Function,
			default: zd
		},
		priceSubtext: {
			type: String,
			default: "excl. packaging & shipping"
		},
		specs: {
			type: Boolean,
			default: !0
		},
		loading: {
			type: Boolean,
			default: !1
		},
		showMinimize: {
			type: Boolean,
			default: !0
		},
		extendedPricing: Boolean,
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
		"submit:product-config"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = si("submit-button"), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(null), c = /* @__PURE__ */ N(null), l = J(() => r.submit ? r.submit : Z("product-config-modal.add_to_cart")), u = J(() => r.submit ? r.submit : Z("product-config-modal.add")), d = J(() => r.priceSubtext ? r.priceSubtext : Z("product-config-modal.price_excluding")), f = J(() => Z("product-config-modal.reference")), p = J(() => {
			if (r.product && r.product.price) {
				let [e, t] = R_(r.product.price, r.lang, r.currency).toString().split(",");
				return t && (e = `${e},`), {
					whole: e,
					decimal: t
				};
			}
			return null;
		});
		function m() {
			c.value.showModal();
		}
		function h() {
			c.value.close();
		}
		return I(() => r.canOrder, async (e) => {
			e && (await Qn(), a.value.$el.focus());
		}), t({
			showModal: m,
			close: h
		}), (t, n) => (B(), H(rg, {
			ref_key: "modal",
			ref: c,
			class: "product-config-modal",
			fullscreen: "",
			"show-minimize": e.showMinimize,
			"data-testid": "product-config-modal",
			onMinimize: n[5] ||= (e) => o.value = e,
			onClose: n[6] ||= (e) => i("close")
		}, {
			header: F(() => [
				e.product.image ? (B(), H(e_, {
					key: 0,
					class: "product-image",
					mobile: e.product.imageMobile,
					tablet: e.product.imageTablet,
					image: e.product.image,
					width: o.value ? 88 : 136,
					rounded: 8,
					alt: `${e.product.title} image`
				}, null, 8, [
					"mobile",
					"tablet",
					"image",
					"width",
					"alt"
				])) : K("", !0),
				U("div", Fy, [
					W(dp, {
						level: "h2",
						class: "title"
					}, {
						default: F(() => [G(A(e.product.name), 1)]),
						_: 1
					}),
					!o.value && e.subTitle ? (B(), V("span", Iy, [W(Ud, { icon: e.subTitleIcon }, null, 8, ["icon"]), G(" " + A(e.subTitle), 1)])) : K("", !0),
					!o.value && e.showReferenceField ? (B(), H(Py, {
						key: 1,
						id: "reference",
						modelValue: s.value,
						"onUpdate:modelValue": [n[0] ||= (e) => s.value = e, n[1] ||= (e) => i("update:reference", e)]
					}, null, 8, ["modelValue"])) : o.value && s.value ? (B(), V("span", Ly, [G(A(f.value) + ": ", 1), U("span", Ry, A(s.value), 1)])) : K("", !0)
				]),
				!o.value && e.showReferenceField ? (B(), H(Py, {
					key: 1,
					id: "reference",
					modelValue: s.value,
					"onUpdate:modelValue": [n[2] ||= (e) => s.value = e, n[3] ||= (e) => i("update:reference", e)]
				}, null, 8, ["modelValue"])) : K("", !0)
			]),
			footer: F(() => [U("div", zy, [e.specs ? (B(), H(X, {
				key: 0,
				size: "large",
				variant: "secondary",
				class: "specifications"
			}, {
				default: F(() => [G(A(P(Z)("product-config-modal.specifications")), 1)]),
				_: 1
			})) : K("", !0), U("div", By, [p.value ? (B(), V("div", Vy, [U("span", { class: k(["price", { small: e.extendedPricing }]) }, [
				e.extendedPricing ? (B(), V("span", Hy, A(P(Z)("product-config-modal.total")), 1)) : K("", !0),
				U("span", null, A(p.value.whole), 1),
				U("span", Uy, A(p.value.decimal), 1)
			], 2), e.extendedPricing ? (B(), V(R, { key: 0 }, [U("span", Wy, [U("span", Gy, A(P(Z)("product-config-modal.shipping_costs")), 1), U("span", Ky, A(P(R_)(e.product.shipping, e.lang, e.currency)), 1)]), U("span", qy, [U("span", Jy, A(P(Z)("product-config-modal.packaging_costs")), 1), U("span", Yy, A(P(R_)(e.product.packaging, e.lang, e.currency)), 1)])], 64)) : (B(), V("span", Xy, A(d.value), 1))])) : K("", !0), W(X, {
				ref: "submit-button",
				disabled: !e.canOrder,
				class: "add-to-cart",
				size: "large",
				icon: e.submitIcon,
				onClick: n[4] ||= (e) => i("submit:product-config")
			}, {
				default: F(() => [U("span", Zy, A(l.value), 1), U("span", Qy, A(u.value), 1)]),
				_: 1
			}, 8, ["disabled", "icon"])])])]),
			default: F(() => [L(t.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["show-minimize"]));
	}
}, [["__scopeId", "data-v-27cea237"]]), eb = { class: "modal-container" }, tb = { class: "option" }, nb = { key: 0 }, rb = { class: "title" }, ib = {
	key: 0,
	class: "subtitle"
}, ab = { key: 1 }, ob = { class: "title" }, sb = {
	key: 0,
	class: "subtitle"
}, cb = {
	__name: "PProductModal",
	setup(e) {
		let t = /* @__PURE__ */ N(null), n = /* @__PURE__ */ N(null), r = /* @__PURE__ */ N(!1), i = /* @__PURE__ */ N(!1), a = /* @__PURE__ */ N({}), o = /* @__PURE__ */ N(""), s = J(() => ({
			name: a.value.productInfo && Object.keys(a.value.productInfo).length && a.value.productInfo.translations[a.value.language]?.title ? a.value.productInfo.translations[a.value.language].title : a.value.productInfo?.translations?.nl.title || a.value.productInfo?.code,
			image: a.value.productInfo?.images?.[0].url,
			...a.value.prices
		}));
		return I(o, async () => {
			o.value ? (a.value.selectedProduct = o.value, a.value.closeSearch(), a.value.openConfigurator(), await (await a.value.setProduct(o.value.code, !0)).getNextOption()) : o.value === "" && a.value.clear();
		}), Zi(() => {
			window.addEventListener("connectConfigurator:ready", (e) => {
				if (!e.detail.isEditor) {
					let r = e.detail;
					r.searchBar = t.value, r.configuratorModal = n.value, a.value = r;
				}
			});
		}), I(r, (e) => {
			e && (o.value.code || a.value.product.code) && a.value.clear();
		}), (e, c) => (B(), V("div", eb, [W(P(Ny), {
			id: "probo-product-search-bar",
			ref_key: "searchBar",
			ref: t,
			modelValue: o.value,
			"onUpdate:modelValue": c[0] ||= (e) => o.value = e,
			show: r.value,
			"onUpdate:show": c[1] ||= (e) => r.value = e,
			items: a.value.products,
			elevated: "",
			"search-keys": [
				"code",
				`translations.${a.value.language}.title`,
				`translations.${a.value.language}.description`
			],
			"item-text": `translations.${a.value.language}.title`,
			loading: a.value.loading
		}, {
			option: F(({ option: e }) => [U("span", tb, [e && e.translations[a.value.language] ? (B(), V("span", nb, [U("span", rb, A(e.translations[a.value.language].title), 1), e.translations[a.value.language].description ? (B(), V("span", ib, A(e.translations[a.value.language].description), 1)) : K("", !0)])) : e && e.translations.nl ? (B(), V("span", ab, [U("span", ob, A(e.translations.nl.title), 1), e.translations.nl.description ? (B(), V("span", sb, A(e.translations.nl.description), 1)) : K("", !0)])) : K("", !0)])]),
			_: 1
		}, 8, [
			"modelValue",
			"show",
			"items",
			"search-keys",
			"item-text",
			"loading"
		]), W(P($y), {
			ref_key: "configuratorModal",
			ref: n,
			modelValue: i.value,
			"onUpdate:modelValue": c[2] ||= (e) => i.value = e,
			product: s.value,
			"sub-title": a.value.productInfo?.translations?.[a.value.language]?.description || a.value.productInfo?.translations?.nl.description,
			specs: !1,
			"show-minimize": !1,
			"extended-pricing": "",
			submit: P(Z_)("complete"),
			"submit-icon": P(Dd),
			"can-order": a.value.canOrder,
			"onSubmit:productConfig": c[3] ||= (e) => a.value.finish(),
			onClose: c[4] ||= (e) => o.value = ""
		}, {
			default: F(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"modelValue",
			"product",
			"sub-title",
			"submit",
			"submit-icon",
			"can-order"
		])]));
	}
}, lb = { class: "container" }, ub = { key: 1 }, db = {
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
		let t = e, n = /* @__PURE__ */ Xt(new fv({ proxy: "" })), r = /* @__PURE__ */ N(null);
		I(n, () => {
			n.language && n.setLanguage(n.language);
		});
		let i = J({
			get: () => n.getConfig(),
			set: (e) => {
				r.value && clearTimeout(r.value), n.updateExternal && (r.value = setTimeout(() => {
					n.setOption(e).getNextOption();
				}, 300));
			}
		});
		function a(e) {
			n.recalculate(e);
		}
		function o() {
			let e = new Event(n.isEditor ? "connectConfiguratorEditor:started" : "connectConfigurator:started");
			window.dispatchEvent(e);
		}
		return Zi(async () => {
			window.connectConfigurator = n, t.proxy && (n.init({
				proxy: t.proxy,
				language: t.language,
				priceType: t.priceType,
				storeProductsLocally: t.storeProductsLocally,
				callbackUrl: t.callbackUrl,
				internalProductId: t.internalProductId,
				hideDeliverySection: t.hideDeliverySection,
				buttonStartText: t.buttonStartText
			}), t.productCode && await (await n.setProduct(t.productCode)).getNextOption());
		}), (t, r) => (B(), V("div", lb, [e.modal ? (B(), H(cb, {
			key: 0,
			part: "modal"
		}, {
			default: F(() => [n.alert.title ? (B(), H(P(Gg), be(q({ key: 0 }, n.alert)), null, 16)) : K("", !0), W(P(F_), {
				modelValue: i.value,
				"onUpdate:modelValue": r[0] ||= (e) => i.value = e,
				template: n.options,
				"accordion-state": n.openState,
				loading: n.loading,
				"delivery-options": n.deliveryOptions,
				"hide-delivery-section": n.hideDeliverySection,
				"button-start-text": n.buttonStartText,
				"can-order": n.canOrder,
				"disable-first-step-autofocus": e.disableFirstStepAutofocus,
				onRecalculate: a,
				"onConfiguration:started": o
			}, null, 8, [
				"modelValue",
				"template",
				"accordion-state",
				"loading",
				"delivery-options",
				"hide-delivery-section",
				"button-start-text",
				"can-order",
				"disable-first-step-autofocus"
			])]),
			_: 1
		})) : (B(), V("div", ub, [n.alert.title ? (B(), H(P(Gg), be(q({ key: 0 }, n.alert)), null, 16)) : K("", !0), W(P(F_), {
			modelValue: i.value,
			"onUpdate:modelValue": r[1] ||= (e) => i.value = e,
			template: n.options,
			"accordion-state": n.openState,
			loading: n.loading,
			"delivery-options": n.deliveryOptions,
			"hide-delivery-section": n.hideDeliverySection,
			"button-start-text": n.buttonStartText,
			"can-order": n.canOrder,
			"disable-first-step-autofocus": e.disableFirstStepAutofocus,
			onRecalculate: a,
			"onConfiguration:started": o
		}, null, 8, [
			"modelValue",
			"template",
			"accordion-state",
			"loading",
			"delivery-options",
			"hide-delivery-section",
			"button-start-text",
			"can-order",
			"disable-first-step-autofocus"
		])]))]));
	}
}, fb = ":root,:host{--font-sans:Inter, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-poppins:\"Poppins\", ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--animate-progress:progress 1s infinite linear;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-spin:spin 1s linear infinite;--animate-ping:ping 1s cubic-bezier(0, 0, .2, 1) infinite;--gradient-position:to bottom;--gradient-from:#0000;--gradient-from-position:0%;--gradient-to:#0000;--gradient-to-position:100%;--gradient-stops:var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position);--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--shadow-base:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000;--shadow-container:0 1px 3px #0000001a;--shadow-card-hover:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-menu:var(--shadow-base), 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-menu-large:var(--shadow-base), 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-floating-soft:0 4px 6px #0000001a;--shadow-page-header-overlap:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 12px 12px -16px #0003;--filter-shadow-tooltip:drop-shadow(0 2px 4px #0000003d);--filter-shadow-panel-top:drop-shadow(0 -1px 2px #0000001a) drop-shadow(0 -1px 1px #0000000f);--filter-shadow-panel-bottom:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);--color-primary:oklch(54.615% .2152 262.881);--color-primary-hover:oklch(48.82% .2172 264.376);--color-primary-active:oklch(57.034% .1951 261.584);--color-on-primary:oklch(100% 0 0);--color-accent:oklch(54.615% .2152 262.881);--color-accent-strong:oklch(48.82% .2172 264.376);--color-accent-soft:oklch(96.221% .019 240.333);--color-accent-soft-hover:oklch(93.192% .0316 255.585);--color-accent-soft-active:oklch(88.234% .0571 254.128);--color-on-accent:oklch(100% 0 0);--state-hover-overlay:oklch(0% 0 0/.08);--state-active-overlay:oklch(0% 0 0/.16);--color-surface-canvas:oklch(100% 0 0);--color-surface-page:oklch(100% 0 0);--color-surface-raised:oklch(100% 0 0);--color-surface-raised-alt:oklch(100% 0 0);--color-surface-subtle:oklch(100% 0 0);--color-surface-subtle-hover:oklch(98.477% .0017 247.838);--color-surface-subtle-active:oklch(92.48% .0027 264.541);--color-surface-disabled:oklch(96.65% .004 264.52);--color-surface-disabled-subtle:oklch(98.498% .0018 247.859);--color-control-track-off:oklch(92.48% .0027 264.541);--color-secondary:oklch(100% 0 0);--color-secondary-hover:oklch(98.477% .0017 247.838);--color-secondary-pressed:oklch(92.48% .0027 264.541);--color-secondary-border:oklch(86.277% .0063 264.565);--color-secondary-border-hover:oklch(73.455% .008 264.608);--color-tertiary:oklch(96.221% .019 240.333);--color-tertiary-hover:oklch(93.192% .0316 255.585);--color-tertiary-pressed:oklch(88.234% .0571 254.128);--color-tertiary-text:oklch(54.615% .2152 262.881);--color-parent-bg:oklch(100% 0 0);--color-child:oklch(100% 0 0);--color-soft:oklch(97% 0 0);--color-text-primary:oklch(21.049% .032 264.664);--color-text-secondary:oklch(55.1% .023 264.36);--color-text-disabled:oklch(51.786% .0108 264.705);--color-text-inverse:oklch(100% 0 0);--color-border-default:oklch(86.277% .0063 264.565);--color-border-strong:oklch(73.455% .008 264.608);--color-divider:oklch(92.48% .0027 264.541);--color-border-subtle:oklch(92.48% .0027 264.541);--color-field-background:oklch(100% 0 0);--color-field-border:oklch(86.277% .0063 264.565);--color-field-text:oklch(21.049% .032 264.664);--color-success:oklch(55.106% .1432 149.926);--color-success-fill:oklch(55.106% .1432 149.926);--color-success-fill-hover:oklch(52.73% .1371 150.069);--color-success-fill-active:oklch(39.253% .0896 152.535);--color-success-strong:oklch(39.253% .0896 152.535);--color-success-soft:oklch(98.135% .0124 149.917);--color-on-success:oklch(100% 0 0);--color-success-text:oklch(52.73% .1371 150.069);--color-warning:oklch(58.272% .162 45.983);--color-warning-hover:oklch(55.343% .1739 38.402);--color-warning-active:oklch(40.839% .1165 38.172);--color-warning-strong:oklch(40.839% .1165 38.172);--color-warning-soft:oklch(97.96% .0158 73.68);--color-on-warning:oklch(100% 0 0);--color-warning-text:oklch(55.343% .1739 38.402);--color-danger:oklch(61.535% .2075 25.224);--color-danger-fill:oklch(57.7% .245 27.325);--color-danger-fill-hover:oklch(50.5% .213 27.518);--color-danger-fill-active:oklch(39.329% .1242 24.368);--color-danger-strong:oklch(39.329% .1242 24.368);--color-danger-muted:oklch(80.8% .114 19.571);--color-danger-soft:oklch(97.053% .0129 17.38);--color-on-danger:oklch(100% 0 0);--color-danger-text:oklch(57.004% .2035 26.111);--color-info:oklch(62.31% .188 259.81);--color-info-strong:oklch(30.152% .1159 260.405);--color-info-soft:oklch(97.05% .0142 254.6);--color-info-text:oklch(48.82% .2172 264.38);--color-tag-info-soft-bg:oklch(93.192% .0316 255.585);--color-tag-info-soft-text:oklch(48.82% .2172 264.376);--color-tag-success-soft-bg:oklch(96.241% .0434 156.743);--color-tag-success-soft-text:oklch(52.73% .1371 150.069);--color-tag-neutral-soft-bg:oklch(96.696% .0029 264.542);--color-tag-neutral-soft-text:oklch(37.293% .0306 259.733);--color-tag-warning-orange-soft-bg:oklch(95.42% .0372 75.164);--color-tag-warning-orange-soft-text:oklch(55.343% .1739 38.402);--color-tag-accent-soft-bg:oklch(94.643% .0327 307.174);--color-tag-accent-soft-text:oklch(49.552% .2369 301.924);--color-tag-danger-soft-bg:oklch(93.564% .0309 17.717);--color-tag-danger-soft-text:oklch(50.542% .1905 27.518);--color-tag-warning-yellow-soft-bg:oklch(97.292% .0693 103.193);--color-tag-warning-yellow-soft-text:oklch(55.378% .1207 66.442);--color-tag-neutral-outline-border:oklch(92.758% .0058 264.531);--color-tag-neutral-outline-bg:oklch(100% 0 0);--color-tag-neutral-outline-text:oklch(20.463% 0 0);--color-tag-subtle-outline-border:oklch(37.293% .0306 259.733/.1);--color-tag-subtle-outline-bg:oklch(97.015% 0 0);--color-tag-subtle-outline-text:oklch(20.463% 0 0);--color-tag-warning-orange-outline-border:oklch(62.848% .1396 63.6/.1);--color-tag-warning-orange-outline-bg:oklch(97.962% .0158 73.684);--color-tag-warning-orange-outline-text:oklch(40.839% .1165 38.172);--color-tag-info-outline-border:oklch(53.296% .1901 259.956/.1);--color-tag-info-outline-bg:oklch(97.048% .0142 254.604);--color-tag-info-outline-text:oklch(37.906% .1378 265.522);--color-tag-success-outline-border:oklch(52.699% .1397 149.106/.1);--color-tag-success-outline-bg:oklch(98.193% .0181 155.826);--color-tag-success-outline-text:oklch(39.253% .0896 152.535);--color-tag-danger-outline-border:oklch(50.678% .1732 28.989/.1);--color-tag-danger-outline-bg:oklch(97.053% .0129 17.38);--color-tag-danger-outline-text:oklch(39.584% .1331 25.723);--color-tag-accent-outline-border:oklch(48.471% .2356 298.402/.1);--color-tag-accent-outline-bg:oklch(97.685% .0142 308.299);--color-tag-accent-outline-text:oklch(38.074% .1661 304.987);--color-tag-warning-yellow-outline-border:oklch(55.378% .1207 66.442/.1);--color-tag-warning-yellow-outline-bg:oklch(98.73% .0262 102.212);--color-tag-warning-yellow-outline-text:oklch(42.1% .0897 57.708);--color-overlay-backdrop:oklch(0% 0 0/.5)}.dark{--color-surface-canvas:oklch(19.5% .018 265);--color-surface-page:oklch(22% .02 265);--color-surface-raised:oklch(24.5% .02 265);--color-surface-raised-alt:oklch(28% .022 265);--color-surface-subtle:oklch(24.5% .02 265);--color-surface-subtle-hover:oklch(28% .022 265);--color-surface-subtle-active:oklch(32% .024 265);--color-surface-disabled:oklch(22% .016 265);--color-surface-disabled-subtle:oklch(24.5% .02 265);--color-control-track-off:oklch(32% .024 265);--color-text-primary:oklch(95% .004 255);--color-text-secondary:oklch(72% .012 260);--color-text-disabled:oklch(63% .012 264);--color-text-inverse:oklch(17% .02 265);--color-border-default:oklch(38% .022 265);--color-border-strong:oklch(50% .028 265);--color-divider:oklch(36% .02 265);--color-border-subtle:oklch(30% .018 265);--color-secondary:oklch(28% .022 265);--color-secondary-hover:oklch(32% .024 265);--color-secondary-pressed:oklch(36% .026 265);--color-secondary-border:oklch(40% .022 265);--color-secondary-border-hover:oklch(55% .02 265);--color-tertiary:oklch(71% .15 254/.14);--color-tertiary-hover:oklch(71% .15 254/.2);--color-tertiary-pressed:oklch(71% .15 254/.26);--color-tertiary-text:oklch(78% .11 254);--color-parent-bg:oklch(22% .02 265);--color-child:oklch(25% .02 265);--color-soft:oklch(30% .02 265);--color-primary:oklch(57% .21 263);--color-primary-hover:oklch(62% .21 263);--color-primary-active:oklch(68% .2 263);--color-on-primary:oklch(100% 0 0);--color-accent:oklch(72% .14 254);--color-accent-strong:oklch(78% .11 254);--color-accent-soft:oklch(71% .15 254/.12);--color-accent-soft-hover:oklch(71% .15 254/.18);--color-accent-soft-active:oklch(71% .15 254/.24);--color-on-accent:oklch(100% 0 0);--state-hover-overlay:oklch(100% 0 0/.07);--state-active-overlay:oklch(100% 0 0/.13);--color-field-background:oklch(24% .02 265);--color-field-border:oklch(40% .022 265);--color-field-text:oklch(95% .004 255);--color-success:oklch(70% .175 150);--color-success-fill:oklch(55% .155 150);--color-success-fill-hover:oklch(66% .165 150);--color-success-fill-active:oklch(70% .175 150);--color-success-strong:oklch(85% .135 152);--color-success-soft:oklch(70% .17 150/.14);--color-success-text:oklch(84% .145 152);--color-on-success:oklch(100% 0 0);--color-warning:oklch(78% .175 70);--color-warning-hover:oklch(73% .18 63);--color-warning-active:oklch(68% .17 58);--color-warning-strong:oklch(88% .135 90);--color-warning-soft:oklch(78% .175 70/.14);--color-warning-text:oklch(86% .145 85);--color-on-warning:oklch(17% .02 265);--color-danger:oklch(68% .215 25);--color-danger-fill:oklch(59% .23 25);--color-danger-fill-hover:oklch(68% .215 25);--color-danger-fill-active:oklch(74% .18 25);--color-danger-strong:oklch(82% .115 20);--color-danger-muted:oklch(74% .13 22);--color-danger-soft:oklch(68% .22 25/.15);--color-danger-text:oklch(82% .115 20);--color-on-danger:oklch(100% 0 0);--color-info:oklch(75% .12 220);--color-info-strong:oklch(88% .08 240);--color-info-soft:oklch(72% .14 230/.14);--color-info-text:oklch(85% .1 230);--color-tag-info-soft-bg:oklch(71% .15 254/.14);--color-tag-info-soft-text:oklch(82% .095 254);--color-tag-success-soft-bg:oklch(72% .19 151/.13);--color-tag-success-soft-text:oklch(86% .135 152);--color-tag-neutral-soft-bg:oklch(90% 0 0/.1);--color-tag-neutral-soft-text:oklch(85% .006 264);--color-tag-warning-orange-soft-bg:oklch(75% .16 56/.15);--color-tag-warning-orange-soft-text:oklch(85% .12 66);--color-tag-accent-soft-bg:oklch(72% .18 306/.14);--color-tag-accent-soft-text:oklch(84% .11 306);--color-tag-danger-soft-bg:oklch(70% .17 22/.15);--color-tag-danger-soft-text:oklch(82% .105 20);--color-tag-warning-yellow-soft-bg:oklch(86% .17 92/.15);--color-tag-warning-yellow-soft-text:oklch(91% .165 98);--color-tag-neutral-outline-border:oklch(40% .022 265);--color-tag-neutral-outline-bg:oklch(28% .022 265);--color-tag-neutral-outline-text:oklch(90% .004 255);--color-tag-subtle-outline-border:oklch(90% 0 0/.12);--color-tag-subtle-outline-bg:oklch(26% .02 265);--color-tag-subtle-outline-text:oklch(90% .004 255);--shadow-container:0 1px 2px #0000004d, 0 1px 3px #00000040;--shadow-card-hover:0 2px 4px #00000059, 0 1px 2px -1px #00000040;--shadow-menu:0 2px 4px #0000004d, 0 1px 3px #00000040;--shadow-menu-large:0 14px 28px -6px #00000080, 0 6px 10px -4px #00000059;--shadow-floating-soft:0 8px 16px #0006;--shadow-page-header-overlap:0 14px 14px -16px #00000080;--shadow-content-surface:0 1px 2px #0000004d, 0 1px 3px #0003;--color-overlay-backdrop:oklch(0% 0 0/.72)}@media (prefers-reduced-transparency:reduce){.dark{--color-tag-info-soft-bg:oklch(32% .05 254);--color-tag-success-soft-bg:oklch(31% .04 151);--color-tag-neutral-soft-bg:oklch(32% .008 264);--color-tag-warning-orange-soft-bg:oklch(33% .05 56);--color-tag-accent-soft-bg:oklch(32% .05 306);--color-tag-danger-soft-bg:oklch(32% .05 22);--color-tag-warning-yellow-soft-bg:oklch(34% .05 92);--color-tertiary:oklch(33% .05 254);--color-tertiary-hover:oklch(37% .06 254);--color-tertiary-pressed:oklch(41% .07 254);--color-accent-soft:oklch(32% .045 254);--state-hover-overlay:oklch(30% .02 265);--state-active-overlay:oklch(34% .024 265)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}@keyframes progress{0%{transform:translate(0)scaleX(0)}40%{transform:translate(0)scaleX(.4)}to{transform:translate(100%)scaleX(.5)}}@keyframes pulse{50%{opacity:.5}}html{font-size:16px;line-height:1.5rem}*,:after,:before,::backdrop{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));margin:0;padding:0}::file-selector-button{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));margin:0;padding:0}button,input,optgroup,select,textarea{font:inherit;letter-spacing:inherit;color:inherit}:where(a){color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}:where(a:visited){color:inherit}.sr-only{clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}code,kbd,samp,pre{font-feature-settings:normal;font-variation-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%;line-height:1.5}img,svg{display:block}table{border-collapse:collapse;border-spacing:0}ol,ul{list-style:none}body{font-family:var(--font-sans);background-color:var(--color-surface-canvas,oklch(100% 0 0));color:var(--color-text-primary,oklch(21.049% .032 264.664));margin:0}*,:after,:before,::backdrop{border-color:var(--color-border-default,oklch(86.277% .0063 264.565))}::file-selector-button{border-color:var(--color-border-default,oklch(86.277% .0063 264.565))}button:not(:disabled),[role=button]:not(:disabled){cursor:pointer}body{background-color:var(--color-surface-canvas,oklch(100% 0 0));color:var(--color-text-primary,oklch(21.049% .032 264.664))}.dark ::selection{color:var(--color-text-primary,oklch(95% .004 255));background-color:oklch(72% .14 254/.35)}:focus-visible{outline:2px solid var(--color-primary,oklch(54.615% .2152 262.881));outline-offset:2px}@media (forced-colors:active){.button,.filter-row .chip,.nav-item,input,select,textarea{forced-color-adjust:none;color:canvastext;background:canvas;border:1px solid canvastext}.button.primary,.button.danger,.button.success{color:highlighttext;background:highlight}:focus-visible{outline-offset:2px;outline:2px solid highlight}}.icon[data-v-0d12ef98]{flex-shrink:0;width:1.5rem;height:1.5rem;display:flex}.action-button[data-v-4ce2ffa6]{cursor:pointer;background-color:var(--color-primary,oklch(54.615% .2152 262.881));-webkit-user-select:none;user-select:none;border-style:none;border-radius:50%;outline-style:none;justify-content:center;align-items:center;width:3.5rem;height:3.5rem;margin:0;padding:0;display:inline-flex;position:relative}@media (forced-colors:active){.action-button[data-v-4ce2ffa6]{outline-offset:2px;outline:2px solid #0000}}@media (hover:hover){.action-button[data-v-4ce2ffa6]:hover{background-color:var(--color-primary-hover,oklch(48.82% .2172 264.376))}}.action-button[data-v-4ce2ffa6]:focus{background-color:var(--color-primary-hover,oklch(48.82% .2172 264.376))}.action-button[data-v-4ce2ffa6]:active{background-color:var(--color-primary-active,oklch(57.034% .1951 261.584))}.action-button[disabled][data-v-4ce2ffa6]{pointer-events:none;background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52))}.action-button[disabled] .icon[data-v-4ce2ffa6]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.action-button.floating[data-v-4ce2ffa6]{z-index:50;box-shadow:var(--shadow-menu-large);margin-bottom:1.5rem;margin-right:1.5rem;position:fixed;bottom:0;right:0}.action-button .icon[data-v-4ce2ffa6]{color:var(--color-on-primary,oklch(100% 0 0))}.mini-icon[data-v-83781390]{flex-shrink:0;width:1.25rem;height:1.25rem;display:flex}.hotkey[data-v-a6d96a76]{width:fit-content;min-width:1.25rem;height:1.25rem;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));font-weight:var(--font-weight-medium,500);border-style:solid;border-width:1px;border-radius:.25rem;justify-content:center;align-items:center;padding-inline:.25rem;display:flex}.hotkey.disabled[data-v-a6d96a76]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.hotkey.primary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb, var(--color-on-accent,oklch(100% 0 0)) 50%, transparent);background-color:color-mix(in srgb, var(--color-on-accent,oklch(100% 0 0)) 15%, transparent);color:var(--color-on-accent,oklch(100% 0 0))}.hotkey.secondary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb, var(--color-text-primary,oklch(21.049% .032 264.664)) 15%, transparent);background-color:color-mix(in srgb, var(--color-text-primary,oklch(21.049% .032 264.664)) 3%, transparent);color:var(--color-field-text,oklch(21.049% .032 264.664))}.hotkey.tertiary-hotkey[data-v-a6d96a76]{border-color:color-mix(in srgb, var(--color-accent,oklch(54.615% .2152 262.881)) 30%, transparent);background-color:color-mix(in srgb, var(--color-accent,oklch(54.615% .2152 262.881)) 6%, transparent);color:var(--color-accent-strong,oklch(48.82% .2172 264.376))}.loader[data-v-26a513f6]{animation:var(--animate-spin);border-width:.1875rem;border-radius:100%;width:1.5rem;height:1.5rem}.loader.primary-loader[data-v-26a513f6]{border-color:var(--color-accent-soft,oklch(96.221% .019 240.333));border-top-color:var(--color-accent,oklch(54.615% .2152 262.881))}.loader.secondary-loader[data-v-26a513f6]{border-color:color-mix(in oklab, var(--color-text-inverse,oklch(100% 0 0)) 40%, transparent);border-top-color:var(--color-text-inverse,oklch(100% 0 0))}.loader.inherit-loader[data-v-26a513f6]{border-color:color-mix(in oklab, currentColor 40%, transparent);border-top-color:currentColor}.loader.small-loader[data-v-26a513f6]{width:1.25rem;height:1.25rem}.loader.large-loader[data-v-26a513f6]{width:1.75rem;height:1.75rem}.button[data-v-b15862b6]{appearance:none;-webkit-user-select:none;user-select:none;height:2.5rem;color:var(--color-text-primary,oklch(21.049% .032 264.664));cursor:pointer;background-color:#0000;border:0;border-radius:.5rem;justify-content:center;align-items:center;gap:.5rem;padding:0 .75rem;font-size:.875rem;font-weight:500;line-height:1.25rem;display:flex}.button .default-loader[data-v-b15862b6],.button .small-loader[data-v-b15862b6]{width:1.3rem;height:1.3rem}.button .large-loader[data-v-b15862b6]{width:1.5rem;height:1.5rem}.button[data-v-b15862b6]:disabled{cursor:not-allowed;background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52))!important;color:var(--color-text-disabled,oklch(51.786% .0108 264.705))!important}.button.primary[data-v-b15862b6]:focus-visible,.button.danger[data-v-b15862b6]:focus-visible,.button.success[data-v-b15862b6]:focus-visible{outline-color:var(--color-text-primary,oklch(21.049% .032 264.664));box-shadow:0 0 0 4px color-mix(in oklch, var(--color-primary,oklch(54.615% .2152 262.881)) 35%, transparent)}.button.primary[data-v-b15862b6]{color:var(--color-on-primary,oklch(100% 0 0));background-color:var(--color-primary,oklch(54.615% .2152 262.881))}.button.primary[data-v-b15862b6]:not(:disabled):hover{background-color:var(--color-primary-hover,oklch(48.82% .2172 264.376))}.button.primary[data-v-b15862b6]:not(:disabled):active{background-color:var(--color-primary-active,oklch(57.034% .1951 261.584))}.button.secondary[data-v-b15862b6]{background-color:var(--color-secondary,oklch(100% 0 0));border:1px solid var(--color-secondary-border,oklch(86.277% .0063 264.565));color:var(--color-text-primary,oklch(21.049% .032 264.664))}.button.secondary[data-v-b15862b6]:not(:disabled):hover{background-color:var(--color-secondary-hover,oklch(98.477% .0017 247.838));border-color:var(--color-secondary-border-hover,oklch(73.455% .008 264.608))}.button.secondary[data-v-b15862b6]:not(:disabled):active{background-color:var(--color-secondary-pressed,oklch(92.48% .0027 264.541))}.button.secondary[data-v-b15862b6]:disabled{border-color:var(--color-surface-disabled,oklch(96.65% .004 264.52))}.button.tertiary[data-v-b15862b6]{background-color:var(--color-tertiary,oklch(96.221% .019 240.333));color:var(--color-tertiary-text,oklch(54.615% .2152 262.881))}.button.tertiary[data-v-b15862b6]:not(:disabled):hover{background-color:var(--color-tertiary-hover,oklch(93.192% .0316 255.585))}.button.tertiary[data-v-b15862b6]:not(:disabled):active{background-color:var(--color-tertiary-pressed,oklch(88.234% .0571 254.128))}.button.text[data-v-b15862b6]:not(:disabled):hover{background-color:var(--state-hover-overlay)}.button.text[data-v-b15862b6]:not(:disabled):active{background-color:var(--state-active-overlay)}.button.danger[data-v-b15862b6]{background-color:var(--color-danger-fill,oklch(57.7% .245 27.325));color:var(--color-on-danger,oklch(100% 0 0))}.button.danger[data-v-b15862b6]:not(:disabled):hover{background-color:var(--color-danger-fill-hover,oklch(50.5% .213 27.518))}.button.danger[data-v-b15862b6]:not(:disabled):active{background-color:var(--color-danger-fill-active,oklch(39.329% .1242 24.368))}.button.success[data-v-b15862b6]{background-color:var(--color-success-fill,oklch(55.106% .1432 149.926));color:var(--color-on-success,oklch(100% 0 0))}.button.success[data-v-b15862b6]:not(:disabled):hover{background-color:var(--color-success-fill-hover,oklch(52.73% .1371 150.069))}.button.success[data-v-b15862b6]:not(:disabled):active{background-color:var(--color-success-fill-active,oklch(39.253% .0896 152.535))}.button.warning[data-v-b15862b6]{background-color:var(--color-warning,oklch(70.49% .1867 47.6));color:var(--color-on-warning,oklch(100% 0 0))}.button.warning[data-v-b15862b6]:not(:disabled):hover{background-color:var(--color-warning-hover,oklch(55.343% .1739 38.402))}.button.warning[data-v-b15862b6]:not(:disabled):active{background-color:var(--color-warning-active,oklch(40.839% .1165 38.172))}.button.url[data-v-b15862b6]{color:var(--color-accent,oklch(54.615% .2152 262.881));background-color:#0000;gap:.25rem;height:1.25rem;padding:0}.button.url[data-v-b15862b6]:hover{text-decoration:underline}.button.default.has-icon[data-v-b15862b6]{padding:.625rem}.button.default .mini-icon[data-v-b15862b6]{width:1.25rem;height:1.25rem}.button.default[data-v-b15862b6] .mini-icon svg{stroke-width:1.75px}.button.small[data-v-b15862b6]{height:2rem;padding:0 .75rem}.button.small.has-icon[data-v-b15862b6]{border-radius:9999px;width:2rem}.button.small .mini-icon[data-v-b15862b6]{width:1rem;height:1rem}.button.small[data-v-b15862b6] .mini-icon svg{stroke-width:2px}.button.medium[data-v-b15862b6]{height:3rem;padding:0 1rem;font-size:1rem;line-height:1.5rem}.button.medium .mini-icon[data-v-b15862b6]{width:1.5rem;height:1.5rem}.button.medium.has-icon[data-v-b15862b6]{padding:.75rem}.button.large[data-v-b15862b6]{height:3.5rem;padding:0 1.75rem;font-size:1rem;line-height:1.5rem}.button.large .mini-icon[data-v-b15862b6]{width:1.5rem;height:1.5rem}.button.large.has-icon[data-v-b15862b6]{padding:1.25rem}.hotkey[data-v-b15862b6]{margin-left:.25rem}.micro-icon[data-v-1e1a14be]{flex-shrink:0;width:1rem;height:1rem;display:flex}.v-enter-active[data-v-ed45de91]{transition:opacity .1s ease-out,transform .1s ease-out}.v-enter-from[data-v-ed45de91]{opacity:0;transform:scale(.95)}.v-enter-to[data-v-ed45de91]{opacity:1;transform:scale(1)}.v-leave-active[data-v-ed45de91]{transition:opacity 75ms ease-out,transform 75ms ease-out}.v-leave-from[data-v-ed45de91]{opacity:1;transform:scale(1)}.v-leave-to[data-v-ed45de91]{opacity:0;transform:scale(.95)}.expand-top-enter-active[data-v-42701d92],.expand-bottom-enter-active[data-v-42701d92],.expand-left-enter-active[data-v-42701d92],.expand-right-enter-active[data-v-42701d92],.expand-top-leave-active[data-v-42701d92],.expand-bottom-leave-active[data-v-42701d92],.expand-left-leave-active[data-v-42701d92],.expand-right-leave-active[data-v-42701d92]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--default-transition-timing-function);transition-duration:.15s;transform:translateZ(0)}.expand-top-enter-from[data-v-42701d92]{opacity:0;translate:0 50%;scale:1 0}.expand-top-enter-to[data-v-42701d92],.expand-top-leave-from[data-v-42701d92]{opacity:1;translate:0;scale:1}.expand-top-leave-to[data-v-42701d92]{opacity:0;translate:0 50%;scale:1 0}.expand-bottom-enter-from[data-v-42701d92]{opacity:0;translate:0 -50%;scale:1 0}.expand-bottom-enter-to[data-v-42701d92],.expand-bottom-leave-from[data-v-42701d92]{opacity:1;translate:0;scale:1}.expand-bottom-leave-to[data-v-42701d92]{opacity:0;translate:0 -50%;scale:1 0}.expand-left-enter-from[data-v-42701d92]{opacity:0;translate:50%;scale:0 1}.expand-left-enter-to[data-v-42701d92],.expand-left-leave-from[data-v-42701d92]{opacity:1;translate:0;scale:1}.expand-left-leave-to[data-v-42701d92]{opacity:0;translate:50%;scale:0 1}.expand-right-enter-from[data-v-42701d92]{opacity:0;translate:-50%;scale:0 1}.expand-right-enter-to[data-v-42701d92],.expand-right-leave-from[data-v-42701d92]{opacity:1;translate:0;scale:1}.expand-right-leave-to[data-v-42701d92]{opacity:0;translate:-50%;scale:0 1}.floating-container-overlay-container[data-v-7bb9c58b]{pointer-events:none;contain:layout;display:contents;position:absolute;top:0;left:0}.floating-container-overlay-container .floating-container-overlay[data-v-7bb9c58b]{pointer-events:none;display:flex;position:absolute;inset:0}.floating-container-overlay-container .floating-container-overlay .floating-container-content[data-v-7bb9c58b]{pointer-events:auto;visibility:hidden;background-color:#0000;width:max-content;height:max-content;margin:0;padding:0;position:absolute;overflow:visible}.tooltip-wrapper[data-v-5016fba7]{display:contents}.tooltip[data-v-5016fba7]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-surface-raised,oklch(100% 0 0));font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));word-break:break-all;color:var(--color-text-primary,oklch(21.049% .032 264.664));filter:var(--filter-shadow-tooltip);justify-content:center;padding-block:.5rem;padding-inline:1rem;display:flex;position:relative}.tooltip[data-v-5016fba7]:before{content:\"\";border:8px solid #0000;width:0;display:block;position:absolute}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]{margin-bottom:.5rem}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top)[data-v-5016fba7]:before{content:\"\";border-top-color:var(--color-surface-raised,oklch(100% 0 0));border-bottom-width:0;bottom:0;left:50%;translate:-50% 100%}:is(.tooltip.top-left,.tooltip.top-right,.tooltip.top-center,.tooltip.top).inverted[data-v-5016fba7]:before{content:\"\";border-top-color:var(--color-text-primary,oklch(21.049% .032 264.664))}.tooltip.top-left[data-v-5016fba7]:before{border-bottom-style:solid;border-bottom-width:0;bottom:0;left:.75rem;translate:0 100%}.tooltip.top-right[data-v-5016fba7]:before{border-bottom-style:solid;border-bottom-width:0;bottom:0;right:.75rem;translate:0 100%}.tooltip.top-center[data-v-5016fba7]:before,.tooltip.top[data-v-5016fba7]:before{border-bottom-style:solid;border-bottom-width:0;bottom:0;left:50%;translate:-50% 100%}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom)[data-v-5016fba7]{margin-top:.5rem}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom)[data-v-5016fba7]:before{content:\"\";border-bottom-color:var(--color-surface-raised,oklch(100% 0 0))}:is(.tooltip.bottom-left,.tooltip.bottom-right,.tooltip.bottom-center,.tooltip.bottom).inverted[data-v-5016fba7]:before{content:\"\";border-bottom-color:var(--color-text-primary,oklch(21.049% .032 264.664))}.tooltip.bottom-left[data-v-5016fba7]:before{border-top-width:0;top:0;left:.75rem;translate:0 -100%}.tooltip.bottom-right[data-v-5016fba7]:before{border-top-width:0;top:0;right:.75rem;translate:0 -100%}.tooltip.bottom-center[data-v-5016fba7]:before,.tooltip.bottom[data-v-5016fba7]:before{border-top-width:0;top:0;left:50%;translate:-50% -100%}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left)[data-v-5016fba7]{margin-right:.5rem}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left)[data-v-5016fba7]:before{content:\"\";border-left-color:var(--color-surface-raised,oklch(100% 0 0))}:is(.tooltip.left-top,.tooltip.left-bottom,.tooltip.left-center,.tooltip.left).inverted[data-v-5016fba7]:before{content:\"\";border-left-color:var(--color-text-primary,oklch(21.049% .032 264.664))}.tooltip.left-top[data-v-5016fba7]:before{border-right-width:0;top:.75rem;right:0;translate:100%}.tooltip.left-bottom[data-v-5016fba7]:before{border-right-width:0;bottom:.75rem;right:0;translate:100%}.tooltip.left-center[data-v-5016fba7]:before,.tooltip.left[data-v-5016fba7]:before{border-right-width:0;top:50%;right:0;translate:100% -50%}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right)[data-v-5016fba7]{margin-left:.5rem}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right)[data-v-5016fba7]:before{content:\"\";border-right-color:var(--color-surface-raised,oklch(100% 0 0))}:is(.tooltip.right-top,.tooltip.right-bottom,.tooltip.right-center,.tooltip.right).inverted[data-v-5016fba7]:before{content:\"\";border-right-color:var(--color-text-primary,oklch(21.049% .032 264.664))}.tooltip.right-top[data-v-5016fba7]:before{border-left-width:0;top:.75rem;left:0;translate:-100%}.tooltip.right-bottom[data-v-5016fba7]:before{border-left-width:0;bottom:.75rem;left:0;translate:-100%}.tooltip.right-center[data-v-5016fba7]:before,.tooltip.right[data-v-5016fba7]:before{border-left-width:0;top:50%;left:0;translate:-100% -50%}.tooltip.inverted[data-v-5016fba7]{background-color:var(--color-text-primary,oklch(21.049% .032 264.664));color:var(--color-text-inverse,oklch(100% 0 0))}.copy-button[data-v-da33eefe]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-accent-soft,oklch(96.221% .019 240.333));font-size:var(--text-sm,.875rem);line-height:var(--text-sm--line-height,calc(1.25 / .875));font-weight:var(--font-weight-normal,400);color:var(--color-text-primary,oklch(21.049% .032 264.664));flex-direction:row;align-items:center;gap:.5rem;padding-block:.25rem;padding-inline:.5rem;display:inline-flex}@media (hover:hover){.copy-button[data-v-da33eefe]:hover{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}}.copy-button[data-v-da33eefe]:active{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}.copy-button .micro-icon[data-v-da33eefe] svg{stroke-width:2px}.check-icon[data-v-da33eefe]{color:var(--color-success-text,oklch(52.73% .1371 150.069))}.copy-icon-button[data-v-da33eefe]{width:fit-content;border-radius:var(--radius-lg,.5rem)!important}.copy-icon-button.small[data-v-da33eefe]{height:2rem;padding-inline:.5rem}.copy-icon-button.small .micro-icon[data-v-da33eefe] svg{stroke-width:2px}.copy-icon-button.medium[data-v-da33eefe]{height:2.5rem;padding-inline:.625rem}.copy-icon-button.medium .mini-icon[data-v-da33eefe]{width:1.25rem;height:1.25rem}.copy-icon-button.large[data-v-da33eefe]{height:3rem;padding-inline:.75rem}.segment[data-v-ef2409c5]{z-index:10;overflow-wrap:break-word}@media screen and (width<=640px){.segment[data-v-ef2409c5]{word-break:break-all}}.segment:not(.button-segment).active[data-v-ef2409c5]{color:var(--color-tertiary-text,oklch(54.615% .2152 262.881))}.segment.button-segment[data-v-ef2409c5]{font-weight:var(--font-weight-normal,400)}.segment.button-segment.active[data-v-ef2409c5]{border:2px solid var(--color-accent,oklch(54.615% .2152 262.881));padding-inline:.6875rem}.segmented-control.default[data-v-399273d0]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-soft,oklch(97% 0 0));grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;gap:.25rem;padding:.25rem;display:grid;position:relative}.segmented-control.default .highlight[data-v-399273d0]{pointer-events:none;border-radius:var(--radius-lg,.5rem);background-color:var(--color-child,oklch(100% 0 0));box-shadow:var(--shadow-menu);inset-inline-start:.25rem;transition-duration:.2s;position:absolute;top:.25rem;bottom:.25rem;margin-inline-start:0!important}.segmented-control.buttons[data-v-399273d0]{flex-direction:row;gap:.5rem;display:flex}.switch[data-v-9b4745c4]{appearance:none;background-color:var(--color-control-track-off,oklch(92.48% .0027 264.541));cursor:pointer;border:2px solid #0000;border-radius:9999px;outline:none;flex-shrink:0;justify-content:flex-start;align-items:center;width:2.75rem;height:1.5rem;padding:0;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;display:inline-flex;position:relative}.switch[data-v-9b4745c4]:focus{box-shadow:0 0 #0000,0 0 #0000,0 0 0 2px #fff,0 0 0 4px #2563eb,0 0 #0000}.switch.enabled[data-v-9b4745c4]{background-color:var(--color-accent,oklch(54.615% .2152 262.881))!important}.switch:disabled[data-v-9b4745c4]{filter:grayscale();cursor:not-allowed}.switch:disabled .dot[data-v-9b4745c4]{background-color:var(--color-text-disabled,oklch(51.786% .0108 264.705))!important}.switch .dot[data-v-9b4745c4]{pointer-events:none;background-color:var(--color-on-accent,oklch(100% 0 0));width:1.25rem;height:1.25rem;box-shadow:var(--shadow-container);border-radius:9999px;transition:transform .2s ease-in-out,background-color .2s ease-in-out;display:inline-block;transform:translate(0)}.switch .dot.enabled[data-v-9b4745c4]{transform:translate(1.25rem)}.theme-toggle[data-v-b2f08592]{border:1px solid var(--color-border-subtle,oklch(92.48% .0027 264.541));background-color:var(--color-parent-bg,oklch(100% 0 0));border-radius:9999px;grid-template-columns:repeat(3,minmax(0,1fr));gap:.125rem;padding:.1875rem;display:inline-grid}.theme-toggle.dense[data-v-b2f08592]{padding:.125rem}.theme-toggle.dense .theme-option[data-v-b2f08592]{width:1.5rem;height:1.5rem}.theme-option[data-v-b2f08592]{width:1.875rem;height:1.875rem;color:var(--color-text-secondary,oklch(55.1% .023 264.36));background-color:#0000;border:0;border-radius:50%;justify-content:center;align-items:center;display:inline-flex;position:relative}.theme-option[data-v-b2f08592]:hover{background-color:var(--state-hover-overlay);color:var(--color-text-primary,oklch(21.049% .032 264.664))}.theme-option.active[data-v-b2f08592]{background-color:var(--color-child,oklch(100% 0 0));color:var(--color-tertiary-text,oklch(54.615% .2152 262.881));box-shadow:var(--shadow-menu)}h1[data-v-2c80c3d1],h2[data-v-2c80c3d1],h3[data-v-2c80c3d1],h4[data-v-2c80c3d1],h5[data-v-2c80c3d1],h6[data-v-2c80c3d1]{margin:0;font-weight:600}h1[data-v-2c80c3d1],h2[data-v-2c80c3d1]{font-family:Poppins,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}h3[data-v-2c80c3d1],h4[data-v-2c80c3d1],h5[data-v-2c80c3d1],h6[data-v-2c80c3d1]{font-family:var(--font-sans)}h1[data-v-2c80c3d1]{letter-spacing:-.8px;font-size:1.75rem;line-height:2.25rem}h2[data-v-2c80c3d1]{letter-spacing:-.2px;font-size:1.25rem;line-height:1.75rem}h3[data-v-2c80c3d1]{font-size:1rem;line-height:1.5rem}h4[data-v-2c80c3d1]{font-size:.875rem;line-height:1.25rem}h5[data-v-2c80c3d1]{font-size:.875rem;font-weight:500;line-height:1.25rem}h6[data-v-2c80c3d1]{font-size:.75rem;line-height:1rem}@keyframes minimizedAnimation-10182b3a{0%{max-width:100%;height:100%}50%{max-width:100%;height:7.5rem}to{max-width:37.5rem;height:7.5rem}}@keyframes maximizedAnimation-10182b3a{0%{max-width:37.5rem;margin:79% auto 0;height:7.5rem!important}50%{max-width:100%;height:7.5rem!important}to{max-width:100%;height:calc(100vh-3.5rem)}}@keyframes horizontal-shaking-10182b3a{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}.dark .modal[data-v-10182b3a]{color:var(--color-body-text)}.modal[data-v-10182b3a]{opacity:0;background-color:var(--color-parent-bg);border-radius:1.5rem;width:100%;max-width:48rem;margin:auto;transition:all .5s ease-in-out;overflow:hidden;transform:translateY(2.5rem);box-shadow:0 0 0 100vmax #0a0a0a80}@media (prefers-reduced-motion){.modal[data-v-10182b3a]{transition:none}}.modal[data-v-10182b3a]::backdrop{background-color:#0000}.modal.open[data-v-10182b3a]{opacity:1;display:block;transform:translateY(0)}.modal.minimized[data-v-10182b3a]{border:1px solid #e5e7eb;width:100%;margin-bottom:1.25rem;animation:1.3s forwards minimizedAnimation-10182b3a}@media (prefers-reduced-motion){.modal.minimized[data-v-10182b3a]{animation:none}}.modal.minimized .inner[data-v-10182b3a]{overflow-y:hidden}.modal.minimized .inner .header[data-v-10182b3a]{padding:1rem;overflow-y:hidden}.modal.minimized .inner .header .title[data-v-10182b3a-s]{margin-top:1rem;font-size:1rem;line-height:1.5rem}.modal.maximized[data-v-10182b3a]{animation:1.3s forwards maximizedAnimation-10182b3a}@media (prefers-reduced-motion){.modal.maximized[data-v-10182b3a]{animation:none}}.modal.fullscreen .inner[data-v-10182b3a]{height:100%;min-height:0;overflow-y:auto}.modal.fullscreen .inner .header[data-v-10182b3a]{border-top-left-radius:1rem;border-top-right-radius:1rem;justify-content:flex-start;padding:2rem 1rem}.modal.fullscreen .inner .content[data-v-10182b3a]{padding:0 0 .5rem}.modal.fullscreen .inner .footer[data-v-10182b3a]{margin-top:auto;box-shadow:0 10px 15px #0000001a}@media screen and (width>=640px){.modal.fullscreen .inner .footer[data-v-10182b3a]{margin-inline:5.75rem;border-radius:1rem;margin-bottom:1.25rem}}.modal.fullscreen:not(.minimized)[data-v-10182b3a]{border-bottom-right-radius:0;border-bottom-left-radius:0;max-width:100%;height:calc(100vh - 3.5rem);margin-top:3.5rem;overflow:visible}@media screen and (width>=640px){.modal.fullscreen:not(.minimized) .header[data-v-10182b3a],.modal.fullscreen:not(.minimized) .content[data-v-10182b3a]{padding-left:7rem;padding-right:7rem}}.modal.fullscreen:not(.minimized)[data-v-10182b3a]:modal{max-height:100vh}.modal:not(.fullscreen) .header[data-v-10182b3a]{padding:2rem 1rem 1rem 2rem}.modal:not(.fullscreen) .header>.close[data-v-10182b3a]{margin-top:-1rem}.modal:not(.fullscreen) .footer[data-v-10182b3a]{background-color:var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838));width:100%}.modal:not(.fullscreen) .footer.footer-shadow[data-v-10182b3a]{filter:drop-shadow(0 -1px 2px #0000001a)drop-shadow(0 -1px 1px #0000000f)}.dark :is(.modal:not(.fullscreen) .footer)[data-v-10182b3a]{background-color:var(--color-child)}.modal.persistent-animation[data-v-10182b3a]{animation:.3s ease-in-out horizontal-shaking-10182b3a}.modal .actions[data-v-10182b3a]{justify-content:flex-end;align-items:center;width:100%;height:3.5rem;padding:0 .5625rem;display:flex;position:absolute;top:-3.5rem}.modal .actions .minimize[data-v-10182b3a],.modal .actions .close[data-v-10182b3a]{color:#fff;padding:0 .9375rem;font-size:.875rem;line-height:1.25rem}.modal .inner[data-v-10182b3a]{flex-direction:column;min-height:fit-content;display:flex}.modal .inner .header[data-v-10182b3a]{background-color:var(--color-parent-bg);align-items:center;display:flex}.modal .inner .header.header-shadow[data-v-10182b3a]{filter:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f)}.modal .inner .header>.close[data-v-10182b3a]{margin-left:auto}.modal .inner .header>.close[data-v-10182b3a]:focus-visible{background-color:var(--color-secondary-hover)}.modal .inner .header .minimized-actions[data-v-10182b3a]{flex-direction:column;gap:.5rem;margin-left:auto;display:flex}.modal .inner .title[data-v-10182b3a],.modal .inner.title[data-v-10182b3a-s]{font-size:1.25rem;font-weight:700}.modal .inner .content[data-v-10182b3a]{padding:1rem 2rem 2rem;font-size:.875rem;line-height:1.25rem;overflow-y:auto}.modal .inner .content .loader[data-v-10182b3a]{width:2.5rem;height:2.5rem;margin:0 auto}.modal .inner .footer[data-v-10182b3a]{z-index:10;background-color:var(--color-child);justify-content:center;gap:.5rem;padding:1.5rem 1rem;display:flex}.dark :is(.modal .inner .footer)[data-v-10182b3a]{background-color:var(--color-child)}.confirm-modal[data-v-9f54edc5]{max-width:var(--container-lg,32rem)}.confirm-modal .indicator-icon[data-v-9f54edc5]{border-radius:50%;width:fit-content;margin-inline:auto;padding:.75rem}.confirm-modal .indicator-icon.danger[data-v-9f54edc5]{background-color:var(--color-danger-soft,oklch(97.053% .0129 17.38));color:var(--color-danger-text,oklch(57.004% .2035 26.111))}.confirm-modal .indicator-icon.info[data-v-9f54edc5]{background-color:var(--color-info-soft,oklch(97.05% .0142 254.6));color:var(--color-info,oklch(62.31% .188 259.81))}.confirm-modal .indicator-icon .icon[data-v-9f54edc5]{width:2rem;height:2rem}.confirm-modal .title[data-v-9f54edc5]{text-align:center;margin-top:1rem;margin-bottom:.75rem!important}.confirm-modal .message[data-v-9f54edc5]{text-align:center}.confirm-modal[data-v-9f54edc5] .content{padding-inline:2rem!important}.confirm-modal[data-v-9f54edc5] .content p{margin:0}.label[data-v-08911c65]{width:fit-content;height:1.5rem;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);border-radius:.25rem;align-items:center;padding-inline:.625rem;display:flex}.label.small[data-v-08911c65]{height:1.25rem;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));padding-inline:.5rem}.label.blue[data-v-08911c65]{background-color:var(--color-tag-info-soft-bg,oklch(93.192% .0316 255.585));color:var(--color-tag-info-soft-text,oklch(48.82% .2172 264.376))}.label.green[data-v-08911c65]{background-color:var(--color-tag-success-soft-bg,oklch(96.241% .0434 156.743));color:var(--color-tag-success-soft-text,oklch(52.73% .1371 150.069))}.label.gray[data-v-08911c65]{background-color:var(--color-tag-neutral-soft-bg,oklch(96.696% .0029 264.542));color:var(--color-tag-neutral-soft-text,oklch(37.293% .0306 259.733))}.label.orange[data-v-08911c65]{background-color:var(--color-tag-warning-orange-soft-bg,oklch(95.42% .0372 75.164));color:var(--color-tag-warning-orange-soft-text,oklch(55.343% .1739 38.402))}.label.purple[data-v-08911c65]{background-color:var(--color-tag-accent-soft-bg,oklch(94.643% .0327 307.174));color:var(--color-tag-accent-soft-text,oklch(49.552% .2369 301.924))}.label.red[data-v-08911c65]{background-color:var(--color-tag-danger-soft-bg,oklch(93.564% .0309 17.717));color:var(--color-tag-danger-soft-text,oklch(50.542% .1905 27.518))}.label.yellow[data-v-08911c65]{background-color:var(--color-tag-warning-yellow-soft-bg,oklch(97.292% .0693 103.193));color:var(--color-tag-warning-yellow-soft-text,oklch(55.378% .1207 66.442))}.label.alt[data-v-08911c65]{border-radius:var(--radius-xl,.75rem);font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));border-style:solid;border-width:1px}.label.alt.white[data-v-08911c65]{border-color:var(--color-tag-neutral-outline-border,oklch(92.758% .0058 264.531));background-color:var(--color-tag-neutral-outline-bg,oklch(100% 0 0));color:var(--color-tag-neutral-outline-text,oklch(20.463% 0 0))}.label.alt.gray[data-v-08911c65]{border-color:var(--color-tag-subtle-outline-border,oklch(37.293% .0306 259.733/.1));background-color:var(--color-tag-subtle-outline-bg,oklch(97.015% 0 0));color:var(--color-tag-subtle-outline-text,oklch(20.463% 0 0))}.label.alt.orange[data-v-08911c65]{border-color:var(--color-tag-warning-orange-outline-border,oklch(62.848% .1396 63.6/.1));background-color:var(--color-tag-warning-orange-outline-bg,oklch(97.962% .0158 73.684));color:var(--color-tag-warning-orange-outline-text,oklch(40.839% .1165 38.172))}.label.alt.blue[data-v-08911c65]{border-color:var(--color-tag-info-outline-border,oklch(53.296% .1901 259.956/.1));background-color:var(--color-tag-info-outline-bg,oklch(97.048% .0142 254.604));color:var(--color-tag-info-outline-text,oklch(37.906% .1378 265.522))}.label.alt.green[data-v-08911c65]{border-color:var(--color-tag-success-outline-border,oklch(52.699% .1397 149.106/.1));background-color:var(--color-tag-success-outline-bg,oklch(98.193% .0181 155.826));color:var(--color-tag-success-outline-text,oklch(39.253% .0896 152.535))}.label.alt.red[data-v-08911c65]{border-color:var(--color-tag-danger-outline-border,oklch(50.678% .1732 28.989/.1));background-color:var(--color-tag-danger-outline-bg,oklch(97.053% .0129 17.38));color:var(--color-tag-danger-outline-text,oklch(39.584% .1331 25.723))}.label.alt.purple[data-v-08911c65]{border-color:var(--color-tag-accent-outline-border,oklch(48.471% .2356 298.402/.1));background-color:var(--color-tag-accent-outline-bg,oklch(97.685% .0142 308.299));color:var(--color-tag-accent-outline-text,oklch(38.074% .1661 304.987))}.label.alt.yellow[data-v-08911c65]{border-color:var(--color-tag-warning-yellow-outline-border,oklch(55.378% .1207 66.442/.1));background-color:var(--color-tag-warning-yellow-outline-bg,oklch(98.73% .0262 102.212));color:var(--color-tag-warning-yellow-outline-text,oklch(42.1% .0897 57.708))}.delivery-options[data-v-684645c5]{background-color:var(--color-surface-raised,oklch(100% 0 0));width:100%;box-shadow:var(--shadow-container);margin-top:.125rem;padding:1rem}@media (width>=640px){.delivery-options[data-v-684645c5]{border-radius:1rem;margin-top:.5rem}}@media (width>=768px){.delivery-options[data-v-684645c5]{padding:1.5rem}}.header[data-v-684645c5]{justify-content:space-between;margin-bottom:1.5rem;display:flex}.header .title[data-v-684645c5]{color:var(--color-text-primary,oklch(21.049% .032 264.664));font-weight:500}.header .hint[data-v-684645c5]{color:var(--color-text-secondary,oklch(55.1% .023 264.36));line-height:1.5rem;display:none}@media (width>=768px){.header .hint[data-v-684645c5]{display:flex}}.content[data-v-684645c5]{flex-flow:column wrap;gap:1rem;display:flex}@media (width>=768px){.content[data-v-684645c5]{flex-direction:row;gap:1.5rem}}.content .option[data-v-684645c5]{flex-direction:column;display:flex;position:relative}.content .option[data-v-684645c5]:not(.last){border-bottom:1px solid var(--color-divider,oklch(92.48% .0027 264.541));padding-bottom:1rem}@media (width>=768px){.content .option[data-v-684645c5]:not(.last){border-bottom:none;padding-bottom:0}.content .option[data-v-684645c5]:not(:first-child){border-left:1px solid var(--color-divider,oklch(92.48% .0027 264.541));padding-left:1.0625rem}}.content .option.hide[data-v-684645c5]{display:none}.content .option .day[data-v-684645c5],.content .option .cost[data-v-684645c5],.content .option .no-cost[data-v-684645c5]{font-size:.875rem;line-height:1.25rem}.content .option .cost[data-v-684645c5],.content .option .no-cost[data-v-684645c5]{position:absolute;top:0;right:0}@media (width>=768px){.content .option .cost[data-v-684645c5],.content .option .no-cost[data-v-684645c5]{position:relative}}.content .option .day[data-v-684645c5]{color:var(--color-text-primary,oklch(21.049% .032 264.664));text-transform:capitalize;flex-wrap:wrap;align-items:center;gap:.25rem .5rem;margin-bottom:.25rem;display:flex}.content .option .date[data-v-684645c5]{color:var(--color-text-primary,oklch(21.049% .032 264.664));font-size:1.25rem;font-weight:500;line-height:1.75rem}@media (width>=768px){.content .option .date[data-v-684645c5]{margin-bottom:.75rem}}.content .option .cost[data-v-684645c5]{color:var(--color-success-text,oklch(52.73% .1371 150.069))}.content .option .no-cost[data-v-684645c5]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.content .button[data-v-684645c5]{display:block}@media (width>=768px){.content .button[data-v-684645c5]{display:none}}.drawer[data-v-fb6d2cc1]{z-index:99;color:var(--color-text-primary,oklch(21.049% .032 264.664));background-color:#0000;border:0;width:100vw;max-width:none;height:100vh;min-height:100vh;max-height:100vh;margin:0;padding:0;position:fixed;inset:0;overflow:hidden}.drawer[data-v-fb6d2cc1]:before{content:\"\";background-color:color-mix(in oklch, var(--color-overlay-backdrop,oklch(0% 0 0/.5)) calc(var(--drawer-backdrop-opacity,.5) * 100%), transparent);transition:background-color .3s;position:fixed;inset:0}.drawer.no-overlay[data-v-fb6d2cc1]{pointer-events:none}.drawer.no-overlay[data-v-fb6d2cc1]:before{background-color:#0000}.drawer.no-overlay .wrapper[data-v-fb6d2cc1]{pointer-events:auto}.drawer.full-width .wrapper[data-v-fb6d2cc1]{width:100%;max-width:100%}.drawer.left .wrapper[data-v-fb6d2cc1]{left:0;right:auto;transform:translate(-100%)}.drawer.left.open .wrapper[data-v-fb6d2cc1]{transform:translate(0)}.drawer.right .wrapper[data-v-fb6d2cc1]{left:auto;right:0;transform:translate(100%)}.drawer.right.open .wrapper[data-v-fb6d2cc1]{transform:translate(0)}.drawer.bottom .wrapper[data-v-fb6d2cc1]{border-top-left-radius:.75rem;border-top-right-radius:.75rem;flex-direction:column;width:100%;max-width:100%;height:auto;min-height:auto;max-height:min(90vh,100dvh);display:flex;inset:auto 0 0;transform:translateY(100%)}.drawer.bottom.open .wrapper[data-v-fb6d2cc1]{transform:translateY(0)}.drawer.bottom .wrapper[data-v-fb6d2cc1]{max-height:inherit}.drawer.bottom .header[data-v-fb6d2cc1],.drawer.bottom .content[data-v-fb6d2cc1]{padding:1rem}.drawer.bottom .content[data-v-fb6d2cc1]{max-height:inherit;padding-top:0;overflow-y:auto}.drawer .wrapper[data-v-fb6d2cc1]{background-color:var(--color-surface-page,oklch(100% 0 0));width:auto;max-width:80%;height:100%;min-height:100vh;max-height:100vh;box-shadow:var(--shadow-menu-large);transition:transform .3s var(--default-transition-timing-function);flex-direction:column;display:flex;position:fixed;top:0;bottom:0;overflow:hidden}.drawer .header[data-v-fb6d2cc1]{justify-content:space-between;align-items:center;gap:1.5rem;padding:1.25rem;display:flex}.drawer .header .title[data-v-fb6d2cc1]{font-size:1.25rem;line-height:1.75rem}.drawer .header .close[data-v-fb6d2cc1]{transform:translate(.625rem)}.drawer .content[data-v-fb6d2cc1]{flex-grow:1;padding-left:1.25rem;padding-right:1.25rem;overflow-y:auto}.form-row[data-v-7a247590]{flex-direction:column;align-items:flex-start;gap:1rem;padding-block:1.5rem;display:flex}@media (width>=48rem){.form-row[data-v-7a247590]{flex-direction:row;gap:5.25rem;padding-block:2.5rem}}.form-row[data-v-7a247590]:first-child{padding-top:1.5rem}.form-row .label[data-v-7a247590]{width:100%}@media (width>=48rem){.form-row .label[data-v-7a247590]{width:18.75rem;min-width:18.75rem}}.form-row .label.label--empty[data-v-7a247590]{display:none}@media (width>=48rem){.form-row .label.label--empty[data-v-7a247590]{display:block}}.form-row .label .title[data-v-7a247590]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-semibold,600)}.form-row .label .subtitle[data-v-7a247590]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-disabled,oklch(51.786% .0108 264.705));margin-top:.25rem}.form-row .fields[data-v-7a247590]{flex-direction:column;gap:1.25rem;display:flex}.form-grid[data-v-940e9744]{width:100%}:where(.form-grid[data-v-940e9744]>:not(:last-child)){border-top-style:solid!important;border-top-width:0!important;border-bottom-style:solid!important;border-bottom-width:.0625rem!important;border-color:var(--color-border-default,oklch(86.277% .0063 264.565))!important}.form-grid .actions[data-v-940e9744]{padding-block:1.5rem}.form-grid .actions[data-v-940e9744] .fields{flex-direction:row;gap:.75rem;display:flex}.input-container[data-v-878992b1]{flex-direction:column;display:flex}.input-container.is-large .icon[data-v-878992b1]{width:1.5rem!important;height:1.5rem!important}.input-container.has-error .icon[data-v-878992b1]{stroke:var(--color-danger,oklch(61.535% .2075 25.224))}.input-container.has-error .icon.has-error[data-v-878992b1]{fill:var(--color-danger,oklch(61.535% .2075 25.224));stroke:var(--color-on-danger,oklch(100% 0 0))}.container-inner[data-v-878992b1]{width:100%;position:relative}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended)[data-v-878992b1]{z-index:20;justify-content:center;display:flex;position:absolute;top:50%;transform:translateY(-50%)}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .icon[data-v-878992b1]{width:1.25rem;height:1.25rem}:is(.container-inner .inline-container-prepended,.container-inner .inline-container-appended) .text[data-v-878992b1]{color:var(--color-field-text,oklch(21.049% .032 264.664));font-size:.875rem;line-height:1.25rem}.container-inner .inline-container-prepended[data-v-878992b1]{left:1rem}.container-inner .inline-container-appended[data-v-878992b1]{right:1rem}.input-label[data-v-878992b1]{font-size:.875rem;line-height:1.25rem;font-weight:var(--font-weight-medium,500);margin-bottom:.25rem;display:flex}.input-label .label-text[data-v-878992b1]{align-items:center;gap:.5625rem;display:flex}.input-label .label-text .info-icon[data-v-878992b1]{width:.875rem;height:.875rem}.input-label .optional[data-v-878992b1]{color:var(--color-text-secondary,oklch(55.1% .023 264.36));margin-left:auto;padding-left:.25rem;font-weight:400}.input[data-v-878992b1]{background-color:var(--color-field-background,oklch(100% 0 0));border:1px solid var(--color-field-border,oklch(86.277% .0063 264.565));width:100%;height:2.5rem;font:inherit;letter-spacing:inherit;color:var(--color-text-primary,oklch(21.049% .032 264.664));box-sizing:border-box;appearance:none;border-radius:.5rem;outline:none;padding:0 1rem;font-size:.875rem;line-height:1.25rem;transition:border .2s}.input[data-v-878992b1]::placeholder{color:var(--color-border-strong,oklch(73.455% .008 264.608))}.input[data-v-878992b1]:hover{border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.input[data-v-878992b1]:focus{border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));box-shadow:0 0 0 0px var(--color-surface-canvas,oklch(100% 0 0)), 0 0 0 1px var(--color-accent,oklch(54.615% .2152 262.881)), 0 0 var(--color-text-primary,oklch(21.049% .032 264.664));border-width:2px;padding-left:15px}.input.has-icon-prepended[data-v-878992b1]{padding-left:2.5rem}.input.has-icon-prepended[data-v-878992b1]:focus{padding-left:2.4375rem}.input.has-inline-text[data-v-878992b1]{padding-right:2.5rem}.input.has-error[data-v-878992b1]{border-color:var(--color-danger,oklch(61.535% .2075 25.224));color:var(--color-danger-strong,oklch(39.329% .1242 24.368))!important}.input.has-error[data-v-878992b1]::placeholder{color:var(--color-danger-strong,oklch(39.329% .1242 24.368))}.input.has-error[data-v-878992b1]:focus{border-color:var(--color-danger,oklch(61.535% .2075 25.224));box-shadow:0 0 0 0px var(--color-surface-canvas,oklch(100% 0 0)), 0 0 0 1px var(--color-danger,oklch(61.535% .2075 25.224)), 0 0 var(--color-text-primary,oklch(21.049% .032 264.664))}.input.is-valid[data-v-878992b1]{border-color:var(--color-success,oklch(55.106% .1432 149.926));color:var(--color-success-strong,oklch(39.253% .0896 152.535))}.input.is-valid[data-v-878992b1]::placeholder{color:var(--color-success-strong,oklch(39.253% .0896 152.535))}.input:disabled[data-v-878992b1]{background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));border-color:var(--color-field-border,oklch(86.277% .0063 264.565));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))!important}.input:disabled[data-v-878992b1]::placeholder{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.input.medium[data-v-878992b1]{padding-top:.6875rem;padding-bottom:.6875rem;font-size:1rem;line-height:1.5rem}.input.medium[data-v-878992b1]:focus{padding-top:.625rem;padding-bottom:.625rem}.input.large[data-v-878992b1]{height:3.5rem;font-size:1rem;line-height:1.5rem}textarea.input[data-v-878992b1]{padding-top:.75rem;padding-bottom:.75rem}.error[data-v-878992b1]{color:var(--color-danger-text,oklch(57.004% .2035 26.111));margin-top:.5rem;font-size:.875rem;line-height:1.25rem}.amount-input-container[data-v-44d789fb]{flex-direction:column;display:flex}.amount-input[data-v-44d789fb]{height:2.5rem;color:var(--color-text-primary,oklch(21.049% .032 264.664));display:flex}.amount-input.small[data-v-44d789fb]{height:2rem}.amount-input.small .minus[data-v-44d789fb],.amount-input.small .plus[data-v-44d789fb]{width:2rem}.input[data-v-44d789fb],.minus[data-v-44d789fb],.plus[data-v-44d789fb]{border-style:solid;border-width:1px;border-color:var(--color-border-default,oklch(86.277% .0063 264.565))}.input[data-v-44d789fb]:disabled,.minus[data-v-44d789fb]:disabled,.plus[data-v-44d789fb]:disabled{border-color:var(--color-field-border,oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.minus[data-v-44d789fb]:hover:not(:disabled),.plus[data-v-44d789fb]:hover:not(:disabled),.minus[data-v-44d789fb]:focus:not(:disabled),.plus[data-v-44d789fb]:focus:not(:disabled){z-index:20;border-color:var(--color-border-strong,oklch(73.455% .008 264.608));background-color:var(--color-surface-subtle,oklch(100% 0 0))}.input[data-v-44d789fb]{z-index:10;background-color:var(--color-field-background,oklch(100% 0 0));text-align:center;width:3.5rem;font-weight:var(--font-weight-normal,400);margin-inline:-.0625rem}.input[data-v-44d789fb]:hover:not(:disabled):not(.has-error){border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.input[data-v-44d789fb]:focus:not(:disabled){border-width:2px}.input[data-v-44d789fb]:focus-visible{outline-style:none}@media (forced-colors:active){.input[data-v-44d789fb]:focus-visible{outline-offset:2px;outline:2px solid #0000}}.input[data-v-44d789fb]:focus:not(:disabled):not(.has-error){border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376))}.input.has-error[data-v-44d789fb],.input.has-error[data-v-44d789fb]:focus{border-color:var(--color-danger,oklch(61.535% .2075 25.224))}.minus[data-v-44d789fb],.plus[data-v-44d789fb]{background-color:var(--color-field-background,oklch(100% 0 0));justify-content:center;align-items:center;width:2.5rem;display:flex}.minus[data-v-44d789fb]{border-top-left-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.plus[data-v-44d789fb]{border-top-right-radius:var(--radius-lg,.5rem);border-bottom-right-radius:var(--radius-lg,.5rem)}.input[data-v-44d789fb]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input[data-v-44d789fb]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input[type=number][data-v-44d789fb]{-moz-appearance:textfield}.error[data-v-44d789fb]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-danger-text,oklch(57.004% .2035 26.111));margin-top:.5rem}.list[data-v-6e791591]{flex-direction:column;display:flex}.list.grid[data-v-6e791591]{flex-flow:wrap}.list-item[data-v-9c2bcba7]{background-color:var(--color-surface-raised,oklch(100% 0 0));color:var(--color-text-primary,oklch(21.049% .032 264.664));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--gradient-from,--gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--default-transition-timing-function);align-items:center;padding-block:.5rem;padding-inline:1rem;transition-duration:.15s;display:flex}.list-item.clickable:not([tabindex=\"-1\"])[data-v-9c2bcba7]{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.list-item.clickable:not([tabindex=\"-1\"])[data-v-9c2bcba7]{outline-offset:2px;outline:2px solid #0000}}.list-item.clickable:not([tabindex=\"-1\"])[data-v-9c2bcba7]:hover{cursor:pointer;background-color:var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838))}.list-item.clickable:not([tabindex=\"-1\"])[data-v-9c2bcba7]:focus-visible,.list-item.clickable:not([tabindex=\"-1\"]).active[data-v-9c2bcba7]{background-color:var(--color-surface-subtle-active,oklch(92.48% .0027 264.541))}.list-item .prepend[data-v-9c2bcba7]{display:flex}.list-item .content[data-v-9c2bcba7]{flex-direction:column;display:flex}.list-item .content .title[data-v-9c2bcba7]{font-weight:var(--font-weight-bold,700)}.list-item .content .subtitle[data-v-9c2bcba7]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.list-item .content .text[data-v-9c2bcba7]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)))}.dark .list-item.clickable[data-v-9c2bcba7]:not([tabindex=\"-1\"]):focus-visible,.dark .list-item.clickable:not([tabindex=\"-1\"]).active[data-v-9c2bcba7]{background-color:var(--color-surface-subtle,oklch(100% 0 0))}.checkbox-container[data-v-f61c3d17]{flex-direction:column;width:100%;display:flex}.checkbox-container.large .label[data-v-f61c3d17]{gap:.75rem}.checkbox-container.large .checkbox[data-v-f61c3d17]{width:1.25rem;height:1.25rem;margin-top:0}.label[data-v-f61c3d17]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);color:var(--color-text-primary,oklch(21.049% .032 264.664));align-items:flex-start;gap:.5rem;display:flex}.label[data-v-f61c3d17]:not(.disabled){cursor:pointer}.checkbox[data-v-f61c3d17]{border:1px solid var(--color-field-border,oklch(86.277% .0063 264.565));background-color:var(--color-field-background,oklch(100% 0 0));color:var(--color-accent-strong,oklch(48.82% .2172 264.376));appearance:none;background-origin:border-box;border-radius:.25rem;width:1rem;height:1rem;margin-top:.125rem}.checkbox[data-v-f61c3d17]:not(:disabled):hover{border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.checkbox[data-v-f61c3d17]:checked,.checkbox[data-v-f61c3d17]:indeterminate{border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));background-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));color:var(--color-on-accent,oklch(100% 0 0))}.checkbox[data-v-f61c3d17]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}.checkbox[data-v-f61c3d17]:indeterminate{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\")}.checkbox[data-v-f61c3d17]:disabled{border-color:var(--color-border-default,oklch(86.277% .0063 264.565));color:var(--color-text-disabled,oklch(51.786% .0108 264.705));background-color:var(--color-border-default,oklch(86.277% .0063 264.565))!important}.checkbox[data-v-f61c3d17]:not(:disabled):checked:hover,.checkbox[data-v-f61c3d17]:not(:disabled):indeterminate:hover{border-color:var(--color-accent,oklch(54.615% .2152 262.881));color:var(--color-on-accent,oklch(100% 0 0))}.checkbox[data-v-f61c3d17]:checked:disabled{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}.checkbox[data-v-f61c3d17]:indeterminate:disabled{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='white' viewBox='0 0 16 16'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\")}.error .checkbox[data-v-f61c3d17]{border-color:var(--color-danger-text,oklch(57.004% .2035 26.111));outline-color:var(--color-danger-text,oklch(57.004% .2035 26.111))}.error .error-message[data-v-f61c3d17]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-danger-text,oklch(57.004% .2035 26.111));margin-top:.5rem}.append[data-v-f61c3d17]{font-weight:var(--font-weight-normal,400);margin-left:auto}.divider[data-v-37c3f4ff]{border-color:var(--color-divider,oklch(92.48% .0027 264.541));width:100%;margin:0}.divider[data-v-37c3f4ff]:not(.vertical){border-top-width:var(--aa3491c8)}.divider.vertical[data-v-37c3f4ff]{border-left-width:var(--aa3491c8);width:.0625rem;height:100%}.divider.vertical.flex[data-v-37c3f4ff]{align-self:stretch;height:auto}.base-select[data-v-e448bd71]:focus{outline:none}.base-select.disabled .wrapper[data-v-e448bd71]{background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));border-color:var(--color-field-border,oklch(86.277% .0063 264.565));cursor:not-allowed}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-e448bd71]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52))}:is(.base-select.disabled .wrapper input,.base-select.disabled .wrapper .placeholder,.base-select.disabled .wrapper .selected-item)[data-v-e448bd71]::placeholder{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.base-select.click[data-v-e448bd71]{cursor:pointer}.base-select.click.disabled[data-v-e448bd71]{pointer-events:none;cursor:default}.base-select .input-label[data-v-e448bd71]{margin-bottom:.25rem;font-size:.875rem;font-weight:500;line-height:1.25rem;display:flex}.base-select .wrapper[data-v-e448bd71]{background-color:var(--color-field-background,oklch(100% 0 0));border:solid 1px var(--color-field-border,oklch(86.277% .0063 264.565));border-radius:.5rem;align-items:center;width:100%;height:2.5rem;padding:.5rem 1rem .5rem .5rem;display:flex}.base-select .wrapper[data-v-e448bd71]:hover{border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.base-select .wrapper.focus[data-v-e448bd71]{border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));border-width:2px;padding-left:.4375rem;padding-right:.9375rem}.base-select .wrapper.has-error[data-v-e448bd71]{border-color:var(--color-danger,oklch(61.535% .2075 25.224));color:var(--color-danger-strong,oklch(39.329% .1242 24.368))}.base-select .wrapper .prepend-icon[data-v-e448bd71]{color:var(--color-accent,oklch(54.615% .2152 262.881));margin-left:.5rem}.base-select .wrapper .toggle-chevron[data-v-e448bd71],.base-select .wrapper .clear-button[data-v-e448bd71]{background-color:#0000;padding:0}.base-select .wrapper .selected-items[data-v-e448bd71]{white-space:nowrap;gap:.25rem;width:auto;margin-left:.5rem;display:flex;overflow:hidden}.base-select .wrapper .selected-items .label[data-v-e448bd71]{height:min-content;font-size:.75rem;line-height:1rem}.base-select .wrapper .placeholder[data-v-e448bd71]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));margin-left:.5rem;margin-right:.25rem;font-size:.875rem;line-height:1.25rem}.base-select .wrapper .selected-item[data-v-e448bd71]{text-overflow:ellipsis;margin-left:.5rem;font-size:.875rem;line-height:1.25rem;overflow:hidden}.base-select .wrapper .action-buttons[data-v-e448bd71]{gap:.25rem;margin-left:auto;display:flex}.base-select .wrapper input[data-v-e448bd71]{background-color:var(--color-field-background,oklch(100% 0 0));min-width:0;min-height:0;color:var(--color-text-primary,oklch(21.049% .032 264.664));border-style:none;flex:1 0 5rem;height:2.25rem;margin-left:.5rem;padding:.5rem 0;font-size:.875rem;line-height:1.25rem}.base-select .wrapper input[data-v-e448bd71]::placeholder{color:var(--color-border-strong,oklch(73.455% .008 264.608))}.base-select .wrapper input[data-v-e448bd71]:focus{box-shadow:none;outline:none}.base-select .wrapper .label-inner[data-v-e448bd71]{align-items:center;gap:.25rem;display:flex}.base-select .wrapper .label-inner .close-button[data-v-e448bd71]{width:1rem;height:1rem}.base-select .error[data-v-e448bd71]{color:var(--color-danger-text,oklch(57.004% .2035 26.111));margin-top:.5rem;font-size:.875rem;line-height:1.25rem}.state-indicator[data-v-e448bd71]{pointer-events:none;transition:all .2s ease-in-out}.state-indicator.is-open[data-v-e448bd71]{transform:rotate(180deg)}.content-divider[data-v-e448bd71]{border-color:var(--color-field-border,oklch(86.277% .0063 264.565));height:0;color:inherit;border-top-width:1px;margin-left:1.5rem;margin-right:1.5rem}.select-content[data-v-e448bd71]{background-color:var(--color-surface-raised,oklch(100% 0 0));border-radius:.5rem;justify-content:space-between;max-height:18.75rem;padding:.5rem 0;overflow-y:auto}.select-content.show-shadow[data-v-e448bd71]{box-shadow:var(--shadow-menu)}.select-content.remove-radius[data-v-e448bd71]{border-top-left-radius:0!important;border-top-right-radius:0!important}.select-content .no-results[data-v-e448bd71]{color:var(--color-text-primary,oklch(21.049% .032 264.664));cursor:default;-webkit-user-select:none;user-select:none;padding:.5rem 1rem;position:relative}.select-content[data-v-e448bd71] .checkbox-container{margin-right:1rem}.select-content[data-v-e448bd71] .list-item.clickable:not([tabindex=\"-1\"]).active{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}.select-content[data-v-e448bd71] .list-item.clickable:not([tabindex=\"-1\"]).active:hover,.select-content[data-v-e448bd71] .list-item.clickable:not([tabindex=\"-1\"]).active:focus-visible{background-color:var(--color-accent-soft-hover,oklch(93.192% .0316 255.585))}@media (width>=768px){.select-content[data-v-e448bd71]{max-height:400px}}@media (width>=1024px){.select-content[data-v-e448bd71]{max-height:500px}}.intersect[data-v-d9041eb6]{justify-content:center;display:flex}.search-loader[data-v-d9041eb6]{margin-top:.5rem}.accordion-item[data-v-17b37b7b]{background-color:var(--color-surface-raised,oklch(100% 0 0));width:100%;box-shadow:var(--shadow-container);overflow:hidden}@media (width>=640px){.accordion-item[data-v-17b37b7b]{border-radius:1rem}}.accordion-item .header[data-v-17b37b7b]{background-color:inherit;border:none;align-items:center;width:100%;padding:1rem;display:flex}.accordion-item .header[data-v-17b37b7b]:focus{background-color:var(--color-surface-subtle,oklch(100% 0 0))}@media (width>=640px){.accordion-item .header[data-v-17b37b7b]{min-height:4.5rem;padding-left:1.5rem;padding-right:1.5rem}}.accordion-item .header .state-indicator[data-v-17b37b7b]{margin-left:auto;padding-left:.5rem}.accordion-item .header .state-indicator .icon[data-v-17b37b7b]{color:var(--color-accent,oklch(54.615% .2152 262.881));transition:transform .3s linear;transform:rotate(0)}.accordion-item .header .state-indicator.open[data-v-17b37b7b]{padding-left:0;padding-right:.5rem;transform:rotate(180deg)}.accordion-item .header .title[data-v-17b37b7b],.accordion-item .header .title[data-v-17b37b7b-s]{text-align:left;color:var(--color-text-primary,oklch(21.049% .032 264.664));font-weight:500}.accordion-item .content[data-v-17b37b7b]{padding:0 1rem 1.5rem}@media (width>=640px){.accordion-item .content[data-v-17b37b7b]{padding-left:1.5rem;padding-right:1.5rem}}.grow-enter-active[data-v-17b37b7b],.grow-leave-active[data-v-17b37b7b]{transition:all .3s ease-in-out}.fade-enter-active[data-v-17b37b7b],.fade-leave-active[data-v-17b37b7b]{transition:all .1s ease-in-out}.grow-enter-from[data-v-17b37b7b],.grow-leave-to[data-v-17b37b7b]{height:0!important;padding-top:0!important;padding-bottom:0!important}.fade-enter-from[data-v-17b37b7b],.fade-leave-to[data-v-17b37b7b]{opacity:0;height:0!important}.accordion[data-v-25a8f65e]{flex-direction:column;gap:.125rem;display:flex}@media (width>=640px){.accordion[data-v-25a8f65e]{gap:.5rem}}.alert[data-v-4165b473]{border-radius:.5rem;padding:1rem;display:flex}.alert.error[data-v-4165b473]{background-color:var(--color-danger-soft,oklch(97.053% .0129 17.38))}.alert.error .icon .mini-icon[data-v-4165b473]{color:var(--color-danger,oklch(61.535% .2075 25.224))}.alert.error .content .title[data-v-4165b473]{color:var(--color-danger-strong,oklch(39.329% .1242 24.368))}.alert.error .content .description[data-v-4165b473]{color:var(--color-danger-text,oklch(57.004% .2035 26.111))}.alert.warning[data-v-4165b473]{background-color:var(--color-warning-soft,oklch(97.96% .0158 73.68))}.alert.warning .icon .mini-icon[data-v-4165b473]{color:var(--color-warning,oklch(70.49% .1867 47.6))}.alert.warning .content .title[data-v-4165b473]{color:var(--color-warning-strong,oklch(40.839% .1165 38.172))}.alert.warning .content .description[data-v-4165b473]{color:var(--color-warning-text,oklch(55.343% .1739 38.402))}.alert.success[data-v-4165b473]{background-color:var(--color-success-soft,oklch(98.135% .0124 149.917))}.alert.success .icon .mini-icon[data-v-4165b473]{color:var(--color-success,oklch(55.106% .1432 149.926))}.alert.success .content .title[data-v-4165b473]{color:var(--color-success-strong,oklch(39.253% .0896 152.535))}.alert.success .content .description[data-v-4165b473]{color:var(--color-success-text,oklch(52.73% .1371 150.069))}.alert.info[data-v-4165b473]{background-color:var(--color-info-soft,oklch(97.05% .0142 254.6))}.alert.info .icon .mini-icon[data-v-4165b473]{color:var(--color-info,oklch(62.31% .188 259.81))}.alert.info .content .title[data-v-4165b473]{color:var(--color-info-strong,oklch(30.152% .1159 260.405))}.alert.info .content .description[data-v-4165b473]{color:var(--color-info-text,oklch(48.82% .2172 264.38))}.alert .icon[data-v-4165b473]{margin-right:.75rem}.alert .content[data-v-4165b473]{flex-direction:column;justify-content:center;gap:.25rem;font-size:.875rem;line-height:1.25rem;display:flex}.alert .content .title[data-v-4165b473]{font-weight:500}.sub-heading[data-v-6b0f6ff6]{padding:1rem 0}.actions[data-v-6b0f6ff6]{justify-content:flex-end;gap:1rem;width:100%;padding:1rem 0;display:flex}img[data-v-56f974c8]{max-width:100%;display:block}.image-wrapper.has-caption[data-v-56f974c8]{flex-direction:column;align-items:center;gap:.5rem;display:flex}.image-wrapper.has-caption figcaption[data-v-56f974c8]{font-size:.875rem;font-style:italic}.image-wrapper[data-v-56f974c8]{width:100%}.image-inner[data-v-56f974c8]{width:fit-content}.image-inner.fluid[data-v-56f974c8]{width:100%}.image-inner[data-v-56f974c8],.image-wrapper[data-v-56f974c8]{height:100%}.image[data-v-56f974c8]{max-height:100%}.image.rounded-4[data-v-56f974c8],.skeleton.rounded-4[data-v-56f974c8]{border-radius:.25rem}.image.rounded-8[data-v-56f974c8],.skeleton.rounded-8[data-v-56f974c8]{border-radius:.5rem}.image.rounded-16[data-v-56f974c8],.skeleton.rounded-16[data-v-56f974c8]{border-radius:1rem}.image.rounded-100[data-v-56f974c8],.skeleton.rounded-100[data-v-56f974c8]{border-radius:50%}.image-wrapper .skeleton[data-v-56f974c8]{background-color:var(--color-border-default,oklch(86.277% .0063 264.565));width:100%;height:100%;animation:var(--animate-pulse)}.labels[data-v-b23b8d25]{z-index:10;flex-wrap:wrap;justify-content:flex-end;gap:.5rem;display:flex;position:absolute;top:.75rem;right:.75rem}.dark .labels[data-v-b23b8d25]{--color-tag-info-soft-bg:oklch(93.192% .0316 255.585);--color-tag-info-soft-text:oklch(48.82% .2172 264.376);--color-tag-success-soft-bg:oklch(96.241% .0434 156.743);--color-tag-success-soft-text:oklch(52.73% .1371 150.069);--color-tag-neutral-soft-bg:oklch(96.696% .0029 264.542);--color-tag-neutral-soft-text:oklch(37.293% .0306 259.733);--color-tag-warning-orange-soft-bg:oklch(95.42% .0372 75.164);--color-tag-warning-orange-soft-text:oklch(55.343% .1739 38.402);--color-tag-accent-soft-bg:oklch(94.643% .0327 307.174);--color-tag-accent-soft-text:oklch(49.552% .2369 301.924);--color-tag-danger-soft-bg:oklch(93.564% .0309 17.717);--color-tag-danger-soft-text:oklch(50.542% .1905 27.518);--color-tag-warning-yellow-soft-bg:oklch(97.292% .0693 103.193);--color-tag-warning-yellow-soft-text:oklch(55.378% .1207 66.442)}[data-v-b23b8d25] .image{object-fit:cover;width:100%;height:100%}.amount[data-v-b23b8d25]{color:var(--color-text-secondary,oklch(55.1% .023 264.36));flex-direction:column;align-items:center;gap:.5rem;margin-top:2.75rem;display:flex}.amount span[data-v-b23b8d25]{font-size:.875rem;line-height:1.25rem}.information[data-v-4c2d6a7b],.custom-value[data-v-4c2d6a7b]{justify-content:space-between;align-items:center;font-size:.75rem;line-height:1rem;display:flex}.custom-value[data-v-4c2d6a7b]{gap:1rem}.custom-value[data-v-4c2d6a7b] .input-container,.custom-value[data-v-4c2d6a7b] .button{width:100%;max-width:7.25rem}.information .delivery[data-v-4c2d6a7b]{color:var(--color-success-text,oklch(52.73% .1371 150.069));align-items:center;gap:.25rem;display:flex}.information .delivery .icon[data-v-4c2d6a7b]{width:1rem;height:1rem}.information .delivery .icon[data-v-4c2d6a7b] svg{stroke-width:2px}.information .delivery .delivery-time[data-v-4c2d6a7b]{font-weight:500}.information .price[data-v-4c2d6a7b]{color:var(--color-danger-text,oklch(57.004% .2035 26.111));margin-left:auto}.dark .information .price[data-v-4c2d6a7b]{color:var(--color-danger-muted,oklch(80.8% .114 19.571))}.price .price-per[data-v-4c2d6a7b]{color:var(--color-text-secondary,oklch(55.1% .023 264.36))}.not-available[data-v-4c2d6a7b]{color:var(--color-danger-text,oklch(57.004% .2035 26.111));align-items:center;gap:.25rem;font-size:.75rem;line-height:1rem;display:flex}.option-card[data-v-917bcc94]{outline:1px solid var(--color-field-border,oklch(86.277% .0063 264.565));cursor:pointer;background-color:var(--color-surface-raised-alt,oklch(100% 0 0));border-radius:.5rem;justify-content:center;min-width:17.5rem;min-height:16.5rem;display:flex;overflow:hidden}.option-card[data-v-917bcc94]:hover,.option-card[data-v-917bcc94]:focus{box-shadow:var(--shadow-card-hover)}.option-card[data-v-917bcc94]:focus:not(.selected):not(.disabled){outline:3px dotted var(--color-accent,oklch(54.615% .2152 262.881))}.option-card.selected[data-v-917bcc94]{outline:3px solid var(--color-accent,oklch(54.615% .2152 262.881))!important}.option-card.disabled[data-v-917bcc94]{border-color:var(--color-field-border,oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));cursor:default}.option-card.disabled[data-v-917bcc94]:hover{box-shadow:none}.option-card.disabled .content[data-v-917bcc94] *{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))!important}.option-card.disabled .header[data-v-917bcc94],.option-card.disabled .content[data-v-917bcc94]{filter:grayscale()}.option-card .inner[data-v-917bcc94]{width:100%}.no-option[data-v-917bcc94]{text-align:center;color:var(--color-text-primary,oklch(21.049% .032 264.664));flex-direction:column;justify-content:center;align-items:center;display:flex}.no-option[data-v-917bcc94] .icon{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));width:3.5rem;height:3.5rem;margin-bottom:1rem}.no-option h3[data-v-917bcc94]{font-size:.875rem;font-weight:400;line-height:1.25rem}.header[data-v-917bcc94]{background-color:var(--color-surface-raised,oklch(100% 0 0));border-radius:.5rem .5rem 0 0;justify-content:center;width:100%;height:10.25rem;display:flex;position:relative}.option-card .content[data-v-917bcc94]{padding:1rem 1rem .75rem}.content .title[data-v-917bcc94]{color:var(--color-text-primary,oklch(21.049% .032 264.664));padding-bottom:.25rem;font-size:.875rem;font-weight:500;line-height:1.25rem}.content .description[data-v-917bcc94]{color:var(--color-text-primary,oklch(21.049% .032 264.664));font-size:.75rem;line-height:1rem}.option-card .footer[data-v-917bcc94]{padding:0 1rem 1rem;font-size:.875rem;line-height:1.25rem}.status[data-v-aa0d87a4]{background-color:var(--color-surface-disabled-subtle,oklch(98.498% .0018 247.859));border-radius:9999px;flex-shrink:0;justify-content:center;align-items:center;width:1.5rem;height:1.5rem;display:flex}.dark .status[data-v-aa0d87a4]{background-color:var(--color-field-background,oklch(100% 0 0))}.status.done[data-v-aa0d87a4]{background-color:var(--color-success-soft,oklch(98.135% .0124 149.917))}.dark .status.done[data-v-aa0d87a4]{background-color:var(--color-success,oklch(55.106% .1432 149.926))}.done .micro-icon[data-v-aa0d87a4]{color:var(--color-success,oklch(55.106% .1432 149.926))}.dark .done .micro-icon[data-v-aa0d87a4]{color:var(--color-on-success,oklch(100% 0 0))}.status.attention[data-v-aa0d87a4]{background-color:var(--color-danger-soft,oklch(97.053% .0129 17.38))}.attention .micro-icon[data-v-aa0d87a4]{color:var(--color-danger-text,oklch(57.004% .2035 26.111))}.dark .attention .micro-icon[data-v-aa0d87a4]{color:var(--color-danger-strong,oklch(39.329% .1242 24.368))}.overlay[data-v-66d42f70]{z-index:10;pointer-events:auto;width:100%;height:100%;position:absolute;inset:0}.overlay.fixed[data-v-66d42f70]{z-index:1000;position:fixed!important}.option-step-container[data-v-304f16a6]{position:relative}.edit-button[data-v-304f16a6]{position:absolute;top:1.25rem;right:3.125rem}.configurator-step.options[data-v-304f16a6] .content{padding-right:0}@media (width>=640px){.configurator-step.options[data-v-304f16a6] .content{padding-right:1.5rem}}.configurator-step.options[data-v-304f16a6] .header .state-indicator{display:none}@media (width>=640px){.configurator-step.options[data-v-304f16a6] .header .state-indicator{display:flex}}.configurator-step.options .subtitle[data-v-304f16a6]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.configurator-step.options .option-container[data-v-304f16a6]{grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;padding-block:.25rem;display:grid}.option-container .option[data-v-304f16a6]{display:flex;position:relative}.option-container .option .option-card[data-v-304f16a6]{flex:1}@media (width>=640px){.option-container .option.hide[data-v-304f16a6]{display:none}}.option-container .overlay[data-v-304f16a6]{width:100%;height:100%;color:var(--color-text-inverse,oklch(100% 0 0));cursor:pointer;border-radius:.5rem;justify-content:center;align-items:center;font-size:2.25rem;display:none;position:absolute;bottom:0;right:0}@media (width>=640px){.option-container .overlay[data-v-304f16a6]{display:flex}}.configurator-step.options .alert[data-v-304f16a6]{margin-top:1rem;margin-right:1rem}@media (width>=640px){.configurator-step.options .alert[data-v-304f16a6]{margin-right:0}}.configurator-step.simple[data-v-6fa4e0b0]{background-color:var(--color-surface-raised,oklch(100% 0 0));width:100%;box-shadow:var(--shadow-container);overflow:hidden}@media (width>=640px){.configurator-step.simple[data-v-6fa4e0b0]{border-radius:1rem}}.configurator-step.simple .content[data-v-6fa4e0b0]{padding:0 1rem 1.5rem}@media (width>=640px){.configurator-step.simple .content[data-v-6fa4e0b0]{padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header[data-v-6fa4e0b0]{background-color:inherit;border:none;align-items:flex-start;width:100%;padding:1rem;display:flex}@media (width>=640px){.configurator-step.simple .header[data-v-6fa4e0b0]{align-items:center;min-height:4.5rem;padding-left:1.5rem;padding-right:1.5rem}}.configurator-step.simple .header .title[data-v-6fa4e0b0]{text-align:left;color:var(--color-text-primary,oklch(21.049% .032 264.664));font-weight:500}@media (width>=640px){.configurator-step.simple .header .title[data-v-6fa4e0b0]{white-space:nowrap}}.configurator-step.simple .inner[data-v-6fa4e0b0]{flex-direction:column;flex-shrink:1;row-gap:1rem;display:flex}@media (width>=640px){.configurator-step.simple .inner[data-v-6fa4e0b0]{flex-direction:row;align-items:center}}.configurator-step.simple .measurements-form[data-v-6fa4e0b0]{flex-direction:column;gap:1rem;display:flex}.configurator-step.simple .measurements-form .submit-button[data-v-6fa4e0b0]{width:100%}.configurator-step.simple .measurement-inputs[data-v-6fa4e0b0]{flex-wrap:wrap;align-items:center;gap:.625rem;display:flex}@media (width>=640px){.configurator-step.simple .measurement-inputs[data-v-6fa4e0b0]{flex-wrap:nowrap}}.configurator-step.simple .measurement-inputs.has-errors[data-v-6fa4e0b0]{align-items:flex-start!important}.configurator-step.simple .measurement-inputs.has-errors .separator[data-v-6fa4e0b0]{color:var(--color-text-primary,oklch(21.049% .032 264.664));margin-top:.5rem}.configurator-step.simple .total[data-v-6fa4e0b0]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));text-align:right;flex-grow:1;margin-left:auto}.configurator-step.simple .status-text[data-v-6fa4e0b0]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));text-align:right;width:100%}@media (width>=640px){.configurator-step.simple .status-text[data-v-6fa4e0b0]{text-align:left}}.configurator-step.simple[data-v-6fa4e0b0] .input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple[data-v-6fa4e0b0] .input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.configurator-step.simple[data-v-6fa4e0b0] .input[type=number]{-moz-appearance:textfield}.measurement-inputs[data-v-6fa4e0b0] .measurement-input{width:100%;max-width:7rem}.configurator[data-v-62d3a628] .configurator-step .header{gap:1rem;overflow:hidden}.configurator[data-v-62d3a628] .configurator-step .header .title{text-overflow:ellipsis;align-items:center;gap:.5rem;margin-right:.5rem;display:flex;overflow:hidden}.configurator[data-v-62d3a628] .configurator-step .header .title .mini-icon{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}@media (width>=640px){.configurator[data-v-62d3a628] .configurator-step .header .title{white-space:nowrap;width:16rem;max-width:16rem}}.configurator-step[data-v-62d3a628] .subtitle{text-overflow:ellipsis;white-space:nowrap;text-align:right;margin-left:auto;overflow:hidden}.configurator-step[data-v-62d3a628] .edit-button{margin-left:auto}@media (width>=640px){.configurator-step[data-v-62d3a628] .subtitle{margin-left:0}}.loader[data-v-62d3a628]{margin:2.5rem auto}.reference-input[data-v-b34c7c35] .icon{color:var(--color-accent,oklch(54.615% .2152 262.881))}[data-v-27cea237] .header{flex-wrap:wrap;gap:0;display:flex}@media (width>=640px){[data-v-27cea237] .header{gap:1.5rem}}.header .product-image[data-v-27cea237]{height:auto;width:4.75rem!important}@media (width>=640px){.header .product-image[data-v-27cea237]{width:8.5rem!important}}.header .product-image .image[data-v-27cea237]{width:4.75rem;height:4.75rem}@media (width>=640px){.header .product-image .image[data-v-27cea237]{width:8.5rem!important}}.header .title[data-v-27cea237]{color:var(--color-text-primary,oklch(21.049% .032 264.664));margin-bottom:.5rem}.header .subtitle[data-v-27cea237]{color:var(--color-text-secondary,oklch(55.1% .023 264.36));gap:.625rem;margin-bottom:1rem;font-size:.875rem;line-height:1.25rem;display:flex}.header .subtitle .icon[data-v-27cea237]{color:var(--color-success,oklch(55.106% .1432 149.926))}.header .reference[data-v-27cea237]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));font-size:.875rem;line-height:1.25rem}.header .reference .value[data-v-27cea237]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.header .inner[data-v-27cea237]{flex-shrink:1;max-width:calc(100% - 4.75rem)}@media (width>=640px){.header .inner[data-v-27cea237]{max-width:calc(100% - 10rem)}}.header .inner .reference-input[data-v-27cea237]{max-width:30rem;display:none}@media (width>=640px){.header .inner .reference-input[data-v-27cea237]{display:flex}}.header>.reference-input[data-v-27cea237]{width:100%;display:block}@media (width>=640px){.header>.reference-input[data-v-27cea237]{display:none}}.footer-wrapper[data-v-27cea237]{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:.5rem;width:100%;display:flex}.footer-wrapper .specifications[data-v-27cea237]{display:none}@media (width>=640px){.footer-wrapper .specifications[data-v-27cea237]{width:100%;display:flex}}@media (width>=1024px){.footer-wrapper .specifications[data-v-27cea237]{width:auto}}.footer-wrapper .right[data-v-27cea237]{justify-content:space-between;align-items:center;gap:1.25rem;width:100%;margin-left:auto;display:flex}@media (width>=1024px){.footer-wrapper .right[data-v-27cea237]{justify-content:normal;width:auto}}.footer-wrapper .right .add-to-cart[data-v-27cea237]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.footer-wrapper .right .add-to-cart .desktop[data-v-27cea237]{display:none}@media (width>=768px){.footer-wrapper .right .add-to-cart .desktop[data-v-27cea237]{display:flex}}.footer-wrapper .right .add-to-cart .mobile[data-v-27cea237]{display:flex}@media (width>=768px){.footer-wrapper .right .add-to-cart .mobile[data-v-27cea237]{display:none}}.footer-wrapper .right .sub-total[data-v-27cea237]{flex-flow:column wrap;align-items:flex-end;display:flex}.footer-wrapper .right .sub-total .sub-price[data-v-27cea237]{color:var(--color-text-secondary,oklch(55.1% .023 264.36));flex-wrap:wrap;gap:.5rem;width:100%;max-width:250px;font-size:.75rem;display:flex;line-height:1.2rem!important}@media (width>=640px){.footer-wrapper .right .sub-total .sub-price[data-v-27cea237]{font-size:.875rem;line-height:1.25rem}}.footer-wrapper .right .sub-total .sub-price .packaging[data-v-27cea237],.footer-wrapper .right .sub-total .sub-price .shipping[data-v-27cea237]{margin-left:auto}.footer-wrapper .right .sub-total .excluded-from-price[data-v-27cea237]{color:var(--color-text-primary,oklch(21.049% .032 264.664));font-size:.75rem;line-height:1rem}.footer-wrapper .right .sub-total .price[data-v-27cea237]{color:var(--color-danger,oklch(61.535% .2075 25.224));width:100%;font-size:1.875rem;font-weight:700;line-height:2.25rem;display:flex}@media (width>=1024px){.footer-wrapper .right .sub-total .price[data-v-27cea237]{justify-content:flex-end}}.footer-wrapper .right .sub-total .price .label[data-v-27cea237]{margin-right:auto}.footer-wrapper .right .sub-total .price .decimal[data-v-27cea237]{font-size:1.3rem;position:relative;top:-.3em}.footer-wrapper .right .sub-total .price.small[data-v-27cea237]{font-size:1.2rem;line-height:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-27cea237]{font-size:1.2rem;top:0}@media (width>=640px){.footer-wrapper .right .sub-total .price.small[data-v-27cea237]{font-size:1.5rem}.footer-wrapper .right .sub-total .price.small .decimal[data-v-27cea237]{font-size:1.5rem;top:-.1px}}[data-v-02ebaf06] .image-wrapper{height:10.25rem}[data-v-02ebaf06] .image-wrapper .image{object-fit:cover;width:100%;height:100%}[data-v-02ebaf06] .image-wrapper.dense{height:unset;flex-shrink:0;width:auto}[data-v-02ebaf06] .image-wrapper.disabled{filter:grayscale()}.card[data-v-02ebaf06]{cursor:pointer;border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));flex-direction:column;width:17.625rem;display:flex;overflow:auto}.card:not(.passive)[data-v-02ebaf06]:hover,.card:not(.passive)[data-v-02ebaf06]:focus{box-shadow:var(--shadow-card-hover)}.card[data-v-02ebaf06]:not(.flat){border:.0625rem solid var(--color-border-subtle,oklch(92.48% .0027 264.541))}.card.passive[data-v-02ebaf06]{cursor:default}.card.disabled[data-v-02ebaf06]{cursor:default;border-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52))}.card.disabled[data-v-02ebaf06]:hover{box-shadow:none}.card.disabled .content[data-v-02ebaf06]{filter:grayscale()}.card.dense[data-v-02ebaf06]{flex-direction:row;justify-content:flex-start;width:100%}.card.dense .inner[data-v-02ebaf06]{flex-shrink:1;padding:.875rem}.card.dense .inner .header[data-v-02ebaf06]{padding-bottom:.25rem}.card.flat[data-v-02ebaf06]:hover{background-color:var(--color-surface-subtle,oklch(100% 0 0));box-shadow:none}.card.flush .inner[data-v-02ebaf06]{padding:0}.card .inner[data-v-02ebaf06]{flex-direction:column;width:100%;padding:1rem;display:flex}.card .inner .header[data-v-02ebaf06]{border-top-left-radius:.25rem;border-top-right-radius:.25rem;flex-direction:column;width:100%;padding-bottom:.5rem;display:flex;position:relative}.card .inner .header .title[data-v-02ebaf06]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75 / 1.125)));padding-bottom:.25rem}.card .inner .header .subtitle[data-v-02ebaf06]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-secondary,oklch(55.1% .023 264.36))}.card .inner .content[data-v-02ebaf06]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)))}.card .inner .footer[data-v-02ebaf06]{padding-top:1rem}[data-v-0996fc70]{will-change:height;backface-visibility:hidden;perspective:1000px;transform:translateZ(0)}.expand-enter-active[data-v-0996fc70],.expand-leave-active[data-v-0996fc70]{transition-property:height,opacity;transition-timing-function:var(--default-transition-timing-function);transition-duration:var(--v66825474);overflow:hidden}.expand-enter-from[data-v-0996fc70],.expand-leave-to[data-v-0996fc70]{opacity:0}.expand-enter[data-v-0996fc70],.expand-leave-to[data-v-0996fc70]{height:var(--v23e01c27)}.card[data-v-d1c73970]{width:100%}.card.expanded[data-v-d1c73970]{max-height:var(--v2464f9f5)}.card[data-v-d1c73970] .inner{padding:.25rem}.button[data-v-d1c73970]{background-color:var(--color-surface-subtle,oklch(100% 0 0));width:100%;height:auto;color:var(--color-accent,oklch(54.615% .2152 262.881));margin-top:.25rem;padding-block:.625rem}.button[data-v-d1c73970]:not([disabled]):hover{background-color:var(--color-surface-subtle,oklch(100% 0 0))}.dark .button[data-v-d1c73970]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.expand-enter-active[data-v-d1c73970],.expand-leave-active[data-v-d1c73970]{transition-property:opacity,height}.expand-enter[data-v-d1c73970],.expand-leave-to[data-v-d1c73970]{opacity:0}.radio-group[data-v-12967f81]{pointer-events:none;flex-direction:column;gap:.25rem;display:flex}.radio-group[data-v-12967f81] *{pointer-events:auto}.error .error-message[data-v-12967f81]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-danger-text,oklch(57.004% .2035 26.111));margin-top:.5rem}.expandable-radio-group[data-v-b778af2e]{margin-top:.25rem}.virtual-scroll-container[data-v-d375067a]{width:100%;height:100%;overflow-y:auto}.virtual-scroll-container>div[data-v-d375067a]{flex-direction:column;display:flex}.skeleton[data-v-269870f9]{height:1.25rem;animation:var(--animate-pulse,pulse-269870f9 2s cubic-bezier(.4, 0, .6, 1) infinite);background-color:var(--color-border-default,oklch(86.277% .0063 264.565));display:block}.skeleton.has-content[data-v-269870f9]{height:auto}.skeleton.circular[data-v-269870f9]{border-radius:50%}.skeleton.text[data-v-269870f9]{border-radius:.25rem;scale:1 .7}.skeleton.text:not(.has-content)[data-v-269870f9]{height:auto;color:inherit}.skeleton.text:not(.has-content)[data-v-269870f9]:before{content:\"\xA0\"}.skeleton [data-v-269870f9-s]{visibility:hidden}@keyframes pulse-269870f9{50%{opacity:.5}}.filter-bar-container[data-v-d99cbd82]{width:fit-content;position:relative}.filter-bar-container .filter-bar:hover[data-v-d99cbd82]:has(.button:hover){background-color:var(--color-surface-subtle,oklch(100% 0 0))}.filter-bar-container .filter-bar .label-container[data-v-d99cbd82]{margin-left:.5625rem;margin-right:2rem;display:flex}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]{white-space:nowrap;outline-width:2px;outline-style:solid;outline-color:var(--color-text-inverse,oklch(100% 0 0));overflow:hidden}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]:not(:first-child){margin-left:-.5rem}.filter-bar-container .filter-bar .label-container.concat .label[data-v-d99cbd82]:not(:last-child){max-width:2.5rem}.filter-bar-container .filter-bar .label-container .label[data-v-d99cbd82]{border-radius:var(--radius-lg,.5rem)}.filter-bar-container .clear[data-v-d99cbd82]{position:absolute;top:50%;right:.5rem;translate:0 -50%}.filter-actions[data-v-ac11057c]{margin-top:1rem}.filter-actions .button[data-v-ac11057c]{width:100%}.filter-actions .select-all[data-v-ac11057c]{margin-bottom:.5rem}.filter-dropdown[data-v-33ad0220]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));min-width:16.5rem;max-height:33.625rem;box-shadow:var(--shadow-menu-large);margin-top:.5rem;padding:1rem}.filter-dropdown[data-v-33ad0220] .menu{height:100%;max-height:24.625rem;overflow:auto}.filter-popup[data-v-33ad0220] .menu{background-color:inherit!important}.filter-popup[data-v-33ad0220] .menu .menu-item:not(.current):not(:hover){background-color:inherit}.input-container[data-v-11ff09da] .container-inner .inline-container-appended{margin-right:1.5rem}.input-container[data-v-11ff09da] .container-inner .inline-container-appended .button{background-color:#0000}.dark .date-picker[data-v-11ff09da]{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}.badge[data-v-13a83ea4]{width:1.5rem;height:1.5rem;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));font-weight:var(--font-weight-medium,500);color:oklch(100% 0 0);border-radius:50%;justify-content:center;align-items:center;display:flex;position:relative}.badge.small[data-v-13a83ea4]{width:.5rem;height:.5rem}.badge.small.position[data-v-13a83ea4]{top:-.125rem;right:-.125rem}.badge.blue[data-v-13a83ea4],.badge.blue .pulse[data-v-13a83ea4]{background-color:var(--color-accent,oklch(54.615% .2152 262.881))}.badge.green[data-v-13a83ea4],.badge.green .pulse[data-v-13a83ea4]{background-color:var(--color-success,oklch(55.106% .1432 149.926))}.badge.gray[data-v-13a83ea4]{background-color:var(--color-text-disabled,oklch(51.786% .0108 264.705));color:var(--color-surface-canvas,oklch(100% 0 0))}.badge.gray .pulse[data-v-13a83ea4]{background-color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.badge.orange[data-v-13a83ea4],.badge.orange .pulse[data-v-13a83ea4]{background-color:var(--color-warning,oklch(70.49% .1867 47.6))}.badge.purple[data-v-13a83ea4],.badge.purple .pulse[data-v-13a83ea4]{background-color:oklch(49.552% .2369 301.924)}.badge.red[data-v-13a83ea4],.badge.red .pulse[data-v-13a83ea4]{background-color:var(--color-danger-fill,oklch(57.7% .245 27.325))}.badge.yellow[data-v-13a83ea4]{color:oklch(28% .05 72);background-color:oklch(84% .14 96)}.badge.yellow .pulse[data-v-13a83ea4]{background-color:oklch(84% .14 96)}.badge.position[data-v-13a83ea4]{position:absolute;top:-.5rem;right:-.75rem}.badge.pulsating .pulse[data-v-13a83ea4]{width:100%;height:100%;animation:var(--animate-ping,ping-13a83ea4 1s cubic-bezier(0, 0, .2, 1) infinite);opacity:.75;border-radius:50%;position:absolute}.badge.pulsating .content[data-v-13a83ea4]{z-index:1}.dark .badge.purple[data-v-13a83ea4],.dark .badge.purple .pulse[data-v-13a83ea4]{background-color:oklch(61.5% .185 304.5)}@keyframes ping-13a83ea4{75%,to{opacity:0;transform:scale(2)}}.menu-item[data-v-b143be33]{background-color:inherit;height:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));position:relative}.menu-item.title[data-v-b143be33]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.menu-item.simple[data-v-b143be33]{color:var(--color-accent,oklch(54.615% .2152 262.881))}.menu-item.simple[data-v-b143be33]:hover{text-decoration-line:underline}.menu-item.simple:not(.first)[data-v-b143be33]:before{width:1.5rem;color:var(--color-border-default,oklch(86.277% .0063 264.565));content:\"|\";justify-content:center;align-items:center;margin-left:-1.5rem;display:flex;position:absolute;top:50%;translate:0 -50%}@media (width>=48rem){.menu-item.simple:not(.first)[data-v-b143be33]:before{width:3rem;margin-left:-3rem}}.menu-item.disabled[data-v-b143be33],.menu-item[disabled][data-v-b143be33]{pointer-events:none;background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.menu-item .menu-item-content[data-v-b143be33]{height:100%;color:var(--v0a447ee6);align-items:center;column-gap:.75rem;display:flex}.menu-item .menu-item-content .mini-icon[data-v-b143be33]{color:var(--v0a447ee6)}.menu-item .menu-item-content .sub-menu-trigger[data-v-b143be33]{width:1rem;height:1rem}.menu-item .menu-item-content .sub-menu-trigger[data-v-b143be33],.menu-item .menu-item-content .append-icon[data-v-b143be33],.menu-item .menu-item-content .count[data-v-b143be33],.menu-item .menu-item-content .hotkey[data-v-b143be33]{margin-left:auto}.menu-item .menu-item-content .count[data-v-b143be33]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));font-weight:var(--font-weight-medium,500);border-style:solid;border-width:1px;border-radius:2147483647px;padding-block:.125rem;padding-inline:.625rem}.menu-item .menu-item-content .current-item-icon[data-v-b143be33]{width:1.25rem;height:1.25rem;color:var(--color-accent,oklch(54.615% .2152 262.881));margin-left:auto}.menu[data-v-c10397af]{align-items:center;display:flex}.menu:not(.vertical):not(.simple)[data-v-c10397af]{gap:1.5rem;height:100%}.menu:not(.vertical):not(.simple)[data-v-c10397af] .menu-item{background-color:#0000;border-color:#0000;border-bottom-style:solid;border-bottom-width:.1875rem}.menu:not(.vertical):not(.simple)[data-v-c10397af] .menu-item:not(.current):hover,.menu:not(.vertical):not(.simple)[data-v-c10397af] .menu-item:not(.current):focus{border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.menu:not(.vertical):not(.simple)[data-v-c10397af] .menu-item .menu-item-content{font-weight:var(--font-weight-semibold,600);color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.menu:not(.vertical):not(.simple)[data-v-c10397af] .current{border-color:var(--color-primary-active,oklch(57.034% .1951 261.584))}.menu.vertical[data-v-c10397af]{background-color:inherit;flex-direction:column;align-items:flex-start;gap:.25rem}.menu.vertical .item-vertical[data-v-c10397af]{border-radius:var(--radius-lg,.5rem);border-style:none;width:100%;padding:.5rem}.menu.vertical .item-vertical:not(.current):not(.title)[data-v-c10397af]:hover,.menu.vertical .item-vertical:not(.current):not(.title)[data-v-c10397af]:focus,.menu.vertical .item-vertical:not(.current):not(.title)[data-v-c10397af]:focus-visible{background-color:var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838))}.menu.vertical[data-v-c10397af] .divider{margin-block:.3125rem}.menu.vertical .current[data-v-c10397af]{background-color:var(--color-surface-subtle,oklch(100% 0 0))}.menu.simple[data-v-c10397af]{flex-wrap:wrap;justify-content:center;gap:1.5rem}@media (width>=48rem){.menu.simple[data-v-c10397af]{gap:3rem}}.menu.mini[data-v-c10397af] .count{display:none}.menu[data-v-c10397af] .current{border-color:var(--color-accent,oklch(54.615% .2152 262.881))}.menu[data-v-c10397af] .current .icon,.menu[data-v-c10397af] .current .mini-icon,.menu[data-v-c10397af] .current .menu-item-content{color:var(--color-accent,oklch(54.615% .2152 262.881))!important}.sub-menu[data-v-c10397af]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));width:16.5rem;box-shadow:var(--shadow-menu);padding:.75rem}.sub-menu .item-vertical[data-v-c10397af]{border:none!important}.inputs[data-v-23480448]{margin-block:1rem}.inputs .input-from[data-v-23480448],.inputs .to[data-v-23480448]{margin-bottom:.5rem}.inputs .to[data-v-23480448]{text-align:center;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-primary,oklch(21.049% .032 264.664));display:block}.search[data-v-bbb393e1]{margin-bottom:1rem}.list[data-v-bbb393e1]{max-height:21.625rem;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));padding:.25rem;overflow:visible auto}.list .badge[data-v-bbb393e1]{margin-top:.375rem}.loader-wrapper[data-v-bbb393e1]{justify-content:center;align-items:center;width:100%;margin-top:-.25rem;display:flex}.loader-wrapper.loading[data-v-bbb393e1]{margin-block:.25rem}.menu-loader[data-v-bbb393e1]{margin-top:.5rem}.menu.vertical[data-v-bbb393e1]{margin-bottom:.25rem;padding-block:.25rem}.group-checkbox[data-v-bbb393e1] .label{font-weight:var(--font-weight-bold,700)}.filter-group[data-v-b2f6b631]{flex-wrap:wrap;align-items:flex-start;gap:.5rem;display:flex}.filter-group .title[data-v-b2f6b631]{font-size:var(--text-sm,.875rem);--tw-leading:2.5rem;line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));text-wrap:nowrap;color:var(--color-text-disabled,oklch(51.786% .0108 264.705));margin-right:.25rem;display:none}@media (width>=48rem){.filter-group .title[data-v-b2f6b631]{display:block}}.filter-group .base-filter[data-v-b2f6b631]{text-wrap:nowrap}.filter-group .button[data-v-b2f6b631]{font-weight:var(--font-weight-normal,400);text-wrap:nowrap;color:var(--color-accent,oklch(54.615% .2152 262.881));margin-top:.25rem}.pagination[data-v-b6644f47]{gap:.5rem;display:flex}.pagination .button[data-v-b6644f47]{position:relative}.pagination .button:not(:disabled)[data-v-b6644f47]{color:var(--color-accent,oklch(54.615% .2152 262.881))}.pagination .button:not(:disabled)[data-v-b6644f47]:not(.current){color:var(--color-text-primary,oklch(21.049% .032 264.664))}.pagination .button:not(:disabled)[data-v-b6644f47] .icon{width:1.25rem;height:1.25rem}.pagination .button[data-v-b6644f47]:not(:first-child):not(:last-child){width:2.5rem;display:none}@media (width>=48rem){.pagination .button[data-v-b6644f47]:not(:first-child):not(:last-child){display:flex}}.pagination .button[data-v-b6644f47]:not(:disabled):not(.current):hover{border-color:var(--color-border-default,oklch(86.277% .0063 264.565))}.pagination .button.current[data-v-b6644f47]{border-style:solid;border-width:2px;border-color:var(--color-accent,oklch(54.615% .2152 262.881))}.pagination .button .button-text[data-v-b6644f47]{display:none}@media (width>=48rem){.pagination .button .button-text[data-v-b6644f47]{display:block}}.pagination .dotdotdot[data-v-b6644f47]{align-self:center;display:none}@media (width>=48rem){.pagination .dotdotdot[data-v-b6644f47]{display:inline-block}}.card-cell[data-v-33faee0e]{min-width:0;display:flex}.card-cell[data-v-33faee0e] .card{width:100%;min-width:0}.card-cell[data-v-33faee0e] .card.dense .image-wrapper{flex-shrink:0;width:33%;max-width:12rem;height:100%}.card-cell[data-v-33faee0e] .card.dense .image-wrapper .image{object-fit:cover;width:100%;height:100%}.skeleton-card[data-v-33faee0e]{border:.0625rem solid var(--color-border-subtle,oklch(92.48% .0027 264.541));border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));flex-direction:column;width:100%;display:flex;overflow:hidden}.skeleton-card .skeleton-image[data-v-33faee0e]{border-radius:0}.skeleton-card .skeleton-content[data-v-33faee0e]{flex-direction:column;gap:.5rem;padding:1rem;display:flex}.table-controls[data-v-0966e421]{flex-wrap:wrap;flex-shrink:0;align-items:flex-start;gap:.75rem;padding-bottom:1rem;display:flex}.table-controls .search-field[data-v-0966e421]{width:18rem}.page-header[data-v-c2d3a568]{align-items:center;gap:.75rem;display:flex}.page-header .page-range[data-v-c2d3a568]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-variant-numeric:tabular-nums;white-space:nowrap;color:var(--color-text-secondary,oklch(55.1% .023 264.36));font-weight:600}.page-header .page-line[data-v-c2d3a568]{background-color:var(--color-divider,oklch(92.48% .0027 264.541));flex-grow:1;height:.0625rem}.pagination-anchor[data-v-af85c1e3]{z-index:10;justify-content:center;align-items:flex-start;height:0;display:flex;position:sticky;bottom:1rem}@media (width>=48rem){.pagination-anchor[data-v-af85c1e3]{justify-content:flex-end}}.pagination-anchor[data-v-af85c1e3]{pointer-events:none}.pagination-control[data-v-af85c1e3]{--pagination-shadow-color:var(--color-text-primary,oklch(21.049% .032 264.664));pointer-events:auto;border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));box-shadow:0 .75rem 1.75rem color-mix(in srgb, var(--pagination-shadow-color) 10%, transparent), 0 .125rem .375rem color-mix(in srgb, var(--pagination-shadow-color) 6%, transparent);align-items:center;gap:1rem;padding-block:.5rem;padding-inline:1rem;display:flex;translate:-.25rem -100%}.visible-range[data-v-af85c1e3]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-variant-numeric:tabular-nums;white-space:nowrap;color:var(--color-text-secondary,oklch(55.1% .023 264.36));display:none}.visible-range b[data-v-af85c1e3]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}@media (width>=48rem){.visible-range[data-v-af85c1e3]{display:inline}}.desktop-pagination[data-v-af85c1e3]{display:none}@media (width>=48rem){.desktop-pagination[data-v-af85c1e3]{display:flex}}.mobile-pagination[data-v-af85c1e3]{align-items:center;gap:.75rem;display:flex}.mobile-pagination .page-info[data-v-af85c1e3]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-variant-numeric:tabular-nums;white-space:nowrap}@media (width>=48rem){.mobile-pagination[data-v-af85c1e3]{display:none}}.card-grid[data-v-5c39e883]{flex-direction:column;display:flex}.list-content[data-v-5c39e883]{flex-grow:1;min-width:0;min-height:0}.virtual-scroll-container[data-v-5c39e883]{padding-right:.5rem;overflow-y:auto}.card-row[data-v-5c39e883] .card{height:100%}.list-loader[data-v-5c39e883]{justify-content:center;padding-block:4rem;display:flex}.list-loader[data-v-5c39e883] .loader{border-width:.25rem;width:3rem;height:3rem}.no-results[data-v-5c39e883]{flex-direction:column;align-items:center;gap:.5rem;padding-block:3rem;display:flex}.no-results .no-results-text[data-v-5c39e883]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-secondary,oklch(55.1% .023 264.36))}pre code.hljs{padding:1em;display:block;overflow-x:auto}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}.table-wrapper[data-v-ae92eb00]{--table-row-height:3.5rem;--table-cell-padding-inline:1rem;--table-cell-padding-block:.5rem;--table-filter-row-height:4rem;--table-header-font-weight:var(--font-weight-semibold,600);border-radius:var(--radius-lg,.5rem);width:100%;display:block;position:relative;overflow:clip}.table-wrapper.density-compact[data-v-ae92eb00]{--table-row-height:2.75rem;--table-cell-padding-inline:.75rem;--table-cell-padding-block:.375rem;--table-filter-row-height:3rem}.table-wrapper.density-comfortable[data-v-ae92eb00]{--table-row-height:4.25rem;--table-cell-padding-inline:1.25rem;--table-cell-padding-block:.75rem;--table-filter-row-height:4.5rem}.table-wrapper.fixed-layout table[data-v-ae92eb00]{table-layout:fixed}.table-wrapper table[data-v-ae92eb00]{border-collapse:collapse;text-indent:0;background-color:var(--color-surface-raised,oklch(100% 0 0));width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)))}.table-wrapper .sticky-container[data-v-ae92eb00]{z-index:10;position:sticky;bottom:0}.table-wrapper .sticky-container .scrollbar[data-v-ae92eb00]{background-color:var(--color-surface-raised-alt,oklch(100% 0 0));align-items:center;height:.75rem;display:flex}.table-wrapper .sticky-container .scrollbar .scroll-thumb[data-v-ae92eb00]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-field-border,oklch(86.277% .0063 264.565));height:.5rem;position:absolute}thead[data-v-9adf4cde]{z-index:10;background-color:var(--color-surface-raised-alt,oklch(100% 0 0));position:sticky;top:0}thead[data-v-9adf4cde] tr td{font-weight:var(--table-header-font-weight,var(--font-weight-semibold,600));color:var(--color-text-primary,oklch(21.049% .032 264.664))}thead[data-v-9adf4cde] tr td input{font-weight:var(--font-weight-normal,400)}thead[data-v-9adf4cde] tr td{box-shadow:var(--shadow-base), inset 0 -1px 0 0 var(--color-divider,oklch(92.48% .0027 264.541))}tbody[data-v-7ea6616f] tr:not(:last-child){border-bottom:solid .0625rem var(--color-divider,oklch(92.48% .0027 264.541))}td[data-v-ff47b77a]{padding-inline:var(--table-cell-padding-inline,1rem);vertical-align:middle;color:var(--color-text-primary,oklch(21.049% .032 264.664))}tr[data-v-dbc2a70c]{height:var(--table-row-height,3.5rem);max-height:var(--table-row-height,3.5rem);min-height:var(--table-row-height,3.5rem)}.no-results-row[data-v-e40365b9]{height:16rem;position:relative}.no-results-row td[data-v-e40365b9]{white-space:nowrap;width:100%;height:100%;position:absolute;overflow:hidden}.no-results-row td .wrapper[data-v-e40365b9]{text-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;gap:.5rem;width:100%;height:100%;padding:1rem;display:flex}.no-results-row td .wrapper .icon[data-v-e40365b9]{width:3rem;height:3rem;stroke:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.no-results-row td .wrapper span[data-v-e40365b9]{text-align:center;color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.table-selection[data-v-3e8932ae]{border-radius:var(--radius-2xl,1rem);border-style:solid;border-width:1px;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));background-color:var(--color-surface-raised,oklch(100% 0 0));align-items:center;gap:.5rem;width:100%;margin-top:.25rem;padding-block:.5rem;padding-inline:1.5rem;display:flex}.table-selection .amount[data-v-3e8932ae]{margin-right:auto}.table-selection .actions[data-v-3e8932ae]{flex-direction:column;gap:.5rem;display:flex}@media (width>=48rem){.table-selection .actions[data-v-3e8932ae]{flex-direction:row}}.list[data-v-5d12a523]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));width:16rem;box-shadow:var(--shadow-menu-large);padding-top:1rem;padding-bottom:.625rem;overflow:hidden}.list .list-inner[data-v-5d12a523]{flex-direction:column;gap:.375rem;max-height:33.625rem;display:flex;overflow:auto}:is(.list .active-columns,.list .available-columns)[data-v-5d12a523]{flex-direction:column;padding-inline:1rem;display:flex}:is(.list .active-columns,.list .available-columns) .title[data-v-5d12a523]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));font-weight:var(--font-weight-medium,500);color:var(--color-text-primary,oklch(21.049% .032 264.664));-webkit-user-select:none;user-select:none}:is(.list .active-columns,.list .available-columns) .column[data-v-5d12a523]{flex-direction:row;align-items:center;height:2rem;display:flex}:is(.list .active-columns,.list .available-columns) .column .checkbox-container[data-v-5d12a523]{width:fit-content;padding-right:.5rem}:is(.list .active-columns,.list .available-columns) .column .label[data-v-5d12a523]{text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));-webkit-user-select:none;user-select:none;overflow:hidden}:is(.list .active-columns,.list .available-columns) .column .drag-handle[data-v-5d12a523]{cursor:grab;background-color:#0000;margin-left:auto;padding-left:.5rem}:is(.list .active-columns,.list .available-columns) .column .drag-handle .icon[data-v-5d12a523]{width:1.25rem;height:1.25rem}.list .active-columns .title[data-v-5d12a523]{padding-bottom:.375rem}.list .active-columns .column.dragging[data-v-5d12a523]{visibility:hidden}.list .available-columns .title[data-v-5d12a523]{padding-block:.375rem}.no-columns[data-v-5d12a523]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.radio[data-v-5f8cb478]{border:1px solid var(--color-border-default,oklch(86.277% .0063 264.565));background-color:var(--color-field-background,oklch(100% 0 0));color:var(--color-accent-strong,oklch(48.82% .2172 264.376));appearance:none;background-origin:border-box;border-radius:100%;width:1rem;height:1rem;margin-top:.125rem}.radio[data-v-5f8cb478]:focus{--tw-ring-color:var(--color-accent-strong,oklch(48.82% .2172 264.376))}.radio.large[data-v-5f8cb478]{width:1.25rem;height:1.25rem}.label[data-v-5f8cb478]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);color:var(--color-text-primary,oklch(21.049% .032 264.664));align-items:flex-start;gap:.5rem;display:flex}.label[data-v-5f8cb478]:not(.disabled){cursor:pointer}.radio[data-v-5f8cb478]:not(:disabled):hover{border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.radio[data-v-5f8cb478]:checked:not(:disabled){border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));background-color:var(--color-accent,oklch(54.615% .2152 262.881));color:var(--color-on-accent,oklch(100% 0 0));background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}.radio[data-v-5f8cb478]:disabled{border-color:var(--color-border-default,oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.radio[data-v-5f8cb478]:disabled:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}.radio[data-v-5f8cb478]:checked:not(:disabled):hover{border-color:var(--color-accent,oklch(54.615% .2152 262.881));color:var(--color-on-accent,oklch(100% 0 0))}.display-options[data-v-704a2920]{border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));width:16rem;box-shadow:var(--shadow-menu-large);flex-direction:column;gap:.5rem;padding:1rem;display:flex}.display-options .title[data-v-704a2920]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));font-weight:var(--font-weight-medium,500);color:var(--color-text-primary,oklch(21.049% .032 264.664));-webkit-user-select:none;user-select:none}.display-options .reset-column-widths[data-v-704a2920]{align-self:flex-start}.table-head[data-v-23f13ec5]{top:var(--v348ad0d9);display:table-header-group}.table-head .select-column[data-v-23f13ec5],.table-head .action-column[data-v-23f13ec5]{z-index:2;background-color:var(--color-surface-raised-alt,oklch(100% 0 0))}.table-head .header-cell[data-v-23f13ec5]{position:relative}.table-head .resize-handle[data-v-23f13ec5]{z-index:1;cursor:col-resize;background-color:#0000;border:none;width:.5rem;height:100%;padding:0;display:block;position:absolute;top:0;right:0}.table-head .resize-handle[data-v-23f13ec5]:before{border-radius:var(--radius-sm,.25rem);content:\"\";background-color:#0000;width:.125rem;height:50%;position:absolute;top:25%;left:calc(50% - .0625rem)}.table-head .resize-handle[data-v-23f13ec5]:hover:before,.table-head .resize-handle[data-v-23f13ec5]:focus-visible:before{background-color:var(--color-accent-strong,oklch(48.82% .2172 264.376))}.table-head .action-column.action-column--wide[data-v-23f13ec5]{width:6.5rem}.table-head .table-settings[data-v-23f13ec5]{justify-content:flex-end;align-items:center;gap:.25rem;display:flex}.table-head .header[data-v-23f13ec5]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}.table-head .header.header--align-right[data-v-23f13ec5]{margin-left:auto}@media (hover:hover){.table-head .header[data-v-23f13ec5]:hover{cursor:pointer}.table-head .header.header--disabled[data-v-23f13ec5]:hover{cursor:default}}.table-head .header.active[data-v-23f13ec5]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.table-head .header .sort-icon[data-v-23f13ec5]{cursor:pointer;stroke-width:.125rem;width:1rem;height:1rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-23f13ec5],.table-head .header .sort-icon.right[data-v-23f13ec5]{top:50%;translate:0 -50%}.table-head .header .sort-icon.left[data-v-23f13ec5]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-23f13ec5]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-23f13ec5],.table-head .header .sort-icon.active[data-v-23f13ec5]{display:block}.table-head .header .sort-icon.sort-icon--disabled[data-v-23f13ec5]{display:none!important}.table-head [data-v-23f13ec5] .column-configurator{margin-left:auto}.table-head .filters[data-v-23f13ec5]{height:var(--table-filter-row-height,4rem);background-color:var(--color-surface-subtle,oklch(100% 0 0))}.table-head .filters .action-column[data-v-23f13ec5]{background-color:var(--color-surface-subtle,oklch(100% 0 0))}.table-head .filters td[data-v-23f13ec5]>div{min-width:6rem;font-weight:var(--font-weight-normal,400);max-width:18rem!important}.select-column[data-v-23f13ec5],.action-column[data-v-23f13ec5]{z-index:1;background-color:var(--color-surface-raised,oklch(100% 0 0));width:3rem;position:relative}.select-column.overlap[data-v-23f13ec5]:after,.action-column.overlap[data-v-23f13ec5]:before{--gradient-from:color-mix(in srgb, var(--color-text-primary,oklch(21.049% .032 264.664)) 5%, transparent);--gradient-to:transparent;--gradient-stops:var(--gradient-via-stops,var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position));opacity:.95;content:\"\";width:.625rem;height:100%;position:absolute;top:0}.select-column.overlap[data-v-23f13ec5]:after{--gradient-position:to right;right:-.625rem}@supports (background-image:linear-gradient(in lab, red, red)){.select-column.overlap[data-v-23f13ec5]:after{--gradient-position:to right in oklab}}.select-column.overlap[data-v-23f13ec5]:after{background-image:linear-gradient(var(--gradient-stops))}.action-column.overlap[data-v-23f13ec5]:before{--gradient-position:to left;left:-.625rem}@supports (background-image:linear-gradient(in lab, red, red)){.action-column.overlap[data-v-23f13ec5]:before{--gradient-position:to left in oklab}}.action-column.overlap[data-v-23f13ec5]:before{background-image:linear-gradient(var(--gradient-stops))}.prepend-row-column[data-v-23f13ec5]{white-space:nowrap;width:1%}tbody td.cell-wrap[data-v-23f13ec5]{white-space:normal;overflow-wrap:anywhere;padding-block:var(--table-cell-padding-block,.5rem)}[data-v-23f13ec5] tbody tr td:not(.select-column):not(.action-column){background-color:#0000;transition:background-image .2s}[data-v-23f13ec5] tbody tr.clickable{cursor:pointer}[data-v-23f13ec5] tbody tr.selected{background-image:linear-gradient(270deg, var(--color-surface-raised,oklch(100% 0 0)) 5%, var(--color-accent-soft,oklch(96.221% .019 240.333)) 20%, var(--color-accent-soft,oklch(96.221% .019 240.333)) 80%, var(--color-surface-raised,oklch(100% 0 0)) 95%)}[data-v-23f13ec5] tbody .float-right{float:right}@media (hover:hover){[data-v-23f13ec5] tbody tr.clickable:hover{background-image:linear-gradient(270deg, var(--color-surface-raised,oklch(100% 0 0)) 5%, var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838)) 20%, var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838)) 80%, var(--color-surface-raised,oklch(100% 0 0)) 95%)}}.table-footer[data-v-23f13ec5]{z-index:10;border-top-style:solid;border-top-width:1px;border-color:var(--color-divider,oklch(92.48% .0027 264.541));background-color:var(--color-surface-raised,oklch(100% 0 0));flex-wrap:wrap;justify-content:space-between;padding-block:.25rem;padding-inline:1rem;display:flex;position:sticky;bottom:0}.table-footer .table-footer-pagination[data-v-23f13ec5]{align-items:center;gap:1rem;width:100%;display:flex}.table-footer .current-page-info[data-v-23f13ec5]{color:var(--color-text-primary,oklch(21.049% .032 264.664));flex-wrap:wrap;flex-grow:1;align-items:center;row-gap:.5rem;display:flex}.table-footer .current-page-info .total-results[data-v-23f13ec5]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));margin-right:1.5rem}.table-footer .current-page-info .total-results span[data-v-23f13ec5]{font-weight:var(--font-weight-bold,700)}.table-footer .current-page-info .page-selector[data-v-23f13ec5]{flex-wrap:wrap;flex-grow:1;align-items:center;display:none}@media (width>=48rem){.table-footer .current-page-info .page-selector[data-v-23f13ec5]{display:flex}}.table-footer .current-page-info .page-selector[data-v-23f13ec5] .base-select{width:100%;max-width:6rem}.table-footer .current-page-info .page-selector .per-page[data-v-23f13ec5]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-disabled,oklch(51.786% .0108 264.705));margin-left:.75rem}.table-footer .pagination[data-v-23f13ec5]{margin-left:auto;padding-block:1rem}.actions-align-end[data-v-23f13ec5]{justify-content:flex-end;display:flex}.has-explicit-width[data-v-23f13ec5]{max-width:1px}.api-data-table__actions[data-v-df233c05]{gap:.5rem;display:flex}tfoot[data-v-df75f6c9] tr td{box-shadow:var(--shadow-base), inset 0 1px 0 0 var(--color-divider,oklch(92.48% .0027 264.541))}tfoot[data-v-df75f6c9] tr{max-height:initial;min-height:initial}.table-head[data-v-e2ecb434]{display:table-header-group}.table-head .select-column[data-v-e2ecb434],.table-head .action-column[data-v-e2ecb434]{z-index:2;background-color:var(--color-surface-raised-alt,oklch(100% 0 0))}.table-head .header[data-v-e2ecb434]{white-space:nowrap;-webkit-user-select:none;user-select:none;width:fit-content;display:flex;position:relative}.table-head .header.header--align-right[data-v-e2ecb434]{margin-left:auto}@media (hover:hover){.table-head .header[data-v-e2ecb434]:hover{cursor:pointer}.table-head .header.header--disabled[data-v-e2ecb434]:hover{cursor:default}}.table-head .header.active[data-v-e2ecb434]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.table-head .header .sort-icon[data-v-e2ecb434]{cursor:pointer;stroke-width:.125rem;width:1rem;height:1rem;display:none;position:absolute}.table-head .header .sort-icon.left[data-v-e2ecb434],.table-head .header .sort-icon.right[data-v-e2ecb434]{top:50%;translate:0 -50%}.table-head .header .sort-icon.left[data-v-e2ecb434]{right:-1.5rem}.table-head .header .sort-icon.right[data-v-e2ecb434]{left:-1.5rem}.table-head .header:hover .sort-icon[data-v-e2ecb434],.table-head .header .sort-icon.active[data-v-e2ecb434]{display:block}.table-head .header .sort-icon.sort-icon--disabled[data-v-e2ecb434]{display:none!important}.table-head [data-v-e2ecb434] .column-configurator{margin-left:auto}.table-head .filters[data-v-e2ecb434]{height:var(--table-filter-row-height,4rem);background-color:var(--color-surface-subtle,oklch(100% 0 0))}.table-head .filters .action-column[data-v-e2ecb434]{background-color:var(--color-surface-subtle,oklch(100% 0 0))}.table-head .filters td[data-v-e2ecb434]>div{min-width:6rem;max-width:18rem!important}.select-column[data-v-e2ecb434],.action-column[data-v-e2ecb434]{z-index:1;background-color:var(--color-surface-raised,oklch(100% 0 0));width:3rem;position:relative}.select-column.overlap[data-v-e2ecb434]:after,.action-column.overlap[data-v-e2ecb434]:before{--gradient-from:color-mix(in srgb, var(--color-text-primary,oklch(21.049% .032 264.664)) 5%, transparent);--gradient-to:transparent;--gradient-stops:var(--gradient-via-stops,var(--gradient-position), var(--gradient-from) var(--gradient-from-position), var(--gradient-to) var(--gradient-to-position));opacity:.95;content:\"\";width:.625rem;height:100%;position:absolute;top:0}.select-column.overlap[data-v-e2ecb434]:after{--gradient-position:to right in oklab;background-image:linear-gradient(var(--gradient-stops));right:-.625rem}.select-column--inherit-bg[data-v-e2ecb434]{background-color:inherit!important}.action-column__skeleton[data-v-e2ecb434],.filter-control--align-right[data-v-e2ecb434]{margin-left:auto}.actions-align-end[data-v-e2ecb434]{justify-content:flex-end;display:flex}.spacer-row[data-v-e2ecb434]{border-style:none!important;border-width:0!important}.spacer-cell[data-v-e2ecb434]{height:0;padding:0;border-style:none!important;border-width:0!important}.has-explicit-width[data-v-e2ecb434]{max-width:1px}.cell-value--align-right[data-v-e2ecb434]{margin-left:auto}.action-column.overlap[data-v-e2ecb434]:before{--gradient-position:to left in oklab;background-image:linear-gradient(var(--gradient-stops));left:-.625rem}.prepend-row-column[data-v-e2ecb434]{white-space:nowrap;width:1%}[data-v-e2ecb434] tbody tr td:not(.select-column):not(.action-column){background-color:#0000;transition:background-image .2s}[data-v-e2ecb434] tbody tr.clickable{cursor:pointer}[data-v-e2ecb434] tbody tr.selected{background-image:linear-gradient(270deg, var(--color-surface-raised,oklch(100% 0 0)) 5%, var(--color-accent-soft,oklch(96.221% .019 240.333)) 20%, var(--color-accent-soft,oklch(96.221% .019 240.333)) 80%, var(--color-surface-raised,oklch(100% 0 0)) 95%)}[data-v-e2ecb434] tbody tr:not(.loading):nth-last-child(2){border-bottom-width:0}[data-v-e2ecb434] tbody .cell-content{height:var(--f534ad0e);min-height:var(--f534ad0e);max-height:var(--f534ad0e);align-items:center;display:flex}@media (hover:hover){[data-v-e2ecb434] tbody tr.clickable:hover{background-image:linear-gradient(270deg, var(--color-surface-raised,oklch(100% 0 0)) 5%, var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838)) 20%, var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838)) 80%, var(--color-surface-raised,oklch(100% 0 0)) 95%)}}.table-footer[data-v-e2ecb434]{z-index:10;border-top-style:solid;border-top-width:1px;border-color:var(--color-divider,oklch(92.48% .0027 264.541));background-color:var(--color-surface-raised,oklch(100% 0 0));flex-wrap:wrap;justify-content:space-between;gap:1rem;padding:1rem;display:flex;position:sticky;bottom:0}.table-footer .table-footer-pagination[data-v-e2ecb434]{align-items:center;gap:1rem;width:100%;display:flex}.table-footer .total-results[data-v-e2ecb434]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-primary,oklch(21.049% .032 264.664));margin-right:1.5rem}.table-footer .total-results span[data-v-e2ecb434]{font-weight:var(--font-weight-bold,700)}.avatar[data-v-ba35777c]{--avatar-initials-font-size:var(--text-sm,.875rem);background-color:var(--color-accent-soft,oklch(96.221% .019 240.333));border-radius:50%;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;display:inline-flex}.avatar .initials[data-v-ba35777c]{font-size:var(--avatar-initials-font-size);line-height:1;font-weight:var(--font-weight-medium,500);color:var(--color-accent,oklch(54.615% .2152 262.881));white-space:nowrap}.avatar img[data-v-ba35777c]{object-fit:cover;border-radius:50%;width:100%;height:100%}.avatar.small[data-v-ba35777c]{--avatar-initials-font-size:var(--text-xs,.75rem);width:1.5rem;height:1.5rem}.avatar.medium[data-v-ba35777c]{width:2rem;height:2rem}.avatar.large[data-v-ba35777c]{--avatar-initials-font-size:var(--text-base,1rem);width:3rem;height:3rem}.avatar.extra-large[data-v-ba35777c]{--avatar-initials-font-size:var(--text-lg,1.125rem);width:3.5rem;height:3.5rem}.full-image[data-v-b1342901]{opacity:1}.thumbnail-stack[data-v-7b9fc27b]{flex-direction:row;align-items:center;display:flex}.thumbnail-stack .image-preview[data-v-7b9fc27b]{outline-width:2px;outline-style:solid;outline-color:var(--color-surface-raised,oklch(100% 0 0));border-radius:.25rem}.thumbnail-stack .image-preview[data-v-7b9fc27b]:not(:first-child){margin-left:-1rem}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(n){z-index:2}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(2){z-index:1}.thumbnail-stack .image-preview[data-v-7b9fc27b]:nth-child(3){z-index:0}.thumbnail-stack .image-preview.invalid[data-v-7b9fc27b]{background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));justify-content:center;align-items:center;width:2rem;height:2rem;display:flex}.thumbnail-stack .image-preview.invalid .icon[data-v-7b9fc27b]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.postcodenl-autocomplete-overlay{pointer-events:none;background:0 0;border:0;width:0;height:0;margin:0;padding:0;position:fixed;inset:0 auto auto 0;overflow:visible}.postcodenl-autocomplete-menu{border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));box-shadow:var(--shadow-menu);pointer-events:auto;margin-top:.25rem;display:none;position:absolute}.postcodenl-autocomplete-menu.postcodenl-autocomplete-menu-open{display:block}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));padding:.25rem;overflow:hidden auto}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item{cursor:pointer;border-radius:var(--radius-lg,.5rem);--tw-leading:1.25rem;padding:.75rem;line-height:1.25rem}.postcodenl-autocomplete-menu .postcodenl-autocomplete-menu-items .postcodenl-autocomplete-item mark{font-weight:var(--font-weight-bold,700);background-color:#0000;padding:0}.postcodenl-autocomplete-menu-items:empty{display:none}.postcodenl-autocomplete-item-focus{background-color:var(--color-soft,oklch(97% 0 0))}.postcodenl-autocomplete-item-label{width:100%;max-width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));margin-right:.4rem;display:block}.postcodenl-autocomplete-item-description,.postcodenl-autocomplete-item-tag{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));margin-right:.4rem}.postcodenl-autocomplete-item-description{text-wrap:nowrap}.postcodenl-autocomplete-item-more{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjI1IDQuNSA3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo=);background-position:right .25em center;background-repeat:no-repeat;background-size:1.25rem}.postcodenl-autocomplete-aria-live-region{clip:rect(0 0 0 0);border-style:none;width:.0625rem;height:.0625rem;margin:-.0625rem;padding:0;display:none;position:absolute}.address-lookup-result[data-v-9de7f641]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-soft,oklch(97% 0 0));width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-primary,oklch(21.049% .032 264.664));flex-direction:column;padding-block:.75rem;padding-inline:1rem;font-style:normal;display:flex}.error-summary[data-v-1f9098fa]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-danger-text,oklch(57.004% .2035 26.111));padding-top:.5rem}.country-icon-frame[data-v-89860bc3]{border-radius:var(--radius-sm,.25rem);background-color:var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838));contain:layout paint;flex:0 0 1.25rem;justify-content:center;align-items:center;width:1.25rem;height:1.25rem;display:inline-flex;overflow:hidden}.country-icon[data-v-89860bc3]{border-radius:inherit;width:100%;height:100%;display:block}.activator[data-v-89860bc3]{box-sizing:border-box;cursor:pointer;background-color:var(--color-field-background,oklch(100% 0 0));min-width:0;color:var(--color-text-primary,oklch(21.049% .032 264.664));-webkit-user-select:none;user-select:none;align-items:center;gap:.5rem;transition:background-color .15s,border-color .15s,box-shadow .15s,color .15s;display:inline-flex}.activator:not(.simple)[data-v-89860bc3]{border-style:solid;border-width:1px;border-color:var(--color-field-border,oklch(86.277% .0063 264.565));width:100%;height:2.5rem;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));letter-spacing:inherit;border-radius:.5rem;padding:0 1rem;transition:border .2s}.activator:not(.simple)[data-v-89860bc3]:hover{border-color:var(--color-border-strong,oklch(73.455% .008 264.608));background-color:var(--color-field-background,oklch(100% 0 0))}.activator:not(.simple)[data-v-89860bc3]:focus-visible{border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));box-shadow:0 0 0 0px var(--color-surface-canvas,oklch(100% 0 0)), 0 0 0 1px var(--color-accent,oklch(54.615% .2152 262.881)), 0 0 var(--color-text-primary,oklch(21.049% .032 264.664));border-width:2px;padding-inline:.9375rem}.activator.simple[data-v-89860bc3]{border-radius:var(--radius-md,.375rem);min-height:1.5rem;color:var(--color-text-secondary,oklch(55.1% .023 264.36));background-color:#0000;gap:.25rem}.activator.simple[data-v-89860bc3]:hover,.activator.simple[data-v-89860bc3]:focus-visible{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.activator[data-v-89860bc3]:focus{outline:none}.activator .country-name[data-v-89860bc3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-weight:var(--font-weight-medium,500);overflow:hidden}.activator .state-indicator[data-v-89860bc3],.activator .selected-icon[data-v-89860bc3]{flex-shrink:0}.activator .state-indicator[data-v-89860bc3]{color:var(--color-text-secondary,oklch(55.1% .023 264.36));margin-left:auto;transition:transform .15s}.activator .state-indicator.is-open[data-v-89860bc3]{transform:rotate(180deg)}.activator.disabled[data-v-89860bc3]{pointer-events:none;cursor:not-allowed;color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.activator.disabled[data-v-89860bc3]:not(.simple){border-color:var(--color-field-border,oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));box-shadow:none}.activator.disabled .country-icon[data-v-89860bc3],.activator.disabled .state-indicator[data-v-89860bc3]{opacity:.65}@media (prefers-reduced-motion:reduce){.activator[data-v-89860bc3],.activator .state-indicator[data-v-89860bc3],.country-list .countries .country[data-v-89860bc3]{transition:none}}.country-list[data-v-89860bc3]{box-sizing:border-box;border:1px solid var(--color-border-subtle,oklch(92.48% .0027 264.541));border-radius:var(--radius-xl,.75rem);background-color:var(--color-surface-raised,oklch(100% 0 0));width:100%;min-width:16rem;max-height:min(22rem,100vh - 2rem);font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-primary,oklch(21.049% .032 264.664));box-shadow:var(--shadow-menu-large);padding:.375rem;overflow:hidden}.country-list .search-container[data-v-89860bc3]{z-index:1;border-bottom:1px solid var(--color-border-subtle,oklch(92.48% .0027 264.541));align-items:center;gap:.5rem;padding:.5rem;display:flex;position:relative}.country-list .search-container .search-icon[data-v-89860bc3]{color:var(--color-text-secondary,oklch(55.1% .023 264.36))}.country-list .search-container .search-input[data-v-89860bc3]{min-width:0;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-primary,oklch(21.049% .032 264.664));background-color:#0000;border-style:none;flex:1;padding:0}.country-list .search-container .search-input[data-v-89860bc3]::placeholder{color:var(--color-text-secondary,oklch(55.1% .023 264.36))}.country-list .search-container .search-input[data-v-89860bc3]:focus{box-shadow:none;outline:none}.country-list .countries[data-v-89860bc3]{overscroll-behavior:contain;flex-direction:column;gap:.125rem;max-height:calc(min(22rem,100vh - 2rem) - 3.375rem);padding-top:.375rem;display:flex;overflow-y:auto}.country-list .countries .country[data-v-89860bc3]{border-radius:var(--radius-lg,.5rem);outline:none;align-items:center;gap:.625rem;min-height:2.25rem;padding-block:.4375rem;padding-inline:.625rem;transition:background-color .15s,color .15s;display:flex}.country-list .countries .country[data-v-89860bc3]:hover,.country-list .countries .country[data-v-89860bc3]:focus-visible{cursor:pointer;background-color:var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838))}.country-list .countries .country.active[data-v-89860bc3]{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333));color:var(--color-accent-strong,oklch(48.82% .2172 264.376))}.country-list .countries .country.active[data-v-89860bc3]:hover,.country-list .countries .country.active[data-v-89860bc3]:focus-visible{background-color:var(--color-accent-soft-hover,oklch(93.192% .0316 255.585))}.country-list .countries .country .country-name[data-v-89860bc3]{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;overflow:hidden}.country-list .countries .country .selected-icon[data-v-89860bc3]{color:var(--color-accent,oklch(54.615% .2152 262.881));margin-left:auto}.country-list .countries .no-countries-found[data-v-89860bc3]{pointer-events:none;text-align:center;color:var(--color-text-secondary,oklch(55.1% .023 264.36));font-weight:var(--font-weight-medium,500);padding:1rem .75rem}[data-v-1d5c6199] .activator{width:100%;max-width:15.75rem}.address-input[data-v-1d5c6199]{flex-direction:column;gap:1rem;width:100%;max-width:36rem;display:flex}.address-input .country .country-label-row[data-v-1d5c6199]{flex-direction:row;justify-content:space-between;display:flex}.address-input .country .country-label-row .address-toggle[data-v-1d5c6199]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-disabled,oklch(51.786% .0108 264.705));background-color:#0000;padding:0;text-decoration-line:underline}.address-input .input-label[data-v-1d5c6199]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));margin-bottom:.25rem;display:flex}.address-input .grouped-inputs[data-v-1d5c6199]{justify-content:space-between;gap:.75rem;width:100%;max-width:24rem;display:flex}.address-input .grouped-inputs .error-summary[data-v-1d5c6199]{width:100%}.address-input .input-container[data-v-1d5c6199],.address-input .address-lookup-result[data-v-1d5c6199]{width:100%;max-width:24rem}.address-autocomplete[data-v-1d5c6199],.address-alert[data-v-1d5c6199]{width:100%}.lookup-info[data-v-1d5c6199]{flex-direction:column;display:flex}.lookup-examples[data-v-1d5c6199]{width:100%;margin-top:.25rem;padding-left:.5rem;list-style-type:disc}.city-input[data-v-1d5c6199]{max-width:15.75rem}.address-form[data-v-f68c0c6c]{flex-wrap:wrap;justify-content:space-between;display:flex}.address-form form[data-v-f68c0c6c]{flex-direction:column;gap:1rem;width:100%;max-width:36rem;display:flex}.address-form form .input-label[data-v-f68c0c6c]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));margin-bottom:.25rem;display:flex}.address-form form .grouped-inputs[data-v-f68c0c6c]{justify-content:space-between;gap:.75rem;display:flex}.address-form form .grouped-inputs .error-summary[data-v-f68c0c6c]{width:100%}.address-form form .input-container[data-v-f68c0c6c],.address-form form .grouped-inputs[data-v-f68c0c6c]{width:100%;max-width:24rem}.checkbox-group[data-v-03ea0e1f]{flex-direction:column;gap:.5rem;display:flex}.checkbox-button[data-v-f3f7acae]{border-radius:var(--radius-xl,.75rem);border-style:solid;border-width:1px;border-color:var(--color-field-border,oklch(86.277% .0063 264.565));flex-direction:column;padding:.25rem;display:flex}.checkbox-button .checkbox-container[data-v-f3f7acae]{border-radius:var(--radius-lg,.5rem)}.checkbox-button .checkbox-container[data-v-f3f7acae]:hover{background-color:var(--color-surface-subtle,oklch(100% 0 0))}.checkbox-button .checkbox-container[data-v-f3f7acae] .label{border-radius:var(--radius-xl,.75rem);height:100%;font-weight:var(--font-weight-medium,500);word-break:break-all;align-items:flex-start;padding:.75rem}.checkbox-button .checkbox-container .checkbox-button-label[data-v-f3f7acae]{align-items:flex-start;gap:.5rem;display:flex}.checkbox-button .checkbox-container .micro-icon[data-v-f3f7acae]{color:var(--color-border-strong,oklch(73.455% .008 264.608));margin-top:.125rem}.checkbox-button .checked-content[data-v-f3f7acae]{padding-top:.25rem}.linear-progress[data-v-d9f079b8]{width:100%;font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));align-items:center;gap:.5rem;display:flex}.linear-progress .wrapper[data-v-d9f079b8]{flex-direction:column;gap:.25rem;width:100%;display:flex}.linear-progress .wrapper .progress-bar[data-v-d9f079b8]{width:100%;height:.375rem;overflow:hidden}.linear-progress .wrapper .progress-bar .progress[data-v-d9f079b8]{width:100%;height:100%;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));--tw-duration:.5s;--tw-ease:linear;transition-duration:.5s;transition-timing-function:linear}.linear-progress .wrapper .progress-bar .progress.animate-progress[data-v-d9f079b8]{animation:var(--animate-progress)}.linear-progress .wrapper .progress-bar .progress.origin-left-right[data-v-d9f079b8]{transform-origin:0}.linear-progress .wrapper .progress-bar.blue[data-v-d9f079b8]{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.blue .progress[data-v-d9f079b8]{background-color:var(--color-accent,oklch(54.615% .2152 262.881))}.linear-progress .wrapper .progress-bar.lightblue[data-v-d9f079b8]{background-color:inherit}.linear-progress .wrapper .progress-bar.lightblue .progress[data-v-d9f079b8]{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.green[data-v-d9f079b8]{background-color:var(--color-success-soft,oklch(98.135% .0124 149.917))}.linear-progress .wrapper .progress-bar.green .progress[data-v-d9f079b8]{background-color:var(--color-success,oklch(55.106% .1432 149.926))}.linear-progress .wrapper .progress-bar.gray[data-v-d9f079b8]{background-color:var(--color-surface-raised,oklch(100% 0 0))}.linear-progress .wrapper .progress-bar.gray .progress[data-v-d9f079b8]{background-color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.linear-progress .wrapper .progress-bar.orange[data-v-d9f079b8]{background-color:var(--color-warning-soft,oklch(97.96% .0158 73.68))}.linear-progress .wrapper .progress-bar.orange .progress[data-v-d9f079b8]{background-color:var(--color-warning,oklch(70.49% .1867 47.6))}.linear-progress .wrapper .progress-bar.purple[data-v-d9f079b8]{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}.linear-progress .wrapper .progress-bar.purple .progress[data-v-d9f079b8]{background-color:var(--color-accent,oklch(54.615% .2152 262.881))}.linear-progress .wrapper .progress-bar.red[data-v-d9f079b8]{background-color:var(--color-danger-soft,oklch(97.053% .0129 17.38))}.linear-progress .wrapper .progress-bar.red .progress[data-v-d9f079b8]{background-color:var(--color-danger,oklch(61.535% .2075 25.224))}.linear-progress .wrapper .progress-bar.yellow[data-v-d9f079b8]{background-color:var(--color-warning-soft,oklch(97.96% .0158 73.68))}.linear-progress .wrapper .progress-bar.yellow .progress[data-v-d9f079b8]{background-color:var(--color-warning-text,oklch(55.343% .1739 38.402))}.linear-progress .append[data-v-d9f079b8]{min-width:2.25rem}.dropdown[data-v-9ea37c6e]{position:relative}.dropdown .menu[data-v-9ea37c6e]{border-radius:var(--radius-md,.375rem);background-color:var(--color-surface-raised,oklch(100% 0 0));box-shadow:var(--shadow-menu-large);padding:.25rem}.drop-zone[data-v-b954b849]{border-style:dashed}.drop-zone.default[data-v-b954b849]{border-color:var(--color-border-default,oklch(86.277% .0063 264.565));background-color:var(--color-surface-subtle,oklch(100% 0 0))}.drop-zone.default[data-v-b954b849]:hover{background-color:var(--color-surface-subtle,oklch(100% 0 0))}.drop-zone.dragging[data-v-b954b849]{border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}.drop-zone .label[data-v-b954b849]{z-index:2;cursor:pointer;height:100%}.drop-zone .label.dragging[data-v-b954b849]{justify-content:center}.drop-zone .label .icon[data-v-b954b849]{color:var(--color-accent,oklch(54.615% .2152 262.881))}.drop-zone .label .loader[data-v-b954b849]{margin-right:.25rem}.drop-zone .label .trigger[data-v-b954b849]{color:var(--color-accent,oklch(54.615% .2152 262.881));text-decoration-line:underline}.drop-zone .file-input[data-v-b954b849]{display:none}.upload-menu-button[data-v-e0763425]{width:40px}.warning-zone[data-v-28acbcfe]{border-style:solid;border-color:var(--color-warning,oklch(70.49% .1867 47.6));background-color:var(--color-warning-soft,oklch(97.96% .0158 73.68))}.warning-zone .label[data-v-28acbcfe]{color:var(--color-warning-strong,oklch(40.839% .1165 38.172));flex-grow:1}.warning-zone .label .icon[data-v-28acbcfe]{color:var(--color-warning,oklch(70.49% .1867 47.6))}.error-zone[data-v-855feab7]{border-style:solid;border-color:var(--color-danger-soft,oklch(97.053% .0129 17.38));background-color:var(--color-danger-soft,oklch(97.053% .0129 17.38))}.error-zone .label[data-v-855feab7]{color:var(--color-danger-strong,oklch(39.329% .1242 24.368));flex-grow:1}.error-zone .label .icon[data-v-855feab7]{color:var(--color-danger,oklch(61.535% .2075 25.224))}.success-zone[data-v-585fd95f]{border-style:solid;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));background-color:var(--color-surface-raised,oklch(100% 0 0))}.success-zone .label .icon[data-v-585fd95f]{color:var(--color-success,oklch(55.106% .1432 149.926))}.uploading-zone[data-v-97372f13]{border-style:solid;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));position:relative}.uploading-zone .label[data-v-97372f13]{z-index:2;cursor:wait;gap:.75rem!important}.uploading-zone .label .progress[data-v-97372f13]{color:var(--color-accent,oklch(54.615% .2152 262.881))}.uploading-zone .button[data-v-97372f13]{width:100%}@media (width>=48rem){.uploading-zone .button[data-v-97372f13]{width:auto}}.uploading-zone .linear-progress[data-v-97372f13]{z-index:1;position:absolute;left:0;right:0;height:100%!important}.uploading-zone .linear-progress[data-v-97372f13] .wrapper,.uploading-zone .linear-progress[data-v-97372f13] .progress-bar{height:100%}.uploading-divider[data-v-97372f13]{height:1rem!important}.processing-zone[data-v-4e60054f]{border-style:solid;border-color:var(--color-border-default,oklch(86.277% .0063 264.565))}.processing-zone .label[data-v-4e60054f]{cursor:wait;gap:.75rem!important}.processing-zone .label .loader[data-v-4e60054f]{isolation:isolate}.processing-zone .button[data-v-4e60054f]{width:100%}@media (width>=48rem){.processing-zone .button[data-v-4e60054f]{width:auto}}.in-progress-zone[data-v-dc0d0897]{border-style:solid;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));background-color:var(--color-surface-raised,oklch(100% 0 0))}.in-progress-zone .icon[data-v-dc0d0897]{color:var(--color-accent,oklch(54.615% .2152 262.881))}@media (width>=48rem){.drag-and-drop[data-v-92e537b3]{height:4.5rem}}.drag-and-drop .base-zone[data-v-92e537b3]{border-radius:var(--radius-2xl,1rem);border-style:solid;border-width:1px;flex-wrap:wrap;align-items:center;row-gap:1.125rem;width:100%;height:100%;padding:1rem;display:flex;overflow:hidden}@media (width>=48rem){.drag-and-drop .base-zone[data-v-92e537b3]{padding-block:0;padding-left:1.5rem;padding-right:1rem}}.drag-and-drop .base-zone[data-v-92e537b3] .label{width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));flex-grow:1;align-items:center;gap:.25rem;display:flex}@media (width>=48rem){.drag-and-drop .base-zone[data-v-92e537b3] .label{width:auto}}.drag-and-drop .base-zone[data-v-92e537b3] .label .icon{margin-right:.5rem}.drag-and-drop .base-zone[data-v-92e537b3] .actions{z-index:2;flex-grow:1;align-items:center;gap:.5rem;display:flex}@media (width>=40rem){.drag-and-drop .base-zone[data-v-92e537b3] .actions{flex-grow:0}}.drag-and-drop .base-zone[data-v-92e537b3] .actions .button{flex-shrink:0}.drag-and-drop .base-zone[data-v-92e537b3] .actions .button:first-child{order:2}@media (width>=40rem){.drag-and-drop .base-zone[data-v-92e537b3] .actions .button:first-child{order:1}}.drag-and-drop .base-zone[data-v-92e537b3] .actions .button:nth-child(2){flex-grow:1;order:1}@media (width>=40rem){.drag-and-drop .base-zone[data-v-92e537b3] .actions .button:nth-child(2){order:2}}.drag-and-drop .base-zone[data-v-92e537b3] .actions .dropdown{order:2}@media (width>=40rem){.drag-and-drop .base-zone[data-v-92e537b3] .actions .dropdown{order:1}}.phone-input-container[data-v-2da11e86]{flex-direction:column;display:flex}.input-label[data-v-2da11e86]{font-size:.875rem;line-height:1.25rem;font-weight:var(--font-weight-medium,500);margin-bottom:.25rem;display:flex}.phone-input[data-v-2da11e86]{border-radius:var(--radius-lg,.5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));background-color:var(--color-field-background,oklch(100% 0 0));align-items:center;height:2.5rem;padding-inline:1rem;display:flex}.phone-input[data-v-2da11e86]:hover:not(.disabled){border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.phone-input.focus[data-v-2da11e86]:not(.disabled){border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376));outline-width:1px;outline-style:solid;outline-color:var(--color-accent-strong,oklch(48.82% .2172 264.376))}.phone-input.disabled[data-v-2da11e86]{border-color:var(--color-field-border,oklch(86.277% .0063 264.565));background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52))}.phone-input.disabled .country-prefix[data-v-2da11e86]{color:var(--color-field-text,oklch(21.049% .032 264.664))}.phone-input.disabled input[data-v-2da11e86]{background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}:is(.phone-input select,.phone-input input)[data-v-2da11e86]{border-style:none;padding:0}:is(.phone-input select,.phone-input input)[data-v-2da11e86]:focus{box-shadow:none}.phone-input select[data-v-2da11e86]{padding-right:2rem}.phone-input input[data-v-2da11e86]{background-color:var(--color-field-background,oklch(100% 0 0));width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)))}.phone-input .country-prefix[data-v-2da11e86]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-disabled,oklch(51.786% .0108 264.705));margin-right:.25rem}.radio-button[data-v-4e5b68ec]{border-radius:var(--radius-lg,.5rem);word-break:break-all;align-items:center;gap:.75rem;padding-block:.75rem;padding-inline:.75rem;display:flex}.radio-button [data-v-4e5b68ec]{pointer-events:none}.radio-button:not(.disabled)[data-v-4e5b68ec]:hover{cursor:pointer;background-color:var(--color-surface-subtle,oklch(100% 0 0))}.radio-button:not(.disabled).active[data-v-4e5b68ec]{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}@media (hover:hover){.radio-button:not(.disabled).active[data-v-4e5b68ec]:hover{background-color:var(--color-accent-soft,oklch(96.221% .019 240.333))}}.radio-button:not(.disabled).active .subtitle[data-v-4e5b68ec]{color:var(--color-field-text,oklch(21.049% .032 264.664))!important}.radio-button.disabled[data-v-4e5b68ec]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));filter:grayscale()}.radio-button.disabled[data-v-4e5b68ec]:before{z-index:10;cursor:not-allowed;border-radius:var(--radius-xl,.75rem);background-color:var(--color-field-border,oklch(86.277% .0063 264.565));opacity:.1;content:\"\";width:100%;height:100%;position:absolute;top:0;left:0}.radio-button.large[data-v-4e5b68ec]{padding-block:.875rem}.radio-button label[data-v-4e5b68ec]{-webkit-user-select:none;user-select:none}.radio-button .append[data-v-4e5b68ec]{margin-left:auto}.radio-button .prepend-wrapper[data-v-4e5b68ec]{flex-direction:row;align-items:center;gap:.75rem;display:flex}.radio-button .prepend-wrapper .title-wrapper[data-v-4e5b68ec]{flex-direction:column;min-width:max-content;display:flex}.radio-button .prepend-wrapper .title-wrapper .title[data-v-4e5b68ec]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);flex-direction:row;align-items:center;gap:.5rem;display:flex}.radio-button .prepend-wrapper .title-wrapper .subtitle[data-v-4e5b68ec]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.suggestion-list[data-v-cc5ffce8]{border-radius:var(--radius-lg,.5rem);background-color:var(--color-surface-raised,oklch(100% 0 0));min-width:6.25rem;box-shadow:var(--shadow-menu);padding:.75rem;position:absolute}.suggestion-list .menu[data-v-cc5ffce8]{row-gap:.25rem}.editor [data-v-bbd9a106] .tiptap{border-radius:var(--radius-lg,.5rem);border-style:solid;border-width:1px;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));width:100%;height:18.75rem;padding-block:.625rem;padding-inline:1rem;overflow:auto}.editor [data-v-bbd9a106] .tiptap h1,.editor [data-v-bbd9a106] .tiptap h2,.editor [data-v-bbd9a106] .tiptap h3,.editor [data-v-bbd9a106] .tiptap h4,.editor [data-v-bbd9a106] .tiptap h5,.editor [data-v-bbd9a106] .tiptap h6{font-weight:inherit;margin:0}.editor [data-v-bbd9a106] .tiptap h1,.editor [data-v-bbd9a106] .tiptap h2{margin-bottom:1rem}.editor [data-v-bbd9a106] .tiptap h1{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2 / 1.5)))}.editor [data-v-bbd9a106] .tiptap h2{font-size:var(--text-xl,1.25rem);line-height:var(--tw-leading,var(--text-xl--line-height,calc(1.75 / 1.25)))}.editor [data-v-bbd9a106] .tiptap h3{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75 / 1.125)))}.editor [data-v-bbd9a106] .tiptap h4,.editor [data-v-bbd9a106] .tiptap h5,.editor [data-v-bbd9a106] .tiptap h6{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height,calc(1.5 / 1)))}.editor [data-v-bbd9a106] .tiptap .tag{font-weight:var(--font-weight-bold,700);color:var(--color-text-primary,oklch(21.049% .032 264.664))}.editor .toolbar[data-v-bbd9a106]{gap:.25rem;margin-bottom:.5rem;display:flex}.editor .toolbar .button[data-v-bbd9a106]{width:2.5rem}.editor .toolbar[data-v-bbd9a106] .base-select{margin-left:auto}.modal.loader-modal[data-v-95758b60] .inner{background-color:var(--color-surface-raised,oklch(100% 0 0));border-radius:1rem;justify-content:center;align-items:center;height:4.75rem;display:flex}.modal.loader-modal[data-v-95758b60] .inner .content{padding:0;overflow:visible}.modal.loader-modal[data-v-95758b60] .inner .loader{width:3.125rem;height:3.125rem}.search-container[data-v-95758b60]{position:relative}.search-container[data-v-95758b60] .modal{height:100%;max-height:25rem;box-shadow:none;background-color:#0000}.search-container[data-v-95758b60] .modal .inner .content{padding:0}.search-container[data-v-95758b60] .modal .inner .content .base-select .wrapper{background-color:var(--color-surface-raised,oklch(100% 0 0))}.search-container[data-v-95758b60] .modal .inner .content .base-select .wrapper input{background-color:var(--color-surface-raised,oklch(100% 0 0));outline:none}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content{background-color:var(--color-surface-raised,oklch(100% 0 0));border-bottom-right-radius:1rem;border-bottom-left-radius:1rem;overflow:hidden}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content .select-content{background-color:var(--color-surface-raised,oklch(100% 0 0));border-radius:1rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated{margin:.625rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated.is-open .wrapper{border-bottom-right-radius:0;border-bottom-left-radius:0}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper{height:4.75rem;box-shadow:var(--shadow-floating-soft);border:none;border-radius:1rem;padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper.focus{border:none;outline:none}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper .prepend-icon{width:1.5rem;height:1.5rem;margin-left:0;margin-right:.25rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper input{padding-left:.25rem;font-size:1.25rem;line-height:1.75rem}.search-container[data-v-95758b60] .modal .inner .content .search.elevated .wrapper .clear-button{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));margin-right:.75rem}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content{box-shadow:var(--shadow-floating-soft);border-radius:0 0 1rem 1rem;margin-top:0}.search-container[data-v-95758b60] .modal .inner .content .floating-container-content .option{padding-left:1.5rem;padding-right:1.5rem}.search-container[data-v-95758b60] .modal .inner .content .button{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.search-container[data-v-95758b60] .modal .inner .content .button.cancel{border-left:1px solid var(--color-border-default,oklch(86.277% .0063 264.565));border-radius:0;padding-left:1rem;padding-right:.5rem;font-weight:400}@media (width>=768px){.modal.loader-modal[data-v-95758b60] .inner .content{padding:.5rem}}[data-v-2e97f961] .input{min-width:10rem;border-right-width:0!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important}[data-v-2e97f961] .search-options .wrapper{border-left-width:0!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important}.scoped-search[data-v-2e97f961]{display:flex}.scoped-search .search[data-v-2e97f961]{flex-grow:1}.scoped-search .search:has(.input:hover)+.divider[data-v-2e97f961]{border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.scoped-search .search:focus-within+.divider[data-v-2e97f961]{border-left-style:solid;border-left-width:2px;border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376))!important}.scoped-search .search:focus-within [data-v-2e97f961] .input{border-style:solid;border-width:2px;border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376))}.scoped-search .search:focus-within [data-v-2e97f961] .input+.inline-container-appended{right:15px!important}.scoped-search:has(.search-options:hover) .divider[data-v-2e97f961]{border-color:var(--color-border-strong,oklch(73.455% .008 264.608))}:is(.scoped-search:has(.search-options:focus) .divider[data-v-2e97f961],.scoped-search:has(.floating-container-overlay-container:focus-within) .divider[data-v-2e97f961]){border-left-style:solid;border-left-width:2px;border-color:var(--color-accent-strong,oklch(48.82% .2172 264.376))!important}.time-input[data-v-6198d126]{width:5.3125rem}.time-input[data-v-6198d126] .input::-webkit-calendar-picker-indicator{display:none}.time-input[data-v-6198d126]::-webkit-datetime-edit-text{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));padding-inline:.25rem}.time-input[data-v-6198d126]::-webkit-datetime-edit-fields-wrapper{margin-inline:auto}.time-input.has-icon[data-v-6198d126]{width:7rem}.time-input.has-icon [data-v-6198d126]::-webkit-datetime-edit-fields-wrapper{margin-left:0}.time-input.has-icon[data-v-6198d126] .icon{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.time-input.error-full[data-v-6198d126] .error{width:max-content}.sidebar[data-v-91c8425e]{border-radius:var(--radius-lg,.5rem);width:100%;max-width:14.5rem;height:100%;overflow:hidden}.sidebar.mini[data-v-91c8425e]{width:2.25rem}.sidebar.mini .menu[data-v-91c8425e]{width:fit-content}.menu[data-v-91c8425e]{color:var(--color-text-primary,oklch(21.049% .032 264.664));gap:.25rem}.summary[data-v-15250c0d]{width:var(--v5436127c);max-width:100%}.breadcrumb-item[data-v-650beff2]{white-space:nowrap;min-width:0;max-width:100%;font-size:.875rem;line-height:var(--tw-leading,calc(1.25 / .875));color:var(--color-text-secondary,oklch(55.1% .023 264.36));align-items:center;display:inline-flex}.breadcrumb-item.current[data-v-650beff2]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.breadcrumb-item.disabled[data-v-650beff2]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.breadcrumb-label[data-v-650beff2]{text-overflow:ellipsis;min-width:0;overflow:hidden}.breadcrumb-link[data-v-650beff2]{text-decoration:none;transition:color .15s}.breadcrumb-link[data-v-650beff2]:hover,.breadcrumb-link[data-v-650beff2]:focus-visible{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.breadcrumb[data-v-2c910453]{min-width:0;position:relative}.breadcrumb-list[data-v-2c910453]{white-space:nowrap;flex-wrap:nowrap;align-items:center;gap:.375rem;min-width:0;margin:0;padding:0;list-style:none;display:flex;overflow:hidden}.breadcrumb-list-measurement[data-v-2c910453]{visibility:hidden;pointer-events:none;width:100%;position:absolute;inset:0 auto auto 0;overflow:hidden}.breadcrumb-list-measurement .overflow-button[data-v-2c910453]{visibility:hidden}.breadcrumb-list-measurement .breadcrumb-entry.last-visible[data-v-2c910453]{flex:none;overflow:visible}.breadcrumb-entry[data-v-2c910453]{flex-shrink:0;align-items:center;gap:.375rem;min-width:0;display:inline-flex}.breadcrumb-entry.last-visible[data-v-2c910453]{flex:auto;overflow:hidden}.breadcrumb-separator[data-v-2c910453]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.overflow-button[data-v-2c910453]{width:1.5rem;height:1.5rem;color:var(--color-text-secondary,oklch(55.1% .023 264.36));cursor:pointer;background-color:#0000;border:0;border-radius:.375rem;justify-content:center;align-items:center;padding:0;transition:color .15s;display:inline-flex}.overflow-button[data-v-2c910453]:hover,.overflow-button[data-v-2c910453]:focus-visible{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.scaffold-summary-branch[data-v-1b63daca]{width:100%}.scaffold-summary-branch-header[data-v-1b63daca]{width:100%;display:block;position:relative}.scaffold-summary-item[data-v-1b63daca]{--scaffold-summary-item-hover-bg:color-mix(in oklch, var(--color-text-primary,oklch(21.049% .032 264.664)) 4%, transparent);--scaffold-summary-item-active-bg:var(--scaffold-summary-item-hover-bg);box-sizing:border-box;width:100%;min-height:2rem;color:var(--color-text-primary,oklch(21.049% .032 264.664));border-radius:.5rem;align-items:center;gap:.5rem;padding:.375rem .5rem;font-size:.875rem;line-height:1.25rem;text-decoration:none;transition:background-color .15s,color .15s,gap .22s cubic-bezier(.2,0,0,1);display:flex;overflow:hidden}.scaffold-summary-item[data-v-1b63daca]:hover,.scaffold-summary-item[data-v-1b63daca]:focus-visible,.scaffold-summary-item.active[data-v-1b63daca],.scaffold-summary-item.active-descendant[data-v-1b63daca]{background-color:var(--color-surface-subtle-active,oklch(92.48% .0027 264.541))}.scaffold-summary-item.mini[data-v-1b63daca]{gap:0}.scaffold-summary-item-link[data-v-1b63daca]{width:100%;min-width:0;padding-right:2.75rem}.scaffold-summary-item-toggle[data-v-1b63daca]{text-align:left;cursor:pointer;background:0 0;border:0}.scaffold-summary-item-chevron-button[data-v-1b63daca]{width:2rem;min-height:2rem;color:var(--color-text-disabled,oklch(51.786% .0108 264.705));cursor:pointer;background:0 0;border:0;border-radius:.5rem;flex-shrink:0;justify-content:center;align-items:center;transition:background-color .15s,color .15s;display:inline-flex;position:absolute;top:50%;right:.25rem;transform:translateY(-50%)}.scaffold-summary-item-chevron-button[data-v-1b63daca]:hover,.scaffold-summary-item-chevron-button[data-v-1b63daca]:focus-visible{background-color:var(--color-surface-subtle-active,oklch(92.48% .0027 264.541));color:var(--color-text-primary,oklch(21.049% .032 264.664))}@supports (background-color:color-mix(in oklch, black 4%, transparent)){.scaffold-summary-item[data-v-1b63daca]:hover,.scaffold-summary-item[data-v-1b63daca]:focus-visible{background-color:var(--scaffold-summary-item-hover-bg,var(--color-surface-subtle-active,oklch(92.48% .0027 264.541)))}.scaffold-summary-item.active[data-v-1b63daca],.scaffold-summary-item.active-descendant[data-v-1b63daca]{background-color:var(--scaffold-summary-item-active-bg,var(--color-surface-subtle-active,oklch(92.48% .0027 264.541)))}.scaffold-summary-item-chevron-button[data-v-1b63daca]:hover,.scaffold-summary-item-chevron-button[data-v-1b63daca]:focus-visible{background-color:var(--scaffold-summary-item-hover-bg,var(--color-surface-subtle-active,oklch(92.48% .0027 264.541)))}}.dark .scaffold-summary-item[data-v-1b63daca]{--scaffold-summary-item-active-bg:color-mix(in oklch, var(--color-text-primary,oklch(95% .004 255)) 6%, transparent)}.scaffold-summary-item-chevron[data-v-1b63daca]{flex-shrink:0}.scaffold-summary-item-text[data-v-1b63daca]{text-overflow:ellipsis;white-space:nowrap;opacity:1;min-width:0;max-width:10rem;font-size:.875rem;line-height:1.25rem;transition:max-width .14s,opacity .11s;overflow:hidden}.scaffold-summary-item-text.mini[data-v-1b63daca]{opacity:0;max-width:0}.scaffold-summary-subitems[data-v-1b63daca]{flex-direction:column;gap:.25rem;padding-top:.25rem;padding-left:1.625rem;padding-right:1.5rem;display:flex;position:relative}.scaffold-summary-subitems[data-v-1b63daca]:before{content:\"\";background-color:var(--color-divider,oklch(92.48% .0027 264.541));width:.0625rem;position:absolute;top:.25rem;bottom:0;left:1rem}@media (prefers-reduced-motion:reduce){.scaffold-summary-item[data-v-1b63daca],.scaffold-summary-item-text[data-v-1b63daca],.scaffold-summary-item-chevron-button[data-v-1b63daca]{transition:none}}.page-layout[data-v-7fd048a2]{--layout-right-sidebar-gap:1.5rem;--layout-content-gap:.75rem;--layout-shell-padding:1rem;--layout-sidebar-surface:var(--color-surface-subtle-hover,oklch(98.477% .0017 247.838));--layout-content-shadow:var(--tw-inset-shadow,0 0 #0000), var(--tw-inset-ring-shadow,0 0 #0000), var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), 0 .0625rem .1875rem 0 #0000001a, 0 .0625rem .125rem -.0625rem #0000001a;--sidebar-rail-width-expanded:18rem;--sidebar-resize-duration:.22s;--sidebar-resize-easing:cubic-bezier(.2, 0, 0, 1);background-color:var(--layout-sidebar-surface);flex-direction:column;min-height:100vh;display:flex;position:relative;overflow-x:visible}.page-layout .wrap[data-v-7fd048a2]{flex-direction:row;align-self:stretch;width:100%;min-height:100vh;margin-right:0;display:flex}.page-layout .sidebar[data-v-7fd048a2]{align-self:flex-start;height:fit-content;margin-bottom:1rem;position:sticky;top:0}.page-layout .sidebar-left-rail[data-v-7fd048a2]{box-sizing:border-box;height:100vh;max-height:100vh;width:var(--sidebar-rail-width-expanded);max-width:var(--sidebar-rail-width-expanded);flex-basis:var(--sidebar-rail-width-expanded);background-color:var(--layout-sidebar-surface);transition:width var(--sidebar-resize-duration) var(--sidebar-resize-easing), max-width var(--sidebar-resize-duration) var(--sidebar-resize-easing), flex-basis var(--sidebar-resize-duration) var(--sidebar-resize-easing), padding-inline var(--sidebar-resize-duration) var(--sidebar-resize-easing);flex-direction:column;flex-shrink:0;align-self:stretch;padding:.5rem 1rem;display:flex;position:sticky;top:0;overflow:visible}.page-layout .sidebar-left-rail.is-collapsed[data-v-7fd048a2]{pointer-events:none;flex-basis:0;width:0;max-width:0;padding-inline:0;overflow:hidden}.page-layout .sidebar-left[data-v-7fd048a2]{overscroll-behavior:contain;flex:1;align-self:stretch;width:100%;max-width:none;min-height:0;margin-bottom:0;position:static;overflow:hidden auto}.page-layout .sidebar-summary[data-v-7fd048a2]{flex-direction:column;align-items:stretch;row-gap:.25rem;width:100%;padding-block:.5rem;display:flex}.page-layout .sidebar-summary[data-v-7fd048a2] .summary-group{width:100%;padding-block:.25rem}.page-layout .sidebar-summary[data-v-7fd048a2] .summary-group>.header .name{font-size:.875rem;line-height:1.25rem}.page-layout .sidebar-summary[data-v-7fd048a2] .summary-group>.items{box-sizing:border-box;border-left-color:var(--color-divider,oklch(92.48% .0027 264.541));width:100%}.page-layout .sidebar-logo[data-v-7fd048a2]{box-sizing:border-box;border-bottom:1px solid #0000;flex-shrink:0;align-items:center;margin-bottom:.5rem;display:flex}.page-layout .sidebar-logo .sidebar-logo-link[data-v-7fd048a2]{box-sizing:border-box;text-align:left;width:100%;transition:background-color .15s ease, gap var(--sidebar-resize-duration) var(--sidebar-resize-easing);background-color:#0000;border-radius:.75rem;align-items:center;gap:.75rem;padding:.5rem;text-decoration:none;display:flex;overflow:hidden}.page-layout .sidebar-logo .sidebar-logo-link[data-v-7fd048a2]:hover,.page-layout .sidebar-logo .sidebar-logo-link[data-v-7fd048a2]:focus-visible{background-color:color-mix(in oklch, var(--color-text-primary,oklch(21.049% .032 264.664)) 4%, transparent)}.page-layout .sidebar-logo .sidebar-logo-mark[data-v-7fd048a2]{flex-shrink:0;justify-content:center;align-items:center;display:inline-flex}.page-layout .sidebar-logo .sidebar-logo-image[data-v-7fd048a2]{border-radius:.5rem;width:2rem;height:2rem;display:block}.page-layout .sidebar-logo .sidebar-logo-copy[data-v-7fd048a2]{white-space:nowrap;flex-direction:column;min-width:0;display:flex;overflow:hidden}.page-layout .sidebar-logo .sidebar-logo-title[data-v-7fd048a2]{font-size:.875rem;line-height:1rem;font-weight:var(--font-weight-semibold,600);color:var(--color-text-primary,oklch(21.049% .032 264.664))}.page-layout .sidebar-logo .sidebar-logo-subtitle[data-v-7fd048a2]{color:var(--color-text-secondary,oklch(55.1% .023 264.36));font-size:.75rem;line-height:1rem}.page-layout .sidebar-right[data-v-7fd048a2]{min-height:100vh;padding:var(--layout-shell-padding) var(--layout-shell-padding) 1.5rem 0;flex-direction:column;gap:1rem;display:flex}.page-layout .sidebar-right .sidebar-right-content[data-v-7fd048a2]{flex-direction:column;gap:1rem;display:flex}.page-layout .sidebar-user-menu[data-v-7fd048a2]{flex-direction:column;flex-shrink:0;margin-top:auto;display:flex}.page-layout .sidebar-user-button[data-v-7fd048a2]{box-sizing:border-box;text-align:left;width:100%;transition:background-color .15s ease, gap var(--sidebar-resize-duration) var(--sidebar-resize-easing);background-color:#0000;border-radius:.75rem;align-items:center;gap:.5rem;padding:.5rem;display:flex;overflow:hidden}.page-layout .sidebar-user-button[data-v-7fd048a2]:hover,.page-layout .sidebar-user-button[data-v-7fd048a2]:focus-visible{background-color:color-mix(in oklch, var(--color-text-primary,oklch(21.049% .032 264.664)) 4%, transparent)}.page-layout .sidebar-user-copy[data-v-7fd048a2]{flex-direction:column;flex:1;min-width:0;display:flex;overflow:hidden}.page-layout .sidebar-user-name[data-v-7fd048a2]{text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:var(--tw-leading,calc(1.25 / .875));font-weight:var(--font-weight-semibold,600);color:var(--color-text-primary,oklch(21.049% .032 264.664));overflow:hidden}.page-layout .sidebar-user-secondary[data-v-7fd048a2]{text-overflow:ellipsis;white-space:nowrap;font-size:.75rem;line-height:var(--tw-leading,calc(1 / .75));color:var(--color-text-secondary,oklch(55.1% .023 264.36));overflow:hidden}.page-layout .sidebar-user-icon[data-v-7fd048a2]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705));flex-shrink:0}.page-layout .sidebar-user-actions[data-v-7fd048a2]{flex-direction:column;flex-shrink:0;gap:.25rem;width:100%;margin-top:auto;padding-block:.5rem;display:flex}.page-layout .sidebar-user-actions+.sidebar-user-menu[data-v-7fd048a2]{margin-top:0}.page-layout .mobile-sidebar-content[data-v-7fd048a2]{flex-direction:column;gap:.25rem;height:100%;min-height:100%;padding-bottom:.5rem;display:flex}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions[data-v-7fd048a2],.page-layout .mobile-sidebar-content .mobile-sidebar-user-menu[data-v-7fd048a2]{margin-top:auto;padding:.5rem}.page-layout .mobile-sidebar-content .mobile-sidebar-user-actions+.mobile-sidebar-user-menu[data-v-7fd048a2]{margin-top:0}.page-layout .content-column[data-v-7fd048a2]{min-width:0;transition:margin var(--sidebar-resize-duration) var(--sidebar-resize-easing);flex-direction:column;flex-grow:1;margin:.5rem .5rem .5rem 0;display:flex}.page-layout .content-column .content-surface[data-v-7fd048a2]{z-index:1;background-color:var(--color-surface-raised,oklch(100% 0 0));min-width:0;min-height:100%;box-shadow:var(--layout-content-shadow);border-radius:1rem;flex-direction:column;flex:1;display:flex;position:relative}.page-layout .sidebar-left-rail.is-collapsed+.content-column[data-v-7fd048a2]{margin-left:.5rem}.page-layout .content-topbar .content-topbar-row[data-v-7fd048a2]{box-sizing:border-box;padding-inline:1rem;align-items:center;gap:0;min-width:0;min-height:3rem;padding-bottom:0;display:flex}.page-layout .content-topbar .content-topbar-toggle[data-v-7fd048a2]{cursor:e-resize;flex-shrink:0}.page-layout .content-topbar .content-topbar-divider[data-v-7fd048a2]{align-self:center;height:1rem;margin-left:.5rem;margin-right:.75rem}.page-layout .content-topbar .content-topbar-breadcrumb[data-v-7fd048a2]{flex:auto;min-width:0}.page-layout .content-topbar .content-topbar-actions[data-v-7fd048a2]{flex-shrink:0;align-items:center;gap:.5rem;margin-left:auto;padding-left:.5rem;display:flex}.page-layout .main[data-v-7fd048a2]{flex-grow:1;min-width:0;padding:1rem}@media (prefers-reduced-motion:reduce){.page-layout .sidebar-left-rail[data-v-7fd048a2],.page-layout .sidebar-summary[data-v-7fd048a2] .summary-group>.header,.page-layout .sidebar-summary[data-v-7fd048a2] .summary-group>.header .name,.page-layout .sidebar-logo-link[data-v-7fd048a2],.page-layout .sidebar-user-button[data-v-7fd048a2],.page-layout .sidebar-logo-copy[data-v-7fd048a2],.page-layout .sidebar-user-copy[data-v-7fd048a2],.page-layout .sidebar-user-icon[data-v-7fd048a2]{transition:none}}@media (width<=64rem){.page-layout[data-v-7fd048a2]{--layout-content-gap:.5rem;--layout-shell-padding:.75rem;--sidebar-rail-width-expanded:16rem}.page-layout .wrap[data-v-7fd048a2]{min-height:100vh}.page-layout .sidebar-left-rail[data-v-7fd048a2]{padding:.5rem 1rem}.page-layout .sidebar-summary[data-v-7fd048a2]{padding:.375rem}.page-layout .content-column[data-v-7fd048a2]{margin:.5rem .5rem .5rem 0}.page-layout .content-column .content-surface[data-v-7fd048a2]{border-radius:.75rem}.page-layout .content-topbar .content-topbar-row[data-v-7fd048a2]{padding-inline:.875rem}.page-layout .main[data-v-7fd048a2]{padding:.875rem .875rem 1.5rem}.page-layout .sidebar-right[data-v-7fd048a2]{min-height:100vh;padding:.75rem .75rem 1rem 0}}@media (width<=48rem){.page-layout[data-v-7fd048a2]{--layout-content-gap:.5rem;--layout-shell-padding:.5rem}.page-layout .wrap[data-v-7fd048a2]{flex-direction:column;min-height:100vh}.page-layout .sidebar-left-rail[data-v-7fd048a2]{display:none}.page-layout .sidebar-user-actions[data-v-7fd048a2],.page-layout .sidebar-user-menu[data-v-7fd048a2]{margin-top:0;padding-top:.25rem}.page-layout .content-column[data-v-7fd048a2]{margin:.5rem}.page-layout .content-column .content-surface[data-v-7fd048a2]{border-radius:.75rem;min-height:auto}.page-layout .sidebar-left-rail.is-collapsed+.content-column[data-v-7fd048a2]{margin:.5rem}.page-layout .content-topbar[data-v-7fd048a2]{padding-top:0}.page-layout .content-topbar .content-topbar-row[data-v-7fd048a2]{padding-inline:.75rem;min-height:3rem;padding-bottom:0}.page-layout .sidebar-right[data-v-7fd048a2]{min-height:auto;padding:0 .5rem .5rem}}.arrow[data-v-48ece3e5]{position:relative}.arrow.vertical[data-v-48ece3e5]{width:fit-content;height:100%;padding-inline:.75rem}.arrow.vertical .text[data-v-48ece3e5]{text-align:center;top:50%;translate:0 -50%;rotate:-90deg}.arrow.vertical.has-text[data-v-48ece3e5]{margin-right:2rem}.arrow:not(.vertical)[data-v-48ece3e5]{width:100%;padding-block:.75rem}.arrow:not(.vertical) .text[data-v-48ece3e5]{text-align:center;margin-top:1.25rem;left:50%;translate:-50%}.arrow:not(.vertical).has-text[data-v-48ece3e5]{margin-bottom:2rem}.arrow .arrow-pointer[data-v-48ece3e5]{border-bottom-style:solid;border-bottom-width:2px;border-right-style:solid;border-right-width:2px;border-color:var(--color-border-default,oklch(86.277% .0063 264.565));padding:.5rem;position:absolute}.arrow .arrow-pointer.up[data-v-48ece3e5],.arrow .arrow-pointer.down[data-v-48ece3e5]{margin-left:-.5rem}.arrow .arrow-pointer.up[data-v-48ece3e5]{margin-top:.125rem;top:0;rotate:-135deg}.arrow .arrow-pointer.down[data-v-48ece3e5]{margin-bottom:.125rem;bottom:0;rotate:45deg}.arrow .arrow-pointer.left[data-v-48ece3e5],.arrow .arrow-pointer.right[data-v-48ece3e5]{margin-top:-.75rem;top:1rem}.arrow .arrow-pointer.left[data-v-48ece3e5]{margin-left:.125rem;left:0;rotate:135deg}.arrow .arrow-pointer.right[data-v-48ece3e5]{margin-right:.125rem;right:0;rotate:-45deg}.arrow .text[data-v-48ece3e5]{text-wrap:nowrap;color:var(--color-text-disabled,oklch(51.786% .0108 264.705));display:block;position:absolute}.footer[data-v-89dedaa8]{flex-direction:column;justify-content:center;align-items:center;gap:1.5rem;min-height:8rem;display:flex;overflow:hidden}.footer .copy[data-v-89dedaa8]{text-align:center;width:100%;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-primary,oklch(21.049% .032 264.664))}.header[data-v-df398394]{z-index:50;width:100%;height:var(--ff0ce870);position:relative}.header .wrapper[data-v-df398394]{background-color:var(--color-surface-page,oklch(100% 0 0));border-bottom-style:solid;border-bottom-width:1px;justify-content:center;width:100%;display:flex;position:fixed}.header .wrapper .inner[data-v-df398394]{grid-template-columns:1fr auto 1fr;grid-template-areas:\"return-info return-info return-info\"\"prepend logo append\"\"middle middle middle\";align-items:center;gap:.5rem;width:100vw;height:100%;margin-right:calc(100% - 100vw);display:grid;overflow-x:clip}@media (width>=64rem){.header .wrapper .inner[data-v-df398394]{max-width:100.438rem}}.header .wrapper .inner .prepend[data-v-df398394]{grid-area:prepend;margin-left:1.5rem}.header .wrapper .inner .logo-container[data-v-df398394]{grid-area:logo}.header .wrapper .inner .logo-container .logo[data-v-df398394]{width:fit-content;display:block}.header .wrapper .inner .return-info[data-v-df398394]{border-bottom-style:solid;border-bottom-width:1px;grid-area:return-info;justify-content:center;padding-block:.5rem;display:flex}@media (width>=64rem){.header .wrapper .inner .return-info[data-v-df398394]{border-bottom-width:0;justify-content:flex-start;padding-block:0}}.header .wrapper .inner .return-info .icon[data-v-df398394]{width:1rem;height:1rem}@media (width>=64rem){.header .wrapper .inner .return-info .icon[data-v-df398394]{border-style:none;width:1.5rem;height:1.5rem}}.header .wrapper .inner .return-info .return-link[data-v-df398394]{align-items:center;gap:1rem;display:flex}.header .wrapper .inner .return-info .return-link .text[data-v-df398394]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));font-weight:var(--font-weight-medium,500);align-items:center;display:flex}@media (width>=64rem){.header .wrapper .inner .return-info .return-link .text[data-v-df398394]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)))}}.header .wrapper .inner .middle[data-v-df398394]{grid-area:middle;justify-content:center;align-items:center;height:100%;display:flex}@media (width>=64rem){.header .wrapper .inner .middle[data-v-df398394]{padding:0}}.header .wrapper .inner .middle[data-v-df398394]>*{margin-inline:.5rem;margin-bottom:.5rem}@media (width>=64rem){.header .wrapper .inner .middle[data-v-df398394]>*{margin:0}}.header .wrapper .inner .middle[data-v-df398394] .input-container{width:100%;max-width:40rem}.header .wrapper .inner .middle[data-v-df398394] .input-container .inline-container-prepended .icon{color:var(--color-accent,oklch(54.615% .2152 262.881))}.header .wrapper .inner .middle[data-v-df398394] .input-container .input{border-radius:var(--radius-2xl,1rem);background-color:var(--color-surface-disabled,oklch(96.65% .004 264.52));font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));padding-block:.4375rem;border-style:none;padding-left:3.25rem}.header .wrapper .inner .middle[data-v-df398394] .input-container .input::placeholder{color:var(--color-text-primary,oklch(21.049% .032 264.664))}@media (hover:hover){.header .wrapper .inner .middle[data-v-df398394] .input-container .input:hover{border-style:none}}.header .wrapper .inner .middle[data-v-df398394] .input-container .input:focus{padding-block:.4375rem;padding-right:1rem}@media (width>=64rem){.header .wrapper .inner .middle[data-v-df398394] .input-container .input{font-size:var(--text-base,1rem);line-height:var(--tw-leading,var(--text-base--line-height,calc(1.5 / 1)));padding-block:.6875rem}.header .wrapper .inner .middle[data-v-df398394] .input-container .input:focus{padding-block:.6875rem}}.header .wrapper .inner .append[data-v-df398394]{grid-area:append;justify-content:flex-end;align-items:center;gap:1rem;display:flex}.header .wrapper .inner .append .icon[data-v-df398394]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.header .wrapper .inner .append .dropdown[data-v-df398394] .button{background-color:#0000;margin-right:1.5rem;padding:0}@media (width>=1024px){.header[data-v-df398394],.header .wrapper[data-v-df398394]{height:5rem}.header .wrapper .inner[data-v-df398394]{grid-template-columns:2fr 3fr 2fr;grid-template-areas:\"logo middle append\"}.header .wrapper .inner.left[data-v-df398394]{grid-template-columns:.6fr 3fr 2fr}.header .wrapper .inner.left .middle[data-v-df398394]{justify-content:flex-start}.header .wrapper .inner.center .middle[data-v-df398394]{justify-content:center}.header .wrapper .inner.right[data-v-df398394]{grid-template-columns:2fr 3fr .6fr}.header .wrapper .inner.right .middle[data-v-df398394]{justify-content:flex-end}.header .wrapper .inner.contains-return-info[data-v-df398394]{grid-template-columns:1fr 1fr 2fr 2fr;grid-template-areas:\"logo return-info middle append\"}.header .wrapper .prepend[data-v-df398394]{display:none}.header .wrapper .logo-container .logo[data-v-df398394]{margin-left:1.5rem}}.tab[data-v-0443e693]{z-index:1;box-sizing:border-box;cursor:pointer;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-field-text,oklch(21.049% .032 264.664))}.tab .tab-count[data-v-0443e693]{font-size:var(--text-xs,.75rem);line-height:var(--tw-leading,var(--text-xs--line-height,calc(1 / .75)));font-weight:var(--font-weight-medium,500);border-radius:2147483647px;margin-left:.5rem;padding-block:.125rem;padding-inline:.625rem;display:none}@media (width>=48rem){.tab .tab-count[data-v-0443e693]{display:inline-block}}.tab.active[data-v-0443e693]{border-color:var(--color-accent,oklch(54.615% .2152 262.881));color:var(--color-accent,oklch(54.615% .2152 262.881))}.tab.disabled[data-v-0443e693]{pointer-events:none;cursor:not-allowed;color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.tab.disabled.active[data-v-0443e693]{border-color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.tabs[data-v-2de10beb]{background-color:inherit;box-shadow:var(--shadow-base), inset 0 -1px 0 0 var(--color-border-default,oklch(86.277% .0063 264.565));display:flex;position:relative}:where(.tabs[data-v-2de10beb]>:not(:last-child)){margin-inline:0 2rem}.tabs[data-v-2de10beb] .tab{cursor:pointer;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);white-space:nowrap;border-bottom-style:solid;border-bottom-width:2px;padding-block:1rem;padding-inline:.25rem}.tabs[data-v-2de10beb] .tab:not(.active){color:var(--color-text-disabled,oklch(51.786% .0108 264.705));border-color:#0000}.tabs[data-v-2de10beb] .tab:hover:not(.active){color:var(--color-text-primary,oklch(21.049% .032 264.664))}@media (hover:hover){.tabs[data-v-2de10beb] .tab:hover:not(.active):hover{border-color:var(--color-border-default,oklch(86.277% .0063 264.565))}}.tabs[data-v-2de10beb] .tab .tab-count{border-style:solid;border-width:1px}.page-header[data-v-b525e5c5]{background-color:var(--page-header-background,transparent);position:relative}.page-header.header-sticky[data-v-b525e5c5]{z-index:21;top:var(--a57c27ec);position:sticky}.page-header.header-sticky.overlap[data-v-b525e5c5]{border-bottom-style:solid;border-bottom-width:1px;border-color:var(--color-border-subtle,oklch(92.48% .0027 264.541));box-shadow:var(--shadow-page-header-overlap);padding-top:var(--v6eedb732)}.page-header.header-sticky.overlap .heading[data-v-b525e5c5]{margin-bottom:.25rem}.page-header.header-sticky.overlap .heading h1[data-v-b525e5c5]{font-size:var(--text-lg,1.125rem);line-height:var(--tw-leading,var(--text-lg--line-height,calc(1.75 / 1.125)))}.page-header .back-button-wrapper[data-v-b525e5c5]{width:100%;height:1.25rem}.page-header h1[data-v-b525e5c5]{font-size:var(--text-2xl,1.5rem);line-height:var(--tw-leading,var(--text-2xl--line-height,calc(2 / 1.5)));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:.15s}@media (width>=48rem){.page-header h1[data-v-b525e5c5]{font-size:1.75rem}}.page-header .tabs[data-v-b525e5c5]{margin-bottom:2rem}.page-header .heading[data-v-b525e5c5]{align-items:center;margin-bottom:1rem;display:flex}@media (width>=48rem){.page-header .heading[data-v-b525e5c5]{margin-bottom:1.25rem}}.page-header .heading[data-v-b525e5c5] .image-wrapper{width:fit-content}.page-header .heading[data-v-b525e5c5] .image-wrapper .image{max-height:3.5rem}.page-header .heading .header-start[data-v-b525e5c5]{flex-direction:row;align-items:center;gap:1rem;display:flex}.page-header .heading .actions[data-v-b525e5c5]{gap:.5rem;margin-left:auto;display:flex}.page-header .heading .title-wrapper[data-v-b525e5c5]{flex-direction:column;display:flex}.page-header .heading .title-wrapper .subtitle[data-v-b525e5c5]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);letter-spacing:var(--tracking-tight,-.025em);color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.page-header .filters[data-v-b525e5c5]{gap:.5rem;padding-bottom:.5rem;display:flex;overflow:auto}@media (width>=48rem){.page-header .filters[data-v-b525e5c5]{flex-wrap:wrap}}.page-header .filters .search[data-v-b525e5c5]{min-width:12rem}@media (width>=64rem){.page-header .filters .search[data-v-b525e5c5]{min-width:17.5rem}}.page-header .filters .filter-group[data-v-b525e5c5]{display:contents}.page-header .filters .filter-group[data-v-b525e5c5] .title{margin-left:1rem}.summary-group[data-v-c6727d6f]{padding-block:.5rem}.summary-group .header[data-v-c6727d6f]{justify-content:space-between;align-items:center;gap:1rem;display:flex}.summary-group .header.increase-margin[data-v-c6727d6f]{margin-bottom:.5rem}.summary-group .header.expandable[data-v-c6727d6f]{cursor:pointer}.summary-group .header .name[data-v-c6727d6f]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-group .header[data-v-c6727d6f] .icon{width:1.25rem;height:1.25rem}.summary-group .items[data-v-c6727d6f]{padding-block:.5rem;border-left-style:solid;border-left-width:4px;flex-direction:column;gap:.5rem;padding-left:1rem;animation:.3s fadeIn-c6727d6f;display:flex}.grow-enter-active[data-v-c6727d6f],.grow-leave-active[data-v-c6727d6f]{transition-property:all;transition-duration:.3s;transition-timing-function:var(--default-transition-timing-function)}.grow-enter-from[data-v-c6727d6f],.grow-leave-to[data-v-c6727d6f]{opacity:0!important;height:0!important;padding-block:0!important}@keyframes fadeIn-c6727d6f{0%{opacity:0}to{opacity:1}}.summary-item[data-v-477cd514]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.summary-item [data-v-477cd514] .summary-link:hover{text-decoration-line:underline}.hamburger-icon[data-v-05812864]{cursor:pointer}.page-layout[data-v-8838e89e]{flex-direction:column;display:flex;position:relative;overflow-x:clip}.page-layout .wrap[data-v-8838e89e]{flex-direction:column;align-self:center;width:100vw;height:100%;margin-right:calc(100% - 100vw);display:flex}@media (width>=64rem){.page-layout .wrap[data-v-8838e89e]{flex-direction:row;gap:1.25rem;max-width:100.438rem;padding-inline:1.5rem}}@media (width>=96rem){.page-layout .wrap[data-v-8838e89e]{gap:5rem}}.page-layout .wrap.has-sidebar .main[data-v-8838e89e]{padding-inline:1.5rem}@media (width>=64rem){.page-layout .wrap.has-sidebar .main[data-v-8838e89e]{padding-right:0}}.page-layout.layout-mirrored .main[data-v-8838e89e]{order:1}.page-layout.layout-mirrored .sidebar-left[data-v-8838e89e]{order:2}.page-layout .sidebar[data-v-8838e89e]{height:100%;margin-bottom:1rem;position:sticky}@media (width>=64rem){.page-layout .sidebar[data-v-8838e89e]{margin-top:2.5rem}}.page-layout .sidebar[data-v-8838e89e]{top:var(--f21e3db0)}.page-layout .sidebar-left[data-v-8838e89e]{display:none}@media (width>=64rem){.page-layout .sidebar-left[data-v-8838e89e]{display:block}}@media (width>=80rem){.page-layout .sidebar-left[data-v-8838e89e]{width:fit-content;max-width:10rem}}@media (width>=96rem){.page-layout .sidebar-left[data-v-8838e89e]{width:100%;max-width:14.5rem}}@media (width>=80rem){.page-layout .sidebar-left[data-v-8838e89e]:not(.mini) .menu-item-content{padding-right:1rem}}@media (width>=96rem){.page-layout .sidebar-left[data-v-8838e89e]:not(.mini) .menu-item-content{padding-right:0}}.page-layout .sidebar-right[data-v-8838e89e]{padding-block:1rem;padding-inline:1.5rem;padding-top:0}@media (width>=64rem){.page-layout .sidebar-right[data-v-8838e89e]{padding:1rem 0 0}}.page-layout .main[data-v-8838e89e]{flex-grow:1;min-width:0;padding-block:1rem}@media (width>=64rem){.page-layout .main[data-v-8838e89e]{padding-block:2.5rem}}.persistent button[data-v-daacf17f]{appearance:none;color:inherit;font:inherit;line-height:inherit;background-color:#0000;border:0;padding:0}.persistent .label .badge[data-v-daacf17f]{margin-right:.375rem}.persistent .label .micro-icon[data-v-daacf17f]{margin-left:.25rem}.persistent [data-v-daacf17f] .menu .current{color:var(--color-text-primary,oklch(21.049% .032 264.664))!important}.step-connector[data-v-a79a9419]:not(.absolute){flex:1}.step-connector.absolute[data-v-a79a9419]{position:absolute;top:9.1px;left:calc(11px - 50%);right:calc(50% + 11px)}.step-connector .horizontal-line[data-v-a79a9419]{border-top-style:solid;border-top-width:.4rem;border-color:var(--color-soft,oklch(97% 0 0));display:block}.step[data-v-aa628243]:not(.xs){flex-direction:column;flex:1;align-items:center;display:flex;position:relative}.step .step-content[data-v-aa628243]{flex-direction:column;align-items:center;display:flex}.step .step-content .step-state[data-v-aa628243]{z-index:1;background-color:var(--color-soft,oklch(97% 0 0));width:1.5rem;height:1.5rem;font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));border-radius:50%;justify-content:center;align-items:center;display:flex;position:relative}.step .step-content .step-state.active[data-v-aa628243]:before{z-index:1;opacity:.1;content:\"\";border-radius:50%;width:2.5rem;height:2.5rem;position:absolute}.step .step-content .step-state .micro-icon[data-v-aa628243]{color:var(--color-text-inverse,oklch(100% 0 0))}.step .step-content .label[data-v-aa628243]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);margin-top:.5rem}.step .step-content .label.unfinished[data-v-aa628243]{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.stepper[data-v-43406106]{z-index:1}.stepper.xs .wrapper[data-v-43406106]{align-items:center}.stepper.xs .wrapper[data-v-43406106] .step-connector:first-child .horizontal-line{border-top-left-radius:2147483647px;border-bottom-left-radius:2147483647px}.stepper.xs .wrapper[data-v-43406106] .step-connector:last-child .horizontal-line{border-top-right-radius:2147483647px;border-bottom-right-radius:2147483647px}.stepper[data-v-43406106]:not(.xs){justify-content:space-between}.stepper.default[data-v-43406106] .step-connector .active{border-color:var(--color-accent,oklch(54.615% .2152 262.881))}.stepper.default[data-v-43406106] .step-state.finished,.stepper.default[data-v-43406106] .step-state.active,.stepper.default[data-v-43406106] .step-state.active:before{background-color:var(--color-accent,oklch(54.615% .2152 262.881))}.stepper.default[data-v-43406106] .step-state .icon{color:var(--color-on-accent,oklch(100% 0 0))}.stepper.error[data-v-43406106] .step-connector .active{border-color:var(--color-danger,oklch(61.535% .2075 25.224))}.stepper.error[data-v-43406106] .step-state.finished,.stepper.error[data-v-43406106] .step-state.active,.stepper.error[data-v-43406106] .step-state.active:before{background-color:var(--color-danger,oklch(61.535% .2075 25.224))}.stepper.error[data-v-43406106] .step-state .icon{color:var(--color-on-danger,oklch(100% 0 0))}.stepper.warning[data-v-43406106] .step-connector .active{border-color:var(--color-warning,oklch(70.49% .1867 47.6))}.stepper.warning[data-v-43406106] .step-state.finished,.stepper.warning[data-v-43406106] .step-state.active,.stepper.warning[data-v-43406106] .step-state.active:before{background-color:var(--color-warning,oklch(70.49% .1867 47.6))}.stepper.warning[data-v-43406106] .step-state .icon{color:var(--color-on-warning,oklch(100% 0 0))}.stepper.success[data-v-43406106] .step-connector .active{border-color:var(--color-success,oklch(55.106% .1432 149.926))}.stepper.success[data-v-43406106] .step-state.finished,.stepper.success[data-v-43406106] .step-state.active,.stepper.success[data-v-43406106] .step-state.active:before{background-color:var(--color-success,oklch(55.106% .1432 149.926))}.stepper.success[data-v-43406106] .step-state .icon{color:var(--color-on-success,oklch(100% 0 0))}.stepper.disabled[data-v-43406106] .step-connector .active,.stepper.disabled[data-v-43406106] .step-state.finished,.stepper.disabled[data-v-43406106] .step-state.active,.stepper.disabled[data-v-43406106] .step-state.active:before{background-color:var(--color-field-border,oklch(86.277% .0063 264.565))}.stepper.disabled[data-v-43406106] .step-state.active:before{background-color:var(--color-border-strong,oklch(73.455% .008 264.608))}.stepper.disabled[data-v-43406106] .step-state .icon{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.stepper .wrapper[data-v-43406106]{flex-direction:row;display:flex;position:relative}.stepper .active-step[data-v-43406106]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));font-weight:var(--font-weight-medium,500);margin-top:.5rem}.filter-tabs[data-v-77bf531e]{justify-content:space-between;gap:.5625rem;display:flex}[data-v-77bf531e] .tab{border-radius:var(--radius-lg,.5rem);border-style:solid;border-width:1px;flex-grow:1;justify-content:space-between;align-items:center;height:2.5rem;padding-left:1rem;padding-right:.625rem;display:flex}[data-v-77bf531e] .tab:not(.active){border-color:var(--color-border-default,oklch(86.277% .0063 264.565))}[data-v-77bf531e] .tab .tab-count{border-style:solid;border-width:1px}[data-v-77bf531e] .tab.active{border-style:solid;border-width:2px;padding-left:.9375rem;padding-right:.5625rem}[data-v-4db35736] .progress{transition-duration:var(--v0ca17cc2)!important}.toast[data-v-4db35736]{border-radius:var(--radius-lg,.5rem);border-style:solid;border-width:1px;border-color:var(--color-divider,oklch(92.48% .0027 264.541));background-color:var(--color-surface-raised-alt,oklch(100% 0 0));width:100%;max-width:24rem;box-shadow:var(--shadow-menu-large);position:relative}.toast .wrapper[data-v-4db35736]{padding:1rem;display:flex}.toast .linear-progress[data-v-4db35736] .progress-bar{border-bottom-right-radius:var(--radius-lg,.5rem);border-bottom-left-radius:var(--radius-lg,.5rem)}.toast.is-absolute[data-v-4db35736]{position:absolute;top:.25rem;right:.25rem}.toast .type-icon[data-v-4db35736]{flex-shrink:0;margin-right:.75rem}.toast .content[data-v-4db35736]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-primary,oklch(21.049% .032 264.664));flex-direction:column;padding-right:1.5rem;display:flex}.toast .content .title[data-v-4db35736]{font-weight:var(--font-weight-medium,500);margin-bottom:.25rem}.toast .content .description[data-v-4db35736]{font-size:var(--text-sm,.875rem);line-height:var(--tw-leading,var(--text-sm--line-height,calc(1.25 / .875)));color:var(--color-text-secondary,oklch(55.1% .023 264.36));margin-bottom:1rem}.toast .content .actions[data-v-4db35736]{gap:.5rem;display:flex}.toast .close[data-v-4db35736]{position:absolute;top:.5rem;right:0}.toast .close[data-v-4db35736] .mini-icon{color:var(--color-text-disabled,oklch(51.786% .0108 264.705))}.close:hover .mini-icon[data-v-4db35736]{color:var(--color-text-primary,oklch(21.049% .032 264.664))}.error .type-icon[data-v-4db35736]{color:var(--color-danger,oklch(61.535% .2075 25.224))}.warning .type-icon[data-v-4db35736]{color:var(--color-warning,oklch(70.49% .1867 47.6))}.success .type-icon[data-v-4db35736]{color:var(--color-success,oklch(55.106% .1432 149.926))}.info .type-icon[data-v-4db35736]{color:var(--color-info,oklch(62.31% .188 259.81))}.fade-enter-from[data-v-4db35736],.fade-leave-to[data-v-4db35736]{opacity:0;translate:15rem}.fade-enter-to[data-v-4db35736],.fade-leave-from[data-v-4db35736]{opacity:1;translate:0}.fade-enter-active[data-v-4db35736],.fade-leave-active[data-v-4db35736]{transition-property:all;transition-timing-function:var(--default-transition-timing-function);transition-duration:.3s}.toast-group[data-v-acb04aac]{z-index:100;max-height:100vh;transition-property:all;transition-timing-function:var(--default-transition-timing-function);scrollbar-width:none;background:0 0;flex-direction:column;gap:1rem;margin:0;padding:1rem;transition-duration:.15s;display:flex;position:fixed;inset:0 0 auto auto;overflow:hidden auto}.container{height:100%;color:var(--color-text-primary,#111827);font-family:var(--font-sans);position:relative}.container #probo-product-search-bar{outline:none}.container span.option{align-items:center;gap:1rem;display:flex}.container span.option .title{font-size:1.125rem;font-weight:600;display:block}.container span.option .subtitle{color:oklch(55.1% .027 264.364);margin-top:.25rem;font-size:.875rem;line-height:1.25rem;display:block}", pb = /* @__PURE__ */ yl({
	...db,
	styles: [fb],
	setup(e, t) {
		return pu(db).use(lp), md.autoDetectLanguage = !1, db.setup ? db.setup(e, t) : null;
	}
});
customElements.define("connect-product-configurator", pb);
//#endregion
