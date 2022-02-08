"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compact = exports.chunksOf = exports.chop = exports.chainWithIndex = exports.chainRecDepthFirst = exports.chainRecBreadthFirst = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.array = exports.appendW = exports.append = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.Zero = exports.Witherable = exports.Unfoldable = exports.URI = exports.TraversableWithIndex = exports.Traversable = exports.Pointed = exports.Monad = exports.FunctorWithIndex = exports.Functor = exports.FromEither = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Extend = exports.Do = exports.Compactable = exports.ChainRecDepthFirst = exports.ChainRecBreadthFirst = exports.Chain = exports.Apply = exports.Applicative = exports.Alternative = exports.Alt = void 0;
exports.comprehension = comprehension;
exports.deleteAt = exports.copy = exports.cons = exports.concatW = exports.concat = void 0;
exports.difference = difference;
exports.dropLeft = void 0;
exports.dropLeftWhile = dropLeftWhile;
exports.filterWithIndex = exports.filterMapWithIndex = exports.filterMap = exports.filterE = exports.filter = exports.extend = exports.exists = exports.every = exports.empty = exports.elem = exports.duplicate = exports.dropRight = void 0;
exports.findFirst = findFirst;
exports.findIndex = exports.findFirstMap = void 0;
exports.findLast = findLast;
exports.fromOptionK = exports.fromOption = exports.fromEitherK = exports.fromEither = exports.foldRight = exports.foldMapWithIndex = exports.foldMap = exports.foldLeft = exports.flatten = exports.flap = exports.findLastMap = exports.findLastIndex = void 0;
exports.fromPredicate = fromPredicate;
exports.insertAt = exports.init = exports.head = exports.guard = exports.getUnionSemigroup = exports.getUnionMonoid = exports.getShow = exports.getSemigroup = exports.getOrd = exports.getMonoid = exports.getIntersectionSemigroup = exports.getEq = exports.getDifferenceMagma = void 0;
exports.intersection = intersection;
exports.isOutOfBound = exports.isNonEmpty = exports.isEmpty = exports.intersperse = void 0;
exports.sortBy = exports.sort = exports.some = exports.snoc = exports.size = exports.sequence = exports.separate = exports.scanRight = exports.scanLeft = exports.rotate = exports.rights = exports.reverse = exports.replicate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.range = exports.prependW = exports.prependToAll = exports.prependAll = exports.prepend = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partition = exports.of = exports.modifyAt = exports.matchW = exports.matchRightW = exports.matchRight = exports.matchLeftW = exports.matchLeft = exports.match = exports.mapWithIndex = exports.map = exports.makeBy = exports.lookup = exports.lefts = exports.last = exports.isOutOfBound = exports.isNonEmpty = exports.isEmpty = exports.intersperse = void 0;
exports.spanLeft = spanLeft;
exports.takeLeft = exports.tail = exports.splitAt = void 0;
exports.takeLeftWhile = takeLeftWhile;
exports.unfold = exports.traverseWithIndex = exports.traverse = exports.takeRight = void 0;
exports.union = union;
exports.zero = exports.wither = exports.wilt = exports.updateAt = exports.unzip = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.unsafeDeleteAt = exports.uniq = void 0;
exports.zip = zip;
exports.zipWith = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _FromEither = require("./FromEither");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var NEA = _interopRequireWildcard(require("./NonEmptyArray"));

var RA = _interopRequireWildcard(require("./ReadonlyArray"));

var _Separated = require("./Separated");

var _Witherable = require("./Witherable");

var _Zero = require("./Zero");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var NonEmptyArray = NEA.NonEmptyArray; // -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 * assert.strictEqual(isEmpty(['a']), false)
 *
 * @category refinements
 * @since 2.0.0
 */

var isEmpty = function isEmpty(as) {
  return as.length === 0;
};
/**
 * Test whether an array is non empty narrowing down the type to `NonEmptyArray<A>`
 *
 * @example
 * import { isNonEmpty } from 'fp-ts/Array'
 *
 * assert.strictEqual(isNonEmpty([]), false)
 * assert.strictEqual(isNonEmpty(['a']), true)
 *
 * @category refinements
 * @since 2.0.0
 */


exports.isEmpty = isEmpty;
var isNonEmpty = NEA.isNonEmpty; // -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Prepend an element to the front of a `Array`, creating a new `NonEmptyArray`.
 *
 * @example
 * import { prepend } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */

exports.isNonEmpty = isNonEmpty;
var prepend = NEA.prepend;
/**
 * Less strict version of [`prepend`](#prepend).
 *
 * @example
 * import { prependW } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prependW("a")), ["a", 2, 3, 4]);
 *
 * @category constructors
 * @since 2.11.0
 */

exports.prepend = prepend;
var prependW = NEA.prependW;
/**
 * Append an element to the end of a `Array`, creating a new `NonEmptyArray`.
 *
 * @example
 * import { append } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */

exports.prependW = prependW;
var append = NEA.append;
/**
 * Less strict version of [`append`](#append).
 *
 * @example
 * import { appendW } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], appendW("d")), [1, 2, 3, "d"]);
 *
 * @category constructors
 * @since 2.11.0
 */

exports.append = append;
var appendW = NEA.appendW;
/**
 * Return a `Array` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'fp-ts/Array'
 *
 * const double = (i: number): number => i * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 * assert.deepStrictEqual(makeBy(-3, double), [])
 * assert.deepStrictEqual(makeBy(4.32164, double), [0, 2, 4, 6])
 *
 * @category constructors
 * @since 2.0.0
 */

exports.appendW = appendW;

var makeBy = function makeBy(n, f) {
  return n <= 0 ? [] : NEA.makeBy(f)(n);
};
/**
 * Create a `Array` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 * assert.deepStrictEqual(replicate(-3, 'a'), [])
 * assert.deepStrictEqual(replicate(2.985647, 'a'), ['a', 'a'])
 *
 * @category constructors
 * @since 2.0.0
 */


exports.makeBy = makeBy;

var replicate = function replicate(n, a) {
  return makeBy(n, function () {
    return a;
  });
};
/**
 * Create an array with one element, if the element satisfies the predicate, otherwise
 * it returns an empty array.
 *
 * @example
 * import { fromPredicate } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 * import { isString } from "fp-ts/lib/string";
 *
 * assert.deepStrictEqual(pipe("a", fromPredicate(isString)), ["a"]);
 * assert.deepStrictEqual(pipe(7, fromPredicate(isString)), []);
 *
 * assert.deepStrictEqual(pipe(7, fromPredicate((x)=> x > 0)), [7]);
 * assert.deepStrictEqual(pipe(-3, fromPredicate((x)=> x > 0)), []);
 *
 * @category constructors
 * @since 2.11.0
 */


exports.replicate = replicate;

function fromPredicate(predicate) {
  return function (a) {
    return predicate(a) ? [a] : [];
  };
} // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * Create an array from an `Option`. The resulting array will contain the content of the
 * `Option` if it is `Some` and it will be empty if the `Option` is `None`.
 *
 * @example
 * import { fromOption } from 'fp-ts/Array'
 * import { option } from "fp-ts";
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(option.some("a"), fromOption),["a"])
 * assert.deepStrictEqual(pipe(option.none, fromOption),[])
 *
 * @category natural transformations
 * @since 2.11.0
 */


var fromOption = function fromOption(ma) {
  return _.isNone(ma) ? [] : [ma.value];
};
/**
 * Create an array from an `Either`. The resulting array will contain the content of the
 * `Either` if it is `Right` and it will be empty if the `Either` is `Left`.
 *
 * @example
 * import { fromEither } from 'fp-ts/Array'
 * import { either } from "fp-ts";
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe(either.right("r"), fromEither), ["r"]);
 * assert.deepStrictEqual(pipe(either.left("l"), fromEither), []);
 *
 * @category natural transformations
 * @since 2.11.0
 */


exports.fromOption = fromOption;

var fromEither = function fromEither(e) {
  return _.isLeft(e) ? [] : [e.right];
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Less strict version of [`match`](#match). It will work when `onEmpty` and `onNonEmpty`
 * have different return types.
 *
 * @example
 * import { matchW } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * const matcherW = matchW(
 *   () => "No elements",
 *   (as) => as.length
 * );
 * assert.deepStrictEqual(pipe([1, 2, 3, 4], matcherW), 4);
 * assert.deepStrictEqual(pipe([], matcherW), "No elements");
 *
 * @category destructors
 * @since 2.11.0
 */


exports.fromEither = fromEither;

var matchW = function matchW(onEmpty, onNonEmpty) {
  return function (as) {
    return isNonEmpty(as) ? onNonEmpty(as) : onEmpty();
  };
};
/**
 * Takes an array, if the array is empty it returns the result of `onEmpty`, otherwise
 * it passes the array to `onNonEmpty` and returns the result.
 *
 * @example
 * import { match } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * const matcher = match(
 *   () => "No elements",
 *   (as) => `Found ${as.length} element(s)`
 * );
 * assert.deepStrictEqual(pipe([1, 2, 3, 4], matcher), "Found 4 element(s)");
 * assert.deepStrictEqual(pipe([], matcher), "No elements");
 *
 * @category destructors
 * @since 2.11.0
 */


exports.matchW = matchW;
var match = matchW;
/**
 * Less strict version of [`matchLeft`](#matchleft). It will work when `onEmpty` and
 * `onNonEmpty` have different return types.
 *
 * @example
 * import { matchLeftW } from 'fp-ts/Array'
 *
 * const f = matchLeftW(
 *   () => 0,
 *   (head: string, tail: string[]) => `Found "${head}" followed by ${tail.length} elements`
 * );
 * assert.strictEqual(f(["a", "b", "c"]), 'Found "a" followed by 2 elements');
 * assert.strictEqual(f([]), 0);
 *
 * @category destructors
 * @since 2.11.0
 */

exports.match = match;

var matchLeftW = function matchLeftW(onEmpty, onNonEmpty) {
  return function (as) {
    return isNonEmpty(as) ? onNonEmpty(NEA.head(as), NEA.tail(as)) : onEmpty();
  };
};
/**
 * Takes an array, if the array is empty it returns the result of `onEmpty`, otherwise
 * it passes the array to `onNonEmpty` broken into its first element and remaining elements.
 *
 * @example
 * import { matchLeft } from 'fp-ts/Array'
 *
 * const len: <A>(as: Array<A>) => number = matchLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @category destructors
 * @since 2.10.0
 */


exports.matchLeftW = matchLeftW;
var matchLeft = matchLeftW;
/**
 * Alias of [`matchLeft`](#matchleft).
 *
 * @category destructors
 * @since 2.0.0
 */

exports.matchLeft = matchLeft;
var foldLeft = matchLeft;
/**
 * Less strict version of [`matchRight`](#matchright). It will work when `onEmpty` and
 * `onNonEmpty` have different return types.
 *
 * @example
 * import { matchRightW } from 'fp-ts/Array'
 *
 * const f = matchRightW(
 *   () => 0,
 *   (head: string[], tail: string) => `Found ${head.length} elements folllowed by "${tail}"`
 * );
 * assert.strictEqual(f(["a", "b", "c"]), 'Found 2 elements folllowed by "c"');
 * assert.strictEqual(f([]), 0);
 *
 * @category destructors
 * @since 2.11.0
 */

exports.foldLeft = foldLeft;

var matchRightW = function matchRightW(onEmpty, onNonEmpty) {
  return function (as) {
    return isNonEmpty(as) ? onNonEmpty(NEA.init(as), NEA.last(as)) : onEmpty();
  };
};
/**
 * Takes an array, if the array is empty it returns the result of `onEmpty`, otherwise
 * it passes the array to `onNonEmpty` broken  into its initial elements and the last element.
 *
 * @example
 * import { matchRight } from 'fp-ts/Array'
 *
 * const len: <A>(as: Array<A>) => number = matchRight(
 *   () => 0,
 *   (head, _) => 1 + len(head)
 * );
 * assert.strictEqual(len([1, 2, 3]), 3);
 *
 * @category destructors
 * @since 2.10.0
 */


exports.matchRightW = matchRightW;
var matchRight = matchRightW;
/**
 * Alias of [`matchRight`](#matchright).
 *
 * @category destructors
 * @since 2.0.0
 */

exports.matchRight = matchRight;
var foldRight = matchRight; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Same as [`chain`](#chain), but passing also the index to the iterating function.
 *
 * @example
 * import { chainWithIndex, replicate } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * const f = (index: number, x: string) => replicate(2, `${x}${index}`);
 * assert.deepStrictEqual(pipe(["a", "b", "c"], chainWithIndex(f)), ["a0", "a0", "b1", "b1", "c2", "c2"]);
 *
 * @category combinators
 * @since 2.7.0
 */

exports.foldRight = foldRight;

var chainWithIndex = function chainWithIndex(f) {
  return function (as) {
    var out = [];

    for (var _i = 0; _i < as.length; _i++) {
      out.push.apply(out, _toConsumableArray(f(_i, as[_i])));
    }

    return out;
  };
};
/**
 * Same as `reduce` but it carries over the intermediate steps
 *
 * @example
 * import { scanLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.chainWithIndex = chainWithIndex;

var scanLeft = function scanLeft(b, f) {
  return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[0] = b;

    for (var _i2 = 0; _i2 < len; _i2++) {
      out[_i2 + 1] = f(out[_i2], as[_i2]);
    }

    return out;
  };
};
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.scanLeft = scanLeft;

var scanRight = function scanRight(b, f) {
  return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[len] = b;

    for (var _i3 = len - 1; _i3 >= 0; _i3--) {
      out[_i3] = f(as[_i3], out[_i3 + 1]);
    }

    return out;
  };
};
/**
 * Calculate the number of elements in a `Array`.
 *
 * @example
 * import { size } from 'fp-ts/Array'
 *
 * assert.strictEqual(size(["a","b","c"]),3)
 *
 * @since 2.10.0
 */


exports.scanRight = scanRight;

var size = function size(as) {
  return as.length;
};
/**
 * Test whether an array contains a particular index
 *
 * @example
 * import { isOutOfBound } from 'fp-ts/Array'
 *
 * assert.strictEqual(isOutOfBound(1,["a","b","c"]),false)
 * assert.strictEqual(isOutOfBound(-1,["a","b","c"]),true)
 * assert.strictEqual(isOutOfBound(3,["a","b","c"]),true)
 *
 * @since 2.0.0
 */


exports.size = size;
var isOutOfBound = NEA.isOutOfBound; // TODO: remove non-curried overloading in v3

/**
 * This function provides a safe way to read a value at a particular index from an array.
 * It returns a `none` if the index is out of bounds, and a `some` of the element if the
 * index is valid.
 *
 * @example
 * import { lookup } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)
 *
 * @since 2.0.0
 */

exports.isOutOfBound = isOutOfBound;
var lookup = RA.lookup;
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */

exports.lookup = lookup;
var head = RA.head;
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */

exports.head = head;
var last = RA.last;
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */

exports.last = last;

var tail = function tail(as) {
  return isNonEmpty(as) ? _.some(NEA.tail(as)) : _.none;
};
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */


exports.tail = tail;

var init = function init(as) {
  return isNonEmpty(as) ? _.some(NEA.init(as)) : _.none;
};
/**
 * Keep only a max number of elements from the start of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { takeLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(takeLeft(2)([1, 2, 3, 4, 5]), [1, 2]);
 * assert.deepStrictEqual(takeLeft(7)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
 * assert.deepStrictEqual(takeLeft(0)([1, 2, 3, 4, 5]), []);
 * assert.deepStrictEqual(takeLeft(-1)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
 *
 * @category combinators
 * @since 2.0.0
 */


exports.init = init;

var takeLeft = function takeLeft(n) {
  return function (as) {
    return isOutOfBound(n, as) ? copy(as) : as.slice(0, n);
  };
};
/**
 * Keep only a max number of elements from the end of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { takeRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(takeRight(2)([1, 2, 3, 4, 5]), [4, 5]);
 * assert.deepStrictEqual(takeRight(7)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
 * assert.deepStrictEqual(takeRight(0)([1, 2, 3, 4, 5]), []);
 * assert.deepStrictEqual(takeRight(-1)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
 *
 * @category combinators
 * @since 2.0.0
 */


exports.takeLeft = takeLeft;

var takeRight = function takeRight(n) {
  return function (as) {
    return isOutOfBound(n, as) ? copy(as) : n === 0 ? [] : as.slice(-n);
  };
};
/**
 * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { takeLeftWhile } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(takeLeftWhile((n: number) => n % 2 === 0)([2, 4, 3, 6]), [2, 4])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.takeRight = takeRight;

function takeLeftWhile(predicate) {
  return function (as) {
    var out = [];

    var _iterator = _createForOfIteratorHelper(as),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _a = _step.value;

        if (!predicate(_a)) {
          break;
        }

        out.push(_a);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return out;
  };
}

var spanLeftIndex = function spanLeftIndex(as, predicate) {
  var l = as.length;
  var i = 0;

  for (; i < l; i++) {
    if (!predicate(as[i])) {
      break;
    }
  }

  return i;
};
/**
 * Type returned by [`spanLeft`](#spanLeft) composed of an `init` array and a `rest` array.
 *
 * @since 2.10.0
 */


function spanLeft(predicate) {
  return function (as) {
    var _splitAt = splitAt(spanLeftIndex(as, predicate))(as),
        _splitAt2 = _slicedToArray(_splitAt, 2),
        init = _splitAt2[0],
        rest = _splitAt2[1];

    return {
      init: init,
      rest: rest
    };
  };
}
/**
 * Creates a new `Array` which is a copy of the input dropping a max number of elements from the start.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { dropLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropLeft(2)([1, 2, 3]), [3]);
 * assert.deepStrictEqual(dropLeft(5)([1, 2, 3]), []);
 * assert.deepStrictEqual(dropLeft(0)([1, 2, 3]), [1, 2, 3]);
 * assert.deepStrictEqual(dropLeft(-2)([1, 2, 3]), [1, 2, 3]);
 *
 * @category combinators
 * @since 2.0.0
 */


var dropLeft = function dropLeft(n) {
  return function (as) {
    return n <= 0 || isEmpty(as) ? copy(as) : n >= as.length ? [] : as.slice(n, as.length);
  };
};
/**
 * Creates a new `Array` which is a copy of the input dropping a max number of elements from the end.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { dropRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropRight(2)([1, 2, 3]), [1]);
 * assert.deepStrictEqual(dropRight(5)([1, 2, 3]), []);
 * assert.deepStrictEqual(dropRight(0)([1, 2, 3]), [1, 2, 3]);
 * assert.deepStrictEqual(dropRight(-2)([1, 2, 3]), [1, 2, 3]);
 *
 * @category combinators
 * @since 2.0.0
 */


exports.dropLeft = dropLeft;

var dropRight = function dropRight(n) {
  return function (as) {
    return n <= 0 || isEmpty(as) ? copy(as) : n >= as.length ? [] : as.slice(0, as.length - n);
  };
};
/**
 * Creates a new `Array` which is a copy of the input dropping the longest initial subarray for
 * which all element satisfy the specified predicate.
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.dropRight = dropRight;

function dropLeftWhile(predicate) {
  return function (as) {
    return as.slice(spanLeftIndex(as, predicate));
  };
}
/**
 * `findIndex` returns an `Option` containing the first index for which a predicate holds.
 * It returns `None` if no element satisfies the predicate.
 * Similar to [`findFirst`](#findFirst) but returning the index instead of the element.
 *
 * @example
 * import { findIndex } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.0.0
 */


var findIndex = RA.findIndex;
/**
 * Find the first element which satisfies a predicate (or a refinement) function.
 * It returns an `Option` containing the element or `None` if not found.
 *
 * @example
 * import { findFirst } from 'fp-ts/Array'
 * import { some } from 'fp-ts/Option'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(findFirst((x: X) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), some({ a: 1, b: 1 }))
 *
 * @category destructors
 * @since 2.0.0
 */

exports.findIndex = findIndex;

function findFirst(predicate) {
  return RA.findFirst(predicate);
}
/**
 * Given a selector function which takes an element and returns an option,
 * this function applies the selector to each element of the array and
 * returns the first `Some` result. Otherwise it returns `None`.
 *
 * @example
 * import { findFirstMap } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string;
 *   readonly age: number;
 * }
 *
 * const persons: Array<Person> = [
 *   { name: "John", age: 16 },
 *   { name: "Mary", age: 45 },
 *   { name: "Joey", age: 28 },
 * ];
 *
 * const nameOfPersonAbove18 = (p: Person) => (p.age <= 18 ? none : some(p.name));
 * const nameOfPersonAbove70 = (p: Person) => (p.age <= 70 ? none : some(p.name));
 * assert.deepStrictEqual(findFirstMap(nameOfPersonAbove18)(persons), some("Mary"));
 * assert.deepStrictEqual(findFirstMap(nameOfPersonAbove70)(persons), none);
 *
 * @category destructors
 * @since 2.0.0
 */


var findFirstMap = RA.findFirstMap;
/**
 * Find the last element which satisfies a predicate function.
 * It returns an `Option` containing the element or `None` if not found.
 *
 * @example
 * import { findLast } from 'fp-ts/Array'
 * import { some } from 'fp-ts/Option'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(findLast((x: X) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), some({ a: 1, b: 2 }))
 *
 * @category destructors
 * @since 2.0.0
 */

exports.findFirstMap = findFirstMap;

function findLast(predicate) {
  return RA.findLast(predicate);
}
/**
 * Given a selector function which takes an element and returns an option,
 * this function applies the selector to each element of the array starting from the
 * end and returns the last `Some` result. Otherwise it returns `None`.
 *
 * @example
 * import { findLastMap } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string;
 *   readonly age: number;
 * }
 *
 * const persons: Array<Person> = [
 *   { name: "John", age: 16 },
 *   { name: "Mary", age: 45 },
 *   { name: "Joey", age: 28 },
 * ];
 *
 * const nameOfPersonAbove18 = (p: Person) => (p.age <= 18 ? none : some(p.name));
 * const nameOfPersonAbove70 = (p: Person) => (p.age <= 70 ? none : some(p.name));
 * assert.deepStrictEqual(findLastMap(nameOfPersonAbove18)(persons), some("Joey"));
 * assert.deepStrictEqual(findLastMap(nameOfPersonAbove70)(persons), none);
 *
 * @category destructors
 * @since 2.0.0
 */


var findLastMap = RA.findLastMap;
/**
 * Returns the index of the last element of the list which matches the predicate.
 * It returns an `Option` containing the index or `None` if not found.
 *
 * @example
 * import { findLastIndex } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: Array<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 *
 * @since 2.0.0
 */

exports.findLastMap = findLastMap;
var findLastIndex = RA.findLastIndex;
/**
 * This function takes an array and makes a new array containing the same elements.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.findLastIndex = findLastIndex;

var copy = function copy(as) {
  return as.slice();
};
/**
 * Insert an element at the specified index, creating a new array,
 * or returning `None` if the index is out of bounds.
 *
 * @example
 * import { insertAt } from 'fp-ts/Array'
 * import { some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.0.0
 */


exports.copy = copy;

var insertAt = function insertAt(i, a) {
  return function (as) {
    return i < 0 || i > as.length ? _.none : _.some(unsafeInsertAt(i, a, as));
  };
};
/**
 * Change the element at the specified index, creating a new array,
 * or returning `None` if the index is out of bounds.
 *
 * @example
 * import { updateAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.0.0
 */


exports.insertAt = insertAt;

var updateAt = function updateAt(i, a) {
  return modifyAt(i, function () {
    return a;
  });
};
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds.
 *
 * @example
 * import { deleteAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.0.0
 */


exports.updateAt = updateAt;

var deleteAt = function deleteAt(i) {
  return function (as) {
    return isOutOfBound(i, as) ? _.none : _.some(unsafeDeleteAt(i, as));
  };
};
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds.
 *
 * @example
 * import { modifyAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.0.0
 */


exports.deleteAt = deleteAt;

var modifyAt = function modifyAt(i, f) {
  return function (as) {
    return isOutOfBound(i, as) ? _.none : _.some(unsafeUpdateAt(i, f(as[i]), as));
  };
};
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.modifyAt = modifyAt;

var reverse = function reverse(as) {
  return isEmpty(as) ? [] : as.slice().reverse();
};
/**
 * Takes an `Array` of `Either` and produces a new `Array` containing
 * the values of all the `Right` elements in the same order.
 *
 * @example
 * import { rights } from 'fp-ts/Array'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.reverse = reverse;

var rights = function rights(as) {
  var r = [];

  for (var _i4 = 0; _i4 < as.length; _i4++) {
    var _a2 = as[_i4];

    if (_a2._tag === 'Right') {
      r.push(_a2.right);
    }
  }

  return r;
};
/**
 * Takes an `Array` of `Either` and produces a new `Array` containing
 * the values of all the `Left` elements in the same order.
 *
 * @example
 * import { lefts } from 'fp-ts/Array'
 * import { left, right } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.rights = rights;

var lefts = function lefts(as) {
  var r = [];

  for (var _i5 = 0; _i5 < as.length; _i5++) {
    var _a3 = as[_i5];

    if (_a3._tag === 'Left') {
      r.push(_a3.left);
    }
  }

  return r;
};
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.lefts = lefts;

var sort = function sort(O) {
  return function (as) {
    return as.length <= 1 ? copy(as) : as.slice().sort(O.compare);
  };
};
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.sort = sort;

var zipWith = function zipWith(fa, fb, f) {
  var fc = [];
  var len = Math.min(fa.length, fb.length);

  for (var _i6 = 0; _i6 < len; _i6++) {
    fc[_i6] = f(fa[_i6], fb[_i6]);
  }

  return fc;
}; // TODO: remove non-curried overloading in v3

/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @example
 * import { zip } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], zip(['a', 'b', 'c', 'd'])), [[1, 'a'], [2, 'b'], [3, 'c']])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.zipWith = zipWith;

function zip(as, bs) {
  if (bs === undefined) {
    return function (bs) {
      return zip(bs, as);
    };
  }

  return zipWith(as, bs, function (a, b) {
    return [a, b];
  });
}
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @since 2.0.0
 */


var unzip = function unzip(as) {
  var fa = [];
  var fb = [];

  for (var _i7 = 0; _i7 < as.length; _i7++) {
    fa[_i7] = as[_i7][0];
    fb[_i7] = as[_i7][1];
  }

  return [fa, fb];
};
/**
 * Creates a new `Array`, prepending an element to every member of the input `Array`.
 *
 * @example
 * import { prependAll } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */


exports.unzip = unzip;

var prependAll = function prependAll(middle) {
  var f = NEA.prependAll(middle);
  return function (as) {
    return isNonEmpty(as) ? f(as) : [];
  };
};
/**
 * Creates a new `Array` placing an element in between members of the input `Array`.
 *
 * @example
 * import { intersperse } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */


exports.prependAll = prependAll;

var intersperse = function intersperse(middle) {
  var f = NEA.intersperse(middle);
  return function (as) {
    return isNonEmpty(as) ? f(as) : copy(as);
  };
};
/**
 * Creates a new `Array` rotating the input `Array` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.intersperse = intersperse;

var rotate = function rotate(n) {
  var f = NEA.rotate(n);
  return function (as) {
    return isNonEmpty(as) ? f(as) : copy(as);
  };
}; // TODO: remove non-curried overloading in v3

/**
 * Test if a value is a member of an `Array`. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an `Array<A>`.
 *
 * @example
 * import { elem } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)
 *
 * @since 2.0.0
 */


exports.rotate = rotate;
var elem = RA.elem;
/**
 * Creates a new `Array` removing duplicate elements, keeping the first occurrence of an element,
 * based on a `Eq<A>`.
 *
 * @example
 * import { uniq } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */

exports.elem = elem;

var uniq = function uniq(E) {
  var f = NEA.uniq(E);
  return function (as) {
    return isNonEmpty(as) ? f(as) : copy(as);
  };
};
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/Array'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.uniq = uniq;

var sortBy = function sortBy(ords) {
  var f = NEA.sortBy(ords);
  return function (as) {
    return isNonEmpty(as) ? f(as) : copy(as);
  };
};
/**
 * A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
 * array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
 * value and the rest of the array.
 *
 * @example
 * import { Eq } from 'fp-ts/Eq'
 * import * as A from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
 *   return A.chop(as => {
 *     const { init, rest } = pipe(as, A.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.sortBy = sortBy;

var chop = function chop(f) {
  var g = NEA.chop(f);
  return function (as) {
    return isNonEmpty(as) ? g(as) : [];
  };
};
/**
 * Splits an `Array` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.chop = chop;

var splitAt = function splitAt(n) {
  return function (as) {
    return n >= 1 && isNonEmpty(as) ? NEA.splitAt(n)(as) : isEmpty(as) ? [copy(as), []] : [[], copy(as)];
  };
};
/**
 * Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the array. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `xs`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.splitAt = splitAt;

var chunksOf = function chunksOf(n) {
  var f = NEA.chunksOf(n);
  return function (as) {
    return isNonEmpty(as) ? f(as) : [];
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.chunksOf = chunksOf;

var fromOptionK = function fromOptionK(f) {
  return function () {
    return fromOption(f.apply(void 0, arguments));
  };
};
/**
 * `Array` comprehension.
 *
 * ```
 * [ f(x, y, ...) | x ← xs, y ← ys, ..., g(x, y, ...) ]
 * ```
 *
 * @example
 * import { comprehension } from 'fp-ts/Array'
 * import { tuple } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(comprehension([[1, 2, 3], ['a', 'b']], tuple, (a, b) => (a + b.length) % 2 === 0), [
 *   [1, 'a'],
 *   [1, 'b'],
 *   [3, 'a'],
 *   [3, 'b']
 * ])
 *
 * @category combinators
 * @since 2.0.0
 */


exports.fromOptionK = fromOptionK;

function comprehension(input, f) {
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return true;
  };

  var go = function go(scope, input) {
    return isNonEmpty(input) ? (0, _function.pipe)(NEA.head(input), chain(function (x) {
      return go((0, _function.pipe)(scope, append(x)), NEA.tail(input));
    })) : g.apply(void 0, _toConsumableArray(scope)) ? [f.apply(void 0, _toConsumableArray(scope))] : [];
  };

  return go([], input);
}
/**
 * @category combinators
 * @since 2.11.0
 */


var concatW = function concatW(second) {
  return function (first) {
    return isEmpty(first) ? copy(second) : isEmpty(second) ? copy(first) : first.concat(second);
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.concatW = concatW;
var concat = concatW; // TODO: remove non-curried overloading in v3

/**
 * Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons
 *
 * @example
 * import { union } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], union(N.Eq)([2, 3])), [1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */

exports.concat = concat;

function union(E) {
  var unionE = NEA.union(E);
  return function (first, second) {
    if (second === undefined) {
      var _unionE = union(E);

      return function (second) {
        return _unionE(second, first);
      };
    }

    return isNonEmpty(first) && isNonEmpty(second) ? unionE(second)(first) : isNonEmpty(first) ? copy(first) : copy(second);
  };
} // TODO: remove non-curried overloading in v3

/**
 * Creates an array of unique values that are included in all given arrays using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { intersection } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], intersection(N.Eq)([2, 3])), [2])
 *
 * @category combinators
 * @since 2.0.0
 */


function intersection(E) {
  var elemE = elem(E);
  return function (xs, ys) {
    if (ys === undefined) {
      var intersectionE = intersection(E);
      return function (ys) {
        return intersectionE(ys, xs);
      };
    }

    return xs.filter(function (a) {
      return elemE(a, ys);
    });
  };
} // TODO: remove non-curried overloading in v3

/**
 * Creates an array of array values not included in the other given array using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { difference } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], difference(N.Eq)([2, 3])), [1])
 *
 * @category combinators
 * @since 2.0.0
 */


function difference(E) {
  var elemE = elem(E);
  return function (xs, ys) {
    if (ys === undefined) {
      var differenceE = difference(E);
      return function (ys) {
        return differenceE(ys, xs);
      };
    }

    return xs.filter(function (a) {
      return !elemE(a, ys);
    });
  };
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};
/* istanbul ignore next */


var _mapWithIndex = function _mapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, mapWithIndex(f));
};

var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};

var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
};
/* istanbul ignore next */


var _filter = function _filter(fa, predicate) {
  return (0, _function.pipe)(fa, filter(predicate));
};
/* istanbul ignore next */


var _filterMap = function _filterMap(fa, f) {
  return (0, _function.pipe)(fa, filterMap(f));
};
/* istanbul ignore next */


var _partition = function _partition(fa, predicate) {
  return (0, _function.pipe)(fa, partition(predicate));
};
/* istanbul ignore next */


var _partitionMap = function _partitionMap(fa, f) {
  return (0, _function.pipe)(fa, partitionMap(f));
};
/* istanbul ignore next */


var _partitionWithIndex = function _partitionWithIndex(fa, predicateWithIndex) {
  return (0, _function.pipe)(fa, partitionWithIndex(predicateWithIndex));
};
/* istanbul ignore next */


var _partitionMapWithIndex = function _partitionMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, partitionMapWithIndex(f));
};
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
};

