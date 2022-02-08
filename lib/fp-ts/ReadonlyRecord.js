"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._traverse = exports._sequence = exports._reduceWithIndex = exports._reduceRightWithIndex = exports._reduceRight = exports._reduce = exports._partitionWithIndex = exports._partitionMapWithIndex = exports._partitionMap = exports._partition = exports._mapWithIndex = exports._map = exports._foldMapWithIndex = exports._foldMap = exports._filterWithIndex = exports._filterMapWithIndex = exports._filterMap = exports._filter = exports.Witherable = exports.URI = exports.TraversableWithIndex = exports.Traversable = exports.FunctorWithIndex = exports.Functor = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = void 0;
exports.collect = collect;
exports.compact = void 0;
exports.deleteAt = deleteAt;
exports.difference = void 0;
exports.elem = elem;
exports.empty = void 0;
exports.every = every;
exports.filterMap = exports.filter = void 0;
exports.filterMapWithIndex = filterMapWithIndex;
exports.filterWithIndex = filterWithIndex;
exports.flap = void 0;
exports.foldMap = foldMap;
exports.foldMapWithIndex = foldMapWithIndex;
exports.fromFoldable = fromFoldable;
exports.fromFoldableMap = fromFoldableMap;
exports.getDifferenceMagma = exports.fromRecord = void 0;
exports.getEq = getEq;
exports.getIntersectionSemigroup = exports.getFoldableWithIndex = exports.getFoldable = void 0;
exports.getMonoid = getMonoid;
exports.getShow = getShow;
exports.has = exports.getWitherable = exports.getUnionSemigroup = exports.getUnionMonoid = exports.getTraversableWithIndex = exports.getTraversable = void 0;
exports.hasOwnProperty = hasOwnProperty;
exports.isEmpty = exports.intersection = exports.insertAt = void 0;
exports.isSubrecord = isSubrecord;
exports.keys = void 0;
exports.lookup = lookup;
exports.map = map;
exports.mapWithIndex = mapWithIndex;
exports.partitionMap = exports.partition = exports.modifyAt = void 0;
exports.partitionMapWithIndex = partitionMapWithIndex;
exports.partitionWithIndex = partitionWithIndex;
exports.pop = pop;
exports.readonlyRecord = void 0;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reduceRightWithIndex = reduceRightWithIndex;
exports.reduceWithIndex = reduceWithIndex;
exports.separate = void 0;
exports.sequence = sequence;
exports.size = exports.singleton = void 0;
exports.some = some;
exports.toRecord = exports.toReadonlyArray = void 0;
exports.toUnfoldable = toUnfoldable;
exports.traverse = traverse;
exports.traverseWithIndex = traverseWithIndex;
exports.wither = exports.wilt = exports.upsertAt = exports.updateAt = exports.union = void 0;

var _Eq = require("./Eq");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var _Separated = require("./Separated");

var S = _interopRequireWildcard(require("./string"));

var _Witherable = require("./Witherable");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * Builds a `ReadonlyRecord` by copying a `Record`.
 *
 * @example
 * import { ReadonlyRecord, fromRecord } from "fp-ts/ReadonlyRecord"
 *
 * const x: Record<string, number> = { a: 1, b: 2 };
 * const y: ReadonlyRecord<string, number> = fromRecord(x);
 * assert.deepStrictEqual(x,y);
 * // `y.a = 5` gives compiler error
 *
 * @category interop
 * @since 2.5.0
 */
var fromRecord = function fromRecord(r) {
  return Object.assign({}, r);
};
/**
 * Builds a mutable `Record` from a `ReadonlyRecord`.
 *
 * @example
 * import { ReadonlyRecord, toRecord } from "fp-ts/ReadonlyRecord"
 *
 * const x: ReadonlyRecord<string, number> = { a: 1, b: 2 };
 * const y: Record<string, number> = toRecord(x);
 * assert.deepStrictEqual(x,y);
 * y.a = 5; // it's ok, y is mutable
 *
 * @category interop
 * @since 2.5.0
 */


exports.fromRecord = fromRecord;

var toRecord = function toRecord(r) {
  return Object.assign({}, r);
};
/**
 * Calculate the number of key/value pairs in a `ReadonlyRecord`,
 *
 * @example
 * import { size } from "fp-ts/ReadonlyRecord";
 *
 * assert.deepStrictEqual(size({ a: true, b: 2, c: "three" }), 3);
 *
 * @since 2.5.0
 */


exports.toRecord = toRecord;

var size = function size(r) {
  return Object.keys(r).length;
};
/**
 * Test whether a `ReadonlyRecord` is empty.
 *
 * @example
 * import { isEmpty } from "fp-ts/ReadonlyRecord"
 *
 * assert.deepStrictEqual(isEmpty({}), true);
 * assert.deepStrictEqual(isEmpty({ a: 3 }), false);
 * @since 2.5.0
 */


exports.size = size;

var isEmpty = function isEmpty(r) {
  for (var _k in r) {
    if (_.has.call(r, _k)) {
      return false;
    }
  }

  return true;
};

exports.isEmpty = isEmpty;

var keys_ = function keys_(O) {
  return function (r) {
    return Object.keys(r).sort(O.compare);
  };
};
/**
 * @since 2.5.0
 */


var keys = /*#__PURE__*/keys_(S.Ord);
/**
 * Map a `ReadonlyRecord` into an `ReadonlyArray`.
 *
 * @example
 * import { collect } from 'fp-ts/ReadonlyRecord'
 * import { Ord } from 'fp-ts/string'
 *
 * const f = <A>(k: string, a: A) => `${k.toUpperCase()}-${a}`;
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(collect(Ord)(f)(x), ["A-foo", "B-false", "C-3"]);
 *
 * @since 2.5.0
 */

exports.keys = keys;

function collect(O) {
  if (typeof O === 'function') {
    return collect(S.Ord)(O);
  }

  var keysO = keys_(O);
  return function (f) {
    return function (r) {
      var out = [];

      var _iterator = _createForOfIteratorHelper(keysO(r)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _key = _step.value;
          out.push(f(_key, r[_key]));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return out;
    };
  };
}
/**
 * Get a sorted `ReadonlyArray` of the key/value pairs contained in a `ReadonlyRecord`.
 *
 * @example
 * import { toReadonlyArray } from 'fp-ts/ReadonlyRecord'
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(toReadonlyArray(x), [
 *   ["a", "foo"],
 *   ["b", false],
 *   ["c", 3],
 * ]);
 *
 * @since 2.5.0
 */


var toReadonlyArray = /*#__PURE__*/collect(S.Ord)(function (k, a) {
  return [k, a];
});
/**
 * Unfolds a `ReadonlyRecord` into a list of key/value pairs.
 *
 * Given an `Unfoldable` class type `U` such as `array` or `readonlyArray`,
 * it uses the `unfold` function to create an instance of `U`,
 * providing an iterating function that iterates over each
 * key/value pair in the record sorted alphabetically by key.
 *
 * @example
 * import { array, readonlyArray } from 'fp-ts'
 * import { toUnfoldable } from 'fp-ts/ReadonlyRecord'
 *
 * assert.deepStrictEqual(toUnfoldable(array)({ b: 2, a: 1 }),[ [ 'a', 1 ], [ 'b', 2 ]])
 * assert.deepStrictEqual(toUnfoldable(readonlyArray)({ b: 2, a: 1 }),[ [ 'a', 1 ], [ 'b', 2 ]])
 *
 * @category destructors
 * @since 2.5.0
 */

exports.toReadonlyArray = toReadonlyArray;

function toUnfoldable(U) {
  return function (r) {
    var sas = toReadonlyArray(r);
    var len = sas.length;
    return U.unfold(0, function (b) {
      return b < len ? _.some([sas[b], b + 1]) : _.none;
    });
  };
}
/**
 * Insert or replace a key/value pair in a `ReadonlyRecord`.
 *
 * @example
 * import { upsertAt } from 'fp-ts/ReadonlyRecord'
 *
 * assert.deepStrictEqual(upsertAt("a", 5)({ a: 1, b: 2 }), { a: 5, b: 2 });
 * assert.deepStrictEqual(upsertAt("c", 5)({ a: 1, b: 2 }), { a: 1, b: 2, c: 5 });
 *
 * @category combinators
 * @since 2.10.0
 */


var upsertAt = function upsertAt(k, a) {
  return function (r) {
    if (_.has.call(r, k) && r[k] === a) {
      return r;
    }

    var out = Object.assign({}, r);
    out[k] = a;
    return out;
  };
};
/**
 * Test whether or not a key exists in a `ReadonlyRecord`.
 *
 * Note. This function is not pipeable because is a `Refinement`.
 *
 * @example
 * import { has } from 'fp-ts/ReadonlyRecord'
 *
 * assert.deepStrictEqual(has("a", { a: 1, b: 2 }), true);
 * assert.deepStrictEqual(has("c", { a: 1, b: 2 }), false);
 *
 * @since 2.10.0
 */


exports.upsertAt = upsertAt;

var has = function has(k, r) {
  return _.has.call(r, k);
};
/**
 * Delete a key and value from a `ReadonlyRecord`.
 *
 * @example
 * import { deleteAt } from 'fp-ts/ReadonlyRecord'
 *
 * assert.deepStrictEqual(deleteAt("a")({ a: 1, b: 2 }), { b: 2 });
 * assert.deepStrictEqual(deleteAt("c")({ a: 1, b: 2 }), { a: 1, b: 2 });
 *
 * @category combinators
 * @since 2.5.0
 */


exports.has = has;

function deleteAt(k) {
  return function (r) {
    if (!_.has.call(r, k)) {
      return r;
    }

    var out = Object.assign({}, r);
    delete out[k];
    return out;
  };
}
/**
 * Replace a key/value pair in a `ReadonlyRecord`.
 *
 * @returns If the specified key exists it returns an `Option` containing a new `Record`
 * with the entry updated, otherwise it returns `None`
 *
 * @example
 * import { updateAt } from 'fp-ts/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(updateAt("a", 3)({ a: 1, b: 2 }), option.some({ a: 3, b: 2 }));
 * assert.deepStrictEqual(updateAt("c", 3)({ a: 1, b: 2 }), option.none);
 *
 * @since 2.5.0
 */


var updateAt = function updateAt(k, a) {
  return function (r) {
    if (!has(k, r)) {
      return _.none;
    }

    if (r[k] === a) {
      return _.some(r);
    }

    var out = Object.assign({}, r);
    out[k] = a;
    return _.some(out);
  };
};
/**
 * Applies a mapping function to one specific key/value pair in a `ReadonlyRecord`.
 *
 * @returns If the specified key exists it returns an `Option` containing a new `Record`
 * with the entry updated, otherwise it returns `None`
 *
 * @example
 * import { modifyAt } from 'fp-ts/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(modifyAt("a", (x: number) => x * 3)({ a: 1, b: 2 }), option.some({ a: 3, b: 2 }));
 * assert.deepStrictEqual(modifyAt("c", (x: number) => x * 3)({ a: 1, b: 2 }), option.none);
 *
 * @since 2.5.0
 */


exports.updateAt = updateAt;

var modifyAt = function modifyAt(k, f) {
  return function (r) {
    if (!has(k, r)) {
      return _.none;
    }

    var next = f(r[k]);

    if (next === r[k]) {
      return _.some(r);
    }

    var out = Object.assign({}, r);
    out[k] = next;
    return _.some(out);
  };
};
/**
 * Delete a key and value from a `ReadonlyRecord`, returning the value as well as the subsequent `ReadonlyRecord`.
 *
 * @returns If the specified key exists it returns an `Option` containing a new `ReadonlyRecord`
 * with the entry removed, otherwise it returns `None`
 *
 * @example
 * import { pop } from 'fp-ts/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(pop("a")({ a: 1, b: 2, c: 3 }), option.some([1, { b: 2, c: 3 }]));
 * assert.deepStrictEqual(pop("x")({ a: 1, b: 2, c: 3 }), option.none);
 *
 * @since 2.5.0
 */


exports.modifyAt = modifyAt;

function pop(k) {
  var deleteAtk = deleteAt(k);
  return function (r) {
    var oa = lookup(k, r);
    return _.isNone(oa) ? _.none : _.some([oa.value, deleteAtk(r)]);
  };
} // TODO: remove non-curried overloading in v3

/**
 * Test whether one `ReadonlyRecord` contains all of the keys and values
 * contained in another `ReadonlyRecord`.
 *
 * @example
 * import { isSubrecord } from 'fp-ts/ReadonlyRecord'
 * import { string } from 'fp-ts'
 *
 * assert.deepStrictEqual(
 *   isSubrecord(string.Eq)({ a: "foo", b: "bar", c: "baz" })({ a: "foo", b: "bar", c: "baz" }),
 *   true
 * );
 * assert.deepStrictEqual(
 *   isSubrecord(string.Eq)({ a: "foo", b: "bar", c: "baz" })({ a: "foo", c: "baz" }),
 *   true
 * );
 * assert.deepStrictEqual(
 *   isSubrecord(string.Eq)({ a: "foo", b: "bar", c: "baz" })({ a: "foo", b: "not-bar", c: "baz" }),
 *   false
 * );
 * assert.deepStrictEqual(
 *   isSubrecord(string.Eq)({ a: "foo", b: "bar" })({ a: "foo", b: "bar", c: "baz" }),
 *   false
 * );
 *
 * @since 2.5.0
 */


function isSubrecord(E) {
  return function (me, that) {
    if (that === undefined) {
      var isSubrecordE = isSubrecord(E);
      return function (that) {
        return isSubrecordE(that, me);
      };
    }

    for (var _k2 in me) {
      if (!_.has.call(that, _k2) || !E.equals(me[_k2], that[_k2])) {
        return false;
      }
    }

    return true;
  };
} // TODO: remove non-curried overloading in v3

/**
 * Lookup the value for a key in a `ReadonlyRecord`.
 *
 * @returns If the specified key exists it returns an `Option` containing the value,
 * otherwise it returns `None`
 *
 * @example
 * import { lookup } from 'fp-ts/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(lookup("b")({ a: "foo", b: "bar" }), option.some("bar"));
 * assert.deepStrictEqual(lookup("c")({ a: "foo", b: "bar" }), option.none);
 *
 * @since 2.5.0
 */


function lookup(k, r) {
  if (r === undefined) {
    return function (r) {
      return lookup(k, r);
    };
  }

  return _.has.call(r, k) ? _.some(r[k]) : _.none;
}
/**
 * @since 2.5.0
 */


var empty = {};
/**
 * Map a `ReadonlyRecord` passing the keys to the iterating function.
 *
 * @example
 * import { mapWithIndex } from "fp-ts/ReadonlyRecord";
 *
 * const f = (k: string, n: number) => `${k.toUpperCase()}-${n}`;
 * assert.deepStrictEqual(mapWithIndex(f)({ a: 3, b: 5 }), { a: "A-3", b: "B-5" });
 *
 * @category combinators
 * @since 2.5.0
 */

exports.empty = empty;

function mapWithIndex(f) {
  return function (r) {
    var out = {};

    for (var _k3 in r) {
      if (_.has.call(r, _k3)) {
        out[_k3] = f(_k3, r[_k3]);
      }
    }

    return out;
  };
}
/**
 * Map a `ReadonlyRecord` passing the values to the iterating function.
 *
 * @example
 * import { map } from "fp-ts/ReadonlyRecord";
 *
 * const f = (n: number) => `-${n}-`;
 * assert.deepStrictEqual(map(f)({ a: 3, b: 5 }), { a: "-3-", b: "-5-" });
 *
 * @category combinators
 * @since 2.5.0
 */


function map(f) {
  return mapWithIndex(function (_, a) {
    return f(a);
  });
}
/**
 * Reduces a `ReadonlyRecord` passing each key/value pair to the iterating function.
 * Entries are processed in the order, sorted by key according to
 * the given `Ord`.
 *
 * @example
 * import { reduceWithIndex } from "fp-ts/ReadonlyRecord";
 * import { Ord } from "fp-ts/string";
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(reduceWithIndex(Ord)([] as string[], (k, b, a) => [...b, `${k}-${a}`])(x), [
 *   "a-foo",
 *   "b-false",
 *   "c-3",
 * ]);
 *
 * @since 2.5.0
 */


function reduceWithIndex() {
  if (arguments.length === 2) {
    return reduceWithIndex(S.Ord).apply(void 0, arguments);
  }

  var keysO = keys_(arguments.length <= 0 ? undefined : arguments[0]);
  return function (b, f) {
    return function (fa) {
      var out = b;
      var ks = keysO(fa);
      var len = ks.length;

      for (var i = 0; i < len; i++) {
        var _k4 = ks[i];
        out = f(_k4, out, fa[_k4]);
      }

      return out;
    };
  };
}
/**
 * Map and fold a `ReadonlyRecord`.
 * Map the `ReadonlyRecord` passing each key/value pair to the iterating function.
 * Then fold the results using the provided `Monoid`.
 *
 * @example
 * import { foldMapWithIndex } from "fp-ts/ReadonlyRecord";
 * import { Ord } from "fp-ts/string";
 * import { Monoid } from "fp-ts/Monoid";
 *
 * const m: Monoid<string> = { empty: "", concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) };
 * const f = (k:string, a: number) => `${k}-${a}`
 * const x = { c: 3, a: 1, b: 2 };
 * assert.deepStrictEqual(foldMapWithIndex(Ord)(m)(f)(x), "a-1 -> b-2 -> c-3");
 *
 * @since 2.5.0
 */


function foldMapWithIndex(O) {
  if ('compare' in O) {
    var keysO = keys_(O);
    return function (M) {
      return function (f) {
        return function (fa) {
          var out = M.empty;
          var ks = keysO(fa);
          var len = ks.length;

          for (var i = 0; i < len; i++) {
            var _k5 = ks[i];
            out = M.concat(out, f(_k5, fa[_k5]));
          }

          return out;
        };
      };
    };
  }

  return foldMapWithIndex(S.Ord)(O);
}
/**
 * Same as `reduceWithIndex`, but reduce starting from the right
 * (i.e. in reverse order, from the last to the first entry according to
 * the given `Ord`).
 *
 * @example
 * import { reduceRightWithIndex } from "fp-ts/ReadonlyRecord";
 * import { Ord } from "fp-ts/string";
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(reduceRightWithIndex(Ord)([] as string[], (k, a, b) => [...b, `${k}-${a}`])(x), [
 *   "c-3",
 *   "b-false",
 *   "a-foo",
 * ]);
 *
 * @since 2.5.0
 */


function reduceRightWithIndex() {
  if (arguments.length === 2) {
    return reduceRightWithIndex(S.Ord).apply(void 0, arguments);
  }

  var keysO = keys_(arguments.length <= 0 ? undefined : arguments[0]);
  return function (b, f) {
    return function (fa) {
      var out = b;
      var ks = keysO(fa);
      var len = ks.length;

      for (var i = len - 1; i >= 0; i--) {
        var _k6 = ks[i];
        out = f(_k6, fa[_k6], out);
      }

      return out;
    };
  };
}
/**
 * Create a `ReadonlyRecord` with one key/value pair.
 *
 * @example
 * import { singleton } from "fp-ts/ReadonlyRecord";
 *
 * assert.deepStrictEqual(singleton("a", 1), { a: 1 });
 *
 * @category constructors
 * @since 2.5.0
 */


var singleton = function singleton(k, a) {
  return _defineProperty({}, k, a);
};
/**
 * @since 2.5.0
 */


exports.singleton = singleton;

function traverseWithIndex(F) {
  var traverseWithIndexOF = _traverseWithIndex(S.Ord)(F);

  return function (f) {
    return function (ta) {
      return traverseWithIndexOF(ta, f);
    };
  };
}
/**
 * @since 2.5.0
 */


function traverse(F) {
  var traverseOF = _traverse(S.Ord)(F);

  return function (f) {
    return function (ta) {
      return traverseOF(ta, f);
    };
  };
}
/**
 * `ReadonlyRecord` sequencing,
 * i.e., take a `ReadonlyRecord` in which elements are monads
 * and return a monad of a `ReadonlyRecord` of the base types.
 * The following example for instance shows sequencing
 * a `ReadonlyRecord<string, Option<number>>`
 * into an `Option<ReadonlyRecord<string, number>>`.
 *
 * `sequence` in `ReadonlyRecord` is equivalent to `sequenceS` in `Apply.ts`.
 *
 * @example
 * import { sequence } from "fp-ts/ReadonlyRecord";
 * import { option } from "fp-ts";
 * import { sequenceS } from "fp-ts/Apply";
 *
 * assert.deepStrictEqual(
 *   sequence(option.Applicative)({ a: option.some(1), b: option.some(2) }),
 *   option.some({ a: 1, b: 2 })
 * );
 * assert.deepStrictEqual(sequence(option.Applicative)({ a: option.some(1), b: option.none }), option.none);
 * assert.deepStrictEqual(
 *   sequence(option.Applicative)({ a: option.some(1), b: option.some(2) }),
 *   sequenceS(option.Applicative)({ a: option.some(1), b: option.some(2) })
 * );
 *
 * @since 2.5.0
 */


function sequence(F) {
  return _sequence(S.Ord)(F);
}
/**
 * @category Witherable
 * @since 2.6.5
 */


var wither = function wither(F) {
  var traverseF = traverse(F);
  return function (f) {
    return function (fa) {
      return F.map((0, _function.pipe)(fa, traverseF(f)), compact);
    };
  };
};
/**
 * @category Witherable
 * @since 2.6.5
 */


exports.wither = wither;

var wilt = function wilt(F) {
  var traverseF = traverse(F);
  return function (f) {
    return function (fa) {
      return F.map((0, _function.pipe)(fa, traverseF(f)), separate);
    };
  };
};
/**
 * Maps a `ReadonlyRecord` with a function returning an `Either` and
 * partitions the resulting `ReadonlyRecord` into `Left`s and `Right`s.
 *
 * @example
 * import { partitionMapWithIndex } from "fp-ts/ReadonlyRecord"
 * import { either } from "fp-ts"
 *
 * const f = (key: string, a: number) =>
 *   a >= 0 ? either.right(`${key} is >= 0 (${a})`) : either.left(`${key} is < 0 (${a})`);
 * assert.deepStrictEqual(partitionMapWithIndex(f)({ a: -1, b: 2, c: 123 }), {
 *   left: {
 *     a: "a is < 0 (-1)",
 *   },
 *   right: {
 *     b: "b is >= 0 (2)",
 *     c: "c is >= 0 (123)",
 *   },
 * });
 *
 * @since 2.5.0
 */


exports.wilt = wilt;

function partitionMapWithIndex(f) {
  return function (r) {
    var left = {};
    var right = {};

    for (var _k7 in r) {
      if (_.has.call(r, _k7)) {
        var e = f(_k7, r[_k7]);

        switch (e._tag) {
          case 'Left':
            left[_k7] = e.left;
            break;

          case 'Right':
            right[_k7] = e.right;
            break;
        }
      }
    }

    return (0, _Separated.separated)(left, right);
  };
}
/**
 * Partition a `ReadonlyRecord` into two parts according to a predicate
 * that takes a key and a value.
 *
 * @example
 * import { partitionWithIndex } from "fp-ts/ReadonlyRecord"
 *
 * assert.deepStrictEqual(
 *   partitionWithIndex((key: string, a: number) => key.length <= 1 && a > 0)({ a: -1, b: 2, ccc: 7 }),
 *   {
 *     left: {
 *       a: -1,
 *       ccc: 7,
 *     },
 *     right: {
 *       b: 2,
 *     },
 *   }
 * );
 *
 * @since 2.5.0
 */


function partitionWithIndex(predicateWithIndex) {
  return function (r) {
    var left = {};
    var right = {};

    for (var _k8 in r) {
      if (_.has.call(r, _k8)) {
        var _a = r[_k8];

        if (predicateWithIndex(_k8, _a)) {
          right[_k8] = _a;
        } else {
          left[_k8] = _a;
        }
      }
    }

    return (0, _Separated.separated)(left, right);
  };
}
/**
 * Maps a `ReadonlyRecord` with an iterating function that takes key and value and
 * returns an `Option`, keeping only the `Some` values and discarding `None`s.
 *
 * @example
 * import { filterMapWithIndex } from "fp-ts/ReadonlyRecord"
 * import { option } from "fp-ts"
 *
 * const f = (key: string, a: number) => (a >= 0 ? option.some(`${key}${a}`) : option.none);
 * assert.deepStrictEqual(filterMapWithIndex(f)({ a: -1, b: 2, c: 3 }), {
 *   b: "b2",
 *   c: "c3",
 * });
 *
 * @category combinators
 * @since 2.5.0
 */


function filterMapWithIndex(f) {
  return function (r) {
    var out = {};

    for (var _k9 in r) {
      if (_.has.call(r, _k9)) {
        var ob = f(_k9, r[_k9]);

        if (_.isSome(ob)) {
          out[_k9] = ob.value;
        }
      }
    }

    return out;
  };
}
/**
 * Produce a new `ReadonlyRecord` keeping only the entries that satisfy
 * a predicate taking key and value as input.
 *
 * @example
 * import { filterWithIndex } from "fp-ts/ReadonlyRecord"
 *
 * assert.deepStrictEqual(
 *   filterWithIndex((s: string, v: number) => s.length <= 1 && v > 0)({ a: 1, b: -2, ccc: 3 }),
 *   {
 *     a: 1,
 *   }
 * );
 *
 * @since 2.5.0
 */


function filterWithIndex(predicateWithIndex) {
  return function (fa) {
    var out = {};
    var changed = false;

    for (var _key2 in fa) {
      if (_.has.call(fa, _key2)) {
        var _a2 = fa[_key2];

        if (predicateWithIndex(_key2, _a2)) {
          out[_key2] = _a2;
        } else {
          changed = true;
        }
      }
    }

    return changed ? out : fa;
  };
}
/**
 * Create a `ReadonlyRecord` from a foldable collection of key/value pairs, using the
 * specified `Magma` to combine values for duplicate keys.
 *
 * @since 2.5.0
 */


function fromFoldable(M, F) {
  var fromFoldableMapM = fromFoldableMap(M, F);
  return function (fka) {
    return fromFoldableMapM(fka, _function.identity);
  };
}
/**
 * Create a `ReadonlyRecord` from a foldable collection using the specified functions to:
 *
 * - map to key/value pairs
 * - combine values for duplicate keys.
 *
 * @example
 * import { last } from 'fp-ts/Semigroup'
 * import { Foldable, zip } from 'fp-ts/ReadonlyArray'
 * import { identity } from 'fp-ts/function'
 * import { ReadonlyRecord, fromFoldableMap } from 'fp-ts/ReadonlyRecord'
 *
 * export const zipObject = <K extends string, A>(keys: ReadonlyArray<K>, values: ReadonlyArray<A>): ReadonlyRecord<K, A> =>
 *   fromFoldableMap(last<A>(), Foldable)(zip(keys, values), identity)
 *
 * assert.deepStrictEqual(zipObject(['a', 'b'], [1, 2, 3]), { a: 1, b: 2 })
 *
 * interface User {
 *   readonly id: string
 *   readonly name: string
 * }
 *
 * const users: ReadonlyArray<User> = [
 *   { id: 'id1', name: 'name1' },
 *   { id: 'id2', name: 'name2' },
 *   { id: 'id1', name: 'name3' }
 * ]
 *
 * assert.deepStrictEqual(fromFoldableMap(last<User>(), Foldable)(users, user => [user.id, user]), {
 *   id1: { id: 'id1', name: 'name3' },
 *   id2: { id: 'id2', name: 'name2' }
 * })
 *
 * @since 2.5.0
 */


function fromFoldableMap(M, F) {
  return function (ta, f) {
    return F.reduce(ta, {}, function (r, a) {
      var _f = f(a),
          _f2 = _slicedToArray(_f, 2),
          k = _f2[0],
          b = _f2[1];

      r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
      return r;
    });
  };
}
/**
 * Test if every value in a `ReadonlyRecord` satisfies the predicate.
 *
 * @example
 * import { every } from "fp-ts/ReadonlyRecord"
 *
 * assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: 2 }), true);
 * assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: -1 }), false);
 *
 * @since 2.5.0
 */


function every(predicate) {
  return function (r) {
    for (var _k10 in r) {
      if (!predicate(r[_k10])) {
        return false;
      }
    }

    return true;
  };
}
/**
 * Test if at least one value in a `ReadonlyRecord` satisfies the predicate.
 *
 * @example
 * import { some } from "fp-ts/ReadonlyRecord"
 *
 * assert.deepStrictEqual(some((n: number) => n >= 0)({ a: 1, b: -2 }), true);
 * assert.deepStrictEqual(some((n: number) => n >= 0)({ a: -1, b: -2 }), false);
 *
 * @since 2.5.0
 */


function some(predicate) {
  return function (r) {
    for (var _k11 in r) {
      if (predicate(r[_k11])) {
        return true;
      }
    }

    return false;
  };
} // TODO: remove non-curried overloading in v3

/**
 * Given an `Eq` checks if a `ReadonlyRecord` contains an entry with
 * value equal to a provided value.
 *
 * @example
 * import { elem } from "fp-ts/ReadonlyRecord"
 * import { number } from "fp-ts"
 *
 * assert.deepStrictEqual(elem(number.Eq)(123, { foo: 123, bar: 234 }), true);
 * assert.deepStrictEqual(elem(number.Eq)(-7, { foo: 123, bar: 234 }), false);
 *
 * @since 2.5.0
 */


function elem(E) {
  return function (a, fa) {
    if (fa === undefined) {
      var elemE = elem(E);
      return function (fa) {
        return elemE(a, fa);
      };
    }

    for (var _k12 in fa) {
      if (E.equals(fa[_k12], a)) {
        return true;
      }
    }

    return false;
  };
}
/**
 * Union of two `ReadonlyRecord`s.
 * Takes two `ReadonlyRecord`s and produces a `ReadonlyRecord` combining all the
 * entries of the two inputs.
 * It uses the `concat` function of the provided `Magma` to
 * combine the elements with the same key.
 *
 * @example
 * import { union } from "fp-ts/ReadonlyRecord";
 * import { Magma } from "fp-ts/Magma";
 *
 * const m1: Magma<number> = { concat: (x: number, y: number) => x + y };
 * assert.deepStrictEqual(union(m1)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 4, b: 2, c: 3 });
 * const m2: Magma<number> = { concat: (x: number) => x };
 * assert.deepStrictEqual(union(m2)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 1, b: 2, c: 3 });
 *
 * @category combinators
 * @since 2.11.0
 */


var union = function union(M) {
  return function (second) {
    return function (first) {
      if (isEmpty(first)) {
        return second;
      }

      if (isEmpty(second)) {
        return first;
      }

      var out = {};

      for (var _k13 in first) {
        if (has(_k13, second)) {
          out[_k13] = M.concat(first[_k13], second[_k13]);
        } else {
          out[_k13] = first[_k13];
        }
      }

      for (var _k14 in second) {
        if (!has(_k14, out)) {
          out[_k14] = second[_k14];
        }
      }

      return out;
    };
  };
};
/**
 * Intersection of two `ReadonlyRecord`s.
 * Takes two `ReadonlyRecord`s and produces a `ReadonlyRecord` combining only the
 * entries of the two inputswith the same key.
 * It uses the `concat` function of the provided `Magma` to
 * combine the elements.
 *
 * @example
 * import { intersection } from "fp-ts/ReadonlyRecord";
 * import { Magma } from "fp-ts/Magma";
 *
 * const m1: Magma<number> = { concat: (x: number, y: number) => x + y };
 * assert.deepStrictEqual(intersection(m1)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 4});
 * const m2: Magma<number> = { concat: (x: number) => x };
 * assert.deepStrictEqual(intersection(m2)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 1});
 *
 * @category combinators
 * @since 2.11.0
 */


exports.union = union;

var intersection = function intersection(M) {
  return function (second) {
    return function (first) {
      if (isEmpty(first) || isEmpty(second)) {
        return empty;
      }

      var out = {};

      for (var _k15 in first) {
        if (has(_k15, second)) {
          out[_k15] = M.concat(first[_k15], second[_k15]);
        }
      }

      return out;
    };
  };
};
/**
 * Difference between two `ReadonlyRecord`s.
 * Takes two `ReadonlyRecord`s and produces a `ReadonlyRecord` composed by the
 * entries of the two inputs, removing the entries with the same
 * key in both inputs.
 *
 * @example
 * import { difference } from "fp-ts/ReadonlyRecord";
 *
 * assert.deepStrictEqual(difference({ a: 1 })({ a: 1, b: 2 }), { b: 2 });
 * assert.deepStrictEqual(difference({ a: 3 })({ a: 1, b: 2 }), { b: 2 });
 * assert.deepStrictEqual(difference({ a: 3, c: 3 })({ a: 1, b: 2 }), { b: 2, c: 3 });
 *
 * @category combinators
 * @since 2.11.0
 */


exports.intersection = intersection;

var difference = function difference(second) {
  return function (first) {
    if (isEmpty(first)) {
      return second;
    }

    if (isEmpty(second)) {
      return first;
    }

    var out = {};

    for (var _k16 in first) {
      if (!has(_k16, second)) {
        out[_k16] = first[_k16];
      }
    }

    for (var _k17 in second) {
      if (!has(_k17, first)) {
        out[_k17] = second[_k17];
      }
    }

    return out;
  };
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/** @internal */


exports.difference = difference;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};
/** @internal */

/* istanbul ignore next */


exports._map = _map;

var _mapWithIndex = function _mapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, mapWithIndex(f));
};
/** @internal */

