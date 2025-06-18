let i;
const v = new Array(128).fill(void 0);
v.push(void 0, null, true, false);
let at = v.length;
function rt(s) {
  at === v.length && v.push(v.length + 1);
  const t = at;
  return at = v[t], v[t] = s, t;
}
function Tr(s) {
  return v[s];
}
function Mr(s) {
  s < 132 || (v[s] = at, at = s);
}
function Rt(s) {
  const t = Tr(s);
  return Mr(s), t;
}
function b(s) {
  return s == null;
}
let ut = null;
function St() {
  return (ut === null || ut.byteLength === 0) && (ut = new Float64Array(i.memory.buffer)), ut;
}
let gt = null;
function m() {
  return (gt === null || gt.byteLength === 0) && (gt = new Int32Array(i.memory.buffer)), gt;
}
const kr = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
let Ze = new kr("utf-8", { ignoreBOM: true, fatal: true });
Ze.decode();
let bt = null;
function Dr() {
  return (bt === null || bt.byteLength === 0) && (bt = new Uint8Array(i.memory.buffer)), bt;
}
function Nr(s, t) {
  return s = s >>> 0, Ze.decode(Dr().subarray(s, s + t));
}
function Hr() {
  let s, t;
  try {
    const n = i.__wbindgen_add_to_stack_pointer(-16);
    i.version(n);
    var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
    return s = e, t = r, Nr(e, r);
  } finally {
    i.__wbindgen_add_to_stack_pointer(16), i.__wbindgen_free(s, t, 1);
  }
}
function _(s, t) {
  if (!(s instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return s.ptr;
}
let ft = null;
function I() {
  return (ft === null || ft.byteLength === 0) && (ft = new Float32Array(i.memory.buffer)), ft;
}
let C = 128;
function P(s) {
  if (C == 1) throw new Error("out of js stack");
  return v[--C] = s, C;
}
function Ie(s, t) {
  return s = s >>> 0, I().subarray(s / 4, s / 4 + t);
}
let mt = null;
function $e() {
  return (mt === null || mt.byteLength === 0) && (mt = new Uint32Array(i.memory.buffer)), mt;
}
function Lr(s, t) {
  return s = s >>> 0, $e().subarray(s / 4, s / 4 + t);
}
let N = 0;
function $(s, t) {
  const e = t(s.length * 4, 4) >>> 0;
  return I().set(s, e / 4), N = s.length, e;
}
function yt(s, t) {
  const e = t(s.length * 4, 4) >>> 0;
  return $e().set(s, e / 4), N = s.length, e;
}
const M = Object.freeze({ Ball: 0, 0: "Ball", Cuboid: 1, 1: "Cuboid", Capsule: 2, 2: "Capsule", Segment: 3, 3: "Segment", Polyline: 4, 4: "Polyline", Triangle: 5, 5: "Triangle", TriMesh: 6, 6: "TriMesh", HeightField: 7, 7: "HeightField", Compound: 8, 8: "Compound", ConvexPolyhedron: 9, 9: "ConvexPolyhedron", Cylinder: 10, 10: "Cylinder", Cone: 11, 11: "Cone", RoundCuboid: 12, 12: "RoundCuboid", RoundTriangle: 13, 13: "RoundTriangle", RoundCylinder: 14, 14: "RoundCylinder", RoundCone: 15, 15: "RoundCone", RoundConvexPolyhedron: 16, 16: "RoundConvexPolyhedron", HalfSpace: 17, 17: "HalfSpace" }), xt = Object.freeze({ LinX: 0, 0: "LinX", LinY: 1, 1: "LinY", LinZ: 2, 2: "LinZ", AngX: 3, 3: "AngX", AngY: 4, 4: "AngY", AngZ: 5, 5: "AngZ" }), G = Object.freeze({ Revolute: 0, 0: "Revolute", Fixed: 1, 1: "Fixed", Prismatic: 2, 2: "Prismatic", Rope: 3, 3: "Rope", Spring: 4, 4: "Spring", Spherical: 5, 5: "Spherical", Generic: 6, 6: "Generic" }), Pe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawbroadphase_free(s >>> 0));
class tt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(tt.prototype);
    return e.__wbg_ptr = t, Pe.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pe.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawbroadphase_free(t);
  }
  constructor() {
    const t = i.rawbroadphase_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
}
const Gr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawccdsolver_free(s >>> 0));
class qt {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Gr.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawccdsolver_free(t);
  }
  constructor() {
    const t = i.rawccdsolver_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
}
const Wr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawcharactercollision_free(s >>> 0));
class Qe {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wr.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawcharactercollision_free(t);
  }
  constructor() {
    const t = i.rawcharactercollision_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  handle() {
    return i.rawcharactercollision_handle(this.__wbg_ptr);
  }
  translationDeltaApplied() {
    const t = i.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return w.__wrap(t);
  }
  translationDeltaRemaining() {
    const t = i.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
    return w.__wrap(t);
  }
  toi() {
    return i.rawcharactercollision_toi(this.__wbg_ptr);
  }
  worldWitness1() {
    const t = i.rawcharactercollision_worldWitness1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  worldWitness2() {
    const t = i.rawcharactercollision_worldWitness2(this.__wbg_ptr);
    return w.__wrap(t);
  }
  worldNormal1() {
    const t = i.rawcharactercollision_worldNormal1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  worldNormal2() {
    const t = i.rawcharactercollision_worldNormal2(this.__wbg_ptr);
    return w.__wrap(t);
  }
}
const Ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawcolliderset_free(s >>> 0));
class A {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(A.prototype);
    return e.__wbg_ptr = t, Ae.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ae.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawcolliderset_free(t);
  }
  coTranslation(t) {
    const e = i.rawcolliderset_coTranslation(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  coRotation(t) {
    const e = i.rawcolliderset_coRotation(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  coSetTranslation(t, e, r, n) {
    i.rawcolliderset_coSetTranslation(this.__wbg_ptr, t, e, r, n);
  }
  coSetTranslationWrtParent(t, e, r, n) {
    i.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, t, e, r, n);
  }
  coSetRotation(t, e, r, n, a) {
    i.rawcolliderset_coSetRotation(this.__wbg_ptr, t, e, r, n, a);
  }
  coSetRotationWrtParent(t, e, r, n, a) {
    i.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, t, e, r, n, a);
  }
  coIsSensor(t) {
    return i.rawcolliderset_coIsSensor(this.__wbg_ptr, t) !== 0;
  }
  coShapeType(t) {
    return i.rawcolliderset_coShapeType(this.__wbg_ptr, t);
  }
  coHalfspaceNormal(t) {
    const e = i.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  coHalfExtents(t) {
    const e = i.rawcolliderset_coHalfExtents(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  coSetHalfExtents(t, e) {
    _(e, w), i.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  coRadius(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coRadius(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetRadius(t, e) {
    i.rawcolliderset_coSetRadius(this.__wbg_ptr, t, e);
  }
  coHalfHeight(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coHalfHeight(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetHalfHeight(t, e) {
    i.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, t, e);
  }
  coRoundRadius(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coRoundRadius(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetRoundRadius(t, e) {
    i.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, t, e);
  }
  coVertices(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coVertices(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
      let a;
      return e !== 0 && (a = Ie(e, r).slice(), i.__wbindgen_free(e, r * 4, 4)), a;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coIndices(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coIndices(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
      let a;
      return e !== 0 && (a = Lr(e, r).slice(), i.__wbindgen_free(e, r * 4, 4)), a;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coTriMeshFlags(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coTriMeshFlags(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
      return e === 0 ? void 0 : r >>> 0;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightFieldFlags(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coHeightFieldFlags(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
      return e === 0 ? void 0 : r >>> 0;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldHeights(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coHeightfieldHeights(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
      let a;
      return e !== 0 && (a = Ie(e, r).slice(), i.__wbindgen_free(e, r * 4, 4)), a;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldScale(t) {
    const e = i.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  coHeightfieldNRows(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coHeightfieldNRows(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
      return e === 0 ? void 0 : r >>> 0;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldNCols(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coHeightfieldNCols(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = m()[n / 4 + 1];
      return e === 0 ? void 0 : r >>> 0;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coParent(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawcolliderset_coParent(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = St()[n / 8 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetEnabled(t, e) {
    i.rawcolliderset_coSetEnabled(this.__wbg_ptr, t, e);
  }
  coIsEnabled(t) {
    return i.rawcolliderset_coIsEnabled(this.__wbg_ptr, t) !== 0;
  }
  coSetContactSkin(t, e) {
    i.rawcolliderset_coSetContactSkin(this.__wbg_ptr, t, e);
  }
  coContactSkin(t) {
    return i.rawcolliderset_coContactSkin(this.__wbg_ptr, t);
  }
  coFriction(t) {
    return i.rawcolliderset_coFriction(this.__wbg_ptr, t);
  }
  coRestitution(t) {
    return i.rawcolliderset_coRestitution(this.__wbg_ptr, t);
  }
  coDensity(t) {
    return i.rawcolliderset_coDensity(this.__wbg_ptr, t);
  }
  coMass(t) {
    return i.rawcolliderset_coMass(this.__wbg_ptr, t);
  }
  coVolume(t) {
    return i.rawcolliderset_coVolume(this.__wbg_ptr, t);
  }
  coCollisionGroups(t) {
    return i.rawcolliderset_coCollisionGroups(this.__wbg_ptr, t) >>> 0;
  }
  coSolverGroups(t) {
    return i.rawcolliderset_coSolverGroups(this.__wbg_ptr, t) >>> 0;
  }
  coActiveHooks(t) {
    return i.rawcolliderset_coActiveHooks(this.__wbg_ptr, t) >>> 0;
  }
  coActiveCollisionTypes(t) {
    return i.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, t);
  }
  coActiveEvents(t) {
    return i.rawcolliderset_coActiveEvents(this.__wbg_ptr, t) >>> 0;
  }
  coContactForceEventThreshold(t) {
    return i.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, t);
  }
  coContainsPoint(t, e) {
    return _(e, w), i.rawcolliderset_coContainsPoint(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
  }
  coCastShape(t, e, r, n, a, o, l, h, d) {
    _(e, w), _(r, f), _(n, w), _(a, S), _(o, w);
    const p = i.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, l, h, d);
    return p === 0 ? void 0 : Mt.__wrap(p);
  }
  coCastCollider(t, e, r, n, a, o, l) {
    _(e, w), _(n, w);
    const h = i.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a, o, l);
    return h === 0 ? void 0 : jt.__wrap(h);
  }
  coIntersectsShape(t, e, r, n) {
    return _(e, f), _(r, w), _(n, S), i.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr) !== 0;
  }
  coContactShape(t, e, r, n, a) {
    _(e, f), _(r, w), _(n, S);
    const o = i.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a);
    return o === 0 ? void 0 : ot.__wrap(o);
  }
  coContactCollider(t, e, r) {
    const n = i.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, r);
    return n === 0 ? void 0 : ot.__wrap(n);
  }
  coProjectPoint(t, e, r) {
    _(e, w);
    const n = i.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, r);
    return zt.__wrap(n);
  }
  coIntersectsRay(t, e, r, n) {
    return _(e, w), _(r, w), i.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n) !== 0;
  }
  coCastRay(t, e, r, n, a) {
    return _(e, w), _(r, w), i.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a);
  }
  coCastRayAndGetNormal(t, e, r, n, a) {
    _(e, w), _(r, w);
    const o = i.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a);
    return o === 0 ? void 0 : Tt.__wrap(o);
  }
  coSetSensor(t, e) {
    i.rawcolliderset_coSetSensor(this.__wbg_ptr, t, e);
  }
  coSetRestitution(t, e) {
    i.rawcolliderset_coSetRestitution(this.__wbg_ptr, t, e);
  }
  coSetFriction(t, e) {
    i.rawcolliderset_coSetFriction(this.__wbg_ptr, t, e);
  }
  coFrictionCombineRule(t) {
    return i.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, t) >>> 0;
  }
  coSetFrictionCombineRule(t, e) {
    i.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, t, e);
  }
  coRestitutionCombineRule(t) {
    return i.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, t) >>> 0;
  }
  coSetRestitutionCombineRule(t, e) {
    i.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, t, e);
  }
  coSetCollisionGroups(t, e) {
    i.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, t, e);
  }
  coSetSolverGroups(t, e) {
    i.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, t, e);
  }
  coSetActiveHooks(t, e) {
    i.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, t, e);
  }
  coSetActiveEvents(t, e) {
    i.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, t, e);
  }
  coSetActiveCollisionTypes(t, e) {
    i.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, t, e);
  }
  coSetShape(t, e) {
    _(e, f), i.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  coSetContactForceEventThreshold(t, e) {
    i.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, t, e);
  }
  coSetDensity(t, e) {
    i.rawcolliderset_coSetDensity(this.__wbg_ptr, t, e);
  }
  coSetMass(t, e) {
    i.rawcolliderset_coSetMass(this.__wbg_ptr, t, e);
  }
  coSetMassProperties(t, e, r, n, a) {
    _(r, w), _(n, w), _(a, S), i.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr);
  }
  constructor() {
    const t = i.rawcolliderset_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  len() {
    return i.rawcolliderset_len(this.__wbg_ptr) >>> 0;
  }
  contains(t) {
    return i.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
  }
  createCollider(t, e, r, n, a, o, l, h, d, p, u, g, y, E, D, H, B, U, Z, Ht, Lt, Gt, Wt, Ot, pt) {
    try {
      const Ut = i.__wbindgen_add_to_stack_pointer(-16);
      _(e, f), _(r, w), _(n, S), _(l, w), _(h, w), _(d, S), _(pt, F), i.rawcolliderset_createCollider(Ut, this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, o, l.__wbg_ptr, h.__wbg_ptr, d.__wbg_ptr, p, u, g, y, E, D, H, B, U, Z, Ht, Lt, Gt, Wt, Ot, pt.__wbg_ptr);
      var Bt = m()[Ut / 4 + 0], Ee = St()[Ut / 8 + 1];
      return Bt === 0 ? void 0 : Ee;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  remove(t, e, r, n) {
    _(e, V), _(r, F), i.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
  }
  isHandleValid(t) {
    return i.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
  }
  forEachColliderHandle(t) {
    try {
      i.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, P(t));
    } finally {
      v[C++] = void 0;
    }
  }
}
const Fe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawcollidershapecasthit_free(s >>> 0));
class jt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(jt.prototype);
    return e.__wbg_ptr = t, Fe.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fe.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawcollidershapecasthit_free(t);
  }
  colliderHandle() {
    return i.rawcharactercollision_handle(this.__wbg_ptr);
  }
  time_of_impact() {
    return i.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
  }
  witness1() {
    const t = i.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  witness2() {
    const t = i.rawcollidershapecasthit_witness2(this.__wbg_ptr);
    return w.__wrap(t);
  }
  normal1() {
    const t = i.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return w.__wrap(t);
  }
  normal2() {
    const t = i.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
    return w.__wrap(t);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((s) => i.__wbg_rawcontactforceevent_free(s >>> 0));
const xe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawcontactmanifold_free(s >>> 0));
class ie {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ie.prototype);
    return e.__wbg_ptr = t, xe.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xe.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawcontactmanifold_free(t);
  }
  normal() {
    const t = i.rawcontactmanifold_normal(this.__wbg_ptr);
    return w.__wrap(t);
  }
  local_n1() {
    const t = i.rawcontactmanifold_local_n1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  local_n2() {
    const t = i.rawcontactmanifold_local_n2(this.__wbg_ptr);
    return w.__wrap(t);
  }
  subshape1() {
    return i.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
  }
  subshape2() {
    return i.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
  }
  num_contacts() {
    return i.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
  }
  contact_local_p1(t) {
    const e = i.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  contact_local_p2(t) {
    const e = i.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  contact_dist(t) {
    return i.rawcontactmanifold_contact_dist(this.__wbg_ptr, t);
  }
  contact_fid1(t) {
    return i.rawcontactmanifold_contact_fid1(this.__wbg_ptr, t) >>> 0;
  }
  contact_fid2(t) {
    return i.rawcontactmanifold_contact_fid2(this.__wbg_ptr, t) >>> 0;
  }
  contact_impulse(t) {
    return i.rawcontactmanifold_contact_impulse(this.__wbg_ptr, t);
  }
  contact_tangent_impulse_x(t) {
    return i.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr, t);
  }
  contact_tangent_impulse_y(t) {
    return i.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr, t);
  }
  num_solver_contacts() {
    return i.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
  }
  solver_contact_point(t) {
    const e = i.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  solver_contact_dist(t) {
    return i.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, t);
  }
  solver_contact_friction(t) {
    return i.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, t);
  }
  solver_contact_restitution(t) {
    return i.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, t);
  }
  solver_contact_tangent_velocity(t) {
    const e = i.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
}
const je = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawcontactpair_free(s >>> 0));
class ne {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ne.prototype);
    return e.__wbg_ptr = t, je.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, je.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawcontactpair_free(t);
  }
  collider1() {
    return i.rawcontactpair_collider1(this.__wbg_ptr);
  }
  collider2() {
    return i.rawcontactpair_collider2(this.__wbg_ptr);
  }
  numContactManifolds() {
    return i.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
  }
  contactManifold(t) {
    const e = i.rawcontactpair_contactManifold(this.__wbg_ptr, t);
    return e === 0 ? void 0 : ie.__wrap(e);
  }
}
const Or = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawdebugrenderpipeline_free(s >>> 0));
class Br {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Or.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawdebugrenderpipeline_free(t);
  }
  constructor() {
    const t = i.rawdebugrenderpipeline_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  vertices() {
    const t = i.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
    return Rt(t);
  }
  colors() {
    const t = i.rawdebugrenderpipeline_colors(this.__wbg_ptr);
    return Rt(t);
  }
  render(t, e, r, n, a) {
    _(t, F), _(e, A), _(r, X), _(n, J), _(a, K), i.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr);
  }
}
const ze = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawdeserializedworld_free(s >>> 0));
class se {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(se.prototype);
    return e.__wbg_ptr = t, ze.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ze.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawdeserializedworld_free(t);
  }
  takeGravity() {
    const t = i.rawdeserializedworld_takeGravity(this.__wbg_ptr);
    return t === 0 ? void 0 : w.__wrap(t);
  }
  takeIntegrationParameters() {
    const t = i.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
    return t === 0 ? void 0 : et.__wrap(t);
  }
  takeIslandManager() {
    const t = i.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
    return t === 0 ? void 0 : V.__wrap(t);
  }
  takeBroadPhase() {
    const t = i.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
    return t === 0 ? void 0 : tt.__wrap(t);
  }
  takeNarrowPhase() {
    const t = i.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
    return t === 0 ? void 0 : K.__wrap(t);
  }
  takeBodies() {
    const t = i.rawdeserializedworld_takeBodies(this.__wbg_ptr);
    return t === 0 ? void 0 : F.__wrap(t);
  }
  takeColliders() {
    const t = i.rawdeserializedworld_takeColliders(this.__wbg_ptr);
    return t === 0 ? void 0 : A.__wrap(t);
  }
  takeImpulseJoints() {
    const t = i.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
    return t === 0 ? void 0 : X.__wrap(t);
  }
  takeMultibodyJoints() {
    const t = i.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
    return t === 0 ? void 0 : J.__wrap(t);
  }
}
const Ur = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawdynamicraycastvehiclecontroller_free(s >>> 0));
class qr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ur.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawdynamicraycastvehiclecontroller_free(t);
  }
  constructor(t) {
    const e = i.rawdynamicraycastvehiclecontroller_new(t);
    return this.__wbg_ptr = e >>> 0, this;
  }
  current_vehicle_speed() {
    return i.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
  }
  chassis() {
    return i.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
  }
  index_up_axis() {
    return i.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
  }
  set_index_up_axis(t) {
    i.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
  }
  index_forward_axis() {
    return i.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
  }
  set_index_forward_axis(t) {
    i.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
  }
  add_wheel(t, e, r, n, a) {
    _(t, w), _(e, w), _(r, w), i.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a);
  }
  num_wheels() {
    return i.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
  }
  update_vehicle(t, e, r, n, a, o, l) {
    try {
      _(e, F), _(r, A), _(n, ae), i.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, !b(o), b(o) ? 0 : o, P(l));
    } finally {
      v[C++] = void 0;
    }
  }
  wheel_chassis_connection_point_cs(t) {
    const e = i.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  set_wheel_chassis_connection_point_cs(t, e) {
    _(e, w), i.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  wheel_suspension_rest_length(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_rest_length(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr, t, e);
  }
  wheel_max_suspension_travel(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_max_suspension_travel(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr, t, e);
  }
  wheel_radius(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_radius(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_radius(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr, t, e);
  }
  wheel_suspension_stiffness(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_stiffness(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr, t, e);
  }
  wheel_suspension_compression(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_compression(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr, t, e);
  }
  wheel_suspension_relaxation(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_relaxation(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr, t, e);
  }
  wheel_max_suspension_force(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_max_suspension_force(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr, t, e);
  }
  wheel_brake(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_brake(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_brake(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr, t, e);
  }
  wheel_steering(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_steering(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_steering(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr, t, e);
  }
  wheel_engine_force(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_engine_force(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_engine_force(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr, t, e);
  }
  wheel_direction_cs(t) {
    const e = i.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  set_wheel_direction_cs(t, e) {
    _(e, w), i.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  wheel_axle_cs(t) {
    const e = i.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  set_wheel_axle_cs(t, e) {
    _(e, w), i.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  wheel_friction_slip(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_friction_slip(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_friction_slip(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr, t, e);
  }
  wheel_side_friction_stiffness(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_side_friction_stiffness(t, e) {
    i.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr, t, e);
  }
  wheel_rotation(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_rotation(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_forward_impulse(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_side_impulse(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_side_impulse(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_suspension_force(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_suspension_force(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_contact_normal_ws(t) {
    const e = i.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  wheel_contact_point_ws(t) {
    const e = i.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  wheel_suspension_length(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_suspension_length(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = I()[n / 4 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_hard_point_ws(t) {
    const e = i.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, t);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  wheel_is_in_contact(t) {
    return i.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, t) !== 0;
  }
  wheel_ground_object(t) {
    try {
      const n = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawdynamicraycastvehiclecontroller_wheel_ground_object(n, this.__wbg_ptr, t);
      var e = m()[n / 4 + 0], r = St()[n / 8 + 1];
      return e === 0 ? void 0 : r;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const Xr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_raweventqueue_free(s >>> 0));
class tr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xr.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_raweventqueue_free(t);
  }
  constructor(t) {
    const e = i.raweventqueue_new(t);
    return this.__wbg_ptr = e >>> 0, this;
  }
  drainCollisionEvents(t) {
    try {
      i.raweventqueue_drainCollisionEvents(this.__wbg_ptr, P(t));
    } finally {
      v[C++] = void 0;
    }
  }
  drainContactForceEvents(t) {
    try {
      i.raweventqueue_drainContactForceEvents(this.__wbg_ptr, P(t));
    } finally {
      v[C++] = void 0;
    }
  }
  clear() {
    i.raweventqueue_clear(this.__wbg_ptr);
  }
}
const Te = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawgenericjoint_free(s >>> 0));
class T {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(T.prototype);
    return e.__wbg_ptr = t, Te.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Te.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawgenericjoint_free(t);
  }
  static generic(t, e, r, n) {
    _(t, w), _(e, w), _(r, w);
    const a = i.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
    return a === 0 ? void 0 : T.__wrap(a);
  }
  static spring(t, e, r, n, a) {
    _(n, w), _(a, w);
    const o = i.rawgenericjoint_spring(t, e, r, n.__wbg_ptr, a.__wbg_ptr);
    return T.__wrap(o);
  }
  static rope(t, e, r) {
    _(e, w), _(r, w);
    const n = i.rawgenericjoint_rope(t, e.__wbg_ptr, r.__wbg_ptr);
    return T.__wrap(n);
  }
  static spherical(t, e) {
    _(t, w), _(e, w);
    const r = i.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
    return T.__wrap(r);
  }
  static prismatic(t, e, r, n, a, o) {
    _(t, w), _(e, w), _(r, w);
    const l = i.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a, o);
    return l === 0 ? void 0 : T.__wrap(l);
  }
  static fixed(t, e, r, n) {
    _(t, w), _(e, S), _(r, w), _(n, S);
    const a = i.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr);
    return T.__wrap(a);
  }
  static revolute(t, e, r) {
    _(t, w), _(e, w), _(r, w);
    const n = i.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
    return n === 0 ? void 0 : T.__wrap(n);
  }
}
const Me = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawimpulsejointset_free(s >>> 0));
class X {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(X.prototype);
    return e.__wbg_ptr = t, Me.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Me.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawimpulsejointset_free(t);
  }
  jointType(t) {
    return i.rawimpulsejointset_jointType(this.__wbg_ptr, t);
  }
  jointBodyHandle1(t) {
    return i.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, t);
  }
  jointBodyHandle2(t) {
    return i.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, t);
  }
  jointFrameX1(t) {
    const e = i.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  jointFrameX2(t) {
    const e = i.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  jointAnchor1(t) {
    const e = i.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  jointAnchor2(t) {
    const e = i.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  jointSetAnchor1(t, e) {
    _(e, w), i.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  jointSetAnchor2(t, e) {
    _(e, w), i.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  jointContactsEnabled(t) {
    return i.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
  }
  jointSetContactsEnabled(t, e) {
    i.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
  }
  jointLimitsEnabled(t, e) {
    return i.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
  }
  jointLimitsMin(t, e) {
    return i.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, t, e);
  }
  jointLimitsMax(t, e) {
    return i.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, t, e);
  }
  jointSetLimits(t, e, r, n) {
    i.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, t, e, r, n);
  }
  jointConfigureMotorModel(t, e, r) {
    i.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, t, e, r);
  }
  jointConfigureMotorVelocity(t, e, r, n) {
    i.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, t, e, r, n);
  }
  jointConfigureMotorPosition(t, e, r, n, a) {
    i.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, t, e, r, n, a);
  }
  jointConfigureMotor(t, e, r, n, a, o) {
    i.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, t, e, r, n, a, o);
  }
  constructor() {
    const t = i.rawimpulsejointset_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  createJoint(t, e, r, n) {
    return _(t, T), i.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
  }
  remove(t, e) {
    i.rawimpulsejointset_remove(this.__wbg_ptr, t, e);
  }
  len() {
    return i.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
  }
  contains(t) {
    return i.rawimpulsejointset_contains(this.__wbg_ptr, t) !== 0;
  }
  forEachJointHandle(t) {
    try {
      i.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, P(t));
    } finally {
      v[C++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(t, e) {
    try {
      i.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, P(e));
    } finally {
      v[C++] = void 0;
    }
  }
}
const ke = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawintegrationparameters_free(s >>> 0));
class et {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(et.prototype);
    return e.__wbg_ptr = t, ke.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ke.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawintegrationparameters_free(t);
  }
  constructor() {
    const t = i.rawintegrationparameters_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  get dt() {
    return i.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  get contact_erp() {
    return i.rawintegrationparameters_contact_erp(this.__wbg_ptr);
  }
  get normalizedAllowedLinearError() {
    return i.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
  }
  get normalizedPredictionDistance() {
    return i.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
  }
  get numSolverIterations() {
    return i.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
  }
  get numAdditionalFrictionIterations() {
    return i.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
  }
  get numInternalPgsIterations() {
    return i.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
  }
  get minIslandSize() {
    return i.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
  }
  get maxCcdSubsteps() {
    return i.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
  }
  get lengthUnit() {
    return i.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
  }
  set dt(t) {
    i.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
  }
  set contact_natural_frequency(t) {
    i.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, t);
  }
  set normalizedAllowedLinearError(t) {
    i.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, t);
  }
  set normalizedPredictionDistance(t) {
    i.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, t);
  }
  set numSolverIterations(t) {
    i.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, t);
  }
  set numAdditionalFrictionIterations(t) {
    i.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
  }
  set numInternalPgsIterations(t) {
    i.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
  }
  set minIslandSize(t) {
    i.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, t);
  }
  set maxCcdSubsteps(t) {
    i.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, t);
  }
  set lengthUnit(t) {
    i.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, t);
  }
  switchToStandardPgsSolver() {
    i.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
  }
  switchToSmallStepsPgsSolver() {
    i.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
  }
  switchToSmallStepsPgsSolverWithoutWarmstart() {
    i.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
  }
}
const De = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawislandmanager_free(s >>> 0));
class V {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(V.prototype);
    return e.__wbg_ptr = t, De.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, De.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawislandmanager_free(t);
  }
  constructor() {
    const t = i.rawislandmanager_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  forEachActiveRigidBodyHandle(t) {
    try {
      i.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, P(t));
    } finally {
      v[C++] = void 0;
    }
  }
}
const Vr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawkinematiccharactercontroller_free(s >>> 0));
class Jr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Vr.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawkinematiccharactercontroller_free(t);
  }
  constructor(t) {
    const e = i.rawkinematiccharactercontroller_new(t);
    return this.__wbg_ptr = e >>> 0, this;
  }
  up() {
    const t = i.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return w.__wrap(t);
  }
  setUp(t) {
    _(t, w), i.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, t.__wbg_ptr);
  }
  normalNudgeFactor() {
    return i.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
  }
  setNormalNudgeFactor(t) {
    i.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, t);
  }
  offset() {
    return i.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  setOffset(t) {
    i.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, t);
  }
  slideEnabled() {
    return i.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
  }
  setSlideEnabled(t) {
    i.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, t);
  }
  autostepMaxHeight() {
    try {
      const r = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawkinematiccharactercontroller_autostepMaxHeight(r, this.__wbg_ptr);
      var t = m()[r / 4 + 0], e = I()[r / 4 + 1];
      return t === 0 ? void 0 : e;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepMinWidth() {
    try {
      const r = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawkinematiccharactercontroller_autostepMinWidth(r, this.__wbg_ptr);
      var t = m()[r / 4 + 0], e = I()[r / 4 + 1];
      return t === 0 ? void 0 : e;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepIncludesDynamicBodies() {
    const t = i.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
    return t === 16777215 ? void 0 : t !== 0;
  }
  autostepEnabled() {
    return i.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
  }
  enableAutostep(t, e, r) {
    i.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, t, e, r);
  }
  disableAutostep() {
    i.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
  }
  maxSlopeClimbAngle() {
    return i.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
  }
  setMaxSlopeClimbAngle(t) {
    i.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, t);
  }
  minSlopeSlideAngle() {
    return i.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
  }
  setMinSlopeSlideAngle(t) {
    i.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, t);
  }
  snapToGroundDistance() {
    try {
      const r = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawkinematiccharactercontroller_snapToGroundDistance(r, this.__wbg_ptr);
      var t = m()[r / 4 + 0], e = I()[r / 4 + 1];
      return t === 0 ? void 0 : e;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  enableSnapToGround(t) {
    i.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, t);
  }
  disableSnapToGround() {
    i.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
  }
  snapToGroundEnabled() {
    return i.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
  }
  computeColliderMovement(t, e, r, n, a, o, l, h, d, p, u) {
    try {
      _(e, F), _(r, A), _(n, ae), _(o, w), i.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, o.__wbg_ptr, l, !b(h), b(h) ? 0 : h, d, !b(p), b(p) ? 0 : p, P(u));
    } finally {
      v[C++] = void 0;
    }
  }
  computedMovement() {
    const t = i.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
    return w.__wrap(t);
  }
  computedGrounded() {
    return i.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
  }
  numComputedCollisions() {
    return i.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
  }
  computedCollision(t, e) {
    return _(e, Qe), i.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
  }
}
const Ne = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawmultibodyjointset_free(s >>> 0));
class J {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(J.prototype);
    return e.__wbg_ptr = t, Ne.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ne.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawmultibodyjointset_free(t);
  }
  jointType(t) {
    return i.rawmultibodyjointset_jointType(this.__wbg_ptr, t);
  }
  jointFrameX1(t) {
    const e = i.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  jointFrameX2(t) {
    const e = i.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  jointAnchor1(t) {
    const e = i.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  jointAnchor2(t) {
    const e = i.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  jointContactsEnabled(t) {
    return i.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
  }
  jointSetContactsEnabled(t, e) {
    i.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
  }
  jointLimitsEnabled(t, e) {
    return i.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
  }
  jointLimitsMin(t, e) {
    return i.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, t, e);
  }
  jointLimitsMax(t, e) {
    return i.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, t, e);
  }
  constructor() {
    const t = i.rawmultibodyjointset_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  createJoint(t, e, r, n) {
    return _(t, T), i.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
  }
  remove(t, e) {
    i.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
  }
  contains(t) {
    return i.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
  }
  forEachJointHandle(t) {
    try {
      i.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, P(t));
    } finally {
      v[C++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(t, e) {
    try {
      i.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, P(e));
    } finally {
      v[C++] = void 0;
    }
  }
}
const He = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawnarrowphase_free(s >>> 0));
class K {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(K.prototype);
    return e.__wbg_ptr = t, He.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, He.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawnarrowphase_free(t);
  }
  constructor() {
    const t = i.rawnarrowphase_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  contact_pairs_with(t, e) {
    i.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, rt(e));
  }
  contact_pair(t, e) {
    const r = i.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
    return r === 0 ? void 0 : ne.__wrap(r);
  }
  intersection_pairs_with(t, e) {
    i.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, rt(e));
  }
  intersection_pair(t, e) {
    return i.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
  }
}
const Kr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawphysicspipeline_free(s >>> 0));
class Yr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kr.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawphysicspipeline_free(t);
  }
  constructor() {
    const t = i.rawphysicspipeline_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  step(t, e, r, n, a, o, l, h, d, p) {
    _(t, w), _(e, et), _(r, V), _(n, tt), _(a, K), _(o, F), _(l, A), _(h, X), _(d, J), _(p, qt), i.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, l.__wbg_ptr, h.__wbg_ptr, d.__wbg_ptr, p.__wbg_ptr);
  }
  stepWithEvents(t, e, r, n, a, o, l, h, d, p, u, g, y, E) {
    _(t, w), _(e, et), _(r, V), _(n, tt), _(a, K), _(o, F), _(l, A), _(h, X), _(d, J), _(p, qt), _(u, tr), i.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, l.__wbg_ptr, h.__wbg_ptr, d.__wbg_ptr, p.__wbg_ptr, u.__wbg_ptr, rt(g), rt(y), rt(E));
  }
}
const Le = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawpointcolliderprojection_free(s >>> 0));
class vt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(vt.prototype);
    return e.__wbg_ptr = t, Le.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Le.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawpointcolliderprojection_free(t);
  }
  colliderHandle() {
    return i.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
  }
  point() {
    const t = i.rawpointcolliderprojection_point(this.__wbg_ptr);
    return w.__wrap(t);
  }
  isInside() {
    return i.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
  }
  featureType() {
    return i.rawpointcolliderprojection_featureType(this.__wbg_ptr);
  }
  featureId() {
    try {
      const r = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawpointcolliderprojection_featureId(r, this.__wbg_ptr);
      var t = m()[r / 4 + 0], e = m()[r / 4 + 1];
      return t === 0 ? void 0 : e >>> 0;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const Ge = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawpointprojection_free(s >>> 0));
class zt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(zt.prototype);
    return e.__wbg_ptr = t, Ge.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ge.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawpointprojection_free(t);
  }
  point() {
    const t = i.rawpointprojection_point(this.__wbg_ptr);
    return w.__wrap(t);
  }
  isInside() {
    return i.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
  }
}
const Zr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawquerypipeline_free(s >>> 0));
class ae {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Zr.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawquerypipeline_free(t);
  }
  constructor() {
    const t = i.rawquerypipeline_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  update(t) {
    _(t, A), i.rawquerypipeline_update(this.__wbg_ptr, t.__wbg_ptr);
  }
  castRay(t, e, r, n, a, o, l, h, d, p, u) {
    try {
      _(t, F), _(e, A), _(r, w), _(n, w);
      const g = i.rawquerypipeline_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, o, l, !b(h), b(h) ? 0 : h, !b(d), b(d) ? 0 : d, !b(p), b(p) ? 0 : p, P(u));
      return g === 0 ? void 0 : oe.__wrap(g);
    } finally {
      v[C++] = void 0;
    }
  }
  castRayAndGetNormal(t, e, r, n, a, o, l, h, d, p, u) {
    try {
      _(t, F), _(e, A), _(r, w), _(n, w);
      const g = i.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, o, l, !b(h), b(h) ? 0 : h, !b(d), b(d) ? 0 : d, !b(p), b(p) ? 0 : p, P(u));
      return g === 0 ? void 0 : _e.__wrap(g);
    } finally {
      v[C++] = void 0;
    }
  }
  intersectionsWithRay(t, e, r, n, a, o, l, h, d, p, u, g) {
    try {
      _(t, F), _(e, A), _(r, w), _(n, w), i.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, o, P(l), h, !b(d), b(d) ? 0 : d, !b(p), b(p) ? 0 : p, !b(u), b(u) ? 0 : u, P(g));
    } finally {
      v[C++] = void 0, v[C++] = void 0;
    }
  }
  intersectionWithShape(t, e, r, n, a, o, l, h, d, p) {
    try {
      const y = i.__wbindgen_add_to_stack_pointer(-16);
      _(t, F), _(e, A), _(r, w), _(n, S), _(a, f), i.rawquerypipeline_intersectionWithShape(y, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o, !b(l), b(l) ? 0 : l, !b(h), b(h) ? 0 : h, !b(d), b(d) ? 0 : d, P(p));
      var u = m()[y / 4 + 0], g = St()[y / 8 + 1];
      return u === 0 ? void 0 : g;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16), v[C++] = void 0;
    }
  }
  projectPoint(t, e, r, n, a, o, l, h, d) {
    try {
      _(t, F), _(e, A), _(r, w);
      const p = i.rawquerypipeline_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a, !b(o), b(o) ? 0 : o, !b(l), b(l) ? 0 : l, !b(h), b(h) ? 0 : h, P(d));
      return p === 0 ? void 0 : vt.__wrap(p);
    } finally {
      v[C++] = void 0;
    }
  }
  projectPointAndGetFeature(t, e, r, n, a, o, l, h) {
    try {
      _(t, F), _(e, A), _(r, w);
      const d = i.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, !b(a), b(a) ? 0 : a, !b(o), b(o) ? 0 : o, !b(l), b(l) ? 0 : l, P(h));
      return d === 0 ? void 0 : vt.__wrap(d);
    } finally {
      v[C++] = void 0;
    }
  }
  intersectionsWithPoint(t, e, r, n, a, o, l, h, d) {
    try {
      _(t, F), _(e, A), _(r, w), i.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, P(n), a, !b(o), b(o) ? 0 : o, !b(l), b(l) ? 0 : l, !b(h), b(h) ? 0 : h, P(d));
    } finally {
      v[C++] = void 0, v[C++] = void 0;
    }
  }
  castShape(t, e, r, n, a, o, l, h, d, p, u, g, y, E) {
    try {
      _(t, F), _(e, A), _(r, w), _(n, S), _(a, w), _(o, f);
      const D = i.rawquerypipeline_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, l, h, d, p, !b(u), b(u) ? 0 : u, !b(g), b(g) ? 0 : g, !b(y), b(y) ? 0 : y, P(E));
      return D === 0 ? void 0 : jt.__wrap(D);
    } finally {
      v[C++] = void 0;
    }
  }
  intersectionsWithShape(t, e, r, n, a, o, l, h, d, p, u) {
    try {
      _(t, F), _(e, A), _(r, w), _(n, S), _(a, f), i.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, P(o), l, !b(h), b(h) ? 0 : h, !b(d), b(d) ? 0 : d, !b(p), b(p) ? 0 : p, P(u));
    } finally {
      v[C++] = void 0, v[C++] = void 0;
    }
  }
  collidersWithAabbIntersectingAabb(t, e, r) {
    try {
      _(t, w), _(e, w), i.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, P(r));
    } finally {
      v[C++] = void 0;
    }
  }
}
const We = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawraycolliderhit_free(s >>> 0));
class oe {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(oe.prototype);
    return e.__wbg_ptr = t, We.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, We.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawraycolliderhit_free(t);
  }
  colliderHandle() {
    return i.rawcharactercollision_handle(this.__wbg_ptr);
  }
  timeOfImpact() {
    return i.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
  }
}
const Oe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawraycolliderintersection_free(s >>> 0));
class _e {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(_e.prototype);
    return e.__wbg_ptr = t, Oe.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Oe.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawraycolliderintersection_free(t);
  }
  colliderHandle() {
    return i.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
  }
  normal() {
    const t = i.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  time_of_impact() {
    return i.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
  }
  featureType() {
    return i.rawpointcolliderprojection_featureType(this.__wbg_ptr);
  }
  featureId() {
    try {
      const r = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawpointcolliderprojection_featureId(r, this.__wbg_ptr);
      var t = m()[r / 4 + 0], e = m()[r / 4 + 1];
      return t === 0 ? void 0 : e >>> 0;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const Be = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawrayintersection_free(s >>> 0));
class Tt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Tt.prototype);
    return e.__wbg_ptr = t, Be.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Be.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawrayintersection_free(t);
  }
  normal() {
    const t = i.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  time_of_impact() {
    return i.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
  }
  featureType() {
    return i.rawpointcolliderprojection_featureType(this.__wbg_ptr);
  }
  featureId() {
    try {
      const r = i.__wbindgen_add_to_stack_pointer(-16);
      i.rawpointcolliderprojection_featureId(r, this.__wbg_ptr);
      var t = m()[r / 4 + 0], e = m()[r / 4 + 1];
      return t === 0 ? void 0 : e >>> 0;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const Ue = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawrigidbodyset_free(s >>> 0));
class F {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(F.prototype);
    return e.__wbg_ptr = t, Ue.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ue.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawrigidbodyset_free(t);
  }
  rbTranslation(t) {
    const e = i.rawrigidbodyset_rbTranslation(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbRotation(t) {
    const e = i.rawrigidbodyset_rbRotation(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  rbSleep(t) {
    i.rawrigidbodyset_rbSleep(this.__wbg_ptr, t);
  }
  rbIsSleeping(t) {
    return i.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, t) !== 0;
  }
  rbIsMoving(t) {
    return i.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, t) !== 0;
  }
  rbNextTranslation(t) {
    const e = i.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbNextRotation(t) {
    const e = i.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  rbSetTranslation(t, e, r, n, a) {
    i.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, r, n, a);
  }
  rbSetRotation(t, e, r, n, a, o) {
    i.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, r, n, a, o);
  }
  rbSetLinvel(t, e, r) {
    _(e, w), i.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
  }
  rbSetAngvel(t, e, r) {
    _(e, w), i.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
  }
  rbSetNextKinematicTranslation(t, e, r, n) {
    i.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, t, e, r, n);
  }
  rbSetNextKinematicRotation(t, e, r, n, a) {
    i.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, r, n, a);
  }
  rbRecomputeMassPropertiesFromColliders(t, e) {
    _(e, A), i.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
  }
  rbSetAdditionalMass(t, e, r) {
    i.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, r);
  }
  rbSetAdditionalMassProperties(t, e, r, n, a, o) {
    _(r, w), _(n, w), _(a, S), i.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o);
  }
  rbLinvel(t) {
    const e = i.rawrigidbodyset_rbLinvel(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbAngvel(t) {
    const e = i.rawrigidbodyset_rbAngvel(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbLockTranslations(t, e, r) {
    i.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, t, e, r);
  }
  rbSetEnabledTranslations(t, e, r, n, a) {
    i.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, t, e, r, n, a);
  }
  rbLockRotations(t, e, r) {
    i.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, t, e, r);
  }
  rbSetEnabledRotations(t, e, r, n, a) {
    i.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, t, e, r, n, a);
  }
  rbDominanceGroup(t) {
    return i.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, t);
  }
  rbSetDominanceGroup(t, e) {
    i.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, t, e);
  }
  rbEnableCcd(t, e) {
    i.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, t, e);
  }
  rbSetSoftCcdPrediction(t, e) {
    i.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, t, e);
  }
  rbMass(t) {
    return i.rawrigidbodyset_rbMass(this.__wbg_ptr, t);
  }
  rbInvMass(t) {
    return i.rawrigidbodyset_rbInvMass(this.__wbg_ptr, t);
  }
  rbEffectiveInvMass(t) {
    const e = i.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbLocalCom(t) {
    const e = i.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbWorldCom(t) {
    const e = i.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbInvPrincipalInertiaSqrt(t) {
    const e = i.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbPrincipalInertiaLocalFrame(t) {
    const e = i.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, t);
    return S.__wrap(e);
  }
  rbPrincipalInertia(t) {
    const e = i.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbEffectiveWorldInvInertiaSqrt(t) {
    const e = i.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, t);
    return Ct.__wrap(e);
  }
  rbEffectiveAngularInertia(t) {
    const e = i.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, t);
    return Ct.__wrap(e);
  }
  rbWakeUp(t) {
    i.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, t);
  }
  rbIsCcdEnabled(t) {
    return i.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, t) !== 0;
  }
  rbSoftCcdPrediction(t) {
    return i.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, t);
  }
  rbNumColliders(t) {
    return i.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, t) >>> 0;
  }
  rbCollider(t, e) {
    return i.rawrigidbodyset_rbCollider(this.__wbg_ptr, t, e);
  }
  rbBodyType(t) {
    return i.rawrigidbodyset_rbBodyType(this.__wbg_ptr, t);
  }
  rbSetBodyType(t, e, r) {
    i.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, t, e, r);
  }
  rbIsFixed(t) {
    return i.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, t) !== 0;
  }
  rbIsKinematic(t) {
    return i.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, t) !== 0;
  }
  rbIsDynamic(t) {
    return i.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, t) !== 0;
  }
  rbLinearDamping(t) {
    return i.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, t);
  }
  rbAngularDamping(t) {
    return i.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, t);
  }
  rbSetLinearDamping(t, e) {
    i.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, t, e);
  }
  rbSetAngularDamping(t, e) {
    i.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, t, e);
  }
  rbSetEnabled(t, e) {
    i.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, t, e);
  }
  rbIsEnabled(t) {
    return i.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, t) !== 0;
  }
  rbGravityScale(t) {
    return i.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, t);
  }
  rbSetGravityScale(t, e, r) {
    i.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, t, e, r);
  }
  rbResetForces(t, e) {
    i.rawrigidbodyset_rbResetForces(this.__wbg_ptr, t, e);
  }
  rbResetTorques(t, e) {
    i.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, t, e);
  }
  rbAddForce(t, e, r) {
    _(e, w), i.rawrigidbodyset_rbAddForce(this.__wbg_ptr, t, e.__wbg_ptr, r);
  }
  rbApplyImpulse(t, e, r) {
    _(e, w), i.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
  }
  rbAddTorque(t, e, r) {
    _(e, w), i.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, t, e.__wbg_ptr, r);
  }
  rbApplyTorqueImpulse(t, e, r) {
    _(e, w), i.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
  }
  rbAddForceAtPoint(t, e, r, n) {
    _(e, w), _(r, w), i.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
  }
  rbApplyImpulseAtPoint(t, e, r, n) {
    _(e, w), _(r, w), i.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
  }
  rbAdditionalSolverIterations(t) {
    return i.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, t) >>> 0;
  }
  rbSetAdditionalSolverIterations(t, e) {
    i.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, t, e);
  }
  rbUserData(t) {
    return i.rawrigidbodyset_rbUserData(this.__wbg_ptr, t) >>> 0;
  }
  rbSetUserData(t, e) {
    i.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, t, e);
  }
  rbUserForce(t) {
    const e = i.rawrigidbodyset_rbUserForce(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  rbUserTorque(t) {
    const e = i.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, t);
    return w.__wrap(e);
  }
  constructor() {
    const t = i.rawrigidbodyset_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  createRigidBody(t, e, r, n, a, o, l, h, d, p, u, g, y, E, D, H, B, U, Z, Ht, Lt, Gt, Wt, Ot, pt, Bt) {
    return _(e, w), _(r, S), _(l, w), _(h, w), _(d, w), _(p, w), _(u, S), i.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a, o, l.__wbg_ptr, h.__wbg_ptr, d.__wbg_ptr, p.__wbg_ptr, u.__wbg_ptr, g, y, E, D, H, B, U, Z, Ht, Lt, Gt, Wt, Ot, pt, Bt);
  }
  remove(t, e, r, n, a) {
    _(e, V), _(r, A), _(n, X), _(a, J), i.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr);
  }
  len() {
    return i.rawcolliderset_len(this.__wbg_ptr) >>> 0;
  }
  contains(t) {
    return i.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
  }
  forEachRigidBodyHandle(t) {
    try {
      i.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, P(t));
    } finally {
      v[C++] = void 0;
    }
  }
  propagateModifiedBodyPositionsToColliders(t) {
    _(t, A), i.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
  }
}
const qe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawrotation_free(s >>> 0));
class S {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(S.prototype);
    return e.__wbg_ptr = t, qe.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qe.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawrotation_free(t);
  }
  constructor(t, e, r, n) {
    const a = i.rawrotation_new(t, e, r, n);
    return this.__wbg_ptr = a >>> 0, this;
  }
  static identity() {
    const t = i.rawrotation_identity();
    return S.__wrap(t);
  }
  get x() {
    return i.rawrotation_x(this.__wbg_ptr);
  }
  get y() {
    return i.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  get z() {
    return i.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
  }
  get w() {
    return i.rawrotation_w(this.__wbg_ptr);
  }
}
const Xe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawsdpmatrix3_free(s >>> 0));
class Ct {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Ct.prototype);
    return e.__wbg_ptr = t, Xe.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xe.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawsdpmatrix3_free(t);
  }
  elements() {
    const t = i.rawsdpmatrix3_elements(this.__wbg_ptr);
    return Rt(t);
  }
}
const $r = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawserializationpipeline_free(s >>> 0));
class Qr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $r.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawserializationpipeline_free(t);
  }
  constructor() {
    const t = i.rawserializationpipeline_new();
    return this.__wbg_ptr = t >>> 0, this;
  }
  serializeAll(t, e, r, n, a, o, l, h, d) {
    _(t, w), _(e, et), _(r, V), _(n, tt), _(a, K), _(o, F), _(l, A), _(h, X), _(d, J);
    const p = i.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, l.__wbg_ptr, h.__wbg_ptr, d.__wbg_ptr);
    return Rt(p);
  }
  deserializeAll(t) {
    const e = i.rawserializationpipeline_deserializeAll(this.__wbg_ptr, rt(t));
    return e === 0 ? void 0 : se.__wrap(e);
  }
}
const Ve = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawshape_free(s >>> 0));
class f {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(f.prototype);
    return e.__wbg_ptr = t, Ve.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ve.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawshape_free(t);
  }
  static cuboid(t, e, r) {
    const n = i.rawshape_cuboid(t, e, r);
    return f.__wrap(n);
  }
  static roundCuboid(t, e, r, n) {
    const a = i.rawshape_roundCuboid(t, e, r, n);
    return f.__wrap(a);
  }
  static ball(t) {
    const e = i.rawshape_ball(t);
    return f.__wrap(e);
  }
  static halfspace(t) {
    _(t, w);
    const e = i.rawshape_halfspace(t.__wbg_ptr);
    return f.__wrap(e);
  }
  static capsule(t, e) {
    const r = i.rawshape_capsule(t, e);
    return f.__wrap(r);
  }
  static cylinder(t, e) {
    const r = i.rawshape_cylinder(t, e);
    return f.__wrap(r);
  }
  static roundCylinder(t, e, r) {
    const n = i.rawshape_roundCylinder(t, e, r);
    return f.__wrap(n);
  }
  static cone(t, e) {
    const r = i.rawshape_cone(t, e);
    return f.__wrap(r);
  }
  static roundCone(t, e, r) {
    const n = i.rawshape_roundCone(t, e, r);
    return f.__wrap(n);
  }
  static polyline(t, e) {
    const r = $(t, i.__wbindgen_malloc), n = N, a = yt(e, i.__wbindgen_malloc), o = N, l = i.rawshape_polyline(r, n, a, o);
    return f.__wrap(l);
  }
  static trimesh(t, e, r) {
    const n = $(t, i.__wbindgen_malloc), a = N, o = yt(e, i.__wbindgen_malloc), l = N, h = i.rawshape_trimesh(n, a, o, l, r);
    return f.__wrap(h);
  }
  static heightfield(t, e, r, n, a) {
    const o = $(r, i.__wbindgen_malloc), l = N;
    _(n, w);
    const h = i.rawshape_heightfield(t, e, o, l, n.__wbg_ptr, a);
    return f.__wrap(h);
  }
  static segment(t, e) {
    _(t, w), _(e, w);
    const r = i.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
    return f.__wrap(r);
  }
  static triangle(t, e, r) {
    _(t, w), _(e, w), _(r, w);
    const n = i.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
    return f.__wrap(n);
  }
  static roundTriangle(t, e, r, n) {
    _(t, w), _(e, w), _(r, w);
    const a = i.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
    return f.__wrap(a);
  }
  static convexHull(t) {
    const e = $(t, i.__wbindgen_malloc), r = N, n = i.rawshape_convexHull(e, r);
    return n === 0 ? void 0 : f.__wrap(n);
  }
  static roundConvexHull(t, e) {
    const r = $(t, i.__wbindgen_malloc), n = N, a = i.rawshape_roundConvexHull(r, n, e);
    return a === 0 ? void 0 : f.__wrap(a);
  }
  static convexMesh(t, e) {
    const r = $(t, i.__wbindgen_malloc), n = N, a = yt(e, i.__wbindgen_malloc), o = N, l = i.rawshape_convexMesh(r, n, a, o);
    return l === 0 ? void 0 : f.__wrap(l);
  }
  static roundConvexMesh(t, e, r) {
    const n = $(t, i.__wbindgen_malloc), a = N, o = yt(e, i.__wbindgen_malloc), l = N, h = i.rawshape_roundConvexMesh(n, a, o, l, r);
    return h === 0 ? void 0 : f.__wrap(h);
  }
  castShape(t, e, r, n, a, o, l, h, d, p) {
    _(t, w), _(e, S), _(r, w), _(n, f), _(a, w), _(o, S), _(l, w);
    const u = i.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, l.__wbg_ptr, h, d, p);
    return u === 0 ? void 0 : Mt.__wrap(u);
  }
  intersectsShape(t, e, r, n, a) {
    return _(t, w), _(e, S), _(r, f), _(n, w), _(a, S), i.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr) !== 0;
  }
  contactShape(t, e, r, n, a, o) {
    _(t, w), _(e, S), _(r, f), _(n, w), _(a, S);
    const l = i.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, o);
    return l === 0 ? void 0 : ot.__wrap(l);
  }
  containsPoint(t, e, r) {
    return _(t, w), _(e, S), _(r, w), i.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr) !== 0;
  }
  projectPoint(t, e, r, n) {
    _(t, w), _(e, S), _(r, w);
    const a = i.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
    return zt.__wrap(a);
  }
  intersectsRay(t, e, r, n, a) {
    return _(t, w), _(e, S), _(r, w), _(n, w), i.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a) !== 0;
  }
  castRay(t, e, r, n, a, o) {
    return _(t, w), _(e, S), _(r, w), _(n, w), i.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, o);
  }
  castRayAndGetNormal(t, e, r, n, a, o) {
    _(t, w), _(e, S), _(r, w), _(n, w);
    const l = i.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, o);
    return l === 0 ? void 0 : Tt.__wrap(l);
  }
}
const Je = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawshapecasthit_free(s >>> 0));
class Mt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Mt.prototype);
    return e.__wbg_ptr = t, Je.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Je.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawshapecasthit_free(t);
  }
  time_of_impact() {
    return i.rawrotation_x(this.__wbg_ptr);
  }
  witness1() {
    const t = i.rawshapecasthit_witness1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  witness2() {
    const t = i.rawcontactforceevent_total_force(this.__wbg_ptr);
    return w.__wrap(t);
  }
  normal1() {
    const t = i.rawshapecasthit_normal1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  normal2() {
    const t = i.rawshapecasthit_normal2(this.__wbg_ptr);
    return w.__wrap(t);
  }
}
const Ke = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawshapecontact_free(s >>> 0));
class ot {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ot.prototype);
    return e.__wbg_ptr = t, Ke.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ke.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawshapecontact_free(t);
  }
  distance() {
    return i.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
  }
  point1() {
    const t = i.rawpointprojection_point(this.__wbg_ptr);
    return w.__wrap(t);
  }
  point2() {
    const t = i.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return w.__wrap(t);
  }
  normal1() {
    const t = i.rawcollidershapecasthit_witness2(this.__wbg_ptr);
    return w.__wrap(t);
  }
  normal2() {
    const t = i.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return w.__wrap(t);
  }
}
const Ye = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => i.__wbg_rawvector_free(s >>> 0));
class w {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(w.prototype);
    return e.__wbg_ptr = t, Ye.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ye.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    i.__wbg_rawvector_free(t);
  }
  static zero() {
    const t = i.rawvector_zero();
    return w.__wrap(t);
  }
  constructor(t, e, r) {
    const n = i.rawvector_new(t, e, r);
    return this.__wbg_ptr = n >>> 0, this;
  }
  get x() {
    return i.rawrotation_x(this.__wbg_ptr);
  }
  set x(t) {
    i.rawvector_set_x(this.__wbg_ptr, t);
  }
  get y() {
    return i.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  set y(t) {
    i.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
  }
  get z() {
    return i.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
  }
  set z(t) {
    i.rawvector_set_z(this.__wbg_ptr, t);
  }
  xyz() {
    const t = i.rawvector_xyz(this.__wbg_ptr);
    return w.__wrap(t);
  }
  yxz() {
    const t = i.rawvector_yxz(this.__wbg_ptr);
    return w.__wrap(t);
  }
  zxy() {
    const t = i.rawvector_zxy(this.__wbg_ptr);
    return w.__wrap(t);
  }
  xzy() {
    const t = i.rawvector_xzy(this.__wbg_ptr);
    return w.__wrap(t);
  }
  yzx() {
    const t = i.rawvector_yzx(this.__wbg_ptr);
    return w.__wrap(t);
  }
  zyx() {
    const t = i.rawvector_zyx(this.__wbg_ptr);
    return w.__wrap(t);
  }
}
class er {
  constructor(t, e, r) {
    this.x = t, this.y = e, this.z = r;
  }
}
class c {
  static new(t, e, r) {
    return new er(t, e, r);
  }
  static intoRaw(t) {
    return new w(t.x, t.y, t.z);
  }
  static zeros() {
    return c.new(0, 0, 0);
  }
  static fromRaw(t) {
    if (!t) return null;
    let e = c.new(t.x, t.y, t.z);
    return t.free(), e;
  }
  static copy(t, e) {
    t.x = e.x, t.y = e.y, t.z = e.z;
  }
}
class Xt {
  constructor(t, e, r, n) {
    this.x = t, this.y = e, this.z = r, this.w = n;
  }
}
class R {
  static identity() {
    return new Xt(0, 0, 0, 1);
  }
  static fromRaw(t) {
    if (!t) return null;
    let e = new Xt(t.x, t.y, t.z, t.w);
    return t.free(), e;
  }
  static intoRaw(t) {
    return new S(t.x, t.y, t.z, t.w);
  }
  static copy(t, e) {
    t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
  }
}
class rr {
  constructor(t) {
    this.elements = t;
  }
  get m11() {
    return this.elements[0];
  }
  get m12() {
    return this.elements[1];
  }
  get m21() {
    return this.m12;
  }
  get m13() {
    return this.elements[2];
  }
  get m31() {
    return this.m13;
  }
  get m22() {
    return this.elements[3];
  }
  get m23() {
    return this.elements[4];
  }
  get m32() {
    return this.m23;
  }
  get m33() {
    return this.elements[5];
  }
}
class Vt {
  static fromRaw(t) {
    const e = new rr(t.elements());
    return t.free(), e;
  }
}
var L;
(function(s) {
  s[s.Dynamic = 0] = "Dynamic", s[s.Fixed = 1] = "Fixed", s[s.KinematicPositionBased = 2] = "KinematicPositionBased", s[s.KinematicVelocityBased = 3] = "KinematicVelocityBased";
})(L || (L = {}));
class Jt {
  constructor(t, e, r) {
    this.rawSet = t, this.colliderSet = e, this.handle = r;
  }
  finalizeDeserialization(t) {
    this.colliderSet = t;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  lockTranslations(t, e) {
    return this.rawSet.rbLockTranslations(this.handle, t, e);
  }
  lockRotations(t, e) {
    return this.rawSet.rbLockRotations(this.handle, t, e);
  }
  setEnabledTranslations(t, e, r, n) {
    return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, r, n);
  }
  restrictTranslations(t, e, r, n) {
    this.setEnabledTranslations(t, e, r, n);
  }
  setEnabledRotations(t, e, r, n) {
    return this.rawSet.rbSetEnabledRotations(this.handle, t, e, r, n);
  }
  restrictRotations(t, e, r, n) {
    this.setEnabledRotations(t, e, r, n);
  }
  dominanceGroup() {
    return this.rawSet.rbDominanceGroup(this.handle);
  }
  setDominanceGroup(t) {
    this.rawSet.rbSetDominanceGroup(this.handle, t);
  }
  additionalSolverIterations() {
    return this.rawSet.rbAdditionalSolverIterations(this.handle);
  }
  setAdditionalSolverIterations(t) {
    this.rawSet.rbSetAdditionalSolverIterations(this.handle, t);
  }
  enableCcd(t) {
    this.rawSet.rbEnableCcd(this.handle, t);
  }
  setSoftCcdPrediction(t) {
    this.rawSet.rbSetSoftCcdPrediction(this.handle, t);
  }
  softCcdPrediction() {
    return this.rawSet.rbSoftCcdPrediction(this.handle);
  }
  translation() {
    let t = this.rawSet.rbTranslation(this.handle);
    return c.fromRaw(t);
  }
  rotation() {
    let t = this.rawSet.rbRotation(this.handle);
    return R.fromRaw(t);
  }
  nextTranslation() {
    let t = this.rawSet.rbNextTranslation(this.handle);
    return c.fromRaw(t);
  }
  nextRotation() {
    let t = this.rawSet.rbNextRotation(this.handle);
    return R.fromRaw(t);
  }
  setTranslation(t, e) {
    this.rawSet.rbSetTranslation(this.handle, t.x, t.y, t.z, e);
  }
  setLinvel(t, e) {
    let r = c.intoRaw(t);
    this.rawSet.rbSetLinvel(this.handle, r, e), r.free();
  }
  gravityScale() {
    return this.rawSet.rbGravityScale(this.handle);
  }
  setGravityScale(t, e) {
    this.rawSet.rbSetGravityScale(this.handle, t, e);
  }
  setRotation(t, e) {
    this.rawSet.rbSetRotation(this.handle, t.x, t.y, t.z, t.w, e);
  }
  setAngvel(t, e) {
    let r = c.intoRaw(t);
    this.rawSet.rbSetAngvel(this.handle, r, e), r.free();
  }
  setNextKinematicTranslation(t) {
    this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
  }
  setNextKinematicRotation(t) {
    this.rawSet.rbSetNextKinematicRotation(this.handle, t.x, t.y, t.z, t.w);
  }
  linvel() {
    return c.fromRaw(this.rawSet.rbLinvel(this.handle));
  }
  angvel() {
    return c.fromRaw(this.rawSet.rbAngvel(this.handle));
  }
  mass() {
    return this.rawSet.rbMass(this.handle);
  }
  effectiveInvMass() {
    return c.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
  }
  invMass() {
    return this.rawSet.rbInvMass(this.handle);
  }
  localCom() {
    return c.fromRaw(this.rawSet.rbLocalCom(this.handle));
  }
  worldCom() {
    return c.fromRaw(this.rawSet.rbWorldCom(this.handle));
  }
  invPrincipalInertiaSqrt() {
    return c.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
  }
  principalInertia() {
    return c.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
  }
  principalInertiaLocalFrame() {
    return R.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
  }
  effectiveWorldInvInertiaSqrt() {
    return Vt.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
  }
  effectiveAngularInertia() {
    return Vt.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
  }
  sleep() {
    this.rawSet.rbSleep(this.handle);
  }
  wakeUp() {
    this.rawSet.rbWakeUp(this.handle);
  }
  isCcdEnabled() {
    return this.rawSet.rbIsCcdEnabled(this.handle);
  }
  numColliders() {
    return this.rawSet.rbNumColliders(this.handle);
  }
  collider(t) {
    return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
  }
  setEnabled(t) {
    this.rawSet.rbSetEnabled(this.handle, t);
  }
  isEnabled() {
    return this.rawSet.rbIsEnabled(this.handle);
  }
  bodyType() {
    return this.rawSet.rbBodyType(this.handle);
  }
  setBodyType(t, e) {
    return this.rawSet.rbSetBodyType(this.handle, t, e);
  }
  isSleeping() {
    return this.rawSet.rbIsSleeping(this.handle);
  }
  isMoving() {
    return this.rawSet.rbIsMoving(this.handle);
  }
  isFixed() {
    return this.rawSet.rbIsFixed(this.handle);
  }
  isKinematic() {
    return this.rawSet.rbIsKinematic(this.handle);
  }
  isDynamic() {
    return this.rawSet.rbIsDynamic(this.handle);
  }
  linearDamping() {
    return this.rawSet.rbLinearDamping(this.handle);
  }
  angularDamping() {
    return this.rawSet.rbAngularDamping(this.handle);
  }
  setLinearDamping(t) {
    this.rawSet.rbSetLinearDamping(this.handle, t);
  }
  recomputeMassPropertiesFromColliders() {
    this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
  }
  setAdditionalMass(t, e) {
    this.rawSet.rbSetAdditionalMass(this.handle, t, e);
  }
  setAdditionalMassProperties(t, e, r, n, a) {
    let o = c.intoRaw(e), l = c.intoRaw(r), h = R.intoRaw(n);
    this.rawSet.rbSetAdditionalMassProperties(this.handle, t, o, l, h, a), o.free(), l.free(), h.free();
  }
  setAngularDamping(t) {
    this.rawSet.rbSetAngularDamping(this.handle, t);
  }
  resetForces(t) {
    this.rawSet.rbResetForces(this.handle, t);
  }
  resetTorques(t) {
    this.rawSet.rbResetTorques(this.handle, t);
  }
  addForce(t, e) {
    const r = c.intoRaw(t);
    this.rawSet.rbAddForce(this.handle, r, e), r.free();
  }
  applyImpulse(t, e) {
    const r = c.intoRaw(t);
    this.rawSet.rbApplyImpulse(this.handle, r, e), r.free();
  }
  addTorque(t, e) {
    const r = c.intoRaw(t);
    this.rawSet.rbAddTorque(this.handle, r, e), r.free();
  }
  applyTorqueImpulse(t, e) {
    const r = c.intoRaw(t);
    this.rawSet.rbApplyTorqueImpulse(this.handle, r, e), r.free();
  }
  addForceAtPoint(t, e, r) {
    const n = c.intoRaw(t), a = c.intoRaw(e);
    this.rawSet.rbAddForceAtPoint(this.handle, n, a, r), n.free(), a.free();
  }
  applyImpulseAtPoint(t, e, r) {
    const n = c.intoRaw(t), a = c.intoRaw(e);
    this.rawSet.rbApplyImpulseAtPoint(this.handle, n, a, r), n.free(), a.free();
  }
  userForce() {
    return c.fromRaw(this.rawSet.rbUserForce(this.handle));
  }
  userTorque() {
    return c.fromRaw(this.rawSet.rbUserTorque(this.handle));
  }
}
class O {
  constructor(t) {
    this.enabled = true, this.status = t, this.translation = c.zeros(), this.rotation = R.identity(), this.gravityScale = 1, this.linvel = c.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = c.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = c.zeros(), this.principalAngularInertia = c.zeros(), this.angularInertiaLocalFrame = R.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
  }
  static dynamic() {
    return new O(L.Dynamic);
  }
  static kinematicPositionBased() {
    return new O(L.KinematicPositionBased);
  }
  static kinematicVelocityBased() {
    return new O(L.KinematicVelocityBased);
  }
  static fixed() {
    return new O(L.Fixed);
  }
  static newDynamic() {
    return new O(L.Dynamic);
  }
  static newKinematicPositionBased() {
    return new O(L.KinematicPositionBased);
  }
  static newKinematicVelocityBased() {
    return new O(L.KinematicVelocityBased);
  }
  static newStatic() {
    return new O(L.Fixed);
  }
  setDominanceGroup(t) {
    return this.dominanceGroup = t, this;
  }
  setAdditionalSolverIterations(t) {
    return this.additionalSolverIterations = t, this;
  }
  setEnabled(t) {
    return this.enabled = t, this;
  }
  setTranslation(t, e, r) {
    if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
    return this.translation = { x: t, y: e, z: r }, this;
  }
  setRotation(t) {
    return R.copy(this.rotation, t), this;
  }
  setGravityScale(t) {
    return this.gravityScale = t, this;
  }
  setAdditionalMass(t) {
    return this.mass = t, this.massOnly = true, this;
  }
  setLinvel(t, e, r) {
    if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The linvel components must be numbers.");
    return this.linvel = { x: t, y: e, z: r }, this;
  }
  setAngvel(t) {
    return c.copy(this.angvel, t), this;
  }
  setAdditionalMassProperties(t, e, r, n) {
    return this.mass = t, c.copy(this.centerOfMass, e), c.copy(this.principalAngularInertia, r), R.copy(this.angularInertiaLocalFrame, n), this.massOnly = false, this;
  }
  enabledTranslations(t, e, r) {
    return this.translationsEnabledX = t, this.translationsEnabledY = e, this.translationsEnabledZ = r, this;
  }
  restrictTranslations(t, e, r) {
    return this.enabledTranslations(t, e, r);
  }
  lockTranslations() {
    return this.enabledTranslations(false, false, false);
  }
  enabledRotations(t, e, r) {
    return this.rotationsEnabledX = t, this.rotationsEnabledY = e, this.rotationsEnabledZ = r, this;
  }
  restrictRotations(t, e, r) {
    return this.enabledRotations(t, e, r);
  }
  lockRotations() {
    return this.restrictRotations(false, false, false);
  }
  setLinearDamping(t) {
    return this.linearDamping = t, this;
  }
  setAngularDamping(t) {
    return this.angularDamping = t, this;
  }
  setCanSleep(t) {
    return this.canSleep = t, this;
  }
  setSleeping(t) {
    return this.sleeping = t, this;
  }
  setCcdEnabled(t) {
    return this.ccdEnabled = t, this;
  }
  setSoftCcdPrediction(t) {
    return this.softCcdPrediction = t, this;
  }
  setUserData(t) {
    return this.userData = t, this;
  }
}
class kt {
  constructor() {
    this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
  }
  set(t, e) {
    let r = this.index(t);
    for (; this.data.length <= r; ) this.data.push(null);
    this.data[r] == null && (this.size += 1), this.data[r] = e;
  }
  len() {
    return this.size;
  }
  delete(t) {
    let e = this.index(t);
    e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
  }
  clear() {
    this.data = new Array();
  }
  get(t) {
    let e = this.index(t);
    return e < this.data.length ? this.data[e] : null;
  }
  forEach(t) {
    for (const e of this.data) e != null && t(e);
  }
  getAll() {
    return this.data.filter((t) => t != null);
  }
  index(t) {
    return this.fconv[0] = t, this.uconv[0];
  }
}
class ir {
  constructor(t) {
    this.raw = t || new F(), this.map = new kt(), t && t.forEachRigidBodyHandle((e) => {
      this.map.set(e, new Jt(t, null, e));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(t) {
    this.map.forEach((e) => e.finalizeDeserialization(t));
  }
  createRigidBody(t, e) {
    let r = c.intoRaw(e.translation), n = R.intoRaw(e.rotation), a = c.intoRaw(e.linvel), o = c.intoRaw(e.centerOfMass), l = c.intoRaw(e.angvel), h = c.intoRaw(e.principalAngularInertia), d = R.intoRaw(e.angularInertiaLocalFrame), p = this.raw.createRigidBody(e.enabled, r, n, e.gravityScale, e.mass, e.massOnly, o, a, l, h, d, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
    r.free(), n.free(), a.free(), o.free(), l.free(), h.free(), d.free();
    const u = new Jt(this.raw, t, p);
    return u.userData = e.userData, this.map.set(p, u), u;
  }
  remove(t, e, r, n, a) {
    for (let o = 0; o < this.raw.rbNumColliders(t); o += 1) r.unmap(this.raw.rbCollider(t, o));
    n.forEachJointHandleAttachedToRigidBody(t, (o) => n.unmap(o)), a.forEachJointHandleAttachedToRigidBody(t, (o) => a.unmap(o)), this.raw.remove(t, e.raw, r.raw, n.raw, a.raw), this.map.delete(t);
  }
  len() {
    return this.map.len();
  }
  contains(t) {
    return this.get(t) != null;
  }
  get(t) {
    return this.map.get(t);
  }
  forEach(t) {
    this.map.forEach(t);
  }
  forEachActiveRigidBody(t, e) {
    t.forEachActiveRigidBodyHandle((r) => {
      e(this.get(r));
    });
  }
  getAll() {
    return this.map.getAll();
  }
}
class nr {
  constructor(t) {
    this.raw = t || new et();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  get dt() {
    return this.raw.dt;
  }
  get contact_erp() {
    return this.raw.contact_erp;
  }
  get lengthUnit() {
    return this.raw.lengthUnit;
  }
  get normalizedAllowedLinearError() {
    return this.raw.normalizedAllowedLinearError;
  }
  get normalizedPredictionDistance() {
    return this.raw.normalizedPredictionDistance;
  }
  get numSolverIterations() {
    return this.raw.numSolverIterations;
  }
  get numAdditionalFrictionIterations() {
    return this.raw.numAdditionalFrictionIterations;
  }
  get numInternalPgsIterations() {
    return this.raw.numInternalPgsIterations;
  }
  get minIslandSize() {
    return this.raw.minIslandSize;
  }
  get maxCcdSubsteps() {
    return this.raw.maxCcdSubsteps;
  }
  set dt(t) {
    this.raw.dt = t;
  }
  set contact_natural_frequency(t) {
    this.raw.contact_natural_frequency = t;
  }
  set lengthUnit(t) {
    this.raw.lengthUnit = t;
  }
  set normalizedAllowedLinearError(t) {
    this.raw.normalizedAllowedLinearError = t;
  }
  set normalizedPredictionDistance(t) {
    this.raw.normalizedPredictionDistance = t;
  }
  set numSolverIterations(t) {
    this.raw.numSolverIterations = t;
  }
  set numAdditionalFrictionIterations(t) {
    this.raw.numAdditionalFrictionIterations = t;
  }
  set numInternalPgsIterations(t) {
    this.raw.numInternalPgsIterations = t;
  }
  set minIslandSize(t) {
    this.raw.minIslandSize = t;
  }
  set maxCcdSubsteps(t) {
    this.raw.maxCcdSubsteps = t;
  }
  switchToStandardPgsSolver() {
    this.raw.switchToStandardPgsSolver();
  }
  switchToSmallStepsPgsSolver() {
    this.raw.switchToSmallStepsPgsSolver();
  }
  switchToSmallStepsPgsSolverWithoutWarmstart() {
    this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
  }
}
var k;
(function(s) {
  s[s.Revolute = 0] = "Revolute", s[s.Fixed = 1] = "Fixed", s[s.Prismatic = 2] = "Prismatic", s[s.Rope = 3] = "Rope", s[s.Spring = 4] = "Spring", s[s.Spherical = 5] = "Spherical", s[s.Generic = 6] = "Generic";
})(k || (k = {}));
var Kt;
(function(s) {
  s[s.AccelerationBased = 0] = "AccelerationBased", s[s.ForceBased = 1] = "ForceBased";
})(Kt || (Kt = {}));
var Yt;
(function(s) {
  s[s.LinX = 1] = "LinX", s[s.LinY = 2] = "LinY", s[s.LinZ = 4] = "LinZ", s[s.AngX = 8] = "AngX", s[s.AngY = 16] = "AngY", s[s.AngZ = 32] = "AngZ";
})(Yt || (Yt = {}));
class W {
  constructor(t, e, r) {
    this.rawSet = t, this.bodySet = e, this.handle = r;
  }
  static newTyped(t, e, r) {
    switch (t.jointType(r)) {
      case G.Revolute:
        return new lr(t, e, r);
      case G.Prismatic:
        return new _r(t, e, r);
      case G.Fixed:
        return new sr(t, e, r);
      case G.Spring:
        return new or(t, e, r);
      case G.Rope:
        return new ar(t, e, r);
      case G.Spherical:
        return new wr(t, e, r);
      case G.Generic:
        return new cr(t, e, r);
      default:
        return new W(t, e, r);
    }
  }
  finalizeDeserialization(t) {
    this.bodySet = t;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  body1() {
    return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
  }
  body2() {
    return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
  }
  type() {
    return this.rawSet.jointType(this.handle);
  }
  frameX1() {
    return R.fromRaw(this.rawSet.jointFrameX1(this.handle));
  }
  frameX2() {
    return R.fromRaw(this.rawSet.jointFrameX2(this.handle));
  }
  anchor1() {
    return c.fromRaw(this.rawSet.jointAnchor1(this.handle));
  }
  anchor2() {
    return c.fromRaw(this.rawSet.jointAnchor2(this.handle));
  }
  setAnchor1(t) {
    const e = c.intoRaw(t);
    this.rawSet.jointSetAnchor1(this.handle, e), e.free();
  }
  setAnchor2(t) {
    const e = c.intoRaw(t);
    this.rawSet.jointSetAnchor2(this.handle, e), e.free();
  }
  setContactsEnabled(t) {
    this.rawSet.jointSetContactsEnabled(this.handle, t);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
}
class le extends W {
  limitsEnabled() {
    return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
  }
  limitsMin() {
    return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
  }
  limitsMax() {
    return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
  }
  setLimits(t, e) {
    this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
  }
  configureMotorModel(t) {
    this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
  }
  configureMotorVelocity(t, e) {
    this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
  }
  configureMotorPosition(t, e, r) {
    this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, r);
  }
  configureMotor(t, e, r, n) {
    this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, r, n);
  }
}
class sr extends W {
}
class ar extends W {
}
class or extends W {
}
class _r extends le {
  rawAxis() {
    return xt.LinX;
  }
}
class lr extends le {
  rawAxis() {
    return xt.AngX;
  }
}
class cr extends W {
}
class wr extends W {
}
class q {
  constructor() {
  }
  static fixed(t, e, r, n) {
    let a = new q();
    return a.anchor1 = t, a.anchor2 = r, a.frame1 = e, a.frame2 = n, a.jointType = k.Fixed, a;
  }
  static spring(t, e, r, n, a) {
    let o = new q();
    return o.anchor1 = n, o.anchor2 = a, o.length = t, o.stiffness = e, o.damping = r, o.jointType = k.Spring, o;
  }
  static rope(t, e, r) {
    let n = new q();
    return n.anchor1 = e, n.anchor2 = r, n.length = t, n.jointType = k.Rope, n;
  }
  static generic(t, e, r, n) {
    let a = new q();
    return a.anchor1 = t, a.anchor2 = e, a.axis = r, a.axesMask = n, a.jointType = k.Generic, a;
  }
  static spherical(t, e) {
    let r = new q();
    return r.anchor1 = t, r.anchor2 = e, r.jointType = k.Spherical, r;
  }
  static prismatic(t, e, r) {
    let n = new q();
    return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = k.Prismatic, n;
  }
  static revolute(t, e, r) {
    let n = new q();
    return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = k.Revolute, n;
  }
  intoRaw() {
    let t = c.intoRaw(this.anchor1), e = c.intoRaw(this.anchor2), r, n, a = false, o = 0, l = 0;
    switch (this.jointType) {
      case k.Fixed:
        let h = R.intoRaw(this.frame1), d = R.intoRaw(this.frame2);
        n = T.fixed(t, h, e, d), h.free(), d.free();
        break;
      case k.Spring:
        n = T.spring(this.length, this.stiffness, this.damping, t, e);
        break;
      case k.Rope:
        n = T.rope(this.length, t, e);
        break;
      case k.Prismatic:
        r = c.intoRaw(this.axis), this.limitsEnabled && (a = true, o = this.limits[0], l = this.limits[1]), n = T.prismatic(t, e, r, a, o, l), r.free();
        break;
      case k.Generic:
        r = c.intoRaw(this.axis);
        let p = this.axesMask;
        n = T.generic(t, e, r, p);
        break;
      case k.Spherical:
        n = T.spherical(t, e);
        break;
      case k.Revolute:
        r = c.intoRaw(this.axis), n = T.revolute(t, e, r), r.free();
        break;
    }
    return t.free(), e.free(), n;
  }
}
class hr {
  constructor(t) {
    this.raw = t || new X(), this.map = new kt(), t && t.forEachJointHandle((e) => {
      this.map.set(e, W.newTyped(t, null, e));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(t) {
    this.map.forEach((e) => e.finalizeDeserialization(t));
  }
  createJoint(t, e, r, n, a) {
    const o = e.intoRaw(), l = this.raw.createJoint(o, r, n, a);
    o.free();
    let h = W.newTyped(this.raw, t, l);
    return this.map.set(l, h), h;
  }
  remove(t, e) {
    this.raw.remove(t, e), this.unmap(t);
  }
  forEachJointHandleAttachedToRigidBody(t, e) {
    this.raw.forEachJointAttachedToRigidBody(t, e);
  }
  unmap(t) {
    this.map.delete(t);
  }
  len() {
    return this.map.len();
  }
  contains(t) {
    return this.get(t) != null;
  }
  get(t) {
    return this.map.get(t);
  }
  forEach(t) {
    this.map.forEach(t);
  }
  getAll() {
    return this.map.getAll();
  }
}
class Y {
  constructor(t, e) {
    this.rawSet = t, this.handle = e;
  }
  static newTyped(t, e) {
    switch (t.jointType(e)) {
      case G.Revolute:
        return new ur(t, e);
      case G.Prismatic:
        return new pr(t, e);
      case G.Fixed:
        return new dr(t, e);
      case G.Spherical:
        return new gr(t, e);
      default:
        return new Y(t, e);
    }
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  setContactsEnabled(t) {
    this.rawSet.jointSetContactsEnabled(this.handle, t);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
}
class ce extends Y {
}
class dr extends Y {
}
class pr extends ce {
  rawAxis() {
    return xt.LinX;
  }
}
class ur extends ce {
  rawAxis() {
    return xt.AngX;
  }
}
class gr extends Y {
}
class br {
  constructor(t) {
    this.raw = t || new J(), this.map = new kt(), t && t.forEachJointHandle((e) => {
      this.map.set(e, Y.newTyped(this.raw, e));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  createJoint(t, e, r, n) {
    const a = t.intoRaw(), o = this.raw.createJoint(a, e, r, n);
    a.free();
    let l = Y.newTyped(this.raw, o);
    return this.map.set(o, l), l;
  }
  remove(t, e) {
    this.raw.remove(t, e), this.map.delete(t);
  }
  unmap(t) {
    this.map.delete(t);
  }
  len() {
    return this.map.len();
  }
  contains(t) {
    return this.get(t) != null;
  }
  get(t) {
    return this.map.get(t);
  }
  forEach(t) {
    this.map.forEach(t);
  }
  forEachJointHandleAttachedToRigidBody(t, e) {
    this.raw.forEachJointAttachedToRigidBody(t, e);
  }
  getAll() {
    return this.map.getAll();
  }
}
var _t;
(function(s) {
  s[s.Average = 0] = "Average", s[s.Min = 1] = "Min", s[s.Multiply = 2] = "Multiply", s[s.Max = 3] = "Max";
})(_t || (_t = {}));
class fr {
  constructor(t) {
    this.raw = t || new qt();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
}
class mr {
  constructor(t) {
    this.raw = t || new V();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  forEachActiveRigidBodyHandle(t) {
    this.raw.forEachActiveRigidBodyHandle(t);
  }
}
class yr {
  constructor(t) {
    this.raw = t || new tt();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
}
class Rr {
  constructor(t) {
    this.raw = t || new K(), this.tempManifold = new Sr(null);
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  contactPairsWith(t, e) {
    this.raw.contact_pairs_with(t, e);
  }
  intersectionPairsWith(t, e) {
    this.raw.intersection_pairs_with(t, e);
  }
  contactPair(t, e, r) {
    const n = this.raw.contact_pair(t, e);
    if (n) {
      const a = n.collider1() != t;
      let o;
      for (o = 0; o < n.numContactManifolds(); ++o) this.tempManifold.raw = n.contactManifold(o), this.tempManifold.raw && r(this.tempManifold, a), this.tempManifold.free();
      n.free();
    }
  }
  intersectionPair(t, e) {
    return this.raw.intersection_pair(t, e);
  }
}
class Sr {
  constructor(t) {
    this.raw = t;
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  normal() {
    return c.fromRaw(this.raw.normal());
  }
  localNormal1() {
    return c.fromRaw(this.raw.local_n1());
  }
  localNormal2() {
    return c.fromRaw(this.raw.local_n2());
  }
  subshape1() {
    return this.raw.subshape1();
  }
  subshape2() {
    return this.raw.subshape2();
  }
  numContacts() {
    return this.raw.num_contacts();
  }
  localContactPoint1(t) {
    return c.fromRaw(this.raw.contact_local_p1(t));
  }
  localContactPoint2(t) {
    return c.fromRaw(this.raw.contact_local_p2(t));
  }
  contactDist(t) {
    return this.raw.contact_dist(t);
  }
  contactFid1(t) {
    return this.raw.contact_fid1(t);
  }
  contactFid2(t) {
    return this.raw.contact_fid2(t);
  }
  contactImpulse(t) {
    return this.raw.contact_impulse(t);
  }
  contactTangentImpulseX(t) {
    return this.raw.contact_tangent_impulse_x(t);
  }
  contactTangentImpulseY(t) {
    return this.raw.contact_tangent_impulse_y(t);
  }
  numSolverContacts() {
    return this.raw.num_solver_contacts();
  }
  solverContactPoint(t) {
    return c.fromRaw(this.raw.solver_contact_point(t));
  }
  solverContactDist(t) {
    return this.raw.solver_contact_dist(t);
  }
  solverContactFriction(t) {
    return this.raw.solver_contact_friction(t);
  }
  solverContactRestitution(t) {
    return this.raw.solver_contact_restitution(t);
  }
  solverContactTangentVelocity(t) {
    return c.fromRaw(this.raw.solver_contact_tangent_velocity(t));
  }
}
class it {
  constructor(t, e, r, n, a) {
    this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = n, this.normal2 = a;
  }
  static fromRaw(t) {
    if (!t) return null;
    const e = new it(t.distance(), c.fromRaw(t.point1()), c.fromRaw(t.point2()), c.fromRaw(t.normal1()), c.fromRaw(t.normal2()));
    return t.free(), e;
  }
}
var nt;
(function(s) {
  s[s.Vertex = 0] = "Vertex", s[s.Edge = 1] = "Edge", s[s.Face = 2] = "Face", s[s.Unknown = 3] = "Unknown";
})(nt || (nt = {}));
class wt {
  constructor(t, e) {
    this.point = t, this.isInside = e;
  }
  static fromRaw(t) {
    if (!t) return null;
    const e = new wt(c.fromRaw(t.point()), t.isInside());
    return t.free(), e;
  }
}
class lt {
  constructor(t, e, r, n, a) {
    this.featureType = nt.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, a !== void 0 && (this.featureId = a), n !== void 0 && (this.featureType = n);
  }
  static fromRaw(t, e) {
    if (!e) return null;
    const r = new lt(t.get(e.colliderHandle()), c.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
    return e.free(), r;
  }
}
class ti {
  constructor(t, e) {
    this.origin = t, this.dir = e;
  }
  pointAt(t) {
    return { x: this.origin.x + this.dir.x * t, y: this.origin.y + this.dir.y * t, z: this.origin.z + this.dir.z * t };
  }
}
class ht {
  constructor(t, e, r, n) {
    this.featureType = nt.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, n !== void 0 && (this.featureId = n), r !== void 0 && (this.featureType = r);
  }
  static fromRaw(t) {
    if (!t) return null;
    const e = new ht(t.time_of_impact(), c.fromRaw(t.normal()), t.featureType(), t.featureId());
    return t.free(), e;
  }
}
class ct {
  constructor(t, e, r, n, a) {
    this.featureType = nt.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = r, a !== void 0 && (this.featureId = a), n !== void 0 && (this.featureType = n);
  }
  static fromRaw(t, e) {
    if (!e) return null;
    const r = new ct(t.get(e.colliderHandle()), e.time_of_impact(), c.fromRaw(e.normal()), e.featureType(), e.featureId());
    return e.free(), r;
  }
}
class Dt {
  constructor(t, e) {
    this.collider = t, this.timeOfImpact = e;
  }
  static fromRaw(t, e) {
    if (!e) return null;
    const r = new Dt(t.get(e.colliderHandle()), e.timeOfImpact());
    return e.free(), r;
  }
}
class st {
  constructor(t, e, r, n, a) {
    this.time_of_impact = t, this.witness1 = e, this.witness2 = r, this.normal1 = n, this.normal2 = a;
  }
  static fromRaw(t, e) {
    if (!e) return null;
    const r = new st(e.time_of_impact(), c.fromRaw(e.witness1()), c.fromRaw(e.witness2()), c.fromRaw(e.normal1()), c.fromRaw(e.normal2()));
    return e.free(), r;
  }
}
class dt extends st {
  constructor(t, e, r, n, a, o) {
    super(e, r, n, a, o), this.collider = t;
  }
  static fromRaw(t, e) {
    if (!e) return null;
    const r = new dt(t.get(e.colliderHandle()), e.time_of_impact(), c.fromRaw(e.witness1()), c.fromRaw(e.witness2()), c.fromRaw(e.normal1()), c.fromRaw(e.normal2()));
    return e.free(), r;
  }
}
class z {
  static fromRaw(t, e) {
    const r = t.coShapeType(e);
    let n, a, o, l, h, d, p;
    switch (r) {
      case M.Ball:
        return new we(t.coRadius(e));
      case M.Cuboid:
        return n = t.coHalfExtents(e), new he(n.x, n.y, n.z);
      case M.RoundCuboid:
        return n = t.coHalfExtents(e), a = t.coRoundRadius(e), new de(n.x, n.y, n.z, a);
      case M.Capsule:
        return h = t.coHalfHeight(e), d = t.coRadius(e), new pe(h, d);
      case M.Segment:
        return o = t.coVertices(e), new ue(c.new(o[0], o[1], o[2]), c.new(o[3], o[4], o[5]));
      case M.Polyline:
        return o = t.coVertices(e), l = t.coIndices(e), new fe(o, l);
      case M.Triangle:
        return o = t.coVertices(e), new ge(c.new(o[0], o[1], o[2]), c.new(o[3], o[4], o[5]), c.new(o[6], o[7], o[8]));
      case M.RoundTriangle:
        return o = t.coVertices(e), a = t.coRoundRadius(e), new be(c.new(o[0], o[1], o[2]), c.new(o[3], o[4], o[5]), c.new(o[6], o[7], o[8]), a);
      case M.HalfSpace:
        return p = c.fromRaw(t.coHalfspaceNormal(e)), new vr(p);
      case M.TriMesh:
        o = t.coVertices(e), l = t.coIndices(e);
        const u = t.coTriMeshFlags(e);
        return new me(o, l, u);
      case M.HeightField:
        const g = t.coHeightfieldScale(e), y = t.coHeightfieldHeights(e), E = t.coHeightfieldNRows(e), D = t.coHeightfieldNCols(e), H = t.coHeightFieldFlags(e);
        return new ye(E, D, y, g, H);
      case M.ConvexPolyhedron:
        return o = t.coVertices(e), l = t.coIndices(e), new Et(o, l);
      case M.RoundConvexPolyhedron:
        return o = t.coVertices(e), l = t.coIndices(e), a = t.coRoundRadius(e), new It(o, l, a);
      case M.Cylinder:
        return h = t.coHalfHeight(e), d = t.coRadius(e), new Re(h, d);
      case M.RoundCylinder:
        return h = t.coHalfHeight(e), d = t.coRadius(e), a = t.coRoundRadius(e), new Se(h, d, a);
      case M.Cone:
        return h = t.coHalfHeight(e), d = t.coRadius(e), new ve(h, d);
      case M.RoundCone:
        return h = t.coHalfHeight(e), d = t.coRadius(e), a = t.coRoundRadius(e), new Ce(h, d, a);
      default:
        throw new Error("unknown shape type: " + r);
    }
  }
  castShape(t, e, r, n, a, o, l, h, d, p) {
    let u = c.intoRaw(t), g = R.intoRaw(e), y = c.intoRaw(r), E = c.intoRaw(a), D = R.intoRaw(o), H = c.intoRaw(l), B = this.intoRaw(), U = n.intoRaw(), Z = st.fromRaw(null, B.castShape(u, g, y, U, E, D, H, h, d, p));
    return u.free(), g.free(), y.free(), E.free(), D.free(), H.free(), B.free(), U.free(), Z;
  }
  intersectsShape(t, e, r, n, a) {
    let o = c.intoRaw(t), l = R.intoRaw(e), h = c.intoRaw(n), d = R.intoRaw(a), p = this.intoRaw(), u = r.intoRaw(), g = p.intersectsShape(o, l, u, h, d);
    return o.free(), l.free(), h.free(), d.free(), p.free(), u.free(), g;
  }
  contactShape(t, e, r, n, a, o) {
    let l = c.intoRaw(t), h = R.intoRaw(e), d = c.intoRaw(n), p = R.intoRaw(a), u = this.intoRaw(), g = r.intoRaw(), y = it.fromRaw(u.contactShape(l, h, g, d, p, o));
    return l.free(), h.free(), d.free(), p.free(), u.free(), g.free(), y;
  }
  containsPoint(t, e, r) {
    let n = c.intoRaw(t), a = R.intoRaw(e), o = c.intoRaw(r), l = this.intoRaw(), h = l.containsPoint(n, a, o);
    return n.free(), a.free(), o.free(), l.free(), h;
  }
  projectPoint(t, e, r, n) {
    let a = c.intoRaw(t), o = R.intoRaw(e), l = c.intoRaw(r), h = this.intoRaw(), d = wt.fromRaw(h.projectPoint(a, o, l, n));
    return a.free(), o.free(), l.free(), h.free(), d;
  }
  intersectsRay(t, e, r, n) {
    let a = c.intoRaw(e), o = R.intoRaw(r), l = c.intoRaw(t.origin), h = c.intoRaw(t.dir), d = this.intoRaw(), p = d.intersectsRay(a, o, l, h, n);
    return a.free(), o.free(), l.free(), h.free(), d.free(), p;
  }
  castRay(t, e, r, n, a) {
    let o = c.intoRaw(e), l = R.intoRaw(r), h = c.intoRaw(t.origin), d = c.intoRaw(t.dir), p = this.intoRaw(), u = p.castRay(o, l, h, d, n, a);
    return o.free(), l.free(), h.free(), d.free(), p.free(), u;
  }
  castRayAndGetNormal(t, e, r, n, a) {
    let o = c.intoRaw(e), l = R.intoRaw(r), h = c.intoRaw(t.origin), d = c.intoRaw(t.dir), p = this.intoRaw(), u = ht.fromRaw(p.castRayAndGetNormal(o, l, h, d, n, a));
    return o.free(), l.free(), h.free(), d.free(), p.free(), u;
  }
}
var j;
(function(s) {
  s[s.Ball = 0] = "Ball", s[s.Cuboid = 1] = "Cuboid", s[s.Capsule = 2] = "Capsule", s[s.Segment = 3] = "Segment", s[s.Polyline = 4] = "Polyline", s[s.Triangle = 5] = "Triangle", s[s.TriMesh = 6] = "TriMesh", s[s.HeightField = 7] = "HeightField", s[s.ConvexPolyhedron = 9] = "ConvexPolyhedron", s[s.Cylinder = 10] = "Cylinder", s[s.Cone = 11] = "Cone", s[s.RoundCuboid = 12] = "RoundCuboid", s[s.RoundTriangle = 13] = "RoundTriangle", s[s.RoundCylinder = 14] = "RoundCylinder", s[s.RoundCone = 15] = "RoundCone", s[s.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", s[s.HalfSpace = 17] = "HalfSpace";
})(j || (j = {}));
var Zt;
(function(s) {
  s[s.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
})(Zt || (Zt = {}));
var $t;
(function(s) {
  s[s.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", s[s.ORIENTED = 8] = "ORIENTED", s[s.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", s[s.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", s[s.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", s[s.FIX_INTERNAL_EDGES = 152] = "FIX_INTERNAL_EDGES";
})($t || ($t = {}));
class we extends z {
  constructor(t) {
    super(), this.type = j.Ball, this.radius = t;
  }
  intoRaw() {
    return f.ball(this.radius);
  }
}
class vr extends z {
  constructor(t) {
    super(), this.type = j.HalfSpace, this.normal = t;
  }
  intoRaw() {
    let t = c.intoRaw(this.normal), e = f.halfspace(t);
    return t.free(), e;
  }
}
class he extends z {
  constructor(t, e, r) {
    super(), this.type = j.Cuboid, this.halfExtents = c.new(t, e, r);
  }
  intoRaw() {
    return f.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
  }
}
class de extends z {
  constructor(t, e, r, n) {
    super(), this.type = j.RoundCuboid, this.halfExtents = c.new(t, e, r), this.borderRadius = n;
  }
  intoRaw() {
    return f.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
  }
}
class pe extends z {
  constructor(t, e) {
    super(), this.type = j.Capsule, this.halfHeight = t, this.radius = e;
  }
  intoRaw() {
    return f.capsule(this.halfHeight, this.radius);
  }
}
class ue extends z {
  constructor(t, e) {
    super(), this.type = j.Segment, this.a = t, this.b = e;
  }
  intoRaw() {
    let t = c.intoRaw(this.a), e = c.intoRaw(this.b), r = f.segment(t, e);
    return t.free(), e.free(), r;
  }
}
class ge extends z {
  constructor(t, e, r) {
    super(), this.type = j.Triangle, this.a = t, this.b = e, this.c = r;
  }
  intoRaw() {
    let t = c.intoRaw(this.a), e = c.intoRaw(this.b), r = c.intoRaw(this.c), n = f.triangle(t, e, r);
    return t.free(), e.free(), r.free(), n;
  }
}
class be extends z {
  constructor(t, e, r, n) {
    super(), this.type = j.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = n;
  }
  intoRaw() {
    let t = c.intoRaw(this.a), e = c.intoRaw(this.b), r = c.intoRaw(this.c), n = f.roundTriangle(t, e, r, this.borderRadius);
    return t.free(), e.free(), r.free(), n;
  }
}
class fe extends z {
  constructor(t, e) {
    super(), this.type = j.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
  }
  intoRaw() {
    return f.polyline(this.vertices, this.indices);
  }
}
class me extends z {
  constructor(t, e, r) {
    super(), this.type = j.TriMesh, this.vertices = t, this.indices = e, this.flags = r;
  }
  intoRaw() {
    return f.trimesh(this.vertices, this.indices, this.flags);
  }
}
class Et extends z {
  constructor(t, e) {
    super(), this.type = j.ConvexPolyhedron, this.vertices = t, this.indices = e;
  }
  intoRaw() {
    return this.indices ? f.convexMesh(this.vertices, this.indices) : f.convexHull(this.vertices);
  }
}
class It extends z {
  constructor(t, e, r) {
    super(), this.type = j.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
  }
  intoRaw() {
    return this.indices ? f.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : f.roundConvexHull(this.vertices, this.borderRadius);
  }
}
class ye extends z {
  constructor(t, e, r, n, a) {
    super(), this.type = j.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = n, this.flags = a;
  }
  intoRaw() {
    let t = c.intoRaw(this.scale), e = f.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
    return t.free(), e;
  }
}
class Re extends z {
  constructor(t, e) {
    super(), this.type = j.Cylinder, this.halfHeight = t, this.radius = e;
  }
  intoRaw() {
    return f.cylinder(this.halfHeight, this.radius);
  }
}
class Se extends z {
  constructor(t, e, r) {
    super(), this.type = j.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
  }
  intoRaw() {
    return f.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
  }
}
class ve extends z {
  constructor(t, e) {
    super(), this.type = j.Cone, this.halfHeight = t, this.radius = e;
  }
  intoRaw() {
    return f.cone(this.halfHeight, this.radius);
  }
}
class Ce extends z {
  constructor(t, e, r) {
    super(), this.type = j.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
  }
  intoRaw() {
    return f.roundCone(this.halfHeight, this.radius, this.borderRadius);
  }
}
class Cr {
  constructor(t) {
    this.raw = t || new Yr();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  step(t, e, r, n, a, o, l, h, d, p, u, g) {
    let y = c.intoRaw(t);
    u ? this.raw.stepWithEvents(y, e.raw, r.raw, n.raw, a.raw, o.raw, l.raw, h.raw, d.raw, p.raw, u.raw, g, g ? g.filterContactPair : null, g ? g.filterIntersectionPair : null) : this.raw.step(y, e.raw, r.raw, n.raw, a.raw, o.raw, l.raw, h.raw, d.raw, p.raw), y.free();
  }
}
var Qt;
(function(s) {
  s[s.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", s[s.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", s[s.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", s[s.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", s[s.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", s[s.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", s[s.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", s[s.ONLY_FIXED = 6] = "ONLY_FIXED";
})(Qt || (Qt = {}));
class Er {
  constructor(t) {
    this.raw = t || new ae();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  update(t) {
    this.raw.update(t.raw);
  }
  castRay(t, e, r, n, a, o, l, h, d, p) {
    let u = c.intoRaw(r.origin), g = c.intoRaw(r.dir), y = Dt.fromRaw(e, this.raw.castRay(t.raw, e.raw, u, g, n, a, o, l, h, d, p));
    return u.free(), g.free(), y;
  }
  castRayAndGetNormal(t, e, r, n, a, o, l, h, d, p) {
    let u = c.intoRaw(r.origin), g = c.intoRaw(r.dir), y = ct.fromRaw(e, this.raw.castRayAndGetNormal(t.raw, e.raw, u, g, n, a, o, l, h, d, p));
    return u.free(), g.free(), y;
  }
  intersectionsWithRay(t, e, r, n, a, o, l, h, d, p, u) {
    let g = c.intoRaw(r.origin), y = c.intoRaw(r.dir), E = (D) => o(ct.fromRaw(e, D));
    this.raw.intersectionsWithRay(t.raw, e.raw, g, y, n, a, E, l, h, d, p, u), g.free(), y.free();
  }
  intersectionWithShape(t, e, r, n, a, o, l, h, d, p) {
    let u = c.intoRaw(r), g = R.intoRaw(n), y = a.intoRaw(), E = this.raw.intersectionWithShape(t.raw, e.raw, u, g, y, o, l, h, d, p);
    return u.free(), g.free(), y.free(), E;
  }
  projectPoint(t, e, r, n, a, o, l, h, d) {
    let p = c.intoRaw(r), u = lt.fromRaw(e, this.raw.projectPoint(t.raw, e.raw, p, n, a, o, l, h, d));
    return p.free(), u;
  }
  projectPointAndGetFeature(t, e, r, n, a, o, l, h) {
    let d = c.intoRaw(r), p = lt.fromRaw(e, this.raw.projectPointAndGetFeature(t.raw, e.raw, d, n, a, o, l, h));
    return d.free(), p;
  }
  intersectionsWithPoint(t, e, r, n, a, o, l, h, d) {
    let p = c.intoRaw(r);
    this.raw.intersectionsWithPoint(t.raw, e.raw, p, n, a, o, l, h, d), p.free();
  }
  castShape(t, e, r, n, a, o, l, h, d, p, u, g, y, E) {
    let D = c.intoRaw(r), H = R.intoRaw(n), B = c.intoRaw(a), U = o.intoRaw(), Z = dt.fromRaw(e, this.raw.castShape(t.raw, e.raw, D, H, B, U, l, h, d, p, u, g, y, E));
    return D.free(), H.free(), B.free(), U.free(), Z;
  }
  intersectionsWithShape(t, e, r, n, a, o, l, h, d, p, u) {
    let g = c.intoRaw(r), y = R.intoRaw(n), E = a.intoRaw();
    this.raw.intersectionsWithShape(t.raw, e.raw, g, y, E, o, l, h, d, p, u), g.free(), y.free(), E.free();
  }
  collidersWithAabbIntersectingAabb(t, e, r) {
    let n = c.intoRaw(t), a = c.intoRaw(e);
    this.raw.collidersWithAabbIntersectingAabb(n, a, r), n.free(), a.free();
  }
}
class te {
  constructor(t) {
    this.raw = t || new Qr();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  serializeAll(t, e, r, n, a, o, l, h, d) {
    let p = c.intoRaw(t);
    const u = this.raw.serializeAll(p, e.raw, r.raw, n.raw, a.raw, o.raw, l.raw, h.raw, d.raw);
    return p.free(), u;
  }
  deserializeAll(t) {
    return Nt.fromRaw(this.raw.deserializeAll(t));
  }
}
class Ir {
  constructor(t, e) {
    this.vertices = t, this.colors = e;
  }
}
class Pr {
  constructor(t) {
    this.raw = t || new Br();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
  }
  render(t, e, r, n, a) {
    this.raw.render(t.raw, e.raw, r.raw, n.raw, a.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
  }
}
class Ar {
}
class Fr {
  constructor(t, e, r, n, a) {
    this.params = e, this.bodies = r, this.colliders = n, this.queries = a, this.raw = new Jr(t), this.rawCharacterCollision = new Qe(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
  }
  free() {
    this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
  }
  up() {
    return this.raw.up();
  }
  setUp(t) {
    let e = c.intoRaw(t);
    return this.raw.setUp(e);
  }
  applyImpulsesToDynamicBodies() {
    return this._applyImpulsesToDynamicBodies;
  }
  setApplyImpulsesToDynamicBodies(t) {
    this._applyImpulsesToDynamicBodies = t;
  }
  characterMass() {
    return this._characterMass;
  }
  setCharacterMass(t) {
    this._characterMass = t;
  }
  offset() {
    return this.raw.offset();
  }
  setOffset(t) {
    this.raw.setOffset(t);
  }
  normalNudgeFactor() {
    return this.raw.normalNudgeFactor();
  }
  setNormalNudgeFactor(t) {
    this.raw.setNormalNudgeFactor(t);
  }
  slideEnabled() {
    return this.raw.slideEnabled();
  }
  setSlideEnabled(t) {
    this.raw.setSlideEnabled(t);
  }
  autostepMaxHeight() {
    return this.raw.autostepMaxHeight();
  }
  autostepMinWidth() {
    return this.raw.autostepMinWidth();
  }
  autostepIncludesDynamicBodies() {
    return this.raw.autostepIncludesDynamicBodies();
  }
  autostepEnabled() {
    return this.raw.autostepEnabled();
  }
  enableAutostep(t, e, r) {
    this.raw.enableAutostep(t, e, r);
  }
  disableAutostep() {
    return this.raw.disableAutostep();
  }
  maxSlopeClimbAngle() {
    return this.raw.maxSlopeClimbAngle();
  }
  setMaxSlopeClimbAngle(t) {
    this.raw.setMaxSlopeClimbAngle(t);
  }
  minSlopeSlideAngle() {
    return this.raw.minSlopeSlideAngle();
  }
  setMinSlopeSlideAngle(t) {
    this.raw.setMinSlopeSlideAngle(t);
  }
  snapToGroundDistance() {
    return this.raw.snapToGroundDistance();
  }
  enableSnapToGround(t) {
    this.raw.enableSnapToGround(t);
  }
  disableSnapToGround() {
    this.raw.disableSnapToGround();
  }
  snapToGroundEnabled() {
    return this.raw.snapToGroundEnabled();
  }
  computeColliderMovement(t, e, r, n, a) {
    let o = c.intoRaw(e);
    this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, t.handle, o, this._applyImpulsesToDynamicBodies, this._characterMass, r, n, this.colliders.castClosure(a)), o.free();
  }
  computedMovement() {
    return c.fromRaw(this.raw.computedMovement());
  }
  computedGrounded() {
    return this.raw.computedGrounded();
  }
  numComputedCollisions() {
    return this.raw.numComputedCollisions();
  }
  computedCollision(t, e) {
    if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
      let r = this.rawCharacterCollision;
      return e = e ?? new Ar(), e.translationDeltaApplied = c.fromRaw(r.translationDeltaApplied()), e.translationDeltaRemaining = c.fromRaw(r.translationDeltaRemaining()), e.toi = r.toi(), e.witness1 = c.fromRaw(r.worldWitness1()), e.witness2 = c.fromRaw(r.worldWitness2()), e.normal1 = c.fromRaw(r.worldNormal1()), e.normal2 = c.fromRaw(r.worldNormal2()), e.collider = this.colliders.get(r.handle()), e;
    } else return null;
  }
}
class xr {
  constructor(t, e, r, n) {
    this.raw = new qr(t.handle), this.bodies = e, this.colliders = r, this.queries = n, this._chassis = t;
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  updateVehicle(t, e, r, n) {
    this.raw.update_vehicle(t, this.bodies.raw, this.colliders.raw, this.queries.raw, e, r, this.colliders.castClosure(n));
  }
  currentVehicleSpeed() {
    return this.raw.current_vehicle_speed();
  }
  chassis() {
    return this._chassis;
  }
  get indexUpAxis() {
    return this.raw.index_up_axis();
  }
  set indexUpAxis(t) {
    this.raw.set_index_up_axis(t);
  }
  get indexForwardAxis() {
    return this.raw.index_forward_axis();
  }
  set setIndexForwardAxis(t) {
    this.raw.set_index_forward_axis(t);
  }
  addWheel(t, e, r, n, a) {
    let o = c.intoRaw(t), l = c.intoRaw(e), h = c.intoRaw(r);
    this.raw.add_wheel(o, l, h, n, a), o.free(), l.free(), h.free();
  }
  numWheels() {
    return this.raw.num_wheels();
  }
  wheelChassisConnectionPointCs(t) {
    return c.fromRaw(this.raw.wheel_chassis_connection_point_cs(t));
  }
  setWheelChassisConnectionPointCs(t, e) {
    let r = c.intoRaw(e);
    this.raw.set_wheel_chassis_connection_point_cs(t, r), r.free();
  }
  wheelSuspensionRestLength(t) {
    return this.raw.wheel_suspension_rest_length(t);
  }
  setWheelSuspensionRestLength(t, e) {
    this.raw.set_wheel_suspension_rest_length(t, e);
  }
  wheelMaxSuspensionTravel(t) {
    return this.raw.wheel_max_suspension_travel(t);
  }
  setWheelMaxSuspensionTravel(t, e) {
    this.raw.set_wheel_max_suspension_travel(t, e);
  }
  wheelRadius(t) {
    return this.raw.wheel_radius(t);
  }
  setWheelRadius(t, e) {
    this.raw.set_wheel_radius(t, e);
  }
  wheelSuspensionStiffness(t) {
    return this.raw.wheel_suspension_stiffness(t);
  }
  setWheelSuspensionStiffness(t, e) {
    this.raw.set_wheel_suspension_stiffness(t, e);
  }
  wheelSuspensionCompression(t) {
    return this.raw.wheel_suspension_compression(t);
  }
  setWheelSuspensionCompression(t, e) {
    this.raw.set_wheel_suspension_compression(t, e);
  }
  wheelSuspensionRelaxation(t) {
    return this.raw.wheel_suspension_relaxation(t);
  }
  setWheelSuspensionRelaxation(t, e) {
    this.raw.set_wheel_suspension_relaxation(t, e);
  }
  wheelMaxSuspensionForce(t) {
    return this.raw.wheel_max_suspension_force(t);
  }
  setWheelMaxSuspensionForce(t, e) {
    this.raw.set_wheel_max_suspension_force(t, e);
  }
  wheelBrake(t) {
    return this.raw.wheel_brake(t);
  }
  setWheelBrake(t, e) {
    this.raw.set_wheel_brake(t, e);
  }
  wheelSteering(t) {
    return this.raw.wheel_steering(t);
  }
  setWheelSteering(t, e) {
    this.raw.set_wheel_steering(t, e);
  }
  wheelEngineForce(t) {
    return this.raw.wheel_engine_force(t);
  }
  setWheelEngineForce(t, e) {
    this.raw.set_wheel_engine_force(t, e);
  }
  wheelDirectionCs(t) {
    return c.fromRaw(this.raw.wheel_direction_cs(t));
  }
  setWheelDirectionCs(t, e) {
    let r = c.intoRaw(e);
    this.raw.set_wheel_direction_cs(t, r), r.free();
  }
  wheelAxleCs(t) {
    return c.fromRaw(this.raw.wheel_axle_cs(t));
  }
  setWheelAxleCs(t, e) {
    let r = c.intoRaw(e);
    this.raw.set_wheel_axle_cs(t, r), r.free();
  }
  wheelFrictionSlip(t) {
    return this.raw.wheel_friction_slip(t);
  }
  setWheelFrictionSlip(t, e) {
    this.raw.set_wheel_friction_slip(t, e);
  }
  wheelSideFrictionStiffness(t) {
    return this.raw.wheel_side_friction_stiffness(t);
  }
  setWheelSideFrictionStiffness(t, e) {
    this.raw.set_wheel_side_friction_stiffness(t, e);
  }
  wheelRotation(t) {
    return this.raw.wheel_rotation(t);
  }
  wheelForwardImpulse(t) {
    return this.raw.wheel_forward_impulse(t);
  }
  wheelSideImpulse(t) {
    return this.raw.wheel_side_impulse(t);
  }
  wheelSuspensionForce(t) {
    return this.raw.wheel_suspension_force(t);
  }
  wheelContactNormal(t) {
    return c.fromRaw(this.raw.wheel_contact_normal_ws(t));
  }
  wheelContactPoint(t) {
    return c.fromRaw(this.raw.wheel_contact_point_ws(t));
  }
  wheelSuspensionLength(t) {
    return this.raw.wheel_suspension_length(t);
  }
  wheelHardPoint(t) {
    return c.fromRaw(this.raw.wheel_hard_point_ws(t));
  }
  wheelIsInContact(t) {
    return this.raw.wheel_is_in_contact(t);
  }
  wheelGroundObject(t) {
    return this.colliders.get(this.raw.wheel_ground_object(t));
  }
}
class Nt {
  constructor(t, e, r, n, a, o, l, h, d, p, u, g, y, E) {
    this.gravity = t, this.integrationParameters = new nr(e), this.islands = new mr(r), this.broadPhase = new yr(n), this.narrowPhase = new Rr(a), this.bodies = new ir(o), this.colliders = new zr(l), this.impulseJoints = new hr(h), this.multibodyJoints = new br(d), this.ccdSolver = new fr(p), this.queryPipeline = new Er(u), this.physicsPipeline = new Cr(g), this.serializationPipeline = new te(y), this.debugRenderPipeline = new Pr(E), this.characterControllers = /* @__PURE__ */ new Set(), this.vehicleControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
  }
  free() {
    this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.vehicleControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.vehicleControllers = void 0;
  }
  static fromRaw(t) {
    return t ? new Nt(c.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
  }
  takeSnapshot() {
    return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  static restoreSnapshot(t) {
    return new te().deserializeAll(t);
  }
  debugRender() {
    return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new Ir(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
  }
  step(t, e) {
    this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e), this.queryPipeline.update(this.colliders);
  }
  propagateModifiedBodyPositionsToColliders() {
    this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
  }
  updateSceneQueries() {
    this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.colliders);
  }
  get timestep() {
    return this.integrationParameters.dt;
  }
  set timestep(t) {
    this.integrationParameters.dt = t;
  }
  get lengthUnit() {
    return this.integrationParameters.lengthUnit;
  }
  set lengthUnit(t) {
    this.integrationParameters.lengthUnit = t;
  }
  get numSolverIterations() {
    return this.integrationParameters.numSolverIterations;
  }
  set numSolverIterations(t) {
    this.integrationParameters.numSolverIterations = t;
  }
  get numAdditionalFrictionIterations() {
    return this.integrationParameters.numAdditionalFrictionIterations;
  }
  set numAdditionalFrictionIterations(t) {
    this.integrationParameters.numAdditionalFrictionIterations = t;
  }
  get numInternalPgsIterations() {
    return this.integrationParameters.numInternalPgsIterations;
  }
  set numInternalPgsIterations(t) {
    this.integrationParameters.numInternalPgsIterations = t;
  }
  switchToStandardPgsSolver() {
    this.integrationParameters.switchToStandardPgsSolver();
  }
  switchToSmallStepsPgsSolver() {
    this.integrationParameters.switchToSmallStepsPgsSolver();
  }
  switchToSmallStepsPgsSolverWithoutWarmstart() {
    this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
  }
  createRigidBody(t) {
    return this.bodies.createRigidBody(this.colliders, t);
  }
  createCharacterController(t) {
    let e = new Fr(t, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
    return this.characterControllers.add(e), e;
  }
  removeCharacterController(t) {
    this.characterControllers.delete(t), t.free();
  }
  createVehicleController(t) {
    let e = new xr(t, this.bodies, this.colliders, this.queryPipeline);
    return this.vehicleControllers.add(e), e;
  }
  removeVehicleController(t) {
    this.vehicleControllers.delete(t), t.free();
  }
  createCollider(t, e) {
    let r = e ? e.handle : void 0;
    return this.colliders.createCollider(this.bodies, t, r);
  }
  createImpulseJoint(t, e, r, n) {
    return this.impulseJoints.createJoint(this.bodies, t, e.handle, r.handle, n);
  }
  createMultibodyJoint(t, e, r, n) {
    return this.multibodyJoints.createJoint(t, e.handle, r.handle, n);
  }
  getRigidBody(t) {
    return this.bodies.get(t);
  }
  getCollider(t) {
    return this.colliders.get(t);
  }
  getImpulseJoint(t) {
    return this.impulseJoints.get(t);
  }
  getMultibodyJoint(t) {
    return this.multibodyJoints.get(t);
  }
  removeRigidBody(t) {
    this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  removeCollider(t, e) {
    this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
  }
  removeImpulseJoint(t, e) {
    this.impulseJoints && this.impulseJoints.remove(t.handle, e);
  }
  removeMultibodyJoint(t, e) {
    this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
  }
  forEachCollider(t) {
    this.colliders.forEach(t);
  }
  forEachRigidBody(t) {
    this.bodies.forEach(t);
  }
  forEachActiveRigidBody(t) {
    this.bodies.forEachActiveRigidBody(this.islands, t);
  }
  castRay(t, e, r, n, a, o, l, h) {
    return this.queryPipeline.castRay(this.bodies, this.colliders, t, e, r, n, a, o ? o.handle : null, l ? l.handle : null, this.colliders.castClosure(h));
  }
  castRayAndGetNormal(t, e, r, n, a, o, l, h) {
    return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, t, e, r, n, a, o ? o.handle : null, l ? l.handle : null, this.colliders.castClosure(h));
  }
  intersectionsWithRay(t, e, r, n, a, o, l, h, d) {
    this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, t, e, r, n, a, o, l ? l.handle : null, h ? h.handle : null, this.colliders.castClosure(d));
  }
  intersectionWithShape(t, e, r, n, a, o, l, h) {
    let d = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, t, e, r, n, a, o ? o.handle : null, l ? l.handle : null, this.colliders.castClosure(h));
    return d != null ? this.colliders.get(d) : null;
  }
  projectPoint(t, e, r, n, a, o, l) {
    return this.queryPipeline.projectPoint(this.bodies, this.colliders, t, e, r, n, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(l));
  }
  projectPointAndGetFeature(t, e, r, n, a, o) {
    return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, t, e, r, n ? n.handle : null, a ? a.handle : null, this.colliders.castClosure(o));
  }
  intersectionsWithPoint(t, e, r, n, a, o, l) {
    this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, t, this.colliders.castClosure(e), r, n, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(l));
  }
  castShape(t, e, r, n, a, o, l, h, d, p, u, g) {
    return this.queryPipeline.castShape(this.bodies, this.colliders, t, e, r, n, a, o, l, h, d, p ? p.handle : null, u ? u.handle : null, this.colliders.castClosure(g));
  }
  intersectionsWithShape(t, e, r, n, a, o, l, h, d) {
    this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, t, e, r, this.colliders.castClosure(n), a, o, l ? l.handle : null, h ? h.handle : null, this.colliders.castClosure(d));
  }
  collidersWithAabbIntersectingAabb(t, e, r) {
    this.queryPipeline.collidersWithAabbIntersectingAabb(t, e, this.colliders.castClosure(r));
  }
  contactPairsWith(t, e) {
    this.narrowPhase.contactPairsWith(t.handle, this.colliders.castClosure(e));
  }
  intersectionPairsWith(t, e) {
    this.narrowPhase.intersectionPairsWith(t.handle, this.colliders.castClosure(e));
  }
  contactPair(t, e, r) {
    this.narrowPhase.contactPair(t.handle, e.handle, r);
  }
  intersectionPair(t, e) {
    return this.narrowPhase.intersectionPair(t.handle, e.handle);
  }
}
var Pt;
(function(s) {
  s[s.NONE = 0] = "NONE", s[s.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", s[s.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
})(Pt || (Pt = {}));
class jr {
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  collider1() {
    return this.raw.collider1();
  }
  collider2() {
    return this.raw.collider2();
  }
  totalForce() {
    return c.fromRaw(this.raw.total_force());
  }
  totalForceMagnitude() {
    return this.raw.total_force_magnitude();
  }
  maxForceDirection() {
    return c.fromRaw(this.raw.max_force_direction());
  }
  maxForceMagnitude() {
    return this.raw.max_force_magnitude();
  }
}
class ei {
  constructor(t, e) {
    this.raw = e || new tr(t);
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  drainCollisionEvents(t) {
    this.raw.drainCollisionEvents(t);
  }
  drainContactForceEvents(t) {
    let e = new jr();
    this.raw.drainContactForceEvents((r) => {
      e.raw = r, t(e), e.free();
    });
  }
  clear() {
    this.raw.clear();
  }
}
var At;
(function(s) {
  s[s.NONE = 0] = "NONE", s[s.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", s[s.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
})(At || (At = {}));
var ee;
(function(s) {
  s[s.EMPTY = 0] = "EMPTY", s[s.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
})(ee || (ee = {}));
var Ft;
(function(s) {
  s[s.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", s[s.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", s[s.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", s[s.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", s[s.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", s[s.FIXED_FIXED = 32] = "FIXED_FIXED", s[s.DEFAULT = 15] = "DEFAULT", s[s.ALL = 60943] = "ALL";
})(Ft || (Ft = {}));
class re {
  constructor(t, e, r, n) {
    this.colliderSet = t, this.handle = e, this._parent = r, this._shape = n;
  }
  finalizeDeserialization(t) {
    this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
  }
  ensureShapeIsCached() {
    this._shape || (this._shape = z.fromRaw(this.colliderSet.raw, this.handle));
  }
  get shape() {
    return this.ensureShapeIsCached(), this._shape;
  }
  isValid() {
    return this.colliderSet.raw.contains(this.handle);
  }
  translation() {
    return c.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
  }
  rotation() {
    return R.fromRaw(this.colliderSet.raw.coRotation(this.handle));
  }
  isSensor() {
    return this.colliderSet.raw.coIsSensor(this.handle);
  }
  setSensor(t) {
    this.colliderSet.raw.coSetSensor(this.handle, t);
  }
  setShape(t) {
    let e = t.intoRaw();
    this.colliderSet.raw.coSetShape(this.handle, e), e.free(), this._shape = t;
  }
  setEnabled(t) {
    this.colliderSet.raw.coSetEnabled(this.handle, t);
  }
  isEnabled() {
    return this.colliderSet.raw.coIsEnabled(this.handle);
  }
  setRestitution(t) {
    this.colliderSet.raw.coSetRestitution(this.handle, t);
  }
  setFriction(t) {
    this.colliderSet.raw.coSetFriction(this.handle, t);
  }
  frictionCombineRule() {
    return this.colliderSet.raw.coFrictionCombineRule(this.handle);
  }
  setFrictionCombineRule(t) {
    this.colliderSet.raw.coSetFrictionCombineRule(this.handle, t);
  }
  restitutionCombineRule() {
    return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
  }
  setRestitutionCombineRule(t) {
    this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, t);
  }
  setCollisionGroups(t) {
    this.colliderSet.raw.coSetCollisionGroups(this.handle, t);
  }
  setSolverGroups(t) {
    this.colliderSet.raw.coSetSolverGroups(this.handle, t);
  }
  contactSkin() {
    return this.colliderSet.raw.coContactSkin(this.handle);
  }
  setContactSkin(t) {
    return this.colliderSet.raw.coSetContactSkin(this.handle, t);
  }
  activeHooks() {
    return this.colliderSet.raw.coActiveHooks(this.handle);
  }
  setActiveHooks(t) {
    this.colliderSet.raw.coSetActiveHooks(this.handle, t);
  }
  activeEvents() {
    return this.colliderSet.raw.coActiveEvents(this.handle);
  }
  setActiveEvents(t) {
    this.colliderSet.raw.coSetActiveEvents(this.handle, t);
  }
  activeCollisionTypes() {
    return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
  }
  setContactForceEventThreshold(t) {
    return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, t);
  }
  contactForceEventThreshold() {
    return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
  }
  setActiveCollisionTypes(t) {
    this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, t);
  }
  setDensity(t) {
    this.colliderSet.raw.coSetDensity(this.handle, t);
  }
  setMass(t) {
    this.colliderSet.raw.coSetMass(this.handle, t);
  }
  setMassProperties(t, e, r, n) {
    let a = c.intoRaw(e), o = c.intoRaw(r), l = R.intoRaw(n);
    this.colliderSet.raw.coSetMassProperties(this.handle, t, a, o, l), a.free(), o.free(), l.free();
  }
  setTranslation(t) {
    this.colliderSet.raw.coSetTranslation(this.handle, t.x, t.y, t.z);
  }
  setTranslationWrtParent(t) {
    this.colliderSet.raw.coSetTranslationWrtParent(this.handle, t.x, t.y, t.z);
  }
  setRotation(t) {
    this.colliderSet.raw.coSetRotation(this.handle, t.x, t.y, t.z, t.w);
  }
  setRotationWrtParent(t) {
    this.colliderSet.raw.coSetRotationWrtParent(this.handle, t.x, t.y, t.z, t.w);
  }
  shapeType() {
    return this.colliderSet.raw.coShapeType(this.handle);
  }
  halfExtents() {
    return c.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
  }
  setHalfExtents(t) {
    const e = c.intoRaw(t);
    this.colliderSet.raw.coSetHalfExtents(this.handle, e);
  }
  radius() {
    return this.colliderSet.raw.coRadius(this.handle);
  }
  setRadius(t) {
    this.colliderSet.raw.coSetRadius(this.handle, t);
  }
  roundRadius() {
    return this.colliderSet.raw.coRoundRadius(this.handle);
  }
  setRoundRadius(t) {
    this.colliderSet.raw.coSetRoundRadius(this.handle, t);
  }
  halfHeight() {
    return this.colliderSet.raw.coHalfHeight(this.handle);
  }
  setHalfHeight(t) {
    this.colliderSet.raw.coSetHalfHeight(this.handle, t);
  }
  vertices() {
    return this.colliderSet.raw.coVertices(this.handle);
  }
  indices() {
    return this.colliderSet.raw.coIndices(this.handle);
  }
  heightfieldHeights() {
    return this.colliderSet.raw.coHeightfieldHeights(this.handle);
  }
  heightfieldScale() {
    let t = this.colliderSet.raw.coHeightfieldScale(this.handle);
    return c.fromRaw(t);
  }
  heightfieldNRows() {
    return this.colliderSet.raw.coHeightfieldNRows(this.handle);
  }
  heightfieldNCols() {
    return this.colliderSet.raw.coHeightfieldNCols(this.handle);
  }
  parent() {
    return this._parent;
  }
  friction() {
    return this.colliderSet.raw.coFriction(this.handle);
  }
  restitution() {
    return this.colliderSet.raw.coRestitution(this.handle);
  }
  density() {
    return this.colliderSet.raw.coDensity(this.handle);
  }
  mass() {
    return this.colliderSet.raw.coMass(this.handle);
  }
  volume() {
    return this.colliderSet.raw.coVolume(this.handle);
  }
  collisionGroups() {
    return this.colliderSet.raw.coCollisionGroups(this.handle);
  }
  solverGroups() {
    return this.colliderSet.raw.coSolverGroups(this.handle);
  }
  containsPoint(t) {
    let e = c.intoRaw(t), r = this.colliderSet.raw.coContainsPoint(this.handle, e);
    return e.free(), r;
  }
  projectPoint(t, e) {
    let r = c.intoRaw(t), n = wt.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
    return r.free(), n;
  }
  intersectsRay(t, e) {
    let r = c.intoRaw(t.origin), n = c.intoRaw(t.dir), a = this.colliderSet.raw.coIntersectsRay(this.handle, r, n, e);
    return r.free(), n.free(), a;
  }
  castShape(t, e, r, n, a, o, l, h) {
    let d = c.intoRaw(t), p = c.intoRaw(r), u = R.intoRaw(n), g = c.intoRaw(a), y = e.intoRaw(), E = st.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, d, y, p, u, g, o, l, h));
    return d.free(), p.free(), u.free(), g.free(), y.free(), E;
  }
  castCollider(t, e, r, n, a, o) {
    let l = c.intoRaw(t), h = c.intoRaw(r), d = dt.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, l, e.handle, h, n, a, o));
    return l.free(), h.free(), d;
  }
  intersectsShape(t, e, r) {
    let n = c.intoRaw(e), a = R.intoRaw(r), o = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, o, n, a);
    return n.free(), a.free(), o.free(), l;
  }
  contactShape(t, e, r, n) {
    let a = c.intoRaw(e), o = R.intoRaw(r), l = t.intoRaw(), h = it.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, a, o, n));
    return a.free(), o.free(), l.free(), h;
  }
  contactCollider(t, e) {
    return it.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
  }
  castRay(t, e, r) {
    let n = c.intoRaw(t.origin), a = c.intoRaw(t.dir), o = this.colliderSet.raw.coCastRay(this.handle, n, a, e, r);
    return n.free(), a.free(), o;
  }
  castRayAndGetNormal(t, e, r) {
    let n = c.intoRaw(t.origin), a = c.intoRaw(t.dir), o = ht.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, n, a, e, r));
    return n.free(), a.free(), o;
  }
}
var Q;
(function(s) {
  s[s.Density = 0] = "Density", s[s.Mass = 1] = "Mass", s[s.MassProps = 2] = "MassProps";
})(Q || (Q = {}));
class x {
  constructor(t) {
    this.enabled = true, this.shape = t, this.massPropsMode = Q.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = R.identity(), this.translation = c.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = _t.Average, this.restitutionCombineRule = _t.Average, this.activeCollisionTypes = Ft.DEFAULT, this.activeEvents = Pt.NONE, this.activeHooks = At.NONE, this.mass = 0, this.centerOfMass = c.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = c.zeros(), this.angularInertiaLocalFrame = R.identity();
  }
  static ball(t) {
    const e = new we(t);
    return new x(e);
  }
  static capsule(t, e) {
    const r = new pe(t, e);
    return new x(r);
  }
  static segment(t, e) {
    const r = new ue(t, e);
    return new x(r);
  }
  static triangle(t, e, r) {
    const n = new ge(t, e, r);
    return new x(n);
  }
  static roundTriangle(t, e, r, n) {
    const a = new be(t, e, r, n);
    return new x(a);
  }
  static polyline(t, e) {
    const r = new fe(t, e);
    return new x(r);
  }
  static trimesh(t, e, r) {
    const n = new me(t, e, r);
    return new x(n);
  }
  static cuboid(t, e, r) {
    const n = new he(t, e, r);
    return new x(n);
  }
  static roundCuboid(t, e, r, n) {
    const a = new de(t, e, r, n);
    return new x(a);
  }
  static heightfield(t, e, r, n, a) {
    const o = new ye(t, e, r, n, a);
    return new x(o);
  }
  static cylinder(t, e) {
    const r = new Re(t, e);
    return new x(r);
  }
  static roundCylinder(t, e, r) {
    const n = new Se(t, e, r);
    return new x(n);
  }
  static cone(t, e) {
    const r = new ve(t, e);
    return new x(r);
  }
  static roundCone(t, e, r) {
    const n = new Ce(t, e, r);
    return new x(n);
  }
  static convexHull(t) {
    const e = new Et(t, null);
    return new x(e);
  }
  static convexMesh(t, e) {
    const r = new Et(t, e);
    return new x(r);
  }
  static roundConvexHull(t, e) {
    const r = new It(t, null, e);
    return new x(r);
  }
  static roundConvexMesh(t, e, r) {
    const n = new It(t, e, r);
    return new x(n);
  }
  setTranslation(t, e, r) {
    if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
    return this.translation = { x: t, y: e, z: r }, this;
  }
  setRotation(t) {
    return R.copy(this.rotation, t), this;
  }
  setSensor(t) {
    return this.isSensor = t, this;
  }
  setEnabled(t) {
    return this.enabled = t, this;
  }
  setContactSkin(t) {
    return this.contactSkin = t, this;
  }
  setDensity(t) {
    return this.massPropsMode = Q.Density, this.density = t, this;
  }
  setMass(t) {
    return this.massPropsMode = Q.Mass, this.mass = t, this;
  }
  setMassProperties(t, e, r, n) {
    return this.massPropsMode = Q.MassProps, this.mass = t, c.copy(this.centerOfMass, e), c.copy(this.principalAngularInertia, r), R.copy(this.angularInertiaLocalFrame, n), this;
  }
  setRestitution(t) {
    return this.restitution = t, this;
  }
  setFriction(t) {
    return this.friction = t, this;
  }
  setFrictionCombineRule(t) {
    return this.frictionCombineRule = t, this;
  }
  setRestitutionCombineRule(t) {
    return this.restitutionCombineRule = t, this;
  }
  setCollisionGroups(t) {
    return this.collisionGroups = t, this;
  }
  setSolverGroups(t) {
    return this.solverGroups = t, this;
  }
  setActiveHooks(t) {
    return this.activeHooks = t, this;
  }
  setActiveEvents(t) {
    return this.activeEvents = t, this;
  }
  setActiveCollisionTypes(t) {
    return this.activeCollisionTypes = t, this;
  }
  setContactForceEventThreshold(t) {
    return this.contactForceEventThreshold = t, this;
  }
}
class zr {
  constructor(t) {
    this.raw = t || new A(), this.map = new kt(), t && t.forEachColliderHandle((e) => {
      this.map.set(e, new re(this, e, null));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  castClosure(t) {
    return (e) => {
      if (t) return t(this.get(e));
    };
  }
  finalizeDeserialization(t) {
    this.map.forEach((e) => e.finalizeDeserialization(t));
  }
  createCollider(t, e, r) {
    let n = r != null && r != null;
    if (n && isNaN(r)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
    let a = e.shape.intoRaw(), o = c.intoRaw(e.translation), l = R.intoRaw(e.rotation), h = c.intoRaw(e.centerOfMass), d = c.intoRaw(e.principalAngularInertia), p = R.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createCollider(e.enabled, a, o, l, e.massPropsMode, e.mass, h, d, p, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, n, n ? r : 0, t.raw);
    a.free(), o.free(), l.free(), h.free(), d.free(), p.free();
    let g = n ? t.get(r) : null, y = new re(this, u, g, e.shape);
    return this.map.set(u, y), y;
  }
  remove(t, e, r, n) {
    this.raw.remove(t, e.raw, r.raw, n), this.unmap(t);
  }
  unmap(t) {
    this.map.delete(t);
  }
  get(t) {
    return this.map.get(t);
  }
  len() {
    return this.map.len();
  }
  contains(t) {
    return this.get(t) != null;
  }
  forEach(t) {
    this.map.forEach(t);
  }
  getAll() {
    return this.map.getAll();
  }
}
function ri() {
  return Hr();
}
const ii = Object.freeze(Object.defineProperty({ __proto__: null, get ActiveCollisionTypes() {
  return Ft;
}, get ActiveEvents() {
  return Pt;
}, get ActiveHooks() {
  return At;
}, Ball: we, BroadPhase: yr, CCDSolver: fr, Capsule: pe, CharacterCollision: Ar, get CoefficientCombineRule() {
  return _t;
}, Collider: re, ColliderDesc: x, ColliderSet: zr, ColliderShapeCastHit: dt, Cone: ve, ConvexPolyhedron: Et, Cuboid: he, Cylinder: Re, DebugRenderBuffers: Ir, DebugRenderPipeline: Pr, DynamicRayCastVehicleController: xr, EventQueue: ei, get FeatureType() {
  return nt;
}, FixedImpulseJoint: sr, FixedMultibodyJoint: dr, GenericImpulseJoint: cr, HalfSpace: vr, get HeightFieldFlags() {
  return Zt;
}, Heightfield: ye, ImpulseJoint: W, ImpulseJointSet: hr, IntegrationParameters: nr, IslandManager: mr, get JointAxesMask() {
  return Yt;
}, JointData: q, get JointType() {
  return k;
}, KinematicCharacterController: Fr, get MassPropsMode() {
  return Q;
}, get MotorModel() {
  return Kt;
}, MultibodyJoint: Y, MultibodyJointSet: br, NarrowPhase: Rr, PhysicsPipeline: Cr, PointColliderProjection: lt, PointProjection: wt, Polyline: fe, PrismaticImpulseJoint: _r, PrismaticMultibodyJoint: pr, Quaternion: Xt, get QueryFilterFlags() {
  return Qt;
}, QueryPipeline: Er, Ray: ti, RayColliderHit: Dt, RayColliderIntersection: ct, RayIntersection: ht, RevoluteImpulseJoint: lr, RevoluteMultibodyJoint: ur, RigidBody: Jt, RigidBodyDesc: O, RigidBodySet: ir, get RigidBodyType() {
  return L;
}, RopeImpulseJoint: ar, RotationOps: R, RoundCone: Ce, RoundConvexPolyhedron: It, RoundCuboid: de, RoundCylinder: Se, RoundTriangle: be, SdpMatrix3: rr, SdpMatrix3Ops: Vt, Segment: ue, SerializationPipeline: te, Shape: z, ShapeCastHit: st, ShapeContact: it, get ShapeType() {
  return j;
}, get SolverFlags() {
  return ee;
}, SphericalImpulseJoint: wr, SphericalMultibodyJoint: gr, SpringImpulseJoint: or, TempContactForceEvent: jr, TempContactManifold: Sr, TriMesh: me, get TriMeshFlags() {
  return $t;
}, Triangle: ge, UnitImpulseJoint: le, UnitMultibodyJoint: ce, Vector3: er, VectorOps: c, World: Nt, version: ri }, Symbol.toStringTag, { value: "Module" }));
export {
  Ft as ActiveCollisionTypes,
  Pt as ActiveEvents,
  At as ActiveHooks,
  we as Ball,
  yr as BroadPhase,
  fr as CCDSolver,
  pe as Capsule,
  Ar as CharacterCollision,
  _t as CoefficientCombineRule,
  re as Collider,
  x as ColliderDesc,
  zr as ColliderSet,
  dt as ColliderShapeCastHit,
  ve as Cone,
  Et as ConvexPolyhedron,
  he as Cuboid,
  Re as Cylinder,
  Ir as DebugRenderBuffers,
  Pr as DebugRenderPipeline,
  xr as DynamicRayCastVehicleController,
  ei as EventQueue,
  nt as FeatureType,
  sr as FixedImpulseJoint,
  dr as FixedMultibodyJoint,
  cr as GenericImpulseJoint,
  vr as HalfSpace,
  Zt as HeightFieldFlags,
  ye as Heightfield,
  W as ImpulseJoint,
  hr as ImpulseJointSet,
  nr as IntegrationParameters,
  mr as IslandManager,
  Yt as JointAxesMask,
  q as JointData,
  k as JointType,
  Fr as KinematicCharacterController,
  Q as MassPropsMode,
  Kt as MotorModel,
  Y as MultibodyJoint,
  br as MultibodyJointSet,
  Rr as NarrowPhase,
  Cr as PhysicsPipeline,
  lt as PointColliderProjection,
  wt as PointProjection,
  fe as Polyline,
  _r as PrismaticImpulseJoint,
  pr as PrismaticMultibodyJoint,
  Xt as Quaternion,
  Qt as QueryFilterFlags,
  Er as QueryPipeline,
  ti as Ray,
  Dt as RayColliderHit,
  ct as RayColliderIntersection,
  ht as RayIntersection,
  lr as RevoluteImpulseJoint,
  ur as RevoluteMultibodyJoint,
  Jt as RigidBody,
  O as RigidBodyDesc,
  ir as RigidBodySet,
  L as RigidBodyType,
  ar as RopeImpulseJoint,
  R as RotationOps,
  Ce as RoundCone,
  It as RoundConvexPolyhedron,
  de as RoundCuboid,
  Se as RoundCylinder,
  be as RoundTriangle,
  rr as SdpMatrix3,
  Vt as SdpMatrix3Ops,
  ue as Segment,
  te as SerializationPipeline,
  z as Shape,
  st as ShapeCastHit,
  it as ShapeContact,
  j as ShapeType,
  ee as SolverFlags,
  wr as SphericalImpulseJoint,
  gr as SphericalMultibodyJoint,
  or as SpringImpulseJoint,
  jr as TempContactForceEvent,
  Sr as TempContactManifold,
  me as TriMesh,
  $t as TriMeshFlags,
  ge as Triangle,
  le as UnitImpulseJoint,
  ce as UnitMultibodyJoint,
  er as Vector3,
  c as VectorOps,
  Nt as World,
  ii as default,
  ri as version
};