var _reduce = function _reduce(fa, b, f) {
  return (0, _function.pipe)(fa, reduce(b, f));
};
/* istanbul ignore next */


var _foldMap = function _foldMap(M) {
  var foldMapM = foldMap(M);
  return function (fa, f) {
    return (0, _function.pipe)(fa, foldMapM(f));
  };
};
/* istanbul ignore next */


var _reduceRight = function _reduceRight(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRight(b, f));
};
/* istanbul ignore next */


var _reduceWithIndex = function _reduceWithIndex(fa, b, f) {
  return (0, _function.pipe)(fa, reduceWithIndex(b, f));
};
/* istanbul ignore next */


var _foldMapWithIndex = function _foldMapWithIndex(M) {
  var foldMapWithIndexM = foldMapWithIndex(M);
  return function (fa, f) {
    return (0, _function.pipe)(fa, foldMapWithIndexM(f));
  };
};
/* istanbul ignore next */


var _reduceRightWithIndex = function _reduceRightWithIndex(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRightWithIndex(b, f));
};
/* istanbul ignore next */


var _filterMapWithIndex = function _filterMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, filterMapWithIndex(f));
};
/* istanbul ignore next */


var _filterWithIndex = function _filterWithIndex(fa, predicateWithIndex) {
  return (0, _function.pipe)(fa, filterWithIndex(predicateWithIndex));
};
/* istanbul ignore next */


var _extend = function _extend(fa, f) {
  return (0, _function.pipe)(fa, extend(f));
};
/* istanbul ignore next */


var _traverse = function _traverse(F) {
  var traverseF = traverse(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseF(f));
  };
};
/* istanbul ignore next */


var _traverseWithIndex = function _traverseWithIndex(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function (ta, f) {
    return (0, _function.pipe)(ta, traverseWithIndexF(f));
  };
};

var _chainRecDepthFirst = RA._chainRecDepthFirst;
var _chainRecBreadthFirst = RA._chainRecBreadthFirst; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * Given an element of the base type, `of` builds an `Array` containing just that
 * element of the base type (this is useful for building a `Monad`).
 *
 * @example
 * import { of } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(of("a"), ["a"]);
 *
 * @category Pointed
 * @since 2.0.0
 */

var of = NEA.of;
/**
 * Makes an empty `Array`, useful for building a [`Monoid`](#Monoid)
 *
 * @category Zero
 * @since 2.7.0
 */

exports.of = of;

var zero = function zero() {
  return [];
};
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: Array<A>) => Array<B>`.
 * In practice it applies the base function to each element of the array and collects the
 * results in a new array.
 *
 * @example
 * import { map } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * const f = (n: number) => n * 2;
 * assert.deepStrictEqual(pipe([1, 2, 3], map(f)), [2, 4, 6]);
 *
 * @category Functor
 * @since 2.0.0
 */


exports.zero = zero;

var map = function map(f) {
  return function (fa) {
    return fa.map(function (a) {
      return f(a);
    });
  };
};
/**
 * Apply a function to an argument under a type constructor.
 *
 * It can be used to extend the concept of [`map`](#map) to a function that
 * takes more than one parameter as described
 * read [here](https://dev.to/gcanti/getting-started-with-fp-ts-applicative-1kb3)
 *
 * @example
 * import { ap, map, of } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * // a curried function with 3 input parameteres
 * const f = (s1: string) => (n: number) => (s2: string) => s1 + n + s2;
 *
 * // let's use `ap` to iterate `f` over an array for each input parameter
 * assert.deepStrictEqual(pipe(["a", "b"], map(f), ap([1, 2]), ap(["😀", "😫", "😎"])), [
 *   "a1😀", "a1😫", "a1😎",
 *   "a2😀", "a2😫", "a2😎",
 *   "b1😀", "b1😫", "b1😎",
 *   "b2😀", "b2😫", "b2😎",
 * ]);
 *
 * // given Array implements the Applicative interface with the `of` method,
 * // we can write exactly the same thing in a more symmetric way
 * // using `of` on `f` and `ap` on each array in input
 * assert.deepStrictEqual(
 *   pipe(of(f), ap(["a", "b"]), ap([1, 2]), ap(["😀", "😫", "😎"])),
 *   pipe(["a", "b"], map(f), ap([1, 2]), ap(["😀", "😫", "😎"]))
 * );
 *
 * @category Apply
 * @since 2.0.0
 */


exports.map = map;

var ap = function ap(fa) {
  return chain(function (f) {
    return (0, _function.pipe)(fa, map(f));
  });
};
/**
 * Composes computations in sequence, using the return value of one computation to
 * determine the next computation.
 *
 * In other words it takes a function `f` that produces an array from a single element of
 * the base type `A` and returns a new function which applies `f` to each element of the
 * input array (like [`map`](#map)) and, instead of returning an array of arrays, concatenates the
 * results into a single array (like [`flatten`](#flatten)).
 *
 * This is the `chain` component of the array `Monad`.
 *
 * @example
 * import { chain, map, replicate } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * const f = (n: number) => replicate(n, `${n}`);
 * assert.deepStrictEqual(pipe([1, 2, 3], map(f)), [["1"], ["2", "2"], ["3", "3", "3"]]);
 * assert.deepStrictEqual(pipe([1, 2, 3], chain(f)), ["1", "2", "2", "3", "3", "3"]);
 *
 * @category Monad
 * @since 2.0.0
 */


exports.ap = ap;

var chain = function chain(f) {
  return function (ma) {
    return (0, _function.pipe)(ma, chainWithIndex(function (_, a) {
      return f(a);
    }));
  };
};
/**
 * Takes an array of arrays of `A` and flattens them into an array of `A`
 * by concatenating the elements of each array in order.
 *
 * Derivable from [`chain`](#chain).
 *
 * @example
 * import { flatten } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(flatten([["a"], ["b", "c"], ["d", "e", "f"]]), ["a", "b", "c", "d", "e", "f"]);
 *
 * @category combinators
 * @since 2.5.0
 */


exports.chain = chain;
var flatten = /*#__PURE__*/chain(_function.identity);
/**
 * Same as [`map`](#map), but the iterating function takes both the index and the value
 * of the element.
 *
 * @example
 * import { mapWithIndex } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * const f = (i: number, s: string) => `${s} - ${i}`;
 * assert.deepStrictEqual(pipe(["a", "b", "c"], mapWithIndex(f)), ["a - 0", "b - 1", "c - 2"]);
 *
 * @category FunctorWithIndex
 * @since 2.0.0
 */

exports.flatten = flatten;

var mapWithIndex = function mapWithIndex(f) {
  return function (fa) {
    return fa.map(function (a, i) {
      return f(i, a);
    });
  };
};
/**
 * Maps an array with an iterating function that takes the index and the value of
 * each element and returns an `Option`. It keeps only the `Some` values discarding
 * the `None`s.
 *
 * Same as [`filterMap`](#filterMap), but with an iterating function which takes also
 * the index as input.
 *
 * @example
 * import { filterMapWithIndex } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 * import { option } from "fp-ts";
 *
 * const f = (i: number, s: string) => (i % 2 === 1 ? option.some(s.toUpperCase()) : option.none);
 * assert.deepStrictEqual(pipe(["a", "no", "neither", "b"], filterMapWithIndex(f)), ["NO", "B"]);
 *
 * @category FilterableWithIndex
 * @since 2.0.0
 */


exports.mapWithIndex = mapWithIndex;

var filterMapWithIndex = function filterMapWithIndex(f) {
  return function (fa) {
    var out = [];

    for (var _i8 = 0; _i8 < fa.length; _i8++) {
      var optionB = f(_i8, fa[_i8]);

      if (_.isSome(optionB)) {
        out.push(optionB.value);
      }
    }

    return out;
  };
};
/**
 * Maps an array with an iterating function that returns an `Option`
 * and it keeps only the `Some` values discarding the `None`s.
 *
 * @example
 * import { filterMap } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 * import { option } from "fp-ts";
 *
 * const f = (s: string) => s.length === 1 ? option.some(s.toUpperCase()) : option.none;
 * assert.deepStrictEqual(pipe(["a", "no", "neither", "b"], filterMap(f)), ["A", "B"]);
 *
 * @category Filterable
 * @since 2.0.0
 */


exports.filterMapWithIndex = filterMapWithIndex;

var filterMap = function filterMap(f) {
  return filterMapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * Compact an array of `Option`s discarding the `None` values and
 * keeping the `Some` values. It returns a new array containing the values of
 * the `Some` options.
 *
 * @example
 * import { compact } from 'fp-ts/Array'
 * import { option } from "fp-ts";
 *
 * assert.deepStrictEqual(compact([option.some("a"), option.none, option.some("b")]), ["a", "b"]);
 *
 * @category Compactable
 * @since 2.0.0
 */


exports.filterMap = filterMap;
var compact = /*#__PURE__*/filterMap(_function.identity);
/**
 * Separate an array of `Either`s into `Left`s and `Right`s, creating two new arrays:
 * one containing all the left values and one containing all the right values.
 *
 * @example
 * import { separate } from 'fp-ts/Array'
 * import { either } from "fp-ts";
 *
 * assert.deepStrictEqual(separate([either.right("r1"), either.left("l1"), either.right("r2")]), {
 *   left: ["l1"],
 *   right: ["r1", "r2"],
 * });
 *
 * @category Compactable
 * @since 2.0.0
 */

exports.compact = compact;

var separate = function separate(fa) {
  var left = [];
  var right = [];

  var _iterator2 = _createForOfIteratorHelper(fa),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var e = _step2.value;

      if (e._tag === 'Left') {
        left.push(e.left);
      } else {
        right.push(e.right);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return (0, _Separated.separated)(left, right);
};
/**
 * Given an iterating function that is a `Predicate` or a `Refinement`,
 * `filter` creates a new `Array` containing the elements of the original
 * `Array` for which the iterating function is `true`.
 *
 * @example
 * import { filter } from 'fp-ts/Array'
 * import { isString } from "fp-ts/lib/string";
 *
 * assert.deepStrictEqual(filter(isString)(["a", 1, {}, "b", 5]), ["a", "b"]);
 * assert.deepStrictEqual(filter((x:number) => x > 0)([-3, 1, -2, 5]), [1, 5]);
 *
 * @category Filterable
 * @since 2.0.0
 */


exports.separate = separate;

var filter = function filter(predicate) {
  return function (as) {
    return as.filter(predicate);
  };
};
/**
 * Given an iterating function that is a `Predicate` or a `Refinement`,
 * `partition` creates two new `Array`s: `right` containing the elements of the original
 * `Array` for which the iterating function is `true`, `left` containing the elements
 * for which it is false.
 *
 * @example
 * import { partition } from 'fp-ts/Array'
 * import { isString } from "fp-ts/lib/string";
 *
 * assert.deepStrictEqual(partition(isString)(["a", 1, {}, "b", 5]), { left: [1, {}, 5], right: ["a", "b"] });
 * assert.deepStrictEqual(partition((x: number) => x > 0)([-3, 1, -2, 5]), { left: [-3, -2], right: [1, 5] });
 *
 * @category Filterable
 * @since 2.0.0
 */


exports.filter = filter;

var partition = function partition(predicate) {
  return partitionWithIndex(function (_, a) {
    return predicate(a);
  });
};
/**
 * Same as [`partition`](#partition), but passing also the index to the iterating function.
 *
 * @example
 * import { partitionWithIndex } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(partitionWithIndex((index, x: number) => index < 3 && x > 0)([-2, 5, 6, 7]), {
 *   left: [-2, 7],
 *   right: [5, 6],
 * });
 *
 * @category FilterableWithIndex
 * @since 2.0.0
 */


exports.partition = partition;

var partitionWithIndex = function partitionWithIndex(predicateWithIndex) {
  return function (as) {
    var left = [];
    var right = [];

    for (var _i9 = 0; _i9 < as.length; _i9++) {
      var _b = as[_i9];

      if (predicateWithIndex(_i9, _b)) {
        right.push(_b);
      } else {
        left.push(_b);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
};
/**
 * Given an iterating function that returns an `Either`,
 * `partitionMap` applies the iterating function to each element and it creates two `Array`s:
 * `right` containing the values of `Right` results, `left` containing the values of `Left` results.
 *
 * @example
 * import { partitionMap } from 'fp-ts/Array'
 * import { Either, left, right } from "fp-ts/lib/Either";
 *
 * const upperIfString = <B>(x: B): Either<B, string> =>
 *   typeof x === "string" ? right(x.toUpperCase()) : left(x);
 * assert.deepStrictEqual(partitionMap(upperIfString)([-2, "hello", 6, 7, "world"]), {
 *   left: [-2, 6, 7],
 *   right: [ 'HELLO', 'WORLD' ],
 * });
 *
 * @category Filterable
 * @since 2.0.0
 */


exports.partitionWithIndex = partitionWithIndex;

var partitionMap = function partitionMap(f) {
  return partitionMapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * Same as [`partitionMap`](#partitionMap), but passing also the index to the iterating function.
 *
 * @example
 * import { partitionMapWithIndex } from 'fp-ts/Array'
 * import { Either, left, right } from "fp-ts/lib/Either";
 *
 * const upperIfStringBefore3 = <B>(index: number, x: B): Either<B, string> =>
 *   index < 3 && typeof x === "string" ? right(x.toUpperCase()) : left(x);
 * assert.deepStrictEqual(partitionMapWithIndex(upperIfStringBefore3)([-2, "hello", 6, 7, "world"]), {
 *   left: [-2, 6, 7, "world"],
 *   right: ["HELLO"],
 * });
 *
 * @category FilterableWithIndex
 * @since 2.0.0
 */


exports.partitionMap = partitionMap;

var partitionMapWithIndex = function partitionMapWithIndex(f) {
  return function (fa) {
    var left = [];
    var right = [];

    for (var _i10 = 0; _i10 < fa.length; _i10++) {
      var e = f(_i10, fa[_i10]);

      if (e._tag === 'Left') {
        left.push(e.left);
      } else {
        right.push(e.right);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
};
/**
 * Less strict version of [`alt`](#alt), it can concatenate `Array`s of different base types.
 *
 * @example
 * import { altW } from 'fp-ts/Array';
 *
 * assert.deepStrictEqual(altW(() => [2, 3, 4])(["a"]), ["a", 2, 3, 4]);
 *
 * @category Alt
 * @since 2.9.0
 */


exports.partitionMapWithIndex = partitionMapWithIndex;

var altW = function altW(that) {
  return function (fa) {
    return fa.concat(that());
  };
};
/**
 * `alt` implements the `Alt` iterface by concatenation of `Array`s.
 * `Alt` interface is similar to `Semigroup` for higher-kinded types such
 * as `Array` and `Option`: the example below shows both `Alt`'s `alt` and
 * `Semigroup`'s `concat` functions.
 *
 * @example
 * import { alt, concat } from 'fp-ts/Array';
 *
 * assert.deepStrictEqual(alt(() => [2, 3, 4])([1]), [1, 2, 3, 4]);
 * assert.deepStrictEqual(concat([2, 3, 4])([1]), [1, 2, 3, 4]);
 *
 * @category Alt
 * @since 2.0.0
 */


exports.altW = altW;
var alt = altW;
/**
 * Same as [`filter`](#filter), but passing also the index to the iterating function.
 *
 * @example
 * import { filterWithIndex } from 'fp-ts/Array';
 *
 * const f = (index: number, x: number) => x > 0 && index <= 2;
 * assert.deepStrictEqual(filterWithIndex(f)([-3, 1, -2, 5]), [1]);
 *
 * @category FilterableWithIndex
 * @since 2.0.0
 */

exports.alt = alt;

var filterWithIndex = function filterWithIndex(predicateWithIndex) {
  return function (as) {
    return as.filter(function (b, i) {
      return predicateWithIndex(i, b);
    });
  };
};
/**
 * Given an iterating function that takes `Array<A>` as input, `extend` returns
 * an array containing the results of the iterating function applied to the whole input
 * `Array`, then to the input `Array` without the first element, then to the input
 * `Array` without the first two elements, etc.
 *
 * @example
 * import { extend } from 'fp-ts/Array'
 *
 * const f = (a: string[]) => a.join(",");
 * assert.deepStrictEqual(extend(f)(["a", "b", "c"]), ["a,b,c", "b,c", "c"]);
 *
 * @category Extend
 * @since 2.0.0
 */


exports.filterWithIndex = filterWithIndex;

var extend = function extend(f) {
  return function (wa) {
    return wa.map(function (_, i) {
      return f(wa.slice(i));
    });
  };
};
/**
 * `duplicate` returns an array containing the whole input `Array`,
 * then to the input `Array` dropping the first element, then to the input
 * `Array` dropping the first two elements, etc.
 * Derivable from `Extend`.
 *
 * @example
 * import { duplicate } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(duplicate(["a", "b", "c"]), [["a", "b", "c"], ["b", "c"], ["c"]]);
 *
 * @category combinators
 * @since 2.0.0
 */


exports.extend = extend;
var duplicate = /*#__PURE__*/extend(_function.identity);
/**
 * Map and fold an `Array`.
 * Map the `Array` passing each value to the iterating function.
 * Then fold the results using the provided `Monoid`.
 *
 * @example
 * import { foldMap } from 'fp-ts/Array'
 *
 * const monoid = { concat: (a: string, b: string) => a + b, empty: "" };
 * const f = (s: string) => s.toUpperCase()
 * assert.deepStrictEqual(foldMap(monoid)(f)(["a", "b", "c"]), "ABC");
 *
 * @category Foldable
 * @since 2.0.0
 */

exports.duplicate = duplicate;
var foldMap = RA.foldMap;
/**
 * Same as [`foldMap`](#foldMap) but passing also the index to the iterating function.
 *
 * @example
 * import { foldMapWithIndex } from 'fp-ts/Array'
 *
 * const monoid = { concat: (a: string, b: string) => a + b, empty: "" };
 * const f = (index:number, s: string) => `${s.toUpperCase()}(${index})`
 * assert.deepStrictEqual(foldMapWithIndex(monoid)(f)(["a", "b", "c"]), "A(0)B(1)C(2)");
 *
 * @category FoldableWithIndex
 * @since 2.0.0
 */

exports.foldMap = foldMap;
var foldMapWithIndex = RA.foldMapWithIndex;
/**
 * Reduces an `Array`.
 *
 * `reduce` executes the supplied iterating function on each element of the array,
 * in order, passing in the element and the return value from the calculation on the preceding element.
 *
 * The first time that the iterating function is called there is no "return value of the
 * previous calculation", the initial value is used in its place.
 *
 * @example
 * import { reduce } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(reduce(5, (acc: number, cur: number) => acc * cur)([2, 3]), 5 * 2 * 3);
 *
 * @category Foldable
 * @since 2.0.0
 */

exports.foldMapWithIndex = foldMapWithIndex;
var reduce = RA.reduce;
/**
 * Same as [`reduce`](#reduce) but passing also the index to the iterating function.
 *
 * @example
 * import { reduceWithIndex } from 'fp-ts/Array'
 *
 * const f = (index: number, acc: string, cur: unknown) =>
 *   acc + (typeof cur === "string" ? cur.toUpperCase() + index : "");
 * assert.deepStrictEqual(reduceWithIndex("", f)([2, "a", "b", null]), "A1B2");
 *
 * @category FoldableWithIndex
 * @since 2.0.0
 */

exports.reduce = reduce;
var reduceWithIndex = RA.reduceWithIndex;
/**
 * Same as [`reduce`](#reduce) but applied from the end to the start.
 *
 * *Note*: the iterating function in this case takes the accumulator as the last argument.
 *
 * @example
 * import { reduceRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(reduceRight("", (cur: string, acc: string) => acc + cur)(["a", "b", "c"]), "cba");
 *
 * @category Foldable
 * @since 2.0.0
 */

exports.reduceWithIndex = reduceWithIndex;
var reduceRight = RA.reduceRight;
/**
 * Same as [`reduceRight`](#reduceRight) but passing also the index to the iterating function.
 *
 * @example
 * import { reduceRightWithIndex } from 'fp-ts/Array'
 *
 * const f = (index: number, cur: unknown, acc: string) =>
 *   acc + (typeof cur === "string" ? cur.toUpperCase() + index : "");
 * assert.deepStrictEqual(reduceRightWithIndex("", f)([2, "a", "b", null]), "B2A1");
 *
 * @category FoldableWithIndex
 * @since 2.0.0
 */

exports.reduceRight = reduceRight;
var reduceRightWithIndex = RA.reduceRightWithIndex;
/**
 * Given an iterating function that returns a `HKT` (higher kinded type), `traverse`
 * applies the iterating function to each element of the `Array` and then [`sequence`](#sequence)-s
 * the results using the provided `Applicative`.
 *
 * E.g. suppose you have an `Array` and you want to format each element with a function
 * that returns a result or an error as `f = (a: A) => Either<Error, B>`, using `traverse`
 * you can apply `f` to all elements and directly obtain as a result an `Either<Error,Array<B>>`
 * i.e. an `Array<B>` if all the results are `B`, or an `Error` if some of the results
 * are `Error`s.
 *
 * @example
 * import { traverse } from 'fp-ts/Array'
 * import { Applicative, left, right } from "fp-ts/lib/Either";
 *
 * const f = (x: unknown) =>
 *   typeof x === "string" ? right(x.toUpperCase()) : left(new Error("not a string"));
 * assert.deepStrictEqual(traverse(Applicative)(f)(["a", "b"]), right(["A", "B"]));
 * assert.deepStrictEqual(traverse(Applicative)(f)(["a", 5]), left(new Error("not a string")));
 *
 * @category Traversable
 * @since 2.6.3
 */

exports.reduceRightWithIndex = reduceRightWithIndex;

var traverse = function traverse(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function (f) {
    return traverseWithIndexF(function (_, a) {
      return f(a);
    });
  };
};
/**
 * `sequence` takes an `Array` where elements are `HKT<A>` (higher kinded type) and,
 * using an applicative of that `HKT`, returns an `HKT` of `Array<A>`.
 * E.g. it can turn an `Array<Either<Error, string>>` into an `Either<Error, Array<string>>`.
 *
 * `sequence` requires an `Applicative` of the `HKT` you are targeting, e.g. to turn an
 * `Array<Either<E, A>>` into an `Either<E, Array<A>>`, it needs an
 * `Applicative` for `Either`, to to turn an `Array<Option<A>>` into an `Option<Array<A>>`,
 * it needs an `Applicative` for `Option`.
 *
 * @example
 * import { sequence } from 'fp-ts/Array'
 * import { Applicative, left, right } from "fp-ts/lib/Either";
 *
 * assert.deepStrictEqual(sequence(Applicative)([right("a"), right("b")]), right(["a", "b"]));
 * assert.deepStrictEqual(
 *   sequence(Applicative)([right("a"), left(new Error("not a string"))]),
 *   left(new Error("not a string"))
 * );
 *
 * @category Traversable
 * @since 2.6.3
 */


exports.traverse = traverse;

var sequence = function sequence(F) {
  return function (ta) {
    return _reduce(ta, F.of(zero()), function (fas, fa) {
      return F.ap(F.map(fas, function (as) {
        return function (a) {
          return (0, _function.pipe)(as, append(a));
        };
      }), fa);
    });
  };
};
/**
 * Same as [`traverse`](#traverse) but passing also the index to the iterating function.
 *
 * @example
 * import { traverseWithIndex } from 'fp-ts/Array'
 * import { Applicative, left, right } from "fp-ts/lib/Either";
 *
 * const f = (index:number, x:unknown) =>
 *   typeof x === "string" ? right(x.toUpperCase() + index) : left(new Error("not a string"));
 * assert.deepStrictEqual(traverseWithIndex(Applicative)(f)(["a", "b"]), right(["A0", "B1"]));
 * assert.deepStrictEqual(traverseWithIndex(Applicative)(f)(["a", 5]), left(new Error("not a string")));
 *
 * @category TraversableWithIndex
 * @since 2.6.3
 */


exports.sequence = sequence;

var traverseWithIndex = function traverseWithIndex(F) {
  return function (f) {
    return reduceWithIndex(F.of(zero()), function (i, fbs, a) {
      return F.ap(F.map(fbs, function (bs) {
        return function (b) {
          return (0, _function.pipe)(bs, append(b));
        };
      }), f(i, a));
    });
  };
};
/**
 * @category Witherable
 * @since 2.6.5
 */


exports.traverseWithIndex = traverseWithIndex;

var wither = function wither(F) {
  var _witherF = _wither(F);

  return function (f) {
    return function (fa) {
      return _witherF(fa, f);
    };
  };
};
/**
 * @category Witherable
 * @since 2.6.5
 */


exports.wither = wither;

var wilt = function wilt(F) {
  var _wiltF = _wilt(F);

  return function (f) {
    return function (fa) {
      return _wiltF(fa, f);
    };
  };
};
/**
 * `unfold` takes a function `f` which returns an `Option` of a tuple containing an outcome
 * value and an input for the following iteration.
 * `unfold` applies `f` to the initial value `b` and then recursively to the second
 * element of the tuple contained in the returned `option` of the previous
 * calculation until `f` returns `Option.none`.
 *
 * @example
 * import { unfold } from 'fp-ts/Array'
 * import { option } from 'fp-ts'
 *
 * const f = (n: number) => {
 *   if (n <= 0) return option.none;
 *   const returnValue = n * 2;
 *   const inputForNextRound = n - 1;
 *   return option.some([returnValue, inputForNextRound] as const);
 * };
 * assert.deepStrictEqual(unfold(5, f), [10, 8, 6, 4, 2]);
 *
 * @category Unfoldable
 * @since 2.6.6
 */


exports.wilt = wilt;

var unfold = function unfold(b, f) {
  var out = [];
  var bb = b;

  while (true) {
    var mt = f(bb);

    if (_.isSome(mt)) {
      var _mt$value = _slicedToArray(mt.value, 2),
          _a4 = _mt$value[0],
          _b2 = _mt$value[1];

      out.push(_a4);
      bb = _b2;
    } else {
      break;
    }
  }

  return out;
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.unfold = unfold;
var URI = 'Array';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * `getShow` makes a `Show` for an `Array<A>` from a `Show` for
 * an `A`.
 *
 * @example
 * import { getShow } from 'fp-ts/Array'
 *
 * const numShow = { show: (n: number) => (n >= 0 ? `${n}` : `(${-n})`) };
 * assert.deepStrictEqual(getShow(numShow).show([-2, -1, 0, 1]), "[(2), (1), 0, 1]");
 *
 * @category instances
 * @since 2.0.0
 */
var getShow = RA.getShow;
/**
 * Get a `Semigroup` based on the concatenation of `Array`s.
 * See also [`getMonoid`](#getMonoid).
 *
 * @example
 * import { getSemigroup } from 'fp-ts/Array'
 *
 * const S = getSemigroup<number>();
 * assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [1, 2, 2, 3]);
 *
 * @category instances
 * @since 2.10.0
 */

exports.getShow = getShow;

var getSemigroup = function getSemigroup() {
  return {
    concat: function concat(first, second) {
      return first.concat(second);
    }
  };
};
/**
 * Returns a `Monoid` for `Array<A>` based on the concatenation of `Array`s.
 *
 * @example
 * import { getMonoid } from 'fp-ts/Array'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @category instances
 * @since 2.0.0
 */


exports.getSemigroup = getSemigroup;

var getMonoid = function getMonoid() {
  return {
    concat: getSemigroup().concat,
    empty: []
  };
};
/**
 * Derives an `Eq` over the `Array` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { getEq } from 'fp-ts/Array'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @category instances
 * @since 2.0.0
 */


exports.getMonoid = getMonoid;
var getEq = RA.getEq;
/**
 * Derives an `Ord` over the `Array` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/Array'
 * import * as S from 'fp-ts/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 * @category instances
 * @since 2.0.0
 */

exports.getEq = getEq;
var getOrd = RA.getOrd;
/**
 * Get a `Semigroup` based on the union of the elements of `Array`s.
 * Elements which equal according to the provided `Eq` are included
 * only once in the result.
 * See also [`getUnionMonoid`](#getUnionMonoid).
 *
 * @example
 * import { getUnionSemigroup } from 'fp-ts/Array';
 * import { Eq } from 'fp-ts/number';
 *
 * const S = getUnionSemigroup<number>(Eq);
 * assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [1, 2, 3]);
 *
 * @category instances
 * @since 2.11.0
 */

exports.getOrd = getOrd;

var getUnionSemigroup = function getUnionSemigroup(E) {
  var unionE = union(E);
  return {
    concat: function concat(first, second) {
      return unionE(second)(first);
    }
  };
};
/**
 * Get a `Monoid` based on the union of the elements of `Array`s.
 * Elements which equal according to the provided `Eq` are included
 * only once in the result.
 *
 * @example
 * import { getUnionMonoid } from 'fp-ts/Array'
 * import { Eq } from 'fp-ts/number';
 *
 * const M = getUnionMonoid<number>(Eq);
 * assert.deepStrictEqual(M.concat([1, 2], [2, 3]), [1, 2, 3]);
 * assert.deepStrictEqual(M.empty,[]);
 *
 * @category instances
 * @since 2.11.0
 */


exports.getUnionSemigroup = getUnionSemigroup;

var getUnionMonoid = function getUnionMonoid(E) {
  return {
    concat: getUnionSemigroup(E).concat,
    empty: []
  };
};
/**
 * Get a `Semigroup` based on the intersection of the elements of `Array`s.
 * Only elements present in the two arrays which are equal according to the
 * provided `Eq` are included in the result.
 *
 * @example
 * import { getIntersectionSemigroup } from 'fp-ts/Array'
 * import { Eq } from 'fp-ts/number';
 *
 * const S = getIntersectionSemigroup<number>(Eq);
 * assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [2]);
 *
 * @category instances
 * @since 2.11.0
 */


exports.getUnionMonoid = getUnionMonoid;

var getIntersectionSemigroup = function getIntersectionSemigroup(E) {
  var intersectionE = intersection(E);
  return {
    concat: function concat(first, second) {
      return intersectionE(second)(first);
    }
  };
};
/**
 * Get a `Magma` for `Array` where the `concat` function is the differnce between
 * the first and the second array, i.e. the result contains all the elements of the
 * first array for which their is no equal element in the second array according
 * to the `Eq` provided.
 *
 *
 * @example
 * import { getDifferenceMagma } from 'fp-ts/Array'
 * import { Eq } from 'fp-ts/number';
 *
 * const S = getDifferenceMagma<number>(Eq);
 * assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [1]);
 *
 * @category instances
 * @since 2.11.0
 */


exports.getIntersectionSemigroup = getIntersectionSemigroup;

var getDifferenceMagma = function getDifferenceMagma(E) {
  var differenceE = difference(E);
  return {
    concat: function concat(first, second) {
      return differenceE(second)(first);
    }
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getDifferenceMagma = getDifferenceMagma;
var Functor = {
  URI: URI,
  map: _map
};
/**
 * Given an input an `Array` of functions, `flap` returns an `Array` containing
 * the results of applying each function to the given input.
 *
 * @example
 * import { flap } from 'fp-ts/Array'
 *
 * const funs = [
 *   (n: number) => `Double: ${n * 2}`,
 *   (n: number) => `Triple: ${n * 3}`,
 *   (n: number) => `Square: ${n * n}`,
 * ];
 * assert.deepStrictEqual(flap(4)(funs), ['Double: 8', 'Triple: 12', 'Square: 16']);
 *
 * @category combinators
 * @since 2.10.0
 */

exports.Functor = Functor;
var flap = /*#__PURE__*/(0, _Functor.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */

exports.flap = flap;
var Pointed = {
  URI: URI,
  of: of
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Pointed = Pointed;
var FunctorWithIndex = {
  URI: URI,
  map: _map,
  mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.FunctorWithIndex = FunctorWithIndex;
var Apply = {
  URI: URI,
  map: _map,
  ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */

exports.Apply = Apply;
var apFirst = /*#__PURE__*/(0, _Apply.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */

exports.apFirst = apFirst;
var apSecond = /*#__PURE__*/(0, _Apply.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */

exports.apSecond = apSecond;
var Applicative = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Applicative = Applicative;
var Chain = {
  URI: URI,
  map: _map,
  ap: _ap,
  chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.Chain = Chain;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.7.0
 */

exports.chainFirst = chainFirst;
var Monad = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Monad = Monad;
var Unfoldable = {
  URI: URI,
  unfold: unfold
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Unfoldable = Unfoldable;
var Alt = {
  URI: URI,
  map: _map,
  alt: _alt
};
/**
 * @category instances
 * @since 2.11.0
 */

exports.Alt = Alt;
var Zero = {
  URI: URI,
  zero: zero
};
/**
 * @category constructors
 * @since 2.11.0
 */

exports.Zero = Zero;
var guard = /*#__PURE__*/(0, _Zero.guard)(Zero, Pointed);
/**
 * @category instances
 * @since 2.7.0
 */

exports.guard = guard;
var Alternative = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  alt: _alt,
  zero: zero
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Alternative = Alternative;
var Extend = {
  URI: URI,
  map: _map,
  extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Extend = Extend;
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
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.FilterableWithIndex = FilterableWithIndex;
var Foldable = {
  URI: URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Foldable = Foldable;
var FoldableWithIndex = {
  URI: URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.FoldableWithIndex = FoldableWithIndex;
var Traversable = {
  URI: URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.Traversable = Traversable;
var TraversableWithIndex = {
  URI: URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverse: _traverse,
  sequence: sequence,
  traverseWithIndex: _traverseWithIndex
};
exports.TraversableWithIndex = TraversableWithIndex;

var _wither = /*#__PURE__*/(0, _Witherable.witherDefault)(Traversable, Compactable);

var _wilt = /*#__PURE__*/(0, _Witherable.wiltDefault)(Traversable, Compactable);
/**
 * @category instances
 * @since 2.7.0
 */


var Witherable = {
  URI: URI,
  map: _map,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence,
  wither: _wither,
  wilt: _wilt
};
/**
 * @category ChainRec
 * @since 2.11.0
 */

exports.Witherable = Witherable;
var chainRecDepthFirst = RA.chainRecDepthFirst;
/**
 * @category instances
 * @since 2.11.0
 */

exports.chainRecDepthFirst = chainRecDepthFirst;
var ChainRecDepthFirst = {
  URI: URI,
  map: _map,
  ap: _ap,
  chain: _chain,
  chainRec: _chainRecDepthFirst
};
/**
 * @category ChainRec
 * @since 2.11.0
 */

exports.ChainRecDepthFirst = ChainRecDepthFirst;
var chainRecBreadthFirst = RA.chainRecBreadthFirst;
/**
 * @category instances
 * @since 2.11.0
 */

exports.chainRecBreadthFirst = chainRecBreadthFirst;
var ChainRecBreadthFirst = {
  URI: URI,
  map: _map,
  ap: _ap,
  chain: _chain,
  chainRec: _chainRecBreadthFirst
};
/**
 * Filter values inside a context.
 *
 * @since 2.11.0
 */

exports.ChainRecBreadthFirst = ChainRecBreadthFirst;
var filterE = /*#__PURE__*/(0, _Witherable.filterE)(Witherable);
/**
 * @category instances
 * @since 2.11.0
 */

exports.filterE = filterE;
var FromEither = {
  URI: URI,
  fromEither: fromEither
};
/**
 * @category combinators
 * @since 2.11.0
 */

exports.FromEither = FromEither;
var fromEitherK = /*#__PURE__*/(0, _FromEither.fromEitherK)(FromEither); // -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------

/**
 * @category unsafe
 * @since 2.0.0
 */

exports.fromEitherK = fromEitherK;
var unsafeInsertAt = NEA.unsafeInsertAt;
/**
 * @category unsafe
 * @since 2.0.0
 */

exports.unsafeInsertAt = unsafeInsertAt;

var unsafeUpdateAt = function unsafeUpdateAt(i, a, as) {
  return isNonEmpty(as) ? NEA.unsafeUpdateAt(i, a, as) : [];
};
/**
 * @category unsafe
 * @since 2.0.0
 */


exports.unsafeUpdateAt = unsafeUpdateAt;

var unsafeDeleteAt = function unsafeDeleteAt(i, as) {
  var xs = as.slice();
  xs.splice(i, 1);
  return xs;
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * `every` tells if the provided predicate holds true for every element in the `Array`.
 *
 * @example
 * import { every } from 'fp-ts/Array'
 *
 * assert.equal(every((x: number) => x >= 0)([1, 2, 3]), true);
 * assert.equal(every((x: number) => x >= 0)([-1, 2, 3]), false);
 *
 * @since 2.9.0
 */


exports.unsafeDeleteAt = unsafeDeleteAt;
var every = RA.every;
/**
 * `some` tells if the provided predicate holds true at least for one element in the `Array`.
 *
 * @example
 * import { some } from 'fp-ts/Array'
 *
 * assert.equal(some((x: number) => x >= 0)([1, 2, 3]), true);
 * assert.equal(some((x: number) => x >= 10)([1, 2, 3]), false);
 *
 * @since 2.9.0
 */

exports.every = every;

var some = function some(predicate) {
  return function (as) {
    return as.some(predicate);
  };
};
/**
 * Alias of [`some`](#some)
 *
 * @since 2.11.0
 */


exports.some = some;
var exists = some; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */

exports.exists = exists;
var Do = /*#__PURE__*/of(_.emptyRecord);
/**
 * @since 2.8.0
 */

exports.Do = Do;
var bindTo = /*#__PURE__*/(0, _Functor.bindTo)(Functor);
/**
 * @since 2.8.0
 */

exports.bindTo = bindTo;
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain); // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.bind = bind;
var apS = /*#__PURE__*/(0, _Apply.apS)(Apply); // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use `NonEmptyArray` module instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.apS = apS;
var range = NEA.range;
/**
 * Use a new `[]` instead.
 *
 * @since 2.0.0
 * @deprecated
 */

exports.range = range;
var empty = [];
/**
 * Use `prepend` instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.empty = empty;
var cons = NEA.cons;
/**
 * Use `append` instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */

exports.cons = cons;
var snoc = NEA.snoc;
/**
 * Use `prependAll` instead
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */

exports.snoc = snoc;
var prependToAll = prependAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.prependToAll = prependToAll;
var array = {
  URI: URI,
  compact: compact,
  separate: separate,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  mapWithIndex: _mapWithIndex,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
  alt: _alt,
  zero: zero,
  unfold: unfold,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence: sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex,
  extend: _extend,
  wither: _wither,
  wilt: _wilt
};
exports.array = array;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9BcnJheS50cyJdLCJuYW1lcyI6WyJOb25FbXB0eUFycmF5IiwiTkVBIiwiaXNFbXB0eSIsImFzIiwibGVuZ3RoIiwiaXNOb25FbXB0eSIsInByZXBlbmQiLCJwcmVwZW5kVyIsImFwcGVuZCIsImFwcGVuZFciLCJtYWtlQnkiLCJuIiwiZiIsInJlcGxpY2F0ZSIsImEiLCJmcm9tUHJlZGljYXRlIiwicHJlZGljYXRlIiwiZnJvbU9wdGlvbiIsIm1hIiwiXyIsImlzTm9uZSIsInZhbHVlIiwiZnJvbUVpdGhlciIsImUiLCJpc0xlZnQiLCJyaWdodCIsIm1hdGNoVyIsIm9uRW1wdHkiLCJvbk5vbkVtcHR5IiwibWF0Y2giLCJtYXRjaExlZnRXIiwiaGVhZCIsInRhaWwiLCJtYXRjaExlZnQiLCJmb2xkTGVmdCIsIm1hdGNoUmlnaHRXIiwiaW5pdCIsImxhc3QiLCJtYXRjaFJpZ2h0IiwiZm9sZFJpZ2h0IiwiY2hhaW5XaXRoSW5kZXgiLCJvdXQiLCJpIiwicHVzaCIsInNjYW5MZWZ0IiwiYiIsImxlbiIsIkFycmF5Iiwic2NhblJpZ2h0Iiwic2l6ZSIsImlzT3V0T2ZCb3VuZCIsImxvb2t1cCIsIlJBIiwic29tZSIsIm5vbmUiLCJ0YWtlTGVmdCIsImNvcHkiLCJzbGljZSIsInRha2VSaWdodCIsInRha2VMZWZ0V2hpbGUiLCJzcGFuTGVmdEluZGV4IiwibCIsInNwYW5MZWZ0Iiwic3BsaXRBdCIsInJlc3QiLCJkcm9wTGVmdCIsImRyb3BSaWdodCIsImRyb3BMZWZ0V2hpbGUiLCJmaW5kSW5kZXgiLCJmaW5kRmlyc3QiLCJmaW5kRmlyc3RNYXAiLCJmaW5kTGFzdCIsImZpbmRMYXN0TWFwIiwiZmluZExhc3RJbmRleCIsImluc2VydEF0IiwidW5zYWZlSW5zZXJ0QXQiLCJ1cGRhdGVBdCIsIm1vZGlmeUF0IiwiZGVsZXRlQXQiLCJ1bnNhZmVEZWxldGVBdCIsInVuc2FmZVVwZGF0ZUF0IiwicmV2ZXJzZSIsInJpZ2h0cyIsInIiLCJfdGFnIiwibGVmdHMiLCJsZWZ0Iiwic29ydCIsIk8iLCJjb21wYXJlIiwiemlwV2l0aCIsImZhIiwiZmIiLCJmYyIsIk1hdGgiLCJtaW4iLCJ6aXAiLCJicyIsInVuZGVmaW5lZCIsInVuemlwIiwicHJlcGVuZEFsbCIsIm1pZGRsZSIsImludGVyc3BlcnNlIiwicm90YXRlIiwiZWxlbSIsInVuaXEiLCJFIiwic29ydEJ5Iiwib3JkcyIsImNob3AiLCJnIiwiY2h1bmtzT2YiLCJmcm9tT3B0aW9uSyIsImNvbXByZWhlbnNpb24iLCJpbnB1dCIsImdvIiwic2NvcGUiLCJjaGFpbiIsIngiLCJjb25jYXRXIiwic2Vjb25kIiwiZmlyc3QiLCJjb25jYXQiLCJ1bmlvbiIsInVuaW9uRSIsImludGVyc2VjdGlvbiIsImVsZW1FIiwieHMiLCJ5cyIsImludGVyc2VjdGlvbkUiLCJmaWx0ZXIiLCJkaWZmZXJlbmNlIiwiZGlmZmVyZW5jZUUiLCJfbWFwIiwibWFwIiwiX21hcFdpdGhJbmRleCIsIm1hcFdpdGhJbmRleCIsIl9hcCIsImZhYiIsImFwIiwiX2NoYWluIiwiX2ZpbHRlciIsIl9maWx0ZXJNYXAiLCJmaWx0ZXJNYXAiLCJfcGFydGl0aW9uIiwicGFydGl0aW9uIiwiX3BhcnRpdGlvbk1hcCIsInBhcnRpdGlvbk1hcCIsIl9wYXJ0aXRpb25XaXRoSW5kZXgiLCJwcmVkaWNhdGVXaXRoSW5kZXgiLCJwYXJ0aXRpb25XaXRoSW5kZXgiLCJfcGFydGl0aW9uTWFwV2l0aEluZGV4IiwicGFydGl0aW9uTWFwV2l0aEluZGV4IiwiX2FsdCIsInRoYXQiLCJhbHQiLCJfcmVkdWNlIiwicmVkdWNlIiwiX2ZvbGRNYXAiLCJNIiwiZm9sZE1hcE0iLCJmb2xkTWFwIiwiX3JlZHVjZVJpZ2h0IiwicmVkdWNlUmlnaHQiLCJfcmVkdWNlV2l0aEluZGV4IiwicmVkdWNlV2l0aEluZGV4IiwiX2ZvbGRNYXBXaXRoSW5kZXgiLCJmb2xkTWFwV2l0aEluZGV4TSIsImZvbGRNYXBXaXRoSW5kZXgiLCJfcmVkdWNlUmlnaHRXaXRoSW5kZXgiLCJyZWR1Y2VSaWdodFdpdGhJbmRleCIsIl9maWx0ZXJNYXBXaXRoSW5kZXgiLCJmaWx0ZXJNYXBXaXRoSW5kZXgiLCJfZmlsdGVyV2l0aEluZGV4IiwiZmlsdGVyV2l0aEluZGV4IiwiX2V4dGVuZCIsImV4dGVuZCIsIl90cmF2ZXJzZSIsIkYiLCJ0cmF2ZXJzZUYiLCJ0cmF2ZXJzZSIsInRhIiwiX3RyYXZlcnNlV2l0aEluZGV4IiwidHJhdmVyc2VXaXRoSW5kZXhGIiwidHJhdmVyc2VXaXRoSW5kZXgiLCJfY2hhaW5SZWNEZXB0aEZpcnN0IiwiX2NoYWluUmVjQnJlYWR0aEZpcnN0Iiwib2YiLCJ6ZXJvIiwiZmxhdHRlbiIsImlkZW50aXR5Iiwib3B0aW9uQiIsImlzU29tZSIsImNvbXBhY3QiLCJzZXBhcmF0ZSIsImFsdFciLCJ3YSIsImR1cGxpY2F0ZSIsInNlcXVlbmNlIiwiZmFzIiwiZmJzIiwid2l0aGVyIiwiX3dpdGhlckYiLCJfd2l0aGVyIiwid2lsdCIsIl93aWx0RiIsIl93aWx0IiwidW5mb2xkIiwiYmIiLCJtdCIsIlVSSSIsImdldFNob3ciLCJnZXRTZW1pZ3JvdXAiLCJnZXRNb25vaWQiLCJlbXB0eSIsImdldEVxIiwiZ2V0T3JkIiwiZ2V0VW5pb25TZW1pZ3JvdXAiLCJnZXRVbmlvbk1vbm9pZCIsImdldEludGVyc2VjdGlvblNlbWlncm91cCIsImdldERpZmZlcmVuY2VNYWdtYSIsIkZ1bmN0b3IiLCJmbGFwIiwiUG9pbnRlZCIsIkZ1bmN0b3JXaXRoSW5kZXgiLCJBcHBseSIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlIiwiQ2hhaW4iLCJjaGFpbkZpcnN0IiwiTW9uYWQiLCJVbmZvbGRhYmxlIiwiQWx0IiwiWmVybyIsImd1YXJkIiwiQWx0ZXJuYXRpdmUiLCJFeHRlbmQiLCJDb21wYWN0YWJsZSIsIkZpbHRlcmFibGUiLCJGaWx0ZXJhYmxlV2l0aEluZGV4IiwiRm9sZGFibGUiLCJGb2xkYWJsZVdpdGhJbmRleCIsIlRyYXZlcnNhYmxlIiwiVHJhdmVyc2FibGVXaXRoSW5kZXgiLCJXaXRoZXJhYmxlIiwiY2hhaW5SZWNEZXB0aEZpcnN0IiwiQ2hhaW5SZWNEZXB0aEZpcnN0IiwiY2hhaW5SZWMiLCJjaGFpblJlY0JyZWFkdGhGaXJzdCIsIkNoYWluUmVjQnJlYWR0aEZpcnN0IiwiZmlsdGVyRSIsIkZyb21FaXRoZXIiLCJmcm9tRWl0aGVySyIsInNwbGljZSIsImV2ZXJ5IiwiZXhpc3RzIiwiRG8iLCJlbXB0eVJlY29yZCIsImJpbmRUbyIsImJpbmQiLCJhcFMiLCJyYW5nZSIsImNvbnMiLCJzbm9jIiwicHJlcGVuZFRvQWxsIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBS0E7O0FBS0E7O0FBR0E7O0FBS0E7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFT0EsYSxHQUFnQkMsRyxDQUFJRCxhLEVBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBSUMsRUFBSjtBQUFBLFNBQStCQSxFQUFFLENBQUNDLE1BQUgsS0FBYyxDQUE3QztBQUFBLENBQWhCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsVUFBdUQsR0FBR0osR0FBRyxDQUFDSSxVQUFwRSxDLENBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsT0FBaUUsR0FBR0wsR0FBRyxDQUFDSyxPQUE5RTtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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InNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIEFycmF5IG1vZHVsZSBwcm92aWRlcyB0b29scyBmb3Igd29ya2luZyB3aXRoIFR5cGVzY3JpcHQncyBBcnJheTxUPiB0eXBlIGluIGEgZnVuY3Rpb25hbCB3YXkuXG4gKlxuICogSW4gZnVuY3Rpb25hbCBqYXJnb24sIHRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgbW9uYWRpYyBpbnRlcmZhY2Ugb3ZlciBUeXBlc2NyaXB0J3MgQXJyYXk8VD4uXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFsdDEgfSBmcm9tICcuL0FsdCdcbmltcG9ydCB7IEFsdGVybmF0aXZlMSB9IGZyb20gJy4vQWx0ZXJuYXRpdmUnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSBhcyBBcHBsaWNhdGl2ZUhLVCwgQXBwbGljYXRpdmUxIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IGFwRmlyc3QgYXMgYXBGaXJzdF8sIEFwcGx5MSwgYXBTIGFzIGFwU18sIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjEsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgQ2hhaW5SZWMxIH0gZnJvbSAnLi9DaGFpblJlYydcbmltcG9ydCB7IENvbXBhY3RhYmxlMSB9IGZyb20gJy4vQ29tcGFjdGFibGUnXG5pbXBvcnQgeyBFaXRoZXIgfSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IEVxIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEV4dGVuZDEgfSBmcm9tICcuL0V4dGVuZCdcbmltcG9ydCB7IEZpbHRlcmFibGUxIH0gZnJvbSAnLi9GaWx0ZXJhYmxlJ1xuaW1wb3J0IHsgRmlsdGVyYWJsZVdpdGhJbmRleDEsIFByZWRpY2F0ZVdpdGhJbmRleCwgUmVmaW5lbWVudFdpdGhJbmRleCB9IGZyb20gJy4vRmlsdGVyYWJsZVdpdGhJbmRleCdcbmltcG9ydCB7IEZvbGRhYmxlMSB9IGZyb20gJy4vRm9sZGFibGUnXG5pbXBvcnQgeyBGb2xkYWJsZVdpdGhJbmRleDEgfSBmcm9tICcuL0ZvbGRhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgRnJvbUVpdGhlcjEsIGZyb21FaXRoZXJLIGFzIGZyb21FaXRoZXJLXyB9IGZyb20gJy4vRnJvbUVpdGhlcidcbmltcG9ydCB7IGlkZW50aXR5LCBMYXp5LCBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEZ1bmN0b3JXaXRoSW5kZXgxIH0gZnJvbSAnLi9GdW5jdG9yV2l0aEluZGV4J1xuaW1wb3J0IHsgSEtUIH0gZnJvbSAnLi9IS1QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNYWdtYSB9IGZyb20gJy4vTWFnbWEnXG5pbXBvcnQgeyBNb25hZDEgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBOYXR1cmFsVHJhbnNmb3JtYXRpb24xMSB9IGZyb20gJy4vTmF0dXJhbFRyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0ICogYXMgTkVBIGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IE9wdGlvbiwgVVJJIGFzIE9VUkkgfSBmcm9tICcuL09wdGlvbidcbmltcG9ydCB7IE9yZCB9IGZyb20gJy4vT3JkJ1xuaW1wb3J0IHsgUG9pbnRlZDEgfSBmcm9tICcuL1BvaW50ZWQnXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL1ByZWRpY2F0ZSdcbmltcG9ydCAqIGFzIFJBIGZyb20gJy4vUmVhZG9ubHlBcnJheSdcbmltcG9ydCB7IFJlZmluZW1lbnQgfSBmcm9tICcuL1JlZmluZW1lbnQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IHNlcGFyYXRlZCwgU2VwYXJhdGVkIH0gZnJvbSAnLi9TZXBhcmF0ZWQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTEsIFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyBQaXBlYWJsZVRyYXZlcnNlV2l0aEluZGV4MSwgVHJhdmVyc2FibGVXaXRoSW5kZXgxIH0gZnJvbSAnLi9UcmF2ZXJzYWJsZVdpdGhJbmRleCdcbmltcG9ydCB7IFVuZm9sZGFibGUxIH0gZnJvbSAnLi9VbmZvbGRhYmxlJ1xuaW1wb3J0IHtcbiAgZmlsdGVyRSBhcyBmaWx0ZXJFXyxcbiAgUGlwZWFibGVXaWx0MSxcbiAgUGlwZWFibGVXaXRoZXIxLFxuICB3aWx0RGVmYXVsdCxcbiAgV2l0aGVyYWJsZTEsXG4gIHdpdGhlckRlZmF1bHRcbn0gZnJvbSAnLi9XaXRoZXJhYmxlJ1xuaW1wb3J0IHsgWmVybzEsIGd1YXJkIGFzIGd1YXJkXyB9IGZyb20gJy4vWmVybydcblxuaW1wb3J0IE5vbkVtcHR5QXJyYXkgPSBORUEuTm9uRW1wdHlBcnJheVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyByZWZpbmVtZW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhbiBhcnJheSBpcyBlbXB0eVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGlzRW1wdHkoW10pLCB0cnVlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGlzRW1wdHkoWydhJ10pLCBmYWxzZSlcbiAqXG4gKiBAY2F0ZWdvcnkgcmVmaW5lbWVudHNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IDxBPihhczogQXJyYXk8QT4pOiBhcyBpcyBbXSA9PiBhcy5sZW5ndGggPT09IDBcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYW4gYXJyYXkgaXMgbm9uIGVtcHR5IG5hcnJvd2luZyBkb3duIHRoZSB0eXBlIHRvIGBOb25FbXB0eUFycmF5PEE+YFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpc05vbkVtcHR5IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGlzTm9uRW1wdHkoW10pLCBmYWxzZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChpc05vbkVtcHR5KFsnYSddKSwgdHJ1ZSlcbiAqXG4gKiBAY2F0ZWdvcnkgcmVmaW5lbWVudHNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgaXNOb25FbXB0eTogPEE+KGFzOiBBcnJheTxBPikgPT4gYXMgaXMgTm9uRW1wdHlBcnJheTxBPiA9IE5FQS5pc05vbkVtcHR5XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFByZXBlbmQgYW4gZWxlbWVudCB0byB0aGUgZnJvbnQgb2YgYSBgQXJyYXlgLCBjcmVhdGluZyBhIG5ldyBgTm9uRW1wdHlBcnJheWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHByZXBlbmQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzIsIDMsIDRdLCBwcmVwZW5kKDEpKSwgWzEsIDIsIDMsIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHByZXBlbmQ6IDxBPihoZWFkOiBBKSA9PiAodGFpbDogQXJyYXk8QT4pID0+IE5FQS5Ob25FbXB0eUFycmF5PEE+ID0gTkVBLnByZXBlbmRcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgcHJlcGVuZGBdKCNwcmVwZW5kKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcHJlcGVuZFcgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzIsIDMsIDRdLCBwcmVwZW5kVyhcImFcIikpLCBbXCJhXCIsIDIsIDMsIDRdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kVzogPEEsIEI+KGhlYWQ6IEIpID0+ICh0YWlsOiBBcnJheTxBPikgPT4gTkVBLk5vbkVtcHR5QXJyYXk8QSB8IEI+ID0gTkVBLnByZXBlbmRXXG5cbi8qKlxuICogQXBwZW5kIGFuIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiBhIGBBcnJheWAsIGNyZWF0aW5nIGEgbmV3IGBOb25FbXB0eUFycmF5YC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgYXBwZW5kIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgYXBwZW5kKDQpKSwgWzEsIDIsIDMsIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZDogPEE+KGVuZDogQSkgPT4gKGluaXQ6IEFycmF5PEE+KSA9PiBORUEuTm9uRW1wdHlBcnJheTxBPiA9IE5FQS5hcHBlbmRcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXBwZW5kYF0oI2FwcGVuZCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGFwcGVuZFcgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzEsIDIsIDNdLCBhcHBlbmRXKFwiZFwiKSksIFsxLCAyLCAzLCBcImRcIl0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZFc6IDxBLCBCPihlbmQ6IEIpID0+IChpbml0OiBBcnJheTxBPikgPT4gTkVBLk5vbkVtcHR5QXJyYXk8QSB8IEI+ID0gTkVBLmFwcGVuZFdcblxuLyoqXG4gKiBSZXR1cm4gYSBgQXJyYXlgIG9mIGxlbmd0aCBgbmAgd2l0aCBlbGVtZW50IGBpYCBpbml0aWFsaXplZCB3aXRoIGBmKGkpYC5cbiAqXG4gKiAqKk5vdGUqKi4gYG5gIGlzIG5vcm1hbGl6ZWQgdG8gYSBub24gbmVnYXRpdmUgaW50ZWdlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWFrZUJ5IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogY29uc3QgZG91YmxlID0gKGk6IG51bWJlcik6IG51bWJlciA9PiBpICogMlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtYWtlQnkoNSwgZG91YmxlKSwgWzAsIDIsIDQsIDYsIDhdKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtYWtlQnkoLTMsIGRvdWJsZSksIFtdKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtYWtlQnkoNC4zMjE2NCwgZG91YmxlKSwgWzAsIDIsIDQsIDZdKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFrZUJ5ID0gPEE+KG46IG51bWJlciwgZjogKGk6IG51bWJlcikgPT4gQSk6IEFycmF5PEE+ID0+IChuIDw9IDAgPyBbXSA6IE5FQS5tYWtlQnkoZikobikpXG5cbi8qKlxuICogQ3JlYXRlIGEgYEFycmF5YCBjb250YWluaW5nIGEgdmFsdWUgcmVwZWF0ZWQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gKlxuICogKipOb3RlKiouIGBuYCBpcyBub3JtYWxpemVkIHRvIGEgbm9uIG5lZ2F0aXZlIGludGVnZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlcGxpY2F0ZSB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVwbGljYXRlKDMsICdhJyksIFsnYScsICdhJywgJ2EnXSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVwbGljYXRlKC0zLCAnYScpLCBbXSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVwbGljYXRlKDIuOTg1NjQ3LCAnYScpLCBbJ2EnLCAnYSddKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmVwbGljYXRlID0gPEE+KG46IG51bWJlciwgYTogQSk6IEFycmF5PEE+ID0+IG1ha2VCeShuLCAoKSA9PiBhKVxuXG4vKipcbiAqIENyZWF0ZSBhbiBhcnJheSB3aXRoIG9uZSBlbGVtZW50LCBpZiB0aGUgZWxlbWVudCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZSwgb3RoZXJ3aXNlXG4gKiBpdCByZXR1cm5zIGFuIGVtcHR5IGFycmF5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmcm9tUHJlZGljYXRlIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKiBpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCJmcC10cy9saWIvc3RyaW5nXCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFwiYVwiLCBmcm9tUHJlZGljYXRlKGlzU3RyaW5nKSksIFtcImFcIl0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKDcsIGZyb21QcmVkaWNhdGUoaXNTdHJpbmcpKSwgW10pO1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSg3LCBmcm9tUHJlZGljYXRlKCh4KT0+IHggPiAwKSksIFs3XSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoLTMsIGZyb21QcmVkaWNhdGUoKHgpPT4geCA+IDApKSwgW10pO1xuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21QcmVkaWNhdGU8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoYTogQSkgPT4gQXJyYXk8Qj5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJlZGljYXRlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihiOiBCKSA9PiBBcnJheTxCPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21QcmVkaWNhdGU8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYTogQSkgPT4gQXJyYXk8QT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJlZGljYXRlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGE6IEEpID0+IEFycmF5PEE+IHtcbiAgcmV0dXJuIChhKSA9PiAocHJlZGljYXRlKGEpID8gW2FdIDogW10pXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQ3JlYXRlIGFuIGFycmF5IGZyb20gYW4gYE9wdGlvbmAuIFRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBjb250YWluIHRoZSBjb250ZW50IG9mIHRoZVxuICogYE9wdGlvbmAgaWYgaXQgaXMgYFNvbWVgIGFuZCBpdCB3aWxsIGJlIGVtcHR5IGlmIHRoZSBgT3B0aW9uYCBpcyBgTm9uZWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZyb21PcHRpb24gfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gXCJmcC10c1wiO1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShvcHRpb24uc29tZShcImFcIiksIGZyb21PcHRpb24pLFtcImFcIl0pXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUob3B0aW9uLm5vbmUsIGZyb21PcHRpb24pLFtdKVxuICpcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbjogTmF0dXJhbFRyYW5zZm9ybWF0aW9uMTE8T1VSSSwgVVJJPiA9IChtYSkgPT4gKF8uaXNOb25lKG1hKSA/IFtdIDogW21hLnZhbHVlXSlcblxuLyoqXG4gKiBDcmVhdGUgYW4gYXJyYXkgZnJvbSBhbiBgRWl0aGVyYC4gVGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGNvbnRhaW4gdGhlIGNvbnRlbnQgb2YgdGhlXG4gKiBgRWl0aGVyYCBpZiBpdCBpcyBgUmlnaHRgIGFuZCBpdCB3aWxsIGJlIGVtcHR5IGlmIHRoZSBgRWl0aGVyYCBpcyBgTGVmdGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZyb21FaXRoZXIgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IGVpdGhlciB9IGZyb20gXCJmcC10c1wiO1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShlaXRoZXIucmlnaHQoXCJyXCIpLCBmcm9tRWl0aGVyKSwgW1wiclwiXSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoZWl0aGVyLmxlZnQoXCJsXCIpLCBmcm9tRWl0aGVyKSwgW10pO1xuICpcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUVpdGhlcjogRnJvbUVpdGhlcjE8VVJJPlsnZnJvbUVpdGhlciddID0gKGUpID0+IChfLmlzTGVmdChlKSA/IFtdIDogW2UucmlnaHRdKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BtYXRjaGBdKCNtYXRjaCkuIEl0IHdpbGwgd29yayB3aGVuIGBvbkVtcHR5YCBhbmQgYG9uTm9uRW1wdHlgXG4gKiBoYXZlIGRpZmZlcmVudCByZXR1cm4gdHlwZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1hdGNoVyB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IG1hdGNoZXJXID0gbWF0Y2hXKFxuICogICAoKSA9PiBcIk5vIGVsZW1lbnRzXCIsXG4gKiAgIChhcykgPT4gYXMubGVuZ3RoXG4gKiApO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzLCA0XSwgbWF0Y2hlclcpLCA0KTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbXSwgbWF0Y2hlclcpLCBcIk5vIGVsZW1lbnRzXCIpO1xuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hXID0gPEIsIEEsIEM+KG9uRW1wdHk6IExhenk8Qj4sIG9uTm9uRW1wdHk6IChhczogTm9uRW1wdHlBcnJheTxBPikgPT4gQykgPT4gKGFzOiBBcnJheTxBPik6IEIgfCBDID0+XG4gIGlzTm9uRW1wdHkoYXMpID8gb25Ob25FbXB0eShhcykgOiBvbkVtcHR5KClcblxuLyoqXG4gKiBUYWtlcyBhbiBhcnJheSwgaWYgdGhlIGFycmF5IGlzIGVtcHR5IGl0IHJldHVybnMgdGhlIHJlc3VsdCBvZiBgb25FbXB0eWAsIG90aGVyd2lzZVxuICogaXQgcGFzc2VzIHRoZSBhcnJheSB0byBgb25Ob25FbXB0eWAgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF0Y2ggfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBjb25zdCBtYXRjaGVyID0gbWF0Y2goXG4gKiAgICgpID0+IFwiTm8gZWxlbWVudHNcIixcbiAqICAgKGFzKSA9PiBgRm91bmQgJHthcy5sZW5ndGh9IGVsZW1lbnQocylgXG4gKiApO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzLCA0XSwgbWF0Y2hlciksIFwiRm91bmQgNCBlbGVtZW50KHMpXCIpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFtdLCBtYXRjaGVyKSwgXCJObyBlbGVtZW50c1wiKTtcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoOiA8QiwgQT4ob25FbXB0eTogTGF6eTxCPiwgb25Ob25FbXB0eTogKGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBCKSA9PiAoYXM6IEFycmF5PEE+KSA9PiBCID0gbWF0Y2hXXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoTGVmdGBdKCNtYXRjaGxlZnQpLiBJdCB3aWxsIHdvcmsgd2hlbiBgb25FbXB0eWAgYW5kXG4gKiBgb25Ob25FbXB0eWAgaGF2ZSBkaWZmZXJlbnQgcmV0dXJuIHR5cGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXRjaExlZnRXIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogY29uc3QgZiA9IG1hdGNoTGVmdFcoXG4gKiAgICgpID0+IDAsXG4gKiAgIChoZWFkOiBzdHJpbmcsIHRhaWw6IHN0cmluZ1tdKSA9PiBgRm91bmQgXCIke2hlYWR9XCIgZm9sbG93ZWQgYnkgJHt0YWlsLmxlbmd0aH0gZWxlbWVudHNgXG4gKiApO1xuICogYXNzZXJ0LnN0cmljdEVxdWFsKGYoW1wiYVwiLCBcImJcIiwgXCJjXCJdKSwgJ0ZvdW5kIFwiYVwiIGZvbGxvd2VkIGJ5IDIgZWxlbWVudHMnKTtcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChmKFtdKSwgMCk7XG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaExlZnRXID0gPEIsIEEsIEM+KG9uRW1wdHk6IExhenk8Qj4sIG9uTm9uRW1wdHk6IChoZWFkOiBBLCB0YWlsOiBBcnJheTxBPikgPT4gQykgPT4gKFxuICBhczogQXJyYXk8QT5cbik6IEIgfCBDID0+IChpc05vbkVtcHR5KGFzKSA/IG9uTm9uRW1wdHkoTkVBLmhlYWQoYXMpLCBORUEudGFpbChhcykpIDogb25FbXB0eSgpKVxuXG4vKipcbiAqIFRha2VzIGFuIGFycmF5LCBpZiB0aGUgYXJyYXkgaXMgZW1wdHkgaXQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIGBvbkVtcHR5YCwgb3RoZXJ3aXNlXG4gKiBpdCBwYXNzZXMgdGhlIGFycmF5IHRvIGBvbk5vbkVtcHR5YCBicm9rZW4gaW50byBpdHMgZmlyc3QgZWxlbWVudCBhbmQgcmVtYWluaW5nIGVsZW1lbnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXRjaExlZnQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBjb25zdCBsZW46IDxBPihhczogQXJyYXk8QT4pID0+IG51bWJlciA9IG1hdGNoTGVmdCgoKSA9PiAwLCAoXywgdGFpbCkgPT4gMSArIGxlbih0YWlsKSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChsZW4oWzEsIDIsIDNdKSwgMylcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoTGVmdDogPEIsIEE+KFxuICBvbkVtcHR5OiBMYXp5PEI+LFxuICBvbk5vbkVtcHR5OiAoaGVhZDogQSwgdGFpbDogQXJyYXk8QT4pID0+IEJcbikgPT4gKGFzOiBBcnJheTxBPikgPT4gQiA9IG1hdGNoTGVmdFdcblxuLyoqXG4gKiBBbGlhcyBvZiBbYG1hdGNoTGVmdGBdKCNtYXRjaGxlZnQpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkTGVmdDogPEEsIEI+KFxuICBvbkVtcHR5OiBMYXp5PEI+LFxuICBvbk5vbkVtcHR5OiAoaGVhZDogQSwgdGFpbDogQXJyYXk8QT4pID0+IEJcbikgPT4gKGFzOiBBcnJheTxBPikgPT4gQiA9IG1hdGNoTGVmdFxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BtYXRjaFJpZ2h0YF0oI21hdGNocmlnaHQpLiBJdCB3aWxsIHdvcmsgd2hlbiBgb25FbXB0eWAgYW5kXG4gKiBgb25Ob25FbXB0eWAgaGF2ZSBkaWZmZXJlbnQgcmV0dXJuIHR5cGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXRjaFJpZ2h0VyB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGNvbnN0IGYgPSBtYXRjaFJpZ2h0VyhcbiAqICAgKCkgPT4gMCxcbiAqICAgKGhlYWQ6IHN0cmluZ1tdLCB0YWlsOiBzdHJpbmcpID0+IGBGb3VuZCAke2hlYWQubGVuZ3RofSBlbGVtZW50cyBmb2xsbG93ZWQgYnkgXCIke3RhaWx9XCJgXG4gKiApO1xuICogYXNzZXJ0LnN0cmljdEVxdWFsKGYoW1wiYVwiLCBcImJcIiwgXCJjXCJdKSwgJ0ZvdW5kIDIgZWxlbWVudHMgZm9sbGxvd2VkIGJ5IFwiY1wiJyk7XG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoZihbXSksIDApO1xuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hSaWdodFcgPSA8QiwgQSwgQz4ob25FbXB0eTogTGF6eTxCPiwgb25Ob25FbXB0eTogKGluaXQ6IEFycmF5PEE+LCBsYXN0OiBBKSA9PiBDKSA9PiAoXG4gIGFzOiBBcnJheTxBPlxuKTogQiB8IEMgPT4gKGlzTm9uRW1wdHkoYXMpID8gb25Ob25FbXB0eShORUEuaW5pdChhcyksIE5FQS5sYXN0KGFzKSkgOiBvbkVtcHR5KCkpXG5cbi8qKlxuICogVGFrZXMgYW4gYXJyYXksIGlmIHRoZSBhcnJheSBpcyBlbXB0eSBpdCByZXR1cm5zIHRoZSByZXN1bHQgb2YgYG9uRW1wdHlgLCBvdGhlcndpc2VcbiAqIGl0IHBhc3NlcyB0aGUgYXJyYXkgdG8gYG9uTm9uRW1wdHlgIGJyb2tlbiAgaW50byBpdHMgaW5pdGlhbCBlbGVtZW50cyBhbmQgdGhlIGxhc3QgZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF0Y2hSaWdodCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGNvbnN0IGxlbjogPEE+KGFzOiBBcnJheTxBPikgPT4gbnVtYmVyID0gbWF0Y2hSaWdodChcbiAqICAgKCkgPT4gMCxcbiAqICAgKGhlYWQsIF8pID0+IDEgKyBsZW4oaGVhZClcbiAqICk7XG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwobGVuKFsxLCAyLCAzXSksIDMpO1xuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hSaWdodDogPEIsIEE+KFxuICBvbkVtcHR5OiBMYXp5PEI+LFxuICBvbk5vbkVtcHR5OiAoaW5pdDogQXJyYXk8QT4sIGxhc3Q6IEEpID0+IEJcbikgPT4gKGFzOiBBcnJheTxBPikgPT4gQiA9IG1hdGNoUmlnaHRXXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaFJpZ2h0YF0oI21hdGNocmlnaHQpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkUmlnaHQ6IDxBLCBCPihcbiAgb25FbXB0eTogTGF6eTxCPixcbiAgb25Ob25FbXB0eTogKGluaXQ6IEFycmF5PEE+LCBsYXN0OiBBKSA9PiBCXG4pID0+IChhczogQXJyYXk8QT4pID0+IEIgPSBtYXRjaFJpZ2h0XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogU2FtZSBhcyBbYGNoYWluYF0oI2NoYWluKSwgYnV0IHBhc3NpbmcgYWxzbyB0aGUgaW5kZXggdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY2hhaW5XaXRoSW5kZXgsIHJlcGxpY2F0ZSB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGYgPSAoaW5kZXg6IG51bWJlciwgeDogc3RyaW5nKSA9PiByZXBsaWNhdGUoMiwgYCR7eH0ke2luZGV4fWApO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFtcImFcIiwgXCJiXCIsIFwiY1wiXSwgY2hhaW5XaXRoSW5kZXgoZikpLCBbXCJhMFwiLCBcImEwXCIsIFwiYjFcIiwgXCJiMVwiLCBcImMyXCIsIFwiYzJcIl0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbldpdGhJbmRleCA9IDxBLCBCPihmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBBcnJheTxCPikgPT4gKGFzOiBBcnJheTxBPik6IEFycmF5PEI+ID0+IHtcbiAgY29uc3Qgb3V0OiBBcnJheTxCPiA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXQucHVzaCguLi5mKGksIGFzW2ldKSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogU2FtZSBhcyBgcmVkdWNlYCBidXQgaXQgY2FycmllcyBvdmVyIHRoZSBpbnRlcm1lZGlhdGUgc3RlcHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc2NhbkxlZnQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNjYW5MZWZ0KDEwLCAoYiwgYTogbnVtYmVyKSA9PiBiIC0gYSkoWzEsIDIsIDNdKSwgWzEwLCA5LCA3LCA0XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc2NhbkxlZnQgPSA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IChhczogQXJyYXk8QT4pOiBOb25FbXB0eUFycmF5PEI+ID0+IHtcbiAgY29uc3QgbGVuID0gYXMubGVuZ3RoXG4gIGNvbnN0IG91dCA9IG5ldyBBcnJheShsZW4gKyAxKSBhcyBOb25FbXB0eUFycmF5PEI+XG4gIG91dFswXSA9IGJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpICsgMV0gPSBmKG91dFtpXSwgYXNbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIEZvbGQgYW4gYXJyYXkgZnJvbSB0aGUgcmlnaHQsIGtlZXBpbmcgYWxsIGludGVybWVkaWF0ZSByZXN1bHRzIGluc3RlYWQgb2Ygb25seSB0aGUgZmluYWwgcmVzdWx0XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNjYW5SaWdodCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc2NhblJpZ2h0KDEwLCAoYTogbnVtYmVyLCBiKSA9PiBiIC0gYSkoWzEsIDIsIDNdKSwgWzQsIDUsIDcsIDEwXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc2NhblJpZ2h0ID0gPEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAoYXM6IEFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxCPiA9PiB7XG4gIGNvbnN0IGxlbiA9IGFzLmxlbmd0aFxuICBjb25zdCBvdXQgPSBuZXcgQXJyYXkobGVuICsgMSkgYXMgTm9uRW1wdHlBcnJheTxCPlxuICBvdXRbbGVuXSA9IGJcbiAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgb3V0W2ldID0gZihhc1tpXSwgb3V0W2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSBgQXJyYXlgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzaXplIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKHNpemUoW1wiYVwiLFwiYlwiLFwiY1wiXSksMylcbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzaXplID0gPEE+KGFzOiBBcnJheTxBPik6IG51bWJlciA9PiBhcy5sZW5ndGhcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYW4gYXJyYXkgY29udGFpbnMgYSBwYXJ0aWN1bGFyIGluZGV4XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGlzT3V0T2ZCb3VuZCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChpc091dE9mQm91bmQoMSxbXCJhXCIsXCJiXCIsXCJjXCJdKSxmYWxzZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChpc091dE9mQm91bmQoLTEsW1wiYVwiLFwiYlwiLFwiY1wiXSksdHJ1ZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChpc091dE9mQm91bmQoMyxbXCJhXCIsXCJiXCIsXCJjXCJdKSx0cnVlKVxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgaXNPdXRPZkJvdW5kOiA8QT4oaTogbnVtYmVyLCBhczogQXJyYXk8QT4pID0+IGJvb2xlYW4gPSBORUEuaXNPdXRPZkJvdW5kXG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGEgc2FmZSB3YXkgdG8gcmVhZCBhIHZhbHVlIGF0IGEgcGFydGljdWxhciBpbmRleCBmcm9tIGFuIGFycmF5LlxuICogSXQgcmV0dXJucyBhIGBub25lYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcywgYW5kIGEgYHNvbWVgIG9mIHRoZSBlbGVtZW50IGlmIHRoZVxuICogaW5kZXggaXMgdmFsaWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGxvb2t1cCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzEsIDIsIDNdLCBsb29rdXAoMSkpLCBzb21lKDIpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgbG9va3VwKDMpKSwgbm9uZSlcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxvb2t1cDoge1xuICAoaTogbnVtYmVyKTogPEE+KGFzOiBBcnJheTxBPikgPT4gT3B0aW9uPEE+XG4gIDxBPihpOiBudW1iZXIsIGFzOiBBcnJheTxBPik6IE9wdGlvbjxBPlxufSA9IFJBLmxvb2t1cFxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgZWxlbWVudCBpbiBhbiBhcnJheSwgb3IgYE5vbmVgIGlmIHRoZSBhcnJheSBpcyBlbXB0eVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBoZWFkIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaGVhZChbMSwgMiwgM10pLCBzb21lKDEpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChoZWFkKFtdKSwgbm9uZSlcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgaGVhZDogPEE+KGFzOiBBcnJheTxBPikgPT4gT3B0aW9uPEE+ID0gUkEuaGVhZFxuXG4vKipcbiAqIEdldCB0aGUgbGFzdCBlbGVtZW50IGluIGFuIGFycmF5LCBvciBgTm9uZWAgaWYgdGhlIGFycmF5IGlzIGVtcHR5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGxhc3QgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsYXN0KFsxLCAyLCAzXSksIHNvbWUoMykpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGxhc3QoW10pLCBub25lKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0OiA8QT4oYXM6IEFycmF5PEE+KSA9PiBPcHRpb248QT4gPSBSQS5sYXN0XG5cbi8qKlxuICogR2V0IGFsbCBidXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXksIGNyZWF0aW5nIGEgbmV3IGFycmF5LCBvciBgTm9uZWAgaWYgdGhlIGFycmF5IGlzIGVtcHR5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHRhaWwgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0YWlsKFsxLCAyLCAzXSksIHNvbWUoWzIsIDNdKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFpbChbXSksIG5vbmUpXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRhaWwgPSA8QT4oYXM6IEFycmF5PEE+KTogT3B0aW9uPEFycmF5PEE+PiA9PiAoaXNOb25FbXB0eShhcykgPyBfLnNvbWUoTkVBLnRhaWwoYXMpKSA6IF8ubm9uZSlcblxuLyoqXG4gKiBHZXQgYWxsIGJ1dCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LCBjcmVhdGluZyBhIG5ldyBhcnJheSwgb3IgYE5vbmVgIGlmIHRoZSBhcnJheSBpcyBlbXB0eVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpbml0IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW5pdChbMSwgMiwgM10pLCBzb21lKFsxLCAyXSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGluaXQoW10pLCBub25lKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0ID0gPEE+KGFzOiBBcnJheTxBPik6IE9wdGlvbjxBcnJheTxBPj4gPT4gKGlzTm9uRW1wdHkoYXMpID8gXy5zb21lKE5FQS5pbml0KGFzKSkgOiBfLm5vbmUpXG5cbi8qKlxuICogS2VlcCBvbmx5IGEgbWF4IG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBzdGFydCBvZiBhbiBgQXJyYXlgLCBjcmVhdGluZyBhIG5ldyBgQXJyYXlgLlxuICpcbiAqICoqTm90ZSoqLiBgbmAgaXMgbm9ybWFsaXplZCB0byBhIG5vbiBuZWdhdGl2ZSBpbnRlZ2VyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB0YWtlTGVmdCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFrZUxlZnQoMikoWzEsIDIsIDMsIDQsIDVdKSwgWzEsIDJdKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFrZUxlZnQoNykoWzEsIDIsIDMsIDQsIDVdKSwgWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFrZUxlZnQoMCkoWzEsIDIsIDMsIDQsIDVdKSwgW10pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0YWtlTGVmdCgtMSkoWzEsIDIsIDMsIDQsIDVdKSwgWzEsIDIsIDMsIDQsIDVdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdGFrZUxlZnQgPSAobjogbnVtYmVyKSA9PiA8QT4oYXM6IEFycmF5PEE+KTogQXJyYXk8QT4gPT4gKGlzT3V0T2ZCb3VuZChuLCBhcykgPyBjb3B5KGFzKSA6IGFzLnNsaWNlKDAsIG4pKVxuXG4vKipcbiAqIEtlZXAgb25seSBhIG1heCBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgZW5kIG9mIGFuIGBBcnJheWAsIGNyZWF0aW5nIGEgbmV3IGBBcnJheWAuXG4gKlxuICogKipOb3RlKiouIGBuYCBpcyBub3JtYWxpemVkIHRvIGEgbm9uIG5lZ2F0aXZlIGludGVnZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHRha2VSaWdodCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFrZVJpZ2h0KDIpKFsxLCAyLCAzLCA0LCA1XSksIFs0LCA1XSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHRha2VSaWdodCg3KShbMSwgMiwgMywgNCwgNV0pLCBbMSwgMiwgMywgNCwgNV0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0YWtlUmlnaHQoMCkoWzEsIDIsIDMsIDQsIDVdKSwgW10pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0YWtlUmlnaHQoLTEpKFsxLCAyLCAzLCA0LCA1XSksIFsxLCAyLCAzLCA0LCA1XSk7XG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRha2VSaWdodCA9IChuOiBudW1iZXIpID0+IDxBPihhczogQXJyYXk8QT4pOiBBcnJheTxBPiA9PlxuICBpc091dE9mQm91bmQobiwgYXMpID8gY29weShhcykgOiBuID09PSAwID8gW10gOiBhcy5zbGljZSgtbilcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGxvbmdlc3QgaW5pdGlhbCBzdWJhcnJheSBmb3Igd2hpY2ggYWxsIGVsZW1lbnQgc2F0aXNmeSB0aGUgc3BlY2lmaWVkIHByZWRpY2F0ZSwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdGFrZUxlZnRXaGlsZSB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFrZUxlZnRXaGlsZSgobjogbnVtYmVyKSA9PiBuICUgMiA9PT0gMCkoWzIsIDQsIDMsIDZdKSwgWzIsIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWtlTGVmdFdoaWxlPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGFzOiBBcnJheTxBPikgPT4gQXJyYXk8Qj5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlTGVmdFdoaWxlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihiczogQXJyYXk8Qj4pID0+IEFycmF5PEI+XG5leHBvcnQgZnVuY3Rpb24gdGFrZUxlZnRXaGlsZTxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChhczogQXJyYXk8QT4pID0+IEFycmF5PEE+XG5leHBvcnQgZnVuY3Rpb24gdGFrZUxlZnRXaGlsZTxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChhczogQXJyYXk8QT4pID0+IEFycmF5PEE+IHtcbiAgcmV0dXJuIChhczogQXJyYXk8QT4pID0+IHtcbiAgICBjb25zdCBvdXQ6IEFycmF5PEE+ID0gW11cbiAgICBmb3IgKGNvbnN0IGEgb2YgYXMpIHtcbiAgICAgIGlmICghcHJlZGljYXRlKGEpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBvdXQucHVzaChhKVxuICAgIH1cbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuY29uc3Qgc3BhbkxlZnRJbmRleCA9IDxBPihhczogQXJyYXk8QT4sIHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogbnVtYmVyID0+IHtcbiAgY29uc3QgbCA9IGFzLmxlbmd0aFxuICBsZXQgaSA9IDBcbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoIXByZWRpY2F0ZShhc1tpXSkpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBpXG59XG5cbi8qKlxuICogVHlwZSByZXR1cm5lZCBieSBbYHNwYW5MZWZ0YF0oI3NwYW5MZWZ0KSBjb21wb3NlZCBvZiBhbiBgaW5pdGAgYXJyYXkgYW5kIGEgYHJlc3RgIGFycmF5LlxuICpcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTcGFubmVkPEksIFI+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiByZWFkb25seS1rZXl3b3JkXG4gIGluaXQ6IEFycmF5PEk+XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmVhZG9ubHkta2V5d29yZFxuICByZXN0OiBBcnJheTxSPlxufVxuXG4vKipcbiAqIFNwbGl0IGFuIGFycmF5IGludG8gdHdvIHBhcnRzOlxuICogMS4gdGhlIGxvbmdlc3QgaW5pdGlhbCBzdWJhcnJheSBmb3Igd2hpY2ggYWxsIGVsZW1lbnRzIHNhdGlzZnkgdGhlIHNwZWNpZmllZCBwcmVkaWNhdGVcbiAqIDIuIHRoZSByZW1haW5pbmcgZWxlbWVudHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc3BhbkxlZnQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBjb25zdCBpc09kZCA9IChuOiBudW1iZXIpID0+IG4gJSAyID09PSAxO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzcGFuTGVmdChpc09kZCkoWzEsIDMsIDIsIDQsIDVdKSwgeyBpbml0OiBbMSwgM10sIHJlc3Q6IFsyLCA0LCA1XSB9KTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc3BhbkxlZnQoaXNPZGQpKFswLCAyLCA0LCA1XSksIHsgaW5pdDogW10sIHJlc3Q6IFswLCAyLCA0LCA1XSB9KTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc3BhbkxlZnQoaXNPZGQpKFsxLCAzLCA1XSksIHsgaW5pdDogWzEsIDMsIDVdLCByZXN0OiBbXSB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BhbkxlZnQ8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoYXM6IEFycmF5PEE+KSA9PiBTcGFubmVkPEIsIEE+XG5leHBvcnQgZnVuY3Rpb24gc3BhbkxlZnQ8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGJzOiBBcnJheTxCPikgPT4gU3Bhbm5lZDxCLCBCPlxuZXhwb3J0IGZ1bmN0aW9uIHNwYW5MZWZ0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gU3Bhbm5lZDxBLCBBPlxuZXhwb3J0IGZ1bmN0aW9uIHNwYW5MZWZ0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gU3Bhbm5lZDxBLCBBPiB7XG4gIHJldHVybiAoYXMpID0+IHtcbiAgICBjb25zdCBbaW5pdCwgcmVzdF0gPSBzcGxpdEF0KHNwYW5MZWZ0SW5kZXgoYXMsIHByZWRpY2F0ZSkpKGFzKVxuICAgIHJldHVybiB7IGluaXQsIHJlc3QgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlgIHdoaWNoIGlzIGEgY29weSBvZiB0aGUgaW5wdXQgZHJvcHBpbmcgYSBtYXggbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0LlxuICpcbiAqICoqTm90ZSoqLiBgbmAgaXMgbm9ybWFsaXplZCB0byBhIG5vbiBuZWdhdGl2ZSBpbnRlZ2VyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBkcm9wTGVmdCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZHJvcExlZnQoMikoWzEsIDIsIDNdKSwgWzNdKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZHJvcExlZnQoNSkoWzEsIDIsIDNdKSwgW10pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkcm9wTGVmdCgwKShbMSwgMiwgM10pLCBbMSwgMiwgM10pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkcm9wTGVmdCgtMikoWzEsIDIsIDNdKSwgWzEsIDIsIDNdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZHJvcExlZnQgPSAobjogbnVtYmVyKSA9PiA8QT4oYXM6IEFycmF5PEE+KTogQXJyYXk8QT4gPT5cbiAgbiA8PSAwIHx8IGlzRW1wdHkoYXMpID8gY29weShhcykgOiBuID49IGFzLmxlbmd0aCA/IFtdIDogYXMuc2xpY2UobiwgYXMubGVuZ3RoKVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5YCB3aGljaCBpcyBhIGNvcHkgb2YgdGhlIGlucHV0IGRyb3BwaW5nIGEgbWF4IG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBlbmQuXG4gKlxuICogKipOb3RlKiouIGBuYCBpcyBub3JtYWxpemVkIHRvIGEgbm9uIG5lZ2F0aXZlIGludGVnZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGRyb3BSaWdodCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZHJvcFJpZ2h0KDIpKFsxLCAyLCAzXSksIFsxXSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGRyb3BSaWdodCg1KShbMSwgMiwgM10pLCBbXSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGRyb3BSaWdodCgwKShbMSwgMiwgM10pLCBbMSwgMiwgM10pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkcm9wUmlnaHQoLTIpKFsxLCAyLCAzXSksIFsxLCAyLCAzXSk7XG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGRyb3BSaWdodCA9IChuOiBudW1iZXIpID0+IDxBPihhczogQXJyYXk8QT4pOiBBcnJheTxBPiA9PlxuICBuIDw9IDAgfHwgaXNFbXB0eShhcykgPyBjb3B5KGFzKSA6IG4gPj0gYXMubGVuZ3RoID8gW10gOiBhcy5zbGljZSgwLCBhcy5sZW5ndGggLSBuKVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5YCB3aGljaCBpcyBhIGNvcHkgb2YgdGhlIGlucHV0IGRyb3BwaW5nIHRoZSBsb25nZXN0IGluaXRpYWwgc3ViYXJyYXkgZm9yXG4gKiB3aGljaCBhbGwgZWxlbWVudCBzYXRpc2Z5IHRoZSBzcGVjaWZpZWQgcHJlZGljYXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBkcm9wTGVmdFdoaWxlIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkcm9wTGVmdFdoaWxlKChuOiBudW1iZXIpID0+IG4gJSAyID09PSAxKShbMSwgMywgMiwgNCwgNV0pLCBbMiwgNCwgNV0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyb3BMZWZ0V2hpbGU8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoYXM6IEFycmF5PEE+KSA9PiBBcnJheTxCPlxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BMZWZ0V2hpbGU8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGJzOiBBcnJheTxCPikgPT4gQXJyYXk8Qj5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wTGVmdFdoaWxlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gQXJyYXk8QT5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wTGVmdFdoaWxlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gQXJyYXk8QT4ge1xuICByZXR1cm4gKGFzKSA9PiBhcy5zbGljZShzcGFuTGVmdEluZGV4KGFzLCBwcmVkaWNhdGUpKVxufVxuXG4vKipcbiAqIGBmaW5kSW5kZXhgIHJldHVybnMgYW4gYE9wdGlvbmAgY29udGFpbmluZyB0aGUgZmlyc3QgaW5kZXggZm9yIHdoaWNoIGEgcHJlZGljYXRlIGhvbGRzLlxuICogSXQgcmV0dXJucyBgTm9uZWAgaWYgbm8gZWxlbWVudCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZS5cbiAqIFNpbWlsYXIgdG8gW2BmaW5kRmlyc3RgXSgjZmluZEZpcnN0KSBidXQgcmV0dXJuaW5nIHRoZSBpbmRleCBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaW5kSW5kZXggfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kSW5kZXgoKG46IG51bWJlcikgPT4gbiA9PT0gMikoWzEsIDIsIDNdKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZEluZGV4KChuOiBudW1iZXIpID0+IG4gPT09IDIpKFtdKSwgbm9uZSlcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRJbmRleDogPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiAoYXM6IEFycmF5PEE+KSA9PiBPcHRpb248bnVtYmVyPiA9IFJBLmZpbmRJbmRleFxuXG4vKipcbiAqIEZpbmQgdGhlIGZpcnN0IGVsZW1lbnQgd2hpY2ggc2F0aXNmaWVzIGEgcHJlZGljYXRlIChvciBhIHJlZmluZW1lbnQpIGZ1bmN0aW9uLlxuICogSXQgcmV0dXJucyBhbiBgT3B0aW9uYCBjb250YWluaW5nIHRoZSBlbGVtZW50IG9yIGBOb25lYCBpZiBub3QgZm91bmQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbmRGaXJzdCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiB0eXBlIFggPSB7XG4gKiAgIHJlYWRvbmx5IGE6IG51bWJlclxuICogICByZWFkb25seSBiOiBudW1iZXJcbiAqIH1cbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmRGaXJzdCgoeDogWCkgPT4geC5hID09PSAxKShbeyBhOiAxLCBiOiAxIH0sIHsgYTogMSwgYjogMiB9XSksIHNvbWUoeyBhOiAxLCBiOiAxIH0pKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3Q8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoYXM6IEFycmF5PEE+KSA9PiBPcHRpb248Qj5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3Q8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGJzOiBBcnJheTxCPikgPT4gT3B0aW9uPEI+XG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gT3B0aW9uPEE+XG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gT3B0aW9uPEE+IHtcbiAgcmV0dXJuIFJBLmZpbmRGaXJzdChwcmVkaWNhdGUpXG59XG5cbi8qKlxuICogR2l2ZW4gYSBzZWxlY3RvciBmdW5jdGlvbiB3aGljaCB0YWtlcyBhbiBlbGVtZW50IGFuZCByZXR1cm5zIGFuIG9wdGlvbixcbiAqIHRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgc2VsZWN0b3IgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSBhbmRcbiAqIHJldHVybnMgdGhlIGZpcnN0IGBTb21lYCByZXN1bHQuIE90aGVyd2lzZSBpdCByZXR1cm5zIGBOb25lYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmluZEZpcnN0TWFwIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGludGVyZmFjZSBQZXJzb24ge1xuICogICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gKiAgIHJlYWRvbmx5IGFnZTogbnVtYmVyO1xuICogfVxuICpcbiAqIGNvbnN0IHBlcnNvbnM6IEFycmF5PFBlcnNvbj4gPSBbXG4gKiAgIHsgbmFtZTogXCJKb2huXCIsIGFnZTogMTYgfSxcbiAqICAgeyBuYW1lOiBcIk1hcnlcIiwgYWdlOiA0NSB9LFxuICogICB7IG5hbWU6IFwiSm9leVwiLCBhZ2U6IDI4IH0sXG4gKiBdO1xuICpcbiAqIGNvbnN0IG5hbWVPZlBlcnNvbkFib3ZlMTggPSAocDogUGVyc29uKSA9PiAocC5hZ2UgPD0gMTggPyBub25lIDogc29tZShwLm5hbWUpKTtcbiAqIGNvbnN0IG5hbWVPZlBlcnNvbkFib3ZlNzAgPSAocDogUGVyc29uKSA9PiAocC5hZ2UgPD0gNzAgPyBub25lIDogc29tZShwLm5hbWUpKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZEZpcnN0TWFwKG5hbWVPZlBlcnNvbkFib3ZlMTgpKHBlcnNvbnMpLCBzb21lKFwiTWFyeVwiKSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmRGaXJzdE1hcChuYW1lT2ZQZXJzb25BYm92ZTcwKShwZXJzb25zKSwgbm9uZSk7XG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRGaXJzdE1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBPcHRpb248Qj4pID0+IChhczogQXJyYXk8QT4pID0+IE9wdGlvbjxCPiA9IFJBLmZpbmRGaXJzdE1hcFxuXG4vKipcbiAqIEZpbmQgdGhlIGxhc3QgZWxlbWVudCB3aGljaCBzYXRpc2ZpZXMgYSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBJdCByZXR1cm5zIGFuIGBPcHRpb25gIGNvbnRhaW5pbmcgdGhlIGVsZW1lbnQgb3IgYE5vbmVgIGlmIG5vdCBmb3VuZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmluZExhc3QgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogdHlwZSBYID0ge1xuICogICByZWFkb25seSBhOiBudW1iZXJcbiAqICAgcmVhZG9ubHkgYjogbnVtYmVyXG4gKiB9XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kTGFzdCgoeDogWCkgPT4geC5hID09PSAxKShbeyBhOiAxLCBiOiAxIH0sIHsgYTogMSwgYjogMiB9XSksIHNvbWUoeyBhOiAxLCBiOiAyIH0pKVxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChhczogQXJyYXk8QT4pID0+IE9wdGlvbjxCPlxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMYXN0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihiczogQXJyYXk8Qj4pID0+IE9wdGlvbjxCPlxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMYXN0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gT3B0aW9uPEE+XG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3Q8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IEFycmF5PEE+KSA9PiBPcHRpb248QT4ge1xuICByZXR1cm4gUkEuZmluZExhc3QocHJlZGljYXRlKVxufVxuXG4vKipcbiAqIEdpdmVuIGEgc2VsZWN0b3IgZnVuY3Rpb24gd2hpY2ggdGFrZXMgYW4gZWxlbWVudCBhbmQgcmV0dXJucyBhbiBvcHRpb24sXG4gKiB0aGlzIGZ1bmN0aW9uIGFwcGxpZXMgdGhlIHNlbGVjdG9yIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgc3RhcnRpbmcgZnJvbSB0aGVcbiAqIGVuZCBhbmQgcmV0dXJucyB0aGUgbGFzdCBgU29tZWAgcmVzdWx0LiBPdGhlcndpc2UgaXQgcmV0dXJucyBgTm9uZWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbmRMYXN0TWFwIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGludGVyZmFjZSBQZXJzb24ge1xuICogICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gKiAgIHJlYWRvbmx5IGFnZTogbnVtYmVyO1xuICogfVxuICpcbiAqIGNvbnN0IHBlcnNvbnM6IEFycmF5PFBlcnNvbj4gPSBbXG4gKiAgIHsgbmFtZTogXCJKb2huXCIsIGFnZTogMTYgfSxcbiAqICAgeyBuYW1lOiBcIk1hcnlcIiwgYWdlOiA0NSB9LFxuICogICB7IG5hbWU6IFwiSm9leVwiLCBhZ2U6IDI4IH0sXG4gKiBdO1xuICpcbiAqIGNvbnN0IG5hbWVPZlBlcnNvbkFib3ZlMTggPSAocDogUGVyc29uKSA9PiAocC5hZ2UgPD0gMTggPyBub25lIDogc29tZShwLm5hbWUpKTtcbiAqIGNvbnN0IG5hbWVPZlBlcnNvbkFib3ZlNzAgPSAocDogUGVyc29uKSA9PiAocC5hZ2UgPD0gNzAgPyBub25lIDogc29tZShwLm5hbWUpKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZExhc3RNYXAobmFtZU9mUGVyc29uQWJvdmUxOCkocGVyc29ucyksIHNvbWUoXCJKb2V5XCIpKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZExhc3RNYXAobmFtZU9mUGVyc29uQWJvdmU3MCkocGVyc29ucyksIG5vbmUpO1xuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kTGFzdE1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBPcHRpb248Qj4pID0+IChhczogQXJyYXk8QT4pID0+IE9wdGlvbjxCPiA9IFJBLmZpbmRMYXN0TWFwXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgbGlzdCB3aGljaCBtYXRjaGVzIHRoZSBwcmVkaWNhdGUuXG4gKiBJdCByZXR1cm5zIGFuIGBPcHRpb25gIGNvbnRhaW5pbmcgdGhlIGluZGV4IG9yIGBOb25lYCBpZiBub3QgZm91bmQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbmRMYXN0SW5kZXggfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogaW50ZXJmYWNlIFgge1xuICogICByZWFkb25seSBhOiBudW1iZXJcbiAqICAgcmVhZG9ubHkgYjogbnVtYmVyXG4gKiB9XG4gKiBjb25zdCB4czogQXJyYXk8WD4gPSBbeyBhOiAxLCBiOiAwIH0sIHsgYTogMSwgYjogMSB9XVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kTGFzdEluZGV4KCh4OiB7IHJlYWRvbmx5IGE6IG51bWJlciB9KSA9PiB4LmEgPT09IDEpKHhzKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZExhc3RJbmRleCgoeDogeyByZWFkb25seSBhOiBudW1iZXIgfSkgPT4geC5hID09PSA0KSh4cyksIG5vbmUpXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kTGFzdEluZGV4OiA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IChhczogQXJyYXk8QT4pID0+IE9wdGlvbjxudW1iZXI+ID0gUkEuZmluZExhc3RJbmRleFxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYW4gYXJyYXkgYW5kIG1ha2VzIGEgbmV3IGFycmF5IGNvbnRhaW5pbmcgdGhlIHNhbWUgZWxlbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvcHkgPSA8QT4oYXM6IEFycmF5PEE+KTogQXJyYXk8QT4gPT4gYXMuc2xpY2UoKVxuXG4vKipcbiAqIEluc2VydCBhbiBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXgsIGNyZWF0aW5nIGEgbmV3IGFycmF5LFxuICogb3IgcmV0dXJuaW5nIGBOb25lYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW5zZXJ0QXQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbnNlcnRBdCgyLCA1KShbMSwgMiwgMywgNF0pLCBzb21lKFsxLCAyLCA1LCAzLCA0XSkpXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRBdCA9IDxBPihpOiBudW1iZXIsIGE6IEEpID0+IChhczogQXJyYXk8QT4pOiBPcHRpb248Tm9uRW1wdHlBcnJheTxBPj4gPT5cbiAgaSA8IDAgfHwgaSA+IGFzLmxlbmd0aCA/IF8ubm9uZSA6IF8uc29tZSh1bnNhZmVJbnNlcnRBdChpLCBhLCBhcykpXG5cbi8qKlxuICogQ2hhbmdlIHRoZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXgsIGNyZWF0aW5nIGEgbmV3IGFycmF5LFxuICogb3IgcmV0dXJuaW5nIGBOb25lYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdXBkYXRlQXQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh1cGRhdGVBdCgxLCAxKShbMSwgMiwgM10pLCBzb21lKFsxLCAxLCAzXSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVwZGF0ZUF0KDEsIDEpKFtdKSwgbm9uZSlcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUF0ID0gPEE+KGk6IG51bWJlciwgYTogQSk6ICgoYXM6IEFycmF5PEE+KSA9PiBPcHRpb248QXJyYXk8QT4+KSA9PiBtb2RpZnlBdChpLCAoKSA9PiBhKVxuXG4vKipcbiAqIERlbGV0ZSB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCBjcmVhdGluZyBhIG5ldyBhcnJheSwgb3IgcmV0dXJuaW5nIGBOb25lYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZGVsZXRlQXQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkZWxldGVBdCgwKShbMSwgMiwgM10pLCBzb21lKFsyLCAzXSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGRlbGV0ZUF0KDEpKFtdKSwgbm9uZSlcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUF0ID0gKGk6IG51bWJlcikgPT4gPEE+KGFzOiBBcnJheTxBPik6IE9wdGlvbjxBcnJheTxBPj4gPT5cbiAgaXNPdXRPZkJvdW5kKGksIGFzKSA/IF8ubm9uZSA6IF8uc29tZSh1bnNhZmVEZWxldGVBdChpLCBhcykpXG5cbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiB0byB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCBjcmVhdGluZyBhIG5ldyBhcnJheSwgb3IgcmV0dXJuaW5nIGBOb25lYCBpZiB0aGUgaW5kZXggaXMgb3V0XG4gKiBvZiBib3VuZHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1vZGlmeUF0IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGNvbnN0IGRvdWJsZSA9ICh4OiBudW1iZXIpOiBudW1iZXIgPT4geCAqIDJcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobW9kaWZ5QXQoMSwgZG91YmxlKShbMSwgMiwgM10pLCBzb21lKFsxLCA0LCAzXSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKG1vZGlmeUF0KDEsIGRvdWJsZSkoW10pLCBub25lKVxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbW9kaWZ5QXQgPSA8QT4oaTogbnVtYmVyLCBmOiAoYTogQSkgPT4gQSkgPT4gKGFzOiBBcnJheTxBPik6IE9wdGlvbjxBcnJheTxBPj4gPT5cbiAgaXNPdXRPZkJvdW5kKGksIGFzKSA/IF8ubm9uZSA6IF8uc29tZSh1bnNhZmVVcGRhdGVBdChpLCBmKGFzW2ldKSwgYXMpKVxuXG4vKipcbiAqIFJldmVyc2UgYW4gYXJyYXksIGNyZWF0aW5nIGEgbmV3IGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJldmVyc2UgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJldmVyc2UoWzEsIDIsIDNdKSwgWzMsIDIsIDFdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gPEE+KGFzOiBBcnJheTxBPik6IEFycmF5PEE+ID0+IChpc0VtcHR5KGFzKSA/IFtdIDogYXMuc2xpY2UoKS5yZXZlcnNlKCkpXG5cbi8qKlxuICogVGFrZXMgYW4gYEFycmF5YCBvZiBgRWl0aGVyYCBhbmQgcHJvZHVjZXMgYSBuZXcgYEFycmF5YCBjb250YWluaW5nXG4gKiB0aGUgdmFsdWVzIG9mIGFsbCB0aGUgYFJpZ2h0YCBlbGVtZW50cyBpbiB0aGUgc2FtZSBvcmRlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcmlnaHRzIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyByaWdodCwgbGVmdCB9IGZyb20gJ2ZwLXRzL0VpdGhlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJpZ2h0cyhbcmlnaHQoMSksIGxlZnQoJ2ZvbycpLCByaWdodCgyKV0pLCBbMSwgMl0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0cyA9IDxFLCBBPihhczogQXJyYXk8RWl0aGVyPEUsIEE+Pik6IEFycmF5PEE+ID0+IHtcbiAgY29uc3QgcjogQXJyYXk8QT4gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGFzW2ldXG4gICAgaWYgKGEuX3RhZyA9PT0gJ1JpZ2h0Jykge1xuICAgICAgci5wdXNoKGEucmlnaHQpXG4gICAgfVxuICB9XG4gIHJldHVybiByXG59XG5cbi8qKlxuICogVGFrZXMgYW4gYEFycmF5YCBvZiBgRWl0aGVyYCBhbmQgcHJvZHVjZXMgYSBuZXcgYEFycmF5YCBjb250YWluaW5nXG4gKiB0aGUgdmFsdWVzIG9mIGFsbCB0aGUgYExlZnRgIGVsZW1lbnRzIGluIHRoZSBzYW1lIG9yZGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBsZWZ0cyB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgbGVmdCwgcmlnaHQgfSBmcm9tICdmcC10cy9FaXRoZXInXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsZWZ0cyhbcmlnaHQoMSksIGxlZnQoJ2ZvbycpLCByaWdodCgyKV0pLCBbJ2ZvbyddKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0cyA9IDxFLCBBPihhczogQXJyYXk8RWl0aGVyPEUsIEE+Pik6IEFycmF5PEU+ID0+IHtcbiAgY29uc3QgcjogQXJyYXk8RT4gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGFzW2ldXG4gICAgaWYgKGEuX3RhZyA9PT0gJ0xlZnQnKSB7XG4gICAgICByLnB1c2goYS5sZWZ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gclxufVxuXG4vKipcbiAqIFNvcnQgdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IGluIGluY3JlYXNpbmcgb3JkZXIsIGNyZWF0aW5nIGEgbmV3IGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvcnQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc29ydChOLk9yZCkoWzMsIDIsIDFdKSwgWzEsIDIsIDNdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0ID0gPEI+KE86IE9yZDxCPikgPT4gPEEgZXh0ZW5kcyBCPihhczogQXJyYXk8QT4pOiBBcnJheTxBPiA9PlxuICBhcy5sZW5ndGggPD0gMSA/IGNvcHkoYXMpIDogYXMuc2xpY2UoKS5zb3J0KE8uY29tcGFyZSlcblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIHBhaXJzIG9mIGVsZW1lbnRzIGF0IHRoZSBzYW1lIGluZGV4IGluIHR3byBhcnJheXMsIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW4gYSBuZXcgYXJyYXkuIElmIG9uZVxuICogaW5wdXQgYXJyYXkgaXMgc2hvcnQsIGV4Y2VzcyBlbGVtZW50cyBvZiB0aGUgbG9uZ2VyIGFycmF5IGFyZSBkaXNjYXJkZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHppcFdpdGggfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHppcFdpdGgoWzEsIDIsIDNdLCBbJ2EnLCAnYicsICdjJywgJ2QnXSwgKG4sIHMpID0+IHMgKyBuKSwgWydhMScsICdiMicsICdjMyddKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB6aXBXaXRoID0gPEEsIEIsIEM+KGZhOiBBcnJheTxBPiwgZmI6IEFycmF5PEI+LCBmOiAoYTogQSwgYjogQikgPT4gQyk6IEFycmF5PEM+ID0+IHtcbiAgY29uc3QgZmM6IEFycmF5PEM+ID0gW11cbiAgY29uc3QgbGVuID0gTWF0aC5taW4oZmEubGVuZ3RoLCBmYi5sZW5ndGgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBmY1tpXSA9IGYoZmFbaV0sIGZiW2ldKVxuICB9XG4gIHJldHVybiBmY1xufVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogVGFrZXMgdHdvIGFycmF5cyBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBjb3JyZXNwb25kaW5nIHBhaXJzLiBJZiBvbmUgaW5wdXQgYXJyYXkgaXMgc2hvcnQsIGV4Y2VzcyBlbGVtZW50cyBvZiB0aGVcbiAqIGxvbmdlciBhcnJheSBhcmUgZGlzY2FyZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHppcCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbMSwgMiwgM10sIHppcChbJ2EnLCAnYicsICdjJywgJ2QnXSkpLCBbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHppcDxCPihiczogQXJyYXk8Qj4pOiA8QT4oYXM6IEFycmF5PEE+KSA9PiBBcnJheTxbQSwgQl0+XG5leHBvcnQgZnVuY3Rpb24gemlwPEEsIEI+KGFzOiBBcnJheTxBPiwgYnM6IEFycmF5PEI+KTogQXJyYXk8W0EsIEJdPlxuZXhwb3J0IGZ1bmN0aW9uIHppcDxBLCBCPihhczogQXJyYXk8QT4sIGJzPzogQXJyYXk8Qj4pOiBBcnJheTxbQSwgQl0+IHwgKChiczogQXJyYXk8Qj4pID0+IEFycmF5PFtCLCBBXT4pIHtcbiAgaWYgKGJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKGJzKSA9PiB6aXAoYnMsIGFzKVxuICB9XG4gIHJldHVybiB6aXBXaXRoKGFzLCBicywgKGEsIGIpID0+IFthLCBiXSlcbn1cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gaXMgcmV2ZXJzZSBvZiBgemlwYC4gVGFrZXMgYW4gYXJyYXkgb2YgcGFpcnMgYW5kIHJldHVybiB0d28gY29ycmVzcG9uZGluZyBhcnJheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdW56aXAgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuemlwKFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXSksIFtbMSwgMiwgM10sIFsnYScsICdiJywgJ2MnXV0pXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bnppcCA9IDxBLCBCPihhczogQXJyYXk8W0EsIEJdPik6IFtBcnJheTxBPiwgQXJyYXk8Qj5dID0+IHtcbiAgY29uc3QgZmE6IEFycmF5PEE+ID0gW11cbiAgY29uc3QgZmI6IEFycmF5PEI+ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcy5sZW5ndGg7IGkrKykge1xuICAgIGZhW2ldID0gYXNbaV1bMF1cbiAgICBmYltpXSA9IGFzW2ldWzFdXG4gIH1cbiAgcmV0dXJuIFtmYSwgZmJdXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlgLCBwcmVwZW5kaW5nIGFuIGVsZW1lbnQgdG8gZXZlcnkgbWVtYmVyIG9mIHRoZSBpbnB1dCBgQXJyYXlgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBwcmVwZW5kQWxsIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwcmVwZW5kQWxsKDkpKFsxLCAyLCAzLCA0XSksIFs5LCAxLCA5LCAyLCA5LCAzLCA5LCA0XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHByZXBlbmRBbGwgPSA8QT4obWlkZGxlOiBBKTogKChhczogQXJyYXk8QT4pID0+IEFycmF5PEE+KSA9PiB7XG4gIGNvbnN0IGYgPSBORUEucHJlcGVuZEFsbChtaWRkbGUpXG4gIHJldHVybiAoYXMpID0+IChpc05vbkVtcHR5KGFzKSA/IGYoYXMpIDogW10pXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlgIHBsYWNpbmcgYW4gZWxlbWVudCBpbiBiZXR3ZWVuIG1lbWJlcnMgb2YgdGhlIGlucHV0IGBBcnJheWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGludGVyc3BlcnNlIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbnRlcnNwZXJzZSg5KShbMSwgMiwgMywgNF0pLCBbMSwgOSwgMiwgOSwgMywgOSwgNF0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGludGVyc3BlcnNlID0gPEE+KG1pZGRsZTogQSk6ICgoYXM6IEFycmF5PEE+KSA9PiBBcnJheTxBPikgPT4ge1xuICBjb25zdCBmID0gTkVBLmludGVyc3BlcnNlKG1pZGRsZSlcbiAgcmV0dXJuIChhcykgPT4gKGlzTm9uRW1wdHkoYXMpID8gZihhcykgOiBjb3B5KGFzKSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheWAgcm90YXRpbmcgdGhlIGlucHV0IGBBcnJheWAgYnkgYG5gIHN0ZXBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByb3RhdGUgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJvdGF0ZSgyKShbMSwgMiwgMywgNCwgNV0pLCBbNCwgNSwgMSwgMiwgM10pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJvdGF0ZSA9IChuOiBudW1iZXIpOiAoPEE+KGFzOiBBcnJheTxBPikgPT4gQXJyYXk8QT4pID0+IHtcbiAgY29uc3QgZiA9IE5FQS5yb3RhdGUobilcbiAgcmV0dXJuIChhcykgPT4gKGlzTm9uRW1wdHkoYXMpID8gZihhcykgOiBjb3B5KGFzKSlcbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIFRlc3QgaWYgYSB2YWx1ZSBpcyBhIG1lbWJlciBvZiBhbiBgQXJyYXlgLiBUYWtlcyBhIGBFcTxBPmAgYXMgYSBzaW5nbGVcbiAqIGFyZ3VtZW50IHdoaWNoIHJldHVybnMgdGhlIGZ1bmN0aW9uIHRvIHVzZSB0byBzZWFyY2ggZm9yIGEgdmFsdWUgb2YgdHlwZSBgQWAgaW5cbiAqIGFuIGBBcnJheTxBPmAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGVsZW0gfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgZWxlbShOLkVxKSgyKSksIHRydWUpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwocGlwZShbMSwgMiwgM10sIGVsZW0oTi5FcSkoMCkpLCBmYWxzZSlcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGVsZW06IDxBPihcbiAgRTogRXE8QT5cbikgPT4ge1xuICAoYTogQSk6IChhczogQXJyYXk8QT4pID0+IGJvb2xlYW5cbiAgKGE6IEEsIGFzOiBBcnJheTxBPik6IGJvb2xlYW5cbn0gPSBSQS5lbGVtXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlgIHJlbW92aW5nIGR1cGxpY2F0ZSBlbGVtZW50cywga2VlcGluZyB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhbiBlbGVtZW50LFxuICogYmFzZWQgb24gYSBgRXE8QT5gLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB1bmlxIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuaXEoTi5FcSkoWzEsIDIsIDFdKSwgWzEsIDJdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxID0gPEE+KEU6IEVxPEE+KTogKChhczogQXJyYXk8QT4pID0+IEFycmF5PEE+KSA9PiB7XG4gIGNvbnN0IGYgPSBORUEudW5pcShFKVxuICByZXR1cm4gKGFzKSA9PiAoaXNOb25FbXB0eShhcykgPyBmKGFzKSA6IGNvcHkoYXMpKVxufVxuXG4vKipcbiAqIFNvcnQgdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IGluIGluY3JlYXNpbmcgb3JkZXIsIHdoZXJlIGVsZW1lbnRzIGFyZSBjb21wYXJlZCB1c2luZyBmaXJzdCBgb3Jkc1swXWAsIHRoZW4gYG9yZHNbMV1gLFxuICogZXRjLi4uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvcnRCeSB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgY29udHJhbWFwIH0gZnJvbSAnZnAtdHMvT3JkJ1xuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBpbnRlcmZhY2UgUGVyc29uIHtcbiAqICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gKiAgIHJlYWRvbmx5IGFnZTogbnVtYmVyXG4gKiB9XG4gKiBjb25zdCBieU5hbWUgPSBwaXBlKFMuT3JkLCBjb250cmFtYXAoKHA6IFBlcnNvbikgPT4gcC5uYW1lKSlcbiAqIGNvbnN0IGJ5QWdlID0gcGlwZShOLk9yZCwgY29udHJhbWFwKChwOiBQZXJzb24pID0+IHAuYWdlKSlcbiAqXG4gKiBjb25zdCBzb3J0QnlOYW1lQnlBZ2UgPSBzb3J0QnkoW2J5TmFtZSwgYnlBZ2VdKVxuICpcbiAqIGNvbnN0IHBlcnNvbnMgPSBbeyBuYW1lOiAnYScsIGFnZTogMSB9LCB7IG5hbWU6ICdiJywgYWdlOiAzIH0sIHsgbmFtZTogJ2MnLCBhZ2U6IDIgfSwgeyBuYW1lOiAnYicsIGFnZTogMiB9XVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzb3J0QnlOYW1lQnlBZ2UocGVyc29ucyksIFtcbiAqICAgeyBuYW1lOiAnYScsIGFnZTogMSB9LFxuICogICB7IG5hbWU6ICdiJywgYWdlOiAyIH0sXG4gKiAgIHsgbmFtZTogJ2InLCBhZ2U6IDMgfSxcbiAqICAgeyBuYW1lOiAnYycsIGFnZTogMiB9XG4gKiBdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0QnkgPSA8Qj4ob3JkczogQXJyYXk8T3JkPEI+Pik6ICg8QSBleHRlbmRzIEI+KGFzOiBBcnJheTxBPikgPT4gQXJyYXk8QT4pID0+IHtcbiAgY29uc3QgZiA9IE5FQS5zb3J0Qnkob3JkcylcbiAgcmV0dXJuIChhcykgPT4gKGlzTm9uRW1wdHkoYXMpID8gZihhcykgOiBjb3B5KGFzKSlcbn1cblxuLyoqXG4gKiBBIHVzZWZ1bCByZWN1cnNpb24gcGF0dGVybiBmb3IgcHJvY2Vzc2luZyBhbiBhcnJheSB0byBwcm9kdWNlIGEgbmV3IGFycmF5LCBvZnRlbiB1c2VkIGZvciBcImNob3BwaW5nXCIgdXAgdGhlIGlucHV0XG4gKiBhcnJheS4gVHlwaWNhbGx5IGNob3AgaXMgY2FsbGVkIHdpdGggc29tZSBmdW5jdGlvbiB0aGF0IHdpbGwgY29uc3VtZSBhbiBpbml0aWFsIHByZWZpeCBvZiB0aGUgYXJyYXkgYW5kIHByb2R1Y2UgYVxuICogdmFsdWUgYW5kIHRoZSByZXN0IG9mIHRoZSBhcnJheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgRXEgfSBmcm9tICdmcC10cy9FcSdcbiAqIGltcG9ydCAqIGFzIEEgZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBjb25zdCBncm91cCA9IDxBPihTOiBFcTxBPik6ICgoYXM6IEFycmF5PEE+KSA9PiBBcnJheTxBcnJheTxBPj4pID0+IHtcbiAqICAgcmV0dXJuIEEuY2hvcChhcyA9PiB7XG4gKiAgICAgY29uc3QgeyBpbml0LCByZXN0IH0gPSBwaXBlKGFzLCBBLnNwYW5MZWZ0KChhOiBBKSA9PiBTLmVxdWFscyhhLCBhc1swXSkpKVxuICogICAgIHJldHVybiBbaW5pdCwgcmVzdF1cbiAqICAgfSlcbiAqIH1cbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ3JvdXAoTi5FcSkoWzEsIDEsIDIsIDMsIDMsIDRdKSwgW1sxLCAxXSwgWzJdLCBbMywgM10sIFs0XV0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNob3AgPSA8QSwgQj4oZjogKGFzOiBOb25FbXB0eUFycmF5PEE+KSA9PiBbQiwgQXJyYXk8QT5dKTogKChhczogQXJyYXk8QT4pID0+IEFycmF5PEI+KSA9PiB7XG4gIGNvbnN0IGcgPSBORUEuY2hvcChmKVxuICByZXR1cm4gKGFzKSA9PiAoaXNOb25FbXB0eShhcykgPyBnKGFzKSA6IFtdKVxufVxuXG4vKipcbiAqIFNwbGl0cyBhbiBgQXJyYXlgIGludG8gdHdvIHBpZWNlcywgdGhlIGZpcnN0IHBpZWNlIGhhcyBtYXggYG5gIGVsZW1lbnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzcGxpdEF0IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzcGxpdEF0KDIpKFsxLCAyLCAzLCA0LCA1XSksIFtbMSwgMl0sIFszLCA0LCA1XV0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNwbGl0QXQgPSAobjogbnVtYmVyKSA9PiA8QT4oYXM6IEFycmF5PEE+KTogW0FycmF5PEE+LCBBcnJheTxBPl0gPT5cbiAgbiA+PSAxICYmIGlzTm9uRW1wdHkoYXMpID8gTkVBLnNwbGl0QXQobikoYXMpIDogaXNFbXB0eShhcykgPyBbY29weShhcyksIFtdXSA6IFtbXSwgY29weShhcyldXG5cbi8qKlxuICogU3BsaXRzIGFuIGFycmF5IGludG8gbGVuZ3RoLWBuYCBwaWVjZXMuIFRoZSBsYXN0IHBpZWNlIHdpbGwgYmUgc2hvcnRlciBpZiBgbmAgZG9lcyBub3QgZXZlbmx5IGRpdmlkZSB0aGUgbGVuZ3RoIG9mXG4gKiB0aGUgYXJyYXkuIE5vdGUgdGhhdCBgY2h1bmtzT2YobikoW10pYCBpcyBgW11gLCBub3QgYFtbXV1gLiBUaGlzIGlzIGludGVudGlvbmFsLCBhbmQgaXMgY29uc2lzdGVudCB3aXRoIGEgcmVjdXJzaXZlXG4gKiBkZWZpbml0aW9uIG9mIGBjaHVua3NPZmA7IGl0IHNhdGlzZmllcyB0aGUgcHJvcGVydHkgdGhhdFxuICpcbiAqIGBgYHRzXG4gKiBjaHVua3NPZihuKSh4cykuY29uY2F0KGNodW5rc09mKG4pKHlzKSkgPT0gY2h1bmtzT2YobikoeHMuY29uY2F0KHlzKSkpXG4gKiBgYGBcbiAqXG4gKiB3aGVuZXZlciBgbmAgZXZlbmx5IGRpdmlkZXMgdGhlIGxlbmd0aCBvZiBgeHNgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjaHVua3NPZiB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY2h1bmtzT2YoMikoWzEsIDIsIDMsIDQsIDVdKSwgW1sxLCAyXSwgWzMsIDRdLCBbNV1dKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaHVua3NPZiA9IChuOiBudW1iZXIpOiAoPEE+KGFzOiBBcnJheTxBPikgPT4gQXJyYXk8Tm9uRW1wdHlBcnJheTxBPj4pID0+IHtcbiAgY29uc3QgZiA9IE5FQS5jaHVua3NPZihuKVxuICByZXR1cm4gKGFzKSA9PiAoaXNOb25FbXB0eShhcykgPyBmKGFzKSA6IFtdKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbksgPSA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KGY6ICguLi5hOiBBKSA9PiBPcHRpb248Qj4pID0+ICguLi5hOiBBKTogQXJyYXk8Qj4gPT5cbiAgZnJvbU9wdGlvbihmKC4uLmEpKVxuXG4vKipcbiAqIGBBcnJheWAgY29tcHJlaGVuc2lvbi5cbiAqXG4gKiBgYGBcbiAqIFsgZih4LCB5LCAuLi4pIHwgeCDihpAgeHMsIHkg4oaQIHlzLCAuLi4sIGcoeCwgeSwgLi4uKSBdXG4gKiBgYGBcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29tcHJlaGVuc2lvbiB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgdHVwbGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbXByZWhlbnNpb24oW1sxLCAyLCAzXSwgWydhJywgJ2InXV0sIHR1cGxlLCAoYSwgYikgPT4gKGEgKyBiLmxlbmd0aCkgJSAyID09PSAwKSwgW1xuICogICBbMSwgJ2EnXSxcbiAqICAgWzEsICdiJ10sXG4gKiAgIFszLCAnYSddLFxuICogICBbMywgJ2InXVxuICogXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlaGVuc2lvbjxBLCBCLCBDLCBELCBSPihcbiAgaW5wdXQ6IFtBcnJheTxBPiwgQXJyYXk8Qj4sIEFycmF5PEM+LCBBcnJheTxEPl0sXG4gIGY6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKSA9PiBSLFxuICBnPzogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpID0+IGJvb2xlYW5cbik6IEFycmF5PFI+XG5leHBvcnQgZnVuY3Rpb24gY29tcHJlaGVuc2lvbjxBLCBCLCBDLCBSPihcbiAgaW5wdXQ6IFtBcnJheTxBPiwgQXJyYXk8Qj4sIEFycmF5PEM+XSxcbiAgZjogKGE6IEEsIGI6IEIsIGM6IEMpID0+IFIsXG4gIGc/OiAoYTogQSwgYjogQiwgYzogQykgPT4gYm9vbGVhblxuKTogQXJyYXk8Uj5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVoZW5zaW9uPEEsIEIsIFI+KFxuICBpbnB1dDogW0FycmF5PEE+LCBBcnJheTxCPl0sXG4gIGY6IChhOiBBLCBiOiBCKSA9PiBSLFxuICBnPzogKGE6IEEsIGI6IEIpID0+IGJvb2xlYW5cbik6IEFycmF5PFI+XG5leHBvcnQgZnVuY3Rpb24gY29tcHJlaGVuc2lvbjxBLCBSPihpbnB1dDogW0FycmF5PEE+XSwgZjogKGE6IEEpID0+IFIsIGc/OiAoYTogQSkgPT4gYm9vbGVhbik6IEFycmF5PFI+XG5leHBvcnQgZnVuY3Rpb24gY29tcHJlaGVuc2lvbjxBLCBSPihcbiAgaW5wdXQ6IEFycmF5PEFycmF5PEE+PixcbiAgZjogKC4uLnhzOiBBcnJheTxBPikgPT4gUixcbiAgZzogKC4uLnhzOiBBcnJheTxBPikgPT4gYm9vbGVhbiA9ICgpID0+IHRydWVcbik6IEFycmF5PFI+IHtcbiAgY29uc3QgZ28gPSAoc2NvcGU6IEFycmF5PEE+LCBpbnB1dDogQXJyYXk8QXJyYXk8QT4+KTogQXJyYXk8Uj4gPT5cbiAgICBpc05vbkVtcHR5KGlucHV0KVxuICAgICAgPyBwaXBlKFxuICAgICAgICAgIE5FQS5oZWFkKGlucHV0KSxcbiAgICAgICAgICBjaGFpbigoeCkgPT4gZ28ocGlwZShzY29wZSwgYXBwZW5kKHgpKSwgTkVBLnRhaWwoaW5wdXQpKSlcbiAgICAgICAgKVxuICAgICAgOiBnKC4uLnNjb3BlKVxuICAgICAgPyBbZiguLi5zY29wZSldXG4gICAgICA6IFtdXG4gIHJldHVybiBnbyhbXSwgaW5wdXQpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjb25jYXRXID0gPEI+KHNlY29uZDogQXJyYXk8Qj4pID0+IDxBPihmaXJzdDogQXJyYXk8QT4pOiBBcnJheTxBIHwgQj4gPT5cbiAgaXNFbXB0eShmaXJzdCkgPyBjb3B5KHNlY29uZCkgOiBpc0VtcHR5KHNlY29uZCkgPyBjb3B5KGZpcnN0KSA6IChmaXJzdCBhcyBBcnJheTxBIHwgQj4pLmNvbmNhdChzZWNvbmQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjb25jYXQ6IDxBPihzZWNvbmQ6IEFycmF5PEE+KSA9PiAoZmlyc3Q6IEFycmF5PEE+KSA9PiBBcnJheTxBPiA9IGNvbmNhdFdcblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcywgaW4gb3JkZXIsIGZyb20gYWxsIGdpdmVuIGFycmF5cyB1c2luZyBhIGBFcWAgZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVuaW9uIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzEsIDJdLCB1bmlvbihOLkVxKShbMiwgM10pKSwgWzEsIDIsIDNdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlvbjxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKHhzOiBBcnJheTxBPik6ICh5czogQXJyYXk8QT4pID0+IEFycmF5PEE+XG4gICh4czogQXJyYXk8QT4sIHlzOiBBcnJheTxBPik6IEFycmF5PEE+XG59XG5leHBvcnQgZnVuY3Rpb24gdW5pb248QT4oRTogRXE8QT4pOiAoeHM6IEFycmF5PEE+LCB5cz86IEFycmF5PEE+KSA9PiBBcnJheTxBPiB8ICgoeXM6IEFycmF5PEE+KSA9PiBBcnJheTxBPikge1xuICBjb25zdCB1bmlvbkUgPSBORUEudW5pb24oRSlcbiAgcmV0dXJuIChmaXJzdCwgc2Vjb25kPykgPT4ge1xuICAgIGlmIChzZWNvbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdW5pb25FID0gdW5pb24oRSlcbiAgICAgIHJldHVybiAoc2Vjb25kKSA9PiB1bmlvbkUoc2Vjb25kLCBmaXJzdClcbiAgICB9XG4gICAgcmV0dXJuIGlzTm9uRW1wdHkoZmlyc3QpICYmIGlzTm9uRW1wdHkoc2Vjb25kKVxuICAgICAgPyB1bmlvbkUoc2Vjb25kKShmaXJzdClcbiAgICAgIDogaXNOb25FbXB0eShmaXJzdClcbiAgICAgID8gY29weShmaXJzdClcbiAgICAgIDogY29weShzZWNvbmQpXG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGFyZSBpbmNsdWRlZCBpbiBhbGwgZ2l2ZW4gYXJyYXlzIHVzaW5nIGEgYEVxYCBmb3IgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zLiBUaGUgb3JkZXIgYW5kIHJlZmVyZW5jZXMgb2YgcmVzdWx0IHZhbHVlcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgZmlyc3QgYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGludGVyc2VjdGlvbiB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyXSwgaW50ZXJzZWN0aW9uKE4uRXEpKFsyLCAzXSkpLCBbMl0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbjxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKHhzOiBBcnJheTxBPik6ICh5czogQXJyYXk8QT4pID0+IEFycmF5PEE+XG4gICh4czogQXJyYXk8QT4sIHlzOiBBcnJheTxBPik6IEFycmF5PEE+XG59XG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uPEE+KEU6IEVxPEE+KTogKHhzOiBBcnJheTxBPiwgeXM/OiBBcnJheTxBPikgPT4gQXJyYXk8QT4gfCAoKHlzOiBBcnJheTxBPikgPT4gQXJyYXk8QT4pIHtcbiAgY29uc3QgZWxlbUUgPSBlbGVtKEUpXG4gIHJldHVybiAoeHMsIHlzPykgPT4ge1xuICAgIGlmICh5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25FID0gaW50ZXJzZWN0aW9uKEUpXG4gICAgICByZXR1cm4gKHlzKSA9PiBpbnRlcnNlY3Rpb25FKHlzLCB4cylcbiAgICB9XG4gICAgcmV0dXJuIHhzLmZpbHRlcigoYSkgPT4gZWxlbUUoYSwgeXMpKVxuICB9XG59XG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIGFycmF5IHZhbHVlcyBub3QgaW5jbHVkZWQgaW4gdGhlIG90aGVyIGdpdmVuIGFycmF5IHVzaW5nIGEgYEVxYCBmb3IgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zLiBUaGUgb3JkZXIgYW5kIHJlZmVyZW5jZXMgb2YgcmVzdWx0IHZhbHVlcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgZmlyc3QgYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGRpZmZlcmVuY2UgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbMSwgMl0sIGRpZmZlcmVuY2UoTi5FcSkoWzIsIDNdKSksIFsxXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZTxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKHhzOiBBcnJheTxBPik6ICh5czogQXJyYXk8QT4pID0+IEFycmF5PEE+XG4gICh4czogQXJyYXk8QT4sIHlzOiBBcnJheTxBPik6IEFycmF5PEE+XG59XG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZTxBPihFOiBFcTxBPik6ICh4czogQXJyYXk8QT4sIHlzPzogQXJyYXk8QT4pID0+IEFycmF5PEE+IHwgKCh5czogQXJyYXk8QT4pID0+IEFycmF5PEE+KSB7XG4gIGNvbnN0IGVsZW1FID0gZWxlbShFKVxuICByZXR1cm4gKHhzLCB5cz8pID0+IHtcbiAgICBpZiAoeXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlmZmVyZW5jZUUgPSBkaWZmZXJlbmNlKEUpXG4gICAgICByZXR1cm4gKHlzKSA9PiBkaWZmZXJlbmNlRSh5cywgeHMpXG4gICAgfVxuICAgIHJldHVybiB4cy5maWx0ZXIoKGEpID0+ICFlbGVtRShhLCB5cykpXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBfbWFwOiBNb25hZDE8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwV2l0aEluZGV4OiBGdW5jdG9yV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ21hcFdpdGhJbmRleCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXBXaXRoSW5kZXgoZikpXG5jb25zdCBfYXA6IEFwcGx5MTxVUkk+WydhcCddID0gKGZhYiwgZmEpID0+IHBpcGUoZmFiLCBhcChmYSkpXG5jb25zdCBfY2hhaW46IENoYWluMTxVUkk+WydjaGFpbiddID0gKG1hLCBmKSA9PiBwaXBlKG1hLCBjaGFpbihmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZmlsdGVyOiBGaWx0ZXJhYmxlMTxVUkk+WydmaWx0ZXInXSA9IDxBPihmYTogQXJyYXk8QT4sIHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiBwaXBlKGZhLCBmaWx0ZXIocHJlZGljYXRlKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZmlsdGVyTWFwOiBGaWx0ZXJhYmxlMTxVUkk+WydmaWx0ZXJNYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgZmlsdGVyTWFwKGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9wYXJ0aXRpb246IEZpbHRlcmFibGUxPFVSST5bJ3BhcnRpdGlvbiddID0gPEE+KGZhOiBBcnJheTxBPiwgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+XG4gIHBpcGUoZmEsIHBhcnRpdGlvbihwcmVkaWNhdGUpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9wYXJ0aXRpb25NYXA6IEZpbHRlcmFibGUxPFVSST5bJ3BhcnRpdGlvbk1hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBwYXJ0aXRpb25NYXAoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3BhcnRpdGlvbldpdGhJbmRleDogRmlsdGVyYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+WydwYXJ0aXRpb25XaXRoSW5kZXgnXSA9IDxBPihcbiAgZmE6IEFycmF5PEE+LFxuICBwcmVkaWNhdGVXaXRoSW5kZXg6IChpOiBudW1iZXIsIGE6IEEpID0+IGJvb2xlYW5cbikgPT4gcGlwZShmYSwgcGFydGl0aW9uV2l0aEluZGV4KHByZWRpY2F0ZVdpdGhJbmRleCkpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3BhcnRpdGlvbk1hcFdpdGhJbmRleDogRmlsdGVyYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+WydwYXJ0aXRpb25NYXBXaXRoSW5kZXgnXSA9IDxBLCBCLCBDPihcbiAgZmE6IEFycmF5PEE+LFxuICBmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBFaXRoZXI8QiwgQz5cbikgPT4gcGlwZShmYSwgcGFydGl0aW9uTWFwV2l0aEluZGV4KGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9hbHQ6IEFsdDE8VVJJPlsnYWx0J10gPSAoZmEsIHRoYXQpID0+IHBpcGUoZmEsIGFsdCh0aGF0KSlcbmNvbnN0IF9yZWR1Y2U6IEZvbGRhYmxlMTxVUkk+WydyZWR1Y2UnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlKGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9mb2xkTWFwOiBGb2xkYWJsZTE8VVJJPlsnZm9sZE1hcCddID0gKE0pID0+IHtcbiAgY29uc3QgZm9sZE1hcE0gPSBmb2xkTWFwKE0pXG4gIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBNKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VSaWdodDogRm9sZGFibGUxPFVSST5bJ3JlZHVjZVJpZ2h0J10gPSAoZmEsIGIsIGYpID0+IHBpcGUoZmEsIHJlZHVjZVJpZ2h0KGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9yZWR1Y2VXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ3JlZHVjZVdpdGhJbmRleCddID0gKGZhLCBiLCBmKSA9PlxuICBwaXBlKGZhLCByZWR1Y2VXaXRoSW5kZXgoYiwgZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2ZvbGRNYXBXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ2ZvbGRNYXBXaXRoSW5kZXgnXSA9IChNKSA9PiB7XG4gIGNvbnN0IGZvbGRNYXBXaXRoSW5kZXhNID0gZm9sZE1hcFdpdGhJbmRleChNKVxuICByZXR1cm4gKGZhLCBmKSA9PiBwaXBlKGZhLCBmb2xkTWFwV2l0aEluZGV4TShmKSlcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfcmVkdWNlUmlnaHRXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ3JlZHVjZVJpZ2h0V2l0aEluZGV4J10gPSAoZmEsIGIsIGYpID0+XG4gIHBpcGUoZmEsIHJlZHVjZVJpZ2h0V2l0aEluZGV4KGIsIGYpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9maWx0ZXJNYXBXaXRoSW5kZXg6IEZpbHRlcmFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsnZmlsdGVyTWFwV2l0aEluZGV4J10gPSA8QSwgQj4oXG4gIGZhOiBBcnJheTxBPixcbiAgZjogKGk6IG51bWJlciwgYTogQSkgPT4gT3B0aW9uPEI+XG4pID0+IHBpcGUoZmEsIGZpbHRlck1hcFdpdGhJbmRleChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZmlsdGVyV2l0aEluZGV4OiBGaWx0ZXJhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ2ZpbHRlcldpdGhJbmRleCddID0gPEE+KFxuICBmYTogQXJyYXk8QT4sXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGk6IG51bWJlciwgYTogQSkgPT4gYm9vbGVhblxuKSA9PiBwaXBlKGZhLCBmaWx0ZXJXaXRoSW5kZXgocHJlZGljYXRlV2l0aEluZGV4KSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfZXh0ZW5kOiBFeHRlbmQxPFVSST5bJ2V4dGVuZCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBleHRlbmQoZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX3RyYXZlcnNlOiBUcmF2ZXJzYWJsZTE8VVJJPlsndHJhdmVyc2UnXSA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQj4odGE6IEFycmF5PEE+LCBmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgQXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlRiA9IHRyYXZlcnNlKEYpXG4gIHJldHVybiAodGEsIGYpID0+IHBpcGUodGEsIHRyYXZlcnNlRihmKSlcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfdHJhdmVyc2VXaXRoSW5kZXg6IFRyYXZlcnNhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ3RyYXZlcnNlV2l0aEluZGV4J10gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlSEtUPEY+XG4pOiAoPEEsIEI+KHRhOiBBcnJheTxBPiwgZjogKGk6IG51bWJlciwgYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgQXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlV2l0aEluZGV4RiA9IHRyYXZlcnNlV2l0aEluZGV4KEYpXG4gIHJldHVybiAodGEsIGYpID0+IHBpcGUodGEsIHRyYXZlcnNlV2l0aEluZGV4RihmKSlcbn1cbmNvbnN0IF9jaGFpblJlY0RlcHRoRmlyc3Q6IENoYWluUmVjMTxVUkk+WydjaGFpblJlYyddID0gUkEuX2NoYWluUmVjRGVwdGhGaXJzdCBhcyBhbnlcbmNvbnN0IF9jaGFpblJlY0JyZWFkdGhGaXJzdDogQ2hhaW5SZWMxPFVSST5bJ2NoYWluUmVjJ10gPSBSQS5fY2hhaW5SZWNCcmVhZHRoRmlyc3QgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQgb2YgdGhlIGJhc2UgdHlwZSwgYG9mYCBidWlsZHMgYW4gYEFycmF5YCBjb250YWluaW5nIGp1c3QgdGhhdFxuICogZWxlbWVudCBvZiB0aGUgYmFzZSB0eXBlICh0aGlzIGlzIHVzZWZ1bCBmb3IgYnVpbGRpbmcgYSBgTW9uYWRgKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgb2YgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKG9mKFwiYVwiKSwgW1wiYVwiXSk7XG4gKlxuICogQGNhdGVnb3J5IFBvaW50ZWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgb2Y6IFBvaW50ZWQxPFVSST5bJ29mJ10gPSBORUEub2ZcblxuLyoqXG4gKiBNYWtlcyBhbiBlbXB0eSBgQXJyYXlgLCB1c2VmdWwgZm9yIGJ1aWxkaW5nIGEgW2BNb25vaWRgXSgjTW9ub2lkKVxuICpcbiAqIEBjYXRlZ29yeSBaZXJvXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHplcm86IFplcm8xPFVSST5bJ3plcm8nXSA9ICgpID0+IFtdXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBBcnJheTxBPikgPT4gQXJyYXk8Qj5gLlxuICogSW4gcHJhY3RpY2UgaXQgYXBwbGllcyB0aGUgYmFzZSBmdW5jdGlvbiB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGFuZCBjb2xsZWN0cyB0aGVcbiAqIHJlc3VsdHMgaW4gYSBuZXcgYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGYgPSAobjogbnVtYmVyKSA9PiBuICogMjtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbMSwgMiwgM10sIG1hcChmKSksIFsyLCA0LCA2XSk7XG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IChmYTogQXJyYXk8QT4pID0+IEFycmF5PEI+ID0gKGYpID0+IChmYSkgPT4gZmEubWFwKChhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEl0IGNhbiBiZSB1c2VkIHRvIGV4dGVuZCB0aGUgY29uY2VwdCBvZiBbYG1hcGBdKCNtYXApIHRvIGEgZnVuY3Rpb24gdGhhdFxuICogdGFrZXMgbW9yZSB0aGFuIG9uZSBwYXJhbWV0ZXIgYXMgZGVzY3JpYmVkXG4gKiByZWFkIFtoZXJlXShodHRwczovL2Rldi50by9nY2FudGkvZ2V0dGluZy1zdGFydGVkLXdpdGgtZnAtdHMtYXBwbGljYXRpdmUtMWtiMylcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgYXAsIG1hcCwgb2YgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiAvLyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCAzIGlucHV0IHBhcmFtZXRlcmVzXG4gKiBjb25zdCBmID0gKHMxOiBzdHJpbmcpID0+IChuOiBudW1iZXIpID0+IChzMjogc3RyaW5nKSA9PiBzMSArIG4gKyBzMjtcbiAqXG4gKiAvLyBsZXQncyB1c2UgYGFwYCB0byBpdGVyYXRlIGBmYCBvdmVyIGFuIGFycmF5IGZvciBlYWNoIGlucHV0IHBhcmFtZXRlclxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFtcImFcIiwgXCJiXCJdLCBtYXAoZiksIGFwKFsxLCAyXSksIGFwKFtcIvCfmIBcIiwgXCLwn5irXCIsIFwi8J+YjlwiXSkpLCBbXG4gKiAgIFwiYTHwn5iAXCIsIFwiYTHwn5irXCIsIFwiYTHwn5iOXCIsXG4gKiAgIFwiYTLwn5iAXCIsIFwiYTLwn5irXCIsIFwiYTLwn5iOXCIsXG4gKiAgIFwiYjHwn5iAXCIsIFwiYjHwn5irXCIsIFwiYjHwn5iOXCIsXG4gKiAgIFwiYjLwn5iAXCIsIFwiYjLwn5irXCIsIFwiYjLwn5iOXCIsXG4gKiBdKTtcbiAqXG4gKiAvLyBnaXZlbiBBcnJheSBpbXBsZW1lbnRzIHRoZSBBcHBsaWNhdGl2ZSBpbnRlcmZhY2Ugd2l0aCB0aGUgYG9mYCBtZXRob2QsXG4gKiAvLyB3ZSBjYW4gd3JpdGUgZXhhY3RseSB0aGUgc2FtZSB0aGluZyBpbiBhIG1vcmUgc3ltbWV0cmljIHdheVxuICogLy8gdXNpbmcgYG9mYCBvbiBgZmAgYW5kIGBhcGAgb24gZWFjaCBhcnJheSBpbiBpbnB1dFxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICAgcGlwZShvZihmKSwgYXAoW1wiYVwiLCBcImJcIl0pLCBhcChbMSwgMl0pLCBhcChbXCLwn5iAXCIsIFwi8J+Yq1wiLCBcIvCfmI5cIl0pKSxcbiAqICAgcGlwZShbXCJhXCIsIFwiYlwiXSwgbWFwKGYpLCBhcChbMSwgMl0pLCBhcChbXCLwn5iAXCIsIFwi8J+Yq1wiLCBcIvCfmI5cIl0pKVxuICogKTtcbiAqXG4gKiBAY2F0ZWdvcnkgQXBwbHlcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXA6IDxBPihmYTogQXJyYXk8QT4pID0+IDxCPihmYWI6IEFycmF5PChhOiBBKSA9PiBCPikgPT4gQXJyYXk8Qj4gPSAoZmEpID0+IGNoYWluKChmKSA9PiBwaXBlKGZhLCBtYXAoZikpKVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG9cbiAqIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbi5cbiAqXG4gKiBJbiBvdGhlciB3b3JkcyBpdCB0YWtlcyBhIGZ1bmN0aW9uIGBmYCB0aGF0IHByb2R1Y2VzIGFuIGFycmF5IGZyb20gYSBzaW5nbGUgZWxlbWVudCBvZlxuICogdGhlIGJhc2UgdHlwZSBgQWAgYW5kIHJldHVybnMgYSBuZXcgZnVuY3Rpb24gd2hpY2ggYXBwbGllcyBgZmAgdG8gZWFjaCBlbGVtZW50IG9mIHRoZVxuICogaW5wdXQgYXJyYXkgKGxpa2UgW2BtYXBgXSgjbWFwKSkgYW5kLCBpbnN0ZWFkIG9mIHJldHVybmluZyBhbiBhcnJheSBvZiBhcnJheXMsIGNvbmNhdGVuYXRlcyB0aGVcbiAqIHJlc3VsdHMgaW50byBhIHNpbmdsZSBhcnJheSAobGlrZSBbYGZsYXR0ZW5gXSgjZmxhdHRlbikpLlxuICpcbiAqIFRoaXMgaXMgdGhlIGBjaGFpbmAgY29tcG9uZW50IG9mIHRoZSBhcnJheSBgTW9uYWRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjaGFpbiwgbWFwLCByZXBsaWNhdGUgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBjb25zdCBmID0gKG46IG51bWJlcikgPT4gcmVwbGljYXRlKG4sIGAke259YCk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzEsIDIsIDNdLCBtYXAoZikpLCBbW1wiMVwiXSwgW1wiMlwiLCBcIjJcIl0sIFtcIjNcIiwgXCIzXCIsIFwiM1wiXV0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgY2hhaW4oZikpLCBbXCIxXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCBcIjNcIl0pO1xuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbjogPEEsIEI+KGY6IChhOiBBKSA9PiBBcnJheTxCPikgPT4gKG1hOiBBcnJheTxBPikgPT4gQXJyYXk8Qj4gPSAoZikgPT4gKG1hKSA9PlxuICBwaXBlKFxuICAgIG1hLFxuICAgIGNoYWluV2l0aEluZGV4KChfLCBhKSA9PiBmKGEpKVxuICApXG5cbi8qKlxuICogVGFrZXMgYW4gYXJyYXkgb2YgYXJyYXlzIG9mIGBBYCBhbmQgZmxhdHRlbnMgdGhlbSBpbnRvIGFuIGFycmF5IG9mIGBBYFxuICogYnkgY29uY2F0ZW5hdGluZyB0aGUgZWxlbWVudHMgb2YgZWFjaCBhcnJheSBpbiBvcmRlci5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBbYGNoYWluYF0oI2NoYWluKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmxhdHRlbihbW1wiYVwiXSwgW1wiYlwiLCBcImNcIl0sIFtcImRcIiwgXCJlXCIsIFwiZlwiXV0pLCBbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIl0pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0dGVuOiA8QT4obW1hOiBBcnJheTxBcnJheTxBPj4pID0+IEFycmF5PEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbihpZGVudGl0eSlcblxuLyoqXG4gKiBTYW1lIGFzIFtgbWFwYF0oI21hcCksIGJ1dCB0aGUgaXRlcmF0aW5nIGZ1bmN0aW9uIHRha2VzIGJvdGggdGhlIGluZGV4IGFuZCB0aGUgdmFsdWVcbiAqIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXBXaXRoSW5kZXggfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBjb25zdCBmID0gKGk6IG51bWJlciwgczogc3RyaW5nKSA9PiBgJHtzfSAtICR7aX1gO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFtcImFcIiwgXCJiXCIsIFwiY1wiXSwgbWFwV2l0aEluZGV4KGYpKSwgW1wiYSAtIDBcIiwgXCJiIC0gMVwiLCBcImMgLSAyXCJdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvcldpdGhJbmRleFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBXaXRoSW5kZXg6IDxBLCBCPihmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBCKSA9PiAoZmE6IEFycmF5PEE+KSA9PiBBcnJheTxCPiA9IChmKSA9PiAoZmEpID0+XG4gIGZhLm1hcCgoYSwgaSkgPT4gZihpLCBhKSlcblxuLyoqXG4gKiBNYXBzIGFuIGFycmF5IHdpdGggYW4gaXRlcmF0aW5nIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIGluZGV4IGFuZCB0aGUgdmFsdWUgb2ZcbiAqIGVhY2ggZWxlbWVudCBhbmQgcmV0dXJucyBhbiBgT3B0aW9uYC4gSXQga2VlcHMgb25seSB0aGUgYFNvbWVgIHZhbHVlcyBkaXNjYXJkaW5nXG4gKiB0aGUgYE5vbmVgcy5cbiAqXG4gKiBTYW1lIGFzIFtgZmlsdGVyTWFwYF0oI2ZpbHRlck1hcCksIGJ1dCB3aXRoIGFuIGl0ZXJhdGluZyBmdW5jdGlvbiB3aGljaCB0YWtlcyBhbHNvXG4gKiB0aGUgaW5kZXggYXMgaW5wdXQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbHRlck1hcFdpdGhJbmRleCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICogaW1wb3J0IHsgb3B0aW9uIH0gZnJvbSBcImZwLXRzXCI7XG4gKlxuICogY29uc3QgZiA9IChpOiBudW1iZXIsIHM6IHN0cmluZykgPT4gKGkgJSAyID09PSAxID8gb3B0aW9uLnNvbWUocy50b1VwcGVyQ2FzZSgpKSA6IG9wdGlvbi5ub25lKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbXCJhXCIsIFwibm9cIiwgXCJuZWl0aGVyXCIsIFwiYlwiXSwgZmlsdGVyTWFwV2l0aEluZGV4KGYpKSwgW1wiTk9cIiwgXCJCXCJdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVdpdGhJbmRleFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJNYXBXaXRoSW5kZXggPSA8QSwgQj4oZjogKGk6IG51bWJlciwgYTogQSkgPT4gT3B0aW9uPEI+KSA9PiAoZmE6IEFycmF5PEE+KTogQXJyYXk8Qj4gPT4ge1xuICBjb25zdCBvdXQ6IEFycmF5PEI+ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG9wdGlvbkIgPSBmKGksIGZhW2ldKVxuICAgIGlmIChfLmlzU29tZShvcHRpb25CKSkge1xuICAgICAgb3V0LnB1c2gob3B0aW9uQi52YWx1ZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIE1hcHMgYW4gYXJyYXkgd2l0aCBhbiBpdGVyYXRpbmcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGBPcHRpb25gXG4gKiBhbmQgaXQga2VlcHMgb25seSB0aGUgYFNvbWVgIHZhbHVlcyBkaXNjYXJkaW5nIHRoZSBgTm9uZWBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaWx0ZXJNYXAgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gXCJmcC10c1wiO1xuICpcbiAqIGNvbnN0IGYgPSAoczogc3RyaW5nKSA9PiBzLmxlbmd0aCA9PT0gMSA/IG9wdGlvbi5zb21lKHMudG9VcHBlckNhc2UoKSkgOiBvcHRpb24ubm9uZTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbXCJhXCIsIFwibm9cIiwgXCJuZWl0aGVyXCIsIFwiYlwiXSwgZmlsdGVyTWFwKGYpKSwgW1wiQVwiLCBcIkJcIl0pO1xuICpcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBPcHRpb248Qj4pID0+IChmYTogQXJyYXk8QT4pID0+IEFycmF5PEI+ID0gKGYpID0+XG4gIGZpbHRlck1hcFdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBDb21wYWN0IGFuIGFycmF5IG9mIGBPcHRpb25gcyBkaXNjYXJkaW5nIHRoZSBgTm9uZWAgdmFsdWVzIGFuZFxuICoga2VlcGluZyB0aGUgYFNvbWVgIHZhbHVlcy4gSXQgcmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb2ZcbiAqIHRoZSBgU29tZWAgb3B0aW9ucy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29tcGFjdCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgb3B0aW9uIH0gZnJvbSBcImZwLXRzXCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjb21wYWN0KFtvcHRpb24uc29tZShcImFcIiksIG9wdGlvbi5ub25lLCBvcHRpb24uc29tZShcImJcIildKSwgW1wiYVwiLCBcImJcIl0pO1xuICpcbiAqIEBjYXRlZ29yeSBDb21wYWN0YWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjb21wYWN0OiA8QT4oZmE6IEFycmF5PE9wdGlvbjxBPj4pID0+IEFycmF5PEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBmaWx0ZXJNYXAoaWRlbnRpdHkpXG5cbi8qKlxuICogU2VwYXJhdGUgYW4gYXJyYXkgb2YgYEVpdGhlcmBzIGludG8gYExlZnRgcyBhbmQgYFJpZ2h0YHMsIGNyZWF0aW5nIHR3byBuZXcgYXJyYXlzOlxuICogb25lIGNvbnRhaW5pbmcgYWxsIHRoZSBsZWZ0IHZhbHVlcyBhbmQgb25lIGNvbnRhaW5pbmcgYWxsIHRoZSByaWdodCB2YWx1ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNlcGFyYXRlIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBlaXRoZXIgfSBmcm9tIFwiZnAtdHNcIjtcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNlcGFyYXRlKFtlaXRoZXIucmlnaHQoXCJyMVwiKSwgZWl0aGVyLmxlZnQoXCJsMVwiKSwgZWl0aGVyLnJpZ2h0KFwicjJcIildKSwge1xuICogICBsZWZ0OiBbXCJsMVwiXSxcbiAqICAgcmlnaHQ6IFtcInIxXCIsIFwicjJcIl0sXG4gKiB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgQ29tcGFjdGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc2VwYXJhdGUgPSA8QSwgQj4oZmE6IEFycmF5PEVpdGhlcjxBLCBCPj4pOiBTZXBhcmF0ZWQ8QXJyYXk8QT4sIEFycmF5PEI+PiA9PiB7XG4gIGNvbnN0IGxlZnQ6IEFycmF5PEE+ID0gW11cbiAgY29uc3QgcmlnaHQ6IEFycmF5PEI+ID0gW11cbiAgZm9yIChjb25zdCBlIG9mIGZhKSB7XG4gICAgaWYgKGUuX3RhZyA9PT0gJ0xlZnQnKSB7XG4gICAgICBsZWZ0LnB1c2goZS5sZWZ0KVxuICAgIH0gZWxzZSB7XG4gICAgICByaWdodC5wdXNoKGUucmlnaHQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzZXBhcmF0ZWQobGVmdCwgcmlnaHQpXG59XG5cbi8qKlxuICogR2l2ZW4gYW4gaXRlcmF0aW5nIGZ1bmN0aW9uIHRoYXQgaXMgYSBgUHJlZGljYXRlYCBvciBhIGBSZWZpbmVtZW50YCxcbiAqIGBmaWx0ZXJgIGNyZWF0ZXMgYSBuZXcgYEFycmF5YCBjb250YWluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgb3JpZ2luYWxcbiAqIGBBcnJheWAgZm9yIHdoaWNoIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24gaXMgYHRydWVgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcImZwLXRzL2xpYi9zdHJpbmdcIjtcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbHRlcihpc1N0cmluZykoW1wiYVwiLCAxLCB7fSwgXCJiXCIsIDVdKSwgW1wiYVwiLCBcImJcIl0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaWx0ZXIoKHg6bnVtYmVyKSA9PiB4ID4gMCkoWy0zLCAxLCAtMiwgNV0pLCBbMSwgNV0pO1xuICpcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlcjoge1xuICA8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoYXM6IEFycmF5PEE+KSA9PiBBcnJheTxCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGJzOiBBcnJheTxCPikgPT4gQXJyYXk8Qj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBBcnJheTxBPikgPT4gQXJyYXk8QT5cbn0gPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IChhczogQXJyYXk8QT4pID0+IGFzLmZpbHRlcihwcmVkaWNhdGUpXG5cbi8qKlxuICogR2l2ZW4gYW4gaXRlcmF0aW5nIGZ1bmN0aW9uIHRoYXQgaXMgYSBgUHJlZGljYXRlYCBvciBhIGBSZWZpbmVtZW50YCxcbiAqIGBwYXJ0aXRpb25gIGNyZWF0ZXMgdHdvIG5ldyBgQXJyYXlgczogYHJpZ2h0YCBjb250YWluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgb3JpZ2luYWxcbiAqIGBBcnJheWAgZm9yIHdoaWNoIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24gaXMgYHRydWVgLCBgbGVmdGAgY29udGFpbmluZyB0aGUgZWxlbWVudHNcbiAqIGZvciB3aGljaCBpdCBpcyBmYWxzZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGFydGl0aW9uIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCJmcC10cy9saWIvc3RyaW5nXCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwYXJ0aXRpb24oaXNTdHJpbmcpKFtcImFcIiwgMSwge30sIFwiYlwiLCA1XSksIHsgbGVmdDogWzEsIHt9LCA1XSwgcmlnaHQ6IFtcImFcIiwgXCJiXCJdIH0pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwYXJ0aXRpb24oKHg6IG51bWJlcikgPT4geCA+IDApKFstMywgMSwgLTIsIDVdKSwgeyBsZWZ0OiBbLTMsIC0yXSwgcmlnaHQ6IFsxLCA1XSB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb246IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGFzOiBBcnJheTxBPikgPT4gU2VwYXJhdGVkPEFycmF5PEE+LCBBcnJheTxCPj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihiczogQXJyYXk8Qj4pID0+IFNlcGFyYXRlZDxBcnJheTxCPiwgQXJyYXk8Qj4+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChhczogQXJyYXk8QT4pID0+IFNlcGFyYXRlZDxBcnJheTxBPiwgQXJyYXk8QT4+XG59ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKChhczogQXJyYXk8QT4pID0+IFNlcGFyYXRlZDxBcnJheTxBPiwgQXJyYXk8QT4+KSA9PlxuICBwYXJ0aXRpb25XaXRoSW5kZXgoKF8sIGEpID0+IHByZWRpY2F0ZShhKSlcblxuLyoqXG4gKiBTYW1lIGFzIFtgcGFydGl0aW9uYF0oI3BhcnRpdGlvbiksIGJ1dCBwYXNzaW5nIGFsc28gdGhlIGluZGV4IHRvIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBhcnRpdGlvbldpdGhJbmRleCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGFydGl0aW9uV2l0aEluZGV4KChpbmRleCwgeDogbnVtYmVyKSA9PiBpbmRleCA8IDMgJiYgeCA+IDApKFstMiwgNSwgNiwgN10pLCB7XG4gKiAgIGxlZnQ6IFstMiwgN10sXG4gKiAgIHJpZ2h0OiBbNSwgNl0sXG4gKiB9KTtcbiAqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVdpdGhJbmRleFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb25XaXRoSW5kZXg6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50V2l0aEluZGV4OiBSZWZpbmVtZW50V2l0aEluZGV4PG51bWJlciwgQSwgQj4pOiAoXG4gICAgYXM6IEFycmF5PEE+XG4gICkgPT4gU2VwYXJhdGVkPEFycmF5PEE+LCBBcnJheTxCPj5cbiAgPEE+KHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PG51bWJlciwgQT4pOiA8QiBleHRlbmRzIEE+KGJzOiBBcnJheTxCPikgPT4gU2VwYXJhdGVkPEFycmF5PEI+LCBBcnJheTxCPj5cbiAgPEE+KHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PG51bWJlciwgQT4pOiAoYXM6IEFycmF5PEE+KSA9PiBTZXBhcmF0ZWQ8QXJyYXk8QT4sIEFycmF5PEE+PlxufSA9IDxBPihwcmVkaWNhdGVXaXRoSW5kZXg6IFByZWRpY2F0ZVdpdGhJbmRleDxudW1iZXIsIEE+KSA9PiAoYXM6IEFycmF5PEE+KTogU2VwYXJhdGVkPEFycmF5PEE+LCBBcnJheTxBPj4gPT4ge1xuICBjb25zdCBsZWZ0OiBBcnJheTxBPiA9IFtdXG4gIGNvbnN0IHJpZ2h0OiBBcnJheTxBPiA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBiID0gYXNbaV1cbiAgICBpZiAocHJlZGljYXRlV2l0aEluZGV4KGksIGIpKSB7XG4gICAgICByaWdodC5wdXNoKGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQucHVzaChiKVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2VwYXJhdGVkKGxlZnQsIHJpZ2h0KVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGl0ZXJhdGluZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYEVpdGhlcmAsXG4gKiBgcGFydGl0aW9uTWFwYCBhcHBsaWVzIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IGFuZCBpdCBjcmVhdGVzIHR3byBgQXJyYXlgczpcbiAqIGByaWdodGAgY29udGFpbmluZyB0aGUgdmFsdWVzIG9mIGBSaWdodGAgcmVzdWx0cywgYGxlZnRgIGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvZiBgTGVmdGAgcmVzdWx0cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGFydGl0aW9uTWFwIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBFaXRoZXIsIGxlZnQsIHJpZ2h0IH0gZnJvbSBcImZwLXRzL2xpYi9FaXRoZXJcIjtcbiAqXG4gKiBjb25zdCB1cHBlcklmU3RyaW5nID0gPEI+KHg6IEIpOiBFaXRoZXI8Qiwgc3RyaW5nPiA9PlxuICogICB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIiA/IHJpZ2h0KHgudG9VcHBlckNhc2UoKSkgOiBsZWZ0KHgpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwYXJ0aXRpb25NYXAodXBwZXJJZlN0cmluZykoWy0yLCBcImhlbGxvXCIsIDYsIDcsIFwid29ybGRcIl0pLCB7XG4gKiAgIGxlZnQ6IFstMiwgNiwgN10sXG4gKiAgIHJpZ2h0OiBbICdIRUxMTycsICdXT1JMRCcgXSxcbiAqIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbk1hcDogPEEsIEIsIEM+KGY6IChhOiBBKSA9PiBFaXRoZXI8QiwgQz4pID0+IChmYTogQXJyYXk8QT4pID0+IFNlcGFyYXRlZDxBcnJheTxCPiwgQXJyYXk8Qz4+ID0gKFxuICBmXG4pID0+IHBhcnRpdGlvbk1hcFdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBTYW1lIGFzIFtgcGFydGl0aW9uTWFwYF0oI3BhcnRpdGlvbk1hcCksIGJ1dCBwYXNzaW5nIGFsc28gdGhlIGluZGV4IHRvIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBhcnRpdGlvbk1hcFdpdGhJbmRleCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgRWl0aGVyLCBsZWZ0LCByaWdodCB9IGZyb20gXCJmcC10cy9saWIvRWl0aGVyXCI7XG4gKlxuICogY29uc3QgdXBwZXJJZlN0cmluZ0JlZm9yZTMgPSA8Qj4oaW5kZXg6IG51bWJlciwgeDogQik6IEVpdGhlcjxCLCBzdHJpbmc+ID0+XG4gKiAgIGluZGV4IDwgMyAmJiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIiA/IHJpZ2h0KHgudG9VcHBlckNhc2UoKSkgOiBsZWZ0KHgpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwYXJ0aXRpb25NYXBXaXRoSW5kZXgodXBwZXJJZlN0cmluZ0JlZm9yZTMpKFstMiwgXCJoZWxsb1wiLCA2LCA3LCBcIndvcmxkXCJdKSwge1xuICogICBsZWZ0OiBbLTIsIDYsIDcsIFwid29ybGRcIl0sXG4gKiAgIHJpZ2h0OiBbXCJIRUxMT1wiXSxcbiAqIH0pO1xuICpcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbk1hcFdpdGhJbmRleCA9IDxBLCBCLCBDPihmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBFaXRoZXI8QiwgQz4pID0+IChcbiAgZmE6IEFycmF5PEE+XG4pOiBTZXBhcmF0ZWQ8QXJyYXk8Qj4sIEFycmF5PEM+PiA9PiB7XG4gIGNvbnN0IGxlZnQ6IEFycmF5PEI+ID0gW11cbiAgY29uc3QgcmlnaHQ6IEFycmF5PEM+ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGUgPSBmKGksIGZhW2ldKVxuICAgIGlmIChlLl90YWcgPT09ICdMZWZ0Jykge1xuICAgICAgbGVmdC5wdXNoKGUubGVmdClcbiAgICB9IGVsc2Uge1xuICAgICAgcmlnaHQucHVzaChlLnJpZ2h0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2VwYXJhdGVkKGxlZnQsIHJpZ2h0KVxufVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhbHRgXSgjYWx0KSwgaXQgY2FuIGNvbmNhdGVuYXRlIGBBcnJheWBzIG9mIGRpZmZlcmVudCBiYXNlIHR5cGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBhbHRXIH0gZnJvbSAnZnAtdHMvQXJyYXknO1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoYWx0VygoKSA9PiBbMiwgMywgNF0pKFtcImFcIl0pLCBbXCJhXCIsIDIsIDMsIDRdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsdFcgPSA8Qj4odGhhdDogTGF6eTxBcnJheTxCPj4pID0+IDxBPihmYTogQXJyYXk8QT4pOiBBcnJheTxBIHwgQj4gPT4gKGZhIGFzIEFycmF5PEEgfCBCPikuY29uY2F0KHRoYXQoKSlcblxuLyoqXG4gKiBgYWx0YCBpbXBsZW1lbnRzIHRoZSBgQWx0YCBpdGVyZmFjZSBieSBjb25jYXRlbmF0aW9uIG9mIGBBcnJheWBzLlxuICogYEFsdGAgaW50ZXJmYWNlIGlzIHNpbWlsYXIgdG8gYFNlbWlncm91cGAgZm9yIGhpZ2hlci1raW5kZWQgdHlwZXMgc3VjaFxuICogYXMgYEFycmF5YCBhbmQgYE9wdGlvbmA6IHRoZSBleGFtcGxlIGJlbG93IHNob3dzIGJvdGggYEFsdGAncyBgYWx0YCBhbmRcbiAqIGBTZW1pZ3JvdXBgJ3MgYGNvbmNhdGAgZnVuY3Rpb25zLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBhbHQsIGNvbmNhdCB9IGZyb20gJ2ZwLXRzL0FycmF5JztcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGFsdCgoKSA9PiBbMiwgMywgNF0pKFsxXSksIFsxLCAyLCAzLCA0XSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbmNhdChbMiwgMywgNF0pKFsxXSksIFsxLCAyLCAzLCA0XSk7XG4gKlxuICogQGNhdGVnb3J5IEFsdFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhbHQ6IDxBPih0aGF0OiBMYXp5PEFycmF5PEE+PikgPT4gKGZhOiBBcnJheTxBPikgPT4gQXJyYXk8QT4gPSBhbHRXXG5cbi8qKlxuICogU2FtZSBhcyBbYGZpbHRlcmBdKCNmaWx0ZXIpLCBidXQgcGFzc2luZyBhbHNvIHRoZSBpbmRleCB0byB0aGUgaXRlcmF0aW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaWx0ZXJXaXRoSW5kZXggfSBmcm9tICdmcC10cy9BcnJheSc7XG4gKlxuICogY29uc3QgZiA9IChpbmRleDogbnVtYmVyLCB4OiBudW1iZXIpID0+IHggPiAwICYmIGluZGV4IDw9IDI7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbHRlcldpdGhJbmRleChmKShbLTMsIDEsIC0yLCA1XSksIFsxXSk7XG4gKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyV2l0aEluZGV4OiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudFdpdGhJbmRleDogUmVmaW5lbWVudFdpdGhJbmRleDxudW1iZXIsIEEsIEI+KTogKGFzOiBBcnJheTxBPikgPT4gQXJyYXk8Qj5cbiAgPEE+KHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PG51bWJlciwgQT4pOiA8QiBleHRlbmRzIEE+KGJzOiBBcnJheTxCPikgPT4gQXJyYXk8Qj5cbiAgPEE+KHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PG51bWJlciwgQT4pOiAoYXM6IEFycmF5PEE+KSA9PiBBcnJheTxBPlxufSA9IDxBPihwcmVkaWNhdGVXaXRoSW5kZXg6IFByZWRpY2F0ZVdpdGhJbmRleDxudW1iZXIsIEE+KSA9PiAoYXM6IEFycmF5PEE+KTogQXJyYXk8QT4gPT5cbiAgYXMuZmlsdGVyKChiLCBpKSA9PiBwcmVkaWNhdGVXaXRoSW5kZXgoaSwgYikpXG5cbi8qKlxuICogR2l2ZW4gYW4gaXRlcmF0aW5nIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYEFycmF5PEE+YCBhcyBpbnB1dCwgYGV4dGVuZGAgcmV0dXJuc1xuICogYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmVzdWx0cyBvZiB0aGUgaXRlcmF0aW5nIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIHdob2xlIGlucHV0XG4gKiBgQXJyYXlgLCB0aGVuIHRvIHRoZSBpbnB1dCBgQXJyYXlgIHdpdGhvdXQgdGhlIGZpcnN0IGVsZW1lbnQsIHRoZW4gdG8gdGhlIGlucHV0XG4gKiBgQXJyYXlgIHdpdGhvdXQgdGhlIGZpcnN0IHR3byBlbGVtZW50cywgZXRjLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBleHRlbmQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBjb25zdCBmID0gKGE6IHN0cmluZ1tdKSA9PiBhLmpvaW4oXCIsXCIpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChleHRlbmQoZikoW1wiYVwiLCBcImJcIiwgXCJjXCJdKSwgW1wiYSxiLGNcIiwgXCJiLGNcIiwgXCJjXCJdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgRXh0ZW5kXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZDogPEEsIEI+KGY6IChhczogQXJyYXk8QT4pID0+IEIpID0+IChhczogQXJyYXk8QT4pID0+IEFycmF5PEI+ID0gKGYpID0+ICh3YSkgPT5cbiAgd2EubWFwKChfLCBpKSA9PiBmKHdhLnNsaWNlKGkpKSlcblxuLyoqXG4gKiBgZHVwbGljYXRlYCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHdob2xlIGlucHV0IGBBcnJheWAsXG4gKiB0aGVuIHRvIHRoZSBpbnB1dCBgQXJyYXlgIGRyb3BwaW5nIHRoZSBmaXJzdCBlbGVtZW50LCB0aGVuIHRvIHRoZSBpbnB1dFxuICogYEFycmF5YCBkcm9wcGluZyB0aGUgZmlyc3QgdHdvIGVsZW1lbnRzLCBldGMuXG4gKiBEZXJpdmFibGUgZnJvbSBgRXh0ZW5kYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZHVwbGljYXRlIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkdXBsaWNhdGUoW1wiYVwiLCBcImJcIiwgXCJjXCJdKSwgW1tcImFcIiwgXCJiXCIsIFwiY1wiXSwgW1wiYlwiLCBcImNcIl0sIFtcImNcIl1dKTtcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZHVwbGljYXRlOiA8QT4od2E6IEFycmF5PEE+KSA9PiBBcnJheTxBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGV4dGVuZChpZGVudGl0eSlcblxuLyoqXG4gKiBNYXAgYW5kIGZvbGQgYW4gYEFycmF5YC5cbiAqIE1hcCB0aGUgYEFycmF5YCBwYXNzaW5nIGVhY2ggdmFsdWUgdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqIFRoZW4gZm9sZCB0aGUgcmVzdWx0cyB1c2luZyB0aGUgcHJvdmlkZWQgYE1vbm9pZGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZvbGRNYXAgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBjb25zdCBtb25vaWQgPSB7IGNvbmNhdDogKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiBhICsgYiwgZW1wdHk6IFwiXCIgfTtcbiAqIGNvbnN0IGYgPSAoczogc3RyaW5nKSA9PiBzLnRvVXBwZXJDYXNlKClcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZm9sZE1hcChtb25vaWQpKGYpKFtcImFcIiwgXCJiXCIsIFwiY1wiXSksIFwiQUJDXCIpO1xuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkTWFwOiA8TT4oTTogTW9ub2lkPE0+KSA9PiA8QT4oZjogKGE6IEEpID0+IE0pID0+IChmYTogQXJyYXk8QT4pID0+IE0gPSBSQS5mb2xkTWFwXG5cbi8qKlxuICogU2FtZSBhcyBbYGZvbGRNYXBgXSgjZm9sZE1hcCkgYnV0IHBhc3NpbmcgYWxzbyB0aGUgaW5kZXggdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZm9sZE1hcFdpdGhJbmRleCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGNvbnN0IG1vbm9pZCA9IHsgY29uY2F0OiAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGEgKyBiLCBlbXB0eTogXCJcIiB9O1xuICogY29uc3QgZiA9IChpbmRleDpudW1iZXIsIHM6IHN0cmluZykgPT4gYCR7cy50b1VwcGVyQ2FzZSgpfSgke2luZGV4fSlgXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZvbGRNYXBXaXRoSW5kZXgobW9ub2lkKShmKShbXCJhXCIsIFwiYlwiLCBcImNcIl0pLCBcIkEoMClCKDEpQygyKVwiKTtcbiAqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZE1hcFdpdGhJbmRleDogPE0+KE06IE1vbm9pZDxNPikgPT4gPEE+KGY6IChpOiBudW1iZXIsIGE6IEEpID0+IE0pID0+IChmYTogQXJyYXk8QT4pID0+IE0gPVxuICBSQS5mb2xkTWFwV2l0aEluZGV4XG5cbi8qKlxuICogUmVkdWNlcyBhbiBgQXJyYXlgLlxuICpcbiAqIGByZWR1Y2VgIGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBpdGVyYXRpbmcgZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSxcbiAqIGluIG9yZGVyLCBwYXNzaW5nIGluIHRoZSBlbGVtZW50IGFuZCB0aGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlIGNhbGN1bGF0aW9uIG9uIHRoZSBwcmVjZWRpbmcgZWxlbWVudC5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGF0IHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24gaXMgY2FsbGVkIHRoZXJlIGlzIG5vIFwicmV0dXJuIHZhbHVlIG9mIHRoZVxuICogcHJldmlvdXMgY2FsY3VsYXRpb25cIiwgdGhlIGluaXRpYWwgdmFsdWUgaXMgdXNlZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlZHVjZSB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVkdWNlKDUsIChhY2M6IG51bWJlciwgY3VyOiBudW1iZXIpID0+IGFjYyAqIGN1cikoWzIsIDNdKSwgNSAqIDIgKiAzKTtcbiAqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlOiA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogQXJyYXk8QT4pID0+IEIgPSBSQS5yZWR1Y2VcblxuLyoqXG4gKiBTYW1lIGFzIFtgcmVkdWNlYF0oI3JlZHVjZSkgYnV0IHBhc3NpbmcgYWxzbyB0aGUgaW5kZXggdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcmVkdWNlV2l0aEluZGV4IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogY29uc3QgZiA9IChpbmRleDogbnVtYmVyLCBhY2M6IHN0cmluZywgY3VyOiB1bmtub3duKSA9PlxuICogICBhY2MgKyAodHlwZW9mIGN1ciA9PT0gXCJzdHJpbmdcIiA/IGN1ci50b1VwcGVyQ2FzZSgpICsgaW5kZXggOiBcIlwiKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVkdWNlV2l0aEluZGV4KFwiXCIsIGYpKFsyLCBcImFcIiwgXCJiXCIsIG51bGxdKSwgXCJBMUIyXCIpO1xuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVdpdGhJbmRleFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VXaXRoSW5kZXg6IDxBLCBCPihiOiBCLCBmOiAoaTogbnVtYmVyLCBiOiBCLCBhOiBBKSA9PiBCKSA9PiAoZmE6IEFycmF5PEE+KSA9PiBCID0gUkEucmVkdWNlV2l0aEluZGV4XG5cbi8qKlxuICogU2FtZSBhcyBbYHJlZHVjZWBdKCNyZWR1Y2UpIGJ1dCBhcHBsaWVkIGZyb20gdGhlIGVuZCB0byB0aGUgc3RhcnQuXG4gKlxuICogKk5vdGUqOiB0aGUgaXRlcmF0aW5nIGZ1bmN0aW9uIGluIHRoaXMgY2FzZSB0YWtlcyB0aGUgYWNjdW11bGF0b3IgYXMgdGhlIGxhc3QgYXJndW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlZHVjZVJpZ2h0IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyZWR1Y2VSaWdodChcIlwiLCAoY3VyOiBzdHJpbmcsIGFjYzogc3RyaW5nKSA9PiBhY2MgKyBjdXIpKFtcImFcIiwgXCJiXCIsIFwiY1wiXSksIFwiY2JhXCIpO1xuICpcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VSaWdodDogPEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IEFycmF5PEE+KSA9PiBCID0gUkEucmVkdWNlUmlnaHRcblxuLyoqXG4gKiBTYW1lIGFzIFtgcmVkdWNlUmlnaHRgXSgjcmVkdWNlUmlnaHQpIGJ1dCBwYXNzaW5nIGFsc28gdGhlIGluZGV4IHRvIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlZHVjZVJpZ2h0V2l0aEluZGV4IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogY29uc3QgZiA9IChpbmRleDogbnVtYmVyLCBjdXI6IHVua25vd24sIGFjYzogc3RyaW5nKSA9PlxuICogICBhY2MgKyAodHlwZW9mIGN1ciA9PT0gXCJzdHJpbmdcIiA/IGN1ci50b1VwcGVyQ2FzZSgpICsgaW5kZXggOiBcIlwiKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVkdWNlUmlnaHRXaXRoSW5kZXgoXCJcIiwgZikoWzIsIFwiYVwiLCBcImJcIiwgbnVsbF0pLCBcIkIyQTFcIik7XG4gKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0V2l0aEluZGV4OiA8QSwgQj4oYjogQiwgZjogKGk6IG51bWJlciwgYTogQSwgYjogQikgPT4gQikgPT4gKGZhOiBBcnJheTxBPikgPT4gQiA9XG4gIFJBLnJlZHVjZVJpZ2h0V2l0aEluZGV4XG5cbi8qKlxuICogR2l2ZW4gYW4gaXRlcmF0aW5nIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGBIS1RgIChoaWdoZXIga2luZGVkIHR5cGUpLCBgdHJhdmVyc2VgXG4gKiBhcHBsaWVzIHRoZSBpdGVyYXRpbmcgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBgQXJyYXlgIGFuZCB0aGVuIFtgc2VxdWVuY2VgXSgjc2VxdWVuY2UpLXNcbiAqIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBwcm92aWRlZCBgQXBwbGljYXRpdmVgLlxuICpcbiAqIEUuZy4gc3VwcG9zZSB5b3UgaGF2ZSBhbiBgQXJyYXlgIGFuZCB5b3Ugd2FudCB0byBmb3JtYXQgZWFjaCBlbGVtZW50IHdpdGggYSBmdW5jdGlvblxuICogdGhhdCByZXR1cm5zIGEgcmVzdWx0IG9yIGFuIGVycm9yIGFzIGBmID0gKGE6IEEpID0+IEVpdGhlcjxFcnJvciwgQj5gLCB1c2luZyBgdHJhdmVyc2VgXG4gKiB5b3UgY2FuIGFwcGx5IGBmYCB0byBhbGwgZWxlbWVudHMgYW5kIGRpcmVjdGx5IG9idGFpbiBhcyBhIHJlc3VsdCBhbiBgRWl0aGVyPEVycm9yLEFycmF5PEI+PmBcbiAqIGkuZS4gYW4gYEFycmF5PEI+YCBpZiBhbGwgdGhlIHJlc3VsdHMgYXJlIGBCYCwgb3IgYW4gYEVycm9yYCBpZiBzb21lIG9mIHRoZSByZXN1bHRzXG4gKiBhcmUgYEVycm9yYHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHRyYXZlcnNlIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBBcHBsaWNhdGl2ZSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiZnAtdHMvbGliL0VpdGhlclwiO1xuICpcbiAqIGNvbnN0IGYgPSAoeDogdW5rbm93bikgPT5cbiAqICAgdHlwZW9mIHggPT09IFwic3RyaW5nXCIgPyByaWdodCh4LnRvVXBwZXJDYXNlKCkpIDogbGVmdChuZXcgRXJyb3IoXCJub3QgYSBzdHJpbmdcIikpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0cmF2ZXJzZShBcHBsaWNhdGl2ZSkoZikoW1wiYVwiLCBcImJcIl0pLCByaWdodChbXCJBXCIsIFwiQlwiXSkpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0cmF2ZXJzZShBcHBsaWNhdGl2ZSkoZikoW1wiYVwiLCA1XSksIGxlZnQobmV3IEVycm9yKFwibm90IGEgc3RyaW5nXCIpKSk7XG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNhYmxlXG4gKiBAc2luY2UgMi42LjNcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlOiBQaXBlYWJsZVRyYXZlcnNlMTxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiAodGE6IEFycmF5PEE+KSA9PiBIS1Q8RiwgQXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlV2l0aEluZGV4RiA9IHRyYXZlcnNlV2l0aEluZGV4KEYpXG4gIHJldHVybiAoZikgPT4gdHJhdmVyc2VXaXRoSW5kZXhGKChfLCBhKSA9PiBmKGEpKVxufVxuXG4vKipcbiAqIGBzZXF1ZW5jZWAgdGFrZXMgYW4gYEFycmF5YCB3aGVyZSBlbGVtZW50cyBhcmUgYEhLVDxBPmAgKGhpZ2hlciBraW5kZWQgdHlwZSkgYW5kLFxuICogdXNpbmcgYW4gYXBwbGljYXRpdmUgb2YgdGhhdCBgSEtUYCwgcmV0dXJucyBhbiBgSEtUYCBvZiBgQXJyYXk8QT5gLlxuICogRS5nLiBpdCBjYW4gdHVybiBhbiBgQXJyYXk8RWl0aGVyPEVycm9yLCBzdHJpbmc+PmAgaW50byBhbiBgRWl0aGVyPEVycm9yLCBBcnJheTxzdHJpbmc+PmAuXG4gKlxuICogYHNlcXVlbmNlYCByZXF1aXJlcyBhbiBgQXBwbGljYXRpdmVgIG9mIHRoZSBgSEtUYCB5b3UgYXJlIHRhcmdldGluZywgZS5nLiB0byB0dXJuIGFuXG4gKiBgQXJyYXk8RWl0aGVyPEUsIEE+PmAgaW50byBhbiBgRWl0aGVyPEUsIEFycmF5PEE+PmAsIGl0IG5lZWRzIGFuXG4gKiBgQXBwbGljYXRpdmVgIGZvciBgRWl0aGVyYCwgdG8gdG8gdHVybiBhbiBgQXJyYXk8T3B0aW9uPEE+PmAgaW50byBhbiBgT3B0aW9uPEFycmF5PEE+PmAsXG4gKiBpdCBuZWVkcyBhbiBgQXBwbGljYXRpdmVgIGZvciBgT3B0aW9uYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IEFwcGxpY2F0aXZlLCBsZWZ0LCByaWdodCB9IGZyb20gXCJmcC10cy9saWIvRWl0aGVyXCI7XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzZXF1ZW5jZShBcHBsaWNhdGl2ZSkoW3JpZ2h0KFwiYVwiKSwgcmlnaHQoXCJiXCIpXSksIHJpZ2h0KFtcImFcIiwgXCJiXCJdKSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBzZXF1ZW5jZShBcHBsaWNhdGl2ZSkoW3JpZ2h0KFwiYVwiKSwgbGVmdChuZXcgRXJyb3IoXCJub3QgYSBzdHJpbmdcIikpXSksXG4gKiAgIGxlZnQobmV3IEVycm9yKFwibm90IGEgc3RyaW5nXCIpKVxuICogKTtcbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FibGVcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2U6IFRyYXZlcnNhYmxlMTxVUkk+WydzZXF1ZW5jZSddID0gPEY+KEY6IEFwcGxpY2F0aXZlSEtUPEY+KSA9PiA8QT4oXG4gIHRhOiBBcnJheTxIS1Q8RiwgQT4+XG4pOiBIS1Q8RiwgQXJyYXk8QT4+ID0+IHtcbiAgcmV0dXJuIF9yZWR1Y2UodGEsIEYub2YoemVybygpKSwgKGZhcywgZmEpID0+XG4gICAgRi5hcChcbiAgICAgIEYubWFwKGZhcywgKGFzKSA9PiAoYTogQSkgPT4gcGlwZShhcywgYXBwZW5kKGEpKSksXG4gICAgICBmYVxuICAgIClcbiAgKVxufVxuXG4vKipcbiAqIFNhbWUgYXMgW2B0cmF2ZXJzZWBdKCN0cmF2ZXJzZSkgYnV0IHBhc3NpbmcgYWxzbyB0aGUgaW5kZXggdG8gdGhlIGl0ZXJhdGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdHJhdmVyc2VXaXRoSW5kZXggfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IEFwcGxpY2F0aXZlLCBsZWZ0LCByaWdodCB9IGZyb20gXCJmcC10cy9saWIvRWl0aGVyXCI7XG4gKlxuICogY29uc3QgZiA9IChpbmRleDpudW1iZXIsIHg6dW5rbm93bikgPT5cbiAqICAgdHlwZW9mIHggPT09IFwic3RyaW5nXCIgPyByaWdodCh4LnRvVXBwZXJDYXNlKCkgKyBpbmRleCkgOiBsZWZ0KG5ldyBFcnJvcihcIm5vdCBhIHN0cmluZ1wiKSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHRyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlKShmKShbXCJhXCIsIFwiYlwiXSksIHJpZ2h0KFtcIkEwXCIsIFwiQjFcIl0pKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmUpKGYpKFtcImFcIiwgNV0pLCBsZWZ0KG5ldyBFcnJvcihcIm5vdCBhIHN0cmluZ1wiKSkpO1xuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzYWJsZVdpdGhJbmRleFxuICogQHNpbmNlIDIuNi4zXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVdpdGhJbmRleDogUGlwZWFibGVUcmF2ZXJzZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+ID0gPEY+KEY6IEFwcGxpY2F0aXZlSEtUPEY+KSA9PiA8QSwgQj4oXG4gIGY6IChpOiBudW1iZXIsIGE6IEEpID0+IEhLVDxGLCBCPlxuKTogKCh0YTogQXJyYXk8QT4pID0+IEhLVDxGLCBBcnJheTxCPj4pID0+XG4gIHJlZHVjZVdpdGhJbmRleChGLm9mKHplcm8oKSksIChpLCBmYnMsIGEpID0+XG4gICAgRi5hcChcbiAgICAgIEYubWFwKGZicywgKGJzKSA9PiAoYjogQikgPT4gcGlwZShicywgYXBwZW5kKGIpKSksXG4gICAgICBmKGksIGEpXG4gICAgKVxuICApXG5cbi8qKlxuICogQGNhdGVnb3J5IFdpdGhlcmFibGVcbiAqIEBzaW5jZSAyLjYuNVxuICovXG5leHBvcnQgY29uc3Qgd2l0aGVyOiBQaXBlYWJsZVdpdGhlcjE8VVJJPiA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQj4oZjogKGE6IEEpID0+IEhLVDxGLCBPcHRpb248Qj4+KSA9PiAoZmE6IEFycmF5PEE+KSA9PiBIS1Q8RiwgQXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IF93aXRoZXJGID0gX3dpdGhlcihGKVxuICByZXR1cm4gKGYpID0+IChmYSkgPT4gX3dpdGhlckYoZmEsIGYpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IFdpdGhlcmFibGVcbiAqIEBzaW5jZSAyLjYuNVxuICovXG5leHBvcnQgY29uc3Qgd2lsdDogUGlwZWFibGVXaWx0MTxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBLCBCLCBDPihmOiAoYTogQSkgPT4gSEtUPEYsIEVpdGhlcjxCLCBDPj4pID0+IChmYTogQXJyYXk8QT4pID0+IEhLVDxGLCBTZXBhcmF0ZWQ8QXJyYXk8Qj4sIEFycmF5PEM+Pj4pID0+IHtcbiAgY29uc3QgX3dpbHRGID0gX3dpbHQoRilcbiAgcmV0dXJuIChmKSA9PiAoZmEpID0+IF93aWx0RihmYSwgZilcbn1cblxuLyoqXG4gKiBgdW5mb2xkYCB0YWtlcyBhIGZ1bmN0aW9uIGBmYCB3aGljaCByZXR1cm5zIGFuIGBPcHRpb25gIG9mIGEgdHVwbGUgY29udGFpbmluZyBhbiBvdXRjb21lXG4gKiB2YWx1ZSBhbmQgYW4gaW5wdXQgZm9yIHRoZSBmb2xsb3dpbmcgaXRlcmF0aW9uLlxuICogYHVuZm9sZGAgYXBwbGllcyBgZmAgdG8gdGhlIGluaXRpYWwgdmFsdWUgYGJgIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IHRvIHRoZSBzZWNvbmRcbiAqIGVsZW1lbnQgb2YgdGhlIHR1cGxlIGNvbnRhaW5lZCBpbiB0aGUgcmV0dXJuZWQgYG9wdGlvbmAgb2YgdGhlIHByZXZpb3VzXG4gKiBjYWxjdWxhdGlvbiB1bnRpbCBgZmAgcmV0dXJucyBgT3B0aW9uLm5vbmVgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB1bmZvbGQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IG9wdGlvbiB9IGZyb20gJ2ZwLXRzJ1xuICpcbiAqIGNvbnN0IGYgPSAobjogbnVtYmVyKSA9PiB7XG4gKiAgIGlmIChuIDw9IDApIHJldHVybiBvcHRpb24ubm9uZTtcbiAqICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuICogMjtcbiAqICAgY29uc3QgaW5wdXRGb3JOZXh0Um91bmQgPSBuIC0gMTtcbiAqICAgcmV0dXJuIG9wdGlvbi5zb21lKFtyZXR1cm5WYWx1ZSwgaW5wdXRGb3JOZXh0Um91bmRdIGFzIGNvbnN0KTtcbiAqIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuZm9sZCg1LCBmKSwgWzEwLCA4LCA2LCA0LCAyXSk7XG4gKlxuICogQGNhdGVnb3J5IFVuZm9sZGFibGVcbiAqIEBzaW5jZSAyLjYuNlxuICovXG5leHBvcnQgY29uc3QgdW5mb2xkID0gPEEsIEI+KGI6IEIsIGY6IChiOiBCKSA9PiBPcHRpb248cmVhZG9ubHkgW0EsIEJdPik6IEFycmF5PEE+ID0+IHtcbiAgY29uc3Qgb3V0OiBBcnJheTxBPiA9IFtdXG4gIGxldCBiYjogQiA9IGJcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBtdCA9IGYoYmIpXG4gICAgaWYgKF8uaXNTb21lKG10KSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gbXQudmFsdWVcbiAgICAgIG91dC5wdXNoKGEpXG4gICAgICBiYiA9IGJcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdBcnJheSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDxBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IEFycmF5PEE+XG4gIH1cbn1cblxuLyoqXG4gKiBgZ2V0U2hvd2AgbWFrZXMgYSBgU2hvd2AgZm9yIGFuIGBBcnJheTxBPmAgZnJvbSBhIGBTaG93YCBmb3JcbiAqIGFuIGBBYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0U2hvdyB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGNvbnN0IG51bVNob3cgPSB7IHNob3c6IChuOiBudW1iZXIpID0+IChuID49IDAgPyBgJHtufWAgOiBgKCR7LW59KWApIH07XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdldFNob3cobnVtU2hvdykuc2hvdyhbLTIsIC0xLCAwLCAxXSksIFwiWygyKSwgKDEpLCAwLCAxXVwiKTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNob3c6IDxBPihTOiBTaG93PEE+KSA9PiBTaG93PEFycmF5PEE+PiA9IFJBLmdldFNob3dcblxuLyoqXG4gKiBHZXQgYSBgU2VtaWdyb3VwYCBiYXNlZCBvbiB0aGUgY29uY2F0ZW5hdGlvbiBvZiBgQXJyYXlgcy5cbiAqIFNlZSBhbHNvIFtgZ2V0TW9ub2lkYF0oI2dldE1vbm9pZCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldFNlbWlncm91cCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGNvbnN0IFMgPSBnZXRTZW1pZ3JvdXA8bnVtYmVyPigpO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTLmNvbmNhdChbMSwgMl0sIFsyLCAzXSksIFsxLCAyLCAyLCAzXSk7XG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VtaWdyb3VwID0gPEEgPSBuZXZlcj4oKTogU2VtaWdyb3VwPEFycmF5PEE+PiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdC5jb25jYXQoc2Vjb25kKVxufSlcblxuLyoqXG4gKiBSZXR1cm5zIGEgYE1vbm9pZGAgZm9yIGBBcnJheTxBPmAgYmFzZWQgb24gdGhlIGNvbmNhdGVuYXRpb24gb2YgYEFycmF5YHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldE1vbm9pZCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICpcbiAqIGNvbnN0IE0gPSBnZXRNb25vaWQ8bnVtYmVyPigpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0uY29uY2F0KFsxLCAyXSwgWzMsIDRdKSwgWzEsIDIsIDMsIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0TW9ub2lkID0gPEEgPSBuZXZlcj4oKTogTW9ub2lkPEFycmF5PEE+PiA9PiAoe1xuICBjb25jYXQ6IGdldFNlbWlncm91cDxBPigpLmNvbmNhdCxcbiAgZW1wdHk6IFtdXG59KVxuXG4vKipcbiAqIERlcml2ZXMgYW4gYEVxYCBvdmVyIHRoZSBgQXJyYXlgIG9mIGEgZ2l2ZW4gZWxlbWVudCB0eXBlIGZyb20gdGhlIGBFcWAgb2YgdGhhdCB0eXBlLiBUaGUgZGVyaXZlZCBgRXFgIGRlZmluZXMgdHdvXG4gKiBhcnJheXMgYXMgZXF1YWwgaWYgYWxsIGVsZW1lbnRzIG9mIGJvdGggYXJyYXlzIGFyZSBjb21wYXJlZCBlcXVhbCBwYWlyd2lzZSB3aXRoIHRoZSBnaXZlbiBgRWAuIEluIGNhc2Ugb2YgYXJyYXlzIG9mXG4gKiBkaWZmZXJlbnQgbGVuZ3RocywgdGhlIHJlc3VsdCBpcyBub24gZXF1YWxpdHkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgZ2V0RXEgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBjb25zdCBFID0gZ2V0RXEoUy5FcSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChFLmVxdWFscyhbJ2EnLCAnYiddLCBbJ2EnLCAnYiddKSwgdHJ1ZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChFLmVxdWFscyhbJ2EnXSwgW10pLCBmYWxzZSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEVxOiA8QT4oRTogRXE8QT4pID0+IEVxPEFycmF5PEE+PiA9IFJBLmdldEVxXG5cbi8qKlxuICogRGVyaXZlcyBhbiBgT3JkYCBvdmVyIHRoZSBgQXJyYXlgIG9mIGEgZ2l2ZW4gZWxlbWVudCB0eXBlIGZyb20gdGhlIGBPcmRgIG9mIHRoYXQgdHlwZS4gVGhlIG9yZGVyaW5nIGJldHdlZW4gdHdvIHN1Y2hcbiAqIGFycmF5cyBpcyBlcXVhbCB0bzogdGhlIGZpcnN0IG5vbiBlcXVhbCBjb21wYXJpc29uIG9mIGVhY2ggYXJyYXlzIGVsZW1lbnRzIHRha2VuIHBhaXJ3aXNlIGluIGluY3JlYXNpbmcgb3JkZXIsIGluXG4gKiBjYXNlIG9mIGVxdWFsaXR5IG92ZXIgYWxsIHRoZSBwYWlyd2lzZSBlbGVtZW50czsgdGhlIGxvbmdlc3QgYXJyYXkgaXMgY29uc2lkZXJlZCB0aGUgZ3JlYXRlc3QsIGlmIGJvdGggYXJyYXlzIGhhdmVcbiAqIHRoZSBzYW1lIGxlbmd0aCwgdGhlIHJlc3VsdCBpcyBlcXVhbGl0eS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0T3JkIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqXG4gKiBjb25zdCBPID0gZ2V0T3JkKFMuT3JkKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKE8uY29tcGFyZShbJ2InXSwgWydhJ10pLCAxKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKE8uY29tcGFyZShbJ2EnXSwgWydhJ10pLCAwKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKE8uY29tcGFyZShbJ2EnXSwgWydiJ10pLCAtMSlcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yZDogPEE+KE86IE9yZDxBPikgPT4gT3JkPEFycmF5PEE+PiA9IFJBLmdldE9yZFxuXG4vKipcbiAqIEdldCBhIGBTZW1pZ3JvdXBgIGJhc2VkIG9uIHRoZSB1bmlvbiBvZiB0aGUgZWxlbWVudHMgb2YgYEFycmF5YHMuXG4gKiBFbGVtZW50cyB3aGljaCBlcXVhbCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIGBFcWAgYXJlIGluY2x1ZGVkXG4gKiBvbmx5IG9uY2UgaW4gdGhlIHJlc3VsdC5cbiAqIFNlZSBhbHNvIFtgZ2V0VW5pb25Nb25vaWRgXSgjZ2V0VW5pb25Nb25vaWQpLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRVbmlvblNlbWlncm91cCB9IGZyb20gJ2ZwLXRzL0FycmF5JztcbiAqIGltcG9ydCB7IEVxIH0gZnJvbSAnZnAtdHMvbnVtYmVyJztcbiAqXG4gKiBjb25zdCBTID0gZ2V0VW5pb25TZW1pZ3JvdXA8bnVtYmVyPihFcSk7XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuY29uY2F0KFsxLCAyXSwgWzIsIDNdKSwgWzEsIDIsIDNdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVbmlvblNlbWlncm91cCA9IDxBPihFOiBFcTxBPik6IFNlbWlncm91cDxBcnJheTxBPj4gPT4ge1xuICBjb25zdCB1bmlvbkUgPSB1bmlvbihFKVxuICByZXR1cm4ge1xuICAgIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IHVuaW9uRShzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogR2V0IGEgYE1vbm9pZGAgYmFzZWQgb24gdGhlIHVuaW9uIG9mIHRoZSBlbGVtZW50cyBvZiBgQXJyYXlgcy5cbiAqIEVsZW1lbnRzIHdoaWNoIGVxdWFsIGFjY29yZGluZyB0byB0aGUgcHJvdmlkZWQgYEVxYCBhcmUgaW5jbHVkZWRcbiAqIG9ubHkgb25jZSBpbiB0aGUgcmVzdWx0LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRVbmlvbk1vbm9pZCB9IGZyb20gJ2ZwLXRzL0FycmF5J1xuICogaW1wb3J0IHsgRXEgfSBmcm9tICdmcC10cy9udW1iZXInO1xuICpcbiAqIGNvbnN0IE0gPSBnZXRVbmlvbk1vbm9pZDxudW1iZXI+KEVxKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTS5jb25jYXQoWzEsIDJdLCBbMiwgM10pLCBbMSwgMiwgM10pO1xuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNLmVtcHR5LFtdKTtcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVbmlvbk1vbm9pZCA9IDxBPihFOiBFcTxBPik6IE1vbm9pZDxBcnJheTxBPj4gPT4gKHtcbiAgY29uY2F0OiBnZXRVbmlvblNlbWlncm91cChFKS5jb25jYXQsXG4gIGVtcHR5OiBbXVxufSlcblxuLyoqXG4gKiBHZXQgYSBgU2VtaWdyb3VwYCBiYXNlZCBvbiB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoZSBlbGVtZW50cyBvZiBgQXJyYXlgcy5cbiAqIE9ubHkgZWxlbWVudHMgcHJlc2VudCBpbiB0aGUgdHdvIGFycmF5cyB3aGljaCBhcmUgZXF1YWwgYWNjb3JkaW5nIHRvIHRoZVxuICogcHJvdmlkZWQgYEVxYCBhcmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0SW50ZXJzZWN0aW9uU2VtaWdyb3VwIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBFcSB9IGZyb20gJ2ZwLXRzL251bWJlcic7XG4gKlxuICogY29uc3QgUyA9IGdldEludGVyc2VjdGlvblNlbWlncm91cDxudW1iZXI+KEVxKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUy5jb25jYXQoWzEsIDJdLCBbMiwgM10pLCBbMl0pO1xuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEludGVyc2VjdGlvblNlbWlncm91cCA9IDxBPihFOiBFcTxBPik6IFNlbWlncm91cDxBcnJheTxBPj4gPT4ge1xuICBjb25zdCBpbnRlcnNlY3Rpb25FID0gaW50ZXJzZWN0aW9uKEUpXG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gaW50ZXJzZWN0aW9uRShzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogR2V0IGEgYE1hZ21hYCBmb3IgYEFycmF5YCB3aGVyZSB0aGUgYGNvbmNhdGAgZnVuY3Rpb24gaXMgdGhlIGRpZmZlcm5jZSBiZXR3ZWVuXG4gKiB0aGUgZmlyc3QgYW5kIHRoZSBzZWNvbmQgYXJyYXksIGkuZS4gdGhlIHJlc3VsdCBjb250YWlucyBhbGwgdGhlIGVsZW1lbnRzIG9mIHRoZVxuICogZmlyc3QgYXJyYXkgZm9yIHdoaWNoIHRoZWlyIGlzIG5vIGVxdWFsIGVsZW1lbnQgaW4gdGhlIHNlY29uZCBhcnJheSBhY2NvcmRpbmdcbiAqIHRvIHRoZSBgRXFgIHByb3ZpZGVkLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0RGlmZmVyZW5jZU1hZ21hIH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKiBpbXBvcnQgeyBFcSB9IGZyb20gJ2ZwLXRzL251bWJlcic7XG4gKlxuICogY29uc3QgUyA9IGdldERpZmZlcmVuY2VNYWdtYTxudW1iZXI+KEVxKTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUy5jb25jYXQoWzEsIDJdLCBbMiwgM10pLCBbMV0pO1xuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERpZmZlcmVuY2VNYWdtYSA9IDxBPihFOiBFcTxBPik6IE1hZ21hPEFycmF5PEE+PiA9PiB7XG4gIGNvbnN0IGRpZmZlcmVuY2VFID0gZGlmZmVyZW5jZShFKVxuICByZXR1cm4ge1xuICAgIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IGRpZmZlcmVuY2VFKHNlY29uZCkoZmlyc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogR2l2ZW4gYW4gaW5wdXQgYW4gYEFycmF5YCBvZiBmdW5jdGlvbnMsIGBmbGFwYCByZXR1cm5zIGFuIGBBcnJheWAgY29udGFpbmluZ1xuICogdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgZWFjaCBmdW5jdGlvbiB0byB0aGUgZ2l2ZW4gaW5wdXQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZsYXAgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBjb25zdCBmdW5zID0gW1xuICogICAobjogbnVtYmVyKSA9PiBgRG91YmxlOiAke24gKiAyfWAsXG4gKiAgIChuOiBudW1iZXIpID0+IGBUcmlwbGU6ICR7biAqIDN9YCxcbiAqICAgKG46IG51bWJlcikgPT4gYFNxdWFyZTogJHtuICogbn1gLFxuICogXTtcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmxhcCg0KShmdW5zKSwgWydEb3VibGU6IDgnLCAnVHJpcGxlOiAxMicsICdTcXVhcmU6IDE2J10pO1xuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMTxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yV2l0aEluZGV4OiBGdW5jdG9yV2l0aEluZGV4MTxVUkksIG51bWJlcj4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXhcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBseTogQXBwbHkxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwXG59XG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseSlcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNlY29uZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTZWNvbmRfKEFwcGx5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmU6IEFwcGxpY2F0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4xPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24gYW5kXG4gKiBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZDogTW9uYWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgVW5mb2xkYWJsZTogVW5mb2xkYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICB1bmZvbGRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFsdDogQWx0MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYWx0OiBfYWx0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgWmVybzogWmVybzE8VVJJPiA9IHtcbiAgVVJJLFxuICB6ZXJvXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ3VhcmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGd1YXJkXyhaZXJvLCBQb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQWx0ZXJuYXRpdmU6IEFsdGVybmF0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGFsdDogX2FsdCxcbiAgemVyb1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRXh0ZW5kOiBFeHRlbmQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBleHRlbmQ6IF9leHRlbmRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbXBhY3RhYmxlOiBDb21wYWN0YWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRmlsdGVyYWJsZTogRmlsdGVyYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXBcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZpbHRlcmFibGVXaXRoSW5kZXg6IEZpbHRlcmFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgcGFydGl0aW9uTWFwV2l0aEluZGV4OiBfcGFydGl0aW9uTWFwV2l0aEluZGV4LFxuICBwYXJ0aXRpb25XaXRoSW5kZXg6IF9wYXJ0aXRpb25XaXRoSW5kZXgsXG4gIGZpbHRlck1hcFdpdGhJbmRleDogX2ZpbHRlck1hcFdpdGhJbmRleCxcbiAgZmlsdGVyV2l0aEluZGV4OiBfZmlsdGVyV2l0aEluZGV4XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGb2xkYWJsZTogRm9sZGFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRm9sZGFibGVXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj4gPSB7XG4gIFVSSSxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgcmVkdWNlV2l0aEluZGV4OiBfcmVkdWNlV2l0aEluZGV4LFxuICBmb2xkTWFwV2l0aEluZGV4OiBfZm9sZE1hcFdpdGhJbmRleCxcbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6IF9yZWR1Y2VSaWdodFdpdGhJbmRleFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgVHJhdmVyc2FibGU6IFRyYXZlcnNhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2Vcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYXZlcnNhYmxlV2l0aEluZGV4OiBUcmF2ZXJzYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICByZWR1Y2VXaXRoSW5kZXg6IF9yZWR1Y2VXaXRoSW5kZXgsXG4gIGZvbGRNYXBXaXRoSW5kZXg6IF9mb2xkTWFwV2l0aEluZGV4LFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDogX3JlZHVjZVJpZ2h0V2l0aEluZGV4LFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICBzZXF1ZW5jZSxcbiAgdHJhdmVyc2VXaXRoSW5kZXg6IF90cmF2ZXJzZVdpdGhJbmRleFxufVxuXG5jb25zdCBfd2l0aGVyOiBXaXRoZXJhYmxlMTxVUkk+Wyd3aXRoZXInXSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgd2l0aGVyRGVmYXVsdChUcmF2ZXJzYWJsZSwgQ29tcGFjdGFibGUpXG5jb25zdCBfd2lsdDogV2l0aGVyYWJsZTE8VVJJPlsnd2lsdCddID1cbiAgLyojX19QVVJFX18qL1xuICB3aWx0RGVmYXVsdChUcmF2ZXJzYWJsZSwgQ29tcGFjdGFibGUpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBXaXRoZXJhYmxlOiBXaXRoZXJhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2UsXG4gIHdpdGhlcjogX3dpdGhlcixcbiAgd2lsdDogX3dpbHRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ2hhaW5SZWNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluUmVjRGVwdGhGaXJzdDogPEEsIEI+KFxuICBmOiAoYTogQSkgPT4gQXJyYXk8RWl0aGVyPEEsIEI+PlxuKSA9PiAoYTogQSkgPT4gQXJyYXk8Qj4gPSBSQS5jaGFpblJlY0RlcHRoRmlyc3QgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW5SZWNEZXB0aEZpcnN0OiBDaGFpblJlYzE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXAsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGNoYWluUmVjOiBfY2hhaW5SZWNEZXB0aEZpcnN0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IENoYWluUmVjXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblJlY0JyZWFkdGhGaXJzdDogPEEsIEI+KFxuICBmOiAoYTogQSkgPT4gQXJyYXk8RWl0aGVyPEEsIEI+PlxuKSA9PiAoYTogQSkgPT4gQXJyYXk8Qj4gPSBSQS5jaGFpblJlY0JyZWFkdGhGaXJzdCBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpblJlY0JyZWFkdGhGaXJzdDogQ2hhaW5SZWMxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluLFxuICBjaGFpblJlYzogX2NoYWluUmVjQnJlYWR0aEZpcnN0XG59XG5cbi8qKlxuICogRmlsdGVyIHZhbHVlcyBpbnNpZGUgYSBjb250ZXh0LlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlckUgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZpbHRlckVfKFdpdGhlcmFibGUpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbUVpdGhlcjogRnJvbUVpdGhlcjE8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tRWl0aGVyXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tRWl0aGVySyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUVpdGhlcktfKEZyb21FaXRoZXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHVuc2FmZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSB1bnNhZmVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlSW5zZXJ0QXQ6IDxBPihpOiBudW1iZXIsIGE6IEEsIGFzOiBBcnJheTxBPikgPT4gTm9uRW1wdHlBcnJheTxBPiA9IE5FQS51bnNhZmVJbnNlcnRBdFxuXG4vKipcbiAqIEBjYXRlZ29yeSB1bnNhZmVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlVXBkYXRlQXQgPSA8QT4oaTogbnVtYmVyLCBhOiBBLCBhczogQXJyYXk8QT4pOiBBcnJheTxBPiA9PlxuICBpc05vbkVtcHR5KGFzKSA/IE5FQS51bnNhZmVVcGRhdGVBdChpLCBhLCBhcykgOiBbXVxuXG4vKipcbiAqIEBjYXRlZ29yeSB1bnNhZmVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlRGVsZXRlQXQgPSA8QT4oaTogbnVtYmVyLCBhczogQXJyYXk8QT4pOiBBcnJheTxBPiA9PiB7XG4gIGNvbnN0IHhzID0gYXMuc2xpY2UoKVxuICB4cy5zcGxpY2UoaSwgMSlcbiAgcmV0dXJuIHhzXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogYGV2ZXJ5YCB0ZWxscyBpZiB0aGUgcHJvdmlkZWQgcHJlZGljYXRlIGhvbGRzIHRydWUgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIGBBcnJheWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGV2ZXJ5IH0gZnJvbSAnZnAtdHMvQXJyYXknXG4gKlxuICogYXNzZXJ0LmVxdWFsKGV2ZXJ5KCh4OiBudW1iZXIpID0+IHggPj0gMCkoWzEsIDIsIDNdKSwgdHJ1ZSk7XG4gKiBhc3NlcnQuZXF1YWwoZXZlcnkoKHg6IG51bWJlcikgPT4geCA+PSAwKShbLTEsIDIsIDNdKSwgZmFsc2UpO1xuICpcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgZXZlcnk6IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gKGFzOiBBcnJheTxBPikgPT4gYm9vbGVhbiA9IFJBLmV2ZXJ5XG5cbi8qKlxuICogYHNvbWVgIHRlbGxzIGlmIHRoZSBwcm92aWRlZCBwcmVkaWNhdGUgaG9sZHMgdHJ1ZSBhdCBsZWFzdCBmb3Igb25lIGVsZW1lbnQgaW4gdGhlIGBBcnJheWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvbWUgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZXF1YWwoc29tZSgoeDogbnVtYmVyKSA9PiB4ID49IDApKFsxLCAyLCAzXSksIHRydWUpO1xuICogYXNzZXJ0LmVxdWFsKHNvbWUoKHg6IG51bWJlcikgPT4geCA+PSAxMCkoWzEsIDIsIDNdKSwgZmFsc2UpO1xuICpcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3Qgc29tZSA9IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gKGFzOiBBcnJheTxBPik6IGFzIGlzIE5vbkVtcHR5QXJyYXk8QT4gPT4gYXMuc29tZShwcmVkaWNhdGUpXG5cbi8qKlxuICogQWxpYXMgb2YgW2Bzb21lYF0oI3NvbWUpXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZXhpc3RzID0gc29tZVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkbyBub3RhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgRG86IEFycmF5PHt9PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlY29yZClcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRUbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZFRvXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHBpcGVhYmxlIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwUyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTXyhBcHBseSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2UgYE5vbkVtcHR5QXJyYXlgIG1vZHVsZSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gTkVBLnJhbmdlXG5cbi8qKlxuICogVXNlIGEgbmV3IGBbXWAgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBlbXB0eTogQXJyYXk8bmV2ZXI+ID0gW11cblxuLyoqXG4gKiBVc2UgYHByZXBlbmRgIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgY29ucyA9IE5FQS5jb25zXG5cbi8qKlxuICogVXNlIGBhcHBlbmRgIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc25vYyA9IE5FQS5zbm9jXG5cbi8qKlxuICogVXNlIGBwcmVwZW5kQWxsYCBpbnN0ZWFkXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi45LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kVG9BbGwgPSBwcmVwZW5kQWxsXG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBhcnJheTogRnVuY3RvcldpdGhJbmRleDE8VVJJLCBudW1iZXI+ICZcbiAgTW9uYWQxPFVSST4gJlxuICBVbmZvbGRhYmxlMTxVUkk+ICZcbiAgQWx0ZXJuYXRpdmUxPFVSST4gJlxuICBFeHRlbmQxPFVSST4gJlxuICBGaWx0ZXJhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj4gJlxuICBGb2xkYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+ICZcbiAgVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiAmXG4gIFdpdGhlcmFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICBwYXJ0aXRpb25NYXBXaXRoSW5kZXg6IF9wYXJ0aXRpb25NYXBXaXRoSW5kZXgsXG4gIHBhcnRpdGlvbldpdGhJbmRleDogX3BhcnRpdGlvbldpdGhJbmRleCxcbiAgZmlsdGVyTWFwV2l0aEluZGV4OiBfZmlsdGVyTWFwV2l0aEluZGV4LFxuICBmaWx0ZXJXaXRoSW5kZXg6IF9maWx0ZXJXaXRoSW5kZXgsXG4gIGFsdDogX2FsdCxcbiAgemVybyxcbiAgdW5mb2xkLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICBzZXF1ZW5jZSxcbiAgcmVkdWNlV2l0aEluZGV4OiBfcmVkdWNlV2l0aEluZGV4LFxuICBmb2xkTWFwV2l0aEluZGV4OiBfZm9sZE1hcFdpdGhJbmRleCxcbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6IF9yZWR1Y2VSaWdodFdpdGhJbmRleCxcbiAgdHJhdmVyc2VXaXRoSW5kZXg6IF90cmF2ZXJzZVdpdGhJbmRleCxcbiAgZXh0ZW5kOiBfZXh0ZW5kLFxuICB3aXRoZXI6IF93aXRoZXIsXG4gIHdpbHQ6IF93aWx0XG59XG4iXX0=