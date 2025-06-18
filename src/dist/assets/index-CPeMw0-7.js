(async () => {
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
    new MutationObserver((s) => {
      for (const r of s) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(s) {
      const r = {};
      return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
    }
    function n(s) {
      if (s.ep) return;
      s.ep = true;
      const r = t(s);
      fetch(s.href, r);
    }
  })();
  const gl = "168", os = {
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  }, ns = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  }, cp = 0, yc = 1, hp = 2, _u = 1, gu = 2, On = 3, Wn = 0, Ht = 1, _n = 2, hi = 0, as = 1, bc = 2, Mc = 3, Sc = 4, up = 5, Ti = 100, dp = 101, pp = 102, fp = 103, mp = 104, _p = 200, gp = 201, vp = 202, xp = 203, Aa = 204, Ca = 205, yp = 206, bp = 207, Mp = 208, Sp = 209, Ep = 210, wp = 211, Tp = 212, Ap = 213, Cp = 214, Rp = 0, Pp = 1, Lp = 2, no = 3, Ip = 4, Dp = 5, Np = 6, Up = 7, vu = 0, Op = 1, Fp = 2, ui = 0, Bp = 1, kp = 2, Vp = 3, xu = 4, zp = 5, Hp = 6, Gp = 7, Ec = "attached", Wp = "detached", yu = 300, fs = 301, ms = 302, Ra = 303, Pa = 304, go = 306, _s = 1e3, ai = 1001, io = 1002, Ot = 1003, bu = 1004, js = 1005, qt = 1006, jr = 1007, Bn = 1008, Xn = 1009, Mu = 1010, Su = 1011, Zs = 1012, vl = 1013, Ri = 1014, hn = 1015, rr = 1016, xl = 1017, yl = 1018, gs = 1020, Eu = 35902, wu = 1021, Tu = 1022, tn = 1023, Au = 1024, Cu = 1025, ls = 1026, vs = 1027, bl = 1028, Ml = 1029, Ru = 1030, Sl = 1031, El = 1033, Kr = 33776, qr = 33777, Yr = 33778, $r = 33779, La = 35840, Ia = 35841, Da = 35842, Na = 35843, Ua = 36196, Oa = 37492, Fa = 37496, Ba = 37808, ka = 37809, Va = 37810, za = 37811, Ha = 37812, Ga = 37813, Wa = 37814, Xa = 37815, ja = 37816, Ka = 37817, qa = 37818, Ya = 37819, $a = 37820, Za = 37821, Zr = 36492, Ja = 36494, Qa = 36495, Pu = 36283, el = 36284, tl = 36285, nl = 36286, Xp = 2200, jp = 2201, Kp = 2202, Js = 2300, Qs = 2301, Oo = 2302, is = 2400, ss = 2401, so = 2402, wl = 2500, qp = 2501, Yp = 0, Lu = 1, il = 2, $p = 3200, Zp = 3201, Iu = 0, Jp = 1, oi = "", At = "srgb", St = "srgb-linear", Tl = "display-p3", vo = "display-p3-linear", ro = "linear", it = "srgb", oo = "rec709", ao = "p3", Oi = 7680, wc = 519, Qp = 512, ef = 513, tf = 514, Du = 515, nf = 516, sf = 517, rf = 518, of = 519, sl = 35044, Tc = "300 es", kn = 2e3, lo = 2001;
  class mi {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      const n = this._listeners;
      n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
      if (this._listeners === void 0) return false;
      const n = this._listeners;
      return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      if (this._listeners === void 0) return;
      const s = this._listeners[e];
      if (s !== void 0) {
        const r = s.indexOf(t);
        r !== -1 && s.splice(r, 1);
      }
    }
    dispatchEvent(e) {
      if (this._listeners === void 0) return;
      const n = this._listeners[e.type];
      if (n !== void 0) {
        e.target = this;
        const s = n.slice(0);
        for (let r = 0, o = s.length; r < o; r++) s[r].call(this, e);
        e.target = null;
      }
    }
  }
  const Pt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff"
  ];
  let Ac = 1234567;
  const qs = Math.PI / 180, xs = 180 / Math.PI;
  function un() {
    const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
    return (Pt[i & 255] + Pt[i >> 8 & 255] + Pt[i >> 16 & 255] + Pt[i >> 24 & 255] + "-" + Pt[e & 255] + Pt[e >> 8 & 255] + "-" + Pt[e >> 16 & 15 | 64] + Pt[e >> 24 & 255] + "-" + Pt[t & 63 | 128] + Pt[t >> 8 & 255] + "-" + Pt[t >> 16 & 255] + Pt[t >> 24 & 255] + Pt[n & 255] + Pt[n >> 8 & 255] + Pt[n >> 16 & 255] + Pt[n >> 24 & 255]).toLowerCase();
  }
  function Ct(i, e, t) {
    return Math.max(e, Math.min(t, i));
  }
  function Al(i, e) {
    return (i % e + e) % e;
  }
  function af(i, e, t, n, s) {
    return n + (i - e) * (s - n) / (t - e);
  }
  function lf(i, e, t) {
    return i !== e ? (t - i) / (e - i) : 0;
  }
  function Ys(i, e, t) {
    return (1 - t) * i + t * e;
  }
  function cf(i, e, t, n) {
    return Ys(i, e, 1 - Math.exp(-t * n));
  }
  function hf(i, e = 1) {
    return e - Math.abs(Al(i, e * 2) - e);
  }
  function uf(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
  }
  function df(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
  }
  function pf(i, e) {
    return i + Math.floor(Math.random() * (e - i + 1));
  }
  function ff(i, e) {
    return i + Math.random() * (e - i);
  }
  function mf(i) {
    return i * (0.5 - Math.random());
  }
  function _f(i) {
    i !== void 0 && (Ac = i);
    let e = Ac += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
  }
  function gf(i) {
    return i * qs;
  }
  function vf(i) {
    return i * xs;
  }
  function xf(i) {
    return (i & i - 1) === 0 && i !== 0;
  }
  function yf(i) {
    return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
  }
  function bf(i) {
    return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
  }
  function Mf(i, e, t, n, s) {
    const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), p = r((n - e) / 2), _ = o((n - e) / 2);
    switch (s) {
      case "XYX":
        i.set(a * h, l * u, l * d, a * c);
        break;
      case "YZY":
        i.set(l * d, a * h, l * u, a * c);
        break;
      case "ZXZ":
        i.set(l * u, l * d, a * h, a * c);
        break;
      case "XZX":
        i.set(a * h, l * _, l * p, a * c);
        break;
      case "YXY":
        i.set(l * p, a * h, l * _, a * c);
        break;
      case "ZYZ":
        i.set(l * _, l * p, a * h, a * c);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
    }
  }
  function cn(i, e) {
    switch (e.constructor) {
      case Float32Array:
        return i;
      case Uint32Array:
        return i / 4294967295;
      case Uint16Array:
        return i / 65535;
      case Uint8Array:
        return i / 255;
      case Int32Array:
        return Math.max(i / 2147483647, -1);
      case Int16Array:
        return Math.max(i / 32767, -1);
      case Int8Array:
        return Math.max(i / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function Je(i, e) {
    switch (e.constructor) {
      case Float32Array:
        return i;
      case Uint32Array:
        return Math.round(i * 4294967295);
      case Uint16Array:
        return Math.round(i * 65535);
      case Uint8Array:
        return Math.round(i * 255);
      case Int32Array:
        return Math.round(i * 2147483647);
      case Int16Array:
        return Math.round(i * 32767);
      case Int8Array:
        return Math.round(i * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const Nu = {
    DEG2RAD: qs,
    RAD2DEG: xs,
    generateUUID: un,
    clamp: Ct,
    euclideanModulo: Al,
    mapLinear: af,
    inverseLerp: lf,
    lerp: Ys,
    damp: cf,
    pingpong: hf,
    smoothstep: uf,
    smootherstep: df,
    randInt: pf,
    randFloat: ff,
    randFloatSpread: mf,
    seededRandom: _f,
    degToRad: gf,
    radToDeg: vf,
    isPowerOfTwo: xf,
    ceilPowerOfTwo: yf,
    floorPowerOfTwo: bf,
    setQuaternionFromProperEuler: Mf,
    normalize: Je,
    denormalize: cn
  };
  class ye {
    constructor(e = 0, t = 0) {
      ye.prototype.isVector2 = true, this.x = e, this.y = t;
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return this.x = e, this.y = t, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this;
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, s = e.elements;
      return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(Ct(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t), s = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
      return this.x = r * n - o * s + e.x, this.y = r * s + o * n + e.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class Ne {
    constructor(e, t, n, s, r, o, a, l, c) {
      Ne.prototype.isMatrix3 = true, this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], e !== void 0 && this.set(e, t, n, s, r, o, a, l, c);
    }
    set(e, t, n, s, r, o, a, l, c) {
      const h = this.elements;
      return h[0] = e, h[1] = s, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, s = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], _ = n[8], g = s[0], m = s[3], f = s[6], M = s[1], b = s[4], E = s[7], N = s[2], A = s[5], C = s[8];
      return r[0] = o * g + a * M + l * N, r[3] = o * m + a * b + l * A, r[6] = o * f + a * E + l * C, r[1] = c * g + h * M + u * N, r[4] = c * m + h * b + u * A, r[7] = c * f + h * E + u * C, r[2] = d * g + p * M + _ * N, r[5] = d * m + p * b + _ * A, r[8] = d * f + p * E + _ * C, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
      return t * o * h - t * a * c - n * r * h + n * a * l + s * r * c - s * o * l;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = h * o - a * c, d = a * l - h * r, p = c * r - o * l, _ = t * u + n * d + s * p;
      if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const g = 1 / _;
      return e[0] = u * g, e[1] = (s * c - h * n) * g, e[2] = (a * n - s * o) * g, e[3] = d * g, e[4] = (h * t - s * l) * g, e[5] = (s * r - a * t) * g, e[6] = p * g, e[7] = (n * l - c * t) * g, e[8] = (o * t - n * r) * g, this;
    }
    transpose() {
      let e;
      const t = this.elements;
      return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
    }
    setUvTransform(e, t, n, s, r, o, a) {
      const l = Math.cos(r), c = Math.sin(r);
      return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -s * c, s * l, -s * (-c * o + l * a) + a + t, 0, 0, 1), this;
    }
    scale(e, t) {
      return this.premultiply(Fo.makeScale(e, t)), this;
    }
    rotate(e) {
      return this.premultiply(Fo.makeRotation(-e)), this;
    }
    translate(e, t) {
      return this.premultiply(Fo.makeTranslation(e, t)), this;
    }
    makeTranslation(e, t) {
      return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
    }
    makeRotation(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let s = 0; s < 9; s++) if (t[s] !== n[s]) return false;
      return true;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Fo = new Ne();
  function Uu(i) {
    for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return true;
    return false;
  }
  function er(i) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", i);
  }
  function Sf() {
    const i = er("canvas");
    return i.style.display = "block", i;
  }
  const Cc = {};
  function cs(i) {
    i in Cc || (Cc[i] = true, console.warn(i));
  }
  function Ef(i, e, t) {
    return new Promise(function(n, s) {
      function r() {
        switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case i.WAIT_FAILED:
            s();
            break;
          case i.TIMEOUT_EXPIRED:
            setTimeout(r, t);
            break;
          default:
            n();
        }
      }
      setTimeout(r, t);
    });
  }
  const Rc = new Ne().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199), Pc = new Ne().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735), Is = {
    [St]: {
      transfer: ro,
      primaries: oo,
      luminanceCoefficients: [
        0.2126,
        0.7152,
        0.0722
      ],
      toReference: (i) => i,
      fromReference: (i) => i
    },
    [At]: {
      transfer: it,
      primaries: oo,
      luminanceCoefficients: [
        0.2126,
        0.7152,
        0.0722
      ],
      toReference: (i) => i.convertSRGBToLinear(),
      fromReference: (i) => i.convertLinearToSRGB()
    },
    [vo]: {
      transfer: ro,
      primaries: ao,
      luminanceCoefficients: [
        0.2289,
        0.6917,
        0.0793
      ],
      toReference: (i) => i.applyMatrix3(Pc),
      fromReference: (i) => i.applyMatrix3(Rc)
    },
    [Tl]: {
      transfer: it,
      primaries: ao,
      luminanceCoefficients: [
        0.2289,
        0.6917,
        0.0793
      ],
      toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Pc),
      fromReference: (i) => i.applyMatrix3(Rc).convertLinearToSRGB()
    }
  }, wf = /* @__PURE__ */ new Set([
    St,
    vo
  ]), ze = {
    enabled: true,
    _workingColorSpace: St,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(i) {
      if (!wf.has(i)) throw new Error(`Unsupported working color space, "${i}".`);
      this._workingColorSpace = i;
    },
    convert: function(i, e, t) {
      if (this.enabled === false || e === t || !e || !t) return i;
      const n = Is[e].toReference, s = Is[t].fromReference;
      return s(n(i));
    },
    fromWorkingColorSpace: function(i, e) {
      return this.convert(i, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function(i, e) {
      return this.convert(i, e, this._workingColorSpace);
    },
    getPrimaries: function(i) {
      return Is[i].primaries;
    },
    getTransfer: function(i) {
      return i === oi ? ro : Is[i].transfer;
    },
    getLuminanceCoefficients: function(i, e = this._workingColorSpace) {
      return i.fromArray(Is[e].luminanceCoefficients);
    }
  };
  function hs(i) {
    return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
  }
  function Bo(i) {
    return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
  }
  let Fi;
  class Tf {
    static getDataURL(e) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        Fi === void 0 && (Fi = er("canvas")), Fi.width = e.width, Fi.height = e.height;
        const n = Fi.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Fi;
      }
      return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
        const t = er("canvas");
        t.width = e.width, t.height = e.height;
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const s = n.getImageData(0, 0, e.width, e.height), r = s.data;
        for (let o = 0; o < r.length; o++) r[o] = hs(r[o] / 255) * 255;
        return n.putImageData(s, 0, 0), t;
      } else if (e.data) {
        const t = e.data.slice(0);
        for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(hs(t[n] / 255) * 255) : t[n] = hs(t[n]);
        return {
          data: t,
          width: e.width,
          height: e.height
        };
      } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
    }
  }
  let Af = 0;
  class Ou {
    constructor(e = null) {
      this.isSource = true, Object.defineProperty(this, "id", {
        value: Af++
      }), this.uuid = un(), this.data = e, this.dataReady = true, this.version = 0;
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
      const n = {
        uuid: this.uuid,
        url: ""
      }, s = this.data;
      if (s !== null) {
        let r;
        if (Array.isArray(s)) {
          r = [];
          for (let o = 0, a = s.length; o < a; o++) s[o].isDataTexture ? r.push(ko(s[o].image)) : r.push(ko(s[o]));
        } else r = ko(s);
        n.url = r;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function ko(i) {
    return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Tf.getDataURL(i) : i.data ? {
      data: Array.from(i.data),
      width: i.width,
      height: i.height,
      type: i.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let Cf = 0;
  class bt extends mi {
    constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, n = ai, s = ai, r = qt, o = Bn, a = tn, l = Xn, c = bt.DEFAULT_ANISOTROPY, h = oi) {
      super(), this.isTexture = true, Object.defineProperty(this, "id", {
        value: Cf++
      }), this.uuid = un(), this.name = "", this.source = new Ou(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new ye(0, 0), this.repeat = new ye(1, 1), this.center = new ye(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ne(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(e = null) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [
          this.repeat.x,
          this.repeat.y
        ],
        offset: [
          this.offset.x,
          this.offset.y
        ],
        center: [
          this.center.x,
          this.center.y
        ],
        rotation: this.rotation,
        wrap: [
          this.wrapS,
          this.wrapT
        ],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    transformUv(e) {
      if (this.mapping !== yu) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
        case _s:
          e.x = e.x - Math.floor(e.x);
          break;
        case ai:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case io:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
        case _s:
          e.y = e.y - Math.floor(e.y);
          break;
        case ai:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case io:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      e === true && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(e) {
      e === true && this.pmremVersion++;
    }
  }
  bt.DEFAULT_IMAGE = null;
  bt.DEFAULT_MAPPING = yu;
  bt.DEFAULT_ANISOTROPY = 1;
  class nt {
    constructor(e = 0, t = 0, n = 0, s = 1) {
      nt.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = s;
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, s) {
      return this.x = e, this.y = t, this.z = n, this.w = s, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this.w = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setZ(e) {
      return this.z = e, this;
    }
    setW(e) {
      return this.w = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this.w += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
    }
    applyMatrix4(e) {
      const t = this.x, n = this.y, s = this.z, r = this.w, o = e.elements;
      return this.x = o[0] * t + o[4] * n + o[8] * s + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * s + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * s + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * s + o[15] * r, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      const t = Math.sqrt(1 - e.w * e.w);
      return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
    }
    setAxisAngleFromRotationMatrix(e) {
      let t, n, s, r;
      const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], _ = l[9], g = l[2], m = l[6], f = l[10];
      if (Math.abs(h - d) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(_ - m) < 0.01) {
        if (Math.abs(h + d) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const b = (c + 1) / 2, E = (p + 1) / 2, N = (f + 1) / 2, A = (h + d) / 4, C = (u + g) / 4, F = (_ + m) / 4;
        return b > E && b > N ? b < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), s = A / n, r = C / n) : E > N ? E < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(E), n = A / s, r = F / s) : N < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(N), n = C / r, s = F / r), this.set(n, s, r, t), this;
      }
      let M = Math.sqrt((m - _) * (m - _) + (u - g) * (u - g) + (d - h) * (d - h));
      return Math.abs(M) < 1e-3 && (M = 1), this.x = (m - _) / M, this.y = (u - g) / M, this.z = (d - h) / M, this.w = Math.acos((c + p + f - 1) / 2), this;
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class Rf extends mi {
    constructor(e = 1, t = 1, n = {}) {
      super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new nt(0, 0, e, t), this.scissorTest = false, this.viewport = new nt(0, 0, e, t);
      const s = {
        width: e,
        height: t,
        depth: 1
      };
      n = Object.assign({
        generateMipmaps: false,
        internalFormat: null,
        minFilter: qt,
        depthBuffer: true,
        stencilBuffer: false,
        resolveDepthBuffer: true,
        resolveStencilBuffer: true,
        depthTexture: null,
        samples: 0,
        count: 1
      }, n);
      const r = new bt(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
      r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
      const o = n.count;
      for (let a = 0; a < o; a++) this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = true;
      this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
    }
    get texture() {
      return this.textures[0];
    }
    set texture(e) {
      this.textures[0] = e;
    }
    setSize(e, t, n = 1) {
      if (this.width !== e || this.height !== t || this.depth !== n) {
        this.width = e, this.height = t, this.depth = n;
        for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = n;
        this.dispose();
      }
      this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
      for (let n = 0, s = e.textures.length; n < s; n++) this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = true;
      const t = Object.assign({}, e.texture.image);
      return this.texture.source = new Ou(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  class Pi extends Rf {
    constructor(e = 1, t = 1, n = {}) {
      super(e, t, n), this.isWebGLRenderTarget = true;
    }
  }
  class Fu extends bt {
    constructor(e = null, t = 1, n = 1, s = 1) {
      super(null), this.isDataArrayTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: s
      }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = ai, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(e) {
      this.layerUpdates.add(e);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  }
  class Pf extends bt {
    constructor(e = null, t = 1, n = 1, s = 1) {
      super(null), this.isData3DTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: s
      }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = ai, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  class Mt {
    constructor(e = 0, t = 0, n = 0, s = 1) {
      this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = s;
    }
    static slerpFlat(e, t, n, s, r, o, a) {
      let l = n[s + 0], c = n[s + 1], h = n[s + 2], u = n[s + 3];
      const d = r[o + 0], p = r[o + 1], _ = r[o + 2], g = r[o + 3];
      if (a === 0) {
        e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
        return;
      }
      if (a === 1) {
        e[t + 0] = d, e[t + 1] = p, e[t + 2] = _, e[t + 3] = g;
        return;
      }
      if (u !== g || l !== d || c !== p || h !== _) {
        let m = 1 - a;
        const f = l * d + c * p + h * _ + u * g, M = f >= 0 ? 1 : -1, b = 1 - f * f;
        if (b > Number.EPSILON) {
          const N = Math.sqrt(b), A = Math.atan2(N, f * M);
          m = Math.sin(m * A) / N, a = Math.sin(a * A) / N;
        }
        const E = a * M;
        if (l = l * m + d * E, c = c * m + p * E, h = h * m + _ * E, u = u * m + g * E, m === 1 - a) {
          const N = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
          l *= N, c *= N, h *= N, u *= N;
        }
      }
      e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
    }
    static multiplyQuaternionsFlat(e, t, n, s, r, o) {
      const a = n[s], l = n[s + 1], c = n[s + 2], h = n[s + 3], u = r[o], d = r[o + 1], p = r[o + 2], _ = r[o + 3];
      return e[t] = a * _ + h * u + l * p - c * d, e[t + 1] = l * _ + h * d + c * u - a * p, e[t + 2] = c * _ + h * p + a * d - l * u, e[t + 3] = h * _ - a * u - l * d - c * p, e;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e) {
      this._w = e, this._onChangeCallback();
    }
    set(e, t, n, s) {
      return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
    }
    setFromEuler(e, t = true) {
      const n = e._x, s = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(s / 2), u = a(r / 2), d = l(n / 2), p = l(s / 2), _ = l(r / 2);
      switch (o) {
        case "XYZ":
          this._x = d * h * u + c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u - d * p * _;
          break;
        case "YXZ":
          this._x = d * h * u + c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u + d * p * _;
          break;
        case "ZXY":
          this._x = d * h * u - c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u - d * p * _;
          break;
        case "ZYX":
          this._x = d * h * u - c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u + d * p * _;
          break;
        case "YZX":
          this._x = d * h * u + c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u - d * p * _;
          break;
        case "XZY":
          this._x = d * h * u - c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u + d * p * _;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
      }
      return t === true && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
      const n = t / 2, s = Math.sin(n);
      return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e) {
      const t = e.elements, n = t[0], s = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + a + u;
      if (d > 0) {
        const p = 0.5 / Math.sqrt(d + 1);
        this._w = 0.25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (o - s) * p;
      } else if (n > a && n > u) {
        const p = 2 * Math.sqrt(1 + n - a - u);
        this._w = (h - l) / p, this._x = 0.25 * p, this._y = (s + o) / p, this._z = (r + c) / p;
      } else if (a > u) {
        const p = 2 * Math.sqrt(1 + a - n - u);
        this._w = (r - c) / p, this._x = (s + o) / p, this._y = 0.25 * p, this._z = (l + h) / p;
      } else {
        const p = 2 * Math.sqrt(1 + u - n - a);
        this._w = (o - s) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(Ct(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (n === 0) return this;
      const s = Math.min(1, t / n);
      return this.slerp(e, s), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let e = this.length();
      return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      const n = e._x, s = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
      return this._x = n * h + o * a + s * c - r * l, this._y = s * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - s * a, this._w = o * h - n * a - s * l - r * c, this._onChangeCallback(), this;
    }
    slerp(e, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(e);
      const n = this._x, s = this._y, r = this._z, o = this._w;
      let a = o * e._w + n * e._x + s * e._y + r * e._z;
      if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = s, this._z = r, this;
      const l = 1 - a * a;
      if (l <= Number.EPSILON) {
        const p = 1 - t;
        return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * s + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
      }
      const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
      return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = s * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
      return this.set(s * Math.sin(e), s * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
      return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
    }
    fromBufferAttribute(e, t) {
      return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class R {
    constructor(e = 0, t = 0, n = 0) {
      R.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
    }
    set(e, t, n) {
      return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setZ(e) {
      return this.z = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this;
    }
    multiplyVectors(e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
    }
    applyEuler(e) {
      return this.applyQuaternion(Lc.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(Lc.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, s = this.z, r = e.elements;
      return this.x = r[0] * t + r[3] * n + r[6] * s, this.y = r[1] * t + r[4] * n + r[7] * s, this.z = r[2] * t + r[5] * n + r[8] * s, this;
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      const t = this.x, n = this.y, s = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
      return this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * o, this;
    }
    applyQuaternion(e) {
      const t = this.x, n = this.y, s = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * s - a * n), h = 2 * (a * t - r * s), u = 2 * (r * n - o * t);
      return this.x = t + l * c + o * u - a * h, this.y = n + l * h + a * c - r * u, this.z = s + l * u + r * h - o * c, this;
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
      const t = this.x, n = this.y, s = this.z, r = e.elements;
      return this.x = r[0] * t + r[4] * n + r[8] * s, this.y = r[1] * t + r[5] * n + r[9] * s, this.z = r[2] * t + r[6] * n + r[10] * s, this.normalize();
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      const n = e.x, s = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
      return this.x = s * l - r * a, this.y = r * o - n * l, this.z = n * a - s * o, this;
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return Vo.copy(this).projectOnVector(e), this.sub(Vo);
    }
    reflect(e) {
      return this.sub(Vo.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(Ct(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
      return t * t + n * n + s * s;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      const s = Math.sin(t) * e;
      return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this;
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
      return this.x = t, this.y = n, this.z = s, this;
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return this.x = e._x, this.y = e._y, this.z = e._z, this;
    }
    setFromColor(e) {
      return this.x = e.r, this.y = e.g, this.z = e.b, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
      return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const Vo = new R(), Lc = new Mt();
  class Kn {
    constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = e, this.max = t;
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(rn.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(rn.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = rn.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = false) {
      return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = false) {
      e.updateWorldMatrix(false, false);
      const n = e.geometry;
      if (n !== void 0) {
        const r = n.getAttribute("position");
        if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = r.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, rn) : rn.fromBufferAttribute(r, o), rn.applyMatrix4(e.matrixWorld), this.expandByPoint(rn);
        else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), _r.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), _r.copy(n.boundingBox)), _r.applyMatrix4(e.matrixWorld), this.union(_r);
      }
      const s = e.children;
      for (let r = 0, o = s.length; r < o; r++) this.expandByObject(s[r], t);
      return this;
    }
    containsPoint(e) {
      return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
    }
    containsBox(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
    getParameter(e, t) {
      return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e) {
      return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
    }
    intersectsSphere(e) {
      return this.clampPoint(e.center, rn), rn.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
      let t, n;
      return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return false;
      this.getCenter(Ds), gr.subVectors(this.max, Ds), Bi.subVectors(e.a, Ds), ki.subVectors(e.b, Ds), Vi.subVectors(e.c, Ds), Yn.subVectors(ki, Bi), $n.subVectors(Vi, ki), gi.subVectors(Bi, Vi);
      let t = [
        0,
        -Yn.z,
        Yn.y,
        0,
        -$n.z,
        $n.y,
        0,
        -gi.z,
        gi.y,
        Yn.z,
        0,
        -Yn.x,
        $n.z,
        0,
        -$n.x,
        gi.z,
        0,
        -gi.x,
        -Yn.y,
        Yn.x,
        0,
        -$n.y,
        $n.x,
        0,
        -gi.y,
        gi.x,
        0
      ];
      return !zo(t, Bi, ki, Vi, gr) || (t = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], !zo(t, Bi, ki, Vi, gr)) ? false : (vr.crossVectors(Yn, $n), t = [
        vr.x,
        vr.y,
        vr.z
      ], zo(t, Bi, ki, Vi, gr));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, rn).distanceTo(e);
    }
    getBoundingSphere(e) {
      return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(rn).length() * 0.5), e;
    }
    intersect(e) {
      return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return this.isEmpty() ? this : (Rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Rn), this);
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  const Rn = [
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R()
  ], rn = new R(), _r = new Kn(), Bi = new R(), ki = new R(), Vi = new R(), Yn = new R(), $n = new R(), gi = new R(), Ds = new R(), gr = new R(), vr = new R(), vi = new R();
  function zo(i, e, t, n, s) {
    for (let r = 0, o = i.length - 3; r <= o; r += 3) {
      vi.fromArray(i, r);
      const a = s.x * Math.abs(vi.x) + s.y * Math.abs(vi.y) + s.z * Math.abs(vi.z), l = e.dot(vi), c = t.dot(vi), h = n.dot(vi);
      if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return false;
    }
    return true;
  }
  const Lf = new Kn(), Ns = new R(), Ho = new R();
  class Sn {
    constructor(e = new R(), t = -1) {
      this.isSphere = true, this.center = e, this.radius = t;
    }
    set(e, t) {
      return this.center.copy(e), this.radius = t, this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      t !== void 0 ? n.copy(t) : Lf.setFromPoints(e).getCenter(n);
      let s = 0;
      for (let r = 0, o = e.length; r < o; r++) s = Math.max(s, n.distanceToSquared(e[r]));
      return this.radius = Math.sqrt(s), this;
    }
    copy(e) {
      return this.center.copy(e.center), this.radius = e.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
    }
    getBoundingBox(e) {
      return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
    }
    translate(e) {
      return this.center.add(e), this;
    }
    expandByPoint(e) {
      if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
      Ns.subVectors(e, this.center);
      const t = Ns.lengthSq();
      if (t > this.radius * this.radius) {
        const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
        this.center.addScaledVector(Ns, s / n), this.radius += s;
      }
      return this;
    }
    union(e) {
      return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Ho.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ns.copy(e.center).add(Ho)), this.expandByPoint(Ns.copy(e.center).sub(Ho))), this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Pn = new R(), Go = new R(), xr = new R(), Zn = new R(), Wo = new R(), yr = new R(), Xo = new R();
  class or {
    constructor(e = new R(), t = new R(0, 0, -1)) {
      this.origin = e, this.direction = t;
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, Pn)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      const t = Pn.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (Pn.copy(this.origin).addScaledVector(this.direction, t), Pn.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, s) {
      Go.copy(e).add(t).multiplyScalar(0.5), xr.copy(t).sub(e).normalize(), Zn.copy(this.origin).sub(Go);
      const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(xr), a = Zn.dot(this.direction), l = -Zn.dot(xr), c = Zn.lengthSq(), h = Math.abs(1 - o * o);
      let u, d, p, _;
      if (h > 0) if (u = o * l - a, d = o * a - l, _ = r * h, u >= 0) if (d >= -_) if (d <= _) {
        const g = 1 / h;
        u *= g, d *= g, p = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c;
      } else d = r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
      else d = -r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
      else d <= -_ ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= _ ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
      else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
      return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Go).addScaledVector(xr, d), p;
    }
    intersectSphere(e, t) {
      Pn.subVectors(e.center, this.origin);
      const n = Pn.dot(this.direction), s = Pn.dot(Pn) - n * n, r = e.radius * e.radius;
      if (s > r) return null;
      const o = Math.sqrt(r - s), a = n - o, l = n + o;
      return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n, s, r, o, a, l;
      const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
      return c >= 0 ? (n = (e.min.x - d.x) * c, s = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, s = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > s || ((r > n || isNaN(n)) && (n = r), (o < s || isNaN(s)) && (s = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > s) || ((a > n || n !== n) && (n = a), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, t);
    }
    intersectsBox(e) {
      return this.intersectBox(e, Pn) !== null;
    }
    intersectTriangle(e, t, n, s, r) {
      Wo.subVectors(t, e), yr.subVectors(n, e), Xo.crossVectors(Wo, yr);
      let o = this.direction.dot(Xo), a;
      if (o > 0) {
        if (s) return null;
        a = 1;
      } else if (o < 0) a = -1, o = -o;
      else return null;
      Zn.subVectors(this.origin, e);
      const l = a * this.direction.dot(yr.crossVectors(Zn, yr));
      if (l < 0) return null;
      const c = a * this.direction.dot(Wo.cross(Zn));
      if (c < 0 || l + c > o) return null;
      const h = -a * Zn.dot(Xo);
      return h < 0 ? null : this.at(h / o, r);
    }
    applyMatrix4(e) {
      return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Le {
    constructor(e, t, n, s, r, o, a, l, c, h, u, d, p, _, g, m) {
      Le.prototype.isMatrix4 = true, this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ], e !== void 0 && this.set(e, t, n, s, r, o, a, l, c, h, u, d, p, _, g, m);
    }
    set(e, t, n, s, r, o, a, l, c, h, u, d, p, _, g, m) {
      const f = this.elements;
      return f[0] = e, f[4] = t, f[8] = n, f[12] = s, f[1] = r, f[5] = o, f[9] = a, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = _, f[11] = g, f[15] = m, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new Le().fromArray(this.elements);
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
    }
    copyPosition(e) {
      const t = this.elements, n = e.elements;
      return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e, t, n) {
      return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(e) {
      const t = this.elements, n = e.elements, s = 1 / zi.setFromMatrixColumn(e, 0).length(), r = 1 / zi.setFromMatrixColumn(e, 1).length(), o = 1 / zi.setFromMatrixColumn(e, 2).length();
      return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e) {
      const t = this.elements, n = e.x, s = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
      if (e.order === "XYZ") {
        const d = o * h, p = o * u, _ = a * h, g = a * u;
        t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + _ * c, t[5] = d - g * c, t[9] = -a * l, t[2] = g - d * c, t[6] = _ + p * c, t[10] = o * l;
      } else if (e.order === "YXZ") {
        const d = l * h, p = l * u, _ = c * h, g = c * u;
        t[0] = d + g * a, t[4] = _ * a - p, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = p * a - _, t[6] = g + d * a, t[10] = o * l;
      } else if (e.order === "ZXY") {
        const d = l * h, p = l * u, _ = c * h, g = c * u;
        t[0] = d - g * a, t[4] = -o * u, t[8] = _ + p * a, t[1] = p + _ * a, t[5] = o * h, t[9] = g - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
      } else if (e.order === "ZYX") {
        const d = o * h, p = o * u, _ = a * h, g = a * u;
        t[0] = l * h, t[4] = _ * c - p, t[8] = d * c + g, t[1] = l * u, t[5] = g * c + d, t[9] = p * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
      } else if (e.order === "YZX") {
        const d = o * l, p = o * c, _ = a * l, g = a * c;
        t[0] = l * h, t[4] = g - d * u, t[8] = _ * u + p, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = p * u + _, t[10] = d - g * u;
      } else if (e.order === "XZY") {
        const d = o * l, p = o * c, _ = a * l, g = a * c;
        t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + g, t[5] = o * h, t[9] = p * u - _, t[2] = _ * u - p, t[6] = a * h, t[10] = g * u + d;
      }
      return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e) {
      return this.compose(If, e, Df);
    }
    lookAt(e, t, n) {
      const s = this.elements;
      return jt.subVectors(e, t), jt.lengthSq() === 0 && (jt.z = 1), jt.normalize(), Jn.crossVectors(n, jt), Jn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? jt.x += 1e-4 : jt.z += 1e-4, jt.normalize(), Jn.crossVectors(n, jt)), Jn.normalize(), br.crossVectors(jt, Jn), s[0] = Jn.x, s[4] = br.x, s[8] = jt.x, s[1] = Jn.y, s[5] = br.y, s[9] = jt.y, s[2] = Jn.z, s[6] = br.z, s[10] = jt.z, this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, s = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], _ = n[2], g = n[6], m = n[10], f = n[14], M = n[3], b = n[7], E = n[11], N = n[15], A = s[0], C = s[4], F = s[8], S = s[12], y = s[1], L = s[5], X = s[9], k = s[13], H = s[2], $ = s[6], z = s[10], Z = s[14], V = s[3], oe = s[7], he = s[11], me = s[15];
      return r[0] = o * A + a * y + l * H + c * V, r[4] = o * C + a * L + l * $ + c * oe, r[8] = o * F + a * X + l * z + c * he, r[12] = o * S + a * k + l * Z + c * me, r[1] = h * A + u * y + d * H + p * V, r[5] = h * C + u * L + d * $ + p * oe, r[9] = h * F + u * X + d * z + p * he, r[13] = h * S + u * k + d * Z + p * me, r[2] = _ * A + g * y + m * H + f * V, r[6] = _ * C + g * L + m * $ + f * oe, r[10] = _ * F + g * X + m * z + f * he, r[14] = _ * S + g * k + m * Z + f * me, r[3] = M * A + b * y + E * H + N * V, r[7] = M * C + b * L + E * $ + N * oe, r[11] = M * F + b * X + E * z + N * he, r[15] = M * S + b * k + E * Z + N * me, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[4], s = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], _ = e[3], g = e[7], m = e[11], f = e[15];
      return _ * (+r * l * u - s * c * u - r * a * d + n * c * d + s * a * p - n * l * p) + g * (+t * l * p - t * c * d + r * o * d - s * o * p + s * c * h - r * l * h) + m * (+t * c * u - t * a * p - r * o * u + n * o * p + r * a * h - n * c * h) + f * (-s * a * h - t * l * u + t * a * d + s * o * u - n * o * d + n * l * h);
    }
    transpose() {
      const e = this.elements;
      let t;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
    }
    setPosition(e, t, n) {
      const s = this.elements;
      return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], _ = e[12], g = e[13], m = e[14], f = e[15], M = u * m * c - g * d * c + g * l * p - a * m * p - u * l * f + a * d * f, b = _ * d * c - h * m * c - _ * l * p + o * m * p + h * l * f - o * d * f, E = h * g * c - _ * u * c + _ * a * p - o * g * p - h * a * f + o * u * f, N = _ * u * l - h * g * l - _ * a * d + o * g * d + h * a * m - o * u * m, A = t * M + n * b + s * E + r * N;
      if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const C = 1 / A;
      return e[0] = M * C, e[1] = (g * d * r - u * m * r - g * s * p + n * m * p + u * s * f - n * d * f) * C, e[2] = (a * m * r - g * l * r + g * s * c - n * m * c - a * s * f + n * l * f) * C, e[3] = (u * l * r - a * d * r - u * s * c + n * d * c + a * s * p - n * l * p) * C, e[4] = b * C, e[5] = (h * m * r - _ * d * r + _ * s * p - t * m * p - h * s * f + t * d * f) * C, e[6] = (_ * l * r - o * m * r - _ * s * c + t * m * c + o * s * f - t * l * f) * C, e[7] = (o * d * r - h * l * r + h * s * c - t * d * c - o * s * p + t * l * p) * C, e[8] = E * C, e[9] = (_ * u * r - h * g * r - _ * n * p + t * g * p + h * n * f - t * u * f) * C, e[10] = (o * g * r - _ * a * r + _ * n * c - t * g * c - o * n * f + t * a * f) * C, e[11] = (h * a * r - o * u * r - h * n * c + t * u * c + o * n * p - t * a * p) * C, e[12] = N * C, e[13] = (h * g * s - _ * u * s + _ * n * d - t * g * d - h * n * m + t * u * m) * C, e[14] = (_ * a * s - o * g * s - _ * n * l + t * g * l + o * n * m - t * a * m) * C, e[15] = (o * u * s - h * a * s + h * n * l - t * u * l - o * n * d + t * a * d) * C, this;
    }
    scale(e) {
      const t = this.elements, n = e.x, s = e.y, r = e.z;
      return t[0] *= n, t[4] *= s, t[8] *= r, t[1] *= n, t[5] *= s, t[9] *= r, t[2] *= n, t[6] *= s, t[10] *= r, t[3] *= n, t[7] *= s, t[11] *= r, this;
    }
    getMaxScaleOnAxis() {
      const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, s));
    }
    makeTranslation(e, t, n) {
      return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t), s = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, h = r * a;
      return this.set(c * o + n, c * a - s * l, c * l + s * a, 0, c * a + s * l, h * a + n, h * l - s * o, 0, c * l - s * a, h * l + s * o, r * l * l + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, s, r, o) {
      return this.set(1, n, r, 0, e, 1, o, 0, t, s, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
      const s = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, h = o + o, u = a + a, d = r * c, p = r * h, _ = r * u, g = o * h, m = o * u, f = a * u, M = l * c, b = l * h, E = l * u, N = n.x, A = n.y, C = n.z;
      return s[0] = (1 - (g + f)) * N, s[1] = (p + E) * N, s[2] = (_ - b) * N, s[3] = 0, s[4] = (p - E) * A, s[5] = (1 - (d + f)) * A, s[6] = (m + M) * A, s[7] = 0, s[8] = (_ + b) * C, s[9] = (m - M) * C, s[10] = (1 - (d + g)) * C, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
    }
    decompose(e, t, n) {
      const s = this.elements;
      let r = zi.set(s[0], s[1], s[2]).length();
      const o = zi.set(s[4], s[5], s[6]).length(), a = zi.set(s[8], s[9], s[10]).length();
      this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], on.copy(this);
      const c = 1 / r, h = 1 / o, u = 1 / a;
      return on.elements[0] *= c, on.elements[1] *= c, on.elements[2] *= c, on.elements[4] *= h, on.elements[5] *= h, on.elements[6] *= h, on.elements[8] *= u, on.elements[9] *= u, on.elements[10] *= u, t.setFromRotationMatrix(on), n.x = r, n.y = o, n.z = a, this;
    }
    makePerspective(e, t, n, s, r, o, a = kn) {
      const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - s), u = (t + e) / (t - e), d = (n + s) / (n - s);
      let p, _;
      if (a === kn) p = -(o + r) / (o - r), _ = -2 * o * r / (o - r);
      else if (a === lo) p = -o / (o - r), _ = -o * r / (o - r);
      else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
      return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
    }
    makeOrthographic(e, t, n, s, r, o, a = kn) {
      const l = this.elements, c = 1 / (t - e), h = 1 / (n - s), u = 1 / (o - r), d = (t + e) * c, p = (n + s) * h;
      let _, g;
      if (a === kn) _ = (o + r) * u, g = -2 * u;
      else if (a === lo) _ = r * u, g = -1 * u;
      else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
      return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
    }
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let s = 0; s < 16; s++) if (t[s] !== n[s]) return false;
      return true;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
    }
  }
  const zi = new R(), on = new Le(), If = new R(0, 0, 0), Df = new R(1, 1, 1), Jn = new R(), br = new R(), jt = new R(), Ic = new Le(), Dc = new Mt();
  class yn {
    constructor(e = 0, t = 0, n = 0, s = yn.DEFAULT_ORDER) {
      this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = s;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e) {
      this._order = e, this._onChangeCallback();
    }
    set(e, t, n, s = this._order) {
      return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e, t = this._order, n = true) {
      const s = e.elements, r = s[0], o = s[4], a = s[8], l = s[1], c = s[5], h = s[9], u = s[2], d = s[6], p = s[10];
      switch (t) {
        case "XYZ":
          this._y = Math.asin(Ct(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Ct(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Ct(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
          break;
        case "ZYX":
          this._y = Math.asin(-Ct(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
          break;
        case "YZX":
          this._z = Math.asin(Ct(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, p));
          break;
        case "XZY":
          this._z = Math.asin(-Ct(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
      }
      return this._order = t, n === true && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return Ic.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ic, t, n);
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return Dc.setFromEuler(this), this.setFromQuaternion(Dc, e);
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
      return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  yn.DEFAULT_ORDER = "XYZ";
  class Bu {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = (1 << e | 0) >>> 0;
    }
    enable(e) {
      this.mask |= 1 << e | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= 1 << e | 0;
    }
    disable(e) {
      this.mask &= ~(1 << e | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return (this.mask & (1 << e | 0)) !== 0;
    }
  }
  let Nf = 0;
  const Nc = new R(), Hi = new Mt(), Ln = new Le(), Mr = new R(), Us = new R(), Uf = new R(), Of = new Mt(), Uc = new R(1, 0, 0), Oc = new R(0, 1, 0), Fc = new R(0, 0, 1), Bc = {
    type: "added"
  }, Ff = {
    type: "removed"
  }, Gi = {
    type: "childadded",
    child: null
  }, jo = {
    type: "childremoved",
    child: null
  };
  class ot extends mi {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", {
        value: Nf++
      }), this.uuid = un(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ot.DEFAULT_UP.clone();
      const e = new R(), t = new yn(), n = new Mt(), s = new R(1, 1, 1);
      function r() {
        n.setFromEuler(t, false);
      }
      function o() {
        t.setFromQuaternion(n, void 0, false);
      }
      t._onChange(r), n._onChange(o), Object.defineProperties(this, {
        position: {
          configurable: true,
          enumerable: true,
          value: e
        },
        rotation: {
          configurable: true,
          enumerable: true,
          value: t
        },
        quaternion: {
          configurable: true,
          enumerable: true,
          value: n
        },
        scale: {
          configurable: true,
          enumerable: true,
          value: s
        },
        modelViewMatrix: {
          value: new Le()
        },
        normalMatrix: {
          value: new Ne()
        }
      }), this.matrix = new Le(), this.matrixWorld = new Le(), this.matrixAutoUpdate = ot.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Bu(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, true);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return Hi.setFromAxisAngle(e, t), this.quaternion.multiply(Hi), this;
    }
    rotateOnWorldAxis(e, t) {
      return Hi.setFromAxisAngle(e, t), this.quaternion.premultiply(Hi), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(Uc, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Oc, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(Fc, e);
    }
    translateOnAxis(e, t) {
      return Nc.copy(e).applyQuaternion(this.quaternion), this.position.add(Nc.multiplyScalar(t)), this;
    }
    translateX(e) {
      return this.translateOnAxis(Uc, e);
    }
    translateY(e) {
      return this.translateOnAxis(Oc, e);
    }
    translateZ(e) {
      return this.translateOnAxis(Fc, e);
    }
    localToWorld(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(Ln.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
      e.isVector3 ? Mr.copy(e) : Mr.set(e, t, n);
      const s = this.parent;
      this.updateWorldMatrix(true, false), Us.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ln.lookAt(Us, Mr, this.up) : Ln.lookAt(Mr, Us, this.up), this.quaternion.setFromRotationMatrix(Ln), s && (Ln.extractRotation(s.matrixWorld), Hi.setFromRotationMatrix(Ln), this.quaternion.premultiply(Hi.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Bc), Gi.child = e, this.dispatchEvent(Gi), Gi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
        return this;
      }
      const t = this.children.indexOf(e);
      return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ff), jo.child = e, this.dispatchEvent(jo), jo.child = null), this;
    }
    removeFromParent() {
      const e = this.parent;
      return e !== null && e.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(e) {
      return this.updateWorldMatrix(true, false), Ln.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Ln.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ln), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Bc), Gi.child = e, this.dispatchEvent(Gi), Gi.child = null, this;
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, s = this.children.length; n < s; n++) {
        const o = this.children[n].getObjectByProperty(e, t);
        if (o !== void 0) return o;
      }
    }
    getObjectsByProperty(e, t, n = []) {
      this[e] === t && n.push(this);
      const s = this.children;
      for (let r = 0, o = s.length; r < o; r++) s[r].getObjectsByProperty(e, t, n);
      return n;
    }
    getWorldPosition(e) {
      return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Us, e, Uf), e;
    }
    getWorldScale(e) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Us, Of, e), e;
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(true, false);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {
    }
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, s = t.length; n < s; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === false) return;
      e(this);
      const t = this.children;
      for (let n = 0, s = t.length; n < s; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      const t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
      const t = this.children;
      for (let n = 0, s = t.length; n < s; n++) t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
        const s = this.children;
        for (let r = 0, o = s.length; r < o; r++) s[r].updateWorldMatrix(false, true);
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string", n = {};
      t && (e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }, n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      const s = {};
      s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((a) => ({
        boxInitialized: a.boxInitialized,
        boxMin: a.box.min.toArray(),
        boxMax: a.box.max.toArray(),
        sphereInitialized: a.sphereInitialized,
        sphereRadius: a.sphere.radius,
        sphereCenter: a.sphere.center.toArray()
      })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = {
        center: s.boundingSphere.center.toArray(),
        radius: s.boundingSphere.radius
      }), this.boundingBox !== null && (s.boundingBox = {
        min: s.boundingBox.min.toArray(),
        max: s.boundingBox.max.toArray()
      }));
      function r(a, l) {
        return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
      }
      if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        s.geometry = r(e.geometries, this.geometry);
        const a = this.geometry.parameters;
        if (a !== void 0 && a.shapes !== void 0) {
          const l = a.shapes;
          if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
          else r(e.shapes, l);
        }
      }
      if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++) a.push(r(e.materials, this.material[l]));
        s.material = a;
      } else s.material = r(e.materials, this.material);
      if (this.children.length > 0) {
        s.children = [];
        for (let a = 0; a < this.children.length; a++) s.children.push(this.children[a].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        s.animations = [];
        for (let a = 0; a < this.animations.length; a++) {
          const l = this.animations[a];
          s.animations.push(r(e.animations, l));
        }
      }
      if (t) {
        const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), p = o(e.animations), _ = o(e.nodes);
        a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
      }
      return n.object = s, n;
      function o(a) {
        const l = [];
        for (const c in a) {
          const h = a[c];
          delete h.metadata, l.push(h);
        }
        return l;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = true) {
      if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
      return this;
    }
  }
  ot.DEFAULT_UP = new R(0, 1, 0);
  ot.DEFAULT_MATRIX_AUTO_UPDATE = true;
  ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  const an = new R(), In = new R(), Ko = new R(), Dn = new R(), Wi = new R(), Xi = new R(), kc = new R(), qo = new R(), Yo = new R(), $o = new R();
  class gn {
    constructor(e = new R(), t = new R(), n = new R()) {
      this.a = e, this.b = t, this.c = n;
    }
    static getNormal(e, t, n, s) {
      s.subVectors(n, t), an.subVectors(e, t), s.cross(an);
      const r = s.lengthSq();
      return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, s, r) {
      an.subVectors(s, t), In.subVectors(n, t), Ko.subVectors(e, t);
      const o = an.dot(an), a = an.dot(In), l = an.dot(Ko), c = In.dot(In), h = In.dot(Ko), u = o * c - a * a;
      if (u === 0) return r.set(0, 0, 0), null;
      const d = 1 / u, p = (c * l - a * h) * d, _ = (o * h - a * l) * d;
      return r.set(1 - p - _, _, p);
    }
    static containsPoint(e, t, n, s) {
      return this.getBarycoord(e, t, n, s, Dn) === null ? false : Dn.x >= 0 && Dn.y >= 0 && Dn.x + Dn.y <= 1;
    }
    static getInterpolation(e, t, n, s, r, o, a, l) {
      return this.getBarycoord(e, t, n, s, Dn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Dn.x), l.addScaledVector(o, Dn.y), l.addScaledVector(a, Dn.z), l);
    }
    static isFrontFacing(e, t, n, s) {
      return an.subVectors(n, t), In.subVectors(e, t), an.cross(In).dot(s) < 0;
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, s) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
    }
    setFromAttributeAndIndices(e, t, n, s) {
      return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
      return an.subVectors(this.c, this.b), In.subVectors(this.a, this.b), an.cross(In).length() * 0.5;
    }
    getMidpoint(e) {
      return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return gn.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return gn.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getInterpolation(e, t, n, s, r) {
      return gn.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
    }
    containsPoint(e) {
      return gn.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return gn.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a, s = this.b, r = this.c;
      let o, a;
      Wi.subVectors(s, n), Xi.subVectors(r, n), qo.subVectors(e, n);
      const l = Wi.dot(qo), c = Xi.dot(qo);
      if (l <= 0 && c <= 0) return t.copy(n);
      Yo.subVectors(e, s);
      const h = Wi.dot(Yo), u = Xi.dot(Yo);
      if (h >= 0 && u <= h) return t.copy(s);
      const d = l * u - h * c;
      if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(Wi, o);
      $o.subVectors(e, r);
      const p = Wi.dot($o), _ = Xi.dot($o);
      if (_ >= 0 && p <= _) return t.copy(r);
      const g = p * c - l * _;
      if (g <= 0 && c >= 0 && _ <= 0) return a = c / (c - _), t.copy(n).addScaledVector(Xi, a);
      const m = h * _ - p * u;
      if (m <= 0 && u - h >= 0 && p - _ >= 0) return kc.subVectors(r, s), a = (u - h) / (u - h + (p - _)), t.copy(s).addScaledVector(kc, a);
      const f = 1 / (m + g + d);
      return o = g * f, a = d * f, t.copy(n).addScaledVector(Wi, o).addScaledVector(Xi, a);
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  const ku = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, Qn = {
    h: 0,
    s: 0,
    l: 0
  }, Sr = {
    h: 0,
    s: 0,
    l: 0
  };
  function Zo(i, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
  }
  class Ae {
    constructor(e, t, n) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
    }
    set(e, t, n) {
      if (t === void 0 && n === void 0) {
        const s = e;
        s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
      } else this.setRGB(e, t, n);
      return this;
    }
    setScalar(e) {
      return this.r = e, this.g = e, this.b = e, this;
    }
    setHex(e, t = At) {
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ze.toWorkingColorSpace(this, t), this;
    }
    setRGB(e, t, n, s = ze.workingColorSpace) {
      return this.r = e, this.g = t, this.b = n, ze.toWorkingColorSpace(this, s), this;
    }
    setHSL(e, t, n, s = ze.workingColorSpace) {
      if (e = Al(e, 1), t = Ct(t, 0, 1), n = Ct(n, 0, 1), t === 0) this.r = this.g = this.b = n;
      else {
        const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
        this.r = Zo(o, r, e + 1 / 3), this.g = Zo(o, r, e), this.b = Zo(o, r, e - 1 / 3);
      }
      return ze.toWorkingColorSpace(this, s), this;
    }
    setStyle(e, t = At) {
      function n(r) {
        r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
      }
      let s;
      if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
        let r;
        const o = s[1], a = s[2];
        switch (o) {
          case "rgb":
          case "rgba":
            if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
            if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
            break;
          case "hsl":
          case "hsla":
            if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + e);
        }
      } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
        const r = s[1], o = r.length;
        if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
        if (o === 6) return this.setHex(parseInt(r, 16), t);
        console.warn("THREE.Color: Invalid hex color " + e);
      } else if (e && e.length > 0) return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = At) {
      const n = ku[e.toLowerCase()];
      return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this;
    }
    copySRGBToLinear(e) {
      return this.r = hs(e.r), this.g = hs(e.g), this.b = hs(e.b), this;
    }
    copyLinearToSRGB(e) {
      return this.r = Bo(e.r), this.g = Bo(e.g), this.b = Bo(e.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = At) {
      return ze.fromWorkingColorSpace(Lt.copy(this), e), Math.round(Ct(Lt.r * 255, 0, 255)) * 65536 + Math.round(Ct(Lt.g * 255, 0, 255)) * 256 + Math.round(Ct(Lt.b * 255, 0, 255));
    }
    getHexString(e = At) {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = ze.workingColorSpace) {
      ze.fromWorkingColorSpace(Lt.copy(this), t);
      const n = Lt.r, s = Lt.g, r = Lt.b, o = Math.max(n, s, r), a = Math.min(n, s, r);
      let l, c;
      const h = (a + o) / 2;
      if (a === o) l = 0, c = 0;
      else {
        const u = o - a;
        switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
          case n:
            l = (s - r) / u + (s < r ? 6 : 0);
            break;
          case s:
            l = (r - n) / u + 2;
            break;
          case r:
            l = (n - s) / u + 4;
            break;
        }
        l /= 6;
      }
      return e.h = l, e.s = c, e.l = h, e;
    }
    getRGB(e, t = ze.workingColorSpace) {
      return ze.fromWorkingColorSpace(Lt.copy(this), t), e.r = Lt.r, e.g = Lt.g, e.b = Lt.b, e;
    }
    getStyle(e = At) {
      ze.fromWorkingColorSpace(Lt.copy(this), e);
      const t = Lt.r, n = Lt.g, s = Lt.b;
      return e !== At ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
    }
    offsetHSL(e, t, n) {
      return this.getHSL(Qn), this.setHSL(Qn.h + e, Qn.s + t, Qn.l + n);
    }
    add(e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this;
    }
    addColors(e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
    }
    addScalar(e) {
      return this.r += e, this.g += e, this.b += e, this;
    }
    sub(e) {
      return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
    }
    multiply(e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
    }
    multiplyScalar(e) {
      return this.r *= e, this.g *= e, this.b *= e, this;
    }
    lerp(e, t) {
      return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
    }
    lerpColors(e, t, n) {
      return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
    }
    lerpHSL(e, t) {
      this.getHSL(Qn), e.getHSL(Sr);
      const n = Ys(Qn.h, Sr.h, t), s = Ys(Qn.s, Sr.s, t), r = Ys(Qn.l, Sr.l, t);
      return this.setHSL(n, s, r), this;
    }
    setFromVector3(e) {
      return this.r = e.x, this.g = e.y, this.b = e.z, this;
    }
    applyMatrix3(e) {
      const t = this.r, n = this.g, s = this.b, r = e.elements;
      return this.r = r[0] * t + r[3] * n + r[6] * s, this.g = r[1] * t + r[4] * n + r[7] * s, this.b = r[2] * t + r[5] * n + r[8] * s, this;
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
    }
    fromBufferAttribute(e, t) {
      return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const Lt = new Ae();
  Ae.NAMES = ku;
  let Bf = 0;
  class xn extends mi {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", {
        value: Bf++
      }), this.uuid = un(), this.name = "", this.type = "Material", this.blending = as, this.side = Wn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Aa, this.blendDst = Ca, this.blendEquation = Ti, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ae(0, 0, 0), this.blendAlpha = 0, this.depthFunc = no, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = wc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Oi, this.stencilZFail = Oi, this.stencilZPass = Oi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0) for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      t && (e = {
        textures: {},
        images: {}
      });
      const n = {
        metadata: {
          version: 4.6,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== as && (n.blending = this.blending), this.side !== Wn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Aa && (n.blendSrc = this.blendSrc), this.blendDst !== Ca && (n.blendDst = this.blendDst), this.blendEquation !== Ti && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== no && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== wc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Oi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Oi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Oi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
      function s(r) {
        const o = [];
        for (const a in r) {
          const l = r[a];
          delete l.metadata, o.push(l);
        }
        return o;
      }
      if (t) {
        const r = s(e.textures), o = s(e.images);
        r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
      const t = e.clippingPlanes;
      let n = null;
      if (t !== null) {
        const s = t.length;
        n = new Array(s);
        for (let r = 0; r !== s; ++r) n[r] = t[r].clone();
      }
      return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    onBuild() {
      console.warn("Material: onBuild() has been removed.");
    }
  }
  class Vn extends xn {
    constructor(e) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ae(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new yn(), this.combine = vu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
    }
  }
  const ft = new R(), Er = new ye();
  class Rt {
    constructor(e, t, n = false) {
      if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = sl, this._updateRange = {
        offset: 0,
        count: -1
      }, this.updateRanges = [], this.gpuType = hn, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    get updateRange() {
      return cs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
    }
    setUsage(e) {
      return this.usage = e, this;
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({
        start: e,
        count: t
      });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
    }
    copyAt(e, t, n) {
      e *= this.itemSize, n *= t.itemSize;
      for (let s = 0, r = this.itemSize; s < r; s++) this.array[e + s] = t.array[n + s];
      return this;
    }
    copyArray(e) {
      return this.array.set(e), this;
    }
    applyMatrix3(e) {
      if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Er.fromBufferAttribute(this, t), Er.applyMatrix3(e), this.setXY(t, Er.x, Er.y);
      else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ft.fromBufferAttribute(this, t), ft.applyMatrix3(e), this.setXYZ(t, ft.x, ft.y, ft.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++) ft.fromBufferAttribute(this, t), ft.applyMatrix4(e), this.setXYZ(t, ft.x, ft.y, ft.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) ft.fromBufferAttribute(this, t), ft.applyNormalMatrix(e), this.setXYZ(t, ft.x, ft.y, ft.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) ft.fromBufferAttribute(this, t), ft.transformDirection(e), this.setXYZ(t, ft.x, ft.y, ft.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return this.normalized && (n = cn(n, this.array)), n;
    }
    setComponent(e, t, n) {
      return this.normalized && (n = Je(n, this.array)), this.array[e * this.itemSize + t] = n, this;
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    setX(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize] = t, this;
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    setY(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    setZ(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    setW(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
    }
    setXY(e, t, n) {
      return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, s) {
      return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), s = Je(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
    }
    setXYZW(e, t, n, s, r) {
      return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), s = Je(s, this.array), r = Je(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = r, this;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return this.name !== "" && (e.name = this.name), this.usage !== sl && (e.usage = this.usage), e;
    }
  }
  class Vu extends Rt {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class zu extends Rt {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  class Hn extends Rt {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let kf = 0;
  const Jt = new Le(), Jo = new ot(), ji = new R(), Kt = new Kn(), Os = new Kn(), xt = new R();
  class dn extends mi {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", {
        value: kf++
      }), this.uuid = un(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return Array.isArray(e) ? this.index = new (Uu(e) ? zu : Vu)(e, 1) : this.index = e, this;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return this.attributes[e] = t, this;
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this;
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({
        start: e,
        count: t,
        materialIndex: n
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      this.drawRange.start = e, this.drawRange.count = t;
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
      const n = this.attributes.normal;
      if (n !== void 0) {
        const r = new Ne().getNormalMatrix(e);
        n.applyNormalMatrix(r), n.needsUpdate = true;
      }
      const s = this.attributes.tangent;
      return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
    }
    applyQuaternion(e) {
      return Jt.makeRotationFromQuaternion(e), this.applyMatrix4(Jt), this;
    }
    rotateX(e) {
      return Jt.makeRotationX(e), this.applyMatrix4(Jt), this;
    }
    rotateY(e) {
      return Jt.makeRotationY(e), this.applyMatrix4(Jt), this;
    }
    rotateZ(e) {
      return Jt.makeRotationZ(e), this.applyMatrix4(Jt), this;
    }
    translate(e, t, n) {
      return Jt.makeTranslation(e, t, n), this.applyMatrix4(Jt), this;
    }
    scale(e, t, n) {
      return Jt.makeScale(e, t, n), this.applyMatrix4(Jt), this;
    }
    lookAt(e) {
      return Jo.lookAt(e), Jo.updateMatrix(), this.applyMatrix4(Jo.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(ji).negate(), this.translate(ji.x, ji.y, ji.z), this;
    }
    setFromPoints(e) {
      const t = [];
      for (let n = 0, s = e.length; n < s; n++) {
        const r = e[n];
        t.push(r.x, r.y, r.z || 0);
      }
      return this.setAttribute("position", new Hn(t, 3)), this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Kn());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0));
        return;
      }
      if (e !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, s = t.length; n < s; n++) {
          const r = t[n];
          Kt.setFromBufferAttribute(r), this.morphTargetsRelative ? (xt.addVectors(this.boundingBox.min, Kt.min), this.boundingBox.expandByPoint(xt), xt.addVectors(this.boundingBox.max, Kt.max), this.boundingBox.expandByPoint(xt)) : (this.boundingBox.expandByPoint(Kt.min), this.boundingBox.expandByPoint(Kt.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Sn());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
        return;
      }
      if (e) {
        const n = this.boundingSphere.center;
        if (Kt.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          Os.setFromBufferAttribute(a), this.morphTargetsRelative ? (xt.addVectors(Kt.min, Os.min), Kt.expandByPoint(xt), xt.addVectors(Kt.max, Os.max), Kt.expandByPoint(xt)) : (Kt.expandByPoint(Os.min), Kt.expandByPoint(Os.max));
        }
        Kt.getCenter(n);
        let s = 0;
        for (let r = 0, o = e.count; r < o; r++) xt.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(xt));
        if (t) for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++) xt.fromBufferAttribute(a, c), l && (ji.fromBufferAttribute(e, c), xt.add(ji)), s = Math.max(s, n.distanceToSquared(xt));
        }
        this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const e = this.index, t = this.attributes;
      if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const n = t.position, s = t.normal, r = t.uv;
      this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Rt(new Float32Array(4 * n.count), 4));
      const o = this.getAttribute("tangent"), a = [], l = [];
      for (let F = 0; F < n.count; F++) a[F] = new R(), l[F] = new R();
      const c = new R(), h = new R(), u = new R(), d = new ye(), p = new ye(), _ = new ye(), g = new R(), m = new R();
      function f(F, S, y) {
        c.fromBufferAttribute(n, F), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, y), d.fromBufferAttribute(r, F), p.fromBufferAttribute(r, S), _.fromBufferAttribute(r, y), h.sub(c), u.sub(c), p.sub(d), _.sub(d);
        const L = 1 / (p.x * _.y - _.x * p.y);
        isFinite(L) && (g.copy(h).multiplyScalar(_.y).addScaledVector(u, -p.y).multiplyScalar(L), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -_.x).multiplyScalar(L), a[F].add(g), a[S].add(g), a[y].add(g), l[F].add(m), l[S].add(m), l[y].add(m));
      }
      let M = this.groups;
      M.length === 0 && (M = [
        {
          start: 0,
          count: e.count
        }
      ]);
      for (let F = 0, S = M.length; F < S; ++F) {
        const y = M[F], L = y.start, X = y.count;
        for (let k = L, H = L + X; k < H; k += 3) f(e.getX(k + 0), e.getX(k + 1), e.getX(k + 2));
      }
      const b = new R(), E = new R(), N = new R(), A = new R();
      function C(F) {
        N.fromBufferAttribute(s, F), A.copy(N);
        const S = a[F];
        b.copy(S), b.sub(N.multiplyScalar(N.dot(S))).normalize(), E.crossVectors(A, S);
        const L = E.dot(l[F]) < 0 ? -1 : 1;
        o.setXYZW(F, b.x, b.y, b.z, L);
      }
      for (let F = 0, S = M.length; F < S; ++F) {
        const y = M[F], L = y.start, X = y.count;
        for (let k = L, H = L + X; k < H; k += 3) C(e.getX(k + 0)), C(e.getX(k + 1)), C(e.getX(k + 2));
      }
    }
    computeVertexNormals() {
      const e = this.index, t = this.getAttribute("position");
      if (t !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0) n = new Rt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
        else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
        const s = new R(), r = new R(), o = new R(), a = new R(), l = new R(), c = new R(), h = new R(), u = new R();
        if (e) for (let d = 0, p = e.count; d < p; d += 3) {
          const _ = e.getX(d + 0), g = e.getX(d + 1), m = e.getX(d + 2);
          s.fromBufferAttribute(t, _), r.fromBufferAttribute(t, g), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(s, r), h.cross(u), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
        else for (let d = 0, p = t.count; d < p; d += 3) s.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(s, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
        this.normalizeNormals(), n.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++) xt.fromBufferAttribute(e, t), xt.normalize(), e.setXYZ(t, xt.x, xt.y, xt.z);
    }
    toNonIndexed() {
      function e(a, l) {
        const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h);
        let p = 0, _ = 0;
        for (let g = 0, m = l.length; g < m; g++) {
          a.isInterleavedBufferAttribute ? p = l[g] * a.data.stride + a.offset : p = l[g] * h;
          for (let f = 0; f < h; f++) d[_++] = c[p++];
        }
        return new Rt(d, h, u);
      }
      if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const t = new dn(), n = this.index.array, s = this.attributes;
      for (const a in s) {
        const l = s[a], c = e(l, n);
        t.setAttribute(a, c);
      }
      const r = this.morphAttributes;
      for (const a in r) {
        const l = [], c = r[a];
        for (let h = 0, u = c.length; h < u; h++) {
          const d = c[h], p = e(d, n);
          l.push(p);
        }
        t.morphAttributes[a] = l;
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const o = this.groups;
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        t.addGroup(c.start, c.count, c.materialIndex);
      }
      return t;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
        const l = this.parameters;
        for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
        return e;
      }
      e.data = {
        attributes: {}
      };
      const t = this.index;
      t !== null && (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      });
      const n = this.attributes;
      for (const l in n) {
        const c = n[l];
        e.data.attributes[l] = c.toJSON(e.data);
      }
      const s = {};
      let r = false;
      for (const l in this.morphAttributes) {
        const c = this.morphAttributes[l], h = [];
        for (let u = 0, d = c.length; u < d; u++) {
          const p = c[u];
          h.push(p.toJSON(e.data));
        }
        h.length > 0 && (s[l] = h, r = true);
      }
      r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
      const o = this.groups;
      o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
      const a = this.boundingSphere;
      return a !== null && (e.data.boundingSphere = {
        center: a.center.toArray(),
        radius: a.radius
      }), e;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const t = {};
      this.name = e.name;
      const n = e.index;
      n !== null && this.setIndex(n.clone(t));
      const s = e.attributes;
      for (const c in s) {
        const h = s[c];
        this.setAttribute(c, h.clone(t));
      }
      const r = e.morphAttributes;
      for (const c in r) {
        const h = [], u = r[c];
        for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(t));
        this.morphAttributes[c] = h;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const o = e.groups;
      for (let c = 0, h = o.length; c < h; c++) {
        const u = o[c];
        this.addGroup(u.start, u.count, u.materialIndex);
      }
      const a = e.boundingBox;
      a !== null && (this.boundingBox = a.clone());
      const l = e.boundingSphere;
      return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  const Vc = new Le(), xi = new or(), wr = new Sn(), zc = new R(), Ki = new R(), qi = new R(), Yi = new R(), Qo = new R(), Tr = new R(), Ar = new ye(), Cr = new ye(), Rr = new ye(), Hc = new R(), Gc = new R(), Wc = new R(), Pr = new R(), Lr = new R();
  class Vt extends ot {
    constructor(e = new dn(), t = new Vn()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const s = t[n[0]];
        if (s !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, o = s.length; r < o; r++) {
            const a = s[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
          }
        }
      }
    }
    getVertexPosition(e, t) {
      const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
      t.fromBufferAttribute(s, e);
      const a = this.morphTargetInfluences;
      if (r && a) {
        Tr.set(0, 0, 0);
        for (let l = 0, c = r.length; l < c; l++) {
          const h = a[l], u = r[l];
          h !== 0 && (Qo.fromBufferAttribute(u, e), o ? Tr.addScaledVector(Qo, h) : Tr.addScaledVector(Qo.sub(t), h));
        }
        t.add(Tr);
      }
      return t;
    }
    raycast(e, t) {
      const n = this.geometry, s = this.material, r = this.matrixWorld;
      s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), wr.copy(n.boundingSphere), wr.applyMatrix4(r), xi.copy(e.ray).recast(e.near), !(wr.containsPoint(xi.origin) === false && (xi.intersectSphere(wr, zc) === null || xi.origin.distanceToSquared(zc) > (e.far - e.near) ** 2)) && (Vc.copy(r).invert(), xi.copy(e.ray).applyMatrix4(Vc), !(n.boundingBox !== null && xi.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, xi)));
    }
    _computeIntersections(e, t, n) {
      let s;
      const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange;
      if (a !== null) if (Array.isArray(o)) for (let _ = 0, g = d.length; _ < g; _++) {
        const m = d[_], f = o[m.materialIndex], M = Math.max(m.start, p.start), b = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count));
        for (let E = M, N = b; E < N; E += 3) {
          const A = a.getX(E), C = a.getX(E + 1), F = a.getX(E + 2);
          s = Ir(this, f, e, n, c, h, u, A, C, F), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = m.materialIndex, t.push(s));
        }
      }
      else {
        const _ = Math.max(0, p.start), g = Math.min(a.count, p.start + p.count);
        for (let m = _, f = g; m < f; m += 3) {
          const M = a.getX(m), b = a.getX(m + 1), E = a.getX(m + 2);
          s = Ir(this, o, e, n, c, h, u, M, b, E), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
        }
      }
      else if (l !== void 0) if (Array.isArray(o)) for (let _ = 0, g = d.length; _ < g; _++) {
        const m = d[_], f = o[m.materialIndex], M = Math.max(m.start, p.start), b = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
        for (let E = M, N = b; E < N; E += 3) {
          const A = E, C = E + 1, F = E + 2;
          s = Ir(this, f, e, n, c, h, u, A, C, F), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = m.materialIndex, t.push(s));
        }
      }
      else {
        const _ = Math.max(0, p.start), g = Math.min(l.count, p.start + p.count);
        for (let m = _, f = g; m < f; m += 3) {
          const M = m, b = m + 1, E = m + 2;
          s = Ir(this, o, e, n, c, h, u, M, b, E), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
        }
      }
    }
  }
  function Vf(i, e, t, n, s, r, o, a) {
    let l;
    if (e.side === Ht ? l = n.intersectTriangle(o, r, s, true, a) : l = n.intersectTriangle(s, r, o, e.side === Wn, a), l === null) return null;
    Lr.copy(a), Lr.applyMatrix4(i.matrixWorld);
    const c = t.ray.origin.distanceTo(Lr);
    return c < t.near || c > t.far ? null : {
      distance: c,
      point: Lr.clone(),
      object: i
    };
  }
  function Ir(i, e, t, n, s, r, o, a, l, c) {
    i.getVertexPosition(a, Ki), i.getVertexPosition(l, qi), i.getVertexPosition(c, Yi);
    const h = Vf(i, e, t, n, Ki, qi, Yi, Pr);
    if (h) {
      s && (Ar.fromBufferAttribute(s, a), Cr.fromBufferAttribute(s, l), Rr.fromBufferAttribute(s, c), h.uv = gn.getInterpolation(Pr, Ki, qi, Yi, Ar, Cr, Rr, new ye())), r && (Ar.fromBufferAttribute(r, a), Cr.fromBufferAttribute(r, l), Rr.fromBufferAttribute(r, c), h.uv1 = gn.getInterpolation(Pr, Ki, qi, Yi, Ar, Cr, Rr, new ye())), o && (Hc.fromBufferAttribute(o, a), Gc.fromBufferAttribute(o, l), Wc.fromBufferAttribute(o, c), h.normal = gn.getInterpolation(Pr, Ki, qi, Yi, Hc, Gc, Wc, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
      const u = {
        a,
        b: l,
        c,
        normal: new R(),
        materialIndex: 0
      };
      gn.getNormal(Ki, qi, Yi, u.normal), h.face = u;
    }
    return h;
  }
  class Ts extends dn {
    constructor(e = 1, t = 1, n = 1, s = 1, r = 1, o = 1) {
      super(), this.type = "BoxGeometry", this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: s,
        heightSegments: r,
        depthSegments: o
      };
      const a = this;
      s = Math.floor(s), r = Math.floor(r), o = Math.floor(o);
      const l = [], c = [], h = [], u = [];
      let d = 0, p = 0;
      _("z", "y", "x", -1, -1, n, t, e, o, r, 0), _("z", "y", "x", 1, -1, n, t, -e, o, r, 1), _("x", "z", "y", 1, 1, e, n, t, s, o, 2), _("x", "z", "y", 1, -1, e, n, -t, s, o, 3), _("x", "y", "z", 1, -1, e, t, n, s, r, 4), _("x", "y", "z", -1, -1, e, t, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new Hn(c, 3)), this.setAttribute("normal", new Hn(h, 3)), this.setAttribute("uv", new Hn(u, 2));
      function _(g, m, f, M, b, E, N, A, C, F, S) {
        const y = E / C, L = N / F, X = E / 2, k = N / 2, H = A / 2, $ = C + 1, z = F + 1;
        let Z = 0, V = 0;
        const oe = new R();
        for (let he = 0; he < z; he++) {
          const me = he * L - k;
          for (let Be = 0; Be < $; Be++) {
            const Qe = Be * y - X;
            oe[g] = Qe * M, oe[m] = me * b, oe[f] = H, c.push(oe.x, oe.y, oe.z), oe[g] = 0, oe[m] = 0, oe[f] = A > 0 ? 1 : -1, h.push(oe.x, oe.y, oe.z), u.push(Be / C), u.push(1 - he / F), Z += 1;
          }
        }
        for (let he = 0; he < F; he++) for (let me = 0; me < C; me++) {
          const Be = d + me + $ * he, Qe = d + me + $ * (he + 1), G = d + (me + 1) + $ * (he + 1), J = d + (me + 1) + $ * he;
          l.push(Be, Qe, J), l.push(Qe, G, J), V += 6;
        }
        a.addGroup(p, V, S), p += V, d += Z;
      }
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new Ts(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
    }
  }
  function ys(i) {
    const e = {};
    for (const t in i) {
      e[t] = {};
      for (const n in i[t]) {
        const s = i[t][n];
        s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
      }
    }
    return e;
  }
  function Nt(i) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
      const n = ys(i[t]);
      for (const s in n) e[s] = n[s];
    }
    return e;
  }
  function zf(i) {
    const e = [];
    for (let t = 0; t < i.length; t++) e.push(i[t].clone());
    return e;
  }
  function Hu(i) {
    const e = i.getRenderTarget();
    return e === null ? i.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : ze.workingColorSpace;
  }
  const Hf = {
    clone: ys,
    merge: Nt
  };
  var Gf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Wf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
  class pi extends xn {
    constructor(e) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Gf, this.fragmentShader = Wf, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = {
        clipCullDistance: false,
        multiDraw: false
      }, this.defaultAttributeValues = {
        color: [
          1,
          1,
          1
        ],
        uv: [
          0,
          0
        ],
        uv1: [
          0,
          0
        ]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ys(e.uniforms), this.uniformsGroups = zf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      t.glslVersion = this.glslVersion, t.uniforms = {};
      for (const s in this.uniforms) {
        const o = this.uniforms[s].value;
        o && o.isTexture ? t.uniforms[s] = {
          type: "t",
          value: o.toJSON(e).uuid
        } : o && o.isColor ? t.uniforms[s] = {
          type: "c",
          value: o.getHex()
        } : o && o.isVector2 ? t.uniforms[s] = {
          type: "v2",
          value: o.toArray()
        } : o && o.isVector3 ? t.uniforms[s] = {
          type: "v3",
          value: o.toArray()
        } : o && o.isVector4 ? t.uniforms[s] = {
          type: "v4",
          value: o.toArray()
        } : o && o.isMatrix3 ? t.uniforms[s] = {
          type: "m3",
          value: o.toArray()
        } : o && o.isMatrix4 ? t.uniforms[s] = {
          type: "m4",
          value: o.toArray()
        } : t.uniforms[s] = {
          value: o
        };
      }
      Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
      const n = {};
      for (const s in this.extensions) this.extensions[s] === true && (n[s] = true);
      return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
  }
  let Gu = class extends ot {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Le(), this.projectionMatrix = new Le(), this.projectionMatrixInverse = new Le(), this.coordinateSystem = kn;
    }
    copy(e, t) {
      return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
    }
    getWorldDirection(e) {
      return super.getWorldDirection(e).negate();
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
      super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  const ei = new R(), Xc = new ye(), jc = new ye();
  class Ut extends Gu {
    constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e, t) {
      return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
    }
    setFocalLength(e) {
      const t = 0.5 * this.getFilmHeight() / e;
      this.fov = xs * 2 * Math.atan(t), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const e = Math.tan(qs * 0.5 * this.fov);
      return 0.5 * this.getFilmHeight() / e;
    }
    getEffectiveFOV() {
      return xs * 2 * Math.atan(Math.tan(qs * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(e, t, n) {
      ei.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(ei.x, ei.y).multiplyScalar(-e / ei.z), ei.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(ei.x, ei.y).multiplyScalar(-e / ei.z);
    }
    getViewSize(e, t) {
      return this.getViewBounds(e, Xc, jc), t.subVectors(jc, Xc);
    }
    setViewOffset(e, t, n, s, r, o) {
      this.aspect = e / t, this.view === null && (this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = this.near;
      let t = e * Math.tan(qs * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, r = -0.5 * s;
      const o = this.view;
      if (this.view !== null && this.view.enabled) {
        const l = o.fullWidth, c = o.fullHeight;
        r += o.offsetX * s / l, t -= o.offsetY * n / c, s *= o.width / l, n *= o.height / c;
      }
      const a = this.filmOffset;
      a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
    }
  }
  const $i = -90, Zi = 1;
  class Xf extends ot {
    constructor(e, t, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const s = new Ut($i, Zi, e, t);
      s.layers = this.layers, this.add(s);
      const r = new Ut($i, Zi, e, t);
      r.layers = this.layers, this.add(r);
      const o = new Ut($i, Zi, e, t);
      o.layers = this.layers, this.add(o);
      const a = new Ut($i, Zi, e, t);
      a.layers = this.layers, this.add(a);
      const l = new Ut($i, Zi, e, t);
      l.layers = this.layers, this.add(l);
      const c = new Ut($i, Zi, e, t);
      c.layers = this.layers, this.add(c);
    }
    updateCoordinateSystem() {
      const e = this.coordinateSystem, t = this.children.concat(), [n, s, r, o, a, l] = t;
      for (const c of t) this.remove(c);
      if (e === kn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
      else if (e === lo) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
      else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
      for (const c of t) this.add(c), c.updateMatrixWorld();
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: s } = this;
      this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
      const [r, o, a, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), _ = e.xr.enabled;
      e.xr.enabled = false;
      const g = n.texture.generateMipmaps;
      n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, s), e.render(t, r), e.setRenderTarget(n, 1, s), e.render(t, o), e.setRenderTarget(n, 2, s), e.render(t, a), e.setRenderTarget(n, 3, s), e.render(t, l), e.setRenderTarget(n, 4, s), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, s), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = _, n.texture.needsPMREMUpdate = true;
    }
  }
  class Wu extends bt {
    constructor(e, t, n, s, r, o, a, l, c, h) {
      e = e !== void 0 ? e : [], t = t !== void 0 ? t : fs, super(e, t, n, s, r, o, a, l, c, h), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  }
  class jf extends Pi {
    constructor(e = 1, t = {}) {
      super(e, e, t), this.isWebGLCubeRenderTarget = true;
      const n = {
        width: e,
        height: e,
        depth: 1
      }, s = [
        n,
        n,
        n,
        n,
        n,
        n
      ];
      this.texture = new Wu(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : qt;
    }
    fromEquirectangularTexture(e, t) {
      this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
      const n = {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      }, s = new Ts(5, 5, 5), r = new pi({
        name: "CubemapFromEquirect",
        uniforms: ys(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ht,
        blending: hi
      });
      r.uniforms.tEquirect.value = t;
      const o = new Vt(s, r), a = t.minFilter;
      return t.minFilter === Bn && (t.minFilter = qt), new Xf(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
    }
    clear(e, t, n, s) {
      const r = e.getRenderTarget();
      for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, s);
      e.setRenderTarget(r);
    }
  }
  const ea = new R(), Kf = new R(), qf = new Ne();
  class ri {
    constructor(e = new R(1, 0, 0), t = 0) {
      this.isPlane = true, this.normal = e, this.constant = t;
    }
    set(e, t) {
      return this.normal.copy(e), this.constant = t, this;
    }
    setComponents(e, t, n, s) {
      return this.normal.set(e, t, n), this.constant = s, this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
    }
    setFromCoplanarPoints(e, t, n) {
      const s = ea.subVectors(n, t).cross(Kf.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(s, e), this;
    }
    copy(e) {
      return this.normal.copy(e.normal), this.constant = e.constant, this;
    }
    normalize() {
      const e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), this.constant *= e, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t) {
      const n = e.delta(ea), s = this.normal.dot(n);
      if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
      const r = -(e.start.dot(this.normal) + this.constant) / s;
      return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
    }
    intersectsLine(e) {
      const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
      return t < 0 && n > 0 || n < 0 && t > 0;
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      const n = t || qf.getNormalMatrix(e), s = this.coplanarPoint(ea).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -s.dot(r), this;
    }
    translate(e) {
      return this.constant -= e.dot(this.normal), this;
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const yi = new Sn(), Dr = new R();
  class Cl {
    constructor(e = new ri(), t = new ri(), n = new ri(), s = new ri(), r = new ri(), o = new ri()) {
      this.planes = [
        e,
        t,
        n,
        s,
        r,
        o
      ];
    }
    set(e, t, n, s, r, o) {
      const a = this.planes;
      return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(s), a[4].copy(r), a[5].copy(o), this;
    }
    copy(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e, t = kn) {
      const n = this.planes, s = e.elements, r = s[0], o = s[1], a = s[2], l = s[3], c = s[4], h = s[5], u = s[6], d = s[7], p = s[8], _ = s[9], g = s[10], m = s[11], f = s[12], M = s[13], b = s[14], E = s[15];
      if (n[0].setComponents(l - r, d - c, m - p, E - f).normalize(), n[1].setComponents(l + r, d + c, m + p, E + f).normalize(), n[2].setComponents(l + o, d + h, m + _, E + M).normalize(), n[3].setComponents(l - o, d - h, m - _, E - M).normalize(), n[4].setComponents(l - a, d - u, m - g, E - b).normalize(), t === kn) n[5].setComponents(l + a, d + u, m + g, E + b).normalize();
      else if (t === lo) n[5].setComponents(a, u, g, b).normalize();
      else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
      return this;
    }
    intersectsObject(e) {
      if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
      else {
        const t = e.geometry;
        t.boundingSphere === null && t.computeBoundingSphere(), yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
      }
      return this.intersectsSphere(yi);
    }
    intersectsSprite(e) {
      return yi.center.set(0, 0, 0), yi.radius = 0.7071067811865476, yi.applyMatrix4(e.matrixWorld), this.intersectsSphere(yi);
    }
    intersectsSphere(e) {
      const t = this.planes, n = e.center, s = -e.radius;
      for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < s) return false;
      return true;
    }
    intersectsBox(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) {
        const s = t[n];
        if (Dr.x = s.normal.x > 0 ? e.max.x : e.min.x, Dr.y = s.normal.y > 0 ? e.max.y : e.min.y, Dr.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Dr) < 0) return false;
      }
      return true;
    }
    containsPoint(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function Xu() {
    let i = null, e = false, t = null, n = null;
    function s(r, o) {
      t(r, o), n = i.requestAnimationFrame(s);
    }
    return {
      start: function() {
        e !== true && t !== null && (n = i.requestAnimationFrame(s), e = true);
      },
      stop: function() {
        i.cancelAnimationFrame(n), e = false;
      },
      setAnimationLoop: function(r) {
        t = r;
      },
      setContext: function(r) {
        i = r;
      }
    };
  }
  function Yf(i) {
    const e = /* @__PURE__ */ new WeakMap();
    function t(a, l) {
      const c = a.array, h = a.usage, u = c.byteLength, d = i.createBuffer();
      i.bindBuffer(l, d), i.bufferData(l, c, h), a.onUploadCallback();
      let p;
      if (c instanceof Float32Array) p = i.FLOAT;
      else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
      else if (c instanceof Int16Array) p = i.SHORT;
      else if (c instanceof Uint32Array) p = i.UNSIGNED_INT;
      else if (c instanceof Int32Array) p = i.INT;
      else if (c instanceof Int8Array) p = i.BYTE;
      else if (c instanceof Uint8Array) p = i.UNSIGNED_BYTE;
      else if (c instanceof Uint8ClampedArray) p = i.UNSIGNED_BYTE;
      else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
      return {
        buffer: d,
        type: p,
        bytesPerElement: c.BYTES_PER_ELEMENT,
        version: a.version,
        size: u
      };
    }
    function n(a, l, c) {
      const h = l.array, u = l._updateRange, d = l.updateRanges;
      if (i.bindBuffer(c, a), u.count === -1 && d.length === 0 && i.bufferSubData(c, 0, h), d.length !== 0) {
        for (let p = 0, _ = d.length; p < _; p++) {
          const g = d[p];
          i.bufferSubData(c, g.start * h.BYTES_PER_ELEMENT, h, g.start, g.count);
        }
        l.clearUpdateRanges();
      }
      u.count !== -1 && (i.bufferSubData(c, u.offset * h.BYTES_PER_ELEMENT, h, u.offset, u.count), u.count = -1), l.onUploadCallback();
    }
    function s(a) {
      return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
    }
    function r(a) {
      a.isInterleavedBufferAttribute && (a = a.data);
      const l = e.get(a);
      l && (i.deleteBuffer(l.buffer), e.delete(a));
    }
    function o(a, l) {
      if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
        const h = e.get(a);
        (!h || h.version < a.version) && e.set(a, {
          buffer: a.buffer,
          type: a.type,
          bytesPerElement: a.elementSize,
          version: a.version
        });
        return;
      }
      const c = e.get(a);
      if (c === void 0) e.set(a, t(a, l));
      else if (c.version < a.version) {
        if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        n(c.buffer, a, l), c.version = a.version;
      }
    }
    return {
      get: s,
      remove: r,
      update: o
    };
  }
  class xo extends dn {
    constructor(e = 1, t = 1, n = 1, s = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: s
      };
      const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(s), c = a + 1, h = l + 1, u = e / a, d = t / l, p = [], _ = [], g = [], m = [];
      for (let f = 0; f < h; f++) {
        const M = f * d - o;
        for (let b = 0; b < c; b++) {
          const E = b * u - r;
          _.push(E, -M, 0), g.push(0, 0, 1), m.push(b / a), m.push(1 - f / l);
        }
      }
      for (let f = 0; f < l; f++) for (let M = 0; M < a; M++) {
        const b = M + c * f, E = M + c * (f + 1), N = M + 1 + c * (f + 1), A = M + 1 + c * f;
        p.push(b, E, A), p.push(E, N, A);
      }
      this.setIndex(p), this.setAttribute("position", new Hn(_, 3)), this.setAttribute("normal", new Hn(g, 3)), this.setAttribute("uv", new Hn(m, 2));
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new xo(e.width, e.height, e.widthSegments, e.heightSegments);
    }
  }
  var $f = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Zf = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Jf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Qf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, em = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, tm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, nm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, im = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, sm = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, rm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, om = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, am = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, lm = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, cm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, hm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, um = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, dm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, pm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, fm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, mm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, _m = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, gm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, vm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, xm = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ym = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, bm = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Mm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Sm = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Em = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, wm = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Tm = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Am = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Cm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Rm = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Pm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Lm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Im = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Dm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Nm = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Um = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Om = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Fm = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Bm = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, km = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Vm = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, zm = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Hm = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Gm = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Wm = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Xm = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, jm = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Km = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, qm = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Ym = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, $m = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Zm = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Jm = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Qm = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, e_ = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, t_ = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, n_ = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, i_ = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, s_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, r_ = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, o_ = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, a_ = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, l_ = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, c_ = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, h_ = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, u_ = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, d_ = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, p_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, f_ = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, m_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, __ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, g_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, v_ = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, x_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, y_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, b_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, M_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, S_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, E_ = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, w_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, T_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, A_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, C_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, R_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, P_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, L_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, I_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, D_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, N_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, U_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, O_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, F_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, B_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, k_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, V_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, z_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, H_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, G_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, W_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, X_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, j_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, K_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, q_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
  const Y_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, $_ = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Z_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, J_ = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Q_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, eg = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, tg = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, ng = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, ig = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, sg = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, rg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, og = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ag = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, lg = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, cg = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, hg = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ug = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, dg = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pg = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, fg = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, mg = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, _g = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, gg = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vg = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xg = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, yg = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bg = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Mg = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Sg = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Eg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, wg = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Tg = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ag = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Cg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, De = {
    alphahash_fragment: $f,
    alphahash_pars_fragment: Zf,
    alphamap_fragment: Jf,
    alphamap_pars_fragment: Qf,
    alphatest_fragment: em,
    alphatest_pars_fragment: tm,
    aomap_fragment: nm,
    aomap_pars_fragment: im,
    batching_pars_vertex: sm,
    batching_vertex: rm,
    begin_vertex: om,
    beginnormal_vertex: am,
    bsdfs: lm,
    iridescence_fragment: cm,
    bumpmap_pars_fragment: hm,
    clipping_planes_fragment: um,
    clipping_planes_pars_fragment: dm,
    clipping_planes_pars_vertex: pm,
    clipping_planes_vertex: fm,
    color_fragment: mm,
    color_pars_fragment: _m,
    color_pars_vertex: gm,
    color_vertex: vm,
    common: xm,
    cube_uv_reflection_fragment: ym,
    defaultnormal_vertex: bm,
    displacementmap_pars_vertex: Mm,
    displacementmap_vertex: Sm,
    emissivemap_fragment: Em,
    emissivemap_pars_fragment: wm,
    colorspace_fragment: Tm,
    colorspace_pars_fragment: Am,
    envmap_fragment: Cm,
    envmap_common_pars_fragment: Rm,
    envmap_pars_fragment: Pm,
    envmap_pars_vertex: Lm,
    envmap_physical_pars_fragment: Hm,
    envmap_vertex: Im,
    fog_vertex: Dm,
    fog_pars_vertex: Nm,
    fog_fragment: Um,
    fog_pars_fragment: Om,
    gradientmap_pars_fragment: Fm,
    lightmap_pars_fragment: Bm,
    lights_lambert_fragment: km,
    lights_lambert_pars_fragment: Vm,
    lights_pars_begin: zm,
    lights_toon_fragment: Gm,
    lights_toon_pars_fragment: Wm,
    lights_phong_fragment: Xm,
    lights_phong_pars_fragment: jm,
    lights_physical_fragment: Km,
    lights_physical_pars_fragment: qm,
    lights_fragment_begin: Ym,
    lights_fragment_maps: $m,
    lights_fragment_end: Zm,
    logdepthbuf_fragment: Jm,
    logdepthbuf_pars_fragment: Qm,
    logdepthbuf_pars_vertex: e_,
    logdepthbuf_vertex: t_,
    map_fragment: n_,
    map_pars_fragment: i_,
    map_particle_fragment: s_,
    map_particle_pars_fragment: r_,
    metalnessmap_fragment: o_,
    metalnessmap_pars_fragment: a_,
    morphinstance_vertex: l_,
    morphcolor_vertex: c_,
    morphnormal_vertex: h_,
    morphtarget_pars_vertex: u_,
    morphtarget_vertex: d_,
    normal_fragment_begin: p_,
    normal_fragment_maps: f_,
    normal_pars_fragment: m_,
    normal_pars_vertex: __,
    normal_vertex: g_,
    normalmap_pars_fragment: v_,
    clearcoat_normal_fragment_begin: x_,
    clearcoat_normal_fragment_maps: y_,
    clearcoat_pars_fragment: b_,
    iridescence_pars_fragment: M_,
    opaque_fragment: S_,
    packing: E_,
    premultiplied_alpha_fragment: w_,
    project_vertex: T_,
    dithering_fragment: A_,
    dithering_pars_fragment: C_,
    roughnessmap_fragment: R_,
    roughnessmap_pars_fragment: P_,
    shadowmap_pars_fragment: L_,
    shadowmap_pars_vertex: I_,
    shadowmap_vertex: D_,
    shadowmask_pars_fragment: N_,
    skinbase_vertex: U_,
    skinning_pars_vertex: O_,
    skinning_vertex: F_,
    skinnormal_vertex: B_,
    specularmap_fragment: k_,
    specularmap_pars_fragment: V_,
    tonemapping_fragment: z_,
    tonemapping_pars_fragment: H_,
    transmission_fragment: G_,
    transmission_pars_fragment: W_,
    uv_pars_fragment: X_,
    uv_pars_vertex: j_,
    uv_vertex: K_,
    worldpos_vertex: q_,
    background_vert: Y_,
    background_frag: $_,
    backgroundCube_vert: Z_,
    backgroundCube_frag: J_,
    cube_vert: Q_,
    cube_frag: eg,
    depth_vert: tg,
    depth_frag: ng,
    distanceRGBA_vert: ig,
    distanceRGBA_frag: sg,
    equirect_vert: rg,
    equirect_frag: og,
    linedashed_vert: ag,
    linedashed_frag: lg,
    meshbasic_vert: cg,
    meshbasic_frag: hg,
    meshlambert_vert: ug,
    meshlambert_frag: dg,
    meshmatcap_vert: pg,
    meshmatcap_frag: fg,
    meshnormal_vert: mg,
    meshnormal_frag: _g,
    meshphong_vert: gg,
    meshphong_frag: vg,
    meshphysical_vert: xg,
    meshphysical_frag: yg,
    meshtoon_vert: bg,
    meshtoon_frag: Mg,
    points_vert: Sg,
    points_frag: Eg,
    shadow_vert: wg,
    shadow_frag: Tg,
    sprite_vert: Ag,
    sprite_frag: Cg
  }, ie = {
    common: {
      diffuse: {
        value: new Ae(16777215)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      mapTransform: {
        value: new Ne()
      },
      alphaMap: {
        value: null
      },
      alphaMapTransform: {
        value: new Ne()
      },
      alphaTest: {
        value: 0
      }
    },
    specularmap: {
      specularMap: {
        value: null
      },
      specularMapTransform: {
        value: new Ne()
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      envMapRotation: {
        value: new Ne()
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      ior: {
        value: 1.5
      },
      refractionRatio: {
        value: 0.98
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      },
      aoMapTransform: {
        value: new Ne()
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      },
      lightMapTransform: {
        value: new Ne()
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpMapTransform: {
        value: new Ne()
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalMapTransform: {
        value: new Ne()
      },
      normalScale: {
        value: new ye(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementMapTransform: {
        value: new Ne()
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      },
      emissiveMapTransform: {
        value: new Ne()
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      },
      metalnessMapTransform: {
        value: new Ne()
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      },
      roughnessMapTransform: {
        value: new Ne()
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new Ae(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotLightMap: {
        value: []
      },
      spotShadowMap: {
        value: []
      },
      spotLightMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new Ae(16777215)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      alphaMapTransform: {
        value: new Ne()
      },
      alphaTest: {
        value: 0
      },
      uvTransform: {
        value: new Ne()
      }
    },
    sprite: {
      diffuse: {
        value: new Ae(16777215)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new ye(0.5, 0.5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      mapTransform: {
        value: new Ne()
      },
      alphaMap: {
        value: null
      },
      alphaMapTransform: {
        value: new Ne()
      },
      alphaTest: {
        value: 0
      }
    }
  }, mn = {
    basic: {
      uniforms: Nt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.fog
      ]),
      vertexShader: De.meshbasic_vert,
      fragmentShader: De.meshbasic_frag
    },
    lambert: {
      uniforms: Nt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        {
          emissive: {
            value: new Ae(0)
          }
        }
      ]),
      vertexShader: De.meshlambert_vert,
      fragmentShader: De.meshlambert_frag
    },
    phong: {
      uniforms: Nt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        {
          emissive: {
            value: new Ae(0)
          },
          specular: {
            value: new Ae(1118481)
          },
          shininess: {
            value: 30
          }
        }
      ]),
      vertexShader: De.meshphong_vert,
      fragmentShader: De.meshphong_frag
    },
    standard: {
      uniforms: Nt([
        ie.common,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.roughnessmap,
        ie.metalnessmap,
        ie.fog,
        ie.lights,
        {
          emissive: {
            value: new Ae(0)
          },
          roughness: {
            value: 1
          },
          metalness: {
            value: 0
          },
          envMapIntensity: {
            value: 1
          }
        }
      ]),
      vertexShader: De.meshphysical_vert,
      fragmentShader: De.meshphysical_frag
    },
    toon: {
      uniforms: Nt([
        ie.common,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.gradientmap,
        ie.fog,
        ie.lights,
        {
          emissive: {
            value: new Ae(0)
          }
        }
      ]),
      vertexShader: De.meshtoon_vert,
      fragmentShader: De.meshtoon_frag
    },
    matcap: {
      uniforms: Nt([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        {
          matcap: {
            value: null
          }
        }
      ]),
      vertexShader: De.meshmatcap_vert,
      fragmentShader: De.meshmatcap_frag
    },
    points: {
      uniforms: Nt([
        ie.points,
        ie.fog
      ]),
      vertexShader: De.points_vert,
      fragmentShader: De.points_frag
    },
    dashed: {
      uniforms: Nt([
        ie.common,
        ie.fog,
        {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }
      ]),
      vertexShader: De.linedashed_vert,
      fragmentShader: De.linedashed_frag
    },
    depth: {
      uniforms: Nt([
        ie.common,
        ie.displacementmap
      ]),
      vertexShader: De.depth_vert,
      fragmentShader: De.depth_frag
    },
    normal: {
      uniforms: Nt([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        {
          opacity: {
            value: 1
          }
        }
      ]),
      vertexShader: De.meshnormal_vert,
      fragmentShader: De.meshnormal_frag
    },
    sprite: {
      uniforms: Nt([
        ie.sprite,
        ie.fog
      ]),
      vertexShader: De.sprite_vert,
      fragmentShader: De.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new Ne()
        },
        t2D: {
          value: null
        },
        backgroundIntensity: {
          value: 1
        }
      },
      vertexShader: De.background_vert,
      fragmentShader: De.background_frag
    },
    backgroundCube: {
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        backgroundBlurriness: {
          value: 0
        },
        backgroundIntensity: {
          value: 1
        },
        backgroundRotation: {
          value: new Ne()
        }
      },
      vertexShader: De.backgroundCube_vert,
      fragmentShader: De.backgroundCube_frag
    },
    cube: {
      uniforms: {
        tCube: {
          value: null
        },
        tFlip: {
          value: -1
        },
        opacity: {
          value: 1
        }
      },
      vertexShader: De.cube_vert,
      fragmentShader: De.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: De.equirect_vert,
      fragmentShader: De.equirect_frag
    },
    distanceRGBA: {
      uniforms: Nt([
        ie.common,
        ie.displacementmap,
        {
          referencePosition: {
            value: new R()
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }
      ]),
      vertexShader: De.distanceRGBA_vert,
      fragmentShader: De.distanceRGBA_frag
    },
    shadow: {
      uniforms: Nt([
        ie.lights,
        ie.fog,
        {
          color: {
            value: new Ae(0)
          },
          opacity: {
            value: 1
          }
        }
      ]),
      vertexShader: De.shadow_vert,
      fragmentShader: De.shadow_frag
    }
  };
  mn.physical = {
    uniforms: Nt([
      mn.standard.uniforms,
      {
        clearcoat: {
          value: 0
        },
        clearcoatMap: {
          value: null
        },
        clearcoatMapTransform: {
          value: new Ne()
        },
        clearcoatNormalMap: {
          value: null
        },
        clearcoatNormalMapTransform: {
          value: new Ne()
        },
        clearcoatNormalScale: {
          value: new ye(1, 1)
        },
        clearcoatRoughness: {
          value: 0
        },
        clearcoatRoughnessMap: {
          value: null
        },
        clearcoatRoughnessMapTransform: {
          value: new Ne()
        },
        dispersion: {
          value: 0
        },
        iridescence: {
          value: 0
        },
        iridescenceMap: {
          value: null
        },
        iridescenceMapTransform: {
          value: new Ne()
        },
        iridescenceIOR: {
          value: 1.3
        },
        iridescenceThicknessMinimum: {
          value: 100
        },
        iridescenceThicknessMaximum: {
          value: 400
        },
        iridescenceThicknessMap: {
          value: null
        },
        iridescenceThicknessMapTransform: {
          value: new Ne()
        },
        sheen: {
          value: 0
        },
        sheenColor: {
          value: new Ae(0)
        },
        sheenColorMap: {
          value: null
        },
        sheenColorMapTransform: {
          value: new Ne()
        },
        sheenRoughness: {
          value: 1
        },
        sheenRoughnessMap: {
          value: null
        },
        sheenRoughnessMapTransform: {
          value: new Ne()
        },
        transmission: {
          value: 0
        },
        transmissionMap: {
          value: null
        },
        transmissionMapTransform: {
          value: new Ne()
        },
        transmissionSamplerSize: {
          value: new ye()
        },
        transmissionSamplerMap: {
          value: null
        },
        thickness: {
          value: 0
        },
        thicknessMap: {
          value: null
        },
        thicknessMapTransform: {
          value: new Ne()
        },
        attenuationDistance: {
          value: 0
        },
        attenuationColor: {
          value: new Ae(0)
        },
        specularColor: {
          value: new Ae(1, 1, 1)
        },
        specularColorMap: {
          value: null
        },
        specularColorMapTransform: {
          value: new Ne()
        },
        specularIntensity: {
          value: 1
        },
        specularIntensityMap: {
          value: null
        },
        specularIntensityMapTransform: {
          value: new Ne()
        },
        anisotropyVector: {
          value: new ye()
        },
        anisotropyMap: {
          value: null
        },
        anisotropyMapTransform: {
          value: new Ne()
        }
      }
    ]),
    vertexShader: De.meshphysical_vert,
    fragmentShader: De.meshphysical_frag
  };
  const Nr = {
    r: 0,
    b: 0,
    g: 0
  }, bi = new yn(), Rg = new Le();
  function Pg(i, e, t, n, s, r, o) {
    const a = new Ae(0);
    let l = r === true ? 0 : 1, c, h, u = null, d = 0, p = null;
    function _(M) {
      let b = M.isScene === true ? M.background : null;
      return b && b.isTexture && (b = (M.backgroundBlurriness > 0 ? t : e).get(b)), b;
    }
    function g(M) {
      let b = false;
      const E = _(M);
      E === null ? f(a, l) : E && E.isColor && (f(E, 1), b = true);
      const N = i.xr.getEnvironmentBlendMode();
      N === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : N === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || b) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
    }
    function m(M, b) {
      const E = _(b);
      E && (E.isCubeTexture || E.mapping === go) ? (h === void 0 && (h = new Vt(new Ts(1, 1, 1), new pi({
        name: "BackgroundCubeMaterial",
        uniforms: ys(mn.backgroundCube.uniforms),
        vertexShader: mn.backgroundCube.vertexShader,
        fragmentShader: mn.backgroundCube.fragmentShader,
        side: Ht,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(N, A, C) {
        this.matrixWorld.copyPosition(C.matrixWorld);
      }, Object.defineProperty(h.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value;
        }
      }), s.update(h)), bi.copy(b.backgroundRotation), bi.x *= -1, bi.y *= -1, bi.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (bi.y *= -1, bi.z *= -1), h.material.uniforms.envMap.value = E, h.material.uniforms.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(bi)), h.material.toneMapped = ze.getTransfer(E.colorSpace) !== it, (u !== E || d !== E.version || p !== i.toneMapping) && (h.material.needsUpdate = true, u = E, d = E.version, p = i.toneMapping), h.layers.enableAll(), M.unshift(h, h.geometry, h.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new Vt(new xo(2, 2), new pi({
        name: "BackgroundMaterial",
        uniforms: ys(mn.background.uniforms),
        vertexShader: mn.background.vertexShader,
        fragmentShader: mn.background.fragmentShader,
        side: Wn,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
        get: function() {
          return this.uniforms.t2D.value;
        }
      }), s.update(c)), c.material.uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.toneMapped = ze.getTransfer(E.colorSpace) !== it, E.matrixAutoUpdate === true && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E.matrix), (u !== E || d !== E.version || p !== i.toneMapping) && (c.material.needsUpdate = true, u = E, d = E.version, p = i.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null));
    }
    function f(M, b) {
      M.getRGB(Nr, Hu(i)), n.buffers.color.setClear(Nr.r, Nr.g, Nr.b, b, o);
    }
    return {
      getClearColor: function() {
        return a;
      },
      setClearColor: function(M, b = 1) {
        a.set(M), l = b, f(a, l);
      },
      getClearAlpha: function() {
        return l;
      },
      setClearAlpha: function(M) {
        l = M, f(a, l);
      },
      render: g,
      addToRenderList: m
    };
  }
  function Lg(i, e) {
    const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = d(null);
    let r = s, o = false;
    function a(y, L, X, k, H) {
      let $ = false;
      const z = u(k, X, L);
      r !== z && (r = z, c(r.object)), $ = p(y, k, X, H), $ && _(y, k, X, H), H !== null && e.update(H, i.ELEMENT_ARRAY_BUFFER), ($ || o) && (o = false, E(y, L, X, k), H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer));
    }
    function l() {
      return i.createVertexArray();
    }
    function c(y) {
      return i.bindVertexArray(y);
    }
    function h(y) {
      return i.deleteVertexArray(y);
    }
    function u(y, L, X) {
      const k = X.wireframe === true;
      let H = n[y.id];
      H === void 0 && (H = {}, n[y.id] = H);
      let $ = H[L.id];
      $ === void 0 && ($ = {}, H[L.id] = $);
      let z = $[k];
      return z === void 0 && (z = d(l()), $[k] = z), z;
    }
    function d(y) {
      const L = [], X = [], k = [];
      for (let H = 0; H < t; H++) L[H] = 0, X[H] = 0, k[H] = 0;
      return {
        geometry: null,
        program: null,
        wireframe: false,
        newAttributes: L,
        enabledAttributes: X,
        attributeDivisors: k,
        object: y,
        attributes: {},
        index: null
      };
    }
    function p(y, L, X, k) {
      const H = r.attributes, $ = L.attributes;
      let z = 0;
      const Z = X.getAttributes();
      for (const V in Z) if (Z[V].location >= 0) {
        const he = H[V];
        let me = $[V];
        if (me === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (me = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (me = y.instanceColor)), he === void 0 || he.attribute !== me || me && he.data !== me.data) return true;
        z++;
      }
      return r.attributesNum !== z || r.index !== k;
    }
    function _(y, L, X, k) {
      const H = {}, $ = L.attributes;
      let z = 0;
      const Z = X.getAttributes();
      for (const V in Z) if (Z[V].location >= 0) {
        let he = $[V];
        he === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (he = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (he = y.instanceColor));
        const me = {};
        me.attribute = he, he && he.data && (me.data = he.data), H[V] = me, z++;
      }
      r.attributes = H, r.attributesNum = z, r.index = k;
    }
    function g() {
      const y = r.newAttributes;
      for (let L = 0, X = y.length; L < X; L++) y[L] = 0;
    }
    function m(y) {
      f(y, 0);
    }
    function f(y, L) {
      const X = r.newAttributes, k = r.enabledAttributes, H = r.attributeDivisors;
      X[y] = 1, k[y] === 0 && (i.enableVertexAttribArray(y), k[y] = 1), H[y] !== L && (i.vertexAttribDivisor(y, L), H[y] = L);
    }
    function M() {
      const y = r.newAttributes, L = r.enabledAttributes;
      for (let X = 0, k = L.length; X < k; X++) L[X] !== y[X] && (i.disableVertexAttribArray(X), L[X] = 0);
    }
    function b(y, L, X, k, H, $, z) {
      z === true ? i.vertexAttribIPointer(y, L, X, H, $) : i.vertexAttribPointer(y, L, X, k, H, $);
    }
    function E(y, L, X, k) {
      g();
      const H = k.attributes, $ = X.getAttributes(), z = L.defaultAttributeValues;
      for (const Z in $) {
        const V = $[Z];
        if (V.location >= 0) {
          let oe = H[Z];
          if (oe === void 0 && (Z === "instanceMatrix" && y.instanceMatrix && (oe = y.instanceMatrix), Z === "instanceColor" && y.instanceColor && (oe = y.instanceColor)), oe !== void 0) {
            const he = oe.normalized, me = oe.itemSize, Be = e.get(oe);
            if (Be === void 0) continue;
            const Qe = Be.buffer, G = Be.type, J = Be.bytesPerElement, fe = G === i.INT || G === i.UNSIGNED_INT || oe.gpuType === vl;
            if (oe.isInterleavedBufferAttribute) {
              const le = oe.data, Se = le.stride, Re = oe.offset;
              if (le.isInstancedInterleavedBuffer) {
                for (let Fe = 0; Fe < V.locationSize; Fe++) f(V.location + Fe, le.meshPerAttribute);
                y.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = le.meshPerAttribute * le.count);
              } else for (let Fe = 0; Fe < V.locationSize; Fe++) m(V.location + Fe);
              i.bindBuffer(i.ARRAY_BUFFER, Qe);
              for (let Fe = 0; Fe < V.locationSize; Fe++) b(V.location + Fe, me / V.locationSize, G, he, Se * J, (Re + me / V.locationSize * Fe) * J, fe);
            } else {
              if (oe.isInstancedBufferAttribute) {
                for (let le = 0; le < V.locationSize; le++) f(V.location + le, oe.meshPerAttribute);
                y.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = oe.meshPerAttribute * oe.count);
              } else for (let le = 0; le < V.locationSize; le++) m(V.location + le);
              i.bindBuffer(i.ARRAY_BUFFER, Qe);
              for (let le = 0; le < V.locationSize; le++) b(V.location + le, me / V.locationSize, G, he, me * J, me / V.locationSize * le * J, fe);
            }
          } else if (z !== void 0) {
            const he = z[Z];
            if (he !== void 0) switch (he.length) {
              case 2:
                i.vertexAttrib2fv(V.location, he);
                break;
              case 3:
                i.vertexAttrib3fv(V.location, he);
                break;
              case 4:
                i.vertexAttrib4fv(V.location, he);
                break;
              default:
                i.vertexAttrib1fv(V.location, he);
            }
          }
        }
      }
      M();
    }
    function N() {
      F();
      for (const y in n) {
        const L = n[y];
        for (const X in L) {
          const k = L[X];
          for (const H in k) h(k[H].object), delete k[H];
          delete L[X];
        }
        delete n[y];
      }
    }
    function A(y) {
      if (n[y.id] === void 0) return;
      const L = n[y.id];
      for (const X in L) {
        const k = L[X];
        for (const H in k) h(k[H].object), delete k[H];
        delete L[X];
      }
      delete n[y.id];
    }
    function C(y) {
      for (const L in n) {
        const X = n[L];
        if (X[y.id] === void 0) continue;
        const k = X[y.id];
        for (const H in k) h(k[H].object), delete k[H];
        delete X[y.id];
      }
    }
    function F() {
      S(), o = true, r !== s && (r = s, c(r.object));
    }
    function S() {
      s.geometry = null, s.program = null, s.wireframe = false;
    }
    return {
      setup: a,
      reset: F,
      resetDefaultState: S,
      dispose: N,
      releaseStatesOfGeometry: A,
      releaseStatesOfProgram: C,
      initAttributes: g,
      enableAttribute: m,
      disableUnusedAttributes: M
    };
  }
  function Ig(i, e, t) {
    let n;
    function s(c) {
      n = c;
    }
    function r(c, h) {
      i.drawArrays(n, c, h), t.update(h, n, 1);
    }
    function o(c, h, u) {
      u !== 0 && (i.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
    }
    function a(c, h, u) {
      if (u === 0) return;
      e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
      let p = 0;
      for (let _ = 0; _ < u; _++) p += h[_];
      t.update(p, n, 1);
    }
    function l(c, h, u, d) {
      if (u === 0) return;
      const p = e.get("WEBGL_multi_draw");
      if (p === null) for (let _ = 0; _ < c.length; _++) o(c[_], h[_], d[_]);
      else {
        p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
        let _ = 0;
        for (let g = 0; g < u; g++) _ += h[g];
        for (let g = 0; g < d.length; g++) t.update(_, n, d[g]);
      }
    }
    this.setMode = s, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
  }
  function Dg(i, e, t, n) {
    let s;
    function r() {
      if (s !== void 0) return s;
      if (e.has("EXT_texture_filter_anisotropic") === true) {
        const A = e.get("EXT_texture_filter_anisotropic");
        s = i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else s = 0;
      return s;
    }
    function o(A) {
      return !(A !== tn && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
    }
    function a(A) {
      const C = A === rr && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
      return !(A !== Xn && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && A !== hn && !C);
    }
    function l(A) {
      if (A === "highp") {
        if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
        A = "mediump";
      }
      return A === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let c = t.precision !== void 0 ? t.precision : "highp";
    const h = l(c);
    h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
    const u = t.logarithmicDepthBuffer === true, d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), p = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), m = i.getParameter(i.MAX_VERTEX_ATTRIBS), f = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), M = i.getParameter(i.MAX_VARYING_VECTORS), b = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), E = p > 0, N = i.getParameter(i.MAX_SAMPLES);
    return {
      isWebGL2: true,
      getMaxAnisotropy: r,
      getMaxPrecision: l,
      textureFormatReadable: o,
      textureTypeReadable: a,
      precision: c,
      logarithmicDepthBuffer: u,
      maxTextures: d,
      maxVertexTextures: p,
      maxTextureSize: _,
      maxCubemapSize: g,
      maxAttributes: m,
      maxVertexUniforms: f,
      maxVaryings: M,
      maxFragmentUniforms: b,
      vertexTextures: E,
      maxSamples: N
    };
  }
  function Ng(i) {
    const e = this;
    let t = null, n = 0, s = false, r = false;
    const o = new ri(), a = new Ne(), l = {
      value: null,
      needsUpdate: false
    };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
      const p = u.length !== 0 || d || n !== 0 || s;
      return s = d, n = u.length, p;
    }, this.beginShadows = function() {
      r = true, h(null);
    }, this.endShadows = function() {
      r = false;
    }, this.setGlobalState = function(u, d) {
      t = h(u, d, 0);
    }, this.setState = function(u, d, p) {
      const _ = u.clippingPlanes, g = u.clipIntersection, m = u.clipShadows, f = i.get(u);
      if (!s || _ === null || _.length === 0 || r && !m) r ? h(null) : c();
      else {
        const M = r ? 0 : n, b = M * 4;
        let E = f.clippingState || null;
        l.value = E, E = h(_, d, b, p);
        for (let N = 0; N !== b; ++N) E[N] = t[N];
        f.clippingState = E, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += M;
      }
    };
    function c() {
      l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
    }
    function h(u, d, p, _) {
      const g = u !== null ? u.length : 0;
      let m = null;
      if (g !== 0) {
        if (m = l.value, _ !== true || m === null) {
          const f = p + g * 4, M = d.matrixWorldInverse;
          a.getNormalMatrix(M), (m === null || m.length < f) && (m = new Float32Array(f));
          for (let b = 0, E = p; b !== g; ++b, E += 4) o.copy(u[b]).applyMatrix4(M, a), o.normal.toArray(m, E), m[E + 3] = o.constant;
        }
        l.value = m, l.needsUpdate = true;
      }
      return e.numPlanes = g, e.numIntersection = 0, m;
    }
  }
  function Ug(i) {
    let e = /* @__PURE__ */ new WeakMap();
    function t(o, a) {
      return a === Ra ? o.mapping = fs : a === Pa && (o.mapping = ms), o;
    }
    function n(o) {
      if (o && o.isTexture) {
        const a = o.mapping;
        if (a === Ra || a === Pa) if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new jf(l.height);
            return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", s), t(c.texture, o.mapping);
          } else return null;
        }
      }
      return o;
    }
    function s(o) {
      const a = o.target;
      a.removeEventListener("dispose", s);
      const l = e.get(a);
      l !== void 0 && (e.delete(a), l.dispose());
    }
    function r() {
      e = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: n,
      dispose: r
    };
  }
  class Rl extends Gu {
    constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, o = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = r, this.far = o, this.updateProjectionMatrix();
    }
    copy(e, t) {
      return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
    }
    setViewOffset(e, t, n, s, r, o) {
      this.view === null && (this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
      let r = n - e, o = n + e, a = s + t, l = s - t;
      if (this.view !== null && this.view.enabled) {
        const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
    }
  }
  const rs = 4, Kc = [
    0.125,
    0.215,
    0.35,
    0.446,
    0.526,
    0.582
  ], Ai = 20, ta = new Rl(), qc = new Ae();
  let na = null, ia = 0, sa = 0, ra = false;
  const wi = (1 + Math.sqrt(5)) / 2, Ji = 1 / wi, Yc = [
    new R(-wi, Ji, 0),
    new R(wi, Ji, 0),
    new R(-Ji, 0, wi),
    new R(Ji, 0, wi),
    new R(0, wi, -Ji),
    new R(0, wi, Ji),
    new R(-1, 1, -1),
    new R(1, 1, -1),
    new R(-1, 1, 1),
    new R(1, 1, 1)
  ];
  class $c {
    constructor(e) {
      this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, s = 100) {
      na = this._renderer.getRenderTarget(), ia = this._renderer.getActiveCubeFace(), sa = this._renderer.getActiveMipmapLevel(), ra = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
      const r = this._allocateTargets();
      return r.depthBuffer = true, this._sceneToCubeUV(e, n, s, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(e, t = null) {
      return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
      return this._fromTexture(e, t);
    }
    compileCubemapShader() {
      this._cubemapMaterial === null && (this._cubemapMaterial = Qc(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null && (this._equirectMaterial = Jc(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
    }
    _setSize(e) {
      this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
      for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
    }
    _cleanup(e) {
      this._renderer.setRenderTarget(na, ia, sa), this._renderer.xr.enabled = ra, e.scissorTest = false, Ur(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
      e.mapping === fs || e.mapping === ms ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), na = this._renderer.getRenderTarget(), ia = this._renderer.getActiveCubeFace(), sa = this._renderer.getActiveMipmapLevel(), ra = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n = t || this._allocateTargets();
      return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
        magFilter: qt,
        minFilter: qt,
        generateMipmaps: false,
        type: rr,
        format: tn,
        colorSpace: St,
        depthBuffer: false
      }, s = Zc(e, t, n);
      if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
        this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Zc(e, t, n);
        const { _lodMax: r } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Og(r)), this._blurMaterial = Fg(r, e, t);
      }
      return s;
    }
    _compileMaterial(e) {
      const t = new Vt(this._lodPlanes[0], e);
      this._renderer.compile(t, ta);
    }
    _sceneToCubeUV(e, t, n, s) {
      const a = new Ut(90, 1, t, n), l = [
        1,
        -1,
        1,
        1,
        1,
        1
      ], c = [
        1,
        1,
        1,
        -1,
        -1,
        -1
      ], h = this._renderer, u = h.autoClear, d = h.toneMapping;
      h.getClearColor(qc), h.toneMapping = ui, h.autoClear = false;
      const p = new Vn({
        name: "PMREM.Background",
        side: Ht,
        depthWrite: false,
        depthTest: false
      }), _ = new Vt(new Ts(), p);
      let g = false;
      const m = e.background;
      m ? m.isColor && (p.color.copy(m), e.background = null, g = true) : (p.color.copy(qc), g = true);
      for (let f = 0; f < 6; f++) {
        const M = f % 3;
        M === 0 ? (a.up.set(0, l[f], 0), a.lookAt(c[f], 0, 0)) : M === 1 ? (a.up.set(0, 0, l[f]), a.lookAt(0, c[f], 0)) : (a.up.set(0, l[f], 0), a.lookAt(0, 0, c[f]));
        const b = this._cubeSize;
        Ur(s, M * b, f > 2 ? b : 0, b, b), h.setRenderTarget(s), g && h.render(_, a), h.render(e, a);
      }
      _.geometry.dispose(), _.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
    }
    _textureToCubeUV(e, t) {
      const n = this._renderer, s = e.mapping === fs || e.mapping === ms;
      s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Qc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Jc());
      const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new Vt(this._lodPlanes[0], r), a = r.uniforms;
      a.envMap.value = e;
      const l = this._cubeSize;
      Ur(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, ta);
    }
    _applyPMREM(e) {
      const t = this._renderer, n = t.autoClear;
      t.autoClear = false;
      const s = this._lodPlanes.length;
      for (let r = 1; r < s; r++) {
        const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Yc[(s - r - 1) % Yc.length];
        this._blur(e, r - 1, r, o, a);
      }
      t.autoClear = n;
    }
    _blur(e, t, n, s, r) {
      const o = this._pingPongRenderTarget;
      this._halfBlur(e, o, t, n, s, "latitudinal", r), this._halfBlur(o, e, n, n, s, "longitudinal", r);
    }
    _halfBlur(e, t, n, s, r, o, a) {
      const l = this._renderer, c = this._blurMaterial;
      o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
      const h = 3, u = new Vt(this._lodPlanes[s], c), d = c.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Ai - 1), g = r / _, m = isFinite(r) ? 1 + Math.floor(h * g) : Ai;
      m > Ai && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);
      const f = [];
      let M = 0;
      for (let C = 0; C < Ai; ++C) {
        const F = C / g, S = Math.exp(-F * F / 2);
        f.push(S), C === 0 ? M += S : C < m && (M += 2 * S);
      }
      for (let C = 0; C < f.length; C++) f[C] = f[C] / M;
      d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
      const { _lodMax: b } = this;
      d.dTheta.value = _, d.mipInt.value = b - n;
      const E = this._sizeLods[s], N = 3 * E * (s > b - rs ? s - b + rs : 0), A = 4 * (this._cubeSize - E);
      Ur(t, N, A, 3 * E, 2 * E), l.setRenderTarget(t), l.render(u, ta);
    }
  }
  function Og(i) {
    const e = [], t = [], n = [];
    let s = i;
    const r = i - rs + 1 + Kc.length;
    for (let o = 0; o < r; o++) {
      const a = Math.pow(2, s);
      t.push(a);
      let l = 1 / a;
      o > i - rs ? l = Kc[o - i + rs - 1] : o === 0 && (l = 0), n.push(l);
      const c = 1 / (a - 2), h = -c, u = 1 + c, d = [
        h,
        h,
        u,
        h,
        u,
        u,
        h,
        h,
        u,
        u,
        h,
        u
      ], p = 6, _ = 6, g = 3, m = 2, f = 1, M = new Float32Array(g * _ * p), b = new Float32Array(m * _ * p), E = new Float32Array(f * _ * p);
      for (let A = 0; A < p; A++) {
        const C = A % 3 * 2 / 3 - 1, F = A > 2 ? 0 : -1, S = [
          C,
          F,
          0,
          C + 2 / 3,
          F,
          0,
          C + 2 / 3,
          F + 1,
          0,
          C,
          F,
          0,
          C + 2 / 3,
          F + 1,
          0,
          C,
          F + 1,
          0
        ];
        M.set(S, g * _ * A), b.set(d, m * _ * A);
        const y = [
          A,
          A,
          A,
          A,
          A,
          A
        ];
        E.set(y, f * _ * A);
      }
      const N = new dn();
      N.setAttribute("position", new Rt(M, g)), N.setAttribute("uv", new Rt(b, m)), N.setAttribute("faceIndex", new Rt(E, f)), e.push(N), s > rs && s--;
    }
    return {
      lodPlanes: e,
      sizeLods: t,
      sigmas: n
    };
  }
  function Zc(i, e, t) {
    const n = new Pi(i, e, t);
    return n.texture.mapping = go, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
  }
  function Ur(i, e, t, n, s) {
    i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
  }
  function Fg(i, e, t) {
    const n = new Float32Array(Ai), s = new R(0, 1, 0);
    return new pi({
      name: "SphericalGaussianBlur",
      defines: {
        n: Ai,
        CUBEUV_TEXEL_WIDTH: 1 / e,
        CUBEUV_TEXEL_HEIGHT: 1 / t,
        CUBEUV_MAX_MIP: `${i}.0`
      },
      uniforms: {
        envMap: {
          value: null
        },
        samples: {
          value: 1
        },
        weights: {
          value: n
        },
        latitudinal: {
          value: false
        },
        dTheta: {
          value: 0
        },
        mipInt: {
          value: 0
        },
        poleAxis: {
          value: s
        }
      },
      vertexShader: Pl(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
      blending: hi,
      depthTest: false,
      depthWrite: false
    });
  }
  function Jc() {
    return new pi({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        }
      },
      vertexShader: Pl(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
      blending: hi,
      depthTest: false,
      depthWrite: false
    });
  }
  function Qc() {
    return new pi({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        }
      },
      vertexShader: Pl(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
      blending: hi,
      depthTest: false,
      depthWrite: false
    });
  }
  function Pl() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
  }
  function Bg(i) {
    let e = /* @__PURE__ */ new WeakMap(), t = null;
    function n(a) {
      if (a && a.isTexture) {
        const l = a.mapping, c = l === Ra || l === Pa, h = l === fs || l === ms;
        if (c || h) {
          let u = e.get(a);
          const d = u !== void 0 ? u.texture.pmremVersion : 0;
          if (a.isRenderTargetTexture && a.pmremVersion !== d) return t === null && (t = new $c(i)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), u.texture;
          if (u !== void 0) return u.texture;
          {
            const p = a.image;
            return c && p && p.height > 0 || h && p && s(p) ? (t === null && (t = new $c(i)), u = c ? t.fromEquirectangular(a) : t.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), a.addEventListener("dispose", r), u.texture) : null;
          }
        }
      }
      return a;
    }
    function s(a) {
      let l = 0;
      const c = 6;
      for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
      return l === c;
    }
    function r(a) {
      const l = a.target;
      l.removeEventListener("dispose", r);
      const c = e.get(l);
      c !== void 0 && (e.delete(l), c.dispose());
    }
    function o() {
      e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
    }
    return {
      get: n,
      dispose: o
    };
  }
  function kg(i) {
    const e = {};
    function t(n) {
      if (e[n] !== void 0) return e[n];
      let s;
      switch (n) {
        case "WEBGL_depth_texture":
          s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          s = i.getExtension(n);
      }
      return e[n] = s, s;
    }
    return {
      has: function(n) {
        return t(n) !== null;
      },
      init: function() {
        t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
      },
      get: function(n) {
        const s = t(n);
        return s === null && cs("THREE.WebGLRenderer: " + n + " extension not supported."), s;
      }
    };
  }
  function Vg(i, e, t, n) {
    const s = {}, r = /* @__PURE__ */ new WeakMap();
    function o(u) {
      const d = u.target;
      d.index !== null && e.remove(d.index);
      for (const _ in d.attributes) e.remove(d.attributes[_]);
      for (const _ in d.morphAttributes) {
        const g = d.morphAttributes[_];
        for (let m = 0, f = g.length; m < f; m++) e.remove(g[m]);
      }
      d.removeEventListener("dispose", o), delete s[d.id];
      const p = r.get(d);
      p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
    }
    function a(u, d) {
      return s[d.id] === true || (d.addEventListener("dispose", o), s[d.id] = true, t.memory.geometries++), d;
    }
    function l(u) {
      const d = u.attributes;
      for (const _ in d) e.update(d[_], i.ARRAY_BUFFER);
      const p = u.morphAttributes;
      for (const _ in p) {
        const g = p[_];
        for (let m = 0, f = g.length; m < f; m++) e.update(g[m], i.ARRAY_BUFFER);
      }
    }
    function c(u) {
      const d = [], p = u.index, _ = u.attributes.position;
      let g = 0;
      if (p !== null) {
        const M = p.array;
        g = p.version;
        for (let b = 0, E = M.length; b < E; b += 3) {
          const N = M[b + 0], A = M[b + 1], C = M[b + 2];
          d.push(N, A, A, C, C, N);
        }
      } else if (_ !== void 0) {
        const M = _.array;
        g = _.version;
        for (let b = 0, E = M.length / 3 - 1; b < E; b += 3) {
          const N = b + 0, A = b + 1, C = b + 2;
          d.push(N, A, A, C, C, N);
        }
      } else return;
      const m = new (Uu(d) ? zu : Vu)(d, 1);
      m.version = g;
      const f = r.get(u);
      f && e.remove(f), r.set(u, m);
    }
    function h(u) {
      const d = r.get(u);
      if (d) {
        const p = u.index;
        p !== null && d.version < p.version && c(u);
      } else c(u);
      return r.get(u);
    }
    return {
      get: a,
      update: l,
      getWireframeAttribute: h
    };
  }
  function zg(i, e, t) {
    let n;
    function s(d) {
      n = d;
    }
    let r, o;
    function a(d) {
      r = d.type, o = d.bytesPerElement;
    }
    function l(d, p) {
      i.drawElements(n, p, r, d * o), t.update(p, n, 1);
    }
    function c(d, p, _) {
      _ !== 0 && (i.drawElementsInstanced(n, p, r, d * o, _), t.update(p, n, _));
    }
    function h(d, p, _) {
      if (_ === 0) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, _);
      let m = 0;
      for (let f = 0; f < _; f++) m += p[f];
      t.update(m, n, 1);
    }
    function u(d, p, _, g) {
      if (_ === 0) return;
      const m = e.get("WEBGL_multi_draw");
      if (m === null) for (let f = 0; f < d.length; f++) c(d[f] / o, p[f], g[f]);
      else {
        m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, g, 0, _);
        let f = 0;
        for (let M = 0; M < _; M++) f += p[M];
        for (let M = 0; M < g.length; M++) t.update(f, n, g[M]);
      }
    }
    this.setMode = s, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
  }
  function Hg(i) {
    const e = {
      geometries: 0,
      textures: 0
    }, t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    function n(r, o, a) {
      switch (t.calls++, o) {
        case i.TRIANGLES:
          t.triangles += a * (r / 3);
          break;
        case i.LINES:
          t.lines += a * (r / 2);
          break;
        case i.LINE_STRIP:
          t.lines += a * (r - 1);
          break;
        case i.LINE_LOOP:
          t.lines += a * r;
          break;
        case i.POINTS:
          t.points += a * r;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", o);
          break;
      }
    }
    function s() {
      t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
    }
    return {
      memory: e,
      render: t,
      programs: null,
      autoReset: true,
      reset: s,
      update: n
    };
  }
  function Gg(i, e, t) {
    const n = /* @__PURE__ */ new WeakMap(), s = new nt();
    function r(o, a, l) {
      const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
      let d = n.get(a);
      if (d === void 0 || d.count !== u) {
        let S = function() {
          C.dispose(), n.delete(a), a.removeEventListener("dispose", S);
        };
        d !== void 0 && d.texture.dispose();
        const p = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, g = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], f = a.morphAttributes.normal || [], M = a.morphAttributes.color || [];
        let b = 0;
        p === true && (b = 1), _ === true && (b = 2), g === true && (b = 3);
        let E = a.attributes.position.count * b, N = 1;
        E > e.maxTextureSize && (N = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
        const A = new Float32Array(E * N * 4 * u), C = new Fu(A, E, N, u);
        C.type = hn, C.needsUpdate = true;
        const F = b * 4;
        for (let y = 0; y < u; y++) {
          const L = m[y], X = f[y], k = M[y], H = E * N * 4 * y;
          for (let $ = 0; $ < L.count; $++) {
            const z = $ * F;
            p === true && (s.fromBufferAttribute(L, $), A[H + z + 0] = s.x, A[H + z + 1] = s.y, A[H + z + 2] = s.z, A[H + z + 3] = 0), _ === true && (s.fromBufferAttribute(X, $), A[H + z + 4] = s.x, A[H + z + 5] = s.y, A[H + z + 6] = s.z, A[H + z + 7] = 0), g === true && (s.fromBufferAttribute(k, $), A[H + z + 8] = s.x, A[H + z + 9] = s.y, A[H + z + 10] = s.z, A[H + z + 11] = k.itemSize === 4 ? s.w : 1);
          }
        }
        d = {
          count: u,
          texture: C,
          size: new ye(E, N)
        }, n.set(a, d), a.addEventListener("dispose", S);
      }
      if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
      else {
        let p = 0;
        for (let g = 0; g < c.length; g++) p += c[g];
        const _ = a.morphTargetsRelative ? 1 : 1 - p;
        l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
      }
      l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size);
    }
    return {
      update: r
    };
  }
  function Wg(i, e, t, n) {
    let s = /* @__PURE__ */ new WeakMap();
    function r(l) {
      const c = n.render.frame, h = l.geometry, u = e.get(l, h);
      if (s.get(u) !== c && (e.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), s.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
        const d = l.skeleton;
        s.get(d) !== c && (d.update(), s.set(d, c));
      }
      return u;
    }
    function o() {
      s = /* @__PURE__ */ new WeakMap();
    }
    function a(l) {
      const c = l.target;
      c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
    }
    return {
      update: r,
      dispose: o
    };
  }
  class ju extends bt {
    constructor(e, t, n, s, r, o, a, l, c, h = ls) {
      if (h !== ls && h !== vs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      n === void 0 && h === ls && (n = Ri), n === void 0 && h === vs && (n = gs), super(null, s, r, o, a, l, h, n, c), this.isDepthTexture = true, this.image = {
        width: e,
        height: t
      }, this.magFilter = a !== void 0 ? a : Ot, this.minFilter = l !== void 0 ? l : Ot, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(e) {
      return super.copy(e), this.compareFunction = e.compareFunction, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
    }
  }
  const Ku = new bt(), eh = new ju(1, 1), qu = new Fu(), Yu = new Pf(), $u = new Wu(), th = [], nh = [], ih = new Float32Array(16), sh = new Float32Array(9), rh = new Float32Array(4);
  function As(i, e, t) {
    const n = i[0];
    if (n <= 0 || n > 0) return i;
    const s = e * t;
    let r = th[s];
    if (r === void 0 && (r = new Float32Array(s), th[s] = r), e !== 0) {
      n.toArray(r, 0);
      for (let o = 1, a = 0; o !== e; ++o) a += t, i[o].toArray(r, a);
    }
    return r;
  }
  function gt(i, e) {
    if (i.length !== e.length) return false;
    for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return false;
    return true;
  }
  function vt(i, e) {
    for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
  }
  function yo(i, e) {
    let t = nh[e];
    t === void 0 && (t = new Int32Array(e), nh[e] = t);
    for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
    return t;
  }
  function Xg(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
  }
  function jg(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (gt(t, e)) return;
      i.uniform2fv(this.addr, e), vt(t, e);
    }
  }
  function Kg(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
      if (gt(t, e)) return;
      i.uniform3fv(this.addr, e), vt(t, e);
    }
  }
  function qg(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (gt(t, e)) return;
      i.uniform4fv(this.addr, e), vt(t, e);
    }
  }
  function Yg(i, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (gt(t, e)) return;
      i.uniformMatrix2fv(this.addr, false, e), vt(t, e);
    } else {
      if (gt(t, n)) return;
      rh.set(n), i.uniformMatrix2fv(this.addr, false, rh), vt(t, n);
    }
  }
  function $g(i, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (gt(t, e)) return;
      i.uniformMatrix3fv(this.addr, false, e), vt(t, e);
    } else {
      if (gt(t, n)) return;
      sh.set(n), i.uniformMatrix3fv(this.addr, false, sh), vt(t, n);
    }
  }
  function Zg(i, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (gt(t, e)) return;
      i.uniformMatrix4fv(this.addr, false, e), vt(t, e);
    } else {
      if (gt(t, n)) return;
      ih.set(n), i.uniformMatrix4fv(this.addr, false, ih), vt(t, n);
    }
  }
  function Jg(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
  }
  function Qg(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (gt(t, e)) return;
      i.uniform2iv(this.addr, e), vt(t, e);
    }
  }
  function ev(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (gt(t, e)) return;
      i.uniform3iv(this.addr, e), vt(t, e);
    }
  }
  function tv(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (gt(t, e)) return;
      i.uniform4iv(this.addr, e), vt(t, e);
    }
  }
  function nv(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
  }
  function iv(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (gt(t, e)) return;
      i.uniform2uiv(this.addr, e), vt(t, e);
    }
  }
  function sv(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (gt(t, e)) return;
      i.uniform3uiv(this.addr, e), vt(t, e);
    }
  }
  function rv(i, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (gt(t, e)) return;
      i.uniform4uiv(this.addr, e), vt(t, e);
    }
  }
  function ov(i, e, t) {
    const n = this.cache, s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
    let r;
    this.type === i.SAMPLER_2D_SHADOW ? (eh.compareFunction = Du, r = eh) : r = Ku, t.setTexture2D(e || r, s);
  }
  function av(i, e, t) {
    const n = this.cache, s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || Yu, s);
  }
  function lv(i, e, t) {
    const n = this.cache, s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || $u, s);
  }
  function cv(i, e, t) {
    const n = this.cache, s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || qu, s);
  }
  function hv(i) {
    switch (i) {
      case 5126:
        return Xg;
      case 35664:
        return jg;
      case 35665:
        return Kg;
      case 35666:
        return qg;
      case 35674:
        return Yg;
      case 35675:
        return $g;
      case 35676:
        return Zg;
      case 5124:
      case 35670:
        return Jg;
      case 35667:
      case 35671:
        return Qg;
      case 35668:
      case 35672:
        return ev;
      case 35669:
      case 35673:
        return tv;
      case 5125:
        return nv;
      case 36294:
        return iv;
      case 36295:
        return sv;
      case 36296:
        return rv;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return ov;
      case 35679:
      case 36299:
      case 36307:
        return av;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return lv;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return cv;
    }
  }
  function uv(i, e) {
    i.uniform1fv(this.addr, e);
  }
  function dv(i, e) {
    const t = As(e, this.size, 2);
    i.uniform2fv(this.addr, t);
  }
  function pv(i, e) {
    const t = As(e, this.size, 3);
    i.uniform3fv(this.addr, t);
  }
  function fv(i, e) {
    const t = As(e, this.size, 4);
    i.uniform4fv(this.addr, t);
  }
  function mv(i, e) {
    const t = As(e, this.size, 4);
    i.uniformMatrix2fv(this.addr, false, t);
  }
  function _v(i, e) {
    const t = As(e, this.size, 9);
    i.uniformMatrix3fv(this.addr, false, t);
  }
  function gv(i, e) {
    const t = As(e, this.size, 16);
    i.uniformMatrix4fv(this.addr, false, t);
  }
  function vv(i, e) {
    i.uniform1iv(this.addr, e);
  }
  function xv(i, e) {
    i.uniform2iv(this.addr, e);
  }
  function yv(i, e) {
    i.uniform3iv(this.addr, e);
  }
  function bv(i, e) {
    i.uniform4iv(this.addr, e);
  }
  function Mv(i, e) {
    i.uniform1uiv(this.addr, e);
  }
  function Sv(i, e) {
    i.uniform2uiv(this.addr, e);
  }
  function Ev(i, e) {
    i.uniform3uiv(this.addr, e);
  }
  function wv(i, e) {
    i.uniform4uiv(this.addr, e);
  }
  function Tv(i, e, t) {
    const n = this.cache, s = e.length, r = yo(t, s);
    gt(n, r) || (i.uniform1iv(this.addr, r), vt(n, r));
    for (let o = 0; o !== s; ++o) t.setTexture2D(e[o] || Ku, r[o]);
  }
  function Av(i, e, t) {
    const n = this.cache, s = e.length, r = yo(t, s);
    gt(n, r) || (i.uniform1iv(this.addr, r), vt(n, r));
    for (let o = 0; o !== s; ++o) t.setTexture3D(e[o] || Yu, r[o]);
  }
  function Cv(i, e, t) {
    const n = this.cache, s = e.length, r = yo(t, s);
    gt(n, r) || (i.uniform1iv(this.addr, r), vt(n, r));
    for (let o = 0; o !== s; ++o) t.setTextureCube(e[o] || $u, r[o]);
  }
  function Rv(i, e, t) {
    const n = this.cache, s = e.length, r = yo(t, s);
    gt(n, r) || (i.uniform1iv(this.addr, r), vt(n, r));
    for (let o = 0; o !== s; ++o) t.setTexture2DArray(e[o] || qu, r[o]);
  }
  function Pv(i) {
    switch (i) {
      case 5126:
        return uv;
      case 35664:
        return dv;
      case 35665:
        return pv;
      case 35666:
        return fv;
      case 35674:
        return mv;
      case 35675:
        return _v;
      case 35676:
        return gv;
      case 5124:
      case 35670:
        return vv;
      case 35667:
      case 35671:
        return xv;
      case 35668:
      case 35672:
        return yv;
      case 35669:
      case 35673:
        return bv;
      case 5125:
        return Mv;
      case 36294:
        return Sv;
      case 36295:
        return Ev;
      case 36296:
        return wv;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return Tv;
      case 35679:
      case 36299:
      case 36307:
        return Av;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return Cv;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return Rv;
    }
  }
  class Lv {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = hv(t.type);
    }
  }
  class Iv {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Pv(t.type);
    }
  }
  class Dv {
    constructor(e) {
      this.id = e, this.seq = [], this.map = {};
    }
    setValue(e, t, n) {
      const s = this.seq;
      for (let r = 0, o = s.length; r !== o; ++r) {
        const a = s[r];
        a.setValue(e, t[a.id], n);
      }
    }
  }
  const oa = /(\w+)(\])?(\[|\.)?/g;
  function oh(i, e) {
    i.seq.push(e), i.map[e.id] = e;
  }
  function Nv(i, e, t) {
    const n = i.name, s = n.length;
    for (oa.lastIndex = 0; ; ) {
      const r = oa.exec(n), o = oa.lastIndex;
      let a = r[1];
      const l = r[2] === "]", c = r[3];
      if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
        oh(t, c === void 0 ? new Lv(a, i, e) : new Iv(a, i, e));
        break;
      } else {
        let u = t.map[a];
        u === void 0 && (u = new Dv(a), oh(t, u)), t = u;
      }
    }
  }
  class Jr {
    constructor(e, t) {
      this.seq = [], this.map = {};
      const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
      for (let s = 0; s < n; ++s) {
        const r = e.getActiveUniform(t, s), o = e.getUniformLocation(t, r.name);
        Nv(r, o, this);
      }
    }
    setValue(e, t, n, s) {
      const r = this.map[t];
      r !== void 0 && r.setValue(e, n, s);
    }
    setOptional(e, t, n) {
      const s = t[n];
      s !== void 0 && this.setValue(e, n, s);
    }
    static upload(e, t, n, s) {
      for (let r = 0, o = t.length; r !== o; ++r) {
        const a = t[r], l = n[a.id];
        l.needsUpdate !== false && a.setValue(e, l.value, s);
      }
    }
    static seqWithValue(e, t) {
      const n = [];
      for (let s = 0, r = e.length; s !== r; ++s) {
        const o = e[s];
        o.id in t && n.push(o);
      }
      return n;
    }
  }
  function ah(i, e, t) {
    const n = i.createShader(e);
    return i.shaderSource(n, t), i.compileShader(n), n;
  }
  const Uv = 37297;
  let Ov = 0;
  function Fv(i, e) {
    const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
    for (let o = s; o < r; o++) {
      const a = o + 1;
      n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
    }
    return n.join(`
`);
  }
  function Bv(i) {
    const e = ze.getPrimaries(ze.workingColorSpace), t = ze.getPrimaries(i);
    let n;
    switch (e === t ? n = "" : e === ao && t === oo ? n = "LinearDisplayP3ToLinearSRGB" : e === oo && t === ao && (n = "LinearSRGBToLinearDisplayP3"), i) {
      case St:
      case vo:
        return [
          n,
          "LinearTransferOETF"
        ];
      case At:
      case Tl:
        return [
          n,
          "sRGBTransferOETF"
        ];
      default:
        return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [
          n,
          "LinearTransferOETF"
        ];
    }
  }
  function lh(i, e, t) {
    const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = i.getShaderInfoLog(e).trim();
    if (n && s === "") return "";
    const r = /ERROR: 0:(\d+)/.exec(s);
    if (r) {
      const o = parseInt(r[1]);
      return t.toUpperCase() + `

` + s + `

` + Fv(i.getShaderSource(e), o);
    } else return s;
  }
  function kv(i, e) {
    const t = Bv(e);
    return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
  }
  function Vv(i, e) {
    let t;
    switch (e) {
      case Bp:
        t = "Linear";
        break;
      case kp:
        t = "Reinhard";
        break;
      case Vp:
        t = "Cineon";
        break;
      case xu:
        t = "ACESFilmic";
        break;
      case Hp:
        t = "AgX";
        break;
      case Gp:
        t = "Neutral";
        break;
      case zp:
        t = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
    }
    return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
  }
  const Or = new R();
  function zv() {
    ze.getLuminanceCoefficients(Or);
    const i = Or.x.toFixed(4), e = Or.y.toFixed(4), t = Or.z.toFixed(4);
    return [
      "float luminance( const in vec3 rgb ) {",
      `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
      "	return dot( weights, rgb );",
      "}"
    ].join(`
`);
  }
  function Hv(i) {
    return [
      i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
      i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
    ].filter(Ks).join(`
`);
  }
  function Gv(i) {
    const e = [];
    for (const t in i) {
      const n = i[t];
      n !== false && e.push("#define " + t + " " + n);
    }
    return e.join(`
`);
  }
  function Wv(i, e) {
    const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < n; s++) {
      const r = i.getActiveAttrib(e, s), o = r.name;
      let a = 1;
      r.type === i.FLOAT_MAT2 && (a = 2), r.type === i.FLOAT_MAT3 && (a = 3), r.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
        type: r.type,
        location: i.getAttribLocation(e, o),
        locationSize: a
      };
    }
    return t;
  }
  function Ks(i) {
    return i !== "";
  }
  function ch(i, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function hh(i, e) {
    return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  const Xv = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function rl(i) {
    return i.replace(Xv, Kv);
  }
  const jv = /* @__PURE__ */ new Map();
  function Kv(i, e) {
    let t = De[e];
    if (t === void 0) {
      const n = jv.get(e);
      if (n !== void 0) t = De[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
      else throw new Error("Can not resolve #include <" + e + ">");
    }
    return rl(t);
  }
  const qv = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function uh(i) {
    return i.replace(qv, Yv);
  }
  function Yv(i, e, t, n) {
    let s = "";
    for (let r = parseInt(e); r < parseInt(t); r++) s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
    return s;
  }
  function dh(i) {
    let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
    return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
  }
  function $v(i) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return i.shadowMapType === _u ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === gu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === On && (e = "SHADOWMAP_TYPE_VSM"), e;
  }
  function Zv(i) {
    let e = "ENVMAP_TYPE_CUBE";
    if (i.envMap) switch (i.envMapMode) {
      case fs:
      case ms:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case go:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
    return e;
  }
  function Jv(i) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (i.envMap) switch (i.envMapMode) {
      case ms:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
    return e;
  }
  function Qv(i) {
    let e = "ENVMAP_BLENDING_NONE";
    if (i.envMap) switch (i.combine) {
      case vu:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Op:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Fp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
    return e;
  }
  function ex(i) {
    const e = i.envMapCubeUVHeight;
    if (e === null) return null;
    const t = Math.log2(e) - 2, n = 1 / e;
    return {
      texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
      texelHeight: n,
      maxMip: t
    };
  }
  function tx(i, e, t, n) {
    const s = i.getContext(), r = t.defines;
    let o = t.vertexShader, a = t.fragmentShader;
    const l = $v(t), c = Zv(t), h = Jv(t), u = Qv(t), d = ex(t), p = Hv(t), _ = Gv(r), g = s.createProgram();
    let m, f, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (m = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _
    ].filter(Ks).join(`
`), m.length > 0 && (m += `
`), f = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _
    ].filter(Ks).join(`
`), f.length > 0 && (f += `
`)) : (m = [
      dh(t),
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _,
      t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
      t.batching ? "#define USE_BATCHING" : "",
      t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
      t.instancing ? "#define USE_INSTANCING" : "",
      t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
      t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.map ? "#define USE_MAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + h : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.anisotropy ? "#define USE_ANISOTROPY" : "",
      t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.alphaHash ? "#define USE_ALPHAHASH" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      t.mapUv ? "#define MAP_UV " + t.mapUv : "",
      t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
      t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
      t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
      t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
      t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
      t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
      t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
      t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
      t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
      t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
      t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
      t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
      t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
      t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
      t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
      t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
      t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
      t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
      t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
      t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
      t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
      t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
      t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "",
      t.vertexColors ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUv1s ? "#define USE_UV1" : "",
      t.vertexUv2s ? "#define USE_UV2" : "",
      t.vertexUv3s ? "#define USE_UV3" : "",
      t.pointsUvs ? "#define USE_POINTS_UV" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.skinning ? "#define USE_SKINNING" : "",
      t.morphTargets ? "#define USE_MORPHTARGETS" : "",
      t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "",
      t.morphColors ? "#define USE_MORPHCOLORS" : "",
      t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
      t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + l : "",
      t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
      t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      "uniform mat4 modelMatrix;",
      "uniform mat4 modelViewMatrix;",
      "uniform mat4 projectionMatrix;",
      "uniform mat4 viewMatrix;",
      "uniform mat3 normalMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      "#ifdef USE_INSTANCING",
      "	attribute mat4 instanceMatrix;",
      "#endif",
      "#ifdef USE_INSTANCING_COLOR",
      "	attribute vec3 instanceColor;",
      "#endif",
      "#ifdef USE_INSTANCING_MORPH",
      "	uniform sampler2D morphTexture;",
      "#endif",
      "attribute vec3 position;",
      "attribute vec3 normal;",
      "attribute vec2 uv;",
      "#ifdef USE_UV1",
      "	attribute vec2 uv1;",
      "#endif",
      "#ifdef USE_UV2",
      "	attribute vec2 uv2;",
      "#endif",
      "#ifdef USE_UV3",
      "	attribute vec2 uv3;",
      "#endif",
      "#ifdef USE_TANGENT",
      "	attribute vec4 tangent;",
      "#endif",
      "#if defined( USE_COLOR_ALPHA )",
      "	attribute vec4 color;",
      "#elif defined( USE_COLOR )",
      "	attribute vec3 color;",
      "#endif",
      "#ifdef USE_SKINNING",
      "	attribute vec4 skinIndex;",
      "	attribute vec4 skinWeight;",
      "#endif",
      `
`
    ].filter(Ks).join(`
`), f = [
      dh(t),
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _,
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
      t.map ? "#define USE_MAP" : "",
      t.matcap ? "#define USE_MATCAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + c : "",
      t.envMap ? "#define " + h : "",
      t.envMap ? "#define " + u : "",
      d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
      d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
      d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.anisotropy ? "#define USE_ANISOTROPY" : "",
      t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
      t.clearcoat ? "#define USE_CLEARCOAT" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.dispersion ? "#define USE_DISPERSION" : "",
      t.iridescence ? "#define USE_IRIDESCENCE" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.alphaTest ? "#define USE_ALPHATEST" : "",
      t.alphaHash ? "#define USE_ALPHAHASH" : "",
      t.sheen ? "#define USE_SHEEN" : "",
      t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "",
      t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUv1s ? "#define USE_UV1" : "",
      t.vertexUv2s ? "#define USE_UV2" : "",
      t.vertexUv3s ? "#define USE_UV3" : "",
      t.pointsUvs ? "#define USE_POINTS_UV" : "",
      t.gradientMap ? "#define USE_GRADIENTMAP" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + l : "",
      t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
      t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
      t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      "uniform mat4 viewMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      t.toneMapping !== ui ? "#define TONE_MAPPING" : "",
      t.toneMapping !== ui ? De.tonemapping_pars_fragment : "",
      t.toneMapping !== ui ? Vv("toneMapping", t.toneMapping) : "",
      t.dithering ? "#define DITHERING" : "",
      t.opaque ? "#define OPAQUE" : "",
      De.colorspace_pars_fragment,
      kv("linearToOutputTexel", t.outputColorSpace),
      zv(),
      t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
      `
`
    ].filter(Ks).join(`
`)), o = rl(o), o = ch(o, t), o = hh(o, t), a = rl(a), a = ch(a, t), a = hh(a, t), o = uh(o), a = uh(a), t.isRawShaderMaterial !== true && (M = `#version 300 es
`, m = [
      p,
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join(`
`) + `
` + m, f = [
      "#define varying in",
      t.glslVersion === Tc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
      t.glslVersion === Tc ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join(`
`) + `
` + f);
    const b = M + m + o, E = M + f + a, N = ah(s, s.VERTEX_SHADER, b), A = ah(s, s.FRAGMENT_SHADER, E);
    s.attachShader(g, N), s.attachShader(g, A), t.index0AttributeName !== void 0 ? s.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === true && s.bindAttribLocation(g, 0, "position"), s.linkProgram(g);
    function C(L) {
      if (i.debug.checkShaderErrors) {
        const X = s.getProgramInfoLog(g).trim(), k = s.getShaderInfoLog(N).trim(), H = s.getShaderInfoLog(A).trim();
        let $ = true, z = true;
        if (s.getProgramParameter(g, s.LINK_STATUS) === false) if ($ = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(s, g, N, A);
        else {
          const Z = lh(s, N, "vertex"), V = lh(s, A, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(g, s.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + X + `
` + Z + `
` + V);
        }
        else X !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", X) : (k === "" || H === "") && (z = false);
        z && (L.diagnostics = {
          runnable: $,
          programLog: X,
          vertexShader: {
            log: k,
            prefix: m
          },
          fragmentShader: {
            log: H,
            prefix: f
          }
        });
      }
      s.deleteShader(N), s.deleteShader(A), F = new Jr(s, g), S = Wv(s, g);
    }
    let F;
    this.getUniforms = function() {
      return F === void 0 && C(this), F;
    };
    let S;
    this.getAttributes = function() {
      return S === void 0 && C(this), S;
    };
    let y = t.rendererExtensionParallelShaderCompile === false;
    return this.isReady = function() {
      return y === false && (y = s.getProgramParameter(g, Uv)), y;
    }, this.destroy = function() {
      n.releaseStatesOfProgram(this), s.deleteProgram(g), this.program = void 0;
    }, this.type = t.shaderType, this.name = t.shaderName, this.id = Ov++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = N, this.fragmentShader = A, this;
  }
  let nx = 0;
  class ix {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e) {
      const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
      return o.has(s) === false && (o.add(s), s.usedTimes++), o.has(r) === false && (o.add(r), r.usedTimes++), this;
    }
    remove(e) {
      const t = this.materialCache.get(e);
      for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
      return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
      return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
      return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
      const t = this.materialCache;
      let n = t.get(e);
      return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
    }
    _getShaderStage(e) {
      const t = this.shaderCache;
      let n = t.get(e);
      return n === void 0 && (n = new sx(e), t.set(e, n)), n;
    }
  }
  class sx {
    constructor(e) {
      this.id = nx++, this.code = e, this.usedTimes = 0;
    }
  }
  function rx(i, e, t, n, s, r, o) {
    const a = new Bu(), l = new ix(), c = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, d = s.vertexTextures;
    let p = s.precision;
    const _ = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    };
    function g(S) {
      return c.add(S), S === 0 ? "uv" : `uv${S}`;
    }
    function m(S, y, L, X, k) {
      const H = X.fog, $ = k.geometry, z = S.isMeshStandardMaterial ? X.environment : null, Z = (S.isMeshStandardMaterial ? t : e).get(S.envMap || z), V = Z && Z.mapping === go ? Z.image.height : null, oe = _[S.type];
      S.precision !== null && (p = s.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
      const he = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, me = he !== void 0 ? he.length : 0;
      let Be = 0;
      $.morphAttributes.position !== void 0 && (Be = 1), $.morphAttributes.normal !== void 0 && (Be = 2), $.morphAttributes.color !== void 0 && (Be = 3);
      let Qe, G, J, fe;
      if (oe) {
        const Xe = mn[oe];
        Qe = Xe.vertexShader, G = Xe.fragmentShader;
      } else Qe = S.vertexShader, G = S.fragmentShader, l.update(S), J = l.getVertexShaderID(S), fe = l.getFragmentShaderID(S);
      const le = i.getRenderTarget(), Se = k.isInstancedMesh === true, Re = k.isBatchedMesh === true, Fe = !!S.map, at = !!S.matcap, T = !!Z, ht = !!S.aoMap, Ze = !!S.lightMap, et = !!S.bumpMap, ve = !!S.normalMap, ut = !!S.displacementMap, Te = !!S.emissiveMap, Pe = !!S.metalnessMap, w = !!S.roughnessMap, v = S.anisotropy > 0, B = S.clearcoat > 0, K = S.dispersion > 0, Y = S.iridescence > 0, q = S.sheen > 0, xe = S.transmission > 0, se = v && !!S.anisotropyMap, ce = B && !!S.clearcoatMap, Ie = B && !!S.clearcoatNormalMap, Q = B && !!S.clearcoatRoughnessMap, ae = Y && !!S.iridescenceMap, ke = Y && !!S.iridescenceThicknessMap, we = q && !!S.sheenColorMap, ue = q && !!S.sheenRoughnessMap, Ce = !!S.specularMap, Ue = !!S.specularColorMap, st = !!S.specularIntensityMap, P = xe && !!S.transmissionMap, ee = xe && !!S.thicknessMap, W = !!S.gradientMap, j = !!S.alphaMap, ne = S.alphaTest > 0, be = !!S.alphaHash, Ve = !!S.extensions;
      let dt = ui;
      S.toneMapped && (le === null || le.isXRRenderTarget === true) && (dt = i.toneMapping);
      const wt = {
        shaderID: oe,
        shaderType: S.type,
        shaderName: S.name,
        vertexShader: Qe,
        fragmentShader: G,
        defines: S.defines,
        customVertexShaderID: J,
        customFragmentShaderID: fe,
        isRawShaderMaterial: S.isRawShaderMaterial === true,
        glslVersion: S.glslVersion,
        precision: p,
        batching: Re,
        batchingColor: Re && k._colorsTexture !== null,
        instancing: Se,
        instancingColor: Se && k.instanceColor !== null,
        instancingMorph: Se && k.morphTexture !== null,
        supportsVertexTextures: d,
        outputColorSpace: le === null ? i.outputColorSpace : le.isXRRenderTarget === true ? le.texture.colorSpace : St,
        alphaToCoverage: !!S.alphaToCoverage,
        map: Fe,
        matcap: at,
        envMap: T,
        envMapMode: T && Z.mapping,
        envMapCubeUVHeight: V,
        aoMap: ht,
        lightMap: Ze,
        bumpMap: et,
        normalMap: ve,
        displacementMap: d && ut,
        emissiveMap: Te,
        normalMapObjectSpace: ve && S.normalMapType === Jp,
        normalMapTangentSpace: ve && S.normalMapType === Iu,
        metalnessMap: Pe,
        roughnessMap: w,
        anisotropy: v,
        anisotropyMap: se,
        clearcoat: B,
        clearcoatMap: ce,
        clearcoatNormalMap: Ie,
        clearcoatRoughnessMap: Q,
        dispersion: K,
        iridescence: Y,
        iridescenceMap: ae,
        iridescenceThicknessMap: ke,
        sheen: q,
        sheenColorMap: we,
        sheenRoughnessMap: ue,
        specularMap: Ce,
        specularColorMap: Ue,
        specularIntensityMap: st,
        transmission: xe,
        transmissionMap: P,
        thicknessMap: ee,
        gradientMap: W,
        opaque: S.transparent === false && S.blending === as && S.alphaToCoverage === false,
        alphaMap: j,
        alphaTest: ne,
        alphaHash: be,
        combine: S.combine,
        mapUv: Fe && g(S.map.channel),
        aoMapUv: ht && g(S.aoMap.channel),
        lightMapUv: Ze && g(S.lightMap.channel),
        bumpMapUv: et && g(S.bumpMap.channel),
        normalMapUv: ve && g(S.normalMap.channel),
        displacementMapUv: ut && g(S.displacementMap.channel),
        emissiveMapUv: Te && g(S.emissiveMap.channel),
        metalnessMapUv: Pe && g(S.metalnessMap.channel),
        roughnessMapUv: w && g(S.roughnessMap.channel),
        anisotropyMapUv: se && g(S.anisotropyMap.channel),
        clearcoatMapUv: ce && g(S.clearcoatMap.channel),
        clearcoatNormalMapUv: Ie && g(S.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: Q && g(S.clearcoatRoughnessMap.channel),
        iridescenceMapUv: ae && g(S.iridescenceMap.channel),
        iridescenceThicknessMapUv: ke && g(S.iridescenceThicknessMap.channel),
        sheenColorMapUv: we && g(S.sheenColorMap.channel),
        sheenRoughnessMapUv: ue && g(S.sheenRoughnessMap.channel),
        specularMapUv: Ce && g(S.specularMap.channel),
        specularColorMapUv: Ue && g(S.specularColorMap.channel),
        specularIntensityMapUv: st && g(S.specularIntensityMap.channel),
        transmissionMapUv: P && g(S.transmissionMap.channel),
        thicknessMapUv: ee && g(S.thicknessMap.channel),
        alphaMapUv: j && g(S.alphaMap.channel),
        vertexTangents: !!$.attributes.tangent && (ve || v),
        vertexColors: S.vertexColors,
        vertexAlphas: S.vertexColors === true && !!$.attributes.color && $.attributes.color.itemSize === 4,
        pointsUvs: k.isPoints === true && !!$.attributes.uv && (Fe || j),
        fog: !!H,
        useFog: S.fog === true,
        fogExp2: !!H && H.isFogExp2,
        flatShading: S.flatShading === true,
        sizeAttenuation: S.sizeAttenuation === true,
        logarithmicDepthBuffer: u,
        skinning: k.isSkinnedMesh === true,
        morphTargets: $.morphAttributes.position !== void 0,
        morphNormals: $.morphAttributes.normal !== void 0,
        morphColors: $.morphAttributes.color !== void 0,
        morphTargetsCount: me,
        morphTextureStride: Be,
        numDirLights: y.directional.length,
        numPointLights: y.point.length,
        numSpotLights: y.spot.length,
        numSpotLightMaps: y.spotLightMap.length,
        numRectAreaLights: y.rectArea.length,
        numHemiLights: y.hemi.length,
        numDirLightShadows: y.directionalShadowMap.length,
        numPointLightShadows: y.pointShadowMap.length,
        numSpotLightShadows: y.spotShadowMap.length,
        numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
        numLightProbes: y.numLightProbes,
        numClippingPlanes: o.numPlanes,
        numClipIntersection: o.numIntersection,
        dithering: S.dithering,
        shadowMapEnabled: i.shadowMap.enabled && L.length > 0,
        shadowMapType: i.shadowMap.type,
        toneMapping: dt,
        decodeVideoTexture: Fe && S.map.isVideoTexture === true && ze.getTransfer(S.map.colorSpace) === it,
        premultipliedAlpha: S.premultipliedAlpha,
        doubleSided: S.side === _n,
        flipSided: S.side === Ht,
        useDepthPacking: S.depthPacking >= 0,
        depthPacking: S.depthPacking || 0,
        index0AttributeName: S.index0AttributeName,
        extensionClipCullDistance: Ve && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw: (Ve && S.extensions.multiDraw === true || Re) && n.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
        customProgramCacheKey: S.customProgramCacheKey()
      };
      return wt.vertexUv1s = c.has(1), wt.vertexUv2s = c.has(2), wt.vertexUv3s = c.has(3), c.clear(), wt;
    }
    function f(S) {
      const y = [];
      if (S.shaderID ? y.push(S.shaderID) : (y.push(S.customVertexShaderID), y.push(S.customFragmentShaderID)), S.defines !== void 0) for (const L in S.defines) y.push(L), y.push(S.defines[L]);
      return S.isRawShaderMaterial === false && (M(y, S), b(y, S), y.push(i.outputColorSpace)), y.push(S.customProgramCacheKey), y.join();
    }
    function M(S, y) {
      S.push(y.precision), S.push(y.outputColorSpace), S.push(y.envMapMode), S.push(y.envMapCubeUVHeight), S.push(y.mapUv), S.push(y.alphaMapUv), S.push(y.lightMapUv), S.push(y.aoMapUv), S.push(y.bumpMapUv), S.push(y.normalMapUv), S.push(y.displacementMapUv), S.push(y.emissiveMapUv), S.push(y.metalnessMapUv), S.push(y.roughnessMapUv), S.push(y.anisotropyMapUv), S.push(y.clearcoatMapUv), S.push(y.clearcoatNormalMapUv), S.push(y.clearcoatRoughnessMapUv), S.push(y.iridescenceMapUv), S.push(y.iridescenceThicknessMapUv), S.push(y.sheenColorMapUv), S.push(y.sheenRoughnessMapUv), S.push(y.specularMapUv), S.push(y.specularColorMapUv), S.push(y.specularIntensityMapUv), S.push(y.transmissionMapUv), S.push(y.thicknessMapUv), S.push(y.combine), S.push(y.fogExp2), S.push(y.sizeAttenuation), S.push(y.morphTargetsCount), S.push(y.morphAttributeCount), S.push(y.numDirLights), S.push(y.numPointLights), S.push(y.numSpotLights), S.push(y.numSpotLightMaps), S.push(y.numHemiLights), S.push(y.numRectAreaLights), S.push(y.numDirLightShadows), S.push(y.numPointLightShadows), S.push(y.numSpotLightShadows), S.push(y.numSpotLightShadowsWithMaps), S.push(y.numLightProbes), S.push(y.shadowMapType), S.push(y.toneMapping), S.push(y.numClippingPlanes), S.push(y.numClipIntersection), S.push(y.depthPacking);
    }
    function b(S, y) {
      a.disableAll(), y.supportsVertexTextures && a.enable(0), y.instancing && a.enable(1), y.instancingColor && a.enable(2), y.instancingMorph && a.enable(3), y.matcap && a.enable(4), y.envMap && a.enable(5), y.normalMapObjectSpace && a.enable(6), y.normalMapTangentSpace && a.enable(7), y.clearcoat && a.enable(8), y.iridescence && a.enable(9), y.alphaTest && a.enable(10), y.vertexColors && a.enable(11), y.vertexAlphas && a.enable(12), y.vertexUv1s && a.enable(13), y.vertexUv2s && a.enable(14), y.vertexUv3s && a.enable(15), y.vertexTangents && a.enable(16), y.anisotropy && a.enable(17), y.alphaHash && a.enable(18), y.batching && a.enable(19), y.dispersion && a.enable(20), y.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.skinning && a.enable(4), y.morphTargets && a.enable(5), y.morphNormals && a.enable(6), y.morphColors && a.enable(7), y.premultipliedAlpha && a.enable(8), y.shadowMapEnabled && a.enable(9), y.doubleSided && a.enable(10), y.flipSided && a.enable(11), y.useDepthPacking && a.enable(12), y.dithering && a.enable(13), y.transmission && a.enable(14), y.sheen && a.enable(15), y.opaque && a.enable(16), y.pointsUvs && a.enable(17), y.decodeVideoTexture && a.enable(18), y.alphaToCoverage && a.enable(19), S.push(a.mask);
    }
    function E(S) {
      const y = _[S.type];
      let L;
      if (y) {
        const X = mn[y];
        L = Hf.clone(X.uniforms);
      } else L = S.uniforms;
      return L;
    }
    function N(S, y) {
      let L;
      for (let X = 0, k = h.length; X < k; X++) {
        const H = h[X];
        if (H.cacheKey === y) {
          L = H, ++L.usedTimes;
          break;
        }
      }
      return L === void 0 && (L = new tx(i, y, S, r), h.push(L)), L;
    }
    function A(S) {
      if (--S.usedTimes === 0) {
        const y = h.indexOf(S);
        h[y] = h[h.length - 1], h.pop(), S.destroy();
      }
    }
    function C(S) {
      l.remove(S);
    }
    function F() {
      l.dispose();
    }
    return {
      getParameters: m,
      getProgramCacheKey: f,
      getUniforms: E,
      acquireProgram: N,
      releaseProgram: A,
      releaseShaderCache: C,
      programs: h,
      dispose: F
    };
  }
  function ox() {
    let i = /* @__PURE__ */ new WeakMap();
    function e(o) {
      return i.has(o);
    }
    function t(o) {
      let a = i.get(o);
      return a === void 0 && (a = {}, i.set(o, a)), a;
    }
    function n(o) {
      i.delete(o);
    }
    function s(o, a, l) {
      i.get(o)[a] = l;
    }
    function r() {
      i = /* @__PURE__ */ new WeakMap();
    }
    return {
      has: e,
      get: t,
      remove: n,
      update: s,
      dispose: r
    };
  }
  function ax(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
  }
  function ph(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
  }
  function fh() {
    const i = [];
    let e = 0;
    const t = [], n = [], s = [];
    function r() {
      e = 0, t.length = 0, n.length = 0, s.length = 0;
    }
    function o(u, d, p, _, g, m) {
      let f = i[e];
      return f === void 0 ? (f = {
        id: u.id,
        object: u,
        geometry: d,
        material: p,
        groupOrder: _,
        renderOrder: u.renderOrder,
        z: g,
        group: m
      }, i[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = _, f.renderOrder = u.renderOrder, f.z = g, f.group = m), e++, f;
    }
    function a(u, d, p, _, g, m) {
      const f = o(u, d, p, _, g, m);
      p.transmission > 0 ? n.push(f) : p.transparent === true ? s.push(f) : t.push(f);
    }
    function l(u, d, p, _, g, m) {
      const f = o(u, d, p, _, g, m);
      p.transmission > 0 ? n.unshift(f) : p.transparent === true ? s.unshift(f) : t.unshift(f);
    }
    function c(u, d) {
      t.length > 1 && t.sort(u || ax), n.length > 1 && n.sort(d || ph), s.length > 1 && s.sort(d || ph);
    }
    function h() {
      for (let u = e, d = i.length; u < d; u++) {
        const p = i[u];
        if (p.id === null) break;
        p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
      }
    }
    return {
      opaque: t,
      transmissive: n,
      transparent: s,
      init: r,
      push: a,
      unshift: l,
      finish: h,
      sort: c
    };
  }
  function lx() {
    let i = /* @__PURE__ */ new WeakMap();
    function e(n, s) {
      const r = i.get(n);
      let o;
      return r === void 0 ? (o = new fh(), i.set(n, [
        o
      ])) : s >= r.length ? (o = new fh(), r.push(o)) : o = r[s], o;
    }
    function t() {
      i = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: e,
      dispose: t
    };
  }
  function cx() {
    const i = {};
    return {
      get: function(e) {
        if (i[e.id] !== void 0) return i[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              direction: new R(),
              color: new Ae()
            };
            break;
          case "SpotLight":
            t = {
              position: new R(),
              direction: new R(),
              color: new Ae(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            t = {
              position: new R(),
              color: new Ae(),
              distance: 0,
              decay: 0
            };
            break;
          case "HemisphereLight":
            t = {
              direction: new R(),
              skyColor: new Ae(),
              groundColor: new Ae()
            };
            break;
          case "RectAreaLight":
            t = {
              color: new Ae(),
              position: new R(),
              halfWidth: new R(),
              halfHeight: new R()
            };
            break;
        }
        return i[e.id] = t, t;
      }
    };
  }
  function hx() {
    const i = {};
    return {
      get: function(e) {
        if (i[e.id] !== void 0) return i[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ye()
            };
            break;
          case "SpotLight":
            t = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ye()
            };
            break;
          case "PointLight":
            t = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ye(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
        }
        return i[e.id] = t, t;
      }
    };
  }
  let ux = 0;
  function dx(i, e) {
    return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
  }
  function px(i) {
    const e = new cx(), t = hx(), n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1
      },
      ambient: [
        0,
        0,
        0
      ],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0
    };
    for (let c = 0; c < 9; c++) n.probe.push(new R());
    const s = new R(), r = new Le(), o = new Le();
    function a(c) {
      let h = 0, u = 0, d = 0;
      for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
      let p = 0, _ = 0, g = 0, m = 0, f = 0, M = 0, b = 0, E = 0, N = 0, A = 0, C = 0;
      c.sort(dx);
      for (let S = 0, y = c.length; S < y; S++) {
        const L = c[S], X = L.color, k = L.intensity, H = L.distance, $ = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
        if (L.isAmbientLight) h += X.r * k, u += X.g * k, d += X.b * k;
        else if (L.isLightProbe) {
          for (let z = 0; z < 9; z++) n.probe[z].addScaledVector(L.sh.coefficients[z], k);
          C++;
        } else if (L.isDirectionalLight) {
          const z = e.get(L);
          if (z.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
            const Z = L.shadow, V = t.get(L);
            V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = $, n.directionalShadowMatrix[p] = L.shadow.matrix, M++;
          }
          n.directional[p] = z, p++;
        } else if (L.isSpotLight) {
          const z = e.get(L);
          z.position.setFromMatrixPosition(L.matrixWorld), z.color.copy(X).multiplyScalar(k), z.distance = H, z.coneCos = Math.cos(L.angle), z.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), z.decay = L.decay, n.spot[g] = z;
          const Z = L.shadow;
          if (L.map && (n.spotLightMap[N] = L.map, N++, Z.updateMatrices(L), L.castShadow && A++), n.spotLightMatrix[g] = Z.matrix, L.castShadow) {
            const V = t.get(L);
            V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.spotShadow[g] = V, n.spotShadowMap[g] = $, E++;
          }
          g++;
        } else if (L.isRectAreaLight) {
          const z = e.get(L);
          z.color.copy(X).multiplyScalar(k), z.halfWidth.set(L.width * 0.5, 0, 0), z.halfHeight.set(0, L.height * 0.5, 0), n.rectArea[m] = z, m++;
        } else if (L.isPointLight) {
          const z = e.get(L);
          if (z.color.copy(L.color).multiplyScalar(L.intensity), z.distance = L.distance, z.decay = L.decay, L.castShadow) {
            const Z = L.shadow, V = t.get(L);
            V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, V.shadowCameraNear = Z.camera.near, V.shadowCameraFar = Z.camera.far, n.pointShadow[_] = V, n.pointShadowMap[_] = $, n.pointShadowMatrix[_] = L.shadow.matrix, b++;
          }
          n.point[_] = z, _++;
        } else if (L.isHemisphereLight) {
          const z = e.get(L);
          z.skyColor.copy(L.color).multiplyScalar(k), z.groundColor.copy(L.groundColor).multiplyScalar(k), n.hemi[f] = z, f++;
        }
      }
      m > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ie.LTC_FLOAT_1, n.rectAreaLTC2 = ie.LTC_FLOAT_2) : (n.rectAreaLTC1 = ie.LTC_HALF_1, n.rectAreaLTC2 = ie.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
      const F = n.hash;
      (F.directionalLength !== p || F.pointLength !== _ || F.spotLength !== g || F.rectAreaLength !== m || F.hemiLength !== f || F.numDirectionalShadows !== M || F.numPointShadows !== b || F.numSpotShadows !== E || F.numSpotMaps !== N || F.numLightProbes !== C) && (n.directional.length = p, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = f, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = E + N - A, n.spotLightMap.length = N, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = C, F.directionalLength = p, F.pointLength = _, F.spotLength = g, F.rectAreaLength = m, F.hemiLength = f, F.numDirectionalShadows = M, F.numPointShadows = b, F.numSpotShadows = E, F.numSpotMaps = N, F.numLightProbes = C, n.version = ux++);
    }
    function l(c, h) {
      let u = 0, d = 0, p = 0, _ = 0, g = 0;
      const m = h.matrixWorldInverse;
      for (let f = 0, M = c.length; f < M; f++) {
        const b = c[f];
        if (b.isDirectionalLight) {
          const E = n.directional[u];
          E.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(m), u++;
        } else if (b.isSpotLight) {
          const E = n.spot[p];
          E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(m), E.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(m), p++;
        } else if (b.isRectAreaLight) {
          const E = n.rectArea[_];
          E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(m), o.identity(), r.copy(b.matrixWorld), r.premultiply(m), o.extractRotation(r), E.halfWidth.set(b.width * 0.5, 0, 0), E.halfHeight.set(0, b.height * 0.5, 0), E.halfWidth.applyMatrix4(o), E.halfHeight.applyMatrix4(o), _++;
        } else if (b.isPointLight) {
          const E = n.point[d];
          E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(m), d++;
        } else if (b.isHemisphereLight) {
          const E = n.hemi[g];
          E.direction.setFromMatrixPosition(b.matrixWorld), E.direction.transformDirection(m), g++;
        }
      }
    }
    return {
      setup: a,
      setupView: l,
      state: n
    };
  }
  function mh(i) {
    const e = new px(i), t = [], n = [];
    function s(h) {
      c.camera = h, t.length = 0, n.length = 0;
    }
    function r(h) {
      t.push(h);
    }
    function o(h) {
      n.push(h);
    }
    function a() {
      e.setup(t);
    }
    function l(h) {
      e.setupView(t, h);
    }
    const c = {
      lightsArray: t,
      shadowsArray: n,
      camera: null,
      lights: e,
      transmissionRenderTarget: {}
    };
    return {
      init: s,
      state: c,
      setupLights: a,
      setupLightsView: l,
      pushLight: r,
      pushShadow: o
    };
  }
  function fx(i) {
    let e = /* @__PURE__ */ new WeakMap();
    function t(s, r = 0) {
      const o = e.get(s);
      let a;
      return o === void 0 ? (a = new mh(i), e.set(s, [
        a
      ])) : r >= o.length ? (a = new mh(i), o.push(a)) : a = o[r], a;
    }
    function n() {
      e = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: t,
      dispose: n
    };
  }
  class mx extends xn {
    constructor(e) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = $p, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
    }
  }
  class _x extends xn {
    constructor(e) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
    }
  }
  const gx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, vx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
  function xx(i, e, t) {
    let n = new Cl();
    const s = new ye(), r = new ye(), o = new nt(), a = new mx({
      depthPacking: Zp
    }), l = new _x(), c = {}, h = t.maxTextureSize, u = {
      [Wn]: Ht,
      [Ht]: Wn,
      [_n]: _n
    }, d = new pi({
      defines: {
        VSM_SAMPLES: 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new ye()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: gx,
      fragmentShader: vx
    }), p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const _ = new dn();
    _.setAttribute("position", new Rt(new Float32Array([
      -1,
      -1,
      0.5,
      3,
      -1,
      0.5,
      -1,
      3,
      0.5
    ]), 3));
    const g = new Vt(_, d), m = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = _u;
    let f = this.type;
    this.render = function(A, C, F) {
      if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || A.length === 0) return;
      const S = i.getRenderTarget(), y = i.getActiveCubeFace(), L = i.getActiveMipmapLevel(), X = i.state;
      X.setBlending(hi), X.buffers.color.setClear(1, 1, 1, 1), X.buffers.depth.setTest(true), X.setScissorTest(false);
      const k = f !== On && this.type === On, H = f === On && this.type !== On;
      for (let $ = 0, z = A.length; $ < z; $++) {
        const Z = A[$], V = Z.shadow;
        if (V === void 0) {
          console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
          continue;
        }
        if (V.autoUpdate === false && V.needsUpdate === false) continue;
        s.copy(V.mapSize);
        const oe = V.getFrameExtents();
        if (s.multiply(oe), r.copy(V.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / oe.x), s.x = r.x * oe.x, V.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / oe.y), s.y = r.y * oe.y, V.mapSize.y = r.y)), V.map === null || k === true || H === true) {
          const me = this.type !== On ? {
            minFilter: Ot,
            magFilter: Ot
          } : {};
          V.map !== null && V.map.dispose(), V.map = new Pi(s.x, s.y, me), V.map.texture.name = Z.name + ".shadowMap", V.camera.updateProjectionMatrix();
        }
        i.setRenderTarget(V.map), i.clear();
        const he = V.getViewportCount();
        for (let me = 0; me < he; me++) {
          const Be = V.getViewport(me);
          o.set(r.x * Be.x, r.y * Be.y, r.x * Be.z, r.y * Be.w), X.viewport(o), V.updateMatrices(Z, me), n = V.getFrustum(), E(C, F, V.camera, Z, this.type);
        }
        V.isPointLightShadow !== true && this.type === On && M(V, F), V.needsUpdate = false;
      }
      f = this.type, m.needsUpdate = false, i.setRenderTarget(S, y, L);
    };
    function M(A, C) {
      const F = e.update(g);
      d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, p.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = true, p.needsUpdate = true), A.mapPass === null && (A.mapPass = new Pi(s.x, s.y)), d.uniforms.shadow_pass.value = A.map.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(C, null, F, d, g, null), p.uniforms.shadow_pass.value = A.mapPass.texture, p.uniforms.resolution.value = A.mapSize, p.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(C, null, F, p, g, null);
    }
    function b(A, C, F, S) {
      let y = null;
      const L = F.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
      if (L !== void 0) y = L;
      else if (y = F.isPointLight === true ? l : a, i.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
        const X = y.uuid, k = C.uuid;
        let H = c[X];
        H === void 0 && (H = {}, c[X] = H);
        let $ = H[k];
        $ === void 0 && ($ = y.clone(), H[k] = $, C.addEventListener("dispose", N)), y = $;
      }
      if (y.visible = C.visible, y.wireframe = C.wireframe, S === On ? y.side = C.shadowSide !== null ? C.shadowSide : C.side : y.side = C.shadowSide !== null ? C.shadowSide : u[C.side], y.alphaMap = C.alphaMap, y.alphaTest = C.alphaTest, y.map = C.map, y.clipShadows = C.clipShadows, y.clippingPlanes = C.clippingPlanes, y.clipIntersection = C.clipIntersection, y.displacementMap = C.displacementMap, y.displacementScale = C.displacementScale, y.displacementBias = C.displacementBias, y.wireframeLinewidth = C.wireframeLinewidth, y.linewidth = C.linewidth, F.isPointLight === true && y.isMeshDistanceMaterial === true) {
        const X = i.properties.get(y);
        X.light = F;
      }
      return y;
    }
    function E(A, C, F, S, y) {
      if (A.visible === false) return;
      if (A.layers.test(C.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && y === On) && (!A.frustumCulled || n.intersectsObject(A))) {
        A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, A.matrixWorld);
        const k = e.update(A), H = A.material;
        if (Array.isArray(H)) {
          const $ = k.groups;
          for (let z = 0, Z = $.length; z < Z; z++) {
            const V = $[z], oe = H[V.materialIndex];
            if (oe && oe.visible) {
              const he = b(A, oe, S, y);
              A.onBeforeShadow(i, A, C, F, k, he, V), i.renderBufferDirect(F, null, k, he, A, V), A.onAfterShadow(i, A, C, F, k, he, V);
            }
          }
        } else if (H.visible) {
          const $ = b(A, H, S, y);
          A.onBeforeShadow(i, A, C, F, k, $, null), i.renderBufferDirect(F, null, k, $, A, null), A.onAfterShadow(i, A, C, F, k, $, null);
        }
      }
      const X = A.children;
      for (let k = 0, H = X.length; k < H; k++) E(X[k], C, F, S, y);
    }
    function N(A) {
      A.target.removeEventListener("dispose", N);
      for (const F in c) {
        const S = c[F], y = A.target.uuid;
        y in S && (S[y].dispose(), delete S[y]);
      }
    }
  }
  function yx(i) {
    function e() {
      let P = false;
      const ee = new nt();
      let W = null;
      const j = new nt(0, 0, 0, 0);
      return {
        setMask: function(ne) {
          W !== ne && !P && (i.colorMask(ne, ne, ne, ne), W = ne);
        },
        setLocked: function(ne) {
          P = ne;
        },
        setClear: function(ne, be, Ve, dt, wt) {
          wt === true && (ne *= dt, be *= dt, Ve *= dt), ee.set(ne, be, Ve, dt), j.equals(ee) === false && (i.clearColor(ne, be, Ve, dt), j.copy(ee));
        },
        reset: function() {
          P = false, W = null, j.set(-1, 0, 0, 0);
        }
      };
    }
    function t() {
      let P = false, ee = null, W = null, j = null;
      return {
        setTest: function(ne) {
          ne ? fe(i.DEPTH_TEST) : le(i.DEPTH_TEST);
        },
        setMask: function(ne) {
          ee !== ne && !P && (i.depthMask(ne), ee = ne);
        },
        setFunc: function(ne) {
          if (W !== ne) {
            switch (ne) {
              case Rp:
                i.depthFunc(i.NEVER);
                break;
              case Pp:
                i.depthFunc(i.ALWAYS);
                break;
              case Lp:
                i.depthFunc(i.LESS);
                break;
              case no:
                i.depthFunc(i.LEQUAL);
                break;
              case Ip:
                i.depthFunc(i.EQUAL);
                break;
              case Dp:
                i.depthFunc(i.GEQUAL);
                break;
              case Np:
                i.depthFunc(i.GREATER);
                break;
              case Up:
                i.depthFunc(i.NOTEQUAL);
                break;
              default:
                i.depthFunc(i.LEQUAL);
            }
            W = ne;
          }
        },
        setLocked: function(ne) {
          P = ne;
        },
        setClear: function(ne) {
          j !== ne && (i.clearDepth(ne), j = ne);
        },
        reset: function() {
          P = false, ee = null, W = null, j = null;
        }
      };
    }
    function n() {
      let P = false, ee = null, W = null, j = null, ne = null, be = null, Ve = null, dt = null, wt = null;
      return {
        setTest: function(Xe) {
          P || (Xe ? fe(i.STENCIL_TEST) : le(i.STENCIL_TEST));
        },
        setMask: function(Xe) {
          ee !== Xe && !P && (i.stencilMask(Xe), ee = Xe);
        },
        setFunc: function(Xe, Cn, fn) {
          (W !== Xe || j !== Cn || ne !== fn) && (i.stencilFunc(Xe, Cn, fn), W = Xe, j = Cn, ne = fn);
        },
        setOp: function(Xe, Cn, fn) {
          (be !== Xe || Ve !== Cn || dt !== fn) && (i.stencilOp(Xe, Cn, fn), be = Xe, Ve = Cn, dt = fn);
        },
        setLocked: function(Xe) {
          P = Xe;
        },
        setClear: function(Xe) {
          wt !== Xe && (i.clearStencil(Xe), wt = Xe);
        },
        reset: function() {
          P = false, ee = null, W = null, j = null, ne = null, be = null, Ve = null, dt = null, wt = null;
        }
      };
    }
    const s = new e(), r = new t(), o = new n(), a = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
    let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], p = null, _ = false, g = null, m = null, f = null, M = null, b = null, E = null, N = null, A = new Ae(0, 0, 0), C = 0, F = false, S = null, y = null, L = null, X = null, k = null;
    const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let $ = false, z = 0;
    const Z = i.getParameter(i.VERSION);
    Z.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(Z)[1]), $ = z >= 1) : Z.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), $ = z >= 2);
    let V = null, oe = {};
    const he = i.getParameter(i.SCISSOR_BOX), me = i.getParameter(i.VIEWPORT), Be = new nt().fromArray(he), Qe = new nt().fromArray(me);
    function G(P, ee, W, j) {
      const ne = new Uint8Array(4), be = i.createTexture();
      i.bindTexture(P, be), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
      for (let Ve = 0; Ve < W; Ve++) P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(ee, 0, i.RGBA, 1, 1, j, 0, i.RGBA, i.UNSIGNED_BYTE, ne) : i.texImage2D(ee + Ve, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ne);
      return be;
    }
    const J = {};
    J[i.TEXTURE_2D] = G(i.TEXTURE_2D, i.TEXTURE_2D, 1), J[i.TEXTURE_CUBE_MAP] = G(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), J[i.TEXTURE_2D_ARRAY] = G(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), J[i.TEXTURE_3D] = G(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), r.setClear(1), o.setClear(0), fe(i.DEPTH_TEST), r.setFunc(no), et(false), ve(yc), fe(i.CULL_FACE), ht(hi);
    function fe(P) {
      c[P] !== true && (i.enable(P), c[P] = true);
    }
    function le(P) {
      c[P] !== false && (i.disable(P), c[P] = false);
    }
    function Se(P, ee) {
      return h[P] !== ee ? (i.bindFramebuffer(P, ee), h[P] = ee, P === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = ee), P === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = ee), true) : false;
    }
    function Re(P, ee) {
      let W = d, j = false;
      if (P) {
        W = u.get(ee), W === void 0 && (W = [], u.set(ee, W));
        const ne = P.textures;
        if (W.length !== ne.length || W[0] !== i.COLOR_ATTACHMENT0) {
          for (let be = 0, Ve = ne.length; be < Ve; be++) W[be] = i.COLOR_ATTACHMENT0 + be;
          W.length = ne.length, j = true;
        }
      } else W[0] !== i.BACK && (W[0] = i.BACK, j = true);
      j && i.drawBuffers(W);
    }
    function Fe(P) {
      return p !== P ? (i.useProgram(P), p = P, true) : false;
    }
    const at = {
      [Ti]: i.FUNC_ADD,
      [dp]: i.FUNC_SUBTRACT,
      [pp]: i.FUNC_REVERSE_SUBTRACT
    };
    at[fp] = i.MIN, at[mp] = i.MAX;
    const T = {
      [_p]: i.ZERO,
      [gp]: i.ONE,
      [vp]: i.SRC_COLOR,
      [Aa]: i.SRC_ALPHA,
      [Ep]: i.SRC_ALPHA_SATURATE,
      [Mp]: i.DST_COLOR,
      [yp]: i.DST_ALPHA,
      [xp]: i.ONE_MINUS_SRC_COLOR,
      [Ca]: i.ONE_MINUS_SRC_ALPHA,
      [Sp]: i.ONE_MINUS_DST_COLOR,
      [bp]: i.ONE_MINUS_DST_ALPHA,
      [wp]: i.CONSTANT_COLOR,
      [Tp]: i.ONE_MINUS_CONSTANT_COLOR,
      [Ap]: i.CONSTANT_ALPHA,
      [Cp]: i.ONE_MINUS_CONSTANT_ALPHA
    };
    function ht(P, ee, W, j, ne, be, Ve, dt, wt, Xe) {
      if (P === hi) {
        _ === true && (le(i.BLEND), _ = false);
        return;
      }
      if (_ === false && (fe(i.BLEND), _ = true), P !== up) {
        if (P !== g || Xe !== F) {
          if ((m !== Ti || b !== Ti) && (i.blendEquation(i.FUNC_ADD), m = Ti, b = Ti), Xe) switch (P) {
            case as:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case bc:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Mc:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Sc:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
          else switch (P) {
            case as:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case bc:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Mc:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Sc:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
          f = null, M = null, E = null, N = null, A.set(0, 0, 0), C = 0, g = P, F = Xe;
        }
        return;
      }
      ne = ne || ee, be = be || W, Ve = Ve || j, (ee !== m || ne !== b) && (i.blendEquationSeparate(at[ee], at[ne]), m = ee, b = ne), (W !== f || j !== M || be !== E || Ve !== N) && (i.blendFuncSeparate(T[W], T[j], T[be], T[Ve]), f = W, M = j, E = be, N = Ve), (dt.equals(A) === false || wt !== C) && (i.blendColor(dt.r, dt.g, dt.b, wt), A.copy(dt), C = wt), g = P, F = false;
    }
    function Ze(P, ee) {
      P.side === _n ? le(i.CULL_FACE) : fe(i.CULL_FACE);
      let W = P.side === Ht;
      ee && (W = !W), et(W), P.blending === as && P.transparent === false ? ht(hi) : ht(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), r.setFunc(P.depthFunc), r.setTest(P.depthTest), r.setMask(P.depthWrite), s.setMask(P.colorWrite);
      const j = P.stencilWrite;
      o.setTest(j), j && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), Te(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === true ? fe(i.SAMPLE_ALPHA_TO_COVERAGE) : le(i.SAMPLE_ALPHA_TO_COVERAGE);
    }
    function et(P) {
      S !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), S = P);
    }
    function ve(P) {
      P !== cp ? (fe(i.CULL_FACE), P !== y && (P === yc ? i.cullFace(i.BACK) : P === hp ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : le(i.CULL_FACE), y = P;
    }
    function ut(P) {
      P !== L && ($ && i.lineWidth(P), L = P);
    }
    function Te(P, ee, W) {
      P ? (fe(i.POLYGON_OFFSET_FILL), (X !== ee || k !== W) && (i.polygonOffset(ee, W), X = ee, k = W)) : le(i.POLYGON_OFFSET_FILL);
    }
    function Pe(P) {
      P ? fe(i.SCISSOR_TEST) : le(i.SCISSOR_TEST);
    }
    function w(P) {
      P === void 0 && (P = i.TEXTURE0 + H - 1), V !== P && (i.activeTexture(P), V = P);
    }
    function v(P, ee, W) {
      W === void 0 && (V === null ? W = i.TEXTURE0 + H - 1 : W = V);
      let j = oe[W];
      j === void 0 && (j = {
        type: void 0,
        texture: void 0
      }, oe[W] = j), (j.type !== P || j.texture !== ee) && (V !== W && (i.activeTexture(W), V = W), i.bindTexture(P, ee || J[P]), j.type = P, j.texture = ee);
    }
    function B() {
      const P = oe[V];
      P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
    }
    function K() {
      try {
        i.compressedTexImage2D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function Y() {
      try {
        i.compressedTexImage3D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function q() {
      try {
        i.texSubImage2D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function xe() {
      try {
        i.texSubImage3D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function se() {
      try {
        i.compressedTexSubImage2D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function ce() {
      try {
        i.compressedTexSubImage3D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function Ie() {
      try {
        i.texStorage2D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function Q() {
      try {
        i.texStorage3D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function ae() {
      try {
        i.texImage2D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function ke() {
      try {
        i.texImage3D.apply(i, arguments);
      } catch (P) {
        console.error("THREE.WebGLState:", P);
      }
    }
    function we(P) {
      Be.equals(P) === false && (i.scissor(P.x, P.y, P.z, P.w), Be.copy(P));
    }
    function ue(P) {
      Qe.equals(P) === false && (i.viewport(P.x, P.y, P.z, P.w), Qe.copy(P));
    }
    function Ce(P, ee) {
      let W = l.get(ee);
      W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(ee, W));
      let j = W.get(P);
      j === void 0 && (j = i.getUniformBlockIndex(ee, P.name), W.set(P, j));
    }
    function Ue(P, ee) {
      const j = l.get(ee).get(P);
      a.get(ee) !== j && (i.uniformBlockBinding(ee, j, P.__bindingPointIndex), a.set(ee, j));
    }
    function st() {
      i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), c = {}, V = null, oe = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], p = null, _ = false, g = null, m = null, f = null, M = null, b = null, E = null, N = null, A = new Ae(0, 0, 0), C = 0, F = false, S = null, y = null, L = null, X = null, k = null, Be.set(0, 0, i.canvas.width, i.canvas.height), Qe.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), r.reset(), o.reset();
    }
    return {
      buffers: {
        color: s,
        depth: r,
        stencil: o
      },
      enable: fe,
      disable: le,
      bindFramebuffer: Se,
      drawBuffers: Re,
      useProgram: Fe,
      setBlending: ht,
      setMaterial: Ze,
      setFlipSided: et,
      setCullFace: ve,
      setLineWidth: ut,
      setPolygonOffset: Te,
      setScissorTest: Pe,
      activeTexture: w,
      bindTexture: v,
      unbindTexture: B,
      compressedTexImage2D: K,
      compressedTexImage3D: Y,
      texImage2D: ae,
      texImage3D: ke,
      updateUBOMapping: Ce,
      uniformBlockBinding: Ue,
      texStorage2D: Ie,
      texStorage3D: Q,
      texSubImage2D: q,
      texSubImage3D: xe,
      compressedTexSubImage2D: se,
      compressedTexSubImage3D: ce,
      scissor: we,
      viewport: ue,
      reset: st
    };
  }
  function _h(i, e, t, n) {
    const s = bx(n);
    switch (t) {
      case wu:
        return i * e;
      case Au:
        return i * e;
      case Cu:
        return i * e * 2;
      case bl:
        return i * e / s.components * s.byteLength;
      case Ml:
        return i * e / s.components * s.byteLength;
      case Ru:
        return i * e * 2 / s.components * s.byteLength;
      case Sl:
        return i * e * 2 / s.components * s.byteLength;
      case Tu:
        return i * e * 3 / s.components * s.byteLength;
      case tn:
        return i * e * 4 / s.components * s.byteLength;
      case El:
        return i * e * 4 / s.components * s.byteLength;
      case Kr:
      case qr:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case Yr:
      case $r:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case Ia:
      case Na:
        return Math.max(i, 16) * Math.max(e, 8) / 4;
      case La:
      case Da:
        return Math.max(i, 8) * Math.max(e, 8) / 2;
      case Ua:
      case Oa:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case Fa:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case Ba:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case ka:
        return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
      case Va:
        return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
      case za:
        return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
      case Ha:
        return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
      case Ga:
        return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
      case Wa:
        return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
      case Xa:
        return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
      case ja:
        return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
      case Ka:
        return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
      case qa:
        return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
      case Ya:
        return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
      case $a:
        return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
      case Za:
        return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
      case Zr:
      case Ja:
      case Qa:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
      case Pu:
      case el:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
      case tl:
      case nl:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${t} format.`);
  }
  function bx(i) {
    switch (i) {
      case Xn:
      case Mu:
        return {
          byteLength: 1,
          components: 1
        };
      case Zs:
      case Su:
      case rr:
        return {
          byteLength: 2,
          components: 1
        };
      case xl:
      case yl:
        return {
          byteLength: 2,
          components: 4
        };
      case Ri:
      case vl:
      case hn:
        return {
          byteLength: 4,
          components: 1
        };
      case Eu:
        return {
          byteLength: 4,
          components: 3
        };
    }
    throw new Error(`Unknown texture type ${i}.`);
  }
  function Mx(i, e, t, n, s, r, o) {
    const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new ye(), h = /* @__PURE__ */ new WeakMap();
    let u;
    const d = /* @__PURE__ */ new WeakMap();
    let p = false;
    try {
      p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch {
    }
    function _(w, v) {
      return p ? new OffscreenCanvas(w, v) : er("canvas");
    }
    function g(w, v, B) {
      let K = 1;
      const Y = Pe(w);
      if ((Y.width > B || Y.height > B) && (K = B / Math.max(Y.width, Y.height)), K < 1) if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap || typeof VideoFrame < "u" && w instanceof VideoFrame) {
        const q = Math.floor(K * Y.width), xe = Math.floor(K * Y.height);
        u === void 0 && (u = _(q, xe));
        const se = v ? _(q, xe) : u;
        return se.width = q, se.height = xe, se.getContext("2d").drawImage(w, 0, 0, q, xe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + q + "x" + xe + ")."), se;
      } else return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), w;
      return w;
    }
    function m(w) {
      return w.generateMipmaps && w.minFilter !== Ot && w.minFilter !== qt;
    }
    function f(w) {
      i.generateMipmap(w);
    }
    function M(w, v, B, K, Y = false) {
      if (w !== null) {
        if (i[w] !== void 0) return i[w];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
      }
      let q = v;
      if (v === i.RED && (B === i.FLOAT && (q = i.R32F), B === i.HALF_FLOAT && (q = i.R16F), B === i.UNSIGNED_BYTE && (q = i.R8)), v === i.RED_INTEGER && (B === i.UNSIGNED_BYTE && (q = i.R8UI), B === i.UNSIGNED_SHORT && (q = i.R16UI), B === i.UNSIGNED_INT && (q = i.R32UI), B === i.BYTE && (q = i.R8I), B === i.SHORT && (q = i.R16I), B === i.INT && (q = i.R32I)), v === i.RG && (B === i.FLOAT && (q = i.RG32F), B === i.HALF_FLOAT && (q = i.RG16F), B === i.UNSIGNED_BYTE && (q = i.RG8)), v === i.RG_INTEGER && (B === i.UNSIGNED_BYTE && (q = i.RG8UI), B === i.UNSIGNED_SHORT && (q = i.RG16UI), B === i.UNSIGNED_INT && (q = i.RG32UI), B === i.BYTE && (q = i.RG8I), B === i.SHORT && (q = i.RG16I), B === i.INT && (q = i.RG32I)), v === i.RGB && B === i.UNSIGNED_INT_5_9_9_9_REV && (q = i.RGB9_E5), v === i.RGBA) {
        const xe = Y ? ro : ze.getTransfer(K);
        B === i.FLOAT && (q = i.RGBA32F), B === i.HALF_FLOAT && (q = i.RGBA16F), B === i.UNSIGNED_BYTE && (q = xe === it ? i.SRGB8_ALPHA8 : i.RGBA8), B === i.UNSIGNED_SHORT_4_4_4_4 && (q = i.RGBA4), B === i.UNSIGNED_SHORT_5_5_5_1 && (q = i.RGB5_A1);
      }
      return (q === i.R16F || q === i.R32F || q === i.RG16F || q === i.RG32F || q === i.RGBA16F || q === i.RGBA32F) && e.get("EXT_color_buffer_float"), q;
    }
    function b(w, v) {
      let B;
      return w ? v === null || v === Ri || v === gs ? B = i.DEPTH24_STENCIL8 : v === hn ? B = i.DEPTH32F_STENCIL8 : v === Zs && (B = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === Ri || v === gs ? B = i.DEPTH_COMPONENT24 : v === hn ? B = i.DEPTH_COMPONENT32F : v === Zs && (B = i.DEPTH_COMPONENT16), B;
    }
    function E(w, v) {
      return m(w) === true || w.isFramebufferTexture && w.minFilter !== Ot && w.minFilter !== qt ? Math.log2(Math.max(v.width, v.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? v.mipmaps.length : 1;
    }
    function N(w) {
      const v = w.target;
      v.removeEventListener("dispose", N), C(v), v.isVideoTexture && h.delete(v);
    }
    function A(w) {
      const v = w.target;
      v.removeEventListener("dispose", A), S(v);
    }
    function C(w) {
      const v = n.get(w);
      if (v.__webglInit === void 0) return;
      const B = w.source, K = d.get(B);
      if (K) {
        const Y = K[v.__cacheKey];
        Y.usedTimes--, Y.usedTimes === 0 && F(w), Object.keys(K).length === 0 && d.delete(B);
      }
      n.remove(w);
    }
    function F(w) {
      const v = n.get(w);
      i.deleteTexture(v.__webglTexture);
      const B = w.source, K = d.get(B);
      delete K[v.__cacheKey], o.memory.textures--;
    }
    function S(w) {
      const v = n.get(w);
      if (w.depthTexture && w.depthTexture.dispose(), w.isWebGLCubeRenderTarget) for (let K = 0; K < 6; K++) {
        if (Array.isArray(v.__webglFramebuffer[K])) for (let Y = 0; Y < v.__webglFramebuffer[K].length; Y++) i.deleteFramebuffer(v.__webglFramebuffer[K][Y]);
        else i.deleteFramebuffer(v.__webglFramebuffer[K]);
        v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[K]);
      }
      else {
        if (Array.isArray(v.__webglFramebuffer)) for (let K = 0; K < v.__webglFramebuffer.length; K++) i.deleteFramebuffer(v.__webglFramebuffer[K]);
        else i.deleteFramebuffer(v.__webglFramebuffer);
        if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let K = 0; K < v.__webglColorRenderbuffer.length; K++) v.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);
        v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
      }
      const B = w.textures;
      for (let K = 0, Y = B.length; K < Y; K++) {
        const q = n.get(B[K]);
        q.__webglTexture && (i.deleteTexture(q.__webglTexture), o.memory.textures--), n.remove(B[K]);
      }
      n.remove(w);
    }
    let y = 0;
    function L() {
      y = 0;
    }
    function X() {
      const w = y;
      return w >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + s.maxTextures), y += 1, w;
    }
    function k(w) {
      const v = [];
      return v.push(w.wrapS), v.push(w.wrapT), v.push(w.wrapR || 0), v.push(w.magFilter), v.push(w.minFilter), v.push(w.anisotropy), v.push(w.internalFormat), v.push(w.format), v.push(w.type), v.push(w.generateMipmaps), v.push(w.premultiplyAlpha), v.push(w.flipY), v.push(w.unpackAlignment), v.push(w.colorSpace), v.join();
    }
    function H(w, v) {
      const B = n.get(w);
      if (w.isVideoTexture && ut(w), w.isRenderTargetTexture === false && w.version > 0 && B.__version !== w.version) {
        const K = w.image;
        if (K === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else if (K.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        else {
          Qe(B, w, v);
          return;
        }
      }
      t.bindTexture(i.TEXTURE_2D, B.__webglTexture, i.TEXTURE0 + v);
    }
    function $(w, v) {
      const B = n.get(w);
      if (w.version > 0 && B.__version !== w.version) {
        Qe(B, w, v);
        return;
      }
      t.bindTexture(i.TEXTURE_2D_ARRAY, B.__webglTexture, i.TEXTURE0 + v);
    }
    function z(w, v) {
      const B = n.get(w);
      if (w.version > 0 && B.__version !== w.version) {
        Qe(B, w, v);
        return;
      }
      t.bindTexture(i.TEXTURE_3D, B.__webglTexture, i.TEXTURE0 + v);
    }
    function Z(w, v) {
      const B = n.get(w);
      if (w.version > 0 && B.__version !== w.version) {
        G(B, w, v);
        return;
      }
      t.bindTexture(i.TEXTURE_CUBE_MAP, B.__webglTexture, i.TEXTURE0 + v);
    }
    const V = {
      [_s]: i.REPEAT,
      [ai]: i.CLAMP_TO_EDGE,
      [io]: i.MIRRORED_REPEAT
    }, oe = {
      [Ot]: i.NEAREST,
      [bu]: i.NEAREST_MIPMAP_NEAREST,
      [js]: i.NEAREST_MIPMAP_LINEAR,
      [qt]: i.LINEAR,
      [jr]: i.LINEAR_MIPMAP_NEAREST,
      [Bn]: i.LINEAR_MIPMAP_LINEAR
    }, he = {
      [Qp]: i.NEVER,
      [of]: i.ALWAYS,
      [ef]: i.LESS,
      [Du]: i.LEQUAL,
      [tf]: i.EQUAL,
      [rf]: i.GEQUAL,
      [nf]: i.GREATER,
      [sf]: i.NOTEQUAL
    };
    function me(w, v) {
      if (v.type === hn && e.has("OES_texture_float_linear") === false && (v.magFilter === qt || v.magFilter === jr || v.magFilter === js || v.magFilter === Bn || v.minFilter === qt || v.minFilter === jr || v.minFilter === js || v.minFilter === Bn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(w, i.TEXTURE_WRAP_S, V[v.wrapS]), i.texParameteri(w, i.TEXTURE_WRAP_T, V[v.wrapT]), (w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY) && i.texParameteri(w, i.TEXTURE_WRAP_R, V[v.wrapR]), i.texParameteri(w, i.TEXTURE_MAG_FILTER, oe[v.magFilter]), i.texParameteri(w, i.TEXTURE_MIN_FILTER, oe[v.minFilter]), v.compareFunction && (i.texParameteri(w, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(w, i.TEXTURE_COMPARE_FUNC, he[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
        if (v.magFilter === Ot || v.minFilter !== js && v.minFilter !== Bn || v.type === hn && e.has("OES_texture_float_linear") === false) return;
        if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
          const B = e.get("EXT_texture_filter_anisotropic");
          i.texParameterf(w, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, s.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
        }
      }
    }
    function Be(w, v) {
      let B = false;
      w.__webglInit === void 0 && (w.__webglInit = true, v.addEventListener("dispose", N));
      const K = v.source;
      let Y = d.get(K);
      Y === void 0 && (Y = {}, d.set(K, Y));
      const q = k(v);
      if (q !== w.__cacheKey) {
        Y[q] === void 0 && (Y[q] = {
          texture: i.createTexture(),
          usedTimes: 0
        }, o.memory.textures++, B = true), Y[q].usedTimes++;
        const xe = Y[w.__cacheKey];
        xe !== void 0 && (Y[w.__cacheKey].usedTimes--, xe.usedTimes === 0 && F(v)), w.__cacheKey = q, w.__webglTexture = Y[q].texture;
      }
      return B;
    }
    function Qe(w, v, B) {
      let K = i.TEXTURE_2D;
      (v.isDataArrayTexture || v.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (K = i.TEXTURE_3D);
      const Y = Be(w, v), q = v.source;
      t.bindTexture(K, w.__webglTexture, i.TEXTURE0 + B);
      const xe = n.get(q);
      if (q.version !== xe.__version || Y === true) {
        t.activeTexture(i.TEXTURE0 + B);
        const se = ze.getPrimaries(ze.workingColorSpace), ce = v.colorSpace === oi ? null : ze.getPrimaries(v.colorSpace), Ie = v.colorSpace === oi || se === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ie);
        let Q = g(v.image, false, s.maxTextureSize);
        Q = Te(v, Q);
        const ae = r.convert(v.format, v.colorSpace), ke = r.convert(v.type);
        let we = M(v.internalFormat, ae, ke, v.colorSpace, v.isVideoTexture);
        me(K, v);
        let ue;
        const Ce = v.mipmaps, Ue = v.isVideoTexture !== true, st = xe.__version === void 0 || Y === true, P = q.dataReady, ee = E(v, Q);
        if (v.isDepthTexture) we = b(v.format === vs, v.type), st && (Ue ? t.texStorage2D(i.TEXTURE_2D, 1, we, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, we, Q.width, Q.height, 0, ae, ke, null));
        else if (v.isDataTexture) if (Ce.length > 0) {
          Ue && st && t.texStorage2D(i.TEXTURE_2D, ee, we, Ce[0].width, Ce[0].height);
          for (let W = 0, j = Ce.length; W < j; W++) ue = Ce[W], Ue ? P && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ue.width, ue.height, ae, ke, ue.data) : t.texImage2D(i.TEXTURE_2D, W, we, ue.width, ue.height, 0, ae, ke, ue.data);
          v.generateMipmaps = false;
        } else Ue ? (st && t.texStorage2D(i.TEXTURE_2D, ee, we, Q.width, Q.height), P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, ae, ke, Q.data)) : t.texImage2D(i.TEXTURE_2D, 0, we, Q.width, Q.height, 0, ae, ke, Q.data);
        else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
          Ue && st && t.texStorage3D(i.TEXTURE_2D_ARRAY, ee, we, Ce[0].width, Ce[0].height, Q.depth);
          for (let W = 0, j = Ce.length; W < j; W++) if (ue = Ce[W], v.format !== tn) if (ae !== null) if (Ue) {
            if (P) if (v.layerUpdates.size > 0) {
              const ne = _h(ue.width, ue.height, v.format, v.type);
              for (const be of v.layerUpdates) {
                const Ve = ue.data.subarray(be * ne / ue.data.BYTES_PER_ELEMENT, (be + 1) * ne / ue.data.BYTES_PER_ELEMENT);
                t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, be, ue.width, ue.height, 1, ae, Ve, 0, 0);
              }
              v.clearLayerUpdates();
            } else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ue.width, ue.height, Q.depth, ae, ue.data, 0, 0);
          } else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, W, we, ue.width, ue.height, Q.depth, 0, ue.data, 0, 0);
          else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else Ue ? P && t.texSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ue.width, ue.height, Q.depth, ae, ke, ue.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, W, we, ue.width, ue.height, Q.depth, 0, ae, ke, ue.data);
        } else {
          Ue && st && t.texStorage2D(i.TEXTURE_2D, ee, we, Ce[0].width, Ce[0].height);
          for (let W = 0, j = Ce.length; W < j; W++) ue = Ce[W], v.format !== tn ? ae !== null ? Ue ? P && t.compressedTexSubImage2D(i.TEXTURE_2D, W, 0, 0, ue.width, ue.height, ae, ue.data) : t.compressedTexImage2D(i.TEXTURE_2D, W, we, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ue ? P && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ue.width, ue.height, ae, ke, ue.data) : t.texImage2D(i.TEXTURE_2D, W, we, ue.width, ue.height, 0, ae, ke, ue.data);
        }
        else if (v.isDataArrayTexture) if (Ue) {
          if (st && t.texStorage3D(i.TEXTURE_2D_ARRAY, ee, we, Q.width, Q.height, Q.depth), P) if (v.layerUpdates.size > 0) {
            const W = _h(Q.width, Q.height, v.format, v.type);
            for (const j of v.layerUpdates) {
              const ne = Q.data.subarray(j * W / Q.data.BYTES_PER_ELEMENT, (j + 1) * W / Q.data.BYTES_PER_ELEMENT);
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, j, Q.width, Q.height, 1, ae, ke, ne);
            }
            v.clearLayerUpdates();
          } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, ae, ke, Q.data);
        } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, we, Q.width, Q.height, Q.depth, 0, ae, ke, Q.data);
        else if (v.isData3DTexture) Ue ? (st && t.texStorage3D(i.TEXTURE_3D, ee, we, Q.width, Q.height, Q.depth), P && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, ae, ke, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, we, Q.width, Q.height, Q.depth, 0, ae, ke, Q.data);
        else if (v.isFramebufferTexture) {
          if (st) if (Ue) t.texStorage2D(i.TEXTURE_2D, ee, we, Q.width, Q.height);
          else {
            let W = Q.width, j = Q.height;
            for (let ne = 0; ne < ee; ne++) t.texImage2D(i.TEXTURE_2D, ne, we, W, j, 0, ae, ke, null), W >>= 1, j >>= 1;
          }
        } else if (Ce.length > 0) {
          if (Ue && st) {
            const W = Pe(Ce[0]);
            t.texStorage2D(i.TEXTURE_2D, ee, we, W.width, W.height);
          }
          for (let W = 0, j = Ce.length; W < j; W++) ue = Ce[W], Ue ? P && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ae, ke, ue) : t.texImage2D(i.TEXTURE_2D, W, we, ae, ke, ue);
          v.generateMipmaps = false;
        } else if (Ue) {
          if (st) {
            const W = Pe(Q);
            t.texStorage2D(i.TEXTURE_2D, ee, we, W.width, W.height);
          }
          P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ae, ke, Q);
        } else t.texImage2D(i.TEXTURE_2D, 0, we, ae, ke, Q);
        m(v) && f(K), xe.__version = q.version, v.onUpdate && v.onUpdate(v);
      }
      w.__version = v.version;
    }
    function G(w, v, B) {
      if (v.image.length !== 6) return;
      const K = Be(w, v), Y = v.source;
      t.bindTexture(i.TEXTURE_CUBE_MAP, w.__webglTexture, i.TEXTURE0 + B);
      const q = n.get(Y);
      if (Y.version !== q.__version || K === true) {
        t.activeTexture(i.TEXTURE0 + B);
        const xe = ze.getPrimaries(ze.workingColorSpace), se = v.colorSpace === oi ? null : ze.getPrimaries(v.colorSpace), ce = v.colorSpace === oi || xe === se ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
        const Ie = v.isCompressedTexture || v.image[0].isCompressedTexture, Q = v.image[0] && v.image[0].isDataTexture, ae = [];
        for (let j = 0; j < 6; j++) !Ie && !Q ? ae[j] = g(v.image[j], true, s.maxCubemapSize) : ae[j] = Q ? v.image[j].image : v.image[j], ae[j] = Te(v, ae[j]);
        const ke = ae[0], we = r.convert(v.format, v.colorSpace), ue = r.convert(v.type), Ce = M(v.internalFormat, we, ue, v.colorSpace), Ue = v.isVideoTexture !== true, st = q.__version === void 0 || K === true, P = Y.dataReady;
        let ee = E(v, ke);
        me(i.TEXTURE_CUBE_MAP, v);
        let W;
        if (Ie) {
          Ue && st && t.texStorage2D(i.TEXTURE_CUBE_MAP, ee, Ce, ke.width, ke.height);
          for (let j = 0; j < 6; j++) {
            W = ae[j].mipmaps;
            for (let ne = 0; ne < W.length; ne++) {
              const be = W[ne];
              v.format !== tn ? we !== null ? Ue ? P && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne, 0, 0, be.width, be.height, we, be.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne, Ce, be.width, be.height, 0, be.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ue ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne, 0, 0, be.width, be.height, we, ue, be.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne, Ce, be.width, be.height, 0, we, ue, be.data);
            }
          }
        } else {
          if (W = v.mipmaps, Ue && st) {
            W.length > 0 && ee++;
            const j = Pe(ae[0]);
            t.texStorage2D(i.TEXTURE_CUBE_MAP, ee, Ce, j.width, j.height);
          }
          for (let j = 0; j < 6; j++) if (Q) {
            Ue ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, ae[j].width, ae[j].height, we, ue, ae[j].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ce, ae[j].width, ae[j].height, 0, we, ue, ae[j].data);
            for (let ne = 0; ne < W.length; ne++) {
              const Ve = W[ne].image[j].image;
              Ue ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne + 1, 0, 0, Ve.width, Ve.height, we, ue, Ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne + 1, Ce, Ve.width, Ve.height, 0, we, ue, Ve.data);
            }
          } else {
            Ue ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, we, ue, ae[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ce, we, ue, ae[j]);
            for (let ne = 0; ne < W.length; ne++) {
              const be = W[ne];
              Ue ? P && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne + 1, 0, 0, we, ue, be.image[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, ne + 1, Ce, we, ue, be.image[j]);
            }
          }
        }
        m(v) && f(i.TEXTURE_CUBE_MAP), q.__version = Y.version, v.onUpdate && v.onUpdate(v);
      }
      w.__version = v.version;
    }
    function J(w, v, B, K, Y, q) {
      const xe = r.convert(B.format, B.colorSpace), se = r.convert(B.type), ce = M(B.internalFormat, xe, se, B.colorSpace);
      if (!n.get(v).__hasExternalTextures) {
        const Q = Math.max(1, v.width >> q), ae = Math.max(1, v.height >> q);
        Y === i.TEXTURE_3D || Y === i.TEXTURE_2D_ARRAY ? t.texImage3D(Y, q, ce, Q, ae, v.depth, 0, xe, se, null) : t.texImage2D(Y, q, ce, Q, ae, 0, xe, se, null);
      }
      t.bindFramebuffer(i.FRAMEBUFFER, w), ve(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, Y, n.get(B).__webglTexture, 0, et(v)) : (Y === i.TEXTURE_2D || Y >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, Y, n.get(B).__webglTexture, q), t.bindFramebuffer(i.FRAMEBUFFER, null);
    }
    function fe(w, v, B) {
      if (i.bindRenderbuffer(i.RENDERBUFFER, w), v.depthBuffer) {
        const K = v.depthTexture, Y = K && K.isDepthTexture ? K.type : null, q = b(v.stencilBuffer, Y), xe = v.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, se = et(v);
        ve(v) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, se, q, v.width, v.height) : B ? i.renderbufferStorageMultisample(i.RENDERBUFFER, se, q, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, q, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, xe, i.RENDERBUFFER, w);
      } else {
        const K = v.textures;
        for (let Y = 0; Y < K.length; Y++) {
          const q = K[Y], xe = r.convert(q.format, q.colorSpace), se = r.convert(q.type), ce = M(q.internalFormat, xe, se, q.colorSpace), Ie = et(v);
          B && ve(v) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Ie, ce, v.width, v.height) : ve(v) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Ie, ce, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, ce, v.width, v.height);
        }
      }
      i.bindRenderbuffer(i.RENDERBUFFER, null);
    }
    function le(w, v) {
      if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
      if (t.bindFramebuffer(i.FRAMEBUFFER, w), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), H(v.depthTexture, 0);
      const K = n.get(v.depthTexture).__webglTexture, Y = et(v);
      if (v.depthTexture.format === ls) ve(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
      else if (v.depthTexture.format === vs) ve(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
      else throw new Error("Unknown depthTexture format");
    }
    function Se(w) {
      const v = n.get(w), B = w.isWebGLCubeRenderTarget === true;
      if (v.__boundDepthTexture !== w.depthTexture) {
        const K = w.depthTexture;
        if (v.__depthDisposeCallback && v.__depthDisposeCallback(), K) {
          const Y = () => {
            delete v.__boundDepthTexture, delete v.__depthDisposeCallback, K.removeEventListener("dispose", Y);
          };
          K.addEventListener("dispose", Y), v.__depthDisposeCallback = Y;
        }
        v.__boundDepthTexture = K;
      }
      if (w.depthTexture && !v.__autoAllocateDepthBuffer) {
        if (B) throw new Error("target.depthTexture not supported in Cube render targets");
        le(v.__webglFramebuffer, w);
      } else if (B) {
        v.__webglDepthbuffer = [];
        for (let K = 0; K < 6; K++) if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[K]), v.__webglDepthbuffer[K] === void 0) v.__webglDepthbuffer[K] = i.createRenderbuffer(), fe(v.__webglDepthbuffer[K], w, false);
        else {
          const Y = w.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, q = v.__webglDepthbuffer[K];
          i.bindRenderbuffer(i.RENDERBUFFER, q), i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, q);
        }
      } else if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = i.createRenderbuffer(), fe(v.__webglDepthbuffer, w, false);
      else {
        const K = w.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, Y), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, Y);
      }
      t.bindFramebuffer(i.FRAMEBUFFER, null);
    }
    function Re(w, v, B) {
      const K = n.get(w);
      v !== void 0 && J(K.__webglFramebuffer, w, w.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), B !== void 0 && Se(w);
    }
    function Fe(w) {
      const v = w.texture, B = n.get(w), K = n.get(v);
      w.addEventListener("dispose", A);
      const Y = w.textures, q = w.isWebGLCubeRenderTarget === true, xe = Y.length > 1;
      if (xe || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()), K.__version = v.version, o.memory.textures++), q) {
        B.__webglFramebuffer = [];
        for (let se = 0; se < 6; se++) if (v.mipmaps && v.mipmaps.length > 0) {
          B.__webglFramebuffer[se] = [];
          for (let ce = 0; ce < v.mipmaps.length; ce++) B.__webglFramebuffer[se][ce] = i.createFramebuffer();
        } else B.__webglFramebuffer[se] = i.createFramebuffer();
      } else {
        if (v.mipmaps && v.mipmaps.length > 0) {
          B.__webglFramebuffer = [];
          for (let se = 0; se < v.mipmaps.length; se++) B.__webglFramebuffer[se] = i.createFramebuffer();
        } else B.__webglFramebuffer = i.createFramebuffer();
        if (xe) for (let se = 0, ce = Y.length; se < ce; se++) {
          const Ie = n.get(Y[se]);
          Ie.__webglTexture === void 0 && (Ie.__webglTexture = i.createTexture(), o.memory.textures++);
        }
        if (w.samples > 0 && ve(w) === false) {
          B.__webglMultisampledFramebuffer = i.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
          for (let se = 0; se < Y.length; se++) {
            const ce = Y[se];
            B.__webglColorRenderbuffer[se] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, B.__webglColorRenderbuffer[se]);
            const Ie = r.convert(ce.format, ce.colorSpace), Q = r.convert(ce.type), ae = M(ce.internalFormat, Ie, Q, ce.colorSpace, w.isXRRenderTarget === true), ke = et(w);
            i.renderbufferStorageMultisample(i.RENDERBUFFER, ke, ae, w.width, w.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + se, i.RENDERBUFFER, B.__webglColorRenderbuffer[se]);
          }
          i.bindRenderbuffer(i.RENDERBUFFER, null), w.depthBuffer && (B.__webglDepthRenderbuffer = i.createRenderbuffer(), fe(B.__webglDepthRenderbuffer, w, true)), t.bindFramebuffer(i.FRAMEBUFFER, null);
        }
      }
      if (q) {
        t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), me(i.TEXTURE_CUBE_MAP, v);
        for (let se = 0; se < 6; se++) if (v.mipmaps && v.mipmaps.length > 0) for (let ce = 0; ce < v.mipmaps.length; ce++) J(B.__webglFramebuffer[se][ce], w, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, ce);
        else J(B.__webglFramebuffer[se], w, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
        m(v) && f(i.TEXTURE_CUBE_MAP), t.unbindTexture();
      } else if (xe) {
        for (let se = 0, ce = Y.length; se < ce; se++) {
          const Ie = Y[se], Q = n.get(Ie);
          t.bindTexture(i.TEXTURE_2D, Q.__webglTexture), me(i.TEXTURE_2D, Ie), J(B.__webglFramebuffer, w, Ie, i.COLOR_ATTACHMENT0 + se, i.TEXTURE_2D, 0), m(Ie) && f(i.TEXTURE_2D);
        }
        t.unbindTexture();
      } else {
        let se = i.TEXTURE_2D;
        if ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (se = w.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(se, K.__webglTexture), me(se, v), v.mipmaps && v.mipmaps.length > 0) for (let ce = 0; ce < v.mipmaps.length; ce++) J(B.__webglFramebuffer[ce], w, v, i.COLOR_ATTACHMENT0, se, ce);
        else J(B.__webglFramebuffer, w, v, i.COLOR_ATTACHMENT0, se, 0);
        m(v) && f(se), t.unbindTexture();
      }
      w.depthBuffer && Se(w);
    }
    function at(w) {
      const v = w.textures;
      for (let B = 0, K = v.length; B < K; B++) {
        const Y = v[B];
        if (m(Y)) {
          const q = w.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, xe = n.get(Y).__webglTexture;
          t.bindTexture(q, xe), f(q), t.unbindTexture();
        }
      }
    }
    const T = [], ht = [];
    function Ze(w) {
      if (w.samples > 0) {
        if (ve(w) === false) {
          const v = w.textures, B = w.width, K = w.height;
          let Y = i.COLOR_BUFFER_BIT;
          const q = w.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, xe = n.get(w), se = v.length > 1;
          if (se) for (let ce = 0; ce < v.length; ce++) t.bindFramebuffer(i.FRAMEBUFFER, xe.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, xe.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.TEXTURE_2D, null, 0);
          t.bindFramebuffer(i.READ_FRAMEBUFFER, xe.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, xe.__webglFramebuffer);
          for (let ce = 0; ce < v.length; ce++) {
            if (w.resolveDepthBuffer && (w.depthBuffer && (Y |= i.DEPTH_BUFFER_BIT), w.stencilBuffer && w.resolveStencilBuffer && (Y |= i.STENCIL_BUFFER_BIT)), se) {
              i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, xe.__webglColorRenderbuffer[ce]);
              const Ie = n.get(v[ce]).__webglTexture;
              i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Ie, 0);
            }
            i.blitFramebuffer(0, 0, B, K, 0, 0, B, K, Y, i.NEAREST), l === true && (T.length = 0, ht.length = 0, T.push(i.COLOR_ATTACHMENT0 + ce), w.depthBuffer && w.resolveDepthBuffer === false && (T.push(q), ht.push(q), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, ht)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, T));
          }
          if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), se) for (let ce = 0; ce < v.length; ce++) {
            t.bindFramebuffer(i.FRAMEBUFFER, xe.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.RENDERBUFFER, xe.__webglColorRenderbuffer[ce]);
            const Ie = n.get(v[ce]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, xe.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.TEXTURE_2D, Ie, 0);
          }
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, xe.__webglMultisampledFramebuffer);
        } else if (w.depthBuffer && w.resolveDepthBuffer === false && l) {
          const v = w.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
          i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [
            v
          ]);
        }
      }
    }
    function et(w) {
      return Math.min(s.maxSamples, w.samples);
    }
    function ve(w) {
      const v = n.get(w);
      return w.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
    }
    function ut(w) {
      const v = o.render.frame;
      h.get(w) !== v && (h.set(w, v), w.update());
    }
    function Te(w, v) {
      const B = w.colorSpace, K = w.format, Y = w.type;
      return w.isCompressedTexture === true || w.isVideoTexture === true || B !== St && B !== oi && (ze.getTransfer(B) === it ? (K !== tn || Y !== Xn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), v;
    }
    function Pe(w) {
      return typeof HTMLImageElement < "u" && w instanceof HTMLImageElement ? (c.width = w.naturalWidth || w.width, c.height = w.naturalHeight || w.height) : typeof VideoFrame < "u" && w instanceof VideoFrame ? (c.width = w.displayWidth, c.height = w.displayHeight) : (c.width = w.width, c.height = w.height), c;
    }
    this.allocateTextureUnit = X, this.resetTextureUnits = L, this.setTexture2D = H, this.setTexture2DArray = $, this.setTexture3D = z, this.setTextureCube = Z, this.rebindTextures = Re, this.setupRenderTarget = Fe, this.updateRenderTargetMipmap = at, this.updateMultisampleRenderTarget = Ze, this.setupDepthRenderbuffer = Se, this.setupFrameBufferTexture = J, this.useMultisampledRTT = ve;
  }
  function Sx(i, e) {
    function t(n, s = oi) {
      let r;
      const o = ze.getTransfer(s);
      if (n === Xn) return i.UNSIGNED_BYTE;
      if (n === xl) return i.UNSIGNED_SHORT_4_4_4_4;
      if (n === yl) return i.UNSIGNED_SHORT_5_5_5_1;
      if (n === Eu) return i.UNSIGNED_INT_5_9_9_9_REV;
      if (n === Mu) return i.BYTE;
      if (n === Su) return i.SHORT;
      if (n === Zs) return i.UNSIGNED_SHORT;
      if (n === vl) return i.INT;
      if (n === Ri) return i.UNSIGNED_INT;
      if (n === hn) return i.FLOAT;
      if (n === rr) return i.HALF_FLOAT;
      if (n === wu) return i.ALPHA;
      if (n === Tu) return i.RGB;
      if (n === tn) return i.RGBA;
      if (n === Au) return i.LUMINANCE;
      if (n === Cu) return i.LUMINANCE_ALPHA;
      if (n === ls) return i.DEPTH_COMPONENT;
      if (n === vs) return i.DEPTH_STENCIL;
      if (n === bl) return i.RED;
      if (n === Ml) return i.RED_INTEGER;
      if (n === Ru) return i.RG;
      if (n === Sl) return i.RG_INTEGER;
      if (n === El) return i.RGBA_INTEGER;
      if (n === Kr || n === qr || n === Yr || n === $r) if (o === it) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
        if (n === Kr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n === qr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n === Yr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n === $r) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
      else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === Kr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === qr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Yr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === $r) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
      if (n === La || n === Ia || n === Da || n === Na) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === La) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ia) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Da) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Na) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
      if (n === Ua || n === Oa || n === Fa) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Ua || n === Oa) return o === it ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Fa) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
      if (n === Ba || n === ka || n === Va || n === za || n === Ha || n === Ga || n === Wa || n === Xa || n === ja || n === Ka || n === qa || n === Ya || n === $a || n === Za) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === Ba) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ka) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Va) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === za) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Ha) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ga) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Wa) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Xa) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ja) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Ka) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === qa) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ya) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === $a) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Za) return o === it ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
      if (n === Zr || n === Ja || n === Qa) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Zr) return o === it ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Ja) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Qa) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
      if (n === Pu || n === el || n === tl || n === nl) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Zr) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === el) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === tl) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === nl) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
      return n === gs ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
    }
    return {
      convert: t
    };
  }
  class Ex extends Ut {
    constructor(e = []) {
      super(), this.isArrayCamera = true, this.cameras = e;
    }
  }
  class Ci extends ot {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  }
  const wx = {
    type: "move"
  };
  class aa {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return this._hand === null && (this._hand = new Ci(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = {
        pinching: false
      }), this._hand;
    }
    getTargetRaySpace() {
      return this._targetRay === null && (this._targetRay = new Ci(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new R()), this._targetRay;
    }
    getGripSpace() {
      return this._grip === null && (this._grip = new Ci(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new R()), this._grip;
    }
    dispatchEvent(e) {
      return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
    }
    connect(e) {
      if (e && e.hand) {
        const t = this._hand;
        if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
      }
      return this.dispatchEvent({
        type: "connected",
        data: e
      }), this;
    }
    disconnect(e) {
      return this.dispatchEvent({
        type: "disconnected",
        data: e
      }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
    }
    update(e, t, n) {
      let s = null, r = null, o = null;
      const a = this._targetRay, l = this._grip, c = this._hand;
      if (e && t.session.visibilityState !== "visible-blurred") {
        if (c && e.hand) {
          o = true;
          for (const g of e.hand.values()) {
            const m = t.getJointPose(g, n), f = this._getHandJoint(c, g);
            m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, f.jointRadius = m.radius), f.visible = m !== null;
          }
          const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, _ = 5e-3;
          c.inputState.pinching && d > p + _ ? (c.inputState.pinching = false, this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          })) : !c.inputState.pinching && d <= p - _ && (c.inputState.pinching = true, this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          }));
        } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
        a !== null && (s = t.getPose(e.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, s.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = false, s.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(wx)));
      }
      return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
    }
    _getHandJoint(e, t) {
      if (e.joints[t.jointName] === void 0) {
        const n = new Ci();
        n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
      }
      return e.joints[t.jointName];
    }
  }
  const Tx = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Ax = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
  class Cx {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(e, t, n) {
      if (this.texture === null) {
        const s = new bt(), r = e.properties.get(s);
        r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = s;
      }
    }
    getMesh(e) {
      if (this.texture !== null && this.mesh === null) {
        const t = e.cameras[0].viewport, n = new pi({
          vertexShader: Tx,
          fragmentShader: Ax,
          uniforms: {
            depthColor: {
              value: this.texture
            },
            depthWidth: {
              value: t.z
            },
            depthHeight: {
              value: t.w
            }
          }
        });
        this.mesh = new Vt(new xo(20, 20), n);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  }
  class Rx extends mi {
    constructor(e, t) {
      super();
      const n = this;
      let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, _ = null;
      const g = new Cx(), m = t.getContextAttributes();
      let f = null, M = null;
      const b = [], E = [], N = new ye();
      let A = null;
      const C = new Ut();
      C.layers.enable(1), C.viewport = new nt();
      const F = new Ut();
      F.layers.enable(2), F.viewport = new nt();
      const S = [
        C,
        F
      ], y = new Ex();
      y.layers.enable(1), y.layers.enable(2);
      let L = null, X = null;
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(G) {
        let J = b[G];
        return J === void 0 && (J = new aa(), b[G] = J), J.getTargetRaySpace();
      }, this.getControllerGrip = function(G) {
        let J = b[G];
        return J === void 0 && (J = new aa(), b[G] = J), J.getGripSpace();
      }, this.getHand = function(G) {
        let J = b[G];
        return J === void 0 && (J = new aa(), b[G] = J), J.getHandSpace();
      };
      function k(G) {
        const J = E.indexOf(G.inputSource);
        if (J === -1) return;
        const fe = b[J];
        fe !== void 0 && (fe.update(G.inputSource, G.frame, c || o), fe.dispatchEvent({
          type: G.type,
          data: G.inputSource
        }));
      }
      function H() {
        s.removeEventListener("select", k), s.removeEventListener("selectstart", k), s.removeEventListener("selectend", k), s.removeEventListener("squeeze", k), s.removeEventListener("squeezestart", k), s.removeEventListener("squeezeend", k), s.removeEventListener("end", H), s.removeEventListener("inputsourceschange", $);
        for (let G = 0; G < b.length; G++) {
          const J = E[G];
          J !== null && (E[G] = null, b[G].disconnect(J));
        }
        L = null, X = null, g.reset(), e.setRenderTarget(f), p = null, d = null, u = null, s = null, M = null, Qe.stop(), n.isPresenting = false, e.setPixelRatio(A), e.setSize(N.width, N.height, false), n.dispatchEvent({
          type: "sessionend"
        });
      }
      this.setFramebufferScaleFactor = function(G) {
        r = G, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(G) {
        a = G, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return c || o;
      }, this.setReferenceSpace = function(G) {
        c = G;
      }, this.getBaseLayer = function() {
        return d !== null ? d : p;
      }, this.getBinding = function() {
        return u;
      }, this.getFrame = function() {
        return _;
      }, this.getSession = function() {
        return s;
      }, this.setSession = async function(G) {
        if (s = G, s !== null) {
          if (f = e.getRenderTarget(), s.addEventListener("select", k), s.addEventListener("selectstart", k), s.addEventListener("selectend", k), s.addEventListener("squeeze", k), s.addEventListener("squeezestart", k), s.addEventListener("squeezeend", k), s.addEventListener("end", H), s.addEventListener("inputsourceschange", $), m.xrCompatible !== true && await t.makeXRCompatible(), A = e.getPixelRatio(), e.getSize(N), s.renderState.layers === void 0) {
            const J = {
              antialias: m.antialias,
              alpha: true,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: r
            };
            p = new XRWebGLLayer(s, t, J), s.updateRenderState({
              baseLayer: p
            }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, false), M = new Pi(p.framebufferWidth, p.framebufferHeight, {
              format: tn,
              type: Xn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            });
          } else {
            let J = null, fe = null, le = null;
            m.depth && (le = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, J = m.stencil ? vs : ls, fe = m.stencil ? gs : Ri);
            const Se = {
              colorFormat: t.RGBA8,
              depthFormat: le,
              scaleFactor: r
            };
            u = new XRWebGLBinding(s, t), d = u.createProjectionLayer(Se), s.updateRenderState({
              layers: [
                d
              ]
            }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), M = new Pi(d.textureWidth, d.textureHeight, {
              format: tn,
              type: Xn,
              depthTexture: new ju(d.textureWidth, d.textureHeight, fe, void 0, void 0, void 0, void 0, void 0, void 0, J),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === false
            });
          }
          M.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), Qe.setContext(s), Qe.start(), n.isPresenting = true, n.dispatchEvent({
            type: "sessionstart"
          });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (s !== null) return s.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return g.getDepthTexture();
      };
      function $(G) {
        for (let J = 0; J < G.removed.length; J++) {
          const fe = G.removed[J], le = E.indexOf(fe);
          le >= 0 && (E[le] = null, b[le].disconnect(fe));
        }
        for (let J = 0; J < G.added.length; J++) {
          const fe = G.added[J];
          let le = E.indexOf(fe);
          if (le === -1) {
            for (let Re = 0; Re < b.length; Re++) if (Re >= E.length) {
              E.push(fe), le = Re;
              break;
            } else if (E[Re] === null) {
              E[Re] = fe, le = Re;
              break;
            }
            if (le === -1) break;
          }
          const Se = b[le];
          Se && Se.connect(fe);
        }
      }
      const z = new R(), Z = new R();
      function V(G, J, fe) {
        z.setFromMatrixPosition(J.matrixWorld), Z.setFromMatrixPosition(fe.matrixWorld);
        const le = z.distanceTo(Z), Se = J.projectionMatrix.elements, Re = fe.projectionMatrix.elements, Fe = Se[14] / (Se[10] - 1), at = Se[14] / (Se[10] + 1), T = (Se[9] + 1) / Se[5], ht = (Se[9] - 1) / Se[5], Ze = (Se[8] - 1) / Se[0], et = (Re[8] + 1) / Re[0], ve = Fe * Ze, ut = Fe * et, Te = le / (-Ze + et), Pe = Te * -Ze;
        if (J.matrixWorld.decompose(G.position, G.quaternion, G.scale), G.translateX(Pe), G.translateZ(Te), G.matrixWorld.compose(G.position, G.quaternion, G.scale), G.matrixWorldInverse.copy(G.matrixWorld).invert(), Se[10] === -1) G.projectionMatrix.copy(J.projectionMatrix), G.projectionMatrixInverse.copy(J.projectionMatrixInverse);
        else {
          const w = Fe + Te, v = at + Te, B = ve - Pe, K = ut + (le - Pe), Y = T * at / v * w, q = ht * at / v * w;
          G.projectionMatrix.makePerspective(B, K, Y, q, w, v), G.projectionMatrixInverse.copy(G.projectionMatrix).invert();
        }
      }
      function oe(G, J) {
        J === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(J.matrixWorld, G.matrix), G.matrixWorldInverse.copy(G.matrixWorld).invert();
      }
      this.updateCamera = function(G) {
        if (s === null) return;
        let J = G.near, fe = G.far;
        g.texture !== null && (g.depthNear > 0 && (J = g.depthNear), g.depthFar > 0 && (fe = g.depthFar)), y.near = F.near = C.near = J, y.far = F.far = C.far = fe, (L !== y.near || X !== y.far) && (s.updateRenderState({
          depthNear: y.near,
          depthFar: y.far
        }), L = y.near, X = y.far);
        const le = G.parent, Se = y.cameras;
        oe(y, le);
        for (let Re = 0; Re < Se.length; Re++) oe(Se[Re], le);
        Se.length === 2 ? V(y, C, F) : y.projectionMatrix.copy(C.projectionMatrix), he(G, y, le);
      };
      function he(G, J, fe) {
        fe === null ? G.matrix.copy(J.matrixWorld) : (G.matrix.copy(fe.matrixWorld), G.matrix.invert(), G.matrix.multiply(J.matrixWorld)), G.matrix.decompose(G.position, G.quaternion, G.scale), G.updateMatrixWorld(true), G.projectionMatrix.copy(J.projectionMatrix), G.projectionMatrixInverse.copy(J.projectionMatrixInverse), G.isPerspectiveCamera && (G.fov = xs * 2 * Math.atan(1 / G.projectionMatrix.elements[5]), G.zoom = 1);
      }
      this.getCamera = function() {
        return y;
      }, this.getFoveation = function() {
        if (!(d === null && p === null)) return l;
      }, this.setFoveation = function(G) {
        l = G, d !== null && (d.fixedFoveation = G), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = G);
      }, this.hasDepthSensing = function() {
        return g.texture !== null;
      }, this.getDepthSensingMesh = function() {
        return g.getMesh(y);
      };
      let me = null;
      function Be(G, J) {
        if (h = J.getViewerPose(c || o), _ = J, h !== null) {
          const fe = h.views;
          p !== null && (e.setRenderTargetFramebuffer(M, p.framebuffer), e.setRenderTarget(M));
          let le = false;
          fe.length !== y.cameras.length && (y.cameras.length = 0, le = true);
          for (let Re = 0; Re < fe.length; Re++) {
            const Fe = fe[Re];
            let at = null;
            if (p !== null) at = p.getViewport(Fe);
            else {
              const ht = u.getViewSubImage(d, Fe);
              at = ht.viewport, Re === 0 && (e.setRenderTargetTextures(M, ht.colorTexture, d.ignoreDepthValues ? void 0 : ht.depthStencilTexture), e.setRenderTarget(M));
            }
            let T = S[Re];
            T === void 0 && (T = new Ut(), T.layers.enable(Re), T.viewport = new nt(), S[Re] = T), T.matrix.fromArray(Fe.transform.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale), T.projectionMatrix.fromArray(Fe.projectionMatrix), T.projectionMatrixInverse.copy(T.projectionMatrix).invert(), T.viewport.set(at.x, at.y, at.width, at.height), Re === 0 && (y.matrix.copy(T.matrix), y.matrix.decompose(y.position, y.quaternion, y.scale)), le === true && y.cameras.push(T);
          }
          const Se = s.enabledFeatures;
          if (Se && Se.includes("depth-sensing")) {
            const Re = u.getDepthInformation(fe[0]);
            Re && Re.isValid && Re.texture && g.init(e, Re, s.renderState);
          }
        }
        for (let fe = 0; fe < b.length; fe++) {
          const le = E[fe], Se = b[fe];
          le !== null && Se !== void 0 && Se.update(le, J, c || o);
        }
        me && me(G, J), J.detectedPlanes && n.dispatchEvent({
          type: "planesdetected",
          data: J
        }), _ = null;
      }
      const Qe = new Xu();
      Qe.setAnimationLoop(Be), this.setAnimationLoop = function(G) {
        me = G;
      }, this.dispose = function() {
      };
    }
  }
  const Mi = new yn(), Px = new Le();
  function Lx(i, e) {
    function t(m, f) {
      m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
    }
    function n(m, f) {
      f.color.getRGB(m.fogColor.value, Hu(i)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
    }
    function s(m, f, M, b, E) {
      f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), u(m, f)) : f.isMeshPhongMaterial ? (r(m, f), h(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, E)) : f.isMeshMatcapMaterial ? (r(m, f), _(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), g(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (o(m, f), f.isLineDashedMaterial && a(m, f)) : f.isPointsMaterial ? l(m, f, M, b) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
    }
    function r(m, f) {
      m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Ht && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Ht && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
      const M = e.get(f), b = M.envMap, E = M.envMapRotation;
      b && (m.envMap.value = b, Mi.copy(E), Mi.x *= -1, Mi.y *= -1, Mi.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (Mi.y *= -1, Mi.z *= -1), m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(Mi)), m.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
    }
    function o(m, f) {
      m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
    }
    function a(m, f) {
      m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
    }
    function l(m, f, M, b) {
      m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * M, m.scale.value = b * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    }
    function c(m, f) {
      m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    }
    function h(m, f) {
      m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
    }
    function u(m, f) {
      f.gradientMap && (m.gradientMap.value = f.gradientMap);
    }
    function d(m, f) {
      m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity);
    }
    function p(m, f, M) {
      m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Ht && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = M.texture, m.transmissionSamplerSize.value.set(M.width, M.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
    }
    function _(m, f) {
      f.matcap && (m.matcap.value = f.matcap);
    }
    function g(m, f) {
      const M = e.get(f).light;
      m.referencePosition.value.setFromMatrixPosition(M.matrixWorld), m.nearDistance.value = M.shadow.camera.near, m.farDistance.value = M.shadow.camera.far;
    }
    return {
      refreshFogUniforms: n,
      refreshMaterialUniforms: s
    };
  }
  function Ix(i, e, t, n) {
    let s = {}, r = {}, o = [];
    const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(M, b) {
      const E = b.program;
      n.uniformBlockBinding(M, E);
    }
    function c(M, b) {
      let E = s[M.id];
      E === void 0 && (_(M), E = h(M), s[M.id] = E, M.addEventListener("dispose", m));
      const N = b.program;
      n.updateUBOMapping(M, N);
      const A = e.render.frame;
      r[M.id] !== A && (d(M), r[M.id] = A);
    }
    function h(M) {
      const b = u();
      M.__bindingPointIndex = b;
      const E = i.createBuffer(), N = M.__size, A = M.usage;
      return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, N, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, E), E;
    }
    function u() {
      for (let M = 0; M < a; M++) if (o.indexOf(M) === -1) return o.push(M), M;
      return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
    }
    function d(M) {
      const b = s[M.id], E = M.uniforms, N = M.__cache;
      i.bindBuffer(i.UNIFORM_BUFFER, b);
      for (let A = 0, C = E.length; A < C; A++) {
        const F = Array.isArray(E[A]) ? E[A] : [
          E[A]
        ];
        for (let S = 0, y = F.length; S < y; S++) {
          const L = F[S];
          if (p(L, A, S, N) === true) {
            const X = L.__offset, k = Array.isArray(L.value) ? L.value : [
              L.value
            ];
            let H = 0;
            for (let $ = 0; $ < k.length; $++) {
              const z = k[$], Z = g(z);
              typeof z == "number" || typeof z == "boolean" ? (L.__data[0] = z, i.bufferSubData(i.UNIFORM_BUFFER, X + H, L.__data)) : z.isMatrix3 ? (L.__data[0] = z.elements[0], L.__data[1] = z.elements[1], L.__data[2] = z.elements[2], L.__data[3] = 0, L.__data[4] = z.elements[3], L.__data[5] = z.elements[4], L.__data[6] = z.elements[5], L.__data[7] = 0, L.__data[8] = z.elements[6], L.__data[9] = z.elements[7], L.__data[10] = z.elements[8], L.__data[11] = 0) : (z.toArray(L.__data, H), H += Z.storage / Float32Array.BYTES_PER_ELEMENT);
            }
            i.bufferSubData(i.UNIFORM_BUFFER, X, L.__data);
          }
        }
      }
      i.bindBuffer(i.UNIFORM_BUFFER, null);
    }
    function p(M, b, E, N) {
      const A = M.value, C = b + "_" + E;
      if (N[C] === void 0) return typeof A == "number" || typeof A == "boolean" ? N[C] = A : N[C] = A.clone(), true;
      {
        const F = N[C];
        if (typeof A == "number" || typeof A == "boolean") {
          if (F !== A) return N[C] = A, true;
        } else if (F.equals(A) === false) return F.copy(A), true;
      }
      return false;
    }
    function _(M) {
      const b = M.uniforms;
      let E = 0;
      const N = 16;
      for (let C = 0, F = b.length; C < F; C++) {
        const S = Array.isArray(b[C]) ? b[C] : [
          b[C]
        ];
        for (let y = 0, L = S.length; y < L; y++) {
          const X = S[y], k = Array.isArray(X.value) ? X.value : [
            X.value
          ];
          for (let H = 0, $ = k.length; H < $; H++) {
            const z = k[H], Z = g(z), V = E % N, oe = V % Z.boundary, he = V + oe;
            E += oe, he !== 0 && N - he < Z.storage && (E += N - he), X.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), X.__offset = E, E += Z.storage;
          }
        }
      }
      const A = E % N;
      return A > 0 && (E += N - A), M.__size = E, M.__cache = {}, this;
    }
    function g(M) {
      const b = {
        boundary: 0,
        storage: 0
      };
      return typeof M == "number" || typeof M == "boolean" ? (b.boundary = 4, b.storage = 4) : M.isVector2 ? (b.boundary = 8, b.storage = 8) : M.isVector3 || M.isColor ? (b.boundary = 16, b.storage = 12) : M.isVector4 ? (b.boundary = 16, b.storage = 16) : M.isMatrix3 ? (b.boundary = 48, b.storage = 48) : M.isMatrix4 ? (b.boundary = 64, b.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), b;
    }
    function m(M) {
      const b = M.target;
      b.removeEventListener("dispose", m);
      const E = o.indexOf(b.__bindingPointIndex);
      o.splice(E, 1), i.deleteBuffer(s[b.id]), delete s[b.id], delete r[b.id];
    }
    function f() {
      for (const M in s) i.deleteBuffer(s[M]);
      o = [], s = {}, r = {};
    }
    return {
      bind: l,
      update: c,
      dispose: f
    };
  }
  class Dx {
    constructor(e = {}) {
      const { canvas: t = Sf(), context: n = null, depth: s = true, stencil: r = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false } = e;
      this.isWebGLRenderer = true;
      let d;
      if (n !== null) {
        if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        d = n.getContextAttributes().alpha;
      } else d = o;
      const p = new Uint32Array(4), _ = new Int32Array(4);
      let g = null, m = null;
      const f = [], M = [];
      this.domElement = t, this.debug = {
        checkShaderErrors: true,
        onShaderError: null
      }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = At, this.toneMapping = ui, this.toneMappingExposure = 1;
      const b = this;
      let E = false, N = 0, A = 0, C = null, F = -1, S = null;
      const y = new nt(), L = new nt();
      let X = null;
      const k = new Ae(0);
      let H = 0, $ = t.width, z = t.height, Z = 1, V = null, oe = null;
      const he = new nt(0, 0, $, z), me = new nt(0, 0, $, z);
      let Be = false;
      const Qe = new Cl();
      let G = false, J = false;
      const fe = new Le(), le = new R(), Se = new nt(), Re = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: true
      };
      let Fe = false;
      function at() {
        return C === null ? Z : 1;
      }
      let T = n;
      function ht(x, I) {
        return t.getContext(x, I);
      }
      try {
        const x = {
          alpha: true,
          depth: s,
          stencil: r,
          antialias: a,
          premultipliedAlpha: l,
          preserveDrawingBuffer: c,
          powerPreference: h,
          failIfMajorPerformanceCaveat: u
        };
        if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${gl}`), t.addEventListener("webglcontextlost", W, false), t.addEventListener("webglcontextrestored", j, false), t.addEventListener("webglcontextcreationerror", ne, false), T === null) {
          const I = "webgl2";
          if (T = ht(I, x), T === null) throw ht(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (x) {
        throw console.error("THREE.WebGLRenderer: " + x.message), x;
      }
      let Ze, et, ve, ut, Te, Pe, w, v, B, K, Y, q, xe, se, ce, Ie, Q, ae, ke, we, ue, Ce, Ue, st;
      function P() {
        Ze = new kg(T), Ze.init(), Ce = new Sx(T, Ze), et = new Dg(T, Ze, e, Ce), ve = new yx(T), ut = new Hg(T), Te = new ox(), Pe = new Mx(T, Ze, ve, Te, et, Ce, ut), w = new Ug(b), v = new Bg(b), B = new Yf(T), Ue = new Lg(T, B), K = new Vg(T, B, ut, Ue), Y = new Wg(T, K, B, ut), ke = new Gg(T, et, Pe), Ie = new Ng(Te), q = new rx(b, w, v, Ze, et, Ue, Ie), xe = new Lx(b, Te), se = new lx(), ce = new fx(Ze), ae = new Pg(b, w, v, ve, Y, d, l), Q = new xx(b, Y, et), st = new Ix(T, ut, et, ve), we = new Ig(T, Ze, ut), ue = new zg(T, Ze, ut), ut.programs = q.programs, b.capabilities = et, b.extensions = Ze, b.properties = Te, b.renderLists = se, b.shadowMap = Q, b.state = ve, b.info = ut;
      }
      P();
      const ee = new Rx(b, T);
      this.xr = ee, this.getContext = function() {
        return T;
      }, this.getContextAttributes = function() {
        return T.getContextAttributes();
      }, this.forceContextLoss = function() {
        const x = Ze.get("WEBGL_lose_context");
        x && x.loseContext();
      }, this.forceContextRestore = function() {
        const x = Ze.get("WEBGL_lose_context");
        x && x.restoreContext();
      }, this.getPixelRatio = function() {
        return Z;
      }, this.setPixelRatio = function(x) {
        x !== void 0 && (Z = x, this.setSize($, z, false));
      }, this.getSize = function(x) {
        return x.set($, z);
      }, this.setSize = function(x, I, U = true) {
        if (ee.isPresenting) {
          console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        $ = x, z = I, t.width = Math.floor(x * Z), t.height = Math.floor(I * Z), U === true && (t.style.width = x + "px", t.style.height = I + "px"), this.setViewport(0, 0, x, I);
      }, this.getDrawingBufferSize = function(x) {
        return x.set($ * Z, z * Z).floor();
      }, this.setDrawingBufferSize = function(x, I, U) {
        $ = x, z = I, Z = U, t.width = Math.floor(x * U), t.height = Math.floor(I * U), this.setViewport(0, 0, x, I);
      }, this.getCurrentViewport = function(x) {
        return x.copy(y);
      }, this.getViewport = function(x) {
        return x.copy(he);
      }, this.setViewport = function(x, I, U, O) {
        x.isVector4 ? he.set(x.x, x.y, x.z, x.w) : he.set(x, I, U, O), ve.viewport(y.copy(he).multiplyScalar(Z).round());
      }, this.getScissor = function(x) {
        return x.copy(me);
      }, this.setScissor = function(x, I, U, O) {
        x.isVector4 ? me.set(x.x, x.y, x.z, x.w) : me.set(x, I, U, O), ve.scissor(L.copy(me).multiplyScalar(Z).round());
      }, this.getScissorTest = function() {
        return Be;
      }, this.setScissorTest = function(x) {
        ve.setScissorTest(Be = x);
      }, this.setOpaqueSort = function(x) {
        V = x;
      }, this.setTransparentSort = function(x) {
        oe = x;
      }, this.getClearColor = function(x) {
        return x.copy(ae.getClearColor());
      }, this.setClearColor = function() {
        ae.setClearColor.apply(ae, arguments);
      }, this.getClearAlpha = function() {
        return ae.getClearAlpha();
      }, this.setClearAlpha = function() {
        ae.setClearAlpha.apply(ae, arguments);
      }, this.clear = function(x = true, I = true, U = true) {
        let O = 0;
        if (x) {
          let D = false;
          if (C !== null) {
            const te = C.texture.format;
            D = te === El || te === Sl || te === Ml;
          }
          if (D) {
            const te = C.texture.type, re = te === Xn || te === Ri || te === Zs || te === gs || te === xl || te === yl, de = ae.getClearColor(), pe = ae.getClearAlpha(), Me = de.r, Ee = de.g, _e = de.b;
            re ? (p[0] = Me, p[1] = Ee, p[2] = _e, p[3] = pe, T.clearBufferuiv(T.COLOR, 0, p)) : (_[0] = Me, _[1] = Ee, _[2] = _e, _[3] = pe, T.clearBufferiv(T.COLOR, 0, _));
          } else O |= T.COLOR_BUFFER_BIT;
        }
        I && (O |= T.DEPTH_BUFFER_BIT), U && (O |= T.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), T.clear(O);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        t.removeEventListener("webglcontextlost", W, false), t.removeEventListener("webglcontextrestored", j, false), t.removeEventListener("webglcontextcreationerror", ne, false), se.dispose(), ce.dispose(), Te.dispose(), w.dispose(), v.dispose(), Y.dispose(), Ue.dispose(), st.dispose(), q.dispose(), ee.dispose(), ee.removeEventListener("sessionstart", fn), ee.removeEventListener("sessionend", pc), _i.stop();
      };
      function W(x) {
        x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), E = true;
      }
      function j() {
        console.log("THREE.WebGLRenderer: Context Restored."), E = false;
        const x = ut.autoReset, I = Q.enabled, U = Q.autoUpdate, O = Q.needsUpdate, D = Q.type;
        P(), ut.autoReset = x, Q.enabled = I, Q.autoUpdate = U, Q.needsUpdate = O, Q.type = D;
      }
      function ne(x) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
      }
      function be(x) {
        const I = x.target;
        I.removeEventListener("dispose", be), Ve(I);
      }
      function Ve(x) {
        dt(x), Te.remove(x);
      }
      function dt(x) {
        const I = Te.get(x).programs;
        I !== void 0 && (I.forEach(function(U) {
          q.releaseProgram(U);
        }), x.isShaderMaterial && q.releaseShaderCache(x));
      }
      this.renderBufferDirect = function(x, I, U, O, D, te) {
        I === null && (I = Re);
        const re = D.isMesh && D.matrixWorld.determinant() < 0, de = rp(x, I, U, O, D);
        ve.setMaterial(O, re);
        let pe = U.index, Me = 1;
        if (O.wireframe === true) {
          if (pe = K.getWireframeAttribute(U), pe === void 0) return;
          Me = 2;
        }
        const Ee = U.drawRange, _e = U.attributes.position;
        let je = Ee.start * Me, lt = (Ee.start + Ee.count) * Me;
        te !== null && (je = Math.max(je, te.start * Me), lt = Math.min(lt, (te.start + te.count) * Me)), pe !== null ? (je = Math.max(je, 0), lt = Math.min(lt, pe.count)) : _e != null && (je = Math.max(je, 0), lt = Math.min(lt, _e.count));
        const ct = lt - je;
        if (ct < 0 || ct === 1 / 0) return;
        Ue.setup(D, O, de, U, pe);
        let Wt, Ke = we;
        if (pe !== null && (Wt = B.get(pe), Ke = ue, Ke.setIndex(Wt)), D.isMesh) O.wireframe === true ? (ve.setLineWidth(O.wireframeLinewidth * at()), Ke.setMode(T.LINES)) : Ke.setMode(T.TRIANGLES);
        else if (D.isLine) {
          let ge = O.linewidth;
          ge === void 0 && (ge = 1), ve.setLineWidth(ge * at()), D.isLineSegments ? Ke.setMode(T.LINES) : D.isLineLoop ? Ke.setMode(T.LINE_LOOP) : Ke.setMode(T.LINE_STRIP);
        } else D.isPoints ? Ke.setMode(T.POINTS) : D.isSprite && Ke.setMode(T.TRIANGLES);
        if (D.isBatchedMesh) if (D._multiDrawInstances !== null) Ke.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
        else if (Ze.get("WEBGL_multi_draw")) Ke.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
        else {
          const ge = D._multiDrawStarts, Tt = D._multiDrawCounts, qe = D._multiDrawCount, sn = pe ? B.get(pe).bytesPerElement : 1, Ui = Te.get(O).currentProgram.getUniforms();
          for (let Xt = 0; Xt < qe; Xt++) Ui.setValue(T, "_gl_DrawID", Xt), Ke.render(ge[Xt] / sn, Tt[Xt]);
        }
        else if (D.isInstancedMesh) Ke.renderInstances(je, ct, D.count);
        else if (U.isInstancedBufferGeometry) {
          const ge = U._maxInstanceCount !== void 0 ? U._maxInstanceCount : 1 / 0, Tt = Math.min(U.instanceCount, ge);
          Ke.renderInstances(je, ct, Tt);
        } else Ke.render(je, ct);
      };
      function wt(x, I, U) {
        x.transparent === true && x.side === _n && x.forceSinglePass === false ? (x.side = Ht, x.needsUpdate = true, mr(x, I, U), x.side = Wn, x.needsUpdate = true, mr(x, I, U), x.side = _n) : mr(x, I, U);
      }
      this.compile = function(x, I, U = null) {
        U === null && (U = x), m = ce.get(U), m.init(I), M.push(m), U.traverseVisible(function(D) {
          D.isLight && D.layers.test(I.layers) && (m.pushLight(D), D.castShadow && m.pushShadow(D));
        }), x !== U && x.traverseVisible(function(D) {
          D.isLight && D.layers.test(I.layers) && (m.pushLight(D), D.castShadow && m.pushShadow(D));
        }), m.setupLights();
        const O = /* @__PURE__ */ new Set();
        return x.traverse(function(D) {
          const te = D.material;
          if (te) if (Array.isArray(te)) for (let re = 0; re < te.length; re++) {
            const de = te[re];
            wt(de, U, D), O.add(de);
          }
          else wt(te, U, D), O.add(te);
        }), M.pop(), m = null, O;
      }, this.compileAsync = function(x, I, U = null) {
        const O = this.compile(x, I, U);
        return new Promise((D) => {
          function te() {
            if (O.forEach(function(re) {
              Te.get(re).currentProgram.isReady() && O.delete(re);
            }), O.size === 0) {
              D(x);
              return;
            }
            setTimeout(te, 10);
          }
          Ze.get("KHR_parallel_shader_compile") !== null ? te() : setTimeout(te, 10);
        });
      };
      let Xe = null;
      function Cn(x) {
        Xe && Xe(x);
      }
      function fn() {
        _i.stop();
      }
      function pc() {
        _i.start();
      }
      const _i = new Xu();
      _i.setAnimationLoop(Cn), typeof self < "u" && _i.setContext(self), this.setAnimationLoop = function(x) {
        Xe = x, ee.setAnimationLoop(x), x === null ? _i.stop() : _i.start();
      }, ee.addEventListener("sessionstart", fn), ee.addEventListener("sessionend", pc), this.render = function(x, I) {
        if (I !== void 0 && I.isCamera !== true) {
          console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          return;
        }
        if (E === true) return;
        if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === true && I.updateMatrixWorld(), ee.enabled === true && ee.isPresenting === true && (ee.cameraAutoUpdate === true && ee.updateCamera(I), I = ee.getCamera()), x.isScene === true && x.onBeforeRender(b, x, I, C), m = ce.get(x, M.length), m.init(I), M.push(m), fe.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), Qe.setFromProjectionMatrix(fe), J = this.localClippingEnabled, G = Ie.init(this.clippingPlanes, J), g = se.get(x, f.length), g.init(), f.push(g), ee.enabled === true && ee.isPresenting === true) {
          const te = b.xr.getDepthSensingMesh();
          te !== null && Io(te, I, -1 / 0, b.sortObjects);
        }
        Io(x, I, 0, b.sortObjects), g.finish(), b.sortObjects === true && g.sort(V, oe), Fe = ee.enabled === false || ee.isPresenting === false || ee.hasDepthSensing() === false, Fe && ae.addToRenderList(g, x), this.info.render.frame++, G === true && Ie.beginShadows();
        const U = m.state.shadowsArray;
        Q.render(U, x, I), G === true && Ie.endShadows(), this.info.autoReset === true && this.info.reset();
        const O = g.opaque, D = g.transmissive;
        if (m.setupLights(), I.isArrayCamera) {
          const te = I.cameras;
          if (D.length > 0) for (let re = 0, de = te.length; re < de; re++) {
            const pe = te[re];
            mc(O, D, x, pe);
          }
          Fe && ae.render(x);
          for (let re = 0, de = te.length; re < de; re++) {
            const pe = te[re];
            fc(g, x, pe, pe.viewport);
          }
        } else D.length > 0 && mc(O, D, x, I), Fe && ae.render(x), fc(g, x, I);
        C !== null && (Pe.updateMultisampleRenderTarget(C), Pe.updateRenderTargetMipmap(C)), x.isScene === true && x.onAfterRender(b, x, I), Ue.resetDefaultState(), F = -1, S = null, M.pop(), M.length > 0 ? (m = M[M.length - 1], G === true && Ie.setGlobalState(b.clippingPlanes, m.state.camera)) : m = null, f.pop(), f.length > 0 ? g = f[f.length - 1] : g = null;
      };
      function Io(x, I, U, O) {
        if (x.visible === false) return;
        if (x.layers.test(I.layers)) {
          if (x.isGroup) U = x.renderOrder;
          else if (x.isLOD) x.autoUpdate === true && x.update(I);
          else if (x.isLight) m.pushLight(x), x.castShadow && m.pushShadow(x);
          else if (x.isSprite) {
            if (!x.frustumCulled || Qe.intersectsSprite(x)) {
              O && Se.setFromMatrixPosition(x.matrixWorld).applyMatrix4(fe);
              const re = Y.update(x), de = x.material;
              de.visible && g.push(x, re, de, U, Se.z, null);
            }
          } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || Qe.intersectsObject(x))) {
            const re = Y.update(x), de = x.material;
            if (O && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Se.copy(x.boundingSphere.center)) : (re.boundingSphere === null && re.computeBoundingSphere(), Se.copy(re.boundingSphere.center)), Se.applyMatrix4(x.matrixWorld).applyMatrix4(fe)), Array.isArray(de)) {
              const pe = re.groups;
              for (let Me = 0, Ee = pe.length; Me < Ee; Me++) {
                const _e = pe[Me], je = de[_e.materialIndex];
                je && je.visible && g.push(x, re, je, U, Se.z, _e);
              }
            } else de.visible && g.push(x, re, de, U, Se.z, null);
          }
        }
        const te = x.children;
        for (let re = 0, de = te.length; re < de; re++) Io(te[re], I, U, O);
      }
      function fc(x, I, U, O) {
        const D = x.opaque, te = x.transmissive, re = x.transparent;
        m.setupLightsView(U), G === true && Ie.setGlobalState(b.clippingPlanes, U), O && ve.viewport(y.copy(O)), D.length > 0 && fr(D, I, U), te.length > 0 && fr(te, I, U), re.length > 0 && fr(re, I, U), ve.buffers.depth.setTest(true), ve.buffers.depth.setMask(true), ve.buffers.color.setMask(true), ve.setPolygonOffset(false);
      }
      function mc(x, I, U, O) {
        if ((U.isScene === true ? U.overrideMaterial : null) !== null) return;
        m.state.transmissionRenderTarget[O.id] === void 0 && (m.state.transmissionRenderTarget[O.id] = new Pi(1, 1, {
          generateMipmaps: true,
          type: Ze.has("EXT_color_buffer_half_float") || Ze.has("EXT_color_buffer_float") ? rr : Xn,
          minFilter: Bn,
          samples: 4,
          stencilBuffer: r,
          resolveDepthBuffer: false,
          resolveStencilBuffer: false,
          colorSpace: ze.workingColorSpace
        }));
        const te = m.state.transmissionRenderTarget[O.id], re = O.viewport || y;
        te.setSize(re.z, re.w);
        const de = b.getRenderTarget();
        b.setRenderTarget(te), b.getClearColor(k), H = b.getClearAlpha(), H < 1 && b.setClearColor(16777215, 0.5), b.clear(), Fe && ae.render(U);
        const pe = b.toneMapping;
        b.toneMapping = ui;
        const Me = O.viewport;
        if (O.viewport !== void 0 && (O.viewport = void 0), m.setupLightsView(O), G === true && Ie.setGlobalState(b.clippingPlanes, O), fr(x, U, O), Pe.updateMultisampleRenderTarget(te), Pe.updateRenderTargetMipmap(te), Ze.has("WEBGL_multisampled_render_to_texture") === false) {
          let Ee = false;
          for (let _e = 0, je = I.length; _e < je; _e++) {
            const lt = I[_e], ct = lt.object, Wt = lt.geometry, Ke = lt.material, ge = lt.group;
            if (Ke.side === _n && ct.layers.test(O.layers)) {
              const Tt = Ke.side;
              Ke.side = Ht, Ke.needsUpdate = true, _c(ct, U, O, Wt, Ke, ge), Ke.side = Tt, Ke.needsUpdate = true, Ee = true;
            }
          }
          Ee === true && (Pe.updateMultisampleRenderTarget(te), Pe.updateRenderTargetMipmap(te));
        }
        b.setRenderTarget(de), b.setClearColor(k, H), Me !== void 0 && (O.viewport = Me), b.toneMapping = pe;
      }
      function fr(x, I, U) {
        const O = I.isScene === true ? I.overrideMaterial : null;
        for (let D = 0, te = x.length; D < te; D++) {
          const re = x[D], de = re.object, pe = re.geometry, Me = O === null ? re.material : O, Ee = re.group;
          de.layers.test(U.layers) && _c(de, I, U, pe, Me, Ee);
        }
      }
      function _c(x, I, U, O, D, te) {
        x.onBeforeRender(b, I, U, O, D, te), x.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), D.onBeforeRender(b, I, U, O, x, te), D.transparent === true && D.side === _n && D.forceSinglePass === false ? (D.side = Ht, D.needsUpdate = true, b.renderBufferDirect(U, I, O, D, x, te), D.side = Wn, D.needsUpdate = true, b.renderBufferDirect(U, I, O, D, x, te), D.side = _n) : b.renderBufferDirect(U, I, O, D, x, te), x.onAfterRender(b, I, U, O, D, te);
      }
      function mr(x, I, U) {
        I.isScene !== true && (I = Re);
        const O = Te.get(x), D = m.state.lights, te = m.state.shadowsArray, re = D.state.version, de = q.getParameters(x, D.state, te, I, U), pe = q.getProgramCacheKey(de);
        let Me = O.programs;
        O.environment = x.isMeshStandardMaterial ? I.environment : null, O.fog = I.fog, O.envMap = (x.isMeshStandardMaterial ? v : w).get(x.envMap || O.environment), O.envMapRotation = O.environment !== null && x.envMap === null ? I.environmentRotation : x.envMapRotation, Me === void 0 && (x.addEventListener("dispose", be), Me = /* @__PURE__ */ new Map(), O.programs = Me);
        let Ee = Me.get(pe);
        if (Ee !== void 0) {
          if (O.currentProgram === Ee && O.lightsStateVersion === re) return vc(x, de), Ee;
        } else de.uniforms = q.getUniforms(x), x.onBeforeCompile(de, b), Ee = q.acquireProgram(de, pe), Me.set(pe, Ee), O.uniforms = de.uniforms;
        const _e = O.uniforms;
        return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (_e.clippingPlanes = Ie.uniform), vc(x, de), O.needsLights = ap(x), O.lightsStateVersion = re, O.needsLights && (_e.ambientLightColor.value = D.state.ambient, _e.lightProbe.value = D.state.probe, _e.directionalLights.value = D.state.directional, _e.directionalLightShadows.value = D.state.directionalShadow, _e.spotLights.value = D.state.spot, _e.spotLightShadows.value = D.state.spotShadow, _e.rectAreaLights.value = D.state.rectArea, _e.ltc_1.value = D.state.rectAreaLTC1, _e.ltc_2.value = D.state.rectAreaLTC2, _e.pointLights.value = D.state.point, _e.pointLightShadows.value = D.state.pointShadow, _e.hemisphereLights.value = D.state.hemi, _e.directionalShadowMap.value = D.state.directionalShadowMap, _e.directionalShadowMatrix.value = D.state.directionalShadowMatrix, _e.spotShadowMap.value = D.state.spotShadowMap, _e.spotLightMatrix.value = D.state.spotLightMatrix, _e.spotLightMap.value = D.state.spotLightMap, _e.pointShadowMap.value = D.state.pointShadowMap, _e.pointShadowMatrix.value = D.state.pointShadowMatrix), O.currentProgram = Ee, O.uniformsList = null, Ee;
      }
      function gc(x) {
        if (x.uniformsList === null) {
          const I = x.currentProgram.getUniforms();
          x.uniformsList = Jr.seqWithValue(I.seq, x.uniforms);
        }
        return x.uniformsList;
      }
      function vc(x, I) {
        const U = Te.get(x);
        U.outputColorSpace = I.outputColorSpace, U.batching = I.batching, U.batchingColor = I.batchingColor, U.instancing = I.instancing, U.instancingColor = I.instancingColor, U.instancingMorph = I.instancingMorph, U.skinning = I.skinning, U.morphTargets = I.morphTargets, U.morphNormals = I.morphNormals, U.morphColors = I.morphColors, U.morphTargetsCount = I.morphTargetsCount, U.numClippingPlanes = I.numClippingPlanes, U.numIntersection = I.numClipIntersection, U.vertexAlphas = I.vertexAlphas, U.vertexTangents = I.vertexTangents, U.toneMapping = I.toneMapping;
      }
      function rp(x, I, U, O, D) {
        I.isScene !== true && (I = Re), Pe.resetTextureUnits();
        const te = I.fog, re = O.isMeshStandardMaterial ? I.environment : null, de = C === null ? b.outputColorSpace : C.isXRRenderTarget === true ? C.texture.colorSpace : St, pe = (O.isMeshStandardMaterial ? v : w).get(O.envMap || re), Me = O.vertexColors === true && !!U.attributes.color && U.attributes.color.itemSize === 4, Ee = !!U.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), _e = !!U.morphAttributes.position, je = !!U.morphAttributes.normal, lt = !!U.morphAttributes.color;
        let ct = ui;
        O.toneMapped && (C === null || C.isXRRenderTarget === true) && (ct = b.toneMapping);
        const Wt = U.morphAttributes.position || U.morphAttributes.normal || U.morphAttributes.color, Ke = Wt !== void 0 ? Wt.length : 0, ge = Te.get(O), Tt = m.state.lights;
        if (G === true && (J === true || x !== S)) {
          const Zt = x === S && O.id === F;
          Ie.setState(O, x, Zt);
        }
        let qe = false;
        O.version === ge.__version ? (ge.needsLights && ge.lightsStateVersion !== Tt.state.version || ge.outputColorSpace !== de || D.isBatchedMesh && ge.batching === false || !D.isBatchedMesh && ge.batching === true || D.isBatchedMesh && ge.batchingColor === true && D.colorTexture === null || D.isBatchedMesh && ge.batchingColor === false && D.colorTexture !== null || D.isInstancedMesh && ge.instancing === false || !D.isInstancedMesh && ge.instancing === true || D.isSkinnedMesh && ge.skinning === false || !D.isSkinnedMesh && ge.skinning === true || D.isInstancedMesh && ge.instancingColor === true && D.instanceColor === null || D.isInstancedMesh && ge.instancingColor === false && D.instanceColor !== null || D.isInstancedMesh && ge.instancingMorph === true && D.morphTexture === null || D.isInstancedMesh && ge.instancingMorph === false && D.morphTexture !== null || ge.envMap !== pe || O.fog === true && ge.fog !== te || ge.numClippingPlanes !== void 0 && (ge.numClippingPlanes !== Ie.numPlanes || ge.numIntersection !== Ie.numIntersection) || ge.vertexAlphas !== Me || ge.vertexTangents !== Ee || ge.morphTargets !== _e || ge.morphNormals !== je || ge.morphColors !== lt || ge.toneMapping !== ct || ge.morphTargetsCount !== Ke) && (qe = true) : (qe = true, ge.__version = O.version);
        let sn = ge.currentProgram;
        qe === true && (sn = mr(O, I, D));
        let Ui = false, Xt = false, Do = false;
        const pt = sn.getUniforms(), qn = ge.uniforms;
        if (ve.useProgram(sn.program) && (Ui = true, Xt = true, Do = true), O.id !== F && (F = O.id, Xt = true), Ui || S !== x) {
          pt.setValue(T, "projectionMatrix", x.projectionMatrix), pt.setValue(T, "viewMatrix", x.matrixWorldInverse);
          const Zt = pt.map.cameraPosition;
          Zt !== void 0 && Zt.setValue(T, le.setFromMatrixPosition(x.matrixWorld)), et.logarithmicDepthBuffer && pt.setValue(T, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && pt.setValue(T, "isOrthographic", x.isOrthographicCamera === true), S !== x && (S = x, Xt = true, Do = true);
        }
        if (D.isSkinnedMesh) {
          pt.setOptional(T, D, "bindMatrix"), pt.setOptional(T, D, "bindMatrixInverse");
          const Zt = D.skeleton;
          Zt && (Zt.boneTexture === null && Zt.computeBoneTexture(), pt.setValue(T, "boneTexture", Zt.boneTexture, Pe));
        }
        D.isBatchedMesh && (pt.setOptional(T, D, "batchingTexture"), pt.setValue(T, "batchingTexture", D._matricesTexture, Pe), pt.setOptional(T, D, "batchingIdTexture"), pt.setValue(T, "batchingIdTexture", D._indirectTexture, Pe), pt.setOptional(T, D, "batchingColorTexture"), D._colorsTexture !== null && pt.setValue(T, "batchingColorTexture", D._colorsTexture, Pe));
        const No = U.morphAttributes;
        if ((No.position !== void 0 || No.normal !== void 0 || No.color !== void 0) && ke.update(D, U, sn), (Xt || ge.receiveShadow !== D.receiveShadow) && (ge.receiveShadow = D.receiveShadow, pt.setValue(T, "receiveShadow", D.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (qn.envMap.value = pe, qn.flipEnvMap.value = pe.isCubeTexture && pe.isRenderTargetTexture === false ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && I.environment !== null && (qn.envMapIntensity.value = I.environmentIntensity), Xt && (pt.setValue(T, "toneMappingExposure", b.toneMappingExposure), ge.needsLights && op(qn, Do), te && O.fog === true && xe.refreshFogUniforms(qn, te), xe.refreshMaterialUniforms(qn, O, Z, z, m.state.transmissionRenderTarget[x.id]), Jr.upload(T, gc(ge), qn, Pe)), O.isShaderMaterial && O.uniformsNeedUpdate === true && (Jr.upload(T, gc(ge), qn, Pe), O.uniformsNeedUpdate = false), O.isSpriteMaterial && pt.setValue(T, "center", D.center), pt.setValue(T, "modelViewMatrix", D.modelViewMatrix), pt.setValue(T, "normalMatrix", D.normalMatrix), pt.setValue(T, "modelMatrix", D.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
          const Zt = O.uniformsGroups;
          for (let Uo = 0, lp = Zt.length; Uo < lp; Uo++) {
            const xc = Zt[Uo];
            st.update(xc, sn), st.bind(xc, sn);
          }
        }
        return sn;
      }
      function op(x, I) {
        x.ambientLightColor.needsUpdate = I, x.lightProbe.needsUpdate = I, x.directionalLights.needsUpdate = I, x.directionalLightShadows.needsUpdate = I, x.pointLights.needsUpdate = I, x.pointLightShadows.needsUpdate = I, x.spotLights.needsUpdate = I, x.spotLightShadows.needsUpdate = I, x.rectAreaLights.needsUpdate = I, x.hemisphereLights.needsUpdate = I;
      }
      function ap(x) {
        return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
      }
      this.getActiveCubeFace = function() {
        return N;
      }, this.getActiveMipmapLevel = function() {
        return A;
      }, this.getRenderTarget = function() {
        return C;
      }, this.setRenderTargetTextures = function(x, I, U) {
        Te.get(x.texture).__webglTexture = I, Te.get(x.depthTexture).__webglTexture = U;
        const O = Te.get(x);
        O.__hasExternalTextures = true, O.__autoAllocateDepthBuffer = U === void 0, O.__autoAllocateDepthBuffer || Ze.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = false);
      }, this.setRenderTargetFramebuffer = function(x, I) {
        const U = Te.get(x);
        U.__webglFramebuffer = I, U.__useDefaultFramebuffer = I === void 0;
      }, this.setRenderTarget = function(x, I = 0, U = 0) {
        C = x, N = I, A = U;
        let O = true, D = null, te = false, re = false;
        if (x) {
          const pe = Te.get(x);
          if (pe.__useDefaultFramebuffer !== void 0) ve.bindFramebuffer(T.FRAMEBUFFER, null), O = false;
          else if (pe.__webglFramebuffer === void 0) Pe.setupRenderTarget(x);
          else if (pe.__hasExternalTextures) Pe.rebindTextures(x, Te.get(x.texture).__webglTexture, Te.get(x.depthTexture).__webglTexture);
          else if (x.depthBuffer) {
            const _e = x.depthTexture;
            if (pe.__boundDepthTexture !== _e) {
              if (_e !== null && Te.has(_e) && (x.width !== _e.image.width || x.height !== _e.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              Pe.setupDepthRenderbuffer(x);
            }
          }
          const Me = x.texture;
          (Me.isData3DTexture || Me.isDataArrayTexture || Me.isCompressedArrayTexture) && (re = true);
          const Ee = Te.get(x).__webglFramebuffer;
          x.isWebGLCubeRenderTarget ? (Array.isArray(Ee[I]) ? D = Ee[I][U] : D = Ee[I], te = true) : x.samples > 0 && Pe.useMultisampledRTT(x) === false ? D = Te.get(x).__webglMultisampledFramebuffer : Array.isArray(Ee) ? D = Ee[U] : D = Ee, y.copy(x.viewport), L.copy(x.scissor), X = x.scissorTest;
        } else y.copy(he).multiplyScalar(Z).floor(), L.copy(me).multiplyScalar(Z).floor(), X = Be;
        if (ve.bindFramebuffer(T.FRAMEBUFFER, D) && O && ve.drawBuffers(x, D), ve.viewport(y), ve.scissor(L), ve.setScissorTest(X), te) {
          const pe = Te.get(x.texture);
          T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_CUBE_MAP_POSITIVE_X + I, pe.__webglTexture, U);
        } else if (re) {
          const pe = Te.get(x.texture), Me = I || 0;
          T.framebufferTextureLayer(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, pe.__webglTexture, U || 0, Me);
        }
        F = -1;
      }, this.readRenderTargetPixels = function(x, I, U, O, D, te, re) {
        if (!(x && x.isWebGLRenderTarget)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          return;
        }
        let de = Te.get(x).__webglFramebuffer;
        if (x.isWebGLCubeRenderTarget && re !== void 0 && (de = de[re]), de) {
          ve.bindFramebuffer(T.FRAMEBUFFER, de);
          try {
            const pe = x.texture, Me = pe.format, Ee = pe.type;
            if (!et.textureFormatReadable(Me)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              return;
            }
            if (!et.textureTypeReadable(Ee)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
              return;
            }
            I >= 0 && I <= x.width - O && U >= 0 && U <= x.height - D && T.readPixels(I, U, O, D, Ce.convert(Me), Ce.convert(Ee), te);
          } finally {
            const pe = C !== null ? Te.get(C).__webglFramebuffer : null;
            ve.bindFramebuffer(T.FRAMEBUFFER, pe);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(x, I, U, O, D, te, re) {
        if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let de = Te.get(x).__webglFramebuffer;
        if (x.isWebGLCubeRenderTarget && re !== void 0 && (de = de[re]), de) {
          ve.bindFramebuffer(T.FRAMEBUFFER, de);
          try {
            const pe = x.texture, Me = pe.format, Ee = pe.type;
            if (!et.textureFormatReadable(Me)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
            if (!et.textureTypeReadable(Ee)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
            if (I >= 0 && I <= x.width - O && U >= 0 && U <= x.height - D) {
              const _e = T.createBuffer();
              T.bindBuffer(T.PIXEL_PACK_BUFFER, _e), T.bufferData(T.PIXEL_PACK_BUFFER, te.byteLength, T.STREAM_READ), T.readPixels(I, U, O, D, Ce.convert(Me), Ce.convert(Ee), 0), T.flush();
              const je = T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE, 0);
              await Ef(T, je, 4);
              try {
                T.bindBuffer(T.PIXEL_PACK_BUFFER, _e), T.getBufferSubData(T.PIXEL_PACK_BUFFER, 0, te);
              } finally {
                T.deleteBuffer(_e), T.deleteSync(je);
              }
              return te;
            }
          } finally {
            const pe = C !== null ? Te.get(C).__webglFramebuffer : null;
            ve.bindFramebuffer(T.FRAMEBUFFER, pe);
          }
        }
      }, this.copyFramebufferToTexture = function(x, I = null, U = 0) {
        x.isTexture !== true && (cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, x = arguments[1]);
        const O = Math.pow(2, -U), D = Math.floor(x.image.width * O), te = Math.floor(x.image.height * O), re = I !== null ? I.x : 0, de = I !== null ? I.y : 0;
        Pe.setTexture2D(x, 0), T.copyTexSubImage2D(T.TEXTURE_2D, U, 0, 0, re, de, D, te), ve.unbindTexture();
      }, this.copyTextureToTexture = function(x, I, U = null, O = null, D = 0) {
        x.isTexture !== true && (cs("WebGLRenderer: copyTextureToTexture function signature has changed."), O = arguments[0] || null, x = arguments[1], I = arguments[2], D = arguments[3] || 0, U = null);
        let te, re, de, pe, Me, Ee;
        U !== null ? (te = U.max.x - U.min.x, re = U.max.y - U.min.y, de = U.min.x, pe = U.min.y) : (te = x.image.width, re = x.image.height, de = 0, pe = 0), O !== null ? (Me = O.x, Ee = O.y) : (Me = 0, Ee = 0);
        const _e = Ce.convert(I.format), je = Ce.convert(I.type);
        Pe.setTexture2D(I, 0), T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, I.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, I.unpackAlignment);
        const lt = T.getParameter(T.UNPACK_ROW_LENGTH), ct = T.getParameter(T.UNPACK_IMAGE_HEIGHT), Wt = T.getParameter(T.UNPACK_SKIP_PIXELS), Ke = T.getParameter(T.UNPACK_SKIP_ROWS), ge = T.getParameter(T.UNPACK_SKIP_IMAGES), Tt = x.isCompressedTexture ? x.mipmaps[D] : x.image;
        T.pixelStorei(T.UNPACK_ROW_LENGTH, Tt.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, Tt.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, de), T.pixelStorei(T.UNPACK_SKIP_ROWS, pe), x.isDataTexture ? T.texSubImage2D(T.TEXTURE_2D, D, Me, Ee, te, re, _e, je, Tt.data) : x.isCompressedTexture ? T.compressedTexSubImage2D(T.TEXTURE_2D, D, Me, Ee, Tt.width, Tt.height, _e, Tt.data) : T.texSubImage2D(T.TEXTURE_2D, D, Me, Ee, te, re, _e, je, Tt), T.pixelStorei(T.UNPACK_ROW_LENGTH, lt), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, ct), T.pixelStorei(T.UNPACK_SKIP_PIXELS, Wt), T.pixelStorei(T.UNPACK_SKIP_ROWS, Ke), T.pixelStorei(T.UNPACK_SKIP_IMAGES, ge), D === 0 && I.generateMipmaps && T.generateMipmap(T.TEXTURE_2D), ve.unbindTexture();
      }, this.copyTextureToTexture3D = function(x, I, U = null, O = null, D = 0) {
        x.isTexture !== true && (cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."), U = arguments[0] || null, O = arguments[1] || null, x = arguments[2], I = arguments[3], D = arguments[4] || 0);
        let te, re, de, pe, Me, Ee, _e, je, lt;
        const ct = x.isCompressedTexture ? x.mipmaps[D] : x.image;
        U !== null ? (te = U.max.x - U.min.x, re = U.max.y - U.min.y, de = U.max.z - U.min.z, pe = U.min.x, Me = U.min.y, Ee = U.min.z) : (te = ct.width, re = ct.height, de = ct.depth, pe = 0, Me = 0, Ee = 0), O !== null ? (_e = O.x, je = O.y, lt = O.z) : (_e = 0, je = 0, lt = 0);
        const Wt = Ce.convert(I.format), Ke = Ce.convert(I.type);
        let ge;
        if (I.isData3DTexture) Pe.setTexture3D(I, 0), ge = T.TEXTURE_3D;
        else if (I.isDataArrayTexture || I.isCompressedArrayTexture) Pe.setTexture2DArray(I, 0), ge = T.TEXTURE_2D_ARRAY;
        else {
          console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
          return;
        }
        T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, I.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, I.unpackAlignment);
        const Tt = T.getParameter(T.UNPACK_ROW_LENGTH), qe = T.getParameter(T.UNPACK_IMAGE_HEIGHT), sn = T.getParameter(T.UNPACK_SKIP_PIXELS), Ui = T.getParameter(T.UNPACK_SKIP_ROWS), Xt = T.getParameter(T.UNPACK_SKIP_IMAGES);
        T.pixelStorei(T.UNPACK_ROW_LENGTH, ct.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, ct.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, pe), T.pixelStorei(T.UNPACK_SKIP_ROWS, Me), T.pixelStorei(T.UNPACK_SKIP_IMAGES, Ee), x.isDataTexture || x.isData3DTexture ? T.texSubImage3D(ge, D, _e, je, lt, te, re, de, Wt, Ke, ct.data) : I.isCompressedArrayTexture ? T.compressedTexSubImage3D(ge, D, _e, je, lt, te, re, de, Wt, ct.data) : T.texSubImage3D(ge, D, _e, je, lt, te, re, de, Wt, Ke, ct), T.pixelStorei(T.UNPACK_ROW_LENGTH, Tt), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, qe), T.pixelStorei(T.UNPACK_SKIP_PIXELS, sn), T.pixelStorei(T.UNPACK_SKIP_ROWS, Ui), T.pixelStorei(T.UNPACK_SKIP_IMAGES, Xt), D === 0 && I.generateMipmaps && T.generateMipmap(ge), ve.unbindTexture();
      }, this.initRenderTarget = function(x) {
        Te.get(x).__webglFramebuffer === void 0 && Pe.setupRenderTarget(x);
      }, this.initTexture = function(x) {
        x.isCubeTexture ? Pe.setTextureCube(x, 0) : x.isData3DTexture ? Pe.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Pe.setTexture2DArray(x, 0) : Pe.setTexture2D(x, 0), ve.unbindTexture();
      }, this.resetState = function() {
        N = 0, A = 0, C = null, ve.reset(), Ue.reset();
      }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    get coordinateSystem() {
      return kn;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e) {
      this._outputColorSpace = e;
      const t = this.getContext();
      t.drawingBufferColorSpace = e === Tl ? "display-p3" : "srgb", t.unpackColorSpace = ze.workingColorSpace === vo ? "display-p3" : "srgb";
    }
  }
  class Nx extends ot {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new yn(), this.environmentIntensity = 1, this.environmentRotation = new yn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    copy(e, t) {
      return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
    }
  }
  class Ux {
    constructor(e, t) {
      this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = sl, this._updateRange = {
        offset: 0,
        count: -1
      }, this.updateRanges = [], this.version = 0, this.uuid = un();
    }
    onUploadCallback() {
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    get updateRange() {
      return cs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
    }
    setUsage(e) {
      return this.usage = e, this;
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({
        start: e,
        count: t
      });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
    }
    copyAt(e, t, n) {
      e *= this.stride, n *= t.stride;
      for (let s = 0, r = this.stride; s < r; s++) this.array[e + s] = t.array[n + s];
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    clone(e) {
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    toJSON(e) {
      return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  }
  const Dt = new R();
  class Ll {
    constructor(e, t, n, s = false) {
      this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = s;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++) Dt.fromBufferAttribute(this, t), Dt.applyMatrix4(e), this.setXYZ(t, Dt.x, Dt.y, Dt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) Dt.fromBufferAttribute(this, t), Dt.applyNormalMatrix(e), this.setXYZ(t, Dt.x, Dt.y, Dt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) Dt.fromBufferAttribute(this, t), Dt.transformDirection(e), this.setXYZ(t, Dt.x, Dt.y, Dt.z);
      return this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.data.stride + this.offset + t];
      return this.normalized && (n = cn(n, this.array)), n;
    }
    setComponent(e, t, n) {
      return this.normalized && (n = Je(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
    }
    setX(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
    }
    setY(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
    }
    setZ(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
    }
    setW(e, t) {
      return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return this.normalized && (t = cn(t, this.array)), t;
    }
    setXY(e, t, n) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, s) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), s = Je(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this;
    }
    setXYZW(e, t, n, s, r) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), s = Je(s, this.array), r = Je(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
    }
    clone(e) {
      if (e === void 0) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const s = n * this.data.stride + this.offset;
          for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
        }
        return new Rt(new this.array.constructor(t), this.itemSize, this.normalized);
      } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ll(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(e) {
      if (e === void 0) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const s = n * this.data.stride + this.offset;
          for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: t,
          normalized: this.normalized
        };
      } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: true,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  }
  const gh = new R(), vh = new nt(), xh = new nt(), Ox = new R(), yh = new Le(), Fr = new R(), la = new Sn(), bh = new Le(), ca = new or();
  class Fx extends Vt {
    constructor(e, t) {
      super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Ec, this.bindMatrix = new Le(), this.bindMatrixInverse = new Le(), this.boundingBox = null, this.boundingSphere = null;
    }
    computeBoundingBox() {
      const e = this.geometry;
      this.boundingBox === null && (this.boundingBox = new Kn()), this.boundingBox.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Fr), this.boundingBox.expandByPoint(Fr);
    }
    computeBoundingSphere() {
      const e = this.geometry;
      this.boundingSphere === null && (this.boundingSphere = new Sn()), this.boundingSphere.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Fr), this.boundingSphere.expandByPoint(Fr);
    }
    copy(e, t) {
      return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
    }
    raycast(e, t) {
      const n = this.material, s = this.matrixWorld;
      n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), la.copy(this.boundingSphere), la.applyMatrix4(s), e.ray.intersectsSphere(la) !== false && (bh.copy(s).invert(), ca.copy(e.ray).applyMatrix4(bh), !(this.boundingBox !== null && ca.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, ca)));
    }
    getVertexPosition(e, t) {
      return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
    }
    bind(e, t) {
      this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const e = new nt(), t = this.geometry.attributes.skinWeight;
      for (let n = 0, s = t.count; n < s; n++) {
        e.fromBufferAttribute(t, n);
        const r = 1 / e.manhattanLength();
        r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.bindMode === Ec ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Wp ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    applyBoneTransform(e, t) {
      const n = this.skeleton, s = this.geometry;
      vh.fromBufferAttribute(s.attributes.skinIndex, e), xh.fromBufferAttribute(s.attributes.skinWeight, e), gh.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
      for (let r = 0; r < 4; r++) {
        const o = xh.getComponent(r);
        if (o !== 0) {
          const a = vh.getComponent(r);
          yh.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Ox.copy(gh).applyMatrix4(yh), o);
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
  }
  class Zu extends ot {
    constructor() {
      super(), this.isBone = true, this.type = "Bone";
    }
  }
  class Ju extends bt {
    constructor(e = null, t = 1, n = 1, s, r, o, a, l, c = Ot, h = Ot, u, d) {
      super(null, o, a, l, c, h, s, r, u, d), this.isDataTexture = true, this.image = {
        data: e,
        width: t,
        height: n
      }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  const Mh = new Le(), Bx = new Le();
  class Il {
    constructor(e = [], t = []) {
      this.uuid = un(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
    }
    init() {
      const e = this.bones, t = this.boneInverses;
      if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
      else if (e.length !== t.length) {
        console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
        for (let n = 0, s = this.bones.length; n < s; n++) this.boneInverses.push(new Le());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = new Le();
        this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n && n.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
      }
    }
    update() {
      const e = this.bones, t = this.boneInverses, n = this.boneMatrices, s = this.boneTexture;
      for (let r = 0, o = e.length; r < o; r++) {
        const a = e[r] ? e[r].matrixWorld : Bx;
        Mh.multiplyMatrices(a, t[r]), Mh.toArray(n, r * 16);
      }
      s !== null && (s.needsUpdate = true);
    }
    clone() {
      return new Il(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
      const t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      const n = new Ju(t, e, e, tn, hn);
      return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this;
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        const s = this.bones[t];
        if (s.name === e) return s;
      }
    }
    dispose() {
      this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, s = e.bones.length; n < s; n++) {
        const r = e.bones[n];
        let o = t[r];
        o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Zu()), this.bones.push(o), this.boneInverses.push(new Le().fromArray(e.boneInverses[n]));
      }
      return this.init(), this;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.6,
          type: "Skeleton",
          generator: "Skeleton.toJSON"
        },
        bones: [],
        boneInverses: []
      };
      e.uuid = this.uuid;
      const t = this.bones, n = this.boneInverses;
      for (let s = 0, r = t.length; s < r; s++) {
        const o = t[s];
        e.bones.push(o.uuid);
        const a = n[s];
        e.boneInverses.push(a.toArray());
      }
      return e;
    }
  }
  class ol extends Rt {
    constructor(e, t, n, s = 1) {
      super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = s;
    }
    copy(e) {
      return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
    }
  }
  const Qi = new Le(), Sh = new Le(), Br = [], Eh = new Kn(), kx = new Le(), Fs = new Vt(), Bs = new Sn();
  class Vx extends Vt {
    constructor(e, t, n) {
      super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new ol(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
      for (let s = 0; s < n; s++) this.setMatrixAt(s, kx);
    }
    computeBoundingBox() {
      const e = this.geometry, t = this.count;
      this.boundingBox === null && (this.boundingBox = new Kn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
      for (let n = 0; n < t; n++) this.getMatrixAt(n, Qi), Eh.copy(e.boundingBox).applyMatrix4(Qi), this.boundingBox.union(Eh);
    }
    computeBoundingSphere() {
      const e = this.geometry, t = this.count;
      this.boundingSphere === null && (this.boundingSphere = new Sn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
      for (let n = 0; n < t; n++) this.getMatrixAt(n, Qi), Bs.copy(e.boundingSphere).applyMatrix4(Qi), this.boundingSphere.union(Bs);
    }
    copy(e, t) {
      return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
    }
    getColorAt(e, t) {
      t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
      t.fromArray(this.instanceMatrix.array, e * 16);
    }
    getMorphAt(e, t) {
      const n = t.morphTargetInfluences, s = this.morphTexture.source.data.data, r = n.length + 1, o = e * r + 1;
      for (let a = 0; a < n.length; a++) n[a] = s[o + a];
    }
    raycast(e, t) {
      const n = this.matrixWorld, s = this.count;
      if (Fs.geometry = this.geometry, Fs.material = this.material, Fs.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Bs.copy(this.boundingSphere), Bs.applyMatrix4(n), e.ray.intersectsSphere(Bs) !== false)) for (let r = 0; r < s; r++) {
        this.getMatrixAt(r, Qi), Sh.multiplyMatrices(n, Qi), Fs.matrixWorld = Sh, Fs.raycast(e, Br);
        for (let o = 0, a = Br.length; o < a; o++) {
          const l = Br[o];
          l.instanceId = r, l.object = this, t.push(l);
        }
        Br.length = 0;
      }
    }
    setColorAt(e, t) {
      this.instanceColor === null && (this.instanceColor = new ol(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, e * 16);
    }
    setMorphAt(e, t) {
      const n = t.morphTargetInfluences, s = n.length + 1;
      this.morphTexture === null && (this.morphTexture = new Ju(new Float32Array(s * this.count), s, this.count, bl, hn));
      const r = this.morphTexture.source.data.data;
      let o = 0;
      for (let c = 0; c < n.length; c++) o += n[c];
      const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = s * e;
      r[l] = a, r.set(n, l + 1);
    }
    updateMorphTargets() {
    }
    dispose() {
      return this.dispatchEvent({
        type: "dispose"
      }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
    }
  }
  class Qu extends xn {
    constructor(e) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ae(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
    }
  }
  const co = new R(), ho = new R(), wh = new Le(), ks = new or(), kr = new Sn(), ha = new R(), Th = new R();
  class Dl extends ot {
    constructor(e = new dn(), t = new Qu()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position, n = [
          0
        ];
        for (let s = 1, r = t.count; s < r; s++) co.fromBufferAttribute(t, s - 1), ho.fromBufferAttribute(t, s), n[s] = n[s - 1], n[s] += co.distanceTo(ho);
        e.setAttribute("lineDistance", new Hn(n, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(e, t) {
      const n = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), kr.copy(n.boundingSphere), kr.applyMatrix4(s), kr.radius += r, e.ray.intersectsSphere(kr) === false) return;
      wh.copy(s).invert(), ks.copy(e.ray).applyMatrix4(wh);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
      if (h !== null) {
        const p = Math.max(0, o.start), _ = Math.min(h.count, o.start + o.count);
        for (let g = p, m = _ - 1; g < m; g += c) {
          const f = h.getX(g), M = h.getX(g + 1), b = Vr(this, e, ks, l, f, M);
          b && t.push(b);
        }
        if (this.isLineLoop) {
          const g = h.getX(_ - 1), m = h.getX(p), f = Vr(this, e, ks, l, g, m);
          f && t.push(f);
        }
      } else {
        const p = Math.max(0, o.start), _ = Math.min(d.count, o.start + o.count);
        for (let g = p, m = _ - 1; g < m; g += c) {
          const f = Vr(this, e, ks, l, g, g + 1);
          f && t.push(f);
        }
        if (this.isLineLoop) {
          const g = Vr(this, e, ks, l, _ - 1, p);
          g && t.push(g);
        }
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const s = t[n[0]];
        if (s !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, o = s.length; r < o; r++) {
            const a = s[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
          }
        }
      }
    }
  }
  function Vr(i, e, t, n, s, r) {
    const o = i.geometry.attributes.position;
    if (co.fromBufferAttribute(o, s), ho.fromBufferAttribute(o, r), t.distanceSqToSegment(co, ho, ha, Th) > n) return;
    ha.applyMatrix4(i.matrixWorld);
    const l = e.ray.origin.distanceTo(ha);
    if (!(l < e.near || l > e.far)) return {
      distance: l,
      point: Th.clone().applyMatrix4(i.matrixWorld),
      index: s,
      face: null,
      faceIndex: null,
      object: i
    };
  }
  const Ah = new R(), Ch = new R();
  class zx extends Dl {
    constructor(e, t) {
      super(e, t), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position, n = [];
        for (let s = 0, r = t.count; s < r; s += 2) Ah.fromBufferAttribute(t, s), Ch.fromBufferAttribute(t, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + Ah.distanceTo(Ch);
        e.setAttribute("lineDistance", new Hn(n, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  }
  class Hx extends Dl {
    constructor(e, t) {
      super(e, t), this.isLineLoop = true, this.type = "LineLoop";
    }
  }
  class ed extends xn {
    constructor(e) {
      super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ae(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
    }
  }
  const Rh = new Le(), al = new or(), zr = new Sn(), Hr = new R();
  class Gx extends ot {
    constructor(e = new dn(), t = new ed()) {
      super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    raycast(e, t) {
      const n = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), zr.copy(n.boundingSphere), zr.applyMatrix4(s), zr.radius += r, e.ray.intersectsSphere(zr) === false) return;
      Rh.copy(s).invert(), al.copy(e.ray).applyMatrix4(Rh);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position;
      if (c !== null) {
        const d = Math.max(0, o.start), p = Math.min(c.count, o.start + o.count);
        for (let _ = d, g = p; _ < g; _++) {
          const m = c.getX(_);
          Hr.fromBufferAttribute(u, m), Ph(Hr, m, l, s, e, t, this);
        }
      } else {
        const d = Math.max(0, o.start), p = Math.min(u.count, o.start + o.count);
        for (let _ = d, g = p; _ < g; _++) Hr.fromBufferAttribute(u, _), Ph(Hr, _, l, s, e, t, this);
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const s = t[n[0]];
        if (s !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, o = s.length; r < o; r++) {
            const a = s[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
          }
        }
      }
    }
  }
  function Ph(i, e, t, n, s, r, o) {
    const a = al.distanceSqToPoint(i);
    if (a < t) {
      const l = new R();
      al.closestPointToPoint(i, l), l.applyMatrix4(n);
      const c = s.ray.origin.distanceTo(l);
      if (c < s.near || c > s.far) return;
      r.push({
        distance: c,
        distanceToRay: Math.sqrt(a),
        point: l,
        index: e,
        face: null,
        object: o
      });
    }
  }
  class bo extends xn {
    constructor(e) {
      super(), this.isMeshStandardMaterial = true, this.defines = {
        STANDARD: ""
      }, this.type = "MeshStandardMaterial", this.color = new Ae(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ae(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Iu, this.normalScale = new ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new yn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: ""
      }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
    }
  }
  class En extends bo {
    constructor(e) {
      super(), this.isMeshPhysicalMaterial = true, this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ye(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
        get: function() {
          return Ct(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
        },
        set: function(t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        }
      }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
        100,
        400
      ], this.iridescenceThicknessMap = null, this.sheenColor = new Ae(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ae(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ae(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
    }
    get anisotropy() {
      return this._anisotropy;
    }
    set anisotropy(e) {
      this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(e) {
      this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(e) {
      this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
    }
    get dispersion() {
      return this._dispersion;
    }
    set dispersion(e) {
      this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(e) {
      this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(e) {
      this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [
        ...e.iridescenceThicknessRange
      ], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
    }
  }
  function Gr(i, e, t) {
    return !i || !t && i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i);
  }
  function Wx(i) {
    return ArrayBuffer.isView(i) && !(i instanceof DataView);
  }
  function Xx(i) {
    function e(s, r) {
      return i[s] - i[r];
    }
    const t = i.length, n = new Array(t);
    for (let s = 0; s !== t; ++s) n[s] = s;
    return n.sort(e), n;
  }
  function Lh(i, e, t) {
    const n = i.length, s = new i.constructor(n);
    for (let r = 0, o = 0; o !== n; ++r) {
      const a = t[r] * e;
      for (let l = 0; l !== e; ++l) s[o++] = i[a + l];
    }
    return s;
  }
  function td(i, e, t, n) {
    let s = 1, r = i[0];
    for (; r !== void 0 && r[n] === void 0; ) r = i[s++];
    if (r === void 0) return;
    let o = r[n];
    if (o !== void 0) if (Array.isArray(o)) do
      o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = i[s++];
    while (r !== void 0);
    else if (o.toArray !== void 0) do
      o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = i[s++];
    while (r !== void 0);
    else do
      o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = i[s++];
    while (r !== void 0);
  }
  class ar {
    constructor(e, t, n, s) {
      this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = s !== void 0 ? s : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(e) {
      const t = this.parameterPositions;
      let n = this._cachedIndex, s = t[n], r = t[n - 1];
      e: {
        t: {
          let o;
          n: {
            i: if (!(e < s)) {
              for (let a = n + 2; ; ) {
                if (s === void 0) {
                  if (e < r) break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === a) break;
                if (r = s, s = t[++n], e < s) break t;
              }
              o = t.length;
              break n;
            }
            if (!(e >= r)) {
              const a = t[1];
              e < a && (n = 2, r = a);
              for (let l = n - 2; ; ) {
                if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n === l) break;
                if (s = r, r = t[--n - 1], e >= r) break t;
              }
              o = n, n = 0;
              break n;
            }
            break e;
          }
          for (; n < o; ) {
            const a = n + o >>> 1;
            e < t[a] ? o = a : n = a + 1;
          }
          if (s = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (s === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
        }
        this._cachedIndex = n, this.intervalChanged_(n, r, s);
      }
      return this.interpolate_(n, r, e, s);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = e * s;
      for (let o = 0; o !== s; ++o) t[o] = n[r + o];
      return t;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  }
  class jx extends ar {
    constructor(e, t, n, s) {
      super(e, t, n, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
        endingStart: is,
        endingEnd: is
      };
    }
    intervalChanged_(e, t, n) {
      const s = this.parameterPositions;
      let r = e - 2, o = e + 1, a = s[r], l = s[o];
      if (a === void 0) switch (this.getSettings_().endingStart) {
        case ss:
          r = e, a = 2 * t - n;
          break;
        case so:
          r = s.length - 2, a = t + s[r] - s[r + 1];
          break;
        default:
          r = e, a = n;
      }
      if (l === void 0) switch (this.getSettings_().endingEnd) {
        case ss:
          o = e, l = 2 * n - t;
          break;
        case so:
          o = 1, l = n + s[1] - s[0];
          break;
        default:
          o = e - 1, l = t;
      }
      const c = (n - t) * 0.5, h = this.valueSize;
      this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = o * h;
    }
    interpolate_(e, t, n, s) {
      const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, _ = (n - t) / (s - t), g = _ * _, m = g * _, f = -d * m + 2 * d * g - d * _, M = (1 + d) * m + (-1.5 - 2 * d) * g + (-0.5 + d) * _ + 1, b = (-1 - p) * m + (1.5 + p) * g + 0.5 * _, E = p * m - p * g;
      for (let N = 0; N !== a; ++N) r[N] = f * o[h + N] + M * o[c + N] + b * o[l + N] + E * o[u + N];
      return r;
    }
  }
  class nd extends ar {
    constructor(e, t, n, s) {
      super(e, t, n, s);
    }
    interpolate_(e, t, n, s) {
      const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = (n - t) / (s - t), u = 1 - h;
      for (let d = 0; d !== a; ++d) r[d] = o[c + d] * u + o[l + d] * h;
      return r;
    }
  }
  class Kx extends ar {
    constructor(e, t, n, s) {
      super(e, t, n, s);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  }
  class wn {
    constructor(e, t, n, s) {
      if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
      this.name = e, this.times = Gr(t, this.TimeBufferType), this.values = Gr(n, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation);
    }
    static toJSON(e) {
      const t = e.constructor;
      let n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: Gr(e.times, Array),
          values: Gr(e.values, Array)
        };
        const s = e.getInterpolation();
        s !== e.DefaultInterpolation && (n.interpolation = s);
      }
      return n.type = e.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new Kx(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new nd(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new jx(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case Js:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case Qs:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case Oo:
          t = this.InterpolantFactoryMethodSmooth;
          break;
      }
      if (t === void 0) {
        const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
        return console.warn("THREE.KeyframeTrack:", n), this;
      }
      return this.createInterpolant = t, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Js;
        case this.InterpolantFactoryMethodLinear:
          return Qs;
        case this.InterpolantFactoryMethodSmooth:
          return Oo;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (e !== 0) {
        const t = this.times;
        for (let n = 0, s = t.length; n !== s; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (e !== 1) {
        const t = this.times;
        for (let n = 0, s = t.length; n !== s; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      const n = this.times, s = n.length;
      let r = 0, o = s - 1;
      for (; r !== s && n[r] < e; ) ++r;
      for (; o !== -1 && n[o] > t; ) --o;
      if (++o, r !== 0 || o !== s) {
        r >= o && (o = Math.max(o, 1), r = o - 1);
        const a = this.getValueSize();
        this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a);
      }
      return this;
    }
    validate() {
      let e = true;
      const t = this.getValueSize();
      t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
      const n = this.times, s = this.values, r = n.length;
      r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
      let o = null;
      for (let a = 0; a !== r; a++) {
        const l = n[a];
        if (typeof l == "number" && isNaN(l)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = false;
          break;
        }
        if (o !== null && o > l) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = false;
          break;
        }
        o = l;
      }
      if (s !== void 0 && Wx(s)) for (let a = 0, l = s.length; a !== l; ++a) {
        const c = s[a];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
          break;
        }
      }
      return e;
    }
    optimize() {
      const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), s = this.getInterpolation() === Oo, r = e.length - 1;
      let o = 1;
      for (let a = 1; a < r; ++a) {
        let l = false;
        const c = e[a], h = e[a + 1];
        if (c !== h && (a !== 1 || c !== e[0])) if (s) l = true;
        else {
          const u = a * n, d = u - n, p = u + n;
          for (let _ = 0; _ !== n; ++_) {
            const g = t[u + _];
            if (g !== t[d + _] || g !== t[p + _]) {
              l = true;
              break;
            }
          }
        }
        if (l) {
          if (a !== o) {
            e[o] = e[a];
            const u = a * n, d = o * n;
            for (let p = 0; p !== n; ++p) t[d + p] = t[u + p];
          }
          ++o;
        }
      }
      if (r > 0) {
        e[o] = e[r];
        for (let a = r * n, l = o * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];
        ++o;
      }
      return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this;
    }
    clone() {
      const e = this.times.slice(), t = this.values.slice(), n = this.constructor, s = new n(this.name, e, t);
      return s.createInterpolant = this.createInterpolant, s;
    }
  }
  wn.prototype.TimeBufferType = Float32Array;
  wn.prototype.ValueBufferType = Float32Array;
  wn.prototype.DefaultInterpolation = Qs;
  class Cs extends wn {
    constructor(e, t, n) {
      super(e, t, n);
    }
  }
  Cs.prototype.ValueTypeName = "bool";
  Cs.prototype.ValueBufferType = Array;
  Cs.prototype.DefaultInterpolation = Js;
  Cs.prototype.InterpolantFactoryMethodLinear = void 0;
  Cs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class id extends wn {
  }
  id.prototype.ValueTypeName = "color";
  class bs extends wn {
  }
  bs.prototype.ValueTypeName = "number";
  class qx extends ar {
    constructor(e, t, n, s) {
      super(e, t, n, s);
    }
    interpolate_(e, t, n, s) {
      const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (s - t);
      let c = e * a;
      for (let h = c + a; c !== h; c += 4) Mt.slerpFlat(r, 0, o, c - a, o, c, l);
      return r;
    }
  }
  class Ms extends wn {
    InterpolantFactoryMethodLinear(e) {
      return new qx(this.times, this.values, this.getValueSize(), e);
    }
  }
  Ms.prototype.ValueTypeName = "quaternion";
  Ms.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Rs extends wn {
    constructor(e, t, n) {
      super(e, t, n);
    }
  }
  Rs.prototype.ValueTypeName = "string";
  Rs.prototype.ValueBufferType = Array;
  Rs.prototype.DefaultInterpolation = Js;
  Rs.prototype.InterpolantFactoryMethodLinear = void 0;
  Rs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Ss extends wn {
  }
  Ss.prototype.ValueTypeName = "vector";
  class ll {
    constructor(e = "", t = -1, n = [], s = wl) {
      this.name = e, this.tracks = n, this.duration = t, this.blendMode = s, this.uuid = un(), this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
      const t = [], n = e.tracks, s = 1 / (e.fps || 1);
      for (let o = 0, a = n.length; o !== a; ++o) t.push($x(n[o]).scale(s));
      const r = new this(e.name, e.duration, t, e.blendMode);
      return r.uuid = e.uuid, r;
    }
    static toJSON(e) {
      const t = [], n = e.tracks, s = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode
      };
      for (let r = 0, o = n.length; r !== o; ++r) t.push(wn.toJSON(n[r]));
      return s;
    }
    static CreateFromMorphTargetSequence(e, t, n, s) {
      const r = t.length, o = [];
      for (let a = 0; a < r; a++) {
        let l = [], c = [];
        l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
        const h = Xx(l);
        l = Lh(l, 1, h), c = Lh(c, 1, h), !s && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new bs(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n));
      }
      return new this(e, -1, o);
    }
    static findByName(e, t) {
      let n = e;
      if (!Array.isArray(e)) {
        const s = e;
        n = s.geometry && s.geometry.animations || s.animations;
      }
      for (let s = 0; s < n.length; s++) if (n[s].name === t) return n[s];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
      const s = {}, r = /^([\w-]*?)([\d]+)$/;
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a], h = c.name.match(r);
        if (h && h.length > 1) {
          const u = h[1];
          let d = s[u];
          d || (s[u] = d = []), d.push(c);
        }
      }
      const o = [];
      for (const a in s) o.push(this.CreateFromMorphTargetSequence(a, s[a], t, n));
      return o;
    }
    static parseAnimation(e, t) {
      if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      const n = function(u, d, p, _, g) {
        if (p.length !== 0) {
          const m = [], f = [];
          td(p, m, f, _), m.length !== 0 && g.push(new u(d, m, f));
        }
      }, s = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
      let l = e.length || -1;
      const c = e.hierarchy || [];
      for (let u = 0; u < c.length; u++) {
        const d = c[u].keys;
        if (!(!d || d.length === 0)) if (d[0].morphTargets) {
          const p = {};
          let _;
          for (_ = 0; _ < d.length; _++) if (d[_].morphTargets) for (let g = 0; g < d[_].morphTargets.length; g++) p[d[_].morphTargets[g]] = -1;
          for (const g in p) {
            const m = [], f = [];
            for (let M = 0; M !== d[_].morphTargets.length; ++M) {
              const b = d[_];
              m.push(b.time), f.push(b.morphTarget === g ? 1 : 0);
            }
            s.push(new bs(".morphTargetInfluence[" + g + "]", m, f));
          }
          l = p.length * o;
        } else {
          const p = ".bones[" + t[u].name + "]";
          n(Ss, p + ".position", d, "pos", s), n(Ms, p + ".quaternion", d, "rot", s), n(Ss, p + ".scale", d, "scl", s);
        }
      }
      return s.length === 0 ? null : new this(r, l, s, a);
    }
    resetDuration() {
      const e = this.tracks;
      let t = 0;
      for (let n = 0, s = e.length; n !== s; ++n) {
        const r = this.tracks[n];
        t = Math.max(t, r.times[r.times.length - 1]);
      }
      return this.duration = t, this;
    }
    trim() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
      return this;
    }
    validate() {
      let e = true;
      for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
      return e;
    }
    optimize() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
      return this;
    }
    clone() {
      const e = [];
      for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
      return new this.constructor(this.name, this.duration, e, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function Yx(i) {
    switch (i.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return bs;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return Ss;
      case "color":
        return id;
      case "quaternion":
        return Ms;
      case "bool":
      case "boolean":
        return Cs;
      case "string":
        return Rs;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i);
  }
  function $x(i) {
    if (i.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = Yx(i.type);
    if (i.times === void 0) {
      const t = [], n = [];
      td(i.keys, t, n, "value"), i.times = t, i.values = n;
    }
    return e.parse !== void 0 ? e.parse(i) : new e(i.name, i.times, i.values, i.interpolation);
  }
  const li = {
    enabled: false,
    files: {},
    add: function(i, e) {
      this.enabled !== false && (this.files[i] = e);
    },
    get: function(i) {
      if (this.enabled !== false) return this.files[i];
    },
    remove: function(i) {
      delete this.files[i];
    },
    clear: function() {
      this.files = {};
    }
  };
  class Zx {
    constructor(e, t, n) {
      const s = this;
      let r = false, o = 0, a = 0, l;
      const c = [];
      this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
        a++, r === false && s.onStart !== void 0 && s.onStart(h, o, a), r = true;
      }, this.itemEnd = function(h) {
        o++, s.onProgress !== void 0 && s.onProgress(h, o, a), o === a && (r = false, s.onLoad !== void 0 && s.onLoad());
      }, this.itemError = function(h) {
        s.onError !== void 0 && s.onError(h);
      }, this.resolveURL = function(h) {
        return l ? l(h) : h;
      }, this.setURLModifier = function(h) {
        return l = h, this;
      }, this.addHandler = function(h, u) {
        return c.push(h, u), this;
      }, this.removeHandler = function(h) {
        const u = c.indexOf(h);
        return u !== -1 && c.splice(u, 2), this;
      }, this.getHandler = function(h) {
        for (let u = 0, d = c.length; u < d; u += 2) {
          const p = c[u], _ = c[u + 1];
          if (p.global && (p.lastIndex = 0), p.test(h)) return _;
        }
        return null;
      };
    }
  }
  const Jx = new Zx();
  class Di {
    constructor(e) {
      this.manager = e !== void 0 ? e : Jx, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(e, t) {
      const n = this;
      return new Promise(function(s, r) {
        n.load(e, s, t, r);
      });
    }
    parse() {
    }
    setCrossOrigin(e) {
      return this.crossOrigin = e, this;
    }
    setWithCredentials(e) {
      return this.withCredentials = e, this;
    }
    setPath(e) {
      return this.path = e, this;
    }
    setResourcePath(e) {
      return this.resourcePath = e, this;
    }
    setRequestHeader(e) {
      return this.requestHeader = e, this;
    }
  }
  Di.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  const Nn = {};
  class Qx extends Error {
    constructor(e, t) {
      super(e), this.response = t;
    }
  }
  class uo extends Di {
    constructor(e) {
      super(e);
    }
    load(e, t, n, s) {
      e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const r = li.get(e);
      if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
      if (Nn[e] !== void 0) {
        Nn[e].push({
          onLoad: t,
          onProgress: n,
          onError: s
        });
        return;
      }
      Nn[e] = [], Nn[e].push({
        onLoad: t,
        onProgress: n,
        onError: s
      });
      const o = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin"
      }), a = this.mimeType, l = this.responseType;
      fetch(o).then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
          const h = Nn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, _ = p !== 0;
          let g = 0;
          const m = new ReadableStream({
            start(f) {
              M();
              function M() {
                u.read().then(({ done: b, value: E }) => {
                  if (b) f.close();
                  else {
                    g += E.byteLength;
                    const N = new ProgressEvent("progress", {
                      lengthComputable: _,
                      loaded: g,
                      total: p
                    });
                    for (let A = 0, C = h.length; A < C; A++) {
                      const F = h[A];
                      F.onProgress && F.onProgress(N);
                    }
                    f.enqueue(E), M();
                  }
                }, (b) => {
                  f.error(b);
                });
              }
            }
          });
          return new Response(m);
        } else throw new Qx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
      }).then((c) => {
        switch (l) {
          case "arraybuffer":
            return c.arrayBuffer();
          case "blob":
            return c.blob();
          case "document":
            return c.text().then((h) => new DOMParser().parseFromString(h, a));
          case "json":
            return c.json();
          default:
            if (a === void 0) return c.text();
            {
              const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
              return c.arrayBuffer().then((_) => p.decode(_));
            }
        }
      }).then((c) => {
        li.add(e, c);
        const h = Nn[e];
        delete Nn[e];
        for (let u = 0, d = h.length; u < d; u++) {
          const p = h[u];
          p.onLoad && p.onLoad(c);
        }
      }).catch((c) => {
        const h = Nn[e];
        if (h === void 0) throw this.manager.itemError(e), c;
        delete Nn[e];
        for (let u = 0, d = h.length; u < d; u++) {
          const p = h[u];
          p.onError && p.onError(c);
        }
        this.manager.itemError(e);
      }).finally(() => {
        this.manager.itemEnd(e);
      }), this.manager.itemStart(e);
    }
    setResponseType(e) {
      return this.responseType = e, this;
    }
    setMimeType(e) {
      return this.mimeType = e, this;
    }
  }
  class e0 extends Di {
    constructor(e) {
      super(e);
    }
    load(e, t, n, s) {
      this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const r = this, o = li.get(e);
      if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
      const a = er("img");
      function l() {
        h(), li.add(e, this), t && t(this), r.manager.itemEnd(e);
      }
      function c(u) {
        h(), s && s(u), r.manager.itemError(e), r.manager.itemEnd(e);
      }
      function h() {
        a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
      }
      return a.addEventListener("load", l, false), a.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
    }
  }
  class sd extends Di {
    constructor(e) {
      super(e);
    }
    load(e, t, n, s) {
      const r = new bt(), o = new e0(this.manager);
      return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
        r.image = a, r.needsUpdate = true, t !== void 0 && t(r);
      }, n, s), r;
    }
  }
  class Mo extends ot {
    constructor(e, t = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Ae(e), this.intensity = t;
    }
    dispose() {
    }
    copy(e, t) {
      return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
    }
  }
  const ua = new Le(), Ih = new R(), Dh = new R();
  class Nl {
    constructor(e) {
      this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ye(512, 512), this.map = null, this.mapPass = null, this.matrix = new Le(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Cl(), this._frameExtents = new ye(1, 1), this._viewportCount = 1, this._viewports = [
        new nt(0, 0, 1, 1)
      ];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      const t = this.camera, n = this.matrix;
      Ih.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ih), Dh.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Dh), t.updateMatrixWorld(), ua.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ua), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(ua);
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
      return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const e = {};
      return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
    }
  }
  class t0 extends Nl {
    constructor() {
      super(new Ut(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
    }
    updateMatrices(e) {
      const t = this.camera, n = xs * 2 * e.angle * this.focus, s = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
      (n !== t.fov || s !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = s, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
    }
    copy(e) {
      return super.copy(e), this.focus = e.focus, this;
    }
  }
  class n0 extends Mo {
    constructor(e, t, n = 0, s = Math.PI / 3, r = 0, o = 2) {
      super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(ot.DEFAULT_UP), this.updateMatrix(), this.target = new ot(), this.distance = n, this.angle = s, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new t0();
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
  }
  const Nh = new Le(), Vs = new R(), da = new R();
  class i0 extends Nl {
    constructor() {
      super(new Ut(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new ye(4, 2), this._viewportCount = 6, this._viewports = [
        new nt(2, 1, 1, 1),
        new nt(0, 1, 1, 1),
        new nt(3, 1, 1, 1),
        new nt(1, 1, 1, 1),
        new nt(3, 0, 1, 1),
        new nt(1, 0, 1, 1)
      ], this._cubeDirections = [
        new R(1, 0, 0),
        new R(-1, 0, 0),
        new R(0, 0, 1),
        new R(0, 0, -1),
        new R(0, 1, 0),
        new R(0, -1, 0)
      ], this._cubeUps = [
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 0, 1),
        new R(0, 0, -1)
      ];
    }
    updateMatrices(e, t = 0) {
      const n = this.camera, s = this.matrix, r = e.distance || n.far;
      r !== n.far && (n.far = r, n.updateProjectionMatrix()), Vs.setFromMatrixPosition(e.matrixWorld), n.position.copy(Vs), da.copy(n.position), da.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(da), n.updateMatrixWorld(), s.makeTranslation(-Vs.x, -Vs.y, -Vs.z), Nh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nh);
    }
  }
  class s0 extends Mo {
    constructor(e, t, n = 0, s = 2) {
      super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = s, this.shadow = new i0();
    }
    get power() {
      return this.intensity * 4 * Math.PI;
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
    }
  }
  class r0 extends Nl {
    constructor() {
      super(new Rl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  }
  class rd extends Mo {
    constructor(e, t) {
      super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ot.DEFAULT_UP), this.updateMatrix(), this.target = new ot(), this.shadow = new r0();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
  }
  class o0 extends Mo {
    constructor(e, t) {
      super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
    }
  }
  class $s {
    static decodeText(e) {
      if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e);
      let t = "";
      for (let n = 0, s = e.length; n < s; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t));
      } catch {
        return t;
      }
    }
    static extractUrlBase(e) {
      const t = e.lastIndexOf("/");
      return t === -1 ? "./" : e.slice(0, t + 1);
    }
    static resolveURL(e, t) {
      return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
    }
  }
  class a0 extends Di {
    constructor(e) {
      super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
        premultiplyAlpha: "none"
      };
    }
    setOptions(e) {
      return this.options = e, this;
    }
    load(e, t, n, s) {
      e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const r = this, o = li.get(e);
      if (o !== void 0) {
        if (r.manager.itemStart(e), o.then) {
          o.then((c) => {
            t && t(c), r.manager.itemEnd(e);
          }).catch((c) => {
            s && s(c);
          });
          return;
        }
        return setTimeout(function() {
          t && t(o), r.manager.itemEnd(e);
        }, 0), o;
      }
      const a = {};
      a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
      const l = fetch(e, a).then(function(c) {
        return c.blob();
      }).then(function(c) {
        return createImageBitmap(c, Object.assign(r.options, {
          colorSpaceConversion: "none"
        }));
      }).then(function(c) {
        return li.add(e, c), t && t(c), r.manager.itemEnd(e), c;
      }).catch(function(c) {
        s && s(c), li.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
      });
      li.add(e, l), r.manager.itemStart(e);
    }
  }
  class l0 {
    constructor(e = true) {
      this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
    }
    start() {
      this.startTime = Uh(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    }
    stop() {
      this.getElapsedTime(), this.running = false, this.autoStart = false;
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let e = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const t = Uh();
        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
      }
      return e;
    }
  }
  function Uh() {
    return (typeof performance > "u" ? Date : performance).now();
  }
  class c0 {
    constructor(e, t, n) {
      this.binding = e, this.valueSize = n;
      let s, r, o;
      switch (t) {
        case "quaternion":
          s = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
          break;
        case "string":
        case "bool":
          s = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
          break;
        default:
          s = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
      }
      this._mixBufferRegion = s, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
    }
    accumulate(e, t) {
      const n = this.buffer, s = this.valueSize, r = e * s + s;
      let o = this.cumulativeWeight;
      if (o === 0) {
        for (let a = 0; a !== s; ++a) n[r + a] = n[a];
        o = t;
      } else {
        o += t;
        const a = t / o;
        this._mixBufferRegion(n, r, 0, a, s);
      }
      this.cumulativeWeight = o;
    }
    accumulateAdditive(e) {
      const t = this.buffer, n = this.valueSize, s = n * this._addIndex;
      this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, s, 0, e, n), this.cumulativeWeightAdditive += e;
    }
    apply(e) {
      const t = this.valueSize, n = this.buffer, s = e * t + t, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
      if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
        const l = t * this._origIndex;
        this._mixBufferRegion(n, s, l, 1 - r, t);
      }
      o > 0 && this._mixBufferRegionAdditive(n, s, this._addIndex * t, 1, t);
      for (let l = t, c = t + t; l !== c; ++l) if (n[l] !== n[l + t]) {
        a.setValue(n, s);
        break;
      }
    }
    saveOriginalState() {
      const e = this.binding, t = this.buffer, n = this.valueSize, s = n * this._origIndex;
      e.getValue(t, s);
      for (let r = n, o = s; r !== o; ++r) t[r] = t[s + r % n];
      this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
    }
    restoreOriginalState() {
      const e = this.valueSize * 3;
      this.binding.setValue(this.buffer, e);
    }
    _setAdditiveIdentityNumeric() {
      const e = this._addIndex * this.valueSize, t = e + this.valueSize;
      for (let n = e; n < t; n++) this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
      this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
    }
    _setAdditiveIdentityOther() {
      const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n];
    }
    _select(e, t, n, s, r) {
      if (s >= 0.5) for (let o = 0; o !== r; ++o) e[t + o] = e[n + o];
    }
    _slerp(e, t, n, s) {
      Mt.slerpFlat(e, t, e, t, e, n, s);
    }
    _slerpAdditive(e, t, n, s, r) {
      const o = this._workIndex * r;
      Mt.multiplyQuaternionsFlat(e, o, e, t, e, n), Mt.slerpFlat(e, t, e, t, e, o, s);
    }
    _lerp(e, t, n, s, r) {
      const o = 1 - s;
      for (let a = 0; a !== r; ++a) {
        const l = t + a;
        e[l] = e[l] * o + e[n + a] * s;
      }
    }
    _lerpAdditive(e, t, n, s, r) {
      for (let o = 0; o !== r; ++o) {
        const a = t + o;
        e[a] = e[a] + e[n + o] * s;
      }
    }
  }
  const Ul = "\\[\\]\\.:\\/", h0 = new RegExp("[" + Ul + "]", "g"), Ol = "[^" + Ul + "]", u0 = "[^" + Ul.replace("\\.", "") + "]", d0 = /((?:WC+[\/:])*)/.source.replace("WC", Ol), p0 = /(WCOD+)?/.source.replace("WCOD", u0), f0 = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ol), m0 = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ol), _0 = new RegExp("^" + d0 + p0 + f0 + m0 + "$"), g0 = [
    "material",
    "materials",
    "bones",
    "map"
  ];
  class v0 {
    constructor(e, t, n) {
      const s = n || Ye.parseTrackName(t);
      this._targetGroup = e, this._bindings = e.subscribe_(t, s);
    }
    getValue(e, t) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_, s = this._bindings[n];
      s !== void 0 && s.getValue(e, t);
    }
    setValue(e, t) {
      const n = this._bindings;
      for (let s = this._targetGroup.nCachedObjects_, r = n.length; s !== r; ++s) n[s].setValue(e, t);
    }
    bind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
    }
    unbind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
    }
  }
  class Ye {
    constructor(e, t, n) {
      this.path = t, this.parsedPath = n || Ye.parseTrackName(t), this.node = Ye.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e, t, n) {
      return e && e.isAnimationObjectGroup ? new Ye.Composite(e, t, n) : new Ye(e, t, n);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, "_").replace(h0, "");
    }
    static parseTrackName(e) {
      const t = _0.exec(e);
      if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
      const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6]
      }, s = n.nodeName && n.nodeName.lastIndexOf(".");
      if (s !== void 0 && s !== -1) {
        const r = n.nodeName.substring(s + 1);
        g0.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, s), n.objectName = r);
      }
      if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
      return n;
    }
    static findNode(e, t) {
      if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
      if (e.skeleton) {
        const n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        const n = function(r) {
          for (let o = 0; o < r.length; o++) {
            const a = r[o];
            if (a.name === t || a.uuid === t) return a;
            const l = n(a.children);
            if (l) return l;
          }
          return null;
        }, s = n(e.children);
        if (s) return s;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) e[t++] = n[s];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) n[s] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) n[s] = e[t++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) n[s] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(e, t) {
      this.bind(), this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
      this.bind(), this.setValue(e, t);
    }
    bind() {
      let e = this.node;
      const t = this.parsedPath, n = t.objectName, s = t.propertyName;
      let r = t.propertyIndex;
      if (e || (e = Ye.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
        console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
        return;
      }
      if (n) {
        let c = t.objectIndex;
        switch (n) {
          case "materials":
            if (!e.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e.material.materials) {
              console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              return;
            }
            e = e.material.materials;
            break;
          case "bones":
            if (!e.skeleton) {
              console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              return;
            }
            e = e.skeleton.bones;
            for (let h = 0; h < e.length; h++) if (e[h].name === c) {
              c = h;
              break;
            }
            break;
          case "map":
            if ("map" in e) {
              e = e.map;
              break;
            }
            if (!e.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e.material.map) {
              console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
              return;
            }
            e = e.material.map;
            break;
          default:
            if (e[n] === void 0) {
              console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              return;
            }
            e = e[n];
        }
        if (c !== void 0) {
          if (e[c] === void 0) {
            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
            return;
          }
          e = e[c];
        }
      }
      const o = e[s];
      if (o === void 0) {
        const c = t.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + s + " but it wasn't found.", e);
        return;
      }
      let a = this.Versioning.None;
      this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
      let l = this.BindingType.Direct;
      if (r !== void 0) {
        if (s === "morphTargetInfluences") {
          if (!e.geometry) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            return;
          }
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
        }
        l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
      } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = s;
      this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  }
  Ye.Composite = v0;
  Ye.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  };
  Ye.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  };
  Ye.prototype.GetterByBindingType = [
    Ye.prototype._getValue_direct,
    Ye.prototype._getValue_array,
    Ye.prototype._getValue_arrayElement,
    Ye.prototype._getValue_toArray
  ];
  Ye.prototype.SetterByBindingTypeAndVersioning = [
    [
      Ye.prototype._setValue_direct,
      Ye.prototype._setValue_direct_setNeedsUpdate,
      Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
      Ye.prototype._setValue_array,
      Ye.prototype._setValue_array_setNeedsUpdate,
      Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
      Ye.prototype._setValue_arrayElement,
      Ye.prototype._setValue_arrayElement_setNeedsUpdate,
      Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
      Ye.prototype._setValue_fromArray,
      Ye.prototype._setValue_fromArray_setNeedsUpdate,
      Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
  ];
  class x0 {
    constructor(e, t, n = null, s = t.blendMode) {
      this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = s;
      const r = t.tracks, o = r.length, a = new Array(o), l = {
        endingStart: is,
        endingEnd: is
      };
      for (let c = 0; c !== o; ++c) {
        const h = r[c].createInterpolant(null);
        a[c] = h, h.settings = l;
      }
      this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = jp, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
    }
    play() {
      return this._mixer._activateAction(this), this;
    }
    stop() {
      return this._mixer._deactivateAction(this), this.reset();
    }
    reset() {
      return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
    }
    isRunning() {
      return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
    }
    isScheduled() {
      return this._mixer._isActiveAction(this);
    }
    startAt(e) {
      return this._startTime = e, this;
    }
    setLoop(e, t) {
      return this.loop = e, this.repetitions = t, this;
    }
    setEffectiveWeight(e) {
      return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
    }
    getEffectiveWeight() {
      return this._effectiveWeight;
    }
    fadeIn(e) {
      return this._scheduleFading(e, 0, 1);
    }
    fadeOut(e) {
      return this._scheduleFading(e, 1, 0);
    }
    crossFadeFrom(e, t, n) {
      if (e.fadeOut(t), this.fadeIn(t), n) {
        const s = this._clip.duration, r = e._clip.duration, o = r / s, a = s / r;
        e.warp(1, o, t), this.warp(a, 1, t);
      }
      return this;
    }
    crossFadeTo(e, t, n) {
      return e.crossFadeFrom(this, t, n);
    }
    stopFading() {
      const e = this._weightInterpolant;
      return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
    }
    setEffectiveTimeScale(e) {
      return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale;
    }
    setDuration(e) {
      return this.timeScale = this._clip.duration / e, this.stopWarping();
    }
    syncWith(e) {
      return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
    }
    halt(e) {
      return this.warp(this._effectiveTimeScale, 0, e);
    }
    warp(e, t, n) {
      const s = this._mixer, r = s.time, o = this.timeScale;
      let a = this._timeScaleInterpolant;
      a === null && (a = s._lendControlInterpolant(), this._timeScaleInterpolant = a);
      const l = a.parameterPositions, c = a.sampleValues;
      return l[0] = r, l[1] = r + n, c[0] = e / o, c[1] = t / o, this;
    }
    stopWarping() {
      const e = this._timeScaleInterpolant;
      return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
    }
    getMixer() {
      return this._mixer;
    }
    getClip() {
      return this._clip;
    }
    getRoot() {
      return this._localRoot || this._mixer._root;
    }
    _update(e, t, n, s) {
      if (!this.enabled) {
        this._updateWeight(e);
        return;
      }
      const r = this._startTime;
      if (r !== null) {
        const l = (e - r) * n;
        l < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * l);
      }
      t *= this._updateTimeScale(e);
      const o = this._updateTime(t), a = this._updateWeight(e);
      if (a > 0) {
        const l = this._interpolants, c = this._propertyBindings;
        switch (this.blendMode) {
          case qp:
            for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulateAdditive(a);
            break;
          case wl:
          default:
            for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulate(s, a);
        }
      }
    }
    _updateWeight(e) {
      let t = 0;
      if (this.enabled) {
        t = this.weight;
        const n = this._weightInterpolant;
        if (n !== null) {
          const s = n.evaluate(e)[0];
          t *= s, e > n.parameterPositions[1] && (this.stopFading(), s === 0 && (this.enabled = false));
        }
      }
      return this._effectiveWeight = t, t;
    }
    _updateTimeScale(e) {
      let t = 0;
      if (!this.paused) {
        t = this.timeScale;
        const n = this._timeScaleInterpolant;
        if (n !== null) {
          const s = n.evaluate(e)[0];
          t *= s, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
        }
      }
      return this._effectiveTimeScale = t, t;
    }
    _updateTime(e) {
      const t = this._clip.duration, n = this.loop;
      let s = this.time + e, r = this._loopCount;
      const o = n === Kp;
      if (e === 0) return r === -1 ? s : o && (r & 1) === 1 ? t - s : s;
      if (n === Xp) {
        r === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
        e: {
          if (s >= t) s = t;
          else if (s < 0) s = 0;
          else {
            this.time = s;
            break e;
          }
          this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = s, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1
          });
        }
      } else {
        if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(true, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, true, o)), s >= t || s < 0) {
          const a = Math.floor(s / t);
          s -= t * a, r += Math.abs(a);
          const l = this.repetitions - r;
          if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, s = e > 0 ? t : 0, this.time = s, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
          else {
            if (l === 1) {
              const c = e < 0;
              this._setEndings(c, !c, o);
            } else this._setEndings(false, false, o);
            this._loopCount = r, this.time = s, this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: a
            });
          }
        } else this.time = s;
        if (o && (r & 1) === 1) return t - s;
      }
      return s;
    }
    _setEndings(e, t, n) {
      const s = this._interpolantSettings;
      n ? (s.endingStart = ss, s.endingEnd = ss) : (e ? s.endingStart = this.zeroSlopeAtStart ? ss : is : s.endingStart = so, t ? s.endingEnd = this.zeroSlopeAtEnd ? ss : is : s.endingEnd = so);
    }
    _scheduleFading(e, t, n) {
      const s = this._mixer, r = s.time;
      let o = this._weightInterpolant;
      o === null && (o = s._lendControlInterpolant(), this._weightInterpolant = o);
      const a = o.parameterPositions, l = o.sampleValues;
      return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this;
    }
  }
  const y0 = new Float32Array(1);
  class b0 extends mi {
    constructor(e) {
      super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
    }
    _bindAction(e, t) {
      const n = e._localRoot || this._root, s = e._clip.tracks, r = s.length, o = e._propertyBindings, a = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
      let h = c[l];
      h === void 0 && (h = {}, c[l] = h);
      for (let u = 0; u !== r; ++u) {
        const d = s[u], p = d.name;
        let _ = h[p];
        if (_ !== void 0) ++_.referenceCount, o[u] = _;
        else {
          if (_ = o[u], _ !== void 0) {
            _._cacheIndex === null && (++_.referenceCount, this._addInactiveBinding(_, l, p));
            continue;
          }
          const g = t && t._propertyBindings[u].binding.parsedPath;
          _ = new c0(Ye.create(n, p, g), d.ValueTypeName, d.getValueSize()), ++_.referenceCount, this._addInactiveBinding(_, l, p), o[u] = _;
        }
        a[u].resultBuffer = _.buffer;
      }
    }
    _activateAction(e) {
      if (!this._isActiveAction(e)) {
        if (e._cacheIndex === null) {
          const n = (e._localRoot || this._root).uuid, s = e._clip.uuid, r = this._actionsByClip[s];
          this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, s, n);
        }
        const t = e._propertyBindings;
        for (let n = 0, s = t.length; n !== s; ++n) {
          const r = t[n];
          r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
        }
        this._lendAction(e);
      }
    }
    _deactivateAction(e) {
      if (this._isActiveAction(e)) {
        const t = e._propertyBindings;
        for (let n = 0, s = t.length; n !== s; ++n) {
          const r = t[n];
          --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
        }
        this._takeBackAction(e);
      }
    }
    _initMemoryManager() {
      this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
      const e = this;
      this.stats = {
        actions: {
          get total() {
            return e._actions.length;
          },
          get inUse() {
            return e._nActiveActions;
          }
        },
        bindings: {
          get total() {
            return e._bindings.length;
          },
          get inUse() {
            return e._nActiveBindings;
          }
        },
        controlInterpolants: {
          get total() {
            return e._controlInterpolants.length;
          },
          get inUse() {
            return e._nActiveControlInterpolants;
          }
        }
      };
    }
    _isActiveAction(e) {
      const t = e._cacheIndex;
      return t !== null && t < this._nActiveActions;
    }
    _addInactiveAction(e, t, n) {
      const s = this._actions, r = this._actionsByClip;
      let o = r[t];
      if (o === void 0) o = {
        knownActions: [
          e
        ],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, r[t] = o;
      else {
        const a = o.knownActions;
        e._byClipCacheIndex = a.length, a.push(e);
      }
      e._cacheIndex = s.length, s.push(e), o.actionByRoot[n] = e;
    }
    _removeInactiveAction(e) {
      const t = this._actions, n = t[t.length - 1], s = e._cacheIndex;
      n._cacheIndex = s, t[s] = n, t.pop(), e._cacheIndex = null;
      const r = e._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], h = e._byClipCacheIndex;
      c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
      const u = a.actionByRoot, d = (e._localRoot || this._root).uuid;
      delete u[d], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e);
    }
    _removeInactiveBindingsForAction(e) {
      const t = e._propertyBindings;
      for (let n = 0, s = t.length; n !== s; ++n) {
        const r = t[n];
        --r.referenceCount === 0 && this._removeInactiveBinding(r);
      }
    }
    _lendAction(e) {
      const t = this._actions, n = e._cacheIndex, s = this._nActiveActions++, r = t[s];
      e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
    }
    _takeBackAction(e) {
      const t = this._actions, n = e._cacheIndex, s = --this._nActiveActions, r = t[s];
      e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
    }
    _addInactiveBinding(e, t, n) {
      const s = this._bindingsByRootAndName, r = this._bindings;
      let o = s[t];
      o === void 0 && (o = {}, s[t] = o), o[n] = e, e._cacheIndex = r.length, r.push(e);
    }
    _removeInactiveBinding(e) {
      const t = this._bindings, n = e.binding, s = n.rootNode.uuid, r = n.path, o = this._bindingsByRootAndName, a = o[s], l = t[t.length - 1], c = e._cacheIndex;
      l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[s];
    }
    _lendBinding(e) {
      const t = this._bindings, n = e._cacheIndex, s = this._nActiveBindings++, r = t[s];
      e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
    }
    _takeBackBinding(e) {
      const t = this._bindings, n = e._cacheIndex, s = --this._nActiveBindings, r = t[s];
      e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
    }
    _lendControlInterpolant() {
      const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
      let n = e[t];
      return n === void 0 && (n = new nd(new Float32Array(2), new Float32Array(2), 1, y0), n.__cacheIndex = t, e[t] = n), n;
    }
    _takeBackControlInterpolant(e) {
      const t = this._controlInterpolants, n = e.__cacheIndex, s = --this._nActiveControlInterpolants, r = t[s];
      e.__cacheIndex = s, t[s] = e, r.__cacheIndex = n, t[n] = r;
    }
    clipAction(e, t, n) {
      const s = t || this._root, r = s.uuid;
      let o = typeof e == "string" ? ll.findByName(s, e) : e;
      const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
      let c = null;
      if (n === void 0 && (o !== null ? n = o.blendMode : n = wl), l !== void 0) {
        const u = l.actionByRoot[r];
        if (u !== void 0 && u.blendMode === n) return u;
        c = l.knownActions[0], o === null && (o = c._clip);
      }
      if (o === null) return null;
      const h = new x0(this, o, t, n);
      return this._bindAction(h, c), this._addInactiveAction(h, a, r), h;
    }
    existingAction(e, t) {
      const n = t || this._root, s = n.uuid, r = typeof e == "string" ? ll.findByName(n, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
      return a !== void 0 && a.actionByRoot[s] || null;
    }
    stopAllAction() {
      const e = this._actions, t = this._nActiveActions;
      for (let n = t - 1; n >= 0; --n) e[n].stop();
      return this;
    }
    update(e) {
      e *= this.timeScale;
      const t = this._actions, n = this._nActiveActions, s = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1;
      for (let c = 0; c !== n; ++c) t[c]._update(s, e, r, o);
      const a = this._bindings, l = this._nActiveBindings;
      for (let c = 0; c !== l; ++c) a[c].apply(o);
      return this;
    }
    setTime(e) {
      this.time = 0;
      for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
      return this.update(e);
    }
    getRoot() {
      return this._root;
    }
    uncacheClip(e) {
      const t = this._actions, n = e.uuid, s = this._actionsByClip, r = s[n];
      if (r !== void 0) {
        const o = r.knownActions;
        for (let a = 0, l = o.length; a !== l; ++a) {
          const c = o[a];
          this._deactivateAction(c);
          const h = c._cacheIndex, u = t[t.length - 1];
          c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c);
        }
        delete s[n];
      }
    }
    uncacheRoot(e) {
      const t = e.uuid, n = this._actionsByClip;
      for (const o in n) {
        const a = n[o].actionByRoot, l = a[t];
        l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
      }
      const s = this._bindingsByRootAndName, r = s[t];
      if (r !== void 0) for (const o in r) {
        const a = r[o];
        a.restoreOriginalState(), this._removeInactiveBinding(a);
      }
    }
    uncacheAction(e, t) {
      const n = this.existingAction(e, t);
      n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  }
  class Oh {
    constructor(e = 1, t = 0, n = 0) {
      return this.radius = e, this.phi = t, this.theta = n, this;
    }
    set(e, t, n) {
      return this.radius = e, this.phi = t, this.theta = n, this;
    }
    copy(e) {
      return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
    }
    makeSafe() {
      return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
      return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ct(t / this.radius, -1, 1))), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class M0 extends mi {
    constructor(e, t) {
      super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = {
        LEFT: null,
        MIDDLE: null,
        RIGHT: null
      }, this.touches = {
        ONE: null,
        TWO: null
      };
    }
    connect() {
    }
    disconnect() {
    }
    dispose() {
    }
    update() {
    }
  }
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: gl
    }
  }));
  typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = gl);
  const Fh = {
    type: "change"
  }, Fl = {
    type: "start"
  }, od = {
    type: "end"
  }, Wr = new or(), Bh = new ri(), S0 = Math.cos(70 * Nu.DEG2RAD), mt = new R(), kt = 2 * Math.PI, tt = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  }, pa = 1e-6;
  class E0 extends M0 {
    constructor(e, t = null) {
      super(e, t), this.state = tt.NONE, this.enabled = true, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown"
      }, this.mouseButtons = {
        LEFT: os.ROTATE,
        MIDDLE: os.DOLLY,
        RIGHT: os.PAN
      }, this.touches = {
        ONE: ns.ROTATE,
        TWO: ns.DOLLY_PAN
      }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new R(), this._lastQuaternion = new Mt(), this._lastTargetPosition = new R(), this._quat = new Mt().setFromUnitVectors(e.up, new R(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Oh(), this._sphericalDelta = new Oh(), this._scale = 1, this._panOffset = new R(), this._rotateStart = new ye(), this._rotateEnd = new ye(), this._rotateDelta = new ye(), this._panStart = new ye(), this._panEnd = new ye(), this._panDelta = new ye(), this._dollyStart = new ye(), this._dollyEnd = new ye(), this._dollyDelta = new ye(), this._dollyDirection = new R(), this._mouse = new ye(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = T0.bind(this), this._onPointerDown = w0.bind(this), this._onPointerUp = A0.bind(this), this._onContextMenu = N0.bind(this), this._onMouseWheel = P0.bind(this), this._onKeyDown = L0.bind(this), this._onTouchStart = I0.bind(this), this._onTouchMove = D0.bind(this), this._onMouseDown = C0.bind(this), this._onMouseMove = R0.bind(this), this._interceptControlDown = U0.bind(this), this._interceptControlUp = O0.bind(this), this.domElement !== null && this.connect(), this.update();
    }
    connect() {
      this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, {
        passive: false
      }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
        passive: true,
        capture: true
      }), this.domElement.style.touchAction = "none";
    }
    disconnect() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
        capture: true
      }), this.domElement.style.touchAction = "auto";
    }
    dispose() {
      this.disconnect();
    }
    getPolarAngle() {
      return this._spherical.phi;
    }
    getAzimuthalAngle() {
      return this._spherical.theta;
    }
    getDistance() {
      return this.object.position.distanceTo(this.target);
    }
    listenToKeyEvents(e) {
      e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
    }
    stopListenToKeyEvents() {
      this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
    }
    saveState() {
      this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
    }
    reset() {
      this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Fh), this.update(), this.state = tt.NONE;
    }
    update(e = null) {
      const t = this.object.position;
      mt.copy(t).sub(this.target), mt.applyQuaternion(this._quat), this._spherical.setFromVector3(mt), this.autoRotate && this.state === tt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
      let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
      isFinite(n) && isFinite(s) && (n < -Math.PI ? n += kt : n > Math.PI && (n -= kt), s < -Math.PI ? s += kt : s > Math.PI && (s -= kt), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
      let r = false;
      if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
      else {
        const o = this._spherical.radius;
        this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius;
      }
      if (mt.setFromSpherical(this._spherical), mt.applyQuaternion(this._quatInverse), t.copy(this.target).add(mt), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
        let o = null;
        if (this.object.isPerspectiveCamera) {
          const a = mt.length();
          o = this._clampDistance(a * this._scale);
          const l = a - o;
          this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
        } else if (this.object.isOrthographicCamera) {
          const a = new R(this._mouse.x, this._mouse.y, 0);
          a.unproject(this.object);
          const l = this.object.zoom;
          this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
          const c = new R(this._mouse.x, this._mouse.y, 0);
          c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = mt.length();
        } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
        o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (Wr.origin.copy(this.object.position), Wr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Wr.direction)) < S0 ? this.object.lookAt(this.target) : (Bh.setFromNormalAndCoplanarPoint(this.object.up, this.target), Wr.intersectPlane(Bh, this.target))));
      } else if (this.object.isOrthographicCamera) {
        const o = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
      }
      return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > pa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > pa || this._lastTargetPosition.distanceToSquared(this.target) > pa ? (this.dispatchEvent(Fh), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
    }
    _getAutoRotationAngle(e) {
      return e !== null ? kt / 60 * this.autoRotateSpeed * e : kt / 60 / 60 * this.autoRotateSpeed;
    }
    _getZoomScale(e) {
      const t = Math.abs(e * 0.01);
      return Math.pow(0.95, this.zoomSpeed * t);
    }
    _rotateLeft(e) {
      this._sphericalDelta.theta -= e;
    }
    _rotateUp(e) {
      this._sphericalDelta.phi -= e;
    }
    _panLeft(e, t) {
      mt.setFromMatrixColumn(t, 0), mt.multiplyScalar(-e), this._panOffset.add(mt);
    }
    _panUp(e, t) {
      this.screenSpacePanning === true ? mt.setFromMatrixColumn(t, 1) : (mt.setFromMatrixColumn(t, 0), mt.crossVectors(this.object.up, mt)), mt.multiplyScalar(e), this._panOffset.add(mt);
    }
    _pan(e, t) {
      const n = this.domElement;
      if (this.object.isPerspectiveCamera) {
        const s = this.object.position;
        mt.copy(s).sub(this.target);
        let r = mt.length();
        r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
      } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
    }
    _dollyOut(e) {
      this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
    }
    _dollyIn(e) {
      this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
    }
    _updateZoomParameters(e, t) {
      if (!this.zoomToCursor) return;
      this._performCursorZoom = true;
      const n = this.domElement.getBoundingClientRect(), s = e - n.left, r = t - n.top, o = n.width, a = n.height;
      this._mouse.x = s / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
    }
    _clampDistance(e) {
      return Math.max(this.minDistance, Math.min(this.maxDistance, e));
    }
    _handleMouseDownRotate(e) {
      this._rotateStart.set(e.clientX, e.clientY);
    }
    _handleMouseDownDolly(e) {
      this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
    }
    _handleMouseDownPan(e) {
      this._panStart.set(e.clientX, e.clientY);
    }
    _handleMouseMoveRotate(e) {
      this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
      const t = this.domElement;
      this._rotateLeft(kt * this._rotateDelta.x / t.clientHeight), this._rotateUp(kt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
    }
    _handleMouseMoveDolly(e) {
      this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
    }
    _handleMouseMovePan(e) {
      this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
    }
    _handleMouseWheel(e) {
      this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
    }
    _handleKeyDown(e) {
      let t = false;
      switch (e.code) {
        case this.keys.UP:
          e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(kt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = true;
          break;
        case this.keys.BOTTOM:
          e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-kt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = true;
          break;
        case this.keys.LEFT:
          e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(kt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = true;
          break;
        case this.keys.RIGHT:
          e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-kt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = true;
          break;
      }
      t && (e.preventDefault(), this.update());
    }
    _handleTouchStartRotate(e) {
      if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
      else {
        const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
        this._rotateStart.set(n, s);
      }
    }
    _handleTouchStartPan(e) {
      if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
      else {
        const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
        this._panStart.set(n, s);
      }
    }
    _handleTouchStartDolly(e) {
      const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
      this._dollyStart.set(0, r);
    }
    _handleTouchStartDollyPan(e) {
      this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
    }
    _handleTouchStartDollyRotate(e) {
      this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
    }
    _handleTouchMoveRotate(e) {
      if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
      else {
        const n = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
        this._rotateEnd.set(s, r);
      }
      this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
      const t = this.domElement;
      this._rotateLeft(kt * this._rotateDelta.x / t.clientHeight), this._rotateUp(kt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
    }
    _handleTouchMovePan(e) {
      if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
      else {
        const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
        this._panEnd.set(n, s);
      }
      this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
    }
    _handleTouchMoveDolly(e) {
      const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
      this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
      const o = (e.pageX + t.x) * 0.5, a = (e.pageY + t.y) * 0.5;
      this._updateZoomParameters(o, a);
    }
    _handleTouchMoveDollyPan(e) {
      this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
    }
    _handleTouchMoveDollyRotate(e) {
      this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
    }
    _addPointer(e) {
      this._pointers.push(e.pointerId);
    }
    _removePointer(e) {
      delete this._pointerPositions[e.pointerId];
      for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
    }
    _isTrackingPointer(e) {
      for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
      return false;
    }
    _trackPointer(e) {
      let t = this._pointerPositions[e.pointerId];
      t === void 0 && (t = new ye(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
    }
    _getSecondPointerPosition(e) {
      const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
      return this._pointerPositions[t];
    }
    _customWheelEvent(e) {
      const t = e.deltaMode, n = {
        clientX: e.clientX,
        clientY: e.clientY,
        deltaY: e.deltaY
      };
      switch (t) {
        case 1:
          n.deltaY *= 16;
          break;
        case 2:
          n.deltaY *= 100;
          break;
      }
      return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
    }
  }
  function w0(i) {
    this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
  }
  function T0(i) {
    this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
  }
  function A0(i) {
    switch (this._removePointer(i), this._pointers.length) {
      case 0:
        this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(od), this.state = tt.NONE;
        break;
      case 1:
        const e = this._pointers[0], t = this._pointerPositions[e];
        this._onTouchStart({
          pointerId: e,
          pageX: t.x,
          pageY: t.y
        });
        break;
    }
  }
  function C0(i) {
    let e;
    switch (i.button) {
      case 0:
        e = this.mouseButtons.LEFT;
        break;
      case 1:
        e = this.mouseButtons.MIDDLE;
        break;
      case 2:
        e = this.mouseButtons.RIGHT;
        break;
      default:
        e = -1;
    }
    switch (e) {
      case os.DOLLY:
        if (this.enableZoom === false) return;
        this._handleMouseDownDolly(i), this.state = tt.DOLLY;
        break;
      case os.ROTATE:
        if (i.ctrlKey || i.metaKey || i.shiftKey) {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(i), this.state = tt.PAN;
        } else {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(i), this.state = tt.ROTATE;
        }
        break;
      case os.PAN:
        if (i.ctrlKey || i.metaKey || i.shiftKey) {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(i), this.state = tt.ROTATE;
        } else {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(i), this.state = tt.PAN;
        }
        break;
      default:
        this.state = tt.NONE;
    }
    this.state !== tt.NONE && this.dispatchEvent(Fl);
  }
  function R0(i) {
    switch (this.state) {
      case tt.ROTATE:
        if (this.enableRotate === false) return;
        this._handleMouseMoveRotate(i);
        break;
      case tt.DOLLY:
        if (this.enableZoom === false) return;
        this._handleMouseMoveDolly(i);
        break;
      case tt.PAN:
        if (this.enablePan === false) return;
        this._handleMouseMovePan(i);
        break;
    }
  }
  function P0(i) {
    this.enabled === false || this.enableZoom === false || this.state !== tt.NONE || (i.preventDefault(), this.dispatchEvent(Fl), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(od));
  }
  function L0(i) {
    this.enabled === false || this.enablePan === false || this._handleKeyDown(i);
  }
  function I0(i) {
    switch (this._trackPointer(i), this._pointers.length) {
      case 1:
        switch (this.touches.ONE) {
          case ns.ROTATE:
            if (this.enableRotate === false) return;
            this._handleTouchStartRotate(i), this.state = tt.TOUCH_ROTATE;
            break;
          case ns.PAN:
            if (this.enablePan === false) return;
            this._handleTouchStartPan(i), this.state = tt.TOUCH_PAN;
            break;
          default:
            this.state = tt.NONE;
        }
        break;
      case 2:
        switch (this.touches.TWO) {
          case ns.DOLLY_PAN:
            if (this.enableZoom === false && this.enablePan === false) return;
            this._handleTouchStartDollyPan(i), this.state = tt.TOUCH_DOLLY_PAN;
            break;
          case ns.DOLLY_ROTATE:
            if (this.enableZoom === false && this.enableRotate === false) return;
            this._handleTouchStartDollyRotate(i), this.state = tt.TOUCH_DOLLY_ROTATE;
            break;
          default:
            this.state = tt.NONE;
        }
        break;
      default:
        this.state = tt.NONE;
    }
    this.state !== tt.NONE && this.dispatchEvent(Fl);
  }
  function D0(i) {
    switch (this._trackPointer(i), this.state) {
      case tt.TOUCH_ROTATE:
        if (this.enableRotate === false) return;
        this._handleTouchMoveRotate(i), this.update();
        break;
      case tt.TOUCH_PAN:
        if (this.enablePan === false) return;
        this._handleTouchMovePan(i), this.update();
        break;
      case tt.TOUCH_DOLLY_PAN:
        if (this.enableZoom === false && this.enablePan === false) return;
        this._handleTouchMoveDollyPan(i), this.update();
        break;
      case tt.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === false && this.enableRotate === false) return;
        this._handleTouchMoveDollyRotate(i), this.update();
        break;
      default:
        this.state = tt.NONE;
    }
  }
  function N0(i) {
    this.enabled !== false && i.preventDefault();
  }
  function U0(i) {
    i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
      passive: true,
      capture: true
    }));
  }
  function O0(i) {
    i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
      passive: true,
      capture: true
    }));
  }
  const F0 = {}, kh = (i) => {
    let e;
    const t = /* @__PURE__ */ new Set(), n = (h, u) => {
      const d = typeof h == "function" ? h(e) : h;
      if (!Object.is(d, e)) {
        const p = e;
        e = u ?? (typeof d != "object" || d === null) ? d : Object.assign({}, e, d), t.forEach((_) => _(e, p));
      }
    }, s = () => e, l = {
      setState: n,
      getState: s,
      getInitialState: () => c,
      subscribe: (h) => (t.add(h), () => t.delete(h)),
      destroy: () => {
        (F0 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), t.clear();
      }
    }, c = e = i(n, s, l);
    return l;
  }, So = (i) => i ? kh(i) : kh, Bl = So(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
  })), kl = So(() => ({
    physicsReady: false,
    assetsReady: false
  })), ln = So(() => ({
    forward: false,
    backward: false,
    left: false,
    right: false
  }));
  class B0 {
    constructor() {
      this.app = new pn(), this.canvas = this.app.canvas, this.sizesStore = Bl, this.sizes = this.sizesStore.getState(), this.setInstance(), this.setControls(), this.setResizeLister();
    }
    setInstance() {
      this.instance = new Ut(35, this.sizes.width / this.sizes.height, 1, 600), this.instance.position.z = 100, this.instance.position.y = 20;
    }
    setControls() {
      this.controls = new E0(this.instance, this.canvas), this.controls.enableDamping = true;
    }
    setResizeLister() {
      this.sizesStore.subscribe((e) => {
        this.instance.aspect = e.width / e.height, this.instance.updateProjectionMatrix();
      });
    }
    loop() {
      var _a2;
      if (this.controls.update(), this.characterController = (_a2 = this.app.world.characterController) == null ? void 0 : _a2.rigidBody, this.characterController) {
        const e = this.characterController.translation(), t = this.characterController.rotation(), n = new R(0, 15, 20);
        n.applyQuaternion(t), n.add(e);
        const s = new R(0, 8, 6);
        s.applyQuaternion(t), s.add(e), this.instance.position.lerp(n, 0.1), this.controls.target.lerp(s, 0.1);
      }
    }
  }
  class k0 {
    constructor() {
      this.app = new pn(), this.canvas = this.app.canvas, this.camera = this.app.camera, this.scene = this.app.scene, this.sizesStore = Bl, this.sizes = this.sizesStore.getState(), this.setInstance(), this.setResizeLister();
    }
    setInstance() {
      this.instance = new Dx({
        canvas: this.canvas,
        antialias: true
      }), this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(this.sizes.pixelRatio), this.instance.outputEncoding = void 0, this.instance.shadowMap.enabled = true, this.instance.shadowMap.type = gu, this.instance.toneMapping = xu, this.instance.toneMappingExposure = 0.8;
    }
    setResizeLister() {
      this.sizesStore.subscribe((e) => {
        this.instance.setSize(e.width, e.height), this.instance.setPixelRatio(e.pixelRatio);
      });
    }
    loop() {
      this.instance.render(this.scene, this.camera.instance);
    }
  }
  class V0 {
    constructor() {
      this.app = new pn(), this.camera = this.app.camera, this.renderer = this.app.renderer, this.world = this.app.world, this.clock = new l0(), this.previousElapsedTime = 0, this.loop();
    }
    loop() {
      const e = this.clock.getElapsedTime(), t = e - this.previousElapsedTime;
      this.previousElapsedTime = e, this.world.loop(t, e), this.camera.loop(t), this.renderer.loop(), window.requestAnimationFrame(() => this.loop());
    }
  }
  function rt(i) {
    return i == null;
  }
  function Vl(i) {
    return i !== null && typeof i == "object";
  }
  function cl(i) {
    return i !== null && typeof i == "object";
  }
  function z0(i, e) {
    if (i.length !== e.length) return false;
    for (let t = 0; t < i.length; t++) if (i[t] !== e[t]) return false;
    return true;
  }
  function Li(i, e) {
    return Array.from(/* @__PURE__ */ new Set([
      ...Object.keys(i),
      ...Object.keys(e)
    ])).reduce((n, s) => {
      const r = i[s], o = e[s];
      return cl(r) && cl(o) ? Object.assign(Object.assign({}, n), {
        [s]: Li(r, o)
      }) : Object.assign(Object.assign({}, n), {
        [s]: s in e ? o : r
      });
    }, {});
  }
  function H0(i) {
    return Vl(i) ? "target" in i : false;
  }
  const G0 = {
    alreadydisposed: () => "View has been already disposed",
    invalidparams: (i) => `Invalid parameters for '${i.name}'`,
    nomatchingcontroller: (i) => `No matching controller for '${i.key}'`,
    nomatchingview: (i) => `No matching view for '${JSON.stringify(i.params)}'`,
    notbindable: () => "Value is not bindable",
    notcompatible: (i) => `Not compatible with  plugin '${i.id}'`,
    propertynotfound: (i) => `Property '${i.name}' not found`,
    shouldneverhappen: () => "This error should never happen"
  };
  class Yt {
    static alreadyDisposed() {
      return new Yt({
        type: "alreadydisposed"
      });
    }
    static notBindable() {
      return new Yt({
        type: "notbindable"
      });
    }
    static notCompatible(e, t) {
      return new Yt({
        type: "notcompatible",
        context: {
          id: `${e}.${t}`
        }
      });
    }
    static propertyNotFound(e) {
      return new Yt({
        type: "propertynotfound",
        context: {
          name: e
        }
      });
    }
    static shouldNeverHappen() {
      return new Yt({
        type: "shouldneverhappen"
      });
    }
    constructor(e) {
      var t;
      this.message = (t = G0[e.type](e.context)) !== null && t !== void 0 ? t : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = e.type;
    }
    toString() {
      return this.message;
    }
  }
  class po {
    constructor(e, t) {
      this.obj_ = e, this.key = t;
    }
    static isBindable(e) {
      return !(e === null || typeof e != "object" && typeof e != "function");
    }
    read() {
      return this.obj_[this.key];
    }
    write(e) {
      this.obj_[this.key] = e;
    }
    writeProperty(e, t) {
      const n = this.read();
      if (!po.isBindable(n)) throw Yt.notBindable();
      if (!(e in n)) throw Yt.propertyNotFound(e);
      n[e] = t;
    }
  }
  class $t {
    constructor() {
      this.observers_ = {};
    }
    on(e, t, n) {
      var s;
      let r = this.observers_[e];
      return r || (r = this.observers_[e] = []), r.push({
        handler: t,
        key: (s = n == null ? void 0 : n.key) !== null && s !== void 0 ? s : t
      }), this;
    }
    off(e, t) {
      const n = this.observers_[e];
      return n && (this.observers_[e] = n.filter((s) => s.key !== t)), this;
    }
    emit(e, t) {
      const n = this.observers_[e];
      n && n.forEach((s) => {
        s.handler(t);
      });
    }
  }
  class W0 {
    constructor(e, t) {
      var n;
      this.constraint_ = t == null ? void 0 : t.constraint, this.equals_ = (n = t == null ? void 0 : t.equals) !== null && n !== void 0 ? n : (s, r) => s === r, this.emitter = new $t(), this.rawValue_ = e;
    }
    get constraint() {
      return this.constraint_;
    }
    get rawValue() {
      return this.rawValue_;
    }
    set rawValue(e) {
      this.setRawValue(e, {
        forceEmit: false,
        last: true
      });
    }
    setRawValue(e, t) {
      const n = t ?? {
        forceEmit: false,
        last: true
      }, s = this.constraint_ ? this.constraint_.constrain(e) : e, r = this.rawValue_;
      this.equals_(r, s) && !n.forceEmit || (this.emitter.emit("beforechange", {
        sender: this
      }), this.rawValue_ = s, this.emitter.emit("change", {
        options: n,
        previousRawValue: r,
        rawValue: s,
        sender: this
      }));
    }
  }
  class X0 {
    constructor(e) {
      this.emitter = new $t(), this.value_ = e;
    }
    get rawValue() {
      return this.value_;
    }
    set rawValue(e) {
      this.setRawValue(e, {
        forceEmit: false,
        last: true
      });
    }
    setRawValue(e, t) {
      const n = t ?? {
        forceEmit: false,
        last: true
      }, s = this.value_;
      s === e && !n.forceEmit || (this.emitter.emit("beforechange", {
        sender: this
      }), this.value_ = e, this.emitter.emit("change", {
        options: n,
        previousRawValue: s,
        rawValue: this.value_,
        sender: this
      }));
    }
  }
  class j0 {
    constructor(e) {
      this.emitter = new $t(), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.value_ = e, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_);
    }
    get rawValue() {
      return this.value_.rawValue;
    }
    onValueBeforeChange_(e) {
      this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), {
        sender: this
      }));
    }
    onValueChange_(e) {
      this.emitter.emit("change", Object.assign(Object.assign({}, e), {
        sender: this
      }));
    }
  }
  function Et(i, e) {
    const t = e == null ? void 0 : e.constraint, n = e == null ? void 0 : e.equals;
    return !t && !n ? new X0(i) : new W0(i, e);
  }
  function K0(i) {
    return [
      new j0(i),
      (e, t) => {
        i.setRawValue(e, t);
      }
    ];
  }
  class Ge {
    constructor(e) {
      this.emitter = new $t(), this.valMap_ = e;
      for (const t in this.valMap_) this.valMap_[t].emitter.on("change", () => {
        this.emitter.emit("change", {
          key: t,
          sender: this
        });
      });
    }
    static createCore(e) {
      return Object.keys(e).reduce((n, s) => Object.assign(n, {
        [s]: Et(e[s])
      }), {});
    }
    static fromObject(e) {
      const t = this.createCore(e);
      return new Ge(t);
    }
    get(e) {
      return this.valMap_[e].rawValue;
    }
    set(e, t) {
      this.valMap_[e].rawValue = t;
    }
    value(e) {
      return this.valMap_[e];
    }
  }
  class Eo {
    constructor(e) {
      this.values = Ge.fromObject({
        max: e.max,
        min: e.min
      });
    }
    constrain(e) {
      const t = this.values.get("max"), n = this.values.get("min");
      return Math.min(Math.max(e, n), t);
    }
  }
  class q0 {
    constructor(e) {
      this.values = Ge.fromObject({
        max: e.max,
        min: e.min
      });
    }
    constrain(e) {
      const t = this.values.get("max"), n = this.values.get("min");
      let s = e;
      return rt(n) || (s = Math.max(s, n)), rt(t) || (s = Math.min(s, t)), s;
    }
  }
  class Y0 {
    constructor(e, t = 0) {
      this.step = e, this.origin = t;
    }
    constrain(e) {
      const t = this.origin % this.step, n = Math.round((e - t) / this.step);
      return t + n * this.step;
    }
  }
  class $0 {
    constructor(e) {
      this.text = e;
    }
    evaluate() {
      return Number(this.text);
    }
    toString() {
      return this.text;
    }
  }
  const Z0 = {
    "**": (i, e) => Math.pow(i, e),
    "*": (i, e) => i * e,
    "/": (i, e) => i / e,
    "%": (i, e) => i % e,
    "+": (i, e) => i + e,
    "-": (i, e) => i - e,
    "<<": (i, e) => i << e,
    ">>": (i, e) => i >> e,
    ">>>": (i, e) => i >>> e,
    "&": (i, e) => i & e,
    "^": (i, e) => i ^ e,
    "|": (i, e) => i | e
  };
  class J0 {
    constructor(e, t, n) {
      this.left = t, this.operator = e, this.right = n;
    }
    evaluate() {
      const e = Z0[this.operator];
      if (!e) throw new Error(`unexpected binary operator: '${this.operator}`);
      return e(this.left.evaluate(), this.right.evaluate());
    }
    toString() {
      return [
        "b(",
        this.left.toString(),
        this.operator,
        this.right.toString(),
        ")"
      ].join(" ");
    }
  }
  const Q0 = {
    "+": (i) => i,
    "-": (i) => -i,
    "~": (i) => ~i
  };
  class ey {
    constructor(e, t) {
      this.operator = e, this.expression = t;
    }
    evaluate() {
      const e = Q0[this.operator];
      if (!e) throw new Error(`unexpected unary operator: '${this.operator}`);
      return e(this.expression.evaluate());
    }
    toString() {
      return [
        "u(",
        this.operator,
        this.expression.toString(),
        ")"
      ].join(" ");
    }
  }
  function zl(i) {
    return (e, t) => {
      for (let n = 0; n < i.length; n++) {
        const s = i[n](e, t);
        if (s !== "") return s;
      }
      return "";
    };
  }
  function tr(i, e) {
    var t;
    const n = i.substr(e).match(/^\s+/);
    return (t = n && n[0]) !== null && t !== void 0 ? t : "";
  }
  function ty(i, e) {
    const t = i.substr(e, 1);
    return t.match(/^[1-9]$/) ? t : "";
  }
  function nr(i, e) {
    var t;
    const n = i.substr(e).match(/^[0-9]+/);
    return (t = n && n[0]) !== null && t !== void 0 ? t : "";
  }
  function ny(i, e) {
    const t = nr(i, e);
    if (t !== "") return t;
    const n = i.substr(e, 1);
    if (e += 1, n !== "-" && n !== "+") return "";
    const s = nr(i, e);
    return s === "" ? "" : n + s;
  }
  function Hl(i, e) {
    const t = i.substr(e, 1);
    if (e += 1, t.toLowerCase() !== "e") return "";
    const n = ny(i, e);
    return n === "" ? "" : t + n;
  }
  function ad(i, e) {
    const t = i.substr(e, 1);
    if (t === "0") return t;
    const n = ty(i, e);
    return e += n.length, n === "" ? "" : n + nr(i, e);
  }
  function iy(i, e) {
    const t = ad(i, e);
    if (e += t.length, t === "") return "";
    const n = i.substr(e, 1);
    if (e += n.length, n !== ".") return "";
    const s = nr(i, e);
    return e += s.length, t + n + s + Hl(i, e);
  }
  function sy(i, e) {
    const t = i.substr(e, 1);
    if (e += t.length, t !== ".") return "";
    const n = nr(i, e);
    return e += n.length, n === "" ? "" : t + n + Hl(i, e);
  }
  function ry(i, e) {
    const t = ad(i, e);
    return e += t.length, t === "" ? "" : t + Hl(i, e);
  }
  const oy = zl([
    iy,
    sy,
    ry
  ]);
  function ay(i, e) {
    var t;
    const n = i.substr(e).match(/^[01]+/);
    return (t = n && n[0]) !== null && t !== void 0 ? t : "";
  }
  function ly(i, e) {
    const t = i.substr(e, 2);
    if (e += t.length, t.toLowerCase() !== "0b") return "";
    const n = ay(i, e);
    return n === "" ? "" : t + n;
  }
  function cy(i, e) {
    var t;
    const n = i.substr(e).match(/^[0-7]+/);
    return (t = n && n[0]) !== null && t !== void 0 ? t : "";
  }
  function hy(i, e) {
    const t = i.substr(e, 2);
    if (e += t.length, t.toLowerCase() !== "0o") return "";
    const n = cy(i, e);
    return n === "" ? "" : t + n;
  }
  function uy(i, e) {
    var t;
    const n = i.substr(e).match(/^[0-9a-f]+/i);
    return (t = n && n[0]) !== null && t !== void 0 ? t : "";
  }
  function dy(i, e) {
    const t = i.substr(e, 2);
    if (e += t.length, t.toLowerCase() !== "0x") return "";
    const n = uy(i, e);
    return n === "" ? "" : t + n;
  }
  const py = zl([
    ly,
    hy,
    dy
  ]), fy = zl([
    py,
    oy
  ]);
  function my(i, e) {
    const t = fy(i, e);
    return e += t.length, t === "" ? null : {
      evaluable: new $0(t),
      cursor: e
    };
  }
  function _y(i, e) {
    const t = i.substr(e, 1);
    if (e += t.length, t !== "(") return null;
    const n = cd(i, e);
    if (!n) return null;
    e = n.cursor, e += tr(i, e).length;
    const s = i.substr(e, 1);
    return e += s.length, s !== ")" ? null : {
      evaluable: n.evaluable,
      cursor: e
    };
  }
  function gy(i, e) {
    var t;
    return (t = my(i, e)) !== null && t !== void 0 ? t : _y(i, e);
  }
  function ld(i, e) {
    const t = gy(i, e);
    if (t) return t;
    const n = i.substr(e, 1);
    if (e += n.length, n !== "+" && n !== "-" && n !== "~") return null;
    const s = ld(i, e);
    return s ? (e = s.cursor, {
      cursor: e,
      evaluable: new ey(n, s.evaluable)
    }) : null;
  }
  function vy(i, e, t) {
    t += tr(e, t).length;
    const n = i.filter((s) => e.startsWith(s, t))[0];
    return n ? (t += n.length, t += tr(e, t).length, {
      cursor: t,
      operator: n
    }) : null;
  }
  function xy(i, e) {
    return (t, n) => {
      const s = i(t, n);
      if (!s) return null;
      n = s.cursor;
      let r = s.evaluable;
      for (; ; ) {
        const o = vy(e, t, n);
        if (!o) break;
        n = o.cursor;
        const a = i(t, n);
        if (!a) return null;
        n = a.cursor, r = new J0(o.operator, r, a.evaluable);
      }
      return r ? {
        cursor: n,
        evaluable: r
      } : null;
    };
  }
  const yy = [
    [
      "**"
    ],
    [
      "*",
      "/",
      "%"
    ],
    [
      "+",
      "-"
    ],
    [
      "<<",
      ">>>",
      ">>"
    ],
    [
      "&"
    ],
    [
      "^"
    ],
    [
      "|"
    ]
  ].reduce((i, e) => xy(i, e), ld);
  function cd(i, e) {
    return e += tr(i, e).length, yy(i, e);
  }
  function by(i) {
    const e = cd(i, 0);
    return !e || e.cursor + tr(i, e.cursor).length !== i.length ? null : e.evaluable;
  }
  function fi(i) {
    var e;
    const t = by(i);
    return (e = t == null ? void 0 : t.evaluate()) !== null && e !== void 0 ? e : null;
  }
  function hd(i) {
    if (typeof i == "number") return i;
    if (typeof i == "string") {
      const e = fi(i);
      if (!rt(e)) return e;
    }
    return 0;
  }
  function Gt(i) {
    return (e) => e.toFixed(Math.max(Math.min(i, 20), 0));
  }
  function $e(i, e, t, n, s) {
    const r = (i - e) / (t - e);
    return n + r * (s - n);
  }
  function Vh(i) {
    return String(i.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
  }
  function _t(i, e, t) {
    return Math.min(Math.max(i, e), t);
  }
  function ud(i, e) {
    return (i % e + e) % e;
  }
  function My(i, e) {
    return rt(i.step) ? Math.max(Vh(e), 2) : Vh(i.step);
  }
  function dd(i) {
    var e;
    return (e = i.step) !== null && e !== void 0 ? e : 1;
  }
  function Sy(i, e) {
    var t;
    const n = Math.abs((t = i.step) !== null && t !== void 0 ? t : e);
    return n === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(n)) - 1);
  }
  function pd(i, e) {
    return rt(i.step) ? null : new Y0(i.step, e);
  }
  function fd(i) {
    return !rt(i.max) && !rt(i.min) ? new Eo({
      max: i.max,
      min: i.min
    }) : !rt(i.max) || !rt(i.min) ? new q0({
      max: i.max,
      min: i.min
    }) : null;
  }
  function md(i, e) {
    var t, n, s;
    return {
      formatter: (t = i.format) !== null && t !== void 0 ? t : Gt(My(i, e)),
      keyScale: (n = i.keyScale) !== null && n !== void 0 ? n : dd(i),
      pointerScale: (s = i.pointerScale) !== null && s !== void 0 ? s : Sy(i, e)
    };
  }
  function _d(i) {
    return {
      format: i.optional.function,
      keyScale: i.optional.number,
      max: i.optional.number,
      min: i.optional.number,
      pointerScale: i.optional.number,
      step: i.optional.number
    };
  }
  function Gl(i) {
    return {
      constraint: i.constraint,
      textProps: Ge.fromObject(md(i.params, i.initialValue))
    };
  }
  class Wl {
    constructor(e) {
      this.controller = e;
    }
    get element() {
      return this.controller.view.element;
    }
    get disabled() {
      return this.controller.viewProps.get("disabled");
    }
    set disabled(e) {
      this.controller.viewProps.set("disabled", e);
    }
    get hidden() {
      return this.controller.viewProps.get("hidden");
    }
    set hidden(e) {
      this.controller.viewProps.set("hidden", e);
    }
    dispose() {
      this.controller.viewProps.set("disposed", true);
    }
    importState(e) {
      return this.controller.importState(e);
    }
    exportState() {
      return this.controller.exportState();
    }
  }
  class wo {
    constructor(e) {
      this.target = e;
    }
  }
  class gd extends wo {
    constructor(e, t, n) {
      super(e), this.value = t, this.last = n ?? true;
    }
  }
  class Ey extends wo {
    constructor(e, t) {
      super(e), this.expanded = t;
    }
  }
  class wy extends wo {
    constructor(e, t) {
      super(e), this.index = t;
    }
  }
  class Ty extends wo {
    constructor(e, t) {
      super(e), this.native = t;
    }
  }
  class Xl extends Wl {
    constructor(e) {
      super(e), this.onValueChange_ = this.onValueChange_.bind(this), this.emitter_ = new $t(), this.controller.value.emitter.on("change", this.onValueChange_);
    }
    get label() {
      return this.controller.labelController.props.get("label");
    }
    set label(e) {
      this.controller.labelController.props.set("label", e);
    }
    get key() {
      return this.controller.value.binding.target.key;
    }
    get tag() {
      return this.controller.tag;
    }
    set tag(e) {
      this.controller.tag = e;
    }
    on(e, t) {
      const n = t.bind(this);
      return this.emitter_.on(e, (s) => {
        n(s);
      }, {
        key: t
      }), this;
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
    refresh() {
      this.controller.value.fetch();
    }
    onValueChange_(e) {
      const t = this.controller.value;
      this.emitter_.emit("change", new gd(this, t.binding.target.read(), e.options.last));
    }
  }
  function Ay(i, e) {
    const n = Object.keys(e).reduce((s, r) => {
      if (s === void 0) return;
      const o = e[r], a = o(i[r]);
      return a.succeeded ? Object.assign(Object.assign({}, s), {
        [r]: a.value
      }) : void 0;
    }, {});
    return n;
  }
  function Cy(i, e) {
    return i.reduce((t, n) => {
      if (t === void 0) return;
      const s = e(n);
      if (!(!s.succeeded || s.value === void 0)) return [
        ...t,
        s.value
      ];
    }, []);
  }
  function Ry(i) {
    return i === null ? false : typeof i == "object";
  }
  function Un(i) {
    return (e) => (t) => {
      if (!e && t === void 0) return {
        succeeded: false,
        value: void 0
      };
      if (e && t === void 0) return {
        succeeded: true,
        value: void 0
      };
      const n = i(t);
      return n !== void 0 ? {
        succeeded: true,
        value: n
      } : {
        succeeded: false,
        value: void 0
      };
    };
  }
  function zh(i) {
    return {
      custom: (e) => Un(e)(i),
      boolean: Un((e) => typeof e == "boolean" ? e : void 0)(i),
      number: Un((e) => typeof e == "number" ? e : void 0)(i),
      string: Un((e) => typeof e == "string" ? e : void 0)(i),
      function: Un((e) => typeof e == "function" ? e : void 0)(i),
      constant: (e) => Un((t) => t === e ? e : void 0)(i),
      raw: Un((e) => e)(i),
      object: (e) => Un((t) => {
        if (Ry(t)) return Ay(t, e);
      })(i),
      array: (e) => Un((t) => {
        if (Array.isArray(t)) return Cy(t, e);
      })(i)
    };
  }
  const hl = {
    optional: zh(true),
    required: zh(false)
  };
  function It(i, e) {
    const t = e(hl), n = hl.required.object(t)(i);
    return n.succeeded ? n.value : void 0;
  }
  function Tn(i, e, t, n) {
    if (e && !e(i)) return false;
    const s = It(i, t);
    return s ? n(s) : false;
  }
  function An(i, e) {
    var t;
    return Li((t = i == null ? void 0 : i()) !== null && t !== void 0 ? t : {}, e);
  }
  function Qr(i) {
    return "value" in i;
  }
  function Py(i) {
    if (!Vl(i) || !("binding" in i)) return false;
    const e = i.binding;
    return H0(e);
  }
  const vn = "http://www.w3.org/2000/svg";
  function fo(i) {
    i.offsetHeight;
  }
  function Ly(i, e) {
    const t = i.style.transition;
    i.style.transition = "none", e(), i.style.transition = t;
  }
  function jl(i) {
    return i.ontouchstart !== void 0;
  }
  function Iy(i) {
    const e = i.ownerDocument.defaultView;
    return e && "document" in e ? i.getContext("2d", {
      willReadFrequently: true
    }) : null;
  }
  const Dy = {
    check: '<path d="M2 8l4 4l8 -8"/>',
    dropdown: '<path d="M5 7h6l-3 3 z"/>',
    p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
  };
  function To(i, e) {
    const t = i.createElementNS(vn, "svg");
    return t.innerHTML = Dy[e], t;
  }
  function vd(i, e, t) {
    i.insertBefore(e, i.children[t]);
  }
  function Kl(i) {
    i.parentElement && i.parentElement.removeChild(i);
  }
  function xd(i) {
    for (; i.children.length > 0; ) i.removeChild(i.children[0]);
  }
  function Ny(i) {
    for (; i.childNodes.length > 0; ) i.removeChild(i.childNodes[0]);
  }
  function yd(i) {
    return i.relatedTarget ? i.relatedTarget : "explicitOriginalTarget" in i ? i.explicitOriginalTarget : null;
  }
  function Gn(i, e) {
    i.emitter.on("change", (t) => {
      e(t.rawValue);
    }), e(i.rawValue);
  }
  function bn(i, e, t) {
    Gn(i.value(e), t);
  }
  const Uy = "tp";
  function We(i) {
    return (t, n) => [
      Uy,
      "-",
      i,
      "v",
      t ? `_${t}` : "",
      n ? `-${n}` : ""
    ].join("");
  }
  const zs = We("lbl");
  function Oy(i, e) {
    const t = i.createDocumentFragment();
    return e.split(`
`).map((s) => i.createTextNode(s)).forEach((s, r) => {
      r > 0 && t.appendChild(i.createElement("br")), t.appendChild(s);
    }), t;
  }
  class Fy {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(zs()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("div");
      n.classList.add(zs("l")), bn(t.props, "label", (r) => {
        rt(r) ? this.element.classList.add(zs(void 0, "nol")) : (this.element.classList.remove(zs(void 0, "nol")), Ny(n), n.appendChild(Oy(e, r)));
      }), this.element.appendChild(n), this.labelElement = n;
      const s = e.createElement("div");
      s.classList.add(zs("v")), this.element.appendChild(s), this.valueElement = s;
    }
  }
  class By {
    constructor(e, t) {
      this.props = t.props, this.valueController = t.valueController, this.viewProps = t.valueController.viewProps, this.view = new Fy(e, {
        props: t.props,
        viewProps: this.viewProps
      }), this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importProps(e) {
      return Tn(e, null, (t) => ({
        label: t.optional.string
      }), (t) => (this.props.set("label", t.label), true));
    }
    exportProps() {
      return An(null, {
        label: this.props.get("label")
      });
    }
  }
  function ky() {
    return [
      "veryfirst",
      "first",
      "last",
      "verylast"
    ];
  }
  const Hh = We(""), Gh = {
    veryfirst: "vfst",
    first: "fst",
    last: "lst",
    verylast: "vlst"
  };
  class bd {
    constructor(e) {
      this.parent_ = null, this.blade = e.blade, this.view = e.view, this.viewProps = e.viewProps;
      const t = this.view.element;
      this.blade.value("positions").emitter.on("change", () => {
        ky().forEach((n) => {
          t.classList.remove(Hh(void 0, Gh[n]));
        }), this.blade.get("positions").forEach((n) => {
          t.classList.add(Hh(void 0, Gh[n]));
        });
      }), this.viewProps.handleDispose(() => {
        Kl(t);
      });
    }
    get parent() {
      return this.parent_;
    }
    set parent(e) {
      this.parent_ = e, this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
    }
    importState(e) {
      return Tn(e, null, (t) => ({
        disabled: t.required.boolean,
        hidden: t.required.boolean
      }), (t) => (this.viewProps.importState(t), true));
    }
    exportState() {
      return An(null, Object.assign({}, this.viewProps.exportState()));
    }
  }
  class Vy extends Wl {
    get label() {
      return this.controller.labelController.props.get("label");
    }
    set label(e) {
      this.controller.labelController.props.set("label", e);
    }
    get title() {
      var e;
      return (e = this.controller.buttonController.props.get("title")) !== null && e !== void 0 ? e : "";
    }
    set title(e) {
      this.controller.buttonController.props.set("title", e);
    }
    on(e, t) {
      const n = t.bind(this);
      return this.controller.buttonController.emitter.on(e, (r) => {
        n(new Ty(this, r.nativeEvent));
      }), this;
    }
    off(e, t) {
      return this.controller.buttonController.emitter.off(e, t), this;
    }
  }
  function zy(i, e, t) {
    t ? i.classList.add(e) : i.classList.remove(e);
  }
  function Ps(i, e) {
    return (t) => {
      zy(i, e, t);
    };
  }
  function ql(i, e) {
    Gn(i, (t) => {
      e.textContent = t ?? "";
    });
  }
  const fa = We("btn");
  class Hy {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(fa()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("button");
      n.classList.add(fa("b")), t.viewProps.bindDisabled(n), this.element.appendChild(n), this.buttonElement = n;
      const s = e.createElement("div");
      s.classList.add(fa("t")), ql(t.props.value("title"), s), this.buttonElement.appendChild(s);
    }
  }
  class Gy {
    constructor(e, t) {
      this.emitter = new $t(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new Hy(e, {
        props: this.props,
        viewProps: this.viewProps
      }), this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    importProps(e) {
      return Tn(e, null, (t) => ({
        title: t.optional.string
      }), (t) => (this.props.set("title", t.title), true));
    }
    exportProps() {
      return An(null, {
        title: this.props.get("title")
      });
    }
    onClick_(e) {
      this.emitter.emit("click", {
        nativeEvent: e,
        sender: this
      });
    }
  }
  class Wh extends bd {
    constructor(e, t) {
      const n = new Gy(e, {
        props: t.buttonProps,
        viewProps: t.viewProps
      }), s = new By(e, {
        blade: t.blade,
        props: t.labelProps,
        valueController: n
      });
      super({
        blade: t.blade,
        view: s.view,
        viewProps: t.viewProps
      }), this.buttonController = n, this.labelController = s;
    }
    importState(e) {
      return Tn(e, (t) => super.importState(t) && this.buttonController.importProps(t) && this.labelController.importProps(t), () => ({}), () => true);
    }
    exportState() {
      return An(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
    }
  }
  class Md {
    constructor(e) {
      const [t, n] = e.split("-"), s = t.split(".");
      this.major = parseInt(s[0], 10), this.minor = parseInt(s[1], 10), this.patch = parseInt(s[2], 10), this.prerelease = n ?? null;
    }
    toString() {
      const e = [
        this.major,
        this.minor,
        this.patch
      ].join(".");
      return this.prerelease !== null ? [
        e,
        this.prerelease
      ].join("-") : e;
    }
  }
  const Wy = new Md("2.0.5");
  function Bt(i) {
    return Object.assign({
      core: Wy
    }, i);
  }
  Bt({
    id: "button",
    type: "blade",
    accept(i) {
      const e = It(i, (t) => ({
        title: t.required.string,
        view: t.required.constant("button"),
        label: t.optional.string
      }));
      return e ? {
        params: e
      } : null;
    },
    controller(i) {
      return new Wh(i.document, {
        blade: i.blade,
        buttonProps: Ge.fromObject({
          title: i.params.title
        }),
        labelProps: Ge.fromObject({
          label: i.params.label
        }),
        viewProps: i.viewProps
      });
    },
    api(i) {
      return i.controller instanceof Wh ? new Vy(i.controller) : null;
    }
  });
  function Xy(i, e) {
    return i.addBlade(Object.assign(Object.assign({}, e), {
      view: "button"
    }));
  }
  function jy(i, e) {
    return i.addBlade(Object.assign(Object.assign({}, e), {
      view: "folder"
    }));
  }
  function Ky(i, e) {
    return i.addBlade(Object.assign(Object.assign({}, e), {
      view: "tab"
    }));
  }
  function qy(i) {
    return Vl(i) ? "refresh" in i && typeof i.refresh == "function" : false;
  }
  function Yy(i, e) {
    if (!po.isBindable(i)) throw Yt.notBindable();
    return new po(i, e);
  }
  class $y {
    constructor(e, t) {
      this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.controller_ = e, this.emitter_ = new $t(), this.pool_ = t, this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_);
    }
    get children() {
      return this.controller_.rack.children.map((e) => this.pool_.createApi(e));
    }
    addBinding(e, t, n) {
      const s = n ?? {}, r = this.controller_.element.ownerDocument, o = this.pool_.createBinding(r, Yy(e, t), s), a = this.pool_.createBindingApi(o);
      return this.add(a, s.index);
    }
    addFolder(e) {
      return jy(this, e);
    }
    addButton(e) {
      return Xy(this, e);
    }
    addTab(e) {
      return Ky(this, e);
    }
    add(e, t) {
      const n = e.controller;
      return this.controller_.rack.add(n, t), e;
    }
    remove(e) {
      this.controller_.rack.remove(e.controller);
    }
    addBlade(e) {
      const t = this.controller_.element.ownerDocument, n = this.pool_.createBlade(t, e), s = this.pool_.createApi(n);
      return this.add(s, e.index);
    }
    on(e, t) {
      const n = t.bind(this);
      return this.emitter_.on(e, (s) => {
        n(s);
      }, {
        key: t
      }), this;
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
    refresh() {
      this.children.forEach((e) => {
        qy(e) && e.refresh();
      });
    }
    onRackValueChange_(e) {
      const t = e.bladeController, n = this.pool_.createApi(t), s = Py(t.value) ? t.value.binding : null;
      this.emitter_.emit("change", new gd(n, s ? s.target.read() : t.value.rawValue, e.options.last));
    }
  }
  class Yl extends Wl {
    constructor(e, t) {
      super(e), this.rackApi_ = new $y(e.rackController, t);
    }
    refresh() {
      this.rackApi_.refresh();
    }
  }
  class $l extends bd {
    constructor(e) {
      super({
        blade: e.blade,
        view: e.view,
        viewProps: e.rackController.viewProps
      }), this.rackController = e.rackController;
    }
    importState(e) {
      return Tn(e, (t) => super.importState(t), (t) => ({
        children: t.required.array(t.required.raw)
      }), (t) => this.rackController.rack.children.every((n, s) => n.importState(t.children[s])));
    }
    exportState() {
      return An(() => super.exportState(), {
        children: this.rackController.rack.children.map((e) => e.exportState())
      });
    }
  }
  function ul(i) {
    return "rackController" in i;
  }
  class Zy {
    constructor(e) {
      this.emitter = new $t(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = e;
    }
    get items() {
      return this.items_;
    }
    allItems() {
      return Array.from(this.cache_);
    }
    find(e) {
      for (const t of this.allItems()) if (e(t)) return t;
      return null;
    }
    includes(e) {
      return this.cache_.has(e);
    }
    add(e, t) {
      if (this.includes(e)) throw Yt.shouldNeverHappen();
      const n = t !== void 0 ? t : this.items_.length;
      this.items_.splice(n, 0, e), this.cache_.add(e);
      const s = this.extract_(e);
      s && (s.emitter.on("add", this.onSubListAdd_), s.emitter.on("remove", this.onSubListRemove_), s.allItems().forEach((r) => {
        this.cache_.add(r);
      })), this.emitter.emit("add", {
        index: n,
        item: e,
        root: this,
        target: this
      });
    }
    remove(e) {
      const t = this.items_.indexOf(e);
      if (t < 0) return;
      this.items_.splice(t, 1), this.cache_.delete(e);
      const n = this.extract_(e);
      n && (n.allItems().forEach((s) => {
        this.cache_.delete(s);
      }), n.emitter.off("add", this.onSubListAdd_), n.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", {
        index: t,
        item: e,
        root: this,
        target: this
      });
    }
    onSubListAdd_(e) {
      this.cache_.add(e.item), this.emitter.emit("add", {
        index: e.index,
        item: e.item,
        root: this,
        target: e.target
      });
    }
    onSubListRemove_(e) {
      this.cache_.delete(e.item), this.emitter.emit("remove", {
        index: e.index,
        item: e.item,
        root: this,
        target: e.target
      });
    }
  }
  function Jy(i, e) {
    for (let t = 0; t < i.length; t++) {
      const n = i[t];
      if (Qr(n) && n.value === e) return n;
    }
    return null;
  }
  function Qy(i) {
    return ul(i) ? i.rackController.rack.bcSet_ : null;
  }
  class eb {
    constructor(e) {
      var t, n;
      this.emitter = new $t(), this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onRackLayout_ = this.onRackLayout_.bind(this), this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.blade_ = (t = e.blade) !== null && t !== void 0 ? t : null, (n = this.blade_) === null || n === void 0 || n.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = e.viewProps, this.bcSet_ = new Zy(Qy), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
    }
    get children() {
      return this.bcSet_.items;
    }
    add(e, t) {
      var n;
      (n = e.parent) === null || n === void 0 || n.remove(e), e.parent = this, this.bcSet_.add(e, t);
    }
    remove(e) {
      e.parent = null, this.bcSet_.remove(e);
    }
    find(e) {
      return this.bcSet_.allItems().filter(e);
    }
    onSetAdd_(e) {
      this.updatePositions_();
      const t = e.target === e.root;
      if (this.emitter.emit("add", {
        bladeController: e.item,
        index: e.index,
        root: t,
        sender: this
      }), !t) return;
      const n = e.item;
      if (n.viewProps.emitter.on("change", this.onChildViewPropsChange_), n.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), n.viewProps.handleDispose(this.onChildDispose_), Qr(n)) n.value.emitter.on("change", this.onChildValueChange_);
      else if (ul(n)) {
        const s = n.rackController.rack;
        if (s) {
          const r = s.emitter;
          r.on("layout", this.onRackLayout_), r.on("valuechange", this.onRackValueChange_);
        }
      }
    }
    onSetRemove_(e) {
      this.updatePositions_();
      const t = e.target === e.root;
      if (this.emitter.emit("remove", {
        bladeController: e.item,
        root: t,
        sender: this
      }), !t) return;
      const n = e.item;
      if (Qr(n)) n.value.emitter.off("change", this.onChildValueChange_);
      else if (ul(n)) {
        const s = n.rackController.rack;
        if (s) {
          const r = s.emitter;
          r.off("layout", this.onRackLayout_), r.off("valuechange", this.onRackValueChange_);
        }
      }
    }
    updatePositions_() {
      const e = this.bcSet_.items.filter((s) => !s.viewProps.get("hidden")), t = e[0], n = e[e.length - 1];
      this.bcSet_.items.forEach((s) => {
        const r = [];
        s === t && (r.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && r.push("veryfirst")), s === n && (r.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && r.push("verylast")), s.blade.set("positions", r);
      });
    }
    onChildPositionsChange_() {
      this.updatePositions_(), this.emitter.emit("layout", {
        sender: this
      });
    }
    onChildViewPropsChange_(e) {
      this.updatePositions_(), this.emitter.emit("layout", {
        sender: this
      });
    }
    onChildDispose_() {
      this.bcSet_.items.filter((t) => t.viewProps.get("disposed")).forEach((t) => {
        this.bcSet_.remove(t);
      });
    }
    onChildValueChange_(e) {
      const t = Jy(this.find(Qr), e.sender);
      if (!t) throw Yt.alreadyDisposed();
      this.emitter.emit("valuechange", {
        bladeController: t,
        options: e.options,
        sender: this
      });
    }
    onRackLayout_(e) {
      this.updatePositions_(), this.emitter.emit("layout", {
        sender: this
      });
    }
    onRackValueChange_(e) {
      this.emitter.emit("valuechange", {
        bladeController: e.bladeController,
        options: e.options,
        sender: this
      });
    }
    onBladePositionsChange_() {
      this.updatePositions_();
    }
  }
  class Zl {
    constructor(e) {
      this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.element = e.element, this.viewProps = e.viewProps;
      const t = new eb({
        blade: e.root ? void 0 : e.blade,
        viewProps: e.viewProps
      });
      t.emitter.on("add", this.onRackAdd_), t.emitter.on("remove", this.onRackRemove_), this.rack = t, this.viewProps.handleDispose(() => {
        for (let n = this.rack.children.length - 1; n >= 0; n--) this.rack.children[n].viewProps.set("disposed", true);
      });
    }
    onRackAdd_(e) {
      e.root && vd(this.element, e.bladeController.view.element, e.index);
    }
    onRackRemove_(e) {
      e.root && Kl(e.bladeController.view.element);
    }
  }
  function Sd() {
    return new Ge({
      positions: Et([], {
        equals: z0
      })
    });
  }
  class lr extends Ge {
    constructor(e) {
      super(e);
    }
    static create(e) {
      const t = {
        completed: true,
        expanded: e,
        expandedHeight: null,
        shouldFixHeight: false,
        temporaryExpanded: null
      }, n = Ge.createCore(t);
      return new lr(n);
    }
    get styleExpanded() {
      var e;
      return (e = this.get("temporaryExpanded")) !== null && e !== void 0 ? e : this.get("expanded");
    }
    get styleHeight() {
      if (!this.styleExpanded) return "0";
      const e = this.get("expandedHeight");
      return this.get("shouldFixHeight") && !rt(e) ? `${e}px` : "auto";
    }
    bindExpandedClass(e, t) {
      const n = () => {
        this.styleExpanded ? e.classList.add(t) : e.classList.remove(t);
      };
      bn(this, "expanded", n), bn(this, "temporaryExpanded", n);
    }
    cleanUpTransition() {
      this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
    }
  }
  function tb(i, e) {
    let t = 0;
    return Ly(e, () => {
      i.set("expandedHeight", null), i.set("temporaryExpanded", true), fo(e), t = e.clientHeight, i.set("temporaryExpanded", null), fo(e);
    }), t;
  }
  function Xh(i, e) {
    e.style.height = i.styleHeight;
  }
  function Jl(i, e) {
    i.value("expanded").emitter.on("beforechange", () => {
      if (i.set("completed", false), rt(i.get("expandedHeight"))) {
        const t = tb(i, e);
        t > 0 && i.set("expandedHeight", t);
      }
      i.set("shouldFixHeight", true), fo(e);
    }), i.emitter.on("change", () => {
      Xh(i, e);
    }), Xh(i, e), e.addEventListener("transitionend", (t) => {
      t.propertyName === "height" && i.cleanUpTransition();
    });
  }
  class nb extends Yl {
    constructor(e, t) {
      super(e, t), this.emitter_ = new $t(), this.controller.foldable.value("expanded").emitter.on("change", (n) => {
        this.emitter_.emit("fold", new Ey(this, n.sender.rawValue));
      }), this.rackApi_.on("change", (n) => {
        this.emitter_.emit("change", n);
      });
    }
    get expanded() {
      return this.controller.foldable.get("expanded");
    }
    set expanded(e) {
      this.controller.foldable.set("expanded", e);
    }
    get title() {
      return this.controller.props.get("title");
    }
    set title(e) {
      this.controller.props.set("title", e);
    }
    get children() {
      return this.rackApi_.children;
    }
    addBinding(e, t, n) {
      return this.rackApi_.addBinding(e, t, n);
    }
    addFolder(e) {
      return this.rackApi_.addFolder(e);
    }
    addButton(e) {
      return this.rackApi_.addButton(e);
    }
    addTab(e) {
      return this.rackApi_.addTab(e);
    }
    add(e, t) {
      return this.rackApi_.add(e, t);
    }
    remove(e) {
      this.rackApi_.remove(e);
    }
    addBlade(e) {
      return this.rackApi_.addBlade(e);
    }
    on(e, t) {
      const n = t.bind(this);
      return this.emitter_.on(e, (s) => {
        n(s);
      }, {
        key: t
      }), this;
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
  }
  const Ed = We("cnt");
  class ib {
    constructor(e, t) {
      var n;
      this.className_ = We((n = t.viewName) !== null && n !== void 0 ? n : "fld"), this.element = e.createElement("div"), this.element.classList.add(this.className_(), Ed()), t.viewProps.bindClassModifiers(this.element), this.foldable_ = t.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), bn(this.foldable_, "completed", Ps(this.element, this.className_(void 0, "cpl")));
      const s = e.createElement("button");
      s.classList.add(this.className_("b")), bn(t.props, "title", (c) => {
        rt(c) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
      }), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s;
      const r = e.createElement("div");
      r.classList.add(this.className_("i")), this.element.appendChild(r);
      const o = e.createElement("div");
      o.classList.add(this.className_("t")), ql(t.props.value("title"), o), this.buttonElement.appendChild(o), this.titleElement = o;
      const a = e.createElement("div");
      a.classList.add(this.className_("m")), this.buttonElement.appendChild(a);
      const l = e.createElement("div");
      l.classList.add(this.className_("c")), this.element.appendChild(l), this.containerElement = l;
    }
  }
  class jh extends $l {
    constructor(e, t) {
      var n;
      const s = lr.create((n = t.expanded) !== null && n !== void 0 ? n : true), r = new ib(e, {
        foldable: s,
        props: t.props,
        viewName: t.root ? "rot" : void 0,
        viewProps: t.viewProps
      });
      super(Object.assign(Object.assign({}, t), {
        rackController: new Zl({
          blade: t.blade,
          element: r.containerElement,
          root: t.root,
          viewProps: t.viewProps
        }),
        view: r
      })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = t.props, this.foldable = s, Jl(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
        this.foldable.cleanUpTransition();
      }), this.rackController.rack.emitter.on("remove", () => {
        this.foldable.cleanUpTransition();
      }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
    }
    get document() {
      return this.view.element.ownerDocument;
    }
    importState(e) {
      return Tn(e, (t) => super.importState(t), (t) => ({
        expanded: t.required.boolean,
        title: t.optional.string
      }), (t) => (this.foldable.set("expanded", t.expanded), this.props.set("title", t.title), true));
    }
    exportState() {
      return An(() => super.exportState(), {
        expanded: this.foldable.get("expanded"),
        title: this.props.get("title")
      });
    }
    onTitleClick_() {
      this.foldable.set("expanded", !this.foldable.get("expanded"));
    }
  }
  Bt({
    id: "folder",
    type: "blade",
    accept(i) {
      const e = It(i, (t) => ({
        title: t.required.string,
        view: t.required.constant("folder"),
        expanded: t.optional.boolean
      }));
      return e ? {
        params: e
      } : null;
    },
    controller(i) {
      return new jh(i.document, {
        blade: i.blade,
        expanded: i.params.expanded,
        props: Ge.fromObject({
          title: i.params.title
        }),
        viewProps: i.viewProps
      });
    },
    api(i) {
      return i.controller instanceof jh ? new nb(i.controller, i.pool) : null;
    }
  });
  const sb = We("");
  function Kh(i, e) {
    return Ps(i, sb(void 0, e));
  }
  class cr extends Ge {
    constructor(e) {
      var t;
      super(e), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = K0(Et(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
    }
    static create(e) {
      var t, n, s;
      const r = e ?? {};
      return new cr(Ge.createCore({
        disabled: (t = r.disabled) !== null && t !== void 0 ? t : false,
        disposed: false,
        hidden: (n = r.hidden) !== null && n !== void 0 ? n : false,
        parent: (s = r.parent) !== null && s !== void 0 ? s : null
      }));
    }
    get globalDisabled() {
      return this.globalDisabled_;
    }
    bindClassModifiers(e) {
      Gn(this.globalDisabled_, Kh(e, "disabled")), bn(this, "hidden", Kh(e, "hidden"));
    }
    bindDisabled(e) {
      Gn(this.globalDisabled_, (t) => {
        e.disabled = t;
      });
    }
    bindTabIndex(e) {
      Gn(this.globalDisabled_, (t) => {
        e.tabIndex = t ? -1 : 0;
      });
    }
    handleDispose(e) {
      this.value("disposed").emitter.on("change", (t) => {
        t && e();
      });
    }
    importState(e) {
      this.set("disabled", e.disabled), this.set("hidden", e.hidden);
    }
    exportState() {
      return {
        disabled: this.get("disabled"),
        hidden: this.get("hidden")
      };
    }
    getGlobalDisabled_() {
      const e = this.get("parent");
      return (e ? e.globalDisabled.rawValue : false) || this.get("disabled");
    }
    updateGlobalDisabled_() {
      this.setGlobalDisabled_(this.getGlobalDisabled_());
    }
    onDisabledChange_() {
      this.updateGlobalDisabled_();
    }
    onParentGlobalDisabledChange_() {
      this.updateGlobalDisabled_();
    }
    onParentChange_(e) {
      var t;
      const n = e.previousRawValue;
      n == null ? void 0 : n.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
    }
  }
  const qh = We("tbp");
  class rb {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(qh()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("div");
      n.classList.add(qh("c")), this.element.appendChild(n), this.containerElement = n;
    }
  }
  const Hs = We("tbi");
  class ob {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(Hs()), t.viewProps.bindClassModifiers(this.element), bn(t.props, "selected", (r) => {
        r ? this.element.classList.add(Hs(void 0, "sel")) : this.element.classList.remove(Hs(void 0, "sel"));
      });
      const n = e.createElement("button");
      n.classList.add(Hs("b")), t.viewProps.bindDisabled(n), this.element.appendChild(n), this.buttonElement = n;
      const s = e.createElement("div");
      s.classList.add(Hs("t")), ql(t.props.value("title"), s), this.buttonElement.appendChild(s), this.titleElement = s;
    }
  }
  class ab {
    constructor(e, t) {
      this.emitter = new $t(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new ob(e, {
        props: t.props,
        viewProps: t.viewProps
      }), this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    onClick_() {
      this.emitter.emit("click", {
        sender: this
      });
    }
  }
  class dl extends $l {
    constructor(e, t) {
      const n = new rb(e, {
        viewProps: t.viewProps
      });
      super(Object.assign(Object.assign({}, t), {
        rackController: new Zl({
          blade: t.blade,
          element: n.containerElement,
          viewProps: t.viewProps
        }),
        view: n
      })), this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new ab(e, {
        props: t.itemProps,
        viewProps: cr.create()
      }), this.ic_.emitter.on("click", this.onItemClick_), this.props = t.props, bn(this.props, "selected", (s) => {
        this.itemController.props.set("selected", s), this.viewProps.set("hidden", !s);
      });
    }
    get itemController() {
      return this.ic_;
    }
    importState(e) {
      return Tn(e, (t) => super.importState(t), (t) => ({
        selected: t.required.boolean,
        title: t.required.string
      }), (t) => (this.ic_.props.set("selected", t.selected), this.ic_.props.set("title", t.title), true));
    }
    exportState() {
      return An(() => super.exportState(), {
        selected: this.ic_.props.get("selected"),
        title: this.ic_.props.get("title")
      });
    }
    onItemClick_() {
      this.props.set("selected", true);
    }
  }
  class lb extends Yl {
    constructor(e, t) {
      super(e, t), this.emitter_ = new $t(), this.onSelect_ = this.onSelect_.bind(this), this.pool_ = t, this.rackApi_.on("change", (n) => {
        this.emitter_.emit("change", n);
      }), this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
    }
    get pages() {
      return this.rackApi_.children;
    }
    addPage(e) {
      const t = this.controller.view.element.ownerDocument, n = new dl(t, {
        blade: Sd(),
        itemProps: Ge.fromObject({
          selected: false,
          title: e.title
        }),
        props: Ge.fromObject({
          selected: false
        }),
        viewProps: cr.create()
      }), s = this.pool_.createApi(n);
      return this.rackApi_.add(s, e.index);
    }
    removePage(e) {
      this.rackApi_.remove(this.rackApi_.children[e]);
    }
    on(e, t) {
      const n = t.bind(this);
      return this.emitter_.on(e, (s) => {
        n(s);
      }, {
        key: t
      }), this;
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
    onSelect_(e) {
      this.emitter_.emit("select", new wy(this, e.rawValue));
    }
  }
  class cb extends Yl {
    get title() {
      var e;
      return (e = this.controller.itemController.props.get("title")) !== null && e !== void 0 ? e : "";
    }
    set title(e) {
      this.controller.itemController.props.set("title", e);
    }
    get selected() {
      return this.controller.props.get("selected");
    }
    set selected(e) {
      this.controller.props.set("selected", e);
    }
    get children() {
      return this.rackApi_.children;
    }
    addButton(e) {
      return this.rackApi_.addButton(e);
    }
    addFolder(e) {
      return this.rackApi_.addFolder(e);
    }
    addTab(e) {
      return this.rackApi_.addTab(e);
    }
    add(e, t) {
      this.rackApi_.add(e, t);
    }
    remove(e) {
      this.rackApi_.remove(e);
    }
    addBinding(e, t, n) {
      return this.rackApi_.addBinding(e, t, n);
    }
    addBlade(e) {
      return this.rackApi_.addBlade(e);
    }
  }
  const Yh = -1;
  class hb {
    constructor() {
      this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = Et(true), this.selectedIndex = Et(Yh), this.items_ = [];
    }
    add(e, t) {
      const n = t ?? this.items_.length;
      this.items_.splice(n, 0, e), e.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
    }
    remove(e) {
      const t = this.items_.indexOf(e);
      t < 0 || (this.items_.splice(t, 1), e.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
    }
    keepSelection_() {
      if (this.items_.length === 0) {
        this.selectedIndex.rawValue = Yh, this.empty.rawValue = true;
        return;
      }
      const e = this.items_.findIndex((t) => t.rawValue);
      e < 0 ? (this.items_.forEach((t, n) => {
        t.rawValue = n === 0;
      }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((t, n) => {
        t.rawValue = n === e;
      }), this.selectedIndex.rawValue = e), this.empty.rawValue = false;
    }
    onItemSelectedChange_(e) {
      if (e.rawValue) {
        const t = this.items_.findIndex((n) => n === e.sender);
        this.items_.forEach((n, s) => {
          n.rawValue = s === t;
        }), this.selectedIndex.rawValue = t;
      } else this.keepSelection_();
    }
  }
  const Gs = We("tab");
  class ub {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(Gs(), Ed()), t.viewProps.bindClassModifiers(this.element), Gn(t.empty, Ps(this.element, Gs(void 0, "nop")));
      const n = e.createElement("div");
      n.classList.add(Gs("t")), this.element.appendChild(n), this.itemsElement = n;
      const s = e.createElement("div");
      s.classList.add(Gs("i")), this.element.appendChild(s);
      const r = e.createElement("div");
      r.classList.add(Gs("c")), this.element.appendChild(r), this.contentsElement = r;
    }
  }
  class $h extends $l {
    constructor(e, t) {
      const n = new hb(), s = new ub(e, {
        empty: n.empty,
        viewProps: t.viewProps
      });
      super({
        blade: t.blade,
        rackController: new Zl({
          blade: t.blade,
          element: s.contentsElement,
          viewProps: t.viewProps
        }),
        view: s
      }), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
      const r = this.rackController.rack;
      r.emitter.on("add", this.onRackAdd_), r.emitter.on("remove", this.onRackRemove_), this.tab = n;
    }
    add(e, t) {
      this.rackController.rack.add(e, t);
    }
    remove(e) {
      this.rackController.rack.remove(this.rackController.rack.children[e]);
    }
    onRackAdd_(e) {
      if (!e.root) return;
      const t = e.bladeController;
      vd(this.view.itemsElement, t.itemController.view.element, e.index), t.itemController.viewProps.set("parent", this.viewProps), this.tab.add(t.props.value("selected"));
    }
    onRackRemove_(e) {
      if (!e.root) return;
      const t = e.bladeController;
      Kl(t.itemController.view.element), t.itemController.viewProps.set("parent", null), this.tab.remove(t.props.value("selected"));
    }
  }
  Bt({
    id: "tab",
    type: "blade",
    accept(i) {
      const e = It(i, (t) => ({
        pages: t.required.array(t.required.object({
          title: t.required.string
        })),
        view: t.required.constant("tab")
      }));
      return !e || e.pages.length === 0 ? null : {
        params: e
      };
    },
    controller(i) {
      const e = new $h(i.document, {
        blade: i.blade,
        viewProps: i.viewProps
      });
      return i.params.pages.forEach((t) => {
        const n = new dl(i.document, {
          blade: Sd(),
          itemProps: Ge.fromObject({
            selected: false,
            title: t.title
          }),
          props: Ge.fromObject({
            selected: false
          }),
          viewProps: cr.create()
        });
        e.add(n);
      }), e;
    },
    api(i) {
      return i.controller instanceof $h ? new lb(i.controller, i.pool) : i.controller instanceof dl ? new cb(i.controller, i.pool) : null;
    }
  });
  class Ql extends Xl {
    get options() {
      return this.controller.valueController.props.get("options");
    }
    set options(e) {
      this.controller.valueController.props.set("options", e);
    }
  }
  class hr {
    constructor(e) {
      this.constraints = e;
    }
    constrain(e) {
      return this.constraints.reduce((t, n) => n.constrain(t), e);
    }
  }
  function mo(i, e) {
    if (i instanceof e) return i;
    if (i instanceof hr) {
      const t = i.constraints.reduce((n, s) => n || (s instanceof e ? s : null), null);
      if (t) return t;
    }
    return null;
  }
  class Ao {
    constructor(e) {
      this.values = Ge.fromObject({
        options: e
      });
    }
    constrain(e) {
      const t = this.values.get("options");
      return t.length === 0 || t.filter((s) => s.value === e).length > 0 ? e : t[0].value;
    }
  }
  function Co(i) {
    var e;
    const t = hl;
    if (Array.isArray(i)) return (e = It({
      items: i
    }, (n) => ({
      items: n.required.array(n.required.object({
        text: n.required.string,
        value: n.required.raw
      }))
    }))) === null || e === void 0 ? void 0 : e.items;
    if (typeof i == "object") return t.required.raw(i).value;
  }
  function wd(i) {
    if (Array.isArray(i)) return i;
    const e = [];
    return Object.keys(i).forEach((t) => {
      e.push({
        text: t,
        value: i[t]
      });
    }), e;
  }
  function ec(i) {
    return rt(i) ? null : new Ao(wd(i));
  }
  const ma = We("lst");
  class db {
    constructor(e, t) {
      this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.element = e.createElement("div"), this.element.classList.add(ma()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("select");
      n.classList.add(ma("s")), t.viewProps.bindDisabled(n), this.element.appendChild(n), this.selectElement = n;
      const s = e.createElement("div");
      s.classList.add(ma("m")), s.appendChild(To(e, "dropdown")), this.element.appendChild(s), t.value.emitter.on("change", this.onValueChange_), this.value_ = t.value, bn(this.props_, "options", (r) => {
        xd(this.selectElement), r.forEach((o) => {
          const a = e.createElement("option");
          a.textContent = o.text, this.selectElement.appendChild(a);
        }), this.update_();
      });
    }
    update_() {
      const e = this.props_.get("options").map((t) => t.value);
      this.selectElement.selectedIndex = e.indexOf(this.value_.rawValue);
    }
    onValueChange_() {
      this.update_();
    }
  }
  class Es {
    constructor(e, t) {
      this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new db(e, {
        props: this.props,
        value: this.value,
        viewProps: this.viewProps
      }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
    }
    onSelectChange_(e) {
      const t = e.currentTarget;
      this.value.rawValue = this.props.get("options")[t.selectedIndex].value;
    }
    importProps(e) {
      return Tn(e, null, (t) => ({
        options: t.required.custom(Co)
      }), (t) => (this.props.set("options", wd(t.options)), true));
    }
    exportProps() {
      return An(null, {
        options: this.props.get("options")
      });
    }
  }
  const Zh = We("pop");
  class pb {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(Zh()), t.viewProps.bindClassModifiers(this.element), Gn(t.shows, Ps(this.element, Zh(void 0, "v")));
    }
  }
  class Td {
    constructor(e, t) {
      this.shows = Et(false), this.viewProps = t.viewProps, this.view = new pb(e, {
        shows: this.shows,
        viewProps: this.viewProps
      });
    }
  }
  const Jh = We("txt");
  class fb {
    constructor(e, t) {
      this.onChange_ = this.onChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Jh()), t.viewProps.bindClassModifiers(this.element), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_);
      const n = e.createElement("input");
      n.classList.add(Jh("i")), n.type = "text", t.viewProps.bindDisabled(n), this.element.appendChild(n), this.inputElement = n, t.value.emitter.on("change", this.onChange_), this.value_ = t.value, this.refresh();
    }
    refresh() {
      const e = this.props_.get("formatter");
      this.inputElement.value = e(this.value_.rawValue);
    }
    onChange_() {
      this.refresh();
    }
  }
  class tc {
    constructor(e, t) {
      this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = t.parser, this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new fb(e, {
        props: t.props,
        value: this.value,
        viewProps: this.viewProps
      }), this.view.inputElement.addEventListener("change", this.onInputChange_);
    }
    onInputChange_(e) {
      const n = e.currentTarget.value, s = this.parser_(n);
      rt(s) || (this.value.rawValue = s), this.view.refresh();
    }
  }
  function mb(i) {
    return String(i);
  }
  function Ad(i) {
    return i === "false" ? false : !!i;
  }
  function Qh(i) {
    return mb(i);
  }
  function _b(i) {
    return (e) => i.reduce((t, n) => t !== null ? t : n(e), null);
  }
  const gb = Gt(0);
  function _o(i) {
    return gb(i) + "%";
  }
  function Cd(i) {
    return String(i);
  }
  function pl(i) {
    return i;
  }
  function Ls({ primary: i, secondary: e, forward: t, backward: n }) {
    let s = false;
    function r(o) {
      s || (s = true, o(), s = false);
    }
    i.emitter.on("change", (o) => {
      r(() => {
        e.setRawValue(t(i.rawValue, e.rawValue), o.options);
      });
    }), e.emitter.on("change", (o) => {
      r(() => {
        i.setRawValue(n(i.rawValue, e.rawValue), o.options);
      }), r(() => {
        e.setRawValue(t(i.rawValue, e.rawValue), o.options);
      });
    }), r(() => {
      e.setRawValue(t(i.rawValue, e.rawValue), {
        forceEmit: false,
        last: true
      });
    });
  }
  function zt(i, e) {
    const t = i * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);
    return e.upKey ? +t : e.downKey ? -t : 0;
  }
  function ir(i) {
    return {
      altKey: i.altKey,
      downKey: i.key === "ArrowDown",
      shiftKey: i.shiftKey,
      upKey: i.key === "ArrowUp"
    };
  }
  function jn(i) {
    return {
      altKey: i.altKey,
      downKey: i.key === "ArrowLeft",
      shiftKey: i.shiftKey,
      upKey: i.key === "ArrowRight"
    };
  }
  function vb(i) {
    return i === "ArrowUp" || i === "ArrowDown";
  }
  function Rd(i) {
    return vb(i) || i === "ArrowLeft" || i === "ArrowRight";
  }
  function _a(i, e) {
    var t, n;
    const s = e.ownerDocument.defaultView, r = e.getBoundingClientRect();
    return {
      x: i.pageX - (((t = s && s.scrollX) !== null && t !== void 0 ? t : 0) + r.left),
      y: i.pageY - (((n = s && s.scrollY) !== null && n !== void 0 ? n : 0) + r.top)
    };
  }
  class Ni {
    constructor(e) {
      this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = e, this.emitter = new $t(), e.addEventListener("touchstart", this.onTouchStart_, {
        passive: false
      }), e.addEventListener("touchmove", this.onTouchMove_, {
        passive: true
      }), e.addEventListener("touchend", this.onTouchEnd_), e.addEventListener("mousedown", this.onMouseDown_);
    }
    computePosition_(e) {
      const t = this.elem_.getBoundingClientRect();
      return {
        bounds: {
          width: t.width,
          height: t.height
        },
        point: e ? {
          x: e.x,
          y: e.y
        } : null
      };
    }
    onMouseDown_(e) {
      var t;
      e.preventDefault(), (t = e.currentTarget) === null || t === void 0 || t.focus();
      const n = this.elem_.ownerDocument;
      n.addEventListener("mousemove", this.onDocumentMouseMove_), n.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", {
        altKey: e.altKey,
        data: this.computePosition_(_a(e, this.elem_)),
        sender: this,
        shiftKey: e.shiftKey
      });
    }
    onDocumentMouseMove_(e) {
      this.emitter.emit("move", {
        altKey: e.altKey,
        data: this.computePosition_(_a(e, this.elem_)),
        sender: this,
        shiftKey: e.shiftKey
      });
    }
    onDocumentMouseUp_(e) {
      const t = this.elem_.ownerDocument;
      t.removeEventListener("mousemove", this.onDocumentMouseMove_), t.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", {
        altKey: e.altKey,
        data: this.computePosition_(_a(e, this.elem_)),
        sender: this,
        shiftKey: e.shiftKey
      });
    }
    onTouchStart_(e) {
      e.preventDefault();
      const t = e.targetTouches.item(0), n = this.elem_.getBoundingClientRect();
      this.emitter.emit("down", {
        altKey: e.altKey,
        data: this.computePosition_(t ? {
          x: t.clientX - n.left,
          y: t.clientY - n.top
        } : void 0),
        sender: this,
        shiftKey: e.shiftKey
      }), this.lastTouch_ = t;
    }
    onTouchMove_(e) {
      const t = e.targetTouches.item(0), n = this.elem_.getBoundingClientRect();
      this.emitter.emit("move", {
        altKey: e.altKey,
        data: this.computePosition_(t ? {
          x: t.clientX - n.left,
          y: t.clientY - n.top
        } : void 0),
        sender: this,
        shiftKey: e.shiftKey
      }), this.lastTouch_ = t;
    }
    onTouchEnd_(e) {
      var t;
      const n = (t = e.targetTouches.item(0)) !== null && t !== void 0 ? t : this.lastTouch_, s = this.elem_.getBoundingClientRect();
      this.emitter.emit("up", {
        altKey: e.altKey,
        data: this.computePosition_(n ? {
          x: n.clientX - s.left,
          y: n.clientY - s.top
        } : void 0),
        sender: this,
        shiftKey: e.shiftKey
      });
    }
  }
  const Qt = We("txt");
  class xb {
    constructor(e, t) {
      this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(Qt(), Qt(void 0, "num")), t.arrayPosition && this.element.classList.add(Qt(void 0, t.arrayPosition)), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("input");
      n.classList.add(Qt("i")), n.type = "text", t.viewProps.bindDisabled(n), this.element.appendChild(n), this.inputElement = n, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = t.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(Qt()), this.inputElement.classList.add(Qt("i"));
      const s = e.createElement("div");
      s.classList.add(Qt("k")), this.element.appendChild(s), this.knobElement = s;
      const r = e.createElementNS(vn, "svg");
      r.classList.add(Qt("g")), this.knobElement.appendChild(r);
      const o = e.createElementNS(vn, "path");
      o.classList.add(Qt("gb")), r.appendChild(o), this.guideBodyElem_ = o;
      const a = e.createElementNS(vn, "path");
      a.classList.add(Qt("gh")), r.appendChild(a), this.guideHeadElem_ = a;
      const l = e.createElement("div");
      l.classList.add(We("tt")()), this.knobElement.appendChild(l), this.tooltipElem_ = l, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.refresh();
    }
    onDraggingChange_(e) {
      if (e.rawValue === null) {
        this.element.classList.remove(Qt(void 0, "drg"));
        return;
      }
      this.element.classList.add(Qt(void 0, "drg"));
      const t = e.rawValue / this.props_.get("pointerScale"), n = t + (t > 0 ? -1 : t < 0 ? 1 : 0), s = _t(-n, -4, 4);
      this.guideHeadElem_.setAttributeNS(null, "d", [
        `M ${n + s},0 L${n},4 L${n + s},8`,
        `M ${t},-1 L${t},9`
      ].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${t},4`);
      const r = this.props_.get("formatter");
      this.tooltipElem_.textContent = r(this.value.rawValue), this.tooltipElem_.style.left = `${t}px`;
    }
    refresh() {
      const e = this.props_.get("formatter");
      this.inputElement.value = e(this.value.rawValue);
    }
    onChange_() {
      this.refresh();
    }
  }
  class ur {
    constructor(e, t) {
      var n;
      this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.parser_ = t.parser, this.props = t.props, this.sliderProps_ = (n = t.sliderProps) !== null && n !== void 0 ? n : null, this.value = t.value, this.viewProps = t.viewProps, this.dragging_ = Et(null), this.view = new xb(e, {
        arrayPosition: t.arrayPosition,
        dragging: this.dragging_,
        props: this.props,
        value: this.value,
        viewProps: this.viewProps
      }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
      const s = new Ni(this.view.knobElement);
      s.emitter.on("down", this.onPointerDown_), s.emitter.on("move", this.onPointerMove_), s.emitter.on("up", this.onPointerUp_);
    }
    constrainValue_(e) {
      var t, n;
      const s = (t = this.sliderProps_) === null || t === void 0 ? void 0 : t.get("min"), r = (n = this.sliderProps_) === null || n === void 0 ? void 0 : n.get("max");
      let o = e;
      return s !== void 0 && (o = Math.max(o, s)), r !== void 0 && (o = Math.min(o, r)), o;
    }
    onInputChange_(e) {
      const n = e.currentTarget.value, s = this.parser_(n);
      rt(s) || (this.value.rawValue = this.constrainValue_(s)), this.view.refresh();
    }
    onInputKeyDown_(e) {
      const t = zt(this.props.get("keyScale"), ir(e));
      t !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + t), {
        forceEmit: false,
        last: false
      });
    }
    onInputKeyUp_(e) {
      zt(this.props.get("keyScale"), ir(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
        forceEmit: true,
        last: true
      });
    }
    onPointerDown_() {
      this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
    }
    computeDraggingValue_(e) {
      if (!e.point) return null;
      const t = e.point.x - e.bounds.width / 2;
      return this.constrainValue_(this.originRawValue_ + t * this.props.get("pointerScale"));
    }
    onPointerMove_(e) {
      const t = this.computeDraggingValue_(e.data);
      t !== null && (this.value.setRawValue(t, {
        forceEmit: false,
        last: false
      }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
    }
    onPointerUp_(e) {
      const t = this.computeDraggingValue_(e.data);
      t !== null && (this.value.setRawValue(t, {
        forceEmit: true,
        last: true
      }), this.dragging_.rawValue = null);
    }
  }
  const ga = We("sld");
  class yb {
    constructor(e, t) {
      this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(ga()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("div");
      n.classList.add(ga("t")), t.viewProps.bindTabIndex(n), this.element.appendChild(n), this.trackElement = n;
      const s = e.createElement("div");
      s.classList.add(ga("k")), this.trackElement.appendChild(s), this.knobElement = s, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.update_();
    }
    update_() {
      const e = _t($e(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
      this.knobElement.style.width = `${e}%`;
    }
    onChange_() {
      this.update_();
    }
  }
  class bb {
    constructor(e, t) {
      this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.props = t.props, this.view = new yb(e, {
        props: this.props,
        value: this.value,
        viewProps: this.viewProps
      }), this.ptHandler_ = new Ni(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      e.point && this.value.setRawValue($e(_t(e.point.x, 0, e.bounds.width), 0, e.bounds.width, this.props.get("min"), this.props.get("max")), t);
    }
    onPointerDownOrMove_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: true,
        last: true
      });
    }
    onKeyDown_(e) {
      const t = zt(this.props.get("keyScale"), jn(e));
      t !== 0 && this.value.setRawValue(this.value.rawValue + t, {
        forceEmit: false,
        last: false
      });
    }
    onKeyUp_(e) {
      zt(this.props.get("keyScale"), jn(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
        forceEmit: true,
        last: true
      });
    }
  }
  const va = We("sldtxt");
  class Mb {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(va());
      const n = e.createElement("div");
      n.classList.add(va("s")), this.sliderView_ = t.sliderView, n.appendChild(this.sliderView_.element), this.element.appendChild(n);
      const s = e.createElement("div");
      s.classList.add(va("t")), this.textView_ = t.textView, s.appendChild(this.textView_.element), this.element.appendChild(s);
    }
  }
  class eu {
    constructor(e, t) {
      this.value = t.value, this.viewProps = t.viewProps, this.sliderC_ = new bb(e, {
        props: t.sliderProps,
        value: t.value,
        viewProps: this.viewProps
      }), this.textC_ = new ur(e, {
        parser: t.parser,
        props: t.textProps,
        sliderProps: t.sliderProps,
        value: t.value,
        viewProps: t.viewProps
      }), this.view = new Mb(e, {
        sliderView: this.sliderC_.view,
        textView: this.textC_.view
      });
    }
    get sliderController() {
      return this.sliderC_;
    }
    get textController() {
      return this.textC_;
    }
    importProps(e) {
      return Tn(e, null, (t) => ({
        max: t.required.number,
        min: t.required.number
      }), (t) => {
        const n = this.sliderC_.props;
        return n.set("max", t.max), n.set("min", t.min), true;
      });
    }
    exportProps() {
      const e = this.sliderC_.props;
      return An(null, {
        max: e.get("max"),
        min: e.get("min")
      });
    }
  }
  function Sb(i) {
    return {
      sliderProps: new Ge({
        keyScale: i.keyScale,
        max: i.max,
        min: i.min
      }),
      textProps: new Ge({
        formatter: Et(i.formatter),
        keyScale: i.keyScale,
        pointerScale: Et(i.pointerScale)
      })
    };
  }
  const Eb = {
    containerUnitSize: "cnt-usz"
  };
  function Pd(i) {
    return `--${Eb[i]}`;
  }
  function sr(i) {
    return _d(i);
  }
  function ci(i) {
    if (cl(i)) return It(i, sr);
  }
  function zn(i, e) {
    if (!i) return;
    const t = [], n = pd(i, e);
    n && t.push(n);
    const s = fd(i);
    return s && t.push(s), new hr(t);
  }
  function Ld(i) {
    if (i === "inline" || i === "popup") return i;
  }
  function dr(i, e) {
    i.write(e);
  }
  const Xr = We("ckb");
  class wb {
    constructor(e, t) {
      this.onValueChange_ = this.onValueChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Xr()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("label");
      n.classList.add(Xr("l")), this.element.appendChild(n), this.labelElement = n;
      const s = e.createElement("input");
      s.classList.add(Xr("i")), s.type = "checkbox", this.labelElement.appendChild(s), this.inputElement = s, t.viewProps.bindDisabled(this.inputElement);
      const r = e.createElement("div");
      r.classList.add(Xr("w")), this.labelElement.appendChild(r);
      const o = To(e, "check");
      r.appendChild(o), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
    }
    update_() {
      this.inputElement.checked = this.value.rawValue;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class Tb {
    constructor(e, t) {
      this.onInputChange_ = this.onInputChange_.bind(this), this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new wb(e, {
        value: this.value,
        viewProps: this.viewProps
      }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_);
    }
    onInputChange_(e) {
      const t = e.currentTarget;
      this.value.rawValue = t.checked, e.preventDefault(), e.stopPropagation();
    }
    onLabelMouseDown_(e) {
      e.preventDefault();
    }
  }
  function Ab(i) {
    const e = [], t = ec(i.options);
    return t && e.push(t), new hr(e);
  }
  Bt({
    id: "input-bool",
    type: "input",
    accept: (i, e) => {
      if (typeof i != "boolean") return null;
      const t = It(e, (n) => ({
        options: n.optional.custom(Co),
        readonly: n.optional.constant(false)
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: (i) => Ad,
      constraint: (i) => Ab(i.params),
      writer: (i) => dr
    },
    controller: (i) => {
      const e = i.document, t = i.value, n = i.constraint, s = n && mo(n, Ao);
      return s ? new Es(e, {
        props: new Ge({
          options: s.values.value("options")
        }),
        value: t,
        viewProps: i.viewProps
      }) : new Tb(e, {
        value: t,
        viewProps: i.viewProps
      });
    },
    api(i) {
      return typeof i.controller.value.rawValue != "boolean" ? null : i.controller.valueController instanceof Es ? new Ql(i.controller) : null;
    }
  });
  const Si = We("col");
  class Cb {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(Si()), t.foldable.bindExpandedClass(this.element, Si(void 0, "expanded")), bn(t.foldable, "completed", Ps(this.element, Si(void 0, "cpl")));
      const n = e.createElement("div");
      n.classList.add(Si("h")), this.element.appendChild(n);
      const s = e.createElement("div");
      s.classList.add(Si("s")), n.appendChild(s), this.swatchElement = s;
      const r = e.createElement("div");
      if (r.classList.add(Si("t")), n.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
        const o = e.createElement("div");
        o.classList.add(Si("p")), this.element.appendChild(o), this.pickerElement = o;
      } else this.pickerElement = null;
    }
  }
  function Rb(i, e, t) {
    const n = _t(i / 255, 0, 1), s = _t(e / 255, 0, 1), r = _t(t / 255, 0, 1), o = Math.max(n, s, r), a = Math.min(n, s, r), l = o - a;
    let c = 0, h = 0;
    const u = (a + o) / 2;
    return l !== 0 && (h = l / (1 - Math.abs(o + a - 1)), n === o ? c = (s - r) / l : s === o ? c = 2 + (r - n) / l : c = 4 + (n - s) / l, c = c / 6 + (c < 0 ? 1 : 0)), [
      c * 360,
      h * 100,
      u * 100
    ];
  }
  function Pb(i, e, t) {
    const n = (i % 360 + 360) % 360, s = _t(e / 100, 0, 1), r = _t(t / 100, 0, 1), o = (1 - Math.abs(2 * r - 1)) * s, a = o * (1 - Math.abs(n / 60 % 2 - 1)), l = r - o / 2;
    let c, h, u;
    return n >= 0 && n < 60 ? [c, h, u] = [
      o,
      a,
      0
    ] : n >= 60 && n < 120 ? [c, h, u] = [
      a,
      o,
      0
    ] : n >= 120 && n < 180 ? [c, h, u] = [
      0,
      o,
      a
    ] : n >= 180 && n < 240 ? [c, h, u] = [
      0,
      a,
      o
    ] : n >= 240 && n < 300 ? [c, h, u] = [
      a,
      0,
      o
    ] : [c, h, u] = [
      o,
      0,
      a
    ], [
      (c + l) * 255,
      (h + l) * 255,
      (u + l) * 255
    ];
  }
  function Lb(i, e, t) {
    const n = _t(i / 255, 0, 1), s = _t(e / 255, 0, 1), r = _t(t / 255, 0, 1), o = Math.max(n, s, r), a = Math.min(n, s, r), l = o - a;
    let c;
    l === 0 ? c = 0 : o === n ? c = 60 * (((s - r) / l % 6 + 6) % 6) : o === s ? c = 60 * ((r - n) / l + 2) : c = 60 * ((n - s) / l + 4);
    const h = o === 0 ? 0 : l / o, u = o;
    return [
      c,
      h * 100,
      u * 100
    ];
  }
  function Id(i, e, t) {
    const n = ud(i, 360), s = _t(e / 100, 0, 1), r = _t(t / 100, 0, 1), o = r * s, a = o * (1 - Math.abs(n / 60 % 2 - 1)), l = r - o;
    let c, h, u;
    return n >= 0 && n < 60 ? [c, h, u] = [
      o,
      a,
      0
    ] : n >= 60 && n < 120 ? [c, h, u] = [
      a,
      o,
      0
    ] : n >= 120 && n < 180 ? [c, h, u] = [
      0,
      o,
      a
    ] : n >= 180 && n < 240 ? [c, h, u] = [
      0,
      a,
      o
    ] : n >= 240 && n < 300 ? [c, h, u] = [
      a,
      0,
      o
    ] : [c, h, u] = [
      o,
      0,
      a
    ], [
      (c + l) * 255,
      (h + l) * 255,
      (u + l) * 255
    ];
  }
  function Ib(i, e, t) {
    const n = t + e * (100 - Math.abs(2 * t - 100)) / 200;
    return [
      i,
      n !== 0 ? e * (100 - Math.abs(2 * t - 100)) / n : 0,
      t + e * (100 - Math.abs(2 * t - 100)) / (2 * 100)
    ];
  }
  function Db(i, e, t) {
    const n = 100 - Math.abs(t * (200 - e) / 100 - 100);
    return [
      i,
      n !== 0 ? e * t / n : 0,
      t * (200 - e) / (2 * 100)
    ];
  }
  function Mn(i) {
    return [
      i[0],
      i[1],
      i[2]
    ];
  }
  function Ro(i, e) {
    return [
      i[0],
      i[1],
      i[2],
      e
    ];
  }
  const Nb = {
    hsl: {
      hsl: (i, e, t) => [
        i,
        e,
        t
      ],
      hsv: Ib,
      rgb: Pb
    },
    hsv: {
      hsl: Db,
      hsv: (i, e, t) => [
        i,
        e,
        t
      ],
      rgb: Id
    },
    rgb: {
      hsl: Rb,
      hsv: Lb,
      rgb: (i, e, t) => [
        i,
        e,
        t
      ]
    }
  };
  function ws(i, e) {
    return [
      e === "float" ? 1 : i === "rgb" ? 255 : 360,
      e === "float" ? 1 : i === "rgb" ? 255 : 100,
      e === "float" ? 1 : i === "rgb" ? 255 : 100
    ];
  }
  function Ub(i, e) {
    return i === e ? e : ud(i, e);
  }
  function Dd(i, e, t) {
    var n;
    const s = ws(e, t);
    return [
      e === "rgb" ? _t(i[0], 0, s[0]) : Ub(i[0], s[0]),
      _t(i[1], 0, s[1]),
      _t(i[2], 0, s[2]),
      _t((n = i[3]) !== null && n !== void 0 ? n : 1, 0, 1)
    ];
  }
  function tu(i, e, t, n) {
    const s = ws(e, t), r = ws(e, n);
    return i.map((o, a) => o / s[a] * r[a]);
  }
  function Nd(i, e, t) {
    const n = tu(i, e.mode, e.type, "int"), s = Nb[e.mode][t.mode](...n);
    return tu(s, t.mode, "int", t.type);
  }
  class He {
    static black() {
      return new He([
        0,
        0,
        0
      ], "rgb");
    }
    constructor(e, t) {
      this.type = "int", this.mode = t, this.comps_ = Dd(e, t, this.type);
    }
    getComponents(e) {
      return Ro(Nd(Mn(this.comps_), {
        mode: this.mode,
        type: this.type
      }, {
        mode: e ?? this.mode,
        type: this.type
      }), this.comps_[3]);
    }
    toRgbaObject() {
      const e = this.getComponents("rgb");
      return {
        r: e[0],
        g: e[1],
        b: e[2],
        a: e[3]
      };
    }
  }
  const ti = We("colp");
  class Ob {
    constructor(e, t) {
      this.alphaViews_ = null, this.element = e.createElement("div"), this.element.classList.add(ti()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("div");
      n.classList.add(ti("hsv"));
      const s = e.createElement("div");
      s.classList.add(ti("sv")), this.svPaletteView_ = t.svPaletteView, s.appendChild(this.svPaletteView_.element), n.appendChild(s);
      const r = e.createElement("div");
      r.classList.add(ti("h")), this.hPaletteView_ = t.hPaletteView, r.appendChild(this.hPaletteView_.element), n.appendChild(r), this.element.appendChild(n);
      const o = e.createElement("div");
      if (o.classList.add(ti("rgb")), this.textsView_ = t.textsView, o.appendChild(this.textsView_.element), this.element.appendChild(o), t.alphaViews) {
        this.alphaViews_ = {
          palette: t.alphaViews.palette,
          text: t.alphaViews.text
        };
        const a = e.createElement("div");
        a.classList.add(ti("a"));
        const l = e.createElement("div");
        l.classList.add(ti("ap")), l.appendChild(this.alphaViews_.palette.element), a.appendChild(l);
        const c = e.createElement("div");
        c.classList.add(ti("at")), c.appendChild(this.alphaViews_.text.element), a.appendChild(c), this.element.appendChild(a);
      }
    }
    get allFocusableElements() {
      const e = [
        this.svPaletteView_.element,
        this.hPaletteView_.element,
        this.textsView_.modeSelectElement,
        ...this.textsView_.inputViews.map((t) => t.inputElement)
      ];
      return this.alphaViews_ && e.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), e;
    }
  }
  function Fb(i) {
    return i === "int" ? "int" : i === "float" ? "float" : void 0;
  }
  function nc(i) {
    return It(i, (e) => ({
      color: e.optional.object({
        alpha: e.optional.boolean,
        type: e.optional.custom(Fb)
      }),
      expanded: e.optional.boolean,
      picker: e.optional.custom(Ld),
      readonly: e.optional.constant(false)
    }));
  }
  function Ii(i) {
    return i ? 0.1 : 1;
  }
  function Ud(i) {
    var e;
    return (e = i.color) === null || e === void 0 ? void 0 : e.type;
  }
  class ic {
    constructor(e, t) {
      this.type = "float", this.mode = t, this.comps_ = Dd(e, t, this.type);
    }
    getComponents(e) {
      return Ro(Nd(Mn(this.comps_), {
        mode: this.mode,
        type: this.type
      }, {
        mode: e ?? this.mode,
        type: this.type
      }), this.comps_[3]);
    }
    toRgbaObject() {
      const e = this.getComponents("rgb");
      return {
        r: e[0],
        g: e[1],
        b: e[2],
        a: e[3]
      };
    }
  }
  const Bb = {
    int: (i, e) => new He(i, e),
    float: (i, e) => new ic(i, e)
  };
  function sc(i, e, t) {
    return Bb[t](i, e);
  }
  function kb(i) {
    return i.type === "float";
  }
  function Vb(i) {
    return i.type === "int";
  }
  function zb(i) {
    const e = i.getComponents(), t = ws(i.mode, "int");
    return new He([
      Math.round($e(e[0], 0, 1, 0, t[0])),
      Math.round($e(e[1], 0, 1, 0, t[1])),
      Math.round($e(e[2], 0, 1, 0, t[2])),
      e[3]
    ], i.mode);
  }
  function Hb(i) {
    const e = i.getComponents(), t = ws(i.mode, "int");
    return new ic([
      $e(e[0], 0, t[0], 0, 1),
      $e(e[1], 0, t[1], 0, 1),
      $e(e[2], 0, t[2], 0, 1),
      e[3]
    ], i.mode);
  }
  function Ft(i, e) {
    if (i.type === e) return i;
    if (Vb(i) && e === "float") return Hb(i);
    if (kb(i) && e === "int") return zb(i);
    throw Yt.shouldNeverHappen();
  }
  function Gb(i, e) {
    return i.alpha === e.alpha && i.mode === e.mode && i.notation === e.notation && i.type === e.type;
  }
  function nn(i, e) {
    const t = i.match(/^(.+)%$/);
    return Math.min(t ? parseFloat(t[1]) * 0.01 * e : parseFloat(i), e);
  }
  const Wb = {
    deg: (i) => i,
    grad: (i) => i * 360 / 400,
    rad: (i) => i * 360 / (2 * Math.PI),
    turn: (i) => i * 360
  };
  function Od(i) {
    const e = i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!e) return parseFloat(i);
    const t = parseFloat(e[1]), n = e[2];
    return Wb[n](t);
  }
  function Fd(i) {
    const e = i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!e) return null;
    const t = [
      nn(e[1], 255),
      nn(e[2], 255),
      nn(e[3], 255)
    ];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
  }
  function Xb(i) {
    const e = Fd(i);
    return e ? new He(e, "rgb") : null;
  }
  function Bd(i) {
    const e = i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!e) return null;
    const t = [
      nn(e[1], 255),
      nn(e[2], 255),
      nn(e[3], 255),
      nn(e[4], 1)
    ];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
  }
  function jb(i) {
    const e = Bd(i);
    return e ? new He(e, "rgb") : null;
  }
  function kd(i) {
    const e = i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!e) return null;
    const t = [
      Od(e[1]),
      nn(e[2], 100),
      nn(e[3], 100)
    ];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
  }
  function Kb(i) {
    const e = kd(i);
    return e ? new He(e, "hsl") : null;
  }
  function Vd(i) {
    const e = i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!e) return null;
    const t = [
      Od(e[1]),
      nn(e[2], 100),
      nn(e[3], 100),
      nn(e[4], 1)
    ];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
  }
  function qb(i) {
    const e = Vd(i);
    return e ? new He(e, "hsl") : null;
  }
  function zd(i) {
    const e = i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (e) return [
      parseInt(e[1] + e[1], 16),
      parseInt(e[2] + e[2], 16),
      parseInt(e[3] + e[3], 16)
    ];
    const t = i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    return t ? [
      parseInt(t[1], 16),
      parseInt(t[2], 16),
      parseInt(t[3], 16)
    ] : null;
  }
  function Yb(i) {
    const e = zd(i);
    return e ? new He(e, "rgb") : null;
  }
  function Hd(i) {
    const e = i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (e) return [
      parseInt(e[1] + e[1], 16),
      parseInt(e[2] + e[2], 16),
      parseInt(e[3] + e[3], 16),
      $e(parseInt(e[4] + e[4], 16), 0, 255, 0, 1)
    ];
    const t = i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    return t ? [
      parseInt(t[1], 16),
      parseInt(t[2], 16),
      parseInt(t[3], 16),
      $e(parseInt(t[4], 16), 0, 255, 0, 1)
    ] : null;
  }
  function $b(i) {
    const e = Hd(i);
    return e ? new He(e, "rgb") : null;
  }
  function Gd(i) {
    const e = i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!e) return null;
    const t = [
      parseFloat(e[1]),
      parseFloat(e[2]),
      parseFloat(e[3])
    ];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
  }
  function Zb(i) {
    return (e) => {
      const t = Gd(e);
      return t ? sc(t, "rgb", i) : null;
    };
  }
  function Wd(i) {
    const e = i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!e) return null;
    const t = [
      parseFloat(e[1]),
      parseFloat(e[2]),
      parseFloat(e[3]),
      parseFloat(e[4])
    ];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
  }
  function Jb(i) {
    return (e) => {
      const t = Wd(e);
      return t ? sc(t, "rgb", i) : null;
    };
  }
  const Qb = [
    {
      parser: zd,
      result: {
        alpha: false,
        mode: "rgb",
        notation: "hex"
      }
    },
    {
      parser: Hd,
      result: {
        alpha: true,
        mode: "rgb",
        notation: "hex"
      }
    },
    {
      parser: Fd,
      result: {
        alpha: false,
        mode: "rgb",
        notation: "func"
      }
    },
    {
      parser: Bd,
      result: {
        alpha: true,
        mode: "rgb",
        notation: "func"
      }
    },
    {
      parser: kd,
      result: {
        alpha: false,
        mode: "hsl",
        notation: "func"
      }
    },
    {
      parser: Vd,
      result: {
        alpha: true,
        mode: "hsl",
        notation: "func"
      }
    },
    {
      parser: Gd,
      result: {
        alpha: false,
        mode: "rgb",
        notation: "object"
      }
    },
    {
      parser: Wd,
      result: {
        alpha: true,
        mode: "rgb",
        notation: "object"
      }
    }
  ];
  function eM(i) {
    return Qb.reduce((e, { parser: t, result: n }) => e || (t(i) ? n : null), null);
  }
  function tM(i, e = "int") {
    const t = eM(i);
    return t ? t.notation === "hex" && e !== "float" ? Object.assign(Object.assign({}, t), {
      type: "int"
    }) : t.notation === "func" ? Object.assign(Object.assign({}, t), {
      type: e
    }) : null : null;
  }
  function pr(i) {
    const e = [
      Yb,
      $b,
      Xb,
      jb,
      Kb,
      qb
    ];
    e.push(Zb("int"), Jb("int"));
    const t = _b(e);
    return (n) => {
      const s = t(n);
      return s ? Ft(s, i) : null;
    };
  }
  function nM(i) {
    const e = pr("int");
    if (typeof i != "string") return He.black();
    const t = e(i);
    return t ?? He.black();
  }
  function Xd(i) {
    const e = _t(Math.floor(i), 0, 255).toString(16);
    return e.length === 1 ? `0${e}` : e;
  }
  function rc(i, e = "#") {
    const t = Mn(i.getComponents("rgb")).map(Xd).join("");
    return `${e}${t}`;
  }
  function oc(i, e = "#") {
    const t = i.getComponents("rgb"), n = [
      t[0],
      t[1],
      t[2],
      t[3] * 255
    ].map(Xd).join("");
    return `${e}${n}`;
  }
  function jd(i) {
    const e = Gt(0), t = Ft(i, "int");
    return `rgb(${Mn(t.getComponents("rgb")).map((s) => e(s)).join(", ")})`;
  }
  function eo(i) {
    const e = Gt(2), t = Gt(0);
    return `rgba(${Ft(i, "int").getComponents("rgb").map((r, o) => (o === 3 ? e : t)(r)).join(", ")})`;
  }
  function iM(i) {
    const e = [
      Gt(0),
      _o,
      _o
    ], t = Ft(i, "int");
    return `hsl(${Mn(t.getComponents("hsl")).map((s, r) => e[r](s)).join(", ")})`;
  }
  function sM(i) {
    const e = [
      Gt(0),
      _o,
      _o,
      Gt(2)
    ];
    return `hsla(${Ft(i, "int").getComponents("hsl").map((s, r) => e[r](s)).join(", ")})`;
  }
  function Kd(i, e) {
    const t = Gt(e === "float" ? 2 : 0), n = [
      "r",
      "g",
      "b"
    ], s = Ft(i, e);
    return `{${Mn(s.getComponents("rgb")).map((o, a) => `${n[a]}: ${t(o)}`).join(", ")}}`;
  }
  function rM(i) {
    return (e) => Kd(e, i);
  }
  function qd(i, e) {
    const t = Gt(2), n = Gt(e === "float" ? 2 : 0), s = [
      "r",
      "g",
      "b",
      "a"
    ];
    return `{${Ft(i, e).getComponents("rgb").map((a, l) => {
      const c = l === 3 ? t : n;
      return `${s[l]}: ${c(a)}`;
    }).join(", ")}}`;
  }
  function oM(i) {
    return (e) => qd(e, i);
  }
  const aM = [
    {
      format: {
        alpha: false,
        mode: "rgb",
        notation: "hex",
        type: "int"
      },
      stringifier: rc
    },
    {
      format: {
        alpha: true,
        mode: "rgb",
        notation: "hex",
        type: "int"
      },
      stringifier: oc
    },
    {
      format: {
        alpha: false,
        mode: "rgb",
        notation: "func",
        type: "int"
      },
      stringifier: jd
    },
    {
      format: {
        alpha: true,
        mode: "rgb",
        notation: "func",
        type: "int"
      },
      stringifier: eo
    },
    {
      format: {
        alpha: false,
        mode: "hsl",
        notation: "func",
        type: "int"
      },
      stringifier: iM
    },
    {
      format: {
        alpha: true,
        mode: "hsl",
        notation: "func",
        type: "int"
      },
      stringifier: sM
    },
    ...[
      "int",
      "float"
    ].reduce((i, e) => [
      ...i,
      {
        format: {
          alpha: false,
          mode: "rgb",
          notation: "object",
          type: e
        },
        stringifier: rM(e)
      },
      {
        format: {
          alpha: true,
          mode: "rgb",
          notation: "object",
          type: e
        },
        stringifier: oM(e)
      }
    ], [])
  ];
  function Yd(i) {
    return aM.reduce((e, t) => e || (Gb(t.format, i) ? t.stringifier : null), null);
  }
  const Ws = We("apl");
  class lM {
    constructor(e, t) {
      this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(Ws()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
      const n = e.createElement("div");
      n.classList.add(Ws("b")), this.element.appendChild(n);
      const s = e.createElement("div");
      s.classList.add(Ws("c")), n.appendChild(s), this.colorElem_ = s;
      const r = e.createElement("div");
      r.classList.add(Ws("m")), this.element.appendChild(r), this.markerElem_ = r;
      const o = e.createElement("div");
      o.classList.add(Ws("p")), this.markerElem_.appendChild(o), this.previewElem_ = o, this.update_();
    }
    update_() {
      const e = this.value.rawValue, t = e.getComponents("rgb"), n = new He([
        t[0],
        t[1],
        t[2],
        0
      ], "rgb"), s = new He([
        t[0],
        t[1],
        t[2],
        255
      ], "rgb"), r = [
        "to right",
        eo(n),
        eo(s)
      ];
      this.colorElem_.style.background = `linear-gradient(${r.join(",")})`, this.previewElem_.style.backgroundColor = eo(e);
      const o = $e(t[3], 0, 1, 0, 100);
      this.markerElem_.style.left = `${o}%`;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class cM {
    constructor(e, t) {
      this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new lM(e, {
        value: this.value,
        viewProps: this.viewProps
      }), this.ptHandler_ = new Ni(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const n = e.point.x / e.bounds.width, s = this.value.rawValue, [r, o, a] = s.getComponents("hsv");
      this.value.setRawValue(new He([
        r,
        o,
        a,
        n
      ], "hsv"), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: true,
        last: true
      });
    }
    onKeyDown_(e) {
      const t = zt(Ii(true), jn(e));
      if (t === 0) return;
      const n = this.value.rawValue, [s, r, o, a] = n.getComponents("hsv");
      this.value.setRawValue(new He([
        s,
        r,
        o,
        a + t
      ], "hsv"), {
        forceEmit: false,
        last: false
      });
    }
    onKeyUp_(e) {
      zt(Ii(true), jn(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
        forceEmit: true,
        last: true
      });
    }
  }
  const es = We("coltxt");
  function hM(i) {
    const e = i.createElement("select"), t = [
      {
        text: "RGB",
        value: "rgb"
      },
      {
        text: "HSL",
        value: "hsl"
      },
      {
        text: "HSV",
        value: "hsv"
      },
      {
        text: "HEX",
        value: "hex"
      }
    ];
    return e.appendChild(t.reduce((n, s) => {
      const r = i.createElement("option");
      return r.textContent = s.text, r.value = s.value, n.appendChild(r), n;
    }, i.createDocumentFragment())), e;
  }
  class uM {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(es()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("div");
      n.classList.add(es("m")), this.modeElem_ = hM(e), this.modeElem_.classList.add(es("ms")), n.appendChild(this.modeSelectElement), t.viewProps.bindDisabled(this.modeElem_);
      const s = e.createElement("div");
      s.classList.add(es("mm")), s.appendChild(To(e, "dropdown")), n.appendChild(s), this.element.appendChild(n);
      const r = e.createElement("div");
      r.classList.add(es("w")), this.element.appendChild(r), this.inputsElem_ = r, this.inputViews_ = t.inputViews, this.applyInputViews_(), Gn(t.mode, (o) => {
        this.modeElem_.value = o;
      });
    }
    get modeSelectElement() {
      return this.modeElem_;
    }
    get inputViews() {
      return this.inputViews_;
    }
    set inputViews(e) {
      this.inputViews_ = e, this.applyInputViews_();
    }
    applyInputViews_() {
      xd(this.inputsElem_);
      const e = this.element.ownerDocument;
      this.inputViews_.forEach((t) => {
        const n = e.createElement("div");
        n.classList.add(es("c")), n.appendChild(t.element), this.inputsElem_.appendChild(n);
      });
    }
  }
  function dM(i) {
    return Gt(i === "float" ? 2 : 0);
  }
  function pM(i, e, t) {
    const n = ws(i, e)[t];
    return new Eo({
      min: 0,
      max: n
    });
  }
  function fM(i, e, t) {
    return new ur(i, {
      arrayPosition: t === 0 ? "fst" : t === 2 ? "lst" : "mid",
      parser: e.parser,
      props: Ge.fromObject({
        formatter: dM(e.colorType),
        keyScale: Ii(false),
        pointerScale: e.colorType === "float" ? 0.01 : 1
      }),
      value: Et(0, {
        constraint: pM(e.colorMode, e.colorType, t)
      }),
      viewProps: e.viewProps
    });
  }
  function mM(i, e) {
    const t = {
      colorMode: e.colorMode,
      colorType: e.colorType,
      parser: fi,
      viewProps: e.viewProps
    };
    return [
      0,
      1,
      2
    ].map((n) => {
      const s = fM(i, t, n);
      return Ls({
        primary: e.value,
        secondary: s.value,
        forward(r) {
          return Ft(r, e.colorType).getComponents(e.colorMode)[n];
        },
        backward(r, o) {
          const a = e.colorMode, c = Ft(r, e.colorType).getComponents(a);
          c[n] = o;
          const h = sc(Ro(Mn(c), c[3]), a, e.colorType);
          return Ft(h, "int");
        }
      }), s;
    });
  }
  function _M(i, e) {
    const t = new tc(i, {
      parser: pr("int"),
      props: Ge.fromObject({
        formatter: rc
      }),
      value: Et(He.black()),
      viewProps: e.viewProps
    });
    return Ls({
      primary: e.value,
      secondary: t.value,
      forward: (n) => new He(Mn(n.getComponents()), n.mode),
      backward: (n, s) => new He(Ro(Mn(s.getComponents(n.mode)), n.getComponents()[3]), n.mode)
    }), [
      t
    ];
  }
  function gM(i) {
    return i !== "hex";
  }
  class vM {
    constructor(e, t) {
      this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = t.colorType, this.value = t.value, this.viewProps = t.viewProps, this.colorMode = Et(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(e), this.view = new uM(e, {
        mode: this.colorMode,
        inputViews: [
          this.ccs_[0].view,
          this.ccs_[1].view,
          this.ccs_[2].view
        ],
        viewProps: this.viewProps
      }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
    }
    createComponentControllers_(e) {
      const t = this.colorMode.rawValue;
      return gM(t) ? mM(e, {
        colorMode: t,
        colorType: this.colorType_,
        value: this.value,
        viewProps: this.viewProps
      }) : _M(e, {
        value: this.value,
        viewProps: this.viewProps
      });
    }
    onModeSelectChange_(e) {
      const t = e.currentTarget;
      this.colorMode.rawValue = t.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.inputViews = this.ccs_.map((n) => n.view);
    }
  }
  const xa = We("hpl");
  class xM {
    constructor(e, t) {
      this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(xa()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
      const n = e.createElement("div");
      n.classList.add(xa("c")), this.element.appendChild(n);
      const s = e.createElement("div");
      s.classList.add(xa("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
    }
    update_() {
      const e = this.value.rawValue, [t] = e.getComponents("hsv");
      this.markerElem_.style.backgroundColor = jd(new He([
        t,
        100,
        100
      ], "hsv"));
      const n = $e(t, 0, 360, 0, 100);
      this.markerElem_.style.left = `${n}%`;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class yM {
    constructor(e, t) {
      this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new xM(e, {
        value: this.value,
        viewProps: this.viewProps
      }), this.ptHandler_ = new Ni(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const n = $e(_t(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360), s = this.value.rawValue, [, r, o, a] = s.getComponents("hsv");
      this.value.setRawValue(new He([
        n,
        r,
        o,
        a
      ], "hsv"), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: true,
        last: true
      });
    }
    onKeyDown_(e) {
      const t = zt(Ii(false), jn(e));
      if (t === 0) return;
      const n = this.value.rawValue, [s, r, o, a] = n.getComponents("hsv");
      this.value.setRawValue(new He([
        s + t,
        r,
        o,
        a
      ], "hsv"), {
        forceEmit: false,
        last: false
      });
    }
    onKeyUp_(e) {
      zt(Ii(false), jn(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
        forceEmit: true,
        last: true
      });
    }
  }
  const ya = We("svp"), nu = 64;
  class bM {
    constructor(e, t) {
      this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(ya()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
      const n = e.createElement("canvas");
      n.height = nu, n.width = nu, n.classList.add(ya("c")), this.element.appendChild(n), this.canvasElement = n;
      const s = e.createElement("div");
      s.classList.add(ya("m")), this.element.appendChild(s), this.markerElem_ = s, this.update_();
    }
    update_() {
      const e = Iy(this.canvasElement);
      if (!e) return;
      const n = this.value.rawValue.getComponents("hsv"), s = this.canvasElement.width, r = this.canvasElement.height, o = e.getImageData(0, 0, s, r), a = o.data;
      for (let h = 0; h < r; h++) for (let u = 0; u < s; u++) {
        const d = $e(u, 0, s, 0, 100), p = $e(h, 0, r, 100, 0), _ = Id(n[0], d, p), g = (h * s + u) * 4;
        a[g] = _[0], a[g + 1] = _[1], a[g + 2] = _[2], a[g + 3] = 255;
      }
      e.putImageData(o, 0, 0);
      const l = $e(n[1], 0, 100, 0, 100);
      this.markerElem_.style.left = `${l}%`;
      const c = $e(n[2], 0, 100, 100, 0);
      this.markerElem_.style.top = `${c}%`;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class MM {
    constructor(e, t) {
      this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new bM(e, {
        value: this.value,
        viewProps: this.viewProps
      }), this.ptHandler_ = new Ni(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const n = $e(e.point.x, 0, e.bounds.width, 0, 100), s = $e(e.point.y, 0, e.bounds.height, 100, 0), [r, , , o] = this.value.rawValue.getComponents("hsv");
      this.value.setRawValue(new He([
        r,
        n,
        s,
        o
      ], "hsv"), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: true,
        last: true
      });
    }
    onKeyDown_(e) {
      Rd(e.key) && e.preventDefault();
      const [t, n, s, r] = this.value.rawValue.getComponents("hsv"), o = Ii(false), a = zt(o, jn(e)), l = zt(o, ir(e));
      a === 0 && l === 0 || this.value.setRawValue(new He([
        t,
        n + a,
        s + l,
        r
      ], "hsv"), {
        forceEmit: false,
        last: false
      });
    }
    onKeyUp_(e) {
      const t = Ii(false), n = zt(t, jn(e)), s = zt(t, ir(e));
      n === 0 && s === 0 || this.value.setRawValue(this.value.rawValue, {
        forceEmit: true,
        last: true
      });
    }
  }
  class SM {
    constructor(e, t) {
      this.value = t.value, this.viewProps = t.viewProps, this.hPaletteC_ = new yM(e, {
        value: this.value,
        viewProps: this.viewProps
      }), this.svPaletteC_ = new MM(e, {
        value: this.value,
        viewProps: this.viewProps
      }), this.alphaIcs_ = t.supportsAlpha ? {
        palette: new cM(e, {
          value: this.value,
          viewProps: this.viewProps
        }),
        text: new ur(e, {
          parser: fi,
          props: Ge.fromObject({
            pointerScale: 0.01,
            keyScale: 0.1,
            formatter: Gt(2)
          }),
          value: Et(0, {
            constraint: new Eo({
              min: 0,
              max: 1
            })
          }),
          viewProps: this.viewProps
        })
      } : null, this.alphaIcs_ && Ls({
        primary: this.value,
        secondary: this.alphaIcs_.text.value,
        forward: (n) => n.getComponents()[3],
        backward: (n, s) => {
          const r = n.getComponents();
          return r[3] = s, new He(r, n.mode);
        }
      }), this.textsC_ = new vM(e, {
        colorType: t.colorType,
        value: this.value,
        viewProps: this.viewProps
      }), this.view = new Ob(e, {
        alphaViews: this.alphaIcs_ ? {
          palette: this.alphaIcs_.palette.view,
          text: this.alphaIcs_.text.view
        } : null,
        hPaletteView: this.hPaletteC_.view,
        supportsAlpha: t.supportsAlpha,
        svPaletteView: this.svPaletteC_.view,
        textsView: this.textsC_.view,
        viewProps: this.viewProps
      });
    }
    get textsController() {
      return this.textsC_;
    }
  }
  const ba = We("colsw");
  class EM {
    constructor(e, t) {
      this.onValueChange_ = this.onValueChange_.bind(this), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.element = e.createElement("div"), this.element.classList.add(ba()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("div");
      n.classList.add(ba("sw")), this.element.appendChild(n), this.swatchElem_ = n;
      const s = e.createElement("button");
      s.classList.add(ba("b")), t.viewProps.bindDisabled(s), this.element.appendChild(s), this.buttonElement = s, this.update_();
    }
    update_() {
      const e = this.value.rawValue;
      this.swatchElem_.style.backgroundColor = oc(e);
    }
    onValueChange_() {
      this.update_();
    }
  }
  class wM {
    constructor(e, t) {
      this.value = t.value, this.viewProps = t.viewProps, this.view = new EM(e, {
        value: this.value,
        viewProps: this.viewProps
      });
    }
  }
  class ac {
    constructor(e, t) {
      this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = lr.create(t.expanded), this.swatchC_ = new wM(e, {
        value: this.value,
        viewProps: this.viewProps
      });
      const n = this.swatchC_.view.buttonElement;
      n.addEventListener("blur", this.onButtonBlur_), n.addEventListener("click", this.onButtonClick_), this.textC_ = new tc(e, {
        parser: t.parser,
        props: Ge.fromObject({
          formatter: t.formatter
        }),
        value: this.value,
        viewProps: this.viewProps
      }), this.view = new Cb(e, {
        foldable: this.foldable_,
        pickerLayout: t.pickerLayout
      }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = t.pickerLayout === "popup" ? new Td(e, {
        viewProps: this.viewProps
      }) : null;
      const s = new SM(e, {
        colorType: t.colorType,
        supportsAlpha: t.supportsAlpha,
        value: this.value,
        viewProps: this.viewProps
      });
      s.view.allFocusableElements.forEach((r) => {
        r.addEventListener("blur", this.onPopupChildBlur_), r.addEventListener("keydown", this.onPopupChildKeydown_);
      }), this.pickerC_ = s, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(s.view.element), Ls({
        primary: this.foldable_.value("expanded"),
        secondary: this.popC_.shows,
        forward: (r) => r,
        backward: (r, o) => o
      })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Jl(this.foldable_, this.view.pickerElement));
    }
    get textController() {
      return this.textC_;
    }
    onButtonBlur_(e) {
      if (!this.popC_) return;
      const t = this.view.element, n = e.relatedTarget;
      (!n || !t.contains(n)) && (this.popC_.shows.rawValue = false);
    }
    onButtonClick_() {
      this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(e) {
      if (!this.popC_) return;
      const t = this.popC_.view.element, n = yd(e);
      n && t.contains(n) || n && n === this.swatchC_.view.buttonElement && !jl(t.ownerDocument) || (this.popC_.shows.rawValue = false);
    }
    onPopupChildKeydown_(e) {
      this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.swatchC_.view.buttonElement.focus();
    }
  }
  function TM(i) {
    return Mn(i.getComponents("rgb")).reduce((e, t) => e << 8 | Math.floor(t) & 255, 0);
  }
  function AM(i) {
    return i.getComponents("rgb").reduce((e, t, n) => {
      const s = Math.floor(n === 3 ? t * 255 : t) & 255;
      return e << 8 | s;
    }, 0) >>> 0;
  }
  function CM(i) {
    return new He([
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255
    ], "rgb");
  }
  function RM(i) {
    return new He([
      i >> 24 & 255,
      i >> 16 & 255,
      i >> 8 & 255,
      $e(i & 255, 0, 255, 0, 1)
    ], "rgb");
  }
  function PM(i) {
    return typeof i != "number" ? He.black() : CM(i);
  }
  function LM(i) {
    return typeof i != "number" ? He.black() : RM(i);
  }
  function to(i, e) {
    return typeof i != "object" || rt(i) ? false : e in i && typeof i[e] == "number";
  }
  function $d(i) {
    return to(i, "r") && to(i, "g") && to(i, "b");
  }
  function Zd(i) {
    return $d(i) && to(i, "a");
  }
  function Jd(i) {
    return $d(i);
  }
  function lc(i, e) {
    if (i.mode !== e.mode || i.type !== e.type) return false;
    const t = i.getComponents(), n = e.getComponents();
    for (let s = 0; s < t.length; s++) if (t[s] !== n[s]) return false;
    return true;
  }
  function iu(i) {
    return "a" in i ? [
      i.r,
      i.g,
      i.b,
      i.a
    ] : [
      i.r,
      i.g,
      i.b
    ];
  }
  function IM(i) {
    const e = Yd(i);
    return e ? (t, n) => {
      dr(t, e(n));
    } : null;
  }
  function DM(i) {
    const e = i ? AM : TM;
    return (t, n) => {
      dr(t, e(n));
    };
  }
  function NM(i, e, t) {
    const s = Ft(e, t).toRgbaObject();
    i.writeProperty("r", s.r), i.writeProperty("g", s.g), i.writeProperty("b", s.b), i.writeProperty("a", s.a);
  }
  function UM(i, e, t) {
    const s = Ft(e, t).toRgbaObject();
    i.writeProperty("r", s.r), i.writeProperty("g", s.g), i.writeProperty("b", s.b);
  }
  function OM(i, e) {
    return (t, n) => {
      i ? NM(t, n, e) : UM(t, n, e);
    };
  }
  function FM(i) {
    var e;
    return !!(!((e = i == null ? void 0 : i.color) === null || e === void 0) && e.alpha);
  }
  function BM(i) {
    return i ? (e) => oc(e, "0x") : (e) => rc(e, "0x");
  }
  function kM(i) {
    return "color" in i || i.view === "color";
  }
  Bt({
    id: "input-color-number",
    type: "input",
    accept: (i, e) => {
      if (typeof i != "number" || !kM(e)) return null;
      const t = nc(e);
      return t ? {
        initialValue: i,
        params: Object.assign(Object.assign({}, t), {
          supportsAlpha: FM(e)
        })
      } : null;
    },
    binding: {
      reader: (i) => i.params.supportsAlpha ? LM : PM,
      equals: lc,
      writer: (i) => DM(i.params.supportsAlpha)
    },
    controller: (i) => {
      var e, t;
      return new ac(i.document, {
        colorType: "int",
        expanded: (e = i.params.expanded) !== null && e !== void 0 ? e : false,
        formatter: BM(i.params.supportsAlpha),
        parser: pr("int"),
        pickerLayout: (t = i.params.picker) !== null && t !== void 0 ? t : "popup",
        supportsAlpha: i.params.supportsAlpha,
        value: i.value,
        viewProps: i.viewProps
      });
    }
  });
  function VM(i, e) {
    if (!Jd(i)) return Ft(He.black(), e);
    if (e === "int") {
      const t = iu(i);
      return new He(t, "rgb");
    }
    if (e === "float") {
      const t = iu(i);
      return new ic(t, "rgb");
    }
    return Ft(He.black(), "int");
  }
  function zM(i) {
    return Zd(i);
  }
  function HM(i) {
    return (e) => {
      const t = VM(e, i);
      return Ft(t, "int");
    };
  }
  function GM(i, e) {
    return (t) => i ? qd(t, e) : Kd(t, e);
  }
  Bt({
    id: "input-color-object",
    type: "input",
    accept: (i, e) => {
      var t;
      if (!Jd(i)) return null;
      const n = nc(e);
      return n ? {
        initialValue: i,
        params: Object.assign(Object.assign({}, n), {
          colorType: (t = Ud(e)) !== null && t !== void 0 ? t : "int"
        })
      } : null;
    },
    binding: {
      reader: (i) => HM(i.params.colorType),
      equals: lc,
      writer: (i) => OM(zM(i.initialValue), i.params.colorType)
    },
    controller: (i) => {
      var e, t;
      const n = Zd(i.initialValue);
      return new ac(i.document, {
        colorType: i.params.colorType,
        expanded: (e = i.params.expanded) !== null && e !== void 0 ? e : false,
        formatter: GM(n, i.params.colorType),
        parser: pr("int"),
        pickerLayout: (t = i.params.picker) !== null && t !== void 0 ? t : "popup",
        supportsAlpha: n,
        value: i.value,
        viewProps: i.viewProps
      });
    }
  });
  Bt({
    id: "input-color-string",
    type: "input",
    accept: (i, e) => {
      if (typeof i != "string" || e.view === "text") return null;
      const t = tM(i, Ud(e));
      if (!t) return null;
      const n = Yd(t);
      if (!n) return null;
      const s = nc(e);
      return s ? {
        initialValue: i,
        params: Object.assign(Object.assign({}, s), {
          format: t,
          stringifier: n
        })
      } : null;
    },
    binding: {
      reader: () => nM,
      equals: lc,
      writer: (i) => {
        const e = IM(i.params.format);
        if (!e) throw Yt.notBindable();
        return e;
      }
    },
    controller: (i) => {
      var e, t;
      return new ac(i.document, {
        colorType: i.params.format.type,
        expanded: (e = i.params.expanded) !== null && e !== void 0 ? e : false,
        formatter: i.params.stringifier,
        parser: pr("int"),
        pickerLayout: (t = i.params.picker) !== null && t !== void 0 ? t : "popup",
        supportsAlpha: i.params.format.alpha,
        value: i.value,
        viewProps: i.viewProps
      });
    }
  });
  class cc {
    constructor(e) {
      this.components = e.components, this.asm_ = e.assembly;
    }
    constrain(e) {
      const t = this.asm_.toComponents(e).map((n, s) => {
        var r, o;
        return (o = (r = this.components[s]) === null || r === void 0 ? void 0 : r.constrain(n)) !== null && o !== void 0 ? o : n;
      });
      return this.asm_.fromComponents(t);
    }
  }
  const su = We("pndtxt");
  class WM {
    constructor(e, t) {
      this.textViews = t.textViews, this.element = e.createElement("div"), this.element.classList.add(su()), this.textViews.forEach((n) => {
        const s = e.createElement("div");
        s.classList.add(su("a")), s.appendChild(n.element), this.element.appendChild(s);
      });
    }
  }
  function XM(i, e, t) {
    return new ur(i, {
      arrayPosition: t === 0 ? "fst" : t === e.axes.length - 1 ? "lst" : "mid",
      parser: e.parser,
      props: e.axes[t].textProps,
      value: Et(0, {
        constraint: e.axes[t].constraint
      }),
      viewProps: e.viewProps
    });
  }
  class hc {
    constructor(e, t) {
      this.value = t.value, this.viewProps = t.viewProps, this.acs_ = t.axes.map((n, s) => XM(e, t, s)), this.acs_.forEach((n, s) => {
        Ls({
          primary: this.value,
          secondary: n.value,
          forward: (r) => t.assembly.toComponents(r)[s],
          backward: (r, o) => {
            const a = t.assembly.toComponents(r);
            return a[s] = o, t.assembly.fromComponents(a);
          }
        });
      }), this.view = new WM(e, {
        textViews: this.acs_.map((n) => n.view)
      });
    }
    get textControllers() {
      return this.acs_;
    }
  }
  class jM extends Xl {
    get max() {
      return this.controller.valueController.sliderController.props.get("max");
    }
    set max(e) {
      this.controller.valueController.sliderController.props.set("max", e);
    }
    get min() {
      return this.controller.valueController.sliderController.props.get("min");
    }
    set min(e) {
      this.controller.valueController.sliderController.props.set("min", e);
    }
  }
  function KM(i, e) {
    const t = [], n = pd(i, e);
    n && t.push(n);
    const s = fd(i);
    s && t.push(s);
    const r = ec(i.options);
    return r && t.push(r), new hr(t);
  }
  Bt({
    id: "input-number",
    type: "input",
    accept: (i, e) => {
      if (typeof i != "number") return null;
      const t = It(e, (n) => Object.assign(Object.assign({}, _d(n)), {
        options: n.optional.custom(Co),
        readonly: n.optional.constant(false)
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: (i) => hd,
      constraint: (i) => KM(i.params, i.initialValue),
      writer: (i) => dr
    },
    controller: (i) => {
      const e = i.value, t = i.constraint, n = t && mo(t, Ao);
      if (n) return new Es(i.document, {
        props: new Ge({
          options: n.values.value("options")
        }),
        value: e,
        viewProps: i.viewProps
      });
      const s = md(i.params, e.rawValue), r = t && mo(t, Eo);
      return r ? new eu(i.document, Object.assign(Object.assign({}, Sb(Object.assign(Object.assign({}, s), {
        keyScale: Et(s.keyScale),
        max: r.values.value("max"),
        min: r.values.value("min")
      }))), {
        parser: fi,
        value: e,
        viewProps: i.viewProps
      })) : new ur(i.document, {
        parser: fi,
        props: Ge.fromObject(s),
        value: e,
        viewProps: i.viewProps
      });
    },
    api(i) {
      return typeof i.controller.value.rawValue != "number" ? null : i.controller.valueController instanceof eu ? new jM(i.controller) : i.controller.valueController instanceof Es ? new Ql(i.controller) : null;
    }
  });
  class di {
    constructor(e = 0, t = 0) {
      this.x = e, this.y = t;
    }
    getComponents() {
      return [
        this.x,
        this.y
      ];
    }
    static isObject(e) {
      if (rt(e)) return false;
      const t = e.x, n = e.y;
      return !(typeof t != "number" || typeof n != "number");
    }
    static equals(e, t) {
      return e.x === t.x && e.y === t.y;
    }
    toObject() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }
  const Qd = {
    toComponents: (i) => i.getComponents(),
    fromComponents: (i) => new di(...i)
  }, ts = We("p2d");
  class qM {
    constructor(e, t) {
      this.element = e.createElement("div"), this.element.classList.add(ts()), t.viewProps.bindClassModifiers(this.element), Gn(t.expanded, Ps(this.element, ts(void 0, "expanded")));
      const n = e.createElement("div");
      n.classList.add(ts("h")), this.element.appendChild(n);
      const s = e.createElement("button");
      s.classList.add(ts("b")), s.appendChild(To(e, "p2dpad")), t.viewProps.bindDisabled(s), n.appendChild(s), this.buttonElement = s;
      const r = e.createElement("div");
      if (r.classList.add(ts("t")), n.appendChild(r), this.textElement = r, t.pickerLayout === "inline") {
        const o = e.createElement("div");
        o.classList.add(ts("p")), this.element.appendChild(o), this.pickerElement = o;
      } else this.pickerElement = null;
    }
  }
  const ni = We("p2dp");
  class YM {
    constructor(e, t) {
      this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onPropsChange_ = this.onPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onPropsChange_), this.element = e.createElement("div"), this.element.classList.add(ni()), t.layout === "popup" && this.element.classList.add(ni(void 0, "p")), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("div");
      n.classList.add(ni("p")), t.viewProps.bindTabIndex(n), this.element.appendChild(n), this.padElement = n;
      const s = e.createElementNS(vn, "svg");
      s.classList.add(ni("g")), this.padElement.appendChild(s), this.svgElem_ = s;
      const r = e.createElementNS(vn, "line");
      r.classList.add(ni("ax")), r.setAttributeNS(null, "x1", "0"), r.setAttributeNS(null, "y1", "50%"), r.setAttributeNS(null, "x2", "100%"), r.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(r);
      const o = e.createElementNS(vn, "line");
      o.classList.add(ni("ax")), o.setAttributeNS(null, "x1", "50%"), o.setAttributeNS(null, "y1", "0"), o.setAttributeNS(null, "x2", "50%"), o.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(o);
      const a = e.createElementNS(vn, "line");
      a.classList.add(ni("l")), a.setAttributeNS(null, "x1", "50%"), a.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(a), this.lineElem_ = a;
      const l = e.createElement("div");
      l.classList.add(ni("m")), this.padElement.appendChild(l), this.markerElem_ = l, t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
    }
    get allFocusableElements() {
      return [
        this.padElement
      ];
    }
    update_() {
      const [e, t] = this.value.rawValue.getComponents(), n = this.props_.get("max"), s = $e(e, -n, +n, 0, 100), r = $e(t, -n, +n, 0, 100), o = this.props_.get("invertsY") ? 100 - r : r;
      this.lineElem_.setAttributeNS(null, "x2", `${s}%`), this.lineElem_.setAttributeNS(null, "y2", `${o}%`), this.markerElem_.style.left = `${s}%`, this.markerElem_.style.top = `${o}%`;
    }
    onValueChange_() {
      this.update_();
    }
    onPropsChange_() {
      this.update_();
    }
    onFoldableChange_() {
      this.update_();
    }
  }
  function ru(i, e, t) {
    return [
      zt(e[0], jn(i)),
      zt(e[1], ir(i)) * (t ? 1 : -1)
    ];
  }
  class $M {
    constructor(e, t) {
      this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new YM(e, {
        layout: t.layout,
        props: this.props,
        value: this.value,
        viewProps: this.viewProps
      }), this.ptHandler_ = new Ni(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const n = this.props.get("max"), s = $e(e.point.x, 0, e.bounds.width, -n, +n), r = $e(this.props.get("invertsY") ? e.bounds.height - e.point.y : e.point.y, 0, e.bounds.height, -n, +n);
      this.value.setRawValue(new di(s, r), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: false,
        last: false
      });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, {
        forceEmit: true,
        last: true
      });
    }
    onPadKeyDown_(e) {
      Rd(e.key) && e.preventDefault();
      const [t, n] = ru(e, [
        this.props.get("xKeyScale"),
        this.props.get("yKeyScale")
      ], this.props.get("invertsY"));
      t === 0 && n === 0 || this.value.setRawValue(new di(this.value.rawValue.x + t, this.value.rawValue.y + n), {
        forceEmit: false,
        last: false
      });
    }
    onPadKeyUp_(e) {
      const [t, n] = ru(e, [
        this.props.get("xKeyScale"),
        this.props.get("yKeyScale")
      ], this.props.get("invertsY"));
      t === 0 && n === 0 || this.value.setRawValue(this.value.rawValue, {
        forceEmit: true,
        last: true
      });
    }
  }
  class ZM {
    constructor(e, t) {
      var n, s;
      this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = lr.create(t.expanded), this.popC_ = t.pickerLayout === "popup" ? new Td(e, {
        viewProps: this.viewProps
      }) : null;
      const r = new $M(e, {
        layout: t.pickerLayout,
        props: new Ge({
          invertsY: Et(t.invertsY),
          max: Et(t.max),
          xKeyScale: t.axes[0].textProps.value("keyScale"),
          yKeyScale: t.axes[1].textProps.value("keyScale")
        }),
        value: this.value,
        viewProps: this.viewProps
      });
      r.view.allFocusableElements.forEach((o) => {
        o.addEventListener("blur", this.onPopupChildBlur_), o.addEventListener("keydown", this.onPopupChildKeydown_);
      }), this.pickerC_ = r, this.textC_ = new hc(e, {
        assembly: Qd,
        axes: t.axes,
        parser: t.parser,
        value: this.value,
        viewProps: this.viewProps
      }), this.view = new qM(e, {
        expanded: this.foldable_.value("expanded"),
        pickerLayout: t.pickerLayout,
        viewProps: this.viewProps
      }), this.view.textElement.appendChild(this.textC_.view.element), (n = this.view.buttonElement) === null || n === void 0 || n.addEventListener("blur", this.onPadButtonBlur_), (s = this.view.buttonElement) === null || s === void 0 || s.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), Ls({
        primary: this.foldable_.value("expanded"),
        secondary: this.popC_.shows,
        forward: (o) => o,
        backward: (o, a) => a
      })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Jl(this.foldable_, this.view.pickerElement));
    }
    get textController() {
      return this.textC_;
    }
    onPadButtonBlur_(e) {
      if (!this.popC_) return;
      const t = this.view.element, n = e.relatedTarget;
      (!n || !t.contains(n)) && (this.popC_.shows.rawValue = false);
    }
    onPadButtonClick_() {
      this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(e) {
      if (!this.popC_) return;
      const t = this.popC_.view.element, n = yd(e);
      n && t.contains(n) || n && n === this.view.buttonElement && !jl(t.ownerDocument) || (this.popC_.shows.rawValue = false);
    }
    onPopupChildKeydown_(e) {
      this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.view.buttonElement.focus();
    }
  }
  function JM(i) {
    return di.isObject(i) ? new di(i.x, i.y) : new di();
  }
  function QM(i, e) {
    i.writeProperty("x", e.x), i.writeProperty("y", e.y);
  }
  function eS(i, e) {
    return new cc({
      assembly: Qd,
      components: [
        zn(Object.assign(Object.assign({}, i), i.x), e.x),
        zn(Object.assign(Object.assign({}, i), i.y), e.y)
      ]
    });
  }
  function ou(i, e) {
    var t, n;
    if (!rt(i.min) || !rt(i.max)) return Math.max(Math.abs((t = i.min) !== null && t !== void 0 ? t : 0), Math.abs((n = i.max) !== null && n !== void 0 ? n : 0));
    const s = dd(i);
    return Math.max(Math.abs(s) * 10, Math.abs(e) * 10);
  }
  function tS(i, e) {
    var t, n;
    const s = ou(Li(i, (t = i.x) !== null && t !== void 0 ? t : {}), e.x), r = ou(Li(i, (n = i.y) !== null && n !== void 0 ? n : {}), e.y);
    return Math.max(s, r);
  }
  function nS(i) {
    if (!("y" in i)) return false;
    const e = i.y;
    return e && "inverted" in e ? !!e.inverted : false;
  }
  Bt({
    id: "input-point2d",
    type: "input",
    accept: (i, e) => {
      if (!di.isObject(i)) return null;
      const t = It(e, (n) => Object.assign(Object.assign({}, sr(n)), {
        expanded: n.optional.boolean,
        picker: n.optional.custom(Ld),
        readonly: n.optional.constant(false),
        x: n.optional.custom(ci),
        y: n.optional.object(Object.assign(Object.assign({}, sr(n)), {
          inverted: n.optional.boolean
        }))
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: () => JM,
      constraint: (i) => eS(i.params, i.initialValue),
      equals: di.equals,
      writer: () => QM
    },
    controller: (i) => {
      var e, t;
      const n = i.document, s = i.value, r = i.constraint, o = [
        i.params.x,
        i.params.y
      ];
      return new ZM(n, {
        axes: s.rawValue.getComponents().map((a, l) => {
          var c;
          return Gl({
            constraint: r.components[l],
            initialValue: a,
            params: Li(i.params, (c = o[l]) !== null && c !== void 0 ? c : {})
          });
        }),
        expanded: (e = i.params.expanded) !== null && e !== void 0 ? e : false,
        invertsY: nS(i.params),
        max: tS(i.params, s.rawValue),
        parser: fi,
        pickerLayout: (t = i.params.picker) !== null && t !== void 0 ? t : "popup",
        value: s,
        viewProps: i.viewProps
      });
    }
  });
  class us {
    constructor(e = 0, t = 0, n = 0) {
      this.x = e, this.y = t, this.z = n;
    }
    getComponents() {
      return [
        this.x,
        this.y,
        this.z
      ];
    }
    static isObject(e) {
      if (rt(e)) return false;
      const t = e.x, n = e.y, s = e.z;
      return !(typeof t != "number" || typeof n != "number" || typeof s != "number");
    }
    static equals(e, t) {
      return e.x === t.x && e.y === t.y && e.z === t.z;
    }
    toObject() {
      return {
        x: this.x,
        y: this.y,
        z: this.z
      };
    }
  }
  const ep = {
    toComponents: (i) => i.getComponents(),
    fromComponents: (i) => new us(...i)
  };
  function iS(i) {
    return us.isObject(i) ? new us(i.x, i.y, i.z) : new us();
  }
  function sS(i, e) {
    i.writeProperty("x", e.x), i.writeProperty("y", e.y), i.writeProperty("z", e.z);
  }
  function rS(i, e) {
    return new cc({
      assembly: ep,
      components: [
        zn(Object.assign(Object.assign({}, i), i.x), e.x),
        zn(Object.assign(Object.assign({}, i), i.y), e.y),
        zn(Object.assign(Object.assign({}, i), i.z), e.z)
      ]
    });
  }
  Bt({
    id: "input-point3d",
    type: "input",
    accept: (i, e) => {
      if (!us.isObject(i)) return null;
      const t = It(e, (n) => Object.assign(Object.assign({}, sr(n)), {
        readonly: n.optional.constant(false),
        x: n.optional.custom(ci),
        y: n.optional.custom(ci),
        z: n.optional.custom(ci)
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: (i) => iS,
      constraint: (i) => rS(i.params, i.initialValue),
      equals: us.equals,
      writer: (i) => sS
    },
    controller: (i) => {
      const e = i.value, t = i.constraint, n = [
        i.params.x,
        i.params.y,
        i.params.z
      ];
      return new hc(i.document, {
        assembly: ep,
        axes: e.rawValue.getComponents().map((s, r) => {
          var o;
          return Gl({
            constraint: t.components[r],
            initialValue: s,
            params: Li(i.params, (o = n[r]) !== null && o !== void 0 ? o : {})
          });
        }),
        parser: fi,
        value: e,
        viewProps: i.viewProps
      });
    }
  });
  class ds {
    constructor(e = 0, t = 0, n = 0, s = 0) {
      this.x = e, this.y = t, this.z = n, this.w = s;
    }
    getComponents() {
      return [
        this.x,
        this.y,
        this.z,
        this.w
      ];
    }
    static isObject(e) {
      if (rt(e)) return false;
      const t = e.x, n = e.y, s = e.z, r = e.w;
      return !(typeof t != "number" || typeof n != "number" || typeof s != "number" || typeof r != "number");
    }
    static equals(e, t) {
      return e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w;
    }
    toObject() {
      return {
        x: this.x,
        y: this.y,
        z: this.z,
        w: this.w
      };
    }
  }
  const tp = {
    toComponents: (i) => i.getComponents(),
    fromComponents: (i) => new ds(...i)
  };
  function oS(i) {
    return ds.isObject(i) ? new ds(i.x, i.y, i.z, i.w) : new ds();
  }
  function aS(i, e) {
    i.writeProperty("x", e.x), i.writeProperty("y", e.y), i.writeProperty("z", e.z), i.writeProperty("w", e.w);
  }
  function lS(i, e) {
    return new cc({
      assembly: tp,
      components: [
        zn(Object.assign(Object.assign({}, i), i.x), e.x),
        zn(Object.assign(Object.assign({}, i), i.y), e.y),
        zn(Object.assign(Object.assign({}, i), i.z), e.z),
        zn(Object.assign(Object.assign({}, i), i.w), e.w)
      ]
    });
  }
  Bt({
    id: "input-point4d",
    type: "input",
    accept: (i, e) => {
      if (!ds.isObject(i)) return null;
      const t = It(e, (n) => Object.assign(Object.assign({}, sr(n)), {
        readonly: n.optional.constant(false),
        w: n.optional.custom(ci),
        x: n.optional.custom(ci),
        y: n.optional.custom(ci),
        z: n.optional.custom(ci)
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: (i) => oS,
      constraint: (i) => lS(i.params, i.initialValue),
      equals: ds.equals,
      writer: (i) => aS
    },
    controller: (i) => {
      const e = i.value, t = i.constraint, n = [
        i.params.x,
        i.params.y,
        i.params.z,
        i.params.w
      ];
      return new hc(i.document, {
        assembly: tp,
        axes: e.rawValue.getComponents().map((s, r) => {
          var o;
          return Gl({
            constraint: t.components[r],
            initialValue: s,
            params: Li(i.params, (o = n[r]) !== null && o !== void 0 ? o : {})
          });
        }),
        parser: fi,
        value: e,
        viewProps: i.viewProps
      });
    }
  });
  function cS(i) {
    const e = [], t = ec(i.options);
    return t && e.push(t), new hr(e);
  }
  Bt({
    id: "input-string",
    type: "input",
    accept: (i, e) => {
      if (typeof i != "string") return null;
      const t = It(e, (n) => ({
        readonly: n.optional.constant(false),
        options: n.optional.custom(Co)
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: (i) => Cd,
      constraint: (i) => cS(i.params),
      writer: (i) => dr
    },
    controller: (i) => {
      const e = i.document, t = i.value, n = i.constraint, s = n && mo(n, Ao);
      return s ? new Es(e, {
        props: new Ge({
          options: s.values.value("options")
        }),
        value: t,
        viewProps: i.viewProps
      }) : new tc(e, {
        parser: (r) => r,
        props: Ge.fromObject({
          formatter: pl
        }),
        value: t,
        viewProps: i.viewProps
      });
    },
    api(i) {
      return typeof i.controller.value.rawValue != "string" ? null : i.controller.valueController instanceof Es ? new Ql(i.controller) : null;
    }
  });
  const Po = {
    monitor: {
      defaultRows: 3
    }
  }, au = We("mll");
  class hS {
    constructor(e, t) {
      this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(au()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("textarea");
      n.classList.add(au("i")), n.style.height = `calc(var(${Pd("containerUnitSize")}) * ${t.rows})`, n.readOnly = true, t.viewProps.bindDisabled(n), this.element.appendChild(n), this.textareaElem_ = n, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
    }
    update_() {
      const e = this.textareaElem_, t = e.scrollTop === e.scrollHeight - e.clientHeight, n = [];
      this.value.rawValue.forEach((s) => {
        s !== void 0 && n.push(this.formatter_(s));
      }), e.textContent = n.join(`
`), t && (e.scrollTop = e.scrollHeight);
    }
    onValueUpdate_() {
      this.update_();
    }
  }
  class uc {
    constructor(e, t) {
      this.value = t.value, this.viewProps = t.viewProps, this.view = new hS(e, {
        formatter: t.formatter,
        rows: t.rows,
        value: this.value,
        viewProps: this.viewProps
      });
    }
  }
  const lu = We("sgl");
  class uS {
    constructor(e, t) {
      this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(lu()), t.viewProps.bindClassModifiers(this.element);
      const n = e.createElement("input");
      n.classList.add(lu("i")), n.readOnly = true, n.type = "text", t.viewProps.bindDisabled(n), this.element.appendChild(n), this.inputElement = n, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
    }
    update_() {
      const e = this.value.rawValue, t = e[e.length - 1];
      this.inputElement.value = t !== void 0 ? this.formatter_(t) : "";
    }
    onValueUpdate_() {
      this.update_();
    }
  }
  class dc {
    constructor(e, t) {
      this.value = t.value, this.viewProps = t.viewProps, this.view = new uS(e, {
        formatter: t.formatter,
        value: this.value,
        viewProps: this.viewProps
      });
    }
  }
  Bt({
    id: "monitor-bool",
    type: "monitor",
    accept: (i, e) => {
      if (typeof i != "boolean") return null;
      const t = It(e, (n) => ({
        readonly: n.required.constant(true),
        rows: n.optional.number
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: (i) => Ad
    },
    controller: (i) => {
      var e;
      return i.value.rawValue.length === 1 ? new dc(i.document, {
        formatter: Qh,
        value: i.value,
        viewProps: i.viewProps
      }) : new uc(i.document, {
        formatter: Qh,
        rows: (e = i.params.rows) !== null && e !== void 0 ? e : Po.monitor.defaultRows,
        value: i.value,
        viewProps: i.viewProps
      });
    }
  });
  class dS extends Xl {
    get max() {
      return this.controller.valueController.props.get("max");
    }
    set max(e) {
      this.controller.valueController.props.set("max", e);
    }
    get min() {
      return this.controller.valueController.props.get("min");
    }
    set min(e) {
      this.controller.valueController.props.set("min", e);
    }
  }
  const ii = We("grl");
  class pS {
    constructor(e, t) {
      this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = e.createElement("div"), this.element.classList.add(ii()), t.viewProps.bindClassModifiers(this.element), this.formatter_ = t.formatter, this.props_ = t.props, this.cursor_ = t.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
      const n = e.createElementNS(vn, "svg");
      n.classList.add(ii("g")), n.style.height = `calc(var(${Pd("containerUnitSize")}) * ${t.rows})`, this.element.appendChild(n), this.svgElem_ = n;
      const s = e.createElementNS(vn, "polyline");
      this.svgElem_.appendChild(s), this.lineElem_ = s;
      const r = e.createElement("div");
      r.classList.add(ii("t"), We("tt")()), this.element.appendChild(r), this.tooltipElem_ = r, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
    }
    get graphElement() {
      return this.svgElem_;
    }
    update_() {
      const { clientWidth: e, clientHeight: t } = this.element, n = this.value.rawValue.length - 1, s = this.props_.get("min"), r = this.props_.get("max"), o = [];
      this.value.rawValue.forEach((u, d) => {
        if (u === void 0) return;
        const p = $e(d, 0, n, 0, e), _ = $e(u, s, r, t, 0);
        o.push([
          p,
          _
        ].join(","));
      }), this.lineElem_.setAttributeNS(null, "points", o.join(" "));
      const a = this.tooltipElem_, l = this.value.rawValue[this.cursor_.rawValue];
      if (l === void 0) {
        a.classList.remove(ii("t", "a"));
        return;
      }
      const c = $e(this.cursor_.rawValue, 0, n, 0, e), h = $e(l, s, r, t, 0);
      a.style.left = `${c}px`, a.style.top = `${h}px`, a.textContent = `${this.formatter_(l)}`, a.classList.contains(ii("t", "a")) || (a.classList.add(ii("t", "a"), ii("t", "in")), fo(a), a.classList.remove(ii("t", "in")));
    }
    onValueUpdate_() {
      this.update_();
    }
    onCursorChange_() {
      this.update_();
    }
  }
  class np {
    constructor(e, t) {
      if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.cursor_ = Et(-1), this.view = new pS(e, {
        cursor: this.cursor_,
        formatter: t.formatter,
        rows: t.rows,
        props: this.props,
        value: this.value,
        viewProps: this.viewProps
      }), !jl(e)) this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
      else {
        const n = new Ni(this.view.element);
        n.emitter.on("down", this.onGraphPointerDown_), n.emitter.on("move", this.onGraphPointerMove_), n.emitter.on("up", this.onGraphPointerUp_);
      }
    }
    importProps(e) {
      return Tn(e, null, (t) => ({
        max: t.required.number,
        min: t.required.number
      }), (t) => (this.props.set("max", t.max), this.props.set("min", t.min), true));
    }
    exportProps() {
      return An(null, {
        max: this.props.get("max"),
        min: this.props.get("min")
      });
    }
    onGraphMouseLeave_() {
      this.cursor_.rawValue = -1;
    }
    onGraphMouseMove_(e) {
      const { clientWidth: t } = this.view.element;
      this.cursor_.rawValue = Math.floor($e(e.offsetX, 0, t, 0, this.value.rawValue.length));
    }
    onGraphPointerDown_(e) {
      this.onGraphPointerMove_(e);
    }
    onGraphPointerMove_(e) {
      if (!e.data.point) {
        this.cursor_.rawValue = -1;
        return;
      }
      this.cursor_.rawValue = Math.floor($e(e.data.point.x, 0, e.data.bounds.width, 0, this.value.rawValue.length));
    }
    onGraphPointerUp_() {
      this.cursor_.rawValue = -1;
    }
  }
  function fl(i) {
    return rt(i.format) ? Gt(2) : i.format;
  }
  function fS(i) {
    var e;
    return i.value.rawValue.length === 1 ? new dc(i.document, {
      formatter: fl(i.params),
      value: i.value,
      viewProps: i.viewProps
    }) : new uc(i.document, {
      formatter: fl(i.params),
      rows: (e = i.params.rows) !== null && e !== void 0 ? e : Po.monitor.defaultRows,
      value: i.value,
      viewProps: i.viewProps
    });
  }
  function mS(i) {
    var e, t, n;
    return new np(i.document, {
      formatter: fl(i.params),
      rows: (e = i.params.rows) !== null && e !== void 0 ? e : Po.monitor.defaultRows,
      props: Ge.fromObject({
        max: (t = i.params.max) !== null && t !== void 0 ? t : 100,
        min: (n = i.params.min) !== null && n !== void 0 ? n : 0
      }),
      value: i.value,
      viewProps: i.viewProps
    });
  }
  function cu(i) {
    return i.view === "graph";
  }
  Bt({
    id: "monitor-number",
    type: "monitor",
    accept: (i, e) => {
      if (typeof i != "number") return null;
      const t = It(e, (n) => ({
        format: n.optional.function,
        max: n.optional.number,
        min: n.optional.number,
        readonly: n.required.constant(true),
        rows: n.optional.number,
        view: n.optional.string
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      defaultBufferSize: (i) => cu(i) ? 64 : 1,
      reader: (i) => hd
    },
    controller: (i) => cu(i.params) ? mS(i) : fS(i),
    api: (i) => i.controller.valueController instanceof np ? new dS(i.controller) : null
  });
  Bt({
    id: "monitor-string",
    type: "monitor",
    accept: (i, e) => {
      if (typeof i != "string") return null;
      const t = It(e, (n) => ({
        multiline: n.optional.boolean,
        readonly: n.required.constant(true),
        rows: n.optional.number
      }));
      return t ? {
        initialValue: i,
        params: t
      } : null;
    },
    binding: {
      reader: (i) => Cd
    },
    controller: (i) => {
      var e;
      const t = i.value;
      return t.rawValue.length > 1 || i.params.multiline ? new uc(i.document, {
        formatter: pl,
        rows: (e = i.params.rows) !== null && e !== void 0 ? e : Po.monitor.defaultRows,
        value: t,
        viewProps: i.viewProps
      }) : new dc(i.document, {
        formatter: pl,
        value: t,
        viewProps: i.viewProps
      });
    }
  });
  new Md("4.0.5");
  class _S {
    constructor() {
    }
  }
  const gS = "modulepreload", vS = function(i, e) {
    return new URL(i, e).href;
  }, hu = {}, xS = function(e, t, n) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
      const o = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      s = Promise.allSettled(t.map((c) => {
        if (c = vS(c, n), c in hu) return;
        hu[c] = true;
        const h = c.endsWith(".css"), u = h ? '[rel="stylesheet"]' : "";
        if (!!n) for (let _ = o.length - 1; _ >= 0; _--) {
          const g = o[_];
          if (g.href === c && (!h || g.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${u}`)) return;
        const p = document.createElement("link");
        if (p.rel = h ? "stylesheet" : gS, h || (p.as = "script"), p.crossOrigin = "", p.href = c, l && p.setAttribute("nonce", l), document.head.appendChild(p), h) return new Promise((_, g) => {
          p.addEventListener("load", _), p.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${c}`)));
        });
      }));
    }
    function r(o) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o;
    }
    return s.then((o) => {
      for (const a of o || []) a.status === "rejected" && r(a.reason);
      return e().catch(r);
    });
  };
  class yS {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.meshMap = /* @__PURE__ */ new Map(), xS(() => import("./rapier-CrZc3v1j.js"), [], import.meta.url).then((e) => {
        const t = {
          x: 0,
          y: -9.81,
          z: 0
        };
        this.world = new e.World(t), this.rapier = e, this.rapierLoaded = true, kl.setState({
          physicsReady: true
        });
      });
    }
    add(e, t, n) {
      let s;
      switch (t) {
        case "dynamic":
          s = this.rapier.RigidBodyDesc.dynamic();
          break;
        case "fixed":
          s = this.rapier.RigidBodyDesc.fixed();
          break;
        case "kinematic":
          s = this.rapier.RigidBodyDesc.kinematicPositionBased();
          break;
      }
      this.rigidBody = this.world.createRigidBody(s);
      let r;
      switch (n) {
        case "cuboid":
          const l = this.computeCuboidDimensions(e);
          r = this.rapier.ColliderDesc.cuboid(l.x / 2, l.y / 2, l.z / 2), this.world.createCollider(r, this.rigidBody);
          break;
        case "ball":
          const c = this.computeBallDimensions(e);
          r = this.rapier.ColliderDesc.ball(c), this.world.createCollider(r, this.rigidBody);
          break;
        case "trimesh":
          const { scaledVertices: h, indices: u } = this.computeTrimeshDimensions(e);
          r = this.rapier.ColliderDesc.trimesh(h, u), this.world.createCollider(r, this.rigidBody);
          break;
      }
      const o = e.getWorldPosition(new R()), a = e.getWorldQuaternion(new Mt());
      return this.rigidBody.setTranslation(o), this.rigidBody.setRotation(a), this.meshMap.set(e, this.rigidBody), this.rigidBody;
    }
    computeCuboidDimensions(e) {
      e.geometry.computeBoundingBox();
      const t = e.geometry.boundingBox.getSize(new R()), n = e.getWorldScale(new R());
      return t.multiply(n), t;
    }
    computeBallDimensions(e) {
      e.geometry.computeBoundingSphere();
      const t = e.geometry.boundingSphere.radius, n = e.getWorldScale(new R()), s = Math.max(n.x, n.y, n.z);
      return t * s;
    }
    computeTrimeshDimensions(e) {
      const t = e.geometry.attributes.position.array, n = e.geometry.index.array, s = e.getWorldScale(new R());
      return {
        scaledVertices: t.map((o, a) => o * s.getComponent(a % 3)),
        indices: n
      };
    }
    loop() {
      this.rapierLoaded && (this.world.step(), this.meshMap.forEach((e, t) => {
        const n = new R().copy(e.translation()), s = new Mt().copy(e.rotation());
        n.applyMatrix4(new Le().copy(t.parent.matrixWorld).invert());
        const r = new Le().extractRotation(t.parent.matrixWorld).invert(), o = new Mt().setFromRotationMatrix(r);
        s.premultiply(o), t.position.copy(n), t.quaternion.copy(s);
      }));
    }
  }
  const bS = [
    {
      id: "avatar",
      path: "/models/avatar.glb",
      type: "model"
    },
    {
      id: "environment",
      path: "/models/wlb.glb",
      type: "model"
    }
  ], Lo = So((i) => ({
    assetsToLoad: bS,
    loadedAssets: {},
    addLoadedAsset: (e, t) => i((n) => ({
      loadedAssets: {
        ...n.loadedAssets,
        [t]: e
      }
    }))
  }));
  class MS {
    constructor() {
      this.modal = document.getElementById("myModal"), this.close = document.getElementsByClassName("close")[0], this.close.onclick = () => {
        this.closeModal();
      };
    }
    openModal(e, t, n = false) {
      document.getElementById("modalTitle").innerHTML = e, document.getElementById("modalDescription").innerHTML = t, this.modal.style.display = "block", this.modal.classList.remove("fadeOut"), this.modal.classList.add("fadeIn"), n && (document.getElementById("modalLink").style.display = "block");
    }
    closeModal() {
      this.modal.classList.remove("fadeIn"), this.modal.classList.add("fadeOut"), setTimeout(() => {
        this.modal.style.display = "none";
      }, 600);
    }
  }
  class yt {
    constructor(e, t) {
      this.app = new pn(), this.portalMesh = e, this.modalInfo = t, this.modalManager = new MS(), this.portalNearMaterial = new Vn({
        color: 16777215,
        transparent: true,
        opacity: 0.8
      }), this.portalFarMaterial = new Vn({
        color: 65535,
        transparent: true,
        opacity: 0.8
      }), this.prevIsNear = false;
    }
    loop() {
      if (this.character = this.app.world.character.instance, this.character) {
        const e = new R();
        this.portalMesh.getWorldPosition(e), this.character.position.distanceTo(e) < 1.5 ? (this.prevIsNear || (this.modalManager.openModal(this.modalInfo.title, this.modalInfo.description, this.portalMesh.name == "portals002"), this.portalMesh.material = this.portalNearMaterial), this.prevIsNear = true) : (this.prevIsNear && (this.modalManager.closeModal(), this.portalMesh.material = this.portalFarMaterial), this.prevIsNear = false);
      }
    }
  }
  class SS {
    constructor() {
      this.modalContents = {
        portal: {
          title: "portal",
          description: "I hope this throwaway project was tolerable for you.  Now onto the real surprise, regardless of where things stand I want you to have this... "
        },
        faputa: {
          title: "faputa",
          description: 'SOSU, SOSSUUU, SOSSUUUUUUUU.   Andy misses you soooo soo much, you are his "Haku", & he regrets everything so much..... ALSO WHY IS SOSU, Nanachi & RIKO in the air.'
        },
        chopper: {
          title: "chopper",
          description: "I miss you & andy being together :("
        },
        doodlebob: {
          title: "doodlebob",
          description: '"Me Hoy Minoy.   YOU DOODLE! ME SPONGEBOB!   Neoy NAY NOY ME NOY NE"'
        },
        noface: {
          title: "blackThing",
          description: "the bathhouse and bridge is not finish, please don't try to go. "
        },
        chainChomp: {
          title: "chainChomp",
          description: "Hoping we can one day play Mario Kart again, I am still up 5-1 so hopefully you can redeem yourself."
        },
        office: {
          title: "office",
          description: "Future headquarters inspo of hacking princesas incorporated."
        },
        stitch: {
          title: "stitch",
          description: "Ohana means familiy, and you are his family sosu.  He is so sorry and misses you deeply."
        },
        japaneseHouse: {
          title: "japaneseHouse",
          description: "nothing to see here ... *nonchalant whistle side look*- this is unfinished"
        },
        noodles: {
          title: "noodles",
          description: "I hope we can still get ramen & sushi soon, i miss my baby dinosaur"
        },
        sushi: {
          title: "sushi",
          description: "I hope we can still get ramen & sushi soon, i miss my baby dinosaur."
        },
        boo: {
          title: "BOO",
          description: "Hoping we can one day play Mario Kart again, I am still up 5-1 so hopefully you can redeem yourself."
        },
        greenHeads: {
          title: "greenHeads",
          description: "*grunt noise*"
        },
        pikachu: {
          title: "pikachu",
          description: "From on pika to another pika, andy really misses you."
        },
        goingMerry: {
          title: "Going Merry",
          description: "I hope we can finish One Piece one day."
        },
        bojji: {
          title: "bojji",
          description: "Reminds me of us watching stars in the desert in Peru.  I hope we can go away again for August 30th."
        },
        luffy: {
          title: "luffy",
          description: 'Like Luffy said in the anime to a crewmate... "I refuse your refusal in not being together."'
        }
      };
    }
    getModalInfo(e) {
      return this.modalContents[e];
    }
  }
  class ES {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.physics = this.app.world.physics, this.pane = this.app.gui.pane, this.assetStore = Lo.getState(), this.environment = this.assetStore.loadedAssets.environment, this.loadEnvironment(), this.addLights(), this.addPortals();
    }
    loadEnvironment() {
      const e = this.environment.scene;
      this.scene.add(e), e.position.set(-4.8, 0, -7.4), e.rotation.set(0, -0.6, 0), e.scale.setScalar(1.3);
      const t = [
        "trees",
        "terrain",
        "rocks",
        "stairs",
        "gates",
        "floor",
        "bushes"
      ], n = [
        "trees",
        "terrain",
        "rocks",
        "stairs",
        "gates",
        "bushes"
      ], s = [
        "floor",
        "terrain"
      ];
      for (const r of e.children) r.traverse((o) => {
        o.isMesh && (o.castShadow = n.some((a) => r.name.includes(a)), o.receiveShadow = s.some((a) => r.name.includes(a)), t.some((a) => r.name.includes(a)) && this.physics.add(o, "fixed", "cuboid"));
      });
    }
    addLights() {
      const e = new o0(16777215, 1);
      this.scene.add(e), this.directionalLight = new rd(16777215, 1), this.directionalLight.position.set(1, 1, 1), this.directionalLight.castShadow = true, this.directionalLight.shadow.camera.top = 30, this.directionalLight.shadow.camera.right = 30, this.directionalLight.shadow.camera.left = -30, this.directionalLight.shadow.camera.bottom = -30, this.directionalLight.shadow.bias = -2e-3, this.directionalLight.shadow.normalBias = 0.072, this.scene.add(this.directionalLight);
    }
    addPortals() {
      const e = this.environment.scene.getObjectByName("portals002"), t = this.environment.scene.getObjectByName("Faputa"), n = this.environment.scene.getObjectByName("chopper"), s = this.environment.scene.getObjectByName("chomp"), r = this.environment.scene.getObjectByName("BOO"), o = this.environment.scene.getObjectByName("GoingMerry"), a = this.environment.scene.getObjectByName("GreenHeads"), l = this.environment.scene.getObjectByName("JapaneseHouse"), c = this.environment.scene.getObjectByName("Pika"), h = this.environment.scene.getObjectByName("BlackThing"), u = this.environment.scene.getObjectByName("Boji_Outline_0"), d = this.environment.scene.getObjectByName("Doodlebob"), p = this.environment.scene.getObjectByName("Stitch"), _ = this.environment.scene.getObjectByName("sushi"), g = this.environment.scene.getObjectByName("noodz"), m = this.environment.scene.getObjectByName("office"), f = this.environment.scene.getObjectByName("luffy"), M = new SS();
      this.portal = new yt(e, M.getModalInfo("portal")), this.faputaPortal = new yt(t, M.getModalInfo("faputa")), this.luffyPortal = new yt(f, M.getModalInfo("luffy")), this.bojjiPortal = new yt(u, M.getModalInfo("bojji")), this.chopperPortal = new yt(n, M.getModalInfo("chopper")), this.doodlebobPortal = new yt(d, M.getModalInfo("doodlebob")), this.officePortal = new yt(m, M.getModalInfo("office")), this.booPortal = new yt(r, M.getModalInfo("boo")), this.greenHeadsPortal = new yt(a, M.getModalInfo("greenHeads")), this.chainChompPortal = new yt(s, M.getModalInfo("chainChomp")), this.goingMerryPortal = new yt(o, M.getModalInfo("goingMerry")), this.japaneseHousePortal = new yt(l, M.getModalInfo("japaneseHouse")), this.pikachuPortal = new yt(c, M.getModalInfo("pikachu")), this.blackThingPortal = new yt(h, M.getModalInfo("noface")), this.doodlebobPortal = new yt(d, M.getModalInfo("doodlebob")), this.stitchPortal = new yt(p, M.getModalInfo("stitch")), this.sushiPortal = new yt(_, M.getModalInfo("sushi")), this.noodlesPortal = new yt(g, M.getModalInfo("noodles"));
    }
    loop() {
      this.faputaPortal.loop(), this.chopperPortal.loop(), this.portal.loop(), this.doodlebobPortal.loop(), this.chopperPortal.loop(), this.officePortal.loop(), this.booPortal.loop(), this.greenHeadsPortal.loop(), this.chainChompPortal.loop(), this.goingMerryPortal.loop(), this.japaneseHousePortal.loop(), this.sushiPortal.loop(), this.pikachuPortal.loop(), this.bojjiPortal.loop(), this.noodlesPortal.loop(), this.blackThingPortal.loop(), this.stitchPortal.loop(), this.luffyPortal.loop();
    }
  }
  class wS {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.assetStore = Lo.getState(), this.avatar = this.assetStore.loadedAssets.avatar, this.instantiateCharacter();
    }
    instantiateCharacter() {
      const e = new Ts(0.6, 2, 0.6), t = new bo({
        color: 65280,
        wireframe: true,
        visible: false
      });
      this.instance = new Vt(e, t), this.instance.position.set(0, 4, 0), this.scene.add(this.instance);
      const n = this.avatar.scene;
      n.rotation.y = Math.PI, n.position.y = -1, this.instance.add(n);
    }
  }
  class TS {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.physics = this.app.world.physics, this.character = this.app.world.character.instance, ln.subscribe((e) => {
        this.forward = e.forward, this.backward = e.backward, this.left = e.left, this.right = e.right;
      }), this.instantiateController();
    }
    instantiateController() {
      this.rigidBodyType = this.physics.rapier.RigidBodyDesc.kinematicPositionBased(), this.rigidBody = this.physics.world.createRigidBody(this.rigidBodyType), this.colliderType = this.physics.rapier.ColliderDesc.cuboid(0.3, 1, 0.3), this.collider = this.physics.world.createCollider(this.colliderType, this.rigidBody);
      const e = this.character.getWorldPosition(new R()), t = this.character.getWorldQuaternion(new Mt());
      this.rigidBody.setTranslation(e), this.rigidBody.setRotation(t), this.characterController = this.physics.world.createCharacterController(0.01), this.characterController.setApplyImpulsesToDynamicBodies(true), this.characterController.enableAutostep(1, 0.1, false), this.characterController.enableSnapToGround(1);
    }
    loop() {
      const e = new R();
      if (this.forward && (e.z -= 1), this.backward && (e.z += 1), this.left && (e.x -= 1), this.right && (e.x += 1), e.length() !== 0) {
        const n = Math.atan2(e.x, e.z) + Math.PI, s = new Mt().setFromAxisAngle(new R(0, 1, 0), n);
        this.character.quaternion.slerp(s, 0.1);
      }
      e.normalize().multiplyScalar(0.1), e.y = -1, this.characterController.computeColliderMovement(this.collider, e);
      const t = new R().copy(this.rigidBody.translation()).add(this.characterController.computedMovement());
      this.rigidBody.setNextKinematicTranslation(t), this.character.position.lerp(this.rigidBody.translation(), 0.1);
    }
  }
  class AS {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.avatar = this.app.world.character.avatar, ln.subscribe((e) => this.onInput(e)), this.instantiatedAnimations();
    }
    instantiatedAnimations() {
      this.avatar.animations[0], this.mixer = new b0(this.avatar.scene), this.animations = /* @__PURE__ */ new Map(), this.avatar.animations.forEach((e) => {
        this.animations.set(e.name, this.mixer.clipAction(e));
      }), this.currentAction = this.animations.get("idle"), this.currentAction.play();
    }
    playAnimation(e) {
      if (this.currentAction === this.animations.get(e)) return;
      const t = this.animations.get(e);
      t.reset(), t.play(), t.crossFadeFrom(this.currentAction, 0.2), this.currentAction = t;
    }
    onInput(e) {
      e.forward || e.backward || e.left || e.right ? this.playAnimation("run") : this.playAnimation("idle");
    }
    loop(e) {
      this.mixer.update(e);
    }
  }
  class CS {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.physics = new yS();
      const e = kl.subscribe((t) => {
        t.physicsReady && t.assetsReady && (this.environment = new ES(), this.character = new wS(), this.characterController = new TS(), this.animationController = new AS(), e());
      });
      this.loop();
    }
    loop(e, t) {
      this.physics.loop(), this.environment && this.environment.loop(), this.characterController && this.characterController.loop(), this.animationController && this.animationController.loop(e);
    }
  }
  class RS {
    constructor() {
      const { setState: e } = Bl;
      window.addEventListener("resize", () => {
        e({
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: Math.min(window.devicePixelRatio, 2)
        });
      });
    }
  }
  function uu(i, e) {
    if (e === Yp) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), i;
    if (e === il || e === Lu) {
      let t = i.getIndex();
      if (t === null) {
        const o = [], a = i.getAttribute("position");
        if (a !== void 0) {
          for (let l = 0; l < a.count; l++) o.push(l);
          i.setIndex(o), t = i.getIndex();
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), i;
      }
      const n = t.count - 2, s = [];
      if (e === il) for (let o = 1; o <= n; o++) s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
      else for (let o = 0; o < n; o++) o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
      s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      const r = i.clone();
      return r.setIndex(s), r.clearGroups(), r;
    } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), i;
  }
  class PS extends Di {
    constructor(e) {
      super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
        return new US(t);
      }), this.register(function(t) {
        return new OS(t);
      }), this.register(function(t) {
        return new XS(t);
      }), this.register(function(t) {
        return new jS(t);
      }), this.register(function(t) {
        return new KS(t);
      }), this.register(function(t) {
        return new BS(t);
      }), this.register(function(t) {
        return new kS(t);
      }), this.register(function(t) {
        return new VS(t);
      }), this.register(function(t) {
        return new zS(t);
      }), this.register(function(t) {
        return new NS(t);
      }), this.register(function(t) {
        return new HS(t);
      }), this.register(function(t) {
        return new FS(t);
      }), this.register(function(t) {
        return new WS(t);
      }), this.register(function(t) {
        return new GS(t);
      }), this.register(function(t) {
        return new IS(t);
      }), this.register(function(t) {
        return new qS(t);
      }), this.register(function(t) {
        return new YS(t);
      });
    }
    load(e, t, n, s) {
      const r = this;
      let o;
      if (this.resourcePath !== "") o = this.resourcePath;
      else if (this.path !== "") {
        const c = $s.extractUrlBase(e);
        o = $s.resolveURL(c, this.path);
      } else o = $s.extractUrlBase(e);
      this.manager.itemStart(e);
      const a = function(c) {
        s ? s(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
      }, l = new uo(this.manager);
      l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
        try {
          r.parse(c, o, function(h) {
            t(h), r.manager.itemEnd(e);
          }, a);
        } catch (h) {
          a(h);
        }
      }, n, a);
    }
    setDRACOLoader(e) {
      return this.dracoLoader = e, this;
    }
    setDDSLoader() {
      throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(e) {
      return this.ktx2Loader = e, this;
    }
    setMeshoptDecoder(e) {
      return this.meshoptDecoder = e, this;
    }
    register(e) {
      return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
    }
    unregister(e) {
      return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
    }
    parse(e, t, n, s) {
      let r;
      const o = {}, a = {}, l = new TextDecoder();
      if (typeof e == "string") r = JSON.parse(e);
      else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === ip) {
        try {
          o[Oe.KHR_BINARY_GLTF] = new $S(e);
        } catch (u) {
          s && s(u);
          return;
        }
        r = JSON.parse(o[Oe.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(l.decode(e));
      else r = e;
      if (r.asset === void 0 || r.asset.version[0] < 2) {
        s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const c = new cE(r, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      c.fileLoader.setRequestHeader(this.requestHeader);
      for (let h = 0; h < this.pluginCallbacks.length; h++) {
        const u = this.pluginCallbacks[h](c);
        u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = true;
      }
      if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
        switch (u) {
          case Oe.KHR_MATERIALS_UNLIT:
            o[u] = new DS();
            break;
          case Oe.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new ZS(r, this.dracoLoader);
            break;
          case Oe.KHR_TEXTURE_TRANSFORM:
            o[u] = new JS();
            break;
          case Oe.KHR_MESH_QUANTIZATION:
            o[u] = new QS();
            break;
          default:
            d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
      c.setExtensions(o), c.setPlugins(a), c.parse(n, s);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function(s, r) {
        n.parse(e, t, s, r);
      });
    }
  }
  function LS() {
    let i = {};
    return {
      get: function(e) {
        return i[e];
      },
      add: function(e, t) {
        i[e] = t;
      },
      remove: function(e) {
        delete i[e];
      },
      removeAll: function() {
        i = {};
      }
    };
  }
  const Oe = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  class IS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_LIGHTS_PUNCTUAL, this.cache = {
        refs: {},
        uses: {}
      };
    }
    _markDefs() {
      const e = this.parser, t = this.parser.json.nodes || [];
      for (let n = 0, s = t.length; n < s; n++) {
        const r = t[n];
        r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser, n = "light:" + e;
      let s = t.cache.get(n);
      if (s) return s;
      const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
      let c;
      const h = new Ae(16777215);
      l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], St);
      const u = l.range !== void 0 ? l.range : 0;
      switch (l.type) {
        case "directional":
          c = new rd(h), c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        case "point":
          c = new s0(h), c.distance = u;
          break;
        case "spot":
          c = new n0(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
      }
      return c.position.set(0, 0, 0), c.decay = 2, Fn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
    }
    getDependency(e, t) {
      if (e === "light") return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
      return a === void 0 ? null : this._loadLight(a).then(function(l) {
        return n._getNodeRef(t.cache, a, l);
      });
    }
  }
  class DS {
    constructor() {
      this.name = Oe.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return Vn;
    }
    extendParams(e, t, n) {
      const s = [];
      e.color = new Ae(1, 1, 1), e.opacity = 1;
      const r = t.pbrMetallicRoughness;
      if (r) {
        if (Array.isArray(r.baseColorFactor)) {
          const o = r.baseColorFactor;
          e.color.setRGB(o[0], o[1], o[2], St), e.opacity = o[3];
        }
        r.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", r.baseColorTexture, At));
      }
      return Promise.all(s);
    }
  }
  class NS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = s.extensions[this.name].emissiveStrength;
      return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
    }
  }
  class US {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [], o = s.extensions[this.name];
      if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
        const a = o.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new ye(a, a);
      }
      return Promise.all(r);
    }
  }
  class OS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = s.extensions[this.name];
      return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
    }
  }
  class FS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [], o = s.extensions[this.name];
      return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
        100,
        400
      ]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
    }
  }
  class BS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [];
      t.sheenColor = new Ae(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
      const o = s.extensions[this.name];
      if (o.sheenColorFactor !== void 0) {
        const a = o.sheenColorFactor;
        t.sheenColor.setRGB(a[0], a[1], a[2], St);
      }
      return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, At)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
    }
  }
  class kS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [], o = s.extensions[this.name];
      return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
    }
  }
  class VS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [], o = s.extensions[this.name];
      t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
      const a = o.attenuationColor || [
        1,
        1,
        1
      ];
      return t.attenuationColor = new Ae().setRGB(a[0], a[1], a[2], St), Promise.all(r);
    }
  }
  class zS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = s.extensions[this.name];
      return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
    }
  }
  class HS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [], o = s.extensions[this.name];
      t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
      const a = o.specularColorFactor || [
        1,
        1,
        1
      ];
      return t.specularColor = new Ae().setRGB(a[0], a[1], a[2], St), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, At)), Promise.all(r);
    }
  }
  class GS {
    constructor(e) {
      this.parser = e, this.name = Oe.EXT_MATERIALS_BUMP;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [], o = s.extensions[this.name];
      return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
    }
  }
  class WS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : En;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const r = [], o = s.extensions[this.name];
      return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
    }
  }
  class XS {
    constructor(e) {
      this.parser = e, this.name = Oe.KHR_TEXTURE_BASISU;
    }
    loadTexture(e) {
      const t = this.parser, n = t.json, s = n.textures[e];
      if (!s.extensions || !s.extensions[this.name]) return null;
      const r = s.extensions[this.name], o = t.options.ktx2Loader;
      if (!o) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        return null;
      }
      return t.loadTextureImage(e, r.source, o);
    }
  }
  class jS {
    constructor(e) {
      this.parser = e, this.name = Oe.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, s = n.json, r = s.textures[e];
      if (!r.extensions || !r.extensions[t]) return null;
      const o = r.extensions[t], a = s.images[o.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return this.detectSupport().then(function(c) {
        if (c) return n.loadTextureImage(e, o.source, l);
        if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function(e) {
        const t = new Image();
        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
          e(t.height === 1);
        };
      })), this.isSupported;
    }
  }
  class KS {
    constructor(e) {
      this.parser = e, this.name = Oe.EXT_TEXTURE_AVIF, this.isSupported = null;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, s = n.json, r = s.textures[e];
      if (!r.extensions || !r.extensions[t]) return null;
      const o = r.extensions[t], a = s.images[o.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return this.detectSupport().then(function(c) {
        if (c) return n.loadTextureImage(e, o.source, l);
        if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function(e) {
        const t = new Image();
        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
          e(t.height === 1);
        };
      })), this.isSupported;
    }
  }
  class qS {
    constructor(e) {
      this.name = Oe.EXT_MESHOPT_COMPRESSION, this.parser = e;
    }
    loadBufferView(e) {
      const t = this.parser.json, n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const s = n.extensions[this.name], r = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
        if (!o || !o.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          return null;
        }
        return r.then(function(a) {
          const l = s.byteOffset || 0, c = s.byteLength || 0, h = s.count, u = s.byteStride, d = new Uint8Array(a, l, c);
          return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, s.mode, s.filter).then(function(p) {
            return p.buffer;
          }) : o.ready.then(function() {
            const p = new ArrayBuffer(h * u);
            return o.decodeGltfBuffer(new Uint8Array(p), h, u, d, s.mode, s.filter), p;
          });
        });
      } else return null;
    }
  }
  class YS {
    constructor(e) {
      this.name = Oe.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
      const t = this.parser.json, n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
      const s = t.meshes[n.mesh];
      for (const c of s.primitives) if (c.mode !== en.TRIANGLES && c.mode !== en.TRIANGLE_STRIP && c.mode !== en.TRIANGLE_FAN && c.mode !== void 0) return null;
      const o = n.extensions[this.name].attributes, a = [], l = {};
      for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((h) => (l[c] = h, l[c])));
      return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
        const h = c.pop(), u = h.isGroup ? h.children : [
          h
        ], d = c[0].count, p = [];
        for (const _ of u) {
          const g = new Le(), m = new R(), f = new Mt(), M = new R(1, 1, 1), b = new Vx(_.geometry, _.material, d);
          for (let E = 0; E < d; E++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, E), l.ROTATION && f.fromBufferAttribute(l.ROTATION, E), l.SCALE && M.fromBufferAttribute(l.SCALE, E), b.setMatrixAt(E, g.compose(m, f, M));
          for (const E in l) if (E === "_COLOR_0") {
            const N = l[E];
            b.instanceColor = new ol(N.array, N.itemSize, N.normalized);
          } else E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && _.geometry.setAttribute(E, l[E]);
          ot.prototype.copy.call(b, _), this.parser.assignFinalMaterial(b), p.push(b);
        }
        return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
      }));
    }
  }
  const ip = "glTF", Xs = 12, du = {
    JSON: 1313821514,
    BIN: 5130562
  };
  class $S {
    constructor(e) {
      this.name = Oe.KHR_BINARY_GLTF, this.content = null, this.body = null;
      const t = new DataView(e, 0, Xs), n = new TextDecoder();
      if (this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, true),
        length: t.getUint32(8, true)
      }, this.header.magic !== ip) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const s = this.header.length - Xs, r = new DataView(e, Xs);
      let o = 0;
      for (; o < s; ) {
        const a = r.getUint32(o, true);
        o += 4;
        const l = r.getUint32(o, true);
        if (o += 4, l === du.JSON) {
          const c = new Uint8Array(e, Xs + o, a);
          this.content = n.decode(c);
        } else if (l === du.BIN) {
          const c = Xs + o;
          this.body = e.slice(c, c + a);
        }
        o += a;
      }
      if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class ZS {
    constructor(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = Oe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json, s = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
      for (const h in o) {
        const u = ml[h] || h.toLowerCase();
        a[u] = o[h];
      }
      for (const h in e.attributes) {
        const u = ml[h] || h.toLowerCase();
        if (o[h] !== void 0) {
          const d = n.accessors[e.attributes[h]], p = ps[d.componentType];
          c[u] = p.name, l[u] = d.normalized === true;
        }
      }
      return t.getDependency("bufferView", r).then(function(h) {
        return new Promise(function(u, d) {
          s.decodeDracoFile(h, function(p) {
            for (const _ in p.attributes) {
              const g = p.attributes[_], m = l[_];
              m !== void 0 && (g.normalized = m);
            }
            u(p);
          }, a, c, St, d);
        });
      });
    }
  }
  class JS {
    constructor() {
      this.name = Oe.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
    }
  }
  class QS {
    constructor() {
      this.name = Oe.KHR_MESH_QUANTIZATION;
    }
  }
  class sp extends ar {
    constructor(e, t, n, s) {
      super(e, t, n, s);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = e * s * 3 + s;
      for (let o = 0; o !== s; o++) t[o] = n[r + o];
      return t;
    }
    interpolate_(e, t, n, s) {
      const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h = s - t, u = (n - t) / h, d = u * u, p = d * u, _ = e * c, g = _ - c, m = -2 * p + 3 * d, f = p - d, M = 1 - m, b = f - d + u;
      for (let E = 0; E !== a; E++) {
        const N = o[g + E + a], A = o[g + E + l] * h, C = o[_ + E + a], F = o[_ + E] * h;
        r[E] = M * N + b * A + m * C + f * F;
      }
      return r;
    }
  }
  const eE = new Mt();
  class tE extends sp {
    interpolate_(e, t, n, s) {
      const r = super.interpolate_(e, t, n, s);
      return eE.fromArray(r).normalize().toArray(r), r;
    }
  }
  const en = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, ps = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  }, pu = {
    9728: Ot,
    9729: qt,
    9984: bu,
    9985: jr,
    9986: js,
    9987: Bn
  }, fu = {
    33071: ai,
    33648: io,
    10497: _s
  }, Ma = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  }, ml = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  }, si = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  }, nE = {
    CUBICSPLINE: void 0,
    LINEAR: Qs,
    STEP: Js
  }, Sa = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function iE(i) {
    return i.DefaultMaterial === void 0 && (i.DefaultMaterial = new bo({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: Wn
    })), i.DefaultMaterial;
  }
  function Ei(i, e, t) {
    for (const n in t.extensions) i[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
  }
  function Fn(i, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(i.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
  }
  function sE(i, e, t) {
    let n = false, s = false, r = false;
    for (let c = 0, h = e.length; c < h; c++) {
      const u = e[c];
      if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (s = true), u.COLOR_0 !== void 0 && (r = true), n && s && r) break;
    }
    if (!n && !s && !r) return Promise.resolve(i);
    const o = [], a = [], l = [];
    for (let c = 0, h = e.length; c < h; c++) {
      const u = e[c];
      if (n) {
        const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : i.attributes.position;
        o.push(d);
      }
      if (s) {
        const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : i.attributes.normal;
        a.push(d);
      }
      if (r) {
        const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : i.attributes.color;
        l.push(d);
      }
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l)
    ]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      return n && (i.morphAttributes.position = h), s && (i.morphAttributes.normal = u), r && (i.morphAttributes.color = d), i.morphTargetsRelative = true, i;
    });
  }
  function rE(i, e) {
    if (i.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) i.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (i.morphTargetInfluences.length === t.length) {
        i.morphTargetDictionary = {};
        for (let n = 0, s = t.length; n < s; n++) i.morphTargetDictionary[t[n]] = n;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function oE(i) {
    let e;
    const t = i.extensions && i.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ea(t.attributes) : e = i.indices + ":" + Ea(i.attributes) + ":" + i.mode, i.targets !== void 0) for (let n = 0, s = i.targets.length; n < s; n++) e += ":" + Ea(i.targets[n]);
    return e;
  }
  function Ea(i) {
    let e = "";
    const t = Object.keys(i).sort();
    for (let n = 0, s = t.length; n < s; n++) e += t[n] + ":" + i[t[n]] + ";";
    return e;
  }
  function _l(i) {
    switch (i) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function aE(i) {
    return i.search(/\.jpe?g($|\?)/i) > 0 || i.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : i.search(/\.webp($|\?)/i) > 0 || i.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
  }
  const lE = new Le();
  class cE {
    constructor(e = {}, t = {}) {
      this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new LS(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
        refs: {},
        uses: {}
      }, this.cameraCache = {
        refs: {},
        uses: {}
      }, this.lightCache = {
        refs: {},
        uses: {}
      }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
      let n = false, s = -1, r = false, o = -1;
      if (typeof navigator < "u") {
        const a = navigator.userAgent;
        n = /^((?!chrome|android).)*safari/i.test(a) === true;
        const l = a.match(/Version\/(\d+)/);
        s = n && l ? parseInt(l[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
      }
      typeof createImageBitmap > "u" || n && s < 17 || r && o < 98 ? this.textureLoader = new sd(this.options.manager) : this.textureLoader = new a0(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new uo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this, s = this.json, r = this.extensions;
      this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
        return o._markDefs && o._markDefs();
      }), Promise.all(this._invokeAll(function(o) {
        return o.beforeRoot && o.beforeRoot();
      })).then(function() {
        return Promise.all([
          n.getDependencies("scene"),
          n.getDependencies("animation"),
          n.getDependencies("camera")
        ]);
      }).then(function(o) {
        const a = {
          scene: o[0][s.scene || 0],
          scenes: o[0],
          animations: o[1],
          cameras: o[2],
          asset: s.asset,
          parser: n,
          userData: {}
        };
        return Ei(r, a, s), Fn(a, s), Promise.all(n._invokeAll(function(l) {
          return l.afterRoot && l.afterRoot(a);
        })).then(function() {
          for (const l of a.scenes) l.updateMatrixWorld();
          e(a);
        });
      }).catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
      for (let s = 0, r = t.length; s < r; s++) {
        const o = t[s].joints;
        for (let a = 0, l = o.length; a < l; a++) e[o[a]].isBone = true;
      }
      for (let s = 0, r = e.length; s < r; s++) {
        const o = e[s];
        o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const s = n.clone(), r = (o, a) => {
        const l = this.associations.get(o);
        l != null && this.associations.set(a, l);
        for (const [c, h] of o.children.entries()) r(h, a.children[c]);
      };
      return r(n, s), s.name += "_instance_" + e.uses[t]++, s;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const s = e(t[n]);
        if (s) return s;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let s = 0; s < t.length; s++) {
        const r = e(t[s]);
        r && n.push(r);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let s = this.cache.get(n);
      if (!s) {
        switch (e) {
          case "scene":
            s = this.loadScene(t);
            break;
          case "node":
            s = this._invokeOne(function(r) {
              return r.loadNode && r.loadNode(t);
            });
            break;
          case "mesh":
            s = this._invokeOne(function(r) {
              return r.loadMesh && r.loadMesh(t);
            });
            break;
          case "accessor":
            s = this.loadAccessor(t);
            break;
          case "bufferView":
            s = this._invokeOne(function(r) {
              return r.loadBufferView && r.loadBufferView(t);
            });
            break;
          case "buffer":
            s = this.loadBuffer(t);
            break;
          case "material":
            s = this._invokeOne(function(r) {
              return r.loadMaterial && r.loadMaterial(t);
            });
            break;
          case "texture":
            s = this._invokeOne(function(r) {
              return r.loadTexture && r.loadTexture(t);
            });
            break;
          case "skin":
            s = this.loadSkin(t);
            break;
          case "animation":
            s = this._invokeOne(function(r) {
              return r.loadAnimation && r.loadAnimation(t);
            });
            break;
          case "camera":
            s = this.loadCamera(t);
            break;
          default:
            if (s = this._invokeOne(function(r) {
              return r != this && r.getDependency && r.getDependency(e, t);
            }), !s) throw new Error("Unknown type: " + e);
            break;
        }
        this.cache.add(n, s);
      }
      return s;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
        t = Promise.all(s.map(function(r, o) {
          return n.getDependency(e, o);
        })), this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e], n = this.fileLoader;
      if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
      if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);
      const s = this.options;
      return new Promise(function(r, o) {
        n.load($s.resolveURL(t.uri, s.path), r, void 0, function() {
          o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function(n) {
        const s = t.byteLength || 0, r = t.byteOffset || 0;
        return n.slice(r, r + s);
      });
    }
    loadAccessor(e) {
      const t = this, n = this.json, s = this.json.accessors[e];
      if (s.bufferView === void 0 && s.sparse === void 0) {
        const o = Ma[s.type], a = ps[s.componentType], l = s.normalized === true, c = new a(s.count * o);
        return Promise.resolve(new Rt(c, o, l));
      }
      const r = [];
      return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null), s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(r).then(function(o) {
        const a = o[0], l = Ma[s.type], c = ps[s.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = s.byteOffset || 0, p = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, _ = s.normalized === true;
        let g, m;
        if (p && p !== u) {
          const f = Math.floor(d / p), M = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + f + ":" + s.count;
          let b = t.cache.get(M);
          b || (g = new c(a, f * p, s.count * p / h), b = new Ux(g, p / h), t.cache.add(M, b)), m = new Ll(b, l, d % p / h, _);
        } else a === null ? g = new c(s.count * l) : g = new c(a, d, s.count * l), m = new Rt(g, l, _);
        if (s.sparse !== void 0) {
          const f = Ma.SCALAR, M = ps[s.sparse.indices.componentType], b = s.sparse.indices.byteOffset || 0, E = s.sparse.values.byteOffset || 0, N = new M(o[1], b, s.sparse.count * f), A = new c(o[2], E, s.sparse.count * l);
          a !== null && (m = new Rt(m.array.slice(), m.itemSize, m.normalized));
          for (let C = 0, F = N.length; C < F; C++) {
            const S = N[C];
            if (m.setX(S, A[C * l]), l >= 2 && m.setY(S, A[C * l + 1]), l >= 3 && m.setZ(S, A[C * l + 2]), l >= 4 && m.setW(S, A[C * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
        }
        return m;
      });
    }
    loadTexture(e) {
      const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r];
      let a = this.textureLoader;
      if (o.uri) {
        const l = n.manager.getHandler(o.uri);
        l !== null && (a = l);
      }
      return this.loadTextureImage(e, r, a);
    }
    loadTextureImage(e, t, n) {
      const s = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
      if (this.textureCache[l]) return this.textureCache[l];
      const c = this.loadImageSource(t, n).then(function(h) {
        h.flipY = false, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (h.name = a.uri);
        const d = (r.samplers || {})[o.sampler] || {};
        return h.magFilter = pu[d.magFilter] || qt, h.minFilter = pu[d.minFilter] || Bn, h.wrapS = fu[d.wrapS] || _s, h.wrapT = fu[d.wrapT] || _s, s.associations.set(h, {
          textures: e
        }), h;
      }).catch(function() {
        return null;
      });
      return this.textureCache[l] = c, c;
    }
    loadImageSource(e, t) {
      const n = this, s = this.json, r = this.options;
      if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u) => u.clone());
      const o = s.images[e], a = self.URL || self.webkitURL;
      let l = o.uri || "", c = false;
      if (o.bufferView !== void 0) l = n.getDependency("bufferView", o.bufferView).then(function(u) {
        c = true;
        const d = new Blob([
          u
        ], {
          type: o.mimeType
        });
        return l = a.createObjectURL(d), l;
      });
      else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      const h = Promise.resolve(l).then(function(u) {
        return new Promise(function(d, p) {
          let _ = d;
          t.isImageBitmapLoader === true && (_ = function(g) {
            const m = new bt(g);
            m.needsUpdate = true, d(m);
          }), t.load($s.resolveURL(u, r.path), _, void 0, p);
        });
      }).then(function(u) {
        return c === true && a.revokeObjectURL(l), Fn(u, o), u.userData.mimeType = o.mimeType || aE(o.uri), u;
      }).catch(function(u) {
        throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
      });
      return this.sourceCache[e] = h, h;
    }
    assignTexture(e, t, n, s) {
      const r = this;
      return this.getDependency("texture", n.index).then(function(o) {
        if (!o) return null;
        if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[Oe.KHR_TEXTURE_TRANSFORM]) {
          const a = n.extensions !== void 0 ? n.extensions[Oe.KHR_TEXTURE_TRANSFORM] : void 0;
          if (a) {
            const l = r.associations.get(o);
            o = r.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
          }
        }
        return s !== void 0 && (o.colorSpace = s), e[t] = o, o;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const s = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
      if (e.isPoints) {
        const a = "PointsMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l || (l = new ed(), xn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
      } else if (e.isLine) {
        const a = "LineBasicMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l || (l = new Qu(), xn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
      }
      if (s || r || o) {
        let a = "ClonedMaterial:" + n.uuid + ":";
        s && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
        let l = this.cache.get(a);
        l || (l = n.clone(), r && (l.vertexColors = true), o && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
      }
      e.material = n;
    }
    getMaterialType() {
      return bo;
    }
    loadMaterial(e) {
      const t = this, n = this.json, s = this.extensions, r = n.materials[e];
      let o;
      const a = {}, l = r.extensions || {}, c = [];
      if (l[Oe.KHR_MATERIALS_UNLIT]) {
        const u = s[Oe.KHR_MATERIALS_UNLIT];
        o = u.getMaterialType(), c.push(u.extendParams(a, r, t));
      } else {
        const u = r.pbrMetallicRoughness || {};
        if (a.color = new Ae(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
          const d = u.baseColorFactor;
          a.color.setRGB(d[0], d[1], d[2], St), a.opacity = d[3];
        }
        u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, At)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
          return d.getMaterialType && d.getMaterialType(e);
        }), c.push(Promise.all(this._invokeAll(function(d) {
          return d.extendMaterialParams && d.extendMaterialParams(e, a);
        })));
      }
      r.doubleSided === true && (a.side = _n);
      const h = r.alphaMode || Sa.OPAQUE;
      if (h === Sa.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, h === Sa.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== Vn && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ye(1, 1), r.normalTexture.scale !== void 0)) {
        const u = r.normalTexture.scale;
        a.normalScale.set(u, u);
      }
      if (r.occlusionTexture !== void 0 && o !== Vn && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== Vn) {
        const u = r.emissiveFactor;
        a.emissive = new Ae().setRGB(u[0], u[1], u[2], St);
      }
      return r.emissiveTexture !== void 0 && o !== Vn && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, At)), Promise.all(c).then(function() {
        const u = new o(a);
        return r.name && (u.name = r.name), Fn(u, r), t.associations.set(u, {
          materials: e
        }), r.extensions && Ei(s, u, r), u;
      });
    }
    createUniqueName(e) {
      const t = Ye.sanitizeNodeName(e || "");
      return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
    }
    loadGeometries(e) {
      const t = this, n = this.extensions, s = this.primitiveCache;
      function r(a) {
        return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
          return mu(l, a, t);
        });
      }
      const o = [];
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a], h = oE(c), u = s[h];
        if (u) o.push(u.promise);
        else {
          let d;
          c.extensions && c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = mu(new dn(), c, t), s[h] = {
            primitive: c,
            promise: d
          }, o.push(d);
        }
      }
      return Promise.all(o);
    }
    loadMesh(e) {
      const t = this, n = this.json, s = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
      for (let l = 0, c = o.length; l < c; l++) {
        const h = o[l].material === void 0 ? iE(this.cache) : this.getDependency("material", o[l].material);
        a.push(h);
      }
      return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
        const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
        for (let p = 0, _ = h.length; p < _; p++) {
          const g = h[p], m = o[p];
          let f;
          const M = c[p];
          if (m.mode === en.TRIANGLES || m.mode === en.TRIANGLE_STRIP || m.mode === en.TRIANGLE_FAN || m.mode === void 0) f = r.isSkinnedMesh === true ? new Fx(g, M) : new Vt(g, M), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === en.TRIANGLE_STRIP ? f.geometry = uu(f.geometry, Lu) : m.mode === en.TRIANGLE_FAN && (f.geometry = uu(f.geometry, il));
          else if (m.mode === en.LINES) f = new zx(g, M);
          else if (m.mode === en.LINE_STRIP) f = new Dl(g, M);
          else if (m.mode === en.LINE_LOOP) f = new Hx(g, M);
          else if (m.mode === en.POINTS) f = new Gx(g, M);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
          Object.keys(f.geometry.morphAttributes).length > 0 && rE(f, r), f.name = t.createUniqueName(r.name || "mesh_" + e), Fn(f, r), m.extensions && Ei(s, f, m), t.assignFinalMaterial(f), u.push(f);
        }
        for (let p = 0, _ = u.length; p < _; p++) t.associations.set(u[p], {
          meshes: e,
          primitives: p
        });
        if (u.length === 1) return r.extensions && Ei(s, u[0], r), u[0];
        const d = new Ci();
        r.extensions && Ei(s, d, r), t.associations.set(d, {
          meshes: e
        });
        for (let p = 0, _ = u.length; p < _; p++) d.add(u[p]);
        return d;
      });
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e], s = n[n.type];
      if (!s) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return n.type === "perspective" ? t = new Ut(Nu.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new Rl(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Fn(t, n), Promise.resolve(t);
    }
    loadSkin(e) {
      const t = this.json.skins[e], n = [];
      for (let s = 0, r = t.joints.length; s < r; s++) n.push(this._loadNodeShallow(t.joints[s]));
      return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
        const r = s.pop(), o = s, a = [], l = [];
        for (let c = 0, h = o.length; c < h; c++) {
          const u = o[c];
          if (u) {
            a.push(u);
            const d = new Le();
            r !== null && d.fromArray(r.array, c * 16), l.push(d);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
        }
        return new Il(a, l);
      });
    }
    loadAnimation(e) {
      const t = this.json, n = this, s = t.animations[e], r = s.name ? s.name : "animation_" + e, o = [], a = [], l = [], c = [], h = [];
      for (let u = 0, d = s.channels.length; u < d; u++) {
        const p = s.channels[u], _ = s.samplers[p.sampler], g = p.target, m = g.node, f = s.parameters !== void 0 ? s.parameters[_.input] : _.input, M = s.parameters !== void 0 ? s.parameters[_.output] : _.output;
        g.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", M)), c.push(_), h.push(g));
      }
      return Promise.all([
        Promise.all(o),
        Promise.all(a),
        Promise.all(l),
        Promise.all(c),
        Promise.all(h)
      ]).then(function(u) {
        const d = u[0], p = u[1], _ = u[2], g = u[3], m = u[4], f = [];
        for (let M = 0, b = d.length; M < b; M++) {
          const E = d[M], N = p[M], A = _[M], C = g[M], F = m[M];
          if (E === void 0) continue;
          E.updateMatrix && E.updateMatrix();
          const S = n._createAnimationTracks(E, N, A, C, F);
          if (S) for (let y = 0; y < S.length; y++) f.push(S[y]);
        }
        return new ll(r, void 0, f);
      });
    }
    createNodeMesh(e) {
      const t = this.json, n = this, s = t.nodes[e];
      return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(r) {
        const o = n._getNodeRef(n.meshCache, s.mesh, r);
        return s.weights !== void 0 && o.traverse(function(a) {
          if (a.isMesh) for (let l = 0, c = s.weights.length; l < c; l++) a.morphTargetInfluences[l] = s.weights[l];
        }), o;
      });
    }
    loadNode(e) {
      const t = this.json, n = this, s = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = s.children || [];
      for (let c = 0, h = a.length; c < h; c++) o.push(n.getDependency("node", a[c]));
      const l = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
      return Promise.all([
        r,
        Promise.all(o),
        l
      ]).then(function(c) {
        const h = c[0], u = c[1], d = c[2];
        d !== null && h.traverse(function(p) {
          p.isSkinnedMesh && p.bind(d, lE);
        });
        for (let p = 0, _ = u.length; p < _; p++) h.add(u[p]);
        return h;
      });
    }
    _loadNodeShallow(e) {
      const t = this.json, n = this.extensions, s = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      const r = t.nodes[e], o = r.name ? s.createUniqueName(r.name) : "", a = [], l = s._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
      return l && a.push(l), r.camera !== void 0 && a.push(s.getDependency("camera", r.camera).then(function(c) {
        return s._getNodeRef(s.cameraCache, r.camera, c);
      })), s._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function(c) {
        a.push(c);
      }), this.nodeCache[e] = Promise.all(a).then(function(c) {
        let h;
        if (r.isBone === true ? h = new Zu() : c.length > 1 ? h = new Ci() : c.length === 1 ? h = c[0] : h = new ot(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
        if (r.name && (h.userData.name = r.name, h.name = o), Fn(h, r), r.extensions && Ei(n, h, r), r.matrix !== void 0) {
          const u = new Le();
          u.fromArray(r.matrix), h.applyMatrix4(u);
        } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
        return s.associations.has(h) || s.associations.set(h, {}), s.associations.get(h).nodes = e, h;
      }), this.nodeCache[e];
    }
    loadScene(e) {
      const t = this.extensions, n = this.json.scenes[e], s = this, r = new Ci();
      n.name && (r.name = s.createUniqueName(n.name)), Fn(r, n), n.extensions && Ei(t, r, n);
      const o = n.nodes || [], a = [];
      for (let l = 0, c = o.length; l < c; l++) a.push(s.getDependency("node", o[l]));
      return Promise.all(a).then(function(l) {
        for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
        const c = (h) => {
          const u = /* @__PURE__ */ new Map();
          for (const [d, p] of s.associations) (d instanceof xn || d instanceof bt) && u.set(d, p);
          return h.traverse((d) => {
            const p = s.associations.get(d);
            p != null && u.set(d, p);
          }), u;
        };
        return s.associations = c(r), r;
      });
    }
    _createAnimationTracks(e, t, n, s, r) {
      const o = [], a = e.name ? e.name : e.uuid, l = [];
      si[r.path] === si.weights ? e.traverse(function(d) {
        d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
      }) : l.push(a);
      let c;
      switch (si[r.path]) {
        case si.weights:
          c = bs;
          break;
        case si.rotation:
          c = Ms;
          break;
        case si.position:
        case si.scale:
          c = Ss;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              c = bs;
              break;
            case 2:
            case 3:
            default:
              c = Ss;
              break;
          }
          break;
      }
      const h = s.interpolation !== void 0 ? nE[s.interpolation] : Qs, u = this._getArrayFromAccessor(n);
      for (let d = 0, p = l.length; d < p; d++) {
        const _ = new c(l[d] + "." + si[r.path], t.array, u, h);
        s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), o.push(_);
      }
      return o;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        const n = _l(t.constructor), s = new Float32Array(t.length);
        for (let r = 0, o = t.length; r < o; r++) s[r] = t[r] * n;
        t = s;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      e.createInterpolant = function(n) {
        const s = this instanceof Ms ? tE : sp;
        return new s(this.times, this.values, this.getValueSize() / 3, n);
      }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  }
  function hE(i, e, t) {
    const n = e.attributes, s = new Kn();
    if (n.POSITION !== void 0) {
      const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
      if (l !== void 0 && c !== void 0) {
        if (s.set(new R(l[0], l[1], l[2]), new R(c[0], c[1], c[2])), a.normalized) {
          const h = _l(ps[a.componentType]);
          s.min.multiplyScalar(h), s.max.multiplyScalar(h);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else return;
    const r = e.targets;
    if (r !== void 0) {
      const a = new R(), l = new R();
      for (let c = 0, h = r.length; c < h; c++) {
        const u = r[c];
        if (u.POSITION !== void 0) {
          const d = t.json.accessors[u.POSITION], p = d.min, _ = d.max;
          if (p !== void 0 && _ !== void 0) {
            if (l.setX(Math.max(Math.abs(p[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(_[2]))), d.normalized) {
              const g = _l(ps[d.componentType]);
              l.multiplyScalar(g);
            }
            a.max(l);
          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
      s.expandByVector(a);
    }
    i.boundingBox = s;
    const o = new Sn();
    s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, i.boundingSphere = o;
  }
  function mu(i, e, t) {
    const n = e.attributes, s = [];
    function r(o, a) {
      return t.getDependency("accessor", o).then(function(l) {
        i.setAttribute(a, l);
      });
    }
    for (const o in n) {
      const a = ml[o] || o.toLowerCase();
      a in i.attributes || s.push(r(n[o], a));
    }
    if (e.indices !== void 0 && !i.index) {
      const o = t.getDependency("accessor", e.indices).then(function(a) {
        i.setIndex(a);
      });
      s.push(o);
    }
    return ze.workingColorSpace !== St && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`), Fn(i, e), hE(i, e, t), Promise.all(s).then(function() {
      return e.targets !== void 0 ? sE(i, e.targets, t) : i;
    });
  }
  const wa = /* @__PURE__ */ new WeakMap();
  class uE extends Di {
    constructor(e) {
      super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD"
      }, this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array"
      };
    }
    setDecoderPath(e) {
      return this.decoderPath = e, this;
    }
    setDecoderConfig(e) {
      return this.decoderConfig = e, this;
    }
    setWorkerLimit(e) {
      return this.workerLimit = e, this;
    }
    load(e, t, n, s) {
      const r = new uo(this.manager);
      r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, (o) => {
        this.parse(o, t, s);
      }, n, s);
    }
    parse(e, t, n = () => {
    }) {
      this.decodeDracoFile(e, t, null, null, At, n).catch(n);
    }
    decodeDracoFile(e, t, n, s, r = St, o = () => {
    }) {
      const a = {
        attributeIDs: n || this.defaultAttributeIDs,
        attributeTypes: s || this.defaultAttributeTypes,
        useUniqueIDs: !!n,
        vertexColorSpace: r
      };
      return this.decodeGeometry(e, a).then(t).catch(o);
    }
    decodeGeometry(e, t) {
      const n = JSON.stringify(t);
      if (wa.has(e)) {
        const l = wa.get(e);
        if (l.key === n) return l.promise;
        if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
      }
      let s;
      const r = this.workerNextTaskID++, o = e.byteLength, a = this._getWorker(r, o).then((l) => (s = l, new Promise((c, h) => {
        s._callbacks[r] = {
          resolve: c,
          reject: h
        }, s.postMessage({
          type: "decode",
          id: r,
          taskConfig: t,
          buffer: e
        }, [
          e
        ]);
      }))).then((l) => this._createGeometry(l.geometry));
      return a.catch(() => true).then(() => {
        s && r && this._releaseTask(s, r);
      }), wa.set(e, {
        key: n,
        promise: a
      }), a;
    }
    _createGeometry(e) {
      const t = new dn();
      e.index && t.setIndex(new Rt(e.index.array, 1));
      for (let n = 0; n < e.attributes.length; n++) {
        const s = e.attributes[n], r = s.name, o = s.array, a = s.itemSize, l = new Rt(o, a);
        r === "color" && (this._assignVertexColorSpace(l, s.vertexColorSpace), l.normalized = !(o instanceof Float32Array)), t.setAttribute(r, l);
      }
      return t;
    }
    _assignVertexColorSpace(e, t) {
      if (t !== At) return;
      const n = new Ae();
      for (let s = 0, r = e.count; s < r; s++) n.fromBufferAttribute(e, s).convertSRGBToLinear(), e.setXYZ(s, n.r, n.g, n.b);
    }
    _loadLibrary(e, t) {
      const n = new uo(this.manager);
      return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((s, r) => {
        n.load(e, s, void 0, r);
      });
    }
    preload() {
      return this._initDecoder(), this;
    }
    _initDecoder() {
      if (this.decoderPending) return this.decoderPending;
      const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
      return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
        const s = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const r = dE.toString(), o = [
          "/* draco decoder */",
          s,
          "",
          "/* worker */",
          r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([
          o
        ]));
      }), this.decoderPending;
    }
    _getWorker(e, t) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          const s = new Worker(this.workerSourceURL);
          s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({
            type: "init",
            decoderConfig: this.decoderConfig
          }), s.onmessage = function(r) {
            const o = r.data;
            switch (o.type) {
              case "decode":
                s._callbacks[o.id].resolve(o);
                break;
              case "error":
                s._callbacks[o.id].reject(o);
                break;
              default:
                console.error('THREE.DRACOLoader: Unexpected message, "' + o.type + '"');
            }
          }, this.workerPool.push(s);
        } else this.workerPool.sort(function(s, r) {
          return s._taskLoad > r._taskLoad ? -1 : 1;
        });
        const n = this.workerPool[this.workerPool.length - 1];
        return n._taskCosts[e] = t, n._taskLoad += t, n;
      });
    }
    _releaseTask(e, t) {
      e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
    }
    debug() {
      console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
    }
    dispose() {
      for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
      return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
    }
  }
  function dE() {
    let i, e;
    onmessage = function(o) {
      const a = o.data;
      switch (a.type) {
        case "init":
          i = a.decoderConfig, e = new Promise(function(h) {
            i.onModuleLoaded = function(u) {
              h({
                draco: u
              });
            }, DracoDecoderModule(i);
          });
          break;
        case "decode":
          const l = a.buffer, c = a.taskConfig;
          e.then((h) => {
            const u = h.draco, d = new u.Decoder();
            try {
              const p = t(u, d, new Int8Array(l), c), _ = p.attributes.map((g) => g.array.buffer);
              p.index && _.push(p.index.array.buffer), self.postMessage({
                type: "decode",
                id: a.id,
                geometry: p
              }, _);
            } catch (p) {
              console.error(p), self.postMessage({
                type: "error",
                id: a.id,
                error: p.message
              });
            } finally {
              u.destroy(d);
            }
          });
          break;
      }
    };
    function t(o, a, l, c) {
      const h = c.attributeIDs, u = c.attributeTypes;
      let d, p;
      const _ = a.GetEncodedGeometryType(l);
      if (_ === o.TRIANGULAR_MESH) d = new o.Mesh(), p = a.DecodeArrayToMesh(l, l.byteLength, d);
      else if (_ === o.POINT_CLOUD) d = new o.PointCloud(), p = a.DecodeArrayToPointCloud(l, l.byteLength, d);
      else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      if (!p.ok() || d.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
      const g = {
        index: null,
        attributes: []
      };
      for (const m in h) {
        const f = self[u[m]];
        let M, b;
        if (c.useUniqueIDs) b = h[m], M = a.GetAttributeByUniqueId(d, b);
        else {
          if (b = a.GetAttributeId(d, o[h[m]]), b === -1) continue;
          M = a.GetAttribute(d, b);
        }
        const E = s(o, a, d, m, f, M);
        m === "color" && (E.vertexColorSpace = c.vertexColorSpace), g.attributes.push(E);
      }
      return _ === o.TRIANGULAR_MESH && (g.index = n(o, a, d)), o.destroy(d), g;
    }
    function n(o, a, l) {
      const h = l.num_faces() * 3, u = h * 4, d = o._malloc(u);
      a.GetTrianglesUInt32Array(l, u, d);
      const p = new Uint32Array(o.HEAPF32.buffer, d, h).slice();
      return o._free(d), {
        array: p,
        itemSize: 1
      };
    }
    function s(o, a, l, c, h, u) {
      const d = u.num_components(), _ = l.num_points() * d, g = _ * h.BYTES_PER_ELEMENT, m = r(o, h), f = o._malloc(g);
      a.GetAttributeDataArrayForAllPoints(l, u, m, g, f);
      const M = new h(o.HEAPF32.buffer, f, _).slice();
      return o._free(f), {
        name: c,
        array: M,
        itemSize: d
      };
    }
    function r(o, a) {
      switch (a) {
        case Float32Array:
          return o.DT_FLOAT32;
        case Int8Array:
          return o.DT_INT8;
        case Int16Array:
          return o.DT_INT16;
        case Int32Array:
          return o.DT_INT32;
        case Uint8Array:
          return o.DT_UINT8;
        case Uint16Array:
          return o.DT_UINT16;
        case Uint32Array:
          return o.DT_UINT32;
      }
    }
  }
  class pE {
    constructor() {
      this.assetStore = Lo.getState(), this.assetsToLoad = this.assetStore.assetsToLoad, this.addLoadedAsset = this.assetStore.addLoadedAsset, this.instantiateLoaders(), this.startLoading();
    }
    instantiateLoaders() {
      const e = new uE();
      e.setDecoderPath("/draco/"), this.gltfLoader = new PS(), this.gltfLoader.setDRACOLoader(e), this.textureLoader = new sd();
    }
    startLoading() {
      this.assetsToLoad.forEach((e) => {
        e.type === "texture" && this.textureLoader.load(e.path, (t) => {
          this.addLoadedAsset(t, e.id);
        }), e.type === "model" && this.gltfLoader.load(e.path, (t) => {
          this.addLoadedAsset(t, e.id);
        });
      });
    }
  }
  class fE {
    constructor() {
      this.assetStore = Lo, this.overlay = document.querySelector(".overlay"), this.loading = document.querySelector(".loading"), this.startButton = document.querySelector(".start"), this.assetStore.subscribe((e) => {
        this.numberOfLoadedAssets = Object.keys(e.loadedAssets).length, this.numberOfAssetsToLoad = e.assetsToLoad.length, this.progress = this.numberOfLoadedAssets / this.numberOfAssetsToLoad, this.progress = Math.trunc(this.progress * 100), document.getElementById("progressPercentage").innerHTML = this.progress, this.progress === 100 && (kl.setState({
          assetsReady: true
        }), this.loading.classList.add("fade"), window.setTimeout(() => this.ready(), 1200));
      });
    }
    ready() {
      this.loading.remove(), this.startButton.style.display = "inline", this.startButton.classList.add("fadeIn"), this.startButton.addEventListener("click", () => {
        console.log("started"), this.overlay.classList.add("fade"), this.startButton.classList.add("fadeOut"), window.setTimeout(() => {
          this.overlay.remove(), this.startButton.remove();
        }, 2e3);
      }, {
        once: true
      });
    }
  }
  class mE {
    constructor() {
      this.startListening(), this.inputStore = ln, this.keyPressed = {};
    }
    startListening() {
      window.addEventListener("keydown", (e) => this.onKeyDown(e)), window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    onKeyDown(e) {
      if (!this.keyPressed[e.code]) {
        switch (e.code) {
          case "KeyW":
          case "ArrowUp":
            console.log("forward"), ln.setState({
              forward: true
            });
            break;
          case "KeyA":
          case "ArrowLeft":
            ln.setState({
              left: true
            });
            break;
          case "KeyS":
          case "ArrowDown":
            ln.setState({
              backward: true
            });
            break;
          case "KeyD":
          case "ArrowRight":
            ln.setState({
              right: true
            });
            break;
        }
        this.keyPressed[e.code] = true;
      }
    }
    onKeyUp(e) {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          ln.setState({
            forward: false
          });
          break;
        case "KeyA":
        case "ArrowLeft":
          ln.setState({
            left: false
          });
          break;
        case "KeyS":
        case "ArrowDown":
          ln.setState({
            backward: false
          });
          break;
        case "KeyD":
        case "ArrowRight":
          ln.setState({
            right: false
          });
          break;
      }
      this.keyPressed[e.code] = false;
    }
  }
  let Ta = null;
  class pn {
    constructor() {
      if (Ta) return Ta;
      Ta = this, this.canvas = document.querySelector("canvas.threejs"), this.scene = new Nx(), this.gui = new _S(), this.assetLoader = new pE(), this.preloader = new fE(), this.inputController = new mE(), this.world = new CS(), this.camera = new B0(), this.renderer = new k0(), this.loop = new V0(), this.resize = new RS();
    }
  }
  new pn();
})();