/* istanbul ignore next */


exports._mapWithIndex = _mapWithIndex;

var _reduce = function _reduce(O) {
  var reduceO = reduce(O);
  return function (fa, b, f) {
    return (0, _function.pipe)(fa, reduceO(b, f));
  };
};
/** @internal */


exports._reduce = _reduce;

var _foldMap = function _foldMap(O) {
  return function (M) {
    var foldMapM = foldMap(O)(M);
    return function (fa, f) {
      return (0, _function.pipe)(fa, foldMapM(f));
    };
  };
};
/** @internal */

/* istanbul ignore next */


exports._foldMap = _foldMap;

var _reduceRight = function _reduceRight(O) {
  var reduceRightO = reduceRight(O);
  return function (fa, b, f) {
    return (0, _function.pipe)(fa, reduceRightO(b, f));
  };
};
/** @internal */

/* istanbul ignore next */


exports._reduceRight = _reduceRight;

var _filter = function _filter(fa, predicate) {
  return (0, _function.pipe)(fa, filter(predicate));
};
/** @internal */

/* istanbul ignore next */


exports._filter = _filter;

var _filterMap = function _filterMap(fa, f) {
  return (0, _function.pipe)(fa, filterMap(f));
};
/** @internal */

/* istanbul ignore next */


exports._filterMap = _filterMap;

var _partition = function _partition(fa, predicate) {
  return (0, _function.pipe)(fa, partition(predicate));
};
/** @internal */

/* istanbul ignore next */


exports._partition = _partition;

var _partitionMap = function _partitionMap(fa, f) {
  return (0, _function.pipe)(fa, partitionMap(f));
};
/** @internal */

/* istanbul ignore next */


exports._partitionMap = _partitionMap;

var _reduceWithIndex = function _reduceWithIndex(O) {
  var reduceWithIndexO = reduceWithIndex(O);
  return function (fa, b, f) {
    return (0, _function.pipe)(fa, reduceWithIndexO(b, f));
  };
};
/** @internal */


exports._reduceWithIndex = _reduceWithIndex;

var _foldMapWithIndex = function _foldMapWithIndex(O) {
  var foldMapWithIndexO = foldMapWithIndex(O);
  return function (M) {
    var foldMapWithIndexM = foldMapWithIndexO(M);
    return function (fa, f) {
      return (0, _function.pipe)(fa, foldMapWithIndexM(f));
    };
  };
};
/** @internal */

/* istanbul ignore next */


exports._foldMapWithIndex = _foldMapWithIndex;

var _reduceRightWithIndex = function _reduceRightWithIndex(O) {
  var reduceRightWithIndexO = reduceRightWithIndex(O);
  return function (fa, b, f) {
    return (0, _function.pipe)(fa, reduceRightWithIndexO(b, f));
  };
};
/** @internal */

/* istanbul ignore next */


exports._reduceRightWithIndex = _reduceRightWithIndex;

var _partitionMapWithIndex = function _partitionMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, partitionMapWithIndex(f));
};
/** @internal */

/* istanbul ignore next */


exports._partitionMapWithIndex = _partitionMapWithIndex;

var _partitionWithIndex = function _partitionWithIndex(fa, predicateWithIndex) {
  return (0, _function.pipe)(fa, partitionWithIndex(predicateWithIndex));
};
/** @internal */

/* istanbul ignore next */


exports._partitionWithIndex = _partitionWithIndex;

var _filterMapWithIndex = function _filterMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, filterMapWithIndex(f));
};
/** @internal */

/* istanbul ignore next */


exports._filterMapWithIndex = _filterMapWithIndex;

var _filterWithIndex = function _filterWithIndex(fa, predicateWithIndex) {
  return (0, _function.pipe)(fa, filterWithIndex(predicateWithIndex));
};
/** @internal */


exports._filterWithIndex = _filterWithIndex;

var _traverse = function _traverse(O) {
  var traverseWithIndexO = _traverseWithIndex(O);

  return function (F) {
    var traverseWithIndexOF = traverseWithIndexO(F);
    return function (ta, f) {
      return traverseWithIndexOF(ta, (0, _function.flow)(_function.SK, f));
    };
  };
};
/** @internal */


exports._traverse = _traverse;

var _sequence = function _sequence(O) {
  var traverseO = _traverse(O);

  return function (F) {
    var traverseOF = traverseO(F);
    return function (ta) {
      return traverseOF(ta, _function.identity);
    };
  };
};

exports._sequence = _sequence;

