"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Witherable = exports.URI = exports.TraversableWithIndex = exports.Traversable = exports.FunctorWithIndex = exports.Functor = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = void 0;
exports.collect = collect;
exports.compact = void 0;
exports.deleteAt = deleteAt;
exports.filterMapWithIndex = exports.filterMap = exports.filter = exports.every = exports.empty = exports.elem = exports.difference = void 0;
exports.filterWithIndex = filterWithIndex;
exports.flap = void 0;
exports.foldMap = foldMap;
exports.foldMapWithIndex = foldMapWithIndex;
exports.fromFoldable = fromFoldable;
exports.fromFoldableMap = fromFoldableMap;
exports.getMonoid = exports.getIntersectionSemigroup = exports.getFoldableWithIndex = exports.getFoldable = exports.getEq = exports.getDifferenceMagma = void 0;
exports.getShow = getShow;
exports.partitionMapWithIndex = exports.partitionMap = exports.partition = exports.modifyAt = exports.mapWithIndex = exports.map = exports.lookup = exports.keys = exports.isSubrecord = exports.isEmpty = exports.intersection = exports.insertAt = exports.hasOwnProperty = exports.has = exports.getWitherable = exports.getUnionSemigroup = exports.getUnionMonoid = exports.getTraversableWithIndex = exports.getTraversable = void 0;
exports.partitionWithIndex = partitionWithIndex;
exports.pop = pop;
exports.record = void 0;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reduceRightWithIndex = reduceRightWithIndex;
exports.reduceWithIndex = reduceWithIndex;
exports.separate = void 0;
exports.sequence = sequence;
exports.toArray = exports.some = exports.size = exports.singleton = void 0;
exports.toUnfoldable = toUnfoldable;
exports.traverse = traverse;
exports.traverseWithIndex = traverseWithIndex;
exports.wither = exports.wilt = exports.upsertAt = exports.updateAt = exports.union = void 0;

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var RR = _interopRequireWildcard(require("./ReadonlyRecord"));

var S = _interopRequireWildcard(require("./string"));

var _Witherable = require("./Witherable");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * Calculate the number of key/value pairs in a `Record`.
 *
 * @example
 * import { size } from "fp-ts/Record";
 *
 * assert.deepStrictEqual(size({ a: true, b: 2, c: "three" }), 3);
 *
 * @since 2.0.0
 */
var size = RR.size;
/**
 * Test whether a `Record` is empty.
 *
 * @example
 * import { isEmpty } from "fp-ts/Record";
 *
 * assert.deepStrictEqual(isEmpty({}), true);
 * assert.deepStrictEqual(isEmpty({ a: 3 }), false);
 *
 * @since 2.0.0
 */

exports.size = size;
var isEmpty = RR.isEmpty;
exports.isEmpty = isEmpty;

var keys_ = function keys_(O) {
  return function (r) {
    return Object.keys(r).sort(O.compare);
  };
};
/**
 * The keys of a `Record`, sorted alphabetically.
 *
 * @example
 * import { keys } from "fp-ts/Record";
 *
 * assert.deepStrictEqual(keys({ c: 1, a: 2, b: 3 }), ["a", "b", "c"]);
 *
 * @since 2.0.0
 */


var keys = /*#__PURE__*/keys_(S.Ord);
/**
 * Map a `Record` into an `Array`.
 * It passes each key/value pair to the iterating function and collects
 * the results in an array, sorted alphabetically by the original key.
 *
 * @example
 * import { collect } from 'fp-ts/Record'
 * import { Ord } from 'fp-ts/string'
 *
 * const f = <A>(k: string, a: A) => `${k.toUpperCase()}-${a}`;
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(
 *   collect(Ord)(f)(x),
 *   [
 *     "A-foo",
 *     "B-false",
 *     "C-3",
 *   ]
 * );
 *
 * @since 2.0.0
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
 * Get a sorted `Array` of the key/value pairs contained in a `Record`.
 * Sorted alphabetically by key.
 *
 * @example
 * import { toArray } from 'fp-ts/Record'
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(toArray(x), [
 *   ["a", "foo"],
 *   ["b", false],
 *   ["c", 3],
 * ]);
 *
 * @since 2.0.0
 */


var toArray = /*#__PURE__*/collect(S.Ord)(function (k, a) {
  return [k, a];
});
/**
 * Unfolds a `Record` into a list of key/value pairs.
 *
 * Given an `Unfoldable` class type `U` such as `array` or `readonlyArray`,
 * it uses the `unfold` function to create an instance of `U`,
 * providing an iterating function that iterates over each
 * key/value pair in the record sorted alphabetically by key.
 *
 * @example
 * import { array, readonlyArray } from 'fp-ts'
 * import { toUnfoldable } from 'fp-ts/Record'
 *
 * assert.deepStrictEqual(toUnfoldable(array)({ b: 2, a: 1 }),[ [ 'a', 1 ], [ 'b', 2 ]])
 * assert.deepStrictEqual(toUnfoldable(readonlyArray)({ b: 2, a: 1 }),[ [ 'a', 1 ], [ 'b', 2 ]])
 *
 * @since 2.0.0
 */

exports.toArray = toArray;

function toUnfoldable(U) {
  return function (r) {
    var sas = toArray(r);
    var len = sas.length;
    return U.unfold(0, function (b) {
      return b < len ? _.some([sas[b], b + 1]) : _.none;
    });
  };
}
/**
 * Insert or replace a key/value pair in a `Record`.
 *
 * @example
 * import { upsertAt } from 'fp-ts/Record'
 *
 * assert.deepStrictEqual(upsertAt("a", 5)({ a: 1, b: 2 }), { a: 5, b: 2 });
 * assert.deepStrictEqual(upsertAt("c", 5)({ a: 1, b: 2 }), { a: 1, b: 2, c: 5 });
 *
 * @category combinators
 * @since 2.10.0
 */


var upsertAt = RR.upsertAt;
/**
 * Test whether or not a key exists in a `Record`.
 *
 * Note. This function is not pipeable because is a `Refinement`.
 *
 * @example
 * import { has } from 'fp-ts/Record'
 *
 * assert.deepStrictEqual(has("a", { a: 1, b: 2 }), true);
 * assert.deepStrictEqual(has("c", { a: 1, b: 2 }), false);
 *
 * @since 2.10.0
 */

exports.upsertAt = upsertAt;
var has = RR.has;
/**
 * Delete a key and value from a `Record`.
 *
 * @example
 * import { deleteAt } from 'fp-ts/Record'
 *
 * assert.deepStrictEqual(deleteAt("a")({ a: 1, b: 2 }), { b: 2 });
 * assert.deepStrictEqual(deleteAt("c")({ a: 1, b: 2 }), { a: 1, b: 2 });
 *
 * @since 2.0.0
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
 * Replace a key/value pair in a `Record`.
 *
 * @returns If the specified key exists it returns an `Option` containing a new `Record`
 * with the entry updated, otherwise it returns `None`
 *
 * @example
 * import { updateAt } from 'fp-ts/Record'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(updateAt("a", 3)({ a: 1, b: 2 }), option.some({ a: 3, b: 2 }));
 * assert.deepStrictEqual(updateAt("c", 3)({ a: 1, b: 2 }), option.none);
 *
 * @since 2.0.0
 */


var updateAt = function updateAt(k, a) {
  return modifyAt(k, function () {
    return a;
  });
};
/**
 * Applies a mapping function to one spcific key/value pair in a `Record`.
 *
 * @returns If the specified key exists it returns an `Option` containing a new `Record`
 * with the entry updated, otherwise it returns `None`
 *
 * @example
 * import { modifyAt } from 'fp-ts/Record'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(modifyAt("a", (x: number) => x * 3)({ a: 1, b: 2 }), option.some({ a: 3, b: 2 }));
 * assert.deepStrictEqual(modifyAt("c", (x: number) => x * 3)({ a: 1, b: 2 }), option.none);
 *
 * @since 2.0.0
 */


exports.updateAt = updateAt;

var modifyAt = function modifyAt(k, f) {
  return function (r) {
    if (!has(k, r)) {
      return _.none;
    }

    var out = Object.assign({}, r);
    out[k] = f(r[k]);
    return _.some(out);
  };
};
/**
 * Delete a key and value from a `Record`, returning the value as well as the subsequent `Record`.
 *
 * @returns If the specified key exists it returns an `Option` containing a new `Record`
 * with the entry removed, otherwise it returns `None`
 *
 * @example
 * import { pop } from 'fp-ts/Record'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(pop("a")({ a: 1, b: 2, c: 3 }), option.some([1, { b: 2, c: 3 }]));
 * assert.deepStrictEqual(pop("x")({ a: 1, b: 2, c: 3 }), option.none);
 *
 * @since 2.0.0
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
 * Test whether one `Record` contains all of the keys and values
 * contained in another `Record`.
 *
 * @example
 * import { isSubrecord } from 'fp-ts/Record'
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
 * @since 2.0.0
 */


var isSubrecord = RR.isSubrecord; // TODO: remove non-curried overloading in v3

/**
 * Lookup the value for a key in a `Record`.
 *
 * @returns If the specified key exists it returns an `Option` containing the value,
 * otherwise it returns `None`
 *
 * @example
 * import { lookup } from 'fp-ts/Record'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(lookup("b")({ a: "foo", b: "bar" }), option.some("bar"));
 * assert.deepStrictEqual(lookup("c")({ a: "foo", b: "bar" }), option.none);
 *
 * @since 2.0.0
 */

exports.isSubrecord = isSubrecord;
var lookup = RR.lookup;
/**
 * Map a `Record` passing the key/value pairs to the iterating function.
 *
 * @example
 * import { mapWithIndex } from "fp-ts/Record";
 *
 * const f = (k: string, n: number) => `${k.toUpperCase()}-${n}`;
 * assert.deepStrictEqual(mapWithIndex(f)({ a: 3, b: 5 }), { a: "A-3", b: "B-5" });
 *
 * @since 2.0.0
 */

exports.lookup = lookup;
var mapWithIndex = RR.mapWithIndex;
/**
 * Map a `Record` passing the values to the iterating function.
 *
 * @example
 * import { map } from "fp-ts/Record";
 *
 * const f = (n: number) => `-${n}-`;
 * assert.deepStrictEqual(map(f)({ a: 3, b: 5 }), { a: "-3-", b: "-5-" });
 *
 * @since 2.0.0
 */

exports.mapWithIndex = mapWithIndex;
var map = RR.map;
/**
 * Reduces a `Record` passing each key/value pair to the iterating function.
 * Entries are processed in the order, sorted by key according to
 * the given `Ord`.
 *
 * @example
 * import { reduceWithIndex } from "fp-ts/Record";
 * import { Ord } from "fp-ts/string";
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(reduceWithIndex(Ord)([] as string[], (k, b, a) => [...b, `${k}-${a}`])(x), [
 *   "a-foo",
 *   "b-false",
 *   "c-3",
 * ]);
 *
 * @since 2.0.0
 */

exports.map = map;

function reduceWithIndex() {
  return arguments.length === 1 ? RR.reduceWithIndex(arguments.length <= 0 ? undefined : arguments[0]) : RR.reduceWithIndex(S.Ord).apply(void 0, arguments);
}
/**
 * Map and fold a `Record`.
 * Map the `Record` passing each key/value pair to the iterating function.
 * Then fold the results using the provided `Monoid`.
 *
 * @example
 * import { foldMapWithIndex } from "fp-ts/Record";
 * import { Ord } from "fp-ts/string";
 * import { Monoid } from "fp-ts/Monoid";
 *
 * const m: Monoid<string> = { empty: "", concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) };
 * const f = (k:string, a: number) => `${k}-${a}`
 * const x = { c: 3, a: 1, b: 2 };
 * assert.deepStrictEqual(foldMapWithIndex(Ord)(m)(f)(x), "a-1 -> b-2 -> c-3");
 *
 * @since 2.0.0
 */


function foldMapWithIndex(O) {
  return 'compare' in O ? RR.foldMapWithIndex(O) : RR.foldMapWithIndex(S.Ord)(O);
}
/**
 * Same as `reduceWithIndex`, but reduce starting from the right
 * (i.e. in reverse order, from the last to the first entry according to
 * the given `Ord`).
 *
 * @example
 * import { reduceRightWithIndex } from "fp-ts/Record";
 * import { Ord } from "fp-ts/string";
 *
 * const x = { c: 3, a: "foo", b: false };
 * assert.deepStrictEqual(reduceRightWithIndex(Ord)([] as string[], (k, a, b) => [...b, `${k}-${a}`])(x), [
 *   "c-3",
 *   "b-false",
 *   "a-foo",
 * ]);
 *
 * @since 2.0.0
 */


function reduceRightWithIndex() {
  return arguments.length === 1 ? RR.reduceRightWithIndex(arguments.length <= 0 ? undefined : arguments[0]) : RR.reduceRightWithIndex(S.Ord).apply(void 0, arguments);
}
/**
 * Create a `Record` with one key/value pair.
 *
 * @example
 * import { singleton } from "fp-ts/Record";
 *
 * assert.deepStrictEqual(singleton("a", 1), { a: 1 });
 *
 * @since 2.0.0
 */


var singleton = RR.singleton;
/**
 * @since 2.0.0
 */

exports.singleton = singleton;

function traverseWithIndex(F) {
  return RR.traverseWithIndex(F);
}
/**
 * @since 2.0.0
 */


function traverse(F) {
  return RR.traverse(F);
}
/**
 * `Record` sequencing,
 * i.e., take a `Record` in which elements are monads
 * and return a monad of a `Record` of the base types.
 * The following example for instance shows sequencing
 * a `Record<string, Option<number>>`
 * into an `Option<Record<string, number>>`.
 *
 * `sequence` in `Record` is equivalent to `sequenceS` in `Apply.ts`.
 *
 * @example
 * import { sequence } from "fp-ts/Record";
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
 * @since 2.0.0
 */


