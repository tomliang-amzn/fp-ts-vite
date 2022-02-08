"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compact = exports.chunksOf = exports.chop = exports.chainWithIndex = exports.chainRecDepthFirst = exports.chainRecBreadthFirst = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.appendW = exports.append = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports._chainRecDepthFirst = exports._chainRecBreadthFirst = exports.Zero = exports.Witherable = exports.Unfoldable = exports.URI = exports.TraversableWithIndex = exports.Traversable = exports.Pointed = exports.Monad = exports.FunctorWithIndex = exports.Functor = exports.FromEither = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Extend = exports.Do = exports.Compactable = exports.ChainRecDepthFirst = exports.ChainRecBreadthFirst = exports.Chain = exports.Apply = exports.Applicative = exports.Alternative = exports.Alt = void 0;
exports.comprehension = comprehension;
exports.deleteAt = exports.cons = exports.concatW = exports.concat = void 0;
exports.difference = difference;
exports.dropLeft = void 0;
exports.dropLeftWhile = dropLeftWhile;
exports.duplicate = exports.dropRight = void 0;
exports.elem = elem;
exports.filterWithIndex = exports.filterMapWithIndex = exports.filterMap = exports.filterE = exports.filter = exports.extend = exports.exists = exports.every = exports.empty = void 0;
exports.findFirst = findFirst;
exports.findIndex = exports.findFirstMap = void 0;
exports.findLast = findLast;
exports.fromOptionK = exports.fromOption = exports.fromEitherK = exports.fromEither = exports.fromArray = exports.foldRight = exports.foldMapWithIndex = exports.foldMap = exports.foldLeft = exports.flatten = exports.flap = exports.findLastMap = exports.findLastIndex = void 0;
exports.fromPredicate = fromPredicate;
exports.insertAt = exports.init = exports.head = exports.guard = exports.getUnionSemigroup = exports.getUnionMonoid = exports.getShow = exports.getSemigroup = exports.getOrd = exports.getMonoid = exports.getIntersectionSemigroup = exports.getEq = exports.getDifferenceMagma = void 0;
exports.intersection = intersection;
exports.isNonEmpty = exports.isEmpty = exports.intersperse = void 0;
exports.lefts = exports.last = exports.isOutOfBound = exports.isNonEmpty = exports.isEmpty = exports.intersperse = void 0;
exports.lookup = lookup;
exports.sortBy = exports.sort = exports.some = exports.snoc = exports.size = exports.sequence = exports.separate = exports.scanRight = exports.scanLeft = exports.rotate = exports.rights = exports.reverse = exports.replicate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.readonlyArray = exports.range = exports.prependW = exports.prependToAll = exports.prependAll = exports.prepend = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partition = exports.of = exports.modifyAt = exports.matchW = exports.matchRightW = exports.matchRight = exports.matchLeftW = exports.matchLeft = exports.match = exports.mapWithIndex = exports.map = exports.makeBy = void 0;
exports.spanLeft = spanLeft;
exports.takeLeft = exports.tail = exports.splitAt = void 0;
exports.takeLeftWhile = takeLeftWhile;
exports.unfold = exports.traverseWithIndex = exports.traverse = exports.toArray = exports.takeRight = void 0;
exports.union = union;
exports.zero = exports.wither = exports.wilt = exports.updateAt = exports.unzip = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.unsafeDeleteAt = exports.uniq = void 0;
exports.zip = zip;
exports.zipWith = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _Eq = require("./Eq");

var _FromEither = require("./FromEither");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var N = _interopRequireWildcard(require("./number"));

var _Ord = require("./Ord");

var RNEA = _interopRequireWildcard(require("./ReadonlyNonEmptyArray"));

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

var ReadonlyNonEmptyArray = RNEA.ReadonlyNonEmptyArray; // -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Test whether a `ReadonlyArray` is empty.
 *
 * @example
 * import { isEmpty } from 'fp-ts/ReadonlyArray'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @category refinements
 * @since 2.5.0
 */

var isEmpty = function isEmpty(as) {
  return as.length === 0;
};
/**
 * Test whether a `ReadonlyArray` is non empty.
 *
 * @category refinements
 * @since 2.5.0
 */


exports.isEmpty = isEmpty;
var isNonEmpty = RNEA.isNonEmpty; // -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Prepend an element to the front of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prepend } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */

exports.isNonEmpty = isNonEmpty;
var prepend = RNEA.prepend;
/**
 * Less strict version of [`prepend`](#prepend).
 *
 * @category constructors
 * @since 2.11.0
 */

exports.prepend = prepend;
var prependW = RNEA.prependW;
/**
 * Append an element to the end of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { append } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */

exports.prependW = prependW;
var append = RNEA.append;
/**
 * Less strict version of [`append`](#append).
 *
 * @category constructors
 * @since 2.11.0
 */

exports.append = append;
var appendW = RNEA.appendW;
/**
 * Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'fp-ts/ReadonlyArray'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.5.0
 */

exports.appendW = appendW;

var makeBy = function makeBy(n, f) {
  return n <= 0 ? empty : RNEA.makeBy(f)(n);
};
/**
 * Create a `ReadonlyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.5.0
 */


exports.makeBy = makeBy;

var replicate = function replicate(n, a) {
  return makeBy(n, function () {
    return a;
  });
};
/**
 * @category constructors
 * @since 2.11.0
 */


exports.replicate = replicate;

function fromPredicate(predicate) {
  return function (a) {
    return predicate(a) ? [a] : empty;
  };
} // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.11.0
 */


var fromOption = function fromOption(ma) {
  return _.isNone(ma) ? empty : [ma.value];
};
/**
 * Transforms an `Either` to a `ReadonlyArray`.
 *
 * @category natural transformations
 * @since 2.11.0
 */


exports.fromOption = fromOption;

var fromEither = function fromEither(e) {
  return _.isLeft(e) ? empty : [e.right];
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Less strict version of [`match`](#match).
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
 * @category destructors
 * @since 2.11.0
 */


exports.matchW = matchW;
var match = matchW;
/**
 * Less strict version of [`matchLeft`](#matchleft).
 *
 * @category destructors
 * @since 2.11.0
 */

exports.match = match;

var matchLeftW = function matchLeftW(onEmpty, onNonEmpty) {
  return function (as) {
    return isNonEmpty(as) ? onNonEmpty(RNEA.head(as), RNEA.tail(as)) : onEmpty();
  };
};
/**
 * Break a `ReadonlyArray` into its first element and remaining elements.
 *
 * @example
 * import { matchLeft } from 'fp-ts/ReadonlyArray'
 *
 * const len: <A>(as: ReadonlyArray<A>) => number = matchLeft(() => 0, (_, tail) => 1 + len(tail))
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
 * @since 2.5.0
 */

exports.matchLeft = matchLeft;
var foldLeft = matchLeft;
/**
 * Less strict version of [`matchRight`](#matchright).
 *
 * @category destructors
 * @since 2.11.0
 */

exports.foldLeft = foldLeft;

var matchRightW = function matchRightW(onEmpty, onNonEmpty) {
  return function (as) {
    return isNonEmpty(as) ? onNonEmpty(RNEA.init(as), RNEA.last(as)) : onEmpty();
  };
};
/**
 * Break a `ReadonlyArray` into its initial elements and the last element.
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
 * @since 2.5.0
 */

exports.matchRight = matchRight;
var foldRight = matchRight; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.7.0
 */

exports.foldRight = foldRight;

var chainWithIndex = function chainWithIndex(f) {
  return function (as) {
    if (isEmpty(as)) {
      return empty;
    }

    var out = [];

    for (var _i = 0; _i < as.length; _i++) {
      out.push.apply(out, _toConsumableArray(f(_i, as[_i])));
    }

    return out;
  };
};
/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @example
 * import { scanLeft } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 * @category combinators
 * @since 2.5.0
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
 * import { scanRight } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @category combinators
 * @since 2.5.0
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
 * Calculate the number of elements in a `ReadonlyArray`.
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
 * @since 2.5.0
 */


exports.size = size;
var isOutOfBound = RNEA.isOutOfBound; // TODO: remove non-curried overloading in v3

/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)
 *
 * @since 2.5.0
 */

exports.isOutOfBound = isOutOfBound;

function lookup(i, as) {
  return as === undefined ? function (as) {
    return lookup(i, as);
  } : isOutOfBound(i, as) ? _.none : _.some(as[i]);
}
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @since 2.5.0
 */


var head = function head(as) {
  return isNonEmpty(as) ? _.some(RNEA.head(as)) : _.none;
};
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @since 2.5.0
 */


exports.head = head;

var last = function last(as) {
  return isNonEmpty(as) ? _.some(RNEA.last(as)) : _.none;
};
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @since 2.5.0
 */


exports.last = last;

var tail = function tail(as) {
  return isNonEmpty(as) ? _.some(RNEA.tail(as)) : _.none;
};
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @since 2.5.0
 */


exports.tail = tail;

var init = function init(as) {
  return isNonEmpty(as) ? _.some(RNEA.init(as)) : _.none;
};
/**
 * Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeLeft(2)), [1, 2])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeLeft(4)), input)
 * assert.strictEqual(pipe(input, RA.takeLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */


exports.init = init;

var takeLeft = function takeLeft(n) {
  return function (as) {
    return isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(0, n);
  };
};
/**
 * Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeRight(2)), [2, 3])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeRight(4)), input)
 * assert.strictEqual(pipe(input, RA.takeRight(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */


exports.takeLeft = takeLeft;

var takeRight = function takeRight(n) {
  return function (as) {
    return isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(-n);
  };
};
/**
 * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { takeLeftWhile } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(takeLeftWhile((n: number) => n % 2 === 0)([2, 4, 3, 6]), [2, 4])
 *
 * @category combinators
 * @since 2.5.0
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

    var len = out.length;
    return len === as.length ? as : len === 0 ? empty : out;
  };
}
/**
 * @since 2.5.0
 */


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
 * Split an array into two parts:
 * 1. the longest initial subarray for which all elements satisfy the specified predicate
 * 2. the remaining elements
 *
 * @example
 * import { spanLeft } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(spanLeft((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), { init: [1, 3], rest: [2, 4, 5] })
 *
 * @since 2.5.0
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
 * Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropLeft(2)), [3])
 * assert.strictEqual(pipe(input, RA.dropLeft(0)), input)
 * assert.strictEqual(pipe(input, RA.dropLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */


var dropLeft = function dropLeft(n) {
  return function (as) {
    return n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(n, as.length);
  };
};
/**
 * Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropRight(2)), [1])
 * assert.strictEqual(pipe(input, RA.dropRight(0)), input)
 * assert.strictEqual(pipe(input, RA.dropRight(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */


exports.dropLeft = dropLeft;

var dropRight = function dropRight(n) {
  return function (as) {
    return n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(0, as.length - n);
  };
};
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.dropRight = dropRight;

function dropLeftWhile(predicate) {
  return function (as) {
    var i = spanLeftIndex(as, predicate);
    return i === 0 ? as : i === as.length ? empty : as.slice(i);
  };
}
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.5.0
 */


var findIndex = function findIndex(predicate) {
  return function (as) {
    for (var _i4 = 0; _i4 < as.length; _i4++) {
      if (predicate(as[_i4])) {
        return _.some(_i4);
      }
    }

    return _.none;
  };
};
/**
 * Find the first element which satisfies a predicate (or a refinement) function
 *
 * @example
 * import { findFirst } from 'fp-ts/ReadonlyArray'
 * import { some } from 'fp-ts/Option'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(findFirst((x: X) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), some({ a: 1, b: 1 }))
 *
 * @since 2.5.0
 */


exports.findIndex = findIndex;

function findFirst(predicate) {
  return function (as) {
    for (var _i5 = 0; _i5 < as.length; _i5++) {
      if (predicate(as[_i5])) {
        return _.some(as[_i5]);
      }
    }

    return _.none;
  };
}
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @since 2.5.0
 */


var findFirstMap = function findFirstMap(f) {
  return function (as) {
    for (var _i6 = 0; _i6 < as.length; _i6++) {
      var out = f(as[_i6]);

      if (_.isSome(out)) {
        return out;
      }
    }

    return _.none;
  };
};
/**
 * Find the last element which satisfies a predicate function
 *
 * @example
 * import { findLast } from 'fp-ts/ReadonlyArray'
 * import { some } from 'fp-ts/Option'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(findLast((x: X) => x.a === 1)([{ a: 1, b: 1 }, { a: 1, b: 2 }]), some({ a: 1, b: 2 }))
 *
 * @since 2.5.0
 */


exports.findFirstMap = findFirstMap;

function findLast(predicate) {
  return function (as) {
    for (var _i7 = as.length - 1; _i7 >= 0; _i7--) {
      if (predicate(as[_i7])) {
        return _.some(as[_i7]);
      }
    }

    return _.none;
  };
}
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @since 2.5.0
 */


var findLastMap = function findLastMap(f) {
  return function (as) {
    for (var _i8 = as.length - 1; _i8 >= 0; _i8--) {
      var out = f(as[_i8]);

      if (_.isSome(out)) {
        return out;
      }
    }

    return _.none;
  };
};
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: ReadonlyArray<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.5.0
 */


exports.findLastMap = findLastMap;

var findLastIndex = function findLastIndex(predicate) {
  return function (as) {
    for (var _i9 = as.length - 1; _i9 >= 0; _i9--) {
      if (predicate(as[_i9])) {
        return _.some(_i9);
      }
    }

    return _.none;
  };
};
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/ReadonlyArray'
 * import { some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.5.0
 */


exports.findLastIndex = findLastIndex;

var insertAt = function insertAt(i, a) {
  return function (as) {
    return i < 0 || i > as.length ? _.none : _.some(RNEA.unsafeInsertAt(i, a, as));
  };
};
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.5.0
 */


exports.insertAt = insertAt;

var updateAt = function updateAt(i, a) {
  return modifyAt(i, function () {
    return a;
  });
};
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.5.0
 */


exports.updateAt = updateAt;

var deleteAt = function deleteAt(i) {
  return function (as) {
    return isOutOfBound(i, as) ? _.none : _.some(unsafeDeleteAt(i, as));
  };
};
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.5.0
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
 * import { reverse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.modifyAt = modifyAt;

var reverse = function reverse(as) {
  return as.length <= 1 ? as : as.slice().reverse();
};
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/ReadonlyArray'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.reverse = reverse;

var rights = function rights(as) {
  var r = [];

  for (var _i10 = 0; _i10 < as.length; _i10++) {
    var _a2 = as[_i10];

    if (_a2._tag === 'Right') {
      r.push(_a2.right);
    }
  }

  return r;
};
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/ReadonlyArray'
 * import { left, right } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.rights = rights;

var lefts = function lefts(as) {
  var r = [];

  for (var _i11 = 0; _i11 < as.length; _i11++) {
    var _a3 = as[_i11];

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
 * import { sort } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.lefts = lefts;

var sort = function sort(O) {
  return function (as) {
    return as.length <= 1 ? as : as.slice().sort(O.compare);
  };
}; // TODO: curry and make data-last in v3

/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.sort = sort;

var zipWith = function zipWith(fa, fb, f) {
  var fc = [];
  var len = Math.min(fa.length, fb.length);

  for (var _i12 = 0; _i12 < len; _i12++) {
    fc[_i12] = f(fa[_i12], fb[_i12]);
  }

  return fc;
}; // TODO: remove non-curried overloading in v3

/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @example
 * import { zip } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], zip(['a', 'b', 'c', 'd'])), [[1, 'a'], [2, 'b'], [3, 'c']])
 *
 * @category combinators
 * @since 2.5.0
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
 * import { unzip } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @category combinators
 * @since 2.5.0
 */


var unzip = function unzip(as) {
  var fa = [];
  var fb = [];

  for (var _i13 = 0; _i13 < as.length; _i13++) {
    fa[_i13] = as[_i13][0];
    fb[_i13] = as[_i13][1];
  }

  return [fa, fb];
};
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */


exports.unzip = unzip;

var prependAll = function prependAll(middle) {
  var f = RNEA.prependAll(middle);
  return function (as) {
    return isNonEmpty(as) ? f(as) : as;
  };
};
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */


exports.prependAll = prependAll;

var intersperse = function intersperse(middle) {
  var f = RNEA.intersperse(middle);
  return function (as) {
    return isNonEmpty(as) ? f(as) : as;
  };
};
/**
 * Rotate a `ReadonlyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.intersperse = intersperse;

var rotate = function rotate(n) {
  var f = RNEA.rotate(n);
  return function (as) {
    return isNonEmpty(as) ? f(as) : as;
  };
}; // TODO: remove non-curried overloading in v3

/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `ReadonlyArray<A>`.
 *
 * @example
 * import { elem } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)
 *
 * @since 2.5.0
 */


exports.rotate = rotate;

function elem(E) {
  return function (a, as) {
    if (as === undefined) {
      var elemE = elem(E);
      return function (as) {
        return elemE(a, as);
      };
    }

    var predicate = function predicate(element) {
      return E.equals(element, a);
    };

    var i = 0;

    for (; i < as.length; i++) {
      if (predicate(as[i])) {
        return true;
      }
    }

    return false;
  };
}
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */


var uniq = function uniq(E) {
  var f = RNEA.uniq(E);
  return function (as) {
    return isNonEmpty(as) ? f(as) : as;
  };
};
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/ReadonlyArray'
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
 * @since 2.5.0
 */


exports.uniq = uniq;

var sortBy = function sortBy(ords) {
  var f = RNEA.sortBy(ords);
  return function (as) {
    return isNonEmpty(as) ? f(as) : as;
  };
};
/**
 * A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for "chopping" up the input
 * `ReadonlyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyArray` and produce a
 * value and the tail of the `ReadonlyArray`.
 *
 * @example
 * import { Eq } from 'fp-ts/Eq'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
 *   return RA.chop(as => {
 *     const { init, rest } = pipe(as, RA.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.sortBy = sortBy;

var chop = function chop(f) {
  var g = RNEA.chop(f);
  return function (as) {
    return isNonEmpty(as) ? g(as) : empty;
  };
};
/**
 * Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.chop = chop;

var splitAt = function splitAt(n) {
  return function (as) {
    return n >= 1 && isNonEmpty(as) ? RNEA.splitAt(n)(as) : isEmpty(as) ? [as, empty] : [empty, as];
  };
};
/**
 * Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that:
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `as`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 * @category combinators
 * @since 2.5.0
 */


exports.splitAt = splitAt;

var chunksOf = function chunksOf(n) {
  var f = RNEA.chunksOf(n);
  return function (as) {
    return isNonEmpty(as) ? f(as) : empty;
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
 * `ReadonlyArray` comprehension.
 *
 * ```
 * [ f(x, y, ...) | x ← xs, y ← ys, ..., g(x, y, ...) ]
 * ```
 *
 * @example
 * import { comprehension } from 'fp-ts/ReadonlyArray'
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
 * @since 2.5.0
 */


exports.fromOptionK = fromOptionK;

function comprehension(input, f) {
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return true;
  };

  var go = function go(scope, input) {
    return isNonEmpty(input) ? (0, _function.pipe)(RNEA.head(input), chain(function (x) {
      return go((0, _function.pipe)(scope, append(x)), RNEA.tail(input));
    })) : g.apply(void 0, _toConsumableArray(scope)) ? [f.apply(void 0, _toConsumableArray(scope))] : empty;
  };

  return go(empty, input);
}
/**
 * @category combinators
 * @since 2.11.0
 */


var concatW = function concatW(second) {
  return function (first) {
    return isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second);
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
 * import { union } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], union(N.Eq)([2, 3])), [1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */

exports.concat = concat;

function union(E) {
  var unionE = RNEA.union(E);
  return function (first, second) {
    if (second === undefined) {
      var _unionE = union(E);

      return function (second) {
        return _unionE(second, first);
      };
    }

    return isNonEmpty(first) && isNonEmpty(second) ? unionE(second)(first) : isNonEmpty(first) ? first : second;
  };
} // TODO: remove non-curried overloading in v3

/**
 * Creates an array of unique values that are included in all given arrays using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { intersection } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], intersection(N.Eq)([2, 3])), [2])
 *
 * @category combinators
 * @since 2.5.0
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
 * import { difference } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], difference(N.Eq)([2, 3])), [1])
 *
 * @category combinators
 * @since 2.5.0
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

var _mapWithIndex = function _mapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, mapWithIndex(f));
};

var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};

var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
};

var _filter = function _filter(fa, predicate) {
  return (0, _function.pipe)(fa, filter(predicate));
};

var _filterMap = function _filterMap(fa, f) {
  return (0, _function.pipe)(fa, filterMap(f));
};

var _partition = function _partition(fa, predicate) {
  return (0, _function.pipe)(fa, partition(predicate));
};

var _partitionMap = function _partitionMap(fa, f) {
  return (0, _function.pipe)(fa, partitionMap(f));
};

var _partitionWithIndex = function _partitionWithIndex(fa, predicateWithIndex) {
  return (0, _function.pipe)(fa, partitionWithIndex(predicateWithIndex));
};

var _partitionMapWithIndex = function _partitionMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, partitionMapWithIndex(f));
};

var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
};

var _reduce = function _reduce(fa, b, f) {
  return (0, _function.pipe)(fa, reduce(b, f));
};

var _foldMap = function _foldMap(M) {
  var foldMapM = foldMap(M);
  return function (fa, f) {
    return (0, _function.pipe)(fa, foldMapM(f));
  };
};

var _reduceRight = function _reduceRight(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRight(b, f));
};

var _reduceWithIndex = function _reduceWithIndex(fa, b, f) {
  return (0, _function.pipe)(fa, reduceWithIndex(b, f));
};

var _foldMapWithIndex = function _foldMapWithIndex(M) {
  var foldMapWithIndexM = foldMapWithIndex(M);
  return function (fa, f) {
    return (0, _function.pipe)(fa, foldMapWithIndexM(f));
  };
};

var _reduceRightWithIndex = function _reduceRightWithIndex(fa, b, f) {
  return (0, _function.pipe)(fa, reduceRightWithIndex(b, f));
};

var _filterMapWithIndex = function _filterMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, filterMapWithIndex(f));
};

var _filterWithIndex = function _filterWithIndex(fa, predicateWithIndex) {
  return (0, _function.pipe)(fa, filterWithIndex(predicateWithIndex));
};

var _extend = function _extend(fa, f) {
  return (0, _function.pipe)(fa, extend(f));
};

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
/** @internal */


var _chainRecDepthFirst = function _chainRecDepthFirst(a, f) {
  return (0, _function.pipe)(a, chainRecDepthFirst(f));
};
/** @internal */


exports._chainRecDepthFirst = _chainRecDepthFirst;

var _chainRecBreadthFirst = function _chainRecBreadthFirst(a, f) {
  return (0, _function.pipe)(a, chainRecBreadthFirst(f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * @category Pointed
 * @since 2.5.0
 */


exports._chainRecBreadthFirst = _chainRecBreadthFirst;
var of = RNEA.of;
/**
 * @category Zero
 * @since 2.7.0
 */

exports.of = of;

var zero = function zero() {
  return empty;
};
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */


exports.zero = zero;

var altW = function altW(that) {
  return function (fa) {
    return fa.concat(that());
  };
};
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.5.0
 */


exports.altW = altW;
var alt = altW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.5.0
 */

exports.alt = alt;

var ap = function ap(fa) {
  return chain(function (f) {
    return (0, _function.pipe)(fa, map(f));
  });
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
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
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */


exports.chain = chain;
var flatten = /*#__PURE__*/chain(_function.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */

exports.flatten = flatten;

var map = function map(f) {
  return function (fa) {
    return fa.map(function (a) {
      return f(a);
    });
  };
};
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */


exports.map = map;

var mapWithIndex = function mapWithIndex(f) {
  return function (fa) {
    return fa.map(function (a, i) {
      return f(i, a);
    });
  };
};
/**
 * @category Compactable
 * @since 2.5.0
 */


exports.mapWithIndex = mapWithIndex;

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
 * @category Filterable
 * @since 2.5.0
 */


exports.separate = separate;

var filter = function filter(predicate) {
  return function (as) {
    return as.filter(predicate);
  };
};
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */


exports.filter = filter;

var filterMapWithIndex = function filterMapWithIndex(f) {
  return function (fa) {
    var out = [];

    for (var _i14 = 0; _i14 < fa.length; _i14++) {
      var optionB = f(_i14, fa[_i14]);

      if (_.isSome(optionB)) {
        out.push(optionB.value);
      }
    }

    return out;
  };
};
/**
 * @category Filterable
 * @since 2.5.0
 */


exports.filterMapWithIndex = filterMapWithIndex;

var filterMap = function filterMap(f) {
  return filterMapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @category Compactable
 * @since 2.5.0
 */


exports.filterMap = filterMap;
var compact = /*#__PURE__*/filterMap(_function.identity);
/**
 * @category Filterable
 * @since 2.5.0
 */

exports.compact = compact;

var partition = function partition(predicate) {
  return partitionWithIndex(function (_, a) {
    return predicate(a);
  });
};
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */


exports.partition = partition;

var partitionWithIndex = function partitionWithIndex(predicateWithIndex) {
  return function (as) {
    var left = [];
    var right = [];

    for (var _i15 = 0; _i15 < as.length; _i15++) {
      var _a4 = as[_i15];

      if (predicateWithIndex(_i15, _a4)) {
        right.push(_a4);
      } else {
        left.push(_a4);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
};
/**
 * @category Filterable
 * @since 2.5.0
 */


exports.partitionWithIndex = partitionWithIndex;

var partitionMap = function partitionMap(f) {
  return partitionMapWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */


exports.partitionMap = partitionMap;

var partitionMapWithIndex = function partitionMapWithIndex(f) {
  return function (fa) {
    var left = [];
    var right = [];

    for (var _i16 = 0; _i16 < fa.length; _i16++) {
      var e = f(_i16, fa[_i16]);

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
 * @category FilterableWithIndex
 * @since 2.5.0
 */


exports.partitionMapWithIndex = partitionMapWithIndex;

var filterWithIndex = function filterWithIndex(predicateWithIndex) {
  return function (as) {
    return as.filter(function (a, i) {
      return predicateWithIndex(i, a);
    });
  };
};
/**
 * @category Extend
 * @since 2.5.0
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
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */


exports.extend = extend;
var duplicate = /*#__PURE__*/extend(_function.identity);
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */

exports.duplicate = duplicate;

var foldMapWithIndex = function foldMapWithIndex(M) {
  return function (f) {
    return function (fa) {
      return fa.reduce(function (b, a, i) {
        return M.concat(b, f(i, a));
      }, M.empty);
    };
  };
};
/**
 * @category Foldable
 * @since 2.5.0
 */


exports.foldMapWithIndex = foldMapWithIndex;

var reduce = function reduce(b, f) {
  return reduceWithIndex(b, function (_, b, a) {
    return f(b, a);
  });
};
/**
 * @category Foldable
 * @since 2.5.0
 */


exports.reduce = reduce;

var foldMap = function foldMap(M) {
  var foldMapWithIndexM = foldMapWithIndex(M);
  return function (f) {
    return foldMapWithIndexM(function (_, a) {
      return f(a);
    });
  };
};
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */


exports.foldMap = foldMap;

var reduceWithIndex = function reduceWithIndex(b, f) {
  return function (fa) {
    var len = fa.length;
    var out = b;

    for (var _i17 = 0; _i17 < len; _i17++) {
      out = f(_i17, out, fa[_i17]);
    }

    return out;
  };
};
/**
 * @category Foldable
 * @since 2.5.0
 */


exports.reduceWithIndex = reduceWithIndex;

var reduceRight = function reduceRight(b, f) {
  return reduceRightWithIndex(b, function (_, a, b) {
    return f(a, b);
  });
};
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */


exports.reduceRight = reduceRight;

var reduceRightWithIndex = function reduceRightWithIndex(b, f) {
  return function (fa) {
    return fa.reduceRight(function (b, a, i) {
      return f(i, a, b);
    }, b);
  };
};
/**
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
          _a5 = _mt$value[0],
          _b = _mt$value[1];

      out.push(_a5);
      bb = _b;
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
 * @since 2.5.0
 */


exports.unfold = unfold;
var URI = 'ReadonlyArray';
/**
 * @category instances
 * @since 2.5.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.5.0
 */
var getShow = function getShow(S) {
  return {
    show: function show(as) {
      return "[".concat(as.map(S.show).join(', '), "]");
    }
  };
};
/**
 * @category instances
 * @since 2.5.0
 */


exports.getShow = getShow;

var getSemigroup = function getSemigroup() {
  return {
    concat: function concat(first, second) {
      return isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second);
    }
  };
};
/**
 * Returns a `Monoid` for `ReadonlyArray<A>`.
 *
 * @example
 * import { getMonoid } from 'fp-ts/ReadonlyArray'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @category instances
 * @since 2.5.0
 */


exports.getSemigroup = getSemigroup;

var getMonoid = function getMonoid() {
  return {
    concat: getSemigroup().concat,
    empty: empty
  };
};
/**
 * Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { getEq } from 'fp-ts/ReadonlyArray'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @category instances
 * @since 2.5.0
 */


exports.getMonoid = getMonoid;

var getEq = function getEq(E) {
  return (0, _Eq.fromEquals)(function (xs, ys) {
    return xs.length === ys.length && xs.every(function (x, i) {
      return E.equals(x, ys[i]);
    });
  });
};
/**
 * Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/ReadonlyArray'
 * import * as S from 'fp-ts/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 * @category instances
 * @since 2.5.0
 */


exports.getEq = getEq;

var getOrd = function getOrd(O) {
  return (0, _Ord.fromCompare)(function (a, b) {
    var aLen = a.length;
    var bLen = b.length;
    var len = Math.min(aLen, bLen);

    for (var _i18 = 0; _i18 < len; _i18++) {
      var ordering = O.compare(a[_i18], b[_i18]);

      if (ordering !== 0) {
        return ordering;
      }
    }

    return N.Ord.compare(aLen, bLen);
  });
};
/**
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
 * @category instances
 * @since 2.11.0
 */


exports.getUnionSemigroup = getUnionSemigroup;

var getUnionMonoid = function getUnionMonoid(E) {
  return {
    concat: getUnionSemigroup(E).concat,
    empty: empty
  };
};
/**
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
 * Derivable from `Functor`.
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
 * @category instances
 * @since 2.7.0
 */

exports.Chain = Chain;
var Monad = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */

exports.Monad = Monad;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.7.0
 */

exports.chainFirst = chainFirst;
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
/**
 * @category ChainRec
 * @since 2.11.0
 */

exports.TraversableWithIndex = TraversableWithIndex;

var chainRecDepthFirst = function chainRecDepthFirst(f) {
  return function (a) {
    var todo = _toConsumableArray(f(a));

    var out = [];

    while (todo.length > 0) {
      var e = todo.shift();

      if (_.isLeft(e)) {
        todo.unshift.apply(todo, _toConsumableArray(f(e.left)));
      } else {
        out.push(e.right);
      }
    }

    return out;
  };
};
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

var chainRecBreadthFirst = function chainRecBreadthFirst(f) {
  return function (a) {
    var initial = f(a);
    var todo = [];
    var out = [];

    function go(e) {
      if (_.isLeft(e)) {
        f(e.left).forEach(function (v) {
          return todo.push(v);
        });
      } else {
        out.push(e.right);
      }
    }

    var _iterator3 = _createForOfIteratorHelper(initial),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var e = _step3.value;
        go(e);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    while (todo.length > 0) {
      go(todo.shift());
    }

    return out;
  };
};
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
exports.ChainRecBreadthFirst = ChainRecBreadthFirst;

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
 * Filter values inside a context.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as T from 'fp-ts/Task'
 *
 * const filterE = RA.filterE(T.ApplicativePar)
 * async function test() {
 *   assert.deepStrictEqual(
 *     await pipe(
 *       [-1, 2, 3],
 *       filterE((n) => T.of(n > 0))
 *     )(),
 *     [2, 3]
 *   )
 * }
 * test()
 *
 * @since 2.11.0
 */

exports.Witherable = Witherable;
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
 * @since 2.5.0
 */

exports.fromEitherK = fromEitherK;
var unsafeInsertAt = RNEA.unsafeInsertAt;
/**
 * @category unsafe
 * @since 2.5.0
 */

exports.unsafeInsertAt = unsafeInsertAt;

var unsafeUpdateAt = function unsafeUpdateAt(i, a, as) {
  return isNonEmpty(as) ? RNEA.unsafeUpdateAt(i, a, as) : as;
};
/**
 * @category unsafe
 * @since 2.5.0
 */


exports.unsafeUpdateAt = unsafeUpdateAt;

var unsafeDeleteAt = function unsafeDeleteAt(i, as) {
  var xs = as.slice();
  xs.splice(i, 1);
  return xs;
}; // -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * @category interop
 * @since 2.5.0
 */


exports.unsafeDeleteAt = unsafeDeleteAt;

var toArray = function toArray(as) {
  return as.slice();
};
/**
 * @category interop
 * @since 2.5.0
 */


exports.toArray = toArray;

var fromArray = function fromArray(as) {
  return isEmpty(as) ? empty : as.slice();
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * An empty array
 *
 * @since 2.5.0
 */


exports.fromArray = fromArray;
var empty = RNEA.empty;
/**
 * Check if a predicate holds true for every array member.
 *
 * @example
 * import { every } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], every(isPositive)), true)
 * assert.deepStrictEqual(pipe([1, 2, -3], every(isPositive)), false)
 *
 * @since 2.9.0
 */

exports.empty = empty;

var every = function every(predicate) {
  return function (as) {
    return as.every(predicate);
  };
};
/**
 * Check if a predicate holds true for any array member.
 *
 * @example
 * import { some } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([-1, -2, 3], some(isPositive)), true)
 * assert.deepStrictEqual(pipe([-1, -2, -3], some(isPositive)), false)
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
 * Use `ReadonlyNonEmptyArray` module instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */

exports.apS = apS;
var range = RNEA.range;
/**
 * Use [`prepend`](#prepend) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */

exports.range = range;
var cons = RNEA.cons;
/**
 * Use [`append`](#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */

exports.cons = cons;
var snoc = RNEA.snoc;
/**
 * Use [`prependAll`](#prependall) instead.
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
 * @since 2.5.0
 * @deprecated
 */

exports.prependToAll = prependToAll;
var readonlyArray = {
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
exports.readonlyArray = readonlyArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkb25seUFycmF5LnRzIl0sIm5hbWVzIjpbIlJlYWRvbmx5Tm9uRW1wdHlBcnJheSIsIlJORUEiLCJpc0VtcHR5IiwiYXMiLCJsZW5ndGgiLCJpc05vbkVtcHR5IiwicHJlcGVuZCIsInByZXBlbmRXIiwiYXBwZW5kIiwiYXBwZW5kVyIsIm1ha2VCeSIsIm4iLCJmIiwiZW1wdHkiLCJyZXBsaWNhdGUiLCJhIiwiZnJvbVByZWRpY2F0ZSIsInByZWRpY2F0ZSIsImZyb21PcHRpb24iLCJtYSIsIl8iLCJpc05vbmUiLCJ2YWx1ZSIsImZyb21FaXRoZXIiLCJlIiwiaXNMZWZ0IiwicmlnaHQiLCJtYXRjaFciLCJvbkVtcHR5Iiwib25Ob25FbXB0eSIsIm1hdGNoIiwibWF0Y2hMZWZ0VyIsImhlYWQiLCJ0YWlsIiwibWF0Y2hMZWZ0IiwiZm9sZExlZnQiLCJtYXRjaFJpZ2h0VyIsImluaXQiLCJsYXN0IiwibWF0Y2hSaWdodCIsImZvbGRSaWdodCIsImNoYWluV2l0aEluZGV4Iiwib3V0IiwiaSIsInB1c2giLCJzY2FuTGVmdCIsImIiLCJsZW4iLCJBcnJheSIsInNjYW5SaWdodCIsInNpemUiLCJpc091dE9mQm91bmQiLCJsb29rdXAiLCJ1bmRlZmluZWQiLCJub25lIiwic29tZSIsInRha2VMZWZ0Iiwic2xpY2UiLCJ0YWtlUmlnaHQiLCJ0YWtlTGVmdFdoaWxlIiwic3BhbkxlZnRJbmRleCIsImwiLCJzcGFuTGVmdCIsInNwbGl0QXQiLCJyZXN0IiwiZHJvcExlZnQiLCJkcm9wUmlnaHQiLCJkcm9wTGVmdFdoaWxlIiwiZmluZEluZGV4IiwiZmluZEZpcnN0IiwiZmluZEZpcnN0TWFwIiwiaXNTb21lIiwiZmluZExhc3QiLCJmaW5kTGFzdE1hcCIsImZpbmRMYXN0SW5kZXgiLCJpbnNlcnRBdCIsInVuc2FmZUluc2VydEF0IiwidXBkYXRlQXQiLCJtb2RpZnlBdCIsImRlbGV0ZUF0IiwidW5zYWZlRGVsZXRlQXQiLCJ1bnNhZmVVcGRhdGVBdCIsInJldmVyc2UiLCJyaWdodHMiLCJyIiwiX3RhZyIsImxlZnRzIiwibGVmdCIsInNvcnQiLCJPIiwiY29tcGFyZSIsInppcFdpdGgiLCJmYSIsImZiIiwiZmMiLCJNYXRoIiwibWluIiwiemlwIiwiYnMiLCJ1bnppcCIsInByZXBlbmRBbGwiLCJtaWRkbGUiLCJpbnRlcnNwZXJzZSIsInJvdGF0ZSIsImVsZW0iLCJFIiwiZWxlbUUiLCJlbGVtZW50IiwiZXF1YWxzIiwidW5pcSIsInNvcnRCeSIsIm9yZHMiLCJjaG9wIiwiZyIsImNodW5rc09mIiwiZnJvbU9wdGlvbksiLCJjb21wcmVoZW5zaW9uIiwiaW5wdXQiLCJnbyIsInNjb3BlIiwiY2hhaW4iLCJ4IiwiY29uY2F0VyIsInNlY29uZCIsImZpcnN0IiwiY29uY2F0IiwidW5pb24iLCJ1bmlvbkUiLCJpbnRlcnNlY3Rpb24iLCJ4cyIsInlzIiwiaW50ZXJzZWN0aW9uRSIsImZpbHRlciIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbmNlRSIsIl9tYXAiLCJtYXAiLCJfbWFwV2l0aEluZGV4IiwibWFwV2l0aEluZGV4IiwiX2FwIiwiZmFiIiwiYXAiLCJfY2hhaW4iLCJfZmlsdGVyIiwiX2ZpbHRlck1hcCIsImZpbHRlck1hcCIsIl9wYXJ0aXRpb24iLCJwYXJ0aXRpb24iLCJfcGFydGl0aW9uTWFwIiwicGFydGl0aW9uTWFwIiwiX3BhcnRpdGlvbldpdGhJbmRleCIsInByZWRpY2F0ZVdpdGhJbmRleCIsInBhcnRpdGlvbldpdGhJbmRleCIsIl9wYXJ0aXRpb25NYXBXaXRoSW5kZXgiLCJwYXJ0aXRpb25NYXBXaXRoSW5kZXgiLCJfYWx0IiwidGhhdCIsImFsdCIsIl9yZWR1Y2UiLCJyZWR1Y2UiLCJfZm9sZE1hcCIsIk0iLCJmb2xkTWFwTSIsImZvbGRNYXAiLCJfcmVkdWNlUmlnaHQiLCJyZWR1Y2VSaWdodCIsIl9yZWR1Y2VXaXRoSW5kZXgiLCJyZWR1Y2VXaXRoSW5kZXgiLCJfZm9sZE1hcFdpdGhJbmRleCIsImZvbGRNYXBXaXRoSW5kZXhNIiwiZm9sZE1hcFdpdGhJbmRleCIsIl9yZWR1Y2VSaWdodFdpdGhJbmRleCIsInJlZHVjZVJpZ2h0V2l0aEluZGV4IiwiX2ZpbHRlck1hcFdpdGhJbmRleCIsImZpbHRlck1hcFdpdGhJbmRleCIsIl9maWx0ZXJXaXRoSW5kZXgiLCJmaWx0ZXJXaXRoSW5kZXgiLCJfZXh0ZW5kIiwiZXh0ZW5kIiwiX3RyYXZlcnNlIiwiRiIsInRyYXZlcnNlRiIsInRyYXZlcnNlIiwidGEiLCJfdHJhdmVyc2VXaXRoSW5kZXgiLCJ0cmF2ZXJzZVdpdGhJbmRleEYiLCJ0cmF2ZXJzZVdpdGhJbmRleCIsIl9jaGFpblJlY0RlcHRoRmlyc3QiLCJjaGFpblJlY0RlcHRoRmlyc3QiLCJfY2hhaW5SZWNCcmVhZHRoRmlyc3QiLCJjaGFpblJlY0JyZWFkdGhGaXJzdCIsIm9mIiwiemVybyIsImFsdFciLCJmbGF0dGVuIiwiaWRlbnRpdHkiLCJzZXBhcmF0ZSIsIm9wdGlvbkIiLCJjb21wYWN0Iiwid2EiLCJkdXBsaWNhdGUiLCJzZXF1ZW5jZSIsImZhcyIsImZicyIsIndpdGhlciIsIl93aXRoZXJGIiwiX3dpdGhlciIsIndpbHQiLCJfd2lsdEYiLCJfd2lsdCIsInVuZm9sZCIsImJiIiwibXQiLCJVUkkiLCJnZXRTaG93IiwiUyIsInNob3ciLCJqb2luIiwiZ2V0U2VtaWdyb3VwIiwiZ2V0TW9ub2lkIiwiZ2V0RXEiLCJldmVyeSIsImdldE9yZCIsImFMZW4iLCJiTGVuIiwib3JkZXJpbmciLCJOIiwiT3JkIiwiZ2V0VW5pb25TZW1pZ3JvdXAiLCJnZXRVbmlvbk1vbm9pZCIsImdldEludGVyc2VjdGlvblNlbWlncm91cCIsImdldERpZmZlcmVuY2VNYWdtYSIsIkZ1bmN0b3IiLCJmbGFwIiwiUG9pbnRlZCIsIkZ1bmN0b3JXaXRoSW5kZXgiLCJBcHBseSIsImFwRmlyc3QiLCJhcFNlY29uZCIsIkFwcGxpY2F0aXZlIiwiQ2hhaW4iLCJNb25hZCIsImNoYWluRmlyc3QiLCJVbmZvbGRhYmxlIiwiQWx0IiwiWmVybyIsImd1YXJkIiwiQWx0ZXJuYXRpdmUiLCJFeHRlbmQiLCJDb21wYWN0YWJsZSIsIkZpbHRlcmFibGUiLCJGaWx0ZXJhYmxlV2l0aEluZGV4IiwiRm9sZGFibGUiLCJGb2xkYWJsZVdpdGhJbmRleCIsIlRyYXZlcnNhYmxlIiwiVHJhdmVyc2FibGVXaXRoSW5kZXgiLCJ0b2RvIiwic2hpZnQiLCJ1bnNoaWZ0IiwiQ2hhaW5SZWNEZXB0aEZpcnN0IiwiY2hhaW5SZWMiLCJpbml0aWFsIiwiZm9yRWFjaCIsInYiLCJDaGFpblJlY0JyZWFkdGhGaXJzdCIsIldpdGhlcmFibGUiLCJmaWx0ZXJFIiwiRnJvbUVpdGhlciIsImZyb21FaXRoZXJLIiwic3BsaWNlIiwidG9BcnJheSIsImZyb21BcnJheSIsImV4aXN0cyIsIkRvIiwiZW1wdHlSZWNvcmQiLCJiaW5kVG8iLCJiaW5kIiwiYXBTIiwicmFuZ2UiLCJjb25zIiwic25vYyIsInByZXBlbmRUb0FsbCIsInJlYWRvbmx5QXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUlBOztBQU1BOztBQUNBOztBQUNBOztBQUdBOztBQU1BOztBQUVBOztBQUdBOztBQUdBOztBQUtBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU9BLHFCLEdBQXdCQyxJLENBQUtELHFCLEVBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUlDLEVBQUo7QUFBQSxTQUFnREEsRUFBRSxDQUFDQyxNQUFILEtBQWMsQ0FBOUQ7QUFBQSxDQUFoQjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1DLFVBQXVFLEdBQUdKLElBQUksQ0FBQ0ksVUFBckYsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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RyxFQUFBQSxZQUFZLEVBQUVELGFBWEs7QUFZbkJWLEVBQUFBLFlBQVksRUFBRUQsYUFaSztBQWFuQmlCLEVBQUFBLHFCQUFxQixFQUFFRCxzQkFiSjtBQWNuQkQsRUFBQUEsa0JBQWtCLEVBQUVGLG1CQWREO0FBZW5Cd0IsRUFBQUEsa0JBQWtCLEVBQUVELG1CQWZEO0FBZ0JuQkcsRUFBQUEsZUFBZSxFQUFFRCxnQkFoQkU7QUFpQm5CbEIsRUFBQUEsR0FBRyxFQUFFRixJQWpCYztBQWtCbkJxQyxFQUFBQSxJQUFJLEVBQUpBLElBbEJtQjtBQW1CbkJrQixFQUFBQSxNQUFNLEVBQU5BLE1BbkJtQjtBQW9CbkJuRCxFQUFBQSxNQUFNLEVBQUVELE9BcEJXO0FBcUJuQkssRUFBQUEsT0FBTyxFQUFFSCxRQXJCVTtBQXNCbkJLLEVBQUFBLFdBQVcsRUFBRUQsWUF0Qk07QUF1Qm5Ca0IsRUFBQUEsUUFBUSxFQUFFSCxTQXZCUztBQXdCbkJzQixFQUFBQSxRQUFRLEVBQVJBLFFBeEJtQjtBQXlCbkJsQyxFQUFBQSxlQUFlLEVBQUVELGdCQXpCRTtBQTBCbkJJLEVBQUFBLGdCQUFnQixFQUFFRixpQkExQkM7QUEyQm5CSSxFQUFBQSxvQkFBb0IsRUFBRUQscUJBM0JIO0FBNEJuQmUsRUFBQUEsaUJBQWlCLEVBQUVGLGtCQTVCQTtBQTZCbkJOLEVBQUFBLE1BQU0sRUFBRUQsT0E3Qlc7QUE4Qm5CMkIsRUFBQUEsTUFBTSxFQUFFRSxPQTlCVztBQStCbkJDLEVBQUFBLElBQUksRUFBRUU7QUEvQmEsQ0FSZCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmltcG9ydCB7IEFsdDEgfSBmcm9tICcuL0FsdCdcbmltcG9ydCB7IEFsdGVybmF0aXZlMSB9IGZyb20gJy4vQWx0ZXJuYXRpdmUnXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZSBhcyBBcHBsaWNhdGl2ZUhLVCwgQXBwbGljYXRpdmUxIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IGFwRmlyc3QgYXMgYXBGaXJzdF8sIEFwcGx5MSwgYXBTIGFzIGFwU18sIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjEsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgQ2hhaW5SZWMxIH0gZnJvbSAnLi9DaGFpblJlYydcbmltcG9ydCB7IENvbXBhY3RhYmxlMSB9IGZyb20gJy4vQ29tcGFjdGFibGUnXG5pbXBvcnQgeyBFaXRoZXIgfSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IEVxLCBmcm9tRXF1YWxzIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEV4dGVuZDEgfSBmcm9tICcuL0V4dGVuZCdcbmltcG9ydCB7IEZpbHRlcmFibGUxIH0gZnJvbSAnLi9GaWx0ZXJhYmxlJ1xuaW1wb3J0IHsgRmlsdGVyYWJsZVdpdGhJbmRleDEsIFByZWRpY2F0ZVdpdGhJbmRleCwgUmVmaW5lbWVudFdpdGhJbmRleCB9IGZyb20gJy4vRmlsdGVyYWJsZVdpdGhJbmRleCdcbmltcG9ydCB7IEZvbGRhYmxlMSB9IGZyb20gJy4vRm9sZGFibGUnXG5pbXBvcnQgeyBGb2xkYWJsZVdpdGhJbmRleDEgfSBmcm9tICcuL0ZvbGRhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgRnJvbUVpdGhlcjEsIGZyb21FaXRoZXJLIGFzIGZyb21FaXRoZXJLXyB9IGZyb20gJy4vRnJvbUVpdGhlcidcbmltcG9ydCB7IGlkZW50aXR5LCBMYXp5LCBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEZ1bmN0b3JXaXRoSW5kZXgxIH0gZnJvbSAnLi9GdW5jdG9yV2l0aEluZGV4J1xuaW1wb3J0IHsgSEtUIH0gZnJvbSAnLi9IS1QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNYWdtYSB9IGZyb20gJy4vTWFnbWEnXG5pbXBvcnQgeyBNb25hZDEgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBOYXR1cmFsVHJhbnNmb3JtYXRpb24xMSB9IGZyb20gJy4vTmF0dXJhbFRyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0IHsgTm9uRW1wdHlBcnJheSB9IGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCAqIGFzIE4gZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBPcHRpb24sIFVSSSBhcyBPVVJJIH0gZnJvbSAnLi9PcHRpb24nXG5pbXBvcnQgeyBmcm9tQ29tcGFyZSwgT3JkIH0gZnJvbSAnLi9PcmQnXG5pbXBvcnQgeyBQb2ludGVkMSB9IGZyb20gJy4vUG9pbnRlZCdcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vUHJlZGljYXRlJ1xuaW1wb3J0ICogYXMgUk5FQSBmcm9tICcuL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcbmltcG9ydCB7IFJlZmluZW1lbnQgfSBmcm9tICcuL1JlZmluZW1lbnQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IFNlcGFyYXRlZCwgc2VwYXJhdGVkIH0gZnJvbSAnLi9TZXBhcmF0ZWQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9TaG93J1xuaW1wb3J0IHsgUGlwZWFibGVUcmF2ZXJzZTEsIFRyYXZlcnNhYmxlMSB9IGZyb20gJy4vVHJhdmVyc2FibGUnXG5pbXBvcnQgeyBQaXBlYWJsZVRyYXZlcnNlV2l0aEluZGV4MSwgVHJhdmVyc2FibGVXaXRoSW5kZXgxIH0gZnJvbSAnLi9UcmF2ZXJzYWJsZVdpdGhJbmRleCdcbmltcG9ydCB7IFVuZm9sZGFibGUxIH0gZnJvbSAnLi9VbmZvbGRhYmxlJ1xuaW1wb3J0IHtcbiAgZmlsdGVyRSBhcyBmaWx0ZXJFXyxcbiAgUGlwZWFibGVXaWx0MSxcbiAgUGlwZWFibGVXaXRoZXIxLFxuICB3aWx0RGVmYXVsdCxcbiAgV2l0aGVyYWJsZTEsXG4gIHdpdGhlckRlZmF1bHRcbn0gZnJvbSAnLi9XaXRoZXJhYmxlJ1xuaW1wb3J0IHsgWmVybzEsIGd1YXJkIGFzIGd1YXJkXyB9IGZyb20gJy4vWmVybydcblxuaW1wb3J0IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSA9IFJORUEuUmVhZG9ubHlOb25FbXB0eUFycmF5XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHJlZmluZW1lbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIGEgYFJlYWRvbmx5QXJyYXlgIGlzIGVtcHR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoaXNFbXB0eShbXSksIHRydWUpXG4gKlxuICogQGNhdGVnb3J5IHJlZmluZW1lbnRzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBhcyBpcyByZWFkb25seSBbXSA9PiBhcy5sZW5ndGggPT09IDBcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBgUmVhZG9ubHlBcnJheWAgaXMgbm9uIGVtcHR5LlxuICpcbiAqIEBjYXRlZ29yeSByZWZpbmVtZW50c1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vbkVtcHR5OiA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IGFzIGlzIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9IFJORUEuaXNOb25FbXB0eVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb25zdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBQcmVwZW5kIGFuIGVsZW1lbnQgdG8gdGhlIGZyb250IG9mIGEgYFJlYWRvbmx5QXJyYXlgLCBjcmVhdGluZyBhIG5ldyBgUmVhZG9ubHlOb25FbXB0eUFycmF5YC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcHJlcGVuZCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsyLCAzLCA0XSwgcHJlcGVuZCgxKSksIFsxLCAyLCAzLCA0XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kID0gUk5FQS5wcmVwZW5kXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYHByZXBlbmRgXSgjcHJlcGVuZCkuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgcHJlcGVuZFcgPSBSTkVBLnByZXBlbmRXXG5cbi8qKlxuICogQXBwZW5kIGFuIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiBhIGBSZWFkb25seUFycmF5YCwgY3JlYXRpbmcgYSBuZXcgYFJlYWRvbmx5Tm9uRW1wdHlBcnJheWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGFwcGVuZCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgYXBwZW5kKDQpKSwgWzEsIDIsIDMsIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IFJORUEuYXBwZW5kXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFwcGVuZGBdKCNhcHBlbmQpLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZFcgPSBSTkVBLmFwcGVuZFdcblxuLyoqXG4gKiBSZXR1cm4gYSBgUmVhZG9ubHlBcnJheWAgb2YgbGVuZ3RoIGBuYCB3aXRoIGVsZW1lbnQgYGlgIGluaXRpYWxpemVkIHdpdGggYGYoaSlgLlxuICpcbiAqICoqTm90ZSoqLiBgbmAgaXMgbm9ybWFsaXplZCB0byBhIG5vbiBuZWdhdGl2ZSBpbnRlZ2VyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYWtlQnkgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGNvbnN0IGRvdWJsZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIDJcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobWFrZUJ5KDUsIGRvdWJsZSksIFswLCAyLCA0LCA2LCA4XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VCeSA9IDxBPihuOiBudW1iZXIsIGY6IChpOiBudW1iZXIpID0+IEEpOiBSZWFkb25seUFycmF5PEE+ID0+IChuIDw9IDAgPyBlbXB0eSA6IFJORUEubWFrZUJ5KGYpKG4pKVxuXG4vKipcbiAqIENyZWF0ZSBhIGBSZWFkb25seUFycmF5YCBjb250YWluaW5nIGEgdmFsdWUgcmVwZWF0ZWQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gKlxuICogKipOb3RlKiouIGBuYCBpcyBub3JtYWxpemVkIHRvIGEgbm9uIG5lZ2F0aXZlIGludGVnZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlcGxpY2F0ZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyZXBsaWNhdGUoMywgJ2EnKSwgWydhJywgJ2EnLCAnYSddKVxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcmVwbGljYXRlID0gPEE+KG46IG51bWJlciwgYTogQSk6IFJlYWRvbmx5QXJyYXk8QT4gPT4gbWFrZUJ5KG4sICgpID0+IGEpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVByZWRpY2F0ZTxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChhOiBBKSA9PiBSZWFkb25seUFycmF5PEI+XG5leHBvcnQgZnVuY3Rpb24gZnJvbVByZWRpY2F0ZTxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oYjogQikgPT4gUmVhZG9ubHlBcnJheTxCPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21QcmVkaWNhdGU8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYTogQSkgPT4gUmVhZG9ubHlBcnJheTxBPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21QcmVkaWNhdGU8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYTogQSkgPT4gUmVhZG9ubHlBcnJheTxBPiB7XG4gIHJldHVybiAoYSkgPT4gKHByZWRpY2F0ZShhKSA/IFthXSA6IGVtcHR5KVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbjogTmF0dXJhbFRyYW5zZm9ybWF0aW9uMTE8T1VSSSwgVVJJPiA9IChtYSkgPT4gKF8uaXNOb25lKG1hKSA/IGVtcHR5IDogW21hLnZhbHVlXSlcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGFuIGBFaXRoZXJgIHRvIGEgYFJlYWRvbmx5QXJyYXlgLlxuICpcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUVpdGhlcjogRnJvbUVpdGhlcjE8VVJJPlsnZnJvbUVpdGhlciddID0gKGUpID0+IChfLmlzTGVmdChlKSA/IGVtcHR5IDogW2UucmlnaHRdKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BtYXRjaGBdKCNtYXRjaCkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaFcgPSA8QiwgQSwgQz4ob25FbXB0eTogTGF6eTxCPiwgb25Ob25FbXB0eTogKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IEMpID0+IChcbiAgYXM6IFJlYWRvbmx5QXJyYXk8QT5cbik6IEIgfCBDID0+IChpc05vbkVtcHR5KGFzKSA/IG9uTm9uRW1wdHkoYXMpIDogb25FbXB0eSgpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2g6IDxCLCBBPihcbiAgb25FbXB0eTogTGF6eTxCPixcbiAgb25Ob25FbXB0eTogKGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4pID0+IEJcbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBCID0gbWF0Y2hXXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoTGVmdGBdKCNtYXRjaGxlZnQpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hMZWZ0VyA9IDxCLCBBLCBDPihvbkVtcHR5OiBMYXp5PEI+LCBvbk5vbkVtcHR5OiAoaGVhZDogQSwgdGFpbDogUmVhZG9ubHlBcnJheTxBPikgPT4gQykgPT4gKFxuICBhczogUmVhZG9ubHlBcnJheTxBPlxuKTogQiB8IEMgPT4gKGlzTm9uRW1wdHkoYXMpID8gb25Ob25FbXB0eShSTkVBLmhlYWQoYXMpLCBSTkVBLnRhaWwoYXMpKSA6IG9uRW1wdHkoKSlcblxuLyoqXG4gKiBCcmVhayBhIGBSZWFkb25seUFycmF5YCBpbnRvIGl0cyBmaXJzdCBlbGVtZW50IGFuZCByZW1haW5pbmcgZWxlbWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1hdGNoTGVmdCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKlxuICogY29uc3QgbGVuOiA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IG51bWJlciA9IG1hdGNoTGVmdCgoKSA9PiAwLCAoXywgdGFpbCkgPT4gMSArIGxlbih0YWlsKSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChsZW4oWzEsIDIsIDNdKSwgMylcbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoTGVmdDogPEIsIEE+KFxuICBvbkVtcHR5OiBMYXp5PEI+LFxuICBvbk5vbkVtcHR5OiAoaGVhZDogQSwgdGFpbDogUmVhZG9ubHlBcnJheTxBPikgPT4gQlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEIgPSBtYXRjaExlZnRXXG5cbi8qKlxuICogQWxpYXMgb2YgW2BtYXRjaExlZnRgXSgjbWF0Y2hsZWZ0KS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZExlZnQ6IDxBLCBCPihcbiAgb25FbXB0eTogTGF6eTxCPixcbiAgb25Ob25FbXB0eTogKGhlYWQ6IEEsIHRhaWw6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEJcbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBCID0gbWF0Y2hMZWZ0XG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoUmlnaHRgXSgjbWF0Y2hyaWdodCkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaFJpZ2h0VyA9IDxCLCBBLCBDPihvbkVtcHR5OiBMYXp5PEI+LCBvbk5vbkVtcHR5OiAoaW5pdDogUmVhZG9ubHlBcnJheTxBPiwgbGFzdDogQSkgPT4gQykgPT4gKFxuICBhczogUmVhZG9ubHlBcnJheTxBPlxuKTogQiB8IEMgPT4gKGlzTm9uRW1wdHkoYXMpID8gb25Ob25FbXB0eShSTkVBLmluaXQoYXMpLCBSTkVBLmxhc3QoYXMpKSA6IG9uRW1wdHkoKSlcblxuLyoqXG4gKiBCcmVhayBhIGBSZWFkb25seUFycmF5YCBpbnRvIGl0cyBpbml0aWFsIGVsZW1lbnRzIGFuZCB0aGUgbGFzdCBlbGVtZW50LlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hSaWdodDogPEIsIEE+KFxuICBvbkVtcHR5OiBMYXp5PEI+LFxuICBvbk5vbkVtcHR5OiAoaW5pdDogUmVhZG9ubHlBcnJheTxBPiwgbGFzdDogQSkgPT4gQlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEIgPSBtYXRjaFJpZ2h0V1xuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hSaWdodGBdKCNtYXRjaHJpZ2h0KS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZFJpZ2h0OiA8QSwgQj4oXG4gIG9uRW1wdHk6IExhenk8Qj4sXG4gIG9uTm9uRW1wdHk6IChpbml0OiBSZWFkb25seUFycmF5PEE+LCBsYXN0OiBBKSA9PiBCXG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gQiA9IG1hdGNoUmlnaHRcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5XaXRoSW5kZXggPSA8QSwgQj4oZjogKGk6IG51bWJlciwgYTogQSkgPT4gUmVhZG9ubHlBcnJheTxCPikgPT4gKFxuICBhczogUmVhZG9ubHlBcnJheTxBPlxuKTogUmVhZG9ubHlBcnJheTxCPiA9PiB7XG4gIGlmIChpc0VtcHR5KGFzKSkge1xuICAgIHJldHVybiBlbXB0eVxuICB9XG4gIGNvbnN0IG91dDogQXJyYXk8Qj4gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0LnB1c2goLi4uZihpLCBhc1tpXSkpXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIFNhbWUgYXMgYHJlZHVjZWAgYnV0IGl0IGNhcnJpZXMgb3ZlciB0aGUgaW50ZXJtZWRpYXRlIHN0ZXBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzY2FuTGVmdCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzY2FuTGVmdCgxMCwgKGIsIGE6IG51bWJlcikgPT4gYiAtIGEpKFsxLCAyLCAzXSksIFsxMCwgOSwgNywgNF0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNjYW5MZWZ0ID0gPEEsIEI+KGI6IEIsIGY6IChiOiBCLCBhOiBBKSA9PiBCKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4gPT4ge1xuICBjb25zdCBsZW4gPSBhcy5sZW5ndGhcbiAgY29uc3Qgb3V0ID0gbmV3IEFycmF5KGxlbiArIDEpIGFzIE5vbkVtcHR5QXJyYXk8Qj5cbiAgb3V0WzBdID0gYlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2kgKyAxXSA9IGYob3V0W2ldLCBhc1tpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogRm9sZCBhbiBhcnJheSBmcm9tIHRoZSByaWdodCwga2VlcGluZyBhbGwgaW50ZXJtZWRpYXRlIHJlc3VsdHMgaW5zdGVhZCBvZiBvbmx5IHRoZSBmaW5hbCByZXN1bHRcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc2NhblJpZ2h0IH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNjYW5SaWdodCgxMCwgKGE6IG51bWJlciwgYikgPT4gYiAtIGEpKFsxLCAyLCAzXSksIFs0LCA1LCA3LCAxMF0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNjYW5SaWdodCA9IDxBLCBCPihiOiBCLCBmOiAoYTogQSwgYjogQikgPT4gQikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogUmVhZG9ubHlOb25FbXB0eUFycmF5PEI+ID0+IHtcbiAgY29uc3QgbGVuID0gYXMubGVuZ3RoXG4gIGNvbnN0IG91dCA9IG5ldyBBcnJheShsZW4gKyAxKSBhcyBOb25FbXB0eUFycmF5PEI+XG4gIG91dFtsZW5dID0gYlxuICBmb3IgKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBvdXRbaV0gPSBmKGFzW2ldLCBvdXRbaSArIDFdKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIGBSZWFkb25seUFycmF5YC5cbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzaXplID0gPEE+KGFzOiBSZWFkb25seUFycmF5PEE+KTogbnVtYmVyID0+IGFzLmxlbmd0aFxuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhbiBhcnJheSBjb250YWlucyBhIHBhcnRpY3VsYXIgaW5kZXhcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzT3V0T2ZCb3VuZDogPEE+KGk6IG51bWJlciwgYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IGJvb2xlYW4gPSBSTkVBLmlzT3V0T2ZCb3VuZFxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyBhIHNhZmUgd2F5IHRvIHJlYWQgYSB2YWx1ZSBhdCBhIHBhcnRpY3VsYXIgaW5kZXggZnJvbSBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBsb29rdXAgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzEsIDIsIDNdLCBsb29rdXAoMSkpLCBzb21lKDIpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgbG9va3VwKDMpKSwgbm9uZSlcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cChpOiBudW1iZXIpOiA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IE9wdGlvbjxBPlxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cDxBPihpOiBudW1iZXIsIGFzOiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPEE+XG5leHBvcnQgZnVuY3Rpb24gbG9va3VwPEE+KGk6IG51bWJlciwgYXM/OiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPEE+IHwgKDxBPihhczogUmVhZG9ubHlBcnJheTxBPikgPT4gT3B0aW9uPEE+KSB7XG4gIHJldHVybiBhcyA9PT0gdW5kZWZpbmVkID8gKGFzKSA9PiBsb29rdXAoaSwgYXMpIDogaXNPdXRPZkJvdW5kKGksIGFzKSA/IF8ubm9uZSA6IF8uc29tZShhc1tpXSlcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYW4gYXJyYXksIG9yIGBOb25lYCBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaGVhZCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaGVhZChbMSwgMiwgM10pLCBzb21lKDEpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChoZWFkKFtdKSwgbm9uZSlcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGhlYWQgPSA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBPcHRpb248QT4gPT4gKGlzTm9uRW1wdHkoYXMpID8gXy5zb21lKFJORUEuaGVhZChhcykpIDogXy5ub25lKVxuXG4vKipcbiAqIEdldCB0aGUgbGFzdCBlbGVtZW50IGluIGFuIGFycmF5LCBvciBgTm9uZWAgaWYgdGhlIGFycmF5IGlzIGVtcHR5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGxhc3QgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGxhc3QoWzEsIDIsIDNdKSwgc29tZSgzKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobGFzdChbXSksIG5vbmUpXG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0ID0gPEE+KGFzOiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPEE+ID0+IChpc05vbkVtcHR5KGFzKSA/IF8uc29tZShSTkVBLmxhc3QoYXMpKSA6IF8ubm9uZSlcblxuLyoqXG4gKiBHZXQgYWxsIGJ1dCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXksIG9yIGBOb25lYCBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdGFpbCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFpbChbMSwgMiwgM10pLCBzb21lKFsyLCAzXSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHRhaWwoW10pLCBub25lKVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdGFpbCA9IDxBPihhczogUmVhZG9ubHlBcnJheTxBPik6IE9wdGlvbjxSZWFkb25seUFycmF5PEE+PiA9PlxuICBpc05vbkVtcHR5KGFzKSA/IF8uc29tZShSTkVBLnRhaWwoYXMpKSA6IF8ubm9uZVxuXG4vKipcbiAqIEdldCBhbGwgYnV0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXksIGNyZWF0aW5nIGEgbmV3IGFycmF5LCBvciBgTm9uZWAgaWYgdGhlIGFycmF5IGlzIGVtcHR5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGluaXQgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGluaXQoWzEsIDIsIDNdKSwgc29tZShbMSwgMl0pKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbml0KFtdKSwgbm9uZSlcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXQgPSA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBPcHRpb248UmVhZG9ubHlBcnJheTxBPj4gPT5cbiAgaXNOb25FbXB0eShhcykgPyBfLnNvbWUoUk5FQS5pbml0KGFzKSkgOiBfLm5vbmVcblxuLyoqXG4gKiBLZWVwIG9ubHkgYSBtYXggbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0IG9mIGFuIGBSZWFkb25seUFycmF5YCwgY3JlYXRpbmcgYSBuZXcgYFJlYWRvbmx5QXJyYXlgLlxuICpcbiAqICoqTm90ZSoqLiBgbmAgaXMgbm9ybWFsaXplZCB0byBhIG5vbiBuZWdhdGl2ZSBpbnRlZ2VyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBSQSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGlucHV0OiBSZWFkb25seUFycmF5PG51bWJlcj4gPSBbMSwgMiwgM11cbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShpbnB1dCwgUkEudGFrZUxlZnQoMikpLCBbMSwgMl0pXG4gKlxuICogLy8gb3V0IG9mIGJvdW5kc1xuICogYXNzZXJ0LnN0cmljdEVxdWFsKHBpcGUoaW5wdXQsIFJBLnRha2VMZWZ0KDQpKSwgaW5wdXQpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwocGlwZShpbnB1dCwgUkEudGFrZUxlZnQoLTEpKSwgaW5wdXQpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRha2VMZWZ0ID0gKG46IG51bWJlcikgPT4gPEE+KGFzOiBSZWFkb25seUFycmF5PEE+KTogUmVhZG9ubHlBcnJheTxBPiA9PlxuICBpc091dE9mQm91bmQobiwgYXMpID8gYXMgOiBuID09PSAwID8gZW1wdHkgOiBhcy5zbGljZSgwLCBuKVxuXG4vKipcbiAqIEtlZXAgb25seSBhIG1heCBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgZW5kIG9mIGFuIGBSZWFkb25seUFycmF5YCwgY3JlYXRpbmcgYSBuZXcgYFJlYWRvbmx5QXJyYXlgLlxuICpcbiAqICoqTm90ZSoqLiBgbmAgaXMgbm9ybWFsaXplZCB0byBhIG5vbiBuZWdhdGl2ZSBpbnRlZ2VyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBSQSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGlucHV0OiBSZWFkb25seUFycmF5PG51bWJlcj4gPSBbMSwgMiwgM11cbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShpbnB1dCwgUkEudGFrZVJpZ2h0KDIpKSwgWzIsIDNdKVxuICpcbiAqIC8vIG91dCBvZiBib3VuZHNcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKGlucHV0LCBSQS50YWtlUmlnaHQoNCkpLCBpbnB1dClcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKGlucHV0LCBSQS50YWtlUmlnaHQoLTEpKSwgaW5wdXQpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRha2VSaWdodCA9IChuOiBudW1iZXIpID0+IDxBPihhczogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QT4gPT5cbiAgaXNPdXRPZkJvdW5kKG4sIGFzKSA/IGFzIDogbiA9PT0gMCA/IGVtcHR5IDogYXMuc2xpY2UoLW4pXG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBsb25nZXN0IGluaXRpYWwgc3ViYXJyYXkgZm9yIHdoaWNoIGFsbCBlbGVtZW50IHNhdGlzZnkgdGhlIHNwZWNpZmllZCBwcmVkaWNhdGUsIGNyZWF0aW5nIGEgbmV3IGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHRha2VMZWZ0V2hpbGUgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFrZUxlZnRXaGlsZSgobjogbnVtYmVyKSA9PiBuICUgMiA9PT0gMCkoWzIsIDQsIDMsIDZdKSwgWzIsIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWtlTGVmdFdoaWxlPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEI+XG5leHBvcnQgZnVuY3Rpb24gdGFrZUxlZnRXaGlsZTxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oYnM6IFJlYWRvbmx5QXJyYXk8Qj4pID0+IFJlYWRvbmx5QXJyYXk8Qj5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlTGVmdFdoaWxlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+XG5leHBvcnQgZnVuY3Rpb24gdGFrZUxlZnRXaGlsZTxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBPiB7XG4gIHJldHVybiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IHtcbiAgICBjb25zdCBvdXQ6IEFycmF5PEE+ID0gW11cbiAgICBmb3IgKGNvbnN0IGEgb2YgYXMpIHtcbiAgICAgIGlmICghcHJlZGljYXRlKGEpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBvdXQucHVzaChhKVxuICAgIH1cbiAgICBjb25zdCBsZW4gPSBvdXQubGVuZ3RoXG4gICAgcmV0dXJuIGxlbiA9PT0gYXMubGVuZ3RoID8gYXMgOiBsZW4gPT09IDAgPyBlbXB0eSA6IG91dFxuICB9XG59XG5cbi8qKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3Bhbm5lZDxJLCBSPiB7XG4gIHJlYWRvbmx5IGluaXQ6IFJlYWRvbmx5QXJyYXk8ST5cbiAgcmVhZG9ubHkgcmVzdDogUmVhZG9ubHlBcnJheTxSPlxufVxuXG5jb25zdCBzcGFuTGVmdEluZGV4ID0gPEE+KGFzOiBSZWFkb25seUFycmF5PEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGwgPSBhcy5sZW5ndGhcbiAgbGV0IGkgPSAwXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKCFwcmVkaWNhdGUoYXNbaV0pKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gaVxufVxuXG4vKipcbiAqIFNwbGl0IGFuIGFycmF5IGludG8gdHdvIHBhcnRzOlxuICogMS4gdGhlIGxvbmdlc3QgaW5pdGlhbCBzdWJhcnJheSBmb3Igd2hpY2ggYWxsIGVsZW1lbnRzIHNhdGlzZnkgdGhlIHNwZWNpZmllZCBwcmVkaWNhdGVcbiAqIDIuIHRoZSByZW1haW5pbmcgZWxlbWVudHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc3BhbkxlZnQgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc3BhbkxlZnQoKG46IG51bWJlcikgPT4gbiAlIDIgPT09IDEpKFsxLCAzLCAyLCA0LCA1XSksIHsgaW5pdDogWzEsIDNdLCByZXN0OiBbMiwgNCwgNV0gfSlcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwYW5MZWZ0PEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBTcGFubmVkPEIsIEE+XG5leHBvcnQgZnVuY3Rpb24gc3BhbkxlZnQ8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGJzOiBSZWFkb25seUFycmF5PEI+KSA9PiBTcGFubmVkPEIsIEI+XG5leHBvcnQgZnVuY3Rpb24gc3BhbkxlZnQ8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFNwYW5uZWQ8QSwgQT5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuTGVmdDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gU3Bhbm5lZDxBLCBBPiB7XG4gIHJldHVybiAoYXMpID0+IHtcbiAgICBjb25zdCBbaW5pdCwgcmVzdF0gPSBzcGxpdEF0KHNwYW5MZWZ0SW5kZXgoYXMsIHByZWRpY2F0ZSkpKGFzKVxuICAgIHJldHVybiB7IGluaXQsIHJlc3QgfVxuICB9XG59XG5cbi8qKlxuICogRHJvcCBhIG1heCBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgc3RhcnQgb2YgYW4gYFJlYWRvbmx5QXJyYXlgLCBjcmVhdGluZyBhIG5ldyBgUmVhZG9ubHlBcnJheWAuXG4gKlxuICogKipOb3RlKiouIGBuYCBpcyBub3JtYWxpemVkIHRvIGEgbm9uIG5lZ2F0aXZlIGludGVnZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFJBIGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogY29uc3QgaW5wdXQ6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiA9IFsxLCAyLCAzXVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKGlucHV0LCBSQS5kcm9wTGVmdCgyKSksIFszXSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKGlucHV0LCBSQS5kcm9wTGVmdCgwKSksIGlucHV0KVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKHBpcGUoaW5wdXQsIFJBLmRyb3BMZWZ0KC0xKSksIGlucHV0KVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBkcm9wTGVmdCA9IChuOiBudW1iZXIpID0+IDxBPihhczogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QT4gPT5cbiAgbiA8PSAwIHx8IGlzRW1wdHkoYXMpID8gYXMgOiBuID49IGFzLmxlbmd0aCA/IGVtcHR5IDogYXMuc2xpY2UobiwgYXMubGVuZ3RoKVxuXG4vKipcbiAqIERyb3AgYSBtYXggbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIGVuZCBvZiBhbiBgUmVhZG9ubHlBcnJheWAsIGNyZWF0aW5nIGEgbmV3IGBSZWFkb25seUFycmF5YC5cbiAqXG4gKiAqKk5vdGUqKi4gYG5gIGlzIG5vcm1hbGl6ZWQgdG8gYSBub24gbmVnYXRpdmUgaW50ZWdlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgUkEgZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBjb25zdCBpbnB1dDogUmVhZG9ubHlBcnJheTxudW1iZXI+ID0gWzEsIDIsIDNdXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoaW5wdXQsIFJBLmRyb3BSaWdodCgyKSksIFsxXSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKGlucHV0LCBSQS5kcm9wUmlnaHQoMCkpLCBpbnB1dClcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKGlucHV0LCBSQS5kcm9wUmlnaHQoLTEpKSwgaW5wdXQpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGRyb3BSaWdodCA9IChuOiBudW1iZXIpID0+IDxBPihhczogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QT4gPT5cbiAgbiA8PSAwIHx8IGlzRW1wdHkoYXMpID8gYXMgOiBuID49IGFzLmxlbmd0aCA/IGVtcHR5IDogYXMuc2xpY2UoMCwgYXMubGVuZ3RoIC0gbilcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxvbmdlc3QgaW5pdGlhbCBzdWJhcnJheSBmb3Igd2hpY2ggYWxsIGVsZW1lbnQgc2F0aXNmeSB0aGUgc3BlY2lmaWVkIHByZWRpY2F0ZSwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZHJvcExlZnRXaGlsZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkcm9wTGVmdFdoaWxlKChuOiBudW1iZXIpID0+IG4gJSAyID09PSAxKShbMSwgMywgMiwgNCwgNV0pLCBbMiwgNCwgNV0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyb3BMZWZ0V2hpbGU8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8Qj5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wTGVmdFdoaWxlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihiczogUmVhZG9ubHlBcnJheTxCPikgPT4gUmVhZG9ubHlBcnJheTxCPlxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BMZWZ0V2hpbGU8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wTGVmdFdoaWxlPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+IHtcbiAgcmV0dXJuIChhcykgPT4ge1xuICAgIGNvbnN0IGkgPSBzcGFuTGVmdEluZGV4KGFzLCBwcmVkaWNhdGUpXG4gICAgcmV0dXJuIGkgPT09IDAgPyBhcyA6IGkgPT09IGFzLmxlbmd0aCA/IGVtcHR5IDogYXMuc2xpY2UoaSlcbiAgfVxufVxuXG4vKipcbiAqIEZpbmQgdGhlIGZpcnN0IGluZGV4IGZvciB3aGljaCBhIHByZWRpY2F0ZSBob2xkc1xuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaW5kSW5kZXggfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmRJbmRleCgobjogbnVtYmVyKSA9PiBuID09PSAyKShbMSwgMiwgM10pLCBzb21lKDEpKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kSW5kZXgoKG46IG51bWJlcikgPT4gbiA9PT0gMikoW10pLCBub25lKVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmluZEluZGV4ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBPcHRpb248bnVtYmVyPiA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgcmV0dXJuIF8uc29tZShpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gXy5ub25lXG59XG5cbi8qKlxuICogRmluZCB0aGUgZmlyc3QgZWxlbWVudCB3aGljaCBzYXRpc2ZpZXMgYSBwcmVkaWNhdGUgKG9yIGEgcmVmaW5lbWVudCkgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmluZEZpcnN0IH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCB7IHNvbWUgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKlxuICogdHlwZSBYID0ge1xuICogICByZWFkb25seSBhOiBudW1iZXJcbiAqICAgcmVhZG9ubHkgYjogbnVtYmVyXG4gKiB9XG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kRmlyc3QoKHg6IFgpID0+IHguYSA9PT0gMSkoW3sgYTogMSwgYjogMSB9LCB7IGE6IDEsIGI6IDIgfV0pLCBzb21lKHsgYTogMSwgYjogMSB9KSlcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gT3B0aW9uPEI+XG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihiczogUmVhZG9ubHlBcnJheTxCPikgPT4gT3B0aW9uPEI+XG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0PEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBPcHRpb248QT5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3Q8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IE9wdGlvbjxBPiB7XG4gIHJldHVybiAoYXMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgICByZXR1cm4gXy5zb21lKGFzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXy5ub25lXG4gIH1cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBmaXJzdCBlbGVtZW50IHJldHVybmVkIGJ5IGFuIG9wdGlvbiBiYXNlZCBzZWxlY3RvciBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaW5kRmlyc3RNYXAgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBpbnRlcmZhY2UgUGVyc29uIHtcbiAqICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gKiAgIHJlYWRvbmx5IGFnZT86IG51bWJlclxuICogfVxuICpcbiAqIGNvbnN0IHBlcnNvbnM6IFJlYWRvbmx5QXJyYXk8UGVyc29uPiA9IFt7IG5hbWU6ICdKb2huJyB9LCB7IG5hbWU6ICdNYXJ5JywgYWdlOiA0NSB9LCB7IG5hbWU6ICdKb2V5JywgYWdlOiAyOCB9XVxuICpcbiAqIC8vIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGZpcnN0IHBlcnNvbiB0aGF0IGhhcyBhbiBhZ2VcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZEZpcnN0TWFwKChwOiBQZXJzb24pID0+IChwLmFnZSA9PT0gdW5kZWZpbmVkID8gbm9uZSA6IHNvbWUocC5uYW1lKSkpKHBlcnNvbnMpLCBzb21lKCdNYXJ5JykpXG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kRmlyc3RNYXAgPSA8QSwgQj4oZjogKGE6IEEpID0+IE9wdGlvbjxCPikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPEI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG91dCA9IGYoYXNbaV0pXG4gICAgaWYgKF8uaXNTb21lKG91dCkpIHtcbiAgICAgIHJldHVybiBvdXRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF8ubm9uZVxufVxuXG4vKipcbiAqIEZpbmQgdGhlIGxhc3QgZWxlbWVudCB3aGljaCBzYXRpc2ZpZXMgYSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmluZExhc3QgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiB0eXBlIFggPSB7XG4gKiAgIHJlYWRvbmx5IGE6IG51bWJlclxuICogICByZWFkb25seSBiOiBudW1iZXJcbiAqIH1cbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmRMYXN0KCh4OiBYKSA9PiB4LmEgPT09IDEpKFt7IGE6IDEsIGI6IDEgfSwgeyBhOiAxLCBiOiAyIH1dKSwgc29tZSh7IGE6IDEsIGI6IDIgfSkpXG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gT3B0aW9uPEI+XG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3Q8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGJzOiBSZWFkb25seUFycmF5PEI+KSA9PiBPcHRpb248Qj5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gT3B0aW9uPEE+XG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3Q8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IE9wdGlvbjxBPiB7XG4gIHJldHVybiAoYXMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gYXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChwcmVkaWNhdGUoYXNbaV0pKSB7XG4gICAgICAgIHJldHVybiBfLnNvbWUoYXNbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfLm5vbmVcbiAgfVxufVxuXG4vKipcbiAqIEZpbmQgdGhlIGxhc3QgZWxlbWVudCByZXR1cm5lZCBieSBhbiBvcHRpb24gYmFzZWQgc2VsZWN0b3IgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmluZExhc3RNYXAgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBpbnRlcmZhY2UgUGVyc29uIHtcbiAqICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gKiAgIHJlYWRvbmx5IGFnZT86IG51bWJlclxuICogfVxuICpcbiAqIGNvbnN0IHBlcnNvbnM6IFJlYWRvbmx5QXJyYXk8UGVyc29uPiA9IFt7IG5hbWU6ICdKb2huJyB9LCB7IG5hbWU6ICdNYXJ5JywgYWdlOiA0NSB9LCB7IG5hbWU6ICdKb2V5JywgYWdlOiAyOCB9XVxuICpcbiAqIC8vIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGxhc3QgcGVyc29uIHRoYXQgaGFzIGFuIGFnZVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kTGFzdE1hcCgocDogUGVyc29uKSA9PiAocC5hZ2UgPT09IHVuZGVmaW5lZCA/IG5vbmUgOiBzb21lKHAubmFtZSkpKShwZXJzb25zKSwgc29tZSgnSm9leScpKVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmluZExhc3RNYXAgPSA8QSwgQj4oZjogKGE6IEEpID0+IE9wdGlvbjxCPikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPEI+ID0+IHtcbiAgZm9yIChsZXQgaSA9IGFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3Qgb3V0ID0gZihhc1tpXSlcbiAgICBpZiAoXy5pc1NvbWUob3V0KSkge1xuICAgICAgcmV0dXJuIG91dFxuICAgIH1cbiAgfVxuICByZXR1cm4gXy5ub25lXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgbGlzdCB3aGljaCBtYXRjaGVzIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZmluZExhc3RJbmRleCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGludGVyZmFjZSBYIHtcbiAqICAgcmVhZG9ubHkgYTogbnVtYmVyXG4gKiAgIHJlYWRvbmx5IGI6IG51bWJlclxuICogfVxuICogY29uc3QgeHM6IFJlYWRvbmx5QXJyYXk8WD4gPSBbeyBhOiAxLCBiOiAwIH0sIHsgYTogMSwgYjogMSB9XVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kTGFzdEluZGV4KCh4OiB7IHJlYWRvbmx5IGE6IG51bWJlciB9KSA9PiB4LmEgPT09IDEpKHhzKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZExhc3RJbmRleCgoeDogeyByZWFkb25seSBhOiBudW1iZXIgfSkgPT4geC5hID09PSA0KSh4cyksIG5vbmUpXG4gKlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmluZExhc3RJbmRleCA9IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPG51bWJlcj4gPT4ge1xuICBmb3IgKGxldCBpID0gYXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgcmV0dXJuIF8uc29tZShpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gXy5ub25lXG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleCwgY3JlYXRpbmcgYSBuZXcgYXJyYXksIG9yIHJldHVybmluZyBgTm9uZWAgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW5zZXJ0QXQgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGluc2VydEF0KDIsIDUpKFsxLCAyLCAzLCA0XSksIHNvbWUoWzEsIDIsIDUsIDMsIDRdKSlcbiAqXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGluc2VydEF0ID0gPEE+KGk6IG51bWJlciwgYTogQSkgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4gPT5cbiAgaSA8IDAgfHwgaSA+IGFzLmxlbmd0aCA/IF8ubm9uZSA6IF8uc29tZShSTkVBLnVuc2FmZUluc2VydEF0KGksIGEsIGFzKSlcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleCwgY3JlYXRpbmcgYSBuZXcgYXJyYXksIG9yIHJldHVybmluZyBgTm9uZWAgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdXBkYXRlQXQgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVwZGF0ZUF0KDEsIDEpKFsxLCAyLCAzXSksIHNvbWUoWzEsIDEsIDNdKSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodXBkYXRlQXQoMSwgMSkoW10pLCBub25lKVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQXQgPSA8QT4oaTogbnVtYmVyLCBhOiBBKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gT3B0aW9uPFJlYWRvbmx5QXJyYXk8QT4+KSA9PlxuICBtb2RpZnlBdChpLCAoKSA9PiBhKVxuXG4vKipcbiAqIERlbGV0ZSB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCBjcmVhdGluZyBhIG5ldyBhcnJheSwgb3IgcmV0dXJuaW5nIGBOb25lYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kc1xuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBkZWxldGVBdCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZGVsZXRlQXQoMCkoWzEsIDIsIDNdKSwgc29tZShbMiwgM10pKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChkZWxldGVBdCgxKShbXSksIG5vbmUpXG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBkZWxldGVBdCA9IChpOiBudW1iZXIpID0+IDxBPihhczogUmVhZG9ubHlBcnJheTxBPik6IE9wdGlvbjxSZWFkb25seUFycmF5PEE+PiA9PlxuICBpc091dE9mQm91bmQoaSwgYXMpID8gXy5ub25lIDogXy5zb21lKHVuc2FmZURlbGV0ZUF0KGksIGFzKSlcblxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIHRoZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXgsIGNyZWF0aW5nIGEgbmV3IGFycmF5LCBvciByZXR1cm5pbmcgYE5vbmVgIGlmIHRoZSBpbmRleCBpcyBvdXRcbiAqIG9mIGJvdW5kc1xuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtb2RpZnlBdCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvT3B0aW9uJ1xuICpcbiAqIGNvbnN0IGRvdWJsZSA9ICh4OiBudW1iZXIpOiBudW1iZXIgPT4geCAqIDJcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobW9kaWZ5QXQoMSwgZG91YmxlKShbMSwgMiwgM10pLCBzb21lKFsxLCA0LCAzXSkpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKG1vZGlmeUF0KDEsIGRvdWJsZSkoW10pLCBub25lKVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgbW9kaWZ5QXQgPSA8QT4oaTogbnVtYmVyLCBmOiAoYTogQSkgPT4gQSkgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogT3B0aW9uPFJlYWRvbmx5QXJyYXk8QT4+ID0+XG4gIGlzT3V0T2ZCb3VuZChpLCBhcykgPyBfLm5vbmUgOiBfLnNvbWUodW5zYWZlVXBkYXRlQXQoaSwgZihhc1tpXSksIGFzKSlcblxuLyoqXG4gKiBSZXZlcnNlIGFuIGFycmF5LCBjcmVhdGluZyBhIG5ldyBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJldmVyc2UoWzEsIDIsIDNdKSwgWzMsIDIsIDFdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gPEE+KGFzOiBSZWFkb25seUFycmF5PEE+KTogUmVhZG9ubHlBcnJheTxBPiA9PiAoYXMubGVuZ3RoIDw9IDEgPyBhcyA6IGFzLnNsaWNlKCkucmV2ZXJzZSgpKVxuXG4vKipcbiAqIEV4dHJhY3RzIGZyb20gYW4gYXJyYXkgb2YgYEVpdGhlcmAgYWxsIHRoZSBgUmlnaHRgIGVsZW1lbnRzLiBBbGwgdGhlIGBSaWdodGAgZWxlbWVudHMgYXJlIGV4dHJhY3RlZCBpbiBvcmRlclxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByaWdodHMgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0IHsgcmlnaHQsIGxlZnQgfSBmcm9tICdmcC10cy9FaXRoZXInXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChyaWdodHMoW3JpZ2h0KDEpLCBsZWZ0KCdmb28nKSwgcmlnaHQoMildKSwgWzEsIDJdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodHMgPSA8RSwgQT4oYXM6IFJlYWRvbmx5QXJyYXk8RWl0aGVyPEUsIEE+Pik6IFJlYWRvbmx5QXJyYXk8QT4gPT4ge1xuICBjb25zdCByOiBBcnJheTxBPiA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhID0gYXNbaV1cbiAgICBpZiAoYS5fdGFnID09PSAnUmlnaHQnKSB7XG4gICAgICByLnB1c2goYS5yaWdodClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBmcm9tIGFuIGFycmF5IG9mIGBFaXRoZXJgIGFsbCB0aGUgYExlZnRgIGVsZW1lbnRzLiBBbGwgdGhlIGBMZWZ0YCBlbGVtZW50cyBhcmUgZXh0cmFjdGVkIGluIG9yZGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGxlZnRzIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCB7IGxlZnQsIHJpZ2h0IH0gZnJvbSAnZnAtdHMvRWl0aGVyJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobGVmdHMoW3JpZ2h0KDEpLCBsZWZ0KCdmb28nKSwgcmlnaHQoMildKSwgWydmb28nXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgbGVmdHMgPSA8RSwgQT4oYXM6IFJlYWRvbmx5QXJyYXk8RWl0aGVyPEUsIEE+Pik6IFJlYWRvbmx5QXJyYXk8RT4gPT4ge1xuICBjb25zdCByOiBBcnJheTxFPiA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhID0gYXNbaV1cbiAgICBpZiAoYS5fdGFnID09PSAnTGVmdCcpIHtcbiAgICAgIHIucHVzaChhLmxlZnQpXG4gICAgfVxuICB9XG4gIHJldHVybiByXG59XG5cbi8qKlxuICogU29ydCB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgaW4gaW5jcmVhc2luZyBvcmRlciwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29ydCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvcnQoTi5PcmQpKFszLCAyLCAxXSksIFsxLCAyLCAzXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3Qgc29ydCA9IDxCPihPOiBPcmQ8Qj4pID0+IDxBIGV4dGVuZHMgQj4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBSZWFkb25seUFycmF5PEE+ID0+XG4gIGFzLmxlbmd0aCA8PSAxID8gYXMgOiBhcy5zbGljZSgpLnNvcnQoTy5jb21wYXJlKVxuXG4vLyBUT0RPOiBjdXJyeSBhbmQgbWFrZSBkYXRhLWxhc3QgaW4gdjNcbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiB0byBwYWlycyBvZiBlbGVtZW50cyBhdCB0aGUgc2FtZSBpbmRleCBpbiB0d28gYXJyYXlzLCBjb2xsZWN0aW5nIHRoZSByZXN1bHRzIGluIGEgbmV3IGFycmF5LiBJZiBvbmVcbiAqIGlucHV0IGFycmF5IGlzIHNob3J0LCBleGNlc3MgZWxlbWVudHMgb2YgdGhlIGxvbmdlciBhcnJheSBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB6aXBXaXRoIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHppcFdpdGgoWzEsIDIsIDNdLCBbJ2EnLCAnYicsICdjJywgJ2QnXSwgKG4sIHMpID0+IHMgKyBuKSwgWydhMScsICdiMicsICdjMyddKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCB6aXBXaXRoID0gPEEsIEIsIEM+KFxuICBmYTogUmVhZG9ubHlBcnJheTxBPixcbiAgZmI6IFJlYWRvbmx5QXJyYXk8Qj4sXG4gIGY6IChhOiBBLCBiOiBCKSA9PiBDXG4pOiBSZWFkb25seUFycmF5PEM+ID0+IHtcbiAgY29uc3QgZmM6IEFycmF5PEM+ID0gW11cbiAgY29uc3QgbGVuID0gTWF0aC5taW4oZmEubGVuZ3RoLCBmYi5sZW5ndGgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBmY1tpXSA9IGYoZmFbaV0sIGZiW2ldKVxuICB9XG4gIHJldHVybiBmY1xufVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogVGFrZXMgdHdvIGFycmF5cyBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBjb3JyZXNwb25kaW5nIHBhaXJzLiBJZiBvbmUgaW5wdXQgYXJyYXkgaXMgc2hvcnQsIGV4Y2VzcyBlbGVtZW50cyBvZiB0aGVcbiAqIGxvbmdlciBhcnJheSBhcmUgZGlzY2FyZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHppcCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgemlwKFsnYScsICdiJywgJ2MnLCAnZCddKSksIFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gemlwPEI+KGJzOiBSZWFkb25seUFycmF5PEI+KTogPEE+KGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PHJlYWRvbmx5IFtBLCBCXT5cbmV4cG9ydCBmdW5jdGlvbiB6aXA8QSwgQj4oYXM6IFJlYWRvbmx5QXJyYXk8QT4sIGJzOiBSZWFkb25seUFycmF5PEI+KTogUmVhZG9ubHlBcnJheTxyZWFkb25seSBbQSwgQl0+XG5leHBvcnQgZnVuY3Rpb24gemlwPEEsIEI+KFxuICBhczogUmVhZG9ubHlBcnJheTxBPixcbiAgYnM/OiBSZWFkb25seUFycmF5PEI+XG4pOiBSZWFkb25seUFycmF5PHJlYWRvbmx5IFtBLCBCXT4gfCAoKGJzOiBSZWFkb25seUFycmF5PEI+KSA9PiBSZWFkb25seUFycmF5PHJlYWRvbmx5IFtCLCBBXT4pIHtcbiAgaWYgKGJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKGJzKSA9PiB6aXAoYnMsIGFzKVxuICB9XG4gIHJldHVybiB6aXBXaXRoKGFzLCBicywgKGEsIGIpID0+IFthLCBiXSlcbn1cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gaXMgcmV2ZXJzZSBvZiBgemlwYC4gVGFrZXMgYW4gYXJyYXkgb2YgcGFpcnMgYW5kIHJldHVybiB0d28gY29ycmVzcG9uZGluZyBhcnJheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdW56aXAgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodW56aXAoW1sxLCAnYSddLCBbMiwgJ2InXSwgWzMsICdjJ11dKSwgW1sxLCAyLCAzXSwgWydhJywgJ2InLCAnYyddXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdW56aXAgPSA8QSwgQj4oYXM6IFJlYWRvbmx5QXJyYXk8cmVhZG9ubHkgW0EsIEJdPik6IHJlYWRvbmx5IFtSZWFkb25seUFycmF5PEE+LCBSZWFkb25seUFycmF5PEI+XSA9PiB7XG4gIGNvbnN0IGZhOiBBcnJheTxBPiA9IFtdXG4gIGNvbnN0IGZiOiBBcnJheTxCPiA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspIHtcbiAgICBmYVtpXSA9IGFzW2ldWzBdXG4gICAgZmJbaV0gPSBhc1tpXVsxXVxuICB9XG4gIHJldHVybiBbZmEsIGZiXVxufVxuXG4vKipcbiAqIFByZXBlbmQgYW4gZWxlbWVudCB0byBldmVyeSBtZW1iZXIgb2YgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcHJlcGVuZEFsbCB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwcmVwZW5kQWxsKDkpKFsxLCAyLCAzLCA0XSksIFs5LCAxLCA5LCAyLCA5LCAzLCA5LCA0XSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHByZXBlbmRBbGwgPSA8QT4obWlkZGxlOiBBKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBPikgPT4ge1xuICBjb25zdCBmID0gUk5FQS5wcmVwZW5kQWxsKG1pZGRsZSlcbiAgcmV0dXJuIChhcykgPT4gKGlzTm9uRW1wdHkoYXMpID8gZihhcykgOiBhcylcbn1cblxuLyoqXG4gKiBQbGFjZXMgYW4gZWxlbWVudCBpbiBiZXR3ZWVuIG1lbWJlcnMgb2YgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW50ZXJzcGVyc2UgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW50ZXJzcGVyc2UoOSkoWzEsIDIsIDMsIDRdKSwgWzEsIDksIDIsIDksIDMsIDksIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlcnNwZXJzZSA9IDxBPihtaWRkbGU6IEEpOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+KSA9PiB7XG4gIGNvbnN0IGYgPSBSTkVBLmludGVyc3BlcnNlKG1pZGRsZSlcbiAgcmV0dXJuIChhcykgPT4gKGlzTm9uRW1wdHkoYXMpID8gZihhcykgOiBhcylcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSBgUmVhZG9ubHlBcnJheWAgYnkgYG5gIHN0ZXBzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByb3RhdGUgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocm90YXRlKDIpKFsxLCAyLCAzLCA0LCA1XSksIFs0LCA1LCAxLCAyLCAzXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3Qgcm90YXRlID0gKG46IG51bWJlcik6ICg8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT4pID0+IHtcbiAgY29uc3QgZiA9IFJORUEucm90YXRlKG4pXG4gIHJldHVybiAoYXMpID0+IChpc05vbkVtcHR5KGFzKSA/IGYoYXMpIDogYXMpXG59XG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBUZXN0IGlmIGEgdmFsdWUgaXMgYSBtZW1iZXIgb2YgYW4gYXJyYXkuIFRha2VzIGEgYEVxPEE+YCBhcyBhIHNpbmdsZVxuICogYXJndW1lbnQgd2hpY2ggcmV0dXJucyB0aGUgZnVuY3Rpb24gdG8gdXNlIHRvIHNlYXJjaCBmb3IgYSB2YWx1ZSBvZiB0eXBlIGBBYCBpblxuICogYW4gYXJyYXkgb2YgdHlwZSBgUmVhZG9ubHlBcnJheTxBPmAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGVsZW0gfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKHBpcGUoWzEsIDIsIDNdLCBlbGVtKE4uRXEpKDIpKSwgdHJ1ZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgZWxlbShOLkVxKSgwKSksIGZhbHNlKVxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbTxBPihcbiAgRTogRXE8QT5cbik6IHtcbiAgKGE6IEEpOiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IGJvb2xlYW5cbiAgKGE6IEEsIGFzOiBSZWFkb25seUFycmF5PEE+KTogYm9vbGVhblxufVxuZXhwb3J0IGZ1bmN0aW9uIGVsZW08QT4oRTogRXE8QT4pOiAoYTogQSwgYXM/OiBSZWFkb25seUFycmF5PEE+KSA9PiBib29sZWFuIHwgKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gYm9vbGVhbikge1xuICByZXR1cm4gKGEsIGFzPykgPT4ge1xuICAgIGlmIChhcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBlbGVtRSA9IGVsZW0oRSlcbiAgICAgIHJldHVybiAoYXMpID0+IGVsZW1FKGEsIGFzKVxuICAgIH1cbiAgICBjb25zdCBwcmVkaWNhdGUgPSAoZWxlbWVudDogQSkgPT4gRS5lcXVhbHMoZWxlbWVudCwgYSlcbiAgICBsZXQgaSA9IDBcbiAgICBmb3IgKDsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXksIGtlZXBpbmcgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdW5pcSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHVuaXEoTi5FcSkoWzEsIDIsIDFdKSwgWzEsIDJdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxID0gPEE+KEU6IEVxPEE+KTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBPikgPT4ge1xuICBjb25zdCBmID0gUk5FQS51bmlxKEUpXG4gIHJldHVybiAoYXMpID0+IChpc05vbkVtcHR5KGFzKSA/IGYoYXMpIDogYXMpXG59XG5cbi8qKlxuICogU29ydCB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgaW4gaW5jcmVhc2luZyBvcmRlciwgd2hlcmUgZWxlbWVudHMgYXJlIGNvbXBhcmVkIHVzaW5nIGZpcnN0IGBvcmRzWzBdYCwgdGhlbiBgb3Jkc1sxXWAsXG4gKiBldGMuLi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCB7IGNvbnRyYW1hcCB9IGZyb20gJ2ZwLXRzL09yZCdcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogaW50ZXJmYWNlIFBlcnNvbiB7XG4gKiAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICogICByZWFkb25seSBhZ2U6IG51bWJlclxuICogfVxuICogY29uc3QgYnlOYW1lID0gcGlwZShTLk9yZCwgY29udHJhbWFwKChwOiBQZXJzb24pID0+IHAubmFtZSkpXG4gKiBjb25zdCBieUFnZSA9IHBpcGUoTi5PcmQsIGNvbnRyYW1hcCgocDogUGVyc29uKSA9PiBwLmFnZSkpXG4gKlxuICogY29uc3Qgc29ydEJ5TmFtZUJ5QWdlID0gc29ydEJ5KFtieU5hbWUsIGJ5QWdlXSlcbiAqXG4gKiBjb25zdCBwZXJzb25zID0gW3sgbmFtZTogJ2EnLCBhZ2U6IDEgfSwgeyBuYW1lOiAnYicsIGFnZTogMyB9LCB7IG5hbWU6ICdjJywgYWdlOiAyIH0sIHsgbmFtZTogJ2InLCBhZ2U6IDIgfV1cbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc29ydEJ5TmFtZUJ5QWdlKHBlcnNvbnMpLCBbXG4gKiAgIHsgbmFtZTogJ2EnLCBhZ2U6IDEgfSxcbiAqICAgeyBuYW1lOiAnYicsIGFnZTogMiB9LFxuICogICB7IG5hbWU6ICdiJywgYWdlOiAzIH0sXG4gKiAgIHsgbmFtZTogJ2MnLCBhZ2U6IDIgfVxuICogXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3Qgc29ydEJ5ID0gPEI+KG9yZHM6IFJlYWRvbmx5QXJyYXk8T3JkPEI+Pik6ICg8QSBleHRlbmRzIEI+KGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+KSA9PiB7XG4gIGNvbnN0IGYgPSBSTkVBLnNvcnRCeShvcmRzKVxuICByZXR1cm4gKGFzKSA9PiAoaXNOb25FbXB0eShhcykgPyBmKGFzKSA6IGFzKVxufVxuXG4vKipcbiAqIEEgdXNlZnVsIHJlY3Vyc2lvbiBwYXR0ZXJuIGZvciBwcm9jZXNzaW5nIGEgYFJlYWRvbmx5QXJyYXlgIHRvIHByb2R1Y2UgYSBuZXcgYFJlYWRvbmx5QXJyYXlgLCBvZnRlbiB1c2VkIGZvciBcImNob3BwaW5nXCIgdXAgdGhlIGlucHV0XG4gKiBgUmVhZG9ubHlBcnJheWAuIFR5cGljYWxseSBgY2hvcGAgaXMgY2FsbGVkIHdpdGggc29tZSBmdW5jdGlvbiB0aGF0IHdpbGwgY29uc3VtZSBhbiBpbml0aWFsIHByZWZpeCBvZiB0aGUgYFJlYWRvbmx5QXJyYXlgIGFuZCBwcm9kdWNlIGFcbiAqIHZhbHVlIGFuZCB0aGUgdGFpbCBvZiB0aGUgYFJlYWRvbmx5QXJyYXlgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBFcSB9IGZyb20gJ2ZwLXRzL0VxJ1xuICogaW1wb3J0ICogYXMgUkEgZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGdyb3VwID0gPEE+KFM6IEVxPEE+KTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxSZWFkb25seUFycmF5PEE+PikgPT4ge1xuICogICByZXR1cm4gUkEuY2hvcChhcyA9PiB7XG4gKiAgICAgY29uc3QgeyBpbml0LCByZXN0IH0gPSBwaXBlKGFzLCBSQS5zcGFuTGVmdCgoYTogQSkgPT4gUy5lcXVhbHMoYSwgYXNbMF0pKSlcbiAqICAgICByZXR1cm4gW2luaXQsIHJlc3RdXG4gKiAgIH0pXG4gKiB9XG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdyb3VwKE4uRXEpKFsxLCAxLCAyLCAzLCAzLCA0XSksIFtbMSwgMV0sIFsyXSwgWzMsIDNdLCBbNF1dKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaG9wID0gPEEsIEI+KFxuICBmOiAoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gcmVhZG9ubHkgW0IsIFJlYWRvbmx5QXJyYXk8QT5dXG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEI+KSA9PiB7XG4gIGNvbnN0IGcgPSBSTkVBLmNob3AoZilcbiAgcmV0dXJuIChhcykgPT4gKGlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBlbXB0eSlcbn1cblxuLyoqXG4gKiBTcGxpdHMgYSBgUmVhZG9ubHlBcnJheWAgaW50byB0d28gcGllY2VzLCB0aGUgZmlyc3QgcGllY2UgaGFzIG1heCBgbmAgZWxlbWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNwbGl0QXQgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc3BsaXRBdCgyKShbMSwgMiwgMywgNCwgNV0pLCBbWzEsIDJdLCBbMywgNCwgNV1dKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzcGxpdEF0ID0gKG46IG51bWJlcikgPT4gPEE+KGFzOiBSZWFkb25seUFycmF5PEE+KTogcmVhZG9ubHkgW1JlYWRvbmx5QXJyYXk8QT4sIFJlYWRvbmx5QXJyYXk8QT5dID0+XG4gIG4gPj0gMSAmJiBpc05vbkVtcHR5KGFzKSA/IFJORUEuc3BsaXRBdChuKShhcykgOiBpc0VtcHR5KGFzKSA/IFthcywgZW1wdHldIDogW2VtcHR5LCBhc11cblxuLyoqXG4gKiBTcGxpdHMgYSBgUmVhZG9ubHlBcnJheWAgaW50byBsZW5ndGgtYG5gIHBpZWNlcy4gVGhlIGxhc3QgcGllY2Ugd2lsbCBiZSBzaG9ydGVyIGlmIGBuYCBkb2VzIG5vdCBldmVubHkgZGl2aWRlIHRoZSBsZW5ndGggb2ZcbiAqIHRoZSBgUmVhZG9ubHlBcnJheWAuIE5vdGUgdGhhdCBgY2h1bmtzT2YobikoW10pYCBpcyBgW11gLCBub3QgYFtbXV1gLiBUaGlzIGlzIGludGVudGlvbmFsLCBhbmQgaXMgY29uc2lzdGVudCB3aXRoIGEgcmVjdXJzaXZlXG4gKiBkZWZpbml0aW9uIG9mIGBjaHVua3NPZmA7IGl0IHNhdGlzZmllcyB0aGUgcHJvcGVydHkgdGhhdDpcbiAqXG4gKiBgYGB0c1xuICogY2h1bmtzT2YobikoeHMpLmNvbmNhdChjaHVua3NPZihuKSh5cykpID09IGNodW5rc09mKG4pKHhzLmNvbmNhdCh5cykpKVxuICogYGBgXG4gKlxuICogd2hlbmV2ZXIgYG5gIGV2ZW5seSBkaXZpZGVzIHRoZSBsZW5ndGggb2YgYGFzYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY2h1bmtzT2YgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY2h1bmtzT2YoMikoWzEsIDIsIDMsIDQsIDVdKSwgW1sxLCAyXSwgWzMsIDRdLCBbNV1dKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaHVua3NPZiA9IChuOiBudW1iZXIpOiAoPEE+KGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPj4pID0+IHtcbiAgY29uc3QgZiA9IFJORUEuY2h1bmtzT2YobilcbiAgcmV0dXJuIChhcykgPT4gKGlzTm9uRW1wdHkoYXMpID8gZihhcykgOiBlbXB0eSlcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21PcHRpb25LID0gPEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCPihmOiAoLi4uYTogQSkgPT4gT3B0aW9uPEI+KSA9PiAoXG4gIC4uLmE6IEFcbik6IFJlYWRvbmx5QXJyYXk8Qj4gPT4gZnJvbU9wdGlvbihmKC4uLmEpKVxuXG4vKipcbiAqIGBSZWFkb25seUFycmF5YCBjb21wcmVoZW5zaW9uLlxuICpcbiAqIGBgYFxuICogWyBmKHgsIHksIC4uLikgfCB4IOKGkCB4cywgeSDihpAgeXMsIC4uLiwgZyh4LCB5LCAuLi4pIF1cbiAqIGBgYFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb21wcmVoZW5zaW9uIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCB7IHR1cGxlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjb21wcmVoZW5zaW9uKFtbMSwgMiwgM10sIFsnYScsICdiJ11dLCB0dXBsZSwgKGEsIGIpID0+IChhICsgYi5sZW5ndGgpICUgMiA9PT0gMCksIFtcbiAqICAgWzEsICdhJ10sXG4gKiAgIFsxLCAnYiddLFxuICogICBbMywgJ2EnXSxcbiAqICAgWzMsICdiJ11cbiAqIF0pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZWhlbnNpb248QSwgQiwgQywgRCwgUj4oXG4gIGlucHV0OiByZWFkb25seSBbUmVhZG9ubHlBcnJheTxBPiwgUmVhZG9ubHlBcnJheTxCPiwgUmVhZG9ubHlBcnJheTxDPiwgUmVhZG9ubHlBcnJheTxEPl0sXG4gIGY6IChhOiBBLCBiOiBCLCBjOiBDLCBkOiBEKSA9PiBSLFxuICBnPzogKGE6IEEsIGI6IEIsIGM6IEMsIGQ6IEQpID0+IGJvb2xlYW5cbik6IFJlYWRvbmx5QXJyYXk8Uj5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVoZW5zaW9uPEEsIEIsIEMsIFI+KFxuICBpbnB1dDogcmVhZG9ubHkgW1JlYWRvbmx5QXJyYXk8QT4sIFJlYWRvbmx5QXJyYXk8Qj4sIFJlYWRvbmx5QXJyYXk8Qz5dLFxuICBmOiAoYTogQSwgYjogQiwgYzogQykgPT4gUixcbiAgZz86IChhOiBBLCBiOiBCLCBjOiBDKSA9PiBib29sZWFuXG4pOiBSZWFkb25seUFycmF5PFI+XG5leHBvcnQgZnVuY3Rpb24gY29tcHJlaGVuc2lvbjxBLCBCLCBSPihcbiAgaW5wdXQ6IHJlYWRvbmx5IFtSZWFkb25seUFycmF5PEE+LCBSZWFkb25seUFycmF5PEI+XSxcbiAgZjogKGE6IEEsIGI6IEIpID0+IFIsXG4gIGc/OiAoYTogQSwgYjogQikgPT4gYm9vbGVhblxuKTogUmVhZG9ubHlBcnJheTxSPlxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZWhlbnNpb248QSwgUj4oXG4gIGlucHV0OiByZWFkb25seSBbUmVhZG9ubHlBcnJheTxBPl0sXG4gIGY6IChhOiBBKSA9PiBSLFxuICBnPzogKGE6IEEpID0+IGJvb2xlYW5cbik6IFJlYWRvbmx5QXJyYXk8Uj5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVoZW5zaW9uPEEsIFI+KFxuICBpbnB1dDogUmVhZG9ubHlBcnJheTxSZWFkb25seUFycmF5PEE+PixcbiAgZjogKC4uLnhzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSLFxuICBnOiAoLi4ueHM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlXG4pOiBSZWFkb25seUFycmF5PFI+IHtcbiAgY29uc3QgZ28gPSAoc2NvcGU6IFJlYWRvbmx5QXJyYXk8QT4sIGlucHV0OiBSZWFkb25seUFycmF5PFJlYWRvbmx5QXJyYXk8QT4+KTogUmVhZG9ubHlBcnJheTxSPiA9PlxuICAgIGlzTm9uRW1wdHkoaW5wdXQpXG4gICAgICA/IHBpcGUoXG4gICAgICAgICAgUk5FQS5oZWFkKGlucHV0KSxcbiAgICAgICAgICBjaGFpbigoeCkgPT4gZ28ocGlwZShzY29wZSwgYXBwZW5kKHgpKSwgUk5FQS50YWlsKGlucHV0KSkpXG4gICAgICAgIClcbiAgICAgIDogZyguLi5zY29wZSlcbiAgICAgID8gW2YoLi4uc2NvcGUpXVxuICAgICAgOiBlbXB0eVxuICByZXR1cm4gZ28oZW1wdHksIGlucHV0KVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY29uY2F0VyA9IDxCPihzZWNvbmQ6IFJlYWRvbmx5QXJyYXk8Qj4pID0+IDxBPihmaXJzdDogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QSB8IEI+ID0+XG4gIGlzRW1wdHkoZmlyc3QpID8gc2Vjb25kIDogaXNFbXB0eShzZWNvbmQpID8gZmlyc3QgOiAoZmlyc3QgYXMgUmVhZG9ubHlBcnJheTxBIHwgQj4pLmNvbmNhdChzZWNvbmQpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjb25jYXQ6IDxBPihzZWNvbmQ6IFJlYWRvbmx5QXJyYXk8QT4pID0+IChmaXJzdDogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBPiA9IGNvbmNhdFdcblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcywgaW4gb3JkZXIsIGZyb20gYWxsIGdpdmVuIGFycmF5cyB1c2luZyBhIGBFcWAgZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVuaW9uIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbMSwgMl0sIHVuaW9uKE4uRXEpKFsyLCAzXSkpLCBbMSwgMiwgM10pXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uPEE+KFxuICBFOiBFcTxBPlxuKToge1xuICAoeHM6IFJlYWRvbmx5QXJyYXk8QT4pOiAoeXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT5cbiAgKHhzOiBSZWFkb25seUFycmF5PEE+LCB5czogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QT5cbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmlvbjxBPihcbiAgRTogRXE8QT5cbik6ICh4czogUmVhZG9ubHlBcnJheTxBPiwgeXM/OiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+IHwgKCh5czogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBPikge1xuICBjb25zdCB1bmlvbkUgPSBSTkVBLnVuaW9uKEUpXG4gIHJldHVybiAoZmlyc3QsIHNlY29uZD8pID0+IHtcbiAgICBpZiAoc2Vjb25kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHVuaW9uRSA9IHVuaW9uKEUpXG4gICAgICByZXR1cm4gKHNlY29uZCkgPT4gdW5pb25FKHNlY29uZCwgZmlyc3QpXG4gICAgfVxuICAgIHJldHVybiBpc05vbkVtcHR5KGZpcnN0KSAmJiBpc05vbkVtcHR5KHNlY29uZCkgPyB1bmlvbkUoc2Vjb25kKShmaXJzdCkgOiBpc05vbkVtcHR5KGZpcnN0KSA/IGZpcnN0IDogc2Vjb25kXG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGFyZSBpbmNsdWRlZCBpbiBhbGwgZ2l2ZW4gYXJyYXlzIHVzaW5nIGEgYEVxYCBmb3IgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zLiBUaGUgb3JkZXIgYW5kIHJlZmVyZW5jZXMgb2YgcmVzdWx0IHZhbHVlcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgZmlyc3QgYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGludGVyc2VjdGlvbiB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoWzEsIDJdLCBpbnRlcnNlY3Rpb24oTi5FcSkoWzIsIDNdKSksIFsyXSlcbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uPEE+KFxuICBFOiBFcTxBPlxuKToge1xuICAoeHM6IFJlYWRvbmx5QXJyYXk8QT4pOiAoeXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT5cbiAgKHhzOiBSZWFkb25seUFycmF5PEE+LCB5czogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QT5cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Rpb248QT4oXG4gIEU6IEVxPEE+XG4pOiAoeHM6IFJlYWRvbmx5QXJyYXk8QT4sIHlzPzogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBPiB8ICgoeXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT4pIHtcbiAgY29uc3QgZWxlbUUgPSBlbGVtKEUpXG4gIHJldHVybiAoeHMsIHlzPykgPT4ge1xuICAgIGlmICh5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25FID0gaW50ZXJzZWN0aW9uKEUpXG4gICAgICByZXR1cm4gKHlzKSA9PiBpbnRlcnNlY3Rpb25FKHlzLCB4cylcbiAgICB9XG4gICAgcmV0dXJuIHhzLmZpbHRlcigoYSkgPT4gZWxlbUUoYSwgeXMpKVxuICB9XG59XG5cbi8vIFRPRE86IHJlbW92ZSBub24tY3VycmllZCBvdmVybG9hZGluZyBpbiB2M1xuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIGFycmF5IHZhbHVlcyBub3QgaW5jbHVkZWQgaW4gdGhlIG90aGVyIGdpdmVuIGFycmF5IHVzaW5nIGEgYEVxYCBmb3IgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zLiBUaGUgb3JkZXIgYW5kIHJlZmVyZW5jZXMgb2YgcmVzdWx0IHZhbHVlcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgZmlyc3QgYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGRpZmZlcmVuY2UgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyXSwgZGlmZmVyZW5jZShOLkVxKShbMiwgM10pKSwgWzFdKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlPEE+KFxuICBFOiBFcTxBPlxuKToge1xuICAoeHM6IFJlYWRvbmx5QXJyYXk8QT4pOiAoeXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT5cbiAgKHhzOiBSZWFkb25seUFycmF5PEE+LCB5czogUmVhZG9ubHlBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QT5cbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlPEE+KFxuICBFOiBFcTxBPlxuKTogKHhzOiBSZWFkb25seUFycmF5PEE+LCB5cz86IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8QT4gfCAoKHlzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+KSB7XG4gIGNvbnN0IGVsZW1FID0gZWxlbShFKVxuICByZXR1cm4gKHhzLCB5cz8pID0+IHtcbiAgICBpZiAoeXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlmZmVyZW5jZUUgPSBkaWZmZXJlbmNlKEUpXG4gICAgICByZXR1cm4gKHlzKSA9PiBkaWZmZXJlbmNlRSh5cywgeHMpXG4gICAgfVxuICAgIHJldHVybiB4cy5maWx0ZXIoKGEpID0+ICFlbGVtRShhLCB5cykpXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBfbWFwOiBNb25hZDE8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbmNvbnN0IF9tYXBXaXRoSW5kZXg6IEZ1bmN0b3JXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsnbWFwV2l0aEluZGV4J10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcFdpdGhJbmRleChmKSlcbmNvbnN0IF9hcDogQXBwbHkxPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbmNvbnN0IF9jaGFpbjogQ2hhaW4xPFVSST5bJ2NoYWluJ10gPSAobWEsIGYpID0+IHBpcGUobWEsIGNoYWluKGYpKVxuY29uc3QgX2ZpbHRlcjogRmlsdGVyYWJsZTE8VVJJPlsnZmlsdGVyJ10gPSA8QT4oZmE6IFJlYWRvbmx5QXJyYXk8QT4sIHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PlxuICBwaXBlKGZhLCBmaWx0ZXIocHJlZGljYXRlKSlcbmNvbnN0IF9maWx0ZXJNYXA6IEZpbHRlcmFibGUxPFVSST5bJ2ZpbHRlck1hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBmaWx0ZXJNYXAoZikpXG5jb25zdCBfcGFydGl0aW9uOiBGaWx0ZXJhYmxlMTxVUkk+WydwYXJ0aXRpb24nXSA9IDxBPihmYTogUmVhZG9ubHlBcnJheTxBPiwgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+XG4gIHBpcGUoZmEsIHBhcnRpdGlvbihwcmVkaWNhdGUpKVxuY29uc3QgX3BhcnRpdGlvbk1hcDogRmlsdGVyYWJsZTE8VVJJPlsncGFydGl0aW9uTWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIHBhcnRpdGlvbk1hcChmKSlcbmNvbnN0IF9wYXJ0aXRpb25XaXRoSW5kZXg6IEZpbHRlcmFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsncGFydGl0aW9uV2l0aEluZGV4J10gPSA8QT4oXG4gIGZhOiBSZWFkb25seUFycmF5PEE+LFxuICBwcmVkaWNhdGVXaXRoSW5kZXg6IChpOiBudW1iZXIsIGE6IEEpID0+IGJvb2xlYW5cbikgPT4gcGlwZShmYSwgcGFydGl0aW9uV2l0aEluZGV4KHByZWRpY2F0ZVdpdGhJbmRleCkpXG5jb25zdCBfcGFydGl0aW9uTWFwV2l0aEluZGV4OiBGaWx0ZXJhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ3BhcnRpdGlvbk1hcFdpdGhJbmRleCddID0gPEEsIEIsIEM+KFxuICBmYTogUmVhZG9ubHlBcnJheTxBPixcbiAgZjogKGk6IG51bWJlciwgYTogQSkgPT4gRWl0aGVyPEIsIEM+XG4pID0+IHBpcGUoZmEsIHBhcnRpdGlvbk1hcFdpdGhJbmRleChmKSlcbmNvbnN0IF9hbHQ6IEFsdDE8VVJJPlsnYWx0J10gPSAoZmEsIHRoYXQpID0+IHBpcGUoZmEsIGFsdCh0aGF0KSlcbmNvbnN0IF9yZWR1Y2U6IEZvbGRhYmxlMTxVUkk+WydyZWR1Y2UnXSA9IChmYSwgYiwgZikgPT4gcGlwZShmYSwgcmVkdWNlKGIsIGYpKVxuY29uc3QgX2ZvbGRNYXA6IEZvbGRhYmxlMTxVUkk+Wydmb2xkTWFwJ10gPSAoTSkgPT4ge1xuICBjb25zdCBmb2xkTWFwTSA9IGZvbGRNYXAoTSlcbiAgcmV0dXJuIChmYSwgZikgPT4gcGlwZShmYSwgZm9sZE1hcE0oZikpXG59XG5jb25zdCBfcmVkdWNlUmlnaHQ6IEZvbGRhYmxlMTxVUkk+WydyZWR1Y2VSaWdodCddID0gKGZhLCBiLCBmKSA9PiBwaXBlKGZhLCByZWR1Y2VSaWdodChiLCBmKSlcbmNvbnN0IF9yZWR1Y2VXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj5bJ3JlZHVjZVdpdGhJbmRleCddID0gKGZhLCBiLCBmKSA9PlxuICBwaXBlKGZhLCByZWR1Y2VXaXRoSW5kZXgoYiwgZikpXG5jb25zdCBfZm9sZE1hcFdpdGhJbmRleDogRm9sZGFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsnZm9sZE1hcFdpdGhJbmRleCddID0gKE0pID0+IHtcbiAgY29uc3QgZm9sZE1hcFdpdGhJbmRleE0gPSBmb2xkTWFwV2l0aEluZGV4KE0pXG4gIHJldHVybiAoZmEsIGYpID0+IHBpcGUoZmEsIGZvbGRNYXBXaXRoSW5kZXhNKGYpKVxufVxuY29uc3QgX3JlZHVjZVJpZ2h0V2l0aEluZGV4OiBGb2xkYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+WydyZWR1Y2VSaWdodFdpdGhJbmRleCddID0gKGZhLCBiLCBmKSA9PlxuICBwaXBlKGZhLCByZWR1Y2VSaWdodFdpdGhJbmRleChiLCBmKSlcbmNvbnN0IF9maWx0ZXJNYXBXaXRoSW5kZXg6IEZpbHRlcmFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsnZmlsdGVyTWFwV2l0aEluZGV4J10gPSA8QSwgQj4oXG4gIGZhOiBSZWFkb25seUFycmF5PEE+LFxuICBmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBPcHRpb248Qj5cbikgPT4gcGlwZShmYSwgZmlsdGVyTWFwV2l0aEluZGV4KGYpKVxuY29uc3QgX2ZpbHRlcldpdGhJbmRleDogRmlsdGVyYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+WydmaWx0ZXJXaXRoSW5kZXgnXSA9IDxBPihcbiAgZmE6IFJlYWRvbmx5QXJyYXk8QT4sXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGk6IG51bWJlciwgYTogQSkgPT4gYm9vbGVhblxuKSA9PiBwaXBlKGZhLCBmaWx0ZXJXaXRoSW5kZXgocHJlZGljYXRlV2l0aEluZGV4KSlcbmNvbnN0IF9leHRlbmQ6IEV4dGVuZDE8VVJJPlsnZXh0ZW5kJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIGV4dGVuZChmKSlcbmNvbnN0IF90cmF2ZXJzZTogVHJhdmVyc2FibGUxPFVSST5bJ3RyYXZlcnNlJ10gPSA8Rj4oXG4gIEY6IEFwcGxpY2F0aXZlSEtUPEY+XG4pOiAoPEEsIEI+KHRhOiBSZWFkb25seUFycmF5PEE+LCBmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiBIS1Q8RiwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgdHJhdmVyc2VGID0gdHJhdmVyc2UoRilcbiAgcmV0dXJuICh0YSwgZikgPT4gcGlwZSh0YSwgdHJhdmVyc2VGKGYpKVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF90cmF2ZXJzZVdpdGhJbmRleDogVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPlsndHJhdmVyc2VXaXRoSW5kZXgnXSA9IDxGPihcbiAgRjogQXBwbGljYXRpdmVIS1Q8Rj5cbik6ICg8QSwgQj4odGE6IFJlYWRvbmx5QXJyYXk8QT4sIGY6IChpOiBudW1iZXIsIGE6IEEpID0+IEhLVDxGLCBCPikgPT4gSEtUPEYsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IHRyYXZlcnNlV2l0aEluZGV4RiA9IHRyYXZlcnNlV2l0aEluZGV4KEYpXG4gIHJldHVybiAodGEsIGYpID0+IHBpcGUodGEsIHRyYXZlcnNlV2l0aEluZGV4RihmKSlcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBfY2hhaW5SZWNEZXB0aEZpcnN0OiBDaGFpblJlYzE8VVJJPlsnY2hhaW5SZWMnXSA9IChhLCBmKSA9PiBwaXBlKGEsIGNoYWluUmVjRGVwdGhGaXJzdChmKSlcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBfY2hhaW5SZWNCcmVhZHRoRmlyc3Q6IENoYWluUmVjMTxVUkk+WydjaGFpblJlYyddID0gKGEsIGYpID0+IHBpcGUoYSwgY2hhaW5SZWNCcmVhZHRoRmlyc3QoZikpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG9mOiBQb2ludGVkMTxVUkk+WydvZiddID0gUk5FQS5vZlxuXG4vKipcbiAqIEBjYXRlZ29yeSBaZXJvXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHplcm86IFplcm8xPFVSST5bJ3plcm8nXSA9ICgpID0+IGVtcHR5XG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGFsdGBdKCNhbHQpLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgYWx0VyA9IDxCPih0aGF0OiBMYXp5PFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiA8QT4oZmE6IFJlYWRvbmx5QXJyYXk8QT4pOiBSZWFkb25seUFycmF5PEEgfCBCPiA9PlxuICAoZmEgYXMgUmVhZG9ubHlBcnJheTxBIHwgQj4pLmNvbmNhdCh0aGF0KCkpXG5cbi8qKlxuICogSWRlbnRpZmllcyBhbiBhc3NvY2lhdGl2ZSBvcGVyYXRpb24gb24gYSB0eXBlIGNvbnN0cnVjdG9yLiBJdCBpcyBzaW1pbGFyIHRvIGBTZW1pZ3JvdXBgLCBleGNlcHQgdGhhdCBpdCBhcHBsaWVzIHRvXG4gKiB0eXBlcyBvZiBraW5kIGAqIC0+ICpgLlxuICpcbiAqIEBjYXRlZ29yeSBBbHRcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgYWx0OiA8QT4odGhhdDogTGF6eTxSZWFkb25seUFycmF5PEE+PikgPT4gKGZhOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+ID0gYWx0V1xuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcDogPEE+KGZhOiBSZWFkb25seUFycmF5PEE+KSA9PiA8Qj4oZmFiOiBSZWFkb25seUFycmF5PChhOiBBKSA9PiBCPikgPT4gUmVhZG9ubHlBcnJheTxCPiA9IChmYSkgPT5cbiAgY2hhaW4oKGYpID0+IHBpcGUoZmEsIG1hcChmKSkpXG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24uXG4gKlxuICogQGNhdGVnb3J5IE1vbmFkXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluOiA8QSwgQj4oZjogKGE6IEEpID0+IFJlYWRvbmx5QXJyYXk8Qj4pID0+IChtYTogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxCPiA9IChmKSA9PiAobWEpID0+XG4gIHBpcGUoXG4gICAgbWEsXG4gICAgY2hhaW5XaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG4gIClcblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0dGVuOiA8QT4obW1hOiBSZWFkb25seUFycmF5PFJlYWRvbmx5QXJyYXk8QT4+KSA9PiBSZWFkb25seUFycmF5PEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbihpZGVudGl0eSlcblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8Qj4gPSAoZikgPT4gKGZhKSA9PlxuICBmYS5tYXAoKGEpID0+IGYoYSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgbWFwV2l0aEluZGV4OiA8QSwgQj4oZjogKGk6IG51bWJlciwgYTogQSkgPT4gQikgPT4gKGZhOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEI+ID0gKGYpID0+IChcbiAgZmFcbikgPT4gZmEubWFwKChhLCBpKSA9PiBmKGksIGEpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21wYWN0YWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBhcmF0ZSA9IDxBLCBCPihmYTogUmVhZG9ubHlBcnJheTxFaXRoZXI8QSwgQj4+KTogU2VwYXJhdGVkPFJlYWRvbmx5QXJyYXk8QT4sIFJlYWRvbmx5QXJyYXk8Qj4+ID0+IHtcbiAgY29uc3QgbGVmdDogQXJyYXk8QT4gPSBbXVxuICBjb25zdCByaWdodDogQXJyYXk8Qj4gPSBbXVxuICBmb3IgKGNvbnN0IGUgb2YgZmEpIHtcbiAgICBpZiAoZS5fdGFnID09PSAnTGVmdCcpIHtcbiAgICAgIGxlZnQucHVzaChlLmxlZnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJpZ2h0LnB1c2goZS5yaWdodClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEI+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oYnM6IFJlYWRvbmx5QXJyYXk8Qj4pID0+IFJlYWRvbmx5QXJyYXk8Qj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEE+XG59ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiA8QiBleHRlbmRzIEE+KGFzOiBSZWFkb25seUFycmF5PEI+KSA9PiBhcy5maWx0ZXIocHJlZGljYXRlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck1hcFdpdGhJbmRleCA9IDxBLCBCPihmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBPcHRpb248Qj4pID0+IChcbiAgZmE6IFJlYWRvbmx5QXJyYXk8QT5cbik6IFJlYWRvbmx5QXJyYXk8Qj4gPT4ge1xuICBjb25zdCBvdXQ6IEFycmF5PEI+ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG9wdGlvbkIgPSBmKGksIGZhW2ldKVxuICAgIGlmIChfLmlzU29tZShvcHRpb25CKSkge1xuICAgICAgb3V0LnB1c2gob3B0aW9uQi52YWx1ZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBPcHRpb248Qj4pID0+IChmYTogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxCPiA9IChmKSA9PlxuICBmaWx0ZXJNYXBXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbXBhY3RhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhY3Q6IDxBPihmYTogUmVhZG9ubHlBcnJheTxPcHRpb248QT4+KSA9PiBSZWFkb25seUFycmF5PEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBmaWx0ZXJNYXAoaWRlbnRpdHkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcGFydGl0aW9uOiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChcbiAgICBhczogUmVhZG9ubHlBcnJheTxBPlxuICApID0+IFNlcGFyYXRlZDxSZWFkb25seUFycmF5PEE+LCBSZWFkb25seUFycmF5PEI+PlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8QiBleHRlbmRzIEE+KGJzOiBSZWFkb25seUFycmF5PEI+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlBcnJheTxCPiwgUmVhZG9ubHlBcnJheTxCPj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlBcnJheTxBPiwgUmVhZG9ubHlBcnJheTxBPj5cbn0gPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlBcnJheTxBPiwgUmVhZG9ubHlBcnJheTxBPj4pID0+XG4gIHBhcnRpdGlvbldpdGhJbmRleCgoXywgYSkgPT4gcHJlZGljYXRlKGEpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbldpdGhJbmRleDoge1xuICA8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnRXaXRoSW5kZXg6IFJlZmluZW1lbnRXaXRoSW5kZXg8bnVtYmVyLCBBLCBCPik6IChcbiAgICBhczogUmVhZG9ubHlBcnJheTxBPlxuICApID0+IFNlcGFyYXRlZDxSZWFkb25seUFycmF5PEE+LCBSZWFkb25seUFycmF5PEI+PlxuICA8QT4ocHJlZGljYXRlV2l0aEluZGV4OiBQcmVkaWNhdGVXaXRoSW5kZXg8bnVtYmVyLCBBPik6IDxCIGV4dGVuZHMgQT4oXG4gICAgYnM6IFJlYWRvbmx5QXJyYXk8Qj5cbiAgKSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlBcnJheTxCPiwgUmVhZG9ubHlBcnJheTxCPj5cbiAgPEE+KHByZWRpY2F0ZVdpdGhJbmRleDogUHJlZGljYXRlV2l0aEluZGV4PG51bWJlciwgQT4pOiAoXG4gICAgYXM6IFJlYWRvbmx5QXJyYXk8QT5cbiAgKSA9PiBTZXBhcmF0ZWQ8UmVhZG9ubHlBcnJheTxBPiwgUmVhZG9ubHlBcnJheTxBPj5cbn0gPSA8QT4ocHJlZGljYXRlV2l0aEluZGV4OiBQcmVkaWNhdGVXaXRoSW5kZXg8bnVtYmVyLCBBPikgPT4gKFxuICBhczogUmVhZG9ubHlBcnJheTxBPlxuKTogU2VwYXJhdGVkPFJlYWRvbmx5QXJyYXk8QT4sIFJlYWRvbmx5QXJyYXk8QT4+ID0+IHtcbiAgY29uc3QgbGVmdDogQXJyYXk8QT4gPSBbXVxuICBjb25zdCByaWdodDogQXJyYXk8QT4gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGFzW2ldXG4gICAgaWYgKHByZWRpY2F0ZVdpdGhJbmRleChpLCBhKSkge1xuICAgICAgcmlnaHQucHVzaChhKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0LnB1c2goYSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb25NYXA6IDxBLCBCLCBDPihcbiAgZjogKGE6IEEpID0+IEVpdGhlcjxCLCBDPlxuKSA9PiAoZmE6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFNlcGFyYXRlZDxSZWFkb25seUFycmF5PEI+LCBSZWFkb25seUFycmF5PEM+PiA9IChmKSA9PlxuICBwYXJ0aXRpb25NYXBXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcGFydGl0aW9uTWFwV2l0aEluZGV4ID0gPEEsIEIsIEM+KGY6IChpOiBudW1iZXIsIGE6IEEpID0+IEVpdGhlcjxCLCBDPikgPT4gKFxuICBmYTogUmVhZG9ubHlBcnJheTxBPlxuKTogU2VwYXJhdGVkPFJlYWRvbmx5QXJyYXk8Qj4sIFJlYWRvbmx5QXJyYXk8Qz4+ID0+IHtcbiAgY29uc3QgbGVmdDogQXJyYXk8Qj4gPSBbXVxuICBjb25zdCByaWdodDogQXJyYXk8Qz4gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZSA9IGYoaSwgZmFbaV0pXG4gICAgaWYgKGUuX3RhZyA9PT0gJ0xlZnQnKSB7XG4gICAgICBsZWZ0LnB1c2goZS5sZWZ0KVxuICAgIH0gZWxzZSB7XG4gICAgICByaWdodC5wdXNoKGUucmlnaHQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzZXBhcmF0ZWQobGVmdCwgcmlnaHQpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IEZpbHRlcmFibGVXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyV2l0aEluZGV4OiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudFdpdGhJbmRleDogUmVmaW5lbWVudFdpdGhJbmRleDxudW1iZXIsIEEsIEI+KTogKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seUFycmF5PEI+XG4gIDxBPihwcmVkaWNhdGVXaXRoSW5kZXg6IFByZWRpY2F0ZVdpdGhJbmRleDxudW1iZXIsIEE+KTogPEIgZXh0ZW5kcyBBPihiczogUmVhZG9ubHlBcnJheTxCPikgPT4gUmVhZG9ubHlBcnJheTxCPlxuICA8QT4ocHJlZGljYXRlV2l0aEluZGV4OiBQcmVkaWNhdGVXaXRoSW5kZXg8bnVtYmVyLCBBPik6IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxBPlxufSA9IDxBPihwcmVkaWNhdGVXaXRoSW5kZXg6IFByZWRpY2F0ZVdpdGhJbmRleDxudW1iZXIsIEE+KSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBSZWFkb25seUFycmF5PEE+ID0+XG4gIGFzLmZpbHRlcigoYSwgaSkgPT4gcHJlZGljYXRlV2l0aEluZGV4KGksIGEpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBFeHRlbmRcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kOiA8QSwgQj4oZjogKGZhOiBSZWFkb25seUFycmF5PEE+KSA9PiBCKSA9PiAod2E6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRvbmx5QXJyYXk8Qj4gPSAoZikgPT4gKFxuICB3YVxuKSA9PiB3YS5tYXAoKF8sIGkpID0+IGYod2Euc2xpY2UoaSkpKVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBFeHRlbmRgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBkdXBsaWNhdGU6IDxBPih3YTogUmVhZG9ubHlBcnJheTxBPikgPT4gUmVhZG9ubHlBcnJheTxSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZXh0ZW5kKGlkZW50aXR5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVdpdGhJbmRleFxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkTWFwV2l0aEluZGV4ID0gPE0+KE06IE1vbm9pZDxNPikgPT4gPEE+KGY6IChpOiBudW1iZXIsIGE6IEEpID0+IE0pID0+IChmYTogUmVhZG9ubHlBcnJheTxBPik6IE0gPT5cbiAgZmEucmVkdWNlKChiLCBhLCBpKSA9PiBNLmNvbmNhdChiLCBmKGksIGEpKSwgTS5lbXB0eSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRm9sZGFibGVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlOiA8QSwgQj4oYjogQiwgZjogKGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogUmVhZG9ubHlBcnJheTxBPikgPT4gQiA9IChiLCBmKSA9PlxuICByZWR1Y2VXaXRoSW5kZXgoYiwgKF8sIGIsIGEpID0+IGYoYiwgYSkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRNYXA6IDxNPihNOiBNb25vaWQ8TT4pID0+IDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKGZhOiBSZWFkb25seUFycmF5PEE+KSA9PiBNID0gKE0pID0+IHtcbiAgY29uc3QgZm9sZE1hcFdpdGhJbmRleE0gPSBmb2xkTWFwV2l0aEluZGV4KE0pXG4gIHJldHVybiAoZikgPT4gZm9sZE1hcFdpdGhJbmRleE0oKF8sIGEpID0+IGYoYSkpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVdpdGhJbmRleDogPEEsIEI+KGI6IEIsIGY6IChpOiBudW1iZXIsIGI6IEIsIGE6IEEpID0+IEIpID0+IChmYTogUmVhZG9ubHlBcnJheTxBPikgPT4gQiA9IChiLCBmKSA9PiAoXG4gIGZhXG4pID0+IHtcbiAgY29uc3QgbGVuID0gZmEubGVuZ3RoXG4gIGxldCBvdXQgPSBiXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXQgPSBmKGksIG91dCwgZmFbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGb2xkYWJsZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VSaWdodDogPEEsIEI+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAoZmE6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEIgPSAoYiwgZikgPT5cbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXgoYiwgKF8sIGEsIGIpID0+IGYoYSwgYikpXG5cbi8qKlxuICogQGNhdGVnb3J5IEZvbGRhYmxlV2l0aEluZGV4XG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZHVjZVJpZ2h0V2l0aEluZGV4OiA8QSwgQj4oYjogQiwgZjogKGk6IG51bWJlciwgYTogQSwgYjogQikgPT4gQikgPT4gKGZhOiBSZWFkb25seUFycmF5PEE+KSA9PiBCID0gKFxuICBiLFxuICBmXG4pID0+IChmYSkgPT4gZmEucmVkdWNlUmlnaHQoKGIsIGEsIGkpID0+IGYoaSwgYSwgYiksIGIpXG5cbi8qKlxuICogQGNhdGVnb3J5IFRyYXZlcnNhYmxlXG4gKiBAc2luY2UgMi42LjNcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlOiBQaXBlYWJsZVRyYXZlcnNlMTxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIEI+KSA9PiAodGE6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEhLVDxGLCBSZWFkb25seUFycmF5PEI+PikgPT4ge1xuICBjb25zdCB0cmF2ZXJzZVdpdGhJbmRleEYgPSB0cmF2ZXJzZVdpdGhJbmRleChGKVxuICByZXR1cm4gKGYpID0+IHRyYXZlcnNlV2l0aEluZGV4RigoXywgYSkgPT4gZihhKSlcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FibGVcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2U6IFRyYXZlcnNhYmxlMTxVUkk+WydzZXF1ZW5jZSddID0gPEY+KEY6IEFwcGxpY2F0aXZlSEtUPEY+KSA9PiA8QT4oXG4gIHRhOiBSZWFkb25seUFycmF5PEhLVDxGLCBBPj5cbik6IEhLVDxGLCBSZWFkb25seUFycmF5PEE+PiA9PiB7XG4gIHJldHVybiBfcmVkdWNlKHRhLCBGLm9mKHplcm8oKSksIChmYXMsIGZhKSA9PlxuICAgIEYuYXAoXG4gICAgICBGLm1hcChmYXMsIChhcykgPT4gKGE6IEEpID0+IHBpcGUoYXMsIGFwcGVuZChhKSkpLFxuICAgICAgZmFcbiAgICApXG4gIClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FibGVXaXRoSW5kZXhcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VXaXRoSW5kZXg6IFBpcGVhYmxlVHJhdmVyc2VXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiA9IDxGPihGOiBBcHBsaWNhdGl2ZUhLVDxGPikgPT4gPEEsIEI+KFxuICBmOiAoaTogbnVtYmVyLCBhOiBBKSA9PiBIS1Q8RiwgQj5cbik6ICgodGE6IFJlYWRvbmx5QXJyYXk8QT4pID0+IEhLVDxGLCBSZWFkb25seUFycmF5PEI+PikgPT5cbiAgcmVkdWNlV2l0aEluZGV4KEYub2YoemVybygpKSwgKGksIGZicywgYSkgPT5cbiAgICBGLmFwKFxuICAgICAgRi5tYXAoZmJzLCAoYnMpID0+IChiOiBCKSA9PiBwaXBlKGJzLCBhcHBlbmQoYikpKSxcbiAgICAgIGYoaSwgYSlcbiAgICApXG4gIClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2l0aGVyYWJsZVxuICogQHNpbmNlIDIuNi41XG4gKi9cbmV4cG9ydCBjb25zdCB3aXRoZXI6IFBpcGVhYmxlV2l0aGVyMTxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBLCBCPihmOiAoYTogQSkgPT4gSEtUPEYsIE9wdGlvbjxCPj4pID0+IChmYTogUmVhZG9ubHlBcnJheTxBPikgPT4gSEtUPEYsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IF93aXRoZXJGID0gX3dpdGhlcihGKVxuICByZXR1cm4gKGYpID0+IChmYSkgPT4gX3dpdGhlckYoZmEsIGYpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IFdpdGhlcmFibGVcbiAqIEBzaW5jZSAyLjYuNVxuICovXG5leHBvcnQgY29uc3Qgd2lsdDogUGlwZWFibGVXaWx0MTxVUkk+ID0gPEY+KFxuICBGOiBBcHBsaWNhdGl2ZUhLVDxGPlxuKTogKDxBLCBCLCBDPihcbiAgZjogKGE6IEEpID0+IEhLVDxGLCBFaXRoZXI8QiwgQz4+XG4pID0+IChmYTogUmVhZG9ubHlBcnJheTxBPikgPT4gSEtUPEYsIFNlcGFyYXRlZDxSZWFkb25seUFycmF5PEI+LCBSZWFkb25seUFycmF5PEM+Pj4pID0+IHtcbiAgY29uc3QgX3dpbHRGID0gX3dpbHQoRilcbiAgcmV0dXJuIChmKSA9PiAoZmEpID0+IF93aWx0RihmYSwgZilcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgVW5mb2xkYWJsZVxuICogQHNpbmNlIDIuNi42XG4gKi9cbmV4cG9ydCBjb25zdCB1bmZvbGQgPSA8QSwgQj4oYjogQiwgZjogKGI6IEIpID0+IE9wdGlvbjxyZWFkb25seSBbQSwgQl0+KTogUmVhZG9ubHlBcnJheTxBPiA9PiB7XG4gIGNvbnN0IG91dDogQXJyYXk8QT4gPSBbXVxuICBsZXQgYmI6IEIgPSBiXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgbXQgPSBmKGJiKVxuICAgIGlmIChfLmlzU29tZShtdCkpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IG10LnZhbHVlXG4gICAgICBvdXQucHVzaChhKVxuICAgICAgYmIgPSBiXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnUmVhZG9ubHlBcnJheSdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IHR5cGUgVVJJID0gdHlwZW9mIFVSSVxuXG5kZWNsYXJlIG1vZHVsZSAnLi9IS1QnIHtcbiAgaW50ZXJmYWNlIFVSSXRvS2luZDxBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFJlYWRvbmx5QXJyYXk8QT5cbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2hvdyA9IDxBPihTOiBTaG93PEE+KTogU2hvdzxSZWFkb25seUFycmF5PEE+PiA9PiAoe1xuICBzaG93OiAoYXMpID0+IGBbJHthcy5tYXAoUy5zaG93KS5qb2luKCcsICcpfV1gXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VtaWdyb3VwID0gPEEgPSBuZXZlcj4oKTogU2VtaWdyb3VwPFJlYWRvbmx5QXJyYXk8QT4+ID0+ICh7XG4gIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IChpc0VtcHR5KGZpcnN0KSA/IHNlY29uZCA6IGlzRW1wdHkoc2Vjb25kKSA/IGZpcnN0IDogZmlyc3QuY29uY2F0KHNlY29uZCkpXG59KVxuXG4vKipcbiAqIFJldHVybnMgYSBgTW9ub2lkYCBmb3IgYFJlYWRvbmx5QXJyYXk8QT5gLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRNb25vaWQgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGNvbnN0IE0gPSBnZXRNb25vaWQ8bnVtYmVyPigpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0uY29uY2F0KFsxLCAyXSwgWzMsIDRdKSwgWzEsIDIsIDMsIDRdKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0TW9ub2lkID0gPEEgPSBuZXZlcj4oKTogTW9ub2lkPFJlYWRvbmx5QXJyYXk8QT4+ID0+ICh7XG4gIGNvbmNhdDogZ2V0U2VtaWdyb3VwPEE+KCkuY29uY2F0LFxuICBlbXB0eVxufSlcblxuLyoqXG4gKiBEZXJpdmVzIGFuIGBFcWAgb3ZlciB0aGUgYFJlYWRvbmx5QXJyYXlgIG9mIGEgZ2l2ZW4gZWxlbWVudCB0eXBlIGZyb20gdGhlIGBFcWAgb2YgdGhhdCB0eXBlLiBUaGUgZGVyaXZlZCBgRXFgIGRlZmluZXMgdHdvXG4gKiBhcnJheXMgYXMgZXF1YWwgaWYgYWxsIGVsZW1lbnRzIG9mIGJvdGggYXJyYXlzIGFyZSBjb21wYXJlZCBlcXVhbCBwYWlyd2lzZSB3aXRoIHRoZSBnaXZlbiBgRWAuIEluIGNhc2Ugb2YgYXJyYXlzIG9mXG4gKiBkaWZmZXJlbnQgbGVuZ3RocywgdGhlIHJlc3VsdCBpcyBub24gZXF1YWxpdHkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0IHsgZ2V0RXEgfSBmcm9tICdmcC10cy9SZWFkb25seUFycmF5J1xuICpcbiAqIGNvbnN0IEUgPSBnZXRFcShTLkVxKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKEUuZXF1YWxzKFsnYScsICdiJ10sIFsnYScsICdiJ10pLCB0cnVlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKEUuZXF1YWxzKFsnYSddLCBbXSksIGZhbHNlKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0RXEgPSA8QT4oRTogRXE8QT4pOiBFcTxSZWFkb25seUFycmF5PEE+PiA9PlxuICBmcm9tRXF1YWxzKCh4cywgeXMpID0+IHhzLmxlbmd0aCA9PT0geXMubGVuZ3RoICYmIHhzLmV2ZXJ5KCh4LCBpKSA9PiBFLmVxdWFscyh4LCB5c1tpXSkpKVxuXG4vKipcbiAqIERlcml2ZXMgYW4gYE9yZGAgb3ZlciB0aGUgYFJlYWRvbmx5QXJyYXlgIG9mIGEgZ2l2ZW4gZWxlbWVudCB0eXBlIGZyb20gdGhlIGBPcmRgIG9mIHRoYXQgdHlwZS4gVGhlIG9yZGVyaW5nIGJldHdlZW4gdHdvIHN1Y2hcbiAqIGFycmF5cyBpcyBlcXVhbCB0bzogdGhlIGZpcnN0IG5vbiBlcXVhbCBjb21wYXJpc29uIG9mIGVhY2ggYXJyYXlzIGVsZW1lbnRzIHRha2VuIHBhaXJ3aXNlIGluIGluY3JlYXNpbmcgb3JkZXIsIGluXG4gKiBjYXNlIG9mIGVxdWFsaXR5IG92ZXIgYWxsIHRoZSBwYWlyd2lzZSBlbGVtZW50czsgdGhlIGxvbmdlc3QgYXJyYXkgaXMgY29uc2lkZXJlZCB0aGUgZ3JlYXRlc3QsIGlmIGJvdGggYXJyYXlzIGhhdmVcbiAqIHRoZSBzYW1lIGxlbmd0aCwgdGhlIHJlc3VsdCBpcyBlcXVhbGl0eS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0T3JkIH0gZnJvbSAnZnAtdHMvUmVhZG9ubHlBcnJheSdcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICpcbiAqIGNvbnN0IE8gPSBnZXRPcmQoUy5PcmQpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKFsnYiddLCBbJ2EnXSksIDEpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKFsnYSddLCBbJ2EnXSksIDApXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKFsnYSddLCBbJ2InXSksIC0xKVxuICpcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yZCA9IDxBPihPOiBPcmQ8QT4pOiBPcmQ8UmVhZG9ubHlBcnJheTxBPj4gPT5cbiAgZnJvbUNvbXBhcmUoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhTGVuID0gYS5sZW5ndGhcbiAgICBjb25zdCBiTGVuID0gYi5sZW5ndGhcbiAgICBjb25zdCBsZW4gPSBNYXRoLm1pbihhTGVuLCBiTGVuKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IG9yZGVyaW5nID0gTy5jb21wYXJlKGFbaV0sIGJbaV0pXG4gICAgICBpZiAob3JkZXJpbmcgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyaW5nXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOLk9yZC5jb21wYXJlKGFMZW4sIGJMZW4pXG4gIH0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25TZW1pZ3JvdXAgPSA8QT4oRTogRXE8QT4pOiBTZW1pZ3JvdXA8UmVhZG9ubHlBcnJheTxBPj4gPT4ge1xuICBjb25zdCB1bmlvbkUgPSB1bmlvbihFKVxuICByZXR1cm4ge1xuICAgIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IHVuaW9uRShzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25Nb25vaWQgPSA8QT4oRTogRXE8QT4pOiBNb25vaWQ8UmVhZG9ubHlBcnJheTxBPj4gPT4gKHtcbiAgY29uY2F0OiBnZXRVbmlvblNlbWlncm91cChFKS5jb25jYXQsXG4gIGVtcHR5XG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEludGVyc2VjdGlvblNlbWlncm91cCA9IDxBPihFOiBFcTxBPik6IFNlbWlncm91cDxSZWFkb25seUFycmF5PEE+PiA9PiB7XG4gIGNvbnN0IGludGVyc2VjdGlvbkUgPSBpbnRlcnNlY3Rpb24oRSlcbiAgcmV0dXJuIHtcbiAgICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBpbnRlcnNlY3Rpb25FKHNlY29uZCkoZmlyc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREaWZmZXJlbmNlTWFnbWEgPSA8QT4oRTogRXE8QT4pOiBNYWdtYTxSZWFkb25seUFycmF5PEE+PiA9PiB7XG4gIGNvbnN0IGRpZmZlcmVuY2VFID0gZGlmZmVyZW5jZShFKVxuICByZXR1cm4ge1xuICAgIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IGRpZmZlcmVuY2VFKHNlY29uZCkoZmlyc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMTxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yV2l0aEluZGV4OiBGdW5jdG9yV2l0aEluZGV4MTxVUkksIG51bWJlcj4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBtYXBXaXRoSW5kZXg6IF9tYXBXaXRoSW5kZXhcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBseTogQXBwbHkxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwXG59XG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseSlcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFNlY29uZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTZWNvbmRfKEFwcGx5KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmU6IEFwcGxpY2F0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4xPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZDogTW9uYWQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uIGFuZFxuICoga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RfKENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgVW5mb2xkYWJsZTogVW5mb2xkYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICB1bmZvbGRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFsdDogQWx0MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYWx0OiBfYWx0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgWmVybzogWmVybzE8VVJJPiA9IHtcbiAgVVJJLFxuICB6ZXJvXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ3VhcmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGd1YXJkXyhaZXJvLCBQb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQWx0ZXJuYXRpdmU6IEFsdGVybmF0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGFsdDogX2FsdCxcbiAgemVyb1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRXh0ZW5kOiBFeHRlbmQxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBleHRlbmQ6IF9leHRlbmRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbXBhY3RhYmxlOiBDb21wYWN0YWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRmlsdGVyYWJsZTogRmlsdGVyYWJsZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGNvbXBhY3QsXG4gIHNlcGFyYXRlLFxuICBmaWx0ZXI6IF9maWx0ZXIsXG4gIGZpbHRlck1hcDogX2ZpbHRlck1hcCxcbiAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICBwYXJ0aXRpb25NYXA6IF9wYXJ0aXRpb25NYXBcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZpbHRlcmFibGVXaXRoSW5kZXg6IEZpbHRlcmFibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgcGFydGl0aW9uTWFwV2l0aEluZGV4OiBfcGFydGl0aW9uTWFwV2l0aEluZGV4LFxuICBwYXJ0aXRpb25XaXRoSW5kZXg6IF9wYXJ0aXRpb25XaXRoSW5kZXgsXG4gIGZpbHRlck1hcFdpdGhJbmRleDogX2ZpbHRlck1hcFdpdGhJbmRleCxcbiAgZmlsdGVyV2l0aEluZGV4OiBfZmlsdGVyV2l0aEluZGV4XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGb2xkYWJsZTogRm9sZGFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgRm9sZGFibGVXaXRoSW5kZXg6IEZvbGRhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj4gPSB7XG4gIFVSSSxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgcmVkdWNlV2l0aEluZGV4OiBfcmVkdWNlV2l0aEluZGV4LFxuICBmb2xkTWFwV2l0aEluZGV4OiBfZm9sZE1hcFdpdGhJbmRleCxcbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6IF9yZWR1Y2VSaWdodFdpdGhJbmRleFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgVHJhdmVyc2FibGU6IFRyYXZlcnNhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2Vcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYXZlcnNhYmxlV2l0aEluZGV4OiBUcmF2ZXJzYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICByZWR1Y2VXaXRoSW5kZXg6IF9yZWR1Y2VXaXRoSW5kZXgsXG4gIGZvbGRNYXBXaXRoSW5kZXg6IF9mb2xkTWFwV2l0aEluZGV4LFxuICByZWR1Y2VSaWdodFdpdGhJbmRleDogX3JlZHVjZVJpZ2h0V2l0aEluZGV4LFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICBzZXF1ZW5jZSxcbiAgdHJhdmVyc2VXaXRoSW5kZXg6IF90cmF2ZXJzZVdpdGhJbmRleFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDaGFpblJlY1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5SZWNEZXB0aEZpcnN0ID0gPEEsIEI+KGY6IChhOiBBKSA9PiBSZWFkb25seUFycmF5PEVpdGhlcjxBLCBCPj4pID0+IChhOiBBKTogUmVhZG9ubHlBcnJheTxCPiA9PiB7XG4gIGNvbnN0IHRvZG86IEFycmF5PEVpdGhlcjxBLCBCPj4gPSBbLi4uZihhKV1cbiAgY29uc3Qgb3V0OiBBcnJheTxCPiA9IFtdXG5cbiAgd2hpbGUgKHRvZG8ubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGUgPSB0b2RvLnNoaWZ0KCkhXG4gICAgaWYgKF8uaXNMZWZ0KGUpKSB7XG4gICAgICB0b2RvLnVuc2hpZnQoLi4uZihlLmxlZnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXQucHVzaChlLnJpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpblJlY0RlcHRoRmlyc3Q6IENoYWluUmVjMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpbixcbiAgY2hhaW5SZWM6IF9jaGFpblJlY0RlcHRoRmlyc3Rcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ2hhaW5SZWNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluUmVjQnJlYWR0aEZpcnN0ID0gPEEsIEI+KGY6IChhOiBBKSA9PiBSZWFkb25seUFycmF5PEVpdGhlcjxBLCBCPj4pID0+IChhOiBBKTogUmVhZG9ubHlBcnJheTxCPiA9PiB7XG4gIGNvbnN0IGluaXRpYWwgPSBmKGEpXG4gIGNvbnN0IHRvZG86IEFycmF5PEVpdGhlcjxBLCBCPj4gPSBbXVxuICBjb25zdCBvdXQ6IEFycmF5PEI+ID0gW11cblxuICBmdW5jdGlvbiBnbyhlOiBFaXRoZXI8QSwgQj4pOiB2b2lkIHtcbiAgICBpZiAoXy5pc0xlZnQoZSkpIHtcbiAgICAgIGYoZS5sZWZ0KS5mb3JFYWNoKCh2KSA9PiB0b2RvLnB1c2godikpXG4gICAgfSBlbHNlIHtcbiAgICAgIG91dC5wdXNoKGUucmlnaHQpXG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBlIG9mIGluaXRpYWwpIHtcbiAgICBnbyhlKVxuICB9XG5cbiAgd2hpbGUgKHRvZG8ubGVuZ3RoID4gMCkge1xuICAgIGdvKHRvZG8uc2hpZnQoKSEpXG4gIH1cblxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW5SZWNCcmVhZHRoRmlyc3Q6IENoYWluUmVjMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpbixcbiAgY2hhaW5SZWM6IF9jaGFpblJlY0JyZWFkdGhGaXJzdFxufVxuXG5jb25zdCBfd2l0aGVyOiBXaXRoZXJhYmxlMTxVUkk+Wyd3aXRoZXInXSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgd2l0aGVyRGVmYXVsdChUcmF2ZXJzYWJsZSwgQ29tcGFjdGFibGUpXG5jb25zdCBfd2lsdDogV2l0aGVyYWJsZTE8VVJJPlsnd2lsdCddID1cbiAgLyojX19QVVJFX18qL1xuICB3aWx0RGVmYXVsdChUcmF2ZXJzYWJsZSwgQ29tcGFjdGFibGUpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBXaXRoZXJhYmxlOiBXaXRoZXJhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgcmVkdWNlOiBfcmVkdWNlLFxuICBmb2xkTWFwOiBfZm9sZE1hcCxcbiAgcmVkdWNlUmlnaHQ6IF9yZWR1Y2VSaWdodCxcbiAgdHJhdmVyc2U6IF90cmF2ZXJzZSxcbiAgc2VxdWVuY2UsXG4gIHdpdGhlcjogX3dpdGhlcixcbiAgd2lsdDogX3dpbHRcbn1cblxuLyoqXG4gKiBGaWx0ZXIgdmFsdWVzIGluc2lkZSBhIGNvbnRleHQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqIGltcG9ydCAqIGFzIFJBIGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgKiBhcyBUIGZyb20gJ2ZwLXRzL1Rhc2snXG4gKlxuICogY29uc3QgZmlsdGVyRSA9IFJBLmZpbHRlckUoVC5BcHBsaWNhdGl2ZVBhcilcbiAqIGFzeW5jIGZ1bmN0aW9uIHRlc3QoKSB7XG4gKiAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gKiAgICAgYXdhaXQgcGlwZShcbiAqICAgICAgIFstMSwgMiwgM10sXG4gKiAgICAgICBmaWx0ZXJFKChuKSA9PiBULm9mKG4gPiAwKSlcbiAqICAgICApKCksXG4gKiAgICAgWzIsIDNdXG4gKiAgIClcbiAqIH1cbiAqIHRlc3QoKVxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlckUgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZpbHRlckVfKFdpdGhlcmFibGUpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbUVpdGhlcjogRnJvbUVpdGhlcjE8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tRWl0aGVyXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tRWl0aGVySyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUVpdGhlcktfKEZyb21FaXRoZXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHVuc2FmZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSB1bnNhZmVcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlSW5zZXJ0QXQ6IDxBPihpOiBudW1iZXIsIGE6IEEsIGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4gPVxuICBSTkVBLnVuc2FmZUluc2VydEF0XG5cbi8qKlxuICogQGNhdGVnb3J5IHVuc2FmZVxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVVcGRhdGVBdCA9IDxBPihpOiBudW1iZXIsIGE6IEEsIGFzOiBSZWFkb25seUFycmF5PEE+KTogUmVhZG9ubHlBcnJheTxBPiA9PlxuICBpc05vbkVtcHR5KGFzKSA/IFJORUEudW5zYWZlVXBkYXRlQXQoaSwgYSwgYXMpIDogYXNcblxuLyoqXG4gKiBAY2F0ZWdvcnkgdW5zYWZlXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZURlbGV0ZUF0ID0gPEE+KGk6IG51bWJlciwgYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBSZWFkb25seUFycmF5PEE+ID0+IHtcbiAgY29uc3QgeHMgPSBhcy5zbGljZSgpXG4gIHhzLnNwbGljZShpLCAxKVxuICByZXR1cm4geHNcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW50ZXJvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi41LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvQXJyYXkgPSA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBBcnJheTxBPiA9PiBhcy5zbGljZSgpXG5cbi8qKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjUuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUFycmF5ID0gPEE+KGFzOiBBcnJheTxBPik6IFJlYWRvbmx5QXJyYXk8QT4gPT4gKGlzRW1wdHkoYXMpID8gZW1wdHkgOiBhcy5zbGljZSgpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEFuIGVtcHR5IGFycmF5XG4gKlxuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBlbXB0eTogUmVhZG9ubHlBcnJheTxuZXZlcj4gPSBSTkVBLmVtcHR5XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwcmVkaWNhdGUgaG9sZHMgdHJ1ZSBmb3IgZXZlcnkgYXJyYXkgbWVtYmVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBldmVyeSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogY29uc3QgaXNQb3NpdGl2ZSA9IChuOiBudW1iZXIpOiBib29sZWFuID0+IG4gPiAwXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAzXSwgZXZlcnkoaXNQb3NpdGl2ZSkpLCB0cnVlKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFsxLCAyLCAtM10sIGV2ZXJ5KGlzUG9zaXRpdmUpKSwgZmFsc2UpXG4gKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBldmVyeSA9IDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KTogYm9vbGVhbiA9PiBhcy5ldmVyeShwcmVkaWNhdGUpXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwcmVkaWNhdGUgaG9sZHMgdHJ1ZSBmb3IgYW55IGFycmF5IG1lbWJlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29tZSB9IGZyb20gJ2ZwLXRzL1JlYWRvbmx5QXJyYXknXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogY29uc3QgaXNQb3NpdGl2ZSA9IChuOiBudW1iZXIpOiBib29sZWFuID0+IG4gPiAwXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwaXBlKFstMSwgLTIsIDNdLCBzb21lKGlzUG9zaXRpdmUpKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZShbLTEsIC0yLCAtM10sIHNvbWUoaXNQb3NpdGl2ZSkpLCBmYWxzZSlcbiAqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNvbWUgPSA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPik6IGFzIGlzIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPiA9PlxuICBhcy5zb21lKHByZWRpY2F0ZSlcblxuLyoqXG4gKiBBbGlhcyBvZiBbYHNvbWVgXSgjc29tZSlcbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBleGlzdHMgPSBzb21lXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRvIG5vdGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBEbzogUmVhZG9ubHlBcnJheTx7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBwaXBlYWJsZSBzZXF1ZW5jZSBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVXNlIGBSZWFkb25seU5vbkVtcHR5QXJyYXlgIG1vZHVsZSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjUuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gUk5FQS5yYW5nZVxuXG4vKipcbiAqIFVzZSBbYHByZXBlbmRgXSgjcHJlcGVuZCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zID0gUk5FQS5jb25zXG5cbi8qKlxuICogVXNlIFtgYXBwZW5kYF0oI2FwcGVuZCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi41LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzbm9jID0gUk5FQS5zbm9jXG5cbi8qKlxuICogVXNlIFtgcHJlcGVuZEFsbGBdKCNwcmVwZW5kYWxsKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuOS4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgcHJlcGVuZFRvQWxsID0gcHJlcGVuZEFsbFxuXG4vKipcbiAqIFVzZSBzbWFsbCwgc3BlY2lmaWMgaW5zdGFuY2VzIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgcmVhZG9ubHlBcnJheTogRnVuY3RvcldpdGhJbmRleDE8VVJJLCBudW1iZXI+ICZcbiAgTW9uYWQxPFVSST4gJlxuICBVbmZvbGRhYmxlMTxVUkk+ICZcbiAgQWx0ZXJuYXRpdmUxPFVSST4gJlxuICBFeHRlbmQxPFVSST4gJlxuICBGaWx0ZXJhYmxlV2l0aEluZGV4MTxVUkksIG51bWJlcj4gJlxuICBGb2xkYWJsZVdpdGhJbmRleDE8VVJJLCBudW1iZXI+ICZcbiAgVHJhdmVyc2FibGVXaXRoSW5kZXgxPFVSSSwgbnVtYmVyPiAmXG4gIFdpdGhlcmFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICBwYXJ0aXRpb25NYXBXaXRoSW5kZXg6IF9wYXJ0aXRpb25NYXBXaXRoSW5kZXgsXG4gIHBhcnRpdGlvbldpdGhJbmRleDogX3BhcnRpdGlvbldpdGhJbmRleCxcbiAgZmlsdGVyTWFwV2l0aEluZGV4OiBfZmlsdGVyTWFwV2l0aEluZGV4LFxuICBmaWx0ZXJXaXRoSW5kZXg6IF9maWx0ZXJXaXRoSW5kZXgsXG4gIGFsdDogX2FsdCxcbiAgemVybyxcbiAgdW5mb2xkLFxuICByZWR1Y2U6IF9yZWR1Y2UsXG4gIGZvbGRNYXA6IF9mb2xkTWFwLFxuICByZWR1Y2VSaWdodDogX3JlZHVjZVJpZ2h0LFxuICB0cmF2ZXJzZTogX3RyYXZlcnNlLFxuICBzZXF1ZW5jZSxcbiAgcmVkdWNlV2l0aEluZGV4OiBfcmVkdWNlV2l0aEluZGV4LFxuICBmb2xkTWFwV2l0aEluZGV4OiBfZm9sZE1hcFdpdGhJbmRleCxcbiAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6IF9yZWR1Y2VSaWdodFdpdGhJbmRleCxcbiAgdHJhdmVyc2VXaXRoSW5kZXg6IF90cmF2ZXJzZVdpdGhJbmRleCxcbiAgZXh0ZW5kOiBfZXh0ZW5kLFxuICB3aXRoZXI6IF93aXRoZXIsXG4gIHdpbHQ6IF93aWx0XG59XG4iXX0=