var _traverseWithIndex = function _traverseWithIndex(O) {
  return function (F) {
    var keysO = keys_(O);
    return function (ta, f) {
      var ks = keysO(ta);

      if (ks.length === 0) {
        return F.of(empty);
      }

      var fr = F.of({});

      var _iterator2 = _createForOfIteratorHelper(ks),
          _step2;

      try {
        var _loop = function _loop() {
          var key = _step2.value;
          fr = F.ap(F.map(fr, function (r) {
            return function (b) {
              r[key] = b;
              return r;
            };
          }), f(key, ta[key]));
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return fr;
    };
  };
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * Given a `Predicate`, it produces a new `ReadonlyRecord` keeping only the entries with a
 * value that satisfies the provided predicate.
 *
 * @example
 * import { filter } from "fp-ts/ReadonlyRecord"
 *
 * assert.deepStrictEqual(filter((s: string) => s.length < 4)({ a: "foo", b: "bar", c: "verylong" }), {
 *   a: "foo",
 *   b: "bar",
 * });
 *
 * @category Filterable
 * @since 2.5.0
 */


var filter = function filter(predicate) {
  return filterWithIndex(function (_, a) {
    return predicate(a);
  });
};
/**
 * Maps a `ReadonlyRecord` with an iterating function that returns an `Option`
 * and it keeps only the `Some` values discarding the `None`s.
 *
 * @example
 * import { filterMap } from "fp-ts/ReadonlyRecord"
 * import { option } from "fp-ts"
 *
 * const f = (s: string) => s.length < 4 ? option.some(`${s} is short`): option.none
 * assert.deepStrictEqual(filterMap(f)({ a: "foo", b: "bar", c: "verylong" }), {
 *   a: "foo is short",
 *   b: "bar is short",
 * });
 *
 * @category Filterable
 * @since 2.5.0
 */


exports.filter = filter;

var filterMap = function filterMap(f) {
  return filterMapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * Partition a `ReadonlyRecord` into two parts according to a `Predicate`.
 *
 * @example
 * import { partition } from "fp-ts/ReadonlyRecord"
 *
 * assert.deepStrictEqual(partition((s: string) => s.length < 4)({ a: "foo", b: "bar", c: "verylong" }), {
 *   left:{
 *     c: "verylong"
 *   },
 *   right: {
 *     a: "foo",
 *     b: "bar",
 *   },
 * });
 *
 * @category Filterable
 * @since 2.5.0
 */


exports.filterMap = filterMap;

var partition = function partition(predicate) {
  return partitionWithIndex(function (_, a) {
    return predicate(a);
  });
};
/**
 * Maps a `ReadonlyRecord` with a function returning an `Either` and
 * partitions the resulting `ReadonlyRecord` into `Left`s and `Right`s.
 *
 * @example
 * import { partitionMap } from "fp-ts/ReadonlyRecord"
 * import { either } from "fp-ts"
 *
 * const f = (s: string) => (s.length < 4 ? either.right(`${s} is short`) : either.left(`${s} is not short`));
 * assert.deepStrictEqual(partitionMap(f)({ a: "foo", b: "bar", c: "verylong" }), {
 *   left: {
 *     c: "verylong is not short",
 *   },
 *   right: {
 *     a: "foo is short",
 *     b: "bar is short",
 *   },
 * });
 *
 * @category Filterable
 * @since 2.5.0
 */


exports.partition = partition;

var partitionMap = function partitionMap(f) {
  return partitionMapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * Reduces a `ReadonlyRecord` passing each value to the iterating function.
 * Entries are processed in order, sorted by key according to
 * the given `Ord`.
 *
 * @example
 * import { reduce } from "fp-ts/ReadonlyRecord";
 * import { Ord } from "fp-ts/string";
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(reduce(Ord)([] as string[], (b, a) => [...b, `-${a}-`])(x), [
 *   "-foo-",
 *   "-false-",
 *   "-3-",
 * ]);
 *
 * @category Foldable
 * @since 2.5.0
 */


exports.partitionMap = partitionMap;

function reduce() {
  if (arguments.length === 1) {
    var reduceWithIndexO = reduceWithIndex(arguments.length <= 0 ? undefined : arguments[0]);
    return function (b, f) {
      return reduceWithIndexO(b, function (_, b, a) {
        return f(b, a);
      });
    };
  }

  return reduce(S.Ord).apply(void 0, arguments);
}
/**
 * Map and fold a `ReadonlyRecord`.
 * Map the `ReadonlyRecord` passing each value to the iterating function.
 * Then fold the results using the provided `Monoid`.
 *
 * @example
 * import { foldMap } from "fp-ts/ReadonlyRecord";
 * import { Ord } from "fp-ts/string";
 * import { Monoid } from "fp-ts/Monoid";
 *
 * const m: Monoid<string> = { empty: "", concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) };
 * const f = (a: number) => `-${a}-`;
 * const x = { c: 3, a: 1, b: 2 };
 * assert.deepStrictEqual(foldMap(Ord)(m)(f)(x), "-1- -> -2- -> -3-");
 *
 * @category Foldable
 * @since 2.5.0
 */


function foldMap(O) {
  if ('compare' in O) {
    var foldMapWithIndexO = foldMapWithIndex(O);
    return function (M) {
      var foldMapWithIndexM = foldMapWithIndexO(M);
      return function (f) {
        return foldMapWithIndexM(function (_, a) {
          return f(a);
        });
      };
    };
  }

  return foldMap(S.Ord)(O);
}
/**
 * Same as `reduce` but entries are processed _from the right_,
 * i.e. in reverse order, from the last to the first entry, according to
 * the given `Ord`.
 *
 * @example
 * import { reduceRight } from "fp-ts/ReadonlyRecord";
 * import { Ord } from "fp-ts/string";
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(reduceRight(Ord)([] as string[], (a, b) => [...b, `-${a}-`])(x), [
 *   "-3-",
 *   "-false-",
 *   "-foo-",
 * ]);
 *
 * @category Foldable
 * @since 2.5.0
 */


function reduceRight() {
  if (arguments.length === 1) {
    var reduceRightWithIndexO = reduceRightWithIndex(arguments.length <= 0 ? undefined : arguments[0]);
    return function (b, f) {
      return reduceRightWithIndexO(b, function (_, b, a) {
        return f(b, a);
      });
    };
  }

  return reduceRight(S.Ord).apply(void 0, arguments);
}
/**
 * Compact a `ReadonlyRecord` of `Option`s discarding the `None` values and
 * keeping the `Some` values.
 *
 * @example
 * import { compact } from 'fp-ts/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(compact({ a: option.some("foo"), b: option.none, c: option.some("bar") }), {
 *   a: "foo",
 *   c: "bar",
 * });
 *
 * @category Compactable
 * @since 2.5.0
 */


var compact = function compact(r) {
  var out = {};

  for (var _k18 in r) {
    if (_.has.call(r, _k18)) {
      var oa = r[_k18];

      if (_.isSome(oa)) {
        out[_k18] = oa.value;
      }
    }
  }

  return out;
};
/**
 * Separate a `ReadonlyRecord` of `Either`s into `Left`s and `Right`s.
 *
 * @example
 * import { separate } from 'fp-ts/ReadonlyRecord'
 * import { either } from 'fp-ts'
 *
 * assert.deepStrictEqual(
 *   separate({ a: either.right("foo"), b: either.left("bar"), c: either.right("baz") }),
 *   {
 *     right: {
 *       a: "foo",
 *       c: "baz",
 *     },
 *     left: {
 *       b: "bar",
 *     },
 *   }
 * );
 *
 * @category Compactable
 * @since 2.5.0
 */


exports.compact = compact;

var separate = function separate(r) {
  var left = {};
  var right = {};

  for (var _k19 in r) {
    if (_.has.call(r, _k19)) {
      var e = r[_k19];

      if (_.isLeft(e)) {
        left[_k19] = e.left;
      } else {
        right[_k19] = e.right;
      }
    }
  }

  return (0, _Separated.separated)(left, right);
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.5.0
 */


exports.separate = separate;
var URI = 'ReadonlyRecord';
/**
 * @category instances
 * @since 2.5.0
 */

exports.URI = URI;

function getShow(O) {
  if ('compare' in O) {
    return function (S) {
      return {
        show: function show(r) {
          var elements = collect(O)(function (k, a) {
            return "".concat(JSON.stringify(k), ": ").concat(S.show(a));
          })(r).join(', ');
          return elements === '' ? '{}' : "{ ".concat(elements, " }");
        }
      };
    };
  }

  return getShow(S.Ord)(O);
}
/**
 * Given an `Eq` for the base type, it produces an `Eq`
 * for a `ReadonlyRecord` of that base type.
 *
 * @example
 * import { getEq, ReadonlyRecord } from "fp-ts/ReadonlyRecord";
 * import { string } from "fp-ts";
 * import { Eq } from "fp-ts/Eq";
 *
 * const eq: Eq<ReadonlyRecord<string, string>> = getEq(string.Eq);
 * assert.deepStrictEqual(eq.equals({ a: "foo" }, { b: "bar" }), false);
 * assert.deepStrictEqual(eq.equals({ a: "foo" }, { a: "foo" }), true);
 *
 * @category instances
 * @since 2.5.0
 */


function getEq(E) {
  var isSubrecordE = isSubrecord(E);
  return (0, _Eq.fromEquals)(function (x, y) {
    return isSubrecordE(x)(y) && isSubrecordE(y)(x);
  });
}
/**
 * Returns a `Monoid` instance for `ReadonlyRecord`s, given a `Semigroup`
 * instance for the base type.
 * The `Monoid` makes the union of two `ReadonlyRecord`s comining the
 * overlapping entries with the provided `Semigroup`.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 * import { getMonoid } from 'fp-ts/ReadonlyRecord'
 *
 * const M = getMonoid(SemigroupSum);
 * assert.deepStrictEqual(M.concat({ foo: 123, bar: 234 }, { foo: 456, baz: 567 }), { foo: 579 , bar: 234, baz: 567 });
 *
 * @category instances
 * @since 2.5.0
 */


function getMonoid(S) {
  return {
    concat: function concat(first, second) {
      if (isEmpty(first)) {
        return second;
      }

      if (isEmpty(second)) {
        return first;
      }

      var r = Object.assign({}, first);

      for (var _k20 in second) {
        if (_.has.call(second, _k20)) {
          r[_k20] = _.has.call(first, _k20) ? S.concat(first[_k20], second[_k20]) : second[_k20];
        }
      }

      return r;
    },
    empty: empty
  };
}
/**
 * @category instances
 * @since 2.7.0
 */


var Functor = {
  URI: URI,
  map: _map
};
/**
 * Derivable from `Functor`.
 * Takes a value and a `ReadonlyRecord` of functions and returns a
 * `ReadonlyRecord` by applying each function to the input value.
 *
 * @example
 * import { flap } from "fp-ts/ReadonlyRecord"
 *
 * const fab = { x: (n: number) => `${n} times 2`, y: (n: number) => `${n * 2}` };
 * assert.deepStrictEqual(flap(3)(fab), {
 *   x: "3 times 2",
 *   y: "6",
 * });
 *
 * @category combinators
 * @since 2.10.0
 */

exports.Functor = Functor;
var flap = /*#__PURE__*/(0, _Functor.flap)(Functor);
/**
 * @category instances
 * @since 2.7.0
 */

exports.flap = flap;
var FunctorWithIndex = {
  URI: URI,
  map: _map,
  mapWithIndex: _mapWithIndex
};
/**
 * Produces a `Foldable` instance for a `ReadonlyRecord`, using the
 * provided `Ord` to sort the `ReadonlyRecord`'s entries by key.
 *
 * @category instances
 * @since 2.11.0
 */

exports.FunctorWithIndex = FunctorWithIndex;

var getFoldable = function getFoldable(O) {
  return {
    URI: URI,
    reduce: _reduce(O),
    foldMap: _foldMap(O),
    reduceRight: _reduceRight(O)
  };
};
/**
 * Produces a `FoldableWithIndex1` instance for a `ReadonlyRecord`, using the
 * provided `Ord` to sort the `ReadonlyRecord`'s entries by key.
 *
 * @category instances
 * @since 2.11.0
 */


exports.getFoldable = getFoldable;

var getFoldableWithIndex = function getFoldableWithIndex(O) {
  return {
    URI: URI,
    reduce: _reduce(O),
    foldMap: _foldMap(O),
    reduceRight: _reduceRight(O),
    reduceWithIndex: _reduceWithIndex(O),
    foldMapWithIndex: _foldMapWithIndex(O),
    reduceRightWithIndex: _reduceRightWithIndex(O)
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getFoldableWithIndex = getFoldableWithIndex;
var Compactable = {
  URI: URI,
  compact: compact,
  separate: separate
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Compactable = Compactable;
var Filterable = {
  URI: URI,
  map: _map,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Filterable = Filterable;
var FilterableWithIndex = {
  URI: URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex
};
/**
 * Produces a `Traversable` instance for a `ReadonlyRecord`, using the
 * provided `Ord` to sort the `ReadonlyRecord`'s entries by key.
 *
 * @category instances
 * @since 2.11.0
 */

exports.FilterableWithIndex = FilterableWithIndex;

var getTraversable = function getTraversable(O) {
  return {
    URI: URI,
    map: _map,
    reduce: _reduce(O),
    foldMap: _foldMap(O),
    reduceRight: _reduceRight(O),
    traverse: _traverse(O),
    sequence: _sequence(O)
  };
};
/**
 * Produces a `TraversableWithIndex` instance for a `ReadonlyRecord`, using the
 * provided `Ord` to sort the `ReadonlyRecord`'s entries by key.
 *
 * @category instances
 * @since 2.11.0
 */


exports.getTraversable = getTraversable;

var getTraversableWithIndex = function getTraversableWithIndex(O) {
  return {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce(O),
    foldMap: _foldMap(O),
    reduceRight: _reduceRight(O),
    reduceWithIndex: _reduceWithIndex(O),
    foldMapWithIndex: _foldMapWithIndex(O),
    reduceRightWithIndex: _reduceRightWithIndex(O),
    traverse: _traverse(O),
    sequence: _sequence(O),
    traverseWithIndex: _traverseWithIndex(O)
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getTraversableWithIndex = getTraversableWithIndex;

var getWitherable = function getWitherable(O) {
  var T = getTraversable(O);
  return {
    URI: URI,
    map: _map,
    reduce: _reduce(O),
    foldMap: _foldMap(O),
    reduceRight: _reduceRight(O),
    traverse: T.traverse,
    sequence: T.sequence,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: (0, _Witherable.witherDefault)(T, Compactable),
    wilt: (0, _Witherable.wiltDefault)(T, Compactable)
  };
};
/**
 * Given a `Semigroup` in the base type, it produces a `Semigroup`
 * in the `ReadonlyRecord` of the base type.
 * The resulting `Semigroup` concatenates two `ReadonlyRecord`s by
 * `union`.
 *
 * @example
 * import { getUnionSemigroup, ReadonlyRecord } from "fp-ts/ReadonlyRecord"
 * import { Semigroup } from "fp-ts/Semigroup"
 *
 * const sNumber: Semigroup<number> = { concat: (x, y) => x - y };
 * const sReadonlyRecord: Semigroup<ReadonlyRecord<string, number>> = getUnionSemigroup(sNumber);
 * assert.deepStrictEqual(sReadonlyRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { a: 1, b: -1, c: 4 });
 *
 * @category instances
 * @since 2.11.0
 */


exports.getWitherable = getWitherable;

var getUnionSemigroup = function getUnionSemigroup(S) {
  var unionS = union(S);
  return {
    concat: function concat(first, second) {
      return unionS(second)(first);
    }
  };
};
/**
 * Same as `getMonoid`.
 * Returns a `Monoid` instance for `ReadonlyRecord`s given a `Semigroup`
 * instance for the base type.
 * The `Monoid` makes the union of two `ReadonlyRecord`s combining the
 * entries that have the same key with the provided `Semigroup`.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 * import { getUnionMonoid } from 'fp-ts/ReadonlyRecord'
 *
 * const M = getUnionMonoid(SemigroupSum);
 * assert.deepStrictEqual(M.concat({ foo: 123, bar: 234 }, { foo: 456, baz: 567 }), { foo: 579 , bar: 234, baz: 567 });
 *
 * @category instances
 * @since 2.11.0
 */


exports.getUnionSemigroup = getUnionSemigroup;

var getUnionMonoid = function getUnionMonoid(S) {
  return {
    concat: getUnionSemigroup(S).concat,
    empty: empty
  };
};
/**
 * Given a `Semigroup` in the base type, it produces a `Semigroup`
 * in the `ReadonlyRecord` of the base type.
 * The resulting `Semigroup` concatenates two `ReadonlyRecord`s by
 * `intersection`.
 *
 * @example
 * import { getIntersectionSemigroup, ReadonlyRecord } from "fp-ts/ReadonlyRecord"
 * import { Semigroup } from "fp-ts/Semigroup"
 *
 * const sNumber: Semigroup<number> = { concat: (x, y) => x - y };
 * const sReadonlyRecord: Semigroup<ReadonlyRecord<string, number>> = getIntersectionSemigroup(sNumber);
 * assert.deepStrictEqual(sReadonlyRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { b: -1 });
 *
 * @category instances
 * @since 2.11.0
 */


exports.getUnionMonoid = getUnionMonoid;

var getIntersectionSemigroup = function getIntersectionSemigroup(S) {
  var intersectionS = intersection(S);
  return {
    concat: function concat(first, second) {
      return intersectionS(second)(first);
    }
  };
};
/**
 * Produces a `Magma` with a `concat` function that combines
 * two `ReadonlyRecord`s by making the `difference`.
 *
 * @example
 * import { getDifferenceMagma, difference, ReadonlyRecord } from "fp-ts/ReadonlyRecord"
 * import { Magma } from "fp-ts/Magma"
 *
 * const r1 = { a: 3, c: 3 };
 * const r2 = { a: 1, b: 2 };
 * const m: Magma<ReadonlyRecord<string, number>> = getDifferenceMagma<number>();
 * assert.deepStrictEqual(m.concat(r1, r2), difference(r2)(r1));
 * assert.deepStrictEqual(m.concat(r1, r2), { c: 3, b: 2 });
 *
 * @category instances
 * @since 2.11.0
 */


exports.getIntersectionSemigroup = getIntersectionSemigroup;

var getDifferenceMagma = function getDifferenceMagma() {
  return {
    concat: function concat(first, second) {
      return difference(second)(first);
    }
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use `getFoldable` instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */


exports.getDifferenceMagma = getDifferenceMagma;
var Foldable = {
  URI: URI,
  reduce: /*#__PURE__*/_reduce(S.Ord),
  foldMap: /*#__PURE__*/_foldMap(S.Ord),
  reduceRight: /*#__PURE__*/_reduceRight(S.Ord)
};
/**
 * Use `getFoldableWithIndex` instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */

exports.Foldable = Foldable;
var FoldableWithIndex = {
  URI: URI,
  reduce: /*#__PURE__*/_reduce(S.Ord),
  foldMap: /*#__PURE__*/_foldMap(S.Ord),
  reduceRight: /*#__PURE__*/_reduceRight(S.Ord),
  reduceWithIndex: /*#__PURE__*/_reduceWithIndex(S.Ord),
  foldMapWithIndex: /*#__PURE__*/_foldMapWithIndex(S.Ord),
  reduceRightWithIndex: /*#__PURE__*/_reduceRightWithIndex(S.Ord)
};
/**
 * Use `getTraversable` instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */

exports.FoldableWithIndex = FoldableWithIndex;
var Traversable = {
  URI: URI,
  map: _map,
  reduce: /*#__PURE__*/_reduce(S.Ord),
  foldMap: /*#__PURE__*/_foldMap(S.Ord),
  reduceRight: /*#__PURE__*/_reduceRight(S.Ord),
  traverse: /*#__PURE__*/_traverse(S.Ord),
  sequence: sequence
};
/**
 * Use `getTraversableWithIndex` instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */

exports.Traversable = Traversable;
var TraversableWithIndex = {
  URI: URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  reduce: /*#__PURE__*/_reduce(S.Ord),
  foldMap: /*#__PURE__*/_foldMap(S.Ord),
  reduceRight: /*#__PURE__*/_reduceRight(S.Ord),
  reduceWithIndex: /*#__PURE__*/_reduceWithIndex(S.Ord),
  foldMapWithIndex: /*#__PURE__*/_foldMapWithIndex(S.Ord),
  reduceRightWithIndex: /*#__PURE__*/_reduceRightWithIndex(S.Ord),
  traverse: /*#__PURE__*/_traverse(S.Ord),
  sequence: sequence,
  traverseWithIndex: /*#__PURE__*/_traverseWithIndex(S.Ord)
};
exports.TraversableWithIndex = TraversableWithIndex;

var _wither = /*#__PURE__*/(0, _Witherable.witherDefault)(Traversable, Compactable);

var _wilt = /*#__PURE__*/(0, _Witherable.wiltDefault)(Traversable, Compactable);
/**
 * Use `getWitherable` instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */


var Witherable = {
  URI: URI,
  map: _map,
  reduce: /*#__PURE__*/_reduce(S.Ord),
  foldMap: /*#__PURE__*/_foldMap(S.Ord),
  reduceRight: /*#__PURE__*/_reduceRight(S.Ord),
  traverse: /*#__PURE__*/_traverse(S.Ord),
  sequence: sequence,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  wither: _wither,
  wilt: _wilt
};
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */

exports.Witherable = Witherable;
var insertAt = upsertAt;
/**
 * Use [`has`](#has) instead.
 *
 * @since 2.5.0
 * @deprecated
 */

exports.insertAt = insertAt;

function hasOwnProperty(k, r) {
  return _.has.call(r === undefined ? this : r, k);
}
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */


var readonlyRecord = {
  URI: URI,
  map: _map,
  reduce: /*#__PURE__*/_reduce(S.Ord),
  foldMap: /*#__PURE__*/_foldMap(S.Ord),
  reduceRight: /*#__PURE__*/_reduceRight(S.Ord),
  traverse: /*#__PURE__*/_traverse(S.Ord),
  sequence: sequence,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  mapWithIndex: _mapWithIndex,
  reduceWithIndex: /*#__PURE__*/_reduceWithIndex(S.Ord),
  foldMapWithIndex: /*#__PURE__*/_foldMapWithIndex(S.Ord),
  reduceRightWithIndex: /*#__PURE__*/_reduceRightWithIndex(S.Ord),
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
  traverseWithIndex: /*#__PURE__*/_traverseWithIndex(S.Ord),
  wither: _wither,
  wilt: _wilt
};
exports.readonlyRecord = readonlyRecord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkb25seVJlY29yZC50cyJdLCJuYW1lcyI6WyJmcm9tUmVjb3JkIiwiciIsIk9iamVjdCIsImFzc2lnbiIsInRvUmVjb3JkIiwic2l6ZSIsImtleXMiLCJsZW5ndGgiLCJpc0VtcHR5IiwiayIsIl8iLCJoYXMiLCJjYWxsIiwia2V5c18iLCJPIiwic29ydCIsImNvbXBhcmUiLCJTIiwiT3JkIiwiY29sbGVjdCIsImtleXNPIiwiZiIsIm91dCIsImtleSIsInB1c2giLCJ0b1JlYWRvbmx5QXJyYXkiLCJhIiwidG9VbmZvbGRhYmxlIiwiVSIsInNhcyIsImxlbiIsInVuZm9sZCIsImIiLCJzb21lIiwibm9uZSIsInVwc2VydEF0IiwiZGVsZXRlQXQiLCJ1cGRhdGVBdCIsIm1vZGlmeUF0IiwibmV4dCIsInBvcCIsImRlbGV0ZUF0ayIsIm9hIiwibG9va3VwIiwiaXNOb25lIiwidmFsdWUiLCJpc1N1YnJlY29yZCIsIkUiLCJtZSIsInRoYXQiLCJ1bmRlZmluZWQiLCJpc1N1YnJlY29yZEUiLCJlcXVhbHMiLCJlbXB0eSIsIm1hcFdpdGhJbmRleCIsIm1hcCIsInJlZHVjZVdpdGhJbmRleCIsImZhIiwia3MiLCJpIiwiZm9sZE1hcFdpdGhJbmRleCIsIk0iLCJjb25jYXQiLCJyZWR1Y2VSaWdodFdpdGhJbmRleCIsInNpbmdsZXRvbiIsInRyYXZlcnNlV2l0aEluZGV4IiwiRiIsInRyYXZlcnNlV2l0aEluZGV4T0YiLCJfdHJhdmVyc2VXaXRoSW5kZXgiLCJ0YSIsInRyYXZlcnNlIiwidHJhdmVyc2VPRiIsIl90cmF2ZXJzZSIsInNlcXVlbmNlIiwiX3NlcXVlbmNlIiwid2l0aGVyIiwidHJhdmVyc2VGIiwiY29tcGFjdCIsIndpbHQiLCJzZXBhcmF0ZSIsInBhcnRpdGlvbk1hcFdpdGhJbmRleCIsImxlZnQiLCJyaWdodCIsImUiLCJfdGFnIiwicGFydGl0aW9uV2l0aEluZGV4IiwicHJlZGljYXRlV2l0aEluZGV4IiwiZmlsdGVyTWFwV2l0aEluZGV4Iiwib2IiLCJpc1NvbWUiLCJmaWx0ZXJXaXRoSW5kZXgiLCJjaGFuZ2VkIiwiZnJvbUZvbGRhYmxlIiwiZnJvbUZvbGRhYmxlTWFwTSIsImZyb21Gb2xkYWJsZU1hcCIsImZrYSIsImlkZW50aXR5IiwicmVkdWNlIiwiZXZlcnkiLCJwcmVkaWNhdGUiLCJlbGVtIiwiZWxlbUUiLCJ1bmlvbiIsInNlY29uZCIsImZpcnN0IiwiaW50ZXJzZWN0aW9uIiwiZGlmZmVyZW5jZSIsIl9tYXAiLCJfbWFwV2l0aEluZGV4IiwiX3JlZHVjZSIsInJlZHVjZU8iLCJfZm9sZE1hcCIsImZvbGRNYXBNIiwiZm9sZE1hcCIsIl9yZWR1Y2VSaWdodCIsInJlZHVjZVJpZ2h0TyIsInJlZHVjZVJpZ2h0IiwiX2ZpbHRlciIsImZpbHRlciIsIl9maWx0ZXJNYXAiLCJmaWx0ZXJNYXAiLCJfcGFydGl0aW9uIiwicGFydGl0aW9uIiwiX3BhcnRpdGlvbk1hcCIsInBhcnRpdGlvbk1hcCIsIl9yZWR1Y2VXaXRoSW5kZXgiLCJyZWR1Y2VXaXRoSW5kZXhPIiwiX2ZvbGRNYXBXaXRoSW5kZXgiLCJmb2xkTWFwV2l0aEluZGV4TyIsImZvbGRNYXBXaXRoSW5kZXhNIiwiX3JlZHVjZVJpZ2h0V2l0aEluZGV4IiwicmVkdWNlUmlnaHRXaXRoSW5kZXhPIiwiX3BhcnRpdGlvbk1hcFdpdGhJbmRleCIsIl9wYXJ0aXRpb25XaXRoSW5kZXgiLCJfZmlsdGVyTWFwV2l0aEluZGV4IiwiX2ZpbHRlcldpdGhJbmRleCIsInRyYXZlcnNlV2l0aEluZGV4TyIsIlNLIiwidHJhdmVyc2VPIiwib2YiLCJmciIsImFwIiwiaXNMZWZ0IiwiVVJJIiwiZ2V0U2hvdyIsInNob3ciLCJlbGVtZW50cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJqb2luIiwiZ2V0RXEiLCJ4IiwieSIsImdldE1vbm9pZCIsIkZ1bmN0b3IiLCJmbGFwIiwiRnVuY3RvcldpdGhJbmRleCIsImdldEZvbGRhYmxlIiwiZ2V0Rm9sZGFibGVXaXRoSW5kZXgiLCJDb21wYWN0YWJsZSIsIkZpbHRlcmFibGUiLCJGaWx0ZXJhYmxlV2l0aEluZGV4IiwiZ2V0VHJhdmVyc2FibGUiLCJnZXRUcmF2ZXJzYWJsZVdpdGhJbmRleCIsImdldFdpdGhlcmFibGUiLCJUIiwiZ2V0VW5pb25TZW1pZ3JvdXAiLCJ1bmlvblMiLCJnZXRVbmlvbk1vbm9pZCIsImdldEludGVyc2VjdGlvblNlbWlncm91cCIsImludGVyc2VjdGlvblMiLCJnZXREaWZmZXJlbmNlTWFnbWEiLCJGb2xkYWJsZSIsIkZvbGRhYmxlV2l0aEluZGV4IiwiVHJhdmVyc2FibGUiLCJUcmF2ZXJzYWJsZVdpdGhJbmRleCIsIl93aXRoZXIiLCJfd2lsdCIsIldpdGhlcmFibGUiLCJpbnNlcnRBdCIsImhhc093blByb3BlcnR5IiwicmVhZG9ubHlSZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTs7QUFLQTs7QUFDQTs7QUFHQTs7QUFRQTs7QUFFQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBc0JDLENBQXRCO0FBQUEsU0FBZ0VDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLENBQWxCLENBQWhFO0FBQUEsQ0FBbkI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQXNCSCxDQUF0QjtBQUFBLFNBQWdFQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixDQUFsQixDQUFoRTtBQUFBLENBQWpCO0FBRVA7QUFDQTtBQUNBO0FB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QUFDQyxHQUFILENBdENEO0FBdUNuQnlELEVBQUFBLE1BQU0sRUFBRXFHLE9BdkNXO0FBd0NuQmxHLEVBQUFBLElBQUksRUFBRW1HO0FBeENhLENBSmQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBgUmVhZG9ubHlSZWNvcmQudHNgIG1vZHVsZSBlbmFibGVzIGRlYWxpbmcgaW4gYSBmdW5jdGlvbmFsIHdheSB3aXRoXG4gKiBUeXBlc2NyaXB0J3MgYFJlYWRvbmx5PFJlY29yZDxLLCBUPj5gIHR5cGUuIFRoYXQgaXMgc2ltaWxhciB0byB0aGVcbiAqIGBSZWNvcmQudHNgIG1vZHVsZSwgYnV0IGZvciBhIHJlY29yZCB3aXRoIGFsbCBwcm9wZXJ0aWVzXG4gKiBkZWNsYXJlZCBhcyBgcmVhZG9ubHlgLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSwgQXBwbGljYXRpdmUxLCBBcHBsaWNhdGl2ZTIsIEFwcGxpY2F0aXZlMkMsIEFwcGxpY2F0aXZlMywgQXBwbGljYXRpdmUzQyB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBDb21wYWN0YWJsZTEgfSBmcm9tICcuL0NvbXBhY3RhYmxlJ1xuaW1wb3J0IHsgRWl0aGVyIH0gZnJvbSAnLi9FaXRoZXInXG5pbXBvcnQgeyBFcSwgZnJvbUVxdWFscyB9IGZyb20gJy4vRXEnXG5pbXBvcnQgeyBGaWx0ZXJhYmxlMSB9IGZyb20gJy4vRmlsdGVyYWJsZSdcbmltcG9ydCB7IEZpbHRlcmFibGVXaXRoSW5kZXgxLCBQcmVkaWNhdGVXaXRoSW5kZXgsIFJlZmluZW1lbnRXaXRoSW5kZXggfSBmcm9tICcuL0ZpbHRlcmFibGVXaXRoSW5kZXgnXG5pbXBvcnQgeyBGb2xkYWJsZSBhcyBGb2xkYWJsZUhLVCwgRm9sZGFibGUxLCBGb2xkYWJsZTIsIEZvbGRhYmxlMyB9IGZyb20gJy4vRm9sZGFibGUnXG5pbXBvcnQgeyBGb2xkYWJsZVdpdGhJbmRleDEgfSBmcm9tICcuL0ZvbGRhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgZmxvdywgaWRlbnRpdHksIHBpcGUsIFNLIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IxIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0IHsgRnVuY3RvcldpdGhJbmRleDEgfSBmcm9tICcuL0Z1bmN0b3JXaXRoSW5kZXgnXG5pbXBvcnQgeyBIS1QsIEtpbmQsIEtpbmQyLCBLaW5kMywgVVJJUywgVVJJUzIsIFVSSVMzIH0gZnJvbSAnLi9IS1QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNYWdtYSB9IGZyb20gJy4vTWFnbWEnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vT3B0aW9uJ1xuaW1wb3J0IHsgT3JkIH0gZnJvbSAnLi9PcmQnXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL1ByZWRpY2F0ZSdcbmltcG9ydCB7IFJlZmluZW1lbnQgfSBmcm9tICcuL1JlZmluZW1lbnQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IFNlcGFyYXRlZCwgc2VwYXJhdGVkIH0gZnJvbSAnLi9TZXBhcmF0ZWQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyBUcmF2ZXJzYWJsZVdpdGhJbmRleDEgfSBmcm9tICcuL1RyYXZlcnNhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgVW5mb2xkYWJsZSwgVW5mb2xkYWJsZTEgfSBmcm9tICcuL1VuZm9sZGFibGUnXG5pbXBvcnQgeyBQaXBlYWJsZVdpbHQxLCBQaXBlYWJsZVdpdGhlcjEsIHdpbHREZWZhdWx0LCBXaXRoZXJhYmxlMSwgd2l0aGVyRGVmYXVsdCB9IGZyb20gJy4vV2l0aGVyYWJsZSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgdHlwZSBSZWFkb25seVJlY29yZDxLIGV4dGVuZHMgc3RyaW5nLCBUPiA9IFJlYWRvbmx5PFJlY29yZDxLLCBUPj5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW50ZXJvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEJ1aWxkcyBhIGBSZWFkb25seVJlY29yZGAgYnkgY29weWluZyBhIGBSZWNvcmRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBSZWFkb25seVJlY29yZCwgZnJvbVJlY29yZCB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKlxuICogY29uc3QgeDogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgYTogMSwgYjogMiB9O1xuICogY29uc3QgeTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0gZnJvbVJlY29yZCh4KTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoeCx5KTtcbiAqIC8vIGB5LmEgPSA1YCBnaXZlcyBjb21waWxlciBlcnJvclxuICpcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21SZWNvcmQgPSA8SyBleHRlbmRzIHN0cmluZywgQT4ocjogUmVjb3JkPEssIEE+KTogUmVhZG9ubHlSZWNvcmQ8SywgQT4gPT4gT2JqZWN0LmFzc2lnbih7fSwgcilcblxuLyoqXG4gKiBCdWlsZHMgYSBtdXRhYmxlIGBSZWNvcmRgIGZyb20gYSBgUmVhZG9ubHlSZWNvcmRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBSZWFkb25seVJlY29yZCwgdG9SZWNvcmQgfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIlxuICpcbiAqIGNvbnN0IHg6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgYTogMSwgYjogMiB9O1xuICogY29uc3QgeTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHRvUmVjb3JkKHgpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh4LHkpO1xuICogeS5hID0gNTsgLy8gaXQncyBvaywgeSBpcyBtdXRhYmxlXG4gKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdG9SZWNvcmQgPSA8SyBleHRlbmRzIHN0cmluZywgQT4ocjogUmVhZG9ubHlSZWNvcmQ8SywgQT4pOiBSZWNvcmQ8SywgQT4gPT4gT2JqZWN0LmFzc2lnbih7fSwgcilcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBrZXkvdmFsdWUgcGFpcnMgaW4gYSBgUmVhZG9ubHlSZWNvcmRgLFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzaXplIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzaXplKHsgYTogdHJ1ZSwgYjogMiwgYzogXCJ0aHJlZVwiIH0pLCAzKTtcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNpemUgPSA8QT4ocjogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPik6IG51bWJlciA9PiBPYmplY3Qua2V5cyhyKS5sZW5ndGhcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBgUmVhZG9ubHlSZWNvcmRgIGlzIGVtcHR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCJcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGlzRW1wdHkoe30pLCB0cnVlKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaXNFbXB0eSh7IGE6IDMgfSksIGZhbHNlKTtcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IDxBPihyOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KTogYm9vbGVhbiA9PiB7XG4gIGZvciAoY29uc3QgayBpbiByKSB7XG4gICAgaWYgKF8uaGFzLmNhbGwociwgaykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBrZXlzXyA9IChPOiBPcmQ8c3RyaW5nPikgPT4gPEsgZXh0ZW5kcyBzdHJpbmc+KHI6IFJlYWRvbmx5UmVjb3JkPEssIHVua25vd24+KTogUmVhZG9ubHlBcnJheTxLPiA9PlxuICAoT2JqZWN0LmtleXMocikgYXMgYW55KS5zb3J0KE8uY29tcGFyZSlcblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGtleXM6IDxLIGV4dGVuZHMgc3RyaW5nPihyOiBSZWFkb25seVJlY29yZDxLLCB1bmtub3duPikgPT4gUmVhZG9ubHlBcnJheTxLPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAga2V5c18oUy5PcmQpXG5cbi8qKlxuICogTWFwIGEgYFJlYWRvbmx5UmVjb3JkYCBpbnRvIGFuIGBSZWFkb25seUFycmF5YC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29sbGVjdCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICogaW1wb3J0IHsgT3JkIH0gZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICpcbiAqIGNvbnN0IGYgPSA8QT4oazogc3RyaW5nLCBhOiBBKSA9PiBgJHtrLnRvVXBwZXJDYXNlKCl9LSR7YX1gO1xuICogY29uc3QgeCA9IHsgYzogMywgYTogXCJmb29cIiwgYjogZmFsc2UgfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY29sbGVjdChPcmQpKGYpKHgpLCBbXCJBLWZvb1wiLCBcIkItZmFsc2VcIiwgXCJDLTNcIl0pO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdChcbiAgTzogT3JkPHN0cmluZz5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihmOiAoazogSywgYTogQSkgPT4gQikgPT4gKHI6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBSZWFkb25seUFycmF5PEI+XG4vKipcbiAqIFVzZSB0aGUgb3ZlcmxvYWQgY29uc3RyYWluZWQgYnkgYE9yZGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihmOiAoazogSywgYTogQSkgPT4gQik6IChyOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gUmVhZG9ubHlBcnJheTxCPlxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3Q8QSwgQj4oXG4gIE86IE9yZDxzdHJpbmc+IHwgKChrOiBzdHJpbmcsIGE6IEEpID0+IEIpXG4pOlxuICB8ICg8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oZjogKGs6IEssIGE6IEEpID0+IEIpID0+IChyOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gUmVhZG9ubHlBcnJheTxCPilcbiAgfCAoKHI6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IFJlYWRvbmx5QXJyYXk8Qj4pIHtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNvbGxlY3QoUy5PcmQpKE8pXG4gIH1cbiAgY29uc3Qga2V5c08gPSBrZXlzXyhPKVxuICByZXR1cm4gPEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KGY6IChrOiBLLCBhOiBBKSA9PiBCKSA9PiAocjogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IHtcbiAgICBjb25zdCBvdXQ6IEFycmF5PEI+ID0gW11cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzTyhyKSkge1xuICAgICAgb3V0LnB1c2goZihrZXksIHJba2V5XSkpXG4gICAgfVxuICAgIHJldHVybiBvdXRcbiAgfVxufVxuXG4vKipcbiAqIEdldCBhIHNvcnRlZCBgUmVhZG9ubHlBcnJheWAgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gYSBgUmVhZG9ubHlSZWNvcmRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB0b1JlYWRvbmx5QXJyYXkgfSBmcm9tICdmcC10cy9SZWFkb25seVJlY29yZCdcbiAqXG4gKiBjb25zdCB4ID0geyBjOiAzLCBhOiBcImZvb1wiLCBiOiBmYWxzZSB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0b1JlYWRvbmx5QXJyYXkoeCksIFtcbiAqICAgW1wiYVwiLCBcImZvb1wiXSxcbiAqICAgW1wiYlwiLCBmYWxzZV0sXG4gKiAgIFtcImNcIiwgM10sXG4gKiBdKTtcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvUmVhZG9ubHlBcnJheTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KHI6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBSZWFkb25seUFycmF5PHJlYWRvbmx5IFtLLCBBXT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNvbGxlY3QoUy5PcmQpKChrLCBhKSA9PiBbaywgYV0pXG5cbi8qKlxuICogVW5mb2xkcyBhIGBSZWFkb25seVJlY29yZGAgaW50byBhIGxpc3Qgb2Yga2V5L3ZhbHVlIHBhaXJzLlxuICpcbiAqIEdpdmVuIGFuIGBVbmZvbGRhYmxlYCBjbGFzcyB0eXBlIGBVYCBzdWNoIGFzIGBhcnJheWAgb3IgYHJlYWRvbmx5QXJyYXlgLFxuICogaXQgdXNlcyB0aGUgYHVuZm9sZGAgZnVuY3Rpb24gdG8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIGBVYCxcbiAqIHByb3ZpZGluZyBhbiBpdGVyYXRpbmcgZnVuY3Rpb24gdGhhdCBpdGVyYXRlcyBvdmVyIGVhY2hcbiAqIGtleS92YWx1ZSBwYWlyIGluIHRoZSByZWNvcmQgc29ydGVkIGFscGhhYmV0aWNhbGx5IGJ5IGtleS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgYXJyYXksIHJlYWRvbmx5QXJyYXkgfSBmcm9tICdmcC10cydcbiAqIGltcG9ydCB7IHRvVW5mb2xkYWJsZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodG9VbmZvbGRhYmxlKGFycmF5KSh7IGI6IDIsIGE6IDEgfSksWyBbICdhJywgMSBdLCBbICdiJywgMiBdXSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodG9VbmZvbGRhYmxlKHJlYWRvbmx5QXJyYXkpKHsgYjogMiwgYTogMSB9KSxbIFsgJ2EnLCAxIF0sIFsgJ2InLCAyIF1dKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1VuZm9sZGFibGU8RiBleHRlbmRzIFVSSVM+KFxuICBVOiBVbmZvbGRhYmxlMTxGPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KHI6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBLaW5kPEYsIHJlYWRvbmx5IFtLLCBBXT5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuZm9sZGFibGU8Rj4oXG4gIFU6IFVuZm9sZGFibGU8Rj5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBBPihyOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gSEtUPEYsIHJlYWRvbmx5IFtLLCBBXT5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuZm9sZGFibGU8Rj4oVTogVW5mb2xkYWJsZTxGPik6IDxBPihyOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBIS1Q8RiwgcmVhZG9ubHkgW3N0cmluZywgQV0+IHtcbiAgcmV0dXJuIChyKSA9PiB7XG4gICAgY29uc3Qgc2FzID0gdG9SZWFkb25seUFycmF5KHIpXG4gICAgY29uc3QgbGVuID0gc2FzLmxlbmd0aFxuICAgIHJldHVybiBVLnVuZm9sZCgwLCAoYikgPT4gKGIgPCBsZW4gPyBfLnNvbWUoW3Nhc1tiXSwgYiArIDFdKSA6IF8ubm9uZSkpXG4gIH1cbn1cblxuLyoqXG4gKiBJbnNlcnQgb3IgcmVwbGFjZSBhIGtleS92YWx1ZSBwYWlyIGluIGEgYFJlYWRvbmx5UmVjb3JkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdXBzZXJ0QXQgfSBmcm9tICdmcC10cy9SZWFkb25seVJlY29yZCdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVwc2VydEF0KFwiYVwiLCA1KSh7IGE6IDEsIGI6IDIgfSksIHsgYTogNSwgYjogMiB9KTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodXBzZXJ0QXQoXCJjXCIsIDUpKHsgYTogMSwgYjogMiB9KSwgeyBhOiAxLCBiOiAyLCBjOiA1IH0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdXBzZXJ0QXQgPSA8QT4oazogc3RyaW5nLCBhOiBBKSA9PiAocjogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPik6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4gPT4ge1xuICBpZiAoXy5oYXMuY2FsbChyLCBrKSAmJiByW2tdID09PSBhKSB7XG4gICAgcmV0dXJuIHJcbiAgfVxuICBjb25zdCBvdXQ6IFJlY29yZDxzdHJpbmcsIEE+ID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgb3V0W2tdID0gYVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIG9yIG5vdCBhIGtleSBleGlzdHMgaW4gYSBgUmVhZG9ubHlSZWNvcmRgLlxuICpcbiAqIE5vdGUuIFRoaXMgZnVuY3Rpb24gaXMgbm90IHBpcGVhYmxlIGJlY2F1c2UgaXMgYSBgUmVmaW5lbWVudGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGhhcyB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaGFzKFwiYVwiLCB7IGE6IDEsIGI6IDIgfSksIHRydWUpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChoYXMoXCJjXCIsIHsgYTogMSwgYjogMiB9KSwgZmFsc2UpO1xuICpcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGhhcyA9IDxLIGV4dGVuZHMgc3RyaW5nPihrOiBzdHJpbmcsIHI6IFJlYWRvbmx5UmVjb3JkPEssIHVua25vd24+KTogayBpcyBLID0+IF8uaGFzLmNhbGwociwgaylcblxuLyoqXG4gKiBEZWxldGUgYSBrZXkgYW5kIHZhbHVlIGZyb20gYSBgUmVhZG9ubHlSZWNvcmRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBkZWxldGVBdCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZGVsZXRlQXQoXCJhXCIpKHsgYTogMSwgYjogMiB9KSwgeyBiOiAyIH0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkZWxldGVBdChcImNcIikoeyBhOiAxLCBiOiAyIH0pLCB7IGE6IDEsIGI6IDIgfSk7XG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUF0PEsgZXh0ZW5kcyBzdHJpbmc+KFxuICBrOiBLXG4pOiA8S1MgZXh0ZW5kcyBzdHJpbmcsIEE+KHI6IFJlYWRvbmx5UmVjb3JkPEtTLCBBPikgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nIGV4dGVuZHMgSyA/IHN0cmluZyA6IEV4Y2x1ZGU8S1MsIEs+LCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUF0KGs6IHN0cmluZyk6IDxBPihyOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+IHtcbiAgcmV0dXJuIDxBPihyOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiB7XG4gICAgaWYgKCFfLmhhcy5jYWxsKHIsIGspKSB7XG4gICAgICByZXR1cm4gclxuICAgIH1cbiAgICBjb25zdCBvdXQ6IFJlY29yZDxzdHJpbmcsIEE+ID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgICBkZWxldGUgb3V0W2tdXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogUmVwbGFjZSBhIGtleS92YWx1ZSBwYWlyIGluIGEgYFJlYWRvbmx5UmVjb3JkYC5cbiAqXG4gKiBAcmV0dXJucyBJZiB0aGUgc3BlY2lmaWVkIGtleSBleGlzdHMgaXQgcmV0dXJucyBhbiBgT3B0aW9uYCBjb250YWluaW5nIGEgbmV3IGBSZWNvcmRgXG4gKiB3aXRoIHRoZSBlbnRyeSB1cGRhdGVkLCBvdGhlcndpc2UgaXQgcmV0dXJucyBgTm9uZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdXBkYXRlQXQgfSBmcm9tICdmcC10cy9SZWFkb25seVJlY29yZCdcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gJ2ZwLXRzJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodXBkYXRlQXQoXCJhXCIsIDMpKHsgYTogMSwgYjogMiB9KSwgb3B0aW9uLnNvbWUoeyBhOiAzLCBiOiAyIH0pKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodXBkYXRlQXQoXCJjXCIsIDMpKHsgYTogMSwgYjogMiB9KSwgb3B0aW9uLm5vbmUpO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQXQgPSA8QT4oazogc3RyaW5nLCBhOiBBKSA9PiA8SyBleHRlbmRzIHN0cmluZz4oXG4gIHI6IFJlYWRvbmx5UmVjb3JkPEssIEE+XG4pOiBPcHRpb248UmVhZG9ubHlSZWNvcmQ8SywgQT4+ID0+IHtcbiAgaWYgKCFoYXMoaywgcikpIHtcbiAgICByZXR1cm4gXy5ub25lXG4gIH1cbiAgaWYgKHJba10gPT09IGEpIHtcbiAgICByZXR1cm4gXy5zb21lKHIpXG4gIH1cbiAgY29uc3Qgb3V0OiBSZWNvcmQ8SywgQT4gPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICBvdXRba10gPSBhXG4gIHJldHVybiBfLnNvbWUob3V0KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBtYXBwaW5nIGZ1bmN0aW9uIHRvIG9uZSBzcGVjaWZpYyBrZXkvdmFsdWUgcGFpciBpbiBhIGBSZWFkb25seVJlY29yZGAuXG4gKlxuICogQHJldHVybnMgSWYgdGhlIHNwZWNpZmllZCBrZXkgZXhpc3RzIGl0IHJldHVybnMgYW4gYE9wdGlvbmAgY29udGFpbmluZyBhIG5ldyBgUmVjb3JkYFxuICogd2l0aCB0aGUgZW50cnkgdXBkYXRlZCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgYE5vbmVgXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1vZGlmeUF0IH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlSZWNvcmQnXG4gKiBpbXBvcnQgeyBvcHRpb24gfSBmcm9tICdmcC10cydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKG1vZGlmeUF0KFwiYVwiLCAoeDogbnVtYmVyKSA9PiB4ICogMykoeyBhOiAxLCBiOiAyIH0pLCBvcHRpb24uc29tZSh7IGE6IDMsIGI6IDIgfSkpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtb2RpZnlBdChcImNcIiwgKHg6IG51bWJlcikgPT4geCAqIDMpKHsgYTogMSwgYjogMiB9KSwgb3B0aW9uLm5vbmUpO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgbW9kaWZ5QXQgPSA8QT4oazogc3RyaW5nLCBmOiAoYTogQSkgPT4gQSkgPT4gPEsgZXh0ZW5kcyBzdHJpbmc+KFxuICByOiBSZWFkb25seVJlY29yZDxLLCBBPlxuKTogT3B0aW9uPFJlYWRvbmx5UmVjb3JkPEssIEE+PiA9PiB7XG4gIGlmICghaGFzKGssIHIpKSB7XG4gICAgcmV0dXJuIF8ubm9uZVxuICB9XG4gIGNvbnN0IG5leHQgPSBmKHJba10pXG4gIGlmIChuZXh0ID09PSByW2tdKSB7XG4gICAgcmV0dXJuIF8uc29tZShyKVxuICB9XG4gIGNvbnN0IG91dDogUmVjb3JkPEssIEE+ID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgb3V0W2tdID0gbmV4dFxuICByZXR1cm4gXy5zb21lKG91dClcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBrZXkgYW5kIHZhbHVlIGZyb20gYSBgUmVhZG9ubHlSZWNvcmRgLCByZXR1cm5pbmcgdGhlIHZhbHVlIGFzIHdlbGwgYXMgdGhlIHN1YnNlcXVlbnQgYFJlYWRvbmx5UmVjb3JkYC5cbiAqXG4gKiBAcmV0dXJucyBJZiB0aGUgc3BlY2lmaWVkIGtleSBleGlzdHMgaXQgcmV0dXJucyBhbiBgT3B0aW9uYCBjb250YWluaW5nIGEgbmV3IGBSZWFkb25seVJlY29yZGBcbiAqIHdpdGggdGhlIGVudHJ5IHJlbW92ZWQsIG90aGVyd2lzZSBpdCByZXR1cm5zIGBOb25lYFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwb3AgfSBmcm9tICdmcC10cy9SZWFkb25seVJlY29yZCdcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gJ2ZwLXRzJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocG9wKFwiYVwiKSh7IGE6IDEsIGI6IDIsIGM6IDMgfSksIG9wdGlvbi5zb21lKFsxLCB7IGI6IDIsIGM6IDMgfV0pKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocG9wKFwieFwiKSh7IGE6IDEsIGI6IDIsIGM6IDMgfSksIG9wdGlvbi5ub25lKTtcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvcDxLIGV4dGVuZHMgc3RyaW5nPihcbiAgazogS1xuKTogPEtTIGV4dGVuZHMgc3RyaW5nLCBBPihcbiAgcjogUmVhZG9ubHlSZWNvcmQ8S1MsIEE+XG4pID0+IE9wdGlvbjxyZWFkb25seSBbQSwgUmVhZG9ubHlSZWNvcmQ8c3RyaW5nIGV4dGVuZHMgSyA/IHN0cmluZyA6IEV4Y2x1ZGU8S1MsIEs+LCBBPl0+XG5leHBvcnQgZnVuY3Rpb24gcG9wKGs6IHN0cmluZyk6IDxBPihyOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBPcHRpb248cmVhZG9ubHkgW0EsIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT5dPiB7XG4gIGNvbnN0IGRlbGV0ZUF0ayA9IGRlbGV0ZUF0KGspXG4gIHJldHVybiAocikgPT4ge1xuICAgIGNvbnN0IG9hID0gbG9va3VwKGssIHIpXG4gICAgcmV0dXJuIF8uaXNOb25lKG9hKSA/IF8ubm9uZSA6IF8uc29tZShbb2EudmFsdWUsIGRlbGV0ZUF0ayhyKV0pXG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIFRlc3Qgd2hldGhlciBvbmUgYFJlYWRvbmx5UmVjb3JkYCBjb250YWlucyBhbGwgb2YgdGhlIGtleXMgYW5kIHZhbHVlc1xuICogY29udGFpbmVkIGluIGFub3RoZXIgYFJlYWRvbmx5UmVjb3JkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaXNTdWJyZWNvcmQgfSBmcm9tICdmcC10cy9SZWFkb25seVJlY29yZCdcbiAqIGltcG9ydCB7IHN0cmluZyB9IGZyb20gJ2ZwLXRzJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIGlzU3VicmVjb3JkKHN0cmluZy5FcSkoeyBhOiBcImZvb1wiLCBiOiBcImJhclwiLCBjOiBcImJhelwiIH0pKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiwgYzogXCJiYXpcIiB9KSxcbiAqICAgdHJ1ZVxuICogKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIGlzU3VicmVjb3JkKHN0cmluZy5FcSkoeyBhOiBcImZvb1wiLCBiOiBcImJhclwiLCBjOiBcImJhelwiIH0pKHsgYTogXCJmb29cIiwgYzogXCJiYXpcIiB9KSxcbiAqICAgdHJ1ZVxuICogKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIGlzU3VicmVjb3JkKHN0cmluZy5FcSkoeyBhOiBcImZvb1wiLCBiOiBcImJhclwiLCBjOiBcImJhelwiIH0pKHsgYTogXCJmb29cIiwgYjogXCJub3QtYmFyXCIsIGM6IFwiYmF6XCIgfSksXG4gKiAgIGZhbHNlXG4gKiApO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgaXNTdWJyZWNvcmQoc3RyaW5nLkVxKSh7IGE6IFwiZm9vXCIsIGI6IFwiYmFyXCIgfSkoeyBhOiBcImZvb1wiLCBiOiBcImJhclwiLCBjOiBcImJhelwiIH0pLFxuICogICBmYWxzZVxuICogKTtcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3VicmVjb3JkPEE+KFxuICBFOiBFcTxBPlxuKToge1xuICAodGhhdDogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPik6IChtZTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gYm9vbGVhblxuICAobWU6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4sIHRoYXQ6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pOiBib29sZWFuXG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdWJyZWNvcmQ8QT4oXG4gIEU6IEVxPEE+XG4pOiAoXG4gIG1lOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LFxuICB0aGF0PzogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPlxuKSA9PiBib29sZWFuIHwgKChtZTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gYm9vbGVhbikge1xuICByZXR1cm4gKG1lLCB0aGF0PykgPT4ge1xuICAgIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlzU3VicmVjb3JkRSA9IGlzU3VicmVjb3JkKEUpXG4gICAgICByZXR1cm4gKHRoYXQpID0+IGlzU3VicmVjb3JkRSh0aGF0LCBtZSlcbiAgICB9XG4gICAgZm9yIChjb25zdCBrIGluIG1lKSB7XG4gICAgICBpZiAoIV8uaGFzLmNhbGwodGhhdCwgaykgfHwgIUUuZXF1YWxzKG1lW2tdLCB0aGF0W2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogTG9va3VwIHRoZSB2YWx1ZSBmb3IgYSBrZXkgaW4gYSBgUmVhZG9ubHlSZWNvcmRgLlxuICpcbiAqIEByZXR1cm5zIElmIHRoZSBzcGVjaWZpZWQga2V5IGV4aXN0cyBpdCByZXR1cm5zIGFuIGBPcHRpb25gIGNvbnRhaW5pbmcgdGhlIHZhbHVlLFxuICogb3RoZXJ3aXNlIGl0IHJldHVybnMgYE5vbmVgXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGxvb2t1cCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICogaW1wb3J0IHsgb3B0aW9uIH0gZnJvbSAnZnAtdHMnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsb29rdXAoXCJiXCIpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiB9KSwgb3B0aW9uLnNvbWUoXCJiYXJcIikpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsb29rdXAoXCJjXCIpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiB9KSwgb3B0aW9uLm5vbmUpO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwKGs6IHN0cmluZyk6IDxBPihyOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBPcHRpb248QT5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXA8QT4oazogc3RyaW5nLCByOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KTogT3B0aW9uPEE+XG5leHBvcnQgZnVuY3Rpb24gbG9va3VwPEE+KFxuICBrOiBzdHJpbmcsXG4gIHI/OiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+XG4pOiBPcHRpb248QT4gfCAoKHI6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IE9wdGlvbjxBPikge1xuICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIChyKSA9PiBsb29rdXAoaywgcilcbiAgfVxuICByZXR1cm4gXy5oYXMuY2FsbChyLCBrKSA/IF8uc29tZShyW2tdKSA6IF8ubm9uZVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZW1wdHk6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgbmV2ZXI+ID0ge31cblxuLyoqXG4gKiBNYXAgYSBgUmVhZG9ubHlSZWNvcmRgIHBhc3NpbmcgdGhlIGtleXMgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWFwV2l0aEluZGV4IH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKlxuICogY29uc3QgZiA9IChrOiBzdHJpbmcsIG46IG51bWJlcikgPT4gYCR7ay50b1VwcGVyQ2FzZSgpfS0ke259YDtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobWFwV2l0aEluZGV4KGYpKHsgYTogMywgYjogNSB9KSwgeyBhOiBcIkEtM1wiLCBiOiBcIkItNVwiIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBXaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oXG4gIGY6IChrOiBLLCBhOiBBKSA9PiBCXG4pOiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBSZWFkb25seVJlY29yZDxLLCBCPlxuZXhwb3J0IGZ1bmN0aW9uIG1hcFdpdGhJbmRleDxBLCBCPihcbiAgZjogKGs6IHN0cmluZywgYTogQSkgPT4gQlxuKTogKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+IHtcbiAgcmV0dXJuIChyKSA9PiB7XG4gICAgY29uc3Qgb3V0OiBSZWNvcmQ8c3RyaW5nLCBCPiA9IHt9XG4gICAgZm9yIChjb25zdCBrIGluIHIpIHtcbiAgICAgIGlmIChfLmhhcy5jYWxsKHIsIGspKSB7XG4gICAgICAgIG91dFtrXSA9IGYoaywgcltrXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogTWFwIGEgYFJlYWRvbmx5UmVjb3JkYCBwYXNzaW5nIHRoZSB2YWx1ZXMgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKlxuICogY29uc3QgZiA9IChuOiBudW1iZXIpID0+IGAtJHtufS1gO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtYXAoZikoeyBhOiAzLCBiOiA1IH0pLCB7IGE6IFwiLTMtXCIsIGI6IFwiLTUtXCIgfSk7XG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcDxBLCBCPihmOiAoYTogQSkgPT4gQik6IDxLIGV4dGVuZHMgc3RyaW5nPihmYTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IFJlYWRvbmx5UmVjb3JkPEssIEI+XG5leHBvcnQgZnVuY3Rpb24gbWFwPEEsIEI+KGY6IChhOiBBKSA9PiBCKTogKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+IHtcbiAgcmV0dXJuIG1hcFdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcbn1cblxuLyoqXG4gKiBSZWR1Y2VzIGEgYFJlYWRvbmx5UmVjb3JkYCBwYXNzaW5nIGVhY2gga2V5L3ZhbHVlIHBhaXIgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqIEVudHJpZXMgYXJlIHByb2Nlc3NlZCBpbiB0aGUgb3JkZXIsIHNvcnRlZCBieSBrZXkgYWNjb3JkaW5nIHRvXG4gKiB0aGUgZ2l2ZW4gYE9yZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlZHVjZVdpdGhJbmRleCB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiO1xuICogaW1wb3J0IHsgT3JkIH0gZnJvbSBcImZwLXRzL3N0cmluZ1wiO1xuICpcbiAqIGNvbnN0IHggPSB7IGM6IDMsIGE6IFwiZm9vXCIsIGI6IGZhbHNlIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJlZHVjZVdpdGhJbmRleChPcmQpKFtdIGFzIHN0cmluZ1tdLCAoaywgYiwgYSkgPT4gWy4uLmIsIGAke2t9LSR7YX1gXSkoeCksIFtcbiAqICAgXCJhLWZvb1wiLFxuICogICBcImItZmFsc2VcIixcbiAqICAgXCJjLTNcIixcbiAqIF0pO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4KFxuICBPOiBPcmQ8c3RyaW5nPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KGI6IEIsIGY6IChrOiBLLCBiOiBCLCBhOiBBKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBCXG4vKipcbiAqIFVzZSB0aGUgb3ZlcmxvYWQgY29uc3RyYWluZWQgYnkgYE9yZGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4PEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KFxuICBiOiBCLFxuICBmOiAoazogSywgYjogQiwgYTogQSkgPT4gQlxuKTogKGZhOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gQlxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleDxBLCBCPihcbiAgLi4uYXJnczogW09yZDxzdHJpbmc+XSB8IFtCLCAoazogc3RyaW5nLCBiOiBCLCBhOiBBKSA9PiBCXVxuKTpcbiAgfCAoKGI6IEIsIGY6IChrOiBzdHJpbmcsIGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQilcbiAgfCAoKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBCKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiByZWR1Y2VXaXRoSW5kZXgoUy5PcmQpKC4uLmFyZ3MpXG4gIH1cbiAgY29uc3Qga2V5c08gPSBrZXlzXyhhcmdzWzBdKVxuICByZXR1cm4gKGIsIGYpID0+IChmYSkgPT4ge1xuICAgIGxldCBvdXQ6IEIgPSBiXG4gICAgY29uc3Qga3MgPSBrZXlzTyhmYSlcbiAgICBjb25zdCBsZW4gPSBrcy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBrID0ga3NbaV1cbiAgICAgIG91dCA9IGYoaywgb3V0LCBmYVtrXSlcbiAgICB9XG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogTWFwIGFuZCBmb2xkIGEgYFJlYWRvbmx5UmVjb3JkYC5cbiAqIE1hcCB0aGUgYFJlYWRvbmx5UmVjb3JkYCBwYXNzaW5nIGVhY2gga2V5L3ZhbHVlIHBhaXIgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqIFRoZW4gZm9sZCB0aGUgcmVzdWx0cyB1c2luZyB0aGUgcHJvdmlkZWQgYE1vbm9pZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZvbGRNYXBXaXRoSW5kZXggfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIjtcbiAqIGltcG9ydCB7IE9yZCB9IGZyb20gXCJmcC10cy9zdHJpbmdcIjtcbiAqIGltcG9ydCB7IE1vbm9pZCB9IGZyb20gXCJmcC10cy9Nb25vaWRcIjtcbiAqXG4gKiBjb25zdCBtOiBNb25vaWQ8c3RyaW5nPiA9IHsgZW1wdHk6IFwiXCIsIGNvbmNhdDogKHg6IHN0cmluZywgeTogc3RyaW5nKSA9PiAoeCA/IGAke3h9IC0+ICR7eX1gIDogYCR7eX1gKSB9O1xuICogY29uc3QgZiA9IChrOnN0cmluZywgYTogbnVtYmVyKSA9PiBgJHtrfS0ke2F9YFxuICogY29uc3QgeCA9IHsgYzogMywgYTogMSwgYjogMiB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmb2xkTWFwV2l0aEluZGV4KE9yZCkobSkoZikoeCksIFwiYS0xIC0+IGItMiAtPiBjLTNcIik7XG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkTWFwV2l0aEluZGV4KFxuICBPOiBPcmQ8c3RyaW5nPlxuKTogPE0+KE06IE1vbm9pZDxNPikgPT4gPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KGY6IChrOiBLLCBhOiBBKSA9PiBNKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBNXG4vKipcbiAqIFVzZSB0aGUgb3ZlcmxvYWQgY29uc3RyYWluZWQgYnkgYE9yZGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9sZE1hcFdpdGhJbmRleDxNPihcbiAgTTogTW9ub2lkPE0+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgQT4oZjogKGs6IEssIGE6IEEpID0+IE0pID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IE1cbmV4cG9ydCBmdW5jdGlvbiBmb2xkTWFwV2l0aEluZGV4PE0+KFxuICBPOiBPcmQ8c3RyaW5nPiB8IE1vbm9pZDxNPlxuKTpcbiAgfCAoKE06IE1vbm9pZDxNPikgPT4gPEE+KGY6IChrOiBzdHJpbmcsIGE6IEEpID0+IE0pID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gTSlcbiAgfCAoPEE+KGY6IChrOiBzdHJpbmcsIGE6IEEpID0+IE0pID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gTSkge1xuICBpZiAoJ2NvbXBhcmUnIGluIE8pIHtcbiAgICBjb25zdCBrZXlzTyA9IGtleXNfKE8pXG4gICAgcmV0dXJuIChNOiBNb25vaWQ8TT4pID0+IDxBPihmOiAoazogc3RyaW5nLCBhOiBBKSA9PiBNKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IHtcbiAgICAgIGxldCBvdXQ6IE0gPSBNLmVtcHR5XG4gICAgICBjb25zdCBrcyA9IGtleXNPKGZhKVxuICAgICAgY29uc3QgbGVuID0ga3MubGVuZ3RoXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrc1tpXVxuICAgICAgICBvdXQgPSBNLmNvbmNhdChvdXQsIGYoaywgZmFba10pKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dFxuICAgIH1cbiAgfVxuICByZXR1cm4gZm9sZE1hcFdpdGhJbmRleChTLk9yZCkoTylcbn1cblxuLyoqXG4gKiBTYW1lIGFzIGByZWR1Y2VXaXRoSW5kZXhgLCBidXQgcmVkdWNlIHN0YXJ0aW5nIGZyb20gdGhlIHJpZ2h0XG4gKiAoaS5lLiBpbiByZXZlcnNlIG9yZGVyLCBmcm9tIHRoZSBsYXN0IHRvIHRoZSBmaXJzdCBlbnRyeSBhY2NvcmRpbmcgdG9cbiAqIHRoZSBnaXZlbiBgT3JkYCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlZHVjZVJpZ2h0V2l0aEluZGV4IH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKiBpbXBvcnQgeyBPcmQgfSBmcm9tIFwiZnAtdHMvc3RyaW5nXCI7XG4gKlxuICogY29uc3QgeCA9IHsgYzogMywgYTogXCJmb29cIiwgYjogZmFsc2UgfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVkdWNlUmlnaHRXaXRoSW5kZXgoT3JkKShbXSBhcyBzdHJpbmdbXSwgKGssIGEsIGIpID0+IFsuLi5iLCBgJHtrfS0ke2F9YF0pKHgpLCBbXG4gKiAgIFwiYy0zXCIsXG4gKiAgIFwiYi1mYWxzZVwiLFxuICogICBcImEtZm9vXCIsXG4gKiBdKTtcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0V2l0aEluZGV4KFxuICBPOiBPcmQ8c3RyaW5nPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KGI6IEIsIGY6IChrOiBLLCBhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBCXG4vKipcbiAqIFVzZSB0aGUgb3ZlcmxvYWQgY29uc3RyYWluZWQgYnkgYE9yZGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmlnaHRXaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oXG4gIGI6IEIsXG4gIGY6IChrOiBLLCBhOiBBLCBiOiBCKSA9PiBCXG4pOiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBCXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmlnaHRXaXRoSW5kZXg8QSwgQj4oXG4gIC4uLmFyZ3M6IFtPcmQ8c3RyaW5nPl0gfCBbQiwgKGs6IHN0cmluZywgYTogQSwgYjogQikgPT4gQl1cbik6XG4gIHwgKChiOiBCLCBmOiAoazogc3RyaW5nLCBhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IEIpXG4gIHwgKChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gcmVkdWNlUmlnaHRXaXRoSW5kZXgoUy5PcmQpKC4uLmFyZ3MpXG4gIH1cbiAgY29uc3Qga2V5c08gPSBrZXlzXyhhcmdzWzBdKVxuICByZXR1cm4gKGIsIGYpID0+IChmYSkgPT4ge1xuICAgIGxldCBvdXQ6IEIgPSBiXG4gICAgY29uc3Qga3MgPSBrZXlzTyhmYSlcbiAgICBjb25zdCBsZW4gPSBrcy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGsgPSBrc1tpXVxuICAgICAgb3V0ID0gZihrLCBmYVtrXSwgb3V0KVxuICAgIH1cbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgUmVhZG9ubHlSZWNvcmRgIHdpdGggb25lIGtleS92YWx1ZSBwYWlyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzaW5nbGV0b24gfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIjtcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNpbmdsZXRvbihcImFcIiwgMSksIHsgYTogMSB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNpbmdsZXRvbiA9IDxBPihrOiBzdHJpbmcsIGE6IEEpOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+ID0+ICh7IFtrXTogYSB9KVxuXG4vKipcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VXaXRoSW5kZXg8RiBleHRlbmRzIFVSSVMzPihcbiAgRjogQXBwbGljYXRpdmUzPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgUiwgRSwgQSwgQj4oXG4gIGY6IChrOiBLLCBhOiBBKSA9PiBLaW5kMzxGLCBSLCBFLCBCPlxuKSA9PiAodGE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBLaW5kMzxGLCBSLCBFLCBSZWFkb25seVJlY29yZDxLLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZVdpdGhJbmRleDxGIGV4dGVuZHMgVVJJUzMsIEU+KFxuICBGOiBBcHBsaWNhdGl2ZTNDPEYsIEU+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgUiwgQSwgQj4oXG4gIGY6IChrOiBLLCBhOiBBKSA9PiBLaW5kMzxGLCBSLCBFLCBCPlxuKSA9PiAodGE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBLaW5kMzxGLCBSLCBFLCBSZWFkb25seVJlY29yZDxLLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZVdpdGhJbmRleDxGIGV4dGVuZHMgVVJJUzI+KFxuICBGOiBBcHBsaWNhdGl2ZTI8Rj5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBFLCBBLCBCPihcbiAgZjogKGs6IEssIGE6IEEpID0+IEtpbmQyPEYsIEUsIEI+XG4pID0+ICh0YTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IEtpbmQyPEYsIEUsIFJlYWRvbmx5UmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlV2l0aEluZGV4PEYgZXh0ZW5kcyBVUklTMiwgRT4oXG4gIEY6IEFwcGxpY2F0aXZlMkM8RiwgRT5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihcbiAgZjogKGs6IEssIGE6IEEpID0+IEtpbmQyPEYsIEUsIEI+XG4pID0+ICh0YTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IEtpbmQyPEYsIEUsIFJlYWRvbmx5UmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlV2l0aEluZGV4PEYgZXh0ZW5kcyBVUklTPihcbiAgRjogQXBwbGljYXRpdmUxPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oXG4gIGY6IChrOiBLLCBhOiBBKSA9PiBLaW5kPEYsIEI+XG4pID0+ICh0YTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IEtpbmQ8RiwgUmVhZG9ubHlSZWNvcmQ8SywgQj4+XG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VXaXRoSW5kZXg8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oZjogKGs6IEssIGE6IEEpID0+IEhLVDxGLCBCPikgPT4gKHRhOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gSEtUPEYsIFJlYWRvbmx5UmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlV2l0aEluZGV4PEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogPEEsIEI+KGY6IChrOiBzdHJpbmcsIGE6IEEpID0+IEhLVDxGLCBCPikgPT4gKHRhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBIS1Q8RiwgUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPj4ge1xuICBjb25zdCB0cmF2ZXJzZVdpdGhJbmRleE9GID0gX3RyYXZlcnNlV2l0aEluZGV4KFMuT3JkKShGKVxuICByZXR1cm4gKGYpID0+ICh0YSkgPT4gdHJhdmVyc2VXaXRoSW5kZXhPRih0YSwgZilcbn1cblxuLyoqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlPEYgZXh0ZW5kcyBVUklTMz4oXG4gIEY6IEFwcGxpY2F0aXZlMzxGPlxuKTogPFIsIEUsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gS2luZDM8RiwgUiwgRSwgQj5cbikgPT4gPEsgZXh0ZW5kcyBzdHJpbmc+KHRhOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gS2luZDM8RiwgUiwgRSwgUmVhZG9ubHlSZWNvcmQ8SywgQj4+XG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2U8RiBleHRlbmRzIFVSSVMzLCBFPihcbiAgRjogQXBwbGljYXRpdmUzQzxGLCBFPlxuKTogPFIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gS2luZDM8RiwgUiwgRSwgQj5cbikgPT4gPEsgZXh0ZW5kcyBzdHJpbmc+KHRhOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gS2luZDM8RiwgUiwgRSwgUmVhZG9ubHlSZWNvcmQ8SywgQj4+XG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2U8RiBleHRlbmRzIFVSSVMyPihcbiAgRjogQXBwbGljYXRpdmUyPEY+XG4pOiA8RSwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBLaW5kMjxGLCBFLCBCPlxuKSA9PiA8SyBleHRlbmRzIHN0cmluZz4odGE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBLaW5kMjxGLCBFLCBSZWFkb25seVJlY29yZDxLLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZTxGIGV4dGVuZHMgVVJJUzIsIEU+KFxuICBGOiBBcHBsaWNhdGl2ZTJDPEYsIEU+XG4pOiA8QSwgQj4oXG4gIGY6IChhOiBBKSA9PiBLaW5kMjxGLCBFLCBCPlxuKSA9PiA8SyBleHRlbmRzIHN0cmluZz4odGE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBLaW5kMjxGLCBFLCBSZWFkb25seVJlY29yZDxLLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZTxGIGV4dGVuZHMgVVJJUz4oXG4gIEY6IEFwcGxpY2F0aXZlMTxGPlxuKTogPEEsIEI+KGY6IChhOiBBKSA9PiBLaW5kPEYsIEI+KSA9PiA8SyBleHRlbmRzIHN0cmluZz4odGE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBLaW5kPEYsIFJlYWRvbmx5UmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlPEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogPEEsIEI+KGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IDxLIGV4dGVuZHMgc3RyaW5nPih0YTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IEhLVDxGLCBSZWFkb25seVJlY29yZDxLLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZTxGPihcbiAgRjogQXBwbGljYXRpdmU8Rj5cbik6IDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiAodGE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IEhLVDxGLCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+PiB7XG4gIGNvbnN0IHRyYXZlcnNlT0YgPSBfdHJhdmVyc2UoUy5PcmQpKEYpXG4gIHJldHVybiAoZikgPT4gKHRhKSA9PiB0cmF2ZXJzZU9GKHRhLCBmKVxufVxuXG4vKipcbiAqIGBSZWFkb25seVJlY29yZGAgc2VxdWVuY2luZyxcbiAqIGkuZS4sIHRha2UgYSBgUmVhZG9ubHlSZWNvcmRgIGluIHdoaWNoIGVsZW1lbnRzIGFyZSBtb25hZHNcbiAqIGFuZCByZXR1cm4gYSBtb25hZCBvZiBhIGBSZWFkb25seVJlY29yZGAgb2YgdGhlIGJhc2UgdHlwZXMuXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZm9yIGluc3RhbmNlIHNob3dzIHNlcXVlbmNpbmdcbiAqIGEgYFJlYWRvbmx5UmVjb3JkPHN0cmluZywgT3B0aW9uPG51bWJlcj4+YFxuICogaW50byBhbiBgT3B0aW9uPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgbnVtYmVyPj5gLlxuICpcbiAqIGBzZXF1ZW5jZWAgaW4gYFJlYWRvbmx5UmVjb3JkYCBpcyBlcXVpdmFsZW50IHRvIGBzZXF1ZW5jZVNgIGluIGBBcHBseS50c2AuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKiBpbXBvcnQgeyBvcHRpb24gfSBmcm9tIFwiZnAtdHNcIjtcbiAqIGltcG9ydCB7IHNlcXVlbmNlUyB9IGZyb20gXCJmcC10cy9BcHBseVwiO1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHNlcXVlbmNlKG9wdGlvbi5BcHBsaWNhdGl2ZSkoeyBhOiBvcHRpb24uc29tZSgxKSwgYjogb3B0aW9uLnNvbWUoMikgfSksXG4gKiAgIG9wdGlvbi5zb21lKHsgYTogMSwgYjogMiB9KVxuICogKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc2VxdWVuY2Uob3B0aW9uLkFwcGxpY2F0aXZlKSh7IGE6IG9wdGlvbi5zb21lKDEpLCBiOiBvcHRpb24ubm9uZSB9KSwgb3B0aW9uLm5vbmUpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgc2VxdWVuY2Uob3B0aW9uLkFwcGxpY2F0aXZlKSh7IGE6IG9wdGlvbi5zb21lKDEpLCBiOiBvcHRpb24uc29tZSgyKSB9KSxcbiAqICAgc2VxdWVuY2VTKG9wdGlvbi5BcHBsaWNhdGl2ZSkoeyBhOiBvcHRpb24uc29tZSgxKSwgYjogb3B0aW9uLnNvbWUoMikgfSlcbiAqICk7XG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZTxGIGV4dGVuZHMgVVJJUzM+KFxuICBGOiBBcHBsaWNhdGl2ZTM8Rj5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBSLCBFLCBBPih0YTogUmVhZG9ubHlSZWNvcmQ8SywgS2luZDM8RiwgUiwgRSwgQT4+KSA9PiBLaW5kMzxGLCBSLCBFLCBSZWFkb25seVJlY29yZDxLLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZTxGIGV4dGVuZHMgVVJJUzMsIEU+KFxuICBGOiBBcHBsaWNhdGl2ZTNDPEYsIEU+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgUiwgQT4odGE6IFJlYWRvbmx5UmVjb3JkPEssIEtpbmQzPEYsIFIsIEUsIEE+PikgPT4gS2luZDM8RiwgUiwgRSwgUmVhZG9ubHlSZWNvcmQ8SywgQT4+XG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2U8RiBleHRlbmRzIFVSSVMyPihcbiAgRjogQXBwbGljYXRpdmUyPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgRSwgQT4odGE6IFJlYWRvbmx5UmVjb3JkPEssIEtpbmQyPEYsIEUsIEE+PikgPT4gS2luZDI8RiwgRSwgUmVhZG9ubHlSZWNvcmQ8SywgQT4+XG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2U8RiBleHRlbmRzIFVSSVMyLCBFPihcbiAgRjogQXBwbGljYXRpdmUyQzxGLCBFPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KHRhOiBSZWFkb25seVJlY29yZDxLLCBLaW5kMjxGLCBFLCBBPj4pID0+IEtpbmQyPEYsIEUsIFJlYWRvbmx5UmVjb3JkPEssIEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlPEYgZXh0ZW5kcyBVUklTPihcbiAgRjogQXBwbGljYXRpdmUxPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgQT4odGE6IFJlYWRvbmx5UmVjb3JkPEssIEtpbmQ8RiwgQT4+KSA9PiBLaW5kPEYsIFJlYWRvbmx5UmVjb3JkPEssIEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlPEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KHRhOiBSZWFkb25seVJlY29yZDxLLCBIS1Q8RiwgQT4+KSA9PiBIS1Q8RiwgUmVhZG9ubHlSZWNvcmQ8SywgQT4+XG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2U8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlPEY+XG4pOiA8QT4odGE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgSEtUPEYsIEE+PikgPT4gSEtUPEYsIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4+IHtcbiAgcmV0dXJuIF9zZXF1ZW5jZShTLk9yZCkoRilcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2l0aGVyYWJsZVxuICogQHNpbmNlIDIuNi41XG4gKi9cbmV4cG9ydCBjb25zdCB3aXRoZXI6IFBpcGVhYmxlV2l0aGVyMTxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogKDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIE9wdGlvbjxCPj4pID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gSEtUPEYsIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlRiA9IHRyYXZlcnNlKEYpXG4gIHJldHVybiAoZikgPT4gKGZhKSA9PiBGLm1hcChwaXBlKGZhLCB0cmF2ZXJzZUYoZikpLCBjb21wYWN0KVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXaXRoZXJhYmxlXG4gKiBAc2luY2UgMi42LjVcbiAqL1xuZXhwb3J0IGNvbnN0IHdpbHQ6IFBpcGVhYmxlV2lsdDE8VVJJPiA9IDxGPihcbiAgRjogQXBwbGljYXRpdmU8Rj5cbik6ICg8QSwgQiwgQz4oXG4gIGY6IChhOiBBKSA9PiBIS1Q8RiwgRWl0aGVyPEIsIEM+PlxuKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IEhLVDxGLCBTZXBhcmF0ZWQ8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPiwgUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBDPj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlRiA9IHRyYXZlcnNlKEYpXG4gIHJldHVybiAoZikgPT4gKGZhKSA9PiBGLm1hcChwaXBlKGZhLCB0cmF2ZXJzZUYoZikpLCBzZXBhcmF0ZSlcbn1cblxuLyoqXG4gKiBNYXBzIGEgYFJlYWRvbmx5UmVjb3JkYCB3aXRoIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGFuIGBFaXRoZXJgIGFuZFxuICogcGFydGl0aW9ucyB0aGUgcmVzdWx0aW5nIGBSZWFkb25seVJlY29yZGAgaW50byBgTGVmdGBzIGFuZCBgUmlnaHRgcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGFydGl0aW9uTWFwV2l0aEluZGV4IH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCJcbiAqIGltcG9ydCB7IGVpdGhlciB9IGZyb20gXCJmcC10c1wiXG4gKlxuICogY29uc3QgZiA9IChrZXk6IHN0cmluZywgYTogbnVtYmVyKSA9PlxuICogICBhID49IDAgPyBlaXRoZXIucmlnaHQoYCR7a2V5fSBpcyA+PSAwICgke2F9KWApIDogZWl0aGVyLmxlZnQoYCR7a2V5fSBpcyA8IDAgKCR7YX0pYCk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBhcnRpdGlvbk1hcFdpdGhJbmRleChmKSh7IGE6IC0xLCBiOiAyLCBjOiAxMjMgfSksIHtcbiAqICAgbGVmdDoge1xuICogICAgIGE6IFwiYSBpcyA8IDAgKC0xKVwiLFxuICogICB9LFxuICogICByaWdodDoge1xuICogICAgIGI6IFwiYiBpcyA+PSAwICgyKVwiLFxuICogICAgIGM6IFwiYyBpcyA+PSAwICgxMjMpXCIsXG4gKiAgIH0sXG4gKiB9KTtcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbk1hcFdpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCLCBDPihcbiAgZjogKGtleTogSywgYTogQSkgPT4gRWl0aGVyPEIsIEM+XG4pOiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPiwgUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBDPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25NYXBXaXRoSW5kZXg8QSwgQiwgQz4oXG4gIGY6IChrZXk6IHN0cmluZywgYTogQSkgPT4gRWl0aGVyPEIsIEM+XG4pOiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IFNlcGFyYXRlZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+LCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEM+PiB7XG4gIHJldHVybiAocikgPT4ge1xuICAgIGNvbnN0IGxlZnQ6IFJlY29yZDxzdHJpbmcsIEI+ID0ge31cbiAgICBjb25zdCByaWdodDogUmVjb3JkPHN0cmluZywgQz4gPSB7fVxuICAgIGZvciAoY29uc3QgayBpbiByKSB7XG4gICAgICBpZiAoXy5oYXMuY2FsbChyLCBrKSkge1xuICAgICAgICBjb25zdCBlID0gZihrLCByW2tdKVxuICAgICAgICBzd2l0Y2ggKGUuX3RhZykge1xuICAgICAgICAgIGNhc2UgJ0xlZnQnOlxuICAgICAgICAgICAgbGVmdFtrXSA9IGUubGVmdFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdSaWdodCc6XG4gICAgICAgICAgICByaWdodFtrXSA9IGUucmlnaHRcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbiAgfVxufVxuXG4vKipcbiAqIFBhcnRpdGlvbiBhIGBSZWFkb25seVJlY29yZGAgaW50byB0d28gcGFydHMgYWNjb3JkaW5nIHRvIGEgcHJlZGljYXRlXG4gKiB0aGF0IHRha2VzIGEga2V5IGFuZCBhIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwYXJ0aXRpb25XaXRoSW5kZXggfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIlxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHBhcnRpdGlvbldpdGhJbmRleCgoa2V5OiBzdHJpbmcsIGE6IG51bWJlcikgPT4ga2V5Lmxlbmd0aCA8PSAxICYmIGEgPiAwKSh7IGE6IC0xLCBiOiAyLCBjY2M6IDcgfSksXG4gKiAgIHtcbiAqICAgICBsZWZ0OiB7XG4gKiAgICAgICBhOiAtMSxcbiAqICAgICAgIGNjYzogNyxcbiAqICAgICB9LFxuICogICAgIHJpZ2h0OiB7XG4gKiAgICAgICBiOiAyLFxuICogICAgIH0sXG4gKiAgIH1cbiAqICk7XG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQSwgQiBleHRlbmRzIEE+KFxuICByZWZpbmVtZW50V2l0aEluZGV4OiBSZWZpbmVtZW50V2l0aEluZGV4PEssIEEsIEI+XG4pOiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPiwgUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PEssIEE+XG4pOiA8QiBleHRlbmRzIEE+KGZiOiBSZWFkb25seVJlY29yZDxLLCBCPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4sIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4+XG5leHBvcnQgZnVuY3Rpb24gcGFydGl0aW9uV2l0aEluZGV4PEsgZXh0ZW5kcyBzdHJpbmcsIEE+KFxuICBwcmVkaWNhdGVXaXRoSW5kZXg6IFByZWRpY2F0ZVdpdGhJbmRleDxLLCBBPlxuKTogKGZhOiBSZWFkb25seVJlY29yZDxLLCBBPikgPT4gU2VwYXJhdGVkPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4sIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4+XG5leHBvcnQgZnVuY3Rpb24gcGFydGl0aW9uV2l0aEluZGV4PEE+KFxuICBwcmVkaWNhdGVXaXRoSW5kZXg6IFByZWRpY2F0ZVdpdGhJbmRleDxzdHJpbmcsIEE+XG4pOiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IFNlcGFyYXRlZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PiB7XG4gIHJldHVybiAocikgPT4ge1xuICAgIGNvbnN0IGxlZnQ6IFJlY29yZDxzdHJpbmcsIEE+ID0ge31cbiAgICBjb25zdCByaWdodDogUmVjb3JkPHN0cmluZywgQT4gPSB7fVxuICAgIGZvciAoY29uc3QgayBpbiByKSB7XG4gICAgICBpZiAoXy5oYXMuY2FsbChyLCBrKSkge1xuICAgICAgICBjb25zdCBhID0gcltrXVxuICAgICAgICBpZiAocHJlZGljYXRlV2l0aEluZGV4KGssIGEpKSB7XG4gICAgICAgICAgcmlnaHRba10gPSBhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdFtrXSA9IGFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VwYXJhdGVkKGxlZnQsIHJpZ2h0KVxuICB9XG59XG5cbi8qKlxuICogTWFwcyBhIGBSZWFkb25seVJlY29yZGAgd2l0aCBhbiBpdGVyYXRpbmcgZnVuY3Rpb24gdGhhdCB0YWtlcyBrZXkgYW5kIHZhbHVlIGFuZFxuICogcmV0dXJucyBhbiBgT3B0aW9uYCwga2VlcGluZyBvbmx5IHRoZSBgU29tZWAgdmFsdWVzIGFuZCBkaXNjYXJkaW5nIGBOb25lYHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbHRlck1hcFdpdGhJbmRleCB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKiBpbXBvcnQgeyBvcHRpb24gfSBmcm9tIFwiZnAtdHNcIlxuICpcbiAqIGNvbnN0IGYgPSAoa2V5OiBzdHJpbmcsIGE6IG51bWJlcikgPT4gKGEgPj0gMCA/IG9wdGlvbi5zb21lKGAke2tleX0ke2F9YCkgOiBvcHRpb24ubm9uZSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbHRlck1hcFdpdGhJbmRleChmKSh7IGE6IC0xLCBiOiAyLCBjOiAzIH0pLCB7XG4gKiAgIGI6IFwiYjJcIixcbiAqICAgYzogXCJjM1wiLFxuICogfSk7XG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlck1hcFdpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihcbiAgZjogKGtleTogSywgYTogQSkgPT4gT3B0aW9uPEI+XG4pOiAoZmE6IFJlYWRvbmx5UmVjb3JkPEssIEE+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTWFwV2l0aEluZGV4PEEsIEI+KFxuICBmOiAoa2V5OiBzdHJpbmcsIGE6IEEpID0+IE9wdGlvbjxCPlxuKTogKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+IHtcbiAgcmV0dXJuIChyKSA9PiB7XG4gICAgY29uc3Qgb3V0OiBSZWNvcmQ8c3RyaW5nLCBCPiA9IHt9XG4gICAgZm9yIChjb25zdCBrIGluIHIpIHtcbiAgICAgIGlmIChfLmhhcy5jYWxsKHIsIGspKSB7XG4gICAgICAgIGNvbnN0IG9iID0gZihrLCByW2tdKVxuICAgICAgICBpZiAoXy5pc1NvbWUob2IpKSB7XG4gICAgICAgICAgb3V0W2tdID0gb2IudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9kdWNlIGEgbmV3IGBSZWFkb25seVJlY29yZGAga2VlcGluZyBvbmx5IHRoZSBlbnRyaWVzIHRoYXQgc2F0aXNmeVxuICogYSBwcmVkaWNhdGUgdGFraW5nIGtleSBhbmQgdmFsdWUgYXMgaW5wdXQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbHRlcldpdGhJbmRleCB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgZmlsdGVyV2l0aEluZGV4KChzOiBzdHJpbmcsIHY6IG51bWJlcikgPT4gcy5sZW5ndGggPD0gMSAmJiB2ID4gMCkoeyBhOiAxLCBiOiAtMiwgY2NjOiAzIH0pLFxuICogICB7XG4gKiAgICAgYTogMSxcbiAqICAgfVxuICogKTtcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcldpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCIGV4dGVuZHMgQT4oXG4gIHJlZmluZW1lbnRXaXRoSW5kZXg6IFJlZmluZW1lbnRXaXRoSW5kZXg8SywgQSwgQj5cbik6IChmYTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PEssIEE+XG4pOiA8QiBleHRlbmRzIEE+KGZiOiBSZWFkb25seVJlY29yZDxLLCBCPikgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcldpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBPihcbiAgcHJlZGljYXRlV2l0aEluZGV4OiBQcmVkaWNhdGVXaXRoSW5kZXg8SywgQT5cbik6IChmYTogUmVhZG9ubHlSZWNvcmQ8SywgQT4pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8QT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PHN0cmluZywgQT5cbik6IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPiB7XG4gIHJldHVybiAoZmEpID0+IHtcbiAgICBjb25zdCBvdXQ6IFJlY29yZDxzdHJpbmcsIEE+ID0ge31cbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmEpIHtcbiAgICAgIGlmIChfLmhhcy5jYWxsKGZhLCBrZXkpKSB7XG4gICAgICAgIGNvbnN0IGEgPSBmYVtrZXldXG4gICAgICAgIGlmIChwcmVkaWNhdGVXaXRoSW5kZXgoa2V5LCBhKSkge1xuICAgICAgICAgIG91dFtrZXldID0gYVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZWQgPyBvdXQgOiBmYVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFJlYWRvbmx5UmVjb3JkYCBmcm9tIGEgZm9sZGFibGUgY29sbGVjdGlvbiBvZiBrZXkvdmFsdWUgcGFpcnMsIHVzaW5nIHRoZVxuICogc3BlY2lmaWVkIGBNYWdtYWAgdG8gY29tYmluZSB2YWx1ZXMgZm9yIGR1cGxpY2F0ZSBrZXlzLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlPEYgZXh0ZW5kcyBVUklTMywgQT4oXG4gIE06IE1hZ21hPEE+LFxuICBGOiBGb2xkYWJsZTM8Rj5cbik6IDxSLCBFPihma2E6IEtpbmQzPEYsIFIsIEUsIHJlYWRvbmx5IFtzdHJpbmcsIEFdPikgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGIGV4dGVuZHMgVVJJUzIsIEE+KFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGUyPEY+XG4pOiA8RT4oZmthOiBLaW5kMjxGLCBFLCByZWFkb25seSBbc3RyaW5nLCBBXT4pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGU8RiBleHRlbmRzIFVSSVMsIEE+KFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGUxPEY+XG4pOiAoZmthOiBLaW5kPEYsIHJlYWRvbmx5IFtzdHJpbmcsIEFdPikgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGLCBBPihcbiAgTTogTWFnbWE8QT4sXG4gIEY6IEZvbGRhYmxlSEtUPEY+XG4pOiAoZmthOiBIS1Q8RiwgcmVhZG9ubHkgW3N0cmluZywgQV0+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+XG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlPEYsIEE+KFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGVIS1Q8Rj5cbik6IChma2E6IEhLVDxGLCByZWFkb25seSBbc3RyaW5nLCBBXT4pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4ge1xuICBjb25zdCBmcm9tRm9sZGFibGVNYXBNID0gZnJvbUZvbGRhYmxlTWFwKE0sIEYpXG4gIHJldHVybiAoZmthKSA9PiBmcm9tRm9sZGFibGVNYXBNKGZrYSwgaWRlbnRpdHkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFJlYWRvbmx5UmVjb3JkYCBmcm9tIGEgZm9sZGFibGUgY29sbGVjdGlvbiB1c2luZyB0aGUgc3BlY2lmaWVkIGZ1bmN0aW9ucyB0bzpcbiAqXG4gKiAtIG1hcCB0byBrZXkvdmFsdWUgcGFpcnNcbiAqIC0gY29tYmluZSB2YWx1ZXMgZm9yIGR1cGxpY2F0ZSBrZXlzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBsYXN0IH0gZnJvbSAnZnAtdHMvU2VtaWdyb3VwJ1xuICogaW1wb3J0IHsgRm9sZGFibGUsIHppcCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICogaW1wb3J0IHsgUmVhZG9ubHlSZWNvcmQsIGZyb21Gb2xkYWJsZU1hcCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICpcbiAqIGV4cG9ydCBjb25zdCB6aXBPYmplY3QgPSA8SyBleHRlbmRzIHN0cmluZywgQT4oa2V5czogUmVhZG9ubHlBcnJheTxLPiwgdmFsdWVzOiBSZWFkb25seUFycmF5PEE+KTogUmVhZG9ubHlSZWNvcmQ8SywgQT4gPT5cbiAqICAgZnJvbUZvbGRhYmxlTWFwKGxhc3Q8QT4oKSwgRm9sZGFibGUpKHppcChrZXlzLCB2YWx1ZXMpLCBpZGVudGl0eSlcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHppcE9iamVjdChbJ2EnLCAnYiddLCBbMSwgMiwgM10pLCB7IGE6IDEsIGI6IDIgfSlcbiAqXG4gKiBpbnRlcmZhY2UgVXNlciB7XG4gKiAgIHJlYWRvbmx5IGlkOiBzdHJpbmdcbiAqICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gKiB9XG4gKlxuICogY29uc3QgdXNlcnM6IFJlYWRvbmx5QXJyYXk8VXNlcj4gPSBbXG4gKiAgIHsgaWQ6ICdpZDEnLCBuYW1lOiAnbmFtZTEnIH0sXG4gKiAgIHsgaWQ6ICdpZDInLCBuYW1lOiAnbmFtZTInIH0sXG4gKiAgIHsgaWQ6ICdpZDEnLCBuYW1lOiAnbmFtZTMnIH1cbiAqIF1cbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZyb21Gb2xkYWJsZU1hcChsYXN0PFVzZXI+KCksIEZvbGRhYmxlKSh1c2VycywgdXNlciA9PiBbdXNlci5pZCwgdXNlcl0pLCB7XG4gKiAgIGlkMTogeyBpZDogJ2lkMScsIG5hbWU6ICduYW1lMycgfSxcbiAqICAgaWQyOiB7IGlkOiAnaWQyJywgbmFtZTogJ25hbWUyJyB9XG4gKiB9KVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlTWFwPEYgZXh0ZW5kcyBVUklTMywgQj4oXG4gIE06IE1hZ21hPEI+LFxuICBGOiBGb2xkYWJsZTM8Rj5cbik6IDxSLCBFLCBBPihmYTogS2luZDM8RiwgUiwgRSwgQT4sIGY6IChhOiBBKSA9PiByZWFkb25seSBbc3RyaW5nLCBCXSkgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZU1hcDxGIGV4dGVuZHMgVVJJUzIsIEI+KFxuICBNOiBNYWdtYTxCPixcbiAgRjogRm9sZGFibGUyPEY+XG4pOiA8RSwgQT4oZmE6IEtpbmQyPEYsIEUsIEE+LCBmOiAoYTogQSkgPT4gcmVhZG9ubHkgW3N0cmluZywgQl0pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGVNYXA8RiBleHRlbmRzIFVSSVMsIEI+KFxuICBNOiBNYWdtYTxCPixcbiAgRjogRm9sZGFibGUxPEY+XG4pOiA8QT4oZmE6IEtpbmQ8RiwgQT4sIGY6IChhOiBBKSA9PiByZWFkb25seSBbc3RyaW5nLCBCXSkgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZU1hcDxGLCBCPihcbiAgTTogTWFnbWE8Qj4sXG4gIEY6IEZvbGRhYmxlSEtUPEY+XG4pOiA8QT4oZmE6IEhLVDxGLCBBPiwgZjogKGE6IEEpID0+IHJlYWRvbmx5IFtzdHJpbmcsIEJdKSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+XG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlTWFwPEYsIEI+KFxuICBNOiBNYWdtYTxCPixcbiAgRjogRm9sZGFibGVIS1Q8Rj5cbik6IDxBPihmYTogSEtUPEYsIEE+LCBmOiAoYTogQSkgPT4gcmVhZG9ubHkgW3N0cmluZywgQl0pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4ge1xuICByZXR1cm4gPEE+KHRhOiBIS1Q8RiwgQT4sIGY6IChhOiBBKSA9PiByZWFkb25seSBbc3RyaW5nLCBCXSkgPT4ge1xuICAgIHJldHVybiBGLnJlZHVjZTxBLCBSZWNvcmQ8c3RyaW5nLCBCPj4odGEsIHt9LCAociwgYSkgPT4ge1xuICAgICAgY29uc3QgW2ssIGJdID0gZihhKVxuICAgICAgcltrXSA9IF8uaGFzLmNhbGwociwgaykgPyBNLmNvbmNhdChyW2tdLCBiKSA6IGJcbiAgICAgIHJldHVybiByXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFRlc3QgaWYgZXZlcnkgdmFsdWUgaW4gYSBgUmVhZG9ubHlSZWNvcmRgIHNhdGlzZmllcyB0aGUgcHJlZGljYXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBldmVyeSB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChldmVyeSgobjogbnVtYmVyKSA9PiBuID49IDApKHsgYTogMSwgYjogMiB9KSwgdHJ1ZSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGV2ZXJ5KChuOiBudW1iZXIpID0+IG4gPj0gMCkoeyBhOiAxLCBiOiAtMSB9KSwgZmFsc2UpO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlcnk8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAocjogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAocikgPT4ge1xuICAgIGZvciAoY29uc3QgayBpbiByKSB7XG4gICAgICBpZiAoIXByZWRpY2F0ZShyW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKipcbiAqIFRlc3QgaWYgYXQgbGVhc3Qgb25lIHZhbHVlIGluIGEgYFJlYWRvbmx5UmVjb3JkYCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29tZSB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzb21lKChuOiBudW1iZXIpID0+IG4gPj0gMCkoeyBhOiAxLCBiOiAtMiB9KSwgdHJ1ZSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvbWUoKG46IG51bWJlcikgPT4gbiA+PSAwKSh7IGE6IC0xLCBiOiAtMiB9KSwgZmFsc2UpO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc29tZTxBPihwcmVkaWNhdGU6IChhOiBBKSA9PiBib29sZWFuKTogKHI6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHIpID0+IHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcikge1xuICAgICAgaWYgKHByZWRpY2F0ZShyW2tdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogR2l2ZW4gYW4gYEVxYCBjaGVja3MgaWYgYSBgUmVhZG9ubHlSZWNvcmRgIGNvbnRhaW5zIGFuIGVudHJ5IHdpdGhcbiAqIHZhbHVlIGVxdWFsIHRvIGEgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGVsZW0gfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIlxuICogaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSBcImZwLXRzXCJcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGVsZW0obnVtYmVyLkVxKSgxMjMsIHsgZm9vOiAxMjMsIGJhcjogMjM0IH0pLCB0cnVlKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZWxlbShudW1iZXIuRXEpKC03LCB7IGZvbzogMTIzLCBiYXI6IDIzNCB9KSwgZmFsc2UpO1xuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbTxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKGE6IEEpOiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IGJvb2xlYW5cbiAgKGE6IEEsIGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KTogYm9vbGVhblxufVxuZXhwb3J0IGZ1bmN0aW9uIGVsZW08QT4oXG4gIEU6IEVxPEE+XG4pOiAoYTogQSwgZmE/OiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBib29sZWFuIHwgKChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gYm9vbGVhbikge1xuICByZXR1cm4gKGEsIGZhPykgPT4ge1xuICAgIGlmIChmYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBlbGVtRSA9IGVsZW0oRSlcbiAgICAgIHJldHVybiAoZmEpID0+IGVsZW1FKGEsIGZhKVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGsgaW4gZmEpIHtcbiAgICAgIGlmIChFLmVxdWFscyhmYVtrXSwgYSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBVbmlvbiBvZiB0d28gYFJlYWRvbmx5UmVjb3JkYHMuXG4gKiBUYWtlcyB0d28gYFJlYWRvbmx5UmVjb3JkYHMgYW5kIHByb2R1Y2VzIGEgYFJlYWRvbmx5UmVjb3JkYCBjb21iaW5pbmcgYWxsIHRoZVxuICogZW50cmllcyBvZiB0aGUgdHdvIGlucHV0cy5cbiAqIEl0IHVzZXMgdGhlIGBjb25jYXRgIGZ1bmN0aW9uIG9mIHRoZSBwcm92aWRlZCBgTWFnbWFgIHRvXG4gKiBjb21iaW5lIHRoZSBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIGtleS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdW5pb24gfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIjtcbiAqIGltcG9ydCB7IE1hZ21hIH0gZnJvbSBcImZwLXRzL01hZ21hXCI7XG4gKlxuICogY29uc3QgbTE6IE1hZ21hPG51bWJlcj4gPSB7IGNvbmNhdDogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB4ICsgeSB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1bmlvbihtMSkoeyBhOiAzLCBjOiAzIH0pKHsgYTogMSwgYjogMiB9KSwgeyBhOiA0LCBiOiAyLCBjOiAzIH0pO1xuICogY29uc3QgbTI6IE1hZ21hPG51bWJlcj4gPSB7IGNvbmNhdDogKHg6IG51bWJlcikgPT4geCB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1bmlvbihtMikoeyBhOiAzLCBjOiAzIH0pKHsgYTogMSwgYjogMiB9KSwgeyBhOiAxLCBiOiAyLCBjOiAzIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdW5pb24gPSA8QT4oTTogTWFnbWE8QT4pID0+IChzZWNvbmQ6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IChcbiAgZmlyc3Q6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT5cbik6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4gPT4ge1xuICBpZiAoaXNFbXB0eShmaXJzdCkpIHtcbiAgICByZXR1cm4gc2Vjb25kXG4gIH1cbiAgaWYgKGlzRW1wdHkoc2Vjb25kKSkge1xuICAgIHJldHVybiBmaXJzdFxuICB9XG4gIGNvbnN0IG91dDogUmVjb3JkPHN0cmluZywgQT4gPSB7fVxuICBmb3IgKGNvbnN0IGsgaW4gZmlyc3QpIHtcbiAgICBpZiAoaGFzKGssIHNlY29uZCkpIHtcbiAgICAgIG91dFtrXSA9IE0uY29uY2F0KGZpcnN0W2tdLCBzZWNvbmRba10pXG4gICAgfSBlbHNlIHtcbiAgICAgIG91dFtrXSA9IGZpcnN0W2tdXG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgayBpbiBzZWNvbmQpIHtcbiAgICBpZiAoIWhhcyhrLCBvdXQpKSB7XG4gICAgICBvdXRba10gPSBzZWNvbmRba11cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIEludGVyc2VjdGlvbiBvZiB0d28gYFJlYWRvbmx5UmVjb3JkYHMuXG4gKiBUYWtlcyB0d28gYFJlYWRvbmx5UmVjb3JkYHMgYW5kIHByb2R1Y2VzIGEgYFJlYWRvbmx5UmVjb3JkYCBjb21iaW5pbmcgb25seSB0aGVcbiAqIGVudHJpZXMgb2YgdGhlIHR3byBpbnB1dHN3aXRoIHRoZSBzYW1lIGtleS5cbiAqIEl0IHVzZXMgdGhlIGBjb25jYXRgIGZ1bmN0aW9uIG9mIHRoZSBwcm92aWRlZCBgTWFnbWFgIHRvXG4gKiBjb21iaW5lIHRoZSBlbGVtZW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW50ZXJzZWN0aW9uIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKiBpbXBvcnQgeyBNYWdtYSB9IGZyb20gXCJmcC10cy9NYWdtYVwiO1xuICpcbiAqIGNvbnN0IG0xOiBNYWdtYTxudW1iZXI+ID0geyBjb25jYXQ6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4geCArIHkgfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW50ZXJzZWN0aW9uKG0xKSh7IGE6IDMsIGM6IDMgfSkoeyBhOiAxLCBiOiAyIH0pLCB7IGE6IDR9KTtcbiAqIGNvbnN0IG0yOiBNYWdtYTxudW1iZXI+ID0geyBjb25jYXQ6ICh4OiBudW1iZXIpID0+IHggfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW50ZXJzZWN0aW9uKG0yKSh7IGE6IDMsIGM6IDMgfSkoeyBhOiAxLCBiOiAyIH0pLCB7IGE6IDF9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGludGVyc2VjdGlvbiA9IDxBPihNOiBNYWdtYTxBPikgPT4gKHNlY29uZDogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gKFxuICBmaXJzdDogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPlxuKTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPiA9PiB7XG4gIGlmIChpc0VtcHR5KGZpcnN0KSB8fCBpc0VtcHR5KHNlY29uZCkpIHtcbiAgICByZXR1cm4gZW1wdHlcbiAgfVxuICBjb25zdCBvdXQ6IFJlY29yZDxzdHJpbmcsIEE+ID0ge31cbiAgZm9yIChjb25zdCBrIGluIGZpcnN0KSB7XG4gICAgaWYgKGhhcyhrLCBzZWNvbmQpKSB7XG4gICAgICBvdXRba10gPSBNLmNvbmNhdChmaXJzdFtrXSwgc2Vjb25kW2tdKVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogRGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBgUmVhZG9ubHlSZWNvcmRgcy5cbiAqIFRha2VzIHR3byBgUmVhZG9ubHlSZWNvcmRgcyBhbmQgcHJvZHVjZXMgYSBgUmVhZG9ubHlSZWNvcmRgIGNvbXBvc2VkIGJ5IHRoZVxuICogZW50cmllcyBvZiB0aGUgdHdvIGlucHV0cywgcmVtb3ZpbmcgdGhlIGVudHJpZXMgd2l0aCB0aGUgc2FtZVxuICoga2V5IGluIGJvdGggaW5wdXRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBkaWZmZXJlbmNlIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkaWZmZXJlbmNlKHsgYTogMSB9KSh7IGE6IDEsIGI6IDIgfSksIHsgYjogMiB9KTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZGlmZmVyZW5jZSh7IGE6IDMgfSkoeyBhOiAxLCBiOiAyIH0pLCB7IGI6IDIgfSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGRpZmZlcmVuY2UoeyBhOiAzLCBjOiAzIH0pKHsgYTogMSwgYjogMiB9KSwgeyBiOiAyLCBjOiAzIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZSA9IDxBPihzZWNvbmQ6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IChcbiAgZmlyc3Q6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT5cbik6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4gPT4ge1xuICBpZiAoaXNFbXB0eShmaXJzdCkpIHtcbiAgICByZXR1cm4gc2Vjb25kXG4gIH1cbiAgaWYgKGlzRW1wdHkoc2Vjb25kKSkge1xuICAgIHJldHVybiBmaXJzdFxuICB9XG4gIGNvbnN0IG91dDogUmVjb3JkPHN0cmluZywgQT4gPSB7fVxuICBmb3IgKGNvbnN0IGsgaW4gZmlyc3QpIHtcbiAgICBpZiAoIWhhcyhrLCBzZWNvbmQpKSB7XG4gICAgICBvdXRba10gPSBmaXJzdFtrXVxuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGsgaW4gc2Vjb25kKSB7XG4gICAgaWYgKCFoYXMoaywgZmlyc3QpKSB7XG4gICAgICBvdXRba10gPSBzZWNvbmRba11cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBfbWFwOiBGdW5jdG9yMTxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuLyoqIEBpbnRlcm5hbCAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBfbWFwV2l0aEluZGV4OiBGdW5jdG9yV2l0aEluZGV4MTxVUkksIHN0cmluZz5bJ21hcFdpdGhJbmRleCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXBXaXRoSW5kZXgoZikpXG4vKiogQGludGVybmFsICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IF9yZWR1Y2U6IChPOiBPcmQ8c3RyaW5nPikgPT4gRm9sZGFibGUxPFVSST5bJ3JlZHVjZSddID0gKE86IE9yZDxzdHJpbmc+KSA9PiB7XG4gIGNvbnN0IHJlZHVjZU8gPSByZWR1Y2UoTylcbiAgcmV0dXJuIChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlTyhiLCBmKSlcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBfZm9sZE1hcDogKE86IE9yZDxzdHJpbmc+KSA9PiBGb2xkYWJsZTE8VVJJPlsnZm9sZE1hcCddID0gKE8pID0+IChNKSA9PiB7XG4gIGNvbnN0IGZvbGRNYXBNID0gZm9sZE1hcChPKShNKVxuICByZXR1cm4gKGZhLCBmKSA9PiBwaXBlKGZhLCBmb2xkTWFwTShmKSlcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgX3JlZHVjZVJpZ2h0OiAoTzogT3JkPHN0cmluZz4pID0+IEZvbGRhYmxlMTxVUkk+WydyZWR1Y2VSaWdodCddID0gKE8pID0+IHtcbiAgY29uc3QgcmVkdWNlUmlnaHRPID0gcmVkdWNlUmlnaHQoTylcbiAgcmV0dXJuIChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlUmlnaHRPKGIsIGYpKVxufVxuLyoqIEBpbnRlcm5hbCAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBfZmlsdGVyID0gPEE+KGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4gPT5cbiAgcGlwZShmYSwgZmlsdGVyKHByZWRpY2F0ZSkpXG4vKiogQGludGVybmFsICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IF9maWx0ZXJNYXA6IEZpbHRlcmFibGUxPFVSST5bJ2ZpbHRlck1hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBmaWx0ZXJNYXAoZikpXG4vKiogQGludGVybmFsICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IF9wYXJ0aXRpb24gPSA8QT4oXG4gIGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LFxuICBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPlxuKTogU2VwYXJhdGVkPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4sIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4+ID0+IHBpcGUoZmEsIHBhcnRpdGlvbihwcmVkaWNhdGUpKVxuLyoqIEBpbnRlcm5hbCAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBfcGFydGl0aW9uTWFwOiBGaWx0ZXJhYmxlMTxVUkk+WydwYXJ0aXRpb25NYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgcGFydGl0aW9uTWFwKGYpKVxuLyoqIEBpbnRlcm5hbCAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBfcmVkdWNlV2l0aEluZGV4OiAoTzogT3JkPHN0cmluZz4pID0+IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz5bJ3JlZHVjZVdpdGhJbmRleCddID0gKE8pID0+IHtcbiAgY29uc3QgcmVkdWNlV2l0aEluZGV4TyA9IHJlZHVjZVdpdGhJbmRleChPKVxuICByZXR1cm4gKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2VXaXRoSW5kZXhPKGIsIGYpKVxufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IF9mb2xkTWFwV2l0aEluZGV4OiAoTzogT3JkPHN0cmluZz4pID0+IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz5bJ2ZvbGRNYXBXaXRoSW5kZXgnXSA9IChPKSA9PiB7XG4gIGNvbnN0IGZvbGRNYXBXaXRoSW5kZXhPID0gZm9sZE1hcFdpdGhJbmRleChPKVxuICByZXR1cm4gKE0pID0+IHtcbiAgICBjb25zdCBmb2xkTWFwV2l0aEluZGV4TSA9IGZvbGRNYXBXaXRoSW5kZXhPKE0pXG4gICAgcmV0dXJuIChmYSwgZikgPT4gcGlwZShmYSwgZm9sZE1hcFdpdGhJbmRleE0oZikpXG4gIH1cbn1cbi8qKiBAaW50ZXJuYWwgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgX3JlZHVjZVJpZ2h0V2l0aEluZGV4OiAoTzogT3JkPHN0cmluZz4pID0+IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz5bJ3JlZHVjZVJpZ2h0V2l0aEluZGV4J10gPSAoXG4gIE9cbikgPT4ge1xuICBjb25zdCByZWR1Y2VSaWdodFdpdGhJbmRleE8gPSByZWR1Y2VSaWdodFdpdGhJbmRleChPKVxuICByZXR1cm4gKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2VSaWdodFdpdGhJbmRleE8oYiwgZikpXG59XG4vKiogQGludGVybmFsICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IF9wYXJ0aXRpb25NYXBXaXRoSW5kZXggPSA8QSwgQiwgQz4oXG4gIGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LFxuICBmOiAoa2V5OiBzdHJpbmcsIGE6IEEpID0+IEVpdGhlcjxCLCBDPlxuKTogU2VwYXJhdGVkPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4sIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQz4+ID0+IHBpcGUoZmEsIHBhcnRpdGlvbk1hcFdpdGhJbmRleChmKSlcbi8qKiBAaW50ZXJuYWwgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgX3BhcnRpdGlvbldpdGhJbmRleCA9IDxBPihcbiAgZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4sXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PHN0cmluZywgQT5cbikgPT4gcGlwZShmYSwgcGFydGl0aW9uV2l0aEluZGV4KHByZWRpY2F0ZVdpdGhJbmRleCkpXG4vKiogQGludGVybmFsICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IF9maWx0ZXJNYXBXaXRoSW5kZXggPSA8QSwgQj4oZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4sIGY6IChrZXk6IHN0cmluZywgYTogQSkgPT4gT3B0aW9uPEI+KSA9PlxuICBwaXBlKGZhLCBmaWx0ZXJNYXBXaXRoSW5kZXgoZikpXG4vKiogQGludGVybmFsICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNvbnN0IF9maWx0ZXJXaXRoSW5kZXggPSA8QT4oZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4sIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PHN0cmluZywgQT4pID0+XG4gIHBpcGUoZmEsIGZpbHRlcldpdGhJbmRleChwcmVkaWNhdGVXaXRoSW5kZXgpKVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IF90cmF2ZXJzZSA9IChcbiAgTzogT3JkPHN0cmluZz5cbik6ICg8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlPEY+XG4pID0+IDxBLCBCPih0YTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPiwgZjogKGE6IEEpID0+IEhLVDxGLCBCPikgPT4gSEtUPEYsIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlV2l0aEluZGV4TyA9IF90cmF2ZXJzZVdpdGhJbmRleChPKVxuICByZXR1cm4gKEYpID0+IHtcbiAgICBjb25zdCB0cmF2ZXJzZVdpdGhJbmRleE9GID0gdHJhdmVyc2VXaXRoSW5kZXhPKEYpXG4gICAgcmV0dXJuICh0YSwgZikgPT4gdHJhdmVyc2VXaXRoSW5kZXhPRih0YSwgZmxvdyhTSywgZikpXG4gIH1cbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBfc2VxdWVuY2UgPSAoXG4gIE86IE9yZDxzdHJpbmc+XG4pOiAoPEY+KEY6IEFwcGxpY2F0aXZlPEY+KSA9PiA8QT4odGE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgSEtUPEYsIEE+PikgPT4gSEtUPEYsIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlTyA9IF90cmF2ZXJzZShPKVxuICByZXR1cm4gKEYpID0+IHtcbiAgICBjb25zdCB0cmF2ZXJzZU9GID0gdHJhdmVyc2VPKEYpXG4gICAgcmV0dXJuICh0YSkgPT4gdHJhdmVyc2VPRih0YSwgaWRlbnRpdHkpXG4gIH1cbn1cbmNvbnN0IF90cmF2ZXJzZVdpdGhJbmRleCA9IChPOiBPcmQ8c3RyaW5nPikgPT4gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogKDxBLCBCPih0YTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPiwgZjogKGs6IHN0cmluZywgYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPj4pID0+IHtcbiAgY29uc3Qga2V5c08gPSBrZXlzXyhPKVxuICByZXR1cm4gPEEsIEI+KHRhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LCBmOiAoazogc3RyaW5nLCBhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IHtcbiAgICBjb25zdCBrcyA9IGtleXNPKHRhKVxuICAgIGlmIChrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBGLm9mKGVtcHR5KVxuICAgIH1cbiAgICBsZXQgZnI6IEhLVDxGLCBSZWNvcmQ8c3RyaW5nLCBCPj4gPSBGLm9mKHt9KVxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtzKSB7XG4gICAgICBmciA9IEYuYXAoXG4gICAgICAgIEYubWFwKGZyLCAocikgPT4gKGI6IEIpID0+IHtcbiAgICAgICAgICByW2tleV0gPSBiXG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgICAgfSksXG4gICAgICAgIGYoa2V5LCB0YVtrZXldKVxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gZnJcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBHaXZlbiBhIGBQcmVkaWNhdGVgLCBpdCBwcm9kdWNlcyBhIG5ldyBgUmVhZG9ubHlSZWNvcmRgIGtlZXBpbmcgb25seSB0aGUgZW50cmllcyB3aXRoIGFcbiAqIHZhbHVlIHRoYXQgc2F0aXNmaWVzIHRoZSBwcm92aWRlZCBwcmVkaWNhdGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaWx0ZXIoKHM6IHN0cmluZykgPT4gcy5sZW5ndGggPCA0KSh7IGE6IFwiZm9vXCIsIGI6IFwiYmFyXCIsIGM6IFwidmVyeWxvbmdcIiB9KSwge1xuICogICBhOiBcImZvb1wiLFxuICogICBiOiBcImJhclwiLFxuICogfSk7XG4gKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGZiOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPlxufSA9IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6ICgoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+XG4gIGZpbHRlcldpdGhJbmRleCgoXywgYSkgPT4gcHJlZGljYXRlKGEpKVxuXG4vKipcbiAqIE1hcHMgYSBgUmVhZG9ubHlSZWNvcmRgIHdpdGggYW4gaXRlcmF0aW5nIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBgT3B0aW9uYFxuICogYW5kIGl0IGtlZXBzIG9ubHkgdGhlIGBTb21lYCB2YWx1ZXMgZGlzY2FyZGluZyB0aGUgYE5vbmVgcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmlsdGVyTWFwIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCJcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gXCJmcC10c1wiXG4gKlxuICogY29uc3QgZiA9IChzOiBzdHJpbmcpID0+IHMubGVuZ3RoIDwgNCA/IG9wdGlvbi5zb21lKGAke3N9IGlzIHNob3J0YCk6IG9wdGlvbi5ub25lXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbHRlck1hcChmKSh7IGE6IFwiZm9vXCIsIGI6IFwiYmFyXCIsIGM6IFwidmVyeWxvbmdcIiB9KSwge1xuICogICBhOiBcImZvbyBpcyBzaG9ydFwiLFxuICogICBiOiBcImJhciBpcyBzaG9ydFwiLFxuICogfSk7XG4gKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyTWFwOiA8QSwgQj4oXG4gIGY6IChhOiBBKSA9PiBPcHRpb248Qj5cbikgPT4gKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+ID0gKGYpID0+IGZpbHRlck1hcFdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBQYXJ0aXRpb24gYSBgUmVhZG9ubHlSZWNvcmRgIGludG8gdHdvIHBhcnRzIGFjY29yZGluZyB0byBhIGBQcmVkaWNhdGVgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwYXJ0aXRpb24gfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIlxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGFydGl0aW9uKChzOiBzdHJpbmcpID0+IHMubGVuZ3RoIDwgNCkoeyBhOiBcImZvb1wiLCBiOiBcImJhclwiLCBjOiBcInZlcnlsb25nXCIgfSksIHtcbiAqICAgbGVmdDp7XG4gKiAgICAgYzogXCJ2ZXJ5bG9uZ1wiXG4gKiAgIH0sXG4gKiAgIHJpZ2h0OiB7XG4gKiAgICAgYTogXCJmb29cIixcbiAqICAgICBiOiBcImJhclwiLFxuICogICB9LFxuICogfSk7XG4gKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcGFydGl0aW9uOiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChcbiAgICBmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPlxuICApID0+IFNlcGFyYXRlZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+PlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KFxuICAgIGZiOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+XG4gICkgPT4gU2VwYXJhdGVkPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4sIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQj4+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChcbiAgICBmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPlxuICApID0+IFNlcGFyYXRlZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PlxufSA9IDxBPihcbiAgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT5cbik6ICgoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IFNlcGFyYXRlZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PikgPT5cbiAgcGFydGl0aW9uV2l0aEluZGV4KChfLCBhKSA9PiBwcmVkaWNhdGUoYSkpXG5cbi8qKlxuICogTWFwcyBhIGBSZWFkb25seVJlY29yZGAgd2l0aCBhIGZ1bmN0aW9uIHJldHVybmluZyBhbiBgRWl0aGVyYCBhbmRcbiAqIHBhcnRpdGlvbnMgdGhlIHJlc3VsdGluZyBgUmVhZG9ubHlSZWNvcmRgIGludG8gYExlZnRgcyBhbmQgYFJpZ2h0YHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBhcnRpdGlvbk1hcCB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKiBpbXBvcnQgeyBlaXRoZXIgfSBmcm9tIFwiZnAtdHNcIlxuICpcbiAqIGNvbnN0IGYgPSAoczogc3RyaW5nKSA9PiAocy5sZW5ndGggPCA0ID8gZWl0aGVyLnJpZ2h0KGAke3N9IGlzIHNob3J0YCkgOiBlaXRoZXIubGVmdChgJHtzfSBpcyBub3Qgc2hvcnRgKSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBhcnRpdGlvbk1hcChmKSh7IGE6IFwiZm9vXCIsIGI6IFwiYmFyXCIsIGM6IFwidmVyeWxvbmdcIiB9KSwge1xuICogICBsZWZ0OiB7XG4gKiAgICAgYzogXCJ2ZXJ5bG9uZyBpcyBub3Qgc2hvcnRcIixcbiAqICAgfSxcbiAqICAgcmlnaHQ6IHtcbiAqICAgICBhOiBcImZvbyBpcyBzaG9ydFwiLFxuICogICAgIGI6IFwiYmFyIGlzIHNob3J0XCIsXG4gKiAgIH0sXG4gKiB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb25NYXA6IDxBLCBCLCBDPihcbiAgZjogKGE6IEEpID0+IEVpdGhlcjxCLCBDPlxuKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IFNlcGFyYXRlZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+LCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEM+PiA9IChmKSA9PlxuICBwYXJ0aXRpb25NYXBXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogUmVkdWNlcyBhIGBSZWFkb25seVJlY29yZGAgcGFzc2luZyBlYWNoIHZhbHVlIHRvIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24uXG4gKiBFbnRyaWVzIGFyZSBwcm9jZXNzZWQgaW4gb3JkZXIsIHNvcnRlZCBieSBrZXkgYWNjb3JkaW5nIHRvXG4gKiB0aGUgZ2l2ZW4gYE9yZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlZHVjZSB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiO1xuICogaW1wb3J0IHsgT3JkIH0gZnJvbSBcImZwLXRzL3N0cmluZ1wiO1xuICpcbiAqIGNvbnN0IHggPSB7IGM6IDMsIGE6IFwiZm9vXCIsIGI6IGZhbHNlIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJlZHVjZShPcmQpKFtdIGFzIHN0cmluZ1tdLCAoYiwgYSkgPT4gWy4uLmIsIGAtJHthfS1gXSkoeCksIFtcbiAqICAgXCItZm9vLVwiLFxuICogICBcIi1mYWxzZS1cIixcbiAqICAgXCItMy1cIixcbiAqIF0pO1xuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoTzogT3JkPHN0cmluZz4pOiA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQlxuLyoqXG4gKiBVc2UgdGhlIG92ZXJsb2FkIGNvbnN0cmFpbmVkIGJ5IGBPcmRgIGluc3RlYWQuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZTxBLCBCPihiOiBCLCBmOiAoYjogQiwgYTogQSkgPT4gQik6IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQlxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZTxBLCBCPihcbiAgLi4uYXJnczogW09yZDxzdHJpbmc+XSB8IFtCLCAoYjogQiwgYTogQSkgPT4gQl1cbik6ICgoYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikgfCAoKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBCKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IHJlZHVjZVdpdGhJbmRleE8gPSByZWR1Y2VXaXRoSW5kZXgoYXJnc1swXSlcbiAgICByZXR1cm4gKGI6IEIsIGY6IChiOiBCLCBhOiBBKSA9PiBCKSA9PiByZWR1Y2VXaXRoSW5kZXhPKGIsIChfLCBiLCBhKSA9PiBmKGIsIGEpKVxuICB9XG4gIHJldHVybiByZWR1Y2UoUy5PcmQpKC4uLmFyZ3MpXG59XG5cbi8qKlxuICogTWFwIGFuZCBmb2xkIGEgYFJlYWRvbmx5UmVjb3JkYC5cbiAqIE1hcCB0aGUgYFJlYWRvbmx5UmVjb3JkYCBwYXNzaW5nIGVhY2ggdmFsdWUgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqIFRoZW4gZm9sZCB0aGUgcmVzdWx0cyB1c2luZyB0aGUgcHJvdmlkZWQgYE1vbm9pZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZvbGRNYXAgfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIjtcbiAqIGltcG9ydCB7IE9yZCB9IGZyb20gXCJmcC10cy9zdHJpbmdcIjtcbiAqIGltcG9ydCB7IE1vbm9pZCB9IGZyb20gXCJmcC10cy9Nb25vaWRcIjtcbiAqXG4gKiBjb25zdCBtOiBNb25vaWQ8c3RyaW5nPiA9IHsgZW1wdHk6IFwiXCIsIGNvbmNhdDogKHg6IHN0cmluZywgeTogc3RyaW5nKSA9PiAoeCA/IGAke3h9IC0+ICR7eX1gIDogYCR7eX1gKSB9O1xuICogY29uc3QgZiA9IChhOiBudW1iZXIpID0+IGAtJHthfS1gO1xuICogY29uc3QgeCA9IHsgYzogMywgYTogMSwgYjogMiB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmb2xkTWFwKE9yZCkobSkoZikoeCksIFwiLTEtIC0+IC0yLSAtPiAtMy1cIik7XG4gKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvbGRNYXAoXG4gIE86IE9yZDxzdHJpbmc+XG4pOiA8TT4oTTogTW9ub2lkPE0+KSA9PiA8QT4oZjogKGE6IEEpID0+IE0pID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gTVxuLyoqXG4gKiBVc2UgdGhlIG92ZXJsb2FkIGNvbnN0cmFpbmVkIGJ5IGBPcmRgIGluc3RlYWQuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvbGRNYXA8TT4oTTogTW9ub2lkPE0+KTogPEE+KGY6IChhOiBBKSA9PiBNKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IE1cbmV4cG9ydCBmdW5jdGlvbiBmb2xkTWFwPE0+KFxuICBPOiBPcmQ8c3RyaW5nPiB8IE1vbm9pZDxNPlxuKTpcbiAgfCAoKE06IE1vbm9pZDxNPikgPT4gPEE+KGY6IChhOiBBKSA9PiBNKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IE0pXG4gIHwgKDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBNKSB7XG4gIGlmICgnY29tcGFyZScgaW4gTykge1xuICAgIGNvbnN0IGZvbGRNYXBXaXRoSW5kZXhPID0gZm9sZE1hcFdpdGhJbmRleChPKVxuICAgIHJldHVybiAoTTogTW9ub2lkPE0+KSA9PiB7XG4gICAgICBjb25zdCBmb2xkTWFwV2l0aEluZGV4TSA9IGZvbGRNYXBXaXRoSW5kZXhPKE0pXG4gICAgICByZXR1cm4gPEE+KGY6IChhOiBBKSA9PiBNKTogKChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gTSkgPT4gZm9sZE1hcFdpdGhJbmRleE0oKF8sIGEpID0+IGYoYSkpXG4gICAgfVxuICB9XG4gIHJldHVybiBmb2xkTWFwKFMuT3JkKShPKVxufVxuXG4vKipcbiAqIFNhbWUgYXMgYHJlZHVjZWAgYnV0IGVudHJpZXMgYXJlIHByb2Nlc3NlZCBfZnJvbSB0aGUgcmlnaHRfLFxuICogaS5lLiBpbiByZXZlcnNlIG9yZGVyLCBmcm9tIHRoZSBsYXN0IHRvIHRoZSBmaXJzdCBlbnRyeSwgYWNjb3JkaW5nIHRvXG4gKiB0aGUgZ2l2ZW4gYE9yZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlZHVjZVJpZ2h0IH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKiBpbXBvcnQgeyBPcmQgfSBmcm9tIFwiZnAtdHMvc3RyaW5nXCI7XG4gKlxuICogY29uc3QgeCA9IHsgYzogMywgYTogXCJmb29cIiwgYjogZmFsc2UgfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVkdWNlUmlnaHQoT3JkKShbXSBhcyBzdHJpbmdbXSwgKGEsIGIpID0+IFsuLi5iLCBgLSR7YX0tYF0pKHgpLCBbXG4gKiAgIFwiLTMtXCIsXG4gKiAgIFwiLWZhbHNlLVwiLFxuICogICBcIi1mb28tXCIsXG4gKiBdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmlnaHQoTzogT3JkPHN0cmluZz4pOiA8QSwgQj4oYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpID0+IChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQlxuLyoqXG4gKiBVc2UgdGhlIG92ZXJsb2FkIGNvbnN0cmFpbmVkIGJ5IGBPcmRgIGluc3RlYWQuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0PEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKTogKGZhOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+KSA9PiBCXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmlnaHQ8QSwgQj4oXG4gIC4uLmFyZ3M6IFtPcmQ8c3RyaW5nPl0gfCBbQiwgKGE6IEEsIGI6IEIpID0+IEJdXG4pOiAoKGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IEIpIHwgKChmYTogUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCByZWR1Y2VSaWdodFdpdGhJbmRleE8gPSByZWR1Y2VSaWdodFdpdGhJbmRleChhcmdzWzBdKVxuICAgIHJldHVybiAoYjogQiwgZjogKGE6IEEsIGI6IEIpID0+IEIpID0+IHJlZHVjZVJpZ2h0V2l0aEluZGV4TyhiLCAoXywgYiwgYSkgPT4gZihiLCBhKSlcbiAgfVxuICByZXR1cm4gcmVkdWNlUmlnaHQoUy5PcmQpKC4uLmFyZ3MpXG59XG5cbi8qKlxuICogQ29tcGFjdCBhIGBSZWFkb25seVJlY29yZGAgb2YgYE9wdGlvbmBzIGRpc2NhcmRpbmcgdGhlIGBOb25lYCB2YWx1ZXMgYW5kXG4gKiBrZWVwaW5nIHRoZSBgU29tZWAgdmFsdWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb21wYWN0IH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlSZWNvcmQnXG4gKiBpbXBvcnQgeyBvcHRpb24gfSBmcm9tICdmcC10cydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbXBhY3QoeyBhOiBvcHRpb24uc29tZShcImZvb1wiKSwgYjogb3B0aW9uLm5vbmUsIGM6IG9wdGlvbi5zb21lKFwiYmFyXCIpIH0pLCB7XG4gKiAgIGE6IFwiZm9vXCIsXG4gKiAgIGM6IFwiYmFyXCIsXG4gKiB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgQ29tcGFjdGFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdCA9IDxBPihyOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIE9wdGlvbjxBPj4pOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+ID0+IHtcbiAgY29uc3Qgb3V0OiBSZWNvcmQ8c3RyaW5nLCBBPiA9IHt9XG4gIGZvciAoY29uc3QgayBpbiByKSB7XG4gICAgaWYgKF8uaGFzLmNhbGwociwgaykpIHtcbiAgICAgIGNvbnN0IG9hID0gcltrXVxuICAgICAgaWYgKF8uaXNTb21lKG9hKSkge1xuICAgICAgICBvdXRba10gPSBvYS52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogU2VwYXJhdGUgYSBgUmVhZG9ubHlSZWNvcmRgIG9mIGBFaXRoZXJgcyBpbnRvIGBMZWZ0YHMgYW5kIGBSaWdodGBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzZXBhcmF0ZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICogaW1wb3J0IHsgZWl0aGVyIH0gZnJvbSAnZnAtdHMnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgc2VwYXJhdGUoeyBhOiBlaXRoZXIucmlnaHQoXCJmb29cIiksIGI6IGVpdGhlci5sZWZ0KFwiYmFyXCIpLCBjOiBlaXRoZXIucmlnaHQoXCJiYXpcIikgfSksXG4gKiAgIHtcbiAqICAgICByaWdodDoge1xuICogICAgICAgYTogXCJmb29cIixcbiAqICAgICAgIGM6IFwiYmF6XCIsXG4gKiAgICAgfSxcbiAqICAgICBsZWZ0OiB7XG4gKiAgICAgICBiOiBcImJhclwiLFxuICogICAgIH0sXG4gKiAgIH1cbiAqICk7XG4gKlxuICogQGNhdGVnb3J5IENvbXBhY3RhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcGFyYXRlID0gPEEsIEI+KFxuICByOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEVpdGhlcjxBLCBCPj5cbik6IFNlcGFyYXRlZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+LCBSZWFkb25seVJlY29yZDxzdHJpbmcsIEI+PiA9PiB7XG4gIGNvbnN0IGxlZnQ6IFJlY29yZDxzdHJpbmcsIEE+ID0ge31cbiAgY29uc3QgcmlnaHQ6IFJlY29yZDxzdHJpbmcsIEI+ID0ge31cbiAgZm9yIChjb25zdCBrIGluIHIpIHtcbiAgICBpZiAoXy5oYXMuY2FsbChyLCBrKSkge1xuICAgICAgY29uc3QgZSA9IHJba11cbiAgICAgIGlmIChfLmlzTGVmdChlKSkge1xuICAgICAgICBsZWZ0W2tdID0gZS5sZWZ0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaWdodFtrXSA9IGUucmlnaHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnUmVhZG9ubHlSZWNvcmQnXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQ8QT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIGBTaG93YCBmb3IgYSBgUmVhZG9ubHlSZWNvcmRgLCBnaXZlbiBhIGBTaG93YCBmb3IgdGhlIGJhc2UgdHlwZVxuICogKGEgYFNob3dgIHByb2R1Y2VzIGEgaHVtYW4tcmVhZGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaW5zdGFuY2UpLlxuICogYFJlYWRvbmx5UmVjb3JkYCBlbnRyaWVzIGFyZSBzb3J0ZWQgYnkga2V5IHdpdGggdGhlIHByb3ZpZGVkIGBPcmRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRTaG93LCBSZWFkb25seVJlY29yZCB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKiBpbXBvcnQgeyBTaG93IH0gZnJvbSBcImZwLXRzL1Nob3dcIlxuICogaW1wb3J0IHsgT3JkIH0gZnJvbSBcImZwLXRzL3N0cmluZ1wiXG4gKlxuICogY29uc3Qgc051bWJlcjogU2hvdzxudW1iZXI+ID0geyBzaG93OiAobjogbnVtYmVyKSA9PiBgJHtufWAgfTtcbiAqIGNvbnN0IHNSZWNvcmQ6IFNob3c8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PiA9IGdldFNob3coT3JkKShzTnVtYmVyKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc1JlY29yZC5zaG93KHsgYjogMiwgYTogMSB9KSwgJ3sgXCJhXCI6IDEsIFwiYlwiOiAyIH0nKTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3coTzogT3JkPHN0cmluZz4pOiA8QT4oUzogU2hvdzxBPikgPT4gU2hvdzxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PlxuLyoqXG4gKiBVc2UgdGhlIG92ZXJsb2FkIGNvbnN0cmFpbmVkIGJ5IGBPcmRgIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3c8QT4oUzogU2hvdzxBPik6IFNob3c8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG93PEE+KFxuICBPOiBPcmQ8c3RyaW5nPiB8IFNob3c8QT5cbik6ICgoUzogU2hvdzxBPikgPT4gU2hvdzxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PikgfCBTaG93PFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4+IHtcbiAgaWYgKCdjb21wYXJlJyBpbiBPKSB7XG4gICAgcmV0dXJuIChTOiBTaG93PEE+KSA9PiAoe1xuICAgICAgc2hvdzogKHI6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBjb2xsZWN0KE8pKChrLCBhOiBBKSA9PiBgJHtKU09OLnN0cmluZ2lmeShrKX06ICR7Uy5zaG93KGEpfWApKHIpLmpvaW4oJywgJylcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzID09PSAnJyA/ICd7fScgOiBgeyAke2VsZW1lbnRzfSB9YFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldFNob3coUy5PcmQpKE8pXG59XG5cbi8qKlxuICogR2l2ZW4gYW4gYEVxYCBmb3IgdGhlIGJhc2UgdHlwZSwgaXQgcHJvZHVjZXMgYW4gYEVxYFxuICogZm9yIGEgYFJlYWRvbmx5UmVjb3JkYCBvZiB0aGF0IGJhc2UgdHlwZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0RXEsIFJlYWRvbmx5UmVjb3JkIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCI7XG4gKiBpbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwiZnAtdHNcIjtcbiAqIGltcG9ydCB7IEVxIH0gZnJvbSBcImZwLXRzL0VxXCI7XG4gKlxuICogY29uc3QgZXE6IEVxPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSBnZXRFcShzdHJpbmcuRXEpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChlcS5lcXVhbHMoeyBhOiBcImZvb1wiIH0sIHsgYjogXCJiYXJcIiB9KSwgZmFsc2UpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChlcS5lcXVhbHMoeyBhOiBcImZvb1wiIH0sIHsgYTogXCJmb29cIiB9KSwgdHJ1ZSk7XG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcTxLIGV4dGVuZHMgc3RyaW5nLCBBPihFOiBFcTxBPik6IEVxPFJlYWRvbmx5UmVjb3JkPEssIEE+PlxuZXhwb3J0IGZ1bmN0aW9uIGdldEVxPEE+KEU6IEVxPEE+KTogRXE8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPj4ge1xuICBjb25zdCBpc1N1YnJlY29yZEUgPSBpc1N1YnJlY29yZChFKVxuICByZXR1cm4gZnJvbUVxdWFscygoeCwgeSkgPT4gaXNTdWJyZWNvcmRFKHgpKHkpICYmIGlzU3VicmVjb3JkRSh5KSh4KSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgYE1vbm9pZGAgaW5zdGFuY2UgZm9yIGBSZWFkb25seVJlY29yZGBzLCBnaXZlbiBhIGBTZW1pZ3JvdXBgXG4gKiBpbnN0YW5jZSBmb3IgdGhlIGJhc2UgdHlwZS5cbiAqIFRoZSBgTW9ub2lkYCBtYWtlcyB0aGUgdW5pb24gb2YgdHdvIGBSZWFkb25seVJlY29yZGBzIGNvbWluaW5nIHRoZVxuICogb3ZlcmxhcHBpbmcgZW50cmllcyB3aXRoIHRoZSBwcm92aWRlZCBgU2VtaWdyb3VwYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgU2VtaWdyb3VwU3VtIH0gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0IHsgZ2V0TW9ub2lkIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlSZWNvcmQnXG4gKlxuICogY29uc3QgTSA9IGdldE1vbm9pZChTZW1pZ3JvdXBTdW0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdCh7IGZvbzogMTIzLCBiYXI6IDIzNCB9LCB7IGZvbzogNDU2LCBiYXo6IDU2NyB9KSwgeyBmb286IDU3OSAsIGJhcjogMjM0LCBiYXo6IDU2NyB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbm9pZDxLIGV4dGVuZHMgc3RyaW5nLCBBPihTOiBTZW1pZ3JvdXA8QT4pOiBNb25vaWQ8UmVhZG9ubHlSZWNvcmQ8SywgQT4+XG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9ub2lkPEE+KFM6IFNlbWlncm91cDxBPik6IE1vbm9pZDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PiB7XG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgaWYgKGlzRW1wdHkoZmlyc3QpKSB7XG4gICAgICAgIHJldHVybiBzZWNvbmRcbiAgICAgIH1cbiAgICAgIGlmIChpc0VtcHR5KHNlY29uZCkpIHtcbiAgICAgICAgcmV0dXJuIGZpcnN0XG4gICAgICB9XG4gICAgICBjb25zdCByOiBSZWNvcmQ8c3RyaW5nLCBBPiA9IE9iamVjdC5hc3NpZ24oe30sIGZpcnN0KVxuICAgICAgZm9yIChjb25zdCBrIGluIHNlY29uZCkge1xuICAgICAgICBpZiAoXy5oYXMuY2FsbChzZWNvbmQsIGspKSB7XG4gICAgICAgICAgcltrXSA9IF8uaGFzLmNhbGwoZmlyc3QsIGspID8gUy5jb25jYXQoZmlyc3Rba10sIHNlY29uZFtrXSkgOiBzZWNvbmRba11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJcbiAgICB9LFxuICAgIGVtcHR5XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICogVGFrZXMgYSB2YWx1ZSBhbmQgYSBgUmVhZG9ubHlSZWNvcmRgIG9mIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyBhXG4gKiBgUmVhZG9ubHlSZWNvcmRgIGJ5IGFwcGx5aW5nIGVhY2ggZnVuY3Rpb24gdG8gdGhlIGlucHV0IHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmbGFwIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCJcbiAqXG4gKiBjb25zdCBmYWIgPSB7IHg6IChuOiBudW1iZXIpID0+IGAke259IHRpbWVzIDJgLCB5OiAobjogbnVtYmVyKSA9PiBgJHtuICogMn1gIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZsYXAoMykoZmFiKSwge1xuICogICB4OiBcIjMgdGltZXMgMlwiLFxuICogICB5OiBcIjZcIixcbiAqIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3JXaXRoSW5kZXg6IEZ1bmN0b3JXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleFxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgYEZvbGRhYmxlYCBpbnN0YW5jZSBmb3IgYSBgUmVhZG9ubHlSZWNvcmRgLCB1c2luZyB0aGVcbiAqIHByb3ZpZGVkIGBPcmRgIHRvIHNvcnQgdGhlIGBSZWFkb25seVJlY29yZGAncyBlbnRyaWVzIGJ5IGtleS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGb2xkYWJsZSA9IChPOiBPcmQ8c3RyaW5nPik6IEZvbGRhYmxlMTxVUkk+ID0+ICh7XG4gIFVSSSxcbiAgcmVkdWNlOiBfcmVkdWNlKE8pLFxuICBmb2xkTWFwOiBfZm9sZE1hcChPKSxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodChPKVxufSlcblxuLyoqXG4gKiBQcm9kdWNlcyBhIGBGb2xkYWJsZVdpdGhJbmRleDFgIGluc3RhbmNlIGZvciBhIGBSZWFkb25seVJlY29yZGAsIHVzaW5nIHRoZVxuICogcHJvdmlkZWQgYE9yZGAgdG8gc29ydCB0aGUgYFJlYWRvbmx5UmVjb3JkYCdzIGVudHJpZXMgYnkga2V5LlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZvbGRhYmxlV2l0aEluZGV4ID0gKE86IE9yZDxzdHJpbmc+KTogRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiA9PiAoe1xuICBVUkksXG4gIHJlZHVjZTogX3JlZHVjZShPKSxcbiAgZm9sZE1hcDogX2ZvbGRNYXAoTyksXG4gIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQoTyksXG4gIHJlZHVjZVdpdGhJbmRleDogX3JlZHVjZVdpdGhJbmRleChPKSxcbiAgZm9sZE1hcFdpdGhJbmRleDogX2ZvbGRNYXBXaXRoSW5kZXgoTyksXG4gIHJlZHVjZVJpZ2h0V2l0aEluZGV4OiBfcmVkdWNlUmlnaHRXaXRoSW5kZXgoTylcbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb21wYWN0YWJsZTogQ29tcGFjdGFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGVcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZpbHRlcmFibGU6IEZpbHRlcmFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZSxcbiAgZmlsdGVyOiBfZmlsdGVyLFxuICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gIHBhcnRpdGlvbjogX3BhcnRpdGlvbixcbiAgcGFydGl0aW9uTWFwOiBfcGFydGl0aW9uTWFwXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGaWx0ZXJhYmxlV2l0aEluZGV4OiBGaWx0ZXJhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXgsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXAsXG4gIGZpbHRlck1hcFdpdGhJbmRleDogX2ZpbHRlck1hcFdpdGhJbmRleCxcbiAgZmlsdGVyV2l0aEluZGV4OiBfZmlsdGVyV2l0aEluZGV4LFxuICBwYXJ0aXRpb25NYXBXaXRoSW5kZXg6IF9wYXJ0aXRpb25NYXBXaXRoSW5kZXgsXG4gIHBhcnRpdGlvbldpdGhJbmRleDogX3BhcnRpdGlvbldpdGhJbmRleFxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgYFRyYXZlcnNhYmxlYCBpbnN0YW5jZSBmb3IgYSBgUmVhZG9ubHlSZWNvcmRgLCB1c2luZyB0aGVcbiAqIHByb3ZpZGVkIGBPcmRgIHRvIHNvcnQgdGhlIGBSZWFkb25seVJlY29yZGAncyBlbnRyaWVzIGJ5IGtleS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUcmF2ZXJzYWJsZSA9IChPOiBPcmQ8c3RyaW5nPik6IFRyYXZlcnNhYmxlMTxVUkk+ID0+ICh7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6IF9yZWR1Y2UoTyksXG4gIGZvbGRNYXA6IF9mb2xkTWFwKE8pLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0KE8pLFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlKE8pLFxuICBzZXF1ZW5jZTogX3NlcXVlbmNlKE8pXG59KVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgYFRyYXZlcnNhYmxlV2l0aEluZGV4YCBpbnN0YW5jZSBmb3IgYSBgUmVhZG9ubHlSZWNvcmRgLCB1c2luZyB0aGVcbiAqIHByb3ZpZGVkIGBPcmRgIHRvIHNvcnQgdGhlIGBSZWFkb25seVJlY29yZGAncyBlbnRyaWVzIGJ5IGtleS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUcmF2ZXJzYWJsZVdpdGhJbmRleCA9IChPOiBPcmQ8c3RyaW5nPik6IFRyYXZlcnNhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz4gPT4gKHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgcmVkdWNlOiBfcmVkdWNlKE8pLFxuICBmb2xkTWFwOiBfZm9sZE1hcChPKSxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodChPKSxcbiAgcmVkdWNlV2l0aEluZGV4OiBfcmVkdWNlV2l0aEluZGV4KE8pLFxuICBmb2xkTWFwV2l0aEluZGV4OiBfZm9sZE1hcFdpdGhJbmRleChPKSxcbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6IF9yZWR1Y2VSaWdodFdpdGhJbmRleChPKSxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZShPKSxcbiAgc2VxdWVuY2U6IF9zZXF1ZW5jZShPKSxcbiAgdHJhdmVyc2VXaXRoSW5kZXg6IF90cmF2ZXJzZVdpdGhJbmRleChPKVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXaXRoZXJhYmxlID0gKE86IE9yZDxzdHJpbmc+KTogV2l0aGVyYWJsZTE8VVJJPiA9PiB7XG4gIGNvbnN0IFQgPSBnZXRUcmF2ZXJzYWJsZShPKVxuICByZXR1cm4ge1xuICAgIFVSSSxcbiAgICBtYXA6IF9tYXAsXG4gICAgcmVkdWNlOiBfcmVkdWNlKE8pLFxuICAgIGZvbGRNYXA6IF9mb2xkTWFwKE8pLFxuICAgIHJlZHVjZVJpZ2h0OiBfcmVkdWNlUmlnaHQoTyksXG4gICAgdHJhdmVyc2U6IFQudHJhdmVyc2UsXG4gICAgc2VxdWVuY2U6IFQuc2VxdWVuY2UsXG4gICAgY29tcGFjdCxcbiAgICBzZXBhcmF0ZSxcbiAgICBmaWx0ZXI6IF9maWx0ZXIsXG4gICAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICAgIHBhcnRpdGlvbjogX3BhcnRpdGlvbixcbiAgICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXAsXG4gICAgd2l0aGVyOiB3aXRoZXJEZWZhdWx0KFQsIENvbXBhY3RhYmxlKSxcbiAgICB3aWx0OiB3aWx0RGVmYXVsdChULCBDb21wYWN0YWJsZSlcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgYFNlbWlncm91cGAgaW4gdGhlIGJhc2UgdHlwZSwgaXQgcHJvZHVjZXMgYSBgU2VtaWdyb3VwYFxuICogaW4gdGhlIGBSZWFkb25seVJlY29yZGAgb2YgdGhlIGJhc2UgdHlwZS5cbiAqIFRoZSByZXN1bHRpbmcgYFNlbWlncm91cGAgY29uY2F0ZW5hdGVzIHR3byBgUmVhZG9ubHlSZWNvcmRgcyBieVxuICogYHVuaW9uYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0VW5pb25TZW1pZ3JvdXAsIFJlYWRvbmx5UmVjb3JkIH0gZnJvbSBcImZwLXRzL1JlYWRvbmx5UmVjb3JkXCJcbiAqIGltcG9ydCB7IFNlbWlncm91cCB9IGZyb20gXCJmcC10cy9TZW1pZ3JvdXBcIlxuICpcbiAqIGNvbnN0IHNOdW1iZXI6IFNlbWlncm91cDxudW1iZXI+ID0geyBjb25jYXQ6ICh4LCB5KSA9PiB4IC0geSB9O1xuICogY29uc3Qgc1JlYWRvbmx5UmVjb3JkOiBTZW1pZ3JvdXA8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PiA9IGdldFVuaW9uU2VtaWdyb3VwKHNOdW1iZXIpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzUmVhZG9ubHlSZWNvcmQuY29uY2F0KHsgYTogMSwgYjogMiB9LCB7IGI6IDMsIGM6IDQgfSksIHsgYTogMSwgYjogLTEsIGM6IDQgfSk7XG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25TZW1pZ3JvdXAgPSA8QT4oUzogU2VtaWdyb3VwPEE+KTogU2VtaWdyb3VwPFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4+ID0+IHtcbiAgY29uc3QgdW5pb25TID0gdW5pb24oUylcbiAgcmV0dXJuIHtcbiAgICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiB1bmlvblMoc2Vjb25kKShmaXJzdClcbiAgfVxufVxuXG4vKipcbiAqIFNhbWUgYXMgYGdldE1vbm9pZGAuXG4gKiBSZXR1cm5zIGEgYE1vbm9pZGAgaW5zdGFuY2UgZm9yIGBSZWFkb25seVJlY29yZGBzIGdpdmVuIGEgYFNlbWlncm91cGBcbiAqIGluc3RhbmNlIGZvciB0aGUgYmFzZSB0eXBlLlxuICogVGhlIGBNb25vaWRgIG1ha2VzIHRoZSB1bmlvbiBvZiB0d28gYFJlYWRvbmx5UmVjb3JkYHMgY29tYmluaW5nIHRoZVxuICogZW50cmllcyB0aGF0IGhhdmUgdGhlIHNhbWUga2V5IHdpdGggdGhlIHByb3ZpZGVkIGBTZW1pZ3JvdXBgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBTZW1pZ3JvdXBTdW0gfSBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBnZXRVbmlvbk1vbm9pZCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5UmVjb3JkJ1xuICpcbiAqIGNvbnN0IE0gPSBnZXRVbmlvbk1vbm9pZChTZW1pZ3JvdXBTdW0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdCh7IGZvbzogMTIzLCBiYXI6IDIzNCB9LCB7IGZvbzogNDU2LCBiYXo6IDU2NyB9KSwgeyBmb286IDU3OSAsIGJhcjogMjM0LCBiYXo6IDU2NyB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVbmlvbk1vbm9pZCA9IDxBPihTOiBTZW1pZ3JvdXA8QT4pOiBNb25vaWQ8UmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gKHtcbiAgY29uY2F0OiBnZXRVbmlvblNlbWlncm91cChTKS5jb25jYXQsXG4gIGVtcHR5XG59KVxuXG4vKipcbiAqIEdpdmVuIGEgYFNlbWlncm91cGAgaW4gdGhlIGJhc2UgdHlwZSwgaXQgcHJvZHVjZXMgYSBgU2VtaWdyb3VwYFxuICogaW4gdGhlIGBSZWFkb25seVJlY29yZGAgb2YgdGhlIGJhc2UgdHlwZS5cbiAqIFRoZSByZXN1bHRpbmcgYFNlbWlncm91cGAgY29uY2F0ZW5hdGVzIHR3byBgUmVhZG9ubHlSZWNvcmRgcyBieVxuICogYGludGVyc2VjdGlvbmAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldEludGVyc2VjdGlvblNlbWlncm91cCwgUmVhZG9ubHlSZWNvcmQgfSBmcm9tIFwiZnAtdHMvUmVhZG9ubHlSZWNvcmRcIlxuICogaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSBcImZwLXRzL1NlbWlncm91cFwiXG4gKlxuICogY29uc3Qgc051bWJlcjogU2VtaWdyb3VwPG51bWJlcj4gPSB7IGNvbmNhdDogKHgsIHkpID0+IHggLSB5IH07XG4gKiBjb25zdCBzUmVhZG9ubHlSZWNvcmQ6IFNlbWlncm91cDxSZWFkb25seVJlY29yZDxzdHJpbmcsIG51bWJlcj4+ID0gZ2V0SW50ZXJzZWN0aW9uU2VtaWdyb3VwKHNOdW1iZXIpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzUmVhZG9ubHlSZWNvcmQuY29uY2F0KHsgYTogMSwgYjogMiB9LCB7IGI6IDMsIGM6IDQgfSksIHsgYjogLTEgfSk7XG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0SW50ZXJzZWN0aW9uU2VtaWdyb3VwID0gPEE+KFM6IFNlbWlncm91cDxBPik6IFNlbWlncm91cDxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PiA9PiB7XG4gIGNvbnN0IGludGVyc2VjdGlvblMgPSBpbnRlcnNlY3Rpb24oUylcbiAgcmV0dXJuIHtcbiAgICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBpbnRlcnNlY3Rpb25TKHNlY29uZCkoZmlyc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIGBNYWdtYWAgd2l0aCBhIGBjb25jYXRgIGZ1bmN0aW9uIHRoYXQgY29tYmluZXNcbiAqIHR3byBgUmVhZG9ubHlSZWNvcmRgcyBieSBtYWtpbmcgdGhlIGBkaWZmZXJlbmNlYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0RGlmZmVyZW5jZU1hZ21hLCBkaWZmZXJlbmNlLCBSZWFkb25seVJlY29yZCB9IGZyb20gXCJmcC10cy9SZWFkb25seVJlY29yZFwiXG4gKiBpbXBvcnQgeyBNYWdtYSB9IGZyb20gXCJmcC10cy9NYWdtYVwiXG4gKlxuICogY29uc3QgcjEgPSB7IGE6IDMsIGM6IDMgfTtcbiAqIGNvbnN0IHIyID0geyBhOiAxLCBiOiAyIH07XG4gKiBjb25zdCBtOiBNYWdtYTxSZWFkb25seVJlY29yZDxzdHJpbmcsIG51bWJlcj4+ID0gZ2V0RGlmZmVyZW5jZU1hZ21hPG51bWJlcj4oKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobS5jb25jYXQocjEsIHIyKSwgZGlmZmVyZW5jZShyMikocjEpKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobS5jb25jYXQocjEsIHIyKSwgeyBjOiAzLCBiOiAyIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERpZmZlcmVuY2VNYWdtYSA9IDxBPigpOiBNYWdtYTxSZWFkb25seVJlY29yZDxzdHJpbmcsIEE+PiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBkaWZmZXJlbmNlKHNlY29uZCkoZmlyc3QpXG59KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRzbGludDpkaXNhYmxlOiBkZXByZWNhdGlvblxuXG4vKipcbiAqIFVzZSBgZ2V0Rm9sZGFibGVgIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgRm9sZGFibGU6IEZvbGRhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIHJlZHVjZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZShTLk9yZCksXG4gIGZvbGRNYXA6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9mb2xkTWFwKFMuT3JkKSxcbiAgcmVkdWNlUmlnaHQ6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VSaWdodChTLk9yZClcbn1cblxuLyoqXG4gKiBVc2UgYGdldEZvbGRhYmxlV2l0aEluZGV4YCBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IEZvbGRhYmxlV2l0aEluZGV4OiBGb2xkYWJsZVdpdGhJbmRleDE8VVJJLCBzdHJpbmc+ID0ge1xuICBVUkksXG4gIHJlZHVjZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZShTLk9yZCksXG4gIGZvbGRNYXA6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9mb2xkTWFwKFMuT3JkKSxcbiAgcmVkdWNlUmlnaHQ6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VSaWdodChTLk9yZCksXG4gIHJlZHVjZVdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZVdpdGhJbmRleChTLk9yZCksXG4gIGZvbGRNYXBXaXRoSW5kZXg6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9mb2xkTWFwV2l0aEluZGV4KFMuT3JkKSxcbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VSaWdodFdpdGhJbmRleChTLk9yZClcbn1cblxuLyoqXG4gKiBVc2UgYGdldFRyYXZlcnNhYmxlYCBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYXZlcnNhYmxlOiBUcmF2ZXJzYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIHJlZHVjZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZShTLk9yZCksXG4gIGZvbGRNYXA6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9mb2xkTWFwKFMuT3JkKSxcbiAgcmVkdWNlUmlnaHQ6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VSaWdodChTLk9yZCksXG4gIHRyYXZlcnNlOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfdHJhdmVyc2UoUy5PcmQpLFxuICBzZXF1ZW5jZVxufVxuXG4vKipcbiAqIFVzZSBgZ2V0VHJhdmVyc2FibGVXaXRoSW5kZXhgIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgVHJhdmVyc2FibGVXaXRoSW5kZXg6IFRyYXZlcnNhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXgsXG4gIHJlZHVjZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZShTLk9yZCksXG4gIGZvbGRNYXA6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9mb2xkTWFwKFMuT3JkKSxcbiAgcmVkdWNlUmlnaHQ6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VSaWdodChTLk9yZCksXG4gIHJlZHVjZVdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZVdpdGhJbmRleChTLk9yZCksXG4gIGZvbGRNYXBXaXRoSW5kZXg6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9mb2xkTWFwV2l0aEluZGV4KFMuT3JkKSxcbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VSaWdodFdpdGhJbmRleChTLk9yZCksXG4gIHRyYXZlcnNlOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfdHJhdmVyc2UoUy5PcmQpLFxuICBzZXF1ZW5jZSxcbiAgdHJhdmVyc2VXaXRoSW5kZXg6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF90cmF2ZXJzZVdpdGhJbmRleChTLk9yZClcbn1cblxuY29uc3QgX3dpdGhlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgd2l0aGVyRGVmYXVsdChUcmF2ZXJzYWJsZSwgQ29tcGFjdGFibGUpXG5jb25zdCBfd2lsdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgd2lsdERlZmF1bHQoVHJhdmVyc2FibGUsIENvbXBhY3RhYmxlKVxuXG4vKipcbiAqIFVzZSBgZ2V0V2l0aGVyYWJsZWAgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBXaXRoZXJhYmxlOiBXaXRoZXJhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgcmVkdWNlOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlKFMuT3JkKSxcbiAgZm9sZE1hcDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX2ZvbGRNYXAoUy5PcmQpLFxuICByZWR1Y2VSaWdodDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZVJpZ2h0KFMuT3JkKSxcbiAgdHJhdmVyc2U6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF90cmF2ZXJzZShTLk9yZCksXG4gIHNlcXVlbmNlLFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZSxcbiAgZmlsdGVyOiBfZmlsdGVyLFxuICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gIHBhcnRpdGlvbjogX3BhcnRpdGlvbixcbiAgcGFydGl0aW9uTWFwOiBfcGFydGl0aW9uTWFwLFxuICB3aXRoZXI6IF93aXRoZXIsXG4gIHdpbHQ6IF93aWx0XG59XG5cbi8qKlxuICogVXNlIFtgdXBzZXJ0QXRgXSgjdXBzZXJ0YXQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRBdDogPEE+KGs6IHN0cmluZywgYTogQSkgPT4gKHI6IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4pID0+IFJlYWRvbmx5UmVjb3JkPHN0cmluZywgQT4gPSB1cHNlcnRBdFxuXG4vKipcbiAqIFVzZSBbYGhhc2BdKCNoYXMpIGluc3RlYWQuXG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHk8SyBleHRlbmRzIHN0cmluZz4oazogc3RyaW5nLCByOiBSZWFkb25seVJlY29yZDxLLCB1bmtub3duPik6IGsgaXMgS1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3BlcnR5PEsgZXh0ZW5kcyBzdHJpbmc+KHRoaXM6IGFueSwgazogc3RyaW5nLCByPzogUmVhZG9ubHlSZWNvcmQ8SywgdW5rbm93bj4pOiBrIGlzIEsge1xuICByZXR1cm4gXy5oYXMuY2FsbChyID09PSB1bmRlZmluZWQgPyB0aGlzIDogciwgaylcbn1cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRvbmx5UmVjb3JkOiBGdW5jdG9yV2l0aEluZGV4MTxVUkksIHN0cmluZz4gJlxuICBGb2xkYWJsZVdpdGhJbmRleDE8VVJJLCBzdHJpbmc+ICZcbiAgRmlsdGVyYWJsZVdpdGhJbmRleDE8VVJJLCBzdHJpbmc+ICZcbiAgVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiAmXG4gIFdpdGhlcmFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2UoUy5PcmQpLFxuICBmb2xkTWFwOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfZm9sZE1hcChTLk9yZCksXG4gIHJlZHVjZVJpZ2h0OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlUmlnaHQoUy5PcmQpLFxuICB0cmF2ZXJzZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3RyYXZlcnNlKFMuT3JkKSxcbiAgc2VxdWVuY2UsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgcmVkdWNlV2l0aEluZGV4OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlV2l0aEluZGV4KFMuT3JkKSxcbiAgZm9sZE1hcFdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX2ZvbGRNYXBXaXRoSW5kZXgoUy5PcmQpLFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZVJpZ2h0V2l0aEluZGV4KFMuT3JkKSxcbiAgZmlsdGVyTWFwV2l0aEluZGV4OiBfZmlsdGVyTWFwV2l0aEluZGV4LFxuICBmaWx0ZXJXaXRoSW5kZXg6IF9maWx0ZXJXaXRoSW5kZXgsXG4gIHBhcnRpdGlvbk1hcFdpdGhJbmRleDogX3BhcnRpdGlvbk1hcFdpdGhJbmRleCxcbiAgcGFydGl0aW9uV2l0aEluZGV4OiBfcGFydGl0aW9uV2l0aEluZGV4LFxuICB0cmF2ZXJzZVdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3RyYXZlcnNlV2l0aEluZGV4KFMuT3JkKSxcbiAgd2l0aGVyOiBfd2l0aGVyLFxuICB3aWx0OiBfd2lsdFxufVxuIl19