function sequence(F) {
  return RR.sequence(F);
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
 * Maps a `Record` with a function returning an `Either` and
 * partitions the resulting `Record` into `Left`s and `Right`s.
 *
 * @example
 * import { partitionMapWithIndex } from "fp-ts/Record"
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
 * @since 2.0.0
 */


exports.wilt = wilt;
var partitionMapWithIndex = RR.partitionMapWithIndex;
/**
 * Partition a `Record` into two parts according to a predicate
 * that takes a key and a value.
 *
 * @example
 * import { partitionWithIndex } from "fp-ts/Record"
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
 * @since 2.0.0
 */

exports.partitionMapWithIndex = partitionMapWithIndex;

function partitionWithIndex(predicateWithIndex) {
  return RR.partitionWithIndex(predicateWithIndex);
}
/**
 * Maps a `Record` with an iterating function that takes key and value and
 * returns an `Option`, keeping only the `Some` values and discarding `None`s.
 *
 * @example
 * import { filterMapWithIndex } from "fp-ts/Record"
 * import { option } from "fp-ts"
 *
 * const f = (key: string, a: number) => (a >= 0 ? option.some(`${key}${a}`) : option.none);
 * assert.deepStrictEqual(filterMapWithIndex(f)({ a: -1, b: 2, c: 3 }), {
 *   b: "b2",
 *   c: "c3",
 * });
 *
 * @since 2.0.0
 */


var filterMapWithIndex = RR.filterMapWithIndex;
/**
 * Produce a new `Record` keeping only the entries that satisfy
 * a predicate taking key and value as input.
 *
 * @example
 * import { filterWithIndex } from "fp-ts/Record"
 *
 * assert.deepStrictEqual(
 *   filterWithIndex((s: string, v: number) => s.length <= 1 && v > 0)({ a: 1, b: -2, ccc: 3 }),
 *   {
 *     a: 1,
 *   }
 * );
 *
 * @since 2.0.0
 */

exports.filterMapWithIndex = filterMapWithIndex;

function filterWithIndex(predicateWithIndex) {
  return RR.filterWithIndex(predicateWithIndex);
}
/**
 * Create a `Record` from a foldable collection of key/value pairs, using the
 * specified `Magma` to combine values for duplicate keys.
 *
 * @since 2.0.0
 */


function fromFoldable(M, F) {
  return RR.fromFoldable(M, F);
}
/**
 * Create a `Record` from a foldable collection using the specified functions to
 *
 * - map to key/value pairs
 * - combine values for duplicate keys.
 *
 * @example
 * import { last } from 'fp-ts/Semigroup'
 * import { Foldable, zip } from 'fp-ts/Array'
 * import { identity } from 'fp-ts/function'
 * import { fromFoldableMap } from 'fp-ts/Record'
 *
 * export const zipObject = <K extends string, A>(keys: Array<K>, values: Array<A>): Record<K, A> =>
 *   fromFoldableMap(last<A>(), Foldable)(zip(keys, values), identity)
 *
 * assert.deepStrictEqual(zipObject(['a', 'b'], [1, 2, 3]), { a: 1, b: 2 })
 *
 * interface User {
 *   readonly id: string
 *   readonly name: string
 * }
 *
 * const users: Array<User> = [
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
 * @since 2.0.0
 */


function fromFoldableMap(M, F) {
  return RR.fromFoldableMap(M, F);
}
/**
 * Test if every value in a `Record` satisfies the predicate.
 *
 * @example
 * import { every } from "fp-ts/Record"
 *
 * assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: 2 }), true);
 * assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: -1 }), false);
 *
 * @since 2.0.0
 */


var every = RR.every;
/**
 * Test if at least one value in a `Record` satisfies the predicate.
 *
 * @example
 * import { some } from "fp-ts/Record"
 *
 * assert.deepStrictEqual(some((n: number) => n >= 0)({ a: 1, b: -2 }), true);
 * assert.deepStrictEqual(some((n: number) => n >= 0)({ a: -1, b: -2 }), false);
 *
 * @since 2.0.0
 */

exports.every = every;
var some = RR.some; // TODO: remove non-curried overloading in v3

/**
 * Given an `Eq` checks if a `Record` contains an entry with
 * value equal to a provided value.
 *
 * @example
 * import { elem } from "fp-ts/Record"
 * import { number } from "fp-ts"
 *
 * assert.deepStrictEqual(elem(number.Eq)(123, { foo: 123, bar: 234 }), true);
 * assert.deepStrictEqual(elem(number.Eq)(-7, { foo: 123, bar: 234 }), false);
 *
 * @since 2.0.0
 */

exports.some = some;
var elem = RR.elem;
/**
 * Union of two `Record`s.
 * Takes two `Record`s and produces a `Record` combining all the
 * entries of the two inputs.
 * It uses the `concat` function of the provided `Magma` to
 * combine the elements with the same key.
 *
 * @example
 * import { union } from "fp-ts/Record";
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

exports.elem = elem;

var union = function union(M) {
  var unionM = RR.union(M);
  return function (second) {
    return function (first) {
      if (isEmpty(first)) {
        return _objectSpread({}, second);
      }

      if (isEmpty(second)) {
        return _objectSpread({}, first);
      }

      return unionM(second)(first);
    };
  };
};
/**
 * Intersection of two `Record`s.
 * Takes two `Record`s and produces a `Record` combining only the
 * entries of the two inputswith the same key.
 * It uses the `concat` function of the provided `Magma` to
 * combine the elements.
 *
 * @example
 * import { intersection } from "fp-ts/Record";
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
        return {};
      }

      return RR.intersection(M)(second)(first);
    };
  };
};
/**
 * Difference between two `Record`s.
 * Takes two `Record`s and produces a `Record` composed by the
 * entries of the two inputs, removing the entries with the same
 * key in both inputs.
 *
 * @example
 * import { difference } from "fp-ts/Record";
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
      return _objectSpread({}, second);
    }

    if (isEmpty(second)) {
      return _objectSpread({}, first);
    }

    return RR.difference(second)(first);
  };
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


exports.difference = difference;
var _map = RR._map;
var _mapWithIndex = RR._mapWithIndex;
var _reduce = RR._reduce;
var _foldMap = RR._foldMap;
var _reduceRight = RR._reduceRight;
var _filter = RR._filter;
var _filterMap = RR._filterMap;
var _partition = RR._partition;
var _partitionMap = RR._partitionMap;
var _reduceWithIndex = RR._reduceWithIndex;
var _foldMapWithIndex = RR._foldMapWithIndex;
var _reduceRightWithIndex = RR._reduceRightWithIndex;
var _partitionMapWithIndex = RR._partitionMapWithIndex;
var _partitionWithIndex = RR._partitionWithIndex;
var _filterMapWithIndex = RR._filterMapWithIndex;
var _filterWithIndex = RR._filterWithIndex;
var _traverse = RR._traverse;
var _sequence = RR._sequence;

var _traverseWithIndex = function _traverseWithIndex(O) {
  return function (F) {
    var keysO = keys_(O);
    return function (ta, f) {
      var ks = keysO(ta);

      if (ks.length === 0) {
        return F.of({});
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
 * Given a `Predicate`, it produces a new `Record` keeping only the entries with a
 * value that satisfies the provided predicate.
 *
 * @example
 * import { filter } from "fp-ts/Record"
 *
 * assert.deepStrictEqual(filter((s: string) => s.length < 4)({ a: "foo", b: "bar", c: "verylong" }), {
 *   a: "foo",
 *   b: "bar",
 * });
 *
 * @category Filterable
 * @since 2.0.0
 */


var filter = RR.filter;
/**
 * Maps a `Record` with an iterating function that returns an `Option`
 * and it keeps only the `Some` values discarding the `None`s.
 *
 * @example
 * import { filterMap } from "fp-ts/Record"
 * import { option } from "fp-ts"
 *
 * const f = (s: string) => s.length < 4 ? option.some(`${s} is short`): option.none
 * assert.deepStrictEqual(filterMap(f)({ a: "foo", b: "bar", c: "verylong" }), {
 *   a: "foo is short",
 *   b: "bar is short",
 * });
 *
 * @category Filterable
 * @since 2.0.0
 */

exports.filter = filter;
var filterMap = RR.filterMap;
/**
 * Partition a `Record` into two parts according to a `Predicate`.
 *
 * @example
 * import { partition } from "fp-ts/Record"
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
 * @since 2.0.0
 */

exports.filterMap = filterMap;
var partition = RR.partition;
/**
 * Maps a `Record` with a function returning an `Either` and
 * partitions the resulting `Record` into `Left`s and `Right`s.
 *
 * @example
 * import { partitionMap } from "fp-ts/Record"
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
 * @since 2.0.0
 */

exports.partition = partition;
var partitionMap = RR.partitionMap;
/**
 * Reduces a `Record` passing each value to the iterating function.
 * Entries are processed in order, sorted by key according to
 * the given `Ord`.
 *
 * @example
 * import { reduce } from "fp-ts/Record";
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
 * @since 2.0.0
 */

exports.partitionMap = partitionMap;

function reduce() {
  return arguments.length === 1 ? RR.reduce(arguments.length <= 0 ? undefined : arguments[0]) : RR.reduce(S.Ord).apply(void 0, arguments);
}
/**
 * Map and fold a `Record`.
 * Map the `Record` passing each value to the iterating function.
 * Then fold the results using the provided `Monoid`.
 *
 * @example
 * import { foldMap } from "fp-ts/Record";
 * import { Ord } from "fp-ts/string";
 * import { Monoid } from "fp-ts/Monoid";
 *
 * const m: Monoid<string> = { empty: "", concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) };
 * const f = (a: number) => `-${a}-`;
 * const x = { c: 3, a: 1, b: 2 };
 * assert.deepStrictEqual(foldMap(Ord)(m)(f)(x), "-1- -> -2- -> -3-");
 *
 * @category Foldable
 * @since 2.0.0
 */


function foldMap(O) {
  return 'compare' in O ? RR.foldMap(O) : RR.foldMap(S.Ord)(O);
}
/**
 * Same as `reduce` but entries are processed _from the right_,
 * i.e. in reverse order, from the last to the first entry, according to
 * the given `Ord`.
 *
 * @example
 * import { reduceRight } from "fp-ts/Record";
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
 * @since 2.0.0
 */


function reduceRight() {
  return arguments.length === 1 ? RR.reduceRight(arguments.length <= 0 ? undefined : arguments[0]) : RR.reduceRight(S.Ord).apply(void 0, arguments);
}
/**
 * Compact a `Record` of `Option`s discarding the `None` values and
 * keeping the `Some` values.
 *
 * @example
 * import { compact } from 'fp-ts/Record'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(compact({ a: option.some("foo"), b: option.none, c: option.some("bar") }), {
 *   a: "foo",
 *   c: "bar",
 * });
 *
 * @category Compactable
 * @since 2.0.0
 */


var compact = RR.compact;
/**
 * Separate a `Record` of `Either`s into `Left`s and `Right`s.
 *
 * @example
 * import { separate } from 'fp-ts/Record'
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
 * @since 2.0.0
 */

exports.compact = compact;
var separate = RR.separate; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.separate = separate;
var URI = 'Record';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

function getShow(O) {
  return 'compare' in O ? RR.getShow(O) : RR.getShow(S.Ord)(O);
}
/**
 * Given an `Eq` for the base type, it produces an `Eq`
 * for a `Record` of that base type.
 *
 * @example
 * import { getEq } from "fp-ts/Record";
 * import { string } from "fp-ts";
 * import { Eq } from "fp-ts/Eq";
 *
 * const eq: Eq<Record<string, string>> = getEq(string.Eq);
 * assert.deepStrictEqual(eq.equals({ a: "foo" }, { b: "bar" }), false);
 * assert.deepStrictEqual(eq.equals({ a: "foo" }, { a: "foo" }), true);
 *
 * @category instances
 * @since 2.0.0
 */


var getEq = RR.getEq;
/**
 * Returns a `Monoid` instance for `Record`s, given a `Semigroup`
 * instance for the base type.
 * The `Monoid` makes the union of two `Record`s comining the
 * overlapping entries with the provided `Semigroup`.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 * import { getMonoid } from 'fp-ts/Record'
 *
 * const M = getMonoid(SemigroupSum);
 * assert.deepStrictEqual(M.concat({ foo: 123, bar: 234 }, { foo: 456, baz: 567 }), { foo: 579 , bar: 234, baz: 567 });
 *
 * @category instances
 * @since 2.0.0
 */

exports.getEq = getEq;
var getMonoid = RR.getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */

exports.getMonoid = getMonoid;
var Functor = {
  URI: URI,
  map: _map
};
/**
 * Derivable from `Functor`.
 * Takes a value and a `Record` of functions and returns a
 * `Record` by applying each function to the input value.
 *
 * @example
 * import { flap } from "fp-ts/Record"
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
 * Produces a `Foldable` instance for a `Record`, using the
 * provided `Ord` to sort the `Record`'s entries by key.
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
 * Produces a `FoldableWithIndex1` instance for a `Record`, using the
 * provided `Ord` to sort the `Record`'s entries by key.
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
 * Produces a `Traversable` instance for a `Record`, using the
 * provided `Ord` to sort the `Record`'s entries by key.
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
 * Produces a `TraversableWithIndex` instance for a `Record`, using the
 * provided `Ord` to sort the `Record`'s entries by key.
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
 * in the `Record` of the base type.
 * The resulting `Semigroup` concatenates two `Record`s by
 * `union`.
 *
 * @example
 * import { getUnionSemigroup } from "fp-ts/Record"
 * import { Semigroup } from "fp-ts/Semigroup"
 *
 * const sNumber: Semigroup<number> = { concat: (x, y) => x - y };
 * const sRecord: Semigroup<Record<string, number>> = getUnionSemigroup(sNumber);
 * assert.deepStrictEqual(sRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { a: 1, b: -1, c: 4 });
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
 * Returns a `Monoid` instance for `Record`s given a `Semigroup`
 * instance for the base type.
 * The `Monoid` makes the union of two `Record`s combining the
 * entries that have the same key with the provided `Semigroup`.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 * import { getUnionMonoid } from 'fp-ts/Record'
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
    empty: {}
  };
};
/**
 * Given a `Semigroup` in the base type, it produces a `Semigroup`
 * in the `Record` of the base type.
 * The resulting `Semigroup` concatenates two `Record`s by
 * `intersection`.
 *
 * @example
 * import { getIntersectionSemigroup } from "fp-ts/Record"
 * import { Semigroup } from "fp-ts/Semigroup"
 *
 * const sNumber: Semigroup<number> = { concat: (x, y) => x - y };
 * const sRecord: Semigroup<Record<string, number>> = getIntersectionSemigroup(sNumber);
 * assert.deepStrictEqual(sRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { b: -1 });
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
 * two `Record`s by making the `difference`.
 *
 * @example
 * import { getDifferenceMagma, difference } from "fp-ts/Record"
 * import { Magma } from "fp-ts/Magma"
 *
 * const r1 = { a: 3, c: 3 };
 * const r2 = { a: 1, b: 2 };
 * const m: Magma<Record<string, number>> = getDifferenceMagma<number>();
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
 * Use the `getTraversableWithIndex` instead.
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
 * Use a new `{}` instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.Witherable = Witherable;
var empty = {};
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.empty = empty;
var insertAt = upsertAt;
/**
 * Use [`has`](#has) instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.insertAt = insertAt;
var hasOwnProperty = RR.hasOwnProperty;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.hasOwnProperty = hasOwnProperty;
var record = {
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
exports.record = record;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWNvcmQudHMiXSwibmFtZXMiOlsic2l6ZSIsIlJSIiwiaXNFbXB0eSIsImtleXNfIiwiTyIsInIiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImNvbXBhcmUiLCJTIiwiT3JkIiwiY29sbGVjdCIsImtleXNPIiwiZiIsIm91dCIsImtleSIsInB1c2giLCJ0b0FycmF5IiwiayIsImEiLCJ0b1VuZm9sZGFibGUiLCJVIiwic2FzIiwibGVuIiwibGVuZ3RoIiwidW5mb2xkIiwiYiIsIl8iLCJzb21lIiwibm9uZSIsInVwc2VydEF0IiwiaGFzIiwiZGVsZXRlQXQiLCJjYWxsIiwiYXNzaWduIiwidXBkYXRlQXQiLCJtb2RpZnlBdCIsInBvcCIsImRlbGV0ZUF0ayIsIm9hIiwibG9va3VwIiwiaXNOb25lIiwidmFsdWUiLCJpc1N1YnJlY29yZCIsIm1hcFdpdGhJbmRleCIsIm1hcCIsInJlZHVjZVdpdGhJbmRleCIsImZvbGRNYXBXaXRoSW5kZXgiLCJyZWR1Y2VSaWdodFdpdGhJbmRleCIsInNpbmdsZXRvbiIsInRyYXZlcnNlV2l0aEluZGV4IiwiRiIsInRyYXZlcnNlIiwic2VxdWVuY2UiLCJ3aXRoZXIiLCJ0cmF2ZXJzZUYiLCJmYSIsImNvbXBhY3QiLCJ3aWx0Iiwic2VwYXJhdGUiLCJwYXJ0aXRpb25NYXBXaXRoSW5kZXgiLCJwYXJ0aXRpb25XaXRoSW5kZXgiLCJwcmVkaWNhdGVXaXRoSW5kZXgiLCJmaWx0ZXJNYXBXaXRoSW5kZXgiLCJmaWx0ZXJXaXRoSW5kZXgiLCJmcm9tRm9sZGFibGUiLCJNIiwiZnJvbUZvbGRhYmxlTWFwIiwiZXZlcnkiLCJlbGVtIiwidW5pb24iLCJ1bmlvbk0iLCJzZWNvbmQiLCJmaXJzdCIsImludGVyc2VjdGlvbiIsImRpZmZlcmVuY2UiLCJfbWFwIiwiX21hcFdpdGhJbmRleCIsIl9yZWR1Y2UiLCJfZm9sZE1hcCIsIl9yZWR1Y2VSaWdodCIsIl9maWx0ZXIiLCJfZmlsdGVyTWFwIiwiX3BhcnRpdGlvbiIsIl9wYXJ0aXRpb25NYXAiLCJfcmVkdWNlV2l0aEluZGV4IiwiX2ZvbGRNYXBXaXRoSW5kZXgiLCJfcmVkdWNlUmlnaHRXaXRoSW5kZXgiLCJfcGFydGl0aW9uTWFwV2l0aEluZGV4IiwiX3BhcnRpdGlvbldpdGhJbmRleCIsIl9maWx0ZXJNYXBXaXRoSW5kZXgiLCJfZmlsdGVyV2l0aEluZGV4IiwiX3RyYXZlcnNlIiwiX3NlcXVlbmNlIiwiX3RyYXZlcnNlV2l0aEluZGV4IiwidGEiLCJrcyIsIm9mIiwiZnIiLCJhcCIsImZpbHRlciIsImZpbHRlck1hcCIsInBhcnRpdGlvbiIsInBhcnRpdGlvbk1hcCIsInJlZHVjZSIsImZvbGRNYXAiLCJyZWR1Y2VSaWdodCIsIlVSSSIsImdldFNob3ciLCJnZXRFcSIsImdldE1vbm9pZCIsIkZ1bmN0b3IiLCJmbGFwIiwiRnVuY3RvcldpdGhJbmRleCIsImdldEZvbGRhYmxlIiwiZ2V0Rm9sZGFibGVXaXRoSW5kZXgiLCJDb21wYWN0YWJsZSIsIkZpbHRlcmFibGUiLCJGaWx0ZXJhYmxlV2l0aEluZGV4IiwiZ2V0VHJhdmVyc2FibGUiLCJnZXRUcmF2ZXJzYWJsZVdpdGhJbmRleCIsImdldFdpdGhlcmFibGUiLCJUIiwiZ2V0VW5pb25TZW1pZ3JvdXAiLCJ1bmlvblMiLCJjb25jYXQiLCJnZXRVbmlvbk1vbm9pZCIsImVtcHR5IiwiZ2V0SW50ZXJzZWN0aW9uU2VtaWdyb3VwIiwiaW50ZXJzZWN0aW9uUyIsImdldERpZmZlcmVuY2VNYWdtYSIsIkZvbGRhYmxlIiwiRm9sZGFibGVXaXRoSW5kZXgiLCJUcmF2ZXJzYWJsZSIsIlRyYXZlcnNhYmxlV2l0aEluZGV4IiwiX3dpdGhlciIsIl93aWx0IiwiV2l0aGVyYWJsZSIsImluc2VydEF0IiwiaGFzT3duUHJvcGVydHkiLCJyZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBOztBQUNBOztBQUdBOztBQU1BOztBQUtBOztBQUlBOzs7Ozs7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LEVBQUFBLFNBQVMsRUFBRW5CLFVBcEJRO0FBcUJuQm9CLEVBQUFBLFlBQVksRUFBRW5CLGFBckJLO0FBc0JuQnhDLEVBQUFBLFlBQVksRUFBRWlDLGFBdEJLO0FBdUJuQi9CLEVBQUFBLGVBQWUsRUFDYixhQUNBdUMsZ0JBQWdCLENBQUM1RSxDQUFDLENBQUNDLEdBQUgsQ0F6QkM7QUEwQm5CcUMsRUFBQUEsZ0JBQWdCLEVBQ2QsYUFDQXVDLGlCQUFpQixDQUFDN0UsQ0FBQyxDQUFDQyxHQUFILENBNUJBO0FBNkJuQnNDLEVBQUFBLG9CQUFvQixFQUNsQixhQUNBdUMscUJBQXFCLENBQUM5RSxDQUFDLENBQUNDLEdBQUgsQ0EvQko7QUFnQ25CcUQsRUFBQUEsa0JBQWtCLEVBQUUyQixtQkFoQ0Q7QUFpQ25CMUIsRUFBQUEsZUFBZSxFQUFFMkIsZ0JBakNFO0FBa0NuQi9CLEVBQUFBLHFCQUFxQixFQUFFNEIsc0JBbENKO0FBbUNuQjNCLEVBQUFBLGtCQUFrQixFQUFFNEIsbUJBbkNEO0FBb0NuQnZDLEVBQUFBLGlCQUFpQixFQUNmLGFBQ0E0QyxrQkFBa0IsQ0FBQ3JGLENBQUMsQ0FBQ0MsR0FBSCxDQXRDRDtBQXVDbkI0QyxFQUFBQSxNQUFNLEVBQUVpRixPQXZDVztBQXdDbkI3RSxFQUFBQSxJQUFJLEVBQUU4RTtBQXhDYSxDQUpkIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYFJlY29yZGAgbW9kdWxlIGVuYWJsZXMgZGVhbGluZyB3aXRoIFR5cGVzY3JpcHQncyBgUmVjb3JkPEssIFQ+YFxuICogdHlwZSBpbiBhIGZ1bmN0aW9uYWwgd2F5LCBiYXNpY2FsbHkgdHJlYXRpbmcgaXQgYXMgYSBgRnVuY3RvcmAgaW4gYFRgLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSwgQXBwbGljYXRpdmUxLCBBcHBsaWNhdGl2ZTIsIEFwcGxpY2F0aXZlMkMsIEFwcGxpY2F0aXZlMywgQXBwbGljYXRpdmUzQyB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBDb21wYWN0YWJsZTEgfSBmcm9tICcuL0NvbXBhY3RhYmxlJ1xuaW1wb3J0IHsgRWl0aGVyIH0gZnJvbSAnLi9FaXRoZXInXG5pbXBvcnQgeyBFcSB9IGZyb20gJy4vRXEnXG5pbXBvcnQgeyBGaWx0ZXJhYmxlMSB9IGZyb20gJy4vRmlsdGVyYWJsZSdcbmltcG9ydCB7IEZpbHRlcmFibGVXaXRoSW5kZXgxLCBQcmVkaWNhdGVXaXRoSW5kZXgsIFJlZmluZW1lbnRXaXRoSW5kZXggfSBmcm9tICcuL0ZpbHRlcmFibGVXaXRoSW5kZXgnXG5pbXBvcnQgeyBGb2xkYWJsZSBhcyBGb2xkYWJsZUhLVCwgRm9sZGFibGUxLCBGb2xkYWJsZTIsIEZvbGRhYmxlMyB9IGZyb20gJy4vRm9sZGFibGUnXG5pbXBvcnQgeyBGb2xkYWJsZVdpdGhJbmRleDEgfSBmcm9tICcuL0ZvbGRhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgcGlwZSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEZ1bmN0b3JXaXRoSW5kZXgxIH0gZnJvbSAnLi9GdW5jdG9yV2l0aEluZGV4J1xuaW1wb3J0IHsgSEtULCBLaW5kLCBLaW5kMiwgS2luZDMsIFVSSVMsIFVSSVMyLCBVUklTMyB9IGZyb20gJy4vSEtUJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgTWFnbWEgfSBmcm9tICcuL01hZ21hJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuL09wdGlvbidcbmltcG9ydCB7IE9yZCB9IGZyb20gJy4vT3JkJ1xuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9QcmVkaWNhdGUnXG5pbXBvcnQgKiBhcyBSUiBmcm9tICcuL1JlYWRvbmx5UmVjb3JkJ1xuaW1wb3J0IHsgUmVmaW5lbWVudCB9IGZyb20gJy4vUmVmaW5lbWVudCdcbmltcG9ydCB7IFNlbWlncm91cCB9IGZyb20gJy4vU2VtaWdyb3VwJ1xuaW1wb3J0IHsgU2VwYXJhdGVkIH0gZnJvbSAnLi9TZXBhcmF0ZWQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyBUcmF2ZXJzYWJsZVdpdGhJbmRleDEgfSBmcm9tICcuL1RyYXZlcnNhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgVW5mb2xkYWJsZSwgVW5mb2xkYWJsZTEgfSBmcm9tICcuL1VuZm9sZGFibGUnXG5pbXBvcnQgeyBQaXBlYWJsZVdpbHQxLCBQaXBlYWJsZVdpdGhlcjEsIHdpbHREZWZhdWx0LCBXaXRoZXJhYmxlMSwgd2l0aGVyRGVmYXVsdCB9IGZyb20gJy4vV2l0aGVyYWJsZSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBrZXkvdmFsdWUgcGFpcnMgaW4gYSBgUmVjb3JkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc2l6ZSB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNpemUoeyBhOiB0cnVlLCBiOiAyLCBjOiBcInRocmVlXCIgfSksIDMpO1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc2l6ZTogPEE+KHI6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBudW1iZXIgPSBSUi5zaXplXG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIGEgYFJlY29yZGAgaXMgZW1wdHkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGlzRW1wdHkgfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpc0VtcHR5KHt9KSwgdHJ1ZSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGlzRW1wdHkoeyBhOiAzIH0pLCBmYWxzZSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc0VtcHR5OiA8QT4ocjogUmVjb3JkPHN0cmluZywgQT4pID0+IGJvb2xlYW4gPSBSUi5pc0VtcHR5XG5cbmNvbnN0IGtleXNfID0gKE86IE9yZDxzdHJpbmc+KSA9PiA8SyBleHRlbmRzIHN0cmluZz4ocjogUmVjb3JkPEssIHVua25vd24+KTogQXJyYXk8Sz4gPT5cbiAgKE9iamVjdC5rZXlzKHIpIGFzIGFueSkuc29ydChPLmNvbXBhcmUpXG5cbi8qKlxuICogVGhlIGtleXMgb2YgYSBgUmVjb3JkYCwgc29ydGVkIGFscGhhYmV0aWNhbGx5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBrZXlzIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiO1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoa2V5cyh7IGM6IDEsIGE6IDIsIGI6IDMgfSksIFtcImFcIiwgXCJiXCIsIFwiY1wiXSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlzOiA8SyBleHRlbmRzIHN0cmluZz4ocjogUmVjb3JkPEssIHVua25vd24+KSA9PiBBcnJheTxLPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAga2V5c18oUy5PcmQpXG5cbi8qKlxuICogTWFwIGEgYFJlY29yZGAgaW50byBhbiBgQXJyYXlgLlxuICogSXQgcGFzc2VzIGVhY2gga2V5L3ZhbHVlIHBhaXIgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbiBhbmQgY29sbGVjdHNcbiAqIHRoZSByZXN1bHRzIGluIGFuIGFycmF5LCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkgYnkgdGhlIG9yaWdpbmFsIGtleS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29sbGVjdCB9IGZyb20gJ2ZwLXRzL1JlY29yZCdcbiAqIGltcG9ydCB7IE9yZCB9IGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqXG4gKiBjb25zdCBmID0gPEE+KGs6IHN0cmluZywgYTogQSkgPT4gYCR7ay50b1VwcGVyQ2FzZSgpfS0ke2F9YDtcbiAqIGNvbnN0IHggPSB7IGM6IDMsIGE6IFwiZm9vXCIsIGI6IGZhbHNlIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBjb2xsZWN0KE9yZCkoZikoeCksXG4gKiAgIFtcbiAqICAgICBcIkEtZm9vXCIsXG4gKiAgICAgXCJCLWZhbHNlXCIsXG4gKiAgICAgXCJDLTNcIixcbiAqICAgXVxuICogKTtcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3QoTzogT3JkPHN0cmluZz4pOiA8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oZjogKGs6IEssIGE6IEEpID0+IEIpID0+IChyOiBSZWNvcmQ8SywgQT4pID0+IEFycmF5PEI+XG4vKipcbiAqIFVzZSB0aGUgb3ZlcmxvYWQgY29uc3RyYWluZWQgYnkgYE9yZGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihmOiAoazogSywgYTogQSkgPT4gQik6IChyOiBSZWNvcmQ8SywgQT4pID0+IEFycmF5PEI+XG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdDxBLCBCPihcbiAgTzogT3JkPHN0cmluZz4gfCAoKGs6IHN0cmluZywgYTogQSkgPT4gQilcbik6XG4gIHwgKDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihmOiAoazogSywgYTogQSkgPT4gQikgPT4gKHI6IFJlY29yZDxLLCBBPikgPT4gQXJyYXk8Qj4pXG4gIHwgKChyOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQXJyYXk8Qj4pIHtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNvbGxlY3QoUy5PcmQpKE8pXG4gIH1cbiAgY29uc3Qga2V5c08gPSBrZXlzXyhPKVxuICByZXR1cm4gPEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KGY6IChrOiBLLCBhOiBBKSA9PiBCKSA9PiAocjogUmVjb3JkPEssIEE+KSA9PiB7XG4gICAgY29uc3Qgb3V0OiBBcnJheTxCPiA9IFtdXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5c08ocikpIHtcbiAgICAgIG91dC5wdXNoKGYoa2V5LCByW2tleV0pKVxuICAgIH1cbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYSBzb3J0ZWQgYEFycmF5YCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGNvbnRhaW5lZCBpbiBhIGBSZWNvcmRgLlxuICogU29ydGVkIGFscGhhYmV0aWNhbGx5IGJ5IGtleS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJ2ZwLXRzL1JlY29yZCdcbiAqXG4gKiBjb25zdCB4ID0geyBjOiAzLCBhOiBcImZvb1wiLCBiOiBmYWxzZSB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0b0FycmF5KHgpLCBbXG4gKiAgIFtcImFcIiwgXCJmb29cIl0sXG4gKiAgIFtcImJcIiwgZmFsc2VdLFxuICogICBbXCJjXCIsIDNdLFxuICogXSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0b0FycmF5OiA8SyBleHRlbmRzIHN0cmluZywgQT4ocjogUmVjb3JkPEssIEE+KSA9PiBBcnJheTxbSywgQV0+ID1cbiAgLyojX19QVVJFX18qL1xuICBjb2xsZWN0KFMuT3JkKSgoaywgYSkgPT4gW2ssIGFdKVxuXG4vKipcbiAqIFVuZm9sZHMgYSBgUmVjb3JkYCBpbnRvIGEgbGlzdCBvZiBrZXkvdmFsdWUgcGFpcnMuXG4gKlxuICogR2l2ZW4gYW4gYFVuZm9sZGFibGVgIGNsYXNzIHR5cGUgYFVgIHN1Y2ggYXMgYGFycmF5YCBvciBgcmVhZG9ubHlBcnJheWAsXG4gKiBpdCB1c2VzIHRoZSBgdW5mb2xkYCBmdW5jdGlvbiB0byBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYFVgLFxuICogcHJvdmlkaW5nIGFuIGl0ZXJhdGluZyBmdW5jdGlvbiB0aGF0IGl0ZXJhdGVzIG92ZXIgZWFjaFxuICoga2V5L3ZhbHVlIHBhaXIgaW4gdGhlIHJlY29yZCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkgYnkga2V5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBhcnJheSwgcmVhZG9ubHlBcnJheSB9IGZyb20gJ2ZwLXRzJ1xuICogaW1wb3J0IHsgdG9VbmZvbGRhYmxlIH0gZnJvbSAnZnAtdHMvUmVjb3JkJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodG9VbmZvbGRhYmxlKGFycmF5KSh7IGI6IDIsIGE6IDEgfSksWyBbICdhJywgMSBdLCBbICdiJywgMiBdXSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodG9VbmZvbGRhYmxlKHJlYWRvbmx5QXJyYXkpKHsgYjogMiwgYTogMSB9KSxbIFsgJ2EnLCAxIF0sIFsgJ2InLCAyIF1dKVxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9VbmZvbGRhYmxlPEYgZXh0ZW5kcyBVUklTPihcbiAgVTogVW5mb2xkYWJsZTE8Rj5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBBPihyOiBSZWNvcmQ8SywgQT4pID0+IEtpbmQ8RiwgW0ssIEFdPlxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5mb2xkYWJsZTxGPihVOiBVbmZvbGRhYmxlPEY+KTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KHI6IFJlY29yZDxLLCBBPikgPT4gSEtUPEYsIFtLLCBBXT5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuZm9sZGFibGU8Rj4oVTogVW5mb2xkYWJsZTxGPik6IDxBPihyOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gSEtUPEYsIFtzdHJpbmcsIEFdPiB7XG4gIHJldHVybiAocikgPT4ge1xuICAgIGNvbnN0IHNhcyA9IHRvQXJyYXkocilcbiAgICBjb25zdCBsZW4gPSBzYXMubGVuZ3RoXG4gICAgcmV0dXJuIFUudW5mb2xkKDAsIChiKSA9PiAoYiA8IGxlbiA/IF8uc29tZShbc2FzW2JdLCBiICsgMV0pIDogXy5ub25lKSlcbiAgfVxufVxuXG4vKipcbiAqIEluc2VydCBvciByZXBsYWNlIGEga2V5L3ZhbHVlIHBhaXIgaW4gYSBgUmVjb3JkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdXBzZXJ0QXQgfSBmcm9tICdmcC10cy9SZWNvcmQnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1cHNlcnRBdChcImFcIiwgNSkoeyBhOiAxLCBiOiAyIH0pLCB7IGE6IDUsIGI6IDIgfSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVwc2VydEF0KFwiY1wiLCA1KSh7IGE6IDEsIGI6IDIgfSksIHsgYTogMSwgYjogMiwgYzogNSB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVwc2VydEF0OiA8QT4oazogc3RyaW5nLCBhOiBBKSA9PiAocjogUmVjb3JkPHN0cmluZywgQT4pID0+IFJlY29yZDxzdHJpbmcsIEE+ID0gUlIudXBzZXJ0QXRcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgb3Igbm90IGEga2V5IGV4aXN0cyBpbiBhIGBSZWNvcmRgLlxuICpcbiAqIE5vdGUuIFRoaXMgZnVuY3Rpb24gaXMgbm90IHBpcGVhYmxlIGJlY2F1c2UgaXMgYSBgUmVmaW5lbWVudGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGhhcyB9IGZyb20gJ2ZwLXRzL1JlY29yZCdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGhhcyhcImFcIiwgeyBhOiAxLCBiOiAyIH0pLCB0cnVlKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaGFzKFwiY1wiLCB7IGE6IDEsIGI6IDIgfSksIGZhbHNlKTtcbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBoYXM6IDxLIGV4dGVuZHMgc3RyaW5nPihrOiBzdHJpbmcsIHI6IFJlY29yZDxLLCB1bmtub3duPikgPT4gayBpcyBLID0gUlIuaGFzXG5cbi8qKlxuICogRGVsZXRlIGEga2V5IGFuZCB2YWx1ZSBmcm9tIGEgYFJlY29yZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGRlbGV0ZUF0IH0gZnJvbSAnZnAtdHMvUmVjb3JkJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZGVsZXRlQXQoXCJhXCIpKHsgYTogMSwgYjogMiB9KSwgeyBiOiAyIH0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkZWxldGVBdChcImNcIikoeyBhOiAxLCBiOiAyIH0pLCB7IGE6IDEsIGI6IDIgfSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBdDxLIGV4dGVuZHMgc3RyaW5nPihcbiAgazogS1xuKTogPEtTIGV4dGVuZHMgc3RyaW5nLCBBPihyOiBSZWNvcmQ8S1MsIEE+KSA9PiBSZWNvcmQ8c3RyaW5nIGV4dGVuZHMgSyA/IHN0cmluZyA6IEV4Y2x1ZGU8S1MsIEs+LCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUF0KGs6IHN0cmluZyk6IDxBPihyOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gUmVjb3JkPHN0cmluZywgQT4ge1xuICByZXR1cm4gPEE+KHI6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiB7XG4gICAgaWYgKCFfLmhhcy5jYWxsKHIsIGspKSB7XG4gICAgICByZXR1cm4gclxuICAgIH1cbiAgICBjb25zdCBvdXQ6IFJlY29yZDxzdHJpbmcsIEE+ID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgICBkZWxldGUgb3V0W2tdXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cbi8qKlxuICogUmVwbGFjZSBhIGtleS92YWx1ZSBwYWlyIGluIGEgYFJlY29yZGAuXG4gKlxuICogQHJldHVybnMgSWYgdGhlIHNwZWNpZmllZCBrZXkgZXhpc3RzIGl0IHJldHVybnMgYW4gYE9wdGlvbmAgY29udGFpbmluZyBhIG5ldyBgUmVjb3JkYFxuICogd2l0aCB0aGUgZW50cnkgdXBkYXRlZCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgYE5vbmVgXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVwZGF0ZUF0IH0gZnJvbSAnZnAtdHMvUmVjb3JkJ1xuICogaW1wb3J0IHsgb3B0aW9uIH0gZnJvbSAnZnAtdHMnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1cGRhdGVBdChcImFcIiwgMykoeyBhOiAxLCBiOiAyIH0pLCBvcHRpb24uc29tZSh7IGE6IDMsIGI6IDIgfSkpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1cGRhdGVBdChcImNcIiwgMykoeyBhOiAxLCBiOiAyIH0pLCBvcHRpb24ubm9uZSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVBdCA9IDxBPihrOiBzdHJpbmcsIGE6IEEpOiAoPEsgZXh0ZW5kcyBzdHJpbmc+KHI6IFJlY29yZDxLLCBBPikgPT4gT3B0aW9uPFJlY29yZDxLLCBBPj4pID0+XG4gIG1vZGlmeUF0KGssICgpID0+IGEpXG5cbi8qKlxuICogQXBwbGllcyBhIG1hcHBpbmcgZnVuY3Rpb24gdG8gb25lIHNwY2lmaWMga2V5L3ZhbHVlIHBhaXIgaW4gYSBgUmVjb3JkYC5cbiAqXG4gKiBAcmV0dXJucyBJZiB0aGUgc3BlY2lmaWVkIGtleSBleGlzdHMgaXQgcmV0dXJucyBhbiBgT3B0aW9uYCBjb250YWluaW5nIGEgbmV3IGBSZWNvcmRgXG4gKiB3aXRoIHRoZSBlbnRyeSB1cGRhdGVkLCBvdGhlcndpc2UgaXQgcmV0dXJucyBgTm9uZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbW9kaWZ5QXQgfSBmcm9tICdmcC10cy9SZWNvcmQnXG4gKiBpbXBvcnQgeyBvcHRpb24gfSBmcm9tICdmcC10cydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKG1vZGlmeUF0KFwiYVwiLCAoeDogbnVtYmVyKSA9PiB4ICogMykoeyBhOiAxLCBiOiAyIH0pLCBvcHRpb24uc29tZSh7IGE6IDMsIGI6IDIgfSkpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtb2RpZnlBdChcImNcIiwgKHg6IG51bWJlcikgPT4geCAqIDMpKHsgYTogMSwgYjogMiB9KSwgb3B0aW9uLm5vbmUpO1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbW9kaWZ5QXQgPSA8QT4oazogc3RyaW5nLCBmOiAoYTogQSkgPT4gQSkgPT4gPEsgZXh0ZW5kcyBzdHJpbmc+KHI6IFJlY29yZDxLLCBBPik6IE9wdGlvbjxSZWNvcmQ8SywgQT4+ID0+IHtcbiAgaWYgKCFoYXMoaywgcikpIHtcbiAgICByZXR1cm4gXy5ub25lXG4gIH1cbiAgY29uc3Qgb3V0OiBSZWNvcmQ8SywgQT4gPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICBvdXRba10gPSBmKHJba10pXG4gIHJldHVybiBfLnNvbWUob3V0KVxufVxuXG4vKipcbiAqIERlbGV0ZSBhIGtleSBhbmQgdmFsdWUgZnJvbSBhIGBSZWNvcmRgLCByZXR1cm5pbmcgdGhlIHZhbHVlIGFzIHdlbGwgYXMgdGhlIHN1YnNlcXVlbnQgYFJlY29yZGAuXG4gKlxuICogQHJldHVybnMgSWYgdGhlIHNwZWNpZmllZCBrZXkgZXhpc3RzIGl0IHJldHVybnMgYW4gYE9wdGlvbmAgY29udGFpbmluZyBhIG5ldyBgUmVjb3JkYFxuICogd2l0aCB0aGUgZW50cnkgcmVtb3ZlZCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgYE5vbmVgXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBvcCB9IGZyb20gJ2ZwLXRzL1JlY29yZCdcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gJ2ZwLXRzJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocG9wKFwiYVwiKSh7IGE6IDEsIGI6IDIsIGM6IDMgfSksIG9wdGlvbi5zb21lKFsxLCB7IGI6IDIsIGM6IDMgfV0pKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocG9wKFwieFwiKSh7IGE6IDEsIGI6IDIsIGM6IDMgfSksIG9wdGlvbi5ub25lKTtcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvcDxLIGV4dGVuZHMgc3RyaW5nPihcbiAgazogS1xuKTogPEtTIGV4dGVuZHMgc3RyaW5nLCBBPihyOiBSZWNvcmQ8S1MsIEE+KSA9PiBPcHRpb248W0EsIFJlY29yZDxzdHJpbmcgZXh0ZW5kcyBLID8gc3RyaW5nIDogRXhjbHVkZTxLUywgSz4sIEE+XT5cbmV4cG9ydCBmdW5jdGlvbiBwb3Aoazogc3RyaW5nKTogPEE+KHI6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBPcHRpb248W0EsIFJlY29yZDxzdHJpbmcsIEE+XT4ge1xuICBjb25zdCBkZWxldGVBdGsgPSBkZWxldGVBdChrKVxuICByZXR1cm4gKHIpID0+IHtcbiAgICBjb25zdCBvYSA9IGxvb2t1cChrLCByKVxuICAgIHJldHVybiBfLmlzTm9uZShvYSkgPyBfLm5vbmUgOiBfLnNvbWUoW29hLnZhbHVlLCBkZWxldGVBdGsocildKVxuICB9XG59XG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBUZXN0IHdoZXRoZXIgb25lIGBSZWNvcmRgIGNvbnRhaW5zIGFsbCBvZiB0aGUga2V5cyBhbmQgdmFsdWVzXG4gKiBjb250YWluZWQgaW4gYW5vdGhlciBgUmVjb3JkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaXNTdWJyZWNvcmQgfSBmcm9tICdmcC10cy9SZWNvcmQnXG4gKiBpbXBvcnQgeyBzdHJpbmcgfSBmcm9tICdmcC10cydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBpc1N1YnJlY29yZChzdHJpbmcuRXEpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiwgYzogXCJiYXpcIiB9KSh7IGE6IFwiZm9vXCIsIGI6IFwiYmFyXCIsIGM6IFwiYmF6XCIgfSksXG4gKiAgIHRydWVcbiAqICk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBpc1N1YnJlY29yZChzdHJpbmcuRXEpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiwgYzogXCJiYXpcIiB9KSh7IGE6IFwiZm9vXCIsIGM6IFwiYmF6XCIgfSksXG4gKiAgIHRydWVcbiAqICk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBpc1N1YnJlY29yZChzdHJpbmcuRXEpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiwgYzogXCJiYXpcIiB9KSh7IGE6IFwiZm9vXCIsIGI6IFwibm90LWJhclwiLCBjOiBcImJhelwiIH0pLFxuICogICBmYWxzZVxuICogKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIGlzU3VicmVjb3JkKHN0cmluZy5FcSkoeyBhOiBcImZvb1wiLCBiOiBcImJhclwiIH0pKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiwgYzogXCJiYXpcIiB9KSxcbiAqICAgZmFsc2VcbiAqICk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc1N1YnJlY29yZDogPEE+KFxuICBFOiBFcTxBPlxuKSA9PiB7XG4gICh0aGF0OiBSZWNvcmQ8c3RyaW5nLCBBPik6IChtZTogUmVjb3JkPHN0cmluZywgQT4pID0+IGJvb2xlYW5cbiAgKG1lOiBSZWNvcmQ8c3RyaW5nLCBBPiwgdGhhdDogUmVjb3JkPHN0cmluZywgQT4pOiBib29sZWFuXG59ID0gUlIuaXNTdWJyZWNvcmRcblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIExvb2t1cCB0aGUgdmFsdWUgZm9yIGEga2V5IGluIGEgYFJlY29yZGAuXG4gKlxuICogQHJldHVybnMgSWYgdGhlIHNwZWNpZmllZCBrZXkgZXhpc3RzIGl0IHJldHVybnMgYW4gYE9wdGlvbmAgY29udGFpbmluZyB0aGUgdmFsdWUsXG4gKiBvdGhlcndpc2UgaXQgcmV0dXJucyBgTm9uZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbG9va3VwIH0gZnJvbSAnZnAtdHMvUmVjb3JkJ1xuICogaW1wb3J0IHsgb3B0aW9uIH0gZnJvbSAnZnAtdHMnXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsb29rdXAoXCJiXCIpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiB9KSwgb3B0aW9uLnNvbWUoXCJiYXJcIikpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsb29rdXAoXCJjXCIpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiB9KSwgb3B0aW9uLm5vbmUpO1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbG9va3VwOiB7XG4gIChrOiBzdHJpbmcpOiA8QT4ocjogUmVjb3JkPHN0cmluZywgQT4pID0+IE9wdGlvbjxBPlxuICA8QT4oazogc3RyaW5nLCByOiBSZWNvcmQ8c3RyaW5nLCBBPik6IE9wdGlvbjxBPlxufSA9IFJSLmxvb2t1cFxuXG4vKipcbiAqIE1hcCBhIGBSZWNvcmRgIHBhc3NpbmcgdGhlIGtleS92YWx1ZSBwYWlycyB0byB0aGUgaXRlcmF0aW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXBXaXRoSW5kZXggfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCI7XG4gKlxuICogY29uc3QgZiA9IChrOiBzdHJpbmcsIG46IG51bWJlcikgPT4gYCR7ay50b1VwcGVyQ2FzZSgpfS0ke259YDtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobWFwV2l0aEluZGV4KGYpKHsgYTogMywgYjogNSB9KSwgeyBhOiBcIkEtM1wiLCBiOiBcIkItNVwiIH0pO1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwV2l0aEluZGV4OiA8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oZjogKGs6IEssIGE6IEEpID0+IEIpID0+IChmYTogUmVjb3JkPEssIEE+KSA9PiBSZWNvcmQ8SywgQj4gPVxuICBSUi5tYXBXaXRoSW5kZXhcblxuLyoqXG4gKiBNYXAgYSBgUmVjb3JkYCBwYXNzaW5nIHRoZSB2YWx1ZXMgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiO1xuICpcbiAqIGNvbnN0IGYgPSAobjogbnVtYmVyKSA9PiBgLSR7bn0tYDtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobWFwKGYpKHsgYTogMywgYjogNSB9KSwgeyBhOiBcIi0zLVwiLCBiOiBcIi01LVwiIH0pO1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxLIGV4dGVuZHMgc3RyaW5nPihmYTogUmVjb3JkPEssIEE+KSA9PiBSZWNvcmQ8SywgQj4gPSBSUi5tYXBcblxuLyoqXG4gKiBSZWR1Y2VzIGEgYFJlY29yZGAgcGFzc2luZyBlYWNoIGtleS92YWx1ZSBwYWlyIHRvIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24uXG4gKiBFbnRyaWVzIGFyZSBwcm9jZXNzZWQgaW4gdGhlIG9yZGVyLCBzb3J0ZWQgYnkga2V5IGFjY29yZGluZyB0b1xuICogdGhlIGdpdmVuIGBPcmRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZWR1Y2VXaXRoSW5kZXggfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCI7XG4gKiBpbXBvcnQgeyBPcmQgfSBmcm9tIFwiZnAtdHMvc3RyaW5nXCI7XG4gKlxuICogY29uc3QgeCA9IHsgYzogMywgYTogXCJmb29cIiwgYjogZmFsc2UgfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVkdWNlV2l0aEluZGV4KE9yZCkoW10gYXMgc3RyaW5nW10sIChrLCBiLCBhKSA9PiBbLi4uYiwgYCR7a30tJHthfWBdKSh4KSwgW1xuICogICBcImEtZm9vXCIsXG4gKiAgIFwiYi1mYWxzZVwiLFxuICogICBcImMtM1wiLFxuICogXSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXgoXG4gIE86IE9yZDxzdHJpbmc+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oYjogQiwgZjogKGs6IEssIGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogUmVjb3JkPEssIEE+KSA9PiBCXG4vKipcbiAqIFVzZSB0aGUgb3ZlcmxvYWQgY29uc3RyYWluZWQgYnkgYE9yZGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4PEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KGI6IEIsIGY6IChrOiBLLCBiOiBCLCBhOiBBKSA9PiBCKTogKGZhOiBSZWNvcmQ8SywgQT4pID0+IEJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXg8QSwgQj4oXG4gIC4uLmFyZ3M6IFtPcmQ8c3RyaW5nPl0gfCBbQiwgKGs6IHN0cmluZywgYjogQiwgYTogQSkgPT4gQl1cbik6ICgoYjogQiwgZjogKGs6IHN0cmluZywgYjogQiwgYTogQSkgPT4gQikgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikgfCAoKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikge1xuICByZXR1cm4gYXJncy5sZW5ndGggPT09IDEgPyBSUi5yZWR1Y2VXaXRoSW5kZXgoYXJnc1swXSkgOiBSUi5yZWR1Y2VXaXRoSW5kZXgoUy5PcmQpKC4uLmFyZ3MpXG59XG5cbi8qKlxuICogTWFwIGFuZCBmb2xkIGEgYFJlY29yZGAuXG4gKiBNYXAgdGhlIGBSZWNvcmRgIHBhc3NpbmcgZWFjaCBrZXkvdmFsdWUgcGFpciB0byB0aGUgaXRlcmF0aW5nIGZ1bmN0aW9uLlxuICogVGhlbiBmb2xkIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBwcm92aWRlZCBgTW9ub2lkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZm9sZE1hcFdpdGhJbmRleCB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqIGltcG9ydCB7IE9yZCB9IGZyb20gXCJmcC10cy9zdHJpbmdcIjtcbiAqIGltcG9ydCB7IE1vbm9pZCB9IGZyb20gXCJmcC10cy9Nb25vaWRcIjtcbiAqXG4gKiBjb25zdCBtOiBNb25vaWQ8c3RyaW5nPiA9IHsgZW1wdHk6IFwiXCIsIGNvbmNhdDogKHg6IHN0cmluZywgeTogc3RyaW5nKSA9PiAoeCA/IGAke3h9IC0+ICR7eX1gIDogYCR7eX1gKSB9O1xuICogY29uc3QgZiA9IChrOnN0cmluZywgYTogbnVtYmVyKSA9PiBgJHtrfS0ke2F9YFxuICogY29uc3QgeCA9IHsgYzogMywgYTogMSwgYjogMiB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmb2xkTWFwV2l0aEluZGV4KE9yZCkobSkoZikoeCksIFwiYS0xIC0+IGItMiAtPiBjLTNcIik7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkTWFwV2l0aEluZGV4KFxuICBPOiBPcmQ8c3RyaW5nPlxuKTogPE0+KE06IE1vbm9pZDxNPikgPT4gPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KGY6IChrOiBLLCBhOiBBKSA9PiBNKSA9PiAoZmE6IFJlY29yZDxLLCBBPikgPT4gTVxuLyoqXG4gKiBVc2UgdGhlIG92ZXJsb2FkIGNvbnN0cmFpbmVkIGJ5IGBPcmRgIGluc3RlYWQuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvbGRNYXBXaXRoSW5kZXg8TT4oXG4gIE06IE1vbm9pZDxNPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KGY6IChrOiBLLCBhOiBBKSA9PiBNKSA9PiAoZmE6IFJlY29yZDxLLCBBPikgPT4gTVxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRNYXBXaXRoSW5kZXg8TT4oXG4gIE86IE9yZDxzdHJpbmc+IHwgTW9ub2lkPE0+XG4pOlxuICB8ICgoTTogTW9ub2lkPE0+KSA9PiA8QT4oZjogKGs6IHN0cmluZywgYTogQSkgPT4gTSkgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gTSlcbiAgfCAoPEE+KGY6IChrOiBzdHJpbmcsIGE6IEEpID0+IE0pID0+IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IE0pIHtcbiAgcmV0dXJuICdjb21wYXJlJyBpbiBPID8gUlIuZm9sZE1hcFdpdGhJbmRleChPKSA6IFJSLmZvbGRNYXBXaXRoSW5kZXgoUy5PcmQpKE8pXG59XG5cbi8qKlxuICogU2FtZSBhcyBgcmVkdWNlV2l0aEluZGV4YCwgYnV0IHJlZHVjZSBzdGFydGluZyBmcm9tIHRoZSByaWdodFxuICogKGkuZS4gaW4gcmV2ZXJzZSBvcmRlciwgZnJvbSB0aGUgbGFzdCB0byB0aGUgZmlyc3QgZW50cnkgYWNjb3JkaW5nIHRvXG4gKiB0aGUgZ2l2ZW4gYE9yZGApLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZWR1Y2VSaWdodFdpdGhJbmRleCB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqIGltcG9ydCB7IE9yZCB9IGZyb20gXCJmcC10cy9zdHJpbmdcIjtcbiAqXG4gKiBjb25zdCB4ID0geyBjOiAzLCBhOiBcImZvb1wiLCBiOiBmYWxzZSB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyZWR1Y2VSaWdodFdpdGhJbmRleChPcmQpKFtdIGFzIHN0cmluZ1tdLCAoaywgYSwgYikgPT4gWy4uLmIsIGAke2t9LSR7YX1gXSkoeCksIFtcbiAqICAgXCJjLTNcIixcbiAqICAgXCJiLWZhbHNlXCIsXG4gKiAgIFwiYS1mb29cIixcbiAqIF0pO1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmlnaHRXaXRoSW5kZXgoXG4gIE86IE9yZDxzdHJpbmc+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oYjogQiwgZjogKGs6IEssIGE6IEEsIGI6IEIpID0+IEIpID0+IChmYTogUmVjb3JkPEssIEE+KSA9PiBCXG4vKipcbiAqIFVzZSB0aGUgb3ZlcmxvYWQgY29uc3RyYWluZWQgYnkgYE9yZGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmlnaHRXaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQSwgQj4oYjogQiwgZjogKGs6IEssIGE6IEEsIGI6IEIpID0+IEIpOiAoZmE6IFJlY29yZDxLLCBBPikgPT4gQlxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0V2l0aEluZGV4PEEsIEI+KFxuICAuLi5hcmdzOiBbT3JkPHN0cmluZz5dIHwgW0IsIChrOiBzdHJpbmcsIGE6IEEsIGI6IEIpID0+IEJdXG4pOiAoKGI6IEIsIGY6IChrOiBzdHJpbmcsIGE6IEEsIGI6IEIpID0+IEIpID0+IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IEIpIHwgKChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IEIpIHtcbiAgcmV0dXJuIGFyZ3MubGVuZ3RoID09PSAxID8gUlIucmVkdWNlUmlnaHRXaXRoSW5kZXgoYXJnc1swXSkgOiBSUi5yZWR1Y2VSaWdodFdpdGhJbmRleChTLk9yZCkoLi4uYXJncylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgUmVjb3JkYCB3aXRoIG9uZSBrZXkvdmFsdWUgcGFpci5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc2luZ2xldG9uIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiO1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc2luZ2xldG9uKFwiYVwiLCAxKSwgeyBhOiAxIH0pO1xuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc2luZ2xldG9uOiA8QT4oazogc3RyaW5nLCBhOiBBKSA9PiBSZWNvcmQ8c3RyaW5nLCBBPiA9IFJSLnNpbmdsZXRvblxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VXaXRoSW5kZXg8RiBleHRlbmRzIFVSSVMzPihcbiAgRjogQXBwbGljYXRpdmUzPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgUiwgRSwgQSwgQj4oXG4gIGY6IChrOiBLLCBhOiBBKSA9PiBLaW5kMzxGLCBSLCBFLCBCPlxuKSA9PiAodGE6IFJlY29yZDxLLCBBPikgPT4gS2luZDM8RiwgUiwgRSwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlV2l0aEluZGV4PEYgZXh0ZW5kcyBVUklTMywgRT4oXG4gIEY6IEFwcGxpY2F0aXZlM0M8RiwgRT5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBSLCBBLCBCPihcbiAgZjogKGs6IEssIGE6IEEpID0+IEtpbmQzPEYsIFIsIEUsIEI+XG4pID0+ICh0YTogUmVjb3JkPEssIEE+KSA9PiBLaW5kMzxGLCBSLCBFLCBSZWNvcmQ8SywgQj4+XG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VXaXRoSW5kZXg8RiBleHRlbmRzIFVSSVMyPihcbiAgRjogQXBwbGljYXRpdmUyPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgRSwgQSwgQj4oZjogKGs6IEssIGE6IEEpID0+IEtpbmQyPEYsIEUsIEI+KSA9PiAodGE6IFJlY29yZDxLLCBBPikgPT4gS2luZDI8RiwgRSwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlV2l0aEluZGV4PEYgZXh0ZW5kcyBVUklTMiwgRT4oXG4gIEY6IEFwcGxpY2F0aXZlMkM8RiwgRT5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihmOiAoazogSywgYTogQSkgPT4gS2luZDI8RiwgRSwgQj4pID0+ICh0YTogUmVjb3JkPEssIEE+KSA9PiBLaW5kMjxGLCBFLCBSZWNvcmQ8SywgQj4+XG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VXaXRoSW5kZXg8RiBleHRlbmRzIFVSSVM+KFxuICBGOiBBcHBsaWNhdGl2ZTE8Rj5cbik6IDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCPihmOiAoazogSywgYTogQSkgPT4gS2luZDxGLCBCPikgPT4gKHRhOiBSZWNvcmQ8SywgQT4pID0+IEtpbmQ8RiwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlV2l0aEluZGV4PEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KGY6IChrOiBLLCBhOiBBKSA9PiBIS1Q8RiwgQj4pID0+ICh0YTogUmVjb3JkPEssIEE+KSA9PiBIS1Q8RiwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlV2l0aEluZGV4PEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogPEEsIEI+KGY6IChrOiBzdHJpbmcsIGE6IEEpID0+IEhLVDxGLCBCPikgPT4gKHRhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gSEtUPEYsIFJlY29yZDxzdHJpbmcsIEI+PiB7XG4gIHJldHVybiBSUi50cmF2ZXJzZVdpdGhJbmRleChGKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2U8RiBleHRlbmRzIFVSSVMzPihcbiAgRjogQXBwbGljYXRpdmUzPEY+XG4pOiA8UiwgRSwgQSwgQj4oZjogKGE6IEEpID0+IEtpbmQzPEYsIFIsIEUsIEI+KSA9PiA8SyBleHRlbmRzIHN0cmluZz4odGE6IFJlY29yZDxLLCBBPikgPT4gS2luZDM8RiwgUiwgRSwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlPEYgZXh0ZW5kcyBVUklTMywgRT4oXG4gIEY6IEFwcGxpY2F0aXZlM0M8RiwgRT5cbik6IDxSLCBBLCBCPihmOiAoYTogQSkgPT4gS2luZDM8RiwgUiwgRSwgQj4pID0+IDxLIGV4dGVuZHMgc3RyaW5nPih0YTogUmVjb3JkPEssIEE+KSA9PiBLaW5kMzxGLCBSLCBFLCBSZWNvcmQ8SywgQj4+XG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2U8RiBleHRlbmRzIFVSSVMyPihcbiAgRjogQXBwbGljYXRpdmUyPEY+XG4pOiA8RSwgQSwgQj4oZjogKGE6IEEpID0+IEtpbmQyPEYsIEUsIEI+KSA9PiA8SyBleHRlbmRzIHN0cmluZz4odGE6IFJlY29yZDxLLCBBPikgPT4gS2luZDI8RiwgRSwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlPEYgZXh0ZW5kcyBVUklTMiwgRT4oXG4gIEY6IEFwcGxpY2F0aXZlMkM8RiwgRT5cbik6IDxBLCBCPihmOiAoYTogQSkgPT4gS2luZDI8RiwgRSwgQj4pID0+IDxLIGV4dGVuZHMgc3RyaW5nPih0YTogUmVjb3JkPEssIEE+KSA9PiBLaW5kMjxGLCBFLCBSZWNvcmQ8SywgQj4+XG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2U8RiBleHRlbmRzIFVSSVM+KFxuICBGOiBBcHBsaWNhdGl2ZTE8Rj5cbik6IDxBLCBCPihmOiAoYTogQSkgPT4gS2luZDxGLCBCPikgPT4gPEsgZXh0ZW5kcyBzdHJpbmc+KHRhOiBSZWNvcmQ8SywgQT4pID0+IEtpbmQ8RiwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlPEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogPEEsIEI+KGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IDxLIGV4dGVuZHMgc3RyaW5nPih0YTogUmVjb3JkPEssIEE+KSA9PiBIS1Q8RiwgUmVjb3JkPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlPEY+KFxuICBGOiBBcHBsaWNhdGl2ZTxGPlxuKTogPEEsIEI+KGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+ICh0YTogUmVjb3JkPHN0cmluZywgQT4pID0+IEhLVDxGLCBSZWNvcmQ8c3RyaW5nLCBCPj4ge1xuICByZXR1cm4gUlIudHJhdmVyc2UoRilcbn1cblxuLyoqXG4gKiBgUmVjb3JkYCBzZXF1ZW5jaW5nLFxuICogaS5lLiwgdGFrZSBhIGBSZWNvcmRgIGluIHdoaWNoIGVsZW1lbnRzIGFyZSBtb25hZHNcbiAqIGFuZCByZXR1cm4gYSBtb25hZCBvZiBhIGBSZWNvcmRgIG9mIHRoZSBiYXNlIHR5cGVzLlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGZvciBpbnN0YW5jZSBzaG93cyBzZXF1ZW5jaW5nXG4gKiBhIGBSZWNvcmQ8c3RyaW5nLCBPcHRpb248bnVtYmVyPj5gXG4gKiBpbnRvIGFuIGBPcHRpb248UmVjb3JkPHN0cmluZywgbnVtYmVyPj5gLlxuICpcbiAqIGBzZXF1ZW5jZWAgaW4gYFJlY29yZGAgaXMgZXF1aXZhbGVudCB0byBgc2VxdWVuY2VTYCBpbiBgQXBwbHkudHNgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gXCJmcC10c1wiO1xuICogaW1wb3J0IHsgc2VxdWVuY2VTIH0gZnJvbSBcImZwLXRzL0FwcGx5XCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgc2VxdWVuY2Uob3B0aW9uLkFwcGxpY2F0aXZlKSh7IGE6IG9wdGlvbi5zb21lKDEpLCBiOiBvcHRpb24uc29tZSgyKSB9KSxcbiAqICAgb3B0aW9uLnNvbWUoeyBhOiAxLCBiOiAyIH0pXG4gKiApO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzZXF1ZW5jZShvcHRpb24uQXBwbGljYXRpdmUpKHsgYTogb3B0aW9uLnNvbWUoMSksIGI6IG9wdGlvbi5ub25lIH0pLCBvcHRpb24ubm9uZSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBzZXF1ZW5jZShvcHRpb24uQXBwbGljYXRpdmUpKHsgYTogb3B0aW9uLnNvbWUoMSksIGI6IG9wdGlvbi5zb21lKDIpIH0pLFxuICogICBzZXF1ZW5jZVMob3B0aW9uLkFwcGxpY2F0aXZlKSh7IGE6IG9wdGlvbi5zb21lKDEpLCBiOiBvcHRpb24uc29tZSgyKSB9KVxuICogKTtcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlPEYgZXh0ZW5kcyBVUklTMz4oXG4gIEY6IEFwcGxpY2F0aXZlMzxGPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIFIsIEUsIEE+KHRhOiBSZWNvcmQ8SywgS2luZDM8RiwgUiwgRSwgQT4+KSA9PiBLaW5kMzxGLCBSLCBFLCBSZWNvcmQ8SywgQT4+XG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2U8RiBleHRlbmRzIFVSSVMzLCBFPihcbiAgRjogQXBwbGljYXRpdmUzQzxGLCBFPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIFIsIEE+KHRhOiBSZWNvcmQ8SywgS2luZDM8RiwgUiwgRSwgQT4+KSA9PiBLaW5kMzxGLCBSLCBFLCBSZWNvcmQ8SywgQT4+XG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2U8RiBleHRlbmRzIFVSSVMyPihcbiAgRjogQXBwbGljYXRpdmUyPEY+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgRSwgQT4odGE6IFJlY29yZDxLLCBLaW5kMjxGLCBFLCBBPj4pID0+IEtpbmQyPEYsIEUsIFJlY29yZDxLLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZTxGIGV4dGVuZHMgVVJJUzIsIEU+KFxuICBGOiBBcHBsaWNhdGl2ZTJDPEYsIEU+XG4pOiA8SyBleHRlbmRzIHN0cmluZywgQT4odGE6IFJlY29yZDxLLCBLaW5kMjxGLCBFLCBBPj4pID0+IEtpbmQyPEYsIEUsIFJlY29yZDxLLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZTxGIGV4dGVuZHMgVVJJUz4oXG4gIEY6IEFwcGxpY2F0aXZlMTxGPlxuKTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KHRhOiBSZWNvcmQ8SywgS2luZDxGLCBBPj4pID0+IEtpbmQ8RiwgUmVjb3JkPEssIEE+PlxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlPEY+KEY6IEFwcGxpY2F0aXZlPEY+KTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KHRhOiBSZWNvcmQ8SywgSEtUPEYsIEE+PikgPT4gSEtUPEYsIFJlY29yZDxLLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZTxGPihGOiBBcHBsaWNhdGl2ZTxGPik6IDxBPih0YTogUmVjb3JkPHN0cmluZywgSEtUPEYsIEE+PikgPT4gSEtUPEYsIFJlY29yZDxzdHJpbmcsIEE+PiB7XG4gIHJldHVybiBSUi5zZXF1ZW5jZShGKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXaXRoZXJhYmxlXG4gKiBAc2luY2UgMi42LjVcbiAqL1xuZXhwb3J0IGNvbnN0IHdpdGhlcjogUGlwZWFibGVXaXRoZXIxPFVSST4gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlPEY+XG4pOiAoPEEsIEI+KGY6IChhOiBBKSA9PiBIS1Q8RiwgT3B0aW9uPEI+PikgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gSEtUPEYsIFJlY29yZDxzdHJpbmcsIEI+PikgPT4ge1xuICBjb25zdCB0cmF2ZXJzZUYgPSB0cmF2ZXJzZShGKVxuICByZXR1cm4gKGYpID0+IChmYSkgPT4gRi5tYXAocGlwZShmYSwgdHJhdmVyc2VGKGYpKSwgY29tcGFjdClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2l0aGVyYWJsZVxuICogQHNpbmNlIDIuNi41XG4gKi9cbmV4cG9ydCBjb25zdCB3aWx0OiBQaXBlYWJsZVdpbHQxPFVSST4gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlPEY+XG4pOiAoPEEsIEIsIEM+KFxuICBmOiAoYTogQSkgPT4gSEtUPEYsIEVpdGhlcjxCLCBDPj5cbikgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gSEtUPEYsIFNlcGFyYXRlZDxSZWNvcmQ8c3RyaW5nLCBCPiwgUmVjb3JkPHN0cmluZywgQz4+PikgPT4ge1xuICBjb25zdCB0cmF2ZXJzZUYgPSB0cmF2ZXJzZShGKVxuICByZXR1cm4gKGYpID0+IChmYSkgPT4gRi5tYXAocGlwZShmYSwgdHJhdmVyc2VGKGYpKSwgc2VwYXJhdGUpXG59XG5cbi8qKlxuICogTWFwcyBhIGBSZWNvcmRgIHdpdGggYSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gYEVpdGhlcmAgYW5kXG4gKiBwYXJ0aXRpb25zIHRoZSByZXN1bHRpbmcgYFJlY29yZGAgaW50byBgTGVmdGBzIGFuZCBgUmlnaHRgcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGFydGl0aW9uTWFwV2l0aEluZGV4IH0gZnJvbSBcImZwLXRzL1JlY29yZFwiXG4gKiBpbXBvcnQgeyBlaXRoZXIgfSBmcm9tIFwiZnAtdHNcIlxuICpcbiAqIGNvbnN0IGYgPSAoa2V5OiBzdHJpbmcsIGE6IG51bWJlcikgPT5cbiAqICAgYSA+PSAwID8gZWl0aGVyLnJpZ2h0KGAke2tleX0gaXMgPj0gMCAoJHthfSlgKSA6IGVpdGhlci5sZWZ0KGAke2tleX0gaXMgPCAwICgke2F9KWApO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwYXJ0aXRpb25NYXBXaXRoSW5kZXgoZikoeyBhOiAtMSwgYjogMiwgYzogMTIzIH0pLCB7XG4gKiAgIGxlZnQ6IHtcbiAqICAgICBhOiBcImEgaXMgPCAwICgtMSlcIixcbiAqICAgfSxcbiAqICAgcmlnaHQ6IHtcbiAqICAgICBiOiBcImIgaXMgPj0gMCAoMilcIixcbiAqICAgICBjOiBcImMgaXMgPj0gMCAoMTIzKVwiLFxuICogICB9LFxuICogfSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb25NYXBXaXRoSW5kZXg6IDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCLCBDPihcbiAgZjogKGtleTogSywgYTogQSkgPT4gRWl0aGVyPEIsIEM+XG4pID0+IChmYTogUmVjb3JkPEssIEE+KSA9PiBTZXBhcmF0ZWQ8UmVjb3JkPHN0cmluZywgQj4sIFJlY29yZDxzdHJpbmcsIEM+PiA9IFJSLnBhcnRpdGlvbk1hcFdpdGhJbmRleFxuXG4vKipcbiAqIFBhcnRpdGlvbiBhIGBSZWNvcmRgIGludG8gdHdvIHBhcnRzIGFjY29yZGluZyB0byBhIHByZWRpY2F0ZVxuICogdGhhdCB0YWtlcyBhIGtleSBhbmQgYSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGFydGl0aW9uV2l0aEluZGV4IH0gZnJvbSBcImZwLXRzL1JlY29yZFwiXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGFydGl0aW9uV2l0aEluZGV4KChrZXk6IHN0cmluZywgYTogbnVtYmVyKSA9PiBrZXkubGVuZ3RoIDw9IDEgJiYgYSA+IDApKHsgYTogLTEsIGI6IDIsIGNjYzogNyB9KSxcbiAqICAge1xuICogICAgIGxlZnQ6IHtcbiAqICAgICAgIGE6IC0xLFxuICogICAgICAgY2NjOiA3LFxuICogICAgIH0sXG4gKiAgICAgcmlnaHQ6IHtcbiAqICAgICAgIGI6IDIsXG4gKiAgICAgfSxcbiAqICAgfVxuICogKTtcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbldpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCIGV4dGVuZHMgQT4oXG4gIHJlZmluZW1lbnRXaXRoSW5kZXg6IFJlZmluZW1lbnRXaXRoSW5kZXg8SywgQSwgQj5cbik6IChmYTogUmVjb3JkPEssIEE+KSA9PiBTZXBhcmF0ZWQ8UmVjb3JkPHN0cmluZywgQT4sIFJlY29yZDxzdHJpbmcsIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbldpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBPihcbiAgcHJlZGljYXRlV2l0aEluZGV4OiBQcmVkaWNhdGVXaXRoSW5kZXg8SywgQT5cbik6IDxCIGV4dGVuZHMgQT4oZmI6IFJlY29yZDxLLCBCPikgPT4gU2VwYXJhdGVkPFJlY29yZDxzdHJpbmcsIEI+LCBSZWNvcmQ8c3RyaW5nLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PEssIEE+XG4pOiAoZmE6IFJlY29yZDxLLCBBPikgPT4gU2VwYXJhdGVkPFJlY29yZDxzdHJpbmcsIEE+LCBSZWNvcmQ8c3RyaW5nLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8QT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PHN0cmluZywgQT5cbik6IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IFNlcGFyYXRlZDxSZWNvcmQ8c3RyaW5nLCBBPiwgUmVjb3JkPHN0cmluZywgQT4+IHtcbiAgcmV0dXJuIFJSLnBhcnRpdGlvbldpdGhJbmRleChwcmVkaWNhdGVXaXRoSW5kZXgpXG59XG5cbi8qKlxuICogTWFwcyBhIGBSZWNvcmRgIHdpdGggYW4gaXRlcmF0aW5nIGZ1bmN0aW9uIHRoYXQgdGFrZXMga2V5IGFuZCB2YWx1ZSBhbmRcbiAqIHJldHVybnMgYW4gYE9wdGlvbmAsIGtlZXBpbmcgb25seSB0aGUgYFNvbWVgIHZhbHVlcyBhbmQgZGlzY2FyZGluZyBgTm9uZWBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaWx0ZXJNYXBXaXRoSW5kZXggfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCJcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gXCJmcC10c1wiXG4gKlxuICogY29uc3QgZiA9IChrZXk6IHN0cmluZywgYTogbnVtYmVyKSA9PiAoYSA+PSAwID8gb3B0aW9uLnNvbWUoYCR7a2V5fSR7YX1gKSA6IG9wdGlvbi5ub25lKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmlsdGVyTWFwV2l0aEluZGV4KGYpKHsgYTogLTEsIGI6IDIsIGM6IDMgfSksIHtcbiAqICAgYjogXCJiMlwiLFxuICogICBjOiBcImMzXCIsXG4gKiB9KTtcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck1hcFdpdGhJbmRleDogPEsgZXh0ZW5kcyBzdHJpbmcsIEEsIEI+KFxuICBmOiAoa2V5OiBLLCBhOiBBKSA9PiBPcHRpb248Qj5cbikgPT4gKGZhOiBSZWNvcmQ8SywgQT4pID0+IFJlY29yZDxzdHJpbmcsIEI+ID0gUlIuZmlsdGVyTWFwV2l0aEluZGV4XG5cbi8qKlxuICogUHJvZHVjZSBhIG5ldyBgUmVjb3JkYCBrZWVwaW5nIG9ubHkgdGhlIGVudHJpZXMgdGhhdCBzYXRpc2Z5XG4gKiBhIHByZWRpY2F0ZSB0YWtpbmcga2V5IGFuZCB2YWx1ZSBhcyBpbnB1dC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmlsdGVyV2l0aEluZGV4IH0gZnJvbSBcImZwLXRzL1JlY29yZFwiXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgZmlsdGVyV2l0aEluZGV4KChzOiBzdHJpbmcsIHY6IG51bWJlcikgPT4gcy5sZW5ndGggPD0gMSAmJiB2ID4gMCkoeyBhOiAxLCBiOiAtMiwgY2NjOiAzIH0pLFxuICogICB7XG4gKiAgICAgYTogMSxcbiAqICAgfVxuICogKTtcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcldpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBLCBCIGV4dGVuZHMgQT4oXG4gIHJlZmluZW1lbnRXaXRoSW5kZXg6IFJlZmluZW1lbnRXaXRoSW5kZXg8SywgQSwgQj5cbik6IChmYTogUmVjb3JkPEssIEE+KSA9PiBSZWNvcmQ8c3RyaW5nLCBCPlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcldpdGhJbmRleDxLIGV4dGVuZHMgc3RyaW5nLCBBPihcbiAgcHJlZGljYXRlV2l0aEluZGV4OiBQcmVkaWNhdGVXaXRoSW5kZXg8SywgQT5cbik6IDxCIGV4dGVuZHMgQT4oZmI6IFJlY29yZDxLLCBCPikgPT4gUmVjb3JkPHN0cmluZywgQj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8SyBleHRlbmRzIHN0cmluZywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PEssIEE+XG4pOiAoZmE6IFJlY29yZDxLLCBBPikgPT4gUmVjb3JkPHN0cmluZywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8QT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PHN0cmluZywgQT5cbik6IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IFJlY29yZDxzdHJpbmcsIEE+IHtcbiAgcmV0dXJuIFJSLmZpbHRlcldpdGhJbmRleChwcmVkaWNhdGVXaXRoSW5kZXgpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFJlY29yZGAgZnJvbSBhIGZvbGRhYmxlIGNvbGxlY3Rpb24gb2Yga2V5L3ZhbHVlIHBhaXJzLCB1c2luZyB0aGVcbiAqIHNwZWNpZmllZCBgTWFnbWFgIHRvIGNvbWJpbmUgdmFsdWVzIGZvciBkdXBsaWNhdGUga2V5cy5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGIGV4dGVuZHMgVVJJUzMsIEE+KFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGUzPEY+XG4pOiA8UiwgRT4oZmthOiBLaW5kMzxGLCBSLCBFLCBbc3RyaW5nLCBBXT4pID0+IFJlY29yZDxzdHJpbmcsIEE+XG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlPEYgZXh0ZW5kcyBVUklTMiwgQT4oXG4gIE06IE1hZ21hPEE+LFxuICBGOiBGb2xkYWJsZTI8Rj5cbik6IDxFPihma2E6IEtpbmQyPEYsIEUsIFtzdHJpbmcsIEFdPikgPT4gUmVjb3JkPHN0cmluZywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGU8RiBleHRlbmRzIFVSSVMsIEE+KFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGUxPEY+XG4pOiAoZmthOiBLaW5kPEYsIFtzdHJpbmcsIEFdPikgPT4gUmVjb3JkPHN0cmluZywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGU8RiwgQT4oTTogTWFnbWE8QT4sIEY6IEZvbGRhYmxlSEtUPEY+KTogKGZrYTogSEtUPEYsIFtzdHJpbmcsIEFdPikgPT4gUmVjb3JkPHN0cmluZywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGU8RiwgQT4oTTogTWFnbWE8QT4sIEY6IEZvbGRhYmxlSEtUPEY+KTogKGZrYTogSEtUPEYsIFtzdHJpbmcsIEFdPikgPT4gUmVjb3JkPHN0cmluZywgQT4ge1xuICByZXR1cm4gUlIuZnJvbUZvbGRhYmxlKE0sIEYpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFJlY29yZGAgZnJvbSBhIGZvbGRhYmxlIGNvbGxlY3Rpb24gdXNpbmcgdGhlIHNwZWNpZmllZCBmdW5jdGlvbnMgdG9cbiAqXG4gKiAtIG1hcCB0byBrZXkvdmFsdWUgcGFpcnNcbiAqIC0gY29tYmluZSB2YWx1ZXMgZm9yIGR1cGxpY2F0ZSBrZXlzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBsYXN0IH0gZnJvbSAnZnAtdHMvU2VtaWdyb3VwJ1xuICogaW1wb3J0IHsgRm9sZGFibGUsIHppcCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqIGltcG9ydCB7IGZyb21Gb2xkYWJsZU1hcCB9IGZyb20gJ2ZwLXRzL1JlY29yZCdcbiAqXG4gKiBleHBvcnQgY29uc3QgemlwT2JqZWN0ID0gPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KGtleXM6IEFycmF5PEs+LCB2YWx1ZXM6IEFycmF5PEE+KTogUmVjb3JkPEssIEE+ID0+XG4gKiAgIGZyb21Gb2xkYWJsZU1hcChsYXN0PEE+KCksIEZvbGRhYmxlKSh6aXAoa2V5cywgdmFsdWVzKSwgaWRlbnRpdHkpXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh6aXBPYmplY3QoWydhJywgJ2InXSwgWzEsIDIsIDNdKSwgeyBhOiAxLCBiOiAyIH0pXG4gKlxuICogaW50ZXJmYWNlIFVzZXIge1xuICogICByZWFkb25seSBpZDogc3RyaW5nXG4gKiAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICogfVxuICpcbiAqIGNvbnN0IHVzZXJzOiBBcnJheTxVc2VyPiA9IFtcbiAqICAgeyBpZDogJ2lkMScsIG5hbWU6ICduYW1lMScgfSxcbiAqICAgeyBpZDogJ2lkMicsIG5hbWU6ICduYW1lMicgfSxcbiAqICAgeyBpZDogJ2lkMScsIG5hbWU6ICduYW1lMycgfVxuICogXVxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZnJvbUZvbGRhYmxlTWFwKGxhc3Q8VXNlcj4oKSwgRm9sZGFibGUpKHVzZXJzLCB1c2VyID0+IFt1c2VyLmlkLCB1c2VyXSksIHtcbiAqICAgaWQxOiB7IGlkOiAnaWQxJywgbmFtZTogJ25hbWUzJyB9LFxuICogICBpZDI6IHsgaWQ6ICdpZDInLCBuYW1lOiAnbmFtZTInIH1cbiAqIH0pXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGVNYXA8RiBleHRlbmRzIFVSSVMzLCBCPihcbiAgTTogTWFnbWE8Qj4sXG4gIEY6IEZvbGRhYmxlMzxGPlxuKTogPFIsIEUsIEE+KGZhOiBLaW5kMzxGLCBSLCBFLCBBPiwgZjogKGE6IEEpID0+IFtzdHJpbmcsIEJdKSA9PiBSZWNvcmQ8c3RyaW5nLCBCPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZU1hcDxGIGV4dGVuZHMgVVJJUzIsIEI+KFxuICBNOiBNYWdtYTxCPixcbiAgRjogRm9sZGFibGUyPEY+XG4pOiA8RSwgQT4oZmE6IEtpbmQyPEYsIEUsIEE+LCBmOiAoYTogQSkgPT4gW3N0cmluZywgQl0pID0+IFJlY29yZDxzdHJpbmcsIEI+XG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlTWFwPEYgZXh0ZW5kcyBVUklTLCBCPihcbiAgTTogTWFnbWE8Qj4sXG4gIEY6IEZvbGRhYmxlMTxGPlxuKTogPEE+KGZhOiBLaW5kPEYsIEE+LCBmOiAoYTogQSkgPT4gW3N0cmluZywgQl0pID0+IFJlY29yZDxzdHJpbmcsIEI+XG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlTWFwPEYsIEI+KFxuICBNOiBNYWdtYTxCPixcbiAgRjogRm9sZGFibGVIS1Q8Rj5cbik6IDxBPihmYTogSEtUPEYsIEE+LCBmOiAoYTogQSkgPT4gW3N0cmluZywgQl0pID0+IFJlY29yZDxzdHJpbmcsIEI+XG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlTWFwPEYsIEI+KFxuICBNOiBNYWdtYTxCPixcbiAgRjogRm9sZGFibGVIS1Q8Rj5cbik6IDxBPihmYTogSEtUPEYsIEE+LCBmOiAoYTogQSkgPT4gW3N0cmluZywgQl0pID0+IFJlY29yZDxzdHJpbmcsIEI+IHtcbiAgcmV0dXJuIFJSLmZyb21Gb2xkYWJsZU1hcChNLCBGKVxufVxuXG4vKipcbiAqIFRlc3QgaWYgZXZlcnkgdmFsdWUgaW4gYSBgUmVjb3JkYCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZXZlcnkgfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCJcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGV2ZXJ5KChuOiBudW1iZXIpID0+IG4gPj0gMCkoeyBhOiAxLCBiOiAyIH0pLCB0cnVlKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZXZlcnkoKG46IG51bWJlcikgPT4gbiA+PSAwKSh7IGE6IDEsIGI6IC0xIH0pLCBmYWxzZSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBldmVyeTogPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiAocjogUmVjb3JkPHN0cmluZywgQT4pID0+IGJvb2xlYW4gPSBSUi5ldmVyeVxuXG4vKipcbiAqIFRlc3QgaWYgYXQgbGVhc3Qgb25lIHZhbHVlIGluIGEgYFJlY29yZGAgc2F0aXNmaWVzIHRoZSBwcmVkaWNhdGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvbWUgfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCJcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvbWUoKG46IG51bWJlcikgPT4gbiA+PSAwKSh7IGE6IDEsIGI6IC0yIH0pLCB0cnVlKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc29tZSgobjogbnVtYmVyKSA9PiBuID49IDApKHsgYTogLTEsIGI6IC0yIH0pLCBmYWxzZSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzb21lOiA8QT4ocHJlZGljYXRlOiAoYTogQSkgPT4gYm9vbGVhbikgPT4gKHI6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBib29sZWFuID0gUlIuc29tZVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogR2l2ZW4gYW4gYEVxYCBjaGVja3MgaWYgYSBgUmVjb3JkYCBjb250YWlucyBhbiBlbnRyeSB3aXRoXG4gKiB2YWx1ZSBlcXVhbCB0byBhIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBlbGVtIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiXG4gKiBpbXBvcnQgeyBudW1iZXIgfSBmcm9tIFwiZnAtdHNcIlxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZWxlbShudW1iZXIuRXEpKDEyMywgeyBmb286IDEyMywgYmFyOiAyMzQgfSksIHRydWUpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChlbGVtKG51bWJlci5FcSkoLTcsIHsgZm9vOiAxMjMsIGJhcjogMjM0IH0pLCBmYWxzZSk7XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBlbGVtOiA8QT4oXG4gIEU6IEVxPEE+XG4pID0+IHtcbiAgKGE6IEEpOiAoZmE6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBib29sZWFuXG4gIChhOiBBLCBmYTogUmVjb3JkPHN0cmluZywgQT4pOiBib29sZWFuXG59ID0gUlIuZWxlbVxuXG4vKipcbiAqIFVuaW9uIG9mIHR3byBgUmVjb3JkYHMuXG4gKiBUYWtlcyB0d28gYFJlY29yZGBzIGFuZCBwcm9kdWNlcyBhIGBSZWNvcmRgIGNvbWJpbmluZyBhbGwgdGhlXG4gKiBlbnRyaWVzIG9mIHRoZSB0d28gaW5wdXRzLlxuICogSXQgdXNlcyB0aGUgYGNvbmNhdGAgZnVuY3Rpb24gb2YgdGhlIHByb3ZpZGVkIGBNYWdtYWAgdG9cbiAqIGNvbWJpbmUgdGhlIGVsZW1lbnRzIHdpdGggdGhlIHNhbWUga2V5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB1bmlvbiB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqIGltcG9ydCB7IE1hZ21hIH0gZnJvbSBcImZwLXRzL01hZ21hXCI7XG4gKlxuICogY29uc3QgbTE6IE1hZ21hPG51bWJlcj4gPSB7IGNvbmNhdDogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB4ICsgeSB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1bmlvbihtMSkoeyBhOiAzLCBjOiAzIH0pKHsgYTogMSwgYjogMiB9KSwgeyBhOiA0LCBiOiAyLCBjOiAzIH0pO1xuICogY29uc3QgbTI6IE1hZ21hPG51bWJlcj4gPSB7IGNvbmNhdDogKHg6IG51bWJlcikgPT4geCB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1bmlvbihtMikoeyBhOiAzLCBjOiAzIH0pKHsgYTogMSwgYjogMiB9KSwgeyBhOiAxLCBiOiAyLCBjOiAzIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdW5pb24gPSA8QT4oXG4gIE06IE1hZ21hPEE+XG4pOiAoKHNlY29uZDogUmVjb3JkPHN0cmluZywgQT4pID0+IChmaXJzdDogUmVjb3JkPHN0cmluZywgQT4pID0+IFJlY29yZDxzdHJpbmcsIEE+KSA9PiB7XG4gIGNvbnN0IHVuaW9uTSA9IFJSLnVuaW9uKE0pXG4gIHJldHVybiAoc2Vjb25kKSA9PiAoZmlyc3QpID0+IHtcbiAgICBpZiAoaXNFbXB0eShmaXJzdCkpIHtcbiAgICAgIHJldHVybiB7IC4uLnNlY29uZCB9XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHNlY29uZCkpIHtcbiAgICAgIHJldHVybiB7IC4uLmZpcnN0IH1cbiAgICB9XG4gICAgcmV0dXJuIHVuaW9uTShzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogSW50ZXJzZWN0aW9uIG9mIHR3byBgUmVjb3JkYHMuXG4gKiBUYWtlcyB0d28gYFJlY29yZGBzIGFuZCBwcm9kdWNlcyBhIGBSZWNvcmRgIGNvbWJpbmluZyBvbmx5IHRoZVxuICogZW50cmllcyBvZiB0aGUgdHdvIGlucHV0c3dpdGggdGhlIHNhbWUga2V5LlxuICogSXQgdXNlcyB0aGUgYGNvbmNhdGAgZnVuY3Rpb24gb2YgdGhlIHByb3ZpZGVkIGBNYWdtYWAgdG9cbiAqIGNvbWJpbmUgdGhlIGVsZW1lbnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpbnRlcnNlY3Rpb24gfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCI7XG4gKiBpbXBvcnQgeyBNYWdtYSB9IGZyb20gXCJmcC10cy9NYWdtYVwiO1xuICpcbiAqIGNvbnN0IG0xOiBNYWdtYTxudW1iZXI+ID0geyBjb25jYXQ6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4geCArIHkgfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW50ZXJzZWN0aW9uKG0xKSh7IGE6IDMsIGM6IDMgfSkoeyBhOiAxLCBiOiAyIH0pLCB7IGE6IDR9KTtcbiAqIGNvbnN0IG0yOiBNYWdtYTxudW1iZXI+ID0geyBjb25jYXQ6ICh4OiBudW1iZXIpID0+IHggfTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW50ZXJzZWN0aW9uKG0yKSh7IGE6IDMsIGM6IDMgfSkoeyBhOiAxLCBiOiAyIH0pLCB7IGE6IDF9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGludGVyc2VjdGlvbiA9IDxBPihNOiBNYWdtYTxBPikgPT4gKHNlY29uZDogUmVjb3JkPHN0cmluZywgQT4pID0+IChcbiAgZmlyc3Q6IFJlY29yZDxzdHJpbmcsIEE+XG4pOiBSZWNvcmQ8c3RyaW5nLCBBPiA9PiB7XG4gIGlmIChpc0VtcHR5KGZpcnN0KSB8fCBpc0VtcHR5KHNlY29uZCkpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICByZXR1cm4gUlIuaW50ZXJzZWN0aW9uKE0pKHNlY29uZCkoZmlyc3QpXG59XG5cbi8qKlxuICogRGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBgUmVjb3JkYHMuXG4gKiBUYWtlcyB0d28gYFJlY29yZGBzIGFuZCBwcm9kdWNlcyBhIGBSZWNvcmRgIGNvbXBvc2VkIGJ5IHRoZVxuICogZW50cmllcyBvZiB0aGUgdHdvIGlucHV0cywgcmVtb3ZpbmcgdGhlIGVudHJpZXMgd2l0aCB0aGUgc2FtZVxuICoga2V5IGluIGJvdGggaW5wdXRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBkaWZmZXJlbmNlIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiO1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZGlmZmVyZW5jZSh7IGE6IDEgfSkoeyBhOiAxLCBiOiAyIH0pLCB7IGI6IDIgfSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGRpZmZlcmVuY2UoeyBhOiAzIH0pKHsgYTogMSwgYjogMiB9KSwgeyBiOiAyIH0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkaWZmZXJlbmNlKHsgYTogMywgYzogMyB9KSh7IGE6IDEsIGI6IDIgfSksIHsgYjogMiwgYzogMyB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2UgPSA8QT4oc2Vjb25kOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gKGZpcnN0OiBSZWNvcmQ8c3RyaW5nLCBBPik6IFJlY29yZDxzdHJpbmcsIEE+ID0+IHtcbiAgaWYgKGlzRW1wdHkoZmlyc3QpKSB7XG4gICAgcmV0dXJuIHsgLi4uc2Vjb25kIH1cbiAgfVxuICBpZiAoaXNFbXB0eShzZWNvbmQpKSB7XG4gICAgcmV0dXJuIHsgLi4uZmlyc3QgfVxuICB9XG4gIHJldHVybiBSUi5kaWZmZXJlbmNlKHNlY29uZCkoZmlyc3QpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgX21hcCA9IFJSLl9tYXBcbmNvbnN0IF9tYXBXaXRoSW5kZXggPSBSUi5fbWFwV2l0aEluZGV4XG5jb25zdCBfcmVkdWNlID0gUlIuX3JlZHVjZVxuY29uc3QgX2ZvbGRNYXAgPSBSUi5fZm9sZE1hcFxuY29uc3QgX3JlZHVjZVJpZ2h0ID0gUlIuX3JlZHVjZVJpZ2h0XG5jb25zdCBfZmlsdGVyID0gUlIuX2ZpbHRlclxuY29uc3QgX2ZpbHRlck1hcCA9IFJSLl9maWx0ZXJNYXBcbmNvbnN0IF9wYXJ0aXRpb24gPSBSUi5fcGFydGl0aW9uXG5jb25zdCBfcGFydGl0aW9uTWFwID0gUlIuX3BhcnRpdGlvbk1hcFxuY29uc3QgX3JlZHVjZVdpdGhJbmRleCA9IFJSLl9yZWR1Y2VXaXRoSW5kZXhcbmNvbnN0IF9mb2xkTWFwV2l0aEluZGV4ID0gUlIuX2ZvbGRNYXBXaXRoSW5kZXhcbmNvbnN0IF9yZWR1Y2VSaWdodFdpdGhJbmRleCA9IFJSLl9yZWR1Y2VSaWdodFdpdGhJbmRleFxuY29uc3QgX3BhcnRpdGlvbk1hcFdpdGhJbmRleCA9IFJSLl9wYXJ0aXRpb25NYXBXaXRoSW5kZXhcbmNvbnN0IF9wYXJ0aXRpb25XaXRoSW5kZXggPSBSUi5fcGFydGl0aW9uV2l0aEluZGV4XG5jb25zdCBfZmlsdGVyTWFwV2l0aEluZGV4ID0gUlIuX2ZpbHRlck1hcFdpdGhJbmRleFxuY29uc3QgX2ZpbHRlcldpdGhJbmRleCA9IFJSLl9maWx0ZXJXaXRoSW5kZXhcbmNvbnN0IF90cmF2ZXJzZSA9IFJSLl90cmF2ZXJzZVxuY29uc3QgX3NlcXVlbmNlID0gUlIuX3NlcXVlbmNlXG5jb25zdCBfdHJhdmVyc2VXaXRoSW5kZXggPSAoTzogT3JkPHN0cmluZz4pID0+IDxGPihcbiAgRjogQXBwbGljYXRpdmU8Rj5cbik6ICg8QSwgQj4odGE6IFJlY29yZDxzdHJpbmcsIEE+LCBmOiAoazogc3RyaW5nLCBhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBSZWNvcmQ8c3RyaW5nLCBCPj4pID0+IHtcbiAgY29uc3Qga2V5c08gPSBrZXlzXyhPKVxuICByZXR1cm4gPEEsIEI+KHRhOiBSZWNvcmQ8c3RyaW5nLCBBPiwgZjogKGs6IHN0cmluZywgYTogQSkgPT4gSEtUPEYsIEI+KSA9PiB7XG4gICAgY29uc3Qga3MgPSBrZXlzTyh0YSlcbiAgICBpZiAoa3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gRi5vZih7fSlcbiAgICB9XG4gICAgbGV0IGZyOiBIS1Q8RiwgUmVjb3JkPHN0cmluZywgQj4+ID0gRi5vZih7fSlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrcykge1xuICAgICAgZnIgPSBGLmFwKFxuICAgICAgICBGLm1hcChmciwgKHIpID0+IChiOiBCKSA9PiB7XG4gICAgICAgICAgcltrZXldID0gYlxuICAgICAgICAgIHJldHVybiByXG4gICAgICAgIH0pLFxuICAgICAgICBmKGtleSwgdGFba2V5XSlcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGZyXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogR2l2ZW4gYSBgUHJlZGljYXRlYCwgaXQgcHJvZHVjZXMgYSBuZXcgYFJlY29yZGAga2VlcGluZyBvbmx5IHRoZSBlbnRyaWVzIHdpdGggYVxuICogdmFsdWUgdGhhdCBzYXRpc2ZpZXMgdGhlIHByb3ZpZGVkIHByZWRpY2F0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaWx0ZXIoKHM6IHN0cmluZykgPT4gcy5sZW5ndGggPCA0KSh7IGE6IFwiZm9vXCIsIGI6IFwiYmFyXCIsIGM6IFwidmVyeWxvbmdcIiB9KSwge1xuICogICBhOiBcImZvb1wiLFxuICogICBiOiBcImJhclwiLFxuICogfSk7XG4gKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyOiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IFJlY29yZDxzdHJpbmcsIEI+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oZmI6IFJlY29yZDxzdHJpbmcsIEI+KSA9PiBSZWNvcmQ8c3RyaW5nLCBCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoZmE6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBSZWNvcmQ8c3RyaW5nLCBBPlxufSA9IFJSLmZpbHRlclxuXG4vKipcbiAqIE1hcHMgYSBgUmVjb3JkYCB3aXRoIGFuIGl0ZXJhdGluZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYE9wdGlvbmBcbiAqIGFuZCBpdCBrZWVwcyBvbmx5IHRoZSBgU29tZWAgdmFsdWVzIGRpc2NhcmRpbmcgdGhlIGBOb25lYHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbHRlck1hcCB9IGZyb20gXCJmcC10cy9SZWNvcmRcIlxuICogaW1wb3J0IHsgb3B0aW9uIH0gZnJvbSBcImZwLXRzXCJcbiAqXG4gKiBjb25zdCBmID0gKHM6IHN0cmluZykgPT4gcy5sZW5ndGggPCA0ID8gb3B0aW9uLnNvbWUoYCR7c30gaXMgc2hvcnRgKTogb3B0aW9uLm5vbmVcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmlsdGVyTWFwKGYpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiwgYzogXCJ2ZXJ5bG9uZ1wiIH0pLCB7XG4gKiAgIGE6IFwiZm9vIGlzIHNob3J0XCIsXG4gKiAgIGI6IFwiYmFyIGlzIHNob3J0XCIsXG4gKiB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJNYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gT3B0aW9uPEI+KSA9PiAoZmE6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBSZWNvcmQ8c3RyaW5nLCBCPiA9IFJSLmZpbHRlck1hcFxuXG4vKipcbiAqIFBhcnRpdGlvbiBhIGBSZWNvcmRgIGludG8gdHdvIHBhcnRzIGFjY29yZGluZyB0byBhIGBQcmVkaWNhdGVgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwYXJ0aXRpb24gfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCJcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBhcnRpdGlvbigoczogc3RyaW5nKSA9PiBzLmxlbmd0aCA8IDQpKHsgYTogXCJmb29cIiwgYjogXCJiYXJcIiwgYzogXCJ2ZXJ5bG9uZ1wiIH0pLCB7XG4gKiAgIGxlZnQ6e1xuICogICAgIGM6IFwidmVyeWxvbmdcIlxuICogICB9LFxuICogICByaWdodDoge1xuICogICAgIGE6IFwiZm9vXCIsXG4gKiAgICAgYjogXCJiYXJcIixcbiAqICAgfSxcbiAqIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbjoge1xuICA8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoXG4gICAgZmE6IFJlY29yZDxzdHJpbmcsIEE+XG4gICkgPT4gU2VwYXJhdGVkPFJlY29yZDxzdHJpbmcsIEE+LCBSZWNvcmQ8c3RyaW5nLCBCPj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihmYjogUmVjb3JkPHN0cmluZywgQj4pID0+IFNlcGFyYXRlZDxSZWNvcmQ8c3RyaW5nLCBCPiwgUmVjb3JkPHN0cmluZywgQj4+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IFNlcGFyYXRlZDxSZWNvcmQ8c3RyaW5nLCBBPiwgUmVjb3JkPHN0cmluZywgQT4+XG59ID0gUlIucGFydGl0aW9uXG5cbi8qKlxuICogTWFwcyBhIGBSZWNvcmRgIHdpdGggYSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gYEVpdGhlcmAgYW5kXG4gKiBwYXJ0aXRpb25zIHRoZSByZXN1bHRpbmcgYFJlY29yZGAgaW50byBgTGVmdGBzIGFuZCBgUmlnaHRgcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGFydGl0aW9uTWFwIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiXG4gKiBpbXBvcnQgeyBlaXRoZXIgfSBmcm9tIFwiZnAtdHNcIlxuICpcbiAqIGNvbnN0IGYgPSAoczogc3RyaW5nKSA9PiAocy5sZW5ndGggPCA0ID8gZWl0aGVyLnJpZ2h0KGAke3N9IGlzIHNob3J0YCkgOiBlaXRoZXIubGVmdChgJHtzfSBpcyBub3Qgc2hvcnRgKSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBhcnRpdGlvbk1hcChmKSh7IGE6IFwiZm9vXCIsIGI6IFwiYmFyXCIsIGM6IFwidmVyeWxvbmdcIiB9KSwge1xuICogICBsZWZ0OiB7XG4gKiAgICAgYzogXCJ2ZXJ5bG9uZyBpcyBub3Qgc2hvcnRcIixcbiAqICAgfSxcbiAqICAgcmlnaHQ6IHtcbiAqICAgICBhOiBcImZvbyBpcyBzaG9ydFwiLFxuICogICAgIGI6IFwiYmFyIGlzIHNob3J0XCIsXG4gKiAgIH0sXG4gKiB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb25NYXA6IDxBLCBCLCBDPihcbiAgZjogKGE6IEEpID0+IEVpdGhlcjxCLCBDPlxuKSA9PiAoZmE6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBTZXBhcmF0ZWQ8UmVjb3JkPHN0cmluZywgQj4sIFJlY29yZDxzdHJpbmcsIEM+PiA9IFJSLnBhcnRpdGlvbk1hcFxuXG4vKipcbiAqIFJlZHVjZXMgYSBgUmVjb3JkYCBwYXNzaW5nIGVhY2ggdmFsdWUgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqIEVudHJpZXMgYXJlIHByb2Nlc3NlZCBpbiBvcmRlciwgc29ydGVkIGJ5IGtleSBhY2NvcmRpbmcgdG9cbiAqIHRoZSBnaXZlbiBgT3JkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiO1xuICogaW1wb3J0IHsgT3JkIH0gZnJvbSBcImZwLXRzL3N0cmluZ1wiO1xuICpcbiAqIGNvbnN0IHggPSB7IGM6IDMsIGE6IFwiZm9vXCIsIGI6IGZhbHNlIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJlZHVjZShPcmQpKFtdIGFzIHN0cmluZ1tdLCAoYiwgYSkgPT4gWy4uLmIsIGAtJHthfS1gXSkoeCksIFtcbiAqICAgXCItZm9vLVwiLFxuICogICBcIi1mYWxzZS1cIixcbiAqICAgXCItMy1cIixcbiAqIF0pO1xuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoTzogT3JkPHN0cmluZz4pOiA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IEJcbi8qKlxuICogVXNlIHRoZSBvdmVybG9hZCBjb25zdHJhaW5lZCBieSBgT3JkYCBpbnN0ZWFkLlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2U8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpOiAoZmE6IFJlY29yZDxzdHJpbmcsIEE+KSA9PiBCXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlPEEsIEI+KFxuICAuLi5hcmdzOiBbT3JkPHN0cmluZz5dIHwgW0IsIChiOiBCLCBhOiBBKSA9PiBCXVxuKTogKChiOiBCLCBmOiAoYjogQiwgYTogQSkgPT4gQikgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikgfCAoKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikge1xuICByZXR1cm4gYXJncy5sZW5ndGggPT09IDEgPyBSUi5yZWR1Y2UoYXJnc1swXSkgOiBSUi5yZWR1Y2UoUy5PcmQpKC4uLmFyZ3MpXG59XG5cbi8qKlxuICogTWFwIGFuZCBmb2xkIGEgYFJlY29yZGAuXG4gKiBNYXAgdGhlIGBSZWNvcmRgIHBhc3NpbmcgZWFjaCB2YWx1ZSB0byB0aGUgaXRlcmF0aW5nIGZ1bmN0aW9uLlxuICogVGhlbiBmb2xkIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBwcm92aWRlZCBgTW9ub2lkYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZm9sZE1hcCB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqIGltcG9ydCB7IE9yZCB9IGZyb20gXCJmcC10cy9zdHJpbmdcIjtcbiAqIGltcG9ydCB7IE1vbm9pZCB9IGZyb20gXCJmcC10cy9Nb25vaWRcIjtcbiAqXG4gKiBjb25zdCBtOiBNb25vaWQ8c3RyaW5nPiA9IHsgZW1wdHk6IFwiXCIsIGNvbmNhdDogKHg6IHN0cmluZywgeTogc3RyaW5nKSA9PiAoeCA/IGAke3h9IC0+ICR7eX1gIDogYCR7eX1gKSB9O1xuICogY29uc3QgZiA9IChhOiBudW1iZXIpID0+IGAtJHthfS1gO1xuICogY29uc3QgeCA9IHsgYzogMywgYTogMSwgYjogMiB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmb2xkTWFwKE9yZCkobSkoZikoeCksIFwiLTEtIC0+IC0yLSAtPiAtMy1cIik7XG4gKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvbGRNYXAoTzogT3JkPHN0cmluZz4pOiA8TT4oTTogTW9ub2lkPE0+KSA9PiA8QT4oZjogKGE6IEEpID0+IE0pID0+IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IE1cbi8qKlxuICogVXNlIHRoZSBvdmVybG9hZCBjb25zdHJhaW5lZCBieSBgT3JkYCBpbnN0ZWFkLlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb2xkTWFwPE0+KE06IE1vbm9pZDxNPik6IDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gTVxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRNYXA8TT4oXG4gIE86IE9yZDxzdHJpbmc+IHwgTW9ub2lkPE0+XG4pOlxuICB8ICgoTTogTW9ub2lkPE0+KSA9PiA8QT4oZjogKGE6IEEpID0+IE0pID0+IChmYTogUmVjb3JkPHN0cmluZywgQT4pID0+IE0pXG4gIHwgKDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gTSkge1xuICByZXR1cm4gJ2NvbXBhcmUnIGluIE8gPyBSUi5mb2xkTWFwKE8pIDogUlIuZm9sZE1hcChTLk9yZCkoTylcbn1cblxuLyoqXG4gKiBTYW1lIGFzIGByZWR1Y2VgIGJ1dCBlbnRyaWVzIGFyZSBwcm9jZXNzZWQgX2Zyb20gdGhlIHJpZ2h0XyxcbiAqIGkuZS4gaW4gcmV2ZXJzZSBvcmRlciwgZnJvbSB0aGUgbGFzdCB0byB0aGUgZmlyc3QgZW50cnksIGFjY29yZGluZyB0b1xuICogdGhlIGdpdmVuIGBPcmRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZWR1Y2VSaWdodCB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqIGltcG9ydCB7IE9yZCB9IGZyb20gXCJmcC10cy9zdHJpbmdcIjtcbiAqXG4gKiBjb25zdCB4ID0geyBjOiAzLCBhOiBcImZvb1wiLCBiOiBmYWxzZSB9O1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyZWR1Y2VSaWdodChPcmQpKFtdIGFzIHN0cmluZ1tdLCAoYSwgYikgPT4gWy4uLmIsIGAtJHthfS1gXSkoeCksIFtcbiAqICAgXCItMy1cIixcbiAqICAgXCItZmFsc2UtXCIsXG4gKiAgIFwiLWZvby1cIixcbiAqIF0pO1xuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VSaWdodChPOiBPcmQ8c3RyaW5nPik6IDxBLCBCPihiOiBCLCBmOiAoYTogQSwgYjogQikgPT4gQikgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQlxuLyoqXG4gKiBVc2UgdGhlIG92ZXJsb2FkIGNvbnN0cmFpbmVkIGJ5IGBPcmRgIGluc3RlYWQuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0PEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKTogKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQlxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0PEEsIEI+KFxuICAuLi5hcmdzOiBbT3JkPHN0cmluZz5dIHwgW0IsIChhOiBBLCBiOiBCKSA9PiBCXVxuKTogKChiOiBCLCBmOiAoYTogQSwgYjogQikgPT4gQikgPT4gKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikgfCAoKGZhOiBSZWNvcmQ8c3RyaW5nLCBBPikgPT4gQikge1xuICByZXR1cm4gYXJncy5sZW5ndGggPT09IDEgPyBSUi5yZWR1Y2VSaWdodChhcmdzWzBdKSA6IFJSLnJlZHVjZVJpZ2h0KFMuT3JkKSguLi5hcmdzKVxufVxuXG4vKipcbiAqIENvbXBhY3QgYSBgUmVjb3JkYCBvZiBgT3B0aW9uYHMgZGlzY2FyZGluZyB0aGUgYE5vbmVgIHZhbHVlcyBhbmRcbiAqIGtlZXBpbmcgdGhlIGBTb21lYCB2YWx1ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbXBhY3QgfSBmcm9tICdmcC10cy9SZWNvcmQnXG4gKiBpbXBvcnQgeyBvcHRpb24gfSBmcm9tICdmcC10cydcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbXBhY3QoeyBhOiBvcHRpb24uc29tZShcImZvb1wiKSwgYjogb3B0aW9uLm5vbmUsIGM6IG9wdGlvbi5zb21lKFwiYmFyXCIpIH0pLCB7XG4gKiAgIGE6IFwiZm9vXCIsXG4gKiAgIGM6IFwiYmFyXCIsXG4gKiB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgQ29tcGFjdGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdDogPEE+KGZhOiBSZWNvcmQ8c3RyaW5nLCBPcHRpb248QT4+KSA9PiBSZWNvcmQ8c3RyaW5nLCBBPiA9IFJSLmNvbXBhY3RcblxuLyoqXG4gKiBTZXBhcmF0ZSBhIGBSZWNvcmRgIG9mIGBFaXRoZXJgcyBpbnRvIGBMZWZ0YHMgYW5kIGBSaWdodGBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzZXBhcmF0ZSB9IGZyb20gJ2ZwLXRzL1JlY29yZCdcbiAqIGltcG9ydCB7IGVpdGhlciB9IGZyb20gJ2ZwLXRzJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgIHNlcGFyYXRlKHsgYTogZWl0aGVyLnJpZ2h0KFwiZm9vXCIpLCBiOiBlaXRoZXIubGVmdChcImJhclwiKSwgYzogZWl0aGVyLnJpZ2h0KFwiYmF6XCIpIH0pLFxuICogICB7XG4gKiAgICAgcmlnaHQ6IHtcbiAqICAgICAgIGE6IFwiZm9vXCIsXG4gKiAgICAgICBjOiBcImJhelwiLFxuICogICAgIH0sXG4gKiAgICAgbGVmdDoge1xuICogICAgICAgYjogXCJiYXJcIixcbiAqICAgICB9LFxuICogICB9XG4gKiApO1xuICpcbiAqIEBjYXRlZ29yeSBDb21wYWN0YWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBhcmF0ZTogPEEsIEI+KGZhOiBSZWNvcmQ8c3RyaW5nLCBFaXRoZXI8QSwgQj4+KSA9PiBTZXBhcmF0ZWQ8UmVjb3JkPHN0cmluZywgQT4sIFJlY29yZDxzdHJpbmcsIEI+PiA9XG4gIFJSLnNlcGFyYXRlXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ1JlY29yZCdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDxBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFJlY29yZDxzdHJpbmcsIEE+XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIGBTaG93YCBmb3IgYSBgUmVjb3JkYCwgZ2l2ZW4gYSBgU2hvd2AgZm9yIHRoZSBiYXNlIHR5cGVcbiAqIChhIGBTaG93YCBwcm9kdWNlcyBhIGh1bWFuLXJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGFuIGluc3RhbmNlKS5cbiAqIGBSZWNvcmRgIGVudHJpZXMgYXJlIHNvcnRlZCBieSBrZXkgd2l0aCB0aGUgcHJvdmlkZWQgYE9yZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldFNob3cgfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCJcbiAqIGltcG9ydCB7IFNob3cgfSBmcm9tIFwiZnAtdHMvU2hvd1wiXG4gKiBpbXBvcnQgeyBPcmQgfSBmcm9tIFwiZnAtdHMvc3RyaW5nXCJcbiAqXG4gKiBjb25zdCBzTnVtYmVyOiBTaG93PG51bWJlcj4gPSB7IHNob3c6IChuOiBudW1iZXIpID0+IGAke259YCB9O1xuICogY29uc3Qgc1JlY29yZDogU2hvdzxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PiA9IGdldFNob3coT3JkKShzTnVtYmVyKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc1JlY29yZC5zaG93KHsgYjogMiwgYTogMSB9KSwgJ3sgXCJhXCI6IDEsIFwiYlwiOiAyIH0nKTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3coTzogT3JkPHN0cmluZz4pOiA8QT4oUzogU2hvdzxBPikgPT4gU2hvdzxSZWNvcmQ8c3RyaW5nLCBBPj5cbi8qKlxuICogVXNlIHRoZSBvdmVybG9hZCBjb25zdHJhaW5lZCBieSBgT3JkYCBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG93PEE+KFM6IFNob3c8QT4pOiBTaG93PFJlY29yZDxzdHJpbmcsIEE+PlxuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3c8QT4oXG4gIE86IE9yZDxzdHJpbmc+IHwgU2hvdzxBPlxuKTogKChTOiBTaG93PEE+KSA9PiBTaG93PFJlY29yZDxzdHJpbmcsIEE+PikgfCBTaG93PFJlY29yZDxzdHJpbmcsIEE+PiB7XG4gIHJldHVybiAnY29tcGFyZScgaW4gTyA/IFJSLmdldFNob3coTykgOiBSUi5nZXRTaG93KFMuT3JkKShPKVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGBFcWAgZm9yIHRoZSBiYXNlIHR5cGUsIGl0IHByb2R1Y2VzIGFuIGBFcWBcbiAqIGZvciBhIGBSZWNvcmRgIG9mIHRoYXQgYmFzZSB0eXBlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRFcSB9IGZyb20gXCJmcC10cy9SZWNvcmRcIjtcbiAqIGltcG9ydCB7IHN0cmluZyB9IGZyb20gXCJmcC10c1wiO1xuICogaW1wb3J0IHsgRXEgfSBmcm9tIFwiZnAtdHMvRXFcIjtcbiAqXG4gKiBjb25zdCBlcTogRXE8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSBnZXRFcShzdHJpbmcuRXEpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChlcS5lcXVhbHMoeyBhOiBcImZvb1wiIH0sIHsgYjogXCJiYXJcIiB9KSwgZmFsc2UpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChlcS5lcXVhbHMoeyBhOiBcImZvb1wiIH0sIHsgYTogXCJmb29cIiB9KSwgdHJ1ZSk7XG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRFcTogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KEU6IEVxPEE+KSA9PiBFcTxSZWNvcmQ8SywgQT4+ID0gUlIuZ2V0RXFcblxuLyoqXG4gKiBSZXR1cm5zIGEgYE1vbm9pZGAgaW5zdGFuY2UgZm9yIGBSZWNvcmRgcywgZ2l2ZW4gYSBgU2VtaWdyb3VwYFxuICogaW5zdGFuY2UgZm9yIHRoZSBiYXNlIHR5cGUuXG4gKiBUaGUgYE1vbm9pZGAgbWFrZXMgdGhlIHVuaW9uIG9mIHR3byBgUmVjb3JkYHMgY29taW5pbmcgdGhlXG4gKiBvdmVybGFwcGluZyBlbnRyaWVzIHdpdGggdGhlIHByb3ZpZGVkIGBTZW1pZ3JvdXBgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBTZW1pZ3JvdXBTdW0gfSBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBnZXRNb25vaWQgfSBmcm9tICdmcC10cy9SZWNvcmQnXG4gKlxuICogY29uc3QgTSA9IGdldE1vbm9pZChTZW1pZ3JvdXBTdW0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmNvbmNhdCh7IGZvbzogMTIzLCBiYXI6IDIzNCB9LCB7IGZvbzogNDU2LCBiYXo6IDU2NyB9KSwgeyBmb286IDU3OSAsIGJhcjogMjM0LCBiYXo6IDU2NyB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZDogPEsgZXh0ZW5kcyBzdHJpbmcsIEE+KFM6IFNlbWlncm91cDxBPikgPT4gTW9ub2lkPFJlY29yZDxLLCBBPj4gPSBSUi5nZXRNb25vaWRcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICogVGFrZXMgYSB2YWx1ZSBhbmQgYSBgUmVjb3JkYCBvZiBmdW5jdGlvbnMgYW5kIHJldHVybnMgYVxuICogYFJlY29yZGAgYnkgYXBwbHlpbmcgZWFjaCBmdW5jdGlvbiB0byB0aGUgaW5wdXQgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZsYXAgfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCJcbiAqXG4gKiBjb25zdCBmYWIgPSB7IHg6IChuOiBudW1iZXIpID0+IGAke259IHRpbWVzIDJgLCB5OiAobjogbnVtYmVyKSA9PiBgJHtuICogMn1gIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZsYXAoMykoZmFiKSwge1xuICogICB4OiBcIjMgdGltZXMgMlwiLFxuICogICB5OiBcIjZcIixcbiAqIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3JXaXRoSW5kZXg6IEZ1bmN0b3JXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleFxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgYEZvbGRhYmxlYCBpbnN0YW5jZSBmb3IgYSBgUmVjb3JkYCwgdXNpbmcgdGhlXG4gKiBwcm92aWRlZCBgT3JkYCB0byBzb3J0IHRoZSBgUmVjb3JkYCdzIGVudHJpZXMgYnkga2V5LlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZvbGRhYmxlID0gKE86IE9yZDxzdHJpbmc+KTogRm9sZGFibGUxPFVSST4gPT4gKHtcbiAgVVJJLFxuICByZWR1Y2U6IF9yZWR1Y2UoTyksXG4gIGZvbGRNYXA6IF9mb2xkTWFwKE8pLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0KE8pXG59KVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgYEZvbGRhYmxlV2l0aEluZGV4MWAgaW5zdGFuY2UgZm9yIGEgYFJlY29yZGAsIHVzaW5nIHRoZVxuICogcHJvdmlkZWQgYE9yZGAgdG8gc29ydCB0aGUgYFJlY29yZGAncyBlbnRyaWVzIGJ5IGtleS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGb2xkYWJsZVdpdGhJbmRleCA9IChPOiBPcmQ8c3RyaW5nPik6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz4gPT4gKHtcbiAgVVJJLFxuICByZWR1Y2U6IF9yZWR1Y2UoTyksXG4gIGZvbGRNYXA6IF9mb2xkTWFwKE8pLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0KE8pLFxuICByZWR1Y2VXaXRoSW5kZXg6IF9yZWR1Y2VXaXRoSW5kZXgoTyksXG4gIGZvbGRNYXBXaXRoSW5kZXg6IF9mb2xkTWFwV2l0aEluZGV4KE8pLFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDogX3JlZHVjZVJpZ2h0V2l0aEluZGV4KE8pXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQ29tcGFjdGFibGU6IENvbXBhY3RhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGaWx0ZXJhYmxlOiBGaWx0ZXJhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRmlsdGVyYWJsZVdpdGhJbmRleDogRmlsdGVyYWJsZVdpdGhJbmRleDE8VVJJLCBzdHJpbmc+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZSxcbiAgZmlsdGVyOiBfZmlsdGVyLFxuICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gIHBhcnRpdGlvbjogX3BhcnRpdGlvbixcbiAgcGFydGl0aW9uTWFwOiBfcGFydGl0aW9uTWFwLFxuICBmaWx0ZXJNYXBXaXRoSW5kZXg6IF9maWx0ZXJNYXBXaXRoSW5kZXgsXG4gIGZpbHRlcldpdGhJbmRleDogX2ZpbHRlcldpdGhJbmRleCxcbiAgcGFydGl0aW9uTWFwV2l0aEluZGV4OiBfcGFydGl0aW9uTWFwV2l0aEluZGV4LFxuICBwYXJ0aXRpb25XaXRoSW5kZXg6IF9wYXJ0aXRpb25XaXRoSW5kZXhcbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIGBUcmF2ZXJzYWJsZWAgaW5zdGFuY2UgZm9yIGEgYFJlY29yZGAsIHVzaW5nIHRoZVxuICogcHJvdmlkZWQgYE9yZGAgdG8gc29ydCB0aGUgYFJlY29yZGAncyBlbnRyaWVzIGJ5IGtleS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUcmF2ZXJzYWJsZSA9IChPOiBPcmQ8c3RyaW5nPik6IFRyYXZlcnNhYmxlMTxVUkk+ID0+ICh7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6IF9yZWR1Y2UoTyksXG4gIGZvbGRNYXA6IF9mb2xkTWFwKE8pLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0KE8pLFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlKE8pLFxuICBzZXF1ZW5jZTogX3NlcXVlbmNlKE8pXG59KVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgYFRyYXZlcnNhYmxlV2l0aEluZGV4YCBpbnN0YW5jZSBmb3IgYSBgUmVjb3JkYCwgdXNpbmcgdGhlXG4gKiBwcm92aWRlZCBgT3JkYCB0byBzb3J0IHRoZSBgUmVjb3JkYCdzIGVudHJpZXMgYnkga2V5LlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRyYXZlcnNhYmxlV2l0aEluZGV4ID0gKE86IE9yZDxzdHJpbmc+KTogVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiA9PiAoe1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICByZWR1Y2U6IF9yZWR1Y2UoTyksXG4gIGZvbGRNYXA6IF9mb2xkTWFwKE8pLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0KE8pLFxuICByZWR1Y2VXaXRoSW5kZXg6IF9yZWR1Y2VXaXRoSW5kZXgoTyksXG4gIGZvbGRNYXBXaXRoSW5kZXg6IF9mb2xkTWFwV2l0aEluZGV4KE8pLFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDogX3JlZHVjZVJpZ2h0V2l0aEluZGV4KE8pLFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlKE8pLFxuICBzZXF1ZW5jZTogX3NlcXVlbmNlKE8pLFxuICB0cmF2ZXJzZVdpdGhJbmRleDogX3RyYXZlcnNlV2l0aEluZGV4KE8pXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFdpdGhlcmFibGUgPSAoTzogT3JkPHN0cmluZz4pOiBXaXRoZXJhYmxlMTxVUkk+ID0+IHtcbiAgY29uc3QgVCA9IGdldFRyYXZlcnNhYmxlKE8pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIG1hcDogX21hcCxcbiAgICByZWR1Y2U6IF9yZWR1Y2UoTyksXG4gICAgZm9sZE1hcDogX2ZvbGRNYXAoTyksXG4gICAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodChPKSxcbiAgICB0cmF2ZXJzZTogVC50cmF2ZXJzZSxcbiAgICBzZXF1ZW5jZTogVC5zZXF1ZW5jZSxcbiAgICBjb21wYWN0LFxuICAgIHNlcGFyYXRlLFxuICAgIGZpbHRlcjogX2ZpbHRlcixcbiAgICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gICAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICAgIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgICB3aXRoZXI6IHdpdGhlckRlZmF1bHQoVCwgQ29tcGFjdGFibGUpLFxuICAgIHdpbHQ6IHdpbHREZWZhdWx0KFQsIENvbXBhY3RhYmxlKVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBgU2VtaWdyb3VwYCBpbiB0aGUgYmFzZSB0eXBlLCBpdCBwcm9kdWNlcyBhIGBTZW1pZ3JvdXBgXG4gKiBpbiB0aGUgYFJlY29yZGAgb2YgdGhlIGJhc2UgdHlwZS5cbiAqIFRoZSByZXN1bHRpbmcgYFNlbWlncm91cGAgY29uY2F0ZW5hdGVzIHR3byBgUmVjb3JkYHMgYnlcbiAqIGB1bmlvbmAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldFVuaW9uU2VtaWdyb3VwIH0gZnJvbSBcImZwLXRzL1JlY29yZFwiXG4gKiBpbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tIFwiZnAtdHMvU2VtaWdyb3VwXCJcbiAqXG4gKiBjb25zdCBzTnVtYmVyOiBTZW1pZ3JvdXA8bnVtYmVyPiA9IHsgY29uY2F0OiAoeCwgeSkgPT4geCAtIHkgfTtcbiAqIGNvbnN0IHNSZWNvcmQ6IFNlbWlncm91cDxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PiA9IGdldFVuaW9uU2VtaWdyb3VwKHNOdW1iZXIpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzUmVjb3JkLmNvbmNhdCh7IGE6IDEsIGI6IDIgfSwgeyBiOiAzLCBjOiA0IH0pLCB7IGE6IDEsIGI6IC0xLCBjOiA0IH0pO1xuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFVuaW9uU2VtaWdyb3VwID0gPEE+KFM6IFNlbWlncm91cDxBPik6IFNlbWlncm91cDxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4ge1xuICBjb25zdCB1bmlvblMgPSB1bmlvbihTKVxuICByZXR1cm4ge1xuICAgIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IHVuaW9uUyhzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogU2FtZSBhcyBgZ2V0TW9ub2lkYC5cbiAqIFJldHVybnMgYSBgTW9ub2lkYCBpbnN0YW5jZSBmb3IgYFJlY29yZGBzIGdpdmVuIGEgYFNlbWlncm91cGBcbiAqIGluc3RhbmNlIGZvciB0aGUgYmFzZSB0eXBlLlxuICogVGhlIGBNb25vaWRgIG1ha2VzIHRoZSB1bmlvbiBvZiB0d28gYFJlY29yZGBzIGNvbWJpbmluZyB0aGVcbiAqIGVudHJpZXMgdGhhdCBoYXZlIHRoZSBzYW1lIGtleSB3aXRoIHRoZSBwcm92aWRlZCBgU2VtaWdyb3VwYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgU2VtaWdyb3VwU3VtIH0gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0IHsgZ2V0VW5pb25Nb25vaWQgfSBmcm9tICdmcC10cy9SZWNvcmQnXG4gKlxuICogY29uc3QgTSA9IGdldFVuaW9uTW9ub2lkKFNlbWlncm91cFN1bSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0uY29uY2F0KHsgZm9vOiAxMjMsIGJhcjogMjM0IH0sIHsgZm9vOiA0NTYsIGJhejogNTY3IH0pLCB7IGZvbzogNTc5ICwgYmFyOiAyMzQsIGJhejogNTY3IH0pO1xuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFVuaW9uTW9ub2lkID0gPEE+KFM6IFNlbWlncm91cDxBPik6IE1vbm9pZDxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gKHtcbiAgY29uY2F0OiBnZXRVbmlvblNlbWlncm91cChTKS5jb25jYXQsXG4gIGVtcHR5OiB7fVxufSlcblxuLyoqXG4gKiBHaXZlbiBhIGBTZW1pZ3JvdXBgIGluIHRoZSBiYXNlIHR5cGUsIGl0IHByb2R1Y2VzIGEgYFNlbWlncm91cGBcbiAqIGluIHRoZSBgUmVjb3JkYCBvZiB0aGUgYmFzZSB0eXBlLlxuICogVGhlIHJlc3VsdGluZyBgU2VtaWdyb3VwYCBjb25jYXRlbmF0ZXMgdHdvIGBSZWNvcmRgcyBieVxuICogYGludGVyc2VjdGlvbmAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldEludGVyc2VjdGlvblNlbWlncm91cCB9IGZyb20gXCJmcC10cy9SZWNvcmRcIlxuICogaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSBcImZwLXRzL1NlbWlncm91cFwiXG4gKlxuICogY29uc3Qgc051bWJlcjogU2VtaWdyb3VwPG51bWJlcj4gPSB7IGNvbmNhdDogKHgsIHkpID0+IHggLSB5IH07XG4gKiBjb25zdCBzUmVjb3JkOiBTZW1pZ3JvdXA8UmVjb3JkPHN0cmluZywgbnVtYmVyPj4gPSBnZXRJbnRlcnNlY3Rpb25TZW1pZ3JvdXAoc051bWJlcik7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNSZWNvcmQuY29uY2F0KHsgYTogMSwgYjogMiB9LCB7IGI6IDMsIGM6IDQgfSksIHsgYjogLTEgfSk7XG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0SW50ZXJzZWN0aW9uU2VtaWdyb3VwID0gPEE+KFM6IFNlbWlncm91cDxBPik6IFNlbWlncm91cDxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4ge1xuICBjb25zdCBpbnRlcnNlY3Rpb25TID0gaW50ZXJzZWN0aW9uKFMpXG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gaW50ZXJzZWN0aW9uUyhzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBgTWFnbWFgIHdpdGggYSBgY29uY2F0YCBmdW5jdGlvbiB0aGF0IGNvbWJpbmVzXG4gKiB0d28gYFJlY29yZGBzIGJ5IG1ha2luZyB0aGUgYGRpZmZlcmVuY2VgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXREaWZmZXJlbmNlTWFnbWEsIGRpZmZlcmVuY2UgfSBmcm9tIFwiZnAtdHMvUmVjb3JkXCJcbiAqIGltcG9ydCB7IE1hZ21hIH0gZnJvbSBcImZwLXRzL01hZ21hXCJcbiAqXG4gKiBjb25zdCByMSA9IHsgYTogMywgYzogMyB9O1xuICogY29uc3QgcjIgPSB7IGE6IDEsIGI6IDIgfTtcbiAqIGNvbnN0IG06IE1hZ21hPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+ID0gZ2V0RGlmZmVyZW5jZU1hZ21hPG51bWJlcj4oKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobS5jb25jYXQocjEsIHIyKSwgZGlmZmVyZW5jZShyMikocjEpKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobS5jb25jYXQocjEsIHIyKSwgeyBjOiAzLCBiOiAyIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERpZmZlcmVuY2VNYWdtYSA9IDxBPigpOiBNYWdtYTxSZWNvcmQ8c3RyaW5nLCBBPj4gPT4gKHtcbiAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gZGlmZmVyZW5jZShzZWNvbmQpKGZpcnN0KVxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2UgYGdldEZvbGRhYmxlYCBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IEZvbGRhYmxlOiBGb2xkYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICByZWR1Y2U6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2UoUy5PcmQpLFxuICBmb2xkTWFwOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfZm9sZE1hcChTLk9yZCksXG4gIHJlZHVjZVJpZ2h0OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlUmlnaHQoUy5PcmQpXG59XG5cbi8qKlxuICogVXNlIGBnZXRGb2xkYWJsZVdpdGhJbmRleGAgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBGb2xkYWJsZVdpdGhJbmRleDogRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiA9IHtcbiAgVVJJLFxuICByZWR1Y2U6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2UoUy5PcmQpLFxuICBmb2xkTWFwOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfZm9sZE1hcChTLk9yZCksXG4gIHJlZHVjZVJpZ2h0OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlUmlnaHQoUy5PcmQpLFxuICByZWR1Y2VXaXRoSW5kZXg6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VXaXRoSW5kZXgoUy5PcmQpLFxuICBmb2xkTWFwV2l0aEluZGV4OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfZm9sZE1hcFdpdGhJbmRleChTLk9yZCksXG4gIHJlZHVjZVJpZ2h0V2l0aEluZGV4OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlUmlnaHRXaXRoSW5kZXgoUy5PcmQpXG59XG5cbi8qKlxuICogVXNlIGBnZXRUcmF2ZXJzYWJsZWAgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBUcmF2ZXJzYWJsZTogVHJhdmVyc2FibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2UoUy5PcmQpLFxuICBmb2xkTWFwOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfZm9sZE1hcChTLk9yZCksXG4gIHJlZHVjZVJpZ2h0OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlUmlnaHQoUy5PcmQpLFxuICB0cmF2ZXJzZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3RyYXZlcnNlKFMuT3JkKSxcbiAgc2VxdWVuY2Vcbn1cblxuLyoqXG4gKiBVc2UgdGhlIGBnZXRUcmF2ZXJzYWJsZVdpdGhJbmRleGAgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBUcmF2ZXJzYWJsZVdpdGhJbmRleDogVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgcmVkdWNlOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlKFMuT3JkKSxcbiAgZm9sZE1hcDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX2ZvbGRNYXAoUy5PcmQpLFxuICByZWR1Y2VSaWdodDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZVJpZ2h0KFMuT3JkKSxcbiAgcmVkdWNlV2l0aEluZGV4OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlV2l0aEluZGV4KFMuT3JkKSxcbiAgZm9sZE1hcFdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX2ZvbGRNYXBXaXRoSW5kZXgoUy5PcmQpLFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZVJpZ2h0V2l0aEluZGV4KFMuT3JkKSxcbiAgdHJhdmVyc2U6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF90cmF2ZXJzZShTLk9yZCksXG4gIHNlcXVlbmNlLFxuICB0cmF2ZXJzZVdpdGhJbmRleDpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3RyYXZlcnNlV2l0aEluZGV4KFMuT3JkKVxufVxuXG5jb25zdCBfd2l0aGVyID1cbiAgLyojX19QVVJFX18qL1xuICB3aXRoZXJEZWZhdWx0KFRyYXZlcnNhYmxlLCBDb21wYWN0YWJsZSlcbmNvbnN0IF93aWx0ID1cbiAgLyojX19QVVJFX18qL1xuICB3aWx0RGVmYXVsdChUcmF2ZXJzYWJsZSwgQ29tcGFjdGFibGUpXG5cbi8qKlxuICogVXNlIGBnZXRXaXRoZXJhYmxlYCBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IFdpdGhlcmFibGU6IFdpdGhlcmFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICByZWR1Y2U6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2UoUy5PcmQpLFxuICBmb2xkTWFwOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfZm9sZE1hcChTLk9yZCksXG4gIHJlZHVjZVJpZ2h0OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlUmlnaHQoUy5PcmQpLFxuICB0cmF2ZXJzZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3RyYXZlcnNlKFMuT3JkKSxcbiAgc2VxdWVuY2UsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXAsXG4gIHdpdGhlcjogX3dpdGhlcixcbiAgd2lsdDogX3dpbHRcbn1cblxuLyoqXG4gKiBVc2UgYSBuZXcgYHt9YCBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5OiBSZWNvcmQ8c3RyaW5nLCBuZXZlcj4gPSB7fVxuXG4vKipcbiAqIFVzZSBbYHVwc2VydEF0YF0oI3Vwc2VydGF0KSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGluc2VydEF0OiA8QT4oazogc3RyaW5nLCBhOiBBKSA9PiAocjogUmVjb3JkPHN0cmluZywgQT4pID0+IFJlY29yZDxzdHJpbmcsIEE+ID0gdXBzZXJ0QXRcblxuLyoqXG4gKiBVc2UgW2BoYXNgXSgjaGFzKSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5OiA8SyBleHRlbmRzIHN0cmluZz4oazogc3RyaW5nLCByOiBSZWNvcmQ8SywgdW5rbm93bj4pID0+IGsgaXMgSyA9IFJSLmhhc093blByb3BlcnR5XG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCByZWNvcmQ6IEZ1bmN0b3JXaXRoSW5kZXgxPFVSSSwgc3RyaW5nPiAmXG4gIEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz4gJlxuICBGaWx0ZXJhYmxlV2l0aEluZGV4MTxVUkksIHN0cmluZz4gJlxuICBUcmF2ZXJzYWJsZVdpdGhJbmRleDE8VVJJLCBzdHJpbmc+ICZcbiAgV2l0aGVyYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIHJlZHVjZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZHVjZShTLk9yZCksXG4gIGZvbGRNYXA6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9mb2xkTWFwKFMuT3JkKSxcbiAgcmVkdWNlUmlnaHQ6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VSaWdodChTLk9yZCksXG4gIHRyYXZlcnNlOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfdHJhdmVyc2UoUy5PcmQpLFxuICBzZXF1ZW5jZSxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICByZWR1Y2VXaXRoSW5kZXg6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWR1Y2VXaXRoSW5kZXgoUy5PcmQpLFxuICBmb2xkTWFwV2l0aEluZGV4OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfZm9sZE1hcFdpdGhJbmRleChTLk9yZCksXG4gIHJlZHVjZVJpZ2h0V2l0aEluZGV4OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVkdWNlUmlnaHRXaXRoSW5kZXgoUy5PcmQpLFxuICBmaWx0ZXJNYXBXaXRoSW5kZXg6IF9maWx0ZXJNYXBXaXRoSW5kZXgsXG4gIGZpbHRlcldpdGhJbmRleDogX2ZpbHRlcldpdGhJbmRleCxcbiAgcGFydGl0aW9uTWFwV2l0aEluZGV4OiBfcGFydGl0aW9uTWFwV2l0aEluZGV4LFxuICBwYXJ0aXRpb25XaXRoSW5kZXg6IF9wYXJ0aXRpb25XaXRoSW5kZXgsXG4gIHRyYXZlcnNlV2l0aEluZGV4OlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfdHJhdmVyc2VXaXRoSW5kZXgoUy5PcmQpLFxuICB3aXRoZXI6IF93aXRoZXIsXG4gIHdpbHQ6IF93aWx0XG59XG4iXX